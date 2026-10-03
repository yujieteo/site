#!/usr/bin/env python3
"""papers: an AXI (https://github.com/kunchenguid/axi) CLI over the paper links.

Output is TOON on stdout. Exit codes: 0 success (including empty results),
1 error, 2 usage error. Ids are 1-based positions in data/paper-links/*.yaml.
"""

import os
import sys
from collections import Counter
from pathlib import Path

VERSION = "1.0.0"

# --version fast path: answer before importing anything heavy (AXI principle 10).
if __name__ == "__main__" and len(sys.argv) == 2 and sys.argv[1] in {"-v", "-V", "--version"}:
    print(VERSION)
    sys.exit(0)

sys.path.insert(0, str(Path(__file__).resolve().parent))
from paper_tags import arxiv_id, is_arxiv_class, load_papers, primary_class  # noqa: E402
from toon import encode  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
EXPORT = ROOT / "exports" / "paper-links.toon"
DESCRIPTION = "Browse, search, and export the site's tagged paper links"
CMD = "python scripts/papers.py"
TRUNCATE = 800
DEFAULT_LIMIT = 50
LIST_FIELDS = ["id", "title", "class"]
ALL_FIELDS = ["id", "title", "url", "category", "class", "tags", "authors", "year", "arxiv", "note"]

COMMANDS = {
    "home": {"flags": {}, "usage": f"{CMD}", "summary": "Overview: counts, top classes, and latest links",
             "examples": [f"{CMD}"]},
    "list": {"flags": {"--tag": "", "--class": "", "--limit": str(DEFAULT_LIMIT), "--fields": ",".join(LIST_FIELDS)},
             "usage": f"{CMD} list [--tag <tag>] [--class <arxiv-class>] [--limit N] [--fields a,b]",
             "summary": "List links, optionally filtered by tag or arXiv class",
             "examples": [f"{CMD} list --class math.NT", f"{CMD} list --tag modular-forms --limit 200",
                          f"{CMD} list --fields id,title,url,tags"]},
    "search": {"flags": {"--limit": str(DEFAULT_LIMIT), "--fields": ",".join(LIST_FIELDS)},
               "usage": f'{CMD} search "<query>" [--limit N] [--fields a,b]',
               "summary": "Search titles, notes, and tags (all words must match)",
               "examples": [f'{CMD} search "prismatic cohomology"', f'{CMD} search langlands --limit 10']},
    "view": {"flags": {"--full": None},
             "usage": f"{CMD} view <id> [--full]",
             "summary": "Show one link with its tags and note (note truncated unless --full)",
             "examples": [f"{CMD} view 42", f"{CMD} view 42 --full"]},
    "tags": {"flags": {"--limit": "100", "--kind": "all"},
             "usage": f"{CMD} tags [--kind class|topic|all] [--limit N]",
             "summary": "Tag counts, arXiv classes first",
             "examples": [f"{CMD} tags --kind class", f"{CMD} tags --limit 500"]},
    "export": {"flags": {"--output": str(EXPORT.relative_to(ROOT)), "--check": None},
               "usage": f"{CMD} export [--output PATH] [--check]",
               "summary": "Write the lossless TOON export of all links",
               "examples": [f"{CMD} export", f"{CMD} export --check"]},
}


class UsageError(Exception):
    def __init__(self, message, command=None):
        super().__init__(message)
        self.command = command


class NotFound(Exception):
    pass


def emit(document):
    print(encode(document))


def bin_path():
    path = str(Path(sys.argv[0]).resolve())
    home = str(Path.home())
    return "~" + path[len(home):] if path.startswith(home + os.sep) else path


# --- data -----------------------------------------------------------------

def load():
    records = []
    for index, record in enumerate(load_papers(), start=1):
        tags = record.get("tags") or [record.get("category", "General")]
        if isinstance(tags, str):
            tags = [t.strip() for t in tags.split(",") if t.strip()]
        records.append({
            "id": index,
            "title": record["title"],
            "url": record["url"],
            "category": record.get("category", ""),
            "class": primary_class(tags),
            "tags": tags,
            "authors": record.get("authors"),
            "year": record.get("year"),
            "arxiv": arxiv_id(record["url"]),
            "note": " ".join(str(record.get("note", "")).split()),
        })
    return records


def row(record, fields):
    out = {}
    for field in fields:
        value = record[field]
        if field == "tags":
            value = " ".join(value)
        elif field == "authors":
            value = " and ".join(value) if value else None
        out[field] = value
    return out


# --- argument parsing -----------------------------------------------------

def parse(command, args):
    spec = COMMANDS[command]["flags"]
    options = {flag: default for flag, default in spec.items()}
    for flag, default in spec.items():
        if default is None:
            options[flag] = False
    positionals = []
    i = 0
    while i < len(args):
        arg = args[i]
        if arg.startswith("--"):
            name, eq, inline = arg.partition("=")
            if name not in spec:
                valid = ", ".join(spec) or "(none)"
                raise UsageError(f"unknown flag {name} for `{command}`; valid flags: {valid} (--help always allowed)", command)
            if spec[name] is None:
                if eq:
                    raise UsageError(f"{name} takes no value", command)
                options[name] = True
            else:
                if eq:
                    options[name] = inline
                elif i + 1 < len(args):
                    i += 1
                    options[name] = args[i]
                else:
                    raise UsageError(f"{name} requires a value", command)
        elif arg.startswith("-") and arg != "-":
            raise UsageError(f"unknown flag {arg} for `{command}`", command)
        else:
            positionals.append(arg)
        i += 1
    return options, positionals


