source: https://pi.math.cornell.edu/~dmehrle/notes/conferences/ytm2017/ytm2017-shipley-notes.pdf
slogan: Chain complexes are the same as modules over the spectrum Hℤ, so algebra sits inside topology and gains a base ring below ℤ.
basis: the introduction and the main theorem statements

## Before you start

The title joins two worlds, and the notes need model categories, spectra and simplicial objects all at once. The feeling to expect is "I do not have the background", with some shame attached. You can let that sit beside you while you read. These are lecture notes for young topologists, and they define everything from the simplicial set up. If you want spectra to feel like chain complexes, this is a friendly way in. Read the table on page 15 for pleasure before anything else.

## The story

Topologists noticed long ago that spectra behave like chain complexes: both can be shifted, both have a homotopy category with triangles. People wanted that analogy to be a theorem. The block was technical. For decades the smash product of spectra was associative and commutative only up to homotopy, so "module over a ring spectrum" had no strict meaning. Symmetric spectra and their relatives, from 1997 on, fixed that. With a strict smash product, the Eilenberg–Mac Lane spectrum Hℤ is a ring, and its modules turn out to be chain complexes up to homotopy. The reward is a new move. The sphere spectrum S maps to Hℤ, so two differential graded algebras can be compared over S as well as over ℤ. Some that differ over ℤ agree over S.

## Main definitions

**Quillen equivalence.** A model category has weak equivalences, fibrations and cofibrations. An adjoint pair (F, G) is a Quillen pair if F preserves cofibrations and G preserves fibrations. It is a Quillen equivalence if the induced adjunction on homotopy categories is an equivalence (Definitions 2.5 and 2.6).

**Ring and module spectra.** In a category of spectra with a strict smash product ∧, a ring spectrum is a monoid R with multiplication R ∧ R → R and unit S → R. An R-module is a spectrum M with an associative, unital action R ∧ M → M (Definitions 3.9 and 3.11).
- Over S: an S-module is just a spectrum, and an S-algebra is a ring spectrum.
- Over Hℤ: this is the case the title is about.

**Topological equivalence.** Two differential graded algebras A and B are topologically equivalent if HA and HB are weakly equivalent as S-algebras (Definition 4.1). Quasi-isomorphism is equivalence as Hℤ-algebras, and it implies topological equivalence.

## Main results

**Theorem (Dold–Kan; Theorem 1.23, Proposition 1.29).** The normalised chain complex functor N from simplicial abelian groups to non-negatively graded chain complexes of abelian groups is an equivalence of categories.
- The catch: N does not respect tensor products on the nose (Example 1.27).
- The repair: the shuffle and Alexander–Whitney maps make N part of a monoidal Quillen equivalence.

**Theorem (chain complexes are Hℤ-modules; Theorem 3.16, credited to Robinson, Schwede–Shipley and Shipley).** The derived category D(ℤ) is equivalent to Ho(Hℤ-Mod) as a triangulated category. Moreover Ch(ℤ) is Quillen equivalent to Hℤ-Mod, and differential graded algebras are Quillen equivalent to Hℤ-algebras.
- For modules: for any differential graded algebra A, differential graded A-modules are Quillen equivalent to HA-modules, and D(A) ≃ Ho(HA-Mod).

**Theorem (Dugger–Shipley; Theorems 4.5 and 4.6).** For differential graded algebras A and B, the module categories of A and B are Quillen equivalent exactly when D(A) has a compact generator P with Hom<sub>A</sub>(P, P) topologically equivalent to B. If A and B are algebras over ℚ, topological equivalence is the same as quasi-isomorphism.

**Example (Example 4.7).** Let X be the exterior algebra over 𝔽<sub>2</sub> on a class in degree 2. Let Y be the ℤ-algebra on e in degree 1 with de = 2 and e<sup>4</sup> = 0. Both have homology X. They are not quasi-isomorphic, yet they are topologically equivalent.
- Over Hℤ: the two extensions give the classes 0 and 1 in a group THH<sup>4</sup> ≅ 𝔽<sub>2</sub>.
- Over S: the map between the corresponding THH groups is zero, so both classes agree.

## Note, then ignore

- Second-hand notes. David Mehrle typed these from handwritten notes of Shipley's four lectures and warns that he may have introduced errors. Treat details with care and the outline as sound. Safe to skip.
- Which spectra. EKMM, orthogonal and symmetric spectra all give the same homotopy theory (Theorem 3.6). The choice is safe to skip on a first reading.
- Lewis's five axioms. No smash product satisfies all five, so each model drops something. This explains the history and is safe to skip.
- Projective and injective model structures. Ch(R) has two, and the identity functor gives a Quillen equivalence between them (Example 2.7). Safe to skip.
- Later sections. Section 4.1 on commutative topological equivalence and Section 5 on rational SO(2)-equivariant spectra are applications. This summary does not cover them. Safe to skip.

## One next step

Open the PDF at page 15 and read the comparison table before Theorem 3.16, then the four parts of the theorem itself.
