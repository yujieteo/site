#!/usr/bin/env python3
"""Build the static site from YAML data and Markdown blog posts."""

import csv
import datetime
import html
import json
import os
import re
import shutil
import unicodedata
from collections import Counter
from pathlib import Path

import markdown
import yaml
from jsonschema import Draft7Validator

import paper_tags
from notes import load_notes, split_frontmatter
from published_corpus import attach_links, build_published_corpus

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
TEMPLATES = ROOT / "templates"
STATIC = ROOT / "static"
OUT = ROOT / "site"
BASE_TEMPLATE = (TEMPLATES / "base.html").read_text(encoding="utf-8")
MEDIA_ASSET_KEYS = ("audio", "video", "captions", "poster")


def render_markdown(text):
    return markdown.markdown(text or "", extensions=["extra", "sane_lists"])


def contains_math(html_text):
    """Detect TeX outside code blocks so MathJax is loaded only when needed."""
    prose = re.sub(r"<(pre|code)\b[^>]*>.*?</\1>", "", html_text, flags=re.DOTALL)
    return bool(re.search(r"\$[^$\n]+\$|\\\(|\\\[", prose))


def esc(value):
    """Escape a value for HTML text or a quoted attribute."""
    return html.escape("" if value is None else str(value), quote=True)


def time_tag(date, label=None, css_class=""):
    """A <time> element for an ISO date, showing ``label`` (the date by default)."""
    class_attr = f' class="{css_class}"' if css_class else ""
    return f'<time{class_attr} datetime="{esc(date)}">{esc(date if label is None else label)}</time>'


MATHJAX_SCRIPT = r"""
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'input']
    },
    chtml: { scale: 1.06 }
  };
  document.addEventListener('entries-rendered', function (event) {
    if (!(window.MathJax && window.MathJax.typesetPromise)) return;
    const target = event.detail && event.detail.target;
    if (window.MathJax.typesetClear) MathJax.typesetClear(target ? [target] : undefined);
    MathJax.typesetPromise(target ? [target] : undefined);
  });
</script>
<script id="MathJax-script" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js"></script>
"""

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


def resolve_visuals_repo():
    configured = os.environ.get("VISUALS_REPO")
    candidates = [Path(configured).expanduser()] if configured else []
    candidates.extend([
        ROOT.parent / "visuals",
        ROOT.parent.parent / "visuals",
        ROOT.parent.parent / "tmp" / "visuals",
    ])
    for candidate in candidates:
        if candidate.is_dir():
            return candidate.resolve()
    checked = ", ".join(str(path) for path in candidates)
    raise RuntimeError(
        "Visuals repository not found. Set VISUALS_REPO or place it in a supported "
        f"repository-relative location. Checked: {checked}"
    )


def load_visualizations():
    visualizations = load_all("visuals")
    validator = load_validator("schema/visualization.schema.json")
    for visualization in visualizations:
        check_document(validator, visualization,
                       f"visualization {visualization.get('slug', '<unknown>')}")
    duplicate = first_duplicate(visualization["slug"] for visualization in visualizations)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate visualization slug: {duplicate}")
    return visualizations


def visualization_source(visuals_repo, relative_path):
    # Paths under visuals/ name visualizations built in this repository;
    # everything else comes from the separate visuals checkout.
    repo = (ROOT if relative_path.startswith("visuals/") else visuals_repo).resolve()
    source = (repo / relative_path).resolve()
    try:
        source.relative_to(repo)
    except ValueError as exc:
        raise RuntimeError(f"Visualization source escapes its repository: {relative_path}") from exc
    if not source.is_file():
        raise RuntimeError(f"Visualization source is missing: {relative_path}")
    return source


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


def format_reading_time(minutes):
    return f"{minutes} min read"


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


NAV_KEYS = ["home", "about", "paper_links", "notes", "media", "blog", "visuals"]


def render_page(cv, active, title, content, corpus_revision, root="", math=False,
                shell_class=""):
    """Wrap ``content`` in the site shell; ``active`` is the current NAV_KEYS entry, or None."""
    name = cv["name"]
    # Every tab reads "<page> — <site>"; the homepage passes the full title.
    full_title = title if title.startswith(name) else f"{title} — {name}"
    fields = {
        "shell_class": shell_class,
        "title": esc(full_title),
        "content": content + (MATHJAX_SCRIPT if math else ""),
        "root": root,
        "corpus_revision": corpus_revision,
        "name": esc(name),
        **{f"aria_{key}": ' aria-current="page"' if key == active else "" for key in NAV_KEYS},
    }
    return BASE_TEMPLATE.format_map(fields)


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


def format_duration(seconds):
    total = int(round(float(seconds)))
    hours, remainder = divmod(total, 3600)
    minutes = remainder // 60
    if hours:
        return f"{hours} hr {minutes} min"
    if minutes:
        return f"{minutes} min"
    return f"{total} sec"


def media_player(item, prefix=""):
    if "video" in item:
        video_src = f"{prefix}{item['video']}"
        captions_src = f"{prefix}{item['captions']}"
        poster_src = f"{prefix}{item['poster']}"
        return (
            f'<video class="media-player" controls preload="metadata" playsinline '
            f'poster="{esc(poster_src)}">'
            f'<source src="{esc(video_src)}" type="video/mp4">'
            f'<track kind="captions" src="{esc(captions_src)}" srclang="en" '
            f'label="English" default>'
            'Your browser does not support the video element. '
            f'<a href="{esc(video_src)}">Download the video</a>.'
            '</video>'
        )
    src = f"{prefix}{item['audio']}"
    return (
        f'<audio class="media-player" controls preload="metadata" src="{esc(src)}">'
        f'Your browser does not support the audio element. '
        f'<a href="{esc(src)}">Download the episode</a>.'
        f'</audio>'
    )


