// raw.json: presets, materials, sections, and the method, conventions, NASTRAN notes and sources; and the
// section shapes' fields. Strings are slices of the embedded file or of its decoded text, which live as long
// as the program.

import std;
import .jv;
import .engine;

let RAW: const u8[:] = embed_file("../raw.json");
let NAN_ = 0.0 / 0.0;

var raw_root_node: i64 = -1;

// JSON members the way the page reads them: a missing or mistyped string is "", a number NaN.
fn jstr(n: i64, key: u8[:]) -> const u8[:] { return jm_rtext(jm_member(n, key)); }
fn jnum(n: i64, key: u8[:]) -> f64 {
    let v, ok = jm_number(jm_member(n, key));
    return if ok { v } else { NAN_ };
}
// A number left out (false) or given (true, NaN when it is not a number).
fn jopt(n: i64, key: u8[:]) -> f64, bool {
    let m = jm_member(n, key);
    if m < 0 { return NAN_, false; }
    let v, ok = jm_number(m);
    return if ok { v } else { NAN_ }, true;
}

let SHAPE_NAMES: const u8[:][5] = ["", "rect", "circle", "tube", "custom"];
fn shape_code(name: u8[:]) -> i64 {
    var i = 1;
    while i < 5 { if SHAPE_NAMES[i] == name { return i; } i++; }
    return 0;
}

// A section shape and its dimensions (m), as presets give them.
fn shape_of(n: i64) -> Shape {
    var out = Shape { shape: shape_code(jstr(n, "shape")), b: 0.0, has_b: false, h: 0.0, has_h: false, d: 0.0, has_d: false, t: 0.0, has_t: false,
        a: 0.0, has_a: false, i: 0.0, has_i: false, iy: 0.0, has_iy: false, j: 0.0, has_j: false, c: 0.0, has_c: false };
    out.b, out.has_b = jopt(n, "b");
    out.h, out.has_h = jopt(n, "h");
    out.d, out.has_d = jopt(n, "d");
    out.t, out.has_t = jopt(n, "t");
    out.a, out.has_a = jopt(n, "A");
    out.i, out.has_i = jopt(n, "I");
    out.iy, out.has_iy = jopt(n, "Iy");
    out.j, out.has_j = jopt(n, "J");
    out.c, out.has_c = jopt(n, "c");
    return out;
}

// A dimension by its key: "b", "h", "d", "t", "A", "I", "Iy", "J" or "c".
fn dim_get(s: Shape&, k: u8[:]) -> f64, bool {
    if k == "b" { return s.b, s.has_b; }
    if k == "h" { return s.h, s.has_h; }
    if k == "d" { return s.d, s.has_d; }
    if k == "t" { return s.t, s.has_t; }
    if k == "A" { return s.a, s.has_a; }
    if k == "I" { return s.i, s.has_i; }
    if k == "Iy" { return s.iy, s.has_iy; }
    if k == "J" { return s.j, s.has_j; }
    if k == "c" { return s.c, s.has_c; }
    return NAN_, false;
}
fn dim_set(s: Shape&, k: u8[:], v: f64, has: bool) {
    if k == "b" { s.b = v; s.has_b = has; }
    else if k == "h" { s.h = v; s.has_h = has; }
    else if k == "d" { s.d = v; s.has_d = has; }
    else if k == "t" { s.t = v; s.has_t = has; }
    else if k == "A" { s.a = v; s.has_a = has; }
    else if k == "I" { s.i = v; s.has_i = has; }
    else if k == "Iy" { s.iy = v; s.has_iy = has; }
    else if k == "J" { s.j = v; s.has_j = has; }
    else if k == "c" { s.c = v; s.has_c = has; }
}

