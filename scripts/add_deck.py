#!/usr/bin/env python3
"""Check a slide deck folder data/decks/<slug>/ and print the link a blog post uses for it.

The deck passes when its folder holds a file index.html that is self-contained: every script,
stylesheet, image, media or frame it loads is inlined (a data: URI) or is a published file of its own
folder (index.html, *.pdf, slides/**/*.svg), and nothing loads from another site. Links (<a href>) may
point anywhere. The presenter's notes.md must stay out of data/decks/. The script then prints the
../decks/<slug>/index.html link and the blog posts that already use it.

It only reads files, so it is safe to run at any time. It exits non-zero on the first failed check.

Usage: scripts/add_deck.py SLUG
"""

import argparse
import re
import sys
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
SLUG = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
# Attributes that load a resource into the page, as opposed to a link the reader follows.
LOADS = {("script", "src"), ("link", "href"), ("img", "src"), ("source", "src"), ("video", "src"),
         ("video", "poster"), ("audio", "src"), ("iframe", "src"), ("embed", "src"), ("object", "data")}


class DeckError(ValueError):
    pass


class Resources(HTMLParser):
    def __init__(self):
        super().__init__()
        self.loaded = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if (tag, name) in LOADS and value and not (tag == "link" and self._is_link_only(attrs)):
                self.loaded.append(value)

    @staticmethod
    def _is_link_only(attrs):
        rel = dict(attrs).get("rel", "") or ""
        return not set(rel.lower().split()) & {"stylesheet", "preload", "modulepreload", "icon", "manifest"}


def published(path):
    """Whether the build publishes this path of a deck folder (scripts/build.py copies these only)."""
    parts = PurePosixPath(path).parts
    return path == "index.html" or path.endswith(".pdf") and len(parts) == 1 \
        or parts[:1] == ("slides",) and path.endswith(".svg")


def check(slug, root=ROOT):
    """Return (link, blog posts that use it); raise DeckError on the first failed check."""
    if not SLUG.fullmatch(slug):
        raise DeckError(f"slug {slug!r} must be lowercase words joined by '-'")
    folder = root / "data" / "decks" / slug
    if not folder.is_dir():
        raise DeckError(f"data/decks/{slug}/ does not exist")
    page = folder / "index.html"
    if not page.is_file():
        raise DeckError(f"data/decks/{slug}/index.html does not exist")
    notes = sorted(path.relative_to(root).as_posix() for path in folder.rglob("notes.md"))
    if notes:
        raise DeckError(f"{', '.join(notes)} must stay out of data/decks/; keep presenter notes elsewhere")
    parser = Resources()
    parser.feed(page.read_text(encoding="utf-8"))
    for reference in parser.loaded:
        parts = urlsplit(reference)
        if parts.scheme == "data":
            continue
        if parts.scheme or parts.netloc:
            raise DeckError(f"index.html loads {reference} from another site; inline it")
        target = (folder / parts.path).resolve()
        relative = target.relative_to(folder.resolve()).as_posix() if target.is_relative_to(folder.resolve()) else None
        if relative is None or not published(relative) or not target.is_file():
            raise DeckError(f"index.html loads {reference}, which is not a published file of the deck; inline it")
    link = f"../decks/{slug}/index.html"
    posts = sorted(path.relative_to(root).as_posix() for path in (root / "data" / "blog").glob("*.md")
                   if link in path.read_text(encoding="utf-8"))
    return link, posts


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("slug", help="the deck folder's name under data/decks/")
    parser.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    try:
        link, posts = check(args.slug, args.root)
    except DeckError as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1
    print(f"data/decks/{args.slug}/ is a self-contained deck")
    print(f"blog link: [{args.slug}]({link})")
    if posts:
        print(f"linked from: {', '.join(posts)}")
    else:
        print("no blog post links it yet: add the link to one (scripts/new_post.py writes a new post)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
