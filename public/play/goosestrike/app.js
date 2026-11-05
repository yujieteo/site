// The page: runs the Goose solver frame by frame and draws it. The solver
// runs on the GPU (WebGPU) where the browser can, else on the CPU
// (WebAssembly). The URL ?solver=cpu selects the CPU.
import { loadEngine, loadGpuEngine, hugoniot, stagnation, V_C, BIRD_MASS, T_SKIN } from "./engine.js";
import { GifRecorder } from "./gif.js";

const KT = 1852 / 3600;            // m/s per knot
const T_END = 3.0e-3;              // panel run length, s
const BUDGET_MS = 12;              // solver time per animation frame
const APPROACH_S = 1.6;            // cartoon approach, real seconds
const APPROACH_M = 1.2;            // cartoon approach distance, m
const P_LO = 1e5, P_HI = 4e8;      // pressure colour scale, Pa (log)
const EP_MAX = 0.18;               // plastic strain colour scale
const GIF_W = 480;                 // GIF width, px
const GIF_SIM_US = 25;             // sim time between GIF frames, µs

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function $(id) {
  assert(typeof id === "string", "an element id is a string");
  assert(id.length > 0, "an element id is not empty");
  return document.getElementById(id);
}
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function fmt(x, d = 1) {
  assert(typeof x === "number", "fmt formats a number");
  assert(Number.isInteger(d) && d >= 0 && d <= 20, "fmt takes a digit count");
  return x.toLocaleString("en-GB", { minimumFractionDigits: d, maximumFractionDigits: d });
}
function sign(x, d = 1) {
  assert(typeof x === "number", "sign formats a number");
  assert(Number.isInteger(d) && d >= 0, "sign takes a digit count");
  return (x > 0 ? "+" : x < 0 ? "−" : "") + fmt(Math.abs(x), d);
}

async function loadSolver() {
  try {
    const cpu = new URLSearchParams(location.search).get("solver") === "cpu";
    const gpu = cpu ? null : await loadGpuEngine().catch((error) => {
      assert(error !== undefined, "a failure has a reason");
      assert(typeof console.warn === "function", "the console can warn");
      console.warn("WebGPU solver:", error);
      return null;
    });
    const solver = gpu ?? await loadEngine();
    assert(typeof solver.setup === "function", "a solver sets up a run");
    assert(typeof solver.gpu === "boolean", "a solver says if it is the GPU");
    return solver;
  } catch (error) {
    $("fire").textContent = "Goose unavailable";
    $("banner").setAttribute("role", "alert");
    $("banner").textContent = "The solver could not load. Reload the page to try again.";
    throw error;
  }
}

const eng = await loadSolver();

// Bird lattice and skin cells per preset, and what validate.goose measured
// with them natively (rigid wall check and the panel at V_C, 1.6 mm skin).
// run: the solver time of the panel run on the CPU, on an idle M-series Mac.
// gpuRun: the time of the run on the GPU in Chrome on an Apple M5, with a high
// load from other work. The last preset is too slow for the CPU, so only the
// GPU has it.
function presetList() {
  const all = [
    { name: "Potato goose", spacing: 0.009, cells: 56, peak: -42.6, plateau: 25.8, defl: 150.8, skin: 0, stiff: 36, run: "10 s", gpuRun: "1 to 2 s" },
    { name: "Good goose", spacing: 0.006, cells: 88, peak: 0.9, plateau: 27.7, defl: 152.1, skin: 8, stiff: 62, run: "35 s", gpuRun: "4 to 6 s" },
    { name: "Very good goose", spacing: 0.0045, cells: 112, peak: 2.7, plateau: 13.1, defl: 152.9, skin: 25, stiff: 152, run: "2 min", gpuRun: "10 to 12 s" },
    { name: "Excellent goose", spacing: 0.0035, cells: 144, peak: 11.3, plateau: 3.2, defl: 228.1, skin: 249, stiff: 191, gpuRun: "20 to 60 s", gpu: true },
  ];
  const list = all.filter((p) => {
    assert(typeof p.name === "string", "a preset has a name");
    assert(p.cells % 8 === 0, "skin cells are a multiple of 8");
    return eng.gpu || !p.gpu;
  });
  assert(list.length >= 3, "the CPU has at least three presets");
  assert(list.length <= all.length, "the list only loses presets");
  return list;
}

const PRESETS = presetList();

function newState() {
  assert(V_C > 0, "the cruise speed is positive");
  assert(T_SKIN > 0, "the skin is thick");
  return {
    phase: "idle",          // idle | approach | sim | done | wall
    mode: 0,                // 0: panel, 1: rigid wall
    preset: 0,
    speed: V_C,
    tSkin: T_SKIN,          // skin thickness, m
    costume: true,
    pov: false,
    muted: false,
    yaw: 1.0, pitch: 0.25, dist: 1.3,
    t0: 0,
    ke0: 1,
    peakF: 0,
    elems: null, skinNe: 0,
    edges: null,            // per element: a bit per side that is a feature line (featureEdges)
    nodes: null, parts: null, press: null, strain: null,
    init: null,             // particle positions at set-up
    skin: null,             // costume colour per particle
    anchors: null,
    hist: [],
    wall: null,
    frameSim: 0, frameReal: 16.7, msPerStep: 0, fps: 60,
    batch: null,            // the GPU batches of this set-up (gpuStep)
    splatted: false,
    solverPhase: -1,        // the solver phase that ran last (run_phase in strike.goose)
    gif: null,              // the GIF recorder of the last run
    gifHold: false,         // the run ended: the next GIF frame is the last
  };
}

const st = newState();

try { st.muted = localStorage.getItem("goosestrike-muted") === "1"; } catch { /* no storage */ }

// ---------------------------------------------------------------------------
// sound: a synthesized honk and splat

let audio = null;
function ac() {
  assert(typeof st.muted === "boolean", "muted is a flag");
  assert(audio === null || typeof audio === "object", "audio is a context or nothing");
  try {
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
  } catch {
    st.muted = true;
    showMute();
    return null;
  }
  return audio;
}

function honk(pitch = 1, when = 0) {
  assert(Number.isFinite(pitch) && pitch > 0, "a pitch is positive");
  assert(Number.isFinite(when) && when >= 0, "a delay is not negative");
  if (st.muted) return;
  const a = ac();
  if (!a) return;
  assert(typeof a.createOscillator === "function", "the audio context makes oscillators");
  const t = a.currentTime + when;
  const osc = a.createOscillator(), osc2 = a.createOscillator();
  const bp = a.createBiquadFilter(), g = a.createGain();
  osc.type = "sawtooth"; osc2.type = "square";
  osc.frequency.setValueAtTime(410 * pitch, t);
  osc.frequency.exponentialRampToValueAtTime(300 * pitch, t + 0.22);
  osc2.frequency.setValueAtTime(205 * pitch, t);
  osc2.frequency.exponentialRampToValueAtTime(150 * pitch, t + 0.22);
  bp.type = "bandpass"; bp.frequency.value = 1100; bp.Q.value = 2.5;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.35, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
  osc.connect(bp); osc2.connect(bp); bp.connect(g); g.connect(a.destination);
  osc.start(t); osc2.start(t); osc.stop(t + 0.3); osc2.stop(t + 0.3);
}

