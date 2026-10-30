// Builds the standalone page: page <index.html>. scripts/build-beam.sh makes the WebAssembly files.

import std;
import os;
import .app;

let BASE: const u8[:] = embed_file("page_base.css");
let STYLE: const u8[:] = embed_file("page_style.css");
let HOST: const u8[:] = embed_file("page_host.js");

fn main() {
    let a = args();
    if a.len != 2 { write_stderr("usage: page <index.html>\n"); abort("usage"); }
    app_init();
    let body = body("../../");
    let description = "Create beam diagrams, read reactions and hand calculations, and save PNG or A4 PDF reports.";
    let html = str("<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><link rel=\"icon\" href=\"data:,\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"color-scheme\" content=\"only light\"><meta name=\"theme-color\" content=\"#fdfdfc\"><title>Beam diagram creator</title><meta name=\"description\" content=\"", description,
        "\"><link rel=\"stylesheet\" href=\"/style.css\"><style>", BASE, STYLE, draw_css(), "</style>", body, "<script>", HOST, "</script></html>");
    if find(html, "/Users/") >= 0 || find(html, "/home/") >= 0 { abort("no home paths in the page"); }
    if !write_file(a[1], html) { abort("index.html"); }
}
