# Price inputs (prereg "Inputs" items 4 and 5)

Fetched 15 November 2026 by `scripts/tampines/prices.py` (stdlib; HTTP through curl). The script caches downloads in `$PRICES_CACHE`, outside the repo. `python3 scripts/tampines/prices.py A B C` rebuilds every file below.

## cpi.tsv: 180 rows

Source: SingStat Table Builder, table M213751, "Consumer Price Index (CPI), 2024 As Base Year, Monthly", via `https://tablebuilder.singstat.gov.sg/api/table/tabledata/M213751?seriesNoORrowNo=<n>`. SingStat last updated it on 23 October 2026. It runs from 2023-01 to 2026-09, with 45 months for each of 4 series. Index 2024 = 100.

| series | seriesNo | SingStat label |
|---|---|---|
| all | 1 | All Items |
| hawker | 1.11.3 | Hawker Centres, And Food Courts, Coffee Shops & Kiosks |
| restaurant | 1.11.1 | Restaurants, Cafes & Pubs |
| fastfood | 1.11.2 | Fast Food Restaurants |

Limits:
- **M213751 has no series labelled "Hawker Food", "Restaurant Food" or "Fast Food".** The 2024-based table follows COICOP 2018. The series above are the nearest ones that cover 2023 onward. This differs from the prereg's wording and should be logged as a deviation.
- The table has narrower series: 1.11.3.1 Hawker Centres (2019-01 on), 1.11.3.2 Food Courts, Coffee Shops & Kiosks (2019-01 on), 1.11.1.1 Restaurants (2024-01 on) and 1.11.1.2 Cafes (2024-01 on). Restaurants and Cafes are not used, because they do not cover 2023.
- The latest month is 2026-09, so November 2026 dollars need either an extrapolation or a later fetch.

## singstat_dishes.tsv: 1,350 rows

Source: SingStat "Average Retail Prices Of Selected Consumer Items". There are two tables:
- M213761, monthly: 1,260 rows, 2019-01 to 2026-09.
- M213821, annual: 90 rows, 2019 to 2025.

Both table ids came from the `resourceid?keyword=average retail prices` search. A row is kept when its unit is per bowl, plate, piece or cup, or when it is the canned drink with ice. That gives 20 items. Values are in Singapore dollars.
- **Dishes available 2015 on:** Fishball Noodles, Mee Rebus, Chicken Rice, Chicken Nasi Briyani, Economical Rice (1 Meat & 2 Vegetables), Roti Prata (Plain), Fried Carrot Cake, Ice Kachang.
- **Dishes added in 2024-01:** Mee Siam, Char Kway Teow, Sliced Fish Bee Hoon, Wanton Noodles, Char Siew Rice, Duck Rice, Saba Fish With Rice, Chicken Chop.
- **Drinks:** Coffee/Tea Without Milk and Coffee/Tea With Condensed Milk (2015 on); Milo With Condensed Milk and Canned Drink With Ice (2024 on). Drop them if only dishes are wanted.

Limits:
- SingStat's footnote says prices from January 2024 come from the 2024 CPI basket. They show average price levels, but they are "not a measure of pure price movements across CPI baskets". So there is a break between 2023-12 and 2024-01.
- Sausage Bun (Each) is left out, as a bakery item.
- API note: the API pages over cells, not rows, with at most 5,000 per call. `offset` counts cells in row-major order.

## gst2023.tsv: 23 rows

This covers every item dated 2023 in `src/kit/food-data.ts`: 22 rows from `items` and 1 drink from `other`. For each row, the script read the stored source URL live, plus each monthly Wayback capture from 2023 (CDX API). It used a 2023 capture where one held the dish. A printed price is accepted only when the printed price times its mark's factor (1.199 for `++`, 1.09 for `+`, 1 otherwise) gives the stored price to the cent. All 23 rows passed that test, and no row is `unclear`.

- **5 rows change.** These are all the Butahage items, which the source prints as `++`. Each falls by about 0.9%: stored × 1.188/1.199, rounded to cents. The 5 changes total −S$0.90.
- **18 rows have no mark** and stay unchanged: Rajarani Thosai, Tai Wah, Tongue Tip, Jin Kimchi, Hundred Acre Creamery and Delato. Sethlui's Century Square guide prints no marks for any place, Haidilao included. So "none" there means only that the source prints no mark.
- None of the post's place rules (Heartland by Enjoy, Craze Kitchen, The Tree Cafe) applies to a 2023 row.
- `evidence` holds the dish name and the printed price token, at most 10 words.

Limits (dates, outside the GST question):
- 10 rows were read from guide pages whose current version is dated 2025 or 2026, because no 2023 capture holds the dish. That is 3 Hundred Acre Creamery rows, 5 Delato rows, Jin Kimchi and Tai Wah.
- For Tai Wah, item date 2023-10, the earliest dated sources found are from 2024. Eatbook's Hawkers' Street article is dated 2024-07-12, and the Tampines 1 guide was first archived in its 2024-10-03 version.
- Jin Kimchi's Tampines review is dated 2023-12-15, but the item is dated 2023-02.
- These item dates may need checking before the CPI adjustment.

## hpb.tsv: not written

The HPB Energy & Nutrient Composition of Food database could not be reached on 15 November 2026.
- `focos.hpb.gov.sg` returns NXDOMAIN, over both https and http.
- The hpb.gov.sg home page and a HealthHub search for "energy and nutrient composition" load, but neither links to the database.
- data.gov.sg has no food composition dataset. The script checked all 468 pages, 4,675 datasets, including HPB's.
- The Wayback Machine holds only the search form, last captured 2025-09-06, and no food records.
