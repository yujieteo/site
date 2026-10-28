# Beam diagram creator (beamdiag)

The Goose program builds the standalone beam page into `public/play/beamdiag/`, which the site serves at `/play/beamdiag/`.
The page uses the site stylesheet `/style.css` and the site header and footer, in `src/body.html`.

Never edit `public/play/beamdiag/index.html` by hand. After a change to `src/` or `raw.json`, make the C again and rebuild:

```sh
GOOSE=/path/to/goose scripts/build-beam.sh
```

`src/*.goose` is the source. Goose (v2026.3) makes the C in `c/`, and the C is committed, so a machine without Goose can build.
The builder needs `emcc`, `cc` and `gzip`. With `GOOSE` set, it also writes `c.sha256`, the hash of the Goose inputs. Without `GOOSE`, it stops if that hash differs. It writes the raw module and `beamdiag.wasm.gz`.
The page streams the compressed module through `DecompressionStream` into WebAssembly.
Serve `.gz` as a file, without an HTTP `Content-Encoding` header.
KaTeX loads after the first draw and replaces plain HTML maths. The report fonts load on the first Save PDF or Save PNG.
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

`reference.py` writes `reference.json` from `fixtures.json`. Never edit `reference.json` by hand.
To add a case, add the beam to `fixtures.json`, then run `python3 beamdiag/reference.py`.
Commit both data files. `python3 beamdiag/reference.py --check` exits 1 if `reference.json` is out of date.

Loads are positive upward. Couples are positive counter-clockwise. M is positive when the beam sags.
The data uses SI units (m, N, Pa). The default display origin is the centre.
