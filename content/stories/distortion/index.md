---
title: How thin walls distort
summary: Pull, bend, shear, twist and squeeze four thin-walled shapes, and watch a small square of their skin change shape.
thumb: 7396
theme: site
seed: 20261010
voice: af_heart
pronounce: Poisson pwɑsˈOn
---

A thin-walled member carries its load in its skin. This story loads four of them, one load at a time: a circular tube, a rectangular box and an I-beam, each a cantilever clamped at one end and loaded at the other, and a flat stiffened panel loaded in its own plane. A small square with a grid on it, the unit patch, sits on the skin. The inset in the corner of each figure flattens the patch and shows what the load does to it.

<!-- skill: This story ports visuals/viz/distortion, the Structural Distortion Explorer. The notice, the shape labels and the label and basis (analytic or assumed shape) of every effect come only from raw.json through data!, pinned in visuals.lock. The cells in "The code" port its kinematics.js: keep its constants, and keep every effect labelled as raw.json labels it. -->

<!-- skill: Every figure is qualitative and exaggerated: nothing has units, and every load is a slider fraction from -1 to 1. A figure is SVG with M and L paths only, numbers in pairs, so the PDF export can read it; colours are theme tokens. -->

<!-- skill: Narration lives in say blocks, one per chapter, written to be heard: short sentences, no symbols. -->

```toml
serde_json = "=1.0.151"
```

## Axial load

**Exaggerated, qualitative visualisation. Not to scale, no units.** Every load is a slider fraction from −1 to 1, and every figure enlarges the change of shape.

Pull the member and it stretches along its length and gets thinner across it; squeeze it and it shortens and swells. The sideways part is the Poisson effect, drawn here at its upper limit so that it shows; the clamp holds it back near the wall. The dashed lines are the shape before the load. Squeeze the box or the panel hard enough and their thin walls wrinkle: the last chapter explains where.

```rust
//| caption: Axial load. The inset flattens the patch: dashed before, solid after, with arrows along its principal directions, out where it stretches and in where it shortens.
let _s = shape(1);
let _n = slider("Axial (− squeeze, + pull)", -1.0, 1.0, 0.05, -0.6);
let _x = exaggeration(1.5);
let (_t, _p) = view(30.0, 20.0);
println!("{}", raw()["disclaimer"].as_str().unwrap_or(""));
figure(Setup { s: _s, ld: [_n, 0.0, 0.0, 0.0, 0.0], ex: _x, turn: _t, tilt: _p, ..BASE });
```

```say
Pull the member, and it stretches and gets thinner. Squeeze it, and it shortens and swells. The sideways change is the Poisson effect. Squeeze the box hard, and its walls wrinkle. Everything here is enlarged, and nothing has units.
```

## Bending

A force at the tip bends the cantilever. Its moment is largest at the clamp and falls to zero at the tip, so the curve is tightest at the wall. Plane sections stay plane and square to the bent axis: one side stretches and the other shortens. The map shades the size of the axial strain in the wall: the stronger the shade, the larger it is.

In the box, the top and bottom walls, the flanges, do not take that strain evenly. Their middle lags behind their edges, so the strain peaks next to the side walls. This is shear lag, and here it is an assumed shape, not a solution. The view looks down on the top flange to show it.

```rust
//| caption: Bending, seen from above. The patch sits on the top, near the clamp; the map is the size of the axial strain.
let _s = shape(1);
let _m = slider("Bending (− tip down, + tip up)", -1.0, 1.0, 0.05, 0.4);
let _x = exaggeration(2.0);
let (_t, _p) = view(20.0, 60.0);
figure(Setup { s: _s, ld: [0.0, 0.0, 0.0, _m, 0.0], ex: _x, top: true, map: 1, turn: _t, tilt: _p, ..BASE });
```

```say
A force at the tip bends the beam. One side stretches and the other shortens, most of all at the clamp. In the box, the middle of the top wall lags behind its edges. That is shear lag, and here it is an assumed shape.
```

## Shear

A sideways force at the tip shears the member. Thin-walled theory gives the flow of shear round the section: in the I-beam and the box it runs mostly in the upright walls, the webs. The sections drift and warp a little out of their plane. The bending that such a force also causes is left to the bending chapter, so here the member only shears.

Shear turns the square patch into a rhombus: one diagonal stretches and the other shortens. Turn the patch to 45° and its edges line up with those diagonals: the shear angle goes, and the edges stretch and shorten instead. The panel takes this load in its own plane, as pure shear.

```rust
//| caption: Shear. On the panel the slider is in-plane shear. The map is the size of the shear strain in the wall.
let _s = shape(2);
let _v = slider("Shear (− down, + up)", -1.0, 1.0, 0.05, 0.4);
let _a = slider("Patch angle (°)", 0.0, 90.0, 5.0, 0.0);
let _x = exaggeration(2.0);
let (_t, _p) = view(30.0, 20.0);
let _ld = if _s == 3 { [0.0, 0.0, 0.0, 0.0, _v] } else { [0.0, _v, 0.0, 0.0, 0.0] };
figure(Setup { s: _s, ld: _ld, angle: _a, ex: _x, map: 2, turn: _t, tilt: _p, ..BASE });
```

```say
A sideways force at the tip shears the member. In the I-beam, the web carries most of it. Shear turns the square patch into a diamond. Turn the patch to forty five degrees, and its edges only stretch and shorten.
```

## Torsion

A torque at the tip turns each section about its shear centre, as a rigid body: Saint-Venant torsion. The tube twists into a gentle helix and its skin goes into shear; the patch shears but hardly moves along the span. Pick the I-beam: its flange tips also slide along the span, in opposite directions. That is warping, the next chapter. The panel takes no torsion.

```rust
//| caption: Torsion. The map is the size of the shear strain in the wall.
let _s = shape(0);
let _q = slider("Torsion (− clockwise, + anticlockwise)", -1.0, 1.0, 0.05, 0.7);
let _x = exaggeration(1.0);
let (_t, _p) = view(30.0, 20.0);
figure(Setup { s: _s, ld: [0.0, 0.0, _q, 0.0, 0.0], ex: _x, map: 2, turn: _t, tilt: _p, ..BASE });
```

```say
A twist at the tip turns each section about its centre. The tube twists into a gentle spiral, and its skin shears. The I-beam does more. Its flanges slide along the span.
```

## Warping

An open section such as the I-beam warps when it twists: each flange tip moves along the span, and the two tips of a flange move in opposite directions. The map shades the size of that movement. The patch sits on the top flange, near the clamp. The closed box warps a little; the circular tube does not warp at all.

The clamp can let the section warp, or hold it flat. Held flat, the section cannot warp or twist at the wall, and the flanges bend in their own planes. The twist rate grows along the span as $\varphi'(x) \propto 1 - \cosh(\lambda(L - x))/\cosh(\lambda L)$: the beam twists less.

```rust
//| caption: Warping. The patch sits on the top flange, near the clamp; the map is the size of the movement along the span.
let _s = shape(2);
let _q = slider("Torsion (− clockwise, + anticlockwise)", -1.0, 1.0, 0.05, 0.7);
let _h = choice("Warping at the clamp", &["free", "held flat"], 0);
let _x = exaggeration(1.0);
let (_t, _p) = view(30.0, 20.0);
figure(Setup { s: _s, ld: [0.0, 0.0, _q, 0.0, 0.0], held: _h == 1, ex: _x, map: 3, top: true, turn: _t, tilt: _p, ..BASE });
```

```say
When the I-beam twists, its flange tips slide along the span, in opposite directions. Hold the section flat at the clamp, and the beam twists less. The tube does not warp at all.
```

## Buckling

Thin plates buckle. Each plate stays flat until its interaction ratio $r = \sigma/\sigma_{cr} + (\tau/\tau_{cr})^2$ passes 1, and then wrinkles, more as $\sqrt{r - 1}$ grows. Shear makes diagonal waves and compression makes square ones. The plates are the panel skin, the box walls and the I-beam web; the circular tube stays smooth, because its buckling is not modelled.

The thresholds and the wave shapes are assumed. The true $(t/b)^2$ dependence is compressed so that every case buckles inside the slider range, but a narrower plate still holds more. The panel starts bare: turn its stringers and frames on. They cut the skin into smaller bays, the thresholds rise and the waves get shorter.

