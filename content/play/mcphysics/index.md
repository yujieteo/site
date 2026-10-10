---
title: Monte Carlo in statistical physics
summary: Leave a metastable well, cool by simulated annealing, cross barriers by parallel tempering, and drive BTW and Manna sandpiles, each against the exact values of the finite system.
thumb: 9127
theme: site
seed: 20261015
---

This notebook runs Monte Carlo experiments from statistical physics on small finite systems. The first family moves a Metropolis chain on an energy landscape: the time to leave a metastable well, simulated annealing with four cooling schedules, and parallel tempering against one chain at a low temperature. The second family drives sandpiles slowly and records their avalanches: the BTW and Manna rules, finite-size effects and coarse-graining. Each landscape has an exact analysis on its grid, and each sandpile has exact values from Dhar's theory, so the notebook can show when a run agrees with the theory and when it does not.

<!-- skill: This notebook ports the statistical-physics laboratory (physics.json) of visuals/viz/monte-carlo-workbench. Read the data only through data!, from the file pinned in visuals.lock; never copy data into this file. The engine is the module physics in "The code". -->

<!-- skill: The checks run natively at each build and not in the page: every example and every example of a method card runs with its own settings, and each result with an exact reference meets it within 6 standard errors or inside its interval, except the designed failures (one chain at T_min, and parallel tempering with 2 temperatures). A run in the page must stay well under a second: the examples use the smaller native sizes of the engine. -->

```toml
serde_json = "=1.0.151"
```

```rust
//| caption: What a finite lattice can show.
println!("{}", fit(&cat().statement));
```

## An example

The 6 examples come in 2 families. In the landscape examples, a Metropolis chain moves on a 61 × 61 grid of [−2, 2]², and it accepts a step with probability min(1, exp(−ΔV/T)). In the sandpile examples, the page adds grains to a lattice one drive at a time and relaxes the lattice completely after each drive.

```rust
//| caption: The example.
let _c = cat();
let ph_ex: &physics::Example = &_c.examples[choice("Example", &_c.examples.iter().map(|x| format!("{}: {}", if x.family == "sandpile" { "Sandpile" } else { "Landscape" }, fit(&x.title))).collect::<Vec<_>>(), 0)];
```

```rust
//| caption: The question, the model and what to observe.
about(ph_ex, &ph_state);
```

## Settings

The settings start at the values of the example. The sizes are powers of 2: a setting of k gives 2^k replicates, steps, chains or drives. Each replicate or chain reads its own random stream, so the same seed gives the same run.

```rust
//| caption: The settings of the example.
let _own = physics::State::of(ph_ex, &serde_json::json!({})).unwrap();
let _extra: serde_json::Map<String, Value> = fields_of(&ph_ex.id).iter().map(|k| (k.to_string(), control(&ph_ex.id, k, &_own))).collect();
let ph_seed = slider("Seed", 0.0, 9999.0, 1.0, 1.0);
let ph_state = cat().state(&ph_ex.id, &Value::Object(_extra)).map(|mut s| { s.seed = ph_seed; s });
```

```rust
//| caption: The size of the run.
match ph_state.as_ref().map_err(String::clone).and_then(physics::job_of) {
    Ok(j) => println!("{}", sizes_text(&j)),
    Err(e) => println!("The setting has errors: {}", fit(&e)),
}
```

## Results

Each row gives an estimate with its 95 % interval and, where one exists, the exact value of the finite system. The claim says what kind of statement the row is: a theorem holds for the stated dynamics, a numerical value comes from a solve, and an observation holds only for this finite run.

```rust
//| caption: Run the experiment.
let ph_out = memo("physics", format!("{ph_state:?}"), || ph_state.clone().and_then(|s| physics::run_state(&s)));
```

```rust
//| caption: The results.
match &*ph_out {
    Err(e) => println!("The setting has errors, so the experiment does not run: {}", fit(e)),
    Ok(o) => results(o),
}
```

## Figures

Each example has its own figures. The landscape shows the energy as contours, the minima, the minimax route from the trap to the global minimum and the states of the run. The other figures plot the estimates of the run against the exact values.

```rust
//| caption: The figure.
let _figs = figs(&ph_ex.id);
let ph_plot = _figs[choice(&format!("Figure of {}", ph_ex.id), &_figs.iter().map(|f| plot_name(f)).collect::<Vec<_>>(), 0)];
let ph_view = figure_controls(&ph_ex.id, ph_state.as_ref().ok());
if let (Ok(s), Ok(o)) = (&ph_state, &*ph_out) { figure(s, o, ph_plot, ph_view) }
```

## Diagnostics

The diagnostics say whether the run can support its estimates: censored exit times, Hajek's condition and the paired differences of the schedules, the swap rates of parallel tempering, and for a sandpile the grain balance, the burning test and the mean height in each half of the run.

```rust
//| caption: The diagnostics.
if let Ok(o) = &*ph_out { diagnostics(ph_ex, o) }
```

## Methods

Each card gives the estimator, its assumptions and settings, an example where the method works, an example where it fails, and a comparison with another method. The settings of a card are changes to the settings of its example.

```rust
//| caption: The method card.
let _ms = &cat().methods;
let ph_card = &_ms[choice("Method card", &_ms.iter().map(|m| fit(&m.name)).collect::<Vec<_>>(), 0)];
html(&card(ph_card));
```

# The code

The checks run natively at each build. The data cell reads the pinned file of visuals, then come the helpers of the page and the engine.

```rust
//| caption: The checks.
/// The checks: the text of the data in the site's fonts, then every example and every example of a method card with its
/// own settings against its exact references, the designed failures as the catalogue states them, and the grain balance.
fn checks() {
    let fits = |t: &str| fit(t).chars().all(|c| FONT.iter().any(|r| (r.0..=r.1).contains(&(c as u32))));
    let raw: Value = serde_json::from_slice(DATA).unwrap();
    let mut texts = vec![];
    strings(&raw, "", &mut texts);
    for (key, t) in &texts { assert!(*key == "estimator" || fits(t), "{key}: {}", fit(t)) }
    let c = cat();
    assert_eq!((c.examples.len(), c.methods.len()), (6, 5));
    let mut cases: Vec<(String, &str, Value)> = c.examples.iter().map(|x| (format!("{} (default)", x.id), x.id.as_str(), serde_json::json!({}))).collect();
    for m in &c.methods { for (p, k) in m.links() { cases.push((format!("{} / {p}", m.id), k.example.as_str(), k.settings.clone())) } }
    let mut page = vec![];
    for (name, ex, extra) in &cases {
        let s = c.state(ex, extra).unwrap_or_else(|e| panic!("{name}: {e}"));
        let o = physics::run_state(&s).unwrap_or_else(|e| panic!("{name}: {e}"));
        for r in &o.rows {
            page.extend([r.label.clone(), r.iv.how.clone(), r.ref_how.clone()]);
            if !r.ref_how.starts_with("exact") || r.label.contains("one chain") || (name.starts_with("tempering / failure") && r.label.contains("parallel tempering")) { continue }
            let (Some(est), Some(se), Some(x)) = (r.iv.est, r.iv.se, r.reference) else { continue };
            // Priezzhev's heights hold on the infinite lattice; a lattice of L ≥ 32 differs by less than 0.004.
            let heights = r.label.starts_with("P(height");
            if heights && (r.label.ends_with("L = 8") || r.label.ends_with("L = 16")) { continue }
            let inside = r.iv.lo.is_some_and(|lo| lo <= x) && r.iv.hi.is_some_and(|hi| x <= hi);
            assert!((est - x).abs() <= 6.0 * se + if heights { 0.004 } else { 0.0 } || inside, "{name}: {}: {est} ± {se} against {x}", r.label);
        }
        match &o.detail {
            physics::Detail::Temper(d) => {
                let g = d.basins.iter().find(|b| b.m == o.land.as_ref().unwrap().global).unwrap();
                assert!((g.one.est.unwrap() - g.exact).abs() > 0.3, "{name}: the single chain at T_min misses the global well");
            }
            physics::Detail::Sand(d) => {
                assert!(d.sizes.iter().all(|s| s.balance.exact), "{name}: grain balance");
                page.extend(d.dynamics.clone());
            }
            _ => {}
        }
    }
    page.extend(physics::LANDSCAPES.iter().flat_map(|l| [l.1.to_string(), l.3.to_string()]));
    page.extend(physics::FIELDS.iter().map(|f| f.1.to_string()));
    for t in &page { assert!(fits(t.as_str()), "not in the fonts: {}", fit(t)) }
}
```

```rust
//| caption: The data.
use engine::doc::{esc, mathml};
use serde_json::Value;
use std::{any::Any, collections::BTreeMap, sync::{Arc, Mutex, OnceLock}};
const DATA: &[u8] = data!("viz/monte-carlo-workbench/data/physics.json");
static CAT: OnceLock<physics::Catalogue> = OnceLock::new();
/// The catalogue of physics.json: the statement, the examples and the method cards.
fn cat() -> &'static physics::Catalogue { CAT.get_or_init(|| physics::catalogue(std::str::from_utf8(DATA).unwrap()).unwrap()) }
static MEMO: Mutex<BTreeMap<&str, (String, Arc<dyn Any + Send + Sync>)>> = Mutex::new(BTreeMap::new());
/// The value of f, kept between the runs of the page while its key stays the same: a control of a figure does not run
/// the experiment again.
fn memo<T: Send + Sync + 'static>(slot: &'static str, key: String, f: impl FnOnce() -> T) -> Arc<T> {
    let kept = MEMO.lock().unwrap().get(slot).filter(|x| x.0 == key).map(|x| x.1.clone());
    if let Some(v) = kept.and_then(|v| v.downcast::<T>().ok()) { return v }
    let v = Arc::new(f());
    MEMO.lock().unwrap().insert(slot, (key, v.clone()));
    v
}

/// The characters of the site's text fonts (scripts/fonts.sh).
const FONT: [(u32, u32); 22] = [
    (0x20, 0x7e), (0xa0, 0xff), (0x131, 0x131), (0x152, 0x153), (0x160, 0x161), (0x178, 0x178), (0x17d, 0x17e), (0x391, 0x3a9),
    (0x3b1, 0x3c9), (0x2013, 0x2014), (0x2018, 0x201d), (0x2022, 0x2022), (0x2026, 0x2026), (0x2032, 0x2033), (0x2190, 0x2193),
    (0x2212, 0x2212), (0x2248, 0x2248), (0x2260, 0x2260), (0x2264, 0x2265), (0x221e, 0x221e), (0xb7, 0xb7), (0xa, 0xa),
];
/// Every string of a value, with its key.
fn strings<'a>(v: &'a Value, key: &'a str, out: &mut Vec<(&'a str, &'a str)>) {
    match v {
        Value::String(t) => out.push((key, t)),
        Value::Array(a) => a.iter().for_each(|x| strings(x, key, out)),
        Value::Object(o) => o.iter().for_each(|(k, x)| strings(x, k, out)),
        _ => {}
    }
}
/// Text from the data in the site's fonts, which have no sub- or superscript digits, √ or ⟨ ⟩: X₁ becomes X_1, 10⁻⁶
/// 10^-6, √n sqrt n, ⟨s⟩ <s>.
fn fit(t: &str) -> String {
    const SUB: &str = "₀₁₂₃₄₅₆₇₈₉";
    const SUP: &str = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ";
    let plain = |c: char, set: &str| "0123456789+-n".chars().nth(set.chars().position(|x| x == c).unwrap()).unwrap();
    let (mut out, mut cs) = (String::new(), t.chars().peekable());
    while let Some(c) = cs.next() {
        if SUB.contains(c) || SUP.contains(c) {
            let set = if SUB.contains(c) { SUB } else { SUP };
            let mut run = String::from(c);
            while let Some(&d) = cs.peek().filter(|d| set.contains(**d)) { run.push(d); cs.next(); }
            if set == SUP && run.chars().all(|d| "¹²³".contains(d)) { out += &run; continue }
            out.push(if set == SUB { '_' } else { '^' });
            out.extend(run.chars().map(|d| plain(d, set)));
            continue;
        }
        let rep = match c {
            '√' if cs.peek() == Some(&'(') => "sqrt",
            '√' => "sqrt ",
            '\u{304}' => "bar",
            '\u{302}' => "hat",
            '⟨' => "<",
            '⟩' => ">",
            '∑' => "sum ",
            c => { out.push(c); continue }
        };
        out += rep;
    }
    out
}
fn bullets<S: AsRef<str>>(v: &[S]) -> String { format!("<ul>{}</ul>", v.iter().map(|x| format!("<li>{}</li>", esc(&fit(x.as_ref())))).collect::<String>()) }
fn para(t: &str) -> String { format!("<p>{}</p>", esc(&fit(t))) }
/// A number with 4 significant digits.
fn fmt(x: f64) -> String {
    if !x.is_finite() { return if x.is_nan() { "–".into() } else if x > 0.0 { "∞".into() } else { "−∞".into() } }
    if x == 0.0 { return "0".into() }
    let e = x.abs().log10().floor() as i32;
    let t = if (-4..6).contains(&e) { format!("{:.*}", (3 - e).max(0) as usize, x) } else { format!("{:.3e}", x) };
    let t = if t.contains('.') && !t.contains('e') { t.trim_end_matches('0').trim_end_matches('.').to_string() } else { t };
    t.replace('-', "−")
}
fn opt(x: Option<f64>) -> String { x.map_or("–".into(), fmt) }
fn lg(x: f64) -> f64 { if x > 0.0 { x.log10() } else { f64::NAN } }
```

