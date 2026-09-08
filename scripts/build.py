#!/usr/bin/env python3
"""Render YAML data files into a static site: a home page of resources
and a papers page, both with live search and tag/category filtering.

CHANGE FROM PREVIOUS VERSION: entries are no longer pre-rendered into
HTML strings at build time. Instead each list is exported once as a
compact JSON array embedded in a <script> tag, and FILTER_SCRIPT does
the row rendering (and HTML-escaping) in the browser, building DOM
nodes only for whatever is currently visible (respecting the existing
DISPLAY_CAP). This is what actually shrinks the generated pages -- the
previous version repeated a full `<div class="entry" data-tags="..."
data-search="...">...</div>` block per entry in the raw HTML, which is
where most of the page weight came from.

Tag filtering UI, page structure, base.html, and a11y behavior are
otherwise unchanged: "Filters" button next to the search box, opening
a small anchored dropdown panel with tags sorted most-common-first.

Pages also render LaTeX (via MathJax) so that any $...$ / $$...$$ or
\\(...\\) / \\[...\\] math in bios and notes is typeset in the browser.

REMOVED: the exercises page (and the exercise-record data source) is
no longer built. Only the home (resources) and papers pages are
generated.
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
    placeholders) -- NOT for entry rows anymore, since those are now
    JSON data rendered (and escaped) client-side in JS.
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
  // Re-typeset whenever the filter/search script (re)renders rows,
  // since math now ships as data and is only turned into DOM nodes
  // for whatever's currently visible.
  document.addEventListener('entries-rendered', function () {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
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


# FILTER_SCRIPT now owns row rendering. It reads its dataset from
# window.__DATA__[data_key] (a plain JSON array embedded right before
# this script tag) instead of walking pre-built .entry DOM nodes.
#
# row_kind now only ever takes the value 'link' (the exercise row
# template was removed along with the exercises page); the parameter
# is kept so FILTER_SCRIPT's shape stays generic in case another row
# kind is added later.
FILTER_SCRIPT = """
<script>
(function() {{
  const searchBox = document.getElementById('{search_id}');
  const tagBar = document.getElementById('{tagbar_id}');
  const tagSearch = document.getElementById('{tagsearch_id}');
  const filtersToggle = document.getElementById('{toggle_id}');
  const listEl = document.getElementById('{list_id}');
  const noResults = document.getElementById('{noresults_id}');
  const countLabel = document.getElementById('{count_id}');
  const DATA = window.__DATA__['{data_key}'];
  const ROW_KIND = '{row_kind}';
  const total = DATA.length;
  let activeTag = '__all__';
  let panelOpen = false;

  // Do not render a huge unfiltered list. Once the user actually filters,
  // show at most this many matching entries.
  const DISPLAY_CAP = 400;

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

  function applyFilters() {{
    const q = searchBox.value.trim().toLowerCase();
    const hasEntryFilter = q !== '' || activeTag !== '__all__';

    let matchCount = 0;
    const shown = [];

    for (let i = 0; i < DATA.length; i++) {{
      const d = DATA[i];
      const tags = d.tags.split(',').filter(Boolean);
      const matchesTag = activeTag === '__all__' || tags.includes(activeTag);
      const matchesSearch = q === '' || d.search.includes(q);
      if (matchesTag && matchesSearch) {{
        matchCount++;
        if (shown.length < DISPLAY_CAP) shown.push(d);
      }}
    }}

    listEl.innerHTML = hasEntryFilter ? shown.map(rowHtml).join('') : '';
    document.dispatchEvent(new Event('entries-rendered'));

    noResults.style.display = (hasEntryFilter && matchCount === 0) ? 'block' : 'none';

    if (!hasEntryFilter) {{
      countLabel.textContent = 'Filter to show entries';
    }} else if (matchCount > DISPLAY_CAP) {{
      countLabel.textContent = shown.length + ' / ' + matchCount + ' matches (cap ' + DISPLAY_CAP + ')';
    }} else {{
      countLabel.textContent = shown.length + ' / ' + matchCount + ' matches';
    }}
  }}

  function setActiveTag(tag) {{
    activeTag = tag;
    tagBar.querySelectorAll('button.tag').forEach(function(b) {{
      const isActive = b.dataset.tag === tag;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }});
    applyFilters();
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

  searchBox.addEventListener('input', applyFilters);

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

  applyFilters();
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
    # format_map with a defaultdict(str) instead of .format(): if
    # base.html still has an old placeholder we no longer pass here
    # (e.g. a leftover {nav_exercises} from before the exercises page
    # was removed), it's rendered as an empty string instead of
    # raising KeyError. This is a stopgap -- the real fix is deleting
    # the exercises nav link and {nav_exercises} slot from base.html
    # itself, since right now it'll silently render as a dead/blank
    # nav item rather than being removed.
    fields = defaultdict(str, {
        "title": esc(title), "content": full_content, "root": root,
        "tagline": esc(tagline), "name": esc(name),
        "nav_home": nav_home, "nav_papers": nav_papers,
    })
    return base.format_map(fields)


def render_tag_bar(sorted_tags, all_label="all", total=None, show_first=8):
    """Unchanged from before -- tag panel buttons are still built in
    Python since there are only ever a few dozen of them (one per
    category), so this was never the source of page bloat.
    """
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
    """data: list of plain dicts (JSON-serializable) -- one per entry.
    Every dict must have "tags" (comma-joined string) and "search"
    (pre-lowercased searchable text) keys; the rest of the fields are
    whatever rowHtml() in FILTER_SCRIPT needs.

    Rows are no longer rendered to HTML here -- `data` is embedded as
    JSON and FILTER_SCRIPT builds + escapes row HTML in the browser,
    only for whichever entries are currently visible. This is the
    actual fix for page size: previously every entry contributed a
    full HTML block to every generated page regardless of whether it
    was ever shown.
    """
    search_id = f"{id_prefix}-search"
    tagbar_id = f"{id_prefix}-tagbar"
    tagsearch_id = f"{id_prefix}-tagsearch"
    list_id = f"{id_prefix}-list"
    noresults_id = f"{id_prefix}-noresults"
    count_id = f"{id_prefix}-count"
    toggle_id = f"{id_prefix}-filters-toggle"
    wrap_id = f"{id_prefix}-filters-wrap"
    data_key = id_prefix

    script = FILTER_SCRIPT.format(
        search_id=search_id, tagbar_id=tagbar_id, tagsearch_id=tagsearch_id,
        list_id=list_id, noresults_id=noresults_id, count_id=count_id,
        toggle_id=toggle_id, data_key=data_key, row_kind=row_kind,
    )

    # json.dumps handles all escaping needed for embedding inside a
    # <script> tag; the one extra precaution is neutralizing "</" so a
    # literal "</script>" can never appear inside a JSON string value
    # (e.g. a note that happens to contain that substring) and
    # prematurely close the tag.
    data_json = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")

    return f"""
    <div class="search-row" id="{wrap_id}" style="position:relative;">
      <label class="visually-hidden" for="{search_id}">{esc(search_placeholder)}</label>
      <input type="text" id="{search_id}" class="search-box" placeholder="{esc(search_placeholder)}"
             autocomplete="off">
      <button type="button" id="{toggle_id}" class="filters-toggle"
              aria-haspopup="true" aria-expanded="false" aria-controls="{tagbar_id}">
        Filters
      </button>
      <span class="result-count" id="{count_id}" aria-live="polite" aria-atomic="true">{total} / {total}</span>

      <div id="{tagbar_id}" class="tag-panel" role="group" aria-label="Filter by tag" style="display:none;">
        <label class="visually-hidden" for="{tagsearch_id}">Filter the tag list</label>
        <input type="text" id="{tagsearch_id}" class="tag-search-box"
               placeholder="Find a tag..." autocomplete="off">
        <div class="tag-panel-buttons">{tag_bar_html}</div>
      </div>
    </div>
    <div id="{list_id}"></div>
    <div class="no-results" id="{noresults_id}" role="status" aria-live="polite" style="display:none;">{esc(empty_message)}</div>
    <script>
      window.__DATA__ = window.__DATA__ || {{}};
      window.__DATA__['{data_key}'] = {data_json};
    </script>
    {script}
    """


def render_link_list(entries, id_prefix, search_placeholder, empty_message):
    """Build the filterable list for {title, url, category, note} entries.
    Tags (categories) sorted most-common-first (ties broken alphabetically).

    Fields are no longer HTML-escaped here -- they're plain strings
    going into a JSON array, and get escaped client-side in rowHtml()
    right before they're placed into HTML.
    """
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