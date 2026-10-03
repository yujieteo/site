import csv
import io
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "scripts"
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
sys.path.insert(0, str(SCRIPTS))

import visual_sources  # noqa: E402
from visual_selection import covers  # noqa: E402


class VisualizationTests(unittest.TestCase):
    def test_environment_selects_visuals_repository(self):
        with tempfile.TemporaryDirectory() as directory:
            repository = Path(directory) / "visuals"
            repository.mkdir()
            with patch.dict(os.environ, {"VISUALS_REPO": str(repository)}):
                self.assertEqual(visual_sources.resolve_visuals_repo(), repository.resolve())

    def test_the_site_publishes_each_visuals_folder_unchanged(self):
        """Every published viz/<slug>/ of the visuals checkout: its page, data and assets, byte for byte."""
        entries = visual_sources.visuals_repo_visualizations(VISUALS_REPO)
        self.assertGreater(len(entries), 0)
        for entry in entries:
            slug = entry["slug"]
            if not covers(slug):
                continue
            with self.subTest(slug):
                published = ROOT / "site" / "visuals" / slug
                self.assertEqual((published / "index.html").read_bytes(),
                                 (VISUALS_REPO / entry["html_path"]).read_bytes())
                data = (VISUALS_REPO / entry["data_path"]).read_text(encoding="utf-8")
                parsed = list(csv.DictReader(io.StringIO(data, newline=""))) if entry["data_path"].endswith(".csv") else json.loads(data)
                self.assertEqual(json.loads((published / "data.json").read_text(encoding="utf-8")), parsed)
                for asset in entry.get("assets", []):
                    name = asset.removeprefix(f"viz/{slug}/")
                    self.assertEqual((published / name).read_bytes(), (VISUALS_REPO / asset).read_bytes())

    def test_unpublished_visuals_folders_are_left_out(self):
        unpublished = [path.parent.name for path in (VISUALS_REPO / "viz").glob("*/visual.json")
                       if json.loads(path.read_text(encoding="utf-8")).get("published", True) is False]
        listed = {entry["slug"] for entry in visual_sources.visuals_repo_visualizations(VISUALS_REPO)}
        for slug in unpublished:
            self.assertNotIn(slug, listed)
            self.assertFalse((ROOT / "site" / "visuals" / slug).exists(), slug)

    def test_gallery_and_corpus_list_a_visuals_folder(self):
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
        visualizations = visual_sources.load_visualizations()
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
        visualizations = visual_sources.load_visualizations()
        for page, prefix in (("site/visuals.html", "visuals/"), ("site/visuals/index.html", "")):
            with self.subTest(page=page):
                gallery = (ROOT / page).read_text()
                positions = [
                    gallery.index(f'<h2 class="entry-title"><a href="{prefix}{visualization["slug"]}/index.html"')
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
