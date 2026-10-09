//! Builds dist/: the landing page, Notes, Stories and Playground. Every page is
//! one self-contained HTML file; pages with a canvas carry the engine inline.
//! Usage: site [notes.json]  (default ../site/data/uniichat/memory.json)

use std::{fmt::Write, fs, path::Path};

const SHELL: &str = include_str!("../../web/shell.html");
const STYLE: &str = include_str!("../../web/style.css");
const HOST: &str = include_str!("../../web/host.js");
const WASM: &str = "target/wasm32-unknown-unknown/release/engine.wasm";

fn esc(s: &str) -> String {
    s.replace('&', "&amp;").replace('<', "&lt;").replace('>', "&gt;").replace('"', "&quot;")
}

fn base64(b: &[u8]) -> String {
    const A: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let mut s = String::with_capacity(b.len().div_ceil(3) * 4);
    for c in b.chunks(3) {
        let n = c.iter().enumerate().fold(0u32, |n, (i, &x)| n | (x as u32) << (16 - 8 * i));
        for i in 0..4 {
            s.push(if i <= c.len() { A[(n >> (18 - 6 * i) & 63) as usize] as char } else { '=' });
        }
    }
    s
}

fn canvas(scene: u32, palette: &str, extra: &str) -> String {
    let vars = ["--base", "--shade", "--accent", "--light"].iter().zip(palette.split_whitespace());
    let style: String = vars.map(|(k, v)| format!("{k}:{v};")).collect();
    format!(r#"<canvas class="frame" data-scene="{scene}" style="{}" {extra} aria-hidden="true"></canvas>"#, esc(&style))
}

struct Page {
    path: String,
    title: String,
    body: String,
}

fn render(p: &Page, wasm: &str) -> String {
    let root = "../".repeat(p.path.matches('/').count());
    let script = if p.body.contains("<canvas") {
        let motion = if p.body.contains("data-motion") { "" } else {
            r#"<footer class="top"><span data-engine-status role="status"></span><button type="button" data-motion aria-pressed="true">Pause</button></footer>"#
        };
        format!("{motion}<script id=\"wasm\" type=\"application/octet-stream\">{wasm}</script>\n<script>{HOST}</script>")
    } else {
        String::new()
    };
    SHELL.replace("{{title}}", &esc(&p.title)).replace("{{style}}", STYLE).replace("{{root}}", &root)
        .replace("{{body}}", &p.body).replace("{{script}}", &script)
}

struct Story {
    slug: String,
    title: String,
    summary: String,
    palette: String,
    thumb: u32,
    html: String,
}

/// A story file: `key: value` header lines, then `## Heading` chapters, each with an
/// optional `scene: N` line and paragraphs. A final `# Notes` block becomes a disclosure.
fn story(slug: &str, src: &str) -> Story {
    let mut s = Story { slug: slug.into(), title: slug.into(), summary: String::new(), palette: String::new(), thumb: 0, html: String::new() };
    let (mut chapters, mut notes, mut in_notes) = (String::new(), String::new(), false);
    for block in src.split("\n\n").map(str::trim).filter(|b| !b.is_empty()) {
        if let Some(h) = block.strip_prefix("## ") {
            let (h, rest) = h.split_once('\n').unwrap_or((h, ""));
            let (scene, rest) = match rest.strip_prefix("scene: ") {
                Some(r) => r.split_once('\n').unwrap_or((r, "")),
                None => ("0", rest),
            };
            if !chapters.is_empty() {
                chapters.push_str("</section>");
            }
            write!(chapters, r#"<section class="chapter" data-chapter="{}"><h2>{}</h2>"#, esc(scene.trim()), esc(h)).unwrap();
            if !rest.trim().is_empty() {
                write!(chapters, "<p>{}</p>", esc(rest.trim())).unwrap();
            }
        } else if block.starts_with("# Notes") {
            in_notes = true;
        } else if in_notes {
            write!(notes, "<p>{}</p>", esc(block)).unwrap();
        } else if !chapters.is_empty() {
            write!(chapters, "<p>{}</p>", esc(block)).unwrap();
        } else {
            for line in block.lines() {
                match line.split_once(": ") {
                    Some(("title", v)) => s.title = v.into(),
                    Some(("summary", v)) => s.summary = v.into(),
                    Some(("palette", v)) => s.palette = v.into(),
                    Some(("thumb", v)) => s.thumb = v.parse().unwrap_or(0),
                    _ => panic!("{slug}: unknown header line {line:?}"),
                }
            }
        }
    }
    let n = chapters.matches("class=\"chapter\"").count();
    let stage = canvas(0, &s.palette, "data-stage");
    let notes = if notes.is_empty() { notes } else { format!("<details><summary>Notes and sources</summary>{notes}</details>") };
    s.html = format!(
        r#"<h1>{}</h1><p class="lede">{}</p><div class="story"><div class="stage">{stage}<div class="controls"><span data-count>1 / {n}</span><span data-engine-status role="status"></span><button type="button" data-motion aria-pressed="true">Pause</button></div><div class="bar" data-bar></div></div><article>{chapters}</section>{notes}</article></div>"#,
        esc(&s.title),
        esc(&s.summary),
    );
    s
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

fn notes(path: &str) -> String {
    let Ok(raw) = fs::read_to_string(path) else {
        return format!("<p class=\"muted\">No notes export at {}.</p>", esc(path));
    };
    let v: serde_json::Value = serde_json::from_str(&raw).expect("notes export is not JSON");
    let mut items: Vec<_> = v["memories"].as_array().expect("notes export has no memories").iter()
        .filter_map(|m| Some((m["date"].as_str()?, m["kind"].as_str()?, sanitize(m["text"].as_str()?)?)))
        .filter(|(_, k, _)| ["note", "user", "unii"].contains(k))
        .collect();
    items.reverse();
    let (mut html, mut day) = (String::new(), "");
    for (date, kind, text) in items {
        if date != day {
            write!(html, "<h2>{}</h2>", esc(date)).unwrap();
            day = date;
        }
        let label = match kind { "user" => "asked", "unii" => "answered", _ => "note" };
        write!(html, "<p class=\"note\"><b>{label}</b>{}</p>", esc(&text)).unwrap();
    }
    html
}

fn main() {
    let notes_path = std::env::args().nth(1).unwrap_or("../site/data/uniichat/memory.json".into());
    let wasm = base64(&fs::read(WASM).expect("build the engine first: see README"));
    let mut stories: Vec<Story> = fs::read_dir("content/stories").unwrap().flatten()
        .filter(|e| e.path().extension().is_some_and(|x| x == "story"))
        .map(|e| story(&e.path().file_stem().unwrap().to_string_lossy(), &fs::read_to_string(e.path()).unwrap()))
        .collect();
    stories.sort_by(|a, b| a.slug.cmp(&b.slug));

    let door = |href: &str, scene: u32, palette: &str, name: &str, line: &str| {
        format!(r#"<a class="door" href="{href}">{}<h2>{name}</h2><p class="muted">{line}</p></a>"#, canvas(scene, palette, ""))
    };
    let cards: String = stories.iter().map(|s| format!(
        r#"<li><a href="{0}/index.html">{1}<h2>{2}</h2><p class="muted">{3}</p></a></li>"#,
        s.slug, canvas(s.thumb, &s.palette, ""), esc(&s.title), esc(&s.summary))).collect();
    let mut pages = vec![
        Page { path: "index.html".into(), title: "Yujie Teo".into(), body: format!(
            r#"<section class="hero" style="--cast:{}">{}<div class="cast">{}</div></section><p class="lede">Notes, stories and tools.</p><div class="doors">{}{}{}</div>"#,
            engine::CAST.map(|q| q.colour).join(" "),
            canvas(engine::CAST_SCENE, "", "data-cast"),
            engine::CAST.iter().enumerate().map(|(i, q)| format!(
                r#"<button type="button" data-poke="{i}" style="--c:{}">{}</button>"#, q.colour, q.mood)).collect::<String>(),
            door("notes/index.html", 3, "#ffd60a #1a1446 #ff2d87 #fffbe8", "Notes", "A working log, sanitised."),
            door("stories/index.html", 1, "#ff2d87 #2b0f54 #b6ff3b #fff3b0", "Stories", "Visual explanations, told in order."),
            door("playground/index.html", 2, "#13c4c4 #3d0b4f #ff7a1a #fdf7e6", "Playground", "Durable tools for repeated work.")) },
        Page { path: "notes/index.html".into(), title: "Notes".into(),
            body: format!(r#"<h1>Notes</h1><div class="notes">{}</div>"#, notes(&notes_path)) },
        Page { path: "stories/index.html".into(), title: "Stories".into(),
            body: format!(r#"<h1>Stories</h1><ul class="list">{cards}</ul>"#) },
        Page { path: "playground/index.html".into(), title: "Playground".into(),
            body: r#"<h1>Playground</h1><p class="lede">Tools arrive here as they are ported.</p>"#.into() },
    ];
    pages.extend(stories.into_iter().map(|s| Page { path: format!("stories/{}/index.html", s.slug), title: s.title, body: s.html }));
    for p in &pages {
        let out = Path::new("dist").join(&p.path);
        fs::create_dir_all(out.parent().unwrap()).unwrap();
        fs::write(&out, render(p, &wasm)).unwrap();
        println!("{}", out.display());
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn base64_matches_rfc4648() {
        assert_eq!(base64(b"foobar"), "Zm9vYmFy");
        assert_eq!(base64(b"fooba"), "Zm9vYmE=");
        assert_eq!(base64(b"f"), "Zg==");
    }

    #[test]
    fn sanitize_redacts_and_refuses() {
        assert_eq!(sanitize("[pi d3d2] see ~/notes/a.md and `/Users/me/x`.").unwrap(), "see [private path] and `[private path]`.");
        assert_eq!(sanitize("mail me@x.org at teoyujie.org").unwrap(), "mail [email] at [site]");
        assert!(sanitize("key ghp_abc").is_none());
    }

    #[test]
    fn story_parses_chapters_and_notes() {
        let s = story("t", "title: T\nsummary: S\npalette: #000 #111 #222 #333\nthumb: 2\n\n## One\nscene: 4\nBody.\n\n# Notes\n\nSource.");
        assert_eq!((s.title.as_str(), s.thumb), ("T", 2));
        assert!(s.html.contains(r#"data-chapter="4"><h2>One</h2><p>Body.</p>"#));
        assert!(s.html.contains("1 / 1") && s.html.contains("<details>"));
    }
}
