---
title: Theorems
summary: Find 1 of 2,561 theorems and read its proof 1 step at a time. Sort the catalogue of 3,137 results.
theme: penumbra-light
seed: 20261010
---

Find a theorem and read its proof 1 step at a time.

<!-- skill: This notebook ports visuals/viz/theorem-explorer and visuals/viz/theorem-learner. Read the data only through data!, from the files pinned in visuals.lock; never copy data into this file. The scores follow te-rubric/1 in the explorer's raw.json: overall = sum of w_i r_i / 4 when every weighted component is known, else unknown. Keep that rule as it is. -->

<!-- skill: Every text from the data is Markdown with TeX, or a list of segments: a string, or [word, concept index]. Render it with seg(), never by string replacement; a gloss takes Markdown, which mdseg() gives from the same text. A text box and a choice whose options change go in different cells: the page redraws the controls of a cell when its options change, and a redraw takes the focus from the text box. -->

```toml
base64 = "=0.22.1"
miniz_oxide = "=0.9.1"
serde_json = { version = "=1.0.151", features = ["raw_value"] }
```

## Find a theorem

A theorem matches when its name, an alias, a key concept or its statement holds every word.^[crit. Only theorems with a proof are here.]

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

Move the Step slider to read 1 step in full.^[nota A proof has 3 to 7 steps.]

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

A move is a step that many proofs share.

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

The Theorem Explorer scores each result from 0 to 4 on 7 components.^[nota The weights make 1 overall score.]

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

The rate per 10,000 papers removes the effect of arXiv growth.^[crit. The counts stop at August 2020 and read only titles and abstracts.]

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

The catalogue has every named result, with or without a proof.^[nota Records with an unknown score go last.] To read a proof, type its name in the Theorem box.

To study one subject, type arXiv topics, such as math.FA.^^[The list then holds the records of those topics and every prerequisite that they need, at any depth, even when the prerequisite has another topic.] Sort by dependency to read the basic results first. Tick Known on a row to hide it.^[nota The ticks stay in this browser.]

```rust
//| caption: Words from the name, the aliases, the key concepts or the statement. Empty finds every record. Topics are arXiv categories, archives or groups, with commas between them.
let catalogue_query = field("Find in the catalogue", "");
let topics = field("Topics", "");
html("<button type=\"button\" data-clear=\"600 601 700:1 705:1 707:1\">Clear catalogue filters</button>");
```

