// A display list as a vector PDF in the print palette, one page per run of ops between page breaks. Text
// is set in the embedded Fira subsets (OpenType CFF), addressed by glyph ID with a ToUnicode map, as the
// site's PDFs are; a character missing from a font falls back to Fira Sans, then Fira Math. Nothing reads
// a clock, so equal figures give equal bytes.
//
// The three fonts (sans, mono, maths) are OpenType bytes. A character's glyph is read from the font's cmap
// on demand and remembered in pdf_cache.

import std;
import math;
import .num;
import .util;
import .draw;

// An OpenType font in pdf_data: where it sits, its tables, metrics (bbox, ascent, descent, units per em).
struct PFont { off: i64, len: i64, cm: i64, ntab: i64, hm: i64, nh: i64, m0: i64, m1: i64, m2: i64, m3: i64, m4: i64, m5: i64, em: f64 }

var pdf_data: u8[>..] = [];
var pdf_font: PFont[3];
// Per font and 16-bit character: 0 not looked up, 1 not in the font, else the glyph ID + 2.
var pdf_cache: i32[196608];
// Per font and glyph ID: the character set with it (0 when the glyph is unused).
var pdf_used: i32[196608];

// The big-endian number of n bytes at o in font f; 0 when they are not all in the font.
fn pdf_be(f: i64, o: i64, n: i64) -> i64 {
    if o < 0 || o + n > pdf_font[f].len { return 0; }
    var a = 0;
    var k = 0;
    let base = pdf_font[f].off + o;
    while k < n {
        a = (a << 8) | (pdf_data[base + k] as i64);
        k++;
    }
    return a;
}

// The offset of a table, or 0.
fn pdf_table(f: i64, tag: u8[:]) -> i64 {
    var i = 0;
    let n = pdf_be(f, 4, 2);
    while i < n {
        let o = 12 + 16 * i;
        if o + 4 <= pdf_font[f].len && pdf_data[pdf_font[f].off + o..pdf_font[f].off + o + 4] == tag { return pdf_be(f, o + 8, 4); }
        i++;
    }
    return 0;
}

fn pdf_i16(f: i64, o: i64) -> i64 {
    let v = pdf_be(f, o, 2);
    return if v >= 32768 { v - 65536 } else { v };
}

fn pdf_font_init(f: i64, off: i64, len: i64) {
    pdf_font[f].off = off;
    pdf_font[f].len = len;
    let cm = pdf_table(f, "cmap");
    let hh = pdf_table(f, "hhea");
    let hd = pdf_table(f, "head");
    pdf_font[f].cm = cm;
    pdf_font[f].ntab = pdf_be(f, cm + 2, 2);
    pdf_font[f].hm = pdf_table(f, "hmtx");
    pdf_font[f].m0 = pdf_i16(f, hd + 36);
    pdf_font[f].m1 = pdf_i16(f, hd + 38);
    pdf_font[f].m2 = pdf_i16(f, hd + 40);
    pdf_font[f].m3 = pdf_i16(f, hd + 42);
    pdf_font[f].m4 = pdf_i16(f, hh + 4);
    pdf_font[f].m5 = pdf_i16(f, hh + 6);
    let nh = pdf_be(f, hh + 34, 2);
    pdf_font[f].nh = if nh > 1 { nh } else { 1 };
    let em = pdf_be(f, hd + 18, 2);
    pdf_font[f].em = (if em > 1 { em } else { 1 }) as f64;
}

// The advance width of glyph g.
fn pdf_adv(f: i64, g: i64) -> i64 {
    let last = pdf_font[f].nh - 1;
    return pdf_be(f, pdf_font[f].hm + 4 * (if g < last { g } else { last }), 2);
}

