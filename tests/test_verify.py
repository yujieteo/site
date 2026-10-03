"""scripts/verify.py: one verdict for Stage A and the type check, and no false pass from a filter or scope."""

import contextlib
import io
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import toon  # noqa: E402
import verify  # noqa: E402

TSC = f"""\
{ROOT}/static/js/fade.js
{ROOT}/static/js/corpus.js
{ROOT}/node_modules/typescript/lib/lib.es5.d.ts
static/js/fade.js(9,3): error TS7006: Parameter 'a' implicitly has an 'any' type.
static/js/fade.js(4,10): error TS6133: 'zz' is declared but its value is never read.
  continuation line of the message above
static/js/corpus.js(2,1): error TS6133: 'q' is declared but its value is never read.
error TS5083: Cannot read file 'missing.json'.
"""

UNITTEST = f"""\
F
======================================================================
FAIL: test_bad (test_x.T.test_bad)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "{ROOT}/tests/test_x.py", line 3, in test_bad
    self.assertEqual(1, 2)
AssertionError: 1 != 2

----------------------------------------------------------------------
Ran 1 test in 0.001s

FAILED (failures=1)
"""

NODE = """\
✖ adds (1.05ms)
ℹ fail 1

✖ failing tests:

test at tests/a.test.mjs:2:1
✖ adds (1.054959ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
"""


def run(*argv):
    out = io.StringIO()
    with contextlib.redirect_stdout(out):
        code = verify.main(list(argv))
    return code, toon.decode(out.getvalue())


class ParserTests(unittest.TestCase):
    def test_tsc_errors_are_parsed_and_sorted(self):
        errors, files = verify.parse_tsc(TSC)
        self.assertEqual(files, ["static/js/corpus.js", "static/js/fade.js"])
        self.assertEqual([(e["file"], e["line"], e["code"]) for e in errors], [
            ("-", 0, "TS5083"), ("static/js/corpus.js", 2, "TS6133"),
            ("static/js/fade.js", 4, "TS6133"), ("static/js/fade.js", 9, "TS7006")])

    def test_summary_counts_by_code_and_file_in_a_stable_order(self):
        errors, files = verify.parse_tsc(TSC)
        document, code = verify.summarize_typecheck(errors, files, first=2)
        self.assertEqual(code, 1)
        self.assertEqual(document["totals"], {"errors": 4, "files_with_errors": 3, "files_checked": 2})
        self.assertEqual([(row["code"], row["count"]) for row in document["by_code"]],
                         [("TS6133", 2), ("TS5083", 1), ("TS7006", 1)])
        self.assertEqual(document["by_file"][0], {"file": "static/js/fade.js", "count": 2})
        self.assertEqual(len(document["first"]), 2)
        self.assertEqual(document, verify.summarize_typecheck(list(reversed(errors)), files, first=2)[0])

    def test_unittest_failure_names_the_test_and_its_line(self):
        self.assertEqual(verify.parse_unittest(UNITTEST), [
            {"step": "python", "test": "test_x.T.test_bad", "file_line": "tests/test_x.py:3",
             "message": "AssertionError: 1 != 2"}])

    def test_node_failure_names_the_test_and_its_line(self):
        [row] = verify.parse_node(NODE)
        self.assertEqual((row["test"], row["file_line"]), ("adds", "tests/a.test.mjs:2"))
        self.assertTrue(row["message"].startswith("AssertionError"))

    def test_node_parent_of_a_failed_subtest_is_not_a_failure(self):
        nested = NODE.replace("test at tests/a.test.mjs:2:1", "test at tests/a.test.mjs:1:1\n✖ grp (2.1ms)\n"
                              "  '1 subtest failed'\n\ntest at tests/a.test.mjs:2:1")
        self.assertEqual([row["test"] for row in verify.parse_node(nested)], ["adds"])

    def test_suite_budget_row(self):
        text = "python suite: 4.2 s of its 600 s budget (1%)\n  slowest modules:\n     1.00 s  m\n" \
               "  slowest tests:\n     0.90 s  test_a (m.T.test_a)\n"
        self.assertEqual(verify.parse_suite_budget(text), [
            {"suite": "python", "seconds": 4.2, "limit_seconds": 600, "slowest_test": "test_a (m.T.test_a)",
             "slowest_seconds": 0.9}])


