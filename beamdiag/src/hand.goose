// Hand calculations: a readable, step-by-step derivation of the stiffness solver's answer.
//
// The direct stiffness method in engine.goose is authoritative. This writes the same answer the way it is
// worked by hand, so it can be followed and checked on paper:
//
//   reactions   statically determinate: equilibrium, sum of forces and of moments about a support;
//               indeterminate: compatibility (the force method) through Macaulay's double
//               integration of EI v'' = M(x): two equilibrium equations, plus v = 0 at every
//               support and v' = 0 at every fixed support, in the reactions and the two
//               integration constants
//   segments    between consecutive supports and load points, V(x) and M(x) by the method of
//               sections, then EI θ and EI v by integrating M, continuous from segment to segment
//   a point     V, M, θ, v and the bending stress at any chosen x
//   checks      peak bending stress, and the sums of forces and moments of loads and reactions
//
// Every number shown is the solver's value at that step, written with the page's formatters, in the
// page's unit convention and origin of x. Where a written-out system would be too large to follow (more
// than 8 unknowns), the set-up and equations are stated generally and the solver's values are listed.
//
// The solved beam is the engine's globals (g_m, g_sup, g_loads, g_rea, g_disp, g_eq, g_ext).
// hand_derive(u, mid) reads them into the hand_* globals; call hand_invalidate() when the solution changes
// and hand_ensure(u, mid) before reading. The steps are built on first use.

import std;
import math;
import .engine;
import .fmt;
import .tex;

let HAND_WRITE_UNKNOWNS = 8;
let HAND_WRITE_TERMS = 14;

// ---------- the derivation ----------

struct HReaction { i: i64, kind: i64, x: f64, xi: f64, fy: f64, mz: f64 }
// A load in display units: positions from the display origin. n is the 1-based place in the model's list.
struct HLoad { dist: bool, moment: bool, n: i64, x: f64, xi: f64, f: f64, c: f64, xi1: f64, xi2: f64, q1: f64, q2: f64 }
// kind 0 reaction R, 1 support moment M, 2 constant C_1, 3 constant C_2; r is the reaction it belongs to or -1
struct HUnknown { kind: i64, r: i64 }
// kind 0 sum of forces, 1 sum of moments, 2 v = 0 at support sup, 3 theta = 0 at support sup
struct HRow { kind: i64, sup: i64 }
// A Macaulay term: coefficient, position, power
struct HTerm { k: f64, a: f64, p: i64 }
// kind 0 R, 1 M, 2 P, 3 C; n is the reaction or load number
struct HJump { seg: i64, kind: i64, n: i64, value: f64, moment: bool }
struct HStat { seg: i64, s: f64, x: f64, m: f64 }
// One segment between consecutive events. poly holds V, M, EI θ and EI v as polynomials in s = x − a,
// at offsets 0, 3, 7 and 12 with 3, 4, 5 and 6 coefficients.
struct HSeg {
    index: i64, a: f64, b: f64, xa: f64, xb: f64, h: f64, qa: f64, qb: f64, k: f64,
    sv: f64, sm: f64, st: f64, sd: f64, ev: f64, em: f64, et: f64, ed: f64, bv: f64, bm: f64,
    poly: f64[18], support_at_end: i64,
}
struct HAct { f: f64, mo: f64, has_f: bool, couple: bool, arm: f64 }

var hand_valid: bool = false;
var hand_u: i64 = 0;
var hand_mid: bool = false;
var hand_len: f64 = 0.0;              // the beam length, SI
var hand_scale: f64[4];               // largest |V|, |M|, |v| and |v|/L, SI
var hand_dlen: f64 = 0.0;             // the length in display units
var hand_o: f64 = 0.0;
var hand_ei: f64 = 0.0;
var hand_deg: i64 = 0;
var hand_written: bool = true;
var hand_ends0: f64 = 0.0;
var hand_ends1: f64 = 0.0;
var hand_rea: HReaction[>..] = [];
var hand_loads: HLoad[>..] = [];
var hand_unk: HUnknown[>..] = [];
var hand_rows: HRow[>..] = [];
var hand_coef: f64[>..] = [];         // row r, unknown k at r * (unknown count) + k
var hand_rhs: f64[>..] = [];
var hand_solver: f64[>..] = [];
var hand_known: HTerm[>..] = [];
var hand_segs: HSeg[>..] = [];
var hand_jumps: HJump[>..] = [];
var hand_stat: HStat[>..] = [];
var hand_sum_f: f64 = 0.0;
var hand_sum_m0: f64 = 0.0;
var hand_sum_r: f64 = 0.0;
var hand_sum_mr: f64 = 0.0;
var hand_resid: f64 = 0.0;

fn hand_invalidate() { hand_valid = false; }
fn hand_current(u: i64, mid: bool) -> bool { return hand_valid && hand_u == u && hand_mid == mid; }

// ---------- the view: unit system and origin ----------

fn hand_show(si: f64, q: i64) -> f64 { return to_units(si, q, hand_u); }
fn hand_sym(q: i64) -> const u8[:] { return unit_symbol(hand_u, q); }
// The display coordinate of a position measured from the left end, as the page shows it.
fn hand_x(x: f64) -> f64 { return hand_show(from_origin(x, hand_len, hand_mid), LENGTH); }
fn hand_pos(x: f64) -> u8[>..] { return sig4(hand_x(x)); }

fn hand_tex_p(t: u8[:]) -> u8[>..] { return if starts_with(t, "−") { str("(", tex_number(t), ")") } else { tex_number(t) }; }
fn hand_tq(t: u8[:], q: i64) -> u8[>..] { return str(tex_number(t), "\\ ", tex_unit(hand_sym(q))); }

// A display value as the page writes it (shortNf), cleaned of round-off far below the largest value
// of the same kind on this beam.
fn hand_vtext(value: f64, q: i64) -> u8[>..] {
    var scale = 0.0;
    if q == FORCE { scale = hand_show(hand_scale[0], q); }
    else if q == MOMENT { scale = hand_show(hand_scale[1], q); }
    else if q == LENGTH { scale = hand_show(hand_scale[2], q); }
    else if q == ANGLE { scale = hand_show(hand_scale[3], q); }
    return snf(if abs(value) <= 1e-10 * abs(scale) { 0.0 } else { value });
}

// ---------- writing equations ----------

// Appends the term "k s" to a TeX sum: zero coefficients are left out, 1 is written as the symbol.
fn hand_term(out: u8[>..]&, k: f64, s: u8[:]) {
    if k == 0.0 { return; }
    let t = sig4(abs(k));
    let body = if s.len == 0 { tex_number(t) } else if t == "1" { str(s) } else { str(tex_number(t), "\\,", s) };
    if out.len == 0 { if k < 0.0 { out.append("-"); } }
    else if k < 0.0 { out.append(" - "); }
    else { out.append(" + "); }
    out.append(body);
}