```rust
//| caption: The catalogue, found and sorted. Depth is 0 for a result with no prerequisite, else 1 more than its deepest prerequisite. For the dependency sort, Lowest first puts the basic results first. The last column gives the count of proofs.
let kind = choice("Kind", &KINDS.map(|k| k.0), 0);
let order_by = choice("Sort by", &SORTS, 0);
let preset = choice("Weights", &["Balanced", "Practitioner", "Researcher"], 0);
let low_first = choice("Order", &["Highest first", "Lowest first"], 0) == 1;
let size = choice("Rows per page", &["100", "250", "500", "All"], 0);
let show_known = choice("Known results", &["Hidden", "Shown"], 0) == 1;
let marked: BTreeSet<String> = kept("Known").split_whitespace().map(String::from).collect();
let _scope = scope(&topics);
let mut _found = find(&catalogue_query, kind, order_by, preset, low_first, _scope.as_ref().map(|s| &s.1));
let _listed = _found.len();
_found.retain(|&i| show_known || !marked.contains(db().rows[i]["id"].as_str().unwrap_or("")));
let _per = [100, 250, 500, usize::MAX][size].min(_found.len().max(1));
let _pages = _found.len().div_ceil(_per).max(1);
let _page = (pager(&format!("Page (1 to {_pages})"), _pages)).clamp(1, _pages);
let (_first, _last) = ((_page - 1) * _per, (_page * _per).min(_found.len()));
let _w = weights_of(preset);
if let Some((m, s)) = &_scope {
    let n = |v: &[bool]| v.iter().filter(|&&x| x).count();
    println!("{} records have the topics, and {} more are prerequisites.", n(m), n(s) - n(m));
}
println!("{} of {} records match.", _listed, db().rows.len());
let _hidden = _listed - _found.len();
let _known = db().rows.iter().filter(|r| marked.contains(r["id"].as_str().unwrap_or(""))).count();
println!("{_known} records are marked Known. {_hidden} {} hidden here.", if _hidden == 1 { "is" } else { "are" });
if order_by == 12 && graph().3 > 0 { println!("{} groups of results need each other in a cycle. Each group has one depth.", graph().3) }
if _found.is_empty() { println!("No record to show.") } else {
    println!("Rows {} to {} of {}. Page {_page} of {_pages}.", _first + 1, _last, _found.len());
}
let _rows: String = _found[_first.._last].iter().enumerate().map(|(k, &i)| {
    let r = &db().rows[i];
    let id = r["id"].as_str().unwrap_or("");
    let proofs = db().learned.get(id).map_or(0, |&t| proofs_of(&db().theorems[t]).len());
    let cells = [(_first + k + 1).to_string(), name(i), format!("{}{}", graph().1[i], if graph().2[i] { " (cycle)" } else { "" }),
        r["t"].as_str().unwrap_or("").replace("not-a-result:", "not a result: "),
        score(r["s"].as_str().unwrap_or(""), &_w).map_or("unknown".into(), |v| format!("{v:.1}")),
        r["lv"].as_u64().and_then(|l| LEVELS.get(l as usize)).unwrap_or(&"").to_string(), r["yr"].as_u64().map_or(String::new(), |y| y.to_string()),
        if proofs > 0 { proofs.to_string() } else { String::new() }];
    let on = if marked.contains(id) { " checked" } else { "" };
    format!("<tr>{}<td><input type=\"checkbox\" data-mark=\"{}\" aria-label=\"Known: {}\"{on}></td></tr>",
        cells.iter().map(|c| format!("<td>{}</td>", esc(c))).collect::<String>(), esc(id), esc(&name(i)))
}).collect();
html(&format!("<table><tr>{}<th>Known</th></tr>{_rows}</table>",
    ["#", "Result", "Depth", "Kind", "Score", "Level", "Year", "Proofs"].map(|h| format!("<th>{h}</th>")).concat()));
```

## Concepts

The learner has 11,949 concepts, each with a definition.

```rust
//| caption: A concept, found by its name or an alias.
let concept_query = field("Find a concept", "compact");
```

```rust
//| caption: The concepts that match, the most named on arXiv first, and the one that you pick.
let _words = norm(&concept_query);
let mut _hits: Vec<usize> = (0..concept_index().len()).filter(|&i| _words.split_whitespace().all(|w| concept_index()[i].0.contains(w))).collect();
_hits.sort_by(|a, b| concept_index()[*b].1.total_cmp(&concept_index()[*a].1));
_hits.truncate(30);
match _hits.get(choice("Concept", &_hits.iter().map(|&i| text(&get(db().concepts[i])["n"])).collect::<Vec<_>>(), 0)) {
    None => println!("No concept matches."),
    Some(&i) => {
        let c = get(db().concepts[i]);
        let level = c["lv"].as_u64().and_then(|l| LEVELS.get(l as usize)).unwrap_or(&"unknown");
        let needs: Vec<String> = c["rq"].as_array().or(c["pre"].as_array()).into_iter().flatten().map(|n| md(&concept_name(n))).collect();
        let side = if c["rem"].is_array() { gloss(&format!("nota {}", mdseg(&c["rem"]))) } else { String::new() }
            + &if needs.is_empty() { String::new() } else { gloss(&format!("cf. Needs first: {}.", needs.join(", "))) };
        html(&format!("<h3>{}</h3><p class=\"muted\">{} · {level} level</p><p>{}{side}</p>", seg(&c["n"]), seg(&c["k"]), if c["adef"].is_array() { seg(&c["adef"]) } else { seg(&c["def"]) }));
        let ex: String = arr(&c["ex"]).iter().map(|e| format!("<li>{}</li>", seg(e))).collect();
        if !ex.is_empty() { html(&format!("<h4>Examples</h4><ul>{ex}</ul>")) }
        let links: Vec<Vec<String>> = db().links.iter().filter(|l| l["from"] == i || l["to"] == i).map(|l| {
            let out = l["from"] == i;
            vec![text(&l["type"]), if out { "to" } else { "from" }.into(), concept_name(&l[if out { "to" } else { "from" }])]
        }).collect();
        if !links.is_empty() { table(&["Link", "", "Concept"], &links) }
    }
}
```

