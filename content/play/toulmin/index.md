---
title: Toulmin arguments
summary: Build an essay 1 Toulmin argument at a time: claim, grounds, warrant, backing, qualifier and rebuttals. A pilot-style checklist checks each argument, and the notebook writes it as a paragraph in 2 orders.
thumb: 2416
theme: site
seed: 20261016
---

Build an essay 1 argument at a time. The boxes start with a template essay on surgical safety checklists: change it, or write your own.

<!-- skill: This notebook ports visuals/viz/toulmin. The parts, the checklist, the prompts, the paragraph lead-ins, the limits and the template essay come only through data!("viz/toulmin/raw.json"), pinned in visuals.lock. Never copy them into this file. A cell cannot read the Markdown that a reader writes in Edit mode before a rebuild, so each argument is a set of text boxes (field) that start from the template, and the Markdown keeps the guidance. -->

<!-- skill: Each argument has three cells. sizes(n) picks how many grounds and rebuttals. head(n, count) makes the boxes for the label, the claim and the grounds. tail(&start, n, count) makes the boxes for the warrant, the backing, the qualifier and the rebuttals, then shows the checklist (CLEAR or OPEN for each automatic line), the questions to confirm, the prompts, the notes on the limits and the paragraph claim-first and grounds-first. The last cell lists every argument. -->

```toml
serde_json = "=1.0.151"
```

## The six parts

Stephen Toulmin (*The Uses of Argument*, 1958) divided an argument into 6 parts. His example is about Harry, a man born in Bermuda.

```rust
//| caption: The parts, why each one matters, and Harry's argument.
for p in arr(&raw()["parts"]) {
    html(&format!("<p><b>{}</b>: {} {} <i>Harry:</i> {}</p>", esc(st(&p["name"])), esc(st(&p["def"])), esc(st(&p["why"])), esc(st(&p["example"]))));
}
println!("Qualifiers to try: {}.", arr(&raw()["constants"]["qualifierChips"]).iter().map(st).collect::<Vec<_>>().join(", "));
list("Sources", arr(&raw()["sources"]).iter().map(|s| [st(&s["label"]), st(&s["url"])].join(" ").trim().to_string()).collect());
```

## How to use it

Each argument has a chapter of 1-line boxes. A source is optional. If the label is empty, the start of the claim names the argument.

An automatic line of the checklist is CLEAR if its part has text, and OPEN if not. A confirm line is a question: change the argument until your answer is yes.

A cell cannot read your Markdown edits until the next build, so the arguments are text boxes.

Before you reload the page, copy your essay from the last chapter or export a PDF. The page does not keep the boxes: a reload starts them again from the template.

To add an argument:

1. In Edit mode, copy a chapter.
2. Change its number in its 3 cells.
3. Add it to the list in the last cell.

The new chapter runs after the next build.

```rust
//| caption: The limits. A box over its limit gets a note, and the checks use only the text up to the limit.
let _rows: Vec<Vec<String>> = [("Claim, ground, warrant, backing or rebuttal", "text"), ("Source", "source"), ("Qualifier", "qualifier"), ("Label", "label"), ("Title", "title"), ("Thesis", "thesis")]
    .iter().map(|(b, k)| vec![b.to_string(), format!("{} characters", limit(k))]).collect();
table(&["Box", "Most"], &_rows);
println!("An argument has at most {} grounds and {} rebuttals. An essay has at most {} arguments.", limit("items"), limit("items"), limit("arguments"));
```

## The thesis

The thesis is the claim of the whole essay. Each argument supports it.

```rust
//| caption: The essay's title and thesis.
let mut _notes = vec![];
let title = boxed(&mut _notes, "Title", &raw()["template"]["essay"]["title"], "title");
let thesis = boxed(&mut _notes, "Thesis", &raw()["template"]["essay"]["thesis"], "thesis");
_notes.iter().for_each(|n| println!("{n}"));
```

## Argument 1

```rust
//| caption: How many grounds and rebuttals.
let size1 = sizes(1);
```

