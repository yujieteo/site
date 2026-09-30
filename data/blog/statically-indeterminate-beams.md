---
title: "Statically indeterminate beams: when equilibrium runs out"
date: "2026-09-30"
summary: "A recap of analysing statically indeterminate beams: counting redundants, the force method, the three-moment equation and moment distribution, with a propped cantilever and a two-span beam worked and checked. With an 11-slide deck, printable notes, a video and a podcast episode."
category: "Engineering"
tags: "structural-engineering, beams, slides"
slug: statically-indeterminate-beams
links:
  - rel: uses
    target: visualization:beamdiag
---

A recap of how to analyse a statically indeterminate beam. When a beam's
supports provide more reactions than equilibrium can find, the missing
equations come from compatibility: deflections or slopes that the supports
force to be zero. Two worked examples follow, a propped cantilever solved by
the force method and a two-span continuous beam solved by the three-moment
equation. Both are then checked by moment distribution, by equilibrium, by a
limit case and by an independent solver.

[Open the deck full screen](../decks/indeterminate-beams/index.html). Use `→`
and `←` to step through the slides, `O` for an overview, `C` for the
transcript, `T` for light or dark, and `F` for full screen. The same talk as
printable notes: the [audience handout](../decks/indeterminate-beams/talk-handout.pdf)
(three slides per page with room for notes) and the
[article](../decks/indeterminate-beams/talk-article.pdf) (the argument in full
prose). There is also a [narrated video](../media/2026-09-30-statically-indeterminate-beams.html)
and a [podcast episode](../media/2026-09-30-structural-engineering.html) on the
same material.

<iframe class="deck-embed" src="../decks/indeterminate-beams/index.html"
        title="Statically indeterminate beams: slide deck" loading="lazy"
        allowfullscreen></iframe>

## Counting the redundants

A beam in a plane has three independent equilibrium equations: forces along
it, forces across it, and moments. With $r$ reaction components, a single beam
is indeterminate to degree $r - 3$ (R. C. Hibbeler's *Structural Analysis*
counts determinacy the same way).

| Beam | Reactions $r$ | Degree $r - 3$ |
| --- | --- | --- |
| Simply supported (pin + roller) | 3 | 0 |
| Propped cantilever (fixed + roller) | 4 | 1 |
| Two-span continuous (pin + 2 rollers) | 4 | 1 |
| Fixed at both ends | 6 | 3 |

With no axial load, the horizontal reactions and the horizontal equation drop
out together, so a beam fixed at both ends has two redundants for bending.
Each redundant needs one compatibility equation.

## The force method

The force method (also called the flexibility or compatibility method):

1. Count the redundants and choose one, for example the force in a prop.
2. Remove it. What is left, the primary structure, is determinate.
3. Find the deflection at the released support due to the loads,
   $\delta_{B,w}$, and the deflection there per unit redundant, $f_{BB}$.
4. Compatibility: the real support does not move, so
   $\delta_{B,w} - R_B f_{BB} = 0$.
5. Equilibrium then gives every other reaction.

The deflection formulas are those of determinate beams, tabulated for example
in Gere and Goodno's *Mechanics of Materials*.

### Worked example: a propped cantilever

A beam $L = 6$ m long is fixed at the wall $A$ and propped at $B$. It carries
$w = 10$ kN/m, with $EI = 16\,000$ kN·m² ($E = 200$ GPa, $I = 8 \times 10^{-5}$ m⁴).
Released at the prop, it is a cantilever:

$$\delta_{B,w} = \frac{wL^4}{8EI} = 101.25\ \text{mm}, \qquad f_{BB} = \frac{L^3}{3EI},$$

$$R_B = \frac{\delta_{B,w}}{f_{BB}} = \frac{3wL}{8} = 22.5\ \text{kN}.$$

$EI$ cancels, so the reactions of a uniform beam do not depend on its
stiffness. Equilibrium gives $R_A = wL - R_B = 37.5$ kN and a hogging wall
moment $M_A = wL^2/8 = 45$ kN·m.

The bending moment, sagging positive, is
$M(x) = -45 + 37.5x - 5x^2$ kN·m with $x$ in metres from the wall. Without
the prop the wall moment would be $wL^2/2 = 180$ kN·m; with it:

- the wall moment is 45 kN·m, hogging;
- the moment is zero at $x = 1.5$ m, a quarter of the span (the point of
  contraflexure);
