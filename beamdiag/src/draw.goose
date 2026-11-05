import std;
import math;
import .num;
import .util;

let OP_ITEM = 0;
let OP_OPEN = 1;
let OP_CLOSE = 2;
let OP_PAGE = 3;

let SH_LINE = 0;
let SH_PATH = 1;
let SH_RECT = 2;
let SH_CIRCLE = 3;
let SH_TEXT = 4;

let ANC_START = 0;
let ANC_MIDDLE = 1;
let ANC_END = 2;

let COL_BG = 0;
let COL_SURFACE = 1;
let COL_FG = 2;
let COL_FG2 = 3;
let COL_MUTED = 4;
let COL_LINE = 5;
let COL_ACCENT = 6;
let COL_ACCENT_TEXT = 7;
let COL_WARM = 8;
let COL_GREEN = 9;
let COL_CHROME = 10;

struct DSeg { k: i64, a: f64, b: f64, c: f64, d: f64, e: f64, f: f64 }

struct DPaint { stroke: i64 = -1, sw: f64, fill: i64 = -1, has_op: bool, op: f64, round: bool }

struct DOp {
    kind: i64, shape: i64,
    a: f64, b: f64, c: f64, d: f64, e: f64,
    anchor: i64,
    s0: i64, s1: i64, cls0: i64, cls1: i64,
    p0: i64, p1: i64,
    paint: DPaint,
}

var draw_text_pool: u8[>..] = [];
var draw_segs: DSeg[>..] = [];

fn draw_reset() {
    draw_text_pool.clear();
    draw_segs.clear();
    assert(draw_text_pool.len == 0);
    assert(draw_segs.len == 0);
}

fn paint_none() -> DPaint {
    let p = DPaint { .. };
    assert(p.stroke == -1);
    assert(p.fill == -1);
    return p;
}
fn paint_stroke(col: i64, w: f64) -> DPaint {
    assert(col >= 0);
    assert(col < 11);
    return DPaint { stroke: col, sw: w, .. };
}
fn paint_fill(col: i64) -> DPaint {
    assert(col >= 0);
    assert(col < 11);
    return DPaint { fill: col, .. };
}
fn paint_both(f: i64, s: i64, w: f64) -> DPaint {
    assert(f >= 0 && f < 11);
    assert(s >= 0 && s < 11);
    return DPaint { stroke: s, sw: w, fill: f, .. };
}
fn paint_opacity(p: DPaint, o: f64) -> DPaint {
    var q = p;
    q.has_op = true;
    q.op = o;
    assert(q.has_op);
    assert(q.fill == p.fill);
    return q;
}
fn paint_round(p: DPaint) -> DPaint {
    var q = p;
    q.round = true;
    assert(q.round);
    assert(q.stroke == p.stroke);
    return q;
}

fn draw_pool(s: u8[:]) -> i64 {
    let at = draw_text_pool.len;
    draw_text_pool.append(s);
    assert(at >= 0);
    assert(draw_text_pool.len == at + s.len);
    return at;
}

fn draw_ref(s0: i64, s1: i64) -> u8[:] {
    assert(s0 >= 0 && s1 >= 0);
    assert(s0 + s1 <= draw_text_pool.len);
    return draw_text_pool[s0..s0 + s1];
}


fn draw_open(c: DOp[>..]&, attrs: u8[:]) {
    let at = draw_pool(attrs);
    c.push(DOp { kind: OP_OPEN, s0: at, s1: attrs.len, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].kind == OP_OPEN);
}
fn draw_close(c: DOp[>..]&) {
    c.push(DOp { kind: OP_CLOSE, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].kind == OP_CLOSE);
}
fn draw_page(c: DOp[>..]&) {
    c.push(DOp { kind: OP_PAGE, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].kind == OP_PAGE);
}

fn draw_finish(c: DOp[>..]&) {
    var depth = 0;
    for op in c {
        if op.kind == OP_OPEN { depth++; } else if op.kind == OP_CLOSE { depth--; }
    }
    while depth > 0 { draw_close(c); depth--; }
    assert(depth == 0);
    assert(c.len >= 0);
}

fn draw_line_cls(c: DOp[>..]&, x1: f64, y1: f64, x2: f64, y2: f64, paint: DPaint, cls: u8[:]) {
    let at = draw_pool(cls);
    c.push(DOp { kind: OP_ITEM, shape: SH_LINE, a: x1, b: y1, c: x2, d: y2, cls0: at, cls1: cls.len, paint: paint, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].shape == SH_LINE);
}
fn draw_line(c: DOp[>..]&, x1: f64, y1: f64, x2: f64, y2: f64, col: i64, w: f64) {
    assert(col >= 0);
    assert(col < 11);
    draw_line_cls(c, x1, y1, x2, y2, paint_stroke(col, w), "");
}

