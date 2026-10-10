//! The cell runtime. A notebook compiles to one program that the builder runs natively and
//! the page runs as WebAssembly: same code, same numbers. Cells write text, HTML and plots,
//! declare controls (whose values the host supplies) and set the stage of data scenes.

use crate::{doc::esc, pack::json};
use std::cell::RefCell;
use std::sync::atomic::{AtomicUsize, Ordering::Relaxed};

/// The run's state: the current cell, outputs and controls per cell, pending text, the next
/// control's key, and the stage.
#[derive(Default)]
struct Book { cell: usize, out: Vec<String>, ctl: Vec<String>, pre: String, n: usize, stage: Vec<f64> }

thread_local! {
    static BOOK: RefCell<Book> = RefCell::default();
    static INPUT: RefCell<Vec<f64>> = const { RefCell::new(vec![]) };
    static NUMS: RefCell<Vec<f64>> = const { RefCell::new(vec![]) };
    static PANIC: RefCell<String> = const { RefCell::new(String::new()) };
}
static CELL: AtomicUsize = AtomicUsize::new(0);

fn with<R>(f: impl FnOnce(&mut Book) -> R) -> R { BOOK.with_borrow_mut(f) }

fn flush(b: &mut Book) {
    if !b.pre.is_empty() { w!(b.out[b.cell], "<pre class=\"txt\">{}</pre>", esc(std::mem::take(&mut b.pre).trim_end_matches('\n'))) }
}

/// Start cell `i` (page order); the generated program calls this.
pub fn cell(i: usize) {
    CELL.store(i, Relaxed);
    with(|b| {
        flush(b);
        b.cell = i;
        b.out.resize(b.out.len().max(i + 1), String::new());
        b.ctl.resize(b.out.len(), String::new());
    })
}

pub fn text(s: &str) { with(|b| b.pre += s) }

pub fn html(h: &str) { with(|b| { flush(b); b.out[b.cell] += h }) }

#[macro_export]
macro_rules! println {
    () => { $crate::nb::text("\n") };
    ($($t:tt)*) => { $crate::nb::text(&format!("{}\n", format_args!($($t)*))) };
}

#[macro_export]
macro_rules! print { ($($t:tt)*) => { $crate::nb::text(&format!($($t)*)) } }

/// The host's value for the next control, whose key is `b.n` before the call.
fn input(b: &mut Book) -> Option<f64> { b.n += 1; INPUT.with_borrow(|v| v.get(b.n - 1).copied()).filter(|v| v.is_finite()) }

/// A slider. Its value is the host's, clamped, or `value` on a clean run.
pub fn slider(label: &str, min: f64, max: f64, step: f64, value: f64) -> f64 {
    with(|b| {
        let (k, v) = (b.n, input(b).map_or(value, |v| v.clamp(min, max)));
        let range = format!("<input type=\"range\" data-k=\"{k}\" min=\"{min}\" max=\"{max}\" step=\"{step}\" value=\"{v}\">");
        w!(b.ctl[b.cell], "<label>{} {range}<output>{v}</output></label>", esc(label));
        v
    })
}

/// A choice among options; returns the chosen index.
pub fn choice(label: &str, opts: &[&str], default: usize) -> usize {
    with(|b| {
        let (k, v) = (b.n, input(b).map_or(default, |v| v as usize).min(opts.len().saturating_sub(1)));
        let sel = |i: usize| if i == v { " selected" } else { "" };
        let o: String = opts.iter().enumerate().map(|(i, o)| format!("<option value=\"{i}\"{}>{}</option>", sel(i), esc(o))).collect();
        w!(b.ctl[b.cell], "<label>{} <select data-k=\"{k}\">{o}</select></label>", esc(label));
        v
    })
}

/// A live number: the builder writes each float literal of a cell's body as `num(k, literal)`,
/// so the page can change it without a rebuild (`nb_num`, `cell::retune`).
pub fn num<F: Float>(k: usize, v: F) -> F { NUMS.with_borrow(|n| n.get(k).copied()).filter(|x| x.is_finite()).map_or(v, F::of) }

pub trait Float: Copy { fn of(x: f64) -> Self; }
impl Float for f64 { fn of(x: f64) -> f64 { x } }
impl Float for f32 { fn of(x: f64) -> f32 { x as f32 } }

/// The numbers a data scene draws (see `scene`).
pub fn stage(v: &[f64]) { with(|b| b.stage = v.to_vec()) }

