#!/usr/bin/env python3
"""Rename a tag, a blog front-matter field or a CSS custom property across the repository's sources.

Each rename edits parsed structure, never raw text: YAML through the node positions PyYAML's composer
reports, notes through scripts/notes.py's trailing-tag syntax, JSON through a parse and an identical
re-dump, and CSS through a small tokenizer that skips comments and strings. Formatting outside the
renamed token stays byte for byte.

  tag OLD NEW        data/note-tags.json (the key and every replaced_by), the trailing tags in
                     data/notes.md, blog front-matter tags, media focus_tags, and the tags of
                     data/visuals/*.yaml and data/resources/*.yaml. Paper-link tags are left alone:
                     scripts/paper_tags.py infers them.
  field OLD NEW      a front-matter key in data/blog/*.md. Code that reads the field (schema/,
                     scripts/) is listed, not changed: change it in the same pull request.
  css-token OLD NEW  a custom property such as fade-ease (the leading -- is optional): CSS in static/css/ and in the <style>
                     blocks and style attributes of templates/*.html, and the JavaScript string literals
                     in static/js/ that are exactly the name. Other mentions, such as tests, are listed.

It refuses an invalid name and a NEW name already in use. With --check it writes nothing and lists the
files it would change. Run again, it changes nothing.

Usage: scripts/rename.py {tag,field,css-token} OLD NEW [--check]
"""

import argparse
import json
import re
import sys
from pathlib import Path

import yaml

from notes import TRAILING_TAGS, split_frontmatter

ROOT = Path(__file__).resolve().parent.parent
TAG = re.compile(r"^[a-z0-9][a-z0-9_.-]*$")
FIELD = re.compile(r"^[a-z_][a-z0-9_]*$")
TOKEN = re.compile(r"^--[A-Za-z0-9_-]+$")
NOTE_TAG = re.compile(r"#([A-Za-z0-9][A-Za-z0-9_.-]*)")
# CSS: a comment, a string, or a custom-property name, in the order a tokenizer meets them.
CSS_TOKENS = re.compile(r"/\*.*?\*/|\"(?:\\.|[^\"\\])*\"|'(?:\\.|[^'\\])*'|--[A-Za-z0-9_-]+", re.DOTALL)
STYLE_BLOCK = re.compile(r"(<style\b[^>]*>)(.*?)(</style>)", re.DOTALL | re.IGNORECASE)
STYLE_ATTR = re.compile(r"(\sstyle=)(\"[^\"]*\"|'[^']*')", re.IGNORECASE)


class RenameError(ValueError):
    pass


# ---------- YAML ----------

def scalar_source(value, style):
    """YAML source for a string scalar, in the quoting style of the scalar it replaces."""
    if style == '"':
        return json.dumps(value, ensure_ascii=False)
    if style == "'" or yaml.safe_load(value) != value:
        return "'" + value.replace("'", "''") + "'"
    return value


def splice(text, edits):
    """Apply (start, end, replacement) edits, which must not overlap."""
    for start, end, replacement in sorted(edits, reverse=True):
        text = text[:start] + replacement + text[end:]
    return text


def tag_list_edits(node, old, new, offset):
    """Edits that rename tag old in a YAML tags value: a comma-separated string or a sequence."""
    edits = []
    if isinstance(node, yaml.ScalarNode) and isinstance(node.value, str):
        parts = re.split(r"(\s*,\s*)", node.value)
        if old in parts[::2]:
            if new in parts[::2]:
                raise RenameError(f"line {node.start_mark.line + 1} already has tag {new!r}")
            value = "".join(new if index % 2 == 0 and part == old else part for index, part in enumerate(parts))
            edits.append((offset + node.start_mark.index, offset + node.end_mark.index, scalar_source(value, node.style)))
    elif isinstance(node, yaml.SequenceNode):
        values = [item.value for item in node.value if isinstance(item, yaml.ScalarNode)]
        if old in values and new in values:
            raise RenameError(f"line {node.start_mark.line + 1} already has tag {new!r}")
        for item in node.value:
            if isinstance(item, yaml.ScalarNode) and item.value == old:
                edits.append((offset + item.start_mark.index, offset + item.end_mark.index, scalar_source(new, item.style)))
    return edits