// The glyph for character c from the cmap: whether the font maps it, and the glyph ID. Later format 12
// groups replace earlier ones; a format 4 segment fills only a character not yet mapped.
fn pdf_lookup_cmap(f: i64, c: i64) -> bool, i64 {
    var present = false;
    var gid = 0;
    let cm = pdf_font[f].cm;
    var t = 0;
    while t < pdf_font[f].ntab {
        let o = cm + pdf_be(f, cm + 8 + 8 * t, 4);
        let fmt = pdf_be(f, o, 2);
        if fmt == 12 {
            let ng = pdf_be(f, o + 12, 4);
            var g = 0;
            while g < ng {
                let q = o + 16 + 12 * g;
                let s = pdf_be(f, q, 4);
                if c >= s && c <= pdf_be(f, q + 4, 4) {
                    gid = (pdf_be(f, q + 8, 4) + c - s) & 0xffff;
                    present = true;
                }
                g++;
            }
        } else if fmt == 4 {
            let n = pdf_be(f, o + 6, 2) / 2;
            var s = 0;
            while s < n {
                let start = pdf_be(f, o + 14 + 2 * s + 1 * 2 * n + 2, 2);
                var end = pdf_be(f, o + 14 + 2 * s, 2);
                if end > 0xfffe { end = 0xfffe; }
                if c >= start && c <= end && !present {
                    let delta = pdf_be(f, o + 14 + 2 * s + 2 * 2 * n + 2, 2);
                    let ro = pdf_be(f, o + 14 + 2 * s + 3 * 2 * n + 2, 2);
                    let g = if ro == 0 { c } else { pdf_be(f, o + 16 + 6 * n + 2 * s + ro + 2 * (c - start), 2) };
                    gid = if ro != 0 && g == 0 { 0 } else { (g + delta) & 0xffff };
                    present = true;
                }
                s++;
            }
        }
        t++;
    }
    return present, gid;
}

fn pdf_lookup(f: i64, c: i64) -> bool, i64 {
    if c < 65536 {
        let k = f * 65536 + c;
        let v = pdf_cache[k] as i64;
        if v == 1 { return false, 0; }
        if v >= 2 { return true, v - 2; }
        let present, gid = pdf_lookup_cmap(f, c);
        pdf_cache[k] = if present { (gid + 2) as i32 } else { 1 };
        return present, gid;
    }
    return pdf_lookup_cmap(f, c);
}

// A run of text: pieces in the first font with each character (the style's, then sans, then maths).
struct PPiece { font: i64, script: i64, g0: i64, g1: i64, width: f64 }

var pdf_glyphs: u8[>..] = [];

// Size and rise (in ems) of level text, superscripts and subscripts.
let PDF_SCRIPT_SIZE: f64[3] = [1.0, 0.7, 0.7];
let PDF_SCRIPT_RISE: f64[3] = [0.0, 0.4, -0.15];
let PDF_SUP_CPS: i64[14] = [0x2070, 0xb9, 0xb2, 0xb3, 0x2074, 0x2075, 0x2076, 0x2077, 0x2078, 0x2079, 0x207b, 0x207a, 0x2071, 0x207f];
let PDF_SUB_CPS: i64[14] = [0x2080, 0x2081, 0x2082, 0x2083, 0x2084, 0x2085, 0x2086, 0x2087, 0x2088, 0x2089, 0x208b, 0x208a, 0x1d62, 0x2099];
let PDF_BASE_CPS: i64[14] = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0x2212, 43, 105, 110];

// The subsets lack most script digits, so these are base digits, small and moved: the character, its script.
fn pdf_script(c: i64) -> i64, i64 {
    var k = 0;
    while k < 14 {
        if PDF_SUP_CPS[k] == c { return PDF_BASE_CPS[k], 1; }
        k++;
    }
    k = 0;
    while k < 14 {
        if PDF_SUB_CPS[k] == c { return PDF_BASE_CPS[k], 2; }
        k++;
    }
    if c == 0x2016 { return 124, 0; }
    return c, 0;
}

fn pdf_hex4(out: u8[>..]&, v: i64) {
    let d = "0123456789ABCDEF";
    out.push(d[(v >> 12) & 15]);
    out.push(d[(v >> 8) & 15]);
    out.push(d[(v >> 4) & 15]);
    out.push(d[v & 15]);
}

