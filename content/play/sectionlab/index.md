---
title: Section lab
summary: Build a cross-section from library shapes, holes and materials. Get its section properties, its torsion constant where a measured formula exists, its Ramberg–Osgood moment–curvature curve, and the same properties by hand.
thumb: 2456
theme: site
seed: 20261016
---

The solver is a port of the Section Lab of yujieteo/visuals, and it agrees with independent Python references.

<!-- skill: This notebook ports visuals/viz/sectionlab. The examples, the materials, the method, the conventions, the assumptions and the measured torsion accuracy come only through data!, from the files pinned in visuals.lock. It was compared with every case of reference/fixtures.json, reference/reference.json and reference/torsion-accuracy.json of visuals, to the tolerances of the JS tests; compare it again after a change to the solver. -->

<!-- skill: To set the section, write the Parts box: parts separated by semicolons, each "id: shape dimensions [r radii] [at x y] [turn] material", with the dimensions and the radii in the order of the catalogue table; a hole is "id: -shape dimensions [at x y]". The Materials box adds or changes materials: "id E σ0.2 n ε_lim", then "c E σ0.2 n ε_lim" for another law in compression, separated by semicolons. Units are mm, MPa, N and N·mm. -->

```toml
serde_json = "=1.0.151"
```

```rust
//| caption: Read this first.
println!("{}", s(&raw()["notice"]));
```

## The section

Choose an example. Then change its parts in the Parts box. A semicolon separates 2 parts, and each part has this form:

`id: shape dimensions r radii at x y turn material`

- The dimensions follow the shape, in mm, in the order of the table below.
- `r` gives 1 radius for each corner, in the order of the table. Without `r`, the corners are sharp.
- `at x y` puts the centre of the box of the part at (x, y). Without it, the centre is at (0, 0).
- `turn` turns the part 90° counter-clockwise about that centre.
- A hole has a minus sign before its shape and no material, for example `bolt: -circle 6 at 0 -40`.

```rust
//| caption: The shapes of the catalogue: the dimensions in the order that a part takes them, and the corners in the order of its radii.
table(&["Shape", "What it is", "Dimensions", "Corners"], &SHAPES.iter().map(|x| vec![x.0.into(), x.1.into(), x.2.join(" "), if x.4.is_empty() { "none".into() } else { x.4.to_string() }]).collect::<Vec<_>>());
```

```rust
//| caption: The example to start from.
let example = &list("presets")[choice("Example", &list("presets").iter().map(|p| s(&p["label"])).collect::<Vec<_>>(), 0)];
let ex = from_json(&example["model"])?;
println!("{}", s(&example["note"]));
```

The Materials box adds or changes a material, as `id E σ0.2 n ε_lim`, with E and σ0.2 in MPa. For a different law in compression, add `c E σ0.2 n ε_lim` after it. The library materials are always available. An empty E_base box keeps the value of the example.

```rust
//| caption: The parts, more materials and E_base. A new example fills the Parts box again.
let parts_box = field(&format!("Parts of “{}”", s(&example["label"])), &parts_text(&ex));
let mats_box = field("Materials (more, or changed)", "");
let base_box = field("E_base (MPa)", "");
```

```rust
//| caption: The section to scale: each part in its material's colour, the centroid and the principal axes.
let sec = from_boxes(&parts_box, &mats_box, &base_box, &ex).and_then(solve);
match &sec {
    Err(e) => println!("This section has no solution: {e}"),
    Ok(c) => {
        html(&figure(c));
        let used = |k: usize| c.q.iter().any(|q| q.mat == k);
        table(&["Material", "E (MPa)", "σ0.2 (MPa)", "n", "ε_lim", "In compression", "Modular ratio n_i"], &c.m.mats.iter().enumerate().filter(|m| used(m.0)).map(|(_, m)| {
            let l = |l: &Law| format!("E {}, σ0.2 {}, n {}, ε_lim {}", fmt(l.e, 6), fmt(l.s, 6), fmt(l.n, 6), fmt(l.lim, 6));
            vec![m.id.clone(), fmt(m.t.e, 6), fmt(m.t.s, 6), fmt(m.t.n, 6), fmt(m.t.lim, 6), if m.c == m.t { "the same".into() } else { l(&m.c) }, fmt(m.t.e / c.m.e_base, 4)]
        }).collect::<Vec<_>>());
        println!("E_base = {} MPa. The library: {}.", fmt(c.m.e_base, 6), library().iter().map(|m| format!("{} is {}", m.0.id, m.1)).collect::<Vec<_>>().join("; "));
    }
}
```

## Section properties

Every property is about the centroid of the section after its transformation to E_base. Each solid part counts its modular ratio n_i = E_i / E_base, and each hole counts −n_i of its part. Thus A, S and I are in E_base-equivalent mm², mm³ and mm^4. The last chapter gives the conventions for the axes, S and Q.

```rust
//| caption: The section properties, about the centroid.
if let Ok(c) = &sec {
    table(&["Quantity", "Symbol", "Value", "Unit"], &KEYS.iter().map(|k| vec![k.1.to_string(), k.2.into(), fmt(c.p.g(k.0), 6), k.3.into()]).collect::<Vec<_>>());
}
```

## Torsion

The torsion constant J comes only from a closed-form formula with a measured accuracy. The reference is a numerical Prandtl solution: linear finite elements, 3 uniform refinements and Richardson extrapolation. A formula with a measured error more than its stated accuracy is not used. Every other section shows n/a.

```rust
//| caption: The torsion constant of this section, or why there is none.
if let Ok(c) = &sec {
    match torsion(&c.m) {
        Ok((t, a)) => {
            println!("J = {} mm^4, by {}: {}.", fmt(t.j, 6), t.method, t.text);
            println!("Checked against the numerical Prandtl reference on {} cases: stated accuracy within {}, largest error measured {}. {}", a["cases"], pct(fv(&a["stated"])), pct(fv(&a["measured"])), s(&a["note"]));
        }
        Err(e) => println!("J: n/a. {e}"),
    }
}
```

```rust
//| caption: Each formula and its measured accuracy against the Prandtl reference.
table(&["Formula", "Method", "Stated", "Measured", "Cases", "Where it holds"], &acc()["formulas"].as_object().unwrap().iter().map(|(id, a)| vec![id.clone(), s(&a["method"]).into(), pct(fv(&a["stated"])), pct(fv(&a["measured"])), a["cases"].to_string(), s(&a["note"]).into()]).collect::<Vec<_>>());
```

## Moment–curvature

Each material follows the Ramberg–Osgood law $\varepsilon = \sigma / E + 0.002 (\sigma / \sigma_{0.2})^n$, or a different law in compression if you give one. Plane sections stay plane: $\varepsilon = \varepsilon_0 - \kappa v$, with v across the neutral axis from the elastic centroid. The solver cuts each part into 160 strips and finds the $\varepsilon_0$ that carries the axial force N. The curve stops where the first fibre reaches its ε_lim, at the moment M_lim. The last chapter defines M_el, M_p and the modes (a) and (b).

```rust
//| caption: The axis of bending, the mode and the axial force.
let axis = choice("Bend about", &["x", "y", "the major axis 1", "the minor axis 2"], ex.axis);
let free = choice("Neutral axis", &["(b) turns for no cross moment", "(a) stays parallel to the axis"], if ex.free { 0 } else { 1 }) == 0;
let n_box = field("Axial force N (N, + tension; empty: the example's)", "");
```

```rust
//| caption: The moment–curvature curve to ε_lim (the dot). Dashed: M_el and M_p at the curve's axial force.
let pl = sec.as_ref().map_err(|_| "Fix the section first.".to_string()).and_then(|c| {
    let n = if n_box.trim().is_empty() { ex.n } else { n_box.trim().replace('−', "-").parse::<f64>().map_err(|_| "Type the axial force as a number.".to_string())? };
    analyse(c, axis, n, free, 160, 65)
});
match &pl {
    Err(e) => println!("Moment–curvature: n/a. {e}"),
    Ok(r) => {
        let (refs, kk, mm): (Vec<f64>, Vec<f64>, Vec<f64>) = (if r.n == 0.0 { [r.mp, r.mel] } else { [r.mpn, r.meln] }.into_iter().flatten().collect(), r.curve.iter().map(|p| p.kappa).collect(), r.curve.iter().map(|p| p.m).collect());
        let top = mm.iter().chain(&refs).fold(0.0_f64, |a, b| a.max(*b)) * 1.08;
        let ((fk, nk), (fm, nm)) = (per(r.lim.kappa), per(top));
        let sc = |v: &[f64], f: f64| v.iter().map(|x| x / f).collect::<Vec<_>>();
        refs.iter().fold(Plot::new().line(&sc(&kk, fk), &sc(&mm, fm)).dots(&[r.lim.kappa / fk], &[r.lim.m / fm]), |p, v| p.rule(v / fm)).ylim(0.0, top / fm).labels(&format!("κ (1/mm){nk}"), &format!("M (N·mm){nm}")).show();
    }
}
```

```rust
//| caption: The plastic results.
if let (Ok(c), Ok(r)) = (&sec, &pl) {
    let (l, na) = (&r.lim, |v: Option<f64>, why: &str| v.map_or(format!("n/a ({why})"), |v| fmt(v, 6)));
    println!("Bending about the {} ({}° from x), {}, N = {} N.", ["x axis", "y axis", "major principal axis", "minor principal axis"][axis], fmt(r.alpha * 180.0 / PI, 6), if free { "(b) the neutral axis turns for no cross moment" } else { "(a) the neutral axis stays parallel to the axis" }, fmt(r.n, 6));
    let mut rows = vec![
        ["Allowable moment at ε_lim, M_lim".into(), fmt(l.m, 6), "N·mm".into()],
        ["Curvature at ε_lim, κ_lim".into(), fmt(l.kappa, 6), "1/mm".into()],
        ["Governing fibre".into(), format!("{}, {}, ε = {}", c.m.parts[l.gov.0].id, if l.gov.1 { "tension" } else { "compression" }, fmt(l.gov.2, 4)), String::new()],
        ["Cross moment at ε_lim".into(), fmt(l.mc, 6), "N·mm".into()],
        ["Neutral-axis turn at ε_lim, φ".into(), fmt(l.phi * 180.0 / PI, 4), "°".into()],
        ["First-yield moment at N = 0, M_el".into(), na(r.mel, "no fibre yields"), "N·mm".into()],
        ["Fully plastic moment at N = 0, M_p".into(), na(r.mp, "no neutral axis without a cross moment"), "N·mm".into()],
        ["Plastic modulus, Z_p = M_p / σ0.2".into(), r.zp.as_ref().map_or_else(|e| format!("n/a ({e})"), |v| fmt(*v, 6)), "mm³".into()],
        ["Shape factor, M_p / M_el".into(), na(r.sf, "no M_p or M_el"), String::new()],
    ];
    if r.n != 0.0 {
        rows.push(["First-yield moment at N, M_el(N)".into(), na(r.meln, "N alone reaches σ0.2"), "N·mm".into()]);
        rows.push(["Fully plastic moment at N, M_p(N)".into(), na(r.mpn, "N is more than the fully plastic axial capacity"), "N·mm".into()]);
    }
    table(&["Quantity", "Value", "Unit"], &rows.iter().map(|r| r.to_vec()).collect::<Vec<_>>());
    table(&["κ (1/mm)", "M (N·mm)", "Cross moment (N·mm)", "φ (°)", "ε_max", "ε_min"], &r.curve.iter().step_by(8).map(|p| vec![fmt(p.kappa, 5), fmt(p.m, 5), fmt(p.mc, 3), fmt(p.phi * 180.0 / PI, 4), fmt(p.emax, 4), fmt(p.emin, 4)]).collect::<Vec<_>>());
}
```

## By hand

The steps below work the same properties on paper, by composite parts. Q, M_el, M_p and the moment–curvature curve need numerical integration and iteration, so the steps quote them. All numbers are in mm, N and MPa.

```rust
//| caption: The section properties by hand, by composite parts.
if let Ok(c) = &sec { by_hand(c, &pl) }
```

## Method and assumptions

```rust
//| caption: The method, the conventions, the assumptions and the sources of the solver.
for (k, h) in [("method", "Method"), ("conventions", "Conventions"), ("assumptions", "Assumptions")] {
    html(&format!("<h3>{h}</h3><ul>{}</ul>", list(k).iter().map(|x| format!("<li>{}</li>", esc(s(x)))).collect::<String>()));
}
html(&format!("<h3>Sources</h3><ul>{}</ul>", list("sources").iter().map(|x| format!("<li>{}</li>", esc(s(&x["label"])))).collect::<String>()));
```

# The code

