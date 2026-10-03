#!/usr/bin/env python3
"""Scaffold a blog post: write data/blog/<slug>.md with valid front matter and an empty body.

The front matter holds title, date, summary, category, tags and slug, as schema/blog.schema.json
requires. Each tag must already be known: used by another blog post, or a canonical tag or alias in
data/note-tags.json (an alias becomes its canonical tag). A tag for a genuinely new topic is a
judgment, so it needs --new-tag. The post body is left for the author.

The script refuses an invalid slug or date, an unknown tag, and an existing post with other front
matter. Run again with the same arguments, it changes nothing. With --check it writes nothing and
prints the file it would write.

Usage: scripts/new_post.py SLUG --title T --summary S --category C --tag TAG [--tag TAG ...]
       [--date YYYY-MM-DD] [--new-tag TAG] [--check]
"""

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path

import yaml

from notes import NotesError, load_registry, split_frontmatter

ROOT = Path(__file__).resolve().parent.parent
SLUG = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
TAG = re.compile(r"^[a-z0-9][a-z0-9_.-]*$")


class PostError(ValueError):
    pass


def blog_tags(blog_dir):
    """Every tag that an existing post's front matter names."""
    known = set()
    for path in sorted(blog_dir.glob("*.md")):
        try:
            meta = yaml.safe_load(split_frontmatter(path.read_text(encoding="utf-8"))[0]) or {}
        except (ValueError, yaml.YAMLError):
            continue
        tags = meta.get("tags") or []
        known.update(str(tag).strip() for tag in (tags if isinstance(tags, list) else str(tags).split(",")))
    known.discard("")
    return known


def resolve_tags(tags, new_tags, root):
    """The post's tags, aliases replaced by their canonical tag, in order and without repeats."""
    registry = load_registry(root / "data" / "note-tags.json")
    known = blog_tags(root / "data" / "blog") | set(registry["tags"])
    resolved = []
    for tag in tags:
        if not TAG.fullmatch(tag):
            raise PostError(f"tag {tag!r} must be lowercase letters, digits, '_', '.' or '-'")
        tag = registry["aliases"].get(tag, tag)
        definition = registry["tags"].get(tag)
        if definition and definition["replaced_by"]:
            tag = definition["replaced_by"]
        if tag not in known and tag not in new_tags:
            raise PostError(f"unknown tag {tag!r}; reuse a known tag, or pass --new-tag {tag} for a new topic")
        resolved.append(tag)
    unused = sorted(set(new_tags) - set(resolved))
    if unused:
        raise PostError(f"--new-tag {', '.join(unused)} is not among the --tag values")
    return list(dict.fromkeys(resolved))


def render(slug, title, post_date, summary, category, tags):
    quote = lambda value: json.dumps(value, ensure_ascii=False)  # noqa: E731
    return "\n".join([
        "---",
        f"title: {quote(title)}",
        f"date: {quote(post_date)}",
        f"summary: {quote(summary)}",
        f"category: {quote(category)}",
        f"tags: {quote(', '.join(tags))}",
        f"slug: {slug}",
        "---",
        "",
        "",
    ])


def scaffold(args, root=ROOT):
    """Return (path, text, changed); write the post unless --check."""
    if not SLUG.fullmatch(args.slug):
        raise PostError(f"slug {args.slug!r} must be lowercase words joined by '-'")
    try:
        date.fromisoformat(args.date)
    except ValueError:
        raise PostError(f"date {args.date!r} must be YYYY-MM-DD") from None
    for field in ("title", "summary", "category"):
        if not getattr(args, field).strip():
            raise PostError(f"--{field} must not be empty")
    if not args.tag:
        raise PostError("give at least one --tag")
    tags = resolve_tags(args.tag, args.new_tag, root)
    text = render(args.slug, args.title.strip(), args.date, args.summary.strip(), args.category.strip(), tags)
    path = root / "data" / "blog" / f"{args.slug}.md"
    if path.exists():
        current = path.read_text(encoding="utf-8")
        if current.startswith(text.rstrip("\n") + "\n"):
            return path, text, False
        raise PostError(f"{path.relative_to(root)} already exists with other front matter; edit it by hand")
    if not args.check:
        path.write_text(text, encoding="utf-8")
    return path, text, True


def parser():
    result = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    result.add_argument("slug", help="the post's slug, such as my-new-post")
    result.add_argument("--title", required=True)
    result.add_argument("--summary", required=True, help="one or two sentences for the blog index")
    result.add_argument("--category", required=True)
    result.add_argument("--tag", action="append", default=[], help="a known tag; repeat for each tag")
    result.add_argument("--new-tag", action="append", default=[], help="allow this --tag value as a new topic")
    result.add_argument("--date", default=date.today().isoformat(), help="YYYY-MM-DD (default today)")
    result.add_argument("--check", action="store_true", help="write nothing; print the file it would write")
    result.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    return result


def main(argv=None):
    args = parser().parse_args(argv)
    try:
        path, text, changed = scaffold(args, args.root)
    except (PostError, NotesError) as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1
    label = path.relative_to(args.root)
    if not changed:
        print(f"{label} already has this front matter; nothing to do")
    elif args.check:
        print(f"would write {label}:\n{text}", end="")
    else:
        print(f"wrote {label}; write the post body below the front matter")
    return 0


if __name__ == "__main__":
    sys.exit(main())
