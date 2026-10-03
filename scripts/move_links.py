#!/usr/bin/env python3
"""Rewrite the links in the agent and rule files after a file or folder moves from OLD to NEW.

The files are AGENTS.md, SKILLS.md, CONTRIBUTING.md, CONTEXT.md, README.md, llms.txt, docs/**/*.md
and skills/**/*.md. In each one, a Markdown link whose target resolves to OLD, or to a path inside
the folder OLD, gets the relative path to NEW from that file, with its #anchor kept; a
https://github.com/yujieteo/site/blob/main/ link and a backticked path such as `scripts/old.py` (in
inline code or a code block) change the same way. OLD and NEW are paths from the repository root.
A file that moves itself (OLD, or a file in the folder OLD) also gets its relative links rewritten
from its new folder, so that each still reaches the same file; a link that already resolves from
there stays.

The script only rewrites links: move the file with `git mv` too. tests/test_agent_docs.py then
checks that every link resolves. With --check it writes nothing and lists the files it would change.
Run again, it changes nothing.

Usage: scripts/move_links.py OLD NEW [--check]
"""

import argparse
import os
import re
import sys
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
REPO_URL = "https://github.com/yujieteo/site/blob/main/"
DOC_NAMES = ("AGENTS.md", "SKILLS.md", "CONTRIBUTING.md", "CONTEXT.md", "README.md", "llms.txt")
LINK = re.compile(r"(\]\()([^)\s]+)(\))")
CODE = re.compile(r"```.*?```|`[^`\n]+`", re.DOTALL)


def docs(root):
    found = [root / name for name in DOC_NAMES if (root / name).is_file()]
    return found + sorted((root / "docs").rglob("*.md")) + sorted((root / "skills").rglob("*.md"))


def moved(path, old, new):
    """The new repository path of ``path`` after OLD moves to NEW, or None when it does not move."""
    if path == old:
        return new
    if path.startswith(old.rstrip("/") + "/"):
        return new.rstrip("/") + "/" + path[len(old.rstrip("/")) + 1:]
    return None


def exists_after(path, old, new, root):
    """Whether the repository path exists once OLD moves to NEW, whether or not git mv has run."""
    if (root / old).exists():
        back = moved(path, new, old)
        if back:
            return (root / back).exists()
        if moved(path, old, new):
            return False
    return (root / path).exists()


def repo_path(absolute, root):
    """The repository path of an absolute path, or None outside the repository."""
    return PurePosixPath(Path(absolute).relative_to(root)).as_posix() if Path(absolute).is_relative_to(root) else None


def rewrite_link(target, place, old, new, root):
    """The link target from a file whose folder is place, (before the move, after it)."""
    before, after = place
    parts = urlsplit(target)
    fragment = f"#{parts.fragment}" if parts.fragment else ""
    if target.startswith(REPO_URL):
        path = moved(parts.path.removeprefix("/yujieteo/site/blob/main/"), old, new)
        return f"{REPO_URL}{path}{fragment}" if path else target
    if parts.scheme or parts.netloc or not parts.path:
        return target
    if before != after:
        current = repo_path(os.path.normpath(after / parts.path), root)
        if current and exists_after(current, old, new, root):
            return target
    resolved = repo_path(os.path.normpath(before / parts.path), root)
    if not resolved:
        return target
    path = moved(resolved, old, new)
    if not path:
        if before == after or not exists_after(resolved, old, new, root):
            return target
        path = resolved
    relative = PurePosixPath(os.path.relpath(root / path, after)).as_posix()
    return relative + ("/" if parts.path.endswith("/") and not relative.endswith("/") else "") + fragment


def rewrite_code(code, old, new):
    pattern = re.compile(rf"(?<![\w./-]){re.escape(old.rstrip('/'))}(?=/|(?![\w.-]))")
    return pattern.sub(new.rstrip("/"), code)


def rewrite(text, place, old, new, root):
    pieces, last = [], 0
    for match in CODE.finditer(text):
        prose = text[last:match.start()]
        pieces.append(LINK.sub(lambda link: link[1] + rewrite_link(link[2], place, old, new, root) + link[3], prose))
        pieces.append(rewrite_code(match[0], old, new))
        last = match.end()
    pieces.append(LINK.sub(lambda link: link[1] + rewrite_link(link[2], place, old, new, root) + link[3], text[last:]))
    return "".join(pieces)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("old", help="the old path from the repository root, such as skills/old.md")
    parser.add_argument("new", help="the new path from the repository root")
    parser.add_argument("--check", action="store_true", help="write nothing; list the files it would change")
    parser.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    root = args.root.resolve()
    old, new = (PurePosixPath(value).as_posix() for value in (args.old, args.new))
    if old == new or any(value.startswith(("/", "..")) for value in (old, new)):
        print("[FAIL] OLD and NEW must be two different paths from the repository root", file=sys.stderr)
        return 1
    changed = 0
    for doc in docs(root):
        path = repo_path(doc, root)
        before = (moved(path, new, old) if not (root / old).exists() else None) or path
        place = ((root / before).parent, (root / (moved(before, old, new) or before)).parent)
        text = doc.read_text(encoding="utf-8")
        updated = rewrite(text, place, old, new, root)
        if updated != text:
            changed += 1
            if not args.check:
                doc.write_text(updated, encoding="utf-8")
            print(f"{'would change' if args.check else 'changed'} {doc.relative_to(root)}")
    if not changed:
        print(f"no agent or rule file links to {old}; nothing to do")
    if not (root / new).exists():
        print(f"note: {new} does not exist yet; move it with git mv {old} {new}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
