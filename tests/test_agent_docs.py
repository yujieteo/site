"""The agent entry points (SKILLS.md, llms.txt, skills/) name only files that exist."""

import re
import unittest
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://teoyujie.org/"
REPO_URL = "https://github.com/yujieteo/site/blob/main/"
DOCS = [ROOT / "SKILLS.md", ROOT / "llms.txt", *sorted((ROOT / "skills").rglob("*.md"))]
LINK = re.compile(r"\]\(([^)\s]+)\)")
# A backticked repository path such as `scripts/build.py` or `data/visuals/`.
CODE_PATH = re.compile(r"`((?:data|docs|exports|schema|scripts|skills|static|templates|tests|visuals)/[^`\s]*)`")


def heading_anchors(markdown):
    """GitHub's anchors for the headings of a Markdown file."""
    anchors = set()
    for heading in re.findall(r"^#+\s+(.+?)\s*$", markdown, re.MULTILINE):
        anchors.add(re.sub(r"[^\w\- ]", "", heading.lower()).replace(" ", "-"))
    return anchors


class AgentDocLinkTests(unittest.TestCase):
    def assert_target(self, doc, path, anchor=""):
        label = f"{doc.relative_to(ROOT)} -> {path.relative_to(ROOT) if path.is_relative_to(ROOT) else path}"
        self.assertTrue(path.exists(), f"{label} does not exist")
        if anchor and path.suffix == ".md":
            self.assertIn(anchor, heading_anchors(path.read_text(encoding="utf-8")), f"{label}#{anchor}")

    def test_relative_and_repository_links_resolve(self):
        for doc in DOCS:
            for target in LINK.findall(doc.read_text(encoding="utf-8")):
                parts = urlsplit(target)
                if target.startswith(REPO_URL):
                    self.assert_target(doc, ROOT / parts.path.removeprefix("/yujieteo/site/blob/main/"), parts.fragment)
                elif not parts.scheme and parts.path:
                    self.assert_target(doc, (doc.parent / parts.path).resolve(), parts.fragment)
                elif not parts.scheme:
                    self.assertIn(parts.fragment, heading_anchors(doc.read_text(encoding="utf-8")), f"{doc.name}#{parts.fragment}")

    def test_site_links_name_generated_pages(self):
        if not (ROOT / "site/index.html").exists():
            self.skipTest("run scripts/build.py first")
        for doc in DOCS:
            for target in LINK.findall(doc.read_text(encoding="utf-8")):
                if target.startswith(SITE_URL):
                    page = urlsplit(target).path.lstrip("/") or "index.html"
                    self.assert_target(doc, ROOT / "site" / page)

    def test_backticked_repository_paths_exist(self):
        for doc in DOCS:
            for path in CODE_PATH.findall(doc.read_text(encoding="utf-8")):
                if not re.search(r"[<*]", path):
                    self.assertTrue((ROOT / path).exists(), f"{doc.relative_to(ROOT)} names missing `{path}`")

    def test_every_playbook_is_routed(self):
        text = (ROOT / "SKILLS.md").read_text(encoding="utf-8")
        for playbook in sorted((ROOT / "skills/playbooks").glob("*.md")):
            self.assertIn(f"(skills/playbooks/{playbook.name})", text, f"SKILLS.md does not route to {playbook.name}")


if __name__ == "__main__":
    unittest.main()
