"""The codemods (sync_beamdswitch, rename, move_links, jsdoc_types, source_grep_rewrite), each run on a
small temporary repository: no build, browser, tsc run or network."""

import contextlib
import io
import json
import sys
import tempfile
import textwrap
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import jsdoc_types  # noqa: E402
import move_links  # noqa: E402
import rename  # noqa: E402
import source_grep_rewrite  # noqa: E402
import sync_beamdswitch  # noqa: E402


def run(main, *argv):
    """(exit code, stdout, stderr) of a script's main(argv)."""
    out, err = io.StringIO(), io.StringIO()
    with contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
        code = main([*argv])
    return code, out.getvalue(), err.getvalue()


class TempRepo(unittest.TestCase):
    def setUp(self):
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        self.root = Path(tmp.name)

    def write(self, path, text):
        (self.root / path).parent.mkdir(parents=True, exist_ok=True)
        (self.root / path).write_text(textwrap.dedent(text).lstrip("\n") if text.startswith("\n") else text, encoding="utf-8")

    def read(self, path):
        return (self.root / path).read_text(encoding="utf-8")

    def run_in(self, main, *argv):
        return run(main, *argv, "--root", str(self.root))


class SyncBeamdswitchTests(TempRepo):
    def test_copies_the_template_into_each_copy_and_its_inlined_page(self):
        self.write("templates/beamdswitch.js", "const v = 2;\n")
        self.write("visuals/a/beamdswitch.js", "const v = 1;\n")
        self.write("visuals/a/index.html", '<p>x</p><script id="beamdswitch">\nconst v = 1;\n\n</script><script>y</script>')
        self.write("visuals/b/index.html", "<p>no template</p>")
        code, out, _ = self.run_in(sync_beamdswitch.main, "--check")
        self.assertEqual(code, 1)
        self.assertIn("visuals/a/beamdswitch.js differs", out)
        self.assertEqual(self.read("visuals/a/beamdswitch.js"), "const v = 1;\n")
        self.assertEqual(self.run_in(sync_beamdswitch.main)[0], 0)
        self.assertEqual(self.read("visuals/a/beamdswitch.js"), "const v = 2;\n")
        self.assertEqual(self.read("visuals/a/index.html"), '<p>x</p><script id="beamdswitch">\nconst v = 2;\n\n</script><script>y</script>')
        self.assertEqual(self.run_in(sync_beamdswitch.main, "--check")[:2], (0, "2 copies match templates/beamdswitch.js\n"))


REGISTRY = {"version": 1, "classes": {"topic": "A subject."},
            "arxiv_math": {"source": "s", "checked": "2026-09-27", "categories": []},
            "tags": {"stats": {"class": "topic", "description": "Numbers.", "aliases": ["statistic"], "replaced_by": None},
                     "numbers": {"class": "topic", "description": "Old.", "aliases": [], "replaced_by": "stats"},
                     "fpl": {"class": "topic", "description": "Football.", "aliases": [], "replaced_by": None}}}


