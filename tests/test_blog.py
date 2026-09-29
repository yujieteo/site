import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SLUG = "from-cech-cocycles-to-the-weil-conjectures"


class BlogPostPageTests(unittest.TestCase):
    def setUp(self):
        self.page = (ROOT / "site/blog" / f"{SLUG}.html").read_text(encoding="utf-8")

    def test_markdown_source_is_published_next_to_each_post(self):
        for source in (ROOT / "data/blog").glob("*.md"):
            published = ROOT / "site/blog" / source.name
            self.assertEqual(published.read_bytes(), source.read_bytes(), source.name)

    def test_copy_button_carries_the_markdown_source(self):
        match = re.search(
            r'<script type="application/json" id="post-markdown">(.*?)</script>',
            self.page, re.DOTALL,
        )
        self.assertIsNotNone(match)
        source = (ROOT / "data/blog" / f"{SLUG}.md").read_text(encoding="utf-8")
        self.assertEqual(json.loads(match.group(1)), source)
        self.assertIn(f'href="{SLUG}.md"', self.page)

    def test_left_sidebar_lists_every_post_and_marks_the_current_one(self):
        nav = re.search(r'<ul class="docs-nav-list">(.*?)</ul>', self.page, re.DOTALL)
        links = re.findall(r'<a href="([^"]+)\.html"', nav.group(1))
        slugs = {path.stem for path in (ROOT / "data/blog").glob("*.md")}
        self.assertEqual(set(links), slugs)
        self.assertIn(f'<a href="{SLUG}.html" aria-current="page">', nav.group(1))

    def test_right_sidebar_links_to_each_section_heading(self):
        toc = re.search(r'<nav class="docs-toc".*?</nav>', self.page, re.DOTALL).group(0)
        targets = re.findall(r'<a href="#([^"]+)"', toc)
        heading_ids = re.findall(r'<h[23] id="([^"]+)"', self.page)
        self.assertEqual(targets, heading_ids)
        self.assertEqual(len(targets), len(set(targets)))
        self.assertIn("1-the-shadow-a-cech-class", targets)


if __name__ == "__main__":
    unittest.main()