fn hand_zero_if_empty(out: u8[>..]&) { if out.len == 0 { out.append("0"); } }

fn hand_power_name(v: u8[:], n: i64) -> u8[>..] {
    if n == 0 { return ""; }
    if n == 1 { return str(v); }
    return str(v, "^{", n, "}");
}

// A polynomial in s with coefficients [c0, c1, ...], dropping terms that are round-off at s = h.
fn hand_poly(coef: f64[:], h: f64) -> u8[>..] {
    var size = abs(coef[0]) * pw(h, 0);
    var n = 1;
    while n < coef.len {
        size = jmax(size, abs(coef[n]) * pw(h, n));
        n++;
    }
    var out: u8[>..] = [];
    n = 0;
    while n < coef.len {
        let k = coef[n];
        hand_term(out, if abs(k) * pw(h, n) <= 1e-10 * size { 0.0 } else { k }, hand_power_name("s", n));
        n++;
    }
    hand_zero_if_empty(out);
    return out;
}

// The bracket <x − a>ⁿ in the display coordinate.
fn hand_bracket(a: f64, n: i64) -> u8[>..] {
    let t = sig4(abs(a));
    let inner = if a == 0.0 || t == "0" { str("x") } else { str("x ", if a > 0.0 { "-" } else { "+" }, " ", tex_number(t)) };
    let pw_text = if n == 1 { str("") } else { str("^{", n, "}") };
    return str("\\langle ", inner, "\\rangle", pw_text);
}

// ---------- load resultants ----------

fn hand_act_f_text(a: HAct) -> u8[>..] { return tex_number(sig4(a.f)); }
fn hand_act_m_text(a: HAct) -> u8[>..] {
    if a.couple { return tex_number(sig4(a.mo)); }
    return str(hand_tex_p(sig4(a.f)), " \\times ", hand_tex_p(sig4(a.arm)));
}

// A sum of already formatted terms (the forces or the moments), written out when short and then totalled.
fn hand_sum_of(acts: HAct[:], use_f: bool, total: u8[:]) -> u8[>..] {
    var count = 0;
    for a in acts { if !use_f || a.has_f { count++; } }
    if count > HAND_WRITE_TERMS || count <= 1 { return tex_number(total); }
    var body: u8[>..] = [];
    var first = true;
    for a in acts {
        if use_f && !a.has_f { continue; }
        let t = if use_f { hand_act_f_text(a) } else { hand_act_m_text(a) };
        if first { body.append(t); }
        else if starts_with(t, "-") { body.append(" - "); body.append(t[1..]); }
        else { body.append(" + "); body.append(t); }
        first = false;
    }
    return str(body, " = ", tex_number(total));
}

// Each load's vertical force and its moment about the display coordinate `reference`,
// counter-clockwise positive. A trapezoid is a rectangle plus a triangle, here split into two triangles
// so a load whose ends have opposite signs needs no special case.
fn hand_actions(reference: f64) -> HAct[>..] {
    var out: HAct[>..] = [];
    for l in hand_loads {
        if !l.dist && !l.moment {
            let arm = l.xi - reference;
            out.push(HAct { f: l.f, mo: l.f * arm, has_f: true, couple: false, arm: arm });
        } else if !l.dist {
            out.push(HAct { f: 0.0, mo: l.c, has_f: false, couple: true, arm: 0.0 });
        } else {
            let b = l.xi2 - l.xi1;
            if l.q1 == l.q2 {
                hand_push_part(out, l.q1 * b, l.xi1 + b / 2.0, reference);
            } else {
                hand_push_part(out, l.q1 * b / 2.0, l.xi1 + b / 3.0, reference);
                hand_push_part(out, l.q2 * b / 2.0, l.xi1 + 2.0 * b / 3.0, reference);
            }
        }
    }
    return out;
}

fn hand_push_part(out: HAct[>..]&, w: f64, where: f64, reference: f64) {
    if w == 0.0 { return; }
    out.push(HAct { f: w, mo: w * (where - reference), has_f: true, couple: false, arm: where - reference });
}

// Macaulay terms of M(x) from the loads, display units.
fn hand_load_terms(out: HTerm[>..]&) {
    var all: HTerm[>..] = [];
    for l in hand_loads {
        if !l.dist && !l.moment {
            if l.f != 0.0 { all.push(HTerm { k: l.f, a: l.xi, p: 1 }); }
        } else if !l.dist {
            if l.c != 0.0 { all.push(HTerm { k: -l.c, a: l.xi, p: 0 }); }
        } else {
            let s = (l.q2 - l.q1) / (l.xi2 - l.xi1);
            all.push(HTerm { k: l.q1 / 2.0, a: l.xi1, p: 2 });
            all.push(HTerm { k: s / 6.0, a: l.xi1, p: 3 });
            all.push(HTerm { k: -l.q2 / 2.0, a: l.xi2, p: 2 });
            all.push(HTerm { k: -s / 6.0, a: l.xi2, p: 3 });
        }
    }
    for t in all { if t.k != 0.0 { out.push(t); } }
}

// <d>ⁿ for d = x − a: zero left of a.
fn hand_mac(d: f64, n: i64) -> f64 { return if d > 0.0 { pw(d, n) } else { 0.0 }; }

// The k-fold integral of the terms at x.
fn hand_integrated(terms: HTerm[:], k: i64, x: f64) -> f64 {
    var acc = 0.0;
    for t in terms {
        var den = 1.0;
        var n = t.p + 1;
        while n <= t.p + k { den = den * (n as f64); n++; }
        let m = if t.p + k == 0 { if x >= t.a { 1.0 } else { 0.0 } } else { hand_mac(x - t.a, t.p + k) };
        acc = acc + t.k * m / den;
    }
    return acc;
}

// ---------- the derivation ----------

fn hand_uname(k: i64) -> u8[>..] {
    let u = hand_unk[k];
    if u.kind == 0 { return str("R_{", hand_rea[u.r].i, "}"); }
    if u.kind == 1 { return str("M_{", hand_rea[u.r].i, "}"); }
    return if u.kind == 2 { str("C_1") } else { str("C_2") };
}

fn hand_row_label(r: i64) -> u8[>..] {
    let w = hand_rows[r];
    if w.kind == 0 { return "\\sum F_y = 0"; }
    if w.kind == 1 { return str("\\sum M_{x = ", tex_number(sig4(-hand_o)), "} = 0"); }
    let xi = hand_rea[w.sup].xi;
    return if w.kind == 2 { str("v(", tex_number(sig4(xi)), ") = 0") } else { str("\\theta(", tex_number(sig4(xi)), ") = 0") };
}

