"""The content scaffolds (new_post, add_note, add_video, add_deck, add_links) and the Stage A runner,
each run on a small temporary repository: no build, browser or network."""

import contextlib
import io
import json
import shutil
import struct
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import add_deck  # noqa: E402
import add_links  # noqa: E402
import add_note  # noqa: E402
import add_video  # noqa: E402
import new_post  # noqa: E402
import stage_a  # noqa: E402

REGISTRY = {
    "version": 1,
    "classes": {"topic": "A subject."},
    "arxiv_math": {"source": "https://arxiv.org/category_taxonomy", "checked": "2026-09-27", "categories": []},
    "tags": {
        "website": {"class": "topic", "description": "The site.", "aliases": ["site"], "replaced_by": None},
        "todo": {"class": "topic", "description": "To do.", "aliases": [], "replaced_by": None},
        "agent-written": {"class": "topic", "description": "By an agent.", "aliases": [], "replaced_by": None},
        "old-topic": {"class": "topic", "description": "Old.", "aliases": [], "replaced_by": "website"},
    },
}
NOTES = """---
title: "Notes"
---

<!-- Use a ## YYYY-MM-DD heading. -->

## 2026-10-03

Newest note. #website

## 2026-09-30

Older note. #website
"""


def run(main, *argv):
    """(exit code, stdout, stderr) of a script's main(argv)."""
    out, err = io.StringIO(), io.StringIO()
    with contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
        code = main([*argv])
    return code, out.getvalue(), err.getvalue()


def mp4(seconds, timescale=1000, version=0):
    """A minimal MP4: an ftyp box, then a moov box holding an mvhd box with the duration."""
    if version:
        body = struct.pack(">B3xQQIQ", 1, 0, 0, timescale, round(seconds * timescale)) + bytes(80)
    else:
        body = struct.pack(">B3xIIII", 0, 0, 0, timescale, round(seconds * timescale)) + bytes(80)
    mvhd = struct.pack(">I4s", 8 + len(body), b"mvhd") + body
    ftyp = struct.pack(">I4s", 16, b"ftyp") + b"isom\0\0\0\0"
    return ftyp + struct.pack(">I4s", 8 + len(mvhd), b"moov") + mvhd


class TempRepo(unittest.TestCase):
    def setUp(self):
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        self.root = Path(tmp.name)
        for folder in ("data/blog", "data/podcasts/video", "data/decks", "data/paper-links", "data/resources", "schema"):
            (self.root / folder).mkdir(parents=True)
        (self.root / "data/note-tags.json").write_text(json.dumps(REGISTRY), encoding="utf-8")
        (self.root / "data/notes.md").write_text(NOTES, encoding="utf-8")
        for name in ("blog", "podcasts", "paper-links", "resources"):
            shutil.copy(ROOT / f"schema/{name}.schema.json", self.root / "schema")

    def write(self, path, text):
        (self.root / path).parent.mkdir(parents=True, exist_ok=True)
        (self.root / path).write_text(text, encoding="utf-8")


class NewPostTests(TempRepo):
    def post(self, *extra):
        return run(new_post.main, "a-post", "--title", "A post", "--summary", "Short.", "--category", "Computing",
                   "--date", "2026-10-04", "--root", str(self.root), *extra)

    def test_writes_valid_front_matter_with_canonical_tags(self):
        self.write("data/blog/old.md", '---\ntitle: Old\ntags: "slides, fpl"\n---\nBody.\n')
        code, out, _ = self.post("--tag", "site", "--tag", "slides", "--tag", "old-topic")
        self.assertEqual(code, 0, out)
        text = (self.root / "data/blog/a-post.md").read_text(encoding="utf-8")
        self.assertEqual(text, '---\ntitle: "A post"\ndate: "2026-10-04"\nsummary: "Short."\ncategory: "Computing"\n'
                               'tags: "website, slides"\nslug: a-post\n---\n\n')

    def test_second_run_changes_nothing_and_check_writes_nothing(self):
        self.assertEqual(self.post("--tag", "website", "--check")[0], 0)
        self.assertFalse((self.root / "data/blog/a-post.md").exists())
        self.post("--tag", "website")
        (self.root / "data/blog/a-post.md").write_text(
            (self.root / "data/blog/a-post.md").read_text(encoding="utf-8") + "The body.\n", encoding="utf-8")
        code, out, _ = self.post("--tag", "website")
        self.assertEqual((code, "nothing to do" in out), (0, True))

    def test_refuses_unknown_tags_bad_input_and_other_front_matter(self):
        self.assertIn("unknown tag 'quantum'", self.post("--tag", "quantum")[2])
        self.assertEqual(self.post("--tag", "quantum", "--new-tag", "quantum")[0], 0)
        self.assertIn("other front matter", self.post("--tag", "website")[2])
        self.assertIn("must be YYYY-MM-DD", run(new_post.main, "b", "--title", "T", "--summary", "S", "--category", "C",
                                                "--tag", "website", "--date", "4 Oct", "--root", str(self.root))[2])
        self.assertIn("slug", run(new_post.main, "Bad_Slug", "--title", "T", "--summary", "S", "--category", "C",
                                  "--tag", "website", "--root", str(self.root))[2])


