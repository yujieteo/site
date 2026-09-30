# Change the generator, templates, or scripts

Use for edits to the build, schemas, templates, browser JavaScript, or tests, not for content.

| Area | Where |
| --- | --- |
| Static-site generator | `scripts/build.py` (imports `notes.py`, `published_corpus.py`) |
| YAML/schema checks | `scripts/validate.py`, `schema/*.schema.json` |
| Notes parsing and search | `scripts/notes.py`, `data/note-tags.json` |
| Podcast planner and TTS | `scripts/podcast.py`, `scripts/kokoro_tts.py` (needs `requirements-podcast.txt`) |
| Corpus projection | `scripts/published_corpus.py`, `schema/generated/corpus.schema.json` |
| Page shell and browser code | `templates/base.html`, `static/` (`shell.js`: mobile menu and theme switch; `filter.js`: list filters; `notes-views.js`: notes timeline) |
| Homepage facets, featured cards, links | `data/tag-facets.yaml`, `pinned` in `data/cv/cv.yaml`, `attach_links` in `scripts/published_corpus.py` |
| Tests | `tests/test_*.py` (unittest), `tests/*.test.mjs`, `tests/*.test.cjs` (Node) |

1. Change the source, never `site/`. The build recreates `site/` from scratch.
2. If the change alters output, rebuild and review it with `scripts/site_diff.py` (see [Deploy generated files](deploy.md)). Never commit `site/`; Git ignores it and CI builds it.
3. Add or update a test in `tests/` next to the behaviour you changed.
4. Run [Stage A](../verify.md#stage-a-pre-deploy).

UI motion is fades only. Use the `--fade-duration` / `--fade-ease` tokens in
`static/css/style.css` for any new transition or appear animation (the `fade-in`
keyframes run towards visible, never from a hidden start), use `fadeIn` /
`fadeOut` from `static/js/fade.js` for state changes CSS cannot see, and keep
everything inside the `prefers-reduced-motion: reduce` guard. Hide content at
once (or make it `inert` while it fades out) so nothing stays invisible but
focusable. `tests/test_site_shell.py` checks the tokens and the guard.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).
