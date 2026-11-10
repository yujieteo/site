source: https://arxiv.org/pdf/1507.06297
slogan: Complex conjugation and the fermion sign both come from the Galois theory of ℝ, so positivity alone forces unitarity and spin-statistics.
basis: the introduction and the main theorem statements

## Before you start

This paper asks you to hold bordism categories, schemes over ℝ, stacks and bicategories at once, in 26 pages. A likely feeling is the dread of looking up one definition and finding five more behind it. That dread is welcome to stay. It does not have to be argued with. If you have ever asked why fermions are the particles of half-integer spin, the table on page 3 gives a one-line answer. Enjoy the table and Section 1. Sections 2 to 4 are there if you still want them.

## The story

The spin-statistics theorem of physics says that in a unitary quantum field theory, particles of half-integer spin are fermions. Its usual proof needs analysis on Minkowski space. Johnson-Freyd wants a version for topological field theories, which are functors from bordisms to vector spaces. The block is that "Hermitian" mixes the source and the target: reversing orientation has to match complex conjugation. His idea is to let the structures on a manifold form a scheme over ℝ, not a set. Orientations are a ℤ/2-torsor. Over Spec(ℝ) there is exactly one other ℤ/2-torsor, namely Spec(ℂ) with conjugation, and it gives Hermitian theories. One categorical level up, the same argument runs with spin structures and with super vector spaces in place of ℂ. A positivity condition then selects the twisted torsor at both levels.

## Main definitions

**Topological local structure.** A sheaf G on the site of d-manifolds and local diffeomorphisms, with values in a category X, that sends isotopic maps to equal maps. By Lemma 1.1, for d ≥ 1 such a G is the same as the object G(ℝ<sup>d</sup>) of X with a ℤ/2-action.
- Orientations: X is sets and the object is ℤ/2 acting on itself.
- Hermitian structures: X is schemes over ℝ and the object is Spec(ℂ) with complex conjugation. Then Her(M) = Or(M) ×<sub>ℤ/2</sub> Spec(ℂ).

**G-structured field theory.** For G valued in schemes over ℝ, a lift of the bordism functor M ↦ G(M) from spans of schemes to spans of schemes with quasicoherent sheaves (Definition 1.4). For G = Or this is an ordinary oriented theory with values in real vector spaces.

**Reflection-positive.** An unstructured theory Z is reflection-positive if, for every closed (d−1)-manifold N, the symmetric pairing Z(N) ⊗ Z(N) → ℝ given by the bent cylinder on N is positive-definite (Definition 1.9). A structured theory is reflection-positive if the unstructured theory obtained by integrating over the structure is.

**Categorified field.** A non-zero finite-dimensional symmetric monoidal ℝ-linear presentable category C such that every map from C to a non-zero such category is faithful and injective on isomorphism classes (Definition 2.5). It is algebraically closed if every such non-zero finite-dimensional category maps to it.

## Main results

**Theorem (positivity forces Hermiticity; Theorem 0.2).** Every unextended étale-locally-oriented reflection-positive field theory is Hermitian. "Étale-locally-oriented" means the structure becomes isomorphic to Or after base change to ℂ. There are exactly two such structures, Or and Her.
- Step 1: for an oriented theory Z, integrating out the orientation gives Z(N) ⊕ Z(N)<sup>∗</sup> with the obvious symmetric pairing.
- Step 2: that pairing is not positive-definite, so only Her survives.

**Theorem (categorified closure of ℝ; Theorems 2.7 and 2.11, Lemma 2.13).** The category of complex super vector spaces is the unique finite-dimensional algebraically closed categorified field over ℝ. The extension from real vector spaces to it is Galois, with categorified Galois group ℤ/2 × B(ℤ/2).
- Step 1: uniqueness is Deligne's theorem on the existence of super fibre functors, reproved here with small changes.
- Step 2: the two factors act by complex conjugation and by the fermion sign (−1)<sup>f</sup>.

**Theorem (topological spin-statistics; Theorem 0.1).** Every once-extended étale-locally-spin reflection-positive topological field theory is Hermitian, hence unitary, and satisfies spin-statistics. "Once-extended" means defined in codimensions 0, 1 and 2, with values in algebras and bimodules.
- There are exactly eight étale-locally-spin structures. One is distinguished, because the 1-type of O(d) is also ℤ/2 × B(ℤ/2) when d ≥ 3.
- In the distinguished one, orientation reversal acts by conjugation and the 360° rotation acts by (−1)<sup>f</sup>.

**Conjecture (Conjecture 0.4).** There is an infinitely categorified commutative algebra in which the absolute Galois group of ℝ is O(∞).

## Note, then ignore

- Two meanings of "field". The noun alone means a field in algebra. "Field theory" means the physics object. Remark 0.3 fixes this. Safe to skip.
- Hermiticity is a conclusion. The usual physics theorem assumes Hermiticity and derives spin-statistics. Here positivity gives both. Worth one glance, then move on.
- Positivity in codimension one. The paper tests reflection-positivity only on (d−1)-manifolds, and says this disagrees with the definition of Freed and Hopkins. Safe to skip.
- Categorified étale topology. The author says its details are not yet worked out, and uses only base change to super vector spaces. Safe to skip.
- Fully extended theories. Corollary 4.8 extends Theorem 0.1 to them, but is proved only in outline. Safe to skip.

## One next step

Open the paper at page 3 and read only the two-row table that sets ℝ ⊂ ℂ beside real vector spaces inside complex super vector spaces.
