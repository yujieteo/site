# Tampines food: pre-registration

Written and committed on 15 November 2026, before any of the data below was collected and before any model was fitted. Anything changed after this commit is listed under Deviations at the end, with its date and reason. Git history is the record.

## What is estimated

1. **Backing.** For each place, how strongly independent experts and the market back it. It is a latent score, written θ, on a logit scale with mean 0 and standard deviation 1 across the places studied. This is not taste. Nobody tastes anything for this study.
2. **Price level.** What the place charges for a standard basket of mains, in November 2026 Singapore dollars.
3. **Value.** Backing percentile, Φ(θ), divided by the standard-basket price and scaled to S$10. It reads as percentile points per S$10.

Each place gets a full posterior for each quantity. Every ranking is reported with a 80% rank interval and P(top 5).

## Places

- **Estimation:** all 139 researched places in `src/kit/food-data.ts` as of commit 657d517. No new places are added.
- **Reported ranking:** places whose typical main is per person (not shared) and that have at least three verified mains. There were 54 at commit 657d517. Of these, 34 also have a Google rating. The Google rating is not an input, so the ranking covers all 54. Limiting it to the 34 would select on a variable the model does not use.

## Inputs

No Google, Tripadvisor or Foursquare rating, count or review is stored or modelled. Their terms forbid storing them. Nothing is tasted, visited or recorded by hand. Only facts are stored: names, dates, links, flags and numbers, never copied article text.

1. **Guide matrix.** One row per article. The fields are outlet, URL, published date (from the page, else the first Wayback capture), scope and a sponsored flag. One row per place named in an article.
   - **Scope** is one of: all of Tampines; one venue (Round Market, Our Tampines Hub, Tampines Mall, Tampines 1, Century Square, Tampines North); one cuisine within Tampines; or a single place.
   - **Sponsored** is true when the page discloses payment, an invitation or a hosted tasting.
   - **Outlets:** Eatbook, Seth Lui, Daniel Food Diary, ieatishootipost, MakanEast, Miss Tam Chiak, HungryGoWhere, and any other independent outlet found by search. Delivery apps, the places' own pages and directories that list everything are excluded.
2. **Michelin.** Bib Gourmand and starred status of each place for every Singapore list from 2016 to 2026, taken from Michelin pages or contemporary news reports of each list.
3. **Survival.**
   - The postal code of each place, from OneMap.
   - Matching ACRA entities (data.gov.sg, Open Data Licence) at that postal code, and at that level and unit where the place has one. Each match keeps its registration date and status. A match needs the same postal code, plus either the same unit or a name similarity of 0.6 or more (token set ratio) with the trade name.
   - The OpenStreetMap history of the matching element: the first version date and any tenant or name change.
   - The earliest dated guide mention.
4. **Prices.**
   - The 617 compared dated items already on the page.
   - SingStat table M213751 (monthly CPI, 2024 base): Hawker Food for hawker places, Restaurant Food for restaurants and cafes, Fast Food for fast food.
   - SingStat average retail prices of selected hawker dishes, as a benchmark only.
5. **GST correction.** GST was 8% in 2023 and has been 9% from 1 January 2024. Every 2023 item is re-read from its source. Where the source marks it `++`, the stored price is multiplied by 1.188 / 1.199. Where it marks `+`, by 1.08 / 1.09.

## Models

All three parts are fitted jointly in PyMC with the NUTS sampler: 4 chains, 1,000 warm-up and 1,000 draws each. A fit is accepted only if every R-hat is under 1.01, every bulk ESS is over 400, and there are no divergences.

**Backing.** For place p:

- θ_p ~ Normal(0, 1).
- For guide outlet g (all of one outlet's articles merged, so an outlet repeating itself counts once) and every place in that outlet's scope:
  - named_pg ~ Bernoulli(logistic(a_g θ_p − b_g)).
  - a_g ~ LogNormal(0, 0.5) and b_g ~ Normal(0, 2).
  - A place outside every one of an outlet's scopes is missing for that outlet, not a zero.
  - Single-place articles are stored but not modelled, because they cannot separate places.
  - Sponsored articles are dropped from the matrix.
- Michelin is one more item, defined the same way, scoped to all places, and using the 2026 list. Earlier lists appear in the history on the page but are not separate items, because one inspectorate judging year after year is not several raters.
- Survival:
  - log(years at this address) ~ Normal(c_k + λ θ_p, τ_k), with kinds k ∈ {hawker, restaurant, cafe, fast food}, c_k ~ Normal(1, 1), τ_k ~ HalfNormal(1) and λ ~ HalfNormal(0.5).
  - Years come from the ACRA registration date when a match exists. With no match, the earliest date from OpenStreetMap or a guide is a lower bound, and the likelihood is right-censored.
  - A chain outlet uses its own address only, not the brand's age.

**Price.**

- Each item price is converted to November 2026 dollars with the CPI series for its kind and month, and the GST correction is applied.
- log price_i ~ Normal(d_type(i) + π_p, σ_type), with π_p ~ Normal(m_k, s_k).
- The dish type comes from fixed keyword rules in `scripts/tampines/dishtypes.py`, written before the fit: noodles, rice plate, porridge and soup, bread and prata, dim sum and small plates, burger and sandwich, pasta and pizza, Japanese bowl and sushi, ramen, Western main, Korean, Thai, Mexican and Middle Eastern, dessert and snack. Anything that matches no rule is "other".
- The standard basket is the dish-type mix of all compared items. A place's standard price is exp(π_p + the weighted mean of d).
- Exclusion rules are those in the post's "How I built this" section. They are kept as coded filters over the raw rows, not prose.

**Calibration first.** Before the real data is fitted, the model is fitted to 50 fake datasets drawn from its own priors, with the real data's shape. The rank of each true θ_p among the posterior draws must be uniform. The check is a chi-square test on 10 bins, p > 0.01, and it must pass before real results are looked at.

## Forecasts, frozen at the real fit

Written to `research/tampines/forecasts.tsv` with the commit date, and never edited after that.

1. **Next Michelin Singapore list** (expected mid-2027): P(Bib Gourmand or better) for each of the 139 places.
   - Scored by Brier score against a persistence baseline. The baseline gives 0.85 to places on the 2026 list, and to every other place the 2016–2026 base rate of a non-listed Tampines place being added.
2. **New guide articles** published between 16 November 2026 and 15 November 2027 by the outlets above, with scope inside Tampines: P(named | in scope) for each place in each new article's scope.
   - Scored by Brier score against a baseline that gives every in-scope place the outlet's historical naming rate.
3. **Closures by 15 November 2027:** P(closed) for each place.
   - A place counts as closed when its matched ACRA entity becomes ceased or struck off, or its OpenStreetMap element gets a new name or a `disused:` or `was:` prefix, or two independent guides or news reports say it closed.
   - Scored against a baseline that gives each kind its 2016–2026 Tampines closure rate. If that rate cannot be measured, the baseline is 0.10 a year.
4. **Prices:** the CPI-adjusted median standard price for hawker places, set beside the SingStat average for the matched dishes in the next SingStat release. This is reported as a ratio, with no pass mark.

A monthly scheduled check runs `scripts/tampines/check.py`. It finds new articles, ACRA status changes, OpenStreetMap changes and a new Michelin list. It scores the forecasts that have resolved and writes `research/tampines/scores.tsv`.

## What would count against the method

- **Backing** is no better than its baseline on the Michelin and new-guide forecasts. Brier skill of 0 or below on either.
- **Calibration** fails.
- The **survival signal** has a λ posterior that piles up at zero (the 90% interval's lower end under 0.02). Then survival carries no information about backing, and the page says so.

## Deviations

- 15 November 2026, before the real fit, from tests on fake data:
  - The survival spread prior is τ_k ~ Gamma(3, 3) (mean 1), not HalfNormal(1). Fake data showed a funnel as τ approached 0, and a log-age spread under 0.2 within a kind is implausible.
  - The pre-registration gave no priors for the price spreads. They are σ_type ~ Gamma(4, 10) (mean 0.4) and s_k ~ Gamma(3, 6) (mean 0.5), both bounded away from zero for the same reason.
  - For mixing, the kind price means m_k sum to zero, the type means are d = level + offset with offsets summing to zero, and the place price effects are π_p = m_k + s_k·z_p with the z summing to zero. The model is the same up to this centring.
  - Sampling uses NumPyro's NUTS through PyMC. PyTensor's C backend does not link on this macOS. The chains, warm-up, draws and gates are unchanged.
- 15 November 2026, from the price inputs:
  - Table M213751 has no series named Hawker Food, Restaurant Food or Fast Food under its 2024 classification. The series used are 1.11.3 "Hawker Centres, And Food Courts, Coffee Shops & Kiosks", 1.11.1 "Restaurants, Cafes & Pubs" and 1.11.2 "Fast Food Restaurants".
  - The latest CPI month is September 2026, so prices are in September 2026 dollars, not November 2026.
  - The HPB food composition database no longer resolves, so no HPB input exists. Portions are handled only by the dish-type means.
  - The GST audit changed 5 of the 23 rows from 2023 (all Butahage, about −0.9% each).
  - The audit also found two place dates that look wrong in the site data: Tai Wah (stored 2023-10, earliest source 2024-07) and Jin Kimchi (stored 2023-02, review dated 2023-12-15). They are left as stored and flagged for the post.
- 15 November 2026, from the survival inputs, before any fit:
  - The pre-registered ACRA rule (same postal code plus the same unit, or a name score of 0.6) matched other businesses: a phone shop at a ramen unit, an interior firm, a bridal shop, earlier tenants of the same stall, and "Khon Thai Kitchen" for "Soi Thai Kitchen".
  - Replaced by: the same postal code, a food and beverage SSIC (56xxx), and the same name by distinctive words. One name's words, after dropping generic ones such as kitchen, restaurant and Pte Ltd, must all appear in the other's. Unit-only matches no longer count, because a unit's earlier tenants and an operating company's registration date are not the stall's age.
  - A place's age is its earliest same-name registration, ceased ones included. When a dated guide shows the place before that date, the registration is read as a re-registration, and the age becomes a lower bound.
  - The OpenStreetMap match also needs a name score of 0.8, not 0.6.
  - This leaves 7 exact ages and about 120 lower bounds, so the survival part carries little information.
  - ACRA has no cessation dates, so no dated 2016–2026 closure rate exists. The closure baseline uses ACRA's Tampines F&B entities registered from 2016, with a constant hazard fitted to live status at known age: hawker 0.146, restaurant 0.072, cafe 0.149, fast food 0.066 a year. The rate falls with age, so it overstates risk for established places. This is still preferred to the flat 0.10, as it is measured.
- 15 November 2026, at the real fit:
  - The first real fit (4 chains, 1,000 warm-up, 1,000 draws) failed the R-hat gate: maximum 1.0138, bulk ESS 415, no divergences. It was not accepted.
  - A bug wrote its forecasts before the gate was checked. The file was deleted unread and uncommitted. `run.py` now writes forecasts and site data only after every gate passes.
  - I saw that fit's summary before deleting it: λ's interval ran from 0.014 to 0.397, 3 places were tied on backing, and 2 on value.
  - The remedy is longer chains, 2,000 warm-up and 2,000 draws, with the model, data and gates unchanged.
- The 1,116 raw menu rows are not in the repository; only the 652 rows kept or set aside are. The coded filters therefore run over those 652 rows. They check the stated rules (no delivery sources, no undated or pre-2023 rows, set-aside rows excluded with their reason); they cannot recreate the earlier removals.
- 15 November 2026: the dish-type rules live in `dishtypes.py`, not `types.py`, because a file named `types.py` shadows Python's standard `types` module. The rules are the same.
- 15 November 2026, after publishing, prompted by a reader comparing the two price lists on the page:
  - The page showed the standard price (the place's premium applied to the dish mix shared by all places) as each place's "standard main". It ran about 11% below each place's own dishes on average, and it put Seoul Garden at S$51.85, above all its buffets but one. The figure was right for its definition, but the label made it read as a typical dish there.
  - The page now shows the median of each place's own price rows in September 2026 dollars, with the cheapest and dearest. This matches the typical main in the Google list apart from inflation. I first tried the model's price for the place's own mix, exp(π_p + Σ_t w_pt d_t), but with three rows partial pooling moved Song Han Carrot Cake from S$3.53 to S$5.00, which again did not match. That model price stays in `derived/places.tsv` as `own_price`. Value still divides by the standard price on the shared mix, as pre-registered.
  - Buffets and sharing platters (`buffet|platter for two` in the dish name, 10 rows) are no longer price rows: none is one person's main. Before, they fell in the catch-all `other` type, whose low mean made a buffet place look very dear.
  - The ranking rule's "at least three verified mains" now counts rows that reach the price model. Seoul Garden and Captain Kim Korean BBQ list only buffets, so they leave the ranking, which drops from 54 places to 52.
  - The model, priors and gates are unchanged. The refit used 2,000 warm-up and 2,000 draws, with the same seed. `forecasts.tsv` stays as frozen; the fit does not overwrite it. Its rows for the two places above are still scored.
- 15 November 2026, fixing the data errors listed on the page:
  - Tai Wah Pork Noodle: the S$5 row was dated 2023-10 from Eatbook's Tampines 1 guide, but Hawkers' Street opened in July 2024. The row now takes the page's shown date, 2026-07. The dating rule in the post gained this case.
  - Nanyang Dao (p083) is at Century Square #B1-18 (Eatbook, 7 October 2024), not Tampines Mall. Its venue, coordinates and postal record changed, so guides scoped to Tampines Mall no longer count it and guides scoped to Century Square do. No ACRA entity matches it at either address.
  - Xing Yun Kway Chap (p019) is marked closed: Miss Tam Chiak reported it closed in 2016, and ACRA shows Nasi Lemak Specialist at its unit since 2017. It leaves the survival model like the moved place. Its frozen closure forecast is not scored (`CLOSED_BEFORE_FREEZE` in `check.py`), because it closed before the forecasts were made.
  - Wingstop's second outlet, Tampines Mall #04-23 to 25 (the mall's store list), is a note on the page only. The study's place list and prices are for Our Tampines Hub.
  - Jin Kimchi Express: the flagged date was right. Its review was published on 27 February 2023, and the rule gives the row that date. Nothing changed.
  - The refit used the same model, priors, gates, seed and draws. `forecasts.tsv` is unchanged.
- 21 November 2026, before any closure forecast resolved, from issue #139:
  - The closure forecast counts closures that happened by 15 November 2027. The checker scans ACRA and OpenStreetMap after that date too. It used to count any evidence it held on the scoring run, so a closure on 16 November 2027 could change the score.
  - ACRA gives no cessation date, and an OpenStreetMap edit date is the date of the edit, not of the closure. The date the checker first records the evidence (`first_seen` in `status.tsv`) therefore says only that the closure happened on or before that date.
  - Rule: a place with closure evidence counts as closed by the deadline when a reviewed closure date in `closure-dates-reviewed.tsv` is on or before 15 November 2027. A reviewed date after the deadline means the place counts as not closed. With no reviewed date, evidence first recorded on or before 15 November 2027 counts as closed. Evidence first recorded after the deadline, or with no recorded date, stays unresolved until a reviewed date is added. While any place is unresolved, the closure score is not computed.
  - A place whose closure date cannot be found keeps the score unresolved. How to settle it will be decided and recorded here before the score is computed.
  - The checker also failed to record `first_seen` for new evidence, because every place already had a row with a blank date. It now records the run date.
  - The closure definition above, the deadline, the baseline and `forecasts.tsv` are unchanged.
- 21 November 2026, before any closure forecast resolved, from issue #138:
  - The closure rule says a place counts as closed when its ACRA entity "becomes ceased or struck off". ACRA uses more status names than these two. At the freeze the checker counted any status change as a closure, including a provisional status such as `Gazetted To Be Struck Off` and a lookup that found no record.
  - Reading: "ceased or struck off" means a final ACRA status, one that says the business no longer exists. The names are spelled as in the data.gov.sg ACRA datasets on 21 November 2026.
    - Companies and limited liability partnerships: `Struck Off`, and every status that starts with `Dissolved`, such as `Dissolved - Members Voluntary Winding Up`, `Dissolved - Creditors Voluntary Winding Up` and `Dissolved - Compulsory Winding Up`.
    - Sole proprietorships and partnerships: `Ceased Registration`, `Terminated`, `Cancelled` and `Cancelled (Non-Renewal)`.
  - These do not count, because the business still exists or the status can still change back: `Gazetted To Be Struck Off`, every status that starts with `In Liquidation`, and `Registration expired and has not been renewed`, which the owner can still renew.
  - Any other status does not count. The checker prints it so that a person can review it. A lookup that finds no record, or more than one, is a failed lookup, not a closure.
  - Some statuses in the data are not decided yet: `Struck Off (Early Dissolution)`, `Struck Off (Early Dissolution - simplified winding up)`, `Removed (Dissolved)` and `Ceased Registration (Transferred to Singapore)`. Until a decision is recorded here, they do not count and the checker prints them.
  - None of the 10 matched ACRA entities has changed status, so no recorded result changes. The closure rule above, the deadline, the baseline and `forecasts.tsv` are unchanged.
