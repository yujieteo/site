---
title: Monte Carlo chains and rare events
summary: Run Markov chains, sequential Monte Carlo, particle filters and quasi-Monte Carlo on 11 examples, with the diagnostics of each kind kept apart. Then estimate the probabilities of rare events with importance sampling, the cross-entropy method and splitting, against crude Monte Carlo.
thumb: 7814
theme: site
seed: 20261014
---

This notebook has two parts. The first part is a laboratory for the methods that do not draw independent values from the law itself: Markov chains (Metropolis–Hastings, the Gibbs sampler and Hamiltonian Monte Carlo), the sequential Monte Carlo sampler, the particle filter and randomised quasi-Monte Carlo. Each example has a reference value, so you can see when a method works and when it fails. The second part estimates the probabilities of rare events. Crude Monte Carlo needs about 100/p replicates for a probability p, so the methods of that part change the law or split the paths.

<!-- skill: This notebook ports the Markov chain, sequential and quasi-Monte Carlo laboratory (chains.json) and the rare-event laboratory (rare.json) of visuals/viz/monte-carlo-workbench. Read the data only through data!, from the files pinned in visuals.lock; never copy data into this file. The engines are in "The code": the core functions at the root, then the modules chains and rare. -->

<!-- skill: The checks run natively at each build and not in the page: every example of each laboratory runs with its own settings and meets its reference within 6 standard errors, except the designed failures, which must fail as the catalogue says. A run in the page must take about a second: keep the sizes of the examples. -->

```toml
serde_json = "=1.0.151"
```

## Chains: an example

The 11 examples come in 3 families. A target law is a density that the page knows only up to a constant, such as a posterior law. A state-space model has a hidden state that moves in time and observations of it, and the particle filter follows the state. An integral on the unit cube compares randomised Sobol points with independent points. 3 examples fail on purpose: two modes far apart, Neal's funnel and a discontinuous integrand in 8 dimensions.

```rust
//| caption: The example and its parameters.
let _ex = examples();
let example: &Value = _ex[choice("Example", &_ex.iter().map(|e| example_title(e)).collect::<Vec<_>>(), 0)];
let ex_id = s(&example["id"]);
let ex_params = field(&format!("Parameters of {ex_id}, such as {}", param_hint(example)), "");
```

```rust
//| caption: The question, the parameters, the quantities and what to observe.
html(&about_example(example));
```

## Chains: settings

A Markov chain makes 2^k warm-up iterations, which the notebook discards, then 2^k draws. R independent chains start from dispersed points, or from one point. The sequential Monte Carlo sampler and the particle filter use N = 2^k particles, and each of the R runs gives one estimate. Randomised quasi-Monte Carlo uses n = 2^k scrambled Sobol points in each of R randomisations. The interval of each estimate comes from the spread of the R independent runs, so it does not depend on a theory of the method.

```rust
//| caption: The method and its settings.
let _own = chains::Settings::of(example);
let _fam = family(example);
let _ms: Vec<&str> = _fam.methods().iter().map(|m| m.id()).collect();
let _names: Vec<&str> = _fam.methods().iter().map(|m| m.name()).collect();
let ch_method = pick(&format!("Method for {}", FAMILY_NAMES[_fam as usize]), &_own.method, &_ms, &_names);
let ch_compare = pick(&format!("Comparison for {}", FAMILY_NAMES[_fam as usize]), &_own.compare, &[&["none"][..], &_ms[..]].concat(), &[&["No comparison"][..], &_names[..]].concat());
let (_lo, _hi) = _fam.sizes();
let ch_size = slider(&format!("Size: 2^k {} (the example sets k = {})", ["draws", "particles", "points"][_fam as usize], _own.size), _lo as f64, _hi as f64, 1.0, _own.size);
let ch_runs = slider(&format!("Independent runs R (the example sets {})", _own.runs), 2.0, 32.0, 1.0, _own.runs);
let ch_seed = slider("Seed", 0.0, 9999.0, 1.0, 2026.0) as u64;
```

```rust
//| caption: The settings of each method. A setting that the method does not use has no effect.
let _own = chains::Settings::of(example);
let ch_step = slider(&format!("Metropolis–Hastings: step h, in units of the scale (the example sets {})", _own.step), 0.05, 5.0, 0.05, _own.step);
let ch_eps = slider(&format!("Hamiltonian Monte Carlo: leapfrog step ε (the example sets {})", _own.eps), 0.01, 2.0, 0.01, _own.eps);
let ch_leap = slider(&format!("Hamiltonian Monte Carlo: leapfrog steps L (the example sets {})", _own.leap), 1.0, 200.0, 1.0, _own.leap);
let ch_start = START[choice("Start of the chains", &START.map(|x| x.1), START.iter().position(|x| x.0 == _own.start).unwrap_or(0))].0;
let ch_resample = RESAMPLE[choice("Resampling scheme", &RESAMPLE.map(|x| x.1), RESAMPLE.iter().position(|x| x.0 == _own.resample).unwrap_or(2))].0;
let ch_ess = slider(&format!("ESS threshold τ: resample below τN (the example sets {})", _own.ess), 0.05, 1.0, 0.05, _own.ess);
let ch_schedule = SCHEDULE[choice("Tempering schedule", &SCHEDULE.map(|x| x.1), SCHEDULE.iter().position(|x| x.0 == _own.schedule).unwrap_or(0))].0;
let ch_temps = slider(&format!("Fixed schedule: steps K (the example sets {})", _own.temps), 1.0, 200.0, 1.0, _own.temps);
let ch_moves = slider(&format!("Metropolis moves after each tempering step (the example sets {})", _own.moves), 0.0, 20.0, 1.0, _own.moves);
let ch_scramble = SCRAMBLE[choice("Randomisation of the Sobol points", &SCRAMBLE.map(|x| x.1), SCRAMBLE.iter().position(|x| x.0 == _own.scramble).unwrap_or(0))].0;
let ch_path = PATH[choice("Path of the option", &PATH.map(|x| x.1), PATH.iter().position(|x| x.0 == _own.path).unwrap_or(0))].0;
```

## Chains: estimates

Each estimate is the mean of the R run estimates, with a 95 % t interval from their spread. For a Markov chain, the table also gives the Monte Carlo standard error from the effective sample size of the pooled chains. When the two disagree, the chains do not mix, or the runs are too few. The reference is an exact value or a numerical approximation with its method. A reference outside the interval is a sign of a bias, such as a chain that stays in one mode.

```rust
//| caption: Run the laboratory.
let ch_settings = chains::Settings { seed: ch_seed, method: ch_method.clone(), compare: ch_compare.clone(), size: ch_size, runs: ch_runs, step: ch_step, eps: ch_eps, leap: ch_leap,
    start: ch_start.into(), resample: ch_resample.into(), ess: ch_ess, schedule: ch_schedule.into(), temps: ch_temps, moves: ch_moves, scramble: ch_scramble.into(), path: ch_path.into() };
let ch_lab = memo("chains", format!("{ex_id} {ex_params} {ch_settings:?}"), || {
    let lab = chains::record_of(example, &ex_params, &data()[2]).and_then(|r| chains::prepare(&r, &ch_settings));
    let run = lab.as_ref().ok().map(chains::run);
    (lab, run)
});
```

```rust
//| caption: The estimates of each method.
match (&ch_lab.0, &ch_lab.1) {
    (Err(e), _) => println!("The laboratory does not run: {}", fit(e)),
    (Ok(lab), Some((_, sm))) => estimates(lab, sm),
    _ => {}
}
```

## Chains: diagnostics

The notebook keeps three kinds of diagnostic apart, because each one answers a different question.

- Markov-chain diagnostics ask if the chains mix: the acceptance rate, split R-hat (near 1 when the chains agree), the effective sample size, the integrated autocorrelation time τ and the divergent transitions of Hamiltonian Monte Carlo.
- Weight degeneracy asks if the particles still represent the law: the weight ESS, the largest normalised weight, the number of resampling steps and the number of distinct ancestors that survive.
- The estimation error asks how far the estimate is from the reference, from the spread of the independent runs.

A good diagnostic does not prove that an estimate is correct. Two chains in the same wrong mode give R-hat near 1, as the example with two modes shows.

```rust
//| caption: The diagnostics of each method.
if let (Ok(lab), Some((_, sm))) = &*ch_lab { diagnostics(lab, sm) }
```

## Chains: figures

The figures of a Markov chain are the trace of the chains, the autocorrelation of a series and the draws on the target density. The figures of a particle system are the weights, the genealogy of the particles and, for a filter, the filter means against the reference. The figures of an integral are the error rate against n and the points. The figure Runs shows the estimate of each independent run.

```rust
//| caption: The figure.
let _plots = plots_for(example, &ch_method);
let ch_plot = _plots[choice(&format!("Figure for {}", FAMILY_NAMES[family(example) as usize]), &_plots.iter().map(|p| PLOT_NAMES.iter().find(|x| x.0 == *p).unwrap().1).collect::<Vec<_>>(), 0)];
let ch_series = choice("Series of the trace and the autocorrelation", &["First coordinate", "Second coordinate"], 0);
let ch_q = choice(&format!("Quantity of the figures of {ex_id}"), &texts_of(&example["quantities"], "name"), 0);
if let (Ok(lab), Some((blocks, sm))) = &*ch_lab { figure(lab, blocks, sm, ch_plot, ch_series, ch_q) }
```

## Chains: methods

Each card gives the estimator, its assumptions and settings, an example where the method works, an example where it fails, and a comparison with another method.

```rust
//| caption: The method card.
let _cards = list(0, "methods");
let ch_card = &_cards[choice("Method card", &_cards.iter().map(|m| fit(s(&m["name"]))).collect::<Vec<_>>(), 0)];
html(&chain_card(ch_card));
```

## Rare events: an example

The second part estimates small probabilities in three problems. The tail of a sum asks for P(S_n > b), where S_n is the sum of n independent claims. The ruin problem asks for the probability ψ(u) that an insurer with the initial capital u is ever ruined (the Cramér–Lundberg model). The catastrophe test follows K insurers that share catastrophe losses for T years, and it chooses the cheapest policy that keeps a systemic ruin below a target. The 17 examples show where each method works and where it fails.

```rust
//| caption: The rare-event example and its model.
let _rp = rare_examples();
let rare_ex: &rare::Preset = &_rp[choice("Rare-event example", &_rp.iter().map(|p| fit(&p.title)).collect::<Vec<_>>(), 0)];
let rare_law = pick(&format!("Loss law of {}", rare_ex.id), &rare_ex.record.law, &rare::LAWS, &LAW_NAMES);
let rare_copula = pick(&format!("Copula of the shares of {} (the catastrophe test only)", rare_ex.id), &rare_ex.record.copula, &rare::COPULAS, &COPULA_NAMES);
let rare_params = field(&format!("Parameters of {}, as name=value; …", rare_ex.id), &rare_ex.record.params);
```

```rust
//| caption: The problem, the parameters, the model and what to observe.
about_rare(rare_ex, &rare_law, &rare_params);
```

## Rare events: settings

Each method runs R independent replications of N = 2^k paths. A path of the sum draws n claims, a path of the ruin problem draws the ladder heights of the walk until it ends, and a path of the catastrophe test draws the events of T years. The comparison method runs on the same problem with its own stream. An assumption failure breaks one assumption of one method on purpose, so that you can see what the failure does.

```rust
//| caption: The method and its settings.
let _own = &rare_ex.settings;
let rare_method = pick(&format!("Rare-event method of {}", rare_ex.id), &_own.method, &rare::METHODS, &rare::NAMES);
let rare_compare = pick(&format!("Comparison of {}", rare_ex.id), &_own.compare, &[&["none"][..], &rare::METHODS[..]].concat(), &[&["No comparison"][..], &rare::NAMES[..]].concat());
let rare_failure = pick(&format!("Assumption failure of {}", rare_ex.id), &_own.failure, &rare::FAILURES, &FAILURE_NAMES);
let rare_size = slider(&format!("Paths: 2^k in each replication (the example sets k = {})", _own.size), 8.0, 16.0, 1.0, _own.size as f64) as i64;
let rare_reps = slider(&format!("Independent replications R (the example sets {})", _own.reps), 2.0, 64.0, 1.0, _own.reps as f64) as i64;
let rare_seed = slider("Seed of the rare-event run", 0.0, 9999.0, 1.0, 1.0) as u64;
```

```rust
//| caption: The settings of each method. A setting that the method does not use has no effect.
let rare_options = options_text(&rare::OPTIONS.iter().enumerate().map(|(i, o)| {
    let text = if i == 0 { "number of stages (0: from the reference value, about 0.1 for each stage)" } else { o.text };
    let (lo, def) = if o.def.is_nan() { (0.0, 0.0) } else { (o.min, o.def) };
    slider(&format!("{}: {}", rare_name(o.method), fit(text)), lo, o.max, OPTION_STEPS[i], def)
}).collect::<Vec<_>>());
```

## Rare events: estimates

Each method gives an interval that fits it. Direct simulation pools all its paths in a Wilson interval, and with no path in the event it gives the exact one-sided bound 1 − 0.05^(1/N). Exponential tilting pools its weighted paths in a central limit interval. The adaptive and multistage methods give a Student t interval from the spread of their R replications. The relative error is the standard error divided by the estimate. The work counts the random jumps or events that a method draws, so that methods of different cost can be compared.

```rust
//| caption: Run the rare-event laboratory.
let rare_settings = rare::Settings { seed: rare_seed, method: rare_method.clone(), compare: rare_compare.clone(), failure: rare_failure.clone(), options: rare_options.clone(), size: rare_size, reps: rare_reps };
let rare_record = rare::Record::new(&rare_ex.record.problem, &rare_law, &rare_copula, &rare_params);
let rare_lab = memo("rare", format!("{rare_record:?} {rare_settings:?}"), || rare_lab_of(&rare_record, &rare_settings));
```

```rust
//| caption: The estimates of each method, then the reference.
let rare_rows = choice("Rows of the catastrophe test", &["The systemic ruin and the extreme event", "Every quantity of each policy"], 0);
match &*rare_lab {
    Err(e) => println!("The setting has errors, so the laboratory does not run:\n{}", fit(e)),
    Ok(l) => rare_estimates(l, rare_rows == 1),
}
```

## Rare events: the decision

The decision compares the estimate of the first method with the target. The target is met when the whole interval is below it, and it is not met when the whole interval is above it. When the interval holds the target, the run cannot separate them, and more replications are necessary before a decision. In the catastrophe test, the page chooses the cheapest of three policies: no action, a catastrophe layer that the insurers buy together, or extra capital for each insurer.

```rust
//| caption: The decision.
if let Ok(l) = &*rare_lab { rare_decision(l) }
```

## Rare events: diagnostics

A change of measure can give a wrong answer with a narrow interval. Thus read the diagnostics of each method with its estimate: the effective sample size of the weights, the largest share of one weight, the acceptance rates of the chain moves, the fractions of the stages and the number of events against its exact mean. A good diagnostic does not prove that an estimate is correct.

```rust
//| caption: The diagnostics of each method.
if let Ok(l) = &*rare_lab { rare_diagnostics(l) }
```

## Rare events: figures

The convergence figure shows the estimate after each replication against the work. The comparison shows the estimate and the interval of each method against the reference. The stages show how a multistage method climbs to the event. The tail shows the reference curves with the bounds and the asymptotic. For the catastrophe test, it shows the survival function of the total loss with the value at risk and the expected shortfall.

```rust
//| caption: The figure.
let rare_plot = RARE_PLOTS[choice("Rare-event figure", &RARE_PLOTS.map(|p| p.1), 0)].0;
if let Ok(l) = &*rare_lab { rare_figure(l, rare_plot) }
```

## Rare events: a sweep

A sweep runs the first method at several values of one parameter, with at most 2^11 paths and 8 replications for each value. For the sum and the ruin problem, the figure shows the estimate, its interval and the reference. For the catastrophe test, it shows the probability of a systemic ruin under each policy against the target, and the table gives the policy that the run chooses at each value.

```rust
//| caption: The sweep.
let _ps = rare::params_for(&rare_ex.record.problem, &rare_law);
let _names: Vec<String> = std::iter::once("No sweep".to_string()).chain(_ps.iter().map(|p| format!("{}: {}", p.name, fit(p.text)))).collect();
let _k = choice(&format!("Parameter to sweep in {}", rare_ex.id), &_names, 0);
let _now = if _k > 0 { param_value(&rare_params, _ps[_k - 1]) } else { 0.0 };
let _from = field(&format!("First value of the sweep ({})", _names[_k]), &fmt_plain(_now * 0.5));
let _to = field(&format!("Last value of the sweep ({})", _names[_k]), &fmt_plain(_now * 1.5));
let _points = slider("Values in the sweep", 3.0, 9.0, 1.0, 5.0) as usize;
if _k > 0 {
    let key = format!("{rare_record:?} {rare_settings:?} {_k} {_from} {_to} {_points}");
    match memo("sweep", key, || sweep(&rare_record, &rare_settings, _ps[_k - 1], &_from, &_to, _points)).as_ref() {
        Err(e) => println!("{}", fit(e)),
        Ok(rows) => show_sweep(&rare_ex.record.problem, _ps[_k - 1].name, rows),
    }
}
```

## Rare events: methods

Each card gives the estimator, its assumptions and settings, an example where the method works, an example where it fails, and a comparison with another method.

```rust
//| caption: The method card.
let _cards = list(1, "methods");
let rare_card = &_cards[choice("Rare-event method card", &_cards.iter().map(|m| fit(s(&m["name"]))).collect::<Vec<_>>(), 0)];
html(&rare_card_html(rare_card));
```

# The code

The checks run natively at each build. The data cell reads the pinned files of visuals, then come the helpers of the page and the engines.

```rust
//| caption: The checks of the data, the examples and the method cards.
if cfg!(not(target_arch = "wasm32")) { checks() }
println!("At the build, the checks passed: the text of the data, the 11 chain examples and the 17 rare-event examples against their references, and the examples of every method card.");
```

```rust
//| caption: The checks.
/// The checks: the text of the data, then every example of each laboratory with its own settings against its reference,
/// and the designed failures as the catalogue states them.
fn checks() {
    let fits = |t: &str| fit(t).chars().all(|c| FONT.iter().any(|r| (r.0..=r.1).contains(&(c as u32))));
    let mut texts = vec![];
    for k in 0..2 { strings(&data()[k], "", &mut texts) }
    for (key, t) in &texts { assert!(*key == "estimator" || fits(t), "{key}: {}", fit(t)) }
    assert_eq!((examples().len(), list(0, "methods").len()), (11, 6));
    for x in examples() {
        let id = s(&x["id"]);
        let lab = chains::record_of(x, "", &data()[2]).and_then(|r| chains::prepare(&r, &chains::Settings::of(x))).unwrap_or_else(|e| panic!("{id}: {e}"));
        let (_, sm) = chains::run(&lab);
        for m in &sm.methods {
            match (id, m.method) {
                ("chain-two-modes", chains::Method::Metropolis) => assert!(m.quantities[0].b.est.unwrap() < 0.05 && m.chain.as_ref().unwrap().max_rhat < 1.1, "{id}"),
                ("chain-funnel", chains::Method::Hmc) => assert!(m.chain.as_ref().unwrap().divergent > 1000, "{id}"),
                _ => for q in &m.quantities {
                    let (Some(e), Some(r)) = (q.b.est, q.reference) else { continue };
                    let se = q.b.se.unwrap_or(0.0).max(q.mcse.unwrap_or(0.0));
                    assert!(q.covered == Some(true) || (e - r).abs() <= 6.0 * se + 1e-9 * r.abs().max(1.0), "{id}, {}, {}: {e} ± {se}, reference {r}", m.method.id(), q.id);
                },
            }
        }
    }
    for m in list(0, "methods") {
        for part in ["suitable", "failure", "comparison"] {
            let x = examples().into_iter().find(|e| e["id"] == m[part]["example"]).unwrap_or_else(|| panic!("{}: {part}", m["id"]));
            assert!(fits(&card_settings(&m[part])), "{}", m["id"]);
            let mut st = chains::Settings::of(x);
            st.apply(&m[part]["settings"]);
            let rc = chains::record_of(x, s(&m[part]["settings"]["c_params"]), &data()[2]).unwrap();
            chains::prepare(&rc, &chains::Settings { size: st.size.min(10.0), runs: 2.0, ..st }).unwrap_or_else(|e| panic!("{} {part}: {e}", m["id"]));
        }
    }
    // The rare-event laboratory: every example with its own settings meets its reference (or direct simulation, for the
    // catastrophe test) within 6 standard errors, except the method that an assumption failure breaks, and adaptive
    // importance sampling on a light-tailed sum, whose twist family does not fit that law.
    let ps = rare_examples();
    assert_eq!((ps.len(), list(1, "methods").len(), list(1, "problems").len()), (17, 6, 3));
    let defaults: Vec<f64> = rare::OPTIONS.iter().map(|o| if o.def.is_nan() { 0.0 } else { o.def }).collect();
    let rec = rare::Record::new("sum", "", "", "");
    assert_eq!(rare::prepare(&rec, &rare::Settings { options: options_text(&defaults), ..Default::default() }).unwrap().o, rare::prepare(&rec, &Default::default()).unwrap().o, "the sliders start at the defaults");
    let mut page = vec![];
    for p in ps {
        let l = rare_lab_of(&p.record, &p.settings).unwrap_or_else(|e| panic!("{}: {e}", p.id));
        let c = &l.c;
        let owner = match p.settings.failure.as_str() { "light_family" => "ce", "small_spread" => "subset", "nominal_start" => "ais", _ => "" };
        let base = l.sm.iter().find(|m| m.method == "direct").map(|m| m.q[0].clone());
        let rse = l.rf.interval.map_or(0.0, |(lo, hi)| (hi - lo) / (2.0 * Z95));
        for m in &l.sm {
            page.push(m.refused.clone());
            if !m.refused.is_empty() { continue }
            assert!(m.error.is_empty(), "{} {}: {}", p.id, m.method, m.error);
            page.extend(m.q.iter().map(|q| q.how.clone()));
            if let Some(r) = &m.risk { page.push(r.how.clone()) }
            if m.method == owner || (c.problem == "sum" && c.law == "exponential" && m.method == "ais") { continue }
            let (q, se) = (&m.q[0], m.q[0].se.unwrap_or(0.0));
            if m.method == "direct" && q.hits == Some(0.0) { assert!(q.hi.unwrap() >= l.rf.value.unwrap_or(0.0), "{}: the zero-hit bound", p.id); continue }
            let against = match (l.rf.value, &base) { (Some(v), _) => Some((v, rse)), (None, Some(d)) if m.method != "direct" && d.hits != Some(0.0) => Some((d.est.unwrap(), d.se.unwrap())), _ => None };
            if let Some((v, vse)) = against { assert!((q.est.unwrap() - v).abs() <= 6.0 * se.hypot(vse), "{} {}: {:?} ± {se} against {v} ± {vse}", p.id, m.method, q.est) }
        }
        page.extend(c.quantities.iter().map(|q| quantity_label(c, q)));
        page.push(l.rf.how.clone());
        if let Some((_, how)) = &l.rf.asymptotic { page.push(how.clone()) }
        if let Some(k) = &c.cat { page.extend(k.policies.iter().flat_map(|p| [p.label.clone(), p.cost_text.clone()])) }
    }
    page.extend(rare::PARAMS.iter().flat_map(|ps| ps.iter().flat_map(|x| [x.text.to_string(), x.unit.to_string()])));
    page.extend(rare::OPTIONS.iter().map(|x| x.text.to_string()));
    for t in &page { assert!(fits(t.as_str()), "not in the fonts: {}", fit(t)) }
    for m in list(1, "methods") {
        for part in ["suitable", "failure", "comparison"] {
            let p = ps.iter().find(|p| p.id == s(&m[part]["preset"])).unwrap_or_else(|| panic!("{}: {part}", m["id"]));
            let runs = [p.settings.method.as_str(), p.settings.compare.as_str()];
            assert!(runs.contains(&s(&m["id"])) || (part == "comparison" && runs.contains(&s(&m["comparison"]["with"]))), "{}: the {part} example runs it", m["id"]);
        }
    }
    let rows = sweep(&ps[0].record, &ps[0].settings, rare::params_for("sum", "exponential")[1], "40", "60", 3).unwrap();
    assert!(rows.len() == 3 && rows.iter().all(|r| r.reference.is_some() && r.q[0].est.is_some()), "a sweep of b");
}
```

```rust
//| caption: The data.
use engine::doc::{esc, mathml};
use serde_json::Value;
use std::{any::Any, collections::BTreeMap, sync::{Arc, Mutex, OnceLock}};
static DATA: OnceLock<[Value; 3]> = OnceLock::new();
/// The laboratories of chains.json and rare.json, and the data sets (the O-ring table).
fn data() -> &'static [Value; 3] {
    DATA.get_or_init(|| [
        data!("viz/monte-carlo-workbench/data/chains.json"),
        data!("viz/monte-carlo-workbench/data/rare.json"),
        data!("viz/monte-carlo-workbench/data/datasets.json"),
    ].map(|b| serde_json::from_slice(b).unwrap()))
}
static MEMO: Mutex<BTreeMap<&str, (String, Arc<dyn Any + Send + Sync>)>> = Mutex::new(BTreeMap::new());
/// The value of f, kept between the runs of the page while its key stays the same: a control of one laboratory does
/// not run the other one again.
fn memo<T: Send + Sync + 'static>(slot: &'static str, key: String, f: impl FnOnce() -> T) -> Arc<T> {
    let kept = MEMO.lock().unwrap().get(slot).filter(|x| x.0 == key).map(|x| x.1.clone());
    if let Some(v) = kept.and_then(|v| v.downcast::<T>().ok()) { return v }
    let v = Arc::new(f());
    MEMO.lock().unwrap().insert(slot, (key, v.clone()));
    v
}
fn list(k: usize, key: &str) -> &'static [Value] { data()[k][key].as_array().unwrap() }
fn s(v: &Value) -> &str { v.as_str().unwrap_or("") }
fn texts(v: &Value) -> Vec<&str> { v.as_array().map_or(vec![], |a| a.iter().map(s).collect()) }
fn texts_of(v: &Value, key: &str) -> Vec<String> { v.as_array().map_or(vec![], |a| a.iter().map(|x| fit(s(&x[key]))).collect()) }

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
/// Text from the data in the site's fonts, which have no sub- or superscript digits, √ or ⌊ ⌋:
/// X₁ becomes X_1, 10⁻⁶ 10^-6, X̄ Xbar, √n sqrt n, ⌊x⌋ floor(x).
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
            'Ẑ' => "Zhat",
            'ĝ' => "ghat",
            'ȳ' => "ybar",
            '∫' => "int ",
            '⌊' => "floor(",
            '⌈' => "ceil(",
            '⌋' | '⌉' => ")",
            'ℓ' => "l",
            'ᵀ' => "^T",
            '⟨' => "<",
            '⟩' => ">",
            '∝' => "is proportional to",
            '‖' => "||",
            '∈' => "in",
            '∏' => "prod",
            '⊙' => "*",
            '⊂' => "is a subset of",
            '€' => "EUR ",
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
/// A choice whose first option is the example's own setting; returns the id that it picks.
fn pick(label: &str, own: &str, ids: &[&str], names: &[&str]) -> String {
    let at = ids.iter().position(|x| *x == own).unwrap_or(0);
    let opts: Vec<String> = std::iter::once(format!("As the example sets: {}", names[at])).chain(names.iter().map(|n| n.to_string())).collect();
    match choice(label, &opts, 0) { 0 => ids[at].into(), k => ids[k - 1].into() }
}
```

