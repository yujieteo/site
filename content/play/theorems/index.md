---
title: Theorems
summary: Find a theorem among 2,055 and read its proof one step at a time. Then sort the whole catalogue of 2,389 results.
thumb: 1479
theme: site
seed: 20261010
---

Type the name of a theorem, or words from its statement. Pick a match. Then move the Step slider to read its proof one step at a time: what each step needs, what it does and what it gives. The later chapters show the moves that proofs share, the evidence for each result, and the catalogue of the Theorem Explorer, sorted by score, level or year.

<!-- skill: This notebook ports visuals/viz/theorem-explorer and visuals/viz/theorem-learner. Read the data only through data!, from the files pinned in visuals.lock; never copy data into this file. The scores follow te-rubric/1 in the explorer's raw.json: overall = sum of w_i r_i / 4 when every weighted component is known, else unknown. Keep that rule as it is. -->

<!-- skill: Every text from the data is Markdown with TeX, or a list of segments: a string, or [word, concept index]. Render it with seg(), never by string replacement. A text box and a choice whose options change go in different cells: the page redraws the controls of a cell when its options change, and a redraw takes the focus from the text box. -->

```toml
base64 = "=0.22.1"
miniz_oxide = "=0.9.1"
serde_json = { version = "=1.0.151", features = ["raw_value"] }
```

## Find a theorem

Every word must occur in the name, an alias, a key concept or the statement. The names that hold every word come first, then the aliases, and the short names before the long ones. Only the theorems that have a proof are here.

```rust
//| caption: Words from the name or the statement.
let query = field("Theorem", "intermediate value");
```

```rust
//| caption: The theorems that match, and the statement of the one that you pick.
let matches = search(&query);
let theorem = matches.get(choice("Match", &matches.iter().take(50).map(|&k| text(&db().theorems[k]["n"])).collect::<Vec<_>>(), 0)).copied();
println!("{} of {} theorems match.", matches.len(), index().len());
if let Some(k) = theorem { html(&statement(&db().theorems[k])) }
```

## Its proof, step by step

Each proof has 3 to 7 steps. At step 0 you see the outline: every step, what it needs and what it gives, and the role of each hypothesis. Move the slider to read one step in full. Some theorems have more than one proof: pick one.

```rust
//| caption: One proof, one step at a time. Step 0 shows the outline.
let proof_ids = theorem.map_or(vec![], |k| proofs_of(&db().theorems[k]));
let proof = proof_ids.get(choice("Proof", &proof_ids.iter().map(|&i| text(&get(db().proofs[i])["n"])).collect::<Vec<_>>(), 0)).map(|&i| get(db().proofs[i]));
let step_now = slider("Step", 0.0, proof.as_ref().map_or(0.0, |v| arr(&v["stp"]).len() as f64), 1.0, 0.0) as usize;
match (theorem, &proof) {
    (Some(k), Some(v)) => html(&walk(&db().theorems[k], v, step_now)),
    _ => println!("Pick a theorem above."),
}
```

## Proof moves

A move is a step that many proofs share, for example "cover by open sets and keep finitely many of them". The list has the moves of the proof above.

```rust
//| caption: One move of the proof, and the other theorems whose proofs use it.
let _here: Vec<usize> = proof.as_ref().map_or(vec![], |v| arr(&v["me"]).iter().filter_map(Value::as_u64).map(|m| m as usize).collect());
match _here.get(choice("Move", &_here.iter().map(|&m| text(&db().moves[m]["n"])).collect::<Vec<_>>(), 0)) {
    None => println!("This proof names no move."),
    Some(&m) => {
        let mv = &db().moves[m];
        html(&format!("<h3>{}</h3><p>{}</p><p>{}</p>", seg(&mv["n"]), seg(&mv["sl"]), seg(&mv["d"])));
        let users: Vec<Vec<String>> = arr(&mv["pf"]).iter().filter_map(Value::as_u64).map(|i| {
            let other = get(db().proofs[i as usize]);
            vec![other["th"].as_u64().map_or(String::new(), theorem_name), text(&other["n"])]
        }).collect();
        println!("{} proofs use this move.", users.len());
        table(&["Theorem", "Proof"], &users);
    }
}
```

## Why it matters

