#!/usr/bin/env python3
"""Build the static site from YAML data and Markdown blog posts."""

import html
import json
import re
import shutil
from collections import Counter
from datetime import date
from pathlib import Path

import yaml
from jsonschema import Draft7Validator

from published_corpus import build_published_corpus

try:
    import markdown as _markdown
except ImportError:  # pragma: no cover
    _markdown = None

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
TEMPLATES = ROOT / "templates"
STATIC = ROOT / "static"
OUT = ROOT / "site"
BASE_TEMPLATE = (TEMPLATES / "base.html").read_text(encoding="utf-8")


def render_markdown(text):
    if _markdown is None:
        raise RuntimeError(
            "The 'markdown' package is required for About/Blog content. "
            "Install it with: pip install markdown --break-system-packages"
        )
    return _markdown.markdown(text or "", extensions=["extra", "sane_lists"])


def contains_math(html_text):
    """Detect TeX outside code blocks so MathJax is loaded only when needed."""
    prose = re.sub(r"<(pre|code)\b[^>]*>.*?</\1>", "", html_text, flags=re.DOTALL)
    return bool(re.search(r"\$[^$\n]+\$|\\\(|\\\[", prose))


def esc(value):
    """Escape a value for HTML text or a quoted attribute."""
    return html.escape("" if value is None else str(value), quote=True)


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


def parse_frontmatter(raw_text):
    """Split a Markdown file into (metadata_dict, body_markdown).
    Expects a leading `---` / YAML block / `---` frontmatter section.
    If there's no frontmatter, returns ({}, raw_text) unchanged.
    """
    if raw_text.startswith("---"):
        parts = raw_text.split("---", 2)
        if len(parts) >= 3:
            meta = yaml.safe_load(parts[1]) or {}
            body = parts[2].lstrip("\n")
            return meta, body
    return {}, raw_text


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
            "body_html": render_markdown(body),
        })
    # Newest first.
    posts.sort(key=lambda p: p["date"], reverse=True)
    duplicate_slugs = [
        slug for slug, count in Counter(post["slug"] for post in posts).items()
        if count > 1
    ]
    if duplicate_slugs:
        raise RuntimeError(f"Duplicate blog slug: {duplicate_slugs[0]}")
    return posts


def load_daily_notes():
    """Load paragraph-sized, tagged notes from dated Markdown sections.

    Notes are written newest-to-oldest, with one heading per date. A paragraph
    may end in tags such as ``#math #reading``. The published page is also sorted
    newest-first.
    """
    path = DATA / "notes.md"
    raw = path.read_text(encoding="utf-8")
    meta, body = parse_frontmatter(raw)
    heading = re.compile(r"^##\s+(\d{4}-\d{2}-\d{2})\s*$", re.MULTILINE)
    matches = list(heading.finditer(body))

    leading_text = body[:matches[0].start()].strip() if matches else body.strip()
    if leading_text and not re.fullmatch(r"(?:<!--.*?-->\s*)+", leading_text, re.DOTALL):
        raise RuntimeError("data/notes.md content must begin with a ## YYYY-MM-DD heading")

    entries = []
    seen_dates = set()
    for index, match in enumerate(matches):
        iso_date = match.group(1)
        try:
            parsed_date = date.fromisoformat(iso_date)
        except ValueError as exc:
            raise RuntimeError(f"Invalid note date: {iso_date}") from exc
        if iso_date in seen_dates:
            raise RuntimeError(f"Duplicate note date: {iso_date}")
        seen_dates.add(iso_date)

        end = matches[index + 1].start() if index + 1 < len(matches) else len(body)
        day_markdown = body[match.end():end].strip()
        note_blocks = [block.strip() for block in re.split(r"\n\s*\n", day_markdown)
                       if block.strip()]
        notes = []
        for block in note_blocks:
            tag_match = re.search(
                r"\s+((?:#[A-Za-z0-9][A-Za-z0-9_.-]*(?:\s+|$))+)$",
                block,
            )
            raw_tags = re.findall(r"#([A-Za-z0-9][A-Za-z0-9_.-]*)", tag_match.group(1)) \
                if tag_match else []
            tags = list(dict.fromkeys(tag.lower() for tag in raw_tags))
            note_markdown = block[:tag_match.start()].rstrip() if tag_match else block
            body_html = render_markdown(note_markdown)
            plain_text = html.unescape(re.sub(r"<[^>]+>", " ", body_html))
            notes.append({
                "content": note_markdown,
                "body_html": body_html,
                "plain_text": re.sub(r"\s+", " ", plain_text).strip(),
                "search_text": re.sub(r"\s+", " ", plain_text).strip().lower(),
                "tags": tags,
            })
        entries.append({
            "date": iso_date,
            "display_date": parsed_date.strftime("%-d %B %Y"),
            "notes": notes,
        })

    entries.sort(key=lambda entry: entry["date"], reverse=True)
    return {
        "title": str(meta.get("title", "Notes")),
        "intro": str(meta.get("intro", "")),
        "entries": entries,
    }


