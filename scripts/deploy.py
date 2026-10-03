#!/usr/bin/env python3
"""Run the whole deploy playbook (skills/playbooks/deploy.md) in one call and print one TOON report.

`plan` (the default) is a dry run. It checks that the work tree is clean and that CI passed on the
commit, builds the site with `VISUALS_REPO`, derives the upload set with `scripts/site_diff.py`
against the pair of commits that is live (read from the deploy log), checks the upload set for stray
paths, and compares the sha256 of every built file with the live document root, read over SSH. A
live file that differs from the build but is not in the upload set means the base was wrong: the
plan fails, because the deploy would leave that file stale.

`run --execute` does the same and then deploys: it bundles the upload set with
`COPYFILE_DISABLE=1 tar`, uploads it into this deploy's own `fm-` backup directory on the host,
verifies its sha256 there, and installs each file atomically (a temporary sibling with mode 0644,
the prior file preserved in the backup, then a rename), `corpus.json` first. It then runs Stage B
(skills/verify-post-deploy.md): the live sha256 of every built file, stray paths in the document
root, every upload served over HTTPS with the built bytes, and console errors on each changed page.
A Stage B failure on an uploaded file restores every preserved prior file. A pass removes this
deploy's backup directory and nothing else. Each run appends one line to the deploy log.

`report` prints the report of the last deploy in the log (or `--deploy ID`). `backups` lists the
backup directories on the host; it never removes one.

The verdict and the exit code follow every built file, not only the upload set, unless
`--scoped-verdict` is given; the report then says so and counts the files outside the scope.
Exit codes: 0 pass, 1 fail, 2 usage or environment error (missing configuration, unknown commit,
missing site/, SSH unreachable, a filter that matches nothing).

The host (an SSH alias, which also supplies the user), the document root and the site URL are
runtime configuration, never committed: flags, then the environment (SITE_DEPLOY_HOST,
SITE_DEPLOY_DOCROOT, SITE_DEPLOY_BASE_URL, SITE_DEPLOY_BACKUPS, SITE_DEPLOY_STATE), then the TOML
file named by SITE_DEPLOY_CONFIG (default ~/.config/teoyujie-site/deploy.toml) with the keys host,
docroot, base_url, backups, state_dir and visuals_repo. Full logs, the upload rows and the full
report go to one directory per deploy under the state directory, whose path the output names.

Usage:
  scripts/deploy.py [plan] [--base COMMIT --visuals-base COMMIT] [--scoped-verdict]
  scripts/deploy.py run --execute [--base COMMIT --visuals-base COMMIT] [--scoped-verdict]
  scripts/deploy.py report [--deploy ID]
  scripts/deploy.py backups [--match GLOB]
"""

import argparse
import datetime
import fnmatch
import json
import os
import re
import shlex
import subprocess
import sys
import tomllib
from pathlib import Path

import deploy_check
import toon

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CONFIG = "~/.config/teoyujie-site/deploy.toml"
DEFAULT_STATE = "~/.local/state/teoyujie-site/deploys"
# Relative to the SSH user's home on the host.
DEFAULT_BACKUPS = "site-backups"
WORKFLOW = "CI"
# Every backup directory this tool creates starts with this; a pass removes only its own.
PREFIX = "fm-deploy-"
BUILT_FROM = re.compile(r"from yujieteo/visuals (\S+)")
STAMP = re.compile(r"(\d{8}-\d{6})")
HEREDOC = "FM_DEPLOY_EOF"
# Failing items printed on stdout; the report file lists every one.
SHOWN_FAILURES = 20
SSH_UNREACHABLE = 255


class UsageError(Exception):
    """A usage or environment error: exit 2, with next-step hints."""

    def __init__(self, message, hints=()):
        super().__init__(message)
        self.hints = list(hints)


def site():
    # Read at call time: the tests point deploy_check.SITE at a small fake build.
    return deploy_check.SITE


# --- Configuration -------------------------------------------------------------------------------

def load_config(args):
    path = Path(os.environ.get("SITE_DEPLOY_CONFIG", DEFAULT_CONFIG)).expanduser()
    file = {}
    if path.is_file():
        try:
            file = tomllib.loads(path.read_text(encoding="utf-8"))
        except tomllib.TOMLDecodeError as error:
            raise UsageError(f"{path}: {error}") from None
    elif "SITE_DEPLOY_CONFIG" in os.environ:
        raise UsageError(f"SITE_DEPLOY_CONFIG names a missing file: {path}")

    def value(key, default=None):
        flag = getattr(args, key, None)
        return flag or os.environ.get(f"SITE_DEPLOY_{key.upper()}") or file.get(key) or default

    return {
        "host": value("host"),
        "docroot": value("docroot"),
        "base_url": value("base_url"),
        "backups": value("backups", DEFAULT_BACKUPS),
        "state": Path(value("state", file.get("state_dir", DEFAULT_STATE))).expanduser(),
        "visuals_repo": os.environ.get("VISUALS_REPO") or file.get("visuals_repo"),
        "config": path,
    }