The Theorem Explorer judges each result on 7 components from 0 to 4. The weights make one overall score. The record also says why the result matters, what it relates to and where the evidence is.

```rust
//| caption: The explorer's record of the theorem that you picked.
let record = theorem.and_then(|k| db().row_of.get(db().theorems[k]["id"].as_str()?).copied());
match record {
    None => println!("The explorer has no record of this theorem."),
    Some(i) => {
        let (r, d) = (&db().rows[i], get(db().detail[i]));
        let s = r["s"].as_str().unwrap_or("");
        let overall: Vec<String> = ["balanced", "practitioner", "researcher"].iter().enumerate()
            .map(|(k, n)| format!("{n} {}", score(s, &weights_of(k)).map_or("unknown".into(), |v| format!("{v:.1}")))).collect();
        html(&format!("<p class=\"muted\">Confidence {} · evidence {} · score {}</p><p>{}</p>", r["c"].as_str().unwrap_or("unknown"), r["ev"].as_str().unwrap_or("unknown"),
            listed(&overall, ""), seg(&d["why"])));
        let names: Vec<&str> = db().rubric["components"].as_array().unwrap().iter().map(|c| c["name"].as_str().unwrap()).collect();
        table(&["Component", "Score"], &names.iter().zip(s.chars()).map(|(n, c)| vec![n.to_string(),
            if c.is_ascii_digit() { c.to_string() } else { "not applicable".into() }]).collect::<Vec<_>>());
        let rel: Vec<Vec<String>> = db().relations.iter().filter(|x| x["source"] == i || x["target"] == i).take(30).map(|x| {
            let out = x["source"] == i;
            let other = x[if out { "target" } else { "source" }].as_u64().unwrap_or(0) as usize;
            vec![x["type"].as_str().unwrap_or("").replace('-', " "), if out { "to" } else { "from" }.into(), name(other)]
        }).collect();
        if !rel.is_empty() { table(&["Relation", "", "Record"], &rel) }
        let urls: String = arr(&d["evs"]).iter().filter_map(|e| e["url"].as_str()).map(|u| format!("<li><a href=\"{0}\">{0}</a></li>", esc(u))).collect();
        if !urls.is_empty() { html(&format!("<h4>Sources</h4><ul>{urls}</ul>")) }
    }
}
```

## On arXiv

The explorer counts the arXiv papers to August 2020 whose title or abstract names the result, in bins of years. The rate is per 10,000 papers, so that the growth of arXiv does not hide a trend.

```rust
//| caption: Papers that name the theorem, per 10,000 papers: all of arXiv, and the mathematics group.
let _pop = &db().pop;
let _tags: Vec<String> = serde_json::from_str(_pop["tags"].get()).unwrap();
let _den: Vec<Vec<f64>> = serde_json::from_str(_pop["den"].get()).unwrap();
let (_years, _width): ((f64, f64), f64) = (serde_json::from_str(_pop["years"].get()).unwrap(), serde_json::from_str(_pop["bin"].get()).unwrap());
let _per: BTreeMap<&str, Raw> = serde_json::from_str(_pop["r"].get()).unwrap();
let _counts: Vec<u64> = record.and_then(|i| _per.get(i.to_string().as_str())).map_or(vec![], |r| serde_json::from_str(r.get()).unwrap());
let _bins = _den[0].len();
let _xs: Vec<f64> = (0.._bins).map(|b| _years.0 + b as f64 * _width).collect();
let _rate = |tag: usize| -> Vec<f64> {
    let mut n = vec![0.0; _bins];
    _counts.chunks(3).filter(|c| c[0] as usize == tag).for_each(|c| n[c[1] as usize] += c[2] as f64);
    n.iter().zip(&_den[tag]).map(|(n, d)| if *d > 0.0 { n / d * 10000.0 } else { 0.0 }).collect()
};
let (_all, _maths) = (_tags.len() - 1, _tags.iter().rposition(|t| t == "math").unwrap());
if _counts.is_empty() { println!("No paper names this theorem.") } else {
    println!("{} papers name it.", _counts.chunks(3).filter(|c| c[0] as usize == _all).map(|c| c[2]).sum::<u64>());
    Plot::new().line(&_xs, &_rate(_all)).line(&_xs, &_rate(_maths)).labels("year", "papers per 10,000").show();
}
```

