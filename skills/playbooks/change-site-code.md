# Change the generator, templates, or scripts

Use for edits to the build, schemas, templates, browser JavaScript, or tests, not for content.

| Area | Where |
| --- | --- |
| Static-site generator | `scripts/build.py` (imports `notes.py`, `published_corpus.py`) |
| YAML/schema checks | `scripts/validate.py`, `schema/*.schema.json` |
| Notes parsing and search | `scripts/notes.py`, `data/note-tags.json` |
| Podcast planner and TTS | `scripts/podcast.py`, `scripts/kokoro_tts.py` (needs `requirements-podcast.txt`) |
| Corpus projection | `scripts/published_corpus.py`, `schema/generated/corpus.schema.json` |
| Page shell and browser code | `templates/base.html`, `static/` |
| Tests | `tests/test_*.py` (unittest), `tests/corpus.test.mjs` (Node) |

1. Change the source, never `site/`. The build recreates `site/` from scratch.
2. If the change alters output, rebuild and commit the resulting `site/` diff; CI fails when `site/` is stale.
3. Add or update a test in `tests/` next to the behaviour you changed.
4. Run [Stage A](../verify.md#stage-a-pre-deploy).

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).
