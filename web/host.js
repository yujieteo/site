// Browser host: the DOM, Canvas and controls. Rust in the embedded WebAssembly owns every rule:
// scenes and their display lists, Markdown, cell order and staleness, themes, Vim, PDF and ZIP.
(async () => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const status = $("[data-engine-status]"), motion = $("[data-motion]"), html = document.documentElement;
  const text = (id) => $("#" + id)?.textContent.replaceAll("<\\/", "</");
  const b64 = (s) => Uint8Array.from(atob(s.trim()), (c) => c.charCodeAt(0));
  let api, module;
  try {
    module = await WebAssembly.compile(b64(text("wasm")));
    api = (await WebAssembly.instantiate(module, {})).exports;
  } catch (e) {
    if (status) status.textContent = `Live drawing unavailable: ${e.message}`;
    return;
  }
  const enc = new TextEncoder(), dec = new TextDecoder();
  // One call across the boundary: input bytes in, output bytes out.
  const call = (f, input, ...args) => {
    const at = api.alloc(input.length); // may grow memory, so read the buffer after
    new Uint8Array(api.memory.buffer, at, input.length).set(input);
    const n = api[f](...args);
    return new Uint8Array(api.memory.buffer, api.out(), n).slice();
  };
  const bundle = (entries) => {
    const parts = entries.flatMap(([n, v]) => {
      const b = typeof v === "string" ? enc.encode(v) : v, len = new Uint8Array(new Uint32Array([b.length]).buffer);
      return [enc.encode(n), new Uint8Array(1), len, b];
    });
    const out = new Uint8Array(parts.reduce((s, p) => s + p.length, 0));
    parts.reduce((o, p) => (out.set(p, o), o + p.length), 0);
    return out;
  };

  // Drawing: the engine returns a display list (kind, shape, five numbers, rgb, alpha, screen).
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let playing = !reduce.matches, clock = 7, last = 0, raf = 0, stage = new Float32Array(0);
  const visible = new Set(), BLEED = 0.15; // a door's canvas overhangs its tile by this much
  const hex = (n) => "#" + n.toString(16).padStart(6, "0");
  const colour = (cv, v) => parseInt(getComputedStyle(cv).getPropertyValue(v).trim().slice(1), 16) || 0;
  function draw(cv) {
    const ctx = cv.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const W = Math.round(cv.clientWidth * dpr), b = "bleed" in cv.dataset ? BLEED : 0, s = W / (1 + 2 * b);
    if (!W) return;
    if (cv.width !== W) cv.width = cv.height = W;
    const d = cv.dataset, [px, py] = cv.pointer || [-1, -1];
    const pal = ["--sky", "--shade", "--glow", "--light"].map((v) => colour(cv, v));
    const ops = new Float32Array(call("paint", new Uint8Array(stage.buffer), +(d.seed || html.dataset.seed || 1), +d.scene,
      d.t ? +d.t : clock, d.progress === undefined ? -1 : +d.progress, px, py, ...pal).buffer);
    ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, W, W), ctx.setTransform(s, 0, 0, s, b * s, b * s);
    let clipped = false;
    for (let i = 0; i < ops.length; i += 10) {
      const [k, sh, a, c, e, f, g, rgb, alpha, screen] = ops.subarray(i, i + 10);
      if (clipped && k > 0) ctx.restore(), (clipped = false);
      if (k === 2) continue;
      ctx.beginPath();
      if (sh === 0) ctx.roundRect(a, c, e, f, g);
      else if (sh === 1) ctx.ellipse(a, c, e, f, 0, 0, 7);
      else if (sh === 2) ctx.moveTo(a, c), ctx.lineTo(e, f);
      else ctx.arc(a, c, e, 0, 7);
      if (k === 1) {
        ctx.save(), ctx.clip(), (clipped = true);
        continue;
      }
      ctx.globalAlpha = alpha, ctx.globalCompositeOperation = screen ? "screen" : "source-over";
      if (sh < 2) ctx.fillStyle = hex(rgb), ctx.fill();
      else (ctx.strokeStyle = hex(rgb)), (ctx.lineWidth = sh === 2 ? g : f), (ctx.lineCap = "round"), ctx.stroke();
    }
    if (clipped) ctx.restore();
  }

  const frame = (now) => {
    clock += Math.min((now - last) / 1000, 0.1), last = now;
    visible.forEach((cv) => cv.dataset.t || draw(cv));
    raf = playing && visible.size ? requestAnimationFrame(frame) : 0;
  };
  const kick = () => {
    if (playing && !raf && visible.size) raf = requestAnimationFrame((t) => ((last = t), frame(t)));
    else if (!playing) visible.forEach(draw);
  };
  const redraw = () => visible.forEach(draw);
  const setPlaying = (on) => {
    playing = on;
    if (motion) motion.textContent = on ? "Pause" : "Play", motion.setAttribute("aria-pressed", on);
    if (!on) cancelAnimationFrame(raf), (raf = 0);
    kick();
  };
  const io = new IntersectionObserver((es) => {
    for (const e of es) e.isIntersecting ? (visible.add(e.target), draw(e.target)) : visible.delete(e.target);
    kick();
  });
  const watch = (cv) => {
    io.observe(cv);
    cv.addEventListener("pointermove", (e) => {
      const b = cv.getBoundingClientRect(), k = "bleed" in cv.dataset ? 1 + 2 * BLEED : 1, o = (k - 1) / 2;
      cv.pointer = [((e.clientX - b.left) / b.width) * k - o, ((e.clientY - b.top) / b.height) * k - o];
      if (!playing || cv.dataset.t) draw(cv);
    });
    cv.addEventListener("pointerleave", () => ((cv.pointer = null), draw(cv)));
  };
  $$("canvas[data-scene]").forEach(watch);
  new ResizeObserver(redraw).observe(document.body);
  motion?.addEventListener("click", () => setPlaying(!playing));
  reduce.addEventListener("change", () => setPlaying(!reduce.matches));
  setPlaying(playing);

  // Stories: the active chapter picks the stage's scene; scroll sets its progress.
  const view = $("[data-stage]"), count = $("[data-count]"), bar = $("[data-bar]");
  let chapters = [], active;
  const sync = () => {
    if (!view || !active) return;
    const b = active.getBoundingClientRect(), page = document.documentElement;
    view.dataset.scene = active.dataset.chapter;
    view.dataset.progress = Math.min(1, Math.max(0, (innerHeight * 0.6 - b.top) / b.height));
    count.textContent = `${chapters.indexOf(active) + 1} / ${chapters.length}`;
    bar.style.transform = `scaleX(${page.scrollTop / Math.max(1, page.scrollHeight - innerHeight)})`;
    if (!playing) draw(view);
  };
  const co = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) active = e.target;
    sync();
  }, { rootMargin: "-65% 0px -35% 0px" });
  const bind = () => {
    co.disconnect(), (chapters = $$("[data-chapter]")), (active = chapters[0]);
    chapters.forEach((c) => co.observe(c));
    $$("article canvas[data-scene]").forEach(watch);
    sync();
  };
  addEventListener("scroll", sync, { passive: true });
  bind();

  // Notebook: outputs come from a clean run of the compiled cells in a worker, in data-flow order.
  const article = $("[data-article]");
  if (!article || !text("source")) return;
  let source = text("source"), result = JSON.parse(text("run"));
  const built = text("built"), assets = b64(text("assets")), manifest = text("manifest");
  stage = new Float32Array(result.stage.map((v) => v ?? NaN));
  const md = (op, entries) => dec.decode(call("md", bundle(entries), op));
  const render = () => {
    article.innerHTML = md(0, [["src", source], ["built", built], ...result.out.map((o) => ["o", o]), ...result.ctl.map((c) => ["c", c]), ["assets", assets]]);
    bind(), redraw();
  };
  const WORKER = `onmessage = ({ data: [m, v] }) => { let e; try { e = new WebAssembly.Instance(m, {}).exports; v.forEach((x, k) => e.nb_input(k, x)); const n = e.nb_run();
    postMessage({ json: new TextDecoder().decode(new Uint8Array(e.memory.buffer, e.out(), n)) }); } catch (x) { postMessage({ trap: String(x), cell: e ? e.nb_cell() : 0 }); } };`;
  let worker, busy = false, again = false;
  const sig = (h) => (h.match(/data-k="\d+"|<label>[^<]*/g) || []).join();
  const fail = (k, msg) => { const c = $(`[data-cell="${k}"]`, article); if (c) c.insertAdjacentHTML("beforeend", '<p class="err"></p>'), (c.lastChild.textContent = msg); };
  function apply(r) {
    $$(".err", article).forEach((e) => e.remove());
    if (r.json) {
      result = JSON.parse(r.json);
      result.out.forEach((h, j) => { const el = $(`[data-out="${j}"]`, article); if (el && el.innerHTML !== h) el.innerHTML = h; });
      result.ctl.forEach((h, j) => { const el = $(`[data-ctl="${j}"]`, article); if (el && sig(el.innerHTML) !== sig(h)) el.innerHTML = h; });
      stage = new Float32Array(result.stage.map((v) => v ?? NaN));
    }
    const err = r.trap || result.err, k = r.trap ? r.cell : +(/^cell (\d+)/.exec(result.err || "") || [0, 1])[1] - 1;
    if (err) fail(k, err);
    redraw();
  }
  const values = () => $$("[data-k]", article).reduce((v, el) => ((v[+el.dataset.k] = el.tagName === "SELECT" ? el.selectedIndex : +el.value), v), []);
  const run = () => new Promise((done) => {
    if (busy) return (again = true), done(result);
    busy = true;
    worker ||= new Worker(URL.createObjectURL(new Blob([WORKER], { type: "text/javascript" })));
    const finish = (r) => (clearTimeout(timer), (busy = false), apply(r), done(result), again && ((again = false), run()));
    const timer = setTimeout(() => (worker.terminate(), (worker = null), finish({ trap: "stopped after 10 s", cell: 0 })), 10000);
    worker.onmessage = (e) => finish(e.data);
    worker.postMessage([module, values()]);
  });
  article.addEventListener("input", (e) => {
    if (!e.target.dataset.k) return;
    const o = e.target.nextElementSibling;
    if (o?.tagName === "OUTPUT") o.textContent = e.target.value;
    run();
  });

  // Tools: view, theme, scheme and font live in the source, so Save keeps them.
  const meta = (k, v) => ((source = md(2, [["src", source], ["key", k], ["value", v]])), editor && (editor.value = source));
  const dark = () => (html.dataset.scheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
  const theme = $("[data-act=theme]");
  const persist = () => { const o = theme.selectedOptions[0]; meta("theme", dark() ? o.dataset.dark : o.dataset.light); };
  const download = (name, data) => Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob([data])), download: name }).click();
  const raw = (s) => s.replaceAll("</", "<\\/");
  let editor;
  const FONTS = { sans: "Sans", book: "Book", tex: "TeX" };
  const label = () => (($("[data-act=scheme]").textContent = dark() ? "Dark" : "Light"), ($("[data-act=font]").textContent = FONTS[html.dataset.font]));
  const act = {
    run,
    scheme: () => ((html.dataset.scheme = dark() ? "light" : "dark"), persist(), label()),
    font: () => { const f = Object.keys(FONTS); meta("font", (html.dataset.font = f[(f.indexOf(html.dataset.font) + 1) % 3])), label(); },
    edit: () => {
      if (!editor) {
        editor = Object.assign(document.createElement("textarea"), { className: "editor", spellcheck: false, value: source });
        editor.setAttribute("autocapitalize", "off"), $(".tools").after(editor);
        let t;
        editor.addEventListener("input", () => (clearTimeout(t), (t = setTimeout(() => ((source = editor.value), render()), 250))));
      } else editor.hidden = !editor.hidden;
    },
    save: () => {
      const doc = html.cloneNode(true);
      $("#source", doc).textContent = raw(source), ($("#run", doc).textContent = raw(JSON.stringify(result)));
      $$(".editor", doc).forEach((e) => e.remove()), $$("canvas", doc).forEach((c) => (c.removeAttribute("width"), c.removeAttribute("height")));
      download(location.pathname.split("/").at(-2) + ".html", "<!doctype html>\n" + doc.outerHTML);
    },
    zip: () => download("source.zip", call("zip", bundle([["index.md", source], ["assets", assets], ["manifest.json", manifest.slice(10, manifest.indexOf(',"outputs":'))]]))),
    manifest: () => download("manifest.json", manifest),
    // Exports stop on stale or failed outputs; fonts are the page's own embedded files.
    pdf: (form) => {
      if ($(".stale", article) || result.err) return status && (status.textContent = "Export stopped: outputs are stale or failed. Run first; code edits need a rebuild.");
      const css = $("style").textContent, font = (f) => ["fonts/" + f.file, b64(css.split(`"${f.family}";src:url(data:font/otf;base64,`)[1].split(")")[0])];
      const files = JSON.parse(manifest).source.font.files.map(font);
      download($(`[data-act=pdf][data-arg="${form}"]`).dataset.name, call("pdf", bundle([["src", source], ...result.out.map((o) => ["o", o]), ["stage", new Uint8Array(stage.buffer)], ...files, ["assets", assets]]), +form));
    },
  };
  label();
  $$("[data-act]").forEach((b) => b.addEventListener(b.tagName === "SELECT" ? "change" : "click", () => (b.tagName === "SELECT" ? ((html.dataset.theme = b.value), persist()) : act[b.dataset.act](b.dataset.arg))));

  // The agent API: the same actions as the controls, plus the skill comments as text.
  window.notebook = {
    manifest: () => JSON.parse(manifest),
    source: () => source,
    setSource: (s) => ((source = s), editor && (editor.value = s), render()),
    skills: () => JSON.parse(md(1, [["src", source]])),
    run: (v = {}) => (Object.entries(v).forEach(([k, x]) => { const el = $(`[data-k="${k}"]`, article); if (el) el.value = x; }), run()),
    export: (kind, form) => act[kind]?.(form), // "pdf" (form 0-3: notebook, slides, handout, article), "zip", "save", "manifest"
  };
})();
