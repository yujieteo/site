// Linear-elastic Euler–Bernoulli beam, direct stiffness method.
//
// Units are SI throughout: m, N, N/m, N·m, Pa, m², m⁴. UNIT_IDS lists the consistent unit conventions a
// caller may enter and read values in; to_units and from_units convert at that edge, and the solver
// itself never sees anything but SI. Axes: x along the beam from its left end, +y up. Rotations and
// couples are counter-clockwise positive (+z out of the page).
// Loads: point force F (+ up), couple C (+ CCW), linearly varying distributed load q from x1 to x2
// (N/m, + up). Supports: a pin restrains deflection; a fixed support restrains deflection and slope.
// Internal forces use the usual beam convention: V(x) is the sum of the upward forces left of the
// section, M(x) is positive when sagging, dM/dx = V, dV/dx = q.
//
// The stiffness system uses two-node Hermite elements between the supports and the beam ends only,
// loaded by consistent (work-equivalent) nodal loads from every point force, couple and distributed
// load inside each element. Nodal deflections and support reactions are then exact, and statically
// indeterminate supports are solved without any equilibrium-only shortcut. V and M are recovered
// exactly by statics from the loads and the reactions, and deflection by integrating M/EI exactly
// from the nearest event on the left.
//
// The arithmetic follows the JavaScript engine it replaced operation for operation, so the numbers are
// the ones the page has always shown. Powers are correctly rounded: JavaScript's ** takes the
// platform's pow, whose last bit varies between systems.
//
// The beam being worked on is held in globals: the model (g_m, g_sup, g_loads) and its solution
// (g_rea, g_disp, g_eq, g_ext). A failure leaves its message and field in err_msg and err_field.

import std;
import math;
import .num;

let PI_ = 3.141592653589793;

// ---------- errors ----------

var err_msg: u8[>..] = [];
var err_field: u8[>..] = [];

// Records the failure and returns false, so a caller can `return fail(...)`.
fn fail(message: u8[:], field: u8[:]) -> bool {
    err_msg.clear();
    err_msg.append(message);
    err_field.clear();
    err_field.append(field);
    return false;
}

// ---------- arithmetic ----------

// a·b as an exact sum of two doubles (Dekker's product, no fused multiply-add needed).
fn split_hi(v: f64) -> f64 { let c = 134217729.0 * v; return c - (c - v); }

fn two_prod(a: f64, b: f64) -> f64, f64 {
    let p = a * b;
    if !finite(p) || p == 0.0 { return p, 0.0; }
    let ah = split_hi(a);
    let al = a - ah;
    let bh = split_hi(b);
    let bl = b - bh;
    return p, ((ah * bh - p) + ah * bl + al * bh) + al * bl;
}

// x^n (n >= 1) in double-double arithmetic: its rounding to one double is x^n correctly rounded.
fn dd_pow(x: f64, n: i64) -> f64, f64 {
    var h = x;
    var l = 0.0;
    var k = 1;
    while k < n {
        let p, e0 = two_prod(h, x);
        let e = e0 + l * x;
        let s = p + e;
        h = s;
        l = e - (s - p);
        k++;
    }
    return h, l;
}

// x^n for a whole n, correctly rounded (x·x for a square, as everywhere).
fn pw(x: f64, n: i64) -> f64 {
    if n == 0 { return 1.0; }
    if n == 1 { return x; }
    if n == 2 { return x * x; }
    if is_inf(x) || is_nan(x) || x == 0.0 { return pow(x, n as f64); }
    if n < 0 {
        let h, l = dd_pow(x, -n);
        if is_inf(h) || is_nan(h) || h == 0.0 { return 1.0 / h; }
        // 1 / (h + l), correctly rounded: q, then the remainder of 1 − q·(h + l).
        let q = 1.0 / h;
        let p, e = two_prod(q, h);
        return q + ((1.0 - p) - e - q * l) / h;
    }
    let h, l = dd_pow(x, n);
    return h;
}

// Math.max and Math.min, which give NaN when either side is NaN.
fn jmax(a: f64, b: f64) -> f64 { if is_nan(a) || is_nan(b) { return a + b; } return if a > b { a } else { b }; }
fn jmin(a: f64, b: f64) -> f64 { if is_nan(a) || is_nan(b) { return a + b; } return if a < b { a } else { b }; }

fn finite(x: f64) -> bool { return !is_nan(x) && !is_inf(x); }
fn is_whole(x: f64) -> bool { return x == trunc(x); }

// ---------- unit conventions ----------

let LENGTH = 0;
let FORCE = 1;
let STRESS = 2;
let MOMENT = 3;
let DISTRIBUTED = 4;
let AREA = 5;
let INERTIA = 6;
let RIGIDITY = 7;
let ANGLE = 8;

