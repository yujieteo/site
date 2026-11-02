// The wallpaper: a ground colour and five soft areas, mixed in Oklab, then a weak neutral grain.
// The page gives six sRGB colours (ground first), a hue turn and a chroma scale in Oklch, and a seed.
// The seed sets the two sine phases that bend the areas and the grain.

import std;
import math;

struct Lab { l: f64, a: f64, b: f64 }

// Each area: centre x, centre y, spread x, spread y, alpha. Coordinates are 0 to 1 across the image.
let AREAS: f64[25] = [
    0.30, 0.40, 0.42, 0.48, 0.95,
    0.34, 1.08, 0.45, 0.24, 0.90,
    0.66, 0.84, 0.20, 0.23, 0.98,
    1.09, 0.48, 0.21, 0.80, 0.98,
    0.34, 0.43, 0.26, 0.25, 0.50];
let BEND = 0.035;
let GRAIN = 1.1;
let ENC_N = 16384;

// sRGB encoding of linear light, in 0 to 255, at ENC_N + 1 steps from 0 to 1.
var ENC: f64[16385] = [0.0; 16385];
var rng: u64 = 0;

fn main() {
    for i in ENC_N + 1 {
        let x = i as f64 / ENC_N;
        ENC[i] = 255.0 * (if x <= 0.0031308 { 12.92 * x } else { 1.055 * pow(x, 1.0 / 2.4) - 0.055 });
    }
}

fn linear(c: f64) -> f64 {
    let x = c / 255.0;
    return if x <= 0.04045 { x / 12.92 } else { pow((x + 0.055) / 1.055, 2.4) };
}

// Björn Ottosson's sRGB to Oklab: https://bottosson.github.io/posts/oklab/
fn oklab(r: f64, g: f64, b: f64) -> Lab {
    let lr = linear(r); let lg = linear(g); let lb = linear(b);
    let l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
    let m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
    let s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
    return Lab {
        l: 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
        a: 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
        b: 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s };
}

fn cbrt(x: f64) -> f64 { return if x <= 0.0 { 0.0 } else { pow(x, 1.0 / 3.0) }; }

// One channel of linear light in 0 to 1 to sRGB in 0 to 255.
fn enc(x: f64) -> f64 {
    if x <= 0.0 { return 0.0; }
    if x >= 1.0 { return 255.0; }
    return ENC[(x * ENC_N + 0.5) as i64];
}

// Oklab to the three linear-light channels, through the cube of l, m and s.
fn lms3(c: Lab, ch: i64) -> f64 {
    let l = c.l + 0.3963377774 * c.a + 0.2158037573 * c.b;
    let m = c.l - 0.1055613458 * c.a - 0.0638541728 * c.b;
    let s = c.l - 0.0894841775 * c.a - 1.2914855480 * c.b;
    let l3 = l * l * l; let m3 = m * m * m; let s3 = s * s * s;
    if ch == 0 { return 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3; }
    if ch == 1 { return -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3; }
    return -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;
}

// The colour turned by hue degrees and its chroma multiplied by chroma, in Oklch.
fn shift(c: Lab, hue: f64, chroma: f64) -> Lab {
    let t = hue * PI / 180.0;
    return Lab { l: c.l, a: (c.a * cos(t) - c.b * sin(t)) * chroma, b: (c.a * sin(t) + c.b * cos(t)) * chroma };
}

// The colour (r, g, b) after shift, as 0xRRGGBB, for the colour swatches of the page.
export fn wp_shift(r: f64, g: f64, b: f64, hue: f64, chroma: f64) -> i64 {
    let c = shift(oklab(r, g, b), hue, chroma);
    var v: i64 = 0;
    for ch in 3 { v = v * 256 + (enc(lms3(c, ch)) + 0.5) as i64; }
    return v;
}

// splitmix64: https://prng.di.unimi.it/splitmix64.c
fn next() -> u64 {
    rng += 0x9e3779b97f4a7c15;
    var z = rng;
    z = (z ^ (z >> 30)) * 0xbf58476d1ce4e5b9;
    z = (z ^ (z >> 27)) * 0x94d049bb133111eb;
    return z ^ (z >> 31);
}

// A uniform number in (0, 1].
fn uniform() -> f64 { return ((next() >> 11) + 1) / 9007199254740992.0; }

// Draws the wallpaper into px, w × h RGBA pixels. cols holds 18 numbers: six sRGB colours, ground first.
export fn wp_render(px: u8[:], w: i64, h: i64, seed: i64, cols: const f64[:], hue: f64, chroma: f64) {
    var c: Lab[6] = [Lab { l: 0.0, a: 0.0, b: 0.0 }; 6];
    for i in 6 { c[i] = shift(oklab(cols[3 * i], cols[3 * i + 1], cols[3 * i + 2]), hue, chroma); }
    rng = seed as! u64;
    let p0 = 2.0 * PI * uniform();
    let p1 = 2.0 * PI * uniform();
    var bend_u: f64[>..] = [];
    for x in w { bend_u.push(BEND * sin(6.0 * ((x + 0.5) / w) + p1)); }
    var spare = 0.0;
    var have_spare = false;
    var o = 0;
    for y in h {
        let fy = (y + 0.5) / h;
        let du = BEND * sin(7.0 * fy + p0);
        for x in w {
            let fx = (x + 0.5) / w;
            let u = fx + du;
            let v = fy + bend_u[x];
            var k = c[0];
            for i in 5 {
                let dx = (u - AREAS[5 * i]) / AREAS[5 * i + 2];
                let dy = (v - AREAS[5 * i + 1]) / AREAS[5 * i + 3];
                let a = AREAS[5 * i + 4] * exp(-0.5 * (dx * dx + dy * dy));
                let t = c[i + 1];
                k = Lab { l: k.l + (t.l - k.l) * a, a: k.a + (t.a - k.a) * a, b: k.b + (t.b - k.b) * a };
            }
            // Box-Muller gives two normal numbers: one for this pixel, one for the next.
            var n = spare;
            if have_spare { have_spare = false; } else {
                let r = sqrt(-2.0 * log(uniform()));
                let t = 2.0 * PI * uniform();
                n = r * cos(t);
                spare = r * sin(t);
                have_spare = true;
            }
            let g = GRAIN * n;
            for ch in 3 { px[o + ch] = clamp(enc(lms3(k, ch)) + g + 0.5, 0.0, 255.0) as u8; }
            px[o + 3] = 255;
            o += 4;
        }
    }
}
