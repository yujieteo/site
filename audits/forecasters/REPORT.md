# Are the forecaster rankings more than luck?

Frozen method: commit `8649d6b3560d043e80a64bd8e8b22c77d99ee5ee` (see `METHOD.md`). Every number below was produced by the scripts in `src/` from the dumps and the stored AI verdicts. Rerun with `./run.sh`.

## Answer

**No. Under the frozen method, chance explains the top ranks on both sites, so Part B does not start.** The rule in METHOD.md section 8 fires on both sites, for two separate reasons.

1. **Most of the 40 have nothing that can be scored.** Rule 4 keeps a call only if the person stated a probability or a market priced it that day. The rankings' windows (HN 2007–2019, LessWrong 2005–2021) fall almost entirely before Manifold, Polymarket and Kalshi existed, and Metaculus and ALFRED were not reachable without keys. What is left: 2 of the 20 HN people have one scored call each (gojomo, Zigurd), and 12 of the 20 LessWrong writers have 1 to 20. Published ranks 1 and 2 on HN (stcredzero, wmf) and 2 and 3 on LessWrong (gwern, Daniel Kokotajlo) have no scored in-sample call, so by rule chance does as well as they do (p = 1).
2. **Where calls exist, the records are no more spread out than luck.** Efron–Morris estimates the between-person variance at τ² = 0 on both sites. Every record shrinks to the pool's mean, and every rank interval covers most of the pool (Zvi: 4th to 76th of 79). This holds with and without the zero-information calls that break the frozen code (section 7).

The injection test shows why. Fake forecasters with the published people's call counts and a strong edge (δ = 2, an 88% win rate at 50% prices) tie with everyone else. The pipeline cannot tell skill from luck at one to twenty calls a person.

**Out of sample** (calls the rankings could not see), 38 LessWrong calls were scored and no HN calls. Zvi's log e-value is 5.33 (e = 206), which passes the e ≥ 20 bar. But it comes from 23 calls scored against the 1/2 reference (e = 493). On the 9 calls a real market priced, Zvi did worse than the market (e = 0.42). A 1/2 reference rewards anyone who states 80% on things most people expected, so this is not evidence of skill beyond the consensus.

**What this does not say.** It does not say these people forecast badly. It says the public record, under the frozen price rule, holds too few scorable calls to rank anyone. The published rankings rested on an AI's judgment of unpriced, mostly unhedged claims, and that cannot be tested this way.

**What would make it testable.** The test needs more priced calls: a Metaculus token and a FRED key for the old windows, and above all forecasts made from now on with a stated probability or against a live market. That is Part B's design. Part B is not started, as the decision rule requires. It waits for your word.


## 1. From texts to scored calls

| site | step | count |
|---|---|---|
| hn | comments | 17618819 |
| hn | commenters | 408084 |
| hn | candidates | 48038 |
| hn | accounts | 18167 |
| hn | pool | 1090 |
| hn | pool_candidates | 18029 |
| hn | units | 18048 |
| lw | items | 743136 |
| lw | authors | 16050 |
| lw | candidates | 12232 |
| lw | accounts | 2039 |
| lw | pool | 2039 |
| lw | pool_candidates | 12232 |
| lw | units | 12753 |
| hn | published_candidates | 3048 |
| lw | published_candidates | 3843 |
| hn | out_of_sample_units | 300 |
| lw | out_of_sample_units | 876 |

Units by prefilter F (stated chance, market era, FRED words) and how many went to the AI:

| site | sample | units | stated | market_era | macro | sent |
|---|---|---|---|---|---|---|
| hn | in | 18048 | 6648 | 0 | 135 | 6648 |
| hn | out | 300 | 117 | 287 | 10 | 292 |
| lw | in | 12753 | 7353 | 2108 | 120 | 8300 |
| lw | out | 876 | 572 | 876 | 22 | 876 |
| hn | recall | 150 |  |  |  | 150 |
| lw | recall | 150 |  |  |  | 150 |
| planted | in | 64 |  |  |  | 64 |

Price sources reached: manifold, polymarket, kalshi. ALFRED: no (no FRED_API_KEY). Earliest price date this run: 2020-06-01.

Why AI-listed forecasts were not scored:

| reason | count |
|---|---|
| no price | 101 |
| outcome open | 201 |
| outcome unclear | 170 |
| repeat of an earlier claim | 2 |

Scored calls by kind of price:

| site | sample | kind | reference | calls |
|---|---|---|---|---|
| hn | in | stated | coin | 51 |
| lw | in | stated | coin | 240 |
| lw | out | bet | market | 3 |
| lw | out | stated | coin | 29 |
| lw | out | stated | market | 6 |

## 2. Hacker News: records, shrunk, with rank intervals

Pool 37 people with at least one scored call, 50 calls. Efron–Morris: μ = -0.0000, τ² = 0.00000.

