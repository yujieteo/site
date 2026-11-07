#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"

make_tree() {
  local dir=$1
  mkdir -p "${dir}/evals/intent" "${dir}/evals/lint/fixtures/go"
  cp -R bin "${dir}/bin"
  cp rules.conf "${dir}/"
  cp evals/lint/fixtures/go/comment.go "${dir}/evals/lint/fixtures/go/"
  : > "${dir}/evals/lint.tsv"
  git -C "${dir}" init -q
  git -C "${dir}" add -A
  git -C "${dir}" -c user.name=x -c user.email=x@x commit -q -m x
}

main() {
  local tmp out
  tmp=$(mktemp -d)
  make_tree "${tmp}/t"
  printf 'printf "OK\\n"; exit 7\n' > "${tmp}/t/evals/intent/failed.sh"
  out=$(cd "${tmp}/t" && bin/eval 2>&1) && fail "an intent that exits 7 after printing OK passed: ${out}"
  has "${out}" "FAIL intent failed"
  rm "${tmp}/t/evals/intent/failed.sh"
  printf 'evals/lint/fixtures/go/comment.go\tok\n' > "${tmp}/t/evals/lint.tsv"
  out=$(cd "${tmp}/t" && bin/replay HEAD 2>&1) && fail "replay passed with failing evals: ${out}"
  rm -rf "${tmp}"
  echo OK
}

main
