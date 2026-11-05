// Marklove presentation runtime. It runs only Marklove's own interactions:
// navigation, reveals, equation steps, plots with sliders, charts, and captions.
// It never runs code from the author's Markdown.
"use strict";
// Safe expression parser for plots, the same grammar as the app.
var FUNCS = { sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, log: Math.log, ln: Math.log, sqrt: Math.sqrt,
  abs: Math.abs, atan: Math.atan, asin: Math.asin, acos: Math.acos, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  min: Math.min, max: Math.max, floor: Math.floor, ceil: Math.ceil };
var CONSTS = { pi: Math.PI, e: Math.E };
var MAX_DEPTH = 100000;
var STEP_FACTOR = 64;
var HANDLERS = { sum: sumEntry, sumLoop: sumLoop, sumJoin: sumJoin, prod: prodEntry, prodLoop: prodLoop, prodJoin: prodJoin,
  unary: unaryEntry, negate: negateDone, pow: powEntry, powLoop: powLoop, powJoin: powJoin, atom: atomEntry,
  atomClose: atomClose, args: argsRest };

function assert(condition, message) { if (!condition) throw new Error(message); }

function add(a, b) { assert(arguments.length === 2, "two operands"); assert(typeof add === "function", "add exists"); return a + b; }
function sub(a, b) { assert(arguments.length === 2, "two operands"); assert(typeof sub === "function", "sub exists"); return a - b; }
function mul(a, b) { assert(arguments.length === 2, "two operands"); assert(typeof mul === "function", "mul exists"); return a * b; }
function div(a, b) { assert(arguments.length === 2, "two operands"); assert(typeof div === "function", "div exists"); return a / b; }

function leaf(v) {
  assert(typeof v === "number", "a literal is a number");
  assert(arguments.length === 1, "one literal");
  return function () {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof arguments[1] === "object", "parameters are an object");
    return v;
  };
}

function variable() {
  assert(arguments.length === 0, "x takes no arguments to build");
  assert(typeof Math.PI === "number", "numbers exist");
  return function (x) {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof arguments[1] === "object", "parameters are an object");
    return x;
  };
}

function param(t) {
  assert(typeof t === "string", "a parameter name is a string");
  assert(t.length > 0, "a parameter name is not empty");
  return function (x, p) {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof p === "object", "parameters are an object");
    return p[t];
  };
}

function negate(a) {
  assert(typeof a === "function", "an operand is a function");
  assert(arguments.length === 1, "one operand");
  return function (x, p) {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof p === "object", "parameters are an object");
    return -a(x, p);
  };
}

function binary(op, l, r) {
  assert(typeof op === "function", "an operator is a function");
  assert(typeof l === "function" && typeof r === "function", "operands are functions");
  return function (x, p) {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof p === "object", "parameters are an object");
    return op(l(x, p), r(x, p));
  };
}

function power(a, b) {
  assert(typeof a === "function", "the base is a function");
  assert(typeof b === "function", "the exponent is a function");
  return function (x, p) {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof p === "object", "parameters are an object");
    return Math.pow(a(x, p), b(x, p));
  };
}

function call(f, args) {
  assert(typeof f === "function", "a library function is a function");
  assert(Array.isArray(args) && args.length > 0, "a call has arguments");
  return function (x, p) {
    assert(arguments.length >= 2, "evaluated with x and parameters");
    assert(typeof p === "object", "parameters are an object");
    var values = [];
    for (var k = 0; k < args.length; k++) values.push(args[k](x, p));
    return f.apply(null, values);
  };
}

function peek(m) {
  assert(m.i >= 0 && m.i <= m.toks.length, "token index is in range");
  assert(Array.isArray(m.toks), "tokens are a list");
  return m.toks[m.i];
}

function take(m) {
  assert(m.i >= 0 && m.i <= m.toks.length, "token index is in range");
  assert(Array.isArray(m.toks), "tokens are a list");
  var t = m.toks[m.i];
  m.i++;
  return t;
}

function expect(m, t) {
  assert(typeof t === "string", "an expected token is a string");
  if (take(m) !== t) throw new Error("expected " + t);
}