// A consistent unit system: each gives the SI size of one unit of every quantity, and stress is always
// force per length squared, so E·I/L³ and every other product stays in the system without extra
// factors. ASCII names the system in comments that should stay plain ASCII. The products are written as
// JavaScript computed them: lbf = 4.4482216152605 N and in = 0.0254 m, exactly by definition.
let UNIT_COUNT = 5;
let UNIT_IDS: const u8[:][5] = ["kN-m", "N-m", "N-mm", "lbf-in", "kip-in"];
let UNIT_LABELS: const u8[:][5] = ["SI: kN, m, kPa", "SI: N, m, Pa", "SI: N, mm, MPa", "US customary: lbf, in, psi", "US customary: kip, in, ksi"];
let UNIT_ASCII: const u8[:][5] = ["kN, m, kPa (kN/m2)", "N, m, Pa (N/m2)", "N, mm, MPa (N/mm2)", "lbf, in, psi (lbf/in2)", "kip, in, ksi (kip/in2)"];
let UNIT_FACTOR: f64[45] = [
    1.0, 1e3, 1e3, 1e3, 1e3, 1.0, 1.0, 1e3, 1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    0.001, 1.0, 1e6, 0.001, 1000.0, 0.000001, 1.0000000000000002e-12, 0.000001, 1.0,
    0.0254, 4.4482216152605, 6894.757293168361, 0.11298482902761668, 175.12683524647636, 0.00064516, 4.162314255999999e-7, 0.0028698146573014637, 1.0,
    0.0254, 4448.2216152605, 6894757.293168361, 112.98482902761668, 175126.83524647637, 0.00064516, 4.162314255999999e-7, 2.869814657301464, 1.0,
];
let UNIT_SYMBOL: const u8[:][45] = [
    "m", "kN", "kPa", "kN·m", "kN/m", "m²", "m⁴", "kN·m²", "rad",
    "m", "N", "Pa", "N·m", "N/m", "m²", "m⁴", "N·m²", "rad",
    "mm", "N", "MPa", "N·mm", "N/mm", "mm²", "mm⁴", "N·mm²", "rad",
    "in", "lbf", "psi", "lbf·in", "lbf/in", "in²", "in⁴", "lbf·in²", "rad",
    "in", "kip", "ksi", "kip·in", "kip/in", "in²", "in⁴", "kip·in²", "rad",
];
let QUANTITY_NAMES: const u8[:][9] = ["length", "force", "stress", "moment", "distributed", "area", "inertia", "rigidity", "angle"];
let DEFAULT_UNITS = "N-mm";
let SI = 1;

fn unit_factor(u: i64, q: i64) -> f64 { return UNIT_FACTOR[u * 9 + q]; }
fn unit_symbol(u: i64, q: i64) -> const u8[:] { return UNIT_SYMBOL[u * 9 + q]; }
// The index of the unit system with this id, or -1.
fn unit_index(id: u8[:]) -> i64 {
    var i = 0;
    while i < UNIT_COUNT { if UNIT_IDS[i] == id { return i; } i++; }
    return -1;
}
// An SI value in unit u, and back.
fn to_units(v: f64, q: i64, u: i64) -> f64 { return v / unit_factor(u, q); }
fn from_units(v: f64, q: i64, u: i64) -> f64 { return v * unit_factor(u, q); }

// ---------- the model ----------

let PIN = 0;
let FIXED = 1;
let POINT = 0;
let COUPLE = 1;
let DIST = 2;

struct Support { kind: i64, x: f64 }

// A load of any kind: the fields its kind does not use are ignored. A bad kind from the page is -1.
struct Load { kind: i64, x: f64, f: f64, c: f64, x1: f64, x2: f64, q1: f64, q2: f64 }

struct Section { a: f64, i: f64, iy: f64, j: f64, c: f64, has_c: bool }

struct Model { length: f64, e: f64, nu: f64, section: Section, divisions: i64 }

// An unchecked model, as it comes from the page, a WebMCP tool or a test: NaN stands for a value that
// is missing or not a number, a has_ flag false for one left out (which takes its default).
struct Input {
    length: f64, e: f64, nu: f64, a: f64, i: f64,
    iy: f64, has_iy: bool, j: f64, has_j: bool, c: f64, has_c: bool,
    divisions: f64, has_divisions: bool, has_supports: bool, has_loads: bool,
}

var in_x: Input;
var in_sup: Support[>..] = [];
var in_loads: Load[>..] = [];

var g_m: Model;
var g_sup: Support[>..] = [];
var g_loads: Load[>..] = [];

// A whole number written as JavaScript's String, else six significant figures.
fn fmt(x: f64) -> u8[>..] {
    if finite(x) && x == trunc(x) { return js(x); }
    return js(prec(x, 6));
}

// A length in unit u with its symbol, as messages quote it.
fn length_text(u: i64, x: f64) -> u8[>..] {
    var out = fmt(to_units(x, LENGTH, u));
    out.append(" ");
    out.append(unit_symbol(u, LENGTH));
    return out;
}

fn number(v: f64, label: u8[:], field: u8[:], positive: bool) -> bool {
    if !finite(v) { return fail(str(label, " must be a finite number."), field); }
    if positive && !(v > 0.0) { return fail(str(label, " must be greater than zero."), field); }
    return true;
}