The published 20, in published order:

| Published | Who | Calls | Hits | Mean skill | Shrunk skill | SD | Shrunk hit rate | Rank now | 5% | 95% | log e |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | gojomo | 1 | 1 | 0.5988 | -0.0 | 0.0 | 0.5195 | 20.0 | 2.0 | 36.0 | 0.5988 |
| 7 | Zigurd | 1 | 1 | 0.6419 | -0.0 | 0.0 | 0.5195 | 20.0 | 2.0 | 36.0 | 0.6419 |

No scored in-sample call: stcredzero, wmf, adventured, jonnathanson, earl, gbog, nostrademons, potatolicious, dasil003, snowwrestler, nl, jsjenkins168, Samuel_Michon, bane, bryanlarsen, SwellJoe, tptacek, btilly.

The top 20 of the pool under the frozen method:

| Rank | Who | Published | Calls | Shrunk skill | 5% | 95% |
|---|---|---|---|---|---|---|
| 1.5 | ben_w |  | 1 | 0.0 | 2.0 | 36.0 |
| 1.5 | rms |  | 1 | 0.0 | 2.0 | 36.0 |
| 20.0 | 3pt14159 |  | 5 | -0.0 | 2.0 | 36.0 |
| 20.0 | Alex3917 |  | 3 | -0.0 | 2.0 | 36.0 |
| 20.0 | Houshalter |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | Lazare |  | 1 | -0.0 | 2.0 | 35.0 |
| 20.0 | MaysonL |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | Steko |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | Zigurd | 7 | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | aetherson |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | anigbrowl |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | ars |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | charlesdm |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | ck2 |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | cryoshon |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | danShumway |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | downandout |  | 2 | -0.0 | 2.0 | 36.0 |
| 20.0 | droithomme |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | edblarney |  | 1 | -0.0 | 2.0 | 36.0 |
| 20.0 | eli_gottlieb |  | 1 | -0.0 | 2.0 | 36.0 |

### Null test, Hacker News (10,000 populations per null)

Sum of the top 20 against chance: coin p = 0.1435, market p = 0.1344.

| Rank | Observed r-th best | p (coin) | p (market) | Published at r | p (coin) | p (market) |
|---|---|---|---|---|---|---|
| 1 | 0.0 | 1.0000 | 1.0000 | stcredzero | 1.0000 | 1.0000 |
| 2 | 0.0 | 1.0000 | 1.0000 | wmf | 1.0000 | 1.0000 |
| 3 | -0.0 | 0.8466 | 0.8421 | gojomo | 0.8466 | 0.8421 |
| 4 | -0.0 | 0.6707 | 0.6671 | adventured | 1.0000 | 1.0000 |
| 5 | -0.0 | 0.5803 | 0.5717 | jonnathanson | 1.0000 | 1.0000 |
| 6 | -0.0 | 0.5114 | 0.5010 | earl | 1.0000 | 1.0000 |
| 7 | -0.0 | 0.4184 | 0.4095 | Zigurd | 0.4184 | 0.4095 |
| 8 | -0.0 | 0.2978 | 0.2898 | gbog | 1.0000 | 1.0000 |
| 9 | -0.0 | 0.2099 | 0.2044 | nostrademons | 1.0000 | 1.0000 |
| 10 | -0.0 | 0.1645 | 0.1571 | potatolicious | 1.0000 | 1.0000 |
| 11 | -0.0 | 0.1322 | 0.1248 | dasil003 | 1.0000 | 1.0000 |
| 12 | -0.0 | 0.1136 | 0.1049 | snowwrestler | 1.0000 | 1.0000 |
| 13 | -0.0 | 0.1050 | 0.0957 | nl | 1.0000 | 1.0000 |
| 14 | -0.0 | 0.1022 | 0.0920 | jsjenkins168 | 1.0000 | 1.0000 |
| 15 | -0.0 | 0.1013 | 0.0905 | Samuel_Michon | 1.0000 | 1.0000 |
| 16 | -0.0 | 0.1003 | 0.0892 | bane | 1.0000 | 1.0000 |
| 17 | -0.0 | 0.0985 | 0.0867 | bryanlarsen | 1.0000 | 1.0000 |
| 18 | -0.0 | 0.0964 | 0.0847 | SwellJoe | 1.0000 | 1.0000 |
| 19 | -0.0 | 0.0952 | 0.0832 | tptacek | 1.0000 | 1.0000 |
| 20 | -0.0 | 0.0941 | 0.0822 | btilly | 1.0000 | 1.0000 |

Monte Carlo error of a p-value near 0.05 is ±0.0022.

**Decision rule:** chance explains the top ranks on Hacker News (stcredzero, wmf, gojomo at p ≥ 0.05).

