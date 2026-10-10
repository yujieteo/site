//! The notebook engine, v2. One crate, compiled natively (for the builder and a notebook's
//! cells) and to WebAssembly (for the page). Modules:
//! scene (dot scenes), thumb (seeded thumbnails), draw (display list), theme, doc (Markdown and TeX),
//! cell (Rust cell dataflow), nb (cell runtime), vim, pdf, pack (hashes, ZIP), say (narration).
macro_rules! w {
    ($($t:tt)*) => { { use std::fmt::Write as _; let _ = write!($($t)*); } };
}
pub mod cell;
pub mod doc;
pub mod draw;
pub mod nb;
pub mod pack;
pub mod pdf;
pub mod say;
pub mod scene;
pub mod theme;
pub mod thumb;
pub mod vim;

pub const VERSION: &str = env!("CARGO_PKG_VERSION");

use std::cell::RefCell;

thread_local! {
    static IO: RefCell<(Vec<u8>, Vec<u8>)> = RefCell::default();
    static ED: RefCell<vim::Vim> = RefCell::default();
}

/// The WebAssembly boundary. The host writes a call's input to `alloc(n)`, calls, and reads
/// the result (length returned) at `out()`. Pointers live until the next call.
#[unsafe(no_mangle)]
pub extern "C" fn alloc(n: u32) -> *mut u8 { IO.with_borrow_mut(|io| { io.0.resize(n as usize, 0); io.0.as_mut_ptr() }) }

#[unsafe(no_mangle)]
pub extern "C" fn out() -> *const u8 { IO.with_borrow(|io| io.1.as_ptr()) }

pub fn ret(v: Vec<u8>) -> u32 { let n = v.len() as u32; IO.with_borrow_mut(|io| io.1 = v); n }

fn input() -> Vec<u8> { IO.with_borrow(|io| io.0.clone()) }

fn f32s(b: &[u8]) -> Vec<f32> { b.chunks_exact(4).map(|c| f32::from_le_bytes(c.try_into().unwrap())).collect() }

fn utf8(b: &[u8]) -> &str { std::str::from_utf8(b).unwrap_or("") }

/// A call's input: a bundle (`pack::bundle`) of named parts, looked up by name.
struct Parts<'a>(Vec<(&'a str, &'a [u8])>);

impl<'a> Parts<'a> {
    fn get(&self, n: &str) -> Option<&'a [u8]> { self.0.iter().find(|x| x.0 == n).map(|x| x.1) }
    fn text(&self, n: &str) -> &'a str { self.get(n).map_or("", utf8) }
    fn all(&self, n: &str) -> Vec<String> {
        self.0.iter().filter(|x| x.0 == n).map(|x| String::from_utf8_lossy(x.1).into_owned()).collect()
    }
}

/// One frame's display list (`scene::list`, `draw::encode`); the input holds the stage as f32s.
#[unsafe(no_mangle)]
pub extern "C" fn paint(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, base: u32, shade: u32, accent: u32, light: u32) -> u32 {
    let ok = |v: f32| if v.is_finite() { v } else { -1.0 };
    let ops = scene::list(seed, scene, ok(t).max(0.0), ok(p), ok(px), ok(py), &f32s(&input()), [base, shade, accent, light]);
    ret(draw::encode(&ops))
}

/// Markdown for the page. Op 0: the article for an edited source (input bundle: src, built,
/// then each compiled cell's `o` output and `c` controls, then `assets`, a bundle), with changed
/// cells and their dependants marked stale. Op 1: the skill comments as JSON. Op 2: the
/// narration plan (`say::plan`; input: src, assets). Ops 3, 4, 5: the podcast WAV, captions and
/// line times from the synthesised audio (input: src, assets, then each line's `a`, f32 samples).
/// Op 6: the live numbers an edit changed (`cell::retune`; input: src, built) as `[[k, value]…]`.
#[unsafe(no_mangle)]
pub extern "C" fn md(op: u32) -> u32 {
    let raw = input();
    let b = Parts(pack::unbundle(&raw));
    let assets = Parts(pack::unbundle(b.get("assets").unwrap_or(&[])));
    let (d, built, lock) = (doc::parse(b.text("src")), doc::parse(b.text("built")), assets.text("say.lock"));
    let audio: Vec<Vec<f32>> = b.0.iter().filter(|x| x.0 == "a").map(|x| f32s(x.1)).collect();
    let now: Vec<&str> = d.cells().iter().map(|c| c.0).collect();
    let was: Vec<&str> = built.cells().iter().map(|c| c.0).collect();
    let out = match op {
        0 => {
            let (map, stale) = cell::stale(&cell::retune(&now, &was).0, &was);
            let run = doc::Run { out: b.all("o"), ctl: b.all("c"), map, stale };
            let img = |p: &str| assets.get(p).map_or(p.into(), |x| pack::data_url(p, x));
            doc::article(&d, &run, &img)
        }
        1 => format!("[{}]", d.skills().iter().map(|s| pack::json(s)).collect::<Vec<_>>().join(",")),
        2 => say::plan(&d, lock),
        3 => return ret(say::wav(&d, lock, &audio)),
        4 => say::vtt(&d, lock, &audio),
        5 => return ret(say::times(&d, lock, &audio)),
        _ => {
            let set: Vec<String> = cell::retune(&now, &was).1.iter().map(|(k, v)| format!("[{k},{v}]")).collect();
            format!("[{}]", set.join(","))
        }
    };
    ret(out.into_bytes())
}

/// A PDF form (`pdf::FORMS`). Input bundle: src, each cell's `o` output, `stage` (f32s), then
/// files by path: `fonts/<name>.otf`, and `assets`, a bundle (its files are looked up by path too).
#[unsafe(no_mangle)]
pub extern "C" fn pdf(form: u32) -> u32 {
    let raw = input();
    let b = Parts(files(&raw));
    let get = |n: &str| b.get(n).map(<[u8]>::to_vec);
    let d = doc::parse(b.text("src"));
    ret(pdf::write(&d, &b.all("o"), &f32s(b.get("stage").unwrap_or(&[])), &get, form as usize))
}

/// The editor (`vim::Vim::step`): one key (0 only syncs) and the textarea's selection in UTF-16
/// units. Input bundle: `text`, and `reg` with the clipboard's text for a paste.
#[unsafe(no_mangle)]
pub extern "C" fn vim(key: u32, a: u32, b: u32) -> u32 {
    let raw = input();
    let p = Parts(pack::unbundle(&raw));
    let key = char::from_u32(key).unwrap_or('\0');
    ret(ED.with_borrow_mut(|v| v.step(p.text("text"), a as usize, b as usize, p.get("reg").map(utf8), key)).into_bytes())
}

/// A stored ZIP of the input bundle, in its order; an `assets` entry is itself a bundle.
#[unsafe(no_mangle)]
pub extern "C" fn zip() -> u32 {
    ret(pack::zip(&files(&input())))
}

/// A bundle's entries, with a nested `assets` bundle expanded in place.
fn files(raw: &[u8]) -> Vec<(&str, &[u8])> {
    pack::unbundle(raw).into_iter().flat_map(|f| if f.0 == "assets" { pack::unbundle(f.1) } else { vec![f] }).collect()
}
