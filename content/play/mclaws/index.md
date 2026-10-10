---
title: Monte Carlo laws
summary: Read 60 probability laws, draw from 39 of them and compare each sample with the exact law. Then run the law of large numbers, and read 24 limit theorems and a glossary of 363 terms.
thumb: 6389
theme: site
seed: 20261012
---

Draw a sample from a probability law and compare it with the exact law.

<!-- skill: This notebook ports the laws, theory, glossary and limits of visuals/viz/monte-carlo-workbench. Read the data only through data!, from the files pinned in visuals.lock; never copy data into this file. Every sampler is an exact method (inversion, a transformation or rejection). Tests are disposable: check a change end to end in the built page; do not commit regression tests. -->

<!-- skill: Text from the data goes through fit(), which writes the characters that the site's fonts do not have (X₁, 10⁻⁶, √n, ⌊x⌋) as X_1, 10^-6, sqrt n and floor(x). TeX from the data goes through math() or display(), which turn the environments that the engine's TeX does not have (gathered, cases, \overset) into plain TeX. -->

```toml
serde_json = "=1.0.151"
```

## A law

Each law has 1 convention for its parameters, and every formula on this page uses it.

```rust
//| caption: The family and the law.
let family = choice("Family", &FAMILIES.map(|f| f.0), 0);
let entry = &family_laws(family)[choice("Law", &family_laws(family).iter().map(|l| fit(s(&l["name"]))).collect::<Vec<_>>(), 0)];
let id = s(&entry["id"]);
```

```rust
//| caption: The convention, the law, the parameters, the moments and the transforms.
html(&about(entry));
```

## Draw a sample

Each sampler is exact, and only the gamma and zeta laws use rejection. For a vector parameter, the histogram shows 1 component, or a sum for the multivariate normal law.

```rust
//| caption: The sample size and the seed.
let size = slider("Sample size: 2^k draws", 6.0, 16.0, 1.0, 13.0) as u32;
let seed = slider("Seed", 1.0, 1000.0, 1.0, 1.0) as u64;
```

```rust
//| caption: The parameters of the law.
let spec = DRAWN.iter().find(|d| d.0 == id);
let params: Vec<f64> = spec.map_or(vec![], |d| d.1.iter().map(|p| slider(p.1, p.2, p.3, p.4, p.5)).collect());
let sample: Result<Vec<f64>, String> = match spec {
    None => Err("The notebook draws only from the laws of the first 3 families. A constructed law, a copula or a process takes its parts from a model, and the Monte Carlo models notebook of this series runs those.".into()),
    Some(_) => valid(id, &params).map(|_| draws(id, &params, seed, 1 << size)),
};
```

In the χ² test row, a p-value below about 0.001 at several seeds shows an error in a sampler or a formula. The histogram has 40 equal bins from the 0.5 % to the 99.5 % quantile of the sample. A discrete law shows each value up to the 99.5 % quantile.

```rust
//| caption: The sample against the exact law: histogram and PMF or PDF.
match &sample {
    Err(e) => println!("{e}"),
    Ok(xs) => {
        show(id, &params, xs);
        let (mean, var) = moments(id, &params);
        let (m, v) = stats(xs);
        let n = xs.len() as f64;
        let exact = |x: Option<f64>| x.map_or("not finite".into(), sig);
        let mut rows = vec![
            vec!["Mean".into(), exact(mean), format!("{} ± {}", sig(m), sig(1.96 * (v / n).sqrt()))],
            vec!["Variance".into(), exact(var), sig(v)],
        ];
        if let Some((chi, df)) = chi2(id, &params, xs) {
            rows.push(vec!["χ² test".into(), format!("{df} degrees of freedom"), format!("χ² = {}, p = {}", sig(chi), sig(gamma_q(df as f64 / 2.0, chi / 2.0)))]);
        }
        table(&["", "Exact", &format!("Sample of {}", xs.len())], &rows);
        if mean.is_none() { println!("The exact mean is not finite, so the sample mean does not settle as the sample grows.") }
        else if var.is_none() { println!("The variance is not finite, so the ± 1.96 standard errors of the sample mean do not give a 95 % interval.") }
    }
}
```

## The law of large numbers

The mean of n draws tends to the exact mean when $\mathbb{E}|X| < \infty$, and the CLT band needs a finite variance. To see a failure, try the Cauchy law, or a Pareto law with $\alpha \le 2$.

```rust
//| caption: The running mean of one sample against log10 n, with the exact mean and the CLT band μ ± 1.96 σ / sqrt(n).
if let (Ok(xs), Some(_)) = (&sample, spec) {
    let (mean, var) = moments(id, &params);
    let (mut sum, mut at, mut avg) = (0.0, vec![], vec![]);
    for (k, x) in xs.iter().enumerate() {
        sum += x;
        let n = (k + 1) as f64;
        if k < 64 || k % (xs.len() / 256).max(1) == 0 { at.push(n.log10()); avg.push(sum / n) }
    }
    let mut plot = Plot::new().line(&at, &avg).labels("log10 n", "mean of n draws");
    if let Some(mu) = mean {
        plot = plot.line(&at, &vec![mu; at.len()]);
        if let Some(v) = var {
            let band = |side: f64| at.iter().map(|l| mu + side * 1.96 * (v / 10f64.powf(*l)).sqrt()).collect::<Vec<_>>();
            let (lo, hi) = (band(-1.0), band(1.0));
            let spread = (hi[at.len() / 8] - lo[at.len() / 8]).abs().max(1e-12);
            plot = plot.line(&at, &lo).line(&at, &hi).ylim(mu - 2.0 * spread, mu + 2.0 * spread);
        }
    }
    plot.show();
    println!("After {} draws the mean is {}.{}", xs.len(), sig(sum / xs.len() as f64), mean.map_or(" The law has no finite mean.".into(), |m| format!(" The exact mean is {}.", sig(m))));
}
```

Each of the 400 intervals $\bar X_n \pm 1.96\, s_n/\sqrt{n}$ uses n new draws and their standard deviation $s_n$. With a finite variance, the fraction that holds the exact mean tends to 95 %, but slowly for a skewed law. With an infinite variance, it stays below 95 %.

```rust
//| caption: How often the CLT interval holds the exact mean.
let each = slider("Draws in each interval: n", 5.0, 500.0, 5.0, 30.0) as usize;
if let (Ok(_), Some(_)) = (&sample, spec) {
    match moments(id, &params).0 {
        None => println!("This law has no finite mean, so no interval can hold it."),
        Some(mu) => {
            let hits = (0..400u64).filter(|r| {
                let (m, v) = stats(&draws(id, &params, seed * 1000 + r, each));
                (m - mu).abs() <= 1.96 * (v / each as f64).sqrt()
            }).count();
            println!("{hits} of 400 intervals ({} %) hold the exact mean {}.", sig(hits as f64 / 4.0), sig(mu));
            println!("The count of a correct 95 % interval is 380 ± 9 (one standard deviation).");
        }
    }
}
```

## Limit theorems

The catalogue gives 24 theorems that the Monte Carlo method needs.

```rust
//| caption: The theorem, its assumptions, its proof and a counterexample.
let theorems = data()[1].as_array().unwrap();
let th = &theorems[choice("Theorem", &theorems.iter().map(|t| fit(s(&t["title"]))).collect::<Vec<_>>(), 0)];
html(&theorem(th));
```

## Glossary

A term matches when every word is in the term or its definition. Matches in the term come first.

```rust
//| caption: The terms that match.
let q = field("Find a term", "tail");
let found = glossary(&q);
println!("{} of {} terms match.", found.len(), data()[2].as_array().unwrap().len());
table(&["Term", "Definition"], &found.iter().take(30).map(|g| vec![fit(s(&g["term"])), fit(s(&g["definition"]))]).collect::<Vec<_>>());
```