function push(m, frame) {
  assert(m.stack.length < MAX_DEPTH, "expression nests too deeply");
  assert(typeof frame.k === "string" && typeof HANDLERS[frame.k] === "function", "a frame has a handler");
  m.stack.push(frame);
}

function sumEntry(m, fr) {
  assert(fr.k === "sum", "dispatched on its own kind");
  assert(m.stack.length < MAX_DEPTH, "stack is bounded");
  push(m, { k: "sumLoop" });
  push(m, { k: "prod" });
}

function sumLoop(m, fr) {
  assert(fr.k === "sumLoop", "dispatched on its own kind");
  assert(typeof m.val === "function", "a term was parsed");
  var t = peek(m);
  if (t !== "+" && t !== "-") return;
  take(m);
  push(m, { k: "sumJoin", a: m.val, op: t === "+" ? add : sub });
  push(m, { k: "prod" });
}

function sumJoin(m, fr) {
  assert(fr.k === "sumJoin", "dispatched on its own kind");
  assert(typeof m.val === "function" && typeof fr.a === "function", "both terms were parsed");
  m.val = binary(fr.op, fr.a, m.val);
  push(m, { k: "sumLoop" });
}

function prodEntry(m, fr) {
  assert(fr.k === "prod", "dispatched on its own kind");
  assert(m.stack.length < MAX_DEPTH, "stack is bounded");
  push(m, { k: "prodLoop" });
  push(m, { k: "unary" });
}

function prodLoop(m, fr) {
  assert(fr.k === "prodLoop", "dispatched on its own kind");
  assert(typeof m.val === "function", "a factor was parsed");
  var t = peek(m);
  var op;
  if (t === "*") op = mul;
  else if (t === "/") op = div;
  else if (t !== undefined && (t === "(" || /^[A-Za-z_\d.]/.test(t))) op = mul;
  else return;
  if (t === "*" || t === "/") take(m);
  push(m, { k: "prodJoin", a: m.val, op: op });
  push(m, { k: "unary" });
}

function prodJoin(m, fr) {
  assert(fr.k === "prodJoin", "dispatched on its own kind");
  assert(typeof m.val === "function" && typeof fr.a === "function", "both factors were parsed");
  m.val = binary(fr.op, fr.a, m.val);
  push(m, { k: "prodLoop" });
}

function unaryEntry(m, fr) {
  assert(fr.k === "unary", "dispatched on its own kind");
  assert(m.stack.length < MAX_DEPTH, "stack is bounded");
  var t = peek(m);
  if (t === "-") {
    take(m);
    push(m, { k: "negate" });
    push(m, { k: "unary" });
  } else if (t === "+") {
    take(m);
    push(m, { k: "unary" });
  } else push(m, { k: "pow" });
}

function negateDone(m, fr) {
  assert(fr.k === "negate", "dispatched on its own kind");
  assert(typeof m.val === "function", "an operand was parsed");
  m.val = negate(m.val);
}

function powEntry(m, fr) {
  assert(fr.k === "pow", "dispatched on its own kind");
  assert(m.stack.length < MAX_DEPTH, "stack is bounded");
  push(m, { k: "powLoop" });
  push(m, { k: "atom" });
}

function powLoop(m, fr) {
  assert(fr.k === "powLoop", "dispatched on its own kind");
  assert(typeof m.val === "function", "a base was parsed");
  var t = peek(m);
  if (t !== "^" && t !== "**") return;
  take(m);
  push(m, { k: "powJoin", a: m.val });
  push(m, { k: "unary" });
}

function powJoin(m, fr) {
  assert(fr.k === "powJoin", "dispatched on its own kind");
  assert(typeof m.val === "function" && typeof fr.a === "function", "base and exponent were parsed");
  m.val = power(fr.a, m.val);
}

function atomEntry(m, fr) {
  assert(fr.k === "atom", "dispatched on its own kind");
  assert(Array.isArray(m.params), "parameter names are a list");
  var t = take(m);
  if (t === undefined) throw new Error("end");
  if (/^\d|^\./.test(t)) { m.val = leaf(parseFloat(t)); return; }
  if (t === "(") { push(m, { k: "atomClose" }); push(m, { k: "sum" }); return; }
  var n = t.toLowerCase();
  if (n === "x") { m.val = variable(); return; }
  if (m.params.indexOf(t) >= 0) { m.val = param(t); return; }
  if (Object.prototype.hasOwnProperty.call(CONSTS, n)) { m.val = leaf(CONSTS[n]); return; }
  if (Object.prototype.hasOwnProperty.call(FUNCS, n)) {
    expect(m, "(");
    push(m, { k: "args", f: FUNCS[n], args: [] });
    push(m, { k: "sum" });
    return;
  }
  throw new Error("unknown " + t);
}

