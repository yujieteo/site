import std;
import math;
import .num;
import .engine;
import .fmt;

var st_preset: u8[>..] = [];
var st_length: f64 = 0.0;
var st_divisions: f64 = 4.0;
var st_sup: Support[>..] = [];
var st_loads: Load[>..] = [];
var st_mat_id: u8[>..] = [];
var st_e: f64 = 0.0;
var st_nu: f64 = 0.0;
var st_section: Shape;
var st_shape_name: u8[>..] = [];

var app_u: i64 = 2;
var app_mid: bool = true;
var app_attach: f64 = 0.0 / 0.0;
var app_has_sol: bool = false;
var app_has_error: bool = false;
var app_cursor: f64 = 0.0;
var app_has_cursor: bool = false;
var app_active: u8[>..] = [];
var app_width: f64 = 700.0;

var lay_ml: f64 = 0.0;
var lay_mr: f64 = 0.0;
var lay_w: f64 = 0.0;
var lay_l: f64 = 0.0;
var app_has_layout: bool = false;

fn lay_x(x: f64) -> f64 {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    return lay_ml + (x / lay_l) * (lay_w - lay_ml - lay_mr);
}


fn show(si: f64, q: i64) -> f64 {
    assert(q >= 0);
    assert(q <= ANGLE);
    return to_units(si, q, app_u);
}
fn sym(q: i64) -> const u8[:] {
    assert(q >= 0);
    assert(q <= ANGLE);
    return unit_symbol(app_u, q);
}
fn take(v: f64, q: i64) -> f64 {
    assert(q >= 0);
    assert(q <= ANGLE);
    let si = from_units(v, q, app_u);
    return if q == LENGTH { prec(si, 15) } else { si };
}
fn offset(l: f64) -> f64 {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    return if app_mid { l / 2.0 } else { 0.0 };
}
fn shown(x: f64, l: f64) -> f64 {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    return from_origin(x, l, app_mid);
}
fn typed(d: f64, l: f64) -> f64 {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    let o = offset(l);
    return if o != 0.0 && !is_nan(o) { prec(d + o, 12) } else { d };
}
fn show_x(x: f64, l: f64) -> f64 {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    return show(shown(x, l), LENGTH);
}
fn at_text(x: f64) -> u8[>..] {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    var out = sig(show_x(x, g_m.length), 4);
    out.append(" ");
    out.append(sym(LENGTH));
    return out;
}
fn solved() -> bool {
    assert(app_u >= 0);
    assert(app_u < UNIT_COUNT);
    return app_has_sol && !app_has_error;
}
