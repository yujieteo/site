//! Write the example report without a browser.
fn main() {
    let path = std::env::args().nth(1).expect("usage: pdf <out.pdf>");
    let mut app = beamdiag::app::App::new();
    let bytes = app.pdf_report("2026-10-18", beamdiag::util::FONTS.map(|f| f.1));
    std::fs::write(path, bytes).expect("write the report");
}
