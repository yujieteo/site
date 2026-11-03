import { createHash } from "node:crypto";
import { expect, test } from "bun:test";
import fc from "fast-check";
import { WALLPAPER_COLOUR_COUNT, WALLPAPER_WASM, type WallpaperInput, capture, drawWallpaper, loadWallpaper } from "../scripts/replay-lib";

const wasm = await loadWallpaper(WALLPAPER_WASM);

const RECORDED_COLOURS = [20, 30, 40, 200, 50, 60, 70, 180, 90, 250, 250, 10, 128, 128, 128, 10, 200, 100];
const RECORDED: WallpaperInput = { kind: "wallpaper", colours: RECORDED_COLOURS, width: 64, height: 48, seed: 12345, turns: 30, scale: 1.2 };

async function pixelHash(input: WallpaperInput): Promise<string> {
  capture(input);
  return createHash("sha256").update(await drawWallpaper(wasm, input)).digest("hex");
}

test("seed 12345 draws the recorded wallpaper", async () => {
  expect(await pixelHash(RECORDED)).toBe("c89639a32a978cfdd7a43437a971f8c87b4734da181c0a2f70c7ee60de266e80");
});

test("the same seed draws the same wallpaper", async () => {
  expect(await pixelHash(RECORDED)).toBe(await pixelHash(RECORDED));
});

test("another seed draws another wallpaper", async () => {
  expect(await pixelHash({ ...RECORDED, seed: 12346 })).not.toBe(await pixelHash(RECORDED));
});

test("the swatch colour after the Oklch turn", () => {
  expect(wasm.wp_colour(10, 200, 30, 40, 1.1)).toBe(54454n);
});

test("any colours, size and seed draw the same wallpaper twice", async () => {
  const colour = fc.integer({ min: 0, max: 255 });
  const input = fc.record({
    kind: fc.constant("wallpaper" as const),
    colours: fc.array(colour, { minLength: WALLPAPER_COLOUR_COUNT, maxLength: WALLPAPER_COLOUR_COUNT }),
    width: fc.integer({ min: 1, max: 40 }),
    height: fc.integer({ min: 1, max: 40 }),
    seed: fc.integer({ min: 0, max: 2 ** 31 - 1 }),
    turns: fc.integer({ min: 0, max: 60 }),
    scale: fc.double({ min: 0.1, max: 3, noNaN: true }),
  });
  await fc.assert(fc.asyncProperty(input, async (value) => (await pixelHash(value)) === (await pixelHash(value))), { numRuns: 40 });
});
