// The layers, drawn in the manner of the art on teoyujie.org: one rule per
// layer from left to right, the neurons as points on it, a path through the
// strongest neuron of each layer that runs in from the left, and at the
// right the histogram of all the neuron values beside the normal density.
//
// A point's height is its value as a z-score, (value - mean) / std over the
// sweep, on a log scale up to ZMAX.

const ZMAX = 1000;
const RUN = 1.2;      // seconds for the path to cross the layers
const BINS = 26;      // histogram bins from Z0 to Z1
const Z0 = -3, Z1 = 10;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function geometry(canvas, layers) {
  assert(Number.isInteger(layers) && layers > 1, "the layers are two or more");
  assert(canvas.width >= 0 && canvas.height >= 0, "the canvas has a size");
  const w = canvas.width, h = canvas.height;
  const x0 = 0.04 * w, x1 = 0.78 * w, top = 0.08 * h, base = 0.86 * h;
  return {
    w, h, unit: w / 400, x0, x1, top, base,
    x: (l) => {
      assert(l >= 0 && l <= layers - 1, "a layer is inside the layers");
      assert(typeof l === "number", "a layer is a number");
      return x0 + (x1 - x0) * l / (layers - 1);
    },
    y: (z) => {
      assert(typeof z === "number", "a z-score is a number");
      assert(ZMAX > 0, "the scale has a top");
      return base - (base - top) * Math.log1p(Math.min(Math.max(z, 0), ZMAX)) / Math.log1p(ZMAX);
    },
  };
}

function drawRules(ctx, g, c, layers) {
  assert(g.unit >= 0, "the unit is not negative");
  assert(typeof c.line === "string", "the colours are text");
  ctx.lineWidth = g.unit;
  ctx.strokeStyle = c.line;
  for (let l = 0; l < layers; l++) {
    ctx.beginPath(); ctx.moveTo(g.x(l), g.top); ctx.lineTo(g.x(l), g.base); ctx.stroke();
  }
  ctx.fillStyle = c.muted;
  ctx.font = `${7 * g.unit}px ${c.sans}`;
  ctx.textAlign = "center";
  for (let l = 0; l < layers; l += 5) ctx.fillText(String(l), g.x(l), g.base + 11 * g.unit);
  ctx.textAlign = "left";
  ctx.fillText("layer", g.x(layers - 1) + 8 * g.unit, g.base + 11 * g.unit);
}

function drawPoints(ctx, g, c, points) {
  assert(Array.isArray(points), "the points are a list");
  assert(typeof c.ink === "string" && typeof c.accent === "string", "the colours are text");
  const hits = [];
  for (const p of points) {
    const px = g.x(p.layer), py = g.y(p.z);
    hits.push({ x: px, y: py, p });
    ctx.globalAlpha = p.mark ? 0.8 : 0.35;
    ctx.fillStyle = p.mark ? c.accent : c.ink;
    ctx.beginPath(); ctx.arc(px, py, (p.mark ? 2.6 : 2) * g.unit, 0, 2 * Math.PI); ctx.fill();
  }
  assert(hits.length === points.length, "a hit for each point");
  return hits;
}

// The path, drawn up to its head as it runs in.
function drawPath(ctx, g, c, path, progress) {
  assert(path.length > 0, "the path has points");
  assert(progress >= 0 && progress <= 1, "the progress is a fraction");
  const head = progress * (path.length - 1), last = Math.floor(head);
  const pt = (k) => {
    assert(k >= 0 && k < path.length, "a path point exists");
    assert(typeof path[k].layer === "number", "a path point has a layer");
    return [g.x(path[k].layer), g.y(path[k].z)];
  };
  ctx.globalAlpha = 0.9;
  ctx.strokeStyle = c.accent;
  ctx.lineWidth = 1.4 * g.unit;
  ctx.beginPath(); ctx.moveTo(...pt(0));
  for (let k = 1; k <= last; k++) ctx.lineTo(...pt(k));
  let hx, hy;
  if (last < path.length - 1) {
    const [ax, ay] = pt(last), [bx, by] = pt(last + 1), f = head - last;
    hx = ax + (bx - ax) * f; hy = ay + (by - ay) * f;
    ctx.lineTo(hx, hy);
  } else [hx, hy] = pt(last);
  ctx.stroke();
  ctx.fillStyle = c.accent;
  ctx.beginPath(); ctx.arc(hx, hy, 2.5 * g.unit, 0, 2 * Math.PI); ctx.fill();
}

