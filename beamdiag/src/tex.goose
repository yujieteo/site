import std;
import math;
import .fmt;

let TEX_TEXT = 0;
let TEX_UNICODE = 1;

var tex_i: i64 = 0;


fn tex_esc(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    for c in s {
        if c == '&' { out.append("&amp;"); }
        else if c == '<' { out.append("&lt;"); }
        else if c == '>' { out.append("&gt;"); }
        else if c == '"' { out.append("&quot;"); }
        else { out.push(c); }
    }
    assert(out.len >= s.len);
    assert(tex_i >= 0);
    return out;
}

fn tex_alpha(c: u8) -> bool {
    let r = (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    assert(!r || c >= 65);
    assert(!r || c <= 'z');
    return r;
}

fn tex_clen(b: u8) -> i64 {
    let r = if b >= 240 { 4 } else if b >= 224 { 3 } else if b >= 192 { 2 } else { 1 };
    assert(r >= 1);
    assert(r <= 4);
    return r;
}

fn tex_ws(s: u8[:], i: i64) -> i64 {
    assert(i >= 0);
    assert(i < s.len);
    let c = s[i];
    if c == 32 || (c >= 9 && c <= 13) { return 1; }
    if c < 194 { return 0; }
    let left = s.len - i;
    if c == 194 { return if left >= 2 && (s[i + 1] == 133 || s[i + 1] == 160) { 2 } else { 0 }; }
    if left < 3 { return 0; }
    let d = s[i + 1];
    let e = s[i + 2];
    if c == 225 && d == 154 && e == 128 { return 3; }
    if c == 226 && d == 128 && ((e >= 128 && e <= 138) || e == 168 || e == 169 || e == 175) { return 3; }
    if c == 226 && d == 129 && e == 159 { return 3; }
    if c == 227 && d == 128 && e == 128 { return 3; }
    return 0;
}

fn tex_squeeze(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var pending = false;
    var i = 0;
    while i < s.len {
        let w = tex_ws(s, i);
        if w > 0 {
            i += w;
            if out.len > 0 { pending = true; }
        } else {
            if pending { out.push(' '); pending = false; }
            out.push(s[i]);
            i++;
        }
    }
    assert(out.len <= s.len);
    assert(out.len == 0 || out[0] != ' ');
    return out;
}


fn tex_put_char(s: u8[:], out: u8[>..]&) {
    assert(tex_i >= 0);
    assert(tex_i < s.len);
    let c = s[tex_i];
    if c == '-' { out.append("−"); tex_i++; return; }
    if c == 39 { out.append("′"); tex_i++; return; }
    if c == '=' { out.append(" = "); tex_i++; return; }
    var n = tex_clen(c);
    if tex_i + n > s.len { n = s.len - tex_i; }
    out.append(s[tex_i..tex_i + n]);
    tex_i += n;
    assert(tex_i <= s.len);
}

fn tex_symbol(out: u8[>..]&, name: u8[:]) -> bool {
    let before = out.len;
    if name == "langle" { out.append("⟨"); }
    else if name == "rangle" { out.append("⟩"); }
    else if name == "theta" { out.append("θ"); }
    else if name == "sigma" { out.append("σ"); }
    else if name == "sum" { out.append("Σ"); }
    else if name == "int" { out.append("∫"); }
    else if name == "iint" { out.append("∬"); }
    else if name == "cdot" { out.append("·"); }
    else if name == "times" { out.append(" × "); }
    else if name == "Rightarrow" { out.append(" ⇒ "); }
    else if name == "le" { out.append(" ≤ "); }
    else if name == "ge" { out.append(" ≥ "); }
    else if name == "approx" { out.append(" ≈ "); }
    else if name == "pm" { out.append(" ± "); }
    else if name == "infty" { out.append("∞"); }
    else if name == "nu" { out.append("ν"); }
    else if name == "Delta" { out.append("Δ"); }
    else if name == "max" { out.append("max"); }
    else if name == "min" { out.append("min"); }
    else if name == "quad" { out.append(" "); }
    else if name == "qquad" { out.append("  "); }
    else if name == "," || name == " " || name == ";" || name == "\\" { out.append(" "); }
    else if name == "{" { out.append("{"); }
    else if name == "}" { out.append("}"); }
    else if name == "|" { out.append("‖"); }
    else { assert(out.len == before); return false; }
    assert(out.len > before);
    return true;
}

let TEX_PLAIN_DIGITS: const u8[:] = "0123456789-+in";
let TEX_SUP: const u8[:][14] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "⁻", "⁺", "ⁱ", "ⁿ"];
let TEX_SUB: const u8[:][14] = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₋", "₊", "ᵢ", "ₙ"];

