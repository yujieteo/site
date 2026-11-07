#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local out files index empty
  out=$(mktemp -d)
  empty=$(mktemp -d)
  mkdir "${empty}/posts" "${empty}/out"
  bun src/build.ts --posts "${empty}/posts" --out "${empty}/out" > /dev/null || fail "empty build failed"
  has "$(cat "${empty}/out/index.html" || true)" 'No posts yet'

  bun src/build.ts --out "${out}" > /dev/null || fail "build failed"
  files=$(cd "${out}" && find . -type f)
  has "${files}" './index.html'
  index=$(cat "${out}/index.html")
  [[ "${index}" != *'href="/essays/charts-choose-first/"'* ]] || fail "the charts draft is listed"
  [[ ! -e "${out}/essays/charts-choose-first" ]] || fail "the charts draft was deployed"
  has "${index}" 'href="/contact.asc"'
  cmp -s static/public/contact.asc "${out}/contact.asc" || fail "the OpenPGP key is not served"
  has "${files}" './.well-known/openpgpkey/hu/dj3498u4hyyarh35rkjfnghbjxug6b19'
  has "${files}" './.well-known/openpgpkey/teoyujie.org/hu/dj3498u4hyyarh35rkjfnghbjxug6b19'
  has "${files}" './play/goosestrike/index.html'
  [[ ! -e "${out}/essays/specimen" ]] || fail "the specimen draft was deployed"
  if grep -qE 'lullapixie|marklove|/log' <<< "${files}${index}"; then fail "a removed page or link is back"; fi
  echo OK
}

main
