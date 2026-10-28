// The page: its events (a click, a typed value, a drag) and the commands it sends back (set this element's
// HTML, value or class; save a file; copy text). This program owns every number, word and drawing; the host
// in the page only moves events in and applies the commands. The state is in state.goose.

import std;
import math;
import .jv;
import .num;
import .engine;
import .fmt;
import .state;
import .data;
import .util;
import .tex;
import .hand;
import .draw;
import .figure;
import .pdf;

// Rust's f64::total_cmp as a less-than: -0 before 0, NaN after every number.
fn total_less(a: f64, b: f64) -> bool {
    if is_nan(a) { return false; }
    if is_nan(b) { return true; }
    if a == b { return a == 0.0 && 1.0 / a < 1.0 / b; }
    return a < b;
}

// Rust's f64::min and f64::max: a NaN gives way to the other number.
fn rmin(a: f64, b: f64) -> f64 { if is_nan(a) { return b; } if is_nan(b) { return a; } return if a < b { a } else { b }; }
fn rmax(a: f64, b: f64) -> f64 { if is_nan(a) { return b; } if is_nan(b) { return a; } return if a > b { a } else { b }; }

// ---------- commands ----------

var cmds: u8[>..] = [];
var cmd_n: i64 = 0;

// A JSON string, escaped as JSON.stringify does.
fn quote(out: u8[>..]&, s: u8[:]) {
    out.push('"');
    for c in s {
        if c == '"' { out.append("\\\""); }
        else if c == '\\' { out.append("\\\\"); }
        else if c == '\n' { out.append("\\n"); }
        else if c == '\r' { out.append("\\r"); }
        else if c == '\t' { out.append("\\t"); }
        else if c == 8 { out.append("\\b"); }
        else if c == 12 { out.append("\\f"); }
        else if c < 32 { out.append("\\u00"); format_uint(out, c as u64, 16, 2, '0'); }
        else { out.push(c); }
    }
    out.push('"');
}

fn cmd_begin(key: u8[:], sel: u8[:]) {
    if cmd_n > 0 { cmds.push(','); }
    cmd_n++;
    cmds.push('{');
    quote(cmds, key);
    cmds.push(':');
    quote(cmds, sel);
}
fn cmd_str(key: u8[:], v: u8[:]) { cmds.push(','); quote(cmds, key); cmds.push(':'); quote(cmds, v); }
fn cmd_bool(key: u8[:], v: bool) { cmds.push(','); quote(cmds, key); cmds.push(':'); cmds.append(if v { "true" } else { "false" }); }
fn cmd_end() { cmds.push('}'); }

fn html(sel: u8[:], v: u8[:]) { cmd_begin("html", sel); cmd_str("v", v); cmd_end(); }
fn text(sel: u8[:], v: u8[:]) { cmd_begin("text", sel); cmd_str("v", v); cmd_end(); }
fn value(sel: u8[:], v: u8[:]) { cmd_begin("value", sel); cmd_str("v", v); cmd_end(); }
fn attr(sel: u8[:], name: u8[:], v: u8[:]) { cmd_begin("attr", sel); cmd_str("name", name); cmd_str("v", v); cmd_end(); }
fn attr_off(sel: u8[:], name: u8[:]) {
    cmd_begin("attr", sel);
    cmd_str("name", name);
    cmds.append(",\"v\":null");
    cmd_end();
}
fn cls(sel: u8[:], name: u8[:], on: bool) { cmd_begin("cls", sel); cmd_str("name", name); cmd_bool("on", on); cmd_end(); }
fn hidden(sel: u8[:], on: bool) { cmd_begin("hidden", sel); cmd_bool("on", on); cmd_end(); }
fn focus(sel: u8[:]) { cmd_begin("focus", sel); cmd_end(); }
fn prevent() {
    if cmd_n > 0 { cmds.push(','); }
    cmd_n++;
    cmds.append("{\"prevent\":true}");
}
fn save(name: u8[:], mime: u8[:], data: u8[:], b64: bool) {
    cmd_begin("save", name);
    cmd_str("mime", mime);
    cmd_str("data", data);
    cmd_bool("b64", b64);
    cmd_end();
}

// ---------- small helpers ----------

// Length of a run of characters that are not white space, in bytes.
fn word(s: u8[:]) -> i64 {
    var i = 0;
    while i < s.len && !is_space(s[i]) { i++; }
    return i;
}

fn lower_eq(s: u8[:], lit: u8[:]) -> bool {
    if s.len != lit.len { return false; }
    var i = 0;
    while i < s.len {
        var c = s[i];
        if c >= 'A' && c <= 'Z' { c += 32; }
        if c != lit[i] { return false; }
        i++;
    }
    return true;
}

// Rust's str::parse::<f64>, which accepts decimal text, "inf", "infinity" and "nan"; else false.
fn parse_f64(s: u8[:]) -> f64, bool {
    if s.len == 0 { return 0.0, false; }
    var i = 0;
    if s[0] == '+' || s[0] == '-' { i = 1; }
    let rest = s[i..];
    if lower_eq(rest, "inf") || lower_eq(rest, "infinity") {
        return if s[0] == '-' { -1.0 / 0.0 } else { 1.0 / 0.0 }, true;
    }
    if lower_eq(rest, "nan") { return NAN_, true; }
    var digits = 0;
    while i < s.len && s[i] >= '0' && s[i] <= '9' { i++; digits++; }
    if i < s.len && s[i] == '.' {
        i++;
        while i < s.len && s[i] >= '0' && s[i] <= '9' { i++; digits++; }
    }
    if digits == 0 { return 0.0, false; }
    if i < s.len && (s[i] == 'e' || s[i] == 'E') {
        i++;
        if i < s.len && (s[i] == '+' || s[i] == '-') { i++; }
        var ed = 0;
        while i < s.len && s[i] >= '0' && s[i] <= '9' { i++; ed++; }
        if ed == 0 { return 0.0, false; }
    }
    if i != s.len { return 0.0, false; }
    return read_double(s), true;
}

// JavaScript's Number(s) for a field's value: "" is 0.
fn number_of(s: u8[:]) -> f64 {
    let t = trim(s);
    if t.len == 0 { return 0.0; }
    let v, ok = parse_f64(t);
    return if ok { v } else { NAN_ };
}
// A number field: "" is NaN, as the page reads it.
fn field_number(s: u8[:]) -> f64 { return if s.len == 0 { NAN_ } else { number_of(s) }; }

// An index written in decimal digits, or -1.
fn parse_index(s: u8[:]) -> i64 {
    if s.len == 0 || s.len > 9 { return -1; }
    var v = 0;
    for c in s {
        if c < '0' || c > '9' { return -1; }
        v = v * 10 + (c - '0') as i64;
    }
    return v;
}

// +x.toPrecision(10) for a field, "" for a value that is not a number.
fn tidy(x: f64) -> u8[>..] { return if finite(x) { js(prec(x, 10)) } else { "" }; }
// JavaScript's Math.round: halves round up.
fn js_round(x: f64) -> f64 {
    let f = floor(x);
    return if x - f >= 0.5 { f + 1.0 } else { f };
}

// The UTF-16 length of a text, as JavaScript counts it.
fn utf16_len(s: u8[:]) -> i64 {
    var n = 0;
    each_utf8(s) { cp => n += if cp >= 65536 { 2 } else { 1 }; };
    return n;
}

// Break text into lines of at most n characters, at spaces. The lines come back separated by newlines.
fn wrap(s: u8[:], n: i64, out: u8[>..]&) {
    out.clear();
    var line: u8[>..] = [];
    var first = true;
    var started = false;
    var lines = 0;
    each_split(s, ' ') {
        let w = it;
        if !started {
            line.append(w);
            started = true;
        } else if line.len > 0 && utf16_len(line) + 1 + utf16_len(w) > n {
            if lines > 0 { out.push('\n'); }
            out.append(line);
            lines++;
            line.clear();
            line.append(w);
        } else if line.len == 0 {
            line.append(w);
        } else {
            line.push(' ');
            line.append(w);
        }
    };
    if lines > 0 { out.push('\n'); }
    out.append(line);
}

fn options_item(out: u8[>..]&, v: u8[:], label: u8[:], selected: u8[:]) {
    out.append("<option value=\"");
    out.append(esc(v));
    out.append("\"");
    if v == selected { out.append(" selected"); }
    out.append(">");
    out.append(esc(label));
    out.append("</option>");
}

// ---------- the page's state beyond state.goose ----------

var app_date: u8[>..] = [];
var hand_visible: bool = false;
var hand_stale: bool = false;
var pending: bool = false;
var font_css: u8[>..] = [];
var font_data: u8[>..] = [];          // the three fonts' bytes, one after the other
var font_len: i64[3] = [0, 0, 0];
var has_fonts: bool = false;

// Where a support or load end sat when a length edit began: at an end (0 or 1), or at a shown position.
struct Attach { load: bool, i: i64, key: i64, end: i64, at: f64 }      // key 0 is x, 1 is x1, 2 is x2; end is -1 for none
var length_edit: Attach[>..] = [];
var has_length_edit: bool = false;

fn key_name(k: i64) -> const u8[:] { return if k == 1 { "x1" } else if k == 2 { "x2" } else { "x" }; }

fn from_preset(i: i64) {
    // Every preset names one of the materials.
    var mi = 0;
    var k = 0;
    while k < materials.len { if materials[k].id == presets[i].material { mi = k; break; } k++; }
    st_preset.clear();
    st_preset.append(presets[i].id);
    st_length = presets[i].length;
    st_divisions = 4.0;
    st_sup.clear();
    k = 0;
    while k < presets[i].sup_n { st_sup.push(preset_sup[presets[i].sup_at + k]); k++; }
    st_loads.clear();
    k = 0;
    while k < presets[i].load_n { st_loads.push(preset_loads[presets[i].load_at + k]); k++; }
    st_mat_id.clear();
    st_mat_id.append(materials[mi].id);
    st_e = materials[mi].e;
    st_nu = materials[mi].nu;
    st_section = presets[i].section;
    st_shape_name.clear();
    st_shape_name.append(SHAPE_NAMES[presets[i].section.shape]);
}