```rust
//| caption: The pages of the chain laboratory.
const FAMILY_NAMES: [&str; 3] = ["a target law", "a state-space model", "an integral"];
const START: [(&str, &str); 2] = [("dispersed", "Dispersed points"), ("one_point", "One point")];
const RESAMPLE: [(&str, &str); 5] = [("multinomial", "Multinomial"), ("stratified", "Stratified"), ("systematic", "Systematic"), ("residual", "Residual"), ("none", "None")];
const SCHEDULE: [(&str, &str); 2] = [("adaptive", "Adaptive: the ESS falls to τ times its value at each step"), ("fixed", "Fixed: K equal steps of β")];
const SCRAMBLE: [(&str, &str); 3] = [("lms_shift", "Linear scramble and digital shift"), ("shift", "Digital shift only"), ("none", "None: the plain Sobol points")];
const PATH: [(&str, &str); 2] = [("standard", "Standard: the path in time order"), ("bridge", "Brownian bridge: the end point first")];
const PLOT_NAMES: [(&str, &str); 9] = [("trace", "Trace"), ("acf", "Autocorrelation"), ("scatter", "Target and draws"), ("weights", "Weights"), ("genealogy", "Genealogy"),
    ("filter", "Filter"), ("points", "Points"), ("rate", "Error rate"), ("runs", "Runs")];

fn examples() -> Vec<&'static Value> { list(0, "examples").iter().collect() }
fn family(x: &Value) -> chains::Family { chains::Model::parse(s(&x["model"])).map_or(chains::Family::Target, |m| m.family()) }
fn example_title(x: &Value) -> String {
    format!("{}: {}", ["Target law", "State-space model", "Integral"][family(x) as usize], fit(s(&x["title"])))
}
fn param_hint(x: &Value) -> String {
    x["params"].as_array().into_iter().flatten().map(|p| format!("{}={}", s(&p["name"]), p["value"])).collect::<Vec<_>>().join("; ")
}
/// The page of an example: its question, parameters, quantities, decision rule and what to observe.
fn about_example(x: &Value) -> String {
    let mut h = para(s(&x["problem"]));
    let ps: Vec<String> = x["params"].as_array().into_iter().flatten().map(|p| format!("{} = {}: {}", s(&p["name"]), p["value"], s(&p["note"]))).collect();
    h += &format!("<h3>Parameters</h3>{}", bullets(&ps));
    let qs: Vec<String> = x["quantities"].as_array().into_iter().flatten().map(|q| format!("{}: {}", s(&q["name"]), s(&q["note"]))).collect();
    h += &format!("<h3>Quantities</h3>{}", bullets(&qs));
    for (k, name) in [("rule", "Decision rule"), ("decision", "Decision"), ("reason", "Why this model"), ("inputs", "Inputs"), ("dependence", "Dependence"),
        ("method", "Method"), ("diagnostics", "Diagnostics"), ("interpretation", "Interpretation"), ("observe", "What to observe")] {
        if let Some(t) = x[k].as_str() { h += &format!("<p><strong>{name}.</strong> {}</p>", esc(&fit(t))) }
    }
    if let Some(t) = x["data"]["text"].as_str() { h += &format!("<p><strong>Data.</strong> {}</p>", esc(&fit(t))) }
    h
}
/// The figures that apply to the family and the method.
fn plots_for(x: &Value, method: &str) -> Vec<&'static str> {
    match family(x) {
        chains::Family::Filter => vec!["filter", "weights", "genealogy", "runs"],
        chains::Family::Integral => vec!["rate", "points", "runs"],
        _ if method == "smc" => vec!["scatter", "weights", "genealogy", "runs"],
        _ => vec!["trace", "acf", "scatter", "runs"],
    }
}
fn quantity_name(lab: &chains::Lab, id: &str) -> String {
    list(0, "examples").iter().find(|e| e["id"] == lab.rec.example.as_str()).and_then(|e| e["quantities"].as_array()?.iter().find(|q| q["id"] == id))
        .map_or(id.into(), |q| fit(s(&q["name"])))
}

/// The estimates of each method with their intervals and references.
fn estimates(lab: &chains::Lab, sm: &chains::Summary) {
    let mut rows = vec![];
    for m in &sm.methods {
        for q in &m.quantities {
            let iv = q.b.lo.zip(q.b.hi).map_or("–".into(), |(a, b)| format!("{} to {}", fmt(a), fmt(b)));
            let holds = q.covered.map_or("–", |c| if c { "yes" } else { "no" });
            rows.push(vec![quantity_name(lab, &q.id), m.method.name().into(), opt(q.b.est), iv, opt(q.mcse), opt(q.reference), opt(q.error), holds.into()]);
        }
    }
    table(&["Quantity", "Method", "Estimate", "95 % interval", "MCSE from the ESS", "Reference", "Error", "Interval holds the reference"], &rows);
    if let Some(q) = sm.methods.first().and_then(|m| m.quantities.first()) { println!("Interval: {}.", fit(&q.b.how)) }
    println!("Reference ({}): {}.", if lab.rf.tag == "exact" { "exact" } else { "a numerical approximation" }, fit(lab.rf.how));
}

/// The three kinds of diagnostic of each method, kept apart.
fn diagnostics(lab: &chains::Lab, sm: &chains::Summary) {
    for m in &sm.methods {
        if let Some(c) = &m.chain {
            println!("{}: Markov-chain diagnostics of {} chains of {} draws. Acceptance rate {}{}.", m.method.name(), m.runs, c.n, fmt(c.accept),
                if m.method == chains::Method::Hmc { format!(", {} divergent transitions, largest energy error {}, {} gradients", c.divergent, fmt(c.max_energy), c.grads) } else { String::new() });
            let rows: Vec<Vec<String>> = c.series.iter().map(|d| vec![fit(&quantity_name(lab, &d.name)), opt(d.rhat),
                d.ess.map_or("–".into(), |e| format!("{}{}", if d.bound { "≥ " } else { "" }, fmt(e))), opt(d.tau), opt(d.mcse), fmt(d.sd)]).collect();
            table(&["Series", "Split R-hat", "ESS", "τ", "MCSE", "Standard deviation"], &rows);
        }
        if let Some(w) = &m.weights {
            println!("{}: weight degeneracy of {} runs of {} particles.", m.method.name(), m.runs, w.n);
            let mut rows = vec![
                vec!["Mean weight ESS at the end".to_string(), fmt(w.mean_final_ess)], vec!["Largest normalised weight".into(), fmt(w.max_w)],
                vec!["Mean number of resampling steps".into(), fmt(w.resamplings)], vec!["Smallest weight ESS of any step".into(), fmt(w.min_ess)],
                vec!["Mean distinct ancestors at the first step".into(), fmt(w.surviving)],
                vec!["log Z hat over the runs".into(), format!("{} ± {}", opt(w.log_z.est), opt(w.log_z.se))],
            ];
            if let Some(z) = &w.z_ratio { rows.push(vec!["Z hat ÷ Z (1 when the estimate of Z has no bias)".into(), format!("{} ± {}", opt(z.est), opt(z.se))]) }
            if let Some(k) = w.steps { rows.push(vec!["Mean number of tempering steps".into(), fmt(k)]) }
            if let Some(h) = w.held { rows.push(vec!["The adaptive schedule held the ESS threshold".into(), if h { "yes" } else { "no" }.into()]) }
            table(&["Diagnostic", "Value"], &rows);
        }
        if let Some(i) = &m.integral {
            println!("{}: {} dimensions, {} points in each of {} runs.", m.method.name(), i.d, i.n, m.runs);
            let fs: Vec<&str> = lab.rec.quantities.iter().map(String::as_str).collect();
            let rows: Vec<Vec<String>> = fs.iter().enumerate().map(|(q, id)| vec![quantity_name(lab, id), opt(i.ratio.get(q).copied().flatten())]).collect();
            table(&["Output", "Variance ratio: independent ÷ randomised Sobol points"], &rows);
        }
    }
    let rows: Vec<Vec<String>> = sm.methods.iter().flat_map(|m| m.quantities.iter().map(move |q| (m, q))).map(|(m, q)| vec![quantity_name(lab, &q.id), m.method.name().into(),
        opt(q.b.sd), opt(q.b.se), opt(q.error), opt(q.error.zip(q.b.se).and_then(|(e, s)| (s > 0.0).then(|| e / s)))]).collect();
    println!("Estimation error, from the spread of the independent runs:");
    table(&["Quantity", "Method", "Spread of the runs", "Standard error", "Error", "Error ÷ standard error"], &rows);
}

/// The figure `plot` of the runs: the series k (a coordinate) of the trace and the autocorrelation, quantity q of the
/// error rate and the runs.
fn figure(lab: &chains::Lab, blocks: &[chains::Block], sm: &chains::Summary, plot: &str, k: usize, q: usize) {
    let run0 = &blocks[0].runs[0];
    let coord = lab.model.coords()[k];
    match plot {
        "trace" => {
            let mut p = Plot::new();
            for b in blocks.iter().take(4) { if let Some(c) = b.runs[0].chain() { p = p.line(&c.trace.iter().map(|t| t[0]).collect::<Vec<_>>(), &c.trace.iter().map(|t| t[1 + k]).collect::<Vec<_>>()) } }
            p.labels("iteration (the warm-up first)", coord).show();
            println!("The trace of {coord} in up to 4 chains of {}. The first half is the warm-up, which the estimate discards.", sm.methods[0].method.name());
        }
        "acf" => {
            let mut p = Plot::new().rule(0.0);
            for m in &sm.methods { if let Some(d) = m.chain.as_ref().and_then(|c| c.series.get(k)) { p = p.line(&(0..d.acf.len()).map(|l| l as f64).collect::<Vec<_>>(), &d.acf) } }
            p.ylim(-0.2, 1.0).labels("lag", &format!("autocorrelation of {coord}")).show();
            println!("The combined autocorrelation of {coord}, {}. A slow decay means a small effective sample size.", sm.methods.iter().map(|m| m.method.name()).collect::<Vec<_>>().join(", then "));
        }
        "scatter" => {
            let [[x0, x1], [y0, y1]] = lab.window();
            let mut p = Plot::new();
            // The target density: its contour at 1 %, 10 % and 50 % of the largest value on a grid.
            let g = 60;
            let at = |i: usize, a: f64, b: f64| a + (b - a) * i as f64 / g as f64;
            let lp: Vec<Vec<f64>> = (0..=g).map(|i| (0..=g).map(|j| lab.logp([at(i, x0, x1), at(j, y0, y1)])).collect()).collect();
            let top = lp.iter().flatten().copied().filter(|v| v.is_finite()).fold(-INF, f64::max);
            for lvl in [0.01f64, 0.1, 0.5] {
                let c = top + lvl.ln();
                let (mut xs, mut ys) = (vec![], vec![]);
                for i in 0..g { for j in 0..g { if (lp[i][j] - c) * (lp[i + 1][j] - c) <= 0.0 || (lp[i][j] - c) * (lp[i][j + 1] - c) <= 0.0 { xs.push(at(i, x0, x1)); ys.push(at(j, y0, y1)) } } }
                p = p.dots(&xs, &ys);
            }
            if let Some(c) = run0.chain() {
                p = p.dots(&c.cloud.iter().map(|d| d.0).collect::<Vec<_>>(), &c.cloud.iter().map(|d| d.1).collect::<Vec<_>>());
                if c.path.len() > 1 { p = p.line(&c.path.iter().map(|d| d.0).collect::<Vec<_>>(), &c.path.iter().map(|d| d.1).collect::<Vec<_>>()) }
            }
            if let Some(pr) = run0.part() { p = p.dots(&pr.cloud.iter().map(|d| d[0]).collect::<Vec<_>>(), &pr.cloud.iter().map(|d| d[1]).collect::<Vec<_>>()) }
            let [a, b] = lab.model.coords();
            p.ylim(y0, y1).labels(a, b).show();
            println!("The contours of the target density at 1 %, 10 % and 50 % of its largest value, then the draws of run 0{}.", if run0.chain().is_some_and(|c| c.path.len() > 1) { " and the last leapfrog path of Hamiltonian Monte Carlo" } else { "" });
        }
        "weights" => {
            let Some(pr) = run0.part() else { return };
            let n = pr.weights.len() as f64;
            Plot::new().line(&(0..pr.weights.len()).map(|i| i as f64 / n).collect::<Vec<_>>(), &pr.weights.iter().map(|w| w * n).collect::<Vec<_>>()).rule(1.0)
                .labels("particles, sorted by weight (fraction)", "N × normalised weight").show();
            let x: Vec<f64> = pr.steps.iter().map(|s| s.beta).collect();
            Plot::new().dots(&x, &pr.steps.iter().map(|s| s.ess / pr.n as f64).collect::<Vec<_>>()).rule(lab.s.ess).ylim(0.0, 1.0)
                .labels(if lab.fam == chains::Family::Filter { "time t" } else { "tempering exponent β" }, "weight ESS ÷ N").show();
            println!("Run 0: the normalised weights at the end (1 for equal weights), then the weight ESS at each step against the threshold τ. {} of {} steps resampled.",
                pr.steps.iter().filter(|s| s.resampled).count(), pr.steps.len());
        }
        "genealogy" => {
            let Some(g) = run0.part().and_then(|p| p.genealogy.as_ref()) else { return };
            let mut p = Plot::new();
            for (k, c) in g.crowd.iter().enumerate() { p = p.dots(&vec![k as f64; c.len()], c) }
            let last = g.nodes.len() - 1;
            for i in 0..g.nodes[last].len() {
                let (mut xs, mut ys, mut at) = (vec![], vec![], i);
                for k in (0..=last).rev() { let (v, up) = g.nodes[k][at]; xs.push(k as f64); ys.push(v); at = up }
                p = p.line(&xs, &ys);
            }
            p.labels("step", lab.model.coords()[0]).show();
            println!("Run 0: the ancestral lines of {} particles of the last step, over a crowd of particles at each step. {} distinct ancestors survive at the first step.", g.nodes[last].len(), g.surviving);
        }
        "filter" => {
            let Some(pr) = run0.part() else { return };
            let t: Vec<f64> = (1..=pr.means.len()).map(|t| t as f64).collect();
            let band = |s: f64| pr.means.iter().zip(&pr.sds).map(|(m, d)| m + s * d).collect::<Vec<_>>();
            let mut p = Plot::new().line(&t, &pr.means).line(&t, &band(-2.0)).line(&t, &band(2.0));
            if !lab.rf.means.is_empty() { p = p.dots(&t, &lab.rf.means) }
            if !lab.rec.data.y.is_empty() && lab.model == chains::Model::Level { p = p.dots(&t, &lab.rec.data.y) }
            p.labels("time t", "state").show();
            println!("Run 0: the filter mean of the state with ± 2 standard deviations, then the reference filter means{}.", if lab.model == chains::Model::Level { " and the readings" } else { "" });
        }
        "points" => {
            let Some(i) = run0.int() else { return };
            for (k, name) in [(0, "the randomised Sobol points"), (1, "independent uniform points")] {
                Plot::new().dots(&i.points[k].iter().map(|p| p.0).collect::<Vec<_>>(), &i.points[k].iter().map(|p| p.1).collect::<Vec<_>>()).ylim(0.0, 1.0).labels("u1", "u2").show();
                println!("The first 256 of {name}, in dimensions 1 and 2.");
            }
        }
        "rate" => {
            let Some(d) = sm.methods.iter().find_map(|m| m.integral.as_ref()) else { return };
            let x: Vec<f64> = d.rate.iter().map(|r| r.0.log2()).collect();
            let y = |j: usize| d.rate.iter().map(|r| r.1.get(q).and_then(|e| e[j]).map_or(f64::NAN, |e| e.log2())).collect::<Vec<f64>>();
            if y(0).iter().all(|v| v.is_nan()) { println!("This output has no reference, so the notebook gives no error rate."); return }
            let y0 = y(0)[0];
            Plot::new().line(&x, &y(0)).line(&x, &y(1)).line(&x, &x.iter().map(|v| y0 - (v - x[0])).collect::<Vec<_>>()).line(&x, &x.iter().map(|v| y0 - (v - x[0]) / 2.0).collect::<Vec<_>>())
                .labels("log2 n", "log2 of the RMS error").show();
            println!("The root mean square error against the reference over the runs: randomised Sobol points, independent points, then the slopes n^-1 and n^-1/2 for comparison.");
        }
        _ => {
            let mut p = Plot::new();
            for (k, m) in sm.methods.iter().enumerate() {
                let v: Vec<f64> = blocks.iter().filter_map(|b| chains::run_value(lab, &b.runs[k], m.method, q)).collect();
                p = p.dots(&(0..v.len()).map(|i| i as f64 + 1.0).collect::<Vec<_>>(), &v);
            }
            if let Some(r) = lab.rf.get(&lab.rec.quantities[q]) { p = p.rule(r) }
            p.labels("independent run", &quantity_name(lab, &lab.rec.quantities[q])).show();
            println!("The estimate of each independent run, {}, with the reference as a line.", sm.methods.iter().map(|m| m.method.name()).collect::<Vec<_>>().join(", then "));
        }
    }
}

/// The settings of a card's example as text, such as "method: hmc; size: 12".
fn card_settings(part: &Value) -> String {
    part["settings"].as_object().map_or(String::new(), |o| o.iter().map(|(k, v)| format!("{}: {}", k.trim_start_matches("c_"), v.as_str().map_or(v.to_string(), String::from))).collect::<Vec<_>>().join("; "))
}
/// A method card of the chain laboratory.
fn chain_card(m: &Value) -> String {
    let ex = |part: &str| list(0, "examples").iter().find(|e| e["id"] == m[part]["example"]).map_or(String::new(), |e| fit(s(&e["title"])));
    let with = list(0, "methods").iter().find(|x| x["id"] == m["comparison"]["with"]).map_or("", |x| s(&x["name"]));
    format!("<p><strong>{}.</strong> {}.</p>{}{}<h3>Assumptions</h3>{}<h3>Settings</h3>{}<h3>Where it works: {}</h3>{}<p>Settings: {}.</p><h3>Where it fails: {}</h3>{}<p>Settings: {}.</p><h3>Comparison with {}: {}</h3>{}",
        esc(&fit(s(&m["name"]))), esc(&fit(s(&m["family"]))), mathml(s(&m["estimator"]), true), para(s(&m["estimatorText"])), bullets(&texts(&m["assumptions"])), bullets(&texts(&m["settings"])),
        esc(&ex("suitable")), para(s(&m["suitable"]["text"])), esc(&card_settings(&m["suitable"])), esc(&ex("failure")), para(s(&m["failure"]["text"])), esc(&card_settings(&m["failure"])),
        esc(&fit(with)), esc(&ex("comparison")), para(s(&m["comparison"]["text"])))
}
```

