#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
! grep -nE '(^|[[:space:]])(#|//)([[:space:]]|$)' scripts/*.sh wallpaper/wallpaper.goose wallpaper/host.c | grep -v ':1:#!' ||
  { echo 'check: comments are not allowed in scripts/ and wallpaper/. Name the code better or write a test.' >&2; exit 1; }
python3 - <<'PY'
import gzip
import re
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root = Path('public').resolve()
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
            if path in ('/log', '/log/feed.xml'):
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
    kind = entry['kind'].split(' · ')[0]
    assert kind in ('Experiment', 'Project', 'Essay'), f'bad kind: {entry}'
    assert entry['h3'].strip() and entry.get('href'), f'no title or link: {entry}'
    if kind == 'Project':
        assert entry['href'].startswith('https://'), f'project is not a link to its repository: {entry}'
class FirstLoad(HTMLParser):
    def __init__(self):
        super().__init__()
        self.files = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        url = attrs.get('href') if tag == 'link' else attrs.get('src') if tag in ('script', 'img') else None
        if url and url.startswith('/'):
            self.files.append(url.lstrip('/'))

HOME_FIRST_LOAD_BUDGET = 102400
first_load = FirstLoad()
first_load.feed(home)
loaded = ['index.html']
queue = list(first_load.files)
while queue:
    name = queue.pop(0)
    if name in loaded:
        continue
    loaded.append(name)
    if name.endswith('.css'):
        queue += [u.lstrip('/') for u in re.findall(r'(?:@import url|url)\((/[^)]+)\)', (root / name).read_text())]
home_first_load = sum(len(gzip.compress((root / name).read_bytes(), 9, mtime=0)) for name in loaded)
assert home_first_load <= HOME_FIRST_LOAD_BUDGET, f'home page first load is {home_first_load} bytes gzipped, over the budget of {HOME_FIRST_LOAD_BUDGET}'
print(f'check: home page first load {home_first_load} of {HOME_FIRST_LOAD_BUDGET} bytes gzipped')
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
for f in index.html beamdiag.wasm.gz; do [ -s "$tmp/$f" ]; done
echo 'check: ok'
