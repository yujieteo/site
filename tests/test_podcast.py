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
from kokoro_tts import KokoroSynthesizer


def make_registry(extra=()):
    tags = {
        "agents": {"class": "topic", "description": "Agents."},
        "tools": {"class": "topic", "description": "Tools."},
        "programming": {"class": "topic", "description": "Programming."},
        "math.ag": {"class": "arxiv-math", "description": "Algebraic geometry."},
        "todo": {"class": "action", "description": "Work to do."},
    }
    for name, tag_class in extra:
        tags[name] = {"class": tag_class, "description": name}
    return {
        "tags": {
            name: {
                "class": definition["class"],
                "description": definition["description"],
                "aliases": [],
                "replaced_by": None,
            }
            for name, definition in tags.items()
        },
    }


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

    def __init__(self, seconds_per_word=0.5):
        self.seconds_per_word = seconds_per_word
        self.duration = 0.0
        self.spoken = []
        self.path = None

    def start(self, path):
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)

    def add(self, text):
        self.spoken.append(text)
        self.duration += len(text.split()) * self.seconds_per_word

    @property
    def duration_seconds(self):
        return self.duration

    def finish(self):
        self.path.write_bytes(b"fake-mp3:" + "|".join(self.spoken).encode("utf-8"))

    def abort(self):
        if self.path is not None and self.path.exists():
            self.path.unlink()


class FocusTests(unittest.TestCase):
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
        focus = choose_focus(index, note_tags, target_minutes=1)
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
        focus = choose_focus(index, note_tags, target_minutes=1, previous=previous)
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
        focus = choose_focus(index, note_tags, target_minutes=4)
        self.assertEqual(focus[0], "agents")
        self.assertIn("tools", focus)
        self.assertLess(focus.index("tools"), focus.index("programming"))

    def test_explicit_and_unknown_seeds(self):
        document = make_document([
            ("2026-09-27", [("note:a", "One", ["math.ag"])]),
        ])
        index, note_tags = index_notes(document, make_registry())
        self.assertEqual(
            choose_focus(index, note_tags, target_minutes=1, seed_tag="math.ag"),
            ["math.ag"],
        )
        with self.assertRaises(PodcastError):
            choose_focus(index, note_tags, target_minutes=1, seed_tag="missing")


class ScriptTests(unittest.TestCase):
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
        plan = plan_episode(
            document, registry, target_minutes=1, episode_date="2026-09-28"
        )
        self.assertEqual(plan["id"].split("-", 3)[:3], ["2026", "09", "28"])
        self.assertTrue(plan["id"].startswith("2026-09-28-"))
        self.assertEqual(plan["focus_tags"][0], "agents")
        script = build_script(plan, "Test Site")
        self.assertIn("Test Site", script["intro"])
        self.assertEqual(script["notes"][0]["note_id"], "note:a")
        self.assertIn("Thanks for listening", script["outro"])


class GenerateTests(unittest.TestCase):
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
            self.assertLess(metadata["duration_seconds"], 90)

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
            self.assertGreaterEqual(metadata["duration_seconds"], 57)
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

            with self.assertRaises(PodcastError):
                generate_episode(
                    target_minutes=1,
                    episode_date="2026-09-28",
                    seed_tag="agents",
                    synthesizer=FakeSynthesizer(),
                    root=root,
                )
            regenerated = generate_episode(
                target_minutes=1,
                episode_date="2026-09-28",
                seed_tag="agents",
                synthesizer=FakeSynthesizer(),
                root=root,
                force=True,
            )
            self.assertEqual(regenerated["id"], metadata["id"])


class CacheTests(unittest.TestCase):
    def test_cache_does_not_cross_voices(self):
        class Numpy:
            @staticmethod
            def asarray(data):
                return list(data)

            @staticmethod
            def concatenate(parts):
                return [item for part in parts for item in part]

            @staticmethod
            def zeros(_size, dtype=None):
                return []

        class Soundfile:
            files = {}

            @classmethod
            def read(cls, path, dtype=None):
                return cls.files[path]

            @classmethod
            def write(cls, path, data, rate):
                Path(path).write_bytes(b"cache")
                cls.files[path] = (data, rate)

        class Pipeline:
            def __init__(self):
                self.voices = []

            def __call__(self, _text, voice):
                self.voices.append(voice)
                return [(None, None, [voice])]

        with tempfile.TemporaryDirectory() as directory:
            synthesizer = KokoroSynthesizer(work_dir=directory)
            synthesizer._numpy = Numpy
            synthesizer._soundfile = Soundfile
            synthesizer._pipeline = Pipeline()
            synthesizer._section_audio("Same text")
            synthesizer.voice = "af_bella"
            synthesizer._section_audio("Same text")
            self.assertEqual(synthesizer._pipeline.voices, ["af_heart", "af_bella"])


class PodcastBuildTests(unittest.TestCase):
    def test_build_publishes_player_pages_audio_and_corpus(self):
        with tempfile.TemporaryDirectory() as directory:
            project = Path(directory) / "site-project"
            shutil.copytree(
                ROOT,
                project,
                ignore=shutil.ignore_patterns(".git", ".venv", "__pycache__"),
            )
            shutil.rmtree(project / "data" / "podcasts", ignore_errors=True)
            # This test only exercises the podcast path, so the visualization
            # stubs are removed and the empty project directory stands in for
            # the visuals checkout.
            for visualization in (project / "data" / "visuals").glob("*.yaml"):
                visualization.unlink()
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
            subprocess.run(
                [str(Path(sys.executable)), "scripts/build.py"],
                cwd=project,
                check=True,
                capture_output=True,
                text=True,
                env=os.environ | {"VISUALS_REPO": str(project)},
            )

            index_html = (project / "site" / "podcast" / "index.html").read_text(encoding="utf-8")
            self.assertIn(f'audio/{episode_id}.mp3', index_html)
            self.assertIn("Notes on agents", index_html)
            episode_html = (
                project / "site" / "podcast" / f"{episode_id}.html"
            ).read_text(encoding="utf-8")
            self.assertIn("<audio", episode_html)
            self.assertEqual(
                (project / "site" / "podcast" / "audio" / f"{episode_id}.mp3").read_bytes(),
                b"fake-audio",
            )
            corpus = json.loads((project / "site" / "corpus.json").read_text(encoding="utf-8"))
            record = next(item for item in corpus["records"] if item["kind"] == "podcast")
            self.assertEqual(record["id"], f"podcast:{episode_id}")
            self.assertEqual(record["audioUrl"], f"podcast/audio/{episode_id}.mp3")
            self.assertEqual(record["durationSeconds"], 1800.0)


if __name__ == "__main__":
    unittest.main()
