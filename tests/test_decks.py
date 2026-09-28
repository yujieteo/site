import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SLUG = "fpl-early-season"


class DeckTests(unittest.TestCase):
    def test_published_deck_is_the_source_file(self):
        self.assertEqual(
            (ROOT / "site/decks" / SLUG / "index.html").read_bytes(),
            (ROOT / "data/decks" / SLUG / "index.html").read_bytes(),
        )

    def test_only_deck_pages_are_published(self):
        published = sorted(
            path.relative_to(ROOT / "site/decks").as_posix()
            for path in (ROOT / "site/decks").rglob("*")
            if path.is_file()
        )
        self.assertEqual(published, [f"{SLUG}/index.html"])

    def test_blog_post_makes_the_deck_discoverable(self):
        post = (ROOT / "site/blog/buy-the-defence-check-the-luck.html").read_text()
        self.assertIn(f'href="../decks/{SLUG}/index.html"', post)
        self.assertIn(f'src="../decks/{SLUG}/index.html"', post)
        corpus = json.loads((ROOT / "site/corpus.json").read_text())
        record = next(
            item for item in corpus["records"]
            if item["id"] == "blog:buy-the-defence-check-the-luck"
        )
        self.assertEqual(record["url"], "blog/buy-the-defence-check-the-luck.html")
        self.assertIn(f"decks/{SLUG}/index.html", record["content"])


if __name__ == "__main__":
    unittest.main()
