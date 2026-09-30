import copy
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

import jsonschema
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from podcast import (
    PodcastError,
    build_script,
    choose_focus,
    generate_episode,
    group_notes,
    index_notes,
    plan_episode,
    speech_text,
)


def make_document(entries):
    return {
        "entries": [
            {
                "date": date,
                "notes": [
                    {"id": note_id, "content": content, "tags": tags}
                    for note_id, content, tags in notes
                ],
            }
            for date, notes in entries
        ],
    }


def wordy(label, words=40):
    return f"{label} " + " ".join(["notes"] * (words - 1))


REGISTRY_JSON = {
    "version": 1,
    "classes": {
        "topic": "Subject.",
        "project": "Project.",
        "status": "Status.",
        "action": "Action.",
        "arxiv-math": "arXiv mathematics category.",
    },
    "arxiv_math": {
        "source": "https://arxiv.org/category_taxonomy",
        "checked": "2026-09-27",
        "categories": ["math.ag"],
    },
    "tags": {
        "agents": {
            "class": "topic", "description": "Agents.", "aliases": [], "replaced_by": None,
        },
        "tools": {
            "class": "topic", "description": "Tools.", "aliases": [], "replaced_by": None,
        },
        "programming": {
            "class": "topic", "description": "Programming.", "aliases": [], "replaced_by": None,
        },
        "math.ag": {
            "class": "arxiv-math", "description": "Algebraic geometry.",
            "aliases": [], "replaced_by": None,
        },
        "todo": {
            "class": "action", "description": "Work to do.", "aliases": [], "replaced_by": None,
        },
    },
}


def make_registry():
    return {"tags": copy.deepcopy(REGISTRY_JSON["tags"])}


def write_notes(root):
    sections = ["---\ntitle: Notes\n---\n"]
    for day in range(10, 0, -1):
        section = [f"## 2026-09-{day:02d}\n"]
        for index in range(3):
            section.append(f"Agents note {day}-{index} " + " ".join(["notes"] * 39) + " #agents")
        section.append("\nA tools note " + " ".join(["notes"] * 39) + " #tools #agents")
        section.append("\nA programming note " + " ".join(["notes"] * 39) + " #programming")
        sections.append("\n".join(section))
    (root / "data").mkdir(parents=True)
    (root / "data" / "notes.md").write_text("\n\n".join(sections) + "\n", encoding="utf-8")
    (root / "data" / "note-tags.json").write_text(
        json.dumps(REGISTRY_JSON), encoding="utf-8"
    )
    (root / "data" / "cv").mkdir()
    (root / "data" / "cv" / "cv.yaml").write_text("name: Test Site\n", encoding="utf-8")


class FakeSynthesizer:
    sample_rate = 24000

    def __init__(self, seconds_per_word=0.5, rates=()):
        self.seconds_per_word = seconds_per_word
        self.rates = iter(rates)
        self.duration = 0.0
        self.spoken = []
        self.path = None

    def start(self, path):
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)

    def add(self, text):
        self.spoken.append(text)
        self.duration += len(text.split()) * next(self.rates, self.seconds_per_word)

    @property
    def duration_seconds(self):
        return self.duration

    def finish(self):
        self.path.write_bytes(b"fake-mp3:" + "|".join(self.spoken).encode("utf-8"))

    def abort(self):
        if self.path is not None and self.path.exists():
            self.path.unlink()


