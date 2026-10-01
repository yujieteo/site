import copy
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from podcast import (
    PodcastError,
    build_script,
    choose_focus,
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

    def test_explicit_focus_replaces_selection(self):
        document = make_document([
            ("2026-09-27", [
                ("note:a", wordy("agents"), ["agents"]),
                ("note:b", wordy("agents"), ["agents"]),
                ("note:c", wordy("programming"), ["programming"]),
            ]),
        ])
        plan = plan_episode(
            document, make_registry(), target_minutes=30, episode_date="2026-09-28",
            focus_tags=["programming"],
        )
        self.assertEqual(plan["focus_tags"], ["programming"])
        self.assertEqual(plan["id"], "2026-09-28-programming")
        self.assertEqual(
            [note["id"] for section in plan["sections"] for note in section["notes"]],
            ["note:c"],
        )

    def test_explicit_focus_rejects_unknown_workflow_and_empty_tags(self):
        document = make_document([
            ("2026-09-27", [
                ("note:a", "One", ["agents"]),
                ("note:b", "Two", ["todo"]),
            ]),
        ])
        for tags in (["nonsense"], ["todo"], ["tools"]):
            with self.subTest(tags=tags), self.assertRaises(PodcastError):
                plan_episode(document, make_registry(), episode_date="2026-09-28", focus_tags=tags)

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


if __name__ == "__main__":
    unittest.main()
