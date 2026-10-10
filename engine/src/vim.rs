//! The editor: Vim modes, motions, operators, commands, text and undo. The page's textarea supplies
//! keys, what is typed in insert mode (so keyboard composition, touch selection and paste stay the
//! browser's), and the clipboard; it shows the text, selection and status line `step` returns.

pub struct Vim {
    pub t: Vec<char>, pub c: usize, // text and cursor
    pub mode: char, // 'n' normal, 'i' insert, 'v' visual, 'V' visual line, ':' command line
    anchor: usize, pend: Vec<char>, msg: String, // visual mode's other end, pending keys, status
    reg: (String, bool), find: String, // the register (and whether it holds whole lines), the search
    // `act` is for the page: "y" (copy the register), "w", "q", "run", "save".
    undo: Vec<(Vec<char>, usize)>, redo: Vec<(Vec<char>, usize)>, act: String,
}

impl Default for Vim {
    fn default() -> Self {
        let msg = "i inserts, Esc returns, :w writes, :run runs, :q closes".into();
        let (t, pend, find, undo, redo, act) = Default::default();
        Vim { t, c: 0, mode: 'n', anchor: 0, pend, msg, reg: Default::default(), find, undo, redo, act }
    }
}

const WS: fn(&char) -> bool = |c| *c == ' ' || *c == '\t';

impl Vim {
    /// One key (`'\0'` only syncs) against the page's text and selection, in UTF-16 units. Returns
    /// the mode, selection, action, status line, the register's length, the register and the text.
    pub fn step(&mut self, text: &str, a: usize, b: usize, reg: Option<&str>, key: char) -> String {
        self.t = text.chars().collect();
        let ix = |u: usize| { let mut n = 0; self.t.iter().take_while(|c| { n += c.len_utf16(); n <= u }).count() };
        let (a, b) = (ix(a), ix(b));
        (self.c, self.anchor, self.act) = (self.c.min(self.t.len()), self.anchor.min(self.t.len()), String::new());
        if (a, b) != self.shown() {
            self.c = a;
            if self.mode != 'i' { (self.mode, self.anchor, self.c) = if a == b { ('n', a, a) } else { ('v', a, b - 1) } }
        }
        if let Some(r) = reg { self.reg = (r.into(), r.ends_with('\n')) }
        if key != '\0' { self.key(key) }
        (self.c, self.anchor) = (self.c.min(self.t.len()), self.anchor.min(self.t.len()));
        if self.mode != 'i' && self.c > self.bol(self.c) && self.t.get(self.c).is_none_or(|&c| c == '\n') { self.c -= 1 }
        let u = |i: usize| self.t[..i].iter().map(|c| c.len_utf16()).sum::<usize>();
        let ((a, b), status) = (self.shown(), match self.mode {
            'i' => "-- INSERT --".into(), 'v' => "-- VISUAL --".into(), 'V' => "-- VISUAL LINE --".into(),
            _ if !self.pend.is_empty() => self.pend.iter().collect(), _ => self.msg.clone(),
        });
        let r = &self.reg.0;
        format!("{}\n{} {}\n{}\n{status}\n{}\n{r}{}", self.mode, u(a), u(b), self.act, r.encode_utf16().count(), self.t.iter().collect::<String>())
    }

    fn shown(&self) -> (usize, usize) {
        let (a, b) = (self.c.min(self.anchor), self.c.max(self.anchor));
        match self.mode {
            'i' => (self.c, self.c),
            'v' => (a, (b + 1).min(self.t.len())),
            'V' => (self.bol(a), self.eol(b)),
            _ => (self.c, (self.c + 1).min(self.eol(self.c))),
        }
    }

