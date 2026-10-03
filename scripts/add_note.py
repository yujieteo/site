#!/usr/bin/env python3
"""Add one dated note to data/notes.md, at the top of its ## YYYY-MM-DD section.

A missing date heading is created in its place: the headings run newest first. Each --tag must be a
canonical tag or an alias in data/note-tags.json; an alias or a deprecated tag becomes its canonical
replacement. A tag for a genuinely new topic is a judgment: add it to the registry first. A #todo note
dated on or after the rule date needs a date and a "done when" condition, as scripts/validate.py
requires. --agent-written adds #agent-written.

The script refuses note text with a blank line or its own trailing tags, an unknown tag, and a result
that scripts/notes.py would reject. Run again with the same note, it changes nothing. With --check it
writes nothing and prints the note and the section it would go in.

Usage: scripts/add_note.py --tag TAG [--tag TAG ...] [--date YYYY-MM-DD] [--agent-written]
       [--check] (--text TEXT | --text - to read stdin)
"""

import argparse
import re
import sys
from datetime import date
from pathlib import Path

from notes import TRAILING_TAGS, NotesError, load_registry, parse_notes
from validate import TODO_DATE, TODO_DONE, TODO_RULE_SINCE

ROOT = Path(__file__).resolve().parent.parent
# A date heading, matched to the end of its own line only.
HEADING = re.compile(r"^## (\d{4}-\d{2}-\d{2})[ \t]*$", re.MULTILINE)


def canonical_tags(tags, registry):
    """The note's tags in canonical spelling, in order and without repeats."""
    resolved = []
    for value in tags:
        tag = registry["aliases"].get(value.lower().lstrip("#"), value.lower().lstrip("#"))
        definition = registry["tags"].get(tag)
        if definition is None:
            raise NotesError([f"unknown tag {value!r}; add it to data/note-tags.json first if it names a new topic"])
        resolved.append(definition["replaced_by"] or tag)
    return list(dict.fromkeys(resolved))


def note_block(text, tags, iso_date):
    text = text.strip()
    if not text:
        raise NotesError(["the note text is empty"])
    if re.search(r"\n\s*\n", text):
        raise NotesError(["the note text has a blank line; a note is one paragraph"])
    if TRAILING_TAGS.search(text):
        raise NotesError(["the note text ends with tags; give them with --tag instead"])
    if "todo" in tags and iso_date >= TODO_RULE_SINCE:
        missing = [label for label, pattern in (("a date", TODO_DATE), ('a "done when" condition', TODO_DONE))
                   if not pattern.search(text)]
        if missing:
            raise NotesError([f"a #todo note needs {' and '.join(missing)}"])
    return f"{text} {' '.join('#' + tag for tag in tags)}"


def insert(notes_text, iso_date, block):
    """Return notes_text with block at the top of its date section, or None when it is already there."""
    headings = list(HEADING.finditer(notes_text))
    same = next((match for match in headings if match[1] == iso_date), None)
    if same:
        after = next((match.start() for match in headings if match.start() > same.start()), len(notes_text))
        section = notes_text[same.end():after]
        if block in [part.strip() for part in re.split(r"\n\s*\n", section)]:
            return None
        return f"{notes_text[:same.end()]}\n\n{block}\n\n{notes_text[same.end():].lstrip(chr(10))}"
    older = next((match for match in headings if match[1] < iso_date), None)
    if older:
        return f"{notes_text[:older.start()]}## {iso_date}\n\n{block}\n\n{notes_text[older.start():]}"
    return f"{notes_text.rstrip()}\n\n## {iso_date}\n\n{block}\n"


def add_note(text, tags, iso_date, agent_written=False, check=False, root=ROOT):
    """Return (block, changed); write data/notes.md unless check."""
    try:
        date.fromisoformat(iso_date)
    except ValueError:
        raise NotesError([f"date {iso_date!r} must be YYYY-MM-DD"]) from None
    if not tags:
        raise NotesError(["give at least one --tag"])
    registry = load_registry(root / "data" / "note-tags.json")
    tags = canonical_tags([*tags, *(["agent-written"] if agent_written else [])], registry)
    block = note_block(text, tags, iso_date)
    path = root / "data" / "notes.md"
    updated = insert(path.read_text(encoding="utf-8"), iso_date, block)
    if updated is None:
        return block, False
    parse_notes(updated, registry, "data/notes.md")
    if not check:
        path.write_text(updated, encoding="utf-8")
    return block, True


def parser():
    result = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    result.add_argument("--text", required=True, help="the note, one paragraph without tags; - reads stdin")
    result.add_argument("--tag", action="append", default=[], help="a canonical tag or alias; repeat for each")
    result.add_argument("--date", default=date.today().isoformat(), help="YYYY-MM-DD (default today)")
    result.add_argument("--agent-written", action="store_true", help="add #agent-written")
    result.add_argument("--check", action="store_true", help="write nothing; print what it would add")
    result.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    return result


def main(argv=None):
    args = parser().parse_args(argv)
    text = sys.stdin.read() if args.text == "-" else args.text
    try:
        block, changed = add_note(text, args.tag, args.date, args.agent_written, args.check, args.root)
    except NotesError as exc:
        for diagnostic in exc.diagnostics:
            print(f"[FAIL] {diagnostic}", file=sys.stderr)
        return 1
    if not changed:
        print(f"the {args.date} section already has this note; nothing to do")
    else:
        print(f"{'would add' if args.check else 'added'} to ## {args.date}:\n{block}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
