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
| `engine/` | Rust, native and WebAssembly. `doc` (Markdown, TeX to MathML), `cell` (cell data flow), `nb` (the cells' runtime: text, controls, plots, stage), `draw` (display lists), `pdf` (the PDF views), `theme`, `pack` (SHA-256, ZIP, base64), `scene` (the dot scenes: a frame is a pure function of seed, scene, time, progress, pointer and stage), `thumb` (seeded thumbnails). |
| `web/host.js` | The browser boundary: one clock, Canvas execution of display lists, the run worker, tools, the agent API. |
| `web/shell.html`, `web/style.css` | The one page shell every page shares, with Ctrl K / ⌘K search. |
| `web/book.css` | A notebook's views, tools, dialogs, editor and cells. |
| `site/` | The builder: `book` (a notebook's views, manifest and exports), `cells` (compiles cells), `main` (notes, doors, index). |
| `content/stories/<slug>/` | A notebook: `index.md` and its assets (images, `Cargo.lock`). |
| `fonts/` | Embedded font subsets (Fira Sans, Fira Mono, Fira Math); `fonts.txt` holds their hashes. |

## Notebooks

```md
---
title: One radar, one target
summary: One line for the Stories index.
palette: #2f4a5c #13222c #f2a541 #fbe8a6   (scene sky, shade, glow, light)
thumb: 41213                                (optional: a seeded thumbnail for the index card)
theme: site                                 (a family; light or dark follows the device)
colors: accent #c0653f                      (custom overrides, comma separated)
print: site-light                           (export theme; default: the theme's own preset)
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
- A thumbnail is one seed (`engine/src/thumb.rs`), read as digits so a known seed gives a known
  picture: units the motion (0 doze, 1 hop, 2 bounce, 3 leap out of the frame, 4 stroll,
  5 trampoline, 6 see-saw, 7 orbit, 8 wave, 9 juggle), tens the backdrop (0 polka, 1 ripples,
  2 night, 3 hill, 4 sea, 5 rings, 6 rain, 7 halftone, 8 confetti, 9 plain), hundreds the character
  (mod 5: sleepy, happy, flustered, dizzy, curious); the rest is hashed into palette, size and tempo.
  The landing page's doors are seeds too. The generator has its own budget of 500 lines.
- A chapter is a slide (title, scene, body) followed by its narration. Render (a dialog) switches the
  view in place: Notebook (code, controls, outputs, live scenes), Slides (one 16:9 slide per chapter),
  Handout (each slide with its narration beside it) and Article (continuous prose, numbered sections).
  Theme and Export are dialogs too; light or dark always follows the device.
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
