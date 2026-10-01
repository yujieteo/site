# AGENTS.md: Good food in Tampines

The 50 places food writers recommend most across Tampines Mall, Tampines 1, Century Square and Our Tampines Hub, ranked by how many independent guides name them, with sourced calorie estimates for the signature dishes. Live at <https://teoyujie.org/visuals/tampines-food/>.

## Source of truth

This folder is `visuals/tampines-food/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/tampines-food), and that is the source of truth. The standalone repository [yujieteo/tampines-food](https://github.com/yujieteo/tampines-food) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

| File | Role |
| --- | --- |
| `sources.json` | Food guides, official mall directories and nutrition sources |
| `outlets.csv` | Every outlet two or more publishers recommend, with its guides, one signature dish and that dish's nutrition reference |
| `directories.csv` | Food & Beverage listings of the three malls with an official directory |
| `yeo2021.csv` | Yeo et al. (2021) Tables 1-6, transcribed |
| `fndds.csv` | The FNDDS rows `outlets.csv` uses, written by `extract_fndds.py` from the FoodData Central download |
| `map.json` | Attributed, projected OSM geometry |
| `report.js` | The page's numbers as a beamdswitch report |
| `beamdswitch.js` | The site's standard beamdswitch report template, an unchanged copy of `templates/beamdswitch.js` |
| `build.py` | Ranks the outlets, writes `raw.json` (published as `data.json`) and rewrites the dataset, template and report blocks of `index.html` |

Tests live upstream, outside this folder: `tests/tampines-food-beamdswitch.test.mjs` and `tests/test_tampines_food.py`.

## Build, test and verify

Run from the root of a yujieteo/site checkout (set up as its README says):

```sh
.venv/bin/python visuals/tampines-food/build.py           # regenerate raw.json and index.html
.venv/bin/python visuals/tampines-food/build.py --verify  # check both are fresh
node --test tests/tampines-food-beamdswitch.test.mjs
.venv/bin/python scripts/build.py                         # needs VISUALS_REPO; see the site README
.venv/bin/python -m unittest discover -s tests -p 'test_tampines_food.py'
```

## Conventions

- `index.html` is one self-contained HTML file with its CSS, JavaScript and data inlined; it makes no external requests.
- Calorie figures are estimates for reference dishes, not measurements of an outlet's food; a dish without a fixed portion stays unestimated, with its reason.
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template and declares `voice: bf_emma` in its front matter.
