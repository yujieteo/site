#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

count() { grep -o -- "$2" <<< "$1" | wc -l | tr -d ' '; }

main() {
  local out page text
  out=$(mktemp -d)
  bun src/build.ts --drafts --out "$out" > /dev/null || fail "build failed"
  page=$(cat "$out/essays/specimen/index.html")
  text=$(cat "$out/essays/specimen/index.md")
  has "$page" 'class="summary"'
  has "$page" 'class="toc"'
  has "$page" 'min read'
  has "$page" 'href="/essays/specimen/index.md"'
  [ "$(count "$page" 'class="fn-ref"')" = 2 ] || fail "want two footnotes"
  [ "$(count "$page" 'fig-pause')" = 1 ] || fail "want one pause button for the one moving figure"
  [ "$(count "$page" '<figcaption>')" = "$(count "$page" '<figure ')" ] || fail "a figure has no caption"
  [ "$(count "$page" 'role="img" aria-label="[^"]')" = "$(count "$page" '<figure ')" ] || fail "a figure has no alt text"
  has "$page" 'type="range"'
  has "$text" '^# A specimen post'
  has "$text" 'Image: Three dots'
  echo OK
}

main
