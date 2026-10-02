"""The site's pages other than the notes: home, About, Paper Links, blog, colophon, media and visuals."""

import re
from collections import Counter

from copy_markdown import absolute_markdown, copy_markdown_script, markdown_sources_script, page_copy_actions
from filter_lists import (
    FIND_TAG_THRESHOLD, PAPER_FACETS, TOPIC_FACETS, classify_paper_tag, classify_topic, group_facets,
    load_resource_facets, render_entry_list, render_facets, render_filterable_list,
)
from site_data import SITE_URL, media_record_id
from site_html import (
    KIND_LABELS, add_heading_anchors, contains_math, esc, render_links, render_page, shorten,
    split_first_sentence, time_tag,
)


def featured_items(cv, records):
    """The homepage's four cards: latest note, visual and media item, then the pinned item."""
    pinned_id = cv.get("pinned")
    if pinned_id and pinned_id not in records:
        raise RuntimeError(f"data/cv pinned item {pinned_id} is not in the Published Corpus")

    def newest(kinds, date_key="date"):
        candidates = [
            record for record in records.values()
            if record["kind"] in kinds and record["id"] != pinned_id and record.get(date_key)
        ]
        # Stable sort: records with the same date keep their source order.
        candidates.sort(key=lambda record: record[date_key], reverse=True)
        return candidates[0] if candidates else None

    cards = []
    for label, record, date_key in (
        ("Latest note", newest({"note"}), "date"),
        ("Latest visual", newest({"visualization"}, "fetched"), "fetched"),
        (None, newest({"podcast", "video"}), "date"),
    ):
        if record:
            label = label or ("Latest video" if record["kind"] == "video" else "Latest episode")
            cards.append((label, record, record[date_key]))
    if pinned_id:
        pinned = records[pinned_id]
        cards.append((f"Pinned {KIND_LABELS.get(pinned['kind'], '').lower()}".strip(), pinned,
                      pinned.get("date") or pinned.get("fetched")))
    return cards


def render_featured(cards):
    if not cards:
        return ""
    items = []
    for label, record, date in cards:
        if record["kind"] == "note":
            title, rest = split_first_sentence(record.get("summary", ""))
            summary = shorten(rest, 140)
        else:
            title = record.get("title", "")
            summary = shorten(record.get("summary", ""), 140)
        time_html = time_tag(date, css_class="card-date") if date else ""
        items.append(
            '<li class="card">'
            f'<p class="card-type">{esc(label)}</p>'
            f'<h3 class="card-title"><a class="card-link" href="{esc(record["url"])}">{esc(title)}</a></h3>'
            + (f'<p class="card-summary">{esc(summary)}</p>' if summary else "")
            + f'{time_html}</li>'
        )
    return (
        '<section class="featured" aria-labelledby="featured-heading">'
        '<h2 class="visually-hidden" id="featured-heading">Featured</h2>'
        f'<ul class="featured-grid">{"".join(items)}</ul></section>'
    )


def build_index(cv, resources, records, corpus_revision):
    facets, classify = load_resource_facets()
    body = render_entry_list(
        "resource",
        resources,
        "Filter resources by title, note or tag…",
        "No resources match these filters.",
        facets, classify,
        default_show=True,
        list_title="All resources",
        noun="resources",
    )
    content = (
        '<section class="hero">'
        f'<h1 class="hero-title">{esc(cv["name"])}</h1>'
        f'<div class="hero-lede">{cv["bio_html"]}</div>'
        '<p class="hero-links"><a class="more-link" href="open-questions.html">Open questions</a>'
        '<a class="more-link" href="colophon.html">How this site is built</a></p>'
        '</section>'
        f'{render_featured(featured_items(cv, records))}'
        f'{body}'
    )
    return render_page(cv, "home", f'{cv["name"]} — {cv["title"]}', content, corpus_revision,
                       math=True)


def about_markdown(cv, about):
    """The About page as one Markdown document: its intro, then each section."""
    parts = [f'# {cv["name"]}', about["intro"].strip()]
    for section in about["sections"]:
        parts += [f'## {section["title"]}', section["content"].strip()]
    return absolute_markdown("\n\n".join(parts) + "\n", f"{SITE_URL}about.html")


def build_about(cv, about, corpus_revision):
    sections_html = "".join(
        f'<h2 class="section-title" id="{esc(sec["slug"])}">{esc(sec["title"])}</h2>'
        f'{sec["content_html"]}'
        for sec in about["sections"]
    )
    content = (
        '<div class="docs-title-row" data-copy-scope>'
        f'<h1 class="page-title">{esc(cv["name"])}</h1>{page_copy_actions()}</div>'
        f'{about["intro_html"]}{sections_html}'
        f'{markdown_sources_script({"page": about_markdown(cv, about)})}{copy_markdown_script()}'
    )
    return render_page(cv, "about", "About", content, corpus_revision)