fn hand_row_what(r: i64) -> u8[>..] {
    let w = hand_rows[r];
    if w.kind == 0 { return "vertical equilibrium"; }
    if w.kind == 1 { return "moments about the left end"; }
    let i = hand_rea[w.sup].i;
    return if w.kind == 2 { str("no deflection at support ", i) } else { str("no rotation at fixed support ", i) };
}

fn hand_coef_at(r: i64, k: i64) -> f64 { return hand_coef[r * hand_unk.len + k]; }

// Derives the hand calculation of the solved beam in unit system u (an index into UNIT_IDS) and the origin.
fn hand_derive(u: i64, mid: bool) {
    hand_u = u;
    hand_mid = mid;
    hand_len = g_m.length;
    hand_steps_ok = false;
    let l = hand_len;
    hand_scale[0] = abs(g_ext.v_shear.value);
    hand_scale[1] = abs(g_ext.m.value);
    hand_scale[2] = abs(g_ext.v.value);
    hand_scale[3] = abs(g_ext.v.value) / l;
    // the model in display units; only its length, rigidity and loads are used
    hand_dlen = scale_value(g_m.length, LENGTH, u, false, false);
    hand_o = if mid { hand_dlen / 2.0 } else { 0.0 };
    hand_ei = scale_value(g_m.e, STRESS, u, false, false) * scale_value(g_m.section.i, INERTIA, u, false, false);
    hand_rea.clear();
    var j = 0;
    for re in g_rea {
        hand_rea.push(HReaction { i: j + 1, kind: re.kind, x: re.x, xi: hand_x(re.x), fy: hand_show(re.fy, FORCE), mz: hand_show(re.mz, MOMENT) });
        j++;
    }
    hand_loads.clear();
    j = 0;
    for ld in g_loads {
        var h = HLoad { dist: false, moment: false, n: j + 1, x: 0.0, xi: 0.0, f: 0.0, c: 0.0, xi1: 0.0, xi2: 0.0, q1: 0.0, q2: 0.0 };
        if ld.kind == DIST {
            h.dist = true;
            h.xi1 = scale_value(ld.x1, LENGTH, u, false, false) - hand_o;
            h.xi2 = scale_value(ld.x2, LENGTH, u, false, false) - hand_o;
            h.q1 = scale_value(ld.q1, DISTRIBUTED, u, false, false);
            h.q2 = scale_value(ld.q2, DISTRIBUTED, u, false, false);
        } else if ld.kind == POINT {
            h.x = ld.x;
            h.xi = scale_value(ld.x, LENGTH, u, false, false) - hand_o;
            h.f = scale_value(ld.f, FORCE, u, false, false);
        } else {
            h.moment = true;
            h.x = ld.x;
            h.xi = scale_value(ld.x, LENGTH, u, false, false) - hand_o;
            h.c = scale_value(ld.c, MOMENT, u, false, false);
        }
        hand_loads.push(h);
        j++;
    }
    hand_deg = indeterminacy(g_sup);
    let xi0 = -hand_o;
    hand_ends0 = xi0;
    hand_ends1 = hand_dlen - hand_o;
    // Unknowns: each reaction force and fixed-support moment, then the integration constants.
    hand_unk.clear();
    j = 0;
    while j < hand_rea.len {
        hand_unk.push(HUnknown { kind: 0, r: j });
        if hand_rea[j].kind == FIXED { hand_unk.push(HUnknown { kind: 1, r: j }); }
        j++;
    }
    hand_unk.push(HUnknown { kind: 2, r: -1 });
    hand_unk.push(HUnknown { kind: 3, r: -1 });
    hand_known.clear();
    hand_load_terms(hand_known);
    let about0 = hand_actions(xi0);
    hand_sum_f = 0.0;
    hand_sum_m0 = 0.0;
    for a in about0 { hand_sum_f = hand_sum_f + a.f; }
    for a in about0 { hand_sum_m0 = hand_sum_m0 + a.mo; }
    let n = hand_unk.len;
    hand_rows.clear();
    hand_coef.clear();
    hand_rhs.clear();
    // vertical equilibrium
    hand_rows.push(HRow { kind: 0, sup: -1 });
    var k = 0;
    while k < n { hand_coef.push(if hand_unk[k].kind == 0 { 1.0 } else { 0.0 }); k++; }
    hand_rhs.push(-hand_sum_f);
    // moments about the left end
    hand_rows.push(HRow { kind: 1, sup: -1 });
    k = 0;
    while k < n {
        let w = hand_unk[k];
        hand_coef.push(if w.kind == 0 { hand_rea[w.r].xi - xi0 } else if w.kind == 1 { 1.0 } else { 0.0 });
        k++;
    }
    hand_rhs.push(-hand_sum_m0);
    j = 0;
    while j < hand_rea.len {
        let ax = hand_rea[j].xi;
        hand_rows.push(HRow { kind: 2, sup: j });
        k = 0;
        while k < n {
            let w = hand_unk[k];
            var cv = 0.0;
            if w.kind == 0 { cv = hand_mac(ax - hand_rea[w.r].xi, 3) / 6.0; }
            else if w.kind == 1 { cv = -hand_mac(ax - hand_rea[w.r].xi, 2) / 2.0; }
            else if w.kind == 2 { cv = ax; }
            else { cv = 1.0; }
            hand_coef.push(cv);
            k++;
        }
        hand_rhs.push(-hand_integrated(hand_known, 2, ax));
        if hand_rea[j].kind == FIXED {
            hand_rows.push(HRow { kind: 3, sup: j });
            k = 0;
            while k < n {
                let w = hand_unk[k];
                var cv = 0.0;
                if w.kind == 0 { cv = hand_mac(ax - hand_rea[w.r].xi, 2) / 2.0; }
                else if w.kind == 1 { cv = -hand_mac(ax - hand_rea[w.r].xi, 1); }
                else if w.kind == 2 { cv = 1.0; }
                else { cv = 0.0; }
                hand_coef.push(cv);
                k++;
            }
            hand_rhs.push(-hand_integrated(hand_known, 1, ax));
        }
        j++;
    }
    // The solver's values of the unknowns, in display units: the integration constants are EI θ and EI v
    // at the left end, re-expressed for brackets measured in the display coordinate.
    let theta0 = g_disp[0].theta;
    let v0 = hand_show(g_disp[0].v, LENGTH);
    hand_solver.clear();
    k = 0;
    while k < n {
        let w = hand_unk[k];
        if w.kind == 0 { hand_solver.push(hand_rea[w.r].fy); }
        else if w.kind == 1 { hand_solver.push(hand_rea[w.r].mz); }
        else if w.kind == 2 { hand_solver.push(hand_ei * theta0); }
        else { hand_solver.push(hand_ei * v0 - hand_ei * theta0 * xi0); }
        k++;
    }
    hand_written = hand_deg == 0 || n <= HAND_WRITE_UNKNOWNS;
    // Segment by segment
    hand_segs.clear();
    hand_jumps.clear();
    hand_stat.clear();
    var e = 0;
    while e < g_disp.len - 1 {
        hand_segment(g_disp[e].x, g_disp[e + 1].x, e);
        e++;
    }
    hand_resid = residual_of_balance();
    hand_sum_r = 0.0;
    for re in hand_rea { hand_sum_r = hand_sum_r + re.fy; }
    hand_sum_mr = 0.0;
    for re in hand_rea { hand_sum_mr = hand_sum_mr + re.fy * (re.xi - xi0) + re.mz; }
    hand_valid = true;
}

