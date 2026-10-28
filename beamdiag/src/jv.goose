// A small JSON reader for the page's events and raw.json. The standard library's json tree reads back
// wrong on WebAssembly (its nodes hold slices behind relative offsets), so this one keeps only integers
// and numbers in its nodes and the decoded text in two pools. A node is an index; -1 is none.
// raw.json is read once (nodes below j_mark, text in jp_raw); each event is read after it (jp_ev).

import std;
import .num;

struct JNode { kind: i64, ko: i64, kl: i64, so: i64, sl: i64, num: f64, flag: bool, next: i64, first: i64, last: i64 }

let J_NULL = 0;
let J_BOOL = 1;
let J_NUM = 2;
let J_STR = 3;
let J_ARR = 4;
let J_OBJ = 5;

var jn: JNode[>..] = [];
var jp_raw: u8[>..] = [];
var jp_ev: u8[>..] = [];
var j_src: u8[>..] = [];
var j_pos: i64 = 0;
var j_bad: bool = false;
var j_mark: i64 = 0;

fn j_node(kind: i64) -> i64 {
    jn.push(JNode { kind: kind, ko: 0, kl: 0, so: 0, sl: 0, num: 0.0, flag: false, next: -1, first: -1, last: -1 });
    return jn.len - 1;
}

fn j_ws() {
    while j_pos < j_src.len {
        let c = j_src[j_pos];
        if c == ' ' || c == '\n' || c == '\r' || c == '\t' { j_pos++; } else { break; }
    }
}

fn j_hex4() -> i64 {
    var v = 0;
    var i = 0;
    while i < 4 {
        if j_pos >= j_src.len { j_bad = true; return 0; }
        let c = j_src[j_pos];
        j_pos++;
        var d = -1;
        if c >= '0' && c <= '9' { d = (c - '0') as i64; }
        else if c >= 'a' && c <= 'f' { d = (c - 'a') as i64 + 10; }
        else if c >= 'A' && c <= 'F' { d = (c - 'A') as i64 + 10; }
        if d < 0 { j_bad = true; return 0; }
        v = v * 16 + d;
        i++;
    }
    return v;
}

// A string at j_pos (on its opening quote), decoded onto the end of out; returns where it starts in out.
fn j_string(out: u8[>..]&) -> i64 {
    let start = out.len;
    j_pos++;
    while true {
        if j_pos >= j_src.len { j_bad = true; return start; }
        let c = j_src[j_pos];
        j_pos++;
        if c == '"' { break; }
        if c != '\\' { out.push(c); continue; }
        if j_pos >= j_src.len { j_bad = true; return start; }
        let e = j_src[j_pos];
        j_pos++;
        if e == 'n' { out.push('\n'); }
        else if e == 't' { out.push('\t'); }
        else if e == 'r' { out.push('\r'); }
        else if e == 'b' { out.push(8); }
        else if e == 'f' { out.push(12); }
        else if e == 'u' {
            var cp = j_hex4();
            if cp >= 0xD800 && cp < 0xDC00 && j_pos + 1 < j_src.len && j_src[j_pos] == '\\' && j_src[j_pos + 1] == 'u' {
                j_pos += 2;
                let lo = j_hex4();
                if lo >= 0xDC00 && lo < 0xE000 { cp = 0x10000 + ((cp - 0xD800) << 10) + (lo - 0xDC00); } else { cp = 0xFFFD; }
            } else if cp >= 0xD800 && cp < 0xE000 {
                cp = 0xFFFD;
            }
            push_utf8(out, cp);
        }
        else { out.push(e); }
    }
    return start;
}

fn j_pool_string(raw: bool, node: i64) {
    if raw {
        let at = j_string(jp_raw);
        jn[node].so = at;
        jn[node].sl = jp_raw.len - at;
    } else {
        let at = j_string(jp_ev);
        jn[node].so = at;
        jn[node].sl = jp_ev.len - at;
    }
}

fn j_literal(word: u8[:]) -> bool {
    if j_pos + word.len > j_src.len { return false; }
    if j_src[j_pos..j_pos + word.len] != word { return false; }
    j_pos += word.len;
    return true;
}