## Published run limits

These limits are for the workbench page, which ran in 4 workers. This notebook runs in 1 thread, so its samples are smaller.

```rust
//| caption: The limits and the measured speeds, as the data gives them.
for (key, name) in [("measured", "Models and experiments"), ("rare", "Rare events"), ("chains", "Markov chains, sequential and quasi-Monte Carlo"), ("physics", "Statistical physics")] {
    let block = data()[3][key].as_object().unwrap();
    html(&format!("<h3>{name}</h3><p>{}</p>", esc(&fit(s(&block["how"])))));
    table(&["Setting", "Value"], &block.iter().filter(|(k, v)| *k != "how" && !v.is_array()).map(|(k, v)| vec![k.clone(), fit(&v.to_string().replace('"', ""))]).collect::<Vec<_>>());
    for (_, list) in block.iter().filter(|(_, v)| v.is_array()) {
        let rows = list.as_array().unwrap();
        let head: Vec<String> = match &rows[0] { Value::Object(o) => o.keys().cloned().collect(), _ => vec!["example".into(), "seconds".into()] };
        let cells = |r: &Value| -> Vec<String> { match r { Value::Object(o) => o.values().map(|v| fit(&v.to_string().replace('"', ""))).collect(), Value::Array(a) => a.iter().map(|v| fit(&v.to_string().replace('"', ""))).collect(), _ => vec![] } };
        table(&head.iter().map(String::as_str).collect::<Vec<_>>(), &rows.iter().map(cells).collect::<Vec<Vec<String>>>());
    }
}
```

# The code

```rust
//| caption: The data and the text.
use engine::doc::{esc, mathml};
use serde_json::Value;
use std::f64::consts::PI;
use std::sync::OnceLock;

static DATA: OnceLock<[Value; 4]> = OnceLock::new();
/// The laws, the theorems, the glossary and the limits.
fn data() -> &'static [Value; 4] {
    DATA.get_or_init(|| [
        data!("viz/monte-carlo-workbench/data/laws.json"),
        data!("viz/monte-carlo-workbench/data/theory.json"),
        data!("viz/monte-carlo-workbench/data/glossary.json"),
        data!("viz/monte-carlo-workbench/data/limits.json"),
    ].map(|b| serde_json::from_slice(b).unwrap()))
}
fn laws() -> &'static [Value] { data()[0].as_array().unwrap() }
fn law(id: &str) -> &'static Value { laws().iter().find(|l| l["id"] == id).unwrap() }
fn s(v: &Value) -> &str { v.as_str().unwrap_or("") }

/// The families: a name, and the id of the first law of each in the order of the data.
const FAMILIES: [(&str, &str); 6] = [
    ("Discrete", "bernoulli"), ("Continuous", "cuniform"), ("Positive, heavy-tailed and extreme-value", "lognormal"),
    ("Censored and constructed", "censoring"), ("Conditional and copulas", "conditional"), ("Processes", "brownian"),
];
fn family_laws(k: usize) -> &'static [Value] {
    let at = |id: &str| laws().iter().position(|l| l["id"] == id).unwrap();
    &laws()[at(FAMILIES[k].1)..FAMILIES.get(k + 1).map_or(laws().len(), |f| at(f.1))]
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
            c => { out.push(c); continue }
        };
        out += rep;
    }
    out
}

/// The group in braces that opens at byte `i` of `t`: its inside, and the byte after it.
fn group(t: &str, i: usize) -> (&str, usize) {
    let mut depth = 0;
    for (k, c) in t[i..].char_indices() {
        match c {
            '{' => depth += 1,
            '}' => { depth -= 1; if depth == 0 { return (&t[i + 1..i + k], i + k + 1) } }
            _ => {}
        }
    }
    (&t[(i + 1).min(t.len())..], t.len())
}

/// TeX from the data in the engine's TeX, which has no environments: a gathered block gives one line for each
/// row, a cases block "a if c, b if d", and \overset{a}{b} the script b^a.
fn lines(t: &str) -> Vec<String> {
    let mut t = t.replace("\\textstyle", "").replace("\\Longrightarrow", "\\implies");
    while let Some(i) = t.find("\\begin{cases}") {
        let j = t[i..].find("\\end{cases}").map_or(t.len(), |j| i + j);
        let rows: Vec<String> = t[i + 13..j].split("\\\\").map(|r| match r.split_once('&') {
            Some((v, c)) => format!("{v} \\text{{ if }} {c}"),
            None => r.into(),
        }).collect();
        t = format!("{} \\left\\{{ {} \\right.{}", &t[..i], rows.join(", \\quad "), &t[(j + 11).min(t.len())..]);
    }
    while let Some(i) = t.find("\\overset") {
        let (a, j) = group(&t, i + 8);
        let (b, k) = group(&t, j);
        t = format!("{}{{{b}}}^{{{a}}}{}", &t[..i], &t[k..]);
    }
    t.replace("\\begin{gathered}", "").replace("\\end{gathered}", "").split("\\\\").map(|l| l.trim().to_string()).filter(|l| !l.is_empty()).collect()
}
fn math(t: &str) -> String { lines(t).iter().map(|l| mathml(l, false)).collect::<Vec<_>>().join(" ") }
fn display(t: &str) -> String { lines(t).iter().map(|l| mathml(l, true)).collect() }
/// A transform is TeX, except 4 that the data gives as sentences.
fn tex_or_text(t: &str) -> String { if !t.contains('\\') && t.ends_with('.') { esc(&fit(t)) } else { math(t) } }
fn para(t: &str) -> String { format!("<p>{}</p>", esc(&fit(t))) }
fn bullets<'a>(v: impl Iterator<Item = &'a Value>) -> String { format!("<ul>{}</ul>", v.map(|x| format!("<li>{}</li>", esc(&fit(s(x))))).collect::<String>()) }

/// The page of a law.
fn about(l: &Value) -> String {
    let mut h = para(s(&l["convention"]));
    for k in ["pmf", "pdf", "formula"] { if let Some(t) = l[k].as_str() { h += &display(t) } }
    h += "<h3>Parameters</h3><table><tr><th>Name</th><th>Symbol</th><th>Domain</th></tr>";
    for p in l["params"].as_array().unwrap() {
        h += &format!("<tr><td>{}</td><td>{}</td><td>{}</td></tr>", esc(&fit(s(&p["name"]))), math(s(&p["tex"])), math(s(&p["domain"])));
    }
    h += &format!("</table><p>Support: {}</p>", math(s(&l["support"])));
    let m = &l["moments"];
    h += &format!("<h3>Moments</h3><p>Mean: {}</p><p>Variance: {}</p>{}", math(s(&m["mean"])), math(s(&m["variance"])), para(s(&m["existence"])));
    h += "<h3>Transforms</h3>";
    for (k, name) in [("pgf", "PGF"), ("lt", "Laplace transform"), ("mgf", "MGF"), ("cf", "Characteristic function"), ("generator", "Generator")] {
        if let Some(t) = l["transforms"][k].as_str() { h += &format!("<p>{name}: {}</p>", tex_or_text(t)) }
    }
    for (key, title, parts) in [
        ("conditions", "Conditions", &[("stationarity", "Stationarity"), ("stability", "Stability"), ("explosion", "Explosion"), ("boundary", "Boundary"), ("discretisation", "Discretisation")][..]),
        ("dependence", "Dependence", &[("tau", "Kendall's tau"), ("tails", "Tail dependence"), ("domain", "Domain")][..]),
    ] {
        if l[key].is_object() {
            h += &format!("<h3>{title}</h3>");
            for (k, name) in parts { if let Some(t) = l[key][k].as_str() { h += &format!("<p><strong>{name}.</strong> {}</p>", esc(&fit(t))) } }
        }
    }
    if let Some(m) = l["methods"].as_array() { h += &format!("<h3>Sampling methods</h3>{}", bullets(m.iter())) }
    h += &format!("<h3>Limit and special cases</h3>{}", bullets(l["limits"].as_array().unwrap().iter()));
    let links: String = l["links"].as_array().unwrap().iter().map(|k| {
        let to = laws().iter().find(|m| m["id"] == k["to"]).map_or(s(&k["to"]), |m| s(&m["name"]));
        format!("<li>{}: {}</li>", esc(&fit(to)), esc(&fit(s(&k["relation"]))))
    }).collect();
    h + &format!("<h3>Related laws</h3><ul>{links}</ul>")
}

/// The page of a theorem. Its experiment is in another notebook of this series, except the laws of large
/// numbers, which the chapter above runs.
fn theorem(t: &Value) -> String {
    let e = t["experiment"].as_object().unwrap();
    let (kind, name) = e.iter().find(|(k, _)| *k != "settings").map(|(k, v)| (k.as_str(), s(v))).unwrap();
    let place = match kind { "model" => r#"<a href="../mcmodels/index.html">the Monte Carlo models notebook</a>"#, "physics" => r#"<a href="../mcphysics/index.html">the Monte Carlo physics notebook</a>"#, _ => r#"<a href="../mcchains/index.html">the Monte Carlo chains and rare events notebook</a>"# };
    format!("{}<h3>Assumptions</h3>{}<h3>Proof</h3>{}<h3>Counterexample</h3>{}<h3>Reference</h3>{}{}",
        display(s(&t["statement"])), bullets(t["assumptions"].as_array().unwrap().iter()), para(s(&t["proof"])),
        para(s(&t["counterexample"])), para(s(&t["reference"])), format!("<p>Its experiment, {}, is in {place} of this series.</p>", esc(&fit(name))))
}

/// The glossary terms that hold every word: those with the words in the term first.
fn glossary(q: &str) -> Vec<&'static Value> {
    let words: Vec<String> = q.to_lowercase().split_whitespace().map(String::from).collect();
    let all = data()[2].as_array().unwrap();
    let has = |g: &Value, name: bool| {
        let t = if name { s(&g["term"]).to_lowercase() } else { format!("{} {}", s(&g["term"]), s(&g["definition"])).to_lowercase() };
        words.iter().all(|w| t.contains(w.as_str()))
    };
    all.iter().filter(|g| has(g, true)).chain(all.iter().filter(|g| !has(g, true) && has(g, false))).collect()
}

/// A value to `n` significant digits with a true minus sign: −4.095, 30000, 2e11.
fn fix(v: f64, n: usize) -> String {
    if !v.is_finite() { return "–".into() }
    let t = format!("{:.*e}", n - 1, v);
    let (m, e) = t.split_once('e').unwrap();
    let e: i32 = e.parse().unwrap();
    let trim = |t: String| if t.contains('.') { t.trim_end_matches('0').trim_end_matches('.').to_string() } else { t };
    let t = if v != 0.0 && !(-4..6).contains(&e) { format!("{}e{e}", trim(m.into())) } else { trim(format!("{:.*}", (n as i32 - 1 - e).max(0) as usize, v)) };
    if t == "-0" { "0".into() } else { t.replace('-', "−") }
}
fn sig(v: f64) -> String { fix(v, 4) }
```

