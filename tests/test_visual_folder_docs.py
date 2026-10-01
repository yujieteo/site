"""A visualization folder with an AGENTS.md has a standalone repository of its own.

For a folder ported from its standalone repository, that repository is where the visualization and its
tests develop and the folder is a port of its page files (the repository minus tests/ and .github/); for
the rest, the folder is still mirrored there. Either way the folder must carry its own LICENSE and
SKILLS.md, its agent docs must link only to files inside the folder, and a SKILLS.md that lists WebMCP
tools must cover every tool its catalogue stub names.
"""

import re
import unittest
from pathlib import Path
from urllib.parse import urlsplit

import yaml


ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"\]\(([^)\s]+)\)")
FOLDERS = sorted(path.parent for path in (ROOT / "visuals").glob("*/AGENTS.md"))


class VisualFolderDocsTest(unittest.TestCase):
    def test_some_folders_carry_agent_docs(self):
        self.assertTrue(FOLDERS)

    def test_folder_carries_licence_and_skills(self):
        for folder in FOLDERS:
            with self.subTest(folder.name):
                self.assertTrue((folder / "SKILLS.md").is_file(), "SKILLS.md is missing")
                licence = (folder / "LICENSE").read_text(encoding="utf-8")
                self.assertTrue(licence.startswith("MIT License"), "LICENSE is not MIT")
                self.assertIn("Copyright (c) 2026 Yu Jie Teo", licence)

    def test_links_stay_inside_the_folder(self):
        for folder in FOLDERS:
            for doc in (folder / "AGENTS.md", folder / "SKILLS.md"):
                for target in LINK.findall(doc.read_text(encoding="utf-8")):
                    parts = urlsplit(target)
                    if parts.scheme or not parts.path:
                        continue
                    with self.subTest(doc=str(doc.relative_to(ROOT)), target=target):
                        path = (folder / parts.path).resolve()
                        self.assertTrue(path.is_relative_to(folder), "link leaves the folder")
                        self.assertTrue(path.exists(), "link target is missing")

    def test_agents_md_names_the_live_page_and_upstream(self):
        for folder in FOLDERS:
            with self.subTest(folder.name):
                text = (folder / "AGENTS.md").read_text(encoding="utf-8")
                self.assertIn(f"https://teoyujie.org/visuals/{folder.name}/", text)
                self.assertIn(f"https://github.com/yujieteo/site/tree/main/visuals/{folder.name}", text)

    def test_skills_md_lists_every_webmcp_tool(self):
        for folder in FOLDERS:
            text = (folder / "SKILLS.md").read_text(encoding="utf-8")
            stub = ROOT / "data" / "visuals" / f"{folder.name}.yaml"
            if "## WebMCP tools" not in text or not stub.is_file():
                continue
            for tool in yaml.safe_load(stub.read_text(encoding="utf-8"))["webmcp_tools"]:
                with self.subTest(folder=folder.name, tool=tool):
                    self.assertIn(f"| `{tool}` |", text)


if __name__ == "__main__":
    unittest.main()
