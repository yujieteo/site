# Fastener Pattern CG Tracker

Centroids, section properties and elastic load distribution for a fastener
group, with a general 3D eccentric load. `index.html` is one self-contained
page that works offline; it is built from modular sources.

Milestones M1 to M4 of the Draft v0.1 specification are in place. M1 covers geometry, the three
centroids (shear Cs, axial Ca, area Cg), J, Ixx, Iyy, Ixy and principal axes,
3D load reduction, elastic in-plane shear and axial method (a), canvas and
table entry with generators, live recalculation, the unit toggle, and JSON and
Markdown persistence with a browser library. M2 adds keyed shear and tension
allowables (group defaults with per-fastener overrides), the shear-tension
interaction with separate exponents and presets, the exact load-scale-factor
margin (MS = k* − 1 by a bracketed Brent search, shown beside IF(1)), the
governing MS and critical fastener, and the warnings framework: all three tiers
listed with the full catalogue and flagged inline beside the field or fastener
they name. M3 adds T-stub prying (keyed B and Fp, a limited to 1.25·b, with a
manual amplification factor override), preload with P_max, P_min and a
required load-sharing factor φ, the separation state, and a torque
convenience fill (T = K·D·P); the resulting bolt load replaces the tension in
the interaction and is re-evaluated at every load multiplier. M4 adds up to two
plates (axis-aligned rectangles with thickness and keyed allowables), bearing
(Fbr·D·t or a direct allowable) and tear-out (ray cast along the bearing
direction to the plate edge) per plate with the governing plate reported, the
contact-edge axial method (b), and the geometry consistency checks (fastener
outside a plate, overlapping fasteners, edge distance below D/2, load point
outside the loaded plate, e/D below the keyed minimum).

| Path | Role |
| --- | --- |
| `src/core/*.mjs` | Dependency-free calculation core (ES modules): units, model, geometry, load reduction, elastic distribution, interaction and exact-k solve, prying and preload tension chain, plates (bearing, tear-out, geometry checks), contact-edge method (b), per-fastener checks, warnings catalogue, solve, generators, persistence, scene model, verification set |
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
