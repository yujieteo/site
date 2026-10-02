---
title: "What Three Calibrator Sessions Changed"
date: "2026-10-02"
summary: "Three hundred probability answers in one day: the decisions they made, how I now read my own answers, the contradictions they exposed, and the first 21 resolved results."
category: "Decision Making"
tags: "calibrator, calibration, forecasting, decision-making, planning, agents"
slug: what-three-calibrator-sessions-changed
---

On 2 October 2026 I answered three Calibrator sessions, 100 questions each, and
they changed more of my plans than a month of notes had. This post records what
changed and how I now read my own answers. Its source is the `#calibrator` notes
from that day and the answers in `data/calibrator/raw.toon`.

## What Calibrator is

[Calibrator](../visuals/calibrator/index.html) is a small probability
elicitation tool. A crewmate generates a ranked session of questions from my
notes, my public repositories and a few filtered news sources. I answer each
question with one slider from 0 to 100%. There is no default, the first answer
is kept, and any later move is recorded as a revision. Every card has a
proposition, a line of context, a **high action** (what to do if the
proposition is likely) and a **low action** (what to do if it is not). The
answered session goes back into `raw.toon`, where each question also carries a
resolution rule and a date, so that some of them can be scored later.

Each later session was generated from the notes the previous one produced, so the three form a chain:
the first proposed, the second corrected and the third chose.

## How I answered

All three sessions were fast. The first took about 17 minutes, with a median of
6.3 seconds a question. The second took about 11 minutes, with a median of 4.7
seconds, and the third about 11 minutes with a median of 5.1. The answers were
also extreme. The second session had 82 answers at or beyond 15 or 85 and one
between 35 and 65; the third had 73 and two.

In the second session I gave 89% that six-second answers were too fast for the
top 25 questions to count as judgments, with 20 seconds a question as the high
action, and then spent 5.3 seconds on each. In the third I gave 83% that I
would spend at least 10 seconds on each of the top 25, and spent 4.5. Two
second-session answers flipped by more than 75 points within eight seconds of
first seeing the card, from 92% to 11% and from 91% to 16%. That looks like
misreading at speed, not a change of mind.

I do not think the speed makes the answers worthless. It does mean I should
treat a single answer as a quick reading and look for agreement across cards
and sessions before acting on it.

## How to read my answers

Three rules came out of the sessions, and together they say what an answer
means.

**70 and above endorses the high action; 30 and below endorses the low one.**
I gave 90% to this reading in the second session, and in the third I gave 80%
that at least 70% of my answers of 70 or more will come true once twenty of
them resolve. I also gave 94% that I read the High and Low lines before moving
the slider. Under this rule, several first-session answers that had looked
undecided turned into decisions. Examples are a fixed weekly Calibrator slot at
71% and a simpler deploy path at 77%.

**Extremes read as wishes.** The first session had six answers at 0 or 100. The
100s went to my own plans: the FPL wildcard, beamdiag feedback, answering
Calibrator and the stop-doing list. In the second session I gave 93% that those
were wishes about my plans rather than credences, and 87% to keeping 0 and 100
for facts. Then I gave 100% to three opinions in the same session. So the third
session re-asked the extremes as forecasts of what I will do. I now read a 0 or
100 on a plan as "I want this", not as a probability.

**A card is only as good as its actions.** Ten first-session cards had their
high and low actions swapped relative to the proposition. For example, I gave
83% that most of the week's visualisation ports would still look worth porting
in a month, but that card's high action was to pause porting. I gave 91% that I
answered those cards by their actions rather than their propositions. When the
second and third sessions re-asked them with matching actions, the ten split
five and five. So neither reading was right, and the answers on those ten
cards decide nothing. Only the re-asked answers stand.

## What the sessions decided

A Calibrator session is meant to change decisions, not only to produce scores.
These are the decisions that came out of the three.

- **My five todos.** The second session showed that I would have picked at
  least three different todos from the first session's answers than the
  crewmate did (90%). So the third session asked me to choose. I kept five, each
  with a date and a done-condition: play the FPL wildcard before the Gameweek 6
  deadline, write a first-hand observation on three days a week, spend the
  information-cohomology afternoon in October, record the gym-bag experiment's
  outcome, and put my act-now todos in a calendar. The GitHub token audit and
  the CLAUDE.md shims went to crewmates. The beamdiag forum post is parked until
  1 November.
