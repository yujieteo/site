source: https://arxiv.org/pdf/2402.07343
slogan: Exponential integrals jump by integer rules as the parameter turns, and those rules explain why their divergent series still have analytic meaning.
basis: the introduction and the main theorem statements

## Before you start

The paper has about 170 pages and a contents list that runs from D-modules to Chern-Simons theory. Overwhelm is the likely feeling, and it is a fair response to a text the authors call one part of a programme too big for a book. Let it be there. If you want to know why a divergent series from physics can still carry exact information, the first ten pages already say why. Read those for pleasure. The rest can wait.

## The story

Take a holomorphic function f on a complex manifold X and study I(t) = ∫<sub>C</sub> e<sup>f/t</sup> vol. Physicists expand such integrals as power series in t, and the series usually diverge. People want to know what the divergent series still remembers. The authors look at the cycles C. Each critical point of f gives a cycle called a thimble, made of gradient lines of Re(f/t). As the argument of t turns, a thimble can sweep through another critical point, and the integral over it jumps by an integer multiple of another thimble integral. The list of all such jumps is a wall-crossing structure. The authors show that this structure is analytic, which means the jumps are given by convergent series. From this they deduce that the divergent expansions are resurgent.

## Main definitions

**Exponential integral.** For a smooth complex variety X, a regular function f, a holomorphic volume form vol and a suitable real cycle C, set I<sub>C</sub>(t) = ∫<sub>C</sub> e<sup>f/t</sup> vol for t ∈ ℂ with t ≠ 0. The cycle must make Re(f) proper and bounded above on its support, so the integral converges absolutely.
- Function case: the exponent is f. Sections 2.1 to 2.9.
- 1-form case: f is replaced by a closed holomorphic 1-form α, a multivalued function. Section 3.

**Thimble and Stokes ray.** For a Morse function f with distinct critical values z<sub>1</sub>, …, z<sub>k</sub>, the thimble at the critical point x<sub>i</sub> is the cycle swept out by gradient lines of Re(f/t) from x<sub>i</sub>. A Stokes ray is a ray ℝ<sub>&gt;0</sub>·(z<sub>i</sub> − z<sub>j</sub>) in the t-plane, with i ≠ j. The jumps happen when t crosses such a ray.

**Wall-crossing structure.** The collection of Stokes automorphisms, one for each Stokes ray, acting on the lattice spanned by thimbles. For families, the authors use a more general notion from their earlier work: a local system of stability data on a graded Lie algebra.

**Resurgent series.** A formal series φ = Σ c<sub>k</sub> t<sup>k</sup> is resurgent when its Borel transform Σ c<sub>k</sub> s<sup>k</sup>/k! converges near the origin and continues analytically along every path that avoids a countable set of points. This is endless continuation in the sense of Écalle.

## Main results

**Proposition (Betti to de Rham comparison; Proposition 2.7.1).** For a pair (X, f) over ℂ and any t ≠ 0, the global twisted de Rham cohomology at t is isomorphic to the global Betti cohomology at t tensored with ℂ. Exponential integrals are the matrix entries of this isomorphism.
- De Rham side: forms on X with the differential d + df∧ (Definition 2.2.1).
- Betti side: cohomology of X relative to a fibre of f far to the left, where Re(f) is very negative (Section 2.4).

**Claim (wall-crossing formula; Section 2.8).** Let f be Morse with distinct critical values, and let I<sub>i</sub>(t) be the integral over the i-th thimble. When the argument of t crosses the Stokes ray for the pair (i, j), I<sub>i</sub>(t) ↦ I<sub>i</sub>(t) + n<sub>ij</sub> I<sub>j</sub>(t). Here n<sub>ij</sub> ∈ ℤ is the intersection index of the two thimbles.

**Theorem (analyticity; Theorem 3.11.1 and Corollary 3.11.14).** Let α be a closed holomorphic 1-form, and suppose the Assumption of Section 3.8 holds. After extending scalars from ℚ to ℂ, the wall-crossing structure σ<sub>Betti</sub> is analytic in the sense of the authors' earlier paper on analytic wall-crossing structures. The abstract states the consequence: perturbative expansions of exponential integrals are resurgent.
- Step 1: deform the central charge to a rational one. There the wall-crossing transformations are matrix-valued rational functions (Section 4.4).
- Step 2: analyticity is an open and closed condition on the space of central charges, so it passes back to the original one.

**Conjecture (Chern-Simons; Conjectures 8.2.1 and 8.5.2).** The wall-crossing structure built from the perturbative expansions of complexified Chern-Simons theory on a 3-manifold is analytic. The expansion of the partition function at a non-trivial flat connection is resurgent. Part II of the paper gives a framework and evidence. It does not give proofs.

## Note, then ignore

- Three divisors. The compactification of X splits the boundary into a vertical divisor where f is infinite, a horizontal one where f stays finite, and a divisor D<sub>0</sub> that holds the boundary of C. They control critical points at infinity. Safe to skip on a first reading.
- The Assumption of Section 3.8. The main theorem needs a technical assumption on the gradient flow near the boundary. The authors conjecture that it always holds (Conjecture 3.8.1). Note it and move on.
- Local versus global cohomology. Each theory comes in a global version and a version near the critical locus, so there are four comparison maps. The diagram for 1-forms is still conjectural (Conjecture 4.7.1). The story needs only the global one at first.
- The Riemann-Hilbert correspondence. The authors say Fukaya categories and holonomic DQ-modules should be derived equivalent. This paper states it only vaguely and uses its shadow on cohomology. Safe to skip.

## One next step

Open the paper at Section 1.1, "Warming up: Morse theory in holomorphic setting", and read that one page. It contains the whole plot for a single Morse function.