fn hand_segment(a: f64, b: f64, e: i64) {
    let h = hand_show(b - a, LENGTH);
    let qa = hand_show(intensity(g_loads, a, RIGHT), DISTRIBUTED);
    let qb = hand_show(intensity(g_loads, b, LEFT), DISTRIBUTED);
    let k = (qb - qa) / h;
    let sv0, sm0 = internal(a, RIGHT);
    let ev0, em0 = internal(b, LEFT);
    var bv0 = 0.0;
    var bm0 = 0.0;
    if e != 0 { bv0, bm0 = internal(a, LEFT); }
    let dva, dta = deflection(a);
    let dvb, dtb = deflection(b);
    let sv = hand_show(sv0, FORCE);
    let sm = hand_show(sm0, MOMENT);
    let st = dta;
    let sd = hand_show(dva, LENGTH);
    let ei = hand_ei;
    var seg = HSeg {
        index: e + 1, a: a, b: b, xa: hand_x(a), xb: hand_x(b), h: h, qa: qa, qb: qb, k: k,
        sv: sv, sm: sm, st: st, sd: sd,
        ev: hand_show(ev0, FORCE), em: hand_show(em0, MOMENT), et: dtb, ed: hand_show(dvb, LENGTH),
        bv: hand_show(bv0, FORCE), bm: hand_show(bm0, MOMENT),
        poly: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        support_at_end: -1,
    };
    let sn = hand_segs.len;
    var j = 0;
    while j < hand_rea.len {
        let re = hand_rea[j];
        if re.x == a {
            hand_jumps.push(HJump { seg: sn, kind: 0, n: re.i, value: re.fy, moment: false });
            if re.kind == FIXED { hand_jumps.push(HJump { seg: sn, kind: 1, n: re.i, value: re.mz, moment: true }); }
        }
        j++;
    }
    for ld in hand_loads {
        if !ld.dist && ld.x == a {
            if ld.moment { hand_jumps.push(HJump { seg: sn, kind: 3, n: ld.n, value: ld.c, moment: true }); }
            else { hand_jumps.push(HJump { seg: sn, kind: 2, n: ld.n, value: ld.f, moment: false }); }
        }
    }
    // Polynomials in s = x − a from the solver's values at a⁺.
    seg.poly[0] = sv; seg.poly[1] = qa; seg.poly[2] = k / 2.0;
    seg.poly[3] = sm; seg.poly[4] = sv; seg.poly[5] = qa / 2.0; seg.poly[6] = k / 6.0;
    seg.poly[7] = ei * st; seg.poly[8] = sm; seg.poly[9] = sv / 2.0; seg.poly[10] = qa / 6.0; seg.poly[11] = k / 24.0;
    seg.poly[12] = ei * sd; seg.poly[13] = ei * st; seg.poly[14] = sm / 2.0; seg.poly[15] = sv / 6.0; seg.poly[16] = qa / 24.0; seg.poly[17] = k / 120.0;
    // Zero shear inside the segment: the bending moment is stationary there.
    let a2 = k / 2.0;
    let a1 = qa;
    let a0 = sv;
    let size = abs(a0) + abs(a1) * h + abs(a2) * h * h;
    var r1 = 0.0;
    var r2 = 0.0;
    var nr = 0;
    if size > 0.0 {
        if abs(a2) * h * h <= 1e-12 * size {
            if a1 != 0.0 { r1 = -a0 / a1; nr = 1; }
        } else {
            let disc = a1 * a1 - 4.0 * a2 * a0;
            if disc >= 0.0 {
                r1 = (-a1 + sqrt(disc)) / (2.0 * a2);
                r2 = (-a1 - sqrt(disc)) / (2.0 * a2);
                nr = 2;
            }
        }
    }
    // keep those inside, in increasing order
    var roots: f64[>..] = [];
    if nr >= 1 && r1 > 1e-9 * h && r1 < h * (1.0 - 1e-9) { roots.push(r1); }
    if nr >= 2 && r2 > 1e-9 * h && r2 < h * (1.0 - 1e-9) { roots.push(r2); }
    if roots.len == 2 && roots[0] > roots[1] {
        let t = roots[0];
        roots[0] = roots[1];
        roots[1] = t;
    }
    for s in roots {
        let x = a + (b - a) * s / h;
        let sv2, sm2 = internal(x, RIGHT);
        hand_stat.push(HStat { seg: sn, s: s, x: x, m: hand_show(sm2, MOMENT) });
    }
    j = 0;
    while j < hand_rea.len {
        if hand_rea[j].x == b { seg.support_at_end = j; break; }
        j++;
    }
    hand_segs.push(seg);
}

// ---------- the steps ----------

// One ordered list feeds the page and the PDF. An equation step holds its LaTeX and its unicode text;
// any other step holds text.
struct HStep { eq: bool, t0: i64, tl: i64, u0: i64, ul: i64 }

var hand_steps: HStep[>..] = [];
var hand_buf: u8[>..] = [];
var hand_steps_ok: bool = false;

fn hs_text(s: u8[:]) {
    let t0 = hand_buf.len;
    hand_buf.append(s);
    hand_steps.push(HStep { eq: false, t0: t0, tl: s.len, u0: 0, ul: 0 });
}

fn hs_eq(s: u8[:]) {
    let u = tex_unicode(s);
    let t0 = hand_buf.len;
    hand_buf.append(s);
    let u0 = hand_buf.len;
    hand_buf.append(u);
    hand_steps.push(HStep { eq: true, t0: t0, tl: s.len, u0: u0, ul: u.len });
}

