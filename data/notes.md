---
title: "Notes"
intro: >
  A running collection of small observations and links. I append freely, then
  revisit older entries to keep the useful ideas in view.
---

<!-- Use a ## YYYY-MM-DD heading. Separate notes with blank lines. Put tags last. -->

## 2026-09-28

Expected goal involvement (xGI, expected goals plus expected assists) is a better guide to future returns than points scored, because finishing over a short window is noisy. After Gameweek 5 of 2026/27, Pascal Groß (Brighton) has seven goal involvements on 2.63 xGI, a surplus of +4.37, and João Pedro (Chelsea) has six on 2.36 (+3.64), while Igor Thiago (Brentford) has a single goal involvement on 3.29 xGI and Thierno Barry (Everton) has two on 3.65; the figures come from the per-player `expected_goal_involvements`, `expected_goals`, and `expected_assists` fields in [bootstrap-static](https://fantasy.premierleague.com/api/bootstrap-static/). Read xGI as the regression baseline: a player far above it is a sell-high or avoid candidate unless something structural changed, such as a new role, penalty duty, or a stronger side, and a player far below it is a buy-low candidate whose price and ownership have not caught up. The caveat is that five gameweeks is a small sample and xGI is itself an estimate, so treat the gap as a prompt to check minutes, role, and the next fixtures rather than as a forecast. #fpl #football #statistics #strategy #metagame

Goalkeeper value is unusually flat, so paying a premium for a famous keeper rarely buys points. After Gameweek 5 of 2026/27 the highest-scoring keeper is Tzolakis (Hull City) with 34 points at £4.7m, ahead of Raya (Arsenal) with 30 at £6.1m and Alisson (Liverpool) with 27 at £5.5m, and among keepers with at least 400 minutes Tzolakis leads on points per million (7.2) while Raya and Alisson sit near 4.9. The mechanism is visible in [bootstrap-static](https://fantasy.premierleague.com/api/bootstrap-static/): Tzolakis has made 17 saves to Raya's 9 because Hull face more shots, and saves score one point per three, so a busy keeper on a mid-table side can match a clean-sheet keeper on a strong one, and Hull have also kept three clean sheets. The practical read is to spend the minimum that buys a guaranteed starter and put the saved budget into outfield positions, while checking that the cheap keeper's team is not so poor that clean sheets and save volume both dry up. #fpl #football #statistics #strategy

Expected goals separate a team's underlying strength from its results, which is where buys and sells come from. After Gameweek 5 of 2026/27, Brighton have created the most expected goals (11.6) and scored 16, while Sunderland (9.8 xGF, 6 scored), Tottenham (5.0 xGF, 2 scored), and Coventry (4.9 xGF, 1 scored) have converted far less than their chances, and Newcastle have scored nine goals on 5.3 xGF; at the other end Arsenal have the lowest expected goals conceded (4.0) and Crystal Palace the highest (9.5). The [fixtures](https://fantasy.premierleague.com/api/fixtures/) endpoint gives the results and [bootstrap-static](https://fantasy.premierleague.com/api/bootstrap-static/) exposes per-player expected goals and expected goals conceded, so the team profile can be recomputed instead of inferred from the table. The practical use is to prefer attacking assets from sides whose expected goals are high but whose results lag, and to treat a team scoring well above expectation as a candidate for regression, while confirming the numbers over more than five matches before acting. #fpl #football #statistics #strategy

After Gameweek 5 of 2026/27, five of the fifteen highest-scoring players are defenders: James Tarkowski (EVE) 43 points at £6.1m, Jayden Bogle (LEE) 42 at £4.6m, Maxim De Cuyper (BHA) 38 at £5.0m, Joško Gvardiol (MCI) 37 at £5.7m, and Luka Vušković (BHA) 32 at £5.0m. Value is even more lopsided: among players with at least 300 minutes, Bogle returns 9.1 points per million, ahead of Pascal Groß (8.1) and De Cuyper (7.6), because defenders collect clean-sheet and bonus points at low prices. The practical read of the `bootstrap-static` data is that early-season budget is best spent on defenders from strong teams, freeing funds for one or two premiums rather than spreading money across the attack. #fpl #football #statistics #strategy

The `ep_next` field in FPL's `bootstrap-static` is not an independent forecast of the next fixture: after Gameweek 5 of 2026/27 it equals `form` for every leading player (Groß 11.2, Tarkowski 9.2, Schade 9.0, Bogle 9.0, Haaland 8.0). That makes it a persistence estimate of recent returns rather than information about the opponent, so it should be combined with the fixture difficulty in the `fixtures` endpoint before a transfer or captaincy decision. Treating `ep_next` as a model output overstates its value; the more informative fields are expected goal involvement, minutes played, and the next fixtures. #fpl #statistics #strategy

The findings above are reproducible from two public sources and can be checked claim by claim. The official FPL API at `https://fantasy.premierleague.com/api/` supplies the live `bootstrap-static`, `fixtures`, and per-player element summaries, and [vaastav/Fantasy-Premier-League](https://github.com/vaastav/Fantasy-Premier-League) stores the same data as per-season CSVs (`players_raw.csv`, `fixtures.csv`, `gws/gwN.csv`) under `data/<season>/`. A statement such as "Tarkowski scored 43 points by Gameweek 5" can be recomputed from either source, which is why the repository is cited as the durable reference rather than a screenshot or a social-media table. #fpl #football #statistics #verification

Fixture difficulty gives a transfer its horizon, because the `fixtures` endpoint stores a 1–5 difficulty rating for each side of every match. Before Gameweek 6 of 2026/27 the standout match is Liverpool versus Manchester City with both teams rated 4, while Ipswich versus Fulham is the easiest pairing at 2 and 2; across Gameweeks 6 to 8 Fulham average 2.0 difficulty and Leeds average 4.0. A player's form is only worth buying if the run ahead allows it to continue, so the same returns can justify or veto a transfer depending on the next three fixtures. #fpl #statistics #strategy

Fantasy Premier League publishes an unauthenticated REST API: `bootstrap-static` returns every player, team, game setting, and event, while `fixtures` returns the schedule with per-team difficulty. After Gameweek 5 of the 2026/27 season (28 September 2026) it lists 667 players, 20 teams, and 10,991,717 managers, with per-player expected goals and assists, ICT, form, ownership, and price-change projections. The community repository [vaastav/Fantasy-Premier-League](https://github.com/vaastav/Fantasy-Premier-League) archives the same gameweek data as CSV under `data/<season>/` (`players_raw.csv`, `fixtures.csv`, `gws/gwN.csv`) for backtesting, but its README says weekly updates stopped after 2024-25 and only milestone updates continue, so use the live API for the current gameweek and the repository for history. #fpl #football #statistics

Pascal Groß (Brighton, midfielder) is the clearest form-and-value outlier after Gameweek 5 of 2026/27: 47 total points and 11.2 form at £5.8m, with 0.52 expected goal involvements per 90, yet only 28.7% ownership. The market reacted during the gameweek, with 765,270 net transfers in and a £0.1m price rise, and the API's `ep_next` of 11.2 matches his form exactly. For a manager, the signal is a player whose output, price, and ownership are misaligned in the favourable direction: the points are already arriving, the price is still mid-range, and more than two-thirds of rivals do not own him. #fpl #football #statistics #metagame

Erling Haaland (Manchester City, forward) is a captaincy and effective-ownership asset rather than a value pick. After Gameweek 5 of 2026/27 he has 39 points, 73.8% ownership, 0.99 expected goal involvements per 90, and a £15.6m price, which is 2.5 points per million — far below the 9.1 of Jayden Bogle. The case for owning him is that captaining or matching him protects rank when he returns, not that he is efficient for his price; the budget to afford him has to come from cheap defenders and midfielders, which is exactly where the early-season points are. #fpl #football #strategy #metagame

Ownership records past transfers, not current form, and the gap can be large. After Gameweek 5 of 2026/27, Dominik Szoboszlai is owned by 32.9% of managers but has a form of 3.0, and Cole Palmer is owned by 25.8% with a form of 3.8, while low-owned players lead on form: Jayden Bogle (7.1% owned, form 9.0), Kevin Schade (11.4%, 9.0), and Tyrick Mitchell (6.0%, 7.7). Ownership still matters for price changes and for effective ownership when a popular player returns, but selecting a team by ownership alone buys the crowd's past rather than the current signal. #fpl #football #metagame #statistics

Price changes in FPL follow net transfers and are exposed before they happen. After Gameweek 5 of 2026/27, Pascal Groß rose £0.1m on 765,270 net transfers in, Kevin Schade rose £0.1m on 352,409 net in, and Maxim De Cuyper rose £0.1m on 269,468 net in, while Christos Tzolis fell £0.1m on 135,065 net out; `bootstrap-static` reports `transfers_in_event`, `transfers_out_event`, `cost_change_event`, and a `price_change_percent` and hourly rate. Since selling takes a 50% fee on profit, buying a rising value pick a day early preserves budget in a way that waiting does not. #fpl #finance #statistics #strategy

The squad rules bound every FPL decision: £100.0m buys 15 players, at most three from one club, in a 2/5/5/3 split of goalkeepers, defenders, midfielders, and forwards, and the season allows up to four extra free transfers beyond the weekly one. Chips are split across two windows (Gameweeks 2–19 and 20–38) with one wildcard, free hit, bench boost, and triple captain each, and the first-half chips expire at Gameweek 19. These constants live in the `game_settings` and `chips` fields of `bootstrap-static`, so a plan that ignores the transfer cap or the fee on resale is optimising a different game. #fpl #finance #strategy

Clean sheets are a team property, which is why cheap defenders from good teams outscore expensive attackers early in a season. After Gameweek 5 of 2026/27, Brighton have the best goal difference in the league (16 scored, 5 conceded, +11) and supply two leading defenders in Maxim De Cuyper (38 points) and Luka Vušković (32), while Manchester City are +8 and supply Joško Gvardiol (37). Because the `fixtures` endpoint carries every scoreline, team defence can be recomputed directly instead of trusted to a reputation, so the rule is to buy the cheapest starting defender from the best current defence rather than the most famous name. #fpl #football #statistics #strategy

## 2026-09-27

Agent Skills package procedural knowledge as a directory containing a SKILL.md file so a general-purpose agent can load domain expertise on demand. Anthropic's [Agent Skills guidance](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) describes three levels of progressive disclosure: the name and description of every installed skill preloaded into the system prompt, the full SKILL.md read only once a skill looks relevant, and bundled reference files or scripts read only when a specific step needs them, which keeps the context cost of a skill proportional to the task. Deterministic work belongs in bundled code the agent executes without loading into context, since sorting or parsing through token generation is slower and less repeatable than running a script. Skills should be built from observed gaps rather than anticipated ones, and installed only from trusted sources because a skill's instructions and code act with the agent's own tools. #agents #skills #design #documentation

Loading every tool definition upfront and passing each intermediate result back through the model is what makes large MCP tool sets expensive, because a long document can cross the context window twice. Anthropic's [code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) instead generates a file tree of tools so the agent reads only the definitions a task needs, cutting a worked example from roughly 150,000 tokens to 2,000, and lets results be filtered inside the execution environment before returning them. The trade is that tool discovery becomes filesystem navigation, so directory naming and a searchable tool index now carry the retrieval burden that a flat tool list used to carry. #agents #tools #tokens #design

Traditional retrieval loses the context that makes a chunk findable. Anthropic's [contextual retrieval](https://www.anthropic.com/engineering/contextual-retrieval) prepends a short chunk-specific explanation, generated from the whole document, before embedding the chunk and before building the BM25 index, reporting 49% fewer failed retrievals and 67% fewer when reranking is added. Pairing the two methods matters because embeddings miss exact identifiers such as an error code while lexical BM25 matches them, so fusing semantic and exact-match rankings covers both kinds of query. The rule generalizes past RAG: a fragment's meaning, and therefore its retrievability, depends on context that chunking stripped away, which is why each note here stays self-contained. #llms #tokens #documentation

Separate workflows from agents before building either. Anthropic's [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) defines workflows as LLMs and tools orchestrated through predefined code paths, while agents direct their own process and tool use, and it recommends finding the simplest solution first because agentic systems trade latency and cost for task performance that only flexible, model-driven decisions can justify. The reusable building blocks are an augmented LLM with retrieval, tools, and memory, then the workflow patterns of prompt chaining, routing, and parallelization, each of which should be adopted only when the task decomposes cleanly enough to benefit. Frameworks hide the prompts and responses they abstract, so starting with direct API calls keeps the failure modes legible. #agents #design #programming

The metagame is a description of what opponents are likely to bring, not a manual for what you must play. VGC guide's [Metagame](https://www.vgcguide.com/metagame) (Wolfe Glick) defines it as the popular Pokémon, combinations, and teams in your specific context — ladder, local, or a friend's group — and notes it can shift after a single strong performance, as when a tournament win raised Coalossal's usage and dragged its counters up with it. Treating it as a threat list, rather than a shopping list, is what earns the edge: you can bring something unpopular as long as you have already answered the popular threats and are not caught off-guard by a shift. #vgc #metagame #team-building #pokemon

A core is a relationship between jobs, not a fixed pair of species: VGC guide's [Cores and Modes](https://www.vgcguide.com/cores-and-modes) treats cores as the recurring jobs Pokémon do for each other, and modes as the coherent ways a team shifts into a plan, so the same core can be filled by different bodies. Reg M-C's top pairings fit this reading — Fake Out plus Intimidate glue (Rillaboom, Incineroar) enabling an offensive Mega — as a relationship that could be rebuilt with substitutes. Building around roles keeps a team adjustable: when a partner stops fitting, you can swap the body while preserving the job, and you can recognize the same core in an opponent's team even when the species differ. #vgc #team-building #positioning

In Pokémon Champions' VGC 2026 Regulation Set M-C, Mega Evolutions change what a team must answer, not just what it can use: Pikalytics' Reg M-C data is crowded with Mega forms (Salamence-Mega, Raichu-Mega-Y, Floette-Eternal-Mega, Charizard-Mega-Y, Swampert-Mega, Metagross-Mega, Froslass-Mega, Dragonite-Mega, Staraptor-Mega), while each of the highest-placed tournament teams builds exactly one Mega into a cohesive six. The practical consequence is that "can I beat their Mega?" is a team-preview question before it is a battle question, because a single Mega both concentrates a team's offense and hands the opponent a fixed target to prepare for. #vgc #pokemon #metagame #team-building

Because both players commit to a turn at the same time, the useful pre-move question is not "what will they do" but "what does each Pokémon threaten". VGC guide's [Pressure](https://www.vgcguide.com/what-is-pressure) (Aaron Traylor) defines pressure as the threat of proactive action: proactive moves advance your goal directly (damage, knockouts, speed control, status) while reactive moves (switching, Protect, healing) exist only to answer a specific threat, and predicting means committing to a line based on how your opponent will react to that pressure. In practice, before choosing, name which side holds pressure, then either take the lowest-risk proactive line or identify the exact threat you must answer; this turns a vague guess about the opponent into a decision about options you can actually trade. #vgc #positioning #strategy

How you build depends on how consolidated the format is. VGC guide's [Archetypes](https://www.vgcguide.com/archetypes) (Aaron Traylor) defines an archetype as a core that has become popular enough that players iterate on it and optimize its partners, and it frames the format as a spectrum: in a centralized metagame there are few archetypes but they are well-optimized and hard to beat, while a decentralized metagame leaves more room for new directions. Reg M-C's clustered cores around Rillaboom, Incineroar, and the Mega forms read as a consolidating format, so a new team should start by naming the current archetypes and checking whether its answer to each is a real line or just a hope. #vgc #metagame #team-building

Rillaboom and Incineroar recur across Reg M-C pairings — Rillaboom+Sneasler (24.7%), Incineroar+Rillaboom (23.7%), and Rillaboom+Salamence-Mega (23.3%) lead the two-Pokémon cores — which fits them as a backbone rather than an archetype: Fake Out and Intimidate buy the tempo an offensive partner needs, and VGC guide's [Cores and Modes](https://www.vgcguide.com/cores-and-modes) treats such glue as the relational layer that many teams share. The teambuilding consequence is to decide early which Mega your glue exists to support, then plan answers for the popular partners the opponent's glue will bring. #vgc #pokemon #team-building #metagame

Speed control wins games by denying the opponent their turn, not by moving first for its own sake. VGC guide's [Speed Control](https://www.vgcguide.com/speed-control) (Wolfe Glick) separates the modes and recommends at least two per team: Tailwind (fast or priority setters, offensive partners, struggles against Trick Room), Trick Room (slowest-first, bulky setter plus sweeper, always resolves last at -7 priority), speed drops such as Icy Wind and Electroweb (low commitment, reset when the target switches), and speed boosts (survive knockouts, but limited distribution). The practical rule is to commit to a mode during team preview, because Tailwind and Trick Room are near-perfect counters to each other, and the setter you expose is the line your opponent will target. #vgc #positioning #metagame

Team preview matters more in VGC than in 6v6 because you must also choose which two of your six to leave out. VGC guide's [Team Preview](https://www.vgcguide.com/team-preview) (Aaron Zheng) frames it as three goals: find a lead that sets the pace, decide the two in the back, and confirm the four you bring can answer every Pokémon on the opponent's six. Working backwards — eliminating Pokémon that contribute little on offense, defense, or as a combo piece, and making sure you cover any single Pokémon with "1v4" potential — turns a favorites list into an answers check. In practice, name each opponent's obvious combo and speed profile during preview, then verify your four have a line to every member before you lock in. #vgc #team-building #positioning #strategy

Usage and tournament performance answer different questions. Pikalytics' Reg M-C page ranks the most-used Pokémon and the most common pairings (Rillaboom+Sneasler on 2,171 teams at 24.7%, Incineroar+Rillaboom on 2,083 at 23.7%, Rillaboom+Salamence-Mega on 2,049 at 23.3%), while its top-performing teams are scattered outliers: a 12-0 Floette-Eternal-Mega squad sits beside a 10-1 Swampert-Mega rain team and an 8-0 Charizard-Mega-Y sun team. A high usage share estimates how often you will face a Pokémon and tells you what to prepare for; it does not estimate how well that Pokémon converts, so read threat level from playoff and top-cut conversion, and read frequency from usage. #vgc #pokemon #metagame #statistics

Readable content and executable actions should be separate layers. [MCP](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) standardizes connections to data, tools, and workflows, while [WebMCP](https://webmachinelearning.github.io/webmcp/) lets pages register JavaScript tools with structured schemas. Keep WebMCP as progressive enhancement over semantic HTML and normal HTTP because it remains a Draft Community Group Report. Expose complete goals such as `notes_search`, not every button, and give each tool a task-oriented name, strict schema, explicit side effects, and compact result. #agents #web #standards #design

An LLM-friendly site begins with stable, text-first pages and a small discovery surface that points to canonical documents instead of copying the corpus. The [MCP documentation](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) demonstrates this with a root [`llms.txt`](https://modelcontextprotocol.io/llms.txt) index. A useful retrieval ladder is `llms.txt` to topic summaries to focused Markdown notes to a bounded compiled view. Anthropic's [context engineering guidance](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) recommends retaining lightweight identifiers and retrieving detail just in time; each layer should remain useful without agent-specific JavaScript or a tool server. #llms #website #design

Context engineering is the art and science of curating what information goes into an LLM's limited attention window from a constantly evolving universe of possible data. As prompt engineering evolves into context engineering, the focus shifts from finding the right prompt words to optimizing the entire context state, including system instructions, tools, MCP, external data, and message history. LLMs have a limited attention capacity, and studies on needle-in-a-haystack benchmarks reveal context rot: as token count increases, model accuracy at recalling specific information decreases. Every new token depletes the attention budget, and models develop n² pairwise relationships across n tokens, stretching architectural limits. Good context engineering finds the smallest possible set of high-signal tokens that maximize desired outcomes rather than adding more information. Organize prompts into distinct sections using XML tags or Markdown headers to delineate background information, instructions, tool guidance, and output descriptions. Unlike discrete prompt writing, context engineering is iterative—the curation phase happens each time we decide what to pass to the model in a loop, with agents cyclically refining generated data. A useful retrieval ladder follows llms.txt to topic summaries to focused Markdown notes to a bounded compiled view, with each layer remaining useful without agent-specific JavaScript or tool servers so content stays accessible when agent-specific enhancements are unavailable. #agents #llms #tokens #design

Build an LLM-friendly site in layers: publish canonical semantic pages with stable URLs and provenance; add `llms.txt`, topic summaries, and a bounded compiled Markdown view; provide narrow retrieval with filtering and truncation; add MCP only for workflows that benefit from a standard external integration; experiment with [WebMCP](https://webmachinelearning.github.io/webmcp/) only as progressive enhancement; and add consequential actions after authorization, confirmation, logging, and task-level evaluation exist. The governing rule is to optimize first for reliable reading, then for bounded action, so the content remains useful when every agent-specific enhancement is unavailable. #agents #website #design

The `llms.txt` file is a lightweight, plain-text index that provides a discovery surface for LLMs reading a website. Unlike HTML sitemaps organized for humans, `llms.txt` lists documentation pages as a flat bullet list with titles and URLs, letting agents efficiently discover available documentation without parsing navigation menus or searching. The MCP documentation demonstrates this pattern with a root `llms.txt` at https://modelcontextprotocol.io/llms.txt that agents fetch first to understand what's available, then selectively retrieve specific pages. This creates a retrieval ladder: `llms.txt` → topic summaries → focused Markdown notes → compiled view. The benefit is reduced token consumption and faster discovery compared to browsing HTML pages designed for human presentation. #llms #website #design #documentation

MCP follows a client-server architecture where an MCP host (AI application) creates one MCP client per MCP server, each maintaining a dedicated connection. The protocol consists of two layers: a JSON-RPC 2.0 data layer defining primitives (tools, resources, prompts, notifications) and a transport layer supporting stdio (local) and Streamable HTTP (remote) with OAuth authentication. Local servers use stdio for zero-overhead process communication; remote servers use HTTP with SSE streaming. The data layer primitives — tools for actions, resources for context data, prompts for templates — are transport-agnostic, allowing the same JSON-RPC messages over any transport. Servers declare capabilities via discovery; clients access features through structured RPC calls. This design keeps the protocol focused on context exchange without dictating how LLMs use the provided context. #tools #design #standards

Every tool definition consumes context and creates another model decision. Anthropic's [tool design guidance](https://www.anthropic.com/engineering/writing-tools-for-agents) recommends distinct tools around real workflows, high-signal responses, unambiguous parameters, pagination, filtering, and actionable errors. Treat metadata, arguments, and outputs as untrusted: the [WebMCP security analysis](https://webmachinelearning.github.io/webmcp/#security-and-privacy-considerations) covers poisoned descriptions, injected output, ambiguous side effects, over-parameterization, and cross-origin leakage. Validate at execution time, cap inputs, preserve origin boundaries, confirm consequential actions, and test realistic tasks for discovery, tool choice, valid inputs, safe completion, latency, calls, and token cost. #agents #tools #security #verification

An LLM-friendly site should make canonical text easy to discover before adding agent actions. The [MCP documentation](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) advertises a compact [`llms.txt`](https://modelcontextprotocol.io/llms.txt) index; a useful retrieval ladder is `llms.txt` to topic summaries to focused source notes to a bounded compiled Markdown view. Keep each layer stable, linkable, and useful without agent-specific tooling. #llms #website #design

[MCP](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) separates connections to data, tools, and workflows. Apply the same boundary to a website: publish readable knowledge independently, then expose only the actions that benefit from a standard integration. This preserves crawlability and lets agents use the knowledge even when tool execution is unavailable. #agents #website #apis

Agent tools should represent complete user goals, not mirror every button or backend endpoint. Anthropic's [tool-design guidance](https://www.anthropic.com/engineering/writing-tools-for-agents) recommends distinct tools, unambiguous parameters, high-signal responses, pagination, filtering, and actionable errors; its [context-engineering guidance](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) supports retaining lightweight identifiers and retrieving detail only when needed. #agents #tools #tokens #design

Treat agent-facing tool descriptions, arguments, and outputs as untrusted. The [WebMCP security analysis](https://webmachinelearning.github.io/webmcp/#security-and-privacy-considerations) covers poisoned metadata, injected output, ambiguous side effects, excessive parameters, and cross-origin leakage. Validate inputs at execution time, request only necessary fields, preserve origin boundaries, and require confirmation for consequential actions; annotations are useful signals, not replacements for authorization. #agents #web #security

## 2026-09-26

[Kun Chen's interview with David Ondrej](https://www.youtube.com/watch?v=8ZgpAXe5V5w) presents `firstmate` as a coordinator for multiple `herdr` sessions and pairs agent-generated changes with a separate adversarial-review pipeline. Treat review effort as risk-dependent rather than mandatory ceremony for every prototype. #agents #programming #verification

Agent tooling should help me become a better human, not merely replace more tasks. What capabilities, judgment, or attention should remain stronger after the automation is removed? #reflection #ai

Mac agent-workstation migration: evaluate replacing `tmux` with `herdr` and Firefox with Chrome plus the Codex extension; install Codex and Claude Code; then make the `github.com/teoyujie/skills` repository usable from both tools. Build a repeatable Mac setup skill only after the manual path is understood. #todo #programming #tools

Token-reduction tools need expiry dates and periodic re-evaluation because model and harness behaviour changes quickly. Current candidates serve different layers: Ponytail minimizes code, RTK condenses command output, Headroom trims read context, QMD searches Markdown, and “Jev” still needs its name, payment model, and mechanism verified. #llms #tools #tokens

[Minami's skill-lifecycle essay](https://note.com/gtminami/n/na081914eff92?hl=en) argues that helper agents belong in independent contexts rather than being packaged as skills, while permanent project policy belongs in `AGENTS.md` or `CLAUDE.md`; frequently updated knowledge belongs behind retrieval, external state behind MCP or APIs, one-offs in prompts, and timed triggers in automation. #agents #skills #design

Add a completion checklist to the skill-refinement workflow so every required step remains visible and any omission records a reason. #todo #skills #verification

Build a design-systems skill only after defining the repeated procedure, selection boundary, and output that ordinary prompting does not already cover. #todo #skills #design

The [Claude Developer Docs](https://platform.claude.com/docs/en/home) cover the path from API basics through tools, evaluation, cost control, and operation; the [Claude Cookbook](https://platform.claude.com/cookbook) supplies executable patterns for agents, retrieval, compaction, tool use, and evaluation. Use them to study agentic coding from reference and worked-example perspectives. #programming #llms #learning

Use [GitHub's `AGENTS.md` code search](https://github.com/search?q=path%3AAGENTS.md+NOT+is%3Afork+NOT+is%3Aarchived&type=code) to sample real repository instructions, noting that GitHub requires sign-in to display code results. #agents #programming #research

[Dan Luu argues](https://danluu.com/brain-off/) that blindly relaying language-model output may become more effective as models improve but does not create durable value for the human relay. My stronger claim is that even “brain-off” use has a high skill ceiling: extracting maximum value still requires judgment, verification, and workflow design. #llms #reflection #verification

Router files are pointers: keep `AGENTS.md` as a compact map to scoped instructions, and keep skills as narrow routers to procedures or references loaded only when needed. Pointers reduce repeated context, but routing quality depends on clear metadata and non-overlapping selection boundaries. #agents #skills #tokens #design

[Minami's review of skill bloat](https://note.com/gtminami/n/na081914eff92?hl=en) cites an August 2026 analysis of 138,133 public `SKILL.md` files in which 91.8% had a detectable reusability flaw and 89.3% failed at least one specification-derived check. The practical response is to supply only task-specific procedures, judgments, and exceptions; load detailed references on demand; measure routing and outcomes; and flag obsolete skills for deletion. These public-skill rates do not directly estimate private collections. #agents #skills #research #design

[A deep dive into pstack](https://flaviocopes.com/pstack/) describes `poteto-mode` as a router that selects principles, a playbook, specialist skills, model roles, and verification steps. This supports treating routers as first-class infrastructure rather than copying every procedure into one permanent prompt. #agents #programming #design

Amend the `grilling` skill to use compaction deliberately: preserve decisions, unresolved objections, completion criteria, and the next action while discarding conversational repetition. #todo #skills #tokens

Set a token budget and a verification plan at the start of substantial agent work. Define the “brain and hands” model precisely: which agent owns judgment, which performs execution, and when the hands must escalate rather than improvise. #agents #planning #todo

[Karpathy's jobs repository](https://github.com/karpathy/jobs) turns Bureau of Labor Statistics occupation data into an interactive treemap and supports prompt-defined LLM scoring layers. Build a reusable skill and GitHub repository for similarly narrow, source-backed data visualisations, while keeping each score's assumptions and provenance visible. #todo #data-visualisation #skills

[Marcolli’s Talk on Motives and Quantum Field Theories](https://www.its.caltech.edu/~matilde/MotivesQFTtalkUNAM.pdf) Are residues of Feynman integrals periods of mixed Tate motives? Hopf algebras of renormalisation. Perturbative QFT with dimensional regularisation is the basic computation. Key steps are using Schwinger parameters and Feynman’s trick. Compare to periods and graph hypersurfaces. These are realisation of mixed Tate motives as per Bloch-Esnault-Kriemer? Regularisation replaces divergence integral by function with pole. Renormalisation enforces consistency over subgraphs. Recursive formula for Birkhoff decomposition is BPHZ. #math.ag

[https://www.its.caltech.edu/~matilde/NCGNTtalkUNAM.pdf](Noncommutative Geometry on Number Theory) Use zeta spectral triples, $X/R$ non commutative space with non commutative algebra of functions. You can do geometry like cohomology and connections, but it has thermodynamics and quantum mechanics. $\mathbb{Q}$-lattices #math.oa #noncommutative-geometry #number-theory

Reasoning effort is how much a model is allowed to think rather than how much you want it to, using Medium as a fast default for well-defined tasks and High to give it room for undefined planning and investigation. #programming #tips

Harnesses are needed to increase the reliability of a nondeterministic system. #programming

`herdr` is basically like `tmux`. #programming #llms

[Kun Chen's Workflow](https://www.youtube.com/watch?v=kPN564Kol14) The workflow by Kun is good but I like `grilling` skill to prompt me because the LLM has more tenacity and willpower to think through details than me, and I think `crewmate` is for a different style of workflow where he just free flows it. #programming #llms

Topologically $\mathbf P^1(\mathbf C)$ is a sphere with one $0$-cell and one $2$-cell, so $H^0=\mathbf Q$, $H^1=0$, and $H^2=\mathbf Q(-1)$. The Tate label records that the hyperplane class has Hodge type $(1,1)$. Mental route: point, hyperplane. Check: $1-0+1=2=\chi(S^2)$, and Poincare duality pairs degrees $0$ and $2$. #math.ag #cohomology #projective-space #mental-computation

Choose $x\in\mathbf P^1(k)$. The correspondences $[x\times\mathbf P^1]$ and $[\mathbf P^1\times x]$ are orthogonal projectors summing to the diagonal, hence $h(\mathbf P^1)=\mathbf1\oplus\mathbf1(-1)$ in Chow motives. Every Weil realization sends these to the degree-$0$ unit and degree-$2$ hyperplane class. Check: the projective bundle formula gives exactly two summands, and Betti realization recovers ranks $(1,0,1)$. #math.ag #pure-motives #cohomology #mental-computation

For $\mathbf G_m=\mathbf A^1-\{0\}$, the Gysin triangle, $\mathbf A^1$-homotopy invariance, and the rational point $1$ give $M(\mathbf G_m)=\mathbf1\oplus\mathbf1(1)[1]$ in Voevodsky's convention. Under cohomological realization the shifted Tate piece is the $d\log t$ class in $H^1(\mathbf C^\times,\mathbf Q)=\mathbf Q(-1)$. Check: $\mathbf C^\times$ retracts to one circle; compactifying by $0$ and $\infty$ gives two boundary loops with one relation. #math.ag #mixed-motives #gysin-triangle #mental-computation

A bounded prism $(A,I)$ is a $p$-complete $\delta$-ring with a Cartier-divisor ideal satisfying $p\in I+\varphi(I)A$; its Frobenius lift is $\varphi(a)=a^p+p\delta(a)$. Prismatic cohomology places Hodge--Tate, de Rham, and crystalline shadows inside one Frobenius-bearing object. Check the crystalline prism $(W(k),(p))$: reduction sees differential-form data, while the Witt-vector object retains crystalline Frobenius. #math.ag #prismatic-cohomology #p-adic-hodge-theory #mental-computation

A prismatic $F$-gauge can be remembered as **integral lattice + filtration + Frobenius**, though its actual definition is a quasicoherent object on the syntomic/prismatic stack. For $\mathbf P^1$, the projective bundle formula splits its prismatic realization into the unit gauge in degree $0$ and the Tate gauge in degree $2$. The Hodge--Tate types are $(0,0),(1,1)$ and crystalline Frobenius acts by $1,p$; over $\mathbf F_q$, their $n$th traces sum to $1+q^n$. Check: this is also the direct point count of $\mathbf P^1(\mathbf F_{q^n})$. #math.ag #prismatic-f-gauges #frobenius #mental-computation

[Pikalytics' Regulation M-C sample](https://www.pikalytics.com/) puts Rillaboom at 37.18% usage and the Rillaboom-Sneasler core on 2,171 teams, or 24.7% of its sampled field. The [Baltimore field](https://cut-explorer.stalruth.dev/2027/regional-baltimore) independently contained Rillaboom on 269 of 512 teams and Sneasler on 225; the [LabMaus homepage](https://labmaus.net/home) showed the same pair first and second, although its visible table exposed no denominator. This is a preparation signal, not one fixed archetype: practise openings that preserve positioning against Fake Out, terrain, and immediate pressure, and use [Protect](https://www.vgcguide.com/protect-in-battle) or switching to retain a useful next turn rather than answering the usage rank with one rigid lead. #vgc #pokemon #positioning #metagame

At Baltimore, Politoed appeared on 26 of 512 field teams, 8 of 155 Day 2 teams, and 3 of the [Top Cut Explorer's 13-team high-performance filter](https://cut-explorer.stalruth.dev/2027/regional-baltimore); all three of those teams paired it with Archaludon. The useful object is therefore a rain-enabled team mode, not Politoed as an isolated cause. Test how the six-Pokemon structure pivots into that mode, which board states make rain valuable, and which resources must be protected; the three-team selected sample is too small to establish a general conversion advantage. This treats the archetype boundary as purpose-dependent, following the ontological caution in [*In the Cells of the Eggplant*](https://metarationality.com/). #vgc #pokemon #pivoting #team-building #ontology

Baltimore's 13-team filter contained Gengar-Mega on 3 teams after 31 of 512 field teams used it, and Politoed on 3 after 26 of 512. Those selected shares, both 23.08%, look dramatic only after scanning many Pokemon and conditioning on a tiny successful subset. They are hypotheses for review, not estimates of causal strength or future win probability: inspect the complete team structures, separate the discovery event from later events, and ask whether the apparent lift persists before changing a team. This is the learning fundamental applied to selection bias and regression to the mean. #vgc #pokemon #statistics #learning

For $Q(x,y)=\tfrac12(ax^2+2bxy+cy^2)$, complete the square as $\tfrac c2(y+bx/c)^2+\tfrac12(a-b^2/c)x^2$. Integrating out $y$ therefore replaces $a$ by the Schur complement $a-b^2/c$. Check: $ac-b^2=c(a-b^2/c)$, so the determinant factorises consistently. This finite Gaussian marginal is the smallest exact Wilsonian elimination. #mathematics #renormalisation #mental-computation

A Wilson step splits $\phi=\phi_<+\phi_>$ and defines $e^{-S_{\Lambda/b}[\phi_<]}=\int\mathcal D\phi_>e^{-S_\Lambda[\phi_<+\phi_>]}$, then rescales the coordinates and fields. The mental verbs are eliminate, rescale, reparametrise. Check: integrating the retained modes too recovers the original partition function; approximation enters only when the exact effective action is projected onto a smaller model family. #mathematical-physics #renormalisation #effective-theory #mental-computation

If $g$ multiplies $\int d^dx\,\mathcal O$ and $\mathcal O$ has scaling dimension $\Delta$, a length rescaling by $b$ gives $g'=b^{d-\Delta}g$. Thus $d-\Delta$ positive, zero, or negative means relevant, marginal, or irrelevant. Check: in four dimensions a dimension-six operator gains $b^{-2}$ and fades toward long distances. #mathematical-physics #renormalisation #scaling #mental-computation

For one unit-charge Dirac fermion, the one-loop QED result is $\beta(e)=e^3/(12\pi^2)$. The arithmetic inside the vacuum-polarisation coefficient is $\int_0^1x(1-x)dx=1/6$. Differentiate the inverse square: $d(e^{-2})/d\log\mu=-2e^{-3}\beta(e)=-1/(6\pi^2)$. Therefore $e^{-2}(\Lambda/b)=e^{-2}(\Lambda)+\log b/(6\pi^2)$. Check: toward the infrared, $1/e^2$ rises and the screened charge falls. #physics #qft #qed #renormalisation #mental-computation

For independent centred unit-variance $X_i$, block and rescale with $Y=b^{-1/2}\sum_{i=1}^bX_i$. Additivity and homogeneity of cumulants give $\kappa_n(Y)=b^{1-n/2}\kappa_n(X)$. Variance is fixed; skewness shrinks by $b^{-1/2}$ and excess kurtosis by $b^{-1}$. Check: at $n=2$ the exponent is zero and for every $n>2$ it is negative. This is the central-limit theorem's RG mechanism when its hypotheses hold. #probability #renormalisation #central-limit-theorem #mental-computation

In a Poisson Galton--Watson approximation to early infections, extinction probability satisfies $q=e^{R(q-1)}$. For $R=1+\varepsilon$ and survival $x=1-q$, expand $\log(1-x)=-(1+\varepsilon)x$: $-x-x^2/2\simeq-x-\varepsilon x$, hence $x\simeq2\varepsilon$. Check: survival turns on continuously and positively only above $R=1$. This is a near-threshold branching-model result, not a full outbreak forecast. #probability #epidemiology #branching-processes #mental-computation

For stochastic spatial epidemics, the Doi--Peliti construction can turn a specified master equation into a response-field action that is coarse-grained with QFT methods. Reinfection with a unique absorbing state leads generically toward directed percolation, whereas permanent removal or immunisation supplies relevant memory and leads toward dynamic isotropic percolation. Check the state space before selecting a universality class: changing SIS-like recurrence to SIR-like immunity changes the effective theory. #mathematical-physics #epidemiology #qft #renormalisation #mental-computation

To transfer Wilsonian reasoning to a general model, identify the changing resolution, retained observables, eliminated variables, rescaling convention, effective coordinates, flow directions, and cross-scale validation. Check the protocol against Gaussian elimination, QED momentum shells, probability block sums, and epidemic event fields: the objects differ, but each implements elimination, rescaling, and parameter flow. Exact marginalisation does not imply exact closure after projecting back to a convenient model family. #mathematical-modelling #renormalisation #effective-theory #mental-computation

For an étale cover $(U_i\to X)$ and an abelian sheaf $\mathcal F$, a Čech $1$-cocycle is a family $g_{ij}\in\mathcal F(U_i\times_XU_j)$ with $g_{jk}-g_{ik}+g_{ij}=0$ on triple overlaps; changing local choices adds $h_j-h_i$. Thus $H^1$ is gluing data modulo changes of trivialisation. Mental check: if one global choice exists, its local restrictions make every comparison $g_{ij}=h_j-h_i$, a coboundary. #math.ag #etale-cohomology #cech-cohomology #mental-computation

When $\ell\ne\operatorname{char}k$, the étale Kummer sequence $1\to\mu_\ell\to\mathbf G_m\xrightarrow{(-)^\ell}\mathbf G_m\to1$ is exact because an invertible function acquires an $\ell$th root after an étale extension. Its long exact sequence turns root-gluing cocycles into $H^1(X,\mu_\ell)$ and gives $H^1(X,\mu_\ell)\cong\operatorname{Pic}(X)[\ell]$ when global units are $\ell$-divisible. Check: the derivative $\ell T^{\ell-1}$ is invertible at a root, exactly where $\ell\ne p$ is used. #math.ag #etale-cohomology #kummer-sequence #mental-computation

For an elliptic curve $E$ over an algebraically closed field with $\ell\ne p$, Kummer gives $H^1(E,\mu_\ell)\cong\operatorname{Pic}(E)[\ell]=\operatorname{Pic}^0(E)[\ell]=E[\ell]\cong(\mathbf Z/\ell)^2$. Passing through all $\ell^r$ and tensoring yields a two-dimensional $H^1_{\mathrm{et}}(E,\mathbf Q_\ell)$. Check: the rank is $2$, matching the two topological loops of a complex torus; Poincaré duality then forces ranks $(1,2,1)$. #math.ag #elliptic-curves #etale-cohomology #mental-computation

For $E:y^2=x^3+x+1$ over $\mathbf F_5$, the quadratic residues are $0,1,4$. At $x=0,1,2,3,4$, the right side is $1,3,1,1,4$, contributing $2,0,2,2,2$ affine points; add the point at infinity to get $\lvert E(\mathbf F_5)\rvert=9$. Therefore the Frobenius trace is $a_5=5+1-9=-3$. Check: $|a_5|=3\le2\sqrt5$. #math.ag #elliptic-curves #finite-fields #mental-computation

For $E:y^2=x^3+x+1$ over $\mathbf F_5$, Frobenius on $H^1_{\mathrm{et}}$ has characteristic polynomial $T^2+3T+5$. If $s_n=\alpha^n+\beta^n$, then $s_0=2$, $s_1=-3$, and $s_n=-3s_{n-1}-5s_{n-2}$; hence $s_2=-1$, $s_3=18$, and $\lvert E(\mathbf F_{25})\rvert=27$, $\lvert E(\mathbf F_{125})\rvert=108$. Check: $\alpha\beta=5$ and the recurrence is the characteristic polynomial applied to each eigenvalue. #math.ag #elliptic-curves #frobenius #mental-computation

For smooth projective $X/\mathbf F_q$, the Grothendieck--Lefschetz formula says $\lvert X(\mathbf F_{q^n})\rvert=\sum_i(-1)^i\operatorname{Tr}(F^n\mid H^i_{\mathrm{et}}(\bar X,\mathbf Q_\ell))$. Exponentiating the trace identity gives $Z(X,t)=\prod_i\det(1-tF\mid H^i)^{(-1)^{i+1}}$. Check: $-\log\det(1-tF)=\sum_{n\ge1}\operatorname{Tr}(F^n)t^n/n$, so differentiating recovers every point count. #math.ag #weil-conjectures #frobenius #etale-cohomology #mental-computation

The Weil-conjecture proof compresses into three cohomological mechanisms: finite-dimensional étale cohomology plus the trace formula gives rationality; Poincaré duality pairing $H^i\times H^{2d-i}\to\mathbf Q_\ell(-d)$ gives the functional equation; Deligne purity gives $|\iota(\alpha)|=q^{i/2}$ for every Frobenius eigenvalue on $H^i$. Check: paired eigenvalues multiply to $q^d$, and purity makes their magnitudes multiply to $q^d$. The noncompressible proof gap is Deligne's Lefschetz-pencil, vanishing-cycle, monodromy, and main-lemma argument. #math.ag #weil-conjectures #deligne #mental-computation

The corpus contains many open investigations but no linked outcome records. Without observations, additional TODOs increase the option set without improving later choices; the avoidable regret is accumulating exploration debt rather than learning. #regret #learning #feedback

By 27 September 2026, spend ten minutes identifying what “Wildcard” means, its completion condition, and its next physical action; if it no longer matters, delete the commitment before its 8 October deadline. #todo #easy-win #act-now #exp-f19d0e3

Before the next strength session, place a full water bottle and earphones in the gym bag and schedule two 30-minute sessions for the following seven days. After the second session, record whether both occurred and whether the plan should be kept, reduced, or changed. #todo #experiment #exercise #exp-3a8d6c2

Give $S^1$ one vertex and one oriented edge. Both cellular chain groups are $\mathbf C$, and the boundary is zero because the edge starts and ends at the same vertex. Hence $H^0(S^1,\mathbf C)=\mathbf C$ and $H^1(S^1,\mathbf C)=\mathbf C$. Mental check: the alternating dimension is $1-1=0=\chi(S^1)$; Poincaré duality also pairs the two one-dimensional groups. This is the smallest model for cohomology as **closed data modulo exact data**. #math.at #cohomology #mental-computation

For a compact connected genus-$g$ Riemann surface $X$, remember one $0$-cell, $2g$ $1$-cells, and one $2$-cell. The cellular boundary maps vanish after abelianisation, so $(\dim H^0,\dim H^1,\dim H^2)=(1,2g,1)$. Check twice: $1-2g+1=2-2g=\chi(X)$, and Poincaré duality pairs degrees $0$ and $2$ while the middle degree pairs with itself. Thus knowing the genus computes the ordinary complex cohomology. #math.ag #cohomology #riemann-surfaces #mental-computation

Compactifying the level-one modular curve gives $X(1)=\mathrm{SL}_2(\mathbf Z)\backslash(\mathfrak H\cup\{\infty\})\cong\mathbf P^1$, hence genus $0$. The surface computation immediately gives $H^0(X(1),\mathbf C)=\mathbf C$, $H^1(X(1),\mathbf C)=0$, and $H^2(X(1),\mathbf C)=\mathbf C$. Check: the Betti numbers are those of a sphere and their alternating sum is $2$. This computes the coarse compactified curve; the open curve, orbifold quotient, and nonconstant local systems retain extra information. #math.nt #math.ag #shimura-varieties #modular-curves #mental-computation

The first level-one modular-curve coefficient calculation that sees a cusp form uses $\mathcal V_{10}=\operatorname{Sym}^{10}\mathbf C^2$. Eichler--Shimura gives $H^1_!(Y(1),\mathcal V_{10})\cong S_{12}\oplus\overline{S_{12}}$. Since $S_{12}=\mathbf C\Delta$, the answer is $\mathbf C\Delta\oplus\mathbf C\overline\Delta$ and has dimension $2$. Mental route: coefficient exponent $10$ means weight $12$; the unique cusp form supplies one holomorphic class; complex conjugation supplies the antiholomorphic class. Check: the two summands have Hodge types $(11,0)$ and $(0,11)$ and are exchanged by conjugation. #math.nt #automorphic-forms #shimura-varieties #cohomology #mental-computation

For a compact Shimura variety $\mathrm{Sh}\_K(G,X)$ with algebraic coefficient system $\mathcal V$, Matsushima's formula turns cohomology into a filter on automorphic representations: $H^i\cong\bigoplus\_\pi m(\pi)\,\pi\_f^K\otimes H^i(\mathfrak g,K\_\infty;\pi\_\infty\otimes V)$. Mentally evaluate each $\pi$ by three gates: it occurs automorphically, it has $K$-fixed finite vectors, and its archimedean relative Lie-algebra cohomology is nonzero in degree $i$. Dimensions multiply inside a summand and add across summands. Check: at a fixed level every surviving factor is finite-dimensional, and the modular-curve Eichler--Shimura decomposition is the rank-one model. #math.nt #automorphic-representations #shimura-varieties #cohomology #mental-computation

For a noncompact Shimura variety, ordinary cohomology contains boundary contributions, so the clean Matsushima-shaped object is instead the intersection cohomology of the Baily--Borel compactification. Zucker's theorem identifies it with $L^2$ cohomology; Borel--Casselman then gives the same automorphic filter $IH^\*\cong\bigoplus\_\pi m(\pi)\,\pi\_f^K\otimes H^\*(\mathfrak g,K\_\infty;\pi\_\infty)$. Check the choice of theory before calculating: compact case, ordinary cohomology; noncompact pure interior case, intersection/$L^2$ cohomology; full ordinary cohomology, add Eisenstein and boundary terms. #math.nt #intersection-cohomology #shimura-varieties #automorphic-representations #mental-computation

## 2026-09-25

For the smooth irrational rotation algebra, write $W_{m,n}=U^mV^n$ with $VU=e^{2\pi i\theta}UV$. Moving $U^r$ left through $V^n$ gives the mental multiplication rule $W_{m,n}W_{r,s}=e^{2\pi i\theta nr}W_{m+r,n+s}$. Check: if either $n=0$ or $r=0$, nothing crosses and the phase disappears. This single crossing rule generates every Fourier-monomial product. #math.oa #noncommutative-geometry #mental-computation

The canonical trace on the irrational rotation algebra is the noncommutative shadow of invariant transverse Lebesgue measure: $\tau(W_{m,n})$ is $1$ at $(m,n)=(0,0)$ and $0$ otherwise. Therefore $\tau(W_pW_q)$ vanishes unless $p+q=0$; when the exponents cancel, retain only the crossing phase. The check is geometric: integration kills every nonconstant Fourier mode. #math.oa #measure-theory #foliations #mental-computation

The two torus derivations are mentally diagonal on Fourier modes: $\delta_1(W_{m,n})=2\pi i mW_{m,n}$ and $\delta_2(W_{m,n})=2\pi i nW_{m,n}$. Thus differentiation becomes multiplication by the exponent vector. The Leibniz rule is checked by exponent addition: the weight of $W_pW_q$ is $p+q$, exactly the sum of the two differentiated terms. #math.oa #noncommutative-geometry #mental-computation

Normalize the fundamental area cocycle by $\Phi(a_0,a_1,a_2)=(2\pi i)^{-2}\tau\!\left(a_0(\delta_1a_1\delta_2a_2-\delta_2a_1\delta_1a_2)\right)$. For Fourier modes $W_p,W_q,W_r$, it is zero unless $p+q+r=0$; otherwise it is the product's crossing phase times $\det(q,r)$. Remember: **closure supplies the trace, oriented area supplies the calculus**. Swapping $q,r$ reverses the determinant, providing the sign check. #math.oa #cyclic-cohomology #mental-computation

Let $\lambda=e^{2\pi i\theta}$. For $a_0=U$, $a_1=V$, $a_2=U^{-1}V^{-1}$, the exponent triangle closes and $\det((0,1),(-1,-1))=1$. The crossing rule gives $UVU^{-1}V^{-1}=\lambda^{-1}$, so the normalized area cocycle is $\Phi(U,V,U^{-1}V^{-1})=e^{-2\pi i\theta}$. The trace sees the same surviving scalar; the cocycle additionally records its unit oriented area. #math.oa #foliations #cyclic-cohomology #mental-computation

[Lauren Tan's account of shipping 2,500 production pull requests with coding agents](https://x.com/poteto/status/2102050467505430555) reinforces my conclusion that effective use of language-model tools is becoming a practical skill worth deliberately learning and continually updating. The reported throughput is self-described rather than an independent productivity study; the useful lesson is the combination of agents, verification, and constraints, not PR count alone. #programming #learning #agents #verification

[Skills.sh](https://www.skills.sh/) is a directory for discovering reusable agent skills, while [Agent Skills](https://agentskills.io/home) documents the open folder format built around `SKILL.md`. Together they make procedural knowledge easier to discover, version, and reuse across compatible agents. #agents #skills #tools

[WebMCP](https://webmachinelearning.github.io/webmcp/) is a draft Community Group report for exposing web-application functions as JavaScript tools that agents can invoke. Supporting it may make a website more directly operable by agents, but the proposal is not a W3C Standard and its security and privacy risks need explicit treatment. #agents #web #standards #security

[Treg](https://treg.to/) presents itself as an “OpenRouter for agent tools”: one credential and a metered catalog spanning many data and action providers. Evaluate its provider coverage, reliability measurements, pricing, credential boundary, and failure modes before depending on the aggregation layer. #agents #tools #apis

[Von Neumann Algebra Automorphisms and Time-Thermodynamics Relation in General Covariant Quantum Theories](https://arxiv.org/abs/gr-qc/9406019) proposes the thermal-time hypothesis: a faithful state selects a modular one-parameter automorphism group as physical time. Section 2 distinguishes this state-dependent flow from the state-independent homomorphism $\mathbb{R}\to\operatorname{Out}(M)$ supplied by Connes's cocycle Radon--Nikodym theorem, so “natural time” is canonical only modulo inner automorphisms. #math.oa #mathematical-physics #modular-theory

[Some Entanglement Properties of Quantum Field Theory](https://link.aps.org/accepted/10.1103/RevModPhys.90.045003) makes modular flow computational in finite dimensions: Section IV.B, equation (IV.35), gives $\sigma_s(a)=\rho^{is}a\rho^{-is}$. Thus for $\rho=\operatorname{diag}(p,q)$, diagonal observables are fixed while $E_{12}$ acquires the phase $(p/q)^{is}$; this is the smallest example in which noncommutativity produces nontrivial evolution. #math.oa #mathematical-physics #modular-theory

[Structure of von Neumann Algebras of Type III](https://www.imsc.res.in/~sunder/mtnotes.pdf), Masamichi Takesaki's master-class notes, computes on pp. 31--33 the modular automorphisms of weighted $2\times2$ and $3\times3$ matrix algebras by diagonal conjugation. For the $2\times2$ weight ratio $0<\lambda<1$, the flow has period $-2\pi/\log\lambda$; infinite tensor products of these elementary blocks lead to type $\mathrm{III}_\lambda$ factors. #math.oa #operator-algebras #modular-theory

[Basic Noncommutative Geometry](https://www.math.uwo.ca/faculty/khalkhali/files/BNCG_1sted.pdf) gives the simplest foliation computation in Examples 2.1.5 and 2.5.9: an irrational-slope Kronecker foliation of $\mathbb{T}^2$ has dense leaves, its transverse holonomy groupoid is $\mathbb{T}\rtimes_\theta\mathbb{Z}$, and convolution completion gives $C(\mathbb{T})\rtimes_\theta\mathbb{Z}=A_\theta$. On Fourier generators this is the concrete relation $VU=e^{2\pi i\theta}UV$, replacing the pathological classical leaf quotient by a noncommutative algebra. #math.oa #noncommutative-geometry #foliations

[Noncommutative Geometry](https://alainconnes.org/wp-content/uploads/book94bigpdf.pdf), Chapter I, Section 4, separates two foliation regimes. The irrational Kronecker foliation has a transverse invariant measure and yields the hyperfinite type $\mathrm{II}_\infty$ factor, whose tracial modular flow is trivial; for type III foliation algebras, Propositions 8--9 on pp. 62--63 identify the flow of weights with dilation of transverse positive densities. This is the geometric bridge from holonomy's failure to preserve transverse volume to a canonical outer time evolution. #math.oa #noncommutative-geometry #foliations #modular-theory

[Talk on deformation quantization](https://www.youtube.com/watch?v=Lvel8eIHl9I): replace infinite-dimensional index theory on the loop space $LX$ with a higher notion of index theory on $X$. This may connect the deformation-quantisation perspective to the [earlier note on gauge theories and differential cohomology](notes.html#2026-09-22). #mathematics #physics

Kontsevich proved that every finite-dimensional Poisson manifold admits a formal deformation quantisation. Add a link to a precise statement and identify the hypotheses used. #mathematics #todo

Simons describes signature formulas involving Pontryagin classes as one route into differential cohomology. Separately, the Chern–Gauss–Bonnet and Poincaré–Hopf theorems relate the Euler characteristic to curvature and to indices of zeros of a vector field. Do not conflate these formulas. #mathematics #differential-cohomology #topology

Find microblogging or status-update implementations suitable for this website. #todo #website

Stallman's [Anti-Glossary](https://stallman.org/antiglossary.html) argues that some familiar terms embed assumptions worth making explicit. Treat it as an author's case for particular wording, not as a neutral dictionary. #language #rhetoric

The [NIST definition of cloud computing](https://csrc.nist.gov/pubs/sp/800/145/final) specifies five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. Investigate how the definition supports comparison, procurement, and security analysis rather than treating it as a claim about every system called “cloud.” #computing #language #todo

Calling software or tokens “consumed” can obscure what changes: software is usually copied or used, while compute, energy, money, or a token quota is spent. Likewise, “content” can flatten distinctions among different kinds of work. Prefer a concrete verb or noun when the distinction matters; these terms are not inherently wrong in every context. #computing #language

[Periods](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kontzagi.pdf): Kontsevich and Zagier define periods as complex numbers whose real and imaginary parts are absolutely convergent integrals of rational functions with rational coefficients over domains given by polynomial inequalities with rational coefficients. They form a countable algebra under identities generated conjecturally by additivity, change of variables, and Stokes' theorem. Connections include Picard–Fuchs equations, $L$-values, and the Deligne and Beilinson conjectures; exponential periods provide a broader class. #math.ag #number-theory

[Fourier–Mukai transforms](https://www.math.uni-bonn.de/people/huybrech/Garda2.pdf) express equivalences between derived categories and recover Serre duality through natural dualities of Hom or Ext groups. A Serre functor records these dualities but may not capture all noncommutative information. Investigate whether Hochschild homology supplies the missing invariant and how that compares with the radical of the trace pairing. #math.ag #category-theory #todo

Find the reference on using Jev to reduce language-model token usage; verify the tool's name and the claimed mechanism. #todo #llms #tools

Breakfast: steamed egg with porridge, 100plus 320 ml. #nutrition

Lunch: brown rice with meatballs, cheese tofu and eggplant with curry gravy. Hot Milo small cup. #nutrition

Dinner: sliced fish porridge with egg and Meiji protein milk. #nutrition

In what precise setting are integral homomorphisms analogous to covering maps? Identify what “integral” means here and which properties correspond. #mathematics #todo

Explain how the Riesz representation theorem can produce Lebesgue measure from a positive linear functional, and distinguish this route from the usual outer-measure construction. #mathematics #todo #measure-theory

Study how memory mechanisms and susceptibility to false premises affect language-model behaviour. “Psychology” is an analogy unless the claim concerns human cognition. #llms #cognition #todo

I expected ordinary use of language models to be enough, but widespread product-building has made effective use feel closer to a basic practical skill. The ceiling remains high, especially when outputs need strong verification. This is an assessment of current practice, not evidence that everyone must adopt the tools. #reflection #programming #llms #verification

Karpathy's example suggests that deployment and operations can dominate the effort even in language-model-assisted projects. Investigate DeepWiki and Gitingest as ways to expose repository documentation to models; one example does not establish that DevOps is always the hardest part. #programming #llms #devops #documentation

[Talk on software fundamentals](https://youtu.be/v4F1gFy-hqg?si=bOKVC590lNNFrpAl): possible skill patterns include adversarial review and terminology checks. Short feedback loops constrain iteration speed, while excessive scope and verbosity slow verification. Testing remains a central difficulty. #programming #skills #testing #feedback

AnyDoc converts PDFs. Herder: terminal agents. OmniRoute: model routing. Raw: Obsidian RAG. #tools #agents #llms

A possible automation hierarchy is domain → task → skill → automation. Start from the desired output, keep logs, use structured metadata such as YAML front matter when it helps discovery, and give each skill a coherent responsibility. The [earlier agents-at-scale note](notes.html#2026-09-22) offers a complementary emphasis on verification and one supported path. #agents #skills #automation

Prompts influence behaviour but do not enforce it; tool permissions and other controls can impose constraints. Prefer enforceable boundaries for high-consequence actions, and design outputs so a person can verify them. #agents #design #verification

Language-model evaluations can use another model as a judge, but the judge itself needs calibration against human-labelled examples. Match models to tasks and route work according to measured performance, cost, and risk. #agents #evals #models

Specify the permitted degree of freedom. Use deterministic code for rules that can be stated completely; use a model where contextual judgment is useful, with explicit completion criteria and verification. #agents #automation #programming

Negative prompts define exclusions but may not communicate the desired result. For delegated work, specify the output; for teaching, consider presenting the problem and eliciting the learner's method before giving an answer. #prompts #management #teaching

Verification should cover every material claim or action when feasible. Design outputs to be checkable rather than merely plausible, while stating any residual uncertainty. #verification #agents

Claude Code and computer-use systems are two interfaces for agent execution; compare them by task coverage, controllability, and verifiability. #tools #agents

## 2026-09-24

Identify terms in mathematics, critical thinking, economics, and daily life that are ambiguous, misleading, or that silently presuppose a disputed viewpoint. Analyse the context and consequence instead of maintaining a context-free blacklist. #todo #language #rhetoric

In [Did You Say “Intellectual Property”? It's a Seductive Mirage](https://www.gnu.org/philosophy/not-ipr.html), Stallman argues that grouping copyright, patent, and trademark law under one label encourages overgeneralisation. His [Words to Avoid (or Use with Care)](https://www.gnu.org/philosophy/words-to-avoid.html#piracy) similarly argues that word choice can import contested assumptions. These are advocacy essays: use their questions to separate legal regimes and surface framing, without treating Stallman's preferred vocabulary as neutral by default. #language #law #rhetoric #read

Complete the item labelled “Wildcard” by 8 October 2026; add enough context to make the task actionable. #todo

Review the [Databricks research publications](https://www.databricks.com/research#publications) and record which papers are relevant and why. #todo #programming #learning

Find Alice's (“woog”) spreadsheet rating interpretability papers, verify its provenance, and save a durable link. #todo #interpretability #learning

Learning projects: build a production-ready full-stack web application, a DevOps Docker container, a basic compiler, and a real-world automation. #todo #programming #learning

Be firm and express yourself clearly, even about small things. #learning #psychology #feedback

Design a GitHub repository structure for reusable scripts, templates, infrastructure, bibliographies, snippets, playgrounds, notes, coding challenges, and curated resources. Decide which materials benefit from separate repositories rather than assuming each category needs one. Candidate reusable components include asynchronous protocols, SQLite patterns, a `pandas` cleaning pipeline, `matplotlib` defaults, multiprocessing templates, a subprocess wrapper, `grep` one-liners, GitHub Actions workflows, and a YAML configuration uploader. #todo #programming #knowledge-management

[Maxwell's equations](https://ncatlab.org/nlab/show/Maxwell's+equations) can be formulated using $U(1)$ differential cohomology. Local vector potentials differ by exact forms on overlaps; their compatibility data form a Čech cocycle, and gauge changes act by coboundaries. The first Chern class records quantised magnetic flux, while the Hodge star depends on the spacetime metric and relates the field strength to its dual. This develops the [earlier note on cocycles, connections, and gauge transformations](notes.html#2026-09-22). #mathematics #physics #differential-cohomology

Research question: is cerebral folate deficiency associated with autistic features in a defined subgroup, and what evidence distinguishes association, a treatable comorbidity, and causation? Do not generalise a subgroup finding to autism as a whole. #health #todo

Personal strength-training plan: choose sustainable exercises, include a leg press, and aim for two 30-minute sessions each week. During high-stress periods, reduce volume if needed while keeping effort appropriate and technique safe. #exercise

Personal Precor elliptical settings: rate 110, incline 10, resistance 8. The machine estimates about 160 calories in 15 minutes; treat this as an estimate, not a measured expenditure. Bring a full water bottle and earphones. #exercise

Personal Concept2 rowing cue: initiate the drive with the legs and target 20–22 strokes per minute. “70% leg power” is a coaching heuristic, not a directly measured ratio. #exercise

Evaluate tldraw as a visual aid for presentations. #tools #todo

Fluid partial differential equations: study convex integration and the work of De Lellis and Székelyhidi. #mathematics #physics

Exercise: prioritise sustainable training volume and evaluate progress over roughly 1,000 days rather than overreacting to individual sessions. #exercise

## 2026-09-22

[The append-and-review note](https://karpathy.bearblog.dev/the-append-and-review-note/): a deliberately simple, LRU-like text system. #notes

[Jony Ive on focus](https://www.youtube.com/watch?v=2oksetv3i90): focus is about sacrifice. #focus

[Agents at scale](https://x.com/poteto/status/2102050467505430555?s=46) recommends teaching agents through skills, verifying work with command-line tools and traces, materialising memory, using static analysis, and maintaining one well-supported path. #ai #tools

[Claude Code common workflows](https://code.claude.com/docs/en/common-workflows): examples of agent workflows from the product's documentation. #ai #tools

[Alisa Wuffles](https://alisawuffles.github.io/): exploring mathematics with language models. #ai #mathematics

Ben Kuhn's [Abyss](https://benkuhn.net/abyss/) reflects on learning through difficult technical material. #learning

[more-itertools](https://github.com/more-itertools/more-itertools): Python iteration tools with strong tests and low complexity. #programming #tools

Google Testing Blog's description of the [CRAP metric](https://testing.googleblog.com/2011/02/this-code-is-crap.html?m=1): a heuristic combining cyclomatic complexity with test coverage. #programming #testing

Trigonometric functions can be understood through the representations and characters of $U(1)$; this is a useful viewpoint, not an exhaustive definition of trigonometry. #mathematics #representation-theory

For suitable sheaves on a good cover, Čech cohomology computes sheaf cohomology because the nonempty finite intersections are contractible and acyclic for the relevant sheaf. State the sheaf hypotheses when using this shortcut. #mathematics #cohomology

On a Hilbert space with a fixed orthonormal basis, a bounded diagonal operator is compact exactly when its diagonal entries tend to zero. [Discussion](https://math.stackexchange.com/questions/173073/why-are-compact-operators-small) #mathematics #functional-analysis

Jack Morava's [Cosmic Galois groups](https://arxiv.org/pdf/1108.4627): connections among homotopy theory, number theory, and mathematical physics. #mathematics #physics

Cohomology classes can be viewed as homotopy classes of maps into deloopings such as $K(A,n)$. Principal bundles are cocycles, connections transport fibres along paths, and gauge transformations are their equivalences. See [cohomology](https://ncatlab.org/nlab/show/cohomology), [principal bundles](https://ncatlab.org/nlab/show/principal+bundle), [connections](https://ncatlab.org/nlab/show/connection+on+a+bundle), and [gauge transformations](https://ncatlab.org/nlab/show/gauge+transformation). #mathematics #physics

[Descent](https://ncatlab.org/nlab/show/descent): when compatible local data comes from unique global data. An [equivariant structure](https://ncatlab.org/nlab/show/equivariant+structure) is descent to an action groupoid. #mathematics

The Yoneda viewpoint treats a space through all its probes and restriction maps. See [motivation for sheaves and higher stacks](https://ncatlab.org/nlab/show/motivation+for+sheaves%2C+cohomology+and+higher+stacks). #mathematics

Fermionic antisymmetry is encoded by anticommuting geometry: repeated states vanish, reflecting the Pauli exclusion principle. #mathematics #physics

Independence, Gaussian structure, or absence of interactions often makes a system decomposable into parallel or free components; the precise decomposition depends on the model. #physics

[Gauge theories](https://ncatlab.org/nlab/show/gauge+theory): field configurations as differential-cohomology cocycles, with vector bundles and connections as basic examples. #mathematics #physics

[Deformation quantisation](https://ncatlab.org/nlab/show/deformation+quantization): families of noncommutative algebras parametrised by admissible values of Planck's constant. #mathematics #physics

The [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis#ForNoncompactCobordisms): framed cobordism is freely generated by a fully dualisable object. Noncompact variants lead to Calabi–Yau objects, and a closed TQFT is determined by its value on circles. A [conformal field theory](https://ncatlab.org/nlab/show/conformal+field+theory) is a functor on conformal cobordisms. #mathematics #physics

A [mutex](https://en.wikipedia.org/wiki/Lock_(computer_science)) prevents concurrent threads from modifying shared state at the same time. #programming #systems

[Latency numbers every programmer should know](https://github.com/donnemartin/system-design-primer#latency-numbers-every-programmer-should-know) offers order-of-magnitude heuristics: some writes cost more than comparable reads, locality matters, compression may be cheap relative to I/O, queues saturate, and remote calls add latency and failure modes. Recheck the numbers for current hardware and the actual workload. #programming #systems

John Boyd's [Destruction and Creation](https://cdn.mises.org/destruction_and_creation_by_john_r_boyd.pdf) proposes moving from observed mismatches through decomposition toward novel synthesis. His claim that success under uncertainty depends on superior orientation is a strategic thesis, not a general law. #strategy

Music: [Ive — Sacrifice](https://youtu.be/2oksetv3i90?si=mNqtLyoU4S_rkUpV). #music

Video: [Advanced napkin math](https://www.youtube.com/watch?v=IxkSlnrRFqc). #mathematics #video

## 2025-11-06

For language-model-assisted coding, plain-text files and comments can provide useful context when they are accurate and maintained. #ai #programming

Language-model-assisted coding may increase the value of comments, but comment quality matters more than quantity: explain intent and constraints without duplicating code or preserving obsolete claims. #ai #programming #documentation

Use this list of [open-source equivalents to Google-internal tools](https://github.com/jhuangtw/xg2xg?tab=readme-ov-file) as a discovery aid; verify how closely each project actually corresponds. #programming #tools

Use this list of [open-source equivalents to Facebook-internal tools](https://github.com/greko6/xfb2xfb?tab=readme-ov-file) as a discovery aid; verify how closely each project actually corresponds. #programming #tools

Writing assembly by hand: follow [Gaultier's guide](https://gaultier.github.io/blog/x11_x64.html). #computing #programming

Management calendars are shaped by other people's coordination needs, so unscheduled time tends to attract meetings. Protecting focus time may therefore require explicit boundaries. #management

An abstraction is leaky when users must understand details it was meant to hide. Orthogonal responsibilities can reduce leakage, although no abstraction hides every underlying constraint. #programming #design

Each dependency adds an interface through which underlying constraints can leak, so dependency count is one risk factor rather than a complete measure of abstraction quality. #programming #design

Prefer a small set of composable ideas and code that is easy to modify; brevity is valuable only when it preserves clarity and required behaviour. #programming #design

Evidence for a useful abstraction includes focused tests and an interface whose behaviour can be reasoned about without unnecessary implementation detail. #programming #testing #design

Some learned behaviours may reflect family incentives or responses to dysfunction rather than stable preferences. Examine which behaviours still serve one's values without assuming a single origin for personality. #reflection

Differences in priorities, information, or constraints can look like differences in intelligence. Check those explanations before judging another person's ability. #reflection

For a ten-year goal, asking what a six-month attempt would require can expose assumptions and accelerate learning. The compressed deadline may be infeasible, but the exercise can reveal a faster path without implying that slower plans are complacent. #strategy

Reflection prompt: when withdrawing because others might be happier if left alone, distinguish evidence about their preferences from self-blame or mind-reading. #reflection

Biology as a design reference: biological systems can be decentralised, energy-efficient, familiar, and unlike rectilinear industrial forms. They are not inherently non-toxic, efficient, or benign; evaluate those properties in each case. #biology #technology #design

Jim Keller's three-paradigm heuristic: a CPU supports general control flow where little is fixed in advance; a GPU exploits more predictable parallel timing while memory access may vary; a DSP targets computations where control and access patterns are largely known and the data varies. This is an explanatory simplification, not a complete taxonomy of processors. #computing

Moving data consumes energy, making locality important. Instruction sets and compilers can shift some complexity from runtime to compilation, but whether they are simpler than CUDA or PyTorch depends on the layer and workload. Investigate how this trade-off extends to energy-intensive chip interconnects. #computing #systems #todo

Hypothesis about representative democracy: voters may identify with a candidate's aims even when particular policies lack majority support, and fear of worse outcomes can motivate strategic participation or support for one state actor against another. Test this account against alternatives such as party identity, retrospective voting, and institutional constraints. #politics #todo

In governments and other large organisations, compliance with the process can displace the substantive goal—for example, completing the prescribed steps for a bridge rather than optimising whether and how it is built. Process also supplies accountability and coordination, so the question is when it becomes an end in itself. #organizations #politics

Jim Keller presents deliberate disruption as a way to prevent process from becoming detached from the goal. The trade-off is that persistent instability can also damage coordination, learning, and psychological safety. #organizations #strategy

Quotation to source: “I would rather lose than sell out. If you lie to the world you lie to yourself and one day you can no longer tell what’s true or not. I would live under a bridge and eat out of dumpsters if I got to know the truth.” The underlying claim is that repeated outward dishonesty can impair self-knowledge; verify the speaker and context before relying on it. #reflection #todo

Sutton's “Bitter Lesson” argues that general methods leveraging increasing computation have historically outperformed approaches built around human domain knowledge; he highlights search and learning as especially scalable. This is a historical thesis and research heuristic, not proof that domain knowledge never helps. #ai #learning

The 100-person marshmallow scenario is a coordination game: universal restraint yields two marshmallows per person, while one defection gives the defector one and everyone else none. Its assumptions make it useful for thinking about trust and collective action, not as an empirical claim about groups. #coordination #game-theory

Test understanding through predictions and building. When someone challenges a world model, ask which observations it misses. A proposal to move beyond a rationalist framework is easier to assess when it can first state that framework's strongest arguments fairly. #rationality #reflection

Before optimising for speed, sketch the direction and decide what evidence would justify changing it. Exploration may still be the right first move when the destination is unclear. #reflection #strategy

Hypothesis about capital allocation: central planning risks entrusting capital to weak allocators, while market systems can reward rent-seeking and moat protection. “Acceleration” is not yet a defined alternative; specify its institutions, allocation mechanism, failure modes, and comparison criteria before evaluating it. #economics #politics #todo

## 2025-10-20

Taleb on tail-risk hedging: acquiring convex payoff exposure generally carries negative carry or option decay, so implementation details and heuristics matter. “Convexity equals decay” is a slogan, not an identity. #finance

Taleb's heuristic for speculative option buying: a widely known reason to buy may already be reflected in the price. This does not imply buying without evidence; compare one's information and model with the market-implied distribution. #finance

Taleb suggests explaining Schwartz distributions through an analogy with option pricing. Work out the correspondence and its limits before using it pedagogically. #finance #mathematics #todo

Taleb argues that repeated unhedged option selling can be non-ergodic because rare losses may cause ruin. The universal claim that no seller survives is too strong: survival depends on pricing, hedging, sizing, capital, and the loss process. #finance #risk

Tenobrus reports that copying full collections severely hurt one C++ production workload and that replacing copies with references produced a reported 100% improvement. Treat the figure as workload-specific and benchmark ownership changes for correctness as well as speed. #performance #programming

Use approximate costs for operations such as L1 cache access, branch misprediction, and mutex contention in back-of-the-envelope system-design calculations, then validate the result on the target hardware and workload. #computing #systems

$\operatorname{Spec}\mathbb{R}[x]$ as the affine line over $\mathbb{C}$ modulo conjugation: closed points of $\mathbb{A}^1_k$ correspond to irreducible polynomials over $k$, or, for a perfect field, to finite Galois orbits in an algebraic closure. Over $\mathbb{R}$ these are real points and conjugate pairs of complex points. #math.ag

Neukirch's perspective, relayed by Qiaochu Yuan: passing toward an algebraic closure of a number field can be viewed as removing arithmetic ramification. “Resolving singularities” is an analogy that needs a precise formulation before use as a theorem. #number-theory #todo

Schur's lemma over an algebraically closed field: an endomorphism of a finite-dimensional irreducible representation has an eigenvalue; the corresponding eigenspace is a nonzero invariant subspace, so irreducibility makes the endomorphism scalar. Other fields or infinite-dimensional representations require additional hypotheses. #representation-theory

Karpathy's advice prioritises building and arranging working code over writing posts or slides. Treat this as a focus heuristic: documentation and explanation remain valuable when they serve users, collaborators, or future maintenance. #building #programming #documentation
