//! Dot scenes. Every scene is a pure function of (seed, scene, time, progress, pointer,
//! stage), so pause, replay and export are exact.
//!
//! Units: the tile is the unit square, y down; time in seconds. Characters may leave it.
//! Dots: 5 f32 each — x, y, radius, colour (0 shadow, 0.5 accent, 1 light), alpha.
//! Faces: 10 f32 each — x, y, radius, tone, gaze x, gaze y, blink (0 open, 1 shut),
//! eye glyph, squash (+ flat, - tall), pulse.
//! Tone 3 + i is character i's colour (`CAST`). `list` turns a frame into a display list.
//! Lights: 4 f32 each — x, y, radius, intensity (0..1). Light 0 is the sun or pin light;
//! the rest are dappled patches, as of sun through leaves, and they light the dots beneath.
//! Progress and pointer are negative when absent. The stage is a notebook's numbers for
//! the scenes that show data (scene 8); missing or non-finite values take defaults.

use crate::draw::{Op, Sh};
use std::f32::consts::{PI, TAU};

pub const MAX: usize = 1024;
pub const SCENES: u32 = 9;
pub const LIGHTS: usize = 6;
pub const FACES: usize = 8;

/// The characters: sleepy, happy, flustered, dizzy, curious. Character i wears eye glyph
/// i + 1, drawn by `draw`: 1 – –, 2 ^ ^, 3 > <, 4 + +, 5 O O, and 6 * * when a flustered one is touched.
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
pub fn frame(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, stage: &[f32], d: &mut [f32], faces: &mut [f32], light: &mut [f32; LIGHTS * 4]) -> (usize, usize) {
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
        7 => {
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
        // Link: one radar watches one target. The beam is a fan of gain, the ring its reach.
        // Stage, in km and km/s: view centre and span, radar, target, boresight, reach, Pd, velocity.
        _ => {
            let s = |i: usize, v: f32| stage.get(i).copied().filter(|v| v.is_finite()).unwrap_or(v);
            let (cx, cy, span) = (s(0, 40.0), s(1, 10.0), s(2, 160.0).max(1.0));
            let at = |x: f32, y: f32| (0.5 + (x - cx) / span, 0.5 - (y - cy) / span);
            let (r, tg, pd) = (at(s(3, -20.0), s(4, 0.0)), at(s(5, 65.0), s(6, 20.0)), s(10, 0.61).clamp(0.0, 1.0));
            let (b, reach) = (s(8, 0.23).atan2(s(7, 0.973)), s(9, 80.6).max(0.0) / span);
            for i in 0..60 {
                let a = TAU * i as f32 / 60.0;
                o.dot(r.0 + reach * a.cos(), r.1 - reach * a.sin(), 0.004, 0.0, 0.8);
            }
            for k in -3..=3 {
                let th = k as f32 * 5.0;
                let (g, a) = (10f32.powf(-1.2 * (th / 10.0).powi(2)), b + th.to_radians());
                for j in 1..=14 {
                    let u = j as f32 / 14.0;
                    let hot = (-((u - (t * 0.35) % 1.0) * 12.0).powi(2)).exp();
                    let l = reach * g.sqrt() * u;
                    o.dot(r.0 + l * a.cos(), r.1 - l * a.sin(), 0.005 + 0.004 * hot, 0.5 + 0.5 * hot, 0.4 + 0.6 * g);
                }
            }
            for k in 1..=6 {
                let k = k as f32 * 8.0 / span;
                o.dot(tg.0 - s(11, 0.35) * k, tg.1 + s(12, 0.1) * k, 0.008, 0.5, 1.0 - k * span / 56.0);
            }
            o.dot(tg.0, tg.1, 0.02, if pd >= 0.9 { 1.0 } else { 0.5 }, 1.0);
            pin = (tg.0, tg.1, 0.03, pd);
            o.face(r.0, r.1, 0.07, CURIOUS, tg, 0.0, 0.0, 0.0);
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

/// The characters' colours (sleepy, happy, flustered, dizzy, curious) and their eyes.
pub const CAST: [u32; 5] = [0x7a3cff, 0xffc400, 0xff2e74, 0xb4e600, 0x00c9b7];
pub const INK: u32 = 0x16121c;

pub fn mix(a: u32, b: u32, w: f32) -> u32 {
    (0..3).map(|i| i * 8).map(|s| ((((a >> s) & 255) as f32 * (1.0 - w) + ((b >> s) & 255) as f32 * w).round() as u32) << s).sum()
}

/// One frame as a display list. `pal` is the scene's base, shade, accent and light.
pub fn list(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, stage: &[f32], pal: [u32; 4]) -> Vec<Op> {
    let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; FACES * 10], [0.0; LIGHTS * 4]);
    let (n, nf) = frame(seed, scene, t, p, px, py, stage, &mut d, &mut f, &mut l);
    let [base, shade, accent, light] = pal;
    let hue = |k: usize| [shade, accent, light].get(k).copied().unwrap_or(CAST[k.saturating_sub(3).min(4)]);
    let tone = |c: f32| if c < 0.34 { 0 } else if c < 0.67 { 1 } else { 2 };
    let disc = |x: f32, y: f32, r: f32| Sh::Ell(x, y, r, r);
    let mut o = vec![Op::Clip(Some(Sh::Rect(0.0, 0.0, 1.0, 1.0, 0.012))), Op::Fill(Sh::Rect(0.0, 0.0, 1.0, 1.0, 0.0), mix(base, light, l[3] * 0.2), 1.0, false)];
    // Dots: three tones at three opacities, lightest on top.
    let mut dots: Vec<&[f32]> = d[..n * 5].chunks(5).filter(|c| c[4] > 0.0).collect();
    dots.sort_by_key(|c| (tone(c[3]), (c[4] * 3.0).ceil() as u8));
    o.extend(dots.iter().map(|c| Op::Fill(disc(c[0], c[1], c[2]), hue(tone(c[3])), (c[4] * 3.0).ceil() / 3.0, false)));
    // Light: dappled patches (the scene has already lit the dots under them), a hard halo and the sun.
    let dapples = |o: &mut Vec<Op>, a: f32| o.extend(l[4..].chunks(4).map(|q| Op::Fill(disc(q[0], q[1], q[2]), light, a, true)));
    dapples(&mut o, 0.18);
    if l[3] > 0.05 {
        o.push(Op::Fill(disc(l[0], l[1], l[2] * 2.5), light, 0.15 * l[3], true));
        o.push(Op::Fill(disc(l[0], l[1], l[2]), light, (l[3] * 2.0).ceil() / 2.0, true));
    }
    o.push(Op::Clip(None));
    // Characters, unclipped: a body and two glyph eyes that look somewhere.
    for q in f[..nf * 10].chunks(10) {
        let [x, y, r, k, gx, gy, _, g, sq, pulse] = q.try_into().unwrap();
        if pulse > 0.05 {
            o.push(Op::Fill(disc(x, y, r * (1.65 - 0.5 * pulse)), hue(k as usize), 0.3, false));
        }
        let (sx, sy) = (r * (1.0 + sq), r * (1.0 - sq));
        let body = Sh::Ell(x, y, sx, sy);
        o.extend([Op::Fill(body, hue(k as usize), 1.0, false), Op::Clip(Some(body))]);
        dapples(&mut o, 0.35);
        let h = 0.26;
        let at = |u: f32, v: f32| (x + u * sx, y + v * sy);
        for e in [-1.0f32, 1.0] {
            let (cx, cy) = (e * 0.48 + gx * 0.22, -0.1 + gy * 0.18);
            let mut seg = |a: (f32, f32), b: (f32, f32)| {
                let (a, b) = (at(cx + a.0, cy + a.1), at(cx + b.0, cy + b.1));
                o.push(Op::Fill(Sh::Seg(a.0, a.1, b.0, b.1, 0.12 * r), INK, 1.0, false));
            };
            match g as u8 {
                1 => seg((-h, 0.0), (h, 0.0)),
                2 => (seg((-h, 0.6 * h), (0.0, -0.6 * h)), seg((0.0, -0.6 * h), (h, 0.6 * h))).1,
                3 => (seg((e * 0.7 * h, -h), (-e * 0.7 * h, 0.0)), seg((-e * 0.7 * h, 0.0), (e * 0.7 * h, h))).1,
                4 => (seg((-h, 0.0), (h, 0.0)), seg((0.0, -h), (0.0, h))).1,
                5 => {
                    let (c, rr) = (at(cx, cy), 0.75 * h * r);
                    o.push(Op::Fill(Sh::Ring(c.0, c.1, rr, 0.12 * r), INK, 1.0, false));
                }
                _ => [0.5f32, 1.55, 2.6].into_iter().for_each(|a| seg((-h * a.cos(), -h * a.sin()), (h * a.cos(), h * a.sin()))),
            }
        }
        o.push(Op::Clip(None));
    }
    o
}

#[cfg(test)]
mod tests {
    use super::*;

    type Frame = (Vec<f32>, [f32; FACES * 10], [f32; LIGHTS * 4], usize, usize);
    fn run(scene: u32, t: f32, p: f32, px: f32) -> Frame {
        let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; FACES * 10], [0.0; LIGHTS * 4]);
        let (n, m) = frame(42, scene, t, p, px, px, &[], &mut d, &mut f, &mut l);
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
    fn lists_are_exact() {
        let pal = [0x4f6f92, 0x1f2a3c, 0xf0a050, 0xffe39a];
        for s in 0..SCENES {
            let (mut a, mut b) = (vec![], vec![]);
            crate::draw::raster(&list(42, s, 2.5, -1.0, -1.0, -1.0, &[], pal), 64, 0.15, &mut a);
            crate::draw::raster(&list(42, s, 2.5, -1.0, -1.0, -1.0, &[], pal), 64, 0.15, &mut b);
            assert!(a == b && a[(32 * 64 + 2) * 4 + 3] == 0, "scene {s}: exact, and the bleed stays clear");
        }
        assert_eq!(mix(0, 0xffffff, 0.5), 0x808080);
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
        let (d, _, l, n, _) = run(8, 0.0, -1.0, -1.0); // the link: reach ring round the radar, pin on the target
        assert!((d[0] - (0.125 + 80.6 / 160.0)).abs() < 1e-5 && (l[0] - 0.65625).abs() < 1e-5 && (l[3] - 0.61).abs() < 1e-6);
        assert_eq!(d[(n - 1) * 5 + 3], 0.5); // below the required Pd the target is accent, not light
    }
}