## 2. LessWrong: records, shrunk, with rank intervals

Pool 79 people with at least one scored call, 239 calls. Efron–Morris: μ = 0.0000, τ² = 0.00000.

The published 20, in published order:

| Published | Who | Calls | Hits | Mean skill | Shrunk skill | SD | Shrunk hit rate | Rank now | 5% | 95% | log e |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Zvi | 20 | 14 | 0.1395 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 76.0 | 2.791 |
| 4 | Matthew Barnett | 7 | 6 | 0.3776 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 76.0 | 2.6434 |
| 6 | Richard_Kennaway | 2 | 2 | 0.6625 | 0.0 | 0.0 | 0.6578 | 37.5 | 5.0 | 75.0 | 1.325 |
| 8 | knb | 6 | 5 | 0.1513 | 0.0 | 0.0 | 0.6578 | 37.5 | 5.0 | 76.0 | 0.9077 |
| 9 | Costanza | 3 | 2 | 0.0079 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 76.0 | 0.0237 |
| 10 | jsteinhardt | 1 | 1 | 0.5365 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 76.0 | 0.5365 |
| 12 | orthonormal | 1 | 1 | 0.5068 | 0.0 | 0.0 | 0.6578 | 37.5 | 5.0 | 76.0 | 0.5068 |
| 13 | Cthulhoo | 6 | 6 | 0.4463 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 76.0 | 2.678 |
| 14 | mfb | 7 | 6 | 0.4174 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 75.0 | 2.9216 |
| 15 | JoshuaZ | 16 | 15 | 0.4474 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 75.0 | 7.1582 |
| 18 | Kevin | 3 | 2 | 0.2567 | 0.0 | 0.0 | 0.6578 | 37.5 | 5.0 | 75.0 | 0.7701 |
| 20 | AspiringKnitter | 5 | 5 | 0.6335 | 0.0 | 0.0 | 0.6578 | 37.5 | 4.0 | 76.0 | 3.1677 |

No scored in-sample call: gwern, Daniel Kokotajlo, Rohin Shah, paulfchristiano, Mati_Roy, Liam Donovan, Dagon, TheRev.

The top 20 of the pool under the frozen method:

| Rank | Who | Published | Calls | Shrunk skill | 5% | 95% |
|---|---|---|---|---|---|---|
| 37.5 | 2BGK5dWpTXzCE7iwF |  | 6 | 0.0 | 4.0 | 75.0 |
| 37.5 | 3uQm8nWNJXzfjjWaB |  | 7 | 0.0 | 4.0 | 76.0 |
| 37.5 | 4SuPdAqJpj7TzsaqG |  | 1 | 0.0 | 4.0 | 76.0 |
| 37.5 | 4paEeLQEBbcSsf8eh |  | 3 | 0.0 | 4.0 | 75.0 |
| 37.5 | 66Z5scyP8WqJrsc6F |  | 1 | 0.0 | 5.0 | 75.0 |
| 37.5 | 7PFnr3J3uCGSfjnZJ |  | 1 | 0.0 | 4.0 | 75.0 |
| 37.5 | 7RFsGHYEynK4LDgGb |  | 2 | 0.0 | 4.0 | 75.0 |
| 37.5 | 8CmnnrsSHHMsNC9ku |  | 4 | 0.0 | 4.0 | 76.0 |
| 37.5 | 96rSLcQ6sdo3iraWX |  | 8 | 0.0 | 5.0 | 75.04999999999927 |
| 37.5 | AoeY4rzxuMEvo9o6T |  | 1 | 0.0 | 4.0 | 75.0 |
| 37.5 | AspiringKnitter | 20 | 5 | 0.0 | 4.0 | 76.0 |
| 37.5 | BZL3TWZXx2wyptxeJ |  | 4 | 0.0 | 5.0 | 76.0 |
| 37.5 | Costanza | 9 | 3 | 0.0 | 4.0 | 76.0 |
| 37.5 | CpPz4596hmk9Pk8Jh |  | 2 | 0.0 | 5.0 | 75.0 |
| 37.5 | Cthulhoo | 13 | 6 | 0.0 | 4.0 | 76.0 |
| 37.5 | DH3Hiv6kJp93dDF4J |  | 1 | 0.0 | 5.0 | 76.0 |
| 37.5 | DuGWafuKMcBx8uXWY |  | 1 | 0.0 | 5.0 | 75.0 |
| 37.5 | F9qpt9YgQgzPEp7oe |  | 1 | 0.0 | 4.0 | 76.0 |
| 37.5 | Fn7m44CAhjRP9AquS |  | 2 | 0.0 | 4.0 | 76.0 |
| 37.5 | GrAKeuxT4e9AKyHdE |  | 3 | 0.0 | 5.0 | 76.0 |

### Null test, LessWrong (10,000 populations per null)

