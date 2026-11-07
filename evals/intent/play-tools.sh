#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun
need python3
need chromium

main() {
  local out files post
  out=$(mktemp -d)
  bun src/build.ts --out "${out}" > /dev/null || fail "build failed"
  files=$(cd "${out}" && find play -type f)
  has "${files}" 'play/goosestrike/index.html'
  has "${files}" 'play/goosestrike/strike.wasm'
  has "${files}" 'play/theorems/explorer/index.html'
  has "${files}" 'play/theorems/learner/index.html'
  [[ -s "${out}/shared/kowalski.css" ]] || fail "the goosestrike page has no style sheet"
  for slug in goosestrike theorems snowmobile; do
    post=$(cat "${out}/essays/${slug}/index.html")
    [[ "${post}" != *'src="/play/'* ]] || fail "${slug} loads a tool"
  done
  post=$(cat "${out}/essays/goosestrike/index.html")
  has "${post}" 'href="/play/goosestrike/"'
  post=$(cat "${out}/essays/theorems/index.html")
  has "${post}" 'href="/play/theorems/explorer/"'
  has "${post}" 'href="/play/theorems/learner/"'
  post=$(cat "${out}/essays/snowmobile/index.html")
  has "${post}" 'href="https://github.com/yujieteo/snowmobile"'
  for tool in 'goosestrike/?solver=cpu' theorems/explorer/ theorems/learner/; do
    for label in phone desktop; do
      bun evals/kit/play.ts "${out}" "${tool}" "${label}" || fail "${tool} failed at ${label}"
    done
  done
  rm -rf "${out}"
  echo OK
}

main
