#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

post() {
  local dir=$1 head=$2 body=$3
  mkdir -p "${dir}/p"
  printf -- '---\ntitle: T\ndate: 2026-01-01\nsummary: S\n%s\n---\n\n%s\n' "${head}" "${body}" > "${dir}/p/post.md"
}

build() {
  bun src/build.ts --posts "$1" --out "$2" > /dev/null 2>&1
}

drafts() {
  local value dir out
  for value in 'draft: TRUE' 'draft: True' 'draft: true # keep private'; do
    dir=$(mktemp -d)
    out=$(mktemp -d)
    post "${dir}" "${value}" "Text."
    build "${dir}" "${out}"
    [[ -f "${out}/essays/p/index.html" ]] && fail "[${value}] is a draft but a normal build published it"
  done
}

output_inside_posts() {
  local dir
  dir=$(mktemp -d)
  mkdir -p "${dir}/posts"
  post "${dir}/posts" "" "Text."
  build "${dir}/posts" "${dir}/posts" && fail "--out equal to --posts was accepted"
  build "${dir}/posts" "${dir}" && fail "--out above --posts was accepted"
  [[ -f "${dir}/posts/p/post.md" ]] || fail "a refused build deleted the posts"
}

lazy_without_hydration() {
  local kind dir out
  for kind in orbit compound faithful anscombe berkeley mix theorem-dials; do
    dir=$(mktemp -d)
    out=$(mktemp -d)
    post "${dir}" "" "::figure kind=${kind} lazy=true alt=\"A.\" caption=\"C.\""
    build "${dir}" "${out}" && fail "lazy=true on ${kind} built an empty figure"
  done
}

repeated_footnotes() {
  local dir out ids
  dir=$(mktemp -d)
  out=$(mktemp -d)
  post "${dir}" "" $'Text a[^x] and b[^x].\n\n[^x]: Note.'
  build "${dir}" "${out}" || fail "repeated footnote did not build"
  ids=$(grep -o ' id="fn-[^"]*"' "${out}/essays/p/index.html" | sort | uniq -d)
  [[ -z "${ids}" ]] || fail "duplicate ids:${ids}"
}

main() {
  local step
  for step in ${STEPS:-drafts output_inside_posts lazy_without_hydration repeated_footnotes}; do "${step}"; done
  echo OK
}

main
