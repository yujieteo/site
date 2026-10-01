"""Sectionlab (visuals/sectionlab/) on the site.

The folder is a port of yujieteo/sectionlab, which holds its logic tests and CI;
the site checks only that the published copy matches the folder.
"""

import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIZ = ROOT / "visuals" / "sectionlab"


class PublishedSectionlabTest(unittest.TestCase):
    def test_published_copy_matches_sources(self):
        published = ROOT / "site" / "visuals" / "sectionlab"
        self.assertEqual((published / "index.html").read_bytes(), (VIZ / "index.html").read_bytes())
        self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")),
                         json.loads((VIZ / "raw.json").read_text(encoding="utf-8")))


if __name__ == "__main__":
    unittest.main()