Sum of the top 20 against chance: coin p = 0.0435, market p = 0.0478.

| Rank | Observed r-th best | p (coin) | p (market) | Published at r | p (coin) | p (market) |
|---|---|---|---|---|---|---|
| 1 | 0.0 | 1.0000 | 1.0000 | Zvi | 1.0000 | 1.0000 |
| 2 | 0.0 | 1.0000 | 1.0000 | gwern | 1.0000 | 1.0000 |
| 3 | 0.0 | 1.0000 | 1.0000 | Daniel Kokotajlo | 1.0000 | 1.0000 |
| 4 | 0.0 | 1.0000 | 1.0000 | Matthew Barnett | 1.0000 | 1.0000 |
| 5 | 0.0 | 1.0000 | 1.0000 | Rohin Shah | 1.0000 | 1.0000 |
| 6 | 0.0 | 0.5978 | 0.6007 | Richard_Kennaway | 0.5978 | 0.6007 |
| 7 | 0.0 | 0.4154 | 0.4208 | paulfchristiano | 1.0000 | 1.0000 |
| 8 | 0.0 | 0.2877 | 0.2876 | knb | 0.2877 | 0.2876 |
| 9 | 0.0 | 0.1990 | 0.1968 | Costanza | 0.1990 | 0.1968 |
| 10 | 0.0 | 0.1364 | 0.1364 | jsteinhardt | 0.1364 | 0.1364 |
| 11 | 0.0 | 0.0847 | 0.0821 | Mati_Roy | 1.0000 | 1.0000 |
| 12 | 0.0 | 0.0509 | 0.0522 | orthonormal | 0.0509 | 0.0522 |
| 13 | 0.0 | 0.0350 | 0.0358 | Cthulhoo | 0.0350 | 0.0358 |
| 14 | 0.0 | 0.0255 | 0.0266 | mfb | 0.0255 | 0.0266 |
| 15 | 0.0 | 0.0201 | 0.0207 | JoshuaZ | 0.0201 | 0.0207 |
| 16 | 0.0 | 0.0151 | 0.0168 | Liam Donovan | 1.0000 | 1.0000 |
| 17 | 0.0 | 0.0112 | 0.0109 | Dagon | 1.0000 | 1.0000 |
| 18 | 0.0 | 0.0090 | 0.0088 | Kevin | 0.0090 | 0.0088 |
| 19 | 0.0 | 0.0075 | 0.0075 | TheRev | 1.0000 | 1.0000 |
| 20 | 0.0 | 0.0063 | 0.0066 | AspiringKnitter | 0.0063 | 0.0066 |

Monte Carlo error of a p-value near 0.05 is ±0.0022.

**Decision rule:** chance explains the top ranks on LessWrong (Zvi, gwern, Daniel Kokotajlo at p ≥ 0.05).

## 3. Out-of-sample: calls made after the ranking's window

Log e-value against the reference price. An e-value of 20 (log 3.0) rejects 'no better than the price' at 5%.

| site | person | n | log_e | e_value |
|---|---|---|---|---|
| hn | stcredzero | 0 |  |  |
| hn | wmf | 0 |  |  |
| hn | gojomo | 0 |  |  |
| hn | adventured | 0 |  |  |
| hn | jonnathanson | 0 |  |  |
| hn | earl | 0 |  |  |
| hn | Zigurd | 0 |  |  |
| hn | gbog | 0 |  |  |
| hn | nostrademons | 0 |  |  |
| hn | potatolicious | 0 |  |  |
| hn | dasil003 | 0 |  |  |
| hn | snowwrestler | 0 |  |  |
| hn | nl | 0 |  |  |
| hn | jsjenkins168 | 0 |  |  |
| hn | Samuel_Michon | 0 |  |  |
| hn | bane | 0 |  |  |
| hn | bryanlarsen | 0 |  |  |
| hn | SwellJoe | 0 |  |  |
| hn | tptacek | 0 |  |  |
| hn | btilly | 0 |  |  |
| hn | ALL 20 | 0 | 0.0 | 1 |
| lw | Zvi | 32 | 5.3298 | 206.4 |
| lw | gwern | 0 |  |  |
| lw | Daniel Kokotajlo | 5 | 1.6925 | 5.433 |
| lw | Matthew Barnett | 0 |  |  |
| lw | Rohin Shah | 0 |  |  |
| lw | Richard_Kennaway | 0 |  |  |
| lw | paulfchristiano | 0 |  |  |
| lw | knb | 0 |  |  |
| lw | Costanza | 0 |  |  |
| lw | jsteinhardt | 1 | 0.0 | 1 |
| lw | Mati_Roy | 0 |  |  |
| lw | orthonormal | 0 |  |  |
| lw | Cthulhoo | 0 |  |  |
| lw | mfb | 0 |  |  |
| lw | JoshuaZ | 0 |  |  |
| lw | Liam Donovan | 0 |  |  |
| lw | Dagon | 0 |  |  |
| lw | Kevin | 0 |  |  |
| lw | TheRev | 0 |  |  |
| lw | AspiringKnitter | 0 |  |  |
| lw | ALL 20 | 38 | 7.0223 | 1121 |