```rust
//| caption: Buckling. The table gives each plate's largest ratio r now; the lines above it give where each load alone first buckles a plate.
let _s = shape(3);
let _n = slider("Axial (− squeeze, + pull)", -1.0, 1.0, 0.05, 0.0);
let _v = slider("Shear (− one way, + the other)", -1.0, 1.0, 0.05, 0.85);
let _g = choice("Stringers", &["off", "on"], 0);
let _f = choice("Frames", &["off", "on"], 0);
let _x = exaggeration(1.0);
let (_t, _p) = view(30.0, 20.0);
let _ld = if _s == 3 { [_n, 0.0, 0.0, 0.0, _v] } else { [_n, _v, 0.0, 0.0, 0.0] };
let _st = Setup { s: _s, ld: _ld, stringers: _g == 1, frames: _f == 1, ex: _x, turn: _t, tilt: _p, ..BASE };
figure(_st);
thresholds(_st);
```

```say
Thin plates buckle. Each one stays flat until the load passes its threshold, and then it wrinkles. Shear makes diagonal waves, and squeezing makes square ones. Stringers and frames cut the skin into smaller panels. The threshold rises, and the waves get shorter.
```

# The code

The model is unit-free, like its source. A wall is a thin plate swept along the member from a path across the section; a point on it is $(u, v, \zeta)$: along the member, round the section and through the thickness. The member runs along $x$ from the clamp at 0 to the loaded tip at $L$, with $y$ up and $z$ across.

```rust
//| caption: Settings and controls. The notice, the shape labels and the basis of each effect come from raw.json.
use serde_json::Value;
use std::{f64::consts::PI, fmt::Write as _, sync::OnceLock};

static RAW: OnceLock<Value> = OnceLock::new();
/// raw.json of the Structural Distortion Explorer: the notice, the shapes, the effects and their basis.
fn raw() -> &'static Value { RAW.get_or_init(|| serde_json::from_slice(data!("viz/distortion/raw.json")).unwrap()) }
fn label(v: &Value) -> &str { v["label"].as_str().unwrap_or("?") }
/// An effect's label and basis, as raw.json gives them.
fn effect(id: &str) -> String {
    let e = raw()["effects"].as_array().unwrap().iter().find(|e| e["id"] == id).unwrap();
    format!("{} ({})", label(e), if e["basis"] == "assumed" { "assumed shape" } else { "analytic" })
}

/// A figure: shape (tube, box, I-beam, panel), loads as slider fractions (axial, shear, torsion,
/// bending, in-plane shear), exaggeration, warping held at the clamp, stiffeners, patch angle and
/// place (top: on the top near the clamp), map (none, axial strain, shear strain, warping), view.
#[derive(Clone, Copy)]
struct Setup { s: usize, ld: [f64; 5], ex: f64, held: bool, stringers: bool, frames: bool, angle: f64, top: bool, map: usize, turn: f64, tilt: f64 }
const BASE: Setup = Setup { s: 0, ld: [0.0; 5], ex: 1.0, held: false, stringers: true, frames: true, angle: 0.0, top: false, map: 0, turn: 30.0, tilt: 20.0 };
impl Setup {
    /// Load k as this shape takes it: axial on all; shear, torsion and bending on the beams; in-plane shear on the panel.
    fn on(&self, k: usize) -> f64 { if k == 0 || (k < 4) == (self.s < 3) { self.ld[k] } else { 0.0 } }
}
fn shape(default: usize) -> usize { choice("Shape", &raw()["structures"].as_array().unwrap().iter().map(label).collect::<Vec<_>>(), default) }
fn exaggeration(x: f64) -> f64 { slider("Exaggeration (×)", 0.5, 3.0, 0.1, x) }
fn view(turn: f64, tilt: f64) -> (f64, f64) { (slider("Turn (°)", -180.0, 180.0, 5.0, turn), slider("Tilt (°)", -90.0, 90.0, 5.0, tilt)) }
```