class AddNoteTests(TempRepo):
    def note(self, text, *extra):
        return run(add_note.main, "--text", text, "--root", str(self.root), *extra)

    def notes(self):
        return (self.root / "data/notes.md").read_text(encoding="utf-8")

    def test_goes_on_top_of_its_section_with_canonical_tags(self):
        code, _, err = self.note("Second note.", "--date", "2026-10-03", "--tag", "site", "--agent-written")
        self.assertEqual(code, 0, err)
        self.assertIn("## 2026-10-03\n\nSecond note. #website #agent-written\n\nNewest note. #website\n", self.notes())

    def test_a_missing_date_gets_its_heading_in_order(self):
        self.note("Between.", "--date", "2026-10-01", "--tag", "website")
        self.note("Newer.", "--date", "2026-10-09", "--tag", "website")
        self.note("Oldest.", "--date", "2026-01-01", "--tag", "website")
        text = self.notes()
        headings = [line for line in text.splitlines() if line.startswith("## ")]
        self.assertEqual(headings, ["## 2026-10-09", "## 2026-10-03", "## 2026-10-01", "## 2026-09-30", "## 2026-01-01"])
        self.assertIn("## 2026-10-01\n\nBetween. #website\n\n## 2026-09-30", text)
        self.assertTrue(text.endswith("## 2026-01-01\n\nOldest. #website\n"))

    def test_second_run_changes_nothing_and_check_writes_nothing(self):
        self.note("Once.", "--date", "2026-10-03", "--tag", "website", "--check")
        self.assertEqual(self.notes(), NOTES)
        self.note("Once.", "--date", "2026-10-03", "--tag", "website")
        after = self.notes()
        code, out, _ = self.note("Once.", "--date", "2026-10-03", "--tag", "website")
        self.assertEqual((code, self.notes(), "nothing to do" in out), (0, after, True))

    def test_refuses_unknown_tags_inline_tags_and_incomplete_todos(self):
        self.assertIn("unknown tag 'quantum'", self.note("X.", "--tag", "quantum")[2])
        self.assertIn("give them with --tag", self.note("X. #website", "--tag", "website")[2])
        self.assertIn("blank line", self.note("One.\n\nTwo.", "--tag", "website")[2])
        self.assertIn("a date and", self.note("Do it.", "--date", "2026-10-04", "--tag", "todo")[2])
        self.assertEqual(self.note("Do it by 2026-10-31, done when it ships.", "--date", "2026-10-04", "--tag", "todo")[0], 0)
        self.assertEqual(self.notes().count("## 2026-10-04"), 1)


