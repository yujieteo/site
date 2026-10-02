import json
import re
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from copy_markdown import absolute_markdown  # noqa: E402
from notes import split_frontmatter  # noqa: E402

SITE = ROOT / "site"
# Inline link and image destinations, reference definitions and HTML href/src.
LINK_TARGET = re.compile(
    r"(\]\(\s*)(?:<[^>\n]*>|[^\s()]+(?:\([^\s()]*\)[^\s()]*)*)(?=\s*(?:\"[^\"]*\"|\))\s*\)?)"
    r"|(^ {0,3}\[[^\]\n]+\]:[ \t]*)\S+"
    r"|(\b(?:href|src)=[\"'])[^\"'\n]*",
    re.MULTILINE,
)


def without_link_targets(text):
    return LINK_TARGET.sub(lambda m: next(group for group in m.groups() if group is not None), text)


def page_sources(path):
    page = path.read_text(encoding="utf-8")
    match = re.search(
        r'<script type="application/json" id="markdown-sources">(.*?)</script>', page, re.DOTALL
    )
    if match is None:
        return page, None
    return page, json.loads(match.group(1))


def buttons(page):
    return re.findall(r'<button type="button" class="[^"]*" data-copy-markdown="([^"]+)"', page)


def note_blocks():
    """Each note's Markdown block in data/notes.md, read independently of the build."""
    _, body = split_frontmatter((ROOT / "data/notes.md").read_text(encoding="utf-8"))
    sections = re.split(r"^##\s+\d{4}-\d{2}-\d{2}\s*$", body, flags=re.MULTILINE)[1:]
    return [
        block.strip()
        for section in sections
        for block in re.split(r"\n\s*\n", section)
        if block.strip()
    ]


class CopyMarkdownPageTests(unittest.TestCase):
    def assert_page_button(self, path, source_body, title):
        page, sources = page_sources(path)
        self.assertIsNotNone(sources, path)
        self.assertEqual(buttons(page), ["page"], path)
        self.assertIn("static/js/copy-markdown.js", page)
        copied = sources["page"]
        self.assertFalse(copied.startswith("---"), f"{path} keeps its front matter")
        expected = source_body.strip("\n") + "\n"
        if not expected.startswith("# "):
            expected = f"# {title}\n\n{expected}"
        self.assertEqual(without_link_targets(copied), without_link_targets(expected), path)
        self.assertEqual(absolute_markdown(copied, "https://example.com/"), copied,
                         f"{path} still has a relative link")
        return copied

    def test_every_blog_post_copies_its_markdown_without_front_matter(self):
        posts = sorted((ROOT / "data/blog").glob("*.md"))
        self.assertTrue(posts)
        for source in posts:
            frontmatter, body = split_frontmatter(source.read_text(encoding="utf-8"))
            title = re.search(r'^title:\s*"?(.*?)"?\s*$', frontmatter, re.MULTILINE).group(1)
            page = SITE / "blog" / f"{source.stem}.html"
            with self.subTest(post=source.stem):
                self.assert_page_button(page, body, title)

    def test_colophon_copies_its_markdown(self):
        _, body = split_frontmatter((ROOT / "data/colophon.md").read_text(encoding="utf-8"))
        copied = self.assert_page_button(SITE / "colophon.html", body, "How this site is built")
        self.assertIn("[open questions](https://teoyujie.org/open-questions.html)", copied)

    def test_about_copies_its_intro_and_sections(self):
        page, sources = page_sources(SITE / "about.html")
        self.assertEqual(buttons(page), ["page"])
        copied = sources["page"]
        self.assertTrue(copied.startswith("# "))
        self.assertIn("I'm currently based in Singapore.", copied)
        self.assertIn("\n## Values\n\n", copied)

    def test_every_note_has_a_button_carrying_its_own_markdown(self):
        page, sources = page_sources(SITE / "notes.html")
        blocks = note_blocks()
        ids = buttons(page)
        self.assertEqual(len(ids), len(blocks))
        self.assertEqual(len(set(ids)), len(ids))
        self.assertEqual(set(ids), set(sources))
        for note_id in ids:
            # The button sits inside the note it copies.
            article = re.search(
                rf'<article class="note-item" id="{re.escape(note_id)}"[^>]*>(.*?)</article>',
                page, re.DOTALL,
            )
            self.assertIn(f'data-copy-markdown="{note_id}"', article.group(1))
        copies = sorted(without_link_targets(sources[note_id]) for note_id in ids)
        self.assertEqual(copies, sorted(without_link_targets(block) + "\n" for block in blocks))
        for copied in sources.values():
            self.assertEqual(absolute_markdown(copied, "https://example.com/"), copied)

    def test_note_links_resolve_against_the_notes_page(self):
        _, sources = page_sources(SITE / "notes.html")
        joined = "\n".join(sources.values())
        self.assertIn("](https://teoyujie.org/visuals/beamdiag/index.html)", joined)
        self.assertNotIn("](visuals/", joined)

    def test_blog_links_resolve_against_the_post(self):
        _, sources = page_sources(SITE / "blog/statically-indeterminate-beams.html")
        copied = sources["page"]
        self.assertIn("(https://teoyujie.org/decks/indeterminate-beams/index.html)", copied)
        self.assertIn('src="https://teoyujie.org/decks/indeterminate-beams/index.html"', copied)
        self.assertNotIn("](../", copied)


class AbsoluteMarkdownTests(unittest.TestCase):
    BASE = "https://teoyujie.org/blog/post.html"

    def test_relative_links_images_and_html_become_absolute(self):
        self.assertEqual(
            absolute_markdown(
                '[a](../notes.html#x) ![i](img/p.png "Plot") [h](#top)\n'
                '[ref]: ../ref.html\n<img src="p.png"> [q](a(b)c)',
                self.BASE,
            ),
            '[a](https://teoyujie.org/notes.html#x) '
            '![i](https://teoyujie.org/blog/img/p.png "Plot") '
            '[h](https://teoyujie.org/blog/post.html#top)\n'
            '[ref]: https://teoyujie.org/ref.html\n'
            '<img src="https://teoyujie.org/blog/p.png"> '
            '[q](https://teoyujie.org/blog/a(b)c)',
        )

    def test_absolute_links_code_and_math_stay_as_written(self):
        text = (
            "[w](https://example.com/a) [m](mailto:me@example.com)\n"
            "`[c](../c)` and $[0,1](x)$ and $$[a](b)$$\n"
            "```\n[c](../c)\n```\n"
            "[not a link](two words)\n"
        )
        self.assertEqual(absolute_markdown(text, self.BASE), text)


if __name__ == "__main__":
    unittest.main()
