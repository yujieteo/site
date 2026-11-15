"""Shared settings for the forecaster audit. Every rule here is part of the frozen method."""

import hashlib
import html
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
AUDIT = HERE.parent
DATA = AUDIT / "data"


def dumps_dir() -> Path:
    d = os.environ.get("FA_DUMPS")
    if not d:
        sys.exit("set FA_DUMPS to the folder that holds the dumps")
    return Path(d)


# The 40 people, in published rank order. HN accounts by username, LessWrong writers by user id.
HN_PEOPLE = [
    "stcredzero", "wmf", "gojomo", "adventured", "jonnathanson", "earl", "Zigurd", "gbog",
    "nostrademons", "potatolicious", "dasil003", "snowwrestler", "nl", "jsjenkins168",
    "Samuel_Michon", "bane", "bryanlarsen", "SwellJoe", "tptacek", "btilly",
]
LW_PEOPLE = [
    ("Zvi", "N9zj5qpTfqmbn9dro"), ("gwern", "BtbwfsEyeT4P2eqXu"),
    ("Daniel Kokotajlo", "YLFQfGzNdGA4NFcKS"), ("Matthew Barnett", "TWDkQT6f9mgyNXQ4p"),
    ("Rohin Shah", "du6SPHKnnPrPmxWNT"), ("Richard_Kennaway", "tumpuMka2DnK7zW73"),
    ("paulfchristiano", "gb44edJjXhte8DA3A"), ("knb", "YEwEAL5Mu6YxaX4rD"),
    ("Costanza", "cXudnoTp54SYgqfgF"), ("jsteinhardt", "EF8W65G6RaXxZjLBX"),
    ("Mati_Roy", "Tw9etd8rMnHLeSQ9q"), ("orthonormal", "4fh2AAe3n7oBviyxx"),
    ("Cthulhoo", "9Bn8KsjZrr5DmFNHW"), ("mfb", "Ze9tyaDB9MZDh9XKZ"),
    ("JoshuaZ", "fmTiLqp6mmXeLjwfN"), ("Liam Donovan", "HeRKphdWzJhkfWuJh"),
    ("Dagon", "3EiFeonpTS34c3vzZ"), ("Kevin", "8GnKujYLZ2ZZLs5zk"),
    ("TheRev", "Qf7dawgKSDMJ3BjkN"), ("AspiringKnitter", "wyuRmEzfzp3zGgSNK"),
]

# Selection windows of the published rankings (UTC, start inclusive, end exclusive).
HN_IN = ("2007-01-01", "2020-01-01")
LW_IN = ("2005-01-01", "2022-01-01")
# Out-of-sample: everything after the selection window, up to the freeze.
FREEZE = "2026-11-15"
# Outcomes the AI judges must be due on or before this day; later ones count as open.
KNOWN_BY = "2026-05-31"

# --- Candidate rule (C) -------------------------------------------------------------------
# A text is a candidate when, after quoted lines are removed, one of these matches.
_APOS = r"(?:'|’)"
COMMIT = [
    r"\bI\s+(?:confidently\s+)?(?:predict|forecast)\b",
    r"\bmy\s+(?:prediction|forecast|bet)\s+(?:is|would\s+be)\b",
    rf"\bI(?:{_APOS}d|\s+would|{_APOS}ll|\s+will)\s+(?:happily\s+|gladly\s+)?(?:bet|wager|put\s+money)\b",
    rf"\bI(?:{_APOS}m|\s+am)\s+(?:betting|predicting|calling\s+it)\b",
    r"\b(?:willing|happy)\s+to\s+bet\b",
    r"\bmark\s+my\s+words\b",
    r"\bcalling\s+it\s+now\b",
]
CHANCE = [
    r"\b\d{1,3}(?:\.\d+)?\s?%\s+(?:chance|probability|likely|likelihood|odds|confiden\w*|sure|certain)\b",
    r"\b(?:chance|probability|likelihood|odds|credence|confiden\w*)\s+(?:of\s+|is\s+|at\s+|that\s+[^.?!]{0,60}?)?"
    r"(?:about\s+|around\s+|roughly\s+|maybe\s+)?\d{1,3}(?:\.\d+)?\s?%",
    r"\b\d{1,3}\s?(?:to|:)\s?\d{1,3}\s+odds\b",
    r"\bodds\s+(?:of|are|at)\s+\d{1,3}\s?(?:to|:)\s?\d{1,3}\b",
]
CANDIDATE = re.compile("|".join(COMMIT + CHANCE), re.I)
# LessWrong also takes every comment under a post whose title names predictions.
PREDICTION_THREAD = re.compile(r"\bpredictions?\b", re.I)