```rust
//| caption: The data, the model and its text.
use engine::doc::{esc, mathml};
use serde_json::Value;
use std::{cell::RefCell, f64::consts::{PI, TAU}, rc::Rc, sync::OnceLock};
const INF: f64 = f64::INFINITY;

static RAW: OnceLock<Value> = OnceLock::new();
fn raw() -> &'static Value { RAW.get_or_init(|| serde_json::from_slice(data!("viz/sectionlab/raw.json")).unwrap()) }
static ACC: OnceLock<Value> = OnceLock::new();
/// The measured accuracy of each torsion formula against the Prandtl reference.
fn acc() -> &'static Value { ACC.get_or_init(|| serde_json::from_slice(data!("viz/sectionlab/reference/torsion-accuracy.json")).unwrap()) }
fn list(k: &str) -> &'static [Value] { raw()[k].as_array().unwrap() }
fn s(v: &Value) -> &str { v.as_str().unwrap_or("") }
fn fv(v: &Value) -> f64 { v.as_f64().unwrap_or(f64::NAN) }

/// A Ramberg–Osgood law: E, σ0.2, n and ε_lim.
#[derive(Clone, Copy, PartialEq)]
struct Law { e: f64, s: f64, n: f64, lim: f64 }
/// A material: its id and its laws in tension and in compression (the same unless given).
#[derive(Clone)]
struct Mat { id: String, t: Law, c: Law }
/// A part: id, shape (in SHAPES), dimensions and corner radii in the catalogue's order, the centre of its box,
/// a 90° turn, its material (none for a hole) and whether it is a hole.
#[derive(Clone)]
struct Part { id: String, shape: usize, d: Vec<f64>, r: Vec<f64>, x: f64, y: f64, turn: bool, mat: String, hole: bool }
/// A section in mm and MPa: E_base, the materials, the parts, and the example's bending (axis, N, mode (b) or not).
#[derive(Clone)]
struct Model { e_base: f64, mats: Vec<Mat>, parts: Vec<Part>, axis: usize, n: f64, free: bool }

fn law(v: &Value) -> Law { Law { e: fv(&v["E"]), s: fv(&v["sigma02"]), n: fv(&v["n"]), lim: fv(&v["eps_lim"]) } }
/// A model in the form of visuals (docs/model-format.md): the examples and the fixtures.
fn from_json(v: &Value) -> Result<Model, String> {
    let mats: Vec<Mat> = v["materials"].as_array().ok_or("materials must be a list.")?.iter()
        .map(|m| Mat { id: s(&m["id"]).into(), t: law(m), c: law(if m["compression"].is_object() { &m["compression"] } else { m }) }).collect();
    let parts = v["parts"].as_array().ok_or("parts must be a list.")?.iter().map(|q| {
        let shape = SHAPES.iter().position(|x| x.0 == s(&q["shape"])).ok_or(format!("unknown shape \"{}\".", s(&q["shape"])))?;
        let d: Vec<f64> = SHAPES[shape].2.iter().map(|k| fv(&q["dims"][k])).collect();
        let r = q["radii"].as_array().map_or_else(|| vec![0.0; corners(shape, &d)], |a| a.iter().map(fv).collect());
        let at = |k: &str| q[k].as_f64().unwrap_or(0.0);
        Ok(Part { id: s(&q["id"]).into(), shape, d, r, x: at("x"), y: at("y"), turn: at("orientation") == 90.0, mat: s(&q["material"]).into(), hole: q["void"] == true })
    }).collect::<Result<Vec<_>, String>>()?;
    let pl = &v["plastic"];
    let e_base = v["E_base"].as_f64().unwrap_or(mats.first().map_or(f64::NAN, |m| m.t.e));
    Ok(Model { e_base, mats, parts, axis: ["x", "y", "major", "minor"].iter().position(|a| pl["axis"] == *a).unwrap_or(0), n: pl["N"].as_f64().unwrap_or(0.0), free: pl["solve"] != "fixed-axis" })
}

/// The library's materials with their names.
fn library() -> Vec<(Mat, &'static str)> { list("materials").iter().map(|m| (Mat { id: s(&m["id"]).into(), t: law(m), c: law(m) }, s(&m["name"]))).collect() }

/// A number as the boxes take it.
fn plain(x: f64) -> String { format!("{}", x + 0.0) }
fn join(v: &[f64]) -> String { v.iter().map(|x| plain(*x)).collect::<Vec<_>>().join(" ") }
fn number(w: &str) -> Option<f64> { w.replace('−', "-").parse().ok().filter(|v: &f64| v.is_finite()) }

/// The parts as the Parts box takes them: "id: [-]shape dims [r radii] [at x y] [turn] material; …".
fn parts_text(m: &Model) -> String {
    m.parts.iter().map(|p| {
        let mut t = format!("{}: {}{} {}", p.id, if p.hole { "-" } else { "" }, SHAPES[p.shape].0, join(&p.d));
        if p.r.iter().any(|r| *r != 0.0) { t += &format!(" r {}", join(&p.r)) }
        if p.x != 0.0 || p.y != 0.0 { t += &format!(" at {} {}", plain(p.x), plain(p.y)) }
        if p.turn { t += " turn" }
        if !p.hole { t += &format!(" {}", p.mat) }
        t
    }).collect::<Vec<_>>().join("; ")
}

fn parse_parts(t: &str) -> Result<Vec<Part>, String> {
    t.split(';').map(str::trim).filter(|p| !p.is_empty()).enumerate().map(|(k, p)| {
        let (id, rest) = p.split_once(':').map_or((format!("part {}", k + 1), p), |(a, b)| (a.trim().to_string(), b));
        let w: Vec<&str> = rest.split_whitespace().collect();
        let name = w.first().copied().unwrap_or("").to_lowercase();
        let sh = name.trim_start_matches(['-', '−']);
        let shape = SHAPES.iter().position(|x| x.0 == sh).ok_or(format!("Part \"{id}\": write a shape of the catalogue, not \"{sh}\"."))?;
        let (mut v, mut turn, mut mat, mut mode) = ([vec![], vec![], vec![]], false, String::new(), 0);
        for x in w.iter().skip(1) {
            match (*x, number(x)) {
                ("r", _) => mode = 1,
                ("at", _) => mode = 2,
                ("turn", _) => turn = true,
                (_, Some(n)) => v[mode].push(n),
                _ if mat.is_empty() => mat = x.to_string(),
                _ => return Err(format!("Part \"{id}\": \"{x}\" is not a number, a keyword or its one material.")),
            }
        }
        let [d, mut r, at] = v;
        let keys = SHAPES[shape].2;
        if d.len() != keys.len() { return Err(format!("Part \"{id}\": {sh} takes {} dimensions ({}), not {}.", keys.len(), keys.join(", "), d.len())) }
        if !at.is_empty() && at.len() != 2 { return Err(format!("Part \"{id}\": write its place as \"at x y\".")) }
        if r.is_empty() { r = vec![0.0; corners(shape, &d)] }
        Ok(Part { id, shape, x: *at.first().unwrap_or(&0.0), y: *at.get(1).unwrap_or(&0.0), d, r, turn, mat, hole: name != sh })
    }).collect()
}

/// "id E σ0.2 n ε_lim [c E σ0.2 n ε_lim]; …".
fn parse_mats(t: &str) -> Result<Vec<Mat>, String> {
    t.split(';').map(str::trim).filter(|p| !p.is_empty()).map(|p| {
        let w: Vec<&str> = p.split_whitespace().collect();
        let v: Vec<f64> = w[1..].iter().filter(|x| **x != "c").map(|x| number(x).ok_or(format!("Material \"{}\": \"{x}\" is not a number.", w[0]))).collect::<Result<_, _>>()?;
        let l = |k: usize| Law { e: v[k], s: v[k + 1], n: v[k + 2], lim: v[k + 3] };
        match v.len() {
            4 => Ok(Mat { id: w[0].into(), t: l(0), c: l(0) }),
            8 => Ok(Mat { id: w[0].into(), t: l(0), c: l(4) }),
            _ => Err(format!("Write material \"{}\" as \"id E σ0.2 n ε_lim\", with \"c E σ0.2 n ε_lim\" after it for another law in compression.", w[0])),
        }
    }).collect()
}

/// The model of the boxes: the parts; the materials of the box, then the example's, then the library's;
/// E_base (empty: the example's) and the example's bending.
fn from_boxes(parts: &str, mats: &str, base: &str, ex: &Model) -> Result<Model, String> {
    let (parts, mut ms) = (parse_parts(parts)?, parse_mats(mats)?);
    for m in ex.mats.iter().chain(library().iter().map(|x| &x.0)) { if !ms.iter().any(|x| x.id == m.id) { ms.push(m.clone()) } }
    let used: Vec<String> = parts.iter().map(|p| p.mat.clone()).collect();
    ms.retain(|m| used.contains(&m.id));
    let e_base = if base.trim().is_empty() { ex.e_base } else { number(base.trim()).ok_or("Type E_base as a number.")? };
    Ok(Model { e_base, mats: ms, parts, ..ex.clone() })
}

/// A value to `d` significant digits as visuals writes it: plain from 0.001 to 1e7, else with an exponent, with a true minus sign.
fn fmt(x: f64, d: usize) -> String {
    if !x.is_finite() { return "n/a".into() }
    if x == 0.0 || x.abs() < 1e-300 { return "0".into() }
    let e = format!("{:.*e}", d - 1, x);
    let (m, p) = e.split_once('e').unwrap();
    let t = if (1e-3..1e7).contains(&x.abs()) { format!("{}", e.parse::<f64>().unwrap()) } else { format!("{}e{p}", m.parse::<f64>().unwrap()) };
    t.replace('-', "−")
}
fn pct(x: f64) -> String { format!("{}%", format!("{:.1e}", x * 100.0).parse::<f64>().unwrap()) }
/// A power of 1000 that keeps an axis short, and the words for it.
fn per(big: f64) -> (f64, String) {
    let e = if big > 0.0 { big.log10().floor() as i32 } else { 0 };
    if (-2..5).contains(&e) { (1.0, String::new()) } else { let p = 3 * e.div_euclid(3); (10f64.powi(p), format!(", in units of 1e{p}").replace('-', "−")) }
}
```

