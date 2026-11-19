# Guide matrix and Michelin history (prereg Inputs 1 and 2)

Collected 2026-11-15. Everything here is rebuilt by:

    uv run --with beautifulsoup4 python scripts/tampines/guides.py --michelin

The script reads `scripts/tampines/guide_urls.tsv` (the curated list) and `michelin_lists.tsv`. It fetches with a cache outside the repo (`GUIDES_CACHE`, default the session scratchpad), at most 1 request per second per host. It writes `articles.tsv`, `mentions.tsv` and `michelin.tsv`. Only facts are stored: titles, dates, URLs, flags and numbers. Sponsorship evidence is at most 10 words. No Google, Tripadvisor or Foursquare ratings are stored.

## How the list was built

- **Seed:** the editorial URLs cited in `src/kit/food-data.ts` (62 rows).
- **Outlet post sitemaps:** Eatbook, Seth Lui, Daniel Food Diary, ieatishootipost, HungryGoWhere and Miss Tam Chiak. Kept slugs that contain "tampines" or a venue (56 rows), or a place name (39 rows).
- **Tag and location pages:** Seth Lui `location/tampines`, Eatbook `tag/*tampines*` and Daniel Food Diary `tag/tampines` (8 rows).
- **WebSearch:** several queries per outlet and venue (8 rows).

**Kept:**

- Articles whose subject is Tampines food: the whole town, a venue, a kind, a sub-area, or a coffeeshop.
- Articles about one of the 139 places at its Tampines outlet: reviews, opening news, menu news and closure news. `theme` says which.
- A brand review only when it names at most two outlets, one of them the Tampines outlet with its address.

**Dropped, about 250 fetched candidates:**

- Articles about other places.
- Islandwide lists, such as udon, fish head steamboat, nasi lemak, and Google-rating lists.
- Pasar malam and bazaar pieces, promotions, and mall news with no food guide.
- Reviews of the same brand at another outlet. For example, Gopizza at the Tampines 1 food court (not OTH), Tiong Bahru Boneless Chicken Rice at Tampines St 81 (2021, not Tampines 1), Wingstop at Tampines Mall #02-23 (not OTH), Srisun at Hougang and Im Thai at Sengkang.
- Pre-2016 pages.
- Duplicate URLs, which redirect to the canonical page.

## Counts

**173 articles, 467 mentions; 128 of the 139 places are named at least once.**

| outlet | articles | all | kind | sub-area | venue/place | single | sponsored | mentions |
|---|---|---|---|---|---|---|---|---|
| Eatbook | 64 | 1 | 3 | 4 | 9 | 47 | 17 | 194 |
| Seth Lui | 43 | 1 | | | 13 | 29 | 2 | 95 |
| Daniel Food Diary | 26 | | 1 | | 7 | 18 | 8 | 50 |
| Miss Tam Chiak | 13 | 1 | | | 1 | 11 | 0 | 21 |
| HungryGoWhere | 12 | 1 | 1 | | 3 | 7 | 4 | 54 |
| Mothership | 2 | | | | 2 | | 2 | 3 |
| ieatishootipost | 2 | | | | | 2 | 1 | 2 |
| Honeycombers, CityNomads, Singapore Foodie | 1 each | 1 each | | | | | 0 | 17 |
| Women's Weekly SG, Wonderwall, MiddleClass | 1 each | | | | 1 each | | 0 | 17 |
| blogs: Ordinary Patrons, liyenz, Faithfully Yours, The Wacky Duo, Little Day Out | 1 each | | | | 2 | 3 | 0 | 14 |

- **Scopes:** 117 single-place articles. 56 others: 7 `all`, 5 `kind=…`, 4 `area=…`, 39 venue or place, and 1 two-venue scope.
- **Sponsored:** 34 of 173 articles disclose payment, a partnership, a media tasting or preview, or a hosted meal. All 34 hits were read by eye. One false hit, "brought to you by the folks behind", is now excluded by rule.
- **Numeric scores:** 18, all Eatbook /10 review boxes. Leslie Tay's per-dish /5 scores are not overall scores and are left blank.
- **`says_closed=1`:** 1 (Miss Tam Chiak, Xing Yun Kway Chap, 2016). One false hit, other Lawa Bintang outlets closing, is overridden in the script.
- **Dates:** 171 come from page metadata. Two Mothership dates come from Wayback. Faithfully Yours has no date in the page; its date is the Blogger feed `published` value, recorded in `DATE_OVERRIDES`.

