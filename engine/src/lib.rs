//! Dot engine, interface v5. Every scene is a pure function of (seed, scene, time,
//! progress, pointer), so pause and replay are exact.
//!
//! Units: the tile is the unit square, y down; time in seconds. Characters may leave it.
//! Dots: 5 f32 each — x, y, radius, colour (0 shadow, 0.5 accent, 1 light), alpha.
//! Faces: 10 f32 each — x, y, radius, tone, gaze x, gaze y, blink (0 open, 1 shut),
//! eye glyph, squash (+ flat, - tall), pulse.
//! Tone 3 + i is character i's colour (the host's `--cast` list).
//! Lights: 4 f32 each — x, y, radius, intensity (0..1). Light 0 is the sun or pin light;
//! the rest are dappled patches, as of sun through leaves, and they light the dots beneath.
//! Progress and pointer are negative when absent. `update` returns dots | faces << 16;
//! `buf(0..3)` points at the dots, faces and lights.

use std::f32::consts::{PI, TAU};

pub const MAX: usize = 1024;
pub const SCENES: u32 = 8;
pub const LIGHTS: usize = 6;
pub const FACES: usize = 8;

/// The characters: sleepy, happy, flustered, dizzy, curious. Character i wears eye glyph
/// i + 1, drawn by the host: 1 – –, 2 ^ ^, 3 > <, 4 + +, 5 O O, and 6 * * when a flustered one is touched.
const SLEEPY: usize = 0;
const HAPPY: usize = 1;
const FLUSTERED: usize = 2;
const DIZZY: usize = 3;
const CURIOUS: usize = 4;

/// One frame being written: dots and faces, the pointer that disturbs both, and the dapples.
pub struct Out<'a> {
    d: &'a mut [f32],
    f: &'a mut [f32],
    n: usize,
    nf: usize,
    seed: u32,
    t: f32,
    px: f32,
    py: f32,
    lit: &'a [f32],
}

impl Out<'_> {
    /// A dot; near the pointer it swells and is pushed aside, and in a dapple it turns a tone lighter.
    fn dot(&mut self, x: f32, y: f32, r: f32, c: f32, a: f32) {
        let (dx, dy) = (x - self.px, y - self.py);
        let k = if self.px >= 0.0 { (-(dx * dx + dy * dy) * 90.0).exp() } else { 0.0 };
        let sun = self.lit[4..].chunks(4).any(|l| (x - l[0]).hypot(y - l[1]) < l[2]) as u8 as f32;
        let v = [x + dx * k * 0.8, y + dy * k * 0.8, (r * (1.0 + 0.9 * k)).max(0.0), (c + 0.5 * sun).max(0.0).min(1.0), a.max(k).max(0.0).min(1.0)];
        if self.n < MAX && v.iter().all(|v| v.is_finite()) {
            self.d[self.n * 5..self.n * 5 + 5].copy_from_slice(&v);
            self.n += 1;
        }
    }

    /// Character `m` at (x, y), looking at `look` (or the pointer); `g` overrides its glyph.
    /// It blinks to – –, and squirms > < (* * if already flustered) when the pointer touches it.
    /// Bodies are stiff: always a little flattened, as if resting, and never deformed by more than 3%.
    fn face(&mut self, x: f32, y: f32, r: f32, m: usize, look: (f32, f32), g: f32, sq: f32, pulse: f32) {
        let here = self.px >= 0.0;
        let (tx, ty) = if here { (self.px, self.py) } else { look };
        let (gx, gy) = (tx - x, ty - y);
        let gl = gx.hypot(gy).max(1e-3);
        let near = here && gl < r * 1.6;
        let ph = (self.t + rnd(self.seed, self.nf as u32 + 7) * 4.0) % (3.6 + 0.5 * self.nf as f32);
        let blink = if ph < 0.18 { (ph / 0.18 * PI).sin() } else { 0.0 };
        let g = if g > 0.0 { g } else { m as f32 + 1.0 };
        let g = match () {
            _ if near => if g == 3.0 { 6.0 } else { 3.0 },
            _ if blink > 0.5 => 1.0,
            _ => g,
        };
        if self.nf < FACES && self.f.len() >= self.nf * 10 + 10 {
            let q = [x, y, r, 3.0 + m as f32, gx / gl, gy / gl, blink, g, 0.04 + (sq + 0.1 * near as u8 as f32).max(-0.03).min(0.03), pulse];
            self.f[self.nf * 10..self.nf * 10 + 10].copy_from_slice(&q);
            self.nf += 1;
        }
    }
}
fn rnd(seed: u32, i: u32) -> f32 {
    let mut z = seed.wrapping_mul(0x9E37_79B9) ^ i.wrapping_mul(0x85EB_CA6B);
    z = (z ^ (z >> 16)).wrapping_mul(0x7FEB_352D);
    z = (z ^ (z >> 15)).wrapping_mul(0x846C_A68B);
    (z ^ (z >> 16)) as f32 / 4_294_967_296.0
}

