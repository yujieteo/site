#!/bin/sh
# Download the two public dumps the in-sample candidates come from.
# Usage: fetch_dumps.sh DUMPS_DIR
# Each dump goes in its own directory. Files are checked against the sizes and
# SHA-256 sums that Hugging Face publishes (LFS oid), and a file that already
# matches is not downloaded again.
set -eu
dumps=${1:?usage: fetch_dumps.sh DUMPS_DIR}
mkdir -p "$dumps/hn-dump" "$dumps/lw-dump"

fetch_repo() { # repo, dest, path filter (extended regex)
	repo=$1 dest=$2 filter=$3
	curl -fsS -m 60 "https://huggingface.co/api/datasets/$repo/tree/main?recursive=1" >"$dest/tree.json"
	python3 -I - "$dest/tree.json" "$filter" >"$dest/manifest.tsv" <<'PY'
import json, re, sys
tree, pattern = json.load(open(sys.argv[1])), re.compile(sys.argv[2])
for f in tree:
    if f.get("type") == "file" and pattern.search(f["path"]):
        sha = (f.get("lfs") or {}).get("oid", "")
        print(f["path"], f["size"], sha, sep="\t")
PY
	while IFS="$(printf '\t')" read -r path size sha; do
		out="$dest/$path"
		mkdir -p "$(dirname "$out")"
		if [ -f "$out" ] && [ "$(wc -c <"$out" | tr -d ' ')" = "$size" ]; then continue; fi
		curl -fsSL --retry 4 --retry-delay 5 -m 1800 -o "$out.part" \
			"https://huggingface.co/datasets/$repo/resolve/main/$path"
		if [ -n "$sha" ]; then
			got=$(shasum -a 256 "$out.part" | cut -d' ' -f1)
			[ "$got" = "$sha" ] || { echo "checksum mismatch: $path" >&2; exit 1; }
		fi
		mv "$out.part" "$out"
		echo "got $path"
	done <"$dest/manifest.tsv"
}

# Hacker News: every item from October 2006 to December 2019.
fetch_repo open-index/hacker-news "$dumps/hn-dump" '^(README\.md|data/(2006|2007|2008|2009|2010|2011|2012|2013|2014|2015|2016|2017|2018|2019)/.*\.parquet)$'
# LessWrong: the May 2026 crawl.
fetch_repo x65617379/lesswrong_260509 "$dumps/lw-dump" '^(README\.md|data/raw/.*\.parquet)$'
echo "dumps complete"