function splat() {
  assert(typeof st.muted === "boolean", "muted is a flag");
  if (st.muted) return;
  const a = ac();
  if (!a) return;
  assert(a.sampleRate > 0, "the audio context has a sample rate");
  const t = a.currentTime;
  const n = Math.floor(a.sampleRate * 0.5);
  assert(n > 0, "the splat has samples");
  const buf = a.createBuffer(1, n, a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
  const src = a.createBufferSource(), lp = a.createBiquadFilter(), g = a.createGain();
  src.buffer = buf;
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(4000, t);
  lp.frequency.exponentialRampToValueAtTime(150, t + 0.45);
  g.gain.value = 0.6;
  src.connect(lp); lp.connect(g); g.connect(a.destination);
  src.start(t);
}

// ---------------------------------------------------------------------------
// set-up of a run

function readState() {
  assert(typeof eng.fillRender === "function", "the solver fills the render data");
  eng.fillRender();
  st.nodes = eng.nodes();
  st.parts = eng.particles();
  st.press = eng.pressure();
  st.strain = eng.strain();
  assert(st.nodes.length % 3 === 0, "nodes come as triples");
  assert(st.parts.length % 3 === 0, "particles come as triples");
  assert(st.press.length * 3 === st.parts.length, "a pressure for each particle");
}

function nearest(px, x, y, z) {
  assert(px.length > 0 && px.length % 3 === 0, "positions come as triples");
  assert(typeof x === "number" && typeof y === "number" && typeof z === "number", "a point has three numbers");
  let best = 0, bd = Infinity;
  for (let i = 0; i < px.length / 3; i++) {
    const dx = px[3 * i] - x, dy = px[3 * i + 1] - y, dz = px[3 * i + 2] - z;
    const d = dx * dx + dy * dy + dz * dz;
    if (d < bd) { bd = d; best = i; }
  }
  assert(best >= 0 && best < px.length / 3, "the nearest is a particle");
  return best;
}

// Costume: a cartoon goose painted on the capsule. The capsule flies toward
// -z, so the head is at the low-z end, and +y is the goose's back. All the
// paint uses the one palette GOOSE: soft round shapes with one ink outline.
function goosePalette() {
  const palette = {
    belly: [252, 250, 244], back: [234, 228, 216],   // feathers, belly to back
    orange: "#e8913a", ink: "#2b2925", blush: "rgba(226, 120, 110, 0.5)", star: "#e9b640",
  };
  assert(palette.belly.length === 3, "a feather colour is RGB");
  assert(palette.back.length === 3, "a feather colour is RGB");
  return palette;
}

const GOOSE = goosePalette();

function paintGoose() {
  assert(st.init !== null, "the set-up kept the particle positions");
  assert(st.init.length % 3 === 0, "positions come as triples");
  const p = st.init, n = p.length / 3;
  const D = eng.birdD(), L = eng.birdL(), r = 0.5 * D;
  assert(n > 0, "the bird has particles");
  assert(D > 0 && L > 0, "the bird has a size");
  let zmin = Infinity, zmax = -Infinity;
  for (let i = 0; i < n; i++) { zmin = Math.min(zmin, p[3 * i + 2]); zmax = Math.max(zmax, p[3 * i + 2]); }
  const head = zmin + r;              // centre of the front hemisphere
  const mid = zmin + 0.5 * L;
  // feathers: a smooth blend from the belly to the back, in 32 tones
  st.skin = new Array(n);
  for (let i = 0; i < n; i++) {
    const y = p[3 * i + 1] / r;
    const s = Math.round(32 * smoothstep(-0.6, 1.2, y)) / 32;
    st.skin[i] = rgb(GOOSE.belly.map((c, k) => {
      assert(k >= 0 && k < 3, "a channel is red, green or blue");
      assert(s >= 0 && s <= 1, "a blend is between 0 and 1");
      return c + s * (GOOSE.back[k] - c);
    }));
  }
  // a point on the front hemisphere in the direction (x, y, -z)
  const onHead = (x, y, z) => {
    assert(Number.isFinite(x + y + z), "a direction has three numbers");
    assert(r > 0, "the head has a radius");
    const d = norm([x, y, -z]);
    return nearest(p, r * d[0], r * d[1], head + r * d[2]);
  };
  st.anchors = {
    nose: onHead(0, -0.1, 1),
    eyes: [onHead(0.5, 0.42, 0.75), onHead(-0.5, 0.42, 0.75)],
    cheeks: [onHead(0.72, 0.02, 0.62), onHead(-0.72, 0.02, 0.62)],
    tuft: onHead(0, 0.95, 0.3),
    wings: [nearest(p, 0.92 * r, 0.3 * r, mid + 0.25 * r), nearest(p, -0.92 * r, 0.3 * r, mid + 0.25 * r)],
    feet: [nearest(p, 0.4 * r, -0.92 * r, mid + 0.3 * r), nearest(p, -0.4 * r, -0.92 * r, mid + 0.3 * r)],
    tail: nearest(p, 0, 0, zmax),
  };
  assert(st.skin.length === n, "a colour for each particle");
  assert(st.anchors.eyes.length === 2, "a goose has two eyes");
}

function skinElements(cells) {
  assert(Number.isInteger(cells) && cells > 0, "cells are a whole number");
  // build_panel puts the skin first: cells x gs elements, gs rounded to 8
  const gs = Math.floor(cells * 0.760 / 1.0668 / 8 + 0.5) * 8;
  assert(gs > 0 && gs % 8 === 0, "gs is rounded to 8");
  return cells * gs;
}

// The sides that are not between exactly two elements: the panel edges, the
// free flanges, and the lines where a stringer or a frame meets the skin.
// Bit k: the side from corner k to corner k + 1.
function featureEdges(el) {
  assert(el.length % 4 === 0, "elements have four corners");
  assert(el instanceof Int32Array, "corners are 32-bit integers");
  const ne = el.length / 4, count = new Map(), key = (a, b) => {
    assert(Number.isInteger(a) && Number.isInteger(b), "corners are node numbers");
    assert(a >= 0 && b >= 0, "node numbers are not negative");
    return a < b ? a * 1e6 + b : b * 1e6 + a;
  };
  for (let i = 0; i < 4 * ne; i++) {
    const k = key(el[i], el[i - i % 4 + (i + 1) % 4]);
    count.set(k, (count.get(k) || 0) + 1);
  }
  const edges = new Uint8Array(ne);
  for (let i = 0; i < 4 * ne; i++) if (count.get(key(el[i], el[i - i % 4 + (i + 1) % 4])) !== 2) edges[i >> 2] |= 1 << i % 4;
  assert(edges.length === ne, "an edge mask for each element");
  return edges;
}

function setupRun(mode) {
  const pr = PRESETS[st.preset];
  assert(mode === 0 || mode === 1, "a mode is the panel or the wall");
  assert(pr !== undefined, "the preset exists");
  eng.setSkin(st.tSkin);
  eng.setup(mode, pr.cells, pr.spacing, st.speed);
  st.batch = { seen: 0, steps: 16 };
  st.mode = mode;
  legend();
  readState();
  st.elems = eng.elements();
  assert(st.elems.length % 4 === 0, "elements have four corners");
  st.edges = featureEdges(st.elems);
  st.skinNe = mode === 0 ? skinElements(pr.cells) : 0;
  st.init = st.parts.slice();
  st.ke0 = eng.birdKE();
  $("energyTitle").textContent = `Goose energy at start: ${fmt(st.ke0 / 1e3, 1)} kJ`;
  st.peakF = 0;
  st.frameSim = 0;
  st.msPerStep = 0;
  st.hist = [];
  st.splatted = false;
  st.solverPhase = -1;
  paintGoose();
  drawForceChart();
  telemetry();
  assert(st.skinNe <= st.elems.length / 4, "the skin is part of the shells");
  assert(st.hist.length === 0, "the force history starts empty");
}

// ---------------------------------------------------------------------------
// the camera and the painter's algorithm

let drag = null;
const canvas = $("view");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, DPR = 1;

function resize() {
  assert(canvas === $("view"), "the canvas is the view");
  assert(typeof canvas.getBoundingClientRect === "function", "the canvas has a box");
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  const r = canvas.getBoundingClientRect();
  W = Math.max(1, Math.round(r.width * DPR));
  H = Math.max(1, Math.round(r.height * DPR));
  canvas.width = W; canvas.height = H;
  assert(W >= 1 && H >= 1, "the canvas has a size");
  assert(DPR > 0 && DPR <= 2, "the pixel ratio is up to 2");
}
new ResizeObserver(resize).observe(canvas);

const cam = { eye: [0, 0, 0], r: [1, 0, 0], u: [0, 1, 0], f: [0, 0, 1], foc: 1 };

function norm(v) {
  assert(v.length === 3, "a vector has three parts");
  assert(typeof v[0] === "number", "a vector holds numbers");
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

function cross(a, b) {
  assert(a.length === 3, "a vector has three parts");
  assert(b.length === 3, "a vector has three parts");
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

function setCamera() {
  assert(st.dist > 0, "the camera is away from the target");
  assert(H >= 1, "the canvas has a height");
  let eye, target, upHint;
  if (st.pov) {
    // a passenger at the window, inside the fuselage, looking out
    eye = [0.12, 0.06, -0.7]; target = [0, 0, 0.02]; upHint = [0, 1, 0];
  } else {
    // The fuselage side stands upright: x (along the fuselage) is
    // horizontal, y (around the fuselage) is up, the goose flies along -z.
    target = [0, 0, 0.1];
    const c = Math.cos(st.pitch);
    eye = [target[0] + st.dist * c * Math.sin(st.yaw), target[1] + st.dist * Math.sin(st.pitch), target[2] + st.dist * c * Math.cos(st.yaw)];
    upHint = [0, 1, 0];
  }
  cam.eye = eye;
  cam.f = norm([target[0] - eye[0], target[1] - eye[1], target[2] - eye[2]]);
  cam.r = norm(cross(cam.f, upHint));
  cam.u = cross(cam.r, cam.f);
  cam.foc = 0.5 * H / Math.tan((st.pov ? 34 : 20) * Math.PI / 180);
  assert(cam.foc > 0, "the focal length is positive");
  assert(cam.f.length === 3 && cam.r.length === 3 && cam.u.length === 3, "the camera has three axes");
}

// world -> [screen x, screen y, depth]
function proj(x, y, z, out, o) {
  assert(Number.isInteger(o) && o >= 0, "the offset is an index");
  assert(out.length >= o + 3, "the output holds three numbers");
  const dx = x - cam.eye[0], dy = y - cam.eye[1], dz = z - cam.eye[2];
  const cz = dx * cam.f[0] + dy * cam.f[1] + dz * cam.f[2];
  const cx = dx * cam.r[0] + dy * cam.r[1] + dz * cam.r[2];
  const cy = dx * cam.u[0] + dy * cam.u[1] + dz * cam.u[2];
  out[o] = 0.5 * W + cam.foc * cx / cz;
  out[o + 1] = 0.5 * H - cam.foc * cy / cz;
  out[o + 2] = cz;
}

// buckets from far to near
const NB = 4096;
let sNodes = new Float32Array(0), sParts = new Float32Array(0);
let keys = new Float32Array(0), order = new Int32Array(0), tmp = new Int32Array(0);
const counts = new Int32Array(NB + 1);

function depthSort(n) {
  assert(Number.isInteger(n) && n >= 0, "the count is a whole number");
  assert(n <= keys.length && n <= order.length && n <= tmp.length, "the buffers hold n items");
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < n; i++) { const k = keys[i]; if (k < lo) lo = k; if (k > hi) hi = k; }
  const s = (NB - 1) / Math.max(hi - lo, 1e-9);
  counts.fill(0);
  for (let i = 0; i < n; i++) tmp[i] = NB - 1 - Math.floor((keys[i] - lo) * s);
  for (let i = 0; i < n; i++) counts[tmp[i] + 1]++;
  for (let b = 0; b < NB; b++) counts[b + 1] += counts[b];
  for (let i = 0; i < n; i++) order[counts[tmp[i]]++] = i;
  assert(counts[NB - 1] <= n || n === 0, "the buckets hold at most n items");
}

function grow(n) {
  assert(Number.isInteger(n) && n >= 0, "the count is a whole number");
  if (keys.length < n) { keys = new Float32Array(n); order = new Int32Array(n); tmp = new Int32Array(n); }
  assert(keys.length >= n && order.length >= n && tmp.length >= n, "the buffers grew");
}

// Colour maps: smooth ramps, interpolated in OKLab between the stops, in
// 256 levels. The strain map starts at the colour of the bare metal (the
// primer inside), so the colour moves smoothly from zero plastic strain.
function smoothstep(a, b, x) {
  assert(a !== b, "the edges differ");
  assert(typeof x === "number", "smoothstep takes a number");
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function rgb(c) {
  assert(c.length >= 3, "a colour has three channels");
  assert(typeof c[0] === "number", "channels are numbers");
  return `rgb(${Math.round(c[0])} ${Math.round(c[1])} ${Math.round(c[2])})`;
}

function toLab(hex) {
  assert(/^#[0-9a-f]{6}$/i.test(hex), "a colour is #rrggbb");
  assert(typeof hex === "string", "a colour is text");
  const l = [1, 3, 5].map((k) => {
    const v = parseInt(hex.slice(k, k + 2), 16) / 255;
    assert(v >= 0 && v <= 1, "a channel is 0 to 255");
    assert(k % 2 === 1, "a channel starts at 1, 3 or 5");
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  const m = [0.4122214708 * l[0] + 0.5363325363 * l[1] + 0.0514459929 * l[2],
    0.2119034982 * l[0] + 0.6806995451 * l[1] + 0.1073969566 * l[2],
    0.0883024619 * l[0] + 0.2817188376 * l[1] + 0.6299787005 * l[2]].map(Math.cbrt);
  return [0.2104542553 * m[0] + 0.793617785 * m[1] - 0.0040720468 * m[2],
    1.9779984951 * m[0] - 2.428592205 * m[1] + 0.4505937099 * m[2],
    0.0259040371 * m[0] + 0.7827717662 * m[1] - 0.808675766 * m[2]];
}

function fromLab(c) {
  assert(c.length === 3, "a Lab colour has three parts");
  assert(typeof c[0] === "number", "Lab parts are numbers");
  const m = [c[0] + 0.3963377774 * c[1] + 0.2158037573 * c[2],
    c[0] - 0.1055613458 * c[1] - 0.0638541728 * c[2],
    c[0] - 0.0894841775 * c[1] - 1.291485548 * c[2]].map((v) => {
    assert(typeof v === "number", "a cone response is a number");
    assert(c.length === 3, "the Lab colour has three parts");
    return v * v * v;
  });
  const l = [4.0767416621 * m[0] - 3.3077115913 * m[1] + 0.2309699292 * m[2],
    -1.2684380046 * m[0] + 2.6097574011 * m[1] - 0.3413193965 * m[2],
    -0.0041960863 * m[0] - 0.7034186147 * m[1] + 1.707614701 * m[2]];
  return l.map((v) => {
    assert(typeof v === "number", "a linear channel is a number");
    assert(l.length === 3, "a colour has three channels");
    return 255 * Math.max(0, Math.min(1, v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055));
  });
}

function ramp(stops) {
  assert(Array.isArray(stops), "the stops are a list");
  assert(stops.length >= 2, "a ramp has two stops at least");
  const lab = stops.map(toLab), out = [];
  for (let i = 0; i < 256; i++) {
    const x = (i / 255) * (lab.length - 1), k = Math.min(lab.length - 2, Math.floor(x)), f = x - k;
    out.push(fromLab(lab[k].map((v, j) => {
      assert(j >= 0 && j < 3, "a Lab colour has three parts");
      assert(f >= 0 && f <= 1, "the blend is between the stops");
      return v + f * (lab[k + 1][j] - v);
    })));
  }
  assert(out.length === 256, "a ramp has 256 levels");
  return out;
}

function colourMaps() {
  const hot = ["#e2b54f", "#c4613f", "#6e2a22"];             // amber, terracotta, oxblood
  const maps = {
    metal: ramp(["#c7c3ba", ...hot]),                        // the skin outside
    primer: ramp(["#9da27f", ...hot]),                       // inside, stringers and frames
    pressure: ramp(["#243552", "#3f6f86", "#94b49c", "#e8c766", "#c4613f"]),
  };
  assert(maps.metal.length === 256, "the metal map has 256 levels");
  assert(maps.pressure.length === 256, "the pressure map has 256 levels");
  return maps;
}

const MAPS = colourMaps();
const GRID = "rgba(43, 41, 37, 0.35)";                     // GOOSE.ink, for the element sides
const SHADES = 64;
const mapCache = new Map();

// colour of level s (0 to 1) of a map, darkened by shade (0 to 1)
function mapColour(name, s, shade = 1) {
  assert(MAPS[name] !== undefined, "the map exists");
  assert(typeof shade === "number", "the shade is a number");
  const i = Math.round(255 * Math.max(0, Math.min(1, s))), j = Math.round(SHADES * shade);
  const key = name + i * 32 + j;
  let c = mapCache.get(key);
  if (!c) {
    assert(i >= 0 && i <= 255, "the level is one of 256");
    c = rgb(MAPS[name][i].map((v) => {
      assert(j >= 0, "the shade is not negative");
      assert(typeof v === "number", "a channel is a number");
      return v * j / SHADES;
    }));
    mapCache.set(key, c);
  }
  assert(typeof c === "string", "a colour is text");
  return c;
}

function logP(p) {
  assert(typeof p === "number", "a pressure is a number");
  assert(P_HI > P_LO, "the scale rises");
  return (Math.log10(Math.max(p, P_LO)) - Math.log10(P_LO)) / (Math.log10(P_HI) - Math.log10(P_LO));
}

function pressureColour(p) {
  assert(typeof p === "number", "a pressure is a number");
  assert(MAPS.pressure !== undefined, "the pressure map exists");
  return mapColour("pressure", logP(p));
}

// square-root scale, so that the first yield shows: 2 % and 8 % are at 1/3 and 2/3
function strainColour(ep, shade, inside) {
  assert(typeof ep === "number", "a strain is a number");
  assert(typeof inside === "boolean", "inside is a flag");
  return mapColour(inside ? "primer" : "metal", Math.sqrt(ep / EP_MAX), shade);
}

// a CSS gradient of a map, for the legend
function cssRamp(name) {
  assert(MAPS[name] !== undefined, "the map exists");
  assert(typeof name === "string", "a map name is text");
  return `linear-gradient(90deg, ${Array.from({ length: 17 }, (_, k) => {
    assert(k >= 0 && k <= 16, "a stop is one of 17");
    assert(MAPS[name].length === 256, "a map has 256 levels");
    return mapColour(name, k / 16);
  }).join(",")})`;
}

function render(offsetZ, flap) {
  assert(Number.isFinite(offsetZ), "the offset is a number");
  assert(Number.isFinite(flap), "the flap is a number");
  assert(ctx !== null, "the canvas has a 2D context");
  setCamera();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, W, H);
  const nn = st.nodes ? st.nodes.length / 3 : 0;
  const np = st.parts ? st.parts.length / 3 : 0;
  const ne = st.elems ? st.elems.length / 4 : 0;
  assert(Number.isInteger(nn) && Number.isInteger(np) && Number.isInteger(ne), "counts are whole numbers");
  if (sNodes.length < 3 * nn) sNodes = new Float32Array(3 * nn);
  if (sParts.length < 3 * np) sParts = new Float32Array(3 * np);
  for (let i = 0; i < nn; i++) proj(st.nodes[3 * i], st.nodes[3 * i + 1], st.nodes[3 * i + 2], sNodes, 3 * i);
  for (let i = 0; i < np; i++) proj(st.parts[3 * i], st.parts[3 * i + 1], st.parts[3 * i + 2] + offsetZ, sParts, 3 * i);

  if (st.mode === 1) drawWall();

  // decorations follow the particles they are painted on
  const costume = st.costume && st.mode === 0;
  const decor = costume ? decorations(offsetZ, flap) : [];
  const n = ne + np + decor.length;
  assert(!costume || st.anchors !== null, "a costume has anchors");
  grow(n);
  for (let e = 0; e < ne; e++) {
    const a = st.elems[4 * e], b = st.elems[4 * e + 1], c = st.elems[4 * e + 2], d = st.elems[4 * e + 3];
    keys[e] = st.strain[e] < 0 ? -1 : 0.25 * (sNodes[3 * a + 2] + sNodes[3 * b + 2] + sNodes[3 * c + 2] + sNodes[3 * d + 2]);
  }
  for (let i = 0; i < np; i++) keys[ne + i] = sParts[3 * i + 2];
  for (let k = 0; k < decor.length; k++) keys[ne + np + k] = decor[k].depth;
  depthSort(n);

  const pr = eng.spacing() * 0.62 * cam.foc;
  for (let k = 0; k < n; k++) {
    const id = order[k];
    if (id < ne) drawShell(id);
    else if (id < ne + np) {
      const i = id - ne, z = sParts[3 * i + 2];
      if (z <= 0.01) continue;
      ctx.fillStyle = costume ? st.skin[i] : pressureColour(st.press[i]);
      ctx.beginPath();
      ctx.arc(sParts[3 * i], sParts[3 * i + 1], Math.max(0.8, pr / z), 0, 2 * Math.PI);
      ctx.fill();
    } else decor[id - ne - np].draw();
  }
  if (costume && contactStarted()) drawStars(offsetZ);
  assert(order.length >= n, "the order holds every item");
}

function drawShell(e) {
  assert(Number.isInteger(e) && e >= 0, "an element is a whole number");
  assert(e < st.elems.length / 4, "the element exists");
  if (st.strain[e] < 0) return;             // eroded
  const el = st.elems, P = st.nodes;
  const a = el[4 * e], b = el[4 * e + 1], c = el[4 * e + 2], d = el[4 * e + 3];
  if (sNodes[3 * a + 2] <= 0.01 || sNodes[3 * c + 2] <= 0.01) return;
  // normal from the diagonals, for shading and for the side in view
  const r1 = [P[3 * c] - P[3 * a], P[3 * c + 1] - P[3 * a + 1], P[3 * c + 2] - P[3 * a + 2]];
  const r2 = [P[3 * d] - P[3 * b], P[3 * d + 1] - P[3 * b + 1], P[3 * d + 2] - P[3 * b + 2]];
  const nrm = norm(cross(r1, r2));
  const toEye = norm([cam.eye[0] - P[3 * a], cam.eye[1] - P[3 * a + 1], cam.eye[2] - P[3 * a + 2]]);
  const facing = nrm[0] * toEye[0] + nrm[1] * toEye[1] + nrm[2] * toEye[2];
  const shade = 0.72 + 0.28 * Math.abs(facing);
  const inside = e >= st.skinNe || facing < 0;
  ctx.fillStyle = strainColour(st.strain[e], shade, inside);
  ctx.strokeStyle = ctx.fillStyle;
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(sNodes[3 * a], sNodes[3 * a + 1]);
  ctx.lineTo(sNodes[3 * b], sNodes[3 * b + 1]);
  ctx.lineTo(sNodes[3 * c], sNodes[3 * c + 1]);
  ctx.lineTo(sNodes[3 * d], sNodes[3 * d + 1]);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // the outlines, so that the shape shows over all the strain colours: a
  // thin grid of the element sides and a heavier line on the feature lines
  ctx.strokeStyle = GRID;
  ctx.lineWidth = 0.5 * DPR;
  ctx.stroke();
  assert(st.edges.length === st.elems.length / 4, "an edge mask for each element");
  const f = st.edges[e];
  if (!f) return;
  const q = [a, b, c, d];
  ctx.strokeStyle = GOOSE.ink;
  ctx.lineWidth = 1.2 * DPR;
  ctx.beginPath();
  for (let k = 0; k < 4; k++) {
    if (!(f >> k & 1)) continue;
    const i = q[k], j = q[(k + 1) % 4];
    ctx.moveTo(sNodes[3 * i], sNodes[3 * i + 1]);
    ctx.lineTo(sNodes[3 * j], sNodes[3 * j + 1]);
  }
  ctx.stroke();
}

function drawWall() {
  assert(st.mode === 1, "the wall is drawn in the wall check");
  assert(W > 0 && H > 0, "the canvas has a size");
  const pts = [];
  const o = [0, 0, 0];
  ctx.strokeStyle = "#7a8794";
  ctx.lineWidth = 1;
  for (let k = -5; k <= 5; k++) {
    for (const [x0, y0, x1, y1] of [[k * 0.05, -0.25, k * 0.05, 0.25], [-0.25, k * 0.05, 0.25, k * 0.05]]) {
      proj(x0, y0, 0, o, 0); pts[0] = o[0]; pts[1] = o[1];
      proj(x1, y1, 0, o, 0);
      ctx.beginPath(); ctx.moveTo(pts[0], pts[1]); ctx.lineTo(o[0], o[1]); ctx.stroke();
    }
  }
}

function contactStarted() {
  assert(typeof st.phase === "string", "the phase is a name");
  assert(typeof eng.tContact === "function", "the solver tells the contact time");
  return eng.tContact() >= 0 && st.phase !== "approach";
}

// screen position and depth of particle i
function sp(i) {
  assert(Number.isInteger(i) && i >= 0, "a particle is a whole number");
  assert(3 * i + 2 < sParts.length, "the particle is projected");
  return [sParts[3 * i], sParts[3 * i + 1], sParts[3 * i + 2]];
}

// a closed smooth curve with the points as control points: the one shape
// of all the costume parts
function blob(pts) {
  assert(pts.length >= 3, "a blob has three points at least");
  assert(Array.isArray(pts[0]), "a point is a pair");
  const m = (p, q) => {
    assert(p.length >= 2, "a point is a pair");
    assert(q.length >= 2, "a point is a pair");
    return [0.5 * (p[0] + q[0]), 0.5 * (p[1] + q[1])];
  };
  const n = pts.length;
  let s = m(pts[n - 1], pts[0]);
  ctx.beginPath(); ctx.moveTo(s[0], s[1]);
  for (let i = 0; i < n; i++) { s = m(pts[i], pts[(i + 1) % n]); ctx.quadraticCurveTo(pts[i][0], pts[i][1], s[0], s[1]); }
  ctx.closePath();
}

// The parts are drawn in screen space, in a frame of the goose: u along the
// body toward the beak, v toward the back. Thus they keep their shape from
// all sides. Sizes are in bird diameters.
function decorations(offsetZ, flap) {
  assert(Number.isFinite(offsetZ), "the offset is a number");
  assert(st.anchors !== null && st.parts !== null, "the goose is set up");
  const now = reducedMotion.matches ? 0 : performance.now();
  const A = st.anchors, D = eng.birdD(), P = st.parts;
  const wp = (i) => {
    assert(Number.isInteger(i) && i >= 0, "a particle is a whole number");
    assert(3 * i + 2 < P.length, "the particle exists");
    return [P[3 * i], P[3 * i + 1], P[3 * i + 2] + offsetZ];
  };
  const pt = (w) => {
    assert(w.length === 3, "a world point has three numbers");
    assert(cam.foc > 0, "the camera is set");
    const o = [0, 0, 0];
    proj(w[0], w[1], w[2], o, 0);
    return o;
  };
  const nose = wp(A.nose), tail = wp(A.tail);
  const n = pt(nose), t = pt(tail);
  let ux = n[0] - t[0], uy = n[1] - t[1];
  const ul = Math.hypot(ux, uy);
  if (ul < 1e-6) { ux = 1; uy = 0; } else { ux /= ul; uy /= ul; }
  // v: perpendicular to u, on the side of the goose's back (+y)
  const top = pt([nose[0], nose[1] + 0.1, nose[2]]);
  const side = (top[0] - n[0]) * -uy + (top[1] - n[1]) * ux > 0 ? 1 : -1;
  const vx = -uy * side, vy = ux * side;
  // a point at (u, v) bird diameters from the screen point c
  const at = (c, k, u, v) => {
    assert(c.length >= 2, "a screen point is a pair");
    assert(typeof k === "number", "the scale is a number");
    return [c[0] + k * (u * ux + v * vx), c[1] + k * (u * uy + v * vy)];
  };
  const dizzy = contactStarted();
  const list = [];
  const scale = (z) => {
    assert(typeof z === "number", "a depth is a number");
    assert(D > 0, "the bird has a diameter");
    return D * cam.foc / z;
  };
  // the one outline rule: ink, 1.2 % of the bird diameter, at least 1 px
  const outline = (z) => {
    assert(typeof z === "number", "a depth is a number");
    assert(DPR > 0, "the pixel ratio is positive");
    ctx.strokeStyle = GOOSE.ink; ctx.lineWidth = Math.max(DPR, 0.012 * scale(z)); ctx.lineJoin = "round"; ctx.stroke();
  };
  const part = (c, fill, pts, dz) => {
    assert(c.length === 3, "a part sits at a screen point with a depth");
    assert(Array.isArray(pts), "a part has outline points");
    return list.push({ depth: c[2] + dz, draw() { ctx.fillStyle = fill; blob(pts); ctx.fill(); outline(c[2]); } });
  };
  const feather = rgb(GOOSE.belly);

  bodyParts(A, { part, at, scale, n, feather, dizzy, now, flap });
  faceParts(list, A, { scale, ux, uy, dizzy, now });
  return list;
}

// the wings, the tuft, the beak and the feet: f has the part and point
// functions of decorations, the beak point n, the feather colour and the flap
function bodyParts(A, f) {
  assert(typeof f.part === "function" && typeof f.at === "function", "the body has part and point functions");
  assert(A.wings.length === 2 && A.feet.length === 2, "a goose has two wings and two feet");
  const { part, at, scale, n, feather, dizzy, now, flap } = f;
  // wings: soft feathers on the sides, flapping in the approach, limp after it
  for (const i of A.wings) {
    const c = sp(i), k = scale(c[2]);
    const up = dizzy ? -0.05 + 0.03 * Math.sin(now / 40) : 0.25 + 0.2 * flap;
    part(c, feather, [at(c, k, 0.18, 0.02), at(c, k, -0.2, 0.12 + up), at(c, k, -0.5, 0.1 + 0.8 * up), at(c, k, -0.3, -0.12)], -0.03);
  }
  // a tuft of feathers on the head
  {
    const c = sp(A.tuft), k = scale(c[2]);
    part(c, feather, [at(c, k, 0.05, -0.02), at(c, k, 0.04, 0.14), at(c, k, -0.12, 0.24), at(c, k, -0.07, 0.04)], -0.02);
  }
  // beak: a short round bean
  {
    const k = scale(n[2]);
    part(n, GOOSE.orange, [at(n, k, -0.04, 0.09), at(n, k, 0.26, 0.05), at(n, k, 0.26, -0.03), at(n, k, -0.04, -0.08)], -0.03);
  }
  // orange webbed feet, tucked under the belly
  for (const i of A.feet) {
    const c = sp(i), k = scale(c[2]);
    part(c, GOOSE.orange, [at(c, k, 0, 0), at(c, k, -0.06, -0.2), at(c, k, 0.06, -0.26), at(c, k, 0.22, -0.2), at(c, k, 0.1, -0.08)], -0.01);
  }
}

function drawCheek(c, rr, angle) {
  assert(c.length >= 2, "a cheek sits at a screen point");
  assert(typeof rr === "number" && typeof angle === "number", "a cheek has a size and an angle");
  ctx.fillStyle = GOOSE.blush;
  ctx.beginPath(); ctx.ellipse(c[0], c[1], rr * 1.3, rr * 0.85, angle, 0, 2 * Math.PI); ctx.fill();
}

function drawSpiral(c, rr, now) {
  assert(c.length >= 2, "a spiral sits at a screen point");
  assert(typeof now === "number", "the time is a number");
  ctx.beginPath(); ctx.arc(c[0], c[1], rr * 0.82, 0, 2 * Math.PI); ctx.fill();
  ctx.strokeStyle = GOOSE.ink; ctx.lineWidth = Math.max(DPR, 0.16 * rr);
  ctx.beginPath();
  const turn = now / 120;
  for (let k = 0; k <= 40; k++) {
    const a = turn + k * 0.45, q = rr * 0.7 * k / 40;
    const x = c[0] + q * Math.cos(a), y = c[1] + q * Math.sin(a);
    if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawEye(c, rr, dizzy, now) {
  assert(c.length >= 2, "an eye sits at a screen point");
  assert(typeof dizzy === "boolean", "dizzy is a flag");
  ctx.fillStyle = GOOSE.ink;
  ctx.beginPath(); ctx.arc(c[0], c[1], rr, 0, 2 * Math.PI); ctx.fill();
  ctx.fillStyle = "#fff";
  if (dizzy) {
    drawSpiral(c, rr, now);
  } else {
    ctx.beginPath(); ctx.arc(c[0] - rr * 0.32, c[1] - rr * 0.32, rr * 0.34, 0, 2 * Math.PI); ctx.fill();
    ctx.beginPath(); ctx.arc(c[0] + rr * 0.3, c[1] + rr * 0.3, rr * 0.14, 0, 2 * Math.PI); ctx.fill();
  }
}

// the cheeks and the eyes: f has the scale function, the direction (ux, uy)
// of the body on the screen, the dizzy flag and the time
function faceParts(list, A, f) {
  assert(Array.isArray(list), "the parts are a list");
  assert(typeof f.scale === "function", "the face has a scale");
  // blush
  for (const i of A.cheeks) {
    const c = sp(i);
    const rr = 0.07 * f.scale(c[2]);
    list.push({ depth: c[2] - 0.008, draw() { drawCheek(c, rr, Math.atan2(f.uy, f.ux)); } });
  }
  // eyes: big and round before contact, spirals after
  for (const i of A.eyes) {
    const c = sp(i);
    const rr = 0.11 * f.scale(c[2]);
    list.push({ depth: c[2] - 0.01, draw() { drawEye(c, rr, f.dizzy, f.now); } });
  }
  assert(list.length >= 4, "the face adds cheeks and eyes");
}

function drawStars(offsetZ) {
  assert(Number.isFinite(offsetZ), "the offset is a number");
  assert(st.parts !== null, "the goose is set up");
  const P = st.parts, np = P.length / 3;
  let cx = 0, cy = 0, cz = 0;
  for (let i = 0; i < np; i++) { cx += P[3 * i]; cy += P[3 * i + 1]; cz += P[3 * i + 2]; }
  cx /= np; cy /= np; cz /= np;
  const D = eng.birdD(), t = reducedMotion.matches ? 0 : performance.now() / 500, o = [0, 0, 0];
  for (let k = 0; k < 3; k++) {
    const a = t + k * 2.094;
    proj(cx + 0.6 * D * Math.cos(a), cy + 0.9 * D, cz + offsetZ + 0.6 * D * Math.sin(a), o, 0);
    if (o[2] <= 0.01) continue;
    const r = 0.1 * D * cam.foc / o[2];
    const q = [];
    for (let j = 0; j < 10; j++) {
      const ang = -Math.PI / 2 + j * Math.PI / 5, rr = j % 2 ? r * 0.5 : r;
      q.push([o[0] + rr * Math.cos(ang), o[1] + rr * Math.sin(ang)]);
    }
    ctx.fillStyle = GOOSE.star;
    ctx.beginPath();
    q.forEach((p, j) => {
      assert(p.length === 2, "a star point is a pair");
      assert(j >= 0 && j < 10, "a star has ten points");
      return j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
    });
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = GOOSE.ink; ctx.lineWidth = Math.max(DPR, 0.012 * D * cam.foc / o[2]); ctx.lineJoin = "round"; ctx.stroke();
  }
}

// ---------------------------------------------------------------------------
// charts

const chartData = new WeakMap();
function onChartResize(entries) {
  assert(Array.isArray(entries), "the observer gives a list");
  assert(chartData instanceof WeakMap, "chart data is kept per canvas");
  for (const { target } of entries) {
    const data = chartData.get(target);
    if (data) chart(target, data.series, data.opt);
  }
}

const chartResize = new ResizeObserver(onChartResize);

function chart(cv, series, opt) {
  assert(cv instanceof HTMLCanvasElement, "a chart is drawn on a canvas");
  assert(Array.isArray(series), "the series are a list");
  assert(opt.xmax > opt.xmin && opt.ymax > opt.ymin, "the axes have a range");
  if (!chartData.has(cv)) chartResize.observe(cv);
  chartData.set(cv, { series, opt });
  const dpr = DPR, r = cv.getBoundingClientRect();
  cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
  const c = cv.getContext("2d");
  const css = getComputedStyle(document.body);
  const ink = css.getPropertyValue("--ink"), muted = css.getPropertyValue("--muted"), line = css.getPropertyValue("--line");
  c.scale(dpr, dpr);
  const w = r.width, h = r.height, L = 46, R = 16, T = 8, B = 30;
  const fy = opt.log ? (y) => {
    assert(opt.ymin > 0, "a log axis starts above zero");
    assert(typeof y === "number", "a value is a number");
    return Math.log10(Math.max(y, opt.ymin));
  } : (y) => {
    assert(typeof y === "number", "a value is a number");
    assert(!opt.log, "this axis is linear");
    return y;
  };
  const y0 = fy(opt.ymin), y1 = fy(opt.ymax);
  const X = (x) => {
    assert(typeof x === "number", "a value is a number");
    assert(opt.xmax !== opt.xmin, "the x axis has a range");
    return L + (w - L - R) * (x - opt.xmin) / (opt.xmax - opt.xmin);
  };
  const Y = (y) => {
    assert(typeof y === "number", "a value is a number");
    assert(y1 !== y0, "the y axis has a range");
    return T + (h - T - B) * (1 - (fy(y) - y0) / (y1 - y0));
  };
  c.font = `11px ${css.getPropertyValue("--mono")}`;
  c.strokeStyle = line; c.fillStyle = muted; c.lineWidth = 1;
  for (const yt of opt.yticks) {
    c.beginPath(); c.moveTo(L, Y(yt)); c.lineTo(w - R, Y(yt)); c.stroke();
    c.textAlign = "right"; c.fillText(String(yt), L - 4, Y(yt) + 4);
  }
  for (const xt of opt.xticks) { c.textAlign = "center"; c.fillText(String(xt), X(xt), h - B + 14); }
  c.textAlign = "left"; c.fillText(opt.ylabel, L + 4, T + 10);
  c.textAlign = "right"; c.fillText(opt.xlabel, w - R, h - 4);
  for (const hl of opt.hlines || []) {
    c.strokeStyle = hl.color; c.setLineDash([5, 4]);
    c.beginPath(); c.moveTo(L, Y(hl.y)); c.lineTo(w - R, Y(hl.y)); c.stroke();
    c.setLineDash([]); c.fillStyle = hl.color; c.textAlign = "right"; c.fillText(hl.label, w - R - 2, Y(hl.y) - 4);
  }
  for (const s of series) {
    c.strokeStyle = s.color || ink; c.lineWidth = 1.6; c.beginPath();
    assert(s.xs.length === s.ys.length, "a point has an x and a y");
    s.xs.forEach((x, i) => {
      assert(i < s.ys.length, "every x has a y");
      assert(typeof x === "number", "an x is a number");
      const px = X(Math.min(Math.max(x, opt.xmin), opt.xmax)), py = Y(Math.min(Math.max(s.ys[i], opt.ymin), opt.ymax));
      return i ? c.lineTo(px, py) : c.moveTo(px, py);
    });
    c.stroke();
  }
}

function ticks(max, n) {
  assert(max > 0, "the axis has a length");
  assert(Number.isInteger(n) && n > 0, "the tick count is a whole number");
  const raw = max / n, mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 5, 10].map((m) => {
    assert(mag > 0, "the magnitude is positive");
    assert(m >= 1, "a step factor is at least 1");
    return m * mag;
  }).find((s) => {
    assert(typeof s === "number", "a step is a number");
    assert(raw > 0, "the raw step is positive");
    return s >= raw;
  });
  assert(step > 0, "the step is positive");
  const out = [];
  for (let v = 0; v <= max + 1e-9; v += step) out.push(+v.toFixed(6));
  assert(out.length > 0, "an axis has a tick");
  return out;
}

function drawForceChart() {
  const xs = [], ys = [];
  for (const h of st.hist) { xs.push(h.t * 1e6); ys.push(h.f / 1e3); }
  assert(xs.length === ys.length, "a force for each time");
  const ymax = Math.max(50, ...ys) * 1.1;
  assert(ymax > 0, "the axis has a length");
  chart($("forceChart"), [{ xs, ys }], {
    xmin: 0, xmax: T_END * 1e6, ymin: 0, ymax, xticks: ticks(T_END * 1e6, 6), yticks: ticks(ymax, 4),
    xlabel: "time (µs)", ylabel: "contact force (kN)",
  });
}

// ---------------------------------------------------------------------------
// the panel run

function fire() {
  if (st.phase === "approach" || st.phase === "sim" || st.phase === "wall") return;
  assert(st.phase === "idle" || st.phase === "done", "a run starts from rest");
  assert(st.speed > 0, "the goose flies");
  setupRun(0);
  st.phase = "approach";
  st.t0 = performance.now();
  startGif();
  $("verdict").hidden = true;
  setBusy(true);
  const view = canvas.getBoundingClientRect();
  if (view.top < 0 || view.bottom > window.innerHeight) {
    canvas.scrollIntoView({ behavior: "instant", block: "nearest" });
  }
  honk(Math.sqrt(st.speed / V_C));
  honk(Math.sqrt(st.speed / V_C) * 1.06, 0.3);
}

function setBusy(b) {
  assert(typeof b === "boolean", "busy is a flag");
  assert($("fire") !== null && $("stop") !== null, "the run buttons exist");
  const focusStop = b && (document.activeElement === $("fire") || document.activeElement === $("wilbeck"));
  const focusFire = !b && document.activeElement === $("stop");
  $("fire").disabled = b;
  $("wilbeck").disabled = b;
  $("stop").disabled = !b;
  $("gif").disabled = b || !st.gif;
  $("fire").textContent = b ? "Goose in flight" : "Fire the goose";
  const runName = st.mode === 1 ? "Wall check" : "Panel run";
  $("runStatus").textContent = b
    ? `${runName} active. Press Escape or Stop and reset to stop.`
    : st.phase === "done" ? `${runName} complete. Results appear below.` : "";
  for (const el of document.querySelectorAll("#presets input, #speed, #speedNumber, #snap, #skin")) el.disabled = b;
  if (focusStop) $("stop").focus({ preventScroll: true });
  if (focusFire) $("fire").focus({ preventScroll: true });
}

function clearWallChart() {
  const chart = $("wallChart");
  assert(chart !== null, "the wall chart exists");
  assert(typeof chartResize.unobserve === "function", "the observer can let go");
  chartResize.unobserve(chart);
  chartData.delete(chart);
  chart.getContext("2d").clearRect(0, 0, chart.width, chart.height);
}

function stopRun() {
  if (st.phase !== "approach" && st.phase !== "sim" && st.phase !== "wall") return;
  assert(st.mode === 0 || st.mode === 1, "a mode is the panel or the wall");
  assert($("runStatus") !== null, "the status line exists");
  if (st.mode === 1) {
    st.wall = null;
    clearWallChart();
    $("wilbeckOut").textContent = "Wall check stopped. No result.";
  }
  st.gif = null;
  st.gifHold = false;
  $("bubble").hidden = true;
  preview();
  setBusy(false);
  $("runStatus").textContent = "Run stopped. Goose reset.";
  $("banner").textContent = "Run stopped. Goose reset. Select a speed or resolution, then press Fire the goose.";
}

// Runs the solver one phase at a time for BUDGET_MS. A frame can end in the
// middle of a step: the code view shows the phase that ran last.
function stepSolver(tEnd, perStep) {
  assert(typeof perStep === "function", "each step is reported");
  assert(Number.isFinite(tEnd) && tEnd > 0, "the end time is positive");
  const t0 = performance.now(), s0 = eng.time();
  let steps = 0, t = t0;
  while (t - t0 < BUDGET_MS) {
    const k = eng.stepPhase(tEnd);
    if (k < 0) break;
    t = performance.now();
    st.solverPhase = k;
    if (k === 4) { steps++; perStep(eng.time(), eng.contactForce(), eng.centerForce()); }
  }
  const ms = t - t0;
  st.msPerStep = steps ? ms / steps : 0;
  st.frameSim = eng.time() - s0;
  assert(ms >= 0, "the frame took time");
  assert(steps >= 0, "steps are counted");
  return eng.time() >= tEnd;
}

// The GPU solver runs whole steps in batches, and two batches can wait for
// their read-back at the same time. So the GPU does the next batch while the
// page reads the last one. Each frame takes the results that are in and
// sends new batches. The batch gets larger when both batches were in (the
// GPU had no work), and smaller when none was in. Returns true when the run
// reached tEnd.
function gpuStep(tEnd, perStep) {
  assert(st.batch !== null, "the set-up made a batch");
  assert(typeof perStep === "function", "each step is reported");
  const b = st.batch, s0 = eng.time();
  let got = 0, steps = 0, r;
  while ((r = eng.poll()) === 1) got++;
  if (r < 0) throw new Error("the GPU read-back failed");
  if (got) {
    const h = eng.history();
    steps = h.length / 4 - b.seen;
    for (; b.seen < h.length / 4; b.seen++) perStep(h[4 * b.seen], h[4 * b.seen + 1], h[4 * b.seen + 2]);
    if (steps) { st.msPerStep = st.frameReal / steps; st.frameSim = eng.time() - s0; }
  }
  if (got === 2) b.steps = Math.min(512, Math.ceil(b.steps * 1.5));
  if (got === 0 && eng.pending() === 2) b.steps = Math.max(8, Math.floor(b.steps * 0.8));
  assert(b.steps >= 8 && b.steps <= 512, "a batch has 8 to 512 steps");
  if (!eng.running()) return eng.pending() === 0;
  while (eng.run(b.steps, tEnd));
  return false;
}

function telemetryRows() {
  const tc = eng.tContact();
  const rows = [
    ["sim time", `${fmt(eng.time() * 1e6, 1)} µs`],
    ["since contact", tc >= 0 ? `${fmt((eng.time() - tc) * 1e6, 1)} µs` : "goose airborne"],
    ["time step dt", `${fmt(eng.dt() * 1e9, 1)} ns`],
    ["steps", fmt(eng.steps(), 0)],
    ["slow motion", st.frameSim > 0 ? `1 : ${fmt(st.frameReal / 1000 / st.frameSim, 0)}` : "—"],
    ["solver", `${eng.gpu ? "GPU" : "CPU"}, ${fmt(st.msPerStep, 2)} ms/step`],
    ["frame rate", `${fmt(st.fps, 0)} fps`],
    ["contact force", `${fmt(eng.contactForce() / 1e3, 1)} kN`],
    ["peak force", `${fmt(st.peakF / 1e3, 1)} kN`],
    ["max deflection", `${fmt(eng.maxDeflection() * 1e3, 1)} mm`],
    ["max plastic strain", `${fmt(eng.maxPlasticStrain() * 100, 1)} %`],
    ["fails at (skin / stiffeners)", `${fmt(eng.failStrain(0) * 100, 1)} / ${fmt(eng.failStrain(1) * 100, 1)} %`],
    ["eroded skin shells", fmt(eng.failedSkin(), 0)],
    ["eroded stiffener shells", fmt(eng.failed() - eng.failedSkin(), 0)],
    ["bird", `${fmt(eng.np(), 0)} particles, ${fmt(BIRD_MASS, 3)} kg`],
    ["panel", `${fmt(eng.nn(), 0)} nodes, ${fmt(eng.ne(), 0)} shells`],
    ["skin", `${fmt(st.tSkin * 1e3, 1)} mm 2024-T3`],
  ];
  assert(rows.length === 17, "the telemetry has 17 rows");
  assert(rows.every((r) => r.length === 2), "a row has a name and a value");
  return rows;
}

function energyPanel() {
  assert(typeof st.ke0 === "number", "the start energy is a number");
  assert($("ebar") !== null && $("ekey") !== null, "the energy elements exist");
  const parts = [
    ["bird kinetic", eng.birdKE(), "#3f6f86"],
    ["bird squish (internal)", eng.birdWork(), "#94b49c"],
    ["panel kinetic", eng.panelKE(), "#e2b54f"],
    ["panel strain + plastic", eng.panelWork(), "#c4613f"],
  ];
  const sum = parts.reduce((s, p) => {
    assert(p.length === 3, "an energy part has a name, a value and a colour");
    assert(typeof s === "number", "the sum is a number");
    return s + p[1];
  }, 0);
  $("ebar").innerHTML = parts.map(([, v, c]) => {
    assert(typeof v === "number", "an energy is a number");
    assert(c.startsWith("#"), "a colour is hex");
    return `<div style="width:${Math.max(0, v / st.ke0 * 100)}%;background:${c}"></div>`;
  }).join("");
  $("ekey").innerHTML = parts.map(([k, v, c]) => {
    assert(typeof k === "string", "an energy has a name");
    assert(typeof v === "number", "an energy is a number");
    return `<li><span><i style="background:${c}"></i>${k}</span><span>${fmt(v / 1e3, 2)} kJ</span></li>`;
  }).join("")
    + `<li><span>balance error</span><span>${sign((sum / st.ke0 - 1) * 100, 2)} %</span></li>`;
}

function telemetry() {
  assert(typeof st.ke0 === "number", "the start energy is a number");
  assert($("tele") !== null && $("ebar") !== null, "the telemetry elements exist");
  const rows = telemetryRows();
  const tele = $("tele");
  if (!tele.children.length) {
    tele.innerHTML = rows.map(([k]) => {
      assert(typeof k === "string", "a row has a name");
      assert(k.length > 0, "a row name is not empty");
      return `<dt>${k}</dt><dd></dd>`;
    }).join("");
  }
  assert(tele.children.length === 2 * rows.length, "a name and a value for each row");
  rows.forEach(([, v], i) => {
    const cell = tele.children[2 * i + 1];
    assert(cell !== undefined, "the value cell exists");
    assert(typeof v === "string", "a value is text");
    if (cell.textContent !== v) cell.textContent = v;
  });
  $("honkBar").style.transform = `scaleX(${Math.min(1, eng.contactForce() / 3e5)})`;
  energyPanel();
}

function presetsText(key) {
  assert(key === "defl" || key === "skin" || key === "spacing", "a preset column");
  assert(PRESETS.length > 0, "there are presets");
  const out = [];
  for (const p of PRESETS) out.push(key === "skin" ? p.skin : key === "spacing" ? fmt(p.spacing * 1e3, 1) : fmt(p.defl, 1));
  assert(out.length === PRESETS.length, "a value for each preset");
  return out.join(", ");
}

function verdict() {
  const v = $("verdict"), pr = PRESETS[st.preset];
  const skin = eng.failedSkin(), stiff = eng.failed() - skin;
  assert(v !== null, "the verdict element exists");
  assert(pr !== undefined, "the preset exists");
  const breached = skin > 0;
  v.className = "frame panel verdict " + (breached ? "breached" : "held");
  v.hidden = false;
  v.innerHTML = `
    <p class="stamp">${breached ? "Skin breached" : "Skin held"}</p>
    <h2>${breached ? "The goose tore the skin." : "The skin held. The goose did not."}</h2>
    <p>This run: ${pr.name} at ${fmt(st.speed, 2)} m/s (${fmt(st.speed / KT, 1)} kt), ${fmt(pr.spacing * 1e3, 1)} mm bird lattice, ${fmt(st.tSkin * 1e3, 1)} mm skin, on the ${eng.gpu ? "GPU" : "CPU"}.</p>
    <p>Eroded shell elements: ${fmt(skin, 0)} in the 2024-T3 skin, ${fmt(stiff, 0)} in the 7075-T6 stringers and frames.
      An element erodes when its plastic strain reaches the failure strain of its material. Maximum deflection ${fmt(eng.maxDeflection() * 1e3, 1)} mm.
      Peak contact force ${fmt(st.peakF / 1e3, 1)} kN. Maximum plastic strain ${fmt(eng.maxPlasticStrain() * 100, 1)} %.
      The panel took ${fmt(eng.panelWork() / 1e3, 1)} kJ of the goose's ${fmt(st.ke0 / 1e3, 1)} kJ.</p>
    <p>Does this fail 25.571(e)(1)? Not by itself. The rule accepts damage: the aeroplane must complete the flight with it.
      That needs a residual strength analysis of the damaged structure, which this page does not do.
      This is not a certification analysis.</p>
    <p class="hint">Measured at V<sub>C</sub> with the 1.6 mm skin only: maximum deflection ${presetsText("defl")} mm
      and ${presetsText("skin")} eroded skin elements at ${presetsText("spacing")} mm.
      From 9 mm to 4.5 mm, the deflection changes by less than 2 %.${eng.gpu ? " At 3.5 mm, many more skin elements erode, a hole opens in the skin, and the deflection is 50 % larger." : ""}
      The skin erosion does not converge: erosion depends on the element size, so a tear prediction needs a mesh-calibrated failure model.</p>`;
}

// ---------------------------------------------------------------------------
// the rigid wall check

function wallCheck() {
  if (st.phase === "approach" || st.phase === "sim" || st.phase === "wall") return;
  assert(st.phase === "idle" || st.phase === "done", "a run starts from rest");
  assert(st.speed > 0, "the goose flies");
  setupRun(1);
  const v = st.speed;
  const [ph, us] = hugoniot(v);
  st.wall = { ph, us, ps: stagnation(v), tl: eng.birdL() / v, area: Math.PI * eng.sensorR() ** 2, xs: [], ys: [], peak: 0, plat: 0, platN: 0 };
  assert(st.wall.tl > 0 && st.wall.area > 0, "the sensor and the bird have a size");
  st.phase = "wall";
  clearWallChart();
  $("wilbeckOut").textContent = "Wall check active. No result yet.";
  startGif();
  $("verdict").hidden = true;
  $("wallChart").scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "center" });
  setBusy(true);
  honk(0.8);
}

// one step: its end time, contact force and centre sensor force
function wallSample(time, f, fc) {
  assert(st.wall !== null, "the wall check is active");
  assert(typeof time === "number" && typeof f === "number", "a step has a time and a force");
  st.peakF = Math.max(st.peakF, f);
  const w = st.wall, tc = eng.tContact(), t = time - tc;
  if (tc < 0 || t < 0) return;
  const p = fc / w.area;
  w.xs.push(t * 1e6); w.ys.push(p / 1e6);
  if (p > w.peak) w.peak = p;
  if (t > 0.25 * w.tl && t < 0.75 * w.tl) { w.plat += p; w.platN++; }
  if (!st.splatted) { st.splatted = true; splat(); }
  assert(w.xs.length === w.ys.length, "a pressure for each time");
}

function drawWallChart() {
  const w = st.wall;
  assert(w !== null, "the wall check is active");
  assert(w.xs.length === w.ys.length, "a pressure for each time");
  chart($("wallChart"), [{ xs: w.xs, ys: w.ys, color: "#3f6f86" }], {
    xmin: 0, xmax: 1.5 * w.tl * 1e6, ymin: 1, ymax: 1000, log: true,
    xticks: ticks(1.5 * w.tl * 1e6, 6), yticks: [1, 10, 100, 1000],
    xlabel: "time since contact (µs)", ylabel: "centre pressure (MPa, log)",
    hlines: [{ y: w.ph / 1e6, label: `P_H ${fmt(w.ph / 1e6, 1)} MPa`, color: "#a8432a" },
             { y: w.ps / 1e6, label: `P_s ${fmt(w.ps / 1e6, 2)} MPa`, color: "#4f7a4a" }],
  });
  const pm = w.platN ? w.plat / w.platN : 0;
  $("wilbeckOut").textContent =
    `v = ${fmt(st.speed, 2)} m/s, bird lattice ${fmt(PRESETS[st.preset].spacing * 1e3, 1)} mm, ${fmt(eng.np(), 0)} particles, sensor r = ${fmt(eng.sensorR() * 1e3, 2)} mm\n` +
    `Hugoniot  P_H = ${fmt(w.ph / 1e6, 1)} MPa (U_s = ${fmt(w.us, 0)} m/s)   peak    ${fmt(w.peak / 1e6, 1)} MPa   error ${sign((w.peak - w.ph) / w.ph * 100)} %\n` +
    `Stagnation P_s = ${fmt(w.ps / 1e6, 2)} MPa                plateau ${fmt(pm / 1e6, 2)} MPa   error ${w.platN ? sign((pm - w.ps) / w.ps * 100) : "—"} %\n` +
    `impulse / (m v) = ${fmt(eng.impulse() / (BIRD_MASS * st.speed), 4)}   (plateau: mean over 0.25 to 0.75 of L/v = ${fmt(w.tl * 1e6, 0)} µs)`;
}

// ---------------------------------------------------------------------------
// the frame loop

let lastFrame = performance.now();
const solve = eng.gpu ? gpuStep : stepSolver;
function frame(now) {
  assert(typeof now === "number", "the frame has a time");
  assert(typeof lastFrame === "number", "the last frame has a time");
  try {
    drawFrame(now);
  } catch (error) {
    console.error(error);
    stopRun();
    $("banner").textContent = "The solver failed. Run stopped. Reload the page to try again.";
  }
  requestAnimationFrame(frame);
}

function recordSample(t, f) {
  assert(typeof t === "number", "a sample has a time");
  assert(typeof f === "number", "a sample has a force");
  st.peakF = Math.max(st.peakF, f);
  st.hist.push({ t, f });
}

function contactBurst() {
  const b = $("bubble");
  assert(b !== null, "the bubble exists");
  assert(st.splatted, "the burst follows the splat");
  b.hidden = false; b.classList.remove("out"); b.style.animation = "none"; void b.offsetWidth; b.style.animation = "";
  setTimeout(() => {
    assert(b.isConnected, "the bubble is on the page");
    assert(typeof b.classList.add === "function", "the bubble has classes");
    b.classList.add("out");
  }, 700);
  setTimeout(() => {
    assert(b.isConnected, "the bubble is on the page");
    assert(typeof b.hidden === "boolean", "the bubble can hide");
    b.hidden = true;
  }, 860);
}

function drawFrame(now) {
  assert(typeof now === "number", "the frame has a time");
  assert(typeof st.phase === "string", "the phase is a name");
  st.frameReal = now - lastFrame;
  st.fps += 0.05 * (1000 / Math.max(st.frameReal, 1) - st.fps);
  lastFrame = now;
  let offsetZ = 0, flap = 0;
  const banner = $("banner");
  let bannerText;
  if (st.phase === "approach") {
    const s = Math.min(1, (now - st.t0) / 1000 / APPROACH_S);
    offsetZ = APPROACH_M * (1 - s);
    flap = reducedMotion.matches ? 0 : Math.sin(now / 70);
    bannerText = `APPROACH: cartoon, not simulated (the real ${fmt(APPROACH_M, 1)} m takes ${fmt(APPROACH_M / st.speed * 1e3, 1)} ms at ${fmt(st.speed, 1)} m/s)`;
    if (s >= 1) st.phase = "sim";
  } else if (st.phase === "sim") {
    const done = solve(T_END, recordSample);
    readState();
    if (eng.tContact() >= 0 && !st.splatted) {
      st.splatted = true;
      splat(); honk(1.35); honk(1.5, 0.18);
      contactBurst();
    }
    bannerText = `SIMULATING ${eng.gpu ? "on the GPU (WebGPU)" : "in Goose → WebAssembly"} · t = ${fmt(eng.time() * 1e6, 0)} µs of ${fmt(T_END * 1e6, 0)} µs · goose is now a fluid`;
    telemetry();
    drawForceChart();
    if (done) {
      st.phase = "done"; st.solverPhase = -1; st.gifHold = true; setBusy(false); verdict(); honk(0.7, 0.1);
    }
  } else if (st.phase === "wall") {
    const done = solve(1.5 * st.wall.tl, wallSample);
    readState();
    telemetry();
    bannerText = `CONTROL EXPERIMENT: goose vs. rigid wall · ${fmt(eng.time() * 1e6, 0)} µs · colour = pressure`;
    drawWallChart();
    if (done) { st.phase = "done"; st.solverPhase = -1; st.gifHold = true; setBusy(false); }
  } else if (st.phase === "done") {
    bannerText = "Done. Drag to orbit. Scroll to zoom. Fire again for another goose.";
  }
  if (bannerText !== undefined && banner.textContent !== bannerText) banner.textContent = bannerText;
  if (st.nodes) render(offsetZ, flap);
  captureGif(now);
  codeView(now);
}

function legend() {
  assert($("legend") !== null, "the legend exists");
  assert(st.mode === 0 || st.mode === 1, "a mode is the panel or the wall");
  const showP = !st.costume || st.mode === 1;
  $("legend").innerHTML =
    (showP ? `bird pressure (log)<div class="ramp" style="background:${cssRamp("pressure")}"></div><span class="ticks"><span>0.1</span><span>6.3</span><span>400 MPa</span></span>` : "") +
    (st.mode === 0 ? `panel plastic strain (square-root scale)<div class="ramp" style="background:${cssRamp("metal")}"></div><span class="ticks">${[0, 1, 2, 3].map((k) => {
      assert(k >= 0 && k <= 3, "a strain tick is one of four");
      assert(EP_MAX > 0, "the strain scale is positive");
      return `<span>${fmt(EP_MAX * 100 * k * k / 9, 0)}${k === 3 ? " %" : ""}</span>`;
    }).join("")}</span>` : "");
}

// ---------------------------------------------------------------------------
// the GIF export: one frame each GIF_SIM_US of simulated time, and about
// ten per second of the cartoon approach

function startGif() {
  assert(W > 0 && H > 0, "the canvas has a size");
  assert(GIF_W > 0, "the GIF has a width");
  const h = Math.round(GIF_W * H / W) & ~1;
  st.gif = { rec: new GifRecorder(GIF_W, h + 28), h, cv: document.createElement("canvas"), next: 0, simNext: 0, speed: st.speed, title: st.mode === 0 ? PRESETS[st.preset].name : "Rigid wall check" };
  st.gif.cv.width = GIF_W; st.gif.cv.height = h + 28;
  st.gifHold = false;
  $("gif").disabled = true;
  $("gif").textContent = "Export GIF";
  assert(st.gif.cv.height === h + 28, "the canvas holds the caption bar");
  assert(!st.gifHold, "a new GIF is not on hold");
}

function captureGif(now) {
  assert(typeof now === "number", "the frame has a time");
  assert(GIF_SIM_US > 0, "the GIF steps in sim time");
  const g = st.gif;
  if (!g || g.done) return;
  let delay;
  if (st.phase === "approach") {
    if (now < g.next) return;
    g.next = now + 100; delay = 10;
  } else if (st.phase === "sim" || st.phase === "wall") {
    const tUs = eng.time() * 1e6;
    if (tUs < g.simNext) return;
    g.simNext = (Math.floor(tUs / GIF_SIM_US) + 1) * GIF_SIM_US; delay = 4;
  } else if (st.gifHold) {
    g.done = true; delay = 300;     // the last frame stays 3 s
  } else return;
  assert(delay === 10 || delay === 4 || delay === 300, "a frame has a known delay");
  assert(canvas.width > 0 && canvas.height > 0, "the view has pixels");
  const c = g.cv.getContext("2d");
  const css = getComputedStyle(document.body);
  c.fillStyle = css.getPropertyValue("--stage");
  c.fillRect(0, 0, GIF_W, g.h);
  const scale = Math.min(GIF_W / canvas.width, g.h / canvas.height);
  const w = canvas.width * scale, h = canvas.height * scale;
  c.drawImage(canvas, (GIF_W - w) / 2, (g.h - h) / 2, w, h);
  // the caption: what it is, the time, and the colour bar with its numbers
  c.fillStyle = css.getPropertyValue("--bg");
  c.fillRect(0, g.h, GIF_W, 28);
  c.fillStyle = css.getPropertyValue("--ink");
  c.font = `12px ${css.getPropertyValue("--sans")}`;
  c.textBaseline = "middle";
  const y = g.h + 14;
  const t = st.phase === "approach" ? "approach (cartoon)" : `t = ${fmt(eng.time() * 1e6, 0)} µs`;
  c.fillText(`${g.title} · ${t}`, 8, y);
  const pressure = !st.costume || st.mode === 1, name = pressure ? "pressure" : "metal";
  const x0 = GIF_W - 220;
  for (let k = 0; k < 90; k++) { c.fillStyle = mapColour(name, k / 89); c.fillRect(x0 + k, y - 5, 1, 10); }
  c.fillStyle = css.getPropertyValue("--ink");
  c.textAlign = "right"; c.fillText(pressure ? "0.1" : "0", x0 - 4, y);
  c.textAlign = "left"; c.fillText(pressure ? "400 MPa, log" : `${fmt(EP_MAX * 100, 0)} % plastic, √`, x0 + 94, y);
  c.textAlign = "left";
  g.rec.add(c.getImageData(0, 0, GIF_W, g.h + 28), delay);
}

async function exportGif() {
  const g = st.gif;
  if (!g || !g.rec.frames.length) return;
  assert(typeof URL.createObjectURL === "function", "the page can make a file URL");
  const b = $("gif");
  assert(b !== null, "the export button exists");
  b.disabled = true; b.textContent = "Making the GIF…";
  await new Promise((r) => {
    assert(typeof r === "function", "a promise resolves");
    assert(b.disabled, "the button is off while the GIF is made");
    setTimeout(r, 30);
  });      // let the button text show
  try {
    const bytes = g.rec.encode();
    const url = URL.createObjectURL(new Blob([bytes], { type: "image/gif" }));
    setTimeout(() => {
      assert(typeof url === "string", "a file URL is text");
      assert(url.startsWith("blob:"), "a file URL is a blob");
      URL.revokeObjectURL(url);
    }, 10000);
    const a = document.createElement("a");
    a.href = url;
    a.download = `goosestrike-${g.title.toLowerCase().replace(/ /g, "-")}-${g.speed.toFixed(2)}mps.gif`;
    a.click();
    if (st.gif === g) {
      b.textContent = `Export GIF (${fmt(bytes.length / 1e6, 1)} MB)`;
      b.disabled = false;
    }
  } catch {
    if (st.gif === g) {
      b.textContent = "GIF export failed. Retry";
      b.disabled = false;
    }
  }
}

// ---------------------------------------------------------------------------
// the code view: sim/strike.goose, with the phase of the step that ran last.
// The phase comes from the solver (step_phase), not from a clock.

function phaseList() {
  const list = [
    { name: "time step", fns: ["stable_dt", "shell_dt"] },
    { name: "SPH bird", fns: ["sph_forces", "bin_particles"] },
    { name: "shells, plasticity, erosion", fns: ["shell_forces", "shell_element", "plane_stress_return"] },
    { name: "contact", fns: ["contact", "bin_elements", "closest_tri"] },
    { name: "integration", fns: ["integrate", "tait"] },
  ];
  assert(list.length === 5, "a step has five phases");
  assert(list.every((ph) => Array.isArray(ph.fns) && ph.fns.length > 0), "a phase names its functions");
  return list;
}

const PHASES = phaseList();
const code = { lines: null, step: null, ranges: [], shown: -2, last: 0, scrolled: 0, scrolledK: -1, chips: [] };

// a function: from its comment lines to the first "}" at the start of a line
function fnRange(lines, name) {
  assert(Array.isArray(lines), "the source is a list of lines");
  assert(typeof name === "string" && name.length > 0, "a function has a name");
  const re = new RegExp(`^(export )?fn ${name}\\(`);
  let a = -1;
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i])) { a = i; break; }
  }
  if (a < 0) return null;
  let b = a;
  while (b < lines.length && lines[b] !== "}") b++;
  while (a > 0 && lines[a - 1].startsWith("//")) a--;
  assert(a <= b, "a function ends after it starts");
  return [a, b];
}

