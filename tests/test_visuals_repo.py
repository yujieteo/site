"""The order in which the build looks for the yujieteo/visuals checkout, one test per branch.

Each test builds its checkouts in a temporary directory: no build, browser or network.
"""

import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from visual_sources import find_visuals_repo  # noqa: E402


def make_visuals(path):
    """A stand-in visuals checkout: a viz/ folder beside a .git entry."""
    (path / "viz").mkdir(parents=True)
    (path / ".git").mkdir()
    return path.resolve()


def git(cwd, *args):
    subprocess.run(["git", "-c", "user.name=t", "-c", "user.email=t@t", *args], cwd=cwd, check=True,
                   capture_output=True)


class VisualsRepoResolutionTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.tmp = Path(directory.name).resolve()
        # A plain directory, not a Git checkout, so there is no primary checkout to look beside.
        self.site = self.tmp / "work" / "projects" / "site"
        self.site.mkdir(parents=True)

    def test_visuals_repo_wins_over_siblings(self):
        make_visuals(self.tmp / "work" / "projects" / "visuals")
        configured = make_visuals(self.tmp / "elsewhere" / "visuals")
        self.assertEqual(find_visuals_repo(self.site, {"VISUALS_REPO": str(configured)}),
                         (configured, "VISUALS_REPO"))

    def test_missing_visuals_repo_is_an_error_even_with_a_sibling(self):
        make_visuals(self.tmp / "work" / "projects" / "visuals")
        with self.assertRaisesRegex(RuntimeError, "VISUALS_REPO is .*missing.*not a yujieteo/visuals checkout"):
            find_visuals_repo(self.site, {"VISUALS_REPO": str(self.tmp / "missing")})

    def test_visuals_repo_without_viz_is_an_error(self):
        (self.tmp / "empty" / ".git").mkdir(parents=True)
        with self.assertRaisesRegex(RuntimeError, "not a yujieteo/visuals checkout"):
            find_visuals_repo(self.site, {"VISUALS_REPO": str(self.tmp / "empty")})

    def test_siblings_are_tried_in_order(self):
        third = make_visuals(self.tmp / "work" / "tmp" / "visuals")
        self.assertEqual(find_visuals_repo(self.site, {}), (third, "sibling of this checkout"))
        second = make_visuals(self.tmp / "work" / "visuals")
        self.assertEqual(find_visuals_repo(self.site, {}), (second, "sibling of this checkout"))
        first = make_visuals(self.tmp / "work" / "projects" / "visuals")
        self.assertEqual(find_visuals_repo(self.site, {}), (first, "sibling of this checkout"))

    def test_a_sibling_that_is_not_a_visuals_checkout_is_skipped(self):
        (self.tmp / "work" / "projects" / "visuals").mkdir()
        second = make_visuals(self.tmp / "work" / "visuals")
        self.assertEqual(find_visuals_repo(self.site, {}), (second, "sibling of this checkout"))

    def test_nothing_found_lists_every_path_and_the_fix(self):
        with self.assertRaises(RuntimeError) as raised:
            find_visuals_repo(self.site, {})
        message = str(raised.exception)
        for path in ("work/projects/visuals", "work/visuals", "work/tmp/visuals"):
            self.assertIn(str(self.tmp / path), message)
        self.assertIn("export VISUALS_REPO=", message)
        self.assertIn("git clone https://github.com/yujieteo/visuals.git", message)


class WorktreeResolutionTests(unittest.TestCase):
    """A disposable worktree of a primary checkout finds the visuals checkout beside the primary one."""

    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.tmp = Path(directory.name).resolve()
        self.primary = self.tmp / "src" / "site"
        self.primary.mkdir(parents=True)
        git(self.primary, "init", "-q")
        git(self.primary, "commit", "-q", "--allow-empty", "-m", "init")
        self.worktree = self.tmp / "pool" / "site-1" / "3" / "site"
        git(self.primary, "worktree", "add", "-q", "--detach", str(self.worktree))

    def test_worktree_finds_the_primary_checkouts_sibling(self):
        visuals = make_visuals(self.tmp / "src" / "visuals")
        self.assertEqual(find_visuals_repo(self.worktree, {}),
                         (visuals, f"sibling of the primary checkout {self.primary}"))

    def test_worktree_prefers_its_own_sibling(self):
        make_visuals(self.tmp / "src" / "visuals")
        own = make_visuals(self.tmp / "pool" / "site-1" / "3" / "visuals")
        self.assertEqual(find_visuals_repo(self.worktree, {}), (own, "sibling of this checkout"))

    def test_primary_checkout_uses_only_its_own_siblings(self):
        visuals = make_visuals(self.tmp / "src" / "visuals")
        self.assertEqual(find_visuals_repo(self.primary, {}), (visuals, "sibling of this checkout"))

    def test_worktree_failure_lists_the_primary_checkouts_paths(self):
        with self.assertRaises(RuntimeError) as raised:
            find_visuals_repo(self.worktree, {})
        message = str(raised.exception)
        self.assertIn(str(self.tmp / "pool" / "site-1" / "3" / "visuals"), message)
        self.assertIn(str(self.tmp / "src" / "visuals"), message)
        self.assertIn(str(self.tmp / "tmp" / "visuals"), message)


if __name__ == "__main__":
    unittest.main()
