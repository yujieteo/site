# Queue time: notes for coding agents

How long will this queue take? A phone-first estimator for someone standing in a real queue, with a second mode for food orders. Live at <https://teoyujie.org/visuals/queue-time/>; its data is
published at <https://teoyujie.org/visuals/queue-time/data.json>.

## Where changes go

The source of truth is the folder `visuals/queue-time/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/queue-time).
The standalone repository [yujieteo/queue-time](https://github.com/yujieteo/queue-time)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/queue-time.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/queue-time.test.mjs
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

- `raw.json`: catalogue data published as `data.json` (the initial state, presets, limits, model constants and assumptions). The page never fetches it; the test fails when it drifts from the engine.
- Inside `index.html`: `<script id="queue-time-engine">` (pure core, `self.QueueTime`, with the seeded queue simulation), `<script id="queue-time-ui">` (page and WebMCP tools) and `<script id="beamdswitch">`.
- `tests/queue-time.test.mjs` in yujieteo/site: the estimator and its edge cases, rounding, comparison wording, back-estimation, timers, food ranges, `raw.json` and the stub, the WebMCP tools and the beamdswitch deck buttons.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock or network use; 400 runs with a fixed seed give the same numbers for the same inputs.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/queue-time.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
