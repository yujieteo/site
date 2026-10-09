//! Dot engine, interface v3. Story scenes (below SCENES) are pure functions of
//! (seed, scene, time, progress, pointer), so pause and replay are exact. The cast
//! (CAST_SCENE) is a small spring simulation stepped by elapsed time: no time, no motion.
//!
//! Units: the frame is the unit square, y down; time in seconds.
//! Dots: 5 f32 each — x, y, radius, colour (0 shadow, 0.5 accent, 1 light), alpha.
//! Faces: 12 f32 each — x, y, radius, tone, gaze x, gaze y, blink (0 open, 1 shut),
//! eye glyph (see CAST), squash (+ flat, - tall), eye opening, halo, pulse.
//! Tone 2 is the light colour; tone 3 + i is cast member i's colour.
//! Lights: 4 f32 each — x, y, radius, intensity (0..1). Light 0 is the pin light;
//! the rest are dappled patches, as of sun through leaves.
//! Progress and pointer are negative when absent. `update` returns dots | faces << 16.

use std::f32::consts::{PI, TAU};

pub const MAX: usize = 1024;
pub const SCENES: u32 = 6;
pub const LIGHTS: usize = 6;
pub const FACES: usize = 8;
pub const CAST_SCENE: u32 = 6;

/// A cast member: a colour and a temperament. `pull` > 0 approaches the pointer, < 0 avoids it.
pub struct Persona {
    pub mood: &'static str,
    pub colour: &'static str,
    r: f32,
    home: [f32; 2],
    pull: f32,
    glyph: f32,
    eye: f32,
    bob: f32,
}

/// Eyes are glyphs, drawn by the host: 0 oval, 1 – –, 2 ^ ^, 3 > <, 4 + +, 5 O O, 6 * *.
#[rustfmt::skip]
pub const CAST: [Persona; 6] = [
    Persona { mood: "sleepy",    colour: "#ff6a00", r: 0.1,   home: [0.25, 0.25], pull: 0.0,  glyph: 1.0, eye: 1.0, bob: 0.008 },
    Persona { mood: "happy",     colour: "#e6007e", r: 0.085, home: [0.72, 0.22], pull: 0.4,  glyph: 2.0, eye: 1.0, bob: 0.03 },
    Persona { mood: "flustered", colour: "#0050ff", r: 0.09,  home: [0.22, 0.72], pull: -1.2, glyph: 3.0, eye: 1.0, bob: 0.01 },
    Persona { mood: "dizzy",     colour: "#00b140", r: 0.08,  home: [0.5, 0.5],   pull: -0.3, glyph: 4.0, eye: 1.0, bob: 0.02 },
    Persona { mood: "curious",   colour: "#8f3ffc", r: 0.09,  home: [0.78, 0.66], pull: 1.0,  glyph: 5.0, eye: 1.1, bob: 0.015 },
    Persona { mood: "starry",    colour: "#ffd400", r: 0.075, home: [0.52, 0.86], pull: 0.6,  glyph: 6.0, eye: 1.0, bob: 0.012 },
];

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
pub fn frame(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, d: &mut [f32], face: &mut [f32; 12], light: &mut [f32; LIGHTS * 4]) -> usize {
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
    *face = [fx, fy, fr, 2.0, gx / gl, gy / gl, blink, 0.0, 0.0, 1.0, 0.5 + 0.5 * (t * 0.8).sin(), pulse];
    shine(seed, t, pin, light);
    o.n
}

/// Light 0 is the pin light; the rest drift slowly like sun through leaves.
fn shine(seed: u32, t: f32, pin: (f32, f32, f32), light: &mut [f32; LIGHTS * 4]) {
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
}

/// The cast: springs pull each member home; the pointer attracts or repels by temperament;
/// members keep their distance. A poke makes one hop and react.
pub struct Cast {
    p: [[f32; 2]; 6],
    v: [[f32; 2]; 6],
    poked: [f32; 6],
    last: f32,
}

