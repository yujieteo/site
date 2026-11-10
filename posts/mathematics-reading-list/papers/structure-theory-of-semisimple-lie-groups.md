source: https://www.math.stonybrook.edu/~aknapp/pdf-files/1-27.pdf
slogan: Twenty-seven pages state the structure theory of semisimple Lie groups in order, so you see the route from root systems to G = KAN.
basis: the introduction and the main theorem statements

## Before you start

This article is a list of over forty theorems with almost no proofs. Each one points to Knapp's book "Lie Groups Beyond an Introduction". The likely feeling is the flat boredom of a reference text, with a worry underneath that reading statements without proofs is cheating. It is fine to feel both. If you want a map of Lie theory that fits in one sitting, this is one. Wander through it and stop where an example catches you.

## The story

The theory of semisimple Lie groups is long, and newcomers lose the thread among the lemmas. Knapp gives the thread alone, as a summary of his own book. It runs in four steps. First, a complex semisimple Lie algebra is fixed by its root system, a finite set of vectors. Second, its irreducible representations are labelled by highest weights, and the Weyl character formula gives their characters. Third, each complex algebra has a compact real form, and a compact group is governed by a maximal torus. For SU(n) that is the spectral theorem. Fourth, a noncompact group G splits around a subgroup K, as an invertible matrix splits in the polar decomposition. Then G = KAN.

## Main definitions

**Semisimple Lie algebra.** A finite-dimensional Lie algebra 𝔤 whose radical, the sum of all solvable ideals, is zero. Equivalently its Killing form B(X, Y) = Tr(ad X ad Y) is nondegenerate (Theorem 1.1).
- Semisimple Lie group: a connected Lie group whose Lie algebra is semisimple.

**Roots.** Let 𝔥 be a Cartan subalgebra of a complex semisimple 𝔤. The roots are the nonzero linear functionals α on 𝔥 for which the simultaneous eigenspace 𝔤<sub>α</sub> of ad 𝔥 is nonzero. Each 𝔤<sub>α</sub> has dimension 1, and 𝔤 is the direct sum of 𝔥 and the 𝔤<sub>α</sub> (Theorem 1.3).

**Cartan involution.** Let 𝔤₀ be a real semisimple Lie algebra with Killing form B. A Cartan involution is an involution θ of 𝔤₀ such that −B(X, θY) is positive definite. Its +1 and −1 eigenspaces give the Cartan decomposition 𝔤₀ = 𝔨₀ ⊕ 𝔭₀.
- For matrix algebras closed under conjugate transpose: θ(X) is minus the conjugate transpose of X.
- Existence: every 𝔤₀ has one, and any two are conjugate (Corollary to Theorem 4.2).

**Restricted roots.** Let 𝔞₀ be a maximal abelian subspace of 𝔭₀. The restricted roots are the nonzero functionals λ on 𝔞₀ with a nonzero simultaneous eigenspace in 𝔤₀. They form a root system. The sum of the eigenspaces for positive λ is a nilpotent subalgebra 𝔫₀.

## Main results

**Theorem (highest weight; Theorem 2.1).** Let 𝔤 be a complex semisimple Lie algebra with a chosen system of simple roots. Up to equivalence, its irreducible finite-dimensional representations correspond one-to-one to the dominant algebraically integral linear functionals λ on 𝔥. Here λ is the highest weight, and its weight space has dimension 1.
- Tools named in the article: the universal enveloping algebra, the Casimir element and Verma modules.
- Companion: every finite-dimensional representation is a direct sum of irreducibles (Theorem 2.2).

**Theorem (maximal torus; Theorems 3.6 and 3.7).** Let G be a compact connected Lie group and T a maximal torus. Any two maximal tori are conjugate, and every element of G is conjugate to an element of T.
- Consequence: the exponential map of G is onto.
- Consequence: the centre of G lies in every maximal torus.

**Theorem (global Cartan decomposition; Theorem 4.3).** Let G be a semisimple Lie group, θ a Cartan involution of its Lie algebra, and K the connected subgroup with Lie algebra 𝔨₀. Then the map K × 𝔭₀ → G, (k, X) ↦ k exp X, is a diffeomorphism onto G. The subgroup K is closed and contains the centre Z of G.
- Case Z finite: K is compact, and it is a maximal compact subgroup.
- Case Z infinite: K is not compact.

**Theorem (Iwasawa decomposition; Theorem 4.5).** Let G be a semisimple Lie group, and let A and N be the connected subgroups with Lie algebras 𝔞₀ and 𝔫₀. Then multiplication K × A × N → G, (k, a, n) ↦ kan, is a diffeomorphism onto G. The groups A and N are simply connected.
- Uniqueness: any two Iwasawa decompositions are conjugate (Theorem 4.6 and the remarks after it).

## Note, then ignore

- Subscript zero. Knapp writes 𝔤₀ for a real Lie algebra and 𝔤 for its complexification. That is the only reason for the subscripts. Safe to skip on a first reading.
- Algebraic and analytic integrality. A weight can be integral for the Lie algebra without lifting to the group. Half the sum of the positive roots fails to lift for SO(3). Theorem 3.10 compares the two notions. Safe to skip.
- Other forms in place of B. Section 4 lets a more general invariant form replace the Killing form. This prepares for reductive groups. Safe to skip.
- Lexicographic ordering. Positive roots are chosen by an ordering of the dual space. Any choice gives conjugate results. Safe to skip.
- Reductive groups and parabolic subgroups. The last pages define these and state the Bruhat and KAK decompositions. They belong to a second pass. Safe to skip.

## One next step

Open the article at page 22 and read Theorem 4.3 with the example after it, which says that part (c) is the polar decomposition of matrices.
