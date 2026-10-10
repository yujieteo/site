//! Malformed input never panics: a fixed-seed fuzz of every entry point over fragments of the
//! notebook syntax, so a failure reproduces exactly.
use engine::{cell, doc, pdf, say, scene};

const BITS: &[&str] = &[
    "---\n", "title: ", "theme: ", "palette: #", "seed: ", "voice: ", "pronounce: ", "\n", "\n\n", "## ", "# ", "{scene=", "t=", "p=", "}", "```", "```rust\n", "```say\n", "```toml\n",
    "$$", "$", "\\frac{", "\\sqrt[", "\\text", "\\mathrm{", "\\sum_", "^{", "_", "{", "}", "\\", "\\left(", "\\right)", "![", "](", "[", ")", "<!--", "-->", "- ", "1. ", "*", "**", "`",
    "let x = ", "slider(\"a\", ", "fn f() {", "//| caption: ", "use ", "é", "∑", "\u{1F600}", " ", "0", "-1", "1e309", "NaN", "\t", "\r", "|", "> ",
];

fn junk(seed: &mut u64, n: usize) -> String {
    (0..n).map(|_| { *seed = seed.wrapping_mul(6364136223846793005).wrapping_add(1442695040888963407); BITS[(*seed >> 33) as usize % BITS.len()] }).collect()
}

#[test]
fn malformed_input_does_not_panic() {
    let mut s = 7;
    for i in 0..200 {
        let src = junk(&mut s, 1 + i % 60);
        let d = doc::parse(&src);
        let cells: Vec<&str> = d.cells().iter().map(|c| c.0).collect();
        let run = doc::Run { out: vec![src.clone(); 2], ctl: vec![src.clone()], map: vec![Some(5); cells.len()], stale: vec![] };
        doc::article(&d, &run, &|p| p.into());
        doc::mathml(&src, i % 2 == 0);
        let _ = cell::order(&cells.iter().map(|c| cell::split(c)).collect::<Vec<_>>());
        cell::stale(&cells, &[&src]);
        cell::hl(&src);
        let lock = junk(&mut s, 8);
        say::plan(&d, &lock);
        say::vtt(&d, &lock, &[vec![f32::NAN; 3], vec![]]);
        say::wav(&d, &lock, &[vec![2.0; 5]]);
        let stage: Vec<f32> = src.bytes().map(|b| [f32::NAN, f32::INFINITY, -1e30, b as f32][b as usize % 4]).collect();
        scene::list(i as u32, i as u32 % 12, f32::MAX, f32::NAN, -1.0, 2.0, &stage, [0; 4]);
        if i % 10 == 0 { pdf::write(&d, &run.out, &stage, &|p| (!p.starts_with("fonts/")).then(|| src.clone().into_bytes()), i / 10 % pdf::FORMS.len()); }
    }
}