def build_media_index(cv, items, corpus_revision):
    if items:
        latest = items[0]
        featured = (
            '<section class="media-featured">'
            '<p class="media-kicker">Latest item</p>'
            f'<h2 class="media-title">{esc(latest["title"])}</h2>'
            f'<p class="media-meta">{time_tag(latest["date"])} &middot; '
            f'{esc(format_duration(latest["duration_seconds"]))}</p>'
            f'{media_player(latest)}'
            f'<p class="media-summary">{esc(latest["summary"])}</p>'
            f'<p><a href="{esc(latest["id"])}.html">Open</a></p>'
            '</section>'
        )
        list_items = "".join(
            f'<li class="media-item">{time_tag(item["date"])}'
            f'<a href="{esc(item["id"])}.html">{esc(item["title"])}</a>'
            f'<span class="media-duration">'
            f'{esc(format_duration(item["duration_seconds"]))}</span></li>'
            for item in items
        )
        body = (
            featured
            + '<h2 class="section-title">All items</h2>'
            + f'<ul class="media-list">{list_items}</ul>'
        )
    else:
        body = (
            '<p class="media-empty">No items yet. Audio episodes are generated from the '
            'daily notes with the podcast skill and published here.</p>'
        )
    content = f'<h1 class="page-title">Media</h1>{body}'
    return render_page(cv, "media", "Media", content, corpus_revision, root="../")


def build_media_item(cv, item, note_dates, records, corpus_revision):
    sources_html = ""
    if "notes" in item:
        source_dates = sorted(
            {note_dates[note_id] for note_id in item["notes"] if note_id in note_dates},
            reverse=True,
        )
        if source_dates:
            links = " ".join(
                f'<a href="../notes.html#{esc(date)}">{esc(date)}</a>'
                for date in source_dates
            )
            sources_html = f'<p class="media-sources">Condensed from notes dated {links}.</p>'
    tags_html = "".join(
        f'<span class="tag media-tag">{esc(tag)}</span>'
        for tag in item["focus_tags"]
    )
    meta = (
        f'<p class="post-meta">{time_tag(item["date"])} &middot; '
        f'{esc(format_duration(item["duration_seconds"]))}'
    )
    if "notes" in item:
        meta += f' &middot; {len(item["notes"])} notes'
    meta += '</p>'
    content = (
        f'<h1 class="page-title">{esc(item["title"])}</h1>'
        f'{meta}'
        f'{media_player(item)}'
        f'<p class="media-summary">{esc(item["summary"])}</p>'
        f'<div class="entry-tags">{tags_html}</div>'
        f'{sources_html}'
        f'{render_links(records[media_record_id(item)], records, root="../")}'
        f'<p class="media-back"><a href="index.html">&larr; All items</a></p>'
    )
    return render_page(cv, "media", item["title"], content, corpus_revision, root="../")


def media_record_id(item):
    return f'{"video" if "video" in item else "podcast"}:{item["id"]}'


def publish_media_assets(items):
    for item in items:
        copies = [(item[key], OUT / "media" / item[key])
                  for key in MEDIA_ASSET_KEYS if item.get(key) is not None]
        # Keep the legacy /podcast/audio/<id>.mp3 URL resolving for direct links to
        # the first episode; a copy is safe here because redirects cannot serve media.
        if "audio" in item:
            copies.append((item["audio"], OUT / "podcast" / item["audio"]))
        for asset, destination in copies:
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(DATA / "podcasts" / asset, destination)


def build_redirect(target, title):
    """A minimal static redirect page for a moved URL."""
    return (
        '<!doctype html>\n'
        '<html lang="en">\n'
        '<head>\n'
        '  <meta charset="utf-8">\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n'
        f'  <meta http-equiv="refresh" content="0; url={esc(target)}">\n'
        f'  <link rel="canonical" href="{esc(target)}">\n'
        f'  <title>{esc(title)}</title>\n'
        '</head>\n'
        '<body>\n'
        f'  <p>This page has moved. <a href="{esc(target)}">Continue</a>.</p>\n'
        f'  <script>window.location.replace({json.dumps(target)});</script>\n'
        '</body>\n'
        '</html>\n'
    )


FACET_SHOW_FIRST = 8
# Pages with more tags than this also get a box to find a tag by name.
FIND_TAG_THRESHOLD = 40


def sorted_by_count(counts):
    return sorted(counts, key=lambda tag: (-counts[tag], tag.lower()))


def group_facets(counts, facets, classify):
    """Split tags into facets, most-used first. ``facets`` is [(id, label)]."""
    grouped = {facet_id: [] for facet_id, _ in facets}
    for tag in sorted_by_count(counts):
        grouped[classify(tag)].append(tag)
    return [(facet_id, label, grouped[facet_id]) for facet_id, label in facets if grouped[facet_id]]


def load_resource_facets():
    """Return a classifier for resource tags from data/tag-facets.yaml."""
    registry = load_yaml(DATA / "tag-facets.yaml")
    facets, owner = [], {}
    for facet in registry["facets"]:
        facets.append((facet["id"], facet["label"]))
        for tag in facet["tags"]:
            if tag in owner:
                raise RuntimeError(f"Tag {tag} is in facets {owner[tag]} and {facet['id']}")
            owner[tag] = facet["id"]

    def classify(tag):
        if tag not in owner:
            raise RuntimeError(f"Resource tag {tag} has no facet; add it to data/tag-facets.yaml")
        return owner[tag]
    return facets, classify


