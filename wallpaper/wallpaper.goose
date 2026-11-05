import std;
import math;

struct Lab { l: f64, a: f64, b: f64 }

let AREAS_CENTRE_XY_SPREAD_XY_ALPHA: f64[25] = [
    0.30, 0.40, 0.42, 0.48, 0.95,
    0.34, 1.08, 0.45, 0.24, 0.90,
    0.66, 0.84, 0.20, 0.23, 0.98,
    1.09, 0.48, 0.21, 0.80, 0.98,
    0.34, 0.43, 0.26, 0.25, 0.50];
let BEND = 0.035;
let GRAIN = 1.1;
let SRGB_FROM_LINEAR_STEPS = 16384;

var SRGB_FROM_LINEAR: f64[16385] = [0.0; 16385];
var rng: u64 = 0;

fn main() {
    assert(SRGB_FROM_LINEAR_STEPS > 0);
    assert(SRGB_FROM_LINEAR.len == SRGB_FROM_LINEAR_STEPS + 1);
    for i in SRGB_FROM_LINEAR_STEPS + 1 {
        let x = i as f64 / SRGB_FROM_LINEAR_STEPS;
        SRGB_FROM_LINEAR[i] = 255.0 * (if x <= 0.0031308 { 12.92 * x } else { 1.055 * pow(x, 1.0 / 2.4) - 0.055 });
    }
}

fn linear_from_srgb_channel(c: f64) -> f64 {
    assert(c >= 0.0 && c <= 255.0);
    let x = c / 255.0;
    let y = if x <= 0.04045 { x / 12.92 } else { pow((x + 0.055) / 1.055, 2.4) };
    assert(y >= 0.0 && y <= 1.0001);
    return y;
}

// Oklab, after Björn Ottosson: https://bottosson.github.io/posts/oklab/
fn oklab_from_srgb(r: f64, g: f64, b: f64) -> Lab {
    assert(r >= 0.0 && r <= 255.0 && g >= 0.0 && g <= 255.0);
    assert(b >= 0.0 && b <= 255.0);
    let lr = linear_from_srgb_channel(r); let lg = linear_from_srgb_channel(g); let lb = linear_from_srgb_channel(b);
    let l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
    let m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
    let s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
    let lab = Lab {
        l: 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
        a: 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
        b: 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s };
    assert(lab.l >= -0.01 && lab.l <= 1.01);
    return lab;
}

fn cbrt(x: f64) -> f64 {
    assert(x == x);
    let y = if x <= 0.0 { 0.0 } else { pow(x, 1.0 / 3.0) };
    assert(y >= 0.0);
    return y;
}

fn srgb_from_linear(x: f64) -> f64 {
    assert(x == x);
    if x <= 0.0 { return 0.0; }
    if x >= 1.0 { return 255.0; }
    let y = SRGB_FROM_LINEAR[(x * SRGB_FROM_LINEAR_STEPS + 0.5) as i64];
    assert(y >= 0.0 && y <= 255.5);
    return y;
}

fn linear_channel_from_oklab(c: Lab, ch: i64) -> f64 {
    assert(ch >= 0 && ch < 3);
    assert(c.l == c.l && c.a == c.a && c.b == c.b);
    let l = c.l + 0.3963377774 * c.a + 0.2158037573 * c.b;
    let m = c.l - 0.1055613458 * c.a - 0.0638541728 * c.b;
    let s = c.l - 0.0894841775 * c.a - 1.2914855480 * c.b;
    let l3 = l * l * l; let m3 = m * m * m; let s3 = s * s * s;
    if ch == 0 { return 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3; }
    if ch == 1 { return -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3; }
    return -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;
}

fn turn_hue_and_scale_chroma(c: Lab, hue: f64, chroma: f64) -> Lab {
    assert(hue == hue);
    assert(chroma >= 0.0);
    let t = hue * PI / 180.0;
    return Lab { l: c.l, a: (c.a * cos(t) - c.b * sin(t)) * chroma, b: (c.a * sin(t) + c.b * cos(t)) * chroma };
}

