import hashlib
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
REPO_IGNORE = shutil.ignore_patterns(".git", ".venv", "__pycache__")


def digests(site):
    # site/ holds hundreds of MB of Kokoro weights; compare hashes, not bytes.
    result = {}
    for path in site.rglob("*"):
        if path.is_file():
            with path.open("rb") as handle:
                result[path.relative_to(site)] = hashlib.file_digest(handle, "sha256").hexdigest()
    return result


def ignore_for_copy(directory, names):
    # The copy's build regenerates site/, so do not copy the local one.
    ignored = set(REPO_IGNORE(directory, names))
    if Path(directory) == ROOT:
        ignored.add("site")
    return ignored


class BuildTests(unittest.TestCase):
    def test_build_is_reproducible(self):
        # site/ is not committed; this compares the local build with a rebuild of a copy.
        self.assertTrue((ROOT / "site").is_dir(), "site/ is missing; run scripts/build.py first")
        expected_files = digests(ROOT / "site")

        with tempfile.TemporaryDirectory() as directory:
            project = Path(directory) / "site-project"
            shutil.copytree(
                ROOT,
                project,
                ignore=ignore_for_copy,
            )
            subprocess.run(
                [str(Path(sys.executable)), "scripts/build.py"],
                cwd=project,
                check=True,
                capture_output=True,
                text=True,
                env=os.environ | {"VISUALS_REPO": str(VISUALS_REPO)},
            )

            actual_files = digests(project / "site")

        self.assertEqual(actual_files, expected_files)


if __name__ == "__main__":
    unittest.main()
