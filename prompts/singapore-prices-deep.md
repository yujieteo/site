# Deeper Singapore prices post

The spec for the rewrite of `posts/singapore-value-buys/post.md` from 15 November 2026. Paste it into an agent session in this repo to continue the work.

```text
Make the Singapore prices post (posts/singapore-value-buys/post.md) deeper, not bigger.
Think like a supermarket category buyer or importer whose margin depends on these prices.

Scope
- Pick about 10 goods that are both a big share of household spending and traceable to an
  upstream cost: eggs, rice, chicken, fresh fish, coffee, cooking oil, fresh milk, bread,
  electricity, petrol, plus one hawker staple. Swap one only with a stated reason. Add no new
  groups or goods. Product rows that don't serve these goods move to an appendix or are cut.
  List what you cut.

Raw material, not digested averages
1. A one-time snapshot (15 Nov 2026) of the exact same products, keyed by barcode (GTIN),
   with pack size, "was" price and offer dates. The owner chose not to collect daily, so no
   rule may rest on a product's price history.
2. Landed cost per good: import value and quantity by HS code (SingStat, UN Comtrade),
   converted with exchange rates, plus the upstream benchmark (World Bank Pink Sheet).
   Prices set in advance: SP and EMA tariff notices, PUB, PTC.
3. Where wholesale prices aren't published, say so. Don't guess them.

Methods
- For each good, break the price into its costs and state which piece drives it.
- From the snapshot only: which offers are real (an end date within weeks) and which are the
  normal price (offers that run a year), and unit-price spreads.
- Pass-through: regress the CPI item on lagged landed cost. Keep a cost signal only if it
  beats "today plus half the usual drift" on the backtest at 3 and 12 months.
- Stock-up rule: buy ahead only when the saving beats storage, spoilage and cash tied up.

Proof that doesn't rest on your judgment or mine
- Dated, checkable calls in notes/calls.tsv, scored by a script against SingStat
  (notes/outcomes.tsv, /calls/). Never edit a past call.
- Quality claims cite CASE, SFA, HSA or NEA only.
```

## The pipeline

Raw data lives outside git, in `~/data/library/sg-prices/` (set `PRICES_DIR` to move it). It is only added to.

1. `bun scripts/prices/collect.ts`: one day of FairPrice shelf prices for the eight shop goods. It was run once, on 15 November 2026.
2. `bun scripts/prices/upstream.ts`: SingStat CPI and average prices, the World Bank Pink Sheet, UN Comtrade imports and exchange rates. Run it after SingStat publishes a month (around the 23rd).
3. `bun scripts/prices/history.ts --summary`: reads every saved day into unit prices, and lists what it could not read.
4. `uv run scripts/prices/passthrough.py --out scripts/prices/results`: the backtest, and the calls for the newest CPI month.
5. `uv run scripts/prices/passthrough.py --stack`: compare import and shelf prices. Shelf rows are grouped by unit; the import share is only reported for shelf prices per kg.
6. `bun scripts/prices/resolve.ts`: writes outcomes for calls whose month is published. Then build.
