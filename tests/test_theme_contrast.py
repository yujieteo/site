"""WCAG contrast of the site's colour tokens in both themes, read from static/css/style.css."""

import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS = (ROOT / "static/css/style.css").read_text(encoding="utf-8")

# Text (WCAG 1.4.3) needs 4.5:1. --focus is the focus ring (1.4.11, 3:1) and also link-like button
# text on the page background. --border is left out: it outlines controls that are identified by
# their text, so a boundary contrast for it is a design decision, not a check.
TEXT = [("--foreground", "--background"), ("--foreground", "--surface"),
        ("--secondary", "--background"), ("--secondary", "--surface"),
        ("--focus", "--background")]
NON_TEXT = [("--focus", "--surface")]


def block(selector):
    """The declarations of the first rule whose selector is exactly ``selector``."""
    match = re.search(rf"(?:^|\n)\s*{re.escape(selector)}\s*\{{([^}}]*)\}}", CSS)
    if match is None:
        raise AssertionError(f"static/css/style.css has no {selector} rule")
    return match.group(1)


def colours(declarations):
    return dict(re.findall(r"(--[\w-]+):\s*(#[0-9a-fA-F]{6})\s*;", declarations))


def luminance(hex_colour):
    channels = [int(hex_colour[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    red, green, blue = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in channels]
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue


def contrast(first, second):
    light, dark = sorted((luminance(first), luminance(second)), reverse=True)
    return (light + 0.05) / (dark + 0.05)


LIGHT = colours(block(":root"))
DARK = colours(block(':root[data-theme="dark"]'))
SYSTEM_DARK = colours(block(':root:not([data-theme="light"])'))


class ContrastTests(unittest.TestCase):
    def test_contrast_meets_wcag_aa_in_both_themes(self):
        for theme, tokens in (("light", LIGHT), ("dark", DARK)):
            for pairs, minimum in ((TEXT, 4.5), (NON_TEXT, 3)):
                for colour, background in pairs:
                    with self.subTest(theme=theme, pair=f"{colour} on {background}"):
                        ratio = contrast(tokens[colour], tokens[background])
                        self.assertGreaterEqual(ratio, minimum, f"{ratio:.2f}:1")

    def test_the_system_dark_theme_is_the_chosen_dark_theme(self):
        # The dark colours are written twice (system preference and the footer's choice); one copy
        # must not drift from the other.
        self.assertEqual(SYSTEM_DARK, DARK)

    def test_contrast_matches_the_wcag_formula(self):
        self.assertAlmostEqual(contrast("#000000", "#ffffff"), 21)
        self.assertAlmostEqual(contrast("#777777", "#ffffff"), 4.48, places=2)


if __name__ == "__main__":
    unittest.main()
