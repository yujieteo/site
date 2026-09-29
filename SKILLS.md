---
name: maintain-site-content
description: Route work on the personal site (notes, blog, media, decks, visuals, papers, build code, deploy) to the one playbook that owns it.
---

# Maintain site content

This file routes work. It does not contain workflow steps. Open only the row that matches; do not read the whole `skills/` tree.

Read [CONTEXT.md](CONTEXT.md) for the meanings of Published Corpus, Corpus Record, and Authenticated Authoring. Read the [README](README.md) for layout and build commands.

| Task | Playbook |
| --- | --- |
| Add a dated note | [Add a note](skills/playbooks/add-note.md) |
| Search or retrieve dated notes | [Search notes](skills/playbooks/search-notes.md) |
| Add a blog post | [Add a blog post](skills/playbooks/add-blog-post.md) |
| Add a slide deck | [Add a slide deck](skills/playbooks/add-deck.md) |
| Add or republish a visualization | [Add or republish a visualization](skills/playbooks/add-visualization.md) |
| Generate a podcast episode | [Generate a podcast episode](skills/playbooks/generate-podcast.md) |
| Add an explainer video | [Add an explainer video](skills/playbooks/add-media-video.md) |
| Add a paper link or resource | [Add a paper link or resource](skills/playbooks/add-paper-link-or-resource.md) |
| Change the generator, templates, scripts, or tests | [Change the generator](skills/playbooks/change-site-code.md) |
| Deploy generated files | [Deploy generated files](skills/playbooks/deploy.md) |

Every playbook that changes published content ends at [verification](skills/verify.md); deployment ends at [post-deploy verification](skills/verify-post-deploy.md). Do not repeat verification instructions in a playbook.

Each playbook links the principles that apply to its task (`skills/principles/`). Reference detail such as the podcast [focus selection](skills/reference/podcast-focus-selection.md) and [output contract](skills/reference/podcast-output-contract.md) is linked from the playbook that needs it.
