---
title: "Context Beats Intelligence: Flo Crivello on Multi-Agent Teams"
date: "2026-10-03"
summary: "Flo Crivello's interview on David Ondrej's channel, distilled: agents are still single-user, shared context matters more than a smarter model, memory should hydrate itself, and the job is to work on the machine rather than in it. What it means for a one-person fleet, and why I do not want his chaos."
category: "Computing"
tags: "agents, workflow, video, context, memory, management"
slug: crivello-context-beats-intelligence
---

I watched [Ex-Uber dev explains his Multi-Agent Workflow](https://www.youtube.com/watch?v=utb7zYbK10c),
David Ondrej's conversation with [Flo Crivello](https://x.com/Altimor), founder
of Lindy, published on [David Ondrej's channel](https://www.youtube.com/@DavidOndrej)
on 10 August 2026. Lindy sells the kind of shared agent the interview argues for,
and Crivello mentions a launch a week away; there is also a sponsor segment.

## The advice

**Agents are still single-user.** Everyone has their own agent on their own
machine, and teams pass Markdown and HTML files around in chat, which Crivello
compares to emailing Word documents before shared documents existed
([0:01](https://www.youtube.com/watch?v=utb7zYbK10c&t=1s)). The agent should be
in the room: a member of the team's chat, with an email address, mentionable in
a document, sharing one file system, one memory and one set of team skills.

**Context beats intelligence.** His example: put John von Neumann in your office
with no context and he is less useful that afternoon than an ordinary colleague
who knows the project ([13:03](https://www.youtube.com/watch?v=utb7zYbK10c&t=783s)).
A model asked a question in a vacuum will answer it. A model that has read the
team's history can tell you the question does not matter because something else
is on fire.

**Memory should hydrate itself.** Wikis go stale the moment they are written.
Lindy's agent builds and keeps updating its own memory from the team's chat and
meeting notes, so that "what did we decide?" has an answer
([9:03](https://www.youtube.com/watch?v=utb7zYbK10c&t=543s)). Humans remember
badly; agents should hold the record, and humans should do the thinking that
needs intuition.

**Keep your own setup plain.** His personal configuration is close to stock: an
almost empty instructions file, one folder for all agent work, and routines,
recurring jobs such as a morning briefing, email triage and meeting preparation
([19:04](https://www.youtube.com/watch?v=utb7zYbK10c&t=1144s)).

**Play, and let chaos reign for now.** Adults adopt slowly because they are busy
and afraid of breaking things; children learn by breaking them. He keeps one day
a week free of meetings for building with agents
([23:05](https://www.youtube.com/watch?v=utb7zYbK10c&t=1385s)). Inside his
company every engineer has built a different pull request review agent on top of
the company's own, which he calls a mess and welcomes: patterns will emerge by
selection ([25:06](https://www.youtube.com/watch?v=utb7zYbK10c&t=1506s)). As a
leader he points attention at agent workflows and praises them in public, since
teams follow what the leader notices.

**Work on the machine, not in it.** You should not be driving the car but
improving it, getting in occasionally to see what is wrong
([33:10](https://www.youtube.com/watch?v=utb7zYbK10c&t=1990s)). His example is an
app where a research agent collects user feedback and passes it to the coding
agent. He expects agents to start improving the machine themselves within a year
or two.

## What it means for how I work

I run a fleet of one: crewmates all report to firstmate, and firstmate reports
to me. The multi-user problem he describes, many people each with a private
agent, is not mine. But his point about shared context is, because my crewmates
are many agents each starting cold. The shared context they get is the
repository: `SKILLS.md`, the playbooks, and the dated notes in `data/notes.md`.
Each crewmate reads the same files, so in his terms the playbooks are the team
skills and the notes are the memory.

His von Neumann example explains a pattern I see in my Calibrator sessions. A
card generated from my notes can tell me that a question does not matter; a
question asked in a vacuum cannot. The sessions are only as good as the notes
they are generated from, which is an argument for writing notes as they happen
rather than reconstructing them.

Self-hydrating memory is where I am more cautious. My notes are written or
approved by me and tagged `#agent-written` when a crewmate drafted them. An
agent quietly rewriting its own memory from chat is convenient, but it is also
how a wrong fact becomes the record. For a single person the cost of writing the
note is low and the value of knowing who wrote it is high.

Working on the machine is the description of firstmate. I write briefs and
playbooks, and when something goes wrong the fix is usually to the playbook or
the brief template rather than to the one pull request.

## Where it is weak or does not apply

- Much of the argument is a case for Lindy's product, made a week before its
  launch. The ideas stand without it, but the conclusion that teams need one
  shared agent platform is also the business he is in.
- "Let chaos reign" works for a company with spare engineers and a product
  still being found. Every engineer running a different review agent is the
  opposite of what I want: one review pipeline whose rules I can read. My fleet
  has no slack for duplicate processes, and its failures land on my site.
- His claim that anyone not spending twenty hours a week at the keyboard with
  these systems will fail is rhetoric, not evidence.
- The passive-shareholder future, where agents improve the machine and the owner
  does nothing, is a prediction. Kun Chen's dread of exactly that state, in
  [When Smoothness Frightens](when-smoothness-frightens.html), is the other side
  of it.

Matt Pocock's point that the harness is half the car, in
[Queues, Not Loops](pocock-queues-not-loops.html), is the same claim as context
beating intelligence, made about the codebase instead of the team.
