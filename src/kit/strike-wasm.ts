const PAGE = 65536;
const HEAP_MAX = 2147483648;
const SEEK_ERROR = 70;
const WORD = 4;
const IOV = 8;
const LEN_BYTES = 8;

export const SETUP_PANEL = 0;

interface Exports extends WebAssembly.Exports {
  f: WebAssembly.Memory;
  g: () => void;
  h: (argc: number, argv: number) => void;
  i: (size: number) => number;
  j: (ptr: number) => void;
  k: (thickness: number) => void;
  l: (mode: number, cells: number, spacing: number, speed: number) => number;
  m: (steps: number, tEnd: number) => number;
  o: () => number;
  p: () => number;
  s: () => number;
  t: () => number;
  u: () => number;
  B: () => number;
  F: () => number;
  I: () => number;
  J: () => number;
  K: () => number;
  L: () => number;
  Q: () => number;
  R: (lenPtr: number) => number;
  S: (lenPtr: number) => number;
}

export interface Strike {
  setSkin: (thickness: number) => void;
  setup: (cells: number, spacing: number, speed: number) => number;
  advance: (steps: number, tEnd: number) => number;
  time: () => number;
  dt: () => number;
  particles: () => number;
  nodes: () => number;
  elements: () => number;
  contactForce: () => number;
  panelWork: () => number;
  failed: () => number;
  failedSkin: () => number;
  maxStrain: () => number;
  maxDeflection: () => number;
  nodePositions: () => Float32Array;
  particlePositions: () => Float32Array;
}

const FUNCTIONS: readonly string[] = ["g", "h", "i", "j", "k", "l", "m", "o", "p", "s", "t", "u", "B", "F", "I", "J", "K", "L", "Q", "R", "S"];

function isExports(x: WebAssembly.Exports): x is Exports {
  if (!(x["f"] instanceof WebAssembly.Memory)) return false;
  for (const name of FUNCTIONS) if (typeof x[name] !== "function") return false;
  return true;
}

function growBy(memory: WebAssembly.Memory, wanted: number): boolean {
  const pages = Math.ceil((wanted - memory.buffer.byteLength) / PAGE);
  if (pages <= 0) return true;
  try {
    memory.grow(pages);
    return true;
  } catch {
    return false;
  }
}

function writeCount(memory: WebAssembly.Memory, iov: number, count: number, out: number): number {
  const view = new DataView(memory.buffer);
  let total = 0;
  for (let i = 0; i < count; i++) total += view.getUint32(iov + i * IOV + WORD, true);
  view.setUint32(out, total, true);
  return 0;
}

function imports(held: { memory: WebAssembly.Memory | null }): WebAssembly.Imports {
  return {
    a: {
      a: (_fd: number, iov: number, count: number, out: number): number => (held.memory ? writeCount(held.memory, iov, count, out) : 0),
      b: (wanted: number): boolean => (held.memory !== null && wanted <= HEAP_MAX && growBy(held.memory, wanted)),
      c: (): number => HEAP_MAX,
      d: (): number => SEEK_ERROR,
      e: (code: number): never => {
        throw new Error(`the solver stopped with code ${code}`);
      },
    },
  };
}

function floatsAt(memory: WebAssembly.Memory, ptr: number, count: number): Float32Array {
  return new Float32Array(memory.buffer.slice(ptr, ptr + count * WORD));
}

function bind(x: Exports): Strike {
  const lenPtr = x.i(LEN_BYTES);
  return {
    setSkin: x.k,
    setup: (cells, spacing, speed) => x.l(SETUP_PANEL, cells, spacing, speed),
    advance: (steps, tEnd) => x.m(steps, tEnd),
    time: x.o,
    dt: x.p,
    particles: x.s,
    nodes: x.t,
    elements: x.u,
    contactForce: x.B,
    panelWork: x.F,
    failed: x.I,
    failedSkin: x.J,
    maxStrain: x.K,
    maxDeflection: x.L,
    nodePositions: () => {
      x.Q();
      return floatsAt(x.f, x.R(lenPtr), 3 * x.t());
    },
    particlePositions: () => {
      x.Q();
      return floatsAt(x.f, x.S(lenPtr), 3 * x.s());
    },
  };
}

export async function loadStrike(bytes: ArrayBuffer): Promise<Strike> {
  const held: { memory: WebAssembly.Memory | null } = { memory: null };
  const made = await WebAssembly.instantiate(bytes, imports(held));
  const x = made.instance.exports;
  if (!isExports(x)) throw new Error("the solver file does not have the expected functions");
  held.memory = x.f;
  x.g();
  x.h(0, 0);
  return bind(x);
}
