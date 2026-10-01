# Fermi estimator: notes for coding agents

A back-of-the-envelope estimation tool: break a hard question into a few rough factors, each with a low, best and high value, and see the estimate, the exact range those values imply and which assumption matters most. Live at <https://teoyujie.org/visuals/fermi/>; its data is
published at <https://teoyujie.org/visuals/fermi/data.json>.

## Where changes go

The source of truth is the folder `visuals/fermi/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/fermi).
The standalone repository [yujieteo/fermi](https://github.com/yujieteo/fermi)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/fermi.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/fermi.test.mjs
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

- `raw.json`: catalogue data published as `data.json` (the default estimate, the examples, the rules and the messages). The page never fetches it; the test fails when it drifts from the engine.
- Inside `index.html`: `<script id="fermi-engine">` (pure core, `self.Fermi`, with in-source self-tests run on the page with `?selftest`), `<script id="fermi-ui">` (page and WebMCP tools) and `<script id="beamdswitch">`.
- `tests/fermi.test.mjs` in yujieteo/site: the spec's self-tests, invalid input, formatting, units, sanity checks, the copy summary, `raw.json` and the stub, the WebMCP tools and the beamdswitch deck buttons.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine has no DOM, storage, clock or network use, so Node can load it.
- `index.html` stays under 100,000 bytes; the test enforces it.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/fermi.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
