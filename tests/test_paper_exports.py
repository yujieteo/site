import subprocess
import sys
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import paper_links_bib  # noqa: E402
import paper_tags  # noqa: E402
import papers  # noqa: E402
from toon import encode, needs_quotes  # noqa: E402


def run_cli(*args):
    return subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "papers.py"), *args],
        capture_output=True, text=True, cwd=ROOT,
    )


class ToonTests(unittest.TestCase):
    def test_quoting_rules(self):
        for value in ["", " x", "true", "42", "-1", "a:b", "a,b", "#x", "[x]", 'q"'] :
            self.assertTrue(needs_quotes(value), value)
        for value in ["math.NT", "Perfectoid Spaces", "modular-forms", "Émile"]:
            self.assertFalse(needs_quotes(value), value)

    def test_tabular_and_inline_forms(self):
        text = encode({
            "count": 2,
            "items": [{"id": 1, "name": "a, b"}, {"id": 2, "name": None}],
            "help": ["x", "y"],
            "empty": [],
        })
        self.assertEqual(text, 'count: 2\nitems[2]{id,name}:\n  1,"a, b"\n  2,null\nhelp[2]: x,y\nempty: []')


class TagTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Parsing the paper-links file takes seconds; read it once for the class.
        cls.records = yaml.safe_load((ROOT / "data/paper-links/paper-links.yaml").read_text(encoding="utf-8"))

    def test_every_record_is_tagged_with_a_leading_arxiv_class(self):
        for record in self.records:
            self.assertTrue(record.get("tags"), record["title"])
            self.assertTrue(paper_tags.is_arxiv_class(record["tags"][0]), record["title"])

    def test_committed_tags_match_rules(self):
        cache = paper_tags.load_arxiv_cache()
        stale = [r["title"] for r in self.records if r["tags"] != paper_tags.tag_record(r, cache)]
        self.assertEqual(stale, [], "run: python scripts/paper_tags.py --write")

    def test_legacy_arxiv_ids_use_their_archive(self):
        record = {"title": "Kapustin–Witten", "url": "https://arxiv.org/abs/hep-th/0604151",
                  "category": "arxiv.org", "note": "Geometric Langlands from S-duality."}
        self.assertEqual(paper_tags.tag_record(record)[0], "hep-th")

    def test_arxiv_id_parsing(self):
        self.assertEqual(paper_tags.arxiv_id("https://arxiv.org/pdf/2102.13459v3"), "2102.13459")
        self.assertEqual(paper_tags.arxiv_id("https://arxiv.org/abs/math/0401222"), "math/0401222")
        self.assertIsNone(paper_tags.arxiv_id("https://example.com/paper.pdf"))


class BibTests(unittest.TestCase):
    def test_escape_text_keeps_math_and_escapes_specials(self):
        escape = paper_links_bib.escape_text
        self.assertEqual(escape("a $x_1^2$ b_c 50% & #1"), r"a $x_1^2$ b\_c 50\% \& \#1")
        self.assertEqual(escape("x^2"), r"x\textasciicircum{}2")
        self.assertEqual(escape("cost $5"), r"cost \$5")
        self.assertEqual(escape("a } b {"), r"a \} b {}")

    def test_arxiv_entry_fields(self):
        record = {"title": "Small Gaps Between Primes", "url": "https://arxiv.org/abs/1311.4600",
                  "category": "arxiv.org", "tags": ["math.NT", "number-theory"],
                  "authors": ["James Maynard"], "year": 2013, "note": "Sieve weights."}
        entry = paper_links_bib.bib_entry(record, {}, set())
        self.assertTrue(entry.startswith("@misc{maynard2013small,"))
        for line in ["eprint        = {1311.4600}", "primaryClass  = {math.NT}", "author        = {James Maynard}"]:
            self.assertIn(line, entry)

    def test_year_from_arxiv_id(self):
        self.assertEqual(paper_links_bib.year_from_arxiv_id("2102.13459"), 2021)
        self.assertEqual(paper_links_bib.year_from_arxiv_id("hep-th/9711200"), 1997)

    def test_committed_bib_is_current(self):
        result = subprocess.run([sys.executable, "scripts/paper_links_bib.py", "--check"],
                                capture_output=True, text=True, cwd=ROOT)
        self.assertEqual(result.returncode, 0, result.stdout)


class AxiCliTests(unittest.TestCase):
    def test_home_view_shows_content(self):
        result = run_cli()
        self.assertEqual(result.returncode, 0)
        self.assertIn("description:", result.stdout)
        self.assertIn("top_classes[10]{class,count}:", result.stdout)

    def test_unknown_flag_is_a_usage_error_on_stdout(self):
        result = run_cli("list", "--stat", "x")
        self.assertEqual(result.returncode, 2)
        self.assertIn("unknown flag --stat", result.stdout)
        self.assertIn("--tag, --class, --limit, --fields", result.stdout)

    def test_empty_results_are_explicit(self):
        result = run_cli("list", "--tag", "no-such-tag")
        self.assertEqual(result.returncode, 0)
        self.assertIn("papers: 0 papers tagged no-such-tag found", result.stdout)

    def test_view_truncates_with_size_hint(self):
        records = papers.load()
        long_note = next(r for r in records if len(r["note"]) > papers.TRUNCATE)
        result = run_cli("view", str(long_note["id"]))
        self.assertIn(f"(truncated, {len(long_note['note'])} chars total)", result.stdout)
        self.assertIn(f"view {long_note['id']} --full", result.stdout)

    def test_missing_id_is_an_error(self):
        result = run_cli("view", "0")
        self.assertEqual(result.returncode, 1)
        self.assertTrue(result.stdout.startswith("error:"))

    def test_version_fast_path(self):
        self.assertEqual(run_cli("--version").stdout.strip(), papers.VERSION)

    def test_committed_toon_export_is_current(self):
        result = run_cli("export", "--check")
        self.assertEqual(result.returncode, 0, result.stdout)


if __name__ == "__main__":
    unittest.main()
