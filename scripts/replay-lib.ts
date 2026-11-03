import { appendFileSync, mkdirSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { gunzipSync } from "node:zlib";

const REPLAY_CACHE = process.env["REPLAY_CACHE"] ?? join(homedir(), ".cache", "site-replay");
export const INPUTS_FILE = join(REPLAY_CACHE, "inputs.jsonl");

export const WALLPAPER_WASM = "public/play/wallpaper/wallpaper.wasm.gz";
export const BEAM_WASM = "public/play/beamdiag/beamdiag.wasm.gz";
export const WALLPAPER_COLOUR_COUNT = 18;

export interface WallpaperInput {
  kind: "wallpaper";
  colours: number[];
  width: number;
  height: number;
  seed: number;
  turns: number;
  scale: number;
}

interface BeamInput {
  kind: "beam";
  name: string;
  messages: readonly unknown[];
}

export type ReplayInput = WallpaperInput | BeamInput;

interface WallpaperExports {
  memory: WebAssembly.Memory;
  wp_colours(): number;
  wp_pixels(width: bigint, height: bigint): number;
  wp_draw(width: bigint, height: bigint, seed: bigint, turns: number, scale: number): void;
  wp_colour(a: number, b: number, c: number, d: number, e: number): bigint;
  _initialize(): void;
}

interface BeamExports {
  memory: WebAssembly.Memory;
  alloc(length: number): number;
  handle(pointer: number, length: number): number;
  out_len(): number;
  _initialize(): void;
}

function hasFunctions(exports: WebAssembly.Exports, names: string[]): boolean {
  return exports["memory"] instanceof WebAssembly.Memory && names.every((name) => typeof exports[name] === "function");
}

function isWallpaper(exports: WebAssembly.Exports): exports is WebAssembly.Exports & WallpaperExports {
  return hasFunctions(exports, ["wp_colours", "wp_pixels", "wp_draw", "wp_colour", "_initialize"]);
}

function isBeam(exports: WebAssembly.Exports): exports is WebAssembly.Exports & BeamExports {
  return hasFunctions(exports, ["alloc", "handle", "out_len", "_initialize"]);
}

async function instantiate(path: string): Promise<WebAssembly.Exports> {
  const imports: WebAssembly.Imports = {
    wasi_snapshot_preview1: { proc_exit() {}, fd_close: () => 0, fd_write: () => 0, fd_seek: () => 0 },
    env: { emscripten_notify_memory_growth() {} },
  };
  const { instance } = await WebAssembly.instantiate(gunzipSync(readFileSync(path)), imports);
  return instance.exports;
}

export async function loadWallpaper(path: string): Promise<WallpaperExports> {
  const exports = await instantiate(path);
  if (!isWallpaper(exports)) throw new Error(`${path} does not export the wallpaper functions`);
  exports._initialize();
  return exports;
}

export async function drawWallpaper(wasm: WallpaperExports, input: WallpaperInput): Promise<Uint8Array> {
  new Float64Array(wasm.memory.buffer, wasm.wp_colours(), WALLPAPER_COLOUR_COUNT).set(input.colours);
  const start = wasm.wp_pixels(BigInt(input.width), BigInt(input.height));
  wasm.wp_draw(BigInt(input.width), BigInt(input.height), BigInt(input.seed), input.turns, input.scale);
  return new Uint8Array(wasm.memory.buffer, start, input.width * input.height * 4).slice();
}

export async function runBeamSession(path: string, messages: readonly unknown[]): Promise<string[]> {
  const exports = await instantiate(path);
  if (!isBeam(exports)) throw new Error(`${path} does not export the beam functions`);
  exports._initialize();
  const enc = new TextEncoder(), dec = new TextDecoder();
  return messages.map((message) => {
    const bytes = enc.encode(JSON.stringify(message));
    const pointer = exports.alloc(bytes.length);
    new Uint8Array(exports.memory.buffer, pointer, bytes.length).set(bytes);
    const out = exports.handle(pointer, bytes.length);
    return dec.decode(new Uint8Array(exports.memory.buffer, out, exports.out_len()));
  });
}

export function capture(input: ReplayInput): void {
  if (process.env["REPLAY_CAPTURE"] !== "1") return;
  mkdirSync(REPLAY_CACHE, { recursive: true });
  appendFileSync(INPUTS_FILE, `${JSON.stringify(input)}\n`);
}

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseReplayInput(value: unknown): ReplayInput {
  if (!isRecord(value)) throw new Error("captured input is not an object");
  if (value["kind"] === "wallpaper") {
    const { colours, width, height, seed, turns, scale } = value;
    if (Array.isArray(colours) && colours.length === WALLPAPER_COLOUR_COUNT && colours.every((c) => typeof c === "number") &&
      typeof width === "number" && typeof height === "number" && typeof seed === "number" && typeof turns === "number" && typeof scale === "number") {
      return { kind: "wallpaper", colours, width, height, seed, turns, scale };
    }
  }
  if (value["kind"] === "beam") {
    const { name, messages } = value;
    if (typeof name === "string" && Array.isArray(messages) && messages.every(isRecord)) {
      return { kind: "beam", name, messages };
    }
  }
  throw new Error("captured input has the wrong shape");
}