## The catalogue

The catalogue has every named result of the explorer: theorems, lemmas, inequalities, formulas and more, with or without a proof. Find records by their words, then sort them. A record with an unknown score goes last. To read a proof, type its name in the Theorem box at the top.

```rust
//| caption: Words from the name, the aliases, the key concepts or the statement. Empty finds every record.
let catalogue_query = field("Find in the catalogue", "");
```

```rust
//| caption: The catalogue, found and sorted. The last column gives the count of proofs.
let kind = choice("Kind", &KINDS.map(|k| k.0), 0);
let order_by = choice("Sort by", &SORTS, 0);
let preset = choice("Weights", &["Balanced", "Practitioner", "Researcher"], 0);
let low_first = choice("Order", &["Highest first", "Lowest first"], 0) == 1;
let shown = slider("Rows", 5.0, 100.0, 5.0, 20.0) as usize;
let _found = find(&catalogue_query, kind, order_by, preset, low_first);
let _w = weights_of(preset);
println!("{} of {} records match.", _found.len(), db().rows.len());
table(&["#", "Result", "Kind", "Score", "Level", "Year", "Proofs"], &_found.iter().take(shown).enumerate().map(|(k, &i)| {
    let r = &db().rows[i];
    let proofs = r["id"].as_str().and_then(|id| db().learned.get(id)).map_or(0, |&t| proofs_of(&db().theorems[t]).len());
    vec![(k + 1).to_string(), name(i), r["t"].as_str().unwrap_or("").replace("not-a-result:", "not a result: "),
        score(r["s"].as_str().unwrap_or(""), &_w).map_or("unknown".into(), |v| format!("{v:.1}")),
        r["lv"].as_u64().and_then(|l| LEVELS.get(l as usize)).unwrap_or(&"").to_string(), r["yr"].as_u64().map_or(String::new(), |y| y.to_string()),
        if proofs > 0 { proofs.to_string() } else { String::new() }]
}).collect::<Vec<_>>());
```

## Concepts

The learner has 11,949 concepts. Each has a definition, and many have a reminder, examples and the concepts that it needs first.

```rust
//| caption: A concept, found by its name or an alias.
let concept_query = field("Find a concept", "compact");
```

```rust
//| caption: The concepts that match, the most named on arXiv first, and the one that you pick.
let mut _hits: Vec<usize> = (0..concept_index().len()).filter(|&i| norm(&concept_query).split_whitespace().all(|w| concept_index()[i].0.contains(w))).collect();
_hits.sort_by(|a, b| concept_index()[*b].1.total_cmp(&concept_index()[*a].1));
_hits.truncate(30);
match _hits.get(choice("Concept", &_hits.iter().map(|&i| text(&get(db().concepts[i])["n"])).collect::<Vec<_>>(), 0)) {
    None => println!("No concept matches."),
    Some(&i) => {
        let c = get(db().concepts[i]);
        let level = c["lv"].as_u64().and_then(|l| LEVELS.get(l as usize)).unwrap_or(&"unknown");
        html(&format!("<h3>{}</h3><p class=\"muted\">{} · {level} level</p><p>{}</p>", seg(&c["n"]), seg(&c["k"]), if c["adef"].is_array() { seg(&c["adef"]) } else { seg(&c["def"]) }));
        if c["rem"].is_array() { html(&format!("<h4>Reminder</h4><p>{}</p>", seg(&c["rem"]))) }
        let ex: String = arr(&c["ex"]).iter().map(|e| format!("<li>{}</li>", seg(e))).collect();
        if !ex.is_empty() { html(&format!("<h4>Examples</h4><ul>{ex}</ul>")) }
        let needs: Vec<String> = c["rq"].as_array().or(c["pre"].as_array()).into_iter().flatten().map(concept_name).collect();
        if !needs.is_empty() { println!("Needs first: {}.", needs.join(", ")) }
        let links: Vec<Vec<String>> = db().links.iter().filter(|l| l["from"] == i || l["to"] == i).map(|l| {
            let out = l["from"] == i;
            vec![text(&l["type"]), if out { "to" } else { "from" }.into(), concept_name(&l[if out { "to" } else { "from" }])]
        }).collect();
        if !links.is_empty() { table(&["Link", "", "Concept"], &links) }
    }
}
```