def build_paper_links(cv, papers, corpus_revision):
    body = render_entry_list(
        "paper",
        papers,
        "Filter paper links by title, note or tag…",
        "No paper links match these filters.",
        PAPER_FACETS, classify_paper_tag,
        default_show=False,
        noun="paper links",
    )
    content = f'<h1 class="page-title">Paper Links</h1>{body}'
    return render_page(cv, "paper_links", "Paper Links", content, corpus_revision, math=True)


def build_blog_index(cv, posts, corpus_revision):
    body = render_entry_list(
        "blog",
        posts,
        "Filter posts by title, summary or tag…",
        "No posts match these filters.",
        TOPIC_FACETS, classify_topic,
        default_show=True,
        noun="posts",
    )
    content = f'<h1 class="page-title">Blog</h1>{body}'
    return render_page(cv, "blog", "Blog", content, corpus_revision)


def build_colophon(cv, colophon, corpus_revision):
    body_html, _ = add_heading_anchors(colophon["body_html"])
    content = (
        '<div class="docs-title-row" data-copy-scope>'
        f'<h1 class="page-title">{esc(colophon["title"])}</h1>{page_copy_actions()}</div>'
        f'<div class="post-body">{body_html}</div>'
        f'{markdown_sources_script({"page": colophon["copy_markdown"]})}{copy_markdown_script()}'
    )
    return render_page(cv, None, colophon["title"], content, corpus_revision)


def format_reading_time(minutes):
    return f"{minutes} min read"


def render_blog_sidebar(posts, current_slug):
    items = []
    for p in posts:
        current = ' aria-current="page"' if p["slug"] == current_slug else ""
        date = f'{time_tag(p["date"])} &middot; ' if p["date"] else ""
        meta = (
            f'<span class="docs-nav-date">{date}'
            f'<span class="reading-time">{p["reading_minutes"]} min</span></span>'
        )
        items.append(
            f'<li><a href="{esc(p["slug"])}.html"{current}>'
            f'<span class="docs-nav-title">{esc(p["title"])}</span>{meta}</a></li>'
        )
    items = "".join(items)
    return (
        '<details class="docs-nav" data-docs-nav open>'
        '<summary class="docs-nav-toggle">All posts</summary>'
        '<nav aria-label="Blog posts"><p class="docs-nav-heading">'
        '<a href="../blog.html">Blog</a></p>'
        f'<ul class="docs-nav-list">{items}</ul></nav></details>'
    )


def render_blog_toc(headings):
    if not headings:
        return ""
    items = "".join(
        f'<li class="toc-level-{level}"><a href="#{esc(slug)}">{inner}</a></li>'
        for level, slug, inner in headings
    )
    return (
        '<nav class="docs-toc" aria-labelledby="toc-heading" data-toc>'
        '<p class="docs-toc-heading" id="toc-heading">On this page</p>'
        f'<ul class="docs-toc-list">{items}</ul></nav>'
    )


def build_blog_post(cv, post, posts, records, corpus_revision):
    date = f'{time_tag(post["date"])} &middot; ' if post["date"] else ""
    meta_line = (
        f'<p class="post-meta">{date}<span class="reading-time">'
        f'{format_reading_time(post["reading_minutes"])}</span></p>'
    )
    body_html = re.sub(r"</?h1(?=>|\s)", lambda match: match.group(0).replace("h1", "h2"),
                       post["body_html"])
    body_html, headings = add_heading_anchors(body_html)
    actions = page_copy_actions(
        f'<a class="page-action" href="{esc(post["slug"])}.md" type="text/markdown">View Markdown</a>'
    ) + markdown_sources_script({"page": post["copy_markdown"]})
    content = (
        '<div class="docs-layout">'
        f'{render_blog_sidebar(posts, post["slug"])}'
        '<article class="docs-article">'
        f'<div class="docs-title-row" data-copy-scope><h1 class="page-title">{esc(post["title"])}</h1>'
        f'{actions}</div>'
        f'{meta_line}<div class="post-body">{body_html}</div>'
        f'{render_links(records["blog:" + post["slug"]], records, root="../")}</article>'
        f'<aside class="docs-aside">{render_blog_toc(headings)}</aside>'
        '</div>'
        '<script type="module" src="../static/js/post.js"></script>'
        f'{copy_markdown_script("../")}'
    )
    return render_page(
        cv, "blog", post["title"], content, corpus_revision, root="../",
        math=contains_math(body_html), shell_class=" site-shell-wide",
    )


def format_duration(seconds):
    total = int(round(float(seconds)))
    hours, remainder = divmod(total, 3600)
    minutes = remainder // 60
    if hours:
        return f"{hours} hr {minutes} min"
    if minutes:
        return f"{minutes} min"
    return f"{total} sec"