## 4. Pre-registered variants

| variant | site | published_rank | person | rank | p_pub_coin | p_pub_market |
|---|---|---|---|---|---|---|
| partly_true | hn | 1 | stcredzero |  | 1.0 | 1.0 |
| partly_true | hn | 2 | wmf |  | 1.0 | 1.0 |
| partly_true | hn | 3 | gojomo | 20.5 | 0.8520739630184908 | 0.8450774612693653 |
| partly_true | lw | 1 | Zvi | 37.5 | 1.0 | 1.0 |
| partly_true | lw | 2 | gwern |  | 1.0 | 1.0 |
| partly_true | lw | 3 | Daniel Kokotajlo |  | 1.0 | 1.0 |
| partly_false | hn | 1 | stcredzero |  | 1.0 | 1.0 |
| partly_false | hn | 2 | wmf |  | 1.0 | 1.0 |
| partly_false | hn | 3 | gojomo | 20.5 | 0.8470764617691154 | 0.8520739630184908 |
| partly_false | lw | 1 | Zvi | 37.5 | 1.0 | 1.0 |
| partly_false | lw | 2 | gwern |  | 1.0 | 1.0 |
| partly_false | lw | 3 | Daniel Kokotajlo |  | 1.0 | 1.0 |
| coin_ref_base_rate | hn | 1 | stcredzero |  | 1.0 | 1.0 |
| coin_ref_base_rate | hn | 2 | wmf |  | 1.0 | 1.0 |
| coin_ref_base_rate | hn | 3 | gojomo | 19.0 | 0.6431784107946027 | 0.5032483758120939 |
| coin_ref_base_rate | lw | 1 | Zvi | 40.0 | 1.0 | 0.7401299350324838 |
| coin_ref_base_rate | lw | 2 | gwern |  | 1.0 | 1.0 |
| coin_ref_base_rate | lw | 3 | Daniel Kokotajlo |  | 1.0 | 1.0 |
| search_population | hn | 1 | stcredzero |  | 1.0 | 1.0 |
| search_population | hn | 2 | wmf |  | 1.0 | 1.0 |
| search_population | hn | 3 | gojomo | 20.0 | 1.0 | 1.0 |
| search_population | lw | 1 | Zvi | 37.5 | 1.0 | 1.0 |
| search_population | lw | 2 | gwern |  | 1.0 | 1.0 |
| search_population | lw | 3 | Daniel Kokotajlo |  | 1.0 | 1.0 |

## 5. Injection test

### 5.1 Fake forecasters with known skill

δ is the skill on the log-odds scale: δ = 1 turns a 50% price into a 73% win rate.

| site | delta | fakes | reps | pool | median_rank | rank_q25 | rank_q75 | share_top20 | share_p05_both | spearman_delta_skill |
|---|---|---|---|---|---|---|---|---|---|---|
| hn | 0.0 | 5 | 1000 | 57 | 4.0 | 4.0 | 54.0 | 0.655 | 0.0 | -0.24 |
| hn | 0.5 | 5 | 1000 | 57 | 32.5 | 25.5 | 32.5 | 0.0 | 0.0 | -0.24 |
| hn | 1.0 | 5 | 1000 | 57 | 32.5 | 25.5 | 32.5 | 0.0 | 0.0 | -0.24 |
| hn | 2.0 | 5 | 1000 | 57 | 32.5 | 25.5 | 32.5 | 0.0 | 0.0 | -0.24 |
| lw | 0.0 | 5 | 1000 | 99 | 94.5 | 94.5 | 94.5 | 0.049 | 0.951 | 0.699 |
| lw | 0.5 | 5 | 1000 | 99 | 45.0 | 45.0 | 45.0 | 0.0 | 1.0 | 0.699 |
| lw | 1.0 | 5 | 1000 | 99 | 45.0 | 45.0 | 45.0 | 0.0 | 1.0 | 0.699 |
| lw | 2.0 | 5 | 1000 | 99 | 45.0 | 45.0 | 45.0 | 0.0 | 1.0 | 0.699 |

### 5.2 Planted forecasts through the AI

| measure | value |
|---|---|
| detection | 0.9821 |
| false_positive | 0.0 |
| stated_p_found | 1.0 |
| stated_p_exact | 1.0 |
| no_p_kept_null | 1.0 |
| due_within_31_days | 0.9815 |
| outcome_decided | 1.0 |
| outcome_right_when_decided | 1.0 |

