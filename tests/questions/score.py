"""Score recorded runs against the derived answers: exact match, tokens fetched, date cited.

  uv run --with tiktoken python -I tests/questions/score.py [runs-dir]

Exact match: the ANSWER line equals the derived answer (numbers compared as numbers, dates as ISO text,
text case-folded). Tokens fetched: the o200k_base count of every body the model fetched, plus bytes.
Date cited: the AS_OF line equals the fact's date at the precision the site gives it; questions with no
dated fact are left out of that rate.
"""
import collections, json, pathlib, re, sys

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
    if enc is None or not sha:
        return 0
    if sha not in token_cache:
        path = runs / "bodies" / sha
        token_cache[sha] = len(enc.encode(path.read_text("utf-8", "replace"))) if path.exists() else 0
    return token_cache[sha]


def line(reply, key):
    m = re.search(rf"^\s*{key}:\s*(.+?)\s*$", reply or "", re.M | re.I)
    return m.group(1) if m else ""


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


table = collections.defaultdict(lambda: {"n": 0, "exact": 0, "bytes": 0, "tokens": 0, "fetches": 0, "dated": 0, "cited": 0, "errors": 0})
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
        t["bytes"] += sum(f["bytes"] for f in row["fetches"])
        t["tokens"] += sum(tokens(f.get("sha256")) for f in row["fetches"])
        if q["as_of"]:
            t["dated"] += 1
            t["cited"] += line(row["reply"], "AS_OF").strip()[: len(q["as_of"])] == q["as_of"]

print(f"{'label':<10} {'vendor':<9} {'model':<28} {'n':>3} {'exact':>6} {'fetch/q':>8} {'kB/q':>7} {'o200k/q':>8} {'date cited':>10} {'errors':>6}")
for (label, vendor, model), t in sorted(table.items()):
    n = t["n"] or 1
    cited = f"{t['cited']}/{t['dated']}" if t["dated"] else "-"
    print(f"{label:<10} {vendor:<9} {model[:28]:<28} {t['n']:>3} {t['exact'] / n:>6.0%} {t['fetches'] / n:>8.1f} {t['bytes'] / n / 1000:>7.1f} {t['tokens'] / n:>8.0f} {cited:>10} {t['errors']:>6}")
if enc is None:
    print("tiktoken is not installed: o200k counts are 0. Run with: uv run --with tiktoken python -I tests/questions/score.py")
