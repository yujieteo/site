source: https://people.mpim-bonn.mpg.de/scholze/Complex.pdf
slogan: Holomorphic functions can be found by algebra alone, and the classical theorems on compact complex manifolds then follow from local, formal arguments.
basis: the introduction and the main theorem statements

## Before you start

These are 147 pages of lecture notes by the two people who started the subject, and the middle lectures use ∞-categories freely. The feeling most likely to arrive is fear of being too slow for it. That fear is reasonable, and it can stay while you begin. If you have ever wanted complex analysis to feel like algebra, Lecture I is a five-page essay on that wish. Read it as an essay. The rest can wait.

## The story

Holomorphic functions on a disc are convergent power series, and their sheaf has no higher cohomology on discs. The usual proof integrates. Weierstrass wished for one resting on algebra. Clausen and Scholze grant it: start from polynomials and "formally adjoin" the right convergent sums. That needs topological vector spaces that form an abelian category. The classical ones do not: the identity from ℝ discrete to ℝ has zero kernel and cokernel but is no isomorphism. Condensed abelian groups repair that. Radon measures then fail as the notion of completeness, as the map x ↦ x log |x| on sequences shows. Liquid vector spaces, built from ℓ<sup>q</sup>-bounded measures with q &lt; p ≤ 1, succeed. Discs become open subsets of a spectrum of ℂ[T], and finiteness, duality and GAGA get local proofs.

## Main definitions

**Condensed abelian group.** A sheaf of abelian groups on profinite sets, for the topology whose covers are finite jointly surjective families. A topological abelian group M gives S ↦ Cont(S, M). These form an abelian category.

**p-liquid (Definition 2.13).** Fix 0 &lt; p ≤ 1. For a profinite set S, let M<sub>&lt;p</sub>(S) be the union over q &lt; p of the spaces of measures on S of bounded ℓ<sup>q</sup>-variation. A condensed abelian group V is p-liquid if every map of condensed sets S → V extends uniquely to a map of condensed abelian groups M<sub>&lt;p</sub>(S) → V.
- Meaning: you can integrate any continuous V-valued function against such a measure.

**Affinoid algebra (Definition 11.4).** A commutative algebra A in connective derived liquid vector spaces that admits a map from the functions on a closed polydisc making A pseudocoherent as a module over them.

**Complex analytic space (Definition 11.14).** A "categorified locale", that is a space X with a category C<sub>X</sub> of liquid quasi-coherent sheaves spread over it, that is locally an open subset of the one attached to an affinoid algebra.
- Maps: smooth means locally a projection from an open polydisc. Boundaryless means locally a Zariski closed immersion followed by a smooth map.

## Main results

**Theorem (finiteness; Theorem 12.18, Grauert's coherence theorem).** Let f : X → Y be a boundaryless proper map of complex analytic spaces. Then f<sub>\*</sub> : C<sub>X</sub> → C<sub>Y</sub> sends pseudocoherent complexes to pseudocoherent complexes.
- Step 1: f<sub>\*</sub> preserves nuclear objects, by covering X with finitely many affinoids.
- Step 2: f<sub>\*</sub> preserves pseudocompact objects. Pseudocoherent means nuclear and pseudocompact.

**Theorem (Serre duality; Theorem 13.6).** For a smooth map f : X → Y of relative dimension d between complex analytic spaces, there is a natural isomorphism f<sup>!</sup>M ≅ f\*M ⊗ Ω<sup>d</sup><sub>X/Y</sub>[d] of functors C<sub>Y</sub> → C<sub>X</sub>.
- Proper case, Y a point: the dual of RΓ(X, M) is RΓ(X, M<sup>∨</sup> ⊗ Ω<sup>d</sup>) shifted by d, for all liquid quasi-coherent M.
- Non-proper case: the same holds with compactly supported cohomology on the left.

**Theorem (GAGA; Theorems 6.9 and 13.10).** For a proper scheme X of finite type over ℂ, the comparison functor from the algebraic category C(X) of liquid quasi-coherent sheaves to the analytic one is an equivalence. It restricts to an equivalence between pseudocoherent complexes on X and on X<sup>an</sup>.
- Step 1: prove the statement for the large categories, in an axiomatic setting, using the valuative criterion.
- Step 2: identify the coherent objects inside as the discrete pseudocompact ones.

**Theorem (Grothendieck–Riemann–Roch; Theorem 14.9).** On compact complex manifolds there is a multiplicative Chern character from K<sub>0</sub> of perfect complexes to Hodge cohomology. For a map f : X → Y of compact complex manifolds, ch(f<sub>\*</sub>c) · Td(T<sub>Y</sub>) = f<sub>\*</sub>(ch(c) · Td(T<sub>X</sub>)). With Y a point this is Hirzebruch–Riemann–Roch.
- Step: factor the Chern character through Hochschild homology, which has its own pushforward.

## Note, then ignore

- The cut-off cardinal κ. Profinite sets are not a small category, so the notes define κ-condensed sets and take a colimit over κ. It is bookkeeping. Safe to skip on a first reading.
- The choice of p. Every category of sheaves depends on the fixed p in (0, 1], but the category of complex analytic spaces does not. Safe to skip.
- Non-convexity. For p &lt; 1 the ℓ<sup>p</sup> balls are not convex, so standard functional analysis does not apply directly. The notes handle it. Safe to skip.
- Theorem 4.1. The notes compute liquid tensor products of spaces of holomorphic functions and then remark that the rest of the course probably does not use the result. Safe to skip.
- "Generalised" and derived. The spaces are allowed to be derived and non-reduced, which is why affinoid algebras live in a derived category. Safe to skip.

## One next step

Open the notes at Lecture I, read Theorem 1.1 and the two paragraphs after it, then jump to Problem 1.3 on page 9.
