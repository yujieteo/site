# Frequency-Response Visualiser

Exploration tool for linear feedback loops in the frequency domain. It is not
a substitute for a verified control-design toolchain; the page carries a
permanent banner saying so and every export repeats it. `index.html` is one
self-contained file with no dependencies, no network access and no build step.

This is phase 2 of the four in the design spec: single-loop (SISO) loops in
continuous time (`L = K·C·G·e^(−sτ)`) or discrete time (`L = K·C·G·z^(−d)` with
sample time Ts, evaluated up to the Nyquist frequency π/Ts). In discrete time
each block is either entered in z or entered in s and discretised in state
space by zero-order hold (hand-written matrix exponential), Tustin with an
optional prewarp frequency, or forward or backward Euler; the continuous
response is overlaid on the discrete one. Delays in discrete time are whole
samples. Both domains get the Bode plot, gain, phase and delay margins, Ms, Mt,
vector margin, resonant peak and bandwidth, closed-loop poles, a pole-zero map
(s-plane or z-plane with the unit circle), threshold checks, exports and
self-tests. Nyquist and Nichols (phase 3) and MIMO (phase 4) are not built yet;
their tabs are shown disabled.

| File | Role |
| --- | --- |
| `index.html` | The whole tool. `<script id="fr-engine">` is the pure calculation core (no DOM, storage, clock or randomness; `self.FreqResponse` in the browser); `<script id="fr-ui">` is the page, plots and WebMCP tools. Edit this file directly. |
| `raw.json` | Published metadata (scope, conventions, assumptions, sources, presets, threshold defaults) and the default example; must equal the engine's `META` and `defaultInputs()` |

The tests are `tests/frequency-response.test.mjs`, run with Node's built-in
runner (`node --test`). They extract the engine script from `index.html`, run
the in-page self-tests and further analytic checks, and exercise the WebMCP
tools. The page runs the same self-tests on every load and shows a pass/fail
badge with each tolerance. After changing `META` or `defaultInputs()`,
regenerate `raw.json` from the engine; the test says when it has drifted.

Files are canonical: rad/s, seconds, absolute magnitude and degrees. The
display toggles (rad/s, Hz or, in discrete time, rad/sample; dB or absolute, degrees or radians, wrapped or
unwrapped phase) change only what is shown, and exports record them only so an
import restores the view. Margin thresholds are user inputs whose pre-filled
values are labelled "unsourced default".
