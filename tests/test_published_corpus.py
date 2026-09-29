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

    def test_every_record_has_a_unique_id_and_revision(self):
        corpus = build_published_corpus(*self.fixtures())
        ids = [record["id"] for record in corpus["records"]]
        self.assertEqual(len(ids), len(set(ids)))
        self.assertTrue(all(len(record["revision"]) == 64 for record in corpus["records"]))

    def test_podcast_record_publishes_audio_metadata(self):
        episode = {
            "id": "2026-09-27-agents", "title": "Notes on agents",
            "summary": "Condensed notes on agents.", "date": "2026-09-27",
            "focus_tags": ["agents"], "audio": "audio/2026-09-27-agents.mp3",
            "duration_seconds": 1800.0,
        }
        corpus = build_published_corpus(*self.fixtures(), media_items=[episode])
        record = next(record for record in corpus["records"] if record["kind"] == "podcast")
        self.assertEqual(record["id"], "podcast:2026-09-27-agents")
        self.assertEqual(record["url"], "media/2026-09-27-agents.html")
        self.assertEqual(record["audioUrl"], "media/audio/2026-09-27-agents.mp3")
        self.assertEqual(record["durationSeconds"], 1800.0)

    def test_video_record_publishes_captions_and_poster_metadata(self):
        video = {
            "id": "2026-09-27-fpl", "title": "FPL explainer",
            "summary": "Where the points hide.", "date": "2026-09-27",
            "focus_tags": ["fpl"],
            "video": "video/2026-09-27-fpl.mp4",
            "captions": "video/2026-09-27-fpl.vtt",
            "poster": "video/2026-09-27-fpl.jpg",
            "duration_seconds": 183.67,
        }
        corpus = build_published_corpus(*self.fixtures(), media_items=[video])
        record = next(record for record in corpus["records"] if record["kind"] == "video")
        self.assertEqual(record["id"], "video:2026-09-27-fpl")
        self.assertEqual(record["url"], "media/2026-09-27-fpl.html")
        self.assertEqual(record["videoUrl"], "media/video/2026-09-27-fpl.mp4")
        self.assertEqual(record["captionsUrl"], "media/video/2026-09-27-fpl.vtt")
        self.assertEqual(record["posterUrl"], "media/video/2026-09-27-fpl.jpg")
        self.assertEqual(record["durationSeconds"], 183.67)


if __name__ == "__main__":
    unittest.main()
