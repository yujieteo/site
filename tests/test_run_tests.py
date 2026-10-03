"""scripts/run_tests.py selects the per-visualisation checks from the paths a pull request changes."""

import os
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import run_tests  # noqa: E402
from visual_selection import covers  # noqa: E402


class SelectionTests(unittest.TestCase):
    def test_changed_folders_and_stubs_select_their_slugs(self):
        changed = ["visuals/connes-qft/index.html", "data/visuals/beamdswitch.yaml", "data/notes.md"]
        self.assertEqual(run_tests.selected_slugs(changed), "beamdswitch,connes-qft")

    def test_content_outside_the_visualisations_selects_no_folders(self):
        self.assertEqual(run_tests.selected_slugs(["data/notes.md", "README.md", "static/css/style.css"]), "")

    def test_shared_code_selects_every_folder(self):
        for path in ["tests/test_visual_ports.py", "scripts/build.py", "templates/beamdswitch.js", ".github/workflows/ci.yml"]:
            with self.subTest(path):
                self.assertIsNone(run_tests.selected_slugs(["visuals/kent/index.html", path]))

    def test_no_base_or_an_unknown_base_selects_every_folder(self):
        self.assertIsNone(run_tests.selection(None)[0])
        self.assertIsNone(run_tests.selection("no-such-ref-for-run-tests")[0])

    def test_covers_follows_the_environment(self):
        with patch.dict(os.environ, {"SITE_TEST_VISUALS": "kent,bayes"}):
            self.assertTrue(covers("kent"))
            self.assertFalse(covers("fermi"))
        with patch.dict(os.environ, {"SITE_TEST_VISUALS": ""}):
            self.assertFalse(covers("kent"))
        with patch.dict(os.environ, clear=True):
            self.assertTrue(covers("kent"))


if __name__ == "__main__":
    unittest.main()
