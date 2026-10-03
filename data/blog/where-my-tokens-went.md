---
title: "Where My Tokens Went"
date: "2026-10-03"
summary: "A profile of 2.6 days of agent work: 9.1 billion tokens, about $6,700 at list price, 98% of it cached re-reads, and the six avoidable costs behind most of it."
category: "Computing"
tags: "agents, workflow, context, review, harness"
slug: where-my-tokens-went
---

On 3 October 2026 I had a crewmate profile every model call my agents made from
the start of 1 October to 14:19 on 3 October (Singapore time), about 2.6 days.
The answer was larger than I expected: about **9.1 billion tokens, roughly
$6,680 at list price**. This post records where they went, what was avoidable,
and what I changed.

## The setup

All of this work runs on Claude Opus through Claude Code, in three roles:

- **One supervising session** (I call it the main session). It is the
  conversation I talk to. It launches workers, reads their status reports and
  decides what happens next.
- **Many worker sessions.** Each one gets a task brief, works in its own git
  worktree and reports status lines back to the supervisor. There were 236
  worker tasks in the window.
- **An automated review pipeline.** Every change a worker makes goes through
  short, scripted agent sessions that review, test, document and open the pull
  request. There were 2,237 such sessions.

A note on the money. Every "$" in this post is a **list-price weighting** of
the tokens, at Opus list prices per million tokens: fresh input 5, cache write
6.25 (five-minute cache) or 10 (one-hour cache), cache read 0.50 and output 25.
It is a way to compare costs, not my bill; subscription billing differs.

## Re-reading is the cost

98% of the tokens were cache reads: the model re-reading context it had
already seen. They made up 66% of the cost. Cache writes were 22%, output 11%,
and fresh input almost nothing.

That has one plain consequence. **What drives cost is how many calls are made
and how large the context is on each call**, not what the call does. A shell
command at 700,000 tokens of context costs about $0.35 whether it sleeps,
moves a file or makes a real edit.

The largest single job in the window, moving my visualizations into one
repository, was only $272 of the total, about 4%. The figures below leave it
out, so the base is 8.69 billion tokens and $6,411.

## Cost by role

| Role | Sessions | Calls | Tokens | $ |
|---|---:|---:|---:|---:|
| Main session | 5 | 5,040 | 2,590 M | 1,417 |
| Workers | 257 | 21,666 | 5,117 M | 3,468 |
| Review pipeline | 2,237 | 19,635 | 983 M | 1,526 |
| **Total** | | 46,341 | **8,690 M** | **6,411** |

Each day cost about the same: $2,326 on 1 October, $2,319 on 2 October and
$2,039 on the partial third day (migration included).

The main session is only five sessions, but every turn it takes re-reads a
very large context. The pipeline is the opposite: thousands of short sessions,
95% of whose cost is at under 100,000 tokens of context, so its cost is in
writing the cache, not reading it.

## The avoidable costs

| Sink | $ | What it is | Fix |
|---|---:|---|---|
| Main session context size | 1,290 | It ran at 600,000–970,000 tokens of context, and every turn re-read it | Rotate to a fresh session regularly |
| Notifications that needed no action | 623 | 745 of 1,379 main turns; 44% of the main session's cost | Filter them before they wake the main session |
| Multi-repository worker sessions | — | Workers that handled 5–9 repositories in one session; contexts reached nearly 750,000 tokens | One repository per worker session |
| Supervisor outage | 325 | A bug stopped the small supervisor, so its wake-ups went to the main session | Fixed |
| One-hour cache on short pipeline sessions | 844 | Sessions with a median of 6 calls paid the one-hour cache-write price; 55% of pipeline cost | Use the five-minute cache |
| Pipeline waste | about 700 | Discarded or restarted runs, repeated review-and-fix rounds, workers polling their status | Batch fixes, cap re-reviews, wait instead of poll |

A few notes on the table.

**The main session.** Cost per call rises almost linearly with context: about
$0.08 a call at 100,000 tokens and $0.41 at 600,000 or more. 1,971 of its
5,040 calls ran at 600,000 tokens or more and cost $813 between them. Its
state already lives in files, so a fresh session loses little.

**The notifications.** Most turns of the main session were not me. Wake-ups
from workers were 1,040 of 1,379 turns and $1,000 (71%). My own prompts and
commands came to about $360 (25%). The 745 wake-ups where the session read
something and did nothing came to $623. The share grew each day: 220 of 404
turns were wake-ups on 1 October, and 424 of 476 on 3 October. The repaired
supervisor now handles much of this in its own small context.

**The workers.** 51% of worker cost ($1,762) was in calls at 300,000 tokens
of context or more. The common factor in the 15 most expensive tasks was a
long context: every one of them peaked at 535,000 tokens or more. Rate-limit
retries, browser runs and re-reading the same file were all small.

**The pipeline.** Of 479 runs, 338 needed one review, and 135 needed two or
more with fixes between them. Discarded runs cost $321 and the repeated
review-and-fix loops about $380. One thing I learned along the way: the
pipeline's own usage meter counted tokens about 1.94 times over, so these
figures come from the transcripts instead.

These savings overlap, so they do not add up. A realistic target is **about
30–40% of spend**, mostly from three changes: a smaller main context, fewer
notifications reaching the main session, and one repository per worker
session.

## A later measurement

I measured again later the same day with the same method, counting each
message once. From 14:19 to 21:16 on 3 October the agents used 357 million
tokens and about $318 at list price: **51 million tokens and $46 an hour**,
against 127 million tokens and $97 an hour on 1 and 2 October.

That is half the hourly cost, but I do not take all of it as efficiency. Fewer
workers ran that evening, so part of the drop is less work.