// Check and normalise the input in in_x, in_sup and in_loads into g_m, g_sup and g_loads. The error
// names the offending field. u only sets how lengths are written in the messages.
fn validate(u: i64) -> bool {
    let input = in_x;
    if !number(input.length, "Beam length", "length", true) { return false; }
    let length = input.length;
    if length < 1e-3 || length > 1e4 {
        return fail(str("Beam length must be between ", length_text(u, 1e-3), " and ", length_text(u, 1e4), "."), "length");
    }
    if !number(input.e, "Young's modulus E", "material.E", true) { return false; }
    let e = input.e;
    if !number(input.nu, "Poisson's ratio ν", "material.nu", false) { return false; }
    let nu = input.nu;
    if !(nu > -1.0 && nu < 0.5) { return fail("Poisson's ratio ν must be greater than −1 and less than 0.5.", "material.nu"); }
    if !number(input.a, "Section area A", "section.A", true) { return false; }
    let a = input.a;
    if !number(input.i, "Second moment of area I", "section.I", true) { return false; }
    let i = input.i;
    let iy = if input.has_iy { input.iy } else { i };
    if !number(iy, "Out-of-plane second moment Iy", "section.Iy", true) { return false; }
    let j = if input.has_j { input.j } else { 2.0 * i };
    if !number(j, "Torsion constant J", "section.J", true) { return false; }
    var c = 0.0;
    if input.has_c {
        c = input.c;
        if !number(c, "Extreme-fibre distance c", "section.c", true) { return false; }
    }
    if !finite(e * i) || e * i <= 0.0 { return fail("Flexural rigidity EI overflows; check the units of E and I.", "section.I"); }
    let divisions = if input.has_divisions { input.divisions } else { 4.0 };
    if !(finite(divisions) && divisions == trunc(divisions)) || divisions < 1.0 {
        return fail("Elements per segment must be a whole number, at least 1.", "divisions");
    }
    if !input.has_supports || in_sup.len == 0 { return fail("Add at least one support.", "supports"); }
    g_sup.clear();
    var n = 0;
    for s in in_sup {
        if s.kind < 0 {
            return fail(str("Support ", n + 1, " must be a pin or fixed support."), str("supports.", n, ".kind"));
        }
        if !at_number(s.x, str("Support ", n + 1, " position"), str("supports.", n, ".x"), length, u) { return false; }
        g_sup.push(Support { kind: s.kind, x: s.x });
        n++;
    }
    var sorted: f64[>..] = [];
    for s in g_sup { sorted.push(s.x); }
    sort(sorted);
    var k = 1;
    while k < sorted.len {
        if sorted[k] == sorted[k - 1] {
            return fail(str("Two supports share the position x = ", length_text(u, sorted[k]), "."), "supports");
        }
        k++;
    }
    // With only pins and fixed supports the structure is stable exactly when it has a fixed support or
    // two separate pins; anything less can move rigidly.
    var any_fixed = false;
    for s in g_sup { if s.kind == FIXED { any_fixed = true; } }
    if !any_fixed && g_sup.len < 2 {
        return fail("Mechanism: a single pin lets the beam rotate freely. Add a second support or make it fixed.", "supports");
    }
    if !input.has_loads { return fail("Loads must be a list.", "loads"); }
    g_loads.clear();
    n = 0;
    for l in in_loads {
        let label = str("Load ", n + 1);
        if l.kind == POINT {
            if !at_number(l.x, str(label, " position"), str("loads.", n, ".x"), length, u) { return false; }
            if !number(l.f, str(label, " force"), str("loads.", n, ".F"), false) { return false; }
            g_loads.push(Load { kind: POINT, x: l.x, f: l.f, c: 0.0, x1: 0.0, x2: 0.0, q1: 0.0, q2: 0.0 });
        } else if l.kind == COUPLE {
            if !at_number(l.x, str(label, " position"), str("loads.", n, ".x"), length, u) { return false; }
            if !number(l.c, str(label, " couple"), str("loads.", n, ".C"), false) { return false; }
            g_loads.push(Load { kind: COUPLE, x: l.x, f: 0.0, c: l.c, x1: 0.0, x2: 0.0, q1: 0.0, q2: 0.0 });
        } else if l.kind == DIST {
            if !at_number(l.x1, str(label, " start"), str("loads.", n, ".x1"), length, u) { return false; }
            if !at_number(l.x2, str(label, " end"), str("loads.", n, ".x2"), length, u) { return false; }
            if !(l.x2 > l.x1) { return fail(str(label, " must end to the right of where it starts."), str("loads.", n, ".x2")); }
            if !number(l.q1, str(label, " start intensity"), str("loads.", n, ".q1"), false) { return false; }
            if !number(l.q2, str(label, " end intensity"), str("loads.", n, ".q2"), false) { return false; }
            g_loads.push(Load { kind: DIST, x: 0.0, f: 0.0, c: 0.0, x1: l.x1, x2: l.x2, q1: l.q1, q2: l.q2 });
        } else {
            return fail(str(label, " must be a point force, a couple or a distributed load."), str("loads.", n, ".kind"));
        }
        n++;
    }
    let dv = if divisions < 1e9 { divisions } else { 1e9 };
    g_m = Model { length: length, e: e, nu: nu,
        section: Section { a: a, i: i, iy: iy, j: j, c: c, has_c: input.has_c },
        divisions: dv as i64 };
    var ev: f64[>..] = [];
    return events(g_m, g_sup, g_loads, u, ev);
}

// A position on the beam: finite, between 0 and its length.
fn at_number(v: f64, label: u8[:], field: u8[:], length: f64, u: i64) -> bool {
    if !number(v, label, field, false) { return false; }
    if v < 0.0 || v > length {
        return fail(str(label, " must lie on the beam, between 0 and ", length_text(u, length), "."), field);
    }
    return true;
}

// Distinct values in increasing order, as [...new Set(xs)].sort((a, b) => a - b) (−0 is 0).
fn distinct(xs: f64[>..]&) {
    sort(xs);
    dedup(xs);
}

