//! PDF: the four print forms from the same parse, cell outputs and scenes as the page.
//! Fonts are the embedded OpenType (CFF) subsets, addressed by glyph ID with a ToUnicode map;
//! scenes are their display lists as vector paths; plots are the cells' own SVG; PNGs (grey,
//! RGB or palette; transparency as a colour key, or the palette's leading entries under half
//! alpha) pass through undecoded. Geometry is fixed per form and nothing reads a clock, so
//! equal input gives equal bytes.

use crate::{cell, doc::{self, B, Doc, M, Sp}, draw::{Op, Sh}, pack, scene, theme};
use std::collections::BTreeMap;

pub const FORMS: [&str; 4] = ["notebook", "slides", "handout", "article"];
/// Portrait page: width, height, margin above and below, margin either side (points).
const A4: (f32, f32, f32, f32) = (595.28, 841.89, 56.69, 62.36);

/// Font slots (`St.0`): body, heading, mono, maths.
const FILES: [&str; 4] = ["sans", "sans", "mono", "math"];

fn be(b: &[u8], o: usize, n: usize) -> usize { b.get(o..o + n).map_or(0, |s| s.iter().fold(0, |a, &x| a << 8 | x as usize)) }

fn rgb(c: u32) -> String { format!("{:.3} {:.3} {:.3}", (c >> 16) as f32 / 255.0, ((c >> 8) & 255) as f32 / 255.0, (c & 255) as f32 / 255.0) }

fn stream(dict: &str, data: &[u8]) -> Vec<u8> { [format!("<<{dict}/Length {}>>stream\n", data.len()).as_bytes(), data, b"\nendstream"].concat() }

/// A string as hex UTF-16 units.
fn utf16(s: &str) -> String { s.encode_utf16().map(|u| format!("{u:04X}")).collect() }

/// An OpenType font: character map, advances, metrics (bbox, ascent, descent), glyphs used.
struct Font { data: Vec<u8>, map: BTreeMap<u32, u16>, used: BTreeMap<u16, char>, hm: usize, nh: usize, m: [i16; 6] }

impl Font {
    fn new(data: Vec<u8>) -> Font {
        let b = &data;
        let t = |tag: &[u8]| (0..be(b, 4, 2)).map(|i| 12 + 16 * i).find(|&o| b.get(o..o + 4) == Some(tag)).map_or(0, |o| be(b, o + 8, 4));
        let (cm, hh, mut map) = (t(b"cmap"), t(b"hhea"), BTreeMap::new());
        for o in (0..be(b, cm + 2, 2)).map(|i| cm + be(b, cm + 8 + 8 * i, 4)) {
            if be(b, o, 2) == 12 {
                for q in (0..be(b, o + 12, 4)).map(|g| o + 16 + 12 * g) {
                    (be(b, q, 4)..=be(b, q + 4, 4)).for_each(|c| _ = map.insert(c as u32, (be(b, q + 8, 4) + c - be(b, q, 4)) as u16));
                }
            } else if be(b, o, 2) == 4 {
                let n = be(b, o + 6, 2) / 2;
                for s in 0..n {
                    let f = |k: usize| be(b, o + 14 + 2 * s + k * 2 * n + 2 * (k > 0) as usize, 2);
                    for c in f(1)..=f(0).min(0xfffe) {
                        let g = if f(3) == 0 { c } else { be(b, o + 16 + 6 * n + 2 * s + f(3) + 2 * (c - f(1)), 2) };
                        map.insert(c as u32, if f(3) != 0 && g == 0 { 0 } else { ((g + f(2)) & 0xffff) as u16 });
                    }
                }
            }
        }
        let hd = t(b"head");
        let m = [hd + 36, hd + 38, hd + 40, hd + 42, hh + 4, hh + 6].map(|o| be(b, o, 2) as u16 as i16);
        Font { hm: t(b"hmtx"), nh: be(b, hh + 34, 2).max(1), map, used: BTreeMap::new(), m, data }
    }
    fn adv(&self, g: usize) -> usize { be(&self.data, self.hm + 4 * g.min(self.nh - 1), 2) }
}

/// Text style: font slot (0 body, 1 heading, 2 mono, 3 maths), size, colour, bits (1 bold, 2 italic).
#[derive(Clone, Copy)]
struct St(usize, f32, u32, u8);
type Piece = (St, String, Option<String>, Option<M>);
/// A maths box: width, ascent, descent, then glyph runs and stroked paths (offsets, y up).
#[derive(Default)]
struct Bx(f32, f32, f32, Vec<(f32, f32, f32, String)>, Vec<(Vec<(f32, f32)>, f32)>);

impl Bx {
    fn place(&mut self, b: Bx, dx: f32, dy: f32) {
        (self.0, self.1, self.2) = (self.0.max(dx + b.0), self.1.max(dy + b.1), self.2.max(b.2 - dy));
        self.3.extend(b.3.into_iter().map(|(x, y, s, t)| (x + dx, y + dy, s, t)));
        self.4.extend(b.4.into_iter().map(|(p, w)| (p.into_iter().map(|(x, y)| (x + dx, y + dy)).collect(), w)));
    }
    fn with(mut self, b: Bx, dx: f32, dy: f32) -> Bx { self.place(b, dx, dy); self }
}