class TypecheckScopeTests(unittest.TestCase):
    """A filter never hides an error outside it, and a filter that matches nothing is an error."""

    def setUp(self):
        self.log = tempfile.TemporaryDirectory()
        self.addCleanup(self.log.cleanup)
        for patch in (mock.patch.object(verify, "LOG_DIR", Path(self.log.name)),
                      mock.patch.object(verify, "run_tsc", return_value=(2, TSC))):
            patch.start()
            self.addCleanup(patch.stop)

    def test_a_clean_file_does_not_pass_while_another_file_fails(self):
        code, document = run("typecheck", "--file", "static/js/corpus.js")
        self.assertEqual((code, document["verdict"]), (1, "fail"))
        self.assertEqual(document["scope"]["errors_in_scope"], 1)
        self.assertEqual(document["scope"]["errors_outside_scope"], 3)
        self.assertEqual(document["totals"]["errors"], 4)

    def test_a_file_with_no_errors_lists_none_and_fails_on_the_total(self):
        with mock.patch.object(verify, "run_tsc", return_value=(2, TSC.replace("static/js/corpus.js(2,1)", "x.js(2,1)"))):
            code, document = run("typecheck", "--file", "static/js/corpus.js")
        self.assertEqual((code, document["verdict"], document["first"]), (1, "fail", []))
        self.assertEqual(document["scope"]["verdict_basis"], "total: all 4 errors count, in scope or not")

    def test_a_missing_path_is_a_usage_error(self):
        code, document = run("typecheck", "--file", "static/js/no-such-file.js")
        self.assertEqual((code, document["verdict"]), (2, "error"))

    def test_a_path_with_no_checked_file_is_a_usage_error(self):
        code, document = run("typecheck", "--file", "README.md")
        self.assertEqual(code, 2)
        self.assertIn("matches no type-checked file", document["error"])

    def test_an_unknown_ref_is_a_usage_error(self):
        code, document = run("typecheck", "--since", "no-such-ref-x9")
        self.assertEqual((code, document["error"]), (2, "unknown ref no-such-ref-x9"))

    def test_since_with_no_changed_checked_file_is_a_usage_error(self):
        with mock.patch.object(verify, "changed_since", return_value=["README.md"]):
            code, document = run("typecheck", "--since", "HEAD")
        self.assertEqual(code, 2)
        self.assertIn("no type-checked file changed", document["error"])

    def test_since_counts_the_changed_files_against_the_total(self):
        with mock.patch.object(verify, "changed_since", return_value=["static/js/fade.js"]):
            code, document = run("typecheck", "--since", "HEAD")
        self.assertEqual(code, 1)
        self.assertEqual((document["scope"]["errors_in_scope"], document["scope"]["errors_outside_scope"]), (2, 2))

    def test_typecheck_has_no_scoped_verdict(self):
        with contextlib.redirect_stderr(io.StringIO()):
            self.assertEqual(verify.main(["typecheck", "--file", "static/js/corpus.js", "--scoped-verdict"]), 2)

    def test_hints_run_the_venv_python(self):
        document = run("typecheck")[1]
        self.assertTrue(document["help"])
        for hint in document["help"]:
            if "verify.py" in hint:
                self.assertIn("`.venv/bin/python scripts/verify.py ", hint)

    def test_tsc_failure_with_no_parseable_error_is_an_environment_error(self):
        with mock.patch.object(verify, "run_tsc", return_value=(1, "npm ERR! missing script\n")):
            self.assertEqual(run("typecheck")[0], 2)


@unittest.skipUnless((ROOT / "node_modules" / "typescript").is_dir(), "typescript is not installed: run npm ci")
class TypecheckLiveTests(unittest.TestCase):
    """The pinned tsc runs on a small project with known errors; a filter narrows the list, not the verdict."""

    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        root = Path(temp.name).resolve()
        (root / "node_modules").symlink_to(ROOT / "node_modules")
        (root / "package.json").write_text('{"scripts": {"typecheck": "tsc -p tsconfig.json --noEmit"}}')
        (root / "tsconfig.json").write_text('{"compilerOptions": {"allowJs": true, "checkJs": true, "noEmit": true,'
                                            ' "strict": true, "noUnusedLocals": true, "types": []},'
                                            ' "include": ["static/js/**/*.js"]}')
        (root / "static" / "js").mkdir(parents=True)
        (root / "static" / "js" / "old.js").write_text("const unusedOld = 1;\nexport {};\n")
        for argv in (["init", "-q"], ["add", "-A"],
                     ["-c", "user.name=t", "-c", "user.email=t@t", "commit", "-q", "-m", "old"]):
            verify.subprocess.run(["git", *argv], cwd=root, check=True, capture_output=True)
        (root / "static" / "js" / "new.js").write_text(
            "export function f(a) { return a; }\n/** @type {number} */\nexport const n = 'x';\n")
        for patch in (mock.patch.object(verify, "ROOT", root), mock.patch.object(verify, "LOG_DIR", root / ".verify")):
            patch.start()
            self.addCleanup(patch.stop)

    def test_summary_file_and_since_against_real_tsc(self):
        code, document = run("typecheck", "--summary")
        self.assertEqual((code, document["verdict"]), (1, "fail"))
        self.assertEqual(document["totals"], {"errors": 3, "files_with_errors": 2, "files_checked": 2})
        self.assertEqual(document["by_code"], [
            {"code": "TS2322", "count": 1, "example": "static/js/new.js:3"},
            {"code": "TS6133", "count": 1, "example": "static/js/old.js:1"},
            {"code": "TS7006", "count": 1, "example": "static/js/new.js:1"}])
        self.assertEqual(document["by_file"], [{"file": "static/js/new.js", "count": 2},
                                               {"file": "static/js/old.js", "count": 1}])
        self.assertEqual([e["file_line"] for e in document["first"]],
                         ["static/js/new.js:1", "static/js/new.js:3", "static/js/old.js:1"])
        for argv in (["--file", "static/js/new.js"], ["--since", "HEAD"]):
            code, document = run("typecheck", "--summary", *argv)
            self.assertEqual((code, document["verdict"], document["totals"]["errors"]), (1, "fail", 3))
            self.assertEqual((document["scope"]["errors_in_scope"], document["scope"]["errors_outside_scope"]), (2, 1))
            self.assertEqual(document["by_file"], [{"file": "static/js/new.js", "count": 2}])