fn hand_constants(with_theta: u8[:], has_theta: bool) -> u8[>..] {
    let n = hand_solver.len;
    let th = if has_theta { str("EI\\,\\theta(", with_theta, ") = ") } else { str("") };
    let unit = tex_unit(str(hand_sym(FORCE), "·", hand_sym(LENGTH), "³"));
    return str("C_1 = ", th, hand_tq(sig4(hand_solver[n - 2]), RIGIDITY), ", \\qquad C_2 = ", tex_number(sig4(hand_solver[n - 1])), "\\ ", unit);
}

fn hand_rq(k: i64) -> i64 { return if hand_unk[k].kind == 1 { MOMENT } else { FORCE }; }
fn hand_rtext(k: i64) -> u8[>..] { return hand_vtext(hand_solver[k], hand_rq(k)); }

fn hand_first_unknown(kind: i64, r: i64) -> i64 {
    var k = 0;
    while k < hand_unk.len {
        if (kind < 0 || hand_unk[k].kind == kind) && (r < 0 || hand_unk[k].r == r) { return k; }
        k++;
    }
    return 0;
}

fn hand_authority_frame() {
    hs_text("Hand calculations: method, and how they relate to the solver");
    var r = 0;
    for s in g_sup { r += if s.kind == FIXED { 2 } else { 1 }; }
    let deg = hand_deg;
    let method = if deg == 0 { "equilibrium alone (sum of vertical forces and sum of moments)" } else { "compatibility, the force method, worked with Macaulay's double integration of EI v″ = M(x)" };
    hs_text("The direct stiffness solver is authoritative. These steps are a readable derivation of the same answer: every number shown is the solver's value at that step, written as this page writes it, and carrying the hand steps through reproduces it to the digits shown.");
    hs_eq(str("n = r - 2 = ", r, " - 2 = ", deg));
    if deg == 0 {
        hs_text(str("The beam is statically determinate, so the reactions follow from ", method, "."));
    } else {
        hs_text(str("The beam is statically indeterminate to degree ", deg, ". The reactions are found by ", method, ": two equilibrium equations, plus $v = 0$ at every support and $\\theta = 0$ at every fixed support, solved together with the two integration constants. The three-moment equation or slope-deflection would give the same reactions."));
    }
    hs_text(str("Units: ", UNIT_LABELS[hand_u], ". $x$ in ", hand_sym(LENGTH), ", measured from ", if hand_mid { "mid-span, negative to the left" } else { "the left end" }, "."));
    hs_text("Forces and distributed loads positive up; couples, slopes and support moments positive counter-clockwise.");
    hs_text("$V(x)$ is the sum of the upward forces left of the section; $M(x)$ is positive when sagging; $dM/dx = V$, $dV/dx = q$ and $EI\\,v'' = M$.");
    hs_text(str("$EI = ", hand_tq(sci(hand_ei), RIGIDITY), "$."));
}

fn hand_reaction_frames() {
    let deg = hand_deg;
    let n = hand_unk.len;
    let nr = hand_rea.len;
    if deg == 0 {
        let reference = hand_rea[0];
        let acts = hand_actions(reference.xi);
        var sum_f = 0.0;
        var sum_m = 0.0;
        for a in acts { sum_f = sum_f + a.f; }
        for a in acts { sum_m = sum_m + a.mo; }
        let s_f = snf(sum_f);
        let s_m = snf(sum_m);
        hs_text("Reactions by equilibrium");
        hs_text(str("Each load's vertical force and its moment about support 1 at x = ", sig4(reference.xi), " ", hand_sym(LENGTH), " (counter-clockwise positive; a distributed load acts through its resultant):"));
        hs_eq(str("\\sum_j F_j = ", hand_sum_of(acts, true, s_f), "\\ ", tex_unit(hand_sym(FORCE))));
        hs_eq(str("\\sum_j m_j = ", hand_sum_of(acts, false, s_m), "\\ ", tex_unit(hand_sym(MOMENT))));
        if nr == 2 {
            let k1 = hand_first_unknown(-1, 0);
            let k2 = hand_first_unknown(-1, 1);
            let span = sig4(hand_rea[1].xi - reference.xi);
            hs_text("Moments about support 1, where $R_1$ has no arm:");
            hs_eq(str("R_2 \\times ", hand_tex_p(span), " + \\sum_j m_j = 0 \\quad\\Rightarrow\\quad R_2 = -\\frac{", tex_number(s_m), "}{", tex_number(span), "} = ", hand_tq(hand_rtext(k2), FORCE)));
            hs_text("Vertical equilibrium then gives $R_1$:");
            hs_eq(str("R_1 + R_2 + \\sum_j F_j = 0 \\quad\\Rightarrow\\quad R_1 = -", hand_tex_p(s_f), " - ", hand_tex_p(hand_rtext(k2)), " = ", hand_tq(hand_rtext(k1), FORCE)));
        } else {
            let k_r = hand_first_unknown(0, -1);
            let k_m = hand_first_unknown(1, -1);
            hs_text("Vertical equilibrium and moments about the fixed support:");
            hs_eq(str("R_1 + \\sum_j F_j = 0 \\quad\\Rightarrow\\quad R_1 = -", hand_tex_p(s_f), " = ", hand_tq(hand_rtext(k_r), FORCE)));
            hs_eq(str("M_1 + \\sum_j m_j = 0 \\quad\\Rightarrow\\quad M_1 = -", hand_tex_p(s_m), " = ", hand_tq(hand_rtext(k_m), MOMENT)));
        }
        if acts.len > HAND_WRITE_TERMS { hs_text(str("The ", acts.len, " load terms are summed without being listed one by one.")); }
        return;
    }

    // Indeterminate: the written system, or its general form when too large to follow.
    var names: u8[>..] = [];
    var k = 0;
    while k < n {
        if k > 0 { names.append(", "); }
        names.append("$"); names.append(hand_uname(k)); names.append("$");
        k++;
    }
    if hand_written {
        hs_text(str("Compatibility: ", counted(n, "equation", "equations"), " in the reactions and two integration constants"));
    } else {
        hs_text(str("Compatibility: ", counted(n, "equation", "equations"), ", too many to write out"));
    }
    hs_text("Write the bending moment from every action left of $x$ with Macaulay brackets $\\langle x - a\\rangle^n$ (zero for $x < a$), integrate $EI\\,v'' = M$ twice, and impose equilibrium and the support conditions:");
    hs_eq("M(x) = \\sum_i R_i \\langle x - a_i\\rangle - \\sum_i M_i \\langle x - a_i\\rangle^{0} + M_{\\text{loads}}(x)");
    hs_eq("EI\\,v(x) = \\sum_i \\frac{R_i}{6} \\langle x - a_i\\rangle^{3} - \\sum_i \\frac{M_i}{2} \\langle x - a_i\\rangle^{2} + \\iint M_{\\text{loads}} + C_1 x + C_2");
    hs_text(str("Unknowns: ", names, ": ", counted(n, "unknown", "unknowns"), ", and as many equations."));
    if hand_written {
        hs_text("In numbers (coefficients to four significant figures):");
        var r = 0;
        while r < hand_rows.len {
            var lin: u8[>..] = [];
            k = 0;
            while k < n { hand_term(lin, hand_coef_at(r, k), hand_uname(k)); k++; }
            hand_zero_if_empty(lin);
            hs_eq(str(hand_row_label(r), ": \\quad ", lin, " = ", tex_number(sig4(hand_rhs[r]))));
            r++;
        }
    } else {
        hs_text(str("With ", n, " unknowns the system is not worth working by hand. Its rows are $\\sum F_y = 0$, $\\sum M = 0$, $EI\\,v(a_s) = 0$ at each of the ", nr, " supports and $EI\\,v'(a_s) = 0$ at each fixed support; the values below are the stiffness solver's solution of the same conditions."));
    }
    hs_text("Reactions from the compatibility equations");
    hs_text("Unknown | Value | Where");
    k = 0;
    while k < n {
        let u = hand_unk[k];
        if u.kind == 0 || u.kind == 1 {
            let re = hand_rea[u.r];
            hs_text(str("$", hand_uname(k), "$ | ", hand_rtext(k), " ", hand_sym(hand_rq(k)), " | ", if re.kind == PIN { "pin" } else { "fixed" }, " at x = ", sig4(re.xi), " ", hand_sym(LENGTH)));
        }
        k++;
    }
    hs_eq(hand_constants("", false));
    hs_text(if hand_written { "Solving the equations above reproduces these values, which are the solver's." } else { "These are the solver's values; the hand method above gives the same conditions." });
}

