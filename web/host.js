// Browser host: the DOM, Canvas and controls. Rust in the embedded WebAssembly owns every rule:
// scenes and their display lists, Markdown, cell order and staleness, themes, Vim, PDF and ZIP.
(async () => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const make = (tag, props) => Object.assign(document.createElement(tag), props);
  const status = $("[data-engine-status]"), motion = $("[data-motion]"), html = document.documentElement;
  const say = (msg) => status && (status.textContent = msg);
  const text = (id) => $("#" + id)?.textContent.replaceAll("<\\/", "</");
  const b64 = (s) => Uint8Array.from(atob(s.trim()), (c) => c.charCodeAt(0));
  let api, module;
  try { module = await WebAssembly.compile(b64(text("wasm"))); api = (await WebAssembly.instantiate(module, {})).exports; }
  catch (e) { return say(`Live drawing unavailable: ${e.message}`); }
  const enc = new TextEncoder(), dec = new TextDecoder();
  // One call across the boundary: input bytes in, output bytes out.
  const call = (f, input, ...args) => {
    const at = api.alloc(input.length); // may grow memory, so read the buffer after
    new Uint8Array(api.memory.buffer, at, input.length).set(input);
    const n = api[f](...args);
    return new Uint8Array(api.memory.buffer, api.out(), n).slice();
  };
  // A bundle (`pack::bundle`): each entry's name, a zero byte, its length (u32) and its bytes.
  const bundle = (entries) => {
    const parts = entries.flatMap(([n, v]) => {
      const b = typeof v === "string" ? enc.encode(v) : v;
      return [enc.encode(n), new Uint8Array(1), new Uint8Array(new Uint32Array([b.length]).buffer), b];
    });
    const out = new Uint8Array(parts.reduce((s, p) => s + p.length, 0));
    parts.reduce((at, p) => { out.set(p, at); return at + p.length; }, 0);
    return out;
  };

  // Drawing: the engine returns a display list (kind, shape, five numbers, rgb, alpha, screen).
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let playing = !reduce.matches, clock = 7, last = 0, raf = 0, stage = new Float32Array(0);
  const visible = new Set(), BLEED = 0.15; // a door's canvas overhangs its tile by this much
  const hex = (n) => "#" + n.toString(16).padStart(6, "0");
  // A chapter's frame is a still (its own t) in the handout and article; elsewhere it plays.
  const still = (cv) => cv.dataset.t && /handout|article/.test(html.dataset.view);
  const colour = (cv, v) => parseInt(getComputedStyle(cv).getPropertyValue(v).trim().slice(1), 16) || 0;
  const pal = (cv) => ["--sky", "--shade", "--glow", "--light"].map((v) => colour(cv, v));
  // One frame of a scene into ctx at (x, y), s pixels to the unit square.
  function paint(ctx, d, t, pal, x, y, s, [px, py] = [-1, -1]) {
    const seed = +(d.seed || html.dataset.seed || 1), p = d.progress === undefined ? -1 : +d.progress;
    const ops = new Float32Array(call("paint", new Uint8Array(stage.buffer), seed, +d.scene, t, p, px, py, ...pal).buffer);
    ctx.save(); ctx.setTransform(s, 0, 0, s, x, y);
    let clipped = false;
    for (let i = 0; i < ops.length; i += 10) {
      const [k, sh, a, c, e, f, g, rgb, alpha, screen] = ops.subarray(i, i + 10);
      if (clipped && k > 0) { ctx.restore(); clipped = false; }
      if (k === 2) continue;
      ctx.beginPath();
      if (sh === 0) ctx.roundRect(a, c, e, f, g);
      else if (sh === 1) ctx.ellipse(a, c, e, f, 0, 0, 7);
      else if (sh === 2) { ctx.moveTo(a, c); ctx.lineTo(e, f); }
      else ctx.arc(a, c, e, 0, 7);
      if (k === 1) { ctx.save(); ctx.clip(); clipped = true; continue; }
      ctx.globalAlpha = alpha; ctx.globalCompositeOperation = screen ? "screen" : "source-over";
      if (sh < 2) { ctx.fillStyle = hex(rgb); ctx.fill(); }
      else { ctx.strokeStyle = hex(rgb); ctx.lineWidth = sh === 2 ? g : f; ctx.lineCap = "round"; ctx.stroke(); }
    }
    if (clipped) ctx.restore();
    ctx.restore();
  }
  function draw(cv) {
    const ctx = cv.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const W = Math.round(cv.clientWidth * dpr), b = "bleed" in cv.dataset ? BLEED : 0, s = W / (1 + 2 * b);
    if (!W) return;
    if (cv.width !== W) cv.width = cv.height = W;
    ctx.clearRect(0, 0, W, W);
    paint(ctx, cv.dataset, still(cv) ? +cv.dataset.t : clock, pal(cv), b * s, b * s, s, cv.pointer);
  }
  const redraw = () => visible.forEach(draw);

  const frame = (now) => {
    clock += Math.min((now - last) / 1000, 0.1); last = now;
    visible.forEach((cv) => still(cv) || draw(cv));
    raf = playing && [...visible].some((cv) => !still(cv)) ? requestAnimationFrame(frame) : 0;
  };
  const kick = () => {
    if (playing && !raf && visible.size) raf = requestAnimationFrame((t) => { last = t; frame(t); });
    else if (!playing) redraw();
  };
  const setPlaying = (on) => {
    playing = on;
    if (motion) { motion.textContent = on ? "Pause" : "Play"; motion.setAttribute("aria-pressed", on); }
    if (!on) { cancelAnimationFrame(raf); raf = 0; }
    kick();
  };
  const io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) { visible.add(e.target); draw(e.target); } else visible.delete(e.target);
    kick();
  });
  const watch = (cv) => {
    io.observe(cv);
    cv.addEventListener("pointermove", (e) => {
      const b = cv.getBoundingClientRect(), k = "bleed" in cv.dataset ? 1 + 2 * BLEED : 1, o = (k - 1) / 2;
      cv.pointer = [((e.clientX - b.left) / b.width) * k - o, ((e.clientY - b.top) / b.height) * k - o];
      if (!playing || still(cv)) draw(cv);
    });
    cv.addEventListener("pointerleave", () => { delete cv.pointer; draw(cv); });
  };
  $$("canvas[data-scene]").forEach(watch);
  new ResizeObserver(redraw).observe(document.body);
  motion?.addEventListener("click", () => setPlaying(!playing));
  reduce.addEventListener("change", () => setPlaying(!reduce.matches));
  setPlaying(playing);

  // Notebook: outputs come from a clean run of the compiled cells in a worker, in data-flow order.
  const article = $("[data-article]");
  if (!article || !text("source")) return;
  let source = text("source"), result = JSON.parse(text("run"));
  const built = text("built"), assets = b64(text("assets")), manifest = text("manifest");
  stage = new Float32Array(result.stage.map((v) => v ?? NaN));
  const md = (op, entries) => dec.decode(call("md", bundle(entries), op));
  // An edit that only changes numbers in cell bodies reruns the compiled cells with the new values.
  // Edits are kept in this browser (a draft per notebook) until they match the built page again.
  let tuned = "[]";
  const key = "draft:" + location.pathname.replace(/[^/]*$/, "");
  const render = () => {
    try { source === built ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify([built, source])); } catch (e) {}
    const outputs = [...result.out.map((o) => ["o", o]), ...result.ctl.map((c) => ["c", c])];
    article.innerHTML = md(0, [["src", source], ["built", built], ...outputs, ["assets", assets]]);
    $$("canvas[data-scene]", article).forEach(watch);
    redraw();
    const t = md(6, [["src", source], ["built", built]]);
    if (t !== tuned) { tuned = t; run(); }
  };
  // The cells' worker keeps one instance for its runs, so data that a cell parsed once stays parsed; a trap
  // drops it. It is given the controls' values (texts as bytes) and the live numbers, and answers with the
  // run's JSON, or the trap and the cell that was running.
  const WORKER = `let e;
  onmessage = ({ data: [m, v, t] }) => {
    const read = (n) => new TextDecoder().decode(new Uint8Array(e.memory.buffer, e.out(), n));
    const put = (x) => {
      const b = new TextEncoder().encode(x), at = e.alloc(b.length);
      new Uint8Array(e.memory.buffer, at, b.length).set(b);
    };
    try {
      e ||= new WebAssembly.Instance(m, {}).exports;
      v.forEach((x, k) => (typeof x === "string" ? (put(x), e.nb_field(k)) : e.nb_input(k, x)));
      t.forEach(([k, x]) => e.nb_num(k, x));
      postMessage({ json: read(e.nb_run()) });
    } catch (x) {
      let msg = String(x);
      try { msg = read(e.nb_panic()) || msg; } catch {}
      postMessage({ trap: msg, cell: e ? e.nb_cell() : 0 });
      e = null;
    }
  };`;
  let worker, busy = false, again = false;
  // A control is redrawn when its key, label, range or options change, never for its value, so a slider
  // keeps its drag and a text box its focus.
  const sig = (h) => (h.match(/data-k="\d+"|<label>[^<]*| max="[^"]*"|<option[^>]*>[^<]*/g) || []).join().replaceAll(" selected", "");
  const fail = (k, msg) => $(`[data-cell="${k}"]`, article)?.append(make("p", { className: "err", textContent: msg }));
  function apply(r) {
    $$(".err", article).forEach((e) => e.remove());
    if (r.json) {
      result = JSON.parse(r.json);
      result.out.forEach((h, j) => { const el = $(`[data-out="${j}"]`, article); if (el && el.innerHTML !== h) el.innerHTML = h; });
      result.ctl.forEach((h, j) => { const el = $(`[data-ctl="${j}"]`, article); if (el && sig(el.innerHTML) !== sig(h)) el.innerHTML = h; });
      stage = new Float32Array(result.stage.map((v) => v ?? NaN));
    }
    // A trap names its cell; an error from the run reads "cell N: …".
    const err = r.trap || result.err, k = r.trap ? r.cell : +(/^cell (\d+)/.exec(result.err || "") || [0, 1])[1] - 1;
    if (err) fail(k, err);
    redraw();
  }
  // A choice sends its option's text, so it keeps that option while its options change; a text box sends its text.
  const values = () => {
    const v = [];
    for (const el of $$("[data-k]", article)) v[+el.dataset.k] = el.tagName === "SELECT" || el.type === "search" ? el.value : +el.value;
    return v;
  };
  // One run at a time: a change during a run asks for one more. A run is stopped after 10 s.
  const run = () => new Promise((done) => {
    if (busy) { again = true; return done(result); }
    busy = true;
    worker ||= new Worker(URL.createObjectURL(new Blob([WORKER], { type: "text/javascript" })));
    const finish = (r) => {
      clearTimeout(timer); busy = false; apply(r); done(result);
      if (again) { again = false; run(); }
    };
    const timer = setTimeout(() => { worker.terminate(); worker = null; finish({ trap: "stopped after 10 s", cell: 0 }); }, 10000);
    worker.onmessage = (e) => finish(e.data);
    worker.postMessage([module, values(), JSON.parse(tuned)]);
  });
  article.addEventListener("input", ({ target: t }) => {
    if (!t.dataset.k) return;
    if (t.nextElementSibling?.tagName === "OUTPUT") t.nextElementSibling.textContent = t.value;
    run();
  });

  // Tools: the view is the page; the theme is the site's (the header's dialog).
  const download = (name, data) => make("a", { href: URL.createObjectURL(new Blob([data])), download: name }).click();
  const raw = (s) => s.replaceAll("</", "<\\/");
  const mark = () => $$("[data-act=view]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.arg === html.dataset.view));
  // Narration: Rust plans the lines and their Kokoro phonemes; a module worker runs kokoro-js
  // 1.2.1 on bytes from kokoro/ beside the site, each checked against kokoro.lock (manifest
  // "voice"); any other fetch fails. Rust then lays out the podcast, captions and timings.
  const VOICE = `const real = fetch, HF = "https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/";
    const hex = (b) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
    let base, pins, tts;
    const get = async (p) => {
      const r = await real(base + p).catch(() => ({})), b = r.ok ? await r.arrayBuffer() : 0;
      if (!b) throw Error("No voice at kokoro/" + p + ": install it with scripts/kokoro.sh and serve the site over HTTP.");
      if (hex(await crypto.subtle.digest("SHA-256", b)) !== pins[p]) throw Error("kokoro/" + p + " does not match kokoro.lock");
      return b;
    };
    const url = async (p, type) => URL.createObjectURL(new Blob([await get(p)], { type }));
    // The model's own downloads come from kokoro/model/, checked; nothing else is fetched or cached.
    self.fetch = async (u, o) => {
      u = String(u?.url ?? u);
      if (u.startsWith("blob:")) return real(u, o);
      return u.startsWith(HF) ? new Response(await get("model/" + u.slice(HF.length))) : new Response(null, { status: 404 });
    };
    Object.defineProperty(self, "caches", { value: { open: async () => ({ match: async () => {}, put: async () => {} }) } });
    onmessage = async ({ data: { lines, voice, speed, ...m } }) => {
      try {
        ({ base, pins } = m);
        if (!tts) {
          const { KokoroTTS, env } = await import(await url("kokoro.web.js", "text/javascript"));
          const ort = "ort/ort-wasm-simd-threaded.jsep.";
          env.wasmPaths = { mjs: await url(ort + "mjs", "text/javascript"), wasm: await url(ort + "wasm", "application/wasm") };
          tts = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", { dtype: "q8", device: "wasm" });
        }
        const audio = [], o = { voice, speed };
        for (const [i, l] of lines.entries()) {
          postMessage({ at: i, of: lines.length });
          // From the planned phonemes; a line without them falls back to kokoro-js's own G2P.
          const out = l.ph ? await tts.generate_from_ids(tts.tokenizer(l.ph, { truncation: true }).input_ids, o) : await tts.generate(l.text, o);
          audio.push(out.audio);
        }
        postMessage({ audio });
      } catch (e) { postMessage({ error: String(e.message || e) }); }
    };`;
  let voice, spoken;
  // The narration for the current source, synthesised once: its plan, podcast, captions and line times.
  const narration = () => {
    if (spoken?.src === source) return spoken.p;
    const p = new Promise((ok, no) => {
      const plan = JSON.parse(md(2, [["src", source], ["assets", assets]])), pins = JSON.parse(manifest).source.voice?.files;
      if (!plan.lines.length || !pins) return no(Error("This notebook has no narration."));
      voice ||= new Worker(URL.createObjectURL(new Blob([VOICE], { type: "text/javascript" })), { type: "module" });
      voice.onmessage = ({ data: m }) => {
        if (m.at != null) return say(`Narrating line ${m.at + 1} of ${m.of}…`);
        if (m.error) { spoken = null; return no(Error(m.error)); }
        const audio = m.audio.map((a) => ["a", new Uint8Array(a.buffer, a.byteOffset, a.byteLength)]);
        const input = bundle([["src", source], ["assets", assets], ...audio]), get = (op) => call("md", input, op);
        ok({ plan, wav: get(3), vtt: dec.decode(get(4)), times: new Float32Array(get(5).buffer) });
      };
      voice.onerror = (e) => {
        spoken = null;
        no(Error(e.message || "The voice needs the site served over HTTP, with kokoro/ installed (scripts/kokoro.sh)."));
      };
      say("Loading the voice…");
      voice.postMessage({ base: new URL("kokoro/", $(".top > a").href).href, pins, ...plan });
    });
    spoken = { src: source, p };
    return p;
  };
  const name = location.pathname.split("/").at(-2);
  const narrate = (f) => () => narration().then(f).then(() => say(""), (e) => say(e.message));
  // The video: the slides as the narration reaches them, recorded in real time with the podcast.
  const record = async ({ plan, wav, times }) => {
    const ac = new AudioContext(), buf = await ac.decodeAudioData(wav.slice().buffer);
    const dest = ac.createMediaStreamDestination(), src = ac.createBufferSource();
    const cv = make("canvas", { width: 1280, height: 720 }), ctx = cv.getContext("2d");
    const css = getComputedStyle(html), v = (k) => css.getPropertyValue(k);
    const type = ["video/mp4;codecs=avc1,mp4a.40.2", "video/webm;codecs=vp9,opus", "video/webm"].find((t) => MediaRecorder.isTypeSupported(t));
    const rec = new MediaRecorder(new MediaStream([...cv.captureStream(30).getTracks(), ...dest.stream.getTracks()]), { mimeType: type });
    const chapters = $$(".chapter", article), chunks = [];
    // Text wrapped to width w from (x, y); returns the y below it.
    const para = (s, x, y, w, px, colour) => {
      ctx.fillStyle = colour; ctx.font = `${px}px ${v("--sans")}`;
      const lines = [""];
      for (const word of s.split(" ")) {
        const line = lines.at(-1) + " " + word;
        if (lines.at(-1) && ctx.measureText(line).width > w) lines.push(word); else lines[lines.length - 1] = line.trim();
      }
      lines.forEach((l, i) => ctx.fillText(l, x, y + i * px * 1.3));
      return y + lines.length * px * 1.3;
    };
    const shot = (t) => {
      const i = Math.max(0, times.findLastIndex((s) => s <= t)), ch = plan.lines[i].chapter;
      const sec = chapters[ch - 1], f = sec && $(".frame", sec);
      ctx.fillStyle = v("--bg"); ctx.fillRect(0, 0, 1280, 720); ctx.textBaseline = "top";
      const y = para(sec ? $("h2", sec).textContent : $("h1").textContent, 51, 51, f ? 512 : 1000, 56, v("--fg"));
      para(plan.lines[i].text, 51, y + 24, f ? 512 : 900, 29, v("--fg2"));
      // The scene plays from its own t, starting as its chapter's first line is spoken.
      if (f) paint(ctx, f.dataset, (+f.dataset.t || 0) + t - times[plan.lines.findIndex((l) => l.chapter === ch)], pal(f), 600, 40, 640);
    };
    await document.fonts.load(`56px ${v("--sans")}`);
    rec.ondataavailable = (e) => chunks.push(e.data);
    src.buffer = buf; src.connect(dest); rec.start(1000); src.start();
    const t0 = ac.currentTime;
    await new Promise((done) => requestAnimationFrame(function tick() {
      const t = ac.currentTime - t0;
      say(`Recording the video: ${Math.floor(t)} of ${Math.ceil(buf.duration)} s. Keep this tab visible.`); shot(t);
      t < buf.duration ? requestAnimationFrame(tick) : done();
    }));
    await new Promise((r) => { rec.onstop = r; rec.stop(); }); ac.close();
    download(name + (type.includes("mp4") ? ".mp4" : ".webm"), new Blob(chunks, { type }));
  };
  let editor;
  const KEYS = { Escape: 27, Enter: 10, Backspace: 8, Tab: 9, ArrowLeft: 8592, ArrowDown: 8595, ArrowUp: 8593, ArrowRight: 8594 };
  const PAD = [["Esc", 27], ["Ctrl", 17], [":", 58], ["Tab", 9], ["←", 8592], ["↓", 8595], ["↑", 8593], ["→", 8594]];
  const act = {
    // Run: a clean run of the compiled cells, reported, its outputs flashed. Code edits need a rebuild.
    run: async () => {
      const t = performance.now(), r = await run(), err = $(".err", article);
      article.classList.remove("ran"); void article.offsetWidth; article.classList.add("ran"); // restart the flash
      const ms = Math.round(performance.now() - t), stale = $(".stale", article) ? "; edited code runs after a rebuild" : "";
      say(err ? `Run failed: ${err.textContent}` : `Ran ${r.out.length} cells in ${ms} ms${stale}.`);
    },
    open: (id) => { mark(); $("#" + id).showModal(); },
    view: (v) => { html.dataset.view = v; history.replaceState(null, "", v + ".html"); redraw(); kick(); },
    // The editor: Rust (`vim`) owns modes, motions, operators, commands, text and undo. The textarea
    // keeps insert-mode typing, keyboard composition, touch selection, paste and the clipboard.
    edit: () => {
      if (editor) { editor.parentNode.hidden = !editor.parentNode.hidden; return editor.focus(); }
      const box = make("div", { className: "vim" }), pad = PAD.map(([l, k]) => `<button type="button" data-key="${k}">${l}</button>`);
      box.innerHTML = `<div class="pad">${pad.join("")}<output></output></div>`
        + `<textarea class="editor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>`;
      const end = source.startsWith("---\n") ? source.indexOf("\n---\n", 3) : -1, body = end < 0 ? 0 : end + 5; // after the front matter
      $(".tools").after(box);
      editor = box.lastChild; editor.value = source; editor.setSelectionRange(body, body);
      const ctrl = $("[data-key='17']", box), on = (t, f) => editor.addEventListener(t, f);
      let mode, shown = [], last, live;
      // Edits show as they are made: the page re-renders from the text a moment after it changes.
      const changed = () => {
        if (editor.value !== source) { clearTimeout(live); live = setTimeout(() => { source = editor.value; render(); }, 250); }
      };
      // One key: Rust answers with the mode, selection, actions, status line, register length, register and text.
      const vim = (key, reg) => {
        const input = bundle([["text", editor.value], ...(reg == null ? [] : [["reg", reg]])]);
        const v = dec.decode(call("vim", input, key, editor.selectionStart, editor.selectionEnd)).split("\n");
        const [m, sel, todo, line, n] = v, rest = v.slice(5).join("\n");
        last = rest.slice(+n);
        if (editor.value !== last) editor.value = last;
        mode = m; shown = sel.split(" ").map(Number);
        editor.setSelectionRange(...shown);
        $("output", box).textContent = line;
        const yank = () => navigator.clipboard?.writeText(rest.slice(0, +n)).catch(() => {});
        const ex = { y: yank, w: () => { source = last; render(); }, q: act.edit, run: act.run, save: act.save };
        todo.split(" ").forEach((a) => ex[a]?.());
        changed();
      };
      // The pad's Ctrl holds for the next key only.
      const send = (k) => { if (ctrl.ariaPressed === "true" && k > 96 && k < 123) k &= 31; ctrl.ariaPressed = "false"; vim(k); };
      const keys = (s) => [...s].forEach((c) => send(c.codePointAt(0)));
      box.firstChild.addEventListener("pointerdown", (e) => e.preventDefault()); // focus, and the phone's keyboard, stay on the text
      box.firstChild.addEventListener("click", (e) => {
        const k = +e.target.dataset.key;
        if (k === 17) ctrl.ariaPressed = ctrl.ariaPressed !== "true";
        else if (k) send(k);
      });
      on("keydown", (e) => {
        let k = KEYS[e.key] || ([...e.key].length === 1 && !e.altKey && !e.metaKey && e.key.codePointAt(0));
        if (e.ctrlKey) k = /^[a-z]$/.test(e.key) && !"acvxk".includes(e.key) && k & 31; // the browser keeps Ctrl-A, C, V, X; K searches
        if (k && (mode !== "i" || k === 27 || k === 9)) { e.preventDefault(); send(k); }
      });
      // Outside insert mode typing is keys: cancellable input becomes keys; the rest (composition) is undone first.
      on("beforeinput", (e) => {
        if (mode === "i") return;
        e.preventDefault();
        keys({ insertText: e.data, insertLineBreak: "\n", deleteContentBackward: "\b" }[e.inputType] || "");
      });
      on("input", () => {
        if (mode === "i") return changed();
        if (editor.value === last) return;
        const v = editor.value;
        let i = 0;
        while (v[i] === last[i]) i++;
        editor.value = last; keys(v.slice(i, i + v.length - last.length));
      });
      on("paste", (e) => { if (mode !== "i") { e.preventDefault(); vim(112, e.clipboardData.getData("text/plain")); } });
      const moved = () => editor.selectionStart !== shown[0] || editor.selectionEnd !== shown[1];
      document.addEventListener("selectionchange", () => document.activeElement === editor && mode !== "i" && moved() && vim(0));
      vim(0); vim(105); editor.focus(); // it opens in insert mode: typing edits, Esc for Vim
    },
    save: () => {
      const doc = html.cloneNode(true);
      doc.removeAttribute("data-mode"); doc.removeAttribute("data-theme"); // without the reader's theme
      $("#source", doc).textContent = raw(source); $("#run", doc).textContent = raw(JSON.stringify(result));
      $$(".vim", doc).forEach((e) => e.remove());
      $$("canvas", doc).forEach((c) => { c.removeAttribute("width"); c.removeAttribute("height"); });
      download(name + ".html", "<!doctype html>\n" + doc.outerHTML);
    },
    // The source ZIP's manifest is the page manifest's "source" part.
    zip: () => {
      const src = manifest.slice('{"source":'.length, manifest.indexOf(',"outputs":'));
      download("source.zip", call("zip", bundle([["index.md", source], ["assets", assets], ["manifest.json", src]])));
    },
    manifest: () => download("manifest.json", manifest),
    // Exports stop on stale or failed outputs; fonts are the page's own embedded files.
    pdf: (form) => {
      if ($(".stale", article) || result.err) return say("Export stopped: outputs are stale or failed. Run first; code edits need a rebuild.");
      const css = $("style").textContent;
      const font = (f) => ["fonts/" + f.file, b64(css.split(`"${f.family}";src:url(data:font/otf;base64,`)[1].split(")")[0])];
      const fonts = JSON.parse(manifest).source.font.files.map(font);
      const input = bundle([["src", source], ...result.out.map((o) => ["o", o]), ["stage", new Uint8Array(stage.buffer)], ...fonts, ["assets", assets]]);
      download(["notebook", "slides", "handout", "article"][form] + ".pdf", call("pdf", input, +form));
    },
    podcast: narrate((n) => download(name + ".wav", n.wav)),
    captions: narrate((n) => download(name + ".vtt", n.vtt)),
    video: narrate(record),
  };
  $$("[data-act]").forEach((b) => b.addEventListener("click", () => act[b.dataset.act](b.dataset.arg)));

  // The agent API: the same actions as the controls, plus the skill comments as text.
  window.notebook = {
    manifest: () => JSON.parse(manifest),
    source: () => source,
    setSource: (s) => { source = s; if (editor) editor.value = s; render(); },
    skills: () => JSON.parse(md(1, [["src", source]])),
    run: (v = {}) => {
      for (const [k, x] of Object.entries(v)) { const el = $(`[data-k="${k}"]`, article); if (el) el.value = x; }
      return run();
    },
    // "pdf" (form 0-3: notebook, slides, handout, article), "zip", "save", "manifest", "podcast", "captions", "video"
    export: (kind, form) => act[kind]?.(form),
  };
  // Edits from an earlier visit come back, with a button to drop them.
  let draft;
  try { draft = JSON.parse(localStorage.getItem(key)); } catch (e) {}
  if (typeof draft?.[1] === "string" && draft[1] !== built) {
    const discard = make("button", { type: "button", textContent: "Discard" });
    discard.onclick = () => { window.notebook.setSource(built); say("Edits discarded."); };
    window.notebook.setSource(draft[1]);
    status?.replaceChildren(`Restored your edits from this browser${draft[0] === built ? "" : ", made before this page was rebuilt"}. `, discard);
  }
})();
