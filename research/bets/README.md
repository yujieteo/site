# The bet ledger behind /forecasters.html

Part B of the forecaster work. Part A (`audits/forecasters/`) found that chance explains the top ranks of both published rankings. So the page now shows only bets: checkable claims by the same 40 people, judged by what they forecast and what happened, in time order.

## Pipeline

1. **Candidates (server, hourly).** `feed-update` fetches the 40 people's feeds as before, with the same pauses: hnrss 5 s, LessWrong 2 s. Then it drops the right to run programs and parses. An item is a candidate if it matches the audit's candidate rule C (a stated chance, or a commitment to a forecast or a bet) or links a market. Candidates not yet in the ledger go to `/forecasters.txt`.
2. **Proposals (AI or person).** For each candidate, a proposal says who, where, the exact quote, the market, and the stated chance or the side. The prompt is `prompts/bets-extract.md`.
3. **Record (`scripts/bets/bets.py record`).** Everything else comes from raw APIs:
   - the posting time and text: the Algolia items API for Hacker News, GraphQL for LessWrong;
   - a check that the quote is in that text;
   - the SHA-256 of the text;
   - the first archive.org snapshot after posting, or a new one;
   - the market's question, close date and resolution;
   - the YES price just before posting.
   A proposal is skipped if the market is not binary, closed or resolved before the item, or had no price that day.
4. **Build (site).** The build checks every line: one of the 40, p or side, the price set before the end of the posting day, a snapshot of the url, evidence from the named source, and `revises` naming an earlier bet by the same person. It scores the settled bets and writes `/api/bets.txt`.
5. **Page (server, hourly).** `feed-update` reads `/api/bets.txt` before it confines itself and renders `/forecasters.html` and `/forecasters.xml`. For a bet whose item is still in its feed, it checks that the quote is still in the text.
6. **Resolve (`bets.py resolve`).** This settles open bets only from the market's own resolution. `bets.py check` fetches each snapshot and reports any that lack their quote.

## Scoring

The scoring is the price rule of the frozen audit method:

- **Stated chance.** A stated chance p is scored against the price q: the factor is p/q on YES and (1 − p)/(1 − q) on NO.
- **No stated chance.** The bet stakes half at the market price on the person's side: the factor is 1/2 + 1/(2q_side) on a win and 1/2 on a loss.
- **Clipping and voids.** Prices and chances are clipped to [0.01, 0.99]. A void bet scores 1.
- **E-value.** A person's running e-value is the product of their factors in time order. If the market prices are right, its expected value is 1 at every step.

## Fermi check

`limits.tsv` holds physical limits from IAEA (nuclear grid connections and construction starts by year, Nuclear Power Reactors in the World 2025, Table 7) and EIA (Form 860M September 2026 for US additions; the international bulk file for world additions). Each row records the downloaded file's SHA-256, where in the file the number is, and an exact quote. `limits-verify.md` says what is uncertain about each row.

A bet's `fermi` field is `none`, or a key and the amount the claim implies. The page shows the ratio to the record.

EDGAR (fab capacity) is not in the table yet: www.sec.gov refused requests that did not carry a contact address. See the open items below.

## Files

- `notes/forecasts.tsv`: the ledger.
- `research/bets/archives.json`: the snapshot chosen for each url.
- `research/bets/unpriced-before-2026-11-15.tsv`: the old hand-picked list, kept for history. None of its lines had a market price, so none is on the page.
- `research/bets/proposals/`: the AI proposals used for the first ledger, and the ones the recorder skipped, with the reasons.
