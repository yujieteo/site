import { type Command, type Message, parseCommands } from "./commands";

interface Katex {
  render(tex: string, element: HTMLElement, options: { displayMode: boolean; throwOnError: boolean }): void;
}

declare global {
  interface Window {
    katex?: Katex;
  }
}

interface SolverExports {
  memory: WebAssembly.Memory;
  alloc(length: number): number;
  handle(pointer: number, length: number): number;
  out_len(): number;
  _initialize(): void;
}

type FormField = HTMLInputElement | HTMLSelectElement;

interface Toast {
  el: HTMLLIElement;
  left: number;
  timer: number;
  start: number;
  loading: boolean;
}

interface Reply {
  prevent: boolean;
}

function required<T extends Element>(element: T | null, what: string): T {
  if (!element) throw new Error(`the page has no ${what}`);
  return element;
}

function isExports(value: WebAssembly.Exports): value is WebAssembly.Exports & SolverExports {
  return value["memory"] instanceof WebAssembly.Memory &&
    ["alloc", "handle", "out_len", "_initialize"].every((name) => typeof value[name] === "function");
}

function isFormField(element: Element): element is FormField {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement;
}

const all = (selector: string): HTMLElement[] => [...document.querySelectorAll<HTMLElement>(selector)];
const plots = required(document.getElementById("plots"), "plots element");
const enc = new TextEncoder(), dec = new TextDecoder();
let wasm: SolverExports | null = null, frame = 0;
const htmlQueue = new Map<string, string>();

function htmlFrame(selector: string, value: string): void {
  htmlQueue.set(selector, value);
  if (!frame) frame = requestAnimationFrame(() => {
    const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const field = active?.dataset["field"], id = active?.id, key = active?.dataset["key"];
    for (const [s, v] of htmlQueue) all(s).forEach((e) => {
      if (s === "#plots") {
        const template = document.createElement("template");
        template.innerHTML = v;
        for (const next of template.content.querySelectorAll<HTMLElement>("[data-key]")) {
          const old = e.querySelector(`[data-key="${next.dataset["key"]}"]`);
          if (old) { for (const a of next.attributes) old.setAttribute(a.name, a.value); old.innerHTML = next.innerHTML; next.replaceWith(old); }
        }
        e.replaceChildren(template.content);
      } else e.innerHTML = v;
    });
    if (active && !active.isConnected) {
      const again = field ? document.querySelector<HTMLElement>(`[data-field="${field}"]`) : key ? document.querySelector<HTMLElement>(`[data-key="${key}"]`) : id ? document.getElementById(id) : null;
      again?.focus({ preventScroll: true });
    }
    htmlQueue.clear(); frame = 0; math();
  });
}

function send(msg: Message): Reply {
  if (!wasm) return { prevent: false };
  const b = enc.encode(JSON.stringify(msg)), p = wasm.alloc(b.length);
  new Uint8Array(wasm.memory.buffer, p, b.length).set(b);
  const q = wasm.handle(p, b.length);
  const json: unknown = JSON.parse(dec.decode(new Uint8Array(wasm.memory.buffer, q, wasm.out_len())));
  return run(parseCommands(json));
}