NOTE_FACETS = [("topic", "Topic"), ("arxiv", "arXiv class"), ("status", "Status"), ("project", "Project")]
NOTE_CLASS_FACETS = {"topic": "topic", "arxiv-math": "arxiv", "status": "status", "action": "status",
                     "project": "project"}


def note_classifier(registry):
    tags = registry.get("tags", {})
    return lambda tag: NOTE_CLASS_FACETS.get(tags.get(tag, {}).get("class"), "topic")


PAPER_FACETS = [("field", "Field"), ("arxiv", "arXiv class"), ("topic", "Topic"),
                ("form", "Form"), ("source", "Source")]
_PAPER_FIELDS = set(paper_tags.ARCHIVE_NAMES.values())
_PAPER_TOPICS = {tag for tag, _, _ in paper_tags.TOPICS}
_PAPER_FORMS = {tag for tag, _ in paper_tags.FORMS}
_PAPER_SOURCES = {tag for tag, _ in paper_tags.SOURCE_TAGS}


def classify_paper_tag(tag):
    if tag in _PAPER_FIELDS:
        return "field"
    if tag in _PAPER_FORMS:
        return "form"
    if tag in _PAPER_SOURCES:
        return "source"
    if tag in _PAPER_TOPICS or not paper_tags.is_arxiv_class(tag):
        return "topic"
    return "arxiv"


def render_facets(groups, counts):
    """One fieldset per facet: its most-used tags, then a toggle for the rest."""
    fieldsets = []
    for facet_id, label, tags in groups:
        buttons = "".join(
            f'<button type="button" class="tag{" tag-extra" if i >= FACET_SHOW_FIRST else ""}" '
            f'data-facet="{esc(facet_id)}" data-tag="{esc(tag)}" aria-pressed="false"'
            f'{" hidden" if i >= FACET_SHOW_FIRST else ""}>'
            f'{esc(tag)} <span class="tag-count">{counts[tag]}</span></button>'
            for i, tag in enumerate(tags)
        )
        more = (
            f'<button type="button" class="facet-more" aria-expanded="false" '
            f'data-show-label="Show all {len(tags)}">Show all {len(tags)}</button>'
            if len(tags) > FACET_SHOW_FIRST else ""
        )
        fieldsets.append(
            f'<fieldset class="facet" data-facet="{esc(facet_id)}">'
            f'<legend class="facet-legend">{esc(label)}</legend>'
            f'<div class="facet-tags">{buttons}</div>{more}</fieldset>'
        )
    return "".join(fieldsets)


def render_filterable_list(kind, facet_html, placeholder, empty_message, total,
                           default_show=False, initial_html="", find_tags=False,
                           list_title=None, noun="entries", timeline_html=""):
    initial_count_label = f"{total} {noun}" if default_show else ""
    find_box = (
        '<div class="facet-find"><label class="visually-hidden" for="tag-search">Find a tag</label>'
        '<input type="search" id="tag-search" class="tag-search-box" placeholder="Find a tag…" '
        'autocomplete="off"></div>'
        if find_tags else ""
    )
    heading = (
        f'<h2 class="collection-title" id="collection-title">{esc(list_title)} '
        f'<span class="collection-count">{total}</span></h2>'
        if list_title else ""
    )
    labelled = ' aria-labelledby="collection-title"' if list_title else ' aria-label="Filter"'
    # Under a list heading (h2), entry titles are h3.
    entry_heading = ' data-entry-heading="h3"' if list_title else ""
    list_open = list_close = timeline_script = ""
    if timeline_html:
        # Two views over the same notes. Without JavaScript both show, timeline first.
        heading += (
            '<div class="view-switch" role="group" aria-label="View" data-view-switch hidden>'
            '<button type="button" class="view-option" data-view="timeline" aria-pressed="true">Timeline</button>'
            '<button type="button" class="view-option" data-view="list" aria-pressed="false">List</button>'
            '</div>'
        )
        list_open = (
            f'<section class="notes-view timeline" data-view-panel="timeline" aria-label="Timeline">'
            f'{timeline_html}<p class="no-results" data-timeline-empty hidden>'
            f'{esc(empty_message)}</p></section>'
            '<section class="notes-view" data-view-panel="list" aria-label="All notes">'
        )
        list_close = "</section>"
        timeline_script = '\n    <script type="module" src="static/js/notes-views.js"></script>'

    return f"""
    <section class="collection"{labelled}>
    {heading}
    <form class="filter-bar" data-filter-form data-kind="{esc(kind)}" data-noun="{esc(noun)}"{entry_heading}
          data-total="{total}" data-default-show="{str(default_show).lower()}">
      <div class="filter-field">
        <label class="filter-label" for="entry-search">Filter this list</label>
        <input type="search" id="entry-search" class="search-box" placeholder="{esc(placeholder)}"
               autocomplete="off" enterkeyhint="search">
      </div>
      <button type="button" class="filters-toggle" data-filters-toggle aria-expanded="false"
              aria-controls="filter-panel">Filters<span class="filters-active-count" data-active-count hidden></span></button>
      <span class="result-count" data-result-count aria-live="polite" aria-atomic="true">{esc(initial_count_label)}</span>
      <div class="facet-panel" id="filter-panel" data-tag-bar hidden>
        {find_box}{facet_html}
        <p class="facet-note">Tags in one group match any of them; tags from different groups must all match.</p>
      </div>
    </form>
    <div class="active-filters" data-active-filters hidden>
      <span class="active-filters-label">Filtered by</span>
      <ul class="active-filter-list" data-active-filter-list></ul>
      <button type="button" class="clear-filters" data-clear-filters>Clear all</button>
    </div>
    {list_open}<div class="entry-list" data-entry-list aria-label="Results">{initial_html}</div>
    <p class="no-results" data-no-results hidden>{esc(empty_message)}</p>
    <nav class="pager" data-pager aria-label="Result pages" hidden></nav>{list_close}
    </section>
    <script type="module" src="static/js/filter.js"></script>{timeline_script}
    """.strip()