def site_fields(cv, active):
    """Return shared site identity and navigation state."""
    keys = ["home", "about", "paper_links", "notes", "blog"]
    identity = {
        "name": cv["name"],
        "tagline": cv["title"],
    }
    navigation = {
        f"aria_{key}": (' aria-current="page"' if key == active else "")
        for key in keys
    }
    return identity | navigation


def render_page(title, content, corpus_revision, root="", tagline="", name="", math=False, **nav):
    fields = {
        "title": esc(title),
        "content": content + (MATHJAX_SCRIPT if math else ""),
        "root": root,
        "corpus_revision": corpus_revision,
        "tagline": esc(tagline), "name": esc(name),
        **nav,
    }
    return BASE_TEMPLATE.format_map(fields)


def render_tag_bar(tags, counts, total, show_first=8):
    buttons = [
        f'<button class="tag" data-tag="__all__" type="button" '
        f'aria-pressed="true">all <span class="tag-count">{total}</span></button>'
    ]
    for i, tag in enumerate(tags):
        extra_cls = " tag-extra" if i >= show_first else ""
        hidden = " hidden" if i >= show_first else ""
        buttons.append(
            f'<button class="tag{extra_cls}" data-tag="{esc(tag)}" type="button" '
            f'aria-pressed="false"{hidden}>'
            f'{esc(tag)} <span class="tag-count">{counts[tag]}</span></button>'
        )

    remaining = max(0, len(tags) - show_first)
    hint = (
        f'<p class="tag-more-hint">+{remaining} more &mdash; type above to find one</p>'
        if remaining else ""
    )
    return "".join(buttons) + hint


def render_filterable_list(kind, tag_bar_html, search_placeholder, empty_message,
                            total, default_show=False, initial_html=""):
    initial_count_label = "" if not default_show else f"{total} entries"

    return f"""
    <form class="search-row" data-filter-form data-kind="{esc(kind)}"
          data-default-show="{str(default_show).lower()}">
      <label class="visually-hidden" for="entry-search">{esc(search_placeholder)}</label>
      <input type="text" id="entry-search" class="search-box" placeholder="{esc(search_placeholder)}"
             autocomplete="off">
      <button type="submit" class="search-btn">Search</button>
      <details class="filters-menu">
        <summary class="filters-toggle">Filters</summary>
        <div class="tag-panel" data-tag-bar role="group" aria-label="Filter by tag">
          <label class="visually-hidden" for="tag-search">Filter the tag list</label>
          <input type="text" id="tag-search" class="tag-search-box"
                 placeholder="Find a tag..." autocomplete="off">
          <div class="tag-panel-buttons">{tag_bar_html}</div>
        </div>
      </details>
      <span class="result-count" data-result-count aria-live="polite" aria-atomic="true">{esc(initial_count_label)}</span>
    </form>
    <section data-entry-list aria-label="Results">{initial_html}</section>
    <p class="no-results" data-no-results hidden>{esc(empty_message)}</p>
    <nav class="pager" data-pager aria-label="Result pages" hidden></nav>
    <script type="module" src="static/js/filter.js"></script>
    """.strip()


