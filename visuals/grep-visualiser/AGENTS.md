# Grep Visualiser: notes for coding agents

A live match visualiser and scratchpad: paste text, type a pattern and see what ripgrep 14, GNU grep 3.x, PowerShell 7 and VS Code (Find and Search) would match, with an honest confidence level for each emulation. Live at <https://teoyujie.org/visuals/grep-visualiser/>; its data is
published at <https://teoyujie.org/visuals/grep-visualiser/data.json>.

## Where changes go

The source of truth is the folder `visuals/grep-visualiser/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/grep-visualiser).
The standalone repository [yujieteo/grep-visualiser](https://github.com/yujieteo/grep-visualiser)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/grep-visualiser.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/grep-visualiser.test.mjs
```

Before opening a pull request, run the repository's Stage A checks
([skills/verify.md](https://github.com/yujieteo/site/blob/main/skills/verify.md))
from the root of the yujieteo/site checkout:

```sh
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --test 'tests/*.test.{mjs,cjs}' 'visuals/md-explorer/tests/*.test.mjs'
```

The build and the Python tests need the separate `visuals` checkout; set
`VISUALS_REPO` when it is not a sibling directory (see the
[README](https://github.com/yujieteo/site#build)).

## Data and tests

- `raw.json`: published metadata, the engine's `META` (presets, confidence levels, matching models, flags and replace syntaxes); it must equal `META`, and the test fails when it drifts.
- Inside `index.html`: `<script id="grep-engine">` (pure core, `self.GrepViz`, also run in the page's Web Worker) and `<script id="grep-ui">` (page, worker runner and WebMCP tools).
- `tests/grep-visualiser.test.mjs` in yujieteo/site extracts the engine from `index.html` and checks each dialect's translation, the matching models, quoting, the replace syntaxes and that the page makes no network calls.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock, randomness or network use. Matching runs in a Worker built from a Blob of the engine script, with a 1.5 s timeout.
- Keep the Content-Security-Policy (`connect-src 'none'`, `worker-src blob:`).
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- This tool exports no beamdswitch deck. A deck added later uses the site's standard template, `templates/beamdswitch.js`, and declares the narration voice `bf_emma`.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/grep-visualiser.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