function atomClose(m, fr) {
  assert(fr.k === "atomClose", "dispatched on its own kind");
  assert(typeof m.val === "function", "a group was parsed");
  expect(m, ")");
}

function argsRest(m, fr) {
  assert(fr.k === "args", "dispatched on its own kind");
  assert(typeof m.val === "function", "an argument was parsed");
  fr.args.push(m.val);
  if (peek(m) === ",") {
    take(m);
    push(m, fr);
    push(m, { k: "sum" });
    return;
  }
  expect(m, ")");
  m.val = call(fr.f, fr.args);
}

function parse(toks, params) {
  assert(Array.isArray(toks), "tokens are a list");
  assert(Array.isArray(params), "parameter names are a list");
  var m = { toks: toks, params: params, i: 0, val: null, stack: [{ k: "sum" }] };
  var limit = STEP_FACTOR * (toks.length + 2);
  for (var n = 0; m.stack.length > 0; n++) {
    assert(n <= limit, "the parser made progress");
    var fr = m.stack.pop();
    HANDLERS[fr.k](m, fr);
  }
  if (m.i < toks.length) throw new Error("unexpected " + toks[m.i]);
  assert(typeof m.val === "function", "the expression compiled");
  return m.val;
}

function compile(src, params) {
  assert(Array.isArray(params), "parameter names are a list");
  assert(typeof assert === "function", "assert exists");
  var toks = String(src).match(/\d*\.?\d+(?:e[+-]?\d+)?|[A-Za-z_]\w*|\*\*|[-+*\/^(),]|\S/gi) || [];
  return parse(toks, params);
}

var PLOT = { W: 1000, H: 520, L: 60, R: 20, T: 20, B: 40 };

function paramName(p) {
  assert(p !== null && typeof p === "object", "a parameter is an object");
  assert("name" in p, "a parameter has a name");
  return p.name;
}

function curvePath(spec, f, values) {
  assert(typeof f === "function", "a curve is a function");
  assert(typeof values === "object" && values !== null, "values are an object");
  var x0 = spec.x[0], x1 = spec.x[1], y0 = spec.y[0], y1 = spec.y[1];
  var d = "", pen = false;
  for (var k = 0; k <= 240; k++) {
    var x = x0 + (x1 - x0) * k / 240, y = f(x, values);
    if (!isFinite(y)) { pen = false; continue; }
    y = Math.min(Math.max(y, y0 - (y1 - y0)), y1 + (y1 - y0));
    var sx = PLOT.L + (x - x0) / (x1 - x0 || 1) * (PLOT.W - PLOT.L - PLOT.R);
    var sy = PLOT.H - PLOT.B - (y - y0) / (y1 - y0 || 1) * (PLOT.H - PLOT.T - PLOT.B);
    d += (pen ? "L" : "M") + sx.toFixed(2) + " " + sy.toFixed(2);
    pen = true;
  }
  assert(typeof d === "string", "a path is text");
  return d;
}

function drawPlot(pl) {
  assert(Array.isArray(pl.curves), "a plot has curves");
  assert(pl.paths && typeof pl.paths.length === "number", "a plot has paths");
  pl.curves.forEach(function (f, i) {
    assert(typeof f === "function", "a curve is a function");
    assert(i >= 0 && i < pl.curves.length, "the curve index is in range");
    var d = curvePath(pl.spec, f, pl.values);
    if (pl.paths[i]) pl.paths[i].setAttribute("d", d);
  });
}

function sliderInput(pl, input, out) {
  assert(input && typeof input.value === "string", "a slider has a value");
  assert(typeof pl.values === "object", "a plot has values");
  pl.values[input.name] = parseFloat(input.value);
  var text = input.getAttribute("data-label") + " = " + (+parseFloat(input.value).toPrecision(3));
  input.setAttribute("aria-valuetext", text);
  if (out) out.textContent = (+parseFloat(input.value).toPrecision(3)).toString();
  drawPlot(pl);
}

