// The beam and its shear force, bending moment and deflection diagrams, as a display list. The page's
// figure is interactive: supports and loads are handles, and the diagrams are a slider with a cursor.
// A saved figure is the same drawing without them.
//
// figure() appends to a list (draw.goose) the groups: the beam, the diagrams (a slider on the page) and,
// on the page, the cursor line. The caller supplies readout_text(c): the aria text of the readout at
// section c, "x 1.5 m, V 3 kN, ..." (the readout's name and value joined by a space, the pairs by ", ").

import std;
import math;
import .num;
import .engine;
import .fmt;
import .state;
import .util;
import .draw;

// A drawn figure: its size, margins and the length it spans.
struct Fig { w: f64, h: f64, ml: f64, mr: f64, l: f64 }

// The figure's x scale (the page's own is lay_* in state.goose; a saved figure must not touch it).
struct FigLay { ml: f64, mr: f64, w: f64, l: f64 }
fn fig_x(lay: FigLay, x: f64) -> f64 { return lay.ml + (x / lay.l) * (lay.w - lay.ml - lay.mr); }

// A diagram of one quantity, with its place in the figure and its axis. key is 0 for V, 1 for M, 2 for v.
// Its title is fig_text[t0..t0 + t1]; its ticks and their labels are the entries k0.. of fig_ticks.
struct FigPanel { key: i64, t0: i64, t1: i64, h: f64, color: i64, q: i64, top: f64, bottom: f64, lo: f64, hi: f64, k0: i64, kn: i64 }

var fig_panels: FigPanel[3];
var fig_text: u8[>..] = [];
var fig_ticks: f64[>..] = [];
var fig_ls: i64[>..] = [];
var fig_ln: i64[>..] = [];

// f64::max and f64::min of Rust: a NaN argument is ignored.
fn fig_fmax(a: f64, b: f64) -> f64 {
    if is_nan(a) { return b; }
    if is_nan(b) { return a; }
    return if a > b { a } else { b };
}
fn fig_fmin(a: f64, b: f64) -> f64 {
    if is_nan(a) { return b; }
    if is_nan(b) { return a; }
    return if a < b { a } else { b };
}

// The number as a field holds it: ten significant figures, "" for NaN or infinity.
fn fig_tidy(x: f64) -> u8[>..] {
    if finite(x) { return js(prec(x, 10)); }
    return "";
}

// JavaScript's Math.round: halves round up.
fn fig_js_round(x: f64) -> f64 {
    let f = floor(x);
    return if x - f >= 0.5 { f + 1.0 } else { f };
}

// The number of characters (Unicode scalars) of s.
fn fig_chars(s: u8[:]) -> i64 {
    var n = 0;
    for c in s { if (c & 0xc0) != 0x80 { n++; } }
    return n;
}

fn fig_nice_ticks(lo0: f64, hi0: f64, count: f64, out: f64[>..]&) {
    var lo = lo0;
    var hi = hi0;
    if lo == hi { lo -= 1.0; hi += 1.0; }
    let raw = hi / count - lo / count;
    let p = pw(10.0, floor(log10(raw)) as i64);
    // 10·p is at least raw, so a step is always found.
    var step = 0.0 / 0.0;
    let mults: f64[5] = [1.0, 2.0, 2.5, 5.0, 10.0];
    var m = 0;
    while m < 5 {
        let s = mults[m] * p;
        if s >= raw { step = s; break; }
        m++;
    }
    var n = 0;
    var t = ceil(lo / step) * step;
    while t <= hi + step * 1e-9 && n < 100 {
        out.push(if abs(t) < step * 1e-9 { 0.0 } else { t });
        n++;
        t += step;
    }
}

// Tick labels on one axis share a format: plain below 10⁵, otherwise a power of ten.
fn fig_tick_labels(ticks: f64[:], ls: i64[>..]&, ln: i64[>..]&) {
    var big = -1.0 / 0.0;
    for t in ticks { big = fig_fmax(big, abs(t)); }
    for t in ticks {
        let at = fig_text.len;
        if t == 0.0 { fig_text.append("0"); } else if big >= 1e5 { fig_text.append(pow10(t, 3)); } else { fig_text.append(sig(t, 3)); }
        ls.push(at);
        ln.push(fig_text.len - at);
    }
}

