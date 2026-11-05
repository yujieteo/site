import { assert, type Command, type Message, parseCommands } from "./commands";

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
  assert(element.nodeType === 1);
  return element;
}

function isExports(value: WebAssembly.Exports): value is WebAssembly.Exports & SolverExports {
  assert(typeof value === "object");
  assert(value !== null);
  if (!(value["memory"] instanceof WebAssembly.Memory)) return false;
  for (const name of ["alloc", "handle", "out_len", "_initialize"]) {
    if (typeof value[name] !== "function") return false;
  }
  return true;
}

function isFormField(element: Element): element is FormField {
  assert(element !== null);
  assert(element instanceof Element);
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement;
}

function isStyled(element: unknown): element is HTMLElement | SVGElement {
  assert(element !== undefined);
  assert(typeof element !== "string");
  return element instanceof HTMLElement || element instanceof SVGElement;
}

function all(selector: string): (HTMLElement | SVGElement)[] {
  assert(typeof selector === "string");
  assert(selector.length > 0);
  return [...document.querySelectorAll(selector)].filter(isStyled);
}

const plots = required(document.getElementById("plots"), "plots element");
const enc = new TextEncoder(), dec = new TextDecoder();
const htmlQueue = new Map<string, string>();
const toaster = required(document.querySelector(".toasts"), "toast list");
const GAP = 14, TOAST_MS = 4000, SWIPE_CLOSE_PX = 45, SWIPE_CLOSE_PX_PER_MS = 0.11, SWIPE_UP_MAX_PX = 12, SWIPE_UP_SCALE_PX = 60;
interface State {
  wasm: SolverExports | null;
  frame: number;
  toasts: Toast[];
  expanded: boolean;
  focusQueue: string[];
  fontPromise: Promise<string[]> | undefined;
  katexPromise: Promise<void> | undefined;
  mathTimer: number;
}

const state: State = { wasm: null, frame: 0, toasts: [], expanded: false, focusQueue: [], fontPromise: undefined, katexPromise: undefined, mathTimer: 0 };

function replacePlots(e: HTMLElement | SVGElement, html: string): void {
  assert(e.isConnected);
  assert(typeof html === "string");
  const template = document.createElement("template");
  template.innerHTML = html;
  for (const next of template.content.querySelectorAll("[data-key]")) {
    if (!isStyled(next)) continue;
    const old = e.querySelector(`[data-key="${next.dataset["key"]}"]`);
    if (old) {
      for (const a of next.attributes) old.setAttribute(a.name, a.value);
      old.innerHTML = next.innerHTML;
      next.replaceWith(old);
    }
  }
  e.replaceChildren(template.content);
}

function refocus(active: HTMLElement | null, field: string | undefined, key: string | undefined, id: string | undefined): void {
  assert(active === null || active instanceof HTMLElement);
  assert(state.frame !== 0 || active === null);
  if (!active || active.isConnected) return;
  const again = field ? document.querySelector(`[data-field="${field}"]`) : key ? document.querySelector(`[data-key="${key}"]`) : id ? document.getElementById(id) : null;
  if (isStyled(again)) again.focus({ preventScroll: true });
}

function flushHtml(): void {
  assert(htmlQueue.size > 0);
  assert(state.frame !== 0);
  const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const field = active?.dataset["field"], id = active?.id, key = active?.dataset["key"];
  for (const [s, v] of htmlQueue) {
    for (const e of all(s)) {
      if (s === "#plots") replacePlots(e, v);
      else e.innerHTML = v;
    }
  }
  refocus(active, field, key, id);
  htmlQueue.clear(); state.frame = 0; math();
}

function htmlFrame(selector: string, value: string): void {
  assert(selector.length > 0);
  assert(typeof value === "string");
  htmlQueue.set(selector, value);
  if (!state.frame) state.frame = requestAnimationFrame(flushHtml);
}

