// teoyujie.org additions to the vendored beamdswitch page (index.html loads
// this file; the app itself is unchanged). It adds:
//
// - an About button with what the page downloads and when, and whether WASM
//   gets threads (cross-origin isolation, from coi-serviceworker.js), or
//   whether narration cannot load at all because the service worker is blocked;
// - the same sizes and thread status inside the app's "Load Kokoro" dialog;
// - WebMCP tools, like the site's other visuals.
//
// Sizes come from data.json, which lists every Kokoro file the build fetched
// into kokoro/ with its exact byte count.
(() => {
  const MiB = 1048576;
  const mb = bytes => (bytes / MiB).toFixed(bytes < 10 * MiB ? 1 : 0) + ' MB';
  const esc = s => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
  let data = null;
  const loadData = () => (data ||= fetch(new URL('data.json', document.baseURI)).then(r => {
    if (!r.ok) throw new Error(`data.json: ${r.status}`);
    return r.json();
  }));
  loadData().catch(() => { data = null; });

  // Bytes fetched the first time each engine narrates with one voice.
  function firstLoad(d) {
    const sum = kinds => d.downloads.filter(f => kinds.includes(f.loaded)).reduce((n, f) => n + f.bytes, 0);
    const voice = d.downloads.find(f => f.loaded === 'voice')?.bytes || 0;
    return { page: d.upstream.bytes, wasm: sum(['narration', 'wasm']) + voice, webgpu: sum(['narration', 'webgpu']) + voice, voice };
  }

  // coi-serviceworker.js isolates the page and serves ONNX Runtime's .mjs
  // with a JavaScript type, which this site's nginx does not. Without the
  // worker, the browser refuses that module and narration cannot load.
  function runtime() {
    if (window.crossOriginIsolated) {
      return { state: 'threads', short: 'WASM threads: on.', text: 'Ready, with threads: the page is cross-origin isolated, so WASM narration runs on several threads. WebGPU narration needs no threads.' };
    }
    if (navigator.serviceWorker?.controller) {
      return { state: 'single', short: 'WASM threads: off (one thread, about a sixth of real time).', text: 'Ready, on one thread: the page could not be cross-origin isolated in this browser, so WASM narration runs single-threaded, at about a sixth of real time. WebGPU narration is unaffected.' };
    }
    return { state: 'none', short: 'This browser blocked the page\'s service worker (private windows often do), so Kokoro cannot load here; reload, or use a normal window.', text: 'Unavailable here: narration needs this page\'s service worker, which this browser blocked (private windows and some privacy settings do). Reload once, or open the page in a normal window. Slides, the handout, animation and the silent video still work.' };
  }

  const app = () => window.beamdswitch;

  async function about() {
    const ctx = app();
    if (!ctx) return;
    let rows = '<p>Could not read the download list (data.json).</p>';
    try {
      const d = await loadData(), s = firstLoad(d);
      rows = `<table class="site-sizes">
<tr><th scope="row">This page</th><td>${mb(s.page)}</td><td>every visit: editor, slides, handout, animation, silent video</td></tr>
<tr><th scope="row">Narration on WASM (8-bit)</th><td>${mb(s.wasm)}</td><td>once, on the first narration or narrated video without WebGPU</td></tr>
<tr><th scope="row">Narration on WebGPU (fp32)</th><td>${mb(s.webgpu)}</td><td>once, instead, where the browser has WebGPU</td></tr>
<tr><th scope="row">Each further voice</th><td>${mb(s.voice)}</td><td>the first time a deck uses it</td></tr>
</table>
<p>Nothing is fetched until you ask for a voice; the browser then caches the model, and every file comes from this site.
On a phone, choose <i>WASM, 8-bit</i> in the Kokoro dialog for the smaller download.
Vendored from beamdswitch (a private repository) at commit <code>${esc(d.upstream.commit.slice(0, 7))}</code>.</p>`;
    } catch { /* keep the fallback text */ }
    const box = ctx.dialog(`<h2>About this page</h2>
<p>beamdswitch turns Markdown with LaTeX into web slides, a print handout, Kokoro narration and a narrated, captioned MP4, all in your browser. Nothing is uploaded.</p>
<h2>What it downloads</h2>${rows}
<h2>Narration in this browser</h2><p>${esc(runtime().text)}</p>
<div class="row"><a class="btn" href="../../visuals.html">All visuals</a><button class="btn" id="site-close">Close</button></div>`);
    box.querySelector('#site-close').onclick = ctx.closeDialog;
  }

  // Add the exact sizes and thread status to beamdswitch's own Kokoro dialog.
  async function annotateKokoroDialog(box) {
    if (!box.querySelector('#k-dev') || box.querySelector('#site-kokoro')) return;
    const note = document.createElement('p');
    note.id = 'site-kokoro';
    note.textContent = runtime().short;
    box.querySelector('p')?.after(note);
    try {
      const s = firstLoad(await loadData());
      note.textContent = `On this site the first load is ${mb(s.wasm)} for WASM or ${mb(s.webgpu)} for WebGPU, runtime and one voice included. ` + note.textContent;
    } catch { /* thread status alone */ }
  }

  function addAbout() {
    const help = document.getElementById('b-help');
    if (!help || document.getElementById('b-site-about')) return;
    const button = document.createElement('button');
    button.className = 'btn';
    button.id = 'b-site-about';
    button.title = 'What this page downloads, and where it comes from';
    button.textContent = 'About';
    button.onclick = about;
    help.before(button);
    const style = document.createElement('style');
    style.textContent = '.site-sizes{border-collapse:collapse;width:100%;line-height:1.4}.site-sizes th,.site-sizes td{text-align:left;vertical-align:top;padding:4px 8px 4px 0;border-bottom:1px solid var(--border)}.site-sizes td:nth-child(2){white-space:nowrap;font-variant-numeric:tabular-nums}';
    document.head.append(style);
    const dbox = document.getElementById('dbox');
    if (dbox) new MutationObserver(() => annotateKokoroDialog(dbox)).observe(dbox, { childList: true });
  }

  // ---------------------------------------------------------------- WebMCP
  function registerTools() {
    const mc = document.modelContext || navigator.modelContext;
    if (!mc) return;
    const out = obj => ({ content: [{ type: 'text', text: JSON.stringify(obj) }] });
    const empty = { type: 'object', properties: {}, additionalProperties: false };
    const ready = () => { if (!app()) throw new Error('beamdswitch is still starting'); return app(); };
    const frame = f => ({
      index: f.index + 1, kind: f.kind, title: f.title, section: f.section || null,
      steps: f.steps, notes: f.notes, narration: f.narration,
    });
    mc.registerTool({
      name: 'get_metadata',
      description: 'Describe this page: what beamdswitch does, the vendored upstream commit, every Kokoro file it can download with its size and when it loads, the first-load size per narration engine, and whether WASM gets threads.',
      inputSchema: empty, annotations: { readOnlyHint: true },
      async execute() {
        const d = await loadData();
        return out({ title: 'beamdswitch', upstream: d.upstream, first_load_bytes: firstLoad(d), downloads: d.downloads, cross_origin_isolated: !!window.crossOriginIsolated });
      },
    });
    mc.registerTool({
      name: 'get_deck',
      description: 'Return the deck in the editor: front matter and every frame (1-based index, kind, title, section, overlay steps, presenter notes, narration), plus the frame and step on screen.',
      inputSchema: empty, annotations: { readOnlyHint: true },
      async execute() {
        const ctx = ready();
        return out({ meta: ctx.deck.meta, current: { frame: ctx.i + 1, step: ctx.step + 1 }, frames: ctx.deck.frames.map(frame) });
      },
    });
    mc.registerTool({
      name: 'go_to_frame',
      description: 'Show a frame (1-based) at an overlay step (1-based, default 1) and return it.',
      inputSchema: {
        type: 'object', additionalProperties: false, required: ['frame'],
        properties: { frame: { type: 'integer', minimum: 1 }, step: { type: 'integer', minimum: 1 } },
      },
      async execute({ frame: n, step = 1 } = {}) {
        const ctx = ready(), frames = ctx.deck.frames;
        if (!Number.isInteger(n) || n < 1 || n > frames.length) throw new Error(`frame must be 1 to ${frames.length}`);
        ctx.go(n - 1, Math.max(0, Math.min(step, frames[n - 1].steps) - 1));
        return out({ current: { frame: ctx.i + 1, step: ctx.step + 1 }, frame: frame(frames[ctx.i]) });
      },
    });
    mc.registerTool({
      name: 'get_narration_status',
      description: 'Report narration readiness: whether Kokoro is loaded, on which device and dtype, generation statistics, whether the browser has WebGPU, and narration: threads (WASM multi-threaded), single (one thread) or none (the service worker is blocked, so Kokoro cannot load).',
      inputSchema: empty, annotations: { readOnlyHint: true },
      async execute() {
        const s = app()?.engine?.stats || {};
        return out({
          kokoro_loaded: !!s.loadMs, device: s.device || null, dtype: s.dtype || null,
          sentences: s.sentences || 0, audio_seconds: s.audioSec || 0, generation_ms: s.genMs || 0,
          webgpu_available: !!navigator.gpu, cross_origin_isolated: !!window.crossOriginIsolated,
          narration: runtime().state,
        });
      },
    });
  }

  addAbout();
  registerTools();
})();