// ---------- the model ----------

// Fills in_x, in_sup and in_loads from the edited beam. False, with the error set, while the section is invalid.
fn make_input() -> bool {
    var s = Section { a: 0.0, i: 0.0, iy: 0.0, j: 0.0, c: 0.0, has_c: false };
    if !section_properties(st_section, s) { return false; }
    in_x = Input { length: st_length, e: st_e, nu: st_nu, a: s.a, i: s.i, iy: s.iy, has_iy: true, j: s.j, has_j: true, c: s.c, has_c: s.has_c,
        divisions: st_divisions, has_divisions: true, has_supports: true, has_loads: true };
    in_sup.clear();
    for sp in st_sup { in_sup.push(sp); }
    in_loads.clear();
    for l in st_loads { in_loads.push(l); }
    return true;
}

// Whether a solved beam's diagrams stay finite when converted to the current convention.
fn showable() -> bool {
    return finite(show(g_ext.v_shear.value, FORCE)) && finite(show(g_ext.m.value, MOMENT)) && finite(show(g_ext.v.value, LENGTH));
}

// A copy of the solved beam, to put back when a new solution fails.
var sv_m: Model;
var sv_sup: Support[>..] = [];
var sv_loads: Load[>..] = [];
var sv_rea: Reaction[>..] = [];
var sv_disp: Displacement[>..] = [];
var sv_eq: Equilibrium;
var sv_ext: Extremes;

fn snapshot() {
    sv_m = g_m;
    sv_sup.clear();
    for x in g_sup { sv_sup.push(x); }
    sv_loads.clear();
    for x in g_loads { sv_loads.push(x); }
    sv_rea.clear();
    for x in g_rea { sv_rea.push(x); }
    sv_disp.clear();
    for x in g_disp { sv_disp.push(x); }
    sv_eq = g_eq;
    sv_ext = g_ext;
}
fn restore() {
    g_m = sv_m;
    g_sup.clear();
    for x in sv_sup { g_sup.push(x); }
    g_loads.clear();
    for x in sv_loads { g_loads.push(x); }
    g_rea.clear();
    for x in sv_rea { g_rea.push(x); }
    g_disp.clear();
    for x in sv_disp { g_disp.push(x); }
    g_eq = sv_eq;
    g_ext = sv_ext;
}

fn update_soon() { update(true); }
// Apply a re-solve still waiting on paused typing, so an export or a drag starts from what was typed.
fn flush() { if pending { update(true); } }

fn update(keep_form: bool) {
    pending = false;
    if finite(st_length) && st_length > 0.0 { app_attach = st_length; }
    if !keep_form {
        build_form();
    } else if st_preset.len > 0 {
        st_preset.clear();
        value("#preset", "");
        text("#preset-note", "");
    }
    app_has_error = false;
    snapshot();
    var ok = make_input();
    if ok { ok = solve(app_u); }
    if ok && !showable() {
        restore();
        ok = fail(str("The results are too large to show in ", UNIT_LABELS[app_u], "; choose a convention with larger units."), "");
    } else if ok {
        app_has_sol = true;
        hand_valid = false;      // the hand calculation starts over for a new solution
    } else if app_has_sol {
        restore();
    }
    if !ok { app_has_error = true; }
    // A beam solved in one convention can overflow when shown in another (10³⁰⁶ N·m is Infinity in N·mm).
    if app_has_sol && !showable() { app_has_sol = false; app_has_layout = false; }
    if app_has_error {
        hidden("#error", false);
        var m: u8[>..] = [];
        m.append("<b>Can't solve this beam: </b>");
        m.append(esc(in_convention(err_msg)));
        html("#error", m);
        mark_invalid(err_field);
        cls("#plots,#stats,#table", "stale", true);
    } else {
        hidden("#error", true);
        mark_invalid("");
        cls("#plots,#stats,#table", "stale", false);
    }
    if app_has_sol {
        let l = g_m.length;
        if !app_has_cursor || app_cursor > l { app_cursor = l / 2.0; app_has_cursor = true; }
        render();
        if !app_has_error {
            html("#stats", stats_html());
            html("#reactions", reactions_html());
            html("#table", table_html());
        }
    }
    // Re-deriving a long beam on every drag step is wasted work: the view catches up when the drag ends.
    if app_active.len > 0 && !app_has_error { hand_stale = true; } else { render_hand(); }
    html("#section-derived", tex_rich(section_summary()));
}

fn mark_invalid(field: u8[:]) {
    attr_off("[data-field]", "aria-invalid");
    if field.len == 0 { return; }
    var sel: u8[>..] = [];
    if field == "supports" {
        sel.append("[data-field=\"supports\"],[data-field^=\"supports.\"][data-field$=\".x\"]");
    } else if field == "loads" {
        sel.append("[data-field^=\"loads.\"][data-field$=\".x\"],[data-field^=\"loads.\"][data-field$=\".x1\"],[data-field^=\"loads.\"][data-field$=\".x2\"],[data-field=\"loads\"]");
    } else {
        sel.append("[data-field=\"");
        sel.append(field);
        sel.append("\"]");
    }
    attr(sel, "aria-invalid", "true");
}

// The solver's messages quote left-end positions; restate them in the chosen convention.
fn at_message(n: u8[:]) -> u8[>..] {
    var out = sig(show_x(from_units(number_of(n), LENGTH, app_u), app_attach), 6);
    out.append(" ");
    out.append(sym(LENGTH));
    return out;
}

fn in_convention(m0: u8[:]) -> u8[>..] {
    var m: u8[>..] = [];
    m.append(m0);
    let o = offset(app_attach);
    if o == 0.0 || is_nan(o) { return m; }
    // "between 0 and (\S+) \S+\.$"
    let pat1 = "between 0 and ";
    var from = 0;
    loop {
        let rel = find(m[from..], pat1);
        if rel < 0 { break; }
        let i = from + rel;
        let rest = m[i + pat1.len..];
        let a = word(rest);
        if a > 0 && a < rest.len && rest[a] == ' ' {
            let b = rest[a + 1..];
            if word(b) == b.len && b.len > 1 && b[b.len - 1] == '.' {
                var n: u8[>..] = [];
                n.append(m[..i]);
                n.append("between ");
                n.append(at_message("0"));
                n.append(" and ");
                n.append(at_message(rest[..a]));
                n.append(".");
                m = copy(n);
                break;
            }
        }
        from = i + pat1.len;
    }
    // "position x = (\S+) \S+\."
    let pat2 = "position x = ";
    from = 0;
    loop {
        let rel = find(m[from..], pat2);
        if rel < 0 { break; }
        let i = from + rel;
        let rest = m[i + pat2.len..];
        let a = word(rest);
        var hit = false;
        if a > 0 && a < rest.len && rest[a] == ' ' {
            let bw = word(rest[a + 1..]);
            let b = rest[a + 1..a + 1 + bw];
            let dot = rfind(b, ".");
            if dot > 0 {
                let end = i + pat2.len + a + 1 + dot + 1;
                var n: u8[>..] = [];
                n.append(m[..i]);
                n.append("position x = ");
                n.append(at_message(rest[..a]));
                n.append(".");
                n.append(m[end..]);
                m = copy(n);
                hit = true;
            }
        }
        if hit { break; }
        from = i + pat2.len;
    }
    // "^Positions (\S+) \S+ and (\S+) \S+ are"
    if starts_with(m, "Positions ") {
        let rest = m[10..];
        // splitn(6, ' ')
        var w: const u8[:][6];
        var n = 0;
        var start = 0;
        var i = 0;
        while i < rest.len && n < 5 {
            if rest[i] == ' ' { w[n] = rest[start..i]; n++; start = i + 1; }
            i++;
        }
        if n == 5 {
            w[5] = rest[start..];
            var good = w[2] == "and" && starts_with(w[5], "are");
            var k = 0;
            while k < 5 { if w[k].len == 0 || word(w[k]) != w[k].len { good = false; } k++; }
            if good {
                var r: u8[>..] = [];
                r.append("Positions ");
                r.append(at_message(w[0]));
                r.append(" and ");
                r.append(at_message(w[3]));
                r.append(" ");
                r.append(w[5]);
                return r;
            }
        }
    }
    return m;
}

// ---------- the editor ----------

fn num_input(label: u8[:], v: f64, field: u8[:]) -> u8[>..] {
    return str("<label class=\"f\"><span>", tex_rich(label), "</span><input type=\"number\" step=\"any\" value=\"", tidy(v), "\" name=\"", field,
        "\" data-field=\"", field, "\"></label>");
}
fn remove_button(label: u8[:], act: u8[:], i: i64) -> u8[>..] {
    return str("<button type=\"button\" class=\"btn icon\" aria-label=\"", esc(label), "\" data-act=\"", act, "\" data-arg=\"", i, "\">×</button>");
}

