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
        let c = b[i];
        let raw = (c == b'r' || at(i, "br")) && s[i + 1 + (c == b'b') as usize..].trim_start_matches('#').starts_with('"');
        let (k, e) = match c {
            _ if c.is_ascii_whitespace() => (T::Ws, run(i, &|j| b[j].is_ascii_whitespace())),
            _ if at(i, "//") => (T::Com, run(i, &|j| b[j] != b'\n')),
            _ if at(i, "/*") => {
                let (mut d, mut j) = (0, i);
                while j < b.len() {
                    if at(j, "/*") { d += 1; j += 2 } else if at(j, "*/") { d -= 1; j += 2; if d == 0 { break } } else { j += 1 }
                }
                (T::Com, j)
            }
            _ if raw => {
                let j = i + 1 + (c == b'b') as usize;
                let h = s[j..].bytes().take_while(|&x| x == b'#').count();
                let end = format!("\"{}", "#".repeat(h));
                (T::Str, s[j + h + 1..].find(&end).map_or(b.len(), |e| j + h + 1 + e + end.len()))
            }
            _ if (c == b'b' && at(i + 1, "\"")) || c == b'"' => {
                let mut j = i + 1 + (c == b'b') as usize;
                while j < b.len() && b[j] != b'"' { j += 1 + (b[j] == b'\\') as usize }
                (T::Str, (j + 1).min(b.len()))
            }
            b'\'' if at(i + 1, "\\") => (T::Str, s[i + 2..].find('\'').map_or(b.len(), |e| i + 3 + e)),
            b'\'' => {
                let ch = s[i + 1..].chars().next().map_or(1, char::len_utf8);
                if at(i + 1 + ch, "'") { (T::Str, i + 2 + ch) } else { (T::Life, run(i + 1, &word)) }
            }
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
        let t = crate::doc::esc(t);
        if c.is_empty() { t } else { format!("<span class=\"{c}\">{t}</span>") }
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
    let off: Vec<usize> = t.iter().scan(0, |o, x| { let a = *o; *o += x.1.len(); Some(a) }).collect();
    let sig = |i: usize| (i..t.len()).find(|&j| !matches!(t[j].0, T::Ws | T::Com)).unwrap_or(t.len());
    let (mut c, mut i, mut body_from) = (Cell::default(), 0, 0);
    let part = |c: &mut Cell, a: usize, b: usize, item: bool| {
        let (x, y) = (off.get(a).copied().unwrap_or(s.len()), off.get(b).copied().unwrap_or(s.len()));
        if x < y { (if item { &mut c.items } else { &mut c.body }).push((x, s[x..y].into())) }
    };
    while i < t.len() {
        // Does an item begin here? Attributes, then modifiers, then an item keyword.
        let mut j = sig(i);
        while j < t.len() && t[j].1 == "#" {
            let mut d = 0;
            j += 1;
            while j < t.len() { d += match t[j].1 { "[" => 1, "]" => -1, _ => 0 }; j += 1; if d == 0 { break } }
            j = sig(j);
        }
        loop {
            let w = t.get(j).map_or("", |x| x.1);
            if MODS.split(' ').any(|m| m == w) || (t.get(j).is_some_and(|x| x.0 == T::Str) && j > 0) {
                j = sig(j + 1);
                if t.get(j).is_some_and(|x| x.1 == "(") { while j < t.len() && t[j].1 != ")" { j += 1 } j = sig(j + 1) }
            } else if w == "const" && t.get(sig(j + 1)).is_some_and(|x| x.1 == "fn") {
                j = sig(j + 1);
            } else { break }
        }
        let kw = t.get(j).map_or("", |x| x.1);
        if ITEM.split(' ').any(|k| k == kw) {
            let semi_only = ["use", "const", "static", "type"].contains(&kw);
            let (mut d, mut k) = (0i32, j);
            while k < t.len() {
                match t[k].1 { "{" | "(" | "[" => d += 1, "}" | ")" | "]" => d -= 1, _ => {} }
                k += 1;
                if d == 0 && (t[k - 1].1 == ";" || (!semi_only && t[k - 1].1 == "}")) { break }
            }
            part(&mut c, body_from, i, false);
            part(&mut c, i, k, true);
            (i, body_from) = (k, k);
            continue;
        }
        // A statement: note top-level `let` bindings, then run to its end at depth 0.
        let first = sig(i);
        let (mut d, mut in_pat) = (0i32, t.get(first).is_some_and(|x| x.1 == "let"));
        let mut k = if in_pat { first + 1 } else { i };
        while k < t.len() {
            let (kind, w) = t[k];
            match w { "{" | "(" | "[" => d += 1, "}" | ")" | "]" => d -= 1, _ => {} }
            if in_pat && (d == 0 && (w == "=" || w == ";" || w == ":")) { in_pat = false }
            if in_pat && kind == T::Id && !["mut", "ref"].contains(&w) && !w.starts_with('_') && !w.starts_with(char::is_uppercase)
                && !matches!(t.get(sig(k + 1)).map(|x| x.1), Some("::" | "(" | "{")) && !(d > 0 && t.get(sig(k + 1)).is_some_and(|x| x.1 == ":")) {
                c.defs.push(w.into());
            }
            k += 1;
            if d <= 0 && (w == ";" || (w == "}" && d == 0 && !matches!(t.get(sig(k)).map(|x| x.1), Some("else" | "." | "?" | ")" | "," | "as")))) { break }
        }
        i = k;
    }
    part(&mut c, body_from, t.len(), false);
    let body: String = c.body.iter().map(|b| b.1.as_str()).collect::<Vec<_>>().join("\n");
    for (k, w) in lex(&body) {
        if k == T::Id { c.uses.push(w.into()) }
        if k != T::Str { continue }
        // A format string's captures: `{name}` and `{name:…}`.
        for p in w.split('{').skip(1) {
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
    let (mut done, mut out) = (vec![false; cells.len()], vec![]);
    while out.len() < cells.len() {
        let Some(k) = (0..cells.len()).find(|&k| !done[k] && deps[k].iter().all(|&j| done[j])) else {
            let left: Vec<String> = (0..cells.len()).filter(|&k| !done[k]).map(|k| (k + 1).to_string()).collect();
            return Err(format!("cells {} depend on each other", left.join(", ")));
        };
        done[k] = true;
        out.push(k);
    }
    Ok(out)
}

/// Which names each cell must export: its definitions that another cell reads.
pub fn exports(cells: &[Cell]) -> Vec<Vec<String>> {
    cells.iter().enumerate().map(|(k, c)| {
        let mut v: Vec<String> = c.defs.iter().filter(|d| cells.iter().enumerate().any(|(j, o)| j != k && o.uses.contains(d))).cloned().collect();
        v.dedup();
        v
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
}