def mappings(node):
    """Every mapping node of a YAML document: the document itself, or the records of a list."""
    if isinstance(node, yaml.MappingNode):
        yield node
    elif isinstance(node, yaml.SequenceNode):
        for item in node.value:
            yield from mappings(item)


def yaml_tag_edits(text, keys, old, new, offset=0):
    edits = []
    for mapping in mappings(yaml.compose(text)):
        for key, value in mapping.value:
            if isinstance(key, yaml.ScalarNode) and key.value in keys:
                edits += tag_list_edits(value, old, new, offset)
    return edits


def front_matter(path):
    """(full text, front matter, offset of the front matter in the text) of a Markdown file."""
    text = path.read_text(encoding="utf-8")
    frontmatter, _ = split_frontmatter(text)
    return text, frontmatter, 3


# ---------- tag ----------

def rename_registry(text, old, new):
    data = json.loads(text)
    if json.dumps(data, indent=2, ensure_ascii=False) + "\n" != text:
        raise RenameError("data/note-tags.json is not in its usual 2-space format; reformat it first")
    tags = data["tags"]
    if old not in tags:
        return text
    if new in tags or any(new in definition["aliases"] for definition in tags.values()):
        raise RenameError(f"data/note-tags.json already has tag or alias {new!r}")
    data["tags"] = {new if name == old else name: definition for name, definition in tags.items()}
    for definition in data["tags"].values():
        if definition["replaced_by"] == old:
            definition["replaced_by"] = new
    return json.dumps(data, indent=2, ensure_ascii=False) + "\n"


def rename_note_tags(text, old, new):
    """Rename #old among the trailing tags of each note; tags in the prose stay."""
    blocks = re.split(r"(\n\s*\n)", text)
    for index in range(0, len(blocks), 2):
        match = TRAILING_TAGS.search(blocks[index])
        if not match:
            continue
        tags = NOTE_TAG.findall(match[1])
        if old not in tags:
            continue
        if new in tags:
            raise RenameError(f"a note already has both #{old} and #{new}: {blocks[index][:60]}...")
        renamed = NOTE_TAG.sub(lambda tag: f"#{new}" if tag[1] == old else tag[0], match[1])
        blocks[index] = blocks[index][:match.start(1)] + renamed + blocks[index][match.end(1):]
    return "".join(blocks)


def plan_tag(old, new, root):
    for name in (old, new):
        if not TAG.fullmatch(name):
            raise RenameError(f"tag {name!r} must be lowercase letters, digits, '_', '.' or '-'")
    plans = []
    registry = root / "data" / "note-tags.json"
    plans.append((registry, rename_registry(registry.read_text(encoding="utf-8"), old, new)))
    notes = root / "data" / "notes.md"
    plans.append((notes, rename_note_tags(notes.read_text(encoding="utf-8"), old, new)))
    for path in sorted((root / "data" / "blog").glob("*.md")):
        text, frontmatter, offset = front_matter(path)
        plans.append((path, splice(text, yaml_tag_edits(frontmatter, {"tags"}, old, new, offset))))
    for folder, keys in (("podcasts", {"focus_tags"}), ("visuals", {"tags"}), ("resources", {"tags"})):
        for path in sorted((root / "data" / folder).glob("*.yaml")):
            text = path.read_text(encoding="utf-8")
            plans.append((path, splice(text, yaml_tag_edits(text, keys, old, new))))
    return plans, []


# ---------- field ----------

