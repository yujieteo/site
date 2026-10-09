//! PDF: the four print forms from the same parse, cell outputs and scenes as the page.
//! Fonts are the embedded OpenType (CFF) subsets, addressed by glyph ID with a ToUnicode map;
//! scenes are their display lists as vector paths; plots are the cells' own SVG; PNGs (grey,
//! RGB or palette; transparency as a colour key, or the palette's leading entries under half
//! alpha) pass through undecoded. Geometry is fixed per form and nothing reads a clock, so
//! equal input gives equal bytes.

use crate::doc::{self, B, Doc, M, Sp};
use crate::draw::{Op, Sh};
use crate::{cell, pack, scene, theme};
use std::collections::BTreeMap;

pub const FORMS: [&str; 4] = ["notebook", "slides", "handout", "article"];

fn be(b: &[u8], o: usize, n: usize) -> usize {
    b.get(o..o + n).map_or(0, |s| s.iter().fold(0, |a, &x| a << 8 | x as usize))
}

fn rgb(c: u32) -> String {
    format!("{:.3} {:.3} {:.3}", (c >> 16) as f32 / 255.0, ((c >> 8) & 255) as f32 / 255.0, (c & 255) as f32 / 255.0)
}

fn stream(dict: &str, data: &[u8]) -> Vec<u8> {
    [format!("<<{dict}/Length {}>>stream\n", data.len()).as_bytes(), data, b"\nendstream"].concat()
}

/// An OpenType font: character map, advances, metrics (bbox, ascent, descent), glyphs used.
struct Font { data: Vec<u8>, map: BTreeMap<u32, u16>, used: BTreeMap<u16, char>, hm: usize, nh: usize, m: Vec<i16> }

impl Font {
    fn new(data: Vec<u8>) -> Font {
        let b = &data;
        let t = |tag: &[u8]| (0..be(b, 4, 2)).map(|i| 12 + 16 * i).find(|&o| &b[o..o + 4] == tag).map_or(0, |o| be(b, o + 8, 4));
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
                        map.insert(c as u32, if g == 0 { 0 } else { ((g + f(2)) & 0xffff) as u16 });
                    }
                }
            }
        }
        let m = [t(b"head") + 36, t(b"head") + 38, t(b"head") + 40, t(b"head") + 42, hh + 4, hh + 6].iter().map(|&o| be(b, o, 2) as u16 as i16).collect();
        Font { hm: t(b"hmtx"), nh: be(b, hh + 34, 2).max(1), map, used: BTreeMap::new(), m, data }
    }
    fn adv(&self, g: usize) -> usize {
        be(&self.data, self.hm + 4 * g.min(self.nh - 1), 2)
    }
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
}

fn italic(c: char) -> char {
    let k = |base: u32, from: char| char::from_u32(base + c as u32 - from as u32).unwrap_or(c);
    match c { 'h' => 'ℎ', 'a'..='z' => k(0x1d44e, 'a'), 'A'..='Z' => k(0x1d434, 'A'), 'α'..='ω' => k(0x1d6fc, 'α'), 'ϵ' => '𝜖', 'ϕ' => '𝜙', _ => c }
}

fn strip(h: &str) -> String {
    let mut tag = false;
    let s: String = h.chars().filter(|&c| (!tag && c != '<', tag = (tag || c == '<') && c != '>').0).collect();
    s.replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", "\"").replace("&amp;", "&")
}

