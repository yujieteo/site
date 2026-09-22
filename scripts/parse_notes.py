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
    title = re.split(r"[.,]", note, maxsplit=1)[0].strip() or note
    if len(title) > max_len:
        title = title[:max_len].rsplit(" ", 1)[0] + "…"
    return title


def parse_block(block):
    block = block.strip()
    if not block:
        return None
    match = re.match(r"(https?://\S+?)(?:,\s*|\s+)(.*)$", block, re.DOTALL)
    if not match:
        return None
    url, note = match.group(1), match.group(2).strip()
    url = url.rstrip(').,;')
    return {
        "title": make_title(note, url),
        "url": url,
        "category": domain_of(url),
        "note": note,
    }


def main(src, dst):
    content = Path(src).read_text(encoding="utf-8")
    blocks = re.split(r"\n\s*\n", content)
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
