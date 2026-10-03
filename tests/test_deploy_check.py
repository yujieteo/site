"""Stage B's deploy check: stray paths in the upload set and live document root, and console errors."""

import hashlib
import io
import subprocess
import sys
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import deploy_check  # noqa: E402

ROWS = "M\tsite/corpus.json\nA\tsite/blog/new.html\nD\tsite/old.html\nM\tsite/media/audio/a.mp3\n"


class UploadSetTests(unittest.TestCase):
    def test_uploads_are_the_added_and_modified_rows(self):
        self.assertEqual(
            deploy_check.uploads(ROWS.splitlines()),
            ["corpus.json", "blog/new.html", "media/audio/a.mp3"],
        )

    def test_page_urls_are_the_changed_html_pages(self):
        paths = deploy_check.uploads(ROWS.splitlines())
        self.assertEqual(
            deploy_check.page_urls(paths, "https://example.invalid"),
            ["https://example.invalid/blog/new.html"],
        )


class PathTests(unittest.TestCase):
    def test_site_paths_pass(self):
        for path in ("index.html", "visuals/beamdswitch/coi-serviceworker.js",
                     ".well-known/security.txt", "media/video/a.vtt"):
            with self.subTest(path=path):
                self.assertIsNone(deploy_check.problem(path))

    def test_stray_paths_fail(self):
        cases = {
            "blog/._post.html": "AppleDouble file",
            "._index.html": "AppleDouble file",
            ".DS_Store": "dotfile",
            "visuals/x/.env": "dotfile",
            ".git/config": "dotfile",
            "Users/someone/site/index.html": "private path",
            "home/someone/notes.md": "private path",
            "scripts/__pycache__/build.cpython-313.pyc": "private path",
            "index.html~": "private path",
            "blog/post.html.swp": "private path",
        }
        for path, reason in cases.items():
            with self.subTest(path=path):
                self.assertEqual(deploy_check.problem(path), reason)

    def test_live_listing_runs_find_in_the_docroot_backup_included(self):
        listing = "./index.html\n./fm-backup\n./fm-backup/._index.html\n./blog/._a.html\n"
        result = subprocess.CompletedProcess([], 0, stdout=listing, stderr="")
        with patch.object(deploy_check.subprocess, "run", return_value=result) as run:
            live = deploy_check.remote_listing("alias", "/srv/my site")
        command = run.call_args.args[0]
        self.assertEqual(command[:4], ["ssh", "-n", "--", "alias"])
        self.assertEqual(command[4], "cd -- '/srv/my site' && find . -mindepth 1")
        self.assertEqual(deploy_check.problems(live), [
            ("fm-backup/._index.html", "AppleDouble file"),
            ("blog/._a.html", "AppleDouble file"),
        ])

    def test_a_stray_upload_fails_before_the_live_listing(self):
        args = SimpleNamespace(uploads=io.StringIO("A\tsite/._a.html\n"), host="alias",
                               docroot="/srv")
        out = io.StringIO()
        with patch.object(deploy_check, "remote_listing") as listing, redirect_stdout(out):
            self.assertFalse(deploy_check.check_paths(args))
        listing.assert_not_called()
        self.assertEqual(out.getvalue().splitlines(), [
            "B,upload-paths,FAIL,._a.html: AppleDouble file",
            "B,docroot-paths,NOT RUN,upload-paths failed",
        ])


AXI_ERRORS = """console:
## Console messages
Showing 1-3 of 3 (Page 1 of 1).
msgid=1 [error] Uncaught ReferenceError: missing is not defined (0 args)
msgid=4 [error] Failed to load resource: the server responded with a status of 404 () (0 args)
msgid=5 [error] Failed to load resource: net::ERR_NAME_NOT_RESOLVED (0 args)
help[2]:
  Run `chrome-devtools-axi console-get <id>` to see a specific message
"""
AXI_CLEAN = "console:\n## Console messages\n<no console messages found>\n"
AXI_NETWORK = """network:
## Network requests
Showing 1-5 of 5 (Page 1 of 1).
reqid=1 GET https://example.invalid/bad.html [200]
reqid=2 GET https://example.invalid/static/js/gone.js [404]
reqid=3 GET https://example.invalid/static/css/style.css [304]
reqid=4 GET https://cdn.example.invalid/font.woff2 [failed - net::ERR_NAME_NOT_RESOLVED]
reqid=5 GET https://example.invalid/media/video/a.mp4 [failed - net::ERR_ABORTED]
"""
AXI_NETWORK_CLEAN = "network:\nreqid=1 GET https://example.invalid/a.html [200]\n"