function send(msg: Message): Reply {
  assert(typeof msg.ev === "string");
  const wasm = state.wasm;
  if (!wasm) return { prevent: false };
  const b = enc.encode(JSON.stringify(msg)), p = wasm.alloc(b.length);
  assert(p >= 0);
  new Uint8Array(wasm.memory.buffer, p, b.length).set(b);
  const q = wasm.handle(p, b.length);
  assert(q >= 0);
  const json: unknown = JSON.parse(dec.decode(new Uint8Array(wasm.memory.buffer, q, wasm.out_len())));
  return run(parseCommands(json));
}

function saveBlob(blob: Blob, name: string): void {
  assert(blob.size >= 0);
  assert(name.length > 0);
  const url = URL.createObjectURL(blob), a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(revokeUrl, 1000, url);
}

function revokeUrl(url: string): void {
  assert(url.startsWith("blob:"));
  assert(url.length > 5);
  URL.revokeObjectURL(url);
}

function bytes(b64: string): Uint8Array<ArrayBuffer> {
  assert(typeof b64 === "string");
  assert(b64.length % 4 === 0);
  const text = atob(b64), out = new Uint8Array(text.length);
  for (let i = 0; i < text.length; i++) out[i] = text.charCodeAt(i);
  return out;
}

const PNG_PRINT_SCALE = 2, CANVAS_MAX_PIXELS_IN_EVERY_BROWSER = 16e6;

function rasterFail(msg: string): void {
  assert(msg.length > 0);
  assert(state.wasm !== null);
  send({ ev: "result", tag: "png", ok: false, msg });
}

function rasterDraw(c: Extract<Command, { kind: "raster" }>, img: HTMLImageElement): void {
  assert(c.w >= 0 && c.h >= 0);
  assert(img instanceof HTMLImageElement);
  const scale = Math.min(PNG_PRINT_SCALE, Math.sqrt(CANVAS_MAX_PIXELS_IN_EVERY_BROWSER / (c.w * c.h))), cv = document.createElement("canvas");
  cv.width = Math.round(c.w * scale); cv.height = Math.round(c.h * scale);
  const g = cv.getContext("2d");
  if (!g) { rasterFail("this browser could not draw the figure"); return; }
  g.fillStyle = c.bg; g.fillRect(0, 0, cv.width, cv.height); g.drawImage(img, 0, 0, cv.width, cv.height);
  cv.toBlob((b) => {
    assert(b === null || b.size >= 0);
    assert(c.name.length > 0);
    if (!b) { rasterFail("this browser could not encode the PNG"); return; }
    saveBlob(b, c.name);
    send({ ev: "result", tag: "png", ok: true });
  }, "image/png");
}

function raster(c: Extract<Command, { kind: "raster" }>): void {
  assert(c.kind === "raster");
  assert(c.svg.length > 0);
  const img = new Image();
  img.onload = () => {
    assert(img.complete);
    assert(c.kind === "raster");
    rasterDraw(c, img);
  };
  img.onerror = () => {
    assert(!img.complete || img.naturalWidth === 0);
    assert(c.kind === "raster");
    rasterFail("this browser could not draw the figure");
  };
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(c.svg);
}

function focusMark(element: Element | null): [string | undefined, string | undefined, string] | null {
  assert(element === null || element instanceof Element);
  if (!(element instanceof HTMLElement)) return null;
  return [element.dataset["key"], element.dataset["field"], element.id];
}

function focusPending(): void {
  assert(state.focusQueue.length <= 1000);
  assert(typeof document.querySelector === "function");
  for (const selector of state.focusQueue.splice(0)) {
    const e = document.querySelector(selector);
    if (isStyled(e)) e.focus();
  }
}

