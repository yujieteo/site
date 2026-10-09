// Browser host for the Rust engine: one clock, one scheduler, Canvas drawing, controls.
(async () => {
  const views = [...document.querySelectorAll("canvas[data-scene]")];
  const status = document.querySelector("[data-engine-status]");
  const motion = document.querySelector("[data-motion]");
  let api, mem;
  try {
    const b64 = document.getElementById("wasm").textContent.trim();
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    ({ instance: { exports: api } } = await WebAssembly.instantiate(bytes, {}));
    mem = api.memory;
  } catch (e) {
    if (status) status.textContent = `Live drawing unavailable: ${e.message}`;
    return;
  }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let playing = !reduce.matches, clock = 7, last = 0, raf = 0;
  const visible = new Set();
  const css = (el, n) => getComputedStyle(el).getPropertyValue(n).trim();

  // Eye glyphs, drawn in a unit circle at (x, y) with half-size h; e is -1 for the left eye.
  const eyes = [
    (c, x, y, h, e, blink) => c.ellipse(x, y, 0.4 * h, 0.6 * h * (1 - 0.9 * blink), 0, 0, 7), // oval (filled)
    (c, x, y, h) => (c.moveTo(x - h, y), c.lineTo(x + h, y)), // – –
    (c, x, y, h) => (c.moveTo(x - h, y + 0.6 * h), c.lineTo(x, y - 0.6 * h), c.lineTo(x + h, y + 0.6 * h)), // ^ ^
    (c, x, y, h, e) => (c.moveTo(x + e * 0.7 * h, y - h), c.lineTo(x - e * 0.7 * h, y), c.lineTo(x + e * 0.7 * h, y + h)), // > <
    (c, x, y, h) => (c.moveTo(x - h, y), c.lineTo(x + h, y), c.moveTo(x, y - h), c.lineTo(x, y + h)), // + +
    (c, x, y, h) => (c.moveTo(x + 0.75 * h, y), c.arc(x, y, 0.75 * h, 0, 7)), // O O
    (c, x, y, h) => [0.5, 1.55, 2.6].forEach((a) => (c.moveTo(x - h * Math.cos(a), y - h * Math.sin(a)), c.lineTo(x + h * Math.cos(a), y + h * Math.sin(a)))), // * *
  ];
  const disc = (ctx, x, y, r) => (ctx.beginPath(), ctx.arc(x, y, r, 0, 7), ctx.fill());

  // Flat colour only: every shape is one solid fill; light is a few hard-edged, lighter shapes.
  function draw(cv) {
    const ctx = cv.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const s = Math.round(cv.clientWidth * dpr);
    if (!s) return;
    if (cv.width !== s) cv.width = cv.height = s;
    const [base, shade, accent, light, ink] = ["--base", "--shade", "--accent", "--light", "--ink"].map((n) => css(cv, n));
    const p = cv.dataset.progress === undefined ? -1 : +cv.dataset.progress;
    const [px, py] = cv.pointer || [-1, -1];
    const got = api.update(+(cv.dataset.seed || 1), +cv.dataset.scene, clock, p, px, py);
    const n = got & 0xffff, nf = got >>> 16;
    const d = new Float32Array(mem.buffer, api.dots(), n * 5);
    const f = (cv.faces = new Float32Array(mem.buffer, api.face(), nf * 12));
    const L = new Float32Array(mem.buffer, api.lights(), 24); // 6 lights; 0 is the pin light
    const hues = [shade, accent, light, ...css(cv, "--cast").split(/\s+/).filter(Boolean)];
    ctx.globalCompositeOperation = "source-over", ctx.globalAlpha = 1;
    ctx.fillStyle = base, ctx.fillRect(0, 0, s, s);
    // Dots: three tones at three opacities, one path each.
    for (let t = 0; t < 3; t++) for (let a = 1; a <= 3; a++) {
      ctx.beginPath();
      for (let i = 0; i < n * 5; i += 5) {
        const c = d[i + 3], r = d[i + 2] * s;
        if ((c < 0.34 ? 0 : c < 0.67 ? 1 : 2) !== t || Math.ceil(d[i + 4] * 3) !== a) continue;
        ctx.moveTo(d[i] * s + r, d[i + 1] * s), ctx.arc(d[i] * s, d[i + 1] * s, r, 0, 7);
      }
      ctx.globalAlpha = a / 3, ctx.fillStyle = hues[t], ctx.fill();
    }
    // Characters: a disc and two glyph eyes that look somewhere.
    ctx.lineWidth = 0.12, ctx.lineJoin = "miter";
    for (let i = 0; i < nf * 12; i += 12) {
      const [x, y, r, k, gx, gy, blink, g, sq, eye, halo, pulse] = f.subarray(i, i + 12);
      const c = hues[k] || light;
      ctx.fillStyle = k > 2 ? c : accent, ctx.globalAlpha = 0.3;
      if (halo + pulse > 0.05) disc(ctx, x * s, y * s, r * s * (1.15 + 0.1 * halo + 0.5 * (1 - pulse) * (pulse > 0.05)));
      ctx.globalAlpha = 1, ctx.save(), ctx.translate(x * s, y * s), ctx.scale(r * s * (1 + sq), r * s * (1 - sq));
      ctx.fillStyle = c, disc(ctx, 0, 0, 1);
      ctx.fillStyle = ctx.strokeStyle = ink || shade, ctx.beginPath();
      for (const e of [-1, 1]) eyes[g | 0](ctx, e * 0.48 + gx * 0.22, -0.1 + gy * 0.18, 0.26 * eye, e, blink);
      g ? ctx.stroke() : ctx.fill();
      ctx.restore();
    }
    // Light: dappled patches and a pin light, each one flat, lighter shape.
    ctx.globalCompositeOperation = "screen", ctx.fillStyle = light, ctx.globalAlpha = 0.14;
    for (let k = 4; k < 24; k += 4) {
      ctx.save(), ctx.translate(L[k] * s, L[k + 1] * s), ctx.rotate(-0.6), ctx.scale(1, 0.6);
      disc(ctx, 0, 0, L[k + 2] * s), ctx.restore();
    }
    if (L[3] > 0.1) disc(ctx, L[0] * s, L[1] * s, L[2] * s * 3), (ctx.globalAlpha = Math.ceil(L[3] * 2) / 2), disc(ctx, L[0] * s, L[1] * s, L[2] * s * 0.6);
    ctx.globalCompositeOperation = "source-over", ctx.globalAlpha = 1;
  }

  const frame = (now) => {
    clock += Math.min((now - last) / 1000, 0.1), last = now;
    visible.forEach(draw);
    raf = playing && visible.size ? requestAnimationFrame(frame) : 0;
  };
  const kick = () => {
    if (playing && !raf && visible.size) raf = requestAnimationFrame((t) => ((last = t), frame(t)));
    else if (!playing) visible.forEach(draw);
  };
  const setPlaying = (on) => {
    playing = on;
    if (motion) motion.textContent = on ? "Pause" : "Play", motion.setAttribute("aria-pressed", on);
    if (!on) cancelAnimationFrame(raf), (raf = 0);
    kick();
  };
  window.engine = { kick, draw };

  const io = new IntersectionObserver((es) => {
    for (const e of es) e.isIntersecting ? (visible.add(e.target), draw(e.target)) : visible.delete(e.target);
    kick();
  });
  for (const cv of views) {
    io.observe(cv);
    cv.addEventListener("pointermove", (e) => {
      const b = cv.getBoundingClientRect();
      cv.pointer = [(e.clientX - b.left) / b.width, (e.clientY - b.top) / b.height];
      if (!playing) draw(cv);
    });
    // A tap on a character pokes it; the buttons beside the canvas do the same from the keyboard.
    cv.addEventListener("click", (e) => {
      const b = cv.getBoundingClientRect(), x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height, f = cv.faces || [];
      for (let i = 0; i < f.length; i += 12) if (Math.hypot(x - f[i], y - f[i + 1]) < f[i + 2] && "cast" in cv.dataset) poke(cv, i / 12);
    });
    cv.addEventListener("pointerleave", () => ((cv.pointer = null), playing || draw(cv)));
  }
  function poke(cv, i) {
    api.poke(i), playing || draw(cv);
  }
  for (const b of document.querySelectorAll("[data-poke]")) b.addEventListener("click", () => poke(b.closest("section").querySelector("canvas"), +b.dataset.poke));
  new ResizeObserver(() => visible.forEach(draw)).observe(document.body);
  motion?.addEventListener("click", () => setPlaying(!playing));
  reduce.addEventListener("change", () => setPlaying(!reduce.matches));
  setPlaying(playing);

  // Stories: the active chapter picks the stage's scene; scroll sets its progress.
  const stage = document.querySelector("[data-stage]");
  const chapters = [...document.querySelectorAll("[data-chapter]")];
  if (!stage || !chapters.length) return;
  const count = document.querySelector("[data-count]"), bar = document.querySelector("[data-bar]");
  let active = chapters[0];
  const sync = () => {
    const b = active.getBoundingClientRect(), page = document.documentElement;
    stage.dataset.scene = active.dataset.chapter;
    stage.dataset.progress = Math.min(1, Math.max(0, (innerHeight * 0.6 - b.top) / b.height));
    count.textContent = `${chapters.indexOf(active) + 1} / ${chapters.length}`;
    bar.style.transform = `scaleX(${page.scrollTop / Math.max(1, page.scrollHeight - innerHeight)})`;
    if (!playing) draw(stage);
  };
  const co = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) active = e.target;
    sync();
  }, { rootMargin: "-65% 0px -35% 0px" });
  chapters.forEach((c) => co.observe(c));
  addEventListener("scroll", sync, { passive: true });
  sync();
})();
