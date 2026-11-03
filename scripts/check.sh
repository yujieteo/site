#!/bin/sh
set -eu
export LC_ALL=C
cd "$(dirname "$0")/.."
comments=$({ grep -nE '(^|[[:space:]])(#|//|/\*)' scripts/*.sh wallpaper/* | grep -vE '^[^:]+:(1:#!|[0-9]+:#include )|// (Oklab, after Björn Ottosson|splitmix64, after Sebastiano Vigna):'
  grep -nE '(^|[[:space:]])(//|/\*)' beamdiag/src/*.goose beamdiag/src/*.c beamdiag/src/page_host.js beamdiag/src/page_style.css beamdiag/test.goose |
    grep -vE "Roark's series|Dekker's product|Toasts, after Sonner"
  grep -nE '(^|[[:space:]])#' beamdiag/reference.py; } || true)
[ -z "$comments" ] || { echo "$comments" >&2
  echo 'check: comments are not allowed in scripts/, wallpaper/ and beamdiag/. Name the code better or write a test. The source credits that stay: Sonner, Roark, Dekker, Oklab and splitmix64.' >&2; exit 1; }
python3 - <<'PY'
import gzip
import re
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root = Path('public').resolve()
SERVER_MADE_PATHS = ('/log', '/log/feed.xml')
fixed = Path('fixed-urls.txt').read_text().split()
pages = [u.lstrip('/') + ('index.html' if u.endswith('/') else '') for u in fixed]
for name in ['index.html', 'style.css', 'log/template.html'] + pages + [
             '.well-known/openpgpkey/hu/dj3498u4hyyarh35rkjfnghbjxug6b19',
             '.well-known/openpgpkey/teoyujie.org/hu/dj3498u4hyyarh35rkjfnghbjxug6b19']:
    assert (root / name).stat().st_size, f'missing or empty: {name}'
for name in pages:
    if name.endswith('.html') and 'beamdiag' not in name:
        assert (root / name).stat().st_size <= 6000, f'policy or support page over 6000 bytes: {name}'

class Links(HTMLParser):
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key not in ('href', 'src') or not value:
                continue
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path:
                continue
            path = unquote(url.path)
            if path in SERVER_MADE_PATHS:
                continue
            target = root / path.lstrip('/') if path.startswith('/') else page.parent / path
            target = target.resolve()
            assert target.is_relative_to(root), f'link leaves public: {value}'
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), f'broken link in {page}: {value}'

for page in root.rglob('*.html'):
    Links().feed(page.read_text())

class Explorations(HTMLParser):
    def __init__(self):
        super().__init__()
        self.entries, self.inside, self.field = [], False, None
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'ol' and attrs.get('class') == 'featured':
            self.inside = True
        elif self.inside and tag == 'li':
            self.entries.append({'kind': '', 'h3': ''})
        elif self.inside and tag == 'a':
            self.entries[-1]['href'] = attrs.get('href')
        elif self.inside and (tag == 'h3' or attrs.get('class') == 'kind'):
            self.field = 'h3' if tag == 'h3' else 'kind'
    def handle_endtag(self, tag):
        self.field = None
        if tag == 'ol':
            self.inside = False
    def handle_data(self, data):
        if self.field:
            self.entries[-1][self.field] += data

assert (root / 'log/template.html').read_text().count('<!-- pond:entries -->') == 1, 'log template needs one <!-- pond:entries -->'

home = (root / 'index.html').read_text()
for path in ('/lullapixie/privacy.html', '/lullapixie/support.html', '/marklove/privacy.html',
             '/marklove/support.html', '/contact.asc', 'mailto:contact@teoyujie.org'):
    assert f'href="{path}"' in home, f'home page has no link to {path}'
explorations = Explorations()
explorations.feed(home)
assert explorations.entries, 'home page has no selected explorations'
for entry in explorations.entries:
    kind_without_essay_year = entry['kind'].split(' · ')[0]
    assert kind_without_essay_year in ('Experiment', 'Project', 'Essay'), f'bad kind: {entry}'
    assert entry['h3'].strip() and entry.get('href'), f'no title or link: {entry}'
    if kind_without_essay_year == 'Project':
        assert entry['href'].startswith('https://'), f'project is not a link to its repository: {entry}'
class FirstLoad(HTMLParser):
    def __init__(self):
        super().__init__()
        self.files = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        url = attrs.get('href') if tag == 'link' else attrs.get('src') if tag in ('script', 'img') else None
        if url and not urlsplit(url).scheme and not url.startswith(('data:', '#')):
            self.files.append(url)

def first_load_bytes(page_name):
    page = root / page_name
    html = page.read_text()
    parser = FirstLoad()
    parser.feed(html)
    queue = [(page.parent / u if not u.startswith('/') else root / u.lstrip('/')).resolve() for u in parser.files]
    queue += [(page.parent / u).resolve() for u in re.findall(r'(?:fetch\(|\.href=|\.src=)"([^":]*)"', html)]
    loaded = [page]
    while queue:
        file = queue.pop(0)
        if file in loaded:
            continue
        loaded.append(file)
        if file.suffix == '.css':
            for u in re.findall(r'url\(([^)]+)\)', file.read_text()):
                u = u.strip('\'"')
                if not urlsplit(u).scheme:
                    queue.append((root / u.lstrip('/') if u.startswith('/') else file.parent / u).resolve())
    return sum(len(file.read_bytes()) if file.name.endswith('.gz') else len(gzip.compress(file.read_bytes(), 9, mtime=0)) for file in loaded)

HOME_FIRST_LOAD_BUDGET = 102400
home_first_load = first_load_bytes('index.html')
assert home_first_load <= HOME_FIRST_LOAD_BUDGET, f'home page first load is {home_first_load} bytes gzipped, over the budget of {HOME_FIRST_LOAD_BUDGET}'
print(f'check: home page first load {home_first_load} of {HOME_FIRST_LOAD_BUDGET} bytes gzipped')
BEAM_FIRST_LOAD_BUDGET = 604160
beam_first_load = first_load_bytes('play/beamdiag/index.html')
assert beam_first_load <= BEAM_FIRST_LOAD_BUDGET, f'beam page first load is {beam_first_load} bytes gzipped, over the budget of {BEAM_FIRST_LOAD_BUDGET}'
print(f'check: beam page first load {beam_first_load} of {BEAM_FIRST_LOAD_BUDGET} bytes gzipped')
for page in (root / 'essays').rglob('index.html'):
    html = page.read_text()
    for fig in re.findall(r'<figure>(.*?)</figure>', html, re.S):
        assert '<figcaption>' in fig, f'figure without caption in {page}'
        assert re.search(r'<svg[^>]*role="img"[^>]*aria-label="[^"]+"', fig), f'figure svg without alt text in {page}'
PY
[ "$(cat wallpaper/wallpaper.goose wallpaper/host.c | shasum -a 256 | cut -d' ' -f1)" = "$(cat wallpaper/wasm.sha256)" ] ||
  { echo 'check: wallpaper/ changed after the last build. Run scripts/build-wallpaper.sh' >&2; exit 1; }
[ $(( $(gzip -9 -c public/play/wallpaper/index.html | wc -c) + $(wc -c < public/play/wallpaper/wallpaper.wasm.gz) )) -le 40960 ] ||
  { echo 'check: the wallpaper page is over its 40 KB budget' >&2; exit 1; }
node wallpaper/test.mjs
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
scripts/build-beam.sh "$tmp"
test_hash=$(cat beamdiag/test.goose beamdiag/src/*.goose beamdiag/src/body.html beamdiag/fixtures.json beamdiag/reference.json beamdiag/random.json beamdiag/raw.json | shasum -a 256 | cut -d' ' -f1)
if [ -n "${GOOSE:-}" ]; then
  "$GOOSE" --standalone -q -o beamdiag/c/test.c beamdiag/test.goose
  echo "$test_hash" > beamdiag/c/test.sha256
elif [ "$test_hash" != "$(cat beamdiag/c/test.sha256)" ]; then
  echo 'check: beamdiag/c/test.c is older than beamdiag/test.goose or its inputs. Rebuild with GOOSE=/path/to/goose scripts/check.sh' >&2
  exit 1
fi
cc -O1 -w beamdiag/c/test.c beamdiag/src/shim.c -lm -o "$tmp/test"
"$tmp/test"
for f in index.html beamdiag.wasm.gz; do [ -s "$tmp/$f" ]; done
echo 'check: ok'
