# Lug and pin joint calculator (LUGJOINT)

Preliminary static sizing of a double-shear lug and pin joint: one male lug
between two identical female clevis legs on a solid pin, under axial,
transverse or oblique ultimate tension load. The method is AFFDL *Stress
Analysis Manual* (1986) chapter 9. Everything runs in the browser and
`index.html` is one self-contained file that works offline.

| File | Role |
| --- | --- |
| `engine.js` | Pure calculation core: validation, every chapter 9 failure mode, the Eq. 9-31 interaction, the angle sweep, unit conversion, JSON and URL-hash serialisation, and the self-tests. No DOM access. Works in the browser (`LugJoint`) and in Node (`require`). |
| `template.html` | Page markup, styles, UI code, charts and WebMCP tools |
| `raw.json` | Method, assumptions, scope, reference notes, examples and sources (published as `data.json`) |
| `build.py` | Inlines `raw.json` and `engine.js` into `template.html` to write `index.html` |

```sh
python build.py   # rebuild index.html after editing template.html, engine.js or raw.json
```

The tests are `tests/lug-joint.test.mjs` (Node: the Sec. 9.6 worked example at
1%, the interaction checks, validation errors and warnings, unit and file
round-trips, and the page's WebMCP tools) and `tests/test_lug_joint.py`
(Python: build reproducibility, the published copy and the self-tests). The
page runs the same self-tests on every load and shows a pass/fail badge.

Values are stored in N, mm and MPa whatever units are displayed, so saved
files and links stay valid. Presets are N·mm·MPa, N·m·Pa, lbf·in·psi and
kip·in·ksi, and force, length and stress can each be switched separately.

To add a reference case of your own, append it to `REFERENCE_CASES` in
`engine.js` (the comment above it gives the shape) and rebuild: it then runs
in the page's self-tests and in both test suites, on top of the Sec. 9.6
example.

The Bruhn/Niu reference column starts empty: each formula is flagged
"not cross-checked" until a reference is entered on the page, and the entries
save with the inputs. The page's Reference notes list where the chapter's
worked example disagrees with its own equations.
