import std;
import math;
import os;
import .src.engine;
import .src.num;
import .src.wasm_json;
import .src.app;
import .src.state;
import .src.data;
import .src.figure;
import .src.tex;

let FIXTURES: const u8[:] = embed_file("fixtures.json");
let REFERENCE: const u8[:] = embed_file("reference.json");
let RANDOM: const u8[:] = embed_file("random.json");
let NAN = 0.0 / 0.0;

var failures = 0;
var replay_hash: u64 = 7;
var replay_count = 0;
let REPLAY_MODULUS: u64 = 4294967291;
let REPLAY_COUNT = 27546;
let REPLAY_HASH: u64 = 4006951827;

fn replay_add(x: f64) {
    for c in js(x) { replay_hash = (replay_hash * 131 + (c as u64)) % REPLAY_MODULUS; }
    replay_count++;
}

fn expect(ok: bool, what: u8[:]) {
    if !ok { write_stderr(str("beam test: ", what, "\n")); failures++; }
}

fn same_text(got: u8[:], want: u8[:], what: u8[:]) {
    expect(got == want, str(what, ": got ", got, ", want ", want));
}

fn num(n: i64, key: u8[:]) -> f64 {
    let v, ok = jm_number(jm_member(n, key));
    return if ok { v } else { NAN };
}

fn load_model(m: i64) {
    let section = jm_member(m, "section");
    let material = jm_member(m, "material");
    let divisions = jm_member(m, "divisions");
    let d, has_d = jm_number(divisions);
    in_x = Input { length: num(m, "length"), e: num(material, "E"), nu: num(material, "nu"),
        a: num(section, "A"), i: num(section, "I"), iy: 0.0, has_iy: false, j: 0.0, has_j: false, c: 0.0, has_c: false,
        divisions: d, has_divisions: has_d, has_supports: true, has_loads: true };
    in_sup.clear();
    var s = jm_first(jm_member(m, "supports"));
    while s >= 0 {
        in_sup.push(Support { kind: if jm_rtext(jm_member(s, "kind")) == "fixed" { FIXED } else { PIN }, x: num(s, "x") });
        s = jm_next(s);
    }
    in_loads.clear();
    var l = jm_first(jm_member(m, "loads"));
    while l >= 0 {
        let kind = jm_rtext(jm_member(l, "kind"));
        let k = if kind == "point" { POINT } else if kind == "moment" { COUPLE } else { DIST };
        in_loads.push(Load { kind: k, x: num(l, "x"), f: num(l, "F"), c: num(l, "C"),
            x1: num(l, "x1"), x2: num(l, "x2"), q1: num(l, "q1"), q2: num(l, "q2") });
        l = jm_next(l);
    }
}

fn largest(list: i64, key: u8[:]) -> f64 {
    var big = 0.0;
    var n = jm_first(list);
    while n >= 0 { big = max(big, abs(num(n, key))); n = jm_next(n); }
    return big;
}

fn near(got: f64, want: f64, scale: f64) -> bool {
    return abs(got - want) <= 1e-8 * scale + 1e-300;
}

fn solver_matches_exact_macaulay_answers(id: u8[:], model: i64, answer: i64) {
    load_model(model);
    if !solve(SI) { expect(false, str(id, ": does not solve: ", err_msg)); return; }
    let reactions = jm_member(answer, "reactions");
    let points = jm_member(answer, "points");
    let fy_scale = largest(reactions, "Fy");
    let mz_scale = max(largest(reactions, "Mz"), fy_scale * g_m.length);
    var r = jm_first(reactions);
    var k = 0;
    while r >= 0 {
        expect(k < g_rea.len && g_rea[k].x == num(r, "x"), str(id, ": reaction ", k, " is not at x = ", num(r, "x")));
        if k < g_rea.len {
            replay_add(g_rea[k].fy);
            replay_add(g_rea[k].mz);
            expect(near(g_rea[k].fy, num(r, "Fy"), fy_scale), str(id, ": reaction force ", k));
            expect(near(g_rea[k].mz, num(r, "Mz"), mz_scale), str(id, ": reaction moment ", k));
        }
        k++;
        r = jm_next(r);
    }
    let v_scale = max(largest(points, "Vleft"), largest(points, "Vright"));
    let m_scale = max(largest(points, "Mleft"), largest(points, "Mright"));
    let ei = g_m.e * g_m.section.i;
    let d_scale = max(largest(points, "v"), m_scale * g_m.length * g_m.length / ei);
    let t_scale = max(largest(points, "theta"), m_scale * g_m.length / ei);
    var p = jm_first(points);
    while p >= 0 {
        let x = num(p, "x");
        let a = at(x);
        let where = str(id, " at x = ", x, ": ");
        replay_add(a.v_left);
        replay_add(a.v_right);
        replay_add(a.m_left);
        replay_add(a.m_right);
        replay_add(a.v);
        replay_add(a.theta);
        expect(near(a.v_left, num(p, "Vleft"), v_scale) && near(a.v_right, num(p, "Vright"), v_scale), str(where, "shear"));
        expect(near(a.m_left, num(p, "Mleft"), m_scale) && near(a.m_right, num(p, "Mright"), m_scale), str(where, "moment"));
        expect(near(a.v, num(p, "v"), d_scale), str(where, "deflection"));
        expect(near(a.theta, num(p, "theta"), t_scale), str(where, "slope"));
        p = jm_next(p);
    }
    let q = equilibrium();
    expect(abs(q.fy) <= 1e-8 * q.scale_f && abs(q.mz) <= 1e-8 * q.scale_m, str(id, ": loads and reactions are not in equilibrium"));
}