Fake authors' ranks in the real pool, from the AI's verdicts and from the truth:

| site | fake | ai_rank | ai_n | truth_rank | truth_n | pool |
|---|---|---|---|---|---|---|
| hn | planted-hn-a | 2.0 | 6 | 2.0 | 6 | 37 |
| hn | planted-hn-b | 41.0 | 6 | 41.0 | 6 | 37 |
| hn | planted-hn-c | 6.0 | 6 | 6.0 | 6 | 37 |
| hn | planted-hn-d | 11.0 | 6 | 11.0 | 6 | 37 |
| lw | planted-lw-a | 44.5 | 6 | 44.5 | 6 | 79 |
| lw | planted-lw-b | 44.5 | 6 | 44.5 | 6 | 79 |
| lw | planted-lw-c | 44.5 | 6 | 44.5 | 6 | 79 |
| lw | planted-lw-d | 44.5 | 6 | 44.5 | 6 | 79 |

### 5.3 The AI's error rates applied to the real calls

| site | published_rank | person | base_rank | median_abs_shift | p90_abs_shift | flip_rate | drop_rate |
|---|---|---|---|---|---|---|---|
| hn | 1 | stcredzero |  |  |  | 0.0 | 0.0179 |
| hn | 2 | wmf |  |  |  | 0.0 | 0.0179 |
| hn | 3 | gojomo | 20.0 | 0.0 | 1.0 | 0.0 | 0.0179 |
| hn | 4 | adventured |  |  |  | 0.0 | 0.0179 |
| hn | 5 | jonnathanson |  |  |  | 0.0 | 0.0179 |
| hn | 6 | earl |  |  |  | 0.0 | 0.0179 |
| hn | 7 | Zigurd | 20.0 | 0.0 | 1.0 | 0.0 | 0.0179 |
| hn | 8 | gbog |  |  |  | 0.0 | 0.0179 |
| hn | 9 | nostrademons |  |  |  | 0.0 | 0.0179 |
| hn | 10 | potatolicious |  |  |  | 0.0 | 0.0179 |
| hn | 11 | dasil003 |  |  |  | 0.0 | 0.0179 |
| hn | 12 | snowwrestler |  |  |  | 0.0 | 0.0179 |
| hn | 13 | nl |  |  |  | 0.0 | 0.0179 |
| hn | 14 | jsjenkins168 |  |  |  | 0.0 | 0.0179 |
| hn | 15 | Samuel_Michon |  |  |  | 0.0 | 0.0179 |
| hn | 16 | bane |  |  |  | 0.0 | 0.0179 |
| hn | 17 | bryanlarsen |  |  |  | 0.0 | 0.0179 |
| hn | 18 | SwellJoe |  |  |  | 0.0 | 0.0179 |
| hn | 19 | tptacek |  |  |  | 0.0 | 0.0179 |
| hn | 20 | btilly |  |  |  | 0.0 | 0.0179 |
| lw | 1 | Zvi | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 2 | gwern |  |  |  | 0.0 | 0.0179 |
| lw | 3 | Daniel Kokotajlo |  |  |  | 0.0 | 0.0179 |
| lw | 4 | Matthew Barnett | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 5 | Rohin Shah |  |  |  | 0.0 | 0.0179 |
| lw | 6 | Richard_Kennaway | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 7 | paulfchristiano |  |  |  | 0.0 | 0.0179 |
| lw | 8 | knb | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 9 | Costanza | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 10 | jsteinhardt | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 11 | Mati_Roy |  |  |  | 0.0 | 0.0179 |
| lw | 12 | orthonormal | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 13 | Cthulhoo | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 14 | mfb | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 15 | JoshuaZ | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 16 | Liam Donovan |  |  |  | 0.0 | 0.0179 |
| lw | 17 | Dagon |  |  |  | 0.0 | 0.0179 |
| lw | 18 | Kevin | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |
| lw | 19 | TheRev |  |  |  | 0.0 | 0.0179 |
| lw | 20 | AspiringKnitter | 37.5 | 0.0 | 1.0 | 0.0 | 0.0179 |

## 6. Error budget

### Statistical

- Each rank's 5th–95th percentile is in section 2. Each person's posterior SD is the SD column.
- Null p-values carry Monte Carlo error √(p(1−p)/10,000), at most ±0.005.

### Systematic

Crawl gaps, dump against API, in-sample window, the 40:

