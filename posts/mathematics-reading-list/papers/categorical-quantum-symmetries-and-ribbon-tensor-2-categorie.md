source: https://arxiv.org/pdf/2501.08041
slogan: Module categories over a categorified quantum group form a ribbon 2-category, the kind of algebra that can label knotted surfaces in 4-space.
basis: the introduction and the main theorem statements

## Before you start

This paper is about 45 pages of coherence diagrams, written in a physicist's voice, and it rests on a companion paper you have probably not read. The likely feeling is distrust: am I missing rigour, or is it not there? That doubt is fair and you can keep it while you read. If you know how quantum groups give knot invariants, this is an attempt at the same game one dimension up. Read the introduction as a story, for interest. Nothing obliges you to check a single diagram.

## The story

Reshetikhin and Turaev label the strands of a framed link with representations of a quantum group. The representations form a ribbon category, and that structure is what makes the label rules respect the Reidemeister moves. Baez and Langford proposed the next step: surfaces knotted in 4-space, called 2-tangles, should be labelled by a braided 2-category with duals. Good examples are scarce. In a companion paper, Chen quantised a 4-dimensional "2-Chern-Simons" gauge theory on a lattice and found its symmetry is a Hopf category, a categorified quantum group. Here he studies its 2-representations: module categories over it. He shows they have a braiding, adjoints and duals, and a twist that plays the role of the ribbon element. The twist leads him to four grades of "framing" for an object.

## Main definitions

**Cobraided Hopf dagger category.** A linear monoidal category C̃ with a coproduct functor Δ̃: C̃ → C̃ ⊗ C̃, a counit and an antipode functor S̃. The cobraiding R̃ is a natural transformation from Δ̃ to its opposite. The dagger is an involution compatible with all of this (Definition 2.1).
- Role: Δ̃ gives tensor products of modules, R̃ gives the braiding, S̃ gives duals, the dagger gives adjoints.

**2Rep(C̃; R̃).** The 2-category of finite semisimple ℂ-linear module categories over C̃, with module functors and module natural transformations. It is enriched over 2-Hilbert spaces.

**Ribbon balancing.** For each object D, twist functors ϑ<sub>D</sub> and ϑ̄<sub>D</sub> built from the braiding and the duals. They are the 2-categorical version of the ribbon twist, with 2-morphisms recording how they cancel.

**Framing grades.** An object is fully framed, half-framed, unframed or self-dual according to how much of the twist data is trivialised (Definition 6.5 and Table 1). Unframed means the first Reidemeister move is trivialised.

## Main results

The paper works at the level of rigour of mathematical physics, and it depends on the companion paper for the Hopf category itself. I state the results as the paper does.

**Theorem (braiding; Theorem 3.1).** The 2-category 2Rep(C̃; R̃) is braided monoidal.

**Theorem (planar pivotality; Theorem 3.5).** The planar-unitary 2-representations form a planar-pivotal monoidal 2-category. This means each endomorphism category is pivotal.
- Step 1: the dagger gives every module functor an adjoint with fold 2-morphisms.
- Step 2: planar-unitarity makes left and right adjoint mates agree (Proposition 3.4).

**Theorem (duals in the Baez-Langford sense; Theorem 5.1).** With its planar-unitary braiding, 2Rep(C̃; R̃) is a "braided monoidal 2-category with duals". The paper warns that "duals" here means adjoints, not duals of objects.

**Claim (ribbon structure; Section 6.1, stated in the abstract).** With the twists ϑ, the 2-category is braided, planar-pivotal and lax rigid, and the paper calls this a ribbon tensor 2-category. I saw no single numbered theorem for this. Propositions 6.1, 6.3 and 6.4 supply the coherence 2-morphisms.

**Theorem (classical limit; Theorem 7.1).** At q = 1 the 2-category is pivotal in the strict sense of Douglas and Reutter. The introduction adds that it becomes symmetric and every object becomes unframed.

## Note, then ignore

- The lattice Γ. The Hopf category is built from a lattice, but Remark 2.4 says the structure does not depend on which one. Safe to skip on a first reading.
- Adjoint versus dual. Adjoints act on 1-morphisms and come from the dagger. Duals act on objects and come from the antipode. The paper keeps them apart with care. Safe to blur at first.
- Lax rigidity. Double duals are not strictly the identity, which is why the result is weaker than Douglas-Reutter pivotality away from q = 1. Safe to skip.
- Swallowtail and "swallowking" equations. These are coherence laws for folds and crossings of surfaces. They are needed for proofs only. Safe to skip.
- The 4-manifold invariant. The paper says a 4-dimensional invariant can "in principle" be built. It does not build one. Safe to skip.

## One next step

Open the paper at Section 1.1 and look at Table 1, the chart of four framing grades. Then read the paragraph under it.
