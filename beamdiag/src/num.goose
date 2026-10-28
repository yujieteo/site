// JavaScript's number to text conversions, digit for digit: String(x), toPrecision, toExponential
// and toLocaleString("en-GB") with fixed fraction digits. The page's formatters were written with
// them, so every number reads the same as it always has.
//
// Digits come from the C library's exact conversions (shim.h): JavaScript rounds the exact binary value.

import std;
import math;

extern fn bd_fmt_e(x: f64, prec: i64, out: u8[1200]&) -> i64;
extern fn bd_fmt_f(x: f64, prec: i64, out: u8[1200]&) -> i64;
extern fn bd_strtod(inp: u8[1200]&) -> f64;

// A digit string with its decimal exponent: x = d.ddd × 10^e.
struct Digits { d: u8[..400], e: i64 }

// Reads "d.ddde+XX" from buf[0..n].
fn read_sci(buf: u8[1200]&, n: i64) -> Digits {
    var r = Digits { d: "", e: 0 };
    var i = 0;
    while i < n && buf[i] != 'e' {
        let c = buf[i];
        if c >= '0' && c <= '9' { r.d.push(c); }
        i++;
    }
    i++;
    var neg = false;
    if i < n && (buf[i] == '-' || buf[i] == '+') { neg = buf[i] == '-'; i++; }
    var e = 0;
    while i < n { e = e * 10 + (buf[i] - '0') as i64; i++; }
    r.e = if neg { -e } else { e };
    return r;
}

// True when the digits d, read as a number, are x.
fn reads(d: Digits&, x: f64) -> bool {
    var buf: u8[1200] = [0; 1200];
    var t: u8[>..] = [];
    t.push(d.d[0]);
    if d.d.len > 1 { t.push('.'); var i = 1; while i < d.d.len { t.push(d.d[i]); i++; } }
    t.push('e');
    format(t, d.e);
    var j = 0;
    for c in t { buf[j] = c; j++; }
    return bd_strtod(buf) == x;
}

// Takes one unit off the last digit of a digit string; false when the first digit would become 0.
fn drop_one(d: u8[..400]&) -> bool {
    var i = d.len - 1;
    while i >= 0 {
        if d[i] == '0' { d[i] = '9'; } else { d[i] -= 1; return !(i == 0 && d[0] == '0'); }
        i--;
    }
    return false;
}

// The shortest digits that read back as x (x finite and positive), and n with x = 0.d1d2… × 10^n.
// At a power of two the interval of numbers that read as x is lopsided, so a digit string next to the
// nearest one may be the shortest that reads back, as JavaScript finds it.
fn shortest(x: f64) -> Digits {
    var buf: u8[1200] = [0; 1200];
    var p = 0;
    loop {
        let n = bd_fmt_e(x, p, buf);
        var r = read_sci(buf, n);
        if reads(r, x) || p >= 16 {
            r.e += 1;
            return r;
        }
        var up = r;
        if bump(up.d) { up.d = "1"; var i = 0; while i < p { up.d.push('0'); i++; } up.e += 1; }
        if reads(up, x) { up.e += 1; return up; }
        var dn = r;
        if drop_one(dn.d) && reads(dn, x) { dn.e += 1; return dn; }
        p++;
    }
}

// Appends the digits d[from..to] of a digit string.
fn digs(out: u8[>..]&, d: Digits&, from: i64, to: i64) {
    var i = from;
    while i < to { out.push(d.d[i]); i++; }
}

fn zeros(out: u8[>..]&, n: i64) { var i = 0; while i < n { out.push('0'); i++; } }

