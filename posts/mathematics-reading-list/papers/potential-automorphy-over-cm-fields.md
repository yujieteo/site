source: https://arxiv.org/pdf/1812.09999
slogan: Galois representations over CM fields can be matched to automorphic forms without any self-duality, so elliptic curves over CM fields obey Sato–Tate.
basis: the abstract and introduction

## Before you start

Ten authors, more than 200 pages, and a reputation as the hardest kind of number theory. The likely feeling is overwhelm, and under it the thought that this is not meant for you. Both may stay while you read. The introduction is eight pages and tells the whole plan in words. If you care why an elliptic curve over ℚ(i) has the same statistics as one over ℚ, the answer is sketched there. Enjoy the plot. Nobody reads this paper to the end in one go.

## The story

Wiles and Taylor showed how to prove that a Galois representation comes from an automorphic form: start from a congruence with a known case and lift. The method needed spaces with complex structure, Shimura varieties, and so it needed self-dual representations. An elliptic curve over an imaginary quadratic field has no such space. The automorphic forms live on locally symmetric spaces that are not algebraic varieties. Their cohomology spreads over several degrees and has torsion. Calegari and Geraghty proposed a derived form of the method, conditional on two conjectures. This paper proves enough of the first, by finding the cohomology of the bad space inside the boundary of a unitary Shimura variety and using a vanishing theorem of Caraiani and Scholze. It sidesteps the second with a new derived argument.

## Main definitions

**CM field.** A number field F that is a totally imaginary quadratic extension of a totally real field F<sup>+</sup>. Imaginary quadratic fields are the first examples.

**Automorphic and potentially automorphic.** A continuous representation ρ of the Galois group G<sub>F</sub> on an n-dimensional p-adic vector space is automorphic if it is isomorphic to the representation attached to a cuspidal automorphic representation π of GL<sub>n</sub> over the adeles of F. Here π must be regular algebraic for a Galois representation to be attached.
- Potentially: the restriction of ρ to G<sub>F′</sub> is automorphic for some finite extension F′ of F.
- For an elliptic curve E, "potentially modular" means this for the Galois representation on its Tate module.

**Locally symmetric space X<sub>K</sub>.** The quotient attached to GL<sub>n</sub> over F and a compact open subgroup K. For F imaginary CM it has no complex structure. Hecke operators act on its cohomology with p-adic and torsion coefficients, and Scholze attached Galois representations to the Hecke eigenclasses.

**Local-global compatibility.** The statement that Scholze's Galois representation, restricted to the decomposition group at a prime, has the shape predicted by the automorphic data there. At primes above p this means a condition from p-adic Hodge theory: Fontaine–Laffaille or ordinary.

## Main results

**Theorem (elliptic curves; Theorem 1.0.1).** Let E be an elliptic curve over a CM field F. Then E and all its symmetric powers are potentially modular. Consequently the Sato–Tate conjecture holds for E: for E without complex multiplication, the normalised traces of Frobenius are equidistributed in [−1, 1] for the measure (2/π)√(1 − t²) dt.
- Step 1: potential automorphy of every symmetric power gives each symmetric power L-function a meromorphic continuation, holomorphic and non-zero on the edge of convergence.
- Step 2: a criterion of Serre turns that non-vanishing into equidistribution.

**Theorem (Ramanujan in weight 0; Theorem 1.0.2).** Let F be a CM field and π a regular algebraic cuspidal automorphic representation of GL<sub>2</sub> over the adeles of F, of weight 0. Then π<sub>v</sub> is tempered at every prime v of F.
- The proof follows Langlands's old strategy: symmetric powers of π are potentially automorphic, and analytic bounds for Rankin–Selberg L-functions then bound the eigenvalues. No purity theorem from geometry is available here.

**Theorem (automorphy lifting; Theorems 6.1.1 and 6.1.2).** Let F be imaginary CM or totally real, and ρ an n-dimensional p-adic representation of G<sub>F</sub>, with no self-duality assumed. Suppose ρ is congruent mod p to an automorphic representation and satisfies a list of conditions. Then ρ is automorphic. I did not check every hypothesis. In the Fontaine–Laffaille case, 6.1.1, they include: ρ crystalline at places above p, p unramified in F, p > n², a small-weight bound, and a residual image that is "enormous" and "decomposed generic". Theorem 6.1.2 is the ordinary case.
- Step 1 (Sections 3 to 5): local-global compatibility. The cohomology of X<sub>K</sub> appears in the boundary of a Shimura variety for a unitary group in 2n variables. The Caraiani–Scholze theorem says that Shimura variety has cohomology only in the middle degree after localising.
- Step 2 (Section 6): patch whole complexes, not single cohomology groups, and run a derived version of Taylor's "Ihara avoidance". A complex mod p still remembers, through its Euler characteristic, whether it is non-zero after inverting p.

## Note, then ignore

- Nilpotent ideal. Scholze's Galois representations are defined over the Hecke algebra modulo a nilpotent ideal J of bounded exponent. The authors carry J through every argument. Safe to skip.
- Non-Eisenstein. Everything is localised at a maximal ideal whose residual representation is irreducible. This removes the other boundary strata. Safe to skip.
- Soluble base change. Several local conditions, such as F<sup>+</sup> ≠ ℚ and splitting of primes, fail for a given F. They hold after a soluble extension, and automorphy descends. Safe to skip.
- Vanishing conjecture not proved. The second Calegari–Geraghty conjecture, on mod p cohomology outside a range of degrees, stays open. The paper avoids it. Safe to skip.
- Only "potential". The curve becomes modular over some extension F′, found with a theorem of Moret-Bailly. Modularity over F itself is not claimed. Safe to skip.

## One next step

Open the paper and read only the first two paragraphs of Section 1 and Theorems 1.0.1 and 1.0.2, which fit on page 3.