// Positions where something happens: ends, supports, point actions, load ends. False, with the error
// set, when two are too close together.
fn events(m: Model&, sup: Support[:], loads: Load[:], u: i64, out: f64[>..]&) -> bool {
    out.clear();
    out.push(0.0);
    out.push(m.length);
    for s in sup { out.push(s.x); }
    for l in loads {
        if l.kind == DIST { out.push(l.x1); out.push(l.x2); } else { out.push(l.x); }
    }
    distinct(out);
    var k = 1;
    while k < out.len {
        if out[k] - out[k - 1] < 1e-6 * m.length {
            return fail(str("Positions ", length_text(u, out[k - 1]), " and ", length_text(u, out[k]),
                " are too close together; make them equal or separate them."), "loads");
        }
        k++;
    }
    return true;
}

// The NASTRAN mesh: every event, and divisions elements between consecutive ones.
fn mesh(out: f64[>..]&) {
    var ev: f64[>..] = [];
    events(g_m, g_sup, g_loads, SI, ev);
    out.clear();
    out.push(ev[0]);
    var i = 1;
    while i < ev.len {
        var j = 1;
        while j < g_m.divisions {
            out.push(ev[i - 1] + (ev[i] - ev[i - 1]) * (j as f64) / (g_m.divisions as f64));
            j++;
        }
        out.push(ev[i]);
        i++;
    }
}

let LEFT = 0;
let RIGHT = 1;

// Distributed-load intensity at x, taking the load starting at x (RIGHT) or ending there (LEFT).
fn intensity(loads: Load[:], x: f64, side: i64) -> f64 {
    var q = 0.0;
    for l in loads {
        if l.kind == DIST {
            let inside = if side == RIGHT { x >= l.x1 && x < l.x2 } else { x > l.x1 && x <= l.x2 };
            if inside { q += l.q1 + (l.q2 - l.q1) * (x - l.x1) / (l.x2 - l.x1); }
        }
    }
    return q;
}

// Re-express a value in unit u (back converts the other way); round keeps 15 significant figures.
fn scale_value(v: f64, q: i64, u: i64, back: bool, round: bool) -> f64 {
    let w = if back { from_units(v, q, u) } else { to_units(v, q, u) };
    return if round { prec(w, 15) } else { w };
}

// ---------- the stiffness solution ----------

// Beam DOFs only couple within one element, so a symmetric banded row keeps K[i][i..=i+BAND], BAND = 3.
// The band is stored flat, four to a row.

fn entry(k: f64[:], i: i64, j: i64) -> f64 {
    let d = if i > j { i - j } else { j - i };
    if d > 3 { return 0.0; }
    return if i <= j { k[i * 4 + (j - i)] } else { k[j * 4 + (i - j)] };
}

fn singular() -> bool { return fail("The stiffness matrix is singular: the supports do not hold the beam in place.", "supports"); }

// Solve K u = f for symmetric positive definite banded K by LDLᵀ elimination. The system is first
// scaled to a unit diagonal, which makes the pivot test independent of units and element lengths; a
// vanishing scaled pivot means a mechanism. The result goes in sol.
fn solve_banded(k: f64[:], f: f64[:], sol: f64[>..]&) -> bool {
    let n = f.len;
    var d: f64[>..] = [];
    var r = 0;
    while r < n {
        let v = 1.0 / sqrt(k[r * 4]);
        if !(v > 0.0 && finite(v)) { return singular(); }
        d.push(v);
        r++;
    }
    var a: f64[>..] = [];
    r = 0;
    while r < n {
        var kk = 0;
        while kk < 4 {
            a.push(if r + kk < n { k[r * 4 + kk] * d[r] * d[r + kk] } else { 0.0 });
            kk++;
        }
        r++;
    }
    var u: f64[>..] = [];
    r = 0;
    while r < n { u.push(f[r] * d[r]); r++; }
    var c = 0;
    while c < n {
        if !(a[c * 4] > 1e-12) { return singular(); }
        let top = min(n - 1, c + 3);
        r = c + 1;
        while r <= top {
            let m = a[c * 4 + (r - c)] / a[c * 4];
            if m != 0.0 {
                var kk = r;
                while kk <= top {
                    a[r * 4 + (kk - r)] -= m * a[c * 4 + (kk - c)];
                    kk++;
                }
                u[r] -= m * u[c];
            }
            r++;
        }
        c++;
    }
    r = n - 1;
    while r >= 0 {
        var s = u[r];
        var kk = r + 1;
        let top = min(n - 1, r + 3);
        while kk <= top {
            s -= a[r * 4 + (kk - r)] * u[kk];
            kk++;
        }
        u[r] = s / a[r * 4];
        r--;
    }
    sol.clear();
    r = 0;
    while r < n { sol.push(u[r] * d[r]); r++; }
    return true;
}

// Hermite shape functions on an element of length l at ξ ∈ [0, 1] (values and x-derivatives), ordered
// v_i, θ_i, v_j, θ_j.
fn hermite(l: f64, t: f64) -> f64[4] {
    return [1.0 - 3.0 * t * t + 2.0 * pw(t, 3), l * (t - 2.0 * t * t + pw(t, 3)), 3.0 * t * t - 2.0 * pw(t, 3), l * (pw(t, 3) - t * t)];
}
fn hermite_slope(l: f64, t: f64) -> f64[4] {
    return [(6.0 * t * t - 6.0 * t) / l, 1.0 - 4.0 * t + 3.0 * t * t, (6.0 * t - 6.0 * t * t) / l, 3.0 * t * t - 2.0 * t];
}
let GAUSS5_X: f64[5] = [-0.9061798459386640, -0.5384693101056831, 0.0, 0.5384693101056831, 0.9061798459386640];
let GAUSS5_W: f64[5] = [0.2369268850561891, 0.4786286704993665, 0.5688888888888889, 0.4786286704993665, 0.2369268850561891];

