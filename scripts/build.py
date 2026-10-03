#!/usr/bin/env python3
"""Build the static site from YAML data and Markdown blog posts.

The work is split by stage: site_data.py and visual_sources.py load and check
the sources, published_corpus.py projects them into the Published Corpus,
pages.py and notes_pages.py render the pages, and this script writes
everything into site/.
"""

import json
import os
import shutil

from calibration import RAW_PATH as CALIBRATION_RAW, answered_calibrations, load_raw
from notes_pages import build_notes, build_open_questions
from paper_tags import citation, load_arxiv_cache
from pages import (
    build_about, build_blog_index, build_blog_post, build_colophon, build_index, build_media_index,
    build_media_item, build_paper_links, build_visuals_index, build_visuals_markdown,
)
from published_corpus import attach_links, build_published_corpus
from site_data import (
    DATA, MEDIA_ASSET_KEYS, ROOT, check_document, first_duplicate, load_about, load_all,
    load_blog_posts, load_colophon, load_daily_notes, load_media_items, load_one, load_validator,
    media_record_id, normalize_tags, render_markdown,
)
from site_html import build_redirect
from visual_sources import (
    load_visualization_files, load_visualization_sources, load_visualizations, find_visuals_repo, visuals_commit,
)

STATIC = ROOT / "static"
OUT = ROOT / "site"


def publish_media_assets(items):
    for item in items:
        copies = [(item[key], OUT / "media" / item[key])
                  for key in MEDIA_ASSET_KEYS if item.get(key) is not None]
        # Keep the legacy /podcast/audio/<id>.mp3 URL resolving for direct links to
        # the first episode; a copy is safe here because redirects cannot serve media.
        if "audio" in item:
            copies.append((item["audio"], OUT / "podcast" / item["audio"]))
        for asset, destination in copies:
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(DATA / "podcasts" / asset, destination)


def publish_visualization_assets(sources, files):
    visuals_out = OUT / "visuals"
    visuals_out.mkdir(parents=True, exist_ok=True)
    for slug, (html_bytes, data) in sources.items():
        destination = visuals_out / slug
        destination.mkdir()
        (destination / "index.html").write_bytes(html_bytes)
        (destination / "data.json").write_text(
            json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
        )
        for source, path, link in files.get(slug, []):
            target = destination / path
            target.parent.mkdir(parents=True, exist_ok=True)
            # Hard-link downloads from the cache rather than copy hundreds of
            # megabytes; prepare_output() only ever unlinks site/, so the cache
            # keeps its bytes.
            if link:
                try:
                    os.link(source, target)
                    continue
                except OSError:
                    pass  # another filesystem: copy
            shutil.copyfile(source, target)


def publish_decks():
    """Copy each slide deck's index.html to site/decks/<slug>/.

    A deck is its index.html plus, for a deck built from PDF slides (the
    beamsuperswitch web deck), the per-page images under slides/**/*.svg and
    any printable PDFs (handout, article) beside index.html. Nothing else is
    published: a deck's presenter notes.md is private and
    stays out of the site even when it sits beside the deck in data/decks/.
    """
    decks_dir = DATA / "decks"
    if not decks_dir.is_dir():
        return []
    slugs = []
    for source in sorted(decks_dir.glob("*/index.html")):
        destination = OUT / "decks" / source.parent.name
        destination.mkdir(parents=True)
        shutil.copyfile(source, destination / "index.html")
        for pdf in sorted(source.parent.glob("*.pdf")):
            shutil.copyfile(pdf, destination / pdf.name)
        for slide in sorted((source.parent / "slides").rglob("*.svg")):
            target = destination / slide.relative_to(source.parent)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(slide, target)
        slugs.append(source.parent.name)
    return slugs


def prepare_output():
    """Recreate the generated site and copy its static assets."""
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "blog").mkdir(parents=True)
    (OUT / "media").mkdir()
    (OUT / "podcast").mkdir()
    shutil.copytree(STATIC, OUT / "static")
    shutil.copy2(ROOT / "llms.txt", OUT / "llms.txt")
    shutil.copy2(STATIC / "favicon.ico", OUT / "favicon.ico")
    (OUT / "calibrator").mkdir()
    shutil.copyfile(CALIBRATION_RAW, OUT / "calibrator" / "raw.toon")