```rust
//| caption: The pages of the physics laboratory.
const PLOTS: [(&str, &str); 18] = [("land", "Landscape"), ("arrhenius", "Arrhenius plot"), ("route", "Barrier"), ("exits", "Exit-time law"), ("schedules", "Schedules"),
    ("energy", "Energy"), ("success", "Success"), ("basins", "Well probabilities"), ("swaps", "Swap rates"), ("ladder", "Replica paths"), ("grid", "Lattice"),
    ("sizes", "Size laws"), ("heights", "Heights"), ("collapse", "Collapse"), ("moments", "Moments"), ("mean", "Mean size"), ("blockvar", "Block variance"), ("boxes", "Box counts")];
const SCHED: [(&str, &str); 4] = [("log", "Logarithmic"), ("geometric", "Geometric"), ("linear", "Linear"), ("quench", "Quench")];
fn plot_name(id: &str) -> &'static str { PLOTS.iter().find(|p| p.0 == id).map_or("", |p| p.1) }
fn sched_name(id: &str) -> &'static str { SCHED.iter().find(|p| p.0 == id).map_or("", |p| p.1) }
fn figs(id: &str) -> Vec<&'static str> {
    match id {
        "metastable-exit" => vec!["land", "arrhenius", "route", "exits"],
        "annealing-schedules" => vec!["land", "success", "schedules", "energy"],
        "tempering-wells" => vec!["land", "basins", "swaps", "ladder"],
        "sandpile-btw" => vec!["sizes", "grid", "heights"],
        "finite-size" => vec!["collapse", "sizes", "moments", "mean"],
        _ => vec!["grid", "blockvar", "boxes"],
    }
}
/// The settings of an example, in the order of the page.
fn fields_of(id: &str) -> Vec<&'static str> {
    let sand = ["ph_rule", "ph_bc", "ph_drive", "ph_g", "ph_eps", if id == "finite-size" { "ph_lmax" } else { "ph_l" }, "ph_drives", "ph_chains"];
    match id {
        "metastable-exit" => vec!["ph_land", "ph_tlo", "ph_thi", "ph_cap", "ph_reps"],
        "annealing-schedules" => vec!["ph_land", "ph_reps", "ph_t0", "ph_tend", "ph_kappa", "ph_steps"],
        "tempering-wells" => vec!["ph_land", "ph_reps", "ph_steps", "ph_tmin", "ph_tmax", "ph_k", "ph_inner", "ph_start"],
        _ => sand.to_vec(),
    }
}
fn pick_name(k: &str, v: &str) -> String {
    match (k, v) {
        ("ph_land", _) => physics::LANDSCAPES.iter().find(|l| l.0 == v).map_or(v.into(), |l| l.1.into()),
        ("ph_rule", "btw") => "BTW: a fixed toppling rule".into(),
        ("ph_rule", _) => "Manna: a random toppling rule".into(),
        ("ph_drive", "random") => "A site chosen at random".into(),
        ("ph_drive", _) => "The central site".into(),
        ("ph_start", "trap") => "Every chain starts at the trap".into(),
        ("ph_start", _) => "The chains start spread over the grid".into(),
        ("ph_lmax", _) => format!("L from 8 to {v}"),
        ("ph_b", _) => format!("b = {v}"),
        _ => { let mut c = v.chars(); c.next().map_or(String::new(), |f| f.to_uppercase().chain(c).collect()) }
    }
}
/// The control of one setting, at the example's value; it returns the value as JSON.
fn control(id: &str, k: &str, own: &physics::State) -> Value {
    let (_, label, f) = physics::FIELDS.iter().find(|x| x.0 == k).unwrap();
    match *f {
        physics::Field::Pick(vals, _) => {
            let at = vals.iter().position(|v| *v == own.text(k)).unwrap_or(0);
            let names: Vec<String> = vals.iter().map(|v| pick_name(k, v)).collect();
            let opts: Vec<String> = std::iter::once(format!("As the example sets: {}", names[at])).chain(names.iter().cloned()).collect();
            let i = choice(&format!("{} ({id})", fit(label)), &opts, 0);
            Value::from(vals[if i == 0 { at } else { i - 1 }])
        }
        physics::Field::Num { min, max, int, .. } => {
            let v = own.num(k);
            Value::from(slider(&format!("{} (the example sets {})", fit(label), fmt(v)), min, max, if int { 1.0 } else { 0.01 }, v))
        }
    }
}
/// The controls of the figures: the exponents τ and D of the collapse, and the block size b of the lattice.
fn figure_controls(id: &str, s: Option<&physics::State>) -> (f64, f64, usize) {
    let num = |k: &str, d: f64| s.map_or(d, |s| s.num(k));
    match id {
        "finite-size" => (slider("Collapse exponent τ", 1.0, 2.0, 0.01, num("ph_tau", 1.27)), slider("Collapse exponent D", 1.0, 4.0, 0.01, num("ph_d", 2.75)), 1),
        "sandpile-btw" | "coarse-graining" => {
            let opts = ["1", "2", "4", "8", "16"];
            let at = opts.iter().position(|b| *b == s.map_or("4", |s| s.text("ph_b"))).unwrap_or(2);
            (1.27, 2.75, opts[choice(&format!("Block size b of the lattice figure ({id})"), &opts.map(|b| format!("b = {b}")), at)].parse().unwrap())
        }
        _ => (1.27, 2.75, 1),
    }
}

/// The question, the model, the exact analysis of a landscape or the dynamics of a sandpile, and what to observe.
fn about(x: &physics::Example, s: &Result<physics::State, String>) {
    let mut h = para(&x.problem);
    match s.as_ref().map_err(String::clone).and_then(physics::job_of) {
        Ok(physics::Job::Sand(j)) => h += &bullets(&physics::dynamics(&j)),
        Ok(_) => {
            let id = s.as_ref().unwrap().text("ph_land");
            if let (Some(l), Ok(land)) = (physics::LANDSCAPES.iter().find(|l| l.0 == id), physics::landscape(id)) {
                let (g, t) = (physics::coords(land.global_node), physics::coords(land.trap_node));
                h += &format!("{}{}", mathml(l.2, true), bullets(&[format!("{}. {}", l.1, l.3), x.assumptions.clone(),
                    format!("The exact analysis of the grid finds {} local minima. The global minimum is at ({:.2}, {:.2}), with V = {:.3}. The trap is the other minimum with the largest stability level. It is at ({:.2}, {:.2}), with V = {:.3}, and its stability level is V_m = d* = {:.3}.",
                        land.minima.len(), g.0, g.1, land.v[land.global_node], t.0, t.1, land.v[land.trap_node], land.dstar)]));
            }
        }
        Err(_) => {}
    }
    html(&format!("{h}<p><strong>What to observe.</strong> {}</p>", esc(&fit(&x.observe))));
}

/// The size of a run in words.
fn sizes_text(j: &physics::Job) -> String {
    match j {
        physics::Job::Exit { temps, steps, reps, .. } => format!("{} replicates at each of {} temperatures ({}), at most {} steps each.", fmt(*reps), temps.len(), temps.iter().map(|t| fmt(*t)).collect::<Vec<_>>().join(", "), fmt(*steps)),
        physics::Job::Anneal { steps, reps, .. } => format!("{} replicates of {} steps for each of the 4 schedules, on the same random streams.", fmt(*reps), fmt(*steps)),
        physics::Job::Temper { replicas, sweeps, inner, reps, .. } => format!("{} independent chains of {} sweeps. Each sweep makes {} Metropolis steps at each of {} temperatures, then tries swaps.", fmt(*reps), fmt(*sweeps), fmt(*inner), fmt(*replicas)),
        physics::Job::Sand(s) => format!("{} independent chains for each of L = {}: a warm-up of 4L²/g drives, then {} recorded drives.", fmt(s.chains), s.sizes.iter().map(|l| fmt(*l)).collect::<Vec<_>>().join(", "), fmt(s.drives)),
    }
}

/// The result rows with their intervals, exact values and claims.
fn results(o: &physics::Out) {
    let rows: Vec<Vec<String>> = o.rows.iter().map(|r| {
        let iv = r.iv.lo.zip(r.iv.hi).map_or(String::new(), |(a, b)| format!("{} to {}. ", fmt(a), fmt(b)));
        let rf = r.reference.map_or("–".into(), |v| format!("{}{}", fmt(v), if r.ref_how.is_empty() { String::new() } else { format!(": {}", fit(&r.ref_how)) }));
        vec![format!("{}{}", fit(&r.label), if r.unit.is_empty() { String::new() } else { format!(" [{}]", r.unit) }), opt(r.iv.est), format!("{iv}{}", fit(&r.iv.how)), rf, r.tags.join(", ")]
    }).collect();
    table(&["Quantity", "Estimate", "95 % interval", "Exact value", "Claim"], &rows);
}

/// The energy in 3 shades where it is below its median, the minima, the minimax route and the states of the run.
fn landscape_figure(l: &physics::Land, o: &physics::Out) {
    let g = physics::GRID;
    let xy = |nodes: &[usize]| { let p: Vec<(f64, f64)> = nodes.iter().map(|&n| physics::coords(n)).collect(); (p.iter().map(|p| p.0).collect::<Vec<_>>(), p.iter().map(|p| p.1).collect::<Vec<_>>()) };
    let mut sorted = l.v.clone();
    sorted.sort_by(f64::total_cmp);
    let top = sorted[sorted.len() / 2];
    // Every second column and every third row of the grid, so that the dots stay apart.
    let mut p = Plot::new();
    for band in 0..3 {
        let (lo, hi) = (l.vmin + (top - l.vmin) * band as f64 / 3.0, l.vmin + (top - l.vmin) * (band + 1) as f64 / 3.0);
        let (x, y) = xy(&(0..g * g).filter(|s| s % g % 2 == 0 && s / g % 3 == 0 && (lo..=hi).contains(&l.v[*s])).collect::<Vec<_>>());
        p = p.dots(&x, &y);
    }
    let (mx, my) = xy(&l.minima);
    let (rx, ry) = xy(&l.route.path);
    // The empty series keeps the route off the colour of the lowest shade.
    p = p.dots(&mx, &my).line(&[], &[]).line(&rx, &ry);
    let mut what = vec!["the grid where V is below its median energy, in 3 shades from low to high", "the local minima", "the minimax route from the trap to the global minimum"];
    match &o.detail {
        physics::Detail::Exit(d) => if let Some(t) = d.temps.iter().find(|t| !t.path.is_empty()) {
            let (x, y) = xy(&t.path);
            p = p.line(&x, &y);
            what.push("the last states before the first exit at the lowest temperature");
        },
        physics::Detail::Anneal(d) => if let Some(path) = d.paths.first() {
            let (x, y) = xy(path);
            p = p.line(&x, &y);
            what.push("states of replicate 1 of the logarithmic schedule, sampled through the run");
        },
        physics::Detail::Temper(d) => {
            let ((ax, ay), (bx, by)) = (xy(&d.cold), xy(&d.cold_one));
            p = p.line(&ax, &ay).line(&bx, &by);
            what.push("the path at T_min of parallel tempering, chain 1, then of the one chain at T_min, each at 256 times of the run");
        }
        _ => {}
    }
    p.ylim(-2.0, 2.0).labels("x", "y").show();
    println!("{}: {}.", physics::LANDSCAPES.iter().find(|x| x.0 == l.id).map_or("", |x| x.1), what.join(", then "));
}

/// The estimates of some rows with their intervals, one row of the figure for each, and the reference values as dots.
fn comparison(rows: &[(String, &physics::Iv, Option<f64>)], label: &str) {
    let mut p = Plot::new();
    for (i, (_, iv, _)) in rows.iter().enumerate() {
        let y = i as f64 + 1.0;
        if let (Some(a), Some(b)) = (iv.lo, iv.hi) { p = p.line(&[a, b], &[y, y]) }
        if let Some(e) = iv.est { p = p.dots(&[e], &[y]) }
    }
    let refs: Vec<(f64, f64)> = rows.iter().enumerate().filter_map(|(i, r)| r.2.map(|v| (v, i as f64 + 1.0))).collect();
    p = p.dots(&refs.iter().map(|r| r.0).collect::<Vec<_>>(), &refs.iter().map(|r| r.1).collect::<Vec<_>>());
    p.ylim(0.0, rows.len() as f64 + 1.0).labels(label, "row").show();
    println!("From the bottom: {}. Each row has the estimate with its 95 % interval; the separate dots are the exact values.", rows.iter().map(|r| fit(&r.0)).collect::<Vec<_>>().join(", "));
}

/// A figure of the run.
fn figure(s: &physics::State, o: &physics::Out, plot: &str, (tau, dd, b): (f64, f64, usize)) {
    let land = o.land.as_ref();
    match (&o.detail, plot) {
        (_, "land") => if let Some(l) = land { landscape_figure(l, o) },
        (_, "route") => if let Some(l) = land {
            let e = &l.route.energy;
            Plot::new().line(&(0..e.len()).map(|i| i as f64).collect::<Vec<_>>(), e).rule(l.v[l.trap_node]).rule(l.route.barrier).labels("step along the route (grid moves)", "energy V").show();
            println!("The energy along the minimax route from the trap to the global minimum, with the energy of the trap and the barrier as lines. The barrier is V_m = {:.3} above the trap: every exit must climb at least this high.", l.dstar);
        },
        (physics::Detail::Exit(d), "arrhenius") => {
            let t: Vec<&physics::TempOut> = d.temps.iter().filter(|x| x.n > 0 && x.iv.est.is_some()).collect();
            let x: Vec<f64> = t.iter().map(|x| 1.0 / x.t).collect();
            let mut p = Plot::new().dots(&x, &t.iter().map(|x| lg(x.iv.est.unwrap())).collect::<Vec<_>>());
            for (i, x0) in x.iter().enumerate() { if let (Some(a), Some(b)) = (t[i].iv.lo, t[i].iv.hi) { p = p.line(&[*x0, *x0], &[lg(a), lg(b)]) } }
            let xs: Vec<f64> = d.temps.iter().map(|x| 1.0 / x.t).collect();
            p = p.line(&xs, &d.temps.iter().map(|x| lg(x.reference)).collect::<Vec<_>>());
            if let Some(lo) = d.temps.iter().min_by(|a, b| a.t.total_cmp(&b.t)) {
                let x0 = xs.iter().copied().fold(f64::MAX, f64::min);
                p = p.line(&[x0, 1.0 / lo.t], &[lg(lo.reference) + d.level * (x0 - 1.0 / lo.t) / std::f64::consts::LN_10, lg(lo.reference)]);
            }
            p.labels("1/T", "log10 of the mean exit time E[τ] (steps)").show();
            println!("The mean exit time of the run with its 95 % interval, the exact means from the linear solve, then a line of slope V_m = {:.3} through the exact value at the lowest temperature. The slope from the run is {}, and the slope from the exact values is {}. The theorem gives V_m only in the limit T → 0.",
                d.level, opt(d.fit.as_ref().map(|f| f.slope)), opt(d.exact_fit.as_ref().map(|f| f.slope)));
        }
        (physics::Detail::Exit(d), _) => {
            let mut p = Plot::new();
            let mut shown = vec![];
            for t in d.temps.iter().filter(|t| t.n > 0 && t.censored == 0 && t.iv.est.is_some_and(|e| e > 0.0)) {
                let sv = physics::survival(t);
                p = p.line(&sv.iter().map(|q| q.0).collect::<Vec<_>>(), &sv.iter().map(|q| lg(q.1)).collect::<Vec<_>>());
                shown.push(fmt(t.t));
            }
            let x: Vec<f64> = (0..40).map(|i| 0.01 + i as f64 * 6.0 / 39.0).collect();
            p.line(&x, &x.iter().map(|v| -v / std::f64::consts::LN_10).collect::<Vec<_>>()).ylim(-3.0, 0.0).labels("τ / mean τ", "log10 of P(τ > x mean τ)").show();
            println!("The survival function of the exit time scaled by its mean at T = {}, then exp(−x). As T → 0 the scaled exit time tends to the exponential law. A temperature with censored replicates is not drawn.", shown.join(", "));
        }
        (physics::Detail::Anneal(d), "success") => {
            let rows: Vec<(String, &physics::Iv, Option<f64>)> = d.schedules.iter().map(|x| (sched_name(x.kind).to_string(), &x.success, Some(x.equilibrium))).collect();
            comparison(&rows, "P(final state in the global basin)");
            println!("Wilson 95 % intervals. The exact values are the Boltzmann probabilities at each final temperature: the values at equilibrium, not the estimand. A gap means that the chain is not in equilibrium at the end.");
        }
        (physics::Detail::Anneal(d), _) => {
            let x: Vec<f64> = d.checkpoints.iter().map(|k| ((k + 1) as f64).log10()).collect();
            let mut p = Plot::new();
            for (i, sc) in d.schedules.iter().enumerate() { p = p.line(&x, if plot == "schedules" { &d.temps[i] } else { &sc.trace }) }
            let names = d.schedules.iter().map(|x| sched_name(x.kind)).collect::<Vec<_>>().join(", ");
            if plot == "schedules" {
                p.labels("log10 of the step k + 1", "temperature T_k").show();
                println!("The temperature of each schedule ({names}). The logarithmic schedule c/log(k + 2) with c = {} falls fast at the start and slowly after that. Hajek's condition needs c ≥ d* = {}.", fmt(d.log_c), fmt(d.dstar));
            } else {
                if let Some(l) = land { p = p.rule(l.v[l.global_node]) }
                p.labels("log10 of the step k + 1", "mean energy").show();
                println!("The mean energy of the replicates at 64 checkpoints ({names}), with the global minimum as a line. A curve that stays above the line shows replicates that end in other wells.");
            }
        }
        (physics::Detail::Temper(d), "basins") => {
            let names = ["A", "B", "C"];
            let top: Vec<&physics::BasinOut> = d.basins.iter().take(3).collect();
            let rows: Vec<(String, &physics::Iv, Option<f64>)> = top.iter().enumerate().flat_map(|(i, b)| [(format!("parallel tempering, well {}", names[i]), &b.pt, Some(b.exact)), (format!("one chain, well {}", names[i]), &b.one, Some(b.exact))]).collect();
            comparison(&rows, "probability of the well at T_min");
            println!("The wells: {}. Each has parallel tempering and one chain at T_min with the same number of Metropolis steps, with t intervals over the chains.",
                top.iter().enumerate().map(|(i, b)| { let (x, y) = physics::coords(b.node); format!("{} at ({x:.1}, {y:.1})", names[i]) }).collect::<Vec<_>>().join(", "));
        }
        (physics::Detail::Temper(d), "swaps") => {
            let x: Vec<f64> = (0..d.swaps.len()).map(|r| lg((d.temps[r] + d.temps[r + 1]) / 2.0)).collect();
            let y: Vec<f64> = d.swaps.iter().map(|v| v.unwrap_or(f64::NAN)).collect();
            Plot::new().line(&x, &y).dots(&x, &y).ylim(0.0, 1.0).labels("log10 of the mean temperature of the pair", "swap acceptance rate").show();
            println!("The swap acceptance rate of each pair of neighbouring temperatures. A rate near 0 stops the movement of the replicas between the two parts of the ladder. Each replica made {} round trips from T_min to T_max and back, on average over the chains.", fmt(d.trips));
        }
        (physics::Detail::Temper(d), _) => {
            let Some(k) = d.trace.first().map(Vec::len) else { return };
            let x: Vec<f64> = (0..d.trace.len()).map(|i| i as f64).collect();
            let mut p = Plot::new();
            for r in 0..k.min(2) { p = p.dots(&x, &d.trace.iter().map(|row| (row[r] + 1) as f64).collect::<Vec<_>>()) }
            p.ylim(0.5, k as f64 + 0.5).labels("sample (256 through the run)", &format!("temperature index (1 = T_min, {k} = T_max)")).show();
            println!("The temperature index of replicas 1 and 2 of chain 1. A replica that moves over the whole ladder carries states from the hot end, where the chain crosses the barriers, down to T_min.");
        }
        (physics::Detail::Sand(d), _) => sand_figure(s, d, plot, tau, dd, b),
        _ => {}
    }
}

/// A figure of a sandpile run.
fn sand_figure(s: &physics::State, d: &physics::SandOut, plot: &str, tau: f64, dd: f64, b: usize) {
    let ok: Vec<&physics::SizeOut> = d.sizes.iter().filter(|x| x.chains > 0).collect();
    let Some(x) = ok.first() else { return };
    let log = |v: &[f64]| v.iter().map(|&a| lg(a)).collect::<Vec<_>>();
    match plot {
        "sizes" => {
            let mut p = Plot::new();
            let curves: Vec<(String, &Vec<(f64, f64, f64)>)> = if s.example == "finite-size" { ok.iter().map(|z| (format!("L = {}", z.l), &z.size)).collect() }
                else { vec![("size s".into(), &x.size), ("area a".into(), &x.area), ("duration T".into(), &x.duration)] };
            for (_, c) in &curves { p = p.line(&log(&c.iter().map(|q| q.0).collect::<Vec<_>>()), &log(&c.iter().map(|q| q.1).collect::<Vec<_>>())) }
            p.labels("log10 of the value", "log10 of the density for each unit").show();
            println!("The laws of {} in log bins, 4 for each factor of 2, over the drives with at least 1 toppling. A straight part on these axes is a finite-run observation, not a theorem.", curves.iter().map(|c| c.0.clone()).collect::<Vec<_>>().join(", "));
        }
        "grid" => {
            let Some(z) = d.sizes.iter().find(|z| z.fin.is_some()) else { return };
            let (fin, foot) = (z.fin.as_ref().unwrap(), z.footprint.clone().unwrap_or_else(|| vec![0; z.l * z.l]));
            let b = b.min(z.l / 2).max(1).max(z.l / 32);
            let (w, hz) = physics::coarse(fin, z.l, b);
            let (_, fp) = physics::coarse(&foot, z.l, b);
            let fmax = fp.iter().copied().fold(1.0, f64::max);
            // The shades of the heights span the range of the block means, so that a small variation shows.
            let (hlo, hhi) = hz.iter().fold((f64::MAX, f64::MIN), |r, &v| (r.0.min(v), r.1.max(v)));
            let shades: [(&Vec<f64>, &dyn Fn(f64) -> f64, &str); 2] = [(&hz, &|v| if hhi > hlo { ((v - hlo) / (hhi - hlo)).min(0.999) } else { 0.0 }, "the mean height"), (&fp, &|v| if v > 0.0 { 0.25 + 0.75 * v.ln_1p() / fmax.ln_1p() } else { -1.0 }, "the topplings of the largest avalanche")];
            for (vals, scale, what) in shades {
                let mut p = Plot::new();
                for lvl in 0..4 {
                    let at: Vec<usize> = (0..w * w).filter(|&i| { let v = scale(vals[i]); v >= 0.0 && ((v * 4.0).floor() as usize).min(3) == lvl }).collect();
                    p = p.dots(&at.iter().map(|i| (i % w) as f64).collect::<Vec<_>>(), &at.iter().map(|i| (i / w) as f64).collect::<Vec<_>>());
                }
                p.ylim(-0.5, w as f64 - 0.5).labels("block column", "block row").show();
                println!("Chain 1 at L = {}: {what} in {b} × {b} blocks, in 4 shades from the lowest to the highest block.", z.l);
            }
            println!("The mean heights of the blocks go from {} to {}. The largest avalanche of chain 1 has {} topplings. A coarse-grained view keeps the large-scale shape and loses the detail below b.", fmt(hlo), fmt(hhi), z.footprint_size);
        }
        "heights" => {
            let h: Vec<f64> = (0..x.freq.len()).map(|i| i as f64).collect();
            let mut p = Plot::new().dots(&h, &x.freq);
            if let Some(e) = x.exact_heights { p = p.dots(&h, &e) }
            p.ylim(0.0, 0.5).labels("height", "frequency at the central sites").show();
            println!("The frequency of each height at the central sites{}.", if x.exact_heights.is_some() { ", then the exact probabilities on the infinite lattice (Priezzhev 1994). The central sites of a finite lattice differ from them by a small amount that falls with L" } else { ". No exact height probabilities are known for this setting" });
        }
        "collapse" => {
            let mut p = Plot::new();
            for z in &ok { let c = physics::collapse(z.l, &z.size, tau, dd); p = p.line(&log(&c.iter().map(|q| q.0).collect::<Vec<_>>()), &log(&c.iter().map(|q| q.1).collect::<Vec<_>>())) }
            p.labels("log10 of s / L^D", "log10 of s^τ P(s)").show();
            println!("The data collapse with τ = {tau} and D = {dd} for L = {}. Move τ and D: under the simple finite-size scaling hypothesis the curves fall on one curve. Several pairs look about as good on these lattices, and a good collapse does not establish a universality class.", ok.iter().map(|z| z.l.to_string()).collect::<Vec<_>>().join(", "));
        }
        "moments" => {
            let pts: Vec<(f64, &physics::Fit)> = d.sigma.iter().filter_map(|(q, f)| f.as_ref().map(|f| (*q, f))).collect();
            let mut p = Plot::new().dots(&pts.iter().map(|q| q.0).collect::<Vec<_>>(), &pts.iter().map(|q| q.1.slope).collect::<Vec<_>>());
            for (q, f) in &pts { if let (Some(a), Some(b)) = (f.lo, f.hi) { p = p.line(&[*q, *q], &[a, b]) } }
            if let (Some(f), Some(a), Some(z)) = (&d.d_fit, pts.first(), pts.last()) { p = p.line(&[a.0, z.0], &[f.intercept + f.slope * a.0, f.intercept + f.slope * z.0]) }
            if let Some(f) = &d.exact_fit { p = p.dots(&[1.0], &[f.slope]) }
            p.labels("order q", "σ(q): slope of log <s^q> against log L").show();
            println!("The moment exponents with their 95 % intervals, the fitted line{}. Under simple finite-size scaling σ(q) = D(q + 1 − τ), a line of slope D. The slopes are finite-run observations on few sizes.",
                if d.exact_fit.is_some() { ", and σ(1) from the exact mean size" } else { "" });
        }
        "mean" => {
            let l: Vec<f64> = ok.iter().map(|z| lg(z.l as f64)).collect();
            let mut p = Plot::new().dots(&l, &ok.iter().map(|z| lg(z.mean_s.est.unwrap_or(f64::NAN))).collect::<Vec<_>>());
            for (i, z) in ok.iter().enumerate() { if let (Some(a), Some(b)) = (z.mean_s.lo, z.mean_s.hi) { p = p.line(&[l[i], l[i]], &[lg(a), lg(b)]) } }
            p.line(&l, &ok.iter().map(|z| lg(z.reference)).collect::<Vec<_>>()).labels("log10 of L", "log10 of the mean size for each drive").show();
            println!("The mean avalanche size of the run with its 95 % interval, then the exact mean from Dhar's theory. With an open boundary and no dissipation, the mean size divided by L² tends to a constant.");
        }
        "blockvar" => {
            let Some(v) = &x.block_var else { println!("The lattice is too small for 2 block sizes."); return };
            let bs: Vec<f64> = x.scales.iter().map(|&b| lg(b as f64)).collect();
            let y = log(v);
            Plot::new().line(&bs, &y).dots(&bs, &y).line(&[bs[0], bs[bs.len() - 1]], &[y[0], y[0] - 2.0 * (bs[bs.len() - 1] - bs[0])]).labels("log10 of the block size b", "log10 of the variance of the block mean").show();
            println!("The variance of the block mean of the heights, then a line of slope −2 for independent heights. The slope of the run is {}, a finite-run observation on {} scales.", opt(x.var_fit.as_ref().map(|f| f.slope)), bs.len());
        }
        _ => {
            let Some(v) = &x.boxes else { println!("No avalanche was large enough to count boxes."); return };
            let bs: Vec<f64> = x.scales.iter().map(|&b| lg(b as f64)).collect();
            let y: Vec<f64> = v.iter().map(|a| a / std::f64::consts::LN_10).collect();
            Plot::new().line(&bs, &y).dots(&bs, &y).line(&[bs[0], bs[bs.len() - 1]], &[y[0], y[0] - 2.0 * (bs[bs.len() - 1] - bs[0])]).labels("log10 of the box size b", "log10 of the boxes N_b").show();
            println!("The boxes that {} large avalanches touch, as a geometric mean, then a line of slope −2 for a compact set. The slope of the run is {}, a finite-run observation.", x.n_box, opt(x.box_fit.as_ref().map(|f| f.slope)));
        }
    }
}

/// The diagnostics of a run, then the example's own text on diagnostics and interpretation.
fn diagnostics(x: &physics::Example, o: &physics::Out) {
    let mut out: Vec<String> = vec![];
    match &o.detail {
        physics::Detail::Exit(d) => for t in &d.temps {
            out.push(format!("T = {}: {} replicates, {}. The exact mean is {}{}.", fmt(t.t), t.n, if t.censored > 0 { format!("{} censored at the step limit", t.censored) } else { "none censored".into() }, fmt(t.reference),
                t.iv.lo.zip(t.iv.hi).map_or(String::new(), |(a, b)| if (a..=b).contains(&t.reference) { ", inside the interval".into() } else { ", outside the interval".into() })));
        },
        physics::Detail::Anneal(d) => {
            for sc in &d.schedules { out.push(format!("{}: Hajek's condition {}. The final temperature is {}.", sched_name(sc.kind), sc.hajek, fmt(sc.fin))) }
            for p in &d.pairs { out.push(format!("The paired difference {} − {} in P(global basin) is {} ({} to {}), from {} and {} discordant replicates on the same streams.", sched_name(p.a), sched_name(p.b), fmt(p.est), opt(p.lo), opt(p.hi), p.n10, p.n01)) }
        }
        physics::Detail::Temper(d) => {
            out.push(format!("The swap rates from T_min up are {}.", d.swaps.iter().map(|v| opt(*v)).collect::<Vec<_>>().join(", ")));
            out.push(format!("Each replica made {} round trips from T_min to T_max and back, on average over the chains.", fmt(d.trips)));
            out.push(format!("The exact mean energy at T_min is {}.", fmt(d.exact_energy)));
            out.push("The t interval measures the spread between chains, not a bias that every chain shares. The single chains at T_min can agree with each other and still miss the exact value, when they all start in one well.".into());
        }
        physics::Detail::Sand(d) => {
            for z in d.sizes.iter().filter(|z| z.chains > 0) {
                let b = &z.balance;
                out.push(format!("L = {}: {} chains, {} recorded drives, {} of them with no toppling, and a largest avalanche of {} topplings. Grains: {} added = {} lost at the boundary + {} lost in the bulk + {} change of the mass: {}.{} The mean height in the first and the second half of the drives is {} and {}: close values support a stationary state, and do not prove it.",
                    z.l, z.chains, z.drives, fmt(z.zero as f64 / z.drives as f64), z.max_s, b.added, b.lost_edge, b.lost_bulk, b.mass_change, if b.exact { "exact" } else { "not exact" },
                    z.recurrent.map_or(String::new(), |r| format!(" The burning test after the warm-up of {} drives finds {r} of {} chains recurrent.", z.burn, z.chains)), opt(z.density[0].est), opt(z.density[1].est)));
            }
            if d.fixed { out.push("This dynamics uses no random number: with the BTW rule, a drive at the centre and ε = 0, every chain repeats the same orbit, so the page gives no interval.".into()) }
        }
    }
    html(&format!("{}{}{}", bullets(&out), para(&x.diagnostics), para(&x.interpretation)));
}

/// A method card: the estimator, its assumptions and settings, and its three examples with their settings.
fn card(m: &physics::Method) -> String {
    let c = cat();
    let ex = |l: &physics::Link| c.examples.iter().find(|x| x.id == l.example).map_or(String::new(), |x| fit(&x.title));
    let set = |l: &physics::Link| l.settings.as_object().filter(|o| !o.is_empty()).map_or("the settings of the example".into(), |o| o.iter().map(|(k, v)| format!("{} = {}", physics::FIELDS.iter().find(|f| f.0 == k).map_or(k.as_str(), |f| f.1), v.as_str().map_or(v.to_string(), String::from))).collect::<Vec<_>>().join("; "));
    let with = c.methods.iter().find(|x| x.id == m.with).map_or(String::new(), |x| x.name.to_lowercase());
    format!("<p><strong>{}.</strong> {}.</p>{}{}<h3>Assumptions</h3>{}<h3>Settings</h3>{}<h3>Where it works: {}</h3>{}<p>Settings: {}.</p><h3>Where it fails: {}</h3>{}<p>Settings: {}.</p><h3>Comparison with {}: {}</h3>{}<p>Settings: {}.</p>",
        esc(&fit(&m.name)), esc(&fit(&m.family)), mathml(&m.estimator, true), para(&m.estimator_text), bullets(&m.assumptions), bullets(&m.settings),
        esc(&ex(&m.suitable)), para(&m.suitable.text), esc(&fit(&set(&m.suitable))), esc(&ex(&m.failure)), para(&m.failure.text), esc(&fit(&set(&m.failure))),
        esc(&with), esc(&ex(&m.comparison)), para(&m.comparison.text), esc(&fit(&set(&m.comparison))))
}
```

