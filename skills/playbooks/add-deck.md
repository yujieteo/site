# Add a slide deck

1. Build one self-contained `index.html` (all CSS, JavaScript, and data inlined) with the `generate-slide-deck` skill, or build the web deck of a beamerswitch talk with beamsuperswitch's `make web TALK=<slug>`, which is an `index.html` plus one SVG per slide page under `slides/<theme>/`.
2. Save it as `data/decks/<slug>/index.html`, with the beamsuperswitch deck's `slides/` folder and any printable PDFs (`talk-handout.pdf`, `talk-article.pdf`) beside it. The build copies `index.html`, `*.pdf` and `slides/**/*.svg` verbatim to `site/decks/<slug>/`; nothing else in the folder is published, so a talk's source can sit in `source/` beside it; keep the deck's presenter `notes.md` out of `data/decks/`.
3. Make the deck discoverable: link to or embed it from a blog post (see [Add a blog post](add-blog-post.md)) using a `../decks/<slug>/index.html` URL.
4. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication; the `scripts/site_diff.py` upload set lists the deck's `slides/**` images and PDFs with its `index.html`.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Generated files are read-only](../principles/generated-files-are-read-only.md).
