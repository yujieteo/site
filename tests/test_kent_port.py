"""The site's integration of Kent, ported from its standalone repository yujieteo/kent.

visuals/kent/ is a port of the page files of https://github.com/yujieteo/kent, where the instrument
and its logic tests develop and its CI runs them. The site checks only how it publishes the port: the
port carries no tests or CI, its AGENTS.md names the repository, the catalogue stub points into the
folder and names the WebMCP tools the page registers, and the build publishes the page and its data
unchanged. That beamdswitch.js is templates/beamdswitch.js unchanged is checked by
tests/beamdswitch-voice.test.mjs.
"""

import json
import re
import unittest
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
FOLDER = ROOT / "visuals" / "kent"


def stub():
    return yaml.safe_load((ROOT / "data" / "visuals" / "kent.yaml").read_text(encoding="utf-8"))


class KentPortTests(unittest.TestCase):
    def test_port_carries_no_tests_or_ci(self):
        self.assertTrue((FOLDER / "index.html").is_file())
        self.assertFalse((FOLDER / "tests").exists(), "tests live in yujieteo/kent")
        self.assertFalse((FOLDER / ".github").exists(), "CI lives in yujieteo/kent")

    def test_agents_md_names_the_standalone_repository_as_the_source_of_truth(self):
        text = (FOLDER / "AGENTS.md").read_text(encoding="utf-8")
        self.assertIn("This repository, [yujieteo/kent](https://github.com/yujieteo/kent), is the source of truth", text)
        self.assertIn("Porting copies this repository minus `tests/` and `.github/`", text)

    def test_stub_points_into_the_folder(self):
        entry = stub()
        self.assertEqual(entry["slug"], "kent")
        self.assertEqual(entry["html_path"], "visuals/kent/index.html")
        self.assertEqual(entry["data_path"], "visuals/kent/raw.json")
        self.assertTrue((ROOT / entry["data_path"]).is_file())

    def test_page_registers_every_tool_the_stub_names_and_carries_its_title(self):
        html = (FOLDER / "index.html").read_text(encoding="utf-8")
        entry = stub()
        registered = re.findall(r'\{ name: "(\w+)", description:', html)
        self.assertEqual(registered, entry["webmcp_tools"])
        self.assertIn(f"<title>{entry['title']} — Yu Jie Teo</title>", html)

    def test_published_copy_is_the_port(self):
        if not (ROOT / "site" / "index.html").exists():
            self.skipTest("run scripts/build.py first")
        published = ROOT / "site" / "visuals" / "kent"
        self.assertEqual((published / "index.html").read_bytes(), (FOLDER / "index.html").read_bytes())
        self.assertEqual(
            json.loads((published / "data.json").read_text(encoding="utf-8")),
            json.loads((FOLDER / "raw.json").read_text(encoding="utf-8")),
        )


if __name__ == "__main__":
    unittest.main()