def positive_int(value, flag, command):
    try:
        number = int(value)
    except ValueError:
        number = 0
    if number < 1:
        raise UsageError(f"{flag} must be a positive integer, got {value!r}", command)
    return number


def field_list(value, command):
    fields = [f.strip() for f in value.split(",") if f.strip()]
    unknown = [f for f in fields if f not in ALL_FIELDS]
    if unknown or not fields:
        raise UsageError(f"unknown field(s) {', '.join(unknown) or '(empty)'}; valid fields: {','.join(ALL_FIELDS)}", command)
    return fields


# --- commands -------------------------------------------------------------

def aggregates(records):
    return Counter(t for r in records for t in r["tags"] if is_arxiv_class(t))


def cmd_home(options, positionals, records):
    if positionals:
        raise UsageError(f"unknown command {positionals[0]!r}", "home")
    classes = aggregates(records)
    latest = records[-10:][::-1]
    emit({
        "bin": bin_path(),
        "description": DESCRIPTION,
        "papers": len(records),
        "arxiv": sum(1 for r in records if r["arxiv"]),
        "top_classes": [{"class": c, "count": n} for c, n in classes.most_common(10)],
        "latest": [row(r, LIST_FIELDS) for r in latest],
        "help": [
            f"Run `{CMD} list --class <arxiv-class>` or `--tag <tag>` to filter",
            f'Run `{CMD} search "<query>"` to search titles, notes, and tags',
            f"Run `{CMD} view <id>` for tags and the note",
            f"Run `{CMD} tags` for all {len(set(t for r in records for t in r['tags']))} tags with counts",
        ],
    })


def matches(records, options):
    tag = options.get("--tag") or ""
    arxiv_class = options.get("--class") or ""
    out = records
    if tag:
        out = [r for r in out if tag in r["tags"]]
    if arxiv_class:
        out = [r for r in out if arxiv_class in r["tags"] and is_arxiv_class(arxiv_class)]
    return out


def emit_list(selected, total_label, options, command, extra_help):
    limit = positive_int(options["--limit"], "--limit", command)
    fields = field_list(options["--fields"], command)
    shown = selected[:limit]
    if not selected:
        emit({"papers": f"0 {total_label} found", "help": extra_help[1:] or [f"Run `{CMD} tags` to see valid tags"]})
        return
    document = {
        "count": f"{len(shown)} of {len(selected)} total",
        "papers": [row(r, fields) for r in shown],
    }
    hints = []
    if len(shown) < len(selected):
        hints.append(f"Run the same command with `--limit {len(selected)}` to see all {len(selected)}")
    hints.append(f"Run `{CMD} view <id>` for full details")
    hints.extend(extra_help[:1])
    document["help"] = hints
    emit(document)


def cmd_list(options, positionals, records):
    if positionals:
        raise UsageError(f"unexpected argument {positionals[0]!r}", "list")
    if options["--class"] and not is_arxiv_class(options["--class"]):
        raise UsageError(f"--class expects an arXiv class such as math.NT, got {options['--class']!r}", "list")
    selected = matches(records, options)
    label = "papers"
    if options["--tag"]:
        label += f" tagged {options['--tag']}"
    if options["--class"]:
        label += f" in {options['--class']}"
    emit_list(selected, label, options, "list",
              [f"Run `{CMD} list --fields id,title,url,tags` for more columns",
               f"Run `{CMD} tags` to see valid tags and classes"])


def cmd_search(options, positionals, records):
    if not positionals:
        raise UsageError("a query is required", "search")
    words = " ".join(positionals).lower().split()
    scored = []
    for r in records:
        title = r["title"].lower()
        haystack = " ".join([title, r["note"].lower(), " ".join(r["tags"]).lower()])
        if all(w in haystack for w in words):
            scored.append((-sum(w in title for w in words), r["id"], r))
    selected = [r for _, _, r in sorted(scored, key=lambda item: item[:2])]
    emit_list(selected, f'papers matching "{" ".join(positionals)}"', options, "search",
              [f"Run `{CMD} search \"<query>\" --fields id,title,class,tags` to see tags",
               f"Run `{CMD} search \"<fewer words>\"` to broaden the search"])


def cmd_view(options, positionals, records):
    if len(positionals) != 1:
        raise UsageError("exactly one <id> is required", "view")
    try:
        index = int(positionals[0])
    except ValueError:
        raise UsageError(f"<id> must be a number, got {positionals[0]!r}", "view")
    if not 1 <= index <= len(records):
        raise NotFound(f"no paper with id {index}; ids run from 1 to {len(records)}")
    record = records[index - 1]
    paper = row(record, [f for f in ALL_FIELDS if f != "note"])
    paper = {k: v for k, v in paper.items() if v is not None}
    note = record["note"]
    truncated = not options["--full"] and len(note) > TRUNCATE
    if truncated:
        paper["note"] = note[:TRUNCATE].rstrip() + f"... (truncated, {len(note)} chars total)"
    else:
        paper["note"] = note
    document = {"paper": paper}
    if truncated:
        document["help"] = [f"Run `{CMD} view {index} --full` to see the complete note"]
    emit(document)


