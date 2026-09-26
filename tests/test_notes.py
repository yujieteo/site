import json
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from notes import NotesError, get_note, load_notes, note_id, search_notes


class NotesTests(unittest.TestCase):
    def write_fixture(self, directory, notes, tags=None):
        root = Path(directory)
        notes_path = root / "notes.md"
        tags_path = root / "note-tags.json"
        notes_path.write_text(notes, encoding="utf-8")
        tags_path.write_text(json.dumps({
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
            "tags": tags or {
                "agents": {
                    "class": "topic", "description": "Software agents.",
                    "aliases": ["agent"], "replaced_by": None,
                },
                "todo": {
                    "class": "action", "description": "Work to do.",
                    "aliases": [], "replaced_by": None,
                },
                "math.ag": {
                    "class": "arxiv-math", "description": "Algebraic geometry.",
                    "aliases": [], "replaced_by": None,
                },
                "old": {
                    "class": "topic", "description": "Old spelling.",
                    "aliases": [], "replaced_by": "agents",
                },
            },
        }), encoding="utf-8")
        return notes_path, tags_path

    def test_note_id_is_byte_identical_to_published_identity(self):
        self.assertEqual(
            note_id("2026-09-25", "First"),
            "note:4b48bfa372e9052a52f935f5e1d4b1c511036c7f555ab6cae1f2fd200f050bd1",
        )

    def test_load_search_and_get_preserve_date_then_source_order(self):
        source = """---
title: Notes
---
## 2026-09-20

Older agent note. #agents

## 2026-09-27

First agent task. #agents #todo

Second task. #todo
"""
        with tempfile.TemporaryDirectory() as directory:
            notes_path, tags_path = self.write_fixture(directory, source)
            document, _ = load_notes(notes_path, tags_path)

        self.assertEqual([entry["date"] for entry in document["entries"]], ["2026-09-27", "2026-09-20"])
        self.assertEqual([note["content"] for note in document["entries"][0]["notes"]], ["First agent task.", "Second task."])
        result = search_notes(document, terms=["task"], tags=["todo"])
        self.assertEqual([item["excerpt"] for item in result["items"]], ["First agent task.", "Second task."])
        any_result = search_notes(document, terms=["older"], tags=["todo"], match_any=True)
        self.assertEqual(any_result["total"], 3)
        self.assertEqual(get_note(document, result["items"][0]["id"])["content"], "First agent task.")

    def test_source_diagnostics_aggregate_with_path_date_and_note(self):
        source = """---
title: Notes
---
## 2026-09-27

Alias. #agent

Deprecated. #old

Unknown. #missing

Untagged.
"""
        with tempfile.TemporaryDirectory() as directory:
            notes_path, tags_path = self.write_fixture(directory, source)
            with self.assertRaises(NotesError) as caught:
                load_notes(notes_path, tags_path)

        diagnostics = "\n".join(caught.exception.diagnostics)
        self.assertIn(str(notes_path), diagnostics)
        self.assertIn("[2026-09-27 note 1]", diagnostics)
        self.assertIn("#agent is an alias; use #agents", diagnostics)
        self.assertIn("#old is deprecated; use #agents", diagnostics)
        self.assertIn("unknown tag #missing", diagnostics)
        self.assertIn("at least one trailing canonical tag is required", diagnostics)

    def test_registry_rejects_invalid_offline_arxiv_category(self):
        source = """---
title: Notes
---
## 2026-09-27

Math. #math.zz
"""
        tags = {
            "math.zz": {
                "class": "arxiv-math", "description": "Not real.",
                "aliases": [], "replaced_by": None,
            },
        }
        with tempfile.TemporaryDirectory() as directory:
            notes_path, tags_path = self.write_fixture(directory, source, tags=tags)
            with self.assertRaises(NotesError) as caught:
                load_notes(notes_path, tags_path)

        self.assertIn("not in the offline arXiv mathematics taxonomy", str(caught.exception))

    def test_registry_requires_arxiv_class_for_math_tags(self):
        source = """---
title: Notes
---
## 2026-09-27

Math. #math.ag
"""
        tags = {
            "math.ag": {
                "class": "topic", "description": "Algebraic geometry.",
                "aliases": [], "replaced_by": None,
            },
        }
        with tempfile.TemporaryDirectory() as directory:
            notes_path, tags_path = self.write_fixture(directory, source, tags=tags)
            with self.assertRaises(NotesError) as caught:
                load_notes(notes_path, tags_path)

        self.assertIn("must use class 'arxiv-math'", str(caught.exception))


if __name__ == "__main__":
    unittest.main()
