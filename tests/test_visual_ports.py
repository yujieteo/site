"""The site's integration of the visualizations ported from their standalone repositories.

Each folder below is a port of the page files of a standalone repository (yujieteo/<name>), where the
visualization and its logic tests develop and run. The site checks only how it publishes the port: the
catalogue stub points into the folder and names the WebMCP tools the page registers, the build publishes
the page and its data unchanged, and the port carries no tests or CI of its own. That each folder's
beamdswitch.js is templates/beamdswitch.js unchanged is checked by tests/beamdswitch-voice.test.mjs.
"""

import csv
import json
import re
import unittest
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
# slug -> standalone repository name
PORTS = {
    "bayes": "bayes",
    "beamdiag": "beamdiag",
    "convexity-action-engine": "convexity-action-engine",
    "delta-cohomology": "delta-cohomology",
    "distortion": "distortion",
    "edge-pitch": "edge-pitch",
    "entropy-combinatorics": "entropy-combinatorics",
    "etale-fundamental-group": "etale-fundamental-group",
    "everyday-actions": "everyday-actions",
    "fastener-cg": "fastener-cg",
    "fermi": "fermi",
    "frequency-response": "frequency-response",
    "generating-functions": "generating-functions",
    "grep-visualiser": "grep-visualiser",
    "infer-a-theory": "infer-a-theory",
    "information-gain": "information-gain",
    "kent": "kent",
    "lug-joint": "lug-joint",
    "md-explorer": "md-explorer",
    "mohr": "mohr",
    "packets-to-playback": "packets-to-playback",
    "phasors": "phasors",
    "pigeonhole": "pigeonhole",
    "probabilistic-method": "probabilistic-method",
    "queue-time": "queue-time",
    "riemann-roch": "riemann-roch",
    "root-locus": "root-locus",
    "snake-lemma": "snake-lemma",
    "stability": "stability",
    "subsidy-atlas": "subsidy-atlas",
    "tampines-food": "tampines-food",
    "toto-frequency": "toto-frequency",
    "toulmin": "toulmin",
    "vgc-protect-fakeout-pivot-trainer": "vgc-trainer",
}


def stub(slug):
    return yaml.safe_load((ROOT / "data" / "visuals" / f"{slug}.yaml").read_text(encoding="utf-8"))


def source_data(path):
    text = (ROOT / path).read_text(encoding="utf-8")
    return list(csv.DictReader(text.splitlines())) if path.endswith(".csv") else json.loads(text)


class VisualPortTests(unittest.TestCase):
    def test_port_carries_no_tests_or_ci(self):
        for slug in PORTS:
            with self.subTest(slug):
                folder = ROOT / "visuals" / slug
                self.assertTrue((folder / "index.html").is_file())
                self.assertFalse((folder / "tests").exists(), "tests live in the standalone repository")
                self.assertFalse((folder / ".github").exists(), "CI lives in the standalone repository")

    def test_agents_md_names_the_standalone_repository_as_where_it_develops(self):
        for slug, name in PORTS.items():
            with self.subTest(slug):
                text = (ROOT / "visuals" / slug / "AGENTS.md").read_text(encoding="utf-8")
                link = f"[yujieteo/{name}](https://github.com/yujieteo/{name})"
                wordings = [
                    (f"The standalone repository {link} is where this visualisation and its tests develop", "Porting copies the folder minus `tests/` and `.github/`."),
                    (f"This repository, {link}, is the source of truth", "Porting copies this repository minus `tests/` and `.github/`"),
                ]
                self.assertTrue(any(all(part in text for part in wording) for wording in wordings), text)

    def test_stub_points_into_the_folder(self):
        for slug in PORTS:
            with self.subTest(slug):
                entry = stub(slug)
                self.assertEqual(entry["slug"], slug)
                self.assertEqual(entry["html_path"], f"visuals/{slug}/index.html")
                for path in [entry["data_path"], *entry.get("assets", [])]:
                    self.assertTrue(path.startswith(f"visuals/{slug}/"), path)
                    self.assertTrue((ROOT / path).is_file(), path)

    def test_page_registers_every_tool_the_stub_names(self):
        for slug in PORTS:
            html = (ROOT / "visuals" / slug / "index.html").read_text(encoding="utf-8")
            for tool in stub(slug).get("webmcp_tools", []):
                with self.subTest(slug=slug, tool=tool):
                    self.assertRegex(html, rf"""["'`]{re.escape(tool)}["'`]""")

    def test_published_copy_is_the_port(self):
        if not (ROOT / "site" / "index.html").exists():
            self.skipTest("run scripts/build.py first")
        for slug in PORTS:
            with self.subTest(slug):
                entry, published = stub(slug), ROOT / "site" / "visuals" / slug
                self.assertEqual((published / "index.html").read_bytes(), (ROOT / entry["html_path"]).read_bytes())
                self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")), source_data(entry["data_path"]))

    def test_fermi_title_is_the_catalogue_title(self):
        html = (ROOT / "visuals" / "fermi" / "index.html").read_text(encoding="utf-8")
        self.assertIn(f"<title>{stub('fermi')['title']} — Yu Jie Teo</title>", html)

    def test_kent_title_is_the_catalogue_title(self):
        html = (ROOT / "visuals" / "kent" / "index.html").read_text(encoding="utf-8")
        self.assertIn(f"<title>{stub('kent')['title']} — Yu Jie Teo</title>", html)


if __name__ == "__main__":
    unittest.main()
