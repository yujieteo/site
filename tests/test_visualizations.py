import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "scripts"
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
sys.path.insert(0, str(SCRIPTS))

import build  # noqa: E402


class VisualizationTests(unittest.TestCase):
    def test_environment_selects_visuals_repository(self):
        with tempfile.TemporaryDirectory() as directory:
            repository = Path(directory) / "visuals"
            repository.mkdir()
            with patch.dict(os.environ, {"VISUALS_REPO": str(repository)}):
                self.assertEqual(build.resolve_visuals_repo(), repository.resolve())

    def test_generated_visualization_matches_sources(self):
        published = ROOT / "site" / "visuals" / "tourist-attractions"
        self.assertEqual(
            (published / "index.html").read_bytes(),
            (VISUALS_REPO / "viz/tourist-attractions/index.html").read_bytes(),
        )
        self.assertEqual(
            json.loads((published / "data.json").read_text()),
            json.loads((VISUALS_REPO / "data/tourist-attractions/raw.json").read_text()),
        )
        corpus = json.loads((ROOT / "site/corpus.json").read_text())
        record = next(
            item for item in corpus["records"]
            if item["id"] == "visualization:tourist-attractions"
        )
        self.assertEqual(record["dataUrl"], "visuals/tourist-attractions/data.json")
        self.assertEqual(
            record["webmcpTools"],
            ["get_data", "get_metadata", "query", "get_marketing_terms"],
        )
        nested_gallery = (ROOT / "site/visuals/index.html").read_text()
        root_gallery = (ROOT / "site/visuals.html").read_text()
        self.assertIn("../static/css/style.css", nested_gallery)
        self.assertIn('href="tourist-attractions/index.html"', nested_gallery)
        self.assertIn('href="static/css/style.css"', root_gallery)
        self.assertIn('href="visuals/tourist-attractions/index.html"', root_gallery)
        self.assertIn('href="visuals.html" aria-current="page">Visuals</a>', root_gallery)
        self.assertIn('href="../visuals.html" aria-current="page">Visuals</a>', nested_gallery)
        self.assertIn("## How Singapore attractions are marketed", (ROOT / "site/visuals.md").read_text())
        self.assertEqual((ROOT / "site/llms.txt").read_text().count("[Visuals]("), 1)


if __name__ == "__main__":
    unittest.main()