struct Reaction { kind: i64, x: f64, fy: f64, mz: f64 }
struct Displacement { x: f64, v: f64, theta: f64 }
struct Equilibrium { fy: f64, mz: f64, scale_f: f64, scale_m: f64 }
struct Extreme { x: f64, value: f64 }
struct Extremes { v_shear: Extreme, m: Extreme, v: Extreme }

// A solved beam: the reactions in order of x, the deflection and slope at every event, the
// out-of-balance of loads and reactions, and the largest V, M and v.
var g_rea: Reaction[>..] = [];
var g_disp: Displacement[>..] = [];
var g_eq: Equilibrium;
var g_ext: Extremes;

// The element with stations[e] < x < stations[e + 1].
fn element(stations: f64[:], x: f64) -> i64 {
    var lo = 0;
    var hi = stations.len - 2;
    while lo < hi {
        let mid = (lo + hi + 1) >> 1;
        if stations[mid] < x { lo = mid; } else { hi = mid - 1; }
    }
    return lo;
}

// The index of the station at x, or -1.
fn station_index(stations: f64[:], x: f64) -> i64 {
    var i = 0;
    while i < stations.len { if stations[i] == x { return i; } i++; }
    return -1;
}

fn spread(f: f64[>..]&, e: i64, w: f64[4], value: f64) {
    var i = 0;
    while i < 4 { f[2 * e + i] += w[i] * value; i++; }
}

// Solves the model in in_x, in_sup and in_loads, and leaves the answer in the globals.
fn solve(u: i64) -> bool {
    if !validate(u) { return false; }
    let ei = g_m.e * g_m.section.i;
    // Stiffness stations: the ends and every support. Loads between them enter as consistent nodal loads.
    var stations: f64[>..] = [];
    stations.push(0.0);
    stations.push(g_m.length);
    for s in g_sup { stations.push(s.x); }
    distinct(stations);
    let ns = stations.len;
    let n = ns * 2;
    var k: f64[>..] = [];
    var f: f64[>..] = [];
    var z = 0;
    while z < n * 4 { k.push(0.0); z++; }
    z = 0;
    while z < n { f.push(0.0); z++; }
    var e = 0;
    while e < ns - 1 {
        let l = stations[e + 1] - stations[e];
        let s = ei / pw(l, 3);
        let ke: f64[16] = [12.0, 6.0 * l, -12.0, 6.0 * l, 6.0 * l, 4.0 * l * l, -6.0 * l, 2.0 * l * l,
            -12.0, -6.0 * l, 12.0, -6.0 * l, 6.0 * l, 2.0 * l * l, -6.0 * l, 4.0 * l * l];
        var i = 0;
        while i < 4 {
            var j = i;
            while j < 4 { k[(2 * e + i) * 4 + (j - i)] += s * ke[i * 4 + j]; j++; }
            i++;
        }
        e++;
    }
    for ld in g_loads {
        if ld.kind == DIST {
            // ∫ N q dx over each element's share of the load: N is cubic and q linear, so 5-point Gauss is exact.
            var el = 0;
            while el < ns - 1 {
                let a = stations[el];
                let l = stations[el + 1] - stations[el];
                let lo = jmax(a, ld.x1);
                let hi = jmin(a + l, ld.x2);
                if hi > lo {
                    var gi = 0;
                    while gi < 5 {
                        let g = GAUSS5_X[gi];
                        let w = GAUSS5_W[gi];
                        let x = lo + (hi - lo) * (g + 1.0) / 2.0;
                        let q = ld.q1 + (ld.q2 - ld.q1) * (x - ld.x1) / (ld.x2 - ld.x1);
                        spread(f, el, hermite(l, (x - a) / l), w * q * (hi - lo) / 2.0);
                        gi++;
                    }
                }
                el++;
            }
        } else {
            let point = ld.kind == POINT;
            let value = if point { ld.f } else { ld.c };
            let i = station_index(stations, ld.x);
            if i >= 0 {
                let slot = if point { 0 } else { 1 };
                f[2 * i + slot] += value;
            } else {
                let el = element(stations, ld.x);
                let a = stations[el];
                let l = stations[el + 1] - stations[el];
                let t = (ld.x - a) / l;
                spread(f, el, if point { hermite(l, t) } else { hermite_slope(l, t) }, value);
            }
        }
    }
    var fixed: bool[>..] = [];
    z = 0;
    while z < n { fixed.push(false); z++; }
    for s in g_sup {
        let i = station_index(stations, s.x);
        fixed[2 * i] = true;
        if s.kind == FIXED { fixed[2 * i + 1] = true; }
    }
    // Dropping constrained DOFs keeps the free system banded with the same band.
    var free: i64[>..] = [];
    z = 0;
    while z < n { if !fixed[z] { free.push(z); } z++; }
    var sol: f64[>..] = [];
    z = 0;
    while z < n { sol.push(0.0); z++; }
    if free.len > 0 {
        var kf: f64[>..] = [];
        var a = 0;
        while a < free.len {
            var b = a;
            while b < a + 4 {
                kf.push(if b < free.len { entry(k, free[a], free[b]) } else { 0.0 });
                b++;
            }
            a++;
        }
        var ff: f64[>..] = [];
        for i in free { ff.push(f[i]); }
        var us: f64[>..] = [];
        if !solve_banded(kf, ff, us) { return false; }
        a = 0;
        while a < free.len { sol[free[a]] = us[a]; a++; }
    }
    for v in sol {
        if !finite(v) { return fail("The solution overflowed; check that E, I and the loads use consistent units.", "section.I"); }
    }
    g_rea.clear();
    for s in g_sup {
        let i = station_index(stations, s.x);
        g_rea.push(Reaction { kind: s.kind, x: s.x, fy: residual(k, f, sol, n, 2 * i),
            mz: if s.kind == FIXED { residual(k, f, sol, n, 2 * i + 1) } else { 0.0 } });
    }
    stable_sort(g_rea) { p, q => p.x < q.x };
    // Deflection at every event: stations take the solved values; other events integrate M/EI exactly
    // from the previous event (nothing happens strictly between two events).
    g_disp.clear();
    var ev: f64[>..] = [];
    events(g_m, g_sup, g_loads, SI, ev);
    for x in ev {
        // x = 0 is a station, so every other event has one before it.
        let i = station_index(stations, x);
        if i >= 0 {
            g_disp.push(Displacement { x: x, v: sol[2 * i], theta: sol[2 * i + 1] });
        } else {
            let v, theta = integrate(g_disp[g_disp.len - 1], x);
            g_disp.push(Displacement { x: x, v: v, theta: theta });
        }
    }
    g_eq = equilibrium();
    g_ext = extremes();
    return true;
}

