//! Thumbnails: one seed gives one small animated picture (`scene::THUMB`), the same on every
//! device and in every export. Nothing is random at run time: the seed is split by remainders, so
//! a known seed always gives the same picture, and the same bounce.
//! From the least significant part: M motion (seed % 20), B backdrop (/ 20 % 20), C character
//! (/ 400 % 15), K composition (/ 6000 % 6) and V variety (/ 36000). The variety picks the tint of
//! the backdrop's dots (V % 3), the tempo (V / 3 % 3), the size (V / 9 % 3), a mirror (V / 27 % 2)
//! and the small details, so 41213 and 41213 + 36000 are cousins: the same picture, in another
//! tint, size or pace. That is 20 * 20 * 15 * 6 * 54 = 1,944,000 kinds of picture.
//! Every colour is a token of the reader's theme (`look`); a character keeps 3:1 against its backdrop.

use crate::scene::{Out, grid, mix, polka, rnd, smooth};
use std::f32::consts::{PI, TAU};

/// The ground line: characters stand on it.
const G: f32 = 0.8;

/// What each part picks, by its value.
pub const MOTIONS: [&str; 20] = [
    "doze", "hop", "bounce", "leap", "stroll", "trampoline", "orbit", "dance", "juggle", "skate",
    "pulse", "peek", "zigzag", "swing", "hover", "chase", "startle", "roll", "bloom", "sway",
];
pub const BACKDROPS: [&str; 20] = [
    "polka", "ripples", "night", "hill", "sea", "rings", "rain", "halftone", "confetti", "plain",
    "snow", "fireflies", "stripes", "checker", "spiral", "dunes", "sunrise", "mountains", "wave grid", "bubbles",
];
pub const COMPOSITIONS: [&str; 6] = ["solo", "pair", "trio", "line", "mirror", "pet"];
/// A mood (the eyes: sleepy, happy, flustered, dizzy, curious) and a tint (the theme's accent, warm, green,
/// accent text or second text colour), in the order `character % 5` and `(character + character / 5) % 5`.
pub const CHARACTERS: [&str; 15] = [
    "sleepy accent", "happy warm", "flustered green", "dizzy bright", "curious soft",
    "sleepy warm", "happy green", "flustered bright", "dizzy soft", "curious accent",
    "sleepy green", "happy bright", "flustered soft", "dizzy accent", "curious warm",
];

/// A seed's parts: motion, backdrop, character, composition and variety.
pub fn parts(seed: u32) -> (usize, usize, usize, usize, u32) {
    let s = seed as usize;
    (s % 20, s / 20 % 20, s / 400 % 15, s / 6000 % 6, seed / 36000)
}

/// Each composition's bodies: resting x, scale, and phase (in 3 s) of their motion.
const COMPS: [&[(f32, f32, f32)]; 6] = [
    &[(0.5, 1.0, 0.0)],
    &[(0.32, 0.85, 0.0), (0.68, 0.85, 0.35)],
    &[(0.2, 0.7, 0.0), (0.5, 0.7, 0.33), (0.8, 0.7, 0.66)],
    &[(0.14, 0.6, 0.0), (0.38, 0.6, 0.12), (0.62, 0.6, 0.24), (0.86, 0.6, 0.36)],
    &[(0.3, 0.85, 0.0), (0.3, 0.85, 0.0)],
    &[(0.38, 1.0, 0.0), (0.7, 0.5, 0.4)],
];

fn lum(c: u32) -> f32 {
    let f = |s: u32| { let v = (c >> s & 255) as f32 / 255.0; if v <= 0.03928 { v / 12.92 } else { ((v + 0.055) / 1.055).powf(2.4) } };
    0.2126 * f(16) + 0.7152 * f(8) + 0.0722 * f(0)
}

/// The WCAG contrast ratio of two colours.
pub fn ratio(a: u32, b: u32) -> f32 {
    let (x, y) = (lum(a), lum(b));
    (x.max(y) + 0.05) / (x.min(y) + 0.05)
}