| site | person | dump | api | both | only_dump | only_api | text_differs |
|---|---|---|---|---|---|---|---|
| hn | stcredzero | 16443 | 16443 | 16443 | 0 | 0 | 0 |
| hn | wmf | 11756 | 11756 | 11756 | 0 | 0 | 0 |
| hn | gojomo | 6858 | 6858 | 6858 | 0 | 0 | 0 |
| hn | adventured | 8407 | 8407 | 8407 | 0 | 0 | 0 |
| hn | jonnathanson | 2063 | 2063 | 2063 | 0 | 0 | 0 |
| hn | earl | 876 | 876 | 876 | 0 | 0 | 0 |
| hn | Zigurd | 4372 | 4372 | 4372 | 0 | 0 | 0 |
| hn | gbog | 1790 | 1790 | 1790 | 0 | 0 | 0 |
| hn | nostrademons | 11698 | 11698 | 11698 | 0 | 0 | 0 |
| hn | potatolicious | 5138 | 5138 | 5138 | 0 | 0 | 0 |
| hn | dasil003 | 5882 | 5882 | 5882 | 0 | 0 | 0 |
| hn | snowwrestler | 5781 | 5781 | 5781 | 0 | 0 | 0 |
| hn | nl | 7586 | 7586 | 7586 | 0 | 0 | 0 |
| hn | jsjenkins168 | 507 | 507 | 507 | 0 | 0 | 0 |
| hn | Samuel_Michon | 1890 | 1890 | 1890 | 0 | 0 | 0 |
| hn | bane | 7045 | 7045 | 7045 | 0 | 0 | 0 |
| hn | bryanlarsen | 5053 | 5053 | 5053 | 0 | 0 | 0 |
| hn | SwellJoe | 6675 | 6675 | 6675 | 0 | 0 | 0 |
| hn | tptacek | 50034 | 50043 | 50034 | 0 | 9 | 0 |
| hn | btilly | 7686 | 7687 | 7686 | 0 | 1 | 0 |
| lw | Zvi | 1388 | 1531 | 1386 | 2 | 145 |  |
| lw | gwern | 10144 | 10314 | 10111 | 33 | 203 |  |
| lw | Daniel Kokotajlo | 1130 | 1536 | 1130 | 0 | 406 |  |
| lw | Matthew Barnett | 392 | 603 | 392 | 0 | 211 |  |
| lw | Rohin Shah | 1770 | 1937 | 1770 | 0 | 167 |  |
| lw | Richard_Kennaway | 5183 | 5291 | 5108 | 75 | 183 |  |
| lw | paulfchristiano | 1898 | 2065 | 1897 | 1 | 168 |  |
| lw | knb | 1243 | 1215 | 1202 | 41 | 13 |  |
| lw | Costanza | 341 | 327 | 327 | 14 | 0 |  |
| lw | jsteinhardt | 789 | 810 | 786 | 3 | 24 |  |
| lw | Mati_Roy | 404 | 673 | 403 | 1 | 270 |  |
| lw | orthonormal | 2782 | 2833 | 2776 | 6 | 57 |  |
| lw | Cthulhoo | 169 | 169 | 169 | 0 | 0 |  |
| lw | mfb | 73 | 73 | 73 | 0 | 0 |  |
| lw | JoshuaZ | 4865 | 4887 | 4855 | 10 | 32 |  |
| lw | Liam Donovan | 66 | 84 | 66 | 0 | 18 |  |
| lw | Dagon | 2364 | 3102 | 2364 | 0 | 738 |  |
| lw | Kevin | 1507 | 1458 | 1443 | 64 | 15 |  |
| lw | TheRev | 35 | 32 | 32 | 3 | 0 |  |
| lw | AspiringKnitter | 292 | 292 | 292 | 0 | 0 |  |

- Edits after posting, LessWrong candidates of the 20: 151 of 1105 have a version past 1.0, and 41 were last edited more than a day after posting.
- HN candidates of the 20: 0 of 885 differ between the dump and Algolia, and 0 are missing from Algolia.

