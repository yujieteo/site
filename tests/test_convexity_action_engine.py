import csv
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
            # author.py reads the day-reconstruction table and evidence shared with everyday-actions.
            shutil.copytree(VIZ.parent / "everyday-actions", Path(directory) / "everyday-actions")
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

    def test_observed_figures_match_everyday_actions(self):
        # Both pages recompute ATUS 2014-2016 from the same microdata; shared groups must agree.
        raw = json.loads((VIZ / "raw.json").read_text(encoding="utf-8"))
        with open(VIZ.parent / "everyday-actions" / "atus_estimates.csv", newline="", encoding="utf-8") as handle:
            rows = {r["activity_id"]: r for r in csv.DictReader(handle) if r["population_id"] == "all"}
        for activity, code in (("sleeping", "0101"), ("working", "0501"), ("exercising", "1301"), ("reading", "120312"), ("gaming", "120307")):
            self.assertAlmostEqual(raw["observed"][code]["rate"], float(rows[activity]["participation_rate"]), places=4, msg=code)
            self.assertAlmostEqual(raw["observed"][code]["min"], float(rows[activity]["minutes_when_performed"]), places=1, msg=code)

    def test_page_leads_with_search_and_keeps_the_method_one_step_away(self):
        html = (VIZ / "index.html").read_text(encoding="utf-8")
        body = html[html.index("<body>"):html.index("<script>")]
        # The question and search come before the context bar and results; the method paragraph follows them in a disclosure.
        self.assertLess(body.index("<h1>"), body.index('id="hero-search"'))
        self.assertLess(body.index('id="hero-search"'), body.index('id="ctx"'))
        method = body[body.index('<details id="method">'):]
        self.assertLess(body.index('id="app"'), body.index('<details id="method">'))
        self.assertIn("short of a 10,000-action canonical ontology", method)
        # Results are not one page-sized live region; route changes are announced through a small status element.
        self.assertNotIn('id="app" aria-live', body)
        self.assertIn('id="announce" role="status" aria-live="polite"', body)
        self.assertIn('<details id="keys">', body)

    def test_published_copy_matches_sources(self):
        published = ROOT / "site" / "visuals" / "convexity-action-engine"
        self.assertEqual((published / "index.html").read_text(encoding="utf-8"), (VIZ / "index.html").read_text(encoding="utf-8"))
        self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")), json.loads((VIZ / "raw.json").read_text(encoding="utf-8")))


if __name__ == "__main__":
    unittest.main()
