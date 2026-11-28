#!/usr/bin/env python3
"""Refuse Edit, Write or NotebookEdit calls targeting dist/."""

import json
import os
import sys
from pathlib import Path


def targets_dist(file_path, project_dir):
    if not file_path:
        return False
    p = Path(file_path)
    root = Path(project_dir).resolve() if project_dir else Path.cwd().resolve()
    resolved = p.resolve() if p.is_absolute() else (root / p).resolve()
    dist = (root / "dist").resolve()
    return resolved == dist or dist in resolved.parents


def main():
    try:
        data = json.load(sys.stdin)
        tool_input = data["tool_input"]
        if not isinstance(tool_input, dict):
            raise TypeError("tool_input is not an object")
        path = tool_input.get("file_path") or tool_input.get("notebook_path") or ""
    except (ValueError, KeyError, TypeError):
        print("guard-dist: could not read the target path, so it is refused.", file=sys.stderr)
        return 2
    if targets_dist(str(path), os.environ.get("CLAUDE_PROJECT_DIR", "")):
        print("dist/ is build output. Change the sources instead.", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
