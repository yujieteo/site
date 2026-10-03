---
title: "Push Locks and Guard Rails: David Ondrej's Own Agentic Setup"
date: "2026-10-03"
summary: "David Ondrej's tour of his own agentic engineering setup, distilled: track agent states by priority, frontload decisions before building, review once with a different model and stop, guard destructive commands with hooks, and serialise shipping with a lock. Most of it maps onto firstmate; the deploy lock is the part I have argued with myself about."
category: "Computing"
tags: "agents, workflow, video, review, guard-rails, deploy"
slug: ondrej-push-locks-and-guard-rails
---

I watched [My Agentic Engineering Workflow (after 6,775 sessions)](https://www.youtube.com/watch?v=c9nRxEy1kUY),
a solo video by [David Ondrej](https://www.youtube.com/@DavidOndrej) published on
2 September 2026, in which he walks through his own setup after the many
interviews on his channel. A sponsored segment on renting a server takes a good
part of the middle, his subscription advice will date within weeks, and he
promotes his own skills repository. Underneath is a practical list, and it is
closer to my own setup than any of the interviews.

## The advice

**Track agent states, and order them by priority.** His terminal runtime shows
which agents are running, idle, blocked or done, which he calls essential once
you run more than a few ([2:01](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=121s)).
He goes further with a tool of his own that orders finished agents by priority,
so that a high-priority agent that has finished is always answered before a
low-priority one ([3:01](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=181s)).

**Ask, then build.** Before a change, he has the agent list the main decisions
the change involves and asks him to choose, rather than letting it pick
architectural options he might regret ([30:22](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=1822s)).
Models implement well and choose badly; the choosing stays with him.

**Review once, with a different model, then stop.** For medium and large changes
he runs a review by two other strong models and merges their findings into one
list ([26:19](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=1579s)). Small
front-end tweaks go straight out. And he warns against recursive review: a model
asked for the five biggest issues will produce five, whether or not they exist
([41:29](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=2489s)).

**Guard destructive commands with hooks.** A pre-tool hook blocks recursive
deletes, history rewrites, piping downloads into a shell and access to password
managers, and he will not run agents without permission prompts unless it is in
place ([34:25](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=2065s)).

**Serialise shipping.** With many agents in many worktrees, several will try to
ship at once. His push lock is an operating-system file lock: only one agent at
a time may run the whole sequence of merge, verify, push, CI, deploy and health
check; the rest wait ([36:25](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=2185s)).
Worktrees themselves he reserves for larger projects with many parallel agents;
for small ones they are overhead ([38:27](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=2307s)).

**Smaller habits.** Record architectural decisions in `docs/adr` so future agents
know why; tell models to add tests only when they truly earn their place, since
some will bloat a small repository with them; give agents read-only access to
production data, never write access; launch sub-agents deliberately rather than
letting the harness delegate to a cheap model; and spend a full day with any
major new model before judging it ([46:36](https://www.youtube.com/watch?v=c9nRxEy1kUY&t=2796s)).

## What it means for how I work

Firstmate already does the first item. Each crewmate's status line carries one of
a small set of states (working, needs-decision, blocked, paused, done, failed),
and those, not the terminal panes, are what I answer. What firstmate does not do
is his priority ordering. A needs-decision from a crewmate working on a deploy
and one from a crewmate drafting a note arrive the same way. Giving each brief a
priority and surfacing decisions in that order is cheap and would match how I
already triage in my head.

Ask-then-build is the needs-decision state used before work starts rather than
when it gets stuck. My briefs already route product choices back to firstmate;
asking crewmates to list the consequential decisions up front, for any change
beyond a data edit, would move those questions to where they are cheapest.

His warning about recursive review fits the site's review tiers. Code changes go
through the no-mistakes pipeline; data-only changes skip it and land on
green CI. The tier rule is what prevents a review loop: the scope of review is
decided by what changed, not by asking a model whether more review is needed.

The push lock is where I have gone back and forth. On 2 October I gave 88% that
two crewmates would deploy at the same time in October and noted that I should
add a deploy lock; a few hours later I gave 14% that the lock should be a file
the deploy step checks rather than a rule in each brief, so it stayed a rule
([notes, 2 October](../notes.html#2026-10-02)). His version is the mechanical one,
and his argument for it is the one I should weigh: a rule in a brief depends on
every crewmate reading and obeying it, while a lock cannot be skipped. A lock
around the deploy step would be a small, contained change worth proposing,
through the full pipeline since it touches deploy files.

Guard-rail hooks are the same lesson. I gave 91% on 2 October to hook-enforcing
the rule against crewmates writing to Downloads, Desktop and Documents. A hook
turns a rule into a fact, which is his whole point.

His advice on tests matches the site's own: every site test must stay cheap and
is timed against a budget, and browser end-to-end tests live elsewhere.

## Where it is weak or does not apply

- His aliases that launch agents with permissions bypassed, typed dozens of times
  a day, are safe only with the guard hooks he describes; recommending the alias
  first and the hooks later is the wrong order.
- The claim that cloud agents are inevitable rests partly on another company's
  chart of its own internal pull requests, and the solution he recommends is the
  sponsor's product.
- "If you're happy with that, you're not a serious agentic engineer" is the
  register of much of the video; the substance does not need it.
- The subscription and model rankings are specific to a month and will be wrong
  soon; he says as much.
- His productivity tracker combines commits, sessions and resolved user problems.
  He admits each is a poor metric alone; combined they are still a measure of
  speed, which is the trap Guillermo Rauch describes in
  [Velocity, Not Speed](rauch-velocity-not-speed.html).

Matt Pocock's grill-me procedure, in [Queues, Not Loops](pocock-queues-not-loops.html),
is the same idea as ask-then-build: interview first, then implement.
