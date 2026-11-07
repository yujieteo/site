#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"

check_one() {
  local lang=$1 short=$2 dir
  dir=$(mktemp -d)/p
  bin/new "${dir}" "${lang}" > /dev/null || fail "bin/new failed for ${lang}"
  local conf
  conf=$(< "${dir}/rules.conf")
  has "${conf}" "^lang=${short}"
  [[ -f "${dir}/EXPIRY" ]] || fail "${lang}: no EXPIRY"
  [[ ! -e "${dir}/SPEC.md" ]] || fail "${lang}: SPEC.md was copied"
  [[ -L "${dir}/sfig" ]] || fail "${lang}: no sfig link"
  [[ -f "${dir}/.claude/skills/start/SKILL.md" ]] || fail "${lang}: no start skill"
  (cd "${dir}" && bin/rules && bin/mdgrade) || fail "${lang}: the new project fails its own rules"
}

refuse_failed_copy() {
  local shim dir out real
  shim=$(mktemp -d)
  dir=$(mktemp -d)/p
  real=$(command -v cp)
  cat > "${shim}/cp" << EOF
#!/usr/bin/env bash
for a in "\$@"; do case "\$a" in */rules.conf) exit 1 ;; *) ;; esac; done
exec ${real} "\$@"
EOF
  chmod +x "${shim}/cp"
  out=$(PATH="${shim}:${PATH}" bin/new "${dir}" go 2>&1) && fail "bin/new reported success after a failed copy: ${out}"
  [[ "${out}" != *started* ]] || fail "bin/new printed started after a failed copy"
}

main() {
  refuse_failed_copy
  check_one go go
  check_one typescript ts
  check_one python py
  check_one rust rs
  echo OK
}

main