fn us_units_use_the_exact_inch_and_pound_force() {
    let lbf_in = unit_index("lbf-in");
    let kip_in = unit_index("kip-in");
    expect(from_units(1.0, LENGTH, lbf_in) == 0.0254 && from_units(1.0, LENGTH, kip_in) == 0.0254, "1 in is 0.0254 m");
    expect(from_units(1.0, FORCE, lbf_in) == 4.4482216152605, "1 lbf is 4.4482216152605 N");
    expect(from_units(1.0, FORCE, kip_in) == 4448.2216152605, "1 kip is 1000 lbf");
}

fn same(got: f64, want: f64) -> bool { return abs(got - want) <= 4e-16 * abs(want); }

fn each_unit_system_is_consistent() {
    var u = 0;
    while u < UNIT_COUNT {
        let l = unit_factor(u, LENGTH);
        let f = unit_factor(u, FORCE);
        let id = UNIT_IDS[u];
        expect(same(unit_factor(u, STRESS), f / (l * l)), str(id, ": stress is force per length squared"));
        expect(same(unit_factor(u, MOMENT), f * l), str(id, ": moment is force times length"));
        expect(same(unit_factor(u, DISTRIBUTED), f / l), str(id, ": distributed load is force per length"));
        expect(same(unit_factor(u, AREA), l * l), str(id, ": area is length squared"));
        expect(same(unit_factor(u, INERTIA), l * l * l * l), str(id, ": second moment is length to the fourth"));
        expect(same(unit_factor(u, RIGIDITY), f * l * l), str(id, ": rigidity is force times length squared"));
        expect(unit_factor(u, ANGLE) == 1.0, str(id, ": angles are radians"));
        expect(to_units(from_units(1.0, LENGTH, u), LENGTH, u) == 1.0, str(id, ": to_units undoes from_units"));
        u++;
    }
}

fn powers_are_correctly_rounded() {
    expect(pw(1.1, 3) == 1.3310000000000004, "1.1^3");
    expect(pw(1.1, -3) == 0.7513148009015775, "1.1^-3");
    expect(pw(3.0, -5) == 0.00411522633744856, "3^-5");
    expect(pw(0.7, 7) == 0.08235429999999996, "0.7^7");
    expect(pw(1.0000001, 25) == 1.0000025000030015, "1.0000001^25");
}

fn jmax_and_jmin_give_nan_when_either_side_is_nan() {
    expect(is_nan(jmax(NAN, 1.0)) && is_nan(jmax(1.0, NAN)), "jmax with NaN");
    expect(is_nan(jmin(NAN, 1.0)) && is_nan(jmin(1.0, NAN)), "jmin with NaN");
    expect(jmax(1.0, 2.0) == 2.0 && jmin(1.0, 2.0) == 1.0, "jmax and jmin of numbers");
}

fn distinct_sorts_and_drops_repeats_with_minus_zero_as_zero() {
    var xs: f64[>..] = [3.0, -0.0, 1.0, 0.0, 3.0, 2.0];
    distinct(xs);
    expect(xs.len == 4 && xs[0] == 0.0 && xs[1] == 1.0 && xs[2] == 2.0 && xs[3] == 3.0, "distinct of 3, -0, 1, 0, 3, 2");
}

