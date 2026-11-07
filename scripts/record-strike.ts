import { writeFileSync } from "node:fs";
import { loadStrike, type Strike } from "../src/kit/strike-wasm.ts";

const CELLS = 56;
const SPACING = 0.009;
const SPEED = 350 * (1852 / 3600);
const T_END = 3e-3;
const FRAME_US = 100;
const STEP_BATCH = 5;
const CURVE_EVERY = 5;
const MM = 1000;
const TENTH = 10;
const SLICE = 0.009;
const KN = 1e-3;
const KEY_X = 1e6;
const KEY_ID = 1e4;

interface Frame {
  us: number;
  profile: number[];
  bird: number[];
}

interface Point {
  us: number;
  deflection: number;
  force: number;
  eroded: number;
}

function centreNodes(first: Float32Array): number[] {
  const keys: number[] = [];
  for (let i = 0; i < first.length / 3; i++) {
    if (Math.abs(first[3 * i + 1] ?? 1) < 1e-6) keys.push(Math.round(((first[3 * i] ?? 0) + 1) * KEY_X) * KEY_ID + i);
  }
  const sorted = Float64Array.from(keys).toSorted();
  const ids: number[] = [];
  for (const key of sorted) ids.push(key % KEY_ID);
  return ids;
}

function slice(s: Strike): number[] {
  const p = s.particlePositions();
  const out: number[] = [];
  for (let i = 0; i < p.length / 3; i++) {
    if ((p[3 * i + 1] ?? 1) >= 0 && (p[3 * i + 1] ?? 1) < SLICE) out.push(Math.round((p[3 * i] ?? 0) * MM), Math.round((p[3 * i + 2] ?? 0) * MM));
  }
  return out;
}

function frameAt(s: Strike, ids: number[], first: Float32Array, frame: number): Frame {
  const now = s.nodePositions();
  const profile: number[] = [];
  for (const i of ids) profile.push(Math.round(((now[3 * i + 2] ?? 0) - (first[3 * i + 2] ?? 0)) * MM * TENTH));
  return { us: frame * FRAME_US, profile, bird: slice(s) };
}

function pointAt(s: Strike): Point {
  return { us: Math.round(s.time() * 1e6), deflection: Math.round(s.maxDeflection() * MM * TENTH), force: Math.round(s.contactForce() * KN), eroded: s.failed() };
}

function record(s: Strike): { frames: Frame[]; curve: Point[] } {
  s.setup(CELLS, SPACING, SPEED);
  const first = s.nodePositions();
  const ids = centreNodes(first);
  const frames: Frame[] = [frameAt(s, ids, first, 0)];
  const curve: Point[] = [pointAt(s)];
  let batches = 0;
  while (s.time() < T_END) {
    s.advance(STEP_BATCH, T_END);
    batches++;
    if (batches % CURVE_EVERY === 0) curve.push(pointAt(s));
    if (s.time() * 1e6 >= frames.length * FRAME_US) frames.push(frameAt(s, ids, first, frames.length));
  }
  return { frames, curve };
}

function column(rows: Point[], key: keyof Point): string {
  return `[${rows.map((r) => r[key]).join(",")}]`;
}

const strike = await loadStrike(await Bun.file("src/kit/strike.wasm").arrayBuffer());
const run = record(strike);
const lines = [
  `export const FRAME_US: readonly number[] = [${run.frames.map((f) => f.us).join(",")}];`,
  `export const PROFILE: readonly (readonly number[])[] = [${run.frames.map((f) => `[${f.profile.join(",")}]`).join(",")}];`,
  `export const BIRD: readonly (readonly number[])[] = [${run.frames.map((f) => `[${f.bird.join(",")}]`).join(",")}];`,
  `export const CURVE_US: readonly number[] = ${column(run.curve, "us")};`,
  `export const CURVE_DEFLECTION: readonly number[] = ${column(run.curve, "deflection")};`,
  `export const CURVE_FORCE: readonly number[] = ${column(run.curve, "force")};`,
  `export const CURVE_ERODED: readonly number[] = ${column(run.curve, "eroded")};`,
];
writeFileSync("src/kit/strike-data.ts", `${lines.join("\n")}\n`);
console.log(run.frames.length, run.curve.length, run.frames[0]?.bird.length, strike.maxDeflection(), strike.failed(), strike.failedSkin());