```rust
//| caption: Sections. Thin-walled theory gives each wall its shear strain under a tip force (peak 1), the drift and warping that come with it, and its sectorial coordinate for torsion.
const L: f64 = 6.0; // member length
const TUBE_R: f64 = 0.6;
const BOX: [f64; 3] = [1.2, 0.8, 0.06]; // width, height, corner radius
const IB: [f64; 4] = [1.0, 1.2, 0.07, 0.05]; // flange width, height, flange and web thickness
const PA: f64 = 4.0; // panel length
const PB: f64 = 2.0; // panel width
const STRINGERS: [f64; 3] = [-0.5, 0.0, 0.5];
const FRAMES: [f64; 2] = [-2.0 / 3.0, 2.0 / 3.0];

type V = [f64; 3];
fn sub(a: V, b: V) -> V { [a[0] - b[0], a[1] - b[1], a[2] - b[2]] }
fn add(a: V, b: V, k: f64) -> V { [a[0] + k * b[0], a[1] + k * b[1], a[2] + k * b[2]] }
fn dot(a: V, b: V) -> f64 { a[0] * b[0] + a[1] * b[1] + a[2] * b[2] }
fn cross(a: V, b: V) -> V { [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]] }
fn sgn(x: f64) -> f64 { if x > 0.0 { 1.0 } else if x < 0.0 { -1.0 } else { 0.0 } }

/// A sample of a section path: position, unit tangent, outward normal, which side the normal is
/// on, the flat plate it belongs to (-1 in a corner) and eta, across that plate.
#[derive(Clone, Copy, Default)]
struct Q { y: f64, z: f64, ty: f64, tz: f64, ny: f64, nz: f64, side: f64, plate: i32, eta: f64 }
/// A densely sampled path; lookups interpolate in arc length s.
struct Path { p: Vec<Q>, s: Vec<f64>, len: f64, closed: bool }
fn path(p: Vec<Q>, closed: bool) -> Path {
    let mut s = vec![0.0; p.len()];
    for i in 1..p.len() { s[i] = s[i - 1] + (p[i].y - p[i - 1].y).hypot(p[i].z - p[i - 1].z) }
    let (a, b) = (p[0], p[p.len() - 1]);
    let len = s[p.len() - 1] + if closed { (a.y - b.y).hypot(a.z - b.z) } else { 0.0 };
    Path { p, s, len, closed }
}
impl Path {
    /// The samples either side of arc length v, and the fraction between them.
    fn seg(&self, v: f64) -> (usize, usize, f64) {
        let n = self.p.len();
        let v = if self.closed { v.rem_euclid(self.len) } else { v.clamp(0.0, self.len) };
        if self.closed && v >= self.s[n - 1] { return (n - 1, 0, (v - self.s[n - 1]) / (self.len - self.s[n - 1])) }
        let j = self.s.partition_point(|&x| x <= v).clamp(1, n - 1);
        (j - 1, j, (v - self.s[j - 1]) / (self.s[j] - self.s[j - 1]))
    }
    fn at(&self, v: f64) -> Q {
        let (i, j, f) = self.seg(v);
        let (a, b, m) = (self.p[i], self.p[j], |x: f64, y: f64| x + (y - x) * f);
        let (ty, tz) = (m(a.ty, b.ty), m(a.tz, b.tz));
        let l = ty.hypot(tz).max(1e-12);
        Q { y: m(a.y, b.y), z: m(a.z, b.z), ty: ty / l, tz: tz / l, ny: -tz / l * a.side, nz: ty / l * a.side, side: a.side, plate: if f < 0.5 { a.plate } else { b.plate }, eta: m(a.eta, b.eta) }
    }
    /// A per-sample table at arc length v.
    fn arr(&self, a: &[f64], v: f64) -> f64 { let (i, j, f) = self.seg(v); a[i] + (a[j] - a[i]) * f }
}
fn straight(y0: f64, z0: f64, y1: f64, z1: f64, n: usize, side: f64, plate: i32) -> Path {
    let d = (y1 - y0).hypot(z1 - z0);
    path((0..=n).map(|i| { let f = i as f64 / n as f64; Q { y: y0 + (y1 - y0) * f, z: z0 + (z1 - z0) * f, ty: (y1 - y0) / d, tz: (z1 - z0) / d, side, plate, eta: f * d, ..Q::default() } }).collect(), false)
}
/// The tube: angle from +z towards +y.
fn tube_path() -> Path {
    path((0..256).map(|i| { let (s, c) = (2.0 * PI * i as f64 / 256.0).sin_cos(); Q { y: TUBE_R * s, z: TUBE_R * c, ty: c, tz: -s, side: 1.0, plate: -1, ..Q::default() } }).collect(), true)
}
/// The box: a rounded rectangle walked from the top-flange centre towards -z. Plates: 0 top
/// flange, 1 left web, 2 bottom flange, 3 right web; eta runs across each, corner to corner.
fn box_path() -> Path {
    let (hw, hh, rc) = (BOX[0] / 2.0, BOX[1] / 2.0, BOX[2]);
    let (fz, fy, mut p) = (hw - rc, hh - rc, vec![]);
    let lines = [(0.0, hh, -fz, hh, 0, 60), (-hw, fy, -hw, -fy, 1, 60), (-fz, -hh, fz, -hh, 2, 120), (hw, -fy, hw, fy, 3, 60), (fz, hh, 0.0, hh, 0, 60)];
    let arcs = [(-fz, fy, 0.5 * PI), (-fz, -fy, PI), (fz, -fy, 1.5 * PI), (fz, fy, 0.0)];
    for (k, &(z0, y0, z1, y1, plate, n)) in lines.iter().enumerate() {
        let d = (z1 - z0).hypot(y1 - y0);
        for i in 0..n { let f = i as f64 / n as f64; p.push(Q { y: y0 + (y1 - y0) * f, z: z0 + (z1 - z0) * f, ty: (y1 - y0) / d, tz: (z1 - z0) / d, side: 1.0, plate, ..Q::default() }) }
        if let Some(&(cz, cy, a0)) = arcs.get(k) {
            for i in 0..8 { let (s, c) = (a0 + 0.5 * PI * i as f64 / 8.0).sin_cos(); p.push(Q { y: cy + rc * s, z: cz + rc * c, ty: c, tz: -s, side: 1.0, plate: -1, ..Q::default() }) }
        }
    }
    for q in &mut p { q.eta = match q.plate { 0 => fz - q.z, 1 => fy - q.y, 2 => q.z + fz, 3 => q.y + fy, _ => 0.0 } }
    path(p, true)
}
/// Box mesh stations: 3 cells on each half of the top flange, 4 on a web, 6 on the bottom, 2 round a corner.
fn box_stations(p: &Path) -> Vec<f64> {
    let mut v: Vec<f64> = [(0, 60, 3), (60, 8, 2), (68, 60, 4), (128, 8, 2), (136, 120, 6), (256, 8, 2), (264, 60, 4), (324, 8, 2), (332, 60, 3)]
        .iter().flat_map(|&(a, n, c)| (0..c).map(move |j| p.s[a + n * j / c])).collect();
    v.push(p.len);
    v
}

/// Trapezoid running integral of f along a path, and its total (round a closed path).
fn cum(p: &Path, f: impl Fn(&Q) -> f64) -> (Vec<f64>, f64) {
    let n = p.p.len();
    let mut o = vec![0.0; n];
    for i in 1..n { o[i] = o[i - 1] + 0.5 * (f(&p.p[i - 1]) + f(&p.p[i])) * (p.s[i] - p.s[i - 1]) }
    let close = if p.closed { 0.5 * (f(&p.p[n - 1]) + f(&p.p[0])) * (p.len - p.s[n - 1]) } else { 0.0 };
    let t = o[n - 1] + close;
    (o, t)
}
fn mean(p: &Path, a: &[f64]) -> f64 {
    let n = a.len();
    let mut sum: f64 = (1..n).map(|i| 0.5 * (a[i - 1] + a[i]) * (p.s[i] - p.s[i - 1])).sum();
    if p.closed { sum += 0.5 * (a[n - 1] + a[0]) * (p.len - p.s[n - 1]) }
    sum / p.len
}
/// A closed cell under a tip force up: shear flow from dq/ds = -y, single-valued by the no-twist
/// condition, peak 1; the drift v' by least squares; the warping that is left, mean removed.
fn closed_shear(p: &Path) -> (Vec<f64>, f64, Vec<f64>) {
    let q = cum(p, |q| -q.y).0;
    let q0 = -mean(p, &q);
    let pk = q.iter().fold(0.0f64, |m, x| m.max((x + q0).abs()));
    let g: Vec<f64> = q.iter().map(|x| (x + q0) / pk).collect();
    let n = g.len();
    let ds = |i: usize| if i + 1 < n { p.s[i + 1] } else { p.len } - p.s[i];
    let vp = (0..n).map(|i| g[i] * p.p[i].ty * ds(i)).sum::<f64>() / (0..n).map(|i| p.p[i].ty.powi(2) * ds(i)).sum::<f64>();
    let mut w = vec![0.0; n];
    for i in 1..n { w[i] = w[i - 1] + 0.5 * (g[i - 1] - vp * p.p[i - 1].ty + g[i] - vp * p.p[i].ty) * (p.s[i] - p.s[i - 1]) }
    let m = mean(p, &w);
    (g, vp, w.iter().map(|x| x - m).collect())
}
/// A closed cell's sectorial coordinate, the integral of rho - psi with psi = 2A/perimeter, mean
/// removed (zero for the tube), and the sign of psi.
fn closed_omega(p: &Path) -> (Vec<f64>, f64) {
    let rho = |q: &Q| q.y * q.tz - q.z * q.ty;
    let psi = cum(p, rho).1 / p.len;
    let o = cum(p, |q| rho(q) - psi).0;
    let m = mean(p, &o);
    (o.iter().map(|x| x - m).collect(), psi.signum())
}

/// A wall: its path, thickness, extent along (u) and round (v), frame position (frames run
/// across at x0), mesh cells along and stations round, and its section fields.
struct Wall { name: &'static str, path: Path, t: f64, u: (f64, f64), v: (f64, f64), x0: Option<f64>, nu: usize, vs: Vec<f64>, gamma: Vec<f64>, vp: f64, warp: Vec<f64>, omega: Vec<f64> }
struct Model { s: usize, w: Vec<Wall>, psi: f64 }
fn wall(name: &'static str, path: Path, t: f64, u: (f64, f64), v: Option<(f64, f64)>, nu: usize, nv: usize) -> Wall {
    let v = v.unwrap_or((0.0, path.len));
    let vs = (0..=nv).map(|j| v.0 + (v.1 - v.0) * j as f64 / nv as f64).collect();
    Wall { name, path, t, u, v, x0: None, nu, vs, gamma: vec![], vp: 0.0, warp: vec![], omega: vec![] }
}
fn model(s: usize) -> Model {
    if s < 2 {
        let p = if s == 0 { tube_path() } else { box_path() };
        let ((gamma, vp, warp), (omega, psi)) = (closed_shear(&p), closed_omega(&p));
        let mut w = wall(["tube wall", "box wall"][s], p, 0.05, (0.0, L), None, [20, 24][s], 24);
        if s == 1 { w.vs = box_stations(&w.path) }
        return Model { s, psi, w: vec![Wall { gamma, vp, warp, omega, ..w }] };
    }
    if s == 3 {
        let (ha, hb, t) = (PA / 2.0, PB / 2.0, 0.03);
        let mut w = vec![wall("skin", straight(-hb, 0.0, hb, 0.0, 128, 1.0, 0), t, (-ha, ha), None, 30, 16)];
        for y in STRINGERS { w.push(wall("stringer", straight(y, t / 2.0, y, t / 2.0 + 0.14, 4, -1.0, -1), 0.03, (-ha, ha), None, 30, 1)) }
        for x in FRAMES { w.push(Wall { x0: Some(x), ..wall("frame", straight(-hb, t / 2.0, -hb, t / 2.0 + 0.2, 4, -1.0, -1), 0.035, (-hb, hb), None, 16, 1) }) }
        return Model { s, psi: 0.0, w };
    }
    // I-beam: flange flow linear from the tips, web flow parabolic plus the flange inflow; drift is
    // the web average; web warping odd in y, flange warping even in z, its mean removed.
    let ([bf, h, tf, tw], hh) = (IB, IB[1] / 2.0);
    let c = tf * h * bf / 2.0 / tw + h * h / 8.0;
    let (vp, mf) = ((c - h * h / 24.0) / c, hh * bf * bf / 12.0 / c);
    let mut w = vec![
        wall("top flange", straight(hh, -bf / 2.0, hh, bf / 2.0, 64, -1.0, -1), tf, (0.0, L), None, 24, 6),
        wall("web", straight(-hh, 0.0, hh, 0.0, 64, 1.0, 0), tw, (0.0, L), Some((tf / 2.0, h - tf / 2.0)), 24, 8),
        wall("bottom flange", straight(-hh, -bf / 2.0, -hh, bf / 2.0, 64, 1.0, -1), tf, (0.0, L), None, 24, 6),
    ];
    for (k, w) in w.iter_mut().enumerate() {
        let f = |g: &dyn Fn(&Q) -> f64| w.path.p.iter().map(g).collect::<Vec<f64>>();
        let web = k == 1;
        let (gamma, warp, omega) = if web {
            (f(&|q| (c - q.y * q.y / 2.0) / c), f(&|q| (c * q.y - q.y.powi(3) / 6.0) / c - vp * q.y), f(&|_| 0.0))
        } else {
            (f(&|q| q.y * (bf / 2.0 - q.z.abs()) * sgn(q.z) / c), f(&|q| q.y / c * (bf / 2.0 * q.z.abs() - q.z * q.z / 2.0) - sgn(q.y) * mf), f(&|q| q.y * q.z))
        };
        (w.gamma, w.warp, w.omega, w.vp) = (gamma, warp, omega, vp);
    }
    Model { s, psi: 0.0, w }
}
```

