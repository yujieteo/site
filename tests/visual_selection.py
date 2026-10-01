"""Which visualisation folders the per-folder checks cover.

scripts/run_tests.py sets SITE_TEST_VISUALS to the comma-separated slugs whose folders a pull request
changes; when it is unset (pushes to main, a plain unittest run, or a selection that could not be computed)
every folder is covered. tests/beamdswitch-voice.test.mjs reads the same variable.
"""

import os


def covers(slug):
    names = os.environ.get("SITE_TEST_VISUALS")
    return names is None or slug in names.split(",")