# --- Prefilter (F): only texts that could get a price go to the AI ------------------------
STATED = re.compile(
    "|".join([
        r"\d{1,3}(?:\.\d+)?\s?%", r"\bpercent\b",
        r"\b\d{1,3}\s?(?:to|:)\s?\d{1,3}\s+(?:odds|against|on)\b", r"\bodds\s+(?:of|are|at)\s+\d",
        r"\bp\s?[=:]\s?0?\.\d+", r"\bP\([^)]{1,80}\)\s?[=≈~]\s?0?\.\d+",
        r"\bprobability\s+(?:of\s+)?0?\.\d+", r"\b1\s+in\s+\d+\b",
        r"\b(?:even\s+odds|even\s+money|50/50|fifty-fifty|coin\s?flip)\b",
    ]),
    re.I,
)
MACRO = re.compile(
    r"\b(?:unemployment|inflation|CPI|GDP|recession|fed\s+funds|federal\s+funds|interest\s+rates?|"
    r"treasury\s+yields?|10-year\s+yield|mortgage\s+rates?|housing\s+starts|payrolls|jobless)\b",
    re.I,
)
# First day each price source can price a forecast. Metaculus needs METACULUS_TOKEN.
MARKET_START = {
    "metaculus": "2015-10-01",
    "polymarket": "2020-06-01",
    "kalshi": "2021-07-01",
    "manifold": "2021-12-01",
}

# --- Text handling -------------------------------------------------------------------------
_TAG = re.compile(r"<[^>]+>")
_BLOCK = re.compile(r"<(?:/p|p|br|/li|li|/blockquote|/h\d|/div)\b[^>]*>", re.I)
_BQ = re.compile(r"<blockquote\b.*?</blockquote>", re.I | re.S)


def plain(text_html: str) -> str:
    """HTML to plain text, with quoted material removed (blockquotes and lines starting with '>')."""
    t = _BQ.sub("\n", text_html or "")
    t = _BLOCK.sub("\n", t)
    t = html.unescape(_TAG.sub("", t))
    lines = [ln.strip() for ln in t.split("\n")]
    lines = [ln for ln in lines if ln and not ln.startswith(">")]
    return "\n".join(lines)


def windows(text: str, pattern: re.Pattern, width: int = 600, cap: int = 20) -> list[str]:
    """Spans of +-width characters around each match, merged when they overlap, at most cap."""
    spans = []
    for m in pattern.finditer(text):
        a, b = max(0, m.start() - width), min(len(text), m.end() + width)
        if spans and a <= spans[-1][1]:
            spans[-1][1] = max(spans[-1][1], b)
        else:
            spans.append([a, b])
    return [text[a:b] for a, b in spans[:cap]]


def sha256(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def iso(ts: float) -> str:
    return datetime.fromtimestamp(ts, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def day(s: str) -> str:
    return s[:10]


# --- Polite HTTP -----------------------------------------------------------------------------
UA = "forecaster-audit/1.0 (+https://teoyujie.org/forecasters.html)"
_last: dict[str, float] = {}


def get(url: str, pause: float, data: bytes | None = None, headers: dict | None = None, tries: int = 4):
    """GET or POST with a fixed pause per host and retries with backoff. Returns parsed JSON."""
    host = url.split("/")[2]
    for attempt in range(tries):
        wait = _last.get(host, 0) + pause - time.time()
        if wait > 0:
            time.sleep(wait)
        _last[host] = time.time()
        req = urllib.request.Request(url, data=data, headers={"User-Agent": UA, **(headers or {})})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.loads(r.read())
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as e:
            code = getattr(e, "code", None)
            if code in (400, 401, 403, 404):
                raise
            time.sleep(5 * 2**attempt)
    raise RuntimeError(f"gave up on {url}")


def read_jsonl(path: Path):
    with open(path, encoding="utf-8") as f:
        for line in f:
            if line.strip():
                yield json.loads(line)


def write_jsonl(path: Path, rows) -> int:
    path.parent.mkdir(parents=True, exist_ok=True)
    n = 0
    with open(path, "w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False, sort_keys=True) + "\n")
            n += 1
    return n
