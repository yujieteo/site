//! Rust cells. A notebook's cells become one program, ordered by data flow rather than by
//! the page: a cell runs after every cell whose bindings it reads. Items (fn, struct, use…)
//! are hoisted; top-level `let` bindings are a cell's definitions, immutable to other cells.
//! A name defined twice, or a cycle, is an error, so the result never depends on run order.

#[derive(Clone, Copy, PartialEq, Debug)]
pub enum T { Ws, Id, Num, Str, Com, P, Life }

pub fn lex(s: &str) -> Vec<(T, &str)> {
    let (b, mut v, mut i) = (s.as_bytes(), vec![], 0);
    let at = |i: usize, p: &str| s.get(i..).is_some_and(|r| r.starts_with(p));
    // The end of the run of bytes from `j` on which `f` holds.
    let run = |mut j: usize, f: &dyn Fn(usize) -> bool| { while j < b.len() && f(j) { j += 1 } j };
    let word = |j: usize| b[j].is_ascii_alphanumeric() || b[j] == b'_';
    while i < b.len() {
        // `q`: just past a string's `r`, `br`, `b"` or `"` prefix.
        let (c, mut q) = (b[i], i + 1 + (b[i] == b'b') as usize);
        let raw = (c == b'r' || at(i, "br")) && s[q..].trim_start_matches('#').starts_with('"');
        let (k, e) = match c {
            _ if c.is_ascii_whitespace() => (T::Ws, run(i, &|j| b[j].is_ascii_whitespace())),
            _ if at(i, "//") => (T::Com, run(i, &|j| b[j] != b'\n')),
            _ if at(i, "/*") => {
                let (mut d, mut j) = (1, i + 2);
                while j < b.len() && d > 0 { j += if at(j, "/*") { d += 1; 2 } else if at(j, "*/") { d -= 1; 2 } else { 1 } }
                (T::Com, j)
            }
            _ if raw => {
                let end = format!("\"{}", "#".repeat(s[q..].bytes().take_while(|&x| x == b'#').count()));
                (T::Str, s[q + end.len()..].find(&end).map_or(b.len(), |e| q + 2 * end.len() + e))
            }
            _ if (c == b'b' && at(i + 1, "\"")) || c == b'"' => {
                while q < b.len() && b[q] != b'"' { q += 1 + (b[q] == b'\\') as usize }
                (T::Str, (q + 1).min(b.len()))
            }
            b'\'' if at(i + 1, "\\") => (T::Str, s[i + 2..].find('\'').map_or(b.len(), |e| i + 3 + e)),
            b'\'' if let Some((e, '\'')) = s[i + 1..].char_indices().nth(1) => (T::Str, i + 2 + e),
            b'\'' => (T::Life, run(i + 1, &word)),
            _ if c.is_ascii_alphabetic() || c == b'_' || c >= 128 => (T::Id, run(i, &|j| word(j) || b[j] >= 128)),
            _ if c.is_ascii_digit() => (T::Num, run(i, &|j| word(j) || (b[j] == b'.' && b.get(j + 1).is_some_and(u8::is_ascii_digit)))),
            _ => (T::P, i + if at(i, "::") { 2 } else { 1 }),
        };
        v.push((k, &s[i..e]));
        i = e;
    }
    v
}

const KW: &str = "as async await break const continue crate dyn else enum extern false fn for if impl in let loop match mod move mut pub ref return self Self static struct super trait true type unsafe use where while";

/// Highlighted HTML: keywords, strings, numbers and comments.
pub fn hl(s: &str) -> String {
    lex(s).iter().map(|&(k, t)| {
        let c = match k { T::Com => "c", T::Str => "s", T::Num => "n", T::Life => "k", T::Id if KW.split(' ').any(|w| w == t) => "k", _ => "" };
        if c.is_empty() { crate::doc::esc(t) } else { format!("<span class=\"{c}\">{}</span>", crate::doc::esc(t)) }
    }).collect()
}

/// A cell's `//| caption: …` option and its code without option lines.
pub fn opts(s: &str) -> (String, String) {
    let (o, code): (Vec<&str>, Vec<&str>) = s.lines().partition(|l| l.trim_start().starts_with("//|"));
    let cap = o.iter().find_map(|l| l.trim_start()[3..].trim().strip_prefix("caption:")).unwrap_or("").trim();
    (cap.into(), code.join("\n"))
}

/// A cell split: hoisted items and body text (each with its byte offset), the names its
/// top-level `let`s define, and every name its body mentions (items cannot capture bindings).
#[derive(Default, Debug)]
pub struct Cell { pub items: Vec<(usize, String)>, pub body: Vec<(usize, String)>, pub defs: Vec<String>, pub uses: Vec<String> }

const ITEM: &str = "fn struct enum impl trait type use const static mod macro_rules union";
const MODS: &str = "pub unsafe async extern default";