fn simple_beam(kinds: i64[:], xs: f64[:]) -> bool {
    in_x = Input { length: 4.0, e: 2e11, nu: 0.3, a: 0.005, i: 8e-5, iy: 0.0, has_iy: false, j: 0.0, has_j: false, c: 0.0, has_c: false,
        divisions: 4.0, has_divisions: true, has_supports: true, has_loads: true };
    in_sup.clear();
    var k = 0;
    while k < kinds.len { in_sup.push(Support { kind: kinds[k], x: xs[k] }); k++; }
    in_loads.clear();
    in_loads.push(Load { kind: POINT, x: 2.5, f: -1000.0, c: NAN, x1: NAN, x2: NAN, q1: NAN, q2: NAN });
    return solve(SI);
}

fn a_beam_is_stable_with_a_fixed_support_or_two_pins() {
    expect(!simple_beam([PIN], [0.0]) && err_field == "supports", "one pin is a mechanism");
    expect(simple_beam([FIXED], [0.0]), "one fixed support holds the beam");
    expect(simple_beam([PIN, PIN], [0.0, 3.0]), "two pins hold the beam");
    expect(!simple_beam([PIN, PIN], [1.0, 1.0]) && err_field == "supports", "two pins at one place are refused");
}

fn indeterminacy_is_reaction_components_minus_two() {
    let sup: Support[3] = [Support { kind: FIXED, x: 0.0 }, Support { kind: PIN, x: 1.0 }, Support { kind: PIN, x: 2.0 }];
    expect(indeterminacy(sup[0..2]) == 1 && indeterminacy(sup[0..3]) == 2 && indeterminacy(sup[1..3]) == 0, "indeterminacy");
}

fn signs_follow_up_positive_and_sagging_positive() {
    expect(simple_beam([PIN, PIN], [0.0, 4.0]), "a pinned beam with a downward force solves");
    expect(g_rea[0].fy > 0.0 && g_rea[1].fy > 0.0, "a downward force gives upward reactions");
    let a = at(2.5);
    expect(a.m_left > 0.0, "a simply supported beam under a downward force sags, so M > 0");
    expect(a.v < 0.0, "the beam deflects down, so v < 0");
    expect(at(1.0).v_left == g_rea[0].fy, "V is the sum of the upward forces left of the section");
}

fn numbers_read_as_javascript_writes_them() {
    same_text(js(0.1 + 0.2), "0.30000000000000004", "String(0.1 + 0.2)");
    same_text(js(1e21), "1e+21", "String(1e21)");
    same_text(js(1e-7), "1e-7", "String(1e-7)");
    same_text(js(123456789012345680000.0), "123456789012345680000", "String(123456789012345680000)");
    same_text(js(-0.0), "0", "String(-0)");
    same_text(js(5e-324), "5e-324", "String(5e-324)");
    same_text(js(1.7976931348623157e308), "1.7976931348623157e+308", "String(MAX_VALUE)");
    same_text(js(9007199254740994.0), "9007199254740994", "String(2^53 + 2)");
    same_text(js(0.000001), "0.000001", "String(0.000001)");
    same_text(js(1.0 / 3.0), "0.3333333333333333", "String(1/3)");
    same_text(to_precision(1.0 / 3.0, 10), "0.3333333333", "(1/3).toPrecision(10)");
    same_text(to_precision(123.456, 2), "1.2e+2", "(123.456).toPrecision(2)");
    same_text(to_precision(0.000123456, 3), "0.000123", "(0.000123456).toPrecision(3)");
    same_text(to_precision(9.995, 3), "9.99", "(9.995).toPrecision(3)");
    same_text(to_precision(1e21, 5), "1.0000e+21", "(1e21).toPrecision(5)");
    same_text(to_exponential(1.0 / 3.0, 3), "3.333e-1", "(1/3).toExponential(3)");
    same_text(to_exponential(123456.0, 2), "1.23e+5", "(123456).toExponential(2)");
    same_text(to_exponential(0.5, 0), "5e-1", "(0.5).toExponential(0)");
    same_text(to_exponential(1.25, 1), "1.3e+0", "(1.25).toExponential(1)");
    same_text(locale(1234567.891, 2), "1,234,567.89", "(1234567.891).toLocaleString en-GB 2");
    same_text(locale(0.005, 2), "0.01", "(0.005).toLocaleString en-GB 2");
    same_text(locale(0.0049, 2), "0.00", "(0.0049).toLocaleString en-GB 2");
    same_text(locale(-1234.5, 0), "-1,235", "(-1234.5).toLocaleString en-GB 0");
    same_text(locale(2.5, 0), "3", "(2.5).toLocaleString en-GB 0");
    expect(read_double("1.5e3") == 1500.0 && read_double("0.1") == 0.1, "decimal text reads as the nearest double");
}

