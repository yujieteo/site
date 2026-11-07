#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"

stub() {
  printf '#!/usr/bin/env bash\n%s\n' "$2" > "$1"
  chmod +x "$1"
}

make_repo() {
  local dir=$1
  mkdir -p "${dir}/scripts" "${dir}/bin" "${dir}/src" "${dir}/stubs"
  cp scripts/deploy.sh "${dir}/scripts/"
  cp bin/pack "${dir}/bin/"
  echo v1 > "${dir}/src/page.txt"
  printf 'dist\nstubs\n' > "${dir}/.gitignore"
  stub "${dir}/gate" 'echo v2 > src/page.txt; git add -A; git -c user.name=x -c user.email=x@x commit -q -m v2'
  stub "${dir}/stubs/bun" 'mkdir -p dist; cp src/page.txt dist/'
  stub "${dir}/stubs/ssh" "cat > \"\${SENT}\""
  stub "${dir}/stubs/curl" 'printf 200'
  git -C "${dir}" init -q
  git -C "${dir}" add -A
  git -C "${dir}" -c user.name=x -c user.email=x@x commit -q -m v1
}

main() {
  local tmp out
  tmp=$(mktemp -d)
  make_repo "${tmp}/r"
  : > "${tmp}/sent"
  out=$(cd "${tmp}/r" && SENT="${tmp}/sent" PATH="${tmp}/r/stubs:${PATH}" bash scripts/deploy.sh 2>&1) && fail "deploy went on after a commit during the gate: ${out}"
  [[ ! -s "${tmp}/sent" ]] || fail "deploy sent an archive that the gate never checked"
  rm -rf "${tmp}"
  echo OK
}

main