class FocusTests(unittest.TestCase):
    def test_index_excludes_notes_without_speech(self):
        document = make_document([
            ("2026-09-27", [
                ("note:silent", "https://example.com", ["agents"]),
                ("note:spoken", "Useful tools note", ["tools"]),
            ]),
        ])
        index, note_tags = index_notes(document, make_registry())
        self.assertNotIn("agents", index)
        self.assertEqual(note_tags["note:silent"], [])
        self.assertEqual(choose_focus(index, note_tags, target_minutes=1), ["tools"])

    def test_seed_is_most_common_content_tag_and_skips_workflow_tags(self):
        document = make_document([
            ("2026-09-27", [
                ("note:a", "One", ["agents"]),
                ("note:b", "Two", ["agents"]),
                ("note:c", "Three", ["todo"]),
                ("note:d", "Four", ["todo"]),
                ("note:e", "Five", ["todo"]),
                ("note:f", "Six", ["todo"]),
                ("note:g", "Seven", ["math.ag"]),
            ]),
        ])
        index, note_tags = index_notes(document, make_registry())
        focus = choose_focus(index, note_tags)
        self.assertEqual(focus[0], "agents")
        self.assertNotIn("todo", focus)

    def test_previous_seed_is_rotated_out(self):
        document = make_document([
            ("2026-09-27", [
                ("note:a", "One", ["agents"]),
                ("note:b", "Two", ["agents"]),
                ("note:c", "Three", ["programming"]),
                ("note:d", "Four", ["programming"]),
            ]),
        ])
        index, note_tags = index_notes(document, make_registry())
        previous = [{"focus_tags": ["agents"], "notes": []}]
        focus = choose_focus(index, note_tags, previous=previous)
        self.assertEqual(focus[0], "programming")

    def test_focus_expands_through_cooccurrence(self):
        document = make_document([
            ("2026-09-27", [
                ("note:a", wordy("agents"), ["agents"]),
                ("note:b", wordy("agents"), ["agents"]),
                ("note:c", wordy("tools"), ["tools", "agents"]),
                ("note:d", wordy("programming"), ["programming"]),
            ]),
        ])
        index, note_tags = index_notes(document, make_registry())
        focus = choose_focus(index, note_tags)
        self.assertEqual(focus[0], "agents")
        self.assertIn("tools", focus)
        self.assertLess(focus.index("tools"), focus.index("programming"))

class ScriptTests(unittest.TestCase):
    def test_cli_rejects_removed_overrides(self):
        for arguments in (
            ["generate", "--force"],
            ["plan", "--seed", "agents"],
            ["plan", "--json"],
        ):
            result = subprocess.run(
                [sys.executable, "scripts/podcast.py", *arguments],
                cwd=ROOT,
                capture_output=True,
                text=True,
            )
            self.assertEqual(result.returncode, 2)
            self.assertIn("unrecognized arguments", result.stderr)

    def test_speech_text_removes_markup(self):
        spoken = speech_text(
            "See [VGC guide](https://www.vgcguide.com/metagame) for `cores` and **roles** "
            "& http://example.com/raw. Math: $x \\to y$."
        )
        self.assertIn("VGC guide", spoken)
        self.assertIn("roles", spoken)
        self.assertIn(" and ", spoken)
        self.assertNotIn("http", spoken)
        self.assertNotIn("`", spoken)
        self.assertNotIn("**", spoken)
        self.assertNotIn("\\to", spoken)

    def test_build_script_skips_notes_without_speech(self):
        plan = {
            "display_date": "28 September 2026",
            "focus_tags": ["agents"],
            "sections": [{"tag": "agents", "notes": [
                {"id": "note:url", "date": "2026-09-27", "content": "https://example.com"},
                {"id": "note:words", "date": "2026-09-27", "content": "Useful words"},
            ]}],
        }
        script = build_script(plan, "Test Site")
        self.assertEqual([note["note_id"] for note in script["notes"]], ["note:words"])
        self.assertTrue(script["notes"][0]["speak"].startswith("First, notes on agents."))

    def test_group_notes_assigns_each_note_once(self):
        document = make_document([
            ("2026-09-26", [("note:shared", "Shared", ["agents", "tools"])]),
            ("2026-09-27", [("note:agents", "Agents", ["agents"])]),
            ("2026-09-27", [("note:tools", "Tools", ["tools"])]),
        ])
        index, _ = index_notes(document, make_registry())
        sections = group_notes(index, ["agents", "tools"])
        by_tag = {section["tag"]: [note["id"] for note in section["notes"]] for section in sections}
        self.assertEqual(by_tag["agents"], ["note:agents", "note:shared"])
        self.assertEqual(by_tag["tools"], ["note:tools"])

    def test_plan_and_script_are_deterministic(self):
        document = make_document([
            ("2026-09-27", [("note:a", wordy("agents"), ["agents"])]),
        ])
        registry = make_registry()
        plan = plan_episode(document, registry, episode_date="2026-09-28")
        self.assertEqual(plan["id"].split("-", 3)[:3], ["2026", "09", "28"])
        self.assertTrue(plan["id"].startswith("2026-09-28-"))
        self.assertEqual(plan["focus_tags"][0], "agents")
        script = build_script(plan, "Test Site")
        self.assertIn("Test Site", script["intro"])
        self.assertEqual(script["notes"][0]["note_id"], "note:a")
        self.assertIn("Thanks for listening", script["outro"])