```rust
//| caption: The geometry: exact boundaries of lines and circular arcs, their moments by Green's theorem, and their overlaps.
/// A line from a to b, or an arc about c of radius r from angle t0 to t1 (counter-clockwise when t1 > t0). A contour
/// keeps its region on its left: outer contours run counter-clockwise, holes clockwise.
#[derive(Clone, Copy)]
enum Seg { L([f64; 2], [f64; 2]), A([f64; 2], f64, f64, f64) }
type Cs = Vec<Vec<Seg>>;
fn at_angle(c: [f64; 2], r: f64, t: f64) -> [f64; 2] { [c[0] + r * t.cos(), c[1] + r * t.sin()] }
fn start(s: &Seg) -> [f64; 2] { match *s { Seg::L(a, _) => a, Seg::A(c, r, t0, _) => at_angle(c, r, t0) } }
fn end(s: &Seg) -> [f64; 2] { match *s { Seg::L(_, b) => b, Seg::A(c, r, _, t1) => at_angle(c, r, t1) } }
fn rev(k: &[Seg]) -> Vec<Seg> { k.iter().rev().map(|s| match *s { Seg::L(a, b) => Seg::L(b, a), Seg::A(c, r, t0, t1) => Seg::A(c, r, t1, t0) }).collect() }
fn dist(a: [f64; 2], b: [f64; 2]) -> f64 { (b[0] - a[0]).hypot(b[1] - a[1]) }

/// Turn by th counter-clockwise about the origin, then move by (dx, dy).
fn tf(cs: &[Vec<Seg>], th: f64, dx: f64, dy: f64) -> Cs {
    let (c, s) = (th.cos(), th.sin());
    let p = |q: [f64; 2]| [q[0] * c - q[1] * s + dx, q[0] * s + q[1] * c + dy];
    cs.iter().map(|k| k.iter().map(|g| match *g { Seg::L(a, b) => Seg::L(p(a), p(b)), Seg::A(o, r, t0, t1) => Seg::A(p(o), r, t0 + th, t1 + th) }).collect()).collect()
}

const GX: [f64; 16] = [-0.9894009349916499, -0.9445750230732326, -0.8656312023878318, -0.7554044083550030, -0.6178762444026438, -0.4580167776572274, -0.2816035507792589, -0.0950125098376374,
    0.0950125098376374, 0.2816035507792589, 0.4580167776572274, 0.6178762444026438, 0.7554044083550030, 0.8656312023878318, 0.9445750230732326, 0.9894009349916499];
const GW: [f64; 16] = [0.0271524594117541, 0.0622535239386479, 0.0951585116824928, 0.1246289712555339, 0.1495959888165767, 0.1691565193950025, 0.1826034150449236, 0.1894506104550685,
    0.1894506104550685, 0.1826034150449236, 0.1691565193950025, 0.1495959888165767, 0.1246289712555339, 0.0951585116824928, 0.0622535239386479, 0.0271524594117541];

/// The angles base + 2πk inside an arc's sweep.
fn sweep_at(t0: f64, t1: f64, base: f64) -> Vec<f64> {
    let (a, b) = (t0.min(t1), t0.max(t1));
    let mut k = ((a - base) / TAU).ceil();
    let mut v = vec![];
    while base + k * TAU <= b { v.push(base + k * TAU); k += 1.0 }
    v
}

/// The parameter intervals of a segment on which lo ≤ y ≤ hi: of t in [0, 1] on a line, of the angle on an arc.
fn pieces(s: &Seg, lo: f64, hi: f64) -> Vec<(f64, f64)> {
    match *s {
        Seg::L(a, b) => {
            let dv = b[1] - a[1];
            if dv == 0.0 { return vec![] }
            let (t0, t1) = ((lo - a[1]) / dv, (hi - a[1]) / dv);
            let (t0, t1) = (t0.min(t1).max(0.0), t0.max(t1).min(1.0));
            if t1 > t0 { vec![(t0, t1)] } else { vec![] }
        }
        Seg::A(c, r, t0, t1) => {
            let (a, b) = (t0.min(t1), t0.max(t1));
            let mut cuts = vec![a, b];
            for level in [lo, hi].into_iter().filter(|l| l.is_finite()) {
                let q = (level - c[1]) / r;
                if q <= -1.0 || q >= 1.0 { continue }
                for t in [q.asin(), PI - q.asin()] {
                    let (k0, k1) = (((a - t) / TAU).ceil() as i64, ((b - t) / TAU).floor() as i64);
                    cuts.extend((k0..=k1).map(|k| t + k as f64 * TAU).filter(|x| *x > a && *x < b));
                }
            }
            cuts.sort_by(f64::total_cmp);
            cuts.windows(2).filter(|w| w[1] > w[0] && { let v = c[1] + r * ((w[0] + w[1]) / 2.0).sin(); v >= lo && v <= hi }).map(|w| (w[0], w[1])).collect()
        }
    }
}

/// m[i][j] = ∫∫ x^i (y − shift)^j dA over the region ∩ {lo ≤ y ≤ hi}, by Green's theorem ∫∫ x^i y^j dA = ∮ x^(i+1)/(i+1) y^j dy:
/// only the boundary inside the slab counts, and every piece takes 16-point Gauss–Legendre (an arc in parts of at most π/8).
fn mom(cs: &[Vec<Seg>], lo: f64, hi: f64, shift: f64, ni: usize, nj: usize) -> [[f64; 4]; 3] {
    let mut acc = [[0.0; 4]; 3];
    for s in cs.iter().flatten() {
        for (p0, p1) in pieces(s, lo, hi) {
            let parts = if let Seg::A(..) = s { ((p1 - p0) / (PI / 8.0)).ceil().max(1.0) } else { 1.0 };
            let h = (p1 - p0) / parts;
            for k in 0..parts as usize {
                let (m, half) = (p0 + (k as f64 + 0.5) * h, h / 2.0);
                for g in 0..16 {
                    let t = m + half * GX[g];
                    let (u, v, dv) = match *s {
                        Seg::L(a, b) => (a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1]), b[1] - a[1]),
                        Seg::A(c, r, t0, t1) => (c[0] + r * t.cos(), c[1] + r * t.sin(), r * t.cos() * if t1 < t0 { -1.0 } else { 1.0 }),
                    };
                    let (w, vv) = (GW[g] * half * dv, v - shift);
                    let mut up = u;
                    for i in 0..ni {
                        let (base, mut vp) = (up / (i as f64 + 1.0) * w, 1.0);
                        for j in 0..nj { acc[i][j] += base * vp; vp *= vv }
                        up *= u;
                    }
                }
            }
        }
    }
    acc
}
fn whole(cs: &[Vec<Seg>], ni: usize, nj: usize) -> [[f64; 4]; 3] { mom(cs, -INF, INF, 0.0, ni, nj) }

/// The least and the most of x dx + y dy over the region, over the length of (dx, dy).
fn extent(cs: &[Vec<Seg>], dx: f64, dy: f64) -> (f64, f64) {
    let (mut lo, mut hi, len, dir) = (INF, -INF, dx.hypot(dy), dy.atan2(dx));
    let mut take = |p: [f64; 2]| { let z = p[0] * dx + p[1] * dy; lo = lo.min(z); hi = hi.max(z) };
    for s in cs.iter().flatten() {
        take(start(s));
        take(end(s));
        if let Seg::A(c, r, t0, t1) = *s { for base in [dir, dir + PI] { sweep_at(t0, t1, base).into_iter().for_each(|t| take(at_angle(c, r, t))) } }
    }
    (lo / len, hi / len)
}
/// The box x0, x1, y0, y1.
fn bbox(cs: &[Vec<Seg>]) -> [f64; 4] { let (x, y) = (extent(cs, 1.0, 0.0), extent(cs, 0.0, 1.0)); [x.0, x.1, y.0, y.1] }
/// The levels of y at a vertex or at the top or bottom of an arc: where the strips of the fibre solver break.
fn breaks(cs: &[Vec<Seg>]) -> Vec<f64> {
    cs.iter().flatten().flat_map(|s| {
        let mut v = vec![start(s)[1], end(s)[1]];
        if let Seg::A(c, r, t0, t1) = *s { for base in [PI / 2.0, -PI / 2.0] { v.extend(sweep_at(t0, t1, base).into_iter().map(|t| c[1] + r * t.sin())) } }
        v
    }).collect()
}

/// A polygon (vertices counter-clockwise) with a fillet of its own radius at each vertex: an arc that turns left at a convex
/// corner and right at a concave one.
fn fillet(v: &[[f64; 2]], radii: &[f64], label: &str) -> Result<Vec<Seg>, String> {
    let n = v.len();
    let mut info = vec![];
    for i in 0..n {
        let (p, prev, next) = (v[i], v[(i + n - 1) % n], v[(i + 1) % n]);
        let (l1, l2) = (dist(prev, p), dist(p, next));
        if !(l1 > 0.0) || !(l2 > 0.0) { return Err(format!("{label} {}: two corners coincide.", i + 1)) }
        let (d1, d2) = ([(p[0] - prev[0]) / l1, (p[1] - prev[1]) / l1], [(next[0] - p[0]) / l2, (next[1] - p[1]) / l2]);
        let turn = (d1[0] * d2[1] - d1[1] * d2[0]).atan2(d1[0] * d2[0] + d1[1] * d2[1]);
        let r = radii.get(i).copied().unwrap_or(0.0);
        if r > 0.0 && turn.abs() < 1e-12 { return Err(format!("{label} {} is straight and cannot be rounded.", i + 1)) }
        info.push((p, d1, d2, turn, r, if r > 0.0 { r * (turn.abs() / 2.0).tan() } else { 0.0 }, l2));
    }
    for i in 0..n {
        if info[i].5 + info[(i + 1) % n].5 > info[i].6 * (1.0 + 1e-12) { return Err(format!("{label} radii {} and {} are too large for the edge between them.", i + 1, (i + 1) % n + 1)) }
    }
    let (starts, ends): (Vec<[f64; 2]>, Vec<[f64; 2]>) = info.iter().map(|c| ([c.0[0] + c.2[0] * c.5, c.0[1] + c.2[1] * c.5], [c.0[0] - c.1[0] * c.5, c.0[1] - c.1[1] * c.5])).unzip();
    let mut segs = vec![];
    for (i, c) in info.iter().enumerate() {
        if c.4 > 0.0 {
            let sg = if c.3 > 0.0 { 1.0 } else { -1.0 };
            let o = [ends[i][0] + sg * c.4 * -c.1[1], ends[i][1] + sg * c.4 * c.1[0]];
            let t0 = (ends[i][1] - o[1]).atan2(ends[i][0] - o[0]);
            segs.push(Seg::A(o, c.4, t0, t0 + c.3));
        }
        let (a, b) = (starts[i], ends[(i + 1) % n]);
        if dist(a, b) > 1e-12 * c.6 { segs.push(Seg::L(a, b)) }
    }
    Ok(segs)
}

/// The chord polygon of a contour: no chord leaves its arc by more than tol.
fn polygonize(k: &[Seg], tol: f64) -> Vec<[f64; 2]> {
    let mut pts = vec![];
    for s in k {
        match *s {
            Seg::L(a, _) => pts.push(a),
            Seg::A(c, r, t0, t1) => {
                let step = 2.0 * (1.0 - (tol / r).min(1.0)).max(-1.0).acos();
                let n = ((t1 - t0).abs() / step.max(1e-3)).ceil().max(2.0) as usize;
                pts.extend((0..n).map(|j| at_angle(c, r, t0 + (t1 - t0) * j as f64 / n as f64)));
            }
        }
    }
    let mut out: Vec<[f64; 2]> = vec![];
    for p in pts { if out.last().is_none_or(|q| dist(p, *q) > 1e-12) { out.push(p) } }
    if out.len() > 1 && dist(out[0], out[out.len() - 1]) <= 1e-12 { out.pop(); }
    out
}
fn sarea(p: &[[f64; 2]]) -> f64 { (0..p.len()).map(|i| { let (a, b) = (p[i], p[(i + 1) % p.len()]); a[0] * b[1] - b[0] * a[1] }).sum::<f64>() / 2.0 }
type Tri = [[f64; 2]; 3];
/// Ear clipping of a simple polygon.
fn triangulate(poly: &[[f64; 2]]) -> Vec<Tri> {
    let mut p = poly.to_vec();
    if sarea(&p) < 0.0 { p.reverse() }
    let cr = |o: [f64; 2], a: [f64; 2], b: [f64; 2]| (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    let scale = p.iter().fold(1.0_f64, |m, q| m.max(q[0].abs()).max(q[1].abs()));
    let eps = 1e-14 * scale * scale;
    let mut changed = true;
    while changed && p.len() > 3 {
        changed = false;
        let mut i = 0;
        while i < p.len() && p.len() > 3 {
            let n = p.len();
            if cr(p[(i + n - 1) % n], p[i], p[(i + 1) % n]).abs() <= eps { p.remove(i); changed = true } else { i += 1 }
        }
    }
    let inside = |q, a, b, c| cr(a, b, q) >= -eps && cr(b, c, q) >= -eps && cr(c, a, q) >= -eps;
    let (mut tris, mut guard) = (vec![], 0);
    while p.len() > 3 && guard < 100000 {
        guard += 1;
        let n = p.len();
        let ear = (0..n).find(|&i| {
            let (ia, ic) = ((i + n - 1) % n, (i + 1) % n);
            let (a, b, c) = (p[ia], p[i], p[ic]);
            cr(a, b, c) > eps && (0..n).all(|k| k == ia || k == i || k == ic || p[k] == a || p[k] == c || !inside(p[k], a, b, c))
        });
        match ear {
            Some(i) => { tris.push([p[(i + n - 1) % n], p[i], p[(i + 1) % n]]); p.remove(i); }
            None => { tris.extend((1..n - 1).map(|i| [p[0], p[i], p[i + 1]])); return tris }
        }
    }
    if p.len() == 3 { tris.push([p[0], p[1], p[2]]) }
    tris
}
/// The area shared by two triangles (Sutherland–Hodgman).
fn clip_area(p: &Tri, q: &Tri) -> f64 {
    let mut out: Vec<[f64; 2]> = p.to_vec();
    for i in 0..3 {
        if out.is_empty() { break }
        let (a, b) = (q[i], q[(i + 1) % 3]);
        let side = |x: [f64; 2]| (b[0] - a[0]) * (x[1] - a[1]) - (b[1] - a[1]) * (x[0] - a[0]);
        let inp = std::mem::take(&mut out);
        for k in 0..inp.len() {
            let (cur, prv) = (inp[k], inp[(k + inp.len() - 1) % inp.len()]);
            let (sc, sp) = (side(cur), side(prv));
            let cut = || { let t = sp / (sp - sc); [prv[0] + (cur[0] - prv[0]) * t, prv[1] + (cur[1] - prv[1]) * t] };
            if sc >= 0.0 { if sp < 0.0 { out.push(cut()) } out.push(cur) } else if sp >= 0.0 { out.push(cut()) }
        }
    }
    if out.len() >= 3 { sarea(&out).abs() } else { 0.0 }
}
fn tri_box(t: &Tri) -> [f64; 4] { [t[0][0].min(t[1][0]).min(t[2][0]), t[0][0].max(t[1][0]).max(t[2][0]), t[0][1].min(t[1][1]).min(t[2][1]), t[0][1].max(t[1][1]).max(t[2][1])] }
fn tris_area(a: &[Tri], b: &[Tri]) -> f64 {
    a.iter().map(|p| { let pb = tri_box(p); b.iter().filter(|q| { let qb = tri_box(q); !(pb[1] <= qb[0] || qb[1] <= pb[0] || pb[3] <= qb[2] || qb[3] <= pb[2]) }).map(|q| clip_area(p, q)).sum::<f64>() }).sum()
}
/// A region as polygons for the overlap tests: the triangles of its outer contours and of its holes.
fn region(cs: &[Vec<Seg>], tol: f64) -> (Vec<Vec<Tri>>, Vec<Vec<Tri>>) {
    let (mut outer, mut holes) = (vec![], vec![]);
    for k in cs {
        let p = polygonize(k, tol);
        if p.len() < 3 { continue }
        if sarea(&p) >= 0.0 { outer.push(triangulate(&p)) } else { holes.push(triangulate(&p)) }
    }
    (outer, holes)
}
/// The area that two regions share, by inclusion and exclusion over their outer contours and holes.
fn shared(a: &(Vec<Vec<Tri>>, Vec<Vec<Tri>>), b: &(Vec<Vec<Tri>>, Vec<Vec<Tri>>)) -> f64 {
    let sum = |x: &[Vec<Tri>], y: &[Vec<Tri>]| x.iter().flat_map(|p| y.iter().map(move |q| tris_area(p, q))).sum::<f64>();
    sum(&a.0, &b.0) - sum(&a.0, &b.1) - sum(&a.1, &b.0) + sum(&a.1, &b.1)
}
```