/// The writer: page geometry (width, height, margin; column left and width), the cursor's y
/// (from the top), pages as (content, annotations), and the shared resources.
struct Pdf<'a> {
    get: &'a dyn Fn(&str) -> Option<Vec<u8>>,
    files: [&'static str; 4],
    fonts: Vec<(&'static str, Font)>,
    pages: Vec<(String, String)>,
    gs: BTreeMap<String, String>,
    imgs: Vec<Vec<u8>>,
    pal: [u32; 11],
    w: f32, h: f32, m: f32, x: f32, col: f32, y: f32,
    slides: bool,
    fig: usize,
}

impl Pdf<'_> {
    fn out(&mut self) -> &mut String {
        &mut self.pages.last_mut().unwrap().0
    }
    fn page(&mut self) {
        let n = (self.pages.len() + 1).to_string();
        self.pages.push((format!("{} rg 0 0 {} {} re f\n", rgb(self.pal[0]), self.w, self.h), String::new()));
        if !self.slides && n != "1" {
            let st = St(0, 9.0, self.pal[4], 0);
            let x = (self.w - self.run(st, &n).2) / 2.0;
            self.put(x, self.h - self.m / 2.0, st, &n);
        }
        self.y = self.m;
    }
    /// Room for `h` more points: on a slide there is no next page, so the rest is dropped.
    fn need(&mut self, h: f32) -> bool {
        let fits = self.y + h <= self.h - self.m;
        if !fits && !self.slides { self.page() }
        fits || !self.slides
    }
    /// A run of text: its font, glyph IDs as hex, and width.
    fn run(&mut self, st: St, s: &str) -> (usize, String, f32) {
        let file = self.files[st.0];
        let i = self.fonts.iter().position(|f| f.0 == file).unwrap_or_else(|| {
            self.fonts.push((file, Font::new((self.get)(&format!("fonts/{file}.otf")).unwrap_or_default())));
            self.fonts.len() - 1
        });
        let f = &mut self.fonts[i].1;
        let (mut hex, mut w) = (String::new(), 0);
        for c in s.chars() {
            let g = f.map.get(&(c as u32)).copied().unwrap_or(0);
            (_, w) = (f.used.insert(g, c), w + f.adv(g as usize));
            w!(hex, "{g:04X}");
        }
        (i, hex, w as f32 * st.1 / 1000.0)
    }
    fn put(&mut self, x: f32, y: f32, st: St, s: &str) -> f32 {
        let ((i, hex, w), c, h) = (self.run(st, s), rgb(st.2), self.h);
        w!(self.out(), "BT /F{i} {} Tf {} Tr 0.3 w {c} rg {c} RG 1 0 {} 1 {x:.2} {:.2} Tm <{hex}> Tj ET\n", st.1, (st.3 & 1) * 2, (st.3 & 2) as f32 * 0.1, h - y);
        w
    }
    fn link(&mut self, r: [f32; 4], u: &str) {
        let (h, u) = (self.h, u.replace('\\', "\\\\").replace('(', "\\(").replace(')', "\\)"));
        w!(self.pages.last_mut().unwrap().1, "<</Type/Annot/Subtype/Link/Rect[{:.1} {:.1} {:.1} {:.1}]/Border[0 0 0]/A<</S/URI/URI({u})>>>>", r[0], h - r[1], r[2], h - r[3]);
    }
    fn stroke(&mut self, pts: &[(f32, f32)], w: f32, c: u32) {
        let p: Vec<String> = pts.iter().map(|q| format!("{:.2} {:.2}", q.0, self.h - q.1)).collect();
        w!(self.out(), "{} RG {w:.2} w 1 J 1 j {} m {} l S\n", rgb(c), p[0], p[1..].join(" l "));
    }

    /// TeX maths in Fira Math: italic letters, spaced relations, fractions, roots, scripts.
    fn mbox(&mut self, m: &M, s: f32) -> Bx {
        let mut glyph = |t: String, s: f32, pad: f32| Bx(self.run(St(3, s, 0, 0), &t).2 + 2.0 * pad, 0.75 * s, 0.25 * s, vec![(pad, 0.0, s, t)], vec![]);
        match m {
            M::I(t) if t.chars().count() == 1 => glyph(t.chars().map(italic).collect(), s, 0.0),
            M::I(t) => glyph(t.clone(), s, 0.1 * s),
            M::N(t) | M::T(t) => glyph(t.clone(), s, 0.0),
            M::O(t) => glyph(t.clone(), if "∑∏∫".contains(t.as_str()) { 1.4 * s } else { s }, if "=<>≤≥≈≠∼→±×⋅∝∈∣+−".contains(t.as_str()) { 0.22 * s } else { 0.0 }),
            M::R(v) => v.iter().fold(Bx::default(), |mut b, m| (b.place(self.mbox(m, s), b.0, 0.0), b).1),
            M::F(n, d) => {
                let (n, d, ax) = (self.mbox(n, 0.8 * s), self.mbox(d, 0.8 * s), 0.27 * s);
                let (w, nx, ny, dx, dy) = (n.0.max(d.0) + 0.2 * s, n.0, ax + 0.15 * s + n.2, d.0, ax - 0.15 * s - d.1);
                let mut b = Bx(w, 0.0, 0.0, vec![], vec![(vec![(0.0, ax), (w, ax)], 0.05 * s)]);
                (b.place(n, (w - nx) / 2.0, ny), b.place(d, (w - dx) / 2.0, dy), b).2
            }
            M::Q(x) => {
                let x = self.mbox(x, s);
                let (top, w, d) = (x.1 + 0.15 * s, x.0 + 0.55 * s, x.2);
                let mut b = Bx(w, top + 0.05 * s, 0.0, vec![], vec![(vec![(0.0, 0.3 * s), (0.12 * s, 0.38 * s), (0.28 * s, -d), (0.45 * s, top), (w, top)], 0.05 * s)]);
                (b.place(x, 0.5 * s, 0.0), b).1
            }
            M::S(x, sb, sp) => {
                let mut b = self.mbox(x, s);
                let (w, a, d) = (b.0, b.1, b.2);
                if let Some(p) = sp { b.place(self.mbox(p, 0.7 * s), w + 0.05 * s, (a - 0.35 * s).max(0.4 * s)) }
                if let Some(q) = sb { b.place(self.mbox(q, 0.7 * s), w + 0.05 * s, -(d.max(0.2 * s))) }
                (b.0 += 0.05 * s, b).1
            }
        }
    }
    fn mdraw(&mut self, b: Bx, x: f32, y: f32, c: u32) {
        b.3.into_iter().for_each(|(dx, dy, s, t)| _ = self.put(x + dx, y - dy, St(3, s, c, 0), &t));
        b.4.into_iter().for_each(|(p, w)| self.stroke(&p.iter().map(|q| (x + q.0, y - q.1)).collect::<Vec<_>>(), w, c));
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
            let code = bits & 4 > 0;
            let s2 = St(if code { 2 } else { st.0 }, st.1 * if code { 0.9 } else { 1.0 }, if href.is_some() { self.pal[7] } else { st.2 }, st.3 | bits & 3);
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
                let b = self.mbox(m, p.0.1);
                (b.0, at.map(|(x, y)| self.mdraw(b, x, y, p.0.2))).0
            }
            (_, Some((x, y))) => self.put(x, y, p.0, &p.1),
            _ => self.run(p.0, &p.1).2,
        };
        if let (Some(u), Some((x, y))) = (&p.2, at) { self.link([x, y + 0.25 * p.0.1, x + w, y - 0.8 * p.0.1], u) }
        w
    }
    /// A justified paragraph `indent` points in. A line that would stretch too far stays ragged.
    fn para(&mut self, s: &str, st: St, indent: f32) {
        let words = self.words(s, st);
        let wid: Vec<f32> = words.iter().map(|w| w.iter().map(|p| self.piece(p, None)).sum()).collect();
        let (space, lead, col, mut i) = (self.run(st, " ").2, 1.35 * st.1, self.col - indent, 0);
        while i < words.len() {
            let (mut j, mut used) = (i + 1, wid[i]);
            while j < words.len() && used + space + wid[j] <= col { (used, j) = (used + space + wid[j], j + 1) }
            if !self.need(lead) { return }
            self.y += lead;
            let extra = if j < words.len() && j > i + 1 { (col - used) / (j - i - 1) as f32 } else { 0.0 };
            let mut x = self.x + indent;
            for w in &words[i..j] {
                w.iter().for_each(|p| x += self.piece(p, Some((x, self.y))));
                x += space + if extra < 3.0 * space { extra } else { 0.0 };
            }
            i = j;
        }
        self.y += 0.45 * st.1;
    }
    fn heading(&mut self, t: &str, size: f32) {
        if self.need(3.0 * size) { (self.y += 0.6 * size, self.para(t, St(1, size, self.pal[2], 0), 0.0)); }
    }
    /// Monospaced lines, wrapped at the column, on the surface colour when `bg`.
    fn code(&mut self, text: &str, bg: bool) {
        let st = St(2, 8.0, self.pal[2], 0);
        let per = ((self.col - 12.0) / self.run(st, "0").2).max(1.0) as usize;
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
        let fits = self.need(h + 24.0);
        if fits { (draw(self, self.x + (self.col - w) / 2.0, self.y + 6.0), self.y += h + 10.0); }
        fits
    }
    /// A scene's display list in a square of side `s`. Discs are round-capped dots.
    fn frame(&mut self, ops: &[Op], x: f32, y: f32, s: f32) {
        const K: [(f32, f32); 13] = [(1.0, 0.0), (1.0, 0.5523), (0.5523, 1.0), (0.0, 1.0), (-0.5523, 1.0), (-1.0, 0.5523), (-1.0, 0.0), (-1.0, -0.5523), (-0.5523, -1.0), (0.0, -1.0), (0.5523, -1.0), (1.0, -0.5523), (1.0, 0.0)];
        let h = self.h;
        let pt = |a: f32, b: f32| format!("{:.2} {:.2}", x + a * s, h - y - b * s);
        let ell = |cx: f32, cy: f32, rx: f32, ry: f32| K.iter().enumerate().map(|(i, k)| pt(cx + k.0 * rx, cy + k.1 * ry) + ["", " c", " m"][(i % 3 == 0) as usize + (i == 0) as usize]).collect::<Vec<_>>().join(" ");
        let path = |sh: &Sh| match *sh {
            Sh::Rect(a, b, c, d, _) => format!("{} {:.2} {:.2} re", pt(a, b + d), c * s, d * s),
            Sh::Ell(cx, cy, rx, ry) => ell(cx, cy, rx, ry),
            Sh::Seg(ax, ay, bx, by, _) => format!("{} m {} l", pt(ax, ay), pt(bx, by)),
            Sh::Ring(cx, cy, r, _) => ell(cx, cy, r, r),
        };
        let mut o = String::from("q\n");
        let mut clipped = false;
        for op in ops {
            if clipped && matches!(op, Op::Clip(_)) { (clipped, o) = (false, o + "Q\n") }
            match op {
                Op::Clip(None) => {}
                Op::Clip(Some(sh)) => (clipped, o) = (true, o + &format!("q {} W n\n", path(sh))),
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
                    let tw = self.run(st, &t).2 * match a("text-anchor") { "middle" => 0.5, "end" => 1.0, _ => 0.0 };
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
            let j = match end { Some(e) => rest.find(e).map_or(rest.len(), |j| j + e.len()), None => rest.char_indices().skip(1).find(|c| c.1 == '<').map_or(rest.len(), |c| c.0) };
            let (a, b) = rest.split_at(j);
            let w = (0.8 * self.col).min(360.0);
            match end {
                Some("</pre>") => self.code(&strip(a), false),
                Some(_) => fig |= self.figure(w, w * 0.625, &mut |p, x, y| p.plot(a, x, y, w)),
                None if !strip(a).trim().is_empty() => self.para(&strip(a), St(0, 10.0, self.pal[3], 0), 0.0),
                None => {}
            }
            rest = b;
        }
        if !caption.is_empty() { self.caption(caption, fig) }
    }
    /// A PNG as an image XObject; its pixel size.
    fn png(&mut self, b: &[u8]) -> Option<(usize, usize)> {
        let (mut o, mut idat, mut plte, mut trns, mut ih) = (8, vec![], vec![], vec![], [0; 5]);
        while o + 8 <= b.len() && b.starts_with(b"\x89PNG\r\n\x1a\n") {
            let d = b.get(o + 8..o + 8 + be(b, o, 4))?;
            match &b[o + 4..o + 8] {
                b"IHDR" => ih = [be(d, 0, 4), be(d, 4, 4), d[8] as usize, d[9] as usize, d[12] as usize],
                b"PLTE" => plte = d.to_vec(),
                b"tRNS" => trns = d.to_vec(),
                b"IDAT" => idat.extend_from_slice(d),
                _ => {}
            }
            o += 12 + d.len();
        }
        let [w, h, depth, ct, interlace] = ih;
        let hex: String = plte.iter().map(|x| format!("{x:02X}")).collect();
        let (cs, n) = match ct { 0 => ("/DeviceGray".into(), 1), 2 => ("/DeviceRGB".into(), 3), 3 => (format!("[/Indexed/DeviceRGB {} <{hex}>]", plte.len() / 3 - 1), 1), _ => return None };
        let mask: Vec<String> = match ct {
            3 => match trns.iter().take_while(|&&a| a < 128).count() { 0 => vec![], n => vec!["0".into(), (n - 1).to_string()] },
            _ => trns.chunks(2).flat_map(|v| [be(v, 0, 2).to_string(), be(v, 0, 2).to_string()]).collect(),
        };
        if depth != 8 || interlace != 0 || w == 0 { return None }
        let dict = format!("/Type/XObject/Subtype/Image/Width {w}/Height {h}/ColorSpace {cs}/BitsPerComponent 8/Mask[{}]/Filter/FlateDecode/DecodeParms<</Predictor 15/Colors {n}/BitsPerComponent 8/Columns {w}>>", mask.join(" "));
        self.imgs.push(stream(&dict, &idat));
        Some((w, h))
    }
    fn math(&mut self, t: &str) {
        let mut b = self.mbox(&doc::tex(t), 12.0);
        if b.0 > self.col { b = self.mbox(&doc::tex(t), 12.0 * self.col / b.0) }
        if self.need(b.1 + b.2 + 12.0) {
            let (x, y) = (self.x + (self.col - b.0) / 2.0, self.y + b.1 + 6.0);
            self.y = y + b.2 + 8.0;
            self.mdraw(b, x, y, self.pal[2]);
        }
    }

    /// The file: catalog, pages, info, shared resources, fonts, images, then each page.
    fn finish(self, title: &str) -> Vec<u8> {
        let mut objs: Vec<Vec<u8>> = vec![vec![]; 4];
        let mut add = |b: Vec<u8>| (objs.push(b), objs.len()).1;
        let mut fonts = String::new();
        for (i, (_, f)) in self.fonts.iter().enumerate() {
            let file = add(stream("/Subtype/OpenType", &f.data));
            let m = &f.m;
            let desc = add(format!("<</Type/FontDescriptor/FontName/F{i}/Flags 4/FontBBox[{} {} {} {}]/ItalicAngle 0/Ascent {}/Descent {}/CapHeight {4}/StemV 80/FontFile3 {file} 0 R>>", m[0], m[1], m[2], m[3], m[4], m[5]).into_bytes());
            let ws: Vec<String> = (0..f.nh).map(|g| f.adv(g).to_string()).collect();
            let cid = add(format!("<</Type/Font/Subtype/CIDFontType0/BaseFont/F{i}/CIDSystemInfo<</Registry(Adobe)/Ordering(Identity)/Supplement 0>>/FontDescriptor {desc} 0 R/DW {}/W[0[{}]]>>", f.adv(f.nh), ws.join(" ")).into_bytes());
            let map: Vec<String> = f.used.iter().filter(|u| *u.0 > 0).map(|(g, c)| format!("<{g:04X}><{}>", c.encode_utf16(&mut [0; 2]).iter().map(|u| format!("{u:04X}")).collect::<String>())).collect();
            let cmap: String = map.chunks(100).map(|c| format!("{} beginbfchar\n{}\nendbfchar\n", c.len(), c.join("\n"))).collect();
            let cmap = format!("/CIDInit/ProcSet findresource begin 12 dict begin begincmap/CIDSystemInfo<</Registry(Adobe)/Ordering(UCS)/Supplement 0>>def/CMapName/Adobe-Identity-UCS def/CMapType 2 def\n1 begincodespacerange <0000><FFFF> endcodespacerange\n{cmap}endcmap CMapName currentdict/CMap defineresource pop end end");
            let tu = add(stream("", cmap.as_bytes()));
            w!(fonts, "/F{i} {} 0 R", add(format!("<</Type/Font/Subtype/Type0/BaseFont/F{i}/Encoding/Identity-H/DescendantFonts[{cid} 0 R]/ToUnicode {tu} 0 R>>").into_bytes()));
        }
        let imgs: String = self.imgs.into_iter().enumerate().map(|(i, b)| format!("/I{i} {} 0 R", add(b))).collect();
        let gs: String = self.gs.iter().map(|(k, v)| format!("{k}{v}")).collect();
        let kids: Vec<String> = self.pages.iter().map(|(c, a)| {
            let c = add(stream("", c.as_bytes()));
            format!("{} 0 R", add(format!("<</Type/Page/Parent 2 0 R/MediaBox[0 0 {} {}]/Resources 4 0 R/Contents {c} 0 R/Annots[{a}]>>", self.w, self.h).into_bytes()))
        }).collect();
        let title: String = title.encode_utf16().map(|u| format!("{u:04X}")).collect();
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
        o.extend(format!("xref\n0 {n}\n0000000000 65535 f \n{at}trailer\n<</Size {n}/Root 1 0 R/Info 3 0 R/ID[<{id}><{id}>]>>\nstartxref\n{}\n%%EOF\n", o.len()).as_bytes());
        o
    }
}