fn residual(k: f64[:], f: f64[:], sol: f64[:], n: i64, i: i64) -> f64 {
    var s = -f[i];
    var j = if i > 3 { i - 3 } else { 0 };
    let top = min(n - 1, i + 3);
    while j <= top { s += entry(k, i, j) * sol[j]; j++; }
    return s;
}

// Resultant force and moment about x = 0 of all loads and reactions (they should vanish).
fn equilibrium() -> Equilibrium {
    var q = Equilibrium { fy: 0.0, mz: 0.0, scale_f: 0.0, scale_m: 0.0 };
    for re in g_rea { eq_add(q, re.fy, re.x, re.mz); }
    for l in g_loads {
        if l.kind == POINT {
            eq_add(q, l.f, l.x, 0.0);
        } else if l.kind == COUPLE {
            eq_add(q, 0.0, 0.0, l.c);
        } else {
            // A trapezoid is two triangles: q1 peaking at x1 and q2 peaking at x2.
            let b = l.x2 - l.x1;
            eq_add(q, l.q1 * b / 2.0, l.x1 + b / 3.0, 0.0);
            eq_add(q, l.q2 * b / 2.0, l.x1 + 2.0 * b / 3.0, 0.0);
        }
    }
    return q;
}

fn eq_add(q: Equilibrium&, f: f64, x: f64, c: f64) {
    q.fy += f;
    q.mz += f * x + c;
    q.scale_f += abs(f);
    q.scale_m += abs(f * x) + abs(c);
}

// Exact V and M at x from the left free body: LEFT gives the limit x⁻, RIGHT gives x⁺.
fn internal(x: f64, side: i64) -> f64, f64 {
    return internal_of(g_rea, g_loads, x, side);
}

fn internal_of(rea: Reaction[:], loads: Load[:], x: f64, side: i64) -> f64, f64 {
    var v = 0.0;
    var m = 0.0;
    for re in rea {
        if (if side == RIGHT { re.x <= x } else { re.x < x }) {
            v += re.fy;
            m += re.fy * (x - re.x) - re.mz;
        }
    }
    for l in loads {
        if l.kind == POINT {
            if (if side == RIGHT { l.x <= x } else { l.x < x }) {
                v += l.f;
                m += l.f * (x - l.x);
            }
        } else if l.kind == COUPLE {
            if (if side == RIGHT { l.x <= x } else { l.x < x }) { m -= l.c; }
        } else if x > l.x1 {
            let b = jmin(x, l.x2) - l.x1;
            let s = (l.q2 - l.q1) / (l.x2 - l.x1);
            let qb = l.q1 + s * b;     // intensity at the end of the loaded part
            v += (l.q1 + qb) * b / 2.0;
            // Rectangle q1 plus triangle (qb − q1), each about the section at x.
            m += l.q1 * b * (x - l.x1 - b / 2.0) + (qb - l.q1) * b / 2.0 * (x - l.x1 - 2.0 * b / 3.0);
        }
    }
    return v, m;
}

// Deflection and slope at x: values at the events, integrated exactly from M/EI between them.
fn deflection(x: f64) -> f64, f64 {
    // The segment containing x: the last one whose start is at or before x.
    var lo = 0;
    var hi = g_disp.len - 2;
    while lo < hi {
        let mid = (lo + hi + 1) >> 1;
        if g_disp[mid].x <= x { lo = mid; } else { hi = mid - 1; }
    }
    if x == g_disp[lo + 1].x { return g_disp[lo + 1].v, g_disp[lo + 1].theta; }
    return integrate(g_disp[lo], x);
}

let GAUSS3_X: f64[3] = [-0.7745966692414834, 0.0, 0.7745966692414834];
let GAUSS3_W: f64[3] = [5.0 / 9.0, 8.0 / 9.0, 5.0 / 9.0];