/// The picture's colours from a theme's 11 tokens (`theme::TOKENS` order): the base, shade, accent and light of the
/// tile (background, line, a tint, warm), then 5 bodies. A body moves from its token towards the text colour until it
/// has 3:1 against the background, the surface and the faint hill.
pub fn look(seed: u32, th: &[u32; 11]) -> ([u32; 4], [u32; 5]) {
    let tint = [6, 9, 7][(parts(seed).4 % 3) as usize];
    let against = [th[0], th[1], mix(th[0], th[5], 0.34)];
    let body = |t: usize| (0..=10).map(|w| mix(th[t], th[2], w as f32 / 10.0)).find(|&c| against.iter().all(|&a| ratio(c, a) >= 3.0)).unwrap_or(th[2]);
    ([th[0], th[5], th[tint], th[8]], [6, 8, 9, 7, 3].map(body))
}

/// The eyes of a body: the background or the text colour, whichever shows better on it.
pub fn ink(body: u32, th: &[u32; 11]) -> u32 { if ratio(body, th[0]) >= ratio(body, th[2]) { th[0] } else { th[2] } }

/// One body in motion `m` at time `t`, resting at `sx`: x, lift off the ground, squash (+ flat, - tall) and pulse.
fn step(m: usize, t: f32, sx: f32, h: f32) -> (f32, f32, f32, f32) {
    // A hop of height `a` every `per` seconds: a parabola, flat on landing and stretched while fast in the air.
    let hop = |a: f32, per: f32| {
        let u = (t / per).rem_euclid(1.0);
        (4.0 * a * u * (1.0 - u), if !(0.06..=0.94).contains(&u) { 0.03 } else { -0.03 * (1.0 - 2.0 * u).abs() })
    };
    let (mut x, mut pulse) = (sx, 0.0);
    let (lift, sq) = match m {
        0 => (0.0, 0.02 * (t * 0.8).sin()),
        1 => hop(0.05 + 0.04 * h, 0.5),
        2 => hop(0.25 + 0.15 * h, 1.0),
        3 => {
            let q = (t * 0.5).rem_euclid(2.0);
            let l = if q < 1.0 { (0.8 + 0.15 * h) * (PI * q).sin() } else { 0.05 * (2.0 * TAU * q).sin().abs() };
            (l, -0.04 * l)
        }
        4 => { x = -0.15 + 1.3 * (t / 8.0 + sx).rem_euclid(1.0); hop(0.08, 0.5) }
        5 => { let per = 0.7 + 0.2 * h; hop(0.08 + 0.18 * (t / per).floor().rem_euclid(4.0), per) }
        6 => {
            let a = t * 1.1 + sx * TAU;
            x = 0.5 + 0.3 * a.cos();
            (0.42 + 0.2 * a.sin() - 0.03 * (t * 6.0).sin().abs(), 0.03 * (t * 6.0).cos())
        }
        7 => { x = sx + 0.1 * (t * 2.0).sin(); hop(0.07, 0.8) }
        8 => hop(0.02, 0.5),
        9 => { x = sx + 0.3 * (t * 0.8).sin(); (0.0, 0.03 * (t * 1.6).cos()) }
        10 => { pulse = (t * 2.0).sin().abs().powi(3); (0.0, 0.03 * pulse) }
        11 => {
            let u = (t / 2.0).rem_euclid(1.0);
            let l = 0.3 * (smooth(u * 5.0) - smooth((u - 0.6) * 5.0));
            (l, if l > 0.01 { -0.03 } else { 0.03 })
        }
        12 => { x = sx + 0.25 * ((t * 0.5).rem_euclid(2.0) - 1.0).abs() * 2.0 - 0.25; hop(0.1, 0.4) }
        13 => { let a = 0.9 * (t * 1.3).sin(); x = sx + 0.3 * a.sin(); (0.3 * (1.0 - a.cos()), 0.0) }
        14 => (0.2 + 0.06 * (t * 1.5).sin(), 0.01 * (t * 3.0).sin()),
        15 => { x = 0.12 + 0.76 * smooth(0.5 + 0.5 * (0.7 * t + sx * TAU).sin()); hop(0.05, 0.25) }
        16 => {
            let u = t.rem_euclid(3.0) / 0.6;
            x = sx + 0.005 * (t * 40.0).sin();
            if u < 1.0 { (1.2 * u * (1.0 - u), -0.03) } else { (0.0, 0.03) }
        }
        17 => { x = 0.5 + 0.35 * (t * 0.9 + sx * 3.0).sin(); (0.0, 0.03 * (t * 8.0).sin()) }
        18 => { pulse = 0.5 + 0.5 * (t * 3.0).sin(); (0.0, 0.01) }
        _ => { x = sx + 0.03 * (t * 1.2).sin(); (0.02 * ((t * 2.4).sin() + 1.0), -0.03) }
    };
    (x, lift, sq, pulse)
}