fn gauss_rules_are_exact_to_their_degree() {
    var k = 0;
    while k <= 9 {
        var g5 = 0.0;
        var i = 0;
        while i < 5 { g5 += GAUSS5_W[i] * pw(GAUSS5_X[i], k); i++; }
        var g3 = 0.0;
        i = 0;
        while i < 3 { g3 += GAUSS3_W[i] * pw(GAUSS3_X[i], k); i++; }
        let exact = if k % 2 == 1 { 0.0 } else { 2.0 / ((k + 1) as f64) };
        expect(abs(g5 - exact) <= 1e-15, str("5-point Gauss integrates x^", k, " on [-1, 1]"));
        if k <= 5 { expect(abs(g3 - exact) <= 1e-15, str("3-point Gauss integrates x^", k, " on [-1, 1]")); }
        k++;
    }
}

fn diagrams_close_at_the_ends_and_show_a_jump_as_two_points() {
    expect(simple_beam([PIN, PIN], [0.0, 4.0]), "a pinned beam solves");
    var pts: Sample[>..] = [];
    diagram(40, pts);
    let last = pts[pts.len - 1];
    expect(pts[0].x == 0.0 && pts[0].shear == 0.0 && pts[0].m == 0.0, "the diagrams start at zero");
    expect(last.x == 4.0 && last.shear == 0.0 && last.m == 0.0, "the diagrams end at zero");
    expect(pts[1].x == 0.0 && pts[1].shear == g_rea[0].fy, "the reaction at x = 0 is a jump of two points at the same x");
}

fn rust_and_javascript_parity_helpers() {
    expect(total_less(-0.0, 0.0) && !total_less(0.0, -0.0), "total_cmp puts -0 before 0");
    expect(total_less(1e308, NAN) && !total_less(NAN, 1e308), "total_cmp puts NaN after every number");
    expect(rmin(NAN, 1.0) == 1.0 && rmin(1.0, NAN) == 1.0 && rmax(NAN, 1.0) == 1.0 && rmax(1.0, NAN) == 1.0, "f64::min and f64::max let a NaN give way");
    expect(fig_fmin(NAN, 1.0) == 1.0 && fig_fmax(1.0, NAN) == 1.0, "the figure's f64::min and f64::max let a NaN give way");
    let inf, inf_ok = parse_f64("inf");
    let ninf, ninf_ok = parse_f64("-Infinity");
    let nan, nan_ok = parse_f64("NaN");
    let half, half_ok = parse_f64(".5");
    let bad_e, bad_e_ok = parse_f64("1e");
    let empty, empty_ok = parse_f64("");
    expect(inf_ok && inf > 1e308 && ninf_ok && ninf < -1e308 && nan_ok && is_nan(nan), "str::parse::<f64> reads inf, infinity and nan");
    expect(half_ok && half == 0.5 && !bad_e_ok && !empty_ok, "str::parse::<f64> reads decimal text only");
    expect(js_round(2.5) == 3.0 && js_round(-2.5) == -2.0 && fig_js_round(-0.5) == 0.0, "Math.round rounds halves up");
    expect(number_of("") == 0.0 && number_of("  ") == 0.0 && is_nan(number_of("x")), "Number(s) of empty text is 0");
    expect(is_nan(field_number("")), "an empty number field is NaN");
    expect(utf16_len("a😀") == 3 && fig_chars("a😀") == 2, "app counts UTF-16 units, the figure counts Unicode scalars");
}

fn json_text_escapes_as_json_stringify() {
    var out: u8[>..] = [];
    quote(out, "a\"b\\\n\t\x1f");
    same_text(out, "\"a\\\"b\\\\\\n\\t\\u001f\"", "JSON.stringify of a string with a quote, a backslash and control characters");
}

fn base64_decoding_skips_other_characters() {
    var out: u8[>..] = [];
    b64_decode(out, "aGVs\nbG8=");
    same_text(out, "hello", "base64 of hello with a newline and padding");
}

fn wrap_breaks_lines_at_spaces() {
    var out: u8[>..] = [];
    wrap("the quick brown fox", 9, out);
    same_text(out, "the quick\nbrown fox", "wrap at 9 characters");
}

fn tex_white_space_closes_up_as_rust_split_whitespace() {
    same_text(tex_squeeze("  a \t  b  "), "a b", "white space between and around words");
}