```rust
//| caption: Kinematics: the deformed position of a wall point under the loads, after kinematics.js.
const NU: f64 = 0.5; // Poisson ratio, at its upper limit so the swell shows
const EPS_A: f64 = 0.08; // axial strain at full load
const GAM_V: f64 = 0.08; // peak wall shear strain at full transverse shear
const KAP: f64 = 0.07; // curvature at the clamp at full bending
const GAM_Q: f64 = 0.1; // panel shear strain at full in-plane shear
const TWIST: [f64; 4] = [0.5, 0.6, 1.2, 0.0]; // tip twist at full torsion, warping free
const LAM_L: [f64; 4] = [0.0, 10.0, 2.5, 0.0]; // Vlasov decay: L sqrt(GJ / E Cw)
const LAG: f64 = 0.7; // shear-lag strength (assumed shape)

/// The loads as amplitudes, the buckling plates, and the bent centreline as a table of (x, y, angle).
struct Pr<'a> { m: &'a Model, st: Setup, ea: f64, gv: f64, k: f64, lam: f64, held: bool, k0: f64, gq: f64, pl: Vec<Plate>, cv: Vec<V> }
fn prepare(m: &Model, st: Setup) -> Pr<'_> {
    let (e, lam) = (st.ex, LAM_L[m.s] / L);
    let k0 = st.on(3) * KAP * e;
    // Curvature falls linearly from the clamp to zero at the tip; integrate the tangent angle.
    let th = |xi: f64| { let x = xi.min(L); k0 * (x - x * x / (2.0 * L)) };
    let dx = 1.6 * L / 400.0;
    let mut cv = vec![[0.0; 3]; 401];
    for i in 1..=400 { let tm = th((i as f64 - 0.5) * dx); cv[i] = [cv[i - 1][0] + tm.cos() * dx, cv[i - 1][1] + tm.sin() * dx, th(i as f64 * dx)] }
    Pr { m, st, ea: st.on(0) * EPS_A * e, gv: st.on(1) * GAM_V * e, k: st.on(2) * TWIST[m.s] * e / L, lam, held: st.held && lam > 0.0, k0, gq: st.on(4) * GAM_Q * e, pl: plates(m, &st), cv }
}
impl Pr<'_> {
    /// Twist and twist rate. Warping held at the clamp (Vlasov, tip torque): phi(0) = phi'(0) = 0, phi''(L) = 0.
    fn phi(&self, x: f64) -> f64 {
        let l = self.lam;
        if self.held { self.k * (x - ((l * L).sinh() - (l * (L - x)).sinh()) / (l * (l * L).cosh())) } else { self.k * x }
    }
    fn dphi(&self, x: f64) -> f64 { if self.held { self.k * (1.0 - (self.lam * (L - x)).cosh() / (self.lam * L).cosh()) } else { self.k } }
    fn kappa(&self, x: f64) -> f64 { self.k0 * (1.0 - x / L).max(0.0) }
    fn curve(&self, xi: f64) -> V {
        if xi <= 0.0 { return [xi, 0.0, 0.0] }
        let f = xi / (1.6 * L / 400.0);
        let (i, r) = ((f as usize).min(399), f - (f as usize).min(399) as f64);
        add(self.cv[i], sub(self.cv[i + 1], self.cv[i]), r)
    }
}
/// The point (u, v, zeta) before the load, and the path sample under it.
fn reference(w: &Wall, u: f64, v: f64, z: f64) -> (V, Q) {
    let q = w.path.at(v);
    (match w.x0 { Some(x0) => [x0 + z, u, q.z], None => [u, q.y + q.ny * z, q.z + q.nz * z] }, q)
}
/// The deformed point. `membrane` leaves out the buckling wrinkles, which are not strain in the wall.
fn deform(p: &Pr, wi: usize, u: f64, v: f64, zeta: f64, membrane: bool) -> V {
    let wr = if membrane { 0.0 } else { wrinkle(p, wi, u, v) };
    let ([x, y, z], q) = reference(&p.m.w[wi], u, v, zeta);
    // The panel: uniform axial strain with Poisson across, and pure shear.
    if p.m.s == 3 { return [x + p.ea * x + p.gq / 2.0 * y, y - NU * p.ea * y + p.gq / 2.0 * x, z + wr] }
    let (y, z) = (y + wr * q.ny, z + wr * q.nz);
    // Poisson: lateral strain follows the local axial strain, held back by the clamp.
    let lat = 1.0 - NU * (p.ea - p.kappa(x) * y) * (1.0 - (-x / 0.3).exp());
    // Saint-Venant twist about the shear centre, then the drift of the sections under shear.
    let ((s, c), (y, z)) = (p.phi(x).sin_cos(), (y * lat, z * lat));
    let (y2, z2) = (y * c - z * s + p.gv * p.m.w[wi].vp * x, y * s + z * c);
    // Bending: plane sections stay plane and square to the bent centreline.
    let [cx, cy, th] = p.curve(x + p.ea * x + warping(p, wi, x, v));
    [cx - y2 * th.sin(), cy + y2 * th.cos(), z2]
}
/// Movement along the span that breaks plane sections: torsional warping -phi' omega, shear
/// warping and, on the box flanges in bending, shear lag (an assumed cosine across the flange).
fn warping(p: &Pr, wi: usize, x: f64, v: f64) -> f64 {
    let w = &p.m.w[wi];
    if w.omega.is_empty() { return 0.0 }
    let mut a = -p.dphi(x) * w.path.arr(&w.omega, v) + p.gv * w.path.arr(&w.warp, v);
    let q = if p.m.s == 1 && p.k0 != 0.0 { w.path.at(v) } else { Q { plate: -1, ..Q::default() } };
    if q.plate == 0 || q.plate == 2 {
        let (b, x) = (BOX[0] - 2.0 * BOX[2], x.min(L));
        a += sgn(q.y) * BOX[1] / 2.0 * p.k0 * (x - x * x / (2.0 * L)) * LAG * (PI * (q.eta - b / 2.0) / b).cos();
    }
    a
}
/// The map's value at (u, v): axial strain E_xx, shear strain 2 E_xs, or warping.
fn map_value(p: &Pr, wi: usize, u: f64, v: f64) -> f64 {
    let (w, h) = (&p.m.w[wi], 1e-3);
    if p.st.map == 3 { return warping(p, wi, u, v) }
    let at = |du: f64, dv: f64| deform(p, wi, (u + du).clamp(w.u.0, w.u.1), v + dv, 0.0, true);
    let fu = add([0.0; 3], sub(at(h, 0.0), at(-h, 0.0)), 1.0 / ((u + h).min(w.u.1) - (u - h).max(w.u.0)));
    if p.st.map == 1 { return (dot(fu, fu) - 1.0) / 2.0 }
    dot(fu, add([0.0; 3], sub(at(0.0, h), at(0.0, -h)), 0.5 / h))
}
/// The deformed axis at x and its angle, where the arrows of the tip loads start.
fn axis(p: &Pr, x: f64) -> V {
    let [cx, cy, th] = p.curve(x + p.ea * x);
    let y = p.gv * p.m.w[0].vp * x;
    [cx - y * th.sin(), cy + y * th.cos(), th]
}
```