class AddVideoTests(TempRepo):
    ID = "2026-10-04-a-video"

    def video(self, *extra):
        return run(add_video.main, self.ID, "--title", "A video", "--summary", "Short.", "--focus-tag", "site",
                   "--root", str(self.root), *extra)

    def add_files(self, seconds=183.674):
        (self.root / f"data/podcasts/video/{self.ID}.mp4").write_bytes(mp4(seconds))
        self.write(f"data/podcasts/video/{self.ID}.vtt", "WEBVTT\n")
        (self.root / f"data/podcasts/video/{self.ID}.jpg").write_bytes(b"jpg")

    def test_reads_the_duration_from_the_mp4_header(self):
        path = self.root / "x.mp4"
        for version in (0, 1):
            path.write_bytes(mp4(234.4, timescale=90000, version=version))
            self.assertEqual(add_video.mp4_duration(path), 234.4)

    def test_writes_the_record_from_the_files_present(self):
        self.add_files()
        code, _, err = self.video()
        self.assertEqual(code, 0, err)
        self.assertEqual((self.root / f"data/podcasts/{self.ID}.yaml").read_text(encoding="utf-8"), (
            f"id: {self.ID}\ndate: '2026-10-04'\ntitle: A video\nsummary: Short.\nfocus_tags:\n- website\n"
            f"duration_seconds: 183.67\nvideo: video/{self.ID}.mp4\ncaptions: video/{self.ID}.vtt\n"
            f"poster: video/{self.ID}.jpg\n"))
        self.assertIn("nothing to do", self.video()[1])
        self.assertIn("other values", run(add_video.main, self.ID, "--title", "Other", "--summary", "S.",
                                          "--focus-tag", "website", "--root", str(self.root))[2])

    def test_refuses_missing_files_and_unknown_tags(self):
        self.assertIn(f"lacks {self.ID}.mp4, {self.ID}.vtt, {self.ID}.jpg", self.video()[2])
        self.add_files()
        self.assertIn("unknown focus tag", self.video("--focus-tag", "quantum")[2])
        self.assertEqual(self.video("--check")[0], 0)
        self.assertFalse((self.root / f"data/podcasts/{self.ID}.yaml").exists())


class AddDeckTests(TempRepo):
    def deck(self, html, slug="talk"):
        self.write(f"data/decks/{slug}/index.html", html)
        return run(add_deck.main, slug, "--root", str(self.root))

    def test_a_self_contained_deck_passes_and_prints_its_link(self):
        (self.root / "data/decks/talk/slides/light").mkdir(parents=True)
        (self.root / "data/decks/talk/slides/light/1.svg").write_text("<svg/>", encoding="utf-8")
        self.write("data/blog/post.md", "---\ntitle: P\n---\n[Talk](../decks/talk/index.html)\n")
        code, out, _ = self.deck('<style>p{}</style><img src="slides/light/1.svg"><img src="data:,">'
                                 '<a href="https://example.org/">ok</a><link rel="canonical" href="https://x/">')
        self.assertEqual(code, 0)
        self.assertIn("blog link: [talk](../decks/talk/index.html)", out)
        self.assertIn("linked from: data/blog/post.md", out)

    def test_refuses_external_or_unpublished_resources_and_notes(self):
        self.assertIn("from another site", self.deck('<script src="https://cdn.example/x.js"></script>')[2])
        self.write("data/decks/talk/source/style.css", "p{}")
        self.assertIn("not a published file", self.deck('<link rel="stylesheet" href="source/style.css">')[2])
        self.write("data/decks/talk/notes.md", "private")
        self.assertIn("must stay out of data/decks/", self.deck("<p>ok</p>")[2])
        self.assertIn("does not exist", run(add_deck.main, "missing", "--root", str(self.root))[2])


