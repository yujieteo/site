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

  // Colour helpers: palettes are #rrggbb; tint mixes toward another colour and sets alpha.
  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const tint = (h, a, to = h, k = 0) => `rgba(${rgb(h).map((v, i) => Math.round(v + (rgb(to)[i] - v) * k))},${a})`;
  // Dots are soft orbs lit from the upper left: one sprite per colour, reused every frame.
  const orbs = new Map();
  const orb = (c) => {
    if (!orbs.has(c)) {
      const o = document.createElement("canvas"), x = o.getContext("2d");
      o.width = o.height = 64;
      const g = x.createRadialGradient(24, 22, 1, 32, 32, 32);
      g.addColorStop(0, tint(c, 1, "#ffffff", 0.4)), g.addColorStop(0.6, tint(c, 1)), g.addColorStop(1, tint(c, 1, "#000000", 0.3));
      x.fillStyle = g, x.arc(32, 32, 31.5, 0, 7), x.fill();
      orbs.set(c, o);
    }
    return orbs.get(c);
  };
  // Film grain, made once.
  const grain = document.createElement("canvas"), gc = grain.getContext("2d");
  grain.width = grain.height = 96;
  const noise = gc.createImageData(96, 96);
  for (let i = 0; i < noise.data.length; i += 4) noise.data.fill(Math.random() * 255, i, i + 3), (noise.data[i + 3] = 255);
  gc.putImageData(noise, 0, 0);
  // A soft pool of light, squashed and tilted like sun through leaves.
  const glow = (ctx, x, y, r, c, a, squash) => {
    ctx.save(), ctx.translate(x, y), ctx.rotate(-0.6), ctx.scale(1, squash);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
    g.addColorStop(0, tint(c, a)), g.addColorStop(0.6, tint(c, a * 0.7)), g.addColorStop(1, tint(c, 0));
    ctx.fillStyle = g, ctx.fillRect(-r, -r, 2 * r, 2 * r), ctx.restore();
  };

  function draw(cv) {
    const ctx = cv.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const s = Math.round(cv.clientWidth * dpr);
    if (!s) return;
    if (cv.width !== s) cv.width = cv.height = s;
    const [base, shade, accent, light] = ["--base", "--shade", "--accent", "--light"].map((n) => css(cv, n));
    const p = cv.dataset.progress === undefined ? -1 : +cv.dataset.progress;
    const [px, py] = cv.pointer || [-1, -1];
    const got = api.update(+(cv.dataset.seed || 1), +cv.dataset.scene, clock, p, px, py);
    const n = got & 0xffff, nf = got >>> 16;
    const d = new Float32Array(mem.buffer, api.dots(), n * 5);
    const f = (cv.faces = new Float32Array(mem.buffer, api.face(), nf * 12));
    const L = new Float32Array(mem.buffer, api.lights(), 24); // 6 lights; 0 is the pin light
    // The field: flat colour, falling off toward the shadow colour at the edges.
    ctx.globalCompositeOperation = "source-over", ctx.globalAlpha = 1;
    ctx.fillStyle = base, ctx.fillRect(0, 0, s, s);
    const v = ctx.createRadialGradient(s * 0.5, s * 0.4, s * 0.2, s * 0.5, s * 0.5, s * 0.8);
    v.addColorStop(0, tint(shade, 0)), v.addColorStop(1, tint(shade, +(css(cv, "--falloff") || 0.55)));
    ctx.fillStyle = v, ctx.fillRect(0, 0, s, s);
    const hues = [shade, accent, light, ...css(cv, "--cast").split(/\s+/).filter(Boolean)];
    const tone = hues.map(orb);
    for (let i = 0; i < n * 5; i += 5) {
      const c = d[i + 3], r = d[i + 2] * s;
      ctx.globalAlpha = d[i + 4];
      ctx.drawImage(tone[c < 0.34 ? 0 : c < 0.67 ? 1 : 2], d[i] * s - r, d[i + 1] * s - r, 2 * r, 2 * r);
    }
    // Characters: an orb, two eyes that look somewhere, sometimes a mouth, a halo when moved.
    ctx.globalAlpha = 1, ctx.lineCap = "round";
    for (let i = 0; i < nf * 12; i += 12) {
      const [x, y, r, k, gx, gy, blink, mouth, sq, eye, halo, pulse] = f.subarray(i, i + 12);
      const c = hues[k] || light;
      if (halo + pulse > 0.05) glow(ctx, x * s, y * s, r * s * (1.6 + 0.15 * halo + 0.3 * pulse), k > 2 ? c : accent, 0.25 * halo + 0.4 * pulse, 1);
      ctx.save(), ctx.translate(x * s, y * s), ctx.scale(r * s * (1 + sq), r * s * (1 - sq));
      ctx.drawImage(tone[k] || tone[2], -1, -1, 2, 2);
      for (const e of [-1, 1]) {
        const ex = e * 0.32 + gx * 0.08, ey = -0.12 + gy * 0.08, h = 0.17 * eye * (1 - 0.92 * blink);
        ctx.fillStyle = "#fff", ctx.beginPath(), ctx.ellipse(ex, ey, 0.15, h, 0, 0, 7), ctx.fill();
        ctx.fillStyle = shade, ctx.beginPath(), ctx.ellipse(ex + gx * 0.06, ey + gy * 0.06 * eye, 0.08, Math.min(h, 0.09), 0, 0, 7), ctx.fill();
      }
      if (Math.abs(mouth) > 0.05) {
        ctx.strokeStyle = shade, ctx.lineWidth = 0.07, ctx.beginPath(), ctx.moveTo(-0.2, 0.3);
        ctx.quadraticCurveTo(0, 0.3 + 0.25 * mouth, 0.2, 0.3), ctx.stroke();
      }
      ctx.restore();
    }
    // Light falls on everything: dappled patches, then the pin light, then grain.
    ctx.globalCompositeOperation = "screen";
    for (let k = 4; k < 24; k += 4) glow(ctx, L[k] * s, L[k + 1] * s, L[k + 2] * s, light, L[k + 3], 0.6);
    ctx.globalCompositeOperation = "lighter";
    glow(ctx, L[0] * s, L[1] * s, L[2] * s * 4, light, L[3] * 0.5, 1);
    glow(ctx, L[0] * s, L[1] * s, L[2] * s * 0.5, "#ffffff", L[3], 1);
    ctx.globalCompositeOperation = "overlay", ctx.globalAlpha = 0.08;
    ctx.fillStyle = ctx.createPattern(grain, "repeat"), ctx.fillRect(0, 0, s, s);
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
