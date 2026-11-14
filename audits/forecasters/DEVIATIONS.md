# Deviations from the frozen method

Each change after the freeze commit (8649d6b). None changes a rule; each makes the code do what METHOD.md already says.

| # | File | Change | Why | Scores seen? |
|---|---|---|---|---|
| 1 | `src/markets.py` | `forecasts()` also loads `derived/recall_units.jsonl` | It crashed on the first recall unit with a verdict. The recall sample is in METHOD.md section 11 | No |
| 2 | `src/score.py` | `oos()` sums *d* directly instead of building a one-person table | The one-person table ran shrinkage over a single record and crashed. Section 8 only asks for Σ*d*. The in-sample outputs were already written and had no NaN; their scores had not been read | No |
| 3 | `src/exploratory.py` (new) | Reruns the shrinkage, null test and synthetic injection without calls whose *d* is 0 whatever happens (a stated 50% against the 1/2 reference) | Written **after** the frozen results were seen. Those records have zero null variance and pinned μ near 0, so the frozen order statistics compared numbers near 1e-22. Reported beside the frozen results and labelled exploratory. The frozen results stay the primary ones | Yes |
| 4 | `src/report.py`, `answer.md` | Report layout and the written answer | Allowed by METHOD.md section 13 | Yes |