def step(name, code=0, output=""):
    command = [sys.executable, "-c", f"import sys; print({output!r}); sys.exit({code})"]
    parse = {"python": lambda text: verify.parse_tests("python", text)}.get(name, lambda text: [])
    return (name, lambda base: command, parse)


class StageATests(unittest.TestCase):
    def setUp(self):
        self.log = tempfile.TemporaryDirectory()
        self.addCleanup(self.log.cleanup)
        self.steps = [step("validate"), step("build"), step("python")]
        for patch in (mock.patch.object(verify, "LOG_DIR", Path(self.log.name)),
                      mock.patch.object(verify, "tree_state", return_value=("abc", "tree"))):
            patch.start()
            self.addCleanup(patch.stop)

    def stage(self, *argv):
        with mock.patch.object(verify, "STEPS", self.steps):
            return run("stage-a", *argv)

    def test_all_steps_pass(self):
        code, document = self.stage()
        self.assertEqual((code, document["verdict"], document["failures"]), (0, "pass", []))
        self.assertEqual([row["status"] for row in document["steps"]], ["pass"] * 3)

    def test_a_failed_step_stops_and_names_the_failed_test(self):
        self.steps[1] = step("build", 1, "")
        self.steps[2] = step("python", 1, UNITTEST)
        code, document = self.stage()
        self.assertEqual((code, document["verdict"]), (1, "fail"))
        self.assertEqual([row["status"] for row in document["steps"]], ["pass", "fail", "not-run"])
        self.assertEqual(document["failures"][0]["step"], "build")
        self.assertTrue(document["failures"][0]["message"].startswith("exit 1"))

        self.steps[1] = step("build")
        code, document = self.stage()
        self.assertEqual(document["failures"][0]["file_line"], "tests/test_x.py:3")
        self.assertIn("python.log", document["help"][0])
        self.assertIn("`.venv/bin/python scripts/verify.py stage-a --only python --scoped-verdict`", document["help"][1])

    def test_only_is_not_a_pass_of_stage_a(self):
        self.steps[0] = step("validate", 1)
        code, document = self.stage("--only", "build,python")
        self.assertEqual((code, document["verdict"]), (1, "incomplete"))
        self.assertEqual(document["scope"]["steps_outside_scope"], 1)
        self.assertEqual(document["steps"][0]["status"], "skipped")

    def test_scoped_verdict_says_so_and_counts_the_rest(self):
        code, document = self.stage("--only", "python", "--scoped-verdict")
        self.assertEqual((code, document["verdict"]), (0, "pass"))
        self.assertIn("scoped: 2 steps outside the scope", document["scope"]["verdict_basis"])

    def test_usage_errors(self):
        for argv in (["--only", "bulid"], ["--only", ","], ["--scoped-verdict"], ["--base", "no-such-ref-x9"]):
            with self.subTest(argv=argv):
                code, document = self.stage(*argv)
                self.assertEqual((code, document["verdict"]), (2, "error"))

    def test_last_repeats_the_verdict_until_the_tree_changes(self):
        self.stage()
        code, document = run("last")
        self.assertEqual((code, document["verdict"]), (0, "pass"))
        with mock.patch.object(verify, "tree_state", return_value=("abc", "edited")):
            code, document = run("last")
        self.assertEqual((code, document["verdict"], document["recorded_verdict"]), (1, "stale", "pass"))

    def test_last_with_no_run_is_a_usage_error(self):
        self.assertEqual(run("last")[0], 2)


if __name__ == "__main__":
    unittest.main()
