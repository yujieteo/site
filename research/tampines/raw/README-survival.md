# Survival inputs (prereg "Inputs" item 3, and the closure baseline in "Forecasts" item 3)

Fetched 14–15 November 2026 (Singapore time) by `scripts/tampines/survival.py`. Run it with
`SURVIVAL_CACHE=<dir> uv run --with rapidfuzz python scripts/tampines/survival.py`. Every download and raw API reply is cached in `$SURVIVAL_CACHE`, outside the repo. A rerun reads the cache, so delete the cache to refetch. Name similarity is rapidfuzz `token_set_ratio` after `default_process` (lower case, punctuation removed), divided by 100.

## Sources

| source | what | licence | fetched |
|---|---|---|---|
| OneMap elastic search (`onemap.gov.sg/api/common/elastic/search`) | postal code, block and road of each place; coordinates of postal codes | SLA OneMap terms | 2026-11-15 |
| ACRA Information on Corporate Entities (data.gov.sg collection 2, 27 CSVs) | 2,124,508 entities | Singapore Open Data Licence | downloaded 2026-11-15; ACRA last updated the datasets 2026-10-14 |
| URA Master Plan 2025 Planning Area Boundary (No Sea), data.gov.sg `d_2cc750190544007400b2cfd5d7f53209` | the Tampines planning area polygon | Singapore Open Data Licence | 2026-11-15 |
| OpenStreetMap API 0.6 (`map.json` per 310 m box, `history.json` per element) | food elements near each place and their version history | ODbL, © OpenStreetMap contributors | 2026-11-15 |

Overpass was not used. The OSM API served everything the matching needed.

## postal.tsv: 139 rows

One row per place, all 139 with a postal code. Each distinct `place` string is searched in OneMap, and the result nearest the place's own lat/lon is kept if it lies within 150 m.
- 106 places resolve directly (`onemap:place`).
- 31 places resolve through the nearest OSM element within 60 m that has `addr:housenumber` and `addr:street`. That address is then searched in OneMap (`osm-address(Nm)->onemap`). These are:
  - the 19 Tampines 1 places, because OneMap's nearest match for "Tampines 1" was Tampines Plaza 1, 289 m away;
  - the 3 at NTUC Income Tampines Junction;
  - 9 coffee shops OneMap does not index by name (Kopitiam Corner, Kim San Leng, Happy Hawkers, Kenny Eating House, ...).
- 2 places (p133 and p134, Chang Cheng Mee Wah at Tampines North) have the same coordinates as p121, which OneMap resolved to 633 Tampines North Drive 2 (`same-coordinates-as`).
- `level` and `unit` are parsed from the place's unit text: `#01-39` gives 01 and 39. Several units are joined with `/`, so `#05-05/06/07` gives level 05, unit 05/06/07, and `#B1-K2 to K3` gives B1, K2/K3. 10 places have no unit.

Check by hand: p109 Granny's Pancake (Kim San Leng Kopitiam). The OSM address used is 45 m away (138 Simei Street 1), the furthest fallback.

## acra.tsv: 318 candidate rows, 51 places with a chosen match

The rule is the pre-registered one, applied exactly. An entity is a candidate when its `postal_code` equals the place's postal code, and either:
- level and unit equal the place's (leading zeros ignored; any of a place's listed units counts), or
- the name similarity between `entity_name` and the place name is at least 0.6.

`match_rule` is `unit`, `name` or `unit+name`. Every candidate is kept.

**`chosen=1`** goes to the first candidate after sorting by:
1. unit match,
2. live status (`Live`, `Live Company`),
3. name score,
4. primary SSIC 56xxx,
5. latest registration date.

Steps 4 and 5 only break ties. Three ties happened:
- p108: two live Al Mahboob entities. The SSIC 56111 company is chosen over the 56200 caterer.
- p111: two cancelled 56112 entities. The later one is chosen.
- p095: two live bridal firms at #01-23. Both are wrong.

**Extra column `ssic`.** This is the entity's primary SSIC. It is not in the brief, but it is a stored fact and it is needed to judge the matches.

**`status_date` is empty everywhere.** The ACRA dataset has no date of cessation or striking off. Its only dates are `registration_incorporation_date`, `uen_issue_date`, `account_due_date` and `annual_return_date`.

### Matches by kind

| kind | places | chosen match | unit+name | unit only | name only | chosen is live | chosen is live and SSIC 56 | unmatched |
|---|---|---|---|---|---|---|---|---|
| hawker (h) | 66 | 31 | 8 | 20 | 3 | 28 | 24 | 35 |
| restaurant (r) | 43 | 9 | 1 | 7 | 1 | 5 | 3 | 34 |
| cafe (c) | 30 | 11 | 2 | 7 | 2 | 10 | 5 | 19 |
| fast food (f) | 0 | – | – | – | – | – | – | – |