function saveBlob(blob: Blob, name: string): void {
  const url = URL.createObjectURL(blob), a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const bytes = (b64: string): Uint8Array<ArrayBuffer> => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
const PNG_PRINT_SCALE = 2, CANVAS_MAX_PIXELS_IN_EVERY_BROWSER = 16e6;

function raster(c: Extract<Command, { kind: "raster" }>): void {
  const fail = (msg: string) => send({ ev: "result", tag: "png", ok: false, msg }), img = new Image();
  img.onload = () => {
    const scale = Math.min(PNG_PRINT_SCALE, Math.sqrt(CANVAS_MAX_PIXELS_IN_EVERY_BROWSER / (c.w * c.h))), cv = document.createElement("canvas");
    cv.width = Math.round(c.w * scale); cv.height = Math.round(c.h * scale);
    const g = cv.getContext("2d");
    if (!g) { fail("this browser could not draw the figure"); return; }
    g.fillStyle = c.bg; g.fillRect(0, 0, cv.width, cv.height); g.drawImage(img, 0, 0, cv.width, cv.height);
    cv.toBlob((b) => { if (!b) { fail("this browser could not encode the PNG"); return; } saveBlob(b, c.name); send({ ev: "result", tag: "png", ok: true }); }, "image/png");
  };
  img.onerror = () => fail("this browser could not draw the figure");
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(c.svg);
}

function focusMark(element: Element | null): [string | undefined, string | undefined, string] | null {
  if (!(element instanceof HTMLElement)) return null;
  return [element.dataset["key"], element.dataset["field"], element.id];
}

function run(cmds: Command[]): Reply {
  const a = document.activeElement, mark = focusMark(a);
  const out: Reply = { prevent: false };
  for (const c of cmds) {
    switch (c.kind) {
      case "save": saveBlob(new Blob([c.b64 ? bytes(c.data) : c.data], { type: c.mime }), c.name); break;
      case "raster": raster(c); break;
      case "html": htmlFrame(c.selector, c.html); break;
      case "toast": toast(c.message); break;
      case "text": all(c.selector).forEach((e) => { e.textContent = c.text; }); break;
      case "attr": all(c.selector).forEach((e) => (c.value === null ? e.removeAttribute(c.name) : e.setAttribute(c.name, c.value))); break;
      case "value": all(c.selector).filter(isFormField).forEach((e) => { e.value = c.value; }); break;
      case "cls": all(c.selector).forEach((e) => e.classList.toggle(c.name, c.on)); break;
      case "hidden": all(c.selector).forEach((e) => { e.hidden = c.on; }); break;
      case "focus": requestAnimationFrame(() => document.querySelector<HTMLElement>(c.selector)?.focus()); break;
      case "prevent": out.prevent = true; break;
    }
  }
  if (a && a !== document.body && !a.isConnected && mark) {
    const [key, field, id] = mark, again = key ? plots.querySelector<HTMLElement>(`[data-key="${key}"]`) : field ? document.querySelector<HTMLElement>(`[data-field="${field}"]`) : id ? document.getElementById(id) : null;
    again?.focus({ preventScroll: true });
  }
  math();
  return out;
}

document.addEventListener("input", (e) => { const t = e.target; if (t instanceof HTMLInputElement && t.dataset["field"]) send({ ev: "input", field: t.dataset["field"], value: t.value }); });
document.addEventListener("change", (e) => {
  const t = e.target;
  if (!(t instanceof HTMLElement) || !t.dataset["field"]) return;
  const value = isFormField(t) ? t.value : "";
  send(t.tagName === "SELECT" ? { ev: "change", field: t.dataset["field"], value } : { ev: "done", field: t.dataset["field"], value });
});
document.addEventListener("focusout", (e) => { const t = e.target; const f = t instanceof HTMLElement ? t.dataset["field"] : undefined; if (f) send({ ev: "done", field: f }); });
document.addEventListener("click", (e) => {
  const b = e.target instanceof Element ? e.target.closest<HTMLElement>("[data-act]") : null;
  const act = b?.dataset["act"];
  if (!b || act === undefined) return;
  const go = () => send({ ev: "click", act, arg: b.dataset["arg"] || "" });
  if (act.startsWith("save-")) { toast("Drawing…", true); pdfFonts().then(go).catch((error: unknown) => toast(`${error instanceof Error ? error.message : String(error)}.`)); } else go();
});
const frac = (e: PointerEvent): number => { const r = plots.getBoundingClientRect(); return (e.clientX - r.left) / r.width; };
plots.addEventListener("pointerdown", (e) => {
  const h = e.target instanceof Element ? e.target.closest<HTMLElement>("[data-key]") : null;
  const key = h?.dataset["key"];
  if (!h || key === undefined || !wasm) return;
  plots.setPointerCapture(e.pointerId); e.preventDefault(); h.focus({ preventScroll: true });
  send({ ev: "down", key });
});
plots.addEventListener("pointermove", (e) => send({ ev: "move", frac: frac(e) }));
for (const t of ["pointerup", "pointercancel"]) plots.addEventListener(t, () => send({ ev: "up" }));
plots.addEventListener("keydown", (e) => {
  const t = e.target instanceof Element ? e.target : null;
  const h = t?.closest<HTMLElement>("[data-key]"), target = h ? h.dataset["key"] ?? "" : t?.id === "plotarea" ? "plot" : "";
  if (target && send({ ev: "key", key: e.key, shift: e.shiftKey, target }).prevent) e.preventDefault();
});
// Toasts, after Sonner (https://emilkowal.ski/ui/building-a-toast-component).
const toaster = required(document.querySelector<HTMLElement>(".toasts"), "toast list"), GAP = 14, TOAST_MS = 4000, SWIPE_CLOSE_PX = 45, SWIPE_CLOSE_PX_PER_MS = 0.11, SWIPE_UP_MAX_PX = 12, SWIPE_UP_SCALE_PX = 60;
let toasts: Toast[] = [], expanded = false;
function layout(): void {
  const hs = toasts.map((t) => { t.el.style.height = ""; return t.el.offsetHeight; });
  let y = 0;
  toasts.forEach((t, i) => {
    t.el.style.setProperty("--i", String(i)); t.el.style.setProperty("--y", `${y}px`); y += (hs[i] ?? 0) + GAP;
    if (i && !expanded) t.el.style.height = `${hs[0] ?? 0}px`;
    t.el.toggleAttribute("data-front", !i); t.el.toggleAttribute("data-hidden", i > 2);
  });
  toaster.toggleAttribute("data-expanded", expanded);
}
function tick(): void {
  const on = !expanded && !document.hidden;
  for (const t of toasts) {
    if (t.loading) continue;
    if (on && !t.timer) { t.start = Date.now(); t.timer = window.setTimeout(() => dismiss(t), t.left); }
    else if (!on && t.timer) { clearTimeout(t.timer); t.timer = 0; t.left -= Date.now() - t.start; }
  }
}
function dismiss(t: Toast): void {
  clearTimeout(t.timer); toasts = toasts.filter((x) => x !== t);
  if (!toasts.length) expanded = false;
  t.el.setAttribute("data-removed", ""); setTimeout(() => t.el.remove(), 200);
  layout(); tick();
}
function toast(msg: string, loading = false): void {
  let t = toasts.find((x) => x.loading);
  if (!t) {
    const el = document.createElement("li"), line = document.createElement("p");
    el.className = "toast"; el.append(line); toaster.prepend(el);
    t = { el, left: TOAST_MS, timer: 0, start: 0, loading: false }; toasts.unshift(t); swipe(t);
  }
  const line = t.el.firstElementChild;
  if (line) line.textContent = msg;
  t.loading = loading;
  layout(); tick();
}
function swipe(t: Toast): void {
  let y0: number | null = null, t0 = 0, d = 0;
  t.el.addEventListener("pointerdown", (e) => { y0 = e.clientY; t0 = Date.now(); d = 0; t.el.setPointerCapture(e.pointerId); t.el.setAttribute("data-swiping", ""); });
  t.el.addEventListener("pointermove", (e) => {
    if (y0 === null) return;
    const raw = e.clientY - y0;
    d = raw >= 0 ? raw : -SWIPE_UP_MAX_PX * (1 - Math.exp(raw / SWIPE_UP_SCALE_PX));
    t.el.style.setProperty("--swipe", `${d}px`);
  });
  const up = () => {
    if (y0 === null) return;
    y0 = null; t.el.removeAttribute("data-swiping");
    if (d >= SWIPE_CLOSE_PX || (d > 0 && d / (Date.now() - t0) > SWIPE_CLOSE_PX_PER_MS)) { t.el.setAttribute("data-swiped", ""); dismiss(t); }
    else t.el.style.setProperty("--swipe", "0px");
  };
  t.el.addEventListener("pointerup", up); t.el.addEventListener("pointercancel", up);
}
toaster.addEventListener("pointerenter", () => { expanded = true; layout(); tick(); });
toaster.addEventListener("pointerleave", () => { expanded = false; layout(); tick(); });
document.addEventListener("visibilitychange", tick);
let fontPromise: Promise<string[]> | undefined;
async function pdfFonts(): Promise<void> {
  fontPromise ||= Promise.all(["sans", "head", "math"].map(async (n) => {
    const r = await fetch(`fonts/${n}.${n === "math" ? "otf" : "ttf"}`); if (!r.ok) throw new Error("Font could not load");
    const b = new Uint8Array(await r.arrayBuffer()); let s = ""; for (const x of b) s += String.fromCharCode(x); return btoa(s);
  }));
  send({ ev: "fonts", w: plots.clientWidth, fonts: await fontPromise });
}
let katexPromise: Promise<void> | undefined, mathTimer = 0;
function math(): void {
  const katex = window.katex;
  if (!katex) return;
  clearTimeout(mathTimer);
  mathTimer = window.setTimeout(() => {
    all("[data-tex]").forEach((e) => {
      const tex = e.dataset["tex"];
      if (tex === undefined || e.dataset["rendered"] === tex) return;
      try { katex.render(tex, e, { displayMode: e.classList.contains("eq"), throwOnError: false }); e.dataset["rendered"] = tex; } catch {}
    });
  }, 80);
}
async function loadMath(): Promise<void> {
  katexPromise ||= new Promise<void>((resolve, reject) => {
    const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "katex/katex.min.css"; document.head.append(css);
    const js = document.createElement("script"); js.src = "katex/katex.min.js"; js.onload = () => resolve(); js.onerror = reject; document.head.append(js);
  });
  await katexPromise; math();
}
function hand(): void { send({ ev: "hand-visible" }); math(); }
const imports: WebAssembly.Imports = {
  wasi_snapshot_preview1: {
    proc_exit() {}, fd_close: () => 0,
    fd_write(_fd: number, iov: number, n: number, out: number) {
      if (!wasm) return 1;
      const v = new DataView(wasm.memory.buffer); let t = 0;
      for (let i = 0; i < n; i++) t += v.getUint32(iov + 8 * i + 4, true);
      v.setUint32(out, t, true); return 0;
    },
    fd_seek: () => 0,
  },
  env: { emscripten_notify_memory_growth() {} },
};
WebAssembly.instantiateStreaming(fetch("beamdiag.wasm.gz").then((r) => {
  if (!r.ok || !r.body) throw new Error("Solver could not load");
  return new Response(r.body.pipeThrough(new DecompressionStream("gzip")), { headers: { "Content-Type": "application/wasm" } });
}), imports).then(({ instance }) => {
  if (!isExports(instance.exports)) throw new Error("Solver has the wrong exports");
  wasm = instance.exports;
  wasm._initialize();
  send({ ev: "start", w: plots.clientWidth, date: new Date().toISOString().slice(0, 10) });
  requestAnimationFrame(() => requestAnimationFrame(() => loadMath().catch(console.error)));
  new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) hand(); }).observe(required(document.getElementById("hand"), "hand element"));
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => { const w = plots.clientWidth; if (w) send({ ev: "width", w }); }).observe(plots);
}).catch((e: unknown) => {
  const b = required(document.getElementById("error"), "error element");
  b.hidden = false; b.textContent = `This page could not start its solver: ${e instanceof Error ? e.message : String(e)}.`;
});
