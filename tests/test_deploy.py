"""scripts/deploy.py against a local fake host: `ssh`, `gh` and `chrome-devtools-axi` on PATH are
small shell scripts, the host's home is a temporary folder, and an HTTP server serves its document
root. The build and the upload set are stubbed; no network is used."""

import datetime
import functools
import io
import json
import os
import shutil
import stat
import subprocess
import sys
import tempfile
import threading
import unittest
from contextlib import redirect_stdout
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import deploy  # noqa: E402
import deploy_check  # noqa: E402

FAKE_SSH = """#!/bin/sh
while [ $# -gt 0 ]; do
  case "$1" in
    -n) exec < /dev/null; shift ;;
    -o) shift 2 ;;
    --) shift; break ;;
    *) break ;;
  esac
done
if [ "$1" != "$FAKE_SSH_HOST" ]; then
  echo "ssh: Could not resolve hostname $1" >&2
  exit 255
fi
shift
case "$*" in
  ${FAKE_SSH_DROP:-}) echo "Connection to $FAKE_SSH_HOST closed by remote host." >&2; exit 255 ;;
esac
cd "$FAKE_SSH_HOME" && HOME="$FAKE_SSH_HOME" exec sh -c "$*"
"""
FAKE_GH = """#!/bin/sh
printf '%s\\n' "$FAKE_GH_RUNS"
"""
FAKE_AXI = """#!/bin/sh
case "$1" in
  open) printf '%s\\n' "$2" > "$FAKE_AXI_STATE" ;;
  console)
    if [ -n "${FAKE_AXI_ERROR_PAGE:-}" ] && grep -q -- "$FAKE_AXI_ERROR_PAGE" "$FAKE_AXI_STATE"; then
      echo 'msgid=1 [error] Uncaught Error: boom (0 args)'
    else
      echo '<no console messages found>'
    fi ;;
  network) echo 'network:' ;;
esac
"""
GREEN = json.dumps([{"status": "completed", "conclusion": "success", "url": "https://example.invalid/runs/1"}])
VISUALS = "f" * 40
# The live build and the new one: corpus.json changes, blog/new.html is added, index.html is unchanged.
OLD = {"corpus.json": b'{"revision":"a"}', "index.html": b"<h1>Home</h1>", "blog/old.html": b"<p>old</p>"}
NEW = {"corpus.json": b'{"revision":"b"}', "index.html": b"<h1>Home</h1>", "blog/old.html": b"<p>old</p>",
       "blog/new.html": b"<p>new</p>"}
ROWS = ["M\tsite/corpus.json", "A\tsite/blog/new.html"]


