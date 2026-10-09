//! Markdown and TeX: one parser for every view. A notebook is front matter, then blocks;
//! each `##` heading is a chapter with a shared scene (`{scene=8 t=3}`), ```` ```rust ````
//! fences are cells, ```` ```say ```` fences are narration and HTML comments hold agent skills.

use crate::cell;

pub fn esc(s: &str) -> String {
    s.replace('&', "&amp;").replace('<', "&lt;").replace('>', "&gt;").replace('"', "&quot;")
}

#[derive(Debug, Clone, PartialEq)]
pub enum B {
    H(usize, String, String),   // level, text, attributes
    P(String),
    L(bool, Vec<String>),       // ordered, items
    C(String, String, usize),   // language, body, line of the body's first line
    M(String),                  // display TeX
    Raw(String),
    Com(String),
    Img(String, String),        // alt, src
}

pub struct Doc {
    pub meta: Vec<(String, String)>,
    pub blocks: Vec<B>,
}

/// A chapter: its heading's block index, title and scene state for still frames.
pub struct Ch {
    pub at: usize,
    pub title: String,
    pub scene: u32,
    pub t: f32,
    pub p: f32,
}

pub fn attr<'a>(a: &'a str, k: &str) -> Option<&'a str> {
    a.split_whitespace().find_map(|x| x.strip_prefix(k)?.strip_prefix('='))
}

impl Doc {
    pub fn get(&self, k: &str) -> &str {
        self.meta.iter().find(|m| m.0 == k).map_or("", |m| m.1.as_str())
    }
    pub fn cells(&self) -> Vec<(&str, usize)> {
        self.blocks.iter().filter_map(|b| match b { B::C(l, s, n) if l == "rust" => Some((s.as_str(), *n)), _ => None }).collect()
    }
    pub fn fence(&self, lang: &str) -> Vec<&str> {
        self.blocks.iter().filter_map(|b| match b { B::C(l, s, _) if l == lang => Some(s.as_str()), _ => None }).collect()
    }
    pub fn skills(&self) -> Vec<&str> {
        self.blocks.iter().filter_map(|b| match b { B::Com(s) => Some(s.as_str()), _ => None }).collect()
    }
    pub fn chapters(&self) -> Vec<Ch> {
        let mut v: Vec<Ch> = vec![];
        for (at, b) in self.blocks.iter().enumerate() {
            if let B::H(2, h, a) = b {
                let f = |k, d: f32| attr(a, k).and_then(|x| x.parse().ok()).unwrap_or(d);
                let scene = attr(a, "scene").and_then(|x| x.parse().ok()).unwrap_or(v.last().map_or(0, |c| c.scene));
                v.push(Ch { at, title: h.clone(), scene, t: f("t", 7.0), p: f("p", -1.0) });
            }
        }
        v
    }
    /// Every link, in order of first appearance.
    pub fn links(&self) -> Vec<(String, String)> {
        let mut v: Vec<(String, String)> = vec![];
        for b in &self.blocks {
            let texts = match b { B::P(s) | B::H(_, s, _) => vec![s.as_str()], B::L(_, i) => i.iter().map(|s| s.as_str()).collect(), _ => vec![] };
            for sp in texts.into_iter().flat_map(spans) {
                if let Sp::A(t, u) = sp && !v.iter().any(|x| x.1 == u) {
                    v.push((t, u));
                }
            }
        }
        v
    }
}

/// A list item: ordered or not, and its text.
fn item(t: &str) -> Option<(bool, &str)> {
    t.strip_prefix("- ").map(|r| (false, r)).or_else(|| {
        let (n, r) = t.split_once(". ")?;
        (!n.is_empty() && n.bytes().all(|b| b.is_ascii_digit())).then_some((true, r))
    })
}

/// The source with front-matter `key: value` set (added if missing), all else untouched.
pub fn set_meta(src: &str, k: &str, v: &str) -> String {
    let line = format!("{k}: {v}");
    let Some((head, tail)) = src.strip_prefix("---\n").and_then(|r| r.find("\n---").map(|e| r.split_at(e))) else {
        return format!("---\n{line}\n---\n\n{src}");
    };
    let mut l: Vec<&str> = head.lines().collect();
    match l.iter().position(|x| x.split_once(':').is_some_and(|x| x.0.trim() == k)) {
        Some(i) => l[i] = &line,
        None => l.push(&line),
    }
    format!("---\n{}{tail}", l.join("\n"))
}