fn every_preset_names_a_known_material() {
    for p in presets {
        var found = false;
        for m in materials { if m.id == p.material { found = true; } }
        expect(found, str("preset ", p.id, " names material ", p.material));
    }
}

fn a_unit_or_origin_change_keeps_the_beam() {
    let length = st_length;
    let x = st_sup[st_sup.len - 1].x;
    handle_event("{\"ev\":\"change\",\"field\":\"units\",\"value\":\"lbf-in\"}");
    handle_event("{\"ev\":\"change\",\"field\":\"origin\",\"value\":\"left\"}");
    expect(st_length == length && st_sup[st_sup.len - 1].x == x, "a unit or origin change re-expresses the beam and keeps it");
    handle_event("{\"ev\":\"change\",\"field\":\"units\",\"value\":\"N-mm\"}");
    handle_event("{\"ev\":\"change\",\"field\":\"origin\",\"value\":\"mid\"}");
}

fn typed_lengths_drop_conversion_noise() {
    expect(take(2300.0, LENGTH) == 2.3, "2300 mm is 2.3 m");
    expect(step_for(0.0) == take(0.1, LENGTH), "a zero length still gets a step");
}

fn solver_messages_read_in_the_chosen_convention() {
    app_attach = 4.0;
    same_text(in_convention("Load 1 position must lie on the beam, between 0 and 4000 mm."), "Load 1 position must lie on the beam, between −2000 mm and 2000 mm.", "a range from the left end");
    same_text(in_convention("Two supports share the position x = 1000 mm."), "Two supports share the position x = −1000 mm.", "a position from the left end");
    same_text(in_convention("Positions 1000 mm and 1000.001 mm are too close together; make them equal or separate them."),
        "Positions −1000 mm and −999.999 mm are too close together; make them equal or separate them.", "two positions from the left end");
}

fn results_match_the_replaced_javascript_engine_bit_for_bit() {
    if replay_count != REPLAY_COUNT || replay_hash != REPLAY_HASH {
        expect(false, str("solver results changed: ", replay_count, " values with hash ", replay_hash, ", want ", REPLAY_COUNT, " with ", REPLAY_HASH));
    }
}

fn typed_positions_land_on_a_position_within_the_tolerance() {
    let l = show(st_length, LENGTH);
    let p = st_sup[0].x;
    let shown = show_x(p, app_attach);
    expect(take_x(shown + 0.5 * TYPED_POSITION_TOLERANCE * l, 2, -1) == p, "a position typed within the tolerance lands on the position");
    expect(take_x(shown + 2.0 * TYPED_POSITION_TOLERANCE * l, 2, -1) != p, "a position typed beyond the tolerance stays where it was typed");
}

fn e_typed_in_psi_matches_a_preset_to_rounding() {
    handle_event("{\"ev\":\"change\",\"field\":\"units\",\"value\":\"lbf-in\"}");
    var i = 0;
    while i < materials.len {
        var id: u8[>..] = [];
        id.append(materials[i].id);
        st_nu = materials[i].nu;
        let typed = to_precision(show(materials[i].e, STRESS), 10);
        handle_event(str("{\"ev\":\"input\",\"field\":\"material.E\",\"value\":\"", typed, "\"}"));
        expect(st_mat_id == id, str("E of ", id, " typed in psi to 10 figures matches the preset"));
        i++;
    }
    handle_event("{\"ev\":\"change\",\"field\":\"units\",\"value\":\"N-mm\"}");
}

fn figure_spans_are_halved_and_a_force_arrow_is_capped() {
    expect(fig_half_span(1.5e308, -1.5e308) == 1.5e308, "a span at the limit of a double does not overflow");
    expect(fig_force_arrow_length(1e9, 1.0) == fig_force_arrow_length(1.0, 1.0), "a force beyond the largest force gets the longest arrow");
    expect(fig_force_arrow_length(0.5, 1.0) < fig_force_arrow_length(1.0, 1.0), "a smaller force gets a shorter arrow");
}

fn contains(text: u8[:], part: u8[:]) -> bool {
    if part.len > text.len { return false; }
    var i = 0;
    while i + part.len <= text.len { if text[i..i + part.len] == part { return true; } i++; }
    return false;
}