fn supports_html() -> u8[>..] {
    let l = app_attach;
    let len = sym(LENGTH);
    var out: u8[>..] = [];
    var i = 0;
    for s in st_sup {
        var kinds: u8[>..] = [];
        options_item(kinds, "pin", "Pin", if s.kind == PIN { "pin" } else { "fixed" });
        options_item(kinds, "fixed", "Fixed", if s.kind == PIN { "pin" } else { "fixed" });
        out.append(str("<li class=\"item\"><div class=\"fields\"><label class=\"f\"><span>Support ", i + 1, "</span><select name=\"supports.", i,
            ".kind\" data-field=\"supports.", i, ".kind\">", kinds, "</select></label>",
            num_input(str("$x$ (", len, ")"), show_x(s.x, l), str("supports.", i, ".x")), "</div>",
            remove_button(str("Remove support ", i + 1), "remove-support", i), "</li>"));
        i++;
    }
    return out;
}

fn loads_html() -> u8[>..] {
    if st_loads.len == 0 { return "<li class=\"note\">No loads yet.</li>"; }
    let l = app_attach;
    let len = sym(LENGTH);
    let force = sym(FORCE);
    let moment = sym(MOMENT);
    let q = sym(DISTRIBUTED);
    var out: u8[>..] = [];
    var i = 0;
    for ld in st_loads {
        var fields: u8[>..] = [];
        if ld.kind == POINT {
            fields.append(num_input(str("$x$ (", len, ")"), show_x(ld.x, l), str("loads.", i, ".x")));
            fields.append(num_input(str("$F$ (", force, ")"), show(ld.f, FORCE), str("loads.", i, ".F")));
        } else if ld.kind == COUPLE {
            fields.append(num_input(str("$x$ (", len, ")"), show_x(ld.x, l), str("loads.", i, ".x")));
            fields.append(num_input(str("$C$ (", moment, ")"), show(ld.c, MOMENT), str("loads.", i, ".C")));
        } else {
            fields.append(num_input(str("from $x_1$ (", len, ")"), show_x(ld.x1, l), str("loads.", i, ".x1")));
            fields.append(num_input(str("to $x_2$ (", len, ")"), show_x(ld.x2, l), str("loads.", i, ".x2")));
            fields.append(num_input(str("$q_1$ (", q, ")"), show(ld.q1, DISTRIBUTED), str("loads.", i, ".q1")));
            fields.append(num_input(str("$q_2$ (", q, ")"), show(ld.q2, DISTRIBUTED), str("loads.", i, ".q2")));
        }
        out.append(str("<li class=\"item\"><div class=\"fields\"><span class=\"tag\">", i + 1, ". ", load_name(ld), "</span>", fields, "</div>",
            remove_button(str("Remove load ", i + 1, ", ", load_name(ld)), "remove-load", i), "</li>"));
        i++;
    }
    return out;
}

fn section_fields_html() -> u8[>..] {
    var out: u8[>..] = [];
    let sc = st_section.shape;
    if sc < 1 || sc > 4 { return out; }
    let from = FIELD_AT[sc - 1];
    let to = FIELD_AT[sc];
    var k = from;
    while k < to {
        out.append("<div class=\"row\">");
        var j = k;
        while j < k + 2 && j < to {
            let dv, has = dim_get(st_section, FIELD_KEY[j]);
            let v = if has { show(dv, FIELD_Q[j]) } else { NAN_ };
            out.append(num_input(str(FIELD_LABEL[j], " (", sym(FIELD_Q[j]), FIELD_NOTE[j], ")"), v, str("section.", FIELD_KEY[j])));
            j++;
        }
        out.append("</div>");
        k += 2;
    }
    return out;
}

fn material_options() -> u8[>..] {
    var out: u8[>..] = [];
    for m in materials {
        options_item(out, m.id, str(m.label, " (E ", sig(show(m.e, STRESS), 4), " ", sym(STRESS), ")"), st_mat_id);
    }
    options_item(out, "custom", "Custom", st_mat_id);
    return out;
}
fn preset_options() -> u8[>..] {
    var out: u8[>..] = [];
    options_item(out, "", "Custom", st_preset);
    for p in presets { options_item(out, p.id, p.label, st_preset); }
    return out;
}
fn unit_options() -> u8[>..] {
    var out: u8[>..] = [];
    var i = 0;
    while i < UNIT_COUNT { options_item(out, UNIT_IDS[i], UNIT_LABELS[i], UNIT_IDS[app_u]); i++; }
    return out;
}
fn shape_options() -> u8[>..] {
    var out: u8[>..] = [];
    for s in section_options { options_item(out, s.id, s.label, st_shape_name); }
    return out;
}
fn preset_note() -> const u8[:] {
    for p in presets { if st_preset.len > 0 && p.id == st_preset { return p.note; } }
    return "";
}

fn build_form() {
    value("#units", UNIT_IDS[app_u]);
    var q = 0;
    while q < 9 {
        text(str("[data-unit=\"", QUANTITY_NAMES[q], "\"]"), unit_symbol(app_u, q));
        q++;
    }
    text("[data-unit=\"system\"]", UNIT_LABELS[app_u]);
    value("#length", tidy(show(st_length, LENGTH)));
    value("#divisions", js(st_divisions));
    value("#origin", if app_mid { "mid" } else { "left" });
    html("#supports", supports_html());
    html("#loads", loads_html());
    value("#shape", st_shape_name);
    html("#section-fields", section_fields_html());
    html("#material", material_options());
    value("#material", st_mat_id);
    value("#E", tidy(show(st_e, STRESS)));
    value("#nu", tidy(st_nu));
    value("#preset", st_preset);
    text("#preset-note", preset_note());
}

// A, I, c and EI of the current section, or "" while it is invalid.
fn section_summary() -> u8[>..] {
    var s = Section { a: 0.0, i: 0.0, iy: 0.0, j: 0.0, c: 0.0, has_c: false };
    // A failure here is not the beam's error: keep the message the page shows.
    let keep_msg = copy(err_msg);
    let keep_field = copy(err_field);
    let ok = section_properties(st_section, s);
    if !ok {
        err_msg.clear();
        err_msg.append(keep_msg);
        err_field.clear();
        err_field.append(keep_field);
        return "";
    }
    let ei = st_e * s.i;
    var t = str("$A$ = ", sci(show(s.a, AREA)), " ", sym(AREA), " · $I$ = ", sci(show(s.i, INERTIA)), " ", sym(INERTIA));
    if s.has_c && s.c != 0.0 && !is_nan(s.c) { t.append(str(" · $c$ = ", sig(show(s.c, LENGTH), 4), " ", sym(LENGTH))); }
    if finite(ei) { t.append(str(" · $EI$ = ", sci(show(ei, RIGIDITY)), " ", sym(RIGIDITY))); }
    return t;
}

// ---------- events ----------

fn b64_val(c: u8) -> u32 {
    if c >= 'A' && c <= 'Z' { return (c - 'A') as u32; }
    if c >= 'a' && c <= 'z' { return (c - 'a') as u32 + 26; }
    if c >= '0' && c <= '9' { return (c - '0') as u32 + 52; }
    if c == '+' { return 62; }
    return 63;
}