pub fn split(s: &str) -> Cell {
    let t: Vec<(T, &str)> = lex(s);
    // A token's byte offset (tokens are slices of `s`) and text, and how it changes the nesting depth.
    let off = |k: usize| t.get(k).map_or(s.len(), |x| x.1.as_ptr() as usize - s.as_ptr() as usize);
    let tok = |j: usize| t.get(j).map_or("", |x| x.1);
    let depth = |w: &str| match w { "{" | "(" | "[" => 1, "}" | ")" | "]" => -1, _ => 0 };
    let sig = |i: usize| (i..t.len()).find(|&j| !matches!(t[j].0, T::Ws | T::Com)).unwrap_or(t.len());
    let part = |v: &mut Vec<(usize, String)>, a: usize, b: usize| if off(a) < off(b) { v.push((off(a), s[off(a)..off(b)].into())) };
    let (mut c, mut i, mut body_from) = (Cell::default(), 0, 0);
    while i < t.len() {
        // Does an item begin here? Attributes, then modifiers, then an item keyword.
        let mut j = sig(i);
        while tok(j) == "#" {
            let mut d = 0;
            j = sig((j + 1..t.len()).find(|&k| { d += match t[k].1 { "[" => 1, "]" => -1, _ => 0 }; d == 0 }).map_or(t.len(), |k| k + 1));
        }
        while MODS.split(' ').any(|m| m == tok(j)) || (t.get(j).is_some_and(|x| x.0 == T::Str) && j > 0)
            || (tok(j) == "const" && tok(sig(j + 1)) == "fn") {
            j = sig(j + 1);
            if tok(j) == "(" { while j < t.len() && t[j].1 != ")" { j += 1 } j = sig(j + 1) }
        }
        if ITEM.split(' ').any(|k| k == tok(j)) {
            // It ends at depth 0 at a `;`, or a `}` for the kinds that can end with a body.
            let (ends, mut d): (&[_], _) = (if ["use", "const", "static", "type"].contains(&tok(j)) { &[";"] } else { &[";", "}"] }, 0);
            let k = (j..t.len()).find(|&k| { d += depth(t[k].1); d == 0 && ends.contains(&t[k].1) }).map_or(t.len(), |k| k + 1);
            part(&mut c.body, body_from, i);
            part(&mut c.items, i, k);
            (i, body_from) = (k, k);
            continue;
        }
        // A statement: note top-level `let` bindings, then run to its end at depth 0.
        let (mut d, mut in_pat) = (0, tok(sig(i)) == "let");
        i = (if in_pat { sig(i) + 1 } else { i }..t.len()).find(|&k| {
            let ((kind, w), next) = (t[k], || tok(sig(k + 1)));
            d += depth(w);
            in_pat &= !(d == 0 && matches!(w, "=" | ";" | ":"));
            if in_pat && kind == T::Id && !["mut", "ref"].contains(&w) && !w.starts_with(|c: char| c == '_' || c.is_uppercase())
                && !matches!(next(), "::" | "(" | "{") && !(d > 0 && next() == ":") { c.defs.push(w.into()) }
            d <= 0 && (w == ";" || (w == "}" && d == 0 && !matches!(next(), "else" | "." | "?" | ")" | "," | "as")))
        }).map_or(t.len(), |k| k + 1);
    }
    part(&mut c.body, body_from, t.len());
    let body: String = c.body.iter().map(|b| b.1.as_str()).collect::<Vec<_>>().join("\n");
    for (k, w) in lex(&body) {
        if k == T::Id { c.uses.push(w.into()) }
        // A format string's captures: `{name}` and `{name:…}`.
        for p in w.split('{').skip(1).filter(|_| k == T::Str) {
            let n: String = p.chars().take_while(|c| c.is_alphanumeric() || *c == '_').collect();
            if !n.is_empty() && p[n.len()..].starts_with(['}', ':']) { c.uses.push(n) }
        }
    }
    c
}

/// The run order of the cells, by data flow (earliest page position first among ready cells).
pub fn order(cells: &[Cell]) -> Result<Vec<usize>, String> {
    let mut owner = std::collections::BTreeMap::new();
    for (k, d) in cells.iter().enumerate().flat_map(|(k, c)| c.defs.iter().map(move |d| (k, d))) {
        if let Some(j) = owner.insert(d.as_str(), k) && j != k {
            return Err(format!("`{d}` is defined in cells {} and {}; give one a new name or prefix it with _", j + 1, k + 1));
        }
    }
    let deps: Vec<Vec<usize>> = cells.iter().enumerate().map(|(k, c)| c.uses.iter().filter_map(|u| owner.get(u.as_str()).copied()).filter(|&j| j != k).collect()).collect();
    let mut out = vec![];
    while let Some(k) = (0..cells.len()).find(|k| !out.contains(k) && deps[*k].iter().all(|j| out.contains(j))) { out.push(k) }
    let left: Vec<String> = (0..cells.len()).filter(|k| !out.contains(k)).map(|k| (k + 1).to_string()).collect();
    if left.is_empty() { Ok(out) } else { Err(format!("cells {} depend on each other", left.join(", "))) }
}

