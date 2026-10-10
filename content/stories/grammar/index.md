---
title: How English grammar works
summary: Ask 2 questions of every expression: what is it, and what does it do? See 206 examples as trees after the Cambridge Grammar, and search all of them.
palette: #4a3b5c #221a2c #e8a33d #f6ecd9
thumb: 30489
theme: site
seed: 20261010
voice: af_heart
---

This story draws English grammar as trees, in the framework of *The Cambridge Grammar of the English Language* (Huddleston and Pullum, 2002).

<!-- skill: This story ports visuals/viz/english-grammar. Read the data only through data!, from concepts.json, examples.json and raw.json pinned in visuals.lock; never copy data into this file. A tree is drawn from the example's bracket notation by tree() and svg() in "The code"; svg() keeps within the 640 by 400 units of a plot, so the PDFs draw it too. The text cites counts of the pinned data (84 concepts, 206 examples, 52 contrasts, 16 confusions, 20 chapters): when the pin changes, update them. -->

<!-- skill: Narration lives in say blocks, one per chapter, written to be heard: short sentences, no abbreviations, no symbols. -->

```toml
serde_json = "=1.0.151"
```

## Two questions

An expression has a category, what it is, and a function, what it does.

```rust
//| caption: Each node shows its function above its category, and the box marks the part that the text explains. Det is determiner, Mod modifier, Comp complement, PredComp predicative complement, NP noun phrase, VP verb phrase, AdjP adjective phrase, PP preposition phrase, Nom nominal, D determinative.
explore(&["category-and-function"]);
```

```say
Every expression has two labels. Its category says what it is. Its function says what it does.
```

## Constituents {scene=4}

If the same words make constituents in 2 ways, the sentence has 2 meanings.

```rust
//| caption: Compare the first two examples: one sentence, two trees.
explore(&["constituent-structure"]);
```

```say
Words make groups inside groups. If the same words can make groups in two ways, the sentence has two meanings.
```

## Heads and dependents

The head sets the kind of constituent, and it selects its complements.

```rust
//| caption: The head, and the dependents around it.
explore(&["heads-and-dependents"]);
```

```say
In each group, one part is the head. The head sets the kind of phrase.
```

## Words

A tree in a word has bases and affixes, not words.

```rust
//| caption: Forms of a lexeme, and words built of parts.
explore(&["words-and-lexemes", "morphological-structure", "derivation", "compounds"]);
```

```say
Words have parts too. Takes and took are forms of one verb. Kindness is a new word, made from kind.
```

## The clause

Syntax, not meaning, identifies the subject: its position, the agreement of the verb, and the tag question.

```rust
//| caption: Subject, predicate and predicator.
explore(&["clause-structure", "subject"]);
```

```say
A simple clause has two parts. The subject comes first, and the verb agrees with it. The rest is the predicate.
```

## Complements

The verb shows if a preposition phrase is a complement or an adjunct.

```rust
//| caption: Objects, predicative complements, and complements against adjuncts.
explore(&["objects", "predicative-complement", "complements-and-adjuncts"]);
```

```say
The verb chooses what follows it. An object is a second participant. A predicative complement describes one.
```

## The noun phrase

Determiner is a function, not a category: a genitive phrase can be a determiner.

```rust
//| caption: The parts of a noun phrase, and the determiner function.
explore(&["noun-phrase-structure", "determiner-function"]);
```

```say
Most noun phrases start with a determiner, for example the. Determiner is a job, not a word class.
```

## Adjuncts

The verb does not select adjuncts, and many adjuncts can move to the front of the clause.

```rust
//| caption: Adjuncts of several kinds, and their positions.
explore(&["adjuncts"]);
```

```say
Adjuncts add what the verb does not need. They tell how, where, when or why.
```

## Look alike, differ

Each of the 52 contrasts boxes 2 parts that look alike but have different analyses.

```rust
//| caption: The contrast, then each side.
let _ks = list(&data()[1]["contrasts"]);
let _k = &_ks[choice("Contrast", &named(_ks.iter().map(|k| format!("{} / {}", s(&example(s(&k["a"]["ex"]))["text"]), s(&example(s(&k["b"]["ex"]))["text"]))).collect()), 0)];
html(&format!("<p>{}</p>", esc(s(&_k["explanation"]))));
for side in [&_k["a"], &_k["b"]] { html(&figure(example(s(&side["ex"])), s(&side["node"]))) }
```

