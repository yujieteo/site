# Add a slide deck

1. Build one self-contained `index.html` (all CSS, JavaScript, and data inlined) with the `generate-slide-deck` skill.
2. Save it as `data/decks/<slug>/index.html`. The build copies that file verbatim to `site/decks/<slug>/index.html`; nothing else in the folder is published, so keep the deck's presenter `notes.md` out of `data/decks/`.
3. Make the deck discoverable: link to or embed it from a blog post (see [Add a blog post](add-blog-post.md)) using a `../decks/<slug>/index.html` URL.
4. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Generated files are read-only](../principles/generated-files-are-read-only.md).
