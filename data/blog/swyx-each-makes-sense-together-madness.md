---
title: "Each Makes Sense, Together Madness: swyx on Loops and Taste"
date: "2026-10-03"
summary: "swyx's interview on David Ondrej's channel, distilled: keep one focused task and many background ones, build loops with a specification, a verification and a list of what not to do, understand your data structures, and say no to features that each make sense. What it means for my mornings, my phone checks and the site's scope rule."
category: "Computing"
tags: "agents, workflow, video, loops, focus, taste"
slug: swyx-each-makes-sense-together-madness
---

I watched [What Top 1% of Agentic Engineers Do Differently](https://www.youtube.com/watch?v=EWk9PBbKqzc),
David Ondrej's interview with [swyx](https://x.com/swyx), published on
[David Ondrej's channel](https://www.youtube.com/@DavidOndrej) on 9 July 2026.
swyx runs the AI Engineer conference and the Latent Space newsletter and
podcast, and says in the interview that he advises Cognition; he is candid that
his advice to stay informed is somewhat self-serving. The video has no sponsor
segment, only the host's own offer in the description. It is the oldest video in
this series and the broadest.

## The advice

**One focused task, many background ones.** Asked whether he runs one task at a
time, swyx says no: one high-concentration task, and many background agents doing
repetitive work, research or prototypes ([2:02](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=122s)).
He also notes that the conference's attendees spend tokens freely but are wary of
whether it pays, and that a stomach for exploratory slop, to find the useful part,
is underrated.

**Explore new models with new prompts.** Using a new model with your old prompts
gets you slightly better answers and no surprise. Ask it strange, open questions
instead. A workflow you repeat with known results is, conversely, a candidate for
a smaller model ([8:08](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=488s)).

**A good loop has three parts.** A specification of what you want, a verification
of when it is done and what good looks like, and, often omitted, a list of what
not to do, drawn from the agent's known flaws: files that grow to ten thousand
lines, duplication that needs a periodic clean-up, front-end work it never looks
at, mobile layouts it forgets ([11:12](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=672s)).
He likes the idea of working down from the top: take anything you do by hand,
put an agent in the middle, then generate loops from that.

**Starter loops.** A weekly interview in which the model questions you about what
you want, because people do not notice the forks in the road until they are shown
them; a weekly research, brainstorm and throwaway prototype; production logs
connected to the agent so it can propose fixes; then a long goal, such as
conversions, to work towards ([13:13](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=793s)).

**Understand the data structures.** On a large project you can lose track of the
codebase and end up throwing away two months of work. The defence is to always
understand what is recorded, where it lives and what can be built on it, because
everything else depends on the data ([16:13](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=973s)).

**Test with people, and say no.** Models lack the everyday intuition of someone
who uses apps all day, so test with real users and click through it yourself
([18:15](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=1095s)). He cites Bjarne
Stroustrup on proposals to extend C++: each makes sense on its own, and together
they are madness ([21:16](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=1276s)).
When building anything is cheap, the selectivity of not shipping it is the scarce
part.

**Taste starts with not lying.** The quickest filter for taste, in his view, is
whether a founder's claims match what they can deliver, and the next is whether
they teach you something about the problem rather than only promoting their
company ([23:20](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=1400s)). He ends
with an essay on leadership and solitude: to lead, you sometimes have to be alone
to think ([47:41](https://www.youtube.com/watch?v=EWk9PBbKqzc&t=2861s)).

## What it means for how I work

The one-focus-many-background split is the right shape for me, with one change:
the focused task should not be the fleet. Firstmate and its crewmates are the
background. The focused task is the work only I can do, which my notes already
name: a mathematics block before I launch the next crewmate. swyx's version makes
it clear that running agents in the background is compatible with deep work, as
long as the foreground is reserved for it.

His list of what not to do reads like my own notes. "It often forgets mobile" is
why I decided on 2 October that each restyled page gets a phone check before it
deploys, and that a crewmate takes the phone screenshots
([notes, 2 October](../notes.html#2026-10-02)). That is a loop's "do not" clause
turned into a step, which is better than a reminder.

Understanding the data structures is what the site's schemas are for. Every
content type in `data/` has a schema that `scripts/validate.py` checks, and
Calibrator's sessions live in one structured file whose fields I know. When a
crewmate proposes a new kind of content, the schema is the part I should read
first, because it decides what can ever be done with it.

Stroustrup's line is the clearest statement of the site's scope rule: do what was
asked and nothing more, no unrequested features or refactors. With a fleet, every
small addition is cheap and individually sensible. The rule exists because
together they would be madness.

## Where it is weak or does not apply

- Much of the hour is startup and industry commentary (agent labs, chips,
  hiring, who has taste) rather than workflow advice.
- "People preaching small models are coping" is said for effect, and sits oddly
  beside his own advice that repeated workflows suit smaller models.
- A stomach for slop is useful for exploration, but it is the opposite of what
  Guillermo Rauch asks for in [Velocity, Not Speed](rauch-velocity-not-speed.html),
  and on a public site the slop has to stay in the throwaway prototypes.
- The token-billionaire count he reports from his conference measures spending,
  not results; he says himself that attendees are unsure of the return.

The weekly interview loop is Matt Pocock's grill-me procedure in
[Queues, Not Loops](pocock-queues-not-loops.html), and his "list what not to do"
is close to Dex Horthy's case for front-loading decisions in
[Inefficiencies That Are Not Bottlenecks](horthy-inefficiencies-that-are-not-bottlenecks.html).
