//! Drawing: an artifact's frame is one display list of flat shapes in tile units. The page's
//! canvas (and so its video) and the PDF writer execute the same list.

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
    ops.iter().flat_map(|op| match op {
        Op::Fill(s, c, a, scr) => [&[0.0][..], &sh(s), &[*c as f32, *a, *scr as u8 as f32]].concat(),
        Op::Clip(Some(s)) => [&[1.0][..], &sh(s), &[0.0; 3]].concat(),
        Op::Clip(None) => vec![2.0; 10],
    }).flat_map(f32::to_le_bytes).collect()
}
