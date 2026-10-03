---
title: "Sample, Don't Block: Lauren Tan on Shipping Thousands of PRs a Month"
date: "2026-10-03"
summary: "Lauren Tan (poteto, creator of pstack) in conversation with Matt Pocock, distilled: verification is the first skill to build, push the deterministic parts into scripts and lint rules, connect an outer loop of context to the inner loop of work, buffer findings before fixing them, and review after landing by sampling. What it means for firstmate and the site's playbooks."
category: "Computing"
tags: "agents, workflow, video, skills, review, verification"
slug: tan-sample-dont-block
---

I watched [Poteto (creator of pstack) on shipping 1,000's of PR's a month at SpaceX](https://www.youtube.com/watch?v=MN9dGgmLyso),
a live stream on [Matt Pocock's channel](https://www.youtube.com/@mattpocockuk)
from 3 October 2026 in which Pocock talks with Lauren Tan, known online as
poteto. Tan worked on the React team at Meta, joined Cursor (now SpaceX AI) in
March, and maintains the pstack skill library. The conversation is run as a Q&A
on Tan's recent talk about shipping 2,500 pull requests to production in a
month. Both speakers sell or give away skill libraries, and Pocock mentions a
course on the same subject; read the enthusiasm with that in mind. Below is
what I took from it, what it means for how I work, and where I disagree.

## The advice

**Domain expertise matters more, not less.** As models get better, Tan argues,
the bottleneck stops being the agent and becomes your ability to state your
intent clearly enough for it to carry out
([7:05](https://www.youtube.com/watch?v=MN9dGgmLyso&t=425s)). Pocock adds that
a well-chosen word, such as "tautological" for useless tests, compresses a lot
of intent into something the agent latches on to.

**A Michelin kitchen, not a factory.** Tan dislikes "software factory" because a
factory does not suggest craft. The chef is closer to a tech lead: not cooking
every dish, but responsible for the kitchen, the ingredients and the outcome
([11:06](https://www.youtube.com/watch?v=MN9dGgmLyso&t=666s)). Setting up the
skills, environment and codebase is "the new ingredients". Adding cooks to a
kitchen nobody has organised only adds stress.

**Verification is the first skill.** Their phrase is "the single most important
skill that should be in your toolkit is verification": give the agent hands and
eyes to run the app, use it like a user, and take traces and snapshots
([16:10](https://www.youtube.com/watch?v=MN9dGgmLyso&t=970s)). Before that, they
were "the meat proxy between my agent and Chrome DevTools". Without
verification there is no loop, and without a loop there is no hill climbing
against a score. Every app at their company now has its own verification skill.

**Move the deterministic parts out of the agent.** Agents left to verify their
own work "would basically rebuild the world each time", each one differently, so
Tan wrapped the mechanical part in a small CLI inside the skill
([20:15](https://www.youtube.com/watch?v=MN9dGgmLyso&t=1215s)). The rule they
draw from it: keep judgement for the agent, and turn everything mechanical into
code. Their internal framework applies the same idea to the codebase, with
strict lint rules and one place for each feature, so that bad code is hard to
write. Every repeated agent mistake prompts the question "how do I turn this
into a lint rule?" ([31:20](https://www.youtube.com/watch?v=MN9dGgmLyso&t=1880s)).

**Connect the outer loop to the inner loop.** The inner loop is agents working
towards a snapshot of your intent; the outer loop is the bug reports, Slack
threads and feature requests that make that snapshot stale
([35:24](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2124s)). For a long time
Tan was the proxy who carried that context across. Now personal agents with
connectors watch the channels and send work to coordinator agents, which split
it among subagents. Grouping related reports matters: one agent per bug loses
the thread between them. The management slogan they borrow from Netflix is
"context not control".

**Buffer before you fix.** One routine looks for React foot-guns but does not
fix them. It appends each finding to a document, and every few days Tan reads
it and sees which findings are really the same thing
([47:35](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2855s)). Pure execution
mode misses the big picture; a queue gives you something to look at.

**Sample; do not taste every dish.** Most of the 2,500 PRs are gardening, not
features. Tan does not read them all. They sample, look hard at the ones they
read, and when several agents take the same shortcut they change the
environment, not the agent
([49:36](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2976s)). With strict
verification on, including verifier agents that fuzz the running app, the
agents merge their own work: "I review the pull request after it's landed"
([52:38](https://www.youtube.com/watch?v=MN9dGgmLyso&t=3158s)). Tan says
plainly that getting there takes a lot of time and effort, and that the first
night was frightening.

**One-way doors need verifiable domains.** Asked about medical, legal or
financial work, Tan has no full answer: "verifiability of the domain is an
important aspect", and where work cannot be checked by a program, the same
autonomy is out of reach
([56:41](https://www.youtube.com/watch?v=MN9dGgmLyso&t=3401s)).

**Mine your own transcripts.** Their closing advice is to read your past chats,
find the places where you had to correct the agent, and turn those into skills
or lint rules ([60:42](https://www.youtube.com/watch?v=MN9dGgmLyso&t=3642s)).
Skills, they say, will get smaller as models improve: less script detail, more
plain workflow.

## What it means for how I work

The outer and inner loop is the shape firstmate already has, with me still in
the outer loop. I carry context from issues and conversations into briefs. The
gap Tan points at is real: nothing yet turns a reported problem into a brief
without me.

Their review model is close to how this site now ships. The no-mistakes
pipeline and CI are the verification loop, and for routine posts the change
merges and deploys without me reading it first. My weekly read of one landed
diff is their sampling, after the fact. Their rule for what to do with a sample
is the useful part: if the same fault appears twice, the fix goes into a
playbook or a test, not into the one PR.

The buffer is the piece I lack. Crewmates report each problem as it comes, and
each report gets its own fix. A plain list of findings, read every few days,
would show which of them share a cause.

## Where it is weak or does not apply

- 2,500 PRs a month is a count, not a measure of value. Tan says most are
  gardening; the video gives no figure for how many were reverted or caused
  incidents.
- The setup depends on tools that are internal or tied to one vendor:
  coordinator projects in Cursor, a private framework, and personal agents with
  connectors. The principles transfer; the throughput may not.
- Reviewing after landing works where a bad merge is cheap to revert and the app
  can be checked by a program. Tan admits this, and it is the main limit: it
  does not cover data migrations or anything that cannot be walked back.
- The conversation is friendly and promotional on both sides. Neither speaker
  pushes back on the other.

Matt Pocock's own case for queues over loops, and for asking why a bug was
there, is in [Queues, Not Loops](pocock-queues-not-loops.html); Tan's buffer of
findings is the same idea from the other side.