```rust
//| caption: The label, the claim and the grounds.
let start1 = head(1, size1.0);
```

```rust
//| caption: The warrant, the backing, the qualifier and the rebuttals, then the checklist and the paragraph.
let arg1 = tail(&start1, 1, size1.1);
```

## Argument 2

```rust
//| caption: How many grounds and rebuttals.
let size2 = sizes(2);
```

```rust
//| caption: The label, the claim and the grounds.
let start2 = head(2, size2.0);
```

```rust
//| caption: The warrant, the backing, the qualifier and the rebuttals, then the checklist and the paragraph.
let arg2 = tail(&start2, 2, size2.1);
```

## Argument 3

This argument has open lines. Complete them.

```rust
//| caption: How many grounds and rebuttals.
let size3 = sizes(3);
```

```rust
//| caption: The label, the claim and the grounds.
let start3 = head(3, size3.0);
```

```rust
//| caption: The warrant, the backing, the qualifier and the rebuttals, then the checklist and the paragraph.
let arg3 = tail(&start3, 3, size3.1);
```

## The essay

The pre-flight shows the open lines of each argument, but it does not stop the essay.

```rust
//| caption: The pre-flight and the whole essay.
let _order = ["claim-first", "grounds-first"][choice("Order", &["Claim first", "Grounds first"], 0)];
essay(&title, &thesis, &[&arg1, &arg2, &arg3], _order);
```

# The code