```rust
//| caption: Buckling, threshold-triggered with assumed wave shapes. The true (t/b)² is compressed to 1/b so that every case buckles inside the slider range.
const BUCKLE: [[f64; 3]; 4] = [[0.0; 3], [0.108, 0.095, 0.05], [0.108, 0.095, 0.07], [0.1, 0.0631, 0.1]]; // C_S, C_T, wrinkle
const RAMP: f64 = 0.35; // wrinkles fade out over this length at a clamped or loaded end

/// A plate: its wall (and box plate), extent along and across, whether its ends fade, critical
/// compression and shear, and its demand: compression (uniform, bending at the clamp) and shear.
struct Plate { name: &'static str, wall: usize, plate: i32, x: (f64, f64), e: (f64, f64), fade: bool, scr: f64, tcr: f64, sig: (f64, f64), tau: f64 }
impl Plate {
    /// The interaction ratio at x, compression over critical plus the shear ratio squared, and its two parts.
    fn ratio(&self, x: f64) -> (f64, f64, f64) {
        let s = (self.sig.0 + self.sig.1 * (1.0 - x / L).max(0.0)).max(0.0) / self.scr;
        let t2 = (self.tau / self.tcr).powi(2);
        (s + t2, s, t2)
    }
}
fn ks(r: f64) -> f64 { 5.34 + 4.0 / (r * r) } // shear, simply supported, r = long / short
fn kc(a: f64, b: f64) -> f64 { let m = (a / b).round().max(1.0); (m * b / a + a / (m * b)).powi(2) } // compression along a
fn plates(m: &Model, st: &Setup) -> Vec<Plate> {
    let (n, v, t, mo, q) = (st.on(0), st.on(1), st.on(2), st.on(3), st.on(4));
    let mut out = vec![];
    if m.s == 3 {
        let c = BUCKLE[3];
        let xs: Vec<f64> = [-PA / 2.0].into_iter().chain(FRAMES.into_iter().filter(|_| st.frames)).chain([PA / 2.0]).collect();
        let ys: Vec<f64> = [-PB / 2.0].into_iter().chain(STRINGERS.into_iter().filter(|_| st.stringers)).chain([PB / 2.0]).collect();
        for i in 0..xs.len() - 1 { for j in 0..ys.len() - 1 {
            let (a, b) = (xs[i + 1] - xs[i], ys[j + 1] - ys[j]);
            out.push(Plate { name: "skin bay", wall: 0, plate: 0, x: (xs[i], xs[i + 1]), e: (ys[j] + PB / 2.0, ys[j + 1] + PB / 2.0), fade: false,
                scr: c[0] * kc(a, b) / b, tcr: c[1] * ks(a.max(b) / a.min(b)) / a.min(b), sig: (-n, 0.0), tau: q });
        }}
    } else if m.s == 1 {
        let w = &m.w[0];
        for k in 0..4 {
            let b = [BOX[0], BOX[1]][k % 2] - 2.0 * BOX[2];
            let c = w.path.p.iter().position(|p| p.plate == k as i32 && (p.eta - b / 2.0).abs() < 0.02).unwrap();
            out.push(Plate { name: ["top flange", "left web", "bottom flange", "right web"][k], wall: 0, plate: k as i32, x: (0.0, L), e: (0.0, b), fade: true,
                scr: BUCKLE[1][0] * kc(L, b) / b, tcr: BUCKLE[1][1] * ks(L / b) / b, sig: (-n, [1.0, 0.0, -1.0, 0.0][k] * mo), tau: v * w.gamma[c] + t * m.psi });
        }
    } else if m.s == 2 {
        let b = IB[1] - IB[2];
        out.push(Plate { name: "web", wall: 1, plate: 0, x: (0.0, L), e: (IB[2] / 2.0, IB[1] - IB[2] / 2.0), fade: true, scr: f64::INFINITY, tcr: BUCKLE[2][1] * ks(L / b) / b, sig: (0.0, 0.0), tau: v });
    }
    out
}
/// Out-of-plane wrinkle at (u, v): zero below the threshold, then growing as sqrt(r - 1).
/// Shear: diagonal half-waves at about 45°; compression: square half-waves; mixed loads blend.
fn wrinkle(p: &Pr, wi: usize, u: f64, v: f64) -> f64 {
    let bx = p.m.s == 1;
    let q = if bx && !p.pl.is_empty() { p.m.w[wi].path.at(v) } else { Q::default() };
    for pl in p.pl.iter().filter(|pl| pl.wall == wi && (!bx || pl.plate == q.plate)) {
        if !bx && (v < pl.e.0 || v > pl.e.1) || u < pl.x.0 || u > pl.x.1 { continue }
        let (r, s, t2) = pl.ratio(u);
        if r <= 1.0 { return 0.0 }
        let (a, b, xi, e) = (pl.x.1 - pl.x.0, pl.e.1 - pl.e.0, u - pl.x.0, if bx { q.eta } else { v - pl.e.0 });
        let lam = 1.1 * a.min(b);
        let smooth = |t: f64| { let t = t.clamp(0.0, 1.0); t * t * (3.0 - 2.0 * t) };
        let amp = (0.2 * lam).min(BUCKLE[p.m.s][2] * b * 1.6 * ((r - 1.0).sqrt() / 1.6).tanh() * p.st.ex);
        let along = if pl.fade { smooth(xi / RAMP) * smooth((a - xi) / RAMP) } else { (PI * xi / a).sin() };
        let m = if pl.fade { a / b } else { (a / b).round().max(1.0) };
        let shape = (t2 * (PI * (xi - pl.tau.signum() * e) / lam).sin() + s * (PI * m * xi / a).sin()) / if t2 + s > 0.0 { t2 + s } else { 1.0 };
        return amp * (PI * e / b).sin() * along * shape;
    }
    0.0
}
/// Where load k alone first buckles a plate, below and above zero: the smallest f with f s + f² t² = 1.
fn critical(m: &Model, st: &Setup, k: usize) -> [Option<f64>; 2] {
    [-1.0, 1.0].map(|sg| {
        let mut one = *st;
        one.ld = [0.0; 5];
        one.ld[k] = sg;
        let onset = |(_, s, t2): (f64, f64, f64)| if t2 > 0.0 { (-s + (s * s + 4.0 * t2).sqrt()) / (2.0 * t2) } else if s > 0.0 { 1.0 / s } else { f64::INFINITY };
        let best = plates(m, &one).iter().flat_map(|pl| {
            let xs = if pl.fade { vec![pl.x.0, RAMP, (pl.x.0 + pl.x.1) / 2.0] } else { vec![(pl.x.0 + pl.x.1) / 2.0] };
            xs.into_iter().map(|x| pl.ratio(x)).collect::<Vec<_>>()
        }).filter(|r| r.0 > 0.0).map(onset).fold(f64::INFINITY, f64::min);
        (best <= 1.0).then_some(sg * best)
    })
}
/// Each plate's largest ratio along its length (away from a loaded end that fades).
fn buckled(p: &Pr) -> Vec<(&'static str, f64)> {
    p.pl.iter().map(|pl| (pl.name, (0..=20).map(|k| pl.x.0 + (pl.x.1 - pl.x.0) * k as f64 / 20.0).filter(|&x| !pl.fade || x < pl.x.1 - RAMP / 2.0).map(|x| pl.ratio(x).0).fold(0.0, f64::max))).collect()
}
/// The buckling chapter's report: where each of its loads alone first buckles a plate, and the plates now.
fn thresholds(st: Setup) {
    let m = model(st.s);
    if st.s == 0 { return println!("The circular tube stays smooth: its buckling is not modelled.") }
    for (k, name) in [(0, "Axial"), if st.s == 3 { (4, "In-plane shear") } else { (1, "Transverse shear") }] {
        let at = match critical(&m, &st, k) {
            [Some(a), Some(b)] => format!("at {a:+.2} and at {b:+.2}"),
            [Some(a), None] | [None, Some(a)] => format!("at {a:+.2}, and not the other way"),
            [None, None] => "nowhere in range".into(),
        };
        println!("{name} alone first buckles a plate {at} (slider fractions).");
    }
    let b = buckled(&prepare(&m, st));
    let mut rows: Vec<Vec<String>> = vec![];
    for (name, _) in &b {
        if rows.iter().any(|r| r[0].starts_with(*name)) { continue }
        let rs: Vec<f64> = b.iter().filter(|x| x.0 == *name).map(|x| x.1).collect();
        let n = rs.iter().filter(|&&r| r > 1.0).count();
        let state = if n == 0 { "flat".into() } else if rs.len() > 1 { format!("{n} buckled") } else { "buckled".into() };
        rows.push(vec![if rs.len() > 1 { format!("{name}s ({})", rs.len()) } else { name.to_string() }, format!("{:.2}", rs.iter().fold(0.0f64, |a, &r| a.max(r))), state]);
    }
    table(&["Plate", "Largest r", "State"], &rows);
}
```

