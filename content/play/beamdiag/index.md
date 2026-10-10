---
title: Beam diagram
summary: Build a straight beam with pinned and fixed supports, forces, couples and distributed loads. Read its reactions, shear force, bending moment and deflection, the same answer by hand, and a NASTRAN deck.
thumb: 4136
theme: site
seed: 20261011
---

The first chapter is the Beam diagram creator. Drag the supports and the loads, or type them, and read the reactions, the shear force, the bending moment and the deflection at once. The creator also shows the hand calculations, and saves the figure, a Nastran deck and the hand calculations as files. The chapters after it are the notebook: they solve the same beams in cells that you can read and change. Statically indeterminate beams, for example fixed–fixed spans and continuous beams, are solved by the stiffness method in both.

<!-- skill: This notebook ports visuals/viz/beamdiag. The presets, materials, sign conventions, assumptions and NASTRAN notes come only through data!, from the files pinned in visuals.lock. The checks in "The code" solve the 23 fixture beams of visuals and compare them with the outputs of its exact Python solver (reference.json): keep the tolerance of 1e-9 of the largest value of each quantity. -->

<!-- skill: The first chapter embeds the sealed page viz/beamdiag/index.html of visuals, pinned in visuals.lock. Its WebMCP tools (get_metadata, get_current_beam, solve_beam, export_nastran_bdf) are in that page; the notebook cells below do not depend on it. -->

<!-- skill: To set the beam, write the text boxes: supports as "pin 0, fixed 6000"; loads as "F -20000 at 3000" (a force), "C 15000000 at 5500" (a couple), "q -10 from 0 to 6000" (a uniform load) or "q -10 to -5 from 0 to 6000" (a linear load), joined by commas. Every number is in the units that the Units choice gives. Forces and loads are + up, couples + counter-clockwise. An empty box keeps the example's part. -->

```toml
serde_json = "=1.0.151"
```

## The beam diagram creator

The creator is a sealed page from yujieteo/visuals. Its solver is Rust, compiled to WebAssembly, and it runs in your browser. Drag a support or a load along the beam, or focus it and use the arrow keys. To type exact values, use the Supports and Loads tables.

![Beam diagram creator](viz/beamdiag/index.html)

## The beam

The beam is straight and runs from x = 0 at its left end to x = L. A pin stops the beam from moving up or down. A fixed support also stops it from turning. Forces and distributed loads are positive up, so a downward load is negative. Couples are positive counter-clockwise.

```rust
//| caption: The example to start from, and the units of every number on this page.
let example = &list("presets")[choice("Example", &labels("presets"), 0)];
let unit = &UNITS[choice("Units", &UNITS.iter().map(|u| u.name).collect::<Vec<_>>(), 0)];
```

Leave a box empty to keep that part of the example. If you type only a length, the example's supports and loads stretch with it. Under the next cell, the notebook writes the beam in the words that the boxes take, so you can copy a part and change it.

```rust
//| caption: The length, the supports and the loads.
let length_box = field(&format!("Length L ({})", unit.len), "");
let supports_box = field("Supports", "");
let loads_box = field(&format!("Loads ({0}, {0}·{1}, {0}/{1})", unit.force, unit.len), "");
```

```rust
//| caption: The section and the material. An empty box keeps the example's dimensions, or the material's E and ν.
let shape = choice("Section", &SHAPES.map(|s| s.1), SHAPES.iter().position(|s| example["section"]["shape"] == s.0).unwrap_or(0));
let dims_box = field(&dims_label(shape, unit), "");
let material = choice("Material", &labels("materials"), list("materials").iter().position(|m| m["id"] == example["material"]).unwrap_or(0));
let elastic_box = field(&format!("E ({}) and ν", unit.stress), "");
```

```rust
//| caption: The beam that the boxes give, and its reactions.
let model = make_beam(example, unit, [length_box.as_str(), supports_box.as_str(), loads_box.as_str(), dims_box.as_str(), elastic_box.as_str()], shape, material).and_then(solve);
match &model {
    Err(e) => println!("This beam has no solution: {e}"),
    Ok(m) => {
        println!("Supports: {}\nLoads: {}", supports_text(&m.b.supports), loads_text(&m.b.loads));
        let [a, i, c, ..] = m.b.sec;
        println!("A = {} {}², I = {} {}^4, c = {} {}, E = {} {}, EI = {} {}·{}²", sig(a), unit.len, sig(i), unit.len, sig(c), unit.len, sig(m.b.e), unit.stress, sig(m.ei()), unit.force, unit.len);
        html(&sketch(m, unit));
    }
}
```

## Reactions

A beam in a plane has 2 equations of equilibrium: the forces sum to zero, and the moments sum to zero. A pin gives 1 unknown reaction and a fixed support gives 2. With 2 unknowns the beam is statically determinate. Each further unknown needs one condition of compatibility: the beam does not move at a support, and it does not turn at a fixed support.

```rust
//| caption: The support reactions: forces + up, couples + counter-clockwise.
if let Ok(m) = &model {
    let unknowns = m.b.supports.iter().map(|s| 1 + s.0 as usize).sum::<usize>();
    if unknowns == 2 { println!("2 unknown reactions: the beam is statically determinate.") }
    else { println!("{unknowns} unknown reactions: the beam is statically indeterminate to degree {}.", unknowns - 2) }
    let rows: Vec<Vec<String>> = m.b.supports.iter().zip(&m.r).enumerate().map(|(k, (s, r))| vec![
        format!("{} {}", if s.0 { "Fixed" } else { "Pin" }, k + 1), fix(s.1, 6), sig(clean(r.0, m.scale(-1))), if s.0 { sig(clean(r.1, m.scale(0))) } else { String::new() }]).collect();
    table(&["Support", &format!("x ({})", unit.len), &format!("R ({})", unit.force), &format!("M ({}·{})", unit.force, unit.len)], &rows);
    println!("Check: just past the right end, V = {} {} and M = {} {}·{}.", sig(clean(m.shear(m.b.l, true), m.scale(-1))), unit.force, sig(clean(m.moment(m.b.l, true), m.scale(0))), unit.force, unit.len);
}
```

## Shear, moment and deflection

The shear force V at a section is the sum of the upward forces to its left. The bending moment M is positive when it sags the beam. Then $dM/dx = V$ and $dV/dx = q$. At a point force, V jumps by the force. At a couple C, M jumps by −C. The slope θ and the deflection v come from $EI \frac{d^2 v}{dx^2} = M$. Move x to read one section; its point shows on each diagram.

```rust
//| caption: The section to read.
let _l = model.as_ref().map_or(1.0, |m| m.b.l);
let at_x = slider(&format!("x ({})", unit.len), 0.0, _l, _l / 200.0, _l / 2.0);
if let Ok(m) = &model {
    let (vl, vr, ml, mr) = (m.shear(at_x, false), m.shear(at_x, true), m.moment(at_x, false), m.moment(at_x, true));
    let both = |a: f64, b: f64, s: f64| if clean(a - b, s) == 0.0 { sig(clean(b, s)) } else { format!("{} just left, {} just right", sig(clean(a, s)), sig(clean(b, s))) };
    println!("At x = {} {}:", fix(at_x, 6), unit.len);
    println!("V = {} {}\nM = {} {}·{}", both(vl, vr, m.scale(-1)), unit.force, both(ml, mr, m.scale(0)), unit.force, unit.len);
    println!("θ = {} rad\nv = {} {}", sig(clean(m.slope(at_x), m.scale(1))), sig(clean(m.deflection(at_x), m.scale(2))), unit.len);
    println!("σ = M c / I = {} {} at the bottom fibre (+ is tension)", both(ml * m.b.sec[2] / m.b.sec[1], mr * m.b.sec[2] / m.b.sec[1], m.scale(0) * m.b.sec[2] / m.b.sec[1]), unit.stress);
}
```