def render_entry_list(kind, entries, search_placeholder, empty_message, default_show=False):
    """Generic filterable list. Each entry dict needs: category and title.
    Optional: note, url, date, and tags (defaults to category).
    Used for Resources, Paper Links, and the Blog index.
    """
    counts = Counter()
    for entry in entries:
        tags = normalize_tags(entry.get("tags"), entry["category"])
        counts.update(tags)
    sorted_tags = sorted(counts, key=lambda tag: (-counts[tag], tag.lower()))
    tag_bar_html = render_tag_bar(sorted_tags, counts, len(entries))

    return render_filterable_list(kind, tag_bar_html, search_placeholder,
                                  empty_message, len(entries), default_show)


def build_index(cv, resources, corpus_revision):
    body = render_entry_list(
        "resource",
        resources,
        "Search title or note...",
        "No resources match your search.",
        default_show=False,
    )
    content = f'<h1 class="visually-hidden">Resources</h1><p>{esc(cv["bio"])}</p>{body}'
    return render_page(
        cv["name"], content, corpus_revision,
        math=True,
        **site_fields(cv, "home"),
    )


def build_about(cv, about, corpus_revision):
    intro_html = render_markdown(about["intro"])
    sections_html = "".join(
        (
            f'<h2 class="section-title" id="{esc(sec["slug"])}">{esc(sec["title"])}</h2>'
            f'{render_markdown(sec["content"])}'
        )
        for sec in about.get("sections", [])
    )
    content = f'<h1 class="page-title">{esc(cv["name"])}</h1>{intro_html}{sections_html}'
    return render_page(
        "About", content, corpus_revision,
        **site_fields(cv, "about"),
    )


def build_paper_links(cv, papers, corpus_revision):
    body = render_entry_list(
        "paper",
        papers,
        "Search paper links...",
        "No paper links match your search.",
        default_show=False,
    )
    content = f'<h1 class="page-title">Paper Links</h1>{body}'
    return render_page(
        "Paper Links", content, corpus_revision,
        math=True,
        **site_fields(cv, "paper_links"),
    )


def build_blog_index(cv, posts, corpus_revision):
    entries = [{
        "category": p["category"],
        "tags": p["tags"],
        "title": p["title"],
        "note": p["summary"],
        "url": f"blog/{p['slug']}.html",
        "date": p["date"],
    } for p in posts]
    body = render_entry_list(
        "blog",
        entries,
        "Search posts...",
        "No posts match your search.",
        default_show=True,
    )
    content = f'<h1 class="page-title">Blog</h1>{body}'
    return render_page(
        "Blog", content, corpus_revision,
        **site_fields(cv, "blog"),
    )


def build_notes(cv, notes, corpus_revision):
    counts = Counter(
        tag
        for entry in notes["entries"]
        for note in entry["notes"]
        for tag in note["tags"]
    )
    total = sum(len(entry["notes"]) for entry in notes["entries"])
    sorted_tags = sorted(counts, key=lambda tag: (-counts[tag], tag.lower()))
    tag_bar_html = render_tag_bar(sorted_tags, counts, total)
    days_html = []
    for entry in notes["entries"]:
        items_html = []
        for note in entry["notes"]:
            tags_html = "".join(
                f'<button type="button" class="tag" data-tag="{esc(tag)}">{esc(tag)}</button>'
                for tag in note["tags"]
            )
            items_html.append(
                f'<article class="note-item" id="{esc(note["record_id"])}">'
                f'<div class="note-body">{note["body_html"]}</div>'
                f'<div class="entry-tags" aria-label="Tags">{tags_html}</div></article>'
            )
        if items_html:
            days_html.append(
                f'<section class="note-day"><h2 class="note-date" id="{esc(entry["date"])}">'
                f'<a href="#{esc(entry["date"])}"><time datetime="{esc(entry["date"])}">'
                f'{esc(entry["display_date"])}</time></a></h2>{"".join(items_html)}</section>'
            )
    filters_html = render_filterable_list(
        "note", tag_bar_html, "Search notes...", "No notes match your search.",
        total, default_show=True, initial_html="".join(days_html),
    )
    intro_html = render_markdown(notes["intro"])
    content = (
        f'<h1 class="page-title">{esc(notes["title"])}</h1>'
        f'<div class="notes-intro">{intro_html}</div>'
        f'{filters_html}'
    )
    return render_page(
        notes["title"], content, corpus_revision,
        math=any(
            contains_math(note["body_html"])
            for entry in notes["entries"]
            for note in entry["notes"]
        ),
        **site_fields(cv, "notes"),
    )


