#!/bin/sh
# Check the pages, local links and home page, the wallpaper module, and that beamdiag/ builds the beam page.
set -eu
cd "$(dirname "$0")/.."
python3 - <<'PY'
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
                continue  # the server makes /log and /log/feed.xml from the entries
            target = root / path.lstrip('/') if path.startswith('/') else page.parent / path
            target = target.resolve()
            assert target.is_relative_to(root), f'link leaves public: {value}'
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), f'broken link in {page}: {value}'

for page in root.rglob('*.html'):
    Links().feed(page.read_text())

# Each selected exploration on the home page is one <li> with a kind, a title (h3) and a link.
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
    kind = entry['kind'].split(' · ')[0]  # an essay shows its year: Essay · 2022
    assert kind in ('Experiment', 'Project', 'Essay'), f'bad kind: {entry}'
    assert entry['h3'].strip() and entry.get('href'), f'no title or link: {entry}'
    if kind == 'Project':
        assert entry['href'].startswith('https://'), f'project is not a link to its repository: {entry}'
PY
# The committed wallpaper module must come from the committed sources (scripts/build-wallpaper.sh writes the hash).
[ "$(cat wallpaper/wallpaper.goose wallpaper/host.c | shasum -a 256 | cut -d' ' -f1)" = "$(cat wallpaper/wasm.sha256)" ] ||
  { echo 'check: wallpaper/ changed after the last build. Run scripts/build-wallpaper.sh' >&2; exit 1; }
# Budget of the first load of the wallpaper page: 40 KB gzipped (2026-11-02: 34 KB).
[ $(( $(gzip -9 -c public/play/wallpaper/index.html | wc -c) + $(wc -c < public/play/wallpaper/wallpaper.wasm.gz) )) -le 40960 ] ||
  { echo 'check: the wallpaper page is over its 40 KB budget' >&2; exit 1; }
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
scripts/build-beam.sh "$tmp"
for f in index.html beamdiag.wasm.gz; do [ -s "$tmp/$f" ]; done
echo 'check: ok'
