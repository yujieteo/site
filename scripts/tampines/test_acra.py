"""Offline tests for the ACRA closure rule. Run with python -m unittest discover -s scripts/tampines.

They import check.py, so they need beautifulsoup4, as check.py does.
"""
import contextlib
import importlib.util
import io
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

WATCH = {"place_id": "fixture", "entity_name": "Example", "uen": "test-uen", "status": "Live"}

# Spelled as in the data.gov.sg ACRA datasets on 21 November 2026.
CLOSED = (
    "Struck Off",
    "Dissolved",
    "Dissolved - Members Voluntary Winding Up",
    "Dissolved - Creditors Voluntary Winding Up",
    "Dissolved - Compulsory Winding Up",
    "Dissolved - Compulsory Winding Up (Insolvency)",
    "Dissolved - Simplified Winding Up",
    "Struck Off (Early Dissolution)",
    "Struck Off (Early Dissolution - simplified winding up)",
    "Removed (Dissolved)",
    "Ceased Registration",
    "Terminated",
    "Cancelled",
    "Cancelled (Non-Renewal)",
)
OPEN = (
    "Live Company",
    "Gazetted To Be Struck Off",
    "In Liquidation",
    "In Liquidation - Members voluntary winding up",
    "In Liquidation - Creditors voluntary winding up",
    "In Liquidation - Compulsory Winding Up (Insolvency)",
    "Registration expired and has not been renewed",
    "Ceased Registration (Transferred to Singapore)",
)
# Statuses outside the list, and wrong spellings, are printed for review and never count.
UNKNOWN = ("Amalgamated", "Cancellation In Progress", "To Be Ceased", "struck off", "Gazetted to be Struck Off")


def response(*statuses):
    return {"result": {"records": [{"entity_status_description": status} for status in statuses]}}


@unittest.skipUnless(importlib.util.find_spec("bs4"), "needs beautifulsoup4")
class AcraStatusTests(unittest.TestCase):
    def classify(self, result):
        import check

        stderr = io.StringIO()
        with (
            patch.object(check, "acra_dataset_ids", return_value={"E": "fixture-dataset"}),
            patch.object(check, "get_json", return_value=result),
            patch.object(check, "ACRA_FAILED", []) as failed,
            contextlib.redirect_stderr(stderr),
        ):
            evidence = check.acra_status([WATCH])
        return evidence, failed, stderr.getvalue()

    def test_final_statuses_are_closures(self):
        for status in CLOSED:
            with self.subTest(status=status):
                self.assertEqual(self.classify(response(status)), ({"fixture": f"ACRA Live -> {status}"}, [], ""))

    def test_provisional_statuses_are_not_closures(self):
        for status in OPEN:
            with self.subTest(status=status):
                evidence, failed, stderr = self.classify(response(status))
                self.assertEqual((evidence, failed), ({}, []))
                self.assertIn("is not a closure", stderr)

    def test_unknown_statuses_are_not_closures_and_are_printed(self):
        for status in UNKNOWN:
            with self.subTest(status=status):
                evidence, failed, stderr = self.classify(response(status))
                self.assertEqual((evidence, failed), ({}, []))
                self.assertIn(f"unknown status {status!r}", stderr)

    def test_unchanged_status_is_silent(self):
        self.assertEqual(self.classify(response("Live")), ({}, [], ""))

    def test_missing_or_malformed_lookups_are_unresolved(self):
        for result, diagnostic in (
            (response(), "no matching record"),
            (response(None), "invalid status"),
            (response("  "), "invalid status"),
            ({"result": {"records": [{}]}}, "invalid status"),
            ({"result": {"records": {"entity_status_description": "Struck Off"}}}, "single matching record"),
            (response("Struck Off", "Live"), "single matching record"),
        ):
            with self.subTest(result=result):
                evidence, failed, stderr = self.classify(result)
                self.assertEqual((evidence, failed), ({}, ["fixture"]))
                self.assertIn(diagnostic, stderr)

    def test_provisional_responses_do_not_persist_into_later_live_run(self):
        import check

        for provisional in (response(), response("Gazetted To Be Struck Off"), response("Amalgamated")):
            with self.subTest(provisional=provisional), tempfile.TemporaryDirectory() as tmp:
                res = Path(tmp)
                (res / "derived").mkdir()
                (res / "forecasts.tsv").write_text("id\ttarget\tp_model\tp_baseline\nfixture\tclosed_by\t0.1\t0.2\n")
                (res / "derived/acra_watch.tsv").write_text(
                    "place_id\tentity_name\tuen\tstatus\nfixture\tExample\ttest-uen\tLive\n"
                )
                with (
                    patch.multiple(check, RES=res, RAW=res, TODAY="2027-01-01", ACRA_FAILED=[]),
                    patch.object(check.guides, "load_places", return_value=[{"id": "fixture", "name": "Example"}]),
                    patch.object(check.guides, "read_urls", return_value=([], [])),
                    patch.object(check, "new_articles", return_value=[]),
                    patch.object(check, "acra_dataset_ids", return_value={"E": "fixture-dataset"}),
                    patch.object(check, "get_json", side_effect=[provisional, response("Live")]),
                    contextlib.redirect_stderr(io.StringIO()),
                    contextlib.redirect_stdout(io.StringIO()),
                ):
                    for _ in range(2):
                        check.ACRA_FAILED.clear()
                        check.main()
                        status = check.read(res / "status.tsv")[0]
                        self.assertEqual((status["evidence"], status["first_seen"]), ("", ""))
                        closed = [s for s in check.read(res / "scores.tsv") if s["target"] == "closed_by"][-1]
                        self.assertEqual(closed["n"], "0")


if __name__ == "__main__":
    unittest.main()
