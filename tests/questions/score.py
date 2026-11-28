"""Score recorded runs against the derived answers: exact match, tokens fetched, date cited, source fetched.

  uv run --with tiktoken python -I tests/questions/score.py [runs-dir]

Exact match: the ANSWER line equals the derived answer (numbers compared as numbers, dates as ISO text,
text case-folded). Tokens fetched: the o200k_base count of every body the model fetched, plus bytes. In tok/q: the input
tokens the model's own API reported for the whole session, where the runner recorded them.
Date cited: the AS_OF line equals the fact's date at the precision the site gives it; questions with no
dated fact are left out of that rate.
Source fetched: the SOURCE line names an HTTP(S) URL with a successful (2xx) fetch in the trace.
Fragments and scheme/host case are ignored. This measures whether the cited page was fetched, not
whether it supports the answer. The denominator includes all scored answers.
"""
import collections, json, pathlib, re, sys
from urllib.parse import urlsplit

HERE = pathlib.Path(__file__).resolve().parent
runs = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "runs"
questions = {q["id"]: q for q in (json.loads(l) for l in (HERE / "questions.jsonl").read_text().splitlines() if l)}
try:
    import tiktoken
    enc = tiktoken.get_encoding("o200k_base")
except ImportError:
    enc = None
token_cache = {}


def tokens(sha):
    if not sha:
        return 0
    if enc is None:
        return None
    if sha not in token_cache:
        path = runs / "bodies" / sha
        token_cache[sha] = len(enc.encode(path.read_text("utf-8", "replace"))) if path.exists() else None
    return token_cache[sha]


def line(reply, key):
    m = re.search(rf"^[ \t]*{key}:[ \t]*(.*?)[ \t]*$", reply or "", re.M | re.I)
    return m.group(1) if m else ""


def source_url(value):
    if not isinstance(value, str) or any(c.isspace() for c in value):
        return None
    try:
        url = urlsplit(value)
        if url.scheme not in ("http", "https") or not url.hostname or url.username is not None:
            return None
        return url.scheme, url.hostname, url.port, url.path, url.query
    except ValueError:
        return None


def source_fetched(reply, fetches):
    cited = re.search(r"^[ \t]*SOURCE:[ \t]*([^\r\n]*)", reply or "", re.M | re.I)
    url = source_url(cited.group(1).strip()) if cited else None
    return url is not None and any(
        isinstance(f.get("status"), int) and 200 <= f["status"] < 300
        and source_url(f.get("url")) == url for f in fetches
    )


def number(text):
    m = re.search(r"-?\d[\d,]*(?:\.\d+)?", text)
    return float(m.group(0).replace(",", "")) if m else None


def correct(q, answer):
    if q["kind"] in ("number", "integer"):
        got = number(answer)
        return got is not None and abs(got - float(q["answer"])) < 1e-9
    if q["kind"] == "date":
        return answer.strip()[:10] == str(q["answer"])
    return answer.strip().lower().rstrip(".") == str(q["answer"]).lower()


def main():
    table = collections.defaultdict(lambda: {"n": 0, "exact": 0, "bytes": 0, "tokens": 0, "fetches": 0, "dated": 0, "cited": 0, "errors": 0, "input": 0, "source_fetched": 0})
    for path in sorted(runs.glob("*/*.jsonl")):
        for raw in path.read_text().splitlines():
            row = json.loads(raw)
            q = questions.get(row["id"])
            if not q:
                continue
            t = table[(row["label"], row["vendor"], row["model"])]
            t["n"] += 1
            t["errors"] += row.get("error") is not None
            t["exact"] += correct(q, line(row["reply"], "ANSWER"))
            t["fetches"] += len(row["fetches"])
            t["source_fetched"] += source_fetched(row["reply"], row["fetches"])
            t["input"] += (row.get("usage") or {}).get("input", 0) or 0
            t["bytes"] += sum(f["bytes"] for f in row["fetches"])
            for fetched in row["fetches"]:
                count = tokens(fetched.get("sha256"))
                if count is None:
                    t["tokens"] = None
                elif t["tokens"] is not None:
                    t["tokens"] += count
            if q["as_of"]:
                t["dated"] += 1
                t["cited"] += line(row["reply"], "AS_OF").strip()[: len(q["as_of"])] == q["as_of"]

    print(f"{'label':<10} {'vendor':<9} {'model':<28} {'n':>3} {'exact':>6} {'fetch/q':>8} {'kB/q':>7} {'o200k/q':>8} {'date cited':>10} {'in tok/q':>9} {'errors':>6} {'source fetched':>14}")
    for (label, vendor, model), t in sorted(table.items()):
        n = t["n"] or 1
        cited = f"{t['cited']}/{t['dated']}" if t["dated"] else "-"
        per_question = f"{t['tokens'] / n:.0f}" if t["tokens"] is not None else "n/a"
        fetched = f"{t['source_fetched']}/{t['n']}"
        print(f"{label:<10} {vendor:<9} {model[:28]:<28} {t['n']:>3} {t['exact'] / n:>6.0%} {t['fetches'] / n:>8.1f} {t['bytes'] / n / 1000:>7.1f} {per_question:>8} {cited:>10} {t['input'] / n:>9.0f} {t['errors']:>6} {fetched:>14}")
    if enc is None:
        print("tiktoken is not installed: o200k counts are unavailable. Run with: uv run --with tiktoken python -I tests/questions/score.py")


if __name__ == "__main__":
    main()
