#!/usr/bin/env python3
"""Write data/podcasts/<id>.yaml for an explainer video from the files in data/podcasts/video/.

<id> is YYYY-MM-DD-<slug>. The video needs <id>.mp4, <id>.vtt captions and an <id>.jpg, .jpeg or .png
poster. The script reads duration_seconds from the MP4's own header (its mvhd box), takes the date
from the id, and checks the record against schema/podcasts.schema.json. The title, summary and focus
tags are the author's: each --focus-tag must be a canonical tag or alias in data/note-tags.json.

It refuses a missing file, an unknown tag, and an existing record that differs. Run again with the
same arguments, it changes nothing. With --check it writes nothing and prints the record.

Usage: scripts/add_video.py ID --title T --summary S --focus-tag TAG [--focus-tag TAG ...] [--check]
"""

import argparse
import json
import re
import struct
import sys
from pathlib import Path

import yaml
from jsonschema import Draft7Validator

from notes import NotesError, load_registry

ROOT = Path(__file__).resolve().parent.parent
VIDEO_ID = re.compile(r"^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$")
POSTER_SUFFIXES = (".jpg", ".jpeg", ".png")
# Boxes that hold other boxes on the way to the movie header.
CONTAINERS = {b"moov"}


class VideoError(ValueError):
    pass


def boxes(data, start, end):
    """(type, payload start, payload end) of each MP4 box between start and end."""
    while start + 8 <= end:
        size, kind = struct.unpack(">I4s", data[start:start + 8])
        header = 8
        if size == 1:
            size = struct.unpack(">Q", data[start + 8:start + 16])[0]
            header = 16
        elif size == 0:
            size = end - start
        if size < header or start + size > end:
            raise VideoError("the MP4 has a malformed box")
        yield kind, start + header, start + size
        start += size


def mp4_duration(path):
    """The movie's duration in seconds, from its mvhd box, rounded to 2 decimal places."""
    data = path.read_bytes()

    def find(start, end):
        for kind, payload, stop in boxes(data, start, end):
            if kind == b"mvhd":
                return payload
            if kind in CONTAINERS and (found := find(payload, stop)) is not None:
                return found
        return None

    mvhd = find(0, len(data))
    if mvhd is None:
        raise VideoError(f"{path.name} has no movie header (moov/mvhd box)")
    if data[mvhd] == 1:
        timescale, duration = struct.unpack(">IQ", data[mvhd + 20:mvhd + 32])
    else:
        timescale, duration = struct.unpack(">II", data[mvhd + 12:mvhd + 20])
    if not timescale or not duration:
        raise VideoError(f"{path.name} states no duration")
    return round(duration / timescale, 2)


def focus_tags(values, root):
    registry = load_registry(root / "data" / "note-tags.json")
    resolved = []
    for value in values:
        tag = registry["aliases"].get(value, value)
        definition = registry["tags"].get(tag)
        if definition is None:
            raise VideoError(f"unknown focus tag {value!r}; use a canonical tag from data/note-tags.json")
        resolved.append(definition["replaced_by"] or tag)
    return list(dict.fromkeys(resolved))


def record(args, root=ROOT):
    if not VIDEO_ID.fullmatch(args.id):
        raise VideoError(f"id {args.id!r} must be YYYY-MM-DD-<slug>")
    folder = root / "data" / "podcasts" / "video"
    video, captions = folder / f"{args.id}.mp4", folder / f"{args.id}.vtt"
    posters = [folder / f"{args.id}{suffix}" for suffix in POSTER_SUFFIXES if (folder / f"{args.id}{suffix}").is_file()]
    missing = [path.name for path in (video, captions) if not path.is_file()]
    if not posters:
        missing.append(f"{args.id}.jpg (or .jpeg, .png)")
    if missing:
        raise VideoError(f"data/podcasts/video/ lacks {', '.join(missing)}")
    if len(posters) > 1:
        raise VideoError(f"more than one poster: {', '.join(path.name for path in posters)}; keep one")
    if not args.focus_tag:
        raise VideoError("give at least one --focus-tag")
    result = {
        "id": args.id,
        "date": args.id[:10],
        "title": args.title.strip(),
        "summary": args.summary.strip(),
        "focus_tags": focus_tags(args.focus_tag, root),
        "duration_seconds": mp4_duration(video),
        "video": f"video/{video.name}",
        "captions": f"video/{captions.name}",
        "poster": f"video/{posters[0].name}",
    }
    schema = json.loads((root / "schema" / "podcasts.schema.json").read_text(encoding="utf-8"))
    errors = sorted(Draft7Validator(schema).iter_errors(result), key=lambda error: list(error.path))
    if errors:
        location = ".".join(str(part) for part in errors[0].path)
        raise VideoError(f"the record is invalid at {location or '<root>'}: {errors[0].message}")
    return result


def write(args, root=ROOT):
    """Return (path, text, changed); write the record unless --check."""
    text = yaml.safe_dump(record(args, root), allow_unicode=True, sort_keys=False, width=1000)
    path = root / "data" / "podcasts" / f"{args.id}.yaml"
    if path.exists():
        if yaml.safe_load(path.read_text(encoding="utf-8")) == yaml.safe_load(text):
            return path, text, False
        raise VideoError(f"{path.relative_to(root)} already exists with other values; edit it by hand")
    if not args.check:
        path.write_text(text, encoding="utf-8")
    return path, text, True


def parser():
    result = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    result.add_argument("id", help="YYYY-MM-DD-<slug>, the base name of the files in data/podcasts/video/")
    result.add_argument("--title", required=True)
    result.add_argument("--summary", required=True)
    result.add_argument("--focus-tag", action="append", default=[], help="a canonical tag; repeat for each")
    result.add_argument("--check", action="store_true", help="write nothing; print the record")
    result.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    return result


def main(argv=None):
    args = parser().parse_args(argv)
    try:
        path, text, changed = write(args, args.root)
    except (VideoError, NotesError) as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1
    label = path.relative_to(args.root)
    if not changed:
        print(f"{label} already holds this record; nothing to do")
    else:
        print(f"{'would write' if args.check else 'wrote'} {label}:\n{text}", end="")
    return 0


if __name__ == "__main__":
    sys.exit(main())