    fn bol(&self, i: usize) -> usize { self.t[..i].iter().rposition(|&c| c == '\n').map_or(0, |p| p + 1) }
    fn eol(&self, i: usize) -> usize { self.t[i..].iter().position(|&c| c == '\n').map_or(self.t.len(), |p| i + p) }
    fn line(&self, i: usize) -> usize { self.t[..i].iter().filter(|&&c| c == '\n').count() }
    /// Column `col` of line `l`, both clamped.
    fn at(&self, l: usize, col: usize) -> usize {
        let s = self.t.iter().enumerate().filter(|x| *x.1 == '\n').map(|x| x.0 + 1).take(l).last().unwrap_or(0);
        (s + col).min(self.eol(s))
    }
    fn snap(&mut self) { self.undo.push((self.t.clone(), self.c)); self.redo.clear() }
    fn ins(&mut self, s: &str) { self.t.splice(self.c..self.c, s.chars()); self.c += s.chars().count() }
    fn insert(&mut self, at: usize) { self.snap(); (self.c, self.mode) = (at, 'i') }

    fn key(&mut self, k: char) {
        match (self.mode, k) {
            ('i', '\x1b') => { self.mode = 'n'; self.c -= (self.c > self.bol(self.c)) as usize }
            ('i', '←' | '→' | '↑' | '↓') => self.c = self.motion(&[k], 1, false).map_or(self.c, |m| m.0),
            ('i', '\t') => self.ins("    "),
            ('i', k) => if k >= ' ' { self.ins(&k.to_string()) },
            (':', '\x1b') => { self.mode = 'n'; self.msg.clear() }
            (':', '\x08') => { self.msg.pop(); if self.msg.is_empty() { self.mode = 'n' } }
            (':', '\n') => { self.mode = 'n'; self.command() }
            (':', k) => self.msg.push(k),
            (_, '\x1b') => { self.mode = 'n'; self.pend.clear() }
            _ => { self.msg.clear(); self.pend.push(k); self.normal(); }
        }
    }

    /// Where motion `m` (count `n`) lands from the cursor, and how an operator takes it: 0 exclusive,
    /// 1 inclusive, 2 whole lines.
    fn motion(&self, m: &[char], n: usize, counted: bool) -> Option<(usize, u8)> {
        let (t, c, len, b, e) = (&self.t, self.c, self.t.len(), self.bol(self.c), self.eol(self.c));
        let cls = |i: usize| t.get(i).map_or(0, |c| if c.is_whitespace() { 0 } else if c.is_alphanumeric() || *c == '_' { 1 } else { 2 });
        let mut i = c;
        Some(match m {
            ['h' | '←' | '\x08'] => (c.saturating_sub(n).max(b), 0),
            ['l' | '→' | ' '] => ((c + n).min(e), 0),
            ['j' | '↓' | '\n'] => (self.at(self.line(c) + n, c - b), 2),
            ['k' | '↑'] => (self.at(self.line(c).saturating_sub(n), c - b), 2),
            ['0'] => (b, 0),
            ['^'] => (b + t[b..e].iter().take_while(|c| WS(c)).count(), 0),
            ['$'] => (e, 0),
            ['g', 'g'] => (self.at(if counted { n - 1 } else { 0 }, 0), 2),
            ['G'] => (self.at(if counted { n - 1 } else { usize::MAX }, 0), 2),
            // Words: past the rest of this one (w), to the end of the next (e), back to a start (b).
            ['w'] => {
                for _ in 0..n {
                    let k = cls(i);
                    while i < len && k != 0 && cls(i) == k { i += 1 }
                    while i < len && cls(i) == 0 { i += 1 }
                }
                (i, 0)
            }
            ['e'] => {
                for _ in 0..n {
                    i += 1;
                    while i < len && cls(i) == 0 { i += 1 }
                    while i + 1 < len && cls(i + 1) == cls(i) { i += 1 }
                }
                (i.min(len.max(1) - 1), 1)
            }
            ['b'] => {
                for _ in 0..n {
                    while i > 0 && cls(i - 1) == 0 { i -= 1 }
                    let k = cls(i.max(1) - 1);
                    while i > 0 && cls(i - 1) == k { i -= 1 }
                }
                (i, 0)
            }
            ['f' | 't', x] => { for _ in 0..n { i += 1 + t.get(i + 1..e)?.iter().position(|c| c == x)? } (i - (m[0] == 't') as usize, 1) }
            ['F' | 'T', x] => { for _ in 0..n { i = b + t[b..i].iter().rposition(|c| c == x)? } (i + (m[0] == 'T') as usize, 0) }
            ['n' | 'N'] => (self.search(m[0] == 'n')?, 0),
            _ => return None,
        })
    }

