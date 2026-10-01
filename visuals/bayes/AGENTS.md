# Bayesian reasoning in plain English: notes for coding agents

A Bayesian reasoning trainer and back-of-envelope calculator: probability phrases such as “likely” read against Sherman Kent's 1964 scale and a survey of real readers, then updated with evidence. Live at <https://teoyujie.org/visuals/bayes/>; its data is
published at <https://teoyujie.org/visuals/bayes/data.json>.

## Where changes go

The source of truth is the folder `visuals/bayes/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/bayes).
The standalone repository [yujieteo/bayes](https://github.com/yujieteo/bayes)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/bayes.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/bayes.test.mjs
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

- `raw.json`: catalogue data published as `data.json` (the Kent scale, the survey answers, the example scenarios and the initial state). The page never fetches it; the test fails when it drifts from the page.
- `probly.csv`: the survey file as published (zonination/perceptions at commit `51207062`); the test checks the answers embedded in `index.html` against it.
- Inside `index.html`: `<script id="bayes-data">` (embedded data), `<script id="bayes-engine">` (pure core, `self.Bayes`), `<script id="bayes-ui">` (page and WebMCP tools) and `<script id="beamdswitch">`.
- `tests/bayes.test.mjs` in yujieteo/site: the engine, the phrase data against `probly.csv`, `raw.json` and the stub, the static reference rows, the offline promises, the WebMCP tools and the beamdswitch deck buttons.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine (`<script id="bayes-engine">`) has no DOM, storage, clock or network use, so Node can load it.
- The static reference-table rows are the output of `Bayes.staticRows()`; regenerate them when the engine changes (the test fails when they drift).
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/bayes.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo), followed by the survey data's own MIT notice and a note that Kent's essay is a US government work.
