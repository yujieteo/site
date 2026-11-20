# Tampines food: backing, price and value

The study behind the ranking in `posts/tampines-food/post.md`. Read `prereg.md` first: it fixed the method before the data was collected, and lists every change since.

## Files

- `prereg.md`: the plan and every deviation from it.
- `raw/`: inputs, collected by script. Each part has its own README: `README-guides.md`, `README-survival.md` and `README-prices.md`.
- `derived/sbc.md`: the calibration on fake data.
- `derived/fit.md`: the real fit's checks and filter report.
- `derived/places.tsv`: every place's backing, price, value, rank ranges and forecasts.
- `derived/outlets.tsv`: each outlet's weight (a) and choosiness (b).
- `forecasts.tsv`: frozen on 15 November 2026. Never edit it.
- `new_articles.tsv`, `status.tsv` and `scores.tsv`: written by the monthly check.

## Rerun

From `scripts/tampines`. PyTensor's C backend does not link on macOS 27, so the model runs on JAX:

```bash
python3 places.py
```

```bash
uv run --with beautifulsoup4 python guides.py --michelin
```

```bash
uv run --with rapidfuzz python survival.py
```

```bash
python3 prices.py
```

```bash
PYTENSOR_FLAGS=cxx= uv run --no-project -p 3.13 --with-requirements requirements.txt python run.py sbc
```

```bash
TAMPINES_DRAWS=2000 PYTENSOR_FLAGS=cxx= uv run --no-project -p 3.13 --with-requirements requirements.txt python run.py fit
```

`run.py fit` writes `src/kit/food-model.ts` for the page only when every check passes. It will not overwrite `forecasts.tsv`.

The monthly check:

```bash
uv run --no-project -p 3.13 --with beautifulsoup4 python scripts/tampines/check.py
```

### Michelin settlement

The checker leaves the 2027 forecast open until the complete Singapore Bib Gourmand and
one-, two- and three-star lists have been reviewed. After both releases, compare their
entries against the frozen place IDs by outlet and address, not just business name, and
save the checked results in `research/tampines/michelin-2027-reviewed.json`:

```json
{
  "edition": 2027,
  "bib": { "checked": true, "source_url": "<official Michelin URL>", "place_ids": [] },
  "stars": { "checked": true, "source_url": "<official Michelin URL>", "place_ids": [] }
}
```

Use full HTTPS URLs on `guide.michelin.com` for the 2027 Singapore selection. Both categories
may reference the same complete official page. Include only frozen place IDs with that
distinction, and use an empty array only after checking the full list and finding none.
Michelin Selected entries without a Bib or star do not count. A preview, missing category,
or invalid evidence file does not settle the forecast. This input does not change the
frozen probabilities or scoring rule.

## Value audit, 19 November 2026

**Decision rule recorded before rerunning.** Retain the two-stall conclusion if the published fit reproduces, comparable observed meals support the same pair, and the leading group survives every single-publication deletion under the published 20% rule. Narrow the claim to the tested price or source assumptions if any of these comparisons disagree or like-for-like evidence is missing. Withdraw it if reproduction fails or corrected evidence rules out the pair.

