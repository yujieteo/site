# AGENTS.md: Subsidy Atlas

A consumer guide to subsidised products (free LLM tokens, cloud credits, ride and delivery promotions, policy rebates, merchant-funded financing), with sourced evidence, historical loss-leader lessons and a separately flagged speculative watchlist. Live at <https://teoyujie.org/visuals/subsidy-atlas/>.

## Source of truth

This folder is `visuals/subsidy-atlas/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/subsidy-atlas), and that is the source of truth. The standalone repository [yujieteo/subsidy-atlas](https://github.com/yujieteo/subsidy-atlas) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

See [README.md](README.md) for the evidence rules. `author.py` is the curated data source and writes `raw.json` (published as `data.json`); `engine.js` filters and builds the beamdswitch report; `style.css` and `beamdswitch.js` (an unchanged copy of `templates/beamdswitch.js`) are inlined by `build.py` into `index.html`, which is generated. `build.py` also reads the design tokens from the site's `static/css/style.css`, so it runs only inside a yujieteo/site checkout.

Tests live upstream, outside this folder: `tests/subsidy-atlas.test.cjs`, `tests/subsidy-atlas-beamdswitch.test.mjs` and `tests/test_subsidy_atlas.py`.

## Build, test and verify

Run from the root of a yujieteo/site checkout (set up as its README says):

```sh
.venv/bin/python visuals/subsidy-atlas/author.py          # after editing the evidence
.venv/bin/python visuals/subsidy-atlas/build.py           # regenerate index.html
.venv/bin/python visuals/subsidy-atlas/build.py --verify  # check it is fresh
node --test tests/subsidy-atlas.test.cjs tests/subsidy-atlas-beamdswitch.test.mjs
.venv/bin/python scripts/build.py                         # needs VISUALS_REPO; see the site README
.venv/bin/python -m unittest discover -s tests -p 'test_subsidy_atlas.py'
```

## Conventions

- `index.html` is one self-contained HTML file with its styles, JavaScript and data inlined; it makes no external requests (external URLs are citations only).
- Every factual claim carries source ids; forecasts carry `speculative: true`. Never infer a per-token subsidy from company losses.
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template and declares `voice: bf_emma` in its front matter.