// The pieces of s, and the whole width. The glyph IDs of the pieces are in pdf_glyphs.
fn pdf_run(mono: bool, size: f64, spacing: f64, s: u8[:], v: PPiece[>..]&) -> f64 {
    let first = if mono { 1 } else { 0 };
    var cps: i64[>..] = [];
    each_utf8(s) { cps.push(it); };
    for c0 in cps {
        let c, script = pdf_script(c0);
        var i = first;
        let p0, g0 = pdf_lookup(first, c);
        if !p0 {
            let p1, g1 = pdf_lookup(0, c);
            if p1 { i = 0; } else {
                let p2, g2 = pdf_lookup(2, c);
                if p2 { i = 2; }
            }
        }
        let present, g = pdf_lookup(i, c);
        pdf_used[i * 65536 + g] = c as i32;
        let w = (pdf_adv(i, g) as f64) * size * PDF_SCRIPT_SIZE[script] / pdf_font[i].em + spacing * size;
        if v.len > 0 && v[v.len - 1].font == i && v[v.len - 1].script == script {
            pdf_hex4(pdf_glyphs, g);
            v[v.len - 1].g1 += 4;
            v[v.len - 1].width += w;
        } else {
            let at = pdf_glyphs.len;
            pdf_hex4(pdf_glyphs, g);
            v.push(PPiece { font: i, script: script, g0: at, g1: 4, width: w });
        }
    }
    var total = 0.0;
    for p in v { total += p.width; }
    return total;
}

// ---------- content streams ----------

var pdf_c: u8[>..] = [];

fn pdf_f(x: f64) { draw_n_to(pdf_c, x); }
fn pdf_pair(x: f64, y: f64, op: u8[:]) { pdf_f(x); pdf_c.push(' '); pdf_f(y); pdf_c.push(' '); pdf_c.append(op); }

fn pdf_rgb(tok: i64) {
    let hex = print_color(tok);
    var v = 0;
    var i = 1;
    while i < 7 {
        let ch = hex[i];
        v = v * 16 + (if ch >= 'a' { ch - 'a' + 10 } else { ch - '0' }) as i64;
        i++;
    }
    pdf_f(((v >> 16) as f64) / 255.0);
    pdf_c.push(' ');
    pdf_f((((v >> 8) & 255) as f64) / 255.0);
    pdf_c.push(' ');
    pdf_f(((v & 255) as f64) / 255.0);
}

fn pdf_min(a: f64, b: f64) -> f64 {
    if is_nan(a) { return b; }
    if is_nan(b) { return a; }
    return if a < b { a } else { b };
}

fn pdf_m(x: f64, y: f64) { pdf_pair(x, y, "m "); }
fn pdf_l(x: f64, y: f64) { pdf_pair(x, y, "l "); }
fn pdf_cv(a: f64, b: f64, c: f64, d: f64, x: f64, y: f64) {
    pdf_f(a); pdf_c.push(' '); pdf_f(b); pdf_c.push(' '); pdf_f(c); pdf_c.push(' '); pdf_f(d); pdf_c.push(' ');
    pdf_f(x); pdf_c.push(' '); pdf_f(y); pdf_c.append(" c ");
}
fn pdf_h() { pdf_c.append("h "); }

// Words of a class string.
fn pdf_has_word(cls: u8[:], w: u8[:]) -> bool {
    for part in split(cls, ' ') { if part == w { return true; } }
    return false;
}

// Classes drawn only on the page: grips, focus rings, the plot frame and the cursor.
let PDF_PAGE_ONLY: const u8[:][4] = ["ring", "hit", "box", "cursor"];

fn pdf_page_only_class(cls: u8[:]) -> bool {
    var i = 0;
    while i < 4 {
        if pdf_has_word(cls, PDF_PAGE_ONLY[i]) { return true; }
        i++;
    }
    return false;
}

fn pdf_page_only_group(attrs: u8[:]) -> bool {
    var i = 0;
    while i < 4 {
        if find(attrs, str("class=\"", PDF_PAGE_ONLY[i], "\"")) >= 0 { return true; }
        i++;
    }
    return false;
}

