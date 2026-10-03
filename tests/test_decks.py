import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SLUG = "fpl-early-season"
PDF_DECK = "indeterminate-beams"


class DeckTests(unittest.TestCase):
    def test_published_deck_is_the_source_file(self):
        self.assertEqual(
            (ROOT / "site/decks" / SLUG / "index.html").read_bytes(),
            (ROOT / "data/decks" / SLUG / "index.html").read_bytes(),
        )

    def test_only_deck_pages_and_slide_images_are_published(self):
        published = sorted(
            path.relative_to(ROOT / "site/decks").as_posix()
            for path in (ROOT / "site/decks").rglob("*")
            if path.is_file()
        )
        expected = sorted(
            path.relative_to(ROOT / "data/decks").as_posix()
            for path in (ROOT / "data/decks").rglob("*")
            if path.is_file() and (
                path.name == "index.html"
                or path.suffix == ".svg" and "slides" in path.parts
                or path.suffix == ".pdf" and path.parent.parent == ROOT / "data/decks"
            )
        )
        self.assertEqual(published, expected)
        self.assertIn(f"{SLUG}/index.html", published)
        self.assertFalse(any(path.endswith("notes.md") for path in published))

    def test_pdf_deck_publishes_every_slide_image(self):
        deck = ROOT / "site/decks" / PDF_DECK
        html = (deck / "index.html").read_text()
        data = json.loads(html.split('<script type="application/json" id="talk-data">', 1)[1].split("</script>", 1)[0])
        pages = max(page for frame in data["frames"] for page in frame["pages"])
        for theme in data["themes"]:
            images = sorted(path.name for path in (deck / "slides" / theme).glob("*.svg"))
            self.assertEqual(images, [f"{page:03d}.svg" for page in range(1, pages + 1)])
            for name in images:
                self.assertEqual(
                    (deck / "slides" / theme / name).read_bytes(),
                    (ROOT / "data/decks" / PDF_DECK / "slides" / theme / name).read_bytes(),
                )

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