```rust
//| caption: The unit patch, a 4 × 4 grid half the panel's stringer pitch wide, and the membrane strain of the wall under its centre.
const PATCH: f64 = 0.5;
struct Patch { w: usize, u: f64, v: f64, angle: f64 }
/// Mid-span on the face towards the default view, or on the top near the clamp; kept on its wall.
fn patch(m: &Model, st: &Setup) -> Patch {
    let near = |w: usize, y: f64, z: f64| m.w[w].path.p.iter().zip(&m.w[w].path.s).min_by(|a, b| (a.0.y - y).hypot(a.0.z - z).total_cmp(&(b.0.y - y).hypot(b.0.z - z))).unwrap().1;
    let (w, u, v) = match (m.s, st.top) {
        (3, _) => (0, 0.0, PB / 2.0 + 0.25),
        (_, true) => (0, 0.2 * L, *near(0, 0.4, 0.38)),
        (0, _) => (0, L / 2.0, TUBE_R * 0.35),
        (1, _) => (0, L / 2.0, *near(0, 0.0, BOX[0] / 2.0)),
        _ => (1, L / 2.0, IB[1] / 2.0),
    };
    let (wl, a) = (&m.w[w], st.angle.to_radians());
    let half = PATCH / 2.0 * (a.cos().abs() + a.sin().abs());
    let v = if wl.path.closed { v } else if wl.v.1 - wl.v.0 > 2.0 * half { v.clamp(wl.v.0 + half, wl.v.1 - half) } else { (wl.v.0 + wl.v.1) / 2.0 };
    Patch { w, u: u.clamp(wl.u.0 + half + 0.05, wl.u.1 - half - 0.02), v, angle: st.angle }
}
/// Seen from outside the face, x along the member points right and sign × v points up.
fn face_sign(w: &Wall, pa: &Patch) -> f64 { let q = w.path.at(pa.v); (q.ty * q.nz - q.tz * q.ny).signum() }
/// The patch grid in wall coordinates: 5 lines each way, the first and last of each the edges.
fn patch_lines(m: &Model, pa: &Patch) -> Vec<Vec<(f64, f64)>> {
    let (sg, (s, c), h) = (face_sign(&m.w[pa.w], pa), pa.angle.to_radians().sin_cos(), PATCH / 2.0);
    let at = |xi: f64, eta: f64| (pa.u + xi * c - eta * s, pa.v + sg * (xi * s + eta * c));
    (0..10).map(|k| { let f = -h + h * (k / 2) as f64 / 2.0; (0..=12).map(|i| { let g = -h + h * i as f64 / 6.0; if k % 2 == 0 { at(g, f) } else { at(f, g) } }).collect() }).collect()
}
/// Strain along the patch edge a1 and across it, a2, the principal strains and their angles,
/// and the shear angle: Green-Lagrange strain from the deformation gradient, turned to the patch.
struct Strain { e11: f64, e22: f64, pr: [(f64, f64); 2], gam: f64 }
fn strain(p: &Pr, pa: &Patch) -> Strain {
    let (sg, h) = (face_sign(&p.m.w[pa.w], pa), 1e-3);
    let at = |du: f64, dv: f64| deform(p, pa.w, pa.u + du, pa.v + dv, 0.0, true);
    let (fu, fs) = (add([0.0; 3], sub(at(h, 0.0), at(-h, 0.0)), 0.5 / h), add([0.0; 3], sub(at(0.0, sg * h), at(0.0, -sg * h)), 0.5 / h));
    let e = [(dot(fu, fu) - 1.0) / 2.0, dot(fu, fs) / 2.0, (dot(fs, fs) - 1.0) / 2.0];
    let (s, c) = pa.angle.to_radians().sin_cos();
    let e11 = c * c * e[0] + 2.0 * c * s * e[1] + s * s * e[2];
    let e22 = s * s * e[0] - 2.0 * c * s * e[1] + c * c * e[2];
    let e12 = (c * c - s * s) * e[1] + c * s * (e[2] - e[0]);
    let (mid, r, an) = ((e11 + e22) / 2.0, ((e11 - e22) / 2.0).hypot(e12), 0.5 * (2.0 * e12).atan2(e11 - e22));
    let gam = PI / 2.0 - (2.0 * e12 / ((1.0 + 2.0 * e11) * (1.0 + 2.0 * e22)).max(1e-9).sqrt()).clamp(-1.0, 1.0).acos();
    Strain { e11, e22, pr: [(mid + r, an), (mid - r, an + PI / 2.0)], gam }
}
fn strain_word(e: f64) -> String {
    if e.abs() < 0.002 { return "no change".into() }
    format!("{}{}", if e > 0.0 { "stretching" } else { "shortening" }, if e.abs() > 0.03 { ", strongly" } else { "" })
}
fn shear_word(g: f64) -> &'static str { if g.abs() < 0.002 { "none" } else if g.abs() < 0.03 { "small" } else { "clear" } }
```