```rust
//| caption: The core: the uniform source and the special functions.
// The shared parts of the Monte Carlo models notebook: values, the uniform source and the special functions.
pub use std::f64::consts::PI;
pub const INF: f64 = f64::INFINITY;

/// A value of the model language: a number or a vector.
#[derive(Clone, Debug, PartialEq)]
pub enum V { N(f64), L(Vec<f64>) }
impl V {
    pub fn num(&self) -> Option<f64> { if let V::N(x) = self { Some(*x) } else { None } }
    /// The entries: a number is a vector of one.
    pub fn list(&self) -> Vec<f64> { match self { V::N(x) => vec![*x], V::L(v) => v.clone() } }
}

/// The sampler of a method: the law's reference sampler, its inverse transform, its rejection sampler, or the Euler
/// scheme of a diffusion. The inverse transform keeps the part `cut` of its table (1, or 0.99 for the assumption
/// failure "table_cut"), and the rejection sampler scales its envelope by `scale` (1, or 0.5 for "envelope").
#[derive(Clone, Copy, PartialEq, Debug)]
pub enum Kind { Reference, Inverse { cut: f64 }, Rejection { scale: f64 }, Euler }

/// The uniforms of one draw. The state is a hash of the seed, the stream, the replicate and the place of the draw, so
/// a draw does not depend on the other draws. `flip` gives 1 − u (the antithetic partner), and a stratum (k, K)
/// maps the next uniform to (k + u)/K. Rejection samplers count their proposals and acceptances.
pub struct Src { s: [u64; 4], pub flip: bool, strat: Option<(f64, f64)>, pub proposals: u64, pub accepts: u64 }

fn mix(z: u64) -> u64 {
    let z = z.wrapping_add(0x9e3779b97f4a7c15);
    let x = (z ^ (z >> 30)).wrapping_mul(0xbf58476d1ce4e5b9);
    let x = (x ^ (x >> 27)).wrapping_mul(0x94d049bb133111eb);
    x ^ (x >> 31)
}

impl Src {
    pub fn new(seed: u64, stream: u64, i: u64, j: u64, flip: bool) -> Src {
        let mut z = mix(mix(mix(seed) ^ stream) ^ i.wrapping_mul(0xd1b54a32d192ed03)) ^ j.wrapping_mul(0x8cb92ba72f3d8dd7);
        let mut next = || { z = mix(z); z };
        Src { s: [next(), next(), next(), next()], flip, strat: None, proposals: 0, accepts: 0 }
    }
    /// The next uniform falls in stratum k of K equal parts of (0, 1).
    pub fn stratum(&mut self, k: usize, n: usize) { self.strat = Some((k as f64, n as f64)) }
    fn next(&mut self) -> u64 {
        let s = &mut self.s;
        let r = s[1].wrapping_mul(5).rotate_left(7).wrapping_mul(9);
        let t = s[1] << 17;
        s[2] ^= s[0];
        s[3] ^= s[1];
        s[1] ^= s[2];
        s[0] ^= s[3];
        s[2] ^= t;
        s[3] = s[3].rotate_left(45);
        r
    }
    /// Uniform on (0, 1), never 0 or 1.
    pub fn u(&mut self) -> f64 {
        let u = ((self.next() >> 11) as f64 + 0.5) / (1u64 << 53) as f64;
        let u = if self.flip { 1.0 - u } else { u };
        match self.strat.take() { Some((k, n)) => ((k + u) / n).min(1.0 - 1e-16), None => u }
    }
    /// A standard normal value by inversion of one uniform, so the antithetic partner is −z.
    pub fn normal(&mut self) -> f64 { qnorm(self.u()) }
    pub fn exp(&mut self) -> f64 { -self.u().ln() }
    /// Marsaglia and Tsang's method; a shape below 1 by Γ(k + 1) U^(1/k).
    pub fn gamma(&mut self, k: f64) -> f64 {
        if k < 1.0 { return self.gamma(k + 1.0) * self.u().powf(1.0 / k) }
        let (d, c) = (k - 1.0 / 3.0, 1.0 / (9.0 * k - 3.0).sqrt());
        loop {
            let z = self.normal();
            let v = (1.0 + c * z).powi(3);
            if v > 0.0 && self.u().ln() < 0.5 * z * z + d - d * v + d * v.ln() { return d * v }
        }
    }
    /// Inversion, in parts of at most 500 for a large mean.
    pub fn poisson(&mut self, l: f64) -> f64 {
        if l > 500.0 { return self.poisson(500.0) + self.poisson(l - 500.0) }
        let u = self.u();
        let (mut k, mut p) = (0.0, (-l).exp());
        let mut f = p;
        while u > f && (p > 1e-300 || k < l) { k += 1.0; p *= l / k; f += p }
        k
    }
    /// Inversion from 0, on the side p ≤ 1/2.
    pub fn binomial(&mut self, n: f64, p: f64) -> f64 {
        if p > 0.5 { return n - self.binomial(n, 1.0 - p) }
        let (q, u) = (1.0 - p, self.u());
        let (mut k, mut pk) = (0.0, q.powf(n));
        let mut f = pk;
        while u > f && k < n { pk *= (n - k) / (k + 1.0) * p / q; k += 1.0; f += pk }
        k
    }
}

/// ln Γ(x) by Lanczos (g = 7, 9 terms), with the reflection formula below 1/2.
pub fn lgam(x: f64) -> f64 {
    if x < 0.5 { return (PI / (PI * x).sin()).abs().ln() - lgam(1.0 - x) }
    const G: [f64; 9] = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
        12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    let x = x - 1.0;
    let a = G[0] + (1..9).map(|i| G[i] / (x + i as f64)).sum::<f64>();
    let t = x + 7.5;
    0.5 * (2.0 * PI).ln() + (x + 0.5) * t.ln() - t + a.ln()
}
pub fn gam(x: f64) -> f64 { if x < 0.5 { PI / ((PI * x).sin() * gam(1.0 - x)) } else { lgam(x).exp() } }
pub fn lbeta(a: f64, b: f64) -> f64 { lgam(a) + lgam(b) - lgam(a + b) }
pub fn lchoose(n: f64, k: f64) -> f64 { lgam(n + 1.0) - lgam(k + 1.0) - lgam(n - k + 1.0) }

/// The Hurwitz zeta function ζ(s, a) = Σ_{k ≥ 0} (k + a)^(−s) for s > 1, by Euler–Maclaurin summation from a + 10.
pub fn hurwitz(s: f64, a: f64) -> f64 {
    let n = a + 10.0;
    let mut z = (0..10).map(|k| (k as f64 + a).powf(-s)).sum::<f64>() + n.powf(1.0 - s) / (s - 1.0) + 0.5 * n.powf(-s);
    let mut f = s * n.powf(-s - 1.0);
    for (j, c) in [1.0 / 12.0, -1.0 / 720.0, 1.0 / 30240.0, -1.0 / 1209600.0, 1.0 / 47900160.0].iter().enumerate() {
        z += c * f;
        let j = j as f64 + 1.0;
        f *= (s + 2.0 * j - 1.0) * (s + 2.0 * j) / (n * n);
    }
    z
}
pub fn zeta(s: f64) -> f64 { hurwitz(s, 1.0) }

/// The regularised incomplete gamma functions (P(a, x), Q(a, x)), each computed directly: the series below a + 1,
/// the continued fraction above.
pub fn gamma_pq(a: f64, x: f64) -> (f64, f64) {
    if x <= 0.0 { return (0.0, 1.0) }
    if x == INF { return (1.0, 0.0) }
    let front = (-x + a * x.ln() - lgam(a)).exp();
    if x < a + 1.0 {
        let (mut ap, mut del) = (a, 1.0 / a);
        let mut sum = del;
        for _ in 0..10000 { ap += 1.0; del *= x / ap; sum += del; if del.abs() < sum.abs() * 1e-16 { break } }
        let p = (sum * front).min(1.0);
        return (p, 1.0 - p);
    }
    let (mut b, mut c, mut d) = (x + 1.0 - a, 1e300, 1.0 / (x + 1.0 - a));
    let mut h = d;
    for i in 1..10000 {
        let an = -(i as f64) * (i as f64 - a);
        b += 2.0;
        d = an * d + b;
        if d.abs() < 1e-300 { d = 1e-300 }
        c = b + an / c;
        if c.abs() < 1e-300 { c = 1e-300 }
        d = 1.0 / d;
        h *= d * c;
        if (d * c - 1.0).abs() < 1e-16 { break }
    }
    let q = (front * h).min(1.0);
    (1.0 - q, q)
}

fn betacf(a: f64, b: f64, x: f64) -> f64 {
    let (qab, qap, qam) = (a + b, a + 1.0, a - 1.0);
    let tiny = |v: f64| if v.abs() < 1e-300 { 1e-300 } else { v };
    let (mut c, mut d) = (1.0, 1.0 / tiny(1.0 - qab * x / qap));
    let mut h = d;
    for m in 1..10000 {
        let (m, m2) = (m as f64, 2.0 * m as f64);
        let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
        d = 1.0 / tiny(1.0 + aa * d);
        c = tiny(1.0 + aa / c);
        h *= d * c;
        let aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
        d = 1.0 / tiny(1.0 + aa * d);
        c = tiny(1.0 + aa / c);
        h *= d * c;
        if (d * c - 1.0).abs() < 1e-16 { break }
    }
    h
}

/// The regularised incomplete beta function I_x(a, b).
pub fn ibeta(x: f64, a: f64, b: f64) -> f64 {
    if x <= 0.0 { return 0.0 }
    if x >= 1.0 { return 1.0 }
    let front = (lgam(a + b) - lgam(a) - lgam(b) + a * x.ln() + b * (-x).ln_1p()).exp();
    if x < (a + 1.0) / (a + b + 2.0) { (front * betacf(a, b, x) / a).min(1.0) } else { (1.0 - front * betacf(b, a, 1.0 - x) / b).max(0.0) }
}

/// The standard normal CDF: Φ(x) = Q(1/2, x²/2)/2 for x < 0.
pub fn pnorm(x: f64) -> f64 {
    if x.is_infinite() { return if x > 0.0 { 1.0 } else { 0.0 } }
    let q = gamma_pq(0.5, x * x / 2.0).1 / 2.0;
    if x < 0.0 { q } else { 1.0 - q }
}
pub fn dnorm(x: f64) -> f64 { (-x * x / 2.0).exp() / (2.0 * PI).sqrt() }

/// The standard normal quantile: Acklam's approximation, then one Halley step; the upper half by symmetry.
pub fn qnorm(p: f64) -> f64 {
    if p > 0.5 { return -qnorm(1.0 - p) }
    if p <= 0.0 { return -INF }
    const A: [f64; 6] = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
    const B: [f64; 5] = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
    const C: [f64; 6] = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
    const D: [f64; 4] = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
    let x = if p < 0.02425 {
        let q = (-2.0 * p.ln()).sqrt();
        (((((C[0] * q + C[1]) * q + C[2]) * q + C[3]) * q + C[4]) * q + C[5]) / ((((D[0] * q + D[1]) * q + D[2]) * q + D[3]) * q + 1.0)
    } else {
        let (q, r) = (p - 0.5, (p - 0.5) * (p - 0.5));
        (((((A[0] * r + A[1]) * r + A[2]) * r + A[3]) * r + A[4]) * r + A[5]) * q / (((((B[0] * r + B[1]) * r + B[2]) * r + B[3]) * r + B[4]) * r + 1.0)
    };
    let u = (pnorm(x) - p) / dnorm(x);
    if u.is_finite() { x - u / (1.0 + x * u / 2.0) } else { x }
}

/// The x in [lo, hi] with f(x) = target for an increasing f, by bisection; an infinite end is first replaced by a
/// finite bracket from `guess`.
pub fn invert(f: &dyn Fn(f64) -> f64, target: f64, lo: f64, hi: f64, guess: f64) -> f64 {
    let (mut a, mut b) = (lo, hi);
    if a == -INF { let mut s = 1.0; a = guess - s; while f(a) > target { s *= 2.0; a = guess - s; if s > 1e300 { break } } }
    if b == INF { let mut s = 1.0; b = guess.max(a) + s; while f(b) < target { s *= 2.0; b = guess.max(a) + s; if s > 1e300 { break } } }
    for _ in 0..200 {
        let m = 0.5 * (a + b);
        if m <= a || m >= b { break }
        if f(m) < target { a = m } else { b = m }
    }
    0.5 * (a + b)
}

/// The Wilson score interval for k hits in n trials.
pub fn wilson(k: f64, n: f64, z: f64) -> (f64, f64) {
    let (p, z2) = (k / n, z * z);
    let den = 1.0 + z2 / n;
    let (centre, half) = ((p + z2 / (2.0 * n)) / den, z * (p * (1.0 - p) / n + z2 / (4.0 * n * n)).sqrt() / den);
    ((centre - half).max(0.0), (centre + half).min(1.0))
}
/// The exact one-sided upper bound after 0 hits in n independent trials: 1 − α^(1/n).
pub fn zero_hit(n: f64, alpha: f64) -> f64 { -(alpha.ln() / n).exp_m1() }
pub const Z95: f64 = 1.959963984540054;
```

