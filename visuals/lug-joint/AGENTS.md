# Lug and pin joint calculator: notes for coding agents

Preliminary static sizing of a double-shear lug and pin joint (one male lug between two female clevis legs on a solid pin) under axial, transverse or oblique ultimate load, by AFFDL *Stress Analysis Manual* (1986) chapter 9. Live at <https://teoyujie.org/visuals/lug-joint/>; its data is
published at <https://teoyujie.org/visuals/lug-joint/data.json>.

## Where changes go

The source of truth is the folder `visuals/lug-joint/` in the upstream repository
[yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/lug-joint).
The standalone repository [yujieteo/lug-joint](https://github.com/yujieteo/lug-joint)
is a read-only, exact mirror of that folder: never commit to it or open pull
requests there. Make every change upstream, in a yujieteo/site checkout; the
catalogue stub `data/visuals/lug-joint.yaml` and the tests in `tests/` live there,
outside this folder. `README.md` lists every file here and its role.

## Build, test and verify

Run these from the root of the yujieteo/site checkout. `index.html` is generated. Edit `engine.js`, `template.html`, `raw.json` or
`beamdswitch.js`, then rebuild and test:

```sh
(cd visuals/lug-joint && python build.py)
node --test tests/lug-joint.test.mjs tests/lug-joint-beamdswitch.test.mjs
.venv/bin/python -m unittest discover -s tests -p 'test_lug_joint.py'
```

The Python test checks that the build is reproducible and that the built
`site/` copy matches the sources, so run `scripts/build.py` before it.

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

- `raw.json`: method, assumptions, scope, reference notes, examples and sources, inlined by `build.py` and published as `data.json`.
- `engine.js`: the pure calculation core (`LugJoint` in the browser, `require` in Node), including `REFERENCE_CASES`, the self-tests and the joint's beamdswitch report.
- `template.html`: markup, styles, UI code, charts and WebMCP tools.
- `tests/lug-joint.test.mjs`: the Sec. 9.6 worked example at 1%, the interaction checks, validation, unit and file round trips and the WebMCP tools.
- `tests/lug-joint-beamdswitch.test.mjs`: the beamdswitch deck, parsed with beamdswitch's own parsers, and its buttons.
- `tests/test_lug_joint.py`: build reproducibility, the stub, the engine self-tests under Node and the published copy.

## Conventions

- One self-contained `index.html`, assembled by the build: no external scripts, stylesheets, fonts or network requests. It works offline.
- Never edit or hand-merge the generated `index.html`; change the sources and rerun `build.py`.
- `engine.js` has no DOM access, so it runs in the browser and in Node.
- Values are stored in N, mm and MPa whatever units are displayed. A new reference case goes in `REFERENCE_CASES` in `engine.js`; it then runs in the page's self-tests and both test suites.
- Tests use Node's built-in runner (`node --test`) and Python `unittest` only; never add Vitest, Jest, a `package.json` or another test framework.
- `beamdswitch.js` is a verbatim copy of `templates/beamdswitch.js` in yujieteo/site and is inlined unchanged; `tests/beamdswitch-voice.test.mjs` checks the copy. Every beamdswitch deck declares the narration voice `bf_emma` in its front matter.
- WebMCP tools stay read-only (`readOnlyHint: true`), never change the page, and keep their names equal to `webmcp_tools` in `data/visuals/lug-joint.yaml`.
- `LICENSE` is MIT (Copyright (c) 2026 Yu Jie Teo).
