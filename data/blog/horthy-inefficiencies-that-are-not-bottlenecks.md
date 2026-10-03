---
title: "Inefficiencies That Are Not Bottlenecks: Dex Horthy on Reading the Code"
date: "2026-10-03"
summary: "Dex Horthy's interview on David Ondrej's channel, distilled: review is now the bottleneck, a factory that stops reading code eventually pays for it, benchmarks do not punish bad design, and the work is to front-load decisions in vertical slices. Plus the line I needed: stop playing with your coding agents and get back to work."
category: "Computing"
tags: "agents, workflow, video, review, testing, context"
slug: horthy-inefficiencies-that-are-not-bottlenecks
---

I watched [Ex-NASA dev reveals his Agentic Engineering Workflow](https://www.youtube.com/watch?v=xgkjtF89-44),
David Ondrej's interview with [Dex Horthy](https://x.com/dexhorthy) of
[HumanLayer](https://www.humanlayer.com/), published on
[David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on 7 August 2026.
The host introduces Horthy as the person who coined "context engineering";
Horthy's own account is more modest, that several people reached the idea at
about the same time. There is a sponsor segment, and the host repeatedly offers
a packaged version of Horthy's method in exchange for an email address.

## The advice

**Building is fast; review is the bottleneck.** Horthy walks through the software
factory loop: a backlog, someone builds, someone reviews, it ships, users
complain, round again ([1:01](https://www.youtube.com/watch?v=xgkjtF89-44&t=61s)).
Agents replaced the building and made it minutes; review still takes hours or
days. Agent code review, browser testing and routing incidents straight into the
factory all help, so that a 3 a.m. alarm produces a pull request rather than a
wake-up.

**A factory that stops reading code pays for it later.** His team ran a period
where they reviewed plans and tickets but not code. Then they hit a bug that
several strong models kept misdiagnosing, and spent weeks reading code they had
stopped reading months before ([9:06](https://www.youtube.com/watch?v=xgkjtF89-44&t=546s)).
His thesis is that this is more likely to happen to you than not. A prototype of
theirs quizzed the developer on the codebase while the agent worked, to keep the
understanding alive.

**Benchmarks do not punish bad design.** He explains why, as he understands
reinforcement learning: a model is rewarded when tests pass, and maintainability
has no fast oracle, since the cost of a bad architecture arrives weeks later
([22:16](https://www.youtube.com/watch?v=xgkjtF89-44&t=1336s)). Benchmarks also
give the model the whole problem up front, unlike real work where requirements
arrive one at a time. One check he likes from a newer benchmark: run the tests
the model wrote against the code before its patch. If they pass there too, they
test nothing ([28:18](https://www.youtube.com/watch?v=xgkjtF89-44&t=1698s)).

**Front-load the decisions, in four layers.** Product first: the user problem and
how success will be measured, even writing the announcement post and HTML
mock-ups before any code ([13:10](https://www.youtube.com/watch?v=xgkjtF89-44&t=790s)).
Then system architecture, then what he calls program design: where files go, the
types and method signatures, the call stack and the tests, all decided while the
context is small and cheap to change ([16:10](https://www.youtube.com/watch?v=xgkjtF89-44&t=970s)).
Last, vertical slices: get a thin path working end to end before adding logic, so
there is something to check along the way, rather than letting the model build
each layer in full ([19:13](https://www.youtube.com/watch?v=xgkjtF89-44&t=1153s)).

**Give the agent a number.** If you can name a measurable target, such as a
conversion rate or a resource reduction, the agent can iterate towards it on its
own; he calls this back pressure ([12:09](https://www.youtube.com/watch?v=xgkjtF89-44&t=729s)).

**Keep context small, and fetch it with code.** Results are better the smaller
and more specific the context window, and a hook that fetches recent issues at
session start costs no inference, where telling the model how to fetch them
costs attention ([34:23](https://www.youtube.com/watch?v=xgkjtF89-44&t=2063s)).
When a session drifts into what he calls the dumb zone, write a handoff document
and start fresh.

**Inefficiencies that are not bottlenecks.** From Goldratt's *The Goal*:
optimising every station of a factory piles up work in front of the slowest one
([44:27](https://www.youtube.com/watch?v=xgkjtF89-44&t=2667s)). If review is the
bottleneck, more coding agents do not help. His office joke is the line I wrote
down: stop playing with your coding agents and get back to work.

## What it means for how I work

The Goldratt point lands hardest. In my system the bottleneck is not crewmates;
it is my attention, to firstmate's decisions and to reading what landed. Every
improvement to the fleet that produces more pull requests piles more work in front
of that station. My Calibrator answers on 2 October already pointed here: 93% that
running the fleet is a way to avoid the mathematics I find hard, and a decision to
batch firstmate's alerts into fixed windows ([notes, 2 October](../notes.html#2026-10-02)).
His joke is the same diagnosis from the outside. Improving firstmate's tooling is
building the thing that builds the thing; it is worth doing only where it relieves
the bottleneck, and the bottleneck is me.

His pre-patch test check is something a crewmate could run mechanically. When a
crewmate adds a test with a change, the test should fail on the base commit and
pass on the branch. A test that passes on both checks nothing, and Armin
Ronacher's story of a cloud environment that mocked away every database test, in
[The Conservative Harness](ronacher-the-conservative-harness.html), is the same
failure seen from the other end.

Vertical slices fit how a new visualisation should be built: the page loading
with a trivial computation and a placeholder chart, end to end, before the
model and the controls are filled in. It gives a crewmate something to check at
each step, and gives me something to look at early, when changing direction is
cheap.

Fetching context with code rather than with instructions is what the site's
routing already does: a session reads `AGENTS.md`, which sends it to one
playbook. Adding more instructions to a brief costs attention in every session
that reads it, which is a reason to keep briefs to rules and leave the rest to
files the crewmate opens only when needed.

## Where it is weak or does not apply

- His argument about reinforcement learning is his own reasoning, and he says he
  cannot prove its strongest form: that if a model could recognise good code it
  would write it. It is plausible, not established.
- The evidence for "you will have to read the code" is his team's experience of
  one or two bad incidents. That is a real cost, but it is not a rate.
- The four layers of front-loading suit a team shipping to paying customers,
  which he says himself. For a solo static site, writing an announcement and
  mock-ups before every change would be the inefficiency that is not a
  bottleneck.
- Both guest and host are selling: HumanLayer's product, and the host's free
  bundle behind an email form.

The quiz to keep a developer's understanding alive is close to Guillermo Rauch's
agentic inquiry in [Velocity, Not Speed](rauch-velocity-not-speed.html) and to
Matt Pocock's point that review buys insight into the system, in
[Queues, Not Loops](pocock-queues-not-loops.html);
David Ondrej's ask-then-build, in
[Push Locks and Guard Rails](ondrej-push-locks-and-guard-rails.html), is a
lighter version of program design.