// Width of an 11px monospace axis label, rounded up.
fn fig_label_width(s: u8[:]) -> f64 { return 7.0 * (fig_chars(s) as f64); }
// Width of a panel title: an axis label with 0.06em letter spacing, rounded up.
fn fig_title_width(s: u8[:]) -> f64 { return 7.3 * (fig_chars(s) as f64); }

// A filled arrowhead with its tip at (x, y), pointing down (dir 1) or up (−1), as the segments just added.
fn fig_head(x: f64, tip: f64, dir: f64, size: f64) {
    let y = tip - dir * size * 1.6;
    draw_seg_m(x, tip);
    draw_seg_l(x - size, y);
    draw_seg_l(x + size, y);
    draw_seg_z();
}

fn fig_anchor_at(x: f64, l: f64) -> i64 {
    if x <= 0.08 * l { return ANC_START; }
    if x >= 0.92 * l { return ANC_END; }
    return ANC_MIDDLE;
}
fn fig_shift(a: i64, by: f64) -> f64 {
    if a == ANC_START { return by; }
    if a == ANC_END { return -by; }
    return 0.0;
}

fn fig_panel_get(p: FigPanel, s: Sample) -> f64 {
    return show(if p.key == 0 { s.shear } else if p.key == 1 { s.m } else { s.v }, p.q);
}
fn fig_panel_y(p: FigPanel, v: f64) -> f64 {
    return p.bottom - (v / 2.0 - p.lo / 2.0) / (p.hi / 2.0 - p.lo / 2.0) * (p.bottom - p.top);
}

// A filled arrowhead as a path.
fn fig_arrow_path(c: DOp[>..]&, x: f64, y: f64, deg: f64, size: f64, along: f64, col: i64) {
    let s = draw_seg_start();
    draw_arrow(x, y, deg, size, along);
    draw_path(c, s, paint_fill(col));
}
fn fig_head_path(c: DOp[>..]&, x: f64, tip: f64, dir: f64, size: f64, col: i64) {
    let s = draw_seg_start();
    fig_head(x, tip, dir, size);
    draw_path(c, s, paint_fill(col));
}

