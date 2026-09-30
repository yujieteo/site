// teoyujie.org additions to the vendored beamdswitch page (index.html loads
// this file; the app itself is unchanged): WebMCP tools, like the site's other
// visuals. Sizes come from data.json, which lists every Kokoro file the build
// fetched into kokoro/ with its exact byte count.
(() => {
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
    if (window.crossOriginIsolated) return 'threads';
    return navigator.serviceWorker?.controller ? 'single' : 'none';
  }

  const app = () => window.beamdswitch;

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
          narration: runtime(),
        });
      },
    });
  }

  registerTools();
})();