```rust
//| caption: Shear force V(x).
if let Ok(m) = &model {
    let (x, y) = m.curve(|x, right| m.shear(x, right));
    diagram(&x, &y, 0, (at_x, m.shear(at_x, true)), &format!("x ({})", unit.len), &format!("V ({})", unit.force));
}
```

```rust
//| caption: Bending moment M(x), + sagging.
if let Ok(m) = &model {
    let (x, y) = m.curve(|x, right| m.moment(x, right));
    diagram(&x, &y, 1, (at_x, m.moment(at_x, true)), &format!("x ({})", unit.len), &format!("M ({}·{})", unit.force, unit.len));
}
```

```rust
//| caption: Deflection v(x), + up.
if let Ok(m) = &model {
    let (x, y) = m.curve(|x, _| m.deflection(x));
    diagram(&x, &y, 2, (at_x, m.deflection(at_x)), &format!("x ({})", unit.len), &format!("v ({})", unit.len));
}
```

```rust
//| caption: The largest values along the beam.
if let Ok(m) = &model {
    let most = |f: &dyn Fn(f64, bool) -> f64| m.places().iter().flat_map(|&x| [(x, f(x, false)), (x, f(x, true))]).fold((0.0_f64, 0.0_f64), |a, b| if b.1.abs() > a.1.abs() { b } else { a });
    let (mm, stress) = (format!("{}·{}", unit.force, unit.len), m.b.sec[2] / m.b.sec[1]);
    let rows: Vec<Vec<String>> = [
        ("Shear force V", most(&|x, r| m.shear(x, r)), unit.force, m.scale(-1)),
        ("Sagging moment M", most(&|x, r| m.moment(x, r).max(0.0)), mm.as_str(), m.scale(0)),
        ("Hogging moment M", most(&|x, r| m.moment(x, r).min(0.0)), mm.as_str(), m.scale(0)),
        ("Bending stress M c / I", most(&|x, r| m.moment(x, r) * stress), unit.stress, m.scale(0) * stress),
        ("Slope θ", most(&|x, _| m.slope(x)), "rad", m.scale(1)),
        ("Deflection v", most(&|x, _| m.deflection(x)), unit.len, m.scale(2)),
    ].into_iter().map(|(n, (x, v), u, s)| {
        let v = clean(v, s);
        vec![n.to_string(), format!("{} {u}", sig(v)), if v == 0.0 { "–".into() } else { fix(x, 6) }]
    }).collect();
    table(&["Quantity", "Largest", &format!("at x ({})", unit.len)], &rows);
}
```

## Values at supports and loads

Where a point force or a couple acts, a diagram jumps. The table gives the values just to the left and just to the right of each support and load.

```rust
//| caption: V, M, θ and v at each end, support and load.
if let Ok(m) = &model {
    let (fs, ms) = (m.scale(-1), m.scale(0));
    let rows: Vec<Vec<String>> = events(&m.b, unit).iter().map(|(x, what)| vec![fix(*x, 6), what.clone(),
        sig(clean(m.shear(*x, false), fs)), sig(clean(m.shear(*x, true), fs)), sig(clean(m.moment(*x, false), ms)), sig(clean(m.moment(*x, true), ms)),
        sig(clean(m.slope(*x), m.scale(1))), sig(clean(m.deflection(*x), m.scale(2)))]).collect();
    let (f, mm) = (unit.force, format!("{}·{}", unit.force, unit.len));
    table(&[&format!("x ({})", unit.len), "Here", &format!("V left ({f})"), &format!("V right ({f})"), &format!("M left ({mm})"), &format!("M right ({mm})"), "θ (rad)", &format!("v ({})", unit.len)], &rows);
}
```

## By hand

Macaulay's method writes the bending moment of the whole beam as one expression. The bracket $\langle x - a \rangle^n$, written <x − a>^n below, is $(x - a)^n$ when $x > a$ and zero before. Each reaction is an unknown in the expression. Integrate $EI \frac{d^2 v}{dx^2} = M$ twice, which adds the constants $C_1$ and $C_2$. Then the conditions fix every unknown: the shear and the moment are zero just past the right end (equilibrium), $v = 0$ at each support and $\theta = 0$ at each fixed support (compatibility). The stiffness solver gives the same numbers, and the equations below hold for them.

```rust
//| caption: The beam by Macaulay's method, in the units of this page.
if let Ok(m) = &model { println!("{}", by_hand(m, unit)) }
```

## NASTRAN deck

The deck is an MSC Nastran SOL 101 linear static bulk data file (`.bdf`) for this beam, in the units of this page. It has a grid at each end, support and load, and the number of bars that you choose between each pair of neighbouring grids. A card group uses 16-character fields only when a value needs more than 8 characters to stay exact.

```rust
//| caption: The deck, and a link that saves it.
let divisions = slider("Bars between neighbouring grids", 1.0, 20.0, 1.0, 4.0) as usize;
match &model {
    Ok(m) if m.loaded() => {
        let text = deck(m, unit, divisions);
        html(&format!("<p><a download=\"beam.bdf\" href=\"data:text/plain;base64,{}\">Save beam.bdf</a></p>", engine::pack::base64(text.as_bytes())));
        println!("{text}");
    }
    Ok(_) => println!("Add a load that is not zero to make a deck."),
    Err(_) => println!("Fix the beam first."),
}
```

```rust
//| caption: How to run the deck, and what each card does.
html(&format!("<ol>{}</ol>", raw()["nastran"]["run"].as_array().unwrap().iter().map(|s| format!("<li>{}</li>", engine::doc::esc(s.as_str().unwrap()))).collect::<String>()));
table(&["Card", "Use"], &raw()["nastran"]["cards"].as_array().unwrap().iter().map(|c| vec![c["card"].as_str().unwrap(), c["use"].as_str().unwrap()]).collect::<Vec<_>>());
```

## Method and assumptions

The solver puts a node at each end and each support, and joins the nodes with two-node Euler–Bernoulli beam elements. Each load inside an element enters as its consistent nodal loads, which are the exact fixed-end actions, so the nodal deflections and the reactions are exact. The shear and the moment then come by statics from the loads and the reactions, and the slope and the deflection from the nodal values. The solver adds the integrals of $M/EI$ from the nearest node to the left. The checks at the end of this page compare 23 beams with an exact solver in Python.

```rust
//| caption: The assumptions of the model, and the NASTRAN references.
let _items: String = list("assumptions").iter().map(|s| format!("<li>{}</li>", engine::doc::esc(s.as_str().unwrap()))).collect();
html(&format!("<h3>Assumptions</h3><ul>{_items}</ul>"));
let _refs: String = list("sources").iter().filter(|s| s["id"] != "code").map(|s| format!("<li><a href=\"{}\">{}</a></li>", engine::doc::esc(s["url"].as_str().unwrap()), engine::doc::esc(s["title"].as_str().unwrap()))).collect();
html(&format!("<h3>Sources</h3><ul>{_refs}</ul>"));
```

# The code

The checks run at every build. They solve the 23 fixture beams of yujieteo/visuals, in SI, and compare each reaction and each value of V, M, θ and v with the outputs of its exact Python solver, then with the closed-form results of the textbook cases.