function runOne(c: Command, out: Reply): void {
  assert(typeof c.kind === "string");
  assert(typeof out.prevent === "boolean");
  switch (c.kind) {
    case "save": saveBlob(new Blob([c.b64 ? bytes(c.data) : c.data], { type: c.mime }), c.name); break;
    case "raster": raster(c); break;
    case "html": htmlFrame(c.selector, c.html); break;
    case "toast": toast(c.message); break;
    case "text": for (const e of all(c.selector)) e.textContent = c.text; break;
    case "attr": for (const e of all(c.selector)) { if (c.value === null) e.removeAttribute(c.name); else e.setAttribute(c.name, c.value); } break;
    case "value": for (const e of all(c.selector).filter(isFormField)) e.value = c.value; break;
    case "cls": for (const e of all(c.selector)) e.classList.toggle(c.name, c.on); break;
    case "hidden": for (const e of all(c.selector)) { if (e instanceof HTMLElement) e.hidden = c.on; } break;
    case "focus": state.focusQueue.push(c.selector); requestAnimationFrame(focusPending); break;
    case "prevent": out.prevent = true; break;
  }
}

function run(cmds: Command[]): Reply {
  assert(Array.isArray(cmds));
  assert(cmds.length <= 100000);
  const a = document.activeElement, mark = focusMark(a);
  const out: Reply = { prevent: false };
  for (const c of cmds) runOne(c, out);
  if (a && a !== document.body && !a.isConnected && mark) {
    const [key, field, id] = mark, again = key ? plots.querySelector(`[data-key="${key}"]`) : field ? document.querySelector(`[data-field="${field}"]`) : id ? document.getElementById(id) : null;
    if (isStyled(again)) again.focus({ preventScroll: true });
  }
  math();
  return out;
}

function onInput(e: Event): void {
  assert(e instanceof Event);
  assert(e.type === "input");
  const t = e.target;
  if (t instanceof HTMLInputElement && t.dataset["field"]) send({ ev: "input", field: t.dataset["field"], value: t.value });
}

function onChange(e: Event): void {
  assert(e instanceof Event);
  assert(e.type === "change");
  const t = e.target;
  if (!(t instanceof HTMLElement) || !t.dataset["field"]) return;
  const value = isFormField(t) ? t.value : "";
  send(t.tagName === "SELECT" ? { ev: "change", field: t.dataset["field"], value } : { ev: "done", field: t.dataset["field"], value });
}

function onFocusOut(e: Event): void {
  assert(e instanceof Event);
  assert(e.type === "focusout");
  const t = e.target;
  const f = t instanceof HTMLElement ? t.dataset["field"] : undefined;
  if (f) send({ ev: "done", field: f });
}

function onClick(e: MouseEvent): void {
  assert(e instanceof MouseEvent);
  assert(e.type === "click");
  const b = e.target instanceof Element ? e.target.closest("[data-act]") : null;
  if (!isStyled(b)) return;
  const act = b.dataset["act"];
  if (act === undefined) return;
  const arg = b.dataset["arg"] || "";
  if (act.startsWith("save-")) void saveAction(act, arg);
  else send({ ev: "click", act, arg });
}

async function saveAction(act: string, arg: string): Promise<void> {
  assert(act.startsWith("save-"));
  assert(typeof arg === "string");
  toast("Drawing…", true);
  try {
    await pdfFonts();
    send({ ev: "click", act, arg });
  } catch (error: unknown) {
    toast(`${error instanceof Error ? error.message : String(error)}.`);
  }
}

function bindDocument(): void {
  assert(document.body !== null);
  assert(state.wasm === null);
  document.addEventListener("input", onInput);
  document.addEventListener("change", onChange);
  document.addEventListener("focusout", onFocusOut);
  document.addEventListener("click", onClick);
  document.addEventListener("visibilitychange", tick);
}

function frac(e: PointerEvent): number {
  assert(e instanceof PointerEvent);
  const r = plots.getBoundingClientRect();
  assert(Number.isFinite(r.left));
  return (e.clientX - r.left) / r.width;
}

function onPointerDown(e: PointerEvent): void {
  assert(e instanceof PointerEvent);
  assert(e.type === "pointerdown");
  const h = e.target instanceof Element ? e.target.closest("[data-key]") : null;
  if (!isStyled(h)) return;
  const key = h.dataset["key"];
  if (key === undefined || !state.wasm) return;
  plots.setPointerCapture(e.pointerId); e.preventDefault(); h.focus({ preventScroll: true });
  send({ ev: "down", key });
}

