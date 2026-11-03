import { readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const imports = {
  wasi_snapshot_preview1: { proc_exit() {}, fd_close: () => 0, fd_write: () => 0, fd_seek: () => 0 },
  env: { emscripten_notify_memory_growth() {} },
};
const module = await WebAssembly.instantiate(gunzipSync(readFileSync('public/play/wallpaper/wallpaper.wasm.gz')), imports);
const wasm = module.instance.exports;
wasm._initialize();

const WIDTH = 64;
const HEIGHT = 48;
const COLOURS = [20, 30, 40, 200, 50, 60, 70, 180, 90, 250, 250, 10, 128, 128, 128, 10, 200, 100];

function pixelHash(seed) {
  new Float64Array(wasm.memory.buffer, wasm.wp_colours(), 18).set(COLOURS);
  const start = wasm.wp_pixels(BigInt(WIDTH), BigInt(HEIGHT));
  wasm.wp_draw(BigInt(WIDTH), BigInt(HEIGHT), BigInt(seed), 30, 1.2);
  return createHash('sha256').update(new Uint8Array(wasm.memory.buffer, start, WIDTH * HEIGHT * 4)).digest('hex');
}

assert.equal(pixelHash(12345), 'c89639a32a978cfdd7a43437a971f8c87b4734da181c0a2f70c7ee60de266e80', 'seed 12345 draws the recorded wallpaper');
assert.equal(pixelHash(12345), pixelHash(12345), 'the same seed draws the same wallpaper');
assert.notEqual(pixelHash(12345), pixelHash(12346), 'another seed draws another wallpaper');
assert.equal(wasm.wp_colour(10, 200, 30, 40, 1.1), 54454n, 'the swatch colour after the Oklch turn');
console.log('wallpaper test: ok');
