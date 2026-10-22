#!/bin/sh
# Check the pages and local links, that beamdiag/ builds the beam page, and the native PDF.
set -eu
cd "$(dirname "$0")/.."
python3 - <<'PY'
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root = Path('public').resolve()
for name in ('index.html', 'style.css', 'lullapixie/privacy.html',
             'lullapixie/support.html', 'marklove/privacy.html',
             'marklove/support.html', 'play/beamdiag/index.html',
             '.well-known/openpgpkey/hu/dj3498u4hyyarh35rkjfnghbjxug6b19',
             '.well-known/openpgpkey/teoyujie.org/hu/dj3498u4hyyarh35rkjfnghbjxug6b19'):
    assert (root / name).stat().st_size, f'missing or empty: {name}'

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
PY
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
scripts/build-beam.sh "$tmp"
for f in index.html beamdiag.wasm beamdiag.wasm.gz; do [ -s "$tmp/$f" ]; done
cargo=${CARGO:-$(command -v cargo || printf /Users/yj/.cargo/bin/cargo)}
"$cargo" run --locked -q --release -p beamdiag --bin pdf -- "$tmp/example.pdf"
[ "$(head -c 5 "$tmp/example.pdf")" = '%PDF-' ]
printf 'example PDF: %s bytes\n' "$(wc -c < "$tmp/example.pdf" | tr -d ' ')"
echo 'check: ok'
