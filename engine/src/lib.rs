//! Dot engine, interface v2. Every frame is a pure function of
//! (seed, scene, time, progress, pointer), so pause and replay are exact.
//!
//! Units: the frame is the unit square, y down; time in seconds.
//! Dots: 5 f32 each — x, y, radius, colour (0 shadow, 0.5 accent, 1 light), alpha.
//! Face: 8 f32 — x, y, radius, gaze x, gaze y, blink (0 open, 1 shut), halo, pulse.
//! Lights: 4 f32 each — x, y, radius, intensity (0..1). Light 0 is the pin light;
//! the rest are dappled patches, as of sun through leaves.
//! Progress and pointer are negative when absent.

use std::f32::consts::{PI, TAU};

pub const MAX: usize = 1024;
pub const SCENES: u32 = 6;
pub const LIGHTS: usize = 6;

pub struct Out<'a> {
    d: &'a mut [f32],
    n: usize,
}

impl Out<'_> {
    fn dot(&mut self, x: f32, y: f32, r: f32, c: f32, a: f32) {
        if self.n < MAX && [x, y, r, c, a].iter().all(|v| v.is_finite()) {
            self.d[self.n * 5..self.n * 5 + 5].copy_from_slice(&[x, y, r.max(0.0), c.clamp(0.0, 1.0), a.clamp(0.0, 1.0)]);
            self.n += 1;
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

/// Fill `d` (at least MAX*5), `face` and `light`; return the dot count.
pub fn frame(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, d: &mut [f32], face: &mut [f32; 8], light: &mut [f32; LIGHTS * 4]) -> usize {
    let mut o = Out { d, n: 0 };
    let (mut fx, mut fy, mut fr) = (0.5, 0.5, 0.12);
    let (mut tx, mut ty) = (0.5, 0.9); // what the face looks at
    let mut pulse = 0.0;
    let mut pin = (0.74, 0.22, 0.0);
    match scene % SCENES {
        // Rest: an all-over polka field of uneven sizes, breathing out from the centre.
        0 => {
            pin.2 = 0.5 + 0.3 * (t * 0.5).sin();
            for i in 0..121 {
                let (c, r) = ((i % 11) as f32, (i / 11) as f32);
                let (x, y) = ((c + 0.25 + 0.5 * (r % 2.0)) / 11.0, (r + 0.5) / 11.0);
                let breath = 1.0 + 0.15 * (t * 0.8 - (x - 0.5).hypot(y - 0.5) * 6.0).sin();
                let tone = if rnd(seed, i + 500) < 0.12 { 0.5 } else { 0.0 };
                o.dot(x, y, 0.016 * (0.55 + 0.9 * rnd(seed, i)) * breath, tone, 0.92);
            }
        }
        // Signal: rings travel out from the face.
        1 => {
            (fx, fy, tx, ty) = (0.3, 0.5, 1.0, 0.5);
            pulse = (0.5 + 0.5 * (t * 3.0).cos()).powi(8);
            pin = (fx + fr, fy, pulse);
            grid(16, |x, y| {
                let r = (x - fx).hypot(y - fy);
                let w = (r * 25.0 - t * 3.0).cos().max(0.0) * (-r * 2.0).exp();
                o.dot(x, y, 0.006 + 0.018 * w, w, 0.35 + 0.65 * w);
            });
        }
        // Scan: an angle sweeps round a fixed centre.
        2 => {
            fr = 0.09;
            let a = t * 0.9;
            (tx, ty) = (0.5 + a.cos(), 0.5 + a.sin());
            pin = (0.5 + 0.4 * a.cos(), 0.5 + 0.4 * a.sin(), 1.0);
            for (k, n) in [24, 36, 48].into_iter().enumerate() {
                let rad = 0.2 + 0.1 * k as f32;
                for i in 0..n {
                    let b = TAU * i as f32 / n as f32;
                    let e = (-((b - a + PI).rem_euclid(TAU) - PI).powi(2) * 8.0).exp();
                    o.dot(0.5 + rad * b.cos(), 0.5 + rad * b.sin(), 0.008 + 0.012 * e, e, 0.3 + 0.7 * e);
                }
            }
        }
        // Sampling: seeded draws pile up into a distribution, then restart.
        3 => {
            const N: u32 = 400;
            const BINS: usize = 31;
            let shown = (40 + (t * 60.0) as u32 % (N + 120)).min(N);
            let mut h = [0u16; BINS];
            (fx, fy, fr) = (0.5, 0.18, 0.08);
            for i in 0..shown {
                let g = (-2.0 * rnd(seed, 2 * i).max(1e-6).ln()).sqrt() * (TAU * rnd(seed, 2 * i + 1)).cos();
                let b = ((g / 6.0 + 0.5) * BINS as f32).clamp(0.0, BINS as f32 - 1.0) as usize;
                let (x, y) = ((b as f32 + 0.5) / BINS as f32, 0.95 - h[b] as f32 * 0.018);
                h[b] += 1;
                let new = ((i + 30) as f32 - shown as f32).max(0.0) / 30.0;
                o.dot(x, y, 0.008 + 0.005 * new, 0.4 + 0.6 * new, 0.9);
                (tx, ty) = (x, y);
            }
            pin = (tx, ty, 0.9);
        }
        // Convergence: a scattered field settles onto a grid.
        4 => {
            fr = 0.09;
            let s = smooth(if p >= 0.0 { p * 1.4 } else { (t % 8.0) / 5.0 });
            let mut i = 0;
            grid(14, |x, y| {
                let (sx, sy) = (rnd(seed, i), rnd(seed, i + 999));
                i += 1;
                o.dot(sx + (x - sx) * s, sy + (y - sy) * s, 0.015, s, 0.5 + 0.5 * s);
            });
            pulse = s.powi(4);
            pin = (fx - fr * 0.35, fy - fr * 0.4, pulse); // a glint once it settles
        }
        // A missing observation: the gap stays visible; the face hesitates beside it.
        _ => {
            (fx, fy, fr, tx, ty) = (0.28, 0.66, 0.1, 0.68, 0.38);
            tx += 0.05 * (t * 0.7).sin();
            pin = (tx, ty, 0.35 + 0.15 * (t * 2.0).sin());
            grid(14, |x, y| {
                let r = (x - 0.68).hypot(y - 0.38);
                let edge = (-(r - 0.16).powi(2) * 2000.0).exp() * (0.5 + 0.5 * (t * 2.0).sin());
                if r > 0.16 {
                    o.dot(x, y, 0.013 + 0.008 * edge, 0.2 + 0.8 * edge, 0.6 + 0.4 * edge);
                }
            });
        }
    }
    if px >= 0.0 && py >= 0.0 {
        (tx, ty) = (px, py);
    }
    let (gx, gy) = (tx - fx, ty - fy);
    let gl = gx.hypot(gy).max(1e-3);
    let ph = (t + rnd(seed, 7) * 4.0) % 4.2;
    let blink = if ph < 0.18 { (ph / 0.18 * PI).sin() } else { 0.0 };
    *face = [fx, fy, fr, gx / gl, gy / gl, blink, 0.5 + 0.5 * (t * 0.8).sin(), pulse];
    light[..4].copy_from_slice(&[pin.0, pin.1, 0.035, pin.2.clamp(0.0, 1.0)]);
    for k in 1..LIGHTS {
        let (u, k) = (k as f32, k as u32);
        light[k as usize * 4..k as usize * 4 + 4].copy_from_slice(&[
            rnd(seed, 100 + k) + 0.05 * (t * 0.13 + u).sin(),
            rnd(seed, 200 + k) + 0.04 * (t * 0.11 + 2.0 * u).cos(),
            0.07 + 0.11 * rnd(seed, 300 + k),
            0.25 + 0.15 * (t * 0.4 + 1.7 * u).sin(),
        ]);
    }
    o.n
}

// The WebAssembly boundary: the host reads both buffers after each call.
// They live for the module's lifetime and never move; memory never grows.
static mut DOTS: [f32; MAX * 5] = [0.0; MAX * 5];
static mut FACE: [f32; 8] = [0.0; 8];
static mut LIGHT: [f32; LIGHTS * 4] = [0.0; LIGHTS * 4];

#[unsafe(no_mangle)]
pub extern "C" fn dots() -> *const f32 {
    &raw const DOTS as *const f32
}

#[unsafe(no_mangle)]
pub extern "C" fn face() -> *const f32 {
    &raw const FACE as *const f32
}

#[unsafe(no_mangle)]
pub extern "C" fn lights() -> *const f32 {
    &raw const LIGHT as *const f32
}

#[unsafe(no_mangle)]
pub extern "C" fn update(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32) -> u32 {
    let ok = |v: f32| if v.is_finite() { v } else { -1.0 };
    // SAFETY: wasm32 is single-threaded and these are the only references.
    let (d, f, l) = unsafe { (&mut *&raw mut DOTS, &mut *&raw mut FACE, &mut *&raw mut LIGHT) };
    frame(seed, scene, ok(t).max(0.0), ok(p), ok(px), ok(py), d, f, l) as u32
}

#[cfg(test)]
mod tests {
    use super::*;

    fn run(scene: u32, t: f32) -> (Vec<f32>, [f32; 8], usize) {
        let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; 8], [0.0; LIGHTS * 4]);
        let n = frame(42, scene, t, -1.0, -1.0, -1.0, &mut d, &mut f, &mut l);
        assert!(l.chunks(4).all(|c| c.iter().all(|v| v.is_finite()) && (0.0..=1.0).contains(&c[3])));
        (d, f, n)
    }

    #[test]
    fn every_scene_is_bounded_finite_and_deterministic() {
        for s in 0..SCENES {
            for t in [0.0, 1.3, 9.7, 1e6] {
                let (d, f, n) = run(s, t);
                assert!(n > 0 && n <= MAX, "scene {s} count {n}");
                assert!(d.iter().chain(&f).all(|v| v.is_finite()));
                assert!(d[..n * 5].chunks(5).all(|c| (0.0..=1.0).contains(&c[3]) && (0.0..=1.0).contains(&c[4])));
                assert_eq!(run(s, t).0, d);
            }
        }
    }

    #[test]
    fn the_gap_stays_empty() {
        let (d, _, n) = run(5, 3.0);
        assert!(d[..n * 5].chunks(5).all(|c| (c[0] - 0.68).hypot(c[1] - 0.38) > 0.16));
    }

    #[test]
    fn convergence_follows_progress() {
        let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; 8], [0.0; LIGHTS * 4]);
        let n = frame(1, 4, 0.0, 1.0, -1.0, -1.0, &mut d, &mut f, &mut l);
        assert_eq!(n, 196);
        assert!((d[0] - 0.5 / 14.0).abs() < 1e-6 && (d[1] - 0.5 / 14.0).abs() < 1e-6);
    }

    #[test]
    fn bad_input_is_ignored() {
        assert!(update(1, 0, f32::NAN, f32::INFINITY, f32::NAN, 0.5) > 0);
    }
}
