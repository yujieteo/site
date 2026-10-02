"""The filter controls of the list pages: tag facets, the search box and the result list.

The build renders the controls and the facet counts; static/js/filter.js
filters the list in the browser from the Published Corpus.
"""

from collections import Counter

import paper_tags
from site_data import DATA, load_yaml, normalize_tags
from site_html import esc


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


# The blog and Visuals pages put every tag in one Topic facet.
TOPIC_FACETS = [("topic", "Topic")]


def classify_topic(tag):
    return "topic"


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
                           list_title=None, noun="entries", timeline_html="", root=""):
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
    <script type="module" src="{root}static/js/filter.js"></script>{timeline_script}
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
