//! A notebook's cells become one crate in target/nb/<slug>: run natively for the page's first
//! outputs, compiled to WebAssembly for the page. Errors point at the Markdown, not the crate.

use engine::{cell, doc::Doc};
use std::{fs, path::Path, process::Command};

pub struct Built { pub run: serde_json::Value, pub wasm: Vec<u8> }

const MANIFEST: &str = r#"[package]
name = "nb-SLUG"
version = "0.0.0"
edition = "2024"

[lib]
name = "nb"
crate-type = ["cdylib", "rlib"]

[[bin]]
name = "main"
path = "src/main.rs"

[dependencies]
engine = { path = "../../../engine" }
DEPS
[profile.release]
opt-level = "s"
lto = true
codegen-units = 1
panic = "abort"
strip = true

[workspace]
"#;

/// The program: hoisted items, then each cell in data-flow order as a block that hands
/// its exported bindings on. Returns the source and, per line, the Markdown line it came from.
pub fn program(d: &Doc) -> Result<(String, Vec<usize>), String> {
    let cells = d.cells();
    let split: Vec<cell::Cell> = cells.iter().map(|c| cell::split(c.0)).collect();
    let (order, ex) = (cell::order(&split)?, cell::exports(&split));
    let live: Vec<Vec<(usize, usize)>> = cells.iter().map(|c| cell::nums(c.0)).collect();
    let first: Vec<usize> = live.iter().scan(0, |n, l| { let k = *n; *n += l.len(); Some(k) }).collect(); // each cell's first live number
    let (mut src, mut map) = (String::new(), vec![]);
    let mut put = |text: &str, md: usize| {
        src += &format!("{text}\n");
        map.extend((0..=text.matches('\n').count()).map(|i| if md > 0 { md + i } else { 0 }));
    };
    put("#![allow(unused, clippy::all)]\nuse engine::{data, print, println, nb::*};", 0);
    let line = |k: usize, off: usize| cells[k].1 + cells[k].0[..off].matches('\n').count();
    for (k, c) in split.iter().enumerate() { c.items.iter().for_each(|(off, it)| put(it, line(k, *off))) }
    put("pub fn program() -> Result<(), Box<dyn std::error::Error>> {", 0);
    for &k in &order {
        let names = ex[k].join(", ") + if ex[k].len() == 1 { "," } else { "" };
        put(&format!("cell({k});\nlet ({names}) = {{"), 0);
        split[k].body.iter().for_each(|(off, b)| put(&tune(cells[k].0, *off, off + b.len(), &live[k], first[k]), line(k, *off)));
        put(&format!(";\n({names})\n}};"), 0);
    }
    put("Ok(())\n}\n#[unsafe(no_mangle)]\npub extern \"C\" fn nb_run() -> u32 {\n    reply(program)\n}", 0);
    Ok((src, map))
}

/// The body text `s[a..e]` with each live number `x` (`cell::nums`) read as `num(k, x)`.
fn tune(s: &str, a: usize, e: usize, live: &[(usize, usize)], first: usize) -> String {
    let (mut out, mut at) = (String::new(), a);
    for (j, &(i, f)) in live.iter().enumerate().filter(|x| a <= x.1.0 && x.1.1 <= e) {
        out += &format!("{}engine::nb::num({}, {})", &s[at..i], first + j, &s[i..f]);
        at = f;
    }
    out + &s[at..e]
}

/// Rewrite `src/lib.rs:L:C` in compiler and panic messages to `<md>:N:C`.
fn locate(msg: &str, map: &[usize], md: &str) -> String {
    let (mut out, mut rest) = (String::new(), msg);
    while let Some((head, tail)) = rest.split_once("src/lib.rs:") {
        let n: String = tail.chars().take_while(char::is_ascii_digit).collect();
        let line = n.parse::<usize>().ok().and_then(|n| map.get(n.wrapping_sub(1))).copied().unwrap_or(0);
        out += &if line > 0 { format!("{head}{md}:{line}") } else { format!("{head}(generated):{n}") };
        rest = &tail[n.len()..];
    }
    out + rest
}

pub fn build(slug: &str, dir: &Path, d: &Doc) -> Result<Built, String> {
    let (src, map) = program(d)?;
    let root = Path::new("target/nb").join(slug);
    let deps = d.fence("toml").iter().map(|f| f.0).collect::<Vec<_>>().join("\n");
    fs::create_dir_all(root.join("src")).map_err(|e| e.to_string())?;
    let write = |p: &str, s: &str| fs::write(root.join(p), s).map_err(|e| e.to_string());
    write("Cargo.toml", &MANIFEST.replace("SLUG", slug).replace("DEPS", &deps))?;
    write("src/lib.rs", &src)?;
    write("src/main.rs", "fn main() {\n    engine::nb::native(nb::program)\n}\n")?;
    let (lock, locked) = (dir.join("Cargo.lock"), dir.join("Cargo.lock").exists());
    if locked { fs::copy(&lock, root.join("Cargo.lock")).map_err(|e| e.to_string())?; }
    let pwd = std::env::current_dir().unwrap();
    let home = std::env::var("CARGO_HOME").unwrap_or(format!("{}/.cargo", std::env::var("HOME").unwrap_or_default()));
    let remap = format!("--remap-path-prefix={}=/src --remap-path-prefix={home}=/cargo", pwd.display()); // no local paths in the wasm
    let cargo = |args: &[&str]| {
        let o = Command::new(std::env::var("CARGO").unwrap_or("cargo".into())).args(args).args(if locked { &["--locked"][..] } else { &[] })
            .current_dir(&root).env("CARGO_TARGET_DIR", pwd.join("target/nb/target")).env("NB_DATA", pwd.join("visuals")).env("RUSTFLAGS", &remap)
            .output().map_err(|e| e.to_string())?;
        if o.status.success() { return Ok(o.stdout) }
        Err(locate(&String::from_utf8_lossy(&o.stderr), &map, &dir.join("index.md").display().to_string()))
    };
    let out = cargo(&["run", "--release", "-q", "--bin", "main"])?;
    cargo(&["build", "--release", "-q", "--lib", "--target", "wasm32-unknown-unknown"])?;
    if !locked && !deps.is_empty() {
        fs::copy(root.join("Cargo.lock"), &lock).map_err(|e| e.to_string())?;
        eprintln!("wrote {} (commit it)", lock.display());
    }
    let run = serde_json::from_slice(&out).map_err(|e| format!("{slug}: bad run output: {e}"))?;
    let wasm = fs::read(pwd.join("target/nb/target/wasm32-unknown-unknown/release/nb.wasm")).map_err(|e| e.to_string())?;
    Ok(Built { run, wasm })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn program_orders_cells_and_maps_lines() {
        let d = engine::doc::parse("```rust\nlet y = x + 1.0;\n```\n\n```rust\nfn f() -> f64 { 2.0 }\nlet x = f();\n```");
        let (src, map) = program(&d).unwrap();
        let (a, b) = (src.find("cell(1);").unwrap(), src.find("cell(0);").unwrap());
        assert!(a < b && src.contains("let (x,) = {") && src.contains("fn f() -> f64 { 2.0 }"));
        let n = src.lines().position(|l| l.contains("let y")).unwrap();
        assert_eq!(map[n], 2);
        assert_eq!(locate(&format!("--> src/lib.rs:{}:9", n + 1), &map, "a.md"), "--> a.md:2:9");
    }
}
