---
title: Which Tampines food the experts back, and what it costs
date: 2026-11-09
summary: Three Round Market stalls are tied as the best-backed food in Tampines. They are Rajarani Thosai, Yummy Sarawak Kolo Mee and Chai Chee Pork Porridge.
summary: For value, Rajarani Thosai and Song Han Carrot Cake are tied for first, with a standard main at about S$3.40.
summary: Backing means how often independent food writers and Michelin name a place, and how long it has lasted. It is not taste, and nobody ate at these places for this page.
summary: Most ranks are uncertain. Of 54 places, only the top few can be told apart, and each row shows its rank as a range.
summary: 2,224 forecasts, frozen on 15 November 2026, will show by November 2027 whether the method is any good.
---
Tampines has two working hawker centres, three big malls and many coffee shops. This page ranks where to eat by how strongly independent experts back each place, and by what it costs. It works best on a phone: tap a row to see why it ranks where it does.

## Ranked by backing and value

Each row is one place that sells meals for one person. The number on the left is its rank, 8 times in 10: "2–14" means the place ranks between 2nd and 14th in 80% of the model's draws. A narrow range is a place the evidence can place. A wide one is a place it cannot.

Places at the top are tied with the leader when they beat it in at least 1 draw in 5. The bar is the backing percentile, from 0 on the left to 100 on the right: the shaded part is its 80% range and the tick is the most likely value. The price is a standard main, explained below.

::figure kind=food view=backed alt="54 Tampines food places ranked by value for money or by backing, each with a rank range, a backing percentile bar and the price of a standard main." caption="Rank by value (backing per dollar) or by backing alone. Tap a row for who names the place and its ranges. Prices are in September 2026 dollars."

**Backing** is a score for how strongly independent food writers and Michelin back a place. It comes from 43 Tampines guides by 13 outlets and from Michelin's Singapore lists for 2016 to 2026. A place counts as named only by a guide that could have named it: a Round Market guide says nothing about a place in Tampines Mall. An outlet that names nearly everything it covers counts for less than one that is choosy.

**Value** is the backing percentile divided by the price of a standard main, per S$10. It favours cheap places that experts name.

Three Round Market stalls are tied for the most backing: Rajarani Thosai, Yummy Sarawak Kolo Mee and Chai Chee Pork Porridge. Michelin gave Rajarani Thosai a Bib Gourmand in 2026. On value, Rajarani Thosai (S$3.33) and Song Han Carrot Cake (S$3.48) are tied for first.

Chains and mall restaurants sit low, with wide ranges. That says local food writers rarely write about them, not that their food is worse. Professor Brawn Cafe has a quoted 4.9 on Google, yet it ranks between 29th and 53rd on backing, because few of the guides name it. The two measures answer different questions.

## What Google reviewers say, quoted

Places are grouped by cuisine, and the best rated come first in each group. These scores are quoted from guides and directories, not collected by me, and they are not part of the backing score. The number on the left is the rating. A black number is from Google. A grey number is from another platform, and those scales are not comparable. Use the buttons to sort by rating alone or by cost.

The price on the right is the typical main: the median across the dishes I could verify. The bar runs from the cheapest dish to the dearest, including documented size options, on a logarithmic scale, and the black tick marks the typical main.

::figure kind=food view=list alt="A list of Tampines food places grouped by cuisine and sorted by rating, with the typical price of a main and the range of the menu." caption="Tap a row for its dishes, prices, dates and sources. Prices include service charge and GST where the menu adds them."

Meals, snacks, drinks and shared dishes use separate categories, because they are not like for like. Some mixed menus are still being checked, so the snack comparison is provisional. A S$2 pancake is not a cheaper dinner. A S$48.90 fish feeds a table.

Rajarani Thosai shows that scores and awards measure different things. Michelin gave it a Bib Gourmand in 2026, yet a guide last updated in July 2025 quoted 4.0 on Google. Yi Pin Wei Braised Duck Kway Chap at the same market also earned a 2026 Bib Gourmand.

## What a meal costs

Each dot is one place, at its typical main. The black line marks the median of each group. Shared-dish places are left out, because their prices are per table and not per person.

::figure kind=food view=spread alt="Four rows of dots showing the typical price at 23 hawker places, 25 restaurants, 6 cafes and 20 snack places in Tampines. The medians are S$6.00, S$16.67, S$15.54 and S$5.75." caption="Typical price per person on a logarithmic axis. Tap a dot for the place and its range. Only 6 cafes have enough verified meal prices, so that median is weak."

## What each cuisine costs