// Text at its baseline; the page's CTM flips y, so each run's matrix flips it back.
fn pdf_text(op: DOp) {
    let si = text_style_index(draw_ref(op.cls0, op.cls1));
    let size = TEXT_SIZE[si];
    let spacing = TEXT_SPACING[si];
    var runs: PPiece[>..] = [];
    pdf_glyphs.clear();
    let w = pdf_run(TEXT_MONO[si], size, spacing, draw_ref(op.s0, op.s1), runs);
    let start = if op.anchor == ANC_START { op.a } else if op.anchor == ANC_MIDDLE { op.a - w / 2.0 } else { op.a - w };
    let tc = spacing * size;
    pdf_c.append("q ");
    var pass = 0;
    while pass < 2 {
        if pass == 0 && !TEXT_HALO[si] { pass++; continue; }
        if pass == 0 {
            pdf_rgb(COL_BG);
            pdf_c.append(" RG 3 w 1 j ");
        } else {
            pdf_rgb(TEXT_COLOR[si]);
            pdf_c.append(" rg ");
        }
        var at = start;
        pdf_c.append("BT ");
        pdf_c.append(if pass == 0 { "1 Tr " } else { "0 Tr " });
        for p in runs {
            pdf_c.append("/F");
            format(pdf_c, p.font);
            pdf_c.push(' ');
            pdf_f(size * PDF_SCRIPT_SIZE[p.script]);
            pdf_c.append(" Tf ");
            pdf_f(tc);
            pdf_c.append(" Tc 1 0 0 -1 ");
            pdf_f(at);
            pdf_c.push(' ');
            pdf_f(op.b - PDF_SCRIPT_RISE[p.script] * size);
            pdf_c.append(" Tm <");
            pdf_c.append(pdf_glyphs[p.g0..p.g0 + p.g1]);
            pdf_c.append("> Tj ");
            at += p.width;
        }
        pdf_c.append("ET\n");
        pass++;
    }
    pdf_c.append("Q\n");
}

fn pdf_path(p0: i64, n: i64) {
    var i = p0;
    while i < p0 + n {
        let s = draw_segs[i];
        if s.k == 0 { pdf_m(s.a, s.b); }
        else if s.k == 1 { pdf_l(s.a, s.b); }
        else if s.k == 2 { pdf_cv(s.a, s.b, s.c, s.d, s.e, s.f); }
        else { pdf_h(); }
        i++;
    }
}

fn pdf_item(op: DOp) {
    if pdf_page_only_class(draw_ref(op.cls0, op.cls1)) { return; }
    if op.shape == SH_TEXT { pdf_text(op); return; }
    let p = op.paint;
    if p.fill < 0 && p.stroke < 0 { return; }
    pdf_c.append("q ");
    if p.has_op {
        pdf_c.append("/A");
        format(pdf_c, round(p.op * 100.0) as i64);
        pdf_c.append(" gs ");
    }
    if p.fill >= 0 { pdf_rgb(p.fill); pdf_c.append(" rg "); }
    if p.stroke >= 0 { pdf_rgb(p.stroke); pdf_c.append(" RG "); pdf_f(p.sw); pdf_c.append(" w "); }
    if p.round { pdf_c.append("1 j "); }
    if op.shape == SH_LINE {
        pdf_m(op.a, op.b);
        pdf_l(op.c, op.d);
    } else if op.shape == SH_PATH {
        pdf_path(op.p0, op.p1);
    } else if op.shape == SH_RECT {
        let x = op.a;
        let y = op.b;
        let w = op.c;
        let h = op.d;
        if op.e > 0.0 {
            let r = pdf_min(pdf_min(op.e, w / 2.0), h / 2.0);
            let k = 0.5522847498 * pdf_min(pdf_min(op.e, w / 2.0), h / 2.0);
            let x1 = x + w;
            let y1 = y + h;
            pdf_m(x + r, y);
            pdf_l(x1 - r, y);
            pdf_cv(x1 - r + k, y, x1, y + r - k, x1, y + r);
            pdf_l(x1, y1 - r);
            pdf_cv(x1, y1 - r + k, x1 - r + k, y1, x1 - r, y1);
            pdf_l(x + r, y1);
            pdf_cv(x + r - k, y1, x, y1 - r + k, x, y1 - r);
            pdf_l(x, y + r);
            pdf_cv(x, y + r - k, x + r - k, y, x + r, y);
            pdf_h();
        } else {
            pdf_f(x); pdf_c.push(' '); pdf_f(y); pdf_c.push(' '); pdf_f(w); pdf_c.push(' '); pdf_f(h); pdf_c.append(" re ");
        }
    } else {
        let x = op.a;
        let y = op.b;
        let r = op.c;
        let k = 0.5522847498 * r;
        pdf_m(x + r, y);
        pdf_cv(x + r, y + k, x + k, y + r, x, y + r);
        pdf_cv(x - k, y + r, x - r, y + k, x - r, y);
        pdf_cv(x - r, y - k, x - k, y - r, x, y - r);
        pdf_cv(x + k, y - r, x + r, y - k, x + r, y);
        pdf_h();
    }
    pdf_c.append(if p.fill >= 0 && p.stroke >= 0 { "B Q\n" } else if p.fill >= 0 { "f Q\n" } else { "S Q\n" });
}