fn italic(c: char) -> char {
    let k = |base: u32, from: char| char::from_u32(base + c as u32 - from as u32).unwrap_or(c);
    match c {
        'h' => 'ℎ', 'ϵ' => '𝜖', 'ϕ' => '𝜙', // Unicode's italic h is Planck's constant
        'a'..='z' => k(0x1d44e, 'a'), 'A'..='Z' => k(0x1d434, 'A'), 'α'..='ω' => k(0x1d6fc, 'α'), _ => c,
    }
}

/// HTML as text: each `<` drops what follows up to its `>`, and the escapes are undone.
fn strip(h: &str) -> String {
    let s: String = h.split('<').enumerate().map(|(i, p)| if i == 0 { p } else { p.split_once('>').map_or("", |x| x.1) }).collect();
    s.replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", "\"").replace("&amp;", "&")
}

/// The writer: page geometry (width, height, margin; column left and width), the cursor's y
/// (from the top), pages as (content, annotations), and the shared resources.
struct Pdf<'a> {
    get: &'a dyn Fn(&str) -> Option<Vec<u8>>, fonts: Vec<(&'static str, Font)>, pages: Vec<(String, String)>,
    gs: BTreeMap<String, String>, imgs: Vec<Vec<u8>>, pal: [u32; 11],
    w: f32, h: f32, m: f32, x: f32, col: f32, y: f32, slides: bool, fig: usize,
}

