source: https://arxiv.org/pdf/2509.24902
slogan: Take the trace of Frobenius on a category of sheaves and you get automorphic functions, so geometric Langlands answers the classical question.
basis: the introduction and the main theorem statements

## Before you start

This is an ICM plenary write-up, and it leans on a long series of papers and on higher category theory from the first page. The feeling likely to come up is fear of being out of your depth by page 2, where DG categories and prestacks arrive without definition. You can let that be so. Section 1 follows one clear line of thought and can be read as a story with black boxes. If you want to know what the Langlands programme over function fields now asks for, this is a current map. Go for the pleasure of seeing the shape.

## The story

Langlands asked for a description of automorphic functions in terms of Galois-type data for the dual group Ǧ. Over a function field, automorphic functions are functions on the 𝔽<sub>q</sub>-points of Bun<sub>G</sub>, the stack of G-bundles on a curve X. Geometric Langlands replaces functions by sheaves on Bun<sub>G</sub> and proves an equivalence of categories. Two things then block the return to functions. The trace of Frobenius on all sheaves is not the space of functions, and nobody knows the right stack of local systems for all sheaves. The fix is one move: keep only sheaves with nilpotent singular support. For that subcategory the trace is the space of functions, and the spectral side is a stack of local systems "with restricted variation". Gaitsgory then proposes the same three-step plan one categorical level up, for local and ramified statements.

## Main definitions

**Shv<sub>Nilp</sub>(Bun<sub>G</sub>).** The full subcategory of ℓ-adic sheaves on Bun<sub>G</sub> whose singular support lies in the global nilpotent cone inside T<sup>\*</sup>Bun<sub>G</sub>, the space of Higgs bundles. Equivalently, the sheaves on which every Hecke functor produces something lisse along X.

**LS<sup>restr</sup><sub>Ǧ</sub>(X).** The derived prestack whose R-points are right t-exact symmetric monoidal functors from Rep(Ǧ) to R-modules in sheaves on X. It is a formal algebraic stack. In the Betti and de Rham settings it is a disjoint union of formal completions of the usual stack of local systems along the loci with fixed semi-simplification.

**Categorical trace.** For a dualisable DG category C with an endofunctor F, the vector space Tr(F, C) obtained by composing the unit and counit of the duality. For F = Frobenius pullback, a sheaf with a Weil structure has a class in the trace. The same construction on a 2-category gives a category.

**AGCat.** A symmetric monoidal 2-category, suggested by Drinfeld, whose objects assign to each affine scheme S a module category over Shv(S), with pullbacks and pushforwards. It exists because Shv(Y) ⊗ Shv(Y′) → Shv(Y × Y′) fails to be an equivalence for ℓ-adic sheaves, and AGCat is built to repair this.

## Main results

**Theorem (trace isomorphism; Theorem 1.2.3).** Let G and X be defined over 𝔽<sub>q</sub>. The local-term map from Tr(Frob, Shv<sub>Nilp</sub>(Bun<sub>G</sub>)) to compactly supported functions on Bun<sub>G</sub>(𝔽<sub>q</sub>) is an isomorphism. The source cited is the series by Arinkin, Gaitsgory, Kazhdan, Raskin, Rozenblyum and Varshavsky.

**Conjecture (restricted geometric Langlands; Conjecture 1.4.4).** There is an equivalence Shv<sub>Nilp</sub>(Bun<sub>G</sub>) ≃ IndCoh<sub>Nilp</sub>(LS<sup>restr</sup><sub>Ǧ</sub>(X)), compatible with the action of QCoh(LS<sup>restr</sup><sub>Ǧ</sub>(X)) on both sides. The survey says it is proved when the ground field has characteristic 0, and for G = GL<sub>n</sub> over any field.
- Proved in general (Theorem 1.4.6): the same equivalence with LS<sup>restr</sup> replaced by a union of some of its connected components.

**Corollary (automorphic functions; Corollary 1.5.8).** Assume Conjecture 1.4.4. Then the space of unramified automorphic functions is canonically the global sections of the dualising sheaf on LS<sup>arithm</sup><sub>Ǧ</sub>(X), the Frobenius-fixed points of LS<sup>restr</sup><sub>Ǧ</sub>(X). The proved version uses the smaller union of components.
- Step 1: take Tr(Frob) of both sides of the equivalence.
- Step 2: the trace of IndCoh of a stack is sections of the dualising sheaf on the fixed-point stack.

**Conjecture (local theory; Conjectures 2.6.10 and 2.5.12, Corollary 2.7.9).** Restricted categorical representations of the loop group L(G) form a 2-category equivalent to a 2-category of ind-coherent sheaves of categories on local systems on the punctured disc. Its Frobenius trace is Shv(Isoc<sub>G</sub>). Together these give Shv(Isoc<sub>G</sub>) ≃ IndCoh of arithmetic local systems on the punctured disc, a statement first proposed by X. Zhu.

## Note, then ignore

- Ground field. Gaitsgory takes k algebraically closed for the geometry, and 𝔽<sub>q</sub>-structures enter only when Frobenius does. This is a bookkeeping convention. Safe to skip on a first reading.
- IndCoh versus QCoh. The stack of local systems is quasi-smooth, not smooth, so ind-coherent sheaves with a singular support condition replace quasi-coherent ones. Safe to skip.
- Square root of the canonical bundle. The Langlands functor depends on this choice, and it must be Frobenius-equivariant. Safe to skip.
- Dualising sheaf versus structure sheaf. On LS<sup>arithm</sup> they agree on the quasi-smooth locus and differ elsewhere. The gap is tied to non-tempered phenomena. Safe to skip at first.
- "Restricted". The word has a technical meaning (a Künneth property for sheaves) used to cut 2-categories down to size. Safe to skip.

## One next step

Open the PDF and read Sect. 1.1.1 and 1.1.2: the two goals and the "obvious" strategy. It is half a page.
