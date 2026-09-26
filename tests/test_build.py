import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class BuildTests(unittest.TestCase):
    def test_build_matches_published_site(self):
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
            )

            actual_files = {
                path.relative_to(project / "site"): path.read_bytes()
                for path in (project / "site").rglob("*")
                if path.is_file()
            }

        self.assertEqual(actual_files, expected_files)


if __name__ == "__main__":
    unittest.main()