// A word that reads as a number, and the number.
fn pdf_number(w: u8[:]) -> bool, f64 {
    var digit = false;
    for c in w {
        if c >= '0' && c <= '9' { digit = true; }
        else if c != '.' && c != '-' && c != '+' && c != 'e' && c != 'E' { return false, 0.0; }
    }
    if !digit { return false, 0.0; }
    let v, ok = parse_flt(w);
    if !ok { return false, 0.0; }
    return true, read_double(w);
}

// The ops from..to of a list (one page) as content. A group of a page-only class is skipped with
// everything in it; a transform group is a saved graphics state with that translation.
fn pdf_nodes(list: DOp[:], from: i64, to: i64) {
    var skip = 0;
    var marks: i64[>..<] = [];
    var i = from;
    while i < to {
        let op = list[i];
        i++;
        if skip > 0 {
            if op.kind == OP_OPEN { skip++; } else if op.kind == OP_CLOSE { skip--; }
            continue;
        }
        if op.kind == OP_ITEM { pdf_item(op); continue; }
        if op.kind == OP_OPEN {
            let a = draw_ref(op.s0, op.s1);
            let pre = " transform=\"translate(";
            if pdf_page_only_group(a) {
                skip = 1;
            } else if starts_with(a, pre) && ends_with(a, ")\"") && a.len >= pre.len + 2 {
                let v = a[pre.len..a.len - 2];
                var n = 0;
                var xy: f64[2] = [0.0; 2];
                for word in words(v) {
                    let ok, x = pdf_number(word);
                    if ok {
                        if n < 2 { xy[n] = x; }
                        n++;
                    }
                }
                if n == 2 {
                    pdf_c.append("q 1 0 0 1 ");
                    pdf_f(xy[0]);
                    pdf_c.push(' ');
                    pdf_f(xy[1]);
                    pdf_c.append(" cm\n");
                    marks.push(1);
                } else {
                    skip = 1;
                }
            } else {
                marks.push(0);
            }
        } else if op.kind == OP_CLOSE {
            if marks.len > 0 {
                let m = marks.pop();
                if m == 1 { pdf_c.append("Q\n"); }
            }
        }
    }
}

// ---------- objects ----------

var pdf_ob: u8[>..] = [];
var pdf_ob_s: i64[>..] = [];
var pdf_ob_n: i64[>..] = [];

// Adds an object whose body is in pdf_ob from at; its number.
fn pdf_add_from(at: i64) -> i64 {
    pdf_ob_s.push(at);
    pdf_ob_n.push(pdf_ob.len - at);
    return pdf_ob_s.len;
}

// The body "<<dict/Length n>>stream\ndata\nendstream" added as an object.
fn pdf_add_stream(dict: u8[:], data: u8[:]) -> i64 {
    let at = pdf_ob.len;
    format(pdf_ob, "<<", dict, "/Length ", data.len, ">>stream\n");
    pdf_ob.append(data);
    pdf_ob.append("\nendstream");
    return pdf_add_from(at);
}

fn pdf_utf16(out: u8[>..]&, s: u8[:]) {
    each_utf8(s) {
        if it < 0x10000 {
            pdf_hex4(out, it);
        } else {
            let v = it - 0x10000;
            pdf_hex4(out, 0xd800 + (v >> 10));
            pdf_hex4(out, 0xdc00 + (v & 0x3ff));
        }
    };
}

fn pdf_utf16_cp(out: u8[>..]&, c: i64) {
    if c < 0x10000 {
        pdf_hex4(out, c);
    } else {
        let v = c - 0x10000;
        pdf_hex4(out, 0xd800 + (v >> 10));
        pdf_hex4(out, 0xdc00 + (v & 0x3ff));
    }
}

var pdf_pool: u8[>..] = [];