- the largest sagging moment is $9wL^2/128 = 25.3125$ kN·m where the shear is
  zero, at $x = 3.75$ m.

## Continuous beams: the three-moment equation

For a beam continuous over several supports, take the bending moments over
the interior supports as the redundants. Each span becomes simply supported;
restoring continuity of slope at each interior support gives Clapeyron's
three-moment equation (1857), derived for example in T. H. G. Megson's
*Structural and Stress Analysis*. For uniform $EI$, supports at one level and a
uniform load $w_i$ on span $i$:

$$M_A L_1 + 2 M_B (L_1 + L_2) + M_C L_2 = -\frac{w_1 L_1^3}{4} - \frac{w_2 L_2^3}{4}.$$

Each right-hand term is $6EI$ times the end slope of a simply supported span,
$wL^3/24EI$. At pinned ends $M_A = M_C = 0$.

### Worked example: two unequal spans

Spans of $L_1 = 4$ m and $L_2 = 6$ m, pinned at $A$ and $C$, carry
$w = 10$ kN/m throughout:

$$2 M_B (4 + 6) = -\frac{10 \cdot 4^3}{4} - \frac{10 \cdot 6^3}{4},$$

$$20 M_B = -160 - 540 = -700, \qquad M_B = -35\ \text{kN·m}.$$

Each span, as a free body with $M_B$ applied, gives the reactions:
$R_A = wL_1/2 + M_B/L_1 = 11.25$ kN, $R_C = wL_2/2 + M_B/L_2 \approx 24.17$ kN, and
$R_B \approx 28.75 + 35.83 = 64.58$ kN (the exact values are 145/6 and 775/12 kN). The largest sagging moments are 6.33 kN·m in
the short span (1.125 m from $A$) and 29.2 kN·m in the long span (2.42 m from
$C$). The short span hogs over its last 1.75 m, pulled up over the support by
the long span's load.

## Checks

**Moment distribution** (Hardy Cross, 1930) reaches the same support moment by
a different route, with stiffnesses rather than flexibilities. Lock joint $B$;
with the far ends pinned, each span starts with a fixed-end moment $wL^2/8$.
Release the joint and share the unbalance in proportion to the modified
stiffness $3EI/L$:

| At joint $B$ | Member $BA$ | Member $BC$ |
| --- | --- | --- |
| Share of stiffness $3EI/L$ | 0.6 | 0.4 |
| Fixed-end moment | +20 | −45 |
| Balance the −25 unbalance | +15 | +10 |
| Final end moment (clockwise positive) | **+35** | **−35** |

With one joint and pinned far ends nothing carries over, so one balance is
exact, and it gives the 35 kN·m hogging moment found above.

Four checks worth running on every indeterminate beam:

1. **Equilibrium.** $11.25 + 64.58 + 24.17 = 100$ kN, the total load, and
   moments about $A$ balance. Equilibrium alone cannot confirm the answer:
   any wrong redundant still balances once the other reactions follow from it.
2. **A limit case.** Equal spans must give $M_B = -wL^2/8$: 45 kN·m for two
   6 m spans.
3. **Compatibility.** The deflection is zero at every support.
4. **An independent method.** Moment distribution above, and the
   stiffness-method [beam diagram creator](../visuals/beamdiag/index.html),
   whose exact-arithmetic reference solver returns exactly these reactions and
   moments for both examples.

## How this was made

The slides, the handout, the article and the video all come from one LaTeX
source built with [beamsuperswitch](https://github.com/yujieteo/beamsuperswitch),
a beamerswitch template. A derive script computes every number on the slides
in exact rational arithmetic and asserts equilibrium and compatibility, and
the site's tests re-solve both examples with the beam visualizer's reference
solver.

## Sources

- R. C. Hibbeler, *Structural Analysis*: determinacy, the force method,
  slope-deflection and moment distribution.
- J. M. Gere and B. J. Goodno, *Mechanics of Materials*: deflection formulas
  and statically indeterminate beams by superposition.
- T. H. G. Megson, *Structural and Stress Analysis*: the three-moment equation.
- B. P. E. Clapeyron (1857), *Comptes rendus* 45: the three-moment theorem.
- H. Cross (1930), "Analysis of continuous frames by distributing fixed-end
  moments", *Proceedings of the ASCE* 56.
