# Infer a Theory: notes for coding agents

From observations to effective actions and renormalisation: plain-English observations of a fluctuating quantity become a maximum-entropy effective theory with a posterior over its couplings, a renormalisation-group flow, compatible finer-scale theories and the next measurement ranked by expected information gain. Live at <https://teoyujie.org/visuals/infer-a-theory/>; its data is
published at <https://teoyujie.org/visuals/infer-a-theory/data.json>.

## Where changes go

The source of truth is the folder `visuals/infer-a-theory/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/infer-a-theory).
The standalone repository [yujieteo/infer-a-theory](https://github.com/yujieteo/infer-a-theory)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/infer-a-theory.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/infer-a-theory.test.mjs
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

- `raw.json`: catalogue data published as `data.json` (operators, defaults, limits, the worked example, the dictionary and the phrase-data provenance). The page never fetches it; the test fails when it drifts from the engine.
- `probly.csv`: the survey answers as published (zonination/perceptions at commit `5120706`), published beside the page as an asset; the page embeds the same numbers and a test keeps them equal.
- Inside `index.html`: `<script id="infer-a-theory-phrases">` (probability-language data), `<script id="infer-a-theory-engine">` (pure core, `self.InferTheory`), `<script id="infer-a-theory-ui">` (page and WebMCP tools) and `<script id="beamdswitch">`.
- `tests/infer-a-theory.test.mjs` in yujieteo/site: the parser, phrase calibration against `probly.csv` and Kent's table, the solvers, maximum-entropy fits, decimation, relevance, the worked example end to end, determinism, `raw.json` and the stub, the WebMCP tools and the beamdswitch deck buttons.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock, randomness or network use; results are deterministic.
- A Content-Security-Policy forbids network requests; keep it.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/infer-a-theory.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo), followed by the survey's MIT notice and a note that Kent's essay is a US government work.
