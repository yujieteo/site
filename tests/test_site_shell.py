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


class FadeTests(unittest.TestCase):
    def setUp(self):
        self.css = (ROOT / "static/css/style.css").read_text(encoding="utf-8")

    def test_fades_share_one_duration_and_easing(self):
        root = re.search(r":root\s*\{(.*?)\}", self.css, re.DOTALL).group(1)
        duration = re.search(r"--fade-duration:\s*(\d+)ms;", root)
        self.assertIsNotNone(duration)
        self.assertTrue(150 <= int(duration.group(1)) <= 250)
        self.assertRegex(root, r"--fade-ease:\s*[^;]+;")
        for rule in re.findall(r"(?:animation|transition)(?:-duration)?:[^;]*;", self.css):
            if "fade" in rule or "none" in rule:
                continue
            self.assertIn("var(--fade-duration)", rule, rule)
        self.assertRegex(self.css, r"@view-transition\s*\{\s*navigation:\s*auto;")
        self.assertIn("@keyframes fade-in", self.css)

    def test_reduced_motion_turns_every_fade_off(self):
        start = self.css.index("@media (prefers-reduced-motion: reduce)")
        block = self.css[start:start + 600]
        self.assertIn("--fade-duration: 0ms;", block)
        self.assertRegex(block, r"@view-transition\s*\{\s*navigation:\s*none;")
        self.assertIn("animation: none !important;", block)
        self.assertIn("transition: none !important;", block)
        script = (ROOT / "static/js/fade.js").read_text(encoding="utf-8")
        self.assertIn("prefers-reduced-motion: reduce", script)

    def test_fades_never_start_hidden(self):
        keyframes = re.search(r"@keyframes fade-in\s*\{(.*?)\}\s*\}", self.css, re.DOTALL).group(1)
        self.assertNotIn("to {", keyframes)
        self.assertNotRegex(self.css, r"animation[^;]*\b(both|backwards)\b")

    def test_every_page_loads_the_shared_fade_helpers(self):
        for path in shell_pages():
            with self.subTest(page=str(path.relative_to(SITE))):
                self.assertIn('static/js/fade.js"></script>', path.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
