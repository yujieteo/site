# Beam diagram creator (BEAMDIAG)

An interactive shear-force and bending-moment diagram tool for straight
Euler–Bernoulli beams with pinned and fixed supports, including statically
indeterminate beams, plus an MSC Nastran `.bdf` exporter. Everything runs in
the browser; `index.html` is one self-contained file.

| File | Role |
| --- | --- |
| `engine.js` | Stiffness-method solver, exact V/M recovery, section properties, NASTRAN SOL 101 exporter. Works in the browser (`BeamDiag`) and in Node (`require`). |
| `template.html` | Page markup, styles and UI code |
| `raw.json` | Presets, materials, conventions, NASTRAN notes and sources (published as `data.json`) |
| `build.py` | Inlines `raw.json` and `engine.js` into `template.html` to write `index.html` |
| `reference.py` | Independent exact-arithmetic Python solver (Macaulay integration and compatibility) and a reader for the exported decks |
| `fixtures.json` | Shared test beams with closed-form expectations |
| `reference.json` | `reference.py` output on the fixtures, compared with `engine.js` by the tests |

```sh
python build.py              # rebuild index.html after editing template.html, engine.js or raw.json
python reference.py          # rebuild reference.json after editing fixtures.json
python reference.py --check  # fail if reference.json is stale
```

The tests are `tests/beamdiag.test.mjs` (Node) and `tests/test_beamdiag.py`
(Python, which also runs the engine through `node`).

Units are SI (m, N, Pa); loads are positive upward and couples positive
counter-clockwise; M is positive when sagging. The page lists the full
conventions and assumptions.

The exported deck puts every GRID on basic X with `PS=345`, uses one PBAR/MAT1
for the CBAR elements (orientation vector +Y, `I1` = in-plane I), SPC1 set 1
for supports (pin `12`, fixed `126`), FORCE/MOMENT/PLOAD1 load set 2, and
`PARAM,POST,0` so MSC Nastran writes an `.xdb`. The deck is checked by reading
it back and re-solving it; this project has not run it through NASTRAN.