// the branch of run_phase (lines r0 to r1) for phase k: [first, last]
function phaseRange(lines, r0, r1, k) {
  assert(r0 < r1, "run_phase has lines");
  assert(Number.isInteger(k) && k >= 0 && k < PHASES.length, "a phase is one of five");
  let a = -1;
  for (let i = r0 + 1; i < r1; i++) {
    const l = lines[i];
    if (l.includes(`k == ${k} {`) || (k === 4 && l.trim() === "} else {")) { a = i; break; }
  }
  let b = a + 1;
  while (b < r1 && !lines[b].trim().startsWith("}")) b++;
  return [a, b - 1];
}

function escapeHtml(t) {
  assert(typeof t === "string", "escaped text is a string");
  assert(t.length < 1e6, "a line is short");
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function codeLine(lines, i) {
  assert(Number.isInteger(i) && i >= 0, "a line is a whole number");
  assert(i < lines.length, "the line exists");
  const kw = /\b(fn|let|var|if|else|for|in|while|return|export|import|continue)\b/g;
  const l = lines[i], c = l.indexOf("//");
  const body = c < 0 ? l : l.slice(0, c), note = c < 0 ? "" : l.slice(c);
  return `<span class="ln" data-n="${i + 1}">${escapeHtml(body).replace(kw, "<b>$1</b>")}${note ? `<i>${escapeHtml(note)}</i>` : ""}\n</span>`;
}

function codeRows(lines, from, to) {
  assert(from >= 0 && to < lines.length, "the rows are inside the source");
  assert(from <= to, "the rows are in order");
  let out = "";
  for (let i = from; i <= to; i++) out += codeLine(lines, i);
  return out;
}

function phaseChips() {
  let out = "";
  for (let k = 0; k < PHASES.length; k++) {
    out += `<li><button class="button" data-k="${k}"><span>${k}</span> ${PHASES[k].name}</button></li>`;
  }
  assert(out.length > 0, "there are chips");
  return out;
}

async function loadCode() {
  const src = await (await fetch("strike.goose")).text();
  const lines = src.replace(/\n$/, "").split("\n");
  assert(lines.length > 1, "the source has lines");
  const [r0, r1] = fnRange(lines, "run_phase");
  code.ranges = [];
  for (let k = 0; k < PHASES.length; k++) {
    const fns = [];
    for (const name of PHASES[k].fns) {
      const range = fnRange(lines, name);
      if (range) fns.push(range);
    }
    code.ranges.push([phaseRange(lines, r0, r1, k), ...fns]);
  }
  // the step pane: run_phase, which calls one phase; the source pane: all of it
  $("step").innerHTML = codeRows(lines, r0, r1);
  $("code").innerHTML = codeRows(lines, 0, lines.length - 1);
  code.step = { first: r0, lines: $("step").children };
  code.lines = $("code").children;
  $("phases").innerHTML = phaseChips();
  code.chips = [...$("phases").querySelectorAll("button")];
  for (const b of code.chips) {
    b.onclick = () => {
      assert(b.dataset.k !== undefined, "a chip names its phase");
      assert(code.lines !== null, "the source is loaded");
      scrollCode(+b.dataset.k);
    };
  }
  assert(code.ranges.length === PHASES.length, "a range for each phase");
}

// scrolls the source pane to the first function of phase k
function scrollCode(k) {
  assert(Number.isInteger(k) && k >= 0 && k < PHASES.length, "a phase is one of five");
  assert(code.lines !== null, "the source is loaded");
  const el = code.lines[code.ranges[k][1]?.[0] ?? code.ranges[k][0][0]];
  $("code").scrollTo({ top: el.offsetTop - $("code").offsetTop - 8, behavior: reducedMotion.matches ? "instant" : "smooth" });
}

function codeView(now) {
  assert(typeof now === "number", "the frame has a time");
  assert(code.chips.length <= PHASES.length, "a chip for at most each phase");
  if (!code.lines || now - code.last < 120) return;   // a readable rate
  code.last = now;
  const running = st.phase === "sim" || st.phase === "wall";
  const k = running ? st.solverPhase : -1;
  // the source pane moves at most once a second, so that the eye can follow
  const sourceFocused = document.activeElement === $("code") || document.activeElement === $("step") || code.chips.includes(document.activeElement);
  if (!sourceFocused && k >= 0 && k !== code.scrolledK && now - code.scrolled > 1000) {
    scrollCode(k); code.scrolled = now; code.scrolledK = k;
  }
  const state = k >= 0 ? `Phase ${k} (${PHASES[k].name}) ran last.`
    : running && eng.gpu ? "On the GPU, the kernels of web/strike.wgsl do all five phases of each step. No line is lit." : "The solver is idle.";
  if ($("codeState").textContent !== state) $("codeState").textContent = state;
  if (k === code.shown) return;
  assert(code.ranges.length === PHASES.length, "a range for each phase");
  code.chips.forEach((b, i) => {
    assert(i < PHASES.length, "a chip belongs to a phase");
    assert(b.dataset.k === String(i), "a chip names its phase");
    b.dataset.active = String(i === k);
  });
  for (const l of $("code").querySelectorAll(".on")) l.classList.remove("on");
  for (const l of $("step").querySelectorAll(".on")) l.classList.remove("on");
  if (k >= 0) {
    for (const [a, b] of code.ranges[k]) for (let i = a; i <= b; i++) code.lines[i].classList.add("on");
    const [a, b] = code.ranges[k][0];
    for (let i = a; i <= b; i++) code.step.lines[i - code.step.first].classList.add("on");
  }
  code.shown = k;
}

// ---------------------------------------------------------------------------
// controls

function showSpeed() {
  assert(Number.isFinite(st.speed) && st.speed > 0, "the speed is positive");
  assert($("speedNumber") !== null && $("speedOut") !== null, "the speed elements exist");
  const v = st.speed;
  $("speedNumber").value = v.toFixed(2);
  $("speedEntryStatus").textContent = "";
  $("speedOut").textContent = `${fmt(v, 2)} m/s = ${fmt(v / KT, 1)} kt`;
  const on = Math.abs(v - V_C) < 0.005;
  const sc = $("specCheck");
  sc.className = "hint " + (on ? "ok" : "off");
  sc.innerHTML = on
    ? "On spec: 4 lb at V<sub>C</sub> = 350 KCAS, sea level. 14 CFR 25.571(e)(1)."
    : `Off spec: the rule asks for V<sub>C</sub> = ${fmt(V_C, 2)} m/s. <button type="button" id="snap" class="snap">Snap to V<sub>C</sub></button>. Science continues anyway.`;
  const snap = $("snap");
  if (snap) snap.onclick = () => {
    assert(snap.isConnected, "the snap button is on the page");
    assert(typeof st.speed === "number", "the speed is a number");
    const focusSpeed = document.activeElement === snap;
    st.speed = V_C; $("speed").value = V_C; showSpeed();
    if (focusSpeed) $("speedNumber").focus({ preventScroll: true });
    if (st.phase === "idle") preview();
  };
}

function buildPresets() {
  assert(PRESETS.length > 0, "there are presets");
  assert(st.preset >= 0 && st.preset < PRESETS.length, "the preset is in the list");
  $("presets").innerHTML = PRESETS.map((p, i) => {
    assert(typeof p.name === "string", "a preset has a name");
    assert(i >= 0 && i < PRESETS.length, "a preset has an index");
    return `
    <label class="preset"><input type="radio" name="preset" value="${i}" ${i === st.preset ? "checked" : ""}>
      <b>${p.name}</b> · ${fmt(p.spacing * 1e3, 1)} mm bird, ${p.cells} skin cells
      <small>wall check at V<sub>C</sub> only: peak ${sign(p.peak)} %, plateau ${sign(p.plateau)} % · solver about ${eng.gpu ? p.gpuRun : p.run}</small></label>`;
  }).join("");
  for (const el of document.querySelectorAll("#presets input")) {
    el.onchange = () => {
      assert(Number.isInteger(+el.value), "a preset value is a number");
      assert(+el.value >= 0 && +el.value < PRESETS.length, "the preset is in the list");
      st.preset = +el.value; preview();
    };
  }
}

function preview() {
  assert(PRESETS[st.preset] !== undefined, "the preset exists");
  assert($("banner") !== null, "the banner exists");
  setupRun(0);
  st.phase = "idle";
  $("runStatus").textContent = "";
  $("verdict").hidden = true;
  $("banner").textContent = "Goose loaded. Goose is unaware. Press Fire the goose.";
}

function bindSpeed() {
  assert($("speed") !== null && $("speedNumber") !== null, "the speed controls exist");
  assert(V_C > 0, "the cruise speed is positive");
  $("speed").value = V_C;
  for (const attr of ["min", "max", "step"]) $("speedNumber")[attr] = $("speed")[attr];
  $("speedNumber").onchange = (e) => {
    const input = e.target;
    assert(input === $("speedNumber"), "the number box changed");
    assert(typeof input.checkValidity === "function", "an input can check itself");
    if (!input.checkValidity()) {
      input.value = st.speed.toFixed(2);
      $("speedEntryStatus").textContent = `Enter a speed from ${input.min} to ${input.max} m/s in steps of ${input.step} m/s. The control kept the previous speed.`;
      return;
    }
    st.speed = input.valueAsNumber;
    $("speed").value = st.speed;
    showSpeed();
    if (st.phase === "idle") preview();
  };
  $("speed").oninput = (e) => {
    assert(e.target === $("speed"), "the slider changed");
    assert(Number.isFinite(+e.target.value), "the slider has a number");
    st.speed = +e.target.value; showSpeed();
  };
  // Update the idle preview on release, so a drag does not repeat solver setup.
  $("speed").onchange = () => {
    assert(typeof st.phase === "string", "the phase is a name");
    assert($("speed") !== null, "the slider exists");
    if (st.phase === "idle") preview();
  };
}

function showSkin() {
  assert(st.tSkin > 0, "the skin is thick");
  assert($("skinOut") !== null, "the skin output exists");
  const t = st.tSkin * 1e3;
  $("skinOut").textContent = `${fmt(t, 1)} mm = ${fmt(t / 25.4, 3)} in`;
}
function bindSkin() {
  assert($("skin") !== null, "the skin slider exists");
  assert(T_SKIN > 0, "the default skin is thick");
  $("skin").value = T_SKIN * 1e3;
  $("skin").oninput = (e) => {
    assert(e.target === $("skin"), "the skin slider changed");
    assert(e.target.value / 1e3 > 0, "the skin is thick");
    st.tSkin = e.target.value / 1e3; showSkin();
  };
  $("skin").onchange = () => {
    assert(typeof st.phase === "string", "the phase is a name");
    assert($("skin") !== null, "the skin slider exists");
    if (st.phase === "idle") preview();
  };
}

function bindRunButtons() {
  assert($("fire") !== null && $("stop") !== null, "the run buttons exist");
  assert($("wilbeck") !== null && $("gif") !== null, "the check buttons exist");
  $("fire").onclick = fire;
  $("stop").onclick = stopRun;
  document.addEventListener("keydown", (e) => {
  assert(typeof e.key === "string", "a key event has a key");
  assert($("stop") !== null, "the stop button exists");
  if (e.key !== "Escape" || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || $("stop").disabled) return;
  e.preventDefault();
  stopRun();
  });
  $("wilbeck").onclick = wallCheck;
  $("gif").onclick = exportGif;
}

// aria-pressed for assistive technology, data-active for the selected look of .button
function setPressed(b, on) { b.setAttribute("aria-pressed", String(on)); b.dataset.active = String(on); }
function toggleMute() {
  assert(typeof st.muted === "boolean", "muted is a flag");
  st.muted = !st.muted;
  try { localStorage.setItem("goosestrike-muted", st.muted ? "1" : "0"); } catch { /* no storage */ }
  showMute();
  assert(typeof st.muted === "boolean", "muted stays a flag");
}

function showMute() {
  assert(typeof st.muted === "boolean", "muted is a flag");
  assert($("mute") !== null, "the mute button exists");
  setPressed($("mute"), st.muted);
  $("mute").textContent = st.muted ? "🔇 Honks off" : "🔊 Honks on";
}
function toggleCostume() {
  assert(typeof st.costume === "boolean", "costume is a flag");
  st.costume = !st.costume;
  setPressed($("btnCostume"), st.costume);
  legend();
  assert(typeof st.costume === "boolean", "costume stays a flag");
}

function togglePov() {
  assert(typeof st.pov === "boolean", "pov is a flag");
  drag = null; st.pov = !st.pov; setPressed($("btnPov"), st.pov); showZoom();
  assert(typeof st.pov === "boolean", "pov stays a flag");
}

function bindViewButtons() {
  assert($("mute") !== null && $("btnCostume") !== null, "the view buttons exist");
  assert($("btnPov") !== null && $("btnReset") !== null, "the camera buttons exist");
  $("mute").onclick = toggleMute;
  $("btnCostume").onclick = toggleCostume;
  $("btnPov").onclick = togglePov;
  $("btnReset").onclick = resetCamera;
  $("btnZoomIn").onclick = () => {
    assert(st.dist > 0, "the camera is away from the target");
    zoom(1 / 1.2);
  };
  $("btnZoomOut").onclick = () => {
    assert(st.dist > 0, "the camera is away from the target");
    zoom(1.2);
  };
}

function resetCamera() {
  drag = null;
  st.yaw = 1.0; st.pitch = 0.25; st.dist = 1.3; st.pov = false;
  setPressed($("btnPov"), false);
  showZoom();
}
function showZoom() {
  assert(st.dist >= 0.4 && st.dist <= 5, "the camera distance is in range");
  assert(typeof st.pov === "boolean", "pov is a flag");
  const focused = document.activeElement;
  const zoomIn = $("btnZoomIn"), zoomOut = $("btnZoomOut");
  canvas.style.touchAction = st.pov ? "pan-y pinch-zoom" : "pinch-zoom";
  zoomIn.disabled = st.pov || st.dist <= 0.4;
  zoomOut.disabled = st.pov || st.dist >= 5;
  if ((focused === zoomIn || focused === zoomOut) && focused.disabled) {
    canvas.focus({ preventScroll: true });
  }
}

function zoom(factor) {
  assert(factor > 0, "a zoom factor is positive");
  assert(typeof st.pov === "boolean", "pov is a flag");
  if (st.pov) return;
  st.dist = Math.max(0.4, Math.min(5, st.dist * factor));
  showZoom();
}

function rotate(dx, dy) {
  assert(Number.isFinite(dx) && Number.isFinite(dy), "a turn is a pair of numbers");
  assert(typeof st.pov === "boolean", "pov is a flag");
  if (st.pov) return;
  st.yaw += dx;
  st.pitch = Math.max(-1.45, Math.min(1.45, st.pitch + dy));
}

function onCanvasKey(e) {
  assert(typeof e.key === "string", "a key event has a key");
  assert(e.target === canvas, "the canvas has the focus");
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  if (e.key === "Home") {
    e.preventDefault();
    resetCamera();
    return;
  }
  if (st.pov) return;
  if (e.key === "+" || e.key === "-") {
    e.preventDefault();
    zoom(e.key === "+" ? 1 / 1.2 : 1.2);
    return;
  }
  const turns = { ArrowLeft: [-0.1, 0], ArrowRight: [0.1, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] };
  const turn = turns[e.key];
  if (!turn) return;
  e.preventDefault();
  rotate(...turn);
}

function onCanvasDown(e) {
  assert(typeof e.pointerId === "number", "a pointer event has a pointer");
  assert(e.target === canvas, "the canvas got the pointer");
  if (e.button !== 0 || drag || st.pov) return;
  drag = { pointerId: e.pointerId, x: e.clientX, y: e.clientY };
  canvas.setPointerCapture(e.pointerId);
}

function onCanvasMove(e) {
  assert(typeof e.pointerId === "number", "a pointer event has a pointer");
  assert(typeof e.clientX === "number", "a pointer event has a position");
  if (!drag || drag.pointerId !== e.pointerId || st.pov) return;
  rotate((e.clientX - drag.x) * 0.008, (e.clientY - drag.y) * 0.008);
  drag.x = e.clientX; drag.y = e.clientY;
}

function onCanvasWheel(e) {
  assert(typeof e.deltaY === "number", "a wheel event has a delta");
  assert(e.deltaMode >= 0 && e.deltaMode <= 2, "a wheel unit is a pixel, a line or a page");
  if (st.pov || e.ctrlKey || e.metaKey) return;
  e.preventDefault();
  // Camera scale: 16 CSS pixels per wheel line, one view height per page.
  const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? canvas.clientHeight : 1;
  zoom(Math.exp(e.deltaY * unit * 0.001));
}

function bindCamera() {
  assert(canvas === $("view"), "the canvas is the view");
  assert(typeof canvas.addEventListener === "function", "the canvas takes listeners");
  window.addEventListener("blur", () => {
    assert(drag === null || typeof drag === "object", "a drag is an object or nothing");
    assert(typeof window.addEventListener === "function", "the window takes listeners");
    drag = null;
  });
  canvas.addEventListener("keydown", onCanvasKey);
  canvas.addEventListener("pointerdown", onCanvasDown);
  canvas.addEventListener("pointermove", onCanvasMove);
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"]) {
    canvas.addEventListener(event, (e) => {
      assert(typeof e.pointerId === "number", "a pointer event has a pointer");
      assert(typeof event === "string", "an event has a name");
      if (drag?.pointerId === e.pointerId) drag = null;
    });
  }
  canvas.addEventListener("wheel", onCanvasWheel, { passive: false });
}

function start() {
  assert(typeof loadCode === "function", "the code view loads");
  assert(typeof frame === "function", "the frame loop exists");
  bindSpeed();
  bindSkin();
  bindRunButtons();
  bindViewButtons();
  bindCamera();
  loadCode().catch(() => {
    $("codeState").textContent = "The source code could not load. The solver can still run. Reload the page to try again.";
  });
  showSpeed();
  showSkin();
  showMute();
  buildPresets();
  resize();
  preview();
  setBusy(false);
  requestAnimationFrame(frame);
}

start();
