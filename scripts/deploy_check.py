#!/usr/bin/env python3
"""Check a deployment for stray files and for console errors (Stage B).

Both checks read the upload set: the `scripts/site_diff.py` rows saved to a
file, of which every `A` and `M` path was uploaded.

`paths` fails on an AppleDouble `._*` file, any other dotfile or dot directory
(apart from the public `.well-known/`), or a private path (a home or temporary
directory, an editor or Python leftover) in the upload set and, given an SSH
host alias and the document root on it, in the live document root listed over
SSH, this deploy's `fm-` backup directory included.

`console` loads each changed HTML page once in a headless browser
(`chrome-devtools-axi`, in its own named session) and fails on any console
error, such as an uncaught exception or a resource that failed to load. The
console reports a failed load without its URL, so the page's network list is
read only to name it.

Each check prints `stage,check,status,evidence` rows, as skills/verify.md
reports them, and exits non-zero on a failure. The host, document root and
site URL are resolved at deploy time; never commit them.

Usage:
  scripts/site_diff.py <base> > uploads.txt
  scripts/deploy_check.py paths uploads.txt [--host ALIAS --docroot PATH]
  scripts/deploy_check.py console uploads.txt --base-url https://<site>/
"""

import argparse
import os
import re
import shlex
import subprocess
import sys
from pathlib import PurePosixPath

# The one dot directory a web root may serve: RFC 8615 well-known URIs.
PUBLIC_DOT_DIRS = {".well-known"}
# Top-level folders that only appear when an absolute local path was uploaded.
PRIVATE_ROOTS = {"Users", "home", "private", "tmp", "var", "Volumes", "root"}
# Folders and files a build or editor leaves behind, never part of the site.
PRIVATE_NAMES = {"__pycache__", "node_modules", "Thumbs.db", "desktop.ini"}
PRIVATE_SUFFIXES = (".pyc", ".swp", ".swo", ".bak", ".orig", ".rej", ".tmp", "~")
BROWSER_SESSION = "site-stage-b"
CONSOLE_ERROR = re.compile(r"^msgid=\d+ \[error\] (.*)$")
# The console reports a failed load without its URL; the network list names it.
RESOURCE_ERROR = "Failed to load resource:"
REQUEST = re.compile(r"^reqid=\d+ \S+ (\S+) \[(.*)\]")
LOADED = re.compile(r"^[123]\d\d$|^pending$")


def uploads(rows):
    """The uploaded site paths (relative to site/) from `site_diff.py` rows."""
    paths = []
    for row in rows:
        if not row.strip():
            continue
        status, path = row.rstrip("\n").split("\t", 1)
        if status in {"A", "M"}:
            paths.append(path.removeprefix("site/"))
    return paths


def problem(path):
    """Why ``path`` (relative to the document root) must not be served, or None."""
    parts = PurePosixPath(path).parts
    if not parts:
        return None
    if parts[0] in PRIVATE_ROOTS:
        return "private path"
    for part in parts:
        if part.startswith("._"):
            return "AppleDouble file"
        if part.startswith(".") and part not in PUBLIC_DOT_DIRS:
            return "dotfile"
        if part in PRIVATE_NAMES or part.endswith(PRIVATE_SUFFIXES):
            return "private path"
    return None


def problems(paths):
    return [(path, reason) for path in paths if (reason := problem(path))]


def remote_listing(host, docroot):
    """Every file and folder under ``docroot`` on ``host``, relative to it."""
    command = f"cd -- {shlex.quote(docroot)} && find . -mindepth 1"
    result = subprocess.run(
        ["ssh", "-n", "--", host, command], capture_output=True, text=True
    )
    if result.returncode:
        raise SystemExit(f"listing the document root failed: {result.stderr.strip()}")
    return [line.removeprefix("./") for line in result.stdout.splitlines() if line]


def page_urls(paths, base_url):
    """The URL of each changed HTML page, relative to ``base_url``."""
    base = base_url.rstrip("/") + "/"
    return [base + path for path in paths if path.endswith(".html")]


def failed_requests(network):
    """(URL, status) of each request in `chrome-devtools-axi network` output that did not load."""
    return [
        (match[1], match[2].removeprefix("failed - ")) for line in network.splitlines()
        if (match := REQUEST.match(line)) and not LOADED.match(match[2])
    ]


def console_errors(console, network):
    """The console error messages in `chrome-devtools-axi console` output, each failed
    load named by the URLs of the failed requests with its status."""
    failed = failed_requests(network)
    errors = []
    for line in console.splitlines():
        if not (match := CONSOLE_ERROR.match(line)):
            continue
        message = match[1]
        if message.startswith(RESOURCE_ERROR):
            urls = [url for url, status in failed if status in message]
            if urls:
                message += f" [{', '.join(urls)}]"
        errors.append(message)
    return errors


def axi(*args):
    result = subprocess.run(["chrome-devtools-axi", *args], capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(f"chrome-devtools-axi {args[0]} failed: {result.stderr.strip()}")
    return result.stdout


def page_errors(url, browser=axi):
    """Load ``url`` once and return its console errors."""
    browser("open", url)
    return console_errors(browser("console", "--type", "error", "--limit", "100"),
                          browser("network", "--limit", "1000"))


def report(check, failures, passed):
    if failures:
        for subject, reason in failures:
            print(f"B,{check},FAIL,{subject}: {reason}")
    else:
        print(f"B,{check},PASS,{passed}")
    return not failures


def check_paths(args):
    sent = uploads(args.uploads.read().splitlines())
    ok = report("upload-paths", problems(sent), f"{len(sent)} uploaded paths")
    if ok and args.host:
        live = remote_listing(args.host, args.docroot)
        ok = report("docroot-paths", problems(live), f"{len(live)} live paths")
    elif args.host:
        print("B,docroot-paths,NOT RUN,upload-paths failed")
    return ok


def check_console(args, browser=axi):
    urls = page_urls(uploads(args.uploads.read().splitlines()), args.base_url)
    failures = []
    for url in urls:
        try:
            failures += [(url, error) for error in page_errors(url, browser)]
        except RuntimeError as error:
            failures.append((url, str(error)))
    return report("console-errors", failures, f"{len(urls)} changed pages")


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    commands = parser.add_subparsers(dest="command", required=True)
    paths = commands.add_parser("paths", help="fail on dotfiles and private paths")
    paths.add_argument("uploads", type=argparse.FileType(), help="saved site_diff.py rows")
    paths.add_argument("--host", help="SSH host alias of the live site")
    paths.add_argument("--docroot", help="document root on the host")
    console = commands.add_parser("console", help="fail on console errors in changed pages")
    console.add_argument("uploads", type=argparse.FileType(), help="saved site_diff.py rows")
    console.add_argument("--base-url", required=True, help="public URL of the site root")
    args = parser.parse_args()
    if args.command == "paths":
        if bool(args.host) != bool(args.docroot):
            parser.error("--host and --docroot go together")
        sys.exit(0 if check_paths(args) else 1)
    # An own browser session keeps the check off any shared browser tab; stop it afterwards.
    own_session = "CHROME_DEVTOOLS_AXI_SESSION" not in os.environ
    if own_session:
        os.environ["CHROME_DEVTOOLS_AXI_SESSION"] = BROWSER_SESSION
    try:
        ok = check_console(args)
    finally:
        if own_session:
            subprocess.run(["chrome-devtools-axi", "stop"], capture_output=True)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