class RenameTagTests(TempRepo):
    def setUp(self):
        super().setUp()
        self.write("data/note-tags.json", json.dumps(REGISTRY, indent=2, ensure_ascii=False) + "\n")
        self.write("data/notes.md", "---\ntitle: N\n---\n\n## 2026-10-03\n\nThe #stats in prose stay. #fpl #stats\n\nOther. #fpl\n")
        self.write("data/blog/a.md", '---\ntitle: "Stats"\ntags: "fpl, stats,  slides"\n---\nThe stats body stays.\n')
        self.write("data/blog/b.md", "---\ntitle: B\ntags: [stats, other]\n---\n")
        self.write("data/podcasts/p.yaml", "id: p\nfocus_tags:\n- stats\n- fpl\nsummary: stats stay\n")
        self.write("data/resources/r.yaml", "- title: stats\n  tags: [stats]\n- title: S\n  category: stats\n  tags: [fpl]\n")
        self.write("data/tag-facets.yaml", "# Facets.\nfacets:\n  - id: subject\n    tags: [maths, stats,\n           fpl]\n"
                                           "  - id: region\n    tags: [global]\n")
        self.write("scripts/vocab.py", 'TAGS = ("stats", "statistics-old")\n')

    def test_renames_the_tag_in_every_structure_and_nowhere_else(self):
        code, out, err = self.run_in(rename.main, "tag", "stats", "statistics")
        self.assertEqual(code, 0, err)
        registry = json.loads(self.read("data/note-tags.json"))
        self.assertEqual(list(registry["tags"]), ["statistics", "numbers", "fpl"])
        self.assertEqual(registry["tags"]["numbers"]["replaced_by"], "statistics")
        self.assertEqual(self.read("data/notes.md"), "---\ntitle: N\n---\n\n## 2026-10-03\n\nThe #stats in prose stay. #fpl #statistics\n\nOther. #fpl\n")
        self.assertEqual(self.read("data/blog/a.md"), '---\ntitle: "Stats"\ntags: "fpl, statistics,  slides"\n---\nThe stats body stays.\n')
        self.assertEqual(self.read("data/blog/b.md"), "---\ntitle: B\ntags: [statistics, other]\n---\n")
        self.assertEqual(self.read("data/podcasts/p.yaml"), "id: p\nfocus_tags:\n- statistics\n- fpl\nsummary: stats stay\n")
        self.assertEqual(self.read("data/resources/r.yaml"), "- title: stats\n  tags: [statistics]\n- title: S\n  category: stats\n  tags: [fpl]\n")
        self.assertEqual(self.read("data/tag-facets.yaml"), "# Facets.\nfacets:\n  - id: subject\n    tags: [maths, statistics,\n"
                                                            "           fpl]\n  - id: region\n    tags: [global]\n")
        self.assertIn("review by hand: scripts/vocab.py:1 mentions stats", out)
        self.assertTrue(self.run_in(rename.main, "tag", "stats", "statistics")[1].startswith("no source names stats; nothing to do\n"))

    def test_refuses_while_a_resource_takes_the_tag_from_its_category(self):
        self.write("data/resources/r.yaml", "- title: stats\n  tags: [stats]\n- title: S\n  category: stats\n")
        before = {path: self.read(path) for path in ("data/notes.md", "data/resources/r.yaml", "data/tag-facets.yaml")}
        code, out, err = self.run_in(rename.main, "tag", "stats", "statistics")
        self.assertEqual((code, out), (1, ""))
        self.assertIn("add tags: or change the category first: data/resources/r.yaml:4", err)
        self.assertEqual({path: self.read(path) for path in before}, before)
        self.write("data/resources/r.yaml", "- title: stats\n  tags: [stats]\n- title: S\n  category: stats\n  tags: [fpl]\n")
        self.assertEqual(self.run_in(rename.main, "tag", "stats", "statistics")[0], 0)
        self.assertIn("statistics", self.read("data/tag-facets.yaml"))

    def test_check_writes_nothing_and_a_taken_name_is_refused(self):
        before = self.read("data/notes.md")
        code, out, _ = self.run_in(rename.main, "tag", "stats", "statistics", "--check")
        self.assertEqual(code, 0)
        self.assertIn("would change data/notes.md", out)
        self.assertEqual(self.read("data/notes.md"), before)
        self.assertIn("already has tag or alias 'statistic'", self.run_in(rename.main, "tag", "stats", "statistic")[2])
        self.assertIn("already has tag or alias 'fpl'", self.run_in(rename.main, "tag", "stats", "fpl")[2])
        self.assertIn("must be lowercase", self.run_in(rename.main, "tag", "stats", "Bad Tag")[2])
        self.assertIn("data/tag-facets.yaml already has tag 'global'", self.run_in(rename.main, "tag", "stats", "global")[2])


class RenameFieldAndTokenTests(TempRepo):
    def test_renames_a_front_matter_key_and_lists_the_code_that_reads_it(self):
        self.write("data/blog/a.md", "---\ncategory: Computing\nsummary: The category stays.\n---\ncategory: body stays\n")
        self.write("scripts/loader.py", 'value = meta["category"]\n')
        code, out, _ = self.run_in(rename.main, "field", "category", "kind")
        self.assertEqual(code, 0)
        self.assertEqual(self.read("data/blog/a.md"), "---\nkind: Computing\nsummary: The category stays.\n---\ncategory: body stays\n")
        self.assertIn("review by hand: scripts/loader.py:1", out)
        self.write("data/blog/b.md", "---\ncategory: A\nkind: B\n---\n")
        self.assertIn("already has field 'kind'", self.run_in(rename.main, "field", "category", "kind")[2])

    def test_renames_a_css_token_but_not_comments_strings_class_names_or_longer_names(self):
        self.write("static/css/style.css", '/* --fade-ease here */\n:root { --fade-ease: ease; --fade-ease-out: x; }\n'
                                           '.btn--fade-ease { transition: opacity var(--fade-ease); content: "--fade-ease"; }\n')
        self.write("templates/base.html", '<style>p { color: var(--fade-ease) }</style><p style="x: var(--fade-ease)">--fade-ease</p>')
        self.write("static/js/fade.js", 'get("--fade-ease"); get("--fade-ease-out"); // get("--fade-ease")\n')
        self.write("tests/test_x.py", 'TOKEN = "--fade-ease"\n')
        code, out, _ = self.run_in(rename.main, "css-token", "fade-ease", "fade-curve")
        self.assertEqual(code, 0)
        self.assertEqual(self.read("static/css/style.css"), '/* --fade-ease here */\n:root { --fade-curve: ease; --fade-ease-out: x; }\n'
                                                            '.btn--fade-ease { transition: opacity var(--fade-curve); content: "--fade-ease"; }\n')
        self.assertEqual(self.read("templates/base.html"), '<style>p { color: var(--fade-curve) }</style><p style="x: var(--fade-curve)">--fade-ease</p>')
        self.assertEqual(self.read("static/js/fade.js"), 'get("--fade-curve"); get("--fade-ease-out"); // get("--fade-ease")\n')
        self.assertIn("review by hand: tests/test_x.py:1", out)
        self.assertNotIn("static/css/style.css:", out)
        self.assertEqual(self.run_in(rename.main, "css-token", "fade-ease", "fade-curve")[0], 0)


