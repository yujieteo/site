#!/bin/sh
# Rerun the forecaster audit.
#
#   FA_DUMPS=/path/to/dumps ./run.sh            everything, from the stored AI verdicts
#   FA_DUMPS=/path/to/dumps ./run.sh fetch      download the dumps and API histories first
#
# Needs: uv (it installs the pinned Python packages), curl, shasum.
# Optional: METACULUS_TOKEN and FRED_API_KEY, for those two price sources.
# The AI steps (verdicts and market matches) are not rerun here; their stored outputs in
# data/verdicts and data/matches are used. prompts/ holds the exact prompts.
set -eu
here=$(cd "$(dirname "$0")" && pwd)
: "${FA_DUMPS:?set FA_DUMPS to a folder for the dumps}"
export FA_DUMPS
run() { script=$1; shift; uv run -q --no-project --python 3.13 --script "$here/src/$script" "$@"; }

if [ "${1:-}" = fetch ]; then
	"$here/src/fetch_dumps.sh" "$FA_DUMPS"
	run fetch_api.py hn lw
fi

run make_planted.py
run candidates.py
run batches.py
# AI step 1: data/verdicts/batch-NNN.jsonl, one per $FA_DUMPS/derived/batches/batch-NNN.jsonl.
run markets.py search
# AI step 2: data/matches/match-NNN.jsonl, one per $FA_DUMPS/derived/match_batches/match-NNN.jsonl.
run markets.py prices
run markets.py alfred
run calls.py
run score.py
run inject.py synthetic
run inject.py planted
run inject.py propagate
run report.py