fn draw_seg_start() -> i64 {
    assert(draw_segs.len >= 0);
    assert(draw_text_pool.len >= 0);
    return draw_segs.len;
}
fn draw_seg_m(x: f64, y: f64) {
    draw_segs.push(DSeg { k: 0, a: x, b: y, .. });
    assert(draw_segs.len > 0);
    assert(draw_segs[draw_segs.len - 1].k == 0);
}
fn draw_seg_l(x: f64, y: f64) {
    draw_segs.push(DSeg { k: 1, a: x, b: y, .. });
    assert(draw_segs.len > 0);
    assert(draw_segs[draw_segs.len - 1].k == 1);
}
fn draw_seg_c(a: f64, b: f64, c: f64, d: f64, x: f64, y: f64) {
    draw_segs.push(DSeg { k: 2, a: a, b: b, c: c, d: d, e: x, f: y });
    assert(draw_segs.len > 0);
    assert(draw_segs[draw_segs.len - 1].k == 2);
}
fn draw_seg_z() {
    draw_segs.push(DSeg { k: 3, .. });
    assert(draw_segs.len > 0);
    assert(draw_segs[draw_segs.len - 1].k == 3);
}

fn draw_path_cls(c: DOp[>..]&, start: i64, n: i64, paint: DPaint, cls: u8[:]) {
    assert(start >= 0 && n >= 0);
    assert(start + n <= draw_segs.len);
    let at = draw_pool(cls);
    c.push(DOp { kind: OP_ITEM, shape: SH_PATH, p0: start, p1: n, cls0: at, cls1: cls.len, paint: paint, .. });
    assert(c[c.len - 1].shape == SH_PATH);
}
fn draw_path(c: DOp[>..]&, start: i64, paint: DPaint) {
    assert(start >= 0);
    assert(start <= draw_segs.len);
    draw_path_cls(c, start, draw_segs.len - start, paint, "");
}

fn draw_rect(c: DOp[>..]&, x: f64, y: f64, w: f64, h: f64, rx: f64, paint: DPaint, cls: u8[:]) {
    let at = draw_pool(cls);
    c.push(DOp { kind: OP_ITEM, shape: SH_RECT, a: x, b: y, c: w, d: h, e: rx, cls0: at, cls1: cls.len, paint: paint, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].shape == SH_RECT);
}
fn draw_circle(c: DOp[>..]&, x: f64, y: f64, r: f64, paint: DPaint, cls: u8[:]) {
    let at = draw_pool(cls);
    c.push(DOp { kind: OP_ITEM, shape: SH_CIRCLE, a: x, b: y, c: r, cls0: at, cls1: cls.len, paint: paint, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].shape == SH_CIRCLE);
}
fn draw_text(c: DOp[>..]&, x: f64, y: f64, s: u8[:], cls: u8[:], anchor: i64) {
    assert(anchor >= ANC_START && anchor <= ANC_END);
    let at = draw_pool(cls);
    let st = draw_pool(s);
    c.push(DOp { kind: OP_ITEM, shape: SH_TEXT, a: x, b: y, anchor: anchor, s0: st, s1: s.len, cls0: at, cls1: cls.len, .. });
    assert(c.len > 0);
    assert(c[c.len - 1].shape == SH_TEXT);
}

fn draw_arrow(x: f64, y: f64, deg: f64, size: f64, along: f64) {
    let r = deg * (3.141592653589793 / 180.0);
    let s = sin(r);
    let co = cos(r);
    let ax = x + (-size) * co - (size * along) * s;
    let ay = y + (-size) * s + (size * along) * co;
    let bx = x + size * co - (size * along) * s;
    let by = y + size * s + (size * along) * co;
    draw_seg_m(x, y);
    draw_seg_l(ax, ay);
    draw_seg_l(bx, by);
    draw_seg_z();
    assert(draw_segs.len >= 4);
    assert(draw_segs[draw_segs.len - 1].k == 3);
}


fn draw_copy(dst: DOp[>..]&, src: DOp[:], from: i64, to: i64) {
    assert(from >= 0 && from <= to);
    assert(to <= src.len);
    dst.append(src[from..to]);
}

fn draw_node_end(list: DOp[:], i: i64) -> i64 {
    assert(i >= 0);
    assert(i < list.len);
    if list[i].kind != OP_OPEN { return i + 1; }
    var depth = 0;
    var j = i;
    while j < list.len {
        if list[j].kind == OP_OPEN { depth++; } else if list[j].kind == OP_CLOSE { depth--; }
        j++;
        if depth == 0 { return j; }
    }
    return j;
}