class MoveLinksTests(TempRepo):
    def test_rewrites_links_and_paths_to_a_moved_file_or_folder(self):
        self.write("SKILLS.md", "[Add](skills/playbooks/add-note.md#steps) and [Other](skills/playbooks/other.md).\n")
        self.write("skills/playbooks/a.md", "See [note](add-note.md) and `skills/playbooks/add-note.md`, not `skills/playbooks/add-note.mdx`.\n"
                                            "[repo](https://github.com/yujieteo/site/blob/main/skills/playbooks/add-note.md)\n")
        self.write("skills/playbooks/add-note.md", "# Add\n\nSee [search](search-notes.md) and [steps](#steps).\n")
        self.write("skills/playbooks/search-notes.md", "# Search\n")
        code, out, _ = self.run_in(move_links.main, "skills/playbooks/add-note.md", "skills/notes/add-note.md")
        self.assertEqual(code, 0)
        self.assertEqual(self.read("SKILLS.md"), "[Add](skills/notes/add-note.md#steps) and [Other](skills/playbooks/other.md).\n")
        self.assertEqual(self.read("skills/playbooks/a.md"),
                         "See [note](../notes/add-note.md) and `skills/notes/add-note.md`, not `skills/playbooks/add-note.mdx`.\n"
                         "[repo](https://github.com/yujieteo/site/blob/main/skills/notes/add-note.md)\n")
        self.assertEqual(self.read("skills/playbooks/add-note.md"), "# Add\n\nSee [search](../playbooks/search-notes.md) and [steps](#steps).\n")
        self.assertIn("move it with git mv", out)
        self.assertIn("nothing to do", self.run_in(move_links.main, "skills/playbooks/add-note.md", "skills/notes/add-note.md")[1])

    def test_a_moved_file_keeps_its_relative_links_after_git_mv(self):
        self.write("skills/notes/deep/add-note.md", "[s](search-notes.md), [p](../principles/p.md), [gone](missing.md)\n")
        self.write("skills/playbooks/search-notes.md", "# Search\n")
        self.write("skills/principles/p.md", "# P\n")
        self.assertEqual(self.run_in(move_links.main, "skills/playbooks/add-note.md", "skills/notes/deep/add-note.md")[0], 0)
        expected = "[s](../../playbooks/search-notes.md), [p](../../principles/p.md), [gone](missing.md)\n"
        self.assertEqual(self.read("skills/notes/deep/add-note.md"), expected)
        self.assertIn("nothing to do", self.run_in(move_links.main, "skills/playbooks/add-note.md", "skills/notes/deep/add-note.md")[1])
        self.assertEqual(self.read("skills/notes/deep/add-note.md"), expected)

    def test_a_folder_move_rewrites_paths_inside_it(self):
        self.write("README.md", "[ref](skills/reference/links.md) and `skills/reference/`\n")
        code, out, _ = self.run_in(move_links.main, "skills/reference", "docs/reference", "--check")
        self.assertIn("would change README.md", out)
        self.run_in(move_links.main, "skills/reference", "docs/reference")
        self.assertEqual(self.read("README.md"), "[ref](docs/reference/links.md) and `docs/reference/`\n")


