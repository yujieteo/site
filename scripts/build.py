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
</script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js">
</script>
<style>
  mjx-container { color: inherit; }
  mjx-container[display="true"] { margin: 1em 0 !important; }
</style>
<script>
  document.addEventListener('entries-rendered', function (e) {
    if (!(window.MathJax && window.MathJax.typesetPromise)) return;
    const target = e && e.detail && e.detail.target;
    if (window.MathJax.typesetClear) {
      window.MathJax.typesetClear(target ? [target] : undefined);
    }
    window.MathJax.typesetPromise(target ? [target] : undefined);
  });
  document.addEventListener('DOMContentLoaded', function () {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  });
</script>
"""


SKIP_LINK = """
<a class="skip-link" href="#main-content">Skip to content</a>
"""


FILTER_SCRIPT = """
<script>
(function() {{
  const searchBox = document.getElementById('{search_id}');
  const searchBtn = document.getElementById('{searchbtn_id}');
  const tagBar = document.getElementById('{tagbar_id}');
  const tagSearch = document.getElementById('{tagsearch_id}');
  const filtersMenu = document.getElementById('{menu_id}');
  const filtersToggle = document.getElementById('{toggle_id}');
  const listEl = document.getElementById('{list_id}');
  const noResults = document.getElementById('{noresults_id}');
  const countLabel = document.getElementById('{count_id}');
  const pagerEl = document.getElementById('{pager_id}');
  const DEFAULT_SHOW = {default_show};

  const DATA = window.__DATA__['{data_key}'].map(function(d) {{
    d.tagsArr = d.tags ? d.tags.split(',').map(function(t){{return t.trim();}}).filter(Boolean) : [];
    return d;
  }});
  const total = DATA.length;
  const PAGE_SIZE = 10;

  let activeTag = '__all__';
  let panelOpen = false;
  let currentMatches = [];
  let currentPage = 1;

  function escHtml(s) {{
    return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {{
      return ({{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}})[c];
    }});
  }}

  function rowHtml(d) {{
    const dateHtml = d.date ? '<div class="entry-date">' + escHtml(d.date) + '</div>' : '';
    const titleHtml = d.url
      ? '<a href="' + escHtml(d.url) + '">' + escHtml(d.title) + '</a>'
      : escHtml(d.title);
    return '<div class="entry">'
      + dateHtml
      + '<div class="entry-title">' + titleHtml + '</div>'
      + '<div class="entry-abstract">' + escHtml(d.note) + '</div>'
      + '<div>' + d.tagsArr.map(function(tag) {{
          return '<span class="tag" data-tag="' + escHtml(tag) + '">' + escHtml(tag) + '</span>';
        }}).join(' ') + '</div>'
      + '</div>';
  }}

  function runSearch() {{
    const q = searchBox.value.trim().toLowerCase();
    currentMatches = [];
    for (let i = 0; i < DATA.length; i++) {{
      const d = DATA[i];
      const matchesTag = activeTag === '__all__' || d.tagsArr.includes(activeTag);
      const matchesSearch = q === '' || d.search.includes(q);
      if (matchesTag && matchesSearch) currentMatches.push(d);
    }}
    currentPage = 1;
    renderPage();
  }}

  function renderPage() {{
    const hasEntryFilter = DEFAULT_SHOW || searchBox.value.trim() !== '' || activeTag !== '__all__';
    const matchCount = currentMatches.length;
    const pageCount = Math.max(1, Math.ceil(matchCount / PAGE_SIZE));
    if (currentPage > pageCount) currentPage = pageCount;

    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = currentMatches.slice(start, start + PAGE_SIZE);

    listEl.innerHTML = hasEntryFilter ? pageItems.map(rowHtml).join('') : '';
    document.dispatchEvent(new CustomEvent('entries-rendered', {{ detail: {{ target: listEl }} }}));

    noResults.style.display = (hasEntryFilter && matchCount === 0) ? 'block' : 'none';

    if (!hasEntryFilter) {{
      countLabel.textContent = 'Search to show entries';
    }} else {{
      const shownEnd = Math.min(start + PAGE_SIZE, matchCount);
      countLabel.textContent = matchCount === 0
        ? '0 matches'
        : (start + 1) + '-' + shownEnd + ' / ' + matchCount + ' matches';
    }}

    renderPager(hasEntryFilter, pageCount);
  }}

  function renderPager(hasEntryFilter, pageCount) {{
    if (!hasEntryFilter || pageCount <= 1) {{
      pagerEl.innerHTML = '';
      pagerEl.style.display = 'none';
      return;
    }}
    pagerEl.style.display = 'flex';
    pagerEl.innerHTML =
      '<button type="button" class="pager-btn" data-dir="prev"' + (currentPage <= 1 ? ' disabled' : '') + '>Prev</button>'
      + '<span class="pager-label">Page ' + currentPage + ' / ' + pageCount + '</span>'
      + '<button type="button" class="pager-btn" data-dir="next"' + (currentPage >= pageCount ? ' disabled' : '') + '>Next</button>';
  }}

  pagerEl.addEventListener('click', function(e) {{
    const btn = e.target.closest('button.pager-btn');
    if (!btn || btn.disabled) return;
    currentPage += (btn.dataset.dir === 'next' ? 1 : -1);
    renderPage();
    listEl.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
  }});

  function setActiveTag(tag) {{
    activeTag = tag;
    tagBar.querySelectorAll('button.tag').forEach(function(b) {{
      const isActive = b.dataset.tag === tag;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }});
    runSearch();
  }}

  function filterTagButtons() {{
    if (!tagSearch) return;
    const q = tagSearch.value.trim().toLowerCase();
    tagBar.querySelectorAll('button.tag[data-tag]').forEach(function(b) {{
      if (b.dataset.tag === '__all__') return;
      const label = (b.textContent || '').toLowerCase();
      if (q === '') {{
        b.style.display = b.classList.contains('tag-extra') ? 'none' : '';
      }} else {{
        // Use an explicit display value so a matching .tag-extra button
        // overrides the stylesheet's default display:none rule.
        b.style.display = label.includes(q) ? 'inline-flex' : 'none';
      }}
    }});
    const hint = tagBar.querySelector('.tag-more-hint');
    if (hint) hint.style.display = q === '' ? '' : 'none';
  }}

  function togglePanel(forceOpen) {{
    filtersMenu.open = typeof forceOpen === 'boolean' ? forceOpen : !filtersMenu.open;
    panelOpen = filtersMenu.open;
    filtersToggle.classList.toggle('open', panelOpen);
    filtersToggle.setAttribute('aria-expanded', panelOpen ? 'true' : 'false');
    if (panelOpen) {{
      const focusTarget = tagSearch || tagBar.querySelector('button.tag');
      if (focusTarget) focusTarget.focus();
    }}
  }}

  searchBtn.addEventListener('click', runSearch);
  searchBox.addEventListener('keydown', function(e) {{
    if (e.key === 'Enter') runSearch();
  }});

  if (tagSearch) {{
    tagSearch.addEventListener('input', filterTagButtons);
  }}

  filtersMenu.addEventListener('toggle', function() {{
    panelOpen = filtersMenu.open;
    filtersToggle.classList.toggle('open', panelOpen);
    filtersToggle.setAttribute('aria-expanded', panelOpen ? 'true' : 'false');
  }});

  document.addEventListener('click', function(e) {{
    if (panelOpen && !filtersMenu.contains(e.target)) {{
      togglePanel(false);
    }}
  }});

  document.addEventListener('keydown', function(e) {{
    if (e.key === 'Escape' && panelOpen) {{
      togglePanel(false);
      filtersToggle.focus();
    }}
  }});

  tagBar.addEventListener('click', function(e) {{
    const btn = e.target.closest('button.tag');
    if (!btn) return;
    setActiveTag(btn.dataset.tag);
    togglePanel(false);
    filtersToggle.focus();
  }});

  listEl.addEventListener('click', function(e) {{
    const chip = e.target.closest('.entry .tag[data-tag]');
    if (!chip) return;
    setActiveTag(chip.dataset.tag);
    window.scrollTo({{ top: 0, behavior: 'smooth' }});
  }});

  runSearch();
  filterTagButtons();
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
    """Returns e.g. {'nav_home': 'active', 'nav_about': '', ...}"""
    keys = ["home", "about", "paper_links", "blog"]
    return {f"nav_{k}": ("active" if k == active else "") for k in keys}


def render_page(title, content, root="", tagline="", name="", **nav):
    base = (TEMPLATES / "base.html").read_text(encoding="utf-8")
    full_content = (
        SKIP_LINK
        + f'<div id="main-content" tabindex="-1">{content}</div>'
        + MATHJAX_SCRIPT
    )
    fields = {
        "title": esc(title), "content": full_content, "root": root,
        "tagline": esc(tagline), "name": esc(name),
        **nav,
    }
    return base.format_map(fields)


def render_tag_bar(sorted_tags, all_label="all", total=None, show_first=8):
    all_count = f' <span class="tag-count">{total}</span>' if total is not None else ""
    buttons = [
        f'<button class="tag active" data-tag="__all__" type="button" '
        f'aria-pressed="true">{esc(all_label)}{all_count}</button>'
    ]
    for i, (tag, label, count) in enumerate(sorted_tags):
        extra_cls = " tag-extra" if i >= show_first else ""
        buttons.append(
            f'<button class="tag{extra_cls}" data-tag="{esc(tag)}" type="button" aria-pressed="false">'
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
    searchbtn_id = f"{id_prefix}-searchbtn"
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
        search_id=search_id, searchbtn_id=searchbtn_id, tagbar_id=tagbar_id,
        tagsearch_id=tagsearch_id, list_id=list_id, noresults_id=noresults_id,
        count_id=count_id, toggle_id=toggle_id, menu_id=menu_id, pager_id=pager_id,
        data_key=data_key,
        default_show="true" if default_show else "false",
    )

    data_json = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")

    initial_count_label = " " if not default_show else f"{total} entries"

    return f"""
    <div class="search-row" id="{wrap_id}" style="position:relative;">
      <label class="visually-hidden" for="{search_id}">{esc(search_placeholder)}</label>
      <input type="text" id="{search_id}" class="search-box" placeholder="{esc(search_placeholder)}"
             autocomplete="off">
      <button type="button" id="{searchbtn_id}" class="search-btn">Search</button>
      <details id="{menu_id}" class="filters-menu">
        <summary id="{toggle_id}" class="filters-toggle"
                 aria-haspopup="true" aria-expanded="false" aria-controls="{tagbar_id}">
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
    </div>
    <div id="{list_id}"></div>
    <div class="no-results" id="{noresults_id}" role="status" aria-live="polite" style="display:none;">{esc(empty_message)}</div>
    <div class="pager" id="{pager_id}" role="navigation" aria-label="Result pages" style="display:none;"></div>
    <script>
      window.__DATA__ = window.__DATA__ || {{}};
      window.__DATA__['{data_key}'] = {data_json};
    </script>
    {script}
    """


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
    content = f"<p>{esc(cv.get('bio', ''))}</p>{body}"
    return render_page(
        cv.get("name", "Home"), content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
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
    content = f'<h1>{esc(cv.get("name", ""))}</h1>{intro_html}{sections_html}'
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
    content = f'<h2 class="section-title">Paper Links</h2>{body}'
    return render_page(
        "Paper Links", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
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
    content = f'<h2 class="section-title">Blog</h2>{body}'
    return render_page(
        "Blog", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        **nav_fields("blog"),
    )


def build_blog_post(cv, post):
    meta_line = f'<p class="post-meta">{esc(post["date"])}</p>' if post["date"] else ""
    content = (
        f'<h1>{esc(post["title"])}</h1>{meta_line}'
        f'<div class="post-body">{post["body_html"]}</div>'
    )
    return render_page(
        post["title"], content, root="../",
        name=cv.get("name", ""), tagline=cv.get("title", ""),
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