/// One form (`FORMS`) of a notebook. `out` is each cell's output HTML, `stage` the scenes' data;
/// `get` resolves `fonts/<name>.otf` and the notebook's assets.
pub fn write(d: &Doc, out: &[String], stage: &[f32], get: &dyn Fn(&str) -> Option<Vec<u8>>, form: usize) -> Vec<u8> {
    let slides = form == 1;
    let (body, head) = match d.get("font") { "book" => ("book", "book"), "tex" => ("tex", "tex"), _ => ("sans", "book") };
    let (w, h, m, mx) = if slides { (720.0, 405.0, 36.0, 36.0) } else { (595.28, 841.89, 56.69, 62.36) };
    let pal = theme::palette(theme::export(match d.get("theme") { "" => "site", t => t }, d.get("print")), d.get("colors"));
    let mut p = Pdf { get, files: [body, head, "mono", "math"], fonts: vec![], pages: vec![], gs: BTreeMap::new(), imgs: vec![], pal, w, h, m, x: mx, col: w - 2.0 * mx, y: 0.0, slides, fig: 0 };
    let (fg, fg2, muted, text) = (pal[2], pal[3], pal[4], St(0, if slides { 13.0 } else { 11.0 }, pal[3], 0));
    let sc: Vec<u32> = d.get("palette").split_whitespace().filter_map(|c| u32::from_str_radix(c.trim_start_matches('#'), 16).ok()).chain([0; 4]).collect();
    p.page();
    p.para(d.get("title"), St(1, if slides { 32.0 } else { 22.0 }, fg, 0), 0.0);
    p.para(d.get("summary"), St(1, 13.0, fg2, 0), 0.0);
    p.para(&format!("[Interactive version](index.html) · {}", FORMS[form]), St(0, 9.0, muted, 0), 0.0);
    let (chapters, mut k, mut n, mut skip) = (d.chapters(), 0, 0, false);
    for (at, b) in d.blocks.iter().enumerate() {
        match b {
            B::H(2, t, _) if let Some(c) = chapters.iter().find(|c| c.at == at) => {
                (skip, n) = (false, n + 1);
                let ops = scene::list(d.get("seed").parse().unwrap_or(1), c.scene, c.t, c.p, -1.0, -1.0, stage, [sc[0], sc[1], sc[2], sc[3]]);
                if slides {
                    (p.x, p.col) = (mx, w - 2.0 * mx);
                    p.page();
                    p.para(t, St(1, 26.0, fg, 0), 0.0);
                    let s = h - p.y - m;
                    (p.frame(&ops, w - mx - s, p.y, s), p.col = w - 3.0 * mx - s);
                    continue;
                }
                let s = p.col * if form == 2 { 0.7 } else { 0.45 };
                p.need(s + 66.0);
                p.heading(&if form == 3 { format!("{n}  {t}") } else { t.clone() }, 14.0);
                if p.figure(s, s, &mut |p, x, y| p.frame(&ops, x, y, s)) { p.caption(&format!("{t}, at t = {} s.", c.t), true) }
            }
            B::H(l, t, _) => {
                skip = slides && *l == 1;
                if !skip { p.heading(t, if *l == 1 { 16.0 } else { 12.0 }) }
            }
            _ if skip => {}
            B::P(t) => p.para(t, text, 0.0),
            B::L(ord, items) => {
                for (i, t) in items.iter().enumerate() {
                    if !p.need(1.35 * text.1) { break }
                    let (x, y) = (p.x + 2.0, p.y + 1.35 * text.1);
                    p.put(x, y, text, &if *ord { format!("{}.", i + 1) } else { "•".into() });
                    p.para(t, text, 16.0);
                }
            }
            B::C(l, s, _) if l == "rust" => {
                let (caption, code) = cell::opts(s);
                if form == 0 { p.code(&code, true) }
                if let Some(o) = out.get(k).filter(|_| !slides) { p.output(o, &caption) }
                k += 1;
            }
            B::C(l, s, _) if l == "say" => s.split("\n\n").filter(|_| form == 0 || form == 2).for_each(|t| p.para(t, St(0, 9.5, muted, 2), 12.0)),
            B::C(_, s, _) => if form == 0 { p.code(s, true) },
            B::M(t) => p.math(t),
            B::Img(_, _) if slides => {}
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
    let refs = d.links();
    if !slides && !refs.is_empty() {
        p.heading("References", 12.0);
        refs.iter().enumerate().for_each(|(i, (t, u))| p.para(&format!("{}. {t}: [{u}]({u})", i + 1), St(0, 9.0, fg2, 0), 0.0));
    }
    p.finish(d.get("title"))
}