function drawSelected(ctx, g, c, s) {
  assert(s !== null && typeof s === "object", "a selection is a point");
  assert(typeof c.ink === "string", "the colours are text");
  ctx.globalAlpha = 1;
  ctx.strokeStyle = c.ink;
  ctx.lineWidth = 1.2 * g.unit;
  ctx.beginPath(); ctx.arc(g.x(s.layer), g.y(s.z), 6 * g.unit, 0, 2 * Math.PI); ctx.stroke();
}

// All the values as z-scores, against the normal density: most neurons
// sit in the curve, and the few that fire stand out to the right.
function drawHistogram(ctx, g, c, hist) {
  assert(hist.length === BINS, "the histogram has its bins");
  assert(Z1 > Z0, "the z range rises");
  const hx = g.x1 + 0.04 * g.w, width = g.w - hx - 0.02 * g.w;
  const yc = (z) => {
    assert(typeof z === "number", "a z-score is a number");
    assert(Z1 !== Z0, "the z range has a width");
    return g.base - (g.base - g.top) * (z - Z0) / (Z1 - Z0);
  };
  const dz = (Z1 - Z0) / BINS, peak = 1 / Math.sqrt(2 * Math.PI);
  const total = hist.reduce((a, b) => {
    assert(typeof b === "number", "a bin is a count");
    assert(typeof a === "number", "the total is a number");
    return a + b;
  }, 0);
  ctx.strokeStyle = c.line;
  ctx.lineWidth = g.unit;
  ctx.globalAlpha = 1;
  ctx.beginPath(); ctx.moveTo(hx, g.top); ctx.lineTo(hx, g.base); ctx.stroke();
  ctx.fillStyle = c.accent;
  ctx.globalAlpha = 0.3;
  for (let i = 0; total && i < BINS; i++) {
    const len = Math.min(width * hist[i] / total / dz / peak, width);
    ctx.fillRect(hx + 2 * g.unit, yc(Z0 + (i + 1) * dz) + g.unit / 2, len, (g.base - g.top) / BINS - g.unit);
  }
  ctx.globalAlpha = 0.6;
  ctx.strokeStyle = c.ink;
  ctx.beginPath();
  for (let z = Z0; z <= Z1; z += 0.05) ctx.lineTo(hx + 2 * g.unit + width * Math.exp(-z * z / 2), yc(z));
  ctx.stroke();
}

function binValues(zs) {
  assert(typeof zs[Symbol.iterator] === "function", "the z-scores can be walked");
  assert(BINS > 0, "there are bins");
  const hist = new Float64Array(BINS);
  for (const z of zs) {
    const b = Math.floor((z - Z0) / (Z1 - Z0) * BINS);
    if (b >= 0 && b < BINS) hist[b]++;
  }
  assert(hist.length === BINS, "the histogram has its bins");
  return hist;
}

function fitCanvas(canvas) {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  assert(ratio > 0, "the pixel ratio is positive");
  assert(typeof canvas.clientWidth === "number", "the canvas has a width");
  canvas.width = Math.round(canvas.clientWidth * ratio);
  canvas.height = Math.round(canvas.clientHeight * ratio);
}

