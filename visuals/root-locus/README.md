# Root locus design check

A browser tool for checking a feedback loop by root locus. Type the
compensator `C`, plant `G` and feedback path `H`, see the s-plane or z-plane
locus of `D_L + K·N_L = 0` for K ≥ 0, pick K, and check the closed-loop poles
against optional damping, natural-frequency and settling-time requirements.
The Markdown record it exports is the save format; nothing is stored in the
browser.

| File | Role |
| --- | --- |
| `index.html` | The whole tool: one self-contained page with inline CSS and vanilla JS, no network requests. The script starts with the numeric core, then `if (typeof module !== 'undefined') module.exports = {…}`, then UI code that only runs when a `document` exists. |
| `raw.json` | Method notes, examples and the verification table (published as `data.json`); the tests check its examples match the page. |

There is no build step: edit `index.html` directly.

The core parses a Python subset by hand (never `eval`), finds roots from the
balanced companion matrix with Francis QR, tracks branches over an adaptive K
grid, and computes breakaway points, crossings and asymptotes analytically.
In the z-plane, `G` is entered in s and discretised (ZOH through a matrix
exponential, Tustin, or matched pole-zero) while `C` and `H` are entered in z.

## Tests

`tests/root-locus.test.cjs` loads the page's script in Node and runs the
built-in verification cases (the same ones the page shows at `?selftest`)
plus parser, import, export, tracking and WebMCP checks:

```sh
node --test tests/root-locus.test.cjs
```