```rust
//| caption: The checks against the pinned fixtures.
let _cases: Value = serde_json::from_slice(data!("viz/beamdiag/fixtures.json"))?;
let _exact: Value = serde_json::from_slice(data!("viz/beamdiag/reference.json"))?;
let mut _count = 0;
for (c, r) in _cases["cases"].as_array().unwrap().iter().zip(_exact["cases"].as_array().unwrap()) {
    let (id, f) = (c["id"].as_str().unwrap(), |v: &Value| v.as_f64().unwrap());
    let d = &c["model"];
    let m = solve(Beam {
        l: f(&d["length"]), e: f(&d["material"]["E"]), nu: f(&d["material"]["nu"]), sec: [f(&d["section"]["A"]), f(&d["section"]["I"]), 1.0, 1.0, 1.0],
        supports: d["supports"].as_array().unwrap().iter().map(|s| (s["kind"] == "fixed", f(&s["x"]))).collect(),
        loads: d["loads"].as_array().unwrap().iter().map(|l| match l["kind"].as_str().unwrap() {
            "point" => Load::Force(f(&l["F"]), f(&l["x"])),
            "moment" => Load::Couple(f(&l["C"]), f(&l["x"])),
            _ => Load::Spread(f(&l["q1"]), f(&l["q2"]), f(&l["x1"]), f(&l["x2"])),
        }).collect(),
    })?;
    let value = |q: &str, x: f64| match q {
        "R" | "Mr" => m.b.supports.iter().position(|s| s.1 == x).map(|k| if q == "R" { m.r[k].0 } else { m.r[k].1 }).unwrap(),
        "Vleft" | "Vright" => m.shear(x, q == "Vright"),
        "M" => m.moment(x, x < m.b.l),
        "Mleft" | "Mright" => m.moment(x, q == "Mright"),
        "theta" => m.slope(x),
        _ => m.deflection(x),
    };
    let points = r["points"].as_array().unwrap();
    // A slope is checked to 1e-9 of its largest value, or of the largest deflection over the shortest span when every slope is zero.
    let mut _ends: Vec<f64> = m.b.supports.iter().map(|s| s.1).chain([0.0, m.b.l]).collect();
    _ends.sort_by(f64::total_cmp);
    let _span = _ends.windows(2).map(|w| w[1] - w[0]).filter(|g| *g > 0.0).fold(f64::MAX, f64::min);
    let scale = |q: &str| points.iter().chain(r["reactions"].as_array().unwrap()).map(|p| p[q].as_f64().unwrap_or(0.0).abs()).fold(0.0, f64::max);
    let mut check = |q: &str, x: f64, want: f64, s: f64| {
        assert!((value(q, x) - want).abs() <= 1e-9 * s, "{id}: {q} at x = {x} is {}, not {want}", value(q, x));
        _count += 1;
    };
    for p in r["reactions"].as_array().unwrap() {
        let s = scale("Fy").max(scale("Mz"));
        check("R", f(&p["x"]), f(&p["Fy"]), s);
        check("Mr", f(&p["x"]), f(&p["Mz"]), s);
    }
    for p in points {
        for q in ["Vleft", "Vright", "Mleft", "Mright", "theta", "v"] {
            let s = scale(q).max(if q == "theta" && scale("theta") == 0.0 { scale("v") / _span } else { 0.0 });
            check(q, f(&p["x"]), f(&p[q]), s);
        }
    }
    for e in c["expect"].as_array().unwrap() {
        let q = e["quantity"].as_str().unwrap();
        let s = match q { "R" => scale("Fy"), "Mr" => scale("Mz"), "M" => scale("Mright"), _ => scale(q) };
        check(q, f(&e["x"]), f(&e["value"]), s);
    }
}
println!("The checks pass: {_count} values of 23 beams.");
```