def build_corpus(cv, about, resources, papers, posts, notes, visualizations, media_items, colophon,
                 calibrations=()):
    """Project the sources into the Published Corpus, add authored links, and validate it."""
    corpus = build_published_corpus(
        cv, about, resources, papers, posts, notes, visualizations, media_items, colophon, calibrations
    )
    authored_links = [
        *((f"visualization:{v['slug']}", link["rel"], link["target"])
          for v in visualizations for link in v.get("links", [])),
        *((media_record_id(item), link["rel"], link["target"])
          for item in media_items for link in item.get("links", [])),
        *((f"blog:{post['slug']}", link["rel"], link["target"])
          for post in posts for link in post["links"]),
    ]
    try:
        attach_links(corpus, authored_links)
    except ValueError as exc:
        raise RuntimeError(f"Invalid link: {exc}") from exc
    check_document(load_validator("schema/generated/corpus.schema.json"), corpus, "generated corpus")
    return corpus


def render_pages(cv, about, resources, papers, posts, notes, visualizations, media_items, colophon,
                 records, corpus_revision):
    """Map each generated page's path under site/ to its content."""
    note_dates = {
        note["id"]: entry["date"]
        for entry in notes["entries"]
        for note in entry["notes"]
    }
    pages = {
        OUT / "index.html": build_index(cv, resources, records, corpus_revision),
        OUT / "about.html": build_about(cv, about, corpus_revision),
        OUT / "papers.html": build_paper_links(cv, papers, corpus_revision),
        OUT / "notes.html": build_notes(cv, notes, records, corpus_revision),
        OUT / "open-questions.html": build_open_questions(cv, notes, records, corpus_revision),
        OUT / "colophon.html": build_colophon(cv, colophon, corpus_revision),
        OUT / "blog.html": build_blog_index(cv, posts, corpus_revision),
        OUT / "media" / "index.html": build_media_index(cv, media_items, corpus_revision),
        OUT / "visuals.html": build_visuals_index(cv, visualizations, records, corpus_revision),
        OUT / "visuals" / "index.html": build_visuals_index(
            cv, visualizations, records, corpus_revision, root="../"
        ),
        OUT / "visuals.md": build_visuals_markdown(visualizations),
        # Keep every legacy /podcast/... URL resolving via minimal redirect pages.
        OUT / "podcast" / "index.html": build_redirect("/media/index.html", "Media"),
    }
    for post in posts:
        pages[OUT / "blog" / f"{post['slug']}.html"] = build_blog_post(
            cv, post, posts, records, corpus_revision
        )
        pages[OUT / "blog" / f"{post['slug']}.md"] = post["source_markdown"]
    for item in media_items:
        pages[OUT / "media" / f"{item['id']}.html"] = build_media_item(
            cv, item, note_dates, records, corpus_revision
        )
        if "audio" in item:
            pages[OUT / "podcast" / f"{item['id']}.html"] = build_redirect(
                f"/media/{item['id']}.html", item["title"]
            )
    return pages


def main():
    cv = load_one("cv")
    cv["bio_html"] = render_markdown(cv["bio"])
    about = load_about()
    resources = load_all("resources")
    # The corpus keeps one record per url and title, so a duplicate would vanish silently.
    duplicate = first_duplicate((resource["url"], resource["title"]) for resource in resources)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate resource: {duplicate[1]}")
    papers = load_all("paper-links")
    for entry in [*resources, *papers]:
        entry["tags"] = normalize_tags(entry.get("tags"), entry["category"])
    arxiv_cache = load_arxiv_cache()
    for paper in papers:
        paper["citation"] = citation(paper, arxiv_cache)
    posts = load_blog_posts()
    notes = load_daily_notes()
    visuals_repo, visuals_source = find_visuals_repo()
    print(f"Reading yujieteo/visuals from {visuals_repo} ({visuals_source})")
    visualizations = load_visualizations(visuals_repo)
    media_items = load_media_items()
    visualization_sources = load_visualization_sources(visualizations, visuals_repo)
    visualization_files = load_visualization_files(visualizations, visuals_repo)
    colophon = load_colophon()
    calibrations = answered_calibrations(load_raw())
    corpus = build_corpus(
        cv, about, resources, papers, posts, notes, visualizations, media_items, colophon, calibrations
    )
    records = {record["id"]: record for record in corpus["records"]}

    prepare_output()
    publish_visualization_assets(visualization_sources, visualization_files)
    decks = publish_decks()
    publish_media_assets(media_items)
    (OUT / "corpus.json").write_text(
        json.dumps(corpus, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )
    pages = render_pages(
        cv, about, resources, papers, posts, notes, visualizations, media_items, colophon,
        records, corpus["revision"],
    )
    for path, content in pages.items():
        path.write_text(content, encoding="utf-8")

    print(
        f"Built site into {OUT}/ "
        f"({len(resources)} resources, {len(papers)} paper links, "
        f"{len(posts)} blog posts, {len(visualizations)} visualizations, "
        f"{len(media_items)} media items, {len(decks)} decks) "
        f"from yujieteo/visuals {visuals_commit(visuals_repo)}"
    )


if __name__ == "__main__":
    main()
