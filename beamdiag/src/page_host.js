(() => {
"use strict";
const all = (s) => document.querySelectorAll(s), plots = document.getElementById("plots");
const enc = new TextEncoder(), dec = new TextDecoder();
let wasm = null, timer = 0, frame = 0;
const htmlQueue = new Map();
function htmlFrame(sel, value) {
  htmlQueue.set(sel,value);
  if (!frame) frame = requestAnimationFrame(() => {
    const active=document.activeElement, field=active?.dataset?.field, id=active?.id, key=active?.dataset?.key;
    for (const [s,v] of htmlQueue) all(s).forEach(e=> {
      if (s === '#plots') {
        const template=document.createElement("template"); template.innerHTML=v;
        for (const next of template.content.querySelectorAll("[data-key]")) {
          const old=e.querySelector(`[data-key="${next.dataset.key}"]`);
          if (old) { for (const a of next.attributes) old.setAttribute(a.name,a.value); old.innerHTML=next.innerHTML; next.replaceWith(old); }
        }
        e.replaceChildren(template.content);
      } else e.innerHTML=v;
    });
    if (active && !active.isConnected) {
      const again=field ? document.querySelector(`[data-field="${field}"]`) : key ? document.querySelector(`[data-key="${key}"]`) : id ? document.getElementById(id) : null;
      again?.focus({preventScroll:true});
    }
    htmlQueue.clear(); frame=0; math();
  });
}
function send(msg) {
  if (!wasm) return {};
  const b = enc.encode(JSON.stringify(msg)), p = wasm.alloc(b.length);
  new Uint8Array(wasm.memory.buffer, p, b.length).set(b);
  const q = wasm.handle(p, b.length);
  return run(JSON.parse(dec.decode(new Uint8Array(wasm.memory.buffer, q, wasm.out_len()))));
}
function saveBlob(blob, name) {
  const url = URL.createObjectURL(blob), a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const bytes = (b64) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
function copy(c) {
  Promise.resolve().then(() => navigator.clipboard.writeText(c.copy))
    .then(() => send({ ev: "result", tag: c.tag, ok: true }), () => send({ ev: "result", tag: c.tag, ok: false }));
}
function raster(c) {
  const fail = (msg) => send({ ev: "result", tag: "png", ok: false, msg }), img = new Image();
  img.onload = () => {
    // Twice the pixels for a sharp print, within what every browser's canvas allows.
    const scale = Math.min(2, Math.sqrt(16e6 / (c.w * c.h))), cv = document.createElement("canvas");
    cv.width = Math.round(c.w * scale); cv.height = Math.round(c.h * scale);
    const g = cv.getContext("2d");
    g.fillStyle = c.bg; g.fillRect(0, 0, cv.width, cv.height); g.drawImage(img, 0, 0, cv.width, cv.height);
    cv.toBlob((b) => { if (!b) return fail("this browser could not encode the PNG"); saveBlob(b, c.name); send({ ev: "result", tag: "png", ok: true }); }, "image/png");
  };
  img.onerror = () => fail("this browser could not draw the figure");
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(c.raster);
}
function run(cmds) {
  const a = document.activeElement, mark = a && a.dataset ? [a.dataset.key, a.dataset.field, a.id] : [];
  const out = {};
  for (const c of cmds) {
    if ("save" in c) saveBlob(new Blob([c.b64 ? bytes(c.data) : c.data], { type: c.mime }), c.save);
    else if ("copy" in c) copy(c);
    else if ("raster" in c) raster(c);
    else if ("html" in c) htmlFrame(c.html,c.v);
    else if ("toast" in c) toast(c.toast);
    else if ("text" in c) all(c.text).forEach((e) => { e.textContent = c.v; });
    else if ("attr" in c) all(c.attr).forEach((e) => (c.v == null ? e.removeAttribute(c.name) : e.setAttribute(c.name, c.v)));
    else if ("value" in c) all(c.value).forEach((e) => { e.value = c.v; });
    else if ("cls" in c) all(c.cls).forEach((e) => e.classList.toggle(c.name, c.on));
    else if ("hidden" in c) all(c.hidden).forEach((e) => { e.hidden = c.on; });
    else if ("open" in c) all(c.open).forEach((e) => { e.open = c.on; });
    else if ("focus" in c) requestAnimationFrame(()=>document.querySelector(c.focus)?.focus());
    else if ("later" in c) { clearTimeout(timer); timer = setTimeout(() => send({ ev: "timer" }), c.later); }
    else if ("prevent" in c) out.prevent = true;
    else if ("reply" in c) out.reply = c.reply;
  }
  // A focused element that was drawn again keeps the focus.
  if (a && a !== document.body && !a.isConnected) {
    const [key, field, id] = mark, again = key ? plots.querySelector(`[data-key="${key}"]`) : field ? document.querySelector(`[data-field="${field}"]`) : id ? document.getElementById(id) : null;
    again?.focus({ preventScroll: true });
  }
  math();
  return out;
}
document.addEventListener("input", (e) => { const t = e.target; if (t.tagName === "INPUT" && t.dataset.field) send({ ev: "input", field: t.dataset.field, value: t.value }); });
document.addEventListener("change", (e) => { const t = e.target; if (t.dataset && t.dataset.field) send({ ev: t.tagName === "SELECT" ? "change" : "done", field: t.dataset.field, value: t.value }); });
document.addEventListener("focusout", (e) => { const f = e.target.dataset && e.target.dataset.field; if (f) send({ ev: "done", field: f }); });
document.addEventListener("click", (e) => { const b = e.target.closest && e.target.closest("[data-act]"); if (b) { const go=()=>send({ ev:"click",act:b.dataset.act,arg:b.dataset.arg||"" }); if(b.dataset.act.startsWith("save-")) { toast("Drawing…", true); pdfFonts().then(go).catch(e=>toast(`${e.message}.`)); } else go(); } });
const frac = (e) => { const r = plots.getBoundingClientRect(); return (e.clientX - r.left) / r.width; };
plots.addEventListener("pointerdown", (e) => {
  const h = e.target.closest("[data-key]");
  if (!h || !wasm) return;
  plots.setPointerCapture(e.pointerId); e.preventDefault(); h.focus({ preventScroll: true });
  send({ ev: "down", key: h.dataset.key });
});
plots.addEventListener("pointermove", (e) => send({ ev: "move", frac: frac(e) }));
for (const t of ["pointerup", "pointercancel"]) plots.addEventListener(t, () => send({ ev: "up" }));
plots.addEventListener("keydown", (e) => {
  const h = e.target.closest("[data-key]"), target = h ? h.dataset.key : e.target.id === "plotarea" ? "plot" : "";
  if (target && send({ ev: "key", key: e.key, shift: e.shiftKey, target }).prevent) e.preventDefault();
});
// Toasts, after Sonner (https://emilkowal.ski/ui/building-a-toast-component). The newest is in front. A toast closes after
// 4 s, and the timer stops while the pointer is on the stack or the tab is hidden. A loading toast stays until the next
// toast takes its place. Swipe down to close: past 45 px, or faster than 0.11 px/ms. An upward swipe gets friction.
const toaster = document.querySelector(".toasts"), GAP = 14;
let toasts = [], expanded = false;
function layout() {
  const hs = toasts.map((t) => { t.el.style.height = ""; return t.el.offsetHeight; });
  let y = 0;
  toasts.forEach((t, i) => {
    t.el.style.setProperty("--i", i); t.el.style.setProperty("--y", `${y}px`); y += hs[i] + GAP;
    if (i && !expanded) t.el.style.height = `${hs[0]}px`;
    t.el.toggleAttribute("data-front", !i); t.el.toggleAttribute("data-hidden", i > 2);
  });
  toaster.toggleAttribute("data-expanded", expanded);
}
function tick() {
  const on = !expanded && !document.hidden;
  for (const t of toasts) {
    if (t.loading) continue;
    if (on && !t.timer) { t.start = Date.now(); t.timer = setTimeout(() => dismiss(t), t.left); }
    else if (!on && t.timer) { clearTimeout(t.timer); t.timer = 0; t.left -= Date.now() - t.start; }
  }
}
function dismiss(t) {
  clearTimeout(t.timer); toasts = toasts.filter((x) => x !== t);
  if (!toasts.length) expanded = false;
  t.el.setAttribute("data-removed", ""); setTimeout(() => t.el.remove(), 200);
  layout(); tick();
}
function toast(msg, loading = false) {
  let t = toasts.find((x) => x.loading);
  if (!t) {
    const el = document.createElement("li");
    el.className = "toast"; el.append(document.createElement("p")); toaster.prepend(el);
    t = { el, left: 4000, timer: 0 }; toasts.unshift(t); swipe(t);
  }
  t.el.firstChild.textContent = msg; t.loading = loading;
  layout(); tick();
}
function swipe(t) {
  let y0 = null, t0 = 0, d = 0;
  t.el.addEventListener("pointerdown", (e) => { y0 = e.clientY; t0 = Date.now(); d = 0; t.el.setPointerCapture(e.pointerId); t.el.setAttribute("data-swiping", ""); });
  t.el.addEventListener("pointermove", (e) => {
    if (y0 === null) return;
    const raw = e.clientY - y0;
    d = raw >= 0 ? raw : -12 * (1 - Math.exp(raw / 60));
    t.el.style.setProperty("--swipe", `${d}px`);
  });
  const up = () => {
    if (y0 === null) return;
    y0 = null; t.el.removeAttribute("data-swiping");
    if (d >= 45 || (d > 0 && d / (Date.now() - t0) > 0.11)) { t.el.setAttribute("data-swiped", ""); dismiss(t); }
    else t.el.style.setProperty("--swipe", "0px");
  };
  t.el.addEventListener("pointerup", up); t.el.addEventListener("pointercancel", up);
}
toaster.addEventListener("pointerenter", () => { expanded = true; layout(); tick(); });
toaster.addEventListener("pointerleave", () => { expanded = false; layout(); tick(); });
document.addEventListener("visibilitychange", tick);
let fontPromise;
async function pdfFonts() {
  fontPromise ||= Promise.all(["sans", "head", "math"].map(async n => {
    const r = await fetch(`fonts/${n}.${n === "math" ? "otf" : "ttf"}`); if (!r.ok) throw new Error("Font could not load");
    const b = new Uint8Array(await r.arrayBuffer()); let s = ""; for (const x of b) s += String.fromCharCode(x); return btoa(s);
  }));
  send({ev:"fonts", w:plots.clientWidth, fonts:await fontPromise});
}
let katexPromise, mathTimer = 0;
function math() {
  if (!window.katex) return;
  clearTimeout(mathTimer);
  mathTimer = setTimeout(() => {
    all("[data-tex]").forEach(e => {
      if (e.dataset.rendered === e.dataset.tex) return;
      try { katex.render(e.dataset.tex,e,{displayMode:e.classList.contains("eq"),throwOnError:false}); e.dataset.rendered=e.dataset.tex; } catch {}
    });
  }, 80);
}
async function loadMath() {
  katexPromise ||= new Promise((resolve,reject) => {
    const css=document.createElement("link"); css.rel="stylesheet"; css.href="katex/katex.min.css"; document.head.append(css);
    const js=document.createElement("script"); js.src="katex/katex.min.js"; js.onload=resolve; js.onerror=reject; document.head.append(js);
  });
  await katexPromise; math();
}
function hand() { send({ev:"hand-visible"}); math(); }
WebAssembly.instantiateStreaming(fetch("beamdiag.wasm.gz").then(r => { if (!r.ok) throw new Error("Solver could not load"); return new Response(r.body.pipeThrough(new DecompressionStream("gzip")),{headers:{"Content-Type":"application/wasm"}}); }), { wasi_snapshot_preview1: { proc_exit() {}, fd_close: () => 0, fd_write(fd, iov, n, out) { const v = new DataView(wasm.memory.buffer); let t = 0; for (let i = 0; i < n; i++) t += v.getUint32(iov + 8 * i + 4, true); v.setUint32(out, t, true); return 0; }, fd_seek: () => 0 }, env: { emscripten_notify_memory_growth() {} } }).then(({ instance }) => {
  wasm = instance.exports;
  wasm._initialize();
  send({ ev: "start", w: plots.clientWidth, date:new Date().toISOString().slice(0,10) });
  requestAnimationFrame(() => requestAnimationFrame(() => loadMath().catch(console.error)));
  new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) hand(); }).observe(document.getElementById("hand"));
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => { const w = plots.clientWidth; if (w) send({ ev: "width", w }); }).observe(plots);

}).catch((e) => { const b = document.getElementById("error"); b.hidden = false; b.textContent = `This page could not start its solver: ${e.message}.`; });
})();