// The point whose mark is nearest to a click, within 12 units, or null.
function pointAt(canvas, hits, ev) {
  assert(Array.isArray(hits), "the hits are a list");
  assert(typeof ev.clientY === "number", "a click has a position");
  const r = canvas.getBoundingClientRect(), sx = canvas.width / r.width;
  const mx = (ev.clientX - r.left) * sx, my = (ev.clientY - r.top) * sx;
  let best = null, dist = 12 * sx;
  for (const h of hits) {
    const d = Math.hypot(h.x - mx, h.y - my);
    if (d < dist) { dist = d; best = h.p; }
  }
  return best;
}

// Draws all of the state and returns the hits of the points.
function paint(ctx, g, c, state, progress, layers) {
  assert(Number.isInteger(layers) && layers > 1, "the layers are two or more");
  assert(progress >= 0 && progress <= 1, "the progress is a fraction");
  assert(Array.isArray(state.points) && Array.isArray(state.path), "points and a path are lists");
  assert(typeof c.muted === "string" && typeof c.sans === "string", "the colours are text");
  assert(g.w >= 0 && g.h >= 0, "the geometry has a size");
  ctx.clearRect(0, 0, g.w, g.h);
  drawRules(ctx, g, c, layers);
  const hits = drawPoints(ctx, g, c, state.points);
  if (state.path.length) drawPath(ctx, g, c, state.path, progress);
  if (state.selected) drawSelected(ctx, g, c, state.selected);
  if (state.hist) drawHistogram(ctx, g, c, state.hist);
  ctx.globalAlpha = 1;
  return hits;
}

export function createLayers(canvas, layers, onPick) {
  assert(typeof onPick === "function", "a pick is reported");
  assert(Number.isInteger(layers) && layers > 1, "the layers are two or more");
  const ctx = canvas.getContext("2d");
  const css = getComputedStyle(document.documentElement);
  const color = (name) => {
    assert(name.startsWith("--"), "a colour is a custom property");
    assert(typeof css.getPropertyValue === "function", "the style can be read");
    return css.getPropertyValue(name).trim();
  };
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  let state = { points: [], path: [], selected: null, hist: null };
  let start = 0, frame = 0, hits = [];

  function draw(now) {
    assert(typeof now === "number", "the frame has a time");
    assert(frame === 0 || typeof frame === "number", "the frame is a handle");
    const c = { ink: color("--ink"), accent: color("--accent"), line: color("--line"), muted: color("--muted"), sans: color("--sans") };
    const progress = still.matches ? 1 : Math.min(Math.max((now - start) / 1000 / RUN, 0), 1);
    hits = paint(ctx, geometry(canvas, layers), c, state, progress, layers);
    if (progress < 1) frame = requestAnimationFrame(draw); else frame = 0;
  }

  function redraw(animate) {
    assert(typeof animate === "boolean", "animate is a flag");
    assert(frame === 0 || typeof frame === "number", "the frame is a handle");
    if (animate) start = performance.now();
    if (!frame) frame = requestAnimationFrame(draw);
  }

  new ResizeObserver(() => {
    fitCanvas(canvas);
    draw(performance.now() + RUN * 1000);
  }).observe(canvas);

  canvas.addEventListener("click", (ev) => {
    assert(typeof ev.clientX === "number", "a click has a position");
    assert(Array.isArray(hits), "the hits are a list");
    const best = pointAt(canvas, hits, ev);
    if (best) onPick(best.layer, best.index);
  });

  return {
    // points: [{ layer, index, z, mark }], mark drawn in the accent; path: one point per layer;
    // hist: counts of all values in BINS bins, or null.
    show(points, path, hist) {
      assert(Array.isArray(points) && Array.isArray(path), "points and a path are lists");
      assert(hist === null || hist.length === BINS, "the histogram is null or has its bins");
      state = { ...state, points, path, hist };
      redraw(true);
    },
    select(sel) {
      assert(sel === null || typeof sel === "object", "a selection is a point or nothing");
      assert(typeof state === "object", "the state is kept");
      state.selected = sel; redraw(false);
    },
    bins: binValues,
  };
}