def require(config, *keys):
    missing = [key for key in keys if not config[key]]
    if missing:
        flags = ", ".join("--" + key.replace("_", "-") for key in missing)
        raise UsageError(f"missing configuration: {flags}", [
            f"Pass {flags}, set SITE_DEPLOY_{missing[0].upper()}, or add {missing[0]} = \"...\" to {config['config']}",
        ])


# --- Local steps ---------------------------------------------------------------------------------

class Log:
    """One file per deploy that holds the full output of every command it runs."""

    def __init__(self, path):
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)

    def write(self, text):
        with open(self.path, "a", encoding="utf-8") as handle:
            handle.write(text if text.endswith("\n") else text + "\n")

    def run(self, command, **kwargs):
        kwargs.setdefault("capture_output", True)
        kwargs.setdefault("text", True)
        result = subprocess.run(command, **kwargs)
        shown = command if isinstance(command, str) else shlex.join(str(part) for part in command)
        self.write(f"$ {shown}\n[exit {result.returncode}]")
        for stream in (result.stdout, result.stderr):
            if stream and isinstance(stream, str):
                self.write(stream)
        return result


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)


def resolve_commit(ref, label):
    result = git("rev-parse", "--verify", "--quiet", f"{ref}^{{commit}}")
    if result.returncode:
        raise UsageError(f"unknown {label} commit: {ref}", ["Run `git fetch origin`, then pass a commit that exists"])
    return result.stdout.strip()


def tree_problem():
    status = git("status", "--porcelain", "--untracked-files=no").stdout.strip()
    return f"{len(status.splitlines())} uncommitted changes to tracked files" if status else None


def ci_problem(commit, log):
    """(why CI is not green on ``commit`` or None, a next-step hint or None)."""
    try:
        result = log.run(["gh", "run", "list", "--commit", commit, "--workflow", WORKFLOW, "--limit", "1",
                          "--json", "status,conclusion,url"], cwd=ROOT)
    except FileNotFoundError:
        raise UsageError("gh is not installed", ["Install the GitHub CLI and run `gh auth login`"]) from None
    if result.returncode:
        raise UsageError(f"gh run list failed: {result.stderr.strip()}", ["Run `gh auth status`"])
    runs = json.loads(result.stdout or "[]")
    if not runs:
        return (f"no {WORKFLOW} run for this commit",
                "Push the commit and open a pull request: CI runs only on pull requests and main")
    run = runs[0]
    if run["status"] != "completed":
        return f"{WORKFLOW} run is {run['status']}: {run['url']}", f"Run `gh run watch {run['url'].rsplit('/', 1)[-1]}`, then plan again"
    if run["conclusion"] != "success":
        return f"{WORKFLOW} run concluded {run['conclusion']}: {run['url']}", "Fix CI on this commit before a deploy"
    return None, None


def build(config, log):
    """(visuals commit or None, why the build failed or None)."""
    env = dict(os.environ)
    if config["visuals_repo"]:
        env["VISUALS_REPO"] = config["visuals_repo"]
    result = log.run([sys.executable, "scripts/build.py"], cwd=ROOT, env=env)
    if result.returncode:
        return None, f"scripts/build.py exited {result.returncode}"
    match = BUILT_FROM.search(result.stdout)
    if not match:
        return None, "scripts/build.py did not print the visuals commit it read"
    if match[1].endswith("+dirty"):
        return match[1], "the build read uncommitted visuals changes; build from a clean visuals checkout"
    return match[1], None


def upload_rows(base, visuals_base, config, log):
    """(rows, why site_diff.py failed or None)."""
    env = dict(os.environ)
    if config["visuals_repo"]:
        env["VISUALS_REPO"] = config["visuals_repo"]
    command = [sys.executable, "scripts/site_diff.py", base]
    if visuals_base:
        command += ["--visuals-base", visuals_base]
    result = log.run(command, cwd=ROOT, env=env)
    if result.returncode:
        return [], f"scripts/site_diff.py exited {result.returncode}"
    return result.stdout.splitlines(), None


def built_files():
    root = site()
    return sorted(path.relative_to(root).as_posix() for path in root.rglob("*") if path.is_file())


