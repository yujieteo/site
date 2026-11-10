source: https://arxiv.org/pdf/1803.04063
slogan: Resolvent degree counts the variables a formula for roots needs, and it turns Hilbert's 13th problem into questions about lines on cubic surfaces.
basis: the introduction and the main theorem statements

## Before you start

This paper is about 60 pages and it does not solve Hilbert's 13th problem. That can bring a flat disappointment, or doubt about whether a paper without the big answer is worth an evening. Both reactions are fine to have. If you ever wondered what comes after "the quintic is not solvable by radicals", this paper gives the next question a precise form. Read the introduction for the fun of the 27 lines. The rest can wait.

## The story

Galois theory says: no formula in radicals for degree 5 and up. But Bring showed in 1786 that every quintic reduces, by radicals, to z<sup>5</sup> + az + 1. So a quintic is a one-parameter problem. Hamilton reduced degrees 6, 7, 8 to 2, 3, 4 parameters. Hilbert conjectured that these counts cannot be lowered. For decades nobody wrote down what "reduce to d parameters" means. Brauer did so in 1975. Farb and Wolfson take up his definition, resolvent degree, and widen it from polynomials to any finite cover, such as "a cubic surface together with one of its 27 lines". Classical geometry then links problems. Hilbert's conjectures become equivalent to statements about lines on cubics and bitangents of quartics. No lower bound above 1 is known for any problem.

## Main definitions

**Rational cover.** A dominant, generically finite rational map Y ⇢ X between irreducible varieties. The paper works in characteristic 0 throughout.
- Root cover: P<sub>n</sub> is the space of monic degree n polynomials, and its root cover is the set of pairs (P, λ) with P(λ) = 0, mapping to P<sub>n</sub>.
- Incidence variety: pairs (cubic surface, line on it) form a 27-sheeted cover of the moduli of smooth cubic surfaces.

**Essential dimension.** ed(Y ⇢ X) is the least d such that, over a Zariski open set of X, the cover is pulled back from a rational cover of a d-dimensional variety.

**Resolvent degree.** RD(Y ⇢ X) is the least d for which a tower of rational covers X<sub>r</sub> ⇢ … ⇢ X<sub>1</sub> ⇢ X<sub>0</sub> = X exists, each step of essential dimension at most d, with a dominant map X<sub>r</sub> ⇢ Y over X.
- Meaning: you may solve in several steps, and each step uses algebraic functions of at most d variables.
- Solvable in radicals implies RD = 1, since each radical is pulled back from the map z ↦ z<sup>d</sup> on ℙ<sup>1</sup>.

**Resolvent degree of a finite group.** The paper defines RD(G) as an invariant of G alone (Section 3). It equals RD(X → X/G) for any "versal" G-variety X. Versal means roughly that every G-variety is a pullback of X after allowed auxiliary covers.

## Main results

**Theorem (known upper bounds; Section 1.1 and 1.2, classical).** RD of the root cover of P<sub>n</sub> is 1 for n ≤ 5, and at most n − 4 for n > 5 (Bring, Hamilton). Brauer proved RD ≤ n − r once n ≥ (r − 1)! + 1.

**Conjecture (Hilbert).** RD of the root cover is 2 for n = 6 (Sextic Conjecture), 3 for n = 7 (the 13th Problem) and 4 for n = 8 (Octic Conjecture). All three are open. The paper proves none of them.

**Theorem (sextics and cubic surfaces; Theorem 1.12, abridging Theorem 8.1).** Hilbert's Sextic Conjecture holds if and only if finding all 27 lines on a smooth cubic surface, given an unordered double-six of lines, has resolvent degree 2. In fact the two resolvent degrees are equal. Theorems 8.3 and 8.4 give similar lists for degree 7 and degree 8.
- Step 1: show each cover in the list is versal for its Galois group, here S<sub>6</sub> and S<sub>2</sub> × S<sub>6</sub>, so its RD equals the RD of the group.
- Step 2: use Theorem 3.3. If a group contains all its Jordan-Hölder simple factors as subgroups, then its RD is the maximum of the RD of those factors.

**Theorem (lines and bitangents; Theorem 1.10).** Finding the 27 lines on a smooth cubic surface from its coefficients has the same resolvent degree as finding the 28 bitangents of a smooth plane quartic given one of them.
- Step 1: blow up the cubic surface at a point and project to the plane. This is a double cover branched along a smooth plane quartic.
- Step 2: the 27 lines map to bitangents of that quartic.

## Note, then ignore

- Accessory irrationalities. Resolvent degree lets you adjoin auxiliary algebraic functions along the way, and essential dimension does not. This is why ed of the quartic and quintic is 2 while RD is 1. Skip the fine print at first.
- Brauer's field-theoretic definition. The paper shows it agrees with the geometric one in Section 2.1. Safe to skip.
- Reducible varieties. A convention (2.2) extends the definitions to them. Skip it.
- Arnol'd and Kolmogorov. Their 1957 result shows there is no local topological obstruction. The global algebraic problem stays open. Note it and move on.
- The line-finding conjecture (Conjecture 1.9). The paper conjectures RD = 3 for the 27 lines and proves only the upper bound 3. Not needed for the main story.

## One next step

Open the paper and read only Example 1.8 and the paragraph under Figure 1: it finds all 27 lines from one line using a quintic.
