// What the page is editing and showing, in globals: there is one beam on the page. The edited beam stays in
// SI (N, m, Pa). Values are converted only where they are typed or shown, so changing the convention
// re-expresses what was entered and never changes the beam or its results. The model and the solver
// measure x from the left end; the origin option only changes the positions people type and read: from
// mid-span they run from −L/2 to +L/2, still positive to the right.

import std;
import math;
import .num;
import .engine;
import .fmt;

// What is being edited, in SI. Loads are the engine's Load: kind POINT, COUPLE or DIST, and the fields
// its kind does not use are NaN (or ignored).
var st_preset: u8[>..] = [];          // "" for none
var st_length: f64 = 0.0;
var st_divisions: f64 = 4.0;
var st_sup: Support[>..] = [];
var st_loads: Load[>..] = [];
var st_mat_id: u8[>..] = [];
var st_e: f64 = 0.0;
var st_nu: f64 = 0.0;
var st_section: Shape;                // the shape code is 1 rect, 2 circle, 3 tube, 4 custom, 0 none
var st_shape_name: u8[>..] = [];      // as the page names it: "rect", "circle", "tube", "custom"

var app_u: i64 = 2;                   // index into UNIT_IDS: the page opens on N, mm and MPa
var app_mid: bool = true;             // the origin is mid-span
var app_attach: f64 = 0.0 / 0.0;      // the last valid length: positions are attached to it while the length field holds something else
var app_has_sol: bool = false;        // g_m, g_sup, g_loads, g_rea, g_disp, g_eq and g_ext hold a solved beam
var app_has_error: bool = false;      // err_msg and err_field hold why the edited beam is not solved
var app_cursor: f64 = 0.0;
var app_has_cursor: bool = false;
var app_active: u8[>..] = [];         // the handle being dragged ("s0", "l2"), or ""
var app_width: f64 = 700.0;

// The drawn figure's x scale: margins, width, and the length it spans.
var lay_ml: f64 = 0.0;
var lay_mr: f64 = 0.0;
var lay_w: f64 = 0.0;
var lay_l: f64 = 0.0;
var app_has_layout: bool = false;

fn lay_x(x: f64) -> f64 { return lay_ml + (x / lay_l) * (lay_w - lay_ml - lay_mr); }

// ---------- units and positions ----------

fn show(si: f64, q: i64) -> f64 { return to_units(si, q, app_u); }
fn sym(q: i64) -> const u8[:] { return unit_symbol(app_u, q); }
// Typed lengths drop conversion noise (2300 mm is 2.3 m, not 2.3000000000000003 m).
fn take(v: f64, q: i64) -> f64 {
    let si = from_units(v, q, app_u);
    return if q == LENGTH { prec(si, 15) } else { si };
}
fn offset(l: f64) -> f64 { return if app_mid { l / 2.0 } else { 0.0 }; }
fn shown(x: f64, l: f64) -> f64 { return from_origin(x, l, app_mid); }
fn typed(d: f64, l: f64) -> f64 {
    let o = offset(l);
    return if o != 0.0 && !is_nan(o) { prec(d + o, 12) } else { d };
}
// A beam position as it is typed and read, in the chosen origin and units.
fn show_x(x: f64, l: f64) -> f64 { return show(shown(x, l), LENGTH); }
// A position in the current length unit, on the solved beam.
fn at_text(x: f64) -> u8[>..] {
    var out = sig(show_x(x, g_m.length), 4);
    out.append(" ");
    out.append(sym(LENGTH));
    return out;
}
fn solved() -> bool { return app_has_sol && !app_has_error; }
