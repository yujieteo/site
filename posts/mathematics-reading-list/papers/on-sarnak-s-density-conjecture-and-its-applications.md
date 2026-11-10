source: https://arxiv.org/pdf/2004.00373
slogan: Counting lattice points gives a bound on bad representations, and that bound is enough to prove sharp results usually credited to Ramanujan-type conjectures.
basis: the abstract and introduction

## Before you start

The introduction defines four or five named properties in a row, each with its own inequality and exponent. The likely feeling is irritation, or a fear of losing track of which hypothesis implies which. That is normal here, and the authors answer it with a one-figure diagram. If you want to see how an out-of-reach conjecture gets replaced by a usable approximation, this is a clean case. Read the diagram for pleasure. The proofs are optional.

## The story

Take a semisimple group G over a local field and a tower of congruence lattices Γ<sub>N</sub> inside a lattice Γ<sub>1</sub>. One would like every non-trivial representation appearing in L<sup>2</sup>(Γ<sub>N</sub>\\G) to be tempered. This naive Ramanujan property is false in general in higher rank, and where it is expected it is usually out of reach. Sarnak proposed a substitute: non-tempered representations may occur, but rarely, and more rarely the further they are from tempered. Golubev and Kamber organise this idea. They set a spectral hypothesis (density) beside a geometric one (a count of lattice points in balls, going back to Sarnak and Xue) and prove implications between them. The payoff is optimal lifting: almost every pair of points in Γ<sub>N</sub>\\Γ<sub>1</sub> is joined by an element of Γ<sub>1</sub> that is as small as counting allows.

## Main definitions

**The exponent p(π) and the count M.** For an irreducible unitary representation π of G, p(π) is the infimum of p ≥ 1 such that a K-finite matrix coefficient lies in L<sup>p</sup>(G). Tempered means p(π) ≤ 2. For a cocompact lattice Γ, M(A, Γ, p) is the total multiplicity in L<sup>2</sup>(Γ\\G) of those π in the set A with p(π) ≥ p.

**Spherical Density Hypothesis (Definition 1.2).** In the p-adic or rank 1 case: for every ε > 0 there is C<sub>ε</sub> with M(spherical, Γ<sub>N</sub>, p) ≤ C<sub>ε</sub> [Γ<sub>1</sub> : Γ<sub>N</sub>]<sup>2/p + ε</sup> for all N and all p > 2.
- General Density Hypothesis: the same bound for every precompact set A of representations (Conjecture 1.1 predicts it for congruence towers in real groups).
- In the archimedean higher rank case the spherical version adds a polynomial factor in the Casimir eigenvalue.

**Weak Injective Radius Property (Definition 1.3).** Let l be the length on G given by the modular character through the Cartan decomposition, and let q be e or the residue field size. For y in Γ<sub>N</sub>\\Γ<sub>1</sub>, count the γ in Γ<sub>N</sub> with l(y<sup>−1</sup>γy) ≤ d. The property says the average of this count over y is at most about q<sup>d/2</sup>, up to [Γ<sub>1</sub> : Γ<sub>N</sub>]<sup>ε</sup>, for all d up to 2 log<sub>q</sub> of the index.

**Optimal Lifting Property (Definition 1.4).** For every ε > 0 and every Cartan direction a with l(a) ≥ (1 + ε) log<sub>q</sub>[Γ<sub>1</sub> : Γ<sub>N</sub>], all but a vanishing proportion of pairs (x, y) in Γ<sub>N</sub>\\Γ<sub>1</sub> are joined by some γ in Γ<sub>1</sub> whose Cartan part is within ε‖a‖ of a.

## Main results

**Theorem (geometry gives optimal lifting; Theorem 1.5).** If the sequence (Γ<sub>N</sub>) has a spectral gap and satisfies the Weak Injective Radius Property, then it has the Optimal Lifting Property. The lattices need not be cocompact.

**Theorem (density gives geometry; Theorem 1.6).** If (Γ<sub>N</sub>) is a sequence of cocompact lattices satisfying the Spherical Density Hypothesis, then it satisfies the Weak Injective Radius Property. With a spectral gap it then has optimal lifting.

**Theorem (geometry gives density, p-adic case; Theorem 1.8).** Let G be non-archimedean and the lattices cocompact. Then the Weak Injective Radius Property implies the density bound for representations with a vector fixed by each of a sequence of arbitrarily small compact open subgroups. So in the p-adic case the two properties are equivalent, and both give the General Density Hypothesis.
- Step 1: Reduce to explicit lower bounds on matrix coefficients (Proposition 3.9).
- Step 2: Prove those bounds from Bernstein's description of the Hecke algebra (Section 8).

**Theorem (archimedean partial results; Theorems 1.9 and 1.10).** For cocompact lattices, the Weak Injective Radius Property implies the Spherical Density Hypothesis when G has rank one, and in general implies the density bound for each single representation. The full implication in archimedean higher rank is left as Conjecture 1.7.

## Note, then ignore

- The parameter α. The body of the paper works with weakened versions carrying 0 &lt; α ≤ 1. Only α = 1 gives optimal lifting. Safe to skip on a first reading.
- "Very naive" versus "naive" Ramanujan. The first ignores the split into cusp forms and the rest. The distinction does not affect the theorems. Skip it.
- The choice of length l. In higher rank it differs from the one Sarnak and Xue used, to make the counting optimal. Skip it.
- Fell topology and precompact sets. These only make "bounded family of representations" precise. Skip them.
- Known cases. The geometric property is known for principal congruence subgroups of arithmetic lattices in SL<sub>2</sub>(ℝ) and SL<sub>2</sub>(ℂ), after Sarnak and Xue. Higher rank is mostly open.

## One next step

Open the paper and look at Figure 1.1 on page 6. Trace each arrow back to its theorem number.