## About the data

The scores are judgements of a language model on public evidence, not measurements.^[cf. The data is from yujieteo/visuals, pinned in `visuals.lock`.] A proof marked "authored, not checked" can have errors. Compare it with its source.

# The code that reads the data

```rust
//| caption: The data files, inflated and parsed once.
use engine::doc::esc;
use serde_json::{Value, value::RawValue};
use std::{collections::{BTreeMap, BTreeSet}, sync::OnceLock};

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
struct Db { rows: Vec<Value>, relations: Vec<Value>, detail: Vec<Raw>, pop: BTreeMap<&'static str, Raw>, rubric: Value, tax: Value,
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
            tax: serde_json::from_str(top(EXPLORER)["taxonomy"].get()).unwrap(),
            theorems, proofs, moves, concepts, links }
    })
}

fn get(r: Raw) -> Value { serde_json::from_str(r.get()).unwrap() }
fn text(v: &Value) -> String { v.as_str().unwrap_or("").to_string() }
fn arr(v: &Value) -> &[Value] { v.as_array().map_or(&[], Vec::as_slice) }

/// Learner text as Markdown for a gloss: a string as it is, a [word, concept] mark in italics.
fn mdseg(v: &Value) -> String {
    match v {
        Value::String(t) => t.clone(),
        Value::Array(a) => a.iter().map(|s| match s { Value::Array(m) => format!("*{}*", mdseg(&m[0])), s => mdseg(s) }).collect(),
        _ => String::new(),
    }
}
/// A name as literal Markdown: a backslash before each mark that starts Markdown.
fn md(t: &str) -> String { t.chars().map(|c| if "\\`$*[]".contains(c) { format!("\\{c}") } else { c.into() }).collect() }

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

/// A theorem's name, kind, level, statement (its key concepts beside it), hypotheses and conclusion, as HTML.
fn statement(t: &Value) -> String {
    let level = t["lv"].as_u64().and_then(|l| LEVELS.get(l as usize)).unwrap_or(&"unknown");
    let mut o = format!("<h3>{}</h3><p class=\"muted\">{} · {level} level</p>", seg(&t["n"]), esc(&text(&t["t"])));
    let kc: Vec<String> = arr(&t["kc"]).iter().map(|c| md(&concept_name(c))).collect();
    let kc = if kc.is_empty() { String::new() } else { gloss(&format!("cf. Key concepts: {}.", listed(&kc, ""))) };
    o += &format!("<h4>Statement</h4><p>{}{kc}</p>", if t["st"].is_null() { "unknown".into() } else { seg(&t["st"]) });
    let hy: String = arr(&t["hy"]).iter().enumerate().map(|(i, h)| format!("<li>H{}. {}</li>", i + 1, seg(&h["seg"]))).collect();
    if !hy.is_empty() { o += &format!("<h4>Hypotheses</h4><ul>{hy}</ul>") }
    if !t["cn"].is_null() { o += &format!("<h4>Conclusion</h4><p>{}</p>", seg(&t["cn"])) }
    o
}

