# AGENTS.md: Connes QFT laboratory

A visual laboratory for QED read through three related but distinct lenses — perturbative QFT, Connes–Kreimer renormalization and noncommutative spectral geometry, and local operator algebras — with the one-loop vacuum polarization carried from momentum integral to Birkhoff factorization, a spectral triple fluctuated into a U(1) gauge field, and a spacetime region carried to modular flow. Live at <https://teoyujie.org/visuals/connes-qft/>.

## Source of truth

This repository, [yujieteo/connes-qft](https://github.com/yujieteo/connes-qft), is the source of truth: the laboratory and its tests are developed here, and its CI runs them here. `visuals/connes-qft/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/connes-qft) is a port of the page files, refreshed when the laboratory is updated, and the site runs no logic tests for it. Porting copies this repository minus `tests/` and `.github/`, so AGENTS.md and SKILLS.md must not link into either; [playbooks/deploy-to-site.md](playbooks/deploy-to-site.md) gives the steps.

## Files and data

[SKILLS.md](SKILLS.md) routes each task to its playbook, and [docs/architecture.md](docs/architecture.md) explains the modules. `src/` holds the engine modules (pure: no DOM, storage, clock, randomness or network) and `src/ui/` the page; `template.html` is the markup and styles; `raw.json` holds the references, concept graph, presentation, palette commands and text (published as `data.json`); `reference/` holds the independent Python reference values. `build.py` inlines them with `beamdswitch.js` into `template.html` to write `index.html`, which is generated. [README.md](README.md) lists every file, the spec's required computations and visualisations, and how each is reached.

## Build, test and verify

From the repository root, as [playbooks/verify.md](playbooks/verify.md) says:

```sh
python build.py                                     # regenerate index.html
python build.py --check                             # fail if index.html is stale
node --test 'tests/*.test.mjs'
python -m unittest discover -s tests -p 'test_*.py'
node tests/e2e/browser-check.mjs                    # headless Chrome; set CHROME_PATH if needed
```

CI (`.github/workflows/ci.yml`) runs the same commands on every push and pull request. The browser check is a separate script, not part of `node --test`, so the unit suite stays fast (about two seconds).

## Conventions

- `index.html` is one self-contained HTML file; it makes no external requests. Never hand-edit it.
- The repository must stay self-contained: nothing in it may refer to files outside it.
- Natural units ħ = c = 1, Heaviside–Lorentz charge e² = 4πα, metric (+, −, −, −). Every running coupling is labelled with its loop order and scheme.
- Every number shown is computed by the engine or quoted with its source; finite, lattice and toy models are labelled as such. Never present a schematic value as a computed one.
- The three lenses are never identified with one another (spec §128).
- Node tests use the built-in `node --test` runner and Python tests use `unittest`; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template (`beamdswitch.js`, a copy of the site's `templates/beamdswitch.js`) and declares `voice: bf_emma`.
- WebMCP tools stay read-only (`readOnlyHint: true`) and never change the page.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
