import json
import re
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIZ = ROOT / "visuals" / "convexity-action-engine"


class ConvexityActionEngineTest(unittest.TestCase):
    def test_build_is_reproducible(self):
        with tempfile.TemporaryDirectory() as directory:
            copy = Path(directory) / "convexity-action-engine"
            shutil.copytree(VIZ, copy, ignore=shutil.ignore_patterns("__pycache__"))
            subprocess.run([sys.executable, str(copy / "author.py")], check=True, capture_output=True)
            subprocess.run([sys.executable, str(copy / "build.py")], check=True, capture_output=True)
            for name in ("raw.json", "index.html", "actions.csv", "aliases.csv", "sources.csv"):
                self.assertEqual((copy / name).read_text(encoding="utf-8"), (VIZ / name).read_text(encoding="utf-8"), name)

    def test_builder_verifies_the_committed_page(self):
        result = subprocess.run([sys.executable, str(VIZ / "build.py"), "--verify"], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        shutil.rmtree(VIZ / "__pycache__", ignore_errors=True)

    def test_probabilities_are_words_and_unretrieved_sources_have_no_links(self):
        raw = json.loads((VIZ / "raw.json").read_text(encoding="utf-8"))
        for action in raw["actions"]:
            if "ruin" in action:
                self.assertIsNone(re.search(r"\d", action["ruin"]["p"]), action["id"])
        for source in raw["sources"]:
            if source["status"].startswith("planned"):
                self.assertEqual(source["url"], "", source["id"])

    def test_published_copy_matches_sources(self):
        published = ROOT / "site" / "visuals" / "convexity-action-engine"
        self.assertEqual((published / "index.html").read_text(encoding="utf-8"), (VIZ / "index.html").read_text(encoding="utf-8"))
        self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")), json.loads((VIZ / "raw.json").read_text(encoding="utf-8")))


if __name__ == "__main__":
    unittest.main()