```rust
//| caption: The units, the data and the beam as text.
use serde_json::Value;
use std::sync::OnceLock;

/// A consistent unit convention: its name, the units of length, force and stress, and their sizes in SI.
#[derive(Clone, Copy)]
struct Units { name: &'static str, len: &'static str, force: &'static str, stress: &'static str, l: f64, f: f64, s: f64 }
static UNITS: [Units; 5] = [
    Units { name: "SI: N, mm, MPa", len: "mm", force: "N", stress: "MPa", l: 1e-3, f: 1.0, s: 1e6 },
    Units { name: "SI: kN, m, kPa", len: "m", force: "kN", stress: "kPa", l: 1.0, f: 1e3, s: 1e3 },
    Units { name: "SI: N, m, Pa", len: "m", force: "N", stress: "Pa", l: 1.0, f: 1.0, s: 1.0 },
    Units { name: "US: lbf, in, psi", len: "in", force: "lbf", stress: "psi", l: 0.0254, f: 4.4482216152605, s: 6894.757293168361 },
    Units { name: "US: kip, in, ksi", len: "in", force: "kip", stress: "ksi", l: 0.0254, f: 4448.2216152605, s: 6894757.293168361 },
];

/// The section shapes: id in the data, name, and each dimension's key in the data, name, default in SI and power of length.
const SHAPES: [(&str, &str, &[(&str, &str, f64, i32)]); 4] = [
    ("rect", "Rectangle", &[("b", "b", 0.1, 1), ("h", "h", 0.2, 1)]),
    ("circle", "Circle", &[("d", "d", 0.15, 1)]),
    ("tube", "Tube", &[("d", "D", 0.1683, 1), ("t", "t", 0.008, 1)]),
    ("custom", "Custom", &[("A", "A", 5e-3, 2), ("I", "I", 8e-5, 4), ("c", "c", 0.15, 1)]),
];

/// What the section box takes: "b (mm), h (mm)".
fn dims_label(shape: usize, u: &Units) -> String {
    SHAPES[shape].2.iter().map(|d| format!("{} ({}{})", d.1, u.len, ["", "", "²", "³", "^4"][d.3 as usize])).collect::<Vec<_>>().join(", ")
}

/// A point force (F, x), a couple (C, x), or a load that runs linearly from q1 at x1 to q2 at x2.
#[derive(Clone, Copy, PartialEq)]
enum Load { Force(f64, f64), Couple(f64, f64), Spread(f64, f64, f64, f64) }

/// A beam from x = 0 to l: E and ν, the section (A, I, c, I2, J), the supports (fixed?, x) and the loads.
struct Beam { l: f64, e: f64, nu: f64, sec: [f64; 5], supports: Vec<(bool, f64)>, loads: Vec<Load> }

static RAW: OnceLock<Value> = OnceLock::new();
fn raw() -> &'static Value { RAW.get_or_init(|| serde_json::from_slice(data!("viz/beamdiag/raw.json")).unwrap()) }
fn list(key: &str) -> &'static [Value] { raw()[key].as_array().unwrap() }
fn labels(key: &str) -> Vec<&'static str> { list(key).iter().map(|v| v["label"].as_str().unwrap()).collect() }

/// A value to 12 significant digits, which drops the noise of a unit conversion.
fn tidy(x: f64) -> f64 { format!("{x:.11e}").parse().unwrap() }
/// A number as the boxes take it.
fn plain(x: f64) -> String { format!("{}", tidy(x) + 0.0) }

/// A value to `n` significant digits with a true minus sign: −4.095, 30000, 2e11.
fn fix(v: f64, n: usize) -> String {
    if !v.is_finite() { return "–".into() }
    let s = format!("{:.*e}", n - 1, v);
    let (m, e) = s.split_once('e').unwrap();
    let e: i32 = e.parse().unwrap();
    let trim = |s: String| if s.contains('.') { s.trim_end_matches('0').trim_end_matches('.').to_string() } else { s };
    let s = if v != 0.0 && !(-4..6).contains(&e) {
        format!("{}e{e}", trim(m.into()))
    } else { trim(format!("{:.*}", (n as i32 - 1 - e).max(0) as usize, v)) };
    if s == "-0" { "0".into() } else { s.replace('-', "−") }
}
fn sig(v: f64) -> String { fix(v, 4) }
/// Zero for a value below 1e-9 of the quantity's scale: rounding noise.
fn clean(v: f64, scale: f64) -> f64 { if v.abs() <= 1e-9 * scale { 0.0 } else { v } }

/// The numbers in a piece of text, in order: "q -10 to -5 from 0 to 6" gives -10, -5, 0, 6.
fn numbers(s: &str) -> Vec<f64> { s.split(|c: char| c.is_whitespace() || c == ',' || c == ';').filter_map(|w| w.replace('−', "-").parse().ok()).filter(|v: &f64| v.is_finite()).collect() }
fn parts(s: &str) -> impl Iterator<Item = &str> { s.split([',', ';']).map(str::trim).filter(|p| !p.is_empty()) }
fn word(p: &str) -> String { p.split_whitespace().next().unwrap_or("").to_lowercase() }

/// "pin 0, fixed 6000".
fn parse_supports(s: &str) -> Result<Vec<(bool, f64)>, String> {
    parts(s).map(|p| match (word(p).as_str(), &numbers(p)[..]) {
        ("pin", [x]) => Ok((false, *x)),
        ("fixed", [x]) => Ok((true, *x)),
        _ => Err(format!("write a support as \"pin x\" or \"fixed x\", not \"{p}\".")),
    }).collect()
}

/// "F -20000 at 3000, C 15000000 at 5500, q -10 from 0 to 6000, q -10 to -5 from 0 to 6000".
fn parse_loads(s: &str) -> Result<Vec<Load>, String> {
    parts(s).map(|p| match (word(p).as_str(), &numbers(p)[..]) {
        ("f", [f, x]) => Ok(Load::Force(*f, *x)),
        ("c", [c, x]) => Ok(Load::Couple(*c, *x)),
        ("q", [q, a, b]) => Ok(Load::Spread(*q, *q, *a, *b)),
        ("q", [q1, q2, a, b]) => Ok(Load::Spread(*q1, *q2, *a, *b)),
        _ => Err(format!("write a load as \"F value at x\", \"C value at x\", \"q value from x1 to x2\" or \"q value1 to value2 from x1 to x2\", not \"{p}\".")),
    }).collect()
}

fn supports_text(s: &[(bool, f64)]) -> String { s.iter().map(|&(f, x)| format!("{} {}", if f { "fixed" } else { "pin" }, plain(x))).collect::<Vec<_>>().join(", ") }
fn loads_text(l: &[Load]) -> String {
    l.iter().map(|l| match *l {
        Load::Force(f, x) => format!("F {} at {}", plain(f), plain(x)),
        Load::Couple(c, x) => format!("C {} at {}", plain(c), plain(x)),
        Load::Spread(q1, q2, a, b) if q1 == q2 => format!("q {} from {} to {}", plain(q1), plain(a), plain(b)),
        Load::Spread(q1, q2, a, b) => format!("q {} to {} from {} to {}", plain(q1), plain(q2), plain(a), plain(b)),
    }).collect::<Vec<_>>().join(", ")
}

/// A, I, c (to the extreme fibre), I2 and J of a section with dimensions `d`.
fn section(shape: usize, d: &[f64]) -> Result<[f64; 5], String> {
    use std::f64::consts::PI;
    if d.iter().any(|v| !(*v > 0.0)) { return Err("every dimension of the section must be positive.".into()) }
    let round = |o: f64, n: f64| { let i = PI * (pw(o, 4) - pw(n, 4)) / 64.0; [PI * (o * o - n * n) / 4.0, i, o / 2.0, i, 2.0 * i] };
    Ok(match shape {
        0 => {
            let (b, h, a, s) = (d[0], d[1], d[0].max(d[1]), d[0].min(d[1]));
            [b * h, b * pw(h, 3) / 12.0, h / 2.0, h * pw(b, 3) / 12.0, a * pw(s, 3) * (1.0 / 3.0 - 0.21 * s / a * (1.0 - pw(s / a, 4) / 12.0))]
        }
        1 => round(d[0], 0.0),
        2 if 2.0 * d[1] <= d[0] => round(d[0], d[0] - 2.0 * d[1]),
        2 => return Err("the wall of the tube is thicker than its radius.".into()),
        _ => [d[0], d[1], d[2], d[1], 2.0 * d[1]],
    })
}

/// The beam that the boxes (length, supports, loads, dimensions, E and ν) give in units `u`. An empty box keeps the example's part.
fn make_beam(p: &Value, u: &Units, boxes: [&str; 5], shape: usize, material: usize) -> Result<Beam, String> {
    let [length, supports, loads, dims, elastic] = boxes.map(str::trim);
    let f = |v: &Value| v.as_f64().unwrap_or(0.0);
    let l0 = tidy(f(&p["length"]) / u.l);
    let l = if length.is_empty() { l0 } else { *numbers(length).first().ok_or("type the length as a number.")? };
    let at = |v: &Value| tidy(f(v) / u.l * l / l0);
    let supports = if !supports.is_empty() { parse_supports(supports)? } else {
        p["supports"].as_array().unwrap().iter().map(|s| (s["kind"] == "fixed", at(&s["x"]))).collect()
    };
    let loads = if !loads.is_empty() { parse_loads(loads)? } else {
        p["loads"].as_array().unwrap().iter().map(|d| match d["kind"].as_str().unwrap_or("") {
            "point" => Load::Force(tidy(f(&d["F"]) / u.f), at(&d["x"])),
            "moment" => Load::Couple(tidy(f(&d["C"]) / u.f / u.l), at(&d["x"])),
            _ => Load::Spread(tidy(f(&d["q1"]) * u.l / u.f), tidy(f(&d["q2"]) * u.l / u.f), at(&d["x1"]), at(&d["x2"])),
        }).collect()
    };
    let (id, _, keys) = SHAPES[shape];
    let d: Vec<f64> = if !dims.is_empty() { numbers(dims) } else {
        keys.iter().map(|&(k, _, v, n)| tidy(if p["section"]["shape"] == id { f(&p["section"][k]) } else { v } / pw(u.l, n))).collect()
    };
    if d.len() != keys.len() { return Err(format!("type the section as {}.", dims_label(shape, u))) }
    let m = &list("materials")[material];
    let (e, nu) = match numbers(elastic)[..] {
        [] if elastic.is_empty() => (tidy(f(&m["E"]) / u.s), f(&m["nu"])),
        [e] => (e, f(&m["nu"])),
        [e, nu] => (e, nu),
        _ => return Err("type E, or E and ν.".into()),
    };
    let b = Beam { l, e, nu, sec: section(shape, &d)?, supports, loads };
    let inside = |x: f64| (0.0..=l).contains(&x);
    if !(l > 0.0) { return Err("the length must be positive.".into()) }
    if !(e > 0.0) { return Err("E must be positive.".into()) }
    if let Some(s) = b.supports.iter().find(|s| !inside(s.1)) { return Err(format!("the support at x = {} is not on the beam.", plain(s.1))) }
    let mut xs: Vec<f64> = b.supports.iter().map(|s| s.1).collect();
    xs.sort_by(f64::total_cmp);
    if let Some(w) = xs.windows(2).find(|w| w[0] == w[1]) { return Err(format!("there are 2 supports at x = {}: keep one.", plain(w[0]))) }
    if !b.supports.iter().any(|s| s.0) && b.supports.len() < 2 { return Err("the beam can move as a mechanism: add a support, or make one fixed.".into()) }
    for ld in &b.loads {
        let ok = match *ld { Load::Force(_, x) | Load::Couple(_, x) => inside(x), Load::Spread(_, _, a, c) => inside(a) && inside(c) && a < c };
        if !ok { return Err(format!("the load \"{}\" is not on the beam, or it ends before it starts.", loads_text(&[*ld]))) }
    }
    Ok(b)
}
```

