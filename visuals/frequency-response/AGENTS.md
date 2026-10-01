# Frequency-Response Visualiser: notes for coding agents

An exploration tool for linear feedback loops in the frequency domain: SISO or MIMO, continuous or discrete time, with Bode, singular-value, Nyquist, Nichols and pole-zero views and their margins. Not a substitute for a verified control-design toolchain. Live at <https://teoyujie.org/visuals/frequency-response/>; its data is
published at <https://teoyujie.org/visuals/frequency-response/data.json>.

## Where changes go

The source of truth is the folder `visuals/frequency-response/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/frequency-response).
The standalone repository [yujieteo/frequency-response](https://github.com/yujieteo/frequency-response)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/frequency-response.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/frequency-response.test.mjs
```

Before opening a pull request, run the repository's Stage A checks
([skills/verify.md](https://github.com/yujieteo/site/blob/main/skills/verify.md))
from the root of the yujieteo/site checkout:

```sh
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --test 'tests/*.test.{mjs,cjs}' 'visuals/sectionlab/tests/*.test.mjs' 'visuals/md-explorer/tests/*.test.mjs'
```

The build and the Python tests need the separate `visuals` checkout; set
`VISUALS_REPO` when it is not a sibling directory (see the
[README](https://github.com/yujieteo/site#build)).

## Data and tests

- `raw.json`: published metadata (scope, conventions, assumptions, sources, presets, threshold defaults) and the default example; it must equal the engine's `META` and `defaultInputs()`, and the test fails when it drifts.
- Inside `index.html`: `<script id="fr-engine">` (pure core, `self.FreqResponse`) and `<script id="fr-ui">` (page, plots and WebMCP tools).
- `tests/frequency-response.test.mjs` in yujieteo/site extracts the engine from `index.html`, runs the in-page self-tests and further analytic checks, and exercises the WebMCP tools.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock or randomness; the linear-algebra kernel is hand-written.
- The page keeps its permanent “exploration only” banner, and every export repeats it.
- Files hold canonical units (rad/s, seconds, absolute magnitude, degrees); display toggles change only what is shown.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- This tool exports no beamdswitch deck. A deck added later uses the site's standard template, `templates/beamdswitch.js`, and declares the narration voice `bf_emma`.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/frequency-response.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
