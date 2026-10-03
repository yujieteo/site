---
title: "How this site is built"
summary: "How the pages, notes, visuals and media on this site are made, checked and published."
---

This is a static site generated from plain files. Nothing runs on the server
except file hosting; search and filtering happen in your browser.

## Content

- **Notes** live in one append-only file, `data/notes.md`. Each note sits under
  a dated heading and ends in tags from a registry, `data/note-tags.json`.
  Notes are never rewritten to mark them done: an item that answers an open
  question links to it instead, or a dated closing note lists it and only its
  `todo` tag is removed, and the [open questions](open-questions.html) page
  shows the result.
- **Paper links and resources** are YAML files. Paper-link tags come from
  keyword rules and arXiv subject classes. On the Paper Links page you can tick
  the links you want, or filter the list, and copy or download BibTeX for just
  those links; your browser builds it from the site's data.
- **Blog posts** are Markdown files with a small YAML header.
- **Visuals** are built by small scripts, most of them in a separate public
  [visuals repository](https://github.com/yujieteo/visuals) that this site pins
  to an exact revision. Each publishes its data alongside the page.
- **Media** (podcast episodes and explainer videos) is produced locally.
  Episodes are condensed from the notes, and each lists the notes it used.
- Everything public is indexed in `corpus.json`, the Published Corpus. Each
  record has a stable id and a content revision, so tools can tell when
  something changed. The site search, the page filters and two read-only
  [WebMCP](https://github.com/webmachinelearning/webmcp) tools for AI agents
  all read that one file.

## Build and checks

- `scripts/validate.py` checks every data file against a JSON Schema, and
  `scripts/build.py` turns the data into the pages in `site/`. It fails when a
  typed link between items points at something that does not exist.
- Continuous integration builds the site fresh and runs the Python and Node
  tests against that build. The generated output is not committed.
- Motion is limited to short fades, and it switches off when your system asks
  for reduced motion. Pages work without JavaScript; search and filters need it.

## Playbooks

Routine tasks (add a note, publish a visual, generate an episode, deploy) are
written as step-by-step playbooks in `skills/playbooks/`, meant to be followed
by a person or an AI agent.

## AI assistance

Parts of this site are made with the assistance of AI. The notes and
judgements are mine; drafting, building and checking are often shared.

## Source

The source is public at
[github.com/yujieteo/site](https://github.com/yujieteo/site).
