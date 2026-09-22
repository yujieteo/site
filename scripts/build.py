#!/usr/bin/env python3
"""Build the static site from YAML data and Markdown blog posts."""

import html
import json
import re
import shutil
from collections import Counter
from pathlib import Path

import yaml

try:
    import markdown as _markdown
except ImportError:  # pragma: no cover
    _markdown = None

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
TEMPLATES = ROOT / "templates"
STATIC = ROOT / "static"
OUT = ROOT / "site"


def render_markdown(text):
    if _markdown is None:
        raise RuntimeError(
            "The 'markdown' package is required for About/Blog content. "
            "Install it with: pip install markdown --break-system-packages"
        )
    return _markdown.markdown(text or "", extensions=["extra", "sane_lists"])


def esc(value):
    """Escape a value for safe interpolation into HTML text content or
    a quoted HTML attribute. Still used for the small amount of HTML
    built directly in Python (page chrome, tag panel buttons, search
    placeholders) -- NOT for entry rows, since those are JSON data
    rendered (and escaped) client-side in JS.
    """
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
    svg: { fontCache: 'global', scale: 1.06 }
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


FILTER_SCRIPT = """
<script>
(function() {{
  const searchBox = document.getElementById('{search_id}');
  const tagBar = document.getElementById('{tagbar_id}');
  const tagSearch = document.getElementById('{tagsearch_id}');
  const filtersMenu = document.getElementById('{menu_id}');
  const filtersToggle = document.getElementById('{toggle_id}');
  const listEl = document.getElementById('{list_id}');
  const noResults = document.getElementById('{noresults_id}');
  const countLabel = document.getElementById('{count_id}');
  const pagerEl = document.getElementById('{pager_id}');
  const DEFAULT_SHOW = {default_show};
  const PAGE_SIZE = 10;
  const DATA = window.__DATA__['{data_key}'].map(function(d) {{
    d.tagsArr = d.tags ? d.tags.split(',').map(function(tag) {{ return tag.trim(); }}).filter(Boolean) : [];
    return d;
  }});

  let activeTag = '__all__';
  let currentPage = 1;

  function escHtml(value) {{
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(character) {{
      return ({{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}})[character];
    }});
  }}

  function rowHtml(entry) {{
    const date = entry.date
      ? '<time class="entry-date" datetime="' + escHtml(entry.date) + '">' + escHtml(entry.date) + '</time>'
      : '';
    const title = entry.url
      ? '<a href="' + escHtml(entry.url) + '">' + escHtml(entry.title) + '</a>'
      : escHtml(entry.title);
    const note = entry.note ? '<p class="entry-abstract">' + escHtml(entry.note) + '</p>' : '';
    const tags = entry.tagsArr.map(function(tag) {{
      return '<button type="button" class="tag" data-tag="' + escHtml(tag) + '">' + escHtml(tag) + '</button>';
    }}).join('');
    return '<article class="entry">' + date
      + '<h2 class="entry-title">' + title + '</h2>' + note
      + '<div class="entry-tags" aria-label="Tags">' + tags + '</div></article>';
  }}

  function matchingEntries() {{
    const query = searchBox.value.trim().toLowerCase();
    return DATA.filter(function(entry) {{
      return (activeTag === '__all__' || entry.tagsArr.includes(activeTag))
        && (query === '' || entry.search.includes(query));
    }});
  }}

  function render() {{
    const showEntries = DEFAULT_SHOW || searchBox.value.trim() !== '' || activeTag !== '__all__';
    const matches = matchingEntries();
    const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
    currentPage = Math.min(currentPage, pageCount);
    const start = (currentPage - 1) * PAGE_SIZE;

    listEl.innerHTML = showEntries ? matches.slice(start, start + PAGE_SIZE).map(rowHtml).join('') : '';
    document.dispatchEvent(new CustomEvent('entries-rendered', {{ detail: {{ target: listEl }} }}));
    noResults.hidden = !(showEntries && matches.length === 0);

    if (!showEntries) countLabel.textContent = 'Search to show entries';
    else if (!matches.length) countLabel.textContent = '0 matches';
    else countLabel.textContent = (start + 1) + '-' + Math.min(start + PAGE_SIZE, matches.length)
      + ' / ' + matches.length + ' matches';

    pagerEl.hidden = !showEntries || pageCount <= 1;
    pagerEl.innerHTML = pagerEl.hidden ? ''
      : '<button type="button" class="pager-btn" data-dir="prev"' + (currentPage <= 1 ? ' disabled' : '') + '>Previous</button>'
        + '<span class="pager-label">Page ' + currentPage + ' / ' + pageCount + '</span>'
        + '<button type="button" class="pager-btn" data-dir="next"' + (currentPage >= pageCount ? ' disabled' : '') + '>Next</button>';
  }}

  function runSearch() {{
    currentPage = 1;
    render();
  }}

  function selectTag(tag) {{
    activeTag = tag;
    tagBar.querySelectorAll('button.tag').forEach(function(button) {{
      button.setAttribute('aria-pressed', button.dataset.tag === tag ? 'true' : 'false');
    }});
    runSearch();
  }}

  function filterTags() {{
    const query = tagSearch.value.trim().toLowerCase();
    tagBar.querySelectorAll('button.tag[data-tag]').forEach(function(button) {{
      if (button.dataset.tag === '__all__') return;
      button.hidden = query ? !button.textContent.toLowerCase().includes(query) : button.classList.contains('tag-extra');
    }});
    const hint = tagBar.querySelector('.tag-more-hint');
    if (hint) hint.hidden = query !== '';
  }}

  searchBox.form.addEventListener('submit', function(event) {{
    event.preventDefault();
    runSearch();
  }});
  tagSearch.addEventListener('input', filterTags);

  document.addEventListener('click', function(event) {{
    if (filtersMenu.open && !filtersMenu.contains(event.target)) filtersMenu.open = false;
  }});
  document.addEventListener('keydown', function(event) {{
    if (event.key === 'Escape' && filtersMenu.open) {{
      filtersMenu.open = false;
      filtersToggle.focus();
    }}
  }});

  tagBar.addEventListener('click', function(event) {{
    const button = event.target.closest('button.tag');
    if (!button) return;
    selectTag(button.dataset.tag);
    filtersMenu.open = false;
    filtersToggle.focus();
  }});
  listEl.addEventListener('click', function(event) {{
    const button = event.target.closest('button.tag[data-tag]');
    if (!button) return;
    selectTag(button.dataset.tag);
    window.scrollTo({{ top: 0 }});
  }});
  pagerEl.addEventListener('click', function(event) {{
    const button = event.target.closest('button.pager-btn');
    if (!button || button.disabled) return;
    currentPage += button.dataset.dir === 'next' ? 1 : -1;
    render();
    listEl.scrollIntoView({{ block: 'start' }});
  }});

  runSearch();
  filterTags();
}})();
</script>
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
    """Return tags as a comma-separated string, falling back when empty."""
    if isinstance(tags, (list, tuple, set)):
        values = [str(tag).strip() for tag in tags]
    else:
        values = [tag.strip() for tag in str(tags or "").split(",")]
    values = [tag for tag in values if tag]
    return ", ".join(values) if values else str(fallback or "General")


def load_blog_posts():
    directory = DATA / "blog"
    if not directory.is_dir():
        return []
    posts = []
    for path in sorted(directory.glob("*.md")):
        if not path.is_file():
            continue
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
            "body_html": render_markdown(body),
        })
    # Newest first.
    posts.sort(key=lambda p: p["date"], reverse=True)
    return posts


def nav_fields(active):
    """Return the visual and semantic state for each navigation link."""
    keys = ["home", "about", "paper_links", "blog"]
    fields = {f"nav_{key}": ("active" if key == active else "") for key in keys}
    fields.update({
        f"aria_{key}": (' aria-current="page"' if key == active else "")
        for key in keys
    })
    return fields


def render_page(title, content, root="", tagline="", name="", math=False, **nav):
    base = (TEMPLATES / "base.html").read_text(encoding="utf-8")
    fields = {
        "title": esc(title),
        "content": content + (MATHJAX_SCRIPT if math else ""),
        "root": root,
        "tagline": esc(tagline), "name": esc(name),
        **nav,
    }
    return base.format_map(fields)


def render_tag_bar(sorted_tags, all_label="all", total=None, show_first=8):
    all_count = f' <span class="tag-count">{total}</span>' if total is not None else ""
    buttons = [
        f'<button class="tag" data-tag="__all__" type="button" '
        f'aria-pressed="true">{esc(all_label)}{all_count}</button>'
    ]
    for i, (tag, label, count) in enumerate(sorted_tags):
        extra_cls = " tag-extra" if i >= show_first else ""
        hidden = " hidden" if i >= show_first else ""
        buttons.append(
            f'<button class="tag{extra_cls}" data-tag="{esc(tag)}" type="button" '
            f'aria-pressed="false"{hidden}>'
            f'{esc(label)} <span class="tag-count">{count}</span></button>'
        )

    remaining = max(0, len(sorted_tags) - show_first)
    hint = (
        f'<p class="tag-more-hint">+{remaining} more &mdash; type above to find one</p>'
        if remaining else ""
    )
    return "".join(buttons) + hint


def render_filterable_list(data, tag_bar_html, id_prefix, search_placeholder,
                            empty_message, total, default_show=False):
    search_id = f"{id_prefix}-search"
    tagbar_id = f"{id_prefix}-tagbar"
    tagsearch_id = f"{id_prefix}-tagsearch"
    list_id = f"{id_prefix}-list"
    noresults_id = f"{id_prefix}-noresults"
    count_id = f"{id_prefix}-count"
    toggle_id = f"{id_prefix}-filters-toggle"
    wrap_id = f"{id_prefix}-filters-wrap"
    menu_id = f"{id_prefix}-filters-menu"
    pager_id = f"{id_prefix}-pager"
    data_key = id_prefix

    script = FILTER_SCRIPT.format(
        search_id=search_id, tagbar_id=tagbar_id,
        tagsearch_id=tagsearch_id, list_id=list_id, noresults_id=noresults_id,
        count_id=count_id, toggle_id=toggle_id, menu_id=menu_id, pager_id=pager_id,
        data_key=data_key,
        default_show="true" if default_show else "false",
    )

    data_json = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")

    initial_count_label = "" if not default_show else f"{total} entries"

    return f"""
    <form class="search-row" id="{wrap_id}">
      <label class="visually-hidden" for="{search_id}">{esc(search_placeholder)}</label>
      <input type="text" id="{search_id}" class="search-box" placeholder="{esc(search_placeholder)}"
             autocomplete="off">
      <button type="submit" class="search-btn">Search</button>
      <details id="{menu_id}" class="filters-menu">
        <summary id="{toggle_id}" class="filters-toggle">
          Filters
        </summary>
        <div id="{tagbar_id}" class="tag-panel" role="group" aria-label="Filter by tag">
          <label class="visually-hidden" for="{tagsearch_id}">Filter the tag list</label>
          <input type="text" id="{tagsearch_id}" class="tag-search-box"
                 placeholder="Find a tag..." autocomplete="off">
          <div class="tag-panel-buttons">{tag_bar_html}</div>
        </div>
      </details>
      <span class="result-count" id="{count_id}" aria-live="polite" aria-atomic="true">{esc(initial_count_label)}</span>
    </form>
    <div id="{list_id}"></div>
    <p class="no-results" id="{noresults_id}" role="status" aria-live="polite" hidden>{esc(empty_message)}</p>
    <nav class="pager" id="{pager_id}" aria-label="Result pages" hidden></nav>
    <script>
      window.__DATA__ = window.__DATA__ || {{}};
      window.__DATA__['{data_key}'] = {data_json};
    </script>
    {script}
    """.strip()


def render_entry_list(entries, id_prefix, search_placeholder, empty_message, default_show=False):
    """Generic filterable list. Each entry dict needs: category and title.
    Optional: note, url, date, and tags (defaults to category).
    Used for Resources, Paper Links, and the Blog index.
    """
    entry_tags = []
    counts = Counter()
    for entry in entries:
        tags = normalize_tags(entry.get("tags"), entry["category"])
        parsed_tags = [tag.strip() for tag in tags.split(",") if tag.strip()]
        entry_tags.append(tags)
        counts.update(parsed_tags)
    sorted_tags = [tag for tag, _ in sorted(
        counts.items(), key=lambda item: (-item[1], item[0].lower())
    )]
    tag_bar_html = render_tag_bar(
        [(tag, tag, counts[tag]) for tag in sorted_tags], total=len(entries)
    )

    data = []
    for e, tags in zip(entries, entry_tags):
        cat = e["category"]
        date = e.get("date", "")
        searchable = " ".join([
            e.get("title", ""), e.get("note", ""), cat, tags, str(date)
        ]).lower()
        data.append({
            "tags": tags,
            "search": searchable,
            "url": e.get("url", ""),
            "title": e.get("title", ""),
            "note": e.get("note", ""),
            "cat": cat,
            "date": date,
        })

    return render_filterable_list(data, tag_bar_html, id_prefix, search_placeholder,
                                  empty_message, len(entries), default_show)


def build_index(cv, resources):
    entries = [{
        "category": e["category"],
        "title": e.get("title", ""),
        "note": e.get("note", ""),
        "url": e["url"],
    } for e in resources]
    body = render_entry_list(
        entries, "resource",
        "Search title or note...",
        "No resources match your search.",
        default_show=False,
    )
    content = f'<h1 class="visually-hidden">Resources</h1><p>{esc(cv.get("bio", ""))}</p>{body}'
    return render_page(
        cv.get("name", "Home"), content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        math=True,
        **nav_fields("home"),
    )


def build_about(cv, about):
    intro_html = render_markdown(about.get("intro", ""))
    sections_html = ""
    for sec in about.get("sections", []):
        sections_html += (
            f'<h2 class="section-title">{esc(sec.get("title", ""))}</h2>'
            f'{render_markdown(sec.get("content", ""))}'
        )
    content = f'<h1 class="page-title">{esc(cv.get("name", ""))}</h1>{intro_html}{sections_html}'
    return render_page(
        "About", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        **nav_fields("about"),
    )


def build_paper_links(cv, papers):
    entries = [{
        "category": paper.get("category", "Paper"),
        "tags": paper.get("tags", paper.get("category", "Paper")),
        "title": paper.get("title", ""),
        "note": paper.get("note", ""),
        "url": paper.get("url", "#"),
    } for paper in papers]
    body = render_entry_list(
        entries, "paper",
        "Search paper links...",
        "No paper links match your search.",
        default_show=False,
    )
    content = f'<h1 class="page-title">Paper Links</h1>{body}'
    return render_page(
        "Paper Links", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        math=True,
        **nav_fields("paper_links"),
    )


def build_blog_index(cv, posts):
    entries = [{
        "category": p["category"],
        "tags": p["tags"],
        "title": p["title"],
        "note": p["summary"],
        "url": f"blog/{p['slug']}.html",
        "date": p["date"],
    } for p in posts]
    body = render_entry_list(
        entries, "blog",
        "Search posts...",
        "No posts match your search.",
        default_show=True,
    )
    content = f'<h1 class="page-title">Blog</h1>{body}'
    return render_page(
        "Blog", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        **nav_fields("blog"),
    )


def build_blog_post(cv, post):
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
        post["title"], content, root="../",
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        math=True,
        **nav_fields("blog"),
    )


def prepare_output():
    """Reset generated HTML and copy static assets into the output tree."""
    OUT.mkdir(exist_ok=True)
    for path in OUT.glob("*.html"):
        path.unlink()

    blog_out = OUT / "blog"
    blog_out.mkdir(exist_ok=True)
    for path in blog_out.glob("*.html"):
        path.unlink()

    static_out = OUT / "static"
    if static_out.exists():
        shutil.rmtree(static_out)
    shutil.copytree(STATIC, static_out)
    return blog_out


def write_page(path, content):
    path.write_text(content, encoding="utf-8")


def main():
    blog_out = prepare_output()

    cv_records = load_all("cv")
    if not cv_records:
        raise RuntimeError("No CV data found in data/cv/")
    cv = cv_records[0]
    about_list = load_all("about")
    about = about_list[0] if about_list else {}
    resources = load_all("resources")
    papers = load_all("paper-links")
    posts = load_blog_posts()

    pages = {
        OUT / "index.html": build_index(cv, resources),
        OUT / "about.html": build_about(cv, about),
        OUT / "papers.html": build_paper_links(cv, papers),
        OUT / "blog.html": build_blog_index(cv, posts),
    }
    pages.update({
        blog_out / f"{post['slug']}.html": build_blog_post(cv, post)
        for post in posts
    })
    for path, content in pages.items():
        write_page(path, content)

    print(
        f"Built site into {OUT}/ "
        f"({len(resources)} resources, {len(papers)} paper links, "
        f"{len(posts)} blog posts)"
    )


if __name__ == "__main__":
    main()
