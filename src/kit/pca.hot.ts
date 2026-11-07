export const DIMS = 8;
export const INFO_L1 = 0;
export const INFO_L2 = 1;
export const INFO_TOTAL = 2;
export const INFO_LOADINGS = 3;
export const INFO_SIZE: number = INFO_LOADINGS + 2 * DIMS;
const ITERATIONS = 300;
const TINY = 1e-12;
export const WORK_SIZE = 89;
const MEAN = 0;
const COV = 8;
const VEC = 72;
const NEXT = 80;
const LAM = 88;

function covariance(work: Float64Array, rows: Float64Array, fit: number, on: Uint8Array): void {
  work.fill(0, MEAN, COV + DIMS * DIMS);
  for (let r = 0; r < fit; r++) for (let j = 0; j < DIMS; j++) work[MEAN + j] = (work[MEAN + j] ?? 0) + (rows[r * DIMS + j] ?? 0);
  for (let j = 0; j < DIMS; j++) work[MEAN + j] = (work[MEAN + j] ?? 0) / fit;
  for (let r = 0; r < fit; r++) {
    for (let a = 0; a < DIMS; a++) {
      if (on[a] !== 1) continue;
      const da = (rows[r * DIMS + a] ?? 0) - (work[MEAN + a] ?? 0);
      for (let b = 0; b < DIMS; b++) if (on[b] === 1) work[COV + a * DIMS + b] = (work[COV + a * DIMS + b] ?? 0) + da * ((rows[r * DIMS + b] ?? 0) - (work[MEAN + b] ?? 0));
    }
  }
  for (let i = 0; i < DIMS * DIMS; i++) work[COV + i] = (work[COV + i] ?? 0) / (fit - 1);
}

function power(work: Float64Array, on: Uint8Array): void {
  for (let j = 0; j < DIMS; j++) work[VEC + j] = on[j] === 1 ? 1 + 0.37 * j : 0;
  work[LAM] = 0;
  for (let it = 0; it < ITERATIONS; it++) {
    work.fill(0, NEXT, NEXT + DIMS);
    let norm = 0;
    for (let a = 0; a < DIMS; a++) for (let b = 0; b < DIMS; b++) work[NEXT + a] = (work[NEXT + a] ?? 0) + (work[COV + a * DIMS + b] ?? 0) * (work[VEC + b] ?? 0);
    for (let a = 0; a < DIMS; a++) norm += (work[NEXT + a] ?? 0) * (work[NEXT + a] ?? 0);
    norm = Math.sqrt(norm);
    if (norm < TINY) {
      work.fill(0, VEC, VEC + DIMS);
      return;
    }
    for (let a = 0; a < DIMS; a++) work[VEC + a] = (work[NEXT + a] ?? 0) / norm;
    work[LAM] = norm;
  }
}

function orient(work: Float64Array): void {
  let big = 0;
  for (let j = 0; j < DIMS; j++) if (Math.abs(work[VEC + j] ?? 0) > Math.abs(work[VEC + big] ?? 0) + TINY) big = j;
  if ((work[VEC + big] ?? 0) < 0) for (let j = 0; j < DIMS; j++) work[VEC + j] = -(work[VEC + j] ?? 0);
}

function deflate(work: Float64Array): void {
  for (let a = 0; a < DIMS; a++) for (let b = 0; b < DIMS; b++) work[COV + a * DIMS + b] = (work[COV + a * DIMS + b] ?? 0) - (work[LAM] ?? 0) * (work[VEC + a] ?? 0) * (work[VEC + b] ?? 0);
}

function store(work: Float64Array, info: Float64Array, which: number): void {
  info[which] = work[LAM] ?? 0;
  for (let j = 0; j < DIMS; j++) info[INFO_LOADINGS + which * DIMS + j] = work[VEC + j] ?? 0;
}

export function fitPca(work: Float64Array, info: Float64Array, proj: Float64Array, rows: Float64Array, count: number, fit: number, on: Uint8Array): void {
  covariance(work, rows, fit, on);
  let total = 0;
  for (let j = 0; j < DIMS; j++) total += work[COV + j * DIMS + j] ?? 0;
  info[INFO_TOTAL] = total;
  power(work, on);
  orient(work);
  store(work, info, 0);
  deflate(work);
  power(work, on);
  orient(work);
  store(work, info, 1);
  for (let r = 0; r < count; r++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < DIMS; j++) {
      const c = on[j] === 1 ? (rows[r * DIMS + j] ?? 0) - (work[MEAN + j] ?? 0) : 0;
      x += c * (info[INFO_LOADINGS + j] ?? 0);
      y += c * (info[INFO_LOADINGS + DIMS + j] ?? 0);
    }
    proj[2 * r] = x;
    proj[2 * r + 1] = y;
  }
}
