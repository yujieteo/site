# Structural Distortion Explorer

An exaggerated, qualitative and unit-free 3D view of how loads distort
thin-walled structures. Nothing is calibrated and no quantity carries units:
the page says so under its title. `index.html` is one self-contained file with
three.js inlined; it makes no network requests and works offline.

| File | Role |
| --- | --- |
| `kinematics.js` | Pure kinematics: section paths, thin-walled shear flow, the deformation field of every load. No DOM and no three.js. Works in the browser (`Distortion`) and in Node (`require`). |
| `template.html` | Page markup, styles, three.js scene and UI code |
| `raw.json` | Published metadata: the effects shown and whether each is analytic or an assumed shape, and the three.js release |
| `vendor/three.min.js` | three.js r186 (npm `three@0.186.1`, MIT licence, <https://threejs.org>) with `OrbitControls`, bundled as the global `THREE` |
| `vendor/three-entry.mjs` | The classes re-exported into that bundle |
| `build.mjs` | Inlines `vendor/three.min.js`, `kinematics.js` and `raw.json` into `template.html` to write `index.html` |

```sh
node visuals/distortion/build.mjs          # rebuild index.html after editing a source
node visuals/distortion/build.mjs --check  # fail if index.html is stale
node --test tests/distortion.test.mjs      # kinematics and build tests
```

The tests use Node's built-in runner, like the site's other Node tests, so the
repository needs no `package.json`.

## three.js

`vendor/three.min.js` is generated once, outside this repository, and checked
in; the licence text heads the file. To regenerate it (for example to move to a
newer release), in an empty directory:

```sh
npm pack three@0.186.1 && mkdir -p node_modules/three && tar xzf three-0.186.1.tgz -C node_modules/three --strip-components 1
cp <site>/visuals/distortion/vendor/three-entry.mjs entry.mjs
npx esbuild@0.25.10 entry.mjs --bundle --minify --format=iife --global-name=THREE --legal-comments=none --outfile=three.min.js
```

then prepend the licence header from the current file (updating the release)
and rebuild `index.html`.
