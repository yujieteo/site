# AGENTS.md: Convexity Action Engine

A searchable decision engine for everyday actions: press Ctrl/⌘ K, type what you are considering, and see it in your Singapore context, screened for ruin first and then compared on payoff shape against opportunity-cost alternatives. Live at <https://teoyujie.org/visuals/convexity-action-engine/>.

## Source of truth

This folder is `visuals/convexity-action-engine/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/convexity-action-engine), and that is the source of truth. The standalone repository [yujieteo/convexity-action-engine](https://github.com/yujieteo/convexity-action-engine) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

| File | Role |
| --- | --- |
| `author.py` | Writes `raw.json`: the action ontology, every number an ordinal author judgement |
| `raw.json` | The dataset (published as `data.json`) |
| `derive_atus.py` | Derives `atus_observed.csv` from American Time Use Survey microdata (needs pandas and rdata, and a CRAN `atus` checkout) |
| `atus_observed.csv` | Observed ATUS participation and duration per code |
| `engine.js` | The pure decision engine |
| `beamdswitch.js` | The site's standard beamdswitch report template, an unchanged copy of `templates/beamdswitch.js` |
| `build.py` | Writes `index.html` and the spreadsheet views `actions.csv`, `aliases.csv` and `sources.csv`; `--verify` checks they are fresh |
| `index.html` | Generated: never edit it by hand |

Tests live upstream, outside this folder: `tests/convexity-action-engine.test.mjs`, `tests/convexity-action-engine-beamdswitch.test.mjs` and `tests/test_convexity_action_engine.py`.

## Build, test and verify

Run from the root of a yujieteo/site checkout (set up as its README says):

```sh
.venv/bin/python visuals/convexity-action-engine/author.py          # after editing author.py
.venv/bin/python visuals/convexity-action-engine/build.py           # regenerate index.html and the CSVs
.venv/bin/python visuals/convexity-action-engine/build.py --verify  # check they are fresh
node --test tests/convexity-action-engine.test.mjs tests/convexity-action-engine-beamdswitch.test.mjs
.venv/bin/python scripts/build.py                                   # needs VISUALS_REPO; see the site README
.venv/bin/python -m unittest discover -s tests -p 'test_convexity_action_engine.py'
```

## Conventions

- `index.html` is one self-contained HTML file with its CSS, JavaScript and data inlined; it makes no external requests (source URLs are citations only).
- Label every number as judgement, model or personal, as the page does; do not present a judgement as a measurement.
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template and declares `voice: bf_emma` in its front matter.