- **Automated checks, not personal review.** Across two sessions I kept trusting
  automated checks over my own spot checks. In the second session I gave 95%
  that this was a stable pattern. In the third I gave 10% that a crewmate made a
  change last week that I would have rejected, and 6% that reading one crewmate
  run line by line would change my briefs. Yet I gave 87% that the data-only
  fast path will let a defect reach the live site, and 83% that my most likely
  hard-to-undo failure comes from a deploy. The safeguards that fit both answers
  are automated: a browser check on every deploy, a secret scan of my public
  repositories and a hardened deploy path.
- **Mathematics gets fixed hours.** I gave 96% that agent tooling will take more
  of my October hours than mathematics. The high action was to book two fixed
  mathematics blocks a week, so I did. November stays a month on étale
  cohomology alone (78% that it produces a result breadth would not). I gave 7%
  that I can name today the computation I want to finish, so its first week
  goes to choosing one.
- **The Calibrator rules themselves.** Sessions stay at 100 questions (92%),
  weekly, from one generator model. The next session adds ten cards I would
  least like to answer (93%) and drops my earlier credences from the context
  lines (77% that quoting them pulls my answers towards them). Todo-picking cards
  stay in every session (96%).
- **This post.** In the second session I gave 95% that a blog post on what the
  first session changed would help me more than that session's 20 notes. In the
  third I gave 82% that I would publish it by 31 October, and 88% that starting
  from a crewmate's draft would save me time without changing what it says.

## Contradictions the sessions surfaced

Putting a hundred quick answers side by side shows where they disagree.

- **Expecting failure while trusting the checks.** In the first session I gave
  86% to a hard-to-undo agent failure within three months, yet 12% that I am
  moving myself out of the loop faster than I can verify what ships. The token
  audit answers the credential risk. The other answers point to automated
  checks, not to more of my own attention.
- **Answers that arrived too late.** Twice in the third session my answer came
  after the agents had already acted. The data-only fast path was merged a
  minute before I gave 87% to closing it. The motives-and-periods visualisation
  was merged after I gave 11% that I would use it, a card whose low action was
  to pause it. A card can only steer work that is still waiting for my decision.
  Cards about work in flight need an answer, or the work needs holding, before a
  crewmate lands it.
- **The gallery pulls two ways.** I gave 89% that pausing new standalone
  visualisation repositories would cost me one I want, and 92% that I will
  reopen one of this week's ports. Yet I gave 20% that any of my 61 public
  repositories gets a star or an issue from someone else by the end of the
  year, a card whose low action is to fold them back into one repository. I
  need to choose between those before the next new repository.
- **Decision tools.** In the second session I gave 91% that allocating next
  week's hours with the multi-armed bandit visualisation would beat my own
  judgment. In the third, on the card that asked me to actually do it, I moved
  from 93% to 24% within four seconds. I also gave 89% that it needs an
  hours-allocation input before it could do the job.
- **Many endorsed actions, few completions.** The first session endorsed many
  actions at 85% to 100%, yet I gave 21% to acting on five of them within two
  weeks. Choosing five todos in the third session was the response to that.

## The first resolved results

When the third session was recorded, the first resolution pass scored 21
earlier questions from public evidence. These questions could be decided early, mostly because they
were about my own process, so this is a first look rather than a calibration
test.

- Of my 14 resolved answers at 70 or more, 10 came true.
- Of my 7 resolved answers at 30 or less, 5 came false.
- The Brier score over all 21 is 0.228. Answering 50 everywhere would score
  0.25, so I am only slightly better than that.

All six misses were forecasts about my own process, and most were about how I
answer Calibrator:

| Forecast | My answer | What happened |
| --- | --- | --- |
| I would spend 20 seconds on each of the session-2 top 25 | 89% | 5.3 seconds |
| I would spend at least 10 seconds on each of the session-3 top 25 | 83% | 4.5 seconds |
| A resolution pass would come before session 3 | 89% | it came after |
| Session 2 would have fewer than ten answers between 35 and 65 | 9% | it had one |
| The fast path for data-only changes would land now | 15% | it was merged |
| Drop FPL questions if I skipped most of them | 83% | I skipped none |

So far my forecasts about the world have done better than my forecasts about
how I will answer. The pattern to watch is that I keep planning to answer more
slowly and then do not. I gave 92% that a monthly Brier score would change how
I answer, so this result is the baseline and a monthly score note follows.

## What I would tell myself before the first session

- Write each card's actions to match its proposition, and check them before
  answering.
- Keep 0 and 100 for facts. For a plan, the extreme only says that I want it.
- Act on 70 and 30, and look for the same answer on more than one card before
  making a large change.
- Hold work in flight until the card about it is answered.
- Score early, even with few questions. The first 21 already showed which of my
  forecasts are weakest.