/// A line or dot plot as SVG, styled by the page's theme.
#[derive(Default)]
pub struct Plot { series: Vec<(Vec<f64>, Vec<f64>, bool)>, rules: Vec<f64>, y: Option<(f64, f64)>, labels: (String, String) }

fn ticks(a: f64, b: f64) -> (Vec<f64>, usize) {
    let raw = (b - a).abs().max(1e-12) / 5.0;
    let p = 10f64.powf(raw.log10().floor());
    let step = [1.0, 2.0, 5.0, 10.0].iter().map(|m| m * p).find(|s| *s >= raw).unwrap_or(10.0 * p);
    let s = (a / step).ceil();
    let v = (0..12).map(|k| (s + k as f64) * step).take_while(|v| v.is_finite() && *v <= b + step * 1e-9).collect();
    (v, (-step.log10().floor()).max(0.0) as usize)
}

impl Plot {
    pub fn new() -> Self { Self::default() }
    pub fn line(mut self, x: &[f64], y: &[f64]) -> Self { self.series.push((x.into(), y.into(), false)); self }
    pub fn dots(mut self, x: &[f64], y: &[f64]) -> Self { self.series.push((x.into(), y.into(), true)); self }
    pub fn rule(mut self, y: f64) -> Self { self.rules.push(y); self }
    pub fn ylim(mut self, a: f64, b: f64) -> Self { self.y = Some((a, b)); self }
    pub fn labels(mut self, x: &str, y: &str) -> Self { self.labels = (x.into(), y.into()); self }
    pub fn show(self) { html(&self.svg()) }
    pub fn svg(&self) -> String {
        let pts = || self.series.iter().flat_map(|s| s.0.iter().zip(&s.1)).filter(|p| p.0.is_finite() && p.1.is_finite());
        let range = |f: &dyn Fn((&f64, &f64)) -> f64| pts().map(f).fold((f64::MAX, f64::MIN), |r, v| (r.0.min(v), r.1.max(v)));
        let ((x0, x1), (y0, y1)) = (range(&|p| *p.0), self.y.unwrap_or_else(|| range(&|p| *p.1)));
        let (x1, y1) = (if x1 > x0 { x1 } else { x0 + 1.0 }, if y1 > y0 { y1 } else { y0 + 1.0 });
        let (l, r, t, b) = (64.0, 624.0, 16.0, 352.0);
        let (px, py) = (|x: f64| l + (x - x0) / (x1 - x0) * (r - l), |y: f64| b - (y - y0) / (y1 - y0) * (b - t));
        let mut s = String::from("<svg class=\"plot\" viewBox=\"0 0 640 400\" role=\"img\">");
        let ((xt, xd), (yt, yd)) = (ticks(x0, x1), ticks(y0, y1));
        for v in &xt {
            w!(s, "<line class=\"gr\" x1=\"{0:.1}\" y1=\"{t}\" x2=\"{0:.1}\" y2=\"{b}\"/>", px(*v));
            w!(s, "<text class=\"ax\" x=\"{:.1}\" y=\"372\" text-anchor=\"middle\">{:.2$}</text>", px(*v), v, xd);
        }
        for v in &yt {
            w!(s, "<line class=\"gr\" x1=\"{l}\" y1=\"{0:.1}\" x2=\"{r}\" y2=\"{0:.1}\"/>", py(*v));
            w!(s, "<text class=\"ax\" x=\"56\" y=\"{:.1}\" text-anchor=\"end\">{:.2$}</text>", py(*v) + 5.0, v, yd);
        }
        self.rules.iter().filter(|v| (y0..=y1).contains(*v)).for_each(|v| w!(s, "<line class=\"rl\" x1=\"{l}\" y1=\"{0:.1}\" x2=\"{r}\" y2=\"{0:.1}\"/>", py(*v)));
        for (i, (x, y, dots)) in self.series.iter().enumerate() {
            let p: Vec<(f64, f64)> = x.iter().zip(y).filter(|p| p.0.is_finite() && p.1.is_finite())
                .map(|p| (px(*p.0), py(p.1.clamp(y0, y1)))).collect();
            if *dots {
                p.iter().for_each(|q| w!(s, "<circle class=\"d{}\" cx=\"{:.1}\" cy=\"{:.1}\" r=\"4\"/>", i % 4, q.0, q.1));
            } else if !p.is_empty() {
                w!(s, "<path class=\"l{}\" d=\"M{}\"/>", i % 4, p.iter().map(|q| format!("{:.1} {:.1}", q.0, q.1)).collect::<Vec<_>>().join("L"));
            }
        }
        w!(s, "<text class=\"ax\" x=\"{r}\" y=\"396\" text-anchor=\"end\">{}</text>", esc(&self.labels.0));
        w!(s, "<text class=\"ax\" x=\"{l}\" y=\"11\">{}</text></svg>", esc(&self.labels.1));
        s
    }
}

