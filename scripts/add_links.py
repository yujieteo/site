#!/usr/bin/env python3
"""Add paper links or resources: parse, refuse duplicates, append, and refresh the paper exports.

The input is a text file of blank-line-separated blocks, each a URL and its note (the format of
scripts/parse_notes.py), or a YAML list of records, such as the review file this script writes. A
record needs title, url and category, and a paper link also a note; the records must pass
schema/paper-links.schema.json or schema/resources.schema.json.

Two steps keep the human review of titles and notes, the only judgment here:

1. `add_links.py paper notes.txt --review review.yaml` parses the blocks, refuses a block it cannot
   parse and a URL already in data/paper-links/ or data/resources/, and writes the records to
   review.yaml. Never name a canonical file here.
2. Edit the titles and notes in review.yaml, then run `add_links.py paper review.yaml`. It runs the
   same checks, appends the records to data/paper-links/paper-links.yaml (or
   data/resources/resources.yaml), then, for paper links, runs `paper_tags.py --write` and
   `papers.py export` to refresh the tags and exports/paper-links.toon.

With --check it writes nothing and prints the records it would append. A second run refuses the now
duplicate URLs, so the append happens once.

Usage: scripts/add_links.py {paper,resource} INPUT [--review OUT.yaml | --check] [--target FILE] [--no-refresh]
"""

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

import yaml
from jsonschema import Draft7Validator

from parse_notes import parse_block

ROOT = Path(__file__).resolve().parent.parent
KINDS = {
    "paper": ("paper-links", "paper-links.yaml"),
    "resource": ("resources", "resources.yaml"),
}


class LinkError(ValueError):
    pass


def url_key(url):
    """A URL compared without its scheme, a leading www., a trailing slash or its case."""
    return re.sub(r"^https?://(?:www\.)?", "", url.strip()).rstrip("/").lower()


def read_records(path):
    text = path.read_text(encoding="utf-8")
    if path.suffix in {".yaml", ".yml"}:
        records = yaml.safe_load(text) or []
        if not isinstance(records, list) or not all(isinstance(record, dict) for record in records):
            raise LinkError(f"{path.name} must hold a YAML list of records")
        return records
    blocks = [block for block in re.split(r"\n\s*\n", text) if block.strip()]
    records = [parse_block(block) for block in blocks]
    bad = [index for index, record in enumerate(records, 1) if record is None]
    if bad:
        raise LinkError(f"block {', '.join(map(str, bad))} of {path.name} has no URL and note; fix it (skipped must be 0)")
    return records


def existing_urls(root):
    urls = {}
    for folder, _ in KINDS.values():
        for path in sorted((root / "data" / folder).glob("*.y*ml")):
            for record in yaml.safe_load(path.read_text(encoding="utf-8")) or []:
                if isinstance(record, dict) and record.get("url"):
                    urls.setdefault(url_key(record["url"]), path.relative_to(root).as_posix())
    return urls


def checked(kind, records, root):
    """The records after the schema and duplicate checks; raise LinkError on the first problem."""
    if not records:
        raise LinkError("the input holds no records")
    folder, _ = KINDS[kind]
    schema = json.loads((root / "schema" / f"{folder}.schema.json").read_text(encoding="utf-8"))
    validator = Draft7Validator(schema)
    known = existing_urls(root)
    seen = set()
    for index, record in enumerate(records, 1):
        errors = sorted(validator.iter_errors(record), key=lambda error: list(error.path))
        if errors:
            location = ".".join(str(part) for part in errors[0].path)
            raise LinkError(f"record {index} ({record.get('url', 'no url')}) is invalid at {location or '<root>'}: {errors[0].message}")
        if kind == "paper" and not str(record.get("note", "")).strip():
            raise LinkError(f"record {index} ({record['url']}) needs a note")
        key = url_key(record["url"])
        if key in known:
            raise LinkError(f"record {index}: {record['url']} is already in {known[key]}")
        if key in seen:
            raise LinkError(f"record {index}: {record['url']} appears twice in the input")
        seen.add(key)
    return records


def dump(records):
    return yaml.safe_dump(records, allow_unicode=True, sort_keys=False, width=100)


def append(target, records):
    text = target.read_text(encoding="utf-8") if target.exists() else ""
    if text and not text.endswith("\n"):
        text += "\n"
    added = dump(records)
    # Keep the file's own layout: a blank line between records when it already has them.
    if "\n\n- " in text:
        added = "\n" + added.replace("\n- ", "\n\n- ")
    target.write_text(text + added, encoding="utf-8")


def refresh(root):
    for command in (["scripts/paper_tags.py", "--write"], ["scripts/papers.py", "export"]):
        subprocess.run([sys.executable, *command], cwd=root, check=True)


def parser():
    result = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    result.add_argument("kind", choices=sorted(KINDS), help="paper for data/paper-links/, resource for data/resources/")
    result.add_argument("input", type=Path, help="a text file of URL and note blocks, or a reviewed YAML list")
    mode = result.add_mutually_exclusive_group()
    mode.add_argument("--review", type=Path, help="write the parsed records here for review instead of appending")
    mode.add_argument("--check", action="store_true", help="write nothing; print the records it would append")
    result.add_argument("--target", type=Path, help="the canonical YAML file (default the one file of the kind)")
    result.add_argument("--no-refresh", action="store_true", help="do not run paper_tags.py and papers.py export")
    result.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    return result


def main(argv=None):
    args = parser().parse_args(argv)
    root = args.root
    folder, default_file = KINDS[args.kind]
    target = (args.target or root / "data" / folder / default_file).resolve()
    try:
        if target.parent != (root / "data" / folder).resolve():
            raise LinkError(f"--target must be a file in data/{folder}/")
        if args.review and args.review.resolve().is_relative_to((root / "data").resolve()):
            raise LinkError("--review must name a file outside data/, never a canonical file")
        records = checked(args.kind, read_records(args.input), root)
    except (LinkError, OSError, yaml.YAMLError) as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1
    if args.review:
        args.review.write_text(dump(records), encoding="utf-8")
        print(f"parsed {len(records)} records, skipped 0, no duplicates; review titles and notes in {args.review},"
              f" then run: scripts/add_links.py {args.kind} {args.review}")
        return 0
    if args.check:
        print(f"would append {len(records)} records to {target.relative_to(root.resolve())}:\n{dump(records)}", end="")
        return 0
    append(target, records)
    print(f"appended {len(records)} records to {target.relative_to(root.resolve())}")
    if args.kind == "paper" and not args.no_refresh:
        refresh(root)
    return 0


if __name__ == "__main__":
    sys.exit(main())