## About the data

The data is the explorer's snapshot and the learner's assembly in yujieteo/visuals, at the commit that `visuals.lock` pins. The scores are judgements by a language model on public evidence. They are not measurements. A proof marked "authored, not checked" can contain errors: compare it with its source.

# The code that reads the data

The page reads the 2 data files once, at its first run, and keeps them for its later runs.

```rust
//| caption: The data files, inflated and parsed once.
use engine::doc::esc;
use serde_json::{Value, value::RawValue};
use std::{collections::BTreeMap, sync::OnceLock};

type Raw = &'static RawValue;
const EXPLORER: &[u8] = data!("viz/theorem-explorer/raw.json");
const LEARNER: &[u8] = data!("viz/theorem-learner/raw.json");

/// A raw.json's top-level parts, unparsed.
fn top(file: &'static [u8]) -> BTreeMap<&'static str, Raw> { serde_json::from_slice(file).unwrap() }

/// One pack of a raw.json (base64 of gzip of JSON), inflated. The text lives as long as the page.
fn pack(file: &'static [u8], name: &str) -> &'static str {
    let packs: BTreeMap<&str, BTreeMap<&str, Value>> = serde_json::from_str(top(file)["packs"].get()).unwrap();
    let gz = base64::Engine::decode(&base64::engine::general_purpose::STANDARD, packs[name]["gz"].as_str().unwrap()).unwrap();
    assert_eq!(gz[3], 0, "a gzip member with optional header fields");
    let json = miniz_oxide::inflate::decompress_to_vec(&gz[10..gz.len() - 8]).unwrap();
    Box::leak(String::from_utf8(json).unwrap().into_boxed_str())
}

/// The explorer's records and relations, and the learner's theorems, proofs, moves and concepts, joined by ID.
struct Db { rows: Vec<Value>, relations: Vec<Value>, detail: Vec<Raw>, pop: BTreeMap<&'static str, Raw>, rubric: Value,
    theorems: Vec<Value>, proofs: Vec<Raw>, moves: Vec<Value>, concepts: Vec<Raw>, links: Vec<Value>,
    learned: BTreeMap<String, usize>, row_of: BTreeMap<String, usize> }

static DB: OnceLock<Db> = OnceLock::new();

/// The data, parsed at the first run and kept for the page's later runs.
fn db() -> &'static Db {
    DB.get_or_init(|| {
        let mut core: BTreeMap<&str, Value> = serde_json::from_str(pack(EXPLORER, "core")).unwrap();
        let mut learn: BTreeMap<&str, Vec<Raw>> = serde_json::from_str(pack(LEARNER, "core")).unwrap();
        let mut list = |k: &str| learn.remove(k).unwrap_or_default();
        let all = |v: Vec<Raw>| v.iter().map(|r| serde_json::from_str(r.get()).unwrap()).collect::<Vec<Value>>();
        let (theorems, proofs, moves, concepts, links) = (all(list("theorems")), list("proofs"), all(list("mechanisms")), list("concepts"), all(list("links")));
        let ids = |v: &[Value]| v.iter().enumerate().filter_map(|(i, t)| Some((t["id"].as_str()?.to_string(), i))).collect();
        let mut take = |k: &str| match core.remove(k) { Some(Value::Array(v)) => v, _ => vec![] };
        let (rows, relations) = (take("rows"), take("relations"));
        Db { learned: ids(&theorems), row_of: ids(&rows), rows, relations, detail: serde_json::from_str(pack(EXPLORER, "detail")).unwrap(),
            pop: serde_json::from_str(pack(EXPLORER, "popularity")).unwrap(), rubric: serde_json::from_str(top(EXPLORER)["rubric"].get()).unwrap(),
            theorems, proofs, moves, concepts, links }
    })
}

fn get(r: Raw) -> Value { serde_json::from_str(r.get()).unwrap() }
fn text(v: &Value) -> String { v.as_str().unwrap_or("").to_string() }
fn arr(v: &Value) -> &[Value] { v.as_array().map_or(&[], Vec::as_slice) }

/// Learner text as HTML: a string (Markdown and TeX), or a list of strings and [word, concept] marks.
fn seg(v: &Value) -> String {
    match v {
        Value::String(t) => engine::doc::inline(t),
        Value::Array(a) => a.iter().map(|s| match s { Value::Array(m) => format!("<em>{}</em>", seg(&m[0])), s => seg(s) }).collect(),
        _ => String::new(),
    }
}

/// Items in words: "a, b and c", or `none` when there is no item.
fn listed(v: &[String], none: &str) -> String {
    match v { [] => none.into(), [a] => a.clone(), [a @ .., b] => format!("{} and {b}", a.join(", ")) }
}

/// The name of learner concept `c`, and of learner theorem `k`.
fn concept_name(c: &Value) -> String { c.as_u64().and_then(|c| db().concepts.get(c as usize)).map_or(String::new(), |r| text(&get(r)["n"])) }
fn theorem_name(k: u64) -> String { db().theorems.get(k as usize).map_or(String::new(), |t| text(&t["n"])) }
fn proofs_of(t: &Value) -> Vec<usize> { arr(&t["pf"]).iter().filter_map(Value::as_u64).map(|p| p as usize).collect() }
```

