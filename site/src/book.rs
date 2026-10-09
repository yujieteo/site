//! A notebook (content/stories/<slug>/index.md) becomes four views — notebook, slides,
//! handout, article — that share one body, and its exports, all under one manifest.

use crate::{HOST, Page, cells, vars};
use engine::{doc::{self, esc}, pack, pdf, say, theme};
use std::{fmt::Write, fs, path::Path};

const TOOLCHAIN: &str = include_str!("../../rust-toolchain.toml");
/// Embedded fonts: CSS family, file under fonts/. Text pages use the first two.
pub const FONTS: [(&str, &str); 3] = [("Fira Sans", "sans"), ("Fira Mono", "mono"), ("Fira Math", "math")];
/// Views: page, name, what it is. The Render dialog switches between them in place.
const VIEWS: [(&str, &str, &str); 4] = [
    ("index", "Notebook", "Code, controls, outputs and live scenes"),
    ("slides", "Slides", "One chapter per slide"),
    ("handout", "Handout", "Each slide with its narration beside it"),
    ("article", "Article", "Continuous prose, numbered sections"),
];
const MEDIA: [(&str, &str, &str); 3] = [("video", "Video", "The slides, narrated"), ("podcast", "Podcast", "The narration as WAV"), ("captions", "Captions", "WebVTT subtitles")];

pub fn font(file: &str) -> Vec<u8> {
    fs::read(format!("fonts/{file}.otf")).expect("fonts/ is part of the source")
}

/// Text for an inline <script>: the host reverses this.
fn raw(s: &str) -> String {
    s.replace("</", "<\\/")
}

pub struct Story {
    pub slug: String,
    pub title: String,
    pub summary: String,
    pub palette: String,
    pub thumb: Option<u32>,
    pub chapters: Vec<String>,
}

/// The narration pins (kokoro.lock): sha256 and path under kokoro/.
pub fn pins() -> impl Iterator<Item = (&'static str, &'static str)> {
    include_str!("../../kokoro.lock").lines().filter(|l| !l.starts_with('#')).filter_map(|l| l.split_once(' ').map(|(h, r)| (h, r.split(' ').next().unwrap())))
}

/// The narration's pronunciations, written beside the notebook as say.lock when the pinned Misaki
/// lexicons are in kokoro/ (scripts/kokoro.sh): US gold, then silver, then the regular -s, -ed and
/// -ing endings. Words left empty are spoken by kokoro-js's own G2P. Without the lexicons, the
/// committed say.lock stands.
fn say_lock(slug: &str, dir: &Path, d: &doc::Doc) {
    let words = say::words(d);
    let lex = |f: &str| fs::read(format!("kokoro/misaki/us_{f}.json")).ok()
        .filter(|b| pins().any(|p| p == (pack::sha256(b).as_str(), format!("misaki/us_{f}.json").as_str())))
        .and_then(|b| serde_json::from_slice::<serde_json::Value>(&b).ok());
    let (false, Some(gold), Some(silver)) = (words.is_empty(), lex("gold"), lex("silver")) else { return };
    let find = |w: &str| [&gold, &silver].iter().find_map(|l| l[w].as_str().or(l[w]["DEFAULT"].as_str())).map(String::from);
    let tail = |p: &str, a: &str, b: &str, s: [&'static str; 3]| match p.chars().rev().find(|c| !"ˈˌ".contains(*c)) {
        Some(c) if a.contains(c) => s[0], Some(c) if b.contains(c) => s[1], _ => s[2] };
    let look = |w: &str| {
        let l = w.replace('’', "'").to_lowercase();
        match l.as_str() { "a" => return Some("ə".into()), "the" => return Some("ðə".into()), _ => {} }
        d.get("pronounce").split(',').find_map(|p| Some(p.trim().strip_prefix(w)?.strip_prefix(' ')?.trim().into())).or_else(|| find(w)).or_else(|| find(&l)).or_else(|| ["s", "es", "ies", "d", "ed", "ied", "ing", "ing"].iter().zip(["", "", "y", "", "", "y", "", "e"]).find_map(|(suf, back)| {
            let base = l.strip_suffix(suf)?;
            let undouble = base.is_ascii() && base.len() > 2 && base.as_bytes()[base.len() - 1] == base.as_bytes()[base.len() - 2];
            let p = find(&format!("{base}{back}")).or_else(|| undouble.then(|| find(&base[..base.len() - 1])).flatten())?;
            Some(p.clone() + match *suf {
                "ing" => "ɪŋ",
                _ if suf.ends_with('s') => tail(&p, "szʃʒʧʤ", "ptkfθ", ["ᵻz", "s", "z"]),
                _ => tail(&p, "td", "pkfθʃsʧ", ["ᵻd", "t", "d"]),
            })
        }))
    };
    let (mut lock, mut missing) = (String::from("# Kokoro phonemes for this notebook's narration, written by the build from Misaki 0.9.4\n# (kokoro.lock). Override a word with `pronounce: word phonemes` in the front matter.\n"), vec![]);
    for w in &words {
        writeln!(lock, "{w}\t{}", look(w).unwrap_or_else(|| (missing.push(w.as_str()), String::new()).1)).unwrap();
    }
    if !missing.is_empty() { eprintln!("{slug}: no pronunciation for {} (spoken by kokoro-js G2P)", missing.join(" ")) }
    if fs::read_to_string(dir.join("say.lock")).ok() != Some(lock.clone()) { fs::write(dir.join("say.lock"), lock).unwrap() }
}