// v and θ at x from their values at an earlier point with no event between: θ' = M/EI, v' = θ. M is
// at most cubic there, so 3-point Gauss integrates M and (x − t)M exactly.
fn integrate(from: Displacement, x: f64) -> f64, f64 {
    let ei = g_m.e * g_m.section.i;
    let x0 = from.x;
    let s = x - from.x;
    if s == 0.0 { return from.v, from.theta; }
    var dv = 0.0;
    var dt = 0.0;
    var gi = 0;
    while gi < 3 {
        let t = s * (GAUSS3_X[gi] + 1.0) / 2.0;
        let sv, m = internal(x0 + t, RIGHT);
        dt += GAUSS3_W[gi] * m;
        dv += GAUSS3_W[gi] * (s - t) * m;
        gi++;
    }
    return from.v + from.theta * s + dv * s / 2.0 / ei, from.theta + dt * s / 2.0 / ei;
}

// Values at x with both one-sided limits of V and M.
struct At { x: f64, v_left: f64, v_right: f64, m_left: f64, m_right: f64, v: f64, theta: f64 }

fn at(x: f64) -> At {
    let l = g_m.length;
    var vl = 0.0;
    var ml = 0.0;
    var vr = 0.0;
    var mr = 0.0;
    if x > 0.0 { vl, ml = internal(x, LEFT); }
    if x < l { vr, mr = internal(x, RIGHT); }
    let v, theta = deflection(x);
    return At { x: x, v_left: vl, v_right: vr, m_left: ml, m_right: mr, v: v, theta: theta };
}

// One point of the diagrams.
struct Sample { x: f64, shear: f64, m: f64, v: f64, theta: f64 }

// Mesh-independent plot samples: about count regular points plus per-segment critical points and
// event limits. Each segment runs from its right limit at the start to its left limit at the end, so
// jumps appear as two points at the same x.
fn diagram(count: i64, pts: Sample[>..]&) {
    pts.clear();
    let l = g_m.length;
    let at0v, at0t = deflection(0.0);
    pts.push(Sample { x: 0.0, shear: 0.0, m: 0.0, v: at0v, theta: at0t });
    var e = 0;
    while e < g_disp.len - 1 {
        let a = g_disp[e].x;
        let b = g_disp[e + 1].x;
        let nf = jmax(2.0, ceil((count as f64) * (b - a) / l));
        let n = nf as i64;
        var xs: f64[>..] = [];
        critical_points(a, b, xs);
        var j = 0;
        while j <= n {
            xs.push(if j == n { b } else { a + (b - a) * (j as f64) / (n as f64) });
            j++;
        }
        distinct(xs);
        for x in xs {
            let shear, m = internal(x, if x == b { LEFT } else { RIGHT });
            let v, theta = deflection(x);
            pts.push(Sample { x: x, shear: shear, m: m, v: v, theta: theta });
        }
        e++;
    }
    // Close the diagrams to zero at the free ends of the beam.
    let atlv, atlt = deflection(l);
    pts.push(Sample { x: l, shear: 0.0, m: 0.0, v: atlv, theta: atlt });
}

fn moment_at(x: f64, b: f64) -> f64 {
    let sv, m = internal(x, if x == b { LEFT } else { RIGHT });
    return m;
}

fn slope_at(x: f64) -> f64 {
    let v, t = deflection(x);
    return t;
}

fn bisect(lo0: f64, hi0: f64, b: f64, slope: bool) -> f64 {
    var lo = lo0;
    var hi = hi0;
    var vlo = if slope { slope_at(lo) } else { moment_at(lo, b) };
    var k = 0;
    while k < 60 {
        let mid = (lo + hi) / 2.0;
        if mid == lo || mid == hi { break; }
        let vmid = if slope { slope_at(mid) } else { moment_at(mid, b) };
        if vmid == 0.0 { return mid; }
        if vlo * vmid < 0.0 { hi = mid; } else { lo = mid; vlo = vmid; }
        k++;
    }
    return (lo + hi) / 2.0;
}

fn critical_points(a: f64, b: f64, xs: f64[>..]&) {
    let h = b - a;
    xs.push(a);
    xs.push(b);
    let ra0, ra1 = internal(a, RIGHT);
    let qa = intensity(g_loads, a, RIGHT);
    let qb = intensity(g_loads, b, LEFT);
    // q is linear and V quadratic inside a segment: V(s) = C + B s + A s².
    let aa = (qb - qa) / (2.0 * h);
    let bb = qa;
    let cc = ra0;
    if qa * qb < 0.0 { xs.push(a + qa / (qa - qb) * h); }
    var roots: f64[>..] = [];
    if abs(aa) < 1e-300 {
        if bb != 0.0 { roots.push(-cc / bb); }
    } else {
        let disc = bb * bb - 4.0 * aa * cc;
        if !(disc < 0.0) {
            roots.push((-bb + sqrt(disc)) / (2.0 * aa));
            roots.push((-bb - sqrt(disc)) / (2.0 * aa));
        }
    }
    var shear_roots: f64[>..] = [];
    for s in roots { if s > 0.0 && s < h { shear_roots.push(a + s); } }
    stable_sort(shear_roots);
    for s in shear_roots { xs.push(s); }
    var moment_roots: f64[>..] = [];
    var parts: f64[>..] = [];
    parts.push(a);
    for s in shear_roots { parts.push(s); }
    parts.push(b);
    var p = 0;
    while p < parts.len - 1 {
        let lo = parts[p];
        let hi = parts[p + 1];
        if moment_at(lo, b) == 0.0 { moment_roots.push(lo); }
        if moment_at(lo, b) * moment_at(hi, b) < 0.0 { moment_roots.push(bisect(lo, hi, b, false)); }
        p++;
    }
    var slope_parts: f64[>..] = [];
    slope_parts.push(a);
    for x in moment_roots { if x > a && x < b { slope_parts.push(x); } }
    slope_parts.push(b);
    p = 0;
    while p < slope_parts.len - 1 {
        let lo = slope_parts[p];
        let hi = slope_parts[p + 1];
        xs.push(lo);
        xs.push(hi);
        if slope_at(lo) * slope_at(hi) < 0.0 { xs.push(bisect(lo, hi, b, true)); }
        p++;
    }
}