    fn search(&self, fwd: bool) -> Option<usize> {
        let (p, n, c) = (self.find.chars().collect::<Vec<_>>(), self.t.len(), self.c);
        let hit = |i: &usize| !p.is_empty() && self.t[*i..].starts_with(&p);
        if fwd { (c + 1..n).chain(0..=c.min(n)).find(hit) } else { (0..c).rev().chain((c..n).rev()).find(hit) }
    }

    /// Normal and visual mode: a count, an operator, a count and a motion, or a command.
    fn normal(&mut self) -> Option<()> {
        let p = self.pend.clone();
        let num = |s: usize| if p.get(s) == Some(&'0') { 0 } else { p[s..].iter().take_while(|c| c.is_ascii_digit()).count() };
        let i = num(0);
        let op = p.get(i).copied().filter(|o| self.mode == 'n' && "dcy<>".contains(*o));
        let j = i + op.is_some() as usize;
        let k = j + num(j);
        let count = |a: usize, b: usize| p[a..b].iter().collect::<String>().parse::<usize>().ok();
        let (n1, n2) = (count(0, i), count(j, k));
        let (n, counted, m) = (n1.unwrap_or(1) * n2.unwrap_or(1), n1.or(n2).is_some(), &p[k..]);
        if m.is_empty() || matches!(m, ['g' | 'f' | 't' | 'F' | 'T' | 'r']) { return None }
        self.pend.clear();
        let c = self.c;
        if op.is_none() && matches!(m, [':' | '/']) { (self.mode, self.msg) = (':', m[0].into()); return Some(()) }
        if self.mode != 'n' {
            let o = match m[0] { 'd' | 'x' | 'D' | 'X' => 'd', 'c' | 's' | 'C' | 'S' => 'c', 'y' | 'Y' => 'y', o @ ('>' | '<') => o, _ => ' ' };
            return Some(match m[0] {
                _ if o != ' ' => self.apply(o, c.min(self.anchor), c.max(self.anchor) + 1, self.mode == 'V' || "DXYCS<>".contains(m[0])),
                'o' => (self.c, self.anchor) = (self.anchor, c),
                'v' | 'V' => self.mode = if self.mode == m[0] { 'n' } else { m[0] },
                _ => self.c = self.motion(m, n, counted)?.0,
            });
        }
        // Shorthands: x is dl, X dh, D d$, C c$, s cl, S cc and Y yy.
        let alias = ["xdl", "Xdh", "Dd$", "Cc$", "scl", "Scc", "Yyy"].into_iter().find(|a| op.is_none() && m == [a.as_bytes()[0] as char]);
        if let Some(a) = alias { self.pend = p[..k].iter().copied().chain(a[1..].chars()).collect(); return self.normal() }
        if let Some(o) = op {
            let word = o == 'c' && m == ['w'] && !self.t.get(c).is_none_or(|c| c.is_whitespace());
            let (mut to, kind) = if m == [o] { (self.at(self.line(c) + n - 1, 0), 2) } else { self.motion(if word { &['e'] } else { m }, n, counted)? };
            if m == ['w'] && !word && self.t[c.min(to)..c.max(to)].contains(&'\n') { to = self.eol(c) }
            return Some(self.apply(o, c.min(to), c.max(to) + (kind > 0) as usize, kind == 2));
        }
        Some(match m {
            ['i'] => self.insert(c),
            ['a'] => self.insert((c + 1).min(self.eol(c))),
            ['I'] => self.insert(self.motion(&['^'], 1, false)?.0),
            ['A'] => self.insert(self.eol(c)),
            ['o'] => { self.insert(self.eol(c)); self.ins("\n") }
            ['O'] => { self.insert(self.bol(c)); self.ins("\n"); self.c -= 1 }
            ['v' | 'V'] => (self.mode, self.anchor) = (m[0], c),
            ['p' | 'P'] => self.put(m[0] == 'p', n),
            ['u' | '\x12'] => for _ in 0..n { self.back(m[0] == 'u') },
            ['r', x] => if c + n <= self.eol(c) { self.snap(); self.t[c..c + n].fill(*x); self.c = c + n - 1 },
            // Join: the line break and the next line's indent become one space.
            ['J'] => {
                let e = self.eol(c);
                if e < self.t.len() {
                    self.snap();
                    let w = self.t[e + 1..].iter().take_while(|c| WS(c)).count();
                    self.t.splice(e..e + 1 + w, [' ']);
                    self.c = e;
                }
            }
            _ => self.c = self.motion(m, n, counted)?.0,
        })
    }