# --- Remote steps --------------------------------------------------------------------------------

class Remote:
    """Commands on the host, one `ssh` call each; an unreachable host is an environment error."""

    def __init__(self, host, log):
        self.host, self.log = host, log

    def command(self, script):
        return ["ssh", "-o", "BatchMode=yes", "--", self.host, script]

    def run(self, script, input=None):
        result = self.log.run(self.command(script), input=input,
                              stdin=None if input is not None else subprocess.DEVNULL)
        if result.returncode == SSH_UNREACHABLE:
            raise UsageError(f"ssh {self.host} failed: {result.stderr.strip()}",
                             [f"Run `ssh {self.host} true` and fix the SSH alias"])
        return result


def reach(remote, docroot):
    """Fail early, before the build, when the host or its document root cannot be reached."""
    if remote.run(f"cd -- {shlex.quote(docroot)}").returncode:
        raise UsageError(f"no document root {docroot} on {remote.host}", ["Check --docroot"])


def remote_sums(remote, docroot, paths):
    """{path: sha256} of ``paths`` in the live document root; a missing file is left out."""
    if not paths:
        return {}
    script = f"cd -- {shlex.quote(docroot)} && tr '\\n' '\\0' | xargs -0 sha256sum --"
    result = remote.run(script, input="\n".join(paths) + "\n")
    sums = {}
    for line in result.stdout.splitlines():
        digest, _, path = line.partition("  ")
        sums[path] = digest
    if not sums and result.returncode:
        raise UsageError(f"reading live checksums failed: {result.stderr.strip()}",
                         [f"Check that {docroot} exists on {remote.host}"])
    return sums


def local_sums(paths):
    return {path: deploy_check.sha256(site() / path) for path in paths}


def safe_path(path):
    # The paths go into a here-document and a newline-separated list on the host.
    if "\n" in path or path == HEREDOC or not path or path.startswith("/"):
        raise UsageError(f"unsafe upload path: {path!r}")
    return path


def upload(remote, backup, paths):
    """Bundle the upload set with COPYFILE_DISABLE=1 tar and unpack it into ``backup``/new."""
    listing = remote.log.path.parent / "upload-list.txt"
    listing.write_text("\n".join(paths) + "\n", encoding="utf-8")
    tar = subprocess.Popen(["tar", "-c", "-f", "-", "-C", str(site()), "-T", str(listing)],
                           stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                           env=os.environ | {"COPYFILE_DISABLE": "1"})
    new = shlex.quote(f"{backup}/new")
    command = remote.command(f"mkdir -p -- {new} && tar -x -f - -C {new}")
    ssh = subprocess.run(command, stdin=tar.stdout, capture_output=True, text=True)
    tar.stdout.close()
    tar_error = tar.stderr.read().decode()
    tar.stderr.close()
    tar.wait()
    remote.log.write(f"$ COPYFILE_DISABLE=1 tar -c -T {listing} | {shlex.join(command)}\n"
                     f"[tar exit {tar.returncode}, ssh exit {ssh.returncode}]\n{tar_error}{ssh.stderr}")
    if ssh.returncode == SSH_UNREACHABLE:
        raise UsageError(f"ssh {remote.host} failed: {ssh.stderr.strip()}")
    if tar.returncode or ssh.returncode:
        return f"upload failed (tar exit {tar.returncode}, ssh exit {ssh.returncode})"
    return None


