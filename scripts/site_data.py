"""Load the site's sources from data/ and check them against their schemas.

Each loader returns plain dicts and lists, with Markdown bodies already
rendered to HTML, for the page builders and the Published Corpus.
"""

import html
import json
import re
from collections import Counter
from pathlib import Path

import markdown
import yaml
from jsonschema import Draft7Validator

from copy_markdown import absolute_markdown, titled_markdown
from notes import load_notes, split_frontmatter

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
MEDIA_ASSET_KEYS = ("audio", "video", "captions", "poster")
SITE_URL = "https://teoyujie.org/"


def render_markdown(text):
    return markdown.markdown(text or "", extensions=["extra", "sane_lists"])


def load_yaml(path):
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def load_all(subdir):
    directory = DATA / subdir
    if not directory.is_dir():
        return []
    items = []
    for path in sorted(directory.iterdir()):
        if path.suffix not in {".yaml", ".yml"}:
            continue
        data = load_yaml(path)
        if isinstance(data, list):
            items.extend(data)
        elif data is not None:
            items.append(data)
    return items


def load_one(subdir):
    records = load_all(subdir)
    if len(records) != 1:
        raise RuntimeError(f"Expected one record in data/{subdir}/, found {len(records)}")
    return records[0]


def load_validator(schema_path):
    return Draft7Validator(json.loads((ROOT / schema_path).read_text(encoding="utf-8")))


def check_document(validator, document, label):
    """Raise a RuntimeError naming the first schema error in ``document``, if any."""
    errors = sorted(validator.iter_errors(document), key=lambda error: list(error.path))
    if errors:
        location = ".".join(str(part) for part in errors[0].path)
        raise RuntimeError(f"Invalid {label} at {location or '<root>'}: {errors[0].message}")


def first_duplicate(values):
    """Return the first value, in source order, that occurs more than once, or None."""
    counts = Counter(values)
    return next((value for value, count in counts.items() if count > 1), None)


def parse_frontmatter(raw_text):
    """Split a Markdown file into (metadata_dict, body_markdown).

    Without a complete ``---`` frontmatter block, returns ({}, raw_text).
    """
    try:
        frontmatter, body = split_frontmatter(raw_text)
    except ValueError:
        return {}, raw_text
    return yaml.safe_load(frontmatter) or {}, body


def clean_blog_title(title, fallback):
    """Return a readable post title without a leading numeric index."""
    value = str(title or fallback).strip()
    value = re.sub(r"^\d+\s*(?:[-_.:)\]]+\s*|\s+)", "", value).strip()
    if title:
        return value or str(fallback)

    # Filename-derived titles should look like titles, not slugs.
    value = re.sub(r"[-_]+", " ", value)
    return value.title() or "Untitled"


def normalize_tags(tags, fallback):
    """Return a clean list of tags, falling back when empty."""
    if isinstance(tags, list):
        values = [str(tag).strip() for tag in tags]
    else:
        values = [tag.strip() for tag in str(tags or "").split(",")]
    values = [tag for tag in values if tag]
    return values or [str(fallback or "General")]


READING_WORDS_PER_MINUTE = 220
FENCED_CODE = re.compile(r"^ {0,3}(`{3,}|~{3,}).*?^ {0,3}\1[`~]*[ \t]*$", re.MULTILINE | re.DOTALL)


def reading_minutes(body_markdown):
    """Estimate whole minutes to read a post body (frontmatter already removed).

    Fenced code blocks are skipped (readers scan or copy them rather than read
    them), as are HTML tags/comments and link targets. A word is any
    whitespace-separated token containing a letter or digit, so inline code and
    TeX count like prose. Rounds to the nearest minute at 220 words per minute,
    with a minimum of one minute.
    """
    text = FENCED_CODE.sub(" ", body_markdown or "")
    text = re.sub(r"<!--.*?-->|<[^>]+>", " ", text, flags=re.DOTALL)
    text = re.sub(r"\]\([^)]*\)", "] ", text)
    words = sum(1 for token in text.split() if re.search(r"[^\W_]", token))
    return max(1, int(words / READING_WORDS_PER_MINUTE + 0.5))