```rust
//| caption: The pages of the rare-event laboratory.
const LAW_NAMES: [&str; 3] = ["Exponential (a light tail)", "Weibull with k < 1 (no exponential moment)", "Pareto II (a heavy tail)"];
const COPULA_NAMES: [&str; 4] = ["Independent shares", "Gaussian copula", "Gumbel copula", "Clayton copula"];
const FAILURE_NAMES: [&str; 4] = ["None", "Cross-entropy with a light-tailed family", "Subset simulation with a very small step", "Adaptive importance sampling from the nominal law"];
const OPTION_STEPS: [f64; 8] = [1.0, 0.01, 0.01, 0.01, 0.01, 1.0, 0.1, 0.1];
const RARE_PLOTS: [(&str, &str); 4] = [("conv", "Convergence: the estimate against the work"), ("comparison", "Comparison of the methods"), ("stages", "Stages of the multistage method"), ("tail", "Tail")];

static PRESETS: OnceLock<Vec<rare::Preset>> = OnceLock::new();
fn rare_examples() -> &'static [rare::Preset] { PRESETS.get_or_init(|| rare::presets(&data()[1].to_string()).unwrap()) }
fn rare_name(id: &str) -> &'static str { rare::METHODS.iter().position(|m| *m == id).map_or("", |i| rare::NAMES[i]) }
/// The method settings as text: "levels" only when it is above 0, then the other settings.
fn options_text(v: &[f64]) -> String {
    rare::OPTIONS.iter().zip(v).filter(|(o, x)| o.name != "levels" || **x > 0.0).map(|(o, x)| format!("{}={x}", o.name)).collect::<Vec<_>>().join("; ")
}
/// A number as plain text with 6 significant digits, for a text box.
fn fmt_plain(x: f64) -> String { format!("{}", format!("{x:.5e}").parse::<f64>().unwrap_or(0.0)) }
/// The value of a parameter in a parameter text, or its default.
fn param_value(params: &str, p: &rare::Par) -> f64 { rare::parse_params(params).0.get(p.name).and_then(|t| t.parse().ok()).unwrap_or(p.def) }

/// A compiled rare-event problem with its run, the summary of each method and the reference.
struct RareLab { c: rare::Prob, run: rare::Run, sm: Vec<rare::Summary>, rf: rare::Reference }
fn rare_lab_of(r: &rare::Record, s: &rare::Settings) -> Result<RareLab, String> {
    let c = rare::prepare(r, s)?;
    let run = rare::run(&c);
    let sm = rare::summary(&c, &run);
    Ok(RareLab { rf: rare::reference(&c), c, run, sm })
}
fn quantity_label(c: &rare::Prob, q: &rare::Quantity) -> String {
    match (q.policy, &c.cat) { (Some(a), Some(k)) => format!("{}, {}", q.label, k.policies[a].label), _ => q.label.clone() }
}

/// The page of a rare-event example: the problem, the parameters with their values, the model and what to observe.
fn about_rare(p: &rare::Preset, law: &str, params: &str) {
    let pr = list(1, "problems").iter().find(|x| x["id"] == p.record.problem.as_str()).unwrap();
    html(&format!("<p><strong>{}.</strong> {}</p>{}", esc(&fit(s(&pr["title"]))), esc(&fit(s(&pr["statement"]))), para(s(&pr["decision"]))));
    let rows: Vec<Vec<String>> = rare::params_for(&p.record.problem, law).iter()
        .map(|x| vec![x.name.into(), fmt(param_value(params, x)), x.unit.into(), fit(x.text)]).collect();
    table(&["Parameter", "Value", "Unit", "Meaning"], &rows);
    let mut h = String::new();
    for (k, name) in [("reason", "Why this model"), ("inputs", "Inputs"), ("dependence", "Dependence"), ("interpretation", "Interpretation"), ("data", "Data")] {
        h += &format!("<p><strong>{name}.</strong> {}</p>", esc(&fit(s(&pr[k]))));
    }
    html(&(h + &format!("<p><strong>What to observe with the example's own settings.</strong> {}</p>", esc(&fit(&p.observe)))));
}

/// The estimates of each method (in the catastrophe test, all quantities or only the systemic ruin and the extreme
/// event), the refusals and errors, the reference and the work.
fn rare_estimates(l: &RareLab, all: bool) {
    let c = &l.c;
    let mut rows = vec![];
    for m in l.sm.iter().filter(|m| m.refused.is_empty() && m.error.is_empty()) {
        for (q, e) in c.quantities.iter().zip(&m.q).filter(|(q, _)| all || c.cat.is_none() || q.name == "systemic" || q.name == "extreme") {
            let est = match e.hits { Some(h) => format!("{} ({} paths in the event)", opt(e.est), fmt(h)), None => opt(e.est) };
            let iv = e.lo.zip(e.hi).map_or(String::new(), |(a, b)| format!("{} to {}. ", fmt(a), fmt(b)));
            rows.push(vec![rare_name(m.method).into(), fit(&quantity_label(c, q)), est, format!("{iv}{}", fit(&e.how)), opt(e.rel_err)]);
        }
    }
    if !rows.is_empty() { table(&["Method", "Quantity", "Estimate", "95 % interval", "Relative error"], &rows) }
    for m in &l.sm {
        if !m.refused.is_empty() { println!("{} is refused. {}", rare_name(m.method), fit(&m.refused)) }
        if !m.error.is_empty() { println!("{} stopped: {}", rare_name(m.method), fit(&m.error)) }
    }
    let rf = &l.rf;
    match rf.value {
        Some(v) => println!("Reference ({}): {}, {}.", if rf.kind == "exact" { "exact" } else { "numerical" }, fmt(v), fit(&rf.how)),
        None => println!("{}", fit(&rf.how)),
    }
    if let Some((v, how)) = &rf.asymptotic { println!("Asymptotic: {}, {}.", fmt(*v), fit(how)) }
    if let Some(d) = rf.ldp.as_ref().filter(|d| d.i > 0.0) {
        println!("Large deviations: I(a) = {} at a = b/n = {}, and θ* = {}. Chernoff bound: {}. Bahadur–Rao approximation: {}.", fmt(d.i), fmt(d.a), fmt(d.theta), fmt(d.chernoff), opt(d.bahadur_rao));
    }
    if let (Some(r), Some(b)) = (rf.adjustment, rf.lundberg) { println!("Adjustment coefficient R = {}. Lundberg bound exp(−Ru) = {}.", fmt(r), fmt(b)) }
    for m in l.sm.iter().filter(|m| m.refused.is_empty() && m.error.is_empty()) {
        println!("Work of {}: {} random draws{}.", rare_name(m.method), fmt(m.work), m.wnrv.map_or(String::new(), |w| format!(", work-normalised relative variance {}", fmt(w))));
    }
}

/// The decision of the first method that gives an estimate.
fn rare_decision(l: &RareLab) {
    let c = &l.c;
    let Some((m, d)) = l.sm.iter().find_map(|m| Some((m, rare::decide(c, m).filter(|_| m.error.is_empty())?))) else {
        println!("No method of this run gives an estimate, so the page makes no decision.");
        return;
    };
    let target = c.par("target");
    let Some(k) = &c.cat else {
        println!("Target: {} ≤ {}. With {}, the target is {}.", fit(&c.quantities[0].label), fmt(target), rare_name(m.method).to_lowercase(), d.rows[0].2);
        return;
    };
    println!("Choose the cheapest policy with P(at least {} defaults by T = {} years) ≤ {}. The decision uses {}.", fmt(c.par("m")), fmt(c.par("T")), fmt(target), rare_name(m.method).to_lowercase());
    let rows: Vec<Vec<String>> = k.policies.iter().enumerate().map(|(a, p)| {
        let q = &m.q[3 * a];
        let iv = q.lo.zip(q.hi).map_or(String::new(), |(x, y)| format!(" ({} to {})", fmt(x), fmt(y)));
        vec![format!("{}{}", fit(&p.label), if d.best == Some(a) { " (chosen)" } else { "" }), format!("u = {}, c = {} a year", fmt(p.u), fmt(p.c)),
            format!("{}: {}", fmt(p.cost), fit(&p.cost_text)), format!("{}{iv}", opt(q.est)), d.rows[a].2.into()]
    }).collect();
    table(&["Policy", "Capital and premium", "Cost over T", "P(systemic ruin)", "Target"], &rows);
    match d.best {
        None => println!("No policy meets the target with this run."),
        Some(b) => println!("{} is the cheapest policy that {}.", fit(&k.policies[b].label),
            if d.separated == Some(true) { "meets the target: its whole interval is below it" } else { "can meet the target: its interval holds the target, so the run needs more replications before this choice" }),
    }
    html(&format!("<p>The exact values:</p>{}", bullets(&[
        format!("E N(T) = {} events.", fmt(k.en)), format!("Mean event loss: {}.", fmt(k.mean_s)), format!("Expected loss of each insurer: {} a year.", fmt(k.expected_loss)),
        format!("Safety loading: {}.", k.loading.map_or("not defined, because the mean loss is infinite".into(), fmt)),
        format!("Expected recoveries of the layer for each event: {}.", fmt(k.ceded)), format!("Layer price for each insurer: {} a year.", fmt(k.price)),
    ])));
    if let Some(r) = &m.risk {
        println!("Total loss over T: the value at risk at {} is {}, and the expected shortfall is {}. {}.", fmt(c.par("q")), opt(r.var), r.es.map_or("not a number".into(), fmt), fit(&r.how).trim_end_matches('.'));
    }
}

/// The diagnostics of each method and the assumptions of the methods of the run.
fn rare_diagnostics(l: &RareLab) {
    let c = &l.c;
    for (m, run) in l.sm.iter().zip(&l.run.methods) {
        let name = rare_name(m.method);
        if !m.refused.is_empty() { println!("{name}: refused, so no diagnostic."); continue }
        let (Some(d), Some(last)) = (&m.diag, run.diags.last()) else { continue };
        let all: Vec<&rare::Diag> = std::iter::once(last).chain(&last.policies).collect();
        let mut items = vec![];
        if let Some(e) = d.ess { items.push(format!("The effective sample size of the weights in the event is {} (the mean over the replications), and the largest share of one weight is {}. The effective sample size is a diagnostic, not a proof of convergence.", fmt(e), opt(d.max_share))) }
        if all.iter().any(|x| x.infinite_variance) {
            items.push(if c.cat.as_ref().is_some_and(|k| k.trunc.is_some()) && c.law == "weibull" {
                format!("The Weibull density f(x) ~ x^(k − 1) with k = {} ≤ 0.5 has no upper bound near 0. Thus f/g has no upper bound, and the variance of the weights is infinite. The interval is not valid.", fmt(c.par("k")))
            } else { "The proposal family has a lighter tail than the target. Thus f/g has no upper bound, and the variance of the weights is infinite. The interval is not valid.".into() });
        }
        if all.iter().any(|x| x.reached == Some(false)) { items.push("The levels did not reach the event within the iteration limit. The estimate uses the last proposal. This estimate has no bias, but its variance can be large.".into()) }
        if last.adapted == Some(false) { items.push("No adaptation step had a path in the event, so the proposal stayed at its start.".into()) }
        if let Some(a) = d.accept { items.push(format!("The acceptance rate of the chain moves is {}. The acceptance rate of the component proposals is {} (spread {}).", fmt(a), opt(last.comp_accept), opt(last.spread))) }
        if !last.early.is_empty() { items.push(format!("The fraction of the entrants of each stage that were already past its level: {}.", last.early.iter().map(|x| fmt(*x)).collect::<Vec<_>>().join(", "))) }
        if let Some(b) = last.bound { items.push(format!("Every weight is at most 1/β = {}.", fmt(b))) }
        if let (Some(e), Some(k)) = (d.events, &c.cat) { items.push(format!("The mean number of events is {}, against the exact E N(T) = {}.", fmt(e), fmt(k.en))) }
        if items.is_empty() { items.push("No diagnostic beyond the interval.".into()) }
        println!("{name}: {}", items.join(" "));
    }
    let pr = list(1, "problems").iter().find(|x| x["id"] == c.problem).unwrap();
    println!("{}", fit(s(&pr["diagnostics"])));
    let rows: Vec<String> = c.methods.iter().map(|m| {
        let card = list(1, "methods").iter().find(|x| x["id"] == *m).unwrap();
        format!("{}: {}", rare_name(m), s(&card["assumptions"][0]))
    }).collect();
    html(&format!("<p>The first assumption of each method of this run:</p>{}", bullets(&rows)));
}

/// A rare-event figure: convergence, comparison, stages or tail.
fn rare_figure(l: &RareLab, plot: &str) {
    let (c, rf) = (&l.c, &l.rf);
    let label = fit(&quantity_label(c, &c.quantities[0]));
    let ok: Vec<usize> = (0..c.methods.len()).filter(|&k| l.sm[k].refused.is_empty() && l.sm[k].error.is_empty()).collect();
    let names = |ks: &[usize]| ks.iter().map(|&k| rare_name(c.methods[k]).to_lowercase()).collect::<Vec<_>>().join(", then ");
    let lg = |v: &[f64]| v.iter().map(|x| if *x > 0.0 { x.log10() } else { f64::NAN }).collect::<Vec<_>>();
    match plot {
        "conv" => {
            let mut p = Plot::new();
            let mut shown = vec![];
            for &k in &ok {
                let pts: Vec<&rare::TracePt> = l.run.trace.iter().filter_map(|t| t.get(k)).filter(|p| p.est.is_some_and(|e| e > 0.0) && p.work > 0.0).collect();
                if pts.is_empty() { continue }
                p = p.line(&lg(&pts.iter().map(|p| p.work).collect::<Vec<_>>()), &lg(&pts.iter().map(|p| p.est.unwrap()).collect::<Vec<_>>()));
                shown.push(k);
            }
            if shown.is_empty() { println!("No method has a positive estimate, so the figure has no line."); return }
            if let Some(v) = rf.value.filter(|v| *v > 0.0) { p = p.rule(v.log10()) }
            p.labels("log10 of the work (random draws)", &format!("log10 of {label}")).show();
            println!("The estimate after each replication against the work: {}{}.", names(&shown), if rf.value.is_some() { ", with the reference as a line" } else { "" });
        }
        "comparison" => {
            let pos = ok.iter().all(|&k| l.sm[k].q[0].est.is_some_and(|e| e > 0.0) && l.sm[k].q[0].lo.is_none_or(|v| v > 0.0));
            let f = |v: f64| if pos { v.log10() } else { v };
            let mut p = Plot::new();
            for (i, &k) in ok.iter().enumerate() {
                let (q, y) = (&l.sm[k].q[0], i as f64 + 1.0);
                if let (Some(a), Some(b)) = (q.lo, q.hi) { p = p.line(&[f(a), f(b)], &[y, y]) }
                if let Some(e) = q.est { p = p.dots(&[f(e)], &[y]) }
            }
            if let Some(v) = rf.value.filter(|v| !pos || *v > 0.0) { p = p.line(&[f(v), f(v)], &[0.5, ok.len() as f64 + 0.5]) }
            p.ylim(0.0, ok.len() as f64 + 1.0).labels(&if pos { format!("log10 of {label}") } else { label.clone() }, "method").show();
            println!("The estimate and the 95 % interval of each method, from the bottom: {}{}.", names(&ok), if rf.value.is_some() { ". The vertical line is the reference" } else { "" });
        }
        "stages" => {
            let Some(k) = ok.iter().copied().find(|&k| ["splitting", "subset", "ce", "ais"].contains(&c.methods[k])) else {
                println!("Choose splitting, subset simulation, adaptive importance sampling or the cross-entropy method to see its stages.");
                return;
            };
            let Some(d) = l.run.methods[k].diags.last().and_then(|d| if c.cat.is_some() { d.policies.first() } else { Some(d) }) else { return };
            let at = |n: usize| (1..=n).map(|i| i as f64).collect::<Vec<_>>();
            match c.methods[k] {
                "splitting" => {
                    Plot::new().line(&at(d.fractions.len()), &d.fractions).dots(&at(d.fractions.len()), &d.fractions).dots(&at(d.early.len()), &d.early).ylim(0.0, 1.0)
                        .labels("stage", "fraction of the paths").show();
                    println!("Multilevel splitting, the last replication: the fraction of the paths that reach the level of each stage, then the fraction of the entrants that were already past it.");
                }
                "subset" => {
                    Plot::new().line(&at(d.fractions.len()), &d.fractions).dots(&at(d.fractions.len()), &d.fractions).ylim(0.0, 1.0).labels("level", "fraction above the level").show();
                    println!("Subset simulation, the last replication: the fraction of the samples above each level. The levels are {}.", d.levels.iter().map(|x| fmt(*x)).collect::<Vec<_>>().join(", "));
                }
                "ce" => {
                    let top = if c.cat.is_some() { c.par("m") } else { c.x0 };
                    let steps = &d.path[1.min(d.path.len())..];
                    let y: Vec<f64> = steps.iter().map(|s| s.gamma.unwrap_or(f64::NAN) / top).collect();
                    Plot::new().line(&at(y.len()), &y).dots(&at(y.len()), &y).labels("iteration", "level ÷ the level of the event").show();
                    println!("The cross-entropy method, the last replication: the level of each iteration as a fraction of the level of the event. The parameters of the proposals are {}.",
                        steps.iter().map(|s| s.q.r.map_or_else(|| format!("v = {}", opt(s.q.v)), |r| format!("r = {}", fmt(r)))).collect::<Vec<_>>().join(", "));
                }
                _ => {
                    let steps = &d.path[1.min(d.path.len())..];
                    let y: Vec<f64> = steps.iter().map(|s| s.q.r.unwrap_or(f64::NAN)).collect();
                    Plot::new().line(&at(y.len()), &y).dots(&at(y.len()), &y).labels("step", "twist r").show();
                    println!("Adaptive importance sampling, the last replication: the twist r after each step. The paths in the event at each step: {}.",
                        steps.iter().map(|s| s.hits.map_or("–".into(), |h| h.to_string())).collect::<Vec<_>>().join(", "));
                }
            }
        }
        _ => {
            if let Some(k) = &c.cat {
                let Some(m) = l.sm.iter().find(|m| m.risk.is_some() && !m.loss_sf.is_empty()) else { println!("Run direct simulation or a change of measure to draw the total loss."); return };
                let pts: Vec<(f64, f64)> = k.grid.iter().zip(&m.loss_sf).filter(|p| *p.1 > 0.0).map(|(x, y)| (x.log10(), y.log10())).collect();
                if pts.len() < 2 { println!("Too few paths reach the grid to draw the tail."); return }
                let (y0, y1) = (pts.iter().map(|p| p.1).fold(f64::MAX, f64::min), 0.0);
                let mut p = Plot::new().line(&pts.iter().map(|p| p.0).collect::<Vec<_>>(), &pts.iter().map(|p| p.1).collect::<Vec<_>>());
                let r = m.risk.as_ref().unwrap();
                for v in [r.var, r.es].into_iter().flatten() { p = p.line(&[v.log10(); 2], &[y0, y1]) }
                p.ylim(y0, y1).labels("log10 of the total loss x over T", "log10 of P(L > x)").show();
                println!("The survival function of the total loss over T from the weighted paths of {}, then the value at risk{} as vertical lines.", rare_name(m.method).to_lowercase(), if r.es.is_some() { " and the expected shortfall" } else { "" });
                return;
            }
            const CURVES: [(&str, &str); 5] = [("exact", "the exact value"), ("chernoff", "the Chernoff bound"), ("bahadur_rao", "the Bahadur–Rao approximation"), ("lundberg", "the Lundberg bound"), ("asymptotic", "the asymptotic")];
            let mut p = Plot::new();
            let mut what = vec![];
            for (id, ys) in &rf.curves {
                p = p.line(&rf.x, &lg(ys));
                what.push(CURVES.iter().find(|x| x.0 == *id).map_or(*id, |x| x.1));
            }
            if let Some((x, y)) = &rf.numerical { p = p.dots(x, &lg(y)); what.push("the Asmussen–Kroese reference as dots") }
            if let Some(q) = ok.first().map(|&k| &l.sm[k].q[0]).filter(|q| q.est.is_some_and(|e| e > 0.0)) {
                if let (Some(a), Some(b)) = (q.lo.filter(|a| *a > 0.0), q.hi) { p = p.line(&[c.x0; 2], &[a.log10(), b.log10()]) }
                p = p.dots(&[c.x0], &[q.est.unwrap().log10()]);
                what.push("the estimate of this run at the threshold, with its interval");
            }
            let (x, y) = if c.problem == "sum" { ("threshold x", "P(S_n > x)") } else { ("initial capital u", "ψ(u)") };
            p.labels(x, &format!("log10 of {y}")).show();
            println!("The tail against the {x}: {}.", what.join(", then "));
        }
    }
}

/// One row of a sweep: the value, the estimate of each policy (or of the probability), the chosen policy and the reference.
struct SweepRow { x: f64, q: Vec<rare::Est>, best: Option<usize>, reference: Option<f64>, target: f64, labels: Vec<String> }
/// The first method at each value of the parameter, with at most 2^11 paths and 8 replications.
fn sweep(r: &rare::Record, s: &rare::Settings, p: &rare::Par, from: &str, to: &str, n: usize) -> Result<Vec<SweepRow>, String> {
    let (Ok(a), Ok(b)) = (from.trim().parse::<f64>(), to.trim().parse::<f64>()) else { return Err("The first and the last value of the sweep must be numbers.".into()) };
    let st = rare::Settings { compare: "none".into(), reps: s.reps.min(8), size: s.size.min(11), ..s.clone() };
    (0..n).map(|i| {
        let x = (a + (b - a) * i as f64 / (n - 1) as f64).clamp(p.min, p.max);
        let x = if p.int { x.round() } else { x };
        let c = rare::prepare(&rare::with_param(r, p.name, x), &st).map_err(|e| format!("At {} = {}: {e}", p.name, fmt(x)))?;
        if !c.refused[0].is_empty() { return Err(format!("At {} = {}: {}", p.name, fmt(x), c.refused[0])) }
        let run = rare::run(&c);
        let m = rare::summary(&c, &run).remove(0);
        if !m.error.is_empty() { return Err(format!("At {} = {}: {}", p.name, fmt(x), m.error)) }
        let best = rare::decide(&c, &m).and_then(|d| d.best);
        Ok(match &c.cat {
            Some(k) => SweepRow { x, q: (0..3).map(|a| m.q[3 * a].clone()).collect(), best, reference: None, target: c.par("target"), labels: k.policies.iter().map(|p| p.label.clone()).collect() },
            None => SweepRow { x, q: vec![m.q[0].clone()], best, reference: rare::reference(&c).value, target: c.par("target"), labels: vec![c.quantities[0].label.clone()] },
        })
    }).collect()
}
fn show_sweep(problem: &str, name: &str, rows: &[SweepRow]) {
    let xs: Vec<f64> = rows.iter().map(|r| r.x).collect();
    let lg = |v: Option<f64>| v.filter(|v| *v > 0.0).map_or(f64::NAN, f64::log10);
    let mut p = Plot::new();
    for j in 0..rows[0].q.len() { p = p.line(&xs, &rows.iter().map(|r| lg(r.q[j].est)).collect::<Vec<_>>()) }
    if problem == "cat" {
        p.rule(rows[0].target.log10()).labels(name, "log10 of P(systemic ruin)").show();
        println!("The probability of a systemic ruin under each policy: {}. The horizontal line is the target.", rows[0].labels.iter().map(|l| fit(l)).collect::<Vec<_>>().join(", then "));
        let mut head = vec![name];
        head.extend(rows[0].labels.iter().map(String::as_str));
        head.push("Chosen policy");
        let t: Vec<Vec<String>> = rows.iter().map(|r| {
            let mut v = vec![fmt(r.x)];
            v.extend(r.q.iter().map(|q| opt(q.est)));
            v.push(r.best.map_or("none meets the target".into(), |b| fit(&r.labels[b])));
            v
        }).collect();
        table(&head, &t);
    } else {
        p = p.line(&xs, &rows.iter().map(|r| lg(r.q[0].lo)).collect::<Vec<_>>()).line(&xs, &rows.iter().map(|r| lg(r.q[0].hi)).collect::<Vec<_>>())
            .dots(&xs, &rows.iter().map(|r| lg(r.reference)).collect::<Vec<_>>());
        p.labels(name, if problem == "sum" { "log10 of P(S_n > b)" } else { "log10 of ψ(u)" }).show();
        println!("The estimate at each value, then the two ends of its 95 % interval, then the reference as dots.");
    }
}

/// A method card of the rare-event laboratory.
fn rare_card_html(m: &Value) -> String {
    let ex = |part: &str| rare_examples().iter().find(|p| p.id == s(&m[part]["preset"])).map_or(String::new(), |p| fit(&p.title));
    format!("<p><strong>{}.</strong> {}.</p>{}{}<h3>Assumptions</h3>{}<h3>Settings</h3>{}<h3>Where it works: {}</h3>{}<h3>Where it fails: {}</h3>{}<h3>Comparison with {}: {}</h3>{}",
        esc(&fit(s(&m["name"]))), esc(&fit(s(&m["family"]))), mathml(s(&m["estimator"]), true), para(s(&m["estimatorText"])), bullets(&texts(&m["assumptions"])), bullets(&texts(&m["settings"])),
        esc(&ex("suitable")), para(s(&m["suitable"]["text"])), esc(&ex("failure")), para(s(&m["failure"]["text"])),
        esc(&rare_name(s(&m["comparison"]["with"])).to_lowercase()), esc(&ex("comparison")), para(s(&m["comparison"]["text"])))
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
//| caption: The chain laboratory: Markov chains, sequential Monte Carlo, particle filters and quasi-Monte Carlo.
mod chains {
    //! The Markov chain, sequential and quasi-Monte Carlo laboratory of the Monte Carlo workbench (group 8), from
    //! chains.js. A laboratory record names one model: a target law (a density known up to a constant), a state-space
    //! model with its observations, or an integrand on the unit cube. `record_of` builds the record of a catalogue example
    //! of chains.json, `prepare` checks it with its settings (the limits and messages of chains.js) and computes its
    //! reference, and `block(lab, b)` computes independent run b of each method: one Markov chain (Metropolis–Hastings,
    //! Gibbs or Hamiltonian Monte Carlo), one sequential Monte Carlo sampler, one particle filter, or one randomisation of
    //! scrambled Sobol points with the plain independent estimate beside it. Each run reads its own streams, one for each
    //! role (start, moves, acceptance, resampling, scramble, plain uniforms), so the runs do not depend on their order.
    //! `summary` keeps three kinds of diagnostic apart: Markov-chain diagnostics, weight degeneracy and estimation error.
    //! Every function is pure and deterministic, and nothing reads a clock.
    use super::*;
    use serde_json::Value;
    use std::f64::consts::{LN_2, SQRT_2};
    use self::{Family::*, Method::*, Model::*};

    /// The limits of chains.js: independent runs, leapfrog steps, fixed temperatures, Metropolis moves after a tempering
    /// step, stored lags of each chain, trace and cloud points, traced lineages, the crowd of each step, tempering steps.
    pub const RUNS: [usize; 2] = [2, 32];
    pub const LEAP: usize = 200; pub const TEMPS: usize = 200; pub const MOVES: usize = 20; pub const LAGS: usize = 2000;
    pub const TRACE: usize = 400; pub const CLOUD: usize = 600; pub const LINEAGES: usize = 128; pub const CROWD: usize = 48; pub const STEPS: usize = 200;
    const L2PI: f64 = 1.8378770664093453;
    const NAN: f64 = f64::NAN;

    /// The family of a model: a target law, a state-space model or an integral.
    #[derive(Clone, Copy, PartialEq, Eq, Debug)]
    pub enum Family { Target, Filter, Integral }
    impl Family {
        /// The range of the size exponent: 2^size draws after the warm-up, particles or points.
        pub fn sizes(self) -> (u32, u32) { [(8, 16), (6, 14), (6, 18)][self as usize] }
        pub fn methods(self) -> &'static [Method] { match self { Target => &[Metropolis, Gibbs, Hmc, Smc], Filter => &[Particle], Integral => &[Rqmc, Independent] } }
    }

    /// A method of the laboratory.
    #[derive(Clone, Copy, PartialEq, Eq, Debug)]
    pub enum Method { Metropolis, Gibbs, Hmc, Smc, Particle, Rqmc, Independent }
    const METHODS: [(&str, &str); 7] = [("metropolis", "Metropolis–Hastings"), ("gibbs", "Gibbs sampler"), ("hmc", "Hamiltonian Monte Carlo"),
        ("smc", "Sequential Monte Carlo"), ("particle", "Particle filter"), ("rqmc", "Randomised quasi-Monte Carlo"), ("independent", "Independent sampling")];
    impl Method {
        pub fn id(self) -> &'static str { METHODS[self as usize].0 }
        pub fn name(self) -> &'static str { METHODS[self as usize].1 }
        pub fn parse(s: &str) -> Option<Method> { [Metropolis, Gibbs, Hmc, Smc, Particle, Rqmc, Independent].into_iter().find(|m| m.id() == s) }
    }

    /// A model of the code: five target laws, two state-space models and three integrands.
    #[derive(Clone, Copy, PartialEq, Eq, Debug)]
    pub enum Model { Normal2, Mixture, Funnel, Balance, Oring, Level, Sv, Peak, Sum, Asian }
    /// For each model: its id, family, parameters, the quantities that are functions of the state (or the outputs of an
    /// integrand), the other quantities (the evidence, the log likelihood) and the names of the coordinates.
    const MODELS: [(&str, Family, &[&str], &[&str], &[&str], [&str; 2]); 10] = [
        ("normal2", Target, &["rho"], &["mean_x1", "sum_gt_2", "product"], &[], ["x1", "x2"]),
        ("mixture", Target, &["b", "w"], &["upper", "mean_x1"], &[], ["x1", "x2"]),
        ("funnel", Target, &["s"], &["neck", "mean_v"], &[], ["v", "x"]),
        ("balance", Target, &["mu0", "tau0", "a0", "b0", "c"], &["bias_prob", "bias", "sigma"], &["log_z", "post_m1"], ["mu", "log_sigma"]),
        ("oring", Target, &["sa", "sb", "t0"], &["pred_t0", "p_t0", "slope_neg"], &[], ["alpha", "beta"]),
        ("level", Filter, &["d", "sx", "sy", "m0", "s0", "h"], &["level_T", "above"], &["loglik"], ["x", ""]),
        ("sv", Filter, &["mu", "phi", "s", "c"], &["vol_T", "above"], &["loglik"], ["x", ""]),
        ("peak", Integral, &["d", "a"], &["integral"], &[], ["", ""]),
        ("sum", Integral, &["d", "c"], &["prob"], &[], ["", ""]),
        ("asian", Integral, &["S0", "K", "r", "sigma", "T", "m"], &["price", "itm"], &[], ["", ""]),
    ];
    const ALL: [Model; 10] = [Normal2, Mixture, Funnel, Balance, Oring, Level, Sv, Peak, Sum, Asian];
    impl Model {
        pub fn id(self) -> &'static str { MODELS[self as usize].0 }
        pub fn family(self) -> Family { MODELS[self as usize].1 }
        /// The names of the two coordinates of a target law.
        pub fn coords(self) -> [&'static str; 2] { MODELS[self as usize].5 }
        pub fn parse(s: &str) -> Option<Model> { ALL.into_iter().find(|m| m.id() == s) }
        fn fs(self) -> &'static [&'static str] { MODELS[self as usize].3 }
    }

    /* ---------- records and settings ---------- */

    /// The data of a record: observations y (weighings, sensor readings or returns), or temperatures t with counts k of m.
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Data { pub y: Vec<f64>, pub t: Vec<f64>, pub k: Vec<f64>, pub m: f64 }

    /// A laboratory record: the model, its parameters, its data and the quantities to estimate.
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Record { pub example: String, pub model: String, pub params: Vec<(String, f64)>, pub data: Data, pub quantities: Vec<String> }

    /// The settings of a run as the page gives them: numbers as f64 and choices as text, so `prepare` checks them with
    /// the messages of chains.js.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Settings {
        pub seed: u64, pub method: String, pub compare: String, pub size: f64, pub runs: f64, pub step: f64, pub eps: f64, pub leap: f64, pub start: String,
        pub resample: String, pub ess: f64, pub schedule: String, pub temps: f64, pub moves: f64, pub scramble: String, pub path: String,
    }
    impl Default for Settings {
        /// The page's defaults (seed 2026, Metropolis–Hastings, size 12, 4 runs) and those of prepare() (no comparison).
        fn default() -> Self {
            Settings { seed: 2026, method: "metropolis".into(), compare: "none".into(), size: 12.0, runs: 4.0, step: 1.0, eps: 0.2, leap: 10.0, start: "dispersed".into(),
                resample: "systematic".into(), ess: 0.5, schedule: "adaptive".into(), temps: 10.0, moves: 5.0, scramble: "lms_shift".into(), path: "standard".into() }
        }
    }
    impl Settings {
        /// The settings that the page opens for a catalogue example: the defaults, the comparison "hmc", then the
        /// example's own c_* fields.
        pub fn of(ex: &Value) -> Settings { let mut s = Settings { compare: "hmc".into(), ..Default::default() }; s.apply(&ex["settings"]); s }
        /// Apply the c_* fields of a JSON object, such as the settings of a method card's example. c_params and c_plot
        /// are not settings of a run.
        pub fn apply(&mut self, v: &Value) {
            let txt: [(&str, &mut String); 7] = [("c_method", &mut self.method), ("c_compare", &mut self.compare), ("c_start", &mut self.start),
                ("c_resample", &mut self.resample), ("c_schedule", &mut self.schedule), ("c_scramble", &mut self.scramble), ("c_path", &mut self.path)];
            for (k, f) in txt { if let Some(t) = v[k].as_str() { *f = t.into() } }
            let num: [(&str, &mut f64); 8] = [("c_size", &mut self.size), ("c_runs", &mut self.runs), ("c_step", &mut self.step), ("c_eps", &mut self.eps),
                ("c_leap", &mut self.leap), ("c_ess", &mut self.ess), ("c_temps", &mut self.temps), ("c_moves", &mut self.moves)];
            for (k, f) in num { if let Some(x) = v[k].as_f64() { *f = x } }
        }
    }

    fn nums(v: &Value) -> Vec<f64> { v.as_array().map_or(vec![], |a| a.iter().map(|x| x.as_f64().unwrap_or(NAN)).collect()) }
    fn cut(s: &str, n: usize) -> String { s.chars().take(n).collect() }

    /// The reader's parameter text "name=value; name=value" as numbers, with an error for each part that is not one;
    /// each name must be one of `names`, the parameters of the example.
    pub fn parse_params(text: &str, names: &[&str]) -> (Vec<(String, f64)>, Vec<String>) {
        let (mut vals, mut errs) = (vec![], vec![]);
        let ident = |k: &str| k.starts_with(|c: char| c.is_ascii_alphabetic()) && k.chars().all(|c| c.is_ascii_alphanumeric() || c == '_');
        for part in text.split(';').map(str::trim).filter(|s| !s.is_empty()) {
            let Some((k, v)) = part.split_once('=').map(|(k, v)| (k.trim(), v.trim())).filter(|(k, v)| ident(k) && !v.is_empty() && !v.contains(char::is_whitespace)) else {
                errs.push(format!("\"{}\" is not name = value.", cut(part, 30)));
                continue;
            };
            if !names.contains(&k) { errs.push(format!("\"{k}\" is not a parameter of this example ({}).", names.join(", "))); continue }
            match v.parse::<f64>() { Ok(x) if x.is_finite() => vals.push((k.to_string(), x)), _ => errs.push(format!("The value of {k} is not a number.")) }
        }
        (vals, errs)
    }

    /// The Challenger table of datasets.json (Dalal, Fowlkes and Hoadley, JASA 84, 1989): the launch temperatures in °F of
    /// 23 flights and their field-joint O-rings with thermal distress, of 6. It stands in when no datasets are given.
    const CHALLENGER: [[f64; 23]; 2] = [[66., 70., 69., 68., 67., 72., 73., 70., 57., 63., 70., 78., 67., 53., 67., 75., 70., 81., 76., 79., 75., 76., 58.],
        [0., 1., 0., 0., 0., 0., 0., 0., 1., 1., 1., 0., 0., 2., 0., 0., 0., 0., 0., 0., 2., 0., 1.]];

    /// The record of a catalogue example (an entry of "examples" in chains.json) with the reader's parameter text, such as
    /// "rho=0.99; b=3", and the datasets (the array of datasets.json; Null uses the built-in Challenger table). The data
    /// are inline, made again by their stated generator, or a real dataset.
    pub fn record_of(ex: &Value, text: &str, datasets: &Value) -> Result<Record, String> {
        let ps: Vec<(&str, f64)> = ex["params"].as_array().into_iter().flatten().filter_map(|p| Some((p["name"].as_str()?, p["value"].as_f64().unwrap_or(NAN)))).collect();
        let names: Vec<&str> = ps.iter().map(|p| p.0).collect();
        let (vals, errs) = parse_params(text, &names);
        if !errs.is_empty() { return Err(errs.join(" ")) }
        let params = ps.iter().map(|&(n, v)| (n.to_string(), vals.iter().rev().find(|x| x.0 == n).map_or(v, |x| x.1))).collect();
        let d = &ex["data"];
        let data = if let Some(id) = d["dataset"].as_str() {
            match datasets.as_array().into_iter().flatten().find(|x| x["id"] == id) {
                Some(x) => Data { t: nums(&x["values"]), k: nums(&x["counts"]), m: x["atRisk"].as_f64().unwrap_or(NAN), y: vec![] },
                None if id == "challenger-orings" => Data { t: CHALLENGER[0].to_vec(), k: CHALLENGER[1].to_vec(), m: 6.0, y: vec![] },
                None => return Err(format!("The dataset {id} is missing.")),
            }
        } else if d["y"].is_array() { Data { y: nums(&d["y"]), ..Default::default() } }
        else if d["generator"].is_object() { Data { y: synthetic(&d["generator"])?, ..Default::default() } }
        else { Data::default() };
        let s = |k: &str| ex[k].as_str().unwrap_or("").to_string();
        let quantities = ex["quantities"].as_array().into_iter().flatten().filter_map(|q| q["id"].as_str().map(String::from)).collect();
        Ok(Record { example: s("id"), model: s("model"), params, data, quantities })
    }

    /// The page's Philox4x32-10 stream (rng.js) with its Box–Muller normal. It serves only `synthetic`, so that the
    /// catalogue's synthetic data, and the reference values and decisions that the catalogue states for them, are the
    /// page's to the last digit. The runs use `Src` streams.
    struct Philox { key: [u32; 2], ctr: u32, buf: [u32; 4], pos: usize }
    impl Philox {
        fn new(seed: u32, name: &str) -> Philox { Philox { key: [seed, name.encode_utf16().fold(0x811c9dc5u32, |h, c| (h ^ c as u32).wrapping_mul(0x01000193))], ctr: 0, buf: [0; 4], pos: 4 } }
        fn u32(&mut self) -> u32 {
            if self.pos == 4 {
                let (mut c, mut k) = ([self.ctr, 0, 0, 0], self.key);
                for r in 0..10 {
                    if r > 0 { k = [k[0].wrapping_add(0x9e3779b9), k[1].wrapping_add(0xbb67ae85)] }
                    let (p0, p1) = (0xd2511f53u64 * c[0] as u64, 0xcd9e8d57u64 * c[2] as u64);
                    c = [(p1 >> 32) as u32 ^ c[1] ^ k[0], p1 as u32, (p0 >> 32) as u32 ^ c[3] ^ k[1], p0 as u32];
                }
                (self.buf, self.ctr, self.pos) = (c, self.ctr.wrapping_add(1), 0);
            }
            self.pos += 1;
            self.buf[self.pos - 1]
        }
        fn uniform(&mut self) -> f64 { let (a, b) = (self.u32() >> 5, self.u32() >> 6); (a as f64 * 67108864.0 + b as f64 + 0.5) / 9007199254740992.0 }
        fn normal(&mut self) -> f64 { let (u, w) = (self.uniform(), self.uniform()); (-2.0 * u.ln()).sqrt() * (2.0 * PI * w).cos() }
    }

    /// Synthetic data from a stated generator of chains.json: "normal" gives n values of N(mean, sd²); "level" and "sv"
    /// give the observations of those state-space models. Each value is rounded to the stated number of decimals.
    fn synthetic(g: &Value) -> Result<Vec<f64>, String> {
        let kind = g["kind"].as_str().unwrap_or("");
        let mut r = Philox::new(g["seed"].as_f64().unwrap_or(0.0) as u32, &format!("lab/data/{kind}"));
        let (n, dec) = (g["n"].as_u64().unwrap_or(0), g["decimals"].as_u64().unwrap_or(0) as usize);
        let p = |k: &str| g["params"][k].as_f64().unwrap_or(NAN);
        let round = |v: f64| format!("{v:.dec$}").parse().unwrap_or(v);
        let mut x = match kind {
            "normal" => 0.0,
            "level" => p("m0") + p("s0") * r.normal(),
            "sv" => p("mu") + (p("s") / (1.0 - p("phi") * p("phi")).sqrt()) * r.normal(),
            _ => return Err(format!("The generator \"{}\" is not known.", cut(kind, 30))),
        };
        Ok((0..n).map(|_| match kind {
            "normal" => round(p("mean") + p("sd") * r.normal()),
            "level" => { x = x + p("d") + p("sx") * r.normal(); round(x + p("sy") * r.normal()) }
            _ => { x = p("mu") + p("phi") * (x - p("mu")) + p("s") * r.normal(); round((x / 2.0).exp() * r.normal()) }
        }).collect())
    }

    /* ---------- numerical helpers ---------- */

    fn sq(x: f64) -> f64 { x * x }
    fn ind(c: bool) -> f64 { if c { 1.0 } else { 0.0 } }
    fn mean(x: &[f64]) -> f64 { x.iter().sum::<f64>() / x.len() as f64 }
    fn var(x: &[f64]) -> f64 { let m = mean(x); if x.len() > 1 { x.iter().map(|v| sq(v - m)).sum::<f64>() / (x.len() - 1) as f64 } else { 0.0 } }
    fn logistic(x: f64) -> f64 { if x >= 0.0 { 1.0 / (1.0 + (-x).exp()) } else { x.exp() / (1.0 + x.exp()) } }
    /// log(1 + eˣ) without overflow.
    fn softplus(x: f64) -> f64 { if x > 0.0 { x + (-x).exp().ln_1p() } else { x.exp().ln_1p() } }
    /// The effective sample size of normalised weights: 1 / Σ Wᵢ².
    fn wess(w: &[f64]) -> f64 { 1.0 / w.iter().map(|x| x * x).sum::<f64>() }
    /// Normalise log weights to weights that sum to 1; returns log Σ exp(lw).
    fn normalise(lw: &[f64], w: &mut [f64]) -> f64 {
        let m = lw.iter().fold(-INF, |a, &b| a.max(b));
        if m == -INF { w.fill(NAN); return -INF }
        let l = m + lw.iter().map(|x| (x - m).exp()).sum::<f64>().ln();
        for (w, x) in w.iter_mut().zip(lw) { *w = (x - l).exp() }
        l
    }

    /// The standard normal quantile by Wichura's AS 241 (PPND16, Applied Statistics 37, 1988), relative error near 1e-16.
    pub fn qn(p: f64) -> f64 {
        const A: [f64; 8] = [3.3871328727963666080e0, 1.3314166789178437745e2, 1.9715909503065514427e3, 1.3731693765509461125e4, 4.5921953931549871457e4, 6.7265770927008700853e4, 3.3430575583588128105e4, 2.5090809287301226727e3];
        const B: [f64; 8] = [1.0, 4.2313330701600911252e1, 6.8718700749205790830e2, 5.3941960214247511077e3, 2.1213794301586595867e4, 3.9307895800092710610e4, 2.8729085735721942674e4, 5.2264952788528545610e3];
        const C: [f64; 8] = [1.42343711074968357734e0, 4.63033784615654529590e0, 5.76949722146069140550e0, 3.64784832476320460504e0, 1.27045825245236838258e0, 2.41780725177450611770e-1, 2.27238449892691845833e-2, 7.74545014278341407640e-4];
        const D: [f64; 8] = [1.0, 2.05319162663775882187e0, 1.67638483018380384940e0, 6.89767334985100004550e-1, 1.48103976427480074590e-1, 1.51986665636164571966e-2, 5.47593808499534494600e-4, 1.05075007164441684324e-9];
        const E: [f64; 8] = [6.65790464350110377720e0, 5.46378491116411436990e0, 1.78482653991729133580e0, 2.96560571828504891230e-1, 2.65321895265761230930e-2, 1.24266094738807843860e-3, 2.71155556874348757815e-5, 2.01033439929228813265e-7];
        const F: [f64; 8] = [1.0, 5.99832206555887937690e-1, 1.36929880922735805310e-1, 1.48753612908506148525e-2, 7.86869131145613259100e-4, 1.84631831751005468180e-5, 1.42151175831644588870e-7, 2.04426310338993978564e-15];
        let poly = |c: &[f64; 8], x: f64| c.iter().rev().fold(0.0, |s, k| s * x + k);
        let q = p - 0.5;
        if q.abs() <= 0.425 { let r = 0.180625 - q * q; return q * poly(&A, r) / poly(&B, r) }
        let r = (-(if q < 0.0 { p } else { 1.0 - p }).ln()).sqrt();
        let x = if r <= 5.0 { poly(&C, r - 1.6) / poly(&D, r - 1.6) } else { poly(&E, r - 5.0) / poly(&F, r - 5.0) };
        if q < 0.0 { -x } else { x }
    }
    /// A standard normal draw by inversion of one uniform of the stream.
    fn nz(r: &mut Src) -> f64 { qn(r.u()) }
    /// A uniform 32-bit integer: the top 32 of the 53 bits of a uniform.
    fn u32r(r: &mut Src) -> u32 { (r.u() * 4294967296.0) as u32 }
    /// A gamma(a, 1) draw by Marsaglia and Tsang's method (ACM TOMS 26, 2000).
    fn gd(r: &mut Src, a: f64) -> f64 {
        if a < 1.0 { return gd(r, a + 1.0) * r.u().powf(1.0 / a) }
        let d = a - 1.0 / 3.0;
        loop {
            let z = nz(r);
            let v = 1.0 + z / (9.0 * d).sqrt();
            if v <= 0.0 { continue }
            let (v, u) = (v * v * v, r.u());
            if u < 1.0 - 0.0331 * z.powi(4) || u.ln() < 0.5 * z * z + d * (1.0 - v + v.ln()) { return d * v }
        }
    }

    /// The Student t quantile for p > 1/2 with ν degrees of freedom, from the inverse incomplete beta function.
    pub fn t_quantile(p: f64, nu: f64) -> f64 { let x = invert(&|x| ibeta(x, nu / 2.0, 0.5), 2.0 * (1.0 - p), 0.0, 1.0, 0.5); (nu * (1.0 - x) / x).sqrt() }

    /// The Irwin–Hall law: P(U₁ + … + U_d ≤ c) for d independent uniforms.
    pub fn irwin_hall(c: f64, d: f64) -> f64 {
        if c <= 0.0 { return 0.0 }
        if c >= d { return 1.0 }
        (0..=c.floor() as i32).map(|k| (-1f64).powi(k) * (lchoose(d, k as f64) + d * (c - k as f64).ln()).exp()).sum::<f64>() / lgam(d + 1.0).exp()
    }

    fn fft(re: &mut [f64], im: &mut [f64], sign: f64) {
        let n = re.len();
        let mut j = 0;
        for i in 1..n { let mut bit = n >> 1; while j & bit != 0 { j ^= bit; bit >>= 1 } j ^= bit; if i < j { re.swap(i, j); im.swap(i, j) } }
        let mut len = 2;
        while len <= n {
            let a = sign * 2.0 * PI / len as f64;
            let (wr, wi) = (a.cos(), a.sin());
            for i in (0..n).step_by(len) {
                let (mut cr, mut ci) = (1.0, 0.0);
                for k in 0..len / 2 {
                    let (a, b) = (i + k, i + k + len / 2);
                    let (xr, xi) = (re[b] * cr - im[b] * ci, re[b] * ci + im[b] * cr);
                    (re[b], im[b]) = (re[a] - xr, im[a] - xi);
                    re[a] += xr;
                    im[a] += xi;
                    (cr, ci) = (cr * wr - ci * wi, cr * wi + ci * wr);
                }
            }
            len <<= 1;
        }
    }

    /// The autocorrelation of a series at lags 0 to `lag`, from the biased autocovariance (divisor n) by FFT, as Geyer
    /// (1992) and the Stan reference manual define it.
    pub fn autocorrelation(xs: &[f64], lag: usize) -> Vec<f64> {
        let (n, m) = (xs.len(), mean(xs));
        let size = (2 * n).next_power_of_two();
        let (mut re, mut im) = (vec![0.0; size], vec![0.0; size]);
        for i in 0..n { re[i] = xs[i] - m }
        fft(&mut re, &mut im, -1.0);
        for i in 0..size { (re[i], im[i]) = (re[i] * re[i] + im[i] * im[i], 0.0) }
        fft(&mut re, &mut im, 1.0);
        (0..=lag.min(n.max(1) - 1)).map(|k| if re[0] > 0.0 { re[k] / re[0] } else { ind(k == 0) }).collect()
    }

    /// The integrated autocorrelation time τ = 1 + 2 Σ ρₖ by Geyer's initial monotone sequence, and whether the sum ended
    /// before the lags ran out (if not, τ is a lower bound).
    pub fn geyer(rho: &[f64]) -> (f64, bool) {
        let (mut sum, mut prev, mut t, mut ended) = (0.0, INF, 0, false);
        while 2 * t + 1 < rho.len() {
            let p = rho[2 * t] + rho[2 * t + 1];
            if !(p > 0.0) { ended = true; break }
            (sum, prev, t) = (sum + p.min(prev), p.min(prev), t + 1);
        }
        ((2.0 * sum - 1.0).max(1e-9), ended)
    }

    /* ---------- models ---------- */

    /// A model with its parameters (in the order of MODELS), its data and the constant part of its log density.
    #[derive(Clone, Debug)]
    struct Mdl { m: Model, p: [f64; 6], k0: f64, d: Data }

    impl Mdl {
        fn new(rec: &Record) -> Result<Mdl, String> {
            let m = Model::parse(&rec.model).ok_or_else(|| format!("\"{}\" is not a model of the laboratory.", cut(&rec.model, 30)))?;
            let mut p = [NAN; 6];
            for (j, n) in MODELS[m as usize].2.iter().enumerate() { p[j] = rec.params.iter().rev().find(|x| x.0 == *n).map_or(NAN, |x| x.1) }
            let d = rec.data.clone();
            let k0 = match m {
                Balance => -0.5 * d.y.len() as f64 * L2PI - 0.5 * (2.0 * PI * p[1] * p[1]).ln() + p[2] * p[3].ln() - lgam(p[2]) + LN_2,
                Oring => d.k.iter().map(|&k| lchoose(d.m, k)).sum::<f64>() - (2.0 * PI * p[0] * p[1]).ln(),
                _ => 0.0,
            };
            Ok(Mdl { m, p, k0, d })
        }
        fn check(&self) -> Vec<String> {
            let p = &self.p;
            let c = |ok: bool, m: &str| (!ok).then(|| m.to_string());
            let dim = c(p[0].fract() == 0.0 && (1.0..=21.0).contains(&p[0]), "The dimension d must be an integer from 1 to 21.");
            let v = match self.m {
                Normal2 => vec![c(p[0].abs() < 1.0, "The correlation rho must lie strictly between −1 and 1.")],
                Mixture => vec![c(p[1] > 0.0 && p[1] < 1.0, "The weight w must lie strictly between 0 and 1."), c((0.0..=8.0).contains(&p[0]), "The mode distance b must lie in [0, 8].")],
                Funnel => vec![c(p[0] > 0.0 && p[0] <= 5.0, "The scale s of v must lie in (0, 5].")],
                Balance => vec![c(p[1] > 0.0, "The prior standard deviation tau0 must be positive."), c(p[2] > 0.0 && p[3] > 0.0, "The prior parameters a0 and b0 must be positive.")],
                Oring => vec![c(p[0] > 0.0 && p[1] > 0.0, "The prior standard deviations sa and sb must be positive."), c((0.0..=100.0).contains(&p[2]), "The temperature t0 must lie in [0, 100] °F.")],
                Level => vec![c(p[1] > 0.0 && p[2] > 0.0 && p[4] > 0.0, "The standard deviations sx, sy and s0 must be positive.")],
                Sv => vec![c(p[1].abs() < 1.0, "The persistence phi must lie strictly between −1 and 1."), c(p[2] > 0.0, "The standard deviation s must be positive."),
                    c(p[3] > 0.0, "The threshold c must be positive.")],
                Peak => vec![dim, c(p[1] > 0.0, "The peak width a must be positive.")],
                Sum => vec![dim, c(p[1] >= 0.0 && p[1] <= p[0], "The threshold c must lie in [0, d].")],
                Asian => vec![c([2.0, 4.0, 8.0, 16.0].contains(&p[5]), "The number of dates m must be 2, 4, 8 or 16, so that the Brownian bridge halves each interval."),
                    c(p[0] > 0.0 && p[1] > 0.0 && p[3] > 0.0 && p[4] > 0.0, "S0, K, sigma and T must be positive.")],
            };
            v.into_iter().flatten().collect()
        }
        /// The log weights of the two modes of the mixture at (a, b).
        fn mix(&self, a: f64, b: f64) -> (f64, f64) {
            let (m, w) = (self.p[0], self.p[1]);
            ((1.0 - w).ln() - (sq(a + m) + sq(b + m)) / 2.0, w.ln() - (sq(a - m) + sq(b - m)) / 2.0)
        }
        /// The unnormalised log density of a target law (with all constants for the balance and the O-rings).
        fn logp(&self, x: [f64; 2]) -> f64 {
            let (p, [a, b]) = (&self.p, x);
            match self.m {
                Normal2 => -(a * a - 2.0 * p[0] * a * b + b * b) / (2.0 * (1.0 - p[0] * p[0])),
                Mixture => { let (l1, l2) = self.mix(a, b); let m = l1.max(l2); m + ((l1 - m).exp() + (l2 - m).exp()).ln() }
                Funnel => -a * a / (2.0 * p[0] * p[0]) - b * b * (-a).exp() / 2.0 - a / 2.0,
                Balance => {
                    let (n, e2) = (self.d.y.len() as f64, (-2.0 * b).exp());
                    let ss: f64 = self.d.y.iter().map(|y| sq(y - a)).sum();
                    self.k0 - n * b - ss * e2 / 2.0 - sq(a - p[0]) / (2.0 * p[1] * p[1]) - 2.0 * (p[2] + 1.0) * b - p[3] * e2 + 2.0 * b
                }
                _ => {
                    let mut s = self.k0 - a * a / (2.0 * p[0] * p[0]) - b * b / (2.0 * p[1] * p[1]);
                    for (t, k) in self.d.t.iter().zip(&self.d.k) { let e = a + b * (t - 70.0) / 10.0; s -= k * softplus(-e) + (self.d.m - k) * softplus(e) }
                    s
                }
            }
        }
        fn grad(&self, x: [f64; 2]) -> [f64; 2] {
            let (p, [a, b]) = (&self.p, x);
            match self.m {
                Normal2 => { let q = 1.0 - p[0] * p[0]; [-(a - p[0] * b) / q, -(b - p[0] * a) / q] }
                Mixture => { let (l1, l2) = self.mix(a, b); let r2 = 1.0 / (1.0 + (l1 - l2).exp()); let r1 = 1.0 - r2; [r1 * (-p[0] - a) + r2 * (p[0] - a), r1 * (-p[0] - b) + r2 * (p[0] - b)] }
                Funnel => { let e = (-a).exp(); [-a / (p[0] * p[0]) + b * b * e / 2.0 - 0.5, -b * e] }
                Balance => {
                    let (n, e2) = (self.d.y.len() as f64, (-2.0 * b).exp());
                    let (sy, ss) = self.d.y.iter().fold((0.0, 0.0), |(s, q), y| (s + y - a, q + sq(y - a)));
                    [sy * e2 - (a - p[0]) / (p[1] * p[1]), -n + ss * e2 - 2.0 * p[2] + 2.0 * p[3] * e2]
                }
                _ => {
                    let mut g = [-a / (p[0] * p[0]), -b / (p[1] * p[1])];
                    for (t, k) in self.d.t.iter().zip(&self.d.k) { let z = (t - 70.0) / 10.0; let r = k - self.d.m * logistic(a + b * z); g[0] += r; g[1] += r * z }
                    g
                }
            }
        }
        /// One Gibbs sweep, where the full conditional laws are standard laws.
        fn gibbs(&self, x: &mut [f64; 2], r: &mut Src) {
            let p = &self.p;
            match self.m {
                Normal2 => { let s = (1.0 - p[0] * p[0]).sqrt(); x[0] = p[0] * x[1] + s * nz(r); x[1] = p[0] * x[0] + s * nz(r) }
                // x₁ given x₂ is a mixture of N(−b, 1) and N(b, 1) with weights from the density of x₂ in each mode.
                Mixture => for (i, j) in [(0, 1), (1, 0)] {
                    let (l1, l2) = ((1.0 - p[1]).ln() - sq(x[j] + p[0]) / 2.0, p[1].ln() - sq(x[j] - p[0]) / 2.0);
                    let m = if r.u() < 1.0 / (1.0 + (l1 - l2).exp()) { p[0] } else { -p[0] };
                    x[i] = m + nz(r);
                },
                // The balance: μ given σ² is normal, σ² given μ is inverse gamma. The chain moves on (μ, log σ).
                _ => {
                    let (y, n, t2, s2) = (&self.d.y, self.d.y.len() as f64, p[1] * p[1], (2.0 * x[1]).exp());
                    let v = 1.0 / (1.0 / t2 + n / s2);
                    x[0] = v * (p[0] / t2 + y.iter().sum::<f64>() / s2) + v.sqrt() * nz(r);
                    let ss: f64 = y.iter().map(|v| sq(v - x[0])).sum();
                    x[1] = 0.5 * ((p[3] + ss / 2.0) / gd(r, p[2] + n / 2.0)).ln();
                }
            }
        }
        /// The reference law q of the sequential sampler and of the dispersed starts: its means and standard deviations.
        fn q(&self) -> ([f64; 2], [f64; 2]) {
            let p = &self.p;
            match self.m { Normal2 => ([0.0; 2], [3.0; 2]), Mixture => ([0.0; 2], [p[0] + 2.0; 2]), Funnel => ([0.0; 2], [p[0], 10.0]), Balance => ([p[0], 0.0], [2.0 * p[1], 1.0]), _ => ([0.0; 2], [p[0], p[1]]) }
        }
        fn point(&self) -> [f64; 2] { match self.m { Normal2 => [2.5, -2.5], Mixture => [-self.p[0]; 2], Balance => [self.p[0], 0.0], _ => [0.0; 2] } }
        fn se(&self) -> f64 { (var(&self.d.y).sqrt() / (self.d.y.len() as f64).sqrt()).max(0.05) }
        /// The scale of each coordinate: the steps of the random walk and the mass matrix of HMC are in its units.
        fn scale(&self) -> [f64; 2] { match self.m { Balance => [self.se(), 0.25], Oring => [0.4, 0.45], _ => [1.0; 2] } }
        /// The function of the state whose expectation estimates quantity i (for a filter, the state is x[0]).
        fn f(&self, i: usize, x: [f64; 2]) -> f64 {
            let (p, [a, b]) = (&self.p, x);
            match (self.m, i) {
                (Normal2, 0) | (Mixture, 1) | (Funnel, 1) | (Level, 0) => a,
                (Normal2, 1) => ind(a + b > 2.0),
                (Normal2, _) => a * b,
                (Mixture, _) => ind(a + b > 0.0),
                (Funnel, _) => ind(a < -3.0),
                (Balance, 0) => ind(a - p[0] > p[4]),
                (Balance, 1) => a - p[0],
                (Balance, _) => b.exp(),
                (Level, _) => ind(a > p[5]),
                (Sv, 0) => (a / 2.0).exp(),
                (Sv, _) => ind((a / 2.0).exp() > p[3]),
                (_, 2) => ind(b < 0.0),
                (_, i) => { let pt = logistic(a + b * (p[2] - 70.0) / 10.0); if i == 0 { 1.0 - (1.0 - pt).powf(self.d.m) } else { pt } }
            }
        }
        /// The state-space models: x₀ from a normal value z, one transition with z, and the log density of y given x.
        fn init(&self, z: f64) -> f64 { let p = &self.p; if self.m == Level { p[3] + p[4] * z } else { p[0] + (p[2] / (1.0 - p[1] * p[1]).sqrt()) * z } }
        fn step(&self, x: f64, z: f64) -> f64 { let p = &self.p; if self.m == Level { x + p[0] + p[1] * z } else { p[0] + p[1] * (x - p[0]) + p[2] * z } }
        fn logg(&self, y: f64, x: f64) -> f64 { let s = self.p[2]; if self.m == Level { -0.5 * L2PI - s.ln() - sq(y - x) / (2.0 * s * s) } else { -0.5 * L2PI - x / 2.0 - y * y * (-x).exp() / 2.0 } }
        /// The integrands on [0, 1)^d: the dimension and the outputs at u (w is a workspace of d + 1 values).
        fn dim(&self) -> usize { (if self.m == Asian { self.p[5] } else { self.p[0] }) as usize }
        fn eval(&self, u: &[f64], out: &mut [f64; 2], w: &mut [f64], bridge: bool) {
            let p = &self.p;
            match self.m {
                Peak => { let ia = 1.0 / (p[1] * p[1]); out[0] = u.iter().fold(1.0, |v, x| v / (ia + sq(x - 0.5))) }
                Sum => out[0] = ind(u.iter().sum::<f64>() > p[1]),
                _ => {
                    let (m, t) = (u.len(), p[4]);
                    let dt = t / m as f64;
                    w[0] = 0.0;
                    if bridge {
                        // The Brownian bridge: the end point from u₀, then the mid-point of each interval.
                        w[m] = t.sqrt() * qn(u[0]);
                        let (mut k, mut span) = (1, m);
                        while span > 1 {
                            for l in (0..m).step_by(span) { w[l + span / 2] = (w[l] + w[l + span]) / 2.0 + (span as f64 * dt / 4.0).sqrt() * qn(u[k]); k += 1 }
                            span /= 2;
                        }
                    } else { for i in 1..=m { w[i] = w[i - 1] + dt.sqrt() * qn(u[i - 1]) } }
                    let lg: f64 = (1..=m).map(|i| (p[2] - p[3] * p[3] / 2.0) * i as f64 * dt + p[3] * w[i]).sum();
                    let g = p[0] * (lg / m as f64).exp();
                    *out = [(-p[2] * t).exp() * (g - p[1]).max(0.0), ind(g > p[1])];
                }
            }
        }
        fn vals(&self, v: &[f64]) -> Vec<(String, f64)> { let s = &MODELS[self.m as usize]; s.3.iter().chain(s.4).zip(v).map(|(k, x)| (k.to_string(), *x)).collect() }
        fn reference(&self) -> Reference {
            let p = &self.p;
            let ex = |how: &'static str, v: &[f64], lz: Option<f64>| Reference { tag: "exact", how, values: self.vals(v), log_z: lz, ..Default::default() };
            match self.m {
                Normal2 => ex("closed form: x₁ + x₂ is normal with variance 2 + 2ρ", &[0.0, 1.0 - pnorm(2.0 / (2.0 + 2.0 * p[0]).sqrt()), p[0]], Some((2.0 * PI * (1.0 - p[0] * p[0]).sqrt()).ln())),
                Mixture => ex("closed form: x₁ + x₂ is normal with mean ±2b and variance 2 in each mode",
                    &[(1.0 - p[1]) * pnorm(-p[0] * SQRT_2) + p[1] * pnorm(p[0] * SQRT_2), p[0] * (2.0 * p[1] - 1.0)], Some(L2PI)),
                Funnel => ex("closed form: v is N(0, s²)", &[pnorm(-3.0 / p[0]), 0.0], Some((2.0 * PI * p[0]).ln())),
                Balance => self.balance_ref(),
                Oring => self.oring_ref(),
                Level => self.kalman(),
                Sv => self.grid(),
                Peak => ex("closed form: a product of arctangent integrals", &[(2.0 * p[1] * (p[1] / 2.0).atan()).powf(p[0])], None),
                Sum => ex("the Irwin–Hall law of a sum of d uniforms", &[1.0 - irwin_hall(p[1], p[0])], None),
                Asian => {
                    let (m, t) = (p[5], p[4]);
                    let mu = p[0].ln() + (p[2] - p[3] * p[3] / 2.0) * (t * (m + 1.0)) / (2.0 * m);
                    let sg = p[3] * (t * (m + 1.0) * (2.0 * m + 1.0) / (6.0 * m * m)).sqrt();
                    let d2 = (mu - p[1].ln()) / sg;
                    ex("closed form: the log of the geometric average is normal", &[(-p[2] * t).exp() * ((mu + sg * sg / 2.0).exp() * pnorm(d2 + sg) - p[1] * pnorm(d2)), pnorm(d2)], None)
                }
            }
        }
        /// The balance by quadrature in log σ: for each σ the law of μ is normal, so its integral and P(μ − μ₀ > c) are
        /// closed forms. The trapezoid rule on 4,001 points over the whole mass of log σ; the evidence of model 0 (μ = μ₀)
        /// in closed form.
        fn balance_ref(&self) -> Reference {
            let (p, y) = (&self.p, &self.d.y);
            let (n, yb, t2) = (y.len() as f64, mean(y), p[1] * p[1]);
            let ssw: f64 = y.iter().map(|v| sq(v - yb)).sum();
            let at = |s: f64| {
                let s2 = (2.0 * s).exp();
                let v = 1.0 / (1.0 / t2 + n / s2);
                let l = -0.5 * n * L2PI - n * s - 0.5 * (2.0 * PI * t2).ln() + 0.5 * (2.0 * PI * v).ln() - sq(yb - p[0]) / (2.0 * (s2 / n + t2)) - ssw / (2.0 * s2)
                    + p[2] * p[3].ln() - lgam(p[2]) - 2.0 * (p[2] + 1.0) * s - p[3] / s2 + LN_2 + 2.0 * s;
                (l, v * (p[0] / t2 + n * yb / s2), v)
            };
            let (mut lo, mut hi) = (-12.0, 12.0);
            for _ in 0..200 { let (a, b) = (lo + (hi - lo) / 3.0, hi - (hi - lo) / 3.0); if at(a).0 < at(b).0 { lo = a } else { hi = b } }
            let mode = (lo + hi) / 2.0;
            let (top, mut l, mut r) = (at(mode).0, mode, mode);
            while at(l).0 - top > -60.0 && l > mode - 30.0 { l -= 0.05 }
            while at(r).0 - top > -60.0 && r < mode + 30.0 { r += 0.05 }
            let h = (r - l) / 4000.0;
            let mut acc = [0.0; 4];
            for i in 0..4001 {
                let s = l + i as f64 * h;
                let (lv, m, v) = at(s);
                let w = if i == 0 || i == 4000 { 0.5 } else { 1.0 } * (lv - top).exp();
                for (a, x) in acc.iter_mut().zip([1.0, 1.0 - pnorm((p[0] + p[4] - m) / v.sqrt()), m - p[0], s.exp()]) { *a += w * x }
            }
            let lz = top + (acc[0] * h).ln();
            let ss0: f64 = y.iter().map(|v| sq(v - p[0])).sum();
            let lz0 = p[2] * p[3].ln() + lgam(p[2] + n / 2.0) - lgam(p[2]) - 0.5 * n * L2PI - (p[2] + n / 2.0) * (p[3] + ss0 / 2.0).ln();
            Reference { tag: "numerical", how: "quadrature in log σ (trapezoid rule, 4,001 points); μ given σ in closed form; the evidence of model 0 in closed form",
                values: self.vals(&[acc[1] / acc[0], acc[2] / acc[0], acc[3] / acc[0], lz, 1.0 / (1.0 + (lz0 - lz).exp())]), log_z: Some(lz), log_z0: Some(lz0), ..Default::default() }
        }
        /// The O-rings by quadrature on 241 × 241 points over the posterior mode (Newton's method) plus or minus 9
        /// standard deviations of the normal approximation at the mode (trapezoid rule).
        fn oring_ref(&self) -> Reference {
            let (p, d) = (&self.p, &self.d);
            let (mut a, mut b, mut h) = (0.0, 0.0, [0.0; 3]);
            for _ in 0..100 {
                let mut g = [-a / (p[0] * p[0]), -b / (p[1] * p[1])];
                h = [-1.0 / (p[0] * p[0]), -1.0 / (p[1] * p[1]), 0.0];
                for (t, k) in d.t.iter().zip(&d.k) {
                    let (z, pr) = ((t - 70.0) / 10.0, logistic(a + b * (t - 70.0) / 10.0));
                    let (r, w) = (k - d.m * pr, d.m * pr * (1.0 - pr));
                    (g[0], g[1], h[0], h[1], h[2]) = (g[0] + r, g[1] + r * z, h[0] - w, h[1] - w * z * z, h[2] - w * z);
                }
                let det = h[0] * h[1] - h[2] * h[2];
                let (da, db) = ((h[1] * g[0] - h[2] * g[1]) / det, (h[0] * g[1] - h[2] * g[0]) / det);
                (a, b) = (a - da, b - db);
                if da.abs() + db.abs() < 1e-13 { break }
            }
            let det = h[0] * h[1] - h[2] * h[2];
            let (sa, sb, top) = ((-h[1] / det).sqrt(), (-h[0] / det).sqrt(), self.logp([a, b]));
            let (ha, hb, end) = (18.0 * sa / 240.0, 18.0 * sb / 240.0, |i: usize| if i == 0 || i == 240 { 0.5 } else { 1.0 });
            let mut acc = [0.0; 4];
            for i in 0..241 {
                let x0 = a - 9.0 * sa + i as f64 * ha;
                for j in 0..241 {
                    let x1 = b - 9.0 * sb + j as f64 * hb;
                    let (w, pt) = (end(i) * end(j) * (self.logp([x0, x1]) - top).exp(), logistic(x0 + x1 * (p[2] - 70.0) / 10.0));
                    // The grid line β = 0 counts one half on each side.
                    let neg = if x1 < -1e-12 { 1.0 } else if x1 > 1e-12 { 0.0 } else { 0.5 };
                    for (s, x) in acc.iter_mut().zip([1.0, 1.0 - (1.0 - pt).powf(d.m), pt, neg]) { *s += w * x }
                }
            }
            Reference { tag: "numerical", how: "quadrature on 241 × 241 points over the mode ± 9 standard deviations (trapezoid rule)", values: self.vals(&[acc[1] / acc[0], acc[2] / acc[0], acc[3] / acc[0]]),
                log_z: Some(top + (acc[0] * ha * hb).ln()), mode: Some([a, b]), sd: Some([sa, sb]), ..Default::default() }
        }
        /// The Kalman filter of the level model: exact filter means and standard deviations and the exact log likelihood.
        fn kalman(&self) -> Reference {
            let p = &self.p;
            let (mut m, mut v, mut ll, mut ms, mut ss) = (p[3], p[4] * p[4], 0.0, vec![], vec![]);
            for y in &self.d.y {
                let (mp, vp) = (m + p[0], v + p[1] * p[1]);
                let s = vp + p[2] * p[2];
                ll += -0.5 * (2.0 * PI * s).ln() - sq(y - mp) / (2.0 * s);
                (m, v) = (mp + vp / s * (y - mp), (1.0 - vp / s) * vp);
                ms.push(m);
                ss.push(v.sqrt());
            }
            Reference { tag: "exact", how: "the Kalman filter, exact for a linear model with normal noise", values: self.vals(&[m, 1.0 - pnorm((p[5] - m) / v.sqrt()), ll]), log_z: Some(ll), means: ms, sds: ss, ..Default::default() }
        }
        /// A point-mass filter of the volatility model on 601 grid points over the stationary mean ± 10 stationary
        /// standard deviations; the prediction step is a sum with the normal transition density.
        fn grid(&self) -> Reference {
            let p = &self.p;
            let (sd, g) = (p[2] / (1.0 - p[1] * p[1]).sqrt(), 601);
            let xs: Vec<f64> = (0..g).map(|i| p[0] - 10.0 * sd + i as f64 * 20.0 * sd / 600.0).collect();
            let mut w: Vec<f64> = xs.iter().map(|x| (-sq(x - p[0]) / (2.0 * sd * sd)).exp()).collect();
            let tot: f64 = w.iter().sum();
            w.iter_mut().for_each(|v| *v /= tot);
            let mut k = vec![0.0; g * g];
            for (i, row) in k.chunks_mut(g).enumerate() {
                for j in 0..g { row[j] = (-sq(xs[j] - p[0] - p[1] * (xs[i] - p[0])) / (2.0 * p[2] * p[2])).exp() }
                let s: f64 = row.iter().sum();
                row.iter_mut().for_each(|v| *v /= s);
            }
            let (mut ll, mut ms, mut ss) = (0.0, vec![], vec![]);
            for &y in &self.d.y {
                let mut pred = vec![0.0; g];
                for (wi, row) in w.iter().zip(k.chunks(g)) { if *wi >= 1e-300 { for (q, kv) in pred.iter_mut().zip(row) { *q += wi * kv } } }
                let post: Vec<f64> = pred.iter().zip(&xs).map(|(q, &x)| q * self.logg(y, x).exp()).collect();
                let z: f64 = post.iter().sum();
                ll += z.ln();
                w = post.iter().map(|v| v / z).collect();
                let (m, m2) = w.iter().zip(&xs).fold((0.0, 0.0), |(a, b), (w, x)| (a + w * x, b + w * x * x));
                ms.push(m);
                ss.push((m2 - m * m).max(0.0).sqrt());
            }
            let (vol, above) = w.iter().zip(&xs).fold((0.0, 0.0), |(a, b), (w, x)| (a + w * (x / 2.0).exp(), b + w * ind((x / 2.0).exp() > p[3])));
            Reference { tag: "numerical", how: "a point-mass filter on 601 grid points; the error comes from the grid", values: self.vals(&[vol, above, ll]), log_z: Some(ll), means: ms, sds: ss, ..Default::default() }
        }
    }

    /// The reference of a record: exact values ("exact") or numerical values with their method ("numerical"), the log
    /// normalising constant where the model gives it, the evidence of model 0 (balance), the posterior mode and its
    /// standard deviations (O-rings), and the reference filter means and standard deviations at each time (filters).
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Reference {
        pub tag: &'static str, pub how: &'static str, pub values: Vec<(String, f64)>, pub log_z: Option<f64>, pub log_z0: Option<f64>,
        pub mode: Option<[f64; 2]>, pub sd: Option<[f64; 2]>, pub means: Vec<f64>, pub sds: Vec<f64>,
    }
    impl Reference {
        /// The reference value of a quantity.
        pub fn get(&self, id: &str) -> Option<f64> { self.values.iter().find(|v| v.0 == id).map(|v| v.1) }
    }

    /// The reference of a record, as chains.js reference() gives it. It does not check the parameters: use `prepare`.
    pub fn reference(rec: &Record) -> Result<Reference, String> { Ok(Mdl::new(rec)?.reference()) }

    /* ---------- Sobol points and resampling ---------- */

    /// Joe and Kuo's direction numbers new-joe-kuo-6.21201 for dimensions 2 to 21: degree s, coefficient a, m₁ … m_s.
    const JOE_KUO: [(usize, u32, &[u32]); 20] = [(1, 0, &[1]), (2, 1, &[1, 3]), (3, 1, &[1, 3, 1]), (3, 2, &[1, 1, 1]), (4, 1, &[1, 1, 3, 3]), (4, 4, &[1, 3, 5, 13]),
        (5, 2, &[1, 1, 5, 5, 17]), (5, 4, &[1, 1, 5, 5, 5]), (5, 7, &[1, 1, 7, 11, 19]), (5, 11, &[1, 1, 5, 1, 1]), (5, 13, &[1, 1, 1, 3, 11]), (5, 14, &[1, 3, 5, 5, 31]),
        (6, 1, &[1, 3, 3, 9, 7, 49]), (6, 13, &[1, 1, 1, 15, 21, 21]), (6, 16, &[1, 3, 1, 13, 27, 49]), (6, 19, &[1, 1, 1, 15, 7, 5]), (6, 22, &[1, 3, 1, 15, 13, 25]),
        (6, 25, &[1, 1, 5, 5, 19, 61]), (7, 1, &[1, 3, 7, 11, 23, 15, 103]), (7, 4, &[1, 3, 7, 13, 13, 15, 69])];
    /// The largest dimension of the Sobol points.
    pub const MAX_DIM: usize = 21;

    /// Sobol points in [0, 1)^d in Gray-code order (Antonov and Saleev), so each prefix of 2^k points is a digital net.
    /// kind "lms_shift": Matoušek's random linear scramble and a digital shift; "shift": the shift only; "none": the
    /// plain points. Dimension 1 is the van der Corput sequence in base 2.
    pub struct Sobol { dirs: Vec<[u32; 32]>, shift: Vec<u32>, x: Vec<u32>, i: u32 }
    impl Sobol {
        /// d ≤ MAX_DIM dimensions (more are cut to MAX_DIM); r gives the scramble and the shift.
        pub fn new(d: usize, kind: &str, r: &mut Src) -> Sobol {
            let mut dirs: Vec<[u32; 32]> = (0..d.min(MAX_DIM)).map(|j| {
                let mut v = [0u32; 32];
                if j == 0 { for k in 0..32 { v[k] = 1 << (31 - k) } return v }
                let (s, a, m) = JOE_KUO[j - 1];
                for k in 0..s { v[k] = m[k] << (31 - k) }
                for k in s..32 { v[k] = (1..s).filter(|i| (a >> (s - 1 - i)) & 1 == 1).fold(v[k - s] ^ (v[k - s] >> s), |x, i| x ^ v[k - i]) }
                v
            }).collect();
            if kind == "lms_shift" {
                for v in dirs.iter_mut() {
                    // A random lower-triangular binary matrix with a unit diagonal; digit 1 of a point is its top bit.
                    let rows: Vec<u32> = (1..=32usize).map(|r2| (if r2 == 1 { 0 } else { u32r(r) & !((1u64 << (33 - r2)) - 1) as u32 }) | 1 << (32 - r2)).collect();
                    *v = v.map(|vk| (1..=32usize).fold(0, |x, r2| if (rows[r2 - 1] & vk).count_ones() & 1 == 1 { x | 1 << (32 - r2) } else { x }));
                }
            }
            let shift = (0..dirs.len()).map(|_| if kind == "none" { 0 } else { u32r(r) }).collect();
            Sobol { x: vec![0; dirs.len()], dirs, shift, i: 0 }
        }
        /// Write the next point into u.
        pub fn next(&mut self, u: &mut [f64]) {
            if self.i > 0 { let c = self.i.trailing_zeros() as usize; for (x, v) in self.x.iter_mut().zip(&self.dirs) { *x ^= v[c] } }
            for ((u, x), s) in u.iter_mut().zip(&self.x).zip(&self.shift) { *u = ((x ^ s) as f64 + 0.5) / 4294967296.0 }
            self.i += 1;
        }
    }

    /// n sorted uniforms from n + 1 exponential spacings.
    fn sorted(n: usize, r: &mut Src) -> Vec<f64> {
        let mut s = 0.0;
        let u: Vec<f64> = (0..n).map(|_| { s += r.exp(); s }).collect();
        s += r.exp();
        u.iter().map(|v| v / s).collect()
    }
    /// The index of each sorted uniform in the cumulative weights.
    fn walk(w: &[f64], u: &[f64]) -> Vec<u32> {
        let (mut c, mut j) = (w[0], 0);
        u.iter().map(|&v| { while v > c && j < w.len() - 1 { j += 1; c += w[j] } j as u32 }).collect()
    }

    /// N ancestor indices from N normalised weights: "multinomial" (sorted uniforms), "stratified" (one uniform in each of
    /// N strata), "systematic" (one uniform for all strata) or "residual" (the integer parts of N Wᵢ, then a multinomial
    /// draw from the rest). Each scheme gives particle i N Wᵢ copies in expectation.
    pub fn resample(w: &[f64], scheme: &str, r: &mut Src) -> Vec<u32> {
        let nf = w.len() as f64;
        match scheme {
            "residual" => {
                let mut out: Vec<u32> = w.iter().enumerate().flat_map(|(i, x)| std::iter::repeat_n(i as u32, (nf * x).floor() as usize)).collect();
                if out.len() < w.len() {
                    let mut res: Vec<f64> = w.iter().map(|x| nf * x - (nf * x).floor()).collect();
                    let rest: f64 = res.iter().sum();
                    res.iter_mut().for_each(|v| *v /= rest);
                    out.extend(walk(&res, &sorted(w.len() - out.len(), r)));
                }
                out.truncate(w.len());
                out
            }
            "multinomial" => walk(w, &sorted(w.len(), r)),
            "stratified" => walk(w, &(0..w.len()).map(|i| (i as f64 + r.u()) / nf).collect::<Vec<_>>()),
            _ => { let v = r.u(); walk(w, &(0..w.len()).map(|i| (i as f64 + v) / nf).collect::<Vec<_>>()) }
        }
    }

    /// The number of distinct ancestors at each step of the particles of the last step; par[k][i] is the index at step
    /// k − 1 of particle i at step k.
    pub fn distinct(par: &[Vec<u32>], n: usize) -> Vec<usize> {
        let mut out = vec![n; par.len()];
        let (mut set, mut mark): (Vec<u32>, Vec<bool>) = ((0..n as u32).collect(), vec![false; n]);
        for k in (1..par.len()).rev() {
            mark.fill(false);
            set = set.iter().map(|&i| par[k][i as usize]).filter(|&a| !std::mem::replace(&mut mark[a as usize], true)).collect();
            out[k - 1] = set.len();
        }
        out
    }

    fn uniq(it: impl Iterator<Item = usize>, n: usize) -> Vec<usize> { let mut seen = vec![false; n]; it.filter(|&i| !std::mem::replace(&mut seen[i], true)).collect() }

    /// The genealogy of a particle system for the figure: the ancestral lines of up to LINEAGES evenly spaced particles of
    /// the last step back to step 0, and a crowd of up to CROWD other particles at each step. nodes[k] holds (value, the
    /// position of its parent in nodes[k − 1]); the parent of a node of step 0 is 0.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Genealogy { pub steps: usize, pub nodes: Vec<Vec<(f64, usize)>>, pub crowd: Vec<Vec<f64>>, pub surviving: usize }

    fn lineages(vals: &[Vec<f64>], par: &[Vec<u32>]) -> Genealogy {
        let kk = vals.len() - 1;
        let n = vals[kk].len();
        let d = n.min(LINEAGES);
        let mut ids = vec![uniq((0..d).map(|i| i * n / d), n)];
        for k in (1..=kk).rev() { let up = uniq(ids[ids.len() - 1].iter().map(|&i| par[k][i] as usize), n); ids.push(up) }
        ids.reverse();
        let nodes = (0..=kk).map(|k| {
            let mut pos = vec![0; n];
            if k > 0 { for (j, &i) in ids[k - 1].iter().enumerate() { pos[i] = j } }
            ids[k].iter().map(|&i| (vals[k][i], if k > 0 { pos[par[k][i] as usize] } else { 0 })).collect()
        }).collect();
        let crowd = vals.iter().map(|v| { let c = v.len().min(CROWD); (0..c).map(|i| v[i * v.len() / c]).collect() }).collect();
        Genealogy { steps: kk + 1, nodes, crowd, surviving: ids[0].len() }
    }

    /* ---------- runs ---------- */

    /// The summary of one series of one chain: its mean, variance, the mean and variance of each half, and its
    /// autocorrelation at lags 0 to LAGS.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Series { pub mean: f64, pub var: f64, pub halves: [[f64; 2]; 2], pub acf: Vec<f64> }
    impl Series {
        pub fn of(xs: &[f64], lags: usize) -> Series {
            let (a, b) = xs.split_at(xs.len() / 2);
            Series { mean: mean(xs), var: var(xs), halves: [[mean(a), var(a)], [mean(b), var(b)]], acf: autocorrelation(xs, lags) }
        }
    }

    /// One Markov chain: 2^size warm-up iterations, then n = 2^size draws, summarised as series (each coordinate, then
    /// each quantity that is a function of the state). Plot data: the trace (iteration, x₁, x₂) thinned to about TRACE
    /// points over the warm-up and the draws, up to CLOUD draws (x₁, x₂), and for run 0 of HMC the last leapfrog path.
    #[derive(Clone, Debug, PartialEq)]
    pub struct ChainRun {
        pub n: usize, pub start: [f64; 2], pub series: Vec<Series>, pub proposals: u64, pub accepted: u64, pub divergent: u64, pub max_energy: f64, pub grads: u64,
        pub trace: Vec<[f64; 3]>, pub cloud: Vec<(f64, f64)>, pub path: Vec<(f64, f64)>,
    }

    /// One step of a particle system: the tempering exponent β (for a filter, the time t), the weight ESS after the
    /// reweighting, whether it resampled, and the acceptance rate of its Metropolis moves.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Step { pub beta: f64, pub ess: f64, pub resampled: bool, pub accept: Option<f64> }

    /// One particle system: a sequential Monte Carlo sampler (steps from β = 0) or a particle filter (steps at t = 1 … T).
    /// est holds the estimate of each quantity of the record, log_z the log of Ẑ. Run 0 keeps the plot data: the sorted
    /// normalised weights at the end, the particles (x₁, x₂, N W) of the sampler, the filter means and standard deviations
    /// at each time, and the genealogy.
    #[derive(Clone, Debug, PartialEq)]
    pub struct PartRun {
        pub n: usize, pub est: Vec<f64>, pub log_z: f64, pub steps: Vec<Step>, pub held: bool, pub max_w: f64, pub final_ess: f64, pub distinct: Vec<usize>,
        pub weights: Vec<f64>, pub cloud: Vec<[f64; 3]>, pub means: Vec<f64>, pub sds: Vec<f64>, pub genealogy: Option<Genealogy>,
    }

    /// One randomisation: the estimate of each output with the first 2^k points for k = min(4, size) … size, with the
    /// randomised Sobol points (qmc) and with independent uniforms (plain). Run 0 keeps the first 256 points of
    /// dimensions 1 and 2 of each (dimension 2 is 1/2 when d = 1).
    #[derive(Clone, Debug, PartialEq)]
    pub struct IntRun { pub n: usize, pub d: usize, pub ks: Vec<u32>, pub qmc: Vec<Vec<f64>>, pub plain: Vec<Vec<f64>>, pub points: [Vec<(f64, f64)>; 2] }

    /// One run of one method.
    #[derive(Clone, Debug, PartialEq)]
    pub enum Run { Chain(ChainRun), Part(PartRun), Int(IntRun) }
    impl Run {
        pub fn chain(&self) -> Option<&ChainRun> { if let Run::Chain(c) = self { Some(c) } else { None } }
        pub fn part(&self) -> Option<&PartRun> { if let Run::Part(c) = self { Some(c) } else { None } }
        pub fn int(&self) -> Option<&IntRun> { if let Run::Int(c) = self { Some(c) } else { None } }
    }

    /// Independent run b: one run of each method of the lab (the method, then the comparison).
    #[derive(Clone, Debug, PartialEq)]
    pub struct Block { pub b: usize, pub runs: Vec<Run> }

    /// A checked record with its settings and its reference: the job of `block` and `summary`. methods holds the method
    /// and the comparison.
    #[derive(Clone, Debug)]
    pub struct Lab { pub rec: Record, pub fam: Family, pub model: Model, pub s: Settings, pub methods: Vec<Method>, pub rf: Reference, md: Mdl, qs: Vec<usize> }

    /// Whether a method (its id) applies to a model, or the reason why not.
    pub fn applicable(m: Model, method: &str) -> Result<(), String> {
        let fam = m.family();
        if !fam.methods().iter().any(|x| x.id() == method) { return Err(format!("{method} does not apply to {}.", ["a target law", "a state-space model", "an integral"][fam as usize])) }
        match (m, method) {
            (Funnel, "gibbs") => Err("The law of v given x is not a standard law, so the page has no Gibbs sweep for the funnel.".into()),
            (Oring, "gibbs") => Err("The full conditional laws of a logistic regression are not standard laws. A Pólya-Gamma augmentation would give them, but this page does not have it, so it has no Gibbs sweep here.".into()),
            _ => Ok(()),
        }
    }

    /// Check a record and its settings with the limits and messages of chains.js prepare(), then compute the reference.
    /// The error lists every problem, in sentences separated by a space.
    pub fn prepare(rec: &Record, s: &Settings) -> Result<Lab, String> {
        let md = Mdl::new(rec)?;
        let (m, fam) = (md.m, md.m.family());
        let mut e: Vec<String> = rec.params.iter().filter(|p| !p.1.is_finite()).map(|p| format!("The parameter {} is not a finite number.", p.0)).collect();
        if e.is_empty() { e.extend(md.check()) }
        let ms: Vec<&str> = std::iter::once(s.method.as_str()).chain((s.compare != "none").then_some(s.compare.as_str())).collect();
        e.extend(ms.iter().filter_map(|x| applicable(m, x).err()));
        let (lo, hi) = fam.sizes();
        let int = |x: f64, a: f64, b: f64| x.fract() == 0.0 && x >= a && x <= b;
        let one = |x: &str, xs: &[&str]| xs.contains(&x);
        let y = &rec.data.y;
        let k = &rec.data.k;
        for (bad, msg) in [
            (s.compare == s.method, "The comparison method is the method itself.".to_string()),
            (!int(s.size, lo as f64, hi as f64), format!("The size must be an integer from {lo} to {hi} for this model: 2^{lo} to 2^{hi} {}.", ["draws after the warm-up", "particles", "points"][fam as usize])),
            (!int(s.runs, RUNS[0] as f64, RUNS[1] as f64), format!("The number of independent runs must be an integer from {} to {}.", RUNS[0], RUNS[1])),
            (!(s.step > 0.0 && s.step <= 10.0), "The step size of the random walk must lie in (0, 10].".into()),
            (!(s.eps > 0.0 && s.eps <= 10.0), "The leapfrog step must lie in (0, 10].".into()),
            (!int(s.leap, 1.0, LEAP as f64), format!("The number of leapfrog steps must be an integer from 1 to {LEAP}.")),
            (!(s.ess > 0.0 && s.ess <= 1.0), "The ESS threshold must lie in (0, 1].".into()),
            (!int(s.temps, 1.0, TEMPS as f64), format!("The number of fixed temperatures must be an integer from 1 to {TEMPS}.")),
            (!int(s.moves, 0.0, MOVES as f64), format!("The number of moves must be an integer from 0 to {MOVES}.")),
            (!one(&s.start, &["dispersed", "one_point"]), format!("The start \"{}\" is not dispersed or one_point.", s.start)),
            (!one(&s.resample, &["multinomial", "stratified", "systematic", "residual", "none"]), format!("The resampling scheme \"{}\" is not known.", s.resample)),
            (!one(&s.schedule, &["adaptive", "fixed"]), format!("The schedule \"{}\" is not adaptive or fixed.", s.schedule)),
            (!one(&s.scramble, &["lms_shift", "shift", "none"]), format!("The randomisation \"{}\" is not known.", s.scramble)),
            (!one(&s.path, &["standard", "bridge"]), format!("The path construction \"{}\" is not standard or bridge.", s.path)),
            (fam == Filter && !((1..=500).contains(&y.len()) && y.iter().all(|v| v.is_finite())), "A state-space model needs 1 to 500 finite observations y.".into()),
            (m == Balance && !(y.len() >= 2 && y.iter().all(|v| v.is_finite())), "The balance model needs at least 2 finite weighings y.".into()),
            (m == Oring && !(rec.data.t.len() == k.len() && k.iter().all(|&x| x.fract() == 0.0 && x >= 0.0 && x <= rec.data.m)),
                "The O-ring model needs temperatures t and counts k in [0, m] of the same length.".into()),
        ] { if bad { e.push(msg) } }
        let names: Vec<&str> = MODELS[m as usize].3.iter().chain(MODELS[m as usize].4).copied().collect();
        let qs: Vec<usize> = rec.quantities.iter().filter_map(|q| {
            let i = names.iter().position(|x| x == q);
            if i.is_none() { e.push(format!("The model {} has no quantity \"{}\".", rec.model, cut(q, 30))) }
            i
        }).collect();
        if rec.quantities.is_empty() { e.push("The record names no quantity to estimate.".into()) }
        if !e.is_empty() { return Err(e.join(" ")) }
        let methods = ms.iter().filter_map(|x| Method::parse(x)).collect();
        Ok(Lab { rec: rec.clone(), fam, model: m, s: s.clone(), methods, rf: md.reference(), md, qs })
    }

    impl Lab {
        /// The unnormalised log density of the target law at x, for the shading of the scatter figure.
        pub fn logp(&self, x: [f64; 2]) -> f64 { self.md.logp(x) }
        /// The window of the scatter figure: [[x₁ from, to], [x₂ from, to]].
        pub fn window(&self) -> [[f64; 2]; 2] {
            let (p, y) = (&self.md.p, &self.rec.data.y);
            match self.model {
                Normal2 => [[-4.0, 4.0]; 2],
                Mixture => [[-p[0] - 4.0, p[0] + 4.0]; 2],
                Funnel => [[-3.0 * p[0], 3.0 * p[0]], [-12.0, 12.0]],
                Balance => { let (m, se, ls) = (mean(y), self.md.se(), var(y).sqrt().ln()); [[m - 6.0 * se, m + 6.0 * se], [ls - 1.2, ls + 1.2]] }
                _ => match (self.rf.mode, self.rf.sd) { (Some(m), Some(s)) => [0, 1].map(|j| [m[j] - 5.0 * s[j], m[j] + 5.0 * s[j]]), _ => [[-6.0, 0.0], [-3.5, 1.0]] },
            }
        }
        fn src(&self, m: Method, b: usize, v: u64) -> Src { Src::new(self.s.seed, 0x6c6162 + m as u64, b as u64, v, false) }
        fn n(&self) -> usize { 1 << self.s.size as u32 }
        /// The model indices of the quantities that are functions of the state, in the order of the record.
        fn fq(&self) -> Vec<usize> { self.qs.iter().copied().filter(|&i| i < self.model.fs().len()).collect() }
        /// One Markov chain of Metropolis–Hastings, Gibbs sweeps or Hamiltonian Monte Carlo.
        fn chain(&self, b: usize, m: Method) -> ChainRun {
            let (md, s, n) = (&self.md, &self.s, self.n());
            let total = 2 * n;
            let (mut ri, mut rm, mut ra) = (self.src(m, b, 0), self.src(m, b, 1), self.src(m, b, 2));
            let (sc, (qm, qs), fs) = (md.scale(), md.q(), self.fq());
            // Start: one point for every chain, or a draw from the reference law q.
            let mut x = if s.start == "one_point" { md.point() } else { [0, 1].map(|j| qm[j] + qs[j] * nz(&mut ri)) };
            let mut lp = md.logp(x);
            let mut ser = vec![vec![0.0; n]; 2 + fs.len()];
            let (thin, every) = ((total / TRACE).max(1), (n / CLOUD).max(1));
            let mut c = ChainRun { n, start: x, series: vec![], proposals: 0, accepted: 0, divergent: 0, max_energy: 0.0, grads: 0, trace: vec![], cloud: vec![], path: vec![] };
            let kin = |p: [f64; 2]| (sq(p[0] * sc[0]) + sq(p[1] * sc[1])) / 2.0;
            for it in 0..total {
                c.proposals += 1;
                match m {
                    Metropolis => {
                        let y = [0, 1].map(|j| x[j] + s.step * sc[j] * nz(&mut rm));
                        let ly = md.logp(y);
                        if ra.u().ln() < ly - lp { (x, lp, c.accepted) = (y, ly, c.accepted + 1) }
                    }
                    Gibbs => { md.gibbs(&mut x, &mut rm); c.accepted += 1 }
                    _ => {
                        // Hamiltonian Monte Carlo: mass 1/scale², a step jittered by ±10 %, L leapfrog steps.
                        let e = s.eps * (0.9 + 0.2 * ra.u());
                        let mut mom = [0, 1].map(|j| nz(&mut rm) / sc[j]);
                        let (k0, mut y, keep) = (kin(mom), x, it == total - 1 && b == 0);
                        if keep { c.path.push((y[0], y[1])) }
                        let (mut g, mut ok) = (md.grad(y), true);
                        c.grads += 1;
                        for _ in 0..s.leap as usize {
                            for j in 0..2 { mom[j] += e / 2.0 * g[j]; y[j] += e * sc[j] * sc[j] * mom[j] }
                            g = md.grad(y);
                            c.grads += 1;
                            for j in 0..2 { mom[j] += e / 2.0 * g[j] }
                            if keep { c.path.push((y[0], y[1])) }
                            if !(y[0].is_finite() && y[1].is_finite()) { ok = false; break }
                        }
                        let ly = if ok { md.logp(y) } else { -INF };
                        let dh = ly - kin(mom) - (lp - k0);
                        if !(dh > -1000.0) { if it >= n { c.divergent += 1 } } else {
                            if it >= n { c.max_energy = c.max_energy.max(dh.abs()) }
                            if ra.u().ln() < dh { (x, lp, c.accepted) = (y, ly, c.accepted + 1) }
                        }
                    }
                }
                if it % thin == 0 { c.trace.push([it as f64, x[0], x[1]]) }
                if it >= n {
                    let i = it - n;
                    (ser[0][i], ser[1][i]) = (x[0], x[1]);
                    for (k, &f) in fs.iter().enumerate() { ser[2 + k][i] = md.f(f, x) }
                    if i % every == 0 && c.cloud.len() < CLOUD { c.cloud.push((x[0], x[1])) }
                }
            }
            c.series = ser.iter().map(|v| Series::of(v, LAGS)).collect();
            c
        }
        /// One sequential Monte Carlo sampler: N particles from the reference law q, then geometric tempering
        /// π_β ∝ q^(1 − β) π^β to β = 1. The adaptive schedule takes the step that multiplies the weight ESS by the
        /// threshold, the fixed one equal steps. After each step: resampling (always with the adaptive schedule, below the
        /// threshold with the fixed one), then random-walk Metropolis moves with 2.38/√2 times the weighted spread. The
        /// product of the mean incremental weights estimates Z.
        fn smc(&self, b: usize) -> PartRun {
            let (md, s, n) = (&self.md, &self.s, self.n());
            let nf = n as f64;
            let (mut ri, mut rm, mut ra, mut rr) = (self.src(Smc, b, 0), self.src(Smc, b, 1), self.src(Smc, b, 2), self.src(Smc, b, 3));
            let (qm, qs) = md.q();
            let logq = |x: [f64; 2]| (0..2).map(|j| -0.5 * L2PI - qs[j].ln() - sq(x[j] - qm[j]) / (2.0 * qs[j] * qs[j])).sum::<f64>();
            let mut xs: Vec<[f64; 2]> = (0..n).map(|_| [0, 1].map(|j| qm[j] + qs[j] * nz(&mut ri))).collect();
            let mut ell: Vec<f64> = xs.iter().map(|&x| md.logp(x) - logq(x)).collect();
            let (mut w, mut lw, keep) = (vec![1.0 / nf; n], vec![0.0; n], b == 0);
            let (mut beta, mut lz, mut held) = (0.0, 0.0, true);
            let mut steps = vec![Step { beta: 0.0, ess: nf, resampled: false, accept: None }];
            let mut vals = if keep { vec![xs.iter().map(|x| x[0]).collect::<Vec<f64>>()] } else { vec![] };
            let mut par: Vec<Vec<u32>> = vec![vec![]];
            while beta < 1.0 && steps.len() <= STEPS {
                let mut next = if s.schedule == "fixed" { (((beta * s.temps).round() + 1.0) / s.temps).min(1.0) } else {
                    let lnw: Vec<f64> = w.iter().map(|v| v.ln()).collect();
                    let ess = |d: f64| {
                        let m = lnw.iter().zip(&ell).fold(-INF, |a, (x, l)| a.max(x + d * l));
                        let (s1, s2) = lnw.iter().zip(&ell).fold((0.0, 0.0), |(a, b), (x, l)| { let e = (x + d * l - m).exp(); (a + e, b + e * e) });
                        s1 * s1 / s2
                    };
                    let (target, room) = (s.ess * wess(&w), 1.0 - beta);
                    if ess(room) >= target { 1.0 } else if ess(1e-12) < target { held = false; 1.0 } else {
                        let (mut lo, mut hi) = (0.0, room);
                        for _ in 0..60 { let mid = (lo + hi) / 2.0; if ess(mid) >= target { lo = mid } else { hi = mid } }
                        beta + lo
                    }
                };
                if steps.len() == STEPS { (next, held) = (1.0, false) }
                for i in 0..n { lw[i] = w[i].ln() + (next - beta) * ell[i] }
                lz += normalise(&lw, &mut w);
                beta = next;
                let mut st = Step { beta, ess: wess(&w), resampled: false, accept: None };
                let mut pa: Vec<u32> = (0..n as u32).collect();
                if beta < 1.0 {
                    if s.resample != "none" && (s.schedule == "adaptive" || st.ess < s.ess * nf) {
                        pa = resample(&w, &s.resample, &mut rr);
                        (xs, ell) = (pa.iter().map(|&a| xs[a as usize]).collect(), pa.iter().map(|&a| ell[a as usize]).collect());
                        w.fill(1.0 / nf);
                        st.resampled = true;
                    }
                    // Moves that leave π_β invariant: log π_β = log q + β ℓ with ℓ = log π − log q.
                    let sd = [0, 1].map(|j| {
                        let (m, m2) = xs.iter().zip(&w).fold((0.0, 0.0), |(a, b), (x, w)| (a + w * x[j], b + w * x[j] * x[j]));
                        (m2 - m * m).max(0.0).sqrt().max(1e-6) * (2.38 / SQRT_2)
                    });
                    let mut acc = 0;
                    for _ in 0..s.moves as usize {
                        for i in 0..n {
                            let y = [0, 1].map(|j| xs[i][j] + sd[j] * nz(&mut rm));
                            let (lpy, lqy) = (md.logp(y), logq(y));
                            if ra.u().ln() < lqy + beta * (lpy - lqy) - (logq(xs[i]) + beta * ell[i]) { (xs[i], ell[i], acc) = (y, lpy - lqy, acc + 1) }
                        }
                    }
                    st.accept = (s.moves > 0.0).then(|| acc as f64 / (nf * s.moves));
                }
                steps.push(st);
                par.push(pa);
                if keep { vals.push(xs.iter().map(|x| x[0]).collect()) }
            }
            let nq = self.model.fs().len();
            let est = self.qs.iter().map(|&q| match q {
                q if q < nq => xs.iter().zip(&w).map(|(x, w)| w * md.f(q, *x)).sum(),
                q if q == nq => lz,
                _ => 1.0 / (1.0 + (self.rf.log_z0.unwrap_or(NAN) - lz).exp()),
            }).collect();
            let every = (n / CLOUD).max(1);
            let cloud = if keep { (0..n.min(CLOUD)).map(|j| { let x = xs[j * every]; [x[0], x[1], w[j * every] * nf] }).collect() } else { vec![] };
            self.part(n, est, lz, steps, held, &w, &par, keep, vals, cloud, vec![], vec![])
        }
        #[allow(clippy::too_many_arguments)]
        fn part(&self, n: usize, est: Vec<f64>, log_z: f64, steps: Vec<Step>, held: bool, w: &[f64], par: &[Vec<u32>], keep: bool, vals: Vec<Vec<f64>>, cloud: Vec<[f64; 3]>, means: Vec<f64>, sds: Vec<f64>) -> PartRun {
            let mut weights = if keep { w.to_vec() } else { vec![] };
            weights.sort_by(|a, b| b.total_cmp(a));
            PartRun { n, est, log_z, steps, held, max_w: w.iter().fold(0.0, |a, &b| a.max(b)), final_ess: wess(w), distinct: distinct(par, n), weights, cloud, means, sds,
                genealogy: keep.then(|| lineages(&vals, par)) }
        }
        /// One bootstrap particle filter: particles move with the state dynamics and take the observation density as their
        /// weight. It resamples when the weight ESS falls below the threshold times N (never with "none", never after the
        /// last observation) and estimates each quantity from the weighted particles before it resamples.
        fn filter(&self, b: usize) -> PartRun {
            let (md, s, n, y) = (&self.md, &self.s, self.n(), &self.rec.data.y);
            let (nf, keep) = (n as f64, b == 0);
            let (mut ri, mut rm, mut rr) = (self.src(Particle, b, 0), self.src(Particle, b, 1), self.src(Particle, b, 3));
            let mut x: Vec<f64> = (0..n).map(|_| md.init(nz(&mut ri))).collect();
            let (mut w, mut lw, mut lz) = (vec![1.0 / nf; n], vec![0.0; n], 0.0);
            let (mut steps, mut means, mut sds) = (vec![], vec![], vec![]);
            let mut vals = if keep { vec![x.clone()] } else { vec![] };
            let (mut par, mut pending): (Vec<Vec<u32>>, Vec<u32>) = (vec![vec![]], (0..n as u32).collect());
            for (t, &yt) in y.iter().enumerate() {
                for v in x.iter_mut() { *v = md.step(*v, nz(&mut rm)) }
                for i in 0..n { lw[i] = w[i].ln() + md.logg(yt, x[i]) }
                lz += normalise(&lw, &mut w);
                if keep {
                    let (mu, m2) = x.iter().zip(&w).fold((0.0, 0.0), |(a, b), (x, w)| (a + w * x, b + w * x * x));
                    means.push(mu);
                    sds.push((m2 - mu * mu).max(0.0).sqrt());
                    vals.push(x.clone());
                }
                let e = wess(&w);
                par.push(std::mem::replace(&mut pending, (0..n as u32).collect()));
                let rs = t + 1 < y.len() && s.resample != "none" && e < s.ess * nf * (1.0 + 1e-9);
                if rs { pending = resample(&w, &s.resample, &mut rr); x = pending.iter().map(|&k| x[k as usize]).collect(); w.fill(1.0 / nf) }
                steps.push(Step { beta: (t + 1) as f64, ess: e, resampled: rs, accept: None });
            }
            let est = self.qs.iter().map(|&q| if q == 2 { lz } else { x.iter().zip(&w).map(|(&x, w)| w * md.f(q, [x, 0.0])).sum() }).collect();
            self.part(n, est, lz, steps, true, &w, &par, keep, vals, vec![], means, sds)
        }
        /// One randomisation of the Sobol points, with independent uniforms beside it, so one run gives both methods.
        fn integral(&self, b: usize) -> IntRun {
            let (md, s, n) = (&self.md, &self.s, self.n());
            let (d, nq, bridge) = (md.dim(), self.model.fs().len(), s.path == "bridge");
            let (mut rs, mut rp) = (self.src(Rqmc, b, 4), self.src(Rqmc, b, 5));
            let mut sob = Sobol::new(d, &s.scramble, &mut rs);
            let (mut u, mut out, mut ws, mut sums) = (vec![0.0; d], [0.0; 2], vec![0.0; d + 1], [[0.0; 2]; 2]);
            let mut r = IntRun { n, d, ks: vec![], qmc: vec![], plain: vec![], points: [vec![], vec![]] };
            let mut next = 1usize << (s.size as u32).min(4);
            for i in 0..n {
                for (k, sm) in sums.iter_mut().enumerate() {
                    if k == 0 { sob.next(&mut u) } else { u.iter_mut().for_each(|v| *v = rp.u()) }
                    if b == 0 && i < 256 { r.points[k].push((u[0], if d > 1 { u[1] } else { 0.5 })) }
                    md.eval(&u, &mut out, &mut ws, bridge);
                    sm[0] += out[0];
                    sm[1] += out[1];
                }
                if i + 1 == next {
                    r.ks.push(next.trailing_zeros());
                    r.qmc.push(sums[0][..nq].iter().map(|v| v / next as f64).collect());
                    r.plain.push(sums[1][..nq].iter().map(|v| v / next as f64).collect());
                    next *= 2;
                }
            }
            r
        }
    }

    /// Independent run b of each method of the lab: the method, then the comparison. The two methods of an integral share
    /// one run, which computes both estimates.
    pub fn block(lab: &Lab, b: usize) -> Block {
        let mut runs: Vec<Run> = vec![];
        for &m in &lab.methods {
            let r = match lab.fam {
                Target if m == Smc => Run::Part(lab.smc(b)),
                Target => Run::Chain(lab.chain(b, m)),
                Filter => Run::Part(lab.filter(b)),
                Integral => runs.first().cloned().unwrap_or_else(|| Run::Int(lab.integral(b))),
            };
            runs.push(r);
        }
        Block { b, runs }
    }

    /* ---------- summary ---------- */

    /// The mean of independent run values with a 95 % t interval: the estimate, the interval, its standard error, the
    /// spread of the runs and the method of the interval.
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Between { pub est: Option<f64>, pub lo: Option<f64>, pub hi: Option<f64>, pub se: Option<f64>, pub sd: Option<f64>, pub how: String }

    /// The estimate of the mean of R independent run values with a t interval at 95 %.
    pub fn between(v: &[f64]) -> Between {
        let r = v.len() as f64;
        let m = v.iter().sum::<f64>() / r;
        if v.len() < 2 { return Between { est: Some(m), how: "one run: no interval".into(), ..Default::default() } }
        let sd = if v.iter().all(|x| *x == v[0]) { 0.0 } else { (v.iter().map(|x| sq(x - m)).sum::<f64>() / (r - 1.0)).sqrt() };
        let se = sd / r.sqrt();
        if se == 0.0 { return Between { est: Some(m), se: Some(0.0), sd: Some(0.0), how: format!("the {r} runs give the same value, so their spread says nothing about the error"), ..Default::default() } }
        let t = t_quantile(0.975, r - 1.0);
        Between { est: Some(m), lo: Some(m - t * se), hi: Some(m + t * se), se: Some(se), sd: Some(sd), how: format!("t interval, 95 %, from the spread of {r} independent runs ({} degrees of freedom)", r - 1.0) }
    }

    /// The Markov-chain diagnostics of one series over M chains: split R-hat, the effective sample size (an upper bound
    /// when `bound`), τ, the Monte Carlo standard error, the pooled standard deviation and the combined autocorrelation
    /// at lags 0 to 200.
    #[derive(Clone, Debug, PartialEq)]
    pub struct SeriesDiag { pub name: String, pub coord: bool, pub rhat: Option<f64>, pub ess: Option<f64>, pub tau: Option<f64>, pub bound: bool, pub mcse: Option<f64>, pub sd: f64, pub acf: Vec<f64> }

    /// Stan's split R-hat and effective sample size without rank normalisation: R-hat from the halves of each chain, the
    /// ESS from the combined autocorrelation with Geyer's initial monotone sequence. n is the number of draws of a chain.
    pub fn chain_diagnostics(ch: &[&Series], n: usize) -> SeriesDiag {
        let (mm, nf) = (ch.len() as f64, n as f64);
        let h = nf / 2.0;
        let hv: Vec<[f64; 2]> = ch.iter().flat_map(|c| c.halves).collect();
        let k = hv.len() as f64;
        let (wh, mh) = (hv.iter().map(|x| x[1]).sum::<f64>() / k, hv.iter().map(|x| x[0]).sum::<f64>() / k);
        let bh = h * hv.iter().map(|x| sq(x[0] - mh)).sum::<f64>() / (k - 1.0);
        let rhat = (wh > 0.0).then(|| (((h - 1.0) / h * wh + bh / h) / wh).sqrt());
        let (w, m) = (ch.iter().map(|c| c.var).sum::<f64>() / mm, ch.iter().map(|c| c.mean).sum::<f64>() / mm);
        let b = if ch.len() > 1 { nf * ch.iter().map(|c| sq(c.mean - m)).sum::<f64>() / (mm - 1.0) } else { 0.0 };
        let vp = (nf - 1.0) / nf * w + b / nf;
        let mut d = SeriesDiag { name: String::new(), coord: false, rhat, ess: None, tau: None, bound: false, mcse: None, sd: 0.0, acf: ch[0].acf[..1].to_vec() };
        if !(vp > 0.0) { return d }
        let l = ch.iter().map(|c| c.acf.len()).min().unwrap_or(0);
        let mut rho: Vec<f64> = (0..l).map(|k| 1.0 - (w - ch.iter().map(|c| c.var * c.acf[k]).sum::<f64>() / mm) / vp).collect();
        rho[0] = 1.0;
        let (tau, ended) = geyer(&rho);
        let ess = (mm * nf / tau).min(mm * nf * (mm * nf).log10());
        rho.truncate(201);
        (d.ess, d.tau, d.bound, d.mcse, d.sd, d.acf) = (Some(ess), Some(tau), !ended, Some((vp / ess).sqrt()), vp.sqrt(), rho);
        d
    }

    /// Markov-chain diagnostics of a method: the acceptance rate, the divergent transitions after the warm-up, the
    /// largest energy error, the gradients, and each series with the largest R-hat and the smallest ESS.
    #[derive(Clone, Debug, PartialEq)]
    pub struct ChainDiag { pub n: usize, pub accept: f64, pub divergent: u64, pub max_energy: f64, pub grads: u64, pub series: Vec<SeriesDiag>, pub max_rhat: f64, pub min_ess: f64 }

    /// Weight degeneracy of a method: the mean weight ESS at the end, the largest normalised weight, the mean number of
    /// resampling steps, the smallest weight ESS of any step, log Ẑ over the runs, Ẑ/Z where Z is known, the mean number
    /// of distinct ancestors at step 0, and for the sampler the mean number of tempering steps and whether the adaptive
    /// schedule held the ESS threshold.
    #[derive(Clone, Debug, PartialEq)]
    pub struct WeightDiag {
        pub n: usize, pub mean_final_ess: f64, pub max_w: f64, pub resamplings: f64, pub min_ess: f64, pub log_z: Between, pub z_ratio: Option<Between>, pub surviving: f64,
        pub steps: Option<f64>, pub held: Option<bool>,
    }

    /// Quasi-Monte Carlo: for each n = 2^k the root mean square error of each output against its reference, randomised
    /// Sobol points then independent points (None without a reference), and the variance ratio independent ÷ randomised
    /// at the largest n.
    #[derive(Clone, Debug, PartialEq)]
    pub struct IntDiag { pub d: usize, pub n: usize, pub rate: Vec<(f64, Vec<[Option<f64>; 2]>)>, pub ratio: Vec<Option<f64>> }

    /// The estimate of a quantity: the runs' interval, the standard error from the ESS of the pooled chains (Markov chains
    /// only), the reference, the error against it and whether the interval holds it.
    #[derive(Clone, Debug, PartialEq)]
    pub struct QSum { pub id: String, pub b: Between, pub mcse: Option<f64>, pub reference: Option<f64>, pub error: Option<f64>, pub covered: Option<bool> }

    /// The summary of one method: Markov-chain diagnostics, weight degeneracy or the integration rates, kept apart, and the
    /// estimates.
    #[derive(Clone, Debug, PartialEq)]
    pub struct MethodSum { pub method: Method, pub runs: usize, pub chain: Option<ChainDiag>, pub weights: Option<WeightDiag>, pub integral: Option<IntDiag>, pub quantities: Vec<QSum> }

    /// The summary of the runs so far.
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Summary { pub runs: usize, pub methods: Vec<MethodSum> }

    /// The estimate of quantity q (an index into the record's quantities) in one run of method m, as the runs figure
    /// shows it; None for the evidence of a Markov chain.
    pub fn run_value(lab: &Lab, r: &Run, m: Method, q: usize) -> Option<f64> {
        let nf = lab.model.fs().len();
        match r {
            Run::Chain(c) => (lab.qs[q] < nf).then(|| c.series[2 + lab.qs[..q].iter().filter(|&&i| i < nf).count()].mean),
            Run::Part(p) => Some(p.est[q]),
            Run::Int(i) => Some((if m == Rqmc { &i.qmc } else { &i.plain }).last()?[lab.qs[q]]),
        }
    }

    /// Estimates, intervals and the three kinds of diagnostic for the blocks so far, in the order b = 0, 1, …; None
    /// without a block.
    pub fn summary(lab: &Lab, blocks: &[Block]) -> Option<Summary> {
        if blocks.is_empty() { return None }
        let (rf, nf) = (&lab.rf, lab.model.fs().len());
        let methods = lab.methods.iter().enumerate().map(|(k, &m)| {
            let runs: Vec<&Run> = blocks.iter().map(|b| &b.runs[k]).collect();
            let r = runs.len() as f64;
            let mut out = MethodSum { method: m, runs: runs.len(), chain: None, weights: None, integral: None, quantities: vec![] };
            let mut mcse = vec![None; lab.qs.len()];
            if let Some(c0) = runs[0].chain() {
                let cs: Vec<&ChainRun> = runs.iter().filter_map(|r| r.chain()).collect();
                let names: Vec<&str> = lab.model.coords().into_iter().chain(lab.fq().iter().map(|&i| lab.model.fs()[i])).collect();
                let series: Vec<SeriesDiag> = names.iter().enumerate().map(|(j, nm)| {
                    SeriesDiag { name: nm.to_string(), coord: j < 2, ..chain_diagnostics(&cs.iter().map(|c| &c.series[j]).collect::<Vec<_>>(), c0.n) }
                }).collect();
                let sum = |f: fn(&ChainRun) -> u64| cs.iter().map(|c| f(c)).sum::<u64>();
                for q in 0..lab.qs.len() { if lab.qs[q] < nf { mcse[q] = series[2 + lab.qs[..q].iter().filter(|&&i| i < nf).count()].mcse } }
                out.chain = Some(ChainDiag { n: c0.n, accept: sum(|c| c.accepted) as f64 / sum(|c| c.proposals) as f64, divergent: sum(|c| c.divergent),
                    max_energy: cs.iter().fold(-INF, |a, c| a.max(c.max_energy)), grads: sum(|c| c.grads), max_rhat: series.iter().fold(-INF, |a, d| a.max(d.rhat.unwrap_or(1.0))),
                    min_ess: series.iter().fold(INF, |a, d| a.min(d.ess.unwrap_or(INF))), series });
            } else if let Some(p0) = runs[0].part() {
                let ps: Vec<&PartRun> = runs.iter().filter_map(|r| r.part()).collect();
                let avg = |f: &dyn Fn(&PartRun) -> f64| ps.iter().map(|p| f(p)).sum::<f64>() / r;
                let tgt = lab.fam == Target;
                out.weights = Some(WeightDiag { n: p0.n, mean_final_ess: avg(&|p| p.final_ess), max_w: ps.iter().fold(-INF, |a, p| a.max(p.max_w)),
                    resamplings: avg(&|p| p.steps.iter().filter(|s| s.resampled).count() as f64), min_ess: ps.iter().flat_map(|p| p.steps.iter().skip(tgt as usize)).fold(INF, |a, s| a.min(s.ess)),
                    log_z: between(&ps.iter().map(|p| p.log_z).collect::<Vec<_>>()), z_ratio: rf.log_z.map(|z| between(&ps.iter().map(|p| (p.log_z - z).exp()).collect::<Vec<_>>())),
                    surviving: avg(&|p| p.distinct[0] as f64), steps: tgt.then(|| avg(&|p| (p.steps.len() - 1) as f64)), held: tgt.then(|| ps.iter().all(|p| p.held)) });
            } else if let Some(i0) = runs[0].int() {
                let is: Vec<&IntRun> = runs.iter().filter_map(|r| r.int()).collect();
                let rmse = |i: usize, q: usize, v: f64, t: fn(&IntRun) -> &Vec<Vec<f64>>| (is.iter().map(|r| sq(t(r)[i][q] - v)).sum::<f64>() / r).sqrt();
                let rate = i0.ks.iter().enumerate().map(|(i, &k)| ((1u64 << k) as f64, (0..nf).map(|q| match rf.get(lab.model.fs()[q]) {
                    Some(v) => [Some(rmse(i, q, v, |r| &r.qmc)), Some(rmse(i, q, v, |r| &r.plain))],
                    None => [None, None],
                }).collect())).collect();
                let sd = |q: usize, t: fn(&IntRun) -> &Vec<Vec<f64>>| between(&is.iter().filter_map(|r| t(r).last().map(|v| v[q])).collect::<Vec<_>>()).sd.filter(|v| *v != 0.0);
                let ratio = (0..nf).map(|q| Some(sq(sd(q, |r| &r.plain)?) / sq(sd(q, |r| &r.qmc)?))).collect();
                out.integral = Some(IntDiag { d: i0.d, n: i0.n, rate, ratio });
            }
            out.quantities = (0..lab.qs.len()).map(|q| {
                let v: Vec<f64> = runs.iter().filter_map(|r| run_value(lab, r, m, q)).collect();
                let (id, reference) = (lab.rec.quantities[q].clone(), rf.get(&lab.rec.quantities[q]));
                let b = if v.is_empty() { Between { how: "Markov chain Monte Carlo gives no estimate of the evidence. Use sequential Monte Carlo.".into(), ..Default::default() } } else { between(&v) };
                let (error, covered) = (b.est.zip(reference).map(|(e, r)| e - r), b.lo.zip(b.hi).zip(reference).map(|((lo, hi), r)| r >= lo && r <= hi));
                QSum { id, b, mcse: mcse[q], reference, error, covered }
            }).collect();
            out
        }).collect();
        Some(Summary { runs: blocks.len(), methods })
    }

    /// All runs of a lab in order, with their summary.
    pub fn run(lab: &Lab) -> (Vec<Block>, Summary) {
        let bl: Vec<Block> = (0..lab.s.runs as usize).map(|b| block(lab, b)).collect();
        let sm = summary(lab, &bl).unwrap_or_default();
        (bl, sm)
    }
}
```