impl Cast {
    pub const fn new() -> Self {
        Cast { p: [[0.0; 2]; 6], v: [[0.0; 2]; 6], poked: [-1e3; 6], last: -1.0 }
    }

    pub fn poke(&mut self, i: usize) {
        if i < CAST.len() {
            self.poked[i] = self.last;
            self.v[i][1] -= 0.7;
        }
    }

    /// Advance to time `t`, then draw; returns (dots, faces).
    pub fn step(&mut self, t: f32, px: f32, py: f32, d: &mut [f32], faces: &mut [f32], light: &mut [f32; LIGHTS * 4]) -> (usize, usize) {
        if self.last < 0.0 {
            (self.p, self.last) = (CAST.each_ref().map(|q| q.home), t);
        }
        let dt = (t - self.last).clamp(0.0, 0.05);
        self.last = t;
        let here = px >= 0.0 && py >= 0.0;
        for (i, q) in CAST.iter().enumerate() {
            let ([x, y], u) = (self.p[i], i as f32);
            let mut a = [
                (q.home[0] + q.bob * (t * 0.7 + u).sin() - x) * 14.0 - 4.0 * self.v[i][0],
                (q.home[1] + q.bob * (t * 1.3 + 2.0 * u).cos() - y) * 14.0 - 4.0 * self.v[i][1],
            ];
            let mut push = |dx: f32, dy: f32, f: &dyn Fn(f32) -> f32| {
                let dist = dx.hypot(dy).max(1e-3);
                (a[0], a[1]) = (a[0] + dx / dist * f(dist), a[1] + dy / dist * f(dist));
            };
            if here {
                push(px - x, py - y, &|r| q.pull * (0.4 - r).max(0.0) * 20.0 - (q.r + 0.04 - r).max(0.0) * 80.0);
            }
            for (j, o) in CAST.iter().enumerate().filter(|&(j, _)| j != i) {
                push(x - self.p[j][0], y - self.p[j][1], &|r| (q.r + o.r + 0.03 - r).max(0.0) * 60.0);
            }
            for k in 0..2 {
                self.v[i][k] += a[k] * dt;
                self.p[i][k] = (self.p[i][k] + self.v[i][k] * dt).max(q.r).min(1.0 - q.r);
            }
        }
        // The ground: a faint dot field that lifts under the pointer and ripples from the last poke.
        let last = (0..CAST.len()).max_by(|&a, &b| self.poked[a].total_cmp(&self.poked[b])).unwrap_or(0);
        let (since, [lx, ly]) = (t - self.poked[last], self.p[last]);
        let mut o = Out { d, n: 0 };
        grid(18, |x, y| {
            let near = if here { (-((x - px).powi(2) + (y - py).powi(2)) * 60.0).exp() } else { 0.0 };
            let ring = (-((x - lx).hypot(y - ly) - since * 0.5).powi(2) * 400.0).exp() * (-since).exp();
            let w = (near + ring).min(1.0);
            o.dot(x, y, 0.004 + 0.008 * w, 0.5 * w, 0.18 + 0.6 * w);
        });
        for (i, q) in CAST.iter().enumerate() {
            let ([x, y], u, since) = (self.p[i], i as f32, t - self.poked[i]);
            let e = (-since * 2.5).exp();
            let (tx, ty) = if here { (px, py) } else { (0.5 + 0.3 * (t * 0.3 + u).sin(), 0.5 + 0.3 * (t * 0.23 + 2.0 * u).cos()) };
            let away = if here && q.pull < -1.0 { -1.0 } else { 1.0 }; // the shy one looks away
            let (gx, gy) = ((tx - x) * away, (ty - y) * away);
            let gl = gx.hypot(gy).max(1e-3);
            let ph = (t + rnd(7, i as u32) * 4.0) % (3.0 + u * 0.4);
            let blink = if ph < 0.18 { (ph / 0.18 * PI).sin() } else { 0.0 };
            let shake = if q.pull < -1.0 { 0.01 * e * (since * 40.0).sin() } else { 0.0 };
            // A poke squeezes the eyes to > < (the flustered one sees stars); a blink shuts them to – –.
            let glyph = match () {
                _ if e > 0.3 => if q.glyph == 3.0 { 6.0 } else { 3.0 },
                _ if blink > 0.5 => 1.0,
                _ => q.glyph,
            };
            faces[i * 12..i * 12 + 12].copy_from_slice(&[
                x + shake, y, q.r, 3.0 + u, gx / gl, gy / gl, blink, glyph,
                0.3 * e * (since * 14.0).sin(), q.eye + 0.3 * e, 0.0, e,
            ]);
        }
        shine(7, t, (lx - 0.03, ly - 0.04, (-since * 1.5).exp()), light);
        (o.n, CAST.len())
    }
}