def install_script(docroot, backup, deploy_id, paths, sums):
    """The POSIX shell script that verifies the upload and installs it atomically on the host."""
    q = shlex.quote
    listing = "\n".join(paths)
    checks = "\n".join(f"{sums[path]}  {path}" for path in paths)
    restore = f"""#!/bin/sh
# Restore the files that deploy {deploy_id} replaced; the files it added stay.
set -eu
cd -- "$(dirname -- "$0")"
backup=$(pwd)
docroot={q(docroot)}
n=0
while IFS= read -r path; do
  target=$docroot/$path
  tmp=$(dirname -- "$target")/.fmtmp-{deploy_id}-restore-$(basename -- "$path")
  cp -p -- "$backup/old/$path" "$tmp"
  mv -f -- "$tmp" "$target"
  n=$((n + 1))
done < "$backup/replaced"
echo "restored $n"
"""
    return f"""set -eu
umask 022
docroot=$(cd -- {q(docroot)} && pwd)
mkdir -p -- {q(backup)}
backup=$(cd -- {q(backup)} && pwd)
cat > "$backup/PATHS" <<'{HEREDOC}'
{listing}
{HEREDOC}
cat > "$backup/SHA256SUMS" <<'{HEREDOC}'
{checks}
{HEREDOC}
cat > "$backup/restore.sh" <<'{HEREDOC}'
{restore}{HEREDOC}
cd -- "$backup/new"
sha256sum -c -- "$backup/SHA256SUMS" > /dev/null
: > "$backup/replaced"
: > "$backup/added"
tmp=
trap '[ -z "$tmp" ] || rm -f -- "$tmp"' EXIT
while IFS= read -r path; do
  target=$docroot/$path
  dir=$(dirname -- "$target")
  mkdir -p -- "$dir"
  tmp=$dir/.fmtmp-{deploy_id}-$(basename -- "$path")
  cp -- "$backup/new/$path" "$tmp"
  chmod 644 "$tmp"
  if [ -e "$target" ]; then
    mkdir -p -- "$(dirname -- "$backup/old/$path")"
    cp -p -- "$target" "$backup/old/$path"
    echo "$path" >> "$backup/replaced"
  else
    echo "$path" >> "$backup/added"
  fi
  mv -f -- "$tmp" "$target"
  tmp=
done < "$backup/PATHS"
echo "installed $(wc -l < "$backup/replaced") replaced $(wc -l < "$backup/added") added"
"""


def install(remote, docroot, backup, deploy_id, paths, sums):
    """(replaced, added, why the install failed or None)."""
    result = remote.run("sh -s", input=install_script(docroot, backup, deploy_id, paths, sums))
    match = re.search(r"installed\s+(\d+) replaced\s+(\d+) added", result.stdout)
    if result.returncode or not match:
        return 0, 0, f"install exited {result.returncode}: {result.stderr.strip()[-300:]}"
    return int(match[1]), int(match[2]), None


def restore(remote, backup):
    script = f"{shlex.quote(backup)}/restore.sh"
    # The install writes restore.sh before it changes any live file; without it nothing was installed.
    result = remote.run(f"if [ -f {script} ]; then sh -- {script}; else echo 'restored 0 (nothing installed)'; fi")
    if result.returncode:
        return f"restore failed: {result.stderr.strip()[-300:]}"
    return result.stdout.strip()


def remove_own_backup(remote, backups, deploy_id):
    # Only the directory this deploy created; the name is checked again so nothing else can match.
    if not deploy_id.startswith(PREFIX) or "/" in deploy_id:
        raise ValueError(f"not a backup this tool creates: {deploy_id}")
    result = remote.run(f"rm -rf -- {shlex.quote(backups)}/{shlex.quote(deploy_id)}")
    return None if result.returncode == 0 else f"removing the backup failed: {result.stderr.strip()}"


# --- Checks and report ---------------------------------------------------------------------------

class Report:
    """The checks in order, the failing items, and the facts of one deploy."""

    def __init__(self, mode):
        self.mode = mode
        self.checks, self.failures, self.facts, self.counts = [], [], {}, {}
        self.stopped = False

    def check(self, stage, name, failures, evidence):
        """Record one check; ``failures`` is a list of (subject, reason). Returns whether it passed."""
        if self.stopped:
            self.checks.append({"stage": stage, "check": name, "status": "NOT RUN", "evidence": "an earlier check failed"})
            return False
        for subject, reason in failures:
            self.failures.append({"check": name, "subject": subject, "reason": reason})
        status = "FAIL" if failures else "PASS"
        if failures:
            evidence = f"{len(failures)} failed; {evidence}"
        self.checks.append({"stage": stage, "check": name, "status": status, "evidence": evidence})
        return not failures

    def step(self, stage, name, check, stop=True):
        """Run ``check`` (it returns failures and evidence) unless an earlier check stopped the run.
        Once files are on the host (``stop`` is False), an environment error becomes a failure of
        this check, so the restore still runs and the report is still written."""
        if self.stopped:
            return self.check(stage, name, [], "")
        try:
            failures, evidence = check()
        except UsageError as error:
            if stop:
                raise
            failures, evidence = [(name, str(error))], "environment error"
        passed = self.check(stage, name, failures, evidence)
        if not passed and stop:
            self.stopped = True
        return passed

    def skip(self, stage, name, why):
        self.checks.append({"stage": stage, "check": name, "status": "NOT RUN", "evidence": why})

    @property
    def verdict(self):
        return "fail" if self.failures else "pass"

    def document(self, files, limit=None):
        """The report; ``limit`` caps the failing items listed (the report file lists them all)."""
        doc = {"deploy": {"mode": self.mode, "verdict": self.verdict, **self.facts}, "counts": dict(self.counts)}
        if self.failures:
            doc["counts"]["failures"] = len(self.failures)
            doc["failures"] = self.failures[:limit]
            if limit is not None and len(self.failures) > limit:
                doc["counts"]["failures_shown"] = limit
        doc["checks"] = self.checks
        doc["files"] = dict(files)
        return doc


