#!/usr/bin/env python3
"""Render YAML data files into a static site: a home page of resources,
a papers page, and an exercises page, all with live search and
tag/category filtering.

Tag filtering UI: tags are hidden behind a single "Filters" button
(next to the search box), matching the theoremsearch.com pattern of a
compact "Filters | Search" bar rather than a wall of always-visible tag
buttons. Clicking "Filters" opens a small anchored dropdown panel with
tags sorted most-common-first. The panel is self-contained (fixed
width, wraps, scrolls) so it can't be broken by unrelated CSS elsewhere
on the page.

Pages also render LaTeX (via MathJax) so that any $...$ / $$...$$ or
\\(...\\) / \\[...\\] math in bios, notes, exercise text, and hints is
typeset in the browser.
"""

import os
import re
from collections import Counter
from urllib.parse import urlparse

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
TEMPLATES = os.path.join(ROOT, "templates")
OUT = os.path.join(ROOT, "site")


# MathJax v3 configuration + loader. Injected on every page (see
# render_page below) so LaTeX in bios / notes / exercise text / hints
# gets typeset automatically, regardless of where in the DOM it ends
# up. MathJax scans and typesets the whole document once it loads, so
# it doesn't matter that this script tag lives at the end of the body
# rather than in <head>.
MATHJAX_SCRIPT = r"""
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true
    },
    options: {
      // Don't try to typeset inside things like search boxes / inputs.
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'input']
    },
    // A touch larger than MathJax's default, plus 'global' font caching:
    // slightly bigger, evenly-spaced glyphs read more easily than the
    // default size, especially next to the site's own body text.
    svg: { fontCache: 'global', scale: 1.06 }
  };
</script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js">
</script>
<style>
  /* MathJax renders in solid black by default, which is unreadable
     against the dark-mode background below -- make it follow the
     page's text color in both themes instead of hardcoding one. Extra
     vertical margin around display math gives it breathing room from
     surrounding prose, which is easier to parse than text butted
     right up against an equation. */
  mjx-container { color: inherit; }
  mjx-container[display="true"] { margin: 1em 0 !important; }
</style>
<script>
  // Re-typeset after the filter/search script mutates the DOM (e.g.
  // when entries are shown/hidden or tags are clicked), in case any
  // math ships inside content that gets toggled later.
  document.addEventListener('DOMContentLoaded', function () {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  });
</script>
"""


# A visually-hidden "skip to content" link, injected at the very start
# of every page (see render_page). This is navigation, not a user
# preference, so there's nothing to toggle: the readable typeface,
# dark/light mode, and math styling are all fixed sensible defaults set
# in style.css / MATHJAX_SCRIPT below, following the system light/dark
# setting automatically via prefers-color-scheme.
SKIP_LINK = """
<a class="skip-link" href="#main-content">Skip to content</a>
"""