```rust
//| caption: The catalogue of shapes.
const RC: &str = "bottom left, bottom right, top right, top left";
/// The catalogue: id, what it is, its dimensions in order, its number of corners, and its corners in the order of the radii.
const SHAPES: [(&str, &str, &[&str], usize, &str); 18] = [
    ("rect", "Rectangle", &["b", "h"], 4, RC),
    ("circle", "Circle", &["d"], 0, ""),
    ("semicircle", "Semicircle, flat side down", &["d"], 0, ""),
    ("triangle", "Triangle, apex a from the left end of the base (any value)", &["b", "h", "a"], 3, "bottom left, bottom right, apex"),
    ("trapezoid", "Trapezoid, top bt shifted by s (any value)", &["b", "bt", "h", "s"], 4, RC),
    ("polygon", "Regular polygon of n = 3 to 12 sides, d across the corners, flat bottom", &["n", "d"], 0, "corner 1 to corner n, counter-clockwise from the bottom left"),
    ("rhs", "Rectangular hollow, wall t", &["b", "h", "t"], 8, "outer bottom left, bottom right, top right, top left, then inner the same"),
    ("chs", "Circular hollow, wall t", &["d", "t"], 0, ""),
    ("ishape", "I or H, parallel flanges tf, web tw", &["b", "h", "tf", "tw"], 12, "bottom-left outer, bottom-right outer, bottom-right flange tip, bottom-right root, top-right root, top-right flange tip, top-right outer, top-left outer, top-left flange tip, top-left root, bottom-left root, bottom-left flange tip"),
    ("channel", "Channel, web on the left", &["b", "h", "tf", "tw"], 8, "bottom back, bottom toe, bottom flange tip, bottom root, top root, top flange tip, top toe, top back"),
    ("angle", "Angle, legs b and h, thickness t", &["b", "h", "t"], 6, "heel, horizontal toe, horizontal toe tip, root, vertical toe tip, vertical toe"),
    ("tee", "Tee, flange on top", &["b", "h", "tf", "tw"], 8, "stem bottom left, stem bottom right, right root, right flange tip, right outer, left outer, left flange tip, left root"),
    ("zed", "Z, bottom flange to the right, top flange to the left", &["b", "h", "tf", "tw"], 8, "bottom back, bottom toe, bottom flange tip, bottom root, top back, top toe, top flange tip, top root"),
    ("cross", "Cross, horizontal bar tb, vertical bar th", &["b", "h", "tb", "th"], 12, "right end bottom, right end top, top-right root, top end right, top end left, top-left root, left end top, left end bottom, bottom-left root, bottom end left, bottom end right, bottom-right root"),
    ("cfangle", "Cold-formed angle, wall t, inside bend radius ri", &["b", "h", "t", "ri"], 0, ""),
    ("cfchannel", "Cold-formed channel, web on the left, lip c (0: plain)", &["h", "b", "c", "t", "ri"], 0, ""),
    ("cfzed", "Cold-formed Z, lip c (0: plain)", &["h", "b", "c", "t", "ri"], 0, ""),
    ("cfhat", "Cold-formed top hat, flange overhang f", &["h", "b", "f", "t", "ri"], 0, ""),
];
fn corners(shape: usize, d: &[f64]) -> usize { if SHAPES[shape].0 == "polygon" { d[0].max(0.0) as usize } else { SHAPES[shape].3 } }

/// Each dimension must be a finite number: a and s any, c and ri 0 or more, n a whole number from 3 to 12, the others more than 0.
fn check_dims(shape: usize, d: &[f64]) -> Result<(), String> {
    for (k, v) in SHAPES[shape].2.iter().zip(d) {
        let (ok, need) = match *k { "a" | "s" => (true, "a number"), "c" | "ri" => (*v >= 0.0, "at least 0"), "n" => (v.fract() == 0.0 && (3.0..=12.0).contains(v), "a whole number from 3 to 12"), _ => (*v > 0.0, "greater than 0") };
        if !(ok && v.is_finite()) { return Err(format!("{k} must be {need}.")) }
    }
    Ok(())
}

/// The box of the vertices centred on the origin.
fn centre(v: Vec<[f64; 2]>) -> Vec<[f64; 2]> {
    let b = v.iter().fold([INF, -INF, INF, -INF], |b, p| [b[0].min(p[0]), b[1].max(p[0]), b[2].min(p[1]), b[3].max(p[1])]);
    let (cx, cy) = ((b[0] + b[1]) / 2.0, (b[2] + b[3]) / 2.0);
    v.iter().map(|p| [p[0] - cx, p[1] - cy]).collect()
}
/// A cold-formed strip of one wall from its outline [x, y, bend radius]: each bend has ri inside and ri + t outside, about one centre.
fn cold(pts: &[[f64; 3]]) -> Result<Cs, String> {
    let (mut v, mut r): (Vec<[f64; 2]>, Vec<f64>) = pts.iter().map(|p| ([p[0], p[1]], p[2])).unzip();
    if sarea(&v) < 0.0 { v.reverse(); r.reverse() }
    Ok(vec![fillet(&centre(v), &r, "Bend")?])
}

/// The exact contours of a shape, its box centred on the origin.
fn build(id: &str, d: &[f64], r: &[f64]) -> Result<Cs, String> {
    let need = |ok: bool, m: &str| if ok { Ok(()) } else { Err(m.to_string()) };
    let poly = |v: Vec<[f64; 2]>| Ok(vec![fillet(&centre(v), r, "Corner")?]);
    let circle = |r: f64, ccw: bool| vec![Seg::A([0.0, 0.0], r, if ccw { 0.0 } else { TAU }, if ccw { TAU } else { 0.0 })];
    let flanges = || { need(d[3] < d[0], "Web tw must be less than the flange width b.")?; need(2.0 * d[2] < d[1], "Flanges 2 tf must be less than the depth h.") };
    let lips = |c: f64, t: f64, h: f64, b: f64| { need(2.0 * t < h && t < b, "Wall t must be less than the flange width and half the depth.")?; need(c == 0.0 || (c > t && 2.0 * c < h), "Lip c must be 0 (plain), or more than t and less than half the depth.") };
    match id {
        "rect" => { let (b, h) = (d[0] / 2.0, d[1] / 2.0); poly(vec![[-b, -h], [b, -h], [b, h], [-b, h]]) }
        "circle" => Ok(vec![circle(d[0] / 2.0, true)]),
        "semicircle" => { let r = d[0] / 2.0; Ok(vec![vec![Seg::L([-r, -r / 2.0], [r, -r / 2.0]), Seg::A([0.0, -r / 2.0], r, 0.0, PI)]]) }
        "triangle" => poly(vec![[0.0, 0.0], [d[0], 0.0], [d[2], d[1]]]),
        "trapezoid" => poly(vec![[-d[0] / 2.0, 0.0], [d[0] / 2.0, 0.0], [d[3] + d[1] / 2.0, d[2]], [d[3] - d[1] / 2.0, d[2]]]),
        "polygon" => poly((0..d[0] as usize).map(|k| { let t = -PI / 2.0 - PI / d[0] + TAU * k as f64 / d[0]; [d[1] / 2.0 * t.cos(), d[1] / 2.0 * t.sin()] }).collect()),
        "rhs" => {
            need(2.0 * d[2] < d[0].min(d[1]), "Wall t must be less than half of both b and h.")?;
            let (b, h) = (d[0] / 2.0, d[1] / 2.0);
            let (bi, hi) = (b - d[2], h - d[2]);
            Ok(vec![fillet(&[[-b, -h], [b, -h], [b, h], [-b, h]], &r[..4], "Outer corner")?, rev(&fillet(&[[-bi, -hi], [bi, -hi], [bi, hi], [-bi, hi]], &r[4..], "Inner corner")?)])
        }
        "chs" => { need(2.0 * d[1] < d[0], "Wall t must be less than half the diameter.")?; Ok(vec![circle(d[0] / 2.0, true), circle(d[0] / 2.0 - d[1], false)]) }
        "ishape" => {
            flanges()?;
            let (b, h, w) = (d[0] / 2.0, d[1] / 2.0, d[3] / 2.0);
            let f = h - d[2];
            poly(vec![[-b, -h], [b, -h], [b, -f], [w, -f], [w, f], [b, f], [b, h], [-b, h], [-b, f], [-w, f], [-w, -f], [-b, -f]])
        }
        "channel" => { flanges()?; let [b, h, tf, tw] = [d[0], d[1], d[2], d[3]]; poly(vec![[0.0, 0.0], [b, 0.0], [b, tf], [tw, tf], [tw, h - tf], [b, h - tf], [b, h], [0.0, h]]) }
        "angle" => { need(d[2] < d[0] && d[2] < d[1], "Thickness t must be less than both legs.")?; let [b, h, t] = [d[0], d[1], d[2]]; poly(vec![[0.0, 0.0], [b, 0.0], [b, t], [t, t], [t, h], [0.0, h]]) }
        "tee" => {
            need(d[3] < d[0], "Stem tw must be less than the flange width b.")?;
            need(d[2] < d[1], "Flange tf must be less than the depth h.")?;
            let ([b, h, tf], w) = ([d[0] / 2.0, d[1], d[2]], d[3] / 2.0);
            poly(vec![[-w, 0.0], [w, 0.0], [w, h - tf], [b, h - tf], [b, h], [-b, h], [-b, h - tf], [-w, h - tf]])
        }
        "zed" => { flanges()?; let [b, h, tf, tw] = [d[0], d[1], d[2], d[3]]; let x = tw - b; poly(vec![[0.0, 0.0], [b, 0.0], [b, tf], [tw, tf], [tw, h], [x, h], [x, h - tf], [0.0, h - tf]]) }
        "cross" => {
            need(d[3] < d[0], "Vertical bar th must be less than the width b.")?;
            need(d[2] < d[1], "Horizontal bar tb must be less than the height h.")?;
            let (b, h, p, q) = (d[0] / 2.0, d[1] / 2.0, d[2] / 2.0, d[3] / 2.0);
            poly(vec![[b, -p], [b, p], [q, p], [q, h], [-q, h], [-q, p], [-b, p], [-b, -p], [-q, -p], [-q, -h], [q, -h], [q, -p]])
        }
        "cfangle" => { let [b, h, t, ri] = [d[0], d[1], d[2], d[3]]; need(b > t && h > t, "Wall t must be less than both legs.")?; cold(&[[0.0, 0.0, ri + t], [b, 0.0, 0.0], [b, t, 0.0], [t, t, ri], [t, h, 0.0], [0.0, h, 0.0]]) }
        "cfchannel" => {
            let [h, b, c, t, ri] = [d[0], d[1], d[2], d[3], d[4]];
            lips(c, t, h, b)?;
            let o = ri + t;
            cold(&if c > 0.0 { vec![[b, c, 0.0], [b, 0.0, o], [0.0, 0.0, o], [0.0, h, o], [b, h, o], [b, h - c, 0.0], [b - t, h - c, 0.0], [b - t, h - t, ri], [t, h - t, ri], [t, t, ri], [b - t, t, ri], [b - t, c, 0.0]] }
                else { vec![[b, 0.0, 0.0], [0.0, 0.0, o], [0.0, h, o], [b, h, 0.0], [b, h - t, 0.0], [t, h - t, ri], [t, t, ri], [b, t, 0.0]] })
        }
        "cfzed" => {
            let [h, b, c, t, ri] = [d[0], d[1], d[2], d[3], d[4]];
            lips(c, t, h, b)?;
            let (o, l) = (ri + t, t - b);
            cold(&if c > 0.0 { vec![[b, c, 0.0], [b, 0.0, o], [0.0, 0.0, o], [0.0, h - t, ri], [l + t, h - t, ri], [l + t, h - c, 0.0], [l, h - c, 0.0], [l, h, o], [t, h, o], [t, t, ri], [b - t, t, ri], [b - t, c, 0.0]] }
                else { vec![[b, 0.0, 0.0], [0.0, 0.0, o], [0.0, h - t, ri], [l, h - t, 0.0], [l, h, 0.0], [t, h, o], [t, t, ri], [b, t, 0.0]] })
        }
        _ => {
            let [h, b, f, t, ri] = [d[0], d[1], d[2], d[3], d[4]];
            need(2.0 * t < b && t < h, "Wall t must be less than the height and half the crown width.")?;
            need(f > t, "Flange overhang f must be more than t.")?;
            let o = ri + t;
            cold(&[[-f, 0.0, 0.0], [t, 0.0, o], [t, h - t, ri], [b - t, h - t, ri], [b - t, 0.0, o], [b + f, 0.0, 0.0], [b + f, t, 0.0], [b, t, ri], [b, h, o], [0.0, h, o], [0.0, t, ri], [-f, t, 0.0]])
        }
    }
}

/// A part's contours in the section: turned (exactly, by swapping coordinates) about the centre of its box, then moved there.
fn place(p: &Part) -> Result<Cs, String> {
    let cs = build(SHAPES[p.shape].0, &p.d, &p.r)?;
    let q = |a: [f64; 2]| if p.turn { [-a[1], a[0]] } else { a };
    let dt = if p.turn { PI / 2.0 } else { 0.0 };
    let cs: Cs = cs.iter().map(|k| k.iter().map(|g| match *g { Seg::L(a, b) => Seg::L(q(a), q(b)), Seg::A(o, r, t0, t1) => Seg::A(q(o), r, t0 + dt, t1 + dt) }).collect()).collect();
    Ok(tf(&cs, 0.0, p.x, p.y))
}
```

```rust
//| caption: The section: checks of the model, the parts put together, and the elastic properties of the transformed section.
/// Every rule of the model, with the part or material that breaks it.
fn validate(m: &Model) -> Result<(), String> {
    for (i, x) in m.mats.iter().enumerate() {
        if x.id.trim().is_empty() || m.mats[..i].iter().any(|y| y.id == x.id) { return Err(format!("Material id \"{}\" is empty or used twice.", x.id)) }
        for l in [x.t, x.c] {
            if !(l.e > 0.0 && l.s > 0.0 && (1.0..=200.0).contains(&l.n) && l.lim > 0.0 && l.lim <= 1.0) {
                return Err(format!("Material \"{}\": E and σ0.2 must be greater than 0, n from 1 to 200, and ε_lim greater than 0 and at most 1.", x.id))
            }
        }
    }
    if !(m.e_base > 0.0 && m.e_base.is_finite()) { return Err("E_base must be greater than 0.".into()) }
    for (i, p) in m.parts.iter().enumerate() {
        let e = |t: String| format!("Part \"{}\": {t}", p.id);
        if p.id.is_empty() || m.parts[..i].iter().any(|q| q.id == p.id) { return Err(format!("Part id \"{}\" is empty or used twice.", p.id)) }
        check_dims(p.shape, &p.d).map_err(e)?;
        let n = corners(p.shape, &p.d);
        if p.r.len() != n { return Err(e(format!("it needs {n} corner radii ({}).", if n == 0 { "none" } else { SHAPES[p.shape].4 }))) }
        if p.r.iter().any(|r| !(*r >= 0.0 && r.is_finite())) { return Err(e("every corner radius must be 0 or more.".into())) }
        if !(p.x.is_finite() && p.y.is_finite()) { return Err(e("its place must be two numbers.".into())) }
        if !p.hole && !m.mats.iter().any(|x| x.id == p.mat) { return Err(e(format!("it needs a material; \"{}\" is not one.", p.mat))) }
        place(p).map_err(e)?;
    }
    Ok(())
}

/// An assembled part: its index, contours in the section, its material (a hole's host's), its modular ratio n and weight ±n.
struct Q { i: usize, cs: Cs, mat: usize, n: f64, w: f64, host: usize }

/// The parts together. Solid parts must not overlap; a hole must lie inside exactly one solid part, and holes must not overlap.
fn assemble(m: &Model) -> Result<Vec<Q>, String> {
    let cs: Vec<Cs> = m.parts.iter().map(place).collect::<Result<_, _>>()?;
    let (solid, holes): (Vec<usize>, Vec<usize>) = (0..cs.len()).partition(|&i| !m.parts[i].hole);
    if solid.is_empty() { return Err("Add at least one solid part.".into()) }
    let regions: Vec<_> = cs.iter().map(|c| { let b = bbox(c); region(c, 1e-4 * (b[1] - b[0]).hypot(b[3] - b[2])) }).collect();
    let (areas, boxes): (Vec<f64>, Vec<[f64; 4]>) = cs.iter().map(|c| (whole(c, 1, 1)[0][0], bbox(c))).unzip();
    let touch = |a: usize, b: usize| { let (p, q) = (boxes[a], boxes[b]); !(p[1] <= q[0] || q[1] <= p[0] || p[3] <= q[2] || q[3] <= p[2]) };
    let id = |i: usize| &m.parts[i].id;
    for (k, &a) in solid.iter().enumerate() {
        for &b in &solid[k + 1..] {
            let s = if touch(a, b) { shared(&regions[a], &regions[b]) } else { 0.0 };
            if s > 1e-6 * areas[a].min(areas[b]) { return Err(format!("Parts \"{}\" and \"{}\" overlap by about {} mm². Solid parts may touch but not overlap; cut a hole with a negative part.", id(a), id(b), fmt(s, 4))) }
        }
    }
    let mut host: Vec<usize> = (0..cs.len()).collect();
    for &v in &holes {
        let hs: Vec<(usize, f64)> = solid.iter().filter(|&&s| touch(s, v)).map(|&s| (s, shared(&regions[s], &regions[v]))).filter(|h| h.1 > 1e-6 * areas[v]).collect();
        if hs.len() != 1 || hs[0].1 < areas[v] * (1.0 - 1e-3) {
            return Err(format!("Hole \"{}\" must lie entirely inside one solid part{}.", id(v), if hs.len() > 1 { format!("; it overlaps {}", hs.iter().map(|h| format!("\"{}\"", id(h.0))).collect::<Vec<_>>().join(" and ")) } else { String::new() }))
        }
        host[v] = hs[0].0;
    }
    for (k, &a) in holes.iter().enumerate() {
        for &b in &holes[k + 1..] { if touch(a, b) && shared(&regions[a], &regions[b]) > 1e-6 * areas[a].min(areas[b]) { return Err(format!("Holes \"{}\" and \"{}\" overlap.", id(a), id(b))) } }
    }
    Ok(cs.into_iter().enumerate().map(|(i, cs)| {
        let mat = m.mats.iter().position(|x| x.id == m.parts[host[i]].mat).unwrap();
        let n = m.mats[mat].t.e / m.e_base;
        Q { i, cs, mat, n, w: if m.parts[i].hole { -n } else { n }, host: host[i] }
    }).collect())
}

/// The properties: key, quantity, symbol, unit and power of length.
const KEYS: [(&str, &str, &str, &str, i32); 19] = [
    ("A", "Area", "A", "mm²", 2), ("cx", "Centroid", "x_c", "mm", 1), ("cy", "", "y_c", "mm", 1),
    ("Ix", "Second moment about x", "I_x", "mm^4", 4), ("Iy", "Second moment about y", "I_y", "mm^4", 4), ("Ixy", "Product moment", "I_xy", "mm^4", 4),
    ("I1", "Major principal", "I_1", "mm^4", 4), ("I2", "Minor principal", "I_2", "mm^4", 4), ("thetaDeg", "Principal angle, x to axis 1", "θ", "°", 0),
    ("Sx_top", "Section modulus, top", "S_x+", "mm³", 3), ("Sx_bottom", "Section modulus, bottom", "S_x−", "mm³", 3),
    ("Sy_right", "Section modulus, right", "S_y+", "mm³", 3), ("Sy_left", "Section modulus, left", "S_y−", "mm³", 3),
    ("rx", "Radius of gyration", "r_x", "mm", 1), ("ry", "", "r_y", "mm", 1), ("Ip", "Polar moment", "I_p", "mm^4", 4), ("rp", "Polar radius of gyration", "r_p", "mm", 1),
    ("Qx", "First moment above the x axis", "Q_x", "mm³", 3), ("Qy", "First moment beside the y axis", "Q_y", "mm³", 3),
];
/// The properties in the order of KEYS, the principal angle in radians, and the box of the solid parts (x0, x1, y0, y1).
struct Props { v: [f64; 19], th: f64, ext: [f64; 4] }
fn key(k: &str) -> usize { KEYS.iter().position(|x| x.0 == k).unwrap() }
impl Props { fn g(&self, k: &str) -> f64 { self.v[key(k)] } }
/// Zero for a value below 1e-12 of its scale: rounding noise.
fn snap(v: f64, scale: f64) -> f64 { if v.abs() <= 1e-12 * scale { 0.0 } else { v } }
/// The principal angle from x to axis 1, in (−π/2, π/2]; exactly 0 or π/2 when I_xy is 0.
fn principal(ix: f64, iy: f64, ixy: f64, zero: bool) -> f64 {
    let th = if zero { if ix >= iy { 0.0 } else { PI / 2.0 } } else { 0.5 * (-2.0 * ixy).atan2(ix - iy) };
    if th > PI / 2.0 { th - PI } else if th <= -PI / 2.0 { th + PI } else { th }
}

/// The elastic properties of the transformed section about its centroid.
fn props(qs: &[Q], m: &Model) -> Result<Props, String> {
    let (mut a, mut sx, mut sy) = (0.0, 0.0, 0.0);
    for q in qs { let w = whole(&q.cs, 2, 2); a += q.w * w[0][0]; sy += q.w * w[1][0]; sx += q.w * w[0][1] }
    if !(a > 0.0) { return Err("The section has no area.".into()) }
    let (cx, cy) = (sy / a, sx / a);
    let (mut ix, mut iy, mut ixy, mut qx, mut qy) = (0.0, 0.0, 0.0, 0.0, 0.0);
    for q in qs {
        let c = tf(&q.cs, 0.0, -cx, -cy);
        let w = whole(&c, 3, 3);
        ix += q.w * w[0][2]; iy += q.w * w[2][0]; ixy += q.w * w[1][1];
        qx += q.w * mom(&c, 0.0, INF, 0.0, 1, 2)[0][1];
        qy += q.w * mom(&tf(&c, -PI / 2.0, 0.0, 0.0), 0.0, INF, 0.0, 1, 2)[0][1];
    }
    let th = principal(ix, iy, ixy, ixy.abs() <= 1e-13 * ix.abs().max(iy.abs()));
    let (avg, rad) = ((ix + iy) / 2.0, ((ix - iy) / 2.0).hypot(ixy));
    let e = qs.iter().filter(|q| !m.parts[q.i].hole).map(|q| bbox(&q.cs)).fold([INF, -INF, INF, -INF], |b, p| [b[0].min(p[0]), b[1].max(p[1]), b[2].min(p[2]), b[3].max(p[3])]);
    let (ip, l) = (ix + iy, (e[1] - e[0]).hypot(e[3] - e[2]));
    Ok(Props { v: [a, snap(cx, l), snap(cy, l), ix, iy, snap(ixy, ip), avg + rad, avg - rad, th * 180.0 / PI, ix / (e[3] - cy), ix / (cy - e[2]), iy / (e[1] - cx), iy / (cx - e[0]),
        (ix / a).sqrt(), (iy / a).sqrt(), ip, (ip / a).sqrt(), qx, qy], th, ext: e })
}

/// A solved section: the model, its assembled parts and its properties.
struct Sec { m: Model, q: Vec<Q>, p: Props }
fn solve(m: Model) -> Result<Sec, String> { validate(&m)?; let q = assemble(&m)?; let p = props(&q, &m)?; Ok(Sec { m, q, p }) }
```