def render(doc, hints):
    text = toon.encode(doc)
    if hints:
        text += f"\nhelp[{len(hints)}]:\n" + "\n".join(f"  {hint}" for hint in hints)
    return text


def read_log(state):
    path = state / "deploy-log.jsonl"
    if not path.is_file():
        return []
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def live_pair(args, state):
    """The (site, visuals) commits whose build is live: flags, else the last deploy in the log."""
    if args.base:
        return resolve_commit(args.base, "base"), args.visuals_base
    if args.visuals_base:
        raise UsageError("--visuals-base needs --base")
    entries = read_log(state)
    if not entries:
        raise UsageError(f"no deploy log at {state / 'deploy-log.jsonl'}", [
            "Pass --base <live site commit> --visuals-base <its visuals commit> for the first deploy",
        ])
    live = entries[-1].get("live")
    if not live:
        raise UsageError(f"the last deploy ({entries[-1]['id']}) left the live state unknown", [
            "Check the host by hand, then pass --base and --visuals-base",
        ])
    return resolve_commit(live["site"], "base"), live["visuals"]


def deploy(args):
    """Plan or run one deploy; returns the exit code."""
    config = load_config(args)
    require(config, "host", "docroot", *(["base_url"] if args.command == "run" else []))
    commit = resolve_commit("HEAD", "HEAD")
    base, visuals_base = live_pair(args, config["state"])
    deploy_id = f"{PREFIX}{commit[:7]}-{datetime.datetime.now():%Y%m%d-%H%M%S}"
    directory = config["state"] / deploy_id
    log = Log(directory / "deploy.log")
    remote = Remote(config["host"], log)
    backup = f"{config['backups']}/{deploy_id}"
    files = {"report": str(directory / "report.toon"), "log": str(log.path), "rows": str(directory / "rows.txt")}
    reach(remote, config["docroot"])
    report = Report(args.command)
    report.facts.update({"id": deploy_id, "commit": commit, "base": base, "visuals_base": visuals_base or "pinned",
                         "scope": "uploaded files only (--scoped-verdict)" if args.scoped_verdict else "every built file"})
    state = {"rows": [], "uploaded": [], "built": [], "local": {}, "visuals": None}
    hints = []

    def ci():
        why, hint = ci_problem(commit, log)
        if hint:
            hints.append(hint)
        return [(commit[:12], why)] if why else [], f"{WORKFLOW} passed on {commit[:12]}"

    def built():
        state["visuals"], why = build(config, log)
        report.facts["visuals"] = state["visuals"] or "unknown"
        return [("scripts/build.py", why)] if why else [], f"built from yujieteo/visuals {state['visuals']}"

    def diff():
        rows, why = upload_rows(base, visuals_base, config, log)
        (directory / "rows.txt").write_text("\n".join(rows) + "\n", encoding="utf-8")
        state["rows"], state["uploaded"] = rows, [safe_path(path) for path in deploy_check.uploads(rows)]
        state["built"] = built_files()
        statuses = [row.split("\t", 1)[0] for row in rows if row.strip()]
        report.counts.update({"built": len(state["built"]), "upload": len(state["uploaded"]),
                              "added": statuses.count("A"), "modified": statuses.count("M"),
                              "deleted_left_on_host": statuses.count("D")})
        return [("scripts/site_diff.py", why)] if why else [], \
            f"{len(state['uploaded'])} of {len(state['built'])} built files to upload against {base[:12]}"

    def paths():
        built = set(state["built"])
        missing = [(path, deploy_check.NOT_BUILT) for path in state["uploaded"] if path not in built]
        return deploy_check.problems(state["uploaded"]) + missing, f"{len(state['uploaded'])} upload paths"

    def drift():
        # A built file that differs live but is not in the upload set would stay stale: the base was wrong.
        state["local"] = local_sums(state["built"])
        stale = stale_files(state, remote_sums(remote, config["docroot"], state["built"]), outside=True)
        others = len(state["built"]) - len(state["uploaded"])
        report.counts["live_differs_outside_upload"] = len(stale)
        if args.scoped_verdict:
            return [], f"scoped out (--scoped-verdict): {len(stale)} of {others} files outside the upload set differ"
        if stale:
            hints.append("Pass an older --base (any commit before the live build), or --scoped-verdict to accept "
                         "the drift on purpose")
        return stale, f"{others} built files outside the upload set match the live document root"

    report.step("A", "tree-clean", lambda: ([("HEAD", why)] if (why := tree_problem()) else [],
                                            "no uncommitted changes to tracked files"))
    for name, check in (("ci-green", ci), ("build", built), ("site-diff", diff), ("upload-paths", paths),
                        ("live-drift", drift)):
        report.step("A", name, check)
    uploaded = state["uploaded"]

    if args.command == "plan" or report.stopped or not uploaded:
        live = None
        nothing = not report.stopped and not uploaded
        drift = report.counts.get("live_differs_outside_upload", 0)
        if nothing:
            report.facts["result"] = (f"nothing to upload; {drift} live files differ from the build (scoped out)" if drift
                                      else "nothing to upload; the live document root already matches the build")
        if args.command == "run":
            # Nothing reached the host: what was live stays live, or already is this build.
            live = {"site": commit, "visuals": state["visuals"]} if nothing else {"site": base, "visuals": visuals_base}
        if args.command == "plan" and not report.stopped and uploaded:
            hints.append("Run `scripts/deploy.py run --execute` to deploy this upload set")
        if report.failures:
            hints.append(f"Read the full output in {log.path}")
        return finish(report, args, config, files, hints, state["rows"], live)

    # Upload into this deploy's backup directory, verify it there, and install it atomically.
    install_state = {"uploaded": False, "replaced": 0, "added": 0}

    def install_step():
        why = upload(remote, backup, uploaded)
        if not why:
            install_state["uploaded"] = True
            install_state["replaced"], install_state["added"], why = install(
                remote, config["docroot"], backup, deploy_id, uploaded, state["local"])
        report.counts.update({"replaced": install_state["replaced"], "installed_new": install_state["added"]})
        return [(backup, why)] if why else [], \
            f"{len(uploaded)} files verified on the host and renamed into place with mode 0644"

    report.step("install", "upload-and-install", install_step)
    upload_failed = report.stopped
    sent = set(uploaded)

    def checksums():
        failing = stale_files(state, remote_sums(remote, config["docroot"], state["built"]), outside=False)
        inside = [item for item in failing if item[0] in sent]
        outside = [item for item in failing if item[0] not in sent]
        report.counts["live_differs_outside_upload"] = len(outside)
        if args.scoped_verdict:
            return inside, (f"{len(uploaded)} uploaded files match site/; scoped out: {len(outside)} of "
                            f"{len(state['built']) - len(sent)} other files differ")
        return failing, f"{len(state['built'])} built files match the live document root"

    def docroot_paths():
        listing = remote_listing(remote, config["docroot"])
        return deploy_check.problems(listing), f"{len(listing)} live paths"

    def served():
        return [(path, why) for path in uploaded if (why := served_problem(path, config["base_url"]))], \
            f"{len(uploaded)} uploads served with HTTP 200 and the built bytes"

    def console():
        return console_failures(uploaded, config["base_url"]), \
            f"{len(deploy_check.page_urls(uploaded, config['base_url']))} changed pages"

    # Stage B runs every check; only a failure that touches an uploaded file restores the prior files.
    report.stopped = False if not upload_failed else True
    for name, check in (("checksums", checksums), ("docroot-paths", docroot_paths), ("served", served),
                        ("console-errors", console)):
        report.step("B", name, check, stop=False)
    # Only a stray live path or a stale file outside the upload set leaves this deploy's own files in place:
    # restoring would not fix either. Any other failure, an environment error included, restores.
    built_set = set(state["built"])
    upload_problem = upload_failed or any(
        item["check"] != "docroot-paths"
        and not (item["check"] == "checksums" and item["subject"] in built_set and item["subject"] not in sent)
        for item in report.failures)

    live = {"site": commit, "visuals": state["visuals"]}
    rollback = f"`ssh {config['host']} sh {backup}/restore.sh`"
    if upload_problem and not install_state["uploaded"]:
        report.skip("restore", "restore", "nothing reached the document root")
        report.facts["backup"] = f"kept: {backup}"
        live = {"site": base, "visuals": visuals_base}
    elif upload_problem:
        report.stopped = False
        result = restore(remote, backup)
        restored = not result.startswith("restore failed")
        report.step("restore", "restore", lambda: ([] if restored else [(backup, result)], result), stop=False)
        report.facts["backup"] = f"kept: {backup}"
        live = {"site": base, "visuals": visuals_base} if restored else None
        hints.append(f"Any files this deploy added stay on the host; their paths are in {backup}/added")
        hints.append(f"Run the restore again by hand with {rollback}")
    elif report.failures:
        report.facts["backup"] = f"kept: {backup}"
        hints.append(f"Roll back by hand with {rollback} if the failures above need it")
        hints.append("Remove each stray live path by hand; this tool never removes a live file")
    else:
        why = remove_own_backup(remote, config["backups"], deploy_id)
        report.facts["backup"] = f"removed: {backup}" if not why else f"kept: {backup} ({why})"
    if report.failures:
        hints.append(f"Read the full output in {log.path}")
    return finish(report, args, config, files, hints, state["rows"], live)


