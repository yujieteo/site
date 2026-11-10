source: https://lebras.perso.math.cnrs.fr/Notes_workshop_all.pdf
slogan: One analytic stack of norms lies over every prime and the real place at once, which gives Arakelov geometry a single space to work on.
basis: the introduction and the main theorem statements

## Before you start

These are 85 pages of workshop notes from eleven talks by six speakers, with proofs given as sketches. The likely feeling is restlessness: the thread changes every few pages and nothing is fully proved. That is a normal response to such notes, and it can come along. The notes do show, in one picture, how the primes and the real numbers fit on one space. Look at the picture for its own sake. Reading every talk is not the point.

## The story

On a projective curve all points are alike. On Spec ℤ the primes are points, but the real absolute value is missing. Arakelov geometry repairs this by hand. It adds a Hermitian norm to a vector bundle over ℤ and gets real-valued invariants such as heights and Arakelov degrees. The two halves stay separate. The workshop asks whether Clausen and Scholze's analytic stacks can hold both. Solid modules handle ℤ and ℚ<sub>p</sub> but give zero on ℝ, because real null sequences need not be summable. Weaken the demand: ask only that (x<sub>n</sub>/2<sup>n</sup>) be summable. This gaseous condition works over ℝ, and a version with a variable q specialises to both ℝ and ℚ<sub>p</sub>. From it one builds the stack of norms, which maps onto an enlarged Berkovich spectrum of ℤ.

## Main definitions

**Hermitian vector bundle (Definition 1.8).** For a separated scheme X of finite type over ℤ, a pair (E, ‖·‖) of a vector bundle E on X and a smooth Hermitian norm on the associated bundle over X(ℂ), compatible with complex conjugation.
- Over Spec ℤ: this is a Euclidean lattice, the analogue of a vector bundle on a projective curve.

**Analytic ring (Definition 2.14).** A condensed ring A together with a full subcategory D(A) of its derived category of condensed modules, the "complete" modules, closed under limits and colimits, closed under RHom from any module, and with a completion functor that preserves connective objects.
- Solid: M is solid if every null sequence in M is summable, made precise as "id − shift is an isomorphism on Hom(P, M)" (Definition 4.10).

**Gaseous module (Definition 4.22).** A condensed ℝ-module M such that id − ½·shift is an isomorphism on Hom(ℝ ⊗ P, M). Informally, null sequences become summable after geometric damping. The choice of ½ does not matter. These define the analytic ring ℝ<sub>gas</sub>.

**Norm on an analytic ring (Definition 10.2).** A map N from the projective line over A to the Betti stack of the interval [0, ∞], subject to conditions that encode N(0) = 0, N(x<sup>−1</sup>) = N(x)<sup>−1</sup>, N(xy) = N(x)N(y), and a comparison with the unit disc. Think of it as a family of closed discs of each radius. The stack of norms 𝒩 is the analytic stack whose maps from AnSpec(A) are the norms on A (Definition 10.8).
- No triangle inequality is imposed (Remark 10.7).

## Main results

The notes give proof sketches only, so read each item as "stated in the talk".

**Proposition (product formula; Proposition 3.5).** For a number field K and q in K<sup>×</sup>, the Arakelov degree of the Arakelov divisor of q is zero. The finite places contribute Σ v<sub>p</sub>(q) log N(p) and the complex embeddings contribute −log |σ(q)|.

**Theorem (GAGA; Theorems 7.15 and 7.16).** If X is a proper scheme over ℂ, the analytic stack X<sup>an</sup>, glued from overconvergent functions on compact Stein pieces with the gaseous structure, is isomorphic to the base change of the algebraic X to ℂ<sub>gas</sub>. So the two derived categories of quasi-coherent sheaves agree.
- Step 1: for the projective line, the functions on |T| ≤ 1, |T| ≥ 1 and |T| = 1 are idempotent algebras over ℂ<sub>gas</sub>[T] with the expected tensor product.
- Step 2: these pieces form a !-cover of the affine line over ℂ<sub>gas</sub>, so the line is glued from them.

**Theorem (norms with a small element; Theorem 10.15).** For an analytic ring A, pairs of a norm N on A and an element q of A with N(q) in (0, 1) correspond to maps from AnSpec(A) to AnSpec(ℤ[q̂<sup>±1</sup>]<sub>gas</sub>) × (0, 1).

**Theorem (shape of the stack of norms; Theorem 10.16).** Evaluating norms on the integers maps 𝒩 onto the extended Berkovich spectrum of ℤ. This is the usual tree, with a branch for each prime and an archimedean branch, where the archimedean branch is continued past the usual absolute value.
- Over the open p-adic branch the stack is AnSpec(ℚ<sub>p,gas</sub>) × (0, 1).
- Over the open archimedean branch it is AnSpec(ℝ<sub>gas</sub>) × (0, 1).

## Note, then ignore

- Light condensed sets. The notes use sheaves on metrisable profinite sets only and then drop the word "light". It makes the free group on a convergent sequence internally projective (Proposition 2.11). Safe to skip on a first reading.
- Two definitions of analytic ring. Talk 2 gives a derived definition and Talk 4 an abelian one, and the notes explain how to pass between them. Safe to skip.
- Gaseous ℚ<sub>p</sub>. Setting q = p gives ℚ<sub>p,gas</sub>, which differs from the solid ℚ<sub>p</sub>. The notes say it is good enough for non-archimedean geometry. Safe to skip.
- The extended branch. On the extra segment of the archimedean branch the triangle inequality holds only up to a constant (Lemma 10.19). Safe to skip.
- Unknown fibres. The notes say the fibres of 𝒩 over the central vertex and over the limit points are not well understood. Safe to skip.

## One next step

Open the notes at Section 10.3 (page 71) and look at Figures 1 and 2, the Berkovich spectrum of ℤ and its extension.