```rust
//| caption: Torsion: the verified formulas.
/// A torsion formula: its id in the accuracy table, its method, J and the formula as text.
struct Tor { id: &'static str, method: &'static str, j: f64, text: &'static str }
fn p4(x: f64) -> f64 { x * x * x * x }
/// The Saint-Venant series of a sharp rectangle with b ≥ h: b, h, the first term and the sum of tanh(nπb/2h)/n^5 over odd n.
fn series(b: f64, h: f64) -> (f64, f64, f64, f64) {
    let (b, h) = if h > b { (h, b) } else { (b, h) };
    let (mut sum, mut first, mut n) = (0.0, 0.0, 1.0);
    while n < 100001.0 {
        let term = (n * PI * b / (2.0 * h)).tanh() / (n * n * n * n * n);
        if n == 1.0 { first = term }
        sum += term;
        if term < 1e-18 * sum { break }
        n += 2.0;
    }
    (b, h, first, sum)
}
fn rect_j(b: f64, h: f64, s: f64) -> f64 { b * h * h * h / 3.0 * (1.0 - 192.0 / PI.powi(5) * (h / b) * s) }
/// The walls of a thin-walled open shape on their mid-lines: name, length L and thickness t. A flange or leg runs to the
/// mid-line of the wall that it meets, so no length counts twice.
fn walls(id: &str, d: &[f64]) -> Vec<(&'static str, f64, f64)> {
    match id {
        "ishape" => vec![("flange", d[0], d[2]), ("flange", d[0], d[2]), ("web", d[1] - d[2], d[3])],
        "channel" | "zed" => vec![("flange", d[0] - d[3] / 2.0, d[2]), ("flange", d[0] - d[3] / 2.0, d[2]), ("web", d[1] - d[2], d[3])],
        "tee" => vec![("flange", d[0], d[2]), ("stem", d[1] - d[2] / 2.0, d[3])],
        "angle" => vec![("both legs", d[0] + d[1] - d[2], d[2])],
        _ => vec![("horizontal bar", d[0], d[2]), ("vertical bar", d[1] - d[2], d[3])],
    }
}
/// The developed mid-line length of a cold-formed strip and its number of 90° bends: the sharp mid-line path less (2 − π/2) r_m
/// for each bend of mid-line radius r_m = ri + t/2.
fn developed(id: &str, d: &[f64]) -> (f64, f64) {
    let (t, ri) = (d[d.len() - 2], d[d.len() - 1]);
    let (m, cut) = (t / 2.0, (2.0 - PI / 2.0) * (ri + t / 2.0));
    match id {
        "cfangle" => (d[0] - m + d[1] - m - cut, 1.0),
        "cfhat" => (2.0 * (d[2] + m) + 2.0 * (d[0] - t) + (d[1] - t) - 4.0 * cut, 4.0),
        _ if d[2] > 0.0 => (d[0] - t + 2.0 * (d[1] - t) + 2.0 * (d[2] - m) - 4.0 * cut, 4.0),
        _ => (d[0] - t + 2.0 * (d[1] - m) - 2.0 * cut, 2.0),
    }
}
/// The mid-line radius of each corner of a hollow box with a uniform wall (0 for a sharp corner), or why it has none.
fn box_midline(d: &[f64], r: &[f64]) -> Result<Vec<f64>, String> {
    (0..4).map(|k| match (r[k], r[k + 4]) {
        (0.0, 0.0) => Ok(0.0),
        (o, i) if o >= d[2] && (i - (o - d[2])).abs() <= 1e-9 * d[2] => Ok(o - d[2] / 2.0),
        _ => Err("Bredt–Batho needs a uniform wall: each inner corner radius must equal the outer radius minus t, or both must be 0.".into()),
    }).collect()
}

/// The formula for one shape, or why there is none.
fn formula(shape: usize, d: &[f64], r: &[f64]) -> Result<Tor, String> {
    let (id, sharp) = (SHAPES[shape].0, r.iter().all(|x| *x == 0.0));
    let tor = |id, method, j, text| Ok(Tor { id, method, j, text });
    let close = |a: f64, b: f64| (a - b).abs() <= 1e-9 * a.abs().max(b.abs()).max(1e-300);
    match id {
        "circle" => tor("circle", "exact", PI * p4(d[0]) / 32.0, "J = π d^4 / 32"),
        "chs" => tor("chs", "exact", PI * (p4(d[0]) - p4(d[0] - 2.0 * d[1])) / 32.0, "J = π (d^4 − d_i^4) / 32"),
        "semicircle" => tor("semicircle", "exact", (PI / 2.0 - 4.0 / PI) * p4(d[0] / 2.0), "J = (π/2 − 4/π) r^4"),
        "rect" if !sharp => Err("No verified formula for a rectangle with rounded corners.".into()),
        "rect" => { let (b, h, _, s) = series(d[0], d[1]); tor("rect", "Saint-Venant series", rect_j(b, h, s), "J = (b h³/3) [1 − (192/π^5) (h/b) Σ tanh(nπb/2h) / n^5], n odd, h ≤ b") }
        "triangle" if sharp && close(d[2], d[0] / 2.0) && close(d[1], d[0] * 3f64.sqrt() / 2.0) => tor("triangle-equilateral", "exact", 3f64.sqrt() * p4(d[0]) / 80.0, "J = sqrt(3) b^4 / 80"),
        "triangle" => Err("Only a sharp equilateral triangle (a = b/2, h = b sqrt(3)/2) has an exact formula.".into()),
        "rhs" if d[2] > 0.1 * d[0].min(d[1]) => Err("Bredt–Batho is used only for walls up to 0.1 of the smaller outside dimension.".into()),
        "rhs" => {
            let rm = box_midline(d, r)?;
            let (bm, hm, t) = (d[0] - d[2], d[1] - d[2], d[2]);
            let am = bm * hm - rm.iter().map(|r| (1.0 - PI / 4.0) * r * r).sum::<f64>();
            let pm = 2.0 * (bm + hm) - rm.iter().map(|r| (2.0 - PI / 2.0) * r).sum::<f64>();
            tor(if rm.iter().all(|r| *r > 0.0) { "rhs-bredt-rounded" } else { "rhs-bredt-sharp" }, "Bredt–Batho (thin wall)", 4.0 * am * am * t / pm, "J = 4 A_m² t / p_m")
        }
        "ishape" | "channel" | "zed" | "tee" | "angle" | "cross" => {
            if !sharp { return Err("Root fillets and rounded toes add torsional stiffness that the thin-walled formula leaves out (6–20% measured), so it is given only for sharp corners.".into()) }
            let w = if id == "angle" { vec![d[2]] } else { vec![d[2], d[3]] };
            let (big, small) = (w.iter().fold(0.0_f64, |a, b| a.max(*b)), w.iter().fold(INF, |a, b| a.min(*b)));
            if big > 0.15 * d[0].min(d[1]) { return Err("The thin-walled formula is used only for walls up to 0.15 of the smaller outside dimension.".into()) }
            if big / small > 1.4 { return Err("The thin-walled formula is used only when the thicker wall is at most 1.4 times the thinner.".into()) }
            tor("open-thin-wall", "Vlasov thin-walled open section", walls(id, d).iter().map(|w| w.1 * w.2 * w.2 * w.2 / 3.0).sum(), "J = (1/3) Σ L t³ over the wall mid-lines")
        }
        "cfangle" | "cfchannel" | "cfzed" | "cfhat" => {
            let t = d[d.len() - 2];
            if t > 0.1 * d[0].min(d[1]) { return Err("The thin-walled formula is used only for walls up to 0.1 of the smaller of b and h.".into()) }
            tor("cold-formed-thin-wall", "Vlasov thin-walled open section (uniform wall)", developed(id, d).0 * t * t * t / 3.0, "J = L t³ / 3, L the developed mid-line length with the bends")
        }
        _ => Err("No verified torsion formula for this shape.".into()),
    }
}

/// The torsion constant of a model and its line of the accuracy table, or why there is none.
fn torsion(m: &Model) -> Result<(Tor, &'static Value), String> {
    if m.parts.len() != 1 || m.parts[0].hole { return Err("J is given only for a single library shape with no holes.".into()) }
    let p = &m.parts[0];
    let t = formula(p.shape, &p.d, &p.r)?;
    let a = &acc()["formulas"][t.id];
    if a.is_null() { return Err("This formula has no recorded accuracy check.".into()) }
    if a["pass"] != true { return Err(format!("Withdrawn: the measured error {} is more than the stated {}.", pct(fv(&a["measured"])), pct(fv(&a["stated"])))) }
    Ok((t, a))
}
```

