#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

make_post() {
  mkdir -p "$1/p"
  printf -- '---\ntitle: T\ndate: 2026-01-01\nbudget_kb: %s\nsummary: S\n---\n\n## H\n\n%s\n' "$2" "$3" > "$1/p/post.md"
}

builds() { bun src/build.ts --posts "$1" --out "$2" > /dev/null 2>&1; }

main() {
  local dir out
  dir=$(mktemp -d)
  out=$(mktemp -d)
  make_post "$dir/ok" 80 '::figure kind=orbit alt="Dots." caption="Dots."'
  builds "$dir/ok" "$out" || fail "a good post did not build"
  make_post "$dir/noalt" 80 '::figure kind=orbit caption="Dots."'
  builds "$dir/noalt" "$out" && fail "a figure with no alt text built"
  make_post "$dir/nocaption" 80 '::figure kind=orbit alt="Dots."'
  builds "$dir/nocaption" "$out" && fail "a figure with no caption built"
  make_post "$dir/small" 10 'Text.'
  builds "$dir/small" "$out" && fail "a post over its download limit built"
  echo OK
}

main
