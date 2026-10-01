# Information gain: notes for coding agents

What should you check next to reduce your uncertainty? Start from a yes-or-no belief, list the checks you could make, and compare them by expected information gain and by information per unit of time before observing a result and updating. Live at <https://teoyujie.org/visuals/information-gain/>; its data is
published at <https://teoyujie.org/visuals/information-gain/data.json>.

## Where changes go

The source of truth is the folder `visuals/information-gain/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/information-gain).
The standalone repository [yujieteo/information-gain](https://github.com/yujieteo/information-gain)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/information-gain.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/information-gain.test.mjs
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

- `raw.json`: catalogue data published as `data.json` (the Kent scale, the survey answers, the initial scenario, examples, teaching presets, units, limits and wording thresholds). The page never fetches it; the test fails when it drifts from the engine.
- `probly.csv`: the survey file as published (zonination/perceptions at commit `51207062`); the test checks the embedded answers against it.
- Inside `index.html`: `<script id="information-gain-phrases">` (probability-language data), `<script id="information-gain-engine">` (pure core, `self.InformationGain`), `<script id="information-gain-ui">` (page and WebMCP tools) and `<script id="beamdswitch">`.
- `tests/information-gain.test.mjs` in yujieteo/site: the self-tests, the phrase data against `probly.csv`, the information measures on a grid including every 0 and 1 edge, rankings, the time budget, wording, validation, `raw.json` and the stub, the WebMCP tools and the beamdswitch deck buttons.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock or network use, so Node can load it.
- The page's own code stays under about 100 KB, not counting the embedded phrase data and the beamdswitch template; the test enforces it.
- The survey's MIT notice travels with the embedded answers, in `LICENSE` and on the page; a test checks both.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/information-gain.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo), followed by the survey data's own MIT notice and a note that Kent's essay is a US government work.
