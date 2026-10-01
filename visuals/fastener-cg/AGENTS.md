# Fastener Pattern CG Tracker: notes for coding agents

Centroids, section properties and elastic load distribution for a bolt or rivet group under a general 3D eccentric load, with interaction margins, prying and preload, plate bearing and tear-out, and an instantaneous-centre-of-rotation (ICR) solve. For preliminary sizing. Live at <https://teoyujie.org/visuals/fastener-cg/>; its data is
published at <https://teoyujie.org/visuals/fastener-cg/data.json>.

## Where changes go

The source of truth is the folder `visuals/fastener-cg/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/fastener-cg).
The standalone repository [yujieteo/fastener-cg](https://github.com/yujieteo/fastener-cg)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/fastener-cg.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. `index.html` and `raw.json` are build outputs. Edit `src/`, then rebuild and
test:

```sh
node visuals/fastener-cg/build.mjs          # rebuild after editing src/
node visuals/fastener-cg/build.mjs --check  # fail if the outputs are stale
node --test tests/fastener-cg.test.mjs      # core, persistence, scene, WebMCP and build tests
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

- `src/core/*.mjs`: the dependency-free calculation core (ES modules), including the verification set in `src/core/verify.mjs`.
- `src/ui/*.mjs`: page controller, canvas painter, localStorage library and the WebMCP tools (`src/ui/webmcp.mjs`).
- `src/template.html`: markup and styles with one `/*@APP@*/` marker.
- `raw.json`: published metadata written by `build.mjs` (published as `data.json`).
- `tests/fastener-cg.test.mjs` in yujieteo/site imports the modules under `src/` directly and runs the same verification cases as the page's “Run verification” button, plus persistence, scene, WebMCP and build checks.

## Conventions

- One self-contained `index.html`, assembled by the build: no external scripts, stylesheets, fonts or network requests. It works offline.
- Never edit the generated `index.html` or `raw.json`; change `src/` and rerun `build.mjs`.
- The bundler in `build.mjs` accepts only named relative imports and `export` on `function`, `const` and `class` declarations.
- Results are for preliminary sizing and hand-calculation cross-checks; reports carry the “Preliminary sizing” line.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- This tool exports no beamdswitch deck. A deck added later uses the site's standard template, `templates/beamdswitch.js`, and declares the narration voice `bf_emma`.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/fastener-cg.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