// String(x).
fn js(x: f64) -> u8[>..] {
    var out: u8[>..] = [];
    if is_nan(x) { out.append("NaN"); return out; }
    if x == 0.0 { out.push('0'); return out; }
    if is_inf(x) { out.append(if x > 0.0 { "Infinity" } else { "-Infinity" }); return out; }
    let s = shortest(if x < 0.0 { -x } else { x });
    let k = s.d.len;
    let n = s.e;
    if x < 0.0 { out.push('-'); }
    if k <= n && n <= 21 {
        digs(out, s, 0, k);
        zeros(out, n - k);
    } else if 0 < n && n <= 21 {
        digs(out, s, 0, n);
        out.push('.');
        digs(out, s, n, k);
    } else if -6 < n && n <= 0 {
        out.append("0.");
        zeros(out, -n);
        digs(out, s, 0, k);
    } else {
        digs(out, s, 0, 1);
        if k > 1 { out.push('.'); digs(out, s, 1, k); }
        out.append("e");
        out.push(if n - 1 >= 0 { '+' } else { '-' });
        format(out, abs(n - 1));
    }
    return out;
}

// Adds one unit in the last place of a digit string; true when it carried out of the first digit.
fn bump(d: u8[..400]&) -> bool {
    var i = d.len - 1;
    while i >= 0 {
        if d[i] == '9' { d[i] = '0'; } else { d[i] += 1; return false; }
        i--;
    }
    return true;
}

// p significant digits of x > 0 and the exponent e of x ≈ d.dd… × 10^e, rounded half up from x's
// exact binary value, as JavaScript rounds. The C library rounds half to even, so a tail that reads
// as exactly one half is settled from the exact digits.
fn round_sig(x: f64, p: i64) -> Digits {
    var buf: u8[1200] = [0; 1200];
    var n = bd_fmt_e(x, p + 1, buf);
    var r = read_sci(buf, n);
    var up = false;
    if r.d[p] == '5' && r.d[p + 1] == '0' {
        // Every double has at most 767 significant digits, so 780 are exact.
        n = bd_fmt_e(x, 780, buf);
        // Only the first p + 1 digits of the exact expansion are needed.
        var q = read_sci_prefix(buf, n, p + 1);
        r.d = q.d;
        r.e = q.e;
        up = r.d[p] >= '5';
    } else {
        up = r.d[p] >= '5';
    }
    r.d.resize(p);
    if up && bump(r.d) {
        // Carried out of the first digit: 1000…
        var one: u8[..400] = "1";
        var i = 1;
        while i < p { one.push('0'); i++; }
        r.d = one;
        r.e += 1;
    }
    return r;
}

// Like read_sci, but keeps only the first m digits.
fn read_sci_prefix(buf: u8[1200]&, n: i64, m: i64) -> Digits {
    var r = Digits { d: "", e: 0 };
    var i = 0;
    while i < n && buf[i] != 'e' {
        let c = buf[i];
        if c >= '0' && c <= '9' && r.d.len < m { r.d.push(c); }
        i++;
    }
    i++;
    var neg = false;
    if i < n && (buf[i] == '-' || buf[i] == '+') { neg = buf[i] == '-'; i++; }
    var e = 0;
    while i < n { e = e * 10 + (buf[i] - '0') as i64; i++; }
    r.e = if neg { -e } else { e };
    return r;
}

// x.toPrecision(p).
fn to_precision(x: f64, p: i64) -> u8[>..] {
    if is_nan(x) || is_inf(x) { return js(x); }
    var out: u8[>..] = [];
    if x < 0.0 { out.push('-'); }
    var s = Digits { d: "", e: 0 };
    if x == 0.0 {
        var i = 0;
        while i < p { s.d.push('0'); i++; }
    } else {
        s = round_sig(abs(x), p);
    }
    let e = s.e;
    if e < -6 || e >= p {
        digs(out, s, 0, 1);
        if p > 1 { out.push('.'); digs(out, s, 1, p); }
        out.push('e');
        out.push(if e >= 0 { '+' } else { '-' });
        format(out, abs(e));
    } else if e == p - 1 {
        digs(out, s, 0, p);
    } else if e >= 0 {
        digs(out, s, 0, e + 1);
        out.push('.');
        digs(out, s, e + 1, p);
    } else {
        out.append("0.");
        zeros(out, -(e + 1));
        digs(out, s, 0, p);
    }
    return out;
}