/// Which names each cell must export: its definitions that another cell reads.
pub fn exports(cells: &[Cell]) -> Vec<Vec<String>> {
    cells.iter().enumerate().map(|(k, c)| {
        let mut v: Vec<String> = c.defs.iter().filter(|d| cells.iter().enumerate().any(|(j, o)| j != k && o.uses.contains(d))).cloned().collect();
        (v.dedup(), v).1
    }).collect()
}

/// Edited cells against compiled ones: each current cell shows the compiled output with the
/// same text, or else the one at its position; changed cells and their dependants are stale.
pub fn stale(now: &[&str], was: &[&str]) -> (Vec<Option<usize>>, Vec<bool>) {
    let map: Vec<Option<usize>> = now.iter().enumerate().map(|(k, s)| was.iter().position(|w| w == s).or((k < was.len()).then_some(k))).collect();
    let mut st: Vec<bool> = now.iter().zip(&map).map(|(s, m)| m.is_none_or(|j| was[j] != *s)).collect();
    let cells: Vec<Cell> = now.iter().map(|s| split(s)).collect();
    loop {
        let bad: Vec<&String> = cells.iter().zip(&st).filter(|x| *x.1).flat_map(|x| &x.0.defs).collect();
        let next: Vec<bool> = cells.iter().zip(&st).map(|(c, &s)| s || c.uses.iter().any(|u| bad.contains(&u))).collect();
        if next == st { return (map, st) }
        st = next;
    }
}

/// The significant tokens as (kind, start, end): no spaces or comments, and `1e-6` one number.
fn sig(s: &str) -> Vec<(T, usize, usize)> {
    let mut v: Vec<(T, usize, usize)> = vec![];
    for (k, t) in lex(s).into_iter().filter(|x| !matches!(x.0, T::Ws | T::Com)) {
        let a = t.as_ptr() as usize - s.as_ptr() as usize;
        match v.as_slice() {
            [.., (T::Num, i, j), (T::P, _, e)] if s[*i..*j].ends_with(['e', 'E']) && !s[*i..].starts_with("0x") && matches!(&s[*j..*e], "+" | "-") && k == T::Num => {
                let i = *i;
                v.truncate(v.len() - 2);
                v.push((T::Num, i, a + t.len()));
            }
            _ => v.push((k, a, a + t.len())),
        }
    }
    v
}

/// A float literal's value (`1.5`, `2e-3`, `1_000.0f32`, `7f64`), or None for an integer.
fn float(t: &str) -> Option<f64> {
    let core = t.trim_end_matches("f64").trim_end_matches("f32");
    let f = core.len() < t.len() || core.contains(['.', 'e', 'E']);
    (f && !t.contains(['u', 'i', 'x', 'o', 'b'])).then(|| core.replace('_', "").parse().ok()).flatten().filter(|x: &f64| x.is_finite())
}

/// A cell's live numbers: the byte ranges of the float literals in its body, outside consts
/// and statics, tuple fields and patterns. The builder reads each one through `nb::num`, so the
/// page can change it (`retune`) without a rebuild. Literals in hoisted items stay fixed.
pub fn nums(s: &str) -> Vec<(usize, usize)> {
    let (body, t) = (split(s).body, sig(s));
    let (mut v, mut skip) = (vec![], false);
    for (k, &(kind, a, e)) in t.iter().enumerate() {
        let w = &s[a..e];
        skip = (skip || matches!(w, "const" | "static")) && w != ";";
        let tok = |j: usize| t.get(j).map_or("", |x| &s[x.1..x.2]);
        if kind == T::Num && !skip && float(w).is_some() && (tok(k.wrapping_sub(1)) != "." || tok(k.wrapping_sub(2)) == ".") && !(tok(k + 1) == "=" && tok(k + 2) == ">")
            && body.iter().any(|(o, b)| *o <= a && e <= o + b.len()) { v.push((a, e)) }
    }
    v
}