// The figure (CSS px, 96 to the inch) as PDF pages of the same size in points. The list holds the pages
// separated by page breaks (draw_page); fonts are the OpenType bytes of sans, mono and maths.
fn pdf_pages(list: DOp[:], w: f64, h: f64, title: u8[:], font0: u8[:], font1: u8[:], font2: u8[:]) -> u8[>..] {
    pdf_data.clear();
    let o0 = pdf_data.len;
    pdf_data.append(font0);
    let o1 = pdf_data.len;
    pdf_data.append(font1);
    let o2 = pdf_data.len;
    pdf_data.append(font2);
    pdf_font_init(0, o0, font0.len);
    pdf_font_init(1, o1, font1.len);
    pdf_font_init(2, o2, font2.len);
    var z = 0;
    while z < 196608 { pdf_cache[z] = 0; pdf_used[z] = 0; z++; }

    let pw = w * 0.75;
    let ph = h * 0.75;
    pdf_pool.clear();
    var cstart: i64[>..] = [];
    var clen: i64[>..] = [];
    let pages = draw_page_count(list);
    var k = 0;
    while k < pages {
        let from, to = draw_page_range(list, k);
        pdf_c.clear();
        pdf_c.append("1 1 1 rg 0 0 ");
        pdf_f(pw);
        pdf_c.push(' ');
        pdf_f(ph);
        pdf_c.append(" re f\n0.75 0 0 -0.75 0 ");
        pdf_f(ph);
        pdf_c.append(" cm\n");
        pdf_nodes(list, from, to);
        cstart.push(pdf_pool.len);
        clen.push(pdf_c.len);
        pdf_pool.append(pdf_c);
        k++;
    }
    // The opacities used anywhere, in order of first use.
    var alphas: i64[>..] = [];
    for op in list {
        if op.kind == OP_ITEM && op.paint.has_op {
            let a = round(op.paint.op * 100.0) as i64;
            var seen = false;
            for b in alphas { if b == a { seen = true; } }
            if !seen { alphas.push(a); }
        }
    }

    pdf_ob.clear();
    pdf_ob_s.clear();
    pdf_ob_n.clear();
    var i = 0;
    while i < 4 { pdf_ob_s.push(0); pdf_ob_n.push(0); i++; }
    var fonts: u8[>..] = [];
    i = 0;
    while i < 3 {
        var any = false;
        var g = 0;
        while g < 65536 { if pdf_used[i * 65536 + g] != 0 { any = true; } g++; }
        if !any { i++; continue; }
        let off = pdf_font[i].off;
        let file = pdf_add_stream("/Subtype/OpenType", pdf_data[off..off + pdf_font[i].len]);
        let at = pdf_ob.len;
        format(pdf_ob, "<</Type/FontDescriptor/FontName/F", i, "/Flags 4/FontBBox[", pdf_font[i].m0, " ", pdf_font[i].m1, " ", pdf_font[i].m2, " ", pdf_font[i].m3,
            "]/ItalicAngle 0/Ascent ", pdf_font[i].m4, "/Descent ", pdf_font[i].m5, "/CapHeight ", pdf_font[i].m4, "/StemV 80/FontFile3 ", file, " 0 R>>");
        let d = pdf_add_from(at);
        let at2 = pdf_ob.len;
        format(pdf_ob, "<</Type/Font/Subtype/CIDFontType0/BaseFont/F", i, "/CIDSystemInfo<</Registry(Adobe)/Ordering(Identity)/Supplement 0>>/FontDescriptor ", d, " 0 R/W[0[");
        let scale = 1000.0 / pdf_font[i].em;
        var gi = 0;
        while gi < pdf_font[i].nh {
            if gi > 0 { pdf_ob.push(' '); }
            draw_n_to(pdf_ob, (pdf_adv(i, gi) as f64) * scale);
            gi++;
        }
        pdf_ob.append("]]>>");
        let cid = pdf_add_from(at2);
        // ToUnicode: each glyph used back to its character, in blocks of at most 100.
        var cmap: u8[>..] = [];
        var inblock = 0;
        var blk: u8[>..] = [];
        g = 1;
        while g < 65536 {
            let c = pdf_used[i * 65536 + g] as i64;
            if c != 0 {
                if inblock > 0 { blk.push('\n'); }
                blk.push('<');
                pdf_hex4(blk, g);
                blk.append("><");
                pdf_utf16_cp(blk, c);
                blk.push('>');
                inblock++;
                if inblock == 100 {
                    format(cmap, inblock, " beginbfchar\n", blk, "\nendbfchar\n");
                    blk.clear();
                    inblock = 0;
                }
            }
            g++;
        }
        if inblock > 0 { format(cmap, inblock, " beginbfchar\n", blk, "\nendbfchar\n"); }
        var cm: u8[>..] = [];
        format(cm, "/CIDInit/ProcSet findresource begin 12 dict begin begincmap/CIDSystemInfo<</Registry(Adobe)/Ordering(UCS)/Supplement 0>>def/CMapName/Adobe-Identity-UCS def/CMapType 2 def\n1 begincodespacerange <0000><FFFF> endcodespacerange\n",
            cmap, "endcmap CMapName currentdict/CMap defineresource pop end end");
        let tu = pdf_add_stream("", cm);
        let at3 = pdf_ob.len;
        format(pdf_ob, "<</Type/Font/Subtype/Type0/BaseFont/F", i, "/Encoding/Identity-H/DescendantFonts[", cid, " 0 R]/ToUnicode ", tu, " 0 R>>");
        let fo = pdf_add_from(at3);
        format(fonts, "/F", i, " ", fo, " 0 R");
        i++;
    }
    var gs: u8[>..] = [];
    for a in alphas {
        format(gs, "/A", a, "<</ca ");
        draw_n_to(gs, (a as f64) / 100.0);
        gs.append(">>");
    }
    var kids: u8[>..] = [];
    k = 0;
    while k < pages {
        let content = pdf_add_stream("", pdf_pool[cstart[k]..cstart[k] + clen[k]]);
        let at = pdf_ob.len;
        pdf_ob.append("<</Type/Page/Parent 2 0 R/MediaBox[0 0 ");
        draw_n_to(pdf_ob, pw);
        pdf_ob.push(' ');
        draw_n_to(pdf_ob, ph);
        format(pdf_ob, "]/Resources 4 0 R/Contents ", content, " 0 R>>");
        let page = pdf_add_from(at);
        if k > 0 { kids.push(' '); }
        format(kids, page, " 0 R");
        k++;
    }
    // The four fixed objects.
    var at = pdf_ob.len;
    pdf_ob.append("<</Type/Catalog/Pages 2 0 R/Lang(en)>>");
    pdf_ob_s[0] = at;
    pdf_ob_n[0] = pdf_ob.len - at;
    at = pdf_ob.len;
    format(pdf_ob, "<</Type/Pages/Kids[", kids, "]/Count ", pages, ">>");
    pdf_ob_s[1] = at;
    pdf_ob_n[1] = pdf_ob.len - at;
    at = pdf_ob.len;
    pdf_ob.append("<</Title<FEFF");
    pdf_utf16(pdf_ob, title);
    pdf_ob.append(">/Producer(beamdiag)>>");
    pdf_ob_s[2] = at;
    pdf_ob_n[2] = pdf_ob.len - at;
    at = pdf_ob.len;
    format(pdf_ob, "<</Font<<", fonts, ">>/ExtGState<<", gs, ">>>>");
    pdf_ob_s[3] = at;
    pdf_ob_n[3] = pdf_ob.len - at;

    var o: u8[>..] = [];
    o.append("%PDF-1.7\n%");
    o.push(0xe2);
    o.push(0xe3);
    o.push(0xcf);
    o.push(0xd3);
    o.push('\n');
    var xref: u8[>..] = [];
    i = 0;
    while i < pdf_ob_s.len {
        format_int(xref, o.len, 10, 10, '0');
        xref.append(" 00000 n \n");
        format(o, i + 1, " 0 obj\n");
        o.append(pdf_ob[pdf_ob_s[i]..pdf_ob_s[i] + pdf_ob_n[i]]);
        o.append("\nendobj\n");
        i++;
    }
    let digest = sha256(o);
    let n = pdf_ob_s.len + 1;
    let start = o.len;
    format(o, "xref\n0 ", n, "\n0000000000 65535 f \n", xref, "trailer\n<</Size ", n, "/Root 1 0 R/Info 3 0 R/ID[<", digest[..32], "><", digest[..32], ">]>>\nstartxref\n", start, "\n%%EOF\n");
    return o;
}