def render_entry_list(kind, entries, placeholder, empty_message, facets, classify,
                      default_show=False, list_title=None, noun="entries"):
    """Filter controls for a list the browser renders from the corpus (static/js/filter.js).

    ``entries`` supply only the tag counts and total: each needs ``category`` and
    may carry ``tags`` (defaults to the category). Used for Resources, Paper
    Links, and the Blog index.
    """
    counts = Counter()
    for entry in entries:
        counts.update(normalize_tags(entry.get("tags"), entry["category"]))
    facet_html = render_facets(group_facets(counts, facets, classify), counts)
    return render_filterable_list(kind, facet_html, placeholder, empty_message, len(entries),
                                  default_show, find_tags=len(counts) > FIND_TAG_THRESHOLD,
                                  list_title=list_title, noun=noun)


KIND_LABELS = {
    "note": "Note", "blog": "Post", "visualization": "Visual", "podcast": "Episode",
    "video": "Video", "paper": "Paper link", "resource": "Resource", "about": "Page",
    "profile": "Page",
}
LINK_LABELS = {
    "resolves": "Resolves", "resolvedBy": "Resolved by", "extends": "Extends",
    "extendedBy": "Extended by", "uses": "Uses", "usedBy": "Used by", "related": "Related",
}


def shorten(text, limit):
    text = re.sub(r"\s+", " ", str(text or "")).strip()
    if len(text) <= limit:
        return text
    cut = text[:limit - 1].rsplit(" ", 1)[0].rstrip(",;:–—-")
    return f"{cut}…"


SENTENCE_END = re.compile(r"(?<=[.!?])\s+(?=[\"“(\[A-Z0-9])")


def split_first_sentence(text, limit=110):
    """Return (first sentence, the rest) of plain text, the first shortened to ``limit``."""
    text = re.sub(r"\s+", " ", text or "").strip()
    parts = SENTENCE_END.split(text, maxsplit=1)
    first = parts[0]
    rest = parts[1] if len(parts) > 1 else ""
    return shorten(first, limit), rest


def record_label(record):
    """A short human label for a Corpus Record, used in link lists."""
    kind = KIND_LABELS.get(record["kind"], record["kind"])
    if record["kind"] == "note":
        first, _ = split_first_sentence(record.get("summary", ""), 90)
        return f"{kind}, {record['date']} — {first}"
    return f"{kind} — {record.get('title', '')}"


def render_links(record, records, root="", compact=False):
    """The Related block for one record, or "" when it has no links."""
    links = record.get("links") or []
    if not links:
        return ""
    items = "".join(
        f'<li><span class="related-rel">{esc(LINK_LABELS[link["rel"]])}</span> '
        f'<a href="{esc(root + records[link["target"]]["url"])}">'
        f'{esc(record_label(records[link["target"]]))}</a></li>'
        for link in links
    )
    if compact:
        return f'<ul class="related-list related-compact" aria-label="Related items">{items}</ul>'
    return (
        '<section class="related" aria-labelledby="related-heading">'
        '<h2 class="related-title" id="related-heading">Related</h2>'
        f'<ul class="related-list">{items}</ul></section>'
    )


def featured_items(cv, records):
    """The homepage's four cards: latest note, visual and media item, then the pinned item."""
    pinned_id = cv.get("pinned")
    if pinned_id and pinned_id not in records:
        raise RuntimeError(f"data/cv pinned item {pinned_id} is not in the Published Corpus")

    def newest(kinds, date_key="date"):
        candidates = [
            record for record in records.values()
            if record["kind"] in kinds and record["id"] != pinned_id and record.get(date_key)
        ]
        # Stable sort: records with the same date keep their source order.
        candidates.sort(key=lambda record: record[date_key], reverse=True)
        return candidates[0] if candidates else None

    cards = []
    for label, record, date_key in (
        ("Latest note", newest({"note"}), "date"),
        ("Latest visual", newest({"visualization"}, "fetched"), "fetched"),
        (None, newest({"podcast", "video"}), "date"),
    ):
        if record:
            label = label or ("Latest video" if record["kind"] == "video" else "Latest episode")
            cards.append((label, record, record[date_key]))
    if pinned_id:
        pinned = records[pinned_id]
        cards.append((f"Pinned {KIND_LABELS.get(pinned['kind'], '').lower()}".strip(), pinned,
                      pinned.get("date") or pinned.get("fetched")))
    return cards


def render_featured(cards):
    if not cards:
        return ""
    items = []
    for label, record, date in cards:
        if record["kind"] == "note":
            title, rest = split_first_sentence(record.get("summary", ""))
            summary = shorten(rest, 140)
        else:
            title = record.get("title", "")
            summary = shorten(record.get("summary", ""), 140)
        time_html = time_tag(date, css_class="card-date") if date else ""
        items.append(
            '<li class="card">'
            f'<p class="card-type">{esc(label)}</p>'
            f'<h3 class="card-title"><a class="card-link" href="{esc(record["url"])}">{esc(title)}</a></h3>'
            + (f'<p class="card-summary">{esc(summary)}</p>' if summary else "")
            + f'{time_html}</li>'
        )
    return (
        '<section class="featured" aria-labelledby="featured-heading">'
        '<h2 class="visually-hidden" id="featured-heading">Featured</h2>'
        f'<ul class="featured-grid">{"".join(items)}</ul></section>'
    )


