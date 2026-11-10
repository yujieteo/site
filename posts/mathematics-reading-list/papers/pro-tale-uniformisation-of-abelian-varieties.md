source: https://arxiv.org/pdf/2105.12604
slogan: A p-adic abelian variety is a perfectoid cover modulo its Tate module, and the cover does not change when the variety moves a little.
basis: the introduction and the main theorem statements

## Before you start

This paper speaks in diamonds, v-sheaves and perfectoid groups from its second page. That can raise a quiet shame at not knowing the background. You can let that feeling be there. Nothing needs to be fixed first. If you want a p-adic answer to "what replaces ℂ<sup>g</sup>/Λ?", the introduction gives one in plain terms. Read it for the pleasure of the analogy. Getting through the proofs can wait, or never happen.

## The story

A complex abelian variety is ℂ<sup>g</sup>/Λ. The cover ℂ<sup>g</sup> is the same for every abelian variety of dimension g. Only the lattice changes. Over a p-adic field K, Raynaud's uniformisation writes A = E/M, with E an extension of a good-reduction abelian variety B by a torus T. But E changes with A. If A has good reduction then E = A, and nothing has been uniformised. Heuer takes instead the tower of multiplication-by-p maps. Its limit Ã is a perfectoid space, and A = Ã/T<sub>p</sub>A as a diamond. The surprise is how few covers Ã there are. Over ℂ<sub>p</sub>, the cover depends only on the reduction up to isogeny and on the rank of the torus. So nearby abelian varieties share one cover, as over ℂ.

## Main definitions

**Abeloid variety and Raynaud extension.** An abeloid variety over K is a connected smooth proper rigid group variety, the rigid analogue of a complex torus. Here K is complete, algebraically closed and non-archimedean, of residue characteristic p. Each abeloid A is a quotient E/M, where 0 → T → E → B → 0 has T a rigid torus of rank r, B of good reduction, and M ≅ ℤ<sup>r</sup> a discrete lattice in E(K).
- The semi-stable reduction of A is the special fibre of the formal model of E. It is a semi-abelian scheme over the residue field k.

**The p-adic universal cover Ã.** Ã is the inverse limit of A ← A ← A ← …, where every map is multiplication by p. It is a perfectoid space, and it is connected with vanishing higher v-cohomology of ℤ<sub>p</sub>.
- Uniformisation: A = Ã/T<sub>p</sub>A as v-sheaves, with T<sub>p</sub>A the p-adic Tate module.
- Adelic variant: take the limit over multiplication by all N. Then A is the cover modulo the full Tate module TA.

**Agreeing up to topological p-torsion.** A point x of a group G is topologically p-torsion if p<sup>n</sup>x → 0. Two maps f, g into G agree up to topological p-torsion if f − g lands in the subgroup of such points.

## Main results

**Theorem (covers over ℂ<sub>p</sub>; Theorem 1.1).** Let A and A′ be abeloids over K = ℂ<sub>p</sub> or its tilt, with Raynaud extensions built from (T, B) and (T′, B′). Then Ã ≅ Ã′ as perfectoid groups if and only if rk T = rk T′ and the special fibres of B and B′, over the algebraic closure of 𝔽<sub>p</sub>, are isogenous.

**Theorem (maps of covers of Raynaud extensions; Theorem 1.2).** For Raynaud extensions E and E′ with special fibres Ē and Ē′, there is a natural isomorphism Hom(Ẽ, Ẽ′) = Hom(Ē, Ē′)[1/p].
- Step 1: for good reduction, tilting gives a map from right to left. The hard part is to show every map of covers has a formal model. This is turned into a question about line bundles.
- Step 2: the extension class of Ẽ only remembers the reduction of the class of E, with p inverted. So many different E share a cover.

**Theorem (general K; Theorem 1.4, Corollaries 1.5 and 1.6).** Over any K as above, Ã ≅ Ã′ if and only if there are a p-isogeny Ē → Ē′ and an isomorphism M[1/p] → M′[1/p] that are compatible up to topological p-torsion. Hence the isomorphism class of Ã is locally constant on the Siegel moduli space A<sub>g</sub>(K) in the topology coming from K.
- Tate curves: the covers of 𝔾<sub>m</sub>/q<sup>ℤ</sup> and 𝔾<sub>m</sub>/q′<sup>ℤ</sup> are isomorphic if and only if q′ lies in (1 + 𝔪)·q<sup>ℤ[1/p]</sup>, where 𝔪 is the maximal ideal.
- Key lemma (Theorem 1.10): every homomorphism Ã → Ã′ restricts to a homomorphism Ẽ → Ẽ′, and the restriction determines it.

**Theorem (no extra maps; Theorem 1.9).** Any morphism of perfectoid spaces Ã → Ã′ over K is a homomorphism followed by a translation.

## Note, then ignore

- Diamond notation A<sup>♦</sup>. It marks the v-sheaf attached to a rigid space, which the paper needs to form quotients. The paper soon drops the symbol, and you can skip it on a first reading.
- Characteristic p. There the passage from rigid spaces to v-sheaves loses information, so the paper uses a perfection. Safe to skip at first.
- Almost mathematics. Some isomorphisms hold only "almost", in the sense of Gabber and Ramero. This is a technical tool in proofs and is safe to ignore.
- Conjecture 1.8 on curves. The paper conjectures the same local constancy for universal covers of curves of genus g ≥ 1. It is not proved for g ≥ 2. Note it as motivation and move on.
- The appendix on Ext groups of v-sheaves. It supports the proofs only. Skip it at first.

## One next step

Open the paper and read only Corollary 1.6 on Tate curves and Remark 1.7 after it.