class JsdocTypesTests(TempRepo):
    def test_adds_types_the_file_already_uses_and_lists_the_rest(self):
        self.write("static/js/a.js", textwrap.dedent("""\
            /** @param {HTMLElement} node @param {string} label */
            export function a(node, label) { return [node, label]; }

            export function b(node) { return node; }

            /**
             * Multi.
             */
            export function c(label, other) { return [label, other]; }
            """))
        tsc = ("static/js/a.js(4,19): error TS7006: Parameter 'node' implicitly has an 'any' type.\n"
               "static/js/a.js(9,19): error TS7006: Parameter 'label' implicitly has an 'any' type.\n"
               "static/js/a.js(9,26): error TS7006: Parameter 'other' implicitly has an 'any' type.\n"
               "static/js/a.js(2,1): error TS6133: 'x' is declared but its value is never read.\n")
        self.write("tsc.txt", tsc)
        code, out, _ = self.run_in(jsdoc_types.main, "--from", str(self.root / "tsc.txt"))
        self.assertEqual(code, 0)
        self.assertEqual(self.read("static/js/a.js"), textwrap.dedent("""\
            /** @param {HTMLElement} node @param {string} label */
            export function a(node, label) { return [node, label]; }

            /** @param {HTMLElement} node */
            export function b(node) { return node; }

            /**
             * Multi.
             * @param {string} label
             */
            export function c(label, other) { return [label, other]; }
            """))
        self.assertIn("choose the type by hand: static/js/a.js(9,26): TS7006 Parameter 'other'", out)
        self.assertIn("TS6133", out)
        before = self.read("static/js/a.js")
        self.write("tsc.txt", tsc.replace("(9,", "(10,").replace("(4,", "(5,"))
        self.run_in(jsdoc_types.main, "--from", str(self.root / "tsc.txt"))
        self.assertEqual(self.read("static/js/a.js"), before)

    def test_lists_a_gap_that_the_added_jsdoc_does_not_close(self):
        self.write("static/js/r.js", "/** @param {number} sum */\nfunction f(sum) { return sum; }\n"
                                     "const total = [1].reduce((sum, row) => sum + row, 0);\n")
        self.write("tsc.txt", "static/js/r.js(3,27): error TS7006: Parameter 'sum' implicitly has an 'any' type.\n")
        self.assertIn("added static/js/r.js:3: @param sum: number", self.run_in(jsdoc_types.main, "--from", str(self.root / "tsc.txt"))[1])
        self.write("tsc.txt", "static/js/r.js(4,27): error TS7006: Parameter 'sum' implicitly has an 'any' type.\n")
        code, out, _ = self.run_in(jsdoc_types.main, "--from", str(self.root / "tsc.txt"))
        self.assertEqual((code, out), (0, "not changed, choose the type by hand: static/js/r.js(4,27): TS7006 "
                                          "Parameter 'sum' implicitly has an 'any' type.\n"))


class SourceGrepRewriteTests(TempRepo):
    def test_rewrites_a_constant_assertion_into_an_import_and_lists_the_rest(self):
        self.write("tests/source-grep-allowlist.txt", "")
        self.write("tests/test_x.py", textwrap.dedent("""\
            import sys
            import unittest
            from pathlib import Path

            ROOT = Path(__file__).resolve().parents[1]
            sys.path.insert(0, str(ROOT / "scripts"))


            class Tests(unittest.TestCase):
                def test_constant(self):
                    text = (ROOT / "scripts" / "run_tests.py").read_text(encoding="utf-8")
                    self.assertIn("SLOWEST = 10", text)

                def test_other(self):
                    text = (ROOT / "scripts" / "build.py").read_text(encoding="utf-8")
                    self.assertIn("def main", text)
            """))
        code, out, _ = self.run_in(source_grep_rewrite.main)
        self.assertEqual(code, 0)
        self.assertIn("rewrote tests/test_x.py:10: test_x.Tests.test_constant", out)
        self.assertIn("not changed: tests/test_x.py:14: test_x.Tests.test_other: not the NAME = literal pattern", out)
        self.assertEqual(self.read("tests/test_x.py"), textwrap.dedent("""\
            import sys
            import unittest
            from pathlib import Path

            ROOT = Path(__file__).resolve().parents[1]
            sys.path.insert(0, str(ROOT / "scripts"))

            import run_tests  # noqa: E402


            class Tests(unittest.TestCase):
                def test_constant(self):
                    self.assertEqual(run_tests.SLOWEST, 10)

                def test_other(self):
                    text = (ROOT / "scripts" / "build.py").read_text(encoding="utf-8")
                    self.assertIn("def main", text)
            """))
        self.assertNotIn("rewrote", self.run_in(source_grep_rewrite.main)[1])


if __name__ == "__main__":
    unittest.main()