def build_index(cv, resources, records, corpus_revision):
    facets, classify = load_resource_facets()
    body = render_entry_list(
        "resource",
        resources,
        "Filter resources by title, note or tag…",
        "No resources match these filters.",
        facets, classify,
        default_show=True,
        list_title="All resources",
        noun="resources",
    )
    content = (
        '<section class="hero">'
        f'<h1 class="hero-title">{esc(cv["name"])}</h1>'
        f'<div class="hero-lede">{cv["bio_html"]}</div>'
        '<p class="hero-links"><a class="more-link" href="open-questions.html">Open questions</a>'
        '<a class="more-link" href="colophon.html">How this site is built</a></p>'
        '</section>'
        f'{render_featured(featured_items(cv, records))}'
        f'{body}'
    )
    return render_page(cv, "home", f'{cv["name"]} — {cv["title"]}', content, corpus_revision,
                       math=True)


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


def build_about(cv, about, corpus_revision):
    sections_html = "".join(
        f'<h2 class="section-title" id="{esc(sec["slug"])}">{esc(sec["title"])}</h2>'
        f'{sec["content_html"]}'
        for sec in about["sections"]
    )
    content = f'<h1 class="page-title">{esc(cv["name"])}</h1>{about["intro_html"]}{sections_html}'
    return render_page(cv, "about", "About", content, corpus_revision)


def build_paper_links(cv, papers, corpus_revision):
    body = render_entry_list(
        "paper",
        papers,
        "Filter paper links by title, note or tag…",
        "No paper links match these filters.",
        PAPER_FACETS, classify_paper_tag,
        default_show=False,
        noun="paper links",
    )
    content = f'<h1 class="page-title">Paper Links</h1>{body}'
    return render_page(cv, "paper_links", "Paper Links", content, corpus_revision, math=True)


def build_blog_index(cv, posts, corpus_revision):
    body = render_entry_list(
        "blog",
        posts,
        "Filter posts by title, summary or tag…",
        "No posts match these filters.",
        [("topic", "Topic")], lambda tag: "topic",
        default_show=True,
        noun="posts",
    )
    content = f'<h1 class="page-title">Blog</h1>{body}'
    return render_page(cv, "blog", "Blog", content, corpus_revision)


def build_notes(cv, notes, records, corpus_revision):
    counts = Counter(
        tag
        for entry in notes["entries"]
        for note in entry["notes"]
        for tag in note["tags"]
    )
    total = sum(len(entry["notes"]) for entry in notes["entries"])
    facet_html = render_facets(
        group_facets(counts, NOTE_FACETS, note_classifier(notes["registry"])), counts
    )
    days_html = []
    for entry in notes["entries"]:
        items_html = []
        for note in entry["notes"]:
            record_id = note["id"]
            tags_html = "".join(
                f'<button type="button" class="tag" data-tag="{esc(tag)}">{esc(tag)}</button>'
                for tag in note["tags"]
            )
            items_html.append(
                f'<article class="note-item" id="{esc(record_id)}">'
                f'<div class="note-body">{note["body_html"]}</div>'
                f'<div class="entry-tags" aria-label="Tags">{tags_html}</div>'
                f'{render_links(records[record_id], records, compact=True)}</article>'
            )
        if items_html:
            days_html.append(
                f'<section class="note-day"><h2 class="note-date" id="{esc(entry["date"])}">'
                f'<a href="#{esc(entry["date"])}">{time_tag(entry["date"], entry["display_date"])}'
                f'</a></h2>{"".join(items_html)}</section>'
            )
    filters_html = render_filterable_list(
        "note", facet_html, "Filter notes by text or tag…", "No notes match these filters.",
        total, default_show=True, initial_html="".join(days_html),
        find_tags=len(counts) > FIND_TAG_THRESHOLD, noun="notes",
        timeline_html=render_timeline(notes, records),
    )
    open_count = sum(1 for *_, resolved_by in open_questions(notes, records) if not resolved_by)
    intro_html = render_markdown(notes["intro"])
    content = (
        f'<h1 class="page-title">{esc(notes["title"])}</h1>'
        f'<div class="notes-intro">{intro_html}</div>'
        f'<p class="page-links"><a class="more-link" href="open-questions.html">Open questions '
        f'<span class="more-link-count">{open_count} open</span></a></p>'
        f'{filters_html}'
    )
    return render_page(
        cv, "notes", notes["title"], content, corpus_revision,
        math=any(
            contains_math(note["body_html"])
            for entry in notes["entries"]
            for note in entry["notes"]
        ),
    )


LINK_ICON = (
    '<svg class="link-icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" '
    'focusable="false"><path d="M6.5 9.5l3-3M7 4.5l1-1a2.5 2.5 0 013.5 3.5l-1 1M9 11.5l-1 1'
    'A2.5 2.5 0 014.5 9l1-1" fill="none" stroke="currentColor" stroke-width="1.5" '
    'stroke-linecap="round"/></svg>'
)


