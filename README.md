# Personal site

A small static site generated from YAML and Markdown. It includes an About page,
searchable resource and paper-link collections, and a filterable blog.

## Project layout

```text
data/about/          About-page YAML
data/blog/           Markdown posts with YAML frontmatter
data/notes.md        Append-only daily notes
data/cv/             Site name, subtitle, and biography
data/paper-links/    Paper-link YAML
data/resources/      General resource YAML
schema/              JSON Schemas for YAML data
scripts/build.py     Static-site generator
scripts/parse_notes.py
                     Plain-text link notes to YAML converter
scripts/validate.py  YAML/schema validation
static/              Source CSS and browser JavaScript
templates/           Shared HTML templates
site/                Generated site
```

## Build

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
open site/index.html
```

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

## Import paper links

`parse_notes.py` accepts blank-line-separated blocks beginning with a URL:

```sh
.venv/bin/python scripts/parse_notes.py notes.txt data/paper-links/paper-links.yaml
```
