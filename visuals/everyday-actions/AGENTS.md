# AGENTS.md: Everyday Actions

Everyday activities plotted by how often people do them (ATUS 2014-2016) and how they feel doing them (Kahneman et al. 2004), with 100 common actions placed on regret, downside, upside and information axes. Live at <https://teoyujie.org/visuals/everyday-actions/>.

## Source of truth

This folder is `visuals/everyday-actions/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/everyday-actions), and that is the source of truth. The standalone repository [yujieteo/everyday-actions](https://github.com/yujieteo/everyday-actions) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

| File | Role |
| --- | --- |
| `drm_table1.csv` | Transcription of Kahneman et al. (2004), Science 306:1777, Table 1 |
| `atus_estimates.csv` | Output of `derive_atus.py` (ATUS 2014-2016 microdata) |
| `derive_atus.py` | Derives `atus_estimates.csv` from a CRAN `atus` checkout (needs pandas and rdata) |
| `crosswalk.csv` | Activity ↔ DRM row ↔ ATUS tier codes |
| `decisions.csv` | 100 actions with authored ordinal codes (not measurements) |
| `evidence.json` | Studies cited by `decisions.csv` and the reconsideration section |
| `methodology.md` | How the numbers were derived |
| `report.js` | The page's axes and current view as a beamdswitch report |
| `beamdswitch.js` | The site's standard beamdswitch report template, an unchanged copy of `templates/beamdswitch.js` |
| `build.py` | Writes `data.csv` and `sources.json` and rewrites the dataset, template and report blocks of `index.html` |
| `data.csv` | Generated: one row per activity, missing values empty (the published data file) |

Tests live upstream, outside this folder: `tests/everyday-actions-beamdswitch.test.mjs` and `tests/test_everyday_actions.py`.

## Build, test and verify

Run from the root of a yujieteo/site checkout (set up as its README says):

```sh
.venv/bin/python visuals/everyday-actions/build.py   # regenerate data.csv, sources.json and index.html
node --test tests/everyday-actions-beamdswitch.test.mjs
.venv/bin/python scripts/build.py                    # needs VISUALS_REPO; see the site README
.venv/bin/python -m unittest discover -s tests -p 'test_everyday_actions.py'
```

## Conventions

- `index.html` is one self-contained HTML file with its CSS, JavaScript and data inlined; it makes no external requests.
- Empty means not measured: never fill a missing value. Authored codes in `decisions.csv` stay labelled as codes, not measurements.
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template and declares `voice: bf_emma` in its front matter.
