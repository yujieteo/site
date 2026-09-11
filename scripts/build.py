#!/usr/bin/env python3
"""Render YAML data files into a static site: a home page of resources
and a papers page, both with live search and tag/category filtering.

BUGFIX (this version): render_filterable_list()'s returned HTML was
missing the <button id="...-searchbtn"> and <div id="...-pager">
elements entirely, even though FILTER_SCRIPT looks both up via
getElementById() and immediately calls .addEventListener() on them.
With those elements absent, both lookups returned null, and calling
.addEventListener() on null threw -- which killed the whole IIFE
before any listeners (search, tag clicks, filters toggle, everything)
got attached. That's why nothing was showing up or working. Both
elements are now actually emitted in render_filterable_list()'s HTML.

PERF FIX (previous version): search no longer runs on every keystroke.
Typing just edits the text box; nothing is scanned or rendered until
the user presses the Search button (or hits Enter). Results are also
now paginated at 10 entries per page instead of rendering everything
that matches at once. Still a fully static site -- there's no server,
no database, no network request involved; "search" here just means
"run the filter over the JSON already sitting in the page and render
page 1 of the matches."

Kept from the previous perf pass:
  - tags are split into a `tagsArr` array once when DATA loads,
    instead of re-splitting the same comma string on every filter run.
  - MathJax.typesetPromise() is scoped to just the list element that
    changed (via the event's `detail.target`), not the whole document.

Everything else (YAML at build time -> one JSON blob embedded per
page -> client renders only what's visible, tag panel UI, a11y
behavior, base.html) is unchanged -- that part of the architecture was
already the right shape and isn't the source of the lag.
"""

