---
title: "A To-Do List Is Not a Learning System"
date: "2026-09-26"
summary: "Exploration creates value only when an action produces feedback that can change a later choice."
category: "Decision Making"
tags: "regret, multi-armed-bandits, exploration, feedback, focus"
slug: a-todo-list-is-not-a-learning-system
---

A long list of promising things to try can feel like exploration. Usually it is
only a list of unopened experiments.

Exploration has a specific job: spend something now to obtain information that
can improve later choices. If an idea is recorded but never tried, it produces no
observation. If it is tried but the result is never recorded, it still cannot
change the next decision. The list grows, but the decision-maker does not learn.

This distinction is sharp in the multi-armed bandit problem. An agent repeatedly
chooses among actions with uncertain rewards. Choosing a familiar action exploits
what is already known; choosing an uncertain action explores. The objective is
not to maximize novelty or certainty. It is to limit the reward lost relative to
a stated comparator over the remaining horizon.

That last phrase matters. [Upper-confidence methods](https://doi.org/10.1023/A:1013689704352)
make uncertainty actionable by favoring options whose observed performance or
remaining uncertainty justifies another trial. [Information-directed
sampling](https://arxiv.org/abs/1403.5556) makes the purpose even clearer: useful
exploration trades immediate regret for information about which action to choose.
A to-do item with no trial and no result buys no information.

## Turn intentions into observations

For practical decisions, each experiment needs five fields:

1. **Action:** what will be done, in a quantity small enough to finish.
2. **Signal:** what observable result would distinguish the live hypotheses.
3. **Horizon:** when the result will be reviewed.
4. **Rule:** what observation means keep, change, or stop.
5. **Identity:** a stable label connecting the intention to its result.

The identity can be as small as a commit-like tag. An action labelled
`exp-a13f09c` later receives a result with the same label. The point is not
administrative neatness. It is to make missing feedback visible. When the review
date passes without a result, the system has located its own learning failure.

## Separate cheap wins from costly attention

Not every action deserves an experiment. Some changes are one-time, cheap,
reversible, and durably useful: schedule the appointment, enable the backup,
save the verified reference, or remove a recurring source of friction. Do all
nonredundant actions of this kind in one bounded batch. Their downside is small,
and learning which is exactly best would cost more than acting.

Serious projects are different. Attention, setup, and switching are part of their
cost. Bandits with switching costs are structurally harder than cost-free
bandits; the cost changes which sequence of actions is good, rather than merely
subtracting a small fee at the end. [Dekel, Ding, Koren, and
Peres](https://arxiv.org/abs/1310.2997) give a formal example of this change.

A practical response is to rank a few serious contenders and choose one focus.
Protect its capacity before batching small wins. The other contenders remain
options, not simultaneous commitments.

## Use the remaining horizon

An experiment is worth running when a rough value-of-information test is
positive:

> chance that the result changes a future choice × remaining uses × plausible
> benefit exceeds experiment cost + switching cost + downside.

This is a decision aid, not a regret bound. It explains why early exploration can
be valuable when a result will guide many future choices, and why late
exploration can be wasteful near a hard deadline. It also explains why the exact
best action is often unnecessary. [Satisficing bandit
learning](https://arxiv.org/abs/1803.02855) formalizes the advantage of finding an
action that is good enough when identifying the optimum would consume too much
time or information.

Old results should not rule forever. When circumstances change, reward estimates
can become stale. Non-stationary bandit work therefore studies changing
comparators and deliberate forgetting or restarting; [Besbes, Gur, and
Zeevi](https://arxiv.org/abs/1307.5449) provide one foundational treatment. In a
personal system, the modest equivalent is a review date and an explicit reason
to reopen a settled choice after a regime change.

## The smallest complete loop

A useful action system can therefore stay small:

- collect possibilities without pretending that collection is exploration;
- execute every genuinely cheap, durable one-time win in a bounded batch;
- compare a few consequential options and commit to one;
- make the chosen action measurable and time-bounded;
- record the result under the same experiment identity;
- keep, change, stop, or reopen the choice using that observation.

The scarce object is not ideas. It is closed feedback loops. A list preserves
options; an experiment spends one option to learn; a recorded result makes that
learning available to the future.
