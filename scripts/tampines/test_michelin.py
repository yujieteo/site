"""Run with python -m unittest discover -s scripts/tampines."""
import json
from pathlib import Path
import tempfile
import unittest

from michelin import read_selection


BIB = "https://guide.michelin.com/sg/en/article/bib-example"
STARS = "https://guide.michelin.com/sg/en/article/stars-example"
PLACES = {"bib-place", "star-place", "selected-place"}


def checked(url, ids):
    return {"checked": True, "source_url": url, "place_ids": ids}


class MichelinEvidenceTest(unittest.TestCase):
    def selection(self, record):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "michelin-2027-reviewed.json"
            if record is not None:
                path.write_text(json.dumps(record))
            return read_selection(path, 2027, PLACES)

    def test_preview_does_not_resolve_even_with_confirmed_bib(self):
        self.assertIsNone(self.selection(None))
        bib_only = {"edition": 2027, "bib": checked(BIB, ["bib-place"])}
        self.assertIsNone(self.selection(bib_only))
        self.assertIsNone(self.selection({
            **bib_only, "stars": {**checked(STARS, []), "checked": False},
        }))

    def test_complete_selection_accepts_bib_and_star_but_not_selected(self):
        listed, sources = self.selection({
            "edition": 2027, "bib": checked(BIB, ["bib-place"]),
            "stars": checked(STARS, ["star-place"]),
            "selected": checked(STARS, ["selected-place"]),
        })
        self.assertEqual(listed, {"bib-place", "star-place"})
        self.assertEqual(sources, (BIB, STARS))

    def test_checked_empty_categories_can_share_one_official_source(self):
        self.assertEqual(self.selection({
            "edition": 2027, "bib": checked(BIB, []), "stars": checked(BIB, []),
        }), (set(), (BIB,)))

    def test_wrong_edition_unofficial_source_or_unknown_id_stays_open(self):
        for edition, source, ids in (
            (2026, BIB, []),
            (2027, "https://example.invalid/stars", []),
            (2027, "https://[broken", []),
            (2027, BIB, ["typo"]),
            (2027, BIB, [True]),
            (2027, BIB, None),
        ):
            with self.subTest(edition=edition, source=source, ids=ids):
                self.assertIsNone(self.selection({
                    "edition": edition, "bib": checked(BIB, []),
                    "stars": checked(source, ids),
                }))

    def test_invalid_json_stays_open(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "michelin-2027-reviewed.json"
            path.write_text("[invalid")
            self.assertIsNone(read_selection(path, 2027, PLACES))