/// The frame at time `t`; returns the pin light (x, y, radius, intensity).
pub(crate) fn frame(o: &mut Out, seed: u32, t: f32) -> (f32, f32, f32, f32) {
    let (m, b, c, k, v) = parts(seed);
    let r = |i: u32| rnd(v, i);
    let (size, t) = ([0.085, 0.11, 0.135][(v / 9 % 3) as usize], t * [0.8, 1.0, 1.3][(v / 3 % 3) as usize]);
    let mut pin = (0.2 + 0.6 * r(5), 0.16, 0.03, 0.35);
    if m == 6 { pin = (0.5, 0.42, 0.04, 0.55 + 0.45 * (t * 3.0).sin().abs()); }
    // The bodies: x, lift, squash, pulse, scale and character.
    let mut cast: Vec<(f32, f32, f32, f32, f32, usize)> = COMPS[k].iter().enumerate().map(|(i, &(sx, sc, ph))| {
        let (x, l, s, p) = step(m, t + 3.0 * ph, sx, r(6));
        (if k == 4 && i == 1 { 1.0 - x } else { x }, l, s, p, sc, (c + 7 * i) % 15)
    }).collect();
    if v / 27 % 2 == 1 { cast.iter_mut().for_each(|q| q.0 = 1.0 - q.0) }
    let (cx, lift) = (cast[0].0, cast[0].1);
    match b {
        0 => polka(o, t, 0.9, |i| r(10 + i), |i| r(200 + i)),
        // Rings run out from where the first character lands, brightest just after it touches down.
        1 => grid(16, |x, y| {
            let d = (x - cx).hypot(y - G);
            let w = (d * 22.0 - t * 3.0).cos().max(0.0) * (-d * 2.5).exp() * (1.0 - 2.0 * lift).max(0.3);
            o.dot(x, y, 0.005 + 0.016 * w, w, 0.3 + 0.7 * w);
        }),
        2 => {
            pin = (0.78, 0.2, 0.05, 0.9);
            for i in 0..18 {
                let tw = 0.5 + 0.5 * (t * 2.0 + i as f32 * 1.7).sin();
                o.dot(0.04 + 0.92 * r(10 + i), 0.04 + 0.6 * r(40 + i), 0.004 + 0.004 * tw, 1.0, 0.6 + 0.4 * tw);
            }
        }
        3 => {
            pin = (0.8, 0.18, 0.06, 1.0);
            o.dot(0.5, G + 0.8, 0.8, 0.0, 0.3);
            for i in 0..40 {
                let a = (i as f32 / 39.0 - 0.5) * 1.2;
                o.dot(0.5 + 0.8 * a.sin(), G + 0.8 - 0.8 * a.cos(), 0.005, 0.0, 0.9);
            }
            o.dot(0.15, G + 0.06, 0.012, 1.0, 1.0);
        }
        4 => {
            for row in 0..6 {
                for col in 0..20 {
                    let (x, k) = (col as f32 / 19.0, row as f32);
                    o.dot(x, 0.5 + 0.08 * k + 0.025 * (x * 9.0 + t * 1.5 + k).sin(), 0.008 + 0.002 * k, 0.5 * (row % 2) as f32, 0.45 + 0.09 * k);
                }
            }
        }
        5 => {
            for (k, n) in [24, 36, 48].into_iter().enumerate() {
                let (rad, turn) = (0.18 + 0.12 * k as f32, t * (0.3 - 0.2 * k as f32));
                for i in 0..n {
                    let a = TAU * i as f32 / n as f32 + turn;
                    o.dot(0.5 + rad * a.cos(), 0.5 + rad * a.sin(), 0.007, (k % 2) as f32 * 0.5, 0.6);
                }
            }
        }
        6 => {
            for i in 0..40 {
                let y = (r(100 + i) + t * (0.25 + 0.2 * r(140 + i))) % 1.1 - 0.05;
                o.dot(r(60 + i), y, 0.006, 1.0, 0.6);
            }
        }
        7 => grid(14, |x, y| o.dot(x, y, 0.004 + 0.02 * smooth(0.6 * (x + y) + 0.15 * (t * 0.5).sin() - 0.2), 0.0, 0.9)),
        8 => {
            for i in 0..36 {
                let (x, y) = (r(10 + i) + 0.02 * (t + i as f32).sin(), r(50 + i) + 0.02 * (t * 0.8 + i as f32).cos());
                o.dot(x, y, 0.008 + 0.008 * r(90 + i), (r(130 + i) * 3.0).floor() / 2.0, 0.9);
            }
        }
        10 => {
            for i in 0..40 {
                let y = (r(100 + i) + t * (0.06 + 0.08 * r(140 + i))) % 1.1 - 0.05;
                o.dot(r(60 + i) + 0.02 * (t + i as f32).sin(), y, 0.005 + 0.006 * r(90 + i), 1.0, 0.9);
            }
        }
        11 => {
            for i in 0..20 {
                let (u, w) = (0.5 + r(i), 0.5 + 0.5 * (t * 3.0 * (0.5 + r(i)) + i as f32).sin());
                o.dot(0.5 + 0.45 * (t * 0.2 * u + r(40 + i) * TAU).sin(), 0.1 + 0.6 * (0.5 + 0.5 * (t * 0.15 * (0.5 + r(80 + i)) + r(120 + i) * 7.0).sin()), 0.006, 1.0 - 0.5 * (i % 2) as f32, 0.3 + 0.7 * w);
            }
        }
        12 => {
            for row in 0..7 {
                for col in 0..20 {
                    let x = (col as f32 / 19.0 + t * 0.05 * (1 - 2 * (row % 2)) as f32).rem_euclid(1.0);
                    o.dot(x, 0.1 + 0.1 * row as f32, 0.01, (row % 3) as f32 / 2.0, 0.7);
                }
            }
        }
        13 => grid(12, |x, y| {
            let on = ((x * 12.0).floor() + (y * 12.0).floor()) as i32 % 2 == 0;
            o.dot(x, y, if on { 0.022 + 0.004 * (t * 2.0 + x * 6.0).sin() } else { 0.006 }, 0.5 * on as u8 as f32, 0.8);
        }),
        14 => {
            for i in 0..90 {
                let (a, d) = (i as f32 * 2.399_963 + t * 0.15, 0.46 * (i as f32 / 90.0).sqrt());
                o.dot(0.5 + d * a.cos(), 0.5 + d * a.sin(), 0.004 + 0.01 * i as f32 / 90.0, (i % 3) as f32 / 2.0, 0.8);
            }
        }
        15 => {
            for row in 0..4 {
                for col in 0..22 {
                    let (x, w) = (col as f32 / 21.0, row as f32);
                    o.dot(x, 0.5 + 0.08 * w + 0.04 * (x * 5.0 + 2.0 * w + t * 0.4).sin(), 0.007 + 0.002 * w, (row % 3) as f32 / 2.0, 0.4 + 0.15 * w);
                }
            }
        }
        16 => {
            pin = (0.5, G - 0.02, 0.06 + 0.02 * t.sin(), 1.0);
            for ring in 1..4 {
                let (n, rad) = (10 + 4 * ring, 0.14 * ring as f32 + 0.02 * (t * 1.5 - ring as f32).sin());
                for i in 0..n {
                    let a = PI * i as f32 / (n - 1) as f32;
                    o.dot(0.5 + rad * a.cos(), G - rad * a.sin(), 0.008, 0.5 * (ring % 2) as f32, 0.9 - 0.2 * ring as f32);
                }
            }
        }
        17 => {
            pin = (0.78, 0.2, 0.05, 0.8);
            for ridge in 0..2 {
                for col in 0..24 {
                    let x = col as f32 / 23.0;
                    let peak = 1.0 - 2.0 * ((x * (2 + ridge) as f32).rem_euclid(1.0) - 0.5).abs();
                    let y = 0.75 + 0.06 * ridge as f32 - 0.3 * peak;
                    for d in 0..3 {
                        o.dot(x, y + 0.06 * d as f32, 0.008, 0.5 * ridge as f32, 0.9 - 0.3 * d as f32);
                    }
                }
            }
        }
        18 => grid(14, |x, y| {
            let w = (x * 8.0 + t * 2.0 + y * 3.0).sin();
            o.dot(x, y + 0.02 * w, 0.008 + 0.004 * w.abs(), 0.5 * (w > 0.0) as u8 as f32, 0.8);
        }),
        19 => {
            for i in 0..16 {
                let y = 1.05 - (r(100 + i) + t * (0.08 + 0.1 * r(140 + i))).rem_euclid(1.0) * 1.1;
                o.dot(r(60 + i) + 0.02 * (t * 1.3 + i as f32).sin(), y, 0.01 + 0.025 * r(90 + i), 0.0, 0.3);
            }
        }
        _ => {}
    }
    // A dotted ground (the hill and the sea are their own), then what each motion adds, then the characters.
    for i in 0..24 * (b != 3 && b != 4) as u32 {
        o.dot((i as f32 + 0.5) / 24.0, G + 0.012, 0.004, 0.0, 0.7);
    }
    for &(x, lift, _, _, sc, _) in &cast {
        let s = size * sc;
        match m {
            0 => for j in 0..3 {
                let z = (t * 0.4 + j as f32 / 3.0) % 1.0;
                o.dot(x + 0.1 + 0.1 * z, G - 2.0 * s - 0.2 * z, (0.006 + 0.01 * z) * sc, 1.0, 1.0 - z);
            },
            8 => for j in 0..3 {
                let u = (t / 1.5 + j as f32 / 3.0) % 1.0;
                let bx = if j % 2 == 0 { x - 0.14 * sc + 0.28 * sc * u } else { x + 0.14 * sc - 0.28 * sc * u };
                o.dot(bx, G - 1.6 * s - 0.4 * 4.0 * u * (1.0 - u), 0.018 * sc, 1.0, 1.0);
            },
            14 => o.dot(x, G + 0.012, 0.03 * sc / (1.0 + 4.0 * lift), 0.0, 0.6),
            18 => for j in 0..12 {
                let (u, a) = ((t / 2.0).rem_euclid(1.0), TAU * j as f32 / 12.0);
                o.dot(x + s * (1.3 + 1.8 * u) * a.cos(), G - s + s * (1.3 + 1.8 * u) * a.sin() * 0.6, 0.008 * sc, 0.5, 1.0 - u);
            },
            _ => {}
        }
    }
    for (i, &(x, lift, sq, pulse, sc, who)) in cast.iter().enumerate() {
        let s = size * sc;
        let look = if k >= 4 { (cast[1 - i].0, G - 0.2) } else if matches!(b, 2 | 3 | 16) || m == 6 { (pin.0, pin.1) } else { (0.5, 0.0) };
        o.face(x, G - s - lift, s, (who + who / 5) % 5, look, (who % 5 + 1) as f32, sq, pulse);
    }
    pin
}

