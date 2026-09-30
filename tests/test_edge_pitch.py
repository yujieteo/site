import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
VIZ = ROOT / "visuals" / "edge-pitch"


class EdgePitchTests(unittest.TestCase):
    def test_build_is_reproducible(self):
        with tempfile.TemporaryDirectory() as directory:
            copy = Path(directory) / "edge-pitch"
            shutil.copytree(VIZ, copy, ignore=shutil.ignore_patterns("__pycache__"))
            subprocess.run([sys.executable, str(copy / "build.py")], check=True, capture_output=True)
            self.assertEqual((copy / "index.html").read_text(encoding="utf-8"), (VIZ / "index.html").read_text(encoding="utf-8"))

    def test_stub_points_at_the_sources(self):
        stub = yaml.safe_load((ROOT / "data" / "visuals" / "edge-pitch.yaml").read_text(encoding="utf-8"))
        self.assertEqual(stub["html_path"], "visuals/edge-pitch/index.html")
        self.assertEqual(stub["data_path"], "visuals/edge-pitch/raw.json")
        self.assertEqual(stub["webmcp_tools"], ["get_metadata", "get_current_joint", "solve_joint", "run_self_tests"])

    def test_engine_self_tests_pass_under_node(self):
        script = 'const t = require(process.argv[1]).selfTests(); process.stdout.write(JSON.stringify(t));'
        run = subprocess.run([shutil.which("node") or "node", "-e", script, str(VIZ / "engine.js")], check=True, capture_output=True, text=True)
        results = json.loads(run.stdout)
        self.assertGreaterEqual(len(results), 20)
        self.assertEqual([r["name"] for r in results if not r["pass"]], [])

    def test_published_copy_matches_sources(self):
        published = ROOT / "site" / "visuals" / "edge-pitch"
        self.assertEqual((published / "index.html").read_bytes(), (VIZ / "index.html").read_bytes())
        self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")),
                         json.loads((VIZ / "raw.json").read_text(encoding="utf-8")))


if __name__ == "__main__":
    unittest.main()
