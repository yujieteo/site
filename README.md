# newsite

Two doors: **Stories** and **Play**. Extreme minimalism; every page is one self-contained
HTML file, and every story is a notebook.

## Build

```sh
nix develop -c ./build.sh
```

Tests the crates, compiles `engine` to `wasm32-unknown-unknown`, compiles each notebook's cells, then
writes `dist/`. The toolchain is pinned once, in `rust-toolchain.toml`; `flake.nix` builds that exact
toolchain (nixpkgs 26.05 + rust-overlay), and rustup reads the same file, which CI uses.
Open `dist/index.html` directly; nothing is fetched at runtime, except the voice for a narration
export (below). Two things need the site served over HTTP: that voice, and the embedded visuals
pages, whose frames must share the page's origin to fit their height and follow the theme.

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
| `web/host.js` | The browser boundary: the run worker, the voice worker, the video recorder, tools, embedded artifacts and the agent API. |
| `kokoro.lock`, `scripts/kokoro.sh` | The narration's pinned files: kokoro-js 1.2.1, ONNX Runtime Web, Kokoro-82M v1.0 (q8) with two US voices, and the Misaki 0.9.4 lexicons the build reads. |
| `visuals.lock`, `scripts/visuals.sh` | The yujieteo/visuals data at one pinned commit: each file that a cell reads through `data!`, and each sealed artifact that a notebook or the Links page of Notes embeds, with its SHA-256. Visuals owns the data. |
| `web/shell.html`, `web/style.css` | The one page shell every page shares, with Ctrl K / ⌘K search, and the manuscript look: the Van de Graaf canon, rubrics, initials and glosses. |
| `web/book.css` | A notebook's views, tools, dialogs, editor and cells. |
| `site/` | The builder: `book` (a notebook's views, manifest and exports), `cells` (compiles cells), `main` (doors, index). |
| `content/stories/<slug>/`, `content/play/<slug>/` | A notebook (a story, or a tool in Play): `index.md` and its assets (images, `Cargo.lock`, `say.lock`). |
| `fonts/` | Embedded font subsets of six families (EB Garamond, Bodoni Moda, Libre Franklin, News Cycle, Courier Prime, STIX Two Math); `fonts.txt` holds their roles, sources and hashes. |

## Notebooks

```md
---
title: One radar, one target
summary: One line for the Stories index.
theme: penumbra-light                                 (the export theme; the page uses the reader's choice)
seed: 20261003
voice: af_heart                             (narration: af_heart or am_michael)
pronounce: gigahertz ɡˈɪɡəhˌɜɹts            (optional: Kokoro phonemes for words, comma separated)
---
```

- Each `##` heading is a chapter. `#` headings fold. Chapters have no decorative dot scenes.
- ```` ```rust ```` fences are cells. Cells run in data-flow order, never in page order: a cell that
  uses `x` runs after the cell whose top-level `let x` defines it, each name has one defining cell,
  and cycles are errors. Items (`fn`, `struct`, `use`, `const`) are shared by all cells. Every run is
  a clean run, so outputs never depend on what ran before; the page keeps one instance, so a `static`
  may hold what a cell parsed from `data!` bytes, and nothing else. `//| caption: …` captions a cell.
- In cells: `println!`, `html`, `table`, `slider`, `choice`, `field` (a text box), `gloss` (a gloss in a cell's HTML, as `^[…]` in the text), `stage` (numeric cell output), `Plot` and `data!("path")`: the bytes of a file pinned in `visuals.lock`, compiled
  in. The page redraws a cell's controls when a key, label, range or option changes, so keep a
  `field` apart from a `choice` whose options follow it. A control's key is 100 × its cell + its place
  in the cell; a slider or text box keeps the page's value only while its label stays the same.
- `^[…]` is a gloss: a red siglum in the text and the gloss beside its line, in the outer margin, or in
  the gutter of a two-column chapter (between the words on a phone, after its paragraph in the PDFs).
  `^^[…]` is a long note: a red number in the text and the note above or below its chapter. A note may
  open with its kind: `def.`, `cf.`, `crit.` or `nota`.
- On a wide screen, every chapter is set in two balanced columns, as in a codex, and the page scrolls.
  A block that reads badly when split (a short paragraph, an equation, a control, a plot) stays whole
  in one column. Embedded tools, and a cell's output with a table or a displayed formula, take the full
  width. A control takes two lines, and code wraps: nothing scrolls sideways in a column. The Article PDF
  runs in two columns throughout.
- A post needs no cells: a notebook of front matter (`title`, `summary`) and Markdown is a story.
- ```` ```toml ```` fences add pinned crates; ```` ```say ```` fences are narration; `$…$` and `$$`
  are TeX; `<!-- … -->` comments are agent skills, exposed as text through `window.notebook.skills()`.
- `![name](viz/<slug>/index.html)` embeds a sealed artifact of yujieteo/visuals, pinned in `visuals.lock`:
  the page carries its bytes and runs it in a frame of the page's origin, which follows the reader's theme
  and grows to fit it. The PDFs name it only.
- A chapter is a slide (title and body) followed by its narration. Render (a dialog) switches the
  view in place: Notebook (code, controls and outputs), Slides (one 16:9 slide per chapter),
  Handout (each slide with its narration beside it) and Article (continuous prose, numbered sections).
  Export is a dialog too. The theme is the reader's, for the whole site: the header's button turns
  Penumbra Light to Penumbra Dark ++ and back at once (`engine/src/theme.rs`, sources in `docs/themes.md`).
  Penumbra Light is the default, even on a dark device. The browser stores an explicit choice.
  The header is translucent. Sections and pages fade, except under reduced motion. Exports use the notebook's `theme`.
- Views: `index.html` (notebook), `slides.html`, `handout.html`, `article.html`, each also a PDF
  (`notebook.pdf`, …) drawn by `engine/src/pdf.rs` from the same document and outputs,
  in the export theme on the Van de Graaf canon, with the subset fonts embedded. Exports: the four PDFs, source ZIP (Markdown,
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

## Budget

The repository stays under 25,000 lines and the engine under 3,000 code lines (`scripts/loc.sh`, run in
CI). Prefer deleting to adding.