```rust
//| caption: The data, the boxes, the checks and the paragraph.
use engine::doc::esc;
use serde_json::Value;
use std::sync::OnceLock;

static RAW: OnceLock<Value> = OnceLock::new();
/// raw.json of visuals/viz/toulmin: the parts, the checklist, the prompts, the lead-ins, the limits and the template.
fn raw() -> &'static Value { RAW.get_or_init(|| serde_json::from_slice(data!("viz/toulmin/raw.json")).unwrap()) }
fn st(v: &Value) -> &str { v.as_str().unwrap_or("") }
fn arr(v: &Value) -> &[Value] { v.as_array().map_or(&[], Vec::as_slice) }
fn limit(key: &str) -> usize { raw()["constants"]["limits"][key].as_u64().unwrap() as usize }
fn collapse(s: &str) -> String { s.split_whitespace().collect::<Vec<_>>().join(" ") }

/// One argument as its boxes give it, each text cut to its limit. `notes` tells which texts were cut.
#[derive(Clone, Default)]
struct Arg { label: String, claim: String, grounds: Vec<(String, String)>, warrant: String, backing: String, qualifier: String, rebuttals: Vec<String>, notes: Vec<String> }

/// The template's argument n (from 1). It is Null after the last one, so a new argument starts empty.
fn tpl(n: usize) -> &'static Value { &raw()["template"]["arguments"][n - 1] }

/// A text box that starts from the template's text. A text over the limit `max` of raw.json is cut, with a note.
fn boxed(notes: &mut Vec<String>, label: &str, start: &Value, max: &str) -> String {
    let (v, max) = (field(label, st(start)), limit(max));
    let n = v.chars().count();
    if n > max { notes.push(format!("{label} has {n} characters; the limit is {max}. The checks and the paragraph use the first {max}.")) }
    v.chars().take(max).collect()
}

/// How many grounds and rebuttals argument n has: 0 to the limit. They start at the template's counts, or at 1 for a new
/// argument. The choices have a cell of their own: a run redraws the controls of a cell that has a choice, and a redraw
/// takes the focus from a box.
fn sizes(n: usize) -> (usize, usize) {
    let opts: Vec<String> = (0..=limit("items")).map(|k| k.to_string()).collect();
    let start = |t: &Value| if t.is_null() { 1 } else { arr(t).len().min(limit("items")) };
    (choice("Grounds", &opts, start(&tpl(n)["grounds"])), choice("Rebuttals", &opts, start(&tpl(n)["rebuttals"])))
}

/// The boxes of argument n for its label, its claim and its grounds. The grounds come last in the cell,
/// so that a change of their count does not move the keys of the other boxes.
fn head(n: usize, count: usize) -> Arg {
    let (t, mut a) = (tpl(n), Arg::default());
    a.label = boxed(&mut a.notes, "Label", &t["label"], "label");
    a.claim = boxed(&mut a.notes, "Claim", &t["claim"], "text");
    for i in 0..count {
        let g = &t["grounds"][i];
        let text = boxed(&mut a.notes, &format!("Ground {}", i + 1), &g["text"], "text");
        a.grounds.push((text, boxed(&mut a.notes, &format!("Source {}", i + 1), &g["source"], "source")));
    }
    a
}

/// The boxes of argument n for its warrant, its backing, its qualifier and its rebuttals, then its checks and paragraph.
fn tail(a: &Arg, n: usize, count: usize) -> Arg {
    let (t, mut a) = (tpl(n), a.clone());
    a.warrant = boxed(&mut a.notes, "Warrant", &t["warrant"], "text");
    a.backing = boxed(&mut a.notes, "Backing", &t["backing"], "text");
    a.qualifier = boxed(&mut a.notes, "Qualifier", &t["qualifier"], "qualifier");
    for i in 0..count {
        a.rebuttals.push(boxed(&mut a.notes, &format!("Rebuttal {}", i + 1), &t["rebuttals"][i], "text"));
    }
    show(&a);
    a
}

fn grounds(a: &Arg) -> Vec<String> { a.grounds.iter().map(|g| collapse(&g.0)).filter(|s| !s.is_empty()).collect() }
fn rebuttals(a: &Arg) -> Vec<String> { a.rebuttals.iter().map(|r| collapse(r)).filter(|s| !s.is_empty()).collect() }

/// Whether the part of an automatic checklist line has text.
fn filled(a: &Arg, key: &str) -> bool {
    match key {
        "grounds" => !grounds(a).is_empty(),
        "rebuttal" => !rebuttals(a).is_empty(),
        _ => !collapse(match key { "claim" => &a.claim, "warrant" => &a.warrant, "backing" => &a.backing, _ => &a.qualifier }).is_empty(),
    }
}

/// The automatic checklist lines: each label, and whether it is clear.
fn auto(a: &Arg) -> Vec<(&'static str, bool)> {
    arr(&raw()["checklist"]["auto"]).iter().map(|l| (st(&l["label"]), filled(a, st(&l["key"])))).collect()
}

/// The prompts for a claim that is there: a question, or no qualifier, rebuttal or warrant.
fn prompts(a: &Arg) -> Vec<String> {
    if collapse(&a.claim).is_empty() { return vec![] }
    [("question", collapse(&a.claim).ends_with('?')), ("qualifier", !filled(a, "qualifier")), ("rebuttal", !filled(a, "rebuttal")), ("warrant", !filled(a, "warrant"))]
        .iter().filter(|p| p.1).map(|p| st(&raw()["hints"][p.0]).to_string()).collect()
}

/// The paragraph's lines, "claim-first" or "grounds-first", with the lead-ins of raw.json before the reader's text.
fn lines(a: &Arg, order: &str) -> Vec<String> {
    let l = &raw()["connectives"]["paragraph"][order];
    let lead = |k: &str, s: String| (!s.is_empty()).then(|| format!("{} {s}", st(&l[k])));
    let (claim, q) = (collapse(&a.claim), collapse(&a.qualifier).trim_end_matches(['.', '!', '?']).trim().to_string());
    let support = vec![lead("grounds", grounds(a).join(" ")), lead("warrant", collapse(&a.warrant)), lead("backing", collapse(&a.backing))];
    let mut v = if order == "grounds-first" {
        let c = (!claim.is_empty()).then(|| if q.is_empty() { format!("{}: {claim}", st(&l["conclude"])) } else { format!("{} ({q}): {claim}", st(&l["conclude"])) });
        [support, vec![c]].concat()
    } else {
        let c = (!claim.is_empty()).then(|| if q.is_empty() { claim.clone() } else { format!("{claim} ({} {q}.)", st(&l["strength"])) });
        [vec![c], support].concat()
    };
    v.push(lead("rebuttals", rebuttals(a).join(" ")));
    v.into_iter().flatten().collect()
}

/// A heading and a list, when the list is not empty.
fn list(head: &str, items: Vec<String>) {
    if !items.is_empty() { html(&format!("<h4>{head}</h4><ul>{}</ul>", items.iter().map(|s| format!("<li>{}</li>", esc(s))).collect::<String>())) }
}

/// Lines as one paragraph: a break between lines on the page, a space in the PDFs.
fn para(lines: &[String]) -> String { format!("<p>{}</p>", lines.iter().map(|s| esc(s)).collect::<Vec<_>>().join("<br> ")) }

/// The checklist of an argument, the questions to confirm, the prompts, the notes and the paragraph in both orders.
fn show(a: &Arg) {
    let (c, lines_auto) = (&raw()["checklist"], auto(a));
    html(&format!("<h4>Checklist: {} of {} clear</h4>", lines_auto.iter().filter(|l| l.1).count(), lines_auto.len()));
    for (label, ok) in lines_auto {
        let r = st(&c["responses"][if ok { "clear" } else { "open" }]);
        println!("{label} {} {r}", ".".repeat(40usize.saturating_sub(label.chars().count() + r.chars().count())));
    }
    list("Confirm each yourself", arr(&c["confirm"]).iter().map(|l| st(&l["challenge"]).to_string()).collect());
    list("Prompts", prompts(a));
    list("Limits", a.notes.clone());
    for (h, order) in [("Claim first", "claim-first"), ("Grounds first", "grounds-first")] {
        let l = lines(a, order);
        html(&format!("<h4>{h}</h4>{}", if l.is_empty() { "<p>Fill in the boxes to build the paragraph.</p>".into() } else { para(&l) }));
    }
    list("Sources", a.grounds.iter().enumerate().filter(|g| !collapse(&g.1.1).is_empty()).map(|(i, g)| format!("Ground {}: {}", i + 1, collapse(&g.1))).collect());
}

/// The name of argument i (from 0) in the essay: its label, else the start of its claim, else "Argument i + 1".
fn name(a: &Arg, i: usize) -> String {
    let (label, claim, max) = (collapse(&a.label), collapse(&a.claim), limit("defaultLabelChars"));
    if !label.is_empty() { label }
    else if claim.chars().count() > max { format!("{}…", claim.chars().take(max).collect::<String>().trim_end()) }
    else if !claim.is_empty() { claim }
    else { format!("Argument {}", i + 1) }
}

/// The pre-flight list, then the whole essay: the title, the thesis and each argument that has text.
fn essay(title: &str, thesis: &str, args: &[&Arg], order: &str) {
    if args.len() > limit("arguments") { return println!("This essay has {} arguments; the limit is {}.", args.len(), limit("arguments")) }
    list("Pre-flight", args.iter().enumerate().map(|(i, a)| {
        let (l, open) = (auto(a), auto(a).iter().filter(|l| !l.1).count());
        let state = if open == 0 { "all clear ✓".into() } else { format!("{open} open {} ○", if open == 1 { "line" } else { "lines" }) };
        format!("Argument {} ({}): {state} ({}/{})", i + 1, name(a, i), l.len() - open, l.len())
    }).collect());
    let top = [if collapse(title).is_empty() { "Untitled essay".into() } else { collapse(title) }, collapse(thesis)];
    let mut text = para(&top.into_iter().filter(|s| !s.is_empty()).collect::<Vec<_>>());
    for (i, a) in args.iter().enumerate() {
        let l = lines(a, order);
        if !l.is_empty() { text += &para(&[vec![format!("Argument {} ({}).", i + 1, name(a, i))], l].concat()) }
    }
    html(&format!("<h4>The essay</h4>{text}"));
}
```
