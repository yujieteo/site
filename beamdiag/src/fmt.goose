import std;
import math;
import .num;
import .engine;

fn minus(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    var done = false;
    for c in s {
        if c == '-' && !done { out.append("−"); done = true; } else { out.push(c); }
    }
    return out;
}

fn plain(x: f64, n: i64) -> u8[>..] { return minus(js(prec(x, n))); }

let SUPERSCRIPT: const u8[:][10] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

fn pow10(x: f64, n: i64) -> u8[>..] {
    let t = to_exponential(x, n - 1);
    var at = 0;
    while t[at] != 'e' { at++; }
    var out: u8[>..] = [];
    out.append(plain(read_double(t[..at]), n));
    out.append("×10");
    var seen_minus = false;
    var i = at + 1;
    while i < t.len {
        let c = t[i];
        if c == '+' {
        } else if c == '-' && !seen_minus {
            out.append("⁻");
            seen_minus = true;
        } else if c >= '0' && c <= '9' {
            out.append(SUPERSCRIPT[(c - '0') as i64]);
        } else {
            out.push(c);
        }
        i++;
    }
    return out;
}

fn nf(x: f64, digits: i64) -> u8[>..] {
    if !finite(x) { return "—"; }
    let a = abs(x);
    if a == 0.0 { return "0"; }
    if a >= 1e7 || a < 1e-3 { return pow10(x, 4); }
    if a < 1.0 { return plain(x, 4); }
    let d = if a >= 1000.0 { 0 } else if a >= 100.0 { 1 } else if a >= 10.0 { 2 } else { digits };
    return minus(locale(x, d));
}

fn sig(x: f64, n: i64) -> u8[>..] {
    if !finite(x) { return "—"; }
    let a = abs(x);
    if a == 0.0 || (a >= 1e-4 && a < 1e7) { return plain(x, n); }
    return pow10(x, n);
}
fn sig4(x: f64) -> u8[>..] { return sig(x, 4); }

fn sci(x: f64) -> u8[>..] {
    if !finite(x) { return "—"; }
    let a = abs(x);
    if a == 0.0 || (a >= 1e-2 && a < 1e6) { return plain(x, 4); }
    return pow10(x, 4);
}

fn short(x: f64, n: i64) -> u8[>..] { return if finite(x) && abs(x) >= 1e6 { pow10(x, n) } else { sig(x, n) }; }
fn short_nf(x: f64, digits: i64) -> u8[>..] { return if finite(x) && abs(x) >= 1e6 { pow10(x, 4) } else { nf(x, digits) }; }
fn snf(x: f64) -> u8[>..] { return short_nf(x, 3); }

fn from_origin(x: f64, l: f64, mid: bool) -> f64 {
    if !mid { return x; }
    let s = x - l / 2.0;
    return if abs(s) <= 1e-12 * l { 0.0 } else { prec(s, 12) };
}

fn residual_of_balance() -> f64 {
    return jmax(abs(g_eq.fy) / jmax(g_eq.scale_f, 1e-300), abs(g_eq.mz) / jmax(g_eq.scale_m, 1e-300));
}

fn span_ratio(l: f64, v: f64) -> u8[>..] { return if abs(v) > 0.0 { js(round(l / abs(v))) } else { "∞" }; }

fn power(t: u8[:], exp: u8[>..]&) -> i64 {
    let at = rfind(t, "×10");
    if at < 0 { return -1; }
    let e = t[at + 4..];
    if e.len == 0 { return -1; }
    exp.clear();
    var i = 0;
    var first = true;
    while i < e.len {
        if starts_with(e[i..], "⁻") {
            if !first { return -1; }
            exp.push('-');
            i += 3;
        } else if starts_with(e[i..], "⁰") { exp.push('0'); i += 3; }
        else if starts_with(e[i..], "¹") { exp.push('1'); i += 2; }
        else if starts_with(e[i..], "²") { exp.push('2'); i += 2; }
        else if starts_with(e[i..], "³") { exp.push('3'); i += 2; }
        else {
            var found = false;
            var d = 4;
            while d < 10 {
                if starts_with(e[i..], SUPERSCRIPT[d]) { exp.push(('0' + d) as u8); i += 3; found = true; break; }
                d++;
            }
            if !found { return -1; }
        }
        first = false;
    }
    return at;
}

fn tex_number(t0: u8[:]) -> u8[>..] {
    var t: u8[>..] = [];
    if starts_with(t0, "−") {
        t.push('-');
        t.append(t0[3..]);
    } else {
        t.append(t0);
    }
    var c: u8[>..] = [];
    for ch in t {
        if ch == ',' { c.append("{,}"); } else { c.push(ch); }
    }
    var exp: u8[>..] = [];
    let at = power(c, exp);
    if at < 0 { return c; }
    return str(c[..at], "\\times 10^{", exp, "}");
}

fn tex_unit(sym: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    out.append("\\mathrm{");
    var i = 0;
    while i < sym.len {
        if starts_with(sym[i..], "·") { out.append("\\cdot "); i += 2; }
        else if starts_with(sym[i..], "²") { out.append("^2"); i += 2; }
        else if starts_with(sym[i..], "³") { out.append("^3"); i += 2; }
        else if starts_with(sym[i..], "⁴") { out.append("^4"); i += 3; }
        else { out.push(sym[i]); i++; }
    }
    out.append("}");
    return out;
}

let NUMBER_WORDS: const u8[:][13] = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
fn counted(n: i64, one: u8[:], many: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    if n >= 0 && n < 13 { out.append(NUMBER_WORDS[n]); } else { format(out, n); }
    out.append(" ");
    out.append(if n == 1 { one } else { many });
    return out;
}

fn is_one(t: u8[:]) -> bool { return t == "1" || t == "−1"; }