```rust
//| caption: Plastic bending: Ramberg–Osgood fibres, the moment–curvature curve, M_el and the σ0.2 stress block.
/// σ from ε ≥ 0 on one Ramberg–Osgood branch, by Newton's method from an upper bound (the residual is convex and increasing).
fn ro(l: &Law, e: f64) -> f64 {
    if e <= 0.0 { return 0.0 }
    let mut s = (l.e * e).min(l.s * (e / 0.002).powf(1.0 / l.n));
    for _ in 0..200 {
        let p = 0.002 * if l.n.fract() == 0.0 { (s / l.s).powi(l.n as i32) } else { (s / l.s).powf(l.n) };
        let ds = (s / l.e + p - e) / (1.0 / l.e + l.n * p / s);
        s -= ds;
        if !(s > 0.0) { return 0.0 }
        if ds.abs() <= 1e-15 * s { break }
    }
    s
}
fn sgn(x: f64) -> f64 { if x > 0.0 { 1.0 } else if x < 0.0 { -1.0 } else { 0.0 } }

/// A part in the frame of a neutral axis: its index, weight ±1, laws, its extent across the axis, and its strips: the mid-level
/// v_m, the half-spread of the three Chebyshev points, and the exact moments ∫u^i (v − v_m)^j dA.
struct Fp { i: usize, w: f64, t: Law, c: Law, lo: f64, hi: f64, strips: Vec<(f64, f64, [[f64; 4]; 3])> }
/// One point of the curve: the curvature k, its part κ about the axis, the neutral-axis turn φ, the strain at the centroid,
/// the moment and the cross moment, the extreme strains, the use of ε_lim, and the governing fibre (part, tension, strain).
#[derive(Clone)]
struct Pt { k: f64, kappa: f64, phi: f64, e0: f64, m: f64, mc: f64, emax: f64, emin: f64, util: f64, gov: (usize, bool, f64) }
/// The plastic results: the axial force and the axis angle, the curve and its last point at ε_lim, M_el and M_p at N = 0,
/// Z_p (or why not), the shape factor, and M_el(N) and M_p(N).
struct Pl { n: f64, alpha: f64, curve: Vec<Pt>, lim: Pt, mel: Option<f64>, mp: Option<f64>, zp: Result<f64, &'static str>, sf: Option<f64>, meln: Option<f64>, mpn: Option<f64> }

/// The fibre solver for one section, axis and axial force: the parts about the centroid, and the strips of each neutral-axis angle.
struct Fibres { parts: Vec<(usize, f64, Law, Law, Cs)>, cache: RefCell<Vec<(i64, Rc<Vec<Fp>>)>>, strips: usize, alpha: f64, n: f64, nscale: f64, free: bool, e0: f64, phi: f64 }

/// The axial force, the moment about the axis (−∫σ v dA) and the moment about v (∫σ u dA) for ε = e0 − k v; σ is a quadratic in v
/// through three Chebyshev points of each strip, so a linear-elastic curve is exact.
fn resultants(fr: &[Fp], e0: f64, k: f64) -> (f64, f64, f64) {
    let (mut f, mut mu, mut mv) = (0.0, 0.0, 0.0);
    for p in fr {
        let st = |e: f64| if e >= 0.0 { ro(&p.t, e) } else { -ro(&p.c, -e) };
        let (mut a, mut b, mut c) = (0.0, 0.0, 0.0);
        for (vm, d, m) in &p.strips {
            let (sm, s0, sp) = (st(e0 - k * (vm - d)), st(e0 - k * vm), st(e0 - k * (vm + d)));
            let (a1, a2) = ((sp - sm) / (2.0 * d), (sp - 2.0 * s0 + sm) / (2.0 * d * d));
            let i0 = s0 * m[0][0] + a1 * m[0][1] + a2 * m[0][2];
            a += i0;
            b -= vm * i0 + (s0 * m[0][1] + a1 * m[0][2] + a2 * m[0][3]);
            c += s0 * m[1][0] + a1 * m[1][1] + a2 * m[1][2];
        }
        f += p.w * a;
        mu += p.w * b;
        mv += p.w * c;
    }
    (f, mu, mv)
}

impl Fibres {
    /// The parts cut into strips across the neutral axis at angle th: 160 levels across the whole section, and each part's corners and arc tops.
    fn at(&self, th: f64) -> Rc<Vec<Fp>> {
        let key = (th * 1e12).round() as i64;
        if let Some(f) = self.cache.borrow().iter().find(|c| c.0 == key) { return f.1.clone() }
        let fc: Vec<Cs> = self.parts.iter().map(|p| tf(&p.4, -th, 0.0, 0.0)).collect();
        let ex: Vec<(f64, f64)> = fc.iter().map(|c| extent(c, 0.0, 1.0)).collect();
        let (lo, hi) = ex.iter().fold((INF, -INF), |a, e| (a.0.min(e.0), a.1.max(e.1)));
        let depth = hi - lo;
        let fr: Vec<Fp> = self.parts.iter().zip(&fc).zip(&ex).map(|((p, c), &(plo, phi))| {
            let mut lv = vec![plo, phi];
            lv.extend(breaks(c).into_iter().filter(|v| *v > plo && *v < phi));
            lv.extend((1..self.strips).map(|k| lo + depth * k as f64 / self.strips as f64).filter(|v| *v > plo && *v < phi));
            lv.sort_by(f64::total_cmp);
            let cuts: Vec<f64> = (0..lv.len()).filter(|&i| i == 0 || lv[i] - lv[i - 1] > 1e-9 * depth).map(|i| lv[i]).collect();
            let strips = cuts.windows(2).filter_map(|w| {
                let vm = (w[0] + w[1]) / 2.0;
                let m = mom(c, w[0], w[1], vm, 2, 4);
                (m[0][0].abs() > 1e-14 * depth * depth).then_some((vm, 3f64.sqrt() / 2.0 * (w[1] - w[0]) / 2.0, m))
            }).collect();
            Fp { i: p.0, w: p.1, t: p.2, c: p.3, lo: plo, hi: phi, strips }
        }).collect();
        let fr = Rc::new(fr);
        let mut cache = self.cache.borrow_mut();
        if cache.len() > 64 { cache.clear() }
        cache.push((key, fr.clone()));
        fr
    }
    /// The strain at the centroid that carries N at curvature k: the force grows with it, so bracket, then the Illinois method.
    fn strain(&self, fr: &[Fp], k: f64, guess: f64) -> Result<f64, String> {
        let f = |e: f64| resultants(fr, e, k).0 - self.n;
        let tol = 1e-11 * self.nscale;
        let (mut a, mut fa) = (guess, f(guess));
        if fa.abs() <= tol { return Ok(a) }
        let mut step = (guess.abs() * 0.5 + 1e-5).max(1e-6);
        let mut b = if fa < 0.0 { a + step } else { a - step };
        let mut fb = f(b);
        for _ in 0..80 {
            if sgn(fa) != sgn(fb) { break }
            (a, fa, step) = (b, fb, step * 2.0);
            b = if fa < 0.0 { a + step } else { a - step };
            fb = f(b);
        }
        if sgn(fa) == sgn(fb) { return Err("No strain state carries this axial force.".into()) }
        let mut side = 0;
        for _ in 0..200 {
            let c = (a * fb - b * fa) / (fb - fa);
            let fc = f(c);
            if fc.abs() <= tol || (b - a).abs() <= 1e-15 * a.abs().max(b.abs()).max(1e-12) { return Ok(c) }
            if sgn(fc) == sgn(fb) { (b, fb) = (c, fc); if side == -1 { fa /= 2.0 } side = -1 } else { (a, fa) = (c, fc); if side == 1 { fb /= 2.0 } side = 1 }
        }
        Ok((a + b) / 2.0)
    }
    /// The moments in the frame of the axis for curvature k with the neutral axis turned by phi: (phi, ε0, strips, M, cross moment).
    fn turned(&self, k: f64, phi: f64, guess: f64) -> Result<(f64, f64, Rc<Vec<Fp>>, f64, f64), String> {
        let fr = self.at(self.alpha + phi);
        let e0 = self.strain(&fr, k, guess)?;
        let (_, mu, mv) = resultants(&fr, e0, k);
        Ok((phi, e0, fr, mu * phi.cos() - mv * phi.sin(), mu * phi.sin() + mv * phi.cos()))
    }
    /// The state at curvature k: in mode (b), the turn of the neutral axis with no cross moment, by the secant method.
    fn state(&self, k: f64, hint: Option<&Pt>) -> Result<Pt, String> {
        let g = hint.map_or(self.e0, |h| h.e0);
        let ok = |s: &(f64, f64, Rc<Vec<Fp>>, f64, f64)| s.4.abs() <= 1e-9 * s.3.abs().max(1e-300);
        let mut best = if !self.free || k == 0.0 { self.turned(k, 0.0, g)? } else {
            let mut p0 = hint.map_or(self.phi, |h| h.phi);
            let mut s0 = self.turned(k, p0, g)?;
            if ok(&s0) { s0 } else {
                let mut p1 = p0 + 1e-3;
                let mut s1 = self.turned(k, p1, s0.1)?;
                for _ in 0..40 {
                    if ok(&s1) { break }
                    let den = s1.4 - s0.4;
                    if den == 0.0 { break }
                    let p2 = (p1 - s1.4 * (p1 - p0) / den).clamp(-1.45, 1.45);
                    let next = self.turned(k, p2, s1.1)?;
                    (p0, s0, p1, s1) = (p1, s1, p2, next);
                }
                if !ok(&s1) { return Err("The turn of the neutral axis for no cross moment did not converge; try mode (a).".into()) }
                s1
            }
        };
        let (mut util, mut gov, mut emax, mut emin) = (0.0, (0, true, 0.0), -INF, INF);
        for p in best.2.iter().filter(|p| p.w > 0.0) {
            for v in [p.lo, p.hi] {
                let e = best.1 - k * v;
                (emax, emin) = (emax.max(e), emin.min(e));
                let u = if e >= 0.0 { e / p.t.lim } else { -e / p.c.lim };
                if u > util { (util, gov) = (u, (p.i, e >= 0.0, e)) }
            }
        }
        if best.4.abs() <= 1e-9 * best.3.abs() { best.4 = 0.0 }
        Ok(Pt { k, kappa: k * best.0.cos(), phi: best.0, e0: best.1, m: best.3, mc: best.4, emax, emin, util, gov })
    }
    /// The rigid–plastic σ0.2 block at axial force nv: (M, cross moment), with the neutral axis turned for no cross moment in mode (b);
    /// None when nv is outside the block's range.
    fn block(&self, nv: f64) -> Option<(f64, f64)> {
        let at = |phi: f64| -> Option<(f64, f64)> {
            let fr: Vec<(f64, Law, Law, Cs)> = self.parts.iter().map(|x| (x.1, x.2, x.3, tf(&x.4, -(self.alpha + phi), 0.0, 0.0))).collect();
            let (lo, hi) = fr.iter().fold((INF, -INF), |a, x| { let e = extent(&x.3, 0.0, 1.0); (a.0.min(e.0), a.1.max(e.1)) });
            let sums = |c: f64| fr.iter().fold((0.0, 0.0, 0.0), |(f, mu, mv), (w, t, cl, cs)| {
                let (b, a) = (mom(cs, -INF, c, 0.0, 2, 2), mom(cs, c, INF, 0.0, 2, 2));
                (f + w * (t.s * b[0][0] - cl.s * a[0][0]), mu - w * (t.s * b[0][1] - cl.s * a[0][1]), mv + w * (t.s * b[1][0] - cl.s * a[1][0]))
            });
            if nv < sums(lo).0 || nv > sums(hi).0 { return None }
            let (mut a, mut b) = (lo, hi);
            for _ in 0..200 {
                if !(b - a > 1e-13 * (hi - lo)) { break }
                let c = (a + b) / 2.0;
                if sums(c).0 < nv { a = c } else { b = c }
            }
            let r = sums((a + b) / 2.0);
            Some((r.1 * phi.cos() - r.2 * phi.sin(), r.1 * phi.sin() + r.2 * phi.cos()))
        };
        let best = at(0.0)?;
        let ok = |b: (f64, f64)| b.1.abs() <= 1e-9 * b.0.abs();
        if !self.free || ok(best) { return Some(best) }
        // A change of sign of the cross moment in φ, by steps of 1°, then bisection.
        let (step, mut pa, mut ba, mut pb) = (PI / 180.0, 0.0, best, None);
        'scan: for k in 1..=85 {
            for sg in [1.0, -1.0] {
                let p = sg * k as f64 * step;
                if let Some(b) = at(p) { if sgn(b.1) != sgn(ba.1) { pb = Some(p); pa = sg * (k - 1) as f64 * step; ba = at(pa)?; break 'scan } }
            }
        }
        let mut pb = pb?;
        for _ in 0..80 {
            if ok(ba) { break }
            let pm = (pa + pb) / 2.0;
            let bm = at(pm)?;
            if sgn(bm.1) == sgn(ba.1) { (pa, ba) = (pm, bm) } else { pb = pm }
        }
        Some(ba)
    }
}

/// The plastic analysis about an axis (x, y, major, minor) at axial force nv, in mode (b) when free: the curve in npts points to
/// the curvature at which the first fibre reaches its ε_lim, and the moments at first yield and of the σ0.2 block.
fn analyse(sec: &Sec, axis: usize, nv: f64, free: bool, strips: usize, npts: usize) -> Result<Pl, String> {
    let (m, p) = (&sec.m, &sec.p);
    if !nv.is_finite() { return Err("Type the axial force as a number.".into()) }
    let alpha = [0.0, PI / 2.0, p.th, p.th + PI / 2.0][axis];
    let (c, s) = (alpha.cos(), alpha.sin());
    let (ix, iy, ixy) = (p.g("Ix"), p.g("Iy"), p.g("Ixy"));
    let (ivv, iuu, iuv) = (ix * c * c + iy * s * s - 2.0 * ixy * s * c, iy * c * c + ix * s * s + 2.0 * ixy * s * c, (ix - iy) * s * c + ixy * (c * c - s * s));
    let parts: Vec<_> = sec.q.iter().map(|q| (q.i, if m.parts[q.i].hole { -1.0 } else { 1.0 }, m.mats[q.mat].t, m.mats[q.mat].c, tf(&q.cs, 0.0, -p.g("cx"), -p.g("cy")))).collect();
    let nscale = parts.iter().filter(|x| x.1 > 0.0).map(|x| x.2.s.max(x.3.s) * whole(&x.4, 1, 1)[0][0].abs()).sum();
    let fb = Fibres { parts, cache: RefCell::default(), strips, alpha, n: nv, nscale, free, e0: nv / (m.e_base * p.g("A")), phi: if free { (iuv / iuu).atan() } else { 0.0 } };
    let f0 = fb.at(alpha);
    let solids: Vec<&Fp> = f0.iter().filter(|f| f.w > 0.0).collect();
    let (et, ec) = solids.iter().fold((INF, INF), |a, f| (a.0.min(f.t.lim), a.1.min(f.c.lim)));
    let (nmax, nmin) = (resultants(&f0, et, 0.0).0, resultants(&f0, -ec, 0.0).0);
    if nv >= nmax || nv <= nmin { return Err(format!("The axial force alone strains the section past ε_lim: within ε_lim it carries {} N to {} N.", fmt(nmin, 4), fmt(nmax, 4))) }
    let s0 = fb.state(0.0, None)?;
    if s0.util >= 1.0 { return Err(format!("The axial force alone strains part \"{}\" past its ε_lim.", m.parts[s0.gov.0].id)) }
    // Bracket, then bisect, the curvature at which the governing fibre reaches ε_lim.
    let depth = f0.iter().fold(-INF, |a: f64, f| a.max(f.hi)) - f0.iter().fold(INF, |a: f64, f| a.min(f.lo));
    let lim = solids.iter().fold(INF, |a, f| a.min(f.t.lim).min(f.c.lim));
    let (mut klo, mut slo, mut khi) = (0.0, s0.clone(), 2.0 * lim / depth);
    let mut shi = fb.state(khi, Some(&s0))?;
    for _ in 0..60 {
        if shi.util >= 1.0 { break }
        (klo, slo, khi) = (khi, shi, khi * 2.0);
        shi = fb.state(khi, Some(&slo))?;
    }
    if shi.util < 1.0 { return Err("Could not reach ε_lim; check the material limits.".into()) }
    for _ in 0..60 {
        if !(khi - klo > 1e-10 * khi) { break }
        let km = (klo + khi) / 2.0;
        let sm = fb.state(km, Some(&slo))?;
        if sm.util < 1.0 { (klo, slo) = (km, sm) } else { (khi, shi) = (km, sm) }
    }
    let du = shi.util - slo.util;
    let klim = klo + (1.0 - slo.util) * (khi - klo) / if du != 0.0 { du } else { 1.0 };
    let last = fb.state(klim, Some(&slo))?;
    let mut curve = vec![s0];
    for i in 1..npts { let st = fb.state(klim * i as f64 / (npts - 1) as f64, curve.last())?; curve.push(st) }
    *curve.last_mut().unwrap() = last.clone();
    // First yield at σ0.2, linear-elastic, with the same axis and mode: ε = e0 + M g / (E_base I_eff) with g = −v + t u.
    let t = if free { iuv / iuu } else { 0.0 };
    let ieff = ivv - t * iuv;
    let yield_at = |n: f64| -> Option<f64> {
        let e0 = n / (m.e_base * p.g("A"));
        let mut lam = INF;
        for q in sec.q.iter().filter(|q| !m.parts[q.i].hole) {
            let (l, lc) = (m.mats[q.mat].t, m.mats[q.mat].c);
            let (lo, hi) = extent(&tf(&tf(&q.cs, 0.0, -p.g("cx"), -p.g("cy")), -alpha, 0.0, 0.0), t, -1.0);
            let sn = l.e * e0;
            if sn > l.s || -sn > lc.s { return None }
            for g in [lo * t.hypot(1.0), hi * t.hypot(1.0)] {
                let slope = l.e * g / (m.e_base * ieff);
                if slope > 0.0 { lam = lam.min((l.s - sn) / slope) } else if slope < 0.0 { lam = lam.min((-lc.s - sn) / slope) }
            }
        }
        lam.is_finite().then_some(lam)
    };
    let (mel, mp) = (yield_at(0.0), fb.block(0.0).map(|b| b.0));
    let solid: Vec<usize> = sec.q.iter().filter(|q| !m.parts[q.i].hole).map(|q| q.mat).collect();
    let m0 = &m.mats[solid[0]];
    let zp = match mp {
        None => Err("the σ0.2 stress block has no neutral axis without a cross moment"),
        Some(v) if solid.iter().all(|k| *k == solid[0]) && m0.c.s == m0.t.s => Ok(v / m0.t.s),
        _ if solid.iter().any(|k| *k != solid[0]) => Err("mixed materials: M_p is given instead"),
        _ => Err("σ0.2 differs in tension and compression: M_p is given instead"),
    };
    let sf = mp.zip(mel.filter(|v| *v != 0.0)).map(|(a, b)| a / b);
    let (meln, mpn) = if nv == 0.0 { (None, None) } else { (yield_at(nv), fb.block(nv).map(|b| b.0)) };
    Ok(Pl { n: nv, alpha, curve, lim: last, mel, mp, zp, sf, meln, mpn })
}
```

