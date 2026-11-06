#include <stdint.h>
#include <stdlib.h>
#include "wallpaper.h"

static double colours[18];
static uint8_t *pixels;
static int64_t pixel_bytes;
static int ready;

static void start(void) { if (!ready) { goose_init(0, 0); ready = 1; } }

double *wp_colours(void) { return colours; }

static int64_t pixel_size(int64_t w, int64_t h) {
    if (w < 0 || h < 0) abort();
    if (w == 0 || h == 0) return 0;
    if ((uint64_t)w > SIZE_MAX / 4 / (uint64_t)h || w > INT64_MAX / 4 / h) abort();
    return w * h * 4;
}

uint8_t *wp_pixels(int64_t w, int64_t h) {
    int64_t size = pixel_size(w, h);
    free(pixels);
    pixel_bytes = size;
    pixels = malloc(pixel_bytes);
    if (pixel_bytes > 0 && !pixels) abort();
    return pixels;
}

void wp_draw(int64_t w, int64_t h, int64_t seed, double hue, double chroma) {
    if (pixel_size(w, h) != pixel_bytes || (pixel_bytes > 0 && !pixels)) abort();
    start();
    sl_u8 px = { pixels, pixel_bytes };
    sl_f64 cols = { colours, 18 };
    wp_render(px, w, h, seed, cols, hue, chroma);
}

int64_t wp_colour(double r, double g, double b, double hue, double chroma) {
    start();
    return wp_swatch_rrggbb(r, g, b, hue, chroma);
}
