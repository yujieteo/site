---
title: "The Conservative Harness: Armin Ronacher on Bash, Portability and Doubt"
date: "2026-10-03"
summary: "Armin Ronacher's interview on David Ondrej's channel, distilled: minimal harnesses win because models are good at bash, humans need the same interfaces agents use, cloud test environments can quietly test nothing, and more commits are not yet more value. What it means for a local fleet on a Nix-managed Mac."
category: "Computing"
tags: "agents, workflow, video, harness, testing, open-source"
slug: ronacher-the-conservative-harness
---

I watched [Pi Agent dev reveals his Agentic Engineering Workflow](https://www.youtube.com/watch?v=SxuQs9GGYbk),
David Ondrej's interview with [Armin Ronacher](https://x.com/mitsuhiko), creator
of Flask, published on [David Ondrej's channel](https://www.youtube.com/@DavidOndrej)
on 12 September 2026. Ronacher's company is now behind the
[Pi coding agent](https://pi.dev/), so his view of harnesses is not disinterested,
though he spends more of the hour doubting than selling. There is one sponsor
segment, and the last few minutes are about Europe rather than engineering.

## The advice

**Minimal harnesses work because models are good at computers.** Pi gives the
model little more than a shell, and Ronacher argues the larger harnesses have
converged on the same thing ([0:02](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=2s)).
Bash lets the model pipeline programs together rather than pull everything into
its context. What made Pi popular, in his account, was that it was small and
could be extended into your own agent at a time when other tools were adding
tools with every release.

**Watch for sessions you cannot take with you.** Features such as server-side
context compaction make a session impossible to move to another provider, and
the ability to suspend an agent and resume it later is still not reliable enough
for systems without a human in the loop
([13:18](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=798s)).

**Most of what limits agents is ordinary systems work.** Agents are good at
whatever is well represented in their training data, which is why he expects
more Linux, Nix and Rust: things that were always technically better but too
fiddly for people are cheap for an agent ([17:19](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1039s)).
Giving an agent a durable interface or a database it cannot wreck is state
management and architecture, not a missing AI breakthrough.

**Humans need the same interface the agent has.** People will want to see what
the agent did without asking another agent that might lie about it, which is
part of why Markdown, JSON and Unix pipelines have become the substrate
([22:22](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1342s)). Accountability
needs introspection: if you are blamed for what the machine did, you will demand
to understand it.

**Be conservative; check that the tests run.** His own engineering is still
mostly local agents on the machine where the code is, plus a Linux box over SSH,
and much of his use is investigation rather than generation
([24:22](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1462s)). His cautionary
story: helping someone debug, he found that their cloud agent's environment had
never managed to start the database, and every database test had been mocked
out ([27:23](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1643s)).

**More commits are not yet more value.** He does not see enterprise results that
match the rise in spending; the cost shows up immediately, the benefit is hard to
see beyond the number of commits, and his own sessions are not getting cheaper
([31:25](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1885s)).

**Good projects are the ones still there in ten years.** Flask, Django, curl:
what made them was people turning up and putting in work for years. A good open
source project can only be judged in retrospect, by whether it is still
maintained and used ([46:34](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=2794s)).

## What it means for how I work

My setup already sits on his side of most of these. The crewmates run locally, in
worktrees on my own machine, and the machine itself is declared in a Nix flake
([Mac Set Up](mac-set-up.html)). His point about training data is a reason that
choice works better than I expected: agents are good at editing a Nix
configuration because there is a lot of Nix in the world.

The mocked-database story is the one to take seriously. A crewmate reporting
"tests pass" is only as good as the tests it ran. The site's Stage A asks every
command to exit successfully, and fast-path changes land only on green CI for
the exact commit, which protects against a crewmate's environment silently
skipping something. But it does not protect against a test that runs and checks
nothing. Reading which tests ran, not only that the run was green, belongs in
the weekly diff I read by hand.

His insistence on a shared interface describes the status file. Firstmate and I
read the same plain-text lines a crewmate appends, and a pull request is a diff
anyone can read. Nothing in the loop asks me to trust a summary written by
another agent without the underlying record beside it.

His doubt about value is the same question Guillermo Rauch asks in
[Velocity, Not Speed](rauch-velocity-not-speed.html), from the other side.
Rauch says count direction, not pull requests; Ronacher says he has not yet seen
the direction in anyone's results. For my fleet the honest measure is not how
much landed but whether the site, the visualisations and my own mathematics are
further along, and that is not a number the fleet produces.

## Where it is weak or does not apply

- He runs a harness company and argues for minimal, extensible harnesses; he is
  candid about it, but the argument is also his product's.
- "Be conservative and stay local" is easy with a fast desktop and one person's
  work. He concedes his own setup has poor ergonomics and that cloud
  environments will win once they are reliable.
- His scepticism about returns is based on what he has observed rather than
  data, and he says so; it is a prompt to measure, not a finding.
- The open-source and Europe sections are interesting but not workflow advice.

Matt Pocock's case for improving the codebase rather than chasing models, in
[Queues, Not Loops](pocock-queues-not-loops.html), is close to Ronacher's view
that the limits are ordinary systems work.