/// Number-only edits. Each current cell that matches the compiled cell at its position token
/// for token, except for new values of its live numbers, takes the compiled text (so it is not
/// stale); the new values come back keyed as the builder numbers them: the live numbers of
/// earlier cells, then their place in the cell.
pub fn retune<'a>(now: &[&'a str], was: &[&'a str]) -> (Vec<&'a str>, Vec<(usize, f64)>) {
    let (mut eff, mut set, mut first) = (now.to_vec(), vec![], 0);
    for (k, &w) in was.iter().enumerate() {
        let live = nums(w);
        if let Some(&n) = now.get(k) && n != w {
            let (tw, tn) = (sig(w), sig(n));
            let mut new = vec![];
            let same = tw.len() == tn.len() && tw.iter().zip(&tn).all(|(x, y)| {
                let (a, b) = (&w[x.1..x.2], &n[y.1..y.2]);
                match live.iter().position(|r| *r == (x.1, x.2)) {
                    Some(j) => y.0 == T::Num && n.as_bytes()[y.1].is_ascii_digit() && !b.contains(['u', 'i', 'x', 'o', 'b']) && b.replace('_', "").trim_end_matches("f64").trim_end_matches("f32").parse::<f64>().is_ok_and(|v| v.is_finite() && (a == b || (new.push((first + j, v)), true).1)),
                    None => a == b,
                }
            });
            if same { (eff[k], set) = (w, [set, new].concat()) }
        }
        first += live.len();
    }
    (eff, set)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn lexes_and_highlights_rust() {
        let s = "let s = r#\"a\"b\"#; // c\nlet c = '\\''; fn f<'a>(x: &'a str) {} /* /* n */ */ 1.5e3";
        assert_eq!(lex(s).iter().map(|x| x.1).collect::<String>(), s);
        let k: Vec<T> = lex(s).iter().map(|x| x.0).filter(|k| *k != T::Ws).collect();
        assert_eq!(&k[3..6], &[T::Str, T::P, T::Com]);
        assert!(hl("let x = \"<\";").contains("<span class=\"k\">let</span> x = <span class=\"s\">&quot;&lt;&quot;</span>;"));
        assert_eq!(opts("//| caption: A *b*\nlet a = 1;"), ("A *b*".into(), "let a = 1;".into()));
    }

    #[test]
    fn cells_order_by_data_flow() {
        let c = split("use std::f64::consts::PI;\n#[derive(Clone)]\nstruct P { x: f64 }\nlet (a, mut b) = (1.0, P { x: 2.0 });\nlet typed: f64 = 1.0;\nlet P { x: px } = P { x: 1.0 };\nfor i in 0..3 { let inner = i; }\nfn sq(x: f64) -> f64 { x * x }\nlet _tmp = 1;\nprintln!(\"{a} {c:.2}\");");
        assert_eq!(c.items.len(), 3);
        assert!(c.items[1].1.trim_start().starts_with("#[derive(Clone)]\nstruct P") && c.items[2].1.trim_start().starts_with("fn sq"));
        assert_eq!(c.defs, vec!["a", "b", "typed", "px"]);
        assert!(c.uses.contains(&"c".into()) && c.body.iter().map(|b| b.1.as_str()).collect::<String>().contains("for i in 0..3"));
        let cells: Vec<Cell> = ["let y = x + 1.0;", "let x = 2.0;", "println!(\"{y}\");"].map(split).into();
        assert_eq!(order(&cells), Ok(vec![1, 0, 2]));
        assert_eq!(exports(&cells), vec![vec!["y".to_string()], vec!["x".to_string()], vec![]]);
        assert!(order(&["let x = 1;", "let x = 2;"].map(split)).unwrap_err().contains("cells 1 and 2"));
        assert!(order(&["let a = b;", "let b = a;"].map(split)).unwrap_err().contains("depend on each other"));
        let (map, st) = stale(&["let x = 3.0;", "let y = x;", "let z = 1;"], &["let x = 2.0;", "let y = x;", "let z = 1;"]);
        assert_eq!((map, st), (vec![Some(0), Some(1), Some(2)], vec![true, true, false]));
    }

    #[test]
    fn live_numbers_change_without_a_rebuild() {
        let s = "const K: f64 = 1.5;\nfn f() -> f64 { 2.5 }\nlet a = (1.0, 2e-3, 7, 3f32);\nlet b = a.0.1 + 0.5..1.0;\nmatch x { 4.0 => 1, _ => 2 };";
        let n: Vec<&str> = nums(s).iter().map(|&(a, e)| &s[a..e]).collect();
        assert_eq!(n, ["1.0", "2e-3", "3f32", "0.5", "1.0"]);
        let was = ["let a = 1.0;", "let b = a * 2.0 + 3e-1;"];
        let (eff, set) = retune(&["let a = 1.0;", "let b = a * 2.5  + 3e-2; // more"], &was);
        assert_eq!((eff, set), (was.to_vec(), vec![(1, 2.5), (2, 0.03)]));
        assert_eq!(retune(&["let a = 1.0;", "let b = a * 2.0 - 3e-1;"], &was), (vec!["let a = 1.0;", "let b = a * 2.0 - 3e-1;"], vec![]));
        assert_eq!(retune(&["let a = 4;"], &was).1, [(0, 4.0)]);
    }
}