// Each shape's fields: key, label, quantity, note. Shape code s (1..4) owns entries FIELD_AT[s - 1] up to FIELD_AT[s].
let FIELD_AT: i64[5] = [0, 2, 3, 5, 10];
let FIELD_KEY: const u8[:][10] = ["b", "h", "d", "d", "t", "A", "I", "c", "Iy", "J"];
let FIELD_LABEL: const u8[:][10] = ["Width $b$", "Depth $h$", "Diameter $d$", "Outside $D$", "Wall $t$", "Area $A$", "$I$, in plane", "Fibre $c$", "$I_y$, out of plane", "Torsion $J$"];
let FIELD_Q: i64[10] = [LENGTH, LENGTH, LENGTH, LENGTH, LENGTH, AREA, INERTIA, LENGTH, INERTIA, INERTIA];
let FIELD_NOTE: const u8[:][10] = ["", "", "", "", "", "", "", ", optional", "", ""];

let DEFAULT_AT: i64[5] = [0, 2, 3, 5, 10];
let DEFAULT_KEY: const u8[:][10] = ["b", "h", "d", "d", "t", "A", "I", "c", "Iy", "J"];
let DEFAULT_VAL: f64[10] = [0.1, 0.2, 0.15, 0.1683, 0.008, 5.0e-3, 8.0e-5, 0.15, 8.0e-5, 1.6e-4];

struct Preset {
    id: const u8[:], label: const u8[:], note: const u8[:], length: f64, material: const u8[:],
    sup_at: i64, sup_n: i64, load_at: i64, load_n: i64, section: Shape,
}
struct Material { id: const u8[:], label: const u8[:], e: f64, nu: f64 }
struct SectionOption { id: const u8[:], label: const u8[:] }

var presets: Preset[>..] = [];
var preset_sup: Support[>..] = [];
var preset_loads: Load[>..] = [];
var materials: Material[>..] = [];
var section_options: SectionOption[>..] = [];

fn kind_of(s: u8[:]) -> i64 { return if s == "fixed" { FIXED } else { PIN }; }

// A load as the page edits it: the fields its kind does not use are ignored.
fn load_of(n: i64) -> Load {
    let k = jstr(n, "kind");
    let kind = if k == "point" { POINT } else if k == "moment" { COUPLE } else { DIST };
    return Load { kind: kind, x: jnum(n, "x"), f: jnum(n, "F"), c: jnum(n, "C"), x1: jnum(n, "x1"), x2: jnum(n, "x2"), q1: jnum(n, "q1"), q2: jnum(n, "q2") };
}

fn load_name(l: Load&) -> const u8[:] {
    return if l.kind == POINT { "Point force" } else if l.kind == COUPLE { "Couple" } else { "Distributed load" };
}

fn data_init() {
    let root = jm_parse_raw(RAW);
    if root < 0 { abort("raw.json"); }
    raw_root_node = root;
    var p = jm_first(jm_member(root, "presets"));
    while p >= 0 {
        let sup_at = preset_sup.len;
        var s = jm_first(jm_member(p, "supports"));
        while s >= 0 { preset_sup.push(Support { kind: kind_of(jstr(s, "kind")), x: jnum(s, "x") }); s = jm_next(s); }
        let load_at = preset_loads.len;
        var l = jm_first(jm_member(p, "loads"));
        while l >= 0 { preset_loads.push(load_of(l)); l = jm_next(l); }
        let sh = shape_of(jm_member(p, "section"));
        presets.push(Preset { id: jstr(p, "id"), label: jstr(p, "label"), note: jstr(p, "note"), length: jnum(p, "length"), material: jstr(p, "material"),
            sup_at: sup_at, sup_n: preset_sup.len - sup_at, load_at: load_at, load_n: preset_loads.len - load_at, section: sh });
        p = jm_next(p);
    }
    var m = jm_first(jm_member(root, "materials"));
    while m >= 0 {
        materials.push(Material { id: jstr(m, "id"), label: jstr(m, "label"), e: jnum(m, "E"), nu: jnum(m, "nu") });
        m = jm_next(m);
    }
    var c = jm_first(jm_member(root, "sections"));
    while c >= 0 {
        section_options.push(SectionOption { id: jstr(c, "id"), label: jstr(c, "label") });
        c = jm_next(c);
    }
}

fn raw_root() -> i64 { return raw_root_node; }
