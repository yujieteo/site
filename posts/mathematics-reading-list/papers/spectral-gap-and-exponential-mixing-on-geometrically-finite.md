source: https://arxiv.org/pdf/2001.03377
slogan: On a geometrically finite hyperbolic manifold, the gap between the two lowest Laplace eigenvalues sets the rate at which the geodesic flow mixes.
basis: the introduction and the main theorem statements

## Before you start

The first page already uses critical exponents, Burger–Roblin measures and complementary series representations. You may feel shame at not knowing the background, or a wish to close the file. Both are fine to feel. The statement itself is short: one number from the Laplacian controls how fast a flow forgets its starting point. If you like the idea that spectra govern dynamics, Theorem 1.1 is a clean case of it. Enjoy that one statement first. The representation theory can stay unread.

## The story

Take a hyperbolic manifold M = Γ\ℍ<sup>d+1</sup> and run the geodesic flow on its unit tangent bundle. When M has finite volume, the flow mixes exponentially fast, and the rate comes from the spectral gap of the Laplacian. People wanted the same for infinite volume, where M has funnels and perhaps cusps. Two things block this. The Liouville measure is infinite, so correlations decay to zero and must be rescaled. And earlier proofs needed either no cusps or a large critical exponent δ > d − 1, because of non-spherical representations. Edwards and Oh study matrix coefficients of every complementary series representation directly. They find that for the non-spherical ones the leading term vanishes on the vectors that matter. So the Lax–Phillips gap alone sets the rate, for every δ > d/2.

## Main definitions

**Geometrically finite, critical exponent.** Γ is a discrete subgroup of G = SO°(d+1, 1). It is geometrically finite if the unit neighbourhood of the convex core of M has finite volume. The critical exponent δ equals the Hausdorff dimension of the limit set of Γ.
- δ = d exactly when Γ is a lattice (finite volume).

**Lax–Phillips gap.** Let δ > d/2. The bottom eigenvalue of the Laplacian on L<sup>2</sup>(M) is λ<sub>0</sub> = δ(d − δ), and there are finitely many eigenvalues below d<sup>2</sup>/4. Write the next one as λ<sub>1</sub> = s<sub>1</sub>(d − s<sub>1</sub>) with d/2 &lt; s<sub>1</sub> &lt; δ. The gap is δ − s<sub>1</sub>.
- If there is no second eigenvalue below d<sup>2</sup>/4, set s<sub>1</sub> = d/2.

**BMS and BR measures.** The Bowen–Margulis–Sullivan measure m<sup>BMS</sup> is the measure of maximal entropy for the geodesic flow, built from the Patterson–Sullivan measure on the limit set. The Burger–Roblin measures m<sup>BR</sup> and m<sup>BR\*</sup> mix Patterson–Sullivan in one direction with Lebesgue in the other.

## Main results

**Theorem (mixing for Liouville; Theorem 1.1).** Let M be geometrically finite with δ > d/2, and set η = min{δ − s<sub>1</sub>, 1}. There is m > d(d+1)/2 such that for all ε > 0 and all ψ<sub>1</sub>, ψ<sub>2</sub> on T<sup>1</sup>(M) with finite Sobolev norm of degree m, as t → +∞,
e<sup>(d−δ)t</sup> ∫ ψ<sub>1</sub>(G<sup>t</sup>x) ψ<sub>2</sub>(x) dx = m<sup>BR</sup>(ψ<sub>1</sub>) m<sup>BR\*</sup>(ψ<sub>2</sub>) / m<sup>BMS</sup>(T<sup>1</sup>(M)) + O(e<sup>(−η+ε)t</sup>), with the error scaled by the two Sobolev norms.
- Step 1: decompose L<sup>2</sup>(Γ\G) into irreducible representations and bound each piece. The work lies in the complementary series U(υ, s).
- Step 2: expand their matrix coefficients (Theorem 1.4). For non-spherical U(υ, s) the leading term vanishes on M-invariant vectors (Corollary 1.5).

**Theorem (mixing for BMS; Theorem 1.2).** There are β > 0, depending only on η, and m such that correlations of bounded functions supported near the support of m<sup>BMS</sup> converge to the product of their m<sup>BMS</sup> integrals, divided by the total mass, with error O(e<sup>−βt</sup>) times C<sup>m</sup> norms.
- The paper states this as a known consequence of Theorem 1.1.

**Corollary (uniform over congruence covers; Corollary 1.3).** Let Γ be Zariski dense in an arithmetic subgroup G(ℤ), with a strong approximation condition on its lift to the spin cover. Then η and β can be chosen the same for all congruence covers Γ<sub>q</sub>\ℍ<sup>d+1</sup>, with q square-free and avoiding a finite set of primes.
- Input: the expander results of Bourgain–Gamburd–Sarnak and Golsefidy–Varjú give a uniform gap δ − s<sub>1</sub>(q).

## Note, then ignore

- The letter M. The paper uses M both for the manifold and for the subgroup SO(d) that fixes a unit vector. Context tells them apart. Safe to skip on a first reading.
- The cap η ≤ 1. The rate is min{δ − s<sub>1</sub>, 1}, not always the gap itself. The cap comes from the expansion of matrix coefficients. Remark 1.1 discusses when it can be relaxed. Safe to skip.
- The Sobolev degree m. It is computable, of size O(d<sup>2</sup>), and independent of Γ. Its exact value plays no part in the story. Safe to skip.
- Torsion-free. Section 2 assumes Γ torsion-free so that M is a manifold. Safe to skip.
- Normalisation of measures. m<sup>BR</sup>, m<sup>BR\*</sup> and m<sup>BMS</sup> are scaled compatibly with dx, so the main term is well defined. Safe to skip.

## One next step

Open the paper and read only Theorem 1.1 and item (3) of Remark 1.1, which says in two lines what is new.
