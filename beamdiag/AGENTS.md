# Beam diagram creator (beamdiag)

The crate builds the standalone beam page into `public/play/beamdiag/`, which the site serves at `/play/beamdiag/`.
The page uses black on white and system fonts. It has no site header or theme.

Never edit `public/play/beamdiag/index.html` by hand. After a change to `src/` or `raw.json`, rebuild:

```sh
scripts/build-beam.sh
```

The builder needs `gzip`. It writes the raw module and `beamdiag.wasm.gz`.
The page streams the compressed module through `DecompressionStream` into WebAssembly.
Serve `.gz` as a file, without an HTTP `Content-Encoding` header.
KaTeX loads when the hand calculation enters the view. PDF fonts load on the first Save PDF.
The pinned KaTeX version and archive hash are in `public/play/beamdiag/katex/lock.txt`.
The PDF fonts are in `public/play/beamdiag/fonts/`. `fonts.txt` gives their sources.
Tests are disposable. Check changes in the built page, and do not commit regression tests.

| File | Holds |
| --- | --- |
| `raw.json` | The example beams, materials, sections, method and assumptions. |
| `fixtures.json` | The test beams and closed-form answers, where they exist. |
| `reference.json` | The exact Macaulay answers, frozen on 2026-10-10. |
| `random.json` | The seeded random beams and exact answers, frozen on 2026-10-10. |
| `src/` | The solver, shared hand calculation, figure, PDF writer, page events and builders. |

`reference.py` is in the yujieteo/visuals Git history at commit 32181d1. Never edit `reference.json` by hand.
To add a case, restore that script, add the beam to `fixtures.json`, then run the script.
Commit both data files.

Loads are positive upward. Couples are positive counter-clockwise. M is positive when the beam sags.
The data uses SI units (m, N, Pa). The default display origin is the centre.