fn tex_small(out: u8[>..]&, start: i64, sup: bool) {
    assert(start >= 0);
    assert(start <= out.len);
    var inner: u8[>..] = [];
    inner.append(out[start..]);
    out.pop_n(out.len - start);
    for c in inner {
        var k = 0;
        var hit = -1;
        while k < 14 {
            if TEX_PLAIN_DIGITS[k] == c { hit = k; break; }
            k++;
        }
        if hit < 0 { out.push(c); }
        else if sup { out.append(TEX_SUP[hit]); }
        else { out.append(TEX_SUB[hit]); }
    }
    assert(out.len >= start);
}

let TK_ATOM = 0;
let TK_SEQ = 1;
let TK_SMALL = 2;
let TK_TEXT = 3;
let TEX_TASK_CAP = 4096;

var tk_kind: i64[4096];
var tk_a: i64[4096];
var tk_b: i64[4096];
var tk_n: i64 = 0;

fn tex_push(kind: i64, a: i64, b: i64) {
    assert(tk_n >= 0 && tk_n < TEX_TASK_CAP);
    assert(kind >= TK_ATOM && kind <= TK_TEXT);
    tk_kind[tk_n] = kind;
    tk_a[tk_n] = a;
    tk_b[tk_n] = b;
    tk_n++;
}

fn tex_atom(s: u8[:], out: u8[>..]&, mode: i64) {
    assert(mode == TEX_TEXT || mode == TEX_UNICODE);
    assert(tex_i >= 0);
    if tex_i >= s.len { return; }
    let c = s[tex_i];
    if c == '{' { tex_i++; tex_push(TK_SEQ, 125, 0); }
    else if c == '\\' { tex_command(s, out, mode); }
    else { tex_put_char(s, out); }
}

fn tex_command(s: u8[:], out: u8[>..]&, mode: i64) {
    tex_i++;
    let start = tex_i;
    while tex_i < s.len && tex_alpha(s[tex_i]) { tex_i++; }
    let word = tex_i > start;
    if !word && tex_i < s.len {
        tex_i += tex_clen(s[tex_i]);
        if tex_i > s.len { tex_i = s.len; }
    }
    let name = s[start..tex_i];
    if word { while tex_i < s.len && s[tex_i] == ' ' { tex_i++; } }
    let has_brace = tex_i < s.len && s[tex_i] == '{';
    if name == "frac" {
        out.append("(");
        tex_push(TK_TEXT, 1, 0);
        tex_push(TK_ATOM, 0, 0);
        tex_push(TK_TEXT, 0, 0);
        tex_push(TK_ATOM, 0, 0);
    } else if name == "mathrm" {
        tex_push(TK_ATOM, 0, 0);
    } else if name == "text" && has_brace {
        tex_i++;
        var depth = 1;
        while tex_i < s.len {
            let c = s[tex_i];
            tex_i++;
            if c == '{' { depth++; }
            else if c == '}' { depth--; if depth == 0 { break; } }
            out.push(c);
        }
    } else if name == "text" {
        tex_push(TK_ATOM, 0, 0);
    } else if name == "left" || name == "right" {
        if tex_i < s.len {
            if s[tex_i] == '.' { tex_i++; } else { tex_put_char(s, out); }
        }
    } else if !tex_symbol(out, name) {
        out.append(name);
    }
}

fn tex_seq_step(s: u8[:], out: u8[>..]&, end: i64, mode: i64) {
    assert(mode == TEX_TEXT || mode == TEX_UNICODE);
    assert(tex_i >= 0);
    if tex_i >= s.len { return; }
    let c = s[tex_i];
    if (c as i64) == end { tex_i++; return; }
    tex_push(TK_SEQ, end, 0);
    if c == '^' || c == '_' {
        tex_i++;
        if mode == TEX_TEXT {
            out.push(c);
            tex_push(TK_ATOM, 0, 0);
        } else {
            tex_push(TK_SMALL, out.len, if c == '^' { 1 } else { 0 });
            tex_push(TK_ATOM, 0, 0);
        }
    } else if c == '\\' {
        tex_command(s, out, mode);
    } else if c == '{' {
        tex_i++;
        tex_push(TK_SEQ, 125, 0);
    } else {
        tex_put_char(s, out);
    }
}

fn tex_run(s: u8[:], out: u8[>..]&, mode: i64) {
    assert(mode == TEX_TEXT || mode == TEX_UNICODE);
    assert(tex_i >= 0);
    tk_n = 0;
    tex_push(TK_SEQ, -1, 0);
    let cap = 16 * (s.len + 4);
    var steps = 0;
    while tk_n > 0 && steps < cap {
        steps++;
        tk_n--;
        let kind = tk_kind[tk_n];
        let a = tk_a[tk_n];
        let b = tk_b[tk_n];
        if kind == TK_SEQ { tex_seq_step(s, out, a, mode); }
        else if kind == TK_ATOM { tex_atom(s, out, mode); }
        else if kind == TK_SMALL { tex_small(out, a, b == 1); }
        else if a == 0 { out.append(")/("); }
        else { out.append(")"); }
    }
    assert(tk_n == 0);
}