pub fn parse(src: &str) -> Doc {
    let l: Vec<&str> = src.lines().collect();
    let (mut meta, mut blocks, mut i) = (vec![], vec![], 0);
    if l.first() == Some(&"---") {
        i = 1;
        while i < l.len() && l[i] != "---" {
            if let Some((k, v)) = l[i].split_once(':') {
                meta.push((k.trim().into(), v.trim().into()));
            }
            i += 1;
        }
        i += 1;
    }
    let find = |i: usize, f: &dyn Fn(&str) -> bool| (i..l.len()).find(|&j| f(l[j])).unwrap_or(l.len());
    let starts = |t: &str| t.is_empty() || ["```", "#", "$$", "<!--", "- ", "!["].iter().any(|p| t.starts_with(p));
    while i < l.len() {
        let t = l[i].trim();
        if t.is_empty() {
            i += 1;
        } else if let Some(lang) = t.strip_prefix("```") {
            let j = find(i + 1, &|x| x.trim_end() == "```");
            blocks.push(B::C(lang.trim().into(), l[(i + 1).min(j)..j].join("\n"), i + 2));
            i = j + 1;
        } else if t == "$$" {
            let j = find(i + 1, &|x| x.trim() == "$$");
            blocks.push(B::M(l[i + 1..j].join("\n")));
            i = j + 1;
        } else if t.starts_with('#') {
            let n = t.bytes().take_while(|&b| b == b'#').count();
            let h = t[n..].trim();
            let (h, a) = h.strip_suffix('}').and_then(|h| h.rsplit_once(" {")).unwrap_or((h, ""));
            blocks.push(B::H(n, h.into(), a.into()));
            i += 1;
        } else if t.starts_with("<!--") {
            let j = find(i, &|x| x.contains("-->")).min(l.len() - 1);
            let s = l[i..=j].join("\n");
            blocks.push(B::Com(s.trim().trim_start_matches("<!--").trim_end_matches("-->").trim().into()));
            i = j + 1;
        } else if t.starts_with('<') {
            let j = find(i, &|x| x.trim().is_empty());
            blocks.push(B::Raw(l[i..j].join("\n")));
            i = j;
        } else if let Some(r) = t.strip_prefix("![") && let Some((alt, src)) = r.split_once("](") {
            blocks.push(B::Img(alt.into(), src.trim_end_matches(')').into()));
            i += 1;
        } else if let Some((ord, _)) = item(t) {
            let mut items: Vec<String> = vec![];
            while i < l.len() && !l[i].trim().is_empty() {
                match item(l[i].trim()) {
                    Some((_, r)) => items.push(r.into()),
                    None if starts(l[i].trim()) => break,
                    None => *items.last_mut().unwrap() += &format!(" {}", l[i].trim()),
                }
                i += 1;
            }
            blocks.push(B::L(ord, items));
        } else {
            let j = (i + 1..l.len()).find(|&j| starts(l[j].trim())).unwrap_or(l.len());
            blocks.push(B::P(l[i..j].iter().map(|x| x.trim()).collect::<Vec<_>>().join(" ")));
            i = j;
        }
    }
    Doc { meta, blocks }
}

/// An inline run: text with style bits (1 strong, 2 em, 4 code), TeX, or a link.
#[derive(Debug, PartialEq)]
pub enum Sp {
    T(String, u8),
    M(String),
    A(String, String),
}

pub fn spans(s: &str) -> Vec<Sp> {
    let c: Vec<char> = s.chars().collect();
    let (mut v, mut cur, mut st, mut i) = (vec![], String::new(), 0u8, 0);
    let close = |d: char, from: usize| (from..c.len()).find(|&j| c[j] == d);
    let text = |a: usize, b: usize| c[a..b].iter().collect::<String>();
    macro_rules! flush { () => { if !cur.is_empty() { v.push(Sp::T(std::mem::take(&mut cur), st)); } } }
    while i < c.len() {
        match c[i] {
            '\\' if i + 1 < c.len() => (cur.push(c[i + 1]), i += 2).1,
            q @ ('`' | '$') if let Some(j) = close(q, i + 1) => {
                flush!();
                v.push(if q == '$' { Sp::M(text(i + 1, j)) } else { Sp::T(text(i + 1, j), st | 4) });
                i = j + 1;
            }
            '*' => {
                flush!();
                let two = c.get(i + 1) == Some(&'*');
                st ^= if two { 1 } else { 2 };
                i += 1 + two as usize;
            }
            '[' if let Some(j) = close(']', i + 1) && c.get(j + 1) == Some(&'(') && let Some(k) = close(')', j + 2) => {
                flush!();
                v.push(Sp::A(text(i + 1, j), text(j + 2, k)));
                i = k + 1;
            }
            ch => (cur.push(ch), i += 1).1,
        }
    }
    flush!();
    v
}

pub fn inline(s: &str) -> String {
    spans(s).iter().map(|sp| match sp {
        Sp::T(t, st) => [(4, "code"), (2, "em"), (1, "strong")].iter().fold(esc(t), |h, (b, tag)| if st & b > 0 { format!("<{tag}>{h}</{tag}>") } else { h }),
        Sp::M(m) => mathml(m, false),
        Sp::A(t, u) => format!("<a href=\"{}\">{}</a>", esc(u), esc(t)),
    }).collect()
}

/// TeX maths: identifier, number, operator, text, row, fraction, root, scripts (base, sub, sup).
#[derive(Debug, Clone, PartialEq)]
pub enum M {
    I(String),
    N(String),
    O(String),
    T(String),
    R(Vec<M>),
    F(Box<M>, Box<M>),
    Q(Box<M>),
    S(Box<M>, Option<Box<M>>, Option<Box<M>>),
}

const GREEK: &str = "alpha α beta β gamma γ delta δ epsilon ϵ varepsilon ε zeta ζ eta η theta θ kappa κ lambda λ mu μ nu ν xi ξ pi π rho ρ sigma σ tau τ phi ϕ varphi φ chi χ psi ψ omega ω Gamma Γ Delta Δ Theta Θ Lambda Λ Xi Ξ Pi Π Sigma Σ Phi Φ Psi Ψ Omega Ω";
const OPS: &str = "cdot ⋅ times × le ≤ leq ≤ ge ≥ geq ≥ ne ≠ neq ≠ approx ≈ sim ∼ infty ∞ sum ∑ prod ∏ int ∫ to → rightarrow → pm ± partial ∂ propto ∝ ldots … cdots ⋯ in ∈ lfloor ⌊ rfloor ⌋ lceil ⌈ rceil ⌉ langle ⟨ rangle ⟩ mid ∣";
const FUNS: &str = "ln log exp sin cos tan min max lim det arg";

fn look(table: &str, k: &str) -> Option<String> {
    let w: Vec<&str> = table.split(' ').collect();
    w.chunks(2).find(|p| p[0] == k).map(|p| p[1].into())
}

pub fn tex(s: &str) -> M {
    let c: Vec<char> = s.chars().collect();
    M::R(row(&c, &mut 0, '\0'))
}

fn row(c: &[char], i: &mut usize, end: char) -> Vec<M> {
    let mut v = vec![];
    while *i < c.len() && c[*i] != end {
        let ch = c[*i];
        if ch == '^' || ch == '_' {
            *i += 1;
            let arg = Some(Box::new(atom(c, i).unwrap_or(M::R(vec![]))));
            let (b, sb, sp) = match v.pop() { Some(M::S(b, sb, sp)) => (b, sb, sp), m => (Box::new(m.unwrap_or(M::R(vec![]))), None, None) };
            v.push(if ch == '^' { M::S(b, sb, arg) } else { M::S(b, arg, sp) });
        } else if let Some(m) = atom(c, i) {
            v.push(m);
        }
    }
    v
}