class GenerateTests(unittest.TestCase):
    def test_generate_publishes_when_recalibration_exhausts_outro_budget(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_notes(root)
            metadata = generate_episode(
                target_minutes=1,
                episode_date="2026-09-28",
                synthesizer=FakeSynthesizer(rates=(0.5, 0.6)),
                root=root,
            )
            self.assertLessEqual(metadata["duration_seconds"], 60)
            self.assertTrue((root / "data" / "podcasts" / f"{metadata['id']}.yaml").is_file())

    def test_generate_truncates_a_single_oversized_note(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_notes(root)
            (root / "data" / "notes.md").write_text(
                "---\ntitle: Notes\n---\n\n## 2026-09-27\n\n"
                + wordy("Long note", 8000)
                + " #agents\n",
                encoding="utf-8",
            )
            synthesizer = FakeSynthesizer(seconds_per_word=0.5)
            metadata = generate_episode(
                target_minutes=1,
                episode_date="2026-09-28",
                synthesizer=synthesizer,
                root=root,
            )
            self.assertEqual(len(metadata["notes"]), 1)
            self.assertLess(len(synthesizer.spoken[1].split()), 8000)
            self.assertLessEqual(metadata["duration_seconds"], 60)

    def test_generate_writes_metadata_audio_and_stops_near_target(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_notes(root)
            synthesizer = FakeSynthesizer(seconds_per_word=0.5)
            metadata = generate_episode(
                target_minutes=1,
                episode_date="2026-09-28",
                synthesizer=synthesizer,
                root=root,
                today=None,
            )
            self.assertTrue(metadata["id"].startswith("2026-09-28-"))
            self.assertEqual(metadata["focus_tags"][0], "agents")
            self.assertLessEqual(metadata["duration_seconds"], 60)
            self.assertLess(len(metadata["notes"]), 31)
            self.assertTrue(metadata["notes"])

            metadata_path = root / "data" / "podcasts" / f"{metadata['id']}.yaml"
            audio_path = root / "data" / "podcasts" / "audio" / f"{metadata['id']}.mp3"
            self.assertTrue(metadata_path.is_file())
            self.assertTrue(audio_path.is_file())
            self.assertFalse((audio_path.parent / f"{metadata['id']}.mp3.part").exists())

            schema = json.loads(
                (ROOT / "schema" / "podcasts.schema.json").read_text(encoding="utf-8")
            )
            jsonschema.Draft7Validator(schema).validate(
                yaml.safe_load(metadata_path.read_text(encoding="utf-8"))
            )

    def test_generate_publishes_short_material(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_notes(root)
            (root / "data" / "notes.md").write_text(
                "---\ntitle: Notes\n---\n\n## 2026-09-27\n\n"
                + wordy("Short note", 40)
                + " #agents\n",
                encoding="utf-8",
            )
            metadata = generate_episode(
                target_minutes=1,
                episode_date="2026-09-28",
                synthesizer=FakeSynthesizer(seconds_per_word=0.5),
                root=root,
            )
            self.assertLess(metadata["duration_seconds"], 60)
            self.assertTrue((root / "data" / "podcasts" / f"{metadata['id']}.yaml").is_file())

    def test_generate_rejects_notes_without_speech(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_notes(root)
            (root / "data" / "notes.md").write_text(
                "---\ntitle: Notes\n---\n\n## 2026-09-27\n\nhttps://example.com #agents\n",
                encoding="utf-8",
            )
            with self.assertRaises(PodcastError):
                generate_episode(target_minutes=1, episode_date="2026-09-28", root=root)


class PodcastBuildTests(unittest.TestCase):
    def _make_project(self, directory):
        project = Path(directory) / "site-project"
        shutil.copytree(
            ROOT,
            project,
            ignore=shutil.ignore_patterns(".git", ".venv", "__pycache__"),
        )
        shutil.rmtree(project / "data" / "podcasts", ignore_errors=True)
        # These tests only exercise the media path, so the visualization
        # stubs are removed and the empty project directory stands in for
        # the visuals checkout.
        for visualization in (project / "data" / "visuals").glob("*.yaml"):
            visualization.unlink()
        # The homepage's pinned item is a visualization, so unpin it too.
        cv_path = project / "data" / "cv" / "cv.yaml"
        cv = yaml.safe_load(cv_path.read_text(encoding="utf-8"))
        cv.pop("pinned", None)
        cv_path.write_text(yaml.safe_dump(cv, sort_keys=False), encoding="utf-8")
        return project

    def _build(self, project):
        subprocess.run(
            [str(Path(sys.executable)), "scripts/build.py"],
            cwd=project,
            check=True,
            capture_output=True,
            text=True,
            env=os.environ | {"VISUALS_REPO": str(project)},
        )

    def test_build_publishes_audio_pages_legacy_redirects_and_corpus(self):
        with tempfile.TemporaryDirectory() as directory:
            project = self._make_project(directory)
            episode_id = "2026-09-27-agents"
            audio_directory = project / "data" / "podcasts" / "audio"
            audio_directory.mkdir(parents=True)
            (audio_directory / f"{episode_id}.mp3").write_bytes(b"fake-audio")
            (project / "data" / "podcasts" / f"{episode_id}.yaml").write_text(
                yaml.safe_dump({
                    "id": episode_id,
                    "date": "2026-09-27",
                    "title": "Notes on agents",
                    "summary": "Condensed notes on agents.",
                    "focus_tags": ["agents"],
                    "notes": [f"note:{'0' * 64}"],
                    "duration_seconds": 1800.0,
                    "voice": "af_heart",
                    "audio": f"audio/{episode_id}.mp3",
                }, sort_keys=False),
                encoding="utf-8",
            )
            self._build(project)

            index_html = (project / "site" / "media" / "index.html").read_text(encoding="utf-8")
            self.assertIn(f'audio/{episode_id}.mp3', index_html)
            self.assertIn("Notes on agents", index_html)
            episode_html = (
                project / "site" / "media" / f"{episode_id}.html"
            ).read_text(encoding="utf-8")
            self.assertIn("<audio", episode_html)
            self.assertEqual(
                (project / "site" / "media" / "audio" / f"{episode_id}.mp3").read_bytes(),
                b"fake-audio",
            )

            redirect_index = (
                project / "site" / "podcast" / "index.html"
            ).read_text(encoding="utf-8")
            self.assertIn("url=/media/index.html", redirect_index)
            redirect_episode = (
                project / "site" / "podcast" / f"{episode_id}.html"
            ).read_text(encoding="utf-8")
            self.assertIn(f"url=/media/{episode_id}.html", redirect_episode)
            self.assertEqual(
                (project / "site" / "podcast" / "audio" / f"{episode_id}.mp3").read_bytes(),
                b"fake-audio",
            )

            corpus = json.loads((project / "site" / "corpus.json").read_text(encoding="utf-8"))
            record = next(record for record in corpus["records"] if record["id"] == f"podcast:{episode_id}")
            self.assertEqual(record["audioUrl"], f"media/audio/{episode_id}.mp3")
            self.assertEqual(record["durationSeconds"], 1800.0)

    def test_build_publishes_video_with_captions_and_poster(self):
        with tempfile.TemporaryDirectory() as directory:
            project = self._make_project(directory)
            video_id = "2026-09-27-fpl"
            video_directory = project / "data" / "podcasts" / "video"
            video_directory.mkdir(parents=True)
            (video_directory / f"{video_id}.mp4").write_bytes(b"fake-video")
            (video_directory / f"{video_id}.vtt").write_bytes(b"WEBVTT\n\n")
            (video_directory / f"{video_id}.jpg").write_bytes(b"fake-poster")
            (project / "data" / "podcasts" / f"{video_id}.yaml").write_text(
                yaml.safe_dump({
                    "id": video_id,
                    "date": "2026-09-27",
                    "title": "FPL explainer",
                    "summary": "Where the points hide.",
                    "focus_tags": ["fpl"],
                    "duration_seconds": 183.67,
                    "video": f"video/{video_id}.mp4",
                    "captions": f"video/{video_id}.vtt",
                    "poster": f"video/{video_id}.jpg",
                }, sort_keys=False),
                encoding="utf-8",
            )
            self._build(project)

            item_html = (
                project / "site" / "media" / f"{video_id}.html"
            ).read_text(encoding="utf-8")
            self.assertIn("<video", item_html)
            self.assertIn('kind="captions"', item_html)
            self.assertIn(f'video/{video_id}.mp4', item_html)
            self.assertIn(f'video/{video_id}.jpg', item_html)
            self.assertEqual(
                (project / "site" / "media" / "video" / f"{video_id}.mp4").read_bytes(),
                b"fake-video",
            )
            self.assertEqual(
                (project / "site" / "media" / "video" / f"{video_id}.vtt").read_bytes(),
                b"WEBVTT\n\n",
            )

            corpus = json.loads((project / "site" / "corpus.json").read_text(encoding="utf-8"))
            record = next(record for record in corpus["records"] if record["id"] == f"video:{video_id}")
            self.assertEqual(record["videoUrl"], f"media/video/{video_id}.mp4")
            self.assertEqual(record["captionsUrl"], f"media/video/{video_id}.vtt")
            self.assertEqual(record["posterUrl"], f"media/video/{video_id}.jpg")


if __name__ == "__main__":
    unittest.main()
