#!/usr/bin/env python3
"""Build the static site from YAML data and Markdown blog posts."""

import csv
import html
import json
import os
import re
import shutil
from collections import Counter
from pathlib import Path

import yaml
from jsonschema import Draft7Validator

from notes import load_notes, note_id
from published_corpus import build_published_corpus, note_record_id

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
    schema = json.loads((ROOT / "schema/visualization.schema.json").read_text(encoding="utf-8"))
    validator = Draft7Validator(schema)
    for visualization in visualizations:
        errors = sorted(validator.iter_errors(visualization), key=lambda error: list(error.path))
        if errors:
            error = errors[0]
            location = ".".join(str(part) for part in error.path)
            raise RuntimeError(
                f"Invalid visualization {visualization.get('slug', '<unknown>')} "
                f"at {location or '<root>'}: {error.message}"
            )
    slugs = [visualization["slug"] for visualization in visualizations]
    if len(slugs) != len(set(slugs)):
        duplicate = next(slug for slug in slugs if slugs.count(slug) > 1)
        raise RuntimeError(f"Duplicate visualization slug: {duplicate}")
    return visualizations


def visualization_source(visuals_repo, relative_path):
    repo = visuals_repo.resolve()
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
    document, _ = load_notes(DATA / "notes.md", DATA / "note-tags.json")
    meta = yaml.safe_load(document["frontmatter"]) or {}
    entries = []
    for entry in document["entries"]:
        notes = []
        for note in entry["notes"]:
            body_html = render_markdown(note["content"])
            plain_text = html.unescape(re.sub(r"<[^>]+>", " ", body_html))
            notes.append({
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
    }


def site_fields(cv, active):
    """Return shared site identity and navigation state."""
    keys = ["home", "about", "paper_links", "notes", "podcast", "blog", "visuals"]
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


def load_podcast_episodes():
    """Load and validate podcast episode metadata, newest first."""
    directory = DATA / "podcasts"
    if not directory.is_dir():
        return []
    schema = json.loads((ROOT / "schema/podcasts.schema.json").read_text(encoding="utf-8"))
    validator = Draft7Validator(schema)
    episodes = []
    for path in sorted(directory.glob("*.yaml")):
        episode = load_yaml(path)
        errors = sorted(validator.iter_errors(episode), key=lambda error: list(error.path))
        if errors:
            error = errors[0]
            location = ".".join(str(part) for part in error.path)
            raise RuntimeError(
                f"Invalid podcast episode {path.stem} at {location or '<root>'}: {error.message}"
            )
        if episode["id"] != path.stem:
            raise RuntimeError(f"Podcast episode {path.name} declares id {episode['id']}")
        if episode["audio"] != f"audio/{episode['id']}.mp3":
            raise RuntimeError(
                f"Podcast episode {episode['id']} must reference audio/{episode['id']}.mp3"
            )
        audio_path = directory / episode["audio"]
        if not audio_path.is_file():
            raise RuntimeError(
                f"Podcast episode {episode['id']} is missing {audio_path.relative_to(ROOT)}"
            )
        episodes.append(episode)
    episodes.sort(key=lambda episode: episode["date"], reverse=True)
    ids = [episode["id"] for episode in episodes]
    if len(ids) != len(set(ids)):
        duplicate = next(episode_id for episode_id in ids if ids.count(episode_id) > 1)
        raise RuntimeError(f"Duplicate podcast episode id: {duplicate}")
    return episodes


def format_duration(seconds):
    total = int(round(float(seconds)))
    hours, remainder = divmod(total, 3600)
    minutes = remainder // 60
    if hours:
        return f"{hours} hr {minutes} min"
    if minutes:
        return f"{minutes} min"
    return f"{total} sec"


def podcast_player(episode, prefix=""):
    src = f"{prefix}{episode['audio']}"
    return (
        f'<audio class="podcast-player" controls preload="metadata" src="{esc(src)}">'
        f'Your browser does not support the audio element. '
        f'<a href="{esc(src)}">Download the episode</a>.'
        f'</audio>'
    )


def build_podcast_index(cv, episodes, corpus_revision):
    if episodes:
        latest = episodes[0]
        featured = (
            '<section class="podcast-featured">'
            '<p class="podcast-kicker">Latest episode</p>'
            f'<h2 class="podcast-title">{esc(latest["title"])}</h2>'
            f'<p class="podcast-meta"><time datetime="{esc(latest["date"])}">'
            f'{esc(latest["date"])}</time> &middot; {esc(format_duration(latest["duration_seconds"]))}</p>'
            f'{podcast_player(latest)}'
            f'<p class="podcast-summary">{esc(latest["summary"])}</p>'
            f'<p><a href="{esc(latest["id"])}.html">Episode notes</a></p>'
            '</section>'
        )
        items = "".join(
            f'<li class="podcast-item"><time datetime="{esc(episode["date"])}">'
            f'{esc(episode["date"])}</time>'
            f'<a href="{esc(episode["id"])}.html">{esc(episode["title"])}</a>'
            f'<span class="podcast-duration">'
            f'{esc(format_duration(episode["duration_seconds"]))}</span></li>'
            for episode in episodes
        )
        body = (
            featured
            + '<h2 class="section-title">All episodes</h2>'
            + f'<ul class="podcast-list">{items}</ul>'
        )
    else:
        body = (
            '<p class="podcast-empty">No episodes yet. Episodes are generated from the '
            'daily notes with the podcast skill and published here.</p>'
        )
    content = f'<h1 class="page-title">Podcast</h1>{body}'
    return render_page(
        "Podcast", content, corpus_revision, root="../",
        **site_fields(cv, "podcast"),
    )


def build_podcast_episode(cv, episode, note_dates, corpus_revision):
    source_dates = sorted(
        {note_dates[note_id] for note_id in episode["notes"] if note_id in note_dates},
        reverse=True,
    )
    sources_html = ""
    if source_dates:
        links = " ".join(
            f'<a href="../notes.html#{esc(date)}">{esc(date)}</a>'
            for date in source_dates
        )
        sources_html = f'<p class="podcast-sources">Condensed from notes dated {links}.</p>'
    tags_html = "".join(
        f'<span class="tag podcast-tag">{esc(tag)}</span>'
        for tag in episode["focus_tags"]
    )
    content = (
        f'<h1 class="page-title">{esc(episode["title"])}</h1>'
        f'<p class="post-meta"><time datetime="{esc(episode["date"])}">'
        f'{esc(episode["date"])}</time> &middot; '
        f'{esc(format_duration(episode["duration_seconds"]))} &middot; '
        f'{len(episode["notes"])} notes</p>'
        f'{podcast_player(episode)}'
        f'<p class="podcast-summary">{esc(episode["summary"])}</p>'
        f'<div class="entry-tags">{tags_html}</div>'
        f'{sources_html}'
        f'<p class="podcast-back"><a href="index.html">&larr; All episodes</a></p>'
    )
    return render_page(
        episode["title"], content, corpus_revision, root="../",
        **site_fields(cv, "podcast"),
    )


def publish_podcast_audio(episodes):
    if not episodes:
        return
    audio_out = OUT / "podcast" / "audio"
    audio_out.mkdir(parents=True, exist_ok=True)
    for episode in episodes:
        shutil.copyfile(
            DATA / "podcasts" / episode["audio"],
            audio_out / f"{episode['id']}.mp3",
        )


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
            record_id = note_record_id(entry["date"], note["content"])
            tags_html = "".join(
                f'<button type="button" class="tag" data-tag="{esc(tag)}">{esc(tag)}</button>'
                for tag in note["tags"]
            )
            items_html.append(
                f'<article class="note-item" id="{esc(record_id)}">'
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


def build_visuals_index(cv, visualizations, corpus_revision, root=""):
    visuals_path = "" if root else "visuals/"
    entries = "".join(
        f'<article class="entry"><h2 class="entry-title">'
        f'<a href="{visuals_path}{esc(visualization["slug"])}/index.html">'
        f'{esc(visualization["title"])}</a>'
        f'</h2><p class="entry-abstract">{esc(visualization["summary"])}</p>'
        f'<p class="entry-date">Fetched {esc(visualization["fetched"])}</p></article>'
        for visualization in visualizations
    )
    content = f'<h1 class="page-title">Visuals</h1>{entries}'
    return render_page(
        "Visuals", content, corpus_revision, root=root,
        **site_fields(cv, "visuals"),
    )


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
    blog_out = OUT / "blog"
    blog_out.mkdir(parents=True)
    (OUT / "podcast").mkdir()
    shutil.copytree(STATIC, OUT / "static")
    shutil.copy2(ROOT / "llms.txt", OUT / "llms.txt")
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
    note_dates = {
        note_id(entry["date"], note["content"]): entry["date"]
        for entry in notes["entries"]
        for note in entry["notes"]
    }
    visualizations = load_visualizations()
    podcasts = load_podcast_episodes()
    visuals_repo = resolve_visuals_repo()
    for visualization in visualizations:
        visualization_source(visuals_repo, visualization["html_path"])
        visualization_source(visuals_repo, visualization["data_path"])
    corpus = build_published_corpus(
        cv, about, resources, papers, posts, notes, visualizations, podcasts
    )
    validate_corpus(corpus)

    blog_out = prepare_output()
    publish_visualization_assets(visualizations, visuals_repo)
    decks = publish_decks()
    publish_podcast_audio(podcasts)
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
        OUT / "podcast" / "index.html": build_podcast_index(cv, podcasts, corpus_revision),
        OUT / "visuals.html": build_visuals_index(cv, visualizations, corpus_revision),
        OUT / "visuals" / "index.html": build_visuals_index(
            cv, visualizations, corpus_revision, root="../"
        ),
    }
    pages.update({
        blog_out / f"{post['slug']}.html": build_blog_post(cv, post, corpus_revision)
        for post in posts
    })
    pages.update({
        OUT / "podcast" / f"{episode['id']}.html": build_podcast_episode(
            cv, episode, note_dates, corpus_revision
        )
        for episode in podcasts
    })
    for path, content in pages.items():
        path.write_text(content, encoding="utf-8")
    (OUT / "visuals.md").write_text(
        build_visuals_markdown(visualizations), encoding="utf-8"
    )

    print(
        f"Built site into {OUT}/ "
        f"({len(resources)} resources, {len(papers)} paper links, "
        f"{len(posts)} blog posts, {len(visualizations)} visualizations, "
        f"{len(podcasts)} podcast episodes, {len(decks)} decks)"
    )


if __name__ == "__main__":
    main()