def write_tree(root, files):
    for path, data in files.items():
        (root / path).parent.mkdir(parents=True, exist_ok=True)
        (root / path).write_bytes(data)


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class FakeHostTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.tmp = Path(directory.name)
        self.site, self.home, self.state = self.tmp / "site", self.tmp / "home", self.tmp / "state"
        self.docroot = self.home / "www"
        write_tree(self.site, NEW)
        write_tree(self.docroot, OLD)
        (self.home / "site-backups/20260929-145839").mkdir(parents=True)
        (self.home / "site-backups/20260929-145839/index.html").write_bytes(b"older")
        bin_dir = self.tmp / "bin"
        bin_dir.mkdir()
        for name, script in (("ssh", FAKE_SSH), ("gh", FAKE_GH), ("chrome-devtools-axi", FAKE_AXI)):
            (bin_dir / name).write_text(script)
            (bin_dir / name).chmod(0o755)
        (self.tmp / "deploy.toml").write_text("")

        server = ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(QuietHandler, directory=str(self.docroot)))
        threading.Thread(target=server.serve_forever, kwargs={"poll_interval": 0.02}, daemon=True).start()
        self.addCleanup(server.server_close)
        self.addCleanup(server.shutdown)

        env = {
            "PATH": f"{bin_dir}{os.pathsep}{os.environ['PATH']}",
            "FAKE_SSH_HOST": "fakehost", "FAKE_SSH_HOME": str(self.home), "FAKE_GH_RUNS": GREEN,
            "FAKE_AXI_STATE": str(self.tmp / "axi-page"), "FAKE_AXI_ERROR_PAGE": "", "FAKE_SSH_DROP": "",
            "SITE_DEPLOY_CONFIG": str(self.tmp / "deploy.toml"), "SITE_DEPLOY_HOST": "fakehost",
            "SITE_DEPLOY_DOCROOT": str(self.docroot), "SITE_DEPLOY_STATE": str(self.state),
            "SITE_DEPLOY_BASE_URL": f"http://127.0.0.1:{server.server_address[1]}/",
        }
        for patcher in (
            patch.dict(os.environ, env),
            patch.object(deploy_check, "SITE", self.site),
            patch.object(deploy, "tree_problem", return_value=None),
            patch.object(deploy, "build", return_value=(VISUALS, None)),
            patch.object(deploy, "upload_rows", side_effect=lambda *args: (list(self.rows), None)),
        ):
            patcher.start()
            self.addCleanup(patcher.stop)
        os.environ.pop("CHROME_DEVTOOLS_AXI_SESSION", None)
        self.rows = ROWS

    def cli(self, *argv):
        out = io.StringIO()
        with redirect_stdout(out):
            code = deploy.main(list(argv))
        return code, out.getvalue()

    def live(self, path):
        return (self.docroot / path).read_bytes()

    def log(self):
        return [json.loads(line) for line in (self.state / "deploy-log.jsonl").read_text().splitlines()]

    # --- plan ------------------------------------------------------------------------------------

    def test_plan_is_the_default_and_changes_nothing(self):
        code, out = self.cli("--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 0, out)
        self.assertIn("  mode: plan\n  verdict: pass\n", out)
        self.assertIn("  upload: 2\n  added: 1\n  modified: 1\n", out)
        self.assertIn("  live_differs_outside_upload: 0\n", out)
        self.assertIn("Run `scripts/deploy.py run --execute`", out)
        self.assertNotIn("failures", out)
        self.assertEqual(self.live("corpus.json"), OLD["corpus.json"])
        self.assertFalse((self.docroot / "blog/new.html").exists())
        self.assertFalse((self.state / "deploy-log.jsonl").exists())
        report = next(self.state.glob("fm-deploy-*/report.toon")).read_text()
        self.assertIn("uploaded[2]{status,path}:\n  M,corpus.json\n  A,blog/new.html", report)

    def test_a_live_file_outside_the_upload_set_fails_the_plan(self):
        # A wrong base leaves blog/old.html out of the upload set although its live bytes are stale.
        (self.docroot / "blog/old.html").write_bytes(b"<p>stale</p>")
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertLess(out.index("failures[1]"), out.index("checks["))
        self.assertIn("live-drift,blog/old.html,live sha256 differs from site/", out)
        self.assertIn("  live_differs_outside_upload: 1\n", out)
        self.assertIn("A,live-drift,FAIL,1 failed; 1 of 2 built files outside the upload set match", out)
        self.assertIn("Pass an older --base", out)

    def test_stdout_lists_the_first_failures_and_the_report_file_all(self):
        for index in range(deploy.SHOWN_FAILURES + 1):
            path = f"blog/extra-{index:02}.html"
            (self.site / path).write_bytes(b"built")
            (self.docroot / path).write_bytes(b"stale")
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn(f"  failures: {deploy.SHOWN_FAILURES + 1}\n  failures_shown: {deploy.SHOWN_FAILURES}\n", out)
        self.assertNotIn("blog/extra-20.html", out)
        report = next(self.state.glob("fm-deploy-*/report.toon")).read_text()
        self.assertIn(f"failures[{deploy.SHOWN_FAILURES + 1}]", report)
        self.assertIn("live-drift,blog/extra-20.html,", report)

    def test_an_upload_missing_from_the_build_fails(self):
        self.rows = ROWS + ["A\tsite/blog/gone.html"]
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("upload-paths,blog/gone.html,not in site/", out)

    def test_a_stray_upload_path_stops_before_any_remote_read(self):
        self.rows = ["A\tsite/blog/._new.html"]
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("upload-paths,blog/._new.html,AppleDouble file", out)
        self.assertIn("A,live-drift,NOT RUN", out)

    def test_ci_not_green_fails_with_a_watch_hint(self):
        os.environ["FAKE_GH_RUNS"] = json.dumps([{"status": "in_progress", "conclusion": "",
                                                  "url": "https://example.invalid/runs/42"}])
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("CI run is in_progress", out)
        self.assertIn("Run `gh run watch 42`", out)
        self.assertIn("A,build,NOT RUN", out)
        os.environ["FAKE_GH_RUNS"] = "[]"
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("no CI run for this commit", out)

    # --- usage and environment errors ------------------------------------------------------------

    def test_usage_and_environment_errors_exit_2(self):
        cases = {
            "unknown base": (["plan", "--base", "no-such-ref-xyz"], "unknown base commit: no-such-ref-xyz"),
            "no log and no base": (["plan"], "no deploy log at"),
            "run without --execute": (["run", "--base", "HEAD"], "needs --execute"),
            "visuals base alone": (["plan", "--visuals-base", VISUALS], "--visuals-base needs --base"),
            "no report yet": (["report"], "no deploy log at"),
        }
        for name, (argv, message) in cases.items():
            with self.subTest(name):
                code, out = self.cli(*argv)
                self.assertEqual(code, 2, out)
                self.assertIn(message, out)

    def test_missing_configuration_and_an_unreachable_host_exit_2(self):
        del os.environ["SITE_DEPLOY_DOCROOT"]
        code, out = self.cli("plan", "--base", "HEAD")
        self.assertEqual(code, 2, out)
        self.assertIn("missing configuration: --docroot", out)
        code, out = self.cli("plan", "--base", "HEAD", "--docroot", str(self.docroot), "--host", "elsewhere")
        self.assertEqual(code, 2, out)
        self.assertIn("ssh elsewhere failed: ssh: Could not resolve hostname elsewhere", out)

    def test_configuration_comes_from_the_toml_file(self):
        for key in ("SITE_DEPLOY_HOST", "SITE_DEPLOY_DOCROOT"):
            del os.environ[key]
        (self.tmp / "deploy.toml").write_text(f'host = "fakehost"\ndocroot = "{self.docroot}"\n')
        code, out = self.cli("plan", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 0, out)

    # --- run -------------------------------------------------------------------------------------

    def test_run_installs_atomically_verifies_and_removes_only_its_own_backup(self):
        code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 0, out)
        for path, data in NEW.items():
            self.assertEqual(self.live(path), data, path)
        self.assertEqual(stat.S_IMODE((self.docroot / "blog/new.html").stat().st_mode), 0o644)
        self.assertEqual(list(self.docroot.rglob(".fmtmp-*")), [])
        for check in ("upload-and-install", "checksums", "docroot-paths", "served", "console-errors"):
            self.assertRegex(out, rf"\n  \w+,{check},PASS,")
        self.assertIn("  replaced: 1\n  installed_new: 1\n", out)
        self.assertIn("backup: \"removed: site-backups/fm-deploy-", out)
        self.assertIn("backups[1]{name,files,age_days,action}:\n  20260929-145839,1,", out)
        # The older backup is not this deploy's own, so it stays.
        self.assertEqual(sorted(p.name for p in (self.home / "site-backups").iterdir()), ["20260929-145839"])
        [entry] = self.log()
        self.assertEqual(entry["verdict"], "pass")
        self.assertEqual(entry["live"], {"site": entry["commit"], "visuals": VISUALS})

        # The next plan reads its base pair from the log: the live docroot now matches the build.
        self.rows = []
        code, out = self.cli("plan")
        self.assertEqual(code, 0, out)
        self.assertIn(f"  base: {entry['commit']}\n  visuals_base: {VISUALS}\n", out)
        self.assertIn("result: nothing to upload; the live document root already matches the build", out)
        self.assertNotIn("run --execute", out)

        code, out = self.cli("report")
        self.assertEqual(code, 0, out)
        self.assertIn("selected:\n  shown: 1\n  total: 1\n  filter: last", out)
        self.assertIn(f"  id: {entry['id']}", out)

    def test_a_stage_b_failure_restores_the_prior_files_and_keeps_the_backup(self):
        os.environ["FAKE_AXI_ERROR_PAGE"] = "blog/new.html"
        code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("console-errors,", out)
        self.assertIn("Uncaught Error: boom", out)
        self.assertRegex(out, r"\n  restore,restore,PASS,restored 1\n")
        self.assertEqual(self.live("corpus.json"), OLD["corpus.json"])
        # Added files stay on the host: this tool never removes a live file.
        self.assertEqual(self.live("blog/new.html"), NEW["blog/new.html"])
        [backup] = (self.home / "site-backups").glob("fm-deploy-*")
        self.assertEqual((backup / "added").read_text(), "blog/new.html\n")
        self.assertIn(f"sh site-backups/{backup.name}/restore.sh", out)
        self.assertIn(f"\n  {backup.name},", out)
        self.assertIn(f",{deploy.ROLLBACK}\n", out)
        [entry] = self.log()
        self.assertEqual(entry["verdict"], "fail")
        self.assertEqual(entry["live"], {"site": entry["base"], "visuals": VISUALS})
        code, out = self.cli("report")
        self.assertEqual(code, 1, out)

        code, out = self.cli("backups")
        self.assertEqual(code, 0, out)
        self.assertIn("  total: 2\n  review: 1\n", out)
        self.assertLess(out.index(backup.name), out.index("20260929-145839"))
        self.assertIn(f"Roll back the last deploy with `ssh fakehost sh site-backups/{backup.name}/restore.sh`", out)

    def test_after_a_failed_then_a_passed_deploy_the_old_backup_is_superseded(self):
        os.environ["FAKE_AXI_ERROR_PAGE"] = "blog/new.html"
        code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        [failed] = (self.home / "site-backups").glob("fm-deploy-*")
        os.environ["FAKE_AXI_ERROR_PAGE"] = ""

        class Later(datetime.datetime):
            @classmethod
            def now(cls, tz=None):
                return datetime.datetime.now(tz) + datetime.timedelta(minutes=1)

        with patch.object(deploy, "datetime", SimpleNamespace(datetime=Later, date=datetime.date)):
            code, out = self.cli("run", "--execute")
        self.assertEqual(code, 0, out)
        for path, data in NEW.items():
            self.assertEqual(self.live(path), data, path)
        self.assertIn(f"\n  {failed.name},", out)
        self.assertIn(f',"{deploy.SUPERSEDED}"\n', out)
        self.assertNotIn("restore.sh", out)

        code, out = self.cli("backups")
        self.assertEqual(code, 0, out)
        self.assertIn(f"\n  {failed.name},", out)
        self.assertIn(f',"{deploy.SUPERSEDED}"\n', out)
        self.assertNotIn(deploy.ROLLBACK, out)
        self.assertNotIn("Roll back", out)

    def test_a_corrupt_upload_is_never_installed(self):
        real_install_script = deploy.install_script

        def corrupt(docroot, backup, deploy_id, paths, sums):
            return real_install_script(docroot, backup, deploy_id, paths, {**sums, "corpus.json": "0" * 64})

        with patch.object(deploy, "install_script", corrupt):
            code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("install,upload-and-install,FAIL", out)
        self.assertIn("B,checksums,NOT RUN", out)
        self.assertRegex(out, r"\n  restore,restore,PASS,restored 0\n")
        self.assertEqual(self.live("corpus.json"), OLD["corpus.json"])
        self.assertFalse((self.docroot / "blog/new.html").exists())
        [entry] = self.log()
        self.assertEqual(entry["live"], {"site": entry["base"], "visuals": VISUALS})

    def test_an_ssh_drop_during_the_install_still_restores_reports_and_logs(self):
        os.environ["FAKE_SSH_DROP"] = "sh -s"
        code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("install,upload-and-install,FAIL,1 failed; environment error", out)
        self.assertIn("closed by remote host", out)
        self.assertRegex(out, r"\n  restore,restore,PASS,restored 0")
        self.assertTrue(next(self.state.glob("fm-deploy-*/report.toon")).is_file())
        [entry] = self.log()
        self.assertEqual(entry["verdict"], "fail")
        self.assertEqual(entry["live"], {"site": entry["base"], "visuals": VISUALS})

    def test_an_ssh_drop_during_the_restore_leaves_the_live_state_unknown(self):
        os.environ["FAKE_AXI_ERROR_PAGE"] = "blog/new.html"
        os.environ["FAKE_SSH_DROP"] = "if *restore.sh*"
        code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 1, out)
        self.assertIn("restore,restore,FAIL", out)
        self.assertIn("Run the restore again by hand", out)
        [entry] = self.log()
        self.assertIsNone(entry["live"])
        code, out = self.cli("plan")
        self.assertEqual(code, 2, out)
        self.assertIn("left the live state unknown", out)

    def test_the_upload_bundle_holds_only_the_upload_set(self):
        if shutil.which("xattr"):
            # macOS tar adds an AppleDouble ._ file beside each file with extended attributes unless
            # COPYFILE_DISABLE=1 is set.
            subprocess.run(["xattr", "-w", "com.example.test", "1", str(self.site / "blog/new.html")], check=True)
        captured = {}
        real_remove = deploy.remove_own_backup

        def keep(remote, backups, deploy_id):
            captured["new"] = sorted(
                p.relative_to(self.home / backups / deploy_id / "new").as_posix()
                for p in (self.home / backups / deploy_id / "new").rglob("*") if p.is_file())
            return real_remove(remote, backups, deploy_id)

        with patch.object(deploy, "remove_own_backup", keep):
            code, out = self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        self.assertEqual(code, 0, out)
        self.assertEqual(captured["new"], ["blog/new.html", "corpus.json"])

    def test_remove_own_backup_refuses_any_other_name(self):
        for name in ("20260929-145839", "fm-deploy-x/../../www"):
            with self.subTest(name), self.assertRaises(ValueError):
                deploy.remove_own_backup(None, "site-backups", name)

    # --- report --deploy -------------------------------------------------------------------------

    def test_report_deploy_takes_an_exact_id(self):
        self.cli("run", "--execute", "--base", "HEAD", "--visuals-base", VISUALS)
        [entry] = self.log()
        for unknown in ("fm-deploy-nothing", entry["id"][:12]):
            with self.subTest(unknown):
                code, out = self.cli("report", "--deploy", unknown)
                self.assertEqual(code, 2, out)
                self.assertIn(f"no deploy {unknown} among the 1 deploys in the log", out)
        code, out = self.cli("report", "--deploy", entry["id"])
        self.assertEqual(code, 0, out)
        self.assertIn(f"filter: {entry['id']}", out)

    def test_install_and_restore_work_in_a_docroot_with_a_space(self):
        docroot = self.home / "my site"
        write_tree(docroot, OLD)
        remote = deploy.Remote("fakehost", deploy.Log(self.state / "space/deploy.log"))
        backup, paths = "site-backups/fm-deploy-space", ["corpus.json", "blog/new.html"]
        self.assertIsNone(deploy.upload(remote, backup, paths))
        replaced, added, why = deploy.install(remote, str(docroot), backup, "fm-deploy-space", paths,
                                              deploy.local_sums(paths))
        self.assertIsNone(why)
        self.assertEqual((replaced, added), (1, 1))
        for path in paths:
            self.assertEqual((docroot / path).read_bytes(), NEW[path], path)
        self.assertEqual(deploy.restore(remote, backup), "restored 1")
        self.assertEqual((docroot / "corpus.json").read_bytes(), OLD["corpus.json"])


class InstallScriptTests(unittest.TestCase):
    def test_paths_that_could_break_the_remote_lists_are_refused(self):
        for path in ("a\nb.html", "/etc/passwd", "", deploy.HEREDOC):
            with self.subTest(path=path), self.assertRaises(deploy.UsageError):
                deploy.safe_path(path)


if __name__ == "__main__":
    unittest.main()