def stale_files(state, live, outside):
    """(path, reason) of each built file whose live sha256 differs; ``outside`` keeps only the files
    outside the upload set."""
    sent = set(state["uploaded"]) if outside else set()
    return [(path, "missing in the document root" if path not in live else "live sha256 differs from site/")
            for path in state["built"] if path not in sent and live.get(path) != state["local"][path]]


def remote_listing(remote, docroot):
    """Every file and folder under the live document root, relative to it."""
    result = remote.run(f"cd -- {shlex.quote(docroot)} && find . -mindepth 1")
    if result.returncode:
        raise UsageError(f"listing the document root failed: {result.stderr.strip()}")
    return [line.removeprefix("./") for line in result.stdout.splitlines() if line]


def served_problem(path, base_url):
    try:
        return deploy_check.served_problem(path, base_url)
    except OSError as error:
        return f"fetch failed: {error}"


def console_failures(uploaded, base_url):
    """Stage B console errors, in a browser session of its own unless one is set."""
    urls = deploy_check.page_urls(uploaded, base_url)
    if not urls:
        return []
    own_session = "CHROME_DEVTOOLS_AXI_SESSION" not in os.environ
    if own_session:
        os.environ["CHROME_DEVTOOLS_AXI_SESSION"] = deploy_check.BROWSER_SESSION
    failures = []
    try:
        # A deck that rewrites its URL fails to open as the first page of a session; open the root first.
        deploy_check.axi("open", base_url)
        for url in urls:
            try:
                failures += [(url, error) for error in deploy_check.page_errors(url)]
            except RuntimeError as error:
                failures.append((url, str(error)))
    except (RuntimeError, OSError) as error:
        failures.append((base_url, str(error)))
    finally:
        if own_session:
            subprocess.run(["chrome-devtools-axi", "stop"], capture_output=True)
            del os.environ["CHROME_DEVTOOLS_AXI_SESSION"]
    return failures