def render_timeline(notes, records):
    """Notes grouped by year, then month (newest first); only the newest month starts open."""
    years = {}
    for entry in notes["entries"]:
        year, month = entry["date"][:4], entry["date"][:7]
        for note in entry["notes"]:
            years.setdefault(year, {}).setdefault(month, []).append((entry["date"], note))
    first_month = True
    year_sections = []
    for year, months in years.items():
        month_blocks = []
        for month, month_notes in months.items():
            items = []
            for date, note in month_notes:
                record_id = note["id"]
                title, _ = split_first_sentence(note["plain_text"], 120)
                tags = "".join(
                    f'<button type="button" class="tag tag-small" data-tag="{esc(tag)}">{esc(tag)}</button>'
                    for tag in note["tags"][:3]
                )
                related = (
                    f'<span class="timeline-related">{LINK_ICON}Has related items</span>'
                    if records[record_id].get("links") else ""
                )
                items.append(
                    f'<li class="timeline-item" data-note-id="{esc(record_id)}">'
                    f'{time_tag(date, css_class="timeline-date")}'
                    f'<span class="timeline-main"><a class="timeline-link" href="#{esc(record_id)}">'
                    f'{esc(title)}</a>{related}</span>'
                    f'<span class="timeline-tags">{tags}</span></li>'
                )
            label = datetime.date.fromisoformat(f"{month}-01").strftime("%B %Y")
            count = len(month_notes)
            month_blocks.append(
                f'<details class="timeline-month" data-month="{month}"{" open" if first_month else ""}>'
                f'<summary class="timeline-summary"><span class="timeline-month-name">{label}</span>'
                f'<span class="timeline-month-count" data-month-count data-total="{count}">'
                f'{count} {"note" if count == 1 else "notes"}</span></summary>'
                f'<ol class="timeline-list">{"".join(items)}</ol></details>'
            )
            first_month = False
        year_sections.append(
            f'<section class="timeline-year" aria-labelledby="year-{year}">'
            f'<h2 class="timeline-year-title" id="year-{year}">{year}</h2>{"".join(month_blocks)}</section>'
        )
    return "".join(year_sections)


def open_questions(notes, records):
    """Notes tagged todo, or answered by another item, newest first, with their resolvers."""
    questions = []
    for entry in notes["entries"]:
        for note in entry["notes"]:
            record = records[note["id"]]
            resolved_by = [
                records[link["target"]] for link in record.get("links", [])
                if link["rel"] == "resolvedBy"
            ]
            if "todo" in note["tags"] or resolved_by:
                questions.append((entry["date"], note, record, resolved_by))
    return questions


def build_open_questions(cv, notes, records, corpus_revision):
    questions = open_questions(notes, records)
    resolved = sum(1 for *_, resolved_by in questions if resolved_by)
    items = []
    for date, note, record, resolved_by in questions:
        title, rest = split_first_sentence(note["plain_text"], 140)
        status = (
            '<span class="status status-resolved">Resolved</span>' if resolved_by
            else '<span class="status status-open">Open</span>'
        )
        resolution = "".join(
            f'<p class="oq-resolution">Resolved by &rarr; '
            f'<a href="{esc(item["url"])}">{esc(record_label(item))}</a></p>'
            for item in resolved_by
        )
        items.append(
            f'<li class="oq-item"><p class="oq-meta">{time_tag(date)}{status}</p>'
            f'<h2 class="oq-title"><a href="{esc(record["url"])}">{esc(title)}</a></h2>'
            + (f'<p class="oq-rest">{esc(shorten(rest, 220))}</p>' if rest else "")
            + f'{resolution}</li>'
        )
    body = (
        f'<ol class="oq-list">{"".join(items)}</ol>' if items
        else '<p class="empty-state">No open questions right now.</p>'
    )
    content = (
        '<h1 class="page-title">Open questions</h1>'
        '<p class="page-lede">Notes tagged <code>todo</code>: questions to work out and things to '
        'do. Notes are never edited to close them. When a note, post, visual or episode answers '
        'one, it links back, and the question shows here as resolved.</p>'
        f'<p class="oq-summary">{len(questions) - resolved} open &middot; {resolved} resolved'
        ' &middot; <a href="notes.html">All notes</a></p>'
        f'{body}'
    )
    return render_page(
        cv, "notes", "Open questions", content, corpus_revision,
        math=any(contains_math(note["body_html"]) for _, note, _, _ in questions),
    )


def load_colophon():
    raw = (DATA / "colophon.md").read_text(encoding="utf-8")
    meta, body = parse_frontmatter(raw)
    return {
        "title": str(meta["title"]),
        "summary": str(meta.get("summary", "")),
        "body_markdown": body,
        "body_html": render_markdown(body),
    }


def build_colophon(cv, colophon, corpus_revision):
    body_html, _ = add_heading_anchors(colophon["body_html"])
    content = (
        f'<h1 class="page-title">{esc(colophon["title"])}</h1>'
        f'<div class="post-body">{body_html}</div>'
    )
    return render_page(cv, None, colophon["title"], content, corpus_revision)


def heading_slug(text):
    """Return a URL fragment for a heading's plain text."""
    ascii_text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    return slug or "section"


def add_heading_anchors(body_html):
    """Give each h2/h3 a unique id and return (html, [(level, id, inner_html)])."""
    headings = []
    used = set()

    def anchor(match):
        level, attrs, inner = match.group(1), match.group(2), match.group(3)
        existing = re.search(r'\bid="([^"]*)"', attrs)
        if existing:
            slug = existing.group(1)
        else:
            text = html.unescape(re.sub(r"<[^>]+>", "", inner))
            base = heading_slug(re.sub(r"[\\$]", "", text))
            slug, n = base, 2
            while slug in used:
                slug, n = f"{base}-{n}", n + 1
            attrs = f' id="{slug}"{attrs}'
        used.add(slug)
        # The TOC wraps each entry in a link, so drop links inside the heading.
        headings.append((int(level), slug, re.sub(r"</?a\b[^>]*>", "", inner)))
        return f"<h{level}{attrs}>{inner}</h{level}>"

    body_html = re.sub(r"<h([23])((?:\s[^>]*)?)>(.*?)</h\1>", anchor, body_html,
                       flags=re.DOTALL)
    return body_html, headings


