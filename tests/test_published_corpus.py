import copy
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from published_corpus import build_published_corpus  # noqa: E402


class PublishedCorpusTests(unittest.TestCase):
    def fixtures(self):
        cv = {"name": "Example", "bio": "Public bio", "bio_html": "<p>Public bio</p>"}
        about = {"intro": "Hello", "intro_html": "<p>Hello</p>", "sections": []}
        resources = [{"title": "Resource", "url": "https://example.com/r", "category": "math", "tags": ["math"], "private": "omit"}]
        papers = []
        posts = []
        notes = {"entries": [{"date": "2026-09-25", "notes": [
            {"content": "First", "body_html": "<p>First</p>", "plain_text": "First", "tags": ["one"]},
            {"content": "Second", "body_html": "<p>Second</p>", "plain_text": "Second", "tags": ["two"]},
        ]}]}
        return cv, about, resources, papers, posts, notes

    def test_build_does_not_mutate_inputs(self):
        fixtures = self.fixtures()
        original = copy.deepcopy(fixtures)

        build_published_corpus(*fixtures)

        self.assertEqual(fixtures, original)

    def test_note_identity_survives_reordering(self):
        fixtures = self.fixtures()
        first = build_published_corpus(*copy.deepcopy(fixtures))
        reordered = copy.deepcopy(fixtures)
        reordered[-1]["entries"][0]["notes"].reverse()
        second = build_published_corpus(*reordered)
        first_ids = {record["id"] for record in first["records"] if record["kind"] == "note"}
        second_ids = {record["id"] for record in second["records"] if record["kind"] == "note"}
        self.assertEqual(first_ids, second_ids)

    def test_revision_changes_with_public_content(self):
        fixtures = self.fixtures()
        first = build_published_corpus(*copy.deepcopy(fixtures))
        changed = copy.deepcopy(fixtures)
        changed[2][0]["note"] = "Changed"
        second = build_published_corpus(*changed)
        self.assertNotEqual(first["revision"], second["revision"])

    def test_source_only_fields_are_not_published(self):
        corpus = build_published_corpus(*self.fixtures())
        resource = next(record for record in corpus["records"] if record["kind"] == "resource")
        self.assertNotIn("private", resource)

    def test_podcast_records_publish_audio_metadata(self):
        cv, about, resources, papers, posts, notes = self.fixtures()
        podcasts = [{
            "id": "2026-09-27-agents",
            "title": "Notes on agents",
            "date": "2026-09-27",
            "summary": "Condensed notes on agents.",
            "focus_tags": ["agents"],
            "duration_seconds": 1800.0,
            "audio": "audio/2026-09-27-agents.mp3",
        }]
        corpus = build_published_corpus(
            cv, about, resources, papers, posts, notes, (), podcasts
        )
        record = next(item for item in corpus["records"] if item["kind"] == "podcast")
        self.assertEqual(record["id"], "podcast:2026-09-27-agents")
        self.assertEqual(record["url"], "podcast/2026-09-27-agents.html")
        self.assertEqual(record["audioUrl"], "podcast/audio/2026-09-27-agents.mp3")
        self.assertEqual(record["durationSeconds"], 1800.0)
        self.assertEqual(record["tags"], ["agents"])

    def test_every_record_has_a_unique_id_and_revision(self):
        corpus = build_published_corpus(*self.fixtures())
        ids = [record["id"] for record in corpus["records"]]
        self.assertEqual(len(ids), len(set(ids)))
        self.assertTrue(all(len(record["revision"]) == 64 for record in corpus["records"]))


if __name__ == "__main__":
    unittest.main()
