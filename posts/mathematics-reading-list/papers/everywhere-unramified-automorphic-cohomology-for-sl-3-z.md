source: https://dpollack.web.wesleyan.edu/papers/levelone.pdf
slogan: A computer search up to weight 120 finds no level 1 cusp forms on GL(3) except lifts from GL(2), so new ones may not exist.
basis: the full text

## Before you start

This paper is ten pages, and most of them describe how to row-reduce a matrix with 1.7 million rows. Expect a mild letdown: the main statement is a conjecture, and the evidence is a machine printing zero. That is a fair reaction. If you are curious how experimental number theory decides that "nothing found" means something, here is a short example. Read the first three pages for the question and the heuristic. The linear algebra can wait.

## The story

Objects over ℚ that are unramified at every prime are rare. Minkowski showed there are no such number fields, Fontaine no such abelian varieties. For automorphic forms, "unramified everywhere" means level 1. On GL(2) such cusp forms exist, starting with Ramanujan's Δ in weight 12. Taking the symmetric square moves each of them to GL(3). Does GL(3) have any level 1 cuspidal cohomology of its own? Ash and Pollack compute. They reduce H<sup>3</sup> of SL(3, ℤ) with coefficients W<sub>g</sub> to an explicit kernel modulo a prime, and row-reduce. For every g from 0 to 120 the dimension is exactly what the symmetric squares and the boundary account for. A size heuristic suggests a new form "ought" to have appeared near g = 14. They conjecture there are none at all.

## Main definitions

**The coefficient module W<sub>g</sub>.** The irreducible representation of GL(3, ℂ) with highest weight (2g, g, 0). It has dimension (g + 1)<sup>3</sup>. Up to a power of the determinant, these are the only coefficient modules for which SL(3, ℤ) can have cuspidal cohomology, because the module must be essentially self-dual.

**Cuspidal cohomology.** The subspace of H<sup>\*</sup>(SL(3, ℤ), V) represented by cuspidal automorphic differential forms on the symmetric space. A Hecke eigenclass in it determines a cuspidal automorphic representation of GL(3) over ℚ that is unramified at every prime.

**The symmetric-square part S(V).** The span of the cuspidal eigenclasses whose automorphic representation is the symmetric-square lift of a level 1 classical cusp form.
- Size: a cusp form of weight k lands in W<sub>k−2</sub>, and dim S(W<sub>g</sub>) = s<sub>g+2</sub>(1), the dimension of the space of level 1 cusp forms of weight g + 2.

## Main results

**Conjecture (Conjecture 1.1).** For every V, the cuspidal cohomology of SL(3, ℤ) with coefficients in V equals S(V). In words: every level 1 cohomological cuspidal automorphic representation of GL(3) over ℚ is, up to twist, a symmetric-square lift from GL(2).

**Theorem (a dimension test; Theorems 2.1 and 2.2).** Let p > 2g be prime and let W<sub>g</sub>(𝔽<sub>p</sub>) be the reduction of a lattice in W<sub>g</sub>. If g is even and dim H<sup>3</sup>(SL(3, ℤ), W<sub>g</sub>(𝔽<sub>p</sub>)) = 3·s<sub>g+2</sub>(1) + 1, then the cuspidal part of H<sup>3</sup>(SL(3, ℤ), W<sub>g</sub>) equals S(W<sub>g</sub>). If g is odd and that dimension is 0, then the cuspidal part is 0.
- Step 1: H<sup>3</sup> splits as cuspidal plus boundary cohomology, and for even g the boundary part has dimension at least 2·s<sub>g+2</sub>(1) + 1.
- Step 2: by universal coefficients, the dimension over 𝔽<sub>p</sub> bounds the dimension over ℂ from above.

**Theorem (computational result; Theorem 2.8).** The cuspidal part of H<sup>3</sup>(SL(3, ℤ), W<sub>g</sub>) equals S(W<sub>g</sub>) for 0 ≤ g ≤ 120. This is a machine computation, with p = 223 for g ≤ 111 and p = 281 after that.
- Step 1: identify the cohomology with the vectors v in W<sub>g</sub>(𝔽<sub>p</sub>) that transform by a sign under monomial matrices and satisfy v + v·h + v·h<sup>2</sup> = 0 for one fixed matrix h of order 3.
- Step 2: find that kernel by sparse row reduction, block by block along weight spaces.

**Claim (heuristic, not a theorem).** On GL(2), level 11 and weight 12 are the first cases with cusp forms, and the two computations have similar size. On GL(3), the first prime level with cuspidal cohomology is 53, a computation of size about 53<sup>2</sup>. Weight g has size about g<sup>3</sup>, so one would guess a first new form near g ≈ 14. None appears up to 120.

## Note, then ignore

- The determinant twist. Tensoring V with a power of det changes nothing for SL(3, ℤ), so the conjecture only needs the W<sub>g</sub>. Safe to skip on a first reading.
- Homology in place of cohomology. The programs compute H<sub>3</sub> and use a duality from an earlier paper. It is a convenience. Ignore it.
- The condition p > 2g. It keeps W<sub>g</sub>(𝔽<sub>p</sub>) irreducible and independent of the lattice. That is why the prime changes at g = 112. Note it and move on.
- Odd g returns zero. A week of computing that prints 0 is hard to trust. The authors check the code on a case where a mod 163 class is predicted for g = 53, and they find it. You can take the check on trust.
- Consequences for motives and Galois representations. Remarks 3 and 4 translate the conjecture, assuming Langlands's hypothesis and Fontaine-Mazur. These are conditional and do not affect the main line.

## One next step

Open the PDF and read page 1 and Conjecture 1.1 on page 2, then stop.