fn smooth(x: f32) -> f32 {
    let x = x.clamp(0.0, 1.0);
    x * x * (3.0 - 2.0 * x)
}

fn grid(n: usize, mut f: impl FnMut(f32, f32)) {
    for i in 0..n * n {
        f(((i % n) as f32 + 0.5) / n as f32, ((i / n) as f32 + 0.5) / n as f32);
    }
}

/// Fill `d` (at least MAX*5), `faces` and `light`; return the dot and face counts.
pub fn frame(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, d: &mut [f32], faces: &mut [f32], light: &mut [f32; LIGHTS * 4]) -> (usize, usize) {
    let (px, py) = if px >= 0.0 && py >= 0.0 { (px, py) } else { (-1.0, -1.0) };
    dapple(seed, t, light);
    let mut o = Out { d, f: faces, n: 0, nf: 0, seed, t, px, py, lit: &light[..] };
    let mut pin = (0.74, 0.22, 0.025, 0.0);
    match scene % SCENES {
        // Rest: an all-over polka field of uneven sizes, breathing out from a sleeper.
        0 => {
            pin.3 = 0.5 + 0.3 * (t * 0.5).sin();
            for i in 0..121 {
                let (c, r) = ((i % 11) as f32, (i / 11) as f32);
                let (x, y) = ((c + 0.25 + 0.5 * (r % 2.0)) / 11.0, (r + 0.5) / 11.0);
                let breath = 1.0 + 0.15 * (t * 0.8 - (x - 0.5).hypot(y - 0.5) * 6.0).sin();
                let tone = if rnd(seed, i + 500) < 0.12 { 0.5 } else { 0.0 };
                o.dot(x, y, 0.016 * (0.55 + 0.9 * rnd(seed, i)) * breath, tone, 0.92);
            }
            o.face(0.5, 0.5, 0.12, SLEEPY, (0.5, 0.9), 0.0, 0.02 * (t * 0.8).sin(), 0.0);
        }
        // Signal: rings travel out from a happy one.
        1 => {
            let pulse = (0.5 + 0.5 * (t * 3.0).cos()).powi(8);
            pin = (0.42, 0.5, 0.025, pulse);
            grid(16, |x, y| {
                let r = (x - 0.3).hypot(y - 0.5);
                let w = (r * 25.0 - t * 3.0).cos().max(0.0) * (-r * 2.0).exp();
                o.dot(x, y, 0.006 + 0.018 * w, w, 0.35 + 0.65 * w);
            });
            o.face(0.3, 0.5, 0.12, HAPPY, (1.0, 0.5), 0.0, 0.0, pulse);
        }
        // Scan: an angle sweeps round a fixed centre; a curious one follows it.
        2 => {
            let a = t * 0.9;
            pin = (0.5 + 0.4 * a.cos(), 0.5 + 0.4 * a.sin(), 0.025, 1.0);
            for (k, n) in [24, 36, 48].into_iter().enumerate() {
                let rad = 0.2 + 0.1 * k as f32;
                for i in 0..n {
                    let b = TAU * i as f32 / n as f32;
                    let e = (-((b - a + PI).rem_euclid(TAU) - PI).powi(2) * 8.0).exp();
                    o.dot(0.5 + rad * b.cos(), 0.5 + rad * b.sin(), 0.008 + 0.012 * e, e, 0.3 + 0.7 * e);
                }
            }
            o.face(0.5, 0.5, 0.09, CURIOUS, (0.5 + a.cos(), 0.5 + a.sin()), 0.0, 0.0, 0.0);
        }
        // Sampling: seeded draws pile up into a distribution, then restart.
        3 => {
            const N: u32 = 45;
            const BINS: usize = 11;
            let shown = (8 + (t * 10.0) as u32 % (N + 20)).min(N);
            let mut h = [0u16; BINS];
            let mut last = (0.5, 0.9);
            for i in 0..shown {
                let g = (-2.0 * rnd(seed, 2 * i).max(1e-6).ln()).sqrt() * (TAU * rnd(seed, 2 * i + 1)).cos();
                let b = ((g / 6.0 + 0.5) * BINS as f32).clamp(0.0, BINS as f32 - 1.0) as usize;
                let (x, y) = ((b as f32 + 0.5) / BINS as f32, 0.93 - h[b] as f32 * 0.045);
                h[b] += 1;
                let new = ((i + 6) as f32 - shown as f32).max(0.0) / 6.0;
                o.dot(x, y, 0.021, 0.4 + 0.6 * new, 1.0);
                last = (x, y);
            }
            pin = (last.0, last.1, 0.03, 0.9);
            o.face(0.5, 0.18, 0.08, CURIOUS, last, 0.0, 0.0, 0.0);
        }
        // Convergence: a scattered field settles onto a grid; dizziness turns to delight.
        4 => {
            let s = smooth(if p >= 0.0 { p * 1.4 } else { (t % 8.0) / 5.0 });
            let mut i = 0;
            grid(14, |x, y| {
                let (sx, sy) = (rnd(seed, i), rnd(seed, i + 999));
                i += 1;
                o.dot(sx + (x - sx) * s, sy + (y - sy) * s, 0.015, s, 0.5 + 0.5 * s);
            });
            pin = (0.47, 0.46, 0.025, s.powi(4)); // a glint once it settles
            o.face(0.5, 0.5, 0.09, DIZZY, (0.5, 0.9), if s < 0.7 { 0.0 } else { 2.0 }, 0.03 * (1.0 - s) * (t * 9.0).sin(), s.powi(4));
        }
        // A missing observation: the gap stays visible; a flustered one hesitates beside it.
        5 => {
            let tx = 0.68 + 0.05 * (t * 0.7).sin();
            pin = (tx, 0.38, 0.025, 0.35 + 0.15 * (t * 2.0).sin());
            grid(14, |x, y| {
                let r = (x - 0.68).hypot(y - 0.38);
                let edge = (-(r - 0.16).powi(2) * 2000.0).exp() * (0.5 + 0.5 * (t * 2.0).sin());
                if r > 0.16 {
                    o.dot(x, y, 0.013 + 0.008 * edge, 0.2 + 0.8 * edge, 0.6 + 0.4 * edge);
                }
            });
            o.face(0.28 + 0.004 * (t * 30.0).sin(), 0.66, 0.1, FLUSTERED, (tx, 0.38), 0.0, 0.0, 0.0);
        }
        // Stories: a sunrise over one hill. The sleeper wakes, and a friend comes to see.
        6 => {
            let u = if p >= 0.0 { p } else { (t / 14.0) % 1.0 };
            let day = smooth((u - 0.2) / 0.4);
            let sy = 0.86 - 0.6 * smooth((u - 0.1) / 0.6);
            pin = (0.72, sy, 0.06, if sy < 0.7 { 0.2 + 0.8 * day } else { 0.0 });
            // Starlight: each star twinkles, and every third wears a faint flat halo.
            for i in 0..15 {
                let (x, y, tw) = (0.05 + 0.9 * rnd(seed, i), 0.04 + 0.5 * rnd(seed, i + 40), 0.5 + 0.5 * (t * 2.0 + i as f32 * 1.7).sin());
                o.dot(x, y, 0.004 + 0.004 * tw, 1.0, 1.0 - day);
                o.dot(x, y, 0.022 * tw * (i % 3 == 0) as u8 as f32, 1.0, 0.25 * (1.0 - day));
            }
            o.dot(0.45, 1.5, 0.8, 0.0, 1.0);
            let (g, hop) = match () {
                _ if u < 0.4 => (1.0, 0.0),
                _ if u < 0.55 => (5.0, 0.0),
                _ => (2.0, 0.06 * (t * 6.0).sin().abs()),
            };
            for k in 0..3 * (u < 0.4) as u32 {
                let z = (t * 0.4 + k as f32 / 3.0) % 1.0;
                o.dot(0.4 + 0.08 * z, 0.5 - 0.14 * z, 0.006 + 0.008 * z, 1.0, 1.0 - z);
            }
            o.face(0.3, 0.61 - hop, 0.1, SLEEPY, (0.72, sy), g, -0.5 * hop + 0.02 * (t * 1.2).sin(), 0.0);
            let arrive = smooth((u - 0.45) / 0.15);
            o.face(1.14 - 0.3 * arrive, 0.7, 0.08, CURIOUS, (0.3, 0.61), if u > 0.7 { 2.0 } else { 0.0 }, 0.0, 0.0);
        }
        // Play: friends at play on a grassy hill. One bounces clean out of the frame.
        _ => {
            pin = (0.8, 0.18, 0.05, 1.0);
            let ground = |x: f32| 1.55 - (0.5625 - (x - 0.5) * (x - 0.5)).max(0.0).sqrt();
            o.dot(0.5, 1.55, 0.75, 0.5, 1.0);
            o.dot(0.16, 0.88, 0.012, 1.0, 1.0);
            o.dot(0.74, 0.86, 0.012, 1.0, 1.0);
            let q = (t * 0.55) % 2.0;
            let a = if q < 1.0 { 0.85 * (PI * q).sin() } else { 0.05 * (PI * 4.0 * q).sin().abs() };
            let ay = ground(0.32) - 0.075 - a;
            o.face(0.32, ay, 0.075, HAPPY, (0.5, 0.0), 0.0, -0.04 * a, 0.0);
            let dx = 0.62 + 0.08 * (t * 0.9).sin();
            o.face(dx, ground(dx) - 0.07, 0.07, DIZZY, (0.32, ay), 0.0, 0.02 * (t * 7.0).sin(), 0.0);
            let gone = ay < 0.075;
            o.face(0.88 + 0.006 * gone as u8 as f32 * (t * 40.0).sin(), ground(0.88) - 0.05, 0.05, FLUSTERED, (0.32, ay), 0.0, 0.0, 0.0);
        }
    }
    let n = (o.n, o.nf);
    light[..4].copy_from_slice(&[pin.0, pin.1, pin.2, pin.3.max(0.0).min(1.0)]);
    n
}