```rust
//| caption: The search and the step-by-step proof.
/// Text for search: lower case, letters and digits kept, apostrophes dropped, every other mark a space.
fn norm(s: &str) -> String {
    s.to_lowercase().chars().filter(|c| !matches!(c, '\'' | '’')).map(|c| if c.is_alphanumeric() { c } else { ' ' }).collect()
}

static INDEX: OnceLock<Vec<(usize, [String; 3])>> = OnceLock::new();

/// Each theorem with a proof: its index, and the search texts of its name, its aliases and all of it.
fn index() -> &'static [(usize, [String; 3])] {
    INDEX.get_or_init(|| db().theorems.iter().enumerate().filter(|(_, t)| !proofs_of(t).is_empty()).map(|(k, t)| {
        let al = arr(&t["al"]).iter().filter_map(Value::as_str).collect::<Vec<_>>().join(" ");
        (k, [norm(&text(&t["n"])), norm(&al), norm(&format!("{} {al} {}", text(&t["n"]), text(&t["q"])))])
    }).collect())
}

/// The theorems that hold every word: first the ones whose name holds them, then an alias, then the rest.
/// Short names go first in each group.
fn search(words: &str) -> Vec<usize> {
    let words = norm(words);
    let has = |s: &str| words.split_whitespace().all(|w| s.contains(w));
    let mut hits: Vec<(usize, usize, usize)> = index().iter().filter(|e| has(&e.1[2]))
        .map(|e| (e.1.iter().position(|s| has(s)).unwrap_or(2), e.1[0].len(), e.0)).collect();
    hits.sort();
    hits.into_iter().map(|h| h.2).collect()
}

const LEVELS: [&str; 4] = ["school", "undergraduate", "graduate", "research"];

/// A theorem's name, kind, level, statement, hypotheses, conclusion and key concepts, as HTML.
fn statement(t: &Value) -> String {
    let level = t["lv"].as_u64().and_then(|l| LEVELS.get(l as usize)).unwrap_or(&"unknown");
    let mut o = format!("<h3>{}</h3><p class=\"muted\">{} · {level} level</p>", seg(&t["n"]), esc(&text(&t["t"])));
    o += &format!("<h4>Statement</h4><p>{}</p>", if t["st"].is_null() { "unknown".into() } else { seg(&t["st"]) });
    let hy: String = arr(&t["hy"]).iter().enumerate().map(|(i, h)| format!("<li>H{}. {}</li>", i + 1, seg(&h["seg"]))).collect();
    if !hy.is_empty() { o += &format!("<h4>Hypotheses</h4><ul>{hy}</ul>") }
    if !t["cn"].is_null() { o += &format!("<h4>Conclusion</h4><p>{}</p>", seg(&t["cn"])) }
    let kc: Vec<String> = arr(&t["kc"]).iter().map(concept_name).collect();
    if !kc.is_empty() { o += &format!("<p class=\"muted\">Key concepts: {}.</p>", esc(&listed(&kc, ""))) }
    o
}

/// A proof of theorem `t` as HTML. Step 0 gives the outline: the roles of the hypotheses, and every step with
/// what it needs and what it gives. Step k gives step k in full: its argument, its hypotheses, concepts and citations.
fn walk(t: &Value, p: &Value, k: usize) -> String {
    let (steps, hyps, roles) = (arr(&p["stp"]), arr(&t["hy"]), arr(&p["ro"]));
    let edges: Vec<(usize, usize)> = arr(&p["ed"]).iter().map(|e| (e[0].as_u64().unwrap_or(0) as usize, e[1].as_u64().unwrap_or(0) as usize)).collect();
    let h_name = |id: &Value| hyps.iter().position(|h| h["id"] == *id).map_or("a hypothesis".into(), |i| format!("H{}", i + 1));
    let at = |r: &Value, s: usize| arr(&r["st"]).iter().any(|x| x.as_u64() == Some(s as u64));
    let io = |s: usize| {
        let needs: Vec<String> = roles.iter().filter(|r| at(r, s)).map(|r| h_name(&r["h"]))
            .chain(edges.iter().filter(|e| e.1 == s).map(|e| format!("step {}", e.0 + 1))).collect();
        let gives: Vec<String> = if p["cl"].as_u64() == Some(s as u64) { vec!["the conclusion".into()] }
            else { edges.iter().filter(|e| e.0 == s).map(|e| format!("step {}", e.1 + 1)).collect() };
        format!("Needs {}. Gives {}.", listed(&needs, "nothing earlier"), listed(&gives, "nothing later"))
    };
    let vf = &p["vf"];
    let status = if vf["lean"] == true { "checked by Lean" } else if vf["checked"] == true { "checked against the formal proof" } else { "authored, not checked" };
    let mut o = String::new();
    if k == 0 {
        o += &format!("<h3>{}</h3><p class=\"muted\">{status} · {} steps</p><p>{}</p><h4>Scope</h4><p>{}</p>", seg(&p["n"]), steps.len(), seg(&p["sl"]), seg(&p["sc"]));
        let hr: String = hyps.iter().enumerate().filter_map(|(i, h)| {
            let r = roles.iter().find(|r| r["h"] == h["id"])?;
            let used: Vec<String> = arr(&r["st"]).iter().filter_map(Value::as_u64).map(|s| format!("step {}", s + 1)).collect();
            let used = if r["un"] == true || used.is_empty() { "Not used in this proof.".into() } else { format!("Used at {}.", listed(&used, "")) };
            Some(format!("<li>H{}. {} <span class=\"muted\">{used}</span></li>", i + 1, seg(&r["why"])))
        }).collect();
        if !hr.is_empty() { o += &format!("<h4>What each hypothesis does</h4><ul>{hr}</ul>") }
        let ol: String = steps.iter().enumerate().map(|(s, st)| format!("<li>{} <span class=\"muted\">{}</span></li>", seg(&st["sl"]), io(s))).collect();
        o += &format!("<h4>The steps</h4><ol>{ol}</ol>");
        if let Some(note) = p["src"]["note"].as_str() { o += &format!("<h4>Source</h4><p>{}</p>", engine::doc::inline(note)) }
    } else {
        let st = &steps[k - 1];
        o += &format!("<h3>Step {k} of {}</h3><p>{}</p><p>{}</p><p class=\"muted\">{}</p>", steps.len(), seg(&st["sl"]), seg(&st["dt"]), io(k - 1));
        let used: String = roles.iter().filter(|r| at(r, k - 1)).map(|r| format!("<li>{}. {}</li>", h_name(&r["h"]), seg(&r["why"]))).collect();
        if !used.is_empty() { o += &format!("<h4>The hypotheses that this step uses</h4><ul>{used}</ul>") }
        let cs: String = arr(&st["cs"]).iter().map(|c| format!("<li>{}{}</li>", esc(&concept_name(c)),
            p["cw"].get(c.to_string()).map_or(String::new(), |w| format!(": {}", seg(w))))).collect();
        if !cs.is_empty() { o += &format!("<h4>Concepts at this step</h4><ul>{cs}</ul>") }
        let lm: Vec<String> = arr(&st["lm"]).iter().filter_map(Value::as_u64).map(theorem_name).collect();
        if !lm.is_empty() { o += &format!("<p class=\"muted\">This step cites {}.</p>", esc(&listed(&lm, ""))) }
        let ol: String = steps.iter().enumerate().map(|(s, st)| format!("<li{}>{}</li>", if s + 1 == k { "" } else { " class=\"muted\"" }, seg(&st["sl"]))).collect();
        o += &format!("<h4>All the steps</h4><ol>{ol}</ol>");
    }
    o
}
```

