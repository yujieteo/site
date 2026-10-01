# AGENTS.md: Structural Distortion Explorer

An exaggerated, qualitative and unit-free 3D view of how axial load, shear, torsion, bending, warping, shear lag and buckling distort thin-walled structures (a circular tube, rectangular box, I-beam and stiffened panel). Not to scale, no units. Live at <https://teoyujie.org/visuals/distortion/>.

## Source of truth

This folder is `visuals/distortion/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/distortion), and that is the source of truth. The standalone repository [yujieteo/distortion](https://github.com/yujieteo/distortion) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

See [README.md](README.md). `kinematics.js` is the pure deformation model and beamdswitch report (no DOM, no three.js), `template.html` the page, scene and WebMCP tools, `raw.json` the published metadata (published as `data.json`), and `vendor/three.min.js` the checked-in three.js r186 bundle. `build.mjs` inlines them with `beamdswitch.js` into `template.html` to write `index.html`, which is generated.

Tests live upstream, outside this folder: `tests/distortion.test.mjs` and `tests/distortion-beamdswitch.test.mjs`.

## Build, test and verify

Run from the root of a yujieteo/site checkout:

```sh
node visuals/distortion/build.mjs          # regenerate index.html
node visuals/distortion/build.mjs --check  # fail if index.html is stale
node --test tests/distortion.test.mjs tests/distortion-beamdswitch.test.mjs
```

## Conventions

- `index.html` is one self-contained HTML file with three.js inlined; it makes no network requests and works offline.
- Label every effect as analytic or an assumed shape, and never add units or calibrated numbers.
- Tests use Node's built-in `node --test` runner only; never add Vitest, Jest or a `package.json`.
- The beamdswitch deck is written with the unchanged shared template (`beamdswitch.js`, a copy of `templates/beamdswitch.js`) and declares `voice: bf_emma` in its front matter.
