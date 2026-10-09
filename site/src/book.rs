//! A notebook (content/stories/<slug>/index.md) becomes four views — notebook, slides,
//! handout, article — that share one body, and its exports, all under one manifest.

use crate::{HOST, Page, cells, vars};
use engine::{doc::{self, esc}, pack, pdf, theme};
use std::{fmt::Write, fs, path::Path};

const TOOLCHAIN: &str = include_str!("../../rust-toolchain.toml");
/// Embedded fonts: CSS family, file under fonts/. Text pages use the first three.
pub const FONTS: [(&str, &str); 5] = [("Fira Sans", "sans"), ("Libertinus Serif", "book"), ("Fira Mono", "mono"), ("Latin Modern Roman", "tex"), ("Fira Math", "math")];
const VIEWS: [(&str, &str); 4] = [("index", "Notebook"), ("slides", "Slides"), ("handout", "Handout"), ("article", "Article")];

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
    pub thumb: u32,
}

/// A notebook: its pages and its exports under dist/stories/<slug>/.
pub fn notebook(slug: &str, engine_wasm: &[u8]) -> (Story, Vec<Page>, Vec<(String, Vec<u8>)>) {
    let dir = Path::new("content/stories").join(slug);
    let src = fs::read_to_string(dir.join("index.md")).unwrap();
    let d = doc::parse(&src);
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
    let preset = match d.get("font") { "" => "sans", f => f };
    let crates: Vec<String> = files.iter().filter(|f| f.0 == "Cargo.lock").flat_map(|f| String::from_utf8_lossy(&f.1).split("[[package]]").skip(1).map(|p| {
        let get = |k: &str| p.lines().find_map(|l| l.strip_prefix(&format!("{k} = \""))).unwrap_or("\"").trim_end_matches('"').to_string();
        format!("{{\"name\":{},\"version\":{},\"checksum\":{}}}", pack::json(&get("name")), pack::json(&get("version")), pack::json(&get("checksum")))
    }).collect::<Vec<_>>()).collect();
    let hashes = |v: &[(&str, &[u8])]| v.iter().map(|(n, b)| format!("{}:{}", pack::json(n), pack::json(&pack::sha256(b)))).collect::<Vec<_>>().join(",");
    let fonts: Vec<String> = FONTS.iter().map(|(fam, f)| { let b = font(f); format!("{{\"family\":{},\"file\":\"{f}.otf\",\"bytes\":{},\"sha256\":\"{}\"}}", pack::json(fam), b.len(), pack::sha256(&b)) }).collect();
    let rustc = TOOLCHAIN.lines().find_map(|l| l.strip_prefix("channel = ")).unwrap_or("").trim_matches('"');
    let src_manifest = format!(
        "{{\"engine\":\"{}\",\"notebook\":\"{slug}\",\"rustc\":\"{rustc}\",\"source\":{{{}}},\"crates\":[{}],\"theme\":{{\"id\":{},\"export\":{},\"palette_version\":{},\"overrides\":{}}},\"font\":{{\"preset\":{},\"files\":[{}]}},\"seed\":{}}}",
        engine::VERSION, hashes(&source), crates.join(","), pack::json(theme_id), pack::json(export_theme), theme::VERSION, pack::json(d.get("colors")), pack::json(preset), fonts.join(","), pack::json(d.get("seed")));
    let zip = pack::zip(&[source.clone(), vec![("manifest.json", src_manifest.as_bytes())]].concat());
    let stage: Vec<f32> = run["stage"].as_array().unwrap().iter().map(|v| v.as_f64().map_or(f32::NAN, |x| x as f32)).collect();
    let get = |n: &str| if n.starts_with("fonts/") { fs::read(n).ok() } else { files.iter().find(|f| f.0 == n).map(|f| f.1.clone()) };
    let pdfs = pdf::FORMS.iter().enumerate().map(|(i, f)| (format!("{f}.pdf"), pdf::write(&d, &strs("out"), &stage, &get, i)));
    let exports: Vec<(String, Vec<u8>)> = std::iter::once(("source.zip".into(), zip)).chain(pdfs).collect();
    let outs: Vec<(&str, &[u8])> = exports.iter().map(|e| (e.0.as_str(), e.1.as_slice())).collect();
    let manifest = format!("{{\"source\":{src_manifest},\"outputs\":{{{}}}}}", hashes(&outs));

    // One body for every view; the view is an attribute on <html>.
    let first = d.chapters().first().map_or(0, |c| c.scene);
    let count = d.chapters().len().max(1);
    let opts: String = theme::THEMES.iter().map(|t| format!("<option value=\"{0}\" data-light=\"{1}\" data-dark=\"{2}\"{3}>{0}</option>", t.0, t.1, t.2, if theme::find(theme_id).map_or(theme_id, |f| f.0) == t.0 { " selected" } else { "" })).collect();
    let links: String = VIEWS.iter().enumerate().map(|(i, v)| format!(r#"<button type="button" data-act="pdf" data-arg="{i}" data-name="{}.pdf">{} PDF</button>"#, pdf::FORMS[i], v.1)).collect();
    let tools = |view: &str| {
        let views: String = VIEWS.iter().map(|(f, name)| format!("<a href=\"{f}.html\"{}>{name}</a>", if *f == view { " aria-current=\"page\"" } else { "" })).collect();
        format!(r#"<nav class="tools" aria-label="Notebook">{views}<span class="sp"></span>{}<button type="button" data-act="edit">Edit</button><button type="button" data-act="scheme" title="Light or dark">Light</button><button type="button" data-act="font" title="Font">Sans</button><select data-act="theme" aria-label="Theme">{opts}</select><details class="export"><summary>Export</summary><div>{links}<button type="button" data-act="zip">Source ZIP</button><button type="button" data-act="save">Save HTML</button><button type="button" data-act="manifest">Manifest</button></div></details></nav>"#,
            if has_cells { r#"<button type="button" data-act="run">Run</button>"# } else { "" })
    };
    let assets = pack::base64(&pack::bundle(&files.iter().map(|f| (f.0.as_str(), f.1.as_slice())).collect::<Vec<_>>()));
    let script = format!(
        "<script id=\"source\" type=\"text/markdown\">{0}</script><script id=\"built\" type=\"text/markdown\">{0}</script><script id=\"run\" type=\"application/json\">{1}</script><script id=\"manifest\" type=\"application/json\">{manifest}</script><script id=\"assets\" type=\"application/octet-stream\">{assets}</script><script id=\"wasm\" type=\"application/octet-stream\">{2}</script>\n<script>{HOST}</script>",
        raw(&src), raw(&run.to_string()), pack::base64(&wasm));
    let mut attrs = format!(" data-font=\"{}\" data-seed=\"{}\"", esc(preset), d.get("seed").parse::<u32>().unwrap_or(1));
    if let Some((fam, dark)) = theme::find(theme_id) {
        write!(attrs, " data-theme=\"{fam}\" data-scheme=\"{}\"", if dark { "dark" } else { "light" }).unwrap();
    } else if theme_id != "site" {
        write!(attrs, " data-theme=\"{}\"", esc(theme_id)).unwrap();
    }
    let custom: String = theme::overrides(d.get("colors")).iter().map(|(i, c)| format!("--{}:#{c:06x};", theme::TOKENS[*i])).collect();
    if !custom.is_empty() {
        write!(attrs, " style=\"{custom}\"").unwrap();
    }
    let s = Story { slug: slug.into(), title: d.get("title").into(), summary: d.get("summary").into(), palette: d.get("palette").into(), thumb: d.get("thumb").parse().unwrap_or(first) };
    let pages = VIEWS.iter().map(|(f, _)| {
        let body = format!(
            r#"<h1>{}</h1><p class="lede">{}</p>{}<div class="story" style="{}"><div class="stage"><canvas class="frame" data-stage data-scene="{first}" aria-hidden="true"></canvas><div class="controls"><span data-count>1 / {count}</span><span data-engine-status role="status"></span><button type="button" data-motion aria-pressed="true">Pause</button></div><div class="bar" data-bar></div></div><article data-article>{article}</article></div>"#,
            esc(&s.title), esc(&s.summary), tools(f), esc(&vars(&s.palette)));
        Page { path: format!("stories/{slug}/{f}.html"), title: s.title.clone(), body, attrs: format!("{attrs} data-view=\"{f}\""), fonts: 5, script: script.clone() }
    }).collect();
    let mut out = exports;
    out.push(("manifest.json".into(), manifest.into_bytes()));
    (s, pages, out)
}