fn a_drag_derives_the_hand_calculation_only_when_it_ends() {
    handle_event("{\"ev\":\"start\",\"w\":800}");
    handle_event("{\"ev\":\"hand-visible\"}");
    expect(!hand_stale, "the hand calculation is current before a drag");
    handle_event("{\"ev\":\"down\",\"key\":\"s0\"}");
    let during = handle_event("{\"ev\":\"move\",\"frac\":0.3}");
    expect(hand_stale && !contains(during, "#hand-body"), "a drag step leaves the hand calculation alone");
    let after = handle_event("{\"ev\":\"up\"}");
    expect(!hand_stale && contains(after, "#hand-body"), "the end of a drag derives the hand calculation again");
}

fn a_beam_too_large_for_the_units_keeps_the_last_solved_beam() {
    handle_event("{\"ev\":\"start\",\"w\":800}");
    expect(app_u == unit_index("N-mm") && app_has_sol && !app_has_error, "the example beam solves in N-mm");
    let fy = g_rea[0].fy;
    let ml = g_ext.m.value;
    handle_event("{\"ev\":\"input\",\"field\":\"loads.0.q1\",\"value\":\"1e303\"}");
    handle_event("{\"ev\":\"input\",\"field\":\"loads.0.q2\",\"value\":\"1e303\"}");
    expect(app_has_error, "a load of 1e303 N/mm gives moments that overflow in N·mm");
    expect(app_has_sol && g_rea[0].fy == fy && g_ext.m.value == ml, "the last solved beam stays");
    handle_event("{\"ev\":\"input\",\"field\":\"loads.0.q1\",\"value\":\"-10\"}");
    handle_event("{\"ev\":\"input\",\"field\":\"loads.0.q2\",\"value\":\"-10\"}");
    expect(!app_has_error && g_rea[0].fy == fy, "a load that fits solves again");
}

fn main() {
    let fixtures = jm_parse_raw(FIXTURES);
    let reference = jm_parse_raw(REFERENCE);
    let random = jm_parse_raw(RANDOM);
    expect(fixtures >= 0 && reference >= 0 && random >= 0, "the test data reads as JSON");
    var f = jm_first(jm_member(fixtures, "cases"));
    var r = jm_first(jm_member(reference, "cases"));
    var cases = 0;
    while f >= 0 && r >= 0 {
        let id = jm_rtext(jm_member(f, "id"));
        expect(id == jm_rtext(jm_member(r, "id")), str("reference.json is in the order of fixtures.json at ", id));
        solver_matches_exact_macaulay_answers(id, jm_member(f, "model"), r);
        f = jm_next(f);
        r = jm_next(r);
        cases++;
    }
    expect(f < 0 && r < 0, "reference.json has one answer for each case in fixtures.json");
    var c = jm_first(jm_member(random, "cases"));
    while c >= 0 {
        solver_matches_exact_macaulay_answers(jm_rtext(jm_member(c, "id")), jm_member(c, "model"), c);
        c = jm_next(c);
        cases++;
    }
    us_units_use_the_exact_inch_and_pound_force();
    each_unit_system_is_consistent();
    powers_are_correctly_rounded();
    jmax_and_jmin_give_nan_when_either_side_is_nan();
    distinct_sorts_and_drops_repeats_with_minus_zero_as_zero();
    a_beam_is_stable_with_a_fixed_support_or_two_pins();
    indeterminacy_is_reaction_components_minus_two();
    signs_follow_up_positive_and_sagging_positive();
    numbers_read_as_javascript_writes_them();
    gauss_rules_are_exact_to_their_degree();
    diagrams_close_at_the_ends_and_show_a_jump_as_two_points();
    rust_and_javascript_parity_helpers();
    json_text_escapes_as_json_stringify();
    base64_decoding_skips_other_characters();
    wrap_breaks_lines_at_spaces();
    tex_white_space_closes_up_as_rust_split_whitespace();
    app_init();
    every_preset_names_a_known_material();
    a_unit_or_origin_change_keeps_the_beam();
    typed_lengths_drop_conversion_noise();
    solver_messages_read_in_the_chosen_convention();
    results_match_the_replaced_javascript_engine_bit_for_bit();
    typed_positions_land_on_a_position_within_the_tolerance();
    e_typed_in_psi_matches_a_preset_to_rounding();
    figure_spans_are_halved_and_a_force_arrow_is_capped();
    a_drag_derives_the_hand_calculation_only_when_it_ends();
    a_beam_too_large_for_the_units_keeps_the_last_solved_beam();
    if failures > 0 { write_stderr(str("beam test: ", failures, " failed\n")); exit(1); }
    print(str("beam test: ok, ", cases, " exact beams\n"));
}
