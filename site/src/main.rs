//! Builds dist/: the landing page, Notes, Stories and Play. Every page is one self-contained
//! HTML file; every story is a notebook (`book`).
//! Usage: site [notes.json]  (default ../site/data/uniichat/memory.json)

mod book;
mod cells;

use book::{FONTS, font};
use engine::{doc, pack, theme};
use std::{fmt::Write, fs, path::Path};

const SHELL: &str = include_str!("../../web/shell.html");
const STYLE: &str = concat!(include_str!("../../web/style.css"), include_str!("../../web/book.css"));
pub const HOST: &str = include_str!("../../web/host.js");
const WASM: &str = "target/wasm32-unknown-unknown/release/engine.wasm";

use doc::esc;

fn font_css(n: usize) -> String {
    FONTS[..n].iter().map(|(fam, f)| format!("@font-face{{font-family:\"{fam}\";src:url({}) format(\"opentype\")}}\n", pack::data_url("f.otf", &font(f)))).collect()
}

/// A seeded thumbnail (`engine::thumb`): the seed alone picks its picture, palette and motion.
fn thumb(seed: u32, extra: &str) -> String {
    format!(r#"<canvas class="frame" data-scene="{}" data-seed="{seed}" {extra} aria-hidden="true"></canvas>"#, engine::scene::THUMB)
}

/// A scene palette (sky, shade, glow, light) as CSS custom properties.
pub fn vars(palette: &str) -> String {
    ["--sky", "--shade", "--glow", "--light"].iter().zip(palette.split_whitespace()).map(|(k, v)| format!("{k}:{v};")).collect()
}

pub struct Page {
    pub path: String,
    pub title: String,
    pub body: String,
    pub attrs: String,
    pub fonts: usize,
    pub script: String,
}

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
    let script = if !p.script.is_empty() { p.script.clone() } else if p.body.contains("<canvas") {
        format!(r#"<footer class="top"><span data-engine-status role="status"></span><button type="button" data-motion aria-pressed="true">Pause</button></footer><script id="wasm" type="application/octet-stream">{wasm}</script>
<script>{HOST}</script>"#)
    } else { String::new() };
    SHELL.replace("{{attrs}}", &p.attrs).replace("{{title}}", &esc(&p.title)).replace("{{root}}", &root)
        .replace("{{style}}", &(font_css(p.fonts) + &theme::css() + STYLE)).replace("{{body}}", &p.body).replace("{{script}}", &script).replace("{{index}}", index)
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

/// The Notes page body, and one search entry per day.
fn notes(path: &str) -> (String, Vec<(String, String, String)>) {
    let Ok(raw) = fs::read_to_string(path) else {
        return (format!("<p class=\"muted\">No notes export at {}.</p>", esc(path)), vec![]);
    };
    let v: serde_json::Value = serde_json::from_str(&raw).expect("notes export is not JSON");
    let mut items: Vec<_> = v["memories"].as_array().expect("notes export has no memories").iter()
        .filter_map(|m| Some((m["date"].as_str()?, m["kind"].as_str()?, sanitize(m["text"].as_str()?)?)))
        .filter(|(_, k, _)| ["note", "user", "unii"].contains(k))
        .collect();
    items.reverse();
    let (mut html, mut day, mut found) = (String::new(), "", vec![]);
    for (date, kind, text) in items {
        if date != day {
            write!(html, "<h2 id=\"{0}\">{0}</h2>", esc(date)).unwrap();
            found.push((format!("Notes · {date}"), format!("notes/index.html#{date}"), String::new()));
            day = date;
        }
        let label = match kind { "user" => "asked", "unii" => "answered", _ => "note" };
        write!(html, "<p class=\"note\"><b>{label}</b>{}</p>", esc(&text)).unwrap();
        let x: &mut String = &mut found.last_mut().unwrap().2;
        if x.len() < 400 { *x += &format!("{text} ") }
    }
    (html, found)
}

fn main() {
    let notes_path = std::env::args().nth(1).unwrap_or("../site/data/uniichat/memory.json".into());
    let engine_wasm = fs::read(WASM).expect("build the engine first: see README");
    let wasm = pack::base64(&engine_wasm);
    let mut slugs: Vec<String> = fs::read_dir("content/stories").unwrap().flatten()
        .filter(|e| e.path().join("index.md").exists()).map(|e| e.file_name().to_string_lossy().into_owned()).collect();
    slugs.sort();
    let (mut stories, mut pages, mut files) = (vec![], vec![], vec![]);
    for slug in &slugs {
        let (s, p, f) = book::notebook(slug, &engine_wasm);
        stories.push(s);
        pages.extend(p);
        files.extend(f.into_iter().map(|(n, b)| (format!("stories/{slug}/{n}"), b)));
    }
    // Doors and cards are seeded thumbnails: notes doze at night, stories stroll over a hill,
    // and play leaps clean out of its tile (see engine::thumb for the digits).
    const DOORS: [(&str, u32, &str, &str); 3] = [
        ("notes", 7_020, "Notes", "A working log, sanitised."),
        ("stories", 3_434, "Stories", "Visual explanations, told in order."),
        ("play", 5_113, "Play", "Toys to play with."),
    ];
    let doors: String = DOORS.iter().map(|(dir, seed, name, line)| format!(r#"<a class="door" href="{dir}/index.html">{}<h2>{name}</h2><p class="muted">{line}</p></a>"#, thumb(*seed, "data-bleed"))).collect();
    let cards: String = stories.iter().map(|s| format!(
        r#"<li><a href="{0}/index.html">{1}<h2>{2}</h2><p class="muted">{3}</p></a></li>"#,
        s.slug, s.thumb.map_or(String::new(), |seed| thumb(seed, "")), esc(&s.title), esc(&s.summary))).collect();
    let (notes, mut found) = notes(&notes_path);
    found.splice(0..0, DOORS.iter().map(|(dir, _, name, line)| (name.to_string(), format!("{dir}/index.html"), line.to_string())));
    for s in &stories {
        found.push((s.title.clone(), format!("stories/{}/index.html", s.slug), s.summary.clone()));
        found.extend(s.chapters.iter().enumerate().map(|(i, c)| (format!("{} · {c}", s.title), format!("stories/{}/index.html#c{}", s.slug, i + 1), String::new())));
    }
    let index = index(&found);
    pages.extend([
        Page::new("index.html", "Yu Jie", format!(r#"<p class="lede">Notes, stories and toys.</p><div class="doors">{doors}</div>"#)),
        Page::new("notes/index.html", "Notes", format!(r#"<h1>Notes</h1><div class="notes">{notes}</div>"#)),
        Page::new("stories/index.html", "Stories", format!(r#"<h1>Stories</h1><ul class="list">{cards}</ul>"#)),
        Page::new("play/index.html", "Play", r#"<h1>Play</h1><p class="lede">Toys arrive here as they are made.</p>"#.into()),
    ]);
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
}
