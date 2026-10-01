# Phasor and Impedance Visualiser: notes for coding agents

What a series or parallel RLC circuit does in sinusoidal steady state: a rotating phasor diagram, the impedance (and admittance) plane, waveforms and an optional power triangle, with every number in a readout. Live at <https://teoyujie.org/visuals/phasors/>; its data is
published at <https://teoyujie.org/visuals/phasors/data.json>.

## Where changes go

The source of truth is the folder `visuals/phasors/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/phasors).
The standalone repository [yujieteo/phasors](https://github.com/yujieteo/phasors)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/phasors.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. There is no build step: edit `index.html` directly. Check this tool alone with:

```sh
node --test tests/phasors.test.mjs
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

- `raw.json`: published metadata (`META`: scope, conventions, ranges, presets, default state, degenerate cases, sources), `schemaVersion` and the default inputs as `example`; it must equal the engine's `META` and `defaultInputs()`, and the test fails when it drifts.
- Inside `index.html`: `<script id="ph-engine">` (pure core, `self.Phasors`: circuit, formatter, diagram scenes, SVG, hash, JSON, report, deck and self-tests) and `<script id="ph-ui">` (page, animation and WebMCP tools).
- `tests/phasors.test.mjs` in yujieteo/site: the self-tests, the hand-calculated default, presets, degenerate cases, range corners, formatter boundaries, hash and JSON round trips, deck and report structure and determinism, the WebMCP tools and that no network request is attempted.

## Conventions

- One self-contained `index.html`: no external scripts, stylesheets, fonts or network requests. It works offline.
- The engine makes no DOM, storage, clock, randomness, `Intl` or locale calls, so its report and deck are byte-for-byte deterministic.
- `index.html` stays under 120 KB; the test enforces it.
- Files hold canonical units only: Ω, H, F, Hz, V (RMS) and degrees.
- Tests use Node's built-in runner (`node --test`) only; never add Vitest, Jest, a `package.json` or another test framework.
- The engine builds the beamdswitch deck itself and declares the narration voice `bf_emma` in its front matter; `tests/beamdswitch-voice.test.mjs` checks it.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/phasors.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
