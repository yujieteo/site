// The small TeX subset of the hand calculations, drawn as HTML without a maths library: text,
// fractions, superscripts and subscripts.
//
// The Rust builds a node tree and flattens it. Here one recursive pass writes the flat text directly
// (mode TEX_TEXT for accessible labels, TEX_UNICODE for the PDF and the page's first draw). The result is
// the same: both end by closing up all runs of white space, so merging neighbouring strings first is
// not needed. The source is read byte by byte; only a character that is consumed as one unit (after
// ^ _ \frac \left \right or a backslash) is stepped over whole.

import std;
import math;
import .fmt;

let TEX_TEXT = 0;
let TEX_UNICODE = 1;

var tex_i: i64 = 0;             // the read position in the source being parsed

// ---------- small helpers ----------

// HTML text and attribute escaping.
fn tex_esc(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    for c in s {
        if c == '&' { out.append("&amp;"); }
        else if c == '<' { out.append("&lt;"); }
        else if c == '>' { out.append("&gt;"); }
        else if c == '"' { out.append("&quot;"); }
        else { out.push(c); }
    }
    return out;
}

fn tex_alpha(c: u8) -> bool { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'); }
fn tex_clen(b: u8) -> i64 { return if b >= 240 { 4 } else if b >= 224 { 3 } else if b >= 192 { 2 } else { 1 }; }

// Byte length of the white space character at i (Rust's char::is_whitespace), 0 if none.
fn tex_ws(s: u8[:], i: i64) -> i64 {
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

// s.split_whitespace().collect::<Vec<_>>().join(" ")
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
    return out;
}

// ---------- the parser ----------

// The next character, with - ' = set as TeX maths sets them.
fn tex_put_char(s: u8[:], out: u8[>..]&) {
    let c = s[tex_i];
    if c == '-' { out.append("−"); tex_i++; return; }
    if c == 39 { out.append("′"); tex_i++; return; }
    if c == '=' { out.append(" = "); tex_i++; return; }
    var n = tex_clen(c);
    if tex_i + n > s.len { n = s.len - tex_i; }
    out.append(s[tex_i..tex_i + n]);
    tex_i += n;
}

// The name of a symbol command; false when unknown.
fn tex_symbol(out: u8[>..]&, name: u8[:]) -> bool {
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
    else { return false; }
    return true;
}

let TEX_PLAIN_DIGITS: const u8[:] = "0123456789-+in";
let TEX_SUP: const u8[:][14] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "⁻", "⁺", "ⁱ", "ⁿ"];
let TEX_SUB: const u8[:][14] = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₋", "₊", "ᵢ", "ₙ"];

// The text written since start becomes superscript or subscript characters (digits, - + i n), in place.
fn tex_small(out: u8[>..]&, start: i64, sup: bool) {
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
}

recursive fn tex_atom(s: u8[:], out: u8[>..]&, mode: i64) {
    if tex_i >= s.len { return; }
    let c = s[tex_i];
    if c == '{' { tex_i++; tex_seq(s, out, 125, mode); }
    else if c == '\\' { tex_command(s, out, mode); }
    else { tex_put_char(s, out); }
}

recursive fn tex_command(s: u8[:], out: u8[>..]&, mode: i64) {
    tex_i++;
    let start = tex_i;
    while tex_i < s.len && tex_alpha(s[tex_i]) { tex_i++; }
    let word = tex_i > start;
    if !word && tex_i < s.len {
        tex_i += tex_clen(s[tex_i]);
        if tex_i > s.len { tex_i = s.len; }
    }
    let name = s[start..tex_i];
    // As in TeX, a control word swallows the spaces after it.
    if word { while tex_i < s.len && s[tex_i] == ' ' { tex_i++; } }
    let has_brace = tex_i < s.len && s[tex_i] == '{';
    if name == "frac" {
        out.append("(");
        tex_atom(s, out, mode);
        out.append(")/(");
        tex_atom(s, out, mode);
        out.append(")");
    } else if name == "mathrm" {
        tex_atom(s, out, mode);
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
        tex_atom(s, out, mode);
    } else if name == "left" || name == "right" {
        if tex_i < s.len {
            if s[tex_i] == '.' { tex_i++; } else { tex_put_char(s, out); }
        }
    } else if !tex_symbol(out, name) {
        out.append(name);
    }
}