// The WebAssembly boundary: the host reads both buffers after each call.
// They live for the module's lifetime and never move; memory never grows.
static mut DOTS: [f32; MAX * 5] = [0.0; MAX * 5];
static mut FACE: [f32; FACES * 12] = [0.0; FACES * 12];
static mut CAST_NOW: Cast = Cast::new();
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
    let (d, f, l, c) = unsafe { (&mut *&raw mut DOTS, &mut *&raw mut FACE, &mut *&raw mut LIGHT, &mut *&raw mut CAST_NOW) };
    let (t, p, px, py) = (ok(t).max(0.0), ok(p), ok(px), ok(py));
    let (n, faces) = match (scene == CAST_SCENE, f.first_chunk_mut()) {
        (true, _) | (_, None) => c.step(t, px, py, d, f, l),
        (false, Some(face)) => (frame(seed, scene, t, p, px, py, d, face, l), 1),
    };
    (n | faces << 16) as u32
}

#[unsafe(no_mangle)]
pub extern "C" fn poke(i: u32) {
    // SAFETY: as in `update`.
    unsafe { (*&raw mut CAST_NOW).poke(i as usize) }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn run(scene: u32, t: f32) -> (Vec<f32>, [f32; 12], usize) {
        let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; 12], [0.0; LIGHTS * 4]);
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
        let (mut d, mut f, mut l) = (vec![0.0; MAX * 5], [0.0; 12], [0.0; LIGHTS * 4]);
        let n = frame(1, 4, 0.0, 1.0, -1.0, -1.0, &mut d, &mut f, &mut l);
        assert_eq!(n, 196);
        assert!((d[0] - 0.5 / 14.0).abs() < 1e-6 && (d[1] - 0.5 / 14.0).abs() < 1e-6);
    }

    #[test]
    fn the_cast_stays_in_frame_and_reacts() {
        let (mut c, mut d, mut f, mut l) = (Cast::new(), vec![0.0; MAX * 5], [0.0; FACES * 12], [0.0; LIGHTS * 4]);
        for k in 0..2000 {
            let t = k as f32 / 60.0;
            if k == 600 {
                c.poke(2);
            }
            let (n, m) = c.step(t, (t * 0.7).sin() * 0.5 + 0.5, 0.5, &mut d, &mut f, &mut l);
            assert!(n == 324 && m == CAST.len() && f.iter().chain(&d[..n * 5]).all(|v| v.is_finite()));
            assert!(f.chunks(12).take(m).all(|q| (q[2]..=1.0 - q[2]).contains(&q[0]) && (q[2]..=1.0 - q[2]).contains(&q[1])));
            if k == 601 {
                assert!(f[2 * 12 + 7] == 6.0 && f[11] < 0.1 && f[2 * 12 + 11] > 0.9, "the poked one reacts alone");
            }
        }
    }

    #[test]
    fn bad_input_is_ignored() {
        assert!(update(1, 0, f32::NAN, f32::INFINITY, f32::NAN, 0.5) > 0);
    }
}
