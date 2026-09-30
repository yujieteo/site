import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "scripts"
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
sys.path.insert(0, str(SCRIPTS))

import build  # noqa: E402


class VisualizationTests(unittest.TestCase):
    def test_environment_selects_visuals_repository(self):
        with tempfile.TemporaryDirectory() as directory:
            repository = Path(directory) / "visuals"
            repository.mkdir()
            with patch.dict(os.environ, {"VISUALS_REPO": str(repository)}):
                self.assertEqual(build.resolve_visuals_repo(), repository.resolve())

    def test_generated_visualization_matches_pinned_sources(self):
        published = ROOT / "site" / "visuals" / "tourist-attractions"
        pin = (ROOT / "data/visuals/tourist-attractions.pin").read_text(encoding="utf-8").strip()

        def pinned(path):
            return subprocess.run(
                ["git", "show", f"{pin}:{path}"], cwd=VISUALS_REPO, check=True, capture_output=True
            ).stdout

        self.assertEqual(
            (published / "index.html").read_bytes(), pinned("viz/tourist-attractions/index.html")
        )
        self.assertEqual(
            json.loads((published / "data.json").read_text()),
            json.loads(pinned("data/tourist-attractions/raw.json")),
        )
        corpus = json.loads((ROOT / "site/corpus.json").read_text())
        record = next(
            item for item in corpus["records"]
            if item["id"] == "visualization:tourist-attractions"
        )
        self.assertEqual(record["dataUrl"], "visuals/tourist-attractions/data.json")
        self.assertEqual(
            record["webmcpTools"],
            ["get_data", "get_metadata", "query", "get_marketing_terms"],
        )
        nested_gallery = (ROOT / "site/visuals/index.html").read_text()
        root_gallery = (ROOT / "site/visuals.html").read_text()
        self.assertIn("../static/css/style.css", nested_gallery)
        self.assertIn('href="tourist-attractions/index.html"', nested_gallery)
        self.assertIn('href="static/css/style.css"', root_gallery)
        self.assertIn('href="visuals/tourist-attractions/index.html"', root_gallery)
        self.assertIn('href="visuals.html" aria-current="page">Visuals</a>', root_gallery)
        self.assertIn('href="../visuals.html" aria-current="page">Visuals</a>', nested_gallery)
        self.assertIn("## How Singapore attractions are marketed", (ROOT / "site/visuals.md").read_text())
        self.assertEqual((ROOT / "site/llms.txt").read_text().count("[Visuals]("), 1)

    def test_visualizations_are_newest_first_with_same_day_ties_by_slug(self):
        visualizations = build.load_visualizations()
        order = [(visualization["fetched"], visualization["slug"]) for visualization in visualizations]
        self.assertEqual(
            order, sorted(order, key=lambda item: (-int(item[0].replace("-", "")), item[1]))
        )
        corpus = json.loads((ROOT / "site/corpus.json").read_text())
        self.assertEqual(
            [record["id"] for record in corpus["records"] if record["kind"] == "visualization"],
            [f"visualization:{slug}" for _, slug in order],
        )

    def test_gallery_lists_visualizations_in_order_with_their_tags(self):
        visualizations = build.load_visualizations()
        for page, prefix in (("site/visuals.html", "visuals/"), ("site/visuals/index.html", "")):
            with self.subTest(page=page):
                gallery = (ROOT / page).read_text()
                positions = [
                    gallery.index(f'href="{prefix}{visualization["slug"]}/index.html"')
                    for visualization in visualizations
                ]
                self.assertEqual(positions, sorted(positions))
                articles = gallery.split('<article class="entry">')[1:]
                self.assertEqual(len(articles), len(visualizations))
                for article, visualization in zip(articles, visualizations):
                    self.assertTrue(visualization["tags"])
                    self.assertIn(f'datetime="{visualization["fetched"]}"', article)
                    for tag in visualization["tags"]:
                        self.assertIn(f'class="tag" data-tag="{tag}">{tag}</button>', article)
                        self.assertIn(f'data-facet="topic" data-tag="{tag}"', gallery)
                self.assertIn('data-kind="visualization"', gallery)
        self.assertIn('src="../static/js/filter.js"', (ROOT / "site/visuals/index.html").read_text())
        self.assertIn('src="static/js/filter.js"', (ROOT / "site/visuals.html").read_text())


if __name__ == "__main__":
    unittest.main()