fn better(have: bool, best: Extreme, value: f64) -> bool {
    return !have || abs(value) > abs(best.value) + 1e-12 * abs(value);
}

fn extremes() -> Extremes {
    var pts: Sample[>..] = [];
    diagram(800, pts);
    var hs = false;
    var hm = false;
    var hv = false;
    var bs = Extreme { x: 0.0, value: 0.0 };
    var bm = Extreme { x: 0.0, value: 0.0 };
    var bv = Extreme { x: 0.0, value: 0.0 };
    var i = 1;
    while i < pts.len - 1 {
        let p = pts[i];
        if better(hs, bs, p.shear) { bs = Extreme { x: p.x, value: p.shear }; hs = true; }
        if better(hm, bm, p.m) { bm = Extreme { x: p.x, value: p.m }; hm = true; }
        if better(hv, bv, p.v) { bv = Extreme { x: p.x, value: p.v }; hv = true; }
        i++;
    }
    return Extremes { v_shear: bs, m: bm, v: bv };
}

// ---------- sections ----------

// A shape and its dimensions (m), as the page and the WebMCP tools give them: a has_ flag false is left out.
// The shape is 0 for none, 1 rect, 2 circle, 3 tube, 4 custom.
struct Shape {
    shape: i64,
    b: f64, has_b: bool, h: f64, has_h: bool, d: f64, has_d: bool, t: f64, has_t: bool,
    a: f64, has_a: bool, i: f64, has_i: bool, iy: f64, has_iy: bool, j: f64, has_j: bool, c: f64, has_c: bool,
}

fn pos(v: f64, has: bool, label: u8[:], field: u8[:]) -> bool {
    return number(if has { v } else { 0.0 / 0.0 }, label, field, true);
}

// Section properties (m, m², m⁴) from a shape. Bending is about the horizontal axis, depth along y.
fn section_properties(spec: Shape&, out: Section&) -> bool {
    if spec.shape == 1 {
        if !pos(spec.b, spec.has_b, "Section width b", "section.b") { return false; }
        if !pos(spec.h, spec.has_h, "Section depth h", "section.h") { return false; }
        let b = spec.b;
        let h = spec.h;
        let long = jmax(b, h);
        let short = jmin(b, h);
        let r = short / long;
        // Saint-Venant torsion constant of a solid rectangle (Roark's series approximation).
        let j = long * pw(short, 3) * (1.0 / 3.0 - 0.21 * r * (1.0 - pw(r, 4) / 12.0));
        out = Section { a: b * h, i: b * pw(h, 3) / 12.0, iy: h * pw(b, 3) / 12.0, j: j, c: h / 2.0, has_c: true };
        return true;
    }
    if spec.shape == 2 {
        if !pos(spec.d, spec.has_d, "Diameter d", "section.d") { return false; }
        let d = spec.d;
        out = Section { a: PI_ * d * d / 4.0, i: PI_ * pw(d, 4) / 64.0, iy: PI_ * pw(d, 4) / 64.0, j: PI_ * pw(d, 4) / 32.0, c: d / 2.0, has_c: true };
        return true;
    }
    if spec.shape == 3 {
        if !pos(spec.d, spec.has_d, "Outside diameter D", "section.d") { return false; }
        if !pos(spec.t, spec.has_t, "Wall thickness t", "section.t") { return false; }
        let d = spec.d;
        let t = spec.t;
        if !(2.0 * t < d) { return fail("Wall thickness must be less than half the outside diameter.", "section.t"); }
        let di = d - 2.0 * t;
        let i = PI_ * (pw(d, 4) - pw(di, 4)) / 64.0;
        out = Section { a: PI_ * (d * d - di * di) / 4.0, i: i, iy: i, j: 2.0 * i, c: d / 2.0, has_c: true };
        return true;
    }
    if spec.shape == 4 {
        if !pos(spec.i, spec.has_i, "Second moment of area I", "section.I") { return false; }
        let i = spec.i;
        if !pos(spec.a, spec.has_a, "Section area A", "section.A") { return false; }
        var iy = i;
        if spec.has_iy {
            if !pos(spec.iy, true, "Out-of-plane second moment Iy", "section.Iy") { return false; }
            iy = spec.iy;
        }
        var j = 2.0 * i;
        if spec.has_j {
            if !pos(spec.j, true, "Torsion constant J", "section.J") { return false; }
            j = spec.j;
        }
        var c = 0.0;
        if spec.has_c {
            if !pos(spec.c, true, "Extreme-fibre distance c", "section.c") { return false; }
            c = spec.c;
        }
        out = Section { a: spec.a, i: i, iy: iy, j: j, c: c, has_c: spec.has_c };
        return true;
    }
    return fail("Choose a rectangle, solid circle, tube or custom section.", "section.shape");
}

// Degree of static indeterminacy for transverse loading: reaction components minus the two
// equilibrium equations.
fn indeterminacy(sup: Support[:]) -> i64 {
    var t = 0;
    for s in sup { t += if s.kind == FIXED { 2 } else { 1 }; }
    return t - 2;
}