```rust
//| caption: The catalogue: the te-rubric/1 scores, the sorts and the concept search.
const KINDS: [(&str, &str); 14] = [("Results", "result"), ("Everything", ""), ("Theorems", "theorem"), ("Lemmas", "lemma"), ("Inequalities", "inequality"),
    ("Identities", "identity"), ("Formulas", "formula"), ("Principles", "principle"), ("Criteria", "criterion"), ("Proved conjectures", "conjecture-proved"),
    ("Constructions", "construction"), ("Classifications", "classification"), ("Other results", "other-result"), ("Not results", "not-a-result")];
const SORTS: [&str; 12] = ["Score", "Effectiveness", "Research influence", "Practical impact", "Reach", "Low hypothesis burden", "Proof simplicity",
    "Application simplicity", "Level", "Year", "Dependents", "Name"];

/// The weights of a rubric preset (balanced, practitioner, researcher), in component order.
fn weights_of(preset: usize) -> Vec<f64> {
    db().rubric["presets"][preset]["weights"].as_array().unwrap().iter().map(|w| w.as_f64().unwrap()).collect()
}

/// te-rubric/1: overall = sum of w_i r_i / 4 over the weighted components, unknown if one is unknown.
fn score(s: &str, w: &[f64]) -> Option<f64> {
    s.bytes().zip(w).filter(|p| *p.1 > 0.0).map(|(c, w)| c.is_ascii_digit().then(|| w * (c - b'0') as f64 / 4.0)).sum()
}

fn name(r: usize) -> String { text(&db().rows[r]["n"]) }

/// The records that hold every word, of a kind, in an order. Unknown keys go last.
fn find(words: &str, kind: usize, by: usize, preset: usize, low_first: bool) -> Vec<usize> {
    let (rows, w, words) = (&db().rows, weights_of(preset), words.to_lowercase());
    let want = KINDS[kind].1;
    let mut found: Vec<usize> = (0..rows.len()).filter(|&i| {
        let (t, q) = (rows[i]["t"].as_str().unwrap_or(""), rows[i]["q"].as_str().unwrap_or(""));
        let ok = match want { "" => true, "result" => !t.starts_with("not-a-result"), k => t.starts_with(k) };
        ok && words.split_whitespace().all(|x| q.contains(x))
    }).collect();
    let key = |i: usize| -> Option<f64> {
        let r = &rows[i];
        let s = r["s"].as_str().unwrap_or("");
        match by {
            0 => score(s, &w),
            1..=7 => s.as_bytes().get(by - 1).filter(|c| c.is_ascii_digit()).map(|c| (c - b'0') as f64),
            8 => r["lv"].as_f64(),
            9 => r["yr"].as_f64(),
            10 => r["dep"].as_f64(),
            _ => None,
        }
    };
    if by == 11 { found.sort_by_key(|&i| name(i).to_lowercase()) } else {
        found.sort_by(|&a, &b| match (key(a), key(b)) {
            (Some(x), Some(y)) => if low_first { x.total_cmp(&y) } else { y.total_cmp(&x) }.then(a.cmp(&b)),
            (x, y) => y.is_some().cmp(&x.is_some()).then(a.cmp(&b)),
        })
    }
    if low_first && by == 11 { found.reverse() }
    found
}

static CONCEPTS: OnceLock<Vec<(String, f64)>> = OnceLock::new();

/// Each concept's search text (its name and aliases) and its count of arXiv papers.
fn concept_index() -> &'static [(String, f64)] {
    CONCEPTS.get_or_init(|| db().concepts.iter().map(|r| {
        let c = get(r);
        let al: Vec<&str> = arr(&c["al"]).iter().filter_map(Value::as_str).collect();
        (norm(&format!("{} {}", text(&c["n"]), al.join(" "))), c["ap"].as_f64().unwrap_or(0.0))
    }).collect())
}
```