def cmd_tags(options, positionals, records):
    if positionals:
        raise UsageError(f"unexpected argument {positionals[0]!r}", "tags")
    kind = options["--kind"]
    if kind not in {"class", "topic", "all"}:
        raise UsageError(f"--kind must be class, topic, or all, got {kind!r}", "tags")
    limit = positive_int(options["--limit"], "--limit", "tags")
    counts = Counter(t for r in records for t in r["tags"])
    items = [(t, n) for t, n in counts.items()
             if kind == "all" or (kind == "class") == is_arxiv_class(t)]
    items.sort(key=lambda item: (not is_arxiv_class(item[0]), -item[1], item[0]))
    shown = items[:limit]
    document = {
        "count": f"{len(shown)} of {len(items)} total",
        "tags": [{"tag": t, "kind": "class" if is_arxiv_class(t) else "topic", "papers": n} for t, n in shown],
        "help": [f"Run `{CMD} list --tag <tag>` or `list --class <class>` to see papers"],
    }
    if len(shown) < len(items):
        document["help"].insert(0, f"Run `{CMD} tags --limit {len(items)}` to see all {len(items)}")
    emit(document)


def export_document(records):
    classes = aggregates(records)
    topics = Counter(t for r in records for t in r["tags"] if not is_arxiv_class(t))
    return {
        "description": "Paper links from data/paper-links/*.yaml, tagged with arXiv subject classes and topics",
        "source": "data/paper-links/paper-links.yaml",
        "generator": f"{CMD} export",
        "count": len(records),
        "arxiv": sum(1 for r in records if r["arxiv"]),
        "classes": [{"class": c, "count": n} for c, n in classes.most_common()],
        "top_topics": [{"topic": t, "count": n} for t, n in topics.most_common(50)],
        "help": [
            "Fields per paper: id,title,url,category,class,tags,authors,year,arxiv,note",
            "tags are space-separated; class is the primary arXiv class; authors are joined by ' and '",
            f"Run `{CMD}` for a compact view, `{CMD} view <id>` for one paper",
        ],
        "papers": [row(r, ALL_FIELDS) for r in records],
    }


def cmd_export(options, positionals, records):
    if positionals:
        raise UsageError(f"unexpected argument {positionals[0]!r}", "export")
    output = Path(options["--output"])
    if not output.is_absolute():
        output = ROOT / output
    text = encode(export_document(records))
    if options["--check"]:
        current = output.read_text(encoding="utf-8") if output.exists() else None
        if current != text:
            raise NotFound(f"{output.relative_to(ROOT) if output.is_relative_to(ROOT) else output} is out of date; run `{CMD} export`")
        emit({"export": f"{len(records)} papers up to date"})
        return
    output.parent.mkdir(parents=True, exist_ok=True)
    if output.exists() and output.read_text(encoding="utf-8") == text:
        emit({"export": f"{len(records)} papers already up to date (no-op)"})
        return
    output.write_text(text, encoding="utf-8")
    emit({"export": f"wrote {len(records)} papers", "path": str(output)})


HANDLERS = {"home": cmd_home, "list": cmd_list, "search": cmd_search, "view": cmd_view,
            "tags": cmd_tags, "export": cmd_export}


def help_document(command):
    spec = COMMANDS[command]
    flags = [f"{flag} (default: {default if default is not None else 'off'})" for flag, default in spec["flags"].items()]
    return {"command": command, "summary": spec["summary"], "usage": spec["usage"],
            "flags": flags or "none", "examples": spec["examples"]}


def main(argv=None):
    args = list(sys.argv[1:] if argv is None else argv)
    if args and args[0] in {"-v", "-V", "--version"} and len(args) == 1:
        print(VERSION)
        return 0
    if args and args[0] in HANDLERS and args[0] != "home":
        command, rest = args[0], args[1:]
    else:
        command, rest = "home", args
    if "--help" in rest or (command == "home" and rest[:1] == ["help"]):
        if command == "home":
            emit({"bin": bin_path(), "description": DESCRIPTION, "version": VERSION,
                  "commands": [{"command": name, "usage": spec["usage"]} for name, spec in COMMANDS.items()],
                  "help": [f"Run `{CMD} <command> --help` for flags and examples"]})
        else:
            emit(help_document(command))
        return 0
    try:
        options, positionals = parse(command, rest)
        HANDLERS[command](options, positionals, load())
    except UsageError as exc:
        emit({"error": str(exc), "help": COMMANDS[exc.command or command]["usage"]})
        return 2
    except NotFound as exc:
        emit({"error": str(exc), "help": f"Run `{CMD} list` or `{CMD} search \"<query>\"` to find ids"})
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