```say
Here two sentences look alike. The trees show where they differ.
```

## Easy to confuse

Each of the 16 pairs of easily confused terms has 1 example that shows the difference.

```rust
//| caption: The pair, the concept and the example.
let _fs = list(&data()[0]["confusions"]);
let _f = &_fs[choice("Pair", &_fs.iter().map(|f| s(&f["label"])).collect::<Vec<_>>(), 0)];
let (_c, _e) = (concept(s(&_f["concept"])), example(s(&_f["example"])));
html(&format!("<p><b>{}.</b> {}</p>{}{}", esc(s(&_f["label"])), esc(s(&_f["orientation"])), about(_c, false), card(_e, node_in(_c, _e))));
```

```say
Some pairs of terms are easy to confuse. Each pair here has an example that shows the difference.
```

## The whole book

The 84 concepts follow the 20 chapters of the Cambridge Grammar.

```rust
//| caption: A chapter of the book, a concept in it, and one of its examples.
let _chs = list(&data()[2]["chapters"]);
let _ch = &_chs[choice("Chapter", &_chs.iter().map(|c| format!("{}. {}", c["n"], s(&c["title"]))).collect::<Vec<_>>(), 0)];
let _here: Vec<&Value> = concepts().iter().filter(|c| c["loc"][0] == _ch["n"]).collect();
let _c = _here[choice("Concept", &_here.iter().map(|c| s(&c["name"])).collect::<Vec<_>>(), 0)];
let _items = list(&_c["examples"]);
let (_x, _node) = item(&_items[choice("Example", &named(_items.iter().map(|i| s(&example(item(i).0)["text"]).to_string()).collect()), 0)]);
html(&(about(_c, true) + &card(example(_x), _node)));
```

```say
Choose a chapter of the Cambridge Grammar, then a concept, then one of its examples.
```

## Find {scene=2}

A concept or an example matches if its text contains every word that you type.

```rust
//| caption: The search.
let q = field("Find", "object");
```

```rust
//| caption: The concepts that match, then the examples, the closer matches first.
let (_cs, _es) = find(&q);
if q.trim().is_empty() {
    println!("Type a word to search the concepts and the examples.");
} else if _cs.is_empty() && _es.is_empty() {
    println!("Nothing matches \"{}\". Try a term such as object or adjunct, or a word from an example such as Kim.", q.trim());
} else {
    println!("{} concepts and {} examples match \"{}\".", _cs.len(), _es.len(), q.trim());
    if !_cs.is_empty() { table(&["Concept", "In the book", "What it is"], &_cs.iter().map(|c| vec![s(&c["name"]).to_string(), cite(&c["loc"]), s(&c["orientation"]).to_string()]).collect::<Vec<_>>()) }
    if !_es.is_empty() {
        let _e = _es[choice("Example", &named(_es.iter().take(40).map(|e| s(&e["text"]).to_string()).collect()), 0)];
        html(&card(_e, s(&_e["focus"])));
    }
}
```

```say
Last, search everything. Type a grammar term, or a word from a sentence.
```

# Notes and sources