/// Lights 1.. drift slowly like sun through leaves.
fn dapple(seed: u32, t: f32, light: &mut [f32; LIGHTS * 4]) {
    for k in 1..LIGHTS {
        let (u, k) = (k as f32, k as u32);
        light[k as usize * 4..k as usize * 4 + 4].copy_from_slice(&[
            rnd(seed, 100 + k) + 0.05 * (t * 0.13 + u).sin(),
            rnd(seed, 200 + k) + 0.04 * (t * 0.11 + 2.0 * u).cos(),
            0.07 + 0.11 * rnd(seed, 300 + k),
            0.25 + 0.15 * (t * 0.4 + 1.7 * u).sin(),
        ]);
    }
}

// The WebAssembly boundary: the host reads both buffers after each call.
// They live for the module's lifetime and never move; memory never grows.
static mut DOTS: [f32; MAX * 5] = [0.0; MAX * 5];
static mut FACE: [f32; FACES * 10] = [0.0; FACES * 10];
static mut LIGHT: [f32; LIGHTS * 4] = [0.0; LIGHTS * 4];

#[unsafe(no_mangle)]
pub extern "C" fn buf(i: u32) -> *const f32 {
    match i {
        0 => &raw const DOTS as *const f32,
        1 => &raw const FACE as *const f32,
        _ => &raw const LIGHT as *const f32,
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn update(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32) -> u32 {
    let ok = |v: f32| if v.is_finite() { v } else { -1.0 };
    // SAFETY: wasm32 is single-threaded and these are the only references.
    let (d, f, l) = unsafe { (&mut *&raw mut DOTS, &mut *&raw mut FACE, &mut *&raw mut LIGHT) };
    let (n, faces) = frame(seed, scene, ok(t).max(0.0), ok(p), ok(px), ok(py), d, f, l);
    (n | faces << 16) as u32
}

#[cfg(test)]
mod tests {
    use super::*;

    type Frame = (Vec<f32>, [f32; FACES * 10], [f32; LIGHTS * 4], usize, usize);
    fn run(scene: u32, t: f32, p: f32, px: f32) -> Frame {
        let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; FACES * 10], [0.0; LIGHTS * 4]);
        let (n, m) = frame(42, scene, t, p, px, px, &mut d, &mut f, &mut l);
        assert!(l.chunks(4).all(|c| c.iter().all(|v| v.is_finite()) && (0.0..=1.0).contains(&c[3])));
        (d, f, l, n, m)
    }

    #[test]
    fn every_scene_is_bounded_finite_and_deterministic() {
        for s in 0..SCENES {
            for t in [0.0, 1.3, 9.7, 1e6] {
                let (d, f, _, n, m) = run(s, t, -1.0, -1.0);
                assert!(n > 0 && n <= MAX && m > 0, "scene {s} count {n}");
                assert!(d.iter().chain(&f).all(|v| v.is_finite()));
                assert!(d[..n * 5].chunks(5).all(|c| (0.0..=1.0).contains(&c[3]) && (0.0..=1.0).contains(&c[4])));
                assert!(f[..m * 10].chunks(10).all(|q| (3.0..8.0).contains(&q[3]) && (1.0..=6.0).contains(&q[7])));
                assert_eq!(run(s, t, -1.0, -1.0).0, d);
            }
        }
    }

    #[test]
    fn scenes_keep_their_promises() {
        let (d, _, _, n, _) = run(5, 3.0, -1.0, -1.0); // the gap stays empty
        assert!(d[..n * 5].chunks(5).all(|c| (c[0] - 0.68).hypot(c[1] - 0.38) > 0.16));
        let (a, _, _, n, _) = run(4, 0.0, 1.0, -1.0); // convergence follows progress
        assert!(n == 196 && (a[0] - 0.5 / 14.0).abs() < 1e-6 && (a[1] - 0.5 / 14.0).abs() < 1e-6);
        let (d, _, l, n, _) = run(0, 0.0, -1.0, -1.0); // dapples light the dots beneath them
        let lit: Vec<bool> = d[..n * 5].chunks(5).map(|c| l[4..].chunks(4).any(|q| (c[0] - q[0]).hypot(c[1] - q[1]) < q[2])).collect();
        assert!(lit.contains(&true) && d[..n * 5].chunks(5).zip(&lit).all(|(c, &on)| on == (c[3] >= 0.5) || c[3] == 0.5));
        let b = run(4, 0.0, 1.0, 0.5).0; // the pointer pushes dots aside
        let i = 6 * 14 + 6; // the grid dot just up-left of the pointer
        assert!(b[i * 5] < a[i * 5] && b[i * 5 + 2] > a[i * 5 + 2]);
        assert_eq!((run(6, 0.0, 0.1, -1.0).1[7], run(6, 0.0, 0.9, -1.0).1[7]), (1.0, 2.0)); // the sleeper wakes
        let ys: Vec<f32> = (0..200).map(|k| run(7, k as f32 * 0.02, -1.0, -1.0).1[1]).collect();
        assert!(ys.iter().any(|&y| y < 0.0) && ys.iter().any(|&y| y > 0.5)); // the jumper leaves the frame
        assert!(update(1, 0, f32::NAN, f32::INFINITY, f32::NAN, 0.5) > 0); // bad input is ignored
    }
}