Of the 51 chosen matches, 11 are `unit+name`, 34 `unit` and 6 `name`. Restaurants are mostly unmatched, as expected: chain outlets in the malls trade under parent companies registered elsewhere. No brand's head-office age was used.

### The rule admits many matches that are not the place. Read this before using `chosen`.

- **Unit-only matches pick up previous or unrelated tenants.**
  - 7 chosen unit-only matches are already ceased. Examples: p086 Sushi Zanmai → PHONE JUNCTION 2 (cancelled, 1996); p097 Captain Kim → a dance school (2007); p130 Zoul's Corner → ITALY INTERIOR DECORATION CO (terminated, registered 1975); p135 Heartland by Enjoy → NETHAR TRADING (1997).
  - 5 chosen unit-only matches are live but not F&B. Examples: p095 Ramen Taisho → a bridal company; p114 Hundred Acre Creamery → an optician; p099 Soi Thai Kitchen → a studio.
  - These 12 would give wrong ages. Read literally, the ceased ones would also mark places "closed" that are open.
- **In coffee shops and food halls, one unit holds many stalls.** A unit match there finds the coffee-shop operator or another stall, not the place. Examples: p132 → THREE WOK PTE. LTD., p105 → FOODSAVVYEMPIRE, and p049, p050 and p051 all → RICKY ROJAK ISTIMEWA at Hawkers' Street. Unit matching works as intended only in the hawker centres (Round Market, Our Tampines Hub), where each stall has its own unit.
- **Several places share a chosen entity.** These are p001 and p019, p046 and p047, p049 to p051, and p133 and p134.
- **Name-only matches at 0.6 to 0.8 are often wrong.** Token-set ratio scores a shared generic word highly. Examples: p046 IM Thai Kitchen and p047 Jinjja Kitchen → FAT FAT KITCHEN (0.78); p012 Yong Huat Chicken Rice → HENG HUAT PIN KEE (0.62, SSIC 47109).
- **Live beats name.** In 3 places a `unit+name` candidate exists but is ceased, so the live unit-only one is chosen, as the brief orders.
  - p117 Three's A Crowd: THREE'S A CROWD, cancelled for non-renewal, beside the chosen MONG HOLDINGS PTE. LTD.
  - p100 Jin Hock Seafood: JIN FU SEAFOOD RESTAURANT beside the chosen 844 WUXIANG.
  - p128 San Ye Seafood: four old seafood stalls.
  - For years at the address, the ceased `unit+name` row may be the better evidence.

The cleanest subset is the 11 `unit+name` rows, plus the live SSIC 56 unit matches at the two hawker centres. If the model needs a tighter rule, for example "a unit-only match must be live and SSIC 56, and not at a multi-stall unit", that would be a change to the pre-registered rule. It should go under Deviations before the fit.

## osm.tsv: 30 places matched

For each place, the OSM API `map` call fetches a box of about 310 m around the place's lat/lon. The match is the nearest element (node, or way at its centroid) that:
- lies within 150 m,
- has a food tag (`amenity` restaurant, fast_food, cafe, food_court, ice_cream, bar, pub or biergarten, or `shop` bakery, pastry, confectionery, coffee, tea, beverages, deli, chocolate or dairy; prefixed keys such as `disused:amenity` count too, as does any `cuisine` tag),
- and has a name similarity of 0.6 or more over `name`, `name:en`, `brand`, `old_name`, `was:name`, `disused:name`, `official_name` and `alt_name`.

**History columns.**
- `first_version` and `last_version` are the timestamps of the element's first and latest versions.
- `name_changed` is 1 when the history holds more than one distinct non-empty `name` (case-folded).
- `disused` is 1 when the latest version is deleted or has any `disused:`, `was:`, `abandoned:` or `removed:` key.

**Counts.**

| kind | matched | name score ≥ 0.8 |
|---|---|---|
| hawker | 6 | 3 |
| restaurant | 18 | 11 |
| cafe | 6 | 5 |
| all | 30 | 19 |

- 2 matches have `name_changed`=1: p030, and p096 (KEK Seafood).
- None is `disused`.

**Read with care:**
- **The matches below 0.8 are mostly wrong.** Examples: p030 The Fish Soup → Fish & Co.; p034 Gopizza → Pizza Hut (0.62 with no shared token); p065 Wanpo Tea Shop → Tim Ho Wan; p074 POCHA → Hawkers' Street; p086 Sushi Zanmai → Genki Sushi.
- p046 and p047 share one node, and so do p065 and p090.
- **The OSM first version is when someone mapped the shop, not when it opened.** Most first versions here are 2022 to 2026, from bulk mall mapping.
- **Deleted elements cannot be found.** The `map` call returns only current data, so a place whose node was deleted shows as unmatched, not as `disused`. Finding deletions needs Overpass attic queries or the full-history planet file.
- Hawker stalls are seldom mapped one by one.

## acra_tampines_fnb.tsv: 3,227 entities

These are all ACRA entities whose `primary_ssic_code` starts with 56 (food and beverage service activities, SSIC 2020) and whose postal code lies in the Tampines planning area. SSIC is in the dataset, so the name-keyword fallback was not needed.

