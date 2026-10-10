//! Builds dist/: the landing page, Notes, Stories and Play. Every page is one self-contained
//! HTML file; every story and toy is a notebook (`book`).
//! Usage: site [notes.json]  (default ../site/data/uniichat/memory.json)

mod book;
mod cells;

use book::{FONTS, font};
use engine::{doc, pack, theme};
use std::{collections::HashMap, fmt::Write, fs, path::Path};

const SHELL: &str = include_str!("../../web/shell.html");
const STYLE: &str = concat!(include_str!("../../web/style.css"), include_str!("../../web/book.css"));
pub const HOST: &str = include_str!("../../web/host.js");
const NOTES: &str = include_str!("../../web/notes.js");
const WASM: &str = "target/wasm32-unknown-unknown/release/engine.wasm";

use doc::esc;

fn font_css(n: usize) -> String {
    let face = |fam: &str, f: &str| format!("@font-face{{font-family:\"{fam}\";src:url({}) format(\"opentype\")}}\n", pack::data_url("f.otf", &font(f)));
    FONTS[..n].iter().map(|(fam, f)| face(fam, f)).collect()
}

/// A seeded thumbnail (`engine::thumb`): the seed alone picks its picture, palette and motion.
fn thumb(seed: u32, extra: &str) -> String {
    format!(r#"<canvas class="frame" data-scene="{}" data-seed="{seed}" {extra} aria-hidden="true"></canvas>"#, engine::scene::THUMB)
}

/// One HTML page: its path under dist/, title, body, attributes on <html>, how many `FONTS` it
/// embeds, and its scripts (by default the engine and host when it has a canvas).
pub struct Page { pub path: String, pub title: String, pub body: String, pub attrs: String, pub fonts: usize, pub script: String }

impl Page {
    fn new(path: &str, title: &str, body: String) -> Page {
        Page { path: path.into(), title: title.into(), body, attrs: String::new(), fonts: 2, script: String::new() }
    }
}

/// Search entries (title, path from the root, text to match) as JSON for every page's Ctrl/Cmd-K.
fn index(entries: &[(String, String, String)]) -> String {
    format!("[{}]", entries.iter().map(|(t, h, x)| format!("[{},{},{}]", pack::json(t), pack::json(h), pack::json(x))).collect::<Vec<_>>().join(","))
}

fn render(p: &Page, wasm: &str, index: &str) -> String {
    let root = "../".repeat(p.path.matches('/').count());
    let footer = r#"<footer class="top"><span data-engine-status role="status"></span><button type="button" data-motion aria-pressed="true">Pause</button></footer>"#;
    let script = match () {
        _ if !p.script.is_empty() => p.script.clone(),
        _ if p.body.contains("<canvas") => format!("{footer}<script id=\"wasm\" type=\"application/octet-stream\">{wasm}</script>\n<script>{HOST}</script>"),
        _ => String::new(),
    };
    SHELL.replace("{{attrs}}", &p.attrs).replace("{{title}}", &esc(&p.title)).replace("{{root}}", &root)
        .replace("{{style}}", &(font_css(p.fonts) + &theme::css() + STYLE)).replace("{{body}}", &p.body).replace("{{script}}", &script)
        .replace("{{index}}", index).replace("{{themes}}", &themes())
}

/// The header's theme dialog: one button per family, its swatch the light and dark background and accent.
fn themes() -> String {
    theme::THEMES.iter().map(|(f, _, _, l, d)| {
        let c = |p: &str, i: usize| p.split(' ').nth(i).unwrap_or("000000").to_string();
        let name: Vec<String> = f.split('-').map(|w| w[..1].to_uppercase() + &w[1..]).collect();
        let swatch = format!("--a:#{};--b:#{};--c:#{};--d:#{}", c(l, 0), c(l, 6), c(d, 0), c(d, 6));
        format!(r#"<button type="button" value="{f}" style="{swatch}"><i></i>{}</button>"#, name.join(" "))
    }).collect()
}

/// Redact private details from a log line; None when it must not be published at all.
fn sanitize(text: &str) -> Option<String> {
    const SECRETS: [&str; 8] = ["sk-", "ghp_", "gho_", "github_pat_", "AKIA", "PRIVATE KEY", "password", "token="];
    if SECRETS.iter().any(|s| text.contains(s)) {
        return None;
    }
    let mut t = text.trim();
    if t.starts_with('[') {
        t = t.split_once("] ").map_or(t, |x| x.1); // drop "[codex 9949]"-style session tags
    }
    let mut out = String::new();
    for word in t.split_inclusive(char::is_whitespace) {
        let core = word.trim_matches(|c: char| !c.is_alphanumeric() && !"~/@_-".contains(c));
        let (lead, tail) = word.split_once(core).unwrap_or((word, ""));
        let private = ["~/", "/Users/", "/home/", "/tmp/", "/root/"].iter().any(|p| core.contains(p));
        let email = core.split_once('@').is_some_and(|(a, b)| !a.is_empty() && b.contains('.'));
        let r = match () {
            _ if core.is_empty() => word.into(),
            _ if private => format!("{lead}[private path]{tail}"),
            _ if email => format!("{lead}[email]{tail}"),
            _ => word.into(),
        };
        out.push_str(&r.replace("teoyujie.org", "[site]"));
    }
    Some(out)
}

/// The largest aligned blocks that tile notes 0..n, as (first, size): UniiChat summarises each
/// aligned block of 2, 4, 8, ... notes, so these are the tree's roots.
fn roots(n: usize) -> Vec<(usize, usize)> {
    let (mut v, mut lo) = (vec![], 0);
    while lo < n {
        let mut size = 1;
        while lo % (size * 2) == 0 && lo + size * 2 <= n { size *= 2 }
        v.push((lo, size));
        lo += size;
    }
    v
}

type Note = (String, &'static str, Option<String>);

/// One branch of the summary tree: a summary that opens onto its two halves, down to the notes.
fn branch(h: &mut String, notes: &[Note], sums: &HashMap<(usize, usize), Option<String>>, lo: usize, size: usize, root: bool) {
    const HELD: &str = "<i>Withheld.</i>";
    if size == 1 {
        let (date, kind, text) = &notes[lo];
        let text = text.as_deref().map_or(HELD.into(), esc);
        let kind = if kind.is_empty() { "" } else { " · " }.to_string() + kind;
        write!(h, r#"<li id="n{lo}"><span>#{lo} · {}{kind}</span>{text}</li>"#, esc(date)).unwrap();
        return;
    }
    let hi = lo + size - 1;
    let text = match sums.get(&(lo, hi)) { Some(Some(t)) => esc(t), Some(None) => HELD.into(), None => "<i>No summary yet.</i>".into() };
    let (a, b) = (&notes[lo].0, &notes[hi].0);
    let dates = if a == b { esc(a) } else { format!("{} – {}", esc(a), esc(b)) };
    let open = if root { " open" } else { "" };
    write!(h, r#"<li id="s{lo}-{hi}"><details{open}><summary><span>#{lo}–{hi} · {dates}</span>{text}</summary><ol>"#).unwrap();
    branch(h, notes, sums, lo, size / 2, false);
    branch(h, notes, sums, lo + size / 2, size / 2, false);
    h.push_str("</ol></details></li>");
}

/// The Notes page body: the UniiChat log as its summary tree, oldest first, with a search over
/// notes and summaries (web/notes.js). Also one site-search entry per day.
fn notes(path: &str) -> (String, Vec<(String, String, String)>) {
    let Ok(raw) = fs::read_to_string(path) else {
        return (format!("<p class=\"muted\">No notes export at {}.</p>", esc(path)), vec![]);
    };
    let v: serde_json::Value = serde_json::from_str(&raw).expect("notes export is not JSON");
    // A note keeps its place in the tree even when it is withheld (a kind not published, or sanitize refuses it).
    let notes: Vec<Note> = v["memories"].as_array().expect("notes export has no memories").iter().map(|m| {
        let kind = match m["kind"].as_str() { Some("note") => "note", Some("user") => "asked", Some("unii") => "answered", _ => "" };
        let text = m["text"].as_str().filter(|_| !kind.is_empty()).and_then(sanitize);
        (m["date"].as_str().unwrap_or("").to_string(), kind, text)
    }).collect();
    let sums: HashMap<_, _> = v["nodes"].as_array().into_iter().flatten()
        .filter_map(|n| Some(((n["lo"].as_u64()? as usize, n["hi"].as_u64()? as usize), n["text"].as_str().and_then(sanitize)))).collect();
    let (mut found, mut day) = (vec![], None);
    for (i, (date, _, text)) in notes.iter().enumerate() {
        if day != Some(date) {
            found.push((format!("Notes · {date}"), format!("notes/index.html#n{i}"), String::new()));
            day = Some(date);
        }
        let x: &mut String = &mut found.last_mut().unwrap().2;
        if let Some(t) = text.as_ref().filter(|_| x.len() < 400) { *x += &format!("{t} ") }
    }
    // Every aligned block lies inside one root, so each well-formed summary is shown.
    let aligned = |lo: usize, hi: usize| lo < hi && hi < notes.len() && (hi - lo + 1).is_power_of_two() && lo % (hi - lo + 1) == 0;
    let shown = sums.iter().filter(|(k, t)| t.is_some() && aligned(k.0, k.1)).count();
    let mut tree = String::new();
    for (lo, size) in roots(notes.len()) { branch(&mut tree, &notes, &sums, lo, size, true) }
    let search = concat!(
        r#"<form class="sift" role="search"><input type="search" placeholder="Search notes and summaries" aria-label="Search notes and summaries" "#,
        r#"autocomplete="off" spellcheck="false"><button type="button" value="s" aria-pressed="true">Summaries</button>"#,
        r#"<button type="button" value="n" aria-pressed="true">Notes</button><output aria-live="polite"></output></form>"#
    );
    let lede = format!("{} notes and {shown} summaries from UniiChat, oldest first. Each summary stands for the notes beneath it.", notes.len());
    (format!("<p class=\"lede\">{lede}</p>\n{search}\n<ol class=\"hits\" hidden></ol><ol class=\"tree\">{tree}</ol>"), found)
}

fn main() {
    let notes_path = std::env::args().nth(1).unwrap_or("../site/data/uniichat/memory.json".into());
    let engine_wasm = fs::read(WASM).expect("build the engine first: see README");
    let wasm = pack::base64(&engine_wasm);
    let (mut stories, mut pages, mut files) = (vec![], vec![], vec![]);
    for door in ["stories", "play"] {
        let mut slugs: Vec<String> = fs::read_dir(format!("content/{door}")).into_iter().flatten().flatten()
            .filter(|e| e.path().join("index.md").exists()).map(|e| e.file_name().to_string_lossy().into_owned()).collect();
        slugs.sort();
        for slug in &slugs {
            let (s, p, f) = book::notebook(door, slug, &engine_wasm);
            stories.push(s);
            pages.extend(p);
            files.extend(f.into_iter().map(|(n, b)| (format!("{door}/{slug}/{n}"), b)));
        }
    }
    // Doors and cards are seeded thumbnails: notes doze at night, stories stroll over a hill,
    // and play leaps clean out of its tile (see engine::thumb for the digits).
    const DOORS: [(&str, u32, &str, &str); 3] = [
        ("notes", 7_020, "Notes", "A working log, sanitised."),
        ("stories", 3_434, "Stories", "Visual explanations, told in order."),
        ("play", 5_113, "Play", "Toys to play with."),
    ];
    let doors: String = DOORS.iter().map(|(dir, seed, name, line)| format!(
        r#"<a class="door" href="{dir}/index.html">{}<h2>{name}</h2><p class="muted">{line}</p></a>"#, thumb(*seed, "data-bleed"))).collect();
    let cards = |door: &str| -> String { stories.iter().filter(|s| s.door == door).map(|s| format!(
        r#"<li><a href="{0}/index.html">{1}<h2>{2}</h2><p class="muted">{3}</p></a></li>"#,
        s.slug, s.thumb.map_or(String::new(), |seed| thumb(seed, "")), esc(&s.title), esc(&s.summary))).collect() };
    let (notes, mut found) = notes(&notes_path);
    found.splice(0..0, DOORS.iter().map(|(dir, _, name, line)| (name.to_string(), format!("{dir}/index.html"), line.to_string())));
    for s in &stories {
        let page = format!("{}/{}/index.html", s.door, s.slug);
        found.push((s.title.clone(), page.clone(), s.summary.clone()));
        found.extend(s.chapters.iter().enumerate().map(|(i, c)| (format!("{} · {c}", s.title), format!("{page}#c{}", i + 1), String::new())));
    }
    let index = index(&found);
    pages.extend([
        Page::new("index.html", "Yu Jie", format!(r#"<p class="lede">Notes, stories and toys.</p><div class="doors">{doors}</div>"#)),
        Page { script: if notes.contains("class=\"tree\"") { format!("<script>{NOTES}</script>") } else { String::new() },
            ..Page::new("notes/index.html", "Notes", format!(r#"<h1>Notes</h1><div class="notes">{notes}</div>"#)) },
        Page::new("stories/index.html", "Stories", format!(r#"<h1>Stories</h1><ul class="list">{}</ul>"#, cards("stories"))),
        Page::new("play/index.html", "Play", format!(r#"<h1>Play</h1><ul class="list">{}</ul>"#, cards("play"))),
    ]);
    // The voice (kokoro.lock, scripts/kokoro.sh) is served beside the site when every pinned file
    // is present and matches; the build reads the Misaki lexicons itself, so they are not served.
    let pinned = |(h, p): (&str, &str)| fs::read(format!("kokoro/{p}")).ok().filter(|b| pack::sha256(b) == h).map(|b| (format!("kokoro/{p}"), b));
    let voice: Vec<_> = book::pins().filter(|p| !p.1.starts_with("misaki/")).map(pinned).collect();
    match voice.into_iter().collect::<Option<Vec<_>>>() {
        Some(v) => files.extend(v),
        None => eprintln!("kokoro/ incomplete: narration export needs scripts/kokoro.sh"),
    }
    let pages: Vec<(String, Vec<u8>)> = pages.iter().map(|p| (p.path.clone(), render(p, &wasm, &index).into_bytes())).collect();
    for (path, bytes) in pages.iter().chain(&files) {
        let out = Path::new("dist").join(path);
        fs::create_dir_all(out.parent().unwrap()).unwrap();
        fs::write(&out, bytes).unwrap();
        println!("{} {}", out.display(), bytes.len());
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sanitize_redacts_and_refuses() {
        assert_eq!(sanitize("[pi d3d2] see ~/notes/a.md and `/Users/me/x`.").unwrap(), "see [private path] and `[private path]`.");
        assert_eq!(sanitize("mail me@x.org at teoyujie.org").unwrap(), "mail [email] at [site]");
        assert!(sanitize("key ghp_abc").is_none());
    }

    #[test]
    fn notes_tile_into_summary_roots() {
        assert_eq!(roots(546), [(0, 512), (512, 32), (544, 2)]);
        assert_eq!(roots(37), [(0, 32), (32, 4), (36, 1)]);
        assert!(roots(0).is_empty());
    }
}
