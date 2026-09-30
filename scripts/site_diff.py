#!/usr/bin/env python3
"""List the generated files that differ between a base commit's site and site/.

site/ is not committed, so the deploy upload set cannot come from a Git diff.
This script recreates the site of the base commit (the build that is live) and
compares it, file by file, with the current build in site/. Each line is a
`git diff --name-status` row: `A` (added), `M` (modified) or `D` (no longer
generated), then the path; site/corpus.json is listed first.

A base commit from before site/ left Git still carries its committed output,
which is used as is. Any later base commit is rebuilt from `git archive`; that
build reads each external visualization at the commit pinned in the base's own
data/visuals/<slug>.pin, from the visuals checkout that scripts/build.py uses.

Usage: scripts/build.py && scripts/site_diff.py <base-commit>
"""

import argparse
import filecmp
import os
import subprocess
import sys
import tempfile
from pathlib import Path

from build import OUT, ROOT, resolve_visuals_repo


def git(*args, cwd=ROOT):
    return subprocess.run(
        ["git", *args], cwd=cwd, check=True, capture_output=True, text=True
    ).stdout


def extract(repo, commit, destination, *paths):
    """Write the files of ``commit`` (limited to ``paths``) into ``destination``."""
    destination.mkdir(parents=True)
    archive = subprocess.Popen(
        ["git", "archive", "--format=tar", commit, *paths], cwd=repo, stdout=subprocess.PIPE
    )
    subprocess.run(["tar", "-x", "-C", str(destination)], stdin=archive.stdout, check=True)
    archive.stdout.close()
    if archive.wait() != 0:
        raise SystemExit(f"git archive {commit} failed in {repo}")


def base_site(commit, workdir):
    """Return the site/ tree that ``commit`` produces."""
    project = workdir / "base"
    if git("ls-tree", "--name-only", commit, "site").strip():
        extract(ROOT, commit, project, "site")
        return project / "site"
    extract(ROOT, commit, project)
    subprocess.run(
        [sys.executable, "scripts/build.py"],
        cwd=project,
        check=True,
        stdout=subprocess.DEVNULL,
        env=os.environ | {"VISUALS_REPO": str(resolve_visuals_repo())},
    )
    return project / "site"


def changes(before_root, after_root):
    """Rows of (status, path) for files that differ between two site trees."""
    def files(root):
        return {path.relative_to(root).as_posix() for path in root.rglob("*") if path.is_file()}

    before, after = files(before_root), files(after_root)
    rows = []
    for path in sorted(before | after):
        if path not in after:
            rows.append(("D", path))
        elif path not in before:
            rows.append(("A", path))
        elif not filecmp.cmp(before_root / path, after_root / path, shallow=False):
            rows.append(("M", path))
    # Upload the corpus first: every page reads it by revision.
    return sorted(rows, key=lambda row: row[1] != "corpus.json")


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("base", help="commit whose build is live, usually the last deployed commit")
    args = parser.parse_args()
    if not OUT.is_dir():
        raise SystemExit("site/ is missing; run scripts/build.py first")
    try:
        commit = git("rev-parse", "--verify", f"{args.base}^{{commit}}").strip()
    except subprocess.CalledProcessError:
        raise SystemExit(f"Unknown base commit: {args.base}") from None
    with tempfile.TemporaryDirectory() as directory:
        rows = changes(base_site(commit, Path(directory)), OUT)
    for status, path in rows:
        print(f"{status}\tsite/{path}")


if __name__ == "__main__":
    main()
