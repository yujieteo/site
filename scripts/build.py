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


FILTER_SCRIPT = """
<script>
(function() {{
  const searchBox = document.getElementById('{search_id}');
  const tagBar = document.getElementById('{tagbar_id}');
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
      b.classList.toggle('active', b.dataset.tag === tag);
    }});
    applyFilters();
  }}

  function togglePanel(forceOpen) {{
    panelOpen = typeof forceOpen === 'boolean' ? forceOpen : !panelOpen;
    tagBar.style.display = panelOpen ? 'flex' : 'none';
    filtersToggle.classList.toggle('open', panelOpen);
  }}

  searchBox.addEventListener('input', applyFilters);

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

  tagBar.addEventListener('click', function(e) {{
    const btn = e.target.closest('button.tag');
    if (!btn) return;
    setActiveTag(btn.dataset.tag);
    togglePanel(false);
  }});

  document.getElementById('{list_id}').addEventListener('click', function(e) {{
    const chip = e.target.closest('.entry .tag[data-tag]');
    if (!chip) return;
    setActiveTag(chip.dataset.tag);
    window.scrollTo({{ top: 0, behavior: 'smooth' }});
  }});

  applyFilters();
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
    return base.format(
        title=title, content=content, root=root, tagline=tagline, name=name,
        nav_home=nav_home, nav_papers=nav_papers, nav_exercises=nav_exercises,
    )


def render_tag_bar(sorted_tags, all_label="all"):
    """sorted_tags: list of (tag_value, label) already sorted most-common-first."""
    buttons = [f'<button class="tag active" data-tag="__all__" type="button">{all_label}</button>']
    for tag, label in sorted_tags:
        buttons.append(f'<button class="tag" data-tag="{tag}" type="button">{label}</button>')
    return "".join(buttons)


def render_filterable_list(rows_html, tag_bar_html, id_prefix, search_placeholder,
                            empty_message, total):
    search_id = f"{id_prefix}-search"
    tagbar_id = f"{id_prefix}-tagbar"
    list_id = f"{id_prefix}-list"
    noresults_id = f"{id_prefix}-noresults"
    count_id = f"{id_prefix}-count"
    toggle_id = f"{id_prefix}-filters-toggle"
    wrap_id = f"{id_prefix}-filters-wrap"

    script = FILTER_SCRIPT.format(
        search_id=search_id, tagbar_id=tagbar_id, list_id=list_id,
        noresults_id=noresults_id, count_id=count_id, toggle_id=toggle_id,
    )

    # The panel's positioning/sizing is written inline (rather than relying
    # on a `.tag-filter-bar` rule in static/style.css) so it can't inherit
    # a no-wrap / overflow-x-auto rule from elsewhere and run off infinitely
    # to the right. It behaves as a fixed-width, wrapping, scrollable
    # dropdown anchored under the search row.
    return f"""
    <div class="search-row" id="{wrap_id}" style="position:relative; display:flex; align-items:center; gap:0.6em; flex-wrap:wrap;">
      <input type="text" id="{search_id}" class="search-box" placeholder="{search_placeholder}">
      <button type="button" id="{toggle_id}" class="filters-toggle">Filters</button>
      <span class="result-count" id="{count_id}">{total} / {total}</span>

      <div id="{tagbar_id}"
           style="display:none; position:absolute; top:calc(100% + 6px); left:0;
                  width:min(90vw, 420px); max-height:320px; overflow-y:auto;
                  flex-wrap:wrap; gap:0.4em; box-sizing:border-box;
                  background:#fff; border:1px solid #ddd; border-radius:8px;
                  box-shadow:0 8px 24px rgba(0,0,0,0.12); padding:0.7em;
                  z-index:50;">
        {tag_bar_html}
      </div>
    </div>
    <div id="{list_id}">{rows_html}</div>
    <div class="no-results" id="{noresults_id}">{empty_message}</div>
    {script}
    """


def render_link_list(entries, id_prefix, search_placeholder, empty_message):
    """Build the filterable list for {title, url, category, note} entries.
    Tags (categories) sorted most-common-first (ties broken alphabetically)."""
    counts = Counter(e["category"] for e in entries)
    sorted_cats = [c for c, _ in sorted(counts.items(), key=lambda kv: (-kv[1], kv[0].lower()))]
    tag_bar_html = render_tag_bar([(c, c) for c in sorted_cats])

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
    tag_bar_html = render_tag_bar([(s, tag_defs[s]) for s in sorted_slugs], all_label="all resources")

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