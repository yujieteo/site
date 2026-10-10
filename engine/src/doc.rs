//! Markdown and TeX: one parser for every view. A notebook is front matter, then blocks;
//! each `##` heading is a chapter, with a scene if it names one (`{scene=6 t=3}`), ```` ```rust ````
//! fences are cells, ```` ```say ```` fences are narration and HTML comments hold agent skills.

use crate::cell;

pub fn esc(s: &str) -> String { s.replace('&', "&amp;").replace('<', "&lt;").replace('>', "&gt;").replace('"', "&quot;") }

/// A block: heading (level, text, attributes), paragraph, list (ordered, items), fence (language,
/// body, line of the body's first line), display TeX, raw HTML, comment, image (alt, src).
#[derive(Debug, Clone, PartialEq)]
pub enum B { H(usize, String, String), P(String), L(bool, Vec<String>), C(String, String, usize),
    M(String), Raw(String), Com(String), Img(String, String) }

pub struct Doc { pub meta: Vec<(String, String)>, pub blocks: Vec<B> }

/// A chapter: its heading's block index, title and scene state for still frames. A chapter
/// shows a scene only when its heading names one, and not the same frame as the chapter before.
pub struct Ch { pub at: usize, pub title: String, pub scene: Option<u32>, pub t: f32, pub p: f32 }

pub fn attr<'a>(a: &'a str, k: &str) -> Option<&'a str> { a.split_whitespace().find_map(|x| x.strip_prefix(k)?.strip_prefix('=')) }

impl Doc {
    pub fn get(&self, k: &str) -> &str { self.meta.iter().find(|m| m.0 == k).map_or("", |m| m.1.as_str()) }
    /// A language's fences: each body and the line of its first line.
    pub fn fence(&self, lang: &str) -> Vec<(&str, usize)> {
        self.blocks.iter().filter_map(|b| match b { B::C(l, s, n) if l == lang => Some((s.as_str(), *n)), _ => None }).collect()
    }
    pub fn cells(&self) -> Vec<(&str, usize)> { self.fence("rust") }
    pub fn skills(&self) -> Vec<&str> { self.blocks.iter().filter_map(|b| match b { B::Com(s) => Some(s.as_str()), _ => None }).collect() }
    pub fn chapters(&self) -> Vec<Ch> {
        let mut v: Vec<Ch> = vec![];
        for (at, b) in self.blocks.iter().enumerate() {
            let B::H(2, h, a) = b else { continue };
            let f = |k, d: f32| attr(a, k).and_then(|x| x.parse().ok()).unwrap_or(d);
            let mut c = Ch { at, title: h.clone(), scene: attr(a, "scene").and_then(|x| x.parse().ok()), t: f("t", 7.0), p: f("p", -1.0) };
            if v.last().is_some_and(|l| (l.scene, l.t, l.p) == (c.scene, c.t, c.p)) { c.scene = None }
            v.push(c);
        }
        v
    }
    /// Every link, in order of first appearance.
    pub fn links(&self) -> Vec<(String, String)> {
        let mut v: Vec<(String, String)> = vec![];
        let texts = self.blocks.iter().flat_map(|b| match b { B::P(s) | B::H(_, s, _) => std::slice::from_ref(s), B::L(_, i) => i.as_slice(), _ => &[] });
        for sp in texts.flat_map(|s| spans(s)) {
            if let Sp::A(t, u) = sp && !v.iter().any(|x| x.1 == u) { v.push((t, u)) }
        }
        v
    }
}

/// A list item: ordered or not, and its text.
fn item(t: &str) -> Option<(bool, &str)> {
    let numbered = t.split_once(". ").filter(|(n, _)| !n.is_empty() && n.bytes().all(|b| b.is_ascii_digit()));
    t.strip_prefix("- ").map(|r| (false, r)).or(numbered.map(|(_, r)| (true, r)))
}

pub fn parse(src: &str) -> Doc {
    let l: Vec<&str> = src.lines().collect();
    let (mut meta, mut blocks, mut i) = (vec![], vec![], 0);
    let find = |i: usize, f: &dyn Fn(&str) -> bool| (i..l.len()).find(|&j| f(l[j])).unwrap_or(l.len());
    let starts = |t: &str| t.is_empty() || ["```", "#", "$$", "<!--", "- ", "!["].iter().any(|p| t.starts_with(p));
    if l.first() == Some(&"---") {
        i = find(1, &|x| x == "---") + 1;
        meta = l[1..i - 1].iter().filter_map(|x| x.split_once(':')).map(|(k, v)| (k.trim().into(), v.trim().into())).collect();
    }
    while i < l.len() {
        let t = l[i].trim();
        if t.is_empty() { i += 1; continue }
        let (b, next) = if let Some(lang) = t.strip_prefix("```") {
            let j = find(i + 1, &|x| x.trim_end() == "```");
            (B::C(lang.trim().into(), l[(i + 1).min(j)..j].join("\n"), i + 2), j + 1)
        } else if t == "$$" {
            let j = find(i + 1, &|x| x.trim() == "$$");
            (B::M(l[i + 1..j].join("\n")), j + 1)
        } else if t.starts_with('#') {
            let (n, h) = (t.bytes().take_while(|&b| b == b'#').count(), t.trim_start_matches('#').trim());
            let (h, a) = h.strip_suffix('}').and_then(|h| h.rsplit_once(" {")).unwrap_or((h, ""));
            (B::H(n, h.into(), a.into()), i + 1)
        } else if t.starts_with("<!--") {
            let j = find(i, &|x| x.contains("-->")).min(l.len() - 1);
            (B::Com(l[i..=j].join("\n").trim().trim_start_matches("<!--").trim_end_matches("-->").trim().into()), j + 1)
        } else if t.starts_with('<') {
            let j = find(i, &|x| x.trim().is_empty());
            (B::Raw(l[i..j].join("\n")), j)
        } else if let Some(r) = t.strip_prefix("![") && let Some((alt, src)) = r.split_once("](") {
            (B::Img(alt.into(), src.trim_end_matches(')').into()), i + 1)
        } else if let Some((ord, _)) = item(t) {
            let mut items: Vec<String> = vec![];
            while let Some(x) = l.get(i).map(|x| x.trim()) && !x.is_empty() {
                match item(x) { Some((_, r)) => items.push(r.into()), None if starts(x) => break, None => *items.last_mut().unwrap() += &format!(" {x}") }
                i += 1;
            }
            (B::L(ord, items), i)
        } else {
            let j = find(i + 1, &|x| starts(x.trim()));
            (B::P(l[i..j].iter().map(|x| x.trim()).collect::<Vec<_>>().join(" ")), j)
        };
        blocks.push(b);
        i = next;
    }
    Doc { meta, blocks }
}

/// An inline run: text with style bits (1 strong, 2 em, 4 code), TeX, or a link.
#[derive(Debug, PartialEq)]
pub enum Sp { T(String, u8), M(String), A(String, String) }

pub fn spans(s: &str) -> Vec<Sp> {
    let c: Vec<char> = s.chars().collect();
    let (mut v, mut cur, mut st, mut i) = (vec![], String::new(), 0u8, 0);
    let close = |d: char, from: usize| (from..c.len()).find(|&j| c[j] == d);
    let text = |a: usize, b: usize| c[a..b].iter().collect::<String>();
    macro_rules! flush { () => { if !cur.is_empty() { v.push(Sp::T(std::mem::take(&mut cur), st)); } } }
    while i < c.len() {
        // A marker ends the pending text: the span it makes (if any), where to go on, and the style after it.
        let (sp, next, after) = match c[i] {
            '\\' if i + 1 < c.len() => { cur.push(c[i + 1]); i += 2; continue }
            '`' if let Some(j) = close('`', i + 1) => (Some(Sp::T(text(i + 1, j), st | 4)), j + 1, st),
            '$' if let Some(j) = close('$', i + 1) => (Some(Sp::M(text(i + 1, j))), j + 1, st),
            '*' => { let two = c.get(i + 1) == Some(&'*'); (None, i + 1 + two as usize, st ^ if two { 1 } else { 2 }) }
            '[' if let Some(j) = close(']', i + 1) && c.get(j + 1) == Some(&'(') && let Some(k) = close(')', j + 2) => {
                (Some(Sp::A(text(i + 1, j), text(j + 2, k))), k + 1, st)
            }
            ch => { cur.push(ch); i += 1; continue }
        };
        flush!();
        v.extend(sp);
        (i, st) = (next, after);
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
pub enum M { I(String), N(String), O(String), T(String),
    R(Vec<M>), F(Box<M>, Box<M>), Q(Box<M>), S(Box<M>, Option<Box<M>>, Option<Box<M>>) }

const GREEK: &str = "alpha α beta β gamma γ delta δ epsilon ϵ varepsilon ε zeta ζ eta η theta θ kappa κ lambda λ mu μ nu ν xi ξ pi π rho ρ sigma σ tau τ phi ϕ varphi φ chi χ psi ψ omega ω Gamma Γ Delta Δ Theta Θ Lambda Λ Xi Ξ Pi Π Sigma Σ Phi Φ Psi Ψ Omega Ω";
const OPS: &str = "cdot ⋅ times × le ≤ leq ≤ ge ≥ geq ≥ ne ≠ neq ≠ approx ≈ sim ∼ infty ∞ sum ∑ prod ∏ int ∫ to → rightarrow → pm ± partial ∂ propto ∝ ldots … cdots ⋯ in ∈ lfloor ⌊ rfloor ⌋ lceil ⌈ rceil ⌉ langle ⟨ rangle ⟩ mid ∣";
const FUNS: &str = "ln log exp sin cos tan min max lim det arg";

fn look(table: &str, k: &str) -> Option<String> { table.split(' ').collect::<Vec<_>>().chunks(2).find(|p| p[0] == k).map(|p| p[1].into()) }

pub fn tex(s: &str) -> M { M::R(row(&s.chars().collect::<Vec<_>>(), &mut 0, '\0')) }

fn row(c: &[char], i: &mut usize, end: char) -> Vec<M> {
    let mut v = vec![];
    while *i < c.len() && c[*i] != end {
        if let ch @ ('^' | '_') = c[*i] {
            *i += 1;
            let arg = Some(Box::new(atom(c, i).unwrap_or(M::R(vec![]))));
            let (b, sb, sp) = match v.pop() { Some(M::S(b, sb, sp)) => (b, sb, sp), m => (Box::new(m.unwrap_or(M::R(vec![]))), None, None) };
            v.push(if ch == '^' { M::S(b, sb, arg) } else { M::S(b, arg, sp) });
        } else { v.extend(atom(c, i)) }
    }
    v
}

fn atom(c: &[char], i: &mut usize) -> Option<M> {
    while c.get(*i).is_some_and(|c| c.is_whitespace()) { *i += 1 }
    let next = |i: &mut usize| { let ch = *c.get(*i)?; *i += 1; Some(ch) };
    let ch = next(i)?;
    let run = |i: &mut usize, f: fn(&char) -> bool| {
        let s = (*i).min(c.len()); // a command at the very end has stepped past it
        *i = s;
        while c.get(*i).is_some_and(f) { *i += 1 }
        c[s..*i].iter().collect::<String>()
    };
    Some(match ch {
        '{' => { let r = row(c, i, '}'); *i += 1; M::R(r) }
        '0'..='9' | '.' => M::N(format!("{ch}{}", run(i, |c| c.is_ascii_digit() || *c == '.'))),
        '\\' => {
            let name = run(i, char::is_ascii_alphabetic);
            match name.as_str() {
                // Spaces as Unicode spaces, which neither MathML nor the PDF collapses; `\!` is dropped.
                "" => match next(i)? {
                    ',' => M::T("\u{2009}".into()), ';' | ':' => M::T("\u{2005}".into()), ' ' => M::T(" ".into()), '!' => M::T("".into()),
                    x => M::O(x.into()),
                },
                "frac" => M::F(Box::new(atom(c, i)?), Box::new(atom(c, i)?)),
                "sqrt" => M::Q(Box::new(atom(c, i)?)),
                "text" | "mathrm" | "operatorname" => {
                    // Spaces, the opening brace, the text, the closing brace.
                    run(i, |c| *c == ' ');
                    *i += 1;
                    let t = run(i, |c| *c != '}');
                    *i += 1;
                    if name == "text" { M::T(t) } else { M::I(t) }
                }
                "left" | "right" | "big" | "Big" => atom(c, i).filter(|m| *m != M::O(".".into())).unwrap_or(M::R(vec![])),
                "quad" => M::T("\u{2003}".into()),
                "qquad" => M::T("\u{2003}\u{2003}".into()),
                n if FUNS.split(' ').any(|f| f == n) => M::I(n.into()),
                n => look(GREEK, n).map(M::I).or_else(|| look(OPS, n).map(M::O)).unwrap_or(M::T(n.into())),
            }
        }
        c if c.is_alphabetic() => M::I(c.into()),
        '-' => M::O("−".into()),
        c => M::O(c.into()),
    })
}

/// A large operator: limits go above and below it in display style.
pub fn big(m: &M) -> bool { matches!(m, M::O(o) if o == "∑" || o == "∏") || *m == M::I("lim".into()) }
/// Whether the k-th of a row is a sign rather than a binary operator: it follows an operator.
pub fn sign(v: &[M], k: usize) -> bool {
    let after_op = k == 0 || matches!(&v[k - 1], M::O(o) if !")]|⟩⌋⌉∣".contains(o.as_str()));
    matches!(&v[k], M::O(o) if o == "−" || o == "+" || o == "±") && after_op
}

/// MathML Core; `d` is display style, kept by rows and roots, dropped in fractions and scripts.
pub fn mathml(src: &str, display: bool) -> String {
    fn ml(m: &M, d: bool) -> String {
        let b = |m: &Option<Box<M>>| m.as_deref().map(|m| ml(m, false)).unwrap_or_default();
        match m {
            M::I(s) => format!("<mi>{}</mi>", esc(s)),
            M::N(s) => format!("<mn>{}</mn>", esc(s)),
            // The font subset has no display variants, so a display operator is set larger.
            M::O(s) => format!("<mo{}>{}</mo>", if d && big(m) { " mathsize=\"2.2em\"" } else { "" }, esc(s)),
            M::T(s) => format!("<mtext>{}</mtext>", esc(s)),
            M::R(v) => format!("<mrow>{}</mrow>", (0..v.len()).map(|k| match &v[k] {
                M::O(o) if sign(v, k) => format!("<mo form=\"prefix\">{o}</mo>"),
                M::I(f) if FUNS.split(' ').any(|g| g == f) && v.get(k + 1) != Some(&M::O("(".into())) =>
                    format!("<mi>{f}</mi><mspace width=\"0.17em\"/>"),
                m => ml(m, d),
            }).collect::<String>()),
            M::F(a, c) => format!("<mfrac>{}{}</mfrac>", ml(a, false), ml(c, false)),
            M::Q(a) => format!("<msqrt>{}</msqrt>", ml(a, d)),
            M::S(x, s, p) => {
                let (lo, hi) = if big(x) { ("under", "over") } else { ("sub", "sup") };
                let tag = match (s, p) { (Some(_), Some(_)) => format!("m{lo}{hi}"), (Some(_), _) => format!("m{lo}"), _ => format!("m{hi}") };
                format!("<{tag}>{}{}{}</{tag}>", ml(x, d), b(s), b(p))
            }
        }
    }
    format!("<math{}>{}</math>", if display { " display=\"block\"" } else { "" }, ml(&tex(src), display))
}

/// What a run produced for the compiled cells, and how the current cells map onto them.
/// `map[k]` is the compiled cell whose output cell k shows; `stale[k]` marks it out of date.
#[derive(Default)]
pub struct Run { pub out: Vec<String>, pub ctl: Vec<String>, pub map: Vec<Option<usize>>, pub stale: Vec<bool> }

/// The notebook body: chapters as sections, cells with their controls and outputs,
/// narration, figures, then references. `img` resolves an asset path for the page.
/// A chapter is a slide (title, scene, body) followed by its narration, every `say` in one aside.
pub fn article(d: &Doc, run: &Run, img: &dyn Fn(&str) -> String) -> String {
    let (mut o, mut k, mut sec, mut det, mut say) = (String::new(), 0, false, false, String::new());
    let aside = |s: &str| if s.is_empty() { s.into() } else { format!("<aside class=\"say\">{s}</aside>") };
    macro_rules! shut { () => { if std::mem::take(&mut sec) { w!(o, "</div>{}</section>", aside(&std::mem::take(&mut say))) } } }
    let chapters = d.chapters();
    for (at, b) in d.blocks.iter().enumerate() {
        // A `#` or `##` heading closes the open section; every `##` is a chapter (`Doc::chapters`) and opens one.
        if let B::H(l @ (1 | 2), ..) = b { shut!(); sec = *l == 2 }
        match b {
            B::H(1, h, _) => { w!(o, "{}<details><summary>{}</summary>", if det { "</details>" } else { "" }, inline(h)); det = true }
            B::H(2, h, _) if let Some((n, c)) = chapters.iter().enumerate().find(|c| c.1.at == at) => {
                w!(o, "<section class=\"chapter\" id=\"c{}\"><div class=\"slide\"><h2>{}</h2>", n + 1, inline(h));
                if let Some(sc) = c.scene {
                    w!(o, "<canvas class=\"frame\" data-scene=\"{sc}\" data-t=\"{}\" data-progress=\"{}\" aria-hidden=\"true\"></canvas>", c.t, c.p);
                }
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
                if let Some(&Some(j)) = run.map.get(k) {
                    let at = |v: &[String]| v.get(j).cloned().unwrap_or_default();
                    w!(o, "<div class=\"ctls\" data-ctl=\"{j}\">{}</div>", at(&run.ctl));
                    w!(o, "<div class=\"out\" data-out=\"{j}\">{}</div>", at(&run.out));
                }
                if !caption.is_empty() { w!(o, "<p class=\"caption\">{}</p>", inline(&caption)) }
                o += "</div>";
                k += 1;
            }
            B::C(l, s, _) if l == "say" => {
                let p: String = s.split("\n\n").map(|p| format!("<p>{}</p>", inline(p))).collect();
                if sec { say += &p } else { o += &aside(&p) }
            }
            B::C(l, s, _) => w!(o, "<pre class=\"code\" data-lang=\"{}\"><code>{}</code></pre>", esc(l), esc(s)),
            B::M(m) => w!(o, "<div class=\"eq\">{}</div>", mathml(m, true)),
            B::Raw(h) => o += h,
            B::Com(_) => {}
            B::Img(alt, src) => w!(o, "<figure><img src=\"{}\" alt=\"{}\"><figcaption>{}</figcaption></figure>", img(src), esc(alt), inline(alt)),
        }
    }
    shut!();
    o += if det { "</details>" } else { "" };
    let refs: String = d.links().iter().map(|(t, u)| format!("<li>{} <a href=\"{1}\">{1}</a></li>", esc(t), esc(u))).collect();
    if !refs.is_empty() { w!(o, "<section class=\"refs\"><h3>References</h3><ol>{refs}</ol></section>") }
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
        let c = &d.chapters()[0];
        assert_eq!((c.scene, c.t, c.p), (Some(8), 3.0, -1.0));
        let scenes: Vec<_> = parse("## A {scene=1}\n\n## B\n\n## C {scene=1}\n\n## D {scene=1}\n\n## E {scene=1 t=2}").chapters().iter().map(|c| c.scene).collect();
        assert_eq!(scenes, [Some(1), None, Some(1), None, Some(1)]);
        assert_eq!(inline("*a* **b** `c<` \\*"), "<em>a</em> <strong>b</strong> <code>c&lt;</code> *");
        assert_eq!(mathml("x_i^2 - \\alpha", false), "<math><mrow><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>−</mo><mi>α</mi></mrow></math>");
        assert!(mathml("\\frac{1}{\\sqrt{2}} \\text{ dB}", true).contains("<mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>2</mn></mrow></msqrt></mrow></mfrac><mtext> dB</mtext>"));
        let html = article(&d, &Run { out: vec!["O".into()], ctl: vec!["C".into()], map: vec![Some(0)], stale: vec![true] }, &|s| format!("data:{s}"));
        assert!(html.contains("id=\"c1\"><div class=\"slide\"><h2>One</h2><canvas class=\"frame\" data-scene=\"8\"") && html.contains("class=\"cell stale\"") && html.contains("data-out=\"0\">O</div>"));
        assert!(html.contains("src=\"data:a.png\"") && html.contains("<details><summary>Notes</summary><p>End.</p></details><section class=\"refs\">"));
    }
}
