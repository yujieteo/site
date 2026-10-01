# AGENTS.md: Mohr's Circle Visualiser

A teaching tool and calculator for 3D stress and small-strain transformation in an isotropic linear-elastic material: principal values and directions, the three Mohr circles, 2D circles about any axis, failure checks and a strain-gauge rosette helper. Live at <https://teoyujie.org/visuals/mohr/>.

## Source of truth

This folder is `visuals/mohr/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/mohr), and that is the source of truth. The standalone repository [yujieteo/mohr](https://github.com/yujieteo/mohr) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

See [README.md](README.md). `index.html` is the whole tool with no build step: edit it directly. `<script id="mohr-engine">` is the numeric core (`self.Mohr`; no DOM, storage, clock or randomness), `<script id="mohr-beamdswitch">` is `beamdswitch.js` inlined, and `<script id="mohr-ui">` is the page and the WebMCP tools. `raw.json` (published as `data.json`) must equal the engine's `META` and `toJSON(defaultState())`.

Tests live upstream, outside this folder: `tests/mohr.test.mjs` and `tests/mohr-beamdswitch.test.mjs`.

## Build, test and verify

Run from the root of a yujieteo/site checkout:

```sh
node --test tests/mohr.test.mjs tests/mohr-beamdswitch.test.mjs
```

The page also runs its self-test on every load and shows a pass/fail badge. After changing `META` or `defaultState()`, regenerate `raw.json` from the engine; the test says when it has drifted.

## Conventions

- `index.html` is one self-contained HTML file with no dependencies and no network access.
- Stress is stored in MPa, tension positive; strain is dimensionless with tensor shear. Display, input and export convert.
- Tests use Node's built-in `node --test` runner only; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template (`beamdswitch.js`, a copy of `templates/beamdswitch.js`, pasted into `<script id="mohr-beamdswitch">`) and declares `voice: bf_emma` in its front matter.