fn atom(c: &[char], i: &mut usize) -> Option<M> {
    while c.get(*i).is_some_and(|c| c.is_whitespace()) {
        *i += 1;
    }
    let ch = *c.get(*i)?;
    *i += 1;
    let run = |i: &mut usize, f: fn(&char) -> bool| {
        let s = *i;
        while c.get(*i).is_some_and(f) {
            *i += 1;
        }
        c[s..*i].iter().collect::<String>()
    };
    Some(match ch {
        '{' => (M::R(row(c, i, '}')), *i += 1).0,
        '0'..='9' | '.' => M::N(format!("{ch}{}", run(i, |c| c.is_ascii_digit() || *c == '.'))),
        '\\' => {
            let name = run(i, char::is_ascii_alphabetic);
            match name.as_str() {
                "" => {
                    let x = *c.get(*i)?;
                    *i += 1;
                    if ",;: !".contains(x) { M::T(" ".into()) } else { M::O(x.into()) }
                }
                "frac" => M::F(Box::new(atom(c, i)?), Box::new(atom(c, i)?)),
                "sqrt" => M::Q(Box::new(atom(c, i)?)),
                "text" | "mathrm" | "operatorname" => {
                    while c.get(*i) == Some(&' ') {
                        *i += 1;
                    }
                    *i += 1;
                    let t = (run(i, |c| *c != '}'), *i += 1).0;
                    if name == "text" { M::T(t) } else { M::I(t) }
                }
                "left" | "right" | "big" | "Big" => atom(c, i).filter(|m| *m != M::O(".".into())).unwrap_or(M::R(vec![])),
                "quad" | "qquad" => M::T("  ".into()),
                n if FUNS.split(' ').any(|f| f == n) => M::I(n.into()),
                n => look(GREEK, n).map(M::I).or_else(|| look(OPS, n).map(M::O)).unwrap_or(M::T(n.into())),
            }
        }
        c if c.is_alphabetic() => M::I(c.into()),
        '-' => M::O("−".into()),
        c => M::O(c.into()),
    })
}

pub fn mathml(src: &str, display: bool) -> String {
    fn ml(m: &M) -> String {
        let b = |m: &Option<Box<M>>| m.as_deref().map(ml).unwrap_or_default();
        match m {
            M::I(s) => format!("<mi>{}</mi>", esc(s)),
            M::N(s) => format!("<mn>{}</mn>", esc(s)),
            M::O(s) => format!("<mo>{}</mo>", esc(s)),
            M::T(s) => format!("<mtext>{}</mtext>", esc(s)),
            M::R(v) => format!("<mrow>{}</mrow>", v.iter().map(ml).collect::<String>()),
            M::F(a, c) => format!("<mfrac>{}{}</mfrac>", ml(a), ml(c)),
            M::Q(a) => format!("<msqrt>{}</msqrt>", ml(a)),
            M::S(x, s, p) => {
                let tag = match (s.is_some(), p.is_some()) { (true, true) => "msubsup", (true, _) => "msub", _ => "msup" };
                format!("<{tag}>{}{}{}</{tag}>", ml(x), b(s), b(p))
            }
        }
    }
    format!("<math{}>{}</math>", if display { " display=\"block\"" } else { "" }, ml(&tex(src)))
}

/// What a run produced for the compiled cells, and how the current cells map onto them.
/// `map[k]` is the compiled cell whose output cell k shows; `stale[k]` marks it out of date.
#[derive(Default)]
pub struct Run {
    pub out: Vec<String>,
    pub ctl: Vec<String>,
    pub map: Vec<Option<usize>>,
    pub stale: Vec<bool>,
}