def render_blog_sidebar(posts, current_slug):
    items = []
    for p in posts:
        current = ' aria-current="page"' if p["slug"] == current_slug else ""
        date = f'{time_tag(p["date"])} &middot; ' if p["date"] else ""
        meta = (
            f'<span class="docs-nav-date">{date}'
            f'<span class="reading-time">{p["reading_minutes"]} min</span></span>'
        )
        items.append(
            f'<li><a href="{esc(p["slug"])}.html"{current}>'
            f'<span class="docs-nav-title">{esc(p["title"])}</span>{meta}</a></li>'
        )
    items = "".join(items)
    return (
        '<details class="docs-nav" data-docs-nav open>'
        '<summary class="docs-nav-toggle">All posts</summary>'
        '<nav aria-label="Blog posts"><p class="docs-nav-heading">'
        '<a href="../blog.html">Blog</a></p>'
        f'<ul class="docs-nav-list">{items}</ul></nav></details>'
    )


def render_blog_toc(headings):
    if not headings:
        return ""
    items = "".join(
        f'<li class="toc-level-{level}"><a href="#{esc(slug)}">{inner}</a></li>'
        for level, slug, inner in headings
    )
    return (
        '<nav class="docs-toc" aria-labelledby="toc-heading" data-toc>'
        '<p class="docs-toc-heading" id="toc-heading">On this page</p>'
        f'<ul class="docs-toc-list">{items}</ul></nav>'
    )


def build_blog_post(cv, post, posts, records, corpus_revision):
    date = f'{time_tag(post["date"])} &middot; ' if post["date"] else ""
    meta_line = (
        f'<p class="post-meta">{date}<span class="reading-time">'
        f'{format_reading_time(post["reading_minutes"])}</span></p>'
    )
    body_html = re.sub(r"</?h1(?=>|\s)", lambda match: match.group(0).replace("h1", "h2"),
                       post["body_html"])
    body_html, headings = add_heading_anchors(body_html)
    markdown_json = json.dumps(post["source_markdown"], ensure_ascii=False).replace("<", "\\u003c")
    actions = (
        '<div class="page-actions">'
        '<button type="button" class="page-action" data-copy-markdown>Copy Markdown</button>'
        f'<a class="page-action" href="{esc(post["slug"])}.md" type="text/markdown">View Markdown</a>'
        '<span class="page-action-status" data-copy-status aria-live="polite"></span>'
        '</div>'
        f'<script type="application/json" id="post-markdown">{markdown_json}</script>'
    )
    content = (
        '<div class="docs-layout">'
        f'{render_blog_sidebar(posts, post["slug"])}'
        '<article class="docs-article">'
        f'<div class="docs-title-row"><h1 class="page-title">{esc(post["title"])}</h1>{actions}</div>'
        f'{meta_line}<div class="post-body">{body_html}</div>'
        f'{render_links(records["blog:" + post["slug"]], records, root="../")}</article>'
        f'<aside class="docs-aside">{render_blog_toc(headings)}</aside>'
        '</div>'
        '<script type="module" src="../static/js/post.js"></script>'
    )
    return render_page(
        cv, "blog", post["title"], content, corpus_revision, root="../",
        math=contains_math(body_html), shell_class=" site-shell-wide",
    )


def build_visuals_index(cv, visualizations, records, corpus_revision, root=""):
    visuals_path = "" if root else "visuals/"
    entries = "".join(
        f'<article class="entry"><h2 class="entry-title">'
        f'<a href="{visuals_path}{esc(visualization["slug"])}/index.html">'
        f'{esc(visualization["title"])}</a>'
        f'</h2><p class="entry-abstract">{esc(visualization["summary"])}</p>'
        f'{render_links(records["visualization:" + visualization["slug"]], records, root=root, compact=True)}'
        f'<p class="entry-date">Fetched {esc(visualization["fetched"])}</p></article>'
        for visualization in visualizations
    )
    content = f'<h1 class="page-title">Visuals</h1>{entries}'
    return render_page(cv, "visuals", "Visuals", content, corpus_revision, root=root)


def build_visuals_markdown(visualizations):
    sections = []
    for visualization in visualizations:
        slug = visualization["slug"]
        sections.append(
            f'## {visualization["title"]}\n{visualization["summary"]}\n'
            f'- HTML: https://teoyujie.org/visuals/{slug}/index.html\n'
            f'- Data: https://teoyujie.org/visuals/{slug}/data.json\n'
            f'- Fetched: {visualization["fetched"]}\n'
            f'- WebMCP tools: {", ".join(visualization["webmcp_tools"])}'
        )
    return "# Visuals\n\n" + "\n\n".join(sections) + "\n"


def publish_visualization_assets(visualizations, visuals_repo):
    visuals_out = OUT / "visuals"
    visuals_out.mkdir(parents=True, exist_ok=True)
    for visualization in visualizations:
        destination = visuals_out / visualization["slug"]
        destination.mkdir()
        html_source = visualization_source(visuals_repo, visualization["html_path"])
        data_source = visualization_source(visuals_repo, visualization["data_path"])
        shutil.copyfile(html_source, destination / "index.html")
        if data_source.suffix == ".csv":
            with data_source.open(encoding="utf-8", newline="") as handle:
                data = list(csv.DictReader(handle))
        else:
            data = json.loads(data_source.read_text(encoding="utf-8"))
        (destination / "data.json").write_text(
            json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
        )


