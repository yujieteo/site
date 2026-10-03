---
title: "Context as Code: Alex Lieberman and Dan Zakon on the Meta-Harness"
date: "2026-10-03"
summary: "Alex Lieberman and Dan Zakon's interview on David Ondrej's channel, distilled: keep a typed repository of context beside the code, inject it at the start of every session, lint the process as well as the code, and keep the human at the first and last mile. What it means for my playbooks, status lines and this series itself."
category: "Computing"
tags: "agents, workflow, video, context, process, writing"
slug: 10x-context-as-code
---

I watched [$75M founder reveals his Agentic Engineering setup](https://www.youtube.com/watch?v=QBfXiWvM0qc),
David Ondrej's interview with [Alex Lieberman](https://x.com/businessbarista),
co-founder of Morning Brew and of 10X, and [Dan Zakon](https://x.com/dan_zakon),
10X's director of engineering, published on
[David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on 20 August 2026.
10X sells AI transformation work to large companies, so part of the hour is a
pitch for it; there are also two sponsor segments, one for the host's own API.
Below is what I took from it, what it means for how I work, and where it is weak.

## The advice

**Single player, then multiplayer.** Lieberman's framework for clients: single
player is giving each person a strong model, with no change in how the
organisation works; multiplayer is rebuilding a shared process so that the
leverage compounds across a team ([8:05](https://www.youtube.com/watch?v=QBfXiWvM0qc&t=485s)).
Most clients' AI problems turn out to be data problems first.

**Treat context as code.** Zakon's team keeps a project-management repository
beside each code repository, holding typed Markdown artifacts: conventions,
epics, detailed specs, docs and a running log, each with metadata so that an
agent can find and parse them ([36:19](https://www.youtube.com/watch?v=QBfXiWvM0qc&t=2179s)).
A command-line tool reports the state of these artifacts in one mode for humans
and another for agents, and a session-start hook gives every agent that packet
of context before it begins, which he calls benevolent prompt injection. He
spends more time on the Markdown than on running the code: hours of planning,
then a long unattended execution that also moves the tickets and writes back to
the log ([40:21](https://www.youtube.com/watch?v=QBfXiWvM0qc&t=2421s)).

**Lint the process, not just the code.** A validator checks the artifacts against
hundreds of rules drawn from their way of working. His example: a spec whose
written status says complete while its tickets are still in review has drifted,
because the authored status disagrees with the status derived from the rules
([44:26](https://www.youtube.com/watch?v=QBfXiWvM0qc&t=2666s)). Agents can run
the same validator and fix the drift themselves.

**Keep the human at the first and last mile.** Lieberman's content system is an
example outside code ([20:12](https://www.youtube.com/watch?v=QBfXiWvM0qc&t=1212s)).
The human chooses the idea and supplies the words, by being interviewed for
twenty minutes; the machine researches, structures and edits without replacing
those words, and a lessons file grows from his feedback after each session. His
claim is that this, not a list of banned phrases, is what keeps the output from
reading as machine-made.

**You can outsource processing, not understanding.** Asked whether anyone will
read code, Zakon says the reading is going down but understanding cannot be
delegated, and agents amplify an engineer's habits, good or bad
([34:18](https://www.youtube.com/watch?v=QBfXiWvM0qc&t=2058s)).

## What it means for how I work

The site is a small version of his meta-harness. `AGENTS.md` sends every session
to `SKILLS.md`, which routes each task to one playbook; the playbooks are his
convention artifacts, and `data/notes.md` is the log. `scripts/validate.py` lints
the content against schemas before anything builds. What the site lacks is his
process lint: rules about the state of the work rather than the shape of the
data.

Firstmate has one such rule already. A crewmate's `done:` line is accepted only
when the commit it reports is actually pushed to the pull request branch, which
is his authored-versus-derived check: the status the crewmate writes must agree
with the status computed from the forge. Generalising that would catch the
drift I see most: a note that says a todo is done with no linked change, or a
brief marked finished whose pull request is still open.

The first-and-last-mile rule applies to this series directly. These eleven posts
were drafted by a crewmate from each video's captions, at my request. The first
mile, choosing the videos and the decisions they are measured against, is mine,
and the decisions quoted come from notes I wrote or approved. The last mile,
the decision to publish them, is also mine. Lieberman's test is the
right one to hold the posts to: where they say what I think, the thinking should
be traceable to something I said.

His idea that agents can hold people to stated priorities is what my Calibrator
rule does. Work an open card asks about waits until I have answered the card,
which is a small agent-enforced check on my own drift.

## Where it is weak or does not apply

- 10X sells exactly this transformation, and the media strategy described in the
  interview is part of its business; the framework is useful, but the conclusion
  that every company needs a full-stack partner is the sales pitch.
- The editing council in the content system scores drafts and loops until they
  reach nine out of ten. That is the recursive review David Ondrej warns against
  in [Push Locks and Guard Rails](ondrej-push-locks-and-guard-rails.html): a model
  asked to find problems will find some.
- Codifying celebrity interviewers and writers as personas is a convenient
  shortcut, but it imitates particular people's styles, and the interview does
  not discuss whether that is fine.
- "No one will read code" is a third party's hot take, reported second-hand; the
  guests themselves disagree with it, which is the more useful position.
- A separate repository for context suits a consultancy with many engagements. On
  a site where content and code live together, splitting them would add a sync
  problem the validator would then have to police.

Flo Crivello's single-player versus multiplayer point, in
[Context Beats Intelligence](crivello-context-beats-intelligence.html), is the
same framing; Daniel Miessler's single ideal-state document per project, in
[One Document per Project](miessler-one-document-per-project.html), is the
one-person version of context as code.