## Michelin

- **Bib Gourmand and star lists:** read in full for 2016–2019 and 2021–2026 from contemporary news lists (sources in `michelin_lists.tsv`). There was no 2020 selection. All 11 years are `checked=1`.
- **Tampines entries:** the only Tampines entries on those lists are the 2026 Bibs for Rajarani Thosai (p007) and Yi Pin Wei (p015).
- **Same-name entries at other addresses are not recorded.** These are Tai Wah Pork Noodle at Hong Lim, Tiong Bahru Hainanese Boneless Chicken Rice at Tiong Bahru Market, Keng Eng Kee at Alexandra, and Putien's star at Kitchener Road.
- **Michelin Selected (plate) is not checked for any year.** News outlets do not print the Selected lists, and guide.michelin.com returned nothing.
- **Three 2026 plates come from Daniel Food Diary reviews:** Yummy Sarawak Kolo Mee and Xing Ji Wanton Mee, stated directly, and Song Han Carrot Cake. The Song Han plate is inferred from "five new stalls" at Round Market, which leaves three Selected after the two Bibs. Song Han was uncertain at collection. The [19 November value audit](../README.md#value-audit-19-november-2026) checked [Michelin’s complete 2026 list](https://guide.michelin.com/sg/en/article/michelin-guide-ceremony/full-list-michelin-guide-sg-2026), which explicitly names Song Han and Yummy as Selected and Rajarani as Bib Gourmand.

## Known weaknesses

- **Updated in place.** Eatbook, Seth Lui and HungryGoWhere rewrite evergreen guides under the same URL. 52 articles have a `modified` year later than the `published` year. Eatbook also resets `article:published_time` when it republishes; for example, `tampines-hawker-food` reads 2026-10-22 although its low post id (7036) points to a much older first version. The mentions are from the version fetched on 2026-11-15, so earlier versions, and the places they named, are lost. Wayback snapshots would be needed to recover them. A trailing `modified` column is added to `articles.tsv` for this.
- **Copying and redirects.** Seth Lui guides are syndicated on Yahoo (excluded). Honeycombers' Tampines cafes article now redirects into its area guide. HungryGoWhere's `neighbourhood/tampines` redirects to `tampines-hawker-stalls`. Eatbook `tampines-cafes` redirects to `tampines-cafe`. MakanEast news rewrites Eatbook items. Several opening stories appear the same week across Eatbook, Seth Lui and HungryGoWhere from the same press release, and are often sponsored or hosted.
- **Sub-areas.** The four `area=` lists in `guide_urls.tsv` (north, west, east, central) are my own assignment from address and latitude/longitude, checked against what each Eatbook sub-area guide names. The borders are fuzzy; p101 is in both north and west.
- **Scope drops cross-venue names.** 12 articles name a place outside their scope, for example a cafe guide listing Abundance. These names are dropped from `mentions.tsv`. `--review` prints them.
- **Name matching.** Chains and generic names (`STRICT`) count only when the article's scope is the venue or place, or when an address hint for the Tampines outlet is near the mention. Indian Cuisine, The Fish Soup, Japanese Curry House and Maxwell Chicken Rice can therefore be missed in town-wide lists.
- **Possible errors in places.tsv:**
  - Nanyang Dao (p083) is at Century Square #B1-18 per Eatbook, not Tampines Mall.
  - Wingstop (p038) is listed at OTH B1, but Eatbook reports a Tampines Mall #02-23 outlet opening in 2026.
  - Xing Yun Kway Chap (p019) shares unit #01-14 with Nasi Lemak Specialist (p001), and Miss Tam Chiak marks it closed.
- **Not obtained:**
  - Straits Times, CNA Lifestyle, 8days and TODAY: the search tool refuses these domains, so no article could be found.
  - Time Out and MoneySmart: 403 errors.
  - Burpple: only user lists exist, no editorial Tampines guide.
  - MakanEast: excluded as a directory. Its `/shop/` pages are generated listings for every shop.
  - TheSmartLocal and Lady Iron Chef: no Tampines-specific guide found.
  - Never named in any kept article: p017, p042–p045, p047, p092, p093, p136, p137, p138.
