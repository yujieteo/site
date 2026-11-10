source: https://math.berkeley.edu/~fengt/Feng-Harris.pdf
slogan: When cohomology of an arithmetic group spreads over several degrees, derived Hecke operators and derived deformation rings explain the spread and act on it.
basis: the introduction and the main theorem statements

## Before you start

This survey runs to 96 pages and meets ∞-categories and derived stacks by page 3. The feeling it tends to raise is shame: "I have not done the homotopy theory, so I have no business here." That feeling is common and you can let it sit. The authors wrote a user's manual and skip the foundations. If you want to know why number theorists started caring about derived geometry, the first four pages answer that. Read them for interest.

## The story

For modular curves, the cohomology attached to a cusp form sits in one degree, and the Taylor-Wiles method matches it with a Galois deformation ring. For most groups the same Hecke eigensystem shows up in a range of degrees of length ℓ<sub>0</sub> > 0. Why several copies? An ordinary deformation ring cannot explain it. Its expected dimension is negative. The answer is to keep the homotopy that ordinary constructions throw away. Replace endomorphisms by Ext groups and you get a derived Hecke algebra with operators that raise degree. Replace the deformation ring by a simplicial ring and its higher homotopy groups act on homology. Both actions are exterior algebras on a space of rank ℓ<sub>0</sub>, and Venkatesh conjectures that this space is motivic cohomology.

## Main definitions

**Animated commutative ring.** A simplicial commutative ring, considered up to weak equivalence. It has homotopy groups π<sub>0</sub>, π<sub>1</sub>, …, which form a graded-commutative ring, and π<sub>0</sub> is an ordinary ring. Picture a derived scheme as a classical scheme with extra infinitesimal "fuzz", as a non-reduced scheme thickens a reduced one.

**Derived Hecke algebra (Definition 6.1.1).** Let G be a split reductive group over a local field K, U a compact open subgroup and Λ a coefficient ring. The derived Hecke algebra is the graded ring Ext<sup>\*</sup> of the compactly induced module c-Ind<sub>U</sub><sup>G(K)</sup> Λ with itself, taken in smooth G(K)-representations. Its degree 0 part is the usual Hecke algebra.

**Derived Galois deformation ring.** For a residual representation ρ of the Galois group of a number field into G(k), this is the pro-Artinian animated ring that represents lifts of ρ to animated Artinian local rings. Its π<sub>0</sub> is Mazur's classical deformation ring.
- Step: local conditions, such as crystalline at p, are imposed by a derived fibre product. This step creates the higher homotopy.

**The defect ℓ<sub>0</sub>.** ℓ<sub>0</sub>(G) = rank G − rank K<sub>∞</sub>, with K<sub>∞</sub> a maximal compact subgroup of G(ℝ). A tempered cohomological representation contributes to cohomology exactly in degrees q<sub>0</sub> to q<sub>0</sub> + ℓ<sub>0</sub>.

## Main results

**Theorem (derived Satake, Venkatesh; Theorem 6.1.6).** Let q be the size of the residue field of K, T a maximal torus of G and W its Weyl group. If |W| is invertible in Λ and q = 1 in Λ, then restriction to the torus gives an isomorphism from the derived Hecke algebra of G(K) relative to G(O<sub>K</sub>) to the W-invariants of the derived Hecke algebra of T(K).

**Theorem (Galatius-Venkatesh; Theorem 8.2.1).** Under the survey's running hypotheses, the localised homology H<sub>\*</sub>(S<sub>K<sub>0</sub></sub>, O)<sub>m</sub> of the locally symmetric space is a free graded module over the graded ring π<sub>\*</sub> of the crystalline derived deformation ring. That graded ring is an exterior algebra on a free module of rank ℓ<sub>0</sub> (Lemma 8.2.2). I did not check the full list of hypotheses. They include concentration of the homology in degrees q<sub>0</sub> to q<sub>0</sub> + ℓ<sub>0</sub> and the existence of the Galois representations.
- Step 1: run the Calegari-Geraghty form of Taylor-Wiles patching.
- Step 2: read the patched module as a module over the derived ring, whose tangent complex is known from Galois cohomology.

**Theorem (derived Hecke action, Venkatesh; Theorem 8.1.1).** Under similar hypotheses, the dual of a lattice in the dual adjoint Selmer group H<sup>1</sup><sub>f</sub>(ℚ, M<sub>π</sub>(1)) acts on the localised cohomology by operators of degree +1. The action is pinned down by matching derived Hecke operators at Taylor-Wiles primes. It extends to the exterior algebra.

**Conjecture (Venkatesh's motivic conjecture; Conjecture 8.1.3).** After inverting p, the part of that exterior algebra that pairs rationally with the motivic cohomology of the adjoint motive of π preserves the rational structure on cohomology. This rests on the Beilinson and Bloch-Kato conjectures (Conjecture 7.2.6), which predict that the motivic cohomology group has dimension ℓ<sub>0</sub>.

## Note, then ignore

- Three models of derived rings. Simplicial commutative rings, commutative dg algebras and E<sub>∞</sub>-algebras all appear in the literature. Dg algebras only work well in characteristic 0. The survey uses the first, and you can skip the comparison.
- "Simplicial" versus "animated". The objects are the same. The second word signals that weakly equivalent rings count as the same. Safe to ignore on a first pass.
- Homology versus cohomology. The derived deformation ring acts on homology, while the derived Hecke algebra acts on cohomology and raises degree. Theorem 8.2.3 says the two actions are compatible under duality. Skip the bookkeeping.
- Graded ring, not derived ring. The "derived Hecke algebra" is only the cohomology of a dg algebra. Whether it is commutative is open in general. This does not affect the story.
- The other half of the survey. Sections 3 and 4 treat derived Hitchin stacks and higher theta series over function fields, with their own modularity conjecture (Conjecture 4.5.1). That is a separate thread. Leave it for another day.

## One next step

Open the PDF at § 1.2, "Why derive?", on pages 2 and 3, and read those three paragraphs only.
