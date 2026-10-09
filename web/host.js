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

  function draw(cv) {
    const ctx = cv.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
    const s = Math.round(cv.clientWidth * dpr);
    if (!s) return;
    if (cv.width !== s) cv.width = cv.height = s;
    const [bg, shade, accent, light] = ["--base", "--shade", "--accent", "--light"].map((n) => css(cv, n));
    const p = cv.dataset.progress === undefined ? -1 : +cv.dataset.progress;
    const [px, py] = cv.pointer || [-1, -1];
    const n = api.update(+(cv.dataset.seed || 1), +cv.dataset.scene, clock, p, px, py);
    const d = new Float32Array(mem.buffer, api.dots(), n * 5);
    const f = new Float32Array(mem.buffer, api.face(), 8);
    const g = ctx.createRadialGradient(s * 0.5, s * 0.4, 0, s * 0.5, s * 0.5, s * 0.75);
    g.addColorStop(0, bg), g.addColorStop(1, shade);
    ctx.globalAlpha = 1, ctx.fillStyle = g, ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < n * 5; i += 5) {
      const c = d[i + 3];
      ctx.globalAlpha = d[i + 4];
      ctx.fillStyle = c < 0.34 ? shade : c < 0.67 ? accent : light;
      ctx.beginPath(), ctx.arc(d[i] * s, d[i + 1] * s, d[i + 2] * s, 0, 7), ctx.fill();
    }
    // The character: one circle, two eyes, a halo.
    const [x, y, r, gx, gy, blink, halo, pulse] = [f[0] * s, f[1] * s, f[2] * s, f[3], f[4], f[5], f[6], f[7]];
    ctx.globalAlpha = 0.15 + 0.15 * halo + 0.4 * pulse, ctx.fillStyle = accent;
    ctx.beginPath(), ctx.arc(x, y, r * (1.25 + 0.1 * halo + 0.2 * pulse), 0, 7), ctx.fill();
    ctx.globalAlpha = 1, ctx.fillStyle = light;
    ctx.beginPath(), ctx.arc(x, y, r, 0, 7), ctx.fill();
    ctx.fillStyle = shade;
    for (const k of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(x + k * r * 0.32 + gx * r * 0.18, y - r * 0.1 + gy * r * 0.18, r * 0.09, r * 0.13 * (1 - 0.9 * blink), 0, 0, 7);
      ctx.fill();
    }
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
    cv.addEventListener("pointerleave", () => ((cv.pointer = null), playing || draw(cv)));
  }
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
