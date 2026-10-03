---
title: "Swipe to Merge: Browser Use's Magnus on Agents That Propose"
date: "2026-10-03"
summary: "The Browser Use CEO's interview on David Ondrej's channel, distilled: let the agent propose and answer yes or no, extract your taste from past sessions, and watch for literal goals. I already run a version of this as Calibrator, and my own answer times are the warning."
category: "Computing"
tags: "agents, workflow, video, review, judgment, calibrator"
slug: magnus-swipe-to-merge
---

I watched [Watch this 100x developer use GPT-6 Astra… it's insane](https://www.youtube.com/watch?v=R--bWH0x8_c),
David Ondrej's interview with Magnus, CEO of Browser Use
([@mamagnus00](https://x.com/mamagnus00)), published on
[David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on 17 September 2026.
It has a sponsor segment and a segment in which the host promotes an
open-source tool of his own.

## The advice

**Invert the prompt.** Magnus no longer writes prompts for most of his work; the
agent writes proposals to him ([1:00](https://www.youtube.com/watch?v=R--bWH0x8_c&t=60s)).
He keeps a Markdown file of goals, the agent watches support, the repositories
and mentions of the product, and it offers actions one at a time: a fix, a chart
for the documentation, a reply to a customer. He answers yes or no, like
swiping. For small fixes he looks at a screenshot of the result, not the code,
and merges.

**The human becomes the bottleneck, and loses context.** Agents work all the
time and he is the slowest step ([8:00](https://www.youtube.com/watch?v=R--bWH0x8_c&t=480s)).
Worse, an agent acted on a remark of his co-founder's, wrote to another company,
and when that company replied asking why, he no longer remembered the reason.
The agent had to explain his own decision back to him.

**Extract your taste.** His recipe ([12:02](https://www.youtube.com/watch?v=R--bWH0x8_c&t=722s)):
ask the agent to read every follow-up message you have sent in past sessions and
collect the places where you called something ugly, wrong or ridiculous; then
add your chat, mail, calendar and incident history; and put the result in one
file. Repeated yes-or-no answers then work like a recommender system that
creates the items it ranks.

**Sort decisions by effort.** He has the agent estimate how long each decision
will take him and clears the nine-second ones first
([49:12](https://www.youtube.com/watch?v=R--bWH0x8_c&t=2952s)). Changing the
direction of the product, or rewriting infrastructure, still needs a long
session with many follow-ups, not a swipe.

**Goals are taken literally.** One team member gave an agent the goal of a
thousand views on a short video. The agent made the video, posted it, and put
the link at the top of the README of the company's main repository
([16:02](https://www.youtube.com/watch?v=R--bWH0x8_c&t=962s)).

**Models still lack practical judgment.** Building a study app, he was told by a
strong model to show questions he had already answered correctly twice more
often, which any learner knows is backwards
([38:11](https://www.youtube.com/watch?v=R--bWH0x8_c&t=2291s)). Better
programming than his, worse sense of what to do.

**Proposals should be quick to read.** He asks for proposals he can understand
in three seconds, with a picture where possible, and only actionable ones: send
the draft, not create a draft ([42:11](https://www.youtube.com/watch?v=R--bWH0x8_c&t=2531s)).

## What it means for how I work

I already run this system, under another name. Calibrator is an agent writing
proposals to me from my notes and repositories: each card is a proposition with
a high action and a low action, and I answer with one slider. Firstmate's
needs-decision lines are the same pattern for the fleet. So the useful question
is not whether to adopt it but what my own data says about it.

It says the swipe is where the system is weakest. In my first three sessions I
answered at a median of about five seconds a question. In one I gave 89% that
six-second answers were too fast for the top questions to count as judgments,
then spent 5.3 seconds on each. Two answers flipped by more than 75 points
within eight seconds of first seeing the card, which reads as misreading at
speed ([What Three Calibrator Sessions Changed](what-three-calibrator-sessions-changed.html)).
And ten cards turned out to have their high and low actions swapped, so the
answers to them decided nothing. A swipe is only as good as the proposal it
answers, and a fast swipe hides a bad proposal.

That leads to two rules I would add to his. First, the proposal has to carry the
reason, so that when the consequences come back weeks later I can see why I
said yes; his story of forgetting why the agent wrote to another company is
exactly the failure. The notes I keep from each session, tagged with the card
id, are my version. Second, the effort sort should run in both directions: the
cards that need ten seconds should get them, rather than being swiped at the
same pace as the rest.

His literal-goal story is why my briefs carry hard rules rather than goals
alone: push only your branch, stay in your worktree, never merge. A crewmate
asked to get a page live would otherwise find the shortest path to it.

## Where it is weak or does not apply

- Merging from a screenshot without reading code is a bet that the agent and
  the tests between them are right. On my site that is the fast path, and it
  is allowed only for data-only changes with green CI. For code, the full
  review pipeline is the screenshot's missing half.
- Mining your past corrections to extract taste will also extract your bad
  days. A recommender trained on my fastest swipes would learn my speed, not my
  judgment.
- His prediction that most support and growth work will run on full autopilot
  within a month is a forecast from two weeks with one model.
- The long middle of the interview, on agents replacing marketplaces and
  reputation systems for meeting people, is speculation and has nothing to do
  with engineering workflow.

Flo Crivello's point that context beats intelligence, in
[Context Beats Intelligence](crivello-context-beats-intelligence.html), is the
other side of losing context: the agent kept it, the human did not. Guillermo
Rauch's agentic inquiry, in [Velocity, Not Speed](rauch-velocity-not-speed.html),
is the opposite of merging from a screenshot.