FILTER_SCRIPT = """
<script>
(function() {{
  const searchBox = document.getElementById('{search_id}');
  const tagBar = document.getElementById('{tagbar_id}');
  const tagSearch = document.getElementById('{tagsearch_id}');
  const filtersToggle = document.getElementById('{toggle_id}');
  const entries = Array.from(document.querySelectorAll('#{list_id} .entry[data-tags]'));
  const noResults = document.getElementById('{noresults_id}');
  const countLabel = document.getElementById('{count_id}');
  const total = entries.length;
  let activeTag = '__all__';
  let panelOpen = false;

  function applyFilters() {{
    const q = searchBox.value.trim().toLowerCase();
    let visibleCount = 0;
    entries.forEach(function(entry) {{
      const tags = entry.dataset.tags.split(',').filter(Boolean);
      const matchesTag = activeTag === '__all__' || tags.includes(activeTag);
      const matchesSearch = q === '' || entry.dataset.search.includes(q);
      const show = matchesTag && matchesSearch;
      entry.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    }});
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    countLabel.textContent = visibleCount + ' / ' + total;
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

  // Filters the *list of tag buttons* inside the panel by label text --
  // this is what makes a large tag set easy to find your way around,
  // separate from the main search box which filters entries. With no
  // query, only the default top tags (not marked tag-extra) show, plus
  // the "+N more" hint; typing searches across every tag, including the
  // ones hidden by default.
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
    // NOTE: this used to be 'flex'. With no flex-direction set, that
    // made the tag-search box and the button grid lay out
    // side-by-side (flex's default row axis) instead of stacked,
    // which is what was squeezing the whole panel into a sliver.
    // 'block' lets each child (.tag-search-box, .tag-panel-buttons)
    // stack vertically and use the panel's full width, per their own
    // CSS rules in style.css.
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

  // Close the dropdown when clicking anywhere outside it.
  document.addEventListener('click', function(e) {{
    if (panelOpen && !tagBar.contains(e.target) && e.target !== filtersToggle) {{
      togglePanel(false);
    }}
  }});

  // Close on Escape and return focus to the toggle button, and let
  // keyboard users close the panel without a mouse.
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

  document.getElementById('{list_id}').addEventListener('click', function(e) {{
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


def render_page(title, content, root="", tagline="", name="", nav_home="", nav_papers="", nav_exercises=""):
    with open(os.path.join(TEMPLATES, "base.html")) as f:
        base = f.read()
    # Append the MathJax loader to the page content so every generated
    # page renders LaTeX, without requiring changes to base.html. Prepend
    # the skip-link/a11y toolbar and wrap the real content in a
    # #main-content landmark so the skip link has somewhere to jump to
    # and screen-reader users can navigate straight past the nav.
    full_content = (
        SKIP_LINK
        + f'<div id="main-content" tabindex="-1">{content}</div>'
        + MATHJAX_SCRIPT
    )
    return base.format(
        title=title, content=full_content, root=root, tagline=tagline, name=name,
        nav_home=nav_home, nav_papers=nav_papers, nav_exercises=nav_exercises,
    )


def render_tag_bar(sorted_tags, all_label="all", total=None, show_first=8):
    """sorted_tags: list of (tag_value, label, count) already sorted
    most-common-first.

    With a large tag set, showing every tag button at once is what was
    making the panel feel oversized -- height was already capped/
    scrollable, but scrolling past dozens of buttons to find one isn't
    actually faster than typing. So only the `show_first` most-used tags
    render as visible by default; the rest get the `tag-extra` class
    (hidden via CSS) and are revealed by the in-panel tag search instead
    of by scrolling. A short hint line says how many more exist.

    Each button carries aria-pressed so its selected state is announced
    to screen readers (the "active" CSS class alone isn't exposed to
    assistive tech), and a tabular-nums count badge so people can see at
    a glance which tags are worth clicking.
    """
    all_count = f' <span class="tag-count">{total}</span>' if total is not None else ""
    buttons = [
        f'<button class="tag active" data-tag="__all__" type="button" '
        f'aria-pressed="true">{all_label}{all_count}</button>'
    ]
    for i, (tag, label, count) in enumerate(sorted_tags):
        extra_cls = " tag-extra" if i >= show_first else ""
        buttons.append(
            f'<button class="tag{extra_cls}" data-tag="{tag}" type="button" aria-pressed="false">'
            f'{label} <span class="tag-count">{count}</span></button>'
        )

    remaining = max(0, len(sorted_tags) - show_first)
    hint = (
        f'<p class="tag-more-hint">+{remaining} more &mdash; type above to find one</p>'
        if remaining else ""
    )
    return "".join(buttons) + hint


def render_filterable_list(rows_html, tag_bar_html, id_prefix, search_placeholder,
                            empty_message, total):
    search_id = f"{id_prefix}-search"
    tagbar_id = f"{id_prefix}-tagbar"
    tagsearch_id = f"{id_prefix}-tagsearch"
    list_id = f"{id_prefix}-list"
    noresults_id = f"{id_prefix}-noresults"
    count_id = f"{id_prefix}-count"
    toggle_id = f"{id_prefix}-filters-toggle"
    wrap_id = f"{id_prefix}-filters-wrap"

    script = FILTER_SCRIPT.format(
        search_id=search_id, tagbar_id=tagbar_id, tagsearch_id=tagsearch_id,
        list_id=list_id, noresults_id=noresults_id, count_id=count_id,
        toggle_id=toggle_id,
    )

    # The panel's positioning/sizing is written inline (rather than relying
    # on a `.tag-filter-bar` rule in static/style.css) so it can't inherit
    # a no-wrap / overflow-x-auto rule from elsewhere and run off infinitely
    # to the right. It behaves as a fixed-width, wrapping, scrollable
    # dropdown anchored under the search row.
    #
    # Accessibility notes:
    # - The search box has a visually-hidden <label> instead of relying on
    #   placeholder text alone (placeholders disappear on input and aren't
    #   a reliable accessible name in all screen readers).
    # - The "Filters" toggle is a real <button> with aria-expanded/
    #   aria-controls/aria-haspopup so assistive tech announces whether the
    #   tag panel is open and what it controls.
    # - The tag panel itself starts with its own quick-filter text box
    #   (tagsearch) -- with many tags, scanning/scrolling a long list is
    #   the actual usability problem, so letting people type "geo" to
    #   narrow "Geometry" / "Algebraic Geometry" etc. is the fix.
    # - The result count is aria-live="polite" so screen-reader users hear
    #   the updated count without having to re-find it after every keystroke.
    return f"""
    <div class="search-row" id="{wrap_id}" style="position:relative;">
      <label class="visually-hidden" for="{search_id}">{search_placeholder}</label>
      <input type="text" id="{search_id}" class="search-box" placeholder="{search_placeholder}"
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
    <div id="{list_id}">{rows_html}</div>
    <div class="no-results" id="{noresults_id}" role="status" aria-live="polite">{empty_message}</div>
    {script}
    """


def render_link_list(entries, id_prefix, search_placeholder, empty_message):
    """Build the filterable list for {title, url, category, note} entries.
    Tags (categories) sorted most-common-first (ties broken alphabetically)."""
    counts = Counter(e["category"] for e in entries)
    sorted_cats = [c for c, _ in sorted(counts.items(), key=lambda kv: (-kv[1], kv[0].lower()))]
    tag_bar_html = render_tag_bar(
        [(c, c, counts[c]) for c in sorted_cats], total=len(entries)
    )

    rows = ""
    for e in entries:
        cat = e["category"]
        searchable = " ".join([e.get("title", ""), e.get("note", ""), cat]).lower()
        rows += f"""
        <div class="entry" data-tags="{cat}" data-search="{searchable}">
          <div class="entry-title"><a href="{e['url']}">{e['title']}</a></div>
          <div class="entry-abstract">{e.get('note', '')}</div>
          <div><span class="tag" data-tag="{cat}">{cat}</span></div>
        </div>
        """

    return render_filterable_list(rows, tag_bar_html, id_prefix, search_placeholder,
                                   empty_message, len(entries))


def render_exercise_list(records):
    """Build the filterable list for exercise records loaded from
    data/exercises. Filter tags = resource slugs (title as label);
    each exercise is its own entry so search operates at exercise
    granularity, but filtering happens at resource granularity.
    Resources sorted most-common-first by exercise count."""

    def slug_for(record):
        parsed = urlparse(record["url"])
        s = re.sub(r"[^a-zA-Z0-9]+", "-", (parsed.netloc + parsed.path)).strip("-").lower()
        return s[:60] or "resource"

    tag_defs = {}  # slug -> label
    rows = ""
    total = 0
    resource_counts = Counter()

    for record in records:
        slug = slug_for(record)
        label = record.get("title") or record["url"]
        tag_defs[slug] = label
        resource_counts[slug] += len(record.get("exercises", []))

        for ex in record.get("exercises", []):
            total += 1
            locator = ex.get("locator")
            badge = ""
            if locator:
                num = locator.get("value", "")
                badge = f'<span class="tag locator-badge">{locator["kind"].capitalize()} {num}</span>'

            hint_html = ""
            if ex.get("hint"):
                hint_html = f"""<details class="hint">
                    <summary>Hint</summary>
                    <div>{ex['hint']}</div>
                </details>"""

            search_text = ex.get("search_text") or (ex.get("text", "") + " " + (ex.get("hint") or "")).lower()
            search_text += " " + label.lower()

            rows += f"""
            <div class="entry" data-tags="{slug}" data-search="{search_text}">
              <div class="entry-title">
                {badge}
                <span class="tag" data-tag="{slug}">{label}</span>
              </div>
              <div class="entry-abstract">{ex.get('text', '')}</div>
              {hint_html}
              <div class="entry-source"><a href="{record['url']}">{record['url']}</a></div>
            </div>
            """

    sorted_slugs = [
        s for s, _ in sorted(resource_counts.items(), key=lambda kv: (-kv[1], tag_defs[kv[0]].lower()))
    ]
    tag_bar_html = render_tag_bar(
        [(s, tag_defs[s], resource_counts[s]) for s in sorted_slugs],
        all_label="all resources", total=total,
    )

    return render_filterable_list(
        rows, tag_bar_html, "exercise",
        "Search exercises, hints, or resource titles...",
        "No exercises match your search.",
        total,
    )


def build_index(cv, resources):
    body = render_link_list(
        resources, "resource",
        "Search title or note...",
        "No resources match your search.",
    )
    content = f"<p>{cv.get('bio', '')}</p>{body}"
    return render_page(
        cv.get("name", "Home"), content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        nav_home="active", nav_papers="", nav_exercises="",
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
        nav_home="", nav_papers="active", nav_exercises="",
    )


def build_exercises(cv, exercise_records):
    total_exercises = sum(len(r.get("exercises", [])) for r in exercise_records)
    body = render_exercise_list(exercise_records)
    content = (
        f'<h2 class="section-title">Exercises</h2>'
        f'<p>{len(exercise_records)} resources, {total_exercises} exercises, '
        f'extracted from personal notes.</p>{body}'
    )
    return render_page(
        "Exercises", content,
        name=cv.get("name", ""), tagline=cv.get("title", ""),
        nav_home="", nav_papers="", nav_exercises="active",
    )


def main():
    os.makedirs(OUT, exist_ok=True)
    os.system(f"cp -r {os.path.join(ROOT, 'static')} {OUT}/")

    cv = load_all("cv")[0]
    resources = load_all("resources")
    papers = load_all("paper-links")
    exercise_records = load_all("exercises")

    with open(os.path.join(OUT, "index.html"), "w") as f:
        f.write(build_index(cv, resources))
    with open(os.path.join(OUT, "papers.html"), "w") as f:
        f.write(build_papers(cv, papers))
    with open(os.path.join(OUT, "exercises.html"), "w") as f:
        f.write(build_exercises(cv, exercise_records))

    total_exercises = sum(len(r.get("exercises", [])) for r in exercise_records)
    print(
        f"Built site into {OUT}/ ({len(resources)} resources, {len(papers)} papers, "
        f"{len(exercise_records)} exercise-resources / {total_exercises} exercises)"
    )


if __name__ == "__main__":
    main()