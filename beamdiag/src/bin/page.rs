//! Build the standalone page and its WebAssembly files.
//!
//!     cargo build --release --target wasm32-unknown-unknown -p beamdiag --lib
//!     cargo run --release -p beamdiag --bin page -- target/wasm32-unknown-unknown/release/beamdiag.wasm public/play/beamdiag/index.html

use beamdiag::app::App;
use beamdiag::draw;

const BASE: &str = r#":root{--bg:#fff;--surface:#fff;--fg:#000;--fg2:#000;--muted:#000;--line:#000;--accent:#000;--accent-text:#000;--warm:#000;--green:#000;--chrome:#fff;--sans:system-ui,sans-serif;--mono:ui-monospace,monospace;--math:system-ui,sans-serif}*{box-sizing:border-box}body{margin:0;background:#fff;color:#000;font:16px/1.5 system-ui,sans-serif}main{max-width:1280px;margin:auto;padding:16px}button{font:inherit;background:#fff;color:#000;border:1px solid;padding:6px 10px;cursor:pointer}a{color:#000}"#;
const STYLE: &str = r#"
.bd .eyebrow { font: 0.75rem/1.4 var(--mono); letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); display: flex; flex-wrap: wrap; gap: 0.25rem 0.9rem; margin: 0 0 0.75rem; }
.bd .lede { max-width: 44rem; margin-bottom: 2rem; }
:root[data-embed] .bd > .eyebrow, :root[data-embed] .bd > h1, :root[data-embed] .bd > .lede { display: none; }
.bd section { margin-top: 4rem; padding-top: 1.25rem; border-top: 1px solid var(--line); }
.bd h3 { margin-top: 1.5rem; }
.bd p { max-width: 68ch; }
.bd code { font: 0.875em var(--mono); }
.bd .small { font-size: 0.875rem; }
.btn { display: inline-flex; align-items: center; gap: 0.35rem; min-height: 2.25rem; font-size: 0.875rem; white-space: nowrap; }
.btn:hover { color: var(--fg); }
.btn.primary { color: var(--fg); border-color: var(--fg); }
.btn.icon { padding: 0; width: 2.25rem; justify-content: center; border-radius: 6px; }
.toolbar { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; align-items: center; margin: 0 0 0.75rem; padding: 0.6rem 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.toolbar .group { display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center; }
.label, .card h3 { font: 0.7rem/1.4 var(--mono); letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin: 0 0.2rem 0 0; }
.card h3 { margin: 0 0 0.6rem; }
.bd select, .bd input { font: inherit; font-size: 0.875rem; color: var(--fg); background: var(--bg); border: 1px solid var(--line); border-radius: 6px; padding: 0.3rem 0.5rem; min-height: 2.25rem; width: 100%; font-variant-numeric: tabular-nums; }
.toolbar select { width: auto; max-width: 100%; }
[aria-invalid="true"] { border-color: var(--warm) !important; box-shadow: 0 0 0 1px var(--warm); }
.app { display: grid; gap: 1.25rem 1.75rem; grid-template-columns: minmax(0, 1fr) minmax(0, 19rem); align-items: start; }
@media (max-width: 60rem) { .app { grid-template-columns: minmax(0, 1fr); } }
#plots { position: relative; touch-action: pan-y; user-select: none; -webkit-user-select: none; }
#plots svg { display: block; width: 100%; height: auto; overflow: visible; }
#plots.stale svg, .stats.stale, tbody.stale { opacity: 0.35; }
#plots .handle { cursor: grab; }
#plots .handle:focus, #plots .plotarea { outline: none; }
#plots .ring, #plots .box { fill: none; stroke: none; }
#plots .handle:focus-visible .ring, #plots .handle.active .ring, #plots .plotarea:focus-visible .box { stroke: var(--fg); stroke-width: 2; }
#plots .hit { fill: transparent; }
#plots .cursor { stroke: var(--fg); stroke-width: 1; stroke-dasharray: 3 3; opacity: 0.6; pointer-events: none; }
.readout { display: flex; flex-wrap: wrap; gap: 0.15rem 1rem; font-size: 0.875rem; margin: 0.5rem 0 0; min-height: 2.8em; font-variant-numeric: tabular-nums; }
.readout b { font-weight: 400; color: var(--fg); }
.readout .k, .hint { color: var(--muted); }
.hint { font-size: 0.8125rem; margin: 0.25rem 0 0; }
.error { border: 1px solid var(--warm); border-radius: 6px; padding: 0.55rem 0.8rem; margin: 0 0 0.75rem; font-size: 0.9375rem; }
.error[hidden] { display: none; }
.error b { font-weight: 400; color: var(--warm); }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: 0.6rem 1.25rem; margin: 1.25rem 0 0; padding: 0; list-style: none; }
.stats li { border-top: 1px solid var(--line); padding-top: 0.4rem; }
.stats b { display: block; font-weight: 400; font-size: 1.35rem; line-height: 1.2; color: var(--fg); font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
.stats li > span { font-size: 0.8125rem; color: var(--muted); }
.reactions { list-style: none; margin: 0.75rem 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.4rem 0.6rem; font-size: 0.875rem; }
.reactions li { border: 1px solid var(--line); border-radius: 6px; padding: 0.25rem 0.6rem; font-variant-numeric: tabular-nums; }
.reactions li i { display: inline-block; width: 0.9rem; height: 2px; background: var(--green); vertical-align: middle; margin-right: 0.35rem; }
.panel { display: flex; flex-direction: column; gap: 1rem; }
.card { border: 1px solid var(--line); border-radius: 8px; padding: 0.85rem; }
.row { display: grid; gap: 0.4rem; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: end; }
.row + .row { margin-top: 0.5rem; }
label.f.origin { margin-top: 0.5rem; }
label.f { display: flex; flex-direction: column; gap: 0.15rem; font-size: 0.75rem; color: var(--muted); }
label.f > span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; max-height: 28rem; overflow-y: auto; overscroll-behavior: contain; }
.item { border-top: 1px solid var(--line); padding-top: 0.5rem; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 0.4rem; align-items: end; }
.item:first-child { border-top: 0; padding-top: 0; }
.item .fields { display: grid; gap: 0.4rem; grid-template-columns: repeat(auto-fit, minmax(5.2rem, 1fr)); }
.item .tag { grid-column: 1 / -1; font: 0.72rem var(--mono); color: var(--fg); letter-spacing: 0.03em; }
.adds { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.6rem; }
.derived, .note { font-size: 0.8125rem; color: var(--muted); margin: 0.5rem 0 0; font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
.table-wrap { overflow-x: auto; margin-top: 0.5rem; border: 1px solid var(--line); border-radius: 6px; }
.bd table { border-collapse: collapse; width: 100%; font-size: 0.8125rem; min-width: 40rem; }
.bd table.cards { min-width: 30rem; }
.bd th, .bd td { text-align: left; padding: 0.4rem 0.6rem; border-bottom: 1px solid var(--line); vertical-align: top; }
.bd th { font-weight: 400; color: var(--fg); background: var(--surface); }
.bd .num { text-align: right; font-variant-numeric: tabular-nums; }
.method ul, .method ol { padding-left: 1.2rem; max-width: 74ch; }
.method li { margin: 0.35rem 0; }
.sources li { overflow-wrap: anywhere; }
.sources a { text-decoration: underline; text-decoration-color: var(--line); text-underline-offset: 0.2em; }
pre.deck { font: 12px/1.45 var(--mono); background: var(--surface); border-radius: 6px; padding: 0.75rem; overflow: auto; max-height: 26rem; margin: 0.5rem 0 0; }
.export { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: end; margin-top: 0.75rem; }
.export label.f { width: min(100%, 16rem); }
.export label.format { width: 7rem; }
.bd summary { cursor: pointer; color: var(--fg); }
.calc { border-top: 1px solid var(--line); padding: 0.75rem 0 0.25rem; }
.calc h4, .calc > summary { font-size: 1rem; font-weight: 400; color: var(--fg); margin: 0 0 0.35rem; }
.calc p, .calc li { font-size: 0.9375rem; }
.calc ul { padding-left: 1.2rem; margin: 0.4rem 0; }
.calc .table-wrap table { min-width: 0; width: auto; }
.hand-part { margin-top: 1.5rem; }
.eq { font: 1rem/1.9 var(--math); color: var(--fg); margin: 0.35rem 0; padding: 0.35rem 0.6rem; background: var(--surface); border-radius: 6px; overflow-x: auto; white-space: nowrap; }
.math { font-family: var(--math); white-space: nowrap; }
.frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 0.15em; line-height: 1.25; }
.frac > span + span { border-top: 1px solid currentColor; }
.eq sup, .eq sub, .math sup, .math sub { font-size: 0.72em; line-height: 0; }
#hand-point { border: 1px solid var(--line); border-radius: 8px; padding: 0.25rem 0.85rem 0.5rem; margin-top: 1rem; }
#hand-point:empty { display: none; }
#hand-point .calc { border-top: 0; }
@media (forced-colors: active) { #plots .area { fill: none; } }
"#;

/// The host: events in, commands out. Every number, word and drawing comes from the module.
const HOST: &str = r#"(() => {
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
document.addEventListener("click", (e) => { const b = e.target.closest && e.target.closest("[data-act]"); if (b) { const go=()=>send({ ev:"click",act:b.dataset.act,arg:b.dataset.arg||"" }); if(b.dataset.act==="save-pdf") pdfFonts().then(go).catch(e=>{document.getElementById("figure-status").textContent=e.message}); else go(); } });
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
let fontPromise;
async function pdfFonts() {
  fontPromise ||= Promise.all(["sans", "mono", "math"].map(async n => {
    const r = await fetch(`fonts/${n}.otf`); if (!r.ok) throw new Error("PDF font could not load");
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
WebAssembly.instantiateStreaming(fetch("beamdiag.wasm.gz").then(r => { if (!r.ok) throw new Error("Solver could not load"); return new Response(r.body.pipeThrough(new DecompressionStream("gzip")),{headers:{"Content-Type":"application/wasm"}}); })).then(({ instance }) => {
  wasm = instance.exports;
  send({ ev: "start", w: plots.clientWidth, date:new Date().toISOString().slice(0,10) });
  requestAnimationFrame(() => requestAnimationFrame(() => loadMath().catch(console.error)));
  new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) hand(); }).observe(document.getElementById("hand"));
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => { const w = plots.clientWidth; if (w) send({ ev: "width", w }); }).observe(plots);

}).catch((e) => { const b = document.getElementById("error"); b.hidden = false; b.textContent = `This page could not start its solver: ${e.message}.`; });
})();"#;

fn main() {
    let args: Vec<String> = std::env::args().collect();
    let [_, wasm, out] = args.as_slice() else { panic!("usage: page <beamdiag.wasm> <index.html>") };
    let compressed = std::process::Command::new("gzip").args(["-n", "-9", "-c", wasm]).output().expect("gzip");
    assert!(compressed.status.success(), "gzip failed");
    let wasm = std::fs::read(wasm).expect("the WebAssembly module");
    let mut app = App::new();
    let body = app.body("../../");
    let style = format!("{STYLE}{}", draw::css());
    let script = format!("<script>{HOST}</script>");
    let description = "Create beam diagrams, read reactions and hand calculations, and save PNG or A4 PDF reports.";
    let html = format!(r#"<!doctype html><html lang="en"><meta charset="utf-8"><link rel="icon" href="data:,"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Beam diagram creator</title><meta name="description" content="{description}"><style>{BASE}{style}</style><main>{body}</main>{script}</html>"#);
    assert!(!html.contains("/Users/") && !html.contains("/home/"), "no home paths in the page");
    let folder = std::path::Path::new(out).parent().unwrap();
    std::fs::create_dir_all(folder).unwrap();
    std::fs::write(folder.join("beamdiag.wasm"), wasm).unwrap();
    std::fs::write(folder.join("beamdiag.wasm.gz"), compressed.stdout).unwrap();
    std::fs::write(out, html).expect("index.html");
}
