#!/usr/bin/env python3
"""Check a deployment for stray files and for console errors (Stage B).

Both checks read the upload set: the `scripts/site_diff.py` rows saved to a
file, of which every `A` and `M` path was uploaded.

`paths` fails on an AppleDouble `._*` file, any other dotfile or dot directory
(apart from the public `.well-known/`), or a private path (a home or temporary
directory, an editor or Python leftover) in the upload set and, given an SSH
host alias and the document root on it, in the live document root listed over
SSH, this deploy's `fm-` backup directory included.

`checksums` compares the sha256 of each uploaded file in the live document
root, read over SSH, with the file the build wrote to `site/`.

`served` fetches each uploaded file from the public site over HTTPS and fails
unless it answers HTTP 200 with the bytes the build wrote to `site/`, so each
changed page carries its new date, title, tags and records, and `corpus.json`
its new revisions. Any other file over 20 MB, such as a pinned download, gets a
`HEAD` request whose `Content-Length` must equal the local size instead.

`console` loads each changed HTML page once in a headless browser
(`chrome-devtools-axi`, in its own named session) and fails on any console
error, such as an uncaught exception or a resource that failed to load. The
console reports a failed load without its URL, so the page's network list is
read only to name it. It opens the site root first: a deck that rewrites its
URL as it loads fails to open as the first page of a new browser session.

Each check prints `stage,check,status,evidence` rows, as skills/verify.md
reports them, and exits non-zero on a failure. The host, document root and
site URL are resolved at deploy time; never commit them.

Usage:
  scripts/site_diff.py <base> > uploads.txt
  scripts/deploy_check.py paths uploads.txt [--host ALIAS --docroot PATH]
  scripts/deploy_check.py checksums uploads.txt --host ALIAS --docroot PATH
  scripts/deploy_check.py served uploads.txt --base-url https://<site>/
  scripts/deploy_check.py console uploads.txt --base-url https://<site>/
"""

import argparse
import hashlib
import os
import re
import shlex
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path, PurePosixPath

SITE = Path(__file__).resolve().parents[1] / "site"

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
# Other files larger than this, such as pinned model weights, are checked by size with a HEAD
# request, not downloaded again; pages and data are always compared byte for byte.
LARGE_BYTES = 20 * 1024 * 1024
CONTENT_SUFFIXES = {".html", ".json", ".md", ".txt", ".xml", ".toon"}
# Both live-file checks compare with the deployed build, which must still be in site/.
NOT_BUILT = "not in site/; rebuild the deployed commit first"
# Paths per ssh call, well under the remote command-line limit.
CHECKSUM_BATCH = 200


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


def sha256(path):
    digest = hashlib.sha256()
    with open(path, "rb") as handle:
        for block in iter(lambda: handle.read(1 << 20), b""):
            digest.update(block)
    return digest.hexdigest()


def remote_checksums(host, docroot, paths):
    """{path: sha256} of ``paths`` under ``docroot`` on ``host``; a missing file is left out."""
    sums = {}
    for start in range(0, len(paths), CHECKSUM_BATCH):
        batch = " ".join(shlex.quote(path) for path in paths[start:start + CHECKSUM_BATCH])
        command = f"cd -- {shlex.quote(docroot)} && sha256sum -- {batch}"
        result = subprocess.run(["ssh", "-n", "--", host, command], capture_output=True, text=True)
        # sha256sum exits non-zero when a file is missing; the missing file is reported below.
        for line in result.stdout.splitlines():
            digest, _, path = line.partition("  ")
            sums[path] = digest
        if not result.stdout and result.returncode:
            raise SystemExit(f"reading checksums failed: {result.stderr.strip()}")
    return sums


def checksum_problems(paths, remote, local=sha256):
    problems = []
    for path in paths:
        if not (SITE / path).is_file():
            problems.append((path, NOT_BUILT))
        elif path not in remote:
            problems.append((path, "missing in the document root"))
        elif remote[path] != local(SITE / path):
            problems.append((path, "live sha256 differs from site/"))
    return problems


def fetch(url, method="GET"):
    """(status, headers, body) of ``url``; the body is empty for HEAD."""
    request = urllib.request.Request(url, method=method, headers={"Cache-Control": "no-cache"})
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            return response.status, response.headers, response.read() if method == "GET" else b""
    except urllib.error.HTTPError as error:
        return error.code, error.headers, b""


def served_problem(path, base_url, http=fetch):
    """Why the public copy of ``path`` is not the file the build wrote, or None."""
    local = SITE / path
    if not local.is_file():
        return NOT_BUILT
    url = base_url.rstrip("/") + "/" + path
    size = local.stat().st_size
    if size > LARGE_BYTES and local.suffix not in CONTENT_SUFFIXES:
        status, headers, _ = http(url, "HEAD")
        if status != 200:
            return f"HTTP {status}"
        length = headers.get("Content-Length")
        return None if length == str(size) else f"Content-Length {length}, expected {size}"
    status, _, body = http(url, "GET")
    if status != 200:
        return f"HTTP {status}"
    return None if hashlib.sha256(body).hexdigest() == sha256(local) else "served bytes differ from site/"


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
        # The tool prints its error on stdout, as `error: ...`, and leaves stderr empty.
        detail = result.stderr.strip() or next(
            (line for line in result.stdout.splitlines() if line.startswith("error:")), result.stdout.strip())
        raise RuntimeError(f"chrome-devtools-axi {args[0]} failed: {detail}")
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


def check_checksums(args):
    sent = uploads(args.uploads.read().splitlines())
    remote = remote_checksums(args.host, args.docroot, sent)
    return report("checksums", checksum_problems(sent, remote), f"{len(sent)} uploaded files match site/")


def check_served(args, http=fetch):
    sent = uploads(args.uploads.read().splitlines())
    failures = [(path, reason) for path in sent if (reason := served_problem(path, args.base_url, http))]
    return report("served", failures, f"{len(sent)} uploaded files served with HTTP 200 and the built bytes")


def check_console(args, browser=axi):
    urls = page_urls(uploads(args.uploads.read().splitlines()), args.base_url)
    failures = []
    if urls:
        # A deck that rewrites its URL as it loads fails to open as the first page of a new
        # session ("No page is currently selected"); the site root opens first to start it.
        try:
            browser("open", args.base_url)
        except RuntimeError as error:
            return report("console-errors", [(args.base_url, str(error))], "")
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
    checksums = commands.add_parser("checksums", help="fail unless the live files have the built sha256")
    checksums.add_argument("uploads", type=argparse.FileType(), help="saved site_diff.py rows")
    checksums.add_argument("--host", required=True, help="SSH host alias of the live site")
    checksums.add_argument("--docroot", required=True, help="document root on the host")
    served = commands.add_parser("served", help="fail unless HTTPS serves each upload with the built bytes")
    served.add_argument("uploads", type=argparse.FileType(), help="saved site_diff.py rows")
    served.add_argument("--base-url", required=True, help="public URL of the site root")
    console = commands.add_parser("console", help="fail on console errors in changed pages")
    console.add_argument("uploads", type=argparse.FileType(), help="saved site_diff.py rows")
    console.add_argument("--base-url", required=True, help="public URL of the site root")
    args = parser.parse_args()
    if args.command == "paths":
        if bool(args.host) != bool(args.docroot):
            parser.error("--host and --docroot go together")
        sys.exit(0 if check_paths(args) else 1)
    if args.command == "checksums":
        sys.exit(0 if check_checksums(args) else 1)
    if args.command == "served":
        sys.exit(0 if check_served(args) else 1)
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