```rust
//| caption: The hand calculations and the figure.
/// A part worked by hand: its weight ±n, area, centroid, own second moments, offsets from the centroid, and its terms of the parallel-axis sums.
struct Hp { w: f64, a: f64, x: f64, y: f64, ix: f64, iy: f64, ixy: f64, dx: f64, dy: f64, t: [f64; 3] }
/// The composite chain: the parts, the sums of n_i A_i x_i and n_i A_i y_i, the properties in the order of KEYS (Q is not derived),
/// the mean and the radius of Mohr's circle, and the distances to the extreme fibres (top, bottom, right, left).
struct Hand { parts: Vec<Hp>, sx: f64, sy: f64, v: [f64; 19], avg: f64, r: f64, c: [f64; 4] }
impl Hand { fn g(&self, k: &str) -> f64 { self.v[key(k)] } }

/// The section by composite parts: each part's own moments from its exact boundary, then the sums by hand.
fn derive(sec: &Sec) -> Hand {
    let e = sec.p.ext;
    let size = (e[1] - e[0]).hypot(e[3] - e[2]);
    let mut parts: Vec<Hp> = sec.q.iter().map(|q| {
        let w0 = whole(&q.cs, 2, 2);
        let (a, x, y) = (w0[0][0], w0[1][0] / w0[0][0], w0[0][1] / w0[0][0]);
        let own = whole(&tf(&q.cs, 0.0, -x, -y), 3, 3);
        Hp { w: q.w, a, x: snap(x, size), y: snap(y, size), ix: own[0][2], iy: own[2][0], ixy: snap(own[1][1], own[0][2] + own[2][0]), dx: 0.0, dy: 0.0, t: [0.0; 3] }
    }).collect();
    let sum = |ps: &[Hp], f: &dyn Fn(&Hp) -> f64| ps.iter().map(f).sum::<f64>();
    let (a, sx, sy) = (sum(&parts, &|q| q.w * q.a), sum(&parts, &|q| q.w * q.a * q.x), sum(&parts, &|q| q.w * q.a * q.y));
    let (cx, cy) = (snap(sx / a, size), snap(sy / a, size));
    for q in &mut parts {
        (q.dx, q.dy) = (snap(q.x - cx, size), snap(q.y - cy, size));
        q.t = [q.w * (q.ix + q.a * (q.dy * q.dy)), q.w * (q.iy + q.a * (q.dx * q.dx)), q.w * (q.ixy + q.a * q.dx * q.dy)];
    }
    let (ix, iy) = (sum(&parts, &|q| q.t[0]), sum(&parts, &|q| q.t[1]));
    let ixy = snap(sum(&parts, &|q| q.t[2]), ix + iy);
    let (avg, r) = ((ix + iy) / 2.0, ((ix - iy) / 2.0).hypot(ixy));
    let th = principal(ix, iy, ixy, ixy == 0.0);
    let c = [e[3] - cy, cy - e[2], e[1] - cx, cx - e[0]];
    let v = [a, cx, cy, ix, iy, ixy, avg + r, avg - r, th * 180.0 / PI, ix / c[0], ix / c[1], iy / c[2], iy / c[3], (ix / a).sqrt(), (iy / a).sqrt(), ix + iy, ((ix + iy) / a).sqrt(), f64::NAN, f64::NAN];
    Hand { parts, sx, sy, v, avg, r, c }
}

/// TeX with each # replaced by the next value.
fn fill(t: &str, v: &[String]) -> String { t.split('#').enumerate().map(|(i, p)| if i == 0 { p.to_string() } else { format!("{}{p}", v[i - 1]) }).collect() }
/// A number in TeX: 2.59474 \times 10^{7}.
fn tx(v: f64, d: usize) -> String { let f = fmt(v, d).replace('−', "-"); f.split_once('e').map_or(f.clone(), |(m, e)| format!("{m} \\times 10^{{{e}}}")) }
fn t6(v: f64) -> String { tx(v, 6) }
/// A number in brackets when it is negative, for a product or a power.
fn tp(v: f64) -> String { if v < 0.0 { format!("({})", t6(v)) } else { t6(v) } }
fn tq(v: f64, unit: &str) -> String { format!("{}\\ \\text{{{unit}}}", t6(v)) }
/// Terms as one sum: a + b - c.
fn sum_of(t: &[String]) -> String { t.iter().enumerate().map(|(i, s)| match (i, s.strip_prefix('-')) { (0, _) => s.clone(), (_, Some(r)) => format!(" - {r}"), _ => format!(" + {s}") }).collect() }
fn eq(t: &str) -> String { mathml(t, true) }

/// A part's own second moments in closed form, when its shape has one: what it is, the TeX of each step with the boundary integrals
/// as the results, and the closed-form I_x,i and I_y,i.
fn closed(p: &Part, ix: f64, iy: f64) -> Option<(&'static str, Vec<String>, [f64; 2])> {
    let (d, sharp) = (&p.d, p.r.iter().all(|r| *r == 0.0));
    let (b, h) = (d[0], *d.get(1).unwrap_or(&d[0]));
    let (b, h) = if p.turn { (h, b) } else { (b, h) };
    let i4 = |v: f64| format!("{}\\ \\text{{mm}}^4", t6(v));
    match SHAPES[p.shape].0 {
        "rect" if sharp => Some(("a sharp rectangle", vec![fill("I_{x,i} = \\frac{b h^3}{12} = \\frac{# \\times #^3}{12} = #", &[t6(b), t6(h), i4(ix)]), fill("I_{y,i} = \\frac{h b^3}{12} = \\frac{# \\times #^3}{12} = #", &[t6(h), t6(b), i4(iy)])], [b * h * h * h / 12.0, h * b * b * b / 12.0])),
        "circle" => Some(("a circle", vec![fill("I_{x,i} = I_{y,i} = \\frac{\\pi d^4}{64} = \\frac{\\pi \\times #^4}{64} = #", &[t6(d[0]), i4(ix)])], [PI * p4(d[0]) / 64.0; 2])),
        "chs" => { let di = d[0] - 2.0 * d[1]; Some(("a circular hollow, d_i = d − 2t", vec![fill("I_{x,i} = I_{y,i} = \\frac{\\pi (d^4 - d_i^4)}{64} = \\frac{\\pi (#^4 - #^4)}{64} = #", &[t6(d[0]), t6(di), i4(ix)])], [PI * (p4(d[0]) - p4(di)) / 64.0; 2])) }
        "rhs" if sharp => {
            let (bi, hi) = (b - 2.0 * d[2], h - 2.0 * d[2]);
            Some(("a sharp rectangular hollow, b_i = b − 2t, h_i = h − 2t", vec![
                fill("I_{x,i} = \\frac{b h^3 - b_i h_i^3}{12} = \\frac{# \\times #^3 - # \\times #^3}{12} = #", &[t6(b), t6(h), t6(bi), t6(hi), i4(ix)]),
                fill("I_{y,i} = \\frac{h b^3 - h_i b_i^3}{12} = \\frac{# \\times #^3 - # \\times #^3}{12} = #", &[t6(h), t6(b), t6(hi), t6(bi), i4(iy)])],
                [(b * h * h * h - bi * hi * hi * hi) / 12.0, (h * b * b * b - hi * bi * bi * bi) / 12.0]))
        }
        _ => None,
    }
}

/// The hand calculations as the page's outputs: for each step its formula, its numbers and its result.
fn by_hand(sec: &Sec, pl: &Result<Pl, String>) {
    let (p, d, m) = (&sec.p, derive(sec), &sec.m);
    let (ps, many) = (&d.parts, d.parts.len() > 12);
    let name = |i: usize| { let q = &sec.q[i]; if m.parts[q.i].hole { format!("{} (hole in {})", m.parts[q.i].id, m.parts[q.host].id) } else { m.parts[q.i].id.clone() } };
    let terms = |f: &dyn Fn(&Hp) -> String| if many { String::new() } else { format!(" = {}", sum_of(&ps.iter().map(f).collect::<Vec<_>>())) };
    let h3 = |t: &str| html(&format!("<h3>{}</h3>", esc(t)));
    let para = |t: &str| html(&format!("<p>{}</p>", esc(t)));
    h3("Parts and modular ratios");
    para(&format!("Each part counts n_i = E_i / E_base times, with E_base = {} MPa; a hole counts −n_i of the part that it is cut from. A_i is the part's own area and (x_i, y_i) its centroid.", fmt(m.e_base, 6)));
    let mut mats: Vec<usize> = sec.q.iter().filter(|q| !m.parts[q.i].hole).map(|q| q.mat).collect();
    mats.sort();
    mats.dedup();
    if sec.q.iter().any(|q| q.n != 1.0) {
        for k in mats { let x = &m.mats[k]; html(&eq(&fill("n_{\\text{#}} = \\frac{#}{#} = #", &[x.id.chars().filter(|c| c.is_ascii_alphanumeric()).collect(), t6(x.t.e), t6(m.e_base), tx(x.t.e / m.e_base, 4)]))) }
    }
    table(&["Part", "n_i", "A_i (mm²)", "x_i (mm)", "y_i (mm)"], &ps.iter().enumerate().map(|(i, q)| vec![name(i), fmt(q.w, 4), fmt(q.a, 6), fmt(q.x, 6), fmt(q.y, 6)]).collect::<Vec<_>>());
    h3("Area");
    let nt = |q: &Hp| if q.w == 1.0 { String::new() } else { format!("{} \\times ", tp(q.w)) };
    html(&eq(&format!("A = \\sum n_i A_i{} = {}", terms(&|q| format!("{}{}", nt(q), t6(q.a))), tq(p.g("A"), "mm}^{2"))));
    h3("Centroid");
    table(&["Part", "n_i A_i (mm²)", "n_i A_i x_i (mm³)", "n_i A_i y_i (mm³)"], &ps.iter().enumerate().map(|(i, q)| vec![name(i), fmt(q.w * q.a, 6), fmt(q.w * q.a * q.x, 6), fmt(q.w * q.a * q.y, 6)]).collect::<Vec<_>>());
    for (c, s, k, f) in [("x", d.sx, "cx", &(|q: &Hp| q.w * q.a * q.x) as &dyn Fn(&Hp) -> f64), ("y", d.sy, "cy", &|q: &Hp| q.w * q.a * q.y)] {
        let top = if many { t6(s) } else { sum_of(&ps.iter().map(|q| t6(f(q))).collect::<Vec<_>>()) };
        html(&eq(&fill("#_c = \\frac{\\sum n_i A_i #_i}{A} = \\frac{#}{#} = #", &[c.into(), c.into(), top, t6(p.g("A")), tq(p.g(k), "mm")])));
    }
    h3("Each part's second moments about its own centroid");
    let shut: Vec<_> = ps.iter().zip(&sec.q).map(|(q, a)| closed(&m.parts[a.i], q.ix, q.iy)).collect();
    for (i, c) in shut.iter().enumerate() {
        if let Some((what, lines, _)) = c { para(&format!("{}, {what}, about its own centroid:", name(i))); lines.iter().for_each(|l| html(&eq(l))) }
    }
    let n_closed = shut.iter().flatten().count();
    para(if n_closed == ps.len() { "Every part's values are the closed forms above." } else { "The parts without a closed form above are integrated over their exact boundary of lines and circular arcs, by Green's theorem, as the solver does: fillets and rounded corners have no short closed form." });
    table(&["Part", "I_x,i (mm^4)", "I_y,i (mm^4)", "I_xy,i (mm^4)"], &ps.iter().enumerate().map(|(i, q)| vec![name(i), fmt(q.ix, 6), fmt(q.iy, 6), fmt(q.ixy, 6)]).collect::<Vec<_>>());
    h3("Parallel-axis theorem");
    para("Each part's own values move to the section's centroid with d_x,i = x_i − x_c and d_y,i = y_i − y_c.");
    table(&["Part", "d_x,i (mm)", "d_y,i (mm)", "n_i (I_x,i + A_i d_y,i²)", "n_i (I_y,i + A_i d_x,i²)", "n_i (I_xy,i + A_i d_x,i d_y,i)"], &ps.iter().enumerate().map(|(i, q)| vec![name(i), fmt(q.dx, 6), fmt(q.dy, 6), fmt(q.t[0], 6), fmt(q.t[1], 6), fmt(q.t[2], 6)]).collect::<Vec<_>>());
    for (k, (s, own, dd)) in [("I_x", "I_{x,i}", "A_i d_{y,i}^2"), ("I_y", "I_{y,i}", "A_i d_{x,i}^2"), ("I_{xy}", "I_{xy,i}", "A_i d_{x,i} d_{y,i}")].into_iter().enumerate() {
        html(&eq(&format!("{s} = \\sum n_i \\left({own} + {dd}\\right){} = {}", terms(&|q| t6(q.t[k])), tq(p.v[3 + k], "mm}^{4"))));
    }
    h3("Principal axes");
    let (ix, iy, ixy) = (p.g("Ix"), p.g("Iy"), p.g("Ixy"));
    html(&eq(&fill("I_{1,2} = \\frac{I_x + I_y}{2} \\pm \\sqrt{\\left(\\frac{I_x - I_y}{2}\\right)^2 + I_{xy}^2} = \\frac{# + #}{2} \\pm \\sqrt{\\left(\\frac{# - #}{2}\\right)^2 + #^2} = # \\pm #", &[t6(ix), t6(iy), t6(ix), tp(iy), tp(ixy), t6(d.avg), t6(d.r)])));
    html(&eq(&format!("I_1 = {}, \\quad I_2 = {}", tq(p.g("I1"), "mm}^{4"), tq(p.g("I2"), "mm}^{4"))));
    if ixy == 0.0 { para(&format!("I_xy = 0, so the x and y axes are principal: the major axis 1 is the {} axis, θ = {}°.", if ix >= iy { "x" } else { "y" }, fmt(p.g("thetaDeg"), 6))) }
    else { html(&eq(&fill("\\theta = \\frac{1}{2} \\mathrm{atan2}\\left(-2 I_{xy}, I_x - I_y\\right) = \\frac{1}{2} \\mathrm{atan2}\\left(#, #\\right) = #^\\circ", &[t6(-2.0 * ixy), t6(ix - iy), t6(p.g("thetaDeg"))]))) }
    para("θ is measured counter-clockwise from the x axis to the major axis 1.");
    h3("Section moduli");
    let e = p.ext;
    para(&format!("The extreme fibres are at y = {} mm and {} mm, and at x = {} mm and {} mm, so from the centroid c_top = {} mm, c_bottom = {} mm, c_right = {} mm and c_left = {} mm.", fmt(e[3], 6), fmt(e[2], 6), fmt(e[1], 6), fmt(e[0], 6), fmt(d.c[0], 6), fmt(d.c[1], 6), fmt(d.c[2], 6), fmt(d.c[3], 6)));
    for (i, (s, ii, c)) in [("S_{x+}", "I_x", "c_{top}"), ("S_{x-}", "I_x", "c_{bottom}"), ("S_{y+}", "I_y", "c_{right}"), ("S_{y-}", "I_y", "c_{left}")].into_iter().enumerate() {
        html(&eq(&fill("# = \\frac{#}{#} = \\frac{#}{#} = #", &[s.into(), ii.into(), c.into(), t6(if i < 2 { ix } else { iy }), t6(d.c[i]), tq(p.v[9 + i], "mm}^{3")])));
    }
    h3("Radii of gyration and the polar moment");
    let a = p.g("A");
    html(&eq(&fill("r_x = \\sqrt{\\frac{I_x}{A}} = \\sqrt{\\frac{#}{#}} = #", &[t6(ix), t6(a), tq(p.g("rx"), "mm")])));
    html(&eq(&fill("r_y = \\sqrt{\\frac{I_y}{A}} = \\sqrt{\\frac{#}{#}} = #", &[t6(iy), t6(a), tq(p.g("ry"), "mm")])));
    html(&eq(&fill("I_p = I_x + I_y = # + # = #", &[t6(ix), t6(iy), tq(p.g("Ip"), "mm}^{4")])));
    html(&eq(&fill("r_p = \\sqrt{\\frac{I_p}{A}} = \\sqrt{\\frac{#}{#}} = #", &[t6(p.g("Ip")), t6(a), tq(p.g("rp"), "mm")])));
    para(&format!("The first moments Q_x = {} mm³ and Q_y = {} mm³, of the area on one side of each centroidal axis, come from the solver, which integrates each part cut at the axis along its exact boundary.", fmt(p.g("Qx"), 6), fmt(p.g("Qy"), 6)));
    h3("Torsion constant");
    match torsion(m) {
        Err(e) => para(&format!("No torsion constant here. {e} The notebook gives J only from a closed-form formula whose accuracy has been measured against a numerical Prandtl solution.")),
        Ok((t, a)) => {
            let (pt, dd) = (&m.parts[0], &m.parts[0].d);
            para(&format!("{}: {}.", if t.method == "exact" { "Exact solution" } else { t.method }, t.text));
            let j = tq(t.j, "mm}^{4");
            match t.id {
                "circle" => html(&eq(&fill("J = \\frac{\\pi d^4}{32} = \\frac{\\pi \\times #^4}{32} = #", &[t6(dd[0]), j]))),
                "chs" => html(&eq(&fill("J = \\frac{\\pi (d^4 - d_i^4)}{32} = \\frac{\\pi (#^4 - #^4)}{32} = #, \\quad d_i = d - 2t", &[t6(dd[0]), t6(dd[0] - 2.0 * dd[1]), j]))),
                "semicircle" => html(&eq(&fill("J = \\left(\\frac{\\pi}{2} - \\frac{4}{\\pi}\\right) r^4 = \\left(\\frac{\\pi}{2} - \\frac{4}{\\pi}\\right) \\times #^4 = #", &[t6(dd[0] / 2.0), j]))),
                "triangle-equilateral" => html(&eq(&fill("J = \\frac{\\sqrt{3} b^4}{80} = \\frac{\\sqrt{3} \\times #^4}{80} = #", &[t6(dd[0]), j]))),
                "rect" => {
                    let (b, h, first, s) = series(dd[0], dd[1]);
                    html(&eq(&fill("S = \\sum_{n = 1, 3, 5, \\ldots} \\frac{\\tanh(n \\pi b / 2h)}{n^5} = \\tanh\\left(\\frac{\\pi \\times #}{2 \\times #}\\right) + \\ldots = # + \\ldots = #", &[t6(b), t6(h), tx(first, 8), tx(s, 8)])));
                    html(&eq(&fill("J = \\frac{b h^3}{3}\\left[1 - \\frac{192}{\\pi^5} \\frac{h}{b} S\\right] = \\frac{# \\times #^3}{3}\\left[1 - \\frac{192}{\\pi^5} \\times \\frac{#}{#} \\times #\\right] = #", &[t6(b), t6(h), t6(h), t6(b), tx(s, 8), j])));
                }
                "open-thin-wall" => {
                    let w = walls(SHAPES[pt.shape].0, dd);
                    table(&["Wall", "L (mm)", "t (mm)", "L t³ / 3 (mm^4)"], &w.iter().map(|x| vec![x.0.to_string(), fmt(x.1, 6), fmt(x.2, 6), fmt(x.1 * x.2 * x.2 * x.2 / 3.0, 6)]).collect::<Vec<_>>());
                    html(&eq(&format!("J = \\frac{{1}}{{3}} \\sum L t^3 = {} = {j}", sum_of(&w.iter().map(|x| t6(x.1 * x.2 * x.2 * x.2 / 3.0)).collect::<Vec<_>>()))));
                }
                "cold-formed-thin-wall" => {
                    let (l, k) = developed(SHAPES[pt.shape].0, dd);
                    let (tt, ri) = (dd[dd.len() - 2], dd[dd.len() - 1]);
                    let cut = (2.0 - PI / 2.0) * (ri + tt / 2.0);
                    html(&eq(&fill("r_m = r_i + \\frac{t}{2} = # + \\frac{#}{2} = #", &[t6(ri), t6(tt), tq(ri + tt / 2.0, "mm")])));
                    html(&eq(&fill("L = L_{sharp} - k \\left(2 - \\frac{\\pi}{2}\\right) r_m = # - # \\times # = #", &[t6(l + k * cut), t6(k), t6(cut), tq(l, "mm")])));
                    para(&format!("L_sharp is the mid-line length with sharp corners, and k = {k} is the number of 90° bends: the arc of each bend replaces two tangent lengths."));
                    html(&eq(&fill("J = \\frac{L t^3}{3} = \\frac{# \\times #^3}{3} = #", &[t6(l), t6(tt), j])));
                }
                _ => {
                    let rm = box_midline(dd, &pt.r).unwrap_or_default();
                    let (bm, hm, tt) = (dd[0] - dd[2], dd[1] - dd[2], dd[2]);
                    let (ca, cp) = (rm.iter().map(|r| (1.0 - PI / 4.0) * r * r).sum::<f64>(), rm.iter().map(|r| (2.0 - PI / 2.0) * r).sum::<f64>());
                    let (am, pm, round) = (bm * hm - ca, 2.0 * (bm + hm) - cp, rm.iter().any(|r| *r > 0.0));
                    para(&format!("On the wall's mid-line: b_m = b − t = {} mm, h_m = h − t = {} mm{}.", fmt(bm, 6), fmt(hm, 6), if round { format!(", and the corners' mid-line radii r_m = {} mm", rm.iter().map(|r| fmt(*r, 6)).collect::<Vec<_>>().join(", ")) } else { String::new() }));
                    if round {
                        html(&eq(&fill("A_m = b_m h_m - \\sum \\left(1 - \\frac{\\pi}{4}\\right) r_m^2 = # \\times # - # = #", &[t6(bm), t6(hm), t6(ca), tq(am, "mm}^{2")])));
                        html(&eq(&fill("p_m = 2 (b_m + h_m) - \\sum \\left(2 - \\frac{\\pi}{2}\\right) r_m = 2 \\times (# + #) - # = #", &[t6(bm), t6(hm), t6(cp), tq(pm, "mm")])));
                    } else {
                        html(&eq(&fill("A_m = b_m h_m = # \\times # = #", &[t6(bm), t6(hm), tq(am, "mm}^{2")])));
                        html(&eq(&fill("p_m = 2 (b_m + h_m) = 2 \\times (# + #) = #", &[t6(bm), t6(hm), tq(pm, "mm")])));
                    }
                    html(&eq(&fill("J = \\frac{4 A_m^2 t}{p_m} = \\frac{4 \\times #^2 \\times #}{#} = #", &[t6(am), t6(tt), t6(pm), j])));
                }
            }
            para(&format!("Stated accuracy against the numerical Prandtl reference: within {}; largest error measured {}.", pct(fv(&a["stated"])), pct(fv(&a["measured"]))));
        }
    }
    h3("Plastic modulus and shape factor");
    match pl {
        Err(e) => para(&format!("The fibre solver could not complete the moment–curvature analysis: {e}")),
        Ok(r) => {
            let na = |v: Option<f64>| v.map_or("n/a".into(), |v| format!("{} N·mm", fmt(v, 6)));
            para(&format!("M_el, M_p and the moment–curvature curve come from the fibre solver: Ramberg–Osgood stresses integrated over strips through every part, with the neutral axis found by iteration. They are quoted here, not derived by hand: the first-yield moment at N = 0 is M_el = {}, the fully plastic moment at N = 0 is M_p = {}, and the allowable moment at ε_lim is M_lim = {} N·mm.", na(r.mel), na(r.mp), fmt(r.lim.m, 6)));
            match (&r.zp, r.mp) {
                (Ok(z), Some(mp)) => html(&eq(&fill("Z_p = \\frac{M_p}{\\sigma_{0.2}} = \\frac{#}{#} = #", &[t6(mp), t6(mp / z), tq(*z, "mm}^{3")]))),
                (z, _) => para(&format!("Z_p: n/a ({}).", z.as_ref().err().copied().unwrap_or("no M_p"))),
            }
            if let (Some(sf), Some(mp), Some(mel)) = (r.sf, r.mp, r.mel) { html(&eq(&fill("\\text{shape factor} = \\frac{M_p}{M_{el}} = \\frac{#}{#} = #", &[t6(mp), t6(mel), tx(sf, 4)]))) }
        }
    }
}

/// The section to scale on the 640 by 400 canvas of a plot: each part's outline in its material's colour (holes dashed),
/// the centroid, axis 1 (solid) and axis 2 (dashed), and the key.
fn figure(sec: &Sec) -> String {
    let e = sec.p.ext;
    let k = (560.0 / (e[1] - e[0])).min(300.0 / (e[3] - e[2]));
    let (ox, oy) = (320.0 - k * (e[0] + e[1]) / 2.0, 180.0 + k * (e[2] + e[3]) / 2.0);
    let map = |p: [f64; 2]| [ox + k * p[0], oy - k * p[1]];
    let path = |class: String, pts: &[[f64; 2]]| format!("<path class=\"{class}\" d=\"M{}\"/>", pts.iter().map(|p| format!("{:.1} {:.1}", p[0], p[1])).collect::<Vec<_>>().join("L"));
    let mut s = String::from("<svg class=\"plot\" viewBox=\"0 0 640 400\" role=\"img\">");
    for q in &sec.q {
        let class = if sec.m.parts[q.i].hole { "rl".into() } else { format!("l{}", q.mat % 3) };
        for c in &q.cs { let mut pts: Vec<[f64; 2]> = polygonize(c, 0.3 / k).into_iter().map(map).collect(); pts.push(pts[0]); s += &path(class.clone(), &pts) }
    }
    let [px, py] = map([sec.p.g("cx"), sec.p.g("cy")]);
    // An axis through the centroid, clipped to the drawing.
    let axis = |th: f64, class: &str| {
        let (dx, dy) = (th.cos(), -th.sin());
        let (mut lo, mut hi) = (-INF, INF);
        for (p, d, a, b) in [(px, dx, 16.0, 624.0), (py, dy, 8.0, 352.0)] { if d.abs() > 1e-12 { let (t0, t1) = ((a - p) / d, (b - p) / d); (lo, hi) = (lo.max(t0.min(t1)), hi.min(t0.max(t1))) } }
        format!("<line class=\"{class}\" x1=\"{:.1}\" y1=\"{:.1}\" x2=\"{:.1}\" y2=\"{:.1}\"/>", px + lo * dx, py + lo * dy, px + hi * dx, py + hi * dy)
    };
    s += &axis(sec.p.th, "l1");
    s += &axis(sec.p.th + PI / 2.0, "rl");
    s += &format!("<circle class=\"d1\" cx=\"{px:.1}\" cy=\"{py:.1}\" r=\"5\"/>");
    let mut x = 16.0;
    let mut used: Vec<usize> = sec.q.iter().filter(|q| !sec.m.parts[q.i].hole).map(|q| q.mat).collect();
    used.sort();
    used.dedup();
    for (cls, name) in used.iter().map(|&i| (format!("l{}", i % 3), sec.m.mats[i].id.clone())).chain(sec.q.iter().any(|q| sec.m.parts[q.i].hole).then(|| ("rl".into(), "hole".into()))) {
        s += &path(cls, &[[x, 366.0], [x + 20.0, 366.0]]);
        s += &format!("<text class=\"ax\" x=\"{:.1}\" y=\"371\">{}</text>", x + 26.0, esc(&name));
        x += 40.0 + 8.0 * name.chars().count() as f64;
    }
    s + &format!("<text class=\"ax\" x=\"16\" y=\"394\">Width {} mm, height {} mm. The dot is the centroid; axis 1 solid, axis 2 dashed.</text></svg>", fmt(e[1] - e[0], 4), fmt(e[3] - e[2], 4))
}
```