// The bytes of base64 text, the way the page's fonts arrive: anything but letters, digits, + and / is skipped.
fn b64_decode(out: u8[>..]&, s: u8[:]) {
    var chunk: u8[4] = [0; 4];
    var n = 0;
    for c in s {
        if (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '+' || c == '/' {
            chunk[n] = c;
            n++;
            if n == 4 { b64_flush(out, chunk, n); n = 0; }
        }
    }
    if n > 0 { b64_flush(out, chunk, n); }
}
fn b64_flush(out: u8[>..]&, chunk: u8[4]&, n: i64) {
    var v: u32 = 0;
    var i = 0;
    while i < n { v = v | (b64_val(chunk[i]) << ((18 - 6 * i) as u32)); i++; }
    i = 0;
    while i < n - 1 { out.push(((v >> ((16 - 8 * i) as u32)) & 255) as u8); i++; }
}

// One string, number or flag of the event.
fn ev_s(root: i64, key: u8[:]) -> const u8[:] { return jm_text(jm_member(root, key)); }
fn ev_f(root: i64, key: u8[:]) -> f64 { return jnum(root, key); }
fn ev_true(root: i64, key: u8[:]) -> bool { return jm_flag(jm_member(root, key)); }

// One event from the host, as JSON; the commands for it, as a JSON array.
fn handle_event(txt: u8[:]) -> const u8[:] {
    cmds.clear();
    cmd_n = 0;
    cmds.push('[');
    let e = jm_parse_event(txt);
    if e >= 0 {
        let ev = ev_s(e, "ev");
        if ev == "start" || ev == "fonts" {
            app_width = ev_f(e, "w");
            if ev_s(e, "date").len > 0 { app_date.clear(); app_date.append(ev_s(e, "date")); }
            let fonts = jm_member(e, "fonts");
            if fonts >= 0 { take_fonts(fonts); }
            update(false);
        } else if ev == "hand-visible" {
            hand_visible = true;
            render_hand();
        } else if ev == "input" {
            on_input(ev_s(e, "field"), ev_s(e, "value"));
        } else if ev == "change" {
            var cf: u8[>..] = [];
            cf.append(ev_s(e, "field"));
            var cv: u8[>..] = [];
            cv.append(ev_s(e, "value"));
            on_change(cf, cv);
        } else if ev == "done" {
            if ev_s(e, "field") == "length" { has_length_edit = false; length_edit.clear(); }
        } else if ev == "click" {
            on_click(ev_s(e, "act"), ev_s(e, "arg"));
        } else if ev == "down" {
            if app_has_layout {
                app_active.clear();
                app_active.append(ev_s(e, "key"));
                cls(str("[data-key=\"", app_active, "\"]"), "active", true);
            }
        } else if ev == "move" {
            on_move(ev_f(e, "frac"));
        } else if ev == "up" {
            if app_active.len > 0 {
                cls(str("[data-key=\"", app_active, "\"]"), "active", false);
                app_active.clear();
            }
            if hand_stale { render_hand(); }
        } else if ev == "key" {
            on_key(ev_s(e, "key"), ev_true(e, "shift"), ev_s(e, "target"));
        } else if ev == "width" {
            let w = ev_f(e, "w");
            if w > 0.0 && w != app_width {
                app_width = w;
                if app_has_sol { render(); }
            }
        } else if ev == "timer" {
            flush();
        } else if ev == "result" {
            on_result(ev_s(e, "tag"), ev_true(e, "ok"), ev_s(e, "msg"));
        }
    }
    cmds.push(']');
    return cmds;
}

// Three non-empty font strings, as the host sends them.
fn take_fonts(fonts: i64) {
    var n = 0;
    var good = true;
    var strs: const u8[:][3];
    var f = jm_first(fonts);
    while f >= 0 {
        let s = jm_text(f);
        if n < 3 { if jm_is_string(f) && s.len > 0 { strs[n] = s; } else { good = false; } }
        n++;
        f = jm_next(f);
    }
    if n != 3 || !good { return; }
    let names: const u8[:][3] = ["DM Sans", "Source Serif 4", "Fira Math"];
    let mimes: const u8[:][3] = ["ttf", "ttf", "otf"];
    let formats: const u8[:][3] = ["truetype", "truetype", "opentype"];
    font_css.clear();
    font_data.clear();
    var i = 0;
    while i < 3 {
        font_css.append(str("@font-face{font-family:\"", names[i], "\";src:url(data:font/", mimes[i], ";base64,", strs[i], ") format(\"", formats[i], "\")}"));
        let before = font_data.len;
        b64_decode(font_data, strs[i]);
        font_len[i] = font_data.len - before;
        i++;
    }
    has_fonts = true;
}

// A typed position (or length) lands exactly on any other position on the beam within 1e-9·L of it:
// fields show 10 significant figures, so typing back a shown value must give the position it shows.
// me says which field is being edited: 0 the length, 1 a support's x, 2 a load's x, 3 its x1, 4 its x2.
fn take_x(v: f64, me: i64, me_i: i64) -> f64 {
    let is_length = me == 0;
    let x = if is_length { take(v, LENGTH) } else { typed(take(v, LENGTH), app_attach) };
    let l = if is_length { x } else { st_length };
    var at: f64[>..] = [];
    at.push(0.0);
    if !is_length { at.push(l); }
    var i = 0;
    for s in st_sup { if !(me == 1 && me_i == i) { at.push(s.x); } i++; }
    i = 0;
    for ld in st_loads {
        if ld.kind == DIST {
            if !(me == 3 && me_i == i) { at.push(ld.x1); }
            if !(me == 4 && me_i == i) { at.push(ld.x2); }
        } else {
            if !(me == 2 && me_i == i) { at.push(ld.x); }
        }
        i++;
    }
    for p in at { if abs(p - x) <= 1e-9 * l { return p; } }
    return x;
}

fn on_input(field: u8[:], val: u8[:]) {
    let v = field_number(val);
    let parts = split(field, '.');
    if parts.len == 1 && parts[0] == "length" {
        edit_length(v);
        return;
    }
    if parts.len == 1 && parts[0] == "divisions" {
        st_divisions = number_of(val);
    } else if parts.len == 3 && parts[0] == "supports" && parts[2] == "x" {
        let i = parse_index(parts[1]);
        if i < 0 { return; }
        let x = take_x(v, 1, i);
        if i >= st_sup.len { return; }
        st_sup[i].x = x;
    } else if parts.len == 3 && parts[0] == "loads" {
        let i = parse_index(parts[1]);
        if i < 0 { return; }
        let k = parts[2];
        var x = 0.0;
        if k == "x" { x = take_x(v, 2, i); }
        else if k == "x1" { x = take_x(v, 3, i); }
        else if k == "x2" { x = take_x(v, 4, i); }
        else if k == "F" { x = take(v, FORCE); }
        else if k == "C" { x = take(v, MOMENT); }
        else { x = take(v, DISTRIBUTED); }
        if i >= st_loads.len { return; }
        if k == "x" { st_loads[i].x = x; }
        else if k == "x1" { st_loads[i].x1 = x; }
        else if k == "x2" { st_loads[i].x2 = x; }
        else if k == "F" { st_loads[i].f = x; }
        else if k == "C" { st_loads[i].c = x; }
        else if k == "q1" { st_loads[i].q1 = x; }
        else if k == "q2" { st_loads[i].q2 = x; }
        else { return; }
    } else if parts.len == 2 && parts[0] == "section" {
        let k = parts[1];
        let sc = st_section.shape;
        if sc < 1 || sc > 4 { return; }
        var q = -1;
        var j = FIELD_AT[sc - 1];
        while j < FIELD_AT[sc] { if FIELD_KEY[j] == k { q = FIELD_Q[j]; } j++; }
        if q < 0 { return; }
        if k == "c" && is_nan(v) { dim_set(st_section, k, 0.0, false); } else { dim_set(st_section, k, take(v, q), true); }
    } else if parts.len == 2 && parts[0] == "material" && (parts[1] == "E" || parts[1] == "nu") {
        if parts[1] == "E" { st_e = if val.len == 0 { NAN_ } else { take(v, STRESS) }; } else { st_nu = v; }
        // E typed in psi only matches a preset to rounding, so presets are recognised within 1e-9.
        var mi = -1;
        var k2 = 0;
        for m in materials {
            if abs(m.e - st_e) <= 1e-9 * m.e && m.nu == st_nu { mi = k2; break; }
            k2++;
        }
        set_material(mi);
        value("#material", st_mat_id);
    } else {
        return;
    }
    update_soon();
}

// Keep supports and loads at either end attached to it. Measured from mid-span, everything else
// keeps the position it was given, so it moves with the middle of the beam.
fn attach_add(load: bool, i: i64, key: i64, x: f64, l: f64) {
    let end = if x == 0.0 { 0 } else if x == l { 1 } else { -1 };
    length_edit.push(Attach { load: load, i: i, key: key, end: end, at: shown(x, l) });
}

fn edit_length(v0: f64) {
    let v = if is_nan(v0) { v0 } else { take_x(v0, 0, 0) };
    if !has_length_edit {
        let l = app_attach;
        length_edit.clear();
        var i = 0;
        for s in st_sup { attach_add(false, i, 0, s.x, l); i++; }
        i = 0;
        for ld in st_loads {
            if ld.kind == DIST { attach_add(true, i, 1, ld.x1, l); attach_add(true, i, 2, ld.x2, l); } else { attach_add(true, i, 0, ld.x, l); }
            i++;
        }
        has_length_edit = true;
    }
    st_length = v;
    if finite(v) && v > 0.0 {
        app_attach = v;
        let off = offset(v);
        for a in length_edit {
            var x = 0.0;
            if a.end == 0 { x = 0.0; } else if a.end == 1 { x = v; } else { x = typed(a.at, v); }
            var cur = 0.0;
            if a.load {
                if a.i >= st_loads.len { continue; }
                cur = if a.key == 1 { st_loads[a.i].x1 } else if a.key == 2 { st_loads[a.i].x2 } else { st_loads[a.i].x };
            } else {
                if a.i >= st_sup.len { continue; }
                cur = st_sup[a.i].x;
            }
            if x == cur && off == 0.0 { continue; }
            if a.load {
                if a.key == 1 { st_loads[a.i].x1 = x; } else if a.key == 2 { st_loads[a.i].x2 = x; } else { st_loads[a.i].x = x; }
            } else {
                st_sup[a.i].x = x;
            }
            // From mid-span a left-end entry keeps its place on the beam but reads differently, so refresh it too.
            value(str("[data-field=\"", if a.load { "loads" } else { "supports" }, ".", a.i, ".", key_name(a.key), "\"]"), tidy(show_x(x, app_attach)));
        }
    }
    update_soon();
}

// Names the material the state matches (index into materials), or "custom" for -1. The page value follows in on_input.
fn set_material(mi: i64) {
    st_mat_id.clear();
    if mi >= 0 { st_mat_id.append(materials[mi].id); } else { st_mat_id.append("custom"); }
}

fn on_change(field: u8[:], val: u8[:]) {
    if field == "units" {
        flush();
        let u = unit_index(val);
        if u >= 0 { app_u = u; }
        update(false);
    } else if field == "origin" {
        flush();
        app_mid = val == "mid";
        update(false);
    } else if field == "section.shape" {
        var s = Shape { shape: shape_code(val), b: 0.0, has_b: false, h: 0.0, has_h: false, d: 0.0, has_d: false, t: 0.0, has_t: false,
            a: 0.0, has_a: false, i: 0.0, has_i: false, iy: 0.0, has_iy: false, j: 0.0, has_j: false, c: 0.0, has_c: false };
        if s.shape >= 1 {
            var j = DEFAULT_AT[s.shape - 1];
            while j < DEFAULT_AT[s.shape] { dim_set(s, DEFAULT_KEY[j], DEFAULT_VAL[j], true); j++; }
        }
        st_section = s;
        st_shape_name.clear();
        st_shape_name.append(val);
        st_preset.clear();
        update(false);
    } else if field == "material" {
        var mi = -1;
        var k2 = 0;
        for m in materials {
            if m.id == val { mi = k2; break; }
            k2++;
        }
        if mi >= 0 { st_e = materials[mi].e; st_nu = materials[mi].nu; }
        set_material(mi);
        st_preset.clear();
        update(false);
    } else if starts_with(field, "supports.") && ends_with(field, ".kind") {
        let i = parse_index(field[9..field.len - 5]);
        if i >= 0 {
            if i < st_sup.len { st_sup[i].kind = kind_of(val); }
            update(true);
        }
    }
}

fn on_click(act: u8[:], arg: u8[:]) {
    let l = st_length;
    if act == "ends" {
        let comma = find(arg, ",");
        let left_kind = kind_of(if comma >= 0 { arg[..comma] } else { arg });
        let has_right = comma >= 0 && arg.len > comma + 1;
        let right_kind = kind_of(if has_right { arg[comma + 1..] } else { "" });
        var s: Support[>..] = [];
        s.push(Support { kind: left_kind, x: 0.0 });
        for sp in st_sup { if sp.x > 0.0 && sp.x < l { s.push(sp); } }
        if has_right { s.push(Support { kind: right_kind, x: l }); }
        st_sup.clear();
        for sp in s { st_sup.push(sp); }
        st_preset.clear();
        update(false);
    } else if act == "add-support" {
        // Try the usual spots first, then the middle of the widest gap between supports and ends.
        let cand: f64[5] = [l / 2.0, l / 4.0, 3.0 * l / 4.0, l, 0.0];
        var x = 0.0;
        var done = false;
        for c in cand {
            var taken = false;
            for s in st_sup { if s.x == c { taken = true; } }
            if !taken { x = c; done = true; break; }
        }
        if !done {
            var xs: f64[>..] = [];
            xs.push(0.0);
            xs.push(l);
            for s in st_sup { xs.push(s.x); }
            stable_sort(xs) { a, b => total_less(a, b) };
            dedup(xs);
            var best = 0;
            var i = 1;
            while i < xs.len {
                if xs[i] - xs[i - 1] > xs[best + 1] - xs[best] { best = i - 1; }
                i++;
            }
            x = (xs[best] + xs[best + 1]) / 2.0;
        }
        st_sup.push(Support { kind: PIN, x: prec(x, 10) });
        st_preset.clear();
        update(false);
        focus("#supports li:last-child input");
    } else if act == "add" {
        let q = round1(-5e3, DISTRIBUTED);
        let n = NAN_;
        if arg == "point" {
            st_loads.push(Load { kind: POINT, x: prec(l / 2.0, 10), f: round1(-10e3, FORCE), c: n, x1: n, x2: n, q1: n, q2: n });
        } else if arg == "moment" {
            st_loads.push(Load { kind: COUPLE, x: prec(l / 2.0, 10), f: n, c: round1(10e3, MOMENT), x1: n, x2: n, q1: n, q2: n });
        } else {
            st_loads.push(Load { kind: DIST, x: n, f: n, c: n, x1: 0.0, x2: l, q1: q, q2: q });
        }
        st_preset.clear();
        update(false);
        focus("#loads .item:last-child input");
    } else if act == "remove-support" || act == "remove-load" {
        let i = parse_index(arg);
        if i < 0 { return; }
        if act == "remove-support" {
            if i < st_sup.len { st_sup.remove_at(i); }
        } else if i < st_loads.len {
            st_loads.remove_at(i);
        }
        st_preset.clear();
        update(false);
    } else if act == "save-image" {
        save_figure("png");
    } else if act == "save-pdf" {
        save_figure("pdf");
    }
}

// A default in SI, rounded to one significant figure in the current convention (−10 kN is −2000 lbf).
fn round1(si: f64, q: i64) -> f64 { return take(prec(show(si, q), 1), q); }

fn on_result(tag: u8[:], ok: bool, msg: u8[:]) {
    if tag == "png" {
        if ok { text("#figure-status", "Saved beamdiag.png."); } else { text("#figure-status", str("Could not save: ", msg, ".")); }
    }
}

// ---------- moving supports, loads and the cursor ----------

// Steps and snapping work in the current length unit, so a dragged support lands on 24 in, not 0.6 m.
fn step_for(l: f64) -> f64 {
    let raw = show(l, LENGTH) / 100.0;
    let e0 = floor(log10(raw));
    let e = if is_nan(e0) { 0 } else if e0 < -400.0 { -400 } else if e0 > 400.0 { 400 } else { e0 as i64 };
    // A zero length makes e0 −∞: Rust's cast gives i32::MIN, and its 10^MIN is 0.1 (the negation of MIN wraps).
    let p = if e0 <= -2147483648.0 { 0.1 } else { pw(10.0, e) };
    // 10·p is at least raw, so a step is always found.
    let ms: f64[4] = [1.0, 2.0, 5.0, 10.0];
    for m in ms {
        let s = m * p;
        if s >= raw { return take(s, LENGTH); }
    }
    return NAN_;
}
fn snap(x: f64, step: f64) -> f64 {
    let s = show(step, LENGTH);
    return take(prec(js_round(show(x, LENGTH) / s) * s, 12), LENGTH);
}
// Snap a beam position to the step as it reads in the chosen origin.
fn snap_shown(x: f64, step: f64) -> f64 { return typed(snap(shown(x, app_attach), step), app_attach); }

// The position slot of a handle key ("s0", "l2"): its value, or false for none.
fn handle_get(key: u8[:]) -> f64, bool {
    if key.len < 2 { return 0.0, false; }
    let i = parse_index(key[1..]);
    if i < 0 { return 0.0, false; }
    if key[0] == 's' {
        if i < st_sup.len { return st_sup[i].x, true; }
        return 0.0, false;
    }
    if i < st_loads.len && st_loads[i].kind != DIST { return st_loads[i].x, true; }
    return 0.0, false;
}
fn handle_set(key: u8[:], x: f64) {
    let i = parse_index(key[1..]);
    if key[0] == 's' { st_sup[i].x = x; } else { st_loads[i].x = x; }
}

fn move_handle(key: u8[:], x0: f64) {
    let l = st_length;
    let x = rmin(l, rmax(0.0, x0));
    let cur, ok = handle_get(key);
    if !ok { return; }
    handle_set(key, x);
    value(str("[data-field=\"", if key[0] == 's' { "supports" } else { "loads" }, ".", key[1..], ".x\"]"), tidy(show_x(x, app_attach)));
    update(true);
}

fn on_move(frac: f64) {
    if !app_has_layout { return; }
    let x = ((frac * lay_w - lay_ml) / (lay_w - lay_ml - lay_mr)) * lay_l;
    if app_active.len > 0 {
        let k = copy(app_active);
        move_handle(k, snap_shown(x, step_for(st_length)));
    } else {
        set_cursor(snap_event(x, 6.0));
    }
}

fn on_key(key: u8[:], shift: bool, target: u8[:]) {
    let l = st_length;
    let fine = if shift { 10.0 } else { 1.0 };
    let step = step_for(l) / fine;
    if target != "plot" {
        let cur, ok = handle_get(target);
        if !ok { return; }
        var next = 0.0;
        if key == "ArrowLeft" || key == "ArrowDown" { next = cur - step; }
        else if key == "ArrowRight" || key == "ArrowUp" { next = cur + step; }
        else if key == "Home" { next = 0.0; }
        else if key == "End" { next = l; }
        else { return; }
        prevent();
        let x = if key == "Home" || key == "End" { next } else { snap_shown(next, step) };
        move_handle(target, x);
        return;
    }
    if !app_has_sol || !app_has_cursor { return; }
    let c = app_cursor;
    let len = g_m.length;
    var evs: EvRec[>..] = [];
    events_list(evs);
    var next = 0.0;
    if key == "ArrowLeft" || key == "ArrowDown" { next = snap_shown(c - step, step); }
    else if key == "ArrowRight" || key == "ArrowUp" { next = snap_shown(c + step, step); }
    else if key == "Home" { next = 0.0; }
    else if key == "End" { next = len; }
    else if key == "PageDown" {
        next = len;
        for e in evs { if e.x > c + 1e-12 { next = e.x; break; } }
    } else if key == "PageUp" {
        next = 0.0;
        var i = evs.len - 1;
        while i >= 0 { if evs[i].x < c - 1e-12 { next = evs[i].x; break; } i--; }
    } else { return; }
    prevent();
    set_cursor(next);
}

// Supports, loads and the ends, left to right, with what is at each.
struct EvRec { x: f64, what: u8[..2048] }

fn ev_has(what: u8[:], item: u8[:]) -> bool {
    var found = false;
    each_split(what, ", ") { if it == item { found = true; } };
    return found;
}
fn ev_add(evs: EvRec[>..]&, x: f64, item: u8[:]) {
    for &e in evs {
        if e.x == x {
            if !ev_has(e.what, item) && e.what.len + 2 + item.len <= 2048 {
                e.what.append(", ");
                e.what.append(item);
            }
            return;
        }
    }
    var w: u8[..2048] = "";
    w.append(item);
    evs.push(EvRec { x: x, what: w });
}

fn events_list(evs: EvRec[>..]&) {
    evs.clear();
    ev_add(evs, 0.0, "left end");
    ev_add(evs, g_m.length, "right end");
    for s in g_sup { ev_add(evs, s.x, if s.kind == PIN { "pin support" } else { "fixed support" }); }
    for l in g_loads {
        if l.kind == POINT { ev_add(evs, l.x, str(sig(show(l.f, FORCE), 3), " ", sym(FORCE), " force")); }
        else if l.kind == COUPLE { ev_add(evs, l.x, str(sig(show(l.c, MOMENT), 3), " ", sym(MOMENT), " couple")); }
        else { ev_add(evs, l.x1, "distributed load starts"); ev_add(evs, l.x2, "distributed load ends"); }
    }
    stable_sort(evs) { a, b => a.x < b.x };
}

fn snap_event(x: f64, px: f64) -> f64 {
    if !app_has_layout { return x; }
    var best = x;
    var dist = 1.0 / 0.0;
    var evs: EvRec[>..] = [];
    events_list(evs);
    for e in evs {
        let d = abs(lay_x(e.x) - lay_x(x));
        if d < dist { dist = d; best = e.x; }
    }
    return if dist <= px { best } else { x };
}

// Round-off far below the largest value of the same quantity on this beam reads as zero.
fn clean(v: f64, key: u8[:]) -> f64 {
    var scale = abs(g_ext.v.value) / g_m.length;
    if key == "V" { scale = abs(g_ext.v_shear.value); }
    else if key == "M" { scale = abs(g_ext.m.value); }
    else if key == "v" { scale = abs(g_ext.v.value); }
    return if abs(v) <= 1e-10 * scale { 0.0 } else { v };
}

fn jump(p: f64, q: f64) -> bool { return abs(p - q) > 1e-9 * (abs(p) + abs(q) + 1.0); }

// The readout at the cursor: x, V, M, v and θ, with a jump shown as "left → right".
struct Readout { k: u8[..8], v: u8[..200] }
fn readout(c: f64, out: Readout[>..]&) {
    out.clear();
    let l = g_m.length;
    let a = at(c);
    let jv = jump(a.v_left, a.v_right);
    let jm = jump(a.m_left, a.m_right);
    let v = if c <= 0.0 { a.v_right } else if c >= l { a.v_left } else { a.v_right };
    let m = if c <= 0.0 { a.m_right } else if c >= l { a.m_left } else { a.m_right };
    out.push(rd("x", str(short_nf(show_x(c, l), 3), " ", sym(LENGTH))));
    out.push(rd("V", str(if jv { str(rf(a.v_left, "V", FORCE), " → ", rf(a.v_right, "V", FORCE)) } else { rf(v, "V", FORCE) }, " ", sym(FORCE))));
    out.push(rd("M", str(if jm { str(rf(a.m_left, "M", MOMENT), " → ", rf(a.m_right, "M", MOMENT)) } else { rf(m, "M", MOMENT) }, " ", sym(MOMENT))));
    out.push(rd("v", str(rf(a.v, "v", LENGTH), " ", sym(LENGTH))));
    out.push(rd("θ", str(rf(a.theta, "theta", ANGLE), " ", sym(ANGLE))));
}
fn rf(v: f64, key: u8[:], q: i64) -> u8[>..] { return short_nf(show(clean(v, key), q), 3); }
fn rd(k: u8[:], v: u8[:]) -> Readout {
    var r = Readout { k: "", v: "" };
    r.k.append(k);
    r.v.append(v);
    return r;
}

fn readout_html() -> u8[>..] {
    var out: u8[>..] = [];
    if !(app_has_cursor && app_has_sol) { return out; }
    var rs: Readout[>..] = [];
    readout(app_cursor, rs);
    for r in rs { out.append(str("<span><span class=\"k\">", tex_html(r.k), " </span><b>", tex_rich(r.v), "</b></span>")); }
    return out;
}

// "k v, k v": the readout as the plot announces it.
fn readout_text(c: f64) -> u8[>..] {
    var rs: Readout[>..] = [];
    readout(c, rs);
    var out: u8[>..] = [];
    var first = true;
    for r in rs {
        if !first { out.append(", "); }
        first = false;
        out.append(r.k);
        out.append(" ");
        out.append(r.v);
    }
    return out;
}

fn set_cursor(x: f64) {
    if !app_has_sol || !app_has_layout { return; }
    let l = g_m.length;
    let c = rmin(l, rmax(0.0, x));
    app_cursor = c;
    app_has_cursor = true;
    let px = draw_n(lay_x(c));
    attr("#plots .cursor", "x1", px);
    attr("#plots .cursor", "x2", px);
    html("#readout", readout_html());
    attr("#plotarea", "aria-valuenow", tidy(show_x(c, l)));
    attr("#plotarea", "aria-valuetext", readout_text(c));
    if app_active.len == 0 { render_hand_point(); }
}

fn render() {
    let w = rmax(if app_width > 0.0 { app_width } else { 700.0 }, 300.0);
    html("#plots", figure_svg(w));
    if app_has_cursor { set_cursor(app_cursor); }
}

// ---------- results ----------

// The headline results, as value and what it is; shown under the figure and in saved figures.
struct StatItem { v: u8[..160], w: u8[..400] }

fn stat_add(items: StatItem[>..]&, v: u8[:], w: u8[:]) {
    var it = StatItem { v: "", w: "" };
    it.v.append(v);
    it.w.append(w);
    items.push(it);
}

fn stat_items(items: StatItem[>..]&) {
    items.clear();
    let deg = indeterminacy(g_sup);
    if deg > 0 {
        stat_add(items, str("Indeterminate, degree ", deg), "more reactions than equilibrium can find: solved with compatibility");
    } else {
        stat_add(items, "Determinate", "reactions follow from equilibrium alone");
    }
    stat_add(items, str(sig(show(g_ext.v_shear.value, FORCE), 4), " ", sym(FORCE)), str("largest shear, at $x$ = ", at_text(g_ext.v_shear.x)));
    stat_add(items, str(sig(show(g_ext.m.value, MOMENT), 4), " ", sym(MOMENT)),
        str("largest moment (", if g_ext.m.value >= 0.0 { "sagging" } else { "hogging" }, "), at $x$ = ", at_text(g_ext.m.x)));
    stat_add(items, str(sig(show(g_ext.v.value, LENGTH), 4), " ", sym(LENGTH)),
        str("largest deflection, at $x$ = ", at_text(g_ext.v.x), " ($L/", span_ratio(g_m.length, g_ext.v.value), "$)"));
    let c = g_m.section.c;
    if g_m.section.has_c && c != 0.0 && !is_nan(c) {
        stat_add(items, str(sig(show(abs(g_ext.m.value) * c / g_m.section.i, STRESS), 4), " ", sym(STRESS)), "peak bending stress $|M|\\cdot c / I$");
    }
    let resid = residual_of_balance();
    let balance: u8[>..] = if resid < 1e-9 { str("Balanced") } else { str("Residual ", sci(resid)) };
    stat_add(items, balance,
        str("$\\sum F$ and $\\sum M$ of loads and reactions, relative error ", sci(resid)));
}

fn reaction_text(i: i64) -> u8[>..] {
    let r = g_rea[i];
    var t = str(if r.kind == PIN { "Pin" } else { "Fixed" }, " at ", at_text(r.x), ": ", short_nf(show(r.fy, FORCE), 3), " ", sym(FORCE));
    if r.kind == FIXED { t.append(str(", ", short_nf(show(r.mz, MOMENT), 3), " ", sym(MOMENT))); }
    return t;
}

fn stats_html() -> u8[>..] {
    var out: u8[>..] = [];
    if !solved() { return out; }
    var items: StatItem[>..] = [];
    stat_items(items);
    for it in items { out.append(str("<li><b>", tex_rich(it.v), "</b><span>", tex_rich(it.w), "</span></li>")); }
    return out;
}
fn reactions_html() -> u8[>..] {
    var out: u8[>..] = [];
    if !solved() { return out; }
    var i = 0;
    while i < g_rea.len { out.append(str("<li><i></i>", tex_rich(reaction_text(i)), "</li>")); i++; }
    return out;
}

// Values at every support and load: the cells of event i, from x to θ. The cell for "what is here" is empty.
struct Cells { c: u8[..48][8] }

fn table_cells(x: f64, cells: Cells&) {
    let l = g_m.length;
    let a = at(x);
    cells.c[0] = fit(nf(show_x(x, l), 3));
    cells.c[1] = fit("");
    cells.c[2] = fit("—");
    cells.c[3] = fit("—");
    cells.c[4] = fit("—");
    cells.c[5] = fit("—");
    if x > 0.0 { cells.c[2] = fit(nf(show(clean(a.v_left, "V"), FORCE), 3)); }
    if x < l { cells.c[3] = fit(nf(show(clean(a.v_right, "V"), FORCE), 3)); }
    if x > 0.0 { cells.c[4] = fit(nf(show(clean(a.m_left, "M"), MOMENT), 3)); }
    if x < l { cells.c[5] = fit(nf(show(clean(a.m_right, "M"), MOMENT), 3)); }
    cells.c[6] = fit(nf(show(clean(a.v, "v"), LENGTH), 3));
    cells.c[7] = fit(nf(show(clean(a.theta, "theta"), ANGLE), 3));
}
fn fit(s: u8[:]) -> u8[..48] {
    var r: u8[..48] = "";
    r.append(s);
    return r;
}

fn table_html() -> u8[>..] {
    var out: u8[>..] = [];
    if !solved() { return out; }
    var evs: EvRec[>..] = [];
    events_list(evs);
    for e in evs {
        var cells = Cells { c: [fit(""); 8] };
        table_cells(e.x, cells);
        out.append("<tr>");
        var k = 0;
        while k < 8 {
            let v: const u8[:] = if k == 1 { e.what } else { cells.c[k] };
            out.append(str("<td", if k == 1 { "" } else { " class=\"num\"" }, ">", tex_rich(v), "</td>"));
            k++;
        }
        out.append("</tr>");
    }
    return out;
}

// ---------- the hand calculations ----------

fn hand_body() -> u8[>..] {
    if !solved() { return "<p class=\"muted\">Fix the beam first: there is no solution to work by hand.</p>"; }
    hand_ensure(app_u, app_mid);
    return hand_steps_html();
}
// The selected point's frame follows the cursor on the diagrams.
fn hand_point() -> u8[>..] {
    if solved() && app_has_cursor {
        hand_ensure(app_u, app_mid);
        return hand_point_html(app_cursor);
    }
    return "";
}
fn render_hand() {
    if !hand_visible { hand_stale = true; return; }
    hand_stale = false;
    html("#hand-body", hand_body());
    render_hand_point();
}
fn render_hand_point() {
    if !hand_visible { return; }
    html("#hand-point", hand_point());
}

// ---------- the page as it opens ----------

// ---------- the figure ----------

// The page's figure at width w, as SVG; it sets the layout the pointer is read against.
fn figure_svg(w: f64) -> u8[>..] {
    draw_reset();
    var list: DOp[>..] = [];
    let f = figure(w, true, list);
    lay_ml = f.ml;
    lay_mr = f.mr;
    lay_w = f.w;
    lay_l = f.l;
    app_has_layout = true;
    return draw_svg(list, f.w, f.h, " role=\"group\" aria-label=\"Beam, shear force, bending moment and deflection diagrams\"", "");
}

// ---------- saving the figure ----------
// The image and the PDF are drawn from the same display list as the page, entirely in this page: nothing is
// uploaded. Saved figures always use the site's light colours, which print well.

fn section_label(i: i64) -> const u8[:] { return section_options[i].label; }

fn val_unit(si: f64, q: i64) -> u8[>..] { return str(sig(show(si, q), 4), " ", sym(q)); }

fn line_add(out: u8[>..]&, s: u8[:]) {
    if out.len > 0 { out.push('\n'); }
    out.append(s);
}

// The model in words, one line each, separated by newlines.
fn model_lines(out: u8[>..]&) {
    out.clear();
    let l = g_m.length;
    line_add(out, str("Length L = ", val_unit(l, LENGTH), "; x runs from ", at_text(0.0), " to ", at_text(l)));
    var i = 0;
    while i < st_sup.len {
        let sp = st_sup[i];
        line_add(out, str("Support ", i + 1, ": ", if sp.kind == PIN { "pin" } else { "fixed" }, " at x = ", at_text(sp.x)));
        i++;
    }
    i = 0;
    while i < st_loads.len {
        let ld = st_loads[i];
        var d: u8[>..] = [];
        if ld.kind == POINT {
            d.append(str("point force ", val_unit(ld.f, FORCE), " at x = ", at_text(ld.x)));
        } else if ld.kind == COUPLE {
            d.append(str("couple ", val_unit(ld.c, MOMENT), " at x = ", at_text(ld.x)));
        } else {
            var q: u8[>..] = [];
            if ld.q1 == ld.q2 { q.append(val_unit(ld.q1, DISTRIBUTED)); }
            else { q.append(str(sig(show(ld.q1, DISTRIBUTED), 4), " → ", val_unit(ld.q2, DISTRIBUTED))); }
            d.append(str("distributed ", q, " from x = ", at_text(ld.x1), " to ", at_text(ld.x2)));
        }
        line_add(out, str("Load ", i + 1, ": ", d));
        i++;
    }
    var si = -1;
    var oi = 0;
    for o in section_options { if o.id == st_shape_name { si = oi; } oi++; }
    line_add(out, str("Section: ", if si >= 0 { section_label(si) } else { st_shape_name[..] }));
    let sc = st_section.shape;
    var dims: u8[>..] = [];
    if sc >= 1 && sc <= 4 {
        var j = FIELD_AT[sc - 1];
        while j < FIELD_AT[sc] {
            let v, has = dim_get(st_section, FIELD_KEY[j]);
            if has {
                if dims.len > 0 { dims.append(", "); }
                dims.append(str(tex_plain(FIELD_LABEL[j]), " = ", val_unit(v, FIELD_Q[j])));
            }
            j++;
        }
    }
    if dims.len > 0 { line_add(out, dims); }
    line_add(out, tex_plain(section_summary()));
    var mi = -1;
    oi = 0;
    for m in materials { if m.id == st_mat_id { mi = oi; } oi++; }
    line_add(out, str("Material: ", if mi >= 0 { materials[mi].label } else { "custom" }, ", E = ", val_unit(st_e, STRESS), ", ν = ", sig(st_nu, 4)));
}

// A4 report. Each row and diagram stays on one page.
var rp: DOp[>..] = [];
var rp_y: f64 = 54.0;

fn rp_page() {
    draw_page(rp);
    rp_y = 54.0;
}
fn rp_text(s: u8[:], heading: bool) {
    var w: u8[>..] = [];
    wrap(s, if heading { 65 } else { 90 }, w);
    var n = 0;
    each_split(w, '\n') { n++; };
    let height = n as f64 * 19.0 + 10.0;
    if rp_y + height > 1060.0 { rp_page(); }
    each_split(w, '\n') {
        draw_text(rp, 40.0, rp_y, it, if heading { "head" } else { "body" }, ANC_START);
        rp_y += 19.0;
    };
    rp_y += 10.0;
}
fn rp_diagram(fl: DOp[:], k: i64, offset: f64, height: f64) {
    if rp_y + height > 1060.0 { rp_page(); }
    draw_open(rp, str(" transform=\"translate(40 ", js(rp_y - offset), ")\""));
    let a, b = draw_node(fl, k);
    draw_copy(rp, fl, a, b);
    draw_close(rp);
    rp_y += height + 20.0;
}

fn raw_text(key: u8[:]) -> const u8[:] { return jstr(raw_root(), key); }

fn pdf_report(date: u8[:]) -> u8[>..] {
    draw_reset();
    rp.clear();
    rp_y = 54.0;
    rp_text("1. Beam diagram report", true);
    rp_text(str("Date: ", date, ". Units: ", UNIT_LABELS[app_u]), false);
    rp_text("2. Input", true);
    var fl: DOp[>..] = [];
    let fig = figure(714.0, false, fl);
    rp_diagram(fl, 0, 0.0, 219.0);
    var lines: u8[>..] = [];
    model_lines(lines);
    each_split(lines, '\n') { rp_text(it, false); };
    rp_text("3. Reactions", true);
    var i = 0;
    while i < g_rea.len { rp_text(reaction_text(i), false); i++; }
    rp_page();
    rp_text("4. Shear force, moment and deflection", true);
    rp_diagram(fl, 1, 219.0, fig.h - 219.0);
    rp_text("5. Largest values", true);
    var items: StatItem[>..] = [];
    stat_items(items);
    for it in items { rp_text(tex_plain(str(it.v, ": ", it.w)), false); }
    rp_text("6. Hand calculation (Macaulay)", true);
    hand_ensure(app_u, app_mid);
    let n = hand_step_count();
    i = 0;
    while i < n {
        if hand_step_is_eq(i) { rp_text(hand_step_unicode(i), false); } else { rp_text(tex_plain(hand_step_text(i)), false); }
        i++;
    }
    rp_text("7. Method and assumptions", true);
    rp_text(raw_text("method"), false);
    var t = jm_first(jm_member(raw_root(), "conventions"));
    while t >= 0 { rp_text(jm_rtext(t), false); t = jm_next(t); }
    t = jm_first(jm_member(raw_root(), "assumptions"));
    while t >= 0 { rp_text(jm_rtext(t), false); t = jm_next(t); }
    let count = draw_page_count(rp);
    var out: DOp[>..] = [];
    var k = 0;
    while k < count {
        let from, to = draw_page_range(rp, k);
        draw_copy(out, rp, from, to);
        draw_text(out, 397.0, 1090.0, str("Page ", k + 1, " of ", count), "body", ANC_MIDDLE);
        if k < count - 1 { draw_page(out); }
        k++;
    }
    let f0 = font_data[..font_len[0]];
    let f1 = font_data[font_len[0]..font_len[0] + font_len[1]];
    let f2 = font_data[font_len[0] + font_len[1]..];
    return pdf_pages(out, 794.0, 1123.0, "Beam diagram report", f0, f1, f2);
}

// The beam and its diagrams with every result under them: display list, width, height.
var ex_w: f64 = 0.0;
var ex_h: f64 = 0.0;
fn export_figure(list: DOp[>..]&) {
    draw_reset();
    var fl: DOp[>..] = [];
    let fig = figure(960.0, false, fl);
    let w = fig.w;
    let left = 32.0;
    let mid = w / 2.0 + 8.0;
    var c: DOp[>..] = [];
    var y = fig.h + 16.0;
    draw_text(c, left, y, "Beam diagram results", "head", ANC_START);
    y += 20.0;
    let origin = if app_mid { "middle of the beam (mid-span), negative to the left" } else { "left end" };
    var note: u8[>..] = [];
    wrap(str("Units ", UNIT_LABELS[app_u], ". x from the ", origin, ", positive to the right; y and forces positive up; couples positive counter-clockwise; bending moment positive sagging."), 140, note);
    each_split(note, '\n') { draw_text(c, left, y, it, "note", ANC_START); y += 16.0; };
    y += 12.0;
    // The two columns: the model, and the results.
    var model: u8[>..] = [];
    model_lines(model);
    var results: u8[>..] = [];
    var items: StatItem[>..] = [];
    stat_items(items);
    for it in items { line_add(results, tex_plain(str(it.v, ": ", it.w))); }
    line_add(results, "Reactions (force + up, couple + counter-clockwise):");
    var i = 0;
    while i < g_rea.len { line_add(results, str("  ", reaction_text(i))); i++; }
    let a = export_column(c, left, y, "BEAM, SECTION AND MATERIAL", model);
    let b = export_column(c, mid, y, "RESULTS", results);
    y = rmax(a, b) + 14.0;
    draw_text(c, left, y, "VALUES AT SUPPORTS AND LOADS", "title", ANC_START);
    y += 20.0;
    // x, what, V x⁻, V x⁺, M x⁻, M x⁺, v, θ: numbers right-aligned at these edges, "what" from its left.
    let cols: f64[8] = [92.0, 104.0, 520.0, 600.0, 690.0, 780.0, 860.0, w - left];
    let uq = [LENGTH, FORCE, FORCE, MOMENT, MOMENT, LENGTH, ANGLE];
    var head: Cells = Cells { c: [fit(""); 8] };
    head.c[0] = fit(str("x (", sym(LENGTH), ")"));
    head.c[1] = fit("What is here");
    head.c[2] = fit(str("V x⁻ (", sym(FORCE), ")"));
    head.c[3] = fit(str("V x⁺ (", sym(FORCE), ")"));
    head.c[4] = fit(str("M x⁻ (", sym(MOMENT), ")"));
    head.c[5] = fit(str("M x⁺ (", sym(MOMENT), ")"));
    head.c[6] = fit(str("v (", sym(LENGTH), ")"));
    head.c[7] = fit(str("θ (", sym(ANGLE), ")"));
    y = export_row(c, cols, w, left, y, head, "What is here", "cell th");
    var evs: EvRec[>..] = [];
    events_list(evs);
    for e in evs {
        var cells = Cells { c: [fit(""); 8] };
        table_cells(e.x, cells);
        y = export_row(c, cols, w, left, y, cells, e.what, "cell");
    }
    let h = ceil(y + 12.0);
    draw_rect(list, 0.0, 0.0, w, h, 0.0, paint_fill(COL_BG), "");
    draw_copy(list, fl, 0, fl.len);
    draw_open(list, "");
    draw_copy(list, c, 0, c.len);
    draw_close(list);
    ex_w = w;
    ex_h = h;
}

fn export_column(c: DOp[>..]&, x: f64, y0: f64, title: u8[:], lines: u8[:]) -> f64 {
    var yy = y0;
    draw_text(c, x, yy, title, "title", ANC_START);
    yy += 18.0;
    each_split(lines, '\n') {
        var parts: u8[>..] = [];
        wrap(it, 68, parts);
        each_split(parts, '\n') { draw_text(c, x, yy, it, "body", ANC_START); yy += 17.0; };
    };
    return yy;
}

fn export_row(c: DOp[>..]&, cols: f64[8], w: f64, left: f64, y0: f64, row: Cells&, what_text: u8[:], cls_: u8[:]) -> f64 {
    var y = y0;
    var what: u8[>..] = [];
    wrap(what_text, 48, what);
    var k = 0;
    while k < 8 {
        if k != 1 { draw_text(c, cols[k], y, row.c[k], cls_, ANC_END); }
        k++;
    }
    var n = 0;
    each_split(what, '\n') { draw_text(c, cols[1], y + 16.0 * n as f64, it, cls_, ANC_START); n++; };
    y += 16.0 * n as f64 + 6.0;
    draw_line(c, left, y - 13.0, w - left, y - 13.0, COL_LINE, 1.0);
    return y;
}

// A saved SVG: the print palette and the embedded fonts, so it looks the same anywhere.
fn print_svg(list: DOp[:], w: f64, h: f64) -> u8[>..] {
    let defs = str("<style>", font_css, draw_css(), "</style>");
    let s = draw_svg(list, w, h, "", defs);
    var out: u8[>..] = [];
    out.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
    var at = 0;
    loop {
        let i = find(s[at..], "var(--");
        if i < 0 { break; }
        out.append(s[at..at + i]);
        let tail = s[at + i + 6..];
        var end = find(tail, ")");
        if end < 0 { end = 0; }
        let k = tail[..end];
        if k == "sans" || k == "mono" { out.append("\"DM Sans\",sans-serif"); }
        else if k == "serif" { out.append("\"Source Serif 4\",serif"); }
        else {
            let pi = palette_index(k);
            if pi >= 0 { out.append(print_color(pi)); } else { out.append(s[at + i..at + i + 7 + end]); }
        }
        at = at + i + 6 + end + 1;
    }
    out.append(s[at..]);
    return out;
}

fn save_figure(kind: u8[:]) {
    flush();
    if !solved() { text("#figure-status", "Fix the beam first: there is no solution to save."); return; }
    var list: DOp[>..] = [];
    export_figure(list);
    let name = str("beamdiag.", kind);
    if kind == "pdf" {
        let p = pdf_report(app_date);
        var enc = base64(p);
        save(name, "application/pdf", enc, true);
    } else {
        let s = print_svg(list, ex_w, ex_h);
        text("#figure-status", "Drawing…");
        cmd_begin("raster", s);
        cmds.append(",\"w\":");
        cmds.append(js(ex_w));
        cmds.append(",\"h\":");
        cmds.append(js(ex_h));
        cmd_str("name", name);
        cmd_str("bg", print_color(0));
        cmd_end();
        return;
    }
    text("#figure-status", str("Saved ", name, "."));
}

// ---------- the page as it opens ----------

fn q_name(q: i64) -> const u8[:] {
    let names: const u8[:][9] = ["length", "force", "stress", "moment", "distributed", "area", "inertia", "rigidity", "angle"];
    return names[q];
}
fn unit_span(q: i64) -> u8[>..] { return str("<span data-unit=\"", q_name(q), "\">", sym(q), "</span>"); }

fn list_items(key: u8[:], parent: i64) -> u8[>..] {
    var out: u8[>..] = [];
    var t = jm_first(jm_member(parent, key));
    while t >= 0 { out.append(str("<li>", esc(jm_rtext(t)), "</li>")); t = jm_next(t); }
    return out;
}

fn origin_option(v: u8[:], label: u8[:]) -> u8[>..] {
    return str("<option value=\"", v, "\"", if (v == "mid") == app_mid { " selected" } else { "" }, ">", label, "</option>");
}

let BODY: const u8[:] = embed_file("body.html");

// Every region of the page, filled in as the script would, so the page reads before it runs.
fn body(root: u8[:]) -> u8[>..] {
    let figure = if app_has_sol { figure_svg(700.0) } else { str("") };
    let d = raw_root();
    let n = jm_member(d, "nastran");
    var error: u8[>..] = [];
    if app_has_error {
        error.append(str("<div id=\"error\" class=\"error\" role=\"alert\"><b>Can't solve this beam: </b>", esc(in_convention(err_msg)), "</div>"));
    } else {
        error.append("<div id=\"error\" class=\"error\" role=\"alert\" hidden></div>");
    }
    var cards: u8[>..] = [];
    var cd = jm_first(jm_member(n, "cards"));
    while cd >= 0 { cards.append(str("<tr><td><code>", esc(jstr(cd, "card")), "</code></td><td>", esc(jstr(cd, "use")), "</td></tr>")); cd = jm_next(cd); }
    var sources: u8[>..] = [];
    var sc = jm_first(jm_member(d, "sources"));
    while sc >= 0 { sources.append(str("<li><a href=\"", esc(jstr(sc, "url")), "\" rel=\"noopener\">", esc(jstr(sc, "title")), "</a></li>")); sc = jm_next(sc); }
    let tmpl = BODY;
    var out: u8[>..] = [];
    var at = 0;
    loop {
        let i = find(tmpl[at..], "{{");
        if i < 0 { break; }
        out.append(tmpl[at..at + i]);
        let tail = tmpl[at + i + 2..];
        let j = find(tail, "}}");
        if j < 0 { abort("an open {{"); }
        let name = tail[..j];
        if name == "root" { out.append(root); }
        else if name == "presets" { out.append(preset_options()); }
        else if name == "units" { out.append(unit_options()); }
        else if name == "note" { out.append(esc(preset_note())); }
        else if name == "error" { out.append(error); }
        else if name == "stale" { if app_has_error { out.append("stale"); } }
        else if name == "figure" { out.append(figure); }
        else if name == "readout" { out.append(readout_html()); }
        else if name == "stats" { out.append(stats_html()); }
        else if name == "reactions" { out.append(reactions_html()); }
        else if name == "length" { out.append(unit_span(LENGTH)); }
        else if name == "force" { out.append(unit_span(FORCE)); }
        else if name == "moment" { out.append(unit_span(MOMENT)); }
        else if name == "stress" { out.append(unit_span(STRESS)); }
        else if name == "angle" { out.append(unit_span(ANGLE)); }
        else if name == "len" { out.append(tidy(show(st_length, LENGTH))); }
        else if name == "div" { out.append(js(st_divisions)); }
        else if name == "origins" { out.append(origin_option("left", "Left end, + to the right")); out.append(origin_option("mid", "Mid-span, − left, + right")); }
        else if name == "supports" { out.append(supports_html()); }
        else if name == "loads" { out.append(loads_html()); }
        else if name == "shapes" { out.append(shape_options()); }
        else if name == "fields" { out.append(section_fields_html()); }
        else if name == "derived" { out.append(tex_rich(section_summary())); }
        else if name == "materials" { out.append(material_options()); }
        else if name == "e" { out.append(tidy(show(st_e, STRESS))); }
        else if name == "nu" { out.append(tidy(st_nu)); }
        else if name == "table" { out.append(table_html()); }
        else if name == "point" || name == "hand" { }
        else if name == "system" { out.append(esc(UNIT_LABELS[app_u])); }
        else if name == "run" { out.append(list_items("run", n)); }
        else if name == "status" { out.append(esc(jstr(n, "status"))); }
        else if name == "cards" { out.append(cards); }
        else if name == "method" { out.append(esc(raw_text("method"))); }
        else if name == "conventions" { out.append(list_items("conventions", d)); }
        else if name == "assumptions" { out.append(list_items("assumptions", d)); }
        else if name == "sources" { out.append(sources); }
        else { abort(str("no value for {{", name, "}}")); }
        at = at + i + 2 + j + 2;
    }
    out.append(tmpl[at..]);
    return out;
}

var app_started: bool = false;

// The page opens on a solved beam in N, mm and MPa, with the centre as origin.
fn app_init() {
    if app_started { return; }
    app_started = true;
    data_init();
    from_preset(0);
    app_u = unit_index(DEFAULT_UNITS);
    app_mid = true;
    update(false);
    cmds.clear();
    cmd_n = 0;
}
