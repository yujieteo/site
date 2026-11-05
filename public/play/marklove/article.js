// Marklove article runtime: plots with sliders, chart readouts, and captions.
// It never runs code from the author's Markdown. Without it, the article
// still shows every plot and chart.
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
  assert(m.i <= m.toks.length, "token index is in range");
  assert(typeof t === "string", "an expected token is a string");
  if (take(m) !== t) throw new Error("expected " + t);
}

function push(m, frame) {
  assert(m.stack.length < MAX_DEPTH, "expression nests too deeply");
  assert(typeof frame.k === "string" && typeof HANDLERS[frame.k] === "function", "a frame has a handler");
  m.stack.push(frame);
  assert(m.stack[m.stack.length - 1] === frame, "the frame is on top");
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
  assert(toks.length < 1e6, "the expression is bounded");
  var m = { toks: toks, params: params, i: 0, val: null, stack: [{ k: "sum" }] };
  var limit = STEP_FACTOR * (toks.length + 2);
  for (var n = 0; m.stack.length > 0; n++) {
    assert(n <= limit, "the parser made progress");
    var fr = m.stack.pop();
    assert(typeof HANDLERS[fr.k] === "function", "every frame has a handler");
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
  assert(typeof spec === "object" && spec !== null, "a plot has a spec");
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
  assert(Array.isArray(spec.params), "a plot has parameters");
  var pl = { spec: spec, curves: curves, paths: plot.querySelectorAll("path.curve"), values: {} };
  spec.params.forEach(function (p) { setValue(pl.values, p); });
  plot.querySelectorAll("input[type=range]").forEach(function (input) { bindSlider(pl, plot, input); });
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
