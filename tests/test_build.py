import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
REPO_IGNORE = shutil.ignore_patterns(".git", ".venv", "__pycache__")

sys.path.insert(0, str(ROOT / "scripts"))

from pages import build_blog_post  # noqa: E402


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


# Runs a page's classic inline scripts as a browser would before MathJax loads,
# then reports the configuration MathJax reads from window.MathJax.
MATHJAX_CONFIG_JS = """
const vm = require("node:vm");
const document = {documentElement: {dataset: {}}, addEventListener() {}};
const context = vm.createContext({document, localStorage: {getItem() { return null; }}});
context.window = context;
for (const source of JSON.parse(process.argv[1])) vm.runInContext(source, context);
process.stdout.write(JSON.stringify(context.MathJax ?? null));
"""


class PageScripts(HTMLParser):
    def __init__(self):
        super().__init__()
        self.inline, self.sources, self._open = [], {}, None

    def handle_starttag(self, tag, attrs):
        if tag != "script":
            return
        attrs = dict(attrs)
        if "src" in attrs:
            self.sources[attrs.get("id")] = attrs["src"]
        elif attrs.get("type") in (None, "text/javascript"):
            self._open = []

    def handle_data(self, data):
        if self._open is not None:
            self._open.append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self._open is not None:
            self.inline.append("".join(self._open))
            self._open = None


def render_post(body_html):
    cv = {"name": "Test Author"}
    post = {"slug": "test-post", "title": "Test post", "date": "2026-10-02",
            "reading_minutes": 1, "copy_markdown": "", "body_html": body_html}
    page = build_blog_post(cv, post, [post], {"blog:test-post": {}}, "rev")
    scripts = PageScripts()
    scripts.feed(page)
    config = json.loads(subprocess.run(
        ["node", "-e", MATHJAX_CONFIG_JS, json.dumps(scripts.inline)],
        check=True, capture_output=True, text=True,
    ).stdout)
    return config, scripts.sources.get("MathJax-script")


class MathJaxTests(unittest.TestCase):
    def test_only_pages_with_maths_load_mathjax_4_in_fira_math(self):
        config, loader = render_post(r"<p>Euler: \(e^{i\pi} + 1 = 0\)</p>")
        self.assertEqual(config["output"]["font"], "mathjax-fira")
        self.assertEqual(
            loader, "https://cdnjs.cloudflare.com/ajax/libs/mathjax/4.1.3/tex-mml-chtml.js"
        )

        self.assertEqual(render_post("<p>No maths here.</p>"), (None, None))


if __name__ == "__main__":
    unittest.main()
