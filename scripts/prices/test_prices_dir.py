"""Run with python -m unittest discover -s scripts/prices."""
import gzip
import importlib.util
import json
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch


SCRIPT = Path(__file__).with_name("passthrough.py")


def load_analysis(home, **variables):
    spec = importlib.util.spec_from_file_location("prices_path_test", SCRIPT)
    module = importlib.util.module_from_spec(spec)
    with patch.dict(os.environ, variables, clear=True), patch("pathlib.Path.home", return_value=home):
        spec.loader.exec_module(module)
    return module


def write_comtrade(root, imported_value):
    folder = root / "comtrade"
    folder.mkdir(parents=True)
    with gzip.open(folder / "test.json.gz", "wt") as out:
        json.dump([{"flowCode": "M", "cmdCode": "0401", "partnerCode": 0,
                    "period": "202611", "primaryValue": imported_value, "netWgt": 2}], out)


class PricesDirectoryTest(unittest.TestCase):
    def test_unset_override_keeps_the_existing_default(self):
        home = Path("/test-home")
        analysis = load_analysis(home)
        self.assertEqual(analysis.ROOT, home / "data/library/sg-prices/upstream")

    def test_override_roots_daily_and_comtrade_inputs_in_the_same_tree(self):
        with tempfile.TemporaryDirectory() as tmp:
            home = Path(tmp) / "home"
            default = home / "data/library/sg-prices/upstream"
            parent = Path(tmp) / "custom price data"
            custom = parent / "upstream"
            write_comtrade(default, 100)
            write_comtrade(custom, 12)
            for root, date in ((default, "2026-11-20"), (custom, "2026-11-18"), (custom, "2026-11-19")):
                target = root / date / "sample.json.gz"
                target.parent.mkdir()
                target.touch()
            analysis = load_analysis(home, PRICES_DIR=str(parent))
            self.assertEqual(analysis.newest("sample.json.gz"), custom / "2026-11-19/sample.json.gz")
            month = analysis.mi(2026, 11)
            self.assertEqual(analysis.load_comtrade({month: 1}), {("0401", 0): {month: 6}})

    def test_relative_override_stays_relative_to_working_directory(self):
        analysis = load_analysis(Path("/test-home"), PRICES_DIR="data/fixture")
        self.assertEqual(analysis.ROOT, Path("data/fixture/upstream"))
