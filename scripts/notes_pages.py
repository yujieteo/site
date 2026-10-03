"""The notes page, with its timeline and list views, and the Open questions page."""

import datetime
from collections import Counter

from copy_markdown import absolute_markdown, copy_markdown_script, markdown_sources_script
from filter_lists import (
    FIND_TAG_THRESHOLD, NOTE_FACETS, group_facets, note_classifier, render_facets, render_filterable_list,
)
from site_data import SITE_URL, render_markdown
from site_html import (
    contains_math, esc, record_label, render_links, render_page, shorten, split_first_sentence, time_tag,
)


def render_note(entry, note, records):
    """One note in the list view, with its tags, Related links and Copy Markdown button."""
    record_id = note["id"]
    tags_html = "".join(
        f'<button type="button" class="tag" data-tag="{esc(tag)}">{esc(tag)}</button>'
        for tag in note["tags"]
    )
    return (
        f'<article class="note-item" id="{esc(record_id)}" data-copy-scope>'
        f'<div class="note-body">{note["body_html"]}</div>'
        f'<div class="entry-tags" aria-label="Tags">{tags_html}</div>'
        f'{render_links(records[record_id], records, compact=True)}'
        '<div class="note-actions" data-copy-control>'
        f'<button type="button" class="copy-note" data-copy-markdown="{esc(record_id)}" '
        f'aria-label="Copy Markdown of note from {esc(entry["display_date"])}: '
        f'{esc(note["plain_text"][:40].strip())}">'
        'Copy Markdown</button>'
        '<span class="page-action-status" data-copy-status aria-live="polite"></span>'
        '</div></article>'
    )


def build_notes(cv, notes, records, corpus_revision):
    counts = Counter(
        tag
        for entry in notes["entries"]
        for note in entry["notes"]
        for tag in note["tags"]
    )
    total = sum(len(entry["notes"]) for entry in notes["entries"])
    facet_html = render_facets(
        group_facets(counts, NOTE_FACETS, note_classifier(notes["registry"])), counts
    )
    days_html = []
    sources = {}
    for entry in notes["entries"]:
        for note in entry["notes"]:
            sources[note["id"]] = absolute_markdown(note["source"] + "\n", f"{SITE_URL}notes.html")
        if entry["notes"]:
            days_html.append(
                f'<section class="note-day"><h2 class="note-date" id="{esc(entry["date"])}">'
                f'<a href="#{esc(entry["date"])}">{time_tag(entry["date"], entry["display_date"])}'
                f'</a></h2>{"".join(render_note(entry, note, records) for note in entry["notes"])}</section>'
            )
    filters_html = render_filterable_list(
        "note", facet_html, "Filter notes by text or tag…", "No notes match these filters.",
        total, default_show=True, initial_html="".join(days_html),
        find_tags=len(counts) > FIND_TAG_THRESHOLD, noun="notes",
        timeline_html=render_timeline(notes, records),
    )
    open_count = sum(1 for *_, resolved_by in open_questions(notes, records) if not resolved_by)
    intro_html = render_markdown(notes["intro"])
    content = (
        f'<h1 class="page-title">{esc(notes["title"])}</h1>'
        f'<div class="notes-intro">{intro_html}</div>'
        f'<p class="page-links"><a class="more-link" href="open-questions.html">Open questions '
        f'<span class="more-link-count">{open_count} open</span></a></p>'
        f'{filters_html}{markdown_sources_script(sources)}{copy_markdown_script()}'
    )
    return render_page(
        cv, "notes", notes["title"], content, corpus_revision,
        math=any(
            contains_math(note["body_html"])
            for entry in notes["entries"]
            for note in entry["notes"]
        ),
    )


LINK_ICON = (
    '<svg class="link-icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" '
    'focusable="false"><path d="M6.5 9.5l3-3M7 4.5l1-1a2.5 2.5 0 013.5 3.5l-1 1M9 11.5l-1 1'
    'A2.5 2.5 0 014.5 9l1-1" fill="none" stroke="currentColor" stroke-width="1.5" '
    'stroke-linecap="round"/></svg>'
)


