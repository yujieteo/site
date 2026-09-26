#!/usr/bin/env python3
"""Validate and search the canonical daily notes."""

import argparse
import hashlib
import json
import re
import sys
import unicodedata
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
NOTES_PATH = ROOT / "data" / "notes.md"
TAGS_PATH = ROOT / "data" / "note-tags.json"
TAG_NAME = re.compile(r"^[a-z0-9][a-z0-9_.-]*$")
HEADING = re.compile(r"^##\s+(\d{4}-\d{2}-\d{2})\s*$", re.MULTILINE)
TRAILING_TAGS = re.compile(
    r"\s+((?:#[A-Za-z0-9][A-Za-z0-9_.-]*(?:\s+|$))+)$"
)


class NotesError(ValueError):
    def __init__(self, diagnostics):
        self.diagnostics = tuple(diagnostics)
        super().__init__("\n".join(self.diagnostics))


def note_id(iso_date, content):
    digest = hashlib.sha256(f"{iso_date}\0{content}".encode("utf-8")).hexdigest()
    return f"note:{digest}"


def _read_json(path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise NotesError([f"{path}: {exc}"]) from exc


def load_registry(path=TAGS_PATH):
    data = _read_json(Path(path))
    errors = []
    if not isinstance(data, dict) or data.get("version") != 1:
        errors.append(f"{path}: version must be 1")
    classes = data.get("classes", {}) if isinstance(data, dict) else {}
    if not isinstance(classes, dict) or not classes or any(
        not isinstance(name, str) or not isinstance(description, str) or not description.strip()
        for name, description in classes.items()
    ):
        errors.append(f"{path}: classes must map names to non-empty descriptions")
        classes = {}
    arxiv = data.get("arxiv_math", {}) if isinstance(data, dict) else {}
    categories = arxiv.get("categories", []) if isinstance(arxiv, dict) else []
    if (
        not isinstance(arxiv, dict)
        or not isinstance(arxiv.get("source"), str)
        or not isinstance(arxiv.get("checked"), str)
        or not isinstance(categories, list)
        or any(not isinstance(item, str) or item != item.lower() for item in categories)
    ):
        errors.append(f"{path}: arxiv_math requires source, checked, and lowercase categories")
        categories = []
    tags = data.get("tags", {}) if isinstance(data, dict) else {}
    if not isinstance(tags, dict):
        errors.append(f"{path}: tags must be an object keyed by canonical tag")
        tags = {}

    aliases = {}
    required = {"class", "description", "aliases", "replaced_by"}
    for name, definition in tags.items():
        label = f"{path}: tag {name!r}"
        if not isinstance(name, str) or not TAG_NAME.fullmatch(name):
            errors.append(f"{label} must be lowercase and match {TAG_NAME.pattern}")
        if not isinstance(definition, dict) or set(definition) != required:
            errors.append(f"{label} must contain exactly {', '.join(sorted(required))}")
            continue
        class_name = definition["class"]
        if class_name not in classes:
            errors.append(f"{label} has unknown class {class_name!r}")
        if not isinstance(definition["description"], str) or not definition["description"].strip():
            errors.append(f"{label} needs a description")
        tag_aliases = definition["aliases"]
        if not isinstance(tag_aliases, list):
            errors.append(f"{label} aliases must be a list")
            tag_aliases = []
        for alias in tag_aliases:
            if not isinstance(alias, str) or not TAG_NAME.fullmatch(alias):
                errors.append(f"{label} alias {alias!r} must be lowercase")
            elif alias in tags or alias in aliases:
                errors.append(f"{label} alias {alias!r} collides with another tag or alias")
            else:
                aliases[alias] = name
        replacement = definition["replaced_by"]
        if replacement is not None and not isinstance(replacement, str):
            errors.append(f"{label} replaced_by must be a tag or null")
        if name.startswith("math.") and name not in categories:
            errors.append(f"{label} is not in the offline arXiv mathematics taxonomy")
        if name.startswith("math.") and class_name != "arxiv-math":
            errors.append(f"{label} must use class 'arxiv-math'")
        if class_name == "arxiv-math" and not name.startswith("math."):
            errors.append(f"{label} uses arxiv-math without a math.* category")

    for name, definition in tags.items():
        if not isinstance(definition, dict) or set(definition) != required:
            continue
        replacement = definition["replaced_by"]
        if replacement is not None:
            target = tags.get(replacement)
            if target is None:
                errors.append(f"{path}: tag {name!r} replaces to unknown tag {replacement!r}")
            elif isinstance(target, dict) and target.get("replaced_by") is not None:
                errors.append(f"{path}: tag {name!r} replacement may not form a chain")
    if errors:
        raise NotesError(errors)
    return {"tags": tags, "aliases": aliases}


def _split_frontmatter(text, path, errors):
    if not text.startswith("---"):
        errors.append(f"{path}: missing YAML frontmatter")
        return "", text
    parts = text.split("---", 2)
    if len(parts) != 3:
        errors.append(f"{path}: unterminated YAML frontmatter")
        return "", text
    return parts[1], parts[2].lstrip("\n")


def parse_notes(text, registry, path="data/notes.md"):
    errors = []
    frontmatter, body = _split_frontmatter(text, path, errors)
    matches = list(HEADING.finditer(body))
    leading = body[:matches[0].start()].strip() if matches else body.strip()
    if not matches:
        errors.append(f"{path}: no dated note sections")
    elif leading and not re.fullmatch(r"(?:<!--.*?-->\s*)+", leading, re.DOTALL):
        errors.append(f"{path}: content must begin with a ## YYYY-MM-DD heading")

    entries = []
    seen_dates = set()
    for section_index, match in enumerate(matches):
        iso_date = match.group(1)
        section_label = f"{path}:{body.count(chr(10), 0, match.start()) + 1} [{iso_date}]"
        try:
            parsed_date = date.fromisoformat(iso_date)
        except ValueError:
            errors.append(f"{section_label}: invalid date")
            parsed_date = None
        if iso_date in seen_dates:
            errors.append(f"{section_label}: duplicate date")
        seen_dates.add(iso_date)
        end = matches[section_index + 1].start() if section_index + 1 < len(matches) else len(body)
        section = body[match.end():end]
        blocks = [block.strip() for block in re.split(r"\n\s*\n", section) if block.strip()]
        notes = []
        search_start = 0
        for note_index, block in enumerate(blocks, 1):
            block_start = section.find(block, search_start)
            search_start = block_start + len(block)
            line = body.count("\n", 0, match.end() + block_start) + 1
            label = f"{path}:{line} [{iso_date} note {note_index}]"
            tag_match = TRAILING_TAGS.search(block)
            raw_tags = re.findall(r"#([A-Za-z0-9][A-Za-z0-9_.-]*)", tag_match.group(1)) if tag_match else []
            content = block[:tag_match.start()].rstrip() if tag_match else block
            if not raw_tags:
                errors.append(f"{label}: at least one trailing canonical tag is required")
            seen_tags = set()
            for tag in raw_tags:
                if tag in seen_tags:
                    errors.append(f"{label}: duplicate tag #{tag}")
                seen_tags.add(tag)
                normalized = tag.lower()
                if tag != normalized:
                    errors.append(f"{label}: #{tag} must use lowercase canonical spelling #{normalized}")
                    continue
                if tag in registry["aliases"]:
                    errors.append(f"{label}: #{tag} is an alias; use #{registry['aliases'][tag]}")
                    continue
                definition = registry["tags"].get(tag)
                if definition is None:
                    errors.append(f"{label}: unknown tag #{tag}; add it to data/note-tags.json if genuinely new")
                elif definition["replaced_by"] is not None:
                    errors.append(f"{label}: #{tag} is deprecated; use #{definition['replaced_by']}")
            notes.append({"id": note_id(iso_date, content), "content": content, "tags": raw_tags})
        entries.append({
            "date": iso_date,
            "display_date": parsed_date.strftime("%-d %B %Y") if parsed_date else iso_date,
            "notes": notes,
        })
    if errors:
        raise NotesError(errors)
    entries.sort(key=lambda entry: entry["date"], reverse=True)
    return {"frontmatter": frontmatter, "entries": entries}


def load_notes(notes_path=NOTES_PATH, registry_path=TAGS_PATH):
    notes_path = Path(notes_path)
    registry = load_registry(registry_path)
    try:
        text = notes_path.read_text(encoding="utf-8")
    except OSError as exc:
        raise NotesError([f"{notes_path}: {exc}"]) from exc
    return parse_notes(text, registry, str(notes_path)), registry


def _normalize(value):
    return unicodedata.normalize("NFKC", value).casefold()


def _flatten(document):
    return [note | {"date": entry["date"]} for entry in document["entries"] for note in entry["notes"]]


def search_notes(document, terms=(), tags=(), match_any=False, limit=10):
    atoms = [("text", _normalize(term)) for term in terms if term]
    atoms += [("tag", tag) for tag in tags]
    if not atoms:
        raise NotesError(["search requires text or --tag"])
    matches = []
    for note in _flatten(document):
        prose = _normalize(note["content"])
        outcomes = [value in prose if kind == "text" else value in note["tags"] for kind, value in atoms]
        if (any(outcomes) if match_any else all(outcomes)):
            excerpt = re.sub(r"\s+", " ", note["content"]).strip()
            if len(excerpt) > 160:
                excerpt = excerpt[:157].rstrip() + "..."
            matches.append({key: note[key] for key in ("id", "date", "tags")} | {"excerpt": excerpt})
    return {"total": len(matches), "shown": min(len(matches), limit), "items": matches[:limit]}


def get_note(document, record_id):
    for note in _flatten(document):
        if note["id"] == record_id:
            return {key: note[key] for key in ("id", "date", "tags", "content")}
    raise NotesError([f"no note has id {record_id}"])


def _resolve_tags(values, registry):
    resolved = []
    for value in values:
        tag = _normalize(value)
        tag = registry["aliases"].get(tag, tag)
        definition = registry["tags"].get(tag)
        if definition is None:
            raise NotesError([f"unknown tag {value!r}"])
        resolved.append(definition["replaced_by"] or tag)
    return list(dict.fromkeys(resolved))


def _print_search(result, as_json):
    if as_json:
        print(json.dumps(result, ensure_ascii=False, separators=(",", ":")))
        return
    print(f"total={result['total']} shown={result['shown']}")
    if not result["items"]:
        print("records[0]")
        return
    print(f"records[{result['shown']}]{{id,date,tags,excerpt}}")
    for item in result["items"]:
        print(f"{item['id']}\t{item['date']}\t{','.join(item['tags'])}\t{item['excerpt']}")


def _print_note(note, as_json):
    if as_json:
        print(json.dumps(note, ensure_ascii=False, separators=(",", ":")))
        return
    print(f"id={note['id']} date={note['date']} tags={','.join(note['tags'])}")
    print(note["content"])


def _parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)
    subparsers.add_parser("validate", help="validate notes and canonical tags")
    search = subparsers.add_parser("search", help="search note prose and tags")
    search.add_argument("text", nargs="*", help="text terms; quote phrases to keep them together")
    search.add_argument("--tag", action="append", default=[], help="canonical tag or known alias")
    search.add_argument("--any", action="store_true", help="match any text term or tag")
    search.add_argument("--limit", type=int, default=10)
    search.add_argument("--json", action="store_true")
    get = subparsers.add_parser("get", help="retrieve one complete note")
    get.add_argument("id")
    get.add_argument("--json", action="store_true")
    return parser


def main(argv=None):
    args = _parser().parse_args(argv)
    try:
        document, registry = load_notes()
        if args.command == "validate":
            print(f"Valid notes: {sum(len(entry['notes']) for entry in document['entries'])}; canonical tags: {len(registry['tags'])}.")
        elif args.command == "search":
            if not 1 <= args.limit <= 100:
                raise NotesError(["--limit must be from 1 to 100"])
            terms = [term for value in args.text for term in _normalize(value).split()]
            result = search_notes(document, terms, _resolve_tags(args.tag, registry), args.any, args.limit)
            _print_search(result, args.json)
        else:
            _print_note(get_note(document, args.id), args.json)
    except NotesError as exc:
        for diagnostic in exc.diagnostics:
            print(f"[FAIL] {diagnostic}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