| Systematic error | Measured | Effect on the answer |
|---|---|---|
| Candidate rule differs from the published one | HN 48038 candidates and pool 1090 (published 3,048 and 227); LessWrong 12232 and 2039 authors (published 3,843 and 545) | The rebuilt rule is broader, so it finds more calls, not fewer. The published files were not kept. |
| Forecasts rule C misses | Recall sample: HN 0 forecasts in 150 non-candidate comments; LessWrong 1 in 150 (1 with a stated chance) | At most about 1 in 300 comments (95% upper bound about 2%). Missed priced calls cannot be ruled out, but they would be few next to the 167,540 HN and 36,835 LessWrong in-window texts of the 40, and they add calls to everyone in the pool alike. |
| AI verdicts | Planted units: 55 of 56 forecasts found, 0 of 8 non-forecasts flagged, 48 of 48 stated probabilities exact, 52 of 52 outcomes right | An upper bound: the planted events are famous. Real claims are more obscure. The AI marked 170 real claims unclear and 201 open, and those are left out, not guessed. |
| Crawl gaps | HN dump against Algolia for the 20: 10 items missing from the dump in 167,540, no text differences. LessWrong crawl against GraphQL: the crawl lacks quick takes and some later items (only_api column) | Small for HN. On LessWrong, quick takes before 2022 are missing, as the published ranking also said. |
| Edits after posting | LessWrong candidates of the 20: 151 of 1,105 have a version past 1.0, and 41 were last edited over a day after posting. 2 of 28 scored items with edit data were edited over a day later | Too few to move a rank, and the ranking has no information to move. |
| Price sources unreachable | Metaculus (token), ALFRED (FRED key). 101 settled forecasts skipped for having no price | This is the largest cause of the empty records. |
| Market matches | 27 forecasts had an open market. The AI matched 14, and 9 of those had a price that day | Out-of-sample only. |
| 1/2 reference rewards easy questions | Variant 3 (base-rate reference) in section 4. Zvi out-of-sample: e = 493 against 1/2, 0.42 against markets | It is why the 1/2 out-of-sample e-values are not counted as skill. |
| Calls made together in one thread | Prediction-thread comments list many calls at once, and the calls are not independent | It would widen the intervals further. |
| Frozen-code defect | Records whose only calls are a stated 50% against 1/2 have zero variance and pin μ near 0 (2 HN, 5 LessWrong people). The frozen order statistics then compare numbers near 1e-22 | The frozen p-values below rank 3 and the frozen synthetic injection are not interpretable. Section 7 reruns them without those calls. The decision does not depend on it. |

## 7. Exploratory, after the results: without the zero-information calls

Written after the frozen results were seen (DEVIATIONS.md item 3). It does not replace them.

- Hacker News: pool 35, 47 calls, μ = -0.0597, τ² = 0.0000; sum of the top 20 against chance: coin p = 0.1770, market p = 0.1699. Largest raw log e-values against the reference: downandout 1.366 (2 calls), MaysonL 0.683 (1 calls), gfodor 0.683 (1 calls), droithomme 0.683 (1 calls), cryoshon 0.683 (1 calls).
- LessWrong: pool 74, 224 calls, μ = 0.0063, τ² = 0.0000; sum of the top 20 against chance: coin p = 0.0061, market p = 0.0051. Largest raw log e-values against the reference: JoshuaZ 7.158 (16 calls), AspiringKnitter 3.168 (5 calls), mfb 2.922 (6 calls), Zvi 2.791 (19 calls), Cthulhoo 2.678 (6 calls).

With τ² = 0 every shrunk record equals μ, so the order-statistic test only compares the pool's mean with chance's. On LessWrong that mean beats both nulls (p ≈ 0.006), against a 1/2 reference that rewards easy questions. The largest single record, JoshuaZ's e = 1,284 on 16 calls, falls short of the look-elsewhere bar for 74 people (74/0.05 = 1,480).

| site | published_rank | person | n | p_pub_coin | p_pub_market |
|---|---|---|---|---|---|
| hn | 1 | stcredzero | 0 | 1.0 | 1.0 |
| hn | 2 | wmf | 0 | 1.0 | 1.0 |
| hn | 3 | gojomo | 1 | 0.6807319268073193 | 0.679032096790321 |
| hn | 4 | adventured | 0 | 1.0 | 1.0 |
| hn | 5 | jonnathanson | 0 | 1.0 | 1.0 |
| lw | 1 | Zvi | 19 | 0.3494650534946505 | 0.3477652234776522 |
| lw | 2 | gwern | 0 | 1.0 | 1.0 |
| lw | 3 | Daniel Kokotajlo | 0 | 1.0 | 1.0 |
| lw | 4 | Matthew Barnett | 7 | 0.08869113088691132 | 0.08309169083091691 |
| lw | 5 | Rohin Shah | 0 | 1.0 | 1.0 |

Synthetic injection without the zero-information calls (300 replications):

| site | delta | reps | pool | median_rank | share_top20 | share_p05_both |
|---|---|---|---|---|---|---|
| hn | 0.0 | 300 | 55 | 3.0 | 0.7 | 0.3 |
| hn | 0.5 | 300 | 55 | 30.5 | 0.0 | 1.0 |
| hn | 1.0 | 300 | 55 | 30.5 | 0.0 | 1.0 |
| hn | 2.0 | 300 | 55 | 30.5 | 0.0 | 1.0 |
| lw | 0.0 | 300 | 94 | 92.0 | 0.05 | 0.95 |
| lw | 0.5 | 300 | 94 | 45.0 | 0.001 | 0.999 |
| lw | 1.0 | 300 | 94 | 45.0 | 0.002 | 0.999 |
| lw | 2.0 | 300 | 94 | 45.0 | 0.001 | 0.999 |

Fakes of every skill tie at the pool mean (median ranks are tie averages). share_p05 tracks the pool mean, not the fake, so it is not a power estimate. The pipeline has no power at these call counts.
