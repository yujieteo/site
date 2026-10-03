---
title: "Queues, Not Loops: Matt Pocock on Strategic Programming with Agents"
date: "2026-10-03"
summary: "Matt Pocock's interview on David Ondrej's channel, distilled: AI has taken tactical programming, so the work is strategic; prefer procedures to abilities; run agents away from the keyboard off a queue; and when a model finds a bug, ask why it was there. What it means for firstmate and the site's playbooks."
category: "Computing"
tags: "agents, workflow, video, skills, review, harness"
slug: pocock-queues-not-loops
---

I watched [Matt Pocock's Agentic Engineering Workflow (just copy him)](https://www.youtube.com/watch?v=nQwJVHCtDDY),
David Ondrej's interview with [Matt Pocock](https://github.com/mattpocock/skills),
published on [David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on
18 June 2026. Pocock teaches TypeScript and now teaches developers to work with
agents; he says early on that he sells courses, so his case for skills should be
read with that in mind. The video has one sponsor segment. Below is what I took
from it, what it means for how I work, and where I disagree.

## The advice

**AI has eaten tactical programming.** Pocock borrows John Ousterhout's
distinction between tactical programming, writing the code and fixing the bug in
front of you, and strategic programming, deciding what the codebase should look
like and how to raise the team's velocity
([1:02](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=62s)). Agents are better
and cheaper at the first. What is left for the human is the second, and it is
the same work as delegating to junior developers: design the hard parts up
front, scope tasks tightly, think about the interfaces between modules, write
good tests, and keep just enough documentation to point the agent at the right
place. Your skills, he says, are the ceiling on what the agent can do.

**The harness is half the car.** People fixate on the model, the engine of the
Formula 1 car, and neglect the harness: prompts, skills and above all the
codebase it works in ([27:19](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=1639s)).
His answer to "how do I cut token spend" is a codebase that is easier to change,
so a cheaper model can do the same work. He waits about a month before adopting a
new model and keeps his setup agent-agnostic, on the grounds that what has worked
for thirty years will probably keep working. He calls the codebase's fitness for
agents AX, agent experience, and notes that it overlaps heavily with developer
experience.

**Procedures, not abilities.** He splits skills into abilities, which the model
loads on its own, and procedures, which you invoke
([17:14](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=1034s)). Every ability's
description leaks into the context window, so a hundred of them cost a hundred
descriptions on every task. He prefers procedures because he wants to stay in
control of his own process. His best-known one, grill-me, is a few sentences
that turn the agent into an adversarial interviewer before any code is written.

**Queues, not loops.** On the fashion for agents running in endless loops, his
view is that what people want is work done away from the keyboard, and that a
queue describes it better than a loop
([43:32](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=2612s)). Issues are the
backlog; a label sends one to an agent in a sandbox on GitHub Actions; it is
explored, implemented or handed back. Human checkpoints should be pushed as far
to the right as possible, so that what reaches you is the bug report, the
exploration and the fix together, one click from merging.

**Review buys two things.** It gates dangerous changes, and it gives you insight
into the system that produced them
([50:37](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=3037s)). You can let an
agent decide that a pure refactor needs no review, but then you have to check
that agent's calls from time to time. "We're not just reviewing the code. We're
also reviewing the system that produces the code."

**When a model finds a bug, ask why it was there.** If a strong model finds a
security hole, the lesson is not only that the model is good; it is that your
process let the hole in. Build the check that would have caught it, for example a
daily review of one part of the repository by a cheaper model
([38:26](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=2306s)). The interviewer's
phrase for it: if someone keeps stealing your bike, buy a lock.

**Start from nothing.** His closing action: delete every skill, plugin, MCP
server and agent instructions file, watch what the agent does bare, and add back
only the procedures you find you miss
([60:42](https://www.youtube.com/watch?v=nQwJVHCtDDY&t=3642s)).

## What it means for how I work

Firstmate is a queue in exactly his sense. I write a brief, firstmate dispatches
a crewmate into its own worktree, and the crewmate reports through a status line
whose states (working, needs-decision, blocked, done) are the checkpoints. What a
crewmate brings me at the end is a pull request with its CI result, which is his
"one click away". Seeing it named as a queue rather than a fleet is useful: a
queue has a backlog I can prioritise, and the cost I pay is triage, not
supervision.

The site's `SKILLS.md` is already built against the context leak he describes.
It is a router: it names one playbook per task and tells the agent not to open
the rest of the tree. That is a procedure in his sense, chosen by the task rather
than discovered by the model.

His two purposes of review fit the decision I recorded on 2 October, to keep the
review tiers and read one landed diff each week. The weekly diff is not a gate;
the pipeline and CI are. It is the second purpose, insight into the system, and
his point about checking the agent that decides what needs review applies to the
fast path too. Data-only changes skip no-mistakes; I should occasionally read one
that did, to check that the rule is drawing the line in the right place.

The bike-lock rule is the one I would most like crewmates to follow by default.
When no-mistakes or CI catches something, the useful output is a change to the
playbook or a test that stops the class of mistake, not only the fix.

## Where it is weak or does not apply

- "Delete everything and start bare" suits a single developer with one agent and
  a bloated config. My briefs carry rules (never push to main, stay in the
  worktree, never touch the shared daemon) that exist because something went
  wrong without them. My Calibrator answers on 2 October were firmly against
  replacing those rules with a short page of principles. Observing a bare agent
  is a good experiment; shipping one is not.
- "AI has eaten tactical programming" and "seniors get ten times better" are
  stated as observations from conversations, not measured. The direction is
  plausible; the numbers are not evidence.
- The harness-versus-model split as "50/50" is a slogan. He concedes that a
  better engine makes the whole car faster, and the host's counterexamples
  (models finding bugs nobody asked about) are not fully answered.
- He is candid that he sells courses and skills; the advice to build your own
  procedures is sound regardless, but his repository is one starting point among
  several.

Guillermo Rauch makes the same point about spending human effort at the edges in
[Velocity, Not Speed](rauch-velocity-not-speed.html); Pocock's version is the
codebase itself as the edge.
