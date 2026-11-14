# Deviations from the frozen method

Each change after the freeze commit (8649d6b). None changes a rule; each makes the code do what METHOD.md already says.

| # | File | Change | Why | Scores seen? |
|---|---|---|---|---|
| 1 | `src/markets.py` | `forecasts()` also loads `derived/recall_units.jsonl` | It crashed on the first recall unit with a verdict. The recall sample is in METHOD.md section 11 | No |
| 2 | `src/score.py` | `oos()` sums *d* directly instead of building a one-person table | The one-person table ran shrinkage over a single record and crashed. Section 8 only asks for Σ*d*. The in-sample outputs were already written and had no NaN; their scores had not been read | No |