```rust
//| caption: The samplers: a generator, a sampler for each law, its PMF or PDF and its moments.
/// A parameter slider: the name in the data, the label, the least and the largest value, the step and the default.
type P = (&'static str, &'static str, f64, f64, f64, f64);
/// The laws that the notebook draws from. A vector parameter gets sliders for its scalars: the categorical
/// law has 4 weights, the multinomial law p = (p_1, (1 − p_1) 3/5, (1 − p_1) 2/5) and the histogram of X_1,
/// the bivariate normal law unit variances, the correlation ρ and the histogram of X_1 + X_2, the Dirichlet
/// law α = c (0.5, 0.3, 0.2) and the histogram of X_1. The zeta law has N = ∞.
const DRAWN: [(&str, &[P]); 39] = [
    ("bernoulli", &[("p", "p", 0.0, 1.0, 0.01, 0.3)]),
    ("binomial", &[("n", "n (trials)", 1.0, 200.0, 1.0, 10.0), ("p", "p", 0.0, 1.0, 0.01, 0.3)]),
    ("categorical", &[("p", "weight of label 1", 0.0, 1.0, 0.01, 0.5), ("p", "weight of label 2", 0.0, 1.0, 0.01, 0.3), ("p", "weight of label 3", 0.0, 1.0, 0.01, 0.15), ("p", "weight of label 4", 0.0, 1.0, 0.01, 0.05)]),
    ("multinomial", &[("n", "n (draws)", 1.0, 100.0, 1.0, 20.0), ("p", "p_1", 0.01, 0.98, 0.01, 0.5)]),
    ("uniform", &[("a", "a (least value)", -10.0, 10.0, 1.0, 1.0), ("b", "b (largest value)", -10.0, 20.0, 1.0, 6.0)]),
    ("geometric", &[("p", "p", 0.01, 1.0, 0.01, 0.2)]),
    ("negbin", &[("r", "r", 0.1, 50.0, 0.1, 2.0), ("p", "p", 0.05, 1.0, 0.01, 0.33)]),
    ("poisson", &[("lambda", "λ (mean)", 0.0, 100.0, 0.1, 5.0)]),
    ("hypergeometric", &[("N", "N (items)", 1.0, 200.0, 1.0, 50.0), ("K", "K (success items)", 0.0, 200.0, 1.0, 20.0), ("n", "n (draws)", 0.0, 200.0, 1.0, 20.0)]),
    ("zipf", &[("s", "s (N = ∞)", 1.05, 4.0, 0.05, 1.8)]),
    ("cuniform", &[("a", "a (least value)", -5.0, 5.0, 0.1, 0.0), ("b", "b (largest value)", -5.0, 10.0, 0.1, 1.0)]),
    ("normal", &[("mu", "μ", -20.0, 20.0, 0.1, 10.0), ("sigma", "σ", 0.1, 10.0, 0.1, 2.0)]),
    ("mvnormal", &[("cov", "ρ (correlation of X_1 and X_2)", -0.95, 0.95, 0.05, 0.5)]),
    ("exponential", &[("rate", "λ (rate)", 0.05, 5.0, 0.05, 1.0)]),
    ("gamma", &[("k", "k (shape)", 0.1, 30.0, 0.1, 2.0), ("theta", "θ (scale)", 0.1, 10.0, 0.1, 2.0)]),
    ("erlang", &[("k", "k (phases)", 1.0, 30.0, 1.0, 3.0), ("rate", "λ (rate of a phase)", 0.05, 5.0, 0.05, 0.5)]),
    ("beta", &[("a", "a (shape at 0)", 0.1, 40.0, 0.1, 1.5), ("b", "b (shape at 1)", 0.1, 40.0, 0.1, 3.5)]),
    ("dirichlet", &[("alpha", "c (α = c (0.5, 0.3, 0.2))", 0.5, 100.0, 0.5, 10.0)]),
    ("chisq", &[("nu", "ν (degrees of freedom)", 0.5, 60.0, 0.5, 5.0)]),
    ("student", &[("nu", "ν (degrees of freedom)", 0.5, 60.0, 0.5, 3.0)]),
    ("fisher", &[("d1", "d_1", 0.5, 60.0, 0.5, 10.0), ("d2", "d_2", 0.5, 60.0, 0.5, 5.0)]),
    ("logistic", &[("mu", "μ", -10.0, 10.0, 0.1, 0.0), ("s", "s (scale)", 0.1, 5.0, 0.05, 0.55)]),
    ("laplace", &[("mu", "μ", -10.0, 10.0, 0.1, 0.0), ("b", "b (scale)", 0.1, 5.0, 0.05, 0.7)]),
    ("lognormal", &[("mu", "μ (of log X)", -3.0, 3.0, 0.1, 0.0), ("sigma", "σ (of log X)", 0.1, 3.0, 0.05, 1.0)]),
    ("weibull", &[("k", "k (shape)", 0.2, 10.0, 0.1, 1.5), ("lambda", "λ (scale)", 0.1, 10.0, 0.1, 1.0)]),
    ("invgauss", &[("mu", "μ (mean)", 0.1, 10.0, 0.1, 1.0), ("lambda", "λ (shape)", 0.1, 20.0, 0.1, 1.0)]),
    ("gompertz", &[("eta", "η", 0.001, 2.0, 0.001, 0.012), ("b", "b (growth rate of the hazard)", 0.005, 1.0, 0.001, 0.087)]),
    ("loglogistic", &[("alpha", "α (median)", 0.1, 10.0, 0.1, 1.0), ("beta", "β (shape)", 0.2, 10.0, 0.1, 3.0)]),
    ("pareto1", &[("xm", "x_m (least value)", 0.1, 10.0, 0.1, 1.0), ("alpha", "α (tail index)", 0.2, 6.0, 0.05, 1.5)]),
    ("pareto2", &[("mu", "μ", -5.0, 5.0, 0.1, 0.0), ("sigma", "σ", 0.1, 10.0, 0.1, 1.0), ("alpha", "α (tail index)", 0.2, 6.0, 0.05, 1.5)]),
    ("burr12", &[("c", "c (shape of the body)", 0.2, 10.0, 0.1, 3.0), ("k", "k (shape of the tail)", 0.1, 10.0, 0.1, 1.0), ("lambda", "λ (scale)", 0.1, 10.0, 0.1, 1.0)]),
    ("frechet", &[("alpha", "α (tail index)", 0.2, 10.0, 0.1, 1.5), ("s", "s (scale)", 0.1, 10.0, 0.1, 1.0), ("m", "m (least value)", -5.0, 5.0, 0.1, 0.0)]),
    ("cauchy", &[("x0", "x_0", -10.0, 10.0, 0.1, 0.0), ("gamma", "γ (scale)", 0.1, 10.0, 0.1, 1.0)]),
    ("levy", &[("mu", "μ (least value)", -5.0, 5.0, 0.1, 0.0), ("c", "c (scale)", 0.1, 10.0, 0.1, 1.0)]),
    ("stable", &[("alpha", "α (index)", 0.2, 2.0, 0.05, 1.5), ("beta", "β (skewness)", -1.0, 1.0, 0.05, 0.0), ("gamma", "γ (scale)", 0.1, 5.0, 0.05, 1.0), ("delta", "δ (location)", -5.0, 5.0, 0.1, 0.0)]),
    ("gev", &[("xi", "ξ (shape)", -1.0, 1.0, 0.05, 0.2), ("mu", "μ", -5.0, 5.0, 0.1, 0.0), ("sigma", "σ", 0.1, 5.0, 0.1, 1.0)]),
    ("gpd", &[("xi", "ξ (shape)", -1.0, 1.0, 0.05, 0.25), ("sigma", "σ", 0.1, 5.0, 0.1, 1.0), ("mu", "μ (threshold)", -5.0, 5.0, 0.1, 0.0)]),
    ("gumbel", &[("mu", "μ", -5.0, 5.0, 0.1, 0.0), ("beta", "β (scale)", 0.1, 5.0, 0.1, 1.0)]),
    ("revweibull", &[("alpha", "α (shape)", 0.1, 10.0, 0.1, 2.0), ("mu", "μ (end point)", -5.0, 5.0, 0.1, 0.0), ("sigma", "σ", 0.1, 5.0, 0.1, 1.0)]),
];

/// xoshiro256** from a seed through splitmix64.
struct Rng([u64; 4]);
impl Rng {
    fn new(seed: u64) -> Rng {
        let mut z = seed;
        let mut next = || {
            z = z.wrapping_add(0x9e3779b97f4a7c15);
            let x = (z ^ (z >> 30)).wrapping_mul(0xbf58476d1ce4e5b9);
            let x = (x ^ (x >> 27)).wrapping_mul(0x94d049bb133111eb);
            x ^ (x >> 31)
        };
        Rng([next(), next(), next(), next()])
    }
    fn next(&mut self) -> u64 {
        let s = &mut self.0;
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
    fn u(&mut self) -> f64 { ((self.next() >> 11) as f64 + 0.5) / (1u64 << 53) as f64 }
    fn exp(&mut self) -> f64 { -self.u().ln() }
    /// Box–Muller.
    fn normal(&mut self) -> f64 { (-2.0 * self.u().ln()).sqrt() * (2.0 * PI * self.u()).cos() }
    /// Marsaglia and Tsang's rejection method; a shape below 1 by Γ(k + 1) U^(1/k).
    fn gamma(&mut self, k: f64) -> f64 {
        if k < 1.0 { return self.gamma(k + 1.0) * self.u().powf(1.0 / k) }
        let (d, c) = (k - 1.0 / 3.0, 1.0 / (9.0 * k - 3.0).sqrt());
        loop {
            let z = self.normal();
            let v = (1.0 + c * z).powi(3);
            if v > 0.0 && self.u().ln() < 0.5 * z * z + d - d * v + d * v.ln() { return d * v }
        }
    }
    /// Inversion, in parts of at most 500 for a large mean.
    fn poisson(&mut self, l: f64) -> f64 {
        if l > 500.0 { return self.poisson(500.0) + self.poisson(l - 500.0) }
        let u = self.u();
        let (mut k, mut p) = (0.0, (-l).exp());
        let mut f = p;
        while u > f && (p > 1e-300 || k < l) { k += 1.0; p *= l / k; f += p }
        k
    }
    /// Inversion from 0, on the side p ≤ 1/2.
    fn binomial(&mut self, n: f64, p: f64) -> f64 {
        if p > 0.5 { return n - self.binomial(n, 1.0 - p) }
        let (q, u) = (1.0 - p, self.u());
        let (mut k, mut pk) = (0.0, q.powf(n));
        let mut f = pk;
        while u > f && k < n { pk *= (n - k) / (k + 1.0) * p / q; k += 1.0; f += pk }
        k
    }
}

/// `n` draws from a law, from one seed.
fn draws(id: &str, p: &[f64], seed: u64, n: usize) -> Vec<f64> {
    let mut r = Rng::new(seed);
    (0..n).map(|_| draw(id, p, &mut r)).collect()
}

/// The parameters outside the domain, as a sentence; the sliders keep every other one inside it.
fn valid(id: &str, p: &[f64]) -> Result<(), String> {
    let bad = match id {
        "uniform" if p[0] > p[1] => "the domain needs a ≤ b",
        "cuniform" if p[0] >= p[1] => "the domain needs a < b",
        "hypergeometric" if p[1] > p[0] || p[2] > p[0] => "the domain needs K ≤ N and n ≤ N",
        "categorical" if p.iter().sum::<f64>() <= 0.0 => "the domain needs a positive weight",
        _ => return Ok(()),
    };
    Err(format!("No sample: {bad}."))
}

/// One draw. Each method is exact.
fn draw(id: &str, p: &[f64], r: &mut Rng) -> f64 {
    let u = r.u();
    match id {
        "bernoulli" => (u < p[0]) as u8 as f64,
        "binomial" => r.binomial(p[0], p[1]),
        "categorical" => {
            let (total, mut at) = (p.iter().sum::<f64>(), 0.0);
            p.iter().position(|w| { at += w; u * total < at }).map_or(p.len(), |k| k + 1) as f64
        }
        // X_1 of a multinomial draw by conditional binomials; the other counts follow it.
        "multinomial" => r.binomial(p[0], p[1]),
        "uniform" => p[0] + (u * (p[1] - p[0] + 1.0)).floor(),
        "geometric" => if p[0] >= 1.0 { 0.0 } else { (u.ln() / (1.0 - p[0]).ln()).floor() },
        // The gamma–Poisson mixture.
        "negbin" => { let l = r.gamma(p[0]) * (1.0 - p[1]) / p[1]; r.poisson(l) }
        "poisson" => r.poisson(p[0]),
        // An urn: n draws without replacement.
        "hypergeometric" => {
            let (mut big, mut good, mut x) = (p[0], p[1], 0.0);
            for _ in 0..p[2] as usize { if r.u() * big < good { x += 1.0; good -= 1.0 } big -= 1.0 }
            x
        }
        // Devroye's rejection method for the zeta law.
        "zipf" => {
            let (a, b) = (p[0], 2f64.powf(p[0] - 1.0));
            loop {
                let x = r.u().powf(-1.0 / (a - 1.0)).floor();
                let t = (1.0 + 1.0 / x).powf(a - 1.0);
                if r.u() * x * (t - 1.0) / (b - 1.0) <= t / b { return x }
            }
        }
        "cuniform" => p[0] + (p[1] - p[0]) * u,
        "normal" => p[0] + p[1] * r.normal(),
        // X_1 + X_2 with X_2 = ρ X_1 + √(1 − ρ²) Z_2, the Cholesky factor of the correlation matrix.
        "mvnormal" => { let (z1, z2) = (r.normal(), r.normal()); z1 + p[0] * z1 + (1.0 - p[0] * p[0]).sqrt() * z2 }
        "exponential" => -u.ln() / p[0],
        "gamma" => r.gamma(p[0]) * p[1],
        "erlang" => r.gamma(p[0]) / p[1],
        "beta" => { let x = r.gamma(p[0]); x / (x + r.gamma(p[1])) }
        // X_1 of the normalised gammas G_j / Σ G.
        "dirichlet" => { let g: Vec<f64> = [0.5, 0.3, 0.2].map(|w| r.gamma(w * p[0])).to_vec(); g[0] / g.iter().sum::<f64>() }
        "chisq" => 2.0 * r.gamma(p[0] / 2.0),
        "student" => r.normal() / (2.0 * r.gamma(p[0] / 2.0) / p[0]).sqrt(),
        "fisher" => (r.gamma(p[0] / 2.0) / p[0]) / (r.gamma(p[1] / 2.0) / p[1]),
        "logistic" => p[0] + p[1] * (u / (1.0 - u)).ln(),
        "laplace" => p[0] - p[1] * (u - 0.5).signum() * (1.0 - 2.0 * (u - 0.5).abs()).ln(),
        "lognormal" => (p[0] + p[1] * r.normal()).exp(),
        "weibull" => p[1] * (-u.ln()).powf(1.0 / p[0]),
        // Michael, Schucany and Haas.
        "invgauss" => {
            let (m, l, y) = (p[0], p[1], r.normal().powi(2));
            let x = m + m * m * y / (2.0 * l) - m / (2.0 * l) * (4.0 * m * l * y + m * m * y * y).sqrt();
            if r.u() <= m / (m + x) { x } else { m * m / x }
        }
        "gompertz" => (1.0 - u.ln() / p[0]).ln() / p[1],
        "loglogistic" => p[0] * (u / (1.0 - u)).powf(1.0 / p[1]),
        "pareto1" => p[0] * u.powf(-1.0 / p[1]),
        "pareto2" => p[0] + p[1] * (u.powf(-1.0 / p[2]) - 1.0),
        "burr12" => p[2] * (u.powf(-1.0 / p[1]) - 1.0).powf(1.0 / p[0]),
        "frechet" => p[2] + p[1] * (-u.ln()).powf(-1.0 / p[0]),
        "cauchy" => p[0] + p[1] * (PI * (u - 0.5)).tan(),
        "levy" => p[0] + p[1] / r.normal().powi(2),
        // Chambers, Mallows and Stuck, in Nolan's S0 form: the S1 location is δ − βγ tan(πα/2) for α ≠ 1.
        "stable" => {
            let (a, b, g, d) = (p[0], p[1], p[2], p[3]);
            let (v, w) = (PI * (u - 0.5), r.exp());
            if (a - 1.0).abs() < 1e-9 {
                g * 2.0 / PI * ((PI / 2.0 + b * v) * v.tan() - b * (PI / 2.0 * w * v.cos() / (PI / 2.0 + b * v)).ln()) + d
            } else {
                let z = -b * (PI * a / 2.0).tan();
                let xi = (-z).atan() / a;
                let x = (1.0 + z * z).powf(1.0 / (2.0 * a)) * (a * (v + xi)).sin() / v.cos().powf(1.0 / a) * ((v - a * (v + xi)).cos() / w).powf((1.0 - a) / a);
                g * x + d + z * g
            }
        }
        "gev" => if p[0].abs() < 1e-12 { p[1] - p[2] * (-u.ln()).ln() } else { p[1] + p[2] * ((-u.ln()).powf(-p[0]) - 1.0) / p[0] },
        "gpd" => if p[0].abs() < 1e-12 { p[2] - p[1] * u.ln() } else { p[2] + p[1] * (u.powf(-p[0]) - 1.0) / p[0] },
        "gumbel" => p[0] - p[1] * (-u.ln()).ln(),
        "revweibull" => p[1] - p[2] * (-u.ln()).powf(1.0 / p[0]),
        _ => f64::NAN,
    }
}

fn discrete(id: &str) -> bool { law(id)["type"] == "discrete" }

/// ln Γ(x) by Lanczos (g = 7, 9 terms), with the reflection formula below 1/2.
fn lgam(x: f64) -> f64 {
    if x < 0.5 { return (PI / (PI * x).sin()).abs().ln() - lgam(1.0 - x) }
    const G: [f64; 9] = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
        12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    let x = x - 1.0;
    let a = G[0] + (1..9).map(|i| G[i] / (x + i as f64)).sum::<f64>();
    let t = x + 7.5;
    0.5 * (2.0 * PI).ln() + (x + 0.5) * t.ln() - t + a.ln()
}
fn gam(x: f64) -> f64 { if x < 0.5 { PI / ((PI * x).sin() * gam(1.0 - x)) } else { lgam(x).exp() } }
fn lbeta(a: f64, b: f64) -> f64 { lgam(a) + lgam(b) - lgam(a + b) }
fn lchoose(n: f64, k: f64) -> f64 { lgam(n + 1.0) - lgam(k + 1.0) - lgam(n - k + 1.0) }
const EULER: f64 = 0.5772156649015329;

/// ζ(s) for s > 1, by Euler–Maclaurin summation from 10.
fn zeta(s: f64) -> f64 {
    let n = 10.0f64;
    let mut z = (1..10).map(|k| (k as f64).powf(-s)).sum::<f64>() + n.powf(1.0 - s) / (s - 1.0) + 0.5 * n.powf(-s);
    let mut f = s * n.powf(-s - 1.0);
    for (j, c) in [1.0 / 12.0, -1.0 / 720.0, 1.0 / 30240.0, -1.0 / 1209600.0, 1.0 / 47900160.0].iter().enumerate() {
        z += c * f;
        let j = j as f64 + 1.0;
        f *= (s + 2.0 * j - 1.0) * (s + 2.0 * j) / (n * n);
    }
    z
}

/// The exponential integral E_1(x), x > 0: its series to 1, then its continued fraction.
fn e1(x: f64) -> f64 {
    if x <= 1.0 {
        let (mut t, mut sum) = (1.0, 0.0);
        for k in 1..60 { t *= -x / k as f64; sum += t / k as f64 }
        return -EULER - x.ln() - sum;
    }
    let (mut b, mut c, mut d) = (x + 1.0, 1e300, 1.0 / (x + 1.0));
    let mut h = d;
    for i in 1..300 {
        let a = -((i * i) as f64);
        b += 2.0;
        d = 1.0 / (a * d + b);
        c = b + a / c;
        h *= c * d;
        if (c * d - 1.0).abs() < 1e-16 { break }
    }
    h * (-x).exp()
}

/// The regularised upper incomplete gamma function Q(a, x): the series below a + 1, the continued fraction above.
fn gamma_q(a: f64, x: f64) -> f64 {
    if x <= 0.0 { return 1.0 }
    let lead = (a * x.ln() - x - lgam(a)).exp();
    if x < a + 1.0 {
        let (mut sum, mut term, mut k) = (1.0 / a, 1.0 / a, a);
        while term > sum * 1e-17 { k += 1.0; term *= x / k; sum += term }
        return (1.0 - lead * sum).max(0.0);
    }
    let (mut b, mut c, mut d) = (x + 1.0 - a, 1e300, 1.0 / (x + 1.0 - a));
    let mut h = d;
    for i in 1..300 {
        let an = -(i as f64) * (i as f64 - a);
        b += 2.0;
        d = 1.0 / (an * d + b);
        c = b + an / c;
        h *= c * d;
        if (c * d - 1.0).abs() < 1e-16 { break }
    }
    lead * h
}

/// The PMF at an integer or the PDF at x, as the data writes it; `None` where the law has no closed form.
fn density(id: &str, p: &[f64], x: f64) -> Option<f64> {
    let levy = |x: f64, c: f64| if x > 0.0 { (c / (2.0 * PI)).sqrt() * (-c / (2.0 * x)).exp() / x.powf(1.5) } else { 0.0 };
    let normal = |x: f64, m: f64, s: f64| (-0.5 * ((x - m) / s).powi(2)).exp() / (s * (2.0 * PI).sqrt());
    let gamma = |x: f64, k: f64, th: f64| if x > 0.0 { ((k - 1.0) * x.ln() - x / th - lgam(k) - k * th.ln()).exp() } else { 0.0 };
    let beta = |x: f64, a: f64, b: f64| if x > 0.0 && x < 1.0 { ((a - 1.0) * x.ln() + (b - 1.0) * (1.0 - x).ln() - lbeta(a, b)).exp() } else { 0.0 };
    let binom = |k: f64, n: f64, q: f64| if k < 0.0 || k > n { 0.0 } else if q == 0.0 || q == 1.0 { (k == n * q) as u8 as f64 } else { (lchoose(n, k) + k * q.ln() + (n - k) * (1.0 - q).ln()).exp() };
    let pos = |f: f64| if x > 0.0 { f } else { 0.0 };
    Some(match id {
        "bernoulli" => if x == 1.0 { p[0] } else if x == 0.0 { 1.0 - p[0] } else { 0.0 },
        "binomial" => binom(x, p[0], p[1]),
        "categorical" => if (1.0..=4.0).contains(&x) { p[x as usize - 1] / p.iter().sum::<f64>() } else { 0.0 },
        "multinomial" => binom(x, p[0], p[1]),
        "uniform" => if x >= p[0] && x <= p[1] { 1.0 / (p[1] - p[0] + 1.0) } else { 0.0 },
        "geometric" => if x < 0.0 { 0.0 } else if p[0] >= 1.0 { (x == 0.0) as u8 as f64 } else { p[0] * (1.0 - p[0]).powf(x) },
        "negbin" => if x < 0.0 { 0.0 } else { (lgam(x + p[0]) - lgam(x + 1.0) - lgam(p[0]) + p[0] * p[1].ln() + x * (1.0 - p[1]).ln()).exp() },
        "poisson" => if x < 0.0 { 0.0 } else if p[0] == 0.0 { (x == 0.0) as u8 as f64 } else { (x * p[0].ln() - p[0] - lgam(x + 1.0)).exp() },
        "hypergeometric" => {
            let (n, k, m) = (p[0], p[1], p[2]);
            if x < (m + k - n).max(0.0) || x > m.min(k) { 0.0 } else { (lchoose(k, x) + lchoose(n - k, m - x) - lchoose(n, m)).exp() }
        }
        "zipf" => if x >= 1.0 { x.powf(-p[0]) / zeta(p[0]) } else { 0.0 },
        "cuniform" => if x >= p[0] && x <= p[1] { 1.0 / (p[1] - p[0]) } else { 0.0 },
        "normal" => normal(x, p[0], p[1]),
        "mvnormal" => normal(x, 0.0, (2.0 + 2.0 * p[0]).sqrt()),
        "exponential" => if x >= 0.0 { p[0] * (-p[0] * x).exp() } else { 0.0 },
        "gamma" => gamma(x, p[0], p[1]),
        "erlang" => gamma(x, p[0], 1.0 / p[1]),
        "beta" => beta(x, p[0], p[1]),
        "dirichlet" => beta(x, 0.5 * p[0], 0.5 * p[0]),
        "chisq" => gamma(x, p[0] / 2.0, 2.0),
        "student" => (lgam((p[0] + 1.0) / 2.0) - lgam(p[0] / 2.0) - 0.5 * (p[0] * PI).ln() - (p[0] + 1.0) / 2.0 * (1.0 + x * x / p[0]).ln()).exp(),
        "fisher" => {
            let (a, b) = (p[0], p[1]);
            pos((-lbeta(a / 2.0, b / 2.0) + a / 2.0 * (a / b).ln() + (a / 2.0 - 1.0) * x.ln() - (a + b) / 2.0 * (1.0 + a / b * x).ln()).exp())
        }
        "logistic" => { let e = (-(x - p[0]) / p[1]).exp(); e / (p[1] * (1.0 + e).powi(2)) }
        "laplace" => (-(x - p[0]).abs() / p[1]).exp() / (2.0 * p[1]),
        "lognormal" => pos(normal(x.ln(), p[0], p[1]) / x),
        "weibull" => if x >= 0.0 { p[0] / p[1] * (x / p[1]).powf(p[0] - 1.0) * (-(x / p[1]).powf(p[0])).exp() } else { 0.0 },
        "invgauss" => pos((p[1] / (2.0 * PI * x.powi(3))).sqrt() * (-p[1] * (x - p[0]).powi(2) / (2.0 * p[0] * p[0] * x)).exp()),
        "gompertz" => if x >= 0.0 { p[1] * p[0] * (p[1] * x).exp() * (-p[0] * ((p[1] * x).exp() - 1.0)).exp() } else { 0.0 },
        "loglogistic" => { let z = x / p[0]; pos(p[1] / p[0] * z.powf(p[1] - 1.0) / (1.0 + z.powf(p[1])).powi(2)) }
        "pareto1" => if x >= p[0] { p[1] * p[0].powf(p[1]) / x.powf(p[1] + 1.0) } else { 0.0 },
        "pareto2" => if x >= p[0] { p[2] / p[1] * (1.0 + (x - p[0]) / p[1]).powf(-(p[2] + 1.0)) } else { 0.0 },
        "burr12" => { let z = x / p[2]; pos(p[0] * p[1] / p[2] * z.powf(p[0] - 1.0) * (1.0 + z.powf(p[0])).powf(-(p[1] + 1.0))) }
        "frechet" => { let z = (x - p[2]) / p[1]; if z > 0.0 { p[0] / p[1] * z.powf(-1.0 - p[0]) * (-z.powf(-p[0])).exp() } else { 0.0 } }
        "cauchy" => 1.0 / (PI * p[1] * (1.0 + ((x - p[0]) / p[1]).powi(2))),
        "levy" => levy(x - p[0], p[1]),
        // Closed forms: N(δ, 2γ²) at α = 2, Cauchy(δ, γ) at α = 1 and β = 0, Lévy at α = 1/2 and β = ±1.
        "stable" => {
            let (a, b, g, d) = (p[0], p[1], p[2], p[3]);
            if (a - 2.0).abs() < 1e-9 { normal(x, d, 2f64.sqrt() * g) }
            else if (a - 1.0).abs() < 1e-9 && b == 0.0 { 1.0 / (PI * g * (1.0 + ((x - d) / g).powi(2))) }
            else if (a - 0.5).abs() < 1e-9 && b.abs() == 1.0 { levy(b * (x - (d - b * g)), g) }
            else { return None }
        }
        "gev" => {
            let z = (x - p[1]) / p[2];
            let t = if p[0].abs() < 1e-12 { (-z).exp() } else if 1.0 + p[0] * z > 0.0 { (1.0 + p[0] * z).powf(-1.0 / p[0]) } else { return Some(0.0) };
            t.powf(p[0] + 1.0) * (-t).exp() / p[2]
        }
        "gpd" => {
            let z = (x - p[2]) / p[1];
            if z < 0.0 { 0.0 } else if p[0].abs() < 1e-12 { (-z).exp() / p[1] } else if 1.0 + p[0] * z > 0.0 { (1.0 + p[0] * z).powf(-1.0 / p[0] - 1.0) / p[1] } else { 0.0 }
        }
        "gumbel" => { let z = (x - p[0]) / p[1]; (-z - (-z).exp()).exp() / p[1] }
        "revweibull" => { let z = (p[1] - x) / p[2]; if z > 0.0 { p[0] / p[2] * z.powf(p[0] - 1.0) * (-z.powf(p[0])).exp() } else { 0.0 } }
        _ => return None,
    })
}

/// The exact mean and variance, as the data gives them; `None` where one is not finite.
fn moments(id: &str, p: &[f64]) -> (Option<f64>, Option<f64>) {
    let some = |c: bool, v: f64| c.then_some(v);
    let g = |k: f64| gam(k);
    let (m, v) = match id {
        "bernoulli" => (p[0], p[0] * (1.0 - p[0])),
        "binomial" | "multinomial" => (p[0] * p[1], p[0] * p[1] * (1.0 - p[1])),
        "categorical" => {
            let t = p.iter().sum::<f64>();
            let (m, m2) = p.iter().enumerate().fold((0.0, 0.0), |a, (j, w)| (a.0 + (j + 1) as f64 * w / t, a.1 + ((j + 1) as f64).powi(2) * w / t));
            (m, m2 - m * m)
        }
        "uniform" => ((p[0] + p[1]) / 2.0, ((p[1] - p[0] + 1.0).powi(2) - 1.0) / 12.0),
        "geometric" => ((1.0 - p[0]) / p[0], (1.0 - p[0]) / (p[0] * p[0])),
        "negbin" => (p[0] * (1.0 - p[1]) / p[1], p[0] * (1.0 - p[1]) / (p[1] * p[1])),
        "poisson" => (p[0], p[0]),
        "hypergeometric" => { let f = p[1] / p[0]; (p[2] * f, if p[0] > 1.0 { p[2] * f * (1.0 - f) * (p[0] - p[2]) / (p[0] - 1.0) } else { 0.0 }) }
        "zipf" => {
            let (s, z) = (p[0], zeta(p[0]));
            let m = some(s > 2.0, zeta(s - 1.0) / z);
            return (m, some(s > 3.0, zeta(s - 2.0) / z - m.unwrap_or(0.0).powi(2)));
        }
        "cuniform" => ((p[0] + p[1]) / 2.0, (p[1] - p[0]).powi(2) / 12.0),
        "normal" => (p[0], p[1] * p[1]),
        "mvnormal" => (0.0, 2.0 + 2.0 * p[0]),
        "exponential" => (1.0 / p[0], 1.0 / (p[0] * p[0])),
        "gamma" => (p[0] * p[1], p[0] * p[1] * p[1]),
        "erlang" => (p[0] / p[1], p[0] / (p[1] * p[1])),
        "beta" => { let (a, b) = (p[0], p[1]); (a / (a + b), a * b / ((a + b).powi(2) * (a + b + 1.0))) }
        "dirichlet" => (0.5, 0.25 / (p[0] + 1.0)),
        "chisq" => (p[0], 2.0 * p[0]),
        "student" => return (some(p[0] > 1.0, 0.0), some(p[0] > 2.0, p[0] / (p[0] - 2.0))),
        "fisher" => {
            let (a, b) = (p[0], p[1]);
            return (some(b > 2.0, b / (b - 2.0)), some(b > 4.0, 2.0 * b * b * (a + b - 2.0) / (a * (b - 2.0).powi(2) * (b - 4.0))));
        }
        "logistic" => (p[0], (p[1] * PI).powi(2) / 3.0),
        "laplace" => (p[0], 2.0 * p[1] * p[1]),
        "lognormal" => ((p[0] + p[1] * p[1] / 2.0).exp(), ((p[1] * p[1]).exp() - 1.0) * (2.0 * p[0] + p[1] * p[1]).exp()),
        "weibull" => (p[1] * g(1.0 + 1.0 / p[0]), p[1] * p[1] * (g(1.0 + 2.0 / p[0]) - g(1.0 + 1.0 / p[0]).powi(2))),
        "invgauss" => (p[0], p[0].powi(3) / p[1]),
        // The variance has no elementary closed form: 2 ∫ x S(x) dx − E[X]², by Simpson's rule.
        "gompertz" => {
            let (eta, b) = (p[0], p[1]);
            let m = eta.exp() * e1(eta) / b;
            let end = (1.0 + 40.0 / eta).ln() / b;
            (m, simpson(&|x| 2.0 * x * (-eta * ((b * x).exp() - 1.0)).exp(), 0.0, end, 4000) - m * m)
        }
        "loglogistic" => {
            let (a, t) = (p[0], PI / p[1]);
            return (some(p[1] > 1.0, a * t / t.sin()), some(p[1] > 2.0, a * a * (2.0 * t / (2.0 * t).sin() - t * t / t.sin().powi(2))));
        }
        "pareto1" => { let (x, a) = (p[0], p[1]); return (some(a > 1.0, a * x / (a - 1.0)), some(a > 2.0, a * x * x / ((a - 1.0).powi(2) * (a - 2.0)))) }
        "pareto2" => { let a = p[2]; return (some(a > 1.0, p[0] + p[1] / (a - 1.0)), some(a > 2.0, a * p[1] * p[1] / ((a - 1.0).powi(2) * (a - 2.0)))) }
        "burr12" => {
            let (c, k, l) = (p[0], p[1], p[2]);
            let m = some(c * k > 1.0, l * k * lbeta(k - 1.0 / c, 1.0 + 1.0 / c).exp());
            return (m, some(c * k > 2.0, l * l * k * lbeta(k - 2.0 / c, 1.0 + 2.0 / c).exp() - m.unwrap_or(0.0).powi(2)));
        }
        "frechet" => {
            let (a, sc, m) = (p[0], p[1], p[2]);
            return (some(a > 1.0, m + sc * g(1.0 - 1.0 / a)), some(a > 2.0, sc * sc * (g(1.0 - 2.0 / a) - g(1.0 - 1.0 / a).powi(2))));
        }
        "cauchy" | "levy" => return (None, None),
        "stable" => {
            let (a, b, ga, d) = (p[0], p[1], p[2], p[3]);
            return (some(a > 1.0, d - b * ga * (PI * a / 2.0).tan()), some((a - 2.0).abs() < 1e-9, 2.0 * ga * ga));
        }
        "gev" => {
            let (xi, mu, sc) = (p[0], p[1], p[2]);
            if xi.abs() < 1e-12 { (mu + sc * EULER, PI * PI * sc * sc / 6.0) } else {
                return (some(xi < 1.0, mu + sc * (g(1.0 - xi) - 1.0) / xi), some(xi < 0.5, sc * sc * (g(1.0 - 2.0 * xi) - g(1.0 - xi).powi(2)) / (xi * xi)));
            }
        }
        "gpd" => { let (xi, sc, mu) = (p[0], p[1], p[2]); return (some(xi < 1.0, mu + sc / (1.0 - xi)), some(xi < 0.5, sc * sc / ((1.0 - xi).powi(2) * (1.0 - 2.0 * xi)))) }
        "gumbel" => (p[0] + p[1] * EULER, (PI * p[1]).powi(2) / 6.0),
        "revweibull" => (p[1] - p[2] * g(1.0 + 1.0 / p[0]), p[2] * p[2] * (g(1.0 + 2.0 / p[0]) - g(1.0 + 1.0 / p[0]).powi(2))),
        _ => return (None, None),
    };
    (Some(m), Some(v))
}

fn simpson(f: &dyn Fn(f64) -> f64, a: f64, b: f64, m: usize) -> f64 {
    let h = (b - a) / m as f64;
    (0..=m).map(|i| f(a + i as f64 * h) * if i == 0 || i == m { 1.0 } else if i % 2 == 1 { 4.0 } else { 2.0 }).sum::<f64>() * h / 3.0
}

/// The sample mean and the sample variance (Welford).
fn stats(xs: &[f64]) -> (f64, f64) {
    let (mut m, mut q) = (0.0, 0.0);
    for (k, x) in xs.iter().enumerate() { let d = x - m; m += d / (k + 1) as f64; q += d * (x - m) }
    (m, q / (xs.len().max(2) - 1) as f64)
}

/// Pearson's χ² of a sample against the exact law, and its degrees of freedom; `None` without a closed form.
/// Discrete: a cell for each value with an expected count of 5 or more. Continuous: 20 cells between the
/// sample's 5 % and 95 % quantiles, with the PDF integrated over each. One more cell holds the rest.
fn chi2(id: &str, p: &[f64], xs: &[f64]) -> Option<(f64, usize)> {
    density(id, p, xs[0])?;
    let n = xs.len() as f64;
    let mut t = xs.to_vec();
    t.sort_by(f64::total_cmp);
    let count = |a: f64, b: f64| (t.partition_point(|x| *x < b) - t.partition_point(|x| *x < a)) as f64;
    let mut cells = vec![];
    if discrete(id) {
        for k in t[0] as i64..=t[t.len() - 1].min(t[0] + 1e4) as i64 {
            let e = n * density(id, p, k as f64)?;
            if e >= 5.0 { cells.push((count(k as f64, k as f64 + 0.5), e)) }
        }
    } else {
        let q = |f: f64| t[((f * n) as usize).min(t.len() - 1)];
        let edges: Vec<f64> = (0..=20).map(|k| q(0.05 + 0.045 * k as f64)).collect();
        // A cell near a finite end of the support is integrated in the log of the distance to it, where a PDF such
        // as x^(a − 1) at 0 is smooth.
        let (lo, hi) = ends(id, p);
        let f = |x: f64| density(id, p, x).unwrap();
        let mass = |a: f64, b: f64| if a - lo > 0.0 && b - lo > 4.0 * (a - lo) {
            simpson(&|t| f(lo + t.exp()) * t.exp(), (a - lo).ln(), (b - lo).ln(), 64)
        } else if hi - b > 0.0 && hi - a > 4.0 * (hi - b) {
            simpson(&|t| f(hi - t.exp()) * t.exp(), (hi - b).ln(), (hi - a).ln(), 64)
        } else { simpson(&f, a, b, 32) };
        for w in edges.windows(2).filter(|w| w[1] > w[0]) { cells.push((count(w[0], w[1]), n * mass(w[0], w[1]))) }
    }
    let (o, e) = cells.iter().fold((0.0, 0.0), |a, c| (a.0 + c.0, a.1 + c.1));
    if n - e > 1e-6 { cells.push((n - o, n - e)) } else if n - o > 0.0 { return Some((f64::INFINITY, cells.len())) }
    Some((cells.iter().map(|(o, e)| (o - e).powi(2) / e).sum(), cells.len() - 1))
}

/// The ends of the support of a continuous law (where its closed-form PDF is used).
fn ends(id: &str, p: &[f64]) -> (f64, f64) {
    let inf = f64::INFINITY;
    match id {
        "exponential" | "gamma" | "erlang" | "chisq" | "fisher" | "lognormal" | "weibull" | "invgauss" | "gompertz" | "loglogistic" | "burr12" => (0.0, inf),
        "beta" | "dirichlet" => (0.0, 1.0),
        "cuniform" => (p[0], p[1]),
        "pareto1" | "pareto2" | "levy" => (p[0], inf),
        "frechet" => (p[2], inf),
        "gpd" => (p[2], if p[0] < 0.0 { p[2] - p[1] / p[0] } else { inf }),
        "gev" if p[0] > 0.0 => (p[1] - p[2] / p[0], inf),
        "gev" if p[0] < 0.0 => (-inf, p[1] - p[2] / p[0]),
        "revweibull" => (-inf, p[1]),
        "stable" if (p[0] - 0.5).abs() < 1e-9 && p[1] == 1.0 => (p[3] - p[2], inf),
        "stable" if (p[0] - 0.5).abs() < 1e-9 && p[1] == -1.0 => (-inf, p[3] + p[2]),
        _ => (-inf, inf),
    }
}

/// The histogram of a sample with its exact PMF or PDF.
fn show(id: &str, p: &[f64], xs: &[f64]) {
    let mut t = xs.to_vec();
    t.sort_by(f64::total_cmp);
    let n = t.len() as f64;
    let q = |f: f64| t[((f * n) as usize).min(t.len() - 1)];
    let (mut hx, mut hy, mut fx, mut fy) = (vec![], vec![], vec![], vec![]);
    if discrete(id) {
        let (lo, hi) = (t[0], q(0.995).min(t[0] + 80.0));
        let mut k = lo;
        while k <= hi {
            let c = (t.partition_point(|x| *x <= k) - t.partition_point(|x| *x < k)) as f64 / n;
            hx.extend([k - 0.5, k + 0.5]);
            hy.extend([c, c]);
            fx.push(k);
            fy.push(density(id, p, k).unwrap_or(f64::NAN));
            k += 1.0;
        }
        let top = hy.iter().chain(&fy).fold(0.0f64, |a, b| a.max(*b));
        Plot::new().line(&hx, &hy).dots(&fx, &fy).ylim(0.0, 1.1 * top).labels("x (dots: the exact PMF)", "probability").show();
    } else {
        let (lo, hi) = (q(0.005), q(0.995));
        let w = (hi - lo).max(1e-12) / 40.0;
        for i in 0..40 {
            let (a, b) = (lo + i as f64 * w, lo + (i + 1) as f64 * w);
            let c = (t.partition_point(|x| *x < b) - t.partition_point(|x| *x < a)) as f64 / (n * w);
            hx.extend([a, b]);
            hy.extend([c, c]);
        }
        for i in 0..=200 {
            let x = lo + (hi - lo) * i as f64 / 200.0;
            if let Some(f) = density(id, p, x) { fx.push(x); fy.push(f) }
        }
        let top = hy.iter().fold(0.0f64, |a, b| a.max(*b));
        let label = if fx.is_empty() { "x (this law has no closed-form PDF here)" } else { "x (line: the exact PDF)" };
        Plot::new().line(&hx, &hy).line(&fx, &fy).ylim(0.0, 1.3 * top).labels(label, "density").show();
    }
}
```
