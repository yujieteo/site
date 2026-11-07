#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local post dir out
  for post in posts/*/post.md; do
    dir=$(mktemp -d)
    out=$(mktemp -d)
    mkdir -p "${dir}/p"
    cp "$(dirname "${post}")"/* "${dir}/p/"
    bun src/build.ts --posts "${dir}" --out "${out}" > /dev/null 2>&1 || fail "${post} does not build: its front matter must parse as YAML"
  done
  dir=$(mktemp -d)
  out=$(mktemp -d)
  mkdir -p "${dir}/p"
  printf -- '---\ntitle: T\ndate: 2026-01-01\nsummary: A mark: how to bin.\n---\n\nText.\n' > "${dir}/p/post.md"
  bun src/build.ts --posts "${dir}" --out "${out}" > /dev/null 2>&1 && fail "a post whose front matter is not YAML built"
  echo OK
}

main
