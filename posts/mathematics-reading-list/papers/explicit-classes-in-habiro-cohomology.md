source: https://arxiv.org/pdf/2505.19885
slogan: Replace factorials by q-factorials in a hypergeometric series, and you get an explicit class in the Habiro cohomology of a family of varieties.
basis: the introduction and the main theorem statements

## Before you start

This paper may raise a fear of standing on unfinished ground. Habiro cohomology is new, the authors work with a "naive" version, and the references point to theses still being written. It is fine to feel unsure which parts are settled. Let that feeling be there. If you want to see a cohomology theory through formulas you can type into a computer, this is the place. Enjoy the q-series first. Whether you reach the end matters less.

## The story

For a smooth variety, writing down de Rham classes is routine: you write differential forms. Habiro cohomology is meant to deform de Rham cohomology around every root of unity at once, and nobody had a way to write down classes in it. The authors found one by experiment. They expanded the 3D-index of the figure eight knot near q = 1 and saw periods of an elliptic curve as coefficients. Replacing the periods by their differential forms gave a power series in q − 1 with coefficients in H<sup>1</sup> of the curve. Its expansion near a 7th root of unity matched the first one after a Frobenius twist. That gluing became the definition. Two methods then produce such classes: q-deform a hypergeometric series, or push forward an element of a Habiro ring.

## Main definitions

**Habiro ring of an étale algebra (Definition 1.1).** Let R be an étale ℤ[λ]-algebra and fix compatible roots of unity ζ<sub>m</sub>. An element of H<sub>R</sub> is a family of power series f<sub>m</sub> in q − ζ<sub>m</sub>, one for each m ≥ 1, with coefficients in R[λ<sup>1/m</sup>, ζ<sub>m</sub>], that glue.
- Gluing: for every prime p, re-expanding f<sub>m</sub> around ζ<sub>pm</sub> gives the Frobenius twist φ<sub>p</sub> f<sub>pm</sub> in the p-adic completion.
- Frobenius: it comes from λ ↦ λ<sup>p</sup>, and exists for all but finitely many p.

**The module H(V) (Definition 1.2).** Let V be an R-module with Frobenius automorphisms for almost all p. Then H(V) is the set of families of series in q − ζ<sub>m</sub> with coefficients in V ⊗ R<sub>m</sub> ⊗ ℚ[ζ<sub>m</sub>] that converge p-adically for |q − ζ<sub>m</sub>|<sub>p</sub> &lt; 1 and glue in the same way. It is a module over H<sub>R</sub>.

**Naive Habiro cohomology.** For a smooth proper map X → B with B = Spec R, take V to be the relative de Rham cohomology H<sup>n</sup><sub>dR</sub>(X/B) modulo torsion. Its Frobenius comes from crystalline cohomology. Set H<sup>n</sup><sub>naiv</sub>(X/B) = H(V).

**Hypergeometric data.** A pair of rational vectors α, β of length n + 1 with common denominator N, under the paper's assumption (A). It gives a family X/B, a series <sub>n+1</sub>F<sub>n</sub>(α; β; λ), a Picard-Fuchs operator P, and a de Rham class ω with Pω = 0.

## Main results

**Theorem (classes from hypergeometric motives; Theorem 1.5).** Given hypergeometric data (α, β), the family ω<sub>q</sub> = (ω<sub>m</sub>), taken over m coprime to N, is an element of H<sup>n</sup><sub>naiv</sub>(X/B). Each ω<sub>m</sub> is a differential operator D<sub>m</sub> applied to the class ω, times a product of q-Beta factors.
- Step 1: show each ω<sub>m</sub> is p-adically meromorphic on |q|<sub>p</sub> = 1, by dividing the operators by P and using an explicit basis of solutions.
- Step 2: show the expansions at ζ<sub>m</sub> and ζ<sub>pm</sub> agree after a Frobenius twist.

**Theorem (q-Picard-Fuchs; Theorem 1.6).** The class ω<sub>q</sub> generates a q-holonomic submodule of H<sup>n</sup><sub>naiv</sub>(X/B). A q-difference equation that deforms the Picard-Fuchs equation annihilates it.

**Theorem (elements of Habiro rings; Theorems 1.11 and 1.13).** Two explicit families of q-hypergeometric series lie in Habiro rings of étale ℤ[t]-algebras.
- Case 1: a q-deformation of the rational function 1/(1 − Σ ± t<sup>α</sup>), over ℤ[t] with that function adjoined.
- Case 2: the symmetrised Nahm sum f<sub>A</sub>(t, q) f<sub>A</sub>(t, q<sup>−1</sup>) for a symmetric integer matrix A, over the ring R<sub>A</sub> cut out by the Nahm equations.

**Theorem (push-forward; Theorems 1.18 and 1.19).** Let ℤ[x, λ] → R be étale and ω a top form in x fixed by Frobenius. Then f ↦ [f ω] maps the convergent part of the Habiro ring of R to H<sup>N</sup><sub>naiv</sub>(X/B), where B is a localisation of Spec ℤ[λ]. Applied to Case 1 with a residue, it gives classes for one-parameter Calabi-Yau families.

## Note, then ignore

- "Naive" cohomology: the authors define their own version and only expect it to agree with Wagner's and Scholze's theory. Safe to skip on a first reading.
- Compatible roots of unity: ζ<sub>m</sub> is chosen so that ζ<sub>pm</sub> − ζ<sub>m</sub> is p-adically small, which differs from exp(2πi/m). Safe to skip.
- Denominators: the series are not integral. Their p-adic valuations drop logarithmically, which still allows convergence. Safe to skip.
- The Gamma-value normalisation in the q-Beta factor: it is needed to make the classes glue, and it disappears for factorial-ratio examples. Safe to skip.
- Excess rank: for the figure eight family the q-difference equation has order 6, while Picard-Fuchs has order 2. The authors call this mysterious. Safe to skip.

## One next step

Open the paper and read only Section 1.2, "An experiment", which is two pages and shows where the definition came from.
