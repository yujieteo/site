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
| Content scaffolds | `scripts/new_post.py`, `scripts/add_note.py`, `scripts/add_video.py`, `scripts/add_deck.py`, `scripts/add_links.py` (the content playbooks run them) |
| Codemods | `scripts/rename.py`, `scripts/move_links.py`, `scripts/sync_beamdswitch.py`, `scripts/jsdoc_types.py`, `scripts/source_grep_rewrite.py`; each has `--help` and `--check` |

1. Change the source, never `site/`. The build recreates `site/` from scratch.
2. If the change alters output, rebuild and review it with `scripts/site_diff.py` (see [Deploy generated files](deploy.md)). Never commit `site/`; Git ignores it and CI builds it.
3. Add or update a test in `tests/` next to the behaviour you changed, keeping it cheap and timed as [Site test cost](add-visualization.md#site-test-cost) says. The test runs the code: `scripts/repo_check.py` reports a test that reads a code file and matches its text instead of running it ([Stage A](../verify.md#stage-a-pre-deploy)). Run `.venv/bin/python scripts/source_grep_rewrite.py --check`: it rewrites the clear case (an `assertIn("NAME = <literal>", ...)` on a `scripts/` module) into an import of the module, and lists every other case, which you rewrite by hand.
4. Keep the JavaScript you touch (`static/js/`, `scripts/`, `tests/`) typed with JSDoc so `npm run typecheck` passes, with no unused locals or parameters; files stay `.js` with no build step ([README](../../README.md#test)). When the type check reports a parameter with an implicit `any`, run `.venv/bin/python scripts/jsdoc_types.py`: it adds the type that the same file already gives a parameter of that name, and lists the rest, whose types you choose. Keep the Python free of unused imports and variables, which `ruff check` reports (`ruff.toml`).
5. For a mechanical rename, use the codemod, not a text replace: `.venv/bin/python scripts/rename.py tag|field|css-token <old> <new>` renames a tag, a blog front-matter field or a CSS custom property through the parsed sources and lists the code it leaves for you. A tag rename refuses while a resource with no `tags` has that tag as its `category`; add `tags:` or change the category first. It edits YAML through PyYAML's node positions, and CSS and JavaScript through the ast-grep parser (`ast-grep-py`, pinned in `requirements.txt`), so comments, strings and class names such as `.btn--primary` stay; after `git mv` of a file or folder, `.venv/bin/python scripts/move_links.py <old> <new>` rewrites the links to it in the agent and rule files; after a change to `templates/beamdswitch.js`, `.venv/bin/python scripts/sync_beamdswitch.py` copies it into each copy here (see [Narrated reports](add-visualization.md#narrated-reports)). Each takes `--check` to list the changes first.
6. Run [Stage A](../verify.md#stage-a-pre-deploy).

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
