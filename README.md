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
Open `dist/index.html` directly; nothing is fetched at runtime, except the voice for a narration
export (below), which needs the site served over HTTP.

`scripts/repro.sh` builds twice from clean and compares every output's hash. `scripts/loc.sh` checks
the budgets and reports payload and output sizes. `scripts/kokoro.sh` fetches the narration voice
into `kokoro/` (not committed, about 118 MB) and checks every file against `kokoro.lock`; the build
then serves it beside the site. `scripts/visuals.sh` (run first by `build.sh`) fetches the
yujieteo/visuals data files that notebooks read into `visuals/` (not committed) and checks every file
against `visuals.lock`; files already there and matching need no network.

## Layout

| Path | Owns |
| --- | --- |
| `engine/` | Rust, native and WebAssembly. `doc` (Markdown, TeX to MathML), `cell` (cell data flow), `nb` (the cells' runtime: text, controls, plots, stage), `draw` (display lists), `pdf` (the PDF views), `theme`, `pack` (SHA-256, ZIP, base64), `scene` (the dot scenes: a frame is a pure function of seed, scene, time, progress, pointer and stage), `thumb` (seeded thumbnails), `say` (narration: sentences, Kokoro phonemes, podcast, captions, timings). |
| `web/host.js` | The browser boundary: one clock, Canvas execution of display lists, the run worker, the voice worker, the video recorder, tools, the agent API. |
| `kokoro.lock`, `scripts/kokoro.sh` | The narration's pinned files: kokoro-js 1.2.1, ONNX Runtime Web, Kokoro-82M v1.0 (q8) with two US voices, and the Misaki 0.9.4 lexicons the build reads. |
| `visuals.lock`, `scripts/visuals.sh` | The yujieteo/visuals data at one pinned commit: each file that a cell reads through `data!`, with its SHA-256. Visuals owns the data. |
| `web/shell.html`, `web/style.css` | The one page shell every page shares, with Ctrl K / ⌘K search. |
| `web/book.css` | A notebook's views, tools, dialogs, editor and cells. |
| `site/` | The builder: `book` (a notebook's views, manifest and exports), `cells` (compiles cells), `main` (notes, doors, index). |
| `content/stories/<slug>/`, `content/play/<slug>/` | A notebook (a story, or a tool in Play): `index.md` and its assets (images, `Cargo.lock`, `say.lock`). |
| `fonts/` | Embedded font subsets (Fira Sans, Fira Mono, Fira Math); `fonts.txt` holds their hashes. |

## Notebooks

```md
---
title: One radar, one target
summary: One line for the Stories index.
palette: #2f4a5c #13222c #f2a541 #fbe8a6   (scene sky, shade, glow, light)
thumb: 41213                                (optional: a seeded thumbnail for the index card)
theme: site                                 (the exports' family; the page wears the reader's theme)
colors: accent #c0653f                      (export overrides, comma separated)
print: site-light                           (export preset; default: the theme's own preset)
seed: 20261003
voice: af_heart                             (narration: af_heart or am_michael; speed: 1)
pronounce: gigahertz ɡˈɪɡəhˌɜɹts            (optional: Kokoro phonemes for words, comma separated)
---
```

- Each `##` heading is a chapter. A chapter shows a scene only when its heading names one
  (`## The link {scene=6 t=7}`); scenes are not inherited, and a frame equal to the previous
  chapter's is dropped, so no picture repeats from slide to slide. `#` headings fold.
- ```` ```rust ```` fences are cells. Cells run in data-flow order, never in page order: a cell that
  uses `x` runs after the cell whose top-level `let x` defines it, each name has one defining cell,
  and cycles are errors. Items (`fn`, `struct`, `use`, `const`) are shared by all cells. Every run is
  a clean run, so outputs never depend on what ran before; the page keeps one instance, so a `static`
  may hold what a cell parsed from `data!` bytes, and nothing else. `//| caption: …` captions a cell.
- In cells: `println!`, `html`, `table`, `slider`, `choice`, `field` (a text box), `stage` (numbers
  for data scenes), `Plot` and `data!("path")`: the bytes of a file pinned in `visuals.lock`, compiled
  in. The page redraws a cell's controls when a key, label, range or option changes, so keep a
  `field` apart from a `choice` whose options follow it. A control's key is 100 × its cell + its place
  in the cell; a slider or text box keeps the page's value only while its label stays the same.
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
  Export is a dialog too. The theme is the reader's, for the whole site: the header's button opens a
  dialog of the seven families (`engine/src/theme.rs`) and Auto, Light or Dark (Auto follows the
  device), remembered in the browser. Exports keep the notebook's own `theme`, `print` and `colors`.
- Views: `index.html` (notebook), `slides.html`, `handout.html`, `article.html`, each also a PDF
  (`notebook.pdf`, …) drawn by `engine/src/pdf.rs` from the same document, outputs and display lists,
  in the export theme with the subset fonts embedded. Exports: the four PDFs, source ZIP (Markdown,
  assets, manifest) and `manifest.json` with every version and hash. Edit, Run, Export and Save (one
  editable HTML file) work in the page, and the page's PDFs are byte-identical to the build's. Edit
  opens the Markdown in insert mode (Esc for Vim) and the page follows the text as it changes; the
  edits are kept in the browser until they match the built page again or are discarded. Run re-runs
  the compiled cells from clean and reports it. Float literals in a cell's body (not in `fn`, `const`
  or other items) are live: the builder reads each through `nb::num`, so an edit that changes only
  those numbers re-runs at once with the new values (`cell::retune`). Any other edited cell and its
  dependants are marked stale (their code runs after a rebuild), and Export stops on stale or failed
  outputs. A panic in the page shows its message at its cell.
  PDF images are PNGs in grey, RGB or palette colour with at most binary or colour-key transparency.
- Narration is rendered in the page, like BeamdSwitch: Export → Podcast (WAV), Captions (WebVTT) or
  Video (the slides as the narration reaches them, with the podcast as sound). Rust splits the
  ```` ```say ```` fences into sentences and spells each word in Kokoro's phonemes from `say.lock`,
  which the build writes from the pinned Misaki lexicons (US gold, then silver, then regular -s, -ed
  and -ing endings; `pronounce:` overrides). A worker runs Kokoro-82M through kokoro-js on bytes
  from `kokoro/`, each checked against `kokoro.lock`; every other fetch fails. A sentence with an
  unknown word is spoken by kokoro-js's own G2P instead, and the captions say so. Rust lays out the
  podcast, captions and timings; the captions' notes keep the voice, IPA, phonemes and each line's
  audio hash. The podcast is byte-identical across runs in one browser; the video is recorded in
  real time (MP4 where the browser records it, else WebM), so it is not byte-reproducible.

Notes are read at build time from a UniiChat export (default `../site/data/uniichat/memory.json`), never
committed here: its notes and its summaries, one per aligned block of 2, 4, 8, ... notes. The page is the
summary tree, oldest first (each summary opens onto its two halves, down to the notes), with a search
over notes and summaries (every word must appear) whose hits open the tree where they are. Each line is
sanitised again: session tags dropped, paths and emails redacted, any line with a credential pattern
withheld.

## Budget

The repository stays under 25,000 lines and the engine under 3,000 code lines (`scripts/loc.sh`, run in
CI). Prefer deleting to adding.
