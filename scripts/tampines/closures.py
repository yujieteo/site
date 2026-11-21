"""Settle the closed_by forecasts by when each closure happened, not by when a later scan saw it.

The rule is in the 21 November 2026 entry under Deviations in research/tampines/prereg.md.
"""
import csv
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit


def first_seen(prev: dict[str, str], evidence: str, today: str) -> str:
    """The date the checker first recorded closure evidence for a place, or blank if it has none."""
    if not evidence:
        return ""
    return prev.get("first_seen") or today


def iso_day(value: object) -> str | None:
    if not isinstance(value, str) or len(value) != 10:
        return None
    try:
        return date.fromisoformat(value).isoformat()
    except ValueError:
        return None


def read_event_dates(path: Path, place_ids: set[str]) -> dict[str, str]:
    """Reviewed closure dates by place ID. A bad row, or two rows for one place, gives no date."""
    try:
        with path.open(newline="", encoding="utf-8") as f:
            rows = list(csv.DictReader((line for line in f if not line.startswith("#")), delimiter="\t"))
    except OSError:
        return {}
    dates: dict[str, str] = {}
    bad: set[str] = set()
    for r in rows:
        pid, day, source = r.get("id"), iso_day(r.get("closed_on")), r.get("source_url") or ""
        parts = urlsplit(source) if not any(c.isspace() for c in source) else None
        if pid not in place_ids or day is None or not parts or parts.scheme != "https" or not parts.netloc:
            if pid:
                bad.add(pid)
            continue
        if pid in dates:
            bad.add(pid)
        dates[pid] = day
    return {pid: day for pid, day in dates.items() if pid not in bad}


def settle(
    ids: list[str], status: dict[str, tuple[str, str]], event_dates: dict[str, str], end: str,
) -> tuple[dict[str, int], list[str]]:
    """Return each place's outcome (1 closed by `end`, else 0) and the places still waiting for a date.

    status maps a place ID to (evidence, first_seen). A reviewed event date decides first. Without
    one, evidence first recorded on or before `end` counts, because the closure cannot come after
    it was seen. Evidence first recorded after `end`, or with no first_seen, waits for review.
    """
    outcomes: dict[str, int] = {}
    waiting: list[str] = []
    for pid in ids:
        evidence, seen = status.get(pid, ("", ""))
        if not evidence:
            outcomes[pid] = 0
        elif pid in event_dates:
            outcomes[pid] = int(event_dates[pid] <= end)
        elif iso_day(seen) is not None and seen <= end:
            outcomes[pid] = 1
        else:
            waiting.append(pid)
    return outcomes, waiting