fn hand_deflection_frame() {
    let deg = hand_deg;
    let n = hand_unk.len;
    // Terms at the right end vanish everywhere on the beam, so they are left out.
    var all: HTerm[>..] = [];
    for t in hand_known { all.push(t); }
    for re in hand_rea {
        all.push(HTerm { k: re.fy, a: re.xi, p: 1 });
        all.push(HTerm { k: -re.mz, a: re.xi, p: 0 });
    }
    var terms: HTerm[>..] = [];
    for t in all { if t.k != 0.0 && t.a < hand_ends1 { terms.push(t); } }
    hs_text("Deflection and slope: double integration and boundary conditions");
    hs_text("Integrate $EI\\,v'' = M(x)$ twice. Each Macaulay term $c\\langle x - a\\rangle^n$ integrates to $c\\langle x - a\\rangle^{n+1}/(n+1)$, which keeps $\\theta$ and $v$ continuous at every support and load:");
    if terms.len > 0 && terms.len <= HAND_WRITE_TERMS {
        var lm: u8[>..] = [];
        for t in terms { hand_term(lm, t.k, hand_bracket(t.a, t.p)); }
        hand_zero_if_empty(lm);
        hs_eq(str("M(x) = ", lm));
        var lv: u8[>..] = [];
        for t in terms { hand_term(lv, t.k / (((t.p + 1) * (t.p + 2)) as f64), hand_bracket(t.a, t.p + 2)); }
        hand_zero_if_empty(lv);
        hs_eq(str("EI\\,v(x) = ", lv, " + C_1 x + C_2"));
    } else {
        hs_eq("EI\\,v(x) = \\iint M(x)\\,dx\\,dx + C_1 x + C_2");
    }
    var bcs: u8[>..] = [];
    var r = 2;
    while r < hand_rows.len {
        if r > 2 { bcs.append("; "); }
        bcs.append(str("$", hand_row_label(r), "$ (", hand_row_what(r), ")"));
        r++;
    }
    hs_text(str("Boundary conditions: ", bcs, "."));
    if deg == 0 {
        hs_text("With the reactions known, these give the two constants:");
        r = 2;
        while r < hand_rows.len {
            var rest = 0.0;
            var i = 0;
            while i < n - 2 { rest = rest + hand_coef_at(r, i) * hand_solver[i]; i++; }
            var lc: u8[>..] = [];
            hand_term(lc, hand_coef_at(r, n - 2), "C_1");
            hand_term(lc, hand_coef_at(r, n - 1), "C_2");
            hand_zero_if_empty(lc);
            hs_eq(str(hand_row_label(r), ": \\quad ", lc, " = ", tex_number(sig4(hand_rhs[r] - rest))));
            r++;
        }
    } else {
        hs_text("They are the compatibility rows above, solved with the reactions.");
    }
    hs_eq(hand_constants(tex_number(sig4(hand_ends0)), true));
    let t0 = hand_vtext(hand_segs[0].st, ANGLE);
    let v0 = hand_vtext(hand_segs[0].sd, LENGTH);
    hs_text(str("So at the left end $\\theta$ = ", t0, " rad and $v$ = ", v0, " ", hand_sym(LENGTH), "; each segment below starts from the slope and deflection the previous one ends with."));
}

fn hand_jump_name(j: HJump) -> u8[>..] {
    if j.kind == 0 { return str("R_{", j.n, "}"); }
    if j.kind == 1 { return str("M_{", j.n, "}"); }
    return if j.kind == 2 { str("P_{", j.n, "}") } else { str("C_{", j.n, "}") };
}

fn hand_table_row(name: u8[:], q: i64, s: f64, e: f64) {
    hs_text(str(name, " | ", hand_vtext(s, q), " | ", hand_vtext(e, q)));
}