function bindSlider(pl, plot, input) {
  assert(plot && typeof plot.querySelector === "function", "a plot is an element");
  assert(input && typeof input.addEventListener === "function", "a slider is an element");
  var out = plot.querySelector("output[for='" + input.id + "']");
  input.addEventListener("input", function () {
    assert(typeof input.value === "string", "a slider has a value");
    assert(pl.values !== null, "a plot has values");
    sliderInput(pl, input, out);
  });
}

function setValue(values, p) {
  assert(typeof values === "object" && values !== null, "values are an object");
  assert(p !== null && typeof p === "object", "a parameter is an object");
  values[p.name] = p.value;
}

function setupPlot(plot) {
  assert(plot && typeof plot.getAttribute === "function", "a plot is an element");
  assert(typeof plot.querySelectorAll === "function", "a plot can be searched");
  var spec;
  try { spec = JSON.parse(plot.getAttribute("data-plot")); } catch (e) { return; }
  var names = spec.params.map(paramName);
  var curves = [];
  try { curves = spec.curves.map(function (c) { return compile(c, names); }); } catch (e) { return; }
  var pl = { spec: spec, curves: curves, paths: plot.querySelectorAll("path.curve"), values: {} };
  spec.params.forEach(function (p) { setValue(pl.values, p); });
  plot.querySelectorAll("input[type=range]").forEach(function (input) { bindSlider(pl, plot, input); });
}

var deck = document.getElementById("deck");
var slides = Array.prototype.slice.call(deck.querySelectorAll(".slide"));
var counter = document.getElementById("counter");
var live = document.getElementById("live");
var viewButton = document.getElementById("view");
var index = 0, step = 0;
var touchX = null;

function steps(slide) {
  assert(slide.getAttribute !== undefined, "a slide has attributes");
  assert(slide && typeof slide.getAttribute === "function", "a slide is an element");
  assert(slides.indexOf(slide) >= 0, "the slide belongs to the deck");
  return parseInt(slide.getAttribute("data-steps") || "1", 10);
}

function isReading() {
  assert(deck.classList.length >= 0, "the deck has a class list");
  assert(deck && deck.classList, "the deck exists");
  assert(typeof deck.classList.contains === "function", "the deck has classes");
  return deck.classList.contains("reading");
}

function setHidden(el, hidden) {
  assert(typeof el.removeAttribute === "function", "an element has attributes");
  assert(el && typeof el.setAttribute === "function", "an element is given");
  assert(typeof hidden === "boolean", "hidden is a boolean");
  if (!isReading()) el.setAttribute("aria-hidden", hidden ? "true" : "false");
  else el.removeAttribute("aria-hidden");
}

function markSlide(s, i) {
  assert(typeof s.classList.toggle === "function", "a slide has classes");
  assert(i >= 0 && i < slides.length, "the slide index is in range");
  assert(s === slides[i], "the slide matches its index");
  var current = i === index;
  s.classList.toggle("current", current);
  setHidden(s, !current);
}

function markStep(el) {
  assert(el && typeof el.getAttribute === "function", "a step is an element");
  assert(step >= 0, "the step is not negative");
  var later = parseInt(el.getAttribute("data-step"), 10) > step;
  el.classList.toggle("later", later);
  setHidden(el, later);
}

function showEquation(eqs, k, eq, j) {
  assert(eq === eqs[j], "the equation matches its index");
  assert(k >= 0 && k < eqs.length, "the shown equation is in range");
  eq.classList.toggle("shown", j === k);
}

function markEquations(group) {
  assert(typeof group.querySelectorAll === "function", "a group can be searched");
  assert(group && typeof group.getAttribute === "function", "an equation group is an element");
  assert(step >= 0, "the step is not negative");
  var first = parseInt(group.getAttribute("data-first"), 10);
  var eqs = group.querySelectorAll(".eq");
  var k = Math.max(0, Math.min(eqs.length - 1, step - first));
  eqs.forEach(function (eq, j) { showEquation(eqs, k, eq, j); });
}

