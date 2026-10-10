---
title: Monte Carlo models
summary: Run 252 Monte Carlo models with 7 sampling methods, common random numbers and multilevel Monte Carlo. Read each estimate with its 95 % interval and, for a small support, the exact value. Then read 9 method cards and 5 real data sets, and answer a guided interview.
thumb: 7213
theme: site
seed: 20261013
---

Run a model text and read each estimate with its 95 % interval. For discrete variables with a small joint support, the notebook also gives the exact value by enumeration.

<!-- skill: This notebook ports the models, methods, data sets and groups of visuals/viz/monte-carlo-workbench, with the law names of laws.json. Read the data only through data!, from the files pinned in visuals.lock; never copy data into this file. The model engine is in "The code": the core functions at the root, then the modules expr (the expression language), cat (the 39 catalogue laws), built (the constructed and custom laws), dep (the copulas and processes) and model (the model text, the runs, the intervals, the decision, the enumeration and multilevel Monte Carlo). -->

<!-- skill: Tests are disposable: check a change end to end in the built page; do not commit regression tests. A run in the page draws at most about BUDGET values; keep it so that a change takes about a second. Text from the data goes through fit(), which writes the characters that the site's fonts do not have (X₁, 10⁻⁶, √n) as X_1, 10^-6 and sqrt n. -->

```toml
serde_json = "=1.0.151"
```

## A model

A decision model compares 2 to 4 alternatives. An experiment shows 1 property of a law or a method, and a law input defines a custom law. 3 law inputs fail their checks on purpose, so the notebook does not run them.

```rust
//| caption: The law and the model.
let _laws = law_ids();
let law_at = choice("Law", &_laws.iter().map(|id| law_title(id)).collect::<Vec<_>>(), _laws.iter().position(|l| *l == "binomial").unwrap_or(0));
let _list = models_of(_laws[law_at]);
let entry: &Value = _list[choice("Model", &_list.iter().map(|m| model_title(m)).collect::<Vec<_>>(), _list.iter().position(|m| m["id"] == "binomial-overbooking").unwrap_or(0))];
let id = s(&entry["id"]);
```

```rust
//| caption: The question, the reasons for the model and the model text.
html(&about(entry));
```

The model text has 1 statement on each line:

- `title:`, `problem:`, `initial:`, `dynamics:`, `observation:`, `censoring:`, `truncation:` and `selection:` describe the model in words. A censoring line also adds the observed time `T_obs` and the event indicator `T_event`.
- `param p = 0.3 "note"` sets a parameter.
- `X ~ binomial(n = 10, p = p) repeat 3 {unit} "note"` draws a random variable, and `repeat` makes a vector of independent copies.
- `name := expression` defines a value from earlier names.
- `prob q = condition`, `mean q = expression` and `ratio q = E[a] / E[b]` are the quantities to estimate.
- `alt "label": a = 1; b = 2` is an alternative. `maximise q` or `minimise q` is the objective, and `require q <= 0.05` is a constraint.
- `focus X` names the variable of the plots. `control C = expression` names the control variate.
- `law NAME(params) pdf(x) = expression on [lo, hi]` defines a custom law by its PDF, PMF, CDF, quantile function, MGF or characteristic function.

## Settings

The method sets the sampler of every law and the estimator. The parameter settings apply to all the alternatives. A comparison method runs the same replicates again and gives the variance ratio. An assumption failure breaks 1 assumption of 1 method on purpose.

```rust
//| caption: The settings of the run.
let _set = &entry["settings"];
let _ids: Vec<&str> = model::METHODS.iter().map(|m| m.0).collect();
let _names: Vec<&str> = model::METHODS.iter().map(|m| m.1).collect();
let method = pick("Method", s(&_set["method"]), &_ids, &_names);
let compare = pick("Comparison method", s(&_set["compare"]), &[&["none"][..], &_ids[..]].concat(), &[&["None"][..], &_names[..]].concat());
let common = choice("Random numbers of the alternatives", &["Common: the same streams for all the alternatives", "Separate: one stream for each alternative"], 0) == 0;
let failure = FAILURES[choice("Assumption failure", &FAILURES.map(|f| f.1), 0)].0;
let params = field(&format!("Parameter settings of {id}, such as p = 0.4; n = 12"), s(&_set["params"]));
let stratify = field(&format!("Stratified variable of {id} (empty: the focus variable)"), "");
let strata = slider("Strata of the stratified method: 2^k", 1.0, 6.0, 1.0, 4.0) as u32;
let _size = _set["size"].as_u64().unwrap_or(16).min(16) as f64;
let size = slider(&format!("Replicates: 2^k (the model sets k = {})", _set["size"].as_u64().unwrap_or(16)), 6.0, 16.0, 1.0, _size) as u32;
let seed = slider("Seed", 0.0, 9999.0, 1.0, 2026.0) as u64;
```

## Results

The Interval column names each 95 % interval, or tells why there is none.

```rust
//| caption: Compile the model and run it.
let settings = Settings { seed, method: method.clone(), compare: compare.clone(), failure: failure.into(), overrides: vec![], common, strata, stratify: stratify.trim().into() };
let compiled = compile(s(&entry["dsl"]), &params, &settings);
let n = compiled.as_ref().map_or(0, |m| replicates(m, size));
let stats = compiled.as_ref().ok().map(|m| model::run(m, &method, 0, n));
let exact: Vec<Result<(Vec<Option<f64>>, Vec<(f64, f64)>), String>> = compiled.as_ref().map_or(vec![], |m| (0..m.alts.len()).map(|a| model::enumerate(m, a)).collect());
```

```rust
//| caption: The estimates, the exact values, the paired differences and the decision.
match (&compiled, &stats) {
    (Err(e), _) => html(&format!("<p>The model does not compile:</p>{}", bullets(e))),
    (_, Some(Err(e))) => println!("The run stopped. {}", fit(e)),
    (Ok(m), Some(Ok(st))) => report(m, st, &exact, size),
    _ => {}
}
```

```rust
//| caption: The comparison method on the same replicates.
if let (Ok(m), Some(Ok(st)), false) = (&compiled, &stats, compare == "none") {
    match model::run(m, &compare, 0, n) {
        Err(e) => println!("The comparison run stopped. {}", fit(&e)),
        Ok(other) => versus(m, st, &other),
    }
} else {
    println!("No comparison method.");
}
```

## The law of the focus variable

A logarithmic vertical axis shows a tail that a linear axis hides. The tail plot shows a power law as a straight line. A sample PDF has 40 bins between the 0.5 % and 99.5 % quantiles.

```rust
//| caption: The plot, the axis and the alternative.
let plot = pick("Plot", s(&entry["settings"]["plot"]), &PLOTS.map(|p| p.0), &PLOTS.map(|p| p.1));
let log_y = pick("Vertical axis", s(&entry["settings"]["yscale"]), &["linear", "log"], &["Linear", "Logarithmic"]) == "log";
let alt = choice("Alternative in the plots", &compiled.as_ref().map_or(vec!["–".to_string()], |m| m.alts.iter().map(|a| fit(&a.0)).collect()), 0);
let quantity = choice("Quantity in the plots", &compiled.as_ref().map_or(vec!["–".to_string()], |m| m.qs.iter().map(|q| q.name.clone()).collect()), 0);
```

```rust
//| caption: The run against the exact law of the focus variable.
if let (Ok(m), Some(Ok(st))) = (&compiled, &stats) {
    let marginal = exact.get(alt).and_then(|e| e.as_ref().ok()).map(|e| e.1.as_slice());
    focus_plot(m, st, alt, &plot, log_y, marginal);
}
```

## Convergence

With a finite variance, the interval narrows as 1/√n. A heavy tail shows as jumps that do not stop, and a biased method as an interval that stays away from the exact value.

```rust
//| caption: The estimate and its interval as the run grows.
if let (Ok(m), Some(Ok(st))) = (&compiled, &stats) {
    let truth = exact.get(alt).and_then(|e| e.as_ref().ok()).and_then(|e| e.0[quantity]);
    trace_plot(m, st, alt, quantity, truth);
}
```

## Paths

For a process, the plot shows the first 20 paths of the focus variable.

```rust
//| caption: The first paths of the focus process.
if let (Ok(m), Some(Ok(st))) = (&compiled, &stats) {
    paths_plot(m, st, alt);
}
```

## Multilevel Monte Carlo

Multilevel Monte Carlo (Giles, 2008) adds the differences between time grids to the quantity on the coarsest grid. A fine path and its coarse path use the same Brownian increments, so their difference has a small variance. The sample sizes give the lowest cost for the target error ε, and the notebook adds levels until its bias test passes.

```rust
//| caption: The levels and the estimate for the target ε of the model.
match (&compiled, entry["settings"]["mlmc_eps"].as_f64()) {
    (Ok(m), Some(eps)) => match model::mlmc(&m.rec, &m.settings, alt, quantity, eps) {
        Ok(r) => multilevel(&r, eps),
        Err(e) => println!("The multilevel run stopped. {}", fit(&e)),
    },
    _ => println!("This model sets no target ε for multilevel Monte Carlo. Pick brownian-alarm-mlmc, gbm-option-mlmc or ou-rates-floating."),
}
```

## A parameter sweep

The sweep runs the model at 9 values of 1 parameter, from half to twice its value, with 2^12 replicates at each value. If the value is not positive, the sweep goes from −1 to +1 around it.

```rust
//| caption: The swept parameter.
let sweep = choice("Swept parameter", &compiled.as_ref().map_or(vec!["None".to_string()], |m| std::iter::once("None".to_string()).chain(m.rec.params.iter().map(|p| p[0].clone())).collect()), 0);
```

```rust
//| caption: The estimate against the swept parameter.
if let (Ok(m), true) = (&compiled, sweep > 0) {
    sweep_plot(m, s(&entry["dsl"]), &params, sweep - 1, quantity);
}
```

## A guided interview

Answer the interview to find a law for your quantity. Each rule reads the answers and supports or excludes candidate laws with a weight, records an assumption, or stops with "insufficient evidence".

"I do not know" is a valid answer. The interview then keeps more candidates and records the assumption. The numbers that you type give the parameters of the model by moment matching.

```rust
//| caption: The answers.
let _exs = iv_examples();
let _start = choice("Start the interview from", &std::iter::once("No answers".to_string()).chain(_exs.iter().map(|x| x.0.clone())).collect::<Vec<_>>(), 1);
let (iv_text, iv_notes) = answer_controls(if _start == 0 { "" } else { &_exs[_start - 1].1 });
```

```rust
//| caption: The rules switched off and the candidate to build.
let iv_off = field("Rules switched off: their ids with commas, such as k1, v2", "").split(',').map(str::trim).filter(|x| !x.is_empty()).collect::<Vec<_>>().join(",");
let _ranked = interview::evaluate(ivdata(), &iv_text, &iv_off, "");
let _at = choice("Candidate to build", &std::iter::once("The candidate that the rules rank first".to_string()).chain(_ranked.candidates.iter().map(|c| fit(&c.name))).collect::<Vec<_>>(), 0);
let iv_eval = if _at == 0 { _ranked } else { interview::evaluate(ivdata(), &iv_text, &iv_off, &_ranked.candidates[_at - 1].id) };
```

```rust
//| caption: The status, the answers and the assumptions.
interview_status(&iv_eval, &iv_notes);
```

A rule that you switch off stays in the rule path, but it has no effect.

```rust
//| caption: The rule path.
rule_path(&iv_eval);
```

The score of a candidate is the sum of the weights of the rules that support it, and 2 or more is strong support. Only the rejection tests on the data can separate candidates with the same score.

```rust
//| caption: The candidates.
candidates(&iv_eval);
```

```rust
//| caption: The card of the chosen candidate.
match iv_eval.candidates.iter().chain(&iv_eval.components).find(|c| iv_eval.chosen.as_ref() == Some(&c.id)) {
    Some(c) => html(&iv_card(c)),
    None => println!("The interview chooses no candidate."),
}
```

The notebook writes the chosen candidate as a model text and runs it with independent sampling.

```rust
//| caption: The model of the chosen candidate.
let iv_built = iv_eval.chosen.as_ref().map(|_| interview::build(ivdata(), &iv_eval, None));
match &iv_built {
    None => println!("No model: the interview has no candidate for these answers."),
    Some(Err(f)) => html(&format!("<p>The candidate gives no model:</p>{}{}", bullets(&f.errors), f.text.as_ref().map_or(String::new(), |t| format!("<pre>{}</pre>", esc(t))))),
    Some(Ok(b)) => html(&built_html(b)),
}
```

```rust
//| caption: Run the model of the interview.
if let Some(Ok(b)) = &iv_built {
    let _st = Settings::default();
    match model::prepare(&b.rec, &_st) {
        Err(e) => html(&format!("<p>The model does not compile:</p>{}", bullets(&e))),
        Ok(m) => match model::run(&m, &_st.method, 0, replicates(&m, 12)) {
            Err(e) => println!("The run stopped. {}", fit(&e)),
            Ok(st) => report(&m, &st, &(0..m.alts.len()).map(|a| model::enumerate(&m, a)).collect::<Vec<_>>(), 12),
        },
    }
}
```

## Methods

Each card runs its 3 examples with 2^12 replicates and seed 2026. A variance ratio is the variance of the other method over the variance of this method, for the same number of model evaluations. A ratio above 1 is a gain.

```rust
//| caption: The method card.
let card = &list(1)[choice("Method card", &list(1).iter().map(|m| fit(s(&m["name"]))).collect::<Vec<_>>(), 0)];
html(&method_card(card));
```

```rust
//| caption: The 3 examples of the card.
examples(card);
```

## Data sets

A p-value measures the fit of the data to 1 law, and it does not prove the law. Each fit is by maximum likelihood. The χ² test of a count pools its cells to an expected count of at least 5.

```rust
//| caption: The data set.
let set = &list(2)[choice("Data set", &list(2).iter().map(|d| fit(s(&d["title"]))).collect::<Vec<_>>(), 0)];
dataset(set);
```

## Groups

The 4 notebooks of this series hold the 10 groups of the workbench.

```rust
//| caption: The groups of the workbench and the notebook of each.
table(&["Group", "Title", "Content", "Notebook"], &list(3).iter().map(|g| vec![g["piece"].to_string(), fit(s(&g["title"])), fit(s(&g["content"])), GROUP_HOME.iter().find(|h| g["id"] == h.0).map_or("Not yet built", |h| h.1).to_string()]).collect::<Vec<_>>());
```

# The code

```rust
//| caption: The data and the text.
use engine::doc::{esc, mathml};
use model::{Iv, Model, Settings, Stats};
use serde_json::Value;
use std::sync::OnceLock;

static DATA: OnceLock<[Value; 5]> = OnceLock::new();
/// The models, the methods, the data sets, the groups and the laws.
fn data() -> &'static [Value; 5] {
    DATA.get_or_init(|| [
        data!("viz/monte-carlo-workbench/data/models.json"),
        data!("viz/monte-carlo-workbench/data/methods.json"),
        data!("viz/monte-carlo-workbench/data/datasets.json"),
        data!("viz/monte-carlo-workbench/data/groups.json"),
        data!("viz/monte-carlo-workbench/data/laws.json"),
    ].map(|b| serde_json::from_slice(b).unwrap()))
}
fn list(k: usize) -> &'static [Value] { data()[k].as_array().unwrap() }
fn s(v: &Value) -> &str { v.as_str().unwrap_or("") }
fn or<'a>(a: &'a str, b: &'a str) -> &'a str { if a.is_empty() { b } else { a } }
fn nums(v: &Value) -> Vec<f64> { v.as_array().unwrap().iter().map(|x| x.as_f64().unwrap()).collect() }
fn entry_of(id: &str) -> Option<&'static Value> { list(0).iter().find(|m| m["id"] == id) }

/// The laws that have models, in the order of the catalogue, then the custom laws.
fn law_ids() -> Vec<&'static str> {
    list(4).iter().map(|l| s(&l["id"])).chain(["custom"]).filter(|id| list(0).iter().any(|m| m["law"] == *id)).collect()
}
fn law_title(id: &str) -> String {
    list(4).iter().find(|l| l["id"] == id).map_or("Custom laws: a law that the model defines".into(), |l| fit(s(&l["name"])))
}
fn models_of(law: &str) -> Vec<&'static Value> { list(0).iter().filter(|m| m["law"] == law).collect() }
fn model_title(m: &Value) -> String {
    let kind = match s(&m["kind"]) { "workflow" => "Decision", "experiment" => "Experiment", _ => "Law input" };
    format!("{kind}: {}", fit(s(&m["title"])))
}

/// The assumption failures: the id and its effect.
const FAILURES: [(&str, &str); 5] = [
    ("none", "None"), ("envelope", "Rejection: the envelope constant halved"), ("table_cut", "Inverse transform: the table cut at the 0.99 quantile"),
    ("stream_reuse", "Streams: replicate i uses the streams of replicate i mod 16"), ("control_mean", "Control variates: the control mean 0.1 standard deviation high"),
];
/// The plots of the focus variable.
const PLOTS: [(&str, &str); 5] = [("pmf", "PMF or PDF"), ("cdf", "CDF"), ("survival", "Survival function"), ("quantile", "Quantile function"), ("tail", "Tail: the survival function on log–log axes")];
/// The notebook of this series that holds each group of the workbench.
const GROUP_HOME: [(&str, &str); 9] = [
    ("discrete", "Monte Carlo laws, Monte Carlo models"), ("continuous", "Monte Carlo laws, Monte Carlo models"), ("tails", "Monte Carlo laws, Monte Carlo models"),
    ("constructed", "Monte Carlo laws, Monte Carlo models"), ("dependence", "Monte Carlo laws, Monte Carlo models"), ("interview", "Monte Carlo models"),
    ("rare", "Monte Carlo chains and rare events"), ("mcmc", "Monte Carlo chains and rare events"), ("physics", "Monte Carlo in statistical physics"),
];

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
            'ȳ' => "ybar",
            '∫' => "int ",
            '⌊' => "floor(",
            '⌈' => "ceil(",
            '⌋' | '⌉' => ")",
            '€' => "EUR ",
            c => { out.push(c); continue }
        };
        out += rep;
    }
    out
}
fn bullets<S: AsRef<str>>(v: &[S]) -> String { format!("<ul>{}</ul>", v.iter().map(|x| format!("<li>{}</li>", esc(&fit(x.as_ref())))).collect::<String>()) }
fn texts(v: &Value) -> Vec<&str> { v.as_array().map_or(vec![], |a| a.iter().map(s).collect()) }
fn para(t: &str) -> String { format!("<p>{}</p>", esc(&fit(t))) }

/// The page of a model: its question, its reasons and its text.
fn about(m: &Value) -> String {
    let mut h = String::new();
    for (k, name) in [("decision", ""), ("reason", "Why this law"), ("inputs", "Inputs"), ("dependence", "Dependence"), ("method", "Method"),
        ("diagnostics", "Diagnostics"), ("interpretation", "Interpretation"), ("observe", "What to observe")] {
        if let Some(t) = m[k].as_str() { h += &format!("<p>{}{}</p>", if name.is_empty() { String::new() } else { format!("<strong>{name}.</strong> ") }, esc(&fit(t))) }
    }
    match (m["data"]["dataset"].as_str(), m["data"]["text"].as_str()) {
        (Some(d), _) => h += &format!("<p><strong>Data.</strong> {}, in the chapter Data sets.</p>", esc(&fit(s(&list(2).iter().find(|x| x["id"] == d).unwrap()["title"])))),
        (_, Some(t)) => h += &format!("<p><strong>Data.</strong> {}</p>", esc(&fit(t))),
        _ => {}
    }
    if let Some(f) = m["fails"].as_str() { h += &format!("<p>This law input fails its {f} check on purpose.</p>") }
    h + &format!("<pre>{}</pre>", esc(&fit(s(&m["dsl"]))))
}

/// A method card: the estimator, the assumptions, the settings and the 3 examples.
fn method_card(m: &Value) -> String {
    let with = list(1).iter().find(|x| x["id"] == m["comparison"]["with"]).map_or("", |x| s(&x["name"]));
    format!("<p><strong>{}.</strong> {}.</p>{}{}<h3>Assumptions</h3>{}<h3>Settings</h3>{}<h3>Where it suits</h3>{}<h3>Where it fails</h3>{}<h3>Comparison with {}</h3>{}",
        esc(&fit(s(&m["name"]))), esc(&fit(s(&m["family"]))), mathml(s(&m["estimator"]), true), para(s(&m["estimatorText"])), bullets(&texts(&m["assumptions"])),
        bullets(&texts(&m["settings"])), para(s(&m["suitable"]["text"])), para(s(&m["failure"]["text"])), esc(&with.to_lowercase()), para(s(&m["comparison"]["text"])))
}
```

```rust
//| caption: Compile, run and report.
/// A choice whose first option is the model's own setting; returns the id that it picks.
fn pick(label: &str, own: &str, ids: &[&str], names: &[&str]) -> String {
    let at = ids.iter().position(|x| *x == own).unwrap_or(0);
    let opts: Vec<String> = std::iter::once(format!("As the model sets: {}", names[at])).chain(names.iter().map(|n| n.to_string())).collect();
    match choice(label, &opts, 0) { 0 => ids[at].into(), k => ids[k - 1].into() }
}

/// The model of a text with the parameter settings "a = 1; b = [0.2, 0.8]", or all its errors.
fn compile(text: &str, params: &str, s: &Settings) -> Result<Model, Vec<String>> {
    let (rec, errors) = model::parse(text);
    if !errors.is_empty() { return Err(errors) }
    let ov = if params.trim().is_empty() { vec![] } else { model::overrides(params).map_err(|e| vec![format!("Parameter settings: {e}")])? };
    let bad: Vec<String> = ov.iter().filter(|o| !rec.params.iter().any(|p| p[0] == o.0)).map(|o| format!("Parameter settings: {} is not a parameter of the model.", o.0)).collect();
    if !bad.is_empty() { return Err(bad) }
    model::prepare(&rec, &Settings { overrides: ov, ..s.clone() })
}

/// The values that a run in the page draws at most, about a second of WebAssembly.
const BUDGET: f64 = 1048576.0;
/// The replicates of a run: 2^k, or fewer when the model draws many values in one replicate.
fn replicates(m: &Model, k: u32) -> u64 {
    let most = (BUDGET / (m.cost.max(1.0) * m.alts.len() as f64)).log2().floor().max(6.0) as u32;
    1 << k.min(most)
}

fn fmt(x: f64) -> String { model::sig(x, 4) }
fn opt(x: Option<f64>) -> String { x.map_or("–".into(), fmt) }
fn span(r: &Iv) -> String { r.lo.zip(r.hi).map_or("–".into(), |(a, b)| format!("{} to {}", fmt(a), fmt(b))) }
fn pm(r: &Iv) -> String { match (r.est, r.se) { (Some(e), Some(s)) => format!("{} ± {}", fmt(e), fmt(Z95 * s)), (Some(e), None) => fmt(e), _ => "–".into() } }
fn method_name(id: &str) -> &'static str { model::METHODS.iter().find(|m| m.0 == id).map_or("", |m| m.1) }
fn head(h: &[String]) -> Vec<&str> { h.iter().map(String::as_str).collect() }

/// The estimates with their exact values, the paired differences and the decision.
fn report(m: &Model, st: &Stats, exact: &[Result<(Vec<Option<f64>>, Vec<(f64, f64)>), String>], size: u32) {
    let n = replicates(m, size);
    println!("{} replicates of each alternative, {}, seed {}.{}", n, method_name(&st.method).to_lowercase(), m.settings.seed,
        if n < 1 << size { format!(" One replicate draws about {} values, so the notebook runs 2^{} replicates and not 2^{size}.", fmt(m.cost), n.ilog2()) } else { String::new() });
    let est = model::estimates(m, st);
    let mut rows = vec![];
    for (q, qu) in m.qs.iter().enumerate() {
        for a in 0..m.alts.len() {
            let r = &est[a][q];
            let name = if qu.note.is_empty() { qu.name.clone() } else { format!("{}: {}", qu.name, fit(&qu.note)) };
            rows.push(vec![name, fit(&m.alts[a].0), opt(r.est), span(r), opt(exact[a].as_ref().ok().and_then(|e| e.0[q])), fit(&r.how)]);
        }
    }
    table(&["Quantity", "Alternative", "Estimate", "95 % interval", "Exact", "Interval"], &rows);
    if let Some(e) = exact.iter().find_map(|e| e.as_ref().err()) { println!("No exact values: {}", fit(e)) }
    if st.proposals > 0 { println!("Rejection: {} of {} proposals accepted ({}).", st.accepts, st.proposals, fmt(st.accepts as f64 / st.proposals as f64)) }
    if m.alts.len() < 2 { return }
    let diffs = model::differences(m, st, &est);
    let mut rows = vec![];
    for (p, &(a, b)) in st.pairs.iter().enumerate() {
        for (q, qu) in m.qs.iter().enumerate().filter(|q| q.1.kind != 'r') {
            let (r, gain) = &diffs[p][q];
            rows.push(vec![qu.name.clone(), format!("{} − {}", fit(&m.alts[b].0), fit(&m.alts[a].0)), opt(r.est), span(r), opt(*gain)]);
        }
    }
    table(&["Quantity", "Difference", "Estimate", "95 % interval", "Gain of the pairs"], &rows);
    let (verdicts, best, separated, text) = model::decide(m, &est, &diffs, &st.pairs);
    if !m.rec.constraints.is_empty() {
        let h: Vec<String> = std::iter::once("Alternative".to_string()).chain(m.rec.constraints.iter().map(|c| format!("{} {} {}", c.0, if c.1 { "≤" } else { "≥" }, fmt(c.2)))).collect();
        table(&head(&h), &verdicts.iter().enumerate().map(|(a, v)| std::iter::once(fit(&m.alts[a].0)).chain(v.iter().map(|x| x.to_string())).collect()).collect::<Vec<Vec<String>>>());
    }
    match best {
        Some(b) => println!("The best admissible alternative in this run is {}. {}", fit(&m.alts[b].0), if separated { "The paired 95 % intervals separate it from every other admissible alternative." }
            else { "The paired 95 % intervals do not separate it from every other admissible alternative yet: run more replicates." }),
        None => println!("{text}"),
    }
}

/// The method against the comparison method on the same replicates: the variance ratio for the same number of evaluations.
fn versus(m: &Model, a: &Stats, b: &Stats) {
    let (ea, eb) = (model::estimates(m, a), model::estimates(m, b));
    let mut rows = vec![];
    for (q, qu) in m.qs.iter().enumerate() {
        for k in 0..m.alts.len() {
            let (x, y) = (&ea[k][q], &eb[k][q]);
            let ratio = match (x.se, y.se) { (Some(p), Some(r)) if p > 0.0 => Some(r * r / (p * p)), _ => None };
            rows.push(vec![qu.name.clone(), fit(&m.alts[k].0), pm(x), pm(y), opt(ratio)]);
        }
    }
    let h = ["Quantity".to_string(), "Alternative".into(), method_name(&a.method).into(), method_name(&b.method).into(), "Variance ratio".into()];
    table(&head(&h), &rows);
}
```

```rust
//| caption: The plots.
/// The values of the focus variable against its exact law: from the law of the variable, or from the marginal of the enumeration.
fn focus_plot(m: &Model, st: &Stats, a: usize, kind: &str, log_y: bool, marginal: Option<&[(f64, f64)]>) {
    let mut xs: Vec<f64> = st.focus[a].iter().copied().filter(|x| x.is_finite()).collect();
    if xs.is_empty() { println!("The run has no values of the focus variable."); return }
    xs.sort_by(f64::total_cmp);
    let n = xs.len() as f64;
    let q = |p: f64| xs[((p * n) as usize).min(xs.len() - 1)];
    let below = |x: f64| xs.partition_point(|v| *v <= x) as f64 / n;
    let law = m.node(&m.focus.0).and_then(|nd| m.bound(nd, a));
    let discrete = law.as_ref().map_or(xs.iter().all(|x| x.fract() == 0.0), |b| b.discrete());
    let exact = |f: &str, x: f64| -> Option<f64> {
        if let Some(b) = &law { return Some(match f { "pdf" => b.pdf(x), "cdf" => b.cdf(x), "sf" => b.sf(x), _ => b.quantile(x) }) }
        let mm = marginal?;
        let sum = |t: &dyn Fn(f64) -> bool| mm.iter().filter(|p| t(p.0)).map(|p| p.1).sum::<f64>();
        Some(match f {
            "pdf" => sum(&|v| v == x), "cdf" => sum(&|v| v <= x), "sf" => sum(&|v| v > x),
            _ => { let mut c = 0.0; mm.iter().find(|p| { c += p.1; c >= x - 1e-12 }).map_or(f64::NAN, |p| p.0) }
        })
    };
    let (lo, hi) = (q(0.005), q(0.995));
    let grid = |a: f64, b: f64| -> Vec<f64> { if discrete && b - a <= 400.0 { (0..=(b - a) as usize).map(|k| a + k as f64).collect() } else { (0..=200).map(|k| a + (b - a) * k as f64 / 200.0).collect() } };
    let (mut sample, mut line) = (vec![], vec![]);
    let name = match kind { "pmf" if discrete => "PMF", "pmf" => "PDF", "cdf" => "CDF", "quantile" => "Quantile function", _ => "Survival function" };
    match kind {
        "pmf" if discrete && hi - xs[0] <= 400.0 => for x in grid(xs[0], hi) {
            sample.push((x, below(x) - below(x - 0.5)));
            line.extend(exact("pdf", x).map(|y| (x, y)));
        },
        "pmf" => {
            let w = (hi - lo) / 40.0;
            for k in 0..40 {
                let (a, b) = (lo + k as f64 * w, lo + (k + 1) as f64 * w);
                let d = (below(b) - below(a)) / w;
                sample.extend([(a, d), (b, d)]);
            }
            for x in grid(lo, hi) { line.extend(exact("pdf", x).map(|y| (x, y))) }
        }
        "cdf" | "survival" => {
            let (a, b) = if kind == "cdf" { (lo, hi) } else { (xs[0], xs[xs.len() - 1]) };
            for x in grid(a, b) {
                sample.push((x, if kind == "cdf" { below(x) } else { 1.0 - below(x) }));
                line.extend(exact(if kind == "cdf" { "cdf" } else { "sf" }, x).map(|y| (x, y)));
            }
        }
        "quantile" => for k in 1..200 {
            let u = k as f64 / 200.0;
            sample.push((u, q(u)));
            line.extend(exact("quantile", u).map(|y| (u, y)));
        },
        _ => {
            let pos: Vec<f64> = xs.iter().copied().filter(|x| *x > 0.0).collect();
            if pos.len() < 2 { println!("The tail plot needs positive values."); return }
            let (a, b) = (pos[pos.len() / 2].max(pos[0]), pos[pos.len() - 1]);
            for k in 0..=100 {
                let x = a * (b / a).powf(k as f64 / 100.0);
                sample.push((x.log10(), (1.0 - below(x)).log10()));
                line.extend(exact("sf", x).map(|y| (x.log10(), y.log10())));
            }
        }
    }
    let log = log_y && kind != "tail" && kind != "quantile";
    let fix = |v: Vec<(f64, f64)>| -> (Vec<f64>, Vec<f64>) {
        v.into_iter().filter(|p| p.1.is_finite() && (!log || p.1 > 0.0)).map(|p| (p.0, if log { p.1.log10() } else { p.1 })).filter(|p| p.1.is_finite()).unzip()
    };
    let ((sx, sy), (lx, ly)) = (fix(sample), fix(line));
    let mut p = if kind == "pmf" && !discrete { Plot::new().line(&sx, &sy) } else { Plot::new().dots(&sx, &sy) };
    if !lx.is_empty() { p = p.line(&lx, &ly) }
    let x = if kind == "tail" { format!("log10 {}", m.focus.0) } else if kind == "quantile" { "u".into() } else { m.focus.0.clone() };
    let y = format!("{}{name}{}", if log || kind == "tail" { "log10 of the " } else { "" }, if lx.is_empty() { "" } else { " (line: the exact law)" });
    p.labels(&x, &y).show();
    println!("{} values of {} in {}. {}", xs.len(), m.focus.0, fit(&m.alts[a].0), if law.is_some() { "The exact law is the law of the variable." }
        else if marginal.is_some() { "The exact law comes from the enumeration of the joint support." } else { "The notebook knows no exact law of this variable: it is a function of several variables, or the support is too large." });
}

/// The estimate of quantity q and its interval at n = 16, 32, … against the exact value.
fn trace_plot(m: &Model, st: &Stats, a: usize, q: usize, truth: Option<f64>) {
    let pts: Vec<(f64, &Iv)> = st.trace.iter().map(|t| (t.0.log2(), &t.1[a][q])).filter(|t| t.1.est.is_some()).collect();
    if pts.is_empty() { println!("The run is too short for a trace."); return }
    let (x, e): (Vec<f64>, Vec<f64>) = pts.iter().map(|t| (t.0, t.1.est.unwrap())).unzip();
    let (bx, lo, hi): (Vec<f64>, Vec<f64>, Vec<f64>) = pts.iter().filter_map(|t| Some((t.0, t.1.lo?, t.1.hi?))).fold((vec![], vec![], vec![]), |mut v, t| { v.0.push(t.0); v.1.push(t.1); v.2.push(t.2); v });
    let mut p = Plot::new().line(&x, &e).line(&bx, &lo).line(&bx, &hi);
    if let Some(t) = truth { p = p.rule(t) }
    p.labels("log2 n", &format!("{} (lines: the estimate and its 95 % interval{})", m.qs[q].name, if truth.is_some() { "; rule: the exact value" } else { "" })).show();
}

/// The first 20 paths of the focus process.
fn paths_plot(m: &Model, st: &Stats, a: usize) {
    let ps = &st.paths[a];
    if ps.is_empty() { println!("The focus variable of this model is not a process."); return }
    let times = m.node(&m.focus.0).and_then(|nd| match &nd.item {
        model::Item::Var(v) if v.constant => match &v.law { model::Law::Dep(id) => dep::times(id, &v.fixed[a]), _ => None },
        _ => None,
    });
    let mut p = Plot::new();
    for path in ps {
        let t: Vec<f64> = times.clone().filter(|t| t.len() == path.len()).unwrap_or_else(|| (0..path.len()).map(|i| i as f64).collect());
        p = p.line(&t, path);
    }
    p.labels(if times.is_some() { "t" } else { "step" }, &format!("{} (the first {} paths)", m.focus.0, ps.len())).show();
}

/// The levels of a multilevel run and its estimate.
fn multilevel(r: &model::Mlmc, eps: f64) {
    table(&["Level", "Steps", "Replicates", "Mean of Y_l", "Variance of Y_l", "Steps of one replicate"],
        &r.levels.iter().enumerate().map(|(l, x)| vec![l.to_string(), fmt(x.0), fmt(x.1), fmt(x.2), fmt(x.3), fmt(x.4)]).collect::<Vec<_>>());
    println!("Estimate {} ± {} (95 %), for the target root mean square error ε = {}.", fmt(r.est), fmt(Z95 * r.se), fmt(eps));
    if let Some(b) = r.bias { println!("Bias estimate of the finest level: {}.", fmt(b)) }
    println!("The work is {} steps. Plain Monte Carlo on the finest grid needs about {} steps for the same variance.", fmt(r.work), opt(r.plain));
    println!("Fitted rates: the mean of Y_l decays as 2^(−{} l) and its variance as 2^(−{} l).", fmt(r.alpha), opt(r.beta));
    if !r.message.is_empty() { println!("{}", fit(&r.message)) }
}

/// The estimate of quantity q of each alternative at 9 values of parameter k, with 2^12 replicates at each.
fn sweep_plot(m: &Model, text: &str, params: &str, k: usize, q: usize) {
    let name = &m.rec.params[k][0];
    let Some(v) = m.slot(name).and_then(|i| m.alts[0].1[i].num()) else { println!("The parameter {name} is a vector, so the notebook does not sweep it."); return };
    let xs: Vec<f64> = (0..9).map(|i| if v > 0.0 { v * 2f64.powf((i as f64 - 4.0) / 4.0) } else { v + (i as f64 - 4.0) / 4.0 }).collect();
    let mut rows = vec![];
    let mut lines: Vec<(Vec<f64>, Vec<f64>)> = vec![(vec![], vec![]); m.alts.len()];
    for x in &xs {
        let mut row = vec![fmt(*x)];
        match compile(text, &format!("{name} = {x}; {params}"), &m.settings).and_then(|mm| model::run(&mm, &m.settings.method, 0, replicates(&mm, 12)).map(|st| model::estimates(&mm, &st)).map_err(|e| vec![e])) {
            Ok(est) => for (a, l) in lines.iter_mut().enumerate() {
                if let Some(e) = est[a][q].est { l.0.push(*x); l.1.push(e) }
                row.push(format!("{} ({})", opt(est[a][q].est), span(&est[a][q])));
            },
            Err(e) => row.push(fit(&e[0])),
        }
        rows.push(row);
    }
    let mut p = Plot::new();
    for l in &lines { p = p.line(&l.0, &l.1) }
    p.labels(name, &format!("{} (a line for each alternative)", m.qs[q].name)).show();
    let h: Vec<String> = std::iter::once(name.clone()).chain(m.alts.iter().map(|a| fit(&a.0))).collect();
    table(&head(&h), &rows);
}

/// The 3 examples of a method card, with 2^12 replicates and seed 2026: the model where it suits, the model where it
/// fails, and the comparison on the same replicates.
fn examples(card: &Value) {
    let id = s(&card["id"]);
    let own = match id { "crn" => "independent", "mlmc" => "euler", x => x };
    for (role, ex) in [("Where it suits", &card["suitable"]), ("Where it fails", &card["failure"]), ("Comparison", &card["comparison"])] {
        let Some(e) = entry_of(s(&ex["model"])) else { continue };
        let set = &ex["settings"];
        let with = |method: &str, common: bool| Settings { method: method.into(), failure: or(s(&set["failure"]), "none").into(), stratify: s(&set["stratify"]).into(),
            common, ..Default::default() };
        let mut runs = vec![with(if role == "Comparison" { own } else { or(s(&set["method"]), own) }, !(role != "Comparison" && set["streams"] == "separate"))];
        if role == "Comparison" { runs.push(with(s(&ex["with"]), set["streams"] != "separate")) }
        let what = |r: &Settings| format!("{}{}{}", method_name(&r.method).to_lowercase(), if r.common { "" } else { ", separate streams" },
            FAILURES.iter().find(|f| f.0 == r.failure && f.0 != "none").map_or(String::new(), |f| format!(", failure: {}", f.1.to_lowercase())));
        html(&format!("<h3>{role}: {}</h3>", esc(&fit(s(&e["title"])))));
        if id == "mlmc" {
            let eps = e["settings"]["mlmc_eps"].as_f64().unwrap_or(0.05);
            match compile(s(&e["dsl"]), s(&e["settings"]["params"]), &runs[0]).map_err(|x| x[0].clone()).and_then(|m| model::mlmc(&m.rec, &m.settings, 0, 0, eps)) {
                Ok(r) => println!("Multilevel Monte Carlo for ε = {}: {} ± {} with {} steps of work; plain Monte Carlo on the finest grid needs about {}.", fmt(eps), fmt(r.est), fmt(Z95 * r.se), fmt(r.work), opt(r.plain)),
                Err(x) => println!("The multilevel run stopped. {}", fit(&x)),
            }
            if role != "Comparison" { continue }
            runs.remove(0);
        }
        let done: Vec<Result<(Model, Stats), String>> = runs.iter().map(|r| compile(s(&e["dsl"]), s(&e["settings"]["params"]), r).map_err(|x| x[0].clone())
            .and_then(|m| { let n = replicates(&m, 12); model::run(&m, &r.method, 0, n).map(|st| (m, st)) })).collect();
        if let Some(Err(x)) = done.iter().find(|d| d.is_err()) { println!("The run stopped. {}", fit(x)); continue }
        let done: Vec<&(Model, Stats)> = done.iter().map(|d| d.as_ref().unwrap()).collect();
        let m = &done[0].0;
        let pairs = id == "crn" && m.alts.len() > 1;
        let rows: Vec<Vec<String>> = m.qs.iter().enumerate().filter(|q| !pairs || q.1.kind != 'r').map(|(q, qu)| {
            let ivs: Vec<Iv> = done.iter().map(|(m, st)| { let est = model::estimates(m, st); if pairs { model::differences(m, st, &est)[0][q].0.clone() } else { est[0][q].clone() } }).collect();
            let mut row = vec![qu.name.clone()];
            row.extend(ivs.iter().map(pm));
            if ivs.len() == 2 { row.push(opt(ivs[1].se.zip(ivs[0].se).filter(|x| x.1 > 0.0).map(|(b, a)| b * b / (a * a)))) }
            else { row.push(opt(model::enumerate(m, 0).ok().and_then(|x| x.0[q]))) }
            row
        }).collect();
        let mut h = vec![if pairs { format!("Difference {} − {}", fit(&m.alts[1].0), fit(&m.alts[0].0)) } else { "Quantity".into() }];
        h.extend(runs.iter().map(what));
        h.push(if runs.len() == 2 { "Variance ratio".into() } else { "Exact".into() });
        table(&head(&h), &rows);
    }
}
```

```rust
//| caption: The data sets and their fits.
/// A data set: its source, its values, and the fit of its law.
fn dataset(d: &Value) {
    html(&format!("<p>Unit: {}.</p><p>Source: {}</p><p>Date: {}. Licence: {}</p>", esc(&fit(s(&d["unit"]))), esc(&fit(s(&d["source"]))), esc(&fit(s(&d["date"]))), esc(&fit(s(&d["licence"])))));
    let (v, c) = (nums(&d["values"]), d["counts"].as_array().map(|_| nums(&d["counts"])).unwrap_or_default());
    match s(&d["kind"]) {
        "series" => series(&nums(&d["years"]), &v),
        "trials" => {
            let h = format!("O-rings with thermal distress, of {}", d["atRisk"]);
            table(&["Flight", "Temperature at launch, °F", &h],
                &nums(&d["flights"]).iter().zip(&v).zip(&c).map(|((f, t), k)| vec![fmt(*f), fmt(*t), fmt(*k)]).collect::<Vec<_>>());
            println!("The Monte Carlo chains and rare events notebook of this series fits a logistic model to these flights.");
        }
        _ => counts(&v, &c, d["trials"].as_f64()),
    }
}

/// Counts of the values v: the maximum likelihood fit of the Poisson law, or of the binomial law with the given
/// trials, and Pearson's χ² test with the cells pooled to an expected count of at least 5.
fn counts(v: &[f64], c: &[f64], trials: Option<f64>) {
    let n: f64 = c.iter().sum();
    let mean = v.iter().zip(c).map(|(x, k)| x * k).sum::<f64>() / n;
    let pmf = |k: f64| match trials {
        Some(t) => { let p = mean / t; (lchoose(t, k) + k * p.ln() + (t - k) * (1.0 - p).ln()).exp() }
        None => (k * mean.ln() - mean - lgam(k + 1.0)).exp(),
    };
    let last = v.len() - 1;
    let expected: Vec<f64> = v.iter().enumerate().map(|(i, x)| n * if i == last { 1.0 - (0..*x as usize).map(|j| pmf(j as f64)).sum::<f64>() } else if i == 0 { (0..=*x as usize).map(|j| pmf(j as f64)).sum() } else { pmf(*x) }).collect();
    table(&["Value", "Observed", "Expected, fitted law"], &v.iter().enumerate().map(|(i, x)| vec![format!("{}{}", fmt(*x), if i == last { " or more" } else { "" }), fmt(c[i]), format!("{:.1}", expected[i])]).collect::<Vec<_>>());
    let (mut cells, mut o, mut e) = (vec![], 0.0, 0.0);
    for i in 0..v.len() {
        o += c[i];
        e += expected[i];
        if e >= 5.0 || i == last { cells.push((o, e)); o = 0.0; e = 0.0 }
    }
    if cells.len() > 1 && cells[cells.len() - 1].1 < 5.0 { let l = cells.pop().unwrap(); let k = cells.len() - 1; cells[k].0 += l.0; cells[k].1 += l.1 }
    let stat: f64 = cells.iter().map(|(o, e)| (o - e).powi(2) / e).sum();
    let df = cells.len() as f64 - 2.0;
    println!("{} observations, mean {}. Maximum likelihood estimate: {} = {}.", fmt(n), fmt(mean), if trials.is_some() { "p" } else { "λ" }, fmt(trials.map_or(mean, |t| mean / t)));
    println!("Pearson's χ² against the fitted law: {} on {} degrees of freedom, p = {}, with {} cells after pooling.", fmt(stat), fmt(df), if df > 0.0 { fmt(gamma_pq(df / 2.0, stat / 2.0).1) } else { "–".into() }, cells.len());
}

/// The GEV law: the PDF and the quantile function at (μ, σ, ξ).
fn gev_pdf(x: f64, p: [f64; 3]) -> f64 {
    let z = (x - p[0]) / p[1];
    if p[2].abs() < 1e-9 { return (-z - (-z).exp()).exp() / p[1] }
    let t = 1.0 + p[2] * z;
    if t <= 0.0 { 0.0 } else { t.powf(-1.0 / p[2] - 1.0) * (-t.powf(-1.0 / p[2])).exp() / p[1] }
}
fn gev_quantile(u: f64, p: [f64; 3]) -> f64 { if p[2].abs() < 1e-9 { p[0] - p[1] * (-u.ln()).ln() } else { p[0] + p[1] * ((-u.ln()).powf(-p[2]) - 1.0) / p[2] } }

/// Nelder–Mead minimisation of f from x0 with first steps `step`, to a relative change of 1e-12 or 4000 steps.
fn nelder_mead(f: &dyn Fn(&[f64]) -> f64, x0: &[f64], step: &[f64]) -> (Vec<f64>, f64) {
    let n = x0.len();
    let mut pts: Vec<(Vec<f64>, f64)> = std::iter::once(x0.to_vec()).chain((0..n).map(|i| { let mut x = x0.to_vec(); x[i] += step[i]; x })).map(|x| { let v = f(&x); (x, v) }).collect();
    for _ in 0..4000 {
        pts.sort_by(|a, b| a.1.total_cmp(&b.1));
        if (pts[n].1 - pts[0].1).abs() <= 1e-12 * (pts[0].1.abs() + 1e-12) { break }
        let c: Vec<f64> = (0..n).map(|j| pts[..n].iter().map(|p| p.0[j]).sum::<f64>() / n as f64).collect();
        let at = |t: f64, w: &[f64]| { let x: Vec<f64> = c.iter().zip(w).map(|(c, w)| c + t * (w - c)).collect(); let v = f(&x); (x, v) };
        let r = at(-1.0, &pts[n].0);
        if r.1 < pts[0].1 { let e = at(-2.0, &pts[n].0); pts[n] = if e.1 < r.1 { e } else { r } }
        else if r.1 < pts[n - 1].1 { pts[n] = r }
        else {
            let k = at(if r.1 < pts[n].1 { -0.5 } else { 0.5 }, &pts[n].0);
            if k.1 < r.1.min(pts[n].1) { pts[n] = k } else {
                let best = pts[0].0.clone();
                for p in pts.iter_mut().skip(1) { p.0 = p.0.iter().zip(&best).map(|(v, b)| b + 0.5 * (v - b)).collect(); p.1 = f(&p.0) }
            }
        }
    }
    pts.sort_by(|a, b| a.1.total_cmp(&b.1));
    pts.swap_remove(0)
}

/// The inverse of a matrix by Gauss–Jordan elimination, or None when it is singular.
fn inverse(m: &[Vec<f64>]) -> Option<Vec<Vec<f64>>> {
    let n = m.len();
    let mut a: Vec<Vec<f64>> = m.iter().enumerate().map(|(i, r)| r.iter().copied().chain((0..n).map(|j| (i == j) as u8 as f64)).collect()).collect();
    for i in 0..n {
        let piv = (i..n).max_by(|&x, &y| a[x][i].abs().total_cmp(&a[y][i].abs())).unwrap();
        if !(a[piv][i].abs() > 1e-300) { return None }
        a.swap(i, piv);
        let d = a[i][i];
        a[i].iter_mut().for_each(|x| *x /= d);
        for r in 0..n { if r != i { let f = a[r][i]; let row = a[i].clone(); a[r].iter_mut().zip(&row).for_each(|(x, y)| *x -= f * y) } }
    }
    Some(a.into_iter().map(|r| r[n..].to_vec()).collect())
}

/// The GEV and Gumbel fits of annual maxima: (μ, σ, ξ, log-likelihood) with standard errors, and the deviance of ξ = 0.
#[derive(Debug)]
struct Gev { gev: (f64, f64, f64, f64), gumbel: (f64, f64, f64, f64), se: Vec<Option<f64>>, se0: Vec<Option<f64>>, deviance: f64 }
fn gev_fit(x: &[f64]) -> Gev {
    let n = x.len() as f64;
    let mean = x.iter().sum::<f64>() / n;
    let sd = (x.iter().map(|v| (v - mean).powi(2)).sum::<f64>() / (n - 1.0)).sqrt();
    // The negative log-likelihood at (μ, log σ, ξ).
    let nll = |t: &[f64]| -> f64 {
        let p = [t[0], t[1].exp(), if t.len() > 2 && t[2].abs() >= 1e-9 { t[2] } else { 0.0 }];
        x.iter().try_fold(0.0, |s, v| { let d = gev_pdf(*v, p); (d > 0.0).then(|| s - d.ln()) }).unwrap_or(1e300)
    };
    // The start from the moments of the Gumbel law: σ = s√6/π, μ = x̄ − 0.5772 σ.
    let s0 = sd * 6f64.sqrt() / PI;
    let g0 = nelder_mead(&|t| nll(&[t[0], t[1], 0.0]), &[mean - 0.5772156649 * s0, s0.ln()], &[s0 / 4.0, 0.2]);
    let full = nelder_mead(&nll, &[g0.0[0], g0.0[1], 0.05], &[s0 / 4.0, 0.2, 0.1]);
    // The standard errors from the inverse of the numerical Hessian; σ is fitted as log σ, so SE(σ) = σ SE(log σ).
    let se = |t: &[f64]| -> Vec<Option<f64>> {
        let k = t.len();
        let h: Vec<f64> = t.iter().enumerate().map(|(i, v)| if i == 1 { 1e-4 } else { 1e-4 * v.abs().max(1.0) }).collect();
        let f = |i: usize, j: usize, a: f64, b: f64| { let mut u = t.to_vec(); u[i] += a * h[i]; u[j] += b * h[j]; nll(&u) };
        let hess: Vec<Vec<f64>> = (0..k).map(|i| (0..k).map(|j| (f(i, j, 1.0, 1.0) - f(i, j, 1.0, -1.0) - f(i, j, -1.0, 1.0) + f(i, j, -1.0, -1.0)) / (4.0 * h[i] * h[j])).collect()).collect();
        match inverse(&hess) {
            Some(v) if (0..k).all(|i| v[i][i] > 0.0) => (0..k).map(|i| Some(if i == 1 { t[1].exp() * v[i][i].sqrt() } else { v[i][i].sqrt() })).collect(),
            _ => vec![None; k],
        }
    };
    Gev { gev: (full.0[0], full.0[1].exp(), full.0[2], -full.1), gumbel: (g0.0[0], g0.0[1].exp(), 0.0, -g0.1), se: se(&full.0), se0: se(&g0.0), deviance: 2.0 * (g0.1 - full.1) }
}

/// The fit of annual maxima: the 2 laws, the deviance test of ξ = 0, the return levels and a probability plot.
fn series(years: &[f64], x: &[f64]) {
    let f = gev_fit(x);
    let p = |g: (f64, f64, f64, f64)| [g.0, g.1, g.2];
    println!("{} years from {} to {}, largest value {}.", x.len(), fmt(years[0]), fmt(years[years.len() - 1]), fmt(x.iter().fold(0.0f64, |a, b| a.max(*b))));
    let row = |name: &str, g: (f64, f64, f64, f64), se: &[Option<f64>]| {
        let e = |i: usize, v: f64| format!("{} ± {}", fmt(v), se.get(i).copied().flatten().map_or("–".into(), |s| fmt(Z95 * s)));
        vec![name.to_string(), e(0, g.0), e(1, g.1), if name == "GEV" { e(2, g.2) } else { "0".into() }, fmt(g.3)]
    };
    table(&["Law", "μ", "σ", "ξ", "Log-likelihood"], &[row("GEV", f.gev, &f.se), row("Gumbel", f.gumbel, &f.se0)]);
    println!("Deviance test of ξ = 0: {} on 1 degree of freedom, p = {}. A large p-value does not prove ξ = 0, and the standard error of ξ shows how far the tail can move.",
        fmt(f.deviance), fmt(gamma_pq(0.5, f.deviance.max(0.0) / 2.0).1));
    table(&["Return period, years", "Return level, GEV", "Return level, Gumbel"], &[10.0, 50.0, 100.0, 200.0].map(|t| vec![fmt(t), fmt(gev_quantile(1.0 - 1.0 / t, p(f.gev))), fmt(gev_quantile(1.0 - 1.0 / t, p(f.gumbel)))]));
    let mut sorted = x.to_vec();
    sorted.sort_by(f64::total_cmp);
    let u: Vec<f64> = (0..sorted.len()).map(|i| (i as f64 + 1.0 - 0.44) / (sorted.len() as f64 + 0.12)).collect();
    let (g, h): (Vec<f64>, Vec<f64>) = u.iter().map(|u| (gev_quantile(*u, p(f.gev)), gev_quantile(*u, p(f.gumbel)))).unzip();
    Plot::new().dots(&g, &sorted).dots(&h, &sorted).line(&[sorted[0], sorted[sorted.len() - 1]], &[sorted[0], sorted[sorted.len() - 1]])
        .labels("quantile of the fitted law at (i − 0.44)/(n + 0.12) (dots: GEV, then Gumbel)", "observed annual maximum").show();
}
```

```rust
//| caption: The guided interview.
static IV: OnceLock<Value> = OnceLock::new();
/// The interview (interview.json) with the groups of the workbench, as the module interview reads them.
fn ivdata() -> &'static Value {
    IV.get_or_init(|| {
        let iv: Value = serde_json::from_slice(data!("viz/monte-carlo-workbench/data/interview.json")).unwrap();
        serde_json::json!({ "interview": iv, "groups": data()[3].clone() })
    })
}
/// The examples of the interview: label and answer text.
fn iv_examples() -> Vec<(String, String)> { ivdata()["interview"]["examples"].as_array().unwrap().iter().map(|x| (fit(s(&x["label"])), s(&x["iv"]).to_string())).collect() }

/// The controls of the interview: a choice for each question that the answers make relevant, in data order, then a
/// text box for each number that they ask. Each starts at the value of the start text. Returns the answer text and the
/// notices of values that the interview cannot use.
fn answer_controls(start: &str) -> (String, Vec<String>) {
    let d = ivdata();
    let own = interview::parse(d, start);
    let (mut iv, mut notes) = (interview::format(d, &own.answers, &own.evidence), own.notices.clone());
    // An option label that two questions share gets the topic of its question, so that a choice never keeps it for another question.
    let all: Vec<&str> = d["interview"]["questions"].as_array().unwrap().iter().flat_map(|q| q["options"].as_array().unwrap().iter().map(|o| s(&o["label"]))).collect();
    for k in 0.. {
        let (qs, _) = interview::form(d, &iv);
        let Some(q) = qs.get(k) else { break };
        let name = |o: &(String, String)| if all.iter().filter(|x| **x == o.1).count() > 1 { format!("{} ({})", fit(&o.1), q.short) } else { fit(&o.1) };
        let mine = own.answers.get(&q.id);
        let set = match mine.map(String::as_str) { None => "no answer".into(), Some("?") => "I do not know".into(), Some(v) => q.options.iter().find(|o| o.0 == v).map_or(v.to_string(), &name) };
        let opts: Vec<String> = [format!("As the start sets: {set}"), format!("No answer on the {}", q.short), format!("I do not know the {}", q.short)].into_iter().chain(q.options.iter().map(&name)).collect();
        let v = match choice(&fit(&q.text), &opts, 0) { 0 => mine.cloned().unwrap_or_default(), 1 => String::new(), 2 => "?".into(), i => q.options[i - 3].0.clone() };
        match interview::set(d, &iv, &q.id, &v) { Ok(t) => iv = t, Err(e) => notes.push(e) }
    }
    for f in interview::form(d, &iv).1 {
        let mine = own.evidence.get(&f.id);
        let t = field(&format!("{} (the start sets {})", fit(&f.label), mine.map_or("no value".into(), |v| v.to_string())), &mine.map_or(String::new(), |v| v.to_string()));
        match interview::set(d, &iv, &f.id, t.trim()) { Ok(x) => iv = x, Err(e) => notes.push(e) }
    }
    (iv, notes)
}

/// The status line, the reasons for insufficient evidence, the notices, the answer text and the unresolved assumptions.
fn interview_status(r: &interview::Eval, notes: &[String]) {
    let mut h = para(&interview::headline(r));
    let why: Vec<String> = r.insufficient.iter().map(|n| format!("{} (rule {})", n.text, n.from)).collect();
    if !why.is_empty() { h += &bullets(&why) }
    let all: Vec<&String> = notes.iter().chain(&r.notices).collect();
    if !all.is_empty() { h += &format!("<p>Notices:</p>{}", bullets(&all)) }
    h += &format!("<p>The answer text: <code>{}</code>. The laws of the pool: {} ({} laws).</p>", esc(or(&r.canonical, "no answers")), esc(&fit(&r.pool.label)), r.pool.size);
    if !r.assumptions.is_empty() { h += &format!("<p>Assumptions that the answers do not settle:</p>{}", bullets(&r.assumptions.iter().map(|n| format!("{} (rule {})", n.text, n.from)).collect::<Vec<_>>())) }
    html(&h);
}

/// The rules that fire for the answers: the answers that make each fire, its effect, its targets, its basis and its reason.
fn rule_path(r: &interview::Eval) {
    if r.path.is_empty() { println!("No rule fires for these answers."); return }
    let rows: Vec<Vec<String>> = r.path.iter().map(|p| vec![
        format!("{}{}", p.id, if p.off { " (switched off)" } else { "" }),
        p.when.iter().map(|c| format!("{}: {}", c.short, fit(&c.label))).collect::<Vec<_>>().join(" and "),
        format!("{}{}", p.effect, p.weight.map_or(String::new(), |w| format!(" {w}"))),
        p.targets.iter().map(|t| fit(&t.name)).collect::<Vec<_>>().join(", "),
        format!("{}: {}", p.basis, fit(&p.source)),
        fit(&p.reason),
    ]).collect();
    table(&["Rule", "When", "Effect", "Candidates", "Basis", "Reason"], &rows);
}

/// The ranked candidates with their scores and the rules behind each score.
fn candidates(r: &interview::Eval) {
    let rows: Vec<Vec<String>> = r.candidates.iter().filter(|c| c.score != 0.0 || c.excluded || c.rank <= 5).map(|c| vec![
        c.rank.to_string(), fit(&c.name), fmt(c.score),
        (if c.excluded { "excluded" } else if c.score >= interview::STRONG { "strong" } else if c.supported { "supported" } else { "–" }).into(),
        c.reasons.iter().map(|x| format!("{} {}{}", x.rule, if x.delta > 0.0 { "+" } else { "" }, fmt(x.delta))).collect::<Vec<_>>().join(", "),
    ]).collect();
    table(&["Rank", "Candidate", "Score", "Support", "Rules"], &rows);
    if !r.components.is_empty() { println!("Model components that the answers ask for: {}.", r.components.iter().map(|c| fit(&c.name)).collect::<Vec<_>>().join(", ")) }
}

/// A candidate's card: its reasons, its competing explanations, the tests that can reject it and its sampling methods.
fn iv_card(c: &interview::Card) -> String {
    let reasons: Vec<String> = c.reasons.iter().map(|x| format!("Rule {} ({}{}, {}: {}): {}", x.rule, if x.delta > 0.0 { "+" } else { "" }, fmt(x.delta), x.basis, x.source, x.text)).collect();
    let comp: Vec<String> = c.competing.iter().map(|x| format!("{}: {}{}", x.name, x.text, x.score.map_or(String::new(), |v| format!(" (score {})", fmt(v))))).collect();
    format!("<p><strong>{}</strong>, rank {} with score {}.</p><h3>Reasons</h3>{}<h3>Competing explanations</h3>{}<h3>Tests that can reject it</h3>{}{}",
        esc(&fit(&c.name)), c.rank, fmt(c.score), bullets(&reasons), bullets(&comp), bullets(&c.tests), c.methods.as_ref().map_or(String::new(), |m| para(m)))
}

/// The model text of a candidate, its parameters, its mean and variance, and the sampling methods of its law.
fn built_html(b: &interview::Built) -> String {
    let v = |x: &V| match x { V::N(n) => fmt(*n), V::L(l) => format!("[{}]", l.iter().map(|y| fmt(*y)).collect::<Vec<_>>().join(", ")) };
    let mut h = format!("<pre>{}</pre>", esc(&b.text));
    if !b.illustrative.is_empty() { h += &para(&format!("Illustrative values, because the answers give no numbers for them: {}.", b.illustrative.join(", "))) }
    h += &para(&format!("Parameters: {}. Mean {}, variance {}{}.", b.params.iter().map(|p| format!("{} = {}", p.0, v(&p.1))).collect::<Vec<_>>().join(", "), opt(b.mean), opt(b.variance),
        b.component.map_or(String::new(), |k| format!(" (of entry {k})"))));
    h + &bullets(&b.methods.iter().map(|m| format!("{}: {}", m.name, m.unavailable.as_deref().unwrap_or("available"))).collect::<Vec<_>>())
}
```

```rust
//| caption: The core: values, the uniform source and the special functions.
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
//| caption: The expression language of the models.
mod expr {
    //! The expression language of the models: a Pratt parser into a tree, names resolved to slots, and evaluation on
    //! numbers and vectors, element by element.
    use super::*;
    /// An expression tree. `Id` is a name before `resolve`, `Slot` after it.
    #[derive(Clone, Debug, PartialEq)]
    pub enum Ex { Num(f64), Id(String), Slot(usize), Un(char, Box<Ex>), Bin(&'static str, Box<Ex>, Box<Ex>), Call(&'static str, Vec<Ex>), Idx(Box<Ex>, Box<Ex>), Arr(Vec<Ex>) }

    /// Each function with its least and greatest number of arguments.
    pub const FUNCTIONS: [(&str, usize, usize); 36] = [("abs", 1, 1), ("sqrt", 1, 1), ("exp", 1, 1), ("log", 1, 1), ("log1p", 1, 1), ("floor", 1, 1),
        ("ceil", 1, 1), ("round", 1, 1), ("pow", 2, 2), ("min", 1, 32), ("max", 1, 32), ("pmin", 2, 2), ("pmax", 2, 2), ("if", 3, 3), ("sum", 1, 1),
        ("mean", 1, 1), ("prod", 1, 1), ("len", 1, 1), ("count", 2, 2), ("distinct", 1, 1), ("maxcount", 1, 1), ("any", 1, 1), ("all", 1, 1),
        ("normalize", 1, 1), ("median", 1, 1), ("quantile", 2, 2), ("hill", 2, 2), ("km", 3, 3), ("sin", 1, 1), ("cos", 1, 1), ("tan", 1, 1),
        ("atan", 1, 1), ("lgamma", 1, 1), ("first", 1, 1), ("last", 1, 1), ("cumsum", 1, 1)];
    pub const CONSTANTS: [(&str, f64); 3] = [("pi", PI), ("e", std::f64::consts::E), ("inf", INF)];
    /// The binary operators: precedence and right associativity.
    const BINARY: [(&str, u8, bool); 13] = [("||", 1, false), ("&&", 2, false), ("<", 4, false), ("<=", 4, false), (">", 4, false), (">=", 4, false),
        ("==", 4, false), ("!=", 4, false), ("+", 5, false), ("-", 5, false), ("*", 6, false), ("/", 6, false), ("^", 8, true)];

    #[derive(Clone, Copy, PartialEq)]
    enum K { Num, Id, Op }

    fn tokens(src: &str) -> Result<Vec<(K, &str, usize)>, String> {
        if src.chars().count() > 1000 { return Err("An expression has at most 1000 characters.".into()) }
        let (b, mut out, mut i) = (src.as_bytes(), vec![], 0);
        while i < b.len() {
            if b[i].is_ascii_whitespace() { i += 1; continue }
            let at = i;
            let k = if b[i].is_ascii_digit() || (b[i] == b'.' && b.get(i + 1).is_some_and(u8::is_ascii_digit)) {
                while i < b.len() && b[i].is_ascii_digit() { i += 1 }
                if i < b.len() && b[i] == b'.' { i += 1; while i < b.len() && b[i].is_ascii_digit() { i += 1 } }
                if i < b.len() && (b[i] | 32) == b'e' {
                    let j = i + 1 + matches!(b.get(i + 1), Some(b'+' | b'-')) as usize;
                    if b.get(j).is_some_and(u8::is_ascii_digit) { i = j; while i < b.len() && b[i].is_ascii_digit() { i += 1 } }
                }
                K::Num
            } else if b[i].is_ascii_alphabetic() || b[i] == b'_' {
                while i < b.len() && (b[i].is_ascii_alphanumeric() || b[i] == b'_') { i += 1 }
                K::Id
            } else if ["<=", ">=", "==", "!=", "&&", "||"].iter().any(|o| src[i..].starts_with(o)) { i += 2; K::Op }
            else if b"-+*/^()[],<>!".contains(&b[i]) { i += 1; K::Op }
            else { return Err(format!("The character \"{}\" at position {} is not part of the expression language.", src[i..].chars().next().unwrap(), at + 1)) };
            let t = &src[at..i];
            out.push(match (k, t) { (K::Id, "and") => (K::Op, "&&", at), (K::Id, "or") => (K::Op, "||", at), (K::Id, "not") => (K::Op, "!", at), _ => (k, t, at) });
        }
        Ok(out)
    }

    /// Read an expression into a tree.
    pub fn parse(src: &str) -> Result<Ex, String> {
        let t = tokens(src)?;
        let mut pos = 0;
        let e = expr(&t, &mut pos, 0, 0)?;
        match t.get(pos) { Some(x) => Err(format!("Unexpected \"{}\" at position {}.", x.1, x.2 + 1)), None => Ok(e) }
    }

    fn expect(t: &[(K, &str, usize)], pos: &mut usize, v: &str) -> Result<(), String> {
        match t.get(*pos) {
            Some(x) if x.1 == v => { *pos += 1; Ok(()) }
            Some(x) => Err(format!("Expected \"{v}\" at position {}, found \"{}\".", x.2 + 1, x.1)),
            None => Err(format!("Expected \"{v}\" at the end.")),
        }
    }

    /// Expressions separated by commas, to the closing bracket `end`.
    fn list(t: &[(K, &str, usize)], pos: &mut usize, depth: usize, end: &str) -> Result<Vec<Ex>, String> {
        let mut v = vec![];
        if t.get(*pos).map(|x| x.1) != Some(end) {
            loop {
                v.push(expr(t, pos, 0, depth + 1)?);
                if t.get(*pos).map(|x| x.1) == Some(",") { *pos += 1 } else { break }
            }
        }
        expect(t, pos, end)?;
        Ok(v)
    }

    fn prefix(t: &[(K, &str, usize)], pos: &mut usize, depth: usize) -> Result<Ex, String> {
        if depth > 64 { return Err("An expression nests at most 64 levels.".into()) }
        let Some(&(k, v, at)) = t.get(*pos) else { return Err("The expression ends too early.".into()) };
        *pos += 1;
        let next = t.get(*pos).map(|x| x.1);
        Ok(match (k, v) {
            (K::Num, _) => Ex::Num(v.parse::<f64>().ok().filter(|x| x.is_finite()).ok_or(format!("The number {v} is too large."))?),
            (K::Id, _) if next == Some("(") => {
                let Some(&(f, lo, hi)) = FUNCTIONS.iter().find(|f| f.0 == v) else { return Err(format!("\"{v}\" is not a function of the expression language.")) };
                *pos += 1;
                let args = list(t, pos, depth, ")")?;
                if args.len() < lo || args.len() > hi {
                    let n = if lo == hi { lo.to_string() } else { format!("{lo} to {hi}") };
                    return Err(format!("{f}() takes {n} argument{}, not {}.", if hi == 1 { "" } else { "s" }, args.len()));
                }
                Ex::Call(f, args)
            }
            (K::Id, _) => Ex::Id(v.into()),
            (_, "(") => { let e = expr(t, pos, 0, depth + 1)?; expect(t, pos, ")")?; e }
            (_, "[") => {
                let items = list(t, pos, depth, "]")?;
                if items.is_empty() { return Err("A vector has at least one entry.".into()) }
                Ex::Arr(items)
            }
            (_, "-" | "+") => Ex::Un(v.chars().next().unwrap(), Box::new(expr(t, pos, 7, depth + 1)?)),
            (_, "!") => Ex::Un('!', Box::new(expr(t, pos, 3, depth + 1)?)),
            _ => return Err(format!("\"{v}\" at position {} cannot start an expression.", at + 1)),
        })
    }

    fn expr(t: &[(K, &str, usize)], pos: &mut usize, min: u8, depth: usize) -> Result<Ex, String> {
        let (mut left, mut compared) = (prefix(t, pos, depth)?, false);
        while let Some(&(k, v, at)) = t.get(*pos) {
            if v == "[" {
                *pos += 1;
                let i = expr(t, pos, 0, depth + 1)?;
                expect(t, pos, "]")?;
                left = Ex::Idx(Box::new(left), Box::new(i));
                continue;
            }
            let Some(&(op, p, right)) = BINARY.iter().find(|b| k == K::Op && b.0 == v) else { break };
            if p < min { break }
            if p == 4 && compared { return Err(format!("Comparisons do not chain: use \"and\" at position {}.", at + 1)) }
            compared = p == 4;
            *pos += 1;
            let b = expr(t, pos, if right { p } else { p + 1 }, depth + 1)?;
            left = Ex::Bin(op, Box::new(left), Box::new(b));
        }
        Ok(left)
    }

    /// The names an expression reads, without the constants.
    pub fn names(e: &Ex, out: &mut Vec<String>) {
        match e {
            Ex::Id(n) => if !CONSTANTS.iter().any(|c| c.0 == n) && !out.contains(n) { out.push(n.clone()) },
            Ex::Un(_, a) => names(a, out),
            Ex::Bin(_, a, b) | Ex::Idx(a, b) => { names(a, out); names(b, out) }
            Ex::Call(_, v) | Ex::Arr(v) => for a in v { names(a, out) },
            _ => {}
        }
    }

    /// Replace each name by its slot, or a constant by its value. A name with no slot is an error.
    pub fn resolve(e: &mut Ex, slot: &dyn Fn(&str) -> Option<usize>) -> Result<(), String> {
        match e {
            Ex::Id(n) => *e = match CONSTANTS.iter().find(|c| c.0 == n) {
                Some(c) => Ex::Num(c.1),
                None => Ex::Slot(slot(n).ok_or(format!("\"{n}\" is not defined before this expression."))?),
            },
            Ex::Un(_, a) => resolve(a, slot)?,
            Ex::Bin(_, a, b) | Ex::Idx(a, b) => { resolve(a, slot)?; resolve(b, slot)? }
            Ex::Call(_, v) | Ex::Arr(v) => for a in v { resolve(a, slot)? },
            _ => {}
        }
        Ok(())
    }

    /// Parse and resolve in one step; also give the names the expression reads.
    pub fn build(src: &str, slot: &dyn Fn(&str) -> Option<usize>) -> Result<(Ex, Vec<String>), String> {
        let mut e = parse(src)?;
        let mut n = vec![];
        names(&e, &mut n);
        resolve(&mut e, slot)?;
        Ok((e, n))
    }

    /// The value of an expression with no model names.
    pub fn constant(src: &str) -> Result<V, String> { eval(&build(src, &|_| None)?.0, &[]) }

    fn map1(f: impl Fn(f64) -> f64, a: V) -> V { match a { V::N(x) => V::N(f(x)), V::L(v) => V::L(v.into_iter().map(f).collect()) } }
    fn map2(f: impl Fn(f64, f64) -> f64, a: V, b: V) -> Result<V, String> {
        Ok(match (a, b) {
            (V::N(x), V::N(y)) => V::N(f(x, y)),
            (V::N(x), V::L(v)) => V::L(v.into_iter().map(|y| f(x, y)).collect()),
            (V::L(v), V::N(y)) => V::L(v.into_iter().map(|x| f(x, y)).collect()),
            (V::L(u), V::L(v)) if u.len() == v.len() => V::L(u.into_iter().zip(v).map(|(x, y)| f(x, y)).collect()),
            (V::L(u), V::L(v)) => return Err(format!("Vectors of length {} and {} do not combine.", u.len(), v.len())),
        })
    }
    fn num(v: &V, what: &str) -> Result<f64, String> { v.num().ok_or(format!("{what} needs a number, not a vector.")) }
    fn b(x: bool) -> f64 { x as u8 as f64 }

    /// The sample quantile of level p, with linear interpolation between order statistics (type 7).
    pub fn sample_quantile(x: &[f64], p: f64) -> f64 {
        let mut s = x.to_vec();
        s.sort_by(f64::total_cmp);
        let h = (s.len() - 1) as f64 * p;
        let lo = h.floor() as usize;
        if lo + 1 < s.len() { s[lo] + (h - lo as f64) * (s[lo + 1] - s[lo]) } else { s[lo] }
    }

    /// The value of a resolved expression, with the slot values `env`.
    pub fn eval(e: &Ex, env: &[V]) -> Result<V, String> {
        Ok(match e {
            Ex::Num(x) => V::N(*x),
            Ex::Slot(i) => env[*i].clone(),
            Ex::Id(n) => return Err(format!("\"{n}\" is not defined before this expression.")),
            Ex::Un(op, a) => {
                let a = eval(a, env)?;
                match op { '-' => map1(|x| -x, a), '!' => map1(|x| b(x == 0.0), a), _ => a }
            }
            Ex::Bin(op, a, c) => {
                let (a, c) = (eval(a, env)?, eval(c, env)?);
                let f: fn(f64, f64) -> f64 = match *op {
                    "+" => |x, y| x + y, "-" => |x, y| x - y, "*" => |x, y| x * y, "/" => |x, y| x / y, "^" => f64::powf,
                    "<" => |x, y| b(x < y), "<=" => |x, y| b(x <= y), ">" => |x, y| b(x > y), ">=" => |x, y| b(x >= y),
                    "==" => |x, y| b(x == y), "!=" => |x, y| b(x != y), "&&" => |x, y| b(x != 0.0 && y != 0.0), _ => |x, y| b(x != 0.0 || y != 0.0),
                };
                map2(f, a, c)?
            }
            Ex::Idx(a, i) => {
                let (V::L(v), k) = (eval(a, env)?, eval(i, env)?) else { return Err("Only a vector takes an index.".into()) };
                match k {
                    V::N(k) if k.fract() == 0.0 && k >= 1.0 && k <= v.len() as f64 => V::N(v[k as usize - 1]),
                    V::N(k) => return Err(format!("The index {k} is outside 1..{}.", v.len())),
                    V::L(_) => return Err(format!("The index vector is outside 1..{}.", v.len())),
                }
            }
            Ex::Arr(items) => V::L(items.iter().map(|x| num(&eval(x, env)?, "A vector entry")).collect::<Result<_, _>>()?),
            Ex::Call(f, args) => {
                let v = args.iter().map(|x| eval(x, env)).collect::<Result<Vec<V>, String>>()?;
                call(f, v)?
            }
        })
    }

    fn call(f: &str, mut v: Vec<V>) -> Result<V, String> {
        let one: Option<fn(f64) -> f64> = match f {
            "abs" => Some(f64::abs), "sqrt" => Some(f64::sqrt), "exp" => Some(f64::exp), "log" => Some(f64::ln), "log1p" => Some(f64::ln_1p),
            "floor" => Some(f64::floor), "ceil" => Some(f64::ceil), "round" => Some(|x| (x + 0.5).floor()), "sin" => Some(f64::sin), "cos" => Some(f64::cos),
            "tan" => Some(f64::tan), "atan" => Some(f64::atan), "lgamma" => Some(|x| if x > 0.0 { lgam(x) } else { f64::NAN }), _ => None,
        };
        if let Some(g) = one { return Ok(map1(g, v.swap_remove(0))) }
        let a = v[0].list();
        Ok(match f {
            "pow" => { let y = v.pop().unwrap(); map2(f64::powf, v.pop().unwrap(), y)? }
            "pmin" => { let y = v.pop().unwrap(); map2(f64::min, v.pop().unwrap(), y)? }
            "pmax" => { let y = v.pop().unwrap(); map2(f64::max, v.pop().unwrap(), y)? }
            "min" => V::N(v.iter().flat_map(V::list).fold(INF, f64::min)),
            "max" => V::N(v.iter().flat_map(V::list).fold(-INF, f64::max)),
            "sum" => V::N(a.iter().sum()),
            "mean" => V::N(a.iter().sum::<f64>() / a.len() as f64),
            "prod" => V::N(a.iter().product()),
            "len" => V::N(a.len() as f64),
            "count" => { let x = num(&v[1], "count()")?; V::N(a.iter().filter(|&&y| y == x).count() as f64) }
            "distinct" => { let mut s = a.clone(); s.sort_by(f64::total_cmp); s.dedup(); V::N(s.len() as f64) }
            "maxcount" => {
                let mut s = a.clone();
                s.sort_by(f64::total_cmp);
                V::N(s.chunk_by(|x, y| x == y).map(|c| c.len()).max().unwrap_or(0) as f64)
            }
            "any" => V::N(b(a.iter().any(|&x| x != 0.0))),
            "all" => V::N(b(a.iter().all(|&x| x != 0.0))),
            "first" => V::N(a.iter().position(|&x| x != 0.0).map_or(0.0, |i| i as f64 + 1.0)),
            "last" => V::N(a[a.len() - 1]),
            "cumsum" => { let mut t = 0.0; V::L(a.iter().map(|x| { t += x; t }).collect()) }
            "normalize" => {
                let s: f64 = a.iter().sum();
                if !(s > 0.0) || a.iter().any(|x| !(*x >= 0.0)) { return Err("normalize() needs weights that are not negative, with a positive sum.".into()) }
                V::L(a.iter().map(|x| x / s).collect())
            }
            "median" => V::N(sample_quantile(&a, 0.5)),
            "quantile" => {
                let p = num(&v[1], "quantile()")?;
                if !(0.0..=1.0).contains(&p) { return Err(format!("quantile() needs a level in [0, 1], not {p}.")) }
                V::N(sample_quantile(&a, p))
            }
            // Hill's estimator of γ = 1/α from the k largest values.
            "hill" => {
                let k = num(&v[1], "hill()")?;
                let mut s = a.clone();
                s.sort_by(|x, y| y.total_cmp(x));
                if k.fract() != 0.0 || k < 1.0 || k >= s.len() as f64 { return Err(format!("hill() needs an integer k from 1 to {}, not {k}.", s.len() - 1)) }
                let k = k as usize;
                if !(s[k] > 0.0) { return Err("hill() needs positive values above its threshold X_(n−k).".into()) }
                V::N(s[..k].iter().map(|x| (x / s[k]).ln()).sum::<f64>() / k as f64)
            }
            // The Kaplan–Meier estimate of P(T > t); at a tie, events come before censorings.
            "km" => {
                let (d, t) = (v[1].list(), num(&v[2], "km()")?);
                if a.len() != d.len() { return Err(format!("km() needs times and event indicators of the same length, not {} and {}.", a.len(), d.len())) }
                let mut o: Vec<usize> = (0..a.len()).collect();
                o.sort_by(|&i, &j| a[i].total_cmp(&a[j]).then(d[j].total_cmp(&d[i])));
                let (mut risk, mut s, mut j) = (a.len() as f64, 1.0, 0);
                while j < o.len() && a[o[j]] <= t {
                    let (time, mut ev, mut all) = (a[o[j]], 0.0, 0.0);
                    while j < o.len() && a[o[j]] == time { ev += b(d[o[j]] != 0.0); all += 1.0; j += 1 }
                    if ev > 0.0 { s *= 1.0 - ev / risk }
                    risk -= all;
                }
                V::N(s)
            }
            "if" => match &v[0] {
                V::N(c) => v[if *c != 0.0 { 1 } else { 2 }].clone(),
                V::L(c) => V::L(c.iter().enumerate().map(|(i, &x)| match &v[if x != 0.0 { 1 } else { 2 }] {
                    V::N(y) => Ok(*y),
                    V::L(y) if y.len() == c.len() => Ok(y[i]),
                    V::L(y) => Err(format!("if() has a condition of length {} and a branch of length {}.", c.len(), y.len())),
                }).collect::<Result<_, String>>()?),
            },
            _ => return Err(format!("\"{f}\" is not a function of the expression language.")),
        })
    }
}
```

```rust
//| caption: The 39 laws of the catalogue.
mod cat {
    //! The 39 scalar and vector probability laws of the Monte Carlo workbench. Each law has its domain checks, its support,
    //! PMF or PDF, CDF, survival function, quantile and moments, and three samplers: the reference sampler, the inverse
    //! transform and the rejection sampler (or the reason that it has none), as in the JavaScript of the workbench.
    use super::*;
    use std::{cell::RefCell, collections::HashMap, f64::consts::{E, LN_2, SQRT_2}, rc::Rc};

    /// The catalogue: id, display name, parameter names in order.
    pub const LAWS: [(&str, &str, &[&str]); 39] = [
        ("bernoulli", "Bernoulli", &["p"]), ("binomial", "Binomial", &["n", "p"]), ("categorical", "Categorical", &["p"]), ("multinomial", "Multinomial", &["n", "p"]),
        ("uniform", "Discrete uniform", &["a", "b"]), ("geometric", "Geometric", &["p"]), ("negbin", "Negative binomial", &["r", "p"]), ("poisson", "Poisson", &["lambda"]),
        ("hypergeometric", "Hypergeometric", &["N", "K", "n"]), ("zipf", "Zipf and zeta", &["s", "N"]), ("cuniform", "Continuous uniform", &["a", "b"]),
        ("normal", "Normal", &["mu", "sigma"]), ("mvnormal", "Multivariate normal", &["mu", "cov"]), ("exponential", "Exponential", &["rate"]), ("gamma", "Gamma", &["k", "theta"]),
        ("erlang", "Erlang", &["k", "rate"]), ("beta", "Beta", &["a", "b"]), ("dirichlet", "Dirichlet", &["alpha"]), ("chisq", "Chi-square", &["nu"]), ("student", "Student's t", &["nu"]),
        ("fisher", "F (Fisher–Snedecor)", &["d1", "d2"]), ("logistic", "Logistic", &["mu", "s"]), ("laplace", "Laplace", &["mu", "b"]), ("lognormal", "Lognormal", &["mu", "sigma"]),
        ("weibull", "Weibull", &["k", "lambda"]), ("invgauss", "Inverse Gaussian", &["mu", "lambda"]), ("gompertz", "Gompertz", &["eta", "b"]),
        ("loglogistic", "Log-logistic", &["alpha", "beta"]), ("pareto1", "Pareto I", &["xm", "alpha"]), ("pareto2", "Pareto II (Lomax)", &["mu", "sigma", "alpha"]),
        ("burr12", "Burr XII", &["c", "k", "lambda"]), ("frechet", "Fréchet", &["alpha", "s", "m"]), ("cauchy", "Cauchy", &["x0", "gamma"]), ("levy", "Lévy", &["mu", "c"]),
        ("stable", "Stable (S0)", &["alpha", "beta", "gamma", "delta"]), ("gev", "Generalised extreme value (GEV)", &["xi", "mu", "sigma"]),
        ("gpd", "Generalised Pareto (GPD)", &["xi", "sigma", "mu"]), ("gumbel", "Gumbel", &["mu", "beta"]), ("revweibull", "Reverse Weibull", &["alpha", "mu", "sigma"]),
    ];
    const EULER: f64 = 0.5772156649015329; const BIG: f64 = 9007199254740991.0;
    fn idx(id: &str) -> usize { LAWS.iter().position(|l| l.0 == id).unwrap_or(99) }
    pub fn discrete(id: &str) -> bool { idx(id) < 10 }
    /// The arguments as numbers, padded to 4; a vector gives NaN.
    fn args(p: &[V]) -> [f64; 4] { std::array::from_fn(|i| p.get(i).and_then(V::num).unwrap_or(f64::NAN)) }
    fn list(p: &[V], i: usize) -> Vec<f64> { p.get(i).map_or(vec![], V::list) }
    /// The number of entries of a draw of a vector law (multinomial, mvnormal, dirichlet), 0 for a scalar law.
    pub fn dim(id: &str, p: &[V]) -> usize { match id { "multinomial" => list(p, 1).len(), "mvnormal" | "dirichlet" => list(p, 0).len(), _ => 0 } }
    /// A number as JavaScript writes it; the laws of the first two groups write +∞ as "∞".
    fn js(x: f64, tails: bool) -> String {
        let a = x.abs();
        if x == INF && !tails { "∞".into() } else if a == INF { (if x < 0.0 { "-Infinity" } else { "Infinity" }).into() } else if x == 0.0 { "0".into() }
        else if a >= 1e21 || a < 1e-6 { format!("{x:e}").replace('e', if a >= 1.0 { "e+" } else { "e" }) } else { format!("{x}") }
    }
    thread_local! { static MEMO: RefCell<HashMap<String, Rc<Vec<f64>>>> = RefCell::new(HashMap::new()) }
    /// A table that is built once for each key (at most 64 tables are kept).
    fn memo(key: String, f: impl FnOnce() -> Vec<f64>) -> Rc<Vec<f64>> {
        if let Some(t) = MEMO.with(|m| m.borrow().get(&key).cloned()) { return t }
        let t = Rc::new(f()); MEMO.with(|m| { let mut m = m.borrow_mut(); if m.len() > 64 { m.clear() } m.insert(key, t.clone()) });
        t
    }
    /// The domain checks, with the JS text of the first failed check (a vector where a number is needed is an error too).
    pub fn check(id: &str, p: &[V]) -> Result<(), String> {
        let i = idx(id); let Some(&(_, _, names)) = LAWS.get(i) else { return Err(format!("{id} is not a law of the catalogue.")) };
        if p.len() != names.len() { return Err(format!("{id} takes {} arguments: {}.", names.len(), names.join(", "))) }
        let x = args(p); let s = |j: usize| match &p[j] { V::N(v) => js(*v, i > 22), V::L(_) => "a vector".to_string() };
        let inn = |j: usize, lo: f64, hi: f64| x[j] >= lo && x[j] <= hi; let int = |j: usize| x[j].fract() == 0.0;
        let real = |j: usize| x[j].is_finite() && x[j].abs() <= 1e15; let say = |ok: bool, m: String| (!ok).then_some(m);
        let out = |j: usize, (lo, hi, t): (f64, f64, &str)| say(inn(j, lo, hi), format!("{} = {} is outside {t}.", names[j], s(j)));
        let pos = |j: usize| say(x[j] > 0.0 && x[j] <= 1e15, format!("{} = {} is not a number in (0, 10^15].", names[j], s(j)));
        let fin = |j: usize| say(real(j), format!("{} = {} is not a finite number.", names[j], s(j)));
        let nint = |j: usize, lo: f64| say(int(j) && inn(j, lo, 1e6), format!("{} = {} is not an integer in [{lo}, 10^6].", names[j], s(j)));
        let w = |j: usize| {
            let V::L(v) = &p[j] else { return Some("p is a vector of 1 to 100 probabilities, such as [0.2, 0.3, 0.5].".to_string()) };
            if v.is_empty() || v.len() > 100 { return Some("p is a vector of 1 to 100 probabilities, such as [0.2, 0.3, 0.5].".into()) }
            if v.iter().any(|x| !(*x >= 0.0)) { return Some("Each entry of p is 0 or more.".into()) }
            let t: f64 = v.iter().sum();
            say((t - 1.0).abs() <= 1e-9, format!("The entries of p add to {}, not 1. Use normalize() to scale weights.", js(t, true)))
        };
        let (m6, m3, p9, u1) = ((1e-6, 1e6, "[10^-6, 10^6]"), (1e-3, 1e6, "[0.001, 10^6]"), (1e-9, 1.0, "[10^-9, 1]"), (0.0, 1.0, "[0, 1]"));
        let (pos100, all, sh) = ((1e-100, 1e100, "(0, 10^100]"), (-1e100, 1e100, "[−10^100, 10^100]"), (0.05, 100.0, "[0.05, 100]"));
        let (xi, w50) = ((-5.0, 5.0, "[−5, 5]"), (0.05, 50.0, "[0.05, 50]"));
        let e = match id {
            "bernoulli" => vec![out(0, u1)], "binomial" => vec![nint(0, 0.0), out(1, u1)], "categorical" => vec![w(0)], "multinomial" => vec![nint(0, 0.0), w(1)],
            "uniform" => vec![say(int(0) && int(1) && x[0] <= x[1] && x[1] - x[0] < 4294967296.0 && x[0].abs() < 2f64.powi(52) && x[1].abs() < 2f64.powi(52),
                format!("a = {} and b = {} are not integers with a ≤ b and b − a < 2^32.", s(0), s(1)))],
            "geometric" => vec![out(0, p9)], "negbin" => vec![out(0, m6), out(1, p9)], "poisson" => vec![out(0, (0.0, 1e6, "[0, 10^6]"))],
            "hypergeometric" => vec![say((0..3).all(int) && inn(0, 1.0, 1e7) && inn(1, 0.0, x[0]) && inn(2, 0.0, x[0]),
                format!("N = {}, K = {} and n = {} are not integers with 0 ≤ K ≤ N, 0 ≤ n ≤ N and N ≤ 10^7.", s(0), s(1), s(2)))],
            "zipf" if x[1] == INF => vec![say(inn(0, 1.0 + 1e-9, 20.0), format!("With N = ∞ (the zeta law), s = {} must be in (1, 20]: the sum of k^(−s) diverges for s ≤ 1.", s(0)))],
            "zipf" => vec![say(int(1) && inn(1, 1.0, 2e5), format!("N = {} is not an integer in [1, 2·10^5] or inf.", s(1))), out(0, (0.0, 20.0, "[0, 20]"))],
            "cuniform" => vec![say(real(0) && real(1) && x[0] < x[1], format!("a = {} and b = {} are not finite numbers with a < b.", s(0), s(1)))],
            "normal" | "logistic" | "laplace" => vec![fin(0), pos(1)], "mvnormal" => vec![mvcheck(p)], "exponential" => vec![pos(0)],
            "gamma" => vec![out(0, m6), pos(1)], "erlang" => vec![nint(0, 1.0), pos(1)], "beta" => vec![out(0, m6), out(1, m6)],
            "dirichlet" => vec![say(matches!(&p[0], V::L(a) if (2..=50).contains(&a.len()) && a.iter().all(|x| (1e-6..=1e6).contains(x))),
                "alpha is a vector of 2 to 50 numbers in [10^-6, 10^6], such as [2, 3, 5].".into())],
            "chisq" => vec![out(0, m6)], "student" => vec![out(0, m3)], "fisher" => vec![out(0, m3), out(1, m3)],
            _ => {
                let t: &[(f64, f64, &str)] = match id {
                    "lognormal" => &[(-100.0, 100.0, "[−100, 100]"), (1e-6, 10.0, "[10^-6, 10]")], "weibull" => &[w50, (1e-300, 1e300, "(0, 10^300]")],
                    "invgauss" => &[pos100, pos100], "gompertz" => &[(1e-3, 1e3, "[0.001, 1000]"), pos100], "loglogistic" | "pareto1" => &[pos100, sh],
                    "pareto2" => &[all, pos100, sh], "burr12" => &[sh, sh, pos100], "frechet" => &[sh, pos100, all], "cauchy" | "levy" => &[all, pos100],
                    "stable" => &[(0.2, 2.0, "[0.2, 2]"), (-1.0, 1.0, "[−1, 1]"), pos100, all], "gev" => &[xi, all, pos100], "gpd" => &[xi, pos100, all],
                    "gumbel" => &[all, pos100], _ => &[w50, all, pos100],
                };
                let mut e: Vec<_> = t.iter().enumerate().map(|(j, &l)| out(j, l)).collect();
                if id == "invgauss" { e.push(say(x[1] / x[0] <= 1e4 && x[0] / x[1] <= 1e4, format!("λ/μ = {} is outside [10^-4, 10^4].", js(x[1] / x[0], true)))) }
                if id == "stable" { e.push(say(x[0] == 1.0 || (x[0] - 1.0).abs() >= 0.01, format!("alpha = {} is within 0.01 of 1, where Nolan's integrals lose precision. Use α = 1 or |α − 1| ≥ 0.01.", s(0)))) }
                e
            }
        };
        e.into_iter().flatten().next().map_or(Ok(()), Err)
    }
    /// The checks of the multivariate normal law: the mean vector, the size and the symmetry of the covariance matrix,
    /// and its Cholesky factor.
    fn mvcheck(p: &[V]) -> Option<String> {
        let ok = |v: &[f64]| v.iter().all(|x| x.is_finite() && x.abs() <= 1e15);
        let m = match &p[0] { V::L(m) if (1..=20).contains(&m.len()) && ok(m) => m, _ => return Some("mu is a vector of 1 to 20 finite numbers, such as [0, 0].".into()) }; let k = m.len();
        let c = match &p[1] { V::L(c) if c.len() == k * k && ok(c) => c, _ => return Some(format!("cov is a vector of k² = {} finite numbers: the covariance matrix row by row.", k * k)) };
        for i in 0..k { for j in 0..i { if (c[i * k + j] - c[j * k + i]).abs() > 1e-12 * c[i * k + j].abs().max(1.0) {
            return Some(format!("cov is not symmetric: entry ({}, {}) differs from entry ({}, {}).", i + 1, j + 1, j + 1, i + 1)) } } }
        chol(c, k).is_none().then(|| "cov is not positive definite: no Cholesky factor exists.".into())
    }
    /// The lower Cholesky factor of a k × k matrix, row by row, or None when the matrix is not positive definite.
    fn chol(c: &[f64], k: usize) -> Option<Vec<f64>> {
        let mut l = vec![0.0; k * k];
        for i in 0..k { for j in 0..=i { let s = c[i * k + j] - (0..j).map(|m| l[i * k + m] * l[j * k + m]).sum::<f64>();
            if i == j { if !(s > 1e-14 * c[i * k + i].abs()) { return None } l[i * k + i] = s.sqrt() } else { l[i * k + j] = s / l[j * k + j] } } }
        Some(l)
    }
    /// The law of entry j (1-based) of a vector law, as a catalogue law and its arguments (JS `marginal`).
    pub fn marginal(id: &str, p: &[V], j: usize) -> Option<(&'static str, Vec<V>)> {
        let (v, w, n) = (list(p, 0), list(p, 1), |x: f64| V::N(x));
        match id {
            "multinomial" if (1..=w.len()).contains(&j) => Some(("binomial", vec![p[0].clone(), n(w[j - 1])])),
            "mvnormal" if (1..=v.len()).contains(&j) => Some(("normal", vec![n(v[j - 1]), n(w.get((j - 1) * (v.len() + 1))?.sqrt())])),
            "dirichlet" if (1..=v.len()).contains(&j) => Some(("beta", vec![n(v[j - 1]), n(v.iter().sum::<f64>() - v[j - 1])])), _ => None,
        }
    }
    /// The law that the scalar functions use: entry 1 of a vector law, and the gamma law for the Erlang and chi-square laws.
    fn base(id: &str, p: &[V]) -> Option<(&'static str, Vec<V>)> {
        let [a, b, ..] = args(p);
        match id { "erlang" => Some(("gamma", vec![V::N(a), V::N(1.0 / b)])), "chisq" => Some(("gamma", vec![V::N(a / 2.0), V::N(2.0)])), _ => marginal(id, p, 1) }
    }
    pub fn support(id: &str, p: &[V]) -> (f64, f64) {
        if let Some((m, q)) = base(id, p) { return support(m, &q) }
        let [a, b, c, d] = args(p);
        match id {
            "bernoulli" | "beta" => (0.0, 1.0), "binomial" => (0.0, a), "categorical" => (1.0, list(p, 0).len() as f64), "uniform" | "cuniform" => (a, b),
            "geometric" => (0.0, if a == 1.0 { 0.0 } else { INF }), "negbin" => (0.0, if b == 1.0 { 0.0 } else { INF }), "poisson" => (0.0, if a == 0.0 { 0.0 } else { INF }),
            "hypergeometric" => ((c + b - a).max(0.0), c.min(b)), "zipf" => (1.0, b), "pareto1" | "pareto2" | "levy" => (a, INF), "frechet" => (c, INF),
            "normal" | "student" | "logistic" | "laplace" | "cauchy" | "gumbel" => (-INF, INF),
            "stable" => { let (lo, hi) = ssup(a, b); (d + c * lo, d + c * hi) }
            "gev" => if a > 0.0 { (b - c / a, INF) } else if a < 0.0 { (-INF, b - c / a) } else { (-INF, INF) },
            "gpd" => (c, if a < 0.0 { c - b / a } else { INF }), "revweibull" => (-INF, b), _ => (0.0, INF),
        }
    }
    pub fn cdf(id: &str, p: &[V], x: f64) -> f64 { eval(id, p, 0, x) }
    /// The survival function P(X > x), precise in the upper tail.
    pub fn sf(id: &str, p: &[V], x: f64) -> f64 { eval(id, p, 1, x) }
    /// The PDF, or the PMF at x for a discrete law (0 off the support).
    pub fn pdf(id: &str, p: &[V], x: f64) -> f64 { eval(id, p, 2, x) }
    /// The CDF (w = 0), the survival function (w = 1) or the PMF or PDF (w = 2) at x.
    fn eval(id: &str, p: &[V], w: usize, x: f64) -> f64 {
        if let Some((m, q)) = base(id, p) { return eval(m, &q, w, x) }
        macro_rules! f { ($c:expr, $s:expr, $d:expr) => { match w { 0 => $c, 1 => $s, _ => $d } } }
        let [a, b, c, d] = args(p); let (lo, hi) = support(id, p); let (k, z) = (x.floor(), (x - a) / b);
        if discrete(id) && (x < lo || w < 2 && x >= hi || w == 2 && (x != k || x > hi)) { return if x < lo { [0.0, 1.0, 0.0][w] } else { [1.0, 0.0, 0.0][w] } }
        match id {
            "bernoulli" => f!(1.0 - a, a, if x == 1.0 { a } else { 1.0 - a }),
            "binomial" => f!(if b == 0.0 { 1.0 } else if b == 1.0 { 0.0 } else { ibeta(1.0 - b, a - k, k + 1.0) }, if b == 0.0 { 0.0 } else if b == 1.0 { 1.0 } else { ibeta(b, k + 1.0, a - k) },
                if b == 0.0 || b == 1.0 { (x == a * b) as u8 as f64 } else { (lchoose(a, x) + x * b.ln() + (a - x) * (-b).ln_1p()).exp() }),
            "categorical" => { let v = list(p, 0); f!(v[..k as usize].iter().sum::<f64>().min(1.0), v[k as usize..].iter().sum::<f64>().min(1.0), v[x as usize - 1]) }
            "uniform" => f!((k - a + 1.0) / (b - a + 1.0), (b - k) / (b - a + 1.0), 1.0 / (b - a + 1.0)),
            "geometric" => { let l = (-a).ln_1p(); f!(-((k + 1.0) * l).exp_m1(), ((k + 1.0) * l).exp(), a * (x * l).exp()) }
            "negbin" => f!(ibeta(b, a, k + 1.0), ibeta(1.0 - b, k + 1.0, a),
                if b == 1.0 { 1.0 } else { (lgam(x + a) - lgam(x + 1.0) - lgam(a) + a * b.ln() + x * (-b).ln_1p()).exp() }),
            "poisson" => f!(gamma_pq(k + 1.0, a).1, gamma_pq(k + 1.0, a).0, if a == 0.0 { 1.0 } else { (-a + x * a.ln() - lgam(x + 1.0)).exp() }),
            "hypergeometric" => { let h = |j: f64| (lchoose(b, j) + lchoose(a - b, c - j) - lchoose(a, c)).exp(); let sum = |i: f64, j: f64| (i as u64..=j as u64).map(|i| h(i as f64)).sum::<f64>().min(1.0); f!(sum(lo, k), sum(k + 1.0, hi), h(x)) }
            "zipf" if b == INF => { let z = zeta(a); f!(1.0 - hurwitz(a, k + 1.0) / z, hurwitz(a, k + 1.0) / z, x.powf(-a) / z) }
            "zipf" => { let t = ztab(a, b); f!(t[k as usize - 1], { let (mut s, mut j) = (0.0, b); while j > k { s += j.powf(-a); j -= 1.0 } s / t[b as usize] }, x.powf(-a) / t[b as usize]) }
            "cuniform" => f!(((x - a) / (b - a)).clamp(0.0, 1.0), ((b - x) / (b - a)).clamp(0.0, 1.0), if x >= a && x <= b { 1.0 / (b - a) } else { 0.0 }),
            "normal" => f!(pnorm(z), pnorm((a - x) / b), dnorm(z) / b),
            "exponential" => f!(if x <= 0.0 { 0.0 } else { -(-a * x).exp_m1() }, if x <= 0.0 { 1.0 } else { (-a * x).exp() }, if x < 0.0 { 0.0 } else { a * (-a * x).exp() }),
            "gamma" => f!(if x <= 0.0 { 0.0 } else { gamma_pq(a, x / b).0 }, if x <= 0.0 { 1.0 } else { gamma_pq(a, x / b).1 },
                if x < 0.0 { 0.0 } else if x == 0.0 { if a == 1.0 { 1.0 / b } else if a > 1.0 { 0.0 } else { INF } } else { ((a - 1.0) * (x / b).ln() - x / b - lgam(a)).exp() / b }),
            "beta" => f!(if x <= 0.0 { 0.0 } else if x >= 1.0 { 1.0 } else if x <= 0.5 { ibeta(x, a, b) } else { 1.0 - ibeta(1.0 - x, b, a) },
                if x <= 0.0 { 1.0 } else if x >= 1.0 { 0.0 } else if x <= 0.5 { 1.0 - ibeta(x, a, b) } else { ibeta(1.0 - x, b, a) },
                if x < 0.0 || x > 1.0 { 0.0 } else if x == 0.0 { if a == 1.0 { b } else if a > 1.0 { 0.0 } else { INF } }
                else if x == 1.0 { if b == 1.0 { a } else if b > 1.0 { 0.0 } else { INF } } else { ((a - 1.0) * x.ln() + (b - 1.0) * (-x).ln_1p() - lbeta(a, b)).exp() }),
            "student" => f!(if x < 0.0 { ttail(x, a) } else { 1.0 - ttail(x, a) }, if x > 0.0 { ttail(x, a) } else { 1.0 - ttail(x, a) },
                (lgam((a + 1.0) / 2.0) - lgam(a / 2.0) - 0.5 * (a * PI).ln() - (a + 1.0) / 2.0 * (x * x / a).ln_1p()).exp()),
            "fisher" => f!(if x <= 0.0 { 0.0 } else { ibeta(1.0 / (1.0 + b / (a * x)), a / 2.0, b / 2.0) }, if x <= 0.0 { 1.0 } else { ibeta(b / (b + a * x), b / 2.0, a / 2.0) },
                if x < 0.0 { 0.0 } else if x == 0.0 { if a == 2.0 { 1.0 } else if a > 2.0 { 0.0 } else { INF } }
                else { (a / 2.0 * a.ln() + b / 2.0 * b.ln() + (a / 2.0 - 1.0) * x.ln() - (a + b) / 2.0 * (b + a * x).ln() - lbeta(a / 2.0, b / 2.0)).exp() }),
            "logistic" => f!(1.0 / (1.0 + (-z).exp()), 1.0 / (1.0 + z.exp()), { let e = (-z.abs()).exp(); e / ((1.0 + e) * (1.0 + e)) / b }),
            "laplace" => f!(if z < 0.0 { z.exp() / 2.0 } else { 1.0 - (-z).exp() / 2.0 }, if z > 0.0 { (-z).exp() / 2.0 } else { 1.0 - z.exp() / 2.0 }, (-z.abs()).exp() / 2.0 / b),
            "lognormal" => { let y = (x.ln() - a) / b; f!(if x > 0.0 { pnorm(y) } else { 0.0 }, if x > 0.0 { pnorm(-y) } else { 1.0 }, if x > 0.0 { dnorm(y) / (x * b) } else { 0.0 }) }
            "weibull" => { let t = (x / b).powf(a); f!(if x <= 0.0 { 0.0 } else { -(-t).exp_m1() }, if x <= 0.0 { 1.0 } else { (-t).exp() },
                if x < 0.0 { 0.0 } else if x == 0.0 { if a < 1.0 { INF } else if a == 1.0 { 1.0 / b } else { 0.0 } } else { a / b * (x / b).powf(a - 1.0) * (-t).exp() }) }
            "invgauss" => { let s = (b / x).sqrt(); let (u, v) = (s * (x / a - 1.0), s * (x / a + 1.0)); let e = || (2.0 * b / a + nlogsf(v)).exp();
                f!(if x <= 0.0 { 0.0 } else { pnorm(u) + e() }, if x <= 0.0 { 1.0 } else { (pnorm(-u) - e()).max(0.0) }, if x > 0.0 { (b / (2.0 * PI * x * x * x)).sqrt() * (-b * (x - a) * (x - a) / (2.0 * a * a * x)).exp() } else { 0.0 }) }
            "gompertz" => { let e = (b * x).exp_m1(); f!(if x <= 0.0 { 0.0 } else { -(-a * e).exp_m1() }, if x <= 0.0 { 1.0 } else { (-a * e).exp() }, if x < 0.0 { 0.0 } else { b * a * (b * x - a * e).exp() }) }
            "loglogistic" => { let r = (x / a).powf(b); f!(if x <= 0.0 { 0.0 } else { 1.0 / (1.0 + (x / a).powf(-b)) }, if x <= 0.0 { 1.0 } else { 1.0 / (1.0 + r) }, if x <= 0.0 { 0.0 } else { b / x * r / ((1.0 + r) * (1.0 + r)) }) }
            "pareto1" => f!(if x <= a { 0.0 } else { -(-b * (x / a).ln()).exp_m1() }, if x <= a { 1.0 } else { (x / a).powf(-b) }, if x < a { 0.0 } else { b / a * (x / a).powf(-b - 1.0) }),
            "pareto2" => { let l = ((x - a) / b).ln_1p(); f!(if x <= a { 0.0 } else { -(-c * l).exp_m1() }, if x <= a { 1.0 } else { (-c * l).exp() }, if x < a { 0.0 } else { c / b * (-(c + 1.0) * l).exp() }) }
            "burr12" => { let r = (x / c).powf(a); let l = r.ln_1p(); f!(if x <= 0.0 { 0.0 } else { -(-b * l).exp_m1() }, if x <= 0.0 { 1.0 } else { (-b * l).exp() }, if x <= 0.0 { 0.0 } else { a * b / x * r * (-(b + 1.0) * l).exp() }) }
            "frechet" => { let y = (x - c) / b; let t = y.powf(-a); f!(if x <= c { 0.0 } else { (-t).exp() }, if x <= c { 1.0 } else { -(-t).exp_m1() }, if x <= c { 0.0 } else { a / b * (t / y) * (-t).exp() }) }
            "cauchy" => f!(if z < 0.0 { 1f64.atan2(-z) / PI } else { 1.0 - 1f64.atan2(z) / PI }, if z > 0.0 { 1f64.atan2(z) / PI } else { 1.0 - 1f64.atan2(-z) / PI }, 1.0 / (PI * b * (1.0 + z * z))),
            "levy" => { let y = x - a; f!(if x <= a { 0.0 } else { 2.0 * pnorm(-(b / y).sqrt()) }, if x <= a { 1.0 } else { gamma_pq(0.5, b / (2.0 * y)).0 },
                if x <= a { 0.0 } else { (b / (2.0 * PI)).sqrt() * y.powf(-1.5) * (-b / (2.0 * y)).exp() }) }
            "stable" => {
                let (z, l) = ((x - d) / c, |w, x| eval("levy", &[V::N(-1.0), V::N(1.0)], w, x));
                if a == 2.0 { return f!(pnorm(z / SQRT_2), pnorm(-z / SQRT_2), dnorm(z / SQRT_2) / (SQRT_2 * c)) }
                if a == 0.5 && b.abs() == 1.0 { return f!(if b > 0.0 { l(0, z) } else { l(1, -z) }, if b > 0.0 { l(1, z) } else { l(0, -z) }, l(2, b * z) / c) }
                let (s, t) = ssup(a, b); f!(if z <= s { 0.0 } else if z >= t { 1.0 } else { stable0(z, a, b, 0) }, if z <= s { 1.0 } else if z >= t { 0.0 } else { stable0(z, a, b, 1) },
                    if z < s || z > t { 0.0 } else { stable0(z, a, b, 2) / c })
            }
            "gev" => { let y = (x - b) / c; let t = if a == 0.0 { (-y).exp() } else if 1.0 + a * y <= 0.0 { if a > 0.0 { INF } else { 0.0 } } else { (-(a * y).ln_1p() / a).exp() };
                f!((-t).exp(), -(-t).exp_m1(), if t == INF || t == 0.0 { 0.0 } else { t.powf(a + 1.0) * (-t).exp() / c }) }
            "gpd" => { let y = (x - c) / b; let l = if y <= 0.0 { 0.0 } else if a == 0.0 { -y } else if 1.0 + a * y <= 0.0 { -INF } else { -(a * y).ln_1p() / a };
                f!(-l.exp_m1(), l.exp(), if y < 0.0 || 1.0 + a * y <= 0.0 { 0.0 } else if a == 0.0 { (-y).exp() / b } else { (-(1.0 / a + 1.0) * (a * y).ln_1p()).exp() / b }) }
            "gumbel" => f!((-(-z).exp()).exp(), -(-(-z).exp()).exp_m1(), (-z - (-z).exp()).exp() / b),
            "revweibull" => { let y = (b - x) / c; let t = y.powf(a); f!(if x >= b { 1.0 } else { (-t).exp() }, if x >= b { 0.0 } else { -(-t).exp_m1() }, if x >= b { 0.0 } else { a / c * y.powf(a - 1.0) * (-t).exp() }) }
            _ => f64::NAN,
        }
    }
    /// Scalar laws: the smallest x with F(x) >= u (the JS `quantile`, or L.quantile for a discrete law).
    pub fn quantile(id: &str, p: &[V], u: f64) -> f64 {
        let (lo, hi) = support(id, p);
        if u <= 0.0 || u >= 1.0 { return if u <= 0.0 { lo } else { hi } }
        if let Some((m, q)) = base(id, p) { return quantile(m, &q, u) }
        if discrete(id) { return first(&|k| if u <= 0.5 { cdf(id, p, k) >= u } else { sf(id, p, k) <= 1.0 - u }, lo, hi.min(BIG)) }
        let [a, b, c, d] = args(p);
        // −ln u and −ln(1 − u), each from the smaller of u and 1 − u.
        let (e0, e1) = if u <= 0.5 { (-u.ln(), -(-u).ln_1p()) } else { (-(u - 1.0).ln_1p(), -(1.0 - u).ln()) }; let num = |g: f64| solve(&|w, x| eval(id, p, w, x), (lo, hi), u, g);
        match id {
            "cuniform" => a + u * (b - a), "normal" => a + b * qnorm(u), "exponential" => -(-u).ln_1p() / a,
            "gamma" => num(b * if a >= 1.0 { let z = qnorm(u.clamp(1e-300, 1.0 - 1e-16)); (1e-3 * a).max(a * (1.0 - 1.0 / (9.0 * a) + z / (3.0 * a.sqrt())).powi(3)) }
                else { ((u.max(1e-300).ln() + lgam(a + 1.0)) / a).exp() }),
            "beta" => num(a / (a + b)), "student" => num(qnorm(u.clamp(1e-300, 1.0 - 1e-16))), "fisher" => num(if b > 2.0 { b / (b - 2.0) } else { 1.0 }),
            "logistic" => a + b * (u.ln() - (-u).ln_1p()), "laplace" => a + b * if u < 0.5 { (2.0 * u).ln() } else { -(2.0 * (1.0 - u)).ln() },
            "lognormal" => (a + b * qnorm(u)).exp(), "weibull" => b * e1.powf(1.0 / a),
            "invgauss" => { let s2 = (a / b).ln_1p(); num((a.ln() - s2 / 2.0 + s2.sqrt() * qnorm(u)).exp()) }
            "gompertz" => (e1 / a).ln_1p() / b, "loglogistic" => a * (u / (1.0 - u)).powf(1.0 / b),
            "pareto1" => if u <= 0.5 { a * (e1 / b).exp() } else { a * (1.0 - u).powf(-1.0 / b) }, "pareto2" => a + b * (e1 / c).exp_m1(),
            "burr12" => c * (e1 / b).exp_m1().powf(1.0 / a), "frechet" => c + b * e0.powf(-1.0 / a),
            "cauchy" => if u <= 0.5 { a - b / (PI * u).tan() } else { a + b / (PI * (1.0 - u)).tan() },
            "levy" => a + b / if u <= 0.5 { qnorm(u / 2.0) } else { qhalf(1.0 - u) }.powi(2), "stable" if a == 2.0 => d + SQRT_2 * c * qnorm(u),
            "stable" if a == 1.0 && b == 0.0 => if u <= 0.5 { d - c / (PI * u).tan() } else { d + c / (PI * (1.0 - u)).tan() },
            "stable" if a == 0.5 && b.abs() == 1.0 => d + b * c * (1.0 / qhalf(if b > 0.0 { 1.0 - u } else { u }).powi(2) - 1.0),
            "stable" => { let (s, t) = ssup(a, b); d + c * sroot(a, b, u, if s.is_finite() { s + 1.0 } else if t.is_finite() { t - 1.0 } else { 0.0 }) }
            "gev" => b + c * boxcox(a, -e0.ln()), "gpd" => c + b * boxcox(a, e1), "gumbel" => a - b * e0.ln(), "revweibull" => b - c * e0.powf(1.0 / a), _ => f64::NAN,
        }
    }
    /// The least k in [lo, hi] where the monotone test holds: steps of double length, then bisection.
    fn first(t: &dyn Fn(f64) -> bool, lo: f64, hi: f64) -> f64 {
        let (mut a, mut b, mut s) = (lo, lo, 1.0);
        while !t(b) { a = b + 1.0; b = hi.min(lo + s); s *= 2.0; if b >= hi { b = hi; break } }
        while a < b { let m = a + ((b - a) / 2.0).floor(); if t(m) { b = m } else { a = m + 1.0 } }
        a
    }
    /// The x in the support (lo, hi) with F(x) = u: Newton steps in a bracket that shrinks at each step, and bisection
    /// when a step leaves the bracket. Above u = 1/2 it solves S(x) = 1 − u, so an upper quantile keeps its precision.
    /// f(0, x) is the CDF, f(1, x) the survival function and f(2, x) the density.
    fn solve(f: &dyn Fn(usize, f64) -> f64, (mut lo, mut hi): (f64, f64), u: f64, guess: f64) -> f64 {
        let (up, t) = (u > 0.5, if u > 0.5 { 1.0 - u } else { u }); let g = |x: f64| if up { t - f(1, x) } else { f(0, x) - t };
        let mut x = if guess > lo && guess < hi { guess } else if lo.is_finite() && hi.is_finite() { (lo + hi) / 2.0 }
            else if lo.is_finite() { lo + 1.0 } else if hi.is_finite() { hi - 1.0 } else { 0.0 };
        let mut s = x.abs().max(1.0);
        if lo == -INF { lo = x - s; while g(lo) > 0.0 { hi = hi.min(lo); s *= 2.0; lo -= s } }
        s = x.abs().max(1.0);
        if hi == INF { hi = x + s; while g(hi) < 0.0 { lo = lo.max(hi); s *= 2.0; hi += s } }
        if !(x > lo && x < hi) { x = (lo + hi) / 2.0 }
        for _ in 0..300 {
            let gx = g(x);
            if gx == 0.0 { return x } else if gx < 0.0 { lo = x } else { hi = x }
            let (m, d) = ((lo + hi) / 2.0, f(2, x)); let nx = x - gx / d;
            if !(m > lo && m < hi) { return if g(lo).abs() <= g(hi).abs() { lo } else { hi } }
            if d > 0.0 && nx > lo && nx < hi { if (nx - x).abs() <= 2.3e-16 * x.abs() + 1e-300 { return nx } x = nx } else { x = m }
        }
        x
    }
    /// The mean and the variance; None when one does not exist or is infinite.
    pub fn moments(id: &str, p: &[V]) -> (Option<f64>, Option<f64>) {
        if let Some((m, q)) = base(id, p) { return moments(m, &q) }
        let [a, b, c, d] = args(p); let o = order(id, p);
        let (m, v) = match id {
            "bernoulli" => (a, a * (1.0 - a)), "binomial" => (a * b, a * b * (1.0 - b)),
            "categorical" => { let (m, m2) = list(p, 0).iter().enumerate().fold((0.0, 0.0), |s, (i, w)| { let k = (i + 1) as f64; (s.0 + w * k, s.1 + w * k * k) }); (m, (m2 - m * m).max(0.0)) }
            "uniform" => { let n = b - a + 1.0; ((a + b) / 2.0, (n * n - 1.0) / 12.0) }
            "geometric" => ((1.0 - a) / a, (1.0 - a) / (a * a)), "negbin" => (a * (1.0 - b) / b, a * (1.0 - b) / (b * b)), "poisson" => (a, a),
            "hypergeometric" => { let f = b / a; (c * f, if a > 1.0 { c * f * (1.0 - f) * (a - c) / (a - 1.0) } else { 0.0 }) }
            "zipf" if b == INF => { let z = zeta(a); let m = zeta(a - 1.0) / z; (m, zeta(a - 2.0) / z - m * m) }
            "zipf" => { let h = harm(b, a); let m = harm(b, a - 1.0) / h; (m, (harm(b, a - 2.0) / h - m * m).max(0.0)) }
            "cuniform" => ((a + b) / 2.0, (b - a) * (b - a) / 12.0), "normal" => (a, b * b), "exponential" => (1.0 / a, 1.0 / (a * a)), "gamma" => (a * b, a * b * b),
            "beta" => { let s = a + b; (a / s, a * b / (s * s * (s + 1.0))) }
            "student" => (0.0, a / (a - 2.0)), "fisher" => (b / (b - 2.0), 2.0 * b * b * (a + b - 2.0) / (a * (b - 2.0).powi(2) * (b - 4.0))),
            "logistic" => (a, b * b * PI * PI / 3.0), "laplace" => (a, 2.0 * b * b), "lognormal" => ((a + b * b / 2.0).exp(), (b * b).exp_m1() * (2.0 * a + b * b).exp()),
            "weibull" => { let (g1, g2) = (gam(1.0 + 1.0 / a), gam(1.0 + 2.0 / a)); (b * g1, b * b * (g2 - g1 * g1)) }
            "invgauss" => (a, a * a * a / b),
            // E[X²] = E[ln²(1 + E/η)]/b² with E ~ Exp(1), by quadrature.
            "gompertz" => { let m = a.exp() * e1(a) / b; (m, integrate(&|e| (e / a).ln_1p().powi(2) * (-e).exp(), &[0.0, a.min(0.5), 1.0, 4.0, 16.0, 60.0]) / (b * b) - m * m) }
            "loglogistic" => { let t = PI / b; (a * t / t.sin(), a * a * (2.0 * t / (2.0 * t).sin() - t * t / t.sin().powi(2))) }
            "pareto1" => (b * a / (b - 1.0), a * a * b / ((b - 1.0).powi(2) * (b - 2.0))), "pareto2" => (a + b / (c - 1.0), b * b * c / ((c - 1.0).powi(2) * (c - 2.0))),
            "burr12" => { let r = |r: f64| c.powf(r) * b * (lgam(b - r / a) + lgam(1.0 + r / a) - lgam(b + 1.0)).exp(); (r(1.0), r(2.0) - r(1.0).powi(2)) }
            "frechet" => (c + b * gam(1.0 - 1.0 / a), b * b * (gam(1.0 - 2.0 / a) - gam(1.0 - 1.0 / a).powi(2))),
            "stable" => (if a == 2.0 { d } else { d - b * c * (PI * a / 2.0).tan() }, 2.0 * c * c), "gev" if a == 0.0 => (b + c * EULER, c * c * PI * PI / 6.0),
            "gev" if a.abs() < 1e-7 => (b + c * (EULER + (EULER * EULER / 2.0 + PI * PI / 12.0) * a), c * c * PI * PI / 6.0),
            "gev" => { let (g1, g2) = (gam(1.0 - a), gam(1.0 - 2.0 * a)); (b + c * (g1 - 1.0) / a, c * c * (g2 - g1 * g1) / (a * a)) }
            "gpd" => (c + b / (1.0 - a), b * b / ((1.0 - a).powi(2) * (1.0 - 2.0 * a))), "gumbel" => (a + b * EULER, PI * PI * b * b / 6.0),
            "revweibull" => { let (g1, g2) = (gam(1.0 + 1.0 / a), gam(1.0 + 2.0 / a)); (b - c * g1, c * c * (g2 - g1 * g1)) }
            _ => (f64::NAN, f64::NAN),
        };
        ((o > 1.0 && m.is_finite()).then_some(m), (o > 2.0 && v.is_finite()).then_some(v))
    }
    /// The moment order: the largest r with E|X|^r finite (INF for every moment). As the JS `moments(p).order`.
    pub fn order(id: &str, p: &[V]) -> f64 {
        let [a, b, c, _] = args(p);
        match id {
            "zipf" if b == INF => a - 1.0, "student" | "frechet" => a, "fisher" => b / 2.0, "loglogistic" | "pareto1" => b, "pareto2" => c,
            "burr12" => a * b, "cauchy" => 1.0, "levy" => 0.5, "stable" if a < 2.0 => a, "gev" | "gpd" if a > 0.0 => 1.0 / a, _ => INF,
        }
    }
    /// P(T > |t|) for Student's t law with ν degrees of freedom, with no cancellation.
    fn ttail(t: f64, nu: f64) -> f64 { let t2 = t * t; if t2 > nu { 0.5 * ibeta(nu / (nu + t2), nu / 2.0, 0.5) } else { 0.5 - 0.5 * ibeta(t2 / (nu + t2), 0.5, nu / 2.0) } }
    /// ln Q(z) for the standard normal law; above z = 5 by Mills' ratio, which does not underflow.
    fn nlogsf(z: f64) -> f64 { if z < 5.0 { return pnorm(-z).ln() } let r = (1..=60).rev().fold(z, |r, k| z + k as f64 / r); -0.5 * z * z - 0.5 * (2.0 * PI).ln() - r.ln() }
    /// Φ⁻¹(1/2 + w/2), precise also for a small w.
    fn qhalf(w: f64) -> f64 { if w < 1e-4 { let z = (PI / 2.0).sqrt() * w; z + z * z * z / 6.0 } else { -qnorm(0.5 - w / 2.0) } }
    /// (e^(ξy) − 1)/ξ, and y for ξ = 0.
    fn boxcox(xi: f64, y: f64) -> f64 { if xi == 0.0 { y } else { (xi * y).exp_m1() / xi } }
    /// The sum of k^(−s) from k = n down to 1.
    fn harm(n: f64, s: f64) -> f64 { (1..=n as u64).rev().map(|k| (k as f64).powf(-s)).sum() }
    /// The CDF table of the Zipf law with n ranks; its last entry is the sum of k^(−s), the norm.
    fn ztab(s: f64, n: f64) -> Rc<Vec<f64>> {
        memo(format!("z{s}/{n}"), || { let t = harm(n, s); let mut f = 0.0; let mut v: Vec<f64> = (1..=n as usize).map(|k| { f += (k as f64).powf(-s) / t; f }).collect(); v.push(t); v })
    }
    /// The exponential integral E1(x) for x > 0: a series up to x = 1, a continued fraction above.
    fn e1(x: f64) -> f64 {
        let (mut s, mut t, mut b, mut c, mut d) = (-EULER - x.ln(), 1.0, x + 1.0, 1e300, 1.0 / (x + 1.0));
        if x <= 1.0 { for k in 1..200 { let k = k as f64; t *= -x / k; s -= t / k; if (t / k).abs() < 1e-17 * s.abs() { break } } return s }
        let mut h = d;
        for i in 1..500 { let an = -((i * i) as f64); b += 2.0; d = 1.0 / (an * d + b); c = b + an / c; h *= c * d; if (c * d - 1.0).abs() < 1e-16 { break } }
        h * (-x).exp()
    }
    /// ∫ f over the parts between the sorted points x, by adaptive Gauss–Kronrod (7, 15) quadrature (the JS `integrate`):
    /// the part with the largest error estimate splits in two until the sum of the estimates is below 10^-11 of the
    /// integral (600 parts at most). The estimate of a part is |K − G|, plus a jump of f between an end point and the
    /// nearest node times the gap between them, because no node sees such a jump.
    fn integrate(f: &dyn Fn(f64) -> f64, x: &[f64]) -> f64 {
        const XK: [f64; 7] = [0.991455371120812639, 0.949107912342758525, 0.864864423359769073, 0.741531185599394440, 0.586087235467691130, 0.405845151377397167, 0.207784955007898468];
        const WK: [f64; 8] = [0.022935322010529225, 0.063092092629978553, 0.104790010322250184, 0.140653259715525919, 0.169004726639267903, 0.190350578064785410, 0.204432940075298892, 0.209482141084727828];
        const WG: [f64; 4] = [0.129484966168869693, 0.279705391489276668, 0.381830050505118945, 0.417959183673469388];
        let jump = |e: f64, f0: f64, f1: f64| { let d = (e - f0).abs(); if d > 10.0 * (f0 - f1).abs() * (1.0 - XK[0]) / (XK[0] - XK[1]) + 1e-12 * (e.abs() + f0.abs()) { d } else { 0.0 } };
        let gk = |a: f64, b: f64, fa: f64, fb: f64| {
            let (c, h) = ((a + b) / 2.0, (b - a) / 2.0); let fc = f(c); let (mut k, mut g, mut o) = (WK[7] * fc, WG[3] * fc, [0.0; 4]);
            for i in 0..7 { let (f1, f2) = (f(c - h * XK[i]), f(c + h * XK[i])); if i < 2 { o[2 * i] = f1; o[2 * i + 1] = f2 }
                k += WK[i] * (f1 + f2); if i % 2 == 1 { g += WG[i / 2] * (f1 + f2) } }
            (a, b, fa, fb, k * h, ((k - g) * h).abs() + h * (1.0 - XK[0]) * (jump(fa, o[0], o[2]) + jump(fb, o[1], o[3])))
        };
        let fx: Vec<f64> = x.iter().map(|&t| f(t)).collect(); let mut ps: Vec<_> = (1..x.len()).map(|i| gk(x[i - 1], x[i], fx[i - 1], fx[i])).collect();
        loop {
            let (v, e) = ps.iter().fold((0.0, 0.0), |s, q| (s.0 + q.4, s.1 + q.5));
            if e <= (1e-11 * v.abs()).max(1e-300) || ps.len() >= 600 { return v }
            let big = |q: &(f64, f64, f64, f64, f64, f64)| q.5 > 0.0 && q.1 - q.0 > 1e-15 * q.0.abs().max(q.1.abs()).max(1.0);
            let Some(i) = (0..ps.len()).filter(|&i| big(&ps[i])).max_by(|&i, &j| ps[i].5.total_cmp(&ps[j].5)) else { return v };
            let (a, b, fa, fb, ..) = ps[i]; let (m, fm) = ((a + b) / 2.0, f((a + b) / 2.0)); ps[i] = gk(a, m, fa, fm); ps.push(gk(m, b, fm, fb));
        }
    }
    /// The support of the standard stable law: a half-line when α < 1 and β = ±1.
    fn ssup(a: f64, b: f64) -> (f64, f64) { let t = (PI * a / 2.0).tan(); if a < 1.0 && b.abs() == 1.0 { if b > 0.0 { (-t, INF) } else { (-INF, t) } } else { (-INF, INF) } }
    /// The range [lo, hi] split where log h(θ) = 0, at the peak of h e^(−h); h is monotone, so bisection finds it.
    fn split(lh: &dyn Fn(f64) -> f64, lo: f64, hi: f64) -> Vec<f64> {
        let e = (hi - lo) * 1e-13; let (mut a, mut b) = (lo + e, hi - e); let (fa, fb) = (lh(a), lh(b));
        if !(fa.is_finite() || fb.is_finite()) || fa.signum() == fb.signum() { return vec![lo, hi] }
        for _ in 0..80 { let m = (a + b) / 2.0; if lh(m).signum() == fa.signum() { a = m } else { b = m } }
        vec![lo, (a + b) / 2.0, hi]
    }
    /// The standard stable law S(α, β, 1, 0; 0) at x: its CDF (w = 0), survival function (1) or density (2), by Nolan's
    /// integrals over θ (Nolan 1997), split at the peak of the integrand.
    fn stable0(x: f64, a: f64, b: f64, w: usize) -> f64 {
        let flip = [1, 0, 2][w];
        // ∫ g(h(θ)) dθ with g(h) = e^(−h) (0), 1 − e^(−h) (1), h e^(−h) (2), and e^(−h) with 1 where h is NaN (3).
        let int = |lh: &dyn Fn(f64) -> f64, lo: f64, hi: f64, g: usize| integrate(&|t| {
            let h = lh(t).exp();
            match g { 2 => if h == INF || !(h > 0.0) { 0.0 } else { h * (-h).exp() }, _ if h.is_nan() => (g == 3) as u8 as f64, 1 => -(-h).exp_m1(), _ => (-h).exp() }
        }, &split(lh, lo, hi));
        if a == 1.0 {
            if b == 0.0 { return if w == 2 { 1.0 / (PI * (1.0 + x * x)) } else if (w == 0) == (x < 0.0) { 1f64.atan2(x.abs()) / PI } else { 1.0 - 1f64.atan2(x.abs()) / PI } }
            if b < 0.0 { return stable0(-x, 1.0, -b, flip) }
            let s = -PI * x / (2.0 * b); let lh = |t: f64| s + (2.0 / PI).ln() + ((PI / 2.0 + b * t) / t.cos()).ln() + (PI / 2.0 + b * t) * t.tan() / b;
            return int(&lh, -PI / 2.0, PI / 2.0, w) / if w == 2 { 2.0 * b } else { PI };
        }
        let tq = (PI * a / 2.0).tan(); let (z, t0) = (-b * tq, (b * tq).atan() / a);
        if (x - z).abs() < 1e-12 * z.abs().max(1.0) {
            let f = (PI / 2.0 - t0) / PI; return [f, 1.0 - f, gam(1.0 + 1.0 / a) * t0.cos() / (PI * (1.0 + z * z).powf(1.0 / (2.0 * a)))][w];
        }
        if x < z { return stable0(-x, a, -b, flip) }
        let (d, e, lc) = (x - z, a / (a - 1.0), (a * t0).cos().ln());
        let lh = |t: f64| e * d.ln() + lc / (a - 1.0) + e * (t.cos().ln() - (a * (t0 + t)).sin().ln()) + (a * t0 + (a - 1.0) * t).cos().ln() - t.cos().ln();
        let i = |g| int(&lh, -t0, PI / 2.0, g) / PI;
        match w { 2 => a * i(2) / ((a - 1.0).abs() * d), 1 => i(if a > 1.0 { 0 } else { 1 }), _ if a > 1.0 => 1.0 - i(0), _ => (PI / 2.0 - t0) / PI + i(3) }
    }
    /// The standard stable x with F(x) = u, by the Newton solver from the guess g.
    fn sroot(a: f64, b: f64, u: f64, g: f64) -> f64 { solve(&|w, x| stable0(x, a, b, w), ssup(a, b), u, g) }
    /// The approximate standard stable quantile from a table of 401 quantiles, equally spaced in logit u from 10^-4 to
    /// 1 − 10^-4, with monotone cubic (Fritsch–Carlson) interpolation. Beyond the table: the power tail on a heavy side,
    /// and a root of the CDF on the light side of β = ±1.
    fn tabq(a: f64, b: f64, u: f64) -> f64 {
        const N: usize = 400; let (tt, w) = (9999f64.ln(), 1.0 - u); let h = 2.0 * tt / N as f64;
        let t = memo(format!("s{a}/{b}"), || {
            let mut x = vec![0.0; N + 1];
            for i in 0..=N { x[i] = sroot(a, b, 1.0 / (1.0 + (tt - h * i as f64).exp()), if i > 0 { x[i - 1] } else { 0.0 }) }
            let dl: Vec<f64> = (0..N).map(|i| (x[i + 1] - x[i]) / h).collect();
            let mut m: Vec<f64> = (0..=N).map(|i| if i == 0 { dl[0] } else if i == N { dl[N - 1] } else if dl[i - 1] * dl[i] <= 0.0 { 0.0 } else { (dl[i - 1] + dl[i]) / 2.0 }).collect();
            for i in 0..N { let (al, be) = (m[i] / dl[i], m[i + 1] / dl[i]); let s = al * al + be * be;
                if dl[i] == 0.0 { m[i] = 0.0; m[i + 1] = 0.0 } else if s > 9.0 { let k = 3.0 / s.sqrt(); m[i] = k * al * dl[i]; m[i + 1] = k * be * dl[i] } }
            x.extend(m); x
        });
        let (x, m) = t.split_at(N + 1); let s = u.ln() - w.ln();
        if s <= -tt && b == 1.0 || s >= tt && b == -1.0 { return sroot(a, b, u, if s < 0.0 { x[0] } else { x[N] }) }
        if s <= -tt { return x[0] - if x[0] < 0.0 { x[0].abs() * ((1e-4 / u).powf(1.0 / a) - 1.0) } else { 0.0 } }
        if s >= tt { return x[N] + if x[N] > 0.0 { x[N] * ((1e-4 / w).powf(1.0 / a) - 1.0) } else { 0.0 } }
        let i = (((s + tt) / h).floor() as usize).min(N - 1); let z = (s + tt) / h - i as f64;
        (1.0 + 2.0 * z) * (1.0 - z).powi(2) * x[i] + z * (1.0 - z).powi(2) * h * m[i] + z * z * (3.0 - 2.0 * z) * x[i + 1] + z * z * (z - 1.0) * h * m[i + 1]
    }
    /// One draw. Kind::Reference: the JS reference sampler. Kind::Inverse { cut }: the JS inverse-transform sampler
    /// (cut = 0.99 drops the top 1 % of a table, as the JS "table_cut" failure). Kind::Rejection { scale }: the JS
    /// rejection sampler (scale 0.5 is the JS "envelope" failure), with a count of r.proposals and r.accepts; Err(the JS
    /// "unavailable" text) when the JS has none. Kind::Euler: the reference sampler.
    pub fn draw(id: &str, p: &[V], k: Kind, r: &mut Src) -> Result<V, String> {
        match k {
            Kind::Rejection { scale } => rejd(id, p, scale, r), Kind::Inverse { cut } => Ok(invd(id, p, cut, r)),
            _ => { let (n, a) = (r.proposals, r.accepts); let x = refd(id, p, r); (r.proposals, r.accepts) = (n, a); Ok(x) }
        }
    }
    /// Vose's alias table of the weights w: the probability of each cell and its alias.
    fn alias(w: &[f64]) -> (Vec<f64>, Vec<usize>) {
        let k = w.len(); let mut s: Vec<f64> = w.iter().map(|x| x * k as f64).collect(); let (mut pr, mut al) = (vec![1.0; k], vec![0; k]);
        let (mut sm, mut lg): (Vec<usize>, Vec<usize>) = (0..k).partition(|&i| s[i] < 1.0);
        while let (Some(i), Some(l)) = (sm.pop(), lg.pop()) { pr[i] = s[i]; al[i] = l; s[l] += s[i] - 1.0; if s[l] < 1.0 { sm.push(l) } else { lg.push(l) } }
        (pr, al)
    }
    /// μ + L z, with L the Cholesky factor of the covariance matrix.
    fn affine(p: &[V], z: &[f64]) -> V {
        let (m, k) = (list(p, 0), z.len()); let l = chol(&list(p, 1), k).unwrap_or_else(|| vec![f64::NAN; k * k]);
        V::L((0..k).map(|i| m[i] + (0..=i).map(|j| l[i * k + j] * z[j]).sum::<f64>()).collect())
    }
    /// A multinomial draw by conditional binomial draws, each by the binomial sampler of the kind k.
    fn multi(p: &[V], k: Kind, r: &mut Src) -> V {
        let (mut left, w) = (args(p)[0], list(p, 1)); let (mut out, mut mass) = (vec![0.0; w.len()], 1.0);
        for j in 0..w.len() - 1 {
            if left <= 0.0 { break } let q = if mass > 0.0 { (w[j] / mass).clamp(0.0, 1.0) } else { 0.0 };
            out[j] = draw("binomial", &[V::N(left), V::N(q)], k, r).ok().and_then(|v| v.num()).unwrap_or(0.0); left -= out[j]; mass -= w[j];
        }
        out[w.len() - 1] += left; V::L(out)
    }
    /// The mode of the binomial, negative binomial, Poisson and hypergeometric laws.
    fn mode(id: &str, p: &[V]) -> f64 {
        let ([a, b, c, _], (lo, hi)) = (args(p), support(id, p));
        match id {
            "binomial" => a.min(((a + 1.0) * b).floor()), "negbin" => if a > 1.0 { ((a - 1.0) * (1.0 - b) / b).floor() } else { 0.0 },
            "poisson" => a.floor(), _ => ((c + 1.0) * (b + 1.0) / (a + 2.0)).floor().clamp(lo, hi),
        }
    }
    /// The inverse of one uniform by a sequential search from the mode, with the ratio of neighbour PMF values.
    fn minv(id: &str, p: &[V], u: f64) -> f64 {
        let ([a, b, c, _], (lo, hi)) = (args(p), support(id, p));
        let rt = |k: f64, up: bool| match id {
            "binomial" => { let o = b / (1.0 - b); if up { (a - k) / (k + 1.0) * o } else { k / ((a - k + 1.0) * o) } }
            "negbin" => { let q = 1.0 - b; if up { (k + a) / (k + 1.0) * q } else { k / ((k - 1.0 + a) * q) } }
            "poisson" => if up { a / (k + 1.0) } else { k / a },
            _ => if up { (b - k) * (c - k) / ((k + 1.0) * (a - b - c + k + 1.0)) } else { k * (a - b - c + k) / ((b - k + 1.0) * (c - k + 1.0)) },
        };
        let mut k = mode(id, p); let (mut f, mut pk) = (cdf(id, p, k), pdf(id, p, k));
        if u <= f { while k > lo && u <= f - pk { f -= pk; pk *= rt(k, false); k -= 1.0 } }
        else { while u > f && k < hi { pk *= rt(k, true); k += 1.0; f += pk; if pk == 0.0 { break } } }
        k
    }
    /// The zeta law by rejection from ⌊U^(−1/(s−1))⌋ (Devroye 1986, chapter X); f scales the envelope.
    fn devroye(s: f64, f: f64, r: &mut Src) -> f64 {
        let b = 2f64.powf(s - 1.0); loop { let (u, v) = (r.u(), r.u()); let x = u.powf(-1.0 / (s - 1.0)).floor().min(BIG); let t = (1.0 + 1.0 / x).powf(s - 1.0); r.proposals += 1;
            if v <= t * (b - 1.0) / (b * x * (t - 1.0)) / f { r.accepts += 1; return x } }
    }
    /// A standard stable value S(α, β, 1, 0; 0) by Chambers, Mallows and Stuck (1976), in the form of Weron (1996).
    fn cms(r: &mut Src, a: f64, b: f64) -> f64 {
        let (v, w) = (PI * (r.u() - 0.5), r.exp());
        if a == 1.0 { let pb = PI / 2.0 + b * v; return 2.0 / PI * (pb * v.tan() - b * (PI / 2.0 * w * v.cos() / pb).ln()) }
        let tq = (PI * a / 2.0).tan(); let (bb, sab) = ((b * tq).atan() / a, (1.0 + b * b * tq * tq).powf(1.0 / (2.0 * a)));
        sab * (a * (v + bb)).sin() / v.cos().powf(1.0 / a) * ((v - a * (v + bb)).cos() / w).powf((1.0 - a) / a) - b * tq
    }
    /// One draw of the reference sampler.
    fn refd(id: &str, p: &[V], r: &mut Src) -> V {
        let [a, b, c, d] = args(p); let v = list(p, 0);
        V::N(match id {
            "bernoulli" => (r.u() < a) as u8 as f64, "binomial" if b == 0.0 || b == 1.0 || a == 0.0 => a * b,
            "binomial" if a <= 64.0 => (0..a as usize).filter(|_| r.u() < b).count() as f64, "binomial" => minv(id, p, r.u()),
            "categorical" => { let (pr, al) = alias(&v); let i = ((r.u() * v.len() as f64) as usize).min(v.len() - 1); 1.0 + (if r.u() < pr[i] { i } else { al[i] }) as f64 }
            "multinomial" => return multi(p, Kind::Reference, r), "uniform" => a + (r.u() * (b - a + 1.0)).floor(), "geometric" if a == 1.0 => 0.0,
            "geometric" if a >= 0.01 => { let mut k = 0.0; while r.u() >= a { k += 1.0 } k }
            "geometric" => (r.u().ln() / (-a).ln_1p()).floor(), "negbin" => if b == 1.0 { 0.0 } else { let l = r.gamma(a) * (1.0 - b) / b; r.poisson(l) }, "poisson" => r.poisson(a),
            "hypergeometric" if support(id, p).0 == support(id, p).1 => support(id, p).0, "hypergeometric" if c > 64.0 => minv(id, p, r.u()),
            "hypergeometric" => { let (mut x, mut g, mut n) = (0.0, b, a); for _ in 0..c as usize { if (r.u() * n).floor() < g { x += 1.0; g -= 1.0 } n -= 1.0 } x }
            "zipf" if b == INF => devroye(a, 1.0, r),
            "zipf" => { let (t, u) = (ztab(a, b), r.u()); 1.0 + t[..b as usize].partition_point(|&f| f < u).min(b as usize - 1) as f64 }
            "cuniform" => a + (b - a) * r.u(), "normal" => a + b * r.normal(),
            "mvnormal" => return affine(p, &(0..v.len()).map(|_| r.normal()).collect::<Vec<_>>()), "exponential" => r.exp() / a,
            "gamma" => b * r.gamma(a), "erlang" if a <= 64.0 => (0..a as usize).map(|_| r.exp()).sum::<f64>() / b, "erlang" => r.gamma(a) / b,
            "beta" => { let x = r.gamma(a); x / (x + r.gamma(b)) }
            "dirichlet" => { let g: Vec<f64> = v.iter().map(|&x| r.gamma(x)).collect(); let t: f64 = g.iter().sum(); return V::L(g.iter().map(|x| x / t).collect()) }
            "chisq" if a.fract() == 0.0 && a <= 64.0 => (0..a as usize).map(|_| r.normal().powi(2)).sum(), "chisq" => 2.0 * r.gamma(a / 2.0),
            "student" => r.normal() / (2.0 * r.gamma(a / 2.0) / a).sqrt(), "fisher" => r.gamma(a / 2.0) / a / (r.gamma(b / 2.0) / b),
            "logistic" => a + b * (r.exp().ln() - r.exp().ln()), "laplace" => a + b * (r.exp() - r.exp()), "lognormal" => (a + b * r.normal()).exp(), "weibull" => b * r.exp().powf(1.0 / a),
            "invgauss" => { let v = r.normal().powi(2); let y = a + a * a * v / (2.0 * b) - a / (2.0 * b) * (4.0 * a * b * v + a * a * v * v).sqrt(); if r.u() <= a / (a + y) { y } else { a * a / y } }
            "gompertz" => (r.exp() / a).ln_1p() / b,
            "loglogistic" => { let u = r.u(); a * (u / (1.0 - u)).powf(1.0 / b) }
            "pareto1" => a * r.u().powf(-1.0 / b),
            "pareto2" => { let e = r.exp(); a + e / (r.gamma(c) / b) }
            "burr12" => c * (r.exp() / b).exp_m1().powf(1.0 / a), "frechet" => c + b / r.exp().powf(1.0 / a), "cauchy" => a + b * r.normal() / r.normal(),
            "levy" => a + b / r.normal().powi(2), "stable" => d + c * cms(r, a, b), "gev" => b + c * boxcox(a, -r.exp().ln()),
            "gpd" => c + b * boxcox(a, r.exp()), "gumbel" => a - b * r.exp().ln(), "revweibull" => b - c * r.exp().powf(1.0 / a), _ => f64::NAN,
        })
    }
    /// One draw of the inverse transform, with one uniform for each entry; a cut below 1 caps each value at its cut quantile.
    fn invd(id: &str, p: &[V], cut: f64, r: &mut Src) -> V {
        let ([a, b, c, d], (lo, hi), v) = (args(p), support(id, p), list(p, 0)); let cap = |q: f64| if cut < 1.0 { q } else { INF };
        match id {
            "multinomial" => return multi(p, Kind::Inverse { cut }, r),
            "mvnormal" => { let t = cap(qnorm(cut)); return affine(p, &(0..v.len()).map(|_| qnorm(r.u()).min(t)).collect::<Vec<_>>()) }
            // The stick method: X_j = (1 − X_1 − … − X_{j−1}) B_j with B_j ~ Beta(α_j, α_{j+1} + … + α_k).
            "dirichlet" => { let (mut x, mut left) = (vec![0.0; v.len()], 1.0);
                for j in 0..v.len() - 1 { let q = [V::N(v[j]), V::N(v[j + 1..].iter().sum())]; x[j] = left * quantile("beta", &q, r.u()).min(cap(quantile("beta", &q, cut))); left -= x[j] }
                x[v.len() - 1] = left.max(0.0); return V::L(x) }
            _ => {}
        }
        let sg = id == "stable" && !(a == 2.0 || a == 1.0 && b == 0.0 || a == 0.5 && b.abs() == 1.0);
        let tab = |t: &[f64], u: f64| 1.0 + t.partition_point(|&f| f < u).min(t.len() - 1) as f64;
        let map = |u: f64| match id {
            "bernoulli" => (u > 1.0 - a) as u8 as f64, "binomial" | "negbin" | "poisson" | "hypergeometric" => if lo == hi { lo } else { minv(id, p, u) },
            "categorical" => { let mut f = 0.0; tab(&v.iter().map(|w| { f += w; f }).collect::<Vec<_>>(), u) }
            "uniform" => a + (u * (b - a + 1.0)).floor(), "geometric" => if a == 1.0 { 0.0 } else { (u.ln() / (-a).ln_1p()).floor() },
            // A CDF table to rank 4096, then bisection on the survival function ζ(s, k + 1)/ζ(s).
            "zipf" if b == INF => { let z = zeta(a); let t = memo(format!("h{a}"), || { let mut f = 0.0; (1..=4096).map(|k| { f += (k as f64).powf(-a) / z; f }).collect() });
                if u <= t[4095] { tab(&t, u) } else { first(&|k| hurwitz(a, k + 1.0) / z <= 1.0 - u, 4097.0, BIG) } }
            "zipf" => tab(&ztab(a, b)[..b as usize], u), _ if sg => d + c * tabq(a, b, u), _ => quantile(id, p, u),
        };
        V::N(map(r.u()).min(cap(if sg { map(cut) } else { quantile(id, p, cut) })))
    }
    /// The envelope constant M of a rejection sampler of the first two groups, or the reason that the sampler costs too much.
    fn env(m: f64) -> Result<f64, String> {
        if !(m >= 1.0 && m.is_finite()) { return Err(format!("The envelope constant M = {} is not finite.", js(m, false))) }
        if 1.0 / m >= 1e-3 { return Ok(m) }
        let t = format!("{:.2e}", 1.0 / m); let (f, e) = t.split_once('e').unwrap(); let e: i32 = e.parse().unwrap();
        let t = if e < -6 { format!("{f}e{e}") } else { format!("{:.*}", (2 - e) as usize, 1.0 / m) };
        Err(format!("The acceptance probability 1/M = {t} is below 0.001, so the method costs too much here."))
    }
    /// Rejection: propose y, accept it when ln U ≤ ln f(y) − ln g(y) − ln(M s), with a count of the proposals and the
    /// acceptances.
    fn rej(r: &mut Src, m: f64, s: f64, prop: &dyn Fn(&mut Src) -> f64, lr: &dyn Fn(f64) -> f64) -> f64 {
        loop { let y = prop(r); r.proposals += 1;
            if r.u().ln() <= lr(y) - (m * s).ln() { r.accepts += 1; return y } }
    }
    /// Gamma(k, 1) for k ≥ 1 by rejection from the exponential law with mean k: M = k^k e^(1−k)/Γ(k).
    fn gbe(k: f64, s: f64, r: &mut Src) -> Result<f64, String> {
        if k < 1.0 { return Err(format!("For a shape k = {} below 1 the density is unbounded at 0, so no exponential proposal covers it.", js(k, true))) }
        let m = env((k * k.ln() + 1.0 - k - lgam(k)).exp())?;
        Ok(rej(r, m, s, &|r| k * r.exp(), &|x| (k - 1.0) * x.ln() - x - lgam(k) + x / k + k.ln()))
    }
    /// Beta(a, b) for a, b ≥ 1 by rejection from the uniform law: M is the density at the mode.
    fn bbu(a: f64, b: f64, s: f64, r: &mut Src) -> Result<f64, String> {
        if a < 1.0 || b < 1.0 { return Err(format!("With a = {} and b = {} the density is unbounded at {}, so no uniform proposal covers it.", js(a, true), js(b, true), (a >= 1.0) as u8)) }
        let q = [V::N(a), V::N(b)]; let m = env(pdf("beta", &q, if a + b > 2.0 { (a - 1.0) / (a + b - 2.0) } else { 0.5 }).max(1.0))?;
        Ok(rej(r, m, s, &|r| r.u(), &|x| pdf("beta", &q, x).ln()))
    }
    /// One draw of the rejection sampler, with the envelope scaled by s, or the reason that the law has none.
    fn rejd(id: &str, p: &[V], s: f64, r: &mut Src) -> Result<V, String> {
        let [a, b, c, d] = args(p); let st = |v: f64| js(v, true);
        let lap = |r: &mut Src| { let u = r.u(); if u < 0.5 { (2.0 * u).ln() } else { -(2.0 * (1.0 - u)).ln() } }; let ll = |y: f64| -LN_2 - y.abs();
        // The standard normal, logistic and Gumbel laws from the Laplace law; Lomax(1, a) from Lomax(1, a/2); Weibull(k, 1)
        // for k ≥ 1 from Exp(1); Fréchet(a, 1) from the log-logistic law; Cauchy from the two-sided Lomax law with density
        // 1/(2(1 + |y|)²); Lévy(0, c) from Lomax(c, 1/2).
        let nrm = |r: &mut Src| rej(r, (2.0 * E / PI).sqrt(), s, &lap, &|y| -0.5 * y * y - 0.5 * (2.0 * PI).ln() - ll(y));
        let lgs = |r: &mut Src| rej(r, 2.0, s, &lap, &|y| -y.abs() - 2.0 * (-y.abs()).exp().ln_1p() - ll(y)); let gmb = |r: &mut Src| rej(r, 2.0, s, &lap, &|y| -y - (-y).exp() - ll(y));
        let lomax = |r: &mut Src, a: f64| rej(r, 2.0, s, &|r| r.u().powf(-2.0 / a) - 1.0, &|y| LN_2 - a / 2.0 * y.ln_1p());
        let wbe = |r: &mut Src, k: f64| rej(r, k, s, &|r| r.exp(), &|y| k.ln() + (k - 1.0) * y.ln() - y.powf(k) + y);
        let frl = |r: &mut Src, a: f64| rej(r, 4.0 / E, s, &|r| { let u = r.u(); (u / (1.0 - u)).powf(1.0 / a) }, &|y| -2.0 * a * y.ln() - y.powf(-a) + 2.0 * y.powf(a).ln_1p());
        let cau = |r: &mut Src| rej(r, 4.0 / PI, s, &|r| { let v = 1.0 / r.u() - 1.0; if r.u() < 0.5 { -v } else { v } }, &|y| LN_2 - PI.ln() - (y * y).ln_1p() + 2.0 * y.abs().ln_1p());
        let lev = |r: &mut Src, c: f64| rej(r, (2.0 / PI).sqrt() * 3f64.powf(1.5) / E, s, &|r| c * (r.u().powf(-2.0) - 1.0),
            &|y| 0.5 * (c / (2.0 * PI)).ln() - 1.5 * y.ln() - c / (2.0 * y) + (2.0 * c).ln() + 1.5 * (y / c).ln_1p());
        let no = |t: &str| Err(t.to_string());
        Ok(V::N(match id {
            "multinomial" => return no("This piece has no rejection sampler for a vector law: a uniform proposal on all compositions of n has a very small acceptance probability."),
            "zipf" if b == INF => devroye(a, s, r),
            // A geometric proposal: with p/2 for the geometric law, else with the q of the JS and M at the peak of the ratio.
            "geometric" | "negbin" | "poisson" => {
                if support(id, p).1 == 0.0 { return no("The law is a point mass at 0.") }
                let q = match id { "geometric" => a / 2.0, "negbin" if a <= 1.0 => b, "negbin" => 1.0 / (1.0 + a * (1.0 - b) / b), _ => 1.0 / (1.0 + a) };
                let ratio = |k: f64| pdf(id, p, k) / (q * (k * (-q).ln_1p()).exp());
                let m = if id == "geometric" { 2.0 } else { memo(format!("g{id}{a}/{b}"), || { let (mut k, mut m) = (0.0, ratio(0.0)); while ratio(k + 1.0) >= m && k <= 1e7 { m = ratio(k + 1.0); k += 1.0 } vec![m] })[0] };
                rej(r, env(m)?, s, &|r| (r.u().ln() / (-q).ln_1p()).floor(), &|k| ratio(k).ln())
            }
            // The uniform proposal on a finite support, with M = |support| · max p.
            _ if discrete(id) => {
                let (lo, hi) = support(id, p); let n = hi - lo + 1.0;
                if n > 65536.0 { return no("The support has more than 65536 points, so the page does not tabulate the envelope.") }
                let top = match id { "categorical" => list(p, 0).iter().fold(0.0, |x: f64, &y| x.max(y)), "bernoulli" => a.max(1.0 - a), "uniform" | "zipf" => pdf(id, p, lo), _ => pdf(id, p, mode(id, p)) };
                rej(r, env(n * top)?, s, &|r| lo + (r.u() * n).floor(), &|k| (pdf(id, p, k) * n).ln())
            }
            "cuniform" => return no("The uniform law is the proposal of the other rejection samplers. Rejection from itself accepts every proposal, so it adds nothing."),
            "normal" => a + b * nrm(r), "mvnormal" => return Ok(affine(p, &(0..list(p, 0).len()).map(|_| nrm(r)).collect::<Vec<_>>())),
            "exponential" => rej(r, 2.0, s, &|r| 2.0 * r.exp() / a, &|y| LN_2 - a * y / 2.0), "gamma" => b * gbe(a, s, r)?, "erlang" => gbe(a, s, r)? / b,
            "chisq" => 2.0 * gbe(a / 2.0, s, r)?, "beta" => bbu(a, b, s, r)?,
            "dirichlet" => { let g = list(p, 0).iter().map(|&x| gbe(x, s, r)).collect::<Result<Vec<f64>, String>>().map_err(|e| format!("Each α_j must be 1 or more. {e}"))?;
                let t: f64 = g.iter().sum(); return Ok(V::L(g.iter().map(|x| x / t).collect())) }
            "student" if a < 1.0 => return Err(format!("For ν = {} below 1 the t tail is heavier than the Cauchy tail, so the Cauchy proposal does not cover it.", st(a))),
            "student" => rej(r, env((pdf(id, p, 1.0) * PI * 2.0).max(1.0))?, s, &|r| (PI * (r.u() - 0.5)).tan(), &|x| pdf(id, p, x).ln() + (PI * (1.0 + x * x)).ln()),
            "fisher" if a < 2.0 || b < 2.0 => return Err(format!("The method needs d₁ ≥ 2 and d₂ ≥ 2: with d₁ = {} and d₂ = {} the density of Y = d₁X/(d₁X + d₂) is unbounded.", st(a), st(b))),
            "fisher" => { let y = bbu(a / 2.0, b / 2.0, s, r)?; b * y / (a * (1.0 - y)) }
            "logistic" => a + b * lgs(r), "laplace" => a + b * rej(r, 2.0, s, &|r| { let u = r.u(); u.ln() - (-u).ln_1p() }, &|y| -LN_2 + 2.0 * (-y.abs()).exp().ln_1p()),
            "lognormal" => (a + b * nrm(r)).exp(),
            "weibull" if a < 1.0 => return Err(format!("For k = {} < 1 the density is not bounded at 0 and its tail is heavier than an exponential tail, so the page has no envelope.", st(a))),
            "weibull" => b * wbe(r, a),
            "invgauss" => return no("The page gives no envelope for this law. The reference sampler, the exact transformation of Michael, Schucany and Haas, needs no rejection step."),
            "gompertz" => rej(r, (-1.0 + (1.0 + a) * (1.0 / a).ln_1p()).exp(), s, &|r| r.exp() / (a * b), &|x| b * x - a * (b * x).exp_m1() + a * b * x),
            "loglogistic" => a * (lgs(r) / b).exp(), "pareto1" => a * (1.0 + lomax(r, b)), "pareto2" => a + b * lomax(r, c),
            "burr12" => c * lomax(r, b).powf(1.0 / a), "frechet" => c + b * frl(r, a), "cauchy" => a + b * cau(r), "levy" => a + lev(r, b),
            "stable" if a == 2.0 => d + SQRT_2 * c * nrm(r), "stable" if a == 1.0 && b == 0.0 => d + c * cau(r), "stable" if a == 0.5 && b.abs() == 1.0 => d + b * c * (lev(r, 1.0) - 1.0),
            "stable" => return no("The stable density has no closed form here: it is a numerical integral, so the page cannot guarantee an envelope constant M ≥ sup f/g."),
            "gev" if a > 0.0 => b + c * (frl(r, 1.0 / a) - 1.0) / a, "gev" if a == 0.0 => b + c * gmb(r),
            "gev" if a >= -1.0 => b + c * (1.0 - wbe(r, -1.0 / a)) / -a, "gpd" if a > 0.0 => c + b / a * lomax(r, 1.0 / a),
            "gpd" if a == 0.0 => c + b * rej(r, 3.375 / E, s, &|r| 2.0 * (r.u().powf(-0.5) - 1.0), &|y| -y + 3.0 * (y / 2.0).ln_1p()),
            "gpd" if a >= -1.0 => { let t = -1.0 / a; c + b * rej(r, t, s, &|r| t * r.u(), &|y| if y > t { -INF } else { -(1.0 / a + 1.0) * (a * y).ln_1p() } - (-a).ln()) }
            "gev" | "gpd" => return Err(format!("For ξ = {} < −1 the density is not bounded at the upper end point, so the page has no envelope.", st(a))), "gumbel" => a + b * gmb(r),
            "revweibull" if a < 1.0 => return Err(format!("For α = {} < 1 the density is not bounded at the end point, so the page has no envelope.", st(a))),
            "revweibull" => b - c * wbe(r, a), _ => return Err(format!("{id} is not a law of the catalogue.")),
        }))
    }
}
```

```rust
//| caption: The constructed laws and the custom laws.
mod built {
    //! The constructed laws of the models (empirical, kde, mixture_F, truncated_F and compound_F for a law F of the
    //! catalogue or another constructed law) and the custom law lines (law Name(params) kind(arg) = expression …), as
    //! constructed.js and custom.js of the workbench compute them.
    use super::*;
    use crate::cat;
    use crate::expr::*;
    use std::{cell::RefCell, collections::HashMap, rc::Rc};

    const NAN: f64 = f64::NAN;
    /// An alias table (Vose): the probability to keep each index, and its alias.
    type Al = (Vec<f64>, Vec<usize>);
    type C = (f64, f64);

    /// A number for a message: 6 significant digits. With `e` (custom.js), an exponent below 10^-4 and from 10^7, and the
    /// first minus sign as "−".
    fn show(v: f64, e: bool) -> String {
        if v.is_nan() { return (if e { "not a number" } else { "NaN" }).into() } if v.is_infinite() { return (if v > 0.0 { "∞" } else { "−∞" }).into() }
        let s = if e && v != 0.0 && (v.abs() < 1e-4 || v.abs() >= 1e7) {
            let s = format!("{v:.2e}"); if s.contains("e-") { s } else { s.replace('e', "e+") } } else { format!("{}", format!("{v:.5e}").parse::<f64>().unwrap() + 0.0) };
        if e { s.replacen('-', "−", 1) } else { s } }
    fn sh(v: f64) -> String { show(v, true) }
    /// An integer with a comma between each group of 3 digits.
    fn count(n: usize) -> String { n.to_string().as_bytes().rchunks(3).rev().map(|c| std::str::from_utf8(c).unwrap()).collect::<Vec<_>>().join(",") }
    fn interval(lo: f64, hi: f64) -> String { format!("{}{}, {}{}", if lo.is_finite() { "[" } else { "(" }, sh(lo), sh(hi), if hi.is_finite() { "]" } else { ")" }) }
    fn isint(x: f64) -> bool { x.is_finite() && x.fract() == 0.0 }

    /// The least index i with c[i] ≥ t in a table that does not decrease, or the last index.
    fn search(c: &[f64], t: f64) -> usize { c.partition_point(|&v| v < t).min(c.len() - 1) }
    fn below(r: &mut Src, n: usize) -> usize { ((r.u() * n as f64) as usize).min(n - 1) }
    /// Vose's alias table for weights that add to 1.
    fn alias(w: &[f64]) -> Al {
        let k = w.len(); let (mut prob, mut al, mut sc) = (vec![1.0; k], vec![0; k], w.iter().map(|x| x * k as f64).collect::<Vec<_>>());
        let (mut small, mut large): (Vec<usize>, Vec<usize>) = (0..k).partition(|&i| sc[i] < 1.0);
        while let (Some(s), Some(l)) = (small.pop(), large.pop()) {
            (prob[s], al[s]) = (sc[s], l); sc[l] += sc[s] - 1.0; if sc[l] < 1.0 { small.push(l) } else { large.push(l) } }
        (prob, al) }
    /// One index from an alias table: one integer and one uniform.
    fn pick(a: &Al, r: &mut Src) -> usize { let i = below(r, a.0.len()); if r.u() < a.0[i] { i } else { a.1[i] } }
    /// The least integer k in [lo, hi] with test(k), for a monotone test: steps that double, then bisection.
    fn first(test: &dyn Fn(f64) -> bool, lo: f64, hi: f64) -> f64 {
        let (mut a, mut b, mut step) = (lo, lo, 1.0); while !test(b) { a = b + 1.0; b = hi.min(lo + step); step *= 2.0; if b >= hi { b = hi; break } }
        while a < b { let m = a + ((b - a) / 2.0).floor(); if test(m) { b = m } else { a = m + 1.0 } } a }
    /// The bracket of the quantile u in a CDF table and a first guess inside it; open past an end of the table.
    fn bracket(xs: &[f64], fs: &[f64], u: f64, slo: f64, shi: f64) -> (f64, f64, f64) {
        let (j, n) = (search(fs, u), xs.len() - 1); if j == 0 { return (slo, xs[0], xs[0]) } if fs[j] < u { return (xs[n], shi, xs[n]) } let d = fs[j] - fs[j - 1];
        (xs[j - 1], xs[j], xs[j - 1] + (xs[j] - xs[j - 1]) * if d > 0.0 { (u - fs[j - 1]) / d } else { 0.5 }) }
    /// The law with mass w_i/Σw at each distinct value x_i: the sorted values (equal values merged), masses and cumulative sums.
    fn atoms(x: &[f64], w: &[f64]) -> (Vec<f64>, Vec<f64>, Vec<f64>) {
        let mut o: Vec<usize> = (0..x.len()).collect(); o.sort_by(|&a, &b| x[a].total_cmp(&x[b])); let (mut v, mut p): (Vec<f64>, Vec<f64>) = (vec![], vec![]);
        for i in o { if v.last() == Some(&x[i]) { *p.last_mut().unwrap() += w[i] } else { v.push(x[i]); p.push(w[i]) } } let (t, mut s) = (p.iter().sum::<f64>(), 0.0);
        let p: Vec<f64> = p.iter().map(|q| q / t).collect(); let c = p.iter().map(|q| { s += q; s }).collect(); (v, p, c) }
    /// The mean and variance of masses p at values x.
    fn mv(x: &[f64], p: &[f64]) -> (Option<f64>, Option<f64>) {
        let m = x.iter().zip(p).map(|(x, p)| p * x).sum::<f64>(); (Some(m), Some(x.iter().zip(p).map(|(x, p)| p * (x - m).powi(2)).sum())) }
    /// E[X] and Var X on [lo, hi] from the survival function, by Simpson's rule on n cells.
    fn simpson(sf: &dyn Fn(f64) -> f64, lo: f64, hi: f64, n: usize) -> (Option<f64>, Option<f64>) {
        let (dx, mut a, mut c) = ((hi - lo) / n as f64, 0.0, 0.0);
        for j in 0..n {
            let x0 = lo + j as f64 * dx; let (xm, x1) = (x0 + dx / 2.0, x0 + dx); let (s0, sm, s1) = (sf(x0), sf(xm), sf(x1)); a += dx / 6.0 * (s0 + 4.0 * sm + s1);
            c += dx / 6.0 * (2.0 * (x0 - lo) * s0 + 8.0 * (xm - lo) * sm + 2.0 * (x1 - lo) * s1); }
        let m = lo + a; (Some(m), Some((c + 2.0 * lo * m - lo * lo - m * m).max(0.0))) }
    /// The kernel density CDF (or, with `up`, the survival function) at v.
    fn kc(x: &[f64], w: &[f64], h: f64, v: f64, up: bool) -> f64 { x.iter().zip(w).map(|(xi, wi)| wi * pnorm(if up { xi - v } else { v - xi } / h)).sum() }

    /* ---------- the constructed laws ---------- */

    /// A constructed law with its arguments checked and its tables set up.
    enum Law {
        Cat(&'static str, Vec<V>),
        /// Sorted atoms with masses and cumulative sums; `int` when every value is an integer.
        Emp { x: Vec<f64>, p: Vec<f64>, c: Vec<f64>, int: bool, al: Al },
        /// Data, normalised weights, bandwidth, a CDF table on 4,097 points, and the mean and variance.
        Kde { x: Vec<f64>, w: Vec<f64>, h: f64, t: Vec<f64>, f: Vec<f64>, m: (f64, f64), al: Al },
        /// Weights, the components (none for a dead component that fails its check), and whether F is continuous.
        Mix { w: Vec<f64>, c: Vec<Option<Law>>, k: bool, al: Al },
        /// F kept on [lo, hi]: Z = P(lo ≤ X ≤ hi), computed on the upper side when P(X < lo) > 1/2 (up), from
        /// P(X ≥ lo), P(X > hi) and P(X < lo); and a CDF table on 1,025 points for a continuous F.
        Trunc { b: Box<Law>, lo: f64, hi: f64, z: f64, up: bool, alo: f64, ahi: f64, blo: f64, t: Option<(Vec<f64>, Vec<f64>)> },
        /// S = Y_1 + … + Y_N with N ~ Poisson(freq): Panjer's table (step h, masses g, cumulative sums, the mass past it).
        Comp { b: Box<Law>, freq: f64, t: Result<(f64, Vec<f64>, Vec<f64>, f64), String> }, }

    fn live<'a>(w: &'a [f64], c: &'a [Option<Law>]) -> impl Iterator<Item = (f64, &'a Law)> {
        w.iter().zip(c).filter_map(|(&w, c)| c.as_ref().filter(|_| w > 0.0).map(|c| (w, c))) }

    /// The x with F(x) = u for a continuous law (special.js solve): Newton steps inside a bracket that shrinks at each
    /// step, else bisection; above u = 1/2 on the survival function. An infinite end is first made finite.
    fn nsolve(l: &Law, u: f64, lo: f64, hi: f64, x: f64) -> f64 {
        let (t, up) = if u > 0.5 { (1.0 - u, true) } else { (u, false) }; let g = |x: f64| if up { t - l.sf(x) } else { l.cdf(x) - t };
        let (mut lo, mut hi, mut x) = (lo, hi, if x.is_finite() { x } else { 0.0 });
        if !(x > lo && x < hi) { x = if lo.is_finite() && hi.is_finite() { (lo + hi) / 2.0 } else if lo.is_finite() { lo + 1.0 } else if hi.is_finite() { hi - 1.0 } else { 0.0 } }
        let mut step = x.abs().max(1.0); if lo == -INF { lo = x - step; while g(lo) > 0.0 { hi = hi.min(lo); step *= 2.0; lo -= step } } step = x.abs().max(1.0);
        if hi == INF { hi = x + step; while g(hi) < 0.0 { lo = lo.max(hi); step *= 2.0; hi += step } } if !(x > lo && x < hi) { x = (lo + hi) / 2.0 }
        for _ in 0..300 {
            let gx = g(x); if gx == 0.0 { return x } if gx < 0.0 { lo = x } else { hi = x } let mid = (lo + hi) / 2.0;
            if !(mid > lo && mid < hi) { return if g(lo).abs() <= g(hi).abs() { lo } else { hi } } let d = l.pdf(x); let nw = x - gx / d;
            if d > 0.0 && nw.is_finite() && nw > lo && nw < hi {
                if (nw - x).abs() <= 2.3e-16 * x.abs() + 1e-300 { return nw } x = nw; } else { x = mid } }
        x }

    impl Law {
        fn cont(&self) -> bool {
            match self { Law::Cat(id, _) => !cat::discrete(id), Law::Emp { .. } => false, Law::Kde { .. } => true, Law::Mix { k, .. } => *k, Law::Trunc { b, .. } | Law::Comp { b, .. } => b.cont() }
        }
        /// A continuous law with an atom at 0: a compound law with continuous terms.
        fn mixed(&self) -> bool {
            match self { Law::Comp { b, .. } => b.cont(), Law::Trunc { b, .. } => b.mixed(), Law::Mix { c, .. } => c.iter().flatten().next().is_some_and(Law::mixed), _ => false } }
        fn mass(&self, x: f64) -> f64 { if !self.cont() { self.pdf(x) } else if self.mixed() && x == 0.0 { self.cdf(0.0) } else { 0.0 } }
        /// The PMF of a discrete law, the PDF of a continuous one.
        fn pdf(&self, x: f64) -> f64 {
            match self {
                Law::Cat(id, p) => cat::pdf(id, p, x),
                Law::Emp { x: v, p, .. } => { let i = v.partition_point(|a| *a < x); if i < v.len() && v[i] == x { p[i] } else { 0.0 } }
                Law::Kde { x: v, w, h, .. } => v.iter().zip(w).map(|(xi, wi)| wi * dnorm((x - xi) / h)).sum::<f64>() / h,
                Law::Mix { w, c, .. } => live(w, c).map(|(w, c)| w * c.pdf(x)).sum(),
                Law::Trunc { b, lo, hi, z, .. } => if x < *lo || x > *hi { 0.0 } else { b.pdf(x) / z },
                Law::Comp { b, t: Ok((h, g, ..)), .. } if b.cont() => if x <= 0.0 { 0.0 } else { g.get((x / h).ceil() as usize).map_or(0.0, |v| v / h) },
                Law::Comp { t: Ok((_, g, ..)), .. } => if isint(x) && x >= 0.0 { g.get(x as usize).copied().unwrap_or(0.0) } else { 0.0 },
                Law::Comp { .. } => 0.0, } }
        fn cdf(&self, x: f64) -> f64 {
            match self {
                Law::Cat(id, p) => cat::cdf(id, p, x),
                Law::Emp { x: v, c, .. } => { let i = v.partition_point(|a| *a <= x); if i == 0 { 0.0 } else { c[i - 1].min(1.0) } }
                Law::Kde { x: v, w, h, .. } => kc(v, w, *h, x, false),
                Law::Mix { w, c, .. } => live(w, c).map(|(w, c)| w * c.cdf(x)).sum::<f64>().min(1.0),
                Law::Trunc { b, lo, hi, z, up, alo, blo, .. } =>
                    if x < *lo { 0.0 } else if x >= *hi { 1.0 } else { (if *up { alo - b.sf(x) } else { b.cdf(x) - blo } / z).clamp(0.0, 1.0) },
                Law::Comp { b, t, .. } => match t {
                    _ if x < 0.0 => 0.0,
                    Err(_) => NAN,
                    Ok((h, _, cum, rest)) => {
                        let (n, k) = (cum.len() - 1, (if b.cont() { x / h } else { x }).floor());
                        if k >= n as f64 { (cum[n] + if k > n as f64 { *rest } else { 0.0 }).min(1.0) } else { cum[k as usize].min(1.0) } } }, } }
        fn sf(&self, x: f64) -> f64 {
            match self {
                Law::Cat(id, p) => cat::sf(id, p, x),
                Law::Kde { x: v, w, h, .. } => kc(v, w, *h, x, true),
                Law::Mix { w, c, .. } => live(w, c).map(|(w, c)| w * c.sf(x)).sum::<f64>().min(1.0),
                Law::Trunc { b, lo, hi, z, up, ahi, blo, .. } =>
                    if x < *lo { 1.0 } else if x >= *hi { 0.0 } else { (if *up { b.sf(x) - ahi } else { z - (b.cdf(x) - blo) } / z).clamp(0.0, 1.0) },
                _ => (1.0 - self.cdf(x)).max(0.0), } }
        fn sup(&self) -> (f64, f64) {
            match self {
                Law::Cat(id, p) => cat::support(id, p),
                Law::Emp { x, .. } => (x[0], x[x.len() - 1]),
                Law::Kde { .. } => (-INF, INF),
                Law::Mix { w, c, .. } => live(w, c).fold((INF, -INF), |(a, b), (_, c)| { let s = c.sup(); (a.min(s.0), b.max(s.1)) }),
                Law::Trunc { b, lo, hi, .. } => { let s = b.sup(); if b.cont() { (s.0.max(*lo), s.1.min(*hi)) } else { (s.0.max(lo.ceil()), s.1.min(hi.floor())) } }
                Law::Comp { b, freq, .. } => { let s = b.sup(); (s.0.min(0.0), if *freq > 0.0 && s.1 > 0.0 { INF } else { 0.0 }) } } }
        fn q(&self, u: f64) -> f64 {
            let (lo, hi) = self.sup();
            match self {
                Law::Cat(id, p) => cat::quantile(id, p, u),
                _ if u <= 0.0 => lo,
                _ if u >= 1.0 => hi,
                Law::Emp { x, c, .. } => x[search(c, u)],
                Law::Comp { b, t, .. } => match t { Err(_) => NAN, Ok((h, _, cum, _)) => search(cum, u) as f64 * if b.cont() { *h } else { 1.0 } },
                _ if !self.cont() => first(&|k| if u <= 0.5 { self.cdf(k) >= u } else { self.sf(k) <= 1.0 - u }, lo, hi.min(9007199254740991.0)),
                Law::Kde { t, f, .. } => { let (a, b, g) = bracket(t, f, u, -INF, INF); nsolve(self, u, a, b, g) }
                // The mixture: a bracket from the least and the greatest component quantile.
                Law::Mix { w, c, .. } => {
                    let qs: Vec<f64> = live(w, c).map(|(_, c)| c.q(u.clamp(1e-300, 1.0 - 1e-16))).filter(|q| q.is_finite()).collect();
                    if qs.is_empty() { return nsolve(self, u, lo, hi, 0.0) } let (a, b) = (qs.iter().fold(INF, |a, &q| a.min(q)), qs.iter().fold(-INF, |a, &q| a.max(q)));
                    nsolve(self, u, lo.max(a - 1e-9 * (1.0 + a.abs())), hi.min(b + 1e-9 * (1.0 + b.abs())), qs.iter().sum::<f64>() / qs.len() as f64) }
                Law::Trunc { t: Some((xs, fs)), .. } => { let (a, c, g) = bracket(xs, fs, u, lo, hi); nsolve(self, u, a, c, g) }
                // Without a table: a guess from the quantile of F at the same level.
                Law::Trunc { b, z, up, alo, blo, .. } => nsolve(self, u, lo, hi, if *up { b.q(1.0 - (alo - u * z).max(1e-300)) } else { b.q((blo + u * z).min(1.0)) }), } }
        /// The mean, the variance, the order below which the moments exist (NaN: unknown), and the heavy sides (left, right).
        fn mom(&self) -> (Option<f64>, Option<f64>, f64, (bool, bool)) {
            match self {
                Law::Cat(id, p) => {
                    let ((m, v), o, s) = (cat::moments(id, p), cat::order(id, p), cat::support(id, p)); let b = if *id == "stable" { p[1].num().unwrap_or(0.0) } else { 0.0 };
                    (m, v, o, if cat::discrete(id) || !(o < INF) { (false, false) } else { (s.0 == -INF && b != 1.0, s.1 == INF && b != -1.0) }) }
                Law::Emp { x, p, .. } => { let (m, v) = mv(x, p); (m, v, INF, (false, false)) }
                Law::Kde { m, .. } => (Some(m.0), Some(m.1), INF, (false, false)),
                Law::Mix { w, c, .. } => {
                    let ms: Vec<_> = live(w, c).map(|(w, c)| (w, c.mom())).collect();
                    let o = if ms.iter().any(|m| m.1.2.is_nan()) { NAN } else { ms.iter().fold(INF, |a, m| a.min(m.1.2)) };
                    let s = ms.iter().fold((false, false), |a, m| (a.0 || m.1.3.0, a.1 || m.1.3.1)); let mean = ms.iter().try_fold(0.0, |a, (w, m)| Some(a + w * m.0?));
                    let second = mean.and(ms.iter().try_fold(0.0, |a, (w, m)| Some(a + w * (m.1? + m.0? * m.0?)))); (mean, second.zip(mean).map(|(s, m)| (s - m * m).max(0.0)), o, s) }
                Law::Trunc { .. } => self.tmom(),
                Law::Comp { b, freq, .. } => {
                    if *freq == 0.0 { return (Some(0.0), Some(0.0), INF, (false, false)) } let (m, v, o, s) = b.mom();
                    // E[S] = λE[Y] and Var S = λE[Y²]; E|S|^r is finite exactly when E|Y|^r is.
                    (m.map(|m| freq * m), m.zip(v).map(|(m, v)| freq * (v + m * m)), o, s) } } }
        /// The moments of a truncated law: a sum over a finite integer support, Simpson's rule on a bounded interval or
        /// on one bounded side (x = end ± c·u/(1 − u)), or the moments of F less the cut part.
        fn tmom(&self) -> (Option<f64>, Option<f64>, f64, (bool, bool)) {
            let Law::Trunc { b, lo, hi, .. } = self else { unreachable!() }; let ((bm, bv, bo, bs), (blo, bhi), (lo2, hi2)) = (b.mom(), b.sup(), self.sup());
            if *lo <= blo && *hi >= bhi { return (bm, bv, bo, bs) } let bounded = lo2 > -INF && hi2 < INF;
            let side = if bounded { (false, false) } else { (bs.0 && lo2 == -INF, bs.1 && hi2 == INF) };
            let o = if bounded { INF } else if side != (false, false) || bo.is_nan() { bo } else if bs != (false, false) { INF } else { bo }; let none = (false, false);
            if !self.cont() && bounded && hi2 - lo2 < 65536.0 {
                let (m1, m2) = (0..=(hi2 - lo2) as usize).map(|k| lo2 + k as f64).fold((0.0, 0.0), |(a, c), k| { let w = self.pdf(k); (a + w * k, c + w * k * k) });
                return (Some(m1), Some((m2 - m1 * m1).max(0.0)), INF, none); }
            if bounded && self.cont() { let (m, v) = simpson(&|x| self.sf(x), lo2, hi2, 2048); return (m, v, INF, none) }
            if self.cont() && o > 1.0 && (lo2 > -INF || hi2 < INF) {
                let (upw, n) = (lo2 > -INF, 4096); let end = if upw { lo2 } else { hi2 }; let c = (self.q(0.5) - end).abs().max(1e-12);
                let at = |u: f64| if u >= 1.0 { (0.0, 0.0) } else {
                    let t = c * u / (1.0 - u); ((if upw { self.sf(end + t) } else { self.cdf(end - t) }) * (c / ((1.0 - u) * (1.0 - u))), t) };
                let (mut a, mut b2) = (0.0, 0.0);
                for j in 0..n {
                    let ((g0, t0), (gm, tm), (g1, t1)) = (at(j as f64 / n as f64), at((j as f64 + 0.5) / n as f64), at((j + 1) as f64 / n as f64));
                    a += (g0 + 4.0 * gm + g1) / (6 * n) as f64; b2 += (2.0 * t0 * g0 + 8.0 * tm * gm + 2.0 * t1 * g1) / (6 * n) as f64; }
                return (Some(if upw { end + a } else { end - a }), (o > 2.0).then(|| (b2 - a * a).max(0.0)), o, side); }
            if let (false, true, Some(m), Some(v)) = (self.cont(), lo2 > -INF, bm, bv) {
                // E[X 1{X ≥ lower}] = E[X] − Σ_{k < lower} k p(k), and the same for X².
                let (mut m1, mut m2, mut cut, mut k) = (m, v + m * m, 0.0, blo);
                while k < lo2 && k - blo < 65536.0 { let w = b.mass(k); m1 -= w * k; m2 -= w * k * k; cut += w; k += 1.0 } let (mut u1, mut u2) = (0.0, 0.0);
                if *hi < INF {
                    let mut k = hi.floor() + 1.0; for _ in 0..65536 { if !(b.sf(k - 1.0) > 1e-16) { break } let w = b.mass(k); u1 += w * k; u2 += w * k * k; k += 1.0 } }
                let z = 1.0 - cut - if *hi < INF { b.sf(hi.floor()) } else { 0.0 }; let (mean, second) = ((m1 - u1) / z, (m2 - u2) / z);
                return (Some(mean), Some((second - mean * mean).max(0.0)), bo, bs); }
            (None, None, o, side) }
        /// One draw by a method, or the reason that the law has no sampler of that method.
        fn draw(&self, k: Kind, r: &mut Src) -> Result<f64, String> {
            match (self, k) {
                (_, Kind::Euler) => Err("The Euler scheme is a method for a diffusion, not for a law.".into()),
                (Law::Cat(id, p), _) => cat::draw(id, p, k, r)?.num().ok_or_else(|| "A vector law has no scalar draw.".into()),
                // Linear interpolation in the CDF table of 4,097 points.
                (Law::Kde { t, f, .. }, Kind::Inverse { cut }) => {
                    let q = |u: f64| { let j = search(f, u).max(1) - 1; let d = f[j + 1] - f[j]; t[j] + (t[j + 1] - t[j]) * if d > 0.0 { ((u - f[j]) / d).clamp(0.0, 1.0) } else { 0.0 } };
                    let x = q(r.u()); Ok(if cut < 1.0 { x.min(q(cut)) } else { x }) }
                (Law::Comp { t: Err(why), .. }, Kind::Inverse { .. }) => Err(why.clone()),
                (_, Kind::Inverse { cut }) => { let x = self.q(r.u()); Ok(if cut < 1.0 { x.min(self.q(cut)) } else { x }) }
                (Law::Emp { x, al, .. }, Kind::Reference) => Ok(x[pick(al, r)]),
                (Law::Emp { x, p, .. }, Kind::Rejection { scale }) => {
                    let (n, m) = (p.len() as f64, p.len() as f64 * p.iter().fold(0.0, |a: f64, &b| a.max(b)));
                    if 1.0 / m < 1e-3 { return Err(format!("The acceptance probability 1/M = {} is below 0.001.", sh(1.0 / m))) }
                    loop { let i = below(r, p.len()); if r.u() <= p[i] / (m * scale / n) { return Ok(x[i]) } } }
                (Law::Kde { x, h, al, .. }, Kind::Reference) => Ok(x[pick(al, r)] + h * r.normal()),
                (Law::Kde { .. }, _) => Err("The composition method draws the kernel mixture directly, with one data value and one normal draw, so the page has no rejection step for it.".into()),
                (Law::Mix { c, al, .. }, Kind::Reference) =>
                    c[pick(al, r)].as_ref().ok_or("A component has no reference sampler.")?.draw(k, r).map_err(|e| format!("A component has no reference sampler: {e}")),
                // Proposal: the equal-weight mixture of the same components, with M = k · max w_j.
                (Law::Mix { w, c, .. }, Kind::Rejection { scale }) => {
                    if c.iter().any(Option::is_none) { return Err("A component has no reference sampler.".into()) } let n = w.len();
                    let mf = n as f64 * w.iter().fold(0.0, |a: f64, &b| a.max(b)) * scale;
                    loop {
                        let x = c[below(r, n)].as_ref().unwrap().draw(Kind::Reference, r)?;
                        let (num, den) = c.iter().flatten().zip(w).fold((0.0, 0.0), |(a, b), (c, w)| { let d = c.pdf(x); (a + w * d, b + d / n as f64) });
                        if r.u() <= num / (mf * den) { return Ok(x) } } }
                // The reference sampler: draws of F kept in [lower, upper] when that keeps at least a quarter of them.
                (Law::Trunc { z, .. }, Kind::Reference) => self.draw(if *z >= 0.25 { Kind::Rejection { scale: 1.0 } } else { Kind::Inverse { cut: 1.0 } }, r),
                (Law::Trunc { b, lo, hi, z, .. }, Kind::Rejection { .. }) => {
                    if *z < 1e-3 { return Err(format!("The acceptance probability Z = P(lower ≤ X ≤ upper) = {} is below 0.001, so the method costs too much here.", show(*z, false))) }
                    loop { let x = b.draw(Kind::Reference, r)?; if x >= *lo && x <= *hi { return Ok(x) } } }
                (Law::Comp { b, freq, .. }, Kind::Reference) => { let mut s = 0.0; for _ in 0..r.poisson(*freq) as usize { s += b.draw(k, r)? } Ok(s) }
                (Law::Comp { .. }, _) => Err("The law of S has no closed form, so the page has no envelope for it.".into()), } } }

    /// Panjer's recursion for S: the masses g_k on the lattice 0, h, 2h, … to 4,096 points. A continuous term moves up to
    /// the next lattice point; the step h makes the table reach the mean of S plus 12 standard deviations.
    fn panjer(b: &Law, lam: f64) -> Result<(f64, Vec<f64>, Vec<f64>, f64), String> {
        let (int, n) = (!b.cont(), 4096); if b.sup().0 < 0.0 { return Err("The terms take negative values, so Panjer's recursion does not apply.".into()) }
        if lam * (1.0 - if int { b.mass(0.0) } else { 0.0 }) > 700.0 { return Err("freq × P(Y > 0) is above 700, so P(S = 0) is below the smallest double.".into()) }
        let h = if int { 1.0 } else {
            let top = match b.mom() { (Some(m), Some(v), ..) => lam * m + 12.0 * (lam * (v + m * m)).sqrt() + 1e-12, _ => b.q(1.0 - 1e-9) * (lam + 6.0 * lam.sqrt() + 6.0).max(1.0) };
            top / n as f64 };
        let f: Vec<f64> = (0..=n).map(|j| if int { b.mass(j as f64) } else { (b.cdf(j as f64 * h) - if j == 0 { 0.0 } else { b.cdf((j - 1) as f64 * h) }).max(0.0) }).collect();
        let mut g = vec![(-lam * (1.0 - f[0])).exp(); n + 1];
        for k in 1..=n { let mut a = 0.0; for j in 1..=k { if f[j] != 0.0 { a += j as f64 * f[j] * g[k - j] } } g[k] = lam / k as f64 * a } let mut s = 0.0;
        let cum: Vec<f64> = g.iter().map(|x| { s += x; s }).collect(); Ok((h, g, cum, (1.0 - s).max(0.0))) }

    /// The parameters of a law (name, vector?) and whether it is a vector law; None for an unknown id or a family that a
    /// constructor does not take (a vector law, or a law with a parameter of the constructor's own name).
    fn sig(id: &str) -> Option<(Vec<(String, bool)>, bool)> {
        if let Some(l) = cat::LAWS.iter().find(|l| l.0 == id) {
            let dim = matches!(id, "multinomial" | "mvnormal" | "dirichlet"); return Some((l.2.iter().map(|n| (n.to_string(), dim || id == "categorical")).collect(), dim)); }
        let own = |v: &[(&str, bool)]| Some((v.iter().map(|(n, b)| (n.to_string(), *b)).collect(), false));
        match id { "empirical" => return own(&[("x", true), ("w", true)]), "kde" => return own(&[("x", true), ("w", true), ("h", false)]), _ => {} }
        let (c, b) = id.split_once('_')?; let (ps, dim) = sig(b)?; let has = |n: &str| ps.iter().any(|p| p.0 == n);
        let (w, ends, freq, vector) = (has("w"), has("lower") || has("upper"), has("freq"), ps.iter().any(|p| p.1));
        match c {
            _ if dim => None,
            "mixture" if !w && !vector => Some((std::iter::once(("w".into(), true)).chain(ps.into_iter().map(|p| (p.0, true))).collect(), false)),
            "truncated" if !ends => Some((ps.into_iter().chain([("lower".into(), false), ("upper".into(), false)]).collect(), false)),
            "compound" if !freq => Some((std::iter::once(("freq".into(), false)).chain(ps).collect(), false)),
            _ => None, } }

    /// Check the arguments of a law, with the first JS message, and set up its tables.
    fn make(id: &str, p: &[V]) -> Result<Law, String> {
        if let Some(l) = cat::LAWS.iter().find(|l| l.0 == id) { return cat::check(id, p).map(|_| Law::Cat(l.0, p.to_vec())) }
        let ps = sig(id).ok_or(format!("\"{id}\" is not a law of the catalogue."))?.0;
        if p.len() != ps.len() { return Err(format!("The {} law takes {} arguments, not {}.", name(id), ps.len(), p.len())) }
        let sv = |v: &V| v.num().map_or("a vector".into(), |x| show(x, false));
        let ints = |l: &Law, b: &str| match l { Law::Emp { int: false, .. } => Err(format!("The values of the {} law are not all integers. A constructed law takes a law of finitely many values only when its values are integers.", name(b))), _ => Ok(()) };
        if id == "empirical" || id == "kde" {
            let x = p[0].list();
            let w = match &p[1] { V::L(w) => w.clone(), V::N(w) => vec![*w; x.len()] };
            if x.is_empty() || x.len() > 5000 { return Err("x holds 1 to 5000 values.".into()) }
            if x.iter().any(|v| !v.is_finite()) { return Err("Each value of x is a finite number.".into()) }
            if w.len() != x.len() { return Err(format!("w has {} entries, and x has {}. Give one weight for each value, or one number for all.", w.len(), x.len())) }
            if w.iter().any(|v| !(*v >= 0.0) || !v.is_finite()) { return Err("Each weight is a finite number ≥ 0.".into()) } let t: f64 = w.iter().sum();
            if !(t > 0.0) { return Err("The weights add to 0.".into()) }
            if id == "empirical" { let (x, p, c) = atoms(&x, &w); return Ok(Law::Emp { int: x.iter().all(|v| v.fract() == 0.0), al: alias(&p), x, p, c }) }
            let h = p[2].num().filter(|h| *h > 0.0 && h.is_finite()).ok_or_else(|| format!("h = {} is not a positive number.", sv(&p[2])))?;
            let w: Vec<f64> = w.iter().map(|v| v / t).collect(); let (a, b) = (x.iter().fold(INF, |a, &v| a.min(v)) - 9.0 * h, x.iter().fold(-INF, |a, &v| a.max(v)) + 9.0 * h);
            let xs: Vec<f64> = (0..=4096).map(|j| a + (b - a) * j as f64 / 4096.0).collect(); let fs = xs.iter().map(|&v| kc(&x, &w, h, v, false)).collect();
            let m: f64 = x.iter().zip(&w).map(|(v, w)| w * v).sum(); let s2: f64 = x.iter().zip(&w).map(|(v, w)| w * (v - m).powi(2)).sum();
            return Ok(Law::Kde { al: alias(&w), x, w, h, t: xs, f: fs, m: (m, s2 + h * h) }); }
        let (c, b) = id.split_once('_').unwrap(); let n = p.len();
        match c {
            "mixture" => {
                let w = match &p[0] { V::L(w) if !w.is_empty() && w.len() <= 20 => w.clone(), _ => return Err("w is a vector of 1 to 20 weights, such as [0.7, 0.3].".into()) };
                if w.iter().any(|x| !(*x >= 0.0)) { return Err("Each weight w_j is 0 or more.".into()) } let s: f64 = w.iter().sum();
                if (s - 1.0).abs() > 1e-9 { return Err(format!("The weights add to {}, not 1. Use normalize() to scale weights.", show(s, false))) }
                for (i, v) in p[1..].iter().enumerate() { if let V::L(v) = v { if v.len() != w.len() { return Err(format!("{} has {} entries, and w has {}.", ps[i + 1].0, v.len(), w.len())) } } }
                let mut cs = vec![];
                for j in 0..w.len() {
                    let q: Vec<V> = p[1..].iter().map(|v| if let V::L(v) = v { V::N(v[j]) } else { v.clone() }).collect(); let l = make(b, &q);
                    if let (true, Err(e)) = (w[j] > 0.0, &l) { return Err(format!("Component {}: {e}", j + 1)) } cs.push(l.ok()); }
                Ok(Law::Mix { al: alias(&w), k: !discrete(b), w, c: cs }) }
            "truncated" => {
                let bl = make(b, &p[..n - 2])?; ints(&bl, b)?;
                let (lo, hi) = match (p[n - 2].num(), p[n - 1].num()) { (Some(a), Some(c)) if a <= c => (a, c), _ => return Err(format!("lower = {} and upper = {} are not numbers with lower ≤ upper.", sv(&p[n - 2]), sv(&p[n - 1]))) };
                // An infinite end cuts nothing.
                let (alo, ahi) = (if lo == -INF { 1.0 } else { bl.sf(lo) + bl.mass(lo) }, if hi == INF { 0.0 } else { bl.sf(hi) });
                let (blo, bhi) = (if lo == -INF { 0.0 } else { bl.cdf(lo) - bl.mass(lo) }, if hi == INF { 1.0 } else { bl.cdf(hi) }); let up = blo > 0.5;
                let z = if up { alo - ahi } else { bhi - blo };
                if !(z > 1e-300) { return Err(format!("P({} ≤ X ≤ {}) = {} under the {} law, so there is nothing to keep.", show(lo, false), show(hi, false), show(z, false), name(b))) }
                let mut l = Law::Trunc { b: Box::new(bl), lo, hi, z, up, alo, ahi, blo, t: None }; let t = match &l {
                    Law::Trunc { b, .. } if l.cont() => {
                        let (s0, s1) = l.sup(); let a = if s0.is_finite() { s0 } else { b.q((blo + 1e-9 * z).min(1.0)) };
                        let e = if s1.is_finite() { s1 } else { b.q(1.0 - (ahi + 1e-9 * z).max(1e-300)) };
                        (a.is_finite() && e.is_finite() && e > a).then(|| { let xs: Vec<f64> = (0..=1024).map(|j| a + (e - a) * j as f64 / 1024.0).collect(); let fs = xs.iter().map(|&x| l.cdf(x)).collect(); (xs, fs) })
                    }
                    _ => None, };
                if let Law::Trunc { t: s, .. } = &mut l { *s = t } Ok(l) }
            _ => {
                let f = p[0].num().filter(|f| (0.0..=1000.0).contains(f)).ok_or_else(|| format!("freq = {} is outside [0, 1000].", sv(&p[0])))?; let bl = make(b, &p[1..])?;
                ints(&bl, b)?;
                if bl.sup().0 < 0.0 { return Err(format!("The terms of a compound Poisson law here take values in [0, ∞), and the {} law takes negative values.", name(b))) }
                Ok(Law::Comp { t: panjer(&bl, f), b: Box::new(bl), freq: f }) } } }

    thread_local! { static MEMO: RefCell<HashMap<String, Rc<Result<Law, String>>>> = RefCell::new(HashMap::new()) }
    /// The law of an id and its arguments, set up once and kept, at most 64 at a time.
    fn get(id: &str, p: &[V]) -> Rc<Result<Law, String>> {
        let key = format!("{id}{p:?}"); if let Some(l) = MEMO.with(|m| m.borrow().get(&key).cloned()) { return l } let l = Rc::new(make(id, p));
        MEMO.with(|m| { let mut m = m.borrow_mut(); if m.len() >= 64 { m.clear() } m.insert(key, l.clone()) }); l }
    fn with<T>(id: &str, p: &[V], d: T, f: impl FnOnce(&Law) -> T) -> T { match &*get(id, p) { Ok(l) => f(l), Err(_) => d } }

    /// The parameters of a constructed law id, in order, with the default expression text or None; None when the id is
    /// not a constructed law (for example "poisson" or "foo").
    pub fn params(id: &str) -> Option<Vec<(String, Option<String>)>> {
        if cat::LAWS.iter().any(|l| l.0 == id) { return None } sig(id).map(|s| s.0.into_iter().map(|p| (p.0, None)).collect()) }
    pub fn name(id: &str) -> String {
        // The first letter in lower case, unless the second letter is a capital too.
        let lc = |s: String| { let b = s.as_bytes(); if b[0].is_ascii_uppercase() && !b.get(1).is_some_and(u8::is_ascii_uppercase) { s[..1].to_lowercase() + &s[1..] } else { s } };
        if let Some(l) = cat::LAWS.iter().find(|l| l.0 == id) { return l.1.into() }
        match (id, id.split_once('_')) {
            ("empirical", _) => "Empirical".into(),
            ("kde", _) => "Kernel density".into(),
            (_, Some(("mixture", b))) => format!("Mixture of {} laws", name(b)),
            (_, Some(("truncated", b))) => format!("Truncated {} law", lc(name(b))),
            (_, Some(("compound", b))) => format!("Compound Poisson law with {} terms", lc(name(b))),
            _ => id.into(), } }
    pub fn discrete(id: &str) -> bool {
        if cat::LAWS.iter().any(|l| l.0 == id) { return cat::discrete(id) } id == "empirical" || id != "kde" && id.split_once('_').is_some_and(|(_, b)| discrete(b)) }
    pub fn check(id: &str, p: &[V]) -> Result<(), String> { get(id, p).as_ref().as_ref().map(|_| ()).map_err(Clone::clone) }
    pub fn draw(id: &str, p: &[V], k: Kind, r: &mut Src) -> Result<V, String> { match &*get(id, p) { Ok(l) => l.draw(k, r).map(V::N), Err(e) => Err(e.clone()) } }
    pub fn quantile(id: &str, p: &[V], u: f64) -> f64 { with(id, p, NAN, |l| l.q(u)) }
    pub fn cdf(id: &str, p: &[V], x: f64) -> f64 { with(id, p, NAN, |l| l.cdf(x)) }
    pub fn sf(id: &str, p: &[V], x: f64) -> f64 { with(id, p, NAN, |l| l.sf(x)) }
    /// The PMF of a discrete law, the PDF of a continuous one.
    pub fn pdf(id: &str, p: &[V], x: f64) -> f64 { with(id, p, NAN, |l| l.pdf(x)) }
    pub fn support(id: &str, p: &[V]) -> (f64, f64) { with(id, p, (NAN, NAN), Law::sup) }
    pub fn moments(id: &str, p: &[V]) -> (Option<f64>, Option<f64>) { with(id, p, (None, None), |l| { let m = l.mom(); (m.0, m.1) }) }
    pub fn order(id: &str, p: &[V]) -> f64 { with(id, p, NAN, |l| l.mom().2) }

    /* ---------- the custom law lines ---------- */

    /// A law line as the model parser gives it: the strings of the line.
    #[derive(Clone, Debug)]
    pub struct LawLine { pub name: String, pub params: Vec<String>, pub kind: String, pub arg: String, pub expr: String,
        pub on: Option<(String, String)>, pub cond: Option<String>, pub obs: Option<String>, pub probs: Option<String>, pub grid: Option<usize> }

    const KINDS: [(&str, &str); 9] = [("pdf", "PDF"), ("logpdf", "log-PDF"), ("density", "unnormalised density"), ("pmf", "PMF"), ("table", "finite table"),
        ("cdf", "CDF"), ("quantile", "quantile function"), ("mgf", "MGF"), ("cf", "characteristic function")];
    /// A letter, then letters, digits or _, at most 24 characters, and not a function, a constant, a clause or a keyword.
    fn word(n: &str) -> bool {
        let b = n.as_bytes(); !b.is_empty() && b.len() <= 24 && b[0].is_ascii_alphabetic() && b.iter().all(|c| c.is_ascii_alphanumeric() || *c == b'_')
            && !FUNCTIONS.iter().any(|f| f.0 == n) && !CONSTANTS.iter().any(|c| c.0 == n) && !["on", "where", "obs", "grid", "probs", "and", "or", "not", "P", "E"].contains(&n) }
    fn cut(s: &str, n: usize) -> String { s.chars().take(n).collect() }

    /// Complex arithmetic for the transforms.
    fn cmul(a: C, b: C) -> C { (a.0 * b.0 - a.1 * b.1, a.0 * b.1 + a.1 * b.0) }
    fn cdiv(a: C, b: C) -> C { let d = b.0 * b.0 + b.1 * b.1; ((a.0 * b.0 + a.1 * b.1) / d, (a.1 * b.0 - a.0 * b.1) / d) }
    fn cexp(a: C) -> C { let r = a.0.exp(); (r * a.1.cos(), r * a.1.sin()) }
    /// a^b: repeated products for an integer b with |b| ≤ 64, so no branch cut enters; the principal branch otherwise.
    fn cpow(a: C, b: C) -> C {
        if b.1 == 0.0 && isint(b.0) && b.0.abs() <= 64.0 {
            let (mut r, mut x, mut n) = ((1.0, 0.0), a, b.0.abs() as u32); while n > 0 { if n & 1 == 1 { r = cmul(r, x) } x = cmul(x, x); n >>= 1 }
            return if b.0 < 0.0 { cdiv((1.0, 0.0), r) } else { r }; }
        if a == (0.0, 0.0) { return if b.0 > 0.0 { (0.0, 0.0) } else { (NAN, NAN) } } cexp(cmul(b, (a.0.hypot(a.1).ln(), a.1.atan2(a.0)))) }
    /// The complex value of a transform tree (custom.js ccompile): + − × ÷ ^, exp, log, sqrt, pow, sin, cos and abs (the
    /// modulus) on complex values, the other functions of one argument on real values only. With `dry`, the form only.
    fn cev(e: &Ex, env: &[C], dry: bool) -> Result<C, String> {
        Ok(match e {
            Ex::Num(x) => (*x, 0.0),
            Ex::Slot(i) => env[*i],
            Ex::Un('!', _) => return Err("A transform uses no logical operator.".into()),
            Ex::Un(o, a) => { let v = cev(a, env, dry)?; if *o == '-' { (-v.0, -v.1) } else { v } }
            Ex::Bin(o, a, b) => {
                let (x, y) = (cev(a, env, dry)?, cev(b, env, dry)?);
                match *o { "+" => (x.0 + y.0, x.1 + y.1), "-" => (x.0 - y.0, x.1 - y.1), "*" => cmul(x, y), "/" => cdiv(x, y), "^" => cpow(x, y),
                    _ => return Err(format!("A transform uses no comparison or logical operator (\"{o}\").")) } }
            Ex::Call(f, v) => {
                let a = v.iter().map(|x| cev(x, env, dry)).collect::<Result<Vec<C>, String>>()?; let z = a[0];
                match *f {
                    "exp" => cexp(z), "log" => (z.0.hypot(z.1).ln(), z.1.atan2(z.0)), "sqrt" => cpow(z, (0.5, 0.0)), "pow" => cpow(z, a[1]),
                    "sin" => (z.0.sin() * z.1.cosh(), z.0.cos() * z.1.sinh()), "cos" => (z.0.cos() * z.1.cosh(), -z.0.sin() * z.1.sinh()), "abs" => (z.0.hypot(z.1), 0.0),
                    "log1p" | "floor" | "ceil" | "round" | "tan" | "atan" if z.1 == 0.0 || dry => (eval(&Ex::Call(f, vec![Ex::Num(z.0)]), &[])?.num().unwrap_or(NAN), 0.0),
                    "log1p" | "floor" | "ceil" | "round" | "tan" | "atan" => return Err(format!("{f}() takes a real argument in a transform.")),
                    _ => return Err(format!("{f}() is not available in a transform: use exp, log, sqrt, pow, sin, cos, abs and + − * / ^.")), } }
            _ => return Err("A transform is a scalar expression: it uses no vector or index.".into()), }) }

    /// The trees of a law line (the input, its complex form, values, probabilities, lo, hi, constraint, observations) and
    /// its grid, or the first message of the JS compile(). The argument is slot 0 and the parameters are slots 1, 2, ….
    fn compile(l: &LawLine) -> Result<(Vec<Option<Ex>>, usize), String> {
        let at = format!("Law {}", cut(&l.name, 24));
        let taken = cat::LAWS.iter().any(|c| c.0 == l.name) || ["mixture", "compound", "empirical", "kde", "truncated"].contains(&l.name.as_str())
            || ["mixture_", "truncated_", "compound_"].iter().any(|s| l.name.starts_with(s));
        if !word(&l.name) { return Err(format!("{at}: \"{}\" is not a law name (a letter, then letters, digits or _, at most 24 characters, not a reserved word).", cut(&l.name, 30))) }
        if taken { return Err(format!("{at}: \"{}\" is the name of a law of the catalogue. Choose another name.", l.name)) }
        let Some(&(_, kn)) = KINDS.iter().find(|k| k.0 == l.kind) else { return Err(format!("{at}: \"{}\" is not an input kind (pdf, logpdf, density, pmf, table, cdf, quantile, mgf, cf).", cut(&l.kind, 20))) };
        if l.params.len() > 8 { return Err(format!("{at}: a law has at most 8 parameters.")) }
        for n in l.params.iter().chain([&l.arg]) {
            if !word(n) { return Err(format!("{at}: \"{}\" is not a parameter name.", cut(n, 30))) }
            if l.kind == "cf" && n == "i" { return Err(format!("{at}: in a characteristic function, i is the imaginary unit, so it is not a parameter name.")) } }
        let mut all: Vec<&String> = l.params.iter().chain([&l.arg]).collect(); all.sort(); all.dedup();
        if all.len() != l.params.len() + 1 { return Err(format!("{at}: the parameters and the argument need different names.")) }
        let ps = |n: &str| l.params.iter().position(|q| q == n).map(|i| i + 1); let xs = |n: &str| if n == l.arg { Some(0) } else { ps(n) };
        let real = |s: Option<&String>, what: &str, sl: &dyn Fn(&str) -> Option<usize>| match s {
            Some(s) if !s.trim().is_empty() => build(s, sl).map(|b| Some(b.0)).map_err(|e| format!("{at}, {what}: {}", e.replacen("is not defined before this expression", "is not a parameter of the law", 1))),
            _ => Ok(None), };
        let mut t = vec![None; 8];
        if l.kind == "cf" || l.kind == "mgf" {
            let n = l.params.len(); let mut e = parse(&l.expr).map_err(|e| format!("{at}, {kn}: {e}"))?;
            resolve(&mut e, &|v| if l.kind == "cf" && v == "i" { Some(n + 1) } else { xs(v) })
                .map_err(|e| format!("{at}, {kn}: {}", e.replacen("is not defined before this expression", "is not a parameter of the law or its argument", 1)))?;
            cev(&e, &vec![(0.0, 0.0); n + 2], true).map_err(|e| format!("{at}, {kn}: {e}"))?; t[1] = Some(e); if l.kind == "mgf" { t[0] = real(Some(&l.expr), "MGF", &xs)? }
        } else if l.kind == "table" {
            (t[2], t[3]) = (real(Some(&l.expr), "values", &ps)?, real(l.probs.as_ref(), "probabilities", &ps)?);
            if l.probs.is_none() { return Err(format!("{at}: a finite table states its probabilities: table(x) = [values] probs [probabilities].")) }
        } else { t[0] = real(Some(&l.expr), kn, &xs)? }
        if l.probs.is_some() && l.kind != "table" { return Err(format!("{at}: only a finite table takes probs.")) }
        if let Some((a, b)) = &l.on { (t[4], t[5]) = (real(Some(a), "least value of the support", &ps)?, real(Some(b), "greatest value of the support", &ps)?) }
        if l.kind == "pmf" && l.on.is_none() { return Err(format!("{at}: a PMF states its support of integers: on [lo, hi], with hi = inf for no upper bound.")) }
        (t[6], t[7]) = (real(l.cond.as_ref(), "constraint", &ps)?, real(l.obs.as_ref(), "observations", &ps)?); let grid = l.grid.unwrap_or(4096);
        if !(256..=65536).contains(&grid) || grid % 2 == 1 { return Err(format!("{at}: grid {grid} is not an even integer in [256, 65536].")) } Ok((t, grid)) }
    /// The checks of a law line that do not need parameter values (the JS `compile`), with the JS messages.
    pub fn line_check(l: &LawLine) -> Result<(), String> { compile(l).map(|_| ()) }

    /// The value of a tree at the argument x.
    fn at(e: &Ex, env: &[V], x: f64) -> Result<V, String> { let mut v = env.to_vec(); v[0] = V::N(x); eval(e, &v) }
    /// A monotone map of u in [0, 1] onto the support (lo, hi, centre, scale): linear on [lo, hi], else lo + s·u/(1 − u),
    /// hi − s·(1 − u)/u, or c + s·(2u − 1)/(u(1 − u)) on the real line.
    #[derive(Clone, Copy, Debug)]
    struct Map(f64, f64, f64, f64);
    impl Map {
        fn x(&self, u: f64) -> f64 {
            let Map(lo, hi, c, s) = *self;
            match (lo.is_finite(), hi.is_finite()) {
                (true, true) => lo + (hi - lo) * u,
                (true, _) => if u >= 1.0 { INF } else { lo + s * u / (1.0 - u) },
                (_, true) => if u <= 0.0 { -INF } else { hi - s * (1.0 - u) / u },
                _ => if u <= 0.0 { -INF } else if u >= 1.0 { INF } else { c + s * (2.0 * u - 1.0) / (u * (1.0 - u)) }, } }
        fn dx(&self, u: f64) -> f64 {
            let Map(lo, hi, _, s) = *self;
            match (lo.is_finite(), hi.is_finite()) { (true, true) => hi - lo, (true, _) => s / ((1.0 - u) * (1.0 - u)), (_, true) => s / (u * u), _ => s * (2.0 * u * u - 2.0 * u + 1.0) / (u * (1.0 - u)).powi(2) }
        }
        fn u(&self, x: f64) -> f64 {
            let Map(lo, hi, c, s) = *self;
            match (lo.is_finite(), hi.is_finite()) {
                (true, true) => (x - lo) / (hi - lo),
                (true, _) => { let t = (x - lo) / s; if t == INF { 1.0 } else { t / (1.0 + t) } }
                (_, true) => { let t = (hi - x) / s; if t == INF { 0.0 } else { 1.0 / (1.0 + t) } }
                _ => { let y = (x - c) / s; if y.is_infinite() { (y > 0.0) as u8 as f64 } else if y >= 0.0 { 2.0 / (2.0 + 4.0 / ((4.0 + y * y).sqrt() + y)) } else { 2.0 / (2.0 - y + (4.0 + y * y).sqrt()) } }
            } } }
    /// The CDF of a table c under a map at x, before the division by c's last entry: linear in u inside a cell.
    fn tc(c: &[f64], m: Map, x: f64) -> f64 {
        let n = c.len() - 1; if x <= m.0 { return 0.0 } if x >= m.1 { return c[n] } let v = m.u(x).clamp(0.0, 1.0) * n as f64; let j = (v.floor() as usize).min(n - 1);
        c[j] + (v - j as f64) * (c[j + 1] - c[j]) }
    /// The quantile u of a table c under a map.
    fn tq(c: &[f64], m: Map, u: f64) -> f64 {
        let (n, t) = (c.len() - 1, u * c[c.len() - 1]); let j = search(c, t).max(1) - 1; let i = c[j + 1] - c[j];
        m.x((j as f64 + if i > 0.0 { ((t - c[j]) / i).clamp(0.0, 1.0) } else { 0.0 }) / n as f64) }
    /// Simpson's rule for a density under a map in n cells of u: the cumulative integrals, the integral on n/2 cells, the
    /// largest density, the integrals of x f and x² f, and the first value that is not a finite number ≥ 0. `f` gives
    /// the input value, and `lg` takes its exponential (a log-PDF).
    fn tabulate(f: &dyn Fn(f64) -> Result<f64, String>, m: Map, n: usize, lg: bool) -> Result<(Vec<f64>, f64, f64, f64, f64, String), String> {
        let (du, mut bad, mut fmax) = (1.0 / n as f64, String::new(), 0.0f64);
        let mut at = |u: f64, end: bool| -> Result<f64, String> {
            let x = m.x(u); if !x.is_finite() { return Ok(0.0) } let r = f(x)?; let v = if lg { r.exp() } else { r };
            if !v.is_finite() {
                if !end && bad.is_empty() { bad = format!("{}({}) is {}: the input is not a finite number there.", if lg { "The log-PDF" } else { "f" }, sh(x), if v.is_nan() { "not a number".into() } else { sh(r) }) }
                return Ok(0.0); }
            if v < 0.0 { if bad.is_empty() { bad = format!("f({}) = {} < 0.", sh(x), sh(v)) } return Ok(0.0) } fmax = fmax.max(v); Ok(v * m.dx(u)) };
        let h = (0..=n).map(|j| at(j as f64 * du, j == 0 || j == n)).collect::<Result<Vec<f64>, String>>()?;
        let md = (0..n).map(|j| at((j as f64 + 0.5) * du, false)).collect::<Result<Vec<f64>, String>>()?; let (mut c, mut zh, mut m1, mut m2) = (vec![0.0; n + 1], 0.0, 0.0, 0.0);
        for j in 0..n { c[j + 1] = c[j] + du / 6.0 * (h[j] + 4.0 * md[j] + h[j + 1]) } for k in 0..n / 2 { zh += 2.0 * du / 6.0 * (h[2 * k] + 4.0 * h[2 * k + 1] + h[2 * k + 2]) }
        let g = |x: f64, v: f64, p: i32| if x.is_finite() { x.powi(p) * v } else { 0.0 };
        for j in 0..n {
            let (x0, xm, x1) = (m.x(j as f64 * du), m.x((j as f64 + 0.5) * du), m.x((j + 1) as f64 * du));
            m1 += du / 6.0 * (g(x0, h[j], 1) + 4.0 * g(xm, md[j], 1) + g(x1, h[j + 1], 1)); m2 += du / 6.0 * (g(x0, h[j], 2) + 4.0 * g(xm, md[j], 2) + g(x1, h[j + 1], 2)); }
        Ok((c, zh, fmax, m1, m2, bad)) }
    /// The least x with F(x) ≥ u for an F that does not decrease, by bisection to a relative width of 10^-12; an infinite end is
    /// first replaced by steps from `start` that double.
    fn bisect(f: &dyn Fn(f64) -> f64, u: f64, lo: f64, hi: f64, start: f64, sc: f64) -> f64 {
        let (mut a, mut b) = (lo, hi);
        if !a.is_finite() { let mut st = sc; a = start.min(if b.is_finite() { b - sc } else { start }) - st; while f(a) >= u && st < 1e300 { st *= 2.0; a -= st } }
        if !b.is_finite() { let mut st = sc; b = start.max(a + sc) + st; while f(b) < u && st < 1e300 { st *= 2.0; b += st } }
        for _ in 0..200 {
            if !(b - a > 1e-12 * a.abs().max(b.abs()).max(1.0)) { break } let m = a + (b - a) / 2.0; if f(m) >= u { b = m } else { a = m } }
        b }

    /// A custom law tabulated for one parameter value. A density or a transform keeps a CDF table c under the map m; a
    /// PMF or a table keeps its values x, masses p and cumulative sums c; a CDF or a quantile input keeps its tree.
    pub struct Custom {
        k: String, f: Option<Ex>, env: Vec<V>, lo: f64, hi: f64, m: Map, c: Vec<f64>, x: Vec<f64>, p: Vec<f64>,
        /// The scale and the start of the bisection of a CDF input.
        s: (f64, f64),
        mom: (Option<f64>, Option<f64>), lab: String,
        /// The envelope constant M of the rejection sampler, or the reason that there is none.
        rej: Result<f64, String>, al: Al, }

    /// A custom law tabulated for the parameter values p (in the order of l.params), with every JS check of the input and
    /// its message: the first failed check as "Label: text", or the reason that the law has no table.
    pub fn custom(l: &LawLine, p: &[f64]) -> Result<Custom, String> {
        let (t, n) = compile(l)?; if p.len() != l.params.len() { return Err(format!("Law {} takes {} parameters, not {}.", l.name, l.params.len(), p.len())) }
        if let Some(i) = p.iter().position(|v| v.is_nan()) { return Err(format!("Parameter {} = not a number is not a number.", l.params[i])) }
        let env: Vec<V> = std::iter::once(V::N(0.0)).chain(p.iter().map(|&v| V::N(v))).collect();
        if let Some(w) = &t[6] {
            if eval(w, &env).map_err(|e| format!("The constraint cannot be evaluated: {e}"))? == V::N(0.0) {
                let vs: Vec<String> = l.params.iter().zip(p).map(|(n, v)| format!("{n} = {}", sh(*v))).collect();
                return Err(format!("Parameter constraints: {} does not hold for {}.", l.cond.as_deref().unwrap_or(""), vs.join(", "))); } }
        let end = |e: &Option<Ex>, d: f64| match e { None => Ok(d), Some(e) => match eval(e, &env)? { V::N(v) if !v.is_nan() => Ok(v), _ => Err("an end of the support is not a number".to_string()) } };
        let (mut lo, mut hi) = match (end(&t[4], -INF), end(&t[5], INF)) { (Ok(a), Ok(b)) => (a, b), (Err(e), _) | (_, Err(e)) => return Err(format!("The support cannot be evaluated: {e}")) };
        let obs = match &t[7] { Some(o) => Some(eval(o, &env).map_err(|e| format!("The observations cannot be evaluated: {e}"))?.list()), None => None };
        if obs.as_ref().is_some_and(|o| o.len() > 5000) { return Err("A law takes at most 5000 observations.".into()) }
        let observe = |inside: &dyn Fn(f64) -> bool, st: &str| match obs.iter().flatten().find(|&&x| !inside(x)) {
            Some(x) => Err(format!("Observations: The observation {} lies outside the support {st}: the law cannot give it.", sh(*x))),
            None => Ok(()), };
        let k = l.kind.as_str(); let kn = KINDS.iter().find(|q| q.0 == k).unwrap().1; let e = t[0].as_ref();
        // The input value at x; a vector is an error.
        let fv = |x: f64, what: &str| match at(e.unwrap(), &env, x)? { V::N(v) => Ok(v), _ => Err(format!("{what} gives a vector at x = {}", sh(x))) };
        let bounded = lo.is_finite() && hi.is_finite();
        let d = Custom { k: l.kind.clone(), f: t[0].clone(), env: env.clone(), lo, hi, m: Map(0.0, 1.0, 0.0, 1.0), c: vec![], x: vec![], p: vec![], s: (1.0, 0.0),
            mom: (None, None), lab: String::new(), rej: Err(String::new()), al: (vec![], vec![]) };
        let (dens, tab) = ("Inverse transform with the tabulated CDF", "approximate: numerical inversion of a tabulated CDF");
        match k {
            "pdf" | "logpdf" | "density" => {
                if !(lo < hi) { return Err(format!("Boundaries: The support needs lo < hi, not lo = {} and hi = {}.", sh(lo), sh(hi))) }
                let (lg, f) = (k == "logpdf", |x: f64| fv(x, &format!("the {kn}")));
                let safe = |x: f64| f(x).map_or(0.0, |r| { let v = if lg { r.exp() } else { r }; if v.is_finite() && v > 0.0 { v } else { 0.0 } });
                // A first centre and scale: where f(x)·r is largest, r the distance from the end or from the largest density.
                let (mut c, mut s) = (if lo.is_finite() { lo } else if hi.is_finite() { hi } else { 0.0 }, 1.0);
                if !bounded {
                    if !lo.is_finite() && !hi.is_finite() {
                        let (mut best, mut q) = (0.0, -6.0);
                        while q <= 12.0 { for x in [10f64.powf(q), -10f64.powf(q)] { let v = safe(x); if v > best { (best, c) = (v, x) } } q += 0.25 } if safe(0.0) >= best { c = 0.0 }
                    }
                    let (mut best, mut q) = (0.0, -8.0);
                    while q <= 12.0 {
                        let r = 10f64.powf(q); let v = if lo.is_finite() { safe(lo + r) * r } else if hi.is_finite() { safe(hi - r) * r } else { safe(c + r).max(safe(c - r)) * r };
                        if v > best { (best, s) = (v, r) } q += 0.25; } }
                // At most 5 passes: the centre and scale of the map from the quartiles of the last table.
                let mut res = None;
                for _ in 0..5 {
                    let mp = Map(lo, hi, c, s); let tb = tabulate(&f, mp, n, lg)?; let z = tb.0[n]; let stop = !tb.5.is_empty() || !(z > 0.0) || !z.is_finite() || bounded;
                    let (q25, q50, q75) = (tq(&tb.0, mp, 0.25), tq(&tb.0, mp, 0.5), tq(&tb.0, mp, 0.75));
                    let s2 = if lo.is_finite() { q50 - lo } else if hi.is_finite() { hi - q50 } else { (q75 - q25) / 5.33 };
                    let c2 = if lo.is_finite() || hi.is_finite() { c } else { q50 }; res = Some((mp, tb)); if stop || !(s2 > 0.0) || !s2.is_finite() { break }
                    let changed = (s2 / s).ln().abs() > 2f64.ln() || (c2 - c).abs() > s2; (c, s) = (c2, s2); if !changed { break } }
                let (mp, (cc, zh, fmax, m1, m2, bad)) = res.unwrap(); if !bad.is_empty() { return Err(format!("Non-negativity: {bad}")) } let z = cc[n];
                let settled = z.is_finite() && z > 0.0 && (z - zh).abs() <= 1e-6 * z;
                if k != "density" && settled && (z - 1.0).abs() > 1e-6 {
                    return Err(format!("Normalisation: ∫f = {}, not 1. Simpson's rule on {} cells gives {}, so the difference is not a quadrature error. Use density(x) for an unnormalised input.", sh(z), count(n / 2), sh(zh)));
                }
                observe(&|x| x >= lo && x <= hi, &interval(lo, hi))?; if !settled { return Err("the normalising integral did not settle, so the page has no table of the law".into()) }
                let mm = (m1 / z, m2 / z); let m = 1.1 * (fmax / z) * (hi - lo);
                let rej = if !bounded { Err("The support is not bounded, so the uniform proposal does not exist.".into()) } else if !(fmax > 0.0 && fmax.is_finite()) { Err("The density has no finite largest value on the grid.".into()) }
                    else if 1.0 / m < 1e-3 { Err(format!("The acceptance probability 1/M = {} is below 0.001.", sh(1.0 / m))) } else { Ok(m) };
                Ok(Custom { m: mp, c: cc, mom: if bounded { (Some(mm.0), Some((mm.1 - mm.0 * mm.0).max(0.0))) } else { (None, None) }, rej,
                    lab: format!("{dens}: {} cells, linear inside a cell ({tab})", count(n)), ..d }) }
            "pmf" => {
                if !isint(lo) || !(isint(hi) || hi == INF) || lo > hi { return Err(format!("Boundaries: A PMF needs integer ends lo ≤ hi (hi may be inf), not {} and {}.", sh(lo), sh(hi))) }
                if hi.is_finite() && hi - lo + 1.0 > 65536.0 { return Err(format!("Boundaries: The support has {} points. The page tabulates at most 65,536.", count((hi - lo + 1.0) as usize))) }
                // The terms one by one: up to 65,536, or to the first k where the sum is within 10^-12 of 1.
                let (mut ps, mut sum, mut kk) = (vec![], 0.0, lo);
                while kk <= hi && ps.len() < 65536 {
                    let v = match at(e.unwrap(), &env, kk)? { V::N(v) if v.is_finite() => v, V::N(v) => return Err(format!("Non-negativity: p({kk}) is {}, not a finite number.", sh(v))),
                        _ => return Err(format!("Non-negativity: p({kk}) is a vector, not a finite number.")) };
                    if v < 0.0 { return Err(format!("Non-negativity: p({kk}) = {} < 0.", sh(v))) } (sum, kk) = (sum + v, kk + 1.0); ps.push(v);
                    if (hi == INF && sum >= 1.0 - 1e-12) || sum > 1.0 + 1e-9 { break } }
                let last = lo + ps.len() as f64 - 1.0; let complete = last >= hi;
                if sum > 1.0 + 1e-9 || (complete && (sum - 1.0).abs() > 1e-9) { return Err(format!("Normalisation: The sum of p(k) for k = {lo} to {last} is {}, not 1.", sh(sum))) }
                let st = if hi.is_finite() { format!("{{{lo}, …, {hi}}}") } else { format!("{{{lo}, {}, …}}", lo + 1.0) }; observe(&|x| isint(x) && x >= lo && x <= hi, &st)?;
                let mut s = 0.0; let c: Vec<f64> = ps.iter().map(|v| { s += v; s }).collect(); let x: Vec<f64> = (0..ps.len()).map(|i| lo + i as f64).collect();
                let q: Vec<f64> = ps.iter().map(|v| v / s).collect(); let m = ps.len() as f64 * q.iter().fold(0.0, |a: f64, &b| a.max(b));
                let cut = if complete { String::new() } else { format!(", renormalised over k = {lo} to {last}; the mass after {last}, {} if the PMF adds to 1, is not sampled", sh((1.0 - sum).max(0.0))) };
                let rej = if !complete { Err("The support is infinite, so the uniform proposal does not exist.".into()) } else if 1.0 / m < 1e-3 { Err(format!("The acceptance probability 1/M = {} is below 0.001.", sh(1.0 / m))) } else { Ok(m) };
                Ok(Custom { mom: if complete { mv(&x, &q) } else { (None, None) }, al: alias(&q), x, p: ps, c, rej,
                    lab: format!("Alias method over the {} tabulated values{cut} ({})", count(q.len()), if complete { "exact" } else { "approximate: the table stops before the end of the support" }), ..d })
            }
            "table" => {
                let (xs, ps) = (eval(t[2].as_ref().unwrap(), &env)?.list(), eval(t[3].as_ref().unwrap(), &env)?.list());
                if xs.len() != ps.len() { return Err(format!("Boundaries: The table has {} values and {} probabilities.", xs.len(), ps.len())) }
                if xs.len() > 10000 { return Err("Boundaries: A table has at most 10,000 values.".into()) }
                if let Some(v) = xs.iter().find(|v| !v.is_finite()) { return Err(format!("Boundaries: The value {} is not a finite number.", sh(*v))) } let mut sorted = xs.clone();
                sorted.sort_by(f64::total_cmp);
                if sorted.windows(2).any(|w| w[0] == w[1]) { return Err("Boundaries: Two entries of the table have the same value. Add their probabilities in one entry.".into()) }
                if let Some(i) = ps.iter().position(|q| !(*q >= 0.0) || !q.is_finite()) { return Err(format!("Non-negativity: The probability of {} is {}.", sh(xs[i]), sh(ps[i]))) }
                let sum: f64 = ps.iter().sum();
                if (sum - 1.0).abs() > 1e-9 { return Err(format!("Normalisation: The probabilities add to {}, not 1. Use normalize() to scale weights.", sh(sum))) }
                let (x, p, c) = atoms(&xs, &ps); let st = if xs.len() <= 6 { xs.iter().map(|v| sh(*v)).collect::<Vec<_>>().join(", ") } else { format!("{} values", count(xs.len())) };
                observe(&|v| x.iter().zip(&p).any(|(a, q)| *a == v && *q > 0.0), &format!("{{{st}}}"))?; let m = x.len() as f64 * p.iter().fold(0.0, |a: f64, &b| a.max(b));
                let rej = if 1.0 / m < 1e-3 { Err(format!("The acceptance probability 1/M = {} is below 0.001.", sh(1.0 / m))) } else { Ok(m) };
                Ok(Custom { mom: mv(&x, &p), al: alias(&p), lo: x[0], hi: x[x.len() - 1], x, p, c, rej, lab: "Alias method (Walker 1977, Vose 1991): one integer and one uniform for each draw (exact)".into(), ..d })
            }
            "cdf" => {
                if !(lo < hi) { return Err(format!("Boundaries: The support needs lo < hi, not lo = {} and hi = {}.", sh(lo), sh(hi))) } let f = |x: f64| fv(x, "F");
                // A centre and scale from the quartiles of F, by bisection on a raw bracket.
                let (mut c, mut s) = (0.0, 1.0);
                if !bounded {
                    let start = if lo.is_finite() { lo } else if hi.is_finite() { hi } else { 0.0 };
                    let q = |u: f64| bisect(&|x| f(x).map_or(NAN, |v| if v.is_nan() { 0.0 } else { v }), u, lo, hi, start, 1.0); let (q25, q50, q75) = (q(0.25), q(0.5), q(0.75));
                    c = if lo.is_finite() { lo } else if hi.is_finite() { hi } else { q50 };
                    s = if lo.is_finite() { q50 - lo } else if hi.is_finite() { hi - q50 } else { (q75 - q25) / 5.33 }; if !(s > 0.0) || !s.is_finite() { s = 1.0 } }
                let mp = Map(lo, hi, c, s); let (mut xs, mut fs, mut bad, mut range, mut down) = (vec![], vec![], String::new(), String::new(), String::new());
                for j in 0..=n {
                    let x = mp.x(j as f64 / n as f64); if !x.is_finite() { continue } let v = f(x)?;
                    if !v.is_finite() { if bad.is_empty() { bad = format!("F({}) is {}, not a finite number.", sh(x), sh(v)) } continue }
                    if (v < -1e-12 || v > 1.0 + 1e-12) && range.is_empty() { range = format!("F({}) = {} is outside [0, 1].", sh(x), sh(v)) }
                    if let (Some(&a), Some(&b)) = (fs.last(), xs.last()) { if v < a - 1e-12 && down.is_empty() { down = format!("F decreases by {} between x = {} and x = {}.", sh(a - v), sh(b), sh(x)) } }
                    xs.push(x); fs.push(v); }
                if !bad.is_empty() || !range.is_empty() { return Err(format!("Non-negativity: {}", if bad.is_empty() { range } else { bad })) }
                if !down.is_empty() { return Err(format!("Monotonicity: {down}")) }
                let (f0, f1) = (if lo.is_finite() { f(lo)? } else { fs[0] }, if hi.is_finite() { f(hi)? } else { fs[fs.len() - 1] });
                if lo.is_finite() && !(f0.abs() <= 1e-9) { return Err(format!("Boundaries: F({}) = {} at the least value of the support; a CDF starts at 0.", sh(lo), sh(f0))) }
                if hi.is_finite() && !((f1 - 1.0).abs() <= 1e-9) { return Err(format!("Normalisation: F({}) = {} at the greatest value of the support; a CDF ends at 1.", sh(hi), sh(f1))) }
                let cu = Custom { s: (s, if lo.is_finite() { lo } else if hi.is_finite() { hi } else { c }), rej: Err("Rejection needs a density, and this input is a CDF.".into()),
                    lab: "Inverse transform by bisection on F, to a relative width of 10^-12 (approximate: bisection to a tolerance)".into(), ..d };
                // F(Q(u)) = u on a grid of u: a jump of F gives F(Q(u)) > u, an atom, which this input does not take.
                let (mut worst, mut wh) = (0.0, 0.0);
                for j in 1..64 { let u = j as f64 / 64.0; let x = cu.quantile(u); let dd = cu.cdf(x) - u; if dd.abs() > worst { (worst, wh) = (dd.abs(), x) } }
                if worst > 1e-6 { return Err(format!("Consistency: F(Q(u)) differs from u by {} near x = {}: F jumps there. The page reads a CDF input as a law with no atoms.", sh(worst), sh(wh))) }
                observe(&|x| x >= lo && x <= hi, &interval(lo, hi))?; Ok(Custom { mom: if bounded { simpson(&|x| 1.0 - cu.cdf(x), lo, hi, n) } else { (None, None) }, ..cu }) }
            "quantile" => {
                let q = |u: f64| fv(u, "Q").map_err(|e| e.replace("at x =", "at u =")); let (q0, q1) = (q(0.0)?, q(1.0)?);
                if t[4].is_none() { lo = if q0.is_nan() { -INF } else { q0 } } if t[5].is_none() { hi = if q1.is_nan() { INF } else { q1 } }
                let (mut bad, mut down, mut out, mut prev, mut pu, mut m1, mut m2) = (String::new(), String::new(), String::new(), -INF, 0.0, 0.0, 0.0);
                for j in 0..n {
                    let u = (j as f64 + 0.5) / n as f64; let v = q(u)?;
                    if !v.is_finite() { if bad.is_empty() { bad = format!("Q({}) is {}, not a finite number.", sh(u), sh(v)) } continue }
                    if v < prev - 1e-12 * prev.abs().max(1.0) && down.is_empty() { down = format!("Q decreases by {} between u = {} and u = {}.", sh(prev - v), sh(pu), sh(u)) }
                    if (v < lo || v > hi) && out.is_empty() { out = format!("Q({}) = {} lies outside the stated support {}.", sh(u), sh(v), interval(lo, hi)) } (prev, pu) = (v, u); }
                if !bad.is_empty() || !out.is_empty() { return Err(format!("Boundaries: {}", if bad.is_empty() { out } else { bad })) }
                if !down.is_empty() { return Err(format!("Monotonicity: {down}")) }
                let cu = Custom { lo, hi, rej: Err("Rejection needs a density, and this input is a quantile function.".into()),
                    lab: "Inverse transform with the stated quantile function: X = Q(U) (exact)".into(), ..d };
                observe(&|x| x >= lo && x <= hi, &interval(lo, hi))?;
                if lo.is_finite() && hi.is_finite() {
                    for j in 0..n { let v = cu.quantile((j as f64 + 0.5) / n as f64); m1 += v / n as f64; m2 += v * v / n as f64 }
                    return Ok(Custom { mom: (Some(m1), Some((m2 - m1 * m1).max(0.0))), ..cu }); }
                Ok(cu) }
            _ => transform(l, &t, n, &env, p, d, &observe), } }

    /// A transform: the CF φ(t), or φ(t) = M(it) for an MGF M finite near 0, inverted by the Gil-Pelaez formula
    /// F(x) = 1/2 − (1/π) ∫_0^∞ Im[e^{−itx} φ(t)]/t dt with the midpoint rule, on a grid of x.
    fn transform(l: &LawLine, t: &[Option<Ex>], grid: usize, env: &[V], p: &[f64], d: Custom, observe: &dyn Fn(&dyn Fn(f64) -> bool, &str) -> Result<(), String>) -> Result<Custom, String> {
        let (mgf, (lo, hi)) = (l.kind == "mgf", (d.lo, d.hi)); let cenv: Vec<C> = std::iter::once((0.0, 0.0)).chain(p.iter().map(|&v| (v, 0.0))).chain([(0.0, 1.0)]).collect();
        let phi = |s: f64| { let mut e = cenv.clone(); e[0] = if mgf { (0.0, s) } else { (s, 0.0) }; cev(t[1].as_ref().unwrap(), &e, false) };
        let mf = |s: f64| match at(t[0].as_ref().unwrap(), env, s)? { V::N(v) => Ok(v), _ => Err("M gives a vector".to_string()) };
        let (mut mean, mut var) = (NAN, NAN);
        if mgf {
            let m0 = (mf(1e-9)? + mf(-1e-9)?) / 2.0; if !((m0 - 1.0).abs() <= 1e-6) { return Err(format!("Normalisation: M(0) = {}, not 1: an MGF has M(0) = E[e^0] = 1.", sh(m0))) }
            let mut delta = 0.0;
            for dd in [1.0, 0.1, 0.01, 0.001] {
                let mut ok = true; for j in -20..=20 { if !ok { break } if !mf(dd * j as f64 / 20.0)?.is_finite() && j != 0 { ok = false } } if ok { delta = dd; break } }
            if delta == 0.0 { return Err("Existence near 0: M(t) is not finite at points of [−0.001, 0.001]: the MGF does not exist near 0, so it does not define a law here.".into()) }
            // M at 0 is the limit m0, so an expression that is 0/0 at t = 0 still checks.
            let h = delta / 20.0; let ms = |s: f64| if s == 0.0 { Ok(m0) } else { mf(s) }; let (mut neg, mut cvx) = (String::new(), String::new());
            for j in -19..=19 {
                let (s, v) = (j as f64 * h, ms(j as f64 * h)?); if !(v > 0.0) && neg.is_empty() { neg = format!("M({}) = {}, not > 0.", sh(s), sh(v)) }
                let sec = (ms((j + 1) as f64 * h)? - 2.0 * v + ms((j - 1) as f64 * h)?) / (h * h);
                if sec < -(1e-12 * v.abs().max(1.0)) / (h * h) - 1e-9 && cvx.is_empty() { cvx = format!("M″({}) ≈ {} < 0, but an MGF is convex: M″(t) = E[X² e^{{tX}}] ≥ 0.", sh(s), sh(sec)) }
            }
            if !neg.is_empty() { return Err(format!("Non-negativity: {neg}")) } if !cvx.is_empty() { return Err(format!("Monotonicity: {cvx}")) }
            // The moments by central differences with Richardson's extrapolation.
            let e = (delta / 10.0).min(1e-3); let d1 = |e: f64| Ok::<f64, String>((mf(e)? - mf(-e)?) / (2.0 * e));
            let d2 = |e: f64| Ok::<f64, String>((mf(e)? - 2.0 * m0 + mf(-e)?) / (e * e)); mean = (4.0 * d1(e / 2.0)? - d1(e)?) / 3.0;
            var = (4.0 * d2(e / 2.0)? - d2(e)?) / 3.0 - mean * mean; } else {
            let p0 = phi(1e-9)?;
            if !((p0.0 - 1.0).hypot(p0.1) <= 1e-6) { return Err(format!("Normalisation: φ(0) = {}{}: a CF has φ(0) = E[e^0] = 1.", sh(p0.0), if p0.1.abs() > 1e-12 { format!(" + {}i", sh(p0.1)) } else { String::new() })) }
            let (mut worst, mut wt) = (0.0, 0.0);
            for j in 1..=200 { let s = 0.05 * j as f64 * j as f64; let (a, b) = (phi(s)?, phi(-s)?); let dd = (a.0 - b.0).hypot(a.1 + b.1); if dd > worst { (worst, wt) = (dd, s) } }
            if !(worst <= 1e-9) { return Err(format!("Consistency: |φ(−t) − conj φ(t)| = {} at t = {}: the CF of a real random variable has φ(−t) = conj φ(t).", sh(worst), sh(wt))) } }
        // Location and scale from φ: the first t with |φ(t)| ≤ 1/2, and arg φ near 0.
        let (mut th, mut big, mut bat, mut q) = (0.0, 0.0, 0.0, -4.0);
        while q <= 4.0 {
            let s = 10f64.powf(q); let v = phi(s)?; let r = v.0.hypot(v.1); if !r.is_finite() { return Err(format!("φ({}) is not a finite number", sh(s))) }
            if r > 1.0 + 1e-9 && r > big { (big, bat) = (r, s) } if th == 0.0 && r <= 0.5 { th = s } q += 0.05; }
        if big > 0.0 { return Err(format!("Boundaries: |φ({})| = {} > 1, but |φ(t)| = |E[e^{{itX}}]| ≤ 1.", sh(bat), sh(big))) }
        if th == 0.0 { return Err("the page cannot invert a transform whose modulus does not fall".into()) } let sm = phi(th / 100.0)?;
        let centre = if mgf && mean.is_finite() { mean } else { sm.1.atan2(sm.0) / (th / 100.0) }; let spread = if mgf && var > 0.0 { 12.0 * var.sqrt() } else { 100.0 / th };
        let (a, b) = ((centre - spread).max(if lo.is_finite() { lo } else { -INF }), (centre + spread).min(if hi.is_finite() { hi } else { INF }));
        if !(b > a) { return Err("the support and the scale of the transform do not overlap".into()) }
        // The midpoint rule in t with step h = π/(b − a): the periodised law repeats every 2(b − a), outside the table.
        let (w, mut ts, mut ph) = (b - a, vec![], vec![]); let h = PI / w;
        for k in 0..8192 {
            let (s, v) = ((k as f64 + 0.5) * h, phi((k as f64 + 0.5) * h)?); ts.push(s); ph.push(v); if v.0.hypot(v.1) / s < 1e-13 && k > 16 { break } }
        let nx = (grid / 2).min(2048); let fs: Vec<f64> = (0..=nx).map(|j| {
            let x = a + w * j as f64 / nx as f64;
            // e^{−i t_k x} by rotation: one complex product for each term.
            let (rot, mut e, mut s) = (((h * x).cos(), -(h * x).sin()), ((h * x / 2.0).cos(), -(h * x / 2.0).sin()), 0.0);
            for (t, v) in ts.iter().zip(&ph) { s += (e.0 * v.1 + e.1 * v.0) / t; e = cmul(e, rot) } 0.5 - h * s / PI }).collect();
        let (mut dn, mut dat) = (0.0, 0.0); for j in 1..=nx { if fs[j - 1] - fs[j] > dn { (dn, dat) = (fs[j - 1] - fs[j], a + w * j as f64 / nx as f64) } }
        if dn > 1e-6 { return Err(format!("Monotonicity of the inverted CDF: The inverted CDF decreases by {} near x = {}: the expression is not the transform of a law, or the inversion does not resolve it.", sh(dn), sh(dat))) }
        // The CDF table: a cumulative maximum, scaled to [0, 1] over the table.
        let mut run = 0.0f64; let c: Vec<f64> = fs.iter().map(|f| { run = run.max(*f); run }).collect(); let c: Vec<f64> = c.iter().map(|v| (v - c[0]) / (c[nx] - c[0])).collect();
        let (m1, m2) = (0..nx).fold((0.0, 0.0), |(m1, m2), j| { let (x, p) = (a + (j as f64 + 0.5) * w / nx as f64, c[j + 1] - c[j]); (m1 + p * x, m2 + p * x * x) });
        let tv = (m2 - m1 * m1).max(0.0);
        if mgf {
            let sd = var.max(0.0).sqrt();
            if !((m1 - mean).abs() <= 1e-3 * sd.max(1e-12) + 1e-9 && (tv - var).abs() <= 1e-2 * var.max(1e-12)) {
                return Err(format!("Consistency: M′(0) = {} and M″(0) − M′(0)² = {} by finite differences; the inverted law has mean {} and variance {}.", sh(mean), sh(var), sh(m1), sh(tv)));
            } }
        observe(&|x| x >= lo && x <= hi, &interval(lo, hi))?;
        Ok(Custom { m: Map(a, b, 0.0, 1.0), c, mom: if lo.is_finite() && hi.is_finite() { (Some(m1), Some(tv)) } else { (None, None) },
            rej: Err(format!("Rejection needs a density, and this input is {}.", if mgf { "an MGF" } else { "a CF" })),
            lab: format!("Inverse transform with the CDF from the Gil-Pelaez inversion: {} cells of [{}, {}], linear inside a cell (approximate: numerical inversion of the transform)", count(nx), sh(a), sh(b)), ..d })
    }

    impl Custom {
        pub fn discrete(&self) -> bool { self.k == "pmf" || self.k == "table" }
        fn table(&self) -> bool { matches!(self.k.as_str(), "pdf" | "logpdf" | "density" | "mgf" | "cf") }
        /// The sampler label and its exactness, as the JS shows them.
        pub fn label(&self) -> String { self.lab.clone() }
        /// The input value at x, or NaN.
        fn fe(&self, x: f64) -> f64 { self.f.as_ref().and_then(|e| at(e, &self.env, x).ok()?.num()).unwrap_or(NAN) }
        pub fn draw(&self, k: Kind, r: &mut Src) -> Result<f64, String> {
            match k {
                Kind::Reference if self.discrete() => Ok(self.x[pick(&self.al, r)]),
                Kind::Reference => Ok(self.quantile(r.u())),
                Kind::Inverse { cut } => { let x = self.quantile(r.u()); Ok(if cut < 1.0 { x.min(self.quantile(cut)) } else { x }) }
                // A uniform proposal on the support, with the envelope constant M times `scale`.
                Kind::Rejection { scale } => {
                    let m = self.rej.clone()? * scale;
                    if self.discrete() {
                        let (n, f) = (self.p.len(), self.c[self.p.len() - 1]); loop { let i = below(r, n); if r.u() <= self.p[i] / f / (m / n as f64) { return Ok(self.x[i]) } } }
                    let w = self.hi - self.lo; loop { let x = self.lo + w * r.u(); if r.u() <= self.pdf(x) / (m / w) { return Ok(x) } } }
                Kind::Euler => Err("The Euler scheme is a method for a diffusion, not for a law.".into()), } }
        pub fn quantile(&self, u: f64) -> f64 {
            match self.k.as_str() {
                _ if self.table() => tq(&self.c, self.m, u),
                "pmf" | "table" => self.x[search(&self.c, u * self.c[self.c.len() - 1])],
                "cdf" => bisect(&|x| self.cdf(x), u, self.lo, self.hi, self.s.1, self.s.0),
                _ => self.fe(u), } }
        pub fn cdf(&self, x: f64) -> f64 {
            match self.k.as_str() {
                _ if self.table() => tc(&self.c, self.m, x) / self.c[self.c.len() - 1],
                "pmf" | "table" => { let i = self.x.partition_point(|a| *a <= x); if i == 0 { 0.0 } else { self.c[i - 1].min(1.0) } }
                "cdf" => if x <= self.lo { 0.0 } else if x >= self.hi { 1.0 } else { self.fe(x).clamp(0.0, 1.0) },
                // The CDF of a quantile input by 60 halvings of u.
                _ => if x < self.lo { 0.0 } else if x >= self.hi { 1.0 } else {
                    let (mut a, mut b) = (0.0, 1.0); for _ in 0..60 { let m = (a + b) / 2.0; if self.fe(m) <= x { a = m } else { b = m } } a }, } }
        pub fn sf(&self, x: f64) -> f64 {
            if self.table() { let z = self.c[self.c.len() - 1]; (z - tc(&self.c, self.m, x)).max(0.0) / z } else { (1.0 - self.cdf(x)).max(0.0) } }
        /// The PMF of a discrete input, the PDF of a density input, else a difference quotient of the CDF.
        pub fn pdf(&self, x: f64) -> f64 {
            match self.k.as_str() {
                "pdf" | "density" | "logpdf" => if x < self.lo || x > self.hi { 0.0 } else { let v = self.fe(x); (if self.k == "logpdf" { v.exp() } else { v }) / self.c[self.c.len() - 1] },
                "pmf" | "table" => {
                    let i = self.x.partition_point(|a| *a < x);
                    if i < self.x.len() && self.x[i] == x { self.p[i] } else if self.k == "pmf" && isint(x) && x >= self.lo && x <= self.hi { self.fe(x).max(0.0) } else { 0.0 } }
                _ => { let e = 1e-6 * x.abs().max(1.0); ((self.cdf(x + e) - self.cdf(x - e)) / (2.0 * e)).max(0.0) } } }
        pub fn support(&self) -> (f64, f64) { (self.lo, self.hi) }
        pub fn moments(&self) -> (Option<f64>, Option<f64>) { self.mom }
        pub fn order(&self) -> f64 { if self.mom.0.is_some() { INF } else { NAN } } }
}
```

```rust
//| caption: The copulas and the processes.
mod dep {
    //! The copulas and the stochastic processes of the Monte Carlo workbench: the law table, the domain checks, one draw
    //! for each method, the cost of a draw and the grid times of a path.
    use super::*;
    /// The copulas and processes: id, display name (as the JS `name`), parameters in order with the default expression text or None.
    pub const LAWS: [(&str, &str, &[(&str, Option<&str>)]); 14] = [
        ("gaussiancopula", "Gaussian copula", &[("rho", None), ("d", None)]),
        ("tcopula", "Student t copula", &[("rho", None), ("nu", None), ("d", None)]),
        ("claytoncopula", "Clayton copula", &[("theta", None), ("d", None)]),
        ("gumbelcopula", "Gumbel copula", &[("theta", None), ("d", None)]),
        ("frankcopula", "Frank copula", &[("theta", None), ("d", None)]),
        ("brownian", "Brownian motion", &[("x0", Some("0")), ("mu", Some("0")), ("sigma", Some("1")), ("T", None), ("steps", None), ("coarsen", Some("1"))]),
        ("gbm", "Geometric Brownian motion", &[("s0", None), ("mu", None), ("sigma", None), ("T", None), ("steps", None), ("coarsen", Some("1"))]),
        ("ou", "Ornstein–Uhlenbeck process", &[("x0", None), ("kappa", None), ("theta", None), ("sigma", None), ("T", None), ("steps", None), ("coarsen", Some("1"))]),
        ("poissonprocess", "Poisson process", &[("lambda", None), ("amp", Some("0")), ("period", Some("1")), ("T", None), ("steps", None)]),
        ("compoundprocess", "Compound Poisson process", &[("x0", Some("0")), ("drift", Some("0")), ("lambda", None), ("jump", None), ("T", None), ("steps", None)]),
        ("markovchain", "Finite-state Markov chain", &[("P", None), ("x0", None), ("steps", None)]),
        ("branching", "Galton–Watson branching process", &[("z0", Some("1")), ("m", None), ("k", Some("inf")), ("steps", None)]),
        ("hawkes", "Hawkes process", &[("mu", None), ("alpha", None), ("beta", None), ("T", None), ("steps", None)]),
        ("variancegamma", "Variance-gamma Lévy process", &[("x0", Some("0")), ("theta", None), ("sigma", None), ("nu", None), ("T", None), ("steps", None)]),
    ];
    /// The most events in one Hawkes path.
    const MAX: usize = 100_000;

    /// True for a copula, false for a process.
    pub fn is_copula(id: &str) -> bool { id.ends_with("copula") }

    /// The value of the parameter `name` of the law `id`, if the law has it and it is a number.
    fn arg(id: &str, p: &[V], name: &str) -> Option<f64> {
        let (_, _, ps) = LAWS.iter().find(|l| l.0 == id)?;
        p.get(ps.iter().position(|q| q.0 == name)?)?.num()
    }

    /// A number as JavaScript prints it: the shortest form, with an exponent below 10^−6 and from 10^21.
    fn js(x: f64) -> String {
        if x == 0.0 { return "0".into() }
        if x.is_infinite() { return (if x > 0.0 { "Infinity" } else { "-Infinity" }).into() }
        if x.abs() < 1e-6 || x.abs() >= 1e21 { format!("{x:e}").replace('e', "e+").replace("+-", "-") } else { format!("{x}") }
    }
    /// A parameter as the JS check texts print it: "a vector" for a vector, and ∞ for infinity in a process.
    fn sh(v: &V, process: bool) -> String {
        match v { V::N(x) if process && *x == INF => "∞".into(), V::N(x) => js(*x), V::L(_) => "a vector".into() }
    }
    /// 4 significant digits, as the JS `g4`.
    fn g4(x: f64) -> String {
        if x.is_finite() { js(format!("{x:.3e}").parse().unwrap()) } else if x > 0.0 { "∞".into() } else { "−∞".into() }
    }
    /// x in [lo, hi]; NaN (a vector) is not.
    fn ins(x: f64, lo: f64, hi: f64) -> bool { x >= lo && x <= hi }
    /// An integer in [lo, hi].
    fn int(x: f64, lo: f64, hi: f64) -> bool { x.fract() == 0.0 && ins(x, lo, hi) }

    /// The pairs (i, j), i < j, of d components, row by row.
    fn pairs(d: usize) -> Vec<(usize, usize)> { (0..d).flat_map(|i| (i + 1..d).map(move |j| (i, j))).collect() }
    /// The correlation matrix: one ρ for every pair, or the entries above the diagonal, row by row.
    fn corr(rho: &V, d: usize) -> Vec<Vec<f64>> {
        let (v, mut m) = (rho.list(), vec![vec![1.0; d]; d]);
        for (k, (i, j)) in pairs(d).into_iter().enumerate() { m[i][j] = v[k.min(v.len() - 1)]; m[j][i] = m[i][j] }
        m
    }
    /// The lower Cholesky factor, or the number of the first pivot that is not positive.
    fn chol(a: &[Vec<f64>]) -> Result<Vec<Vec<f64>>, usize> {
        let d = a.len();
        let mut l = vec![vec![0.0; d]; d];
        for i in 0..d {
            for j in 0..=i {
                let s = a[i][j] - (0..j).map(|k| l[i][k] * l[j][k]).sum::<f64>();
                if i != j { l[i][j] = s / l[j][j] } else if s > 1e-12 { l[i][i] = s.sqrt() } else { return Err(i + 1) }
            }
        }
        Ok(l)
    }
    /// The CDF of Student's t law with ν degrees of freedom, from the incomplete beta function.
    fn tcdf(x: f64, nu: f64) -> f64 {
        if x.is_infinite() || nu > 1e7 { return pnorm(x) }
        let t = 0.5 * ibeta(nu / (nu + x * x), nu / 2.0, 0.5);
        if x < 0.0 { t } else { 1.0 - t }
    }
    /// E N(t) of a Hawkes process with no history.
    fn hmean(mu: f64, al: f64, be: f64, t: f64) -> f64 {
        let d = be - al;
        if (d * t).abs() < 1e-9 { mu * t + al * mu * t * t / 2.0 } else { be * mu * t / d + al * mu * (-d * t).exp_m1() / (d * d) }
    }

    /// The domain checks, with the JS text of the first failed check.
    pub fn check(id: &str, p: &[V]) -> Result<(), String> {
        let law = LAWS.iter().find(|l| l.0 == id).ok_or(format!("{id} is not a copula or a process of this page."))?;
        if p.len() != law.2.len() { return Err(format!("The {} takes {} arguments.", law.1, law.2.len())) }
        let x = |i: usize| p[i].num().unwrap_or(f64::NAN);
        let s = |i: usize| sh(&p[i], !is_copula(id));
        if is_copula(id) {
            let d = x(p.len() - 1);
            if !int(d, 2.0, 16.0) { return Err(format!("d = {} is not an integer in [2, 16].", s(p.len() - 1))) }
            // The JS toPrecision(4) of −1/(d − 1).
            let (du, p4) = (d as usize, format!("{:.*}", if d > 11.0 { 5 } else { 4 }, -1.0 / (d - 1.0)));
            if id == "gaussiancopula" || id == "tcopula" {
                if id == "tcopula" && !ins(x(1), 0.5, 1e6) { return Err(format!("nu = {} is outside [0.5, 10^6].", s(1))) }
                match &p[0] {
                    V::N(r) if !(r.abs() < 1.0) => return Err(format!("rho = {} is outside (−1, 1).", js(*r))),
                    V::L(v) if v.len() != du * (du - 1) / 2 => return Err(format!("rho has {} entries. A {du} × {du} correlation matrix has {} entries above the diagonal.", v.len(), du * (du - 1) / 2)),
                    V::L(v) => if let Some(((i, j), r)) = pairs(du).into_iter().zip(v).find(|(_, r)| !(r.abs() < 1.0)) {
                        return Err(format!("The correlation of components {} and {}, {}, is outside (−1, 1).", i + 1, j + 1, js(*r)))
                    },
                    _ => {}
                }
                let tip = if matches!(p[0], V::N(_)) && du > 2 { format!(" One common correlation needs rho > −1/(d − 1) = {p4}.") } else { String::new() };
                return chol(&corr(&p[0], du)).map(|_| ()).map_err(|i| format!("The correlation matrix is not positive definite: the Cholesky factorisation fails at pivot {i}.{tip}"));
            }
            let th = match p[0] { V::N(t) if t.is_finite() => t, _ => return Err("theta is a number.".into()) };
            let t = js(th);
            return Err(match id {
                "claytoncopula" if th > 200.0 => format!("theta = {t} is above 200, where the copula is numerically the comonotone one."),
                "claytoncopula" if du == 2 && th <= -1.0 => format!("theta = {t}: in two dimensions the Clayton copula needs θ > −1 (θ = −1 is the countermonotone bound, which this page does not sample)."),
                "claytoncopula" if du > 2 && th < 0.0 && th >= -1.0 / (d - 1.0) => format!("theta = {t}: for d = {du} the Clayton generator is d-monotone for θ ≥ −1/(d − 1) (McNeil and Nešlehová, 2009), so the copula exists, but this page samples θ < 0 only for d = 2."),
                "claytoncopula" if du > 2 && th < 0.0 => format!("theta = {t}: for d = {du} the Clayton generator is not d-monotone below θ = −1/(d − 1) = {p4}, so no copula has these parameters."),
                "gumbelcopula" if th < 1.0 => format!("theta = {t}: the Gumbel copula needs θ ≥ 1 in every dimension (θ = 1 is independence). It has no negative dependence."),
                "gumbelcopula" if th > 100.0 => format!("theta = {t} is above 100, where the copula is numerically the comonotone one."),
                "frankcopula" if th.abs() > 700.0 => format!("theta = {t}: |θ| > 700 overflows e^θ."),
                "frankcopula" if th < 0.0 && du > 2 => format!("theta = {t}: for d ≥ 3 the Frank generator is completely monotone only for θ > 0, so negative θ is valid in two dimensions only."),
                _ => return Ok(()),
            });
        }
        // The checks of a process in the JS order: (passes, text).
        let o = |i: usize, lo: f64, hi: f64, r: &str| (ins(x(i), lo, hi), format!("{} = {} is outside {r}.", law.2[i].0, s(i)));
        let it = |i: usize, lo: f64, hi: f64, r: &str| (int(x(i), lo, hi), format!("{} = {} is not an integer in {r}.", law.2[i].0, s(i)));
        let big = |i: usize| o(i, -1e12, 1e12, "[−10^12, 10^12]");
        let mut e = match id {
            "brownian" => vec![big(0), o(1, -1e9, 1e9, "[−10^9, 10^9]"), o(2, 0.0, 1e9, "[0, 10^9]")],
            "gbm" => vec![o(0, 1e-12, 1e12, "(0, 10^12]"), o(1, -100.0, 100.0, "[−100, 100]"), o(2, 0.0, 20.0, "[0, 20]")],
            "ou" => vec![big(0), big(2), o(3, 0.0, 1e9, "[0, 10^9]"), o(1, -1e6, 1e6, "[−10^6, 10^6]")],
            "poissonprocess" => vec![o(0, 1e-12, 1e7, "(0, 10^7]"), o(1, 0.0, 1.0, "[0, 1]"), o(2, 1e-9, 1e9, "(0, 10^9]")],
            "compoundprocess" => vec![big(0), o(1, -1e9, 1e9, "[−10^9, 10^9]"), o(2, 1e-12, 1e7, "(0, 10^7]"), (ins(x(3).abs(), 1e-12, 1e12), format!("jump = {}: |m| is outside (0, 10^12].", s(3)))],
            "hawkes" => vec![o(0, 1e-12, 1e6, "(0, 10^6]"), o(1, 0.0, 1e6, "[0, 10^6]"), o(2, 1e-9, 1e6, "(0, 10^6]")],
            "variancegamma" => vec![big(0), o(1, -1e6, 1e6, "[−10^6, 10^6]"), o(2, 0.0, 1e6, "[0, 10^6]"), o(3, 1e-6, 1e3, "[10^−6, 1000]")],
            "branching" => vec![it(0, 0.0, 1e6, "[0, 10^6]"), o(1, 1e-9, 100.0, "(0, 100]"), (x(2) == INF || ins(x(2), 1e-6, 1e9), format!("k = {} is not inf or a number in [10^−6, 10^9].", s(2))),
                it(3, 1.0, 200.0, "[1, 200]"), (x(0) * x(1).powf(x(3)) <= 1e12, format!("The mean size of the last generation, z0 m^steps = {}, is above 10^12.", g4(x(0) * x(1).powf(x(3)))))],
            _ => {
                let V::L(pm) = &p[0] else { return Err("P is a vector of k² transition probabilities, row by row.".into()) };
                let k = (pm.len() as f64).sqrt().round() as usize;
                if k * k != pm.len() || !(2..=20).contains(&k) { return Err(format!("P has {} entries, which is not k² for a k in [2, 20].", pm.len())) }
                let mut e = vec![];
                for (i, row) in pm.chunks(k).enumerate() {
                    let sum = row.iter().sum::<f64>();
                    e.push((row.iter().all(|w| *w >= 0.0), format!("Row {} of P has a negative entry.", i + 1)));
                    e.push((!((sum - 1.0).abs() > 1e-9), format!("Row {} of P adds to {}, not 1.", i + 1, g4(sum))));
                }
                e.push((int(x(1), 1.0, k as f64), format!("x0 = {} is not a state in 1..{k}.", s(1))));
                e.push(it(2, 1.0, 4096.0, "[1, 4096]"));
                e
            }
        };
        // The grid: T, steps and, for a diffusion, coarsen.
        if let Some(i) = law.2.iter().position(|q| q.0 == "T") {
            e.extend([o(i, 1e-9, 1e6, "(0, 10^6]"), it(i + 1, 1.0, 4096.0, "[1, 4096]")]);
            if p.len() > i + 2 { e.push(it(i + 2, 1.0, 16.0, "[1, 16]")) }
        }
        e.push(match id {
            "gbm" => (ins(x(1).abs() * x(3) + x(2) * x(2) * x(3), 0.0, 600.0), "|μ|T + σ²T is above 600: the values overflow.".into()),
            "ou" => (x(1) * x(4) >= -50.0, format!("κT = {} is below −50: the values overflow.", g4(x(1) * x(4)))),
            "poissonprocess" => (x(0) * (1.0 + x(1)) * x(3) <= 2e4, format!("The mean number of events λ(1 + a)T = {} is above 20,000.", g4(x(0) * (1.0 + x(1)) * x(3)))),
            "compoundprocess" => (x(2) * x(4) <= 2e4, format!("The mean number of jumps λT = {} is above 20,000.", g4(x(2) * x(4)))),
            "hawkes" => {
                let m = hmean(x(0), x(1), x(2), x(3));
                (m <= 2e4, format!("The expected number of events E N(T) = {} is above 20,000. With the branching ratio α/β = {}{}, lower T or α.", g4(m), g4(x(1) / x(2)), if x(1) >= x(2) { " ≥ 1" } else { "" }))
            }
            _ => (true, String::new()),
        });
        e.into_iter().find(|c| !c.0).map_or(Ok(()), |c| Err(c.1))
    }

    /// The JS text of a method that the law does not have, or None.
    fn unavailable(id: &str, p: &[V], k: Kind) -> Option<&'static str> {
        let (rej, inv, x) = (matches!(k, Kind::Rejection { .. }), matches!(k, Kind::Inverse { .. }), |i: usize| p[i].num().unwrap_or(f64::NAN));
        Some(match id {
            _ if rej && is_copula(id) => "This page has no rejection sampler for a copula. A copula density can grow without bound near the corners of the unit cube, so a bounded envelope does not exist in general.",
            "claytoncopula" | "gumbelcopula" | "frankcopula" if inv && x(1) != 2.0 => "The conditional distribution method needs the derivatives of order d − 1 of the generator. This page has it in two dimensions only.",
            "brownian" if rej => "A Brownian increment is a normal draw, so the page has no rejection sampler for it.",
            "gbm" if rej => "A lognormal step is a transformed normal draw, so the page has no rejection sampler for it.",
            "ou" if rej => "A Gaussian transition needs no rejection, so the page has no rejection sampler for it.",
            "compoundprocess" if rej => "Exponential gaps and exponential jumps need no rejection, so the page has no rejection sampler for this process.",
            "markovchain" if rej => "A row of a finite chain is a categorical law. The alias table and the inverse transform are exact and cheap, so the page offers no rejection sampler.",
            "branching" if rej => "The total offspring of a generation has an exact sampler, so the page has no rejection sampler for it.",
            "branching" if inv && x(0) * x(1).max(1.0).powf(x(3)) > 1e6 => "The inverse transform searches the support step by step, so its cost grows with the generation size. The page offers it when z0 · max(1, m)^steps ≤ 10^6.",
            "variancegamma" if rej => "The gamma steps come from Marsaglia–Tsang, which is itself a rejection method. The page offers no other rejection sampler.",
            _ => return None,
        })
    }

    /// One draw: a copula gives V::L of d uniforms, a process its path as V::L. Kind::Reference, Kind::Inverse { .. }, Kind::Rejection { .. } and Kind::Euler as the JS samplers; Err(the JS "unavailable" text) when the JS has no such sampler. Rejection samplers count r.proposals and r.accepts.
    /// The parameters must pass `check`.
    pub fn draw(id: &str, p: &[V], k: Kind, r: &mut Src) -> Result<V, String> {
        if let Some(why) = unavailable(id, p, k) { return Err(why.into()) }
        Ok(V::L(if is_copula(id) { copula(id, p, k, r) } else { path(id, p, k, r)? }))
    }

    /// The conditional inverse v = C⁻¹(w | u) of a two-dimensional Archimedean copula, Gumbel by bisection.
    fn cinv(id: &str, th: f64, u: f64, w: f64) -> f64 {
        match id {
            "claytoncopula" => ((w.powf(-th / (1.0 + th)) - 1.0) * u.powf(-th) + 1.0).powf(-1.0 / th),
            "frankcopula" => -(w * (-th).exp_m1() / (w + (1.0 - w) * (-th * u).exp())).ln_1p() / th,
            _ => {
                // C(v | u) increases in v.
                let (x, mut lo, mut hi) = (-u.ln(), 0.0f64, 1.0);
                for _ in 0..60 {
                    let v = (lo + hi) / 2.0;
                    let s = x.powf(th) + (-v.ln()).powf(th);
                    if (x - s.powf(1.0 / th)).exp() * x.powf(th - 1.0) * s.powf(1.0 / th - 1.0) < w { lo = v } else { hi = v }
                }
                (lo + hi) / 2.0
            }
        }
    }

    /// One copula draw. The elliptical copulas: Z = L N with the Cholesky factor L, then the margin CDF. The
    /// Archimedean copulas: the Marshall–Olkin frailty algorithm U_i = ψ(E_i / V), or the conditional inverse in two
    /// dimensions (the inverse method, and θ < 0). The normals come from the inverse transform for each method.
    fn copula(id: &str, p: &[V], k: Kind, r: &mut Src) -> Vec<f64> {
        let (d, th) = (p[p.len() - 1].num().unwrap() as usize, p[0].num().unwrap_or(0.0));
        if id == "gaussiancopula" || id == "tcopula" {
            let (l, n) = (chol(&corr(&p[0], d)).unwrap(), (0..d).map(|_| r.normal()).collect::<Vec<_>>());
            let z = (0..d).map(|i| (0..=i).map(|j| l[i][j] * n[j]).sum::<f64>());
            if id == "gaussiancopula" { return z.map(pnorm).collect() }
            // T = Z / √(W/ν) with W ~ χ²(ν).
            let nu = p[1].num().unwrap();
            let s = (2.0 * r.gamma(nu / 2.0) / nu).sqrt();
            return z.map(|x| tcdf(x / s, nu)).collect();
        }
        if th == (id == "gumbelcopula") as u8 as f64 { return (0..d).map(|_| r.u()).collect() }
        if th < 0.0 || matches!(k, Kind::Inverse { .. }) { let (u, w) = (r.u(), r.u()); return vec![u, cinv(id, th, u, w)] }
        let v = match id {
            "claytoncopula" => r.gamma(1.0 / th) * th,
            // Kanter's positive stable law with the Laplace transform exp(−t^a), a = 1/θ.
            "gumbelcopula" => {
                let (a, w) = (1.0 / th, PI * r.u());
                let e = r.exp();
                (a * w).sin() / w.sin().powf(1.0 / a) * (((1.0 - a) * w).sin() / e).powf((1.0 - a) / a)
            }
            // Kemp's logarithmic series law with p = 1 − e^(−θ).
            _ => {
                let u = r.u();
                if u > -(-th).exp_m1() { 1.0 } else {
                    let q = -(-th * r.u()).exp_m1();
                    if u < q * q { (1.0 + u.ln() / q.ln()).floor() } else if u > q { 1.0 } else { 2.0 }
                }
            }
        };
        let c = -(-th).exp_m1();
        (0..d).map(|_| {
            let t = r.exp() / v;
            match id { "claytoncopula" => (1.0 + th * t).max(0.0).powf(-1.0 / th), "gumbelcopula" => (-t.powf(1.0 / th)).exp(), _ => -(-c * (-t).exp()).ln_1p() / th }
        }).collect()
    }

    /// A path x_0, …, x_n from x_{k+1} = f(x_k, k).
    fn walk(x0: f64, n: usize, r: &mut Src, mut f: impl FnMut(f64, usize, &mut Src) -> f64) -> Vec<f64> {
        let mut x = vec![x0];
        for k in 0..n { let y = f(x[k], k, r); x.push(y) }
        x
    }
    /// The values at the grid times of a sum of weighted events (t, w): an event counts from the first grid time ≥ t.
    fn bins(ev: &[(f64, f64)], n: usize, tt: f64) -> Vec<f64> {
        let mut c = vec![0.0; n + 1];
        for &(t, w) in ev.iter().filter(|e| e.0 <= tt) { c[((t * n as f64 / tt - 1e-12).ceil() as usize).clamp(1, n)] += w }
        for k in 1..=n { c[k] += c[k - 1] }
        c
    }
    /// Inversion of a discrete law on {0, 1, …} by a search from the mode: the mode, its PMF and its CDF, and the PMF ratios up and down.
    fn modeinv(u: f64, mode: f64, pm: f64, fm: f64, up: impl Fn(f64) -> f64, down: impl Fn(f64) -> f64) -> f64 {
        let (mut k, mut f, mut pk) = (mode, fm, pm);
        if u <= f {
            while k > 0.0 && u <= f - pk { f -= pk; pk *= down(k); k -= 1.0 }
        } else {
            while u > f && pk > 0.0 { pk *= up(k); k += 1.0; f += pk }
        }
        k
    }
    /// Walker's alias table of a probability vector (Vose's method): the cut and the alias of each cell.
    fn alias(w: &[f64]) -> Vec<(f64, usize)> {
        let mut s: Vec<f64> = w.iter().map(|x| x * w.len() as f64).collect();
        let mut t: Vec<(f64, usize)> = (0..w.len()).map(|i| (1.0, i)).collect();
        let (mut lo, mut hi): (Vec<usize>, Vec<usize>) = (0..w.len()).partition(|&i| s[i] < 1.0);
        // A cell that stays in one list at the end keeps the cut 1.
        while let (Some(a), Some(b)) = (lo.pop(), hi.pop()) {
            t[a] = (s[a], b);
            s[b] += s[a] - 1.0;
            if s[b] < 1.0 { lo.push(b) } else { hi.push(b) }
        }
        t
    }

    /// One path of a process: the steps + 1 values at the grid times, from the start value at t = 0.
    fn path(id: &str, p: &[V], k: Kind, r: &mut Src) -> Result<Vec<f64>, String> {
        let q: Vec<f64> = p.iter().map(|v| v.num().unwrap_or(f64::NAN)).collect();
        let n = arg(id, p, "steps").unwrap() as usize;
        let (tt, c) = (arg(id, p, "T").unwrap_or(n as f64), arg(id, p, "coarsen").unwrap_or(1.0));
        let (h, inv, eul) = (tt / n as f64, matches!(k, Kind::Inverse { .. }), k == Kind::Euler);
        // A Brownian increment over one step: the sum of c fine increments.
        let dw = |r: &mut Src| (h / c).sqrt() * (0..c as usize).map(|_| r.normal()).sum::<f64>();
        let mut ts = vec![];
        Ok(match id {
            "brownian" => walk(q[0], n, r, |x, _, r| x + q[1] * h + q[2] * dw(r)),
            "gbm" => {
                let a = (q[1] - q[2] * q[2] / 2.0) * h;
                walk(q[0], n, r, |x, _, r| if eul { x * (1.0 + q[1] * h + q[2] * dw(r)) } else { x * (a + q[2] * dw(r)).exp() })
            }
            "ou" => {
                // The exact transition in c sub-steps of length h/c: the noise of a sub-step decays by e^(−κh/c) in each later sub-step.
                let (kp, th, s, d) = (q[1], q[2], q[3], h / c);
                let var = if (kp * d).abs() < 1e-12 { d } else { -(-2.0 * kp * d).exp_m1() / (2.0 * kp) };
                let (a, sd, ah) = ((-kp * d).exp(), s * var.sqrt(), (-kp * h).exp());
                walk(q[0], n, r, |x, _, r| if eul { x + kp * (th - x) * h + s * dw(r) } else { th + (x - th) * ah + (0..c as usize).fold(0.0, |z, _| z * a + sd * r.normal()) })
            }
            "poissonprocess" => {
                // The rate λ(t) = λ(1 + a sin(2πt/P)) and its integral Λ(t).
                let (l, a, per) = (q[0], q[1], q[2]);
                let lam = |t: f64| l * (t + a * per * (1.0 - (2.0 * PI * t / per).cos()) / (2.0 * PI));
                let rate = |t: f64| l * (1.0 + a * (2.0 * PI * t / per).sin());
                match k {
                    Kind::Reference => walk(0.0, n, r, |x, k, r| x + r.poisson(lam((k + 1) as f64 * h) - lam(k as f64 * h))),
                    Kind::Euler => walk(0.0, n, r, |x, k, r| x + (r.u() < (rate(k as f64 * h) * h).min(1.0)) as u8 as f64),
                    // The event times t_i = Λ⁻¹(Γ_i) of a unit Poisson process Γ.
                    Kind::Inverse { .. } => {
                        let (mut g, mut t) = (0.0, 0.0);
                        loop {
                            g += r.exp();
                            if g > lam(tt) { break }
                            t = if a == 0.0 { g / l } else { invert(&lam, g, t, tt, t) };
                            ts.push((t, 1.0))
                        }
                        bins(&ts, n, tt)
                    }
                    // Thinning (Lewis and Shedler): candidates at the rate λ̄ = λ(1 + a) × scale.
                    Kind::Rejection { scale } => {
                        let (bar, mut t) = (l * (1.0 + a) * scale, 0.0);
                        loop {
                            t += r.exp() / bar;
                            if t > tt { break }
                            r.proposals += 1;
                            if r.u() <= rate(t) / bar { r.accepts += 1; ts.push((t, 1.0)) }
                        }
                        bins(&ts, n, tt)
                    }
                }
            }
            "compoundprocess" => {
                let (x0, dr, l, m) = (q[0], q[1], q[2], q[3]);
                match k {
                    Kind::Inverse { .. } => {
                        let mut t = 0.0;
                        loop { t += r.exp() / l; if t > tt { break } ts.push((t, m * r.exp())) }
                        bins(&ts, n, tt).iter().enumerate().map(|(k, j)| x0 + dr * h * k as f64 + j).collect()
                    }
                    Kind::Euler => walk(x0, n, r, |x, _, r| x + dr * h + if r.u() < (l * h).min(1.0) { m * r.exp() } else { 0.0 }),
                    // N ~ Poisson(λh) exponential jumps in a step add to Gamma(N, |m|).
                    _ => walk(x0, n, r, |x, _, r| { let j = r.poisson(l * h); x + dr * h + if j > 0.0 { m * r.gamma(j) } else { 0.0 } }),
                }
            }
            "markovchain" => {
                let pm = p[0].list();
                let kk = (pm.len() as f64).sqrt().round() as usize;
                let row = |i: f64| &pm[(i as usize - 1) * kk..i as usize * kk];
                if inv {
                    // The first state j with F(j) ≥ u.
                    walk(q[1], n, r, |x, _, r| { let u = r.u(); 1.0 + row(x)[..kk - 1].iter().scan(0.0, |f, w| { *f += w; Some(*f) }).take_while(|f| *f < u).count() as f64 })
                } else {
                    let t: Vec<_> = (1..=kk).map(|i| alias(row(i as f64))).collect();
                    walk(q[1], n, r, |x, _, r| {
                        let (a, i) = (&t[x as usize - 1], ((r.u() * kk as f64) as usize).min(kk - 1));
                        1.0 + if r.u() < a[i].0 { i } else { a[i].1 } as f64
                    })
                }
            }
            "branching" => {
                let (m, kd) = (q[1], q[2]);
                walk(q[0], n, r, |z, _, r| {
                    if z == 0.0 { return 0.0 }
                    // The total offspring: Poisson(m z) for k = ∞, else negative binomial(k z, k/(k + m)) as a gamma–Poisson mixture.
                    if !inv && kd == INF { return r.poisson(z * m) }
                    if !inv { let l = r.gamma(z * kd) * m / kd; return r.poisson(l) }
                    let u = r.u();
                    if kd == INF {
                        let (l, md) = (z * m, (z * m).floor());
                        modeinv(u, md, (md * l.ln() - l - lgam(md + 1.0)).exp(), gamma_pq(md + 1.0, l).1, |k| l / (k + 1.0), |k| k / l)
                    } else {
                        let (rr, pp, qq) = (z * kd, kd / (kd + m), m / (kd + m));
                        let md = if rr > 1.0 { ((rr - 1.0) * qq / pp).floor() } else { 0.0 };
                        let pmd = (lgam(md + rr) - lgam(md + 1.0) - lgam(rr) + rr * pp.ln() + md * qq.ln()).exp();
                        modeinv(u, md, pmd, ibeta(pp, rr, md + 1.0), |k| (k + rr) / (k + 1.0) * qq, |k| k / ((k - 1.0 + rr) * qq))
                    }
                })
            }
            "hawkes" => {
                let (mu, al, be) = (q[0], q[1], q[2]);
                let (mut t, mut y) = (0.0, 0.0);
                match k {
                    // The intensity μ + y_k is frozen in each step.
                    Kind::Euler => {
                        let x = walk(0.0, n, r, |x, _, r| { let e = r.poisson((mu + y) * h); y = y * (-be * h).exp() + al * e; x + e });
                        return if x[n] > MAX as f64 { Err(format!("A Hawkes path has more than {MAX} events.")) } else { Ok(x) };
                    }
                    // The cluster representation: immigrants at the rate μ, and each event has Poisson(α/β) children after Exp(β) delays.
                    Kind::Reference => {
                        loop { t += r.exp() / mu; if t > tt { break } ts.push((t, 1.0)) }
                        let mut i = 0;
                        while i < ts.len() && ts.len() <= MAX {
                            for _ in 0..r.poisson(al / be) as usize { let s = ts[i].0 + r.exp() / be; if s <= tt { ts.push((s, 1.0)) } }
                            i += 1;
                        }
                    }
                    // Exact gaps (Dassios and Zhao): the smaller of the baseline gap and the gap of the excitation y.
                    Kind::Inverse { .. } => loop {
                        let s1 = r.exp() / mu;
                        let d = if y > 0.0 { 1.0 - be * r.exp() / y } else { 0.0 };
                        let tau = if d > 0.0 { s1.min(-d.ln() / be) } else { s1 };
                        t += tau;
                        if t > tt || ts.len() > MAX { break }
                        y = y * (-be * tau).exp() + al;
                        ts.push((t, 1.0))
                    },
                    // Ogata's thinning: λ̄ = scale × the intensity after the last point, which bounds λ to the next event.
                    Kind::Rejection { scale } => loop {
                        let bar = (mu + y) * scale;
                        let w = r.exp() / bar;
                        t += w;
                        if t > tt || ts.len() > MAX { break }
                        y *= (-be * w).exp();
                        r.proposals += 1;
                        if r.u() <= (mu + y) / bar { r.accepts += 1; ts.push((t, 1.0)); y += al }
                    },
                }
                if ts.len() > MAX { return Err(format!("A Hawkes path has more than {MAX} events: the branching ratio α/β = {} makes the count grow too fast for this horizon.", g4(al / be))) }
                bins(&ts, n, tt)
            }
            // Gamma time steps ΔG ~ Gamma(h/ν, ν), then ΔX = θ ΔG + σ √ΔG Z.
            _ => walk(q[0], n, r, |x, _, r| { let g = r.gamma(h / q[3]) * q[3]; x + q[1] * g + q[2] * g.sqrt() * r.normal() }),
        })
    }

    /// The values that one path or copula draw costs, as the JS `cost` (for the limit of 20,000 for each replicate).
    pub fn cost(id: &str, p: &[V]) -> f64 {
        if is_copula(id) { return arg(id, p, "d").filter(|d| d.fract() == 0.0).map_or(1.0, |d| d + 2.0) }
        arg(id, p, "steps").unwrap_or(1.0) * arg(id, p, "coarsen").unwrap_or(1.0) + 1.0
    }

    /// The time of each point of a path (for the plots), or None for a copula.
    pub fn times(id: &str, p: &[V]) -> Option<Vec<f64>> {
        if is_copula(id) { return None }
        let n = arg(id, p, "steps")?;
        Some((0..=n as usize).map(|k| arg(id, p, "T").map_or(k as f64, |t| k as f64 * t / n)).collect())
    }
}
```

```rust
//| caption: The models: compile, run, estimate, decide, enumerate and multilevel Monte Carlo.
mod model {
    //! The models: the model text, its compiled form, runs with each method, the intervals, the decision, the exact
    //! reference by enumeration and multilevel Monte Carlo.
    use super::*;
    use crate::expr::*;
    use crate::{built, cat, dep};
    use built::{Custom, LawLine};

    /// A law of a variable: a catalogue law, a constructed law, a copula or a process, or a law line of the model.
    #[derive(Clone, Debug, PartialEq)]
    pub enum Law { Cat(&'static str), Built(String), Dep(&'static str), Line(usize) }

    fn law_of(id: &str, lines: &[LawLine]) -> Option<Law> {
        if let Some(i) = lines.iter().position(|l| l.name == id) { return Some(Law::Line(i)) }
        if let Some(l) = cat::LAWS.iter().find(|l| l.0 == id) { return Some(Law::Cat(l.0)) }
        if let Some(l) = dep::LAWS.iter().find(|l| l.0 == id) { return Some(Law::Dep(l.0)) }
        built::params(id).map(|_| Law::Built(id.into()))
    }

    /// The parameters of a law, with their default expressions.
    fn law_params(law: &Law, lines: &[LawLine]) -> Vec<(String, Option<String>)> {
        match law {
            Law::Cat(id) => cat::LAWS.iter().find(|l| l.0 == *id).unwrap().2.iter().map(|n| (n.to_string(), None)).collect(),
            Law::Built(id) => built::params(id).unwrap_or_default(),
            Law::Dep(id) => dep::LAWS.iter().find(|l| l.0 == *id).unwrap().2.iter().map(|(n, d)| (n.to_string(), d.map(String::from))).collect(),
            Law::Line(i) => lines[*i].params.iter().map(|n| (n.clone(), None)).collect(),
        }
    }

    pub fn law_name(law: &Law, lines: &[LawLine]) -> String {
        match law {
            Law::Cat(id) => cat::LAWS.iter().find(|l| l.0 == *id).unwrap().1.into(),
            Law::Built(id) => built::name(id),
            Law::Dep(id) => dep::LAWS.iter().find(|l| l.0 == *id).unwrap().1.into(),
            Law::Line(i) => format!("custom law {}", lines[*i].name),
        }
    }

    /// A scalar law with its arguments, for quantiles, the exact PMF or PDF and the moments.
    pub struct Bound<'a> { pub law: &'a Law, pub p: Vec<V>, pub c: Option<&'a Custom> }
    impl Bound<'_> {
        pub fn discrete(&self) -> bool {
            match self.law { Law::Cat(id) => cat::discrete(id), Law::Built(id) => built::discrete(id), Law::Line(_) => self.c.unwrap().discrete(), Law::Dep(_) => false }
        }
        pub fn quantile(&self, u: f64) -> f64 {
            match self.law { Law::Cat(id) => cat::quantile(id, &self.p, u), Law::Built(id) => built::quantile(id, &self.p, u), _ => self.c.map_or(f64::NAN, |c| c.quantile(u)) }
        }
        pub fn cdf(&self, x: f64) -> f64 {
            match self.law { Law::Cat(id) => cat::cdf(id, &self.p, x), Law::Built(id) => built::cdf(id, &self.p, x), _ => self.c.map_or(f64::NAN, |c| c.cdf(x)) }
        }
        pub fn sf(&self, x: f64) -> f64 {
            match self.law { Law::Cat(id) => cat::sf(id, &self.p, x), Law::Built(id) => built::sf(id, &self.p, x), _ => self.c.map_or(f64::NAN, |c| c.sf(x)) }
        }
        pub fn pdf(&self, x: f64) -> f64 {
            match self.law { Law::Cat(id) => cat::pdf(id, &self.p, x), Law::Built(id) => built::pdf(id, &self.p, x), _ => self.c.map_or(f64::NAN, |c| c.pdf(x)) }
        }
        pub fn support(&self) -> (f64, f64) {
            match self.law { Law::Cat(id) => cat::support(id, &self.p), Law::Built(id) => built::support(id, &self.p), _ => self.c.map_or((-INF, INF), |c| c.support()) }
        }
        pub fn moments(&self) -> (Option<f64>, Option<f64>) {
            match self.law { Law::Cat(id) => cat::moments(id, &self.p), Law::Built(id) => built::moments(id, &self.p), _ => self.c.map_or((None, None), |c| c.moments()) }
        }
        pub fn order(&self) -> f64 {
            match self.law { Law::Cat(id) => cat::order(id, &self.p), Law::Built(id) => built::order(id, &self.p), _ => self.c.map_or(f64::NAN, |c| c.order()) }
        }
    }

    /// A random variable: its law, its argument expressions, the uniform u of an inverse transform, its copies, and
    /// for each alternative its arguments when they read only parameters (and its tabulated law line).
    pub struct Var { pub law: Law, pub args: Vec<Ex>, pub u: Option<Ex>, pub repeat: usize, pub constant: bool, pub fixed: Vec<Vec<V>>, pub lines: Vec<Option<Custom>> }
    pub enum Item { Var(Var), Def(Ex) }
    pub struct Node { pub name: String, pub slot: usize, pub unit: String, pub note: String, pub reads: Vec<String>, pub item: Item }
    /// A quantity: 'p' a probability, 'm' an expectation, 'r' a ratio of expectations (a / b).
    pub struct Qty { pub name: String, pub kind: char, pub a: Ex, pub b: Option<Ex>, pub unit: String, pub note: String }

    /// The model record, as the model text states it.
    #[derive(Default, Clone)]
    pub struct Rec {
        pub title: String, pub problem: String, pub texts: Vec<(String, String)>, pub focus: Option<String>, pub control: Option<(String, String)>,
        /// name, expression, unit, note
        pub params: Vec<[String; 4]>,
        /// name, law, arguments, repeat, unit, note
        pub vars: Vec<(String, String, Vec<(String, String)>, usize, String, String)>,
        pub defs: Vec<[String; 4]>,
        /// true for a variable, then its name
        pub order: Vec<(bool, String)>,
        /// name, kind, expression, denominator, unit, note
        pub quantities: Vec<(String, char, String, String, String, String)>,
        pub alts: Vec<(String, Vec<(String, String)>)>,
        pub objective: Option<(String, bool)>,
        /// quantity, ≤ (true) or ≥, value
        pub constraints: Vec<(String, bool, f64)>,
        pub laws: Vec<LawLine>,
    }

    pub const TEXT: [&str; 8] = ["title", "problem", "initial", "dynamics", "observation", "censoring", "truncation", "selection"];

    /// Split a line's tail into the expression, then repeat, {unit} and "note" from the end.
    fn tail(s: &str) -> (String, usize, String, String) {
        let mut rest = s.trim().to_string();
        let (mut note, mut unit, mut repeat) = (String::new(), String::new(), 1);
        if rest.ends_with('"') && let Some(i) = rest[..rest.len() - 1].rfind('"') { note = rest[i + 1..rest.len() - 1].into(); rest = rest[..i].trim_end().into() }
        if rest.ends_with('}') && let Some(i) = rest.rfind('{') && !rest[i + 1..rest.len() - 1].contains('}') { unit = rest[i + 1..rest.len() - 1].trim().into(); rest = rest[..i].trim_end().into() }
        if let Some(i) = rest.rfind("repeat") && (i == 0 || rest[..i].ends_with(char::is_whitespace)) && let Ok(n) = rest[i + 6..].trim().parse::<usize>()
            && rest[i + 6..].starts_with(char::is_whitespace) { repeat = n; rest = rest[..i].trim_end().into() }
        (rest, repeat, unit, note)
    }

    /// Split at the top-level separators of a list: not inside (), [] or "".
    fn split(s: &str, sep: char) -> Vec<String> {
        let (mut out, mut depth, mut quote, mut cur) = (vec![], 0, false, String::new());
        for ch in s.chars() {
            match ch {
                '"' => quote = !quote,
                _ if quote => {}
                '(' | '[' => depth += 1,
                ')' | ']' => depth -= 1,
                _ if ch == sep && depth == 0 => { out.push(std::mem::take(&mut cur)); continue }
                _ => {}
            }
            cur.push(ch);
        }
        out.push(cur);
        out.into_iter().map(|x| x.trim().to_string()).filter(|x| !x.is_empty()).collect()
    }

    /// "name = expression" pairs, or the part that is not one.
    fn pairs(parts: Vec<String>) -> Result<Vec<(String, String)>, String> {
        parts.into_iter().map(|p| match p.split_once('=') {
            Some((a, b)) if is_name(a.trim()) && !b.starts_with('=') => Ok((a.trim().to_string(), b.trim().to_string())),
            _ => Err(p.chars().take(30).collect()),
        }).collect()
    }
    fn is_name(s: &str) -> bool { s.starts_with(|c: char| c.is_ascii_alphabetic()) && s.chars().all(|c| c.is_ascii_alphanumeric() || c == '_') }

    /// The text inside E[ … ] from position i (the "["), with bracket depth: (inner, end).
    fn bracket(s: &str, i: usize) -> Option<(String, usize)> {
        let mut d = 0;
        for (j, c) in s.char_indices().skip_while(|(j, _)| *j < i) {
            if c == '[' { d += 1 } else if c == ']' { d -= 1; if d == 0 { return Some((s[i + 1..j].into(), j + 1)) } }
        }
        None
    }

    /// A law line: law NAME(p1, p2) KIND(arg) = EXPR, then the clauses on [lo, hi], where, obs, probs and grid.
    fn law_line(name: &str, params: &str, kind: &str, arg: &str, body: &str) -> Result<LawLine, String> {
        const KINDS: [&str; 9] = ["pdf", "logpdf", "density", "pmf", "table", "cdf", "quantile", "mgf", "cf"];
        if !KINDS.contains(&kind) { return Err(format!("\"{kind}\" is not an input kind of a law line ({}).", KINDS.join(", "))) }
        let (rest, repeat, ..) = tail(body);
        if repeat != 1 { return Err("a law line takes no repeat.".into()) }
        let (mut cuts, mut d, b) = (vec![], 0, rest.as_bytes());
        for i in 0..b.len() {
            match b[i] {
                b'(' | b'[' => d += 1,
                b')' | b']' => d -= 1,
                c if d == 0 && c.is_ascii_whitespace() => {
                    let w: String = rest[i..].trim_start().chars().take_while(|c| c.is_ascii_lowercase()).collect();
                    let at = i + rest[i..].len() - rest[i..].trim_start().len();
                    let ends = rest[at + w.len()..].chars().next().is_none_or(|c| !c.is_ascii_alphanumeric() && c != '_');
                    if ["on", "where", "obs", "grid", "probs"].contains(&w.as_str()) && ends && !cuts.iter().any(|c: &(usize, String, usize)| c.2 == at + w.len()) { cuts.push((i, w.clone(), at + w.len())) }
                }
                _ => {}
            }
        }
        let mut l = LawLine { name: name.into(), params: split(params, ','), kind: kind.into(), arg: arg.into(), expr: rest[..cuts.first().map_or(rest.len(), |c| c.0)].trim().into(),
            on: None, cond: None, obs: None, probs: None, grid: None };
        for (j, (_, key, from)) in cuts.iter().enumerate() {
            let v = rest[*from..cuts.get(j + 1).map_or(rest.len(), |c| c.0)].trim().to_string();
            let twice = match key.as_str() { "on" => l.on.is_some(), "where" => l.cond.is_some(), "obs" => l.obs.is_some(), "probs" => l.probs.is_some(), _ => l.grid.is_some() };
            if twice { return Err(format!("the clause {key} comes twice.")) }
            match key.as_str() {
                "on" => {
                    let ends = v.strip_prefix('[').and_then(|x| x.strip_suffix(']')).map(|x| split(x, ',')).unwrap_or_default();
                    if ends.len() != 2 { return Err("the support is written on [lo, hi], with inf for no bound.".into()) }
                    l.on = Some((ends[0].clone(), ends[1].clone()));
                }
                "grid" => l.grid = Some(v.parse().map_err(|_| "grid takes a whole number, such as grid 4096.".to_string())?),
                "where" => l.cond = Some(v),
                "obs" => l.obs = Some(v),
                _ => l.probs = Some(v),
            }
        }
        if l.expr.is_empty() { return Err("the law has no expression after =.".into()) }
        Ok(l)
    }

    /// Read model text into a record, with each error as "Line n: …".
    pub fn parse(text: &str) -> (Rec, Vec<String>) {
        let (mut r, mut errors) = (Rec { title: "Untitled model".into(), ..Default::default() }, vec![]);
        let lines: Vec<&str> = text.lines().collect();
        if lines.len() > 200 { errors.push("The model text has more than 200 lines.".into()) }
        for (k, raw) in lines.iter().take(200).enumerate() {
            let (line, at) = (raw.trim(), format!("Line {}", k + 1));
            if line.is_empty() || line.starts_with('#') { continue }
            let word: String = line.chars().take_while(|c| c.is_ascii_alphanumeric() || *c == '_').collect();
            let after = line[word.len()..].trim_start();
            let mut err = |e: String| errors.push(format!("{at}: {e}"));
            if after.starts_with(':') && !after.starts_with(":=") && TEXT.contains(&word.as_str()) {
                let v = after[1..].trim().to_string();
                match word.as_str() { "title" => r.title = v, "problem" => r.problem = v, _ => r.texts.push((word, v)) }
            } else if word == "focus" && !after.is_empty() {
                r.focus = Some(after.into());
            } else if word == "law" && let Some(rest) = after.strip_prefix(|c: char| c.is_ascii_alphabetic()).map(|_| after) {
                // law NAME(params) KIND(arg) = EXPR …
                let name: String = rest.chars().take_while(|c| c.is_ascii_alphanumeric() || *c == '_').collect();
                let mut s = rest[name.len()..].trim_start();
                let mut params = "";
                if s.starts_with('(') && let Some(e) = s.find(')') { params = &s[1..e]; s = s[e + 1..].trim_start() }
                let kind: String = s.chars().take_while(|c| c.is_ascii_lowercase()).collect();
                let s2 = s[kind.len()..].trim_start();
                let (Some(a), Some(eq)) = (s2.strip_prefix('(').and_then(|x| x.split_once(')')), None::<()>.or(Some(()))) else { err(format!("\"{}\" is not a line of the model text.", line.chars().take(40).collect::<String>())); continue };
                let _ = eq;
                let Some(body) = a.1.trim_start().strip_prefix('=') else { err(format!("\"{}\" is not a line of the model text.", line.chars().take(40).collect::<String>())); continue };
                match law_line(&name, params, &kind, a.0.trim(), body) { Ok(l) => r.laws.push(l), Err(e) => err(e) }
            } else if word == "control" && let Some((n, e)) = after.split_once('=') && is_name(n.trim()) {
                r.control = Some((n.trim().into(), tail(e).0));
            } else if word == "param" && let Some((n, e)) = after.split_once('=') && is_name(n.trim()) {
                let (e, _, u, note) = tail(e);
                r.params.push([n.trim().into(), e, u, note]);
            } else if after.starts_with('~') && is_name(&word) {
                let s = after[1..].trim_start();
                let law: String = s.chars().take_while(|c| c.is_ascii_alphanumeric() || *c == '_').collect();
                let s = s[law.len()..].trim_start();
                let Some(close) = s.starts_with('(').then(|| s.rfind(')')).flatten() else { err(format!("\"{}\" is not a line of the model text.", line.chars().take(40).collect::<String>())); continue };
                let (rest, repeat, unit, note) = tail(&s[close + 1..]);
                if !rest.is_empty() { err(format!("\"{}\" after the law is not repeat, {{unit}} or \"note\".", rest.chars().take(30).collect::<String>())); continue }
                match pairs(split(&s[1..close], ',')) {
                    Ok(args) => { r.vars.push((word.clone(), law, args, repeat, unit, note)); r.order.push((true, word)) }
                    Err(p) => err(format!("the argument \"{p}\" is not name = expression.")),
                }
            } else if after.starts_with(":=") && is_name(&word) {
                let (e, _, u, note) = tail(&after[2..]);
                r.defs.push([word.clone(), e, u, note]);
                r.order.push((false, word));
            } else if (word == "prob" || word == "mean") && let Some((n, e)) = after.split_once('=') && is_name(n.trim()) {
                let (e, _, u, note) = tail(e);
                r.quantities.push((n.trim().into(), if word == "prob" { 'p' } else { 'm' }, e, String::new(), u, note));
            } else if word == "ratio" && let Some((n, e)) = after.split_once('=') && is_name(n.trim()) {
                let (e, _, u, note) = tail(e);
                let e = e.trim();
                let a = e.starts_with("E[").then(|| bracket(e, 1)).flatten();
                let b = a.as_ref().and_then(|(_, end)| e[*end..].trim_start().strip_prefix('/')).map(str::trim_start).filter(|x| x.starts_with("E[")).and_then(|x| bracket(x, 1).map(|b| (b, x)));
                match (a, b) {
                    (Some((num, _)), Some(((den, end), x))) if x[end..].trim().is_empty() => r.quantities.push((n.trim().into(), 'r', num.trim().into(), den.trim().into(), u, note)),
                    _ => err("a ratio is written ratio name = E[numerator] / E[denominator].".into()),
                }
            } else if word == "alt" && after.starts_with('"') && let Some(q) = after[1..].find('"') {
                let label = after[1..1 + q].to_string();
                let rest = after[q + 2..].trim();
                let set = if rest.is_empty() { Ok(vec![]) } else if let Some(x) = rest.strip_prefix(':') { pairs(split(x, ';')) } else { Err(rest.into()) };
                match set { Ok(s) => r.alts.push((label, s)), Err(p) => err(format!("the setting \"{p}\" is not name = expression.")) }
            } else if (word == "maximise" || word == "minimise") && is_name(after) {
                r.objective = Some((after.into(), word == "maximise"));
            } else if word == "require" && let Some(i) = after.find(['<', '>']) && after[i + 1..].starts_with('=') && let Ok(v) = after[i + 2..].trim().parse::<f64>() && is_name(after[..i].trim()) {
                r.constraints.push((after[..i].trim().into(), &after[i..i + 1] == "<", v));
            } else {
                err(format!("\"{}\" is not a line of the model text.", line.chars().take(40).collect::<String>()));
            }
        }
        if r.alts.is_empty() { r.alts.push(("As stated".into(), vec![])) }
        (r, errors)
    }

    /// The settings of a run.
    #[derive(Clone)]
    pub struct Settings { pub seed: u64, pub method: String, pub compare: String, pub failure: String, pub overrides: Vec<(String, String)>, pub common: bool, pub strata: u32, pub stratify: String }
    impl Default for Settings {
        fn default() -> Self { Settings { seed: 2026, method: "independent".into(), compare: "none".into(), failure: "none".into(), overrides: vec![], common: true, strata: 4, stratify: String::new() } }
    }

    /// The methods: the sampler of every law and the design of the estimator ('p' plain, 's' stratified, 'a' antithetic, 'c' control).
    pub const METHODS: [(&str, &str, char); 7] = [("independent", "Independent sampling", 'p'), ("inverse", "Inverse transform", 'p'), ("rejection", "Rejection sampling", 'p'),
        ("euler", "Euler time discretisation", 'p'), ("stratified", "Stratification", 's'), ("antithetic", "Antithetic variables", 'a'), ("control", "Control variates", 'c')];
    fn kind_of(method: &str, failure: &str) -> Kind {
        match method {
            "inverse" | "stratified" | "antithetic" => Kind::Inverse { cut: if failure == "table_cut" { 0.99 } else { 1.0 } },
            "rejection" => Kind::Rejection { scale: if failure == "envelope" { 0.5 } else { 1.0 } },
            "euler" => Kind::Euler,
            _ => Kind::Reference,
        }
    }
    pub fn design(method: &str) -> char { METHODS.iter().find(|m| m.0 == method).map_or('p', |m| m.2) }

    /// "a=1; b=[0.2, 0.8]" as name and value pairs, at the top-level semicolons.
    pub fn overrides(text: &str) -> Result<Vec<(String, String)>, String> {
        pairs(split(text, ';')).map_err(|p| format!("\"{p}\" is not name = value."))
    }

    /// A compiled model.
    pub struct Model {
        pub rec: Rec, pub names: Vec<String>, pub params: usize, pub nodes: Vec<Node>, pub qs: Vec<Qty>, pub alts: Vec<(String, Vec<V>)>,
        pub focus: (String, usize), pub control: Option<(String, Ex, Vec<Option<(f64, f64)>>)>, pub stratify: Option<usize>, pub settings: Settings,
        /// The values that one replicate of one alternative draws, about.
        pub cost: f64,
    }
    impl Model {
        pub fn slot(&self, name: &str) -> Option<usize> { self.names.iter().position(|n| n == name) }
        pub fn node(&self, name: &str) -> Option<&Node> { self.nodes.iter().find(|n| n.name == name) }
        /// The arguments of a variable in an environment.
        pub fn args(&self, v: &Var, a: usize, env: &[V]) -> Result<Vec<V>, String> {
            if v.constant { return Ok(v.fixed[a].clone()) }
            v.args.iter().map(|e| eval(e, env)).collect()
        }
        /// The bound law of a scalar variable with arguments that read only parameters, in alternative a.
        pub fn bound<'a>(&'a self, n: &'a Node, a: usize) -> Option<Bound<'a>> {
            let Item::Var(v) = &n.item else { return None };
            if !v.constant || matches!(v.law, Law::Dep(_)) || matches!(&v.law, Law::Cat(id) if cat::dim(id, &v.fixed[a]) > 0) { return None }
            Some(Bound { law: &v.law, p: v.fixed[a].clone(), c: v.lines.get(a).and_then(Option::as_ref) })
        }
    }

    const RESERVED: [&str; 7] = ["and", "or", "not", "P", "E", "pi", "inf"];

    /// Check a model record and compile it for the settings, or give every error.
    pub fn prepare(rec: &Rec, s: &Settings) -> Result<Model, Vec<String>> {
        let mut errors: Vec<String> = vec![];
        let censor = rec.texts.iter().find(|t| t.0 == "censoring").map(|t| t.1.trim().to_string()).filter(|t| t != "none");
        let censor = censor.and_then(|c| {
            let w: Vec<&str> = c.splitn(4, ' ').collect();
            (w.len() == 4 && (w[0] == "right" || w[0] == "left") && is_name(w[1]) && w[2] == "by").then(|| (w[0] == "right", w[1].to_string(), w[3].to_string(), c.clone()))
        });
        let process = rec.vars.iter().any(|v| dep::LAWS.iter().any(|l| l.0 == v.1 && !dep::is_copula(l.0)));
        for (k, v) in &rec.texts {
            let allowed = k == "observation" || (k == "censoring" && censor.is_some()) || ((k == "initial" || k == "dynamics") && process);
            if !allowed && v.trim().to_lowercase() != "none" {
                errors.push(format!("The {k} field holds \"{}\": this group of the workbench has no {k} mechanism, so the field must be \"none\".", v.chars().take(40).collect::<String>()));
            }
        }
        if rec.params.len() > 24 { errors.push("A model has at most 24 parameters.".into()) }
        if rec.vars.len() > 16 { errors.push("A model has at most 16 random variables.".into()) }
        if rec.quantities.is_empty() || rec.quantities.len() > 8 { errors.push("A model has 1 to 8 quantities to estimate.".into()) }
        if rec.alts.len() > 4 { errors.push("A model has at most 4 decision alternatives.".into()) }
        if !errors.is_empty() { return Err(errors) }

        let mut names: Vec<String> = vec![];
        let mut kinds: Vec<char> = vec![];
        let declare = |names: &mut Vec<String>, kinds: &mut Vec<char>, name: &str, kind: char, at: &str, errors: &mut Vec<String>| -> bool {
            if !is_name(name) || name.len() > 24 { errors.push(format!("{at}: \"{name}\" is not a name (a letter, then letters, digits or _, at most 24 characters).")); return false }
            if RESERVED.contains(&name) || name == "e" || FUNCTIONS.iter().any(|f| f.0 == name) { errors.push(format!("{at}: \"{name}\" is a reserved word of the expression language.")); return false }
            if names.iter().any(|n| n == name) { errors.push(format!("{at}: \"{name}\" has two definitions.")); return false }
            names.push(name.into());
            kinds.push(kind);
            true
        };
        let expr = |src: &str, at: &str, visible: &[String], errors: &mut Vec<String>| -> Option<(Ex, Vec<String>)> {
            build(src, &|n| visible.iter().position(|m| m == n)).map_err(|e| errors.push(format!("{at}: {e}"))).ok()
        };
        for (n, _) in &s.overrides { if !rec.params.iter().any(|p| &p[0] == n) { errors.push(format!("The value for \"{n}\" names no parameter of this model.")) } }
        let mut params: Vec<(usize, Ex)> = vec![];
        for p in &rec.params {
            let visible = names.clone();
            if !declare(&mut names, &mut kinds, &p[0], 'p', &format!("Parameter {}", p[0]), &mut errors) { continue }
            let src = s.overrides.iter().find(|o| o.0 == p[0]).map_or(p[1].as_str(), |o| o.1.as_str());
            if let Some((e, _)) = expr(src, &format!("Parameter {}", p[0]), &visible, &mut errors) { params.push((names.len() - 1, e)) }
        }
        let np = names.len();
        for l in &rec.laws { if let Err(e) = built::line_check(l) { errors.push(format!("Law {}: {e}", l.name)) } }
        let mut nodes: Vec<Node> = vec![];
        let mut draws = 0.0;
        let mut censored = false;
        for (is_var, name) in &rec.order {
            let visible = names.clone();
            if *is_var {
                let v = rec.vars.iter().find(|v| &v.0 == name).unwrap();
                let at = format!("Variable {name}");
                let law = law_of(&v.1, &rec.laws);
                if !declare(&mut names, &mut kinds, name, 'v', &at, &mut errors) { continue }
                let Some(law) = law else {
                    errors.push(format!("{at}: \"{}\" is not a law of this page: a law of the catalogue, empirical, kde, mixture_, truncated_ or compound_ before one of them, a copula or a process, or a law line of the model.", v.1.chars().take(40).collect::<String>()));
                    continue;
                };
                if v.3 < 1 || v.3 > 2000 { errors.push(format!("{at}: repeat {} is not an integer in [1, 2000].", v.3)); continue }
                let (mut args, mut constant, mut reads) = (vec![], true, vec![]);
                let lname = law_name(&law, &rec.laws);
                for (pn, def) in law_params(&law, &rec.laws) {
                    let Some(src) = v.2.iter().find(|a| a.0 == pn).map(|a| a.1.clone()).or(def) else { errors.push(format!("{at}: the {lname} law needs the argument {pn}.")); continue };
                    if let Some((e, r)) = expr(&src, &format!("{at}, argument {pn}"), &visible, &mut errors) {
                        for n in r { if kinds[visible.iter().position(|m| *m == n).unwrap()] != 'p' { constant = false } if !reads.contains(&n) { reads.push(n) } }
                        args.push(e);
                    }
                }
                let dim = matches!(&law, Law::Dep(_)) || matches!(&law, Law::Cat(id) if ["multinomial", "mvnormal", "dirichlet"].contains(id));
                let mut u = None;
                if let Some(a) = v.2.iter().find(|a| a.0 == "u") {
                    if dim { errors.push(format!("{at}: the {lname} law takes no argument u. Only a scalar law takes the uniform u of its inverse transform.")) }
                    else if let Some((e, r)) = expr(&a.1, &format!("{at}, argument u"), &visible, &mut errors) { for n in r { if !reads.contains(&n) { reads.push(n) } } u = Some(e) }
                }
                let known = law_params(&law, &rec.laws);
                for a in &v.2 { if a.0 != "u" && !known.iter().any(|k| k.0 == a.0) { errors.push(format!("{at}: the {lname} law has no argument {}.", a.0)) } }
                draws += v.3 as f64 * if dim { 8.0 } else { 1.0 };
                if matches!(law, Law::Line(_)) && !constant { errors.push(format!("{at}: the arguments of the custom law {} read only parameters, because the page tabulates the law once for each parameter value.", v.1)) }
                nodes.push(Node { name: name.clone(), slot: names.len() - 1, unit: v.4.clone(), note: v.5.clone(), reads,
                    item: Item::Var(Var { law, args, u, repeat: v.3, constant, fixed: vec![], lines: vec![] }) });
            } else {
                let d = rec.defs.iter().find(|d| &d[0] == name).unwrap();
                if !declare(&mut names, &mut kinds, name, 'd', &format!("Definition {name}"), &mut errors) { continue }
                if let Some((e, r)) = expr(&d[1], &format!("Definition {name}"), &visible, &mut errors) {
                    nodes.push(Node { name: name.clone(), slot: names.len() - 1, unit: d[2].clone(), note: d[3].clone(), reads: r, item: Item::Def(e) });
                }
            }
            // The censoring nodes T_obs and T_event come as soon as T and every name of the censoring expression exist.
            if let Some((right, t, by, text)) = &censor && !censored {
                let reads = crate::expr::parse(by).ok().map(|e| { let mut n = vec![]; names_of(&e, &mut n); n });
                if names.contains(t) && reads.as_ref().is_some_and(|r| r.iter().all(|n| names.contains(n))) {
                    censored = true;
                    let at = format!("Censoring \"{}\"", text.chars().take(40).collect::<String>());
                    if reads.unwrap().contains(t) { errors.push(format!("{at}: the censoring time cannot read {t} itself.")); continue }
                    if !nodes.iter().any(|n| &n.name == t && matches!(n.item, Item::Var(_))) { errors.push(format!("{at}: \"{t}\" is not a random variable of the model.")); continue }
                    let (f, op) = if *right { ("pmin", "<=") } else { ("pmax", ">=") };
                    for (n, src) in [(format!("{t}_obs"), format!("{f}({t}, {by})")), (format!("{t}_event"), format!("{t} {op} ({by})"))] {
                        let visible = names.clone();
                        if !declare(&mut names, &mut kinds, &n, 'd', &at, &mut errors) { break }
                        if let Some((e, r)) = expr(&src, &at, &visible, &mut errors) { nodes.push(Node { name: n, slot: names.len() - 1, unit: String::new(), note: String::new(), reads: r, item: Item::Def(e) }) }
                    }
                }
            }
        }
        if let Some(c) = &censor && !censored { errors.push(format!("Censoring \"{}\": the model never defines {} or a name that the censoring expression reads.", c.3.chars().take(40).collect::<String>(), c.1)) }
        if draws > 5000.0 { errors.push(format!("One replicate draws {draws} values. The limit is 5000.")) }

        let mut qs = vec![];
        for q in &rec.quantities {
            if !is_name(&q.0) || qs.iter().any(|x: &Qty| x.name == q.0) { errors.push(format!("Quantity \"{}\": a quantity needs a unique name.", q.0)); continue }
            let at = if q.1 == 'r' { format!("Quantity {}, numerator", q.0) } else { format!("Quantity {}", q.0) };
            let a = expr(&q.2, &at, &names, &mut errors);
            let b = if q.1 == 'r' { expr(&q.3, &format!("Quantity {}, denominator", q.0), &names, &mut errors).map(|x| Some(x.0)) } else { Some(None) };
            if let (Some(a), Some(b)) = (a, b) { qs.push(Qty { name: q.0.clone(), kind: q.1, a: a.0, b, unit: q.4.clone(), note: q.5.clone() }) }
        }

        // Alternatives: each sets some parameters; the rest keep their values.
        let mut alts = vec![];
        for (label, set) in &rec.alts {
            let mut env = vec![V::N(0.0); names.len()];
            for (n, _) in set { if !rec.params.iter().any(|p| &p[0] == n) { errors.push(format!("Alternative \"{label}\": \"{n}\" is not a parameter.")) } }
            for (slot, e) in &params {
                let mut e = e.clone();
                if let Some((_, src)) = set.iter().find(|x| x.0 == names[*slot]) && !s.overrides.iter().any(|o| o.0 == names[*slot]) {
                    match expr(src, &format!("Alternative \"{label}\", parameter {}", names[*slot]), &names[..*slot], &mut errors) { Some(x) => e = x.0, None => continue }
                }
                match eval(&e, &env) {
                    Ok(v) if v.list().iter().any(|x| x.is_nan()) => errors.push(format!("Alternative \"{label}\", parameter {}: the value is not a number", names[*slot])),
                    Ok(v) => env[*slot] = v,
                    Err(m) => errors.push(format!("Alternative \"{label}\", parameter {}: {m}", names[*slot])),
                }
            }
            alts.push((label.clone(), env));
        }
        // The fixed arguments, their checks and the tabulated law lines, for each alternative.
        let mut path_draws = 0.0;
        for n in nodes.iter_mut() {
            let Item::Var(v) = &mut n.item else { continue };
            let mut most: f64 = 0.0;
            for (label, env) in &alts {
                let p: Result<Vec<V>, String> = if v.constant { v.args.iter().map(|e| eval(e, env)).collect() } else { Ok(vec![]) };
                let p = match p { Ok(p) => p, Err(e) => { errors.push(format!("Variable {} in \"{label}\": {e}", n.name)); vec![] } };
                if v.constant && p.len() == v.args.len() {
                    let bad = match &v.law {
                        Law::Cat(id) => cat::check(id, &p), Law::Built(id) => built::check(id, &p), Law::Dep(id) => dep::check(id, &p),
                        Law::Line(i) => {
                            let f: Vec<f64> = p.iter().map(|x| x.num().unwrap_or(f64::NAN)).collect();
                            match built::custom(&rec.laws[*i], &f) { Ok(c) => { v.lines.push(Some(c)); Ok(()) } Err(e) => { v.lines.push(None); Err(e) } }
                        }
                    };
                    if let Err(e) = bad { errors.push(format!("Variable {} in \"{label}\": {e}", n.name)) }
                    else if let Law::Dep(id) = v.law { most = most.max(dep::cost(id, &p)) }
                } else { v.lines.push(None) }
                v.fixed.push(p);
            }
            path_draws += v.repeat as f64 * most;
        }
        if path_draws > 20000.0 { errors.push(format!("One replicate draws about {path_draws} values for its paths and copulas. The limit is 20000: lower steps or coarsen.")) }
        for m in [&s.method, &s.compare] { if m != "none" && !METHODS.iter().any(|x| x.0 == m) { errors.push(format!("The method \"{m}\" is not part of this page.")) } }
        if !(1..=6).contains(&s.strata) { errors.push("The number of strata is 2^s with s an integer from 1 to 6.".into()) }
        if !errors.is_empty() { return Err(errors) }

        let focus = rec.focus.clone().filter(|f| names.contains(&f.split('[').next().unwrap().to_string()))
            .or_else(|| nodes.iter().find(|n| matches!(n.item, Item::Var(_))).or(nodes.first()).map(|n| n.name.clone())).unwrap_or_default();
        let focus = match focus.split_once('[') { Some((a, b)) => (a.to_string(), b.trim_end_matches(']').parse().unwrap_or(0)), None => (focus, 0) };
        let designs: Vec<char> = [&s.method, &s.compare].iter().filter(|m| **m != "none").map(|m| design(m)).collect();
        let mut m = Model { rec: rec.clone(), names, params: np, nodes, qs, alts, focus, control: None, stratify: None, settings: s.clone(), cost: draws + path_draws };
        if let Some((cn, ce)) = &rec.control {
            if let Some((e, _)) = expr(ce, &format!("Control {cn}"), &m.names, &mut errors) {
                let exact: Vec<Option<(f64, f64)>> = (0..m.alts.len()).map(|a| control_moments(&m, &e, a)).collect();
                let used = exact.iter().map(|x| x.map(|(mu, sd)| (mu + if s.failure == "control_mean" { 0.1 * sd } else { 0.0 }, sd))).collect();
                if designs.contains(&'c') && let Some(a) = exact.iter().position(Option::is_none) {
                    errors.push(format!("Control {cn}: the page cannot compute its exact mean (alternative \"{}\").", m.alts[a].0));
                }
                m.control = Some((cn.clone(), e, used));
            }
        } else if designs.contains(&'c') { errors.push("The control-variate method needs a control: add a line such as control C = X, with X a random variable whose mean the page knows.".into()) }
        if designs.contains(&'s') {
            let scalar = |n: &Node| matches!(&n.item, Item::Var(v) if v.repeat == 1 && !matches!(v.law, Law::Dep(_)) && !matches!(&v.law, Law::Cat(id) if ["multinomial", "mvnormal", "dirichlet"].contains(id)));
            let pick = if s.stratify.is_empty() { m.nodes.iter().position(|n| n.name == m.focus.0 && scalar(n)).or_else(|| m.nodes.iter().position(scalar)) }
                else { m.nodes.iter().position(|n| n.name == s.stratify && scalar(n)) };
            match pick {
                Some(i) => m.stratify = Some(i),
                None if s.stratify.is_empty() => errors.push("Stratification needs a scalar random variable with no repeat, and this model has none.".into()),
                None => errors.push(format!("The stratified variable {} is not a scalar random variable with no repeat of this model.", s.stratify)),
            }
        }
        if !errors.is_empty() { return Err(errors) }
        Ok(m)
    }

    fn names_of(e: &Ex, out: &mut Vec<String>) { names(e, out) }

    /// The exact mean and standard deviation of a control: an affine function of one scalar variable whose arguments
    /// read only parameters.
    fn control_moments(m: &Model, e: &Ex, a: usize) -> Option<(f64, f64)> {
        let (b0, b1, slot) = affine(m, e, a)?;
        let Some(slot) = slot else { return Some((b0, 0.0)) };
        let n = m.nodes.iter().find(|n| n.slot == slot)?;
        let (mu, var) = m.bound(n, a)?.moments();
        Some((b0 + b1 * mu?, b1.abs() * var?.sqrt()))
    }

    /// b0 + b1 X for one variable X (its slot), or a constant (no slot).
    fn affine(m: &Model, e: &Ex, a: usize) -> Option<(f64, f64, Option<usize>)> {
        let env = &m.alts[a].1;
        Some(match e {
            Ex::Num(x) => (*x, 0.0, None),
            Ex::Slot(i) if *i < m.params => (env[*i].num()?, 0.0, None),
            Ex::Slot(i) => match &m.nodes.iter().find(|n| n.slot == *i)?.item { Item::Var(v) if v.repeat == 1 && v.u.is_none() => (0.0, 1.0, Some(*i)), Item::Def(d) => affine(m, d, a)?, _ => return None },
            Ex::Un('-', x) => { let (c, d, s) = affine(m, x, a)?; (-c, -d, s) }
            Ex::Bin(op, x, y) => {
                let ((c1, d1, s1), (c2, d2, s2)) = (affine(m, x, a)?, affine(m, y, a)?);
                match *op {
                    "+" | "-" if s1.is_none() || s2.is_none() || s1 == s2 => { let k = if *op == "-" { -1.0 } else { 1.0 }; (c1 + k * c2, d1 + k * d2, s1.or(s2)) }
                    "*" if s1.is_none() => (c1 * c2, c1 * d2, s2),
                    "*" if s2.is_none() => (c1 * c2, d1 * c2, s1),
                    "/" if s2.is_none() => (c1 / c2, d1 / c2, s1),
                    _ => return None,
                }
            }
            _ => return None,
        })
    }

    /// The moment orders of the left and right tails of an expression, from the laws it reads; None when unknown.
    fn tails(m: &Model, e: &Ex, a: usize) -> Option<(f64, f64)> {
        let both = |x: (f64, f64), y: (f64, f64)| (x.0.min(y.0), x.1.min(y.1));
        Some(match e {
            Ex::Num(_) => (INF, INF),
            Ex::Slot(i) if *i < m.params => (INF, INF),
            Ex::Slot(i) => {
                let n = m.nodes.iter().find(|n| n.slot == *i)?;
                match &n.item {
                    Item::Def(d) => tails(m, d, a)?,
                    Item::Var(_) => {
                        let b = m.bound(n, a)?;
                        let (lo, hi) = b.support();
                        let o = b.order();
                        (if lo > -INF { INF } else { o }, if hi < INF { INF } else { o })
                    }
                }
            }
            Ex::Idx(x, _) => tails(m, x, a)?,
            Ex::Un('-', x) => { let t = tails(m, x, a)?; (t.1, t.0) }
            Ex::Un(..) => (INF, INF),
            Ex::Bin(op, x, y) => match *op {
                "+" => both(tails(m, x, a)?, tails(m, y, a)?),
                "-" => { let t = tails(m, y, a)?; both(tails(m, x, a)?, (t.1, t.0)) }
                "*" | "/" => {
                    let k = match (&**x, &**y) { (Ex::Num(k), z) | (z, Ex::Num(k)) if *op == "*" || matches!(**y, Ex::Num(_)) => Some((*k, z)), _ => None };
                    let (k, z) = k?;
                    let t = tails(m, z, a)?;
                    if k == 0.0 { (INF, INF) } else if k > 0.0 { t } else { (t.1, t.0) }
                }
                "^" => { let (Ex::Num(k), t) = (&**y, tails(m, x, a)?) else { return None }; if *k <= 0.0 { return None } (INF, t.0.min(t.1) / k) }
                _ => (INF, INF),
            },
            Ex::Call(f, v) => match *f {
                "pmax" | "max" => v.iter().map(|x| tails(m, x, a)).collect::<Option<Vec<_>>>()?.into_iter().fold((0.0, INF), |s, t| (s.0.max(t.0), s.1.min(t.1))),
                "pmin" | "min" => v.iter().map(|x| tails(m, x, a)).collect::<Option<Vec<_>>>()?.into_iter().fold((INF, 0.0), |s, t| (s.0.min(t.0), s.1.max(t.1))),
                "abs" => { let t = tails(m, &v[0], a)?; (INF, t.0.min(t.1)) }
                "sum" | "mean" | "floor" | "ceil" | "round" | "last" => tails(m, &v[0], a)?,
                "if" => both(tails(m, &v[1], a)?, tails(m, &v[2], a)?),
                "any" | "all" | "count" | "len" | "distinct" | "maxcount" | "first" => (INF, INF),
                _ => return None,
            },
            _ => return None,
        })
    }

    /// Whether the mean and the variance of quantity k exist in alternative a: Some(true), Some(false) or None (unknown).
    pub fn status(m: &Model, k: usize, a: usize) -> (Option<bool>, Option<bool>) {
        let q = &m.qs[k];
        if q.kind == 'p' { return (Some(true), Some(true)) }
        if q.kind == 'r' { return (None, None) }
        match tails(m, &q.a, a) {
            Some((l, r)) => { let o = l.min(r); (Some(o > 1.0), Some(o > 2.0)) }
            None => (None, None),
        }
    }

    /// Bivariate Welford sums of (value, denominator or control), the hits, the strata and the single values of
    /// antithetic pairs.
    #[derive(Clone, Default, Debug)]
    pub struct Acc { pub n: f64, pub mean: f64, pub m2: f64, pub mb: f64, pub cbb: f64, pub cab: f64, pub hits: f64, pub st: Vec<Acc>, pub ind: Option<Box<Acc>> }
    impl Acc {
        fn new(design: char, k: usize) -> Acc {
            Acc { st: if design == 's' { vec![Acc::default(); k] } else { vec![] }, ind: (design == 'a').then(Box::default), ..Default::default() }
        }
        fn add(&mut self, x: f64, y: f64) {
            let n = self.n + 1.0;
            let (dx, dy) = (x - self.mean, y - self.mb);
            self.mean += dx / n;
            self.mb += dy / n;
            self.m2 += dx * (x - self.mean);
            self.cbb += dy * (y - self.mb);
            self.cab += dx * (y - self.mb);
            self.n = n;
        }
        /// Chan, Golub and LeVeque: two summaries as one, stratum by stratum.
        pub fn combine(&self, y: &Acc) -> Acc {
            if self.n == 0.0 { return y.clone() }
            if y.n == 0.0 { return self.clone() }
            let n = self.n + y.n;
            let (d, db, w) = (y.mean - self.mean, y.mb - self.mb, self.n * y.n / n);
            Acc { n, mean: self.mean + d * y.n / n, m2: self.m2 + y.m2 + d * d * w, mb: self.mb + db * y.n / n, cbb: self.cbb + y.cbb + db * db * w,
                cab: self.cab + y.cab + d * db * w, hits: self.hits + y.hits, st: self.st.iter().zip(&y.st).map(|(a, b)| a.combine(b)).collect(),
                ind: self.ind.as_ref().zip(y.ind.as_ref()).map(|(a, b)| Box::new(a.combine(b))) }
        }
    }

    /// An estimate with its 95 % interval and how the page computed it.
    #[derive(Clone, Debug, Default)]
    pub struct Iv { pub est: Option<f64>, pub lo: Option<f64>, pub hi: Option<f64>, pub se: Option<f64>, pub how: String }
    fn iv(est: f64, se: f64, how: String) -> Iv { Iv { est: Some(est), lo: Some(est - Z95 * se), hi: Some(est + Z95 * se), se: Some(se), how } }
    fn bare(est: Option<f64>, how: &str) -> Iv { Iv { est, how: how.into(), ..Default::default() } }
    const NO_CLT: &str = "no interval: the variance is infinite, so the central limit theorem does not apply";

    /// The estimate and the 95 % interval that fit the estimator and its design (see the notebook text).
    pub fn interval(kind: char, s: &Acc, infinite: bool, design: char, mu: Option<f64>) -> Iv {
        let n = s.n;
        if n == 0.0 { return bare(None, "no replicates") }
        if design == 'p' || (design == 'c' && (kind == 'r' || mu.is_none())) { return plain(kind, s, infinite, "delta-method interval for a ratio of means, 95 %") }
        let evals = if design == 'a' { 2.0 * n } else { n };
        if kind == 'p' && (s.hits == 0.0 || s.hits == evals) {
            let m = if design == 'a' { n } else { evals };
            let (b, all) = (zero_hit(m, 0.05), s.hits != 0.0);
            let from = if design == 'a' { format!("from {m} independent pairs") } else { "1 − 0.05^(1/n)".into() };
            return Iv { est: Some(if all { 1.0 } else { 0.0 }), lo: Some(if all { 1.0 - b } else { 0.0 }), hi: Some(if all { 1.0 } else { b }), se: Some(0.0),
                how: format!("{}: exact one-sided 95 % bound {from}", if all { "all hits" } else { "zero hits" }) };
        }
        match design {
            'a' => {
                if kind == 'r' { return plain('r', s, infinite, "delta-method interval for a ratio of the antithetic pair means, 95 %") }
                if n < 2.0 { return bare(Some(s.mean), "one antithetic pair") }
                if infinite { return bare(Some(s.mean), NO_CLT) }
                iv(s.mean, (s.m2 / (n - 1.0) / n).sqrt(), format!("CLT interval of {n} antithetic pair means, 95 %, asymptotic"))
            }
            's' => {
                let (k, w) = (s.st.len(), 1.0 / s.st.len() as f64);
                if s.st.iter().any(|t| t.n < 2.0) { return bare(Some(s.mean), "no interval: a stratum holds fewer than 2 replicates") }
                if kind == 'r' {
                    let (a, b) = s.st.iter().fold((0.0, 0.0), |(a, b), t| (a + w * t.mean, b + w * t.mb));
                    if b == 0.0 { return bare(None, "the denominator mean is 0") }
                    let r = a / b;
                    let v: f64 = s.st.iter().map(|t| w * w * (t.m2 - 2.0 * r * t.cab + r * r * t.cbb).max(0.0) / (t.n - 1.0) / t.n).sum();
                    return iv(r, v.sqrt() / b.abs(), format!("delta-method interval for a ratio, {k} strata, 95 %"));
                }
                let est: f64 = s.st.iter().map(|t| w * t.mean).sum();
                if infinite { return bare(Some(est), NO_CLT) }
                iv(est, s.st.iter().map(|t| w * w * t.m2 / (t.n - 1.0) / t.n).sum::<f64>().sqrt(), format!("stratified CLT interval, {k} equal strata, 95 %, asymptotic"))
            }
            _ => {
                // Control variate: the regression of the quantity on the control, at the control mean.
                let mu = mu.unwrap();
                if n < 3.0 { return bare(Some(s.mean), "fewer than 3 replicates") }
                let beta = if s.cbb > 0.0 { s.cab / s.cbb } else { 0.0 };
                let est = s.mean - beta * (s.mb - mu);
                if infinite { return bare(Some(est), NO_CLT) }
                let resid = (s.m2 - if s.cbb > 0.0 { s.cab * s.cab / s.cbb } else { 0.0 }).max(0.0) / (n - 2.0);
                let se = (resid * (1.0 / n + if s.cbb > 0.0 { (s.mb - mu).powi(2) / s.cbb } else { 0.0 })).sqrt();
                iv(est, se, format!("control-variate interval, β̂ = {}, 95 %, asymptotic", sig(beta, 4)))
            }
        }
    }

    fn plain(kind: char, s: &Acc, infinite: bool, ratio_how: &str) -> Iv {
        let n = s.n;
        match kind {
            'p' => {
                let (k, est) = (s.hits, s.hits / n);
                let b = zero_hit(n, 0.05);
                if k == 0.0 { return Iv { est: Some(est), lo: Some(0.0), hi: Some(b), se: Some(0.0), how: "zero hits: exact one-sided 95 % bound 1 − 0.05^(1/n)".into() } }
                if k == n { return Iv { est: Some(est), lo: Some(1.0 - b), hi: Some(1.0), se: Some(0.0), how: "all hits: exact one-sided 95 % bound".into() } }
                let w = wilson(k, n, Z95);
                Iv { est: Some(est), lo: Some(w.0), hi: Some(w.1), se: Some((est * (1.0 - est) / n).sqrt()), how: "Wilson score interval, 95 %".into() }
            }
            'r' => {
                if s.mb == 0.0 || n < 2.0 { return bare(None, "the denominator mean is 0") }
                let r = s.mean / s.mb;
                let (va, vb, cab) = (s.m2 / (n - 1.0), s.cbb / (n - 1.0), s.cab / (n - 1.0));
                iv(r, ((va - 2.0 * r * cab + r * r * vb).max(0.0) / n).sqrt() / s.mb.abs(), ratio_how.into())
            }
            _ => {
                if n < 2.0 { return bare(Some(s.mean), "one replicate") }
                if infinite { return bare(Some(s.mean), NO_CLT) }
                iv(s.mean, (s.m2 / (n - 1.0) / n).sqrt(), "CLT interval, 95 %, asymptotic".into())
            }
        }
    }

    /// A number with `d` significant digits, without trailing zeros.
    pub fn sig(x: f64, d: usize) -> String {
        if x == 0.0 || !x.is_finite() { return if x.is_nan() { "NaN".into() } else if x == 0.0 { "0".into() } else if x > 0.0 { "∞".into() } else { "−∞".into() } }
        let e = x.abs().log10().floor() as i32;
        let s = if !(-5..=9).contains(&e) {
            let m = format!("{:.*e}", d - 1, x);
            let (a, b) = m.split_once('e').unwrap();
            let a = if a.contains('.') { a.trim_end_matches('0').trim_end_matches('.') } else { a };
            format!("{a}×10^{b}")
        } else {
            let s = format!("{:.*}", (d as i32 - 1 - e).max(0) as usize, x);
            if s.contains('.') { s.trim_end_matches('0').trim_end_matches('.').into() } else { s }
        };
        s.replace('-', "−")
    }

    /// The statistics of one method over a range of replicates.
    #[derive(Clone)]
    pub struct Stats {
        pub method: String, pub design: char, pub acc: Vec<Vec<Acc>>, pub diffs: Vec<Vec<Acc>>, pub pairs: Vec<(usize, usize)>,
        /// The focus values of each alternative (at most 2^16 of them) and the first paths of a path variable.
        pub focus: Vec<Vec<f64>>, pub paths: Vec<Vec<Vec<f64>>>, pub proposals: u64, pub accepts: u64,
        /// At n = 2^4, 2^5, …: the estimate and interval of each alternative and quantity.
        pub trace: Vec<(f64, Vec<Vec<Iv>>)>,
    }

    /// The value of a quantity as a finite number.
    fn scalar(v: V, name: &str) -> Result<f64, String> {
        match v {
            V::L(_) => Err(format!("Quantity {name} gives a vector. Use sum(), mean() or an index.")),
            V::N(x) if !x.is_finite() => Err(format!("Quantity {name} is not finite ({}).", if x > 0.0 { "+∞" } else if x < 0.0 { "−∞" } else { "not a number" })),
            V::N(x) => Ok(x),
        }
    }

    /// One replicate of alternative a: definitions in order, each variable from its sampler, with the draws of
    /// replicate `i`. `flip` gives the antithetic draws; `stratum` puts the first uniform of the stratified variable in
    /// stratum k of K.
    fn simulate(m: &Model, a: usize, env: &mut [V], stream: u64, i: u64, flip: bool, k: Kind, stratum: Option<(usize, usize)>, count: &mut (u64, u64)) -> Result<(), String> {
        let seed = m.settings.seed;
        for (j, n) in m.nodes.iter().enumerate() {
            let v = match &n.item { Item::Def(e) => { env[n.slot] = eval(e, env)?; continue } Item::Var(v) => v };
            let p = m.args(v, a, env).map_err(|e| format!("Variable {}: {e}", n.name))?;
            if !v.constant {
                let bad = match &v.law { Law::Cat(id) => cat::check(id, &p), Law::Built(id) => built::check(id, &p), Law::Dep(id) => dep::check(id, &p), Law::Line(_) => Ok(()) };
                bad.map_err(|e| format!("Variable {}: {e}", n.name))?;
            }
            if let Some(u) = &v.u {
                let b = Bound { law: &v.law, p, c: v.lines.get(a).and_then(Option::as_ref) };
                let one = |x: f64| if x > 0.0 && x < 1.0 { Ok(b.quantile(x)) } else { Err(format!("Variable {}: u = {x} is outside (0, 1).", n.name)) };
                env[n.slot] = match (eval(u, env)?, v.repeat) {
                    (V::N(x), 1) => V::N(one(x)?),
                    (V::L(_), 1) => return Err(format!("Variable {}: u is a vector, so give one entry, such as U[1].", n.name)),
                    (V::L(xs), r) if xs.len() == r => V::L(xs.into_iter().map(one).collect::<Result<_, _>>()?),
                    _ => return Err(format!("Variable {}: u needs {} entries, one for each copy.", n.name, v.repeat)),
                };
                continue;
            }
            let mut one = |c: usize| -> Result<V, String> {
                let mut r = Src::new(seed, stream, i, (j * 65536 + c) as u64, flip);
                if c == 0 && let Some((s, kk)) = stratum && m.stratify == Some(j) { r.stratum(s, kk) }
                let x = match &v.law {
                    Law::Cat(id) => cat::draw(id, &p, k, &mut r), Law::Built(id) => built::draw(id, &p, k, &mut r), Law::Dep(id) => dep::draw(id, &p, k, &mut r),
                    Law::Line(_) => v.lines[a].as_ref().unwrap().draw(k, &mut r).map(V::N),
                };
                count.0 += r.proposals;
                count.1 += r.accepts;
                x.map_err(|e| format!("{}: {e}", law_name(&v.law, &m.rec.laws)))
            };
            env[n.slot] = if v.repeat == 1 { one(0)? } else { V::L((0..v.repeat).map(|c| one(c).map(|x| x.num().unwrap_or(f64::NAN))).collect::<Result<_, _>>()?) };
        }
        Ok(())
    }

    /// Replicates from..to of a method: the statistics of each alternative and quantity, the paired differences, the
    /// focus values and the trace.
    pub fn run(m: &Model, method: &str, from: u64, to: u64) -> Result<Stats, String> {
        let (s, d) = (&m.settings, design(method));
        let k = kind_of(method, &s.failure);
        let (na, nq) = (m.alts.len(), m.qs.len());
        let strata = if d == 's' { 1usize << s.strata } else { 1 };
        let pairs: Vec<(usize, usize)> = (0..na).flat_map(|a| (a + 1..na).map(move |b| (a, b))).collect();
        let mut st = Stats { method: method.into(), design: d, acc: vec![vec![Acc::new(d, strata); nq]; na], diffs: vec![vec![Acc::new(d, strata); nq]; pairs.len()], pairs: pairs.clone(),
            focus: vec![vec![]; na], paths: vec![vec![]; na], proposals: 0, accepts: 0, trace: vec![] };
        let mut envs: Vec<Vec<V>> = m.alts.iter().map(|a| a.1.clone()).collect();
        let (fslot, fidx) = (m.slot(&m.focus.0), m.focus.1);
        let path = m.node(&m.focus.0).is_some_and(|n| matches!(&n.item, Item::Var(v) if matches!(v.law, Law::Dep(id) if !dep::is_copula(id))));
        let ctl = if d == 'c' { m.control.as_ref() } else { None };
        let (mut vals, mut ys, mut held, mut held_y) = (vec![0.0; na * nq], vec![0.0; na * nq], vec![0.0; na * nq], vec![0.0; na * nq]);
        let mut held_d = vec![vec![0.0; 2 * nq]; pairs.len()];
        let mut ctls = vec![0.0; na];
        let mut count = (0, 0);
        for i in from..to {
            let second = d == 'a' && i & 1 == 1;
            let base = if d == 'a' { i - (i & 1) } else { i };
            let stream_i = if s.failure == "stream_reuse" { base % 16 } else { base };
            let stratum = (d == 's').then_some(((i % strata as u64) as usize, strata));
            for a in 0..na {
                let env = &mut envs[a];
                let stream = if a == 0 || s.common { 0 } else { a as u64 };
                simulate(m, a, env, stream, stream_i, second, k, stratum, &mut count).map_err(|e| format!("Replicate {i}: {e}"))?;
                if let Some(c) = ctl { ctls[a] = scalar(eval(&c.1, env)?, &c.0)? }
                for q in 0..nq {
                    let (qu, x) = (&m.qs[q], a * nq + q);
                    let (mut v, mut y) = (scalar(eval(&qu.a, env)?, &qu.name)?, 0.0);
                    if let Some(b) = &qu.b { y = scalar(eval(b, env)?, &qu.name)? } else if qu.kind == 'p' { v = (v != 0.0) as u8 as f64 }
                    if ctl.is_some() && qu.kind != 'r' { y = ctls[a] }
                    vals[x] = v;
                    ys[x] = y;
                    let acc = &mut st.acc[a][q];
                    if qu.kind != 'r' && v != 0.0 { acc.hits += 1.0 }
                    match d {
                        's' => { acc.st[stratum.unwrap().0].add(v, y); acc.add(v, y) }
                        'a' => { acc.ind.as_mut().unwrap().add(v, y); if second { acc.add((held[x] + v) / 2.0, (held_y[x] + y) / 2.0) } else { held[x] = v; held_y[x] = y } }
                        _ => acc.add(v, y),
                    }
                }
                if let Some(f) = fslot {
                    let xs = match &env[f] { V::N(x) => vec![*x], V::L(v) if fidx > 0 => vec![v[fidx - 1]], V::L(v) => if path { vec![v[v.len() - 1]] } else { v.clone() } };
                    if path && st.paths[a].len() < 20 && let V::L(p) = &env[f] { st.paths[a].push(p.clone()) }
                    if st.focus[a].len() < 1 << 16 { st.focus[a].extend(xs) }
                }
            }
            for (p, &(a, b)) in pairs.iter().enumerate() {
                for q in 0..nq {
                    if m.qs[q].kind == 'r' { continue }
                    let (dv, dy) = (vals[b * nq + q] - vals[a * nq + q], if ctl.is_some() { ctls[b] - ctls[a] } else { 0.0 });
                    let acc = &mut st.diffs[p][q];
                    match d {
                        's' => { acc.st[stratum.unwrap().0].add(dv, dy); acc.add(dv, dy) }
                        'a' => { acc.ind.as_mut().unwrap().add(dv, dy); if second { acc.add((held_d[p][2 * q] + dv) / 2.0, (held_d[p][2 * q + 1] + dy) / 2.0) } else { held_d[p][2 * q] = dv; held_d[p][2 * q + 1] = dy } }
                        _ => acc.add(dv, dy),
                    }
                }
            }
            let n = i + 1 - from;
            if n >= 16 && (n.is_power_of_two() || i + 1 == to) && !(d == 'a' && n & 1 == 1) { st.trace.push((n as f64, estimates(m, &st))) }
        }
        (st.proposals, st.accepts) = count;
        Ok(st)
    }

    /// The control mean that the estimator of quantity q in alternative a uses.
    fn control_mean(m: &Model, d: char, a: usize, q: usize) -> Option<f64> {
        if d != 'c' || m.qs[q].kind == 'r' { return None }
        m.control.as_ref().and_then(|c| c.2[a].map(|x| x.0))
    }

    /// The estimates and intervals of each alternative and quantity.
    pub fn estimates(m: &Model, st: &Stats) -> Vec<Vec<Iv>> {
        (0..m.alts.len()).map(|a| (0..m.qs.len()).map(|q| {
            let (mean, var) = status(m, q, a);
            let mut r = interval(m.qs[q].kind, &st.acc[a][q], var == Some(false), st.design, control_mean(m, st.design, a, q));
            if mean == Some(false) && r.lo.is_none() { r.how = "no interval: the mean is infinite or does not exist, so the sample mean has no finite limit".into() }
            r
        }).collect()).collect()
    }

    /// The paired difference b − a of each pair and quantity, with the gain of the streams (se_a² + se_b²)/se_d².
    pub fn differences(m: &Model, st: &Stats, est: &[Vec<Iv>]) -> Vec<Vec<(Iv, Option<f64>)>> {
        st.pairs.iter().enumerate().map(|(p, &(a, b))| (0..m.qs.len()).map(|q| {
            if m.qs[q].kind == 'r' { return (bare(None, "no paired interval for a ratio"), None) }
            let mu = control_mean(m, st.design, a, q).zip(control_mean(m, st.design, b, q)).map(|(x, y)| y - x);
            let heavy = [a, b].iter().any(|&x| status(m, q, x).1 == Some(false));
            let r = interval('m', &st.diffs[p][q], heavy, st.design, mu);
            let crn = match (r.se, est[a][q].se, est[b][q].se) { (Some(d), Some(x), Some(y)) if d > 0.0 && (x > 0.0 || y > 0.0) => Some((x * x + y * y) / (d * d)), _ => None };
            (r, crn)
        }).collect()).collect()
    }

    /// The decision: for each alternative the verdict on each constraint (met, not met, not separable), then the best
    /// admissible one for the objective and whether its paired intervals separate it from each other one.
    pub fn decide(m: &Model, est: &[Vec<Iv>], diffs: &[Vec<(Iv, Option<f64>)>], pairs: &[(usize, usize)]) -> (Vec<Vec<&'static str>>, Option<usize>, bool, String) {
        let qi = |n: &str| m.qs.iter().position(|q| q.name == n);
        let rows: Vec<Vec<&str>> = est.iter().map(|alt| m.rec.constraints.iter().map(|(qn, le, v)| {
            let Some(r) = qi(qn).map(|k| &alt[k]) else { return "unknown" };
            let Some(e) = r.est else { return "unknown" };
            let (lo, hi) = (r.lo.unwrap_or(e), r.hi.unwrap_or(e));
            if (*le && hi <= *v) || (!le && lo >= *v) { "met" } else if (*le && lo > *v) || (!le && hi < *v) { "not met" } else { "not separable" }
        }).collect()).collect();
        let Some((qn, max)) = &m.rec.objective else { return (rows, None, false, "The model states no objective, so the page ranks no alternatives.".into()) };
        let Some(k) = qi(qn) else { return (rows, None, false, format!("The objective names no quantity {qn}.")) };
        let sign = if *max { 1.0 } else { -1.0 };
        let ok: Vec<usize> = (0..est.len()).filter(|&a| rows[a].iter().all(|v| *v != "not met") && est[a][k].est.is_some()).collect();
        let Some(&best) = ok.iter().max_by(|&&x, &&y| (sign * est[x][k].est.unwrap()).total_cmp(&(sign * est[y][k].est.unwrap())).then(y.cmp(&x))) else {
            return (rows, None, false, "No alternative meets the constraints.".into());
        };
        let separated = ok.iter().filter(|&&a| a != best).all(|&a| {
            let Some(p) = pairs.iter().position(|&(x, y)| (x == best && y == a) || (x == a && y == best)) else { return false };
            let r = &diffs[p][k].0;
            let (Some(lo), Some(hi)) = (r.lo, r.hi) else { return false };
            let (lo, hi) = if pairs[p].0 == best { (-hi, -lo) } else { (lo, hi) };
            if sign > 0.0 { lo > 0.0 } else { hi < 0.0 }
        });
        (rows, Some(best), separated, String::new())
    }

    /// The exact value of each quantity in alternative a by enumeration of the joint support of discrete variables,
    /// and the law of the focus; or the reason that the page cannot enumerate.
    pub fn enumerate(m: &Model, a: usize) -> Result<(Vec<Option<f64>>, Vec<(f64, f64)>), String> {
        if let Some(n) = m.nodes.iter().find(|n| matches!(&n.item, Item::Var(v) if v.repeat > 1)) {
            let Item::Var(v) = &n.item else { unreachable!() };
            return Err(format!("Variable {} repeats {} times, so the page does not enumerate the joint support.", n.name, v.repeat));
        }
        let nq = m.qs.len();
        let (mut sums, mut dens, mut marg, mut states, mut neglected) = (vec![0.0; nq], vec![0.0; nq], std::collections::BTreeMap::<u64, f64>::new(), 0usize, 0.0);
        let mut env = m.alts[a].1.clone();
        let fslot = m.slot(&m.focus.0);
        fn walk(m: &Model, a: usize, i: usize, w: f64, env: &mut Vec<V>, sums: &mut [f64], dens: &mut [f64], marg: &mut std::collections::BTreeMap<u64, f64>,
            states: &mut usize, neglected: &mut f64, fslot: Option<usize>) -> Result<(), String> {
            if i == m.nodes.len() {
                *states += 1;
                if *states > 400000 { return Err("The joint support has more than 400000 states.".into()) }
                for (q, qu) in m.qs.iter().enumerate() {
                    let x = scalar(eval(&qu.a, env)?, &qu.name)?;
                    sums[q] += w * if qu.kind == 'p' { (x != 0.0) as u8 as f64 } else { x };
                    if let Some(b) = &qu.b { dens[q] += w * scalar(eval(b, env)?, &qu.name)? }
                }
                if let Some(f) = fslot {
                    let x = match &env[f] { V::N(x) => *x, V::L(v) => v[m.focus.1.max(1) - 1] };
                    *marg.entry(x.to_bits()).or_default() += w;
                }
                return Ok(());
            }
            let n = &m.nodes[i];
            let v = match &n.item { Item::Def(e) => { env[n.slot] = eval(e, env)?; return walk(m, a, i + 1, w, env, sums, dens, marg, states, neglected, fslot) } Item::Var(v) => v };
            if v.u.is_some() { return Err(format!("Variable {} takes the uniform u of a copula, so the page does not enumerate it.", n.name)) }
            let p = m.args(v, a, env)?;
            if let Law::Cat("multinomial") = v.law {
                let (nn, pr) = (p[0].num().unwrap_or(0.0), p[1].list());
                if lchoose(nn + pr.len() as f64 - 1.0, pr.len() as f64 - 1.0) > 50000f64.ln() { return Err("A multinomial variable has more than 50000 outcomes.".into()) }
                let mut x = vec![0.0; pr.len()];
                fn comp(j: usize, left: f64, x: &mut Vec<f64>, out: &mut Vec<Vec<f64>>) {
                    if j == x.len() - 1 { x[j] = left; out.push(x.clone()); return }
                    let mut v = 0.0;
                    while v <= left { x[j] = v; comp(j + 1, left - v, x, out); v += 1.0 }
                }
                let mut all = vec![];
                comp(0, nn, &mut x, &mut all);
                for x in all {
                    let lp = lgam(nn + 1.0) + x.iter().zip(&pr).map(|(k, q)| if *k == 0.0 { 0.0 } else { k * q.ln() - lgam(k + 1.0) }).sum::<f64>();
                    if lp.exp() > 0.0 { env[n.slot] = V::L(x); walk(m, a, i + 1, w * lp.exp(), env, sums, dens, marg, states, neglected, fslot)? }
                }
                return Ok(());
            }
            let b = Bound { law: &v.law, p: p.clone(), c: v.lines.get(a).and_then(Option::as_ref) };
            if matches!(v.law, Law::Dep(_)) || matches!(&v.law, Law::Cat(id) if cat::dim(id, &p) > 0) || !b.discrete() {
                return Err(format!("Variable {} has a continuous law, so the page does not enumerate it.", n.name));
            }
            let (lo, hi) = b.support();
            let (mut k, mut mass) = (lo, 0.0);
            while k <= hi {
                let pk = b.pdf(k);
                mass += pk;
                if pk > 0.0 { env[n.slot] = V::N(k); walk(m, a, i + 1, w * pk, env, sums, dens, marg, states, neglected, fslot)? }
                if hi == INF && 1.0 - mass < 1e-13 && b.sf(k) < 1e-13 { *neglected += w * b.sf(k); break }
                if k - lo > 200000.0 { return Err(format!("Variable {} has more than 200000 support points with mass.", n.name)) }
                k += 1.0;
            }
            if hi < INF && (mass - 1.0).abs() > 1e-9 { return Err(format!("Variable {} has values that are not integers, so the page does not enumerate it.", n.name)) }
            Ok(())
        }
        walk(m, a, 0, 1.0, &mut env, &mut sums, &mut dens, &mut marg, &mut states, &mut neglected, fslot)?;
        let vals = (0..nq).map(|q| {
            let (mean, _) = status(m, q, a);
            if mean == Some(false) || (m.qs[q].kind != 'p' && neglected > 0.0 && mean != Some(true)) { return None }
            if m.qs[q].kind == 'r' { return (dens[q] != 0.0).then(|| sums[q] / dens[q]) }
            Some(sums[q])
        }).collect();
        Ok((vals, marg.into_iter().map(|(k, w)| (f64::from_bits(k), w)).collect()))
    }

    /// The result of multilevel Monte Carlo: the levels (steps, n, mean and variance of Y_l, cost), the estimate, its
    /// standard error, the bias estimate, the work, the work of plain Monte Carlo on the finest level, and a message.
    pub struct Mlmc { pub levels: Vec<(f64, f64, f64, f64, f64)>, pub est: f64, pub se: f64, pub bias: Option<f64>, pub work: f64, pub plain: Option<f64>, pub alpha: f64, pub beta: Option<f64>, pub message: String }

    /// Giles' multilevel Monte Carlo for quantity k of alternative `alt`: level 0 runs the model with steps = n0, level
    /// l ≥ 1 the fine path (steps n0·2^l, coarsen 1) and the coarse path (steps n0·2^(l−1), coarsen 2) on the same
    /// streams. The sample sizes minimise the cost for the root mean square error ε; a level is added until the bias
    /// test passes or level 8.
    pub fn mlmc(rec: &Rec, s: &Settings, alt: usize, k: usize, eps: f64) -> Result<Mlmc, String> {
        let n0 = rec.params.iter().find(|p| p[0] == "steps").and_then(|p| p[1].trim().parse::<f64>().ok()).filter(|x| *x >= 1.0 && x.fract() == 0.0).unwrap_or(4.0);
        let max_level = 8.min((4096.0 / n0).log2().floor() as usize);
        let cost = |l: usize| n0 * 2f64.powi(l as i32) + if l > 0 { n0 * 2f64.powi(l as i32 - 1) } else { 0.0 };
        let mut ov = s.overrides.clone();
        ov.retain(|o| o.0 != "steps" && o.0 != "coarsen");
        let base: Vec<(String, String)> = rec.alts.get(alt).map(|x| x.1.iter().filter(|o| o.0 != "steps" && o.0 != "coarsen").cloned().collect()).unwrap_or_default();
        // For each level: blocks run, target blocks, model, statistics (n, mean and variance of Y_l, fine mean and variance).
        let mut lv: Vec<(u64, u64, Option<Model>, Option<Stats>)> = vec![];
        let level = |l: usize| -> Result<Model, String> {
            let mut r = rec.clone();
            let set = |steps: f64, c: &str| { let mut b = base.clone(); b.push(("steps".into(), steps.to_string())); b.push(("coarsen".into(), c.into())); b };
            r.alts = if l == 0 { vec![("Level 0".into(), set(n0, "1"))] } else { vec![(format!("Level {l}, fine"), set(n0 * 2f64.powi(l as i32), "1")), (format!("Level {l}, coarse"), set(n0 * 2f64.powi(l as i32 - 1), "2"))] };
            r.objective = None;
            r.constraints.clear();
            let seed = (s.seed as u32).wrapping_add((l as u32 + 1).wrapping_mul(0x9e3779b9)) as u64;
            prepare(&r, &Settings { seed, compare: "none".into(), failure: "none".into(), overrides: ov.clone(), common: true, ..s.clone() }).map_err(|e| e[0].clone())
        };
        let stats = |st: &Stats, l: usize| -> (f64, f64, f64, f64, f64) {
            let f = &st.acc[0][k];
            let fv = if f.n > 1.0 { f.m2 / (f.n - 1.0) } else { 0.0 };
            if l == 0 { return (f.n, f.mean, fv, f.mean, fv) }
            let d = &st.diffs[0][k];
            (d.n, -d.mean, if d.n > 1.0 { d.m2 / (d.n - 1.0) } else { 0.0 }, f.mean, fv)
        };
        for l in 0..3 { lv.push((0, 2, Some(level(l)?), None)) }
        let (mut alpha, mut beta): (f64, Option<f64>);
        let mut message = String::new();
        let slope = |pts: Vec<(f64, f64)>| -> Option<f64> {
            let p: Vec<(f64, f64)> = pts.into_iter().filter(|x| x.0 >= 1.0 && x.1 > 0.0).map(|(x, y)| (x, y.log2())).collect();
            if p.len() < 2 { return None }
            let (mx, my) = (p.iter().map(|x| x.0).sum::<f64>() / p.len() as f64, p.iter().map(|x| x.1).sum::<f64>() / p.len() as f64);
            let sxx: f64 = p.iter().map(|x| (x.0 - mx).powi(2)).sum();
            (sxx > 0.0).then(|| p.iter().map(|x| (x.0 - mx) * (x.1 - my)).sum::<f64>() / sxx)
        };
        loop {
            for (l, x) in lv.iter_mut().enumerate() {
                if x.0 < x.1 {
                    let more = run(x.2.as_ref().unwrap(), &s.method, x.0 * 1024, x.1 * 1024)?;
                    x.3 = Some(match x.3.take() { None => more, Some(mut old) => {
                        for (r, t) in old.acc.iter_mut().zip(&more.acc) { for (a, b) in r.iter_mut().zip(t) { *a = a.combine(b) } }
                        for (r, t) in old.diffs.iter_mut().zip(&more.diffs) { for (a, b) in r.iter_mut().zip(t) { *a = a.combine(b) } }
                        old
                    } });
                    x.0 = x.1;
                    let _ = l;
                }
            }
            let st: Vec<(f64, f64, f64, f64, f64)> = lv.iter().enumerate().map(|(l, x)| stats(x.3.as_ref().unwrap(), l)).collect();
            let sum: f64 = st.iter().enumerate().map(|(l, x)| (x.2.max(0.0) * cost(l)).sqrt()).sum();
            let mut more = false;
            for (l, x) in lv.iter_mut().enumerate() {
                let n = if sum > 0.0 { (2.0 / (eps * eps) * (st[l].2.max(0.0) / cost(l)).sqrt() * sum).ceil() } else { 0.0 };
                let target = x.0.max((n / 1024.0).ceil() as u64);
                if target > x.0 { x.1 = target; more = true }
            }
            alpha = slope(st.iter().enumerate().map(|(l, x)| (l as f64, x.1.abs())).collect()).map_or(0.5, |s| (-s).max(0.5));
            beta = slope(st.iter().enumerate().map(|(l, x)| (l as f64, x.2)).collect()).map(|s| -s);
            if more { continue }
            let big = st.len() - 1;
            let bias = (st[big - 1].1.abs() / 2f64.powf(alpha)).max(st[big].1.abs()) / (2f64.powf(alpha) - 1.0);
            if bias < eps / 2f64.sqrt() { break }
            if big >= max_level { message = format!("The bias test failed at the largest level L = {big}: the bias estimate {} is above ε/√2 = {}.", sig(bias, 3), sig(eps / 2f64.sqrt(), 3)); break }
            lv.push((0, 2, Some(level(big + 1)?), None));
        }
        let st: Vec<(f64, f64, f64, f64, f64)> = lv.iter().enumerate().map(|(l, x)| stats(x.3.as_ref().unwrap(), l)).collect();
        let est: f64 = st.iter().map(|x| x.1).sum();
        let v: f64 = st.iter().map(|x| if x.0 > 0.0 { x.2 / x.0 } else { 0.0 }).sum();
        let big = st.len() - 1;
        let bias = (big >= 1).then(|| (st[big - 1].1.abs() / 2f64.powf(alpha)).max(st[big].1.abs()) / (2f64.powf(alpha) - 1.0));
        let work: f64 = st.iter().enumerate().map(|(l, x)| x.0 * cost(l)).sum();
        let plain = (v > 0.0).then(|| st[big].4 / v * n0 * 2f64.powi(big as i32));
        Ok(Mlmc { levels: st.iter().enumerate().map(|(l, x)| (n0 * 2f64.powi(l as i32), x.0, x.1, x.2, cost(l))).collect(), est, se: v.sqrt(), bias, work, plain, alpha, beta, message })
    }
}
```

```rust
//| caption: The guided interview: the rule graph, the evaluation and the model text of a candidate.
mod interview {
    //! The guided interview: the rule graph of the catalogue (data/interview.json) asks the questions that the earlier
    //! answers make relevant. Its candidates cover the whole catalogue, and its rules go from answers to candidates. A rule
    //! supports or excludes candidates with a weight, records an unresolved assumption, or returns "insufficient
    //! evidence". Each rule states its reason and its basis: a theorem or a modelling assumption. `evaluate` reads the
    //! answers, the rules that the reader switched off and the candidate that the reader picked. It returns the evidence,
    //! the status, the ranked candidates with their reasons, the competing explanations, the rejection tests and the
    //! sampling methods, the unresolved assumptions and the rule path. `build` writes a candidate as model text and reads
    //! it with `model::parse`, so the interview makes the same model record as the editor.
    use super::*;
    use crate::model::{self, Item, Law, Rec};
    use crate::{built, cat, expr};
    use serde_json::{Map, Value};
    use std::collections::BTreeMap;

    /// The least score of a candidate with strong support.
    pub const STRONG: f64 = 2.0;
    /// The evidence names in the order that the model text declares them, with their labels.
    const EVIDENCE: [(&str, &str); 4] = [("m", "mean"), ("sd", "standard deviation"), ("lim", "upper limit n"), ("c", "threshold of the decision")];
    /// The questions on the mechanism, which the problem text of a model names.
    const MECHANISMS: [&str; 6] = ["g", "gt", "gs", "gp", "ge", "gm"];
    /// Names that keep their capital letter inside a sentence: a name that starts with the name of a person.
    const PERSONS: [&str; 21] = ["Bernoulli", "Poisson", "Zipf", "Erlang", "Dirichlet", "Student", "Laplace", "Weibull", "Gompertz", "Pareto", "Burr", "Fréchet",
        "Cauchy", "Lévy", "Gumbel", "Gaussian", "Clayton", "Frank", "Ornstein", "Hawkes", "Brownian"];

    /// The answers to the questions (an option id or "?"), the numbers of the evidence, and the notices on the parts of
    /// the answer text that the interview cannot read.
    #[derive(Clone, Debug, PartialEq, Default)]
    pub struct Answers { pub answers: BTreeMap<String, String>, pub evidence: BTreeMap<String, f64>, pub notices: Vec<String> }

    /// The status of an evaluation: ranked candidates, or insufficient evidence.
    #[derive(Clone, Copy, Debug, PartialEq)]
    pub enum Status { Candidates, Insufficient }

    /// The result of the interview for one answer text, as plain data.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Eval {
        pub status: Status,
        /// The rules that give insufficient evidence (from: the rule id), with their reasons.
        pub insufficient: Vec<Note>,
        pub notices: Vec<String>,
        /// The questions with no answer (from: "question:ID"), then the assumptions that the rules record (from: the rule id).
        pub assumptions: Vec<Note>,
        /// The rules that fired, in order, with the rules that the reader switched off.
        pub path: Vec<Step>,
        /// The candidates with the best score, when the status is Candidates.
        pub tie: Vec<String>,
        pub top: Option<String>, pub chosen: Option<String>,
        /// True when the reader picked a candidate that is not the top candidate.
        pub picked: bool,
        /// The questions that the interview asks for these answers, in data order.
        pub answers: Vec<Answer>,
        /// The evidence fields that the interview asks for these answers, with their values.
        pub evidence: Vec<Evidence>,
        pub pool: Pool,
        /// The laws of the pool, ranked by score, then in data order.
        pub candidates: Vec<Card>,
        /// The model components with a positive score, ranked.
        pub components: Vec<Card>,
        /// The rules that the reader switched off and that exist.
        pub off: Vec<String>,
        /// The answer text in its canonical form.
        pub canonical: String,
    }
    #[derive(Clone, Debug, PartialEq)]
    pub struct Note { pub from: String, pub text: String }
    /// One rule of the rule path: its effect, its weight, its basis, the answers that make it fire and its targets.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Step { pub id: String, pub effect: String, pub weight: Option<f64>, pub basis: String, pub source: String, pub reason: String, pub when: Vec<Cond>, pub targets: Vec<Target>, pub off: bool }
    /// An answer that makes a rule fire.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Cond { pub question: String, pub text: String, pub short: String, pub value: String, pub label: String }
    #[derive(Clone, Debug, PartialEq)]
    pub struct Target { pub id: String, pub name: String, pub delta: f64 }
    /// A question that the interview asks: value is an option id, or "?" when it is not answered or not known.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Answer { pub id: String, pub topic: String, pub text: String, pub short: String, pub value: String, pub label: String, pub answered: bool }
    #[derive(Clone, Debug, PartialEq)]
    pub struct Evidence { pub id: String, pub label: String, pub value: Option<f64> }
    /// The laws for the kind of value: kind "?" when the reader does not know it, then every law of the catalogue.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Pool { pub kind: String, pub label: String, pub noun: String, pub size: usize }
    /// A candidate law or model component with its reasons, its competing explanations, its rejection tests and its
    /// sampling methods (the text of a component; `build` gives those of a law).
    #[derive(Clone, Debug, PartialEq)]
    pub struct Card {
        pub id: String, pub name: String, pub prose: String, pub role: String, pub kind: String, pub law: String, pub group: i64, pub group_here: bool,
        /// A law with a model template, from a group of this page.
        pub available: bool,
        pub example: Option<String>, pub rank: usize, pub score: f64, pub supported: bool, pub excluded: bool,
        pub reasons: Vec<Reason>, pub competing: Vec<Competing>, pub tests: Vec<String>, pub methods: Option<String>,
        /// An answer text that ranks this candidate first.
        pub path: String,
    }
    #[derive(Clone, Debug, PartialEq)]
    pub struct Reason { pub rule: String, pub delta: f64, pub basis: String, pub source: String, pub text: String }
    /// A competing explanation: score None when the candidate is not in the pool or among the components.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Competing { pub id: String, pub name: String, pub text: String, pub score: Option<f64>, pub in_pool: bool }

    fn s(v: &Value) -> &str { v.as_str().unwrap_or("") }
    fn arr(v: &Value) -> &[Value] { v.as_array().map_or(&[], |a| a) }
    fn cut(t: &str, n: usize) -> String { t.chars().take(n).collect() }
    fn first_lower(t: &str) -> String { let mut c = t.chars(); c.next().map_or(String::new(), |f| f.to_lowercase().chain(c).collect()) }
    fn find<'a>(list: &'a Value, id: &str) -> Option<&'a Value> { arr(list).iter().find(|x| x["id"] == id) }
    /// The value of a question for a condition: "-" when the question is not asked (or not known).
    fn val<'a>(v: &'a BTreeMap<String, String>, q: &str) -> &'a str { v.get(q).map_or("-", String::as_str) }

    /// The conjunctions of a condition: an object, or a list of objects.
    fn conjs(w: &Value) -> Vec<&Map<String, Value>> {
        match w { Value::Array(a) => a.iter().filter_map(Value::as_object).collect(), Value::Object(o) => vec![o], _ => vec![] }
    }
    /// True when each named question has one of the listed values.
    fn met(c: &Map<String, Value>, v: &BTreeMap<String, String>) -> bool { c.iter().all(|(q, opts)| arr(opts).iter().any(|o| o == val(v, q))) }
    /// True when the condition is null, or when one of its conjunctions holds.
    fn holds(w: &Value, v: &BTreeMap<String, String>) -> bool { w.is_null() || conjs(w).iter().any(|c| met(c, v)) }

    /// A number as JavaScript writes it, with an exponent below 10^-6 and from 10^21.
    fn js(x: f64) -> String {
        if x == 0.0 { return "0".into() }
        if x.is_finite() && (x.abs() < 1e-6 || x.abs() >= 1e21) { return format!("{x:e}").replace('e', if x.abs() >= 1.0 { "e+" } else { "e" }) }
        format!("{x}")
    }
    /// A number for the model text and the answer text: at most 8 significant digits. As JavaScript's toPrecision, a
    /// value halfway between two numbers of 8 digits goes to the one with the larger magnitude.
    fn num(x: f64) -> String {
        if !x.is_finite() || x == 0.0 { return js(x) }
        let t = format!("{:.30e}", x.abs());
        let (m, e) = t.split_once('e').unwrap_or((&t, "0"));
        let d: Vec<u8> = m.bytes().filter(u8::is_ascii_digit).collect();
        let k = d[..8].iter().fold(0u64, |k, b| 10 * k + (b - b'0') as u64) + (d[8] >= b'5') as u64;
        js(format!("{k}e{}", e.parse::<i32>().unwrap_or(0) - 7).parse::<f64>().unwrap_or(x).copysign(x))
    }
    /// A number from text as JavaScript's Number() reads it; NaN when it is not a number.
    fn number(t: &str) -> f64 {
        let t = t.trim();
        let radix = [("0x", 16), ("0X", 16), ("0o", 8), ("0O", 8), ("0b", 2), ("0B", 2)].into_iter().find(|r| t.starts_with(r.0));
        if let Some((_, r)) = radix { return if t.len() > 2 && t[2..].chars().all(|c| c.is_digit(r)) { u64::from_str_radix(&t[2..], r).map_or(f64::NAN, |x| x as f64) } else { f64::NAN } }
        if t.is_empty() { return 0.0 }
        if t.chars().any(|c| c.is_ascii_alphabetic() && c != 'e' && c != 'E') { return f64::NAN }
        t.parse().unwrap_or(f64::NAN)
    }
    /// A valid number for an evidence field: finite, in its range, whole if the field is whole, and sd larger than 0.
    fn valid(e: &Value, x: f64) -> bool {
        x.is_finite() && x >= e["min"].as_f64().unwrap_or(-INF) && x <= e["max"].as_f64().unwrap_or(INF) && (e["integer"] != true || x.fract() == 0.0) && !(e["id"] == "sd" && x <= 0.0)
    }

    /// Read the answer text, such as "k=cnt;g=evt;m=4.2", into answers and evidence. Unknown names, unknown options and
    /// values that are not numbers in their range give notices, and the interview does not use them.
    pub fn parse(data: &Value, text: &str) -> Answers {
        let spec = &data["interview"];
        let mut out = Answers::default();
        for part in text.split(';').map(str::trim).filter(|p| !p.is_empty()) {
            let m = part.split_once('=').filter(|(n, x)| !n.is_empty() && n.bytes().all(|b| b.is_ascii_lowercase()) && !x.is_empty() && !x.contains(['\n', '\r', '\u{2028}', '\u{2029}']));
            let (q, e) = m.map_or((None, None), |(n, _)| (find(&spec["questions"], n), find(&spec["evidence"], n)));
            match (m, q, e) {
                (Some((n, x)), Some(q), _) if x == "?" || find(&q["options"], x).is_some() => { out.answers.insert(n.into(), x.into()); }
                (Some(_), Some(_), _) => out.notices.push(format!("The interview answer \"{}\" names no option of that question.", cut(part, 30))),
                (Some((n, x)), None, Some(e)) if valid(e, number(x)) => { out.evidence.insert(n.into(), number(x)); }
                (Some(_), None, Some(e)) => out.notices.push(format!("The value \"{}\" is not a valid {}.", cut(part, 30), s(&e["label"]).to_lowercase())),
                _ => out.notices.push(format!("\"{}\" is not an answer of the interview.", cut(part, 30))),
            }
        }
        out
    }

    /// The values of all questions for these answers: the option id, "?" (asked, but not answered or not known), or "-"
    /// (not asked, because an earlier answer makes it irrelevant). The interview asks the questions in data order.
    pub fn values(data: &Value, answers: &BTreeMap<String, String>) -> BTreeMap<String, String> {
        let mut v = BTreeMap::new();
        for q in arr(&data["interview"]["questions"]) {
            let x = if holds(&q["ask"], &v) { answers.get(s(&q["id"])).map_or("?", String::as_str) } else { "-" };
            v.insert(s(&q["id"]).to_string(), x.to_string());
        }
        v
    }

    /// The answer text in its canonical form: questions, then evidence, in data order, without the answers to questions
    /// and the evidence fields that the interview does not ask.
    pub fn format(data: &Value, answers: &BTreeMap<String, String>, evidence: &BTreeMap<String, f64>) -> String {
        let (spec, v) = (&data["interview"], values(data, answers));
        let qs = arr(&spec["questions"]).iter().filter_map(|q| answers.get(s(&q["id"])).filter(|_| val(&v, s(&q["id"])) != "-").map(|a| format!("{}={a}", s(&q["id"]))));
        let es = arr(&spec["evidence"]).iter().filter_map(|e| evidence.get(s(&e["id"])).filter(|_| holds(&e["ask"], &v)).map(|x| format!("{}={}", s(&e["id"]), num(*x))));
        qs.chain(es).collect::<Vec<_>>().join(";")
    }

    /// The candidates that a target of a rule names: "tail:x" or "!tail:x" (the laws of the pool with or without the tail
    /// x), "continuous" (the continuous laws of the pool), or one id in the pool or among the components.
    fn resolve<'a>(t: &str, pool: &[&'a Value], comps: &[&'a Value]) -> Vec<&'a Value> {
        let not = t.starts_with('!');
        if let Some(tail) = t.strip_prefix('!').unwrap_or(t).strip_prefix("tail:") && !tail.is_empty() && tail.bytes().all(|b| b.is_ascii_lowercase()) {
            return pool.iter().filter(|c| c["tails"].is_array() && arr(&c["tails"]).iter().any(|x| x == tail) != not).copied().collect();
        }
        if t == "continuous" { return pool.iter().filter(|c| c["discrete"] == false).copied().collect() }
        pool.iter().chain(comps).filter(|c| c["id"] == t).copied().collect()
    }

    /// The name of a candidate inside a sentence: lower case, except a name that starts with the name of a person.
    pub fn prose(name: &str) -> String { if name == "F" || PERSONS.iter().any(|p| name.starts_with(p)) { name.into() } else { first_lower(name) } }

    /// The template of a candidate for a kind of value: its own, or the one of byKind for the kind or for "*".
    pub fn template<'a>(c: &'a Value, kind: &str) -> Option<&'a Value> {
        let (t, by) = (&c["template"], &c["template"]["byKind"]);
        let t = if by.is_object() { by.get(kind).unwrap_or(&by["*"]) } else { t };
        (!t.is_null()).then_some(t)
    }

    /// The groups of the workbench that are on this page.
    fn here(data: &Value) -> Vec<i64> { arr(&data["groups"]).iter().filter(|g| g["status"] == "here").filter_map(|g| g["piece"].as_i64()).collect() }
    /// A law with a template for the model text, from a group on this page.
    fn available(c: &Value, here: &[i64]) -> bool { c["role"] == "law" && !c["template"].is_null() && c["group"].as_i64().is_some_and(|g| here.contains(&g)) }

    /// The candidates by score, then in data order.
    fn rank<'a>(list: &[&'a Value], score: &BTreeMap<String, f64>, cands: &[Value]) -> Vec<&'a Value> {
        let order = |c: &Value| cands.iter().position(|x| x["id"] == c["id"]);
        let mut l = list.to_vec();
        l.sort_by(|a, b| score[s(&b["id"])].total_cmp(&score[s(&a["id"])]).then(order(a).cmp(&order(b))));
        l
    }

    /// Evaluate the interview: the answer text, the rules that the reader switched off (ids with commas between them) and
    /// the candidate that the reader picked ("" for none).
    pub fn evaluate(data: &Value, iv: &str, off: &str, pick: &str) -> Eval {
        let spec = &data["interview"];
        let (qs, cands, rules) = (arr(&spec["questions"]), arr(&spec["candidates"]), arr(&spec["rules"]));
        let Answers { answers, evidence, mut notices } = parse(data, iv);
        let v = values(data, &answers);
        let mut offs: Vec<String> = vec![];
        for id in off.split(',').map(str::trim).filter(|x| !x.is_empty()) {
            if find(&spec["rules"], id).is_none() { notices.push(format!("\"{}\" names no rule of the rule graph.", cut(id, 20))) } else if !offs.iter().any(|x| x == id) { offs.push(id.into()) }
        }
        let here = here(data);
        let kind = match val(&v, "k") { "-" => "?", k => k }.to_string();
        let pool: Vec<&Value> = cands.iter().filter(|c| c["role"] == "law" && (kind == "?" || arr(&c["kinds"]).iter().any(|k| *k == kind))).collect();
        let comps: Vec<&Value> = cands.iter().filter(|c| c["role"] == "component").collect();
        let mut score: BTreeMap<String, f64> = pool.iter().chain(&comps).map(|c| (s(&c["id"]).to_string(), 0.0)).collect();
        let mut why: BTreeMap<String, Vec<(&Value, f64)>> = BTreeMap::new();
        let q = |id: &str| find(&spec["questions"], id).unwrap_or(&Value::Null);
        let label = |id: &str, x: &str| -> String {
            if x == "?" { return if answers.get(id).is_some_and(|a| a == "?") { "I do not know" } else { "not answered" }.into() }
            find(&q(id)["options"], x).map_or(x.into(), |o| s(&o["label"]).into())
        };
        let at = |id: &str| qs.iter().position(|x| x["id"] == id).unwrap_or(usize::MAX);
        // The answers that make a rule fire: the first conjunction that holds, in the order of the questions.
        let describe = |w: &Value| -> Vec<Cond> {
            let Some(c) = conjs(w).into_iter().find(|c| met(c, &v)) else { return vec![] };
            let mut keys: Vec<&String> = c.keys().collect();
            keys.sort_by_key(|k| at(k));
            keys.into_iter().map(|k| Cond { question: k.clone(), text: s(&q(k)["text"]).into(), short: s(&q(k)["short"]).into(), value: val(&v, k).into(), label: label(k, val(&v, k)) }).collect()
        };
        let step = |r: &Value, when: Vec<Cond>, targets: Vec<Target>, off: bool| Step { id: s(&r["id"]).into(), effect: s(&r["effect"]).into(), weight: r["weight"].as_f64(),
            basis: s(&r["basis"]).into(), source: s(&r["source"]).into(), reason: s(&r["reason"]).into(), when, targets, off };
        let note = |r: &Value| Note { from: s(&r["id"]).into(), text: s(&r["reason"]).into() };
        let (mut path, mut insufficient, mut assumed) = (vec![], vec![], vec![]);
        for r in rules {
            if r["when"] == "weak" || !holds(&r["when"], &v) { continue }
            let effect = s(&r["effect"]);
            let mut targets: Vec<Target> = vec![];
            if effect == "for" || effect == "against" {
                let w = r["weight"].as_f64().unwrap_or(f64::NAN);
                for c in arr(&r["targets"]).iter().flat_map(|t| resolve(s(t), &pool, &comps)) {
                    if !targets.iter().any(|x| x.id == s(&c["id"])) { targets.push(Target { id: s(&c["id"]).into(), name: s(&c["name"]).into(), delta: if effect == "for" { w } else { -w } }) }
                }
                if targets.is_empty() { continue }
            }
            let is_off = offs.iter().any(|x| r["id"] == x.as_str());
            path.push(step(r, describe(&r["when"]), targets.clone(), is_off));
            if is_off { continue }
            for t in &targets {
                *score.entry(t.id.clone()).or_default() += t.delta;
                why.entry(t.id.clone()).or_default().push((r, t.delta));
            }
            if effect == "insufficient" { insufficient.push(note(r)) }
            if effect == "assume" { assumed.push(note(r)) }
        }
        let ranked = rank(&pool, &score, cands);
        let best = ranked.first().map_or(0.0, |c| score[s(&c["id"])]);
        if let Some(weak) = rules.iter().find(|r| r["when"] == "weak") && kind != "?" && best < STRONG {
            let is_off = offs.iter().any(|x| weak["id"] == x.as_str());
            path.push(step(weak, vec![], vec![], is_off));
            if !is_off { insufficient.push(note(weak)) }
        }
        let open = qs.iter().filter(|x| val(&v, s(&x["id"])) == "?")
            .map(|x| Note { from: format!("question:{}", s(&x["id"])),
                text: format!("{}: {}", if answers.get(s(&x["id"])).is_some_and(|a| a == "?") { "Not known" } else { "Not answered" }, s(&x["text"])) });
        let assumptions = open.chain(assumed).collect();

        let status = if insufficient.is_empty() { Status::Candidates } else { Status::Insufficient };
        let top = ranked.first().filter(|_| status == Status::Candidates).map(|c| s(&c["id"]).to_string());
        let tie = if top.is_some() { ranked.iter().filter(|c| score[s(&c["id"])] == best).map(|c| s(&c["id"]).to_string()).collect() } else { vec![] };
        let (mut chosen, mut picked) = (top.clone(), false);
        if !pick.is_empty() {
            if pool.iter().any(|c| c["id"] == pick) { chosen = Some(pick.into()); picked = top.as_deref() != Some(pick) }
            else { notices.push(format!("The picked candidate \"{}\" is not a law for this kind of value.", cut(pick, 30))) }
        }
        let card = |(i, c): (usize, &&Value)| {
            let (id, group) = (s(&c["id"]), c["group"].as_i64().unwrap_or(0));
            let sc = score[id];
            Card { id: id.into(), name: s(&c["name"]).into(), prose: prose(s(&c["name"])), role: s(&c["role"]).into(), kind: c["kind"].as_str().unwrap_or("law").into(),
                law: s(&c["law"]).into(), group, group_here: here.contains(&group), available: available(c, &here), example: c["example"].as_str().map(String::from),
                rank: i + 1, score: sc, supported: sc > 0.0, excluded: sc < 0.0,
                reasons: why.get(id).map_or(&[][..], |w| w.as_slice()).iter()
                    .map(|(r, d)| Reason { rule: s(&r["id"]).into(), delta: *d, basis: s(&r["basis"]).into(), source: s(&r["source"]).into(), text: s(&r["reason"]).into() }).collect(),
                competing: arr(&c["competing"]).iter().map(|x| { let xid = s(&x["id"]); Competing { id: xid.into(), name: find(&spec["candidates"], xid).map_or(xid, |y| s(&y["name"])).into(),
                    text: s(&x["text"]).into(), score: score.get(xid).copied(), in_pool: score.contains_key(xid) } }).collect(),
                tests: arr(&c["tests"]).iter().map(|t| s(t).to_string()).collect(), methods: c["methods"].as_str().map(String::from), path: s(&c["path"]).into() }
        };
        let candidates = ranked.iter().enumerate().map(card).collect();
        let components = rank(&comps, &score, cands).iter().filter(|c| score[s(&c["id"])] > 0.0).enumerate().map(card).collect();
        let k = find(&q("k")["options"], &kind);
        Eval {
            status, insufficient, notices, assumptions, path, tie, top, chosen, picked,
            answers: qs.iter().filter(|x| val(&v, s(&x["id"])) != "-").map(|x| { let id = s(&x["id"]); Answer { id: id.into(), topic: s(&x["topic"]).into(), text: s(&x["text"]).into(),
                short: s(&x["short"]).into(), value: val(&v, id).into(), label: label(id, val(&v, id)), answered: answers.get(id).is_some_and(|a| a != "?") } }).collect(),
            evidence: arr(&spec["evidence"]).iter().filter(|e| holds(&e["ask"], &v))
                .map(|e| Evidence { id: s(&e["id"]).into(), label: s(&e["label"]).into(), value: evidence.get(s(&e["id"])).copied() }).collect(),
            pool: Pool { label: k.map_or("every law of the catalogue", |o| s(&o["label"])).into(), noun: k.map_or("quantity", |o| s(&o["noun"])).into(), kind, size: pool.len() },
            candidates, components, off: offs, canonical: format(data, &answers, &evidence),
        }
    }

    /// A sampling method of the law of a model record: the method id and name, and the reason when the law does not have it.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Sampler { pub method: &'static str, pub name: &'static str, pub unavailable: Option<String> }

    /// A candidate as a model: the model text, its record, the evidence names with illustrative values, the parameters of
    /// the law, its mean and variance (of entry 1 of a vector law: then component is Some(1)), and its sampling methods.
    #[derive(Clone)]
    pub struct Built {
        pub text: String, pub rec: Rec, pub illustrative: Vec<String>, pub params: Vec<(String, V)>,
        pub mean: Option<f64>, pub variance: Option<f64>, pub component: Option<usize>, pub methods: Vec<Sampler>,
    }
    /// Why a candidate does not give a model: the errors, and the model text when the parser or the compiler gave them.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Failed { pub text: Option<String>, pub errors: Vec<String> }

    /// The value of an expression of named numbers.
    fn value_of(src: Option<&str>, env: &[(String, f64)]) -> Result<f64, String> {
        let src = src.ok_or("An expression is text.")?;
        let (e, _) = expr::build(src, &|n| env.iter().position(|x| x.0 == n))?;
        match expr::eval(&e, &env.iter().map(|x| V::N(x.1)).collect::<Vec<_>>())? { V::N(x) if x.is_finite() => Ok(x), _ => Err(format!("{src} is not a finite number.")) }
    }
    /// The parameter names of a catalogue law or a constructed law, in order.
    fn law_params(law: &str) -> Vec<String> {
        cat::LAWS.iter().find(|l| l.0 == law).map(|l| l.2.iter().map(|p| p.to_string()).collect()).or_else(|| built::params(law).map(|p| p.into_iter().map(|x| x.0).collect())).unwrap_or_default()
    }
    /// True when the text has the name x as a whole word.
    fn word(t: &str, x: &str) -> bool {
        let w = |c: Option<char>| c.is_some_and(|c| c.is_ascii_alphanumeric() || c == '_');
        t.match_indices(x).any(|(i, _)| !w(t[..i].chars().next_back()) && !w(t[i + x.len()..].chars().next()))
    }

    /// Write one candidate of an evaluation as model text (the chosen candidate when id is None), read it with
    /// `model::parse` and compile it with `model::prepare`. A candidate whose law is not on this page, or evidence that
    /// does not fit the law, gives the reason.
    pub fn build(data: &Value, r: &Eval, id: Option<&str>) -> Result<Built, Failed> {
        let fail = |errors: Vec<String>| Err(Failed { text: None, errors });
        let id = id.or(r.chosen.as_deref()).filter(|x| !x.is_empty());
        let Some(c) = id.and_then(|id| find(&data["interview"]["candidates"], id)) else {
            return fail(vec![id.map_or("The interview has no candidate to write as a model.".into(), |i| format!("\"{}\" is not a candidate.", cut(i, 30)))]);
        };
        let (p, group) = (prose(s(&c["name"])), c["group"].as_i64().unwrap_or(0));
        if !available(c, &here(data)) {
            return fail(vec![if c["role"] == "law" { format!("The {p} law comes in group {group}, which is not on this page yet. Choose a candidate from this page, or write the model in the editor.") }
                else { format!("The {p} is a model component of group {group}. The model record of this page cannot hold it yet.") }]);
        }
        let noun = &r.pool.noun;
        let Some(t) = template(c, &r.pool.kind) else { return fail(vec![format!("The {p} law has no model template for a {noun}. Write the model in the editor.")]) };
        let law = t["law"].as_str().unwrap_or(s(&c["law"]));
        let given: BTreeMap<&str, f64> = r.evidence.iter().filter_map(|e| e.value.map(|x| (e.id.as_str(), x))).collect();
        let (mean, prob) = ("mean average = X \"mean value\"".to_string(), "prob exceed = X > c \"probability above the threshold c\"".to_string());
        let quantities: Vec<String> = match t["quantities"].as_array() {
            Some(a) => a.iter().map(|x| s(x).to_string()).collect(),
            None if r.answers.iter().any(|a| a.id == "q" && a.value == "avg") => vec![mean, prob],
            None => vec![prob, mean],
        };
        let need_c = t["quantities"].as_array().is_none_or(|a| a.iter().any(|x| word(s(x), "c")));
        let uses: Vec<(&str, &str)> = EVIDENCE.into_iter().filter(|n| arr(&t["uses"]).iter().any(|u| u == n.0)).chain(need_c.then_some(EVIDENCE[3])).collect();
        let mut env: Vec<(String, f64)> = uses.iter().filter_map(|n| given.get(n.0).map(|x| (n.0.to_string(), if n.0 == "lim" { (x + 0.5).floor() } else { *x }))).collect();
        let (mut illustrative, mut errors, mut lines) = (vec![], vec![], vec![]);
        for &(n, what) in &uses {
            let v = match given.get(n) {
                Some(x) => Ok(*x),
                None => {
                    let src = if n == "c" { t["c"].as_str() } else { t["defaults"][n].as_str() };
                    let v = value_of(src, &env).or_else(|e| if t["fallback"][n].is_null() { Err(e) } else { value_of(t["fallback"][n].as_str(), &env) });
                    if v.is_ok() { illustrative.push(n.to_string()) }
                    v
                }
            };
            let mut v = match v { Ok(v) => v, Err(e) => { errors.push(format!("The {what} has no value: {e}")); continue } };
            if n == "lim" { v = (v + 0.5).floor() }
            match env.iter_mut().find(|x| x.0 == n) { Some(x) => x.1 = v, None => env.push((n.into(), v)) }
            lines.push(format!("param {n} = {} \"{what}{}\"", num(v), if given.contains_key(n) { ", from the interview" } else { ": an illustrative value, because the interview has none" }));
        }
        if !errors.is_empty() { return fail(errors) }
        for q in arr(&t["requires"]) {
            if value_of(Some(&format!("if({}, 1, 0)", s(&q["expr"]))), &env) != Ok(1.0) { errors.push(format!("The evidence does not fit the {p} law. {}", s(&q["text"]))) }
        }
        if !errors.is_empty() { return fail(errors) }
        lines.extend(arr(&t["extra"]).iter().map(|x| format!("param {} = {} \"{}\"", s(&x[0]), s(&x[1]), s(&x[2]))));
        // The arguments in the order of the parameters of the law, which is the order of the templates.
        let order = law_params(law);
        let mut args: Vec<(&String, &Value)> = t["args"].as_object().map_or(vec![], |o| o.iter().collect());
        args.sort_by_key(|a| order.iter().position(|x| x == a.0).unwrap_or(usize::MAX));
        let args = args.iter().map(|(k, e)| format!("{k} = {}", s(e))).collect::<Vec<_>>().join(", ");
        let mech = r.answers.iter().find(|a| MECHANISMS.contains(&a.id.as_str()) && a.answered);
        let unknown: Vec<&str> = r.answers.iter().filter(|a| a.value == "?").map(|a| a.short.as_str()).collect();
        let mut problem = vec![format!("From the guided interview: one value is a {noun}.")];
        if let Some(m) = mech { let l = first_lower(&m.label); problem.push(format!("Mechanism: {}.", l.strip_suffix('.').unwrap_or(&l))) }
        problem.push(if r.status == Status::Insufficient { format!("The interview returned insufficient evidence, and the reader chose the {p} law.") }
            else if r.picked { format!("The rule graph ranks the {} law first, but the reader chose the {p} law.", r.candidates[0].prose) }
            else { format!("The rule graph ranks the {p} law first.") });
        if !unknown.is_empty() { problem.push(format!("Unresolved: {}.", unknown.join(", "))) }
        let mut text = vec![format!("title: Interview: the {p} law for the {noun}"), format!("problem: {}", problem.join(" "))];
        text.extend(lines);
        text.push(format!("X ~ {law}({args}) \"candidate from the guided interview\""));
        text.extend(quantities);
        text.push(format!("focus {}", t["focus"].as_str().unwrap_or("X")));
        let text = text.join("\n") + "\n";

        let (rec, errors) = model::parse(&text);
        if !errors.is_empty() { return Err(Failed { text: Some(text), errors }) }
        let m = match model::prepare(&rec, &model::Settings { seed: 1, ..Default::default() }) {
            Ok(m) => m,
            Err(e) => return Err(Failed { text: Some(text), errors: e.into_iter().map(|e| format!("The evidence does not fit the {p} law. {e}")).collect() }),
        };
        let Some(Item::Var(x)) = m.node("X").map(|n| &n.item) else { return Err(Failed { text: Some(text), errors: vec!["The model has no variable X.".into()] }) };
        let pv = m.args(x, 0, &m.alts[0].1).unwrap_or_default();
        let (mean, variance) = match &x.law { Law::Cat(id) => cat::moments(id, &pv), Law::Built(id) => built::moments(id, &pv), _ => (None, None) };
        let component = matches!(&x.law, Law::Cat(id) if cat::dim(id, &pv) > 0).then_some(1);
        let kinds = [("independent", Kind::Reference), ("inverse", Kind::Inverse { cut: 1.0 }), ("rejection", Kind::Rejection { scale: 1.0 })];
        let methods = kinds.into_iter().map(|(method, k)| {
            let mut src = Src::new(1, 0, 0, 0, false);
            let d = match &x.law { Law::Cat(id) => cat::draw(id, &pv, k, &mut src), Law::Built(id) => built::draw(id, &pv, k, &mut src), _ => Ok(V::N(0.0)) };
            Sampler { method, name: model::METHODS.iter().find(|x| x.0 == method).map_or("", |x| x.1), unavailable: d.err() }
        }).collect();
        let params = law_params(law).into_iter().zip(pv).collect();
        Ok(Built { text, rec, illustrative, params, mean, variance, component, methods })
    }

    /// A question that the interview asks for the current answers, with its options (id, label) and its answer: an option
    /// id, "?" (I do not know) or None (not answered).
    #[derive(Clone, Debug, PartialEq)]
    pub struct Question { pub id: String, pub topic: String, pub text: String, pub short: String, pub help: String, pub options: Vec<(String, String)>, pub value: Option<String> }
    /// An evidence field that the interview asks for the current answers, with its range and its value.
    #[derive(Clone, Debug, PartialEq)]
    pub struct Field { pub id: String, pub label: String, pub help: String, pub min: f64, pub max: f64, pub integer: bool, pub value: Option<f64> }

    /// The questions and the evidence fields that the interview asks for this answer text, in data order.
    pub fn form(data: &Value, iv: &str) -> (Vec<Question>, Vec<Field>) {
        let (spec, a) = (&data["interview"], parse(data, iv));
        let v = values(data, &a.answers);
        let qs = arr(&spec["questions"]).iter().filter(|q| val(&v, s(&q["id"])) != "-").map(|q| Question { id: s(&q["id"]).into(), topic: s(&q["topic"]).into(),
            text: s(&q["text"]).into(), short: s(&q["short"]).into(), help: s(&q["help"]).into(), value: a.answers.get(s(&q["id"])).cloned(),
            options: arr(&q["options"]).iter().map(|o| (s(&o["id"]).to_string(), s(&o["label"]).to_string())).collect() }).collect();
        let es = arr(&spec["evidence"]).iter().filter(|e| holds(&e["ask"], &v)).map(|e| Field { id: s(&e["id"]).into(), label: s(&e["label"]).into(), help: s(&e["help"]).into(),
            min: e["min"].as_f64().unwrap_or(-INF), max: e["max"].as_f64().unwrap_or(INF), integer: e["integer"] == true, value: a.evidence.get(s(&e["id"])).copied() }).collect();
        (qs, es)
    }

    /// The answer text after one change, in its canonical form: a question with an option id, "?" or "" (not answered),
    /// or an evidence field with a number or "" (no value). A number out of its range, or a text longer than 200
    /// characters, gives the notice of the page and no change.
    pub fn set(data: &Value, iv: &str, id: &str, value: &str) -> Result<String, String> {
        let spec = &data["interview"];
        let Answers { mut answers, mut evidence, .. } = parse(data, iv);
        if find(&spec["questions"], id).is_some() {
            if value.is_empty() { answers.remove(id); } else { answers.insert(id.into(), value.into()); }
        } else if let Some(e) = find(&spec["evidence"], id) {
            let x = number(value);
            if value.trim().is_empty() { evidence.remove(id); } else if valid(e, x) { evidence.insert(id.into(), x); } else { return Err(format!("{}: {}", s(&e["label"]), s(&e["help"]))) }
        } else {
            return Err(format!("\"{}\" is not an answer of the interview.", cut(id, 30)));
        }
        let text = format(data, &answers, &evidence);
        if text.chars().count() > 200 { return Err("The interview answers hold at most 200 characters. Clear some numbers.".into()) }
        Ok(text)
    }

    /// The rules switched off after the reader uses (`on`) or switches off one rule: ids with commas, at most 200 characters.
    pub fn switch(off: &str, rule: &str, on: bool) -> String {
        let mut ids: Vec<&str> = vec![];
        for x in off.split(',').filter(|x| !x.is_empty()) { if !ids.contains(&x) { ids.push(x) } }
        if on { ids.retain(|x| *x != rule) } else if !ids.contains(&rule) { ids.push(rule) }
        cut(&ids.join(","), 200)
    }

    /// The status line of an evaluation, as the page shows it.
    pub fn headline(r: &Eval) -> String {
        if r.status == Status::Insufficient { return "Insufficient evidence. The interview does not propose a model, because:".into() }
        let n = r.candidates.iter().filter(|c| c.supported).count();
        let prose = |id: &String| r.candidates.iter().find(|c| &c.id == id).map_or(id.clone(), |c| c.prose.clone());
        let tie = if r.tie.len() > 1 { format!(" The rule graph cannot separate {}: the rejection tests can.", r.tie.iter().map(prose).collect::<Vec<_>>().join(" and ")) } else { String::new() };
        let first = r.candidates.first().map_or(String::new(), |c| format!(" The rule graph ranks the {} law first.", c.prose));
        format!("{n} {} for the {}.{first}{tie}", if n == 1 { "candidate" } else { "candidates" }, r.pool.noun)
    }
}
```
