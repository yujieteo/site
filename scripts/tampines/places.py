"""Export the 139 researched places from src/kit/food-data.ts to research/tampines/raw/places.tsv."""
import csv, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

def spreads():
    text = (ROOT / "src/kit/food-data.ts").read_text()
    return json.loads(re.search(r"export const SPREADS: readonly Spread\[\] = (\[.*?\]);\n", text, re.S).group(1))

def main():
    rows = spreads()
    out = ROOT / "research/tampines/raw/places.tsv"
    with out.open("w", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(["id", "name", "kind", "cuisine", "venue", "place", "unit", "status", "lat", "lon", "bib_2026", "items", "typical_sgd", "shared", "form"])
        for i, x in enumerate(rows):
            w.writerow([f"p{i:03d}", x["n"], x["k"], x["cu"], x["v"], x["p"], x["u"], x["st"], x["lat"], x["lon"], x["b"], len(x["items"]), x["typ"], x["sh"], x["f"]])
    print(f"{len(rows)} places -> {out.relative_to(ROOT)}", file=sys.stderr)

if __name__ == "__main__":
    main()