class ConsoleTests(unittest.TestCase):
    def test_console_errors_name_failed_loads_by_url(self):
        self.assertEqual(deploy_check.console_errors(AXI_ERRORS, AXI_NETWORK), [
            "Uncaught ReferenceError: missing is not defined (0 args)",
            "Failed to load resource: the server responded with a status of 404 () (0 args)"
            " [https://example.invalid/static/js/gone.js]",
            "Failed to load resource: net::ERR_NAME_NOT_RESOLVED (0 args)"
            " [https://cdn.example.invalid/font.woff2]",
        ])

    def test_a_failed_request_without_a_console_error_passes(self):
        self.assertEqual(deploy_check.console_errors(AXI_CLEAN, AXI_NETWORK), [])

    def test_each_changed_page_is_loaded_once_and_errors_fail(self):
        calls = []

        def browser(*args):
            calls.append(args)
            bad = [call[1] for call in calls if call[0] == "open"][-1].endswith("bad.html")
            if args[0] == "network":
                return AXI_NETWORK if bad else AXI_NETWORK_CLEAN
            return AXI_ERRORS if args[0] == "console" and bad else AXI_CLEAN

        rows = "A\tsite/good.html\nM\tsite/bad.html\nM\tsite/corpus.json\n"
        args = SimpleNamespace(uploads=io.StringIO(rows), base_url="https://example.invalid/")
        out = io.StringIO()
        with redirect_stdout(out):
            self.assertFalse(deploy_check.check_console(args, browser))
        # The site root opens first, so a deck is never the first page of the session.
        self.assertEqual([call[1] for call in calls if call[0] == "open"],
                         ["https://example.invalid/", "https://example.invalid/good.html",
                          "https://example.invalid/bad.html"])
        prefix = "B,console-errors,FAIL,https://example.invalid/bad.html: "
        self.assertEqual(out.getvalue().splitlines(), [
            prefix + "Uncaught ReferenceError: missing is not defined (0 args)",
            prefix + "Failed to load resource: the server responded with a status of 404 () (0 args)"
            " [https://example.invalid/static/js/gone.js]",
            prefix + "Failed to load resource: net::ERR_NAME_NOT_RESOLVED (0 args)"
            " [https://cdn.example.invalid/font.woff2]",
        ])

    def test_clean_pages_pass(self):
        args = SimpleNamespace(uploads=io.StringIO("A\tsite/a.html\n"), base_url="https://example.invalid")
        out = io.StringIO()
        with redirect_stdout(out):
            self.assertTrue(deploy_check.check_console(
                args, lambda *args: AXI_NETWORK_CLEAN if args[0] == "network" else AXI_CLEAN))
        self.assertEqual(out.getvalue(), "B,console-errors,PASS,1 changed pages\n")

    def test_a_failed_warm_up_fails_before_any_page(self):
        def browser(*args):
            raise RuntimeError("chrome-devtools-axi open failed: error: No page is currently selected")

        args = SimpleNamespace(uploads=io.StringIO("A\tsite/decks/a/index.html\n"), base_url="https://example.invalid/")
        out = io.StringIO()
        with redirect_stdout(out):
            self.assertFalse(deploy_check.check_console(args, browser))
        self.assertEqual(out.getvalue(), "B,console-errors,FAIL,https://example.invalid/: chrome-devtools-axi open"
                                         " failed: error: No page is currently selected\n")

    def test_an_axi_failure_names_the_error_it_printed_on_stdout(self):
        # On a cold session, a deck's open printed its error on stdout and left stderr empty.
        result = subprocess.CompletedProcess([], 1, stdout="error: No page is currently selected\ncode: BROWSER_ERROR\n",
                                             stderr="")
        with patch.object(deploy_check.subprocess, "run", return_value=result):
            with self.assertRaisesRegex(RuntimeError, "^chrome-devtools-axi open failed: error: No page is currently selected$"):
                deploy_check.axi("open", "https://example.invalid/decks/a/index.html")


class LiveFileTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.site = Path(directory.name)
        (self.site / "blog").mkdir()
        (self.site / "blog/new.html").write_bytes(b"<h1>New</h1>")
        (self.site / "corpus.json").write_bytes(b'{"revision": "b"}')
        (self.site / "gone.html").write_bytes(b"built, never uploaded")
        patcher = patch.object(deploy_check, "SITE", self.site)
        patcher.start()
        self.addCleanup(patcher.stop)

    def test_checksums_compare_each_live_file_with_the_build(self):
        listing = (f"{hashlib.sha256(b'<h1>New</h1>').hexdigest()}  blog/new.html\n"
                   f"{hashlib.sha256(b'old').hexdigest()}  corpus.json\n")
        result = subprocess.CompletedProcess([], 1, stdout=listing, stderr="sha256sum: gone.html: No such file")
        with patch.object(deploy_check.subprocess, "run", return_value=result) as run:
            remote = deploy_check.remote_checksums("alias", "/srv/my site", ["blog/new.html", "corpus.json", "gone.html"])
        self.assertEqual(run.call_args.args[0][4],
                         "cd -- '/srv/my site' && sha256sum -- blog/new.html corpus.json gone.html")
        self.assertEqual(deploy_check.checksum_problems(["blog/new.html", "corpus.json", "gone.html"], remote), [
            ("corpus.json", "live sha256 differs from site/"),
            ("gone.html", "missing in the document root"),
        ])

    def test_served_pages_must_be_the_built_bytes_with_http_200(self):
        served = {"https://example.invalid/blog/new.html": (200, {}, b"<h1>New</h1>"),
                  "https://example.invalid/corpus.json": (200, {}, b'{"revision": "a"}')}
        http = lambda url, method: served[url]  # noqa: E731
        self.assertIsNone(deploy_check.served_problem("blog/new.html", "https://example.invalid", http))
        self.assertEqual(deploy_check.served_problem("corpus.json", "https://example.invalid/", http),
                         "served bytes differ from site/")
        self.assertEqual(deploy_check.served_problem("blog/new.html", "https://example.invalid",
                                                     lambda url, method: (403, {}, b"")), "HTTP 403")

    def test_a_large_download_is_checked_by_its_length(self):
        weights = self.site / "weights.bin"
        with open(weights, "wb") as handle:
            handle.truncate(deploy_check.LARGE_BYTES + 1)
        size = str(deploy_check.LARGE_BYTES + 1)
        methods = []

        def http(url, method):
            methods.append(method)
            return 200, {"Content-Length": size}, b""

        self.assertIsNone(deploy_check.served_problem("weights.bin", "https://example.invalid", http))
        self.assertEqual(methods, ["HEAD"])
        self.assertEqual(deploy_check.served_problem("weights.bin", "https://example.invalid",
                                                     lambda url, method: (200, {"Content-Length": "5"}, b"")),
                         f"Content-Length 5, expected {size}")

    def test_large_data_is_still_compared_byte_for_byte(self):
        # The live corpus.json is about 29 MB; a size check alone would miss a stale revision.
        corpus = self.site / "corpus.json"
        with open(corpus, "wb") as handle:
            handle.truncate(deploy_check.LARGE_BYTES + 1)
        methods = []

        def http(url, method):
            methods.append(method)
            return 200, {"Content-Length": str(deploy_check.LARGE_BYTES + 1)}, b"stale"

        self.assertEqual(deploy_check.served_problem("corpus.json", "https://example.invalid", http),
                         "served bytes differ from site/")
        self.assertEqual(methods, ["GET"])

    def test_a_file_missing_from_the_build_fails(self):
        self.assertEqual(deploy_check.served_problem("stale.html", "https://example.invalid", None),
                         deploy_check.NOT_BUILT)
        self.assertEqual(deploy_check.checksum_problems(["stale.html"], {"stale.html": "x"}),
                         [("stale.html", deploy_check.NOT_BUILT)])


if __name__ == "__main__":
    unittest.main()