function onKeyDown(e: KeyboardEvent): void {
  assert(e instanceof KeyboardEvent);
  assert(e.type === "keydown");
  const t = e.target instanceof Element ? e.target : null;
  const h = t?.closest("[data-key]"), target = isStyled(h) ? h.dataset["key"] ?? "" : t?.id === "plotarea" ? "plot" : "";
  if (target && send({ ev: "key", key: e.key, shift: e.shiftKey, target }).prevent) e.preventDefault();
}

function onPointerMove(e: PointerEvent): void {
  assert(e instanceof PointerEvent);
  assert(plots.isConnected);
  send({ ev: "move", frac: frac(e) });
}

function onPointerUp(e: Event): void {
  assert(e instanceof Event);
  assert(plots.isConnected);
  send({ ev: "up" });
}

function bindPlots(): void {
  assert(plots.isConnected);
  assert(state.wasm === null);
  plots.addEventListener("pointerdown", onPointerDown);
  plots.addEventListener("pointermove", onPointerMove);
  for (const t of ["pointerup", "pointercancel"]) plots.addEventListener(t, onPointerUp);
  plots.addEventListener("keydown", onKeyDown);
}

function layout(): void {
  assert(state.toasts.length <= 1000);
  assert(toaster.isConnected);
  const toasts = state.toasts;
  const hs: number[] = [];
  for (const t of toasts) { t.el.style.height = ""; hs.push(t.el.offsetHeight); }
  let y = 0;
  for (const [i, t] of toasts.entries()) {
    t.el.style.setProperty("--i", String(i)); t.el.style.setProperty("--y", `${y}px`); y += (hs[i] ?? 0) + GAP;
    if (i && !state.expanded) t.el.style.height = `${hs[0] ?? 0}px`;
    t.el.toggleAttribute("data-front", !i); t.el.toggleAttribute("data-hidden", i > 2);
  }
  toaster.toggleAttribute("data-expanded", state.expanded);
}

function tick(): void {
  assert(typeof state.expanded === "boolean");
  assert(state.toasts.length <= 1000);
  const on = !state.expanded && !document.hidden;
  for (const t of state.toasts) {
    if (t.loading) continue;
    if (on && !t.timer) { t.start = Date.now(); t.timer = window.setTimeout(dismiss, t.left, t); }
    else if (!on && t.timer) { clearTimeout(t.timer); t.timer = 0; t.left -= Date.now() - t.start; }
  }
}

function dismiss(t: Toast): void {
  assert(t.el instanceof HTMLLIElement);
  assert(t.left <= TOAST_MS);
  clearTimeout(t.timer); const at = state.toasts.indexOf(t);
  if (at >= 0) state.toasts.splice(at, 1);
  if (!state.toasts.length) state.expanded = false;
  t.el.setAttribute("data-removed", ""); setTimeout(removeElement, 200, t.el);
  layout(); tick();
}

function removeElement(el: Element): void {
  assert(el instanceof HTMLLIElement);
  assert(el.getAttribute("data-removed") === "");
  el.remove();
}

function toast(msg: string, loading = false): void {
  assert(typeof msg === "string");
  assert(typeof loading === "boolean");
  let t: Toast | undefined;
  for (const x of state.toasts) { if (x.loading) { t = x; break; } }
  if (!t) {
    const el = document.createElement("li"), line = document.createElement("p");
    el.className = "toast"; el.append(line); toaster.prepend(el);
    t = { el, left: TOAST_MS, timer: 0, start: 0, loading: false }; state.toasts.unshift(t); swipe(t);
  }
  const line = t.el.firstElementChild;
  if (line) line.textContent = msg;
  t.loading = loading;
  layout(); tick();
}

function swipeOffset(raw: number): number {
  assert(Number.isFinite(raw));
  const d = raw >= 0 ? raw : -SWIPE_UP_MAX_PX * (1 - Math.exp(raw / SWIPE_UP_SCALE_PX));
  assert(d >= -SWIPE_UP_MAX_PX);
  return d;
}