fn hand_segment_frame(si: i64) {
    let seg = hand_segs[si];
    let l = hand_sym(LENGTH);
    let xa = sig4(seg.xa);
    let xb = sig4(seg.xb);
    let ht = sig4(seg.h);
    hs_text(str("Segment ", seg.index, ": x = ", xa, " to ", xb, " ", l));
    hs_text(str("Cut the beam at $x$ between ", xa, " and ", xb, " ", l, " and keep the part to the left of the cut, with $s = x - ", hand_tex_p(xa), "$ running from 0 to ", ht, " ", l, "."));
    // Start values: what the previous segment ends with, plus the jumps at x = a.
    let vs = hand_vtext(seg.sv, FORCE);
    let ms = hand_vtext(seg.sm, MOMENT);
    let at_text = str(tex_number(xa), "^{+}");
    let xa_tex = tex_number(xa);
    var vnames: u8[>..] = [];
    var vvals: u8[>..] = [];
    var mnames: u8[>..] = [];
    var mvals: u8[>..] = [];
    var nv = 0;
    var nm = 0;
    for j in hand_jumps {
        if j.seg != si { continue; }
        if j.moment {
            if nm > 0 { mnames.append(" - "); mvals.append(" - "); }
            mnames.append(hand_jump_name(j));
            mvals.append(hand_tex_p(hand_vtext(j.value, MOMENT)));
            nm++;
        } else {
            if nv > 0 { vnames.append(" + "); vvals.append(" + "); }
            vnames.append(hand_jump_name(j));
            vvals.append(hand_tex_p(hand_vtext(j.value, FORCE)));
            nv++;
        }
    }
    if nv == 0 {
        hs_eq(str("V(", at_text, ") = V(", xa_tex, "^{-}) = ", hand_tq(vs, FORCE)));
    } else {
        hs_eq(str("V(", at_text, ") = V(", xa_tex, "^{-}) + ", vnames, " = ", hand_tex_p(hand_vtext(seg.bv, FORCE)), " + ", vvals, " = ", hand_tq(vs, FORCE)));
    }
    if nm == 0 {
        hs_eq(str("M(", at_text, ") = M(", xa_tex, "^{-}) = ", hand_tq(ms, MOMENT)));
    } else {
        hs_eq(str("M(", at_text, ") = M(", xa_tex, "^{-}) - ", mnames, " = ", hand_tex_p(hand_vtext(seg.bm, MOMENT)), " - ", mvals, " = ", hand_tq(ms, MOMENT)));
    }
    // The section equations.
    let loaded = seg.qa != 0.0 || seg.k != 0.0;
    if loaded {
        let qc = [seg.qa, seg.k];
        hs_eq(str("q(s) = ", hand_poly(qc[0..2], seg.h), "\\ ", tex_unit(hand_sym(DISTRIBUTED))));
    } else {
        hs_text("No distributed load acts here, so $V$ is constant and $M$ is linear.");
    }
    hs_eq(str("V(s) = V(", at_text, ") + \\int_0^s q\\,ds = ", hand_poly(seg.poly[0..3], seg.h)));
    hs_eq(str("M(s) = M(", at_text, ") + \\int_0^s V\\,ds = ", hand_poly(seg.poly[3..7], seg.h)));
    hs_eq(str("EI\\,\\theta(s) = EI\\,\\theta(", xa_tex, ") + \\int_0^s M\\,ds = ", hand_poly(seg.poly[7..12], seg.h)));
    hs_eq(str("EI\\,v(s) = EI\\,v(", xa_tex, ") + \\int_0^s \\theta\\,EI\\,ds = ", hand_poly(seg.poly[12..18], seg.h)));
    // Values at both ends, as the solver gives them.
    hs_text(str("At | x = ", xa, "⁺ | x = ", xb, "⁻"));
    hand_table_row(str("V (", hand_sym(FORCE), ")"), FORCE, seg.sv, seg.ev);
    hand_table_row(str("M (", hand_sym(MOMENT), ")"), MOMENT, seg.sm, seg.em);
    hand_table_row("θ (rad)", ANGLE, seg.st, seg.et);
    hand_table_row(str("v (", l, ")"), LENGTH, seg.sd, seg.ed);
    for st in hand_stat {
        if st.seg != si { continue; }
        hs_text(str("$V = 0$ at $s$ = ", sig4(st.s), " ", l, " (x = ", sig4(hand_x(st.x)), " ", l, "), where $M$ is stationary: $M$ = ", hand_vtext(st.m, MOMENT), " ", hand_sym(MOMENT), "."));
    }
    if seg.qa * seg.qb < 0.0 {
        hs_text(str("$q = 0$ at $s$ = ", sig4(-seg.qa / seg.k), " ", l, ", where $V$ is stationary."));
    }
    if seg.support_at_end >= 0 {
        let sup = hand_rea[seg.support_at_end];
        let extra = if sup.kind == FIXED { str(" and $\\theta$ = ", hand_vtext(seg.et, ANGLE)) } else { str("") };
        hs_text(str("Support ", sup.i, " at x = ", xb, " ", l, ": $v$ = ", hand_vtext(seg.ed, LENGTH), extra, ", as the boundary condition requires."));
    }
}

fn hand_checks_frame() {
    hs_text(if g_m.section.has_c { "Bending stress and the equilibrium check" } else { "Equilibrium check" });
    if g_m.section.has_c {
        let fibre = g_m.section.c;
        let m_max = sig4(hand_show(g_ext.m.value, MOMENT));
        let cc = sig4(hand_show(fibre, LENGTH));
        let i = sci(hand_show(g_m.section.i, INERTIA));
        let stress = sig4(hand_show(abs(g_ext.m.value) * fibre / g_m.section.i, STRESS));
        hs_text(str("The largest moment is ", m_max, " ", hand_sym(MOMENT), " at x = ", hand_pos(g_ext.m.x), " ", hand_sym(LENGTH), "; the extreme fibre is $c$ = ", cc, " ", hand_sym(LENGTH), " from the neutral axis."));
        hs_eq(str("\\sigma_{\\max} = \\frac{|M|_{\\max}\\, c}{I} = \\frac{", tex_number(sig4(abs(hand_show(g_ext.m.value, MOMENT)))), " \\times ", tex_number(cc), "}{", tex_number(i), "} = ", hand_tq(stress, STRESS)));
    } else {
        hs_text("The section has no extreme-fibre distance $c$, so the bending stress $\\sigma = M c / I$ is not evaluated.");
    }
    let s_r = snf(hand_sum_r);
    let s_f = snf(hand_sum_f);
    let s_mr = snf(hand_sum_mr);
    let s_m = snf(hand_sum_m0);
    hs_text("Equilibrium of the whole beam, loads and reactions together (moments about the left end):");
    hs_eq(str("\\sum F_y = \\sum_i R_i + \\sum_j F_j = ", hand_tex_p(s_r), " + ", hand_tex_p(s_f), " \\approx 0"));
    hs_eq(str("\\sum M = \\sum_i (R_i\\,a_i + M_i) + \\sum_j m_j = ", hand_tex_p(s_mr), " + ", hand_tex_p(s_m), " \\approx 0"));
    hs_text(str("Relative error of the two sums: ", sci(hand_resid), "."));
}

fn hand_make_steps() {
    hand_steps.clear();
    hand_buf.clear();
    hs_text("Method and reactions");
    hand_authority_frame();
    hand_reaction_frames();
    hs_text("Shear, moment, slope and deflection by segment");
    hand_deflection_frame();
    var i = 0;
    while i < hand_segs.len { hand_segment_frame(i); i++; }
    hs_text("Stress and equilibrium");
    hand_checks_frame();
    hand_steps_ok = true;
}

