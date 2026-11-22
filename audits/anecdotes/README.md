# Anecdote audit

Which widely told anecdotes are false or misleading, and how much does it matter? This folder holds a frozen method, the scripts that apply it, and the results behind the page `/essays/false-anecdotes/`.

- `METHOD.md`: the rules, fixed before any research, score or count. `FROZEN` holds that commit's hash.
- `DEVIATIONS.md`: every change after the freeze, with the reason.
- `data/candidates.tsv`, `data/plants.tsv`, `data/queries.json`: fixed before the freeze.
- `data/entries/`: one record per anecdote, with quoted sources.
- `prompts/`: the exact prompts given to the AI agents.
- `src/count.py` (how common), `src/checkquotes.py` (every quote against its saved source), `src/rank.py` (the ranking), `src/page.py` (the page).

## Rerun

You need `uv`. The saved sources and raw search responses live outside git, in `AA_DATA` (default `~/data/library/datasets/anecdote-audit`).

```sh
uv run python -I src/checkquotes.py
uv run python -I src/count.py count && uv run python -I src/count.py sample
uv run python -I src/rank.py
```

Both search indexes change over time, so a later count can differ. The stored responses are the record.
