#!/bin/sh
# Check the pages, all pinned files, local links, and the native PDF.
set -eu
cd "$(dirname "$0")/.."
python3 - <<'PY'
from pathlib import Path
from hashlib import sha256
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root = Path('public').resolve()
for name in ('index.html', 'style.css', 'lullapixie/privacy.html',
             'lullapixie/support.html', 'marklove/privacy.html',
             'marklove/support.html', 'play/beamdiag/index.html'):
    assert (root / name).stat().st_size, f'missing or empty: {name}'
lines = Path('beam.lock').read_text().splitlines()
kind, commit = lines[0].split()
assert kind == 'commit' and len(commit) == 40
pinned = set()
for line in lines[1:]:
    kind, digest, name = line.split(' ', 2)
    path = Path(name)
    assert kind == 'sha256' and path.is_relative_to('public/play/beamdiag')
    assert name not in pinned, f'duplicate pin: {name}'
    assert sha256(path.read_bytes()).hexdigest() == digest, f'pin mismatch: {name}'
    pinned.add(name)
assert pinned == {str(p) for p in Path('public/play/beamdiag').rglob('*') if p.is_file()}, 'beam.lock file set differs'

class Links(HTMLParser):
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key not in ('href', 'src') or not value:
                continue
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path:
                continue
            if page == root / 'play/beamdiag/index.html' and tag == 'a' and key == 'href':
                assert value == '/', f'beam page link is not /: {value}'
            path = unquote(url.path)
            target = root / path.lstrip('/') if path.startswith('/') else page.parent / path
            target = target.resolve()
            assert target.is_relative_to(root), f'link leaves public: {value}'
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), f'broken link in {page}: {value}'

for page in root.rglob('*.html'):
    Links().feed(page.read_text())
print(f'pinned files: {len(pinned)}')
PY
v=${VISUALS:-/Users/yj/src/visuals}
c=$(sed -n 's/^commit //p' beam.lock)
mkdir -p /tmp/site-beam-deploy-r1
# Build only an export of the pinned commit, never the visuals checkout.
tmp=$(mktemp -d /tmp/site-beam-deploy-r1/check.XXXXXX)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
git -C "$v" archive "$c" > "$tmp/visuals.tar"
mkdir "$tmp/visuals"
tar -xf "$tmp/visuals.tar" -C "$tmp/visuals"
cargo=${CARGO:-$(command -v cargo || printf /Users/yj/.cargo/bin/cargo)}
CARGO_TARGET_DIR=/tmp/site-beam-deploy-r1/target "$cargo" run --manifest-path "$tmp/visuals/Cargo.toml" --locked -q --release -p beamdiag --bin pdf -- "$tmp/example.pdf"
[ "$(head -c 5 "$tmp/example.pdf")" = '%PDF-' ]
printf 'example PDF: %s bytes\n' "$(wc -c < "$tmp/example.pdf" | tr -d ' ')"
echo 'check: ok'