// Derives the hand calculation unless it is current for this unit system and origin.
fn hand_ensure(u: i64, mid: bool) { if !hand_current(u, mid) { hand_derive(u, mid); } }

// The steps of the current derivation, built on first use.
fn hand_step_count() -> i64 {
    if !hand_steps_ok { hand_make_steps(); }
    return hand_steps.len;
}
fn hand_step_is_eq(i: i64) -> bool { return hand_steps[i].eq; }
// The text of a text step, or the LaTeX of an equation step.
fn hand_step_text(i: i64) -> u8[:] { let s = hand_steps[i]; return hand_buf[s.t0..s.t0 + s.tl]; }
// The unicode form of an equation step ("" for a text step).
fn hand_step_unicode(i: i64) -> u8[:] { let s = hand_steps[i]; return hand_buf[s.u0..s.u0 + s.ul]; }

// The steps as the page shows them: a paragraph for text, an equation block for LaTeX.
fn hand_steps_html() -> u8[>..] {
    var out: u8[>..] = [];
    let n = hand_step_count();
    var i = 0;
    while i < n {
        if hand_step_is_eq(i) {
            out.append(str("<div class=\"eq\" data-tex=\"", tex_esc(hand_step_text(i)), "\">", tex_esc(hand_step_unicode(i)), "</div>"));
        } else {
            out.append(str("<p>", tex_inline(hand_step_text(i)), "</p>"));
        }
        i++;
    }
    return out;
}

// ---------- the point at the cursor ----------

// The frame for the chosen x: paragraphs and equations only. Blocks are (eq, start, length) into hand_pt_buf.
var hand_pt: HStep[>..] = [];
var hand_pt_buf: u8[>..] = [];
var hand_pt_title: u8[>..] = [];

fn hp_add(is_eq: bool, s: u8[:]) {
    let t0 = hand_pt_buf.len;
    hand_pt_buf.append(s);
    hand_pt.push(HStep { eq: is_eq, t0: t0, tl: s.len, u0: 0, ul: 0 });
}

fn hand_pt_sub(out: u8[>..]&, seg: HSeg, off: i64, count: i64, st: u8[:]) {
    var n = 0;
    while n < count {
        let part = if n == 0 { str("") } else if n == 1 { str("(", tex_number(st), ")") } else { str("(", tex_number(st), ")^{", n, "}") };
        hand_term(out, seg.poly[off + n], part);
        n++;
    }
    hand_zero_if_empty(out);
}

// V, M, θ, v and σ at a chosen x (SI, measured from the left end), from the segment it lies in.
// The result is in hand_pt (blocks) and hand_pt_title.
fn hand_point_frame(x0: f64) {
    hand_pt.clear();
    hand_pt_buf.clear();
    hand_pt_title.clear();
    let l = hand_sym(LENGTH);
    let len = hand_len;
    let x = jmin(len, jmax(0.0, x0));
    var i = hand_segs.len - 1;
    var j = 0;
    while j < hand_segs.len {
        if x < hand_segs[j].b { i = j; break; }
        j++;
    }
    let seg = hand_segs[i];
    let on_start = x == seg.a && i > 0;
    let s = hand_show(x - seg.a, LENGTH);
    let xt = sig4(hand_x(x));
    let st = sig4(s);
    let a = at(x);
    let v = if x >= len { a.v_left } else { a.v_right };
    let m = if x >= len { a.m_left } else { a.m_right };
    let vt = hand_vtext(hand_show(v, FORCE), FORCE);
    let mt = hand_vtext(hand_show(m, MOMENT), MOMENT);
    let tt = hand_vtext(a.theta, ANGLE);
    let dt = hand_vtext(hand_show(a.v, LENGTH), LENGTH);
    hp_add(false, str("x = ", xt, " ", l, " lies in segment ", seg.index, " (x = ", sig4(seg.xa), " to ", sig4(seg.xb), " ", l, "), so $s = x - ", hand_tex_p(sig4(seg.xa)), "$ = ", st, " ", l, "."));
    if on_start {
        hp_add(false, str("A support or load acts here, so $V$ and $M$ can jump: just to the left they are ", hand_vtext(hand_show(a.v_left, FORCE), FORCE), " ", hand_sym(FORCE), " and ", hand_vtext(hand_show(a.m_left, MOMENT), MOMENT), " ", hand_sym(MOMENT), " (the end of segment ", seg.index - 1, "); the values below are just to the right."));
    }
    var lin: u8[>..] = [];
    hand_pt_sub(lin, seg, 0, 3, st);
    hp_add(true, str("V = ", lin, " = ", hand_tq(vt, FORCE)));
    lin.clear();
    hand_pt_sub(lin, seg, 3, 4, st);
    hp_add(true, str("M = ", lin, " = ", hand_tq(mt, MOMENT)));
    lin.clear();
    hand_pt_sub(lin, seg, 7, 5, st);
    hp_add(true, str("\\theta = \\frac{1}{EI}\\left(", lin, "\\right) = ", tex_number(tt), "\\ \\mathrm{rad}"));
    lin.clear();
    hand_pt_sub(lin, seg, 12, 6, st);
    hp_add(true, str("v = \\frac{1}{EI}\\left(", lin, "\\right) = ", hand_tq(dt, LENGTH)));
    if g_m.section.has_c {
        let sx = sig4(hand_show(abs(m) * g_m.section.c / g_m.section.i, STRESS));
        hp_add(true, str("\\sigma = \\frac{|M|\\,c}{I} = ", hand_tq(sx, STRESS)));
    }
    hand_pt_title.append(str("At the selected point x = ", xt, " ", l));
}

fn hand_pt_count() -> i64 { return hand_pt.len; }
fn hand_pt_is_eq(i: i64) -> bool { return hand_pt[i].eq; }
fn hand_pt_text(i: i64) -> u8[:] { let b = hand_pt[i]; return hand_pt_buf[b.t0..b.t0 + b.tl]; }

// The point frame as the cursor panel shows it: an article with a title, paragraphs and equations.
fn hand_point_html(x: f64) -> u8[>..] {
    hand_point_frame(x);
    var out: u8[>..] = [];
    out.append(str("<article class=\"calc\"><h4>", tex_esc(hand_pt_title), "</h4>"));
    var i = 0;
    while i < hand_pt.len {
        let t = hand_pt_text(i);
        if hand_pt[i].eq {
            out.append(str("<div class=\"eq\" role=\"math\" aria-label=\"", tex_esc(tex_text(t)), "\">", tex_html(t), "</div>"));
        } else {
            out.append(str("<p>", tex_inline(t), "</p>"));
        }
        i++;
    }
    out.append("</article>");
    return out;
}
