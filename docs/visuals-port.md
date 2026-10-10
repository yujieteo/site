# Port of 10 visuals tools to the site

Agreed with the captain on 2026-10-10 (grill rounds 1–7, Q1–Q32).

Changed on 2026-10-10, after the grill: "make it into a notebook and be consistent with the other pages, not a sealed .html artifact". The Beam diagram is a notebook. Section Lab will be a notebook too, for the same reason. Thus there are no sealed artifacts, and the artifact rule and the 25,000-line budget for each artifact are not necessary.

Changed again on 2026-10-10: "The beamdiag notebook, embed the ported beamdiag .html that was working as an artifact, but still retain the notebook." The Beam diagram notebook keeps all its chapters, and its first chapter embeds the sealed Rust/WebAssembly page `viz/beamdiag/index.html` of visuals, pinned in `visuals.lock`. The artifact rule is back (see below). Section Lab stays a notebook.

## Ownership

- yujieteo/visuals stores all data and the fixtures.
- yujieteo/site owns the notebook text.
- `visuals.lock` in the site pins 1 visuals commit and the SHA-256 of each file that the site uses. A script gets the files and checks them, as `scripts/kokoro.sh` does for the voice.
- There are no runtime fetches. There is no page size limit. Every page uses the site look.

## Rule for AGENTS.md (site)

A notebook may embed a sealed artifact of visuals, `![name](viz/<slug>/index.html)`, pinned in `visuals.lock`. A Rust crate in visuals builds the page to WebAssembly with the site's look (`look/`). Each artifact, with `look/`, stays within 25,000 lines of source; the `budget` step of the visuals checks enforces it. The notebook keeps its own cells, and the artifact never replaces them.

## Visuals work

1. Add a Rust workspace. Visuals has no Rust now.
2. Port the Python data builders to Rust. The Rust output must be byte-identical to the Python output. Then delete the Python.

   | Tool | Python lines |
   | --- | --- |
   | Theorem Explorer | 3,750 |
   | Scientific Modelling | 1,180 |
   | Theorem Learner | 964 |
   | English Grammar | 815 |
   | Monte Carlo | 152 |

3. Freeze the outputs of each Python reference solver (Section Lab, Beam diagram) as JSON fixtures. A port may compare its solver with these fixtures while it is built, in a disposable test that is not committed. Then delete `reference.py`, `reference/*.py` and `requirements-test.txt`.
4. After the site port of a tool passes its tests, delete the old JS page and its `build.py`. Visuals keeps the data, the Rust data builders and the fixtures. Git history keeps the old pages.

## Site work

1. Add `visuals.lock` and its fetch-and-check script.
2. Add 5 engine parts, inside the 3,000 engine code lines:
   1. A function that gives a cell a data file
   2. Gzip inflate
   3. A table output
   4. A text box (find)
   5. A 3D wireframe drawn with display lists
4. Port the tools in this order:

   | # | Tool | Form | Door |
   | --- | --- | --- | --- |
   | 1 | Theorem Explorer + Learner | 1 notebook. All data as gzip (about 42 MB raw, about 9 MB page), joined by theorem ID. Find box. Sorts and filters with `choice` and `slider`. New sort rules: edit the cell and rebuild. | Play |
   | 2 | Monte Carlo | 4 notebooks, all 12 data sets: (1) laws, limits, theory, glossary (done) (2) methods, models, datasets, groups and the interview (done) (3) chains, rare (done) (4) physics (done). The interview builds a model in the model language of notebook 2, so it goes into notebook 2. | Play |
   | 3 | Scientific Modelling | 3 notebooks, 1 for each tool (Dimensionless Number Finder, Model Nondimensionalizer, Regime Map Builder). No custom equations: write a custom model as a Rust cell and rebuild. | Play |
   | 4 | Section Lab | Notebook (done). The solver is Rust in the cells. The port is checked end to end in the built page, with no committed regression tests. | Play |
   | 5 | Beam diagram | Notebook (done). Supports and loads as text boxes, the example as a `choice`, units, diagrams, the hand calculation by Macaulay's method and a NASTRAN deck. The port is checked end to end in the built page, with no committed regression tests. | Play |
   | 6 | English Grammar | Story. Concepts and examples in chapters. Find box in the last chapter. | Stories |
   | 7 | Structural Distortion | Story. 1 chapter for each load (axial, bending, shear, torsion, warping, buckling). All 4 shapes by `choice`, loads by `slider`. 3D wireframe. Keep the "qualitative, no units" notice. | Stories |
   | 8 | Toulmin | Notebook (done). 1 chapter for each argument with fixed headings. Text boxes hold the parts of the argument, because a cell cannot read the Markdown that a reader writes in Edit mode. A cell checks the checklist and shows the paragraph. No JSON import. The port is checked end to end in the built page, with no committed regression tests. | Play |

## Checks

- Rust data builders give byte-identical output to the Python builders before the Python is deleted.
- Each port is checked end to end in the built page. Tests are disposable: no regression tests are committed.
- `nix develop -c ./build.sh`, `scripts/repro.sh` and `scripts/loc.sh` pass in the site.

## Risks

- The theorem notebook is about 9 MB. A phone can open it slowly.
- The 5 engine parts can use all of the free engine budget (880 code lines at 7fb1ccc).
- The Rust port of about 6,900 data-builder lines and 2 solvers is the largest part of the work.
