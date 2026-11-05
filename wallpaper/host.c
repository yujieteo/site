#include <assert.h>
#include <stdint.h>
#include <stdlib.h>
#include "wallpaper.h"

#define WP_MAX_SIDE 16384

static double colours[18];
static uint8_t *pixels;
static int64_t pixel_bytes;
static int ready;

static void start(void) {
    assert(ready == 0 || ready == 1);
    if (!ready) { goose_init(0, 0); ready = 1; }
    assert(ready == 1);
}

double *wp_colours(void) {
    assert(sizeof colours == 18 * sizeof colours[0]);
    assert(ready == 0 || ready == 1);
    return colours;
}

uint8_t *wp_pixels(int64_t w, int64_t h) {
    assert(w > 0 && w <= WP_MAX_SIDE);
    assert(h > 0 && h <= WP_MAX_SIDE);
    free(pixels);
    pixel_bytes = w * h * 4;
    pixels = malloc(pixel_bytes);
    assert(pixels != 0);
    return pixels;
}

void wp_draw(int64_t w, int64_t h, int64_t seed, double hue, double chroma) {
    assert(pixels != 0);
    assert(w > 0 && h > 0 && w * h * 4 == pixel_bytes);
    assert(seed >= 0);
    start();
    sl_u8 px = { pixels, pixel_bytes };
    sl_f64 cols = { colours, 18 };
    wp_render(px, w, h, seed, cols, hue, chroma);
}

int64_t wp_colour(double r, double g, double b, double hue, double chroma) {
    assert(r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255);
    assert(chroma >= 0);
    start();
    return wp_swatch_rrggbb(r, g, b, hue, chroma);
}
