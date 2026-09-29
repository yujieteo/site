import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"


def shell_pages():
    """Every generated page rendered from templates/base.html.

    Redirect stubs, slide decks, and copied visualization pages are standalone
    documents and do not share the site shell.
    """
    for path in sorted(SITE.rglob("*.html")):
        relative = path.relative_to(SITE)
        if relative.parts[0] in {"decks", "podcast"}:
            continue
        if relative.parts[0] == "visuals" and len(relative.parts) > 2:
            continue
        yield path


class GlobalSearchTests(unittest.TestCase):
    def test_every_page_has_the_global_search_form(self):
        pages = list(shell_pages())
        self.assertGreater(len(pages), 20)
        for path in pages:
            page = path.read_text(encoding="utf-8")
            with self.subTest(page=str(path.relative_to(SITE))):
                header = re.search(r'<header class="site-header">(.*?)</header>', page, re.DOTALL)
                self.assertIsNotNone(header)
                self.assertIn('<form class="site-search" role="search" data-site-search>', header.group(1))
                self.assertIn('<label class="visually-hidden" for="site-search-input">', header.group(1))
                self.assertEqual(page.count('id="site-search-input"'), 1)
                ids = re.findall(r'\sid="([^"]+)"', page)
                self.assertEqual(len(ids), len(set(ids)), "duplicate element ids")
                for asset in ("static/js/site-search.js", "corpus.json"):
                    reference = re.search(rf'"((?:\.\./)*){re.escape(asset)}"', page)
                    self.assertIsNotNone(reference, asset)
                    self.assertTrue((path.parent / reference.group(1) / asset).resolve().is_file(), asset)

    def test_search_reuses_the_shared_corpus_loader(self):
        script = (ROOT / "static/js/site-search.js").read_text(encoding="utf-8")
        self.assertIn('import { loadCorpus, searchSite } from "./corpus.js";', script)
        self.assertNotIn("fetch(", script)


if __name__ == "__main__":
    unittest.main()
