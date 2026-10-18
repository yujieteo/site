#!/bin/sh
# Build the beam page from beamdiag/ into a folder, by default public/play/beamdiag.
# It writes index.html, beamdiag.wasm and beamdiag.wasm.gz; fonts/ and katex/ are committed there.
set -eu
cd "$(dirname "$0")/.."
out=${1:-public/play/beamdiag}
cargo=${CARGO:-$(command -v cargo || printf /Users/yj/.cargo/bin/cargo)}
"$cargo" build --locked -q --release --target wasm32-unknown-unknown -p beamdiag --lib
"$cargo" run --locked -q --release -p beamdiag --bin page -- target/wasm32-unknown-unknown/release/beamdiag.wasm "$out/index.html"