function swipeShouldClose(d: number, elapsed: number): boolean {
  assert(Number.isFinite(d));
  assert(!Number.isNaN(elapsed));
  return d >= SWIPE_CLOSE_PX || (d > 0 && d / elapsed > SWIPE_CLOSE_PX_PER_MS);
}

function swipe(t: Toast): void {
  assert(t.el instanceof HTMLLIElement);
  assert(state.toasts.includes(t));
  let y0: number | null = null, t0 = 0, d = 0;
  t.el.addEventListener("pointerdown", (e) => {
    assert(y0 === null || t0 > 0);
    assert(e.pointerId !== undefined);
    y0 = e.clientY; t0 = Date.now(); d = 0; t.el.setPointerCapture(e.pointerId); t.el.setAttribute("data-swiping", "");
  });
  t.el.addEventListener("pointermove", (e) => {
    assert(Number.isFinite(e.clientY));
    assert(t0 >= 0);
    if (y0 === null) return;
    d = swipeOffset(e.clientY - y0);
    t.el.style.setProperty("--swipe", `${d}px`);
  });
  const up = () => {
    assert(t.el instanceof HTMLLIElement);
    assert(y0 === null || t0 > 0);
    if (y0 === null) return;
    y0 = null; t.el.removeAttribute("data-swiping");
    if (swipeShouldClose(d, Date.now() - t0)) { t.el.setAttribute("data-swiped", ""); dismiss(t); }
    else t.el.style.setProperty("--swipe", "0px");
  };
  t.el.addEventListener("pointerup", up); t.el.addEventListener("pointercancel", up);
}

function bindToaster(): void {
  assert(toaster.isConnected);
  assert(state.toasts.length === 0);
  toaster.addEventListener("pointerenter", onToasterEnter);
  toaster.addEventListener("pointerleave", onToasterLeave);
}

function onToasterEnter(e: Event): void {
  assert(e instanceof Event);
  assert(toaster.isConnected);
  state.expanded = true; layout(); tick();
}

function onToasterLeave(e: Event): void {
  assert(e instanceof Event);
  assert(toaster.isConnected);
  state.expanded = false; layout(); tick();
}

async function fetchFont(n: string): Promise<string> {
  assert(n === "sans" || n === "head" || n === "math");
  assert(n.length > 0);
  const r = await fetch(`fonts/${n}.${n === "math" ? "otf" : "ttf"}`);
  if (!r.ok) throw new Error("Font could not load");
  const b = new Uint8Array(await r.arrayBuffer());
  let s = "";
  for (const x of b) s += String.fromCharCode(x);
  return btoa(s);
}

async function pdfFonts(): Promise<void> {
  assert(plots.clientWidth >= 0);
  assert(state.wasm !== null || state.fontPromise === undefined);
  state.fontPromise ||= Promise.all(["sans", "head", "math"].map(fetchFont));
  send({ ev: "fonts", w: plots.clientWidth, fonts: await state.fontPromise });
}

function renderMath(): void {
  const katex = window.katex;
  if (!katex) return;
  assert(typeof katex.render === "function");
  assert(state.mathTimer >= 0);
  for (const e of all("[data-tex]")) {
    const tex = e.dataset["tex"];
    if (!(e instanceof HTMLElement) || tex === undefined || e.dataset["rendered"] === tex) continue;
    try { katex.render(tex, e, { displayMode: e.classList.contains("eq"), throwOnError: false }); e.dataset["rendered"] = tex; } catch {}
  }
}

function math(): void {
  assert(state.mathTimer >= 0);
  assert(typeof document.querySelectorAll === "function");
  const katex = window.katex;
  if (!katex) return;
  clearTimeout(state.mathTimer);
  state.mathTimer = window.setTimeout(renderMath, 80);
}

async function loadMath(): Promise<void> {
  assert(document.head !== null);
  assert(state.katexPromise === undefined || state.katexPromise instanceof Promise);
  state.katexPromise ||= new Promise<void>(injectKatex);
  await state.katexPromise; math();
}