def media_player(item):
    if "video" in item:
        video_src = item["video"]
        captions_src = item["captions"]
        poster_src = item["poster"]
        return (
            f'<video class="media-player" controls preload="metadata" playsinline '
            f'poster="{esc(poster_src)}">'
            f'<source src="{esc(video_src)}" type="video/mp4">'
            f'<track kind="captions" src="{esc(captions_src)}" srclang="en" '
            f'label="English" default>'
            'Your browser does not support the video element. '
            f'<a href="{esc(video_src)}">Download the video</a>.'
            '</video>'
        )
    src = item["audio"]
    return (
        f'<audio class="media-player" controls preload="metadata" src="{esc(src)}">'
        f'Your browser does not support the audio element. '
        f'<a href="{esc(src)}">Download the episode</a>.'
        f'</audio>'
    )


def build_media_index(cv, items, corpus_revision):
    if items:
        latest = items[0]
        featured = (
            '<section class="media-featured">'
            '<p class="media-kicker">Latest item</p>'
            f'<h2 class="media-title">{esc(latest["title"])}</h2>'
            f'<p class="media-meta">{time_tag(latest["date"])} &middot; '
            f'{esc(format_duration(latest["duration_seconds"]))}</p>'
            f'{media_player(latest)}'
            f'<p class="media-summary">{esc(latest["summary"])}</p>'
            f'<p><a href="{esc(latest["id"])}.html">Open</a></p>'
            '</section>'
        )
        list_items = "".join(
            f'<li class="media-item">{time_tag(item["date"])}'
            f'<a href="{esc(item["id"])}.html">{esc(item["title"])}</a>'
            f'<span class="media-duration">'
            f'{esc(format_duration(item["duration_seconds"]))}</span></li>'
            for item in items
        )
        body = (
            featured
            + '<h2 class="section-title">All items</h2>'
            + f'<ul class="media-list">{list_items}</ul>'
        )
    else:
        body = (
            '<p class="media-empty">No items yet. Audio episodes are generated from the '
            'daily notes with the podcast skill and published here.</p>'
        )
    content = f'<h1 class="page-title">Media</h1>{body}'
    return render_page(cv, "media", "Media", content, corpus_revision, root="../")


def build_media_item(cv, item, note_dates, records, corpus_revision):
    sources_html = ""
    if "notes" in item:
        source_dates = sorted(
            {note_dates[note_id] for note_id in item["notes"] if note_id in note_dates},
            reverse=True,
        )
        if source_dates:
            links = " ".join(
                f'<a href="../notes.html#{esc(date)}">{esc(date)}</a>'
                for date in source_dates
            )
            sources_html = f'<p class="media-sources">Condensed from notes dated {links}.</p>'
    tags_html = "".join(
        f'<span class="tag media-tag">{esc(tag)}</span>'
        for tag in item["focus_tags"]
    )
    meta = (
        f'<p class="post-meta">{time_tag(item["date"])} &middot; '
        f'{esc(format_duration(item["duration_seconds"]))}'
    )
    if "notes" in item:
        meta += f' &middot; {len(item["notes"])} notes'
    meta += '</p>'
    content = (
        f'<h1 class="page-title">{esc(item["title"])}</h1>'
        f'{meta}'
        f'{media_player(item)}'
        f'<p class="media-summary">{esc(item["summary"])}</p>'
        f'<div class="entry-tags">{tags_html}</div>'
        f'{sources_html}'
        f'{render_links(records[media_record_id(item)], records, root="../")}'
        f'<p class="media-back"><a href="index.html">&larr; All items</a></p>'
    )
    return render_page(cv, "media", item["title"], content, corpus_revision, root="../")


def build_visuals_index(cv, visualizations, records, corpus_revision, root=""):
    visuals_path = "" if root else "visuals/"
    counts = Counter(tag for visualization in visualizations for tag in visualization["tags"])
    facet_html = render_facets(group_facets(counts, TOPIC_FACETS, classify_topic), counts)
    entries = []
    for visualization in visualizations:
        tags_html = "".join(
            f'<button type="button" class="tag" data-tag="{esc(tag)}">{esc(tag)}</button>'
            for tag in visualization["tags"]
        )
        entries.append(
            f'<article class="entry"><div class="entry-date">Fetched {time_tag(visualization["fetched"])}</div>'
            f'<h2 class="entry-title"><a href="{visuals_path}{esc(visualization["slug"])}/index.html">'
            f'{esc(visualization["title"])}</a></h2>'
            f'<p class="entry-abstract">{esc(visualization["summary"])}</p>'
            f'<div class="entry-tags" aria-label="Tags">{tags_html}</div>'
            f'{render_links(records["visualization:" + visualization["slug"]], records, root=root, compact=True)}'
            f'</article>'
        )
    filters_html = render_filterable_list(
        "visualization", facet_html, "Filter visuals by title, summary or tag…",
        "No visuals match these filters.", len(visualizations), default_show=True,
        initial_html="".join(entries), find_tags=len(counts) > FIND_TAG_THRESHOLD,
        noun="visuals", root=root,
    )
    content = f'<h1 class="page-title">Visuals</h1>{filters_html}'
    return render_page(cv, "visuals", "Visuals", content, corpus_revision, root=root)


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