recursive fn j_value(raw: bool) -> i64 {
    j_ws();
    if j_pos >= j_src.len { j_bad = true; return -1; }
    let c = j_src[j_pos];
    if c == '{' || c == '[' {
        let obj = c == '{';
        let idx = j_node(if obj { J_OBJ } else { J_ARR });
        j_pos++;
        while true {
            j_ws();
            if j_pos >= j_src.len { j_bad = true; return -1; }
            let d = j_src[j_pos];
            if d == '}' || d == ']' { j_pos++; break; }
            if d == ',' { j_pos++; continue; }
            var ko = 0;
            var kl = 0;
            if obj {
                if d != '"' { j_bad = true; return -1; }
                if raw {
                    ko = j_string(jp_raw);
                    kl = jp_raw.len - ko;
                } else {
                    ko = j_string(jp_ev);
                    kl = jp_ev.len - ko;
                }
                j_ws();
                if j_pos >= j_src.len || j_src[j_pos] != ':' { j_bad = true; return -1; }
                j_pos++;
            }
            let child = j_value(raw);
            if child < 0 || j_bad { j_bad = true; return -1; }
            jn[child].ko = ko;
            jn[child].kl = kl;
            if jn[idx].first < 0 { jn[idx].first = child; } else { jn[jn[idx].last].next = child; }
            jn[idx].last = child;
        }
        return idx;
    }
    if c == '"' {
        let idx = j_node(J_STR);
        j_pool_string(raw, idx);
        return idx;
    }
    if c == 't' || c == 'f' || c == 'n' {
        let idx = j_node(if c == 'n' { J_NULL } else { J_BOOL });
        let ok = if c == 't' { j_literal("true") } else if c == 'f' { j_literal("false") } else { j_literal("null") };
        if !ok { j_bad = true; return -1; }
        jn[idx].flag = c == 't';
        return idx;
    }
    let start = j_pos;
    while j_pos < j_src.len {
        let d = j_src[j_pos];
        if (d >= '0' && d <= '9') || d == '-' || d == '+' || d == '.' || d == 'e' || d == 'E' { j_pos++; } else { break; }
    }
    if j_pos == start { j_bad = true; return -1; }
    let idx = j_node(J_NUM);
    jn[idx].num = read_double(j_src[start..j_pos]);
    return idx;
}

fn j_run(src: u8[:], raw: bool) -> i64 {
    j_src.resize(0);
    j_src.append(src);
    j_pos = 0;
    j_bad = false;
    let root = j_value(raw);
    j_ws();
    if j_bad || j_pos != j_src.len { return -1; }
    return root;
}

// raw.json: kept for the life of the program.
fn jm_parse_raw(src: u8[:]) -> i64 {
    let root = j_run(src, true);
    j_mark = jn.len;
    return root;
}

// One event: the previous event's nodes and text are dropped.
fn jm_parse_event(src: u8[:]) -> i64 {
    jn.resize(j_mark);
    jp_ev.resize(0);
    return j_run(src, false);
}

fn jm_member(n: i64, key: u8[:]) -> i64 {
    if n < 0 || jn[n].kind != J_OBJ { return -1; }
    let raw = n < j_mark;
    var c = jn[n].first;
    while c >= 0 {
        let k = jn[c].ko;
        let l = jn[c].kl;
        if l == key.len {
            if raw { if jp_raw[k..k + l] == key { return c; } }
            else { if jp_ev[k..k + l] == key { return c; } }
        }
        c = jn[c].next;
    }
    return -1;
}

fn jm_first(n: i64) -> i64 {
    if n < 0 || (jn[n].kind != J_ARR && jn[n].kind != J_OBJ) { return -1; }
    return jn[n].first;
}
fn jm_next(n: i64) -> i64 { return jn[n].next; }

fn jm_is_string(n: i64) -> bool { return n >= 0 && jn[n].kind == J_STR; }
// The text of a string node: of an event, or (jm_rtext) of raw.json. Separate so that what raw.json's users keep
// never points into the pool an event drops.
fn jm_text(n: i64) -> const u8[:] {
    if n < j_mark || n >= jn.len || jn[n].kind != J_STR { return ""; }
    let o = jn[n].so;
    return jp_ev[o..o + jn[n].sl];
}
fn jm_rtext(n: i64) -> const u8[:] {
    if n < 0 || n >= j_mark || jn[n].kind != J_STR { return ""; }
    let o = jn[n].so;
    return jp_raw[o..o + jn[n].sl];
}
fn jm_number(n: i64) -> f64, bool {
    if n < 0 || jn[n].kind != J_NUM { return 0.0, false; }
    return jn[n].num, true;
}
fn jm_flag(n: i64) -> bool { return n >= 0 && jn[n].kind == J_BOOL && jn[n].flag; }