```rust
//| caption: The physics laboratory: energy landscapes, simulated annealing, parallel tempering and sandpiles.
mod physics {
    //! The statistical-physics laboratory of the Monte Carlo workbench (group 9), from physics.js. Energy landscapes on a
    //! 61 × 61 grid of [−2, 2]² with their exact analysis (local minima, basins of steepest descent, stability levels,
    //! Hajek's depth d*, a minimax route, the Boltzmann law, and the exact mean exit time by a banded GTH elimination);
    //! Metropolis exit times from the trap; four cooling schedules of simulated annealing on paired streams; parallel
    //! tempering beside one chain at T_min; and BTW and Manna sandpiles (open, closed or periodic boundary, random or
    //! centre drive, g grains, bulk dissipation ε) with Dhar's exact mean avalanche size, the burning test, log-binned laws
    //! of size, area and duration, moment analysis, coarse-graining and box counting.
    //! `catalogue` reads physics.json, `Catalogue::state` opens an example (with a method card's settings on top), `job_of`
    //! builds its job, `prepare` checks the job with the limits and messages of physics.js, and `run` returns the result
    //! rows (estimate, 95 % interval, reference, claim tags), the diagnostics and the data of the figures. Each replicate or
    //! chain reads its own stream, one stream id for each stream role of physics.js, so a run is deterministic.
    use super::*;
    use serde_json::{Map, Value, json};
    use std::{cmp::{Ordering::Equal, Reverse}, collections::BinaryHeap};

    /// The landscape grid: GRID × GRID nodes on [−2, 2]², spacing 4/60.
    pub const GRID: usize = 61;
    const LO: f64 = -2.0;
    const H: f64 = 4.0 / 60.0;
    /// The checkpoints of an annealing trace, the states kept of an exit path, the log bins for each factor of 2 and their
    /// count (sizes up to 2^40), the moment orders, and the block sizes of the coarse-graining and the box counting.
    pub const CHECKPOINTS: usize = 64;
    pub const PATH: usize = 600;
    pub const PER_OCTAVE: f64 = 4.0;
    pub const BINS: usize = 160;
    pub const ORDERS: [f64; 5] = [1.0, 1.5, 2.0, 2.5, 3.0];
    pub const SCALES: [usize; 5] = [1, 2, 4, 8, 16];
    /// The greatest number of topplings in one avalanche: past it the run stops with an error.
    pub const MAX_TOPPLINGS: u64 = 1 << 28;
    pub const SCHEDULES: [&str; 4] = ["log", "geometric", "linear", "quench"];
    const P2: f64 = PI * PI;
    const P3: f64 = P2 * PI;
    /// The exact single-site height probabilities of the BTW sandpile on the infinite square lattice, heights 0 to 3
    /// (Priezzhev 1994; Jeng, Piroux and Ruelle 2006; Poghosyan, Priezzhev and Ruelle 2011). Their mean is 17/8.
    pub const BTW_HEIGHTS: [f64; 4] = [2.0 / P2 - 4.0 / P3, 0.25 - 0.5 / PI - 3.0 / P2 + 12.0 / P3, 0.375 + 1.0 / PI - 12.0 / P3, 0.375 - 0.5 / PI + 1.0 / P2 + 4.0 / P3];
    /// One stream id for each stream role of physics.js: exit times, annealing, tempering, the single chain, sandpiles.
    const ST_EXIT: u64 = 0x9e01;
    const ST_ANNEAL: u64 = 0x9e02;
    const ST_TEMPER: u64 = 0x9e03;
    const ST_SINGLE: u64 = 0x9e04;
    const ST_SAND: u64 = 0x9e05;
    const NONE: usize = usize::MAX;

    fn cut(s: &str, n: usize) -> String { s.chars().take(n).collect() }
    /// x rounded to d significant digits, as JavaScript's +x.toPrecision(d).
    fn sig(x: f64, d: usize) -> f64 { format!("{:.*e}", d - 1, x).parse().unwrap_or(x) }
    fn nbr(nb: &[i32], s: usize, d: usize) -> Option<usize> { let t = nb[4 * s + d]; (t >= 0).then_some(t as usize) }
    fn find(p: &mut [usize], mut x: usize) -> usize { while p[x] != x { p[x] = p[p[x]]; x = p[x] } x }
    /// A key whose integer order is the order of the floats.
    fn okey(x: f64) -> u64 { let b = x.to_bits(); if b >> 63 == 1 { !b } else { b | 1 << 63 } }
    fn lns(xs: impl Iterator<Item = f64>) -> Vec<f64> { xs.map(f64::ln).collect() }

    /* ---------- intervals and fits ---------- */

    /// An estimate with its 95 % interval and standard error, and how the page formed them; None where the page shows no
    /// number.
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Iv { pub est: Option<f64>, pub lo: Option<f64>, pub hi: Option<f64>, pub se: Option<f64>, pub how: String }
    fn bare(est: Option<f64>, how: impl Into<String>) -> Iv { Iv { est, how: how.into(), ..Iv::default() } }
    fn full(est: f64, lo: f64, hi: f64, se: f64, how: impl Into<String>) -> Iv { Iv { est: Some(est), lo: Some(lo), hi: Some(hi), se: Some(se), how: how.into() } }

    /// A result row: the quantity, its unit, the estimate with its interval, the sample size, the reference value, what
    /// kind of value the reference is, and the claim tags ("theorem", "numerical", "observation").
    #[derive(Clone, Debug, PartialEq)]
    pub struct Row { pub label: String, pub unit: &'static str, pub iv: Iv, pub n: f64, pub reference: Option<f64>, pub ref_how: String, pub tags: Vec<&'static str> }
    fn row(label: String, unit: &'static str, iv: Iv, n: f64, reference: Option<f64>, ref_how: impl Into<String>, tags: &[&'static str]) -> Row {
        Row { label, unit, iv, n, reference, ref_how: ref_how.into(), tags: tags.to_vec() }
    }

    fn ibeta_inv(p: f64, a: f64, b: f64) -> f64 { invert(&|x| ibeta(x, a, b), p, 0.0, 1.0, 0.5) }
    /// The Student t quantile for p > 1/2 with nu degrees of freedom.
    pub fn t_quantile(p: f64, nu: f64) -> f64 {
        if nu > 1e6 { return qnorm(p) }
        let x = ibeta_inv(2.0 * (1.0 - p), nu / 2.0, 0.5);
        (nu * (1.0 - x) / x).sqrt()
    }
    /// The Clopper–Pearson interval for k hits in n trials at the level 1 − alpha.
    pub fn clopper_pearson(k: f64, n: f64, alpha: f64) -> (f64, f64) {
        (if k == 0.0 { 0.0 } else { ibeta_inv(alpha / 2.0, k, n - k + 1.0) }, if k == n { 1.0 } else { ibeta_inv(1.0 - alpha / 2.0, k + 1.0, n - k) })
    }
    /// The mean of values from independent chains with its 95 % t interval, cut to [0, 1] for a probability.
    pub fn between(xs: &[f64], prob: bool) -> Iv {
        let k = xs.len() as f64;
        if xs.is_empty() { return bare(None, "no chains") }
        let m = xs.iter().sum::<f64>() / k;
        if xs.len() < 2 { return bare(Some(m), "one chain: no interval") }
        let se = (xs.iter().map(|x| (x - m).powi(2)).sum::<f64>() / (k - 1.0) / k).sqrt();
        if se == 0.0 {
            return bare(Some(m), format!("no interval: every one of the {} chains gave the same value, so the spread between chains shows no uncertainty, and a bias that every chain shares stays possible", xs.len()));
        }
        let q = t_quantile(0.975, k - 1.0);
        let (mut lo, mut hi, mut how) = (m - q * se, m + q * se, format!("t interval over {} independent chains, 95 %", xs.len()));
        if prob && (lo < 0.0 || hi > 1.0) { (lo, hi) = (lo.max(0.0), hi.min(1.0)); how += ", cut to [0, 1]" }
        full(m, lo, hi, se, how)
    }
    /// The Wilson interval of k hits in n trials, with the exact zero-hit and all-hit bounds.
    pub fn proportion(k: f64, n: f64) -> Iv {
        if n == 0.0 { return bare(None, "no replicates") }
        let (est, b) = (k / n, zero_hit(n, 0.025));
        if k == 0.0 { return full(est, 0.0, b, 0.0, "zero hits: exact one-sided 97.5 % bound, the end of a two-sided 95 % interval") }
        if k == n { return full(est, 1.0 - b, 1.0, 0.0, "all hits: exact one-sided 97.5 % bound, the end of a two-sided 95 % interval") }
        let (lo, hi) = wilson(k, n, Z95);
        full(est, lo, hi, (est * (1.0 - est) / n).sqrt(), "Wilson score interval, 95 %")
    }
    /// The mean of n independent values from their sum and sum of squares, with the CLT interval.
    pub fn clt(n: f64, sum: f64, sum2: f64) -> Iv {
        if n == 0.0 { return bare(None, "no replicates") }
        let m = sum / n;
        if n < 2.0 { return bare(Some(m), "one replicate") }
        let se = ((sum2 - n * m * m).max(0.0) / (n - 1.0) / n).sqrt();
        full(m, m - Z95 * se, m + Z95 * se, se, "CLT interval, 95 %, asymptotic")
    }

    /// A least-squares line with equal weights: its slope and intercept and, when each y has a standard error, the standard
    /// error of the slope and its 95 % interval (the Monte Carlo error of the points only, not the error of a line).
    #[derive(Clone, Debug, PartialEq)]
    pub struct Fit { pub slope: f64, pub intercept: f64, pub se: Option<f64>, pub lo: Option<f64>, pub hi: Option<f64> }
    pub fn fit_line(xs: &[f64], ys: &[f64], ses: Option<&[Option<f64>]>) -> Option<Fit> {
        let k = xs.len() as f64;
        if xs.len() < 2 { return None }
        let (mx, my) = (xs.iter().sum::<f64>() / k, ys.iter().sum::<f64>() / k);
        let sxx: f64 = xs.iter().map(|x| (x - mx).powi(2)).sum();
        let sxy: f64 = xs.iter().zip(ys).map(|(x, y)| (x - mx) * (y - my)).sum();
        if !(sxx > 0.0) { return None }
        let slope = sxy / sxx;
        let se = ses.filter(|s| s.iter().all(|v| v.is_some_and(f64::is_finite)))
            .map(|s| xs.iter().zip(s).map(|(x, v)| ((x - mx) / sxx).powi(2) * v.unwrap_or(0.0).powi(2)).sum::<f64>().sqrt());
        Some(Fit { slope, intercept: my - slope * mx, se, lo: se.map(|s| slope - Z95 * s), hi: se.map(|s| slope + Z95 * s) })
    }
    fn fit_iv(f: &Option<Fit>, how: String, none: &str) -> Iv {
        f.as_ref().map_or(bare(None, none), |f| Iv { est: Some(f.slope), lo: f.lo, hi: f.hi, se: f.se, how })
    }

    /* ---------- landscapes ---------- */

    type Energy = fn(f64, f64) -> f64;
    fn bump(x: f64, y: f64, cx: f64, cy: f64, w: f64) -> f64 { (-((x - cx).powi(2) + (y - cy).powi(2)) / (2.0 * w * w)).exp() }
    /// The energy landscapes: id, title, TeX formula, description and V(x, y).
    pub const LANDSCAPES: [(&str, &str, &str, &str, Energy); 3] = [
        ("double-well", "Tilted double well", "V(x, y) = (x^2 - 1)^2 - \\tfrac{1}{4}\\,x + \\tfrac{1}{2}\\,y^2",
            "Two wells on the x axis. The tilt makes the right well deeper, so the left well is metastable.", |x, y| (x * x - 1.0).powi(2) - 0.25 * x + 0.5 * y * y),
        ("three-wells", "Three wells: deep and narrow, shallow and wide", "V(x, y) = 0.15\\,|p|^2 - \\sum_{k=1}^{3} d_k \\exp\\!\\left(-\\frac{|p - c_k|^2}{2 w_k^2}\\right)",
            "A narrow deep well at (1.1, −0.7), a medium well at (−1.1, −0.6) and a wide shallow well at (0, 1.1). At a high temperature the wide well holds the most probability; at a low temperature the narrow deep well does.",
            |x, y| 0.15 * (x * x + y * y) - 1.3 * bump(x, y, 1.1, -0.7, 0.22) - bump(x, y, -1.1, -0.6, 0.35) - 0.8 * bump(x, y, 0.0, 1.1, 0.55)),
        ("rugged", "Rugged bowl", "V(x, y) = 0.2\\,|p - (0.3, -0.25)|^2 - 0.2\\,[\\cos(2.5\\pi x) + \\cos(2.5\\pi y)] - 0.6\\,e^{-|p - (-1.6, 1.6)|^2 / 0.18}",
            "A bowl with a square lattice of small wells and one deep well near the corner (−1.6, 1.6), far from the bottom of the bowl.",
            |x, y| 0.2 * ((x - 0.3).powi(2) + (y + 0.25).powi(2)) - 0.2 * ((2.5 * PI * x).cos() + (2.5 * PI * y).cos()) - 0.6 * (-((x + 1.6).powi(2) + (y - 1.6).powi(2)) / 0.18).exp()),
    ];

    /// A path of least highest energy between two nodes, the energy along it and that highest energy.
    #[derive(Clone, Debug, Default, PartialEq)]
    pub struct Route { pub path: Vec<usize>, pub energy: Vec<f64>, pub barrier: f64 }

    /// An energy on a g × g grid with 4-neighbour moves and its exact analysis. `nb` holds the 4 neighbours of each node
    /// (+x, −x, +y, −y), −1 off the grid. Nodes are ordered by (V, index). A minimum is below its 4 neighbours; its basin is
    /// the set of nodes whose steepest descent ends at it; its stability level is the least barrier on a path to a lower
    /// node (∞ for the global minimum). The trap is the other minimum with the greatest level, Hajek's depth d*; `route` is
    /// a minimax path from the trap to the global minimum.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Land {
        pub id: String, pub g: usize, pub n: usize, pub v: Vec<f64>, pub nb: Vec<i32>, pub vmin: f64, pub vmax: f64, pub minima: Vec<usize>, pub basin: Vec<usize>,
        pub stability: Vec<f64>, pub global: usize, pub trap: Option<usize>, pub dstar: f64, pub global_node: usize, pub trap_node: usize, pub route: Route,
    }

    /// The 4 neighbours of each node of a g × g grid, −1 off the grid: +x, −x, +y, −y.
    pub fn grid_neighbours(g: usize) -> Vec<i32> {
        let mut nb = vec![-1; 4 * g * g];
        for s in 0..g * g {
            let (i, j, k) = (s % g, s / g, 4 * s);
            if i + 1 < g { nb[k] = (s + 1) as i32 }
            if i > 0 { nb[k + 1] = (s - 1) as i32 }
            if j + 1 < g { nb[k + 2] = (s + g) as i32 }
            if j > 0 { nb[k + 3] = (s - g) as i32 }
        }
        nb
    }

    /// The exact analysis of an energy v on a g × g grid; the stability levels come from a union-find over the nodes in
    /// increasing order.
    pub fn analyse(v: Vec<f64>, g: usize) -> Land {
        let (n, nb) = (g * g, grid_neighbours(g));
        let less = |a: usize, b: usize| v[a] < v[b] || (v[a] == v[b] && a < b);
        let down: Vec<usize> = (0..n).map(|s| (0..4).filter_map(|d| nbr(&nb, s, d)).fold(s, |b, t| if less(t, b) { t } else { b })).collect();
        let minima: Vec<usize> = (0..n).filter(|&s| down[s] == s).collect();
        let mut index = vec![NONE; n];
        for (k, &m) in minima.iter().enumerate() { index[m] = k }
        let mut basin = vec![NONE; n];
        for s in 0..n {
            let (mut t, mut trail) = (s, vec![]);
            while basin[t] == NONE && down[t] != t { trail.push(t); t = down[t] }
            let k = if basin[t] != NONE { basin[t] } else { index[t] };
            basin[t] = k;
            for u in trail { basin[u] = k }
        }
        let mut order: Vec<usize> = (0..n).collect();
        order.sort_by(|&a, &b| v[a].partial_cmp(&v[b]).unwrap_or(Equal).then(a.cmp(&b)));
        let (mut parent, mut low, mut stab) = (vec![NONE; n], vec![0; n], vec![INF; minima.len()]);
        for &u in &order {
            (parent[u], low[u]) = (u, u);
            for w in (0..4).filter_map(|d| nbr(&nb, u, d)) {
                if parent[w] == NONE { continue }
                let (ru, rw) = (find(&mut parent, u), find(&mut parent, w));
                if ru == rw { continue }
                let (a, b) = (low[ru], low[rw]);
                let hi = if less(a, b) { b } else { a };
                let lo = if hi == a { b } else { a };
                // A new node joining a lower component is not a minimum (index NONE): it has no level.
                if v[lo] < v[hi] && index[hi] != NONE && stab[index[hi]] == INF { stab[index[hi]] = v[u] - v[hi] }
                let (top, under) = if hi == a { (ru, rw) } else { (rw, ru) };
                (parent[top], low[under]) = (under, lo);
            }
        }
        let global = index[order[0]];
        let trap = (0..minima.len()).filter(|&k| k != global).fold(None, |t: Option<usize>, k| if t.is_none_or(|t| stab[k] > stab[t]) { Some(k) } else { t });
        let (vmin, vmax) = v.iter().fold((INF, -INF), |(a, b), &x| (a.min(x), b.max(x)));
        let (gn, tn) = (minima[global], minima[trap.unwrap_or(global)]);
        let route = minimax(&v, &nb, tn, gn);
        Land { id: String::new(), g, n, v, nb, vmin, vmax, basin, global, trap, dstar: trap.map_or(0.0, |t| stab[t]), stability: stab, minima, global_node: gn, trap_node: tn, route }
    }

    /// A path from a to b whose highest energy is the least possible: a bottleneck Dijkstra search.
    fn minimax(v: &[f64], nb: &[i32], a: usize, b: usize) -> Route {
        let n = v.len();
        let (mut cost, mut from, mut done) = (vec![INF; n], vec![NONE; n], vec![false; n]);
        cost[a] = v[a];
        let mut heap = BinaryHeap::from([Reverse((okey(v[a]), a))]);
        while let Some(Reverse((_, u))) = heap.pop() {
            if done[u] { continue }
            done[u] = true;
            if u == b { break }
            for w in (0..4).filter_map(|d| nbr(nb, u, d)) {
                let cw = cost[u].max(v[w]);
                if !done[w] && cw < cost[w] { (cost[w], from[w]) = (cw, u); heap.push(Reverse((okey(cw), w))) }
            }
        }
        let mut path = vec![b];
        while let Some(&u) = path.last() { if u == a || from[u] == NONE { break } path.push(from[u]) }
        path.reverse();
        Route { energy: path.iter().map(|&u| v[u]).collect(), path, barrier: cost[b] }
    }

    /// The analysed landscape of a preset id.
    pub fn landscape(id: &str) -> Result<Land, String> {
        let Some(&(_, _, _, _, f)) = LANDSCAPES.iter().find(|l| l.0 == id) else { return Err(format!("No landscape has the id \"{}\".", cut(id, 40))) };
        let (x, y) = (|s: usize| LO + (s % GRID) as f64 * H, |s: usize| LO + (s / GRID) as f64 * H);
        Ok(Land { id: id.into(), ..analyse((0..GRID * GRID).map(|s| f(x(s), y(s))).collect(), GRID) })
    }
    /// The (x, y) coordinates of a node of the landscape grid.
    pub fn coords(s: usize) -> (f64, f64) { (LO + (s % GRID) as f64 * H, LO + (s / GRID) as f64 * H) }

    /// The Boltzmann law exp(−V/T)/Z on the grid, the stationary law of the Metropolis chain: the probability of each
    /// basin, of the global minimum node, and the mean energy. An exact finite sum.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Boltz { pub basins: Vec<f64>, pub at_min: f64, pub energy: f64 }
    pub fn boltzmann(l: &Land, t: f64) -> Boltz {
        let (mut p, mut z, mut e) = (vec![0.0; l.minima.len()], 0.0, 0.0);
        for s in 0..l.n { let w = (-(l.v[s] - l.vmin) / t).exp(); z += w; e += w * l.v[s]; p[l.basin[s]] += w }
        Boltz { basins: p.iter().map(|x| x / z).collect(), at_min: (-(l.v[l.global_node] - l.vmin) / t).exp() / z, energy: e / z }
    }

    /// The exact mean exit time E_s[τ] of the Metropolis chain at temperature t, τ the first step with an energy below
    /// V(start): it solves (I − P) h = 1 on the nodes at or above V(start) by a banded elimination in the form of
    /// Grassmann, Taksar and Heyman, so each pivot is a sum of positive terms. The diagonal slot of each band row is never
    /// read, so the row updates run over whole slices.
    pub fn mean_exit_time(l: &Land, t: f64, start: usize) -> f64 {
        let (v, n, g) = (&l.v, l.n, l.g);
        let w = 2 * g + 1;
        let out: Vec<bool> = v.iter().map(|&x| x < v[start]).collect();
        let (mut off, mut leak, mut rhs, mut piv) = (vec![0.0; n * w], vec![0.0; n], vec![0.0; n], vec![0.0; n]);
        for s in (0..n).filter(|&s| !out[s]) {
            rhs[s] = 1.0;
            for u in (0..4).filter_map(|d| nbr(&l.nb, s, d)) {
                let p = 0.25 * (-(v[u] - v[s]) / t).exp().min(1.0);
                if out[u] { leak[s] += p } else { off[s * w + u + g - s] = p }
            }
        }
        for k in (0..n).filter(|&k| !out[k]) {
            let (rk, len) = (k * w, (n - 1).min(k + g) - k);
            let p = leak[k] + off[rk + g + 1..rk + g + 1 + len].iter().sum::<f64>();
            piv[k] = p;
            for i in k + 1..=k + len {
                let ri = i * w;
                if out[i] || off[ri + k + g - i] == 0.0 { continue }
                let m = off[ri + k + g - i] / p;
                leak[i] += m * leak[k];
                rhs[i] += m * rhs[k];
                let (a, b) = off.split_at_mut(ri);
                for (d, s) in b[k + 1 + g - i..k + 1 + g - i + len].iter_mut().zip(&a[rk + g + 1..rk + g + 1 + len]) { *d += m * s }
                b[k + g - i] = 0.0;
            }
        }
        let mut h = vec![0.0; n];
        for k in (0..n).rev().filter(|&k| !out[k]) {
            let (rk, top) = (k * w, (n - 1).min(k + g));
            h[k] = (rhs[k] + (k + 1..=top).map(|j| off[rk + j + g - k] * h[j]).sum::<f64>()) / piv[k];
        }
        h[start]
    }

    /// The Metropolis chain on the grid: each step proposes move e = 4x + d to one of the 4 neighbours with probability
    /// 1/4 and accepts it with probability min(1, exp(−β ΔV)). A move off the grid goes to x itself (ΔV = 0), which is the
    /// refusal of physics.js. `to` holds the target of each move; `acceptance` tabulates the probabilities for one β.
    fn targets(l: &Land) -> Vec<usize> { (0..4 * l.n).map(|e| if l.nb[e] < 0 { e / 4 } else { l.nb[e] as usize }).collect() }
    fn acceptance(l: &Land, to: &[usize], beta: f64) -> Vec<f64> { to.iter().enumerate().map(|(e, &y)| (-beta * (l.v[y] - l.v[e / 4])).exp().min(1.0)).collect() }
    /// One Metropolis step from x. Both uniforms are drawn at every step, so no branch depends on them.
    #[inline]
    fn step(to: &[usize], acc: &[f64], x: usize, st: &mut Src) -> usize { let e = 4 * x + (st.u() * 4.0) as usize; if st.u() < acc[e] { to[e] } else { x } }
    fn walk(to: &[usize], acc: &[f64], mut x: usize, steps: usize, st: &mut Src) -> usize { for _ in 0..steps { x = step(to, acc, x, st) } x }

    /// The cooling schedules of an annealing job: T_0, T_end, K steps and the constant c = κ d* of the logarithmic one.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub struct Cool { pub t0: f64, pub tend: f64, pub steps: usize, pub c: f64 }
    impl Cool {
        /// The temperature of schedule `kind` (an index of SCHEDULES) at step k.
        pub fn t(&self, kind: usize, k: usize) -> f64 {
            let f = if self.steps > 1 { k as f64 / (self.steps - 1) as f64 } else { 1.0 };
            match kind { 0 => self.t0.min(self.c / ((k + 2) as f64).ln()), 1 => self.t0 * (self.tend / self.t0).powf(f), 2 => self.t0 + (self.tend - self.t0) * f, _ => self.tend }
        }
    }

    /* ---------- sandpiles ---------- */

    /// The 4 targets of each site of an L × L sandpile (+x, −x, +y, −y). Open: a grain sent off the lattice is lost (−1).
    /// Closed: it stays on the site that toppled. Periodic: it wraps around.
    pub fn lattice(l: usize, boundary: &str) -> Vec<[i32; 4]> {
        let li = l as i64;
        (0..li * li).map(|s| {
            let (i, j) = (s % li, s / li);
            let at = |x: i64, y: i64| -> i32 {
                if (0..li).contains(&x) && (0..li).contains(&y) { (x + li * y) as i32 }
                else if boundary == "periodic" { ((x + li) % li + li * ((y + li) % li)) as i32 } else if boundary == "closed" { s as i32 } else { -1 }
            };
            [at(i + 1, j), at(i - 1, j), at(i, j + 1), at(i, j - 1)]
        }).collect()
    }

    /// x = Δ⁻¹ b by conjugate gradients for Δ = 4I − (1 − ε)(A + R): A moves one grain to each target, R keeps the grains
    /// that a closed boundary sends back. Returns x, the iterations and the relative residual (it stops at 1e-12).
    pub fn solve_delta(l: usize, boundary: &str, eps: f64, b: &[f64]) -> (Vec<f64>, usize, f64) {
        let (n, nb, keep) = (l * l, lattice(l, boundary), 1.0 - eps);
        let dot = |a: &[f64], c: &[f64]| a.iter().zip(c).map(|(x, y)| x * y).sum::<f64>();
        let (mut x, mut r, mut p, mut q) = (vec![0.0; n], b.to_vec(), b.to_vec(), vec![0.0; n]);
        let (b2, mut it) = (dot(b, b), 0);
        let mut rr = b2;
        while it < 20 * l + 2000 && rr > 1e-24 * b2 {
            for s in 0..n { q[s] = 4.0 * p[s] - keep * nb[s].iter().filter(|&&u| u >= 0).map(|&u| p[u as usize]).sum::<f64>() }
            let alpha = rr / dot(&p, &q);
            for i in 0..n { x[i] += alpha * p[i]; r[i] -= alpha * q[i] }
            let next = dot(&r, &r);
            for i in 0..n { p[i] = r[i] + next / rr * p[i] }
            (rr, it) = (next, it + 1);
        }
        (x, it, (rr / b2).sqrt())
    }

    /// The exact mean number of topplings for each drive in the stationary state and the residual of its solve (Dhar 1990):
    /// Δ E[n] = E[added]. The Manna rule moves 2 grains to random targets, so its mean is twice the BTW one.
    pub fn mean_size(j: &Sand, l: usize) -> (f64, f64) {
        let n = l * l;
        let (x, _, res) = solve_delta(l, &j.boundary, j.eps, &vec![1.0; n]);
        let v = if j.drive == "centre" { x[l / 2 + l * (l / 2)] } else { x.iter().sum::<f64>() / n as f64 };
        (if j.rule == "manna" { 2.0 } else { 1.0 } * j.grains * v, res)
    }

    /// Dhar's burning test for the BTW rule with an open boundary: a stable configuration is recurrent exactly when every
    /// site topples once after it gets one grain for each of its targets off the lattice.
    pub fn recurrent(z: &[i32], l: usize) -> bool {
        let (n, nb) = (l * l, lattice(l, "open"));
        let (mut h, mut count, mut stack) = (z.to_vec(), vec![0u32; n], vec![]);
        for s in 0..n {
            h[s] += nb[s].iter().filter(|&&t| t < 0).count() as i32;
            if h[s] >= 4 { stack.push(s) }
        }
        while let Some(s) = stack.pop() {
            if h[s] < 4 { continue }
            h[s] -= 4;
            count[s] += 1;
            if count[s] > 1 { return false }
            for t in nb[s].into_iter().filter(|&t| t >= 0).map(|t| t as usize) { h[t] += 1; if h[t] >= 4 { stack.push(t) } }
            if h[s] >= 4 { stack.push(s) }
        }
        count.iter().all(|&c| c == 1)
    }

    /// The log bin of a positive size, PER_OCTAVE bins for each factor of 2, and the integers [lo, hi] of bin k.
    pub fn bin_of(v: f64) -> usize { ((PER_OCTAVE * v.log2() + 1e-9).floor() as usize).min(BINS - 1) }
    pub fn bin_range(k: usize) -> (f64, f64) { let e = |k: usize| (2f64.powf(k as f64 / PER_OCTAVE) - 1e-9).ceil(); (e(k), e(k + 1) - 1.0) }

    /// A sandpile in motion: heights z, the marks of the next update list, the topplings of each site in the current
    /// avalanche, the `area` sites that toppled, and the grain counts. The lists have n + 1 slots and grow without a
    /// branch: each candidate is written, and the length grows only when it is new (a coin flip that a branch predicts badly).
    struct Pile<'a> {
        nb: &'a [[i32; 4]], z: Vec<i32>, mark: Vec<u64>, cnt: Vec<u32>, touched: Vec<usize>, area: usize, cur: Vec<usize>, nxt: Vec<usize>, stamp: u64, th: i32, manna: bool,
        eps: f64, centre: Option<usize>, grains: usize, l: usize, edge: i64, bulk: i64, added: i64, steps: u64,
    }
    impl Pile<'_> {
        /// Add the grains and relax with the parallel update (each site unstable at the start of a time step topples once
        /// in it). Returns the size; `touched` holds the sites that toppled and `steps` the duration.
        fn drive(&mut self, st: &mut Src) -> Result<u64, String> {
            let Pile { nb, z, mark, cnt, touched, area, cur, nxt, stamp, th, manna, eps, centre, grains, l, edge, bulk, added, steps } = self;
            let (th, manna, eps, n, mut size, mut len) = (*th, *manna, *eps, z.len(), 0u64, 0);
            *stamp += 1;
            let mut mk = *stamp;
            (*steps, *added) = (0, *added + *grains as i64);
            // Put site t on list v (length m) when it is unstable and not yet on it.
            let put = |z: &[i32], mark: &mut [u64], v: &mut [usize], m: &mut usize, t: usize, mk: u64| {
                let up = (z[t] >= th) & (mark[t] != mk);
                v[*m] = t;
                *m += usize::from(up);
                mark[t] = if up { mk } else { mark[t] };
            };
            for _ in 0..*grains {
                let s = centre.unwrap_or_else(|| ((st.u() * n as f64) as usize).min(n - 1));
                z[s] += 1;
                put(z, mark, cur, &mut len, s, mk);
            }
            while len > 0 {
                mk += 1;
                let (mut m, mut toppled) = (0, false);
                for q in 0..len {
                    let s = cur[q];
                    if z[s] < th { continue }
                    (z[s], toppled, size) = (z[s] - th, true, size + 1);
                    touched[*area] = s;
                    *area += usize::from(cnt[s] == 0);
                    cnt[s] += 1;
                    let ts = nb[s];
                    for k in 0..th as usize {
                        if eps > 0.0 && st.u() < eps { *bulk += 1; continue }
                        let t = ts[if manna { (st.u() * 4.0) as usize } else { k }];
                        if t < 0 { *edge += 1; continue }
                        z[t as usize] += 1;
                        put(z, mark, nxt, &mut m, t as usize, mk);
                    }
                    put(z, mark, nxt, &mut m, s, mk);
                }
                if toppled { *steps += 1 }
                if size > MAX_TOPPLINGS { return Err(format!("An avalanche passed {MAX_TOPPLINGS} topplings at L = {l}: the dynamics may not stop.")) }
                std::mem::swap(cur, nxt);
                len = m;
            }
            *stamp = mk;
            Ok(size)
        }
        fn touched(&self) -> &[usize] { &self.touched[..self.area] }
        fn clear(&mut self) { for &u in &self.touched[..self.area] { self.cnt[u] = 0 } self.area = 0 }
    }

    /// The statistics of one sandpile chain after its warm-up: drives, drives with no toppling, the sum and the largest
    /// size, the sums of s^q, the log-binned counts of size, area and duration, the height counts at the central sites,
    /// the mean height in each half of the drives, the grain balance, the burning test after the warm-up, the box counts
    /// and block variances at `scales`, and for chain 0 the final lattice and the footprint of its largest avalanche.
    #[derive(Clone, Debug, Default, PartialEq)]
    pub struct ChainOut {
        pub drives: usize, pub zero: usize, pub sum: f64, pub max_s: u64, pub moments: Vec<f64>, pub hists: [Vec<f64>; 3], pub heights: Vec<f64>, pub density: [Option<f64>; 2],
        pub added: i64, pub lost_edge: i64, pub lost_bulk: i64, pub mass_change: i64, pub recurrent: Option<bool>, pub burn: usize, pub scales: Vec<usize>,
        pub boxes: Option<Vec<f64>>, pub n_box: usize, pub block_var: Option<Vec<f64>>, pub fin: Option<Vec<i32>>, pub footprint: Option<Vec<u32>>,
    }

    /// One sandpile chain: a warm-up of ⌈4L²/g⌉ drives, then the recorded drives. The heights of the central sites every 16
    /// drives, the mean height every 64, the block variances 64 times in all, and the box counts of each avalanche with an
    /// area of at least max(16, L²/16).
    pub fn sandpile_chain(j: &Sand, l: usize, chain: usize, seed: u64, display: bool) -> Result<ChainOut, String> {
        let (n, nb, manna) = (l * l, lattice(l, &j.boundary), j.rule == "manna");
        let th = if manna { 2 } else { 4 };
        let mut st = Src::new(seed, ST_SAND, chain as u64, l as u64, false);
        let mut p = Pile { nb: &nb, z: vec![0; n], mark: vec![0; n], cnt: vec![0; n], touched: vec![0; n + 1], area: 0, cur: vec![0; n + 1], nxt: vec![0; n + 1], stamp: 0, th,
            manna, eps: j.eps, centre: (j.drive == "centre").then_some(l / 2 + l * (l / 2)), grains: j.grains as usize, l, edge: 0, bulk: 0, added: 0, steps: 0 };
        let scales: Vec<usize> = SCALES.into_iter().filter(|&b| 2 * b <= l && l % b == 0).collect();
        let burn = (4 * n).div_ceil(p.grains);
        for _ in 0..burn { p.drive(&mut st)?; p.clear() }
        let mass0: i64 = p.z.iter().map(|&x| x as i64).sum();
        (p.added, p.edge, p.bulk) = (0, 0, 0);
        let d = j.drives as usize;
        let mut o = ChainOut { drives: d, burn, scales: scales.clone(), moments: vec![0.0; 5], hists: [vec![0.0; BINS], vec![0.0; BINS], vec![0.0; BINS]], heights: vec![0.0; th as usize],
            recurrent: (!manna && j.boundary == "open" && j.eps == 0.0).then(|| recurrent(&p.z, l)), ..ChainOut::default() };
        let mut seen: Vec<Vec<u64>> = scales.iter().map(|&b| vec![0; (l / b) * (l / b)]).collect();
        let (mut box_sum, mut var_sum, mut stamp, mut n_var, mut dens, mut nd) = (vec![0.0; scales.len()], vec![0.0; scales.len()], 0u64, 0usize, [0.0; 2], [0usize; 2]);
        let (lo, every, min_box, mut cs) = (l / 4, (d / 64).max(1), 16.max(n / 16), vec![0; scales.len()]);
        let hi = lo + (l / 2).max(1);
        // Each block size is a power of 2 that divides L: block (x >> sh, y >> sh) of (L >> sh)².
        let sh: Vec<(u32, usize)> = scales.iter().map(|&b| (b.trailing_zeros(), l / b)).collect();
        for k in 0..d {
            let s = p.drive(&mut st)?;
            let a = p.area;
            o.sum += s as f64;
            if s == 0 { o.zero += 1 } else {
                for (h, v) in o.hists.iter_mut().zip([s as f64, a as f64, p.steps as f64]) { h[bin_of(v)] += 1.0 }
                let (x, r) = (s as f64, (s as f64).sqrt());
                for (m, q) in o.moments.iter_mut().zip([x, x * r, x * x, x * x * r, x * x * x]) { *m += q } // s^q for q in ORDERS
                if display && s > o.max_s { let mut f = vec![0; n]; for &u in p.touched() { f[u] = p.cnt[u] } o.footprint = Some(f) }
                if a >= min_box && scales.len() > 1 {
                    stamp += 1;
                    cs.fill(0);
                    for &u in p.touched() {
                        let (x, y) = (u % l, u / l);
                        for (i, &(k, w)) in sh.iter().enumerate() { let id = (x >> k) + w * (y >> k); if seen[i][id] != stamp { seen[i][id] = stamp; cs[i] += 1 } }
                    }
                    for (b, &c) in box_sum.iter_mut().zip(&cs) { *b += (c as f64).ln() }
                    o.n_box += 1;
                }
                o.max_s = o.max_s.max(s);
            }
            p.clear();
            if k % 16 == 0 { for jj in lo..hi { for i in lo..hi { o.heights[p.z[i + l * jj] as usize] += 1.0 } } }
            if k % 64 == 0 { let h = usize::from(2 * k >= d); dens[h] += p.z.iter().map(|&x| x as f64).sum::<f64>() / n as f64; nd[h] += 1 }
            if k % every == 0 && scales.len() > 1 {
                for (i, &(k, w)) in sh.iter().enumerate() {
                    let mut m = vec![0.0; w * w];
                    for (u, &x) in p.z.iter().enumerate() { m[((u % l) >> k) + w * ((u / l) >> k)] += x as f64 }
                    let (c, bb) = (m.len() as f64, (1 << (2 * k)) as f64);
                    let (mu, m2) = m.iter().fold((0.0, 0.0), |(a, q), v| (a + v / bb, q + (v / bb).powi(2)));
                    // The variance between blocks with the divisor m − 1, so a few large blocks give no bias.
                    var_sum[i] += if m.len() > 1 { (m2 / c - (mu / c).powi(2)) * c / (c - 1.0) } else { 0.0 };
                }
                n_var += 1;
            }
        }
        let (nb_, nv) = (o.n_box as f64, n_var as f64);
        o.density = [0, 1].map(|h| (nd[h] > 0).then(|| dens[h] / nd[h] as f64));
        (o.added, o.lost_edge, o.lost_bulk, o.mass_change) = (p.added, p.edge, p.bulk, p.z.iter().map(|&x| x as i64).sum::<i64>() - mass0);
        o.boxes = (o.n_box > 0).then(|| box_sum.iter().map(|v| v / nb_).collect());
        o.block_var = (n_var > 0).then(|| var_sum.iter().map(|v| v / nv).collect());
        if display { o.fin = Some(p.z.clone()) }
        Ok(o)
    }

    /* ---------- the catalogue, the page state and the jobs ---------- */

    /// The examples of the lab: id, family ("landscape" or "sandpile") and the method card that the page shows beside it.
    pub const EXAMPLES: [(&str, &str, &str); 6] = [("metastable-exit", "landscape", "annealing"), ("annealing-schedules", "landscape", "annealing"), ("tempering-wells", "landscape", "tempering"),
        ("sandpile-btw", "sandpile", "sandpile"), ("finite-size", "sandpile", "fss"), ("coarse-graining", "sandpile", "coarse")];

    /// An example of physics.json: its text and its settings (the page's ph_* fields).
    #[derive(Clone, Debug, PartialEq)]
    pub struct Example { pub id: String, pub family: String, pub title: String, pub problem: String, pub observe: String, pub assumptions: String, pub diagnostics: String, pub interpretation: String, pub settings: Value }
    /// A link of a method card to an example, with settings on top of the example's own.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Link { pub example: String, pub settings: Value, pub text: String }
    /// A method card of physics.json: its estimator, assumptions, settings, and its suitable, failure and comparison
    /// examples (`with` names the method of the comparison).
    #[derive(Clone, Debug, PartialEq)]
    pub struct Method {
        pub id: String, pub name: String, pub family: String, pub estimator: String, pub estimator_text: String, pub assumptions: Vec<String>, pub settings: Vec<String>,
        pub suitable: Link, pub failure: Link, pub comparison: Link, pub with: String,
    }
    impl Method {
        /// The three linked examples by part name.
        pub fn links(&self) -> [(&'static str, &Link); 3] { [("suitable", &self.suitable), ("failure", &self.failure), ("comparison", &self.comparison)] }
    }
    /// physics.json: the statement on universality classes, the examples and the method cards.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Catalogue { pub statement: String, pub examples: Vec<Example>, pub methods: Vec<Method> }
    impl Catalogue {
        /// The state that opens example `id` with `extra` settings on top (see State::of).
        pub fn state(&self, id: &str, extra: &Value) -> Result<State, String> {
            State::of(self.examples.iter().find(|x| x.id == id).ok_or_else(|| format!("No physics example has the id \"{}\".", cut(id, 40)))?, extra)
        }
    }

    /// Read physics.json. Each example must be one of EXAMPLES, and each method link must name an example of the file.
    pub fn catalogue(json: &str) -> Result<Catalogue, String> {
        let v: Value = serde_json::from_str(json).map_err(|e| format!("physics.json is not valid JSON: {e}"))?;
        let t = |x: &Value, k: &str| x[k].as_str().unwrap_or("").to_string();
        let list = |x: &Value| x.as_array().map_or(vec![], |a| a.iter().filter_map(|s| s.as_str().map(String::from)).collect());
        let set = |x: &Value| if x["settings"].is_object() { x["settings"].clone() } else { json!({}) };
        let mut examples = vec![];
        for x in v["examples"].as_array().ok_or("physics.json has no examples.")? {
            let id = t(x, "id");
            if !EXAMPLES.iter().any(|e| e.0 == id) { return Err(format!("The example \"{}\" of physics.json is not an example of the physics lab.", cut(&id, 40))) }
            examples.push(Example { id, family: t(x, "family"), title: t(x, "title"), problem: t(x, "problem"), observe: t(x, "observe"), assumptions: t(x, "assumptions"),
                diagnostics: t(x, "diagnostics"), interpretation: t(x, "interpretation"), settings: set(x) });
        }
        let link = |m: &Value, k: &str| -> Result<Link, String> {
            let (x, e) = (&m[k], t(&m[k], "example"));
            if !examples.iter().any(|y| y.id == e) { return Err(format!("The {k} example \"{}\" of the method \"{}\" is not in physics.json.", cut(&e, 40), cut(&t(m, "id"), 40))) }
            Ok(Link { example: e, settings: set(x), text: t(x, "text") })
        };
        let methods = v["methods"].as_array().ok_or("physics.json has no methods.")?.iter().map(|m| Ok(Method { id: t(m, "id"), name: t(m, "name"), family: t(m, "family"),
            estimator: t(m, "estimator"), estimator_text: t(m, "estimatorText"), assumptions: list(&m["assumptions"]), settings: list(&m["settings"]), suitable: link(m, "suitable")?,
            failure: link(m, "failure")?, comparison: link(m, "comparison")?, with: t(&m["comparison"], "with") })).collect::<Result<Vec<_>, String>>()?;
        Ok(Catalogue { statement: t(&v, "statement"), examples, methods })
    }

    /// A setting of the page: a choice among values, or a number from min to max (an integer when `int`), with its default.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub enum Field { Pick(&'static [&'static str], &'static str), Num { min: f64, max: f64, def: f64, int: bool } }
    const fn fnum(min: f64, max: f64, def: f64) -> Field { Field::Num { min, max, def, int: false } }
    const fn fint(min: f64, max: f64, def: f64) -> Field { Field::Num { min, max, def, int: true } }
    /// The page's ph_* fields of the physics lab with their labels, limits and defaults (model.js).
    pub const FIELDS: [(&str, &str, Field); 27] = [
        ("ph_land", "Energy landscape", Field::Pick(&["double-well", "three-wells", "rugged"], "double-well")),
        ("ph_tlo", "Lowest temperature of the exit times", fnum(0.05, 2.0, 0.12)), ("ph_thi", "Highest temperature of the exit times", fnum(0.05, 2.0, 0.3)),
        ("ph_cap", "Step limit of each exit, log2", fint(10.0, 24.0, 20.0)), ("ph_reps", "Replicates or chains of the landscape experiments, log2", fint(1.0, 10.0, 7.0)),
        ("ph_t0", "Start temperature T_0 of annealing", fnum(0.05, 5.0, 1.0)), ("ph_tend", "End temperature of annealing", fnum(0.01, 2.0, 0.05)),
        ("ph_kappa", "Constant c/d* of the logarithmic schedule", fnum(0.25, 4.0, 1.0)), ("ph_steps", "Steps of annealing or sweeps of tempering, log2", fint(8.0, 20.0, 16.0)),
        ("ph_tmin", "Lowest temperature T_min of parallel tempering", fnum(0.02, 2.0, 0.08)), ("ph_tmax", "Highest temperature T_max of parallel tempering", fnum(0.05, 5.0, 1.0)),
        ("ph_k", "Temperatures of parallel tempering", fint(2.0, 16.0, 8.0)), ("ph_inner", "Metropolis steps in each sweep", fint(1.0, 64.0, 8.0)),
        ("ph_start", "Start of the tempering chains", Field::Pick(&["trap", "spread"], "trap")), ("ph_rule", "Toppling rule", Field::Pick(&["btw", "manna"], "btw")),
        ("ph_bc", "Boundary of the sandpile", Field::Pick(&["open", "closed", "periodic"], "open")), ("ph_drive", "Drive of the sandpile", Field::Pick(&["random", "centre"], "random")),
        ("ph_g", "Grains for each drive", fint(1.0, 64.0, 1.0)), ("ph_eps", "Bulk dissipation ε", fnum(0.0, 0.5, 0.0)), ("ph_l", "Lattice size L", fint(4.0, 128.0, 32.0)),
        ("ph_lmax", "Largest lattice size of finite-size scaling", Field::Pick(&["16", "32", "64", "128"], "64")),
        ("ph_drives", "Recorded drives of each chain, log2", fint(8.0, 18.0, 14.0)), ("ph_chains", "Sandpile chains, log2", fint(1.0, 6.0, 3.0)),
        ("ph_tau", "Collapse exponent τ", fnum(1.0, 2.0, 1.27)), ("ph_d", "Collapse exponent D", fnum(1.0, 4.0, 2.75)),
        ("ph_b", "Block size b of the coarse-graining", Field::Pick(&["1", "2", "4", "8", "16"], "4")),
        ("ph_plot", "Figure of the physics lab", Field::Pick(&["land", "arrhenius", "route", "exits", "schedules", "energy", "success", "basins", "swaps", "ladder", "grid", "sizes",
            "heights", "collapse", "moments", "mean", "blockvar", "boxes"], "arrhenius")),
    ];
    /// The native defaults: the page's sizes, made smaller where a default run took more than about 0.2 s natively (release
    /// build, one thread); the page's sizes stay valid settings. Annealing keeps K = 2^16 steps, which its text uses, with
    /// 2^6 replicates instead of 2^7. Finite-size scaling and coarse-graining use 2^2 chains instead of 2^3: at L = 64 the
    /// warm-up of 4L² grains costs as much as the recorded drives. With g grains for each drive, State::of also divides the
    /// drives by g (to 2^8 at least) unless the extra settings give ph_drives, so a drive of 32 grains (the failure example
    /// of the sandpile card: 1.8 s with the page's sizes) costs about as much as 32 drives of 1 grain.
    pub const NATIVE: [(&str, &str, f64); 3] = [("annealing-schedules", "ph_reps", 6.0), ("finite-size", "ph_chains", 2.0), ("coarse-graining", "ph_chains", 2.0)];

    /// The state of the page: the example, the seed and the ph_* fields.
    #[derive(Clone, Debug, PartialEq)]
    pub struct State { pub example: String, pub seed: f64, pub fields: Map<String, Value> }
    impl State {
        /// The state that opens an example: the page's defaults, the example's settings, the NATIVE sizes, then `extra`
        /// (a JSON object of ph_* fields and "seed", such as a method card's settings). The seed defaults to 1.
        pub fn of(ex: &Example, extra: &Value) -> Result<State, String> {
            let fields = FIELDS.iter().map(|(k, _, f)| (k.to_string(), match *f { Field::Pick(_, d) => json!(d), Field::Num { def, .. } => json!(def) })).collect();
            let mut s = State { example: ex.id.clone(), seed: 1.0, fields };
            s.apply(&ex.settings)?;
            for (e, k, x) in NATIVE { if e == ex.id { s.fields.insert(k.into(), json!(x)); } }
            s.apply(extra)?;
            if ex.family == "sandpile" && extra.get("ph_drives").is_none() { s.fields.insert("ph_drives".into(), json!((s.num("ph_drives") - s.num("ph_g").log2().floor()).max(8.0))); }
            Ok(s)
        }
        /// Set the fields of a JSON object, each checked against FIELDS; "seed" sets the seed (prepare checks it).
        pub fn apply(&mut self, v: &Value) -> Result<(), String> {
            let mut errs = vec![];
            for (k, x) in v.as_object().into_iter().flatten() {
                if k == "seed" { match x.as_f64() { Some(s) => self.seed = s, None => errs.push("The seed must be a number.".to_string()) } continue }
                match check(k, x) { Ok(x) => { self.fields.insert(k.clone(), x); } Err(e) => errs.push(e) }
            }
            if errs.is_empty() { Ok(()) } else { Err(errs.join(" ")) }
        }
        /// A field as a number (a choice such as ph_lmax = "64" is read as its number), NaN when it is not one.
        pub fn num(&self, k: &str) -> f64 { self.fields.get(k).and_then(|x| x.as_f64().or_else(|| x.as_str().and_then(|s| s.parse().ok()))).unwrap_or(f64::NAN) }
        pub fn text(&self, k: &str) -> &str { self.fields.get(k).and_then(Value::as_str).unwrap_or("") }
    }
    fn check(k: &str, x: &Value) -> Result<Value, String> {
        let Some(&(_, label, f)) = FIELDS.iter().find(|f| f.0 == k) else { return Err(format!("\"{}\" is not a setting of the physics lab.", cut(k, 40))) };
        match f {
            Field::Pick(vals, _) => {
                let t = x.as_str().map(String::from).or_else(|| x.as_f64().map(|v| v.to_string())).unwrap_or_default();
                if vals.contains(&t.as_str()) { Ok(json!(t)) } else { Err(format!("{label} must be one of {}.", vals.join(", "))) }
            }
            Field::Num { min, max, int, .. } => match x.as_f64() {
                Some(v) if v >= min && v <= max && (!int || v.fract() == 0.0) => Ok(json!(v)),
                _ => Err(format!("{label} must be {} from {min} to {max}.", if int { "an integer" } else { "a number" })),
            },
        }
    }

    /// 5 temperatures from lo to hi, equally spaced in 1/T, with 4 significant digits.
    pub fn ladder(lo: f64, hi: f64) -> Vec<f64> {
        if !(hi > lo) { return vec![lo, hi] }
        (0..5).rev().map(|i| sig(1.0 / (1.0 / hi + i as f64 * (1.0 / lo - 1.0 / hi) / 4.0), 4)).collect()
    }
    /// The sizes of finite-size scaling: 8, 16, ... up to lmax.
    pub fn fss_sizes(lmax: f64) -> Vec<f64> { [8.0, 16.0, 32.0, 64.0, 128.0].into_iter().filter(|&l| l <= lmax).collect() }

    /// A sandpile job: the rule ("btw" or "manna"), the boundary ("open", "closed", "periodic"), the drive ("random" or
    /// "centre"), the grains of each drive, the bulk dissipation ε, the lattice sizes, the recorded drives and the chains.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Sand { pub rule: String, pub boundary: String, pub drive: String, pub grains: f64, pub eps: f64, pub sizes: Vec<f64>, pub drives: f64, pub chains: f64 }
    /// A job as physics.js builds it from a page state. Numbers stay f64 so `prepare` can check them.
    #[derive(Clone, Debug, PartialEq)]
    pub enum Job {
        /// Exit times from the trap at each temperature: a step limit and the replicates at each temperature.
        Exit { land: String, temps: Vec<f64>, steps: f64, reps: f64 },
        /// The 4 cooling schedules from T_0 to T_end over K steps, κ = c/d*, on the same streams for each replicate.
        Anneal { land: String, t0: f64, tend: f64, kappa: f64, steps: f64, reps: f64 },
        /// Parallel tempering with `replicas` temperatures, sweeps of `inner` steps, and `reps` independent chains.
        Temper { land: String, tmin: f64, tmax: f64, replicas: f64, sweeps: f64, inner: f64, start: String, reps: f64 },
        Sand(Sand),
    }

    /// The job of a page state. The exit temperatures are a ladder from ph_tlo to ph_thi; finite-size scaling doubles L
    /// from 8 to ph_lmax.
    pub fn job_of(s: &State) -> Result<Job, String> {
        let (n, t, p2) = (|k: &str| s.num(k), |k: &str| s.text(k).to_string(), |k: &str| 2f64.powf(s.num(k)));
        Ok(match s.example.as_str() {
            "metastable-exit" => Job::Exit { land: t("ph_land"), temps: ladder(n("ph_tlo"), n("ph_thi")), steps: p2("ph_cap"), reps: p2("ph_reps") },
            "annealing-schedules" => Job::Anneal { land: t("ph_land"), t0: n("ph_t0"), tend: n("ph_tend"), kappa: n("ph_kappa"), steps: p2("ph_steps"), reps: p2("ph_reps") },
            "tempering-wells" => Job::Temper { land: t("ph_land"), tmin: n("ph_tmin"), tmax: n("ph_tmax"), replicas: n("ph_k"), sweeps: p2("ph_steps"), inner: n("ph_inner"),
                start: t("ph_start"), reps: p2("ph_reps") },
            "sandpile-btw" | "finite-size" | "coarse-graining" => Job::Sand(Sand { rule: t("ph_rule"), boundary: t("ph_bc"), drive: t("ph_drive"), grains: n("ph_g"), eps: n("ph_eps"),
                sizes: if s.example == "finite-size" { fss_sizes(n("ph_lmax")) } else { vec![n("ph_l")] }, drives: p2("ph_drives"), chains: p2("ph_chains") }),
            e => return Err(format!("No physics example has the id \"{}\".", cut(e, 40))),
        })
    }

    /// A checked job with its seed and, for a landscape job, its analysed landscape.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Prepared { pub job: Job, pub seed: u64, pub land: Option<Land> }

    /// Check a job and its seed with the limits and messages of physics.js; every error is listed, joined by spaces.
    pub fn prepare(job: &Job, seed: f64) -> Result<Prepared, String> {
        let mut e: Vec<String> = vec![];
        let within = |v: f64, lo: f64, hi: f64| v.is_finite() && v >= lo && v <= hi;
        let int = |v: f64| v.fract() == 0.0;
        let pow2 = |v: f64| int(v) && v > 0.0 && v < 1e18 && (v as u64).is_power_of_two();
        let mut need = |ok: bool, msg: &str| if !ok { e.push(msg.to_string()) };
        need(int(seed) && (0.0..=4294967295.0).contains(&seed), "The seed must be an integer from 0 to 2^32 − 1.");
        let mut land = None;
        if let Job::Exit { land: id, reps, .. } | Job::Anneal { land: id, reps, .. } | Job::Temper { land: id, reps, .. } = job {
            match landscape(id) { Ok(l) => land = Some(l), Err(m) => need(false, &m) }
            need(pow2(*reps) && *reps <= 4096.0, "The number of replicates or chains must be a power of 2 up to 4,096.");
        }
        match job {
            Job::Exit { temps, steps, .. } => {
                need((2..=8).contains(&temps.len()) && temps.iter().all(|&t| within(t, 0.02, 5.0)), "The temperatures must be 2 to 8 values from 0.02 to 5.");
                need(within(*steps, 1.0, 16777216.0) && int(*steps), "The step limit must be an integer from 1 to 2^24.");
            }
            Job::Anneal { t0, tend, kappa, steps, .. } => {
                need(within(*t0, 0.02, 5.0) && within(*tend, 0.01, 5.0) && tend < t0, "The schedule needs 0.01 ≤ T_end < T_0 ≤ 5.");
                need(within(*kappa, 0.05, 4.0), "The constant c/d* of the logarithmic schedule must be from 0.05 to 4.");
                need(int(*steps) && within(*steps, 2.0, 4194304.0), "The number of steps must be an integer from 2 to 2^22.");
            }
            Job::Temper { tmin, tmax, replicas, sweeps, inner, start, .. } => {
                need(within(*tmin, 0.02, 5.0) && within(*tmax, 0.02, 5.0) && tmax > tmin, "Parallel tempering needs 0.02 ≤ T_min < T_max ≤ 5.");
                need(int(*replicas) && within(*replicas, 2.0, 16.0), "The number of temperatures must be an integer from 2 to 16.");
                need(int(*sweeps) && within(*sweeps, 8.0, 1048576.0), "The number of sweeps must be an integer from 8 to 2^20.");
                need(int(*inner) && within(*inner, 1.0, 256.0), "The Metropolis steps in each sweep must be an integer from 1 to 256.");
                need(start == "trap" || start == "spread", "The start must be \"trap\" or \"spread\".");
            }
            Job::Sand(j) => {
                need(j.rule == "btw" || j.rule == "manna", "The rule must be \"btw\" or \"manna\".");
                need(["open", "closed", "periodic"].contains(&j.boundary.as_str()), "The boundary must be open, closed or periodic.");
                need(j.drive == "random" || j.drive == "centre", "The drive must be random or centre.");
                need(int(j.grains) && within(j.grains, 1.0, 64.0), "The grains for each drive must be an integer from 1 to 64.");
                need(within(j.eps, 0.0, 0.5), "The bulk dissipation ε must be from 0 to 0.5.");
                need(j.boundary == "open" || j.eps != 0.0, &format!("With a {} boundary and ε = 0 no grain can leave the lattice, so an avalanche can go on for ever. Set ε above 0, or use the open boundary.", cut(&j.boundary, 40)));
                need((1..=6).contains(&j.sizes.len()) && j.sizes.iter().all(|&l| int(l) && within(l, 2.0, 256.0)), "The lattice sizes must be 1 to 6 integers from 2 to 256.");
                need(pow2(j.drives) && j.drives <= 1048576.0, "The recorded drives of each chain must be a power of 2 up to 2^20.");
                need(pow2(j.chains) && (2.0..=64.0).contains(&j.chains), "The number of chains must be a power of 2 from 2 to 64.");
            }
        }
        if e.is_empty() { Ok(Prepared { job: job.clone(), seed: seed as u64, land }) } else { Err(e.join(" ")) }
    }

    /* ---------- runs and their summaries ---------- */

    /// The exit times at one temperature: replicates, censored ones, the mean with its interval, the exact mean, the
    /// log-binned counts of τ and the last states (at most PATH) before the first exit of replicate 0.
    #[derive(Clone, Debug, PartialEq)]
    pub struct TempOut { pub t: f64, pub n: usize, pub censored: usize, pub iv: Iv, pub reference: f64, pub hist: Vec<f64>, pub path: Vec<usize> }
    /// The exit-time experiment: each temperature, the Arrhenius fits of log E[τ] on 1/T from the run and from the exact
    /// means, and the stability level V_m = d* of the trap.
    #[derive(Clone, Debug, PartialEq)]
    pub struct ExitOut { pub temps: Vec<TempOut>, pub fit: Option<Fit>, pub exact_fit: Option<Fit>, pub level: f64 }
    /// One cooling schedule: the probability of ending in the global basin and at the global minimum node, the final energy,
    /// the mean best energy, the mean energy at each checkpoint, the share of each final basin, the final temperature,
    /// the Boltzmann probability of the global basin at it, and Hajek's condition in words.
    #[derive(Clone, Debug, PartialEq)]
    pub struct SchedOut { pub kind: &'static str, pub n: usize, pub success: Iv, pub at_min: Iv, pub energy: Iv, pub best: f64, pub trace: Vec<f64>, pub basins: Vec<f64>, pub fin: f64, pub equilibrium: f64, pub hajek: &'static str }
    /// The paired difference P(a) − P(b) of two schedules on the same streams, with its exact interval given the n10 + n01
    /// discordant replicates (Clopper–Pearson for n10).
    #[derive(Clone, Debug, PartialEq)]
    pub struct PairOut { pub a: &'static str, pub b: &'static str, pub est: f64, pub lo: Option<f64>, pub hi: Option<f64>, pub n10: usize, pub n01: usize }
    /// The annealing experiment: the schedules, the 6 pairs, the checkpoint steps, the temperature of each schedule at
    /// them, about 300 states of replicate 0 under each schedule, d* and c.
    #[derive(Clone, Debug, PartialEq)]
    pub struct AnnealOut { pub schedules: Vec<SchedOut>, pub pairs: Vec<PairOut>, pub checkpoints: Vec<usize>, pub temps: Vec<Vec<f64>>, pub paths: Vec<Vec<usize>>, pub dstar: f64, pub log_c: f64 }
    /// A basin at T_min: its minimum, the exact Boltzmann probability and the estimates of parallel tempering and of one chain.
    #[derive(Clone, Debug, PartialEq)]
    pub struct BasinOut { pub m: usize, pub node: usize, pub energy: f64, pub exact: f64, pub pt: Iv, pub one: Iv }
    /// Parallel tempering: the basins shown (exact probability ≥ 10⁻³ or visited, most probable first, at most 8), the swap
    /// rate of each neighbour pair, the ladder, the mean round trips of a replica, the exact mean energy at T_min, and for
    /// chain 0 about 256 samples of each replica's temperature index, the state at T_min and the single chain's state.
    #[derive(Clone, Debug, PartialEq)]
    pub struct TemperOut { pub basins: Vec<BasinOut>, pub swaps: Vec<Option<f64>>, pub temps: Vec<f64>, pub trips: f64, pub exact_energy: f64, pub trace: Vec<Vec<usize>>, pub cold: Vec<usize>, pub cold_one: Vec<usize>, pub start: usize }
    /// The grain count of a sandpile: added = lost at the boundary + lost in the bulk + change of the mass, exactly.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub struct Balance { pub added: i64, pub lost_edge: i64, pub lost_bulk: i64, pub mass_change: i64, pub exact: bool }
    /// One lattice size: the mean size with Dhar's exact value and its CG residual, the densities (x, density for each
    /// unit, count) of size, area and duration, the moments ⟨s^q⟩, the heights at the central sites (frequencies, mean,
    /// Priezzhev's values when they apply, each frequency over the chains), the mean height in each half of the drives, the
    /// grain balance, the recurrent chains, the box counts (mean log N_b) and block variances with their slopes on log b,
    /// and chain 0's final lattice and largest avalanche (topplings at each site) with its size.
    #[derive(Clone, Debug, PartialEq)]
    pub struct SizeOut {
        pub l: usize, pub chains: usize, pub drives: usize, pub zero: usize, pub mean_s: Iv, pub reference: f64, pub residual: f64, pub size: Vec<(f64, f64, f64)>,
        pub area: Vec<(f64, f64, f64)>, pub duration: Vec<(f64, f64, f64)>, pub moments: Vec<Iv>, pub max_s: u64, pub freq: Vec<f64>, pub mean_height: Iv,
        pub exact_heights: Option<[f64; 4]>, pub height_chains: Vec<Iv>, pub density: [Iv; 2], pub balance: Balance, pub recurrent: Option<usize>, pub burn: usize,
        pub scales: Vec<usize>, pub boxes: Option<Vec<f64>>, pub box_fit: Option<Fit>, pub n_box: usize, pub block_var: Option<Vec<f64>>, pub var_fit: Option<Fit>,
        pub fin: Option<Vec<i32>>, pub footprint: Option<Vec<u32>>, pub footprint_size: u64,
    }
    /// The sandpile experiment: each size, the moment slopes σ(q), the fit of the exact ⟨s⟩ over all sizes and over the two
    /// largest, the fit of σ(q) on q, whether Priezzhev's heights apply, whether the dynamics uses no random number, and
    /// the dynamics in words.
    #[derive(Clone, Debug, PartialEq)]
    pub struct SandOut { pub sizes: Vec<SizeOut>, pub sigma: Vec<(f64, Option<Fit>)>, pub exact_fit: Option<Fit>, pub exact_sigma: Option<Fit>, pub d_fit: Option<Fit>, pub btw_exact: bool, pub fixed: bool, pub dynamics: Vec<String> }
    /// The details of a run, for its figures and diagnostics.
    #[derive(Clone, Debug, PartialEq)]
    pub enum Detail { Exit(ExitOut), Anneal(AnnealOut), Temper(TemperOut), Sand(SandOut) }
    /// A complete run: the result rows, the landscape of a landscape job (for the 3D view and the route), and the details.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Out { pub rows: Vec<Row>, pub land: Option<Land>, pub detail: Detail }

    /// Check and run a job to the end.
    pub fn run(job: &Job, seed: f64) -> Result<Out, String> {
        let Prepared { job, seed, land } = prepare(job, seed)?;
        let (rows, detail) = match (&job, &land) {
            (Job::Sand(j), _) => sandpile(j, seed)?,
            (Job::Exit { temps, steps, reps, .. }, Some(l)) => exits(l, temps, *steps as usize, *reps as usize, seed),
            (Job::Anneal { t0, tend, kappa, steps, reps, .. }, Some(l)) => anneal(l, Cool { t0: *t0, tend: *tend, steps: *steps as usize, c: kappa * l.dstar }, *kappa, *reps as usize, seed),
            (Job::Temper { tmin, tmax, replicas, sweeps, inner, start, reps, .. }, Some(l)) =>
                temper(l, (*tmin, *tmax), *replicas as usize, (*sweeps as usize, *inner as usize), start == "spread", *reps as usize, seed),
            _ => return Err("The job has no landscape.".into()),
        };
        Ok(Out { rows, land, detail })
    }
    /// Run the job of a page state with its seed.
    pub fn run_state(s: &State) -> Result<Out, String> { run(&job_of(s)?, s.seed) }

    fn exits(l: &Land, temps: &[f64], steps: usize, reps: usize, seed: u64) -> (Vec<Row>, Detail) {
        let (level, to) = (l.v[l.trap_node], targets(l));
        let temps: Vec<TempOut> = temps.iter().enumerate().map(|(t, &tt)| {
            let (acc, n) = (acceptance(l, &to, 1.0 / tt), reps as f64);
            let (mut sum, mut sum2, mut censored, mut hist, mut path) = (0.0, 0.0, 0, vec![0.0; BINS], vec![]);
            for i in 0..reps {
                let mut st = Src::new(seed, ST_EXIT, i as u64, t as u64, false);
                let (mut x, mut tau, mut keep) = (l.trap_node, 0, vec![0; if i == 0 { PATH } else { 0 }]);
                while tau < steps {
                    if i == 0 { keep[tau % PATH] = x }
                    tau += 1;
                    x = step(&to, &acc, x, &mut st);
                    if l.v[x] < level { break }
                }
                if i == 0 { let m = tau.min(PATH); path = (0..m).map(|k| keep[(tau - m + k) % PATH]).chain([x]).collect() }
                censored += usize::from(l.v[x] >= level);
                (sum, sum2) = (sum + tau as f64, sum2 + tau as f64 * tau as f64);
                hist[bin_of(tau.max(1) as f64)] += 1.0;
            }
            let iv = if censored > 0 { bare(Some(sum / n), format!("a lower bound: {censored} of {reps} replicates did not leave by the step limit")) } else { clt(n, sum, sum2) };
            TempOut { t: tt, n: reps, censored, iv, reference: mean_exit_time(l, tt, l.trap_node), hist, path }
        }).collect();
        let usable: Vec<&TempOut> = temps.iter().filter(|x| x.censored == 0 && x.iv.est.is_some_and(|e| e > 0.0)).collect();
        let est = |x: &TempOut| x.iv.est.unwrap_or(f64::NAN);
        let ses: Vec<Option<f64>> = usable.iter().map(|x| x.iv.se.map(|s| s / est(x)).filter(|&s| s != 0.0)).collect();
        let fit = fit_line(&usable.iter().map(|x| 1.0 / x.t).collect::<Vec<_>>(), &lns(usable.iter().map(|x| est(x))), Some(&ses));
        let refs: Vec<&&TempOut> = usable.iter().filter(|x| x.reference > 0.0).collect();
        let exact_fit = fit_line(&refs.iter().map(|x| 1.0 / x.t).collect::<Vec<_>>(), &lns(refs.iter().map(|x| x.reference)), None);
        let (nu, nr) = (usable.len() as f64, refs.len() as f64);
        let mut rows: Vec<Row> = temps.iter().map(|x| row(format!("Mean exit time at T = {}", x.t), "steps", x.iv.clone(), x.n as f64, Some(x.reference),
            "exact: a linear solve of (I − P) h = 1, rounding error only", &["observation", "numerical"])).collect();
        rows.push(row("Slope of log E[τ] against 1/T, from the run".into(), "energy", fit_iv(&fit, "least squares of the log means; the 95 % interval holds their Monte Carlo error only".into(),
            "needs 2 temperatures with no censored replicate"), nu, Some(l.dstar), "the stability level V_m of the trap: the limit of T log E[τ] as T → 0", &["observation", "theorem"]));
        rows.push(row("Slope of log E[τ] against 1/T, from the exact values".into(), "energy", bare(exact_fit.as_ref().map(|f| f.slope), "least squares of the exact log means: at a finite T the slope is not yet V_m"),
            nr, Some(l.dstar), "the stability level V_m of the trap: the limit of T log E[τ] as T → 0, not the slope at these temperatures", &["numerical", "theorem"]));
        (rows, Detail::Exit(ExitOut { temps, fit, exact_fit, level: l.dstar }))
    }

    fn anneal(l: &Land, cool: Cool, kappa: f64, reps: usize, seed: u64) -> (Vec<Row>, Detail) {
        let (kk, nm, n, to) = (cool.steps, l.minima.len(), reps as f64, targets(l));
        let dvs: Vec<f64> = to.iter().enumerate().map(|(e, &y)| l.v[y] - l.v[e / 4]).collect();
        let checks: Vec<usize> = (0..CHECKPOINTS).map(|k| ((k + 1) * kk / CHECKPOINTS).saturating_sub(1)).collect();
        let every = (kk / 300).max(1);
        // For each schedule: n, wins, ends at the minimum node, sums of E, E² and the best E; the trace; the final basins.
        let mut acc = vec![([0.0; 6], vec![0.0; CHECKPOINTS], vec![0.0; nm]); 4];
        let (mut wins, mut paths) = (vec![false; reps * 4], vec![]);
        // Schedule by schedule, with a table of 1/T_k; each replicate i reads the same stream under every schedule.
        for (s, (a, trace, basins)) in acc.iter_mut().enumerate() {
            let betas: Vec<f64> = (0..kk).map(|k| 1.0 / cool.t(s, k)).collect();
            for i in 0..reps {
                let mut st = Src::new(seed, ST_ANNEAL, i as u64, 0, false);
                let (mut x, mut cp, mut keep) = (l.trap_node, 0, vec![]);
                let mut best = l.v[x];
                for (k, &beta) in betas.iter().enumerate() {
                    let e = 4 * x + (st.u() * 4.0) as usize;
                    if dvs[e] <= 0.0 || st.u() < (-beta * dvs[e]).exp() { x = to[e]; best = best.min(l.v[x]) }
                    if cp < CHECKPOINTS && k == checks[cp] { trace[cp] += l.v[x]; cp += 1 }
                    if i == 0 && k % every == 0 { keep.push(x) }
                }
                let (e, win) = (l.v[x], l.basin[x] == l.global);
                for (q, add) in a.iter_mut().zip([1.0, f64::from(win), f64::from(x == l.global_node), e, e * e, best]) { *q += add }
                basins[l.basin[x]] += 1.0;
                wins[i * 4 + s] = win;
                if i == 0 { keep.push(x); paths.push(keep) }
            }
        }
        let pairs = (0..4).flat_map(|a| (a + 1..4).map(move |b| (a, b))).map(|(a, b)| {
            let count = |p: usize, q: usize| (0..reps).filter(|&r| wins[r * 4 + p] && !wins[r * 4 + q]).count();
            let (n10, n01) = (count(a, b), count(b, a));
            let m = (n10 + n01) as f64;
            let cp = (m > 0.0).then(|| clopper_pearson(n10 as f64, m, 0.05));
            PairOut { a: SCHEDULES[a], b: SCHEDULES[b], est: (n10 as f64 - n01 as f64) / n, lo: cp.map(|c| (2.0 * c.0 - 1.0) * m / n), hi: cp.map(|c| (2.0 * c.1 - 1.0) * m / n), n10, n01 }
        }).collect();
        let schedules: Vec<SchedOut> = acc.into_iter().enumerate().map(|(s, (a, trace, basins))| {
            let fin = cool.t(s, kk - 1);
            let hajek = match (s, kappa >= 1.0) {
                (0, true) => "met: c ≥ d*, so Σ exp(−d*/T_k) = ∞", (0, false) => "not met: c < d*, so the chain can stay in the trap with a positive probability",
                _ => "not met: this schedule is not logarithmic, so no theorem gives P → 1",
            };
            SchedOut { kind: SCHEDULES[s], n: reps, success: proportion(a[1], n), at_min: proportion(a[2], n), energy: clt(n, a[3], a[4]), best: a[5] / n,
                trace: trace.iter().map(|v| v / n).collect(), basins: basins.iter().map(|v| v / n).collect(), fin, equilibrium: boltzmann(l, fin).basins[l.global], hajek }
        }).collect();
        let mut rows: Vec<Row> = schedules.iter().map(|s| row(format!("P(final state in the global basin), {} schedule", s.kind), "", s.success.clone(), n, Some(s.equilibrium),
            format!("the Boltzmann probability at the final temperature {}: the value at equilibrium, not this estimand", sig(s.fin, 3)), &["observation", "numerical"])).collect();
        rows.extend(schedules.iter().map(|s| row(format!("Mean final energy, {} schedule", s.kind), "energy", s.energy.clone(), n, Some(l.v[l.global_node]), "the global minimum of V", &["observation", "numerical"])));
        let temps = (0..4).map(|s| checks.iter().map(|&k| cool.t(s, k)).collect()).collect();
        (rows, Detail::Anneal(AnnealOut { schedules, pairs, checkpoints: checks, temps, paths, dstar: l.dstar, log_c: cool.c }))
    }

    fn temper(l: &Land, (tmin, tmax): (f64, f64), kk: usize, (sweeps, inner): (usize, usize), spread: bool, reps: usize, seed: u64) -> (Vec<Row>, Detail) {
        let nm = l.minima.len();
        let temps: Vec<f64> = (0..kk).map(|r| tmin * (tmax / tmin).powf(r as f64 / (kk - 1) as f64)).collect();
        let (betas, to): (Vec<f64>, _) = (temps.iter().map(|t| 1.0 / t).collect(), targets(l));
        let accs: Vec<Vec<f64>> = betas.iter().map(|&b| acceptance(l, &to, b)).collect();
        let (burn, every) = (sweeps / 4, (sweeps / 256).max(1));
        // For each chain: the share of the recorded sweeps in each basin for PT and for the single chain, swap attempts and
        // acceptances of each pair, and round trips.
        let (mut chains, mut trace, mut cold, mut cold_one) = (vec![], vec![], vec![], vec![]);
        for b in 0..reps {
            let start = if spread { l.minima[b % nm] } else { l.trap_node };
            let (mut pt, mut one) = (Src::new(seed, ST_TEMPER, b as u64, 0, false), Src::new(seed, ST_SINGLE, b as u64, 0, false));
            let (mut x, mut label, mut top, mut y) = (vec![start; kk], (0..kk).collect::<Vec<_>>(), vec![false; kk], start);
            let (mut att, mut acc, mut occ_pt, mut occ_one, mut trips, mut records) = (vec![0.0; kk - 1], vec![0.0; kk - 1], vec![0.0; nm], vec![0.0; nm], 0.0, 0.0);
            for w in 0..sweeps {
                for r in 0..kk { x[r] = walk(&to, &accs[r], x[r], inner, &mut pt) }
                for r in (w % 2..kk - 1).step_by(2) {
                    att[r] += 1.0;
                    let delta = (betas[r] - betas[r + 1]) * (l.v[x[r]] - l.v[x[r + 1]]);
                    if delta >= 0.0 || pt.u() < delta.exp() { acc[r] += 1.0; x.swap(r, r + 1); label.swap(r, r + 1) }
                }
                if top[label[0]] { trips += 1.0; top[label[0]] = false }
                top[label[kk - 1]] = true;
                y = walk(&to, &accs[0], y, inner * kk, &mut one);
                if w >= burn { occ_pt[l.basin[x[0]]] += 1.0; occ_one[l.basin[y]] += 1.0; records += 1.0 }
                if b == 0 && w % every == 0 {
                    let mut slots = vec![0; kk];
                    for r in 0..kk { slots[label[r]] = r }
                    trace.push(slots);
                    cold.push(x[0]);
                    cold_one.push(y);
                }
            }
            let frac = |o: Vec<f64>| o.into_iter().map(|v| if records > 0.0 { v / records } else { 0.0 }).collect::<Vec<_>>();
            chains.push((frac(occ_pt), frac(occ_one), att, acc, trips));
        }
        let exact = boltzmann(l, tmin);
        let mut basins: Vec<BasinOut> = (0..nm).map(|m| BasinOut { m, node: l.minima[m], energy: l.v[l.minima[m]], exact: exact.basins[m],
            pt: between(&chains.iter().map(|c| c.0[m]).collect::<Vec<_>>(), true), one: between(&chains.iter().map(|c| c.1[m]).collect::<Vec<_>>(), true) }).collect();
        basins.retain(|x| x.exact >= 1e-3 || x.pt.est.unwrap_or(0.0) > 0.0 || x.one.est.unwrap_or(0.0) > 0.0);
        basins.sort_by(|a, b| b.exact.partial_cmp(&a.exact).unwrap_or(Equal));
        basins.truncate(8);
        let swaps = (0..kk - 1).map(|r| { let at: f64 = chains.iter().map(|c| c.2[r]).sum(); (at > 0.0).then(|| chains.iter().map(|c| c.3[r]).sum::<f64>() / at) }).collect();
        let (n, mut rows) = (reps as f64, vec![]);
        for x in &basins {
            let (px, py) = coords(x.node);
            let (wh, rh) = (format!("basin of the minimum at ({px:.2}, {py:.2}), V = {:.3}", x.energy), format!("exact Boltzmann probability at T_min = {tmin}"));
            rows.push(row(format!("P({wh}), parallel tempering"), "", x.pt.clone(), n, Some(x.exact), rh.clone(), &["observation", "theorem"]));
            rows.push(row(format!("P({wh}), one chain at T_min"), "", x.one.clone(), n, Some(x.exact), rh, &["observation", "theorem"]));
        }
        let trips = chains.iter().map(|c| c.4).sum::<f64>() / n;
        let start = if spread { l.minima[0] } else { l.trap_node };
        (rows, Detail::Temper(TemperOut { basins, swaps, temps, trips, exact_energy: exact.energy, trace, cold, cold_one, start }))
    }

    fn size_out(j: &Sand, l: usize, parts: Vec<ChainOut>, btw_exact: bool, nr: &dyn Fn(Iv) -> Iv) -> SizeOut {
        let drives: usize = parts.iter().map(|p| p.drives).sum();
        let zero: usize = parts.iter().map(|p| p.zero).sum();
        let per = |f: &dyn Fn(&ChainOut) -> f64| parts.iter().map(f).collect::<Vec<f64>>();
        let isum = |f: &dyn Fn(&ChainOut) -> i64| parts.iter().map(f).sum::<i64>();
        let dens = |k: usize| (0..BINS).filter_map(|i| {
            let (v, (lo, hi)) = (parts.iter().map(|p| p.hists[k][i]).sum::<f64>(), bin_range(i));
            (v > 0.0 && hi >= lo).then(|| ((lo * hi).sqrt(), v / (drives - zero) as f64 / (hi - lo + 1.0), v))
        }).collect::<Vec<_>>();
        let tot = |p: &ChainOut| p.heights.iter().sum::<f64>();
        let hcount: Vec<f64> = (0..parts[0].heights.len()).map(|h| parts.iter().map(|p| p.heights[h]).sum()).collect();
        let htotal: f64 = hcount.iter().sum();
        let (reference, residual) = mean_size(j, l);
        let scales = parts[0].scales.clone();
        let logb: Vec<f64> = scales.iter().map(|&b| (b as f64).ln()).collect();
        let n_box: usize = parts.iter().filter(|p| p.boxes.is_some()).map(|p| p.n_box).sum();
        let boxes = (n_box > 0).then(|| (0..scales.len()).map(|i| parts.iter().filter_map(|p| p.boxes.as_ref().map(|b| b[i] * p.n_box as f64)).sum::<f64>() / n_box as f64).collect::<Vec<_>>());
        let wv: Vec<&Vec<f64>> = parts.iter().filter_map(|p| p.block_var.as_ref()).collect();
        let block_var = (!wv.is_empty()).then(|| (0..scales.len()).map(|i| wv.iter().map(|v| v[i]).sum::<f64>() / wv.len() as f64).collect::<Vec<_>>());
        let (added, lost_edge, lost_bulk, mass_change) = (isum(&|p| p.added), isum(&|p| p.lost_edge), isum(&|p| p.lost_bulk), isum(&|p| p.mass_change));
        let mut o = SizeOut {
            l, chains: parts.len(), drives, zero, mean_s: nr(between(&per(&|p| p.sum / p.drives as f64), false)), reference, residual, size: dens(0), area: dens(1), duration: dens(2),
            moments: (0..ORDERS.len()).map(|i| nr(between(&per(&|p| p.moments[i] / p.drives as f64), false))).collect(), max_s: parts.iter().map(|p| p.max_s).max().unwrap_or(0),
            freq: hcount.iter().map(|v| v / htotal).collect(), mean_height: between(&per(&|p| p.heights.iter().enumerate().map(|(h, v)| v * h as f64).sum::<f64>() / tot(p)), false),
            exact_heights: btw_exact.then_some(BTW_HEIGHTS), height_chains: (0..hcount.len()).map(|h| nr(between(&per(&|p| p.heights[h] / tot(p).max(1.0)), true))).collect(),
            density: [0, 1].map(|h| between(&parts.iter().filter_map(|p| p.density[h]).collect::<Vec<_>>(), false)),
            balance: Balance { added, lost_edge, lost_bulk, mass_change, exact: added == lost_edge + lost_bulk + mass_change },
            recurrent: parts[0].recurrent.map(|_| parts.iter().filter(|p| p.recurrent == Some(true)).count()), burn: parts[0].burn,
            box_fit: boxes.as_ref().and_then(|b| fit_line(&logb, b, None)), var_fit: block_var.as_ref().filter(|v| v.iter().all(|&x| x > 0.0)).and_then(|v| fit_line(&logb, &lns(v.iter().copied()), None)),
            scales, boxes, n_box, block_var, fin: None, footprint: None, footprint_size: parts[0].max_s,
        };
        let first = parts.into_iter().next().unwrap_or_default();
        (o.fin, o.footprint) = (first.fin, first.footprint);
        o
    }

    fn sandpile(j: &Sand, seed: u64) -> Result<(Vec<Row>, Detail), String> {
        let (manna, centre) = (j.rule == "manna", j.drive == "centre");
        // Heights: the stationary law is uniform on the recurrent configurations only for the BTW rule with an open
        // boundary, ε = 0 and a random drive. With a centre drive and ε = 0 the BTW rule uses no random number at all, so
        // every chain repeats the same orbit and no interval between chains is valid.
        let btw_exact = !manna && j.boundary == "open" && j.eps == 0.0 && !centre;
        let fixed = !manna && j.eps == 0.0 && centre;
        let nr = |iv: Iv| if fixed && iv.est.is_some() { bare(iv.est, "no interval: this dynamics uses no random number, so the chains are identical") } else { iv };
        let mut sizes = vec![];
        for &lf in &j.sizes {
            let l = lf as usize;
            let parts = (0..j.chains as usize).map(|c| sandpile_chain(j, l, c, seed, c == 0)).collect::<Result<Vec<_>, _>>()?;
            sizes.push(size_out(j, l, parts, btw_exact, &nr));
        }
        let lnl = |v: &[&SizeOut]| v.iter().map(|s| (s.l as f64).ln()).collect::<Vec<_>>();
        let sigma: Vec<(f64, Option<Fit>)> = ORDERS.iter().enumerate().map(|(i, &q)| {
            let pts: Vec<&SizeOut> = sizes.iter().filter(|s| s.moments[i].est.is_some_and(|e| e > 0.0)).collect();
            let ses: Vec<Option<f64>> = pts.iter().map(|s| s.moments[i].se.zip(s.moments[i].est).map(|(se, e)| se / e).filter(|&r| r != 0.0)).collect();
            (q, fit_line(&lnl(&pts), &lns(pts.iter().map(|s| s.moments[i].est.unwrap_or(1.0))), Some(&ses)))
        }).collect();
        let ex: Vec<&SizeOut> = sizes.iter().filter(|s| s.reference > 0.0).collect();
        let last2 = &ex[ex.len().saturating_sub(2)..];
        let (exact_fit, exact_sigma) = (fit_line(&lnl(&ex), &lns(ex.iter().map(|s| s.reference)), None), fit_line(&lnl(last2), &lns(last2.iter().map(|s| s.reference)), None));
        let fitted: Vec<(f64, f64)> = sigma.iter().filter_map(|(q, f)| f.as_ref().map(|f| (*q, f.slope))).collect();
        let d_fit = fit_line(&fitted.iter().map(|p| p.0).collect::<Vec<_>>(), &fitted.iter().map(|p| p.1).collect::<Vec<_>>(), None);
        let mut rows = vec![];
        let ref_how = format!("exact: ⟨s⟩ = {}{}{} (Dhar 1990), by conjugate gradients to a relative residual below 10⁻¹²", if manna { "2 " } else { "" },
            if j.grains > 1.0 { format!("{} ", j.grains) } else { String::new() }, if centre { "(Δ⁻¹·1) at the centre" } else { "mean of Δ⁻¹·1" });
        for s in &sizes {
            rows.push(row(format!("Mean avalanche size ⟨s⟩ for each drive, L = {}", s.l), "topplings", s.mean_s.clone(), s.chains as f64, Some(s.reference), ref_how.clone(), &["observation", "theorem"]));
            if s.exact_heights.is_some() {
                for (h, iv) in s.height_chains.iter().enumerate() {
                    rows.push(row(format!("P(height {h}) at the central sites, L = {}", s.l), "", iv.clone(), s.chains as f64, Some(BTW_HEIGHTS[h]),
                        "exact on the infinite lattice (Priezzhev 1994; closed forms proved by Poghosyan, Priezzhev and Ruelle 2011, and by Kenyon and Wilson): a finite lattice differs near its boundary", &["observation", "theorem"]));
                }
            }
        }
        if sizes.len() >= 2 {
            let open = j.boundary == "open" && j.eps == 0.0;
            let ls = sizes.iter().map(|s| s.l.to_string()).collect::<Vec<_>>().join(", ");
            for (q, f) in &sigma {
                let one = *q == 1.0 && exact_fit.is_some();
                let rh = if one {
                    format!("the same fit of the exact values of ⟨s⟩ (Dhar 1990). Their slope is {} between the two largest sizes{}", exact_sigma.as_ref().map_or("–".into(), |f| format!("{:.3}", f.slope)),
                        if open { "; ⟨s⟩ / L² tends to a constant as L → ∞, so the slope tends to 2" } else { "" })
                } else { "no theorem: under simple finite-size scaling σ(q) = D(q + 1 − τ), which is a hypothesis".into() };
                rows.push(row(format!("Slope σ({q}) of log ⟨s^{q}⟩ against log L"), "", fit_iv(f, format!("least squares over L = {ls}; the 95 % interval holds the Monte Carlo error only"), "needs 2 sizes"),
                    sizes.len() as f64, if one { exact_fit.as_ref().map(|f| f.slope) } else { None }, rh, if one { &["observation", "numerical"][..] } else { &["observation"][..] }));
            }
        }
        Ok((rows, Detail::Sand(SandOut { sizes, sigma, exact_fit, exact_sigma, d_fit, btw_exact, fixed, dynamics: dynamics(j) })))
    }

    /* ---------- text and helpers for the figures ---------- */

    /// The dynamics of a sandpile job in words, as the page states it beside the figures.
    pub fn dynamics(j: &Sand) -> Vec<String> {
        let (centre, one) = (j.drive == "centre", j.grains == 1.0);
        vec![
            if j.rule == "manna" { "Manna rule: a site with 2 or more grains is unstable; it topples by giving 2 grains, each to one of its 4 neighbours chosen at random with probability 1/4." }
            else { "BTW rule (Bak, Tang and Wiesenfeld): a site with 4 or more grains is unstable; it topples by giving 1 grain to each of its 4 neighbours." }.into(),
            match j.boundary.as_str() { "open" => "Open boundary: a grain given past the edge leaves the lattice.", "closed" => "Closed boundary: a grain given past the edge stays on the site that toppled.",
                _ => "Periodic boundary: a grain given past the edge enters at the opposite edge." }.into(),
            format!("{}: the page adds {} {}, then relaxes the lattice completely before the next drive (a slow drive).", if centre { "Drive at the centre" } else { "Random drive" },
                if one { "1 grain".into() } else { format!("{} grains", j.grains) }, if centre { "at the central site" } else if one { "at a site chosen uniformly at random" } else { "at sites chosen uniformly at random" }),
            if j.eps > 0.0 { format!("Bulk dissipation: each grain that a toppling gives is lost with probability ε = {}.", j.eps) } else { "No bulk dissipation: grains leave only through the boundary.".into() },
            format!("Update: in each time step every site that is unstable at the start of the step topples once. The size s is the number of topplings, the area a the number of sites that toppled, and the duration T the number of time steps. A stable site holds 0 to {} grains.", if j.rule == "manna" { 1 } else { 3 }),
        ]
    }

    /// The survival function of the exit times scaled by their mean, from the log bins: points (τ / mean τ, P(τ > ·)).
    pub fn survival(t: &TempOut) -> Vec<(f64, f64)> {
        let (Some(m), mut below) = (t.iv.est, 0.0) else { return vec![] };
        (0..BINS).filter_map(|k| { below += t.hist[k]; let sv = 1.0 - below / t.n as f64; (t.hist[k] > 0.0 && sv > 0.0).then(|| (bin_range(k).1 / m, sv)) }).collect()
    }
    /// The data collapse of one size law: s^τ P(s) against s / L^D.
    pub fn collapse(l: usize, size: &[(f64, f64, f64)], tau: f64, d: f64) -> Vec<(f64, f64)> { size.iter().map(|p| (p.0 / (l as f64).powf(d), p.0.powf(tau) * p.1)).collect() }
    /// The heights of a lattice averaged over b × b blocks: the blocks on a side and their means.
    pub fn coarse<T: Copy + Into<f64>>(z: &[T], l: usize, b: usize) -> (usize, Vec<f64>) {
        let w = l / b;
        let mut out = vec![0.0; w * w];
        for jj in 0..w * b { for i in 0..w * b { out[i / b + w * (jj / b)] += z[i + l * jj].into() / (b * b) as f64 } }
        (w, out)
    }
    /// The number of b × b boxes that hold at least one marked (nonzero) site, for each b.
    pub fn box_count<T: Copy + Into<f64>>(marks: &[T], l: usize, scales: &[usize]) -> Vec<usize> {
        scales.iter().map(|&b| {
            let w = l.div_ceil(b);
            let mut seen = vec![false; w * w];
            (0..l * l).filter(|&s| marks[s].into() != 0.0 && !std::mem::replace(&mut seen[(s % l) / b + w * ((s / l) / b)], true)).count()
        }).collect()
    }
}
```