**Which postal codes are in Tampines.** The test is a point-in-polygon on the URA MP2025 boundary, using OneMap's coordinates for each postal code.
- Every distinct F&B postal code in sector 52 was geocoded.
- In the neighbouring sectors (46–54 and 82), the first, middle and last code of each 3-digit prefix were geocoded. A prefix with any code inside the polygon was then geocoded in full.

**Tampines does use other sectors.**
- **Sector 48 is partly Tampines.** It covers Changi Business Park and Expo (486xxx), plus the Upper Changi, East View Garden and Sunbird estates (487 to 489xxx). That gives 120 postal codes and 835 entities.
- **Sector 49:** 1 code, 498722.
- **Sector 52 is not all Tampines.** 14 of its codes lie outside the polygon and are excluded. They are Tampines Industrial Drive, Crescent and Avenues 1, 3 and 5, Tampines Place, and the "Tampines Avenue" landed estate.
- 20 entities whose sector-52 postal code OneMap could not geocode are included, flagged `rule = ssic56+sector52-ungeocoded`. The rest are `ssic56+postal-in-polygon`.

**What the file holds.**
- **By status:** 1,043 live and 2,184 not live.
- **By sector:** 2,391 in sector 52, 835 in 48 and 1 in 49.
- **SSIC mix:**

| SSIC | class | entities |
|---|---|---|
| 56140 | food stalls | 812 |
| 56122 | coffee shops and food courts | 685 |
| 56111 | restaurants | 612 |
| 56112 | cafes | 470 |
| 56200 | caterers | 383 |
| 56123 | kiosks | 174 |
| 56121 | fast food | 58 |
| 56130 | pubs | 33 |

`status_date` is empty: the data has no such field.

## The closure base rate (survival_rates.tsv)

**What the data cannot support.** It cannot give a dated annual closure rate for 2016–2026, meaning closures counted in each calendar year over the entities alive that year.
- The ACRA data is one snapshot (2026-10-14). It has registration dates but no cessation or strike-off dates.
- Each entity's address is its latest one. An entity that moved into Tampines keeps its old registration date. One that moved out before closing is missed.
- data.gov.sg serves only the current version, so earlier snapshots cannot be differenced.

**What it can support.** Each entity registered from 2016 is observed once: live or not at the snapshot, at a known age. This is current-status data. Assuming a constant closure hazard h, the likelihood is:
- e^(−h·age) for a live entity,
- 1 − e^(−h·age) for a closed one.

The script finds the h that maximises this. "Closed" means any non-live status: cancelled, ceased, terminated, struck off, dissolved, in liquidation, gazetted to be struck off, or cancellation in progress. Conversions to LLP, amalgamations, suspensions and "Removed (Applied To Be Revoked)" are left out of the rate. The table gives each cohort's share not live, and the fitted h with its annual probability 1 − e^(−h).

| SSIC kind (registered 2016-01-01 to 2026-10-14) | entities | not live | h per entity-year | annual P(close) |
|---|---|---|---|---|
| all 56xxx | 1,512 | 688 | 0.135 | 0.126 |
| restaurant 56111 | 304 | 91 | 0.075 | 0.072 |
| cafe 56112 | 157 | 71 | 0.162 | 0.149 |
| fast food 56121 | 15 | 4 | 0.068 | 0.066 |
| hawker stall 56140 | 377 | 195 | 0.158 | 0.146 |
| coffee shop / food court operator 56122 | 353 | 174 | 0.131 | 0.123 |
| other (56123, 56130, 56200) | 306 | 153 | 0.190 | 0.173 |

**Caveats.**
- **The hazard is not constant.** It falls with age. By cohort, all F&B:
  - 2016: 67.5% closed after about 10.3 years, which implies h ≈ 0.11.
  - 2023: 43% closed after about 3.3 years, which implies h ≈ 0.17.
  - The single h is an average weighted toward young entities. Applied to an established place, it overstates that place's risk.
- **An entity closing is not the same as a place closing.** A stall's sole proprietorship can lapse or be re-registered while the stall keeps trading. A company can be struck off after its outlet has moved.
- **The kinds are SSIC classes, not the study's kinds.**
  - The prereg's hawker kind is closest to 56140, or to 56140 and 56122 together.
  - The fast-food rate rests on 15 entities, because chain outlets are registered at head offices outside Tampines.
- **The rate counts entities registered in Tampines, not outlets.** Chain outlets are largely absent from it.

**For the forecast baseline.** A per-kind Tampines rate is measurable only in this current-status, constant-hazard sense: about 0.15 a year for hawker stalls, 0.07 for restaurants, 0.15 for cafes, and 0.07 for fast food (n = 15). A dated 2016–2026 rate is not measurable. Whether this counts as "measured", or whether the prereg's fallback of 0.10 a year applies, should be decided and logged under Deviations before the fit.
