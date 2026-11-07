#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need tar
need python3

mark() {
  if command -v xattr > /dev/null; then xattr -w user.mac x "$1"
  else python3 -c 'import os, sys; os.setxattr(sys.argv[1], "user.mac", b"x")' "$1"; fi
}

main() {
  local dir archive listed
  dir=$(mktemp -d)
  archive=$(mktemp)
  echo hi > "${dir}/page.html"
  mark "${dir}/page.html" || fail "could not set an xattr"
  bin/pack "${dir}" "${archive}" || fail "the deploy tar step failed"
  listed=$(tar -tzf "${archive}")
  has "${listed}" "./page.html"
  [[ "${listed}" != *"._"* ]] || fail "the archive holds mac metadata files"
  gzip -dc "${archive}" > "${archive}.tar"
  ! grep -aq user.mac "${archive}.tar" || fail "the archive holds xattrs"
  rm -rf "${dir}" "${archive}" "${archive}.tar"
  echo OK
}

main