function render(announce) {
  assert(index <= slides.length, "the index is in range");
  assert(announce === undefined || typeof announce === "boolean", "announce is a flag");
  assert(index >= 0 && step >= 0, "the position is not negative");
  slides.forEach(markSlide);
  var slide = slides[index];
  if (!slide) return;
  slide.querySelectorAll("[data-step]").forEach(markStep);
  slide.querySelectorAll(".eqsteps").forEach(markEquations);
  var total = steps(slide);
  counter.textContent = "Slide " + (index + 1) + " of " + slides.length + (total > 1 ? " · Step " + (step + 1) + " of " + total : "");
  if (announce && live) live.textContent = slide.getAttribute("aria-label") + (total > 1 ? ", step " + (step + 1) + " of " + total : "");
  fitStatements(slide);
  if (history.replaceState) history.replaceState(null, "", "#" + slide.id);
}

function go(delta) {
  assert(index <= slides.length, "the index is in range");
  assert(typeof delta === "number", "the delta is a number");
  assert(slides.length >= 0, "the deck has a slide list");
  if (isReading()) return;
  var slide = slides[index];
  if (delta > 0) {
    if (step < steps(slide) - 1) step++;
    else if (index < slides.length - 1) { index++; step = 0; }
  } else {
    if (step > 0) step--;
    else if (index > 0) { index--; step = steps(slides[index]) - 1; }
  }
  render(true);
}

function goTo(i) {
  assert(!isNaN(i), "the target is a number");
  assert(typeof i === "number", "the target is a number");
  assert(slides.length >= 0, "the deck has a slide list");
  index = Math.max(0, Math.min(slides.length - 1, i));
  step = 0;
  render(true);
}

function setReading(on) {
  assert(index <= slides.length, "the index is in range");
  assert(typeof on === "boolean", "reading is a flag");
  assert(viewButton && counter, "the controls exist");
  deck.classList.toggle("reading", on);
  viewButton.setAttribute("aria-pressed", on ? "true" : "false");
  viewButton.textContent = on ? "Slides" : "Reading view";
  document.getElementById("prev").hidden = on;
  document.getElementById("next").hidden = on;
  counter.hidden = on;
  render(false);
  if (on && slides[index]) slides[index].scrollIntoView({ block: "start" });
}

function dismissFig(f) {
  assert(f && f.classList, "a figure has classes");
  assert(typeof f.classList.add === "function", "a figure has classes");
  f.classList.remove("open");
  f.classList.add("dismissed");
}

function hideFig(f) {
  assert(f && f.classList, "a figure has classes");
  assert(typeof f.classList.add === "function", "a figure has classes");
  f.classList.add("dismissed");
}

function dismissFigures() {
  assert(typeof document.querySelectorAll === "function", "the document can be searched");
  assert(deck !== null, "the deck exists");
  document.querySelectorAll(".fig.open").forEach(dismissFig);
  document.querySelectorAll(".fig:focus-within, .fig:hover").forEach(hideFig);
}

function onKey(e) {
  assert(typeof e.preventDefault === "function", "a key event can be cancelled");
  assert(e && typeof e.key === "string", "a key event has a key");
  assert(slides.length >= 0, "the deck has a slide list");
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  switch (e.key) {
    case "ArrowRight": case "PageDown": case " ": go(1); e.preventDefault(); break;
    case "ArrowLeft": case "PageUp": go(-1); e.preventDefault(); break;
    case "Home": goTo(0); e.preventDefault(); break;
    case "End": goTo(slides.length - 1); e.preventDefault(); break;
    case "Escape": dismissFigures(); break;
  }
}

function onTouchStart(e) {
  assert(typeof e.touches[0].clientX === "number", "a touch has a position");
  assert(e && e.touches, "a touch event has touches");
  assert(e.touches.length > 0, "a touch start has a touch");
  touchX = e.touches[0].clientX;
}

function onTouchEnd(e) {
  assert(e.changedTouches.length > 0, "a touch end has a touch");
  assert(e && e.changedTouches, "a touch event has changed touches");
  assert(touchX === null || typeof touchX === "number", "the touch origin is a number or unset");
  if (touchX === null) return;
  var dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
}