// Reads to the end character (a code, or -1 for none), which it consumes.
recursive fn tex_seq(s: u8[:], out: u8[>..]&, end: i64, mode: i64) {
    while tex_i < s.len {
        let c = s[tex_i];
        if (c as i64) == end { tex_i++; break; }
        if c == '^' || c == '_' {
            tex_i++;
            if mode == TEX_TEXT {
                out.push(c);
                tex_atom(s, out, mode);
            } else {
                let start = out.len;
                tex_atom(s, out, mode);
                tex_small(out, start, c == '^');
            }
        } else if c == '\\' {
            tex_command(s, out, mode);
        } else if c == '{' {
            tex_i++;
            tex_seq(s, out, 125, mode);
        } else {
            tex_put_char(s, out);
        }
    }
}

fn tex_flat(src: u8[:], mode: i64) -> u8[>..] {
    tex_i = 0;
    var out: u8[>..] = [];
    tex_seq(src, out, -1, mode);
    return tex_squeeze(out);
}

// ---------- the forms ----------

// Plain text of a TeX string, for accessible labels.
fn tex_text(src: u8[:]) -> u8[>..] { return tex_flat(src, TEX_TEXT); }

// Unicode maths for the PDF, from the same equation as the page.
fn tex_unicode(src: u8[:]) -> u8[>..] { return tex_flat(src, TEX_UNICODE); }

fn tex_html(src: u8[:]) -> u8[>..] {
    let u = tex_unicode(src);
    return str("<span data-tex=\"", tex_esc(src), "\">", tex_esc(u), "</span>");
}

// Text with inline $maths$.
fn tex_inline(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var from = 0;
    var last = 0;
    while true {
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
    return out;
}

// The length of the ⁰¹²³⁴⁵⁶⁷⁸⁹⁻ characters that start s, in bytes.
fn tex_sup_run(s: u8[:]) -> i64 {
    var i = 0;
    while i < s.len {
        if starts_with(s[i..], "⁰") || starts_with(s[i..], "⁻") || (starts_with(s[i..], "⁴")) || starts_with(s[i..], "⁵") || starts_with(s[i..], "⁶") || starts_with(s[i..], "⁷") || starts_with(s[i..], "⁸") || starts_with(s[i..], "⁹") { i += 3; }
        else if starts_with(s[i..], "¹") || starts_with(s[i..], "²") || starts_with(s[i..], "³") { i += 2; }
        else { break; }
    }
    return i;
}

fn tex_mark_powers(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var rest = s;
    while true {
        let found = find(rest, "×10");
        if found < 0 { break; }
        let exp_len = tex_sup_run(rest[found + 4..]);
        // the digits, points, commas and minus signs just before
        var start = found;
        while true {
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
    return out;
}

// Text with inline $maths$ and every ×10ⁿ number typeset.
fn tex_rich(s: u8[:]) -> u8[>..] {
    var marked: u8[>..] = [];
    var from = 0;
    var odd = false;
    while true {
        let k = find(s[from..], "$");
        let seg = if k < 0 { s[from..] } else { s[from..from + k] };
        if odd { marked.append("$"); marked.append(seg); marked.append("$"); }
        else { marked.append(tex_mark_powers(seg)); }
        if k < 0 { break; }
        from = from + k + 1;
        odd = !odd;
    }
    return tex_inline(marked);
}

fn tex_plain(src: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var from = 0;
    var odd = false;
    while true {
        let k = find(src[from..], "$");
        let seg = if k < 0 { src[from..] } else { src[from..from + k] };
        if odd { out.append(tex_unicode(seg)); } else { out.append(seg); }
        if k < 0 { break; }
        from = from + k + 1;
        odd = !odd;
    }
    return out;
}