import html
import json
import os
from collections import Counter, defaultdict

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
TEMPLATES = os.path.join(ROOT, "templates")
OUT = os.path.join(ROOT, "site")


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
  const filtersToggle = document.getElementById('{toggle_id}');
  const listEl = document.getElementById('{list_id}');
  const noResults = document.getElementById('{noresults_id}');
  const countLabel = document.getElementById('{count_id}');
  const pagerEl = document.getElementById('{pager_id}');
  const ROW_KIND = '{row_kind}';

  const DATA = window.__DATA__['{data_key}'].map(function(d) {{
    d.tagsArr = d.tags ? d.tags.split(',').filter(Boolean) : [];
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
    return '<div class="entry">'
      + '<div class="entry-title"><a href="' + escHtml(d.url) + '">' + escHtml(d.title) + '</a></div>'
      + '<div class="entry-abstract">' + escHtml(d.note) + '</div>'
      + '<div><span class="tag" data-tag="' + escHtml(d.cat) + '">' + escHtml(d.cat) + '</span></div>'
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
    const hasEntryFilter = searchBox.value.trim() !== '' || activeTag !== '__all__';
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
        b.style.display = label.includes(q) ? '' : 'none';
      }}
    }});
    const hint = tagBar.querySelector('.tag-more-hint');
    if (hint) hint.style.display = q === '' ? '' : 'none';
  }}

  function togglePanel(forceOpen) {{
    panelOpen = typeof forceOpen === 'boolean' ? forceOpen : !panelOpen;
    tagBar.style.display = panelOpen ? 'block' : 'none';
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

  filtersToggle.addEventListener('click', function(e) {{
    e.stopPropagation();
    togglePanel();
  }});

  document.addEventListener('click', function(e) {{
    if (panelOpen && !tagBar.contains(e.target) && e.target !== filtersToggle) {{
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
    with open(path) as f:
        return yaml.safe_load(f)


def load_all(subdir):
    dirpath = os.path.join(DATA, subdir)
    if not os.path.isdir(dirpath):
        return []
    items = []
    for fname in sorted(os.listdir(dirpath)):
        if fname.endswith((".yaml", ".yml")):
            data = load_yaml(os.path.join(dirpath, fname))
            if isinstance(data, list):
                items.extend(data)
            else:
                items.append(data)
    return items


def render_page(title, content, root="", tagline="", name="", nav_home="", nav_papers=""):
    with open(os.path.join(TEMPLATES, "base.html")) as f:
        base = f.read()
    full_content = (
        SKIP_LINK
        + f'<div id="main-content" tabindex="-1">{content}</div>'
        + MATHJAX_SCRIPT
    )
    fields = defaultdict(str, {
        "title": esc(title), "content": full_content, "root": root,
        "tagline": esc(tagline), "name": esc(name),
        "nav_home": nav_home, "nav_papers": nav_papers,
    })
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
                            empty_message, total, row_kind):
    search_id = f"{id_prefix}-search"
    searchbtn_id = f"{id_prefix}-searchbtn"
    tagbar_id = f"{id_prefix}-tagbar"
    tagsearch_id = f"{id_prefix}-tagsearch"
    list_id = f"{id_prefix}-list"
    noresults_id = f"{id_prefix}-noresults"
    count_id = f"{id_prefix}-count"
    toggle_id = f"{id_prefix}-filters-toggle"
    wrap_id = f"{id_prefix}-filters-wrap"
    pager_id = f"{id_prefix}-pager"
    data_key = id_prefix

    script = FILTER_SCRIPT.format(
        search_id=search_id, searchbtn_id=searchbtn_id, tagbar_id=tagbar_id,
        tagsearch_id=tagsearch_id, list_id=list_id, noresults_id=noresults_id,
        count_id=count_id, toggle_id=toggle_id, pager_id=pager_id,
        data_key=data_key, row_kind=row_kind,
    )

    data_json = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")

    # FIX: the search button (id={searchbtn_id}) and the pager div
    # (id={pager_id}) are now actually present here -- previously
    # FILTER_SCRIPT referenced both ids via getElementById() but
    # neither element existed in this returned HTML, so both lookups
    # were null and the .addEventListener() calls on them threw,
    # aborting the whole script before any handlers were attached.
    return f"""
    <div class="search-row" id="{wrap_id}" style="position:relative;">
      <label class="visually-hidden" for="{search_id}">{esc(search_placeholder)}</label>
      <input type="text" id="{search_id}" class="search-box" placeholder="{esc(search_placeholder)}"
             autocomplete="off">
      <button type="button" id="{searchbtn_id}" class="search-btn">Search</button>
      <button type="button" id="{toggle_id}" class="filters-toggle"
              aria-haspopup="true" aria-expanded="false" aria-controls="{tagbar_id}">
        Filters
      </button>
      <span class="result-count" id="{count_id}" aria-live="polite" aria-atomic="true">Search to show entries</span>

      <div id="{tagbar_id}" class="tag-panel" role="group" aria-label="Filter by tag" style="display:none;">
        <label class="visually-hidden" for="{tagsearch_id}">Filter the tag list</label>
        <input type="text" id="{tagsearch_id}" class="tag-search-box"
               placeholder="Find a tag..." autocomplete="off">
        <div class="tag-panel-buttons">{tag_bar_html}</div>
      </div>
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


def render_link_list(entries, id_prefix, search_placeholder, empty_message):
    counts = Counter(e["category"] for e in entries)
    sorted_cats = [c for c, _ in sorted(counts.items(), key=lambda kv: (-kv[1], kv[0].lower()))]
    tag_bar_html = render_tag_bar(
        [(c, c, counts[c]) for c in sorted_cats], total=len(entries)
    )

    data = []
    for e in entries:
        cat = e["category"]
        searchable = " ".join([e.get("title", ""), e.get("note", ""), cat]).lower()
        data.append({
            "tags": cat,
            "search": searchable,
            "url": e["url"],
            "title": e.get("title", ""),
            "note": e.get("note", ""),
            "cat": cat,
        })

    return render_filterable_list(data, tag_bar_html, id_prefix, search_placeholder,
                                   empty_message, len(entries), row_kind="link")


def build_index(cv, resources):
    body = render_link_list(
        resources, "resource",
        "Search title or note...",
        "No resources match your search.",
    )
    content = f"<p>{esc(cv.get('bio', ''))}</p>{body}"
    return render_page(
        cv.get("name", "Home"), content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        nav_home="active", nav_papers="",
    )


def build_papers(cv, papers):
    body = render_link_list(
        papers, "paper",
        "Search title or note...",
        "No papers match your search.",
    )
    content = f'<h2 class="section-title">Papers</h2>{body}'
    return render_page(
        "Papers", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        nav_home="", nav_papers="active",
    )


def main():
    os.makedirs(OUT, exist_ok=True)
    os.system(f"cp -r {os.path.join(ROOT, 'static')} {OUT}/")

    cv = load_all("cv")[0]
    resources = load_all("resources")
    papers = load_all("paper-links")

    with open(os.path.join(OUT, "index.html"), "w") as f:
        f.write(build_index(cv, resources))
    with open(os.path.join(OUT, "papers.html"), "w") as f:
        f.write(build_papers(cv, papers))

    print(
        f"Built site into {OUT}/ ({len(resources)} resources, {len(papers)} papers)"
    )


if __name__ == "__main__":
    main()