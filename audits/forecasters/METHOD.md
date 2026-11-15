# Frozen method: are the forecaster rankings more than luck?

This file and the code in `src/` and `prompts/` were committed before any result was computed. The commit hash is in `FROZEN`. After that commit the rules do not change. A change that only makes the code run as written (a crash, a file path, an API field name) is listed in `DEVIATIONS.md` with its commit and the reason, and is made before scores are looked at. A change after scores are seen is not allowed.

## 1. Who is judged

- The 20 Hacker News accounts and the 20 LessWrong writers of the published rankings, in published rank order (`src/common.py`). Nobody is added or removed.
- Each person is judged on the site they were ranked on. Names are only the names people give on that site.

## 2. Data

| Source | What | Used for |
|---|---|---|
| `open-index/hacker-news` on Hugging Face, Oct 2006 to Dec 2019 | Every HN item, with exact times | The in-sample search over all accounts |
| `x65617379/lesswrong_260509` on Hugging Face (May 2026 crawl) | Every LessWrong post and comment | The in-sample search over all authors |
| Algolia HN API | Full comment and story history of the 20 HN accounts | Out-of-sample calls, crawl-gap check |
| LessWrong GraphQL | Full comment, quick take and post history of the 20 writers, with edit times and versions | Out-of-sample calls, crawl-gap and edit checks |
| Manifold, Polymarket, Kalshi, Metaculus | Market price (Metaculus: community prediction) on the day of a call | Reference prices |
| ALFRED (St. Louis Fed) | Data as published on the day of a call | Reference probability for claims about a FRED series |

`src/fetch_dumps.sh` checks every dump file against its published SHA-256. Metaculus needs `METACULUS_TOKEN` and ALFRED needs `FRED_API_KEY`. A source that cannot be reached gives no prices. Its calls are then skipped by rule 4, and the gap goes in the error budget. Nobody fills it by hand.

## 3. Candidates, pools and windows

- In-sample windows are the published rankings' own: HN comments posted from 2007-01-01 up to 2020-01-01, and LessWrong posts and comments from 2005-01-01 up to 2022-01-01 (UTC).
- Out-of-sample is everything the 40 posted after their window, up to 2026-11-15. The rankings could not have seen these calls.
- **Candidate rule C.** Quoted material (blockquotes and lines starting with `>`) is removed. A text is a candidate if a commitment phrase or a stated-chance phrase from `COMMIT` and `CHANCE` in `src/common.py` matches. On LessWrong, every comment under a post whose title contains "prediction" or "predictions" is also a candidate. HN candidates are comments. LessWrong candidates are posts and comments. Deleted and dead items are left out.
- **Search population.** Every account with at least one candidate in the window. **Pool.** On HN, accounts with at least 8 candidates, plus the 20, as the published ranking did. Its other route, "people who stood out in an earlier pass", cannot be repeated. On LessWrong, every author with a candidate. The rankings, shrinkage and null tests all run over the pool.
- Each candidate is cut into **units**: ±600 characters around each match, with overlapping spans merged, at most 20 per text. A comment under a prediction thread is one unit, its first 4,000 characters. Every unit stores the SHA-256 of its text.
- The counts are compared with the published 3,048 HN and 3,843 LessWrong candidates, and the difference goes in the error budget. The published candidate files were not kept, so this is a rebuild of the rule as published.

## 4. Which calls get a score (the price rule)

1. **Prefilter F.** A unit goes to the AI only if it could be priced. That means it shows a stated chance (`STATED` in `src/common.py`), or it was posted on or after the first day of a price source this run can reach (Metaculus 2015-10-01, Polymarket 2020-06-01, Kalshi 2021-07-01, Manifold 2021-12-01), or it names a FRED-type series (`MACRO`) while ALFRED is reachable. Every other unit is skipped unread, because rule 4.3 would skip it anyway.
2. **AI verdict** (`prompts/verdict.md`). An AI reads each unit blind. It sees no author name, only the site, the date and the thread title. It lists every checkable forecast about the world, with the claim, the probability the author states (only a number or odds written in the text), the side asserted, the due date, the outcome as of 2026-11-15, the date it was settled and a source.
3. A call is scored only if it has a price:
   - **Stated probability**: score the stated probability. The reference is that day's market price for the same claim, or 1/2 if no market priced it.
   - **No stated probability, market price exists**: score it as a bet at that day's price (section 5).
   - **No stated probability, FRED series**: the ALFRED reference (section 6) stands in for the price.
   - **Otherwise** the call is skipped.
4. **Market match** (`prompts/match.md`). Candidate markets come from each platform's search with the AI's search phrase. A market must be open at the call's time, or open later on the same UTC day. A second blind AI pass accepts a market only if it settles on the same fact, with a deadline within 90 days of the claim's (or the claim has none), and says whether YES means the claim is true. The price is the last trade or community prediction at or before the call's timestamp, or the first one if the market opened later that day.
5. **Outcomes.** Only claims settled true or false on or before 2026-05-31 count. "Partly" is left out in the main analysis (section 9 tests both readings). Open, ambiguous and later claims are left out. When one person makes the same claim twice, only the first counts.

## 5. The score of one call

Write *y* = 1 if the claim came true. *R* is the reference probability of the claim, a market price or 1/2. Stated probabilities and prices are held between 0.01 and 0.99.

- **Stated probability *p***: the log-score skill is *d* = ln *P*(*y*) − ln *R*(*y*), where *P*(1) = *p* and *P*(0) = 1 − *p*. The raw log score ln *P*(*y*) is reported too.
- **Bet at price *q*** (the price of the side asserted): the person stakes λ = 1/2 of their wealth on their side at that price, so *d* = ln(1 − λ + λ·win/*q*).

In both cases exp(*d*) has mean 1 if outcomes follow *R*. A person's product of exp(*d*) over time is therefore an e-value against "no better than the reference". It is the running bet used again in Part B.

## 6. ALFRED reference

For a claim that a FRED series will be above or below a level on a date, the reference is the share of past changes, over the same horizon in the 20 years before the call, that would have taken the series across the level from its last value. Both the changes and the last value come from the ALFRED vintage published on the day of the call.

## 7. Shrinking each record

- **Hit rate.** A hit is a call whose asserted side came true. A stated 50% asserts no side. Rule of succession: (hits + 1)/(calls + 2). Then arcsin√ with variance 1/(4·calls), then Efron–Morris.
- **Skill (the ranking statistic).** The person's mean *d*. Its variance is the variance *d* would have if outcomes followed *R*. That variance does not depend on outcomes, so it is the same under every null.
- **Efron–Morris shrinkage** is normal–normal empirical Bayes. The between-person variance τ² is the Paule–Mandel moment estimate (positive part), and μ is the precision-weighted mean. The shrunk value is μ + τ²/(τ² + σᵢ²)·(xᵢ − μ). When τ² = 0, everyone shrinks to μ and the ranking says nothing.
- **Rank uncertainty.** 10,000 draws from each person's normal posterior are ranked. Every rank is shown with its 5th–95th percentile.

## 8. Null test (look-elsewhere corrected)

The test runs per site over the whole pool, with the real calls, the real call counts and the top-20 cutoff. There are 10,000 simulated populations per null, from seed 20261115.

- **Coin null (coin-flippers).** The world, each call's confidence and the call counts stay real. A fair coin picks the side of each call.
- **Market null.** Each person's sides and confidence stay real. Outcomes are drawn from the reference probability *R*.

Each simulated population is scored, shrunk and ranked exactly like the real one. For each rank *r* = 1…20 the test reports:
- *p_rank*: how often chance's *r*-th best shrunk skill is at least the observed *r*-th best,
- *p_pub*: how often chance's *r*-th best is at least the shrunk skill of the person published at rank *r* (a person with no scored call gets 1),
- and the same comparison for the sum of the top 20.

*p* = (1 + count)/(1 + 10,000).

**Decision rule.** Chance explains the top ranks of a site if any of published ranks 1, 2 and 3 has *p_pub* ≥ 0.05 under either null. Part B starts only if this holds on neither site. Otherwise the work stops and the report goes to the owner.

Out-of-sample, each of the 40 gets a log e-value Σ*d* over their calls after the window, and each site gets the sum over its 20. An e-value of 20 or more rejects "no better than the reference" at the 5% level, by Ville's inequality.

## 9. Pre-registered variants

Reported beside the main result, never in its place:
1. "partly" counted as true; 2. "partly" counted as false;
3. the 1/2 reference replaced by the pool's base rate of claims that came true, which corrects for easy questions;
4. **search size**: every searched account outside the pool is added to the nulls, with Binomial(candidates, pool rate) calls drawn from the pool's calls. Chance then gets the turns that "stood out in an earlier pass" had.

## 10. Injection test

1. **Fake forecasters with known skill** (`src/inject.py`). Twenty fakes per site join the real pool. Each copies the call counts of the published 20, and its calls are drawn from the pool's real calls. A fake with skill δ ∈ {0, 0.5, 1, 2} (five fakes each) sees its asserted side win with probability σ(logit *q* + δ), where *q* is the side's reference price. It states that probability on stated calls. The test has 1,000 replications and reports each δ's median rank, the share in the top 20, and the Spearman correlation of δ with shrunk skill.
2. **Planted forecasts with known outcomes** (`data/planted.jsonl`, written before any verdict). There are 64 units from 8 fake authors (4 per site): real events with known outcomes, stated probabilities, non-forecasts and unpriced claims. They are mixed blind into the AI batches, and the report gives the AI's detection, stated-probability, side, due-date and outcome accuracy. The fake authors' ranks from the AI's verdicts are compared with their ranks from the truth.
3. The measured AI error rates are applied to the real calls (outcome flips, missed and spurious calls). The rank shift that results goes in the error budget.

## 11. Error budget

- **Statistical**: posterior standard deviations, rank intervals, null *p*-values and their Monte Carlo error √(p(1−p)/10,000).
- **Systematic**, each measured where it can be:
  - AI verdict errors (from 10.2);
  - candidate-rule recall: 300 random non-candidate in-sample comments of the 40 go blind to the AI, and found forecasts per 1,000 comments are scaled up;
  - crawl gaps: dump against API ids and texts for the 40, in-sample;
  - edits after posting: LessWrong versions and edit times, HN dump text against Algolia text;
  - the mismatch with 3,048 and 3,843;
  - market-match errors;
  - unreachable price sources;
  - outcomes settled after the AI's knowledge;
  - the 1/2 reference's easy-question bias (variant 3);
  - dependence between calls made in one thread.

## 12. AI runs

The AI is a Claude model (Sonnet tier) run as Claude Code subagents. Each subagent gets one batch file and the prompt file. The batches, prompts and verdicts are all stored, so a rerun from the dumps reuses the same verdicts. A fresh model run is a new experiment and is reported as one.

## 13. What may change after the freeze

The layout of `REPORT.md` and its written answer can change, but the numbers in it cannot: they come from the scripts. The fetch scripts may be fixed to get data the frozen rules call for (an API that pages differently), with each fix in `DEVIATIONS.md`. Nothing that decides who is a candidate, which call is scored, how it is scored, or how ranks are tested may change.
