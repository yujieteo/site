#!/bin/sh
# Fetch the pinned visuals data, test, compile the engine to WebAssembly, then write dist/.
# Args go to the builder.
set -eu
cd "$(dirname "$0")"
scripts/visuals.sh
cargo test --locked -q
cargo build --locked --release -p engine --target wasm32-unknown-unknown
cargo run --locked --release -q -p site -- "$@"