function injectKatex(resolve: () => void, reject: (reason?: unknown) => void): void {
  assert(typeof resolve === "function");
  assert(typeof reject === "function");
  const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "katex/katex.min.css"; document.head.append(css);
  const js = document.createElement("script"); js.src = "katex/katex.min.js"; js.onerror = reject; document.head.append(js);
  js.onload = () => {
    assert(js.isConnected);
    assert(typeof window.katex === "object");
    resolve();
  };
}

function hand(): void {
  assert(state.wasm !== null);
  assert(typeof state.mathTimer === "number");
  send({ ev: "hand-visible" }); math();
}

function writeWasi(_fd: number, iov: number, n: number, out: number): number {
  assert(n >= 0);
  assert(iov >= 0 && out >= 0);
  if (!state.wasm) return 1;
  const v = new DataView(state.wasm.memory.buffer); let t = 0;
  for (let i = 0; i < n; i++) t += v.getUint32(iov + 8 * i + 4, true);
  v.setUint32(out, t, true); return 0;
}

function wasiOk(...args: unknown[]): number {
  assert(args.length <= 4);
  assert(Array.isArray(args));
  return 0;
}

function makeImports(): WebAssembly.Imports {
  assert(typeof writeWasi === "function");
  assert(state.wasm === null);
  return {
    wasi_snapshot_preview1: { proc_exit: wasiOk, fd_close: wasiOk, fd_write: writeWasi, fd_seek: wasiOk },
    env: { emscripten_notify_memory_growth: wasiOk },
  };
}

function observe(): void {
  assert(state.wasm !== null);
  assert(plots.isConnected);
  new IntersectionObserver(onIntersect).observe(required(document.getElementById("hand"), "hand element"));
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(onResize).observe(plots);
}

function onIntersect(es: IntersectionObserverEntry[]): void {
  assert(Array.isArray(es));
  assert(state.wasm !== null);
  for (const e of es) {
    if (e.isIntersecting) { hand(); return; }
  }
}

function onResize(es: ResizeObserverEntry[]): void {
  assert(Array.isArray(es));
  assert(state.wasm !== null);
  const w = plots.clientWidth;
  if (w) send({ ev: "width", w });
}

function started(instance: WebAssembly.Instance): void {
  if (!isExports(instance.exports)) throw new Error("Solver has the wrong exports");
  assert(state.wasm === null);
  state.wasm = instance.exports;
  state.wasm._initialize();
  send({ ev: "start", w: plots.clientWidth, date: new Date().toISOString().slice(0, 10) });
  requestAnimationFrame(afterFirstFrame);
  observe();
}

function afterFirstFrame(): void {
  assert(state.wasm !== null);
  assert(state.katexPromise === undefined);
  requestAnimationFrame(startMath);
}

function startMath(): void {
  assert(state.wasm !== null);
  assert(document.head !== null);
  loadMath().catch(console.error);
}

function failed(e: unknown): void {
  assert(document.getElementById("error") !== null);
  assert(plots.isConnected);
  const b = required(document.getElementById("error"), "error element");
  b.hidden = false; b.textContent = `This page could not start its solver: ${e instanceof Error ? e.message : String(e)}.`;
}

function loadSolver(): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
  assert(typeof WebAssembly.instantiateStreaming === "function");
  assert(typeof DecompressionStream === "function");
  return WebAssembly.instantiateStreaming(fetch("beamdiag.wasm.gz").then(gunzip), makeImports());
}

function gunzip(r: Response): Response {
  assert(r instanceof Response);
  assert(typeof r.ok === "boolean");
  if (!r.ok || !r.body) throw new Error("Solver could not load");
  return new Response(r.body.pipeThrough(new DecompressionStream("gzip")), { headers: { "Content-Type": "application/wasm" } });
}

function startedFrom(source: WebAssembly.WebAssemblyInstantiatedSource): void {
  assert(source.instance instanceof WebAssembly.Instance);
  assert(source.module instanceof WebAssembly.Module);
  started(source.instance);
}

bindDocument();
bindPlots();
bindToaster();
loadSolver().then(startedFrom).catch(failed);