    /// Operator `o` (d, c, y, >, <) over [a, b), or over the whole lines it touches.
    fn apply(&mut self, o: char, mut a: usize, mut b: usize, lines: bool) {
        let len = self.t.len();
        (a, b) = (a.min(len), b.min(len));
        if lines { (a, b) = (self.bol(a), (self.eol(b.saturating_sub(1).max(a)) + 1).min(len)) }
        self.mode = if o == 'c' { 'i' } else { 'n' };
        if o == '>' || o == '<' {
            self.snap();
            let t: Vec<char> = self.t[a..b].split_inclusive(|&c| c == '\n').flat_map(|l| {
                let w = if o == '<' { l.iter().take(4).take_while(|c| WS(c)).count() } else { 0 };
                (if o == '>' && l != ['\n'] { "    " } else { "" }).chars().chain(l[w..].iter().copied())
            }).collect();
            self.t.splice(a..b, t);
            return self.c = a;
        }
        let mut s: String = self.t[a..b].iter().collect();
        if lines && !s.ends_with('\n') { s.push('\n') }
        (self.reg, self.act, self.c) = ((s, lines), "y".into(), a);
        if o == 'y' { return }
        self.snap();
        if lines && o == 'c' { b -= (b > a && self.t[b - 1] == '\n') as usize } else if lines && b == len && a > 0 { a -= 1 }
        self.t.drain(a..b);
        self.c = a;
    }

    fn put(&mut self, after: bool, n: usize) {
        let (s, lines, c) = (self.reg.0.repeat(n), self.reg.1, self.c);
        if s.is_empty() { return }
        self.snap();
        self.c = match (lines, after) { (true, true) => self.eol(c), (true, false) => self.bol(c), (false, true) => (c + 1).min(self.eol(c)), _ => c };
        let at = self.c + after as usize;
        self.ins(&if lines && after { format!("\n{}", s.strip_suffix('\n').unwrap_or(&s)) } else { s });
        if lines { self.c = at } else { self.c -= 1 }
    }

    fn back(&mut self, undo: bool) {
        let (from, to) = if undo { (&mut self.undo, &mut self.redo) } else { (&mut self.redo, &mut self.undo) };
        if let Some((t, c)) = from.pop() { to.push((std::mem::replace(&mut self.t, t), self.c)); self.c = c }
    }