def build_blog_post(cv, post, corpus_revision):
    meta_line = (
        f'<p class="post-meta"><time datetime="{esc(post["date"])}">{esc(post["date"])}</time></p>'
        if post["date"] else ""
    )
    body_html = re.sub(r"</?h1(?=>|\s)", lambda match: match.group(0).replace("h1", "h2"),
                       post["body_html"])
    content = (
        f'<h1 class="page-title">{esc(post["title"])}</h1>{meta_line}'
        f'<div class="post-body">{body_html}</div>'
    )
    return render_page(
        post["title"], content, corpus_revision, root="../",
        math=contains_math(body_html),
        **site_fields(cv, "blog"),
    )


def prepare_output():
    """Recreate the generated site and copy its static assets."""
    if OUT.exists():
        shutil.rmtree(OUT)
    blog_out = OUT / "blog"
    blog_out.mkdir(parents=True)
    shutil.copytree(STATIC, OUT / "static")
    return blog_out


def validate_corpus(corpus):
    schema = json.loads((ROOT / "schema/generated/corpus.schema.json").read_text(encoding="utf-8"))
    errors = sorted(Draft7Validator(schema).iter_errors(corpus), key=lambda error: list(error.path))
    if errors:
        error = errors[0]
        location = ".".join(str(part) for part in error.path)
        raise RuntimeError(f"Invalid generated corpus at {location or '<root>'}: {error.message}")
    ids = [record["id"] for record in corpus["records"]]
    if len(ids) != len(set(ids)):
        duplicate = next(record_id for record_id in ids if ids.count(record_id) > 1)
        raise RuntimeError(f"Duplicate generated corpus id: {duplicate}")


def main():
    cv = load_one("cv")
    cv["bio_html"] = render_markdown(cv["bio"])
    about_source = load_one("about")
    about = {
        **about_source,
        "intro_html": render_markdown(about_source["intro"]),
        "sections": [
            {**section, "slug": re.sub(r"[^a-z0-9]+", "-", section["title"].lower()).strip("-"),
             "content_html": render_markdown(section["content"])}
            for section in about_source.get("sections", [])
        ],
    }
    resources = load_all("resources")
    papers = load_all("paper-links")
    for entry in [*resources, *papers]:
        entry["tags"] = normalize_tags(entry.get("tags"), entry["category"])
    posts = load_blog_posts()
    notes = load_daily_notes()
    corpus = build_published_corpus(cv, about, resources, papers, posts, notes)
    validate_corpus(corpus)

    blog_out = prepare_output()
    (OUT / "corpus.json").write_text(
        json.dumps(corpus, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )
    corpus_revision = corpus["revision"]

    pages = {
        OUT / "index.html": build_index(cv, resources, corpus_revision),
        OUT / "about.html": build_about(cv, about, corpus_revision),
        OUT / "papers.html": build_paper_links(cv, papers, corpus_revision),
        OUT / "notes.html": build_notes(cv, notes, corpus_revision),
        OUT / "blog.html": build_blog_index(cv, posts, corpus_revision),
    }
    pages.update({
        blog_out / f"{post['slug']}.html": build_blog_post(cv, post, corpus_revision)
        for post in posts
    })
    for path, content in pages.items():
        path.write_text(content, encoding="utf-8")

    print(
        f"Built site into {OUT}/ "
        f"({len(resources)} resources, {len(papers)} paper links, "
        f"{len(posts)} blog posts)"
    )


if __name__ == "__main__":
    main()
