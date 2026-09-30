# beamdswitch

Write a talk in Markdown with LaTeX; get web slides, a print handout, a
continuous article (Markdown or print), Kokoro narration, Manim-style animation
and a narrated, captioned MP4, all generated in the visitor's browser. Published at `/visuals/beamdswitch/index.html`.

## Files

| File | What |
| --- | --- |
| `index.html` | `beamdswitch.html` from the private `yujieteo/beamdswitch` repository, vendored unchanged except for one marked block at the start of `<body>` that loads the two files below and shows a static notice about the narration download |
| `coi-serviceworker.js` | service worker scoped to this folder: cross-origin isolation and module MIME types (below) |
| `site.js` | the WebMCP tools |
| `raw.json` | the upstream commit and sha256, and the pinned Kokoro downloads; published as `data.json` |

The upstream repository is private, so CI cannot check it out at a pin; the
page is vendored instead. `raw.json` records the upstream commit and the
sha256 of `beamdswitch.html`, and `tests/beamdswitch.test.mjs` checks that
`index.html` without the marked block has exactly those bytes.

To update: build `beamdswitch.html` in the beamdswitch repository, copy it
here as `index.html`, put the marked block back right after `<body>`,
and set `upstream.commit`, `upstream.sha256` and `upstream.bytes` in
`raw.json`. If its `scripts/fetch-kokoro.mjs` changed versions, update the
matching `downloads` entries too.

## Kokoro files

The Kokoro runtime and weights (about 440 MB) are never committed. `downloads`
in `raw.json` pins each file to an immutable URL (a Hugging Face commit, or an
exact npm version on jsDelivr), its byte count and sha256. These are the files
beamdswitch's `fetch-kokoro.mjs` writes to `kokoro/`, with its default voices.
`scripts/build.py` fetches and checks them and publishes them under
`site/visuals/beamdswitch/kokoro/`, so the page loads everything from this
site. The page's own guard still refuses a Kokoro folder on another origin and
any remote fetch from its worker.

First load, which the notice at the foot of the page and the catalogue summary state:

| Engine | Downloads, once | Files |
| --- | --- | --- |
| page | 2.3 MB | `index.html` |
| WASM, 8-bit | 111 MB | runtime (`kokoro.web.js`, ONNX Runtime `.mjs` and `.wasm`), `model_quantized.onnx`, one voice |
| WebGPU, fp32 | 334 MB | runtime, `model.onnx`, one voice |
| each further voice | 0.5 MB | `model/voices/<voice>.bin` |

## Cross-origin isolation without server changes

WASM threads need `SharedArrayBuffer`, which needs COOP and COEP headers. The
site's nginx must not be reconfigured, so `coi-serviceworker.js` (adapted from
coi-serviceworker, MIT) adds them. It registers from this folder, so its scope
is `/visuals/beamdswitch/` and no other page is affected. On the first visit
the page reloads once to come under the worker's control.

The worker also serves `.mjs` as `text/javascript` and `.wasm` as
`application/wasm`. nginx 1.22's `mime.types` has no `.mjs` entry, and the
browser refuses to import ONNX Runtime's `.mjs` module as
`application/octet-stream`, so without the worker narration cannot load at
all. The consequences:

| Browser state | Narration |
| --- | --- |
| worker active, page isolated | WASM on several threads; WebGPU as usual |
| worker active, not isolated | WASM on one thread, about a sixth of real time; WebGPU as usual |
| worker blocked (some private windows or privacy settings) | unavailable; slides, handout, article, animation and silent video still work |

The notice at the foot of the page says narration needs the service worker;
`get_narration_status` reports which row applies. Checked in headless Chrome against a server that serves `.mjs` as
nginx 1.22 does: isolated after the reload, WASM q8 and WebGPU fp32 narration
both produced finite audio, and with the worker removed the `.mjs` import
failed as described.

After deploying, open the page once in a browser and confirm that
`crossOriginIsolated` is `true` in the console.
