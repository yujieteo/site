"""The folder is a complete, self-contained project and its built page is current."""

import importlib.util
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Loaded under its own name so it cannot clash with another module called "build".
_spec = importlib.util.spec_from_file_location("sectionlab_build", ROOT / "build.py")
build = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(build)


class BuildTest(unittest.TestCase):
    def test_index_html_is_current(self):
        self.assertEqual(build.main(["--check"]), 0)

    def test_project_files_are_present(self):
        for name in ["README.md", "LICENSE", "SKILLS.md", "build.py", "template.html", "raw.json", "index.html", "requirements-test.txt",
                     "docs/architecture.md", "docs/model-format.md", "docs/verification.md",
                     "playbooks/add-shape.md", "playbooks/change-engine.md", "playbooks/verify.md", "playbooks/change-export.md", "playbooks/deploy-to-site.md",
                     "reference/sectionref.py", "reference/plasticref.py", "reference/prandtl.py", "reference/cases.py",
                     "reference/fixtures.json", "reference/reference.json", "reference/torsion-accuracy.json", ".github/workflows/ci.yml"]:
            self.assertTrue((ROOT / name).is_file(), name)
        self.assertIn("MIT License", (ROOT / "LICENSE").read_text(encoding="utf-8"))

    def test_skills_router_links_resolve(self):
        text = (ROOT / "SKILLS.md").read_text(encoding="utf-8")
        links = re.findall(r"\]\(([^)#]+)\)", text)
        self.assertGreaterEqual(len(links), 5)
        for link in links:
            if link.startswith("http"):
                continue
            self.assertTrue((ROOT / link).is_file(), link)

    def test_nothing_reaches_outside_the_folder(self):
        # Mirrored as a standalone repository: sources, tests and docs must not depend on the host site.
        for path in ROOT.rglob("*"):
            if path.suffix not in {".js", ".mjs", ".py", ".md", ".html", ".yml", ".json"} or "__pycache__" in path.parts:
                continue
            text = path.read_text(encoding="utf-8")
            self.assertNotRegex(text, r"\.\./\.\./", f"{path.relative_to(ROOT)} refers above the folder")

    def test_page_is_not_labelled_as_a_code_check(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("Verify independently", html)
        self.assertNotRegex(html.lower(), r"design[- ]code compliant|code[- ]compliant results")


if __name__ == "__main__":
    unittest.main()