// +x.toPrecision(p): x rounded to p significant digits.
fn prec(x: f64, p: i64) -> f64 {
    if is_nan(x) || is_inf(x) { return x; }
    var buf: u8[1200] = [0; 1200];
    var s = Digits { d: "", e: 0 };
    if x == 0.0 { return x; }
    s = round_sig(abs(x), p);
    // d.ddd e (s.e): write it as text and read it back.
    var t: u8[>..] = [];
    digs(t, s, 0, 1);
    if p > 1 { t.push('.'); digs(t, s, 1, p); }
    t.push('e');
    format(t, s.e);
    var i = 0;
    for c in t { buf[i] = c; i++; }
    buf[i] = 0;
    let v = bd_strtod(buf);
    return if x < 0.0 { -v } else { v };
}

// x.toExponential(f), f fraction digits.
fn to_exponential(x: f64, f: i64) -> u8[>..] {
    if is_nan(x) || is_inf(x) { return js(x); }
    var out: u8[>..] = [];
    if x < 0.0 { out.push('-'); }
    var s = Digits { d: "", e: 0 };
    if x == 0.0 {
        var i = 0;
        while i <= f { s.d.push('0'); i++; }
    } else {
        s = round_sig(abs(x), f + 1);
    }
    digs(out, s, 0, 1);
    if f > 0 { out.push('.'); digs(out, s, 1, f + 1); }
    out.push('e');
    out.push(if s.e >= 0 { '+' } else { '-' });
    format(out, abs(s.e));
    return out;
}

// Integer digits n of x·10^f as JavaScript writes them: "0.0n", "n.nn".
fn fixed_text(out: u8[>..]&, d0: u8[..400], f: i64) {
    var d = d0;
    var skip = 0;
    while d.len - skip > 1 && d[skip] == '0' && d.len - skip > f + 1 { skip++; }
    var ds: u8[..400] = "";
    var lead = f + 1 - (d.len - skip);
    while lead > 0 { ds.push('0'); lead--; }
    var i = skip;
    while i < d.len { ds.push(d[i]); i++; }
    let k = ds.len;
    var j = 0;
    while j < k - f { out.push(ds[j]); j++; }
    if f > 0 {
        out.push('.');
        while j < k { out.push(ds[j]); j++; }
    }
}

// x.toLocaleString("en-GB", { minimumFractionDigits: f, maximumFractionDigits: f }): ICU rounds the
// shortest decimal that reads back as x, half away from zero, then groups the thousands with commas.
fn locale(x: f64, f: i64) -> u8[>..] {
    var out: u8[>..] = [];
    if is_nan(x) { out.append("NaN"); return out; }
    if is_inf(x) { out.append(if x > 0.0 { "∞" } else { "-∞" }); return out; }
    if x < 0.0 { out.push('-'); }
    var s = Digits { d: "0", e: 1 };
    if x != 0.0 { s = shortest(abs(x)); }
    let point = s.e + f;      // digits before the point of x·10^f
    var int: u8[..400] = "";
    if point <= 0 {
        // All of x·10^f is below one: it rounds to 1 only from a first digit of 5 or more in the first place.
        if point == 0 && s.d[0] >= '5' { int.push('1'); } else { int.push('0'); }
    } else {
        var d = s.d;
        while d.len < point { d.push('0'); }
        let up = d.len > point && d[point] >= '5';
        var i: u8[..400] = "";
        var k = 0;
        while k < point { i.push(d[k]); k++; }
        if up && bump(i) { var one: u8[..400] = "1"; for c in i { one.push(c); } i = one; }
        int = i;
    }
    var text: u8[>..] = [];
    fixed_text(text, int, f);
    // Group the integer part.
    var int_end = 0;
    while int_end < text.len && text[int_end] != '.' { int_end++; }
    var i = 0;
    while i < int_end {
        if i > 0 && (int_end - i) % 3 == 0 { out.push(','); }
        out.push(text[i]);
        i++;
    }
    while i < text.len { out.push(text[i]); i++; }
    return out;
}

// The number a text of digits, sign, point and exponent reads as, correctly rounded; 0 when it is too long.
fn read_double(s: u8[:]) -> f64 {
    if s.len >= 1199 { return 0.0; }
    var buf: u8[1200] = [0; 1200];
    var k = 0;
    for c in s { buf[k] = c; k++; }
    return bd_strtod(buf);
}
