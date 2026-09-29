# Architecture

## Data flow

`data/` (YAML, Markdown, decks, media assets) and `templates/` + `static/` are
the sources. `scripts/validate.py` checks every YAML file against `schema/`.
`scripts/build.py` deletes and recreates `site/`, so renamed or deleted content
never leaves stale output. Visualization HTML and data are copied from the
separate `visuals` repository into `site/visuals/<slug>/`.

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

Both tools and the visible search controls use `static/js/corpus.js`. The
browser fetches `corpus.json` without persistent caching and keeps it only for
the page lifetime. Authenticated authoring is intentionally separate from this
read interface.

## Notes

`data/notes.md` is the sole source of truth for notes; `site/notes.html` is
generated. Each date gets a stable link such as `notes.html#2026-09-24`, and
trailing hashtags become clickable filters validated against
`data/note-tags.json`.

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

The workflow pins a `visuals` revision whose output matches the committed
`site/`, then runs validation, the build, a `git diff --exit-code -- site`
check, and the Python and Node tests.