```rust
//| caption: The solver: direct stiffness for the nodes, then Macaulay sums for every section.
/// The solved beam: the reaction (force, couple) at each support, the nodes with their deflections and slopes
/// (v, θ in turn), and the loads and the reactions as Macaulay terms (w, a, n), each w<x − a>^n/n! in M(x).
struct Model { b: Beam, r: Vec<(f64, f64)>, nodes: Vec<f64>, u: Vec<f64>, t: Vec<(f64, f64, i32)> }

/// x to the power k, by multiplication, so that the page and the build agree to the last bit.
fn pw(x: f64, k: i32) -> f64 { (0..k).fold(1.0, |p, _| p * x) }
fn fact(k: i32) -> f64 { (1..=k).fold(1.0, |p, i| p * i as f64) }

/// The sum of w<x − a>^(n+d)/(n+d)! over the terms: d = −1 gives V, 0 gives M, 1 and 2 the integrals of M.
/// `right` takes the value just right of a jump.
fn mac(t: &[(f64, f64, i32)], x: f64, d: i32, right: bool) -> f64 {
    t.iter().map(|&(w, a, n)| {
        let (k, r) = (n + d, x - a);
        if k < 0 || r < 0.0 || (r == 0.0 && (k > 0 || !right)) { 0.0 } else { w * pw(r, k) / fact(k) }
    }).sum()
}

/// What the terms add to the d-th integral of M between xi and x, beyond its value (and, for d = 2, its slope) at xi.
/// A term that starts before xi is expanded about xi, so that the large parts of far terms do not cancel.
fn local(t: &[(f64, f64, i32)], xi: f64, x: f64, d: i32) -> f64 {
    t.iter().map(|&(w, a, n)| {
        let k = n + d;
        if a >= x { 0.0 }
        else if a >= xi { w * pw(x - a, k) / fact(k) }
        else { w * (d..=k).map(|j| pw(xi - a, k - j) * pw(x - xi, j) / (fact(k - j) * fact(j))).sum::<f64>() }
    }).sum()
}

/// The loads as Macaulay terms. A linear load is a step and a ramp that start at x1, less the same at x2.
fn terms(loads: &[Load]) -> Vec<(f64, f64, i32)> {
    loads.iter().flat_map(|l| match *l {
        Load::Force(f, x) => vec![(f, x, 1)],
        Load::Couple(c, x) => vec![(-c, x, 0)],
        Load::Spread(q1, q2, a, b) => { let k = (q2 - q1) / (b - a); vec![(q1, a, 2), (k, a, 3), (-q2, b, 2), (-k, b, 3)] }
    }).collect()
}

/// Solve a x = b by Gaussian elimination with partial pivoting.
fn gauss(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Option<Vec<f64>> {
    let n = b.len();
    for k in 0..n {
        let p = (k..n).max_by(|&i, &j| a[i][k].abs().total_cmp(&a[j][k].abs()))?;
        if a[p][k] == 0.0 { return None }
        a.swap(k, p);
        b.swap(k, p);
        for i in k + 1..n {
            let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j] }
            b[i] -= f * b[k];
        }
    }
    let mut x = vec![0.0; n];
    for k in (0..n).rev() { x[k] = (b[k] - (k + 1..n).map(|j| a[k][j] * x[j]).sum::<f64>()) / a[k][k] }
    Some(x)
}

/// The direct stiffness method with a node at each end and support: two-node Hermite elements, each load
/// as its consistent nodal loads (the exact fixed-end actions; a linear load by 3-point Gauss, exact here).
fn solve(b: Beam) -> Result<Model, String> {
    let mut nodes = vec![0.0, b.l];
    nodes.extend(b.supports.iter().map(|s| s.1));
    nodes.sort_by(f64::total_cmp);
    nodes.dedup();
    let (n, ei, last) = (2 * nodes.len(), b.e * b.sec[1], nodes.len() - 2);
    let (mut k, mut f) = (vec![vec![0.0; n]; n], vec![0.0; n]);
    // The shape functions and their slopes at s along an element of length l.
    let shape = |s: f64, l: f64| { let x = s / l; [1.0 - 3.0 * x * x + 2.0 * x * x * x, l * (x - 2.0 * x * x + x * x * x), 3.0 * x * x - 2.0 * x * x * x, l * (x * x * x - x * x)] };
    let slope = |s: f64, l: f64| { let x = s / l; [(6.0 * x * x - 6.0 * x) / l, 1.0 - 4.0 * x + 3.0 * x * x, (6.0 * x - 6.0 * x * x) / l, 3.0 * x * x - 2.0 * x] };
    for e in 0..=last {
        let (x0, l) = (nodes[e], nodes[e + 1] - nodes[e]);
        let ke = [[12.0, 6.0 * l, -12.0, 6.0 * l], [6.0 * l, 4.0 * l * l, -6.0 * l, 2.0 * l * l], [-12.0, -6.0 * l, 12.0, -6.0 * l], [6.0 * l, 2.0 * l * l, -6.0 * l, 4.0 * l * l]];
        let here = |x: f64| x >= x0 && (x < x0 + l || (e == last && x <= x0 + l));
        let mut fe = [0.0; 4];
        let mut add = |w: f64, v: [f64; 4]| (0..4).for_each(|i| fe[i] += w * v[i]);
        for ld in &b.loads {
            match *ld {
                Load::Force(p, x) if here(x) => add(p, shape(x - x0, l)),
                Load::Couple(c, x) if here(x) => add(c, slope(x - x0, l)),
                Load::Spread(q1, q2, a, c) if a.max(x0) < c.min(x0 + l) => {
                    let (lo, hi) = (a.max(x0), c.min(x0 + l));
                    for (g, w) in [(-0.7745966692414834, 5.0 / 9.0), (0.0, 8.0 / 9.0), (0.7745966692414834, 5.0 / 9.0)] {
                        let s = (lo + hi) / 2.0 + g * (hi - lo) / 2.0;
                        add(w * (hi - lo) / 2.0 * (q1 + (q2 - q1) * (s - a) / (c - a)), shape(s - x0, l));
                    }
                }
                _ => {}
            }
        }
        for i in 0..4 {
            f[2 * e + i] += fe[i];
            for j in 0..4 { k[2 * e + i][2 * e + j] += ei / (l * l * l) * ke[i][j] }
        }
    }
    let node = |x: f64| nodes.iter().position(|&n| n == x).unwrap();
    let held: Vec<usize> = b.supports.iter().flat_map(|s| if s.0 { vec![2 * node(s.1), 2 * node(s.1) + 1] } else { vec![2 * node(s.1)] }).collect();
    let free: Vec<usize> = (0..n).filter(|i| !held.contains(i)).collect();
    let u_free = gauss(free.iter().map(|&i| free.iter().map(|&j| k[i][j]).collect()).collect(), free.iter().map(|&i| f[i]).collect()).ok_or("the beam can move as a mechanism.")?;
    let mut u = vec![0.0; n];
    free.iter().zip(&u_free).for_each(|(&i, &v)| u[i] = v);
    let reaction = |i: usize| (0..n).map(|j| k[i][j] * u[j]).sum::<f64>() - f[i];
    let r: Vec<(f64, f64)> = b.supports.iter().map(|s| (reaction(2 * node(s.1)), if s.0 { reaction(2 * node(s.1) + 1) } else { 0.0 })).collect();
    let mut t = terms(&b.loads);
    for (s, &(fy, m)) in b.supports.iter().zip(&r) { t.extend([(fy, s.1, 1), (-m, s.1, 0)]) }
    Ok(Model { b, r, nodes, u, t })
}

impl Model {
    fn ei(&self) -> f64 { self.b.e * self.b.sec[1] }
    fn loaded(&self) -> bool { terms(&self.b.loads).iter().any(|t| t.0 != 0.0) }
    fn shear(&self, x: f64, right: bool) -> f64 { mac(&self.t, x, -1, right) }
    fn moment(&self, x: f64, right: bool) -> f64 { mac(&self.t, x, 0, right) }
    /// The last node at or before x.
    fn node(&self, x: f64) -> usize { self.nodes.iter().rposition(|&n| n <= x).unwrap_or(0) }
    fn slope(&self, x: f64) -> f64 { let i = self.node(x); self.u[2 * i + 1] + local(&self.t, self.nodes[i], x, 1) / self.ei() }
    fn deflection(&self, x: f64) -> f64 { let i = self.node(x); self.u[2 * i] + self.u[2 * i + 1] * (x - self.nodes[i]) + local(&self.t, self.nodes[i], x, 2) / self.ei() }
    /// Where the curves are drawn: 400 steps and each end, support and load.
    fn places(&self) -> Vec<f64> {
        let mut x: Vec<f64> = (0..=400).map(|i| self.b.l * i as f64 / 400.0).chain(events(&self.b, &UNITS[0]).into_iter().map(|e| e.0)).collect();
        x.sort_by(f64::total_cmp);
        x.dedup();
        x
    }
    /// A curve with both sides of each jump.
    fn curve(&self, f: impl Fn(f64, bool) -> f64) -> (Vec<f64>, Vec<f64>) { self.places().iter().flat_map(|&x| [(x, f(x, false)), (x, f(x, true))]).unzip() }
    /// The largest size of V (d = −1), M (0), θ (1) or v (2) along the beam, for rounding noise.
    fn scale(&self, d: i32) -> f64 {
        self.places().iter().map(|&x| match d { -1 => self.shear(x, false).abs().max(self.shear(x, true).abs()), 0 => self.moment(x, false).abs().max(self.moment(x, true).abs()),
            1 => self.slope(x).abs(), _ => self.deflection(x).abs() }).fold(0.0, f64::max)
    }
}

/// The ends, the supports and the loads by position, each with what is there.
fn events(b: &Beam, u: &Units) -> Vec<(f64, String)> {
    let mut v: Vec<(f64, String)> = vec![(0.0, "left end".into()), (b.l, "right end".into())];
    v.extend(b.supports.iter().map(|s| (s.1, if s.0 { "fixed support" } else { "pin" }.to_string())));
    for l in &b.loads {
        match *l {
            Load::Force(f, x) => v.push((x, format!("force {} {}", sig(f), u.force))),
            Load::Couple(c, x) => v.push((x, format!("couple {} {}·{}", sig(c), u.force, u.len))),
            Load::Spread(q1, _, a, _) => v.push((a, format!("load starts, {} {}/{}", sig(q1), u.force, u.len))),
        }
        if let Load::Spread(_, q2, _, c) = *l { v.push((c, format!("load ends, {} {}/{}", sig(q2), u.force, u.len))) }
    }
    v.sort_by(|a, b| a.0.total_cmp(&b.0));
    v.dedup_by(|b, a| if a.0 == b.0 { a.1 = format!("{}, {}", a.1, b.1); true } else { false });
    v
}

/// One diagram: its line in colour k (0 shear, 1 moment, 2 deflection), the section that is read, and the axis.
/// Values of 1e5 or more, or below 1e−2, are drawn in a power of 1000 that the axis label names.
fn diagram(x: &[f64], y: &[f64], k: usize, at: (f64, f64), xl: &str, yl: &str) {
    let big = y.iter().fold(0.0_f64, |m, v| m.max(v.abs()));
    let e: i32 = format!("{big:e}").split_once('e').unwrap().1.parse().unwrap();
    let p = if big == 0.0 || (-2..5).contains(&e) { 0 } else { 3 * e.div_euclid(3) };
    let k10 = if p >= 0 { pw(10.0, p) } else { 1.0 / pw(10.0, -p) };
    let (y, at, yl) = (y.iter().map(|v| v / k10).collect::<Vec<_>>(), (at.0, at.1 / k10), if p == 0 { yl.to_string() } else { format!("{yl}, in units of {}", fix(k10, 1)) });
    (0..3).fold(Plot::new(), |p, i| if i == k { p.line(x, &y) } else { p.line(&[], &[]) }).dots(&[at.0], &[at.1]).rule(0.0).labels(xl, &yl).show()
}
```

