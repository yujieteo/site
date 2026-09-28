# Personal site

A small static site generated from YAML and Markdown. It includes an About page,
searchable resource and paper-link collections, and a filterable blog.

## Project layout

```text
.github/workflows/   GitHub Actions CI
data/about/          About-page YAML
data/blog/           Markdown posts with YAML frontmatter
data/notes.md        Append-only daily notes
data/cv/             Site name, subtitle, and biography
data/paper-links/    Paper-link YAML
data/podcasts/       Podcast episode metadata and audio
data/resources/      General resource YAML
data/visuals/        Visualization metadata (assets come from the visuals repo)
schema/              JSON Schemas for YAML data
scripts/build.py     Static-site generator
scripts/kokoro_tts.py
                     Local Kokoro speech synthesis for podcast episodes
scripts/notes.py     Daily-note search and retrieval
scripts/parse_notes.py
                     Plain-text link notes to YAML converter
scripts/podcast.py   Podcast episode planner and generator
scripts/published_corpus.py
                     Published Corpus projection used by the build
scripts/validate.py  YAML/schema validation
static/              Source CSS and browser JavaScript
templates/           Shared HTML templates
tests/               Python (unittest) and Node tests
site/                Generated site
```

`site/corpus.json` is the generated Published Corpus: the explicit public
projection consumed by the human search interface and the site's read-only
WebMCP tools. It is never edited by hand.

## Build

The build needs two checkouts: this repository and the public
[`visuals`](https://github.com/yujieteo/visuals) repository that holds the
HTML and data for each visualization. `scripts/build.py` looks for the visuals
checkout at `../visuals`, `../../visuals`, then `../../tmp/visuals`; set
`VISUALS_REPO` to its path when it lives anywhere else. Without it the build
and the Python tests fail with `Visuals repository not found`.

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
export VISUALS_REPO=../visuals   # omit when the sibling checkout already exists
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
open site/index.html
```

The build recreates the generated `site/` directory from the sources, so a
successful run leaves no Git diff. Run the tests with Python and Node:

```sh
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --test tests/corpus.test.mjs
```

Python 3.13 and Node 22 are the versions CI uses; the Node tests need no
`package.json` or installed packages. The Python tests copy the repository to a
temporary directory and rebuild the site there, so they also read
`VISUALS_REPO`.

## Continuous integration

`.github/workflows/ci.yml` runs on pushes to `main` and on every pull request.
It checks out this repository and the pinned `visuals` revision side by side,
installs `requirements.txt`, then runs validation, the build, a check that the
committed `site/` matches its sources, the Python tests, and the Node tests.
The pinned visuals revision is the one whose output matches the committed
site; update the `ref` in the workflow when a visualization is republished.

## WebMCP

Every generated page registers two read-only tools when the browser supports
`document.modelContext`:

- `search_site` searches all public content by text, kind, tags, and sort order.
- `get_item` retrieves one complete Corpus Record by its stable ID.

Both tools and the visible search controls use `static/js/corpus.js`. The
browser fetches `corpus.json` without persistent caching and keeps it only for
the page lifetime. Authenticated authoring is intentionally separate from this
read interface.

The build recreates the generated `site/` directory, preventing renamed or
deleted content from leaving stale output behind. Keep source files outside it.

## Blog posts

Add a Markdown file to `data/blog/`:

```markdown
---
title: Example post
date: 2026-09-22
summary: A short description for the blog index.
category: Notes
tags: example, notes
---

Post content goes here.
```

Titles, summaries, categories, and tags are searchable. If tags are omitted,
the category is used as the fallback tag.

## Daily notes

Treat `data/notes.md` as the sole source of truth for notes; `site/notes.html` is
generated and must not be edited by hand. Insert new dated sections in descending
order near the top whenever you have a small thought, sentence, or link that does
not need to become a full blog post:

```markdown
## 2026-09-24

One sentence is enough. Normal [Markdown](https://commonmark.org/) works here. #ideas

A second paragraph becomes a separate searchable note. #reading #mathematics
```

Keep one heading per date and add new entries at the top of that date's section.
The build publishes entries newest-first and gives each date a stable link such
as `notes.html#2026-09-24`.
Blank lines separate notes. Trailing hashtags become clickable filters and are
not displayed as part of the prose; use hyphens for multi-word tags.

## Podcast episodes

Episodes are dated, roughly 30-minute audio digests of notes grouped under a
focus chosen from the most common content tags. [Generate a podcast
episode](skills/playbooks/generate-podcast.md) owns the full workflow; the
site build itself never needs the speech dependencies.

```sh
uv venv --python 3.13 .venv
uv pip install -r requirements.txt -r requirements-podcast.txt
.venv/bin/python scripts/podcast.py plan --target-minutes 30
.venv/bin/python scripts/podcast.py generate --target-minutes 30
```

`uv` is a convenience, not a requirement; `python3.13 -m venv .venv` followed
by `.venv/bin/pip install -r requirements.txt -r requirements-podcast.txt`
produces the same environment. The Kokoro packages are only needed to render
audio; validation, the build, and the tests run with `requirements.txt` alone.

Each episode writes metadata to `data/podcasts/<date>-<focus>.yaml` and MP3
audio to `data/podcasts/audio/<date>-<focus>.mp3`. The build copies the audio
into `site/podcast/audio/`, renders `site/podcast/index.html` with the latest
episode featured, renders one player page per episode, and adds a `podcast`
record to `site/corpus.json`.

## Import paper links

`parse_notes.py` accepts blank-line-separated blocks beginning with a URL:

```sh
.venv/bin/python scripts/parse_notes.py notes.txt data/paper-links/paper-links.yaml
```