```rust
//| caption: Drawing: an orthographic view, faces shaded and sorted far to near, then the arrows and the inset. Only M and L paths, so the PDF export reads them too.
/// The view: right, up and towards-the-viewer unit vectors, scale and origin on the 640 × 400 figure.
struct Cam { r: V, u: V, d: V, k: f64, o: (f64, f64) }
impl Cam { fn p(&self, q: V) -> (f64, f64, f64) { (self.o.0 + self.k * dot(q, self.r), self.o.1 - self.k * dot(q, self.u), dot(q, self.d)) } }
/// Fit a fixed box round the shape, grown to hold the deformed points, so the frame stays still as loads change.
fn cam(st: &Setup, pts: &[V]) -> Cam {
    let ((sy, cy), (sp, cp)) = (st.turn.to_radians().sin_cos(), st.tilt.to_radians().sin_cos());
    let (r, u) = ([cy, 0.0, -sy], [-sp * sy, cp, -sp * cy]);
    let (lo, hi) = if st.s < 3 { ([-0.3, -1.7, -1.0], [7.1, 1.7, 1.0]) } else { ([-2.8, -1.4, -0.3], [2.8, 1.4, 0.5]) };
    let corners = (0..8).map(|i| [[lo[0], hi[0]][i & 1], [lo[1], hi[1]][i >> 1 & 1], [lo[2], hi[2]][i >> 2]]);
    let b = corners.chain(pts.iter().copied()).fold([f64::MAX, f64::MIN, f64::MAX, f64::MIN], |b, q| { let (x, y) = (dot(q, r), dot(q, u)); [b[0].min(x), b[1].max(x), b[2].min(y), b[3].max(y)] });
    let k = (600.0 / (b[1] - b[0])).min(370.0 / (b[3] - b[2]));
    Cam { r, u, d: [cp * sy, sp, cp * cy], k, o: (320.0 - k * (b[0] + b[1]) / 2.0, 200.0 + k * (b[2] + b[3]) / 2.0) }
}
/// Path data through points on the figure.
fn d(p: &[(f64, f64)]) -> String { p.iter().enumerate().map(|(i, q)| format!("{}{:.0} {:.0}", if i == 0 { 'M' } else { 'L' }, q.0, q.1)).collect() }
/// A polyline with an arrowhead at its end.
fn arrow(p: &[(f64, f64)], class: &str, w: f64) -> String {
    let (a, b) = (p[p.len() - 2], p[p.len() - 1]);
    let an = (b.1 - a.1).atan2(b.0 - a.0);
    let h = |s: f64| (b.0 - 8.0 * (an + s).cos(), b.1 - 8.0 * (an + s).sin());
    format!("<path class=\"{class}\" style=\"stroke-width:{w}\" d=\"{}L{:.1} {:.1}{}\"></path>", d(p), h(0.45).0, h(0.45).1, d(&[b, h(-0.45)]))
}
/// The patch flattened into its own frame, a1 right and a2 up, rigid rotation removed and the
/// change of shape enlarged but softly limited: paths, then text.
fn inset(st: &Strain, angle: f64) -> (String, String) {
    let (x0, y0, w) = (6.0, 268.0, 126.0);
    let (k, cx, cy) = (w * 0.26, x0 + w / 2.0, y0 + w / 2.0 + 6.0);
    let soft = |e: f64| 0.32 * (4.0 * e / 0.32).tanh();
    let ((sn, cs), sf) = (st.pr[0].1.sin_cos(), [soft(st.pr[0].0), soft(st.pr[1].0)]);
    let l = sf.map(|e| (1.0 + 2.0 * e).max(0.05).sqrt());
    let u = [cs * cs * l[0] + sn * sn * l[1], cs * sn * (l[0] - l[1]), sn * sn * l[0] + cs * cs * l[1]];
    let at = |x: f64, y: f64| (cx + k * (u[0] * x + u[1] * y), cy - k * (u[1] * x + u[2] * y));
    let line = |p: &[(f64, f64)], class: &str, style: &str| format!("<path class=\"{class}\" style=\"{style}\" d=\"{}\"></path>", d(p));
    let (sa, ca) = angle.to_radians().sin_cos();
    let (ix, iy) = (x0 + 16.0, y0 + 14.0);
    let mut o = format!("<rect x=\"{x0}\" y=\"{y0}\" width=\"{w}\" height=\"{w}\" rx=\"6\" style=\"fill:var(--bg);stroke:var(--line);stroke-width:1\"></rect>");
    o += &line(&[(ix - 9.0 * ca, iy - 9.0 * sa), (ix + 9.0 * ca, iy + 9.0 * sa)], "l3", "stroke-width:1");
    o += &line(&[(cx - k, cy - k), (cx + k, cy - k), (cx + k, cy + k), (cx - k, cy + k), (cx - k, cy - k)], "l3", "stroke-width:1;stroke-dasharray:3 3");
    for f in [-0.5, 0.0, 0.5] { o += &(line(&[at(f, -1.0), at(f, 1.0)], "l1", "stroke-width:1;opacity:.45") + &line(&[at(-1.0, f), at(1.0, f)], "l1", "stroke-width:1;opacity:.45")) }
    o += &line(&[at(-1.0, -1.0), at(1.0, -1.0), at(1.0, 1.0), at(-1.0, 1.0), at(-1.0, -1.0)], "l1", "stroke-width:2.2");
    let mut text = format!("<text x=\"{:.1}\" y=\"{:.1}\" style=\"fill:var(--muted)\">span</text>", ix + 14.0, iy + 4.0);
    // The shear angle: an arc from where the edge would be without shear to where it is.
    let (p0, e1, e2) = (at(-1.0, -1.0), at(1.0, -1.0), at(-1.0, 1.0));
    let (rf, a2, r) = ((e1.1 - p0.1).atan2(e1.0 - p0.0) - PI / 2.0, (e2.1 - p0.1).atan2(e2.0 - p0.0), 0.75 * k);
    if st.gam.abs() > 0.002 {
        o += &line(&[p0, (p0.0 + 1.25 * r * rf.cos(), p0.1 + 1.25 * r * rf.sin())], "l3", "stroke-width:1;stroke-dasharray:2 2");
        o += &line(&(0..=12).map(|i| { let a = rf.min(a2) + (rf - a2).abs() * i as f64 / 12.0; (p0.0 + r * a.cos(), p0.1 + r * a.sin()) }).collect::<Vec<_>>(), "l1", "stroke-width:1.6");
        let mid = (rf + a2) / 2.0;
        write!(text, "<text x=\"{:.1}\" y=\"{:.1}\" style=\"fill:var(--warm);font-style:italic\">γ</text>", (p0.0 + r * rf.cos().min(a2.cos()) - 11.0).max(x0 + 2.0), p0.1 + r * mid.sin() + 4.0).unwrap();
    }
    // Principal directions: arrows out where the patch stretches, in where it shortens.
    let peak = sf[0].abs().max(sf[1].abs()).max(1e-9);
    for (i, e) in sf.into_iter().enumerate().filter(|e| e.1.abs() >= 0.002) {
        let len = k * (0.35 + 0.5 * e.abs() / peak) * (e.abs() / 0.02 + 0.3).min(1.0);
        let (dx, dy) = (st.pr[i].1.cos(), -st.pr[i].1.sin());
        for g in [1.0, -1.0] {
            let (b, t) = ((cx + g * dx * k * 0.26, cy + g * dy * k * 0.26), (cx + g * dx * (k * 0.26 + len), cy + g * dy * (k * 0.26 + len)));
            o += &if e > 0.0 { arrow(&[b, t], "l0", 2.0) } else { arrow(&[t, b], "l2", 2.0) };
        }
    }
    (o, text)
}

/// The figure and the lines under it.
fn figure(st: Setup) {
    let m = model(st.s);
    let (p, pa) = (prepare(&m, st), patch(&m, &st));
    let walls: Vec<(usize, Vec<f64>, Vec<Vec<V>>)> = m.w.iter().enumerate().filter(|(_, w)| (w.name != "stringer" || st.stringers) && (w.name != "frame" || st.frames)).map(|(wi, w)| {
        let us: Vec<f64> = (0..=w.nu).map(|i| w.u.0 + (w.u.1 - w.u.0) * i as f64 / w.nu as f64).collect();
        let g = us.iter().map(|&u| w.vs.iter().map(|&v| deform(&p, wi, u, v, 0.0, false)).collect()).collect();
        (wi, us, g)
    }).collect();
    // The loads, drawn as arrows; the figure is fitted round them too.
    let mut arrows: Vec<Vec<V>> = vec![];
    let mut arr = |pts: Vec<V>| arrows.push(pts);
    let (nn, vv, tt, mm, qq) = (st.on(0), st.on(1), st.on(2), st.on(3), st.on(4));
    if st.s < 3 {
        // The tip loads, at the deformed axis: pull or push, shear, torque and moment.
        let [ax, ay, th] = axis(&p, L);
        let (o, t, n) = ([ax, ay, 0.0], [th.cos(), th.sin(), 0.0], [-th.sin(), th.cos(), 0.0]);
        let ring = |c: V, rad: f64, a0: f64, a1: f64, e1: V, e2: V| (0..=24).map(|i| { let a = a0 + (a1 - a0) * i as f64 / 24.0; add(add(c, e1, rad * a.cos()), e2, rad * a.sin()) }).collect::<Vec<V>>();
        if nn.abs() >= 0.02 { let (a, b) = (add(o, t, 0.3), add(o, t, 0.5 + 0.6 * nn.abs())); arr(if nn > 0.0 { vec![a, b] } else { vec![b, a] }) }
        if vv.abs() >= 0.02 { arr(vec![add(add(o, t, 0.15), n, sgn(vv) * 0.8), add(add(o, t, 0.15), n, sgn(vv) * (1.0 + 0.6 * vv.abs()))]) }
        if tt.abs() >= 0.02 { arr(ring(add(o, t, 0.25), 0.95, 0.0, sgn(tt) * (0.5 + 1.0 * tt.abs()) * PI, n, [0.0, 0.0, 1.0])) }
        if mm.abs() >= 0.02 { let a = sgn(mm) * (0.25 + 0.3 * mm.abs()) * PI; arr(ring(add(o, t, 0.3), 0.5, -a, a, t, n)) }
    } else {
        // The edge loads of the panel: pull or push at the ends, shear along all four edges.
        let (ha, hb) = (PA / 2.0 * (1.0 + p.ea), PB / 2.0);
        for sx in [-1.0, 1.0] {
            if nn.abs() >= 0.02 { for y in [-0.85, 0.85] { let (a, b) = ([sx * (ha + 0.1), y, 0.0], [sx * (ha + 0.3 + 0.4 * nn.abs()), y, 0.0]); arr(if nn > 0.0 { vec![a, b] } else { vec![b, a] }) } }
            let l = sgn(qq) * (0.25 + 0.4 * qq.abs());
            if qq.abs() >= 0.02 { arr(vec![[-sx * l, sx * (hb + 0.2), 0.0], [sx * l, sx * (hb + 0.2), 0.0]]); arr(vec![[sx * (PA / 2.0 + 0.2), -sx * l, 0.0], [sx * (PA / 2.0 + 0.2), sx * l, 0.0]]) }
        }
    }
    let c = cam(&st, &walls.iter().flat_map(|w| w.2.iter().flatten().copied()).chain(arrows.iter().flatten().copied()).collect::<Vec<_>>());
    let light = { let l = add(add(c.d, c.u, 0.6), c.r, -0.4); add([0.0; 3], l, 1.0 / dot(l, l).sqrt()) };
    let (mut items, mut faces, mut ghost): (Vec<(f64, String, String)>, Vec<(f64, String, usize, f64)>, String) = (vec![], vec![], String::new());
    for (wi, us, g) in &walls {
        let (w, wi) = (&m.w[*wi], *wi);
        for i in 0..w.nu { for j in 0..w.vs.len() - 1 {
            let q = [g[i][j], g[i + 1][j], g[i + 1][j + 1], g[i][j + 1], g[i][j]];
            let n = cross(sub(q[2], q[0]), sub(q[3], q[1]));
            let lit = dot(n, light).abs() / dot(n, n).sqrt().max(1e-12);
            let val = if st.map > 0 { map_value(&p, wi, (us[i] + us[i + 1]) / 2.0, (w.vs[j] + w.vs[j + 1]) / 2.0) } else { 0.0 };
            let s: Vec<(f64, f64, f64)> = q.iter().map(|&x| c.p(x)).collect();
            faces.push((s[..4].iter().map(|x| x.2).sum::<f64>() / 4.0, d(&s.iter().map(|x| (x.0, x.1)).collect::<Vec<_>>()), ((1.0 - lit) * 9.0).round() as usize, val));
        }}
        // The shape before the load, dashed: lines along at every second station and rings at six
        // places. It is drawn first, so it shows where the deformed shape has moved away.
        let r = |u: f64, v: f64| { let q = c.p(reference(w, u, v, 0.0).0); (q.0, q.1) };
        let (nv, every) = (w.vs.len() - if w.path.closed { 2 } else { 1 }, if w.name == "skin" { 4 } else { 2 });
        let mut line = |p: Vec<(f64, f64)>| write!(ghost, "<path class=\"gr\" d=\"{}\"></path>", d(&p)).unwrap();
        for j in (0..=nv).filter(|j| j % every == 0 || *j == nv) { line(us.iter().map(|&u| r(u, w.vs[j])).collect()) }
        for i in (0..=w.nu).filter(|i| i % (w.nu / 5).max(1) == 0 || *i == w.nu) { line(w.vs.iter().map(|&v| r(us[i], v)).collect()) }
    }
    // The faces: shaded by a light from the viewer's upper left, the map's size over them in the accent colour.
    let peak = faces.iter().fold(0.0f64, |a, f| a.max(f.3.abs()));
    for (z, dd, lv, val) in faces {
        let a = if peak > 1e-9 { (50.0 * val.abs() / peak).round() } else { 0.0 };
        let fill = if a > 0.0 { format!("color-mix(in srgb,var(--accent) {a}%,var(--f{lv}))") } else { format!("var(--f{lv})") };
        items.push((z, format!("class=\"gr\" style=\"fill:{fill}\""), dd));
    }
    // The patch, on the outer face: one depth a little towards the viewer, so that it sorts above
    // its wall, and a halo of the page colour under its lines, so that it shows on a dark map.
    let ls: Vec<Vec<(f64, f64, f64)>> = patch_lines(&m, &pa).iter().map(|l| l.iter().map(|&(u, v)| c.p(deform(&p, pa.w, u, v, m.w[pa.w].t / 2.0, false))).collect()).collect();
    let z = ls.iter().flatten().fold(f64::MIN, |a, x| a.max(x.2)) + 0.05;
    for (k, l) in ls.iter().enumerate() {
        let (w, dd) = (if k < 2 || k > 7 { 2.5 } else { 1.2 }, d(&l.iter().map(|x| (x.0, x.1)).collect::<Vec<_>>()));
        items.push((z - 1e-9, format!("class=\"gr\" style=\"stroke:var(--bg);stroke-opacity:1;stroke-width:{}\"", w + 2.0), dd.clone()));
        items.push((z, format!("class=\"l1\" style=\"stroke-opacity:1;stroke-width:{w}\""), dd));
    }
    let top: String = arrows.iter().map(|a| arrow(&a.iter().map(|&q| { let r = c.p(q); (r.0, r.1) }).collect::<Vec<_>>(), "l3", 2.0)).collect();
    let mut block = String::new();
    if st.s < 3 {
        // The clamp: a block behind x = 0, drawn first or last as the view sees it.
        let corner = |i: usize| [[-0.27, -0.02][i & 1], [-0.9, 0.9][i >> 1 & 1], [-1.0, 1.0][i >> 2]];
        let sides = [([0, 2, 6, 4], [-1.0, 0.0, 0.0]), ([1, 3, 7, 5], [1.0, 0.0, 0.0]), ([0, 1, 5, 4], [0.0, -1.0, 0.0]), ([2, 3, 7, 6], [0.0, 1.0, 0.0]), ([0, 1, 3, 2], [0.0, 0.0, -1.0]), ([4, 5, 7, 6], [0.0, 0.0, 1.0])];
        block = sides.iter().filter(|f| dot(f.1, c.d) > 0.0).map(|f| format!("<path class=\"gr\" style=\"fill:var(--f{});stroke:var(--fg2)\" d=\"{}\"></path>", 9 - (3.0 * dot(f.1, light).abs()).round() as usize,
            d(&f.0.iter().chain(&f.0[..1]).map(|&i| { let q = c.p(corner(i)); (q.0, q.1) }).collect::<Vec<_>>()))).collect();
    }
    let sn = strain(&p, &pa);
    let (ip, it) = inset(&sn, pa.angle);
    let info = &raw()["structures"][st.s];
    items.sort_by(|a, b| a.0.total_cmp(&b.0));
    let mut svg = format!("<svg viewBox=\"0 0 640 400\" role=\"img\" aria-label=\"{}, deformed\" style=\"display:block;width:100%;height:auto;font:13px var(--sans);stroke-linejoin:round;stroke-linecap:round", label(info));
    for i in 0..10 { write!(svg, ";--f{i}:color-mix(in srgb,var(--fg) {}%,var(--bg))", 6 + 3 * i).unwrap() }
    let behind = c.d[0] > 0.0; // the clamp is behind the member
    write!(svg, "\"><g style=\"fill:none;stroke:var(--muted);stroke-width:.5\">{}<g style=\"stroke:var(--fg2);stroke-width:.7;stroke-dasharray:3 2\">{ghost}</g><g style=\"stroke:var(--fg);stroke-opacity:.35\">", if behind { &block } else { "" }).unwrap();
    // Far to near; neighbours with the same look share one path.
    for (k, i) in items.iter().enumerate() {
        if k == 0 || items[k - 1].1 != i.1 { write!(svg, "{}<path {} d=\"", if k > 0 { "\"></path>" } else { "" }, i.1).unwrap() }
        svg += &i.2;
    }
    if !items.is_empty() { svg += "\"></path>" }
    html(&(svg + "</g>" + if behind { "" } else { &block } + &top + &ip + "</g>" + &it + "</svg>"));

    // In words: the loads, the effects on show with their basis, the patch and the map.
    let names = ["axial", "shear", "torsion", "bending", "in-plane shear"];
    let words = [["compression", "tension"], ["down", "up"], ["clockwise", "anticlockwise"], ["tip down", "tip up"], ["one way", "the other way"]];
    let (mut on, mut off) = (vec![], vec![]);
    for k in (0..5).filter(|&k| st.ld[k].abs() >= 0.02) {
        let a = st.ld[k].abs();
        if st.on(k) == 0.0 { off.push(names[k]) } else { on.push(format!("{} {}, {}", names[k], words[k][(st.ld[k] > 0.0) as usize], if a < 0.34 { "light" } else if a < 0.67 { "moderate" } else { "heavy" })) }
    }
    println!("{}: {}. Shapes drawn {:.1} times larger.{}", label(info), if on.is_empty() { "no load".into() } else { on.join("; ") }, st.ex, if off.is_empty() { String::new() } else { format!(" It takes no {} here.", off.join(" or ")) });
    let o = |k: usize| st.on(k).abs() > 0.005;
    let fx: Vec<&str> = [(o(0), "axial"), (o(0), "poisson"), (o(3), "bending"), (o(1), "shear"), (o(4), "inplane"), (o(2), "torsion"), (o(2) && st.s > 0, "warping"), (o(3) && st.s == 1, "shearlag"), (buckled(&p).iter().any(|b| b.1 > 1.0), "buckling")]
        .into_iter().filter(|e| e.0).map(|e| e.1).collect();
    println!("Showing: {}.", if fx.is_empty() { "nothing, with no load".into() } else { fx.iter().map(|e| effect(e)).collect::<Vec<_>>().join("; ") });
    let (w, along) = (&m.w[pa.w], (pa.u - m.w[pa.w].u.0) / (m.w[pa.w].u.1 - m.w[pa.w].u.0));
    println!("Patch {} on the {}, turned {}°: along it, a1 {}; across it, a2 {}; shear angle {}.", if along < 0.25 { "near the clamp" } else if along > 0.75 { "near the tip" } else { "mid-span" }, w.name, pa.angle.round(), strain_word(sn.e11), strain_word(sn.e22), shear_word(sn.gam));
    if st.map > 0 { println!("Map: the size of the {}; the stronger the shade, the larger.", ["", "axial strain", "shear strain", "movement along the span"][st.map]) }
}
```

# Notes and sources

This story ports the [Structural Distortion Explorer](https://github.com/yujieteo/visuals/tree/02fcb4f8fb17fca5f97b0049c323b7bf7b392d81/viz/distortion) of the visuals repository: its kinematics, constants and presets, drawn here as SVG instead of three.js. The labels, the notice and the basis of each effect come from its raw.json. Analytic effects follow thin-walled beam theory: Euler-Bernoulli bending, Saint-Venant torsion, Vlasov warping and the Bredt cell. Shear lag, the buckling thresholds and the wrinkles are assumed shapes.

```rust
//| caption: The effects, as raw.json labels them.
println!("{}", raw()["nature"].as_str().unwrap_or(""));
let _rows: Vec<Vec<String>> = raw()["effects"].as_array().unwrap().iter().map(|e| vec![label(e).into(), if e["basis"] == "assumed" { "assumed shape".into() } else { "analytic".into() }, e["note"].as_str().unwrap_or("").into()]).collect();
table(&["Effect", "Basis", "Note"], &_rows);
```