impl Pdf<'_> {
    fn out(&mut self) -> &mut String { &mut self.pages.last_mut().unwrap().0 }
    /// A new page, numbered at the foot from the second on (not on slides).
    fn page(&mut self) {
        let (n, st) = ((self.pages.len() + 1).to_string(), St(0, 9.0, self.pal[4], 0));
        self.pages.push((format!("{} rg 0 0 {} {} re f\n", rgb(self.pal[0]), self.w, self.h), String::new()));
        if !self.slides && n != "1" { let x = (self.w - self.run(st, &n).1) / 2.0; self.put(x, self.h - self.m / 2.0, st, &n); }
        self.y = self.m;
    }
    /// Room for `h` more points: on a slide there is no next page, so the rest is dropped.
    fn need(&mut self, h: f32) -> bool {
        let fits = self.y + h <= self.h - self.m;
        if !fits && !self.slides { self.page() }
        fits || !self.slides
    }
    /// A font slot's font, loaded on first use: fonts are numbered in the order they are needed.
    fn font(&mut self, k: usize) -> usize {
        let file = FILES[k];
        if let Some(i) = self.fonts.iter().position(|f| f.0 == file) { return i }
        self.fonts.push((file, Font::new((self.get)(&format!("fonts/{file}.otf")).unwrap_or_default())));
        self.fonts.len() - 1
    }
    /// A run of text as pieces, each in the first font with its characters (the style's, then
    /// sans, then maths): font, glyph IDs as hex, width; and the whole width.
    fn run(&mut self, st: St, s: &str) -> (Vec<(usize, String, f32)>, f32) {
        let mut v: Vec<(usize, String, f32)> = vec![];
        for c in s.chars() {
            let mut i = self.font(st.0);
            for k in [0, 3, st.0] { if !self.fonts[i].1.map.contains_key(&(c as u32)) { i = self.font(k) } }
            let f = &mut self.fonts[i].1;
            let g = f.map.get(&(c as u32)).copied().unwrap_or(0);
            f.used.insert(g, c);
            let w = f.adv(g as usize) as f32 * st.1 / 1000.0;
            match v.last_mut() { Some(p) if p.0 == i => { w!(p.1, "{g:04X}"); p.2 += w } _ => v.push((i, format!("{g:04X}"), w)) }
        }
        let w = v.iter().map(|p| p.2).sum();
        (v, w)
    }
    fn put(&mut self, mut x: f32, y: f32, st: St, s: &str) -> f32 {
        let ((v, w), c, h) = (self.run(st, s), rgb(st.2), self.h);
        let (fill, slant) = ((st.3 & 1) * 2, (st.3 & 2) as f32 * 0.1); // bold also strokes; italic slants
        for (i, hex, pw) in v {
            w!(self.out(), "BT /F{i} {} Tf {fill} Tr 0.3 w {c} rg {c} RG 1 0 {slant} 1 {x:.2} {:.2} Tm <{hex}> Tj ET\n", st.1, h - y);
            x += pw;
        }
        w
    }
    fn link(&mut self, r: [f32; 4], u: &str) {
        let (h, u) = (self.h, u.replace('\\', "\\\\").replace('(', "\\(").replace(')', "\\)"));
        let rect = format!("{:.1} {:.1} {:.1} {:.1}", r[0], h - r[1], r[2], h - r[3]);
        w!(self.pages.last_mut().unwrap().1, "<</Type/Annot/Subtype/Link/Rect[{rect}]/Border[0 0 0]/A<</S/URI/URI({u})>>>>");
    }
    fn stroke(&mut self, pts: &[(f32, f32)], w: f32, c: u32) {
        let p: Vec<String> = pts.iter().map(|q| format!("{:.2} {:.2}", q.0, self.h - q.1)).collect();
        let Some((a, rest)) = p.split_first().filter(|r| !r.1.is_empty()) else { return };
        w!(self.out(), "{} RG {w:.2} w 1 J 1 j {a} m {} l S\n", rgb(c), rest.join(" l "));
    }

    /// TeX maths in Fira Math: italic letters, spaced relations, fractions, roots, scripts, and
    /// in display style (`d`) large operators with their limits above and below.
    fn mbox(&mut self, m: &M, s: f32, d: bool) -> Bx {
        let mut glyph = |t: String, s: f32, pad: f32| Bx(self.run(St(3, s, 0, 0), &t).1 + 2.0 * pad, 0.75 * s, 0.25 * s, vec![(pad, 0.0, s, t)], vec![]);
        match m {
            M::I(t) if t.chars().count() == 1 => glyph(t.chars().map(italic).collect(), s, 0.0),
            M::I(t) => glyph(t.clone(), s, 0.1 * s),
            M::T(t) if t.chars().all(char::is_whitespace) => {
                let ems: f32 = t.chars().map(|c| match c { '\u{2003}' => 1.0, '\u{2009}' => 0.17, _ => 0.25 }).sum(); // quad, thin, space
                Bx(ems * s, 0.0, 0.0, vec![], vec![])
            }
            M::N(t) | M::T(t) => glyph(t.clone(), s, 0.0),
            M::O(t) if "∑∏∫".contains(t.as_str()) => {
                let k = if d { 2.2 } else { 1.2 }; // as the page sets it, centred on the maths axis
                Bx::default().with(glyph(t.clone(), k * s, 0.08 * s), 0.0, 0.27 * s - 0.33 * k * s)
            }
            M::O(t) => glyph(t.clone(), s, if "=<>≤≥≈≠∼→±×⋅∝∈∣+−".contains(t.as_str()) { 0.22 * s } else { 0.0 }),
            M::R(v) => (0..v.len()).fold(Bx::default(), |mut b, k| {
                let x = match &v[k] { M::O(o) if doc::sign(v, k) => self.mbox(&M::T(o.clone()), s, d), m => self.mbox(m, s, d) };
                b.place(x, b.0, 0.0);
                b
            }),
            M::F(n, dn) => {
                let k = if d { 1.0 } else { 0.8 };
                let (n, dn, ax) = (self.mbox(n, k * s, false), self.mbox(dn, k * s, false), 0.27 * s);
                let (w, nx, ny, dx, dy) = (n.0.max(dn.0) + 0.2 * s, n.0, ax + 0.15 * s + n.2, dn.0, ax - 0.15 * s - dn.1);
                Bx(w, 0.0, 0.0, vec![], vec![(vec![(0.0, ax), (w, ax)], 0.05 * s)]).with(n, (w - nx) / 2.0, ny).with(dn, (w - dx) / 2.0, dy)
            }
            M::Q(x) => {
                let x = self.mbox(x, s, d);
                let (top, w, dp) = (x.1 + 0.15 * s, x.0 + 0.55 * s, x.2);
                let sign = vec![(0.0, 0.3 * s), (0.12 * s, 0.38 * s), (0.28 * s, -dp), (0.45 * s, top), (w, top)];
                Bx(w, top + 0.05 * s, 0.0, vec![], vec![(sign, 0.05 * s)]).with(x, 0.5 * s, 0.0)
            }
            M::S(x, sb, sp) if d && doc::big(x) => {
                let x = self.mbox(x, s, d);
                let hi = sp.as_ref().map(|p| self.mbox(p, 0.7 * s, false));
                let lo = sb.as_ref().map(|q| self.mbox(q, 0.7 * s, false));
                let w = [&hi, &lo].into_iter().flatten().fold(x.0, |w, b| w.max(b.0));
                let (top, bot, xw) = (x.1 + 0.12 * s, x.2 + 0.12 * s, x.0);
                let mut b = Bx(w, 0.0, 0.0, vec![], vec![]).with(x, (w - xw) / 2.0, 0.0);
                if let Some(p) = hi { let (pw, pd) = (p.0, p.2); b.place(p, (w - pw) / 2.0, top + pd) }
                if let Some(q) = lo { let (qw, qa) = (q.0, q.1); b.place(q, (w - qw) / 2.0, -(bot + qa)) }
                b.0 += 0.1 * s;
                b
            }
            M::S(x, sb, sp) => {
                let mut b = self.mbox(x, s, d);
                let (w, a, dp) = (b.0, b.1, b.2);
                if let Some(p) = sp { b.place(self.mbox(p, 0.7 * s, false), w + 0.05 * s, (a - 0.35 * s).max(0.4 * s)) }
                if let Some(q) = sb { b.place(self.mbox(q, 0.7 * s, false), w + 0.05 * s, -(dp.max(0.2 * s))) }
                b.0 += 0.05 * s;
                b
            }
        }
    }
    fn mdraw(&mut self, b: &Bx, x: f32, y: f32, c: u32) {
        for (dx, dy, s, t) in &b.3 { self.put(x + dx, y - dy, St(3, *s, c, 0), t); }
        for (p, w) in &b.4 { self.stroke(&p.iter().map(|q| (x + q.0, y - q.1)).collect::<Vec<_>>(), *w, c) }
    }

    /// Inline Markdown as words of styled pieces: text (code in mono, links coloured) or maths.
    fn words(&self, s: &str, st: St) -> Vec<Vec<Piece>> {
        let mut v: Vec<Vec<Piece>> = vec![vec![]];
        for sp in doc::spans(s) {
            let (t, bits, href) = match sp {
                Sp::M(m) => { v.last_mut().unwrap().push((st, String::new(), None, Some(doc::tex(&m)))); continue }
                Sp::T(t, b) => (t, b, None),
                Sp::A(t, u) => (t, 0, Some(u)),
            };
            let (font, size) = if bits & 4 > 0 { (2, st.1 * 0.9) } else { (st.0, st.1) };
            let s2 = St(font, size, if href.is_some() { self.pal[7] } else { st.2 }, st.3 | bits & 3);
            for (k, part) in t.split(' ').enumerate() {
                if k > 0 { v.push(vec![]) }
                if !part.is_empty() { v.last_mut().unwrap().push((s2, part.into(), href.clone(), None)) }
            }
        }
        v.into_iter().filter(|w| !w.is_empty()).collect()
    }
    /// A piece's width; drawn too when `at` is its baseline origin.
    fn piece(&mut self, p: &Piece, at: Option<(f32, f32)>) -> f32 {
        let w = match (&p.3, at) {
            (Some(m), _) => {
                let b = self.mbox(m, p.0.1, false);
                if let Some((x, y)) = at { self.mdraw(&b, x, y, p.0.2) }
                b.0
            }
            (_, Some((x, y))) => self.put(x, y, p.0, &p.1),
            _ => self.run(p.0, &p.1).1,
        };
        if let (Some(u), Some((x, y))) = (&p.2, at) { self.link([x, y + 0.25 * p.0.1, x + w, y - 0.8 * p.0.1], u) }
        w
    }
    /// A justified paragraph `indent` points in. A line that would stretch too far stays ragged.
    fn para(&mut self, s: &str, st: St, indent: f32) {
        let words = self.words(s, st);
        let wid: Vec<f32> = words.iter().map(|w| w.iter().map(|p| self.piece(p, None)).sum()).collect();
        let (space, lead, col, mut i) = (self.run(st, " ").1, 1.35 * st.1, self.col - indent, 0);
        while i < words.len() {
            let (mut j, mut used) = (i + 1, wid[i]);
            while j < words.len() && used + space + wid[j] <= col { (used, j) = (used + space + wid[j], j + 1) }
            if !self.need(lead) { return }
            self.y += lead;
            let extra = if j < words.len() && j > i + 1 { (col - used) / (j - i - 1) as f32 } else { 0.0 };
            let (gap, mut x) = (space + if extra < 3.0 * space { extra } else { 0.0 }, self.x + indent);
            for w in &words[i..j] { w.iter().for_each(|p| x += self.piece(p, Some((x, self.y)))); x += gap }
            i = j;
        }
        self.y += 0.45 * st.1;
    }
    fn heading(&mut self, t: &str, size: f32) {
        if !self.need(3.0 * size) { return }
        self.y += 0.6 * size;
        self.para(t, St(1, size, self.pal[2], 0), 0.0);
    }
    /// Monospaced lines, wrapped at the column, on the surface colour when `bg`.
    fn code(&mut self, text: &str, bg: bool) {
        let st = St(2, 8.0, self.pal[2], 0);
        let per = ((self.col - 12.0) / self.run(st, "0").1).max(1.0) as usize;
        for l in text.lines().map(|l| l.chars().collect::<Vec<_>>()) {
            for part in l.chunks(per).map(|p| p.iter().collect::<String>()).chain(l.is_empty().then(String::new)) {
                if !self.need(10.5) { return }
                let (s, x, y, w) = (rgb(self.pal[1]), self.x, self.h - self.y - 10.5, self.col);
                if bg { w!(self.out(), "{s} rg {x:.2} {y:.2} {w:.2} 10.5 re f\n") }
                self.y += 10.5;
                self.put(self.x + 6.0, self.y - 3.0, st, &part);
            }
        }
        self.y += 6.0;
    }
    fn caption(&mut self, t: &str, figure: bool) {
        self.fig += figure as usize;
        self.para(&if figure { format!("**Figure {}.** {t}", self.fig) } else { t.into() }, St(0, 9.0, self.pal[4], 0), 0.0);
        self.y += 4.0;
    }
    /// A figure `w` by `h` at the column's centre: `draw` gets its left and top.
    fn figure(&mut self, w: f32, h: f32, draw: &mut dyn FnMut(&mut Self, f32, f32)) -> bool {
        if !self.need(h + 24.0) { return false }
        draw(self, self.x + (self.col - w) / 2.0, self.y + 6.0);
        self.y += h + 10.0;
        true
    }
    /// A scene's display list in a square of side `s`. Discs are round-capped dots.
    fn frame(&mut self, ops: &[Op], x: f32, y: f32, s: f32) {
        // A unit circle as four Bézier quarters: the start, then two controls and an end each.
        const C: f32 = 0.5523;
        const K: [(f32, f32); 13] =
            [(1.0, 0.0), (1.0, C), (C, 1.0), (0.0, 1.0), (-C, 1.0), (-1.0, C), (-1.0, 0.0), (-1.0, -C), (-C, -1.0), (0.0, -1.0), (C, -1.0), (1.0, -C), (1.0, 0.0)];
        let (h, mut o, mut clipped) = (self.h, String::from("q\n"), false);
        let pt = |a: f32, b: f32| format!("{:.2} {:.2}", x + a * s, h - y - b * s);
        let ell = |cx: f32, cy: f32, rx: f32, ry: f32| {
            let op = |i: usize| if i == 0 { " m" } else if i % 3 == 0 { " c" } else { "" };
            K.iter().enumerate().map(|(i, k)| pt(cx + k.0 * rx, cy + k.1 * ry) + op(i)).collect::<Vec<_>>().join(" ")
        };
        let path = |sh: &Sh| match *sh {
            Sh::Rect(a, b, c, d, _) => format!("{} {:.2} {:.2} re", pt(a, b + d), c * s, d * s),
            Sh::Ell(cx, cy, rx, ry) => ell(cx, cy, rx, ry),
            Sh::Seg(ax, ay, bx, by, _) => format!("{} m {} l", pt(ax, ay), pt(bx, by)),
            Sh::Ring(cx, cy, r, _) => ell(cx, cy, r, r),
        };
        for op in ops {
            if clipped && matches!(op, Op::Clip(_)) { o += "Q\n"; clipped = false }
            match op {
                Op::Clip(sh) => if let Some(sh) = sh { w!(o, "q {} W n\n", path(sh)); clipped = true },
                Op::Fill(sh, c, a, screen) => {
                    let g = format!("/G{}{}", (a * 100.0).round(), *screen as u8);
                    self.gs.entry(g.clone()).or_insert(format!("<</ca {a:.2}/CA {a:.2}/BM/{}>>", if *screen { "Screen" } else { "Normal" }));
                    match *sh {
                        Sh::Ell(cx, cy, rx, ry) if rx == ry => w!(o, "{g} gs {} RG {:.2} w 1 J {} m {2} l S\n", rgb(*c), 2.0 * rx * s, pt(cx, cy)),
                        Sh::Seg(.., w) | Sh::Ring(.., w) => w!(o, "{g} gs {} RG {:.2} w 1 J {} S\n", rgb(*c), w * s, path(sh)),
                        _ => w!(o, "{g} gs {} rg {} f\n", rgb(*c), path(sh)),
                    }
                }
            }
        }
        *self.out() += &(o + if clipped { "Q\nQ\n" } else { "Q\n" });
    }
    /// A cell's SVG plot (`nb::Plot`, 640 by 400 units): grid, rules, lines, dots, labels.
    fn plot(&mut self, svg: &str, x: f32, y: f32, w: f32) {
        let (k, p) = (w / 640.0, self.pal);
        for e in svg.split('<').skip(1) {
            let a = |n: &str| e.split(&format!(" {n}=\"")).nth(1).and_then(|r| r.split('"').next()).unwrap_or("");
            let f = |n: &str| a(n).parse::<f32>().unwrap_or(0.0);
            let c = p[match a("class") { "gr" => 5, "ax" => 4, "l0" | "d0" => 6, "l1" | "d1" => 8, "l2" | "d2" => 9, _ => 3 }];
            let at = |u: f32, v: f32| (x + k * u, y + k * v);
            match e.split([' ', '>']).next() {
                Some("line") => self.stroke(&[at(f("x1"), f("y1")), at(f("x2"), f("y2"))], if a("class") == "rl" { 1.0 } else { 0.4 }, c),
                Some("path") => {
                    let n: Vec<f32> = a("d").split(['M', 'L', ' ']).filter_map(|v| v.parse().ok()).collect();
                    self.stroke(&n.chunks(2).map(|q| at(q[0], q[1])).collect::<Vec<_>>(), 1.5, c);
                }
                Some("circle") => self.stroke(&[at(f("cx"), f("cy")); 2], 2.0 * k * f("r"), c),
                Some("text") => {
                    let (t, st, (u, v)) = (strip(e.split_once('>').map_or("", |s| s.1)), St(0, 15.0 * k, c, 0), at(f("x"), f("y")));
                    let tw = self.run(st, &t).1 * match a("text-anchor") { "middle" => 0.5, "end" => 1.0, _ => 0.0 };
                    self.put(u - tw, v, st, &t);
                }
                _ => {}
            }
        }
    }
    /// A cell's output: text as code, plots as figures, any other HTML as text.
    fn output(&mut self, h: &str, caption: &str) {
        let (mut rest, mut fig) = (h, false);
        while !rest.is_empty() {
            let end = [("<pre", "</pre>"), ("<svg", "</svg>")].into_iter().find(|t| rest.starts_with(t.0)).map(|t| t.1);
            let j = match end {
                Some(e) => rest.find(e).map_or(rest.len(), |j| j + e.len()),
                None => rest.char_indices().skip(1).find(|c| c.1 == '<').map_or(rest.len(), |c| c.0), // to the next tag
            };
            let ((a, b), w) = (rest.split_at(j), (0.8 * self.col).min(360.0));
            match (end, strip(a)) {
                (Some("</pre>"), t) => self.code(&t, false),
                (Some(_), _) => fig |= self.figure(w, w * 0.625, &mut |p, x, y| p.plot(a, x, y, w)),
                (None, t) => if !t.trim().is_empty() { self.para(&t, St(0, 10.0, self.pal[3], 0), 0.0) },
            }
            rest = b;
        }
        if !caption.is_empty() { self.caption(caption, fig) }
    }
    /// A PNG as an image XObject; its pixel size.
    fn png(&mut self, b: &[u8]) -> Option<(usize, usize)> {
        let (mut o, mut idat, mut plte, mut trns, mut ih) = (8, vec![], vec![], vec![], [0; 5]);
        while o + 8 <= b.len() && b.starts_with(b"\x89PNG\r\n\x1a\n") {
            let d = b.get(o + 8..(o + 8).saturating_add(be(b, o, 4)))?;
            match &b[o + 4..o + 8] {
                b"IHDR" => ih = [be(d, 0, 4), be(d, 4, 4), be(d, 8, 1), be(d, 9, 1), be(d, 12, 1)],
                b"PLTE" => plte = d.to_vec(),
                b"tRNS" => trns = d.to_vec(),
                b"IDAT" => idat.extend_from_slice(d),
                _ => {}
            }
            o += 12 + d.len();
        }
        let [w, h, depth, ct, interlace] = ih;
        if depth != 8 || interlace != 0 || w == 0 { return None }
        let hex: String = plte.iter().map(|x| format!("{x:02X}")).collect();
        let (cs, n) = match ct {
            0 => ("/DeviceGray".into(), 1),
            2 => ("/DeviceRGB".into(), 3),
            3 => (format!("[/Indexed/DeviceRGB {} <{hex}>]", (plte.len() / 3).checked_sub(1)?), 1),
            _ => return None,
        };
        let mask = match ct {
            3 => trns.iter().take_while(|&&a| a < 128).count().checked_sub(1).map_or(String::new(), |n| format!("0 {n}")),
            _ => trns.chunks(2).map(|v| format!("{0} {0}", be(v, 0, 2))).collect::<Vec<_>>().join(" "),
        };
        let dict = format!("/Type/XObject/Subtype/Image/Width {w}/Height {h}/ColorSpace {cs}/BitsPerComponent 8/Mask[{mask}]\
            /Filter/FlateDecode/DecodeParms<</Predictor 15/Colors {n}/BitsPerComponent 8/Columns {w}>>");
        self.imgs.push(stream(&dict, &idat));
        Some((w, h))
    }
    /// The handout: each slide page drawn small, as a bordered box, with its narration beside it.
    fn handout(&mut self, notes: Vec<Vec<String>>) {
        let (slides, sw, sh) = (std::mem::take(&mut self.pages), self.w, self.h);
        (self.w, self.h, self.m, self.x, self.col, self.slides) = (A4.0, A4.1, A4.2, A4.3, A4.0 - 2.0 * A4.3, false);
        let (x0, bw) = (self.x, 0.56 * (self.w - 2.0 * self.x));
        let (k, line) = (bw / sw, rgb(self.pal[5]));
        self.page();
        for ((c, _), say) in slides.iter().zip(notes) {
            self.need(sh * k + 14.0);
            let (y, pg, b) = (self.y, self.pages.len(), self.h - self.y - sh * k);
            w!(self.out(), "q q {k:.5} 0 0 {k:.5} {x0:.2} {b:.2} cm 0 0 {sw} {sh} re W n\n{c}Q "); // the slide, scaled and clipped
            w!(self.out(), "{line} RG 0.5 w {x0:.2} {b:.2} {bw:.2} {:.2} re S Q\n", sh * k); // and its border
            (self.x, self.col) = (x0 + bw + 14.0, self.w - 2.0 * x0 - bw - 14.0);
            say.iter().for_each(|t| self.para(t, St(0, 9.5, self.pal[3], 0), 0.0));
            (self.x, self.col) = (x0, self.w - 2.0 * x0);
            self.y = if self.pages.len() == pg { self.y.max(y + sh * k) } else { self.y } + 14.0;
        }
    }
    fn math(&mut self, t: &str) {
        let mut b = self.mbox(&doc::tex(t), 12.0, true);
        if b.0 > self.col { b = self.mbox(&doc::tex(t), 12.0 * self.col / b.0, true) }
        if !self.need(b.1 + b.2 + 12.0) { return }
        let (x, y) = (self.x + (self.col - b.0) / 2.0, self.y + b.1 + 6.0);
        self.y = y + b.2 + 8.0;
        self.mdraw(&b, x, y, self.pal[2]);
    }

    /// The file: catalog, pages, info, shared resources, fonts, images, then each page.
    fn finish(self, title: &str) -> Vec<u8> {
        let mut objs: Vec<Vec<u8>> = vec![vec![]; 4];
        let mut add = |b: Vec<u8>| (objs.push(b), objs.len()).1;
        let mut fonts = String::new();
        for (i, (_, f)) in self.fonts.iter().enumerate() {
            let file = add(stream("/Subtype/OpenType", &f.data));
            let [x0, y0, x1, y1, asc, desc] = f.m;
            let desc = add(format!("<</Type/FontDescriptor/FontName/F{i}/Flags 4/FontBBox[{x0} {y0} {x1} {y1}]/ItalicAngle 0\
                /Ascent {asc}/Descent {desc}/CapHeight {asc}/StemV 80/FontFile3 {file} 0 R>>").into());
            let ws: Vec<String> = (0..f.nh).map(|g| f.adv(g).to_string()).collect();
            let cid = add(format!("<</Type/Font/Subtype/CIDFontType0/BaseFont/F{i}/CIDSystemInfo<</Registry(Adobe)/Ordering(Identity)\
                /Supplement 0>>/FontDescriptor {desc} 0 R/DW {}/W[0[{}]]>>", f.adv(f.nh), ws.join(" ")).into());
            // ToUnicode: each glyph used back to its character, in blocks of at most 100.
            let map: Vec<String> = f.used.iter().filter(|u| *u.0 > 0).map(|(g, c)| format!("<{g:04X}><{}>", utf16(&c.to_string()))).collect();
            let cmap: String = map.chunks(100).map(|c| format!("{} beginbfchar\n{}\nendbfchar\n", c.len(), c.join("\n"))).collect();
            let cmap = format!("/CIDInit/ProcSet findresource begin 12 dict begin begincmap\
                /CIDSystemInfo<</Registry(Adobe)/Ordering(UCS)/Supplement 0>>def/CMapName/Adobe-Identity-UCS def/CMapType 2 def\n\
                1 begincodespacerange <0000><FFFF> endcodespacerange\n{cmap}endcmap CMapName currentdict/CMap defineresource pop end end");
            let tu = add(stream("", cmap.as_bytes()));
            let font = format!("<</Type/Font/Subtype/Type0/BaseFont/F{i}/Encoding/Identity-H/DescendantFonts[{cid} 0 R]/ToUnicode {tu} 0 R>>");
            w!(fonts, "/F{i} {} 0 R", add(font.into()));
        }
        let imgs: String = self.imgs.into_iter().enumerate().map(|(i, b)| format!("/I{i} {} 0 R", add(b))).collect();
        let gs: String = self.gs.iter().map(|(k, v)| format!("{k}{v}")).collect();
        let kids: Vec<String> = self.pages.iter().map(|(c, a)| {
            let c = add(stream("", c.as_bytes()));
            let page = format!("<</Type/Page/Parent 2 0 R/MediaBox[0 0 {} {}]/Resources 4 0 R/Contents {c} 0 R/Annots[{a}]>>", self.w, self.h);
            format!("{} 0 R", add(page.into()))
        }).collect();
        let title = utf16(title);
        objs[0] = b"<</Type/Catalog/Pages 2 0 R/Lang(en)>>".to_vec();
        objs[1] = format!("<</Type/Pages/Kids[{}]/Count {}>>", kids.join(" "), kids.len()).into_bytes();
        objs[2] = format!("<</Title<FEFF{title}>/Producer(newsite engine {})>>", crate::VERSION).into_bytes();
        objs[3] = format!("<</Font<<{fonts}>>/ExtGState<<{gs}>>/XObject<<{imgs}>>>>").into_bytes();
        let (mut o, mut at) = (b"%PDF-1.7\n%\xe2\xe3\xcf\xd3\n".to_vec(), String::new());
        for (i, b) in objs.iter().enumerate() {
            w!(at, "{:010} 00000 n \n", o.len());
            o.extend([format!("{} 0 obj\n", i + 1).as_bytes(), b, b"\nendobj\n"].concat());
        }
        let (id, n) = (&pack::sha256(&o)[..32], objs.len() + 1);
        let start = o.len();
        o.extend(format!("xref\n0 {n}\n0000000000 65535 f \n{at}trailer\n<</Size {n}/Root 1 0 R/Info 3 0 R/ID[<{id}><{id}>]>>\n").as_bytes());
        o.extend(format!("startxref\n{start}\n%%EOF\n").as_bytes());
        o
    }
}

