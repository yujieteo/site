//! The notebook engine, v2. One crate, compiled natively (for the builder and a notebook's
//! cells) and to WebAssembly (for the page). Modules:
//! scene (dot scenes), thumb (seeded thumbnails), draw (display list), theme, doc (Markdown and TeX),
//! cell (Rust cell dataflow), nb (cell runtime), vim, pdf, pack (hashes, ZIP).
macro_rules! w {
    ($($t:tt)*) => { { use std::fmt::Write as _; let _ = write!($($t)*); } };
}
pub mod cell;
pub mod doc;
pub mod draw;
pub mod nb;
pub mod pack;
pub mod pdf;
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
pub extern "C" fn alloc(n: u32) -> *mut u8 {
    IO.with_borrow_mut(|io| {
        io.0.resize(n as usize, 0);
        io.0.as_mut_ptr()
    })
}

#[unsafe(no_mangle)]
pub extern "C" fn out() -> *const u8 {
    IO.with_borrow(|io| io.1.as_ptr())
}

pub fn ret(v: Vec<u8>) -> u32 {
    IO.with_borrow_mut(|io| (v.len() as u32, io.1 = v).0)
}

fn input() -> Vec<u8> {
    IO.with_borrow(|io| io.0.clone())
}

/// One frame's display list (`scene::list`, `draw::encode`); the input holds the stage as f32s.
#[unsafe(no_mangle)]
pub extern "C" fn paint(seed: u32, scene: u32, t: f32, p: f32, px: f32, py: f32, base: u32, shade: u32, accent: u32, light: u32) -> u32 {
    let ok = |v: f32| if v.is_finite() { v } else { -1.0 };
    let stage: Vec<f32> = input().chunks_exact(4).map(|c| f32::from_le_bytes(c.try_into().unwrap())).collect();
    ret(draw::encode(&scene::list(seed, scene, ok(t).max(0.0), ok(p), ok(px), ok(py), &stage, [base, shade, accent, light])))
}

/// Markdown for the page. Op 0: the article for an edited source (input bundle: src, built,
/// then each compiled cell's `o` output and `c` controls, then `assets`, a bundle), with changed
/// cells and their dependants marked stale. Op 1: the skill comments as JSON. Op 2: the
/// source with a front-matter key set (input: src, key, value).
#[unsafe(no_mangle)]
pub extern "C" fn md(op: u32) -> u32 {
    let raw = input();
    let b = pack::unbundle(&raw);
    let text = |n: &str| b.iter().find(|x| x.0 == n).map_or("", |x| std::str::from_utf8(x.1).unwrap_or(""));
    let all = |n: &str| b.iter().filter(|x| x.0 == n).map(|x| String::from_utf8_lossy(x.1).into_owned()).collect::<Vec<_>>();
    let d = doc::parse(text("src"));
    let out = match op {
        0 => {
            let built = doc::parse(text("built"));
            let (now, was): (Vec<&str>, Vec<&str>) = (d.cells().iter().map(|c| c.0).collect(), built.cells().iter().map(|c| c.0).collect());
            let (map, stale) = cell::stale(&now, &was);
            let run = doc::Run { out: all("o"), ctl: all("c"), map, stale };
            let assets = pack::unbundle(b.iter().find(|x| x.0 == "assets").map_or(&[], |x| x.1));
            let img = |p: &str| assets.iter().find(|x| x.0 == p).map_or(p.into(), |x| pack::data_url(p, x.1));
            doc::article(&d, &run, &img)
        }
        1 => format!("[{}]", d.skills().iter().map(|s| pack::json(s)).collect::<Vec<_>>().join(",")),
        _ => doc::set_meta(text("src"), text("key"), text("value")),
    };
    ret(out.into_bytes())
}

/// A PDF form (`pdf::FORMS`). Input bundle: src, each cell's `o` output, `stage` (f32s), then
/// files by path: `fonts/<name>.otf`, and `assets`, a bundle.
#[unsafe(no_mangle)]
pub extern "C" fn pdf(form: u32) -> u32 {
    let raw = input();
    let b = files(&raw);
    let get = |n: &str| b.iter().find(|x| x.0 == n).map(|x| x.1.to_vec());
    let out: Vec<String> = b.iter().filter(|x| x.0 == "o").map(|x| String::from_utf8_lossy(x.1).into_owned()).collect();
    let stage: Vec<f32> = get("stage").unwrap_or_default().chunks_exact(4).map(|c| f32::from_le_bytes(c.try_into().unwrap())).collect();
    let d = doc::parse(std::str::from_utf8(&get("src").unwrap_or_default()).unwrap_or(""));
    ret(pdf::write(&d, &out, &stage, &get, form as usize))
}

/// The editor (`vim::Vim::step`): one key (0 only syncs) and the textarea's selection in UTF-16
/// units. Input bundle: `text`, and `reg` with the clipboard's text for a paste.
#[unsafe(no_mangle)]
pub extern "C" fn vim(key: u32, a: u32, b: u32) -> u32 {
    let raw = input();
    let b2 = pack::unbundle(&raw);
    let get = |n: &str| b2.iter().find(|x| x.0 == n).map(|x| std::str::from_utf8(x.1).unwrap_or(""));
    ret(ED.with_borrow_mut(|v| v.step(get("text").unwrap_or(""), a as usize, b as usize, get("reg"), char::from_u32(key).unwrap_or('\0'))).into_bytes())
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
