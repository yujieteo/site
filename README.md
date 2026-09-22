# Personal site

A small static site generated from YAML and Markdown. It includes an About page,
searchable resource and paper-link collections, and a filterable blog.

## Project layout

```text
data/about/          About-page YAML
data/blog/           Markdown posts with YAML frontmatter
data/cv/             Site name, subtitle, and biography
data/paper-links/    Paper-link YAML
data/resources/      General resource YAML
schema/              JSON Schemas for YAML data
scripts/build.py     Static-site generator
scripts/parse_notes.py
                     Plain-text link notes to YAML converter
scripts/validate.py  YAML/schema validation
static/              Source CSS and other static assets
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

The build replaces generated HTML and static assets under `site/`, preventing
renamed or deleted posts from leaving stale pages behind.

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

## Import paper links

`parse_notes.py` accepts blank-line-separated blocks beginning with a URL:

```sh
.venv/bin/python scripts/parse_notes.py notes.txt data/paper-links/paper-links.yaml
```