fn tex_flat(src: u8[:], mode: i64) -> u8[>..] {
    assert(mode == TEX_TEXT || mode == TEX_UNICODE);
    tex_i = 0;
    var out: u8[>..] = [];
    tex_run(src, out, mode);
    assert(tex_i >= 0);
    return tex_squeeze(out);
}


fn tex_text(src: u8[:]) -> u8[>..] {
    let r = tex_flat(src, TEX_TEXT);
    assert(tex_i >= 0);
    assert(r.len == 0 || r[0] != ' ');
    return r;
}

fn tex_unicode(src: u8[:]) -> u8[>..] {
    let r = tex_flat(src, TEX_UNICODE);
    assert(tex_i >= 0);
    assert(r.len == 0 || r[0] != ' ');
    return r;
}

fn tex_html(src: u8[:]) -> u8[>..] {
    let u = tex_unicode(src);
    assert(u.len == 0 || u[0] != ' ');
    assert(tex_i >= 0);
    return str("<span data-tex=\"", tex_esc(src), "\">", tex_esc(u), "</span>");
}

fn tex_inline(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var from = 0;
    var last = 0;
    while from <= s.len {
        let k0 = find(s[from..], "$");
        if k0 < 0 { break; }
        let a = k0 + from;
        let k = find(s[a + 1..], "$");
        if k < 0 { break; }
        if k > 0 {
            out.append(tex_esc(s[last..a]));
            out.append("<span class=\"math\">");
            out.append(tex_html(s[a + 1..a + 1 + k]));
            out.append("</span>");
            last = a + 2 + k;
            from = last;
        } else {
            from = a + 1;
        }
    }
    out.append(tex_esc(s[last..]));
    assert(last <= s.len);
    assert(from >= 0);
    return out;
}

fn tex_sup_run(s: u8[:]) -> i64 {
    var i = 0;
    while i < s.len {
        if starts_with(s[i..], "⁰") || starts_with(s[i..], "⁻") || (starts_with(s[i..], "⁴")) || starts_with(s[i..], "⁵") || starts_with(s[i..], "⁶") || starts_with(s[i..], "⁷") || starts_with(s[i..], "⁸") || starts_with(s[i..], "⁹") { i += 3; }
        else if starts_with(s[i..], "¹") || starts_with(s[i..], "²") || starts_with(s[i..], "³") { i += 2; }
        else { break; }
    }
    assert(i >= 0);
    assert(i <= s.len);
    return i;
}

fn tex_mark_powers(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var rest = s;
    while rest.len > 0 {
        let found = find(rest, "×10");
        if found < 0 { break; }
        let exp_len = tex_sup_run(rest[found + 4..]);
        var start = found;
        while start > 0 {
            if start >= 1 && ((rest[start - 1] >= '0' && rest[start - 1] <= '9') || rest[start - 1] == '.' || rest[start - 1] == ',') { start -= 1; }
            else if start >= 3 && starts_with(rest[start - 3..], "−") { start -= 3; }
            else { break; }
        }
        let end = found + 4 + exp_len;
        if exp_len == 0 || start == found {
            out.append(rest[..end]);
            rest = rest[end..];
            continue;
        }
        out.append(rest[..start]);
        out.append("$");
        out.append(tex_number(rest[start..end]));
        out.append("$");
        rest = rest[end..];
    }
    out.append(rest);
    assert(rest.len <= s.len);
    assert(rest.len == 0 || find(rest, "×10") < 0);
    return out;
}

fn tex_rich(s: u8[:]) -> u8[>..] {
    var marked: u8[>..] = [];
    var from = 0;
    var odd = false;
    while from <= s.len {
        let k = find(s[from..], "$");
        let seg = if k < 0 { s[from..] } else { s[from..from + k] };
        if odd { marked.append("$"); marked.append(seg); marked.append("$"); }
        else { marked.append(tex_mark_powers(seg)); }
        if k < 0 { break; }
        from = from + k + 1;
        odd = !odd;
    }
    assert(from <= s.len);
    assert(from >= 0);
    return tex_inline(marked);
}

fn tex_plain(src: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var from = 0;
    var odd = false;
    while from <= src.len {
        let k = find(src[from..], "$");
        let seg = if k < 0 { src[from..] } else { src[from..from + k] };
        if odd { out.append(tex_unicode(seg)); } else { out.append(seg); }
        if k < 0 { break; }
        from = from + k + 1;
        odd = !odd;
    }
    assert(from <= src.len);
    assert(from >= 0);
    return out;
}
