// The Goose solver compiled to WebAssembly, with typed views of its buffers.
// loadEngine: the CPU solver (sim/strike.goose). loadGpuEngine: the same
// solver on the GPU (sim/gpu.goose, with the kernels of web/strike.wgsl).
import createModule from "./strike.js";

export const V_C = 350 * 1852 / 3600;  // 350 KCAS at sea level, m/s
export const BIRD_MASS = 4 * 0.45359237; // 4 lb, kg
export const RHO_BIRD = 950.0;         // kg/m^3
export const C0_BIRD = 1480.0;         // m/s
export const GAMMA_TAIT = 7.0;
export const T_SKIN = 0.0016;          // default skin thickness, m

const GETTERS = {
  time: "_get_time", dt: "_get_dt", steps: "_get_steps", tContact: "_get_t_contact",
  np: "_get_np", nn: "_get_nn", ne: "_get_ne", particleMass: "_get_particle_mass",
  spacing: "_get_spacing", smoothing: "_get_smoothing", birdD: "_get_bird_d",
  birdL: "_get_bird_l", birdV: "_get_bird_v", contactForce: "_get_contact_force",
  centerForce: "_get_center_force", sensorR: "_get_sensor_r", impulse: "_get_impulse",
  panelWork: "_get_panel_work", hourglassWork: "_get_hg_work", birdWork: "_get_bird_work",
  failed: "_get_failed", failedSkin: "_get_failed_skin", maxPlasticStrain: "_get_max_ep",
  maxDeflection: "_get_max_defl", birdKE: "_get_bird_ke", panelKE: "_get_panel_ke",
  panelMass: "_get_panel_mass",
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function getter(m, exportName) {
  assert(typeof exportName === "string" && exportName.startsWith("_get_"), "a getter is a get export");
  assert(typeof m[exportName] === "function", `the module exports ${exportName}`);
  return () => m[exportName]();
}

function renderViews(m, bytes) {
  assert(typeof bytes === "function", "the views read buffers");
  assert(typeof m._get_nn === "function", "the module counts nodes");
  return {
    nodes: () => {
      const n = 3 * m._get_nn();
      assert(n >= 0, "a node count is not negative");
      assert(typeof m._buf_nodes === "function", "the module gives nodes");
      return new Float32Array(bytes(m._buf_nodes), 0, n);
    },
    particles: () => {
      const n = 3 * m._get_np();
      assert(n >= 0, "a particle count is not negative");
      assert(typeof m._buf_particles === "function", "the module gives particles");
      return new Float32Array(bytes(m._buf_particles), 0, n);
    },
    pressure: () => {
      const n = m._get_np();
      assert(n >= 0, "a particle count is not negative");
      assert(typeof m._buf_pressure === "function", "the module gives pressures");
      return new Float32Array(bytes(m._buf_pressure), 0, n);
    },
    strain: () => {
      const n = m._get_ne();
      assert(n >= 0, "an element count is not negative");
      assert(typeof m._buf_strain === "function", "the module gives strains");
      return new Float32Array(bytes(m._buf_strain), 0, n);
    },
    elements: () => {
      const n = 4 * m._get_ne();
      assert(n >= 0, "an element count is not negative");
      assert(typeof m._buf_elements === "function", "the module gives elements");
      return new Int32Array(bytes(m._buf_elements), 0, n);
    },
  };
}

// The getters of strike.goose. Both modules have them: on the GPU,
// gpu_poll puts the results in the same globals.
function common(m) {
  assert(typeof m._malloc === "function", "the module can allocate");
  const lenPtr = m._malloc(8);
  assert(lenPtr > 0, "the allocation gave a pointer");

  // A const u8[:] export returns a pointer and writes the byte length.
  // The bytes are copied, since Goose packs its globals without alignment.
  function bytes(fn) {
    assert(typeof fn === "function", "a buffer export is a function");
    const ptr = fn(lenPtr);
    const len = Number(new BigInt64Array(m.HEAPU8.buffer, lenPtr, 1)[0]);
    assert(len >= 0 && ptr >= 0, "a buffer has a pointer and a length");
    return m.HEAPU8.buffer.slice(ptr, ptr + len);
  }

  const out = {
    bytes,
    // the skin thickness of the next set-up, m
    setSkin: (t) => {
      assert(Number.isFinite(t) && t > 0, "a skin thickness is positive");
      assert(typeof m._set_skin === "function", "the module sets the skin");
      return m._set_skin(t);
    },
    failStrain: (mat) => {
      assert(Number.isInteger(mat) && mat >= 0, "a material is a whole number");
      assert(typeof m._get_eps_fail === "function", "the module gives failure strains");
      return m._get_eps_fail(mat);
    },
    // render data, valid after fillRender() (CPU) or poll() (GPU)
    fillRender: () => {
      assert(typeof m._fill_render === "function", "the module fills the render data");
      assert(m._get_nn() >= 0, "there is a node count");
      return m._fill_render();
    },
    ...renderViews(m, bytes),
  };
  for (const name of Object.keys(GETTERS)) out[name] = getter(m, GETTERS[name]);
  return out;
}

export async function loadEngine() {
  const m = await createModule();
  assert(typeof m._goose_init === "function", "the CPU module starts");
  assert(typeof m._setup === "function", "the CPU module sets up");
  m._goose_init(0, 0);
  return {
    ...common(m),
    gpu: false,
    // mode 0: fuselage panel, 1: rigid wall. cells: skin elements along the
    // panel (multiple of 8). spacing: bird particle lattice, m.
    setup: (mode, cells, spacing, speed) => {
      assert(mode === 0 || mode === 1, "a mode is the panel or the wall");
      assert(cells > 0 && spacing > 0 && speed > 0, "sizes and speed are positive");
      return m._setup(mode, cells, spacing, speed);
    },
    advance: (steps, tEnd) => {
      assert(Number.isInteger(steps) && steps >= 0, "steps are a whole number");
      assert(Number.isFinite(tEnd), "the end time is a number");
      return m._advance(steps, tEnd);
    },
    // runs the next phase of the step (see run_phase in strike.goose) and
    // returns its number, or -1 at tEnd
    stepPhase: (tEnd) => {
      assert(Number.isFinite(tEnd), "the end time is a number");
      assert(typeof m._step_phase === "function", "the module steps by phase");
      return m._step_phase(tEnd);
    },
  };
}

async function text(name) {
  assert(typeof name === "string" && name.length > 0, "a file has a name");
  const url = new URL(name, import.meta.url);
  if (url.protocol === "file:") {
    const { readFile } = await import("node:fs/promises");
    return readFile(url, "utf8");
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${name}: ${r.status}`);
  assert(typeof r.text === "function", "a response has text");
  return r.text();
}

async function startKernels(m, device, wgsl, errors) {
  assert(wgsl.length > 0, "the kernels are not empty");
  assert(Array.isArray(errors), "the errors are kept in a list");
  // a const u8[:] argument is a pointer to { data, len }
  const src = m._malloc(wgsl.length), sl = m._malloc(12);
  m.HEAPU8.set(wgsl, src);
  const dv = new DataView(m.HEAPU8.buffer, sl, 12);
  dv.setUint32(0, src, true);
  dv.setBigInt64(4, BigInt(wgsl.length), true);
  device.addEventListener("uncapturederror", (e) => {
    assert(e && e.error, "an error event holds an error");
    assert(Array.isArray(errors), "the errors are kept in a list");
    errors.push(e.error.message);
  });
  // The kernels compile and bind (in a set-up of the smallest run), or
  // loadGpuEngine throws.
  device.pushErrorScope("validation");
  device.pushErrorScope("internal");
  const ok = m._gpu_init(sl) && m._gpu_setup(0, 56, 0.009, V_C);
  m._free(sl); m._free(src);
  const internal = await device.popErrorScope(), validation = await device.popErrorScope();
  const failure = internal || validation;
  if (!ok || failure) throw new Error(`the WebGPU solver did not start${failure ? `: ${failure.message}` : ""}`);
}

function gpuMethods(m, base) {
  assert(typeof m._gpu_run === "function", "the GPU module runs");
  assert(typeof base.bytes === "function", "the base reads buffers");
  return {
    // as setup of the CPU engine
    setup: (mode, cells, spacing, speed) => {
      assert(mode === 0 || mode === 1, "a mode is the panel or the wall");
      assert(cells > 0 && spacing > 0 && speed > 0, "sizes and speed are positive");
      return m._gpu_setup(mode, cells, spacing, speed);
    },
    // sends `steps` steps (at most 512) and a read-back of their results,
    // and returns the steps, or 0 while two runs are not read back. The GPU
    // does no step at or after tEnd (s), the same for each run.
    run: (steps, tEnd) => {
      assert(Number.isInteger(steps) && steps >= 0 && steps <= 512, "a run has at most 512 steps");
      assert(Number.isFinite(tEnd), "the end time is a number");
      return m._gpu_run(steps, tEnd);
    },
    // setup and poll fill the render data
    fillRender: () => {
      assert(typeof m._gpu_poll === "function", "setup and poll fill the render data");
      assert(typeof m._gpu_run === "function", "the module runs");
    },
    // 1 when the results of the oldest run that is not read back are in,
    // 0 while the GPU works (or no run is pending), -1 if the read-back failed
    poll: () => {
      assert(typeof m._gpu_poll === "function", "the module polls");
      const r = m._gpu_poll();
      assert(r === 0 || r === 1 || r === -1, "a poll answers 1, 0 or -1");
      return r;
    },
    // the runs that poll did not read back
    pending: () => {
      assert(typeof m._gpu_pending === "function", "the module counts pending runs");
      const n = m._gpu_pending();
      assert(n >= 0, "pending runs are not negative");
      return n;
    },
    // false when the GPU reached tEnd (the f32 time can end just below it)
    running: () => {
      assert(typeof m._gpu_running === "function", "the module tells if it runs");
      assert(typeof m._gpu_poll === "function", "the module polls");
      return m._gpu_running() !== 0;
    },
    // a Float32Array of 4 per step since the set-up: time, contact force,
    // sensor force, max deflection
    history: () => {
      const n = 4 * Math.min(m._get_steps(), m._gpu_hist_cap());
      assert(n >= 0, "a history length is not negative");
      assert(typeof m._gpu_buf_hist === "function", "the module gives the history");
      return new Float32Array(base.bytes(m._gpu_buf_hist), 0, n);
    },
  };
}

// The GPU solver, or null if this browser has no WebGPU adapter. gpu: the
// GPU object (navigator.gpu in a browser).
export async function loadGpuEngine(gpu = globalThis.navigator?.gpu) {
  const adapter = await gpu?.requestAdapter();
  if (!adapter) return null;
  const device = await adapter.requestDevice();
  assert(device !== null && typeof device === "object", "the adapter gave a device");
  const wgsl = new TextEncoder().encode(await text("strike.wgsl"));
  assert(wgsl.length > 0, "the kernels are not empty");
  const { default: createGpuModule } = await import("./strike-gpu.js");
  const m = await createGpuModule({ preinitializedWebGPUDevice: device });
  assert(typeof m._gpu_init === "function", "the GPU module starts");
  assert(typeof m._gpu_setup === "function", "the GPU module sets up");
  m._goose_init(0, 0);
  const errors = [];
  await startKernels(m, device, wgsl, errors);
  const base = common(m);
  assert(typeof base.bytes === "function", "the base reads buffers");
  return {
    ...base,
    gpu: true,
    // the WebGPU validation errors so far
    errors,
    ...gpuMethods(m, base),
    birdKE: () => {
      assert(typeof m._gpu_bird_ke === "function", "the module gives the bird energy");
      assert(typeof m._gpu_panel_ke === "function", "the module gives the panel energy");
      return m._gpu_bird_ke();
    },
    panelKE: () => {
      assert(typeof m._gpu_panel_ke === "function", "the module gives the panel energy");
      assert(typeof m._gpu_bird_ke === "function", "the module gives the bird energy");
      return m._gpu_panel_ke();
    },
    // Node's webgpu package stops the device when its GPU object is
    // collected, so the engine keeps it.
    gpuObject: gpu,
  };
}

// Pressure behind the shock when the Tait bird hits a rigid wall at v:
// rho0 Us = rho1 (Us - v) and p1 = rho0 Us v = p(rho1). Returns [p, Us].
export function hugoniot(v) {
  assert(Number.isFinite(v) && v > 0, "a speed is positive");
  const b = (RHO_BIRD * C0_BIRD * C0_BIRD) / GAMMA_TAIT;
  let lo = RHO_BIRD * 1.000001;
  let hi = RHO_BIRD * 2.0;
  for (let i = 0; i < 200; i++) {
    const mid = 0.5 * (lo + hi);
    const f = b * (Math.pow(mid / RHO_BIRD, GAMMA_TAIT) - 1) - (RHO_BIRD * v * v * mid) / (mid - RHO_BIRD);
    if (f > 0) hi = mid; else lo = mid;
  }
  const rho1 = 0.5 * (lo + hi);
  const us = (v * rho1) / (rho1 - RHO_BIRD);
  assert(Number.isFinite(us) && us > v, "a shock is faster than the flow");
  return [RHO_BIRD * us * v, us];
}

// Steady-flow stagnation pressure (Wilbeck), Pa.
export function stagnation(v) {
  assert(Number.isFinite(v), "a speed is a number");
  assert(RHO_BIRD > 0, "the bird has a density");
  return 0.5 * RHO_BIRD * v * v;
}
