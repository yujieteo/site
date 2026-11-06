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

for (const [name, width, height] of [
  ["signed byte-count overflow", 1n << 62n, 4n],
  ["the wasm32 allocation limit", 1n << 30n, 1n],
] as const) {
  test(`wallpaper allocation rejects ${name}`, async () => {
    const instance = await loadWallpaper(WALLPAPER_WASM);
    expect(() => instance.wp_pixels(width, height)).toThrow();
  });
}

test("wallpaper allocation preserves empty images", async () => {
  const instance = await loadWallpaper(WALLPAPER_WASM);
  for (const [width, height] of [[0n, 4n], [4n, 0n]] as const) {
    instance.wp_pixels(width, height);
    expect(() => instance.wp_draw(width, height, 0n, 0, 1)).not.toThrow();
  }
  expect(instance.wp_pixels(2n, 3n)).toBeGreaterThan(0);
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