/// A proof of theorem `t` as HTML. Step 0 gives the outline, with the scope and the source beside the summary: the
/// roles of the hypotheses, and every step with what it needs and what it gives. Step k gives step k in full: its
/// argument, with its citations beside it, its hypotheses and concepts.
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
        let source = p["src"]["note"].as_str().map_or(String::new(), |note| gloss(&format!("cf. {note}")));
        o += &format!("<h3>{}</h3><p class=\"muted\">{status} · {} steps</p><p>{}{}{source}</p>", seg(&p["n"]), steps.len(), seg(&p["sl"]), gloss(&format!("crit. Scope: {}", mdseg(&p["sc"]))));
        let hr: String = hyps.iter().enumerate().filter_map(|(i, h)| {
            let r = roles.iter().find(|r| r["h"] == h["id"])?;
            let used: Vec<String> = arr(&r["st"]).iter().filter_map(Value::as_u64).map(|s| format!("step {}", s + 1)).collect();
            let used = if r["un"] == true || used.is_empty() { "Not used in this proof.".into() } else { format!("Used at {}.", listed(&used, "")) };
            Some(format!("<li>H{}. {} <span class=\"muted\">{used}</span></li>", i + 1, seg(&r["why"])))
        }).collect();
        if !hr.is_empty() { o += &format!("<h4>What each hypothesis does</h4><ul>{hr}</ul>") }
        let ol: String = steps.iter().enumerate().map(|(s, st)| format!("<li>{} <span class=\"muted\">{}</span></li>", seg(&st["sl"]), io(s))).collect();
        o += &format!("<h4>The steps</h4><ol>{ol}</ol>");
    } else {
        let st = &steps[k - 1];
        let lm: Vec<String> = arr(&st["lm"]).iter().filter_map(Value::as_u64).map(|t| md(&theorem_name(t))).collect();
        let cites = if lm.is_empty() { String::new() } else { gloss(&format!("cf. This step cites {}.", listed(&lm, ""))) };
        o += &format!("<h3>Step {k} of {}</h3><p>{}</p><p>{}{cites}</p><p class=\"muted\">{}</p>", steps.len(), seg(&st["sl"]), seg(&st["dt"]), io(k - 1));
        let used: String = roles.iter().filter(|r| at(r, k - 1)).map(|r| format!("<li>{}. {}</li>", h_name(&r["h"]), seg(&r["why"]))).collect();
        if !used.is_empty() { o += &format!("<h4>The hypotheses that this step uses</h4><ul>{used}</ul>") }
        let cs: String = arr(&st["cs"]).iter().map(|c| format!("<li>{}{}</li>", esc(&concept_name(c)),
            p["cw"].get(c.to_string()).map_or(String::new(), |w| format!(": {}", seg(w))))).collect();
        if !cs.is_empty() { o += &format!("<h4>Concepts at this step</h4><ul>{cs}</ul>") }
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
const SORTS: [&str; 13] = ["Score", "Effectiveness", "Research influence", "Practical impact", "Reach", "Low hypothesis burden", "Proof simplicity",
    "Application simplicity", "Level", "Year", "Dependents", "Name", "Dependency order"];

/// The weights of a rubric preset (balanced, practitioner, researcher), in component order.
fn weights_of(preset: usize) -> Vec<f64> {
    db().rubric["presets"][preset]["weights"].as_array().unwrap().iter().map(|w| w.as_f64().unwrap()).collect()
}

/// te-rubric/1: overall = sum of w_i r_i / 4 over the weighted components, unknown if one is unknown.
fn score(s: &str, w: &[f64]) -> Option<f64> {
    s.bytes().zip(w).filter(|p| *p.1 > 0.0).map(|(c, w)| c.is_ascii_digit().then(|| w * (c - b'0') as f64 / 4.0)).sum()
}

/// The upper end of a record's score: an unknown weighted component counts as 4, rounded to 4 places.
fn upper(s: &str, w: &[f64]) -> f64 {
    let t: f64 = s.bytes().zip(w).filter(|p| *p.1 > 0.0).map(|(c, w)| if c.is_ascii_digit() { w * (c - b'0') as f64 / 4.0 } else { *w }).sum();
    (t * 1e4).round() / 1e4
}

/// The prerequisite graph: each record's prerequisites, its depth, whether it is on a cycle, and the count of cycles.
/// A record without prerequisite has depth 0, else 1 more than its deepest. The records of one cycle (a strongly
/// connected group, found by Tarjan's walk) share one depth.
fn graph() -> &'static (Vec<Vec<usize>>, Vec<usize>, Vec<bool>, usize) {
    static G: OnceLock<(Vec<Vec<usize>>, Vec<usize>, Vec<bool>, usize)> = OnceLock::new();
    G.get_or_init(|| {
        let n = db().rows.len();
        let pre: Vec<Vec<usize>> = db().rows.iter().enumerate().map(|(i, r)| {
            let p: BTreeSet<usize> = arr(&r["pre"]).iter().filter_map(Value::as_u64).map(|j| j as usize).filter(|&j| j != i && j < n).collect();
            p.into_iter().collect()
        }).collect();
        let (mut idx, mut low, mut comp, mut stack, mut comps) = (vec![n; n], vec![0; n], vec![n; n], vec![], Vec::<Vec<usize>>::new());
        let mut count = 0;
        for root in 0..n {
            if idx[root] != n { continue }
            (idx[root], low[root], count) = (count, count, count + 1);
            stack.push(root);
            let mut work = vec![(root, 0)];
            while let Some(&(v, k)) = work.last() {
                if k < pre[v].len() {
                    work.last_mut().unwrap().1 += 1;
                    let w = pre[v][k];
                    if idx[w] == n {
                        (idx[w], low[w], count) = (count, count, count + 1);
                        stack.push(w);
                        work.push((w, 0));
                    } else if comp[w] == n { low[v] = low[v].min(idx[w]) }
                } else {
                    work.pop();
                    if let Some(&(u, _)) = work.last() { low[u] = low[u].min(low[v]) }
                    if low[v] == idx[v] {
                        let mut m = vec![];
                        while let Some(w) = stack.pop() { comp[w] = comps.len(); m.push(w); if w == v { break } }
                        comps.push(m);
                    }
                }
            }
        }
        // A component comes after every component that it reaches, so the depths of its prerequisites are known.
        let mut cd = vec![0; comps.len()];
        for (c, m) in comps.iter().enumerate() {
            cd[c] = m.iter().flat_map(|&v| &pre[v]).filter(|&&w| comp[w] != c).map(|&w| cd[comp[w]] + 1).max().unwrap_or(0);
        }
        let cycles = comps.iter().filter(|m| m.len() > 1).count();
        let (depth, cyclic) = (comp.iter().map(|&c| cd[c]).collect(), comp.iter().map(|&c| comps[c].len() > 1).collect());
        (pre, depth, cyclic, cycles)
    })
}