def render_timeline_item(date, note, records):
    """One note in the timeline: its first sentence, up to three tags, and a Related marker."""
    record_id = note["id"]
    title, _ = split_first_sentence(note["plain_text"], 120)
    tags = "".join(
        f'<button type="button" class="tag tag-small" data-tag="{esc(tag)}">{esc(tag)}</button>'
        for tag in note["tags"][:3]
    )
    related = (
        f'<span class="timeline-related">{LINK_ICON}Has related items</span>'
        if records[record_id].get("links") else ""
    )
    return (
        f'<li class="timeline-item" data-note-id="{esc(record_id)}">'
        f'{time_tag(date, css_class="timeline-date")}'
        f'<span class="timeline-main"><a class="timeline-link" href="#{esc(record_id)}">'
        f'{esc(title)}</a>{related}</span>'
        f'<span class="timeline-tags">{tags}</span></li>'
    )


def render_timeline(notes, records):
    """Notes grouped by year, then month (newest first); only the newest month starts open."""
    years = {}
    for entry in notes["entries"]:
        year, month = entry["date"][:4], entry["date"][:7]
        for note in entry["notes"]:
            years.setdefault(year, {}).setdefault(month, []).append((entry["date"], note))
    first_month = True
    year_sections = []
    for year, months in years.items():
        month_blocks = []
        for month, month_notes in months.items():
            items = "".join(render_timeline_item(date, note, records) for date, note in month_notes)
            label = datetime.date.fromisoformat(f"{month}-01").strftime("%B %Y")
            count = len(month_notes)
            month_blocks.append(
                f'<details class="timeline-month" data-month="{month}"{" open" if first_month else ""}>'
                f'<summary class="timeline-summary"><span class="timeline-month-name">{label}</span>'
                f'<span class="timeline-month-count" data-month-count data-total="{count}">'
                f'{count} {"note" if count == 1 else "notes"}</span></summary>'
                f'<ol class="timeline-list">{items}</ol></details>'
            )
            first_month = False
        year_sections.append(
            f'<section class="timeline-year" aria-labelledby="year-{year}">'
            f'<h2 class="timeline-year-title" id="year-{year}">{year}</h2>{"".join(month_blocks)}</section>'
        )
    return "".join(year_sections)


def open_questions(notes, records):
    """Notes tagged todo, or answered by another item, newest first, with their resolvers."""
    questions = []
    for entry in notes["entries"]:
        for note in entry["notes"]:
            record = records[note["id"]]
            resolved_by = [
                records[link["target"]] for link in record.get("links", [])
                if link["rel"] == "resolvedBy"
            ]
            if "todo" in note["tags"] or resolved_by:
                questions.append((entry["date"], note, record, resolved_by))
    return questions


def build_open_questions(cv, notes, records, corpus_revision):
    questions = open_questions(notes, records)
    resolved = sum(1 for *_, resolved_by in questions if resolved_by)
    items = []
    for date, note, record, resolved_by in questions:
        title, rest = split_first_sentence(note["plain_text"], 140)
        status = (
            '<span class="status status-resolved">Resolved</span>' if resolved_by
            else '<span class="status status-open">Open</span>'
        )
        resolution = "".join(
            f'<p class="oq-resolution">Resolved by &rarr; '
            f'<a href="{esc(item["url"])}">{esc(record_label(item))}</a></p>'
            for item in resolved_by
        )
        items.append(
            f'<li class="oq-item"><p class="oq-meta">{time_tag(date)}{status}</p>'
            f'<h2 class="oq-title"><a href="{esc(record["url"])}">{esc(title)}</a></h2>'
            + (f'<p class="oq-rest">{esc(shorten(rest, 220))}</p>' if rest else "")
            + f'{resolution}</li>'
        )
    body = (
        f'<ol class="oq-list">{"".join(items)}</ol>' if items
        else '<p class="empty-state">No open questions right now.</p>'
    )
    content = (
        '<h1 class="page-title">Open questions</h1>'
        '<p class="page-lede">Notes tagged <code>todo</code>: questions to work out and things to '
        'do. A note\'s text is never edited to close it, though its todo tag may be removed. '
        'When a note, post, visual or episode answers one, it links back, and the question '
        'shows here as resolved.</p>'
        f'<p class="oq-summary">{len(questions) - resolved} open &middot; {resolved} resolved'
        ' &middot; <a href="notes.html">All notes</a></p>'
        f'{body}'
    )
    return render_page(
        cv, "notes", "Open questions", content, corpus_revision,
        math=any(contains_math(note["body_html"]) for _, note, _, _ in questions),
    )