def finish(report, args, config, files, hints, rows, live):
    doc, full = report.document(files, limit=SHOWN_FAILURES), report.document(files)
    full["uploaded"] = [{"status": row[0], "path": row.split("\t", 1)[1].removeprefix("site/")}
                        for row in rows if row[:1] in {"A", "M"}]
    Path(files["report"]).write_text(render(full, hints) + "\n", encoding="utf-8")
    if args.command == "run":
        facts = report.facts
        entry = {"id": facts["id"], "date": datetime.date.today().isoformat(), "verdict": report.verdict,
                 "commit": facts["commit"], "visuals": facts.get("visuals"), "base": facts["base"],
                 "uploaded": len(full["uploaded"]), "live": live, "report": files["report"],
                 "summary": doc, "help": hints}
        log = config["state"] / "deploy-log.jsonl"
        doc["files"]["deploy_log"] = str(log)
        with open(log, "a", encoding="utf-8") as handle:
            handle.write(json.dumps(entry) + "\n")
    print(render(doc, hints))
    return 0 if report.verdict == "pass" else 1


# --- report and backups --------------------------------------------------------------------------

def show_report(args):
    config = load_config(args)
    entries = read_log(config["state"])
    if not entries:
        raise UsageError(f"no deploy log at {config['state'] / 'deploy-log.jsonl'}",
                         ["Run `scripts/deploy.py run --execute` first"])
    chosen = [entry for entry in entries if entry["id"].startswith(args.deploy)] if args.deploy else entries[-1:]
    if not chosen:
        raise UsageError(f"--deploy {args.deploy} matches none of {len(entries)} deploys in the log",
                         ["Run `scripts/deploy.py report` to see the last deploy"])
    if len(chosen) > 1:
        raise UsageError(f"--deploy {args.deploy} matches {len(chosen)} deploys; give more of the id")
    entry = chosen[0]
    recent = [{"id": item["id"], "date": item["date"], "verdict": item["verdict"], "commit": item["commit"][:12],
               "uploaded": item["uploaded"]} for item in entries[-5:]]
    doc = {"selected": {"shown": 1, "total": len(entries), "filter": args.deploy or "last"}, **entry["summary"],
           "recent": recent}
    print(render(doc, entry.get("help", [])))
    return 0 if entry["verdict"] == "pass" else 1


