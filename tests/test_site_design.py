import json
import re
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(ROOT / "tests"))

from published_corpus import attach_links, build_published_corpus  # noqa: E402
from test_site_shell import shell_pages  # noqa: E402


def read(name):
    return (SITE / name).read_text(encoding="utf-8")


def corpus_records():
    corpus = json.loads(read("corpus.json"))
    return {record["id"]: record for record in corpus["records"]}


BREEDEN = "visualization:breeden-litzenberger-density"
SCHWARTZ = "note:f19a4c6c267a88589593f70b893d21fb3a2d955614d67a8f6e457848ac20ce36"


class HomepageTests(unittest.TestCase):
    def setUp(self):
        self.page = read("index.html")

    def test_one_name_and_framing(self):
        self.assertIn("<title>Yu Jie Teo — Notes, Papers, Visuals</title>", self.page)
        self.assertIn('<h1 class="hero-title">Yu Jie Teo</h1>', self.page)
        self.assertNotIn(">Resources</h1>", self.page)
        self.assertNotIn("personal website", self.page.lower())
        self.assertRegex(self.page, r'<h2 class="collection-title"[^>]*>All resources <span class="collection-count">\d+</span>')

    def test_featured_strip_has_latest_items_and_the_pin(self):
        featured = re.search(r'<section class="featured".*?</section>', self.page, re.DOTALL).group(0)
        labels = re.findall(r'<p class="card-type">([^<]+)</p>', featured)
        self.assertEqual(labels[:2], ["Latest note", "Latest visual"])
        self.assertRegex(labels[2], r"^Latest (episode|video)$")
        self.assertEqual(labels[3], "Pinned visual")
        self.assertIn('href="visuals/breeden-litzenberger-density/index.html"', featured)
        # The pinned visual is not repeated as the latest visual.
        self.assertEqual(featured.count("breeden-litzenberger-density"), 1)

    def test_filters_are_labelled_facets(self):
        self.assertIn('<label class="filter-label" for="entry-search">Filter this list</label>', self.page)
        self.assertNotIn("tag-more-hint", self.page)
        self.assertNotIn("type above", self.page)
        self.assertNotIn('class="search-btn"', self.page)
        legends = re.findall(r'<legend class="facet-legend">([^<]+)</legend>', self.page)
        self.assertEqual(legends, ["Subject", "Approach", "Tool", "Region"])
        for fieldset in re.findall(r'<fieldset class="facet".*?</fieldset>', self.page, re.DOTALL):
            visible = re.findall(r'<button type="button" class="tag" ', fieldset)
            self.assertLessEqual(len(visible), 8)
            if "tag-extra" in fieldset:
                self.assertIn('class="facet-more" aria-expanded="false"', fieldset)


class LinkTests(unittest.TestCase):
    def test_links_are_written_both_ways(self):
        records = corpus_records()
        self.assertIn({"rel": "resolves", "target": SCHWARTZ}, records[BREEDEN]["links"])
        self.assertIn({"rel": "resolvedBy", "target": BREEDEN}, records[SCHWARTZ]["links"])

    def test_missing_target_fails_the_build(self):
        cv = {"name": "N", "bio": "B", "bio_html": "<p>B</p>"}
        about = {"intro": "I", "intro_html": "<p>I</p>", "sections": []}
        corpus = build_published_corpus(cv, about, [], [], [], {"entries": []})
        with self.assertRaisesRegex(ValueError, "not in the Published Corpus"):
            attach_links(corpus, [("profile:site", "related", "note:missing")])

    def test_related_items_are_shown(self):
        self.assertIn('<span class="related-rel">Resolves</span>', read("visuals.html"))
        notes = read("notes.html")
        self.assertIn('<span class="related-rel">Resolved by</span>', notes)
        self.assertIn("Has related items", notes)


class OpenQuestionsTests(unittest.TestCase):
    def test_lists_todo_notes_and_resolutions(self):
        page = read("open-questions.html")
        self.assertIn('<h1 class="page-title">Open questions</h1>', page)
        self.assertIn('<span class="status status-open">Open</span>', page)
        self.assertIn('<span class="status status-resolved">Resolved</span>', page)
        self.assertIn('Resolved by &rarr; <a href="visuals/breeden-litzenberger-density/index.html">', page)
        self.assertIn('href="open-questions.html"', read("notes.html"))


class NotesTimelineTests(unittest.TestCase):
    def test_timeline_groups_by_year_and_month(self):
        page = read("notes.html")
        self.assertIn('data-view-switch hidden', page)
        self.assertIn('data-view-panel="timeline"', page)
        self.assertIn('data-view-panel="list"', page)
        months = re.findall(r'<details class="timeline-month" data-month="(\d{4}-\d{2})"( open)?>', page)
        self.assertGreater(len(months), 1)
        self.assertEqual([month for month, is_open in months if is_open], [months[0][0]])
        self.assertEqual([month for month, _ in months], sorted((month for month, _ in months), reverse=True))
        for item in re.findall(r'<li class="timeline-item".*?</li>', page, re.DOTALL):
            self.assertLessEqual(item.count('class="tag tag-small"'), 3)


class ShellTests(unittest.TestCase):
    def test_colophon_and_footer(self):
        page = read("colophon.html")
        self.assertIn('id="ai-assistance"', page)
        self.assertIn("skills/playbooks/", page)
        for path in shell_pages():
            with self.subTest(page=str(path.relative_to(SITE))):
                self.assertRegex(path.read_text(encoding="utf-8"),
                                 r'href="(?:\.\./)*colophon\.html#ai-assistance">Made with the assistance of AI</a>')

    def test_theme_can_be_chosen(self):
        css = (ROOT / "static/css/style.css").read_text(encoding="utf-8")
        self.assertIn(':root:not([data-theme="light"])', css)
        self.assertIn(':root[data-theme="dark"]', css)
        template = (ROOT / "templates/base.html").read_text(encoding="utf-8")
        self.assertIn('data-theme-switch hidden', template)
        self.assertIn('data-nav-toggle aria-expanded="false"', template)


if __name__ == "__main__":
    unittest.main()
