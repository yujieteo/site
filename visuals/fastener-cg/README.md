# Fastener Pattern CG Tracker

Centroids, section properties and elastic load distribution for a fastener
group, with a general 3D eccentric load. `index.html` is one self-contained
page that works offline; it is built from modular sources.

This is milestone **M1** of the Draft v0.1 specification: geometry, the three
centroids (shear Cs, axial Ca, area Cg), J, Ixx, Iyy, Ixy and principal axes,
3D load reduction, elastic in-plane shear and axial method (a), canvas and
table entry with generators, live recalculation, the unit toggle, and JSON and
Markdown persistence with a browser library.

| Path | Role |
| --- | --- |
| `src/core/*.mjs` | Dependency-free calculation core (ES modules): units, model, geometry, load reduction, elastic distribution, warnings catalogue, solve, generators, persistence, scene model, verification set |
| `src/ui/*.mjs` | Page controller, canvas painter, localStorage library and WebMCP tools |
| `src/template.html` | Markup and styles, with one `/*@APP@*/` marker |
| `build.mjs` | Inlines every module into `index.html` and writes `raw.json` (published metadata) |
| `index.html`, `raw.json` | Build outputs; do not edit |

```sh
node visuals/fastener-cg/build.mjs          # rebuild after editing src/
node visuals/fastener-cg/build.mjs --check  # fail if the outputs are stale
node --test tests/fastener-cg.test.mjs      # core, persistence, scene, WebMCP and build tests
```

The tests use Node's built-in runner, like the site's other Node tests, so the
repository needs no `package.json` or installed packages. They import the same
verification cases the page's "Run verification" button runs
(`src/core/verify.mjs`).

The bundler in `build.mjs` accepts only named relative imports and `export`
on `function`, `const` and `class` declarations, and fails the build on
anything else.