    fn command(&mut self) {
        let s = std::mem::take(&mut self.msg);
        let (kind, cmd) = s.split_at(1);
        match (kind, cmd.trim()) {
            ("/", p) => {
                if !p.is_empty() { self.find = p.into() }
                match self.search(true) { Some(i) => self.c = i, None => self.msg = format!("Pattern not found: {}", self.find) }
            }
            (_, "") => {}
            (_, c @ ("w" | "q" | "run" | "save")) => self.act = c.into(),
            (_, "wq" | "x") => self.act = "w q".into(),
            (_, l) if l.bytes().all(|b| b.is_ascii_digit()) => self.c = self.at(l.parse::<usize>().unwrap_or(1).saturating_sub(1), 0),
            (_, c) => self.msg = format!("Not an editor command: {c}"),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn keys(v: &mut Vim, text: &str, at: usize, ks: &str) -> String {
        v.step(text, at, at, None, '\0');
        for k in ks.chars() {
            let (u, t) = (|i: usize| v.t[..i].iter().map(|c| c.len_utf16()).sum::<usize>(), v.t.iter().collect::<String>());
            let (a, b) = v.shown();
            v.step(&t, u(a), u(b), None, k);
        }
        v.t.iter().collect()
    }

    #[test]
    fn edits_like_vim() {
        let mut v = Vim::default();
        assert_eq!(keys(&mut v, "let a = 1;\nlet b = 2;\n", 0, "dw"), "a = 1;\nlet b = 2;\n");
        assert_eq!(keys(&mut v, "one two\nthree\nfour", 0, "jddp"), "one two\nfour\nthree");
        assert_eq!(keys(&mut v, "one two\nthree", 0, "wcwsix\x1b"), "one six\nthree");
        assert_eq!((v.mode, v.c), ('n', 6));
        assert_eq!(keys(&mut v, "one two\nthree", 0, "2x$p"), "e twoon\nthree");
        assert_eq!(keys(&mut v, "a\nb\nc", 0, "Vjd"), "c");
        assert_eq!(keys(&mut v, "a\nb\nc", 0, "Vj>u\x12"), "    a\n    b\nc");
        assert_eq!(keys(&mut v, "x(y)z", 0, "dt)ifoo\x1bu"), ")z");
        assert_eq!(keys(&mut v, "a b\nc", 0, "J0r-:2\nyy/b\n"), "- b c");
        assert_eq!(keys(&mut v, "é😀b", 0, "lx"), "éb");
        assert_eq!(keys(&mut v, "a\nb", 0, "jddoc\x1bOx\x1bggAz\x1bGP"), "az\nx\nb\nc");
        assert_eq!(keys(&mut v, "ab ab ab", 0, "/ab\nnNd$"), "ab ");
        // Any key on any text leaves a valid state: a panic would trap the page.
        let (mut x, all): (u64, Vec<char>) = (7, "hjklwbe0^$gGfFtTnNxXdcyp PuJr<>iaAIoOvV:/12\n\x08\x1b\x12←→↑↓é😀".chars().collect());
        for text in ["", "\n", "a", "fn f() {\n    x\n}\n\n", "é😀\n😀"] {
            for _ in 0..4000 {
                x = x.wrapping_mul(6364136223846793005).wrapping_add(1442695040888963407);
                let (u, t) = (|i: usize| v.t[..i].iter().map(|c| c.len_utf16()).sum::<usize>(), if x % 97 == 0 { text.into() } else { v.t.iter().collect::<String>() });
                let (a, b) = if x % 89 == 0 { (0, u(v.t.len())) } else { (u(v.shown().0), u(v.shown().1)) };
                v.step(&t, a.min(t.encode_utf16().count()), b.min(t.encode_utf16().count()), None, all[(x >> 33) as usize % all.len()]);
            }
        }
        let mut v = Vim::default();
        assert!(v.step("ab", 0, 0, None, ':').starts_with(":\n"));
        let out = ["w", "q", "\n"].iter().fold(String::new(), |_, k| v.step("ab", 0, 1, None, k.chars().next().unwrap()));
        assert!(out.starts_with("n\n0 1\nw q\n"));
    }
}
