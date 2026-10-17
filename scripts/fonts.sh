#!/bin/sh
# Regenerate the committed subsets from hashed upstream fonts, all from one Google Fonts commit.
# Needs curl, hb-subset (HarfBuzz 14.5.1) and python3 with fontTools (4.65.0).
set -eu
cd "$(dirname "$0")/.."
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
gf=https://raw.githubusercontent.com/google/fonts/47d54ca1ebb14fd864695f1d39dc734f39017c33/ofl
fetch() {
  curl -fsSL --retry 3 "$gf/$2" -o "$work/$1"
  [ "$(sha256sum <"$work/$1" | cut -c1-64)" = "$3" ] || { echo "font source hash mismatch: $1" >&2; exit 1; }
}
fetch garamond.ttf 'ebgaramond/EBGaramond%5Bwght%5D.ttf' ef9512f92f6d579e5dc75af59a5a4b1b8b47d2eda89e00b954d44520e5369027
fetch garamond-italic.ttf 'ebgaramond/EBGaramond-Italic%5Bwght%5D.ttf' bba2c4499c93c9612b90b9825d32b07da52fce2fe57562a1eb6b833553f93c4e
fetch bodoni.ttf 'bodonimoda/BodoniModa%5Bopsz,wght%5D.ttf' 550f5e34ee0a828d7941b1fe9bc58b34e5260d3f33a61532e6d0a0114e79a5cf
fetch franklin.ttf 'librefranklin/LibreFranklin%5Bwght%5D.ttf' 2329f394b10ed1c71107df20fddc11e2bb1b68c1ecbb385f975b36fd64a971f8
fetch newscycle.ttf newscycle/NewsCycle-Regular.ttf 8653ccce06d26dcf19a68704a16063835fc9fea036638c2fcbd5bdc8c94e4e95
fetch courier.ttf courierprime/CourierPrime-Regular.ttf 72f793376f8e2841656bf21d77a5de010f2929bd6956a22ee848ad0c7eb978af
fetch courier-bold.ttf courierprime/CourierPrime-Bold.ttf ff1f38786c849d1c41fa8e447960abdb2bd75fdfb0cfcdeb524fad65a5af3638
fetch stix.ttf stixtwomath/STIXTwoMath-Regular.ttf 562551b15b836e6e01d1b7350909baf3c8c8d83260c1190fbf4544333e6936de
# Static instances, unhinted, with only the layout features the pages use.
cut() { src=$1 out=$2; shift 2; hb-subset "$work/$src" --no-hinting "$@" -o "fonts/$out"; }
lat=20-7E,A0-17F,2000-206F
text=$lat,300-36F,20AC,211F,2123,2212,261E,2767
cut garamond.ttf text.ttf --instance=wght=400 --layout-features=ccmp,locl,mark,mkmk,kern,liga,clig,smcp,onum,pnum --unicodes=$text
cut garamond-italic.ttf italic.ttf --instance=wght=400 --layout-features=ccmp,locl,mark,mkmk,kern,liga,clig,onum,pnum --unicodes=$text
cut garamond.ttf bold.ttf --instance=wght=600 --layout-features=ccmp,locl,mark,mkmk,kern,liga --unicodes=$lat
cut bodoni.ttf head.ttf --instance=wght=400,opsz=28 --unicodes=$lat
cut franklin.ttf ui.ttf --instance=wght=400 --unicodes=$lat
cut newscycle.ttf small.ttf --unicodes=$lat,2190-2193
cut courier.ttf mono.ttf --unicodes=$lat
cut courier-bold.ttf monobold.ttf --unicodes=$lat
cut stix.ttf math.ttf --unicodes=20-7E,A0-FF,100-24F,300-36F,370-3FF,2000-206F,20D0-20FF,2100-214F,2190-22FF,2300-23FF,2500-25FF,27C0-27FF,2A00-2AFF,1D400-1D49B,1D538-1D56B,1D6E2-1D71B
# News Cycle and STIX Two Math reserve their names, so their subsets carry the site's own.
python3 - fonts/small.ttf "Site Small" fonts/math.ttf "Site Math" <<'EOF'
import sys
from fontTools.ttLib import TTFont
a = sys.argv[1:]
for path, family in zip(a[::2], a[1::2]):
    f = TTFont(path, recalcTimestamp=False)
    for r in f["name"].names:
        if r.nameID in (1, 4, 16):
            r.string = family
        elif r.nameID in (3, 6):
            r.string = family.replace(" ", "")
    f.save(path)
EOF
sha256sum fonts/*.ttf
