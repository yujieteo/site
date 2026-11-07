#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

count() {
  local found hits
  found=$(grep -o -- "$2" <<< "$1" || true)
  COUNT=0
  [[ -z "${found}" ]] && return 0
  mapfile -t hits <<< "${found}"
  COUNT=${#hits[@]}
}

want_count() {
  count "$1" "$2"
  [[ "${COUNT}" -eq "$3" ]] || fail "$4"
}

same_count() {
  local first
  count "$1" "$2"
  first=${COUNT}
  count "$1" "$3"
  [[ "${first}" -eq "${COUNT}" ]] || fail "$4"
}

main() {
  local out page text
  out=$(mktemp -d)
  bun src/build.ts --drafts --out "${out}" > /dev/null || fail "build failed"
  page=$(cat "${out}/essays/specimen/index.html")
  text=$(cat "${out}/essays/specimen/index.md")
  has "${page}" 'class="summary"'
  has "${page}" 'class="toc"'
  has "${page}" 'min read'
  has "${page}" 'href="/essays/specimen/index.md"'
  want_count "${page}" 'class="fn-ref"' 2 "want two footnotes"
  want_count "${page}" 'fig-pause' 1 "want one pause button for the one moving figure"
  same_count "${page}" '<figcaption>' '<figure ' "a figure has no caption"
  same_count "${page}" 'role="img" aria-label="[^"]' '<figure ' "a figure has no alt text"
  has "${page}" 'type="range"'
  has "${page}" 'src="/kit/orbit.js"'
  has "${page}" 'src="/kit/compound.js"'
  has "${page}" 'src="/kit/schematic.js"'
  want_count "${page}" 'data-label=' 3 "want three labelled parts"
  has "${page}" 'data-next'
  [[ -s "${out}/kit/schematic.js" ]] || fail "no script for the schematic kind"
  want_count "${page}" 'kit/faithful.js' 0 "the specimen loads a kind it does not use"
  [[ -s "${out}/kit/orbit.js" ]] || fail "no script for the orbit kind"
  has "${text}" '^# A specimen post'
  has "${text}" 'Image: Three dots'
  echo OK
}

main
