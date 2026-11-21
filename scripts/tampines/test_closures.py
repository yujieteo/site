"""Run with python -m unittest discover -s scripts/tampines.

The last test runs check.main() offline and needs beautifulsoup4, as check.py does.
"""
import contextlib
import importlib.util
import io
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

from closures import first_seen, read_event_dates, settle


END = "2027-11-15"
SOURCE = "https://example.org/closure-report"


class FirstSeenTest(unittest.TestCase):
    def test_new_evidence_on_a_blank_row_gets_today(self):
        self.assertEqual(first_seen({"evidence": "", "first_seen": ""}, "OSM element deleted", "2027-11-16"), "2027-11-16")
        self.assertEqual(first_seen({}, "OSM element deleted", "2027-11-16"), "2027-11-16")

    def test_earlier_date_is_kept_and_no_evidence_stays_blank(self):
        self.assertEqual(first_seen({"evidence": "x", "first_seen": "2027-03-16"}, "x", "2027-11-16"), "2027-03-16")
        self.assertEqual(first_seen({"evidence": "", "first_seen": ""}, "", "2027-11-16"), "")


class SettleTest(unittest.TestCase):
    def test_issue_cases(self):
        status = {
            "late-event": ("OSM disused/was prefix", "2027-11-16"),
            "found-late": ("ACRA Live -> Ceased Registration", "2027-11-16"),
            "undated-late": ("OSM element deleted", "2027-11-16"),
            "seen-in-time": ("OSM element deleted", "2027-11-15"),
            "open": ("", ""),
        }
        dates = {"late-event": "2027-11-16", "found-late": "2027-11-15"}
        y, waiting = settle(list(status), status, dates, END)
        self.assertEqual(y, {"late-event": 0, "found-late": 1, "seen-in-time": 1, "open": 0})
        self.assertEqual(waiting, ["undated-late"])

    def test_blank_first_seen_with_evidence_waits(self):
        y, waiting = settle(["p"], {"p": ("OSM element deleted", "")}, {}, END)
        self.assertEqual((y, waiting), ({}, ["p"]))

    def test_reviewed_date_decides_even_when_seen_in_time(self):
        y, waiting = settle(["p"], {"p": ("OSM element deleted", "2027-10-16")}, {"p": "2027-11-16"}, END)
        self.assertEqual((y, waiting), ({"p": 0}, []))

    def test_reviewed_date_without_evidence_does_not_count(self):
        y, _ = settle(["p"], {"p": ("", "")}, {"p": "2027-01-01"}, END)
        self.assertEqual(y, {"p": 0})


class EventDatesTest(unittest.TestCase):
    def dates(self, body):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "closure-dates-reviewed.tsv"
            path.write_text("id\tclosed_on\tsource_url\tnote\n" + body)
            return read_event_dates(path, {"p1", "p2", "p3"})

    def test_valid_rows_are_read(self):
        self.assertEqual(self.dates(f"# a comment\np1\t2027-11-16\t{SOURCE}\tlast day\n"), {"p1": "2027-11-16"})

    def test_bad_or_duplicated_rows_give_no_date(self):
        self.assertEqual(self.dates(
            f"p1\t16 Nov 2027\t{SOURCE}\t\n"
            f"p2\t2027-11-16\thttp://example.org/x\t\n"
            f"p3\t2027-11-14\t{SOURCE}\t\n"
            f"p3\t2027-11-16\t{SOURCE}\t\n"
            f"typo\t2027-11-16\t{SOURCE}\t\n"
        ), {})

    def test_unparsable_link_gives_no_date(self):
        self.assertEqual(self.dates("p2\t2027-11-16\thttps://[broken\t\n"), {})

    def test_missing_file_gives_no_dates(self):
        self.assertEqual(read_event_dates(Path("/nonexistent/closure-dates-reviewed.tsv"), {"p1"}), {})


@unittest.skipUnless(importlib.util.find_spec("bs4"), "needs beautifulsoup4")
class CheckerRunTest(unittest.TestCase):
    """Two checker runs: a closure seen on the deadline, then a later closure seen the day after."""

    def run_check(self, res, today, osm):
        import check

        with (
            patch.multiple(check, RES=res, RAW=res, TODAY=today, ACRA_FAILED=[]),
            patch.object(check.guides, "load_places", return_value=[{"id": "a", "name": "A"}, {"id": "b", "name": "B"}]),
            patch.object(check.guides, "read_urls", return_value=([], [])),
            patch.object(check, "new_articles", return_value=[]),
            patch.object(check, "osm_status", return_value=osm),
            patch.object(check, "acra_status", return_value={}),
            contextlib.redirect_stdout(io.StringIO()),
        ):
            check.main()
        return check.read(res / "scores.tsv"), check.read(res / "status.tsv")

    def test_late_closure_does_not_change_the_score(self):
        with tempfile.TemporaryDirectory() as tmp:
            res = Path(tmp)
            (res / "derived").mkdir()
            (res / "forecasts.tsv").write_text(
                "target\tid\tp_model\tp_baseline\nclosed_by\ta\t0.5\t0.2\nclosed_by\tb\t0.1\t0.2\n"
            )
            (res / "status.tsv").write_text("id\tname\tevidence\tfirst_seen\na\tA\t\t\nb\tB\t\t\n")
            scores, status = self.run_check(res, END, {"a": "OSM element deleted"})
            self.assertEqual(status[0]["first_seen"], END)
            first = [s for s in scores if s["target"] == "closed_by"][-1]
            self.assertEqual((first["note"], first["n"]), ("resolved", "2"))

            scores, status = self.run_check(res, "2027-11-16", {"b": "OSM disused/was prefix"})
            self.assertEqual([r["first_seen"] for r in status], [END, "2027-11-16"])
            pending = [s for s in scores if s["target"] == "closed_by"][-1]
            self.assertEqual(pending["note"], "awaiting reviewed closure dates for: b")
            self.assertEqual(pending["brier_model"], "")

            (res / "closure-dates-reviewed.tsv").write_text(f"id\tclosed_on\tsource_url\tnote\nb\t2027-11-16\t{SOURCE}\t\n")
            scores, _ = self.run_check(res, "2027-12-16", {})
            last = [s for s in scores if s["target"] == "closed_by"][-1]
            self.assertEqual(last["note"], "resolved")
            self.assertEqual(last["brier_model"], first["brier_model"])
            self.assertEqual(last["brier_baseline"], first["brier_baseline"])


if __name__ == "__main__":
    unittest.main()