/// A notebook: its pages and its exports under dist/stories/<slug>/.
pub fn notebook(slug: &str, engine_wasm: &[u8]) -> (Story, Vec<Page>, Vec<(String, Vec<u8>)>) {
    let dir = Path::new("content/stories").join(slug);
    let src = fs::read_to_string(dir.join("index.md")).unwrap();
    let d = doc::parse(&src);
    say_lock(slug, &dir, &d);
    let mut files: Vec<(String, Vec<u8>)> = fs::read_dir(&dir).unwrap().flatten()
        .map(|e| (e.file_name().to_string_lossy().into_owned(), fs::read(e.path()).unwrap()))
        .filter(|f| f.0 != "index.md").collect();
    files.sort();
    let has_cells = !d.cells().is_empty();
    let (run, wasm) = if has_cells {
        let b = cells::build(slug, &dir, &d).unwrap_or_else(|e| panic!("{slug}: {e}"));
        (b.run, b.wasm)
    } else {
        (serde_json::json!({"out": [], "ctl": [], "stage": [], "err": null}), engine_wasm.to_vec())
    };
    let strs = |k: &str| run[k].as_array().unwrap().iter().map(|v| v.as_str().unwrap().to_string()).collect::<Vec<_>>();
    let n = d.cells().len();
    let r = doc::Run { out: strs("out"), ctl: strs("ctl"), map: (0..n).map(Some).collect(), stale: vec![false; n] };
    let img = |p: &str| files.iter().find(|f| f.0 == p).map_or(p.into(), |f| pack::data_url(&f.0, &f.1));
    let article = doc::article(&d, &r, &img);

    // The source export and the manifest that every HTML form carries.
    let source: Vec<(&str, &[u8])> = std::iter::once(("index.md", src.as_bytes())).chain(files.iter().map(|f| (f.0.as_str(), f.1.as_slice()))).collect();
    let theme_id = match d.get("theme") { "" => "site", t => t };
    let export_theme = theme::export(theme_id, d.get("print"));
    let crates: Vec<String> = files.iter().filter(|f| f.0 == "Cargo.lock").flat_map(|f| String::from_utf8_lossy(&f.1).split("[[package]]").skip(1).map(|p| {
        let get = |k: &str| p.lines().find_map(|l| l.strip_prefix(&format!("{k} = \""))).unwrap_or("\"").trim_end_matches('"').to_string();
        format!("{{\"name\":{},\"version\":{},\"checksum\":{}}}", pack::json(&get("name")), pack::json(&get("version")), pack::json(&get("checksum")))
    }).collect::<Vec<_>>()).collect();
    let hashes = |v: &[(&str, &[u8])]| v.iter().map(|(n, b)| format!("{}:{}", pack::json(n), pack::json(&pack::sha256(b)))).collect::<Vec<_>>().join(",");
    let fonts: Vec<String> = FONTS.iter().map(|(fam, f)| { let b = font(f); format!("{{\"family\":{},\"file\":\"{f}.otf\",\"bytes\":{},\"sha256\":\"{}\"}}", pack::json(fam), b.len(), pack::sha256(&b)) }).collect();
    let narrated = !say::sentences(&d).is_empty();
    let voice = if !narrated { String::new() } else {
        let files: Vec<String> = pins().map(|(h, p)| format!("{}:\"{h}\"", pack::json(p))).collect();
        format!(",\"voice\":{{\"name\":{},\"model\":\"Kokoro-82M v1.0 q8\",\"files\":{{{}}}}}", pack::json(say::voice(&d)), files.join(","))
    };
    let rustc = TOOLCHAIN.lines().find_map(|l| l.strip_prefix("channel = ")).unwrap_or("").trim_matches('"');
    let src_manifest = format!(
        "{{\"engine\":\"{}\",\"notebook\":\"{slug}\",\"rustc\":\"{rustc}\",\"source\":{{{}}},\"crates\":[{}],\"theme\":{{\"id\":{},\"export\":{},\"palette_version\":{},\"overrides\":{}}},\"font\":{{\"files\":[{}]}},\"seed\":{}{voice}}}",
        engine::VERSION, hashes(&source), crates.join(","), pack::json(theme_id), pack::json(export_theme), theme::VERSION, pack::json(d.get("colors")), fonts.join(","), pack::json(d.get("seed")));
    let zip = pack::zip(&[source.clone(), vec![("manifest.json", src_manifest.as_bytes())]].concat());
    let stage: Vec<f32> = run["stage"].as_array().unwrap().iter().map(|v| v.as_f64().map_or(f32::NAN, |x| x as f32)).collect();
    let get = |n: &str| if n.starts_with("fonts/") { fs::read(n).ok() } else { files.iter().find(|f| f.0 == n).map(|f| f.1.clone()) };
    let pdfs = pdf::FORMS.iter().enumerate().map(|(i, f)| (format!("{f}.pdf"), pdf::write(&d, &strs("out"), &stage, &get, i)));
    let exports: Vec<(String, Vec<u8>)> = std::iter::once(("source.zip".into(), zip)).chain(pdfs).collect();
    let outs: Vec<(&str, &[u8])> = exports.iter().map(|e| (e.0.as_str(), e.1.as_slice())).collect();
    let manifest = format!("{{\"source\":{src_manifest},\"outputs\":{{{}}}}}", hashes(&outs));

    // One body for every view; the view is an attribute on <html>. Choices live in dialogs.
    let button = |act: &str, arg: &str, name: &str, attrs: &str| format!(r#"<button data-act="{act}" data-arg="{arg}"{attrs}>{name}</button>"#);
    let dialog = |id: &str, title: &str, body: String| format!(r#"<dialog id="{id}" aria-label="{title}"><form method="dialog"><h2>{title}</h2>{body}<button class="x" aria-label="Close">×</button></form></dialog>"#);
    let group = |name: &str, items: String| format!(r#"<h3>{name}</h3><div class="choices">{items}</div>"#);
    let render: String = VIEWS.iter().map(|(f, name, line)| button("view", f, &format!("{name}<small>{line}</small>"), "")).collect();
    let pdfs: String = VIEWS.iter().enumerate().map(|(i, v)| button("pdf", &i.to_string(), v.1, "")).collect();
    let media: String = MEDIA.iter().map(|(a, name, line)| button(a, "", &format!("{name}<small>{line}</small>"), "")).collect();
    let source: String = [("zip", "Source ZIP"), ("save", "HTML"), ("manifest", "Manifest")].iter().map(|(a, name)| button(a, "", name, "")).collect();
    let tools = format!(
        r#"<nav class="tools" aria-label="Notebook">{}<button type="button" data-act="edit">Edit</button><button type="button" data-act="open" data-arg="render">Render</button><button type="button" data-act="open" data-arg="export">Export</button><span class="sp" data-engine-status role="status"></span><button type="button" data-motion aria-pressed="true">Pause</button></nav>{}{}"#,
        if has_cells { r#"<button type="button" data-act="run">Run</button>"# } else { "" },
        dialog("render", "Render", format!(r#"<div class="choices">{render}</div>"#)),
        dialog("export", "Export", group("PDF", pdfs) + &if narrated { group("Narration", media) } else { String::new() } + &group("Source", source)));
    let assets = pack::base64(&pack::bundle(&files.iter().map(|f| (f.0.as_str(), f.1.as_slice())).collect::<Vec<_>>()));
    let script = format!(
        "<script id=\"source\" type=\"text/markdown\">{0}</script><script id=\"built\" type=\"text/markdown\">{0}</script><script id=\"run\" type=\"application/json\">{1}</script><script id=\"manifest\" type=\"application/json\">{manifest}</script><script id=\"assets\" type=\"application/octet-stream\">{assets}</script><script id=\"wasm\" type=\"application/octet-stream\">{2}</script>\n<script>{HOST}</script>",
        raw(&src), raw(&run.to_string()), pack::base64(&wasm));
    let fam = theme::find(theme_id).map_or(theme_id, |f| f.0);
    let mut attrs = format!(" data-seed=\"{}\" data-theme=\"{}\"", d.get("seed").parse::<u32>().unwrap_or(1), esc(fam));
    let custom: String = theme::overrides(d.get("colors")).iter().map(|(i, c)| format!("--{}:#{c:06x};", theme::TOKENS[*i])).collect();
    if !custom.is_empty() {
        write!(attrs, " style=\"{custom}\"").unwrap();
    }
    let s = Story { slug: slug.into(), title: d.get("title").into(), summary: d.get("summary").into(), palette: d.get("palette").into(), thumb: d.get("thumb").parse().ok(), chapters: d.chapters().into_iter().map(|c| c.title).collect() };
    let body = format!(r#"<h1>{}</h1><p class="lede">{}</p>{tools}<article data-article style="{}">{article}</article>"#, esc(&s.title), esc(&s.summary), esc(&vars(&s.palette)));
    let pages = VIEWS.iter().map(|(f, ..)| {
        Page { path: format!("stories/{slug}/{f}.html"), title: s.title.clone(), body: body.clone(), attrs: format!("{attrs} data-view=\"{f}\""), fonts: 3, script: script.clone() }
    }).collect();
    let mut out = exports;
    out.push(("manifest.json".into(), manifest.into_bytes()));
    (s, pages, out)
}

