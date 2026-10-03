import json
import re
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from site_data import load_blog_posts, reading_minutes  # noqa: E402
SLUG = "from-cech-cocycles-to-the-weil-conjectures"


class BlogPostPageTests(unittest.TestCase):
    def setUp(self):
        self.page = (ROOT / "site/blog" / f"{SLUG}.html").read_text(encoding="utf-8")

    def test_markdown_source_is_published_next_to_each_post(self):
        for source in (ROOT / "data/blog").glob("*.md"):
            published = ROOT / "site/blog" / source.name
            self.assertEqual(published.read_bytes(), source.read_bytes(), source.name)

    def test_view_markdown_links_the_published_source(self):
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


class ReadingTimeTests(unittest.TestCase):
    def test_rounds_at_220_words_per_minute_with_a_one_minute_floor(self):
        self.assertEqual(reading_minutes(""), 1)
        self.assertEqual(reading_minutes("word " * 10), 1)
        self.assertEqual(reading_minutes("word " * 440), 2)
        self.assertEqual(reading_minutes("word " * 549), 2)
        self.assertEqual(reading_minutes("word " * 551), 3)

    def test_skips_fenced_code_markup_and_link_targets(self):
        prose = "word " * 440 + "\n"
        code = "```bash\n" + "brew install thing\n" * 400 + "```\n"
        tilde = "~~~\n" + "x = 1\n" * 400 + "~~~\n"
        self.assertEqual(reading_minutes(prose + code + tilde), 2)
        self.assertEqual(reading_minutes(prose + "<div>\n</div> [a](https://example.com/long/url) - *"), 2)

    def test_every_post_shows_its_reading_time(self):
        posts = load_blog_posts()
        corpus = json.loads((ROOT / "site/corpus.json").read_text(encoding="utf-8"))
        corpus_minutes = {
            record["id"].removeprefix("blog:"): record["readingMinutes"]
            for record in corpus["records"] if record["kind"] == "blog"
        }
        for post in posts:
            minutes = reading_minutes(post["body_markdown"])
            self.assertGreaterEqual(minutes, 1)
            self.assertEqual(corpus_minutes[post["slug"]], minutes, post["slug"])
            page = (ROOT / "site/blog" / f"{post['slug']}.html").read_text(encoding="utf-8")
            meta = re.search(r'<p class="post-meta">(.*?)</p>', page, re.DOTALL).group(1)
            self.assertIn(f'<span class="reading-time">{minutes} min read</span>', meta)
            nav = re.search(r'<ul class="docs-nav-list">(.*?)</ul>', page, re.DOTALL).group(1)
            for other in posts:
                entry = re.search(
                    rf'<a href="{re.escape(other["slug"])}\.html"[^>]*>(.*?)</a>', nav, re.DOTALL
                ).group(1)
                self.assertIn(
                    f'<span class="reading-time">{other["reading_minutes"]} min</span>', entry
                )

    def test_blog_index_renders_reading_time_from_the_corpus(self):
        script = (ROOT / "static/js/filter.js").read_text(encoding="utf-8")
        self.assertIn("entry.readingMinutes", script)
        self.assertIn("min read", script)


if __name__ == "__main__":
    unittest.main()
