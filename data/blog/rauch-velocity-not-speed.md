---
title: "Velocity, Not Speed: Guillermo Rauch on Agentic Engineering"
date: "2026-10-03"
summary: "Guillermo Rauch's interview on David Ondrej's channel, distilled: spend human effort at the edges of the system, understand what agents did without reading every line, and count direction rather than pull requests. What it means for my fleet, and where it does not fit a static site."
category: "Computing"
tags: "agents, workflow, video, verification, review, security"
slug: rauch-velocity-not-speed
---

I watched [David Ondrej's interview with Guillermo Rauch](https://www.youtube.com/watch?v=WeiB_gLOdQE),
"Vercel CEO reveals his Agentic Engineering Workflow", published on
[David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on 2 October 2026.
Rauch is Vercel's CEO. The interview runs over an hour and a half and wanders
from harness design to cyber security to Disney; it also carries two sponsor
segments. What follows is the advice I took from it, in my words, then what it
means for how I work and where I think it is weak.

## The advice

**Speed is not velocity.** Rauch separates iteration speed, how fast you turn
things out, from iteration velocity, speed in a direction
([17:14](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=1034s)). Tokens spent
and pull requests landed measure speed. His example is a founder building an
agent product and, beside it, her own email service and payment gateway. Parallel
agents make taking on more feel cheap; his advice is still to pick a few problems
where you have an edge and go deep, and to buy what is not one of them.

**Spend your effort at the edges of the system.** He calls it verification
engineering ([39:24](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=2364s)): you
and the agent agree on the axioms and the trade-offs, and the human's design
effort goes into the guard rails rather than the implementation. Which
correctness properties must hold, what performance budget is not negotiable, what
the thing should feel like. He is sceptical of micro unit tests, including the
agent who asserts that a constant is four. Without the edges stated, the model
"will take you in whatever direction it wants".

**Know orders of magnitude, not encyclopedias.** He still recommends the
latency numbers every programmer should know
([43:27](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=2607s)). The point is
not recall. If you know a round trip from California to the Netherlands is
about 150 milliseconds, a page that takes a second to load tells you to push
the agent harder. If you are clueless, you accept what it ships.

**Agentic inquiry.** He does not advocate reading every line
([51:40](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=3100s)), but when
something is done you should try to understand what just happened, and use
agents to help: call-graph diagrams, latency and allocation measurements, a
summary of the new API shape. He goes further and makes it a standing
instruction: whenever a change alters the public API, ping me. He contrasts
that with "make no mistakes, please automerge", meaning the prompt, and
building "a huge pile of slop".

**Choose your slop debt deliberately.** Tech debt was always a tool, he argues
([54:42](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=3282s)): move fast where
it does not matter, and be visibly diligent where it does, above all in
security.

**Security debt is the new worry.** Small, plain code can hide a large
vulnerability space, cheap models can now find it at scale, and his advice is
to prefer infrastructure that has had more scrutiny than you could give it, to
move towards memory-safe code, and to run agents in sandboxes where the blast
radius is contained ([61:48](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=3708s),
[71:59](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=4319s)). He still wants
to pull work down to a local machine when he needs to look at it under a
microscope.

**Run personal evals, not vibes.** Keep a list of the most ambitious things
models cannot yet do, try them when a model drops, and check prompting advice
against your own results instead of repeating what you read
([5:08](https://www.youtube.com/watch?v=WeiB_gLOdQE&t=308s)).

## What it means for how I work

I run a fleet of crewmates supervised by firstmate, and the pull request count
is the easiest number in that system to watch. Rauch's distinction names what
that number leaves out. My own Calibrator answers already said it less kindly:
on 2 October I gave 93% that running the fleet is a way to avoid the
mathematics I find hard ([notes, 2 October](../notes.html#2026-10-02)). That is
speed without direction in my own words. The useful test is his: what are the
few problems I want an edge in, and is the fleet's output pointed at them?

Verification at the edges is closer to what I already do than I expected. The
site's review tiers are a stated set of edges: data-only changes take a fast
path to green CI, and anything touching code, templates, scripts or deploy keeps
the full no-mistakes pipeline. That is choosing slop debt by area, which is
exactly his advice, written down as a rule in `SKILLS.md` rather than decided
per change. What I have written less of are the axioms themselves: a page
weight budget, the browsers the visualisations must work in, what a
visualisation must never get wrong. Those belong in the playbooks a crewmate
reads, not in my head.

Agentic inquiry is the honest version of my review habit. I have committed to
reading one landed diff by hand each week. Rauch's version is better aimed:
not a random diff, but a request that the agent tell me when something crosses
a boundary I care about. Firstmate's status lines already do this for
decisions; a crewmate could do it for changes too, flagging any pull request
that alters a schema, the build or the deploy path.

## Where it is weak or does not apply

- Much of the interview is promotion: Vercel's products, Rauch's own fx
  harness, and two sponsor segments for the host. The advice survives without
  them, but the tool recommendations should be read as such.
- His production advice (error-free sessions, P99 latency, feeding agents
  production traces) assumes a product with users and a server. My site is
  static and has neither, so the nearest equivalent is the post-deploy browser
  check.
- His account of the sandbox-escape incident is, by his own admission, pieced
  together from incomplete public details. It is a reason to want agent traces,
  not evidence of what happened.
- "Eradicate supply chain attacks" by moving development into sandboxes is a
  hope he flags as bold. Sandboxing contains damage; it does not stop a
  poisoned dependency from shipping.
- He is against tests that check trivia, which is fair, but the cheap tests on
  this site exist because the pipeline that runs them is the edge. Throwing
  them out because some agent-written tests are inane would remove the guard
  rail he asks for.

[Kun Chen makes a related case](when-smoothness-frightens.html) for removing
yourself from the loop; Rauch's version keeps you in it at the edges.
