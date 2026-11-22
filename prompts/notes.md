# Write notes

Paste this into a Claude session in this repo. Replace PART with `policy`, `reading`, `forecasts`, `prices`, `products`, `checks` or `advice`.

```text
Read https://teoyujie.org/api/notes.txt and write notes for PART.
```

The guide is built from `src/notes.ts`. It gives the list to read, the line format and the rules for each part. The build checks every line of `notes/PART.tsv`.

- `policy`: every listed document needs a note. Run this after each Saturday fetch, in the afternoon Singapore time: the server fetches that morning, and rows with an empty `note` column need a line. After the deploy, the server ranks again within the hour.
- `reading`: the server reads the notes each hour.
- `forecasts`: do not write lines by hand. Read `/forecasters.txt`, write one JSON proposal per bet as `prompts/bets-extract.md` describes (`by`, `url`, `quote`, `market`, and `p` or `side`), and run `python3 -I scripts/bets/bets.py record PROPOSALS.jsonl`. `/forecasters.html` changes within an hour of the deploy.
- `prices`: the page `/deals/` changes on deploy.
- `products`, `checks` and `advice`: the Singapore prices post changes on deploy. Do `products` before `checks`, as a check can name a product that a note added. A cheap model is enough for `checks`: it reads one fact on each product page.

- `calls` and `outcomes`: not for this prompt. Calls come from `scripts/prices/passthrough.py` and outcomes from `scripts/prices/resolve.ts`, as `prompts/singapore-prices-deep.md` says. Never edit a merged call.

To add a policy source or change the rules, use the prompt in the [server repo](https://github.com/yujieteo/server/blob/main/prompts/singapore-policy-actionables.md).