/// The records tagged with a topic (an arXiv category, archive or group, or an alias) and, as the second set, those
/// records with every prerequisite that they need at any depth. None when no topic is set.
fn scope(list: &str) -> Option<(Vec<bool>, Vec<bool>)> {
    let tags: Vec<&str> = list.split(',').map(str::trim).filter(|t| !t.is_empty()).collect();
    if tags.is_empty() { return None }
    let tax = &db().tax;
    let tags: Vec<&str> = tags.iter().map(|t| tax["aliases"][*t].as_str().unwrap_or(t)).collect();
    let members: Vec<bool> = db().rows.iter().map(|r| arr(&r["cat"]).iter().filter_map(Value::as_u64).any(|c| {
        let k = &tax["categories"][c as usize];
        tags.iter().any(|t| [&k[0], &k[2], &k[3]].iter().any(|x| x.as_str() == Some(t)))
    })).collect();
    let mut all = members.clone();
    let mut todo: Vec<usize> = (0..all.len()).filter(|&i| all[i]).collect();
    while let Some(i) = todo.pop() { for &j in &graph().0[i] { if !all[j] { all[j] = true; todo.push(j) } } }
    Some((members, all))
}

fn name(r: usize) -> String { text(&db().rows[r]["n"]) }

/// The records that hold every word, of a kind, in an order. Unknown keys go last.
fn find(words: &str, kind: usize, by: usize, preset: usize, low_first: bool, only: Option<&Vec<bool>>) -> Vec<usize> {
    let (rows, w, words) = (&db().rows, weights_of(preset), words.to_lowercase());
    let want = KINDS[kind].1;
    let mut found: Vec<usize> = (0..rows.len()).filter(|&i| {
        let (t, q) = (rows[i]["t"].as_str().unwrap_or(""), rows[i]["q"].as_str().unwrap_or(""));
        let ok = match want { "" => true, "result" => !t.starts_with("not-a-result"), k => t.starts_with(k) };
        ok && only.is_none_or(|o| o[i]) && words.split_whitespace().all(|x| q.contains(x))
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
    if by == 11 { found.sort_by_key(|&i| name(i).to_lowercase()) } else if by == 12 {
        let d = &graph().1;
        let hi = |i: usize| upper(rows[i]["s"].as_str().unwrap_or(""), &w);
        found.sort_by(|&a, &b| if low_first { d[a].cmp(&d[b]) } else { d[b].cmp(&d[a]) }
            .then_with(|| hi(b).total_cmp(&hi(a))).then_with(|| name(a).to_lowercase().cmp(&name(b).to_lowercase())).then(a.cmp(&b)))
    } else {
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
