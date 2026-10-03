"""Independent content pull requests merge without conflicts.

The tests copy the repository into a scratch Git repository and clone the
visuals repository beside it, which every build reads as it is checked out,
open two content branches from the same base (each adding a visualization
built in this repository; one also adds a dated note and a blog post), build
each branch as a contributor would, and merge both. A visualization of the
visuals repository is added there, never on a branch here. The same branches
with the generated site/ committed, as it was before site/ left Git, are the
control: they conflict.
"""

import datetime
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
ENV = os.environ | {
    "GIT_AUTHOR_NAME": "Test",
    "GIT_AUTHOR_EMAIL": "test@example.invalid",
    "GIT_COMMITTER_NAME": "Test",
    "GIT_COMMITTER_EMAIL": "test@example.invalid",
    "GIT_CONFIG_GLOBAL": os.devnull,
    "GIT_CONFIG_NOSYSTEM": "1",
}


def run(project, *args, check=True):
    return subprocess.run(args, cwd=project, check=check, capture_output=True, text=True, env=ENV)


def git(project, *args, check=True):
    return run(project, "git", *args, check=check)


def stub(slug, html_path, data_path):
    return (
        f"slug: {slug}\n"
        f"title: Independent {slug}\n"
        f"summary: A visualization added on its own branch ({slug}).\n"
        "source_url: https://example.org/\n"
        'fetched: "2026-10-01"\n'
        f"html_path: {html_path}\n"
        f"data_path: {data_path}\n"
        "webmcp_tools: [get_metadata, get_rows, get_row]\n"
        "tags: [testing]\n"
        "category: data visualization\n"
    )


def visualization_sources(slug):
    return {
        "index.html": f"<!doctype html><title>{slug}</title>\n",
        "raw.json": json.dumps([{"slug": slug}]) + "\n",
    }


def local_visualization_files(slug):
    sources = visualization_sources(slug)
    return {
        f"data/visuals/{slug}.yaml": stub(slug, f"visuals/{slug}/index.html", f"visuals/{slug}/raw.json"),
        f"visuals/{slug}/index.html": sources["index.html"],
        f"visuals/{slug}/raw.json": sources["raw.json"],
        f"tests/{slug}.test.mjs": 'import test from "node:test";\n\ntest("placeholder", () => {});\n',
    }


class IndependentContentChangesTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls._directory = tempfile.TemporaryDirectory()
        cls.project = project = Path(cls._directory.name) / "site-project"
        visuals = Path(cls._directory.name) / "visuals"
        git(ROOT, "clone", "-q", "--shared", str(VISUALS_REPO), str(visuals))
        cls.visuals = visuals
        cls.visuals_commit = git(visuals, "rev-parse", "HEAD").stdout.strip()
        ENV["VISUALS_REPO"] = str(visuals)
        listed = git(ROOT, "ls-files", "-z", "--cached", "--others", "--exclude-standard").stdout
        for relative in filter(None, listed.split("\0")):
            source = ROOT / relative
            if source.is_file():
                (project / relative).parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(source, project / relative)
        git(project, "init", "-q", "-b", "main")
        git(project, "add", "-A")
        git(project, "commit", "-q", "-m", "base")
        cls.base = git(project, "rev-parse", "HEAD").stdout.strip()
        cls.build()
        cls.base_with_site = cls.commit_with_site(cls.base)

        notes = (project / "data/notes.md").read_text(encoding="utf-8")
        newest = max(
            datetime.date.fromisoformat(line[3:13])
            for line in notes.splitlines() if line.startswith("## 20")
        )
        cls.note_date = (newest + datetime.timedelta(days=1)).isoformat()
        heading = notes.index("\n## 20") + 1
        cls.branches = {
            "add-alpha": local_visualization_files("independent-alpha-local"),
            "add-beta-note-post": local_visualization_files("independent-beta-local") | {
                "data/notes.md": (
                    notes[:heading]
                    + f"## {cls.note_date}\n\nAn independent note marker. #fpl\n\n"
                    + notes[heading:]
                ),
                "data/blog/independent-gamma.md": (
                    '---\ntitle: "Independent gamma"\ndate: "2026-10-01"\n'
                    'summary: "A post added on its own branch."\ncategory: "General"\n---\n\n'
                    "Independent gamma body.\n"
                ),
            },
        }
        cls.status_after_build = {}
        cls.commits = {}
        cls.commits_with_site = {}
        for branch, files in cls.branches.items():
            git(project, "checkout", "-q", "-b", branch, cls.base)
            for relative, content in files.items():
                (project / relative).parent.mkdir(parents=True, exist_ok=True)
                (project / relative).write_text(content, encoding="utf-8")
            cls.build()
            cls.status_after_build[branch] = git(
                project, "status", "--porcelain", "--untracked-files=all"
            ).stdout
            git(project, "add", "-A")
            git(project, "commit", "-q", "-m", branch)
            cls.commits[branch] = git(project, "rev-parse", "HEAD").stdout.strip()
            cls.commits_with_site[branch] = cls.commit_with_site(cls.base_with_site)

        git(project, "checkout", "-q", "main")
        cls.merges = [git(project, "merge", "--no-edit", branch, check=False) for branch in cls.branches]
        cls.build()
        cls.merged_with_site = cls.commit_with_site(cls.base_with_site)

    @classmethod
    def tearDownClass(cls):
        cls._directory.cleanup()

    @classmethod
    def build(cls):
        run(cls.project, sys.executable, "scripts/build.py")

    @classmethod
    def commit_with_site(cls, parent):
        """Commit the working tree plus the built site/ on ``parent``, leaving HEAD alone."""
        git(cls.project, "add", "-A")
        git(cls.project, "add", "-f", "site")
        tree = git(cls.project, "write-tree").stdout.strip()
        git(cls.project, "reset", "-q")
        return git(cls.project, "commit-tree", tree, "-p", parent, "-m", "with site").stdout.strip()

    def test_a_built_branch_carries_only_its_sources(self):
        for branch, files in self.branches.items():
            with self.subTest(branch=branch):
                changed = {line[3:] for line in self.status_after_build[branch].splitlines()}
                self.assertEqual(changed, set(files))

    def test_independent_branches_merge_without_conflicts(self):
        for merge in self.merges:
            self.assertEqual(merge.returncode, 0, merge.stdout + merge.stderr)
        tree = git(self.project, "merge-tree", "--write-tree", *self.commits.values(), check=False)
        self.assertEqual(tree.returncode, 0, tree.stdout)

    def test_the_merged_build_publishes_both_changes(self):
        corpus = json.loads((self.project / "site/corpus.json").read_text(encoding="utf-8"))
        ids = {record["id"] for record in corpus["records"]}
        self.assertLessEqual(
            {
                "visualization:independent-alpha-local",
                "visualization:independent-beta-local",
                "blog:independent-gamma",
            },
            ids,
        )
        for slug in ("independent-alpha-local", "independent-beta-local"):
            with self.subTest(slug=slug):
                published = self.project / "site/visuals" / slug
                self.assertEqual((published / "index.html").read_text(encoding="utf-8"),
                                 visualization_sources(slug)["index.html"])
                self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")),
                                 [{"slug": slug}])
        notes_page = (self.project / "site/notes.html").read_text(encoding="utf-8")
        self.assertIn("An independent note marker.", notes_page)
        self.assertIn(self.note_date, notes_page)

    def test_committed_site_output_made_the_same_branches_conflict(self):
        tree = git(self.project, "merge-tree", "--write-tree", "--name-only", "--no-messages",
                   *self.commits_with_site.values(), check=False)
        self.assertEqual(tree.returncode, 1, tree.stdout)
        conflicts = set(tree.stdout.splitlines()[1:])
        self.assertIn("site/corpus.json", conflicts)
        self.assertIn("site/index.html", conflicts)
        self.assertTrue(all(path.startswith("site/") for path in conflicts), conflicts)

    def test_site_diff_lists_the_generated_files_a_deploy_uploads(self):
        committed = git(self.project, "diff", "--no-renames", "--name-status",
                        self.base_with_site, self.merged_with_site, "--", "site").stdout
        expected = sorted(committed.splitlines())
        self.assertIn("M\tsite/corpus.json", expected)
        self.assertIn("A\tsite/visuals/independent-alpha-local/index.html", expected)
        for base in (self.base, self.base_with_site):
            with self.subTest(base="rebuilt" if base == self.base else "committed"):
                rows = run(self.project, sys.executable, "scripts/site_diff.py", base,
                           "--visuals-base", self.visuals_commit).stdout.splitlines()
                self.assertEqual(rows[0], "M\tsite/corpus.json")
                self.assertEqual(sorted(rows), expected)

    def test_site_diff_lists_a_visual_changed_in_the_visuals_repository_since_the_deploy(self):
        """A deploy's upload set includes a visual that changed in yujieteo/visuals, not only in this repository."""
        missing = run(self.project, sys.executable, "scripts/site_diff.py", "HEAD", check=False)
        self.assertNotEqual(missing.returncode, 0)
        self.assertIn("--visuals-base", missing.stderr)
        dirty = run(self.project, sys.executable, "scripts/site_diff.py", "HEAD",
                    "--visuals-base", f"{self.visuals_commit}+dirty", check=False)
        self.assertNotEqual(dirty.returncode, 0)
        self.assertIn("clean yujieteo/visuals checkout", dirty.stderr)
        slug = sorted(path.parent.name for path in (self.visuals / "viz").glob("*/visual.json")
                      if json.loads(path.read_text(encoding="utf-8")).get("published", True))[0]
        page = self.visuals / "viz" / slug / "index.html"
        page.write_text(page.read_text(encoding="utf-8") + "<!-- changed in the visuals repository -->\n", encoding="utf-8")
        git(self.visuals, "commit", "-q", "-am", f"change {slug}")
        try:
            self.build()
            rows = run(self.project, sys.executable, "scripts/site_diff.py", "HEAD",
                       "--visuals-base", self.visuals_commit).stdout.splitlines()
            self.assertEqual(rows, [f"M\tsite/visuals/{slug}/index.html"])
        finally:
            git(self.visuals, "reset", "-q", "--hard", self.visuals_commit)
            self.build()


if __name__ == "__main__":
    unittest.main()
