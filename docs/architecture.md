# Architecture

## Data flow

`data/` (YAML, Markdown, decks, media assets) and `templates/` + `static/` are
the sources. `scripts/validate.py` checks every YAML file against `schema/`.
`scripts/build.py` deletes and recreates `site/`, so renamed or deleted content
never leaves stale output. `site/` is ignored by Git: pull requests carry only
sources, so independent content changes never conflict on generated pages, and
`scripts/site_diff.py` derives a deploy's upload set by rebuilding the live
commit and comparing. Visualization HTML and data are read from the
separate `visuals` repository at the commit pinned in
`data/visuals/<slug>.pin` (one file per visualization, so two pull requests
that each add or republish a different visualization do not conflict) and
written to `site/visuals/<slug>/`; the visuals checkout's own `HEAD` does not
affect the build.

Notes are the one shared source that can still conflict. The captain chose to
keep every note in the single file `data/notes.md`, so notes changes land one
at a time: two pull requests that each edit the top of `data/notes.md` (a new
newest date), the same date section, or `data/note-tags.json` can still
conflict.

## Published Corpus

`site/corpus.json` is the explicit public projection of the site, produced by
`scripts/published_corpus.py` and described by
`schema/generated/corpus.schema.json`. It is never edited by hand. Each Corpus
Record has a stable ID and a content revision; see [CONTEXT.md](../CONTEXT.md).

## WebMCP

Every generated page registers two read-only tools when the browser supports
`document.modelContext`:

- `search_site` searches all public content by text, kind, tags, and sort order.
- `get_item` retrieves one complete Corpus Record by its stable ID.

Both tools and the visible search controls use `static/js/corpus.js`: the
per-page filters (`static/js/filter.js`, one kind per page) and the global
search (`templates/base.html`, `static/js/site-search.js`). A Search button in
every page header opens a modal `<dialog>` that searches every record kind,
loads the corpus on first open, and resolves record URLs against `corpus.json`
so results work from nested pages. With a fine pointer, Cmd+K (Mac) or Ctrl+K
toggles it and `/` opens it outside text fields; touch devices get only the
button, a full-screen popup, and no key hints
(`@media (hover: none), (pointer: coarse)`). The
browser fetches `corpus.json` without persistent caching and keeps it only for
the page lifetime. Authenticated authoring is intentionally separate from this
read interface.

## Motion

Page navigations fade with CSS view transitions (`@view-transition`), with a
fade-in on `main` for first loads and browsers without them. Every other UI
state change (hover and current states, results appearing, `<details>` opening,
the search popup opening and closing, status text changing) fades with the same
`--fade-duration` (200ms) and `--fade-ease` tokens, via CSS in
`static/css/style.css` or `static/js/fade.js`. Fades only run towards visible,
so pages render normally without JavaScript, and `prefers-reduced-motion:
reduce` turns all of it off.

## Pages and navigation

The homepage (`index.html`) has the site title and introduction, four featured
cards (latest note, latest visual, latest media item, and the item named by
`pinned` in `data/cv/cv.yaml`; a pinned item is left out of the "latest"
choices), then the filterable resources. `colophon.html` comes from
`data/colophon.md`. On narrow screens the navigation collapses behind a Menu
button, and the footer has a System / Light / Dark theme switch
(`static/js/shell.js`; the choice is stored in `localStorage` and applied by a
one-line script in `<head>` before the page paints).

## Filters and facets

Each list page has a "Filter this list" box and a Filters panel of tag facets.
Tags in one facet are OR'd, facets are AND'd (`tagGroups` in
`static/js/corpus.js`), and the state is kept in the URL, for example
`index.html?subject=energy&region=singapore`. Each facet shows its eight most
used tags and a "Show all" toggle. Resource facets come from
`data/tag-facets.yaml` (the build fails on an unassigned tag), note facets from
the tag classes in `data/note-tags.json`, paper-link facets from the
vocabularies in `scripts/paper_tags.py`, and the Visuals page has one Topic
facet of the visuals' own `tags`.

## Links between items

Visuals, media items and blog posts may carry `links` to other Corpus Records
(`resolves`, `extends`, `uses`, `related`). `attach_links` in
`scripts/published_corpus.py` writes each link and its reverse (`resolvedBy`,
`extendedBy`, `usedBy`, `related`) into the corpus, and the build fails when a
target does not exist. Item pages show a Related block; the Visuals page and
notes show a compact list. `open-questions.html` lists notes tagged `todo` plus
any note something resolves, newest first, each marked Open or Resolved.

## Blog

Each `data/blog/<slug>.md` becomes `site/blog/<slug>.html` (post list, article,
table of contents) plus a copy of its Markdown source. The build estimates a
reading time with `reading_minutes()` in `scripts/build.py`: frontmatter,
fenced code blocks, HTML tags and link targets are skipped, a word is any
whitespace-separated token with a letter or digit, and the count is rounded to
the nearest minute at 220 words per minute (minimum 1). It appears in the post
meta line and post list as "N min read" / "N min", and as `readingMinutes` on
the post's `blog` Corpus Record, which the blog index renders.

## Notes

`data/notes.md` is the sole source of truth for notes; `site/notes.html` is
generated. It has two views: Timeline (the default; notes grouped by year and
month, newest month open) and List (`notes.html?view=list`), switched by
`static/js/notes-views.js`. A link to a note or date always opens the list.
Each date gets a stable link such as `notes.html#2026-09-24`, and trailing
hashtags become clickable filters validated against `data/note-tags.json`.

## Media

Audio episodes and explainer videos share `data/podcasts/<id>.yaml`, validated
by `schema/podcasts.schema.json`. The build renders `site/media/index.html`
with the latest item featured, one player page per item, copies assets into
`site/media/`, and adds a `podcast` or `video` record to the corpus. Legacy
`/podcast/...` URLs still resolve: the build writes redirect pages under
`site/podcast/` and keeps a copy of each audio file there.

## Slide decks

`data/decks/<slug>/index.html` is copied verbatim to
`site/decks/<slug>/index.html`. Only `index.html` is published.

## Continuous integration

See [Continuous integration](../README.md#continuous-integration) in the
README. The workflow builds `site/` fresh for the tests; nothing generated is
committed.
