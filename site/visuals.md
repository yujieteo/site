# Visuals

## Beam diagram creator
Build a straight beam with pinned and fixed supports, point forces, couples and distributed loads, and choose its section and material. Reactions, shear force, bending moment and deflection are solved in the browser by the stiffness method, so fixed–fixed, propped and continuous (statically indeterminate) beams work, and every jump at a point load or couple is kept. The same model downloads as an MSC Nastran SOL 101 .bdf deck; results are checked against an independent exact-arithmetic Python solver.
- HTML: https://teoyujie.org/visuals/beamdiag/index.html
- Data: https://teoyujie.org/visuals/beamdiag/data.json
- Fetched: 2026-09-30
- WebMCP tools: get_metadata, get_current_beam, solve_beam, export_nastran_bdf

## Fastener Pattern CG Tracker
Place a bolt or rivet group on a canvas or in a table, with per-fastener area and shear and axial stiffness, and read its shear, axial and area centroids, polar moment J, Ixx, Iyy, Ixy and principal axes. A general 3D load applied at any point is reduced to the group and shared among the fasteners by the elastic method (direct and torsional shear, centroid neutral-axis tension). Patterns save as JSON or Markdown and the page runs offline; for preliminary sizing and hand-calculation cross-checks.
- HTML: https://teoyujie.org/visuals/fastener-cg/index.html
- Data: https://teoyujie.org/visuals/fastener-cg/data.json
- Fetched: 2026-09-30
- WebMCP tools: get_metadata, get_current_pattern, analyze_pattern, export_markdown

## Lug and pin joint calculator
Preliminary static sizing of a double-shear lug and pin joint, one male lug between two female clevis legs on a solid pin, under axial, transverse or oblique ultimate load. Every failure mode of AFFDL Stress Analysis Manual chapter 9 (lug bearing and net section, bushing, the 1.6-power oblique interaction, pin shear, pin bending with the load-shift refinement, and tangs) gets its allowable, ultimate and yield safety factors and margins, with a calculation trace by equation number, an interaction diagram and an angle sweep. Units switch per quantity, inputs save as JSON or a link, and the page checks itself against the chapter's worked example on every load.
- HTML: https://teoyujie.org/visuals/lug-joint/index.html
- Data: https://teoyujie.org/visuals/lug-joint/data.json
- Fetched: 2026-09-30
- WebMCP tools: get_metadata, get_current_joint, solve_joint, run_self_tests

## Subsidy Atlas
Find free LLM tokens, cloud credits, ride and delivery promotions, policy rebates and merchant-funded financing. Filter by category, subsidiser, offer depth and lifecycle; inspect sourced evidence and historical loss-leader lessons, with a separate speculative early-access watchlist. As of 30 September 2026; unknown cost subsidies remain unknown.
- HTML: https://teoyujie.org/visuals/subsidy-atlas/index.html
- Data: https://teoyujie.org/visuals/subsidy-atlas/data.json
- Fetched: 2026-09-30
- WebMCP tools: get_metadata, search_products, get_product

## Good food in Tampines
The 50 places food writers recommend most across Tampines Mall, Tampines 1, Century Square and Our Tampines Hub, ranked by how many independent guides name them. Filter by cuisine or mall, see a sourced calorie estimate (carbohydrate, protein, fat) for 45 of the 50 signature dishes, and read what each mall offers. Checked against the malls' own directories as of 30 September 2026.
- HTML: https://teoyujie.org/visuals/tampines-food/index.html
- Data: https://teoyujie.org/visuals/tampines-food/data.json
- Fetched: 2026-09-30
- WebMCP tools: get_metadata, query_outlets, get_outlet, get_calorie_breakdown

## TOTO ball frequency
How often each Singapore Pools TOTO ball, 1 to 49, was a winning number in the last 3 months, 6 months or 1 year, from 105 published draws up to 28 September 2026. Balls run from blue (drawn least) to red (drawn more than 10 times), with bands at more than 3, 5 and 10 draws; hover or tap for exact counts, sort by most drawn, or highlight one band. Every draw is random, so past counts do not predict future draws.
- HTML: https://teoyujie.org/visuals/toto-frequency/index.html
- Data: https://teoyujie.org/visuals/toto-frequency/data.json
- Fetched: 2026-09-30
- WebMCP tools: get_metadata, get_ball_counts, get_ball, list_draws

## The risk-neutral density is the curvature of the call-price curve
Differentiate a call price twice in its strike: times e^rT, that curvature is the market-implied probability density of the stock ending at each strike. A Dirac delta hides in the payoff's kink.
- HTML: https://teoyujie.org/visuals/breeden-litzenberger-density/index.html
- Data: https://teoyujie.org/visuals/breeden-litzenberger-density/data.json
- Fetched: 2026-09-29
- WebMCP tools: get_data, get_metadata, query

## Convexity Action Engine
Press Ctrl/⌘ K, type what you are considering, and see it in your Singapore context: screened for ruin first, then compared on reliable upside, right-tail upside, timing and opportunity cost against real alternatives. 1,374 everyday actions and 26 to avoid; how common each is comes from American Time Use Survey microdata, and every judged number is labelled as such.
- HTML: https://teoyujie.org/visuals/convexity-action-engine/index.html
- Data: https://teoyujie.org/visuals/convexity-action-engine/data.json
- Fetched: 2026-09-29
- WebMCP tools: get_metadata, search_actions, get_action, compare_actions