#[cfg(test)]
mod tests {
    use crate::scene::{MAX, Out, THUMB, frame};
    use crate::theme::{THEMES, palette};

    fn run(seed: u32, t: f32) -> Out { frame(seed, THUMB, t, -1.0, -1.0, -1.0, &[]) }

    #[test]
    fn every_part_draws_bounded_and_exact() {
        let seeds = (0..20 * 20 * 6).map(|k| k * 15 * 7 % 36_000 + 36_000 * (k % 3)).chain([0, 7, 41_213, u32::MAX]);
        for seed in seeds {
            for t in [0.0, 1.3, 9.7, 1e5] {
                let o = run(seed, t);
                assert!(!o.faces.is_empty() && o.dots.len() <= MAX && o.dots.iter().flatten().chain(o.faces.iter().flatten()).all(|v| v.is_finite()), "seed {seed} at {t}");
                assert_eq!(run(seed, t).dots, o.dots, "seed {seed} at {t}");
            }
        }
        let (m, b, c, k, v) = super::parts(u32::MAX);
        assert!(m < 20 && b < 20 && c < 15 && k < 6 && v == u32::MAX / 36_000);
    }

    #[test]
    fn motions_keep_their_promises() {
        let top = |seed: u32| (0..400).map(|k| run(seed, k as f32 * 0.02).faces[0][1]).fold(f32::MAX, f32::min);
        assert!(top(3) < 0.0, "a leaper leaves the frame");
        assert!(top(2) > 0.2 && top(2) < 0.6, "a bouncer stays in it");
        assert!(top(0) > 0.6, "a dozer stays down");
        assert_eq!((run(1 + 6000, 1.0).faces.len(), run(1 + 12_000, 1.0).faces.len(), run(1 + 18_000, 1.0).faces.len()), (2, 3, 4));
        let distinct = (0..20).map(|m| crate::draw::encode(&crate::scene::list(m, THUMB, 2.5, -1.0, -1.0, -1.0, &[], [0; 4], palette("site-light")))).collect::<std::collections::HashSet<_>>();
        assert_eq!(distinct.len(), 20, "every motion differs");
    }

    /// Every colour is a theme token; bodies keep 3:1 against the backdrop in all 38 schemes; themes recolour live.
    #[test]
    fn colours_come_from_the_theme() {
        let mut th = [0x123456; 11];
        let list = |seed: u32, th: [u32; 11]| crate::scene::list(seed, THUMB, 2.5, -1.0, -1.0, -1.0, &[], [1, 2, 3, 4], th);
        for seed in [0, 41_213, 77_189 + 36_000 * 4, 3 + 20 * 3] {
            let ops = list(seed, th);
            assert!(ops.iter().all(|op| !matches!(op, crate::draw::Op::Fill(_, c, ..) if *c != 0x123456)), "seed {seed}");
        }
        for (_, l, d, ..) in THEMES {
            for id in [l, d] {
                th = palette(id);
                for seed in 0..5 {
                    let (_, bodies) = super::look(seed * 36_000 + seed, &th);
                    for c in bodies {
                        for back in [th[0], th[1]] {
                            assert!(super::ratio(c, back) >= 3.0, "{id}: body {c:06x} on {back:06x}");
                        }
                    }
                }
            }
        }
        assert_ne!(crate::draw::encode(&list(41_213, palette("rose-pine"))), crate::draw::encode(&list(41_213, palette("solarized-light"))));
    }
}
