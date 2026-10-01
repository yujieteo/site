# AGENTS.md: Sectionlab

Build a cross-section from library shapes by dragging and read its section properties, a torsion constant where a formula has been measured against a numerical Prandtl solution, and a Ramberg–Osgood moment–curvature curve. Results must be verified independently; the page is not a design-code check. Live at <https://teoyujie.org/visuals/sectionlab/>.

## Source of truth

This folder is `visuals/sectionlab/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/sectionlab), and that is the source of truth. The standalone repository [yujieteo/sectionlab](https://github.com/yujieteo/sectionlab) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

[SKILLS.md](SKILLS.md) routes each task to its playbook, and [docs/architecture.md](docs/architecture.md) explains the modules. `src/` holds the engine modules and `src/ui.js`, `template.html` the page, `raw.json` the presets, materials and method text (published as `data.json`), and `reference/` the Python references and their generated fixtures. `build.py` inlines them with `beamdswitch.js` into `template.html` to write `index.html`, which is generated. The tests are in [tests/](tests/).

## Build, test and verify

From this folder (in the mirror too), as [playbooks/verify.md](playbooks/verify.md) says:

```sh
python build.py                                     # regenerate index.html
python build.py --check                             # fail if index.html is stale
node --test 'tests/*.test.mjs'
pip install -r requirements-test.txt                # once: numpy, scipy, PyYAML
python -m unittest discover -s tests -p 'test_*.py'
```

In yujieteo/site the same tests run through `tests/test_sectionlab.py` and `node --test 'visuals/sectionlab/tests/*.test.mjs'`, and `tests/sectionlab-beamdswitch.test.mjs` checks the deck.

## Conventions

- `index.html` is one self-contained HTML file; it makes no external requests.
- The folder must stay self-contained: nothing in it may refer to files outside it.
- Units are mm, MPa, N and N·mm; never add unit conversions inside the engine.
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template (`beamdswitch.js`, a copy of the site's `templates/beamdswitch.js`) and declares `voice: bf_emma` in its front matter.