## Your energy dips mid-afternoon. Your inbox doesn't.
A workday timeline pairs the circadian post-lunch dip with the measured reflex of email: 70% answered within 6 seconds, 64 seconds to refocus each time, and less stress when checks drop to three a day.
- HTML: https://teoyujie.org/visuals/energy-email-productivity/index.html
- Data: https://teoyujie.org/visuals/energy-email-productivity/data.json
- Fetched: 2026-09-29
- WebMCP tools: get_data, get_metadata, query

## How ordinary activities feel, and how often people do them
Everyday activities plotted by how often people do them (ATUS 2014-2016) and how they feel doing them (Kahneman et al. 2004), with 100 common actions placed on regret, downside, upside and information axes.
- HTML: https://teoyujie.org/visuals/everyday-actions/index.html
- Data: https://teoyujie.org/visuals/everyday-actions/data.json
- Fetched: 2026-09-29
- WebMCP tools: get_data, get_metadata, query

## Singapore haze, region by region
Hourly PSI and PM2.5 for Singapore’s five regions from 1 April 2026 to 29 September 2026: no PSI above 100 until 4 September, then 15 Unhealthy days and a peak of 155 in Central.
- HTML: https://teoyujie.org/visuals/haze-singapore/index.html
- Data: https://teoyujie.org/visuals/haze-singapore/data.json
- Fetched: 2026-09-29
- WebMCP tools: get_data, get_metadata, query

## Win the turn: Protect, Fake Out and pivots
Seven turn-by-turn drills with a Delphox + Blastoise team from Justin Tang, in Regulation M-C: Protect beats Fake Out at +4 to +3, Quick Guard ties it, and a Parting Shot pivot only works when it connects.
- HTML: https://teoyujie.org/visuals/vgc-protect-fakeout-pivot-trainer/index.html
- Data: https://teoyujie.org/visuals/vgc-protect-fakeout-pivot-trainer/data.json
- Fetched: 2026-09-29
- WebMCP tools: get_data, get_metadata, query

## Airbnb cash conversion
Airbnb’s revenue has grown while operating cash flow has remained above one-third of sales in each of the latest four years.
- HTML: https://teoyujie.org/visuals/airbnb/index.html
- Data: https://teoyujie.org/visuals/airbnb/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## Arm cash conversion
Arm’s fiscal 2026 revenue reached $4.92B and operating cash flow margin rose to 31.0% after a fiscal 2025 dip.
- HTML: https://teoyujie.org/visuals/arm/index.html
- Data: https://teoyujie.org/visuals/arm/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## Find a convex 15-minute bet
A tappable 2 by 2 for choosing a low-cost experiment that can open a meaningful next step.
- HTML: https://teoyujie.org/visuals/convex-payoffs/index.html
- Data: https://teoyujie.org/visuals/convex-payoffs/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## How much of the early FPL points are repeatable?
Several of the top FPL scorers after Gameweek 5 of 2026/27 are running well above their expected goal involvement, so their points are the least likely to repeat.
- HTML: https://teoyujie.org/visuals/fpl-expected-goals/index.html
- Data: https://teoyujie.org/visuals/fpl-expected-goals/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## What Manchester City’s charges and accounts do and do not show
An evidence-first timeline separates the Premier League allegations, the distinct 2020 CAS UEFA case, and the latest filed accounts.
- HTML: https://teoyujie.org/visuals/manchester-city-finances/index.html
- Data: https://teoyujie.org/visuals/manchester-city-finances/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## Marvell cash conversion
Marvell’s revenue rebounded in fiscal 2026, while operating cash flow remained a smaller share of sales than at the prior peak.
- HTML: https://teoyujie.org/visuals/marvell/index.html
- Data: https://teoyujie.org/visuals/marvell/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## Palo Alto Networks cash conversion
Palo Alto Networks’ cash generation has stayed above 39% of revenue as its security platform scales.
- HTML: https://teoyujie.org/visuals/panw/index.html
- Data: https://teoyujie.org/visuals/panw/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## What did 2020 Singapore analyses say?
Four dated 2020 Singapore analyses paired with later public records. One is a direct conditional forecast outcome. The others show policy overlap, a related event, or a consistent trend.
- HTML: https://teoyujie.org/visuals/singapore-covid-governance-hindsight/index.html
- Data: https://teoyujie.org/visuals/singapore-covid-governance-hindsight/data.json
- Fetched: 2026-09-28
- WebMCP tools: get_data, get_metadata, query

## The computing salary premium widened
Computing-titled degrees moved from 0.6% below the yearly median salary in 2013 to 36.4% above it in 2024.
- HTML: https://teoyujie.org/visuals/graduate-employment-survey/index.html
- Data: https://teoyujie.org/visuals/graduate-employment-survey/data.json
- Fetched: 2026-09-27
- WebMCP tools: get_data, get_metadata, query

## Connection rises as appetite to shape the future falls
Older Singapore residents report stronger connection to the country but less interest in shaping its future, widening the gap from 0.09 to 1.07 points.
- HTML: https://teoyujie.org/visuals/social-values-surveydata/index.html
- Data: https://teoyujie.org/visuals/social-values-surveydata/data.json
- Fetched: 2026-09-27
- WebMCP tools: get_data, get_metadata, query

## How Singapore attractions are marketed
See which words recur in 106 descriptions of Singapore tourist attractions and where the described places are located.
- HTML: https://teoyujie.org/visuals/tourist-attractions/index.html
- Data: https://teoyujie.org/visuals/tourist-attractions/data.json
- Fetched: 2026-09-27
- WebMCP tools: get_data, get_metadata, query, get_marketing_terms