```rust
//| caption: The rare-event laboratory.
mod rare {
    //! Rare events and ruin: a port of the workbench's `rare.js` (group 7). Three problems: the tail of a sum of n i.i.d.
    //! jumps, the ruin probability of the Cramér–Lundberg model in its Pollaczek–Khinchine form (a sum of a geometric
    //! number of ladder heights), and the catastrophe and systemic ruin test (Hawkes arrivals, copula-linked shares,
    //! reserves, a cascade of defaults and three policies over a horizon T). Six methods: direct simulation, exponential
    //! tilting, fixed-effort multilevel splitting, subset simulation, adaptive importance sampling with a defensive mixture
    //! and the cross-entropy method. `prepare` checks a record and its settings, `run` runs the independent replications
    //! (replication b of a method draws from its own stream), `summary` gives each estimate with the interval that fits
    //! its method, `reference` the exact, numerical or asymptotic values and the tail curves, `decide` the decision. The
    //! semantics are those of the JS engine; the uniform streams differ, so the results agree in law, not bit for bit.
    use super::*;
    use serde_json::Value;
    use std::collections::BTreeMap;
    use std::f64::consts::{FRAC_1_SQRT_2, LN_2};

    /// The problems: the tail of a sum, the ruin probability, the catastrophe and systemic ruin test.
    pub const PROBLEMS: [&str; 3] = ["sum", "ruin", "cat"];
    /// The method ids; a method's stream id is 1 + 10 × problem index + its index here.
    pub const METHODS: [&str; 6] = ["direct", "tilting", "splitting", "subset", "ais", "ce"];
    /// The names of the methods, in the order of `METHODS`.
    pub const NAMES: [&str; 6] = ["Direct simulation", "Exponential tilting", "Multilevel splitting", "Subset simulation", "Adaptive importance sampling", "Cross-entropy method"];
    /// The jump laws (for the test, the laws of the event loss).
    pub const LAWS: [&str; 3] = ["exponential", "weibull", "pareto2"];
    /// The copulas of the shares of the insurers in one event.
    pub const COPULAS: [&str; 4] = ["independent", "gaussian", "gumbel", "clayton"];
    /// The assumption failures: no failure, a light proposal family for CE, a tiny proposal spread for subset simulation, AIS from r = 1.
    pub const FAILURES: [&str; 4] = ["none", "light_family", "small_spread", "nominal_start"];
    /// The most events in one path of the test, and the cap on the ladder heights of subset simulation.
    const EVENTS: usize = 50000;
    const KMAX: usize = 600;

    /// A parameter of a problem: name, default, bounds, integer or not, unit, meaning, and the law that reads it ("" for all).
    pub struct Par { pub name: &'static str, pub def: f64, pub min: f64, pub max: f64, pub int: bool, pub unit: &'static str, pub text: &'static str, pub law: &'static str }
    const fn par(name: &'static str, def: f64, min: f64, max: f64, int: bool, unit: &'static str, text: &'static str, law: &'static str) -> Par {
        Par { name, def, min, max, int, unit, text, law }
    }
    /// The parameters of the sum, the ruin problem and the catastrophe test, in the order of `PROBLEMS`.
    pub const PARAMS: [&[Par]; 3] = [
        &[par("n", 20.0, 1.0, 200.0, true, "jumps", "number of i.i.d. jumps in the sum", ""),
          par("b", 50.0, 0.0, 1e9, false, "loss units", "threshold b of the event S_n > b", ""),
          par("rate", 1.0, 1e-6, 1e6, false, "per loss unit", "rate λ of the exponential law", "exponential"),
          par("k", 0.5, 0.1, 0.95, false, "", "shape k < 1 of the Weibull law (a stretched exponential tail)", "weibull"),
          par("lambda", 0.5, 1e-6, 1e6, false, "loss units", "scale λ of the Weibull law", "weibull"),
          par("sigma", 0.5, 1e-6, 1e6, false, "loss units", "scale σ of the Pareto II law", "pareto2"),
          par("alpha", 1.5, 0.3, 20.0, false, "", "tail index α of the Pareto II law", "pareto2"),
          par("target", 1e-4, 1e-15, 0.5, false, "", "largest acceptable probability of the event", "")],
        &[par("lam", 1.0, 1e-4, 1e4, false, "claims per year", "Poisson rate λ of the claims", ""),
          par("c", 1.25, 1e-4, 1e6, false, "money units per year", "premium rate c", ""),
          par("u", 20.0, 0.0, 1e7, false, "money units", "initial capital u", ""),
          par("rate", 1.0, 1e-6, 1e6, false, "per money unit", "rate of the exponential claims (mean 1/rate)", "exponential"),
          par("sigma", 1.5, 1e-6, 1e6, false, "money units", "scale σ of the Pareto II claims", "pareto2"),
          par("alpha", 2.5, 1.05, 20.0, false, "", "tail index α > 1 of the Pareto II claims (the mean claim must be finite)", "pareto2"),
          par("target", 1e-3, 1e-15, 0.5, false, "", "largest acceptable probability of ruin", "")],
        &[par("T", 10.0, 0.5, 50.0, false, "years", "horizon T", ""),
          par("K", 3.0, 2.0, 5.0, true, "entities", "number of insurers that share each event", ""),
          par("u", 14.0, 0.01, 1e6, false, "money units", "initial capital u of each insurer", ""),
          par("c", 1.5, -1e6, 1e6, false, "money units per year", "premium income c of each insurer", ""),
          par("nu", 2.0, 0.01, 100.0, false, "events per year", "baseline rate ν of the Hawkes arrivals", ""),
          par("eta", 0.4, 0.0, 0.95, false, "", "branching ratio η = α/β of the Hawkes arrivals (0: Poisson arrivals)", ""),
          par("decay", 4.0, 0.01, 1000.0, false, "per year", "decay rate β of the Hawkes kernel", ""),
          par("rate", 1.0, 1e-6, 1e6, false, "per money unit", "rate of the exponential event loss (light-tailed regime)", "exponential"),
          par("k", 0.5, 0.1, 0.95, false, "", "Weibull shape k of the event loss", "weibull"),
          par("lambda", 0.5, 1e-6, 1e6, false, "money units", "Weibull scale λ of the event loss", "weibull"),
          par("sigma", 0.8, 1e-6, 1e6, false, "money units", "Pareto II scale σ of the event loss (heavy-tailed regime)", "pareto2"),
          par("alpha", 1.8, 0.3, 20.0, false, "", "Pareto II tail index α of the event loss", "pareto2"),
          par("M", 0.0, 0.0, 1e9, false, "money units", "truncation point of the event loss (0: no truncation)", ""),
          par("tau", 0.5, 0.0, 0.95, false, "", "Kendall's τ of the copula of the shares", ""),
          par("kappa", 0.3, 0.0, 5.0, false, "", "contagion: a default costs each other insurer κ u", ""),
          par("m", 2.0, 1.0, 5.0, true, "insurers", "number of defaults that makes a systemic ruin", ""),
          par("d", 6.0, 0.0, 1e6, false, "money units", "retention d of the catastrophe layer on the event loss", ""),
          par("l", 60.0, 0.0, 1e6, false, "money units", "limit ℓ of the layer: it pays min((S − d)⁺, ℓ)", ""),
          par("load", 0.6, 0.0, 10.0, false, "", "loading of the layer price over its expected cost", ""),
          par("extra", 4.0, 0.0, 1e6, false, "money units", "extra capital of each insurer in the third policy", ""),
          par("coc", 0.08, 0.0, 1.0, false, "per year", "cost of capital", ""),
          par("target", 0.01, 1e-12, 0.5, false, "", "largest acceptable probability of a systemic ruin within T", ""),
          par("xext", 40.0, 0.0, 1e9, false, "money units", "threshold of an extreme single event loss", ""),
          par("q", 0.99, 0.5, 0.9999, false, "", "level of the value at risk and the expected shortfall of the total loss", "")],
    ];
    /// The parameters that a problem and a law read, in the order of the page.
    pub fn params_for(problem: &str, law: &str) -> Vec<&'static Par> {
        PROBLEMS.iter().position(|p| *p == problem).map_or(vec![], |i| PARAMS[i].iter().filter(|x| x.law.is_empty() || x.law == law).collect())
    }

    /// A method setting: name, default (NaN: none), bounds, meaning and the method that reads it.
    pub struct Opt { pub name: &'static str, pub def: f64, pub min: f64, pub max: f64, pub text: &'static str, pub method: &'static str }
    const fn opt(name: &'static str, def: f64, min: f64, max: f64, text: &'static str, method: &'static str) -> Opt { Opt { name, def, min, max, text, method } }
    /// The method settings, in the order of `Opts`.
    pub const OPTIONS: [Opt; 8] = [
        opt("levels", f64::NAN, 1.0, 40.0, "number of stages of splitting (empty: from the reference value, about 0.1 for each stage)", "splitting"),
        opt("p0", 0.1, 0.05, 0.5, "conditional probability p0 of each level of subset simulation", "subset"),
        opt("spread", 1.0, 0.01, 4.0, "standard deviation of the component proposal of subset simulation", "subset"),
        opt("rho", 0.1, 0.01, 0.5, "fraction ρ of elite samples of the cross-entropy method", "ce"),
        opt("beta", 0.1, 0.01, 0.9, "weight β of the nominal law in the defensive mixture", "ais"),
        opt("iters", 4.0, 1.0, 6.0, "number of adaptation steps of adaptive importance sampling", "ais"),
        opt("tilt", 1.3, 1.0, 50.0, "mean of the tilted event loss, as a multiple of the nominal mean (catastrophe test)", "tilting"),
        opt("arrivals", 1.2, 0.2, 20.0, "baseline arrival rate under the tilt, as a multiple of ν (catastrophe test)", "tilting"),
    ];
    /// The method settings of a run, from `OPTIONS`.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub struct Opts { pub levels: Option<usize>, pub p0: f64, pub spread: f64, pub rho: f64, pub beta: f64, pub iters: usize, pub tilt: f64, pub arrivals: f64 }

    /// A rare-event record: the problem, the jump law, the copula of the shares (test only) and the parameters as text
    /// "name=value; …". An empty law or copula reads as the default (exponential, independent).
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Record { pub problem: String, pub law: String, pub copula: String, pub params: String }
    impl Record {
        /// A record from its four texts.
        pub fn new(problem: &str, law: &str, copula: &str, params: &str) -> Record { Record { problem: problem.into(), law: law.into(), copula: copula.into(), params: params.into() } }
    }
    /// The settings of a run: seed, method, comparison method ("none"), assumption failure, method settings as text,
    /// N = 2^size paths for each replication and the number of replications. An empty text reads as the default.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Settings { pub seed: u64, pub method: String, pub compare: String, pub failure: String, pub options: String, pub size: i64, pub reps: i64 }
    impl Default for Settings {
        /// The JS defaults are size 12 and 16 replications. A catastrophe test then takes seconds, so the notebook's
        /// default is 2^10 paths and 8 replications: natively at most 0.15 s for one method (cross-entropy on the test;
        /// about 0.45 s with a dependent copula), and still a relative error of a few per cent where there is a reference.
        fn default() -> Settings { Settings { seed: 1, method: "direct".into(), compare: "none".into(), failure: "none".into(), options: String::new(), size: 10, reps: 8 } }
    }
    impl Settings {
        /// The default settings with method m.
        pub fn method(m: &str) -> Settings { Settings { method: m.into(), ..Settings::default() } }
    }
    /// An example of rare.json: id, title, what to observe, and its record and settings (seed 1).
    #[derive(Clone, Debug)]
    pub struct Preset { pub id: String, pub title: String, pub observe: String, pub record: Record, pub settings: Settings }
    /// The examples of rare.json.
    pub fn presets(json: &str) -> Result<Vec<Preset>, String> {
        let v: Value = serde_json::from_str(json).map_err(|e| format!("The rare-event catalogue is not JSON: {e}."))?;
        let list = v["presets"].as_array().ok_or("The rare-event catalogue has no list of presets.")?;
        list.iter().map(|p| {
            let s = |k: &str| p[k].as_str().map(String::from).ok_or_else(|| format!("A preset has no text \"{k}\"."));
            let i = |k: &str| p[k].as_i64().ok_or_else(|| format!("A preset has no integer \"{k}\"."));
            Ok(Preset { id: s("id")?, title: s("title")?, observe: s("observe").unwrap_or_default(), record: Record { problem: s("problem")?, law: s("law")?, copula: s("copula")?, params: s("params")? },
                settings: Settings { seed: 1, method: s("method")?, compare: s("compare")?, failure: s("failure")?, options: s("options")?, size: i("size")?, reps: i("reps")? } })
        }).collect()
    }
    /// The record with one parameter changed, for a sweep.
    pub fn with_param(r: &Record, name: &str, v: f64) -> Record {
        let mut m = parse_params(&r.params).0;
        m.insert(name.into(), format!("{v}"));
        Record { params: m.iter().map(|(k, x)| format!("{k}={x}")).collect::<Vec<_>>().join("; "), ..r.clone() }
    }

    /* ---------- the jump laws ---------- */

    /// A positive jump law: Exp(rate), Weib(k, λ) or Par(α, σ) (Pareto II with location 0). The cumulative hazard
    /// H = −ln F̄ and its inverse are exact far in the tail, so a draw H⁻¹(E) with E standard exponential keeps its precision.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub enum Law { Exp(f64), Weib(f64, f64), Par(f64, f64) }
    impl Law {
        /// The cumulative hazard H(x) = −ln F̄(x).
        pub fn h(&self, x: f64) -> f64 {
            if x <= 0.0 { return 0.0 }
            match *self { Law::Exp(r) => r * x, Law::Weib(k, l) => (x / l).powf(k), Law::Par(a, s) => a * (x / s).ln_1p() }
        }
        /// The inverse of H: the jump with cumulative hazard h.
        pub fn hinv(&self, h: f64) -> f64 { match *self { Law::Exp(r) => h / r, Law::Weib(k, l) => l * h.powf(1.0 / k), Law::Par(a, s) => s * (h / a).exp_m1() } }
        /// The survival function F̄(x) = P(X > x).
        pub fn sf(&self, x: f64) -> f64 { if x <= 0.0 { 1.0 } else { (-self.h(x)).exp() } }
        /// ln f(x), −∞ outside the support.
        pub fn logpdf(&self, x: f64) -> f64 {
            if x < 0.0 || (x == 0.0 && matches!(self, Law::Weib(..))) { return -INF }
            match *self { Law::Exp(r) => r.ln() - r * x, Law::Weib(k, l) => (k / l).ln() + (k - 1.0) * (x / l).ln() - (x / l).powf(k), Law::Par(a, s) => (a / s).ln() - (a + 1.0) * (x / s).ln_1p() }
        }
        /// The mean, ∞ for a Pareto II law with α ≤ 1.
        pub fn mean(&self) -> f64 { match *self { Law::Exp(r) => 1.0 / r, Law::Weib(k, l) => l * lgam(1.0 + 1.0 / k).exp(), Law::Par(a, s) => if a > 1.0 { s / (a - 1.0) } else { INF } } }
        /// The median H⁻¹(ln 2).
        pub fn median(&self) -> f64 { self.hinv(LN_2) }
        /// The mean, or the median when the mean is infinite.
        pub fn typical(&self) -> f64 { let m = self.mean(); if m.is_finite() { m } else { self.median() } }
        /// The name of the law for the text.
        pub fn name(&self) -> &'static str { match self { Law::Exp(_) => "Exponential", Law::Weib(..) => "Weibull", Law::Par(..) => "Pareto II (Lomax)" } }
    }

    /* ---------- helpers ---------- */

    /// The uniforms of one replication (a `Src` stream), with the spare deviate of the polar method for normals.
    pub struct G { s: Src, spare: Option<f64> }
    impl G {
        /// The stream (seed, stream id, replication i).
        pub fn new(seed: u64, stream: u64, i: u64) -> G { G { s: Src::new(seed, stream, i, 0, false), spare: None } }
        fn u(&mut self) -> f64 { self.s.u() }
        fn e(&mut self) -> f64 { -self.s.u().ln() }
        fn n(&mut self) -> f64 {
            if let Some(z) = self.spare.take() { return z }
            loop {
                let (a, b) = (2.0 * self.u() - 1.0, 2.0 * self.u() - 1.0);
                let r = a * a + b * b;
                if r < 1.0 && r > 0.0 { let f = (-2.0 * r.ln() / r).sqrt(); self.spare = Some(b * f); return a * f }
            }
        }
        fn below(&mut self, m: usize) -> usize { ((self.u() * m as f64) as usize).min(m - 1) }
        /// Marsaglia and Tsang's gamma deviate with shape k (below 1 by Γ(k + 1) U^(1/k)).
        fn gamma(&mut self, k: f64) -> f64 {
            if k < 1.0 { return self.gamma(k + 1.0) * self.u().powf(1.0 / k) }
            let (d, c) = (k - 1.0 / 3.0, 1.0 / (9.0 * k - 3.0).sqrt());
            loop {
                let z = self.n();
                let v = (1.0 + c * z).powi(3);
                if v > 0.0 && self.u().ln() < 0.5 * z * z + d - d * v + d * v.ln() { return d * v }
            }
        }
    }
    /// A geometric count with P(K = k) = (1 − ρ) ρ^k, at most 10^6.
    fn geom(g: &mut G, rho: f64) -> usize { (g.u().ln() / rho.ln()).floor().min(1e6) as usize }

    /// Chebyshev coefficients of ln(erfc(y)/t) + y² in 2t − 1, t = 2/(2 + y): erfc to a relative 1e-13 for every y ≥ 0.
    const CH: [f64; 24] = [-1.3026537197817094, 0.6419697923564902, 0.01947647320418605, -0.009561514786808776, -0.0009465953444820062,
        0.0003668394978527275, 4.252332480708816e-05, -2.0278578112628974e-05, -1.6242900045454532e-06, 1.3036558353365576e-06,
        1.5626442025971194e-08, -8.523809627015244e-08, 6.5290545261390075e-09, 5.059343760005996e-09, -9.91364205622249e-10,
        -2.2736447600643324e-10, 9.646785161566907e-11, 2.3943185626561443e-12, -6.886127832636839e-12, 8.946043030173302e-13,
        3.129793465546241e-13, -1.1289845875664048e-13, 9.243514699323886e-16, 5.7426052167642785e-15];
    /// t = 2/(2 + y) and P(t) = ln(erfc(y)/t) + y² for y ≥ 0, by the Chebyshev series (Clenshaw).
    fn cheb(y: f64) -> (f64, f64) {
        let (t, mut b1, mut b2) = (2.0 / (2.0 + y), 0.0, 0.0);
        let u = 2.0 * t - 1.0;
        for &c in CH[1..].iter().rev() { (b1, b2) = (2.0 * u * b1 - b2 + c, b1) }
        (t, u * b1 - b2 + CH[0] / 2.0)
    }
    /// −ln Φ̄(z), the cumulative hazard of the standard normal law: fast, and exact far in the tail where Φ̄ underflows.
    fn nlsf(z: f64) -> f64 {
        if z < 0.0 { return -(-norm_sf(-z)).ln_1p() }
        let (y, (t, p)) = (z * FRAC_1_SQRT_2, cheb(z * FRAC_1_SQRT_2));
        LN_2 - t.ln() + y * y - p
    }
    /// P(Z > z) for a standard normal Z, accurate in the upper tail.
    pub fn norm_sf(z: f64) -> f64 {
        let (y, (t, p)) = (z.abs() * FRAC_1_SQRT_2, cheb(z.abs() * FRAC_1_SQRT_2));
        let q = t * (p - y * y).exp() / 2.0;
        if z >= 0.0 { q } else { 1.0 - q }
    }
    /// The upper 0.975 quantile of Student's t with df degrees of freedom, from the incomplete beta function.
    pub fn t975(df: f64) -> f64 {
        if df > 1e6 { return Z95 }
        let (mut lo, mut hi) = (0.0, 1.0);
        while hi - lo > 1e-15 { let m = (lo + hi) / 2.0; if m <= lo || m >= hi { break } if ibeta(m, df / 2.0, 0.5) < 0.05 { lo = m } else { hi = m } }
        let x = (lo + hi) / 2.0;
        (df * (1.0 - x) / x).sqrt()
    }
    /// ln(e^a + e^b) without overflow.
    fn log_add(a: f64, b: f64) -> f64 { if a == -INF { b } else if b == -INF { a } else { a.max(b) + (-(a - b).abs()).exp().ln_1p() } }
    /// A number as the JS `g4`: 4 significant digits, the exponent form below 1e-4 and from 1e7, ∞ or – when not finite.
    pub fn g4(v: f64) -> String {
        if !v.is_finite() { return (if v > 0.0 { "∞" } else { "–" }).into() }
        let a = v.abs();
        if a != 0.0 && (a < 1e-4 || a >= 1e7) { let s = format!("{v:.3e}"); return if s.contains("e-") { s } else { s.replace('e', "e+") } }
        let e = if a == 0.0 { 0 } else { a.log10().floor() as i32 };
        let v = if e > 3 { let p = 10f64.powi(e - 3); (v / p).round() * p } else { v };
        let s = format!("{:.*}", (3 - e).max(0) as usize, v);
        if s.contains('.') { s.trim_end_matches('0').trim_end_matches('.').into() } else { s }
    }
    /// A bound as JS prints a number.
    fn js(x: f64) -> String { if x != 0.0 && x.abs() < 1e-6 { format!("{x:e}") } else { format!("{x}") } }
    fn cut(s: &str, n: usize) -> String { s.chars().take(n).collect() }
    fn thousands(n: f64) -> String {
        let s = (n.round() as u64).to_string();
        s.chars().enumerate().fold(String::new(), |mut o, (i, ch)| { if i > 0 && (s.len() - i) % 3 == 0 { o.push(',') } o.push(ch); o })
    }
    /// "n=20; b=50" → the values by name, and an error for each part that is not name = value.
    pub fn parse_params(text: &str) -> (BTreeMap<String, String>, Vec<String>) {
        let (mut v, mut e) = (BTreeMap::new(), vec![]);
        for part in text.split(';').map(str::trim).filter(|x| !x.is_empty()) {
            let name = |k: &str| k.chars().next().is_some_and(|c| c.is_ascii_alphabetic()) && k.chars().all(|c| c.is_ascii_alphanumeric() || c == '_');
            match part.split_once('=').map(|(k, x)| (k.trim_end(), x.trim())) {
                Some((k, x)) if name(k) && !x.is_empty() => { v.insert(k.to_string(), x.to_string()); }
                _ => e.push(format!("\"{}\" is not name = value.", cut(part, 30))),
            }
        }
        (v, e)
    }

    /* ---------- checking and compiling ---------- */

    /// The problem of a compiled record.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub enum Pb { Sum, Ruin, Cat }
    /// An estimated quantity: name, probability or expectation, the policy it belongs to (test) and its label.
    #[derive(Clone, Debug)]
    pub struct Quantity { pub name: &'static str, pub prob: bool, pub policy: Option<usize>, pub label: String }
    /// A policy of the test: capital u and premium c of each insurer, the layer or not, and its cost over T.
    #[derive(Clone, Debug)]
    pub struct Policy { pub id: &'static str, pub label: String, pub u: f64, pub c: f64, pub layer: bool, pub cost: f64, pub cost_text: String }
    /// The exact quantities of the test: E N(T), the mean event loss, the expected recoveries of the layer for each event,
    /// its price, the policies, the grid of the total loss, the safety loading and the expected loss of each insurer a year.
    #[derive(Clone, Debug)]
    pub struct Cat {
        pub en: f64, pub mean_s: f64, pub ceded: f64, pub price: f64, pub policies: Vec<Policy>, pub grid: Vec<f64>, pub loading: Option<f64>, pub expected_loss: f64,
        /// The truncation (M, F̄(M), F(M)) of the event loss.
        pub trunc: Option<(f64, f64, f64)>,
        t: f64, kk: usize, nu: f64, eta: f64, decay: f64, tau: f64, kappa: f64, m: f64, d: f64, l: f64, xext: f64, cop: usize, sev: Law,
    }
    /// A checked problem with its settings. `j` is the jump law of the walk (the sum's jump, or the integrated tail of the
    /// claims for the ruin problem) or the event loss of the test; `refused[k]` says why method k does not apply, or "".
    #[derive(Clone, Debug)]
    pub struct Prob {
        pub pb: Pb, pub problem: &'static str, pub law: &'static str, pub copula: &'static str, pub failure: &'static str,
        pub p: BTreeMap<&'static str, f64>, pub o: Opts, pub paths: usize, pub reps: usize, pub seed: u64,
        pub methods: Vec<&'static str>, pub refused: Vec<String>, pub quantities: Vec<Quantity>,
        pub j: Law, pub claim: Option<Law>, pub x0: f64, pub jumps: usize, pub rho: f64, pub kmax: usize, pub kmax_mass: f64, pub guess: f64, pub cat: Option<Cat>,
    }
    impl Prob {
        /// The value of a parameter, NaN when the problem has no such parameter.
        pub fn par(&self, k: &str) -> f64 { self.p.get(k).copied().unwrap_or(f64::NAN) }
    }

    fn find(list: &[&'static str], x: &str, def: &'static str) -> Option<&'static str> { let x = if x.is_empty() { def } else { x }; list.iter().copied().find(|y| *y == x) }
    fn or<'a>(x: &'a str, def: &'a str) -> &'a str { if x.is_empty() { def } else { x } }

    /// Check a record and its settings, with the limits and the messages of the JS, and compile them. A method that does
    /// not apply is not an error: it carries its reason in `refused`, and its runs return that reason.
    pub fn prepare(r: &Record, s: &Settings) -> Result<Prob, String> {
        let mut e: Vec<String> = vec![];
        let Some(pi) = PROBLEMS.iter().position(|x| *x == r.problem) else { return Err(format!("\"{}\" is not a problem of this group (sum, ruin, cat).", cut(&r.problem, 20))) };
        let pb = [Pb::Sum, Pb::Ruin, Pb::Cat][pi];
        let law = find(&LAWS, &r.law, "exponential");
        if law.is_none() { e.push(format!("\"{}\" is not a jump law of this group (exponential, weibull, pareto2).", cut(&r.law, 20))) }
        if pb == Pb::Ruin && law == Some("weibull") { e.push("The ruin problem reads the exponential or the Pareto II claims: the page has the integrated-tail law of these two only.".into()) }
        let copula = find(&COPULAS, &r.copula, "independent");
        if pb == Pb::Cat && copula.is_none() { e.push(format!("\"{}\" is not a copula of the test (independent, gaussian, gumbel, clayton).", cut(&r.copula, 20))) }
        let (given, pe) = parse_params(&r.params);
        e.extend(pe);
        for k in given.keys() { if !PARAMS[pi].iter().any(|x| x.name == k) { e.push(format!("\"{k}\" is not a parameter of the {} problem.", PROBLEMS[pi])) } }
        let mut p = BTreeMap::new();
        for x in PARAMS[pi].iter().filter(|x| x.law.is_empty() || Some(x.law) == law) {
            let raw = given.get(x.name).map(String::as_str);
            match raw.map_or(Some(x.def), |t| t.parse::<f64>().ok()) {
                Some(v) if v.is_finite() && v >= x.min && v <= x.max && !(x.int && v.fract() != 0.0) => { p.insert(x.name, v); }
                _ => e.push(format!("{} = {} is not {} in [{}, {}] ({}).", x.name, cut(raw.unwrap_or("undefined"), 20), if x.int { "an integer" } else { "a number" }, js(x.min), js(x.max), x.text)),
            }
        }
        let (given, oe) = parse_params(&s.options);
        e.extend(oe.iter().map(|x| format!("Method settings: {x}")));
        let mut ov = OPTIONS.map(|x| x.def);
        for (i, x) in OPTIONS.iter().enumerate() {
            let Some(raw) = given.get(x.name) else { continue };
            match raw.parse::<f64>() {
                Ok(v) if v.is_finite() && v >= x.min && v <= x.max => ov[i] = if i == 0 { v.round() } else { v },
                _ => e.push(format!("Method settings: {} = {} is not a number in [{}, {}] ({}).", x.name, cut(raw, 20), js(x.min), js(x.max), x.text)),
            }
        }
        for k in given.keys() { if !OPTIONS.iter().any(|x| x.name == k) { e.push(format!("Method settings: \"{k}\" is not a setting (levels, p0, spread, rho, beta, iters, tilt, arrivals).")) } }
        let method = find(&METHODS, &s.method, "direct");
        if method.is_none() { e.push(format!("\"{}\" is not a rare-event method (direct, tilting, splitting, subset, ais, ce).", cut(&s.method, 20))) }
        let compare = or(&s.compare, "none");
        let cmp = find(&METHODS, compare, "none");
        if compare != "none" && cmp.is_none() { e.push(format!("\"{}\" is not a rare-event method.", cut(compare, 20))) }
        let failure = find(&FAILURES, &s.failure, "none");
        if failure.is_none() { e.push(format!("\"{}\" is not an assumption failure of this group.", cut(&s.failure, 20))) }
        if !(8..=16).contains(&s.size) { e.push(format!("The sample size 2^{} is outside 2^8 to 2^16.", s.size)) }
        if !(2..=64).contains(&s.reps) { e.push(format!("The number of replications {} is outside 2 to 64.", s.reps)) }
        let (Some(law), Some(method), Some(failure), true) = (law, method, failure, e.is_empty()) else { return Err(e.join("\n")) };

        let g = |k: &str| p.get(k).copied().unwrap_or(f64::NAN);
        let jump = match law { "exponential" => Law::Exp(g("rate")), "weibull" => Law::Weib(g("k"), g("lambda")), _ => Law::Par(g("alpha"), g("sigma")) };
        let o = Opts { levels: (!ov[0].is_nan()).then(|| ov[0] as usize), p0: ov[1], spread: ov[2], rho: ov[3], beta: ov[4], iters: ov[5].ceil() as usize, tilt: ov[6], arrivals: ov[7] };
        let (mut j, mut claim, mut x0, mut rho, mut cat) = (jump, None, 0.0, 0.0, None);
        match pb {
            Pb::Sum => x0 = g("b"),
            Pb::Ruin => {
                rho = g("lam") * jump.mean() / g("c");
                if !(rho < 1.0) { return Err(format!("The net profit condition fails: ρ = λ E[X] / c = {} ≥ 1, so ψ(u) = 1 for every u. Raise the premium c above λ E[X] = {}.", g4(rho), g4(g("lam") * jump.mean()))) }
                (claim, x0) = (Some(jump), g("u"));
                if let Law::Par(a, s) = jump { j = Law::Par(a - 1.0, s) }
            }
            Pb::Cat => {
                let trunc = (g("M") > 0.0).then(|| (g("M"), jump.sf(g("M")), 1.0 - jump.sf(g("M"))));
                if trunc.is_some_and(|t| !(t.2 > 0.0)) { return Err(format!("The truncation point M = {} leaves no mass below it.", js(g("M")))) }
                if g("m") > g("K") { return Err(format!("A systemic ruin needs m = {} defaults, more than the K = {} insurers.", g("m"), g("K"))) }
                cat = Some(cat_setup(&g, jump, trunc, COPULAS.iter().position(|x| Some(*x) == copula).unwrap_or(0)));
            }
        }
        let mut methods = vec![method];
        if let Some(m) = cmp.filter(|m| *m != method) { methods.push(m) }
        let mut c = Prob { pb, problem: PROBLEMS[pi], law, copula: if pb == Pb::Cat { copula.unwrap_or("independent") } else { "" }, failure, o, paths: 1 << s.size, reps: s.reps as usize, seed: s.seed,
            methods, refused: vec![], quantities: vec![], j, claim, x0, jumps: g("n") as usize, rho, kmax: 0, kmax_mass: 0.0, guess: 1e-3, cat, p: BTreeMap::new() };
        c.p = p;
        c.guess = guess(&c);
        if pb == Pb::Ruin {
            c.kmax = ((1e-12f64.min(1e-6 * c.guess).ln() / c.rho.ln()).ceil() as usize).min(KMAX);
            c.kmax_mass = c.rho.powi(c.kmax as i32 + 1);
        }
        c.refused = c.methods.iter().map(|m| refusal(&c, m)).collect();
        c.quantities = quantities(&c);
        Ok(c)
    }

    /// Why a method does not apply to a compiled problem, or "" when it applies.
    pub fn refusal(c: &Prob, m: &str) -> String {
        let j = c.j;
        if m == "tilting" && !matches!(j, Law::Exp(_)) {
            if let Some((mm, _, _)) = c.cat.as_ref().and_then(|k| k.trunc) {
                return format!("The truncation at M = {} makes E exp(θS) finite, but the page has no exact sampler for the tilted truncated {} law. Use the cross-entropy method or adaptive importance sampling.", g4(mm), j.name());
            }
            let (what, tail) = match j {
                Law::Weib(k, _) => (format!("with shape k = {} < 1", g4(k)), "Every moment E X^r is finite, but finite moments do not give an exponential moment.".to_string()),
                Law::Par(a, _) | Law::Exp(a) => (format!("with tail index α = {}", g4(a)), format!("Only the moments of order r < {} exist.", g4(a))),
            };
            return format!("Exponential tilting needs E exp(θX) < ∞ for some θ > 0. For the {} law {what}, E exp(θX) = ∞ for every θ > 0, so no tilted law exists. {tail}", j.name());
        }
        if m == "subset" && c.pb == Pb::Cat { return "Subset simulation needs a fixed number of random inputs. In the catastrophe test, the number of events is random. Thus the page offers subset simulation only for the sum and the ruin problems.".into() }
        if m == "subset" && c.pb == Pb::Ruin && c.kmax_mass > 1e-6 * c.guess {
            return format!("Subset simulation needs a fixed number of ladder heights. The page stops at the cap of {KMAX} ladder heights. With ρ = {}, the mass ρ^{} = {} above the cap is not small next to the expected ψ(u) ≈ {}. Thus the estimate would be too low. Use splitting, the cross-entropy method or adaptive importance sampling.", g4(c.rho), KMAX + 1, g4(c.kmax_mass), g4(c.guess));
        }
        String::new()
    }

    /// A first value of the probability, to set the levels of splitting: the reference, the asymptotic or a rough bound.
    fn guess(c: &Prob) -> f64 {
        match (c.pb, c.j) {
            (Pb::Sum, Law::Exp(r)) => erlang_sf(c.jumps as f64, c.x0, r),
            (Pb::Sum, j) => (c.jumps as f64 * j.sf(c.x0)).clamp(1e-300, 1.0),
            (Pb::Ruin, Law::Exp(r)) => c.rho * (-(1.0 - c.rho) * r * c.x0).exp(),
            (Pb::Ruin, j) => (c.rho / (1.0 - c.rho) * j.sf(c.x0)).min(1.0),
            _ => 1e-3,
        }
    }

    fn quantities(c: &Prob) -> Vec<Quantity> {
        let q = |name, prob, policy, label: String| Quantity { name, prob, policy, label };
        let Some(k) = &c.cat else {
            return vec![if c.pb == Pb::Sum { q("tail", true, None, format!("P(S_n > {})", g4(c.x0))) } else { q("ruin", true, None, format!("ψ({})", g4(c.x0))) }];
        };
        let mut out: Vec<Quantity> = (0..3).flat_map(|a| [q("systemic", true, Some(a), format!("P(at least {} defaults by T)", k.m)), q("any", true, Some(a), "P(at least one default by T)".into()),
            q("defaults", false, Some(a), "E[number of defaults by T]".into())]).collect();
        out.push(q("extreme", true, None, format!("P(largest event loss > {})", g4(k.xext))));
        out
    }

    /* ---------- references ---------- */

    /// The Erlang tail P(S_n > b) of n exponential jumps with rate r: Q(n, rb).
    pub fn erlang_sf(n: f64, b: f64, r: f64) -> f64 { if b <= 0.0 { 1.0 } else { gamma_pq(n, r * b).1 } }
    /// The large deviations of a sum of n exponential jumps above b = na: the rate function I(a), the tilt θ*, the Chernoff
    /// bound and the Bahadur–Rao approximation (None when a ≤ μ: then the event is not a large deviation).
    #[derive(Clone, Debug)]
    pub struct Ldp { pub a: f64, pub mu: f64, pub i: f64, pub theta: f64, pub chernoff: f64, pub bahadur_rao: Option<f64> }
    /// The large deviations of n exponential jumps with the given rate above b.
    pub fn ldp_exponential(n: f64, b: f64, rate: f64) -> Ldp {
        let (mu, a) = (1.0 / rate, b / n);
        if !(a > mu) { return Ldp { a, mu, i: 0.0, theta: 0.0, chernoff: 1.0, bahadur_rao: None } }
        let (i, theta) = (a / mu - 1.0 - (a / mu).ln(), 1.0 / mu - 1.0 / a);
        Ldp { a, mu, i, theta, chernoff: (-n * i).exp(), bahadur_rao: Some((-n * i).exp() / (theta * a * (2.0 * PI * n).sqrt())) }
    }
    /// The Asmussen–Kroese estimator of P(J_1 + … + J_K > x), K = n or geometric with parameter ρ when n is None:
    /// K F̄(max(M_{K−1}, x − S_{K−1})), unbiased with bounded relative error for a regularly varying tail. (estimate, s.e.)
    pub fn asmussen_kroese(j: Law, n: Option<usize>, rho: f64, x: f64, m: usize, seed: u64) -> (f64, f64) {
        let mut g = G::new(seed, 999, 0);
        let (mut mean, mut m2) = (0.0, 0.0);
        for i in 0..m {
            let (k, mut s, mut mx) = (n.unwrap_or_else(|| geom(&mut g, rho)), 0.0, 0.0f64);
            for _ in 1..k { let v = j.hinv(g.e()); s += v; mx = mx.max(v) }
            let z = if k > 0 { k as f64 * j.sf(mx.max(x - s)) } else { 0.0 };
            let d = z - mean;
            mean += d / (i + 1) as f64;
            m2 += d * (z - mean);
        }
        (mean, (m2 / (m - 1) as f64 / m as f64).sqrt())
    }
    /// The reference of a problem: its kind ("exact", "numerical" or "none"), value, interval (numerical), how it is
    /// obtained, the large deviations (light sum), the asymptotic, the adjustment coefficient and Lundberg bound (light
    /// ruin), and the tail plot: the abscissae `x`, named curves (NaN where a curve has no value), and the numerical points.
    #[derive(Clone, Debug)]
    pub struct Reference {
        pub kind: &'static str, pub value: Option<f64>, pub interval: Option<(f64, f64)>, pub how: String, pub ldp: Option<Ldp>, pub asymptotic: Option<(f64, String)>,
        pub adjustment: Option<f64>, pub lundberg: Option<f64>, pub x: Vec<f64>, pub curves: Vec<(&'static str, Vec<f64>)>, pub numerical: Option<(Vec<f64>, Vec<f64>)>,
    }
    /// 31 points from a low value to beyond x, for a tail plot.
    fn grid_around(x: f64, centre: f64) -> Vec<f64> {
        let lo = (centre.min(x) * 0.5).max(1e-9);
        let hi = (x * 1.6).max(lo * 4.0);
        (0..31).map(|i| lo + (hi - lo) * i as f64 / 30.0).collect()
    }
    /// The reference of a compiled problem; for a heavy-tailed walk, 65,536 Asmussen–Kroese samples and 11 × 8,192 for the plot.
    pub fn reference(c: &Prob) -> Reference {
        let mut r = Reference { kind: "none", value: None, interval: None, how: "The catastrophe test has no exact reference for the probabilities. The methods check each other. The expected number of events, the layer price and the costs are exact.".into(),
            ldp: None, asymptotic: None, adjustment: None, lundberg: None, x: vec![], curves: vec![], numerical: None };
        if c.pb == Pb::Cat { return r }
        let (j, u, sum) = (c.j, c.x0, c.pb == Pb::Sum);
        let n = if sum { Some(c.jumps) } else { None };
        if let Law::Exp(rate) = j {
            r.kind = "exact";
            if sum {
                let k = c.jumps as f64;
                r.x = grid_around(u, k * j.mean());
                (r.value, r.ldp) = (Some(erlang_sf(k, u, rate)), Some(ldp_exponential(k, u, rate)));
                r.how = "the Erlang tail Q(n, λb), exact up to the rounding of the incomplete gamma function".into();
                let l: Vec<Ldp> = r.x.iter().map(|&x| ldp_exponential(k, x, rate)).collect();
                r.curves = vec![("exact", r.x.iter().map(|&x| erlang_sf(k, x, rate)).collect()), ("chernoff", l.iter().map(|l| l.chernoff).collect()), ("bahadur_rao", l.iter().map(|l| l.bahadur_rao.unwrap_or(f64::NAN)).collect())];
            } else {
                let (rho, rr) = (c.rho, (1.0 - c.rho) * rate);
                r.x = grid_around(u, j.mean() * rho / (1.0 - rho));
                (r.value, r.adjustment, r.lundberg) = (Some(rho * (-rr * u).exp()), Some(rr), Some((-rr * u).exp()));
                r.how = "ψ(u) = ρ exp(−(1 − ρ)u/μ), the exact ruin probability for exponential claims".into();
                r.curves = vec![("exact", r.x.iter().map(|&x| rho * (-rr * x).exp()).collect()), ("lundberg", r.x.iter().map(|&x| (-rr * x).exp()).collect())];
            }
            return r;
        }
        let (est, se) = asmussen_kroese(j, n, c.rho, u, 1 << 16, 7777);
        let f = if sum { c.jumps as f64 } else { c.rho / (1.0 - c.rho) };
        r.x = grid_around(u, if sum { c.jumps as f64 * j.typical() } else { j.median() * f });
        let pts: Vec<f64> = r.x.iter().step_by(3).copied().collect();
        (r.kind, r.value, r.interval) = ("numerical", Some(est), Some((est - Z95 * se, est + Z95 * se)));
        r.how = format!("{} with 65,536 samples and its own seed; 95 % interval {} to {}", if sum { "the Asmussen–Kroese conditional Monte Carlo estimator" } else { "the Pollaczek–Khinchine sum by the Asmussen–Kroese estimator" }, g4(est - Z95 * se), g4(est + Z95 * se));
        r.asymptotic = Some((f * j.sf(u), if sum { "n F̄(b): the one-big-jump asymptotic of a subexponential law, a limit as b → ∞, not a value at this b" } else { "ρ/(1 − ρ) F̄_I(u): the Embrechts–Veraverbeke asymptotic of subexponential claims, a limit as u → ∞" }.into()));
        r.curves = vec![("asymptotic", r.x.iter().map(|&x| f * j.sf(x)).collect())];
        r.numerical = Some((pts.clone(), pts.iter().map(|&x| asmussen_kroese(j, n, c.rho, x, 1 << 13, 7778).0).collect()));
        r
    }

    /* ---------- replications, accumulators and diagnostics ---------- */

    /// A proposal: hazard-rate twist r, exponential light family with mean v, geometric parameter ρ, baseline rate ν,
    /// exponential tilt to mean `tilt` (test), or the defensive mixture (β, r).
    #[derive(Clone, Copy, Debug, Default, PartialEq)]
    pub struct Q { pub r: Option<f64>, pub v: Option<f64>, pub rho: Option<f64>, pub nu: Option<f64>, pub tilt: Option<f64>, pub mix: Option<(f64, f64)> }
    /// One step of the cross-entropy method (its level γ and proposal) or of adaptive importance sampling (paths in the event and r).
    #[derive(Clone, Copy, Debug, Default)]
    pub struct Step { pub gamma: Option<f64>, pub hits: Option<usize>, pub q: Q }
    /// The i.i.d. terms Y_i of one replication: count, sum, sum of squares, number and largest of the positive terms.
    #[derive(Clone, Copy, Debug, Default)]
    pub struct Acc { pub n: f64, pub sum: f64, pub sumsq: f64, pub hits: f64, pub max: f64 }
    impl Acc {
        fn add(&mut self, y: f64) { self.n += 1.0; self.sum += y; self.sumsq += y * y; if y > 0.0 { self.hits += 1.0; self.max = self.max.max(y) } }
        fn merge(&mut self, o: &Acc) { (self.n, self.sum, self.sumsq, self.hits, self.max) = (self.n + o.n, self.sum + o.sum, self.sumsq + o.sumsq, self.hits + o.hits, self.max.max(o.max)) }
        /// The effective sample size (Σ Y)² / Σ Y² of the weights: a diagnostic, not a proof.
        fn ess(&self) -> Option<f64> { (self.sumsq > 0.0).then(|| self.sum * self.sum / self.sumsq) }
        fn share(&self) -> Option<f64> { (self.sum > 0.0).then(|| self.max / self.sum) }
    }
    /// The diagnostics of one replication; each method fills its fields. Splitting: stages, levels, fractions of success and
    /// of entrants already past the level; subset simulation: thresholds (in `levels`), fractions and acceptance rates;
    /// cross-entropy and adaptive importance sampling: the steps; the test's multistage methods: one Diag for each policy.
    #[derive(Clone, Debug, Default)]
    pub struct Diag {
        pub hits: Option<f64>, pub ess: Option<f64>, pub max_share: Option<f64>,
        pub theta: Option<f64>, pub tilted_mean: Option<f64>, pub tilted_rate: Option<f64>, pub mean_weight: Option<f64>, pub ess_q: Vec<Option<f64>>,
        pub stages: usize, pub stages_run: Option<usize>, pub levels: Vec<f64>, pub fractions: Vec<f64>, pub early: Vec<f64>,
        pub accept: Option<f64>, pub comp_accept: Option<f64>, pub spread: Option<f64>, pub p0: Option<f64>,
        pub path: Vec<Step>, pub last: Option<Q>, pub reached: Option<bool>, pub family: &'static str, pub infinite_variance: bool,
        pub beta: Option<f64>, pub bound: Option<f64>, pub adapted: Option<bool>, pub events: Option<f64>, pub policies: Vec<Diag>,
    }
    /// One replication of one method: an estimate for each quantity, the i.i.d. terms (fixed proposals), the work, the
    /// weighted grid of the total loss (exceedances, excesses, paths) and the diagnostics.
    #[derive(Clone, Debug)]
    pub struct Rep { pub est: Vec<Option<f64>>, pub iid: Option<Vec<Acc>>, pub work: f64, pub grid: Option<(Vec<f64>, Vec<f64>, f64)>, pub diag: Diag }
    fn one(est: f64, work: f64, diag: Diag) -> Rep { Rep { est: vec![Some(est)], iid: None, work, grid: None, diag } }
    fn pooled(a: Acc, work: f64, diag: Diag) -> Rep { Rep { iid: Some(vec![a]), ..one(a.sum / a.n, work, diag) } }
    fn wdiag(a: &Acc) -> Diag { Diag { hits: Some(a.hits), ess: a.ess(), max_share: a.share(), ..Diag::default() } }

    /// Replication b of the method k of a run, from its own stream (seed, problem and method, b): it does not depend on
    /// the other replications. An error (subset simulation stalls, a path with too many events) is the method's error.
    pub fn block(c: &Prob, k: usize, b: usize) -> Result<Rep, String> {
        let Some(&m) = c.methods.get(k) else { return Err(format!("The run has no method {k}.")) };
        let mut g = G::new(c.seed, 1 + 10 * c.pb as u64 + METHODS.iter().position(|x| *x == m).unwrap_or(0) as u64, b as u64);
        match &c.cat { Some(cat) => cat_rep(c, cat, m, &mut g), None => walk_rep(c, m, &mut g) }
    }

    /* ---------- the walk problems: the sum and the Pollaczek–Khinchine sum ---------- */

    /// A path of a walk: the sum, log f/g, the count K, the sum of the nominal cumulative hazards and the work.
    struct Path { s: f64, lr: f64, k: f64, sum_h: f64, work: f64 }
    /// One path under a proposal: K jumps (n, or geometric), each by a hazard-rate twist r (r = 1: nominal) or from the
    /// exponential light family with mean v.
    fn walk_path(c: &Prob, g: &mut G, q: &Q) -> Path {
        let (j, ruin) = (c.j, c.pb == Pb::Ruin);
        let (k, mut lr) = if !ruin { (c.jumps, 0.0) } else {
            // No cap at kmax here: a cap would change the proposal law and make the likelihood ratio wrong.
            let rp = q.rho.unwrap_or(c.rho);
            let k = geom(g, rp);
            (k, if rp != c.rho { (-c.rho).ln_1p() + k as f64 * c.rho.ln() - (-rp).ln_1p() - k as f64 * rp.ln() } else { 0.0 })
        };
        let (mut s, mut sh) = (0.0, 0.0);
        if let Some(v) = q.v {
            for _ in 0..k { let x = v * g.e(); s += x; sh += j.h(x); lr += j.logpdf(x) + v.ln() + x / v }
        } else {
            let r = q.r.unwrap_or(1.0);
            for _ in 0..k { let h = g.e() / r; s += j.hinv(h); sh += h }
            if r != 1.0 { lr += -(1.0 - r) * sh - k as f64 * r.ln() }
        }
        Path { s, lr, k: k as f64, sum_h: sh, work: (k + ruin as usize) as f64 }
    }
    fn walk_rep(c: &Prob, m: &str, g: &mut G) -> Result<Rep, String> {
        Ok(match m {
            "direct" => {
                let (mut a, mut work) = (Acc::default(), 0.0);
                for _ in 0..c.paths {
                    let k = if c.pb == Pb::Sum { c.jumps } else { work += 1.0; geom(g, c.rho) };
                    // Positive jumps: the sum passes x0 for good once it does, so the path can stop there.
                    let (mut s, mut i) = (0.0, 0);
                    while i < k && s <= c.x0 { s += c.j.hinv(g.e()); work += 1.0; i += 1 }
                    a.add(if s > c.x0 { 1.0 } else { 0.0 });
                }
                pooled(a, work, Diag { hits: Some(a.hits), ..Diag::default() })
            }
            "tilting" => walk_tilt(c, g),
            "splitting" => walk_split(c, g),
            "subset" => walk_subset(c, g)?,
            "ce" => walk_ce(c, g)?,
            _ => walk_ais(c, g)?,
        })
    }

    /// Exponential tilting: the sum with θ* from κ'(θ*) = b/n; for the ruin problem Siegmund's algorithm, θ = R = (1 − ρ)/μ:
    /// the tilted ladder heights are exponential with mean μ/ρ, the walk passes u surely, and exp(−R S_τ) ≤ exp(−R u).
    fn walk_tilt(c: &Prob, g: &mut G) -> Rep {
        let (r, mut a, mut work) = (1.0 / c.j.mean(), Acc::default(), 0.0);
        let th = if c.pb == Pb::Sum { ldp_exponential(c.jumps as f64, c.x0, r).theta } else { (1.0 - c.rho) * r };
        let mt = 1.0 / (r - th);
        if c.pb == Pb::Sum {
            let kk = c.jumps as f64 * -(-th / r).ln_1p();
            for _ in 0..c.paths { let s: f64 = (0..c.jumps).map(|_| mt * g.e()).sum(); work += c.jumps as f64; a.add(if s > c.x0 { (kk - th * s).exp() } else { 0.0 }) }
        } else {
            for _ in 0..c.paths { let mut s = 0.0; while s <= c.x0 { s += mt * g.e(); work += 1.0 } a.add((-th * s).exp()) }
        }
        pooled(a, work, Diag { theta: Some(th), tilted_mean: Some(mt), ..wdiag(&a) })
    }

    /// The L − 1 inner levels of splitting: L stages of about 0.1 each from the guess, unless set.
    fn split_levels(c: &Prob, h0: f64, top: f64) -> Vec<f64> {
        let l = c.o.levels.unwrap_or_else(|| (c.guess.max(1e-300).ln() / 0.1f64.ln()).round().clamp(1.0, 40.0) as usize);
        if !(top > h0) { return vec![] }
        (1..l).map(|j| h0 + j as f64 * (top - h0) / l as f64).collect()
    }
    /// Fixed-effort multilevel splitting: stage j starts N paths from the successes of stage j − 1 (drawn with replacement)
    /// and runs each until `hit` (inner level, or None: the event) or the end of the path (`step` returns false after the
    /// last change); the product of the fractions is unbiased. Diagnostics: fractions, and entrants already past the level.
    fn fixed_effort<S: Copy>(g: &mut G, n: usize, levels: Vec<f64>, s0: S, hit: impl Fn(&mut S, Option<f64>) -> bool, mut step: impl FnMut(&mut G, &mut S) -> bool) -> (f64, Diag) {
        let (l, nf) = (levels.len() + 1, n as f64);
        let (mut starts, mut est, mut d) = (vec![s0], 1.0, Diag { stages: l, ..Diag::default() });
        for j in 0..l {
            let lev = levels.get(j).copied();
            let (mut succ, mut once) = (vec![], 0.0);
            for _ in 0..n {
                let mut st = starts[if j == 0 { 0 } else { g.below(starts.len()) }];
                if hit(&mut st, lev) { succ.push(st); once += 1.0; continue }
                loop { let more = step(g, &mut st); if hit(&mut st, lev) { succ.push(st); break } if !more { break } }
            }
            let f = succ.len() as f64 / nf;
            (est, d.stages_run) = (est * f, Some(j + 1));
            d.fractions.push(f);
            d.early.push(once / nf);
            if succ.is_empty() { est = 0.0; break }
            starts = succ;
        }
        d.levels = levels;
        (est, d)
    }
    /// Splitting of a walk: the importance of the sum is h(k, s) = s + (n − k) m (m the mean, or the median), of the
    /// ruin problem h = s. With a heavy tail one big jump passes several levels at once, and splitting gains little.
    fn walk_split(c: &Prob, g: &mut G) -> Rep {
        let (sum, mut work) = (c.pb == Pb::Sum, 0.0);
        let m = if sum { c.j.typical() } else { 0.0 };
        let h = |k: f64, s: f64| if sum { s + (c.jumps as f64 - k) * m } else { s };
        let hit = |st: &mut (f64, f64), lev: Option<f64>| lev.map_or(st.1 > c.x0, |l| h(st.0, st.1) > l);
        let (est, d) = fixed_effort(g, c.paths, split_levels(c, h(0.0, 0.0), c.x0), (0.0, 0.0), hit, |g, st| {
            if sum { if st.0 >= c.jumps as f64 { return false } } else { work += 1.0; if g.u() >= c.rho { return false } }
            (*st, work) = ((st.0 + 1.0, st.1 + c.j.hinv(g.e())), work + 1.0);
            true
        });
        one(est, work, d)
    }

    /// Subset simulation in standard normal space: z_i maps to the jump H⁻¹(−ln Φ̄(z_i)), and z_0 to the geometric count of
    /// the ruin problem (cut at kmax). Each level keeps the N p0 samples with the largest sum as seeds and grows each into a
    /// chain by the modified Metropolis algorithm; the estimate is the product of the fractions, with a bias of order 1/N.
    fn walk_subset(c: &Prob, g: &mut G) -> Result<Rep, String> {
        let (n, sum) = (c.paths, c.pb == Pb::Sum);
        let (p0, spread) = (c.o.p0, if c.failure == "small_spread" { 0.05 } else { c.o.spread });
        let (d, off) = if sum { (c.jumps, 0) } else { (c.kmax + 1, 1) };
        let mut work = 0.0;
        // The sum of the sample, with the jumps that are already mapped kept in x (NaN: not mapped).
        let eval = |z: &[f64], x: &mut [f64], work: &mut f64| {
            let k = if sum { c.jumps } else { ((-nlsf(z[0]) / c.rho.ln()).floor() as usize).min(c.kmax) };
            let mut s = 0.0;
            for i in off..off + k { if x[i].is_nan() { x[i] = c.j.hinv(nlsf(z[i])); *work += 1.0 } s += x[i] }
            s
        };
        let mut z: Vec<f64> = (0..n * d).map(|_| g.n()).collect();
        let mut x = vec![f64::NAN; n * d];
        let mut gv: Vec<f64> = (0..n).map(|i| eval(&z[i * d..(i + 1) * d], &mut x[i * d..(i + 1) * d], &mut work)).collect();
        let (mut est, mut moves, mut tries, mut comps, mut ctries) = (1.0, 0.0, 0.0, 0.0, 0.0);
        let (mut th, mut fr) = (vec![], vec![]);
        let nc = ((n as f64 * p0).round() as usize).max(1);
        for level in 0.. {
            if level >= 60 { return Err("Subset simulation did not reach the event after 60 levels.".into()) }
            let mut sorted = gv.clone();
            sorted.sort_by(|a, b| b.total_cmp(a));
            let gamma = (sorted[nc - 1] + sorted[nc.min(n - 1)]) / 2.0;
            // The last level is x0, with the fraction of the samples past it.
            let lev = gamma.min(c.x0);
            let seeds: Vec<usize> = (0..n).filter(|&i| gv[i] > lev).collect();
            let (ns, f) = (seeds.len(), seeds.len() as f64 / n as f64);
            est *= f;
            fr.push(f);
            th.push(lev);
            if gamma >= c.x0 { break }
            if ns == 0 { return Err(format!("Subset simulation stalls at level {}: no sample is above the threshold {}, because many samples have the same value.", level + 1, g4(gamma))) }
            // The chains overwrite the population in place, from copies of the seeds (half the memory of a new population).
            let copy = |v: &[f64]| seeds.iter().flat_map(|&i| v[i * d..(i + 1) * d].to_vec()).collect::<Vec<f64>>();
            let (sz, sx, sg, mut at) = (copy(&z), copy(&x), seeds.iter().map(|&i| gv[i]).collect::<Vec<f64>>(), 0);
            for k in 0..ns {
                let (mut cz, mut cx, mut cg) = (sz[k * d..(k + 1) * d].to_vec(), sx[k * d..(k + 1) * d].to_vec(), sg[k]);
                let (mut pz, mut px) = (cz.clone(), cx.clone());
                for t in 0..n / ns + (k < n % ns) as usize {
                    if t > 0 {
                        let mut changed = false;
                        pz.copy_from_slice(&cz); px.copy_from_slice(&cx);
                        for i in 0..d {
                            let xi = pz[i] + spread * g.n();
                            let a = (pz[i] * pz[i] - xi * xi) / 2.0;
                            ctries += 1.0;
                            if a >= 0.0 || g.u() < a.exp() { (pz[i], px[i], changed, comps) = (xi, f64::NAN, true, comps + 1.0) }
                        }
                        tries += 1.0;
                        if changed {
                            let v = eval(&pz, &mut px, &mut work);
                            if v > gamma { std::mem::swap(&mut cz, &mut pz); std::mem::swap(&mut cx, &mut px); (cg, moves) = (v, moves + 1.0) }
                        }
                    }
                    z[at * d..(at + 1) * d].copy_from_slice(&cz); x[at * d..(at + 1) * d].copy_from_slice(&cx); gv[at] = cg; at += 1;
                }
            }
        }
        Ok(one(est, work, Diag { stages_run: Some(th.len()), levels: th, fractions: fr, accept: (tries > 0.0).then(|| moves / tries), comp_accept: (ctries > 0.0).then(|| comps / ctries), spread: Some(spread), p0: Some(p0), ..Diag::default() }))
    }

    /// Normalised weights exp(lw − max): an update that does not depend on a common factor.
    fn normalise(lw: &[f64]) -> Vec<f64> {
        let m = lw.iter().copied().filter(|x| *x > -INF).fold(-INF, f64::max);
        lw.iter().map(|&x| if x == -INF || !m.is_finite() { 0.0 } else { (x - m).exp() }).collect()
    }
    /// The level of a cross-entropy iteration: the (1 − ρ) quantile of the scores, at most the top. A level that does not
    /// rise keeps the last one and doubles the sample size, up to 4N (the modified algorithm of Rubinstein and Kroese).
    fn ce_level(sc: &[f64], rho: f64, top: f64, prev: f64, size: usize, n: usize) -> (f64, usize) {
        let mut s = sc.to_vec();
        let i = (((1.0 - rho) * s.len() as f64).floor() as usize).min(s.len() - 1);
        let q = *s.select_nth_unstable_by(i, |a, b| a.total_cmp(b)).1;
        let g = top.min(q);
        if g < top && g <= prev + 1e-9 * prev.abs().max(1.0) { (top.min(g.max(prev)), (4 * n).min(2 * size)) } else { (g, size) }
    }
    /// The smoothing of the cross-entropy update, 0.7 v̂_t + 0.3 v_(t−1), for each parameter of the family.
    fn smooth(n: &Q, q: &Q) -> Q {
        let f = |a: Option<f64>, b: Option<f64>| match (a, b) { (Some(a), Some(b)) => Some(0.7 * a + 0.3 * b), _ => a };
        Q { r: f(n.r, q.r), v: f(n.v, q.v), rho: f(n.rho, q.rho), nu: f(n.nu, q.nu), ..*n }
    }
    /// The cross-entropy adaptation: at most `tmax` iterations of N/4 (at least 256) paths under q; the level is the
    /// (1 − ρ) quantile of the scores, at most `top`; the elite paths (score ≥ level, and in the event once the level is
    /// `top`) give the weighted sums (Σw, Σw K, Σw H, Σw S, Σw immigrants) of the maximum-likelihood update, which is
    /// smoothed. A path is [score, in the event, log f/g, work, K, Σ H, Σ S, immigrants]. (proposal, work, steps, reached)
    fn ce_adapt(c: &Prob, mut q: Q, top: f64, tmax: usize, mut draw: impl FnMut(&Q) -> Result<[f64; 8], String>, update: impl Fn([f64; 5], &Q) -> Q) -> Result<(Q, f64, Vec<Step>, bool), String> {
        let (mut nce, mut prev, mut work, mut path) = ((c.paths / 4).max(256), -INF, 0.0, vec![Step { q, ..Step::default() }]);
        for _ in 0..tmax {
            let xs = (0..nce).map(|_| draw(&q)).collect::<Result<Vec<_>, _>>()?;
            work += xs.iter().map(|x| x[3]).sum::<f64>();
            let (gamma, size) = ce_level(&xs.iter().map(|x| x[0]).collect::<Vec<_>>(), c.o.rho, top, prev, nce, c.paths);
            (nce, prev) = (size, gamma);
            let w = normalise(&xs.iter().map(|x| if x[0] >= gamma && (gamma < top || x[1] > 0.0) { x[2] } else { -INF }).collect::<Vec<_>>());
            let mut s = [0.0; 5];
            for (x, &w) in xs.iter().zip(&w).filter(|x| *x.1 != 0.0) { s[0] += w; for i in 1..5 { s[i] += w * x[3 + i] } }
            if s[0] > 0.0 { q = smooth(&update(s, &q), &q) }
            path.push(Step { gamma: Some(gamma), hits: None, q });
            if gamma >= top { return Ok((q, work, path, true)) }
        }
        Ok((q, work, path, false))
    }
    /// The cross-entropy method: levels at the (1 − ρ) quantile of the sum under the current proposal, the weighted
    /// maximum-likelihood update from the elite paths until the level is x0, then a fresh sample from the last proposal.
    /// The family is the hazard-rate twist F̄^r (and the geometric count for ruin); the failure "light_family" uses
    /// exponential proposals for a heavier target, so the weights f/g are not bounded and their variance is infinite.
    fn walk_ce(c: &Prob, g: &mut G) -> Result<Rep, String> {
        let light = c.failure == "light_family" && !matches!(c.j, Law::Exp(_));
        let mut q = if light { Q { v: Some(c.j.typical()), ..Q::default() } } else { Q { r: Some(1.0), ..Q::default() } };
        if c.pb == Pb::Ruin { q.rho = Some(c.rho) }
        let (q, mut work, path, reached) = ce_adapt(c, q, c.x0, 20, |q| { let p = walk_path(c, g, q); Ok([p.s, (p.s > c.x0) as u8 as f64, p.lr, p.work, p.k, p.sum_h, p.s, 0.0]) }, |[sw, sk, sh, sx, _], q| {
            let mut nq = *q;
            if q.v.is_some() { if sk > 0.0 { nq.v = Some((sx / sk).clamp(1e-12, 1e12)) } } else if sh > 0.0 && sk > 0.0 { nq.r = Some((sk / sh).clamp(1e-4, 10.0)) }
            if c.pb == Pb::Ruin { nq.rho = Some((sk / (sk + sw)).clamp(0.01, 0.999)) }
            nq
        })?;
        let mut a = Acc::default();
        for _ in 0..c.paths { let p = walk_path(c, g, &q); work += p.work; a.add(if p.s > c.x0 { p.lr.exp() } else { 0.0 }) }
        Ok(one(a.sum / a.n, work, Diag { path, last: Some(q), reached: Some(reached), family: if light { "exponential" } else { "hazard" }, infinite_variance: light, ..wdiag(&a) }))
    }

    /// One path under the one-big-jump defensive mixture β f + (1 − β) (1/K) Σ_i q_i, where q_i draws jump i from the
    /// hazard-rate twist g_r: f/q = 1 / (β + (1 − β) (1/K) Σ_i r exp((1 − r) H(J_i))) ≤ 1/β. (sum, log f/q, H of the largest jump, work)
    fn mixture_path(c: &Prob, g: &mut G, r: f64, beta: f64) -> (f64, f64, f64, f64) {
        let k = if c.pb == Pb::Sum { c.jumps } else { geom(g, c.rho) };
        let chosen = if k > 0 && g.u() >= beta { g.below(k) } else { usize::MAX };
        let (mut s, mut lsum, mut hb, mut big) = (0.0, -INF, 0.0, -1.0);
        for i in 0..k {
            let h = g.e() / if i == chosen { r } else { 1.0 };
            let x = c.j.hinv(h);
            s += x;
            lsum = log_add(lsum, r.ln() + (1.0 - r) * h);
            if x > big { (big, hb) = (x, h) }
        }
        let lw = if k > 0 { -log_add(beta.ln(), (-beta).ln_1p() + lsum - (k as f64).ln()) } else { 0.0 };
        (s, lw, hb, (k + (c.pb == Pb::Ruin) as usize) as f64)
    }
    /// The adaptation of adaptive importance sampling from the first twist r: `iters` steps of N/4 (at least 256) mixture
    /// paths, each (in the event, log f/q, H of the largest jump, work); a step updates r by weighted maximum likelihood,
    /// r = Σ w / Σ w H(J_max), from the paths in the event, or keeps r when there is none. (r, work, diagnostics)
    fn ais_adapt(c: &Prob, mut r: f64, mut draw: impl FnMut(f64) -> Result<(bool, f64, f64, f64), String>) -> Result<(f64, f64, Diag), String> {
        let (beta, mut work, mut path) = (c.o.beta, 0.0, vec![Step { q: Q { r: Some(r), ..Q::default() }, ..Step::default() }]);
        for _ in 0..c.o.iters {
            let xs = (0..(c.paths / 4).max(256)).map(|_| draw(r)).collect::<Result<Vec<_>, _>>()?;
            let w = normalise(&xs.iter().map(|x| if x.0 { x.1 } else { -INF }).collect::<Vec<_>>());
            let (mut sw, mut sh, mut hits) = (0.0, 0.0, 0);
            for (x, &w) in xs.iter().zip(&w) { work += x.3; if w > 0.0 { (hits, sw, sh) = (hits + 1, sw + w, sh + w * x.2) } }
            if hits > 0 && sh > 0.0 { r = (sw / sh).clamp(1e-4, 1.0) }
            path.push(Step { gamma: None, hits: Some(hits), q: Q { r: Some(r), ..Q::default() } });
        }
        let adapted = path.iter().any(|s| s.hits.unwrap_or(0) > 0);
        Ok((r, work, Diag { path, last: Some(Q { r: Some(r), mix: Some((beta, r)), ..Q::default() }), beta: Some(beta), bound: Some(1.0 / beta), adapted: Some(adapted), ..Diag::default() }))
    }
    /// Adaptive importance sampling with the defensive mixture: the first twist r = 1/H(x0) (r = 1 for the failure
    /// "nominal_start"), the adaptation, then a fresh sample. The weights are at most 1/β, so their variance is finite.
    fn walk_ais(c: &Prob, g: &mut G) -> Result<Rep, String> {
        let r0 = if c.failure == "nominal_start" { 1.0 } else { (1.0 / c.j.h(c.x0).max(1e-9)).clamp(1e-4, 1.0) };
        let (r, mut work, d) = ais_adapt(c, r0, |r| { let x = mixture_path(c, g, r, c.o.beta); Ok((x.0 > c.x0, x.1, x.2, x.3)) })?;
        let mut a = Acc::default();
        for _ in 0..c.paths { let x = mixture_path(c, g, r, c.o.beta); work += x.3; a.add(if x.0 > c.x0 { x.1.exp() } else { 0.0 }) }
        let w = wdiag(&a);
        Ok(one(a.sum / a.n, work, Diag { hits: w.hits, ess: w.ess, max_share: w.max_share, ..d }))
    }

    /* ---------- the catastrophe and systemic ruin test ---------- */

    /// E N(T) of Hawkes arrivals with baseline ν, branching ratio η and kernel ηβ exp(−βt), from no history.
    pub fn hawkes_mean(nu: f64, eta: f64, beta: f64, t: f64) -> f64 {
        if eta == 0.0 { return nu * t }
        let d = beta * (1.0 - eta);
        nu * t / (1.0 - eta) - nu * eta * -(-d * t).exp_m1() / (d * (1.0 - eta))
    }
    /// ∫_a^b f by 4-point Gauss–Legendre on 64 panels; b = ∞ by the substitution x = a + t/(1 − t).
    pub fn gauss_legendre(f: &dyn Fn(f64) -> f64, a: f64, b: f64) -> f64 {
        if b == INF { return gauss_legendre(&|t| f(a + t / (1.0 - t)) / ((1.0 - t) * (1.0 - t)), 0.0, 1.0 - 1e-12) }
        const X: [f64; 4] = [-0.8611363115940526, -0.3399810435848563, 0.3399810435848563, 0.8611363115940526];
        const W: [f64; 4] = [0.3478548451374538, 0.6521451548625461, 0.6521451548625461, 0.3478548451374538];
        let h = (b - a) / 64.0;
        (0..64).map(|k| { let m = a + (k as f64 + 0.5) * h; (0..4).map(|i| W[i] * f(m + X[i] * h / 2.0)).sum::<f64>() }).sum::<f64>() * h / 2.0
    }
    fn cat_setup(g: &dyn Fn(&str) -> f64, sev: Law, trunc: Option<(f64, f64, f64)>, cop: usize) -> Cat {
        let (t, kk, u, c, load, extra, coc) = (g("T"), g("K"), g("u"), g("c"), g("load"), g("extra"), g("coc"));
        let en = hawkes_mean(g("nu"), g("eta"), g("decay"), t);
        // ∫_a^b P(S > x) dx for the (truncated) event loss.
        let int_sf = |a: f64, b: f64| {
            let hi = trunc.map_or(b, |tr| b.min(tr.0));
            if !(hi > a) { return 0.0 }
            let base = match sev {
                Law::Exp(r) => ((-r * a).exp() - (-r * hi).exp()) / r,
                Law::Par(al, sg) if (al - 1.0).abs() < 1e-12 => sg * ((1.0 + hi / sg) / (1.0 + a / sg)).ln(),
                Law::Par(al, _) if hi == INF && al < 1.0 => INF,
                Law::Par(al, sg) => sg / (al - 1.0) * (((1.0 - al) * (a / sg).ln_1p()).exp() - if hi == INF { 0.0 } else { ((1.0 - al) * (hi / sg).ln_1p()).exp() }),
                Law::Weib(..) => gauss_legendre(&|x| sev.sf(x), a, hi),
            };
            trunc.map_or(base, |tr| (base - tr.1 * (hi - a)) / tr.2)
        };
        let (mean_s, ceded) = (int_sf(0.0, INF), int_sf(g("d"), g("d") + g("l")));
        let price = (1.0 + load) * ceded * (en / t) / kk;
        let policies = vec![
            Policy { id: "none", label: "No action".into(), u, c, layer: false, cost: 0.0, cost_text: "no cost".into() },
            Policy { id: "layer", label: format!("Layer {} xs {}", g4(g("l")), g4(g("d"))), u, c: c - price, layer: true, cost: load * ceded * en, cost_text: format!("loading × expected recoveries over T: {} × {}", g4(load), g4(ceded * en)) },
            Policy { id: "capital", label: format!("Extra capital {}", g4(extra)), u: u + extra, c, layer: false, cost: coc * extra * kk * t, cost_text: format!("cost of capital × extra × K × T: {} × {} × {kk} × {}", g4(coc), g4(extra), g4(t)) },
        ];
        let fin = mean_s.is_finite();
        let scale = (en * if fin { mean_s } else { sev.median() }).max(1e-9);
        Cat { en, mean_s, ceded, price, policies, grid: (0..241).map(|i| scale * 10f64.powf(-2.0 + 7.0 * i as f64 / 240.0)).collect(), loading: fin.then(|| c * kk / (en / t * mean_s) - 1.0),
            expected_loss: if fin { en / t * mean_s / kk } else { INF }, trunc, t, kk: kk as usize, nu: g("nu"), eta: g("eta"), decay: g("decay"), tau: g("tau"), kappa: g("kappa"), m: g("m"), d: g("d"), l: g("l"), xext: g("xext"), cop, sev }
    }
    impl Cat {
        /// The event loss with cumulative hazard h under the (truncated) nominal law: x = F̄⁻¹(F̄(M) + F(M) e^(−h)).
        fn loss(&self, h: f64) -> f64 { self.trunc.map_or_else(|| self.sev.hinv(h), |(m, sm, fm)| self.sev.hinv(-(sm + fm * (-h).exp()).ln()).min(m)) }
        /// The cumulative hazard of the (truncated) event loss at x.
        fn hazard(&self, x: f64) -> f64 { self.trunc.map_or_else(|| self.sev.h(x), |(_, sm, fm)| -((self.sev.sf(x) - sm) / fm).max(1e-300).ln()) }
    }

    /// The next event of the Hawkes arrivals from the excited part λ_E of the intensity: the baseline clock is exponential
    /// with rate ν, and the excited part fires after s with P(s < ∞) = 1 − exp(−λ_E/β) (Dassios and Zhao 2013). (dt, immigrant)
    fn next_event(g: &mut G, lam: f64, nu: f64, beta: f64) -> (f64, bool) {
        let s2 = g.e() / nu;
        let d = if lam > 0.0 { 1.0 + beta * g.u().ln() / lam } else { 0.0 };
        let s1 = if d > 0.0 { -d.ln() / beta } else { INF };
        if s2 < s1 { (s2, true) } else { (s1, false) }
    }
    /// The arrival times of one path on [0, T] with baseline ν, and the number of baseline (immigrant) events.
    fn arrivals(k: &Cat, g: &mut G, nu: f64) -> Result<(Vec<f64>, usize), String> {
        let (mut ts, mut t, mut lam, mut imm) = (vec![], 0.0, 0.0, 0);
        loop {
            let (dt, im) = next_event(g, lam, nu, k.decay);
            if t + dt > k.t { return Ok((ts, imm)) }
            (t, lam, imm) = (t + dt, lam * (-k.decay * dt).exp() + k.eta * k.decay, imm + im as usize);
            ts.push(t);
            if ts.len() > EVENTS { return Err(format!("A path has more than {EVENTS} events. Lower η or T.")) }
        }
    }
    /// The shares W_j = 2 U_j of the K insurers in one event, with U from the copula (mean 1).
    fn shares(k: &Cat, g: &mut G, w: &mut [f64; 5]) {
        let (w, tau) = (&mut w[..k.kk], k.tau);
        match if tau == 0.0 { 0 } else { k.cop } {
            1 => { let rc = (PI * tau / 2.0).sin(); let w0 = g.n(); for x in w { *x = 2.0 * norm_sf(-(rc.sqrt() * w0 + (1.0 - rc).sqrt() * g.n())) } }
            2 => {
                let (a, th, e) = (1.0 - tau, PI * g.u(), g.e());
                let v = (a * th).sin() / th.sin().powf(1.0 / a) * (((1.0 - a) * th).sin() / e).powf((1.0 - a) / a);
                for x in w { *x = 2.0 * (-(g.e() / v).powf(a)).exp() }
            }
            3 => { let th = 2.0 * tau / (1.0 - tau); let v = g.gamma(1.0 / th); for x in w { *x = 2.0 * (1.0 + g.e() / v).powf(-1.0 / th) } }
            _ => for x in w { *x = 2.0 * g.u() },
        }
    }
    /// The state of the insurers under one policy: reserves, the set alive (bits), defaults, time, path maximum of the
    /// importance, and the excited intensity (splitting).
    #[derive(Clone, Copy)]
    struct St { r: [f64; 5], alive: u32, d: usize, t: f64, hmax: f64, lam: f64 }
    impl St { fn new(u: f64) -> St { St { r: [u; 5], alive: 31, d: 0, t: 0.0, hmax: 0.0, lam: 0.0 } } }
    /// Bring the insurers to time t (premium income), apply one event of size x with shares w, the layer if the policy has
    /// it, then the cascade: each default costs every survivor κ u, until no new default. Returns the importance after it.
    fn apply(k: &Cat, pol: &Policy, st: &mut St, t: f64, x: f64, w: &[f64; 5]) -> f64 {
        let (dt, mut fresh) = (t - st.t, 0u32);
        st.t = t;
        let kept = if pol.layer { x - (x - k.d).max(0.0).min(k.l) } else { x };
        for j in (0..k.kk).filter(|j| st.alive >> j & 1 == 1) {
            st.r[j] += pol.c * dt - if x > 0.0 { kept * w[j] / k.kk as f64 } else { 0.0 };
            if st.r[j] < 0.0 { fresh |= 1 << j }
        }
        while fresh != 0 {
            let n = (fresh & st.alive).count_ones();
            (st.alive, st.d, fresh) = (st.alive & !fresh, st.d + n as usize, 0);
            if n == 0 || k.kappa == 0.0 { break }
            for j in (0..k.kk).filter(|j| st.alive >> j & 1 == 1) { st.r[j] -= n as f64 * k.kappa * pol.u; if st.r[j] < 0.0 { fresh |= 1 << j } }
        }
        score(k, pol, st)
    }
    /// The importance of a state: min(m, defaults + the largest used fraction of capital of a survivor).
    fn score(k: &Cat, pol: &Policy, st: &mut St) -> f64 {
        let worst = (0..k.kk).filter(|j| st.alive >> j & 1 == 1).fold(0.0f64, |w, j| w.max(1.0 - st.r[j] / pol.u));
        let h = (st.d as f64 + worst.clamp(0.0, 0.999999)).min(k.m);
        st.hmax = st.hmax.max(h);
        h
    }
    /// One path of the test: log f/g, events, immigrants, sums of the losses and hazards, the largest loss and its hazard, and
    /// the defaults and the path maximum of the importance of each policy that runs.
    struct CPath { lr: f64, n: f64, imm: f64, sum_s: f64, sum_h: f64, big: f64, h_big: f64, def: [f64; 3], hmax: [f64; 3], work: f64 }
    /// One path under the proposal q for every policy, or only one: the arrivals (baseline ν'), the event losses (hazard-rate
    /// twist r, exponential tilt to mean `tilt`, light family with mean v, or the defensive mixture on one event chosen at
    /// random), the shares and the insurers.
    fn cat_path(k: &Cat, g: &mut G, q: &Q, only: Option<usize>) -> Result<CPath, String> {
        let nu = q.nu.unwrap_or(k.nu);
        let (times, imm) = arrivals(k, g, nu)?;
        let n = times.len();
        let mut lr = if nu != k.nu { imm as f64 * (k.nu / nu).ln() + (nu - k.nu) * k.t } else { 0.0 };
        let chosen = match q.mix { Some((beta, _)) if n > 0 && g.u() >= beta => g.below(n), _ => usize::MAX };
        let pols = only.map_or(0..3, |a| a..a + 1);
        let mut st = [St::new(0.0); 3];
        for a in pols.clone() { st[a] = St::new(k.policies[a].u) }
        let (mut out, mut lsum, mut w) = (CPath { lr: 0.0, n: n as f64, imm: imm as f64, sum_s: 0.0, sum_h: 0.0, big: 0.0, h_big: 0.0, def: [0.0; 3], hmax: [0.0; 3], work: (n * (1 + k.kk)) as f64 }, -INF, [0.0; 5]);
        let rate = if let Law::Exp(r) = k.sev { r } else { f64::NAN };
        for (e, &t) in times.iter().enumerate() {
            let (x, h) = if let Some(mt) = q.tilt {
                // Exponential tilt of an exponential (or truncated exponential) loss to mean mt.
                let (fmt, fm) = k.trunc.map_or((1.0, 1.0), |tr| (-(-tr.0 / mt).exp_m1(), -(-rate * tr.0).exp_m1()));
                let x = -mt * (-g.u() * fmt).ln_1p();
                lr += rate.ln() - rate * x - fm.ln() + mt.ln() + x / mt + fmt.ln();
                (x, 0.0)
            } else if let Some(v) = q.v {
                let fmv = k.trunc.map_or(1.0, |tr| -(-tr.0 / v).exp_m1());
                let x = if k.trunc.is_some() { -v * (-g.u() * fmv).ln_1p() } else { v * g.e() };
                lr += k.sev.logpdf(x) - k.trunc.map_or(0.0, |tr| tr.2.ln()) + v.ln() + x / v + fmv.ln();
                (x, k.hazard(x))
            } else {
                let r = if q.mix.is_none() { q.r.unwrap_or(1.0) } else { 1.0 };
                let h = g.e() / if e == chosen { q.mix.map_or(1.0, |m| m.1) } else { r };
                if r != 1.0 { lr += -(1.0 - r) * h - r.ln() }
                (k.loss(h), h)
            };
            if let Some((_, r)) = q.mix { lsum = log_add(lsum, r.ln() + (1.0 - r) * h) }
            shares(k, g, &mut w);
            (out.sum_s, out.sum_h) = (out.sum_s + x, out.sum_h + h);
            if x > out.big { (out.big, out.h_big) = (x, h) }
            for a in pols.clone() { apply(k, &k.policies[a], &mut st[a], t, x, &w); }
        }
        // f/q = 1 / (β + (1 − β) (1/n) Σ_e g_r/f(S_e)), with g_r/f(x) = r exp((1 − r) h(x)).
        if let (Some((beta, _)), true) = (q.mix, n > 0) { lr = -log_add(beta.ln(), (-beta).ln_1p() + lsum - (n as f64).ln()) }
        for a in pols { apply(k, &k.policies[a], &mut st[a], k.t, 0.0, &w); (out.def[a], out.hmax[a]) = (st[a].d as f64, st[a].hmax) }
        out.lr = lr;
        Ok(out)
    }
    /// The weighted sums of the test: 3 quantities for each policy and the extreme event loss, the grid of the total loss.
    struct CAcc { q: Vec<Acc>, exceed: Vec<f64>, excess: Vec<f64>, n: f64, count: f64, sw: f64 }
    fn cat_add(k: &Cat, a: &mut CAcc, x: &CPath, w: f64, only: Option<usize>) {
        for p in only.map_or(0..3, |p| p..p + 1) {
            a.q[3 * p].add(if x.def[p] >= k.m { w } else { 0.0 });
            a.q[3 * p + 1].add(if x.def[p] >= 1.0 { w } else { 0.0 });
            a.q[3 * p + 2].add(w * x.def[p]);
        }
        a.q[9].add(if x.big > k.xext { w } else { 0.0 });
        for (i, &gx) in k.grid.iter().enumerate().take_while(|(_, gx)| **gx < x.sum_s) { a.exceed[i] += w; a.excess[i] += w * (x.sum_s - gx) }
        (a.n, a.count, a.sw) = (a.n + 1.0, a.count + x.n, a.sw + w);
    }
    fn cat_rep(c: &Prob, k: &Cat, m: &str, g: &mut G) -> Result<Rep, String> {
        let n = c.paths;
        let mut a = CAcc { q: vec![Acc::default(); 10], exceed: vec![0.0; k.grid.len()], excess: vec![0.0; k.grid.len()], n: 0.0, count: 0.0, sw: 0.0 };
        let (mut work, mut d) = (0.0, Diag::default());
        if m == "splitting" {
            let mut est = vec![None; 10];
            for p in 0..3 { let (e, w, pd) = cat_split(c, k, p, g); (work, est[3 * p]) = (work + w, Some(e)); d.policies.push(pd) }
            return Ok(Rep { est, iid: None, work, grid: None, diag: d });
        }
        if m == "direct" || m == "tilting" {
            let q = if m == "tilting" { Q { tilt: Some(c.o.tilt * k.sev.mean()), nu: Some(k.nu * c.o.arrivals), ..Q::default() } } else { Q::default() };
            for _ in 0..n { let x = cat_path(k, g, &q, None)?; work += x.work; cat_add(k, &mut a, &x, x.lr.exp(), None) }
            d.events = Some(a.count / n as f64);
            if m == "tilting" { (d.tilted_mean, d.tilted_rate, d.mean_weight, d.ess_q) = (q.tilt, q.nu, Some(a.sw / n as f64), a.q.iter().map(Acc::ess).collect()) }
            return Ok(Rep { est: a.q.iter().map(|x| Some(x.sum / x.n)).collect(), iid: Some(a.q), work, grid: Some((a.exceed, a.excess, a.n)), diag: d });
        }
        // The cross-entropy method and adaptive importance sampling adapt one proposal for each policy, then estimate that
        // policy's quantities; the extreme event loss and the total loss use every final sample.
        for p in 0..3 {
            let (q, w, pd) = if m == "ce" { cat_ce(c, k, p, g)? } else { cat_ais(c, k, p, g)? };
            work += w;
            for _ in 0..n { let x = cat_path(k, g, &q, Some(p))?; work += x.work; cat_add(k, &mut a, &x, x.lr.exp(), Some(p)) }
            d.policies.push(pd);
        }
        Ok(Rep { est: a.q.iter().map(|x| Some(x.sum / x.n)).collect(), iid: None, work, grid: Some((a.exceed, a.excess, a.n)), diag: d })
    }
    /// The cross-entropy adaptation for policy p: levels on the path maximum of the importance, the hazard-rate twist (or the
    /// light family) of the event loss and the baseline rate of the arrivals, at most 8 iterations.
    fn cat_ce(c: &Prob, k: &Cat, p: usize, g: &mut G) -> Result<(Q, f64, Diag), String> {
        let light = c.failure == "light_family" && !matches!(k.sev, Law::Exp(_));
        let q = Q { nu: Some(k.nu), ..if light { Q { v: Some(if k.mean_s.is_finite() { k.mean_s } else { k.sev.median() }), ..Q::default() } } else { Q { r: Some(1.0), ..Q::default() } } };
        let draw = |q: &Q| {
            let x = cat_path(k, g, q, Some(p))?;
            let ev = x.def[p] >= k.m;
            Ok([if ev { k.m } else { x.hmax[p] }, ev as u8 as f64, x.lr, x.work, x.n, x.sum_h, x.sum_s, x.imm])
        };
        let (q, work, path, reached) = ce_adapt(c, q, k.m, 8, draw, |[sw, sn, sh, ss, si], q| {
            let mut nq = Q { nu: Some((si / (sw * k.t)).clamp(k.nu / 100.0, 100.0 * k.nu)), ..*q };
            if light { if sn > 0.0 { nq.v = Some(ss / sn) } } else if sh > 0.0 && sn > 0.0 { nq.r = Some((sn / sh).clamp(1e-4, 10.0)) }
            nq
        })?;
        let inf = light && (k.trunc.is_none() || matches!(k.sev, Law::Weib(kw, _) if kw <= 0.5));
        Ok((q, work, Diag { path, last: Some(q), reached: Some(reached), family: if light { "exponential" } else { "hazard" }, infinite_variance: inf, ..Diag::default() }))
    }
    /// Adaptive importance sampling for policy p: the defensive mixture that draws one event chosen at random from the
    /// hazard-rate twist g_r; the first r makes the typical twisted event K u, which ruins the insurers it hits.
    fn cat_ais(c: &Prob, k: &Cat, p: usize, g: &mut G) -> Result<(Q, f64, Diag), String> {
        let (x0, beta) = (k.kk as f64 * k.policies[p].u, c.o.beta);
        let x0 = k.trunc.map_or(x0, |tr| x0.min(0.9 * tr.0));
        let r0 = if c.failure == "nominal_start" { 1.0 } else { (1.0 / k.hazard(x0).max(1e-9)).clamp(1e-4, 1.0) };
        let (r, work, d) = ais_adapt(c, r0, |r| { let x = cat_path(k, g, &Q { mix: Some((beta, r)), ..Q::default() }, Some(p))?; Ok((x.def[p] >= k.m, x.lr, x.h_big, x.work)) })?;
        Ok((Q { mix: Some((beta, r)), ..Q::default() }, work, d))
    }
    /// Splitting for policy p on the Markov state (time, excited intensity, reserves, defaults): the importance is
    /// min(m, defaults + the largest used fraction of capital of a survivor), the event is m defaults, and the stages
    /// split [0, m] in equal steps (3m stages unless the settings say). (estimate, work, diagnostics)
    fn cat_split(c: &Prob, k: &Cat, p: usize, g: &mut G) -> (f64, f64, Diag) {
        let (pol, mut w, mut work) = (&k.policies[p], [0.0; 5], 0.0);
        let l = c.o.levels.unwrap_or(3 * k.m as usize);
        let hit = |st: &mut St, lev: Option<f64>| lev.map_or(st.d as f64 >= k.m, |l| score(k, pol, st) > l);
        let (est, d) = fixed_effort(g, c.paths, (1..l).map(|j| j as f64 * k.m / l as f64).collect(), St::new(pol.u), hit, |g, st| {
            let (dt, _) = next_event(g, st.lam, k.nu, k.decay);
            if st.t + dt > k.t { apply(k, pol, st, k.t, 0.0, &w); return false }
            st.lam = st.lam * (-k.decay * dt).exp() + k.eta * k.decay;
            let x = k.loss(g.e());
            let t = st.t + dt;
            shares(k, g, &mut w);
            apply(k, pol, st, t, x, &w);
            work += (1 + k.kk) as f64;
            true
        });
        (est, work, d)
    }

    /* ---------- runs, summaries and decisions ---------- */

    /// One method of a run: its refusal or error, the replications merged in order (Welford sums of the estimates of each
    /// quantity: n, mean, M2, missing), the pooled i.i.d. terms, the work, the weighted grid of the total loss and the diagnostics.
    #[derive(Clone, Debug)]
    pub struct MethodRun { pub method: &'static str, pub refused: String, pub error: String, pub reps: usize, pub w: Vec<[f64; 4]>, pub iid: Option<Vec<Acc>>, pub work: f64, pub grid: Option<(Vec<f64>, Vec<f64>, f64)>, pub diags: Vec<Diag> }
    /// The estimate, interval and work of a method's first quantity after a replication: a point of the convergence plot.
    #[derive(Clone, Copy, Debug)]
    pub struct TracePt { pub work: f64, pub est: Option<f64>, pub lo: Option<f64>, pub hi: Option<f64> }
    /// A run: the replications done, each method, and the trace (one point for each method after each replication).
    #[derive(Clone, Debug)]
    pub struct Run { pub blocks: usize, pub methods: Vec<MethodRun>, pub trace: Vec<Vec<TracePt>> }
    impl Run {
        /// A run with no replication yet.
        pub fn new(c: &Prob) -> Run {
            let methods = c.methods.iter().zip(&c.refused).map(|(m, r)| MethodRun { method: *m, refused: r.clone(), error: String::new(), reps: 0, w: vec![[0.0; 4]; c.quantities.len()], iid: None, work: 0.0, grid: None, diags: vec![] }).collect();
            Run { blocks: 0, methods, trace: vec![] }
        }
        /// Run and merge the next replication of each method, and add the point of the trace.
        pub fn step(&mut self, c: &Prob) {
            for (k, m) in self.methods.iter_mut().enumerate().filter(|m| m.1.refused.is_empty()) {
                match block(c, k, self.blocks) { Err(e) => m.error = e, Ok(r) => m.merge(r) }
            }
            self.blocks += 1;
            let pt = summary(c, self).iter().map(|s| { let q = s.q.first(); TracePt { work: s.work, est: q.and_then(|q| q.est), lo: q.and_then(|q| q.lo), hi: q.and_then(|q| q.hi) } }).collect();
            self.trace.push(pt);
        }
    }
    impl MethodRun {
        fn merge(&mut self, r: Rep) {
            for (s, v) in self.w.iter_mut().zip(&r.est) {
                match v { Some(v) if v.is_finite() => { s[0] += 1.0; let d = v - s[1]; s[1] += d / s[0]; s[2] += d * (v - s[1]) } _ => s[3] += 1.0 }
            }
            if let Some(a) = r.iid { for (p, x) in self.iid.get_or_insert_with(|| vec![Acc::default(); a.len()]).iter_mut().zip(&a) { p.merge(x) } }
            if let Some((ex, es, n)) = r.grid {
                match &mut self.grid {
                    Some(gr) => { for i in 0..ex.len() { gr.0[i] += ex[i]; gr.1[i] += es[i] } gr.2 += n }
                    None => self.grid = Some((ex, es, n)),
                }
            }
            (self.reps, self.work) = (self.reps + 1, self.work + r.work);
            self.diags.push(r.diag);
        }
    }
    /// All the replications of a compiled problem, in order.
    pub fn run(c: &Prob) -> Run { let mut r = Run::new(c); for _ in 0..c.reps { r.step(c) } r }

    /// An estimate with its interval, standard error, how the interval is made, the number of terms or replications, the
    /// number of paths in the event (pooled methods) and the relative error.
    #[derive(Clone, Debug, Default)]
    pub struct Est { pub est: Option<f64>, pub lo: Option<f64>, pub hi: Option<f64>, pub se: Option<f64>, pub how: String, pub n: f64, pub hits: Option<f64>, pub rel_err: Option<f64> }
    /// The value at risk and the expected shortfall of the total loss over T (None when the grid or the mean does not allow it).
    #[derive(Clone, Debug)]
    pub struct Risk { pub var: Option<f64>, pub es: Option<f64>, pub how: String }
    /// The diagnostics of a method, averaged over its replications: effective sample size, largest share of one weight,
    /// acceptance of the chain moves, number of levels, whether every adaptation had a path in the event, events of a path.
    #[derive(Clone, Debug, Default)]
    pub struct DiagSum { pub ess: Option<f64>, pub max_share: Option<f64>, pub accept: Option<f64>, pub levels: Option<f64>, pub adapted: bool, pub events: Option<f64> }
    /// The result of one method: refusal or error, replications, estimates of each quantity, work, work-normalised relative
    /// variance, value at risk and expected shortfall (test), mean diagnostics and the survival function of the total loss on `Cat::grid`.
    #[derive(Clone, Debug)]
    pub struct Summary { pub method: &'static str, pub refused: String, pub error: String, pub reps: usize, pub q: Vec<Est>, pub work: f64, pub wnrv: Option<f64>, pub risk: Option<Risk>, pub diag: Option<DiagSum>, pub loss_sf: Vec<f64> }

    /// Each estimate with an interval that fits its method: the Wilson interval (or the exact zero-hit bound) for direct
    /// simulation, the CLT interval of the pooled terms for tilting, and the Student t interval of the replications for
    /// the adaptive and multistage methods.
    pub fn summary(c: &Prob, r: &Run) -> Vec<Summary> { r.methods.iter().map(|m| summarize(c, m)).collect() }
    fn summarize(c: &Prob, m: &MethodRun) -> Summary {
        let mut out = Summary { method: m.method, refused: m.refused.clone(), error: m.error.clone(), reps: m.reps, q: vec![], work: m.work, wnrv: None, risk: None, diag: None, loss_sf: vec![] };
        if !m.refused.is_empty() { return out }
        let pooled = m.method == "direct" || m.method == "tilting";
        out.q = c.quantities.iter().enumerate().map(|(i, qu)| {
            let [n, mean, m2, miss] = m.w[i];
            if n == 0.0 {
                let split = m.method == "splitting";
                let how = if split && qu.policy.is_some() && i % 3 != 0 { "not estimated: splitting estimates the probability of one event" } else if split && qu.policy.is_none() { "not estimated by splitting" } else { "no replication yet" };
                return Est { how: how.into(), ..Est::default() };
            }
            if let (true, Some(a)) = (pooled, m.iid.as_ref().map(|v| v[i])) {
                let est = a.sum / a.n;
                if m.method == "direct" && qu.prob {
                    if a.hits == 0.0 { return Est { est: Some(0.0), lo: Some(0.0), hi: Some(zero_hit(a.n, 0.05)), se: Some(0.0), how: "zero hits: exact one-sided 95 % bound 1 − 0.05^(1/n)".into(), n: a.n, hits: Some(0.0), rel_err: None } }
                    let ((lo, hi), se) = (wilson(a.hits, a.n, Z95), (est * (1.0 - est) / a.n).sqrt());
                    return Est { est: Some(est), lo: Some(lo), hi: Some(hi), se: Some(se), how: "Wilson score interval, 95 %".into(), n: a.n, hits: Some(a.hits), rel_err: Some(se / est) };
                }
                let se = (if a.n > 1.0 { ((a.sumsq - a.sum * a.sum / a.n) / (a.n - 1.0)).max(0.0) } else { 0.0 } / a.n).sqrt();
                if a.hits == 0.0 { return Est { est: Some(0.0), how: "no path in the event: the estimate 0 has no interval".into(), n: a.n, hits: Some(0.0), ..Est::default() } }
                return Est { est: Some(est), lo: Some(est - Z95 * se), hi: Some(est + Z95 * se), se: Some(se), how: format!("CLT interval of {} i.i.d. weighted terms, 95 %", thousands(a.n)), n: a.n, hits: Some(a.hits), rel_err: (est > 0.0).then(|| se / est) };
            }
            if n < 2.0 { return Est { est: Some(mean), how: "one replication: no interval".into(), n, ..Est::default() } }
            let (se, t) = ((m2 / (n - 1.0) / n).sqrt(), t975(n - 1.0));
            let failed = if miss > 0.0 { format!(". {miss} replications failed") } else { String::new() };
            Est { est: Some(mean), lo: Some(mean - t * se), hi: Some(mean + t * se), se: Some(se), how: format!("Student t interval of {n} independent replications, 95 %{failed}"), n, hits: None, rel_err: (mean > 0.0).then(|| se / mean) }
        }).collect();
        out.wnrv = out.q.first().and_then(|q| q.rel_err).filter(|r| r.abs() > 0.0).map(|r| r * r * m.work);
        if let (Some(k), Some((ex, es, n))) = (&c.cat, &m.grid) { out.risk = Some(risk(c, k, ex, es, *n)); out.loss_sf = ex.iter().map(|v| v / n).collect() }
        if !m.diags.is_empty() {
            let mean = |f: &dyn Fn(&Diag) -> Option<f64>| { let v: Vec<f64> = m.diags.iter().filter_map(f).filter(|x| x.is_finite()).collect(); (!v.is_empty()).then(|| v.iter().sum::<f64>() / v.len() as f64) };
            out.diag = Some(if c.pb == Pb::Cat { DiagSum { events: mean(&|d| d.events), adapted: true, ..DiagSum::default() } } else {
                DiagSum { ess: mean(&|d| d.ess), max_share: mean(&|d| d.max_share), accept: mean(&|d| d.accept), levels: mean(&|d| d.stages_run.map(|x| x as f64)), adapted: m.diags.iter().all(|d| d.adapted != Some(false)), events: None }
            });
        }
        out
    }
    /// VaR_q of the total loss, the smallest x with P(L > x) ≤ 1 − q (log-linear between grid points), and ES_q = VaR_q +
    /// E[(L − VaR_q)⁺]/(1 − q), from the weighted grid; ES is infinite when the mean event loss is infinite.
    fn risk(c: &Prob, k: &Cat, exceed: &[f64], excess: &[f64], n: f64) -> Risk {
        let (q, grid) = (c.par("q"), &k.grid);
        let sf: Vec<f64> = exceed.iter().map(|v| v / n).collect();
        let Some(mut i) = sf.iter().position(|&v| v <= 1.0 - q) else { return Risk { var: None, es: None, how: format!("The grid ends at {}: P(L > x) is above {} there.", g4(grid[grid.len() - 1]), g4(1.0 - q)) } };
        let (mut x, mut sx) = (grid[i], sf[i]);
        if i > 0 && sf[i - 1] > sf[i] {
            let (lo, hi) = (sf[i - 1].ln(), sf[i].max(1e-300).ln());
            let t = ((lo - (1.0 - q).ln()) / (lo - hi)).clamp(0.0, 1.0);
            (x, sx, i) = ((grid[i - 1].ln() + t * (grid[i].ln() - grid[i - 1].ln())).exp(), (lo + t * (hi - lo)).exp(), i - 1);
        }
        if !k.mean_s.is_finite() { return Risk { var: Some(x), es: None, how: "ES is infinite: the mean event loss is infinite (α ≤ 1 and no truncation), so E[L | L > VaR] = ∞. The page shows no number.".into() } }
        // E[(L − x)⁺] at the grid point below x, less ∫ P(L > y) dy from grid[i] to x by the trapezoid rule.
        let ex = excess[i] / n - (x - grid[i]) * (sf[i] + sx) / 2.0;
        Risk { var: Some(x), es: Some(x + ex.max(0.0) / (1.0 - q)), how: format!("from the weighted sample on a grid of {} points", grid.len()) }
    }

    /// The decision of one method: a verdict for each row (label, cost, "met", "not met", "not separable" or "unknown"), and
    /// for the test the cheapest policy whose systemic ruin probability meets the target or cannot be separated from it.
    #[derive(Clone, Debug)]
    pub struct Decision { pub rows: Vec<(String, f64, &'static str)>, pub best: Option<usize>, pub separated: Option<bool> }
    /// The decision of one method's summary against the parameter `target`; None for a refused method.
    pub fn decide(c: &Prob, s: &Summary) -> Option<Decision> {
        if !s.refused.is_empty() || s.q.is_empty() { return None }
        let target = c.par("target");
        let verdict = |x: &Est| x.est.map_or("unknown", |e| if x.hi.unwrap_or(e) <= target { "met" } else if x.lo.unwrap_or(e) > target { "not met" } else { "not separable" });
        let Some(k) = &c.cat else { return Some(Decision { rows: vec![(c.quantities[0].label.clone(), 0.0, verdict(&s.q[0]))], best: None, separated: None }) };
        let rows: Vec<_> = k.policies.iter().enumerate().map(|(a, p)| (p.label.clone(), p.cost, verdict(&s.q[3 * a]))).collect();
        let best = (0..3).filter(|&a| rows[a].2 == "met" || rows[a].2 == "not separable").fold(None, |b: Option<usize>, a| match b { Some(b) if rows[b].1 <= rows[a].1 => Some(b), _ => Some(a) });
        Some(Decision { separated: best.map(|b| rows[b].2 == "met"), best, rows })
    }
}
```