/// One form (`FORMS`) of a notebook. `out` is each cell's output HTML, `stage` the scenes' data;
/// `get` resolves `fonts/<name>.otf` and the notebook's assets.
pub fn write(d: &Doc, out: &[String], stage: &[f32], get: &dyn Fn(&str) -> Option<Vec<u8>>, form: usize) -> Vec<u8> {
    let slides = form == 1 || form == 2; // a handout lays out the slides, then sets them beside their narration
    let (w, h, m, mx) = if slides { (720.0, 405.0, 36.0, 36.0) } else { A4 };
    let pal = theme::palette(theme::export(match d.get("theme") { "" => "site", t => t }, d.get("print")), d.get("colors"));
    let mut p = Pdf { get, fonts: vec![], pages: vec![], gs: BTreeMap::new(), imgs: vec![], pal, w, h, m, x: mx, col: w - 2.0 * mx, y: 0.0, slides, fig: 0 };
    let (fg, fg2, muted, text) = (pal[2], pal[3], pal[4], St(0, if slides { 13.0 } else { 11.0 }, pal[3], 0));
    let (seed, hex) = (d.get("seed").parse().unwrap_or(1), |c: &str| u32::from_str_radix(c.trim_start_matches('#'), 16).ok());
    let sc: Vec<u32> = d.get("palette").split_whitespace().filter_map(hex).chain([0; 4]).collect();
    p.page();
    p.para(d.get("title"), St(1, if slides { 32.0 } else { 22.0 }, fg, 0), 0.0);
    p.para(d.get("summary"), St(1, 13.0, fg2, 0), 0.0);
    p.para(&format!("[Interactive version](index.html) · {}", FORMS[form]), St(0, 9.0, muted, 0), 0.0);
    let (chapters, mut k, mut n, mut skip, mut notes) = (d.chapters(), 0, 0, false, vec![vec![]]);
    for (at, b) in d.blocks.iter().enumerate() {
        match b {
            B::H(2, t, _) if let Some(c) = chapters.iter().find(|c| c.at == at) => {
                (skip, n) = (false, n + 1);
                let ops = c.scene.map(|sn| scene::list(seed, sn, c.t, c.p, -1.0, -1.0, stage, [sc[0], sc[1], sc[2], sc[3]]));
                if slides {
                    (p.x, p.col) = (mx, w - 2.0 * mx);
                    notes.push(vec![]);
                    p.page();
                    p.para(t, St(1, 26.0, fg, 0), 0.0);
                    let s = h - p.y - m;
                    if let Some(ops) = ops {
                        p.frame(&ops, w - mx - s, p.y, s); // the scene on the right, the text beside it
                        p.col = w - 3.0 * mx - s;
                    }
                    continue;
                }
                let s = if ops.is_some() { p.col * 0.45 } else { 0.0 };
                p.need(s + 66.0);
                p.heading(&if form == 3 { format!("{n}  {t}") } else { t.clone() }, 14.0);
                if let Some(ops) = ops && p.figure(s, s, &mut |p, x, y| p.frame(&ops, x, y, s)) {
                    p.caption(&format!("{t}, at t = {} s.", c.t), true)
                }
            }
            // On slides, a part (`#`) is left out with what follows it, up to the next heading.
            B::H(1, _, _) if slides => skip = true,
            B::H(l, t, _) => { skip = false; p.heading(t, if *l == 1 { 16.0 } else { 12.0 }) }
            _ if skip || (slides && matches!(b, B::Img(..))) => {}
            B::P(t) => p.para(t, text, 0.0),
            B::L(ord, items) => for (i, t) in items.iter().enumerate() {
                if !p.need(1.35 * text.1) { break }
                p.put(p.x + 2.0, p.y + 1.35 * text.1, text, &if *ord { format!("{}.", i + 1) } else { "•".into() });
                p.para(t, text, 16.0);
            },
            B::C(l, s, _) if l == "rust" => {
                let (caption, code) = cell::opts(s);
                if form == 0 { p.code(&code, true) }
                if let Some(o) = out.get(k).filter(|_| !slides) { p.output(o, &caption) }
                k += 1;
            }
            B::C(l, s, _) if l == "say" => match form {
                0 => s.split("\n\n").for_each(|t| p.para(t, St(0, 9.5, muted, 2), 12.0)),
                2 => notes.last_mut().unwrap().extend(s.split("\n\n").map(String::from)),
                _ => {}
            },
            B::C(_, s, _) => if form == 0 { p.code(s, true) },
            B::M(t) => p.math(t),
            B::Img(alt, src) => match get(src).and_then(|b| p.png(&b)) {
                Some((iw, ih)) => {
                    let (i, fw) = (p.imgs.len() - 1, p.col.min(iw as f32 * 0.75));
                    let fh = fw * ih as f32 / iw as f32;
                    let draw = &mut |p: &mut Pdf, x: f32, y: f32| w!(p.out(), "q {fw:.2} 0 0 {fh:.2} {x:.2} {:.2} cm /I{i} Do Q\n", h - y - fh);
                    if p.figure(fw, fh, draw) { p.caption(alt, true) }
                }
                None => p.caption(&format!("({alt})"), false),
            },
            B::Raw(_) | B::Com(_) => {}
        }
    }
    if form == 2 { p.handout(notes) }
    let refs = d.links();
    if form != 1 && !refs.is_empty() {
        p.heading("References", 12.0);
        refs.iter().enumerate().for_each(|(i, (t, u))| p.para(&format!("{}. {t}: [{u}]({u})", i + 1), St(0, 9.0, fg2, 0), 0.0));
    }
    p.finish(d.get("title"))
}

#[cfg(test)]
mod tests {
    #[test]
    fn malformed_input_does_not_panic() {
        let png = |t: &[u8], d: &[u8]| [b"\x89PNG\r\n\x1a\n", &(d.len() as u32).to_be_bytes()[..], t, d, &[0; 4]].concat();
        // An empty palette, a short header, a chunk running past the end, and nothing.
        let bad = [png(b"IHDR", &[0, 0, 0, 1, 0, 0, 0, 1, 8, 3, 0, 0, 0]), png(b"IHDR", &[1]), b"\x89PNG\r\n\x1a\n\xff\xff\xff\xffIDAT".to_vec(), vec![]];
        let d = crate::doc::parse("---\ntitle: T\n---\n## A {scene=8}\n\n![x](x.png)\n\n$$\n\\frac{\n$$\n\n```rust\nlet a = 1;\n```");
        for b in bad {
            for form in 0..super::FORMS.len() {
                super::write(&d, &["<svg><path d=\"M\"/></svg>".into()], &[f32::NAN], &|p| (p == "x.png").then(|| b.clone()), form);
            }
        }
    }
}