// The beam and its diagrams at width w, appended to the list c. On the page (interactive) supports and
// loads are handles and the diagrams a slider with a cursor.
fn figure(w: f64, interactive: bool, c: DOp[>..]&) -> Fig {
    let narrow = w < 520.0;
    // The right margin holds the x axis's arrowhead and its label.
    var x_label: u8[>..] = [];
    format(x_label, "x (", sym(LENGTH), ")");
    let mr = 16.0 + fig_label_width(x_label);
    let l = g_m.length;
    let yb = if narrow { 75.0 } else { 85.0 };
    fig_text.clear();
    fig_ticks.clear();
    fig_ls.clear();
    fig_ln.clear();
    let hv = if narrow { 130.0 } else { 160.0 };
    let hm = if narrow { 130.0 } else { 160.0 };
    let hd = if narrow { 110.0 } else { 130.0 };
    var k = 0;
    while k < 3 {
        let at = fig_text.len;
        if k == 0 { format(fig_text, "SHEAR FORCE V (", sym(FORCE), ")"); }
        else if k == 1 { format(fig_text, "BENDING MOMENT M (", sym(MOMENT), ") · SAGGING +"); }
        else { format(fig_text, "DEFLECTION v (", sym(LENGTH), ")"); }
        let h = if k == 0 { hv } else if k == 1 { hm } else { hd };
        let color = if k == 0 { COL_ACCENT } else if k == 1 { COL_WARM } else { COL_FG };
        let q = if k == 0 { FORCE } else if k == 1 { MOMENT } else { LENGTH };
        fig_panels[k] = FigPanel { key: k, t0: at, t1: fig_text.len - at, h: h, color: color, q: q, top: 0.0, bottom: 0.0, lo: 0.0, hi: 0.0, k0: 0, kn: 0 };
        k++;
    }
    // The beam panel first, from the top.
    var y = yb + 124.0 + 10.0;
    var pts: Sample[>..] = [];
    diagram(800, pts);
    k = 0;
    while k < 3 {
        var p = fig_panels[k];
        p.top = y + 22.0;
        p.bottom = y + p.h;
        y += p.h + 26.0;
        var lo = 0.0;
        var hi = 0.0;
        for s in pts { let v = fig_panel_get(p, s); lo = jmin(lo, v); hi = jmax(hi, v); }
        if !(hi - lo >= 1e-9) { lo = -1.0; hi = 1.0; }
        // Halved before subtracting so the span of loads near the double limit cannot overflow.
        let gap = (hi / 2.0 - lo / 2.0) * 0.4;
        p.lo = lo - gap;
        p.hi = hi + gap;
        p.k0 = fig_ticks.len;
        fig_nice_ticks(p.lo, p.hi, if narrow { 3.0 } else { 4.0 }, fig_ticks);
        p.kn = fig_ticks.len - p.k0;
        fig_tick_labels(fig_ticks[p.k0..], fig_ls, fig_ln);
        fig_panels[k] = p;
        k++;
    }
    let h = y;
    // Widen the left margin only when a tick label would not fit the usual one.
    var widest = -1.0 / 0.0;
    var i = 0;
    while i < fig_ls.len { widest = fig_fmax(widest, fig_label_width(fig_text[fig_ls[i]..fig_ls[i] + fig_ln[i]])); i++; }
    let ml = fig_fmax(if narrow { 48.0 } else { 64.0 }, 12.0 + widest);
    let lay = FigLay { ml: ml, mr: mr, w: w, l: l };
    draw_beam(c, lay, yb, narrow, interactive, x_label);
    if interactive {
        var attrs: u8[>..] = [];
        attrs.append(" class=\"plotarea\" id=\"plotarea\" tabindex=\"0\" role=\"slider\" aria-label=\"Section position along the beam\" aria-valuemin=\"");
        attrs.append(fig_tidy(show_x(0.0, l)));
        attrs.append("\" aria-valuemax=\"");
        attrs.append(fig_tidy(show_x(l, l)));
        attrs.append("\"");
        if app_has_cursor {
            attrs.append(" aria-valuenow=\"");
            attrs.append(fig_tidy(show_x(app_cursor, l)));
            attrs.append("\" aria-valuetext=\"");
            esc_to(attrs, readout_text(app_cursor));
            attrs.append("\"");
        }
        draw_open(c, attrs);
    } else {
        draw_open(c, "");
    }
    k = 0;
    while k < 3 {
        draw_diagram(c, fig_panels[k], pts, lay, narrow, x_label);
        k++;
    }
    if interactive {
        draw_rect(c, ml - 4.0, fig_panels[0].top - 20.0, w - ml - mr + 8.0, fig_panels[2].bottom - fig_panels[0].top + 24.0, 6.0, paint_none(), "box");
    }
    draw_close(c);
    if interactive {
        let x = fig_x(lay, if app_has_cursor { app_cursor } else { l / 2.0 });
        draw_line_cls(c, x, 8.0, x, fig_panels[2].bottom, paint_none(), "cursor");
    }
    return Fig { w: w, h: h, ml: ml, mr: mr, l: l };
}

// The x axis at height y: an arrow to the right, labelled past its tip.
fn fig_x_axis(c: DOp[>..]&, lay: FigLay, y: f64, label: u8[:]) {
    let w = lay.w;
    let mr = lay.mr;
    draw_line(c, fig_x(lay, 0.0), y, w - mr + 6.0, y, COL_FG, 1.0);
    fig_arrow_path(c, w - mr + 10.0, y, 90.0, 3.5, 1.6, COL_FG);
    draw_text(c, w - mr + 14.0, y + 4.0, label, "axlabel", ANC_START);
}

// Position ticks at height y, numbered in the chosen convention and drawn at their place on the beam.
fn fig_x_ticks(c: DOp[>..]&, lay: FigLay, y: f64, narrow: bool) {
    let l = lay.l;
    let o = offset(l);
    var ticks: f64[>..] = [];
    fig_nice_ticks(show_x(0.0, l), show_x(l, l), if narrow { 4.0 } else { 6.0 }, ticks);
    for t in ticks {
        let px = fig_x(lay, take(t, LENGTH) + o);
        draw_line(c, px, y, px, y + 4.0, COL_MUTED, 1.0);
        draw_text(c, px, y + 15.0, sig(t, 4), "tick", ANC_MIDDLE);
    }
}

