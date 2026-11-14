# Deviations from the frozen method

Each change after the freeze commit (8649d6b). None changes a rule; each makes the code do what METHOD.md already says.

| # | File | Change | Why | Scores seen? |
|---|---|---|---|---|
| 1 | `src/markets.py` | `forecasts()` also loads `derived/recall_units.jsonl` | It crashed on the first recall unit with a verdict. The recall sample is in METHOD.md section 11 | No |