def list_backups(args):
    config = load_config(args)
    require(config, "host")
    log = Log(config["state"] / "backups.log")
    backups = shlex.quote(config["backups"])
    script = (f"[ -d {backups} ] || exit 0; cd -- {backups} && for d in */; do [ -d \"$d\" ] || continue; "
              "printf '%s\\t%s\\n' \"${d%/}\" \"$(find \"$d\" -type f | wc -l)\"; done")
    result = Remote(config["host"], log).run(script)
    if result.returncode:
        raise UsageError(f"listing {config['backups']} failed: {result.stderr.strip()}")
    today = datetime.datetime.now()
    rows = []
    for line in result.stdout.splitlines():
        name, _, count = line.partition("\t")
        stamp = STAMP.search(name)
        age = (today - datetime.datetime.strptime(stamp[1], "%Y%m%d-%H%M%S")).days if stamp else ""
        # A passing deploy removes its own backup, so one left behind belongs to a failed or cut-off run.
        action = "review: restore source of a failed deploy" if name.startswith(PREFIX) else "keep"
        rows.append({"name": name, "files": int(count.strip() or 0), "age_days": age, "action": action})
    shown = [row for row in rows if fnmatch.fnmatch(row["name"], args.match)] if args.match else rows
    if args.match and not shown:
        raise UsageError(f"--match {args.match} matches none of {len(rows)} backups",
                         ["Run `scripts/deploy.py backups` to list them all"])
    shown.sort(key=lambda row: not row["name"].startswith(PREFIX))
    doc = {"backups_dir": config["backups"], "counts": {"shown": len(shown), "total": len(rows),
                                                         "review": sum(row["action"] != "keep" for row in rows)},
           "backups": shown, "files": {"log": str(log.path)}}
    hints = [f"Roll back with `ssh {config['host']} sh {config['backups']}/{row['name']}/restore.sh`"
             for row in shown if row["action"] != "keep"]
    print(render(doc, hints))
    return 0


def parser():
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    commands = parser.add_subparsers(dest="command")
    for name, help_text in (("plan", "dry run: checks, build and upload set (the default)"),
                            ("run", "deploy and run Stage B; needs --execute")):
        command = commands.add_parser(name, help=help_text)
        command.add_argument("--base", help="site commit whose build is live (default: the deploy log)")
        command.add_argument("--visuals-base", help="visuals commit the live build read (default: the deploy log)")
        command.add_argument("--scoped-verdict", action="store_true",
                             help="let the verdict follow the upload set only; the report counts the rest")
        command.add_argument("--host", help="SSH host alias")
        command.add_argument("--docroot", help="document root on the host")
        command.add_argument("--base-url", help="public URL of the site root")
        command.add_argument("--backups", help=f"backup directory on the host (default {DEFAULT_BACKUPS})")
        command.add_argument("--state", help=f"local directory for logs and reports (default {DEFAULT_STATE})")
        if name == "run":
            command.add_argument("--execute", action="store_true", help="really deploy")
    report = commands.add_parser("report", help="print the report of the last deploy")
    report.add_argument("--deploy", help="the deploy id (or its start) to show")
    report.add_argument("--state", help=f"local directory for logs and reports (default {DEFAULT_STATE})")
    backups = commands.add_parser("backups", help="list the backup directories on the host")
    backups.add_argument("--match", help="show only the backups whose name matches this glob")
    backups.add_argument("--host", help="SSH host alias")
    backups.add_argument("--backups", help=f"backup directory on the host (default {DEFAULT_BACKUPS})")
    backups.add_argument("--state", help=f"local directory for logs (default {DEFAULT_STATE})")
    return parser


def main(argv=None):
    argv = sys.argv[1:] if argv is None else argv
    if not argv or argv[0].startswith("-") and argv[0] not in {"-h", "--help"}:
        argv = ["plan", *argv]
    cli = parser()
    args = cli.parse_args(argv)
    try:
        if args.command == "run" and not args.execute:
            raise UsageError("run deploys to the live site and needs --execute",
                             ["Run `scripts/deploy.py plan` first, then `scripts/deploy.py run --execute`"])
        if args.command in {"plan", "run"}:
            return deploy(args)
        return show_report(args) if args.command == "report" else list_backups(args)
    except UsageError as error:
        print(render({"error": str(error)}, error.hints))
        return 2


if __name__ == "__main__":
    sys.exit(main())
