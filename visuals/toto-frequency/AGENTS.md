# AGENTS.md: TOTO ball frequency

How often each Singapore Pools TOTO ball, 1 to 49, was a winning number in the last 3 months, 6 months or 1 year of published draws, coloured by band. Every draw is random, so past counts do not predict future draws. Live at <https://teoyujie.org/visuals/toto-frequency/>.

## Source of truth

This folder is `visuals/toto-frequency/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/toto-frequency), and that is the source of truth. The standalone repository [yujieteo/toto-frequency](https://github.com/yujieteo/toto-frequency) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

| File | Role |
| --- | --- |
| `fetch.py` | Downloads draw results from Singapore Pools into `draws.csv`, fetching only new draws |
| `draws.csv` | One row per draw: number, date, winning numbers, additional number, source URL, retrieval date |
| `report.js` | The page's numbers as a beamdswitch report |
| `beamdswitch.js` | The site's standard beamdswitch report template, an unchanged copy of `templates/beamdswitch.js` |
| `build.py` | Counts the draws, writes `raw.json` (published as `data.json`) and rewrites the dataset, template and report blocks of `index.html` |

Tests live upstream, outside this folder: `tests/toto-frequency-beamdswitch.test.mjs` and `tests/test_toto_frequency.py`.

## Build, test and verify

Run from the root of a yujieteo/site checkout (set up as its README says):

```sh
.venv/bin/python visuals/toto-frequency/fetch.py           # only to add new draws (needs network)
.venv/bin/python visuals/toto-frequency/build.py           # regenerate raw.json and index.html
.venv/bin/python visuals/toto-frequency/build.py --verify  # check both are fresh
node --test tests/toto-frequency-beamdswitch.test.mjs
.venv/bin/python scripts/build.py                          # needs VISUALS_REPO; see the site README
.venv/bin/python -m unittest discover -s tests -p 'test_toto_frequency.py'
```

## Conventions

- `index.html` is one self-contained HTML file with its CSS, JavaScript and data inlined; it makes no external requests (only `fetch.py` touches the network).
- Keep the randomness caveat wherever counts are shown or exported.
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template and declares `voice: bf_emma` in its front matter.