Median typical main by cuisine, with the place that scores highest. The bar runs from the cheapest typical main in that cuisine to the dearest.

::figure kind=food view=cuisine alt="Cuisines in Tampines listed with their median typical main price and the best-rated place in each." caption="Per-person meals only. A cuisine with one or two places is an example and not a market price."

## Where the food is

The map shows 334 places on real streets and MRT lines. Places with a menu sit at their block or mall. Each large number is an area, and the first view counts all 334 places: tap a number to zoom in. Dots that would touch merge into a number, and tapping that number lists the places. Malls show as one number because every unit shares one address.

::figure kind=food view=map alt="A street map of Tampines divided into five areas, each with a count of food places. Tapping an area zooms in to individual places, malls and MRT stations." caption="Streets, MRT and parks from OpenStreetMap. Hawker centre status from NEA, which listed Tampines North as under construction in December 2024."

## Find a place

Search all 334 places by name, dish, cuisine or address. Researched places come first, best rated at the top. A budget filter uses the typical price for each place’s comparison category, so a drink or snack can appear alongside a meal in search.

::figure kind=food view=find alt="A search box and filters over a list of 334 Tampines food places." caption="195 places come from OpenStreetMap only, and I did not check their menus. For 122 of them I found an address, and for 148 a cuisine."

## How sure this is

The model was checked before it saw the real data. I fitted it to 50 fake datasets of the same shape, drawn so that the right answer was known. Its 80% ranges held the truth about as often as they should: the test passed with p = 0.17, against a pass mark of 0.01.