def load_blog_posts():
    directory = DATA / "blog"
    if not directory.is_dir():
        return []
    posts = []
    for path in sorted(directory.glob("*.md")):
        raw = path.read_text(encoding="utf-8")
        meta, body = parse_frontmatter(raw)
        slug = meta.get("slug") or path.stem
        category = meta.get("category", "General")
        title = clean_blog_title(meta.get("title"), slug)
        posts.append({
            "slug": slug,
            "title": title,
            "date": str(meta.get("date", "")),
            "summary": meta.get("summary", ""),
            "category": category,
            "tags": normalize_tags(meta.get("tags"), category),
            "body_markdown": body,
            "source_markdown": raw,
            "copy_markdown": absolute_markdown(
                titled_markdown(title, body), f"{SITE_URL}blog/{slug}.html"
            ),
            "body_html": render_markdown(body),
            "reading_minutes": reading_minutes(body),
            "links": meta.get("links", []),
        })
    # Newest first.
    posts.sort(key=lambda p: p["date"], reverse=True)
    duplicate = first_duplicate(post["slug"] for post in posts)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate blog slug: {duplicate}")
    return posts


def load_daily_notes():
    """Load paragraph-sized, tagged notes from dated Markdown sections.

    Notes are written newest-to-oldest, with one heading per date. A paragraph
    may end in tags such as ``#math #reading``. The published page is also sorted
    newest-first.
    """
    document, registry = load_notes(DATA / "notes.md", DATA / "note-tags.json")
    meta = yaml.safe_load(document["frontmatter"]) or {}
    entries = []
    for entry in document["entries"]:
        notes = []
        for note in entry["notes"]:
            body_html = render_markdown(note["content"])
            plain_text = html.unescape(re.sub(r"<[^>]+>", " ", body_html))
            notes.append({
                "id": note["id"],
                "content": note["content"],
                "source": note["source"],
                "body_html": body_html,
                "plain_text": re.sub(r"\s+", " ", plain_text).strip(),
                "tags": note["tags"],
            })
        entries.append({
            "date": entry["date"],
            "display_date": entry["display_date"],
            "notes": notes,
        })
    return {
        "title": str(meta.get("title", "Notes")),
        "intro": str(meta.get("intro", "")),
        "entries": entries,
        "registry": registry,
    }


def load_media_items():
    """Load and validate media items (audio episodes and videos), newest first."""
    directory = DATA / "podcasts"
    if not directory.is_dir():
        return []
    validator = load_validator("schema/podcasts.schema.json")
    items = []
    for path in sorted(directory.glob("*.yaml")):
        item = load_yaml(path)
        check_document(validator, item, f"media item {path.stem}")
        if item["id"] != path.stem:
            raise RuntimeError(f"Media item {path.name} declares id {item['id']}")
        for asset_key in MEDIA_ASSET_KEYS:
            asset = item.get(asset_key)
            if asset is None:
                continue
            if not Path(asset).name.startswith(f"{item['id']}."):
                raise RuntimeError(
                    f"Media item {item['id']} must reference {asset_key}/{item['id']}.<ext>"
                )
            asset_path = directory / asset
            if not asset_path.is_file():
                raise RuntimeError(
                    f"Media item {item['id']} is missing {asset_path.relative_to(ROOT)}"
                )
        items.append(item)
    items.sort(key=lambda item: item["date"], reverse=True)
    duplicate = first_duplicate(item["id"] for item in items)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate media item id: {duplicate}")
    return items


def media_record_id(item):
    return f'{"video" if "video" in item else "podcast"}:{item["id"]}'


def load_about():
    about = load_one("about")
    return {
        **about,
        "intro_html": render_markdown(about["intro"]),
        "sections": [
            {**section, "slug": re.sub(r"[^a-z0-9]+", "-", section["title"].lower()).strip("-"),
             "content_html": render_markdown(section["content"])}
            for section in about.get("sections", [])
        ],
    }


def load_colophon():
    raw = (DATA / "colophon.md").read_text(encoding="utf-8")
    meta, body = parse_frontmatter(raw)
    return {
        "title": str(meta["title"]),
        "summary": str(meta.get("summary", "")),
        "body_markdown": body,
        "body_html": render_markdown(body),
        "copy_markdown": absolute_markdown(
            titled_markdown(meta["title"], body), f"{SITE_URL}colophon.html"
        ),
    }
