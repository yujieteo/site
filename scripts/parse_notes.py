#!/usr/bin/env python3
"""Parse notes.txt (url, note-text blocks separated by blank lines) into YAML."""

import re
import sys
from pathlib import Path
from urllib.parse import urlparse

import yaml


def domain_of(url):
    host = re.sub(r"^www\.", "", urlparse(url).netloc)
    parts = host.split(".")
    if len(parts) > 2:
        host = ".".join(parts[-2:])
    return host or "other"


def make_title(note, url, max_len=90):
    note = note.strip()
    if not note:
        return domain_of(url)
    # take up to the first comma or period as a short title
    m = re.split(r"[.,]", note, maxsplit=1)
    title = m[0].strip()
    if not title:
        title = note
    if len(title) > max_len:
        title = title[:max_len].rsplit(" ", 1)[0] + "…"
    return title


def parse_block(block):
    block = block.strip()
    if not block:
        return None
    # find the URL at the start (handles missing/odd leading protocol)
    m = re.match(r"(https?://\S+?)(?:,\s*|\s+)(.*)$", block, re.DOTALL)
    if not m:
        # fallback: whole block treated as note with no clean url
        return None
    url, note = m.group(1), m.group(2).strip()
    # strip stray trailing punctuation from url
    url = url.rstrip(').,;')
    note = note.replace('"', "'")
    title = make_title(note, url)
    category = domain_of(url)
    return {
        "title": title,
        "url": url,
        "category": category,
        "note": note,
    }


def main(src, dst):
    content = Path(src).read_text(encoding="utf-8")
    blocks = [block for block in content.split("\n\n") if block.strip()]
    entries = []
    skipped = 0
    for b in blocks:
        parsed = parse_block(b)
        if parsed:
            entries.append(parsed)
        else:
            skipped += 1
    Path(dst).write_text(
        yaml.safe_dump(entries, allow_unicode=True, sort_keys=False, width=100),
        encoding="utf-8",
    )
    print(f"Parsed {len(entries)} entries, skipped {skipped}, wrote {dst}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit(f"Usage: {sys.argv[0]} INPUT.txt OUTPUT.yaml")
    main(sys.argv[1], sys.argv[2])
