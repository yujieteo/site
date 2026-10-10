//! Thumbnails: one seed gives one small animated picture (`scene::THUMB`), the same on every
//! device and in every export. Nothing is random at run time: the seed is read as digits, so a
//! known seed always gives the same picture, and the same bounce.
//! Its digits, most significant first, are V…V C B M: variety, character, backdrop, motion.
//! M (units) is the motion: 0 doze, 1 hop, 2 bounce, 3 leap (clean out of the frame and back),
//!   4 stroll (hopping across), 5 trampoline (each hop higher), 6 see-saw (two friends),
//!   7 orbit (round a light), 8 wave (three friends in turn), 9 juggle.
//! B (tens) is the backdrop: 0 polka, 1 ripples (from where it lands), 2 night, 3 hill,
//!   4 sea, 5 rings, 6 rain, 7 halftone, 8 confetti, 9 plain.
//! C (hundreds, mod 5) is the character: sleepy, happy, flustered, dizzy, curious (`scene::CAST`).
//! V (the rest) is hashed into the palette, size and tempo, so 41213 and 51213 are cousins:
//! the same flustered leaper on ripples, in other colours and at another pace.

use crate::scene::{Out, grid, polka, rnd, smooth};
use std::f32::consts::{PI, TAU};

/// The ground line: characters stand on it.
const G: f32 = 0.8;

/// The picture's base, shade, accent and light colours, from the variety digits.
pub fn palette(seed: u32) -> [u32; 4] {
    let (v, h) = (seed / 1000, 360.0 * rnd(seed / 1000, 1));
    let hsl = |h: f32, s: f32, l: f32| {
        let f = |n: f32| {
            let k = (n + h / 30.0) % 12.0;
            l - s * l.min(1.0 - l) * (k - 3.0).min(9.0 - k).clamp(-1.0, 1.0)
        };
        [f(0.0), f(8.0), f(4.0)].iter().fold(0, |c, x| c << 8 | (x * 255.0).round() as u32)
    };
    [hsl(h, 0.34, 0.44), hsl(h + 10.0, 0.45, 0.15), hsl(h + 150.0 + 60.0 * rnd(v, 2), 0.75, 0.62), hsl(h + 50.0, 0.95, 0.85)]
}

/// One body: x, lift off the ground, squash (+ flat, - tall), character, eye glyph (0 its own), gaze.
type Body = (f32, f32, f32, usize, f32, (f32, f32));

/// The frame at time `t`; returns the pin light (x, y, radius, intensity).
pub(crate) fn frame(o: &mut Out, seed: u32, t: f32) -> (f32, f32, f32, f32) {
    let (m, b, c, v) = (seed % 10, seed / 10 % 10, (seed / 100 % 5) as usize, seed / 1000);
    let r = |i: u32| rnd(v, i);
    let (size, t) = (0.09 + 0.035 * r(3), t * (0.85 + 0.3 * r(4)));
    let mut pin = (0.2 + 0.6 * r(5), 0.16, 0.03, 0.35);
    // A hop of height h every `per` seconds from phase `ph`: a parabola, flat on landing and
    // stretched while fast in the air.
    let hop = |h: f32, per: f32, ph: f32| {
        let u = (t / per + ph).rem_euclid(1.0);
        (4.0 * h * u * (1.0 - u), if !(0.06..=0.94).contains(&u) { 0.03 } else { -0.03 * (1.0 - 2.0 * u).abs() })
    };
    let up = (0.5, 0.0);
    let mut cast: Vec<Body> = vec![];
    match m {
        0 => {
            cast.push((0.5, 0.0, 0.02 * (t * 0.8).sin(), c, 1.0, (0.5, 1.0)));
            for k in 0..3 {
                let z = (t * 0.4 + k as f32 / 3.0) % 1.0;
                o.dot(0.6 + 0.1 * z, G - 2.0 * size - 0.2 * z, 0.006 + 0.01 * z, 1.0, 1.0 - z);
            }
        }
        1 | 2 => {
            let (l, s) = if m == 1 { hop(0.05 + 0.04 * r(6), 0.45 + 0.15 * r(7), 0.0) } else { hop(0.25 + 0.15 * r(6), 0.9 + 0.3 * r(7), 0.0) };
            cast.push((0.5, l, s, c, 0.0, up));
        }
        3 => {
            let q = (t * 0.5).rem_euclid(2.0);
            let l = if q < 1.0 { (0.8 + 0.15 * r(6)) * (PI * q).sin() } else { 0.05 * (PI * 4.0 * q).sin().abs() };
            cast.push((0.5, l, -0.04 * l, c, 0.0, up));
        }
        4 => {
            let (l, s) = hop(0.08, 0.5, 0.0);
            let x = -0.15 + 1.3 * (t / 8.0).rem_euclid(1.0);
            cast.push((x, l, s, c, 0.0, (x + 1.0, G - 0.1)));
        }
        5 => {
            let per = 0.7 + 0.2 * r(7);
            let (l, s) = hop(0.08 + 0.18 * (t / per).floor().rem_euclid(4.0), per, 0.0);
            cast.push((0.5, l, s, c, 0.0, up));
        }
        6 => {
            for (i, x) in [0.3f32, 0.7].into_iter().enumerate() {
                let (l, s) = hop(0.22 + 0.1 * r(6), 1.0, 0.5 * i as f32);
                cast.push((x, l, s, (c + i) % 5, 0.0, (1.0 - x, G - 0.2)));
            }
        }
        7 => {
            let a = t * 1.1;
            pin = (0.5, 0.42, 0.04, 0.55 + 0.45 * (t * 3.0).sin().abs());
            let y = 0.42 + 0.2 * a.sin() - 0.03 * (t * 6.0).sin().abs();
            cast.push((0.5 + 0.3 * a.cos(), G - size - y, 0.03 * (t * 6.0).cos(), c, 0.0, (0.5, 0.42)));
        }
        8 => {
            for i in 0..3 {
                let (l, s) = hop(0.16 + 0.06 * r(6), 0.9, i as f32 / 3.0);
                cast.push((0.2 + 0.3 * i as f32, l, s, (c + i) % 5, 0.0, up));
            }
        }
        _ => {
            let (l, s) = hop(0.02, 0.5, 0.0);
            cast.push((0.5, l, s, c, 0.0, (0.5, 0.2)));
            for k in 0..3 {
                let u = (t / 1.5 + k as f32 / 3.0) % 1.0;
                let x = if k % 2 == 0 { 0.36 + 0.28 * u } else { 0.64 - 0.28 * u };
                o.dot(x, G - 1.6 * size - 0.4 * 4.0 * u * (1.0 - u), 0.018, 1.0, 1.0);
            }
        }
    }
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
            o.dot(0.5, G + 0.8, 0.8, 0.5, 1.0);
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
        _ => {}
    }
    // A dotted ground (the hill and the sea are their own), then the characters standing on it.
    for i in 0..24 * (b != 3 && b != 4) as u32 {
        o.dot((i as f32 + 0.5) / 24.0, G + 0.012, 0.004, 0.0, 0.7);
    }
    let s = size * [1.0, 0.85, 0.7][cast.len() - 1];
    for (x, lift, sq, who, glyph, look) in cast {
        o.face(x, G - s - lift, s, who, look, glyph, sq, 0.0);
    }
    pin
}

#[cfg(test)]
mod tests {
    use crate::scene::{MAX, Out, THUMB, frame};

    fn run(seed: u32, t: f32) -> Out { frame(seed, THUMB, t, -1.0, -1.0, -1.0, &[]) }

    #[test]
    fn every_digit_draws_bounded_and_exact() {
        for seed in (0..100).map(|k| 41_200 + k).chain([0, 7, 99_999_999]) {
            for t in [0.0, 1.3, 9.7, 1e5] {
                let o = run(seed, t);
                assert!(!o.faces.is_empty() && o.dots.len() <= MAX && o.dots.iter().flatten().chain(o.faces.iter().flatten()).all(|v| v.is_finite()));
                assert_eq!(run(seed, t).dots, o.dots, "seed {seed} at {t}");
            }
        }
        assert_eq!(super::palette(41_213), super::palette(41_999)); // the variety picks the colours
        assert_ne!(super::palette(41_213), super::palette(51_213));
    }

    #[test]
    fn motions_keep_their_promises() {
        let top = |seed: u32| (0..400).map(|k| run(seed, k as f32 * 0.02).faces[0][1]).fold(f32::MAX, f32::min);
        assert!(top(41_203) < 0.0, "a leaper leaves the frame");
        assert!(top(41_202) > 0.2 && top(41_202) < 0.6, "a bouncer stays in it");
        assert!(top(41_200) > 0.6, "a dozer stays down");
        assert_eq!((run(41_206, 1.0).faces.len(), run(41_208, 1.0).faces.len()), (2, 3));
    }
}
