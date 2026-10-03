# Change the generator, templates, or scripts

Use for edits to the build, schemas, templates, browser JavaScript, or tests, not for content.

| Area | Where |
| --- | --- |
| Static-site generator | `scripts/build.py` and its stage modules; [architecture](../../docs/architecture.md#data-flow) lists which module owns each stage |
| YAML/schema checks | `scripts/validate.py`, `schema/*.schema.json` |
| Notes parsing and search | `scripts/notes.py`, `data/note-tags.json` |
| Podcast planner and TTS | `scripts/podcast.py`, `scripts/kokoro_tts.py` (needs `requirements-podcast.txt`) |
| Corpus projection | `scripts/published_corpus.py`, `schema/generated/corpus.schema.json` |
| Page shell and browser code | `templates/base.html`, `static/css/style.css`, `static/js/` (`corpus.js`: corpus loader and queries; `webmcp.js`: WebMCP tools; `site-search.js`: global search; `filter.js`: list filters; `paper-bib.js` and `bibtex.js`: the Paper Links BibTeX export; `notes-views.js`: notes timeline; `post.js` and `copy-markdown.js`: blog post pages; `shell.js`: mobile menu and theme switch; `fade.js`: fades) |
| Homepage facets, featured cards, links | `data/tag-facets.yaml`, `pinned` in `data/cv/cv.yaml`, `attach_links` in `scripts/published_corpus.py` |
| Tests | `tests/test_*.py` (unittest), `tests/*.test.mjs`, `tests/*.test.cjs` (Node); `scripts/run_tests.py` runs and times both against `tests/time-budget.json` |
| Repository checks and lint | `scripts/repo_check.py` (committed artifacts, source-grep tests, review tier), `ruff.toml`, `tsconfig.json`; `scripts/verify.py` runs all of Stage A, or the type check, in one call |

1. Change the source, never `site/`. The build recreates `site/` from scratch.
2. If the change alters output, rebuild and review it with `scripts/site_diff.py` (see [Deploy generated files](deploy.md)). Never commit `site/`; Git ignores it and CI builds it.
3. Add or update a test in `tests/` next to the behaviour you changed, keeping it cheap and timed as [Site test cost](add-visualization.md#site-test-cost) says. The test runs the code: `scripts/repo_check.py` reports a test that reads a code file and matches its text instead of running it ([Stage A](../verify.md#stage-a-pre-deploy)).
4. Keep the JavaScript you touch (`static/js/`, `scripts/`, `tests/`) typed with JSDoc so `npm run typecheck` passes, with no unused locals or parameters; files stay `.js` with no build step ([README](../../README.md#test)). Keep the Python free of unused imports and variables, which `ruff check` reports (`ruff.toml`).
5. Run [Stage A](../verify.md#stage-a-pre-deploy).

UI motion is fades only. Use the `--fade-duration` / `--fade-ease` tokens in
`static/css/style.css` for any new transition or appear animation (the `fade-in`
keyframes run towards visible, never from a hidden start), use `fadeIn` /
`fadeOut` from `static/js/fade.js` for state changes CSS cannot see, and keep
everything inside the `prefers-reduced-motion: reduce` guard. Hide content at
once (or make it `inert` while it fades out) so nothing stays invisible but
focusable. `tests/test_site_shell.py` checks the tokens and the guard.
Colour tokens keep WCAG AA contrast in both themes, and the two copies of the
dark theme stay equal; `tests/test_theme_contrast.py` checks both.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).
