"""Run with python -m unittest discover -s scripts/prices."""
import csv
import io
import unittest
from unittest.mock import patch

import passthrough


class StackUnitsTest(unittest.TestCase):
    def stack(self, rows, trade=None, good="milk", hs="0401", kind="plain"):
        picks = [{"day": "2026-11-19", "good": good, "kind": kind, **row} for row in rows]
        with patch.multiple(
            passthrough,
            STACK={good: (hs, good, kind)},
            shelf_rows=lambda: picks,
            load_fx=lambda: {},
            load_comtrade=lambda _: {(hs, 0): {1: 2.0}} if trade is None else trade,
        ):
            return list(csv.DictReader(io.StringIO(passthrough.stack_table()), delimiter="\t"))

    @staticmethod
    def values(row):
        return row["unit"], row["shelf_products"], row["shelf_sgd_per_unit"], row["import_share_%"]

    def test_litres_keep_the_shelf_price_but_do_not_report_a_ratio(self):
        row, = self.stack([{"unit": "L", "perUnit": "4"}])
        self.assertEqual(self.values(row), ("L", "1", "4.00", "nan"))

    def test_litres_and_kilograms_get_separate_medians(self):
        rows = self.stack([
            {"unit": "L", "perUnit": "4"},
            {"unit": "kg", "perUnit": "5"},
            {"unit": "kg", "perUnit": "7"},
        ])
        self.assertEqual([self.values(row) for row in rows], [
            ("kg", "2", "6.00", "33"), ("L", "1", "4.00", "nan"),
        ])

    def test_kilogram_price_stays_visible_without_import_data(self):
        row, = self.stack([{"unit": "kg", "perUnit": "4"}], trade={})
        self.assertEqual(self.values(row), ("kg", "1", "4.00", "nan"))

    def test_existing_egg_gram_conversion_still_compares_kilograms(self):
        row, = self.stack(
            [{"unit": "egg", "pack": "500 g", "name": "Eggs", "paid": "3"}],
            good="eggs", hs="0407", kind="caged",
        )
        self.assertEqual(self.values(row), ("kg", "1", "6.00", "33"))

    def test_no_matching_shelf_rows_produces_a_placeholder(self):
        row, = self.stack([{"kind": "flavoured", "unit": "L", "perUnit": "4"}])
        self.assertEqual(self.values(row), ("", "0", "nan", "nan"))
