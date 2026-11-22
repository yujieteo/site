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

## Going past 200 stories

The audit stops at 200 stories (DEVIATIONS.md 8), but nothing found so far is thrown away. `data/hn_ranked.tsv` keeps all 1,125 stories found on Hacker News, in order of how many different people told them. Stages 2 and 3 used the list down to the Earl of Sandwich story (line 179 of the file). The next unused story is on line 180. After it, 87 more stories were told by two people and 859 by one.

To go further, log a new deviation first. Then take the next stories in file order and drop personal stories and duplicates, as in DEVIATIONS.md 7 and 8. Add their ids, names and queries to `data/candidates.tsv` and `data/queries.json`, and commit before any research. Give each research agent `prompts/brief.md` and five stories, with its own work folder. Run the counts, the scores and the ranking only after all research is done, and raise `LIMIT` in `src/rank.py`.

The raw Hacker News responses and the item texts stay in `AA_DATA/hn-pool/`. `src/candidates_hn.py` rebuilds them.
