# Beam diagram creator (BEAMDIAG)

An interactive shear-force and bending-moment diagram tool for straight
Euler–Bernoulli beams with pinned and fixed supports, including statically
indeterminate beams, plus an MSC Nastran `.bdf` exporter. Everything runs in
the browser; `index.html` is one self-contained file.

This copy tracks [yujieteo/beamdiag](https://github.com/yujieteo/beamdiag)
(commit `bb6d349`). The site keeps its own breadcrumb (back to Visuals), the
catalogue entry in `data/visuals/beamdiag.yaml`, the WebMCP tool checks and
the page tests below, and three page fixes: the section cursor line ignores
the pointer, so a handle can be dragged through it; axis ranges and load-arrow
scales are found with loops rather than `Math.max(...values)` (so any sample
or load count draws); and an unsolvable edit greys the extremes and the values
table as well as the diagrams. Everything else here should match that repository.

| File | Role |
| --- | --- |
| `engine.js` | Stiffness-method solver, exact V/M recovery, section properties, NASTRAN SOL 101 exporter, number formatting and the beam's beamdswitch report (`beamReport`). Works in the browser (`BeamDiag`) and in Node (`require`). |
| `beamdswitch.js` | The standard beamdswitch report template (`deck(report)` writes a report as a beamdswitch Markdown deck); a copy of the site's shared [`templates/beamdswitch.js`](../../templates/beamdswitch.js), kept identical by the tests |
| `template.html` | Page markup, styles and UI code |
| `raw.json` | Presets, materials, conventions, NASTRAN notes and sources (published as `data.json`) |
| `build.py` | Inlines `raw.json`, `engine.js` and `beamdswitch.js` into `template.html` to write `index.html` |
| `reference.py` | Independent exact-arithmetic Python solver (Macaulay integration and compatibility) and a reader for the exported decks |
| `fixtures.json` | Shared test beams with closed-form expectations |
| `reference.json` | `reference.py` output on the fixtures, compared with `engine.js` by the tests |

```sh
python build.py              # rebuild index.html after editing template.html, engine.js, beamdswitch.js or raw.json
python reference.py          # rebuild reference.json after editing fixtures.json
python reference.py --check  # fail if reference.json is stale
```

The tests are `tests/beamdiag.test.mjs`, `tests/beamdiag-ui.test.mjs`,
`tests/beamdiag-review-regressions.test.mjs`, `tests/beamdiag-figure.test.mjs`
and `tests/beamdiag-beamdswitch.test.mjs` (Node; the last three run the built page in the stand-in DOM of
`tests/beamdiag-page-harness.mjs`), and `tests/test_beamdiag.py` and
`tests/test_beamdiag_random.py` (Python, which also run the engine through
`node`). The beamdswitch test parses the decks with a read-only copy of
beamdswitch's deck and plot parsers in `tests/fixtures/beamdswitch/`. [beamdiag's docs/verification.md](https://github.com/yujieteo/beamdiag/blob/main/docs/verification.md)
lists what each checks.

`tests/beamdiag-browser.test.mjs` drags a handle with real mouse events in
Chrome, so it is skipped unless `BEAMDIAG_BROWSER_URL` points at a Chrome
started with remote debugging. CI does not run it; run it by hand from the
repository root after changing the page's handles or overlays:

```sh
# start an isolated Chrome with remote debugging (macOS path shown; use your Chrome binary elsewhere)
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --remote-debugging-port=9227 --user-data-dir="$(mktemp -d)" --allow-file-access-from-files &
BEAMDIAG_BROWSER_URL=http://127.0.0.1:9227 node --test tests/beamdiag-browser.test.mjs
```

Supports, loads and elements per segment have no count cap: supports go at any
positions along a beam of any length, and the banded stiffness solver and the
deck exporter handle every node and support.

The page reads and shows every value in one consistent unit convention: SI
N, mm, MPa (the default); SI kN, m, kPa; SI N, m, Pa; US customary lbf, in,
psi; or US customary kip, in, ksi. The engine always solves in SI (m, N, Pa),
so switching converts what was entered and never changes the results; the
WebMCP tools take and return SI. x is measured from the left end or, if chosen,
from mid-span (−L/2 to +L/2); that changes only the positions typed and shown.
Loads are positive upward and couples positive counter-clockwise; M is
positive when sagging. The page lists the full conventions and assumptions.

Every diagram has labelled x and y axes in the chosen units. The diagrams with
every result can be saved as PNG, SVG or a one-page PDF, drawn in the page and
saved straight to the device.

The beamdswitch button saves the beam as a narrated talk for
[beamdswitch](https://teoyujie.org/visuals/beamdswitch/): one Markdown deck
with the set-up, the method, the results with their plots, and the checks,
with spoken narration on every slide, written with the site's standard report
template ([`templates/beamdswitch-report.md`](../../templates/beamdswitch-report.md)).
Open it in beamdswitch to get slides, a handout, narration and a video. If the
browser blocks the download, the deck is copied to the clipboard instead.

The exported deck is laid out as it would be written by hand: small-field bulk
data under `$` comment banners, switching a group to large field only when a
value needs it. Every GRID is on basic X with `PS=345` set once on GRDSET, one
PBAR/MAT1 serves the CBAR elements (orientation vector +Y, `I1` = in-plane I),
SPC1 set 1 holds the supports (pin `12`, fixed `126`), FORCE/MOMENT/PLOAD1 are
load set 2, and `PARAM,POST,0` makes MSC Nastran write an `.xdb`. Its numbers
are in the page's unit convention, named on the `$ Units` comment line. The deck is checked by reading
it back and re-solving it; this project has not run it through NASTRAN.
