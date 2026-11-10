source: https://arxiv.org/pdf/2307.15106
slogan: Usual BV theory is the infinitesimal neighbourhood of one solution inside a global derived stack of all solutions, bundles and connections included.
basis: the introduction and the main theorem statements

## Before you start

One hundred and six pages, and the title stacks four adjectives on top of "stack": formal, derived, smooth, higher. Fatigue before page one is a fair reaction, and you may have it. Much of the paper is a careful build of a setting, which reads slowly. The pictures in the introduction carry the idea on their own. If you want to know what a BV complex is a shadow of, Figure 5 shows it. Look at the figures for fun. Whether you read further is up to you.

## The story

BV theory replaces the set of solutions of the field equations by a derived critical locus. In practice it does so only near one chosen solution: it records infinitesimal deformations and the Lie algebra of gauge symmetries. So it cannot tell a U(1) gauge theory from an ℝ gauge theory, and it misses magnetic charge, instantons and every other global feature. The authors want the whole space. The obstacle is that it must be four things at once: smooth and infinite-dimensional, stacky for gauge symmetry, derived for non-transverse intersections, and formal for infinitesimals. Their idea is to test spaces against "formal derived smooth manifolds" and to take stacks on those. Schreiber's differential cohesion then supplies infinitesimal neighbourhoods. The global Yang–Mills critical locus exists in this setting, and its formal disk at a solution is the usual BV complex.

## Main definitions

**Formal derived smooth manifold (Definition 3.9).** The (∞,1)-category dFMfd is the opposite of the (∞,1)-category of finitely generated homotopy C<sup>∞</sup>-algebras. A C<sup>∞</sup>-algebra is a ring on which every smooth function ℝ<sup>n</sup> → ℝ acts, as on C<sup>∞</sup>(M).
- Derived manifolds are the homotopically finitely presented ones (Proposition 3.8, from Carchedi–Steffens). The larger class also holds infinitesimally thickened points.

**Formal derived smooth stack (Definition 3.23).** A stack of ∞-groupoids on dFMfd with its étale topology. These form an (∞,1)-topos dFSmoothStack.
- Example: the mapping stack Bun<sub>G</sub>(M) = [M, BG] of principal G-bundles on M.

**Formal disk.** For a stack X there is a de Rham space ℑ(X), given by the infinitesimal shape modality, and a natural map X → ℑ(X). The formal disk D<sub>X,x</sub> at a point x: ∗ → X is the homotopy pullback of ∗ → ℑ(X) ← X.

**Derived critical locus (Definition 5.14).** For an action functional S on the sections Γ(M, E) of a bundle, RCrit(S)(M) is the homotopy pullback of the variational derivative δS and the zero section, both seen as maps into the sections of the vertical cotangent bundle.
- Yang–Mills (Definition 5.42): replace Γ(M, E) by the stack of G-bundles with connection on M.

## Main results

**Proposition (ordinary smooth stacks sit inside; Proposition 3.24).** There is an adjunction i ⊣ t<sub>0</sub> between smooth stacks and formal derived smooth stacks, with i fully faithful and t<sub>0</sub> preserving finite products.
- Consequence: derived intersections of ordinary smooth stacks truncate to their ordinary fibre products.

**Theorem (differential structure; Theorem 4.7).** The (∞,1)-topos dFSmoothStack carries a differential structure in Schreiber's sense: a quadruple of adjoint functors to a sub-topos of reduced objects. It induces three adjoint endofunctors, namely infinitesimal reduction ℜ, infinitesimal shape ℑ and infinitesimal flat &.
- Use: ℑ defines de Rham spaces, formal disks and jet bundles.

**Theorem (jets; Theorem 4.65).** For a base M, the formal disk bundle functor T<sup>∞</sup>M ×<sub>M</sub> (−) is left adjoint to the jet bundle functor Jet<sub>M</sub>, as endofunctors of the slice of dFSmoothStack over M.
- Step 1: write Jet<sub>M</sub> as pullback along M → ℑ(M) followed by its right adjoint.
- Step 2: chain the base change adjunctions.

**Claim (BV as a formal disk; Section 5).** The paper presents these as worked examples, not as numbered theorems. For a scalar field with potential V, V(0) = 0, the formal disk of RCrit(S)(M) at the zero solution is BL(M) for the usual local L<sub>∞</sub>-algebra L(M) (equation 5.2.13). For Yang–Mills, the formal disk at the trivial bundle with flat connection recovers the usual BV-BRST L<sub>∞</sub>-algebra (Remark 5.46 and the text after it).
- A point of the Yang–Mills derived critical locus is a global principal G-bundle with connection that satisfies ∇<sub>A</sub>⋆F<sub>A</sub> = 0.

## Note, then ignore

- Finitely generated versus finitely presented. Homotopical finite presentation excludes Weil algebras, so the authors widen the class of test objects. Safe to skip on a first reading.
- Model categories. Stacks are presented by a localised simplicial model category and its homotopy coherent nerve. This is bookkeeping for the (∞,1)-category. Safe to skip.
- Numbering in the overview. Section 0.2 cites "Proposition 3.21", but in the body of version 2 the same statement is Proposition 3.24. Safe to skip.
- Classical only. Quantisation is a stated goal, and Section 6 gives an outlook, not results. Safe to skip.
- Formal moduli problems. Proposition 4.42 gives them an infinitesimally cohesive structure and relates them to the new stacks. It supports the "formal disk" reading. Safe to skip.

## One next step

Open the paper at Figure 5 in Section 0.2 and read the caption and the paragraph around it. Then glance at diagram (0.2.13).
