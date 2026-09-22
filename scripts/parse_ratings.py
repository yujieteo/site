#!/usr/bin/env python3
"""Convert plain-text rating blocks to the site's YAML format.

Input format:
    album Blue
    Revisit
    A review which may contain commas or span multiple lines.

    food Item @ Location
    Keep
    A review of this particular item and location.
"""

import os
import re
import sys

import yaml


VERDICTS = {
    "avoid": "Avoid",
    "once": "Once",
    "revisit": "Revisit",
    "keep": "Keep",
}


def parse_block(block, block_number):
    lines = [line.strip() for line in block.splitlines() if line.strip()]
    if len(lines) < 3:
        raise ValueError(
            f"entry {block_number}: expected a 'type title' line, a verdict line, "
            "and a review"
        )
    try:
        item_type, title = lines[0].split(maxsplit=1)
    except ValueError as exc:
        raise ValueError(
            f"entry {block_number}: the first line must be 'type title'"
        ) from exc

    verdict_text = lines[1]
    review = "\n".join(lines[2:]).strip()
    verdict = VERDICTS.get(verdict_text.casefold())
    if verdict is None:
        raise ValueError(
            f"entry {block_number}: unknown verdict {verdict_text!r}; "
            "use Avoid, Once, Revisit, or Keep"
        )
    if not title:
        raise ValueError(f"entry {block_number}: title cannot be empty")
    if not review:
        raise ValueError(f"entry {block_number}: review cannot be empty")

    entry = {
        "type": item_type,
        "title": title,
        "rating": verdict,
        "review": review,
    }
    if item_type.casefold() == "food" and " @ " in title:
        item, location = [part.strip() for part in title.rsplit(" @ ", 1)]
        if item and location:
            entry["title"] = item
            entry["location"] = location
    return entry


def parse_text(content):
    # Comments are ignored without disturbing the blank lines that delimit
    # entries. Every type is accepted; the first word is simply the tag.
    content = "\n".join(
        "" if line.lstrip().startswith("#") else line
        for line in content.splitlines()
    )
    blocks = [block for block in re.split(r"\n\s*\n", content) if block.strip()]
    entries = []
    errors = []
    for block_number, block in enumerate(blocks, 1):
        try:
            entries.append(parse_block(block, block_number))
        except ValueError as exc:
            errors.append(str(exc))
    if errors:
        raise ValueError("\n".join(errors))
    return entries


def main(src, dst):
    with open(src, encoding="utf-8") as f:
        entries = parse_text(f.read())

    parent = os.path.dirname(os.path.abspath(dst))
    os.makedirs(parent, exist_ok=True)
    with open(dst, "w", encoding="utf-8") as f:
        yaml.safe_dump(entries, f, allow_unicode=True, sort_keys=False, width=100)
    print(f"Parsed {len(entries)} ratings, wrote {dst}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit(f"Usage: {sys.argv[0]} INPUT.txt OUTPUT.yaml")
    try:
        main(sys.argv[1], sys.argv[2])
    except ValueError as exc:
        raise SystemExit(str(exc)) from exc
