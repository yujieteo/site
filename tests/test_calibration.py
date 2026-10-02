"""The site's side of Calibrator: raw.toon parsing, calibration Corpus Records and the #calibrator tag.

The instrument's own logic is tested in yujieteo/calibrator; the port is checked in test_visual_ports.py.
Every check here works on a small in-memory history and stays well under a second.
"""

import json
import sys
import unittest
from pathlib import Path

from jsonschema import Draft7Validator


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from calibration import FIELDS, CalibrationError, answered_calibrations, load_raw, parse_raw  # noqa: E402
from notes import load_registry, parse_notes  # noqa: E402
from published_corpus import build_published_corpus  # noqa: E402
from toon import encode  # noqa: E402


def row(table, **values):
    return {field: values.get(field) for field in FIELDS[table]}


def history(proposition="Should I stop project X?", final=40, answered_at="2026-10-02T09:00:12.000Z", order=(0, 1, 2)):
    questions = [row(
        "questions", question_id=f"q-{n}", session_id="s-1", proposition=proposition if n == 1 else f"Question {n}?",
        context="Three notes show no progress.", high_action="stop X", low_action="continue X", origin="notes",
        info_gain=80, action_impact=70, novelty=50, adversariality=90, relevance=75, explore_exploit="exploit",
        resolution_rule="A later note says X stopped.", resolution_horizon="2026-11-01",
        resolution_status="unresolved", generated_at="2026-10-02T08:00:00Z",
    ) for n in (1, 2, 3)]
    responses = [
        row("responses", question_id="q-1", state="answered", first_probability=70, final_probability=final,
            revision_count=1, time_to_first_answer_ms=4200, time_to_final_answer_ms=12000,
            first_shown_at="2026-10-02T09:00:00.000Z", first_answered_at="2026-10-02T09:00:04.200Z",
            final_answered_at=answered_at),
        row("responses", question_id="q-2", state="skipped"),
        row("responses", question_id="q-3", state="unseen"),
    ]
    return encode({
        "format": "calibrator-raw", "version": 1,
        "sessions": [row("sessions", session_id="s-1", generated_at="2026-10-02T08:00:00Z", question_count=3,
                         imported_at="2026-10-02T08:59:00.000Z", exported_at="2026-10-02T09:01:00.000Z",
                         answered=1, skipped=1, unseen=1)],
        "questions": [questions[i] for i in order],
        "sources": [row("sources", question_id=f"q-{n}", source_id="s1", title="Notes",
                        url="https://teoyujie.org/notes.html", retrieved_at="2026-10-02T07:40:00Z") for n in (1, 2, 3)],
        "claims": [row("claims", question_id="q-1", source_id="s1", claim="Three notes show no progress.")],
        "responses": [responses[i] for i in order],
        "revisions": [row("revisions", question_id="q-1", revision=1, probability=final,
                          at=answered_at, ms_since_first_shown=12000)],
    })


def corpus(text):
    cv = {"name": "Example", "bio": "Bio", "bio_html": "<p>Bio</p>"}
    about = {"intro": "Hi", "intro_html": "<p>Hi</p>", "sections": []}
    notes = {"entries": []}
    return build_published_corpus(cv, about, [], [], [], notes, calibrations=answered_calibrations(parse_raw(text)))


def calibration_records(text):
    return [record for record in corpus(text)["records"] if record["kind"] == "calibration"]


class CalibrationTests(unittest.TestCase):
    def test_raw_toon_parses(self):
        tables = load_raw()
        self.assertEqual(set(tables), set(FIELDS))
        self.assertEqual(len(parse_raw(history())["responses"]), 3)
        duplicate = history().replace("q-2,s-1,", "q-1,s-1,", 1)
        with self.assertRaisesRegex(CalibrationError, "duplicate question_id q-1"):
            parse_raw(duplicate)
        with self.assertRaisesRegex(CalibrationError, "line 1"):
            parse_raw("format: \"unterminated")

    def test_one_record_per_answered_question(self):
        records = calibration_records(history())
        self.assertEqual([record["id"] for record in records], ["calibration:q-1"])
        record = records[0]
        self.assertEqual(record["date"], "2026-10-02")
        self.assertEqual(record["tags"], ["calibrator"])
        self.assertIn("Probability: 40% (first answer 70%, 1 revision).", record["content"])
        self.assertIn("Source: Notes <https://teoyujie.org/notes.html>", record["content"])
        self.assertFalse(any(r["id"].startswith("note:") for r in corpus(history())["records"]), "not a note")

    def test_identity_is_the_question_id(self):
        first = calibration_records(history())[0]
        changed = calibration_records(history(proposition="Reworded?", final=55,
                                              answered_at="2026-12-01T00:00:00.000Z", order=(2, 0, 1)))[0]
        self.assertEqual(changed["id"], first["id"])
        self.assertNotEqual(changed["revision"], first["revision"])

    def test_corpus_schema_accepts_calibration_records(self):
        schema = json.loads((ROOT / "schema" / "generated" / "corpus.schema.json").read_text(encoding="utf-8"))
        errors = list(Draft7Validator(schema).iter_errors(corpus(history())))
        self.assertEqual(errors, [])

    def test_calibrator_tag_is_canonical(self):
        registry = load_registry()
        self.assertIn("calibrator", registry["tags"])
        document = parse_notes("---\ntitle: Notes\n---\n\n## 2026-10-02\n\nPrototype the smallest proof-agent experiment first. "
                               "#calibrator #agents #act-now\n", registry)
        self.assertEqual(document["entries"][0]["notes"][0]["tags"], ["calibrator", "agents", "act-now"])


if __name__ == "__main__":
    unittest.main()
