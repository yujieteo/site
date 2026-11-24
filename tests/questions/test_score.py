"""Run with python -m unittest discover -s tests/questions."""
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest


HERE = Path(__file__).resolve().parent
URL = "https://example.invalid/Page?version=1"


class ScoreSourceTest(unittest.TestCase):
    def test_source_fetched_requires_a_matching_success(self):
        question = json.loads((HERE / "questions.jsonl").read_text().splitlines()[0])
        prefix = f"ANSWER: {question['answer']}\n"
        if question["as_of"]:
            prefix += f"AS_OF: {question['as_of']}\n"
        cases = (
            ("match", f"SOURCE: {URL}", URL, 200, "1/1"),
            ("fragment", "Source: HTTPS://EXAMPLE.INVALID/Page?version=1#heading", URL, 206, "1/1"),
            ("other-page", f"SOURCE: {URL}", URL.replace("/Page", "/Other"), 200, "0/1"),
            ("path-case", f"SOURCE: {URL}", URL.replace("/Page", "/page"), 200, "0/1"),
            ("query", f"SOURCE: {URL}", URL.replace("version=1", "version=2"), 200, "0/1"),
            ("failed", f"SOURCE: {URL}", URL, 404, "0/1"),
            ("refused", f"SOURCE: {URL}", URL, "refused", "0/1"),
            ("missing", "", URL, 200, "0/1"),
            ("blank", f"SOURCE:\n{URL}", URL, 200, "0/1"),
            ("malformed", "SOURCE: https://[invalid", URL, 200, "0/1"),
        )
        with tempfile.TemporaryDirectory() as tmp:
            run = Path(tmp) / "sample" / "rows.jsonl"
            run.parent.mkdir()
            rows = [
                {"id": question["id"], "label": "sample", "vendor": "mock", "model": name,
                 "reply": prefix + source, "fetches": [{"url": url, "status": status, "bytes": 10}]}
                for name, source, url, status, _ in cases
            ]
            run.write_text("".join(json.dumps(row) + "\n" for row in rows))
            result = subprocess.check_output(
                [sys.executable, "-I", str(HERE / "score.py"), tmp], text=True,
            )
        self.assertIn("source fetched", result.splitlines()[0])
        scored = {cols[2]: cols for row in result.splitlines() if row.startswith("sample ")
                  for cols in [row.split()]}
        for name, _, _, _, expected in cases:
            with self.subTest(name=name):
                self.assertEqual(scored[name][-1], expected)
                self.assertEqual(scored[name][4], "100%")
                self.assertEqual(scored[name][8], "1/1" if question["as_of"] else "-")
