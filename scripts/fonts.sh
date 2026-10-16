#!/bin/sh
# Regenerate the committed subsets from hashed upstream fonts. Needs curl and hb-subset.
set -eu
cd "$(dirname "$0")/.."
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
fetch() {
  curl -fsSL --retry 3 "$2" -o "$work/$1"
  [ "$(sha256sum <"$work/$1" | cut -c1-64)" = "$3" ] || { echo "font source hash mismatch: $1" >&2; exit 1; }
}
fetch mono.otf https://raw.githubusercontent.com/nanxstats/courier-prime-sans-ligaturized/a1a3923905160fbac44bb4ce8f0653a7b84ad5eb/fonts/LigaCourierPrimeSans-Regular.otf \
  b44ad8c09fed687f07eda0ce771b30db64cdaacb47a42a9097ee0aa0b32abd2f
fetch math.otf https://mirrors.ctan.org/fonts/tex-gyre-math/opentype/texgyrepagella-math.otf \
  1f9e010f60e947d0e925910009b2ea85ad54edc7cefb106f8cdefb9ffd1d5f2f
hb-subset "$work/mono.otf" --layout-features='*' \
  --unicodes=20-7E,A0-FF,100-24F,300-36F,370-3FF,400-4FF,2000-206F,2070-209F,2100-214F,2190-22FF,2300-23FF,2500-25FF,27C0-27FF,2A00-2AFF -o fonts/mono.otf
hb-subset "$work/math.otf" --no-hinting \
  --unicodes=20-7E,A0-FF,100-24F,300-36F,370-3FF,2000-206F,20D0-20FF,2100-214F,2190-22FF,2308-230B,27C0-27FF,2A00-2AFF,1D400-1D7FF -o fonts/math.otf
sha256sum fonts/mono.otf fonts/math.otf