/// The notebook body: chapters as sections, cells with their controls and outputs,
/// narration, figures, then references. `img` resolves an asset path for the page.
pub fn article(d: &Doc, run: &Run, img: &dyn Fn(&str) -> String) -> String {
    let (mut o, mut k, mut open) = (String::new(), 0, "");
    let chapters = d.chapters();
    for (at, b) in d.blocks.iter().enumerate() {
        match b {
            B::H(1, h, _) => {
                w!(o, "{open}<details><summary>{}</summary>", inline(h));
                open = "</details>";
            }
            B::H(2, h, _) if let Some(c) = chapters.iter().find(|c| c.at == at) => {
                o += if open == "</section>" { open } else { "" };
                w!(o, "<section class=\"chapter\" data-chapter=\"{}\"><h2>{}</h2><canvas class=\"frame still\" data-scene=\"{0}\" data-t=\"{}\" data-progress=\"{}\" aria-hidden=\"true\"></canvas>", c.scene, inline(h), c.t, c.p);
                open = "</section>";
            }
            B::H(n, h, _) => w!(o, "<h{n}>{}</h{n}>", inline(h)),
            B::P(p) => w!(o, "<p>{}</p>", inline(p)),
            B::L(ord, items) => {
                let tag = if *ord { "ol" } else { "ul" };
                w!(o, "<{tag}>{}</{tag}>", items.iter().map(|x| format!("<li>{}</li>", inline(x))).collect::<String>());
            }
            B::C(l, s, _) if l == "rust" => {
                let (caption, code) = cell::opts(s);
                let stale = if run.stale.get(k) == Some(&true) { " stale" } else { "" };
                w!(o, "<div class=\"cell{stale}\" data-cell=\"{k}\"><pre class=\"code\"><code>{}</code></pre>", cell::hl(&code));
                if let Some(Some(j)) = run.map.get(k) {
                    w!(o, "<div class=\"ctls\" data-ctl=\"{j}\">{}</div><div class=\"out\" data-out=\"{j}\">{}</div>", run.ctl[*j], run.out[*j]);
                }
                if !caption.is_empty() {
                    w!(o, "<p class=\"caption\">{}</p>", inline(&caption));
                }
                o += "</div>";
                k += 1;
            }
            B::C(l, s, _) if l == "say" => w!(o, "<aside class=\"say\">{}</aside>", s.split("\n\n").map(|p| format!("<p>{}</p>", inline(p))).collect::<String>()),
            B::C(l, s, _) => w!(o, "<pre class=\"code\" data-lang=\"{}\"><code>{}</code></pre>", esc(l), esc(s)),
            B::M(m) => w!(o, "<div class=\"eq\">{}</div>", mathml(m, true)),
            B::Raw(h) => o += h,
            B::Com(_) => {}
            B::Img(alt, src) => w!(o, "<figure><img src=\"{}\" alt=\"{}\"><figcaption>{}</figcaption></figure>", img(src), esc(alt), inline(alt)),
        }
    }
    o += open;
    let refs = d.links();
    if !refs.is_empty() {
        w!(o, "<section class=\"refs\"><h3>References</h3><ol>{}</ol></section>", refs.iter().map(|(t, u)| format!("<li>{} <a href=\"{}\">{}</a></li>", esc(t), esc(u), esc(u))).collect::<String>());
    }
    o
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_blocks_spans_and_maths() {
        let d = parse("---\ntitle: T\ntheme: nord\n---\nIntro *a* **b** `c` $x^2$ [l](u)\nmore\n\n## One {scene=8 t=3}\n\n- i\n- j\n  k\n\n```rust\nlet a = 1;\n```\n\n<!-- skill: be brief -->\n\n$$\n\\frac{a}{b}\n$$\n\n![A dot](a.png)\n\n# Notes\n\nEnd.");
        assert_eq!((d.get("title"), d.get("theme"), d.get("x")), ("T", "nord", ""));
        assert_eq!(d.blocks[0], B::P("Intro *a* **b** `c` $x^2$ [l](u) more".into()));
        assert_eq!(d.blocks[2], B::L(false, vec!["i".into(), "j k".into()]));
        assert_eq!(d.cells(), vec![("let a = 1;", 15)]);
        assert_eq!((d.skills(), d.links()), (vec!["skill: be brief"], vec![("l".into(), "u".into())]));
        assert_eq!(set_meta("---\na: 1\ntheme: x\n---\nB", "theme", "nord"), "---\na: 1\ntheme: nord\n---\nB");
        assert_eq!(set_meta("B", "font", "tex"), "---\nfont: tex\n---\n\nB");
        let c = &d.chapters()[0];
        assert_eq!((c.scene, c.t, c.p), (8, 3.0, -1.0));
        assert_eq!(inline("*a* **b** `c<` \\*"), "<em>a</em> <strong>b</strong> <code>c&lt;</code> *");
        assert_eq!(mathml("x_i^2 - \\alpha", false), "<math><mrow><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>−</mo><mi>α</mi></mrow></math>");
        assert!(mathml("\\frac{1}{\\sqrt{2}} \\text{ dB}", true).contains("<mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>2</mn></mrow></msqrt></mrow></mfrac><mtext> dB</mtext>"));
        let html = article(&d, &Run { out: vec!["O".into()], ctl: vec!["C".into()], map: vec![Some(0)], stale: vec![true] }, &|s| format!("data:{s}"));
        assert!(html.contains("data-chapter=\"8\"><h2>One</h2>") && html.contains("class=\"cell stale\"") && html.contains("data-out=\"0\">O</div>"));
        assert!(html.contains("src=\"data:a.png\"") && html.contains("<details><summary>Notes</summary><p>End.</p></details><section class=\"refs\">"));
    }
}
