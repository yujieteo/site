# From Packets to Playback: notes for coding agents

Probability, information and renormalisation in a live stream: a streaming calculator chooses the bitrate of the next segment, and Show why unfolds the Euclidean field-theory notation behind it as a language for probability and information theory. Every trace is synthetic and seeded. Live at <https://teoyujie.org/visuals/packets-to-playback/>; its data is
published at <https://teoyujie.org/visuals/packets-to-playback/data.json>.

## Where changes go

The source of truth is the folder `visuals/packets-to-playback/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/packets-to-playback).
The standalone repository [yujieteo/packets-to-playback](https://github.com/yujieteo/packets-to-playback)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/packets-to-playback.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/packets-to-playback.test.mjs
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

- `raw.json`: catalogue data published as `data.json` (the initial scenario, rungs, presets, candidate models, limits, model constants and assumptions). The page never fetches it; the test fails when it drifts from the engine.
- Inside `index.html`: `<script id="packets-to-playback-engine">` (pure core, `self.PacketsPlayback`), `<script id="packets-to-playback-ui">` (page and WebMCP tools) and `<script id="beamdswitch">`.
- `tests/packets-to-playback.test.mjs` in yujieteo/site: the special functions, the decision and its edge cases, determinism for the fixed seed, the Gaussian AR(1) action, block aggregation, the truncated projection, the bottleneck, `raw.json` and the stub, the WebMCP tools, Reset and the beamdswitch deck buttons.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock or network use; every trace comes from a fixed seed.
- `index.html` stays at about 200 kB or less; the test enforces it.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/packets-to-playback.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