type Program = fn() -> Result<(), Box<dyn std::error::Error>>;

/// Run the program from a clean book; return outputs, controls, stage and error as JSON.
pub fn run(program: Program) -> String {
    with(|b| *b = Book::default());
    let r = program();
    let b = with(|b| (flush(b), std::mem::take(b)).1);
    let arr = |v: &[String]| v.iter().map(|s| json(s)).collect::<Vec<_>>().join(",");
    let stage: Vec<String> = b.stage.iter().map(|v| if v.is_finite() { format!("{v}") } else { "null".into() }).collect();
    let err = r.err().map_or("null".into(), |e| json(&format!("cell {}: {e}", b.cell + 1)));
    format!("{{\"out\":[{}],\"ctl\":[{}],\"stage\":[{}],\"err\":{err}}}", arr(&b.out), arr(&b.ctl), stage.join(","))
}

/// For the page: run and leave the JSON in the output buffer. A panic aborts (a trap); its
/// message waits for `nb_panic`.
pub fn reply(program: Program) -> u32 {
    std::panic::set_hook(Box::new(|p| PANIC.set(format!("panicked: {}", p.payload_as_str().unwrap_or("?")))));
    crate::ret(run(program).into_bytes())
}

#[unsafe(no_mangle)]
pub extern "C" fn nb_panic() -> u32 { crate::ret(PANIC.take().into_bytes()) }

/// For the builder: run natively, print the JSON, and fail on error or panic.
pub fn native(program: Program) {
    std::panic::set_hook(Box::new(|p| eprintln!("cell {} panicked: {p}", CELL.load(Relaxed) + 1)));
    let s = run(program);
    std::println!("{s}");
    if !s.ends_with("\"err\":null}") { std::process::exit(1) }
}

/// The host sets control `k` (`nb_input`) or live number `k` (`nb_num`); unset ones are NaN.
fn set(list: &'static std::thread::LocalKey<RefCell<Vec<f64>>>, k: u32, v: f64) {
    list.with_borrow_mut(|l| { l.resize(l.len().max(k as usize + 1), f64::NAN); l[k as usize] = v })
}

#[unsafe(no_mangle)]
pub extern "C" fn nb_input(k: u32, v: f64) { set(&INPUT, k, v) }

#[unsafe(no_mangle)]
pub extern "C" fn nb_num(k: u32, v: f64) { set(&NUMS, k, v) }

/// The cell running when the program stopped (after a trap).
#[unsafe(no_mangle)]
pub extern "C" fn nb_cell() -> u32 { CELL.load(Relaxed) as u32 }

#[cfg(test)]
mod tests {
    use super::*;

    fn prog() -> Result<(), Box<dyn std::error::Error>> {
        cell(0);
        let a = slider("Time", 0.0, 10.0, 1.0, 3.0);
        crate::println!("a = {a}");
        cell(1);
        stage(&[a, f64::NAN]);
        Plot::new().line(&[0.0, 1.0], &[0.0, 0.5]).rule(0.25).labels("t", "y").show();
        Err("stop".into())
    }

    #[test]
    fn runs_from_clean_state_with_inputs() {
        let a = run(prog);
        assert!(a.contains("\"out\":[\"\\u003cpre class=\\\"txt\\\">a = 3\\u003c/pre>\""));
        assert!(a.contains("\"stage\":[3,null]") && a.ends_with("\"err\":\"cell 2: stop\"}"));
        nb_input(0, 7.0);
        assert!(run(prog).contains("a = 7") && run(prog) == run(prog));
        nb_input(0, 99.0);
        assert!(run(prog).contains("a = 10"));
        assert_eq!(ticks(0.0, 1.0), (vec![0.0, 0.2, 0.4, 0.6000000000000001, 0.8, 1.0], 1));
        for (a, b) in [(0.0, f64::MAX), (f64::MIN, f64::MAX), (f64::NAN, 1.0), (1e300, -1e300), (f64::MAX, f64::MAX)] {
            assert!(ticks(a, b).0.len() < 12);
        }
        Plot::new().svg();
        Plot::new().line(&[f64::NAN], &[f64::INFINITY]).svg();
    }
}
