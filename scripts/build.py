#!/usr/bin/env python3
"""Render YAML data files into a static site: a home page of resources,
a papers page, and an exercises page, all with live search and
tag/category filtering."""

import os
from collections import Counter

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
  const entries = Array.from(document.querySelectorAll('#{list_id} .entry[data-tags]'));
  const noResults = document.getElementById('{noresults_id}');
  const countLabel = document.getElementById('{count_id}');
  const total = entries.length;
  let activeTag = '__all__';

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

  searchBox.addEventListener('input', applyFilters);

  tagBar.addEventListener('click', function(e) {{
    const btn = e.target.closest('button.tag');
    if (!btn) return;
    activeTag = btn.dataset.tag;
    tagBar.querySelectorAll('button.tag').forEach(function(b) {{
      b.classList.toggle('active', b === btn);
    }});
    applyFilters();
  }});

  document.getElementById('{list_id}').addEventListener('click', function(e) {{
    const chip = e.target.closest('.entry .tag[data-tag]');
    if (!chip) return;
    activeTag = chip.dataset.tag;
    tagBar.querySelectorAll('button.tag').forEach(function(b) {{
      b.classList.toggle('active', b.dataset.tag === activeTag);
    }});
    applyFilters();
    window.scrollTo({{ top: 0, behavior: 'smooth' }});
  }});

  applyFilters();
}})();
</script>
"""

# Toggle behavior for a collapsed-by-default tag/filter bar, inspired by
# theoremsearch.com's single "Filters" disclosure button.
FILTERS_TOGGLE_SCRIPT = """
<script>
(function() {{
  const toggle = document.getElementById('{toggle_id}');
  const tagBar = document.getElementById('{tagbar_id}');
  if (!toggle || !tagBar) return;
  toggle.addEventListener('click', function() {{
    const isOpen = tagBar.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }});
}})();
</script>
"""

COLLAPSIBLE_FILTER_STYLE = """
<style>
.filters-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.35em 0.8em;
  font-size: 0.9em;
  cursor: pointer;
  margin: 0.5em 0;
}
.filters-toggle-btn .chevron {
  transition: transform 0.15s ease;
  display: inline-block;
}
.filters-toggle-btn.open .chevron {
  transform: rotate(180deg);
}
.tag-filter-bar.collapsible {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.2s ease, opacity 0.2s ease;
  margin: 0;
}
.tag-filter-bar.collapsible.open {
  max-height: 400px;
  overflow-y: auto;
  opacity: 1;
  margin: 0.5em 0 1em;
}
.tag-count {
  opacity: 0.6;
  font-size: 0.85em;
  margin-left: 0.25em;
}
</style>
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


def render_filterable_list(rows_html, tag_buttons_html, id_prefix, search_placeholder,
                            empty_message, total, collapsible_filters=False):
    search_id = f"{id_prefix}-search"
    tagbar_id = f"{id_prefix}-tagbar"
    list_id = f"{id_prefix}-list"
    noresults_id = f"{id_prefix}-noresults"
    count_id = f"{id_prefix}-count"
    toggle_id = f"{id_prefix}-filters-toggle"

    script = FILTER_SCRIPT.format(
        search_id=search_id, tagbar_id=tagbar_id, list_id=list_id,
        noresults_id=noresults_id, count_id=count_id,
    )

    if collapsible_filters:
        # Tag bar starts collapsed; a single "Filters" button reveals it,
        # instead of rendering every tag inline on page load.
        toggle_html = (
            f'<button type="button" id="{toggle_id}" class="filters-toggle-btn" '
            f'aria-expanded="false">Filters <span class="chevron">\u25be</span></button>'
        )
        tagbar_class = "tag-filter-bar collapsible"
        toggle_script = FILTERS_TOGGLE_SCRIPT.format(toggle_id=toggle_id, tagbar_id=tagbar_id)
        style_block = COLLAPSIBLE_FILTER_STYLE
    else:
        toggle_html = ""
        tagbar_class = "tag-filter-bar"
        toggle_script = ""
        style_block = ""

    return f"""
    {style_block}
    <div class="search-row">
      <input type="text" id="{search_id}" class="search-box" placeholder="{search_placeholder}">
      <span class="result-count" id="{count_id}">{total} / {total}</span>
    </div>
    {toggle_html}
    <div class="{tagbar_class}" id="{tagbar_id}">{tag_buttons_html}</div>
    <div id="{list_id}">{rows_html}</div>
    <div class="no-results" id="{noresults_id}">{empty_message}</div>
    {script}
    {toggle_script}
    """


def render_link_list(entries, id_prefix, search_placeholder, empty_message,
                      collapsible_filters=False, sort_tags_by_frequency=False):
    """Build the filterable list for {title, url, category, note} entries.

    If sort_tags_by_frequency is True, tag/category buttons are ordered by
    how many entries use them (most common first) instead of alphabetically,
    and each button shows a count badge.
    """
    counts = Counter(e["category"] for e in entries)

    if sort_tags_by_frequency:
        categories = [c for c, _ in sorted(counts.items(), key=lambda kv: (-kv[1], kv[0].lower()))]
    else:
        categories = sorted(counts.keys())

    def label(c):
        if sort_tags_by_frequency:
            return f'{c} <span class="tag-count">{counts[c]}</span>'
        return c

    tag_buttons = '<button class="tag active" data-tag="__all__" type="button">all</button>' + "".join(
        f'<button class="tag" data-tag="{c}" type="button">{label(c)}</button>' for c in categories
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

    return render_filterable_list(
        rows, tag_buttons, id_prefix, search_placeholder, empty_message, len(entries),
        collapsible_filters=collapsible_filters,
    )


def render_exercise_list(records):
    """Build the filterable list for exercise records loaded from
    data/exercises. Filter tags = resource slugs (title as label);
    each exercise is its own entry so search operates at exercise
    granularity, but filtering happens at resource granularity."""

    def slug_for(record):
        import re
        from urllib.parse import urlparse
        parsed = urlparse(record["url"])
        s = re.sub(r"[^a-zA-Z0-9]+", "-", (parsed.netloc + parsed.path)).strip("-").lower()
        return s[:60] or "resource"

    tag_defs = []  # (slug, label)
    rows = ""
    total = 0

    for record in records:
        slug = slug_for(record)
        label = record.get("title") or record["url"]
        tag_defs.append((slug, label))

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

    tag_defs.sort(key=lambda t: t[1].lower())
    tag_buttons = '<button class="tag active" data-tag="__all__" type="button">all resources</button>' + "".join(
        f'<button class="tag" data-tag="{slug}" type="button">{label}</button>'
        for slug, label in tag_defs
    )

    return render_filterable_list(
        rows, tag_buttons, "exercise",
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
        collapsible_filters=True,
        sort_tags_by_frequency=True,
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