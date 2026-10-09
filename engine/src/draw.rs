//! Drawing: an artifact's frame is one display list of flat shapes in tile units. The page
//! executes it on a canvas; the video rasteriser and the PDF writer draw the same list.

#[derive(Clone, Copy, Debug)]
pub enum Sh {
    Rect(f32, f32, f32, f32, f32), // x, y, w, h, corner radius
    Ell(f32, f32, f32, f32),       // centre, radii
    Seg(f32, f32, f32, f32, f32),  // ends, width
    Ring(f32, f32, f32, f32),      // centre, radius, width
}

#[derive(Debug)]
pub enum Op {
    Fill(Sh, u32, f32, bool), // shape, rgb, alpha, screen blend
    Clip(Option<Sh>),
}

/// The list as f32s for the page's canvas: kind (0 fill, 1 clip, 2 unclip), shape (0 rect,
/// 1 ellipse, 2 segment, 3 ring), five shape numbers, rgb, alpha, screen.
pub fn encode(ops: &[Op]) -> Vec<u8> {
    let sh = |s: &Sh| match *s {
        Sh::Rect(a, b, c, d, e) => [0.0, a, b, c, d, e],
        Sh::Ell(a, b, c, d) => [1.0, a, b, c, d, 0.0],
        Sh::Seg(a, b, c, d, e) => [2.0, a, b, c, d, e],
        Sh::Ring(a, b, c, d) => [3.0, a, b, c, d, 0.0],
    };
    let mut o = vec![];
    for op in ops {
        let v: Vec<f32> = match op {
            Op::Fill(s, c, a, scr) => [&[0.0][..], &sh(s), &[*c as f32, *a, *scr as u8 as f32]].concat(),
            Op::Clip(Some(s)) => [&[1.0][..], &sh(s), &[0.0; 3]].concat(),
            Op::Clip(None) => vec![2.0; 10],
        };
        o.extend(v.iter().flat_map(|f| f.to_le_bytes()));
    }
    o
}

/// Signed distance from (x, y) to a shape, in tile units.
fn sd(s: &Sh, x: f32, y: f32) -> f32 {
    match *s {
        Sh::Rect(rx, ry, w, h, c) => {
            let (qx, qy) = ((x - rx - w / 2.0).abs() - w / 2.0 + c, (y - ry - h / 2.0).abs() - h / 2.0 + c);
            qx.max(0.0).hypot(qy.max(0.0)) + qx.max(qy).min(0.0) - c
        }
        Sh::Ell(cx, cy, a, b) => (((x - cx) / a).hypot((y - cy) / b) - 1.0) * a.min(b),
        Sh::Seg(ax, ay, bx, by, w) => {
            let (dx, dy) = (bx - ax, by - ay);
            let k = (((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy).max(1e-12)).clamp(0.0, 1.0);
            (x - ax - k * dx).hypot(y - ay - k * dy) - w / 2.0
        }
        Sh::Ring(cx, cy, r, w) => ((x - cx).hypot(y - cy) - r).abs() - w / 2.0,
    }
}

fn bounds(s: &Sh) -> [f32; 4] {
    match *s {
        Sh::Rect(x, y, w, h, _) => [x, y, x + w, y + h],
        Sh::Ell(x, y, a, b) => [x - a, y - b, x + a, y + b],
        Sh::Seg(ax, ay, bx, by, w) => [ax.min(bx) - w, ay.min(by) - w, ax.max(bx) + w, ay.max(by) + w],
        Sh::Ring(x, y, r, w) => [x - r - w, y - r - w, x + r + w, y + r + w],
    }
}

/// Rasterise a list into `out` as w×w straight-alpha RGBA, for video. The tile fills the square
/// except for `bleed` on every side, where characters may stray. Antialiasing is analytic coverage.
pub fn raster(ops: &[Op], w: usize, bleed: f32, out: &mut Vec<u8>) {
    let s = w as f32 / (1.0 + 2.0 * bleed);
    let mut px = vec![[0f32; 4]; w * w];
    let mut clip: Option<Sh> = None;
    for op in ops {
        let (sh, c, a, screen) = match op {
            Op::Clip(c) => { clip = *c; continue; }
            Op::Fill(sh, c, a, screen) => (sh, *c, *a, *screen),
        };
        let mut b = bounds(sh);
        if let Some(k) = &clip {
            let k = bounds(k);
            b = [b[0].max(k[0]), b[1].max(k[1]), b[2].min(k[2]), b[3].min(k[3])];
        }
        let span = |lo: f32, hi: f32| (((lo + bleed) * s - 1.0).max(0.0) as usize, (((hi + bleed) * s + 1.0).max(0.0) as usize).min(w));
        let ((x0, x1), (y0, y1)) = (span(b[0], b[2]), span(b[1], b[3]));
        let rgb = [(c >> 16) as f32 / 255.0, ((c >> 8) & 255) as f32 / 255.0, (c & 255) as f32 / 255.0];
        let cover = |sh: &Sh, x: f32, y: f32| (0.5 - sd(sh, x, y) * s).clamp(0.0, 1.0);
        // 8×8 blocks: skip those wholly outside, fill those wholly inside without distances.
        let reach = 6.0 / s;
        for by in (y0..y1).step_by(8) {
            for bx in (x0..x1).step_by(8) {
                let (cx, cy) = ((bx as f32 + 4.0) / s - bleed, (by as f32 + 4.0) / s - bleed);
                let (d, dc) = (sd(sh, cx, cy), clip.as_ref().map_or(-1.0, |k| sd(k, cx, cy)));
                if d > reach || dc > reach {
                    continue;
                }
                let full = d < -reach && dc < -reach;
                for j in by..(by + 8).min(y1) {
                    let y = (j as f32 + 0.5) / s - bleed;
                    let row = &mut px[j * w + bx..j * w + (bx + 8).min(x1)];
                    for (i, d) in (bx..).zip(row) {
                        let k = if full { a } else {
                            let x = (i as f32 + 0.5) / s - bleed;
                            a * cover(sh, x, y) * clip.as_ref().map_or(1.0, |cl| cover(cl, x, y))
                        };
                        if screen {
                            (0..3).for_each(|n| d[n] += k * rgb[n] * (d[3] - d[n]));
                        } else if k >= 1.0 {
                            *d = [rgb[0], rgb[1], rgb[2], 1.0];
                        } else if k > 0.0 {
                            *d = [rgb[0] * k + d[0] * (1.0 - k), rgb[1] * k + d[1] * (1.0 - k), rgb[2] * k + d[2] * (1.0 - k), k + d[3] * (1.0 - k)];
                        }
                    }
                }
            }
        }
    }
    out.resize(w * w * 4, 0);
    for (o, p) in out.chunks_exact_mut(4).zip(&px) {
        let a = p[3].clamp(0.0, 1.0);
        let k = if a > 0.0 { 255.0 / a } else { 0.0 };
        o.copy_from_slice(&[(p[0] * k).min(255.0) as u8, (p[1] * k).min(255.0) as u8, (p[2] * k).min(255.0) as u8, (a * 255.0 + 0.5) as u8]);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn rasters_are_exact() {
        let mut px = vec![];
        raster(&[Op::Fill(Sh::Rect(0.0, 0.0, 1.0, 1.0, 0.0), 0x336699, 1.0, false)], 4, 0.0, &mut px);
        assert_eq!(&px[..4], &[0x33, 0x66, 0x99, 255]);
    }
}