The first fit to the real data failed one of its own checks, by a small margin. I ran the same model with chains twice as long, and that fit passed. Both steps, and every other change from the plan, are listed in the [pre-registration](https://github.com/yujieteo/site/blob/main/research/tampines/prereg.md).

How long a place has lasted was meant to be a second kind of backing. It turned out to say almost nothing: only 8 places have a registration date I trust. The model found no clear link between age and backing, so the ranking rests on the guides and Michelin.

The prices match official figures where they can be compared, though few dishes can be. The dishes on this page are in September 2026 dollars:

- **Carrot cake:** a median of S$3.53 across 3 dishes, against SingStat's Singapore average of S$3.93.
- **Duck rice:** S$4.58 across 2 dishes, against SingStat's S$4.81.
- **Wanton noodles:** S$6.04 across 4 dishes, against SingStat's S$4.61. That fits a list built from food guides, which favour known stalls.

## What would show this is wrong

On 15 November 2026 I froze 2,224 forecasts made by this model, each set beside a simpler forecast. The method is worth keeping only if it beats the simple one. A script checks them each month.

- **Michelin.** For each place, the chance of a Bib Gourmand or star on the next Singapore list, expected mid-2027. The simple forecast gives 85% to this year's two Bibs and about 0.2% to everyone else. The model's forecast comes from backing alone and gives Rajarani Thosai only 13%, so it will probably lose here. I did not change it after seeing that.
- **New guides.** For each outlet and place, the chance that the place is named in a new Tampines guide published by November 2027. The simple forecast is how often that outlet names the places it covers.
- **Closures.** For each place, the chance that it closes by 15 November 2027. The simple forecast is the yearly closure rate of Tampines food businesses of its kind, from company records: about 15% for hawker stalls and cafes, and 7% for restaurants.

## What this page cannot tell you

- **Whether you will like the food.** Nobody tasted anything for this page. Backing measures what food writers choose to write about, and they share tastes and copy each other.
- **About places the writers ignore.** Chains, new openings and most coffee-shop stalls are rarely in guides, so their backing is close to the average and very uncertain.
- **About sources I could not reach.** The Straits Times, CNA, 8days, TODAY, Time Out and MoneySmart were not searchable or refused access. Their guides are not in.
- **About this page's own errors.** Checks for this version found possible errors I have not yet fixed:
  - Tai Wah Pork Noodle's price is dated October 2023, but its earliest source is from July 2024.
  - Jin Kimchi Express's is dated February 2023, but its review is from December 2023.
  - Eatbook places Nanyang Dao at Century Square, not Tampines Mall.
  - Wingstop has a new Tampines Mall outlet as well as the one at Our Tampines Hub.
  - Miss Tam Chiak reported Xing Yun Kway Chap closed in 2016, and its unit is now Nasi Lemak Specialist's.

## How I built this

**Backing.**
- I collected 173 articles by 18 outlets about Tampines food or about one of the places here.
- I dropped 34 sponsored articles, which disclose payment or an invited tasting. I also left 96 one-place reviews out of the score, because a review of one place cannot say it beats another.
- That left 43 guides by 13 outlets. For each guide I recorded which places it could have named and which it did. An outlet with several guides counts once, so an outlet that repeats itself is not counted twice.
- Michelin is one more source, using its 2026 list. Its earlier lists from 2016 have no other Tampines entries.
- The model gives each source a choosiness and a weight, and each place a backing score. A place no source names is not marked down for it; it is only uncertain.

**How long places last.**
- Company records (ACRA, on data.gov.sg) give a registration date for 8 places, under the same name at the same postal code.
- For the rest, the oldest dated guide or map entry gives only a lower bound.
- I first matched records by unit number, but that found the shop's earlier tenants, such as a phone shop at a ramen restaurant's unit. Only same-name matches count.

**Standard main.**
- Each dish price is brought to September 2026 dollars with SingStat's consumer price index for hawker food, restaurants or fast food.
- A model then separates what a dish type normally costs from how dear a place is. The standard main is what the place would charge for the mix of dishes sold across all places here.

**GST in 2023.** GST was 8% in 2023, not 9%. Five 2023 prices marked `++` were corrected, each by about 0.9%.

**The plan.**
- I wrote down the method, the checks and the forecasts before collecting the data, and every change since is listed with its reason.
- The code and data are in the site's repository under `scripts/tampines` and `research/tampines`.

**Prices.** I collected 1,116 menu rows for 144 places from guides, reviews and official menus. Each row keeps its source and date.

**What I removed.** Delivery prices, since apps mark them up. Prices with no date or from before 2023. Add-ons and sides. At 108 Matcha Saro I also left out drinks and a pasta from the snack list, boxes with no clear serving count, and an older soft-serve price with unclear charges. Whole fish, steamboats and boxes with no stated portion. Casa Vostra pizzas are also left out of its per-person comparison because their serving count is not stated. At Ging Sun Ho, I left standalone dishes and a time-limited crab-roe special out of the per-person main comparison. Two promo lunch deals, and one price from another outlet of the same chain. Menu prices on MakanEast stall pages, because the menus carry no date. Two Putien prices from before it dropped service charge and GST in August 2024. I also removed repeated entries for the same dish at Yummy Sarawak Kolo Mee, Song Han Carrot Cake, Lao Lee, Teo Kee, Penang Savour and Ippon Fusion Bowl. That left 652 dated menu items. Mango Ice’s standard Mango Cotton Ice is excluded from the per-person sample because its [Tampines outlet menu](https://www.foodpanda.sg/restaurant/gci7/yang-xiao-xian-mango-ice-tampines-mall-gci7) describes it as suitable for two; the price shown here is from an earlier dine-in guide, not the delivery menu. Thirty-five drinks, mains, shared or ambiguous-serving items are shown separately and excluded from their venue’s comparison. This includes [Old World’s claypot for two to three](https://eatbook.sg/tampines-north-food/amp/), [Soi Thai Kitchen’s shared dishes](https://eatbook.sg/tampines-hawker-food/) and [Legendary Hong Kong’s sharing plates](https://eatbook.sg/legendary-hong-kong-tampines-mall/), and [JOFA’s soup upgrade](https://hungrygowhere.com/what-to-eat/food-in-tampines/).

**Dates.** A guide often repeats a price from an older review. Where a guide links to that review and the review gives the same price for the dish, the row takes the review's date. Where a page was edited after it came out, the row takes the date it came out. A guide entry with no linked review keeps the guide's date, so its price may be older than it looks. For an undated official menu, the date is when I checked it. The place-level price date is the newest item in its comparison, not the date of every item.

**Typical main.** A place needs at least three different verified mains for a typical price, or two for a shared-dish place. For a dish sold in several sizes, I use the middle size. At Ashes Burnnit, I use the single-patty burger price rather than double. The typical main is the median of those dish prices. A place with too few dishes shows its range and no typical price.

**Conversions.** A price marked `++` is multiplied by 1.199, for 10% service charge and 9% GST. A price marked `+` is multiplied by 1.09, on my assumption that it means GST only. A shared set is divided only when its source states how many people it serves. Some sources print the menu price and leave the mark out. Where another source shows that the place adds the charges, I add them to those rows too. Heartland by Enjoy adds a 2.88% service charge and no GST. Craze Kitchen adds 10% service charge and no GST. The Tree Cafe applies 9% GST and no service charge. Their listed prices include those charges.

**Places left without a comparison.** Social Bite has a quoted 4.9 and two September 2026 budget-meal prices, too few dishes for a typical price. Ah Gong Ban Mian has a quoted 3.2 but no verified price from 2023 or later. Tanyu has a quoted 4.8, but its fish is sold to share and no source states a portion. They stay on the list without a typical price. PUTIEN’s [current menu](https://www.putien.com/wp-content/uploads/2026/03/%E8%8E%86%E7%94%B0%E7%B2%BE%E9%80%89%E8%8F%9C%E5%8D%95-SG20260320_compressed.pdf) describes its medium dishes as serving approximately four to six people, so I compare those as shared dishes, not meals for one.

**Quoted ratings.** These are shown for reference and are not used in the backing score. A rating counts as Google only if a page quotes Google. I also take scores from [FooTinder](https://en.footinder.app/), which shows Google review counts and links each place to Google Maps; those rows are dated November 2026. Scores date from 2022 to 2026, and most guides gave no review count. Twelve additional scores and counts come from StationMap’s 19 October 2026 snapshots. Ashes Burnnit, Saap Saap Thai, Professor Brawn Cafe and Jin Kimchi Express have Google scores and counts quoted by STAMPEDE; Guzman y Gomez, Wok Hey, Nando’s, So Pho, Craze Kitchen, Heartland by Enjoy and Ramen Taisho have theirs quoted by Restaurant Guru, and Bari Bari Steak by MakanEast. On 14 November 2026 I added Google scores quoted by STAMPEDE for Mango Ice, Wingstop, Jinjja Kitchen, Sushiro, Cafe Bom Bom, Luckin Coffee and Genki Sushi, by MakanEast for eight hawker stalls, by Wanderlog for Soi Thai Kitchen and by Eatbook for New Deli Bakery. Their observation dates are not stated, except Eatbook's. I did not collect scores from Google Maps directly. I left out editorial scores, and directory scores whose source is unclear.

**Closed or moved.** I removed Mr. Doner Kebab, Nuodle and The Co-op, since their units now show other tenants or a closed label. The Pizza Hut at Our Tampines Hub is off the map: [Mothership reported in 2022](https://mothership.sg/2022/10/mcdonalds-our-tampines-hub/) that it had gone. Bae.gal at Century Square is also excluded: [a local closure report](https://forkinworthit.com/restaurants/bae-gal-century-square) says it ceased operations there by August 2026. Seven places have no recent proof they are open, and their rows say so. One has moved. Puffs and Peaks has two outlets, rather than having moved: the [Changkat cafe](https://www.puffsandpeaks.com/pages/find-us) remains open alongside Tampines Central.

**The map.** Researched places use their block address or their mall. The rest use OpenStreetMap positions, inside the official planning-area boundary. Where a map entry was last edited before 2022, its row says so, because the shop may have closed.

**What is missing.** This is not every stall. OpenStreetMap maps a food court as one place, so most coffee-shop stalls are absent. Nobody ate at these places for this page.

## Sources

- Places, streets and MRT: [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, ODbL, extracted 9 November 2026.
- Boundary and hawker centres: [URA Master Plan 2019 planning areas](https://data.gov.sg/datasets/d_4765db0e87b9c86336792efe8a1f7a66/view) and [NEA hawker centres](https://data.gov.sg/datasets/d_4a086da0a5553be1d89383cd90d07ecd/view), Singapore Open Data Licence.
- Company records: [ACRA Information on Corporate Entities](https://data.gov.sg/collections/2/view), Singapore Open Data Licence, snapshot of 14 October 2026.
- Prices: SingStat [Consumer Price Index](https://tablebuilder.singstat.gov.sg/table/TS/M213751) and [average retail prices of selected items](https://tablebuilder.singstat.gov.sg/table/TS/M213761), to September 2026.
- Michelin: Bib Gourmand and star lists for Singapore, 2016 to 2026, from Michelin and from news reports of each year's list.
- Guides: Eatbook, Seth Lui, Daniel Food Diary, HungryGoWhere, Miss Tam Chiak, Honeycombers, CityNomads, Women's Weekly Singapore, Wonderwall, MiddleClass, Singapore Foodie, Mothership, ieatishootipost and five independent blogs. The full list of articles is in the repository.
- Michelin 2026: [The MICHELIN Guide Singapore Bib Gourmand 2026 selection](https://guide.michelin.com/sg/en/article/michelin-guide-ceremony/singapore-bib-gourmand-2026).
- Menus and ratings: each dish links to its own source in the list above. The main guides are [Eatbook](https://eatbook.sg/tampines-food-guide/), [Seth Lui](https://sethlui.com/tampines-round-market-food-centre-singapore/) and [Daniel Food Diary](https://danielfooddiary.com/2026/06/16/tampinesroundmarket/).
