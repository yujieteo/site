"""Sectionlab (visuals/sectionlab/) inside the site test run.

The folder is mirrored as a standalone repository and carries its own tests; this
module runs its Python tests here (its Node tests run in CI with the site's) and
checks the published copy.
"""

import importlib.util
import json
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIZ = ROOT / "visuals" / "sectionlab"


def load_tests(loader, standard_tests, pattern):
    suite = unittest.TestSuite([standard_tests])
    for path in sorted((VIZ / "tests").glob("test_*.py")):
        # Unique module names: the folder's test_build.py must not shadow the site's.
        name = f"sectionlab_tests_{path.stem}"
        spec = importlib.util.spec_from_file_location(name, path)
        module = importlib.util.module_from_spec(spec)
        sys.modules[name] = module
        spec.loader.exec_module(module)
        suite.addTests(loader.loadTestsFromModule(module))
    return suite


class PublishedSectionlabTest(unittest.TestCase):
    def test_published_copy_matches_sources(self):
        published = ROOT / "site" / "visuals" / "sectionlab"
        self.assertEqual((published / "index.html").read_bytes(), (VIZ / "index.html").read_bytes())
        self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")),
                         json.loads((VIZ / "raw.json").read_text(encoding="utf-8")))


if __name__ == "__main__":
    unittest.main()
