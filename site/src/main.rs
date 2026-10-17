//! Builds dist/: the landing page, Stories and Play. Every page is one self-contained
//! HTML file; every story and toy is a notebook (`book`).

mod book;
mod cells;

use book::{FONTS, font};
use engine::{doc, pack, theme};
use std::{fs, path::Path};

const SHELL: &str = include_str!("../../web/shell.html");
const STYLE: &str = concat!(include_str!("../../web/style.css"), include_str!("../../web/book.css"));
pub const HOST: &str = include_str!("../../web/host.js");
const WASM: &str = "target/wasm32-unknown-unknown/release/engine.wasm";
use doc::esc;

/// The first `n` fonts as @font-face rules, each marked with its file for the page's PDF export.
fn font_css(n: usize) -> String {
    FONTS[..n].iter().map(|(fam, f, d)| format!("@font-face{{/*{f}*/font-family:\"{fam}\";{d}src:url({})}}\n", pack::data_url(f, &font(f)))).collect()
}

/// One HTML page: its path under dist/, title, body, attributes on <html>, how many `FONTS` it
/// embeds, and its notebook scripts.
pub struct Page { pub path: String, pub title: String, pub body: String, pub attrs: String, pub fonts: usize, pub script: String }

impl Page {
    fn new(path: &str, title: &str, body: String) -> Page {
        Page { path: path.into(), title: title.into(), body, attrs: String::new(), fonts: 6, script: String::new() }
    }
}

/// Search entries (title, path from the root, text to match) as JSON for every page's Ctrl/Cmd-K.
fn index(entries: &[(String, String, String)]) -> String {
    format!("[{}]", entries.iter().map(|(t, h, x)| format!("[{},{},{}]", pack::json(t), pack::json(h), pack::json(x))).collect::<Vec<_>>().join(","))
}

fn render(p: &Page, index: &str) -> String {
    let root = "../".repeat(p.path.matches('/').count());
    SHELL.replace("{{attrs}}", &p.attrs).replace("{{title}}", &esc(&p.title)).replace("{{root}}", &root)
        .replace("{{style}}", &(font_css(p.fonts) + &theme::css() + STYLE)).replace("{{body}}", &p.body).replace("{{script}}", &p.script)
        .replace("{{index}}", index)
        .replace("{{modes}}", &format!("[{}]", theme::THEMES.iter().map(|t| pack::json(t.0)).collect::<Vec<_>>().join(",")))
        .replace("{{themes}}", &theme::THEMES.iter().map(|(id, label, ..)| format!(r#"<button type="button" value="{id}">{label}</button>"#)).collect::<String>())
}

/// Plain pages (an app's privacy policy, its support page): `content/pages/<path>.html` holds the
/// body; the title is its `<h1>`. They wear the shell and the reader's theme, and stay out of search.
fn plain(dir: &Path, base: &Path) -> Vec<Page> {
    let mut entries: Vec<_> = fs::read_dir(dir).into_iter().flatten().flatten().map(|e| e.path()).collect();
    entries.sort();
    entries.iter().flat_map(|p| if p.is_dir() { plain(p, base) } else if p.extension().is_some_and(|x| x == "html") {
        let body = fs::read_to_string(p).unwrap();
        let title = body.split_once("<h1>").and_then(|(_, r)| r.split_once("</h1>")).map_or("", |(t, _)| t).to_string();
        let fonts = if body.contains("<code") || body.contains("<pre") { FONTS.len() } else { 6 };
        vec![Page { fonts, ..Page::new(&p.strip_prefix(base).unwrap().to_string_lossy(), &title, body) }]
    } else { vec![] }).collect()
}

fn main() {
    let engine_wasm = fs::read(WASM).expect("build the engine first: see README");
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
    const DOORS: [(&str, &str, &str); 2] = [
        ("stories", "Stories", "Visual explanations, told in order."),
        ("play", "Play", "Toys to play with."),
    ];
    let doors: String = DOORS.iter().map(|(dir, name, line)| format!(
        r#"<a class="door" href="{dir}/index.html"><h2>{name}</h2><p class="muted">{line}</p></a>"#)).collect();
    let cards = |door: &str| -> String { stories.iter().filter(|s| s.door == door).map(|s| format!(
        r#"<li><a href="{0}/index.html"><h2>{1}</h2><p class="muted">{2}</p></a></li>"#,
        s.slug, esc(&s.title), esc(&s.summary))).collect() };
    let mut found = vec![];
    found.splice(0..0, DOORS.iter().map(|(dir, name, line)| (name.to_string(), format!("{dir}/index.html"), line.to_string())));
    for s in &stories {
        let page = format!("{}/{}/index.html", s.door, s.slug);
        found.push((s.title.clone(), page.clone(), s.summary.clone()));
        found.extend(s.chapters.iter().enumerate().map(|(i, c)| (format!("{} · {c}", s.title), format!("{page}#c{}", i + 1), String::new())));
    }
    let index = index(&found);
    pages.extend([
        Page::new("index.html", "Yu Jie", format!(r#"<p class="lede">Stories and toys.</p><div class="doors">{doors}</div>"#)),
        Page::new("stories/index.html", "Stories", format!(r#"<h1>Stories</h1><ul class="list">{}</ul>"#, cards("stories"))),
        Page::new("play/index.html", "Play", format!(r#"<h1>Play</h1><ul class="list">{}</ul>"#, cards("play"))),
    ]);
    pages.extend(plain(Path::new("content/pages"), Path::new("content/pages")));
    // The voice (kokoro.lock, scripts/kokoro.sh) is served beside the site when every pinned file
    // is present and matches; the build reads the Misaki lexicons itself, so they are not served.
    let pinned = |(h, p): (&str, &str)| fs::read(format!("kokoro/{p}")).ok().filter(|b| pack::sha256(b) == h).map(|b| (format!("kokoro/{p}"), b));
    let voice: Vec<_> = book::pins().filter(|p| !p.1.starts_with("misaki/")).map(pinned).collect();
    match voice.into_iter().collect::<Option<Vec<_>>>() {
        Some(v) => files.extend(v),
        None => eprintln!("kokoro/ incomplete: narration export needs scripts/kokoro.sh"),
    }
    let pages: Vec<(String, Vec<u8>)> = pages.iter().map(|p| (p.path.clone(), render(p, &index).into_bytes())).collect();
    for (path, bytes) in pages.iter().chain(&files) {
        let out = Path::new("dist").join(path);
        fs::create_dir_all(out.parent().unwrap()).unwrap();
        fs::write(&out, bytes).unwrap();
        println!("{} {}", out.display(), bytes.len());
    }
}