export fn wp_swatch_rrggbb(r: f64, g: f64, b: f64, hue: f64, chroma: f64) -> i64 {
    assert(hue == hue);
    assert(chroma >= 0.0);
    let c = turn_hue_and_scale_chroma(oklab_from_srgb(r, g, b), hue, chroma);
    var v: i64 = 0;
    for ch in 3 { v = v * 256 + (srgb_from_linear(linear_channel_from_oklab(c, ch)) + 0.5) as i64; }
    assert(v >= 0 && v < 16777216);
    return v;
}

// splitmix64, after Sebastiano Vigna: https://prng.di.unimi.it/splitmix64.c
fn splitmix64_next() -> u64 {
    let before = rng;
    rng += 0x9e3779b97f4a7c15;
    assert(rng != before);
    var z = rng;
    z = (z ^ (z >> 30)) * 0xbf58476d1ce4e5b9;
    z = (z ^ (z >> 27)) * 0x94d049bb133111eb;
    let r = z ^ (z >> 31);
    assert(rng - 0x9e3779b97f4a7c15 == before);
    return r;
}

fn uniform_above_zero_to_one() -> f64 {
    let u = ((splitmix64_next() >> 11) + 1) / 9007199254740992.0;
    assert(u > 0.0);
    assert(u <= 1.0);
    return u;
}

export fn wp_render(rgba_px: u8[:], w: i64, h: i64, seed: i64, srgb_six_ground_first: const f64[:], hue: f64, chroma: f64) {
    assert(w > 0 && h > 0);
    assert(rgba_px.len == w * h * 4);
    assert(srgb_six_ground_first.len == 18);
    assert(seed >= 0);
    var c: Lab[6] = [Lab { l: 0.0, a: 0.0, b: 0.0 }; 6];
    for i in 6 { c[i] = turn_hue_and_scale_chroma(oklab_from_srgb(srgb_six_ground_first[3 * i], srgb_six_ground_first[3 * i + 1], srgb_six_ground_first[3 * i + 2]), hue, chroma); }
    rng = seed as! u64;
    let phase_du = 2.0 * PI * uniform_above_zero_to_one();
    let phase_bend_u = 2.0 * PI * uniform_above_zero_to_one();
    var bend_u: f64[>..] = [];
    for x in w { bend_u.push(BEND * sin(6.0 * ((x + 0.5) / w) + phase_bend_u)); }
    var box_muller_spare = 0.0;
    var have_box_muller_spare = false;
    var o = 0;
    for y in h {
        let fy = (y + 0.5) / h;
        let du = BEND * sin(7.0 * fy + phase_du);
        for x in w {
            let fx = (x + 0.5) / w;
            let u = fx + du;
            let v = fy + bend_u[x];
            var k = c[0];
            for i in 5 {
                let dx = (u - AREAS_CENTRE_XY_SPREAD_XY_ALPHA[5 * i]) / AREAS_CENTRE_XY_SPREAD_XY_ALPHA[5 * i + 2];
                let dy = (v - AREAS_CENTRE_XY_SPREAD_XY_ALPHA[5 * i + 1]) / AREAS_CENTRE_XY_SPREAD_XY_ALPHA[5 * i + 3];
                let a = AREAS_CENTRE_XY_SPREAD_XY_ALPHA[5 * i + 4] * exp(-0.5 * (dx * dx + dy * dy));
                let t = c[i + 1];
                k = Lab { l: k.l + (t.l - k.l) * a, a: k.a + (t.a - k.a) * a, b: k.b + (t.b - k.b) * a };
            }
            var box_muller_normal = box_muller_spare;
            if have_box_muller_spare { have_box_muller_spare = false; } else {
                let r = sqrt(-2.0 * log(uniform_above_zero_to_one()));
                let t = 2.0 * PI * uniform_above_zero_to_one();
                box_muller_normal = r * cos(t);
                box_muller_spare = r * sin(t);
                have_box_muller_spare = true;
            }
            let g = GRAIN * box_muller_normal;
            for ch in 3 { rgba_px[o + ch] = clamp(srgb_from_linear(linear_channel_from_oklab(k, ch)) + g + 0.5, 0.0, 255.0) as u8; }
            rgba_px[o + 3] = 255;
            o += 4;
        }
    }
}