class AddLinksTests(TempRepo):
    def setUp(self):
        super().setUp()
        self.write("data/paper-links/paper-links.yaml", "- title: Old\n  url: https://example.org/old/\n  category: example.org\n  note: Old.\n")
        self.write("data/resources/resources.yaml", '- title: "Docs"\n  url: "https://docs.example.org/"\n  category: "systems"\n')

    def links(self, *argv):
        return run(add_links.main, *argv, "--root", str(self.root))

    def test_review_then_append_once(self):
        self.write("in.txt", "https://example.org/new A new paper. With detail.\n")
        review = self.root / "review.yaml"
        code, out, _ = self.links("paper", str(self.root / "in.txt"), "--review", str(review))
        self.assertEqual(code, 0)
        self.assertIn("skipped 0", out)
        self.assertEqual(review.read_text(encoding="utf-8"),
                         "- title: A new paper\n  url: https://example.org/new\n  category: example.org\n  note: A new paper. With detail.\n")
        review.write_text(review.read_text(encoding="utf-8").replace("title: A new paper", "title: Reviewed title"), encoding="utf-8")
        self.assertEqual(self.links("paper", str(review), "--no-refresh")[0], 0)
        text = (self.root / "data/paper-links/paper-links.yaml").read_text(encoding="utf-8")
        self.assertTrue(text.endswith("note: Old.\n- title: Reviewed title\n  url: https://example.org/new\n"
                                      "  category: example.org\n  note: A new paper. With detail.\n"))
        self.assertIn("already in data/paper-links/paper-links.yaml", self.links("paper", str(review), "--no-refresh")[2])

    def test_refuses_duplicates_unparsed_blocks_and_canonical_review_files(self):
        self.write("in.txt", "http://www.example.org/old A duplicate.\n")
        self.assertIn("already in", self.links("paper", str(self.root / "in.txt"), "--check")[2])
        self.write("in.txt", "https://docs.example.org A duplicate resource.\n")
        self.assertIn("already in data/resources/resources.yaml", self.links("paper", str(self.root / "in.txt"), "--check")[2])
        self.write("in.txt", "No URL here.\n")
        self.assertIn("skipped must be 0", self.links("paper", str(self.root / "in.txt"), "--check")[2])
        self.write("in.txt", "https://a.example/1 One.\n\nhttps://a.example/1/ Again.\n")
        self.assertIn("appears twice", self.links("resource", str(self.root / "in.txt"), "--check")[2])
        self.write("in.txt", "https://a.example/2 Two.\n")
        canonical = self.root / "data/paper-links/review.yaml"
        self.assertIn("outside data/", self.links("paper", str(self.root / "in.txt"), "--review", str(canonical))[2])
        self.assertFalse(canonical.exists())

    def test_a_file_with_blank_lines_between_records_keeps_them(self):
        self.write("data/resources/resources.yaml", '- title: "A"\n  url: "https://a.example/"\n  category: "x"\n\n'
                                                    '- title: "B"\n  url: "https://b.example/"\n  category: "x"\n')
        self.write("in.txt", "https://c.example/ C.\n\nhttps://d.example/ D.\n")
        self.assertEqual(self.links("resource", str(self.root / "in.txt"))[0], 0)
        self.assertTrue((self.root / "data/resources/resources.yaml").read_text(encoding="utf-8").endswith(
            'category: "x"\n\n- title: C\n  url: https://c.example/\n  category: c.example\n  note: C.\n\n'
            '- title: D\n  url: https://d.example/\n  category: d.example\n  note: D.\n'))

    def test_check_writes_nothing(self):
        self.write("in.txt", "https://a.example/3 Three.\n")
        before = (self.root / "data/resources/resources.yaml").read_text(encoding="utf-8")
        code, out, _ = self.links("resource", str(self.root / "in.txt"), "--check")
        self.assertEqual((code, "would append 1 records" in out), (0, True))
        self.assertEqual((self.root / "data/resources/resources.yaml").read_text(encoding="utf-8"), before)


class StageATests(unittest.TestCase):
    def test_lists_the_verify_md_commands_in_order(self):
        self.assertEqual([check for check, _ in stage_a.steps("origin/main")],
                         ["validate", "repo-check", "ruff", "build", "npm-ci", "typecheck", "tests"])
        self.assertEqual(dict(stage_a.steps("origin/main"))["tests"][-2:], ["--base", "origin/main"])
        self.assertNotIn("npm-ci", dict(stage_a.steps(None, npm_ci=False)))

    def test_stops_after_the_first_failure(self):
        python = sys.executable
        plan = [("one", [python, "-c", "print('first, ok')"]), ("two", [python, "-c", "import sys; sys.exit('broke')"]),
                ("three", [python, "-c", "pass"])]
        out = io.StringIO()
        self.assertFalse(stage_a.run(plan, ROOT, out))
        self.assertEqual(out.getvalue().splitlines(), [
            "stage,check,status,evidence", "A,one,PASS,first; ok", "A,two,FAIL,broke", "A,three,NOT RUN,stopped after two failed"])


if __name__ == "__main__":
    unittest.main()
