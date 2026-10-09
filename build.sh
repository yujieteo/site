#!/bin/sh
# Test, compile the engine to WebAssembly, then write dist/. Args go to the builder.
set -eu
cd "$(dirname "$0")"
cargo test --locked -q
cargo build --locked --release -p engine --target wasm32-unknown-unknown
cargo run --locked --release -q -p site -- "$@"