fn draw_node(list: DOp[:], k: i64) -> i64, i64 {
    assert(k >= 0);
    assert(list.len >= 0);
    var i = 0;
    var n = 0;
    while i < list.len {
        if list[i].kind == OP_PAGE { i++; continue; }
        let e = draw_node_end(list, i);
        if n == k { return i, e; }
        n++;
        i = e;
    }
    return 0, 0;
}

fn draw_page_count(list: DOp[:]) -> i64 {
    var n = 1;
    for op in list { if op.kind == OP_PAGE { n++; } }
    assert(n >= 1);
    assert(n <= list.len + 1);
    return n;
}

fn draw_page_range(list: DOp[:], k: i64) -> i64, i64 {
    assert(k >= 0);
    var from = 0;
    var page = 0;
    var i = 0;
    while i < list.len {
        if list[i].kind == OP_PAGE {
            if page == k { return from, i; }
            page++;
            from = i + 1;
        }
        i++;
    }
    assert(from <= list.len);
    return from, list.len;
}


let TEXT_CLASS: const u8[:][9] = ["tick", "title", "val", "axlabel", "axlabel halo", "head", "body", "note", "cell"];
let TEXT_MONO: bool[9] = [true, false, false, true, true, false, false, false, false];
let TEXT_HEAD: bool[9] = [false, false, false, false, false, true, false, false, false];
let TEXT_SIZE: f64[9] = [11.0, 11.0, 11.5, 11.0, 11.0, 18.0, 12.0, 12.0, 11.5];
let TEXT_COLOR: i64[9] = [COL_MUTED, COL_MUTED, COL_FG, COL_FG, COL_FG, COL_FG, COL_FG, COL_MUTED, COL_FG];
let TEXT_SPACING: f64[9] = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let TEXT_HALO: bool[9] = [false, false, false, false, true, false, false, false, false];

fn text_style_index(cls: u8[:]) -> i64 {
    var i = 0;
    while i < 9 {
        if TEXT_CLASS[i] == cls { return i; }
        i++;
    }
    assert(i == 9);
    assert(TEXT_CLASS.len == 9);
    return 2;
}

fn draw_css() -> u8[>..] {
    var out: u8[>..] = [];
    var i = 0;
    while i < 9 {
        out.append(".bd-fig text");
        for part in split(TEXT_CLASS[i], ' ') {
            out.append(".");
            out.append(part);
        }
        out.append("{font:");
        if TEXT_HEAD[i] { out.append("600 "); }
        out.append(js(TEXT_SIZE[i]));
        out.append("px var(--");
        out.append(if TEXT_MONO[i] { "mono" } else { "sans" });
        out.append(");fill:var(--");
        out.append(PALETTE_NAMES[TEXT_COLOR[i]]);
        out.append(")");
        if TEXT_SPACING[i] > 0.0 {
            out.append(";letter-spacing:");
            out.append(js(TEXT_SPACING[i]));
            out.append("em");
        }
        if TEXT_HALO[i] { out.append(";paint-order:stroke;stroke:var(--bg);stroke-width:3px;stroke-linejoin:round"); }
        out.append("}");
        i++;
    }
    assert(i == 9);
    assert(out.len > 0);
    return out;
}


fn draw_n_to(out: u8[>..]&, x: f64) {
    if is_nan(x) { out.append("NaN"); return; }
    if is_inf(x) { out.append(if x > 0.0 { "inf" } else { "-inf" }); return; }
    var buf: u8[1200] = [0; 1200];
    let n = bd_fmt_f(x, 2, buf);
    var len = n;
    var dot = false;
    var i = 0;
    while i < n { if buf[i] == '.' { dot = true; } i++; }
    if dot {
        while len > 0 && buf[len - 1] == '0' { len--; }
        while len > 0 && buf[len - 1] == '.' { len--; }
    }
    if len == 2 && buf[0] == '-' && buf[1] == '0' { out.push('0'); return; }
    out.append(buf[..len]);
    assert(len <= n);
    assert(n < 1200);
}
fn draw_n(x: f64) -> u8[>..] {
    var out: u8[>..] = [];
    draw_n_to(out, x);
    assert(out.len > 0);
    assert(out.len < 1200);
    return out;
}

