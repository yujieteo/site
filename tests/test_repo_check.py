"""Repository checks that replace review by reading: committed artifacts, source-grep tests, the review tier."""

import sys
import tempfile
import textwrap
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import repo_check  # noqa: E402


class ArtifactTests(unittest.TestCase):
    def test_build_and_os_artifacts_are_named(self):
        # The first two were committed here (6e1aa98, 4d6da58); the AppleDouble file reached a deploy.
        cases = {
            "scripts/__pycache__/build.cpython-314.pyc": "build or OS artifact",
            "data/.DS_Store": "build or OS artifact",
            "blog/._post.html": "AppleDouble file",
            "scripts/old.pyo": "build or OS artifact",
            "Thumbs.db": "build or OS artifact",
        }
        for path, reason in cases.items():
            with self.subTest(path=path):
                self.assertEqual(repo_check.artifact(path), reason)

    def test_source_paths_pass(self):
        for path in ("scripts/build.py", "data/blog/post.md", ".github/workflows/ci.yml", ".gitignore",
                     "tests/fixtures/beamdswitch/parse.mjs"):
            with self.subTest(path=path):
                self.assertIsNone(repo_check.artifact(path))


def python_finds(source):
    return [test for test, _ in repo_check.python_source_greps(textwrap.dedent(source), "tests/test_x.py")]


def js_finds(source):
    return [test for test, _ in repo_check.js_source_greps(textwrap.dedent(source), "tests/x.test.mjs")]


class SourceGrepTests(unittest.TestCase):
    def test_a_python_assertion_on_code_text_is_found(self):
        # The favicon guard review dropped in 9ee037e: it grepped scripts/build.py.
        self.assertEqual(python_finds("""
            class FaviconTests(unittest.TestCase):
                def test_build_serves_it(self):
                    self.assertTrue((ROOT / "static" / "favicon.ico").is_file())
                    build = (ROOT / "scripts" / "build.py").read_text(encoding="utf-8")
                    self.assertIn('OUT / "favicon.ico"', build)
        """), ["test_x.FaviconTests.test_build_serves_it"])

    def test_code_text_read_in_set_up_is_found(self):
        self.assertEqual(python_finds("""
            class Tests(unittest.TestCase):
                def setUp(self):
                    self.script = (ROOT / "static/js/fade.js").read_text()
                    self.css = (ROOT / "static/css/style.css").read_text()

                def test_script(self):
                    self.assertRegex(self.script, "fade")

                def test_css(self):
                    self.assertIn("--fade-duration", self.css)
        """), ["test_x.Tests.test_script"])

    def test_generated_pages_and_behaviour_pass(self):
        self.assertEqual(python_finds("""
            class Tests(unittest.TestCase):
                def test_page(self):
                    page = (ROOT / "site/visuals/index.html").read_text()
                    self.assertIn("filter.js", page)

                def test_behaviour(self):
                    script = (ROOT / "scripts/build.py").read_text()
                    self.assertEqual(build.render(script), "ok")
        """), [])

    def test_a_node_assertion_on_code_text_is_found(self):
        # The voice sweep review dropped in fa8fd94 checked page text with .includes().
        self.assertEqual(js_finds("""
            const TEMPLATE = read("templates/beamdswitch.js");
            test("pages ship the template", () => {
              const html = read(`visuals/${slug}/index.html`);
              assert.ok(html.includes(TEMPLATE.trimEnd()));
            });
            test("labels", async () => {
              const labels = await readFile(new URL("../static/js/site-search.js", import.meta.url), "utf8");
              assert.match(labels, /calibration/);
            });
            test("deck runs", () => {
              assert.equal(run(read("templates/beamdswitch.js")), "ok");
              assert.ok(result.includes("a"));
            });
        """), ["x.test.mjs: pages ship the template", "x.test.mjs: labels"])

    def test_the_allowlist_names_every_existing_case_with_a_reason(self):
        lines = [line for line in (ROOT / "tests" / "source-grep-allowlist.txt").read_text().splitlines()
                 if line and not line.startswith("#")]
        for line in lines:
            with self.subTest(line=line):
                self.assertRegex(line, r"\S  # \S")
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "allow.txt"
            path.write_text("# comment\na.B.test_c  # reason\n\n", encoding="utf-8")
            self.assertEqual(repo_check.allowlisted(path), {"a.B.test_c"})


class TierTests(unittest.TestCase):
    def test_content_takes_the_fast_path(self):
        # b5e5bc5 added a blog post; a paper link also regenerates exports/paper-links.toon.
        self.assertEqual(repo_check.tier(["data/blog/post.md", "data/notes.md", "data/note-tags.json",
                                          "data/paper-links/papers.yaml", "exports/paper-links.toon",
                                          "data/visuals/beamdswitch.yaml", "data/decks/talk/index.html"]),
                         ("fast", []))

    def test_a_private_copy_takes_the_fast_path_with_its_upstream_named(self):
        self.assertEqual(repo_check.tier(["visuals/connes-qft/index.html", "data/visuals/connes-qft.yaml"]),
                         ("fast", ["visuals/connes-qft/"]))

    def test_code_tests_and_new_private_visuals_take_the_full_pipeline(self):
        # 8eaf490 changed a deck playbook and its test.
        self.assertEqual(repo_check.tier(["data/blog/post.md", "tests/deck-notes.test.mjs"]),
                         ("full", ["tests/deck-notes.test.mjs"]))
        for path in ("scripts/build.py", "templates/base.html", "visuals/new-port/index.html",
                     "data/tag-facets.yaml", ".github/workflows/ci.yml", "README.md"):
            with self.subTest(path=path):
                self.assertEqual(repo_check.tier([path]), ("full", [path]))


if __name__ == "__main__":
    unittest.main()
