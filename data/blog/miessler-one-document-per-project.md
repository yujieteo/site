---
title: "One Document per Project: Daniel Miessler on Context and Attack Surface"
date: "2026-10-03"
summary: "Daniel Miessler's interview on David Ondrej's channel, distilled: if you cannot describe how your work runs, an agent cannot run it; keep one ideal-state document per project whose steps are also its tests; and know your attack surface before someone else's agent does. What it means for the site's notes, playbooks and deploy checks."
category: "Computing"
tags: "agents, workflow, video, security, context, evals"
slug: miessler-one-document-per-project
---

I watched [Ex-Apple dev reveals his Agentic Engineering Workflow](https://www.youtube.com/watch?v=A-JBaNvv3Tk),
David Ondrej's interview with [Daniel Miessler](https://x.com/DanielMiessler),
published on [David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on
27 September 2026. The description introduces Miessler as having worked at Apple
and spent more than 25 years in security. The video carries a sponsor segment and
a promotion of the host's own product, and Miessler mentions products of his own.
Below is what I took from it, what it means for how I work, and where it is weak.

## The advice

**If you cannot describe how your work runs, an agent cannot run it.** Miessler's
diagnosis of why some companies adopt AI and others stall is that the stalled ones
could never describe their own business ([8:06](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=486s)).
The first step is not a model; it is writing down how things work: the domains,
the procedures, the decisions behind them. The danger he names is not the AI but
not understanding your own operation.

**Do not let the vendor become the only one who knows.** When the long-serving
people who understood the business leave and the model has absorbed what they
knew, the model's provider becomes the operating system of the company and cannot
be cancelled ([6:06](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=366s)). His
middle path is to mix providers and open-weight models, and to rent dedicated
hardware from a company other than your model vendor.

**Capture everything, describe the ideal state.** His personal system holds his
mission, goals and problems, and around 150 small skills. The skills mostly
describe what a good result looks like for him rather than how to produce it
([17:15](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=1035s)). Inputs flow in from
bookmarks, a wearable recorder and conversations, following the old Getting
Things Done rule of never trusting your memory. Some inputs are parsed into work
items automatically, but he is careful about letting them act on their own: a
conversation about offensive security should not become a task.

**One document per project.** Every project has a single document of its ideal
state: the problem, the goal as he articulated it, the decisions taken and the
granular steps ([57:45](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=3465s)). The
build steps and the test steps are the same list. A change updates the document
first, then the code, then checks that they agree. If the goal is not detailed
enough, the agent keeps interviewing him until it is. When something goes wrong,
his rule is that something was in his head and not in the document. His agent
instructions file is only a router to other files.

**Evals in two kinds.** Deterministic assertions on one side, judgments on the
other, the latter either a rubric for the model to choose from or a tournament
between two options ([62:53](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=3773s)).
He runs his assertions against everything he has deployed, continuously. He also
mines his past sessions for the places where he complained, to find what to fix
in his harness.

**Know your attack surface.** He expects attacker agents against defender agents
and soon capable open models with no restraint, so that targeting a person is just
another request ([13:10](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=790s)). He
keeps nothing online that he does not understand, everything he deploys goes into
a system that checks it, and he recommends that individuals have agents find out
what the internet knows about them.

**Stay tethered.** You do not need to understand everything, but separation from
how your systems work will cause problems, and an agent that chooses your news can
steer your opinions without your noticing ([40:37](https://www.youtube.com/watch?v=A-JBaNvv3Tk&t=2437s)).

## What it means for how I work

Two of his structures already exist on my site under other names. The repository's
`AGENTS.md` says only "start at `SKILLS.md`", and `SKILLS.md` is a routing table to
one playbook per task: his instructions-file-as-router, exactly. And `data/notes.md`
is a single document I never split, so every crewmate and every Calibrator session
reads the same record. The notes are my articulation of how things run, written
as dated decisions.

What I do not have is his ideal-state document for each visualisation. A
visualisation port today carries its catalogue stub and its playbook, but the
statement of what it must do, and the checks that it still does, live in its own
repository's tests. His version, where the build steps and the test steps are one
list, would make a crewmate's change to an existing visualisation easier to judge:
does it still meet every stated criterion? That is a proposal for the visuals
repositories rather than for the site, and I would want to try it on one before
generalising.

His bunker is the right shape for my post-deploy check. Everything I deploy is
static, which keeps the attack surface small, but it is not zero: the notes are
public, and my secret scans have already found private paths that should not have
been committed. A standing check of what is live, run on each deploy, is better
than a scan when I remember.

His point about the vendor becoming the only one who knows applies to the fleet in
a small way. Firstmate and its crewmates run on hosted models I do not control. The
protection is the same as his: the knowledge lives in files I own, the playbooks,
briefs and notes, not in a conversation with the model.

## Where it is weak or does not apply

- Capturing everything, including conversations through a wearable recorder,
  raises a consent question for the other people in those conversations that the
  interview does not address. It also widens the very attack surface he worries
  about: a store of everything is a better target.
- One document per project is clean for a project one person owns. For a site
  with many contributors, my notes file shows the cost: it has to be changed one
  note at a time to avoid conflicts. A single source of truth needs a single
  writer or a merge discipline.
- The long section on the economy, a K-shaped split between people who direct
  agents and people on basic income, and a possible pill for ambition, is
  speculation and says nothing about how to work.
- Several of his systems are products he is building, and the host's own product
  gets a segment; the method stands apart from both.

Mining past sessions for complaints is also Magnus's recipe in
[Swipe to Merge](magnus-swipe-to-merge.html), and the argument that context comes
before capability is Flo Crivello's in
[Context Beats Intelligence](crivello-context-beats-intelligence.html).