def publish_decks():
    """Copy each slide deck's self-contained index.html to site/decks/<slug>/.

    Only index.html is published. A deck's presenter notes.md is private and
    stays out of the site even when it sits beside the deck in data/decks/.
    """
    decks_dir = DATA / "decks"
    if not decks_dir.is_dir():
        return []
    slugs = []
    for source in sorted(decks_dir.glob("*/index.html")):
        destination = OUT / "decks" / source.parent.name
        destination.mkdir(parents=True)
        shutil.copyfile(source, destination / "index.html")
        slugs.append(source.parent.name)
    return slugs


def prepare_output():
    """Recreate the generated site and copy its static assets."""
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "blog").mkdir(parents=True)
    (OUT / "media").mkdir()
    (OUT / "podcast").mkdir()
    shutil.copytree(STATIC, OUT / "static")
    shutil.copy2(ROOT / "llms.txt", OUT / "llms.txt")


def build_corpus(cv, about, resources, papers, posts, notes, visualizations, media_items, colophon):
    """Project the sources into the Published Corpus, add authored links, and validate it."""
    corpus = build_published_corpus(
        cv, about, resources, papers, posts, notes, visualizations, media_items, colophon
    )
    authored_links = [
        *((f"visualization:{v['slug']}", link["rel"], link["target"])
          for v in visualizations for link in v.get("links", [])),
        *((media_record_id(item), link["rel"], link["target"])
          for item in media_items for link in item.get("links", [])),
        *((f"blog:{post['slug']}", link["rel"], link["target"])
          for post in posts for link in post["links"]),
    ]
    try:
        attach_links(corpus, authored_links)
    except ValueError as exc:
        raise RuntimeError(f"Invalid link: {exc}") from exc
    check_document(load_validator("schema/generated/corpus.schema.json"), corpus, "generated corpus")
    duplicate = first_duplicate(record["id"] for record in corpus["records"])
    if duplicate is not None:
        raise RuntimeError(f"Duplicate generated corpus id: {duplicate}")
    return corpus


def main():
    cv = load_one("cv")
    cv["bio_html"] = render_markdown(cv["bio"])
    about = load_about()
    resources = load_all("resources")
    # The corpus keeps one record per url and title, so a duplicate would vanish silently.
    duplicate = first_duplicate((resource["url"], resource["title"]) for resource in resources)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate resource: {duplicate[1]}")
    papers = load_all("paper-links")
    for entry in [*resources, *papers]:
        entry["tags"] = normalize_tags(entry.get("tags"), entry["category"])
    posts = load_blog_posts()
    notes = load_daily_notes()
    note_dates = {
        note["id"]: entry["date"]
        for entry in notes["entries"]
        for note in entry["notes"]
    }
    visualizations = load_visualizations()
    media_items = load_media_items()
    visuals_repo = resolve_visuals_repo()
    for visualization in visualizations:
        visualization_source(visuals_repo, visualization["html_path"])
        visualization_source(visuals_repo, visualization["data_path"])
    colophon = load_colophon()
    corpus = build_corpus(
        cv, about, resources, papers, posts, notes, visualizations, media_items, colophon
    )
    records = {record["id"]: record for record in corpus["records"]}

    prepare_output()
    publish_visualization_assets(visualizations, visuals_repo)
    decks = publish_decks()
    publish_media_assets(media_items)
    (OUT / "corpus.json").write_text(
        json.dumps(corpus, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )
    corpus_revision = corpus["revision"]

    pages = {
        OUT / "index.html": build_index(cv, resources, records, corpus_revision),
        OUT / "about.html": build_about(cv, about, corpus_revision),
        OUT / "papers.html": build_paper_links(cv, papers, corpus_revision),
        OUT / "notes.html": build_notes(cv, notes, records, corpus_revision),
        OUT / "open-questions.html": build_open_questions(cv, notes, records, corpus_revision),
        OUT / "colophon.html": build_colophon(cv, colophon, corpus_revision),
        OUT / "blog.html": build_blog_index(cv, posts, corpus_revision),
        OUT / "media" / "index.html": build_media_index(cv, media_items, corpus_revision),
        OUT / "visuals.html": build_visuals_index(cv, visualizations, records, corpus_revision),
        OUT / "visuals" / "index.html": build_visuals_index(
            cv, visualizations, records, corpus_revision, root="../"
        ),
        OUT / "visuals.md": build_visuals_markdown(visualizations),
        # Keep every legacy /podcast/... URL resolving via minimal redirect pages.
        OUT / "podcast" / "index.html": build_redirect("/media/index.html", "Media"),
    }
    for post in posts:
        pages[OUT / "blog" / f"{post['slug']}.html"] = build_blog_post(
            cv, post, posts, records, corpus_revision
        )
        pages[OUT / "blog" / f"{post['slug']}.md"] = post["source_markdown"]
    for item in media_items:
        pages[OUT / "media" / f"{item['id']}.html"] = build_media_item(
            cv, item, note_dates, records, corpus_revision
        )
        if "audio" in item:
            pages[OUT / "podcast" / f"{item['id']}.html"] = build_redirect(
                f"/media/{item['id']}.html", item["title"]
            )
    for path, content in pages.items():
        path.write_text(content, encoding="utf-8")

    print(
        f"Built site into {OUT}/ "
        f"({len(resources)} resources, {len(papers)} paper links, "
        f"{len(posts)} blog posts, {len(visualizations)} visualizations, "
        f"{len(media_items)} media items, {len(decks)} decks)"
    )


if __name__ == "__main__":
    main()
