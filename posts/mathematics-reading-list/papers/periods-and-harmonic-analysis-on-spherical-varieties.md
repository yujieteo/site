source: https://arxiv.org/pdf/1203.0039
slogan: A spherical variety X has its own dual group, which should govern both the spectrum of functions on X and the Euler factors of period integrals.
basis: the abstract and introduction

## Before you start

This is a monograph of nearly 300 pages, and it assumes the Langlands dual group, Arthur parameters and p-adic representation theory. Overwhelm is the likely feeling, with some shame at the background mixed in. Both are allowed, and neither means you are in the wrong place. The authors say the four parts can be read separately. If you want to know why some period integrals give L-functions, the introduction already tells the story. Read those sixteen pages for interest and treat the rest as a reference to visit when curious.

## The story

Take a subgroup H of a reductive group G. Locally, people want to decompose L<sup>2</sup>(H\\G) under G. Globally, they integrate automorphic forms over H and often find special values of L-functions. Both problems were handled case by case. Sakellaridis and Venkatesh propose one framework for the case where X = H\\G is spherical. To X they attach a dual group Ǧ<sub>X</sub> with a map Ǧ<sub>X</sub> × SL<sub>2</sub> → Ǧ. The spectrum of L<sup>2</sup>(X) should come from parameters that factor through this map. To support this they study X at infinity. A hyperboloid x<sup>2</sup> − y<sup>2</sup> − z<sup>2</sup> = 1 looks like the cone x<sup>2</sup> − y<sup>2</sup> − z<sup>2</sup> = 0 far away. In the same way X degenerates to simpler varieties, and scattering theory builds the continuous spectrum of X from their discrete spectra.

## Main definitions

**Spherical variety.** A normal G-variety X on which a Borel subgroup B ⊂ G has a Zariski dense orbit. Throughout, G is split reductive over a field of characteristic zero.
- Examples: symmetric varieties, the Gross–Prasad case SO<sub>n</sub> inside SO<sub>n</sub> × SO<sub>n+1</sub>, and the Whittaker case with a twist by a character.

**Dual group Ǧ<sub>X</sub> and distinguished morphism.** A complex reductive group defined by a root datum read off from X, motivated by Gaitsgory and Nadler. A distinguished morphism is a map Ǧ<sub>X</sub> × SL<sub>2</sub> → Ǧ extending a canonical map of Cartan subgroups, with a constraint on root spaces.

**X-distinguished Arthur parameter.** An Arthur parameter L<sub>k</sub> × SL<sub>2</sub> → Ǧ that is obtained from a map L<sub>k</sub> → Ǧ<sub>X</sub> by composing with the distinguished morphism.

**Boundary degeneration X<sub>Θ</sub>.** For each conjugacy class Θ of parabolic subgroups of Ǧ<sub>X</sub>, a spherical G-variety that models X near one part of infinity. It is the open G-orbit in the normal bundle of an orbit in the wonderful compactification of X.
- It has extra symmetry: a torus acts on it and commutes with G.

## Main results

Unless stated otherwise, k is a non-archimedean local field and X is "wavefront", a condition the authors say holds for most spherical varieties. I read these statements in the introduction only, so the full hypotheses are in the cited theorems.

**Conjecture (local; Conjecture 1.3.1, refined as 16.2.2).** The Plancherel measure of L<sup>2</sup>(X) is supported in the union of Arthur packets attached to X-distinguished Arthur parameters.
- Example: for G = GL<sub>2n</sub> and X the space of alternating forms, Ǧ<sub>X</sub> = GL<sub>n</sub> and the predicted spectrum consists of Speh representations J(2, σ) with σ tempered.

**Theorem (Bernstein maps and scattering; Theorems 11.1.2 and 14.3.1).** For each Θ there is a canonical G-equivariant map ι<sub>Θ</sub> : L<sup>2</sup>(X<sub>Θ</sub>) → L<sup>2</sup>(X). In favourable cases, fixed by a combinatorial criterion, the images of the discrete spectra of the X<sub>Θ</sub> give a Plancherel formula for X up to knowledge of those discrete spectra.
- Step 1: functions supported near Θ-infinity on X are matched with functions on X<sub>Θ</sub> through an "exponential map" (Theorem 5.1.1 gives the smooth version).
- Step 2: the Plancherel forms on X pull back to X<sub>Θ</sub>, where the torus action separates the spectrum.

**Theorem (Ichino–Ikeda; Theorem 6.4.1).** Let (H, G) be as in the Gross–Prasad conjecture and Π a tempered representation of G. The form on Π ⊗ Π̃ given by integrating matrix coefficients over H is non-zero if and only if Π is H-distinguished.
- This is the "strongly tempered" case, where Ǧ<sub>X</sub> = Ǧ and Theorem 6.2.1 gives a full Plancherel formula.

**Conjecture (global; Section 17).** When the squared period |∫<sub>[H]</sub> φ|<sup>2</sup> is Eulerian, it equals a non-zero rational number times the product over places of local Hermitian forms normalised by the Plancherel formula of X. The authors call this a guiding principle.

## Note, then ignore

- Split groups only. G is assumed split so that the dual group needs no Galois action. This is a simplification. Safe to skip on a first reading.
- Varieties with no dual group. The definition leaves out some cases, such as non-degenerate quadratic forms under GL<sub>n</sub>. The harmonic analysis still applies to them. Safe to skip.
- Axioms on Gaitsgory–Nadler. The distinguished morphism is proved to exist only for wavefront X and under assumed properties of the Gaitsgory–Nadler construction. Safe to skip.
- Measure class versus measure. Abstract theory gives only a class of Plancherel measures. Choosing one measure is what normalises the local forms in the global conjecture. Safe to skip at first.
- Two "Bernstein maps". Another paper uses the name for the smooth asymptotics map e<sub>Θ</sub>. Here it means the L<sup>2</sup> map ι<sub>Θ</sub>. Safe to skip.

## One next step

Open the paper at Section 1.6.1 and read the hyperboloid and cone example, about half a page.