The data comes from the English Grammar tool of [yujieteo/visuals](https://github.com/yujieteo/visuals), pinned in `visuals.lock`. That tool cites [*The Cambridge Grammar of the English Language*](https://doi.org/10.1017/9781316423530) only for its chapters, sections and first pages. Its sentences, analyses and explanations are its own. Nobody has checked them against the book, and the authors and the publisher do not endorse them.

Punctuation marks are not constituents, so a cited mark boxes the constituent that it bounds. A gap (__) shows an understood element. Antecedents are links in the text, not branches.

# The code

```rust
//| caption: The data.
use engine::doc::esc;
use serde_json::Value;
use std::sync::OnceLock;

static DATA: OnceLock<[Value; 3]> = OnceLock::new();
/// The concepts, the examples and the book's outline.
fn data() -> &'static [Value; 3] {
    DATA.get_or_init(|| [
        data!("viz/english-grammar/concepts.json"),
        data!("viz/english-grammar/examples.json"),
        data!("viz/english-grammar/raw.json"),
    ].map(|b| serde_json::from_slice(b).unwrap()))
}
fn s(v: &Value) -> &str { v.as_str().unwrap_or("") }
fn list(v: &Value) -> &[Value] { v.as_array().map_or(&[], |a| a) }
fn concepts() -> &'static [Value] { list(&data()[0]["concepts"]) }
fn examples() -> &'static [Value] { list(&data()[1]["examples"]) }
fn concept(id: &str) -> &'static Value { concepts().iter().find(|c| c["id"] == id).unwrap_or_else(|| panic!("no concept {id}")) }
fn example(id: &str) -> &'static Value { examples().iter().find(|e| e["id"] == id).unwrap_or_else(|| panic!("no example {id}")) }
/// A concept's item, "example@node", as its example and node.
fn item(i: &Value) -> (&str, &str) { s(i).split_once('@').unwrap() }
/// The node that concept `c` names in example `e`, else the example's own focus.
fn node_in<'a>(c: &'a Value, e: &'a Value) -> &'a str {
    list(&c["examples"]).iter().map(item).find(|i| e["id"] == i.0).map_or(s(&e["focus"]), |i| i.1)
}
/// Options, with a number after a repeated one.
fn named(opts: Vec<String>) -> Vec<String> {
    (0..opts.len()).map(|i| match opts[..i].iter().filter(|o| **o == opts[i]).count() { 0 => opts[i].clone(), n => format!("{} ({})", opts[i], n + 1) }).collect()
}

/// A reference to the book, [chapter, section or null]: the chapter, and the section with its first page.
fn cite(r: &Value) -> String {
    let ch = list(&data()[2]["chapters"]).iter().find(|c| c["n"] == r[0]).unwrap_or_else(|| panic!("no chapter {r}"));
    if r[1].is_null() { return format!("ch. {} {}", r[0], s(&ch["title"])) }
    let x = list(&ch["sections"]).iter().find(|x| x["id"] == r[1]).unwrap_or_else(|| panic!("no section {r}"));
    format!("ch. {} §{} {}, p. {}", r[0], s(&x["id"]), s(&x["title"]), x["page"])
}
```

```rust
//| caption: Trees: the bracket notation, the layout and the SVG.
/// A node: function, category, id and children. A leaf has only a word; a gap's word is __.
#[derive(Default)]
struct Node { f: String, cat: String, id: String, word: String, kids: Vec<Node> }

/// The tree of [Function:Category#id{key=value} children], where a child is a node, a word, or ~id for a gap.
fn tree(t: &str) -> Node {
    let (mut toks, mut cur, mut brace) = (vec![], String::new(), false);
    for c in t.chars() {
        match c {
            '{' | '}' => { brace = c == '{'; cur.push(c) }
            _ if brace => cur.push(c),
            '[' | ']' => { if !cur.is_empty() { toks.push(std::mem::take(&mut cur)) } toks.push(c.to_string()) }
            _ if c.is_whitespace() => if !cur.is_empty() { toks.push(std::mem::take(&mut cur)) },
            _ => cur.push(c),
        }
    }
    fn node(toks: &mut std::slice::Iter<String>) -> Node {
        let head = toks.next().unwrap().split('{').next().unwrap().to_string();
        let (fc, id) = head.split_once('#').unwrap_or((head.as_str(), ""));
        let (f, cat) = fc.split_once(':').unwrap_or(("", fc));
        let mut n = Node { f: f.into(), cat: cat.into(), id: id.into(), ..Default::default() };
        while let Some(t) = toks.next() {
            match t.as_str() {
                "]" => break,
                "[" => n.kids.push(node(toks)),
                w => n.kids.push(Node { word: if w.starts_with('~') { "__".into() } else { w.into() }, ..Default::default() }),
            }
        }
        n
    }
    node(&mut toks[1..].iter())
}
fn locate<'a>(n: &'a Node, id: &str) -> Option<&'a Node> {
    if n.id == id { Some(n) } else { n.kids.iter().find_map(|k| locate(k, id)) }
}
fn label(n: &Node) -> String { if n.f.is_empty() { n.cat.clone() } else { format!("{}: {}", n.f, n.cat) } }
fn words(n: &Node) -> String {
    if n.kids.is_empty() { n.word.clone() } else { n.kids.iter().map(words).collect::<Vec<_>>().join(" ") }
}
/// The width of a node in units at 15 px (about 8 a character), and its depth in rows of nodes.
fn width(n: &Node) -> f64 {
    let own = [n.f.len(), n.cat.len(), n.word.chars().count()].into_iter().max().unwrap() as f64 * 8.0 + 14.0;
    own.max(n.kids.iter().map(width).sum())
}
fn depth(n: &Node) -> usize { if n.kids.is_empty() { 0 } else { 1 + n.kids.iter().map(depth).max().unwrap() } }

/// The layout: the squeeze of a wide tree, the pitch of the rows, the baseline of the words, the node to box.
struct Lay { k: f64, pitch: f64, bottom: f64, focus: String, out: String }
/// Draw `n` from `x0` at row `d`; return its centre. Under the boxed node, lines and text take the accent.
fn draw(n: &Node, x0: f64, d: usize, on: bool, l: &mut Lay) -> f64 {
    let (w, y) = (width(n) * l.k, 16.0 + d as f64 * l.pitch);
    let text = |l: &mut Lay, class: &str, x: f64, y: f64, t: &str| l.out += &format!("<text class=\"{class}\" x=\"{x:.1}\" y=\"{y:.1}\" text-anchor=\"middle\">{}</text>", esc(t));
    if n.kids.is_empty() {
        text(l, if n.word == "__" { "ax" } else if on { "d0" } else { "d3" }, x0 + w / 2.0, l.bottom, &n.word);
        return x0 + w / 2.0;
    }
    let me = !n.id.is_empty() && n.id == l.focus;
    if me { l.out += &format!("<path class=\"l0\" d=\"M{a:.1} {b:.1}L{c:.1} {b:.1}L{c:.1} {e:.1}L{a:.1} {e:.1}L{a:.1} {b:.1}\"/>", a = x0 + 1.0, b = y - 15.0, c = x0 + w - 1.0, e = l.bottom + 7.0) }
    let on = on || me;
    let mut x = x0 + (w - n.kids.iter().map(width).sum::<f64>() * l.k) / 2.0;
    let mut xs = vec![];
    for c in &n.kids {
        xs.push((draw(c, x, d + 1, on, l), c.kids.is_empty()));
        x += width(c) * l.k;
    }
    let cx = (xs[0].0 + xs[xs.len() - 1].0) / 2.0;
    for (kx, leaf) in xs {
        let (class, y2) = (if on { "l0\" stroke-width=\"2" } else { "l3" }, if leaf { l.bottom - 13.0 } else { y + l.pitch - 13.0 });
        l.out += &format!("<line class=\"{class}\" x1=\"{cx:.1}\" y1=\"{:.1}\" x2=\"{kx:.1}\" y2=\"{y2:.1}\"/>", y + 20.0);
    }
    text(l, if on { "d0" } else { "ax" }, cx, y, &n.f);
    text(l, if on { "d0" } else { "d3" }, cx, y + 15.0, &n.cat);
    cx
}
/// The tree as SVG in the units of a plot (640 wide, at most 400 high), cropped to the tree, with the node `focus` boxed.
/// It keeps its size on a wide page and scrolls sideways on a narrow one, so its text stays legible.
fn svg(root: &Node, focus: &str) -> String {
    let (w, rows) = (width(root), depth(root));
    let k = (620.0 / w).min(1.0);
    let pitch = (360.0 / rows as f64).min(60.0);
    let mut l = Lay { k, pitch, bottom: 28.0 + rows as f64 * pitch, focus: focus.into(), out: String::new() };
    draw(root, 320.0 - w * k / 2.0, 0, false, &mut l);
    let (vw, top) = ((w * k).max(240.0) + 8.0, if root.f.is_empty() { 14.0 } else { 0.0 });
    format!("<div style=\"overflow-x:auto\"><svg class=\"plot\" viewBox=\"{:.1} {top} {vw:.1} {:.1}\" style=\"max-width:{vw:.0}px;min-width:{:.0}px;margin:0.5rem auto\" role=\"img\">{}</svg></div>",
        320.0 - vw / 2.0, l.bottom + 12.0 - top, vw.min(480.0), l.out)
}
```

```rust
//| caption: Cards: a concept, an example's figure and its text, and the search.
/// The node that the item names: a punctuation mark names the constituent that it bounds.
fn bound<'a>(e: &'a Value, node: &'a str) -> &'a str {
    list(&e["marks"]).iter().find(|m| m["id"] == node).map_or(node, |m| s(&m["bounds"]))
}
/// The sentence, its tree with the node boxed, and what the box holds.
fn figure(e: &Value, node: &str) -> String {
    let (root, at) = (tree(s(&e["tree"])), bound(e, node));
    let n = locate(&root, at).unwrap();
    let mut h = format!("<p><em>{}</em></p>{}<p class=\"caption\">Boxed: {}, “{}”", esc(s(&e["text"])), svg(&root, at), esc(&label(n)), esc(&words(n)));
    if let Some(m) = list(&e["marks"]).iter().find(|m| m["id"] == node) {
        h += &format!(". The {} ({}) {}", esc(s(&m["name"])), esc(s(&m["at"])), esc(s(&m["use"])));
    }
    h + ".</p>"
}
/// The figure, the explanation, notes on usage and context, and the question to predict.
fn card(e: &Value, node: &str) -> String {
    let mut h = figure(e, node) + &format!("<p>{}</p>", esc(s(&e["explanation"])));
    for k in ["usage", "context"] { if let Some(t) = e[k].as_str() { h += &format!("<p class=\"caption\">{}</p>", esc(t)) } }
    if let Some(p) = e.get("predict") { h += &format!("<details><summary>{}</summary><p>{}</p></details>", esc(s(&p["question"])), esc(s(&p["answer"]))) }
    h
}
/// A concept: its name and place in the book, what it is and, in full, its note, references, related concepts and other names.
fn about(c: &Value, full: bool) -> String {
    let join = |v: &Value, f: &dyn Fn(&Value) -> String| list(v).iter().map(f).collect::<Vec<_>>().join("; ");
    let mut h = format!("<p><b>{}</b> ({}). {}</p>", esc(s(&c["name"])), esc(&cite(&c["loc"])), esc(s(&c["orientation"])));
    if full {
        if let Some(t) = c["note"].as_str() { h += &format!("<p>{}</p>", esc(t)) }
        for (label, v) in [("Also in the book", join(&c["refs"], &|r| cite(r))), ("Related", join(&c["related"], &|r| s(&concept(s(r))["name"]).into())),
            ("Other names", join(&c["aliases"], &|a| s(a).into())), ("Abbreviations", join(&c["abbr"], &|a| s(a).into()))] {
            if !v.is_empty() { h += &format!("<p class=\"caption\">{label}: {}.</p>", esc(&v)) }
        }
    }
    h
}
/// A chapter's concepts: a choice of concept when there are several, then of its examples; the concept, then the card.
fn explore(ids: &[&str]) {
    let c = concept(ids[if ids.len() > 1 { choice("Concept", &ids.iter().map(|i| s(&concept(i)["name"])).collect::<Vec<_>>(), 0) } else { 0 }]);
    let items = list(&c["examples"]);
    let (x, node) = item(&items[choice("Example", &named(items.iter().map(|i| s(&example(item(i).0)["text"]).to_string()).collect()), 0)]);
    html(&(about(c, false) + &card(example(x), node)));
}
/// The concepts and the examples that hold every word of `q`, closer matches first: a concept by its names, an example by its sentence.
fn find(q: &str) -> (Vec<&'static Value>, Vec<&'static Value>) {
    let ws: Vec<String> = q.to_lowercase().split_whitespace().map(String::from).collect();
    let all = |t: &str| !ws.is_empty() && ws.iter().all(|w| t.to_lowercase().contains(w.as_str()));
    let rank = |near: String, far: String| if all(&near) { Some(0) } else if all(&(near + " " + &far)) { Some(1) } else { None };
    let strs = |v: &Value| list(v).iter().map(s).collect::<Vec<_>>().join(" ");
    let mut cs: Vec<_> = concepts().iter().filter_map(|c| Some((rank(format!("{} {} {}", s(&c["name"]), strs(&c["aliases"]), strs(&c["abbr"])), format!("{} {}", s(&c["orientation"]), s(&c["note"])))?, c))).collect();
    let mut es: Vec<_> = examples().iter().filter_map(|e| Some((rank(s(&e["text"]).into(), ["tree", "explanation", "usage", "context"].map(|k| s(&e[k])).join(" "))?, e))).collect();
    cs.sort_by_key(|p| p.0);
    es.sort_by_key(|p| p.0);
    (cs.into_iter().map(|p| p.1).collect(), es.into_iter().map(|p| p.1).collect())
}
```