def plan_field(old, new, root):
    for name in (old, new):
        if not FIELD.fullmatch(name):
            raise RenameError(f"field {name!r} must be a lowercase identifier")
    plans = []
    for path in sorted((root / "data" / "blog").glob("*.md")):
        text, frontmatter, offset = front_matter(path)
        node = yaml.compose(frontmatter)
        edits = []
        if isinstance(node, yaml.MappingNode):
            keys = [key.value for key, _ in node.value if isinstance(key, yaml.ScalarNode)]
            if old in keys and new in keys:
                raise RenameError(f"{path.relative_to(root)} already has field {new!r}")
            edits = [(offset + key.start_mark.index, offset + key.end_mark.index, new)
                     for key, _ in node.value if isinstance(key, yaml.ScalarNode) and key.value == old]
        plans.append((path, splice(text, edits)))
    readers = mentions(root, ("schema/*.json", "scripts/*.py", "static/js/*.js", "templates/*.html"),
                       re.compile(rf"\b{re.escape(old)}\b"))
    return plans, readers


# ---------- css-token ----------

def rename_css(css, old, new):
    return CSS_TOKENS.sub(lambda match: new if match[0] == old else match[0], css)


def rename_html(text, old, new):
    text = STYLE_BLOCK.sub(lambda match: match[1] + rename_css(match[2], old, new) + match[3], text)
    return STYLE_ATTR.sub(lambda match: match[1] + match[2][0] + rename_css(match[2][1:-1], old, new) + match[2][-1], text)


def rename_js_literals(text, old, new):
    return re.sub(rf"([\"'`]){re.escape(old)}\1", lambda match: f"{match[1]}{new}{match[1]}", text)


def plan_css_token(old, new, root):
    old, new = ("--" + name.removeprefix("--") for name in (old, new))
    for name in (old, new):
        if not TOKEN.fullmatch(name):
            raise RenameError(f"CSS token {name!r} must look like --name")
    plans = []
    for path in sorted((root / "static" / "css").glob("*.css")):
        text = path.read_text(encoding="utf-8")
        tokens = {match[0] for match in CSS_TOKENS.finditer(text)}
        if old in tokens and new in tokens:
            raise RenameError(f"{path.relative_to(root)} already uses {new}")
        plans.append((path, rename_css(text, old, new)))
    for path in sorted((root / "templates").glob("*.html")):
        plans.append((path, rename_html(path.read_text(encoding="utf-8"), old, new)))
    for path in sorted((root / "static" / "js").glob("*.js")):
        plans.append((path, rename_js_literals(path.read_text(encoding="utf-8"), old, new)))
    changed = {path for path, text in plans if text != path.read_text(encoding="utf-8")}
    others = [mention for mention in mentions(root, ("static/**/*", "templates/*", "scripts/*", "tests/*"),
                                              re.compile(rf"{re.escape(old)}(?![A-Za-z0-9_-])"))
              if root / mention.split(":", 1)[0] not in changed]
    return plans, others


def mentions(root, patterns, pattern):
    """path:line of each line under the glob patterns that matches pattern."""
    found = []
    for glob in patterns:
        for path in sorted(root.glob(glob)):
            if not path.is_file():
                continue
            try:
                lines = path.read_text(encoding="utf-8").splitlines()
            except UnicodeDecodeError:
                continue
            found += [f"{path.relative_to(root)}:{number}" for number, line in enumerate(lines, 1) if pattern.search(line)]
    return list(dict.fromkeys(found))


PLANNERS = {"tag": plan_tag, "field": plan_field, "css-token": plan_css_token}


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("kind", choices=sorted(PLANNERS))
    parser.add_argument("old")
    parser.add_argument("new")
    parser.add_argument("--check", action="store_true", help="write nothing; list the files it would change")
    parser.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    if args.old == args.new:
        print("[FAIL] OLD and NEW are the same", file=sys.stderr)
        return 1
    try:
        plans, others = PLANNERS[args.kind](args.old, args.new, args.root)
    except (RenameError, ValueError, yaml.YAMLError) as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1
    changed = [(path, text) for path, text in plans if path.read_text(encoding="utf-8") != text]
    for path, text in changed:
        if not args.check:
            path.write_text(text, encoding="utf-8")
        print(f"{'would change' if args.check else 'changed'} {path.relative_to(args.root)}")
    if not changed:
        print(f"no source names {args.old}; nothing to do")
    for mention in others:
        print(f"not changed, review by hand: {mention} mentions {args.old}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
