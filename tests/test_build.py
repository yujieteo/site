import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()


class BuildTests(unittest.TestCase):
    def test_build_is_reproducible(self):
        # site/ is not committed; this compares the local build with a rebuild of a copy.
        self.assertTrue((ROOT / "site").is_dir(), "site/ is missing; run scripts/build.py first")
        expected_files = {
            path.relative_to(ROOT / "site"): path.read_bytes()
            for path in (ROOT / "site").rglob("*")
            if path.is_file()
        }

        with tempfile.TemporaryDirectory() as directory:
            project = Path(directory) / "site-project"
            shutil.copytree(
                ROOT,
                project,
                ignore=shutil.ignore_patterns(".git", ".venv", "__pycache__"),
            )
            subprocess.run(
                [str(Path(sys.executable)), "scripts/build.py"],
                cwd=project,
                check=True,
                capture_output=True,
                text=True,
                env=os.environ | {"VISUALS_REPO": str(VISUALS_REPO)},
            )

            actual_files = {
                path.relative_to(project / "site"): path.read_bytes()
                for path in (project / "site").rglob("*")
                if path.is_file()
            }

        self.assertEqual(actual_files, expected_files)


if __name__ == "__main__":
    unittest.main()
