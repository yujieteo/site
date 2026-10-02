"""Read the Calibrator history (data/calibrator/raw.toon) for the Published Corpus.

raw.toon accumulates exported Calibrator sessions (schema: visuals/calibrator/README.md). Each
answered question becomes one calibration Corpus Record, identified by its immutable question_id.
"""

import re
from pathlib import Path

from toon import ToonError, decode


ROOT = Path(__file__).resolve().parent.parent
RAW_PATH = ROOT / "data" / "calibrator" / "raw.toon"
FORMAT = "calibrator-raw"
FIELDS = {
    "sessions": ["session_id", "generated_at", "generator", "inputs", "question_count", "imported_at",
                 "exported_at", "answered", "skipped", "unseen"],
    "questions": ["question_id", "session_id", "proposition", "context", "high_action", "low_action", "origin",
                  "info_gain", "action_impact", "novelty", "adversariality", "relevance", "explore_exploit",
                  "resolution_rule", "resolution_horizon", "resolution_status", "outcome", "resolution_evidence",
                  "generated_at"],
    "sources": ["question_id", "source_id", "title", "url", "published_at", "retrieved_at"],
    "claims": ["question_id", "source_id", "claim"],
    "responses": ["question_id", "state", "first_probability", "final_probability", "revision_count",
                  "time_to_first_answer_ms", "time_to_final_answer_ms", "first_shown_at", "first_answered_at",
                  "final_answered_at"],
    "revisions": ["question_id", "revision", "probability", "at", "ms_since_first_shown"],
}
STATES = {"answered", "skipped", "unseen"}
QUESTION_ID = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]*$")
DATE = re.compile(r"^[0-9]{4}-[0-9]{2}-[0-9]{2}")


class CalibrationError(ValueError):
    pass


def _probability(value):
    return isinstance(value, int) and not isinstance(value, bool) and 0 <= value <= 100


def parse_raw(text, label="raw.toon"):
    """Decode and check raw.toon; return its tables. Raise CalibrationError naming every problem."""
    try:
        document = decode(text)
    except ToonError as exc:
        raise CalibrationError(f"{label}: {exc}") from exc
    errors = []
    if document.get("format") != FORMAT or document.get("version") != 1:
        errors.append(f"{label}: format must be {FORMAT} version 1")
    if set(document) != {"format", "version", *FIELDS}:
        errors.append(f"{label}: top-level keys must be format, version and {', '.join(FIELDS)}")
    tables = {name: document.get(name) for name in FIELDS}
    for name, rows in tables.items():
        if not isinstance(rows, list):
            errors.append(f"{label}: {name} must be a table")
            tables[name] = []
            continue
        for index, row in enumerate(rows, 1):
            if not isinstance(row, dict) or list(row) != FIELDS[name]:
                errors.append(f"{label}: {name} row {index} must have the fields {', '.join(FIELDS[name])}")
    if errors:
        raise CalibrationError("\n".join(errors))

    sessions = {row["session_id"] for row in tables["sessions"]}
    questions = {}
    for row in tables["questions"]:
        question_id = row["question_id"]
        if not isinstance(question_id, str) or not QUESTION_ID.match(question_id):
            errors.append(f"{label}: question_id {question_id!r} is not a stable id")
        elif question_id in questions:
            errors.append(f"{label}: duplicate question_id {question_id}")
        if row["session_id"] not in sessions:
            errors.append(f"{label}: question {question_id} names unknown session {row['session_id']}")
        if row["resolution_status"] not in {"unresolved", "resolved"}:
            errors.append(f"{label}: question {question_id} resolution_status must be unresolved or resolved")
        if row["resolution_status"] == "unresolved" and row["outcome"] is not None:
            errors.append(f"{label}: unresolved question {question_id} has an outcome")
        questions[question_id] = row
    responses = {}
    for row in tables["responses"]:
        question_id = row["question_id"]
        if question_id not in questions:
            errors.append(f"{label}: response for unknown question {question_id}")
        elif question_id in responses:
            errors.append(f"{label}: duplicate response for {question_id}")
        if row["state"] not in STATES:
            errors.append(f"{label}: response {question_id} state must be answered, skipped or unseen")
        elif row["state"] == "answered":
            if not (_probability(row["first_probability"]) and _probability(row["final_probability"])):
                errors.append(f"{label}: answered {question_id} needs integer probabilities from 0 to 100")
            if not (isinstance(row["final_answered_at"], str) and DATE.match(row["final_answered_at"])):
                errors.append(f"{label}: answered {question_id} needs final_answered_at")
        responses[question_id] = row
    for question_id in questions.keys() - responses.keys():
        errors.append(f"{label}: question {question_id} has no response row")
    for name in ("sources", "claims", "revisions"):
        for row in tables[name]:
            if row["question_id"] not in questions:
                errors.append(f"{label}: {name} row for unknown question {row['question_id']}")
    if errors:
        raise CalibrationError("\n".join(errors))
    return tables


def load_raw(path=RAW_PATH):
    return parse_raw(Path(path).read_text(encoding="utf-8"), Path(path).name)


def answered_calibrations(tables):
    """One entry per answered question, in raw.toon order, with its question, response and provenance."""
    questions = {row["question_id"]: row for row in tables["questions"]}
    entries = []
    for response in tables["responses"]:
        if response["state"] != "answered":
            continue
        question_id = response["question_id"]
        entries.append({
            "question": questions[question_id],
            "response": response,
            "sources": [row for row in tables["sources"] if row["question_id"] == question_id],
            "claims": [row for row in tables["claims"] if row["question_id"] == question_id],
        })
    return entries