**Baseline.** [e859df7](https://github.com/yujieteo/site/commit/e859df7cebd855b9ea182d25233e939ffb9cfb87) introduced the quoted tie and own-dish medians. Commit [32c89bdf40fe3fbf4eae0f175a750f17f471c84b](https://github.com/yujieteo/site/tree/32c89bdf40fe3fbf4eae0f175a750f17f471c84b) last changed both the published essay and its generated ranking, after the Nanyang Dao scope correction. The later monthly check did not fit a ranking. I ran the original `run.py fit` in an export of this commit and compared `derived/places.tsv` byte for byte with the committed file. All rows matched (SHA-256 `3a3424ccc6db6afe945cdc2afb89bcb08cda5be51a18f3294a7eaf2ab52b3332`). Four chains of 2,000 warm-up and 2,000 retained draws, seed 20261115, gave maximum R-hat 1.0046, minimum bulk ESS 1,279 and zero divergences.

To reproduce the audit from the **audited checkout**, run these from the repository root. They use the frozen inputs, so collecting today's websites first would answer a different question.

```sh
cd scripts/tampines
export PYTENSOR_FLAGS=cxx=
uv run --no-project -p 3.13 --with-requirements requirements.txt python value_audit.py
uv run --no-project -p 3.13 --with-requirements requirements.txt python value_audit.py --all-evidence
uv run --no-project -p 3.13 --with-requirements requirements.txt python value_audit.py --matched
```

For the historical page generator alone, run the `TAMPINES_DRAWS=2000` fit command above in a separate checkout of the pinned commit. The audit code is newer than the baseline. The menu input is `SPREADS` in `src/kit/food-data.ts`. `raw/places.tsv` supplies IDs, units and eligibility. `inputs.py` joins `articles.tsv` and `mentions.tsv` using the scopes and area definitions in `scripts/tampines/guide_urls.tsv`. It reads the 2026 distinction from `michelin.tsv` and the list check from `michelin_lists.tsv`. The age inputs are `acra.tsv`, `osm.tsv` and dated article mentions. Price conversion uses `gst2023.tsv` and `cpi.tsv`. `dishtypes.py` assigns the dish classes. `model.py` fits the model and `run.reported` selects the field of 52. The audit never uses a forecast result as an input.

**The claim narrows to the common basket.** The published common-basket tie reproduces. Song Han's chance of beating Rajarani is 37.4% on that basket, 79.0% on the two observed menu medians, and 18.6% for the two S$2.50 orders reported together. At the equal price, Song Han falls below the published tie threshold. In the seven-order check, using the April and June quotes separately yields 23.7%. The April price receives a larger CPI adjustment than the June price, enough to move this borderline result. A regular plate and a two-piece plain set happen to cost the same as their respective stall medians. Portions and ingredients still differ.

| Stall | Common-basket rank (80%, of 52) | Chance of beating Rajarani | Own-menu rank (80%, of 52) | Documented order rank (80%, of 7) |
| --- | ---: | ---: | ---: | ---: |
| Rajarani | 1–3 | — | 1–2 | 1–2 |
| Song Han | 1–5 | 37.4% | 1–2 | 1–2 |
| Chai Chee | 2–9 | 10.3% | 4–8 | 6–7 |
| Teo Kee | 3–11 | 6.0% | 3–8 | 3–6 |
| Yummy Sarawak | 4–9 | 5.0% | 3–7 | 4–6 |
| Nasi Lemak Specialist | 3–13 | 6.2% | 6–15 | 3–7 |
| Botak | 3–14 | 6.9% | 3–13 | 3–7 |

The pork rib noodle comparison favours Teo Kee over Yummy in 78.5% of draws. The pork porridge comparison favours Botak over Chai Chee in 88.5%. These are pairwise comparisons between documented orders within a dish family. Portion weights and matching toppings would be needed to price the same meal exactly. [Matched dishes, dates and sources](raw/value_matched_orders.tsv)

### What the menus support

The focus is the first seven stalls by published median value. These also include the five challengers with the highest draw-by-draw chances of beating Rajarani. Six stalls are at 137 Tampines Street 11. Botak is at 1 Tampines Walk. The [seven order records](raw/value_orders.tsv) and [matched orders](raw/value_matched_orders.tsv) give the exact dishes, portions, nominal SGD prices, article dates, units and original URLs. Dates refer to the published or updated account. These are stall-specific menus transcribed or quoted by reporters. Separately dated menu-board photographs were unavailable for the decisive pair. No purchase receipts, weighed portions, calorie measurements or same-day paired purchases were available. Eatbook’s October guide links back to its August 2023 Song Han feature and February 2023 Rajarani feature, both already quoting S$2.50. Treat the guide date as a reporting date. The date of a simultaneous purchase is missing. [Song Han feature](https://eatbook.sg/song-han-carrot-cake/) and [Rajarani feature](https://eatbook.sg/rajarani-thosai/)

| Stall | What the price records establish |
| --- | --- |
| Song Han, #01-07 | Black or white carrot cake cost S$2.50 small, S$3.50 regular or S$4.50 large. Yuan yang with five prawns cost S$5.50 or S$6.50 with eight. The fit uses both regular plates and the five-prawn order. [June 2026 menu](https://danielfooddiary.com/2026/06/15/songhancarrotcake/) and [July 2025 size labels](https://sethlui.com/tampines-round-market-food-centre-singapore/) |
| Rajarani, #01-33 | One plain thosai cost S$2.50, two plain S$4, egg S$3 and potato masala S$4. The reviewer ordered masala egg onion at S$5. Eighteen fitted rows are mostly variations on one dish. [April 2026 menu](https://danielfooddiary.com/2026/04/14/rajaranithosai/) |
| Chai Chee, #01-39 | The June 2024 article quotes S$3.50 for original pork porridge but also says prices start at S$4. A July 2025 guide gives S$5 for sliced pork. Eatbook gives S$6 for a pork bowl in October 2026. Bowl weights are missing, so the spread cannot establish a price rise for an identical serving. [HungryGoWhere](https://hungrygowhere.com/what-to-eat/tampines-round-market-food-centre/), [Seth Lui](https://sethlui.com/tampines-round-market-food-centre-singapore/) and [Eatbook](https://eatbook.sg/tampines-hawker-food/) |
| Teo Kee, #01-05 and Yummy, #01-45 | Teo Kee's mushroom minced meat and pork rib noodles start at S$4 and S$5. Yummy's mushroom noodles are S$5 and spare ribs noodles S$6. The pork rib bowls give the closest dish match. Meat and noodle weights are missing. [October 2026 Teo Kee guide](https://eatbook.sg/tampines-hawker-food/) and [June 2026 Yummy menu](https://danielfooddiary.com/2026/06/09/yummysarawakkolomee/) |
| Nasi Lemak Specialist, #01-14 | Lontong or mee rebus S$4, or S$6 for a nasi lemak plate. The rice plate includes chicken wing, bergedil and egg. [October 2026 guide](https://eatbook.sg/tampines-hawker-food/) |
| Botak, Hub #01-65 | S$3.50 for handmade meatball porridge. Seth Lui also lists S$5.30 sliced fish and S$6.50 seafood. The quoted pork bowls allow a within-porridge check, though toppings differ. The page gives an update date. [April 2026 review](https://sethlui.com/botak-cantonese-porridge-singapore/) |

**Why the menu and basket disagree.** Song Han contributes three small-plate observations and Rajarani contributes eighteen bread/prata observations. They share zero of the 15 price classes. Only 44/607 basket items are small plates and 22/607 are bread/prata. There are 113 dessert/snack rows in the fitted mix. The log-price model learns the dish-class differences from other stalls and applies one estimated stall price offset to every class. It must therefore predict almost the entire basket at each leader, including dishes neither sells. In a given draw the basket price is exp(stall offset + weighted mean of dish-class log prices). The second term is shared by every stall and cancels in a pairwise comparison. The decisive estimate is how far below its class price each stall sells, inferred from other sellers of small plates and breads. The common basket is a geometric price index. Its median price is S$3.43 at Song Han and S$3.28 at Rajarani. The observed CPI-adjusted menu medians go the other way, S$3.53 and S$4.07. These four numbers are distinct from a till price.

### Which guides could choose these stalls?

The [article-by-stall matrix](raw/value_guide_scope.tsv) records all 43 scored articles, their dates, original URLs and the published scope. Each cell distinguishes a name, an eligible omission and a stall outside the guide. The original fit collapses the union of eligible stalls and the union of mentions by publication. Sponsored features and single-stall reviews have no endorsement vote. Single-stall reviews can still supply prices. Only ten editorial publications could name the Round Market leaders under these rules. Six named Song Han. The same six plus Miss Tam Chiak named Rajarani.

- Round Market guides could cover the six Round Market stalls. Our Tampines Hub guides could cover Botak. Neither group covers the other venue. The west guide includes Round Market and the central guide includes the Hub. Mall-only, cafe-only, east and north guides miss all seven. Town-wide hawker guides could cover all seven. [Market guide](https://hungrygowhere.com/what-to-eat/tampines-round-market-food-centre/), [Hub guide](https://sethlui.com/our-tampines-hub-hawker-centre-singapore/), [west](https://eatbook.sg/tampines-west-food/) and [central](https://eatbook.sg/tampines-central-food/)
- Geography establishes where a writer could have gone. The 2017 town guide a044 expressly focuses on eateries near Tampines MRT. Its town-wide mask overstates its reach, but the same publisher's market breakfast guide a045 independently covers these stalls. Honeycombers a046 recommends Round Market as a destination and describes carrot cake without naming a seller. CityNomads a047 visits the market for an evening steamboat. A breakfast stall's omission is weak evidence there. Historical opening dates, inspection visits and the original versions of rewritten guides are missing for many rows. [Miss Tam Chiak town](https://www.misstamchiak.com/tampines/) and [market](https://www.misstamchiak.com/tampines-round-market/), [Honeycombers](https://thehoneycombers.com/singapore/guide-to-tampines-singapore/) and [CityNomads](https://citynomads.com/dining-guide-to-tampines-what-to-eat-in-this-eastern-suburb-of-singapore/)
- Two early opportunities can be dated. In August 2017 the Nasi Lemak Specialist operator told Miss Tam Chiak the stall had started about seven months earlier. The May 2017 breakfast guide could therefore reasonably have covered it, although that August single-stall article gets no vote. Botak at the Hub traded earlier as Botak Delicacy, a name used in the 2017 venue guide. [Operator interview](https://www.misstamchiak.com/nasi-lemak-specialist/), [Hub guide](https://ordinarypatrons.com/2017/08/10/our-tampines-hub-restaurants-food-places/) and [Botak review](https://sethlui.com/botak-cantonese-porridge-singapore/)
- The Daniel Food Diary market guide a037 features both leaders, Yummy and Chai Chee. Its introduction also names six stalls the author has yet to try, including Teo Kee and Nasi Lemak Specialist. The published name counter credits all six. The `a037 untried stalls` refit treats these as eligible omissions for backing and retains their evidence of existence. The common-basket tie survives (Song Han beats Rajarani in 37.9% of draws). Teo Kee’s chance of beating Rajarani falls from 6.0% to 3.6%, and Nasi Lemak Specialist’s from 6.2% to 3.0%. Singapore Foodie's carrot cake is at Blk 802, so its Teo Kee mention counts and its carrot cake does not support Song Han. [Daniel Food Diary](https://danielfooddiary.com/2026/06/16/tampinesroundmarket/), [Singapore Foodie](https://singaporefoodie.com/eat-like-a-local-10-best-must-try-eats-around-tampines/) and [Wonderwall's named stall units](https://wonderwall.sg/food/go-there-eat-what-tampines-round-market-food-centre)
- The 2026 Michelin list confirms Rajarani as Bib Gourmand and Song Han and Yummy as Selected. Chai Chee, Teo Kee, Nasi Lemak Specialist and Botak have no entry under those names. Only a Bib or star scores 1. All seven were eligible under the published Michelin mask. Michelin does not identify every outlet its inspectors visited. [Official 2026 list](https://guide.michelin.com/sg/en/article/michelin-guide-ceremony/full-list-michelin-guide-sg-2026) and [Rajarani's Bib announcement](https://guide.michelin.com/sg/en/article/michelin-guide-ceremony/singapore-bib-gourmand-2026)

### Reading the repeat runs

In each draw, divide the fitted backing percentile by the chosen price and multiply by ten. Rank all eligible stalls in that draw. The leader has the highest median value. Each other member of the leading group beats that leader in at least 20% of draws. Overlapping rank intervals alone do not decide membership. The 10th and 90th percentiles give the published 80% rank ranges. Each `p_beat_pNNN` column is the fraction of joint posterior draws in which the row beats that stall. A blank means a self-comparison or an unavailable opponent. Probabilities condition on the model, selected dishes and recorded evidence.

- [Backing source deletions](derived/value_audit.tsv) hold prices and age evidence fixed, then remove all name indicators for one publication, including its in-scope omissions. Each fit scores the common basket and the observed stall menu median across 52 places, then one documented basic order at each of seven contenders. The seven-order test measures the cost of choosing those dishes. Equal weight or satiety is unknown.
- [Whole source deletions](derived/value_source_deletion.tsv) also remove the publisher's menu-domain observations and article dates used as age evidence, recompute the dish mix, refit, and reapply the three-main minimum. The 13 editorial publications and Michelin each get a turn. A missing stall in a run means too few surviving prices. This tests dependence on the recorded source. Independent corroboration appears in the menu notes above.
- [Matched orders and source correction](derived/value_matched.tsv) additionally compare two stalls at a time. The October 2026 Eatbook guide quotes both entry breakfasts at S$2.50. The larger-breakfast scenario uses the June and April menu quotes for a regular carrot cake and two plain thosai. The other pairs hold dish family closer with pork rib noodles and pork porridge. In every observed-order test the denominator is fixed at the quoted price adjusted to September 2026 using the pipeline's hawker CPI. For later quotes the pipeline uses the latest index available.

### Removing one publication

The original two stalls make up the entire common-basket leading group in all 14 endorsement-only deletions. Removing all the source's evidence changes that group twice. Without Daniel Food Diary, Song Han has zero surviving fitted prices and Rajarani leads alone. Without Eatbook, only 26 stalls qualify, Song Han leads and Chai Chee beats it in 22.8% of draws. Rajarani beats it in 24.0%, also inside the leading group. All fits passed the original gates (worst R-hat 1.0062, minimum bulk ESS 925, zero divergences).

Both probability columns below give the chance Song Han beats Rajarani on the common basket. The first drops only the endorsement source. The field and 80% ranks describe the full source deletion. Tiny differences in draw frequencies near the 20% cutoff should be read with the order and price-date sensitivities above.

| Publication omitted | Endorsements only | Full deletion field | Song Han rank | Rajarani rank | Full deletion probability |
| --- | ---: | ---: | ---: | ---: | ---: |
| CityNomads | 38.4% | 52 | 1–5 | 1–3 | 37.9% |
| Daniel Food Diary | 36.2% | 49 | unranked | 1–4 | unavailable |
| Eatbook | 37.6% | 26 | 1–3 | 1–9 | 76.0% |
| Honeycombers | 38.6% | 52 | 1–5 | 1–3 | 38.6% |
| HungryGoWhere | 35.1% | 51 | 1–6 | 1–3 | 31.5% |
| MiddleClass | 38.3% | 52 | 1–5 | 1–3 | 38.3% |
| Miss Tam Chiak | 42.0% | 52 | 1–4 | 1–4 | 42.5% |
| Ordinary Patrons (blog) | 39.1% | 52 | 1–5 | 1–3 | 38.1% |
| Seth Lui | 36.6% | 44 | 1–5 | 1–3 | 38.3% |
| Singapore Foodie | 38.8% | 52 | 1–5 | 1–3 | 39.1% |
| Women's Weekly Singapore | 36.2% | 52 | 1–6 | 1–3 | 36.2% |
| Wonderwall | 34.7% | 52 | 1–7 | 1–4 | 34.4% |
| liyenz (blog) | 37.8% | 52 | 1–5 | 1–3 | 38.3% |
| Michelin | 40.2% | 52 | 1–5 | 1–4 | 40.2% |

**Independent follow-up.** A new publication covering both stalls from 16 November 2026 through 15 November 2027 provides a held-out naming outcome. The frozen probabilities for a new outlet are 0.513 for Song Han and 0.626 for Rajarani, against a 0.219 base rate for either. Score the recorded forecasts before adding a new guide to the fit. This tests backing. For the price comparison, collect same-day itemised receipts at both units, photograph the menu and weigh the served portions. Repeat for the closest challenger. A changed price, portion or backing result can move a stall across the one-in-five threshold. [Frozen forecast records](forecasts.tsv)
