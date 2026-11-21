"""Read manually reviewed outcome evidence, never a partial release or guessed page format."""
import json
from pathlib import Path
from urllib.parse import urlsplit


def official_url(url: object) -> bool:
    if not isinstance(url, str) or any(c.isspace() for c in url):
        return False
    parsed = urlsplit(url)
    return parsed.scheme == "https" and parsed.netloc == "guide.michelin.com" and parsed.path not in ("", "/")


def read_selection(
    path: Path, edition: int, place_ids: set[str],
) -> tuple[set[str], tuple[str, ...]] | None:
    """Return the union only when both complete categories were checked against official sources."""
    try:
        record = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(record, dict) or record.get("edition") != edition:
            return None
        listed: set[str] = set()
        sources: list[str] = []
        for distinction in ("bib", "stars"):
            category = record.get(distinction)
            if not isinstance(category, dict) or category.get("checked") is not True:
                return None
            source, matches = category.get("source_url"), category.get("place_ids")
            if not official_url(source) or not isinstance(matches, list):
                return None
            if any(not isinstance(pid, str) or pid not in place_ids for pid in matches):
                return None
            listed.update(matches)
            if source not in sources:
                sources.append(source)
        return listed, tuple(sources)
    except (OSError, ValueError):
        return None
