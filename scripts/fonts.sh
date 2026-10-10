#!/bin/sh
# Regenerate fonts/*.otf: subsets of pinned upstream fonts (nixpkgs 26.05), cut with HarfBuzz.
# The committed files are the payload; this script only proves where they came from.
set -eu
cd "$(dirname "$0")/.."
U=https://releases.nixos.org/nixos/26.05/nixos-26.05.11576.7c8764b7c7b0/nixexprs.tar.xz
P='import (fetchTarball { url = "'$U'"; sha256 = "1fzrxmr2qi7fy76wh9v0l1a7vdvscxn4p2d5ng9rhpcnrhdil6zy"; }) {}'
out() { nix-build --no-out-link -E "with $P; $1"; }
hb=$(out harfbuzz.dev)/bin/hb-subset
TEXT=20-7E,A0-FF,131,152-153,160-161,178,17D-17E,391-3A9,3B1-3C9,2013-2014,2018-201D,2022,2026,2032-2033,2190-2193,2212,2248,2260,2264-2265,221E,00B7
cut() { "$hb" "$1" --no-hinting --layout-features=kern,liga --unicodes="$TEXT" -o "fonts/$2.otf"; }
cut "$(out fira-sans)/share/fonts/opentype/FiraSans-Regular.otf" sans
cut "$(out fira-mono)/share/fonts/opentype/FiraMono-Regular.otf" mono
"$hb" "$(out fira-math)/share/fonts/opentype/FiraMath-Regular.otf" --no-hinting \
  --unicodes="$TEXT,300-36F,20D7,2102,210D-210E,2113,2115,2119-211A,211D,2124,2190-21FF,2200-22FF,2308-230B,27C0-27FF,2AAF-2AB0,1D400-1D49B,1D53C-1D54B,1D6A8-1D7D7" -o fonts/math.otf
sha256sum fonts/*.otf
