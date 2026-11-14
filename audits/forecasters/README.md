# Forecaster audit

Is the ranking of the 20 Hacker News and 20 LessWrong forecasters on teoyujie.org more than luck? This folder holds a frozen method, the scripts that apply it, and the results.

- `METHOD.md`: the rules, fixed before any result was computed. `FROZEN` holds that commit's hash.
- `DEVIATIONS.md`: every change after the freeze, with the reason.
- `REPORT.md`: the results, written by `src/report.py`.
- `src/`: the scripts, in the order `run.sh` runs them.
- `prompts/`: the exact prompts given to the AI.
- `data/`: results and indexes. No full texts are kept here. Each unit has its SHA-256, so the texts can be rebuilt from the dumps and checked.

## Rerun

You need `uv`, `curl` and `shasum`, and about 6 GB of disk for the dumps.

```sh
FA_DUMPS=$HOME/fa-dumps ./run.sh fetch   # downloads the dumps and API histories, then runs everything
FA_DUMPS=$HOME/fa-dumps ./run.sh         # reruns from dumps you already have
```

The two AI steps (verdicts and market matches) are not run again. Their stored outputs in `data/verdicts/` and `data/matches/` are used. To rerun them with a new model, give each batch file in `$FA_DUMPS/derived/batches/` and `$FA_DUMPS/derived/match_batches/` to a model together with the prompt from `prompts/`, and save one output file per batch. That is a new experiment, so report it as one.

The API histories change as people post, edit and delete. A later fetch will not match this one exactly. `data/crawl_gaps.tsv` shows how much that mattered here.
