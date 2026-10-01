"""Beamdiag (visuals/beamdiag/) on the site.

yujieteo/beamdiag holds the engine, page and reference tests; the site checks
only its catalogue entry and that the published copy matches the folder.
"""

import json
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
VIZ = ROOT / "visuals" / "beamdiag"


class BeamDiagTest(unittest.TestCase):
    def test_catalogue_entry_points_at_the_page(self):
        stub = yaml.safe_load((ROOT / "data" / "visuals" / "beamdiag.yaml").read_text(encoding="utf-8"))
        self.assertEqual(stub["html_path"], "visuals/beamdiag/index.html")
        self.assertEqual(stub["data_path"], "visuals/beamdiag/raw.json")

    def test_published_copy_matches_sources(self):
        published = ROOT / "site" / "visuals" / "beamdiag"
        self.assertEqual((published / "index.html").read_bytes(), (VIZ / "index.html").read_bytes())
        self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")),
                         json.loads((VIZ / "raw.json").read_text(encoding="utf-8")))


if __name__ == "__main__":
    unittest.main()
