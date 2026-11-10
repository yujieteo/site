source: https://arxiv.org/pdf/2607.10721
slogan: Modules over the ring of column-finite integer matrices give light solid abelian groups, so you can enter solid mathematics with plain ring theory.
basis: the introduction and the main theorem statements

## Before you start

The words "solid" and "condensed" may raise a quiet shame: a sense that there is a whole theory you were meant to learn first. You may feel that. The author wrote this note for exactly that reader, and says the results are not new to specialists. If you want topological abelian groups to behave like ordinary modules, this is a short road in. Read it for the fun of one concrete ring doing so much work. Finishing all 40 pages can wait.

## The story

Modules in non-Archimedean geometry carry a topology: they are complete and metrizable for a linear topology. Such groups form a category with a tensor product, but it is not abelian and it has no internal Hom. Clausen and Scholze fixed this by enlarging it to light solid abelian groups, defined inside condensed mathematics. Le Stum reaches the same category by another door. Take the ring M of infinite integer matrices whose columns are finite. A null sequence in a complete linear group is a column vector, and M acts on such vectors because the infinite sums converge. So each such group V gives an M-module V<sub>•</sub>. Left M-modules form an abelian category with a closed symmetric monoidal structure, and it is equivalent to light solid abelian groups.

## Main definitions

**The matrix ring M (Definition 1.1).** M is the set of matrices (c<sub>kn</sub>) with integer entries, indexed by ℕ × ℕ, such that each column has only finitely many non-zero entries. Multiplication is the usual matrix product. M is not commutative.
- ℤ<sub>•</sub> denotes finite column vectors, the free abelian group on e<sub>0</sub>, e<sub>1</sub>, … It is a left M-module, and M ≅ End<sub>ℤ</sub>(ℤ<sub>•</sub>) (Proposition 1.2).

**Null sequences (Definition 4.2).** For a topological abelian group V, V<sub>•</sub> is the set of sequences in V that tend to 0, written as column vectors. If V is a complete linear abelian group, meaning open subgroups form a basis of neighbourhoods of 0, then M acts on V<sub>•</sub>.

**Internal tensor product (Definition 2.1).** Let M<sup>⊗2</sup> be the module of three-index integer arrays that are finite in the first index. It has one left M-action and two commuting right M-actions. For M-modules P and N, set P ⊗<sub>ℤ•</sub> N := (M<sup>⊗2</sup> ⊗<sub>M</sub> P) ⊗<sub>M</sub> N, using the two right actions in turn. The unit is ℤ<sub>•</sub>.

**M-ring (Definition 6.1).** A monoid in the monoidal category of M-modules: an M-module A with an associative, unital map A ⊗<sub>ℤ•</sub> A → A.

## Main results

**Theorem (monoidal structure; Theorem 2.2).** The internal tensor product makes the category of left M-modules additive, closed and symmetric monoidal, with unit ℤ<sub>•</sub>. The category is abelian because it is a module category.
- Step 1: closedness holds because the tensor product preserves all colimits.
- Step 2: symmetry comes from an M-linear automorphism that swaps the two right structures on M<sup>⊗2</sup>.

**Theorem (embedding of topological groups; Propositions 5.6 and 5.7).** On complete metrizable linear abelian groups, the functor V ↦ V<sub>•</sub> is fully faithful and preserves quotients. On complete linear abelian groups it is lax monoidal.
- Step 1: an adjunction (Proposition 5.5) relates maps out of an M-module to continuous maps into V.
- Step 2: for metrizable complete V, the topology on V<sub>•</sub> equals its canonical topology as an M-module (Corollary 5.3), which gives full faithfulness.

**Theorem (finitely presented modules; Theorem 3.6, Corollary 3.8).** A finitely presented M-module has projective dimension at most one. The ring M is left coherent.

**Theorem (comparison with Clausen and Scholze; Theorem 7.9, Corollary 7.10).** A functor P ↦ P<sup>cond</sup> gives an equivalence between M-modules and light solid abelian groups. It also matches M-rings with light solid rings.
- Step 1: all the functors preserve colimits, so the check reduces to the single module M, which corresponds to the solid group ℤ<sup>ℕ</sup>.
- Step 2: this rests on a theorem of Clausen and Scholze (Theorem 7.11), which the paper quotes.

## Note, then ignore

- Column-finite versus row-finite. Transposition identifies the opposite ring of M with row-finite matrices, so right M-modules are left modules over those. Safe to skip on a first reading.
- The Weyl algebra analogy. The introduction compares M with the ring of differential operators, with the shift matrix t in the role of d/dx. It guides intuition and proves nothing. Safe to skip.
- Notation for sums. The author writes V · I for a direct sum of copies of V, to avoid a clash with polynomial rings. Safe to skip once noted.
- "Light". It means that only metrizable compact spaces are used on the condensed side. This explains why index sets must be countable. Safe to skip.
- Lax, not strong. Proposition 5.7 gives a comparison map V<sub>•</sub> ⊗ W<sub>•</sub> → (V ⊗̂ W)<sub>•</sub>. The paper proves it is an isomorphism in special cases, such as ℚ<sub>p</sub>-Banach spaces (Proposition 6.6). Safe to skip.

## One next step

Open the paper at Definition 1.1 on page 4 and read to Proposition 1.2, looking at the picture of M and ℤ<sub>•</sub> as matrices.
