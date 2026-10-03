---
title: "Decisions, Not Sentences: David Ondrej on Building with Jev"
date: "2026-10-03"
summary: "David Ondrej's walkthrough of Jev, a model that returns scored choices instead of text, distilled: where a fast decision model belongs in an agent system, and why a claim of calibration is something to measure, not accept. Less workflow advice than the interviews, and mostly a sponsored build."
category: "Computing"
tags: "agents, workflow, video, models, calibration, evals"
slug: ondrej-jev-decisions-not-sentences
---

I watched [Build Anything with Jev, Here's How](https://www.youtube.com/watch?v=f6We53TnkbU),
a solo video by [David Ondrej](https://www.youtube.com/@DavidOndrej) published on
19 September 2026. Unlike the interviews on his channel, this one is a product
explainer and a build: what Jev, a model from TypeSafe, does, a few examples
other people have posted, and a sponsored walkthrough of deploying a small app on
a rented server. The workflow advice is thin, so this post is shorter than the
others in the series.

## The advice

**A decision model is a different tool, not a weaker chatbot.** As Ondrej
describes it, Jev does not generate text. You give it an input and a set of
options, and it returns a score or probability for each option in one parallel
pass, in around a tenth of a second and for a small fraction of a language
model's price ([2:02](https://www.youtube.com/watch?v=f6We53TnkbU&t=122s)). One
call can answer several questions at once: which team should take this ticket,
how frustrated is the customer, how likely is a refund. It cannot write, explain
or reason step by step, and he is clear that it does not replace the large models.

**Put it where an if-statement is too dumb and a language model too slow.** His
examples are row-by-row labelling in a spreadsheet as you type, choosing actions
in a game or a driving simulation, clicking through a booking flow, and a
qualification form that scores an applicant live
([7:05](https://www.youtube.com/watch?v=f6We53TnkbU&t=425s)). The one closest to
engineering is someone else's adversarial test suite that tries to break each
release by clicking around the front end, cheap enough to run on every deploy
([13:09](https://www.youtube.com/watch?v=f6We53TnkbU&t=789s)).

**Look for existing software with a little intelligence in it.** His business
advice is not to invent something new but to take a product that is either all
if-statements or uses a slow model for a small decision, and rebuild it faster
and cheaper ([14:11](https://www.youtube.com/watch?v=f6We53TnkbU&t=851s)).

**Let the agent do the operations.** In the build, the coding agent writes the
app, creates the private repository, keeps the environment file out of it, and
walks him through configuring the deployment panel from screenshots
([24:14](https://www.youtube.com/watch?v=f6We53TnkbU&t=1454s)). He notes in
passing that some set-up is worth doing by hand once, because you learn from it.

## What it means for how I work

The useful idea is the division of labour. Daniel Miessler, in
[One Document per Project](miessler-one-document-per-project.html), describes the
same move from the user's side: going through his system and asking which steps
need a decision rather than a sentence, such as routing a prompt to a model,
flagging a prompt as dangerous, or grading an eval. In my fleet the candidates
would be similar: is this crewmate's status line a request for a decision or an
update, is this note's tag right, does this card's high action follow from its
proposition.

But the most important decision in my review process should not go to a model at
all. Whether a pull request takes the fast path or the full pipeline is decided by
the paths it touches, and the rule is written so that "the diff decides". A
deterministic rule is cheaper than any model and cannot be argued with. A
decision model earns its place only where the rule cannot be written down.

The claim I would test before trusting is calibration. Ondrej reports that Jev is
trained to give calibrated probabilities rather than confident answers. That is
a claim about outcomes, and it can only be checked the way I check my own
Calibrator answers: record each probability, wait for the outcomes, and compare
the share of 80% calls that came true with 80%
([What Three Calibrator Sessions Changed](what-three-calibrator-sessions-changed.html)).
A model that says 88% clean is useful only once you know how often its 88% is
right on your data.

The adversarial release tester is the example I find most tempting and least
suited to this site. Browser end-to-end tests belong in each visualisation's own
repository, and the site's tests must stay cheap and timed. A click-through
check would fit the post-deploy step, not the site's test suite.

## Where it is weak or does not apply

- The speed, price, "zero hallucinations" and tool-error figures are the vendor's
  charts as presented in the video, not independent measurements, and "zero" on
  structured output follows from the model only ever choosing among the options
  it was given.
- About a third of the video is a sponsored hosting walkthrough. The point that
  one server can run a small full-stack app is fair, but it is not agentic
  workflow advice.
- The framing that this is a once-in-a-generation opportunity that will be gone
  in six months is a pitch, not an argument.
- The demo form was never given real criteria, and it shows: a deliberately poor
  applicant stayed "mediocre" rather than being disqualified. That is a lesson in
  itself about decision models: the options and criteria you write are the
  model's whole understanding of the task.