fn draw_d_to(out: u8[>..]&, p0: i64, n: i64) {
    assert(p0 >= 0 && n >= 0);
    assert(p0 + n <= draw_segs.len);
    var i = p0;
    while i < p0 + n {
        let s = draw_segs[i];
        if s.k == 0 {
            out.append("M"); draw_n_to(out, s.a); out.append(","); draw_n_to(out, s.b);
        } else if s.k == 1 {
            out.append("L"); draw_n_to(out, s.a); out.append(","); draw_n_to(out, s.b);
        } else if s.k == 2 {
            out.append("C"); draw_n_to(out, s.a); out.append(","); draw_n_to(out, s.b); out.append(" ");
            draw_n_to(out, s.c); out.append(","); draw_n_to(out, s.d); out.append(" ");
            draw_n_to(out, s.e); out.append(","); draw_n_to(out, s.f);
        } else {
            out.append("Z");
        }
        i++;
    }
}

fn draw_paint_to(out: u8[>..]&, p: DPaint) {
    assert(p.fill < 11);
    assert(p.stroke < 11);
    out.append(" fill=\"");
    if p.fill >= 0 { out.append("var(--"); out.append(PALETTE_NAMES[p.fill]); out.append(")"); } else { out.append("none"); }
    out.append("\"");
    if p.has_op { out.append(" fill-opacity=\""); out.append(js(p.op)); out.append("\""); }
    if p.stroke >= 0 {
        out.append(" stroke=\"var(--"); out.append(PALETTE_NAMES[p.stroke]); out.append(")\" stroke-width=\"");
        draw_n_to(out, p.sw); out.append("\"");
    }
    if p.round { out.append(" stroke-linejoin=\"round\""); }
}

fn draw_item_to(out: u8[>..]&, op: DOp) {
    assert(op.kind == OP_ITEM);
    assert(op.shape >= SH_LINE && op.shape <= SH_TEXT);
    out.push('<');
    if op.shape == SH_LINE { out.append("line"); }
    else if op.shape == SH_PATH { out.append("path"); }
    else if op.shape == SH_RECT { out.append("rect"); }
    else if op.shape == SH_CIRCLE { out.append("circle"); }
    else { out.append("text"); }
    if op.cls1 > 0 { out.append(" class=\""); out.append(draw_ref(op.cls0, op.cls1)); out.append("\""); }
    if op.shape == SH_LINE {
        out.append(" x1=\""); draw_n_to(out, op.a); out.append("\" y1=\""); draw_n_to(out, op.b);
        out.append("\" x2=\""); draw_n_to(out, op.c); out.append("\" y2=\""); draw_n_to(out, op.d); out.append("\"");
        draw_paint_to(out, op.paint);
        out.append("/>");
    } else if op.shape == SH_PATH {
        out.append(" d=\""); draw_d_to(out, op.p0, op.p1); out.append("\"");
        draw_paint_to(out, op.paint);
        out.append("/>");
    } else if op.shape == SH_RECT {
        out.append(" x=\""); draw_n_to(out, op.a); out.append("\" y=\""); draw_n_to(out, op.b);
        out.append("\" width=\""); draw_n_to(out, op.c); out.append("\" height=\""); draw_n_to(out, op.d); out.append("\"");
        if op.e > 0.0 { out.append(" rx=\""); draw_n_to(out, op.e); out.append("\""); }
        draw_paint_to(out, op.paint);
        out.append("/>");
    } else if op.shape == SH_CIRCLE {
        out.append(" cx=\""); draw_n_to(out, op.a); out.append("\" cy=\""); draw_n_to(out, op.b);
        out.append("\" r=\""); draw_n_to(out, op.c); out.append("\"");
        draw_paint_to(out, op.paint);
        out.append("/>");
    } else {
        out.append(" x=\""); draw_n_to(out, op.a); out.append("\" y=\""); draw_n_to(out, op.b); out.append("\"");
        if op.anchor == ANC_MIDDLE { out.append(" text-anchor=\"middle\""); }
        else if op.anchor == ANC_END { out.append(" text-anchor=\"end\""); }
        out.append(">");
        esc_to(out, draw_ref(op.s0, op.s1));
        out.append("</text>");
    }
}

fn draw_svg(list: DOp[:], w: f64, h: f64, attrs: u8[:], defs: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    out.append("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"bd-fig\" width=\"");
    draw_n_to(out, w); out.append("\" height=\""); draw_n_to(out, h);
    out.append("\" viewBox=\"0 0 "); draw_n_to(out, w); out.append(" "); draw_n_to(out, h);
    out.append("\""); out.append(attrs); out.append(">"); out.append(defs);
    for op in list {
        if op.kind == OP_ITEM { draw_item_to(out, op); }
        else if op.kind == OP_OPEN { out.append("<g"); out.append(draw_ref(op.s0, op.s1)); out.append(">"); }
        else if op.kind == OP_CLOSE { out.append("</g>"); }
    }
    out.append("</svg>");
    assert(out.len > attrs.len + defs.len);
    assert(list.len >= 0);
    return out;
}
