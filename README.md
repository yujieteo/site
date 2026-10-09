# newsite

Three doors: **Notes**, **Stories**, **Play**. Extreme minimalism; every page is one self-contained
HTML file, and every story is a notebook.

## Build

```sh
nix develop -c ./build.sh [path/to/uniichat/memory.json]
```

Tests the crates, compiles `engine` to `wasm32-unknown-unknown`, compiles each notebook's cells, then
writes `dist/`. The toolchain is pinned once, in `rust-toolchain.toml`; `flake.nix` builds that exact
toolchain (nixpkgs 26.05 + rust-overlay), and rustup reads the same file, which CI uses.
Open `dist/index.html` directly; nothing is fetched at runtime.

`scripts/repro.sh` builds twice from clean and compares every output's hash. `scripts/loc.sh` checks
the budgets and reports payload and output sizes.

## Layout

| Path | Owns |
| --- | --- |
| `engine/` | Rust, native and WebAssembly. `doc` (Markdown, TeX to MathML), `cell` (cell data flow), `nb` (the cells' runtime: text, controls, plots, stage), `draw` (display lists), `pdf` (the PDF views), `theme`, `pack` (SHA-256, ZIP, base64), `scene` (the dot scenes: a frame is a pure function of seed, scene, time, progress, pointer and stage). |
| `web/host.js` | The browser boundary: one clock, Canvas execution of display lists, the run worker, tools, the agent API. |
| `web/shell.html`, `web/style.css` | The one page shell every page shares. |
| `web/book.css` | A notebook's views, tools, editor and cells. |
| `site/` | The builder: `book` (a notebook's views, manifest and exports), `cells` (compiles cells), `main` (notes, doors, index). |
| `content/stories/<slug>/` | A notebook: `index.md` and its assets (images, `Cargo.lock`). |
| `fonts/` | Embedded font subsets (Fira Sans, Fira Mono, Fira Math, Libertinus Serif, Latin Modern Roman); `fonts.txt` holds their hashes. |

## Notebooks

```md
---
title: One radar, one target
summary: One line for the Stories index.
palette: #2f4a5c #13222c #f2a541 #fbe8a6   (scene sky, shade, glow, light)
thumb: 8                                    (scene on the index card)
theme: site                                 (site, a family, a preset ID, or "custom <ID>")
colors: accent #c0653f                      (custom overrides, comma separated)
print: site-light                           (export theme; default: the theme's own preset)
font: sans                                  (sans, book or tex)
seed: 20261003
voice: af_heart
---
```

- Each `##` heading is a chapter with a shared scene: `## The link {scene=8 t=7}`. `#` headings fold.
- ```` ```rust ```` fences are cells. Cells run in data-flow order, never in page order: a cell that
  uses `x` runs after the cell whose top-level `let x` defines it, each name has one defining cell,
  and cycles are errors. Items (`fn`, `struct`, `use`, `const`) are shared by all cells. Every run is
  a clean run, so outputs never depend on what ran before. `//| caption: …` captions a cell.
- In cells: `println!`, `html`, `slider`, `choice`, `stage` (numbers for data scenes) and `Plot`.
- ```` ```toml ```` fences add pinned crates; ```` ```say ```` fences are narration; `$…$` and `$$`
  are TeX; `<!-- … -->` comments are agent skills, exposed as text through `window.notebook.skills()`.
- Views: `index.html` (notebook), `slides.html`, `handout.html`, `article.html`, each also a PDF
  (`notebook.pdf`, …) drawn by `engine/src/pdf.rs` from the same document, outputs and display lists,
  in the export theme with the subset fonts embedded. Exports: the four PDFs, source ZIP (Markdown,
  assets, manifest) and `manifest.json` with every version and hash. Edit, Run, Export and Save (one
  editable HTML file) work in the page, and the page's PDFs are byte-identical to the build's. Edited
  cells and their dependants are marked stale until Run, and Export stops on stale or failed outputs.
  PDF images are PNGs in grey, RGB or palette colour with at most binary or colour-key transparency.

Notes are read at build time from a UniiChat export (default `../site/data/uniichat/memory.json`), never
committed here. Each line is sanitised again: session tags dropped, paths and emails redacted, any line
with a credential pattern refused.

## Budget

The repository stays under 25,000 lines and the engine under 2,000 code lines (`scripts/loc.sh`, run in
CI). Prefer deleting to adding.