// A support or load handle: on the page, a slider to drag or move with the arrow keys.
fn fig_open_handle(c: DOp[>..]&, interactive: bool, key: u8[:], label: u8[:], x: f64, l: f64) {
    if !interactive { draw_open(c, ""); return; }
    var a: u8[>..] = [];
    a.append(" class=\"handle");
    if app_active == key { a.append(" active"); }
    a.append("\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"");
    a.append(fig_tidy(show_x(0.0, l)));
    a.append("\" aria-valuemax=\"");
    a.append(fig_tidy(show_x(l, l)));
    a.append("\" data-key=\"");
    a.append(key);
    a.append("\" aria-label=\"");
    esc_to(a, label);
    a.append("\" aria-valuenow=\"");
    a.append(fig_tidy(show_x(x, l)));
    a.append("\" aria-valuetext=\"");
    var t: u8[>..] = [];
    format(t, sig(show_x(x, l), 4), " ", sym(LENGTH));
    esc_to(a, t);
    a.append("\"");
    draw_open(c, a);
}

fn fig_grip(c: DOp[>..]&, interactive: bool, r0: f64, r1: f64, r2: f64, r3: f64, h0: f64, h1: f64, h2: f64, h3: f64) {
    if !interactive { return; }
    draw_rect(c, r0, r1, r2, r3, 6.0, paint_none(), "ring");
    draw_rect(c, h0, h1, h2, h3, 0.0, paint_none(), "hit");
}

fn draw_beam(c: DOp[>..]&, lay: FigLay, yb: f64, narrow: bool, interactive: bool, x_label: u8[:]) {
    let l = g_m.length;
    draw_open(c, "");
    // Distributed loads: arrows scaled to the largest intensity.
    var qmax = 1e-12;
    var fmax = 1e-12;
    for ld in g_loads {
        if ld.kind == DIST { qmax = jmax(jmax(qmax, abs(ld.q1)), abs(ld.q2)); }
        else if ld.kind == POINT { fmax = jmax(fmax, abs(ld.f)); }
    }
    for ld in g_loads {
        if ld.kind != DIST { continue; }
        let x1 = ld.x1;
        let x2 = ld.x2;
        let q1 = ld.q1;
        let q2 = ld.q2;
        let px1 = fig_x(lay, x1);
        let px2 = fig_x(lay, x2);
        let n = fig_fmax(2.0, fig_js_round((px2 - px1) / 22.0));
        let top1 = yb - 7.0 - (10.0 + 30.0 * abs(q1 + (q2 - q1) * (x1 - x1) / (x2 - x1)) / qmax);
        let top2 = yb - 7.0 - (10.0 + 30.0 * abs(q1 + (q2 - q1) * (x2 - x1) / (x2 - x1)) / qmax);
        var s = draw_seg_start();
        draw_seg_m(px1, top1);
        draw_seg_l(px2, top2);
        draw_path(c, s, paint_stroke(COL_FG, 1.5));
        let steps = n as i64;
        var j = 0;
        while j <= steps {
            let jf = j as f64;
            let xm = x1 + (x2 - x1) * jf / n;
            let q = q1 + (q2 - q1) * jf / n;
            j++;
            if abs(q) < 1e-9 * qmax { continue; }
            let px = fig_x(lay, xm);
            let qq = q1 + (q2 - q1) * (xm - x1) / (x2 - x1);
            let top = yb - 7.0 - (10.0 + 30.0 * abs(qq) / qmax);
            let d = if q < 0.0 { 1.0 } else { -1.0 };
            draw_line(c, px, top, px, yb - 8.0, COL_FG, 1.0);
            fig_head_path(c, px, if d > 0.0 { yb - 7.0 } else { top }, d, 3.0, COL_FG);
        }
        var label: u8[>..] = [];
        let u = sym(DISTRIBUTED);
        if q1 == q2 {
            format(label, short(show(q1, DISTRIBUTED), 3), " ", u);
        } else {
            format(label, short(show(q1, DISTRIBUTED), 3), " → ", short(show(q2, DISTRIBUTED), 3), " ", u);
        }
        draw_text(c, (px1 + px2) / 2.0, jmin(top1, top2) - 6.0, label, "val", ANC_MIDDLE);
    }
    draw_rect(c, fig_x(lay, 0.0), yb - 4.0, fig_x(lay, l) - fig_x(lay, 0.0), 8.0, 2.0, paint_both(COL_SURFACE, COL_FG, 1.5), "");
    // Supports and their reactions. With many close supports, label only those whose text has room;
    // every reaction is still listed below the figure and in the table.
    let force = sym(FORCE);
    let moment = sym(MOMENT);
    var labelled: f64[>..] = [];
    var free_from = -1.0 / 0.0;
    for rr in g_rea {
        let x = fig_x(lay, rr.x);
        let w = 7.0 * ((fig_chars(short_nf(show(abs(rr.fy), FORCE), 2)) + fig_chars(force) + 3) as f64);
        let a = fig_anchor_at(rr.x, l);
        let left = if a == ANC_START { x } else if a == ANC_END { x - w } else { x - w / 2.0 };
        if left >= free_from { labelled.push(rr.x); free_from = left + w + 6.0; }
    }
    var i = 0;
    while i < st_sup.len {
        let s = st_sup[i];
        i++;
        if !finite(s.x) { continue; }
        let x = fig_x(lay, s.x);
        var key: u8[>..] = [];
        format(key, "s", i - 1);
        var label: u8[>..] = [];
        format(label, if s.kind == PIN { "Pin" } else { "Fixed" }, " support ", i, ", position");
        fig_open_handle(c, interactive, key, label, s.x, l);
        if s.kind == PIN {
            let sg = draw_seg_start();
            draw_seg_m(x, yb + 4.0);
            draw_seg_l(x - 10.0, yb + 20.0);
            draw_seg_l(x + 10.0, yb + 20.0);
            draw_seg_z();
            draw_path(c, sg, paint_both(COL_BG, COL_FG, 1.5));
            draw_line(c, x - 14.0, yb + 23.0, x + 14.0, yb + 23.0, COL_FG, 1.5);
            var k = -12;
            while k <= 8 {
                let kf = k as f64;
                draw_line(c, x + kf, yb + 27.0, x + kf + 4.0, yb + 23.0, COL_FG, 1.0);
                k += 5;
            }
        } else {
            let side = if s.x <= 0.0 { -1.0 } else if s.x >= l { 1.0 } else { 0.0 };
            if side != 0.0 {
                draw_line(c, x, yb - 20.0, x, yb + 20.0, COL_FG, 2.0);
                var k = -20;
                while k < 20 {
                    let kf = k as f64;
                    draw_line(c, x, yb + kf + 6.0, x + side * 6.0, yb + kf, COL_FG, 1.0);
                    k += 6;
                }
            } else {
                draw_rect(c, x - 7.0, yb - 12.0, 14.0, 24.0, 0.0, paint_both(COL_BG, COL_FG, 1.5), "");
                draw_line(c, x - 7.0, yb - 12.0, x + 7.0, yb + 12.0, COL_FG, 1.0);
                draw_line(c, x + 7.0, yb - 12.0, x - 7.0, yb + 12.0, COL_FG, 1.0);
            }
        }
        fig_grip(c, interactive, x - 16.0, yb - 22.0, 32.0, 52.0, x - 16.0, yb - 22.0, 32.0, 52.0);
        draw_close(c);
        var found = false;
        var rr = Reaction { kind: 0, x: 0.0, fy: 0.0, mz: 0.0 };
        for r in g_rea {
            if !found && r.x == s.x { found = true; rr = r; }
        }
        if !found { continue; }
        let up = rr.fy >= 0.0;
        let ya = yb + 34.0;
        let len = 20.0;
        draw_line(c, x, if up { ya + len } else { ya }, x, if up { ya } else { ya + len }, COL_GREEN, 2.0);
        fig_head_path(c, x, if up { ya - 1.0 } else { ya + len + 1.0 }, if up { -1.0 } else { 1.0 }, 4.0, COL_GREEN);
        var is_labelled = false;
        for lx in labelled { if lx == rr.x { is_labelled = true; } }
        if is_labelled {
            let a = fig_anchor_at(s.x, l);
            let tx = x - fig_shift(a, 2.0);
            var t: u8[>..] = [];
            format(t, short_nf(show(abs(rr.fy), FORCE), 2), " ", force, " ", if up { "↑" } else { "↓" });
            draw_text(c, tx, ya + len + 14.0, t, "val react", a);
            if s.kind == FIXED && abs(rr.mz) > 1e-9 * (abs(rr.fy) + 1.0) {
                var t2: u8[>..] = [];
                format(t2, short_nf(show(abs(rr.mz), MOMENT), 2), " ", moment, " ", if rr.mz > 0.0 { "↺" } else { "↻" });
                draw_text(c, tx, ya + len + 28.0, t2, "val react", a);
            }
        }
    }
    // Point forces and couples
    i = 0;
    while i < st_loads.len {
        let ld = st_loads[i];
        i++;
        if ld.kind == DIST || !finite(ld.x) { continue; }
        let x = fig_x(lay, ld.x);
        var key: u8[>..] = [];
        format(key, "l", i - 1);
        var label: u8[>..] = [];
        format(label, "Load ", i, ", ", if ld.kind == POINT { "Point force" } else { "Couple" }, ", position");
        fig_open_handle(c, interactive, key, label, ld.x, l);
        let a = fig_anchor_at(ld.x, l);
        if ld.kind == POINT {
            // Capped: while an edit is unsolved, F can exceed the largest force of the solved model.
            let ratio = abs(ld.f) / fmax;
            let len = 18.0 + 30.0 * (if is_nan(ratio) { 0.0 } else { fig_fmin(ratio, 1.0) });
            let down = ld.f <= 0.0;
            let y0 = yb - 6.0 - len;
            let y1 = yb - 6.0;
            draw_line(c, x, if down { y0 } else { y1 - 1.0 }, x, if down { y1 - 7.0 } else { y0 + 7.0 }, COL_FG, 2.0);
            var t: u8[>..] = [];
            format(t, short(show(abs(ld.f), FORCE), 3), " ", force, " ", if down { "↓" } else { "↑" });
            draw_text(c, x, y0 - 6.0, t, "val", a);
            fig_grip(c, interactive, x - 14.0, y0 - 4.0, 28.0, len + 6.0, x - 16.0, y0 - 20.0, 32.0, len + 22.0);
            draw_close(c);
            fig_head_path(c, x, if down { y1 } else { y0 }, if down { 1.0 } else { -1.0 }, 5.0, COL_FG);
        } else {
            let rr = 14.0;
            let ccw = ld.c >= 0.0;
            let k = 0.5522847498 * rr;
            let s = if ccw { -1.0 } else { 1.0 };
            let sg = draw_seg_start();
            draw_seg_m(x + rr, yb);
            draw_seg_c(x + rr, yb + s * k, x + k, yb + s * rr, x, yb + s * rr);
            draw_seg_c(x - k, yb + s * rr, x - rr, yb + s * k, x - rr, yb);
            draw_path(c, sg, paint_stroke(COL_FG, 2.0));
            let tx = x - rr;
            let sg2 = draw_seg_start();
            draw_seg_m(tx, yb - s);
            draw_seg_l(tx + 5.0 * s, yb + 7.0 * s);
            draw_seg_l(tx - 5.0 * s, yb + 7.0 * s);
            draw_seg_z();
            draw_path(c, sg2, paint_fill(COL_FG));
            var t: u8[>..] = [];
            format(t, short(show(abs(ld.c), MOMENT), 3), " ", moment, " ", if ccw { "↺" } else { "↻" });
            draw_text(c, x, yb - rr - 8.0, t, "val", a);
            fig_grip(c, interactive, x - rr - 5.0, yb - rr - 5.0, 2.0 * rr + 10.0, rr + 12.0, x - rr - 6.0, yb - rr - 22.0, 2.0 * rr + 12.0, rr + 30.0);
            draw_close(c);
        }
    }
    // Axes: x along the beam from the chosen origin, y up through it.
    let ya = yb + 104.0;
    let xo = fig_x(lay, offset(l));
    draw_open(c, " class=\"axes\"");
    fig_x_axis(c, lay, ya, x_label);
    fig_x_ticks(c, lay, ya, narrow);
    draw_line(c, xo, ya, xo, ya - 12.0, COL_FG, 1.0);
    fig_arrow_path(c, xo, ya - 16.0, 0.0, 3.5, 1.6, COL_FG);
    draw_text(c, xo - 6.0, ya - 8.0, "y", "axlabel halo", ANC_END);
    draw_close(c);
    draw_close(c);
}

fn draw_diagram(c: DOp[>..]&, p: FigPanel, pts: Sample[:], lay: FigLay, narrow: bool, x_label: u8[:]) {
    let ml = lay.ml;
    let w = lay.w;
    let mr = lay.mr;
    let top = p.top;
    let bot = p.bottom;
    draw_open(c, " class=\"axis\"");
    var t = 0;
    while t < p.kn {
        let tick = fig_ticks[p.k0 + t];
        draw_line(c, ml, fig_panel_y(p, tick), w - mr, fig_panel_y(p, tick), COL_LINE, 1.0);
        draw_text(c, ml - 6.0, fig_panel_y(p, tick) + 4.0, fig_text[fig_ls[p.k0 + t]..fig_ls[p.k0 + t] + fig_ln[p.k0 + t]], "tick", ANC_END);
        t++;
    }
    draw_line(c, ml, fig_panel_y(p, 0.0), w - mr, fig_panel_y(p, 0.0), COL_MUTED, 1.0);
    draw_close(c);
    // Axes: the value up the left edge, labelled by the panel title at its tip; x along the zero line.
    draw_open(c, " class=\"axes\"");
    draw_line(c, ml, bot, ml, top + 4.0, COL_FG, 1.0);
    fig_arrow_path(c, ml, top - 1.0, 0.0, 3.5, 1.6, COL_FG);
    fig_x_axis(c, lay, fig_panel_y(p, 0.0), x_label);
    fig_x_ticks(c, lay, bot, narrow);
    draw_close(c);
    // The title starts just right of the value axis. On a figure as narrow as a phone's, the moment's title would
    // run past the right edge: it then drops "BENDING", and starts further left if it still does not fit.
    let full = fig_text[p.t0..p.t0 + p.t1];
    var title: u8[>..] = [];
    if ml + 8.0 + fig_title_width(full) > w - 4.0 {
        let at = find(full, "BENDING ");
        if at >= 0 { title.append(full[..at]); title.append(full[at + 8..]); } else { title.append(full); }
    } else {
        title.append(full);
    }
    draw_text(c, fig_fmin(ml + 8.0, w - 4.0 - fig_title_width(title)), top - 5.0, title, "title", ANC_START);
    let sg = draw_seg_start();
    var i = 0;
    while i < pts.len {
        let s = pts[i];
        let x = fig_x(lay, s.x);
        let y = fig_panel_y(p, fig_panel_get(p, s));
        if i == 0 { draw_seg_m(x, y); } else { draw_seg_l(x, y); }
        i++;
    }
    let line_n = draw_segs.len - sg;
    if p.key != 2 && pts.len > 0 {
        draw_seg_l(fig_x(lay, pts[pts.len - 1].x), fig_panel_y(p, 0.0));
        draw_seg_l(fig_x(lay, pts[0].x), fig_panel_y(p, 0.0));
        draw_seg_z();
        draw_path_cls(c, sg, draw_segs.len - sg, paint_opacity(paint_fill(p.color), 0.14), "area");
    }
    draw_path_cls(c, sg, line_n, paint_round(paint_stroke(p.color, 2.0)), "");
    // Label the extremes.
    let ex = if p.key == 0 { g_ext.v_shear } else if p.key == 1 { g_ext.m } else { g_ext.v };
    if abs(ex.value) > 0.0 {
        let v = show(ex.value, p.q);
        let x = fig_x(lay, ex.x);
        let yv = fig_panel_y(p, v);
        draw_circle(c, x, yv, 3.5, paint_both(p.color, COL_BG, 2.0), "");
        let a = if x < ml + 60.0 { ANC_START } else if x > w - mr - 60.0 { ANC_END } else { ANC_MIDDLE };
        var tx: u8[>..] = [];
        format(tx, short(v, 4), " ", sym(p.q));
        draw_text(c, x + fig_shift(a, 6.0), if v >= 0.0 { yv - 8.0 } else { yv + 16.0 }, tx, "val", a);
    }
}