```rust
//| caption: The sketch, the hand calculation and the deck.
/// The beam to scale on the 640 by 400 canvas of a plot: supports and loads, and the reactions.
fn sketch(m: &Model, u: &Units) -> String {
    let (b, mut s) = (&m.b, String::from("<svg class=\"plot\" viewBox=\"0 0 640 400\" role=\"img\">"));
    let px = |x: f64| 48.0 + 544.0 * x / b.l;
    let path = |s: &mut String, class: &str, p: &[(f64, f64)]| *s += &format!("<path class=\"{class}\" d=\"M{}\"/>", p.iter().map(|q| format!("{:.1} {:.1}", q.0, q.1)).collect::<Vec<_>>().join("L"));
    let label = |s: &mut String, x: f64, y: f64, t: &str| *s += &format!("<text class=\"ax\" x=\"{x:.1}\" y=\"{y:.1}\" text-anchor=\"middle\">{t}</text>");
    // An arrow from (x, y0) to its head at (x, y1).
    let arrow = |s: &mut String, class: &str, x: f64, y0: f64, y1: f64| {
        let h = if y1 > y0 { -8.0 } else { 8.0 };
        path(s, class, &[(x, y0), (x, y1)]);
        path(s, class, &[(x - 5.0, y1 + h), (x, y1), (x + 5.0, y1 + h)]);
    };
    let few = b.loads.len() <= 8 && b.supports.len() <= 6;
    let qmax = b.loads.iter().map(|l| if let Load::Spread(a, c, ..) = *l { a.abs().max(c.abs()) } else { 0.0 }).fold(0.0, f64::max);
    for l in &b.loads {
        match *l {
            Load::Spread(q1, q2, a, c) => {
                let up = q1 + q2 > 0.0;
                let y = |q: f64| if up { 156.0 + 44.0 * q.abs() / qmax } else { 144.0 - 44.0 * q.abs() / qmax };
                path(&mut s, "l0", &[(px(a), y(q1)), (px(c), y(q2))]);
                let n = ((px(c) - px(a)) / 36.0).ceil().max(1.0) as usize;
                for i in 0..=n {
                    let x = a + (c - a) * i as f64 / n as f64;
                    arrow(&mut s, "l0", px(x), y(q1 + (q2 - q1) * (x - a) / (c - a)), if up { 156.0 } else { 144.0 });
                }
                let edge = y(q1.abs().max(q2.abs()));
                if few { label(&mut s, px((a + c) / 2.0), if up { edge + 20.0 } else { edge - 8.0 }, &format!("q {} {}/{}", if q1 == q2 { sig(q1) } else { format!("{} to {}", sig(q1), sig(q2)) }, u.force, u.len)) }
            }
            Load::Force(f, x) => {
                if f < 0.0 { arrow(&mut s, "l1", px(x), 80.0, 146.0) } else { arrow(&mut s, "l1", px(x), 220.0, 154.0) }
                if few { label(&mut s, px(x), if f < 0.0 { 72.0 } else { 240.0 }, &format!("F {} {}", sig(f), u.force)) }
            }
            Load::Couple(c, x) => {
                // An arc around the point, from 30° to 330°, with its head at the end that turns as C turns.
                let mut p: Vec<(f64, f64)> = (1..=11).map(|i| {
                    let (co, si) = [(0.866, 0.5), (0.5, 0.866), (0.0, 1.0), (-0.5, 0.866), (-0.866, 0.5), (-1.0, 0.0), (-0.866, -0.5), (-0.5, -0.866), (0.0, -1.0), (0.5, -0.866), (0.866, -0.5)][i - 1];
                    (px(x) + 22.0 * co, 150.0 - 22.0 * si)
                }).collect();
                if c < 0.0 { p.reverse() }
                path(&mut s, "l1", &p);
                let ((x1, y1), (x0, y0)) = (p[10], p[9]);
                let len = ((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)).sqrt();
                let (dx, dy) = ((x1 - x0) / len, (y1 - y0) / len);
                path(&mut s, "l1", &[(x1 - 8.0 * dx - 5.0 * dy, y1 - 8.0 * dy + 5.0 * dx), (x1, y1), (x1 - 8.0 * dx + 5.0 * dy, y1 - 8.0 * dy - 5.0 * dx)]);
                if few { label(&mut s, px(x), 112.0, &format!("C {} {}·{}", sig(c), u.force, u.len)) }
            }
        }
    }
    path(&mut s, "l3", &[(48.0, 150.0), (592.0, 150.0)]);
    for (sp, r) in b.supports.iter().zip(&m.r) {
        let x = px(sp.1);
        if sp.0 {
            let side = if sp.1 < b.l / 2.0 { -1.0 } else { 1.0 };
            path(&mut s, "l3", &[(x, 126.0), (x, 174.0)]);
            for i in 0..4 { path(&mut s, "l3", &[(x, 130.0 + 12.0 * i as f64), (x + 8.0 * side, 138.0 + 12.0 * i as f64)]) }
        } else {
            path(&mut s, "l3", &[(x, 150.0), (x - 10.0, 168.0), (x + 10.0, 168.0), (x, 150.0)]);
            path(&mut s, "l3", &[(x - 16.0, 172.0), (x + 16.0, 172.0)]);
        }
        let f = clean(r.0, m.scale(-1));
        if f != 0.0 { if f > 0.0 { arrow(&mut s, "l2", x, 240.0, 180.0) } else { arrow(&mut s, "l2", x, 180.0, 240.0) } }
        if few {
            label(&mut s, x, 262.0, &format!("R {} {}", sig(f), u.force));
            if sp.0 { label(&mut s, x, 284.0, &format!("M {} {}·{}", sig(clean(r.1, m.scale(0))), u.force, u.len)) }
        }
    }
    s += &format!("<text class=\"ax\" x=\"48\" y=\"330\">0</text><text class=\"ax\" x=\"592\" y=\"330\" text-anchor=\"end\">L = {} {}</text></svg>", fix(b.l, 6), u.len);
    s
}

/// Terms with signs as one sum: "R1<x − 0> − 10<x − 0>^2/2".
fn signed(v: &[(bool, String)]) -> String {
    v.iter().enumerate().map(|(i, (neg, t))| match (i, neg) { (0, false) => t.clone(), (0, true) => format!("−{t}"), (_, false) => format!(" + {t}"), _ => format!(" − {t}") }).collect()
}

/// Macaulay's method for the beam, in the units of the page: M(x), the two integrals, the conditions, and their solution.
fn by_hand(m: &Model, u: &Units) -> String {
    let b = &m.b;
    // The unknowns as terms of M(x): a force at each support, then a couple at each fixed support; their names, values and units.
    let mut unknown: Vec<((f64, f64, i32), String, f64, String)> = b.supports.iter().zip(&m.r).enumerate()
        .map(|(i, (s, r))| ((1.0, s.1, 1), format!("R{}", i + 1), clean(r.0, m.scale(-1)), u.force.to_string())).collect();
    unknown.extend(b.supports.iter().zip(&m.r).enumerate().filter(|p| p.1.0.0)
        .map(|(i, (s, r))| ((-1.0, s.1, 0), format!("M{}", i + 1), clean(r.1, m.scale(0)), format!("{}·{}", u.force, u.len))));
    let n = unknown.len() + 2;
    if n > 8 { return format!("This beam has {n} unknowns. The equations are too long to write here, but the method is the same.") }
    // One bracket term after d integrations: the unknowns by name, the loads by value.
    let bracket = |w: f64, a: f64, k: i32, name: &str| (w < 0.0, format!("{}{name}<x − {}>{}{}", if name.is_empty() { sig(w.abs()) } else { String::new() }, fix(a, 6),
        if k == 1 { String::new() } else { format!("^{k}") }, ["", "", "/2", "/6", "/24", "/120"][k as usize]));
    let expr = |d: i32| {
        let mut v: Vec<(bool, String)> = unknown.iter().filter(|q| q.0.2 + d >= 0).map(|q| bracket(q.0.0, q.0.1, q.0.2 + d, &q.1)).collect();
        v.extend(terms(&b.loads).iter().filter(|t| t.0 != 0.0 && t.2 + d >= 0).map(|t| bracket(t.0, t.1, t.2 + d, "")));
        if d >= 1 { v.push((false, if d == 1 { "C1".into() } else { "C1 x".into() })) }
        if d == 2 { v.push((false, "C2".into())) }
        signed(&v)
    };
    let mut out = format!("M(x) = {}\nEI θ(x) = {}\nEI v(x) = {}\n\nThe conditions:\n", expr(0), expr(1), expr(2));
    // Each condition: V (d = −1), M (0), EI θ (1) or EI v (2) is zero at x.
    let mut rows = vec![(b.l, -1, "V = 0 just past the right end".to_string()), (b.l, 0, "M = 0 just past the right end".to_string())];
    rows.extend(b.supports.iter().map(|s| (s.1, 2, format!("v = 0 at x = {}", fix(s.1, 6)))));
    rows.extend(b.supports.iter().filter(|s| s.0).map(|s| (s.1, 1, format!("θ = 0 at x = {}", fix(s.1, 6)))));
    for (x, d, why) in rows {
        let mut lhs: Vec<(f64, String)> = unknown.iter().map(|q| (mac(&[q.0], x, d, true), q.1.clone())).collect();
        lhs.push((match d { 1 => 1.0, 2 => x, _ => 0.0 }, "C1".into()));
        lhs.push((if d == 2 { 1.0 } else { 0.0 }, "C2".into()));
        let v: Vec<(bool, String)> = lhs.iter().filter(|p| p.0 != 0.0).map(|p| (p.0 < 0.0, format!("{}{}", if p.0.abs() == 1.0 { String::new() } else { sig(p.0.abs()) + " " }, p.1))).collect();
        out += &format!("{why}: {} = {}\n", signed(&v), sig(-mac(&terms(&b.loads), x, d, true)));
    }
    out += &format!("\nSolve the {n} equations together:\n");
    for q in &unknown { out += &format!("{} = {} {}\n", q.1, sig(q.2), q.3) }
    out + &format!("C1 = EI θ(0) = {} {}·{}²\nC2 = EI v(0) = {} {}·{}³", sig(m.ei() * m.u[1]), u.force, u.len, sig(m.ei() * m.u[0]), u.force, u.len)
}

fn count(n: usize, noun: &str) -> String { format!("{n} {noun}{}", if n == 1 { "" } else { "s" }) }

/// A field of a NASTRAN card: an integer, a real or a word.
#[derive(Clone)]
enum Fd { I(usize), R(f64), S(&'static str) }

/// A field's text in `w` characters, a real in an exact form (plain before exponent, and one that leaves a
/// blank column before one that does not); None when no exact form fits.
fn exact(f: &Fd, w: usize) -> Option<String> {
    let dot = |s: String| if s.contains('.') { s } else { s + "." };
    match *f {
        Fd::I(n) => Some(n.to_string()),
        Fd::S(s) => Some(s.into()),
        Fd::R(x) => {
            let x = x + 0.0;
            let e = format!("{x:e}");
            let (m, p) = e.split_once('e').unwrap();
            let forms = [dot(format!("{x}")), format!("{}E{p}", dot(m.into()))];
            forms.iter().find(|s| s.len() < w).or_else(|| forms.iter().find(|s| s.len() == w)).cloned()
        }
    }
}

/// Cards of one kind: 8-character fields when every value fits exactly, else 16-character fields
/// (a real rounded only when even 16 characters cannot hold it).
fn cards(name: &str, rows: &[Vec<Fd>]) -> Vec<String> {
    let small = rows.iter().flatten().all(|f| exact(f, 8).is_some());
    let (w, per, more) = if small { (8, 8, "") } else { (16, 4, "*") };
    let text = |f: &Fd| exact(f, w).unwrap_or_else(|| {
        let Fd::R(x) = *f else { unreachable!() };
        (1..16).rev().map(|p| { let e = format!("{x:.p$e}"); let (m, q) = e.split_once('e').unwrap(); format!("{m}E{q}") }).find(|s| s.len() < w).unwrap()
    });
    rows.iter().flat_map(|r| r.iter().map(text).collect::<Vec<_>>().chunks(per).enumerate().map(|(i, c)| {
        let head = if i > 0 { more.to_string() } else if small { name.into() } else { format!("{name}*") };
        format!("{head:<8}{}", c.iter().map(|s| format!("{s:<w$}")).collect::<String>()).trim_end().to_string()
    }).collect::<Vec<_>>()).collect()
}

/// The beam as an MSC Nastran SOL 101 deck in the page's units: a grid at each end, support and load, and `div` bars between neighbours.
fn deck(m: &Model, u: &Units, div: usize) -> String {
    let b = &m.b;
    let at: Vec<f64> = events(b, u).iter().map(|e| e.0).collect();
    let mut nodes = vec![0.0];
    for w in at.windows(2) { nodes.extend((1..=div).map(|k| if k == div { w[1] } else { w[0] + (w[1] - w[0]) * k as f64 / div as f64 })) }
    let grid = |x: f64| nodes.iter().position(|&n| n == x).unwrap() + 1;
    let mut out = vec![
        format!("$ Beam, L = {} {}: {}, {}, {}, {}.", plain(b.l), u.len, count(nodes.len(), "grid"), count(nodes.len() - 1, "bar"), count(b.supports.len(), "support"), count(b.loads.len(), "load")),
        format!("$ Units: {}, {}, {}. The beam is on X, loads act in Y (+ up), moments about Z (+ counter-clockwise).", u.force, u.len, u.stress),
    ];
    out.extend(["SOL 101", "CEND", "TITLE = BEAMDIAG LINEAR STATIC", "ECHO = NONE", "DISPLACEMENT = ALL", "SPCFORCES = ALL", "OLOAD = ALL", "FORCE = ALL",
        "SUBCASE 1", "  LABEL = BEAM LOADS", "  SPC = 1", "  LOAD = 2", "BEGIN BULK", "$ Write the .xdb results database."].map(String::from));
    let [a, i, _, i2, j] = b.sec;
    let mut put = |note: &str, name: &str, rows: Vec<Vec<Fd>>| if !rows.is_empty() {
        if !note.is_empty() { out.push(format!("$ {note}")) }
        out.extend(cards(name, &rows))
    };
    use Fd::{I, R, S};
    put("", "PARAM", vec![vec![S("POST"), I(0)]]);
    put("MID, E, G (blank: from E and nu), NU", "MAT1", vec![vec![I(1), R(b.e), S(""), R(b.nu)]]);
    put("PID, MID, A, I1 (in plane), I2, J. K1 and K2 blank: no shear flexibility.", "PBAR", vec![vec![I(1), I(1), R(a), R(i), R(i2), R(j)]]);
    put("PS = 345 on every grid: only T1, T2 and R3 are free.", "GRDSET", vec![vec![S(""), S(""), S(""), S(""), S(""), S(""), I(345)]]);
    put("ID, CP, X1, X2, X3", "GRID", nodes.iter().enumerate().map(|(k, &x)| vec![I(k + 1), S(""), R(x), R(0.0), R(0.0)]).collect());
    put("EID, PID, GA, GB, X1, X2, X3 (element y = basic Y)", "CBAR", (1..nodes.len()).map(|e| vec![I(e), I(1), I(e), I(e + 1), R(0.0), R(1.0), R(0.0)]).collect());
    for (fixed, c) in [(false, 12), (true, 126)] {
        let mut g: Vec<usize> = b.supports.iter().filter(|s| s.0 == fixed).map(|s| grid(s.1)).collect();
        g.sort();
        let row: Vec<Fd> = [I(1), I(c)].into_iter().chain(g.iter().map(|&g| I(g))).collect();
        put(if fixed { "Fixed supports: T1, T2 and R3" } else { "Pins: T1 and T2" }, "SPC1", if g.is_empty() { vec![] } else { vec![row] });
    }
    put("SID, G, CID, F, N1, N2, N3", "FORCE", b.loads.iter().filter_map(|l| match *l { Load::Force(f, x) if f != 0.0 => Some(vec![I(2), I(grid(x)), I(0), R(f), R(0.0), R(1.0), R(0.0)]), _ => None }).collect());
    put("SID, G, CID, M, N1, N2, N3", "MOMENT", b.loads.iter().filter_map(|l| match *l { Load::Couple(c, x) if c != 0.0 => Some(vec![I(2), I(grid(x)), I(0), R(c), R(0.0), R(0.0), R(1.0)]), _ => None }).collect());
    let mut spread = vec![];
    for l in &b.loads {
        let Load::Spread(q1, q2, x1, x2) = *l else { continue };
        let q = |x: f64| q1 + (q2 - q1) * (x - x1) / (x2 - x1);
        for (e, w) in nodes.windows(2).enumerate().filter(|(_, w)| w[0] >= x1 && w[1] <= x2 && (q1 != 0.0 || q2 != 0.0)) {
            spread.push(vec![I(2), I(e + 1), S("FY"), S("FR"), R(0.0), R(q(w[0])), R(1.0), R(q(w[1]))]);
        }
    }
    put("SID, EID, TYPE, SCALE, X1, P1, X2, P2", "PLOAD1", spread);
    out.extend(["ENDDATA", ""].map(String::from));
    out.join("\n")
}
```
