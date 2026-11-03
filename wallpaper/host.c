#include <stdint.h>
#include <stdlib.h>
#include "wallpaper.h"

static double colours[18];
static uint8_t *pixels;
static int64_t pixel_bytes;
static int ready;

static void start(void) { if (!ready) { goose_init(0, 0); ready = 1; } }

double *wp_colours(void) { return colours; }

uint8_t *wp_pixels(int64_t w, int64_t h) {
    free(pixels);
    pixel_bytes = w * h * 4;
    pixels = malloc(pixel_bytes);
    return pixels;
}

void wp_draw(int64_t w, int64_t h, int64_t seed, double hue, double chroma) {
    start();
    sl_u8 px = { pixels, pixel_bytes };
    sl_f64 cols = { colours, 18 };
    wp_render(px, w, h, seed, cols, hue, chroma);
}

int64_t wp_colour(double r, double g, double b, double hue, double chroma) {
    start();
    return wp_swatch_rrggbb(r, g, b, hue, chroma);
}