function fitOne(el) {
  assert(typeof el.scrollHeight === "number", "a statement has a height");
  assert(el && el.style, "a statement is an element");
  assert(el.parentElement, "a statement has a frame");
  var frame = el.parentElement;
  var lo = 3, hi = 14, best = lo;
  for (var k = 0; k < 12; k++) {
    var mid = (lo + hi) / 2;
    el.style.fontSize = mid + "cqh";
    if (el.scrollHeight <= frame.clientHeight * 0.9 && el.scrollWidth <= frame.clientWidth * 0.95) { best = mid; lo = mid; } else { hi = mid; }
  }
  el.style.fontSize = best + "cqh";
}

function fitStatements(slide) {
  assert(slides.indexOf(slide) >= 0, "the slide belongs to the deck");
  assert(slide && typeof slide.querySelectorAll === "function", "a slide is an element");
  assert(deck !== null, "the deck exists");
  if (isReading()) return;
  slide.querySelectorAll(".statement").forEach(fitOne);
}

function onResize() {
  assert(index <= slides.length, "the index is in range");
  assert(Array.isArray(slides), "slides are a list");
  assert(index >= 0, "the index is not negative");
  if (slides[index]) fitStatements(slides[index]);
}

function startDeck() {
  assert(slides.length >= 0, "the deck has a slide list");
  assert(deck !== null, "the deck exists");
  assert(slides.length >= 0, "slides are a list");
  document.getElementById("prev").addEventListener("click", function () { go(-1); });
  document.getElementById("next").addEventListener("click", function () { go(1); });
  viewButton.addEventListener("click", function () { setReading(!isReading()); });
  document.addEventListener("keydown", onKey);
  deck.addEventListener("touchstart", onTouchStart, { passive: true });
  deck.addEventListener("touchend", onTouchEnd);
  var hash = location.hash.replace("#", "");
  var start = slides.findIndex(function (s) { return s.id === hash; });
  if (start >= 0) index = start;
  if (window.matchMedia && window.matchMedia("(max-width: 640px) and (orientation: portrait)").matches) setReading(true);
  else render(false);
  window.addEventListener("resize", onResize);
}
function showBar(readout, bar) {
  assert(bar && typeof bar.getAttribute === "function", "a bar is an element");
  assert(readout === null || typeof readout === "object", "a readout is an element or missing");
  if (readout) readout.textContent = bar.getAttribute("aria-label");
}

function setupBar(chart, readout, bar) {
  assert(chart && typeof chart.querySelector === "function", "a chart is an element");
  assert(bar && typeof bar.addEventListener === "function", "a bar is an element");
  function show() {
    assert(typeof bar.getAttribute === "function", "a bar is an element");
    assert(readout === null || typeof readout === "object", "a readout is an element or missing");
    showBar(readout, bar);
  }
  bar.addEventListener("focus", show);
  bar.addEventListener("mouseenter", show);
}

function setupChart(chart) {
  assert(chart && typeof chart.querySelector === "function", "a chart is an element");
  assert(typeof chart.querySelectorAll === "function", "a chart can be searched");
  var readout = chart.querySelector(".readout");
  chart.querySelectorAll(".bar-rect").forEach(function (bar) { setupBar(chart, readout, bar); });
}

function setupFig(fig) {
  assert(fig && typeof fig.addEventListener === "function", "a figure is an element");
  assert(fig.classList && typeof fig.classList.toggle === "function", "a figure has classes");
  fig.addEventListener("click", function () {
    assert(typeof fig.classList.toggle === "function", "a figure has classes");
    assert(typeof fig.classList.remove === "function", "a figure has classes");
    fig.classList.toggle("open");
    fig.classList.remove("dismissed");
  });
  fig.addEventListener("mouseleave", function () {
    assert(typeof fig.classList.remove === "function", "a figure has classes");
    assert(fig.classList !== null, "a figure has classes");
    fig.classList.remove("dismissed");
  });
  fig.addEventListener("focusout", function () {
    assert(typeof fig.classList.remove === "function", "a figure has classes");
    assert(fig.classList !== null, "a figure has classes");
    fig.classList.remove("dismissed");
    fig.classList.remove("open");
  });
}


document.querySelectorAll(".plot[data-plot]").forEach(setupPlot);
document.querySelectorAll(".chart").forEach(setupChart);
document.querySelectorAll(".fig[data-caption]").forEach(setupFig);
startDeck();
