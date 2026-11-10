source: https://math.stanford.edu/~conrad/papers/luminysga3.pdf
slogan: Over any base scheme, a split reductive group is still classified by its root datum, so Chevalley's list of groups works over ℤ.
basis: the introduction and the main theorem statements

## Before you start

This is a 390-page reference with complete proofs, and it assumes the theory of reductive groups over an algebraically closed field before page 1. The feeling it invites is dread: a book that size looks like a duty. You can feel that and owe the book nothing. If you want to know why GL<sub>n</sub>, Sp<sub>2n</sub> and E<sub>8</sub> make sense over ℤ and not only over a field, three statements in § 6.1 say why. Look them up for fun.

## The story

Over an algebraically closed field, Chevalley classified connected reductive groups by a finite piece of combinatorics, the root datum. The answer does not depend on the field. That suggests the groups live over ℤ. SGA3 built this relative theory in the 1960s, at great length. Over a base scheme S the field tools fail: maximal tori need not exist globally, and quotients are hard to build. Conrad retells the theory with three later tools. Artin approximation turns formal lifts into étale-local ones. Algebraic spaces make quotients routine. The "dynamic method" builds parabolic subgroups and root groups from limits under a one-parameter subgroup. The classification comes out the same as over a field.

## Main definitions

**Reductive group scheme (Definition 3.1.1).** A reductive S-group is a smooth S-affine group scheme G → S whose geometric fibres are connected reductive groups. It is semisimple if the geometric fibres are semisimple.
- Torus: an S-torus is an S-group of multiplicative type with smooth connected fibres. Étale-locally on S it is a power of 𝔾<sub>m</sub>.

**Split (Definition 5.1.1).** A reductive group G over a non-empty S is split if it has a maximal torus T with an isomorphism to the diagonalisable group D<sub>S</sub>(M) of a finite free ℤ-module M, such that the roots and coroots come from elements of M and its dual, and each root space in the Lie algebra is free of rank 1 over O<sub>S</sub>.

**Root datum.** A split (G, T, M) gives a quadruple (M, Φ, M<sup>∨</sup>, Φ<sup>∨</sup>): the character lattice, the roots, the dual lattice and the coroots.

**Pinning (Definition 6.1.1).** A choice of positive system of roots, together with a trivialising section X<sub>a</sub> of the root space for each simple root a. It removes the freedom of conjugating by the torus, so isomorphisms can be compared with maps of root data.

## Main results

**Theorem (scheme of maximal tori; Theorem 3.2.6 and Corollary 3.2.7).** Let G → S be a smooth S-affine group scheme such that, in the identity component of each geometric fibre, maximal tori are their own centralisers. Then the functor sending an S-scheme S′ to the set of maximal tori of G over S′ is represented by a smooth quasi-affine S-scheme that surjects onto S. So a reductive group scheme has a maximal torus étale-locally on S, and any two maximal tori are conjugate étale-locally. The text calls this the engine of the relative theory.
- Step 1: lift a maximal torus from a fibre to a formal neighbourhood, then to an étale neighbourhood by Artin approximation.
- Step 2: identify the functor with the quotient G/N<sub>G</sub>(T) and descend.

**Theorem (Existence and Isogeny; Theorem 6.1.16).** Let S be a non-empty scheme. Every root datum is isomorphic to the root datum of a split reductive S-group. Suitable morphisms of root data between split reductive S-groups come from isogenies of the groups, unique up to the action of (T/Z<sub>G</sub>)(S). I have not stated the exact condition on the morphism of root data. See the source.
- Step 1: over ℂ, existence is proved in Appendix D.
- Step 2: the scheme-theoretic method carries it to ℤ, and so by base change to every S.

**Theorem (Isomorphism; Theorem 6.1.17).** Let S be a non-empty scheme. Sending a pinned split reductive S-group to its based root datum is an equivalence of categories, with isomorphisms as the morphisms. In particular a split reductive S-group is determined up to isomorphism by its root datum.

**Theorem (automorphism scheme; Theorem 7.1.9).** For a reductive group G over a non-empty S, the automorphism functor is represented by a smooth separated S-group Aut<sub>G/S</sub>. It sits in an exact sequence 1 → G/Z<sub>G</sub> → Aut<sub>G/S</sub> → Out<sub>G/S</sub> → 1 with Out<sub>G/S</sub> separated and étale over S.
- Split pinned case: Out<sub>G/S</sub> is the constant group of automorphisms of the based root datum, and the sequence splits as a semi-direct product.

## Note, then ignore

- Connected fibres. Over a field, "reductive" sometimes allows disconnected groups. Here connected fibres are part of the definition, because component groups can jump in families. Safe to skip on a first reading.
- fppf versus fpqc. Conrad's "multiplicative type" means finite type and split fppf-locally, a narrower notion than in SGA3. Appendix B shows that nothing is lost. Ignore it at first.
- Algebraic spaces. They appear inside a few constructions and are shown at once to be schemes. The introduction compares them to distributions in the theory of differential equations. You can treat them as a black box.
- Non-empty S and disconnected S. The text does not assume S is connected, since descent produces disconnected bases. That is why "split" needs conditions that are automatic over a connected base. Skip this.
- Less general than SGA3. Some results are proved under stronger hypotheses to reach the structure theory sooner, and some low-rank root system calculations are cited. This does not change the main theorems.

## One next step

Open the PDF at § 6.1 on page 196 and read only the statements of Theorems 6.1.16 and 6.1.17.
