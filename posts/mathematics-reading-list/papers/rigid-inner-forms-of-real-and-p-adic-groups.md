source: https://arxiv.org/pdf/1304.3292
slogan: Enlarging Galois cohomology by one canonical gerb lets every inner form of a reductive group carry the labels its L-packets need.
basis: the introduction and the main theorem statements

## Before you start

This is 58 pages of cohomology, with a symbol, H<sup>1</sup>(u → W, Z → G), that has four slots. You may feel dread at the notation, and some shame if endoscopy and transfer factors are still foreign to you. Both feelings are allowed. The paper answers a simple question: how do you label the representations of a group that is not quasi-split? If that question interests you, read the introduction for the pleasure of the problem. Finishing the paper can wait.

## The story

For a quasi-split group G over a local field F, people expect each tempered L-packet to be labelled by representations of a finite group built from the Langlands parameter. For another inner form G′ this fails. Vogan saw why: an inner twist G → G′ has too many automorphisms, and they can permute the packet. He added a Galois cocycle z in G to rigidify the twist. That works, but not every inner form carries such a z. For a simply connected p-adic group, none but G itself does. Kaletha's idea is to replace the Galois group Γ by an extension W of Γ by a pro-finite group u. Cocycles of W are more plentiful. Now every inner twist can be rigidified, and the labelling conjecture can be stated for every connected reductive group. Over ℝ it is true.

## Main definitions

**The gerb W.** F is a local field of characteristic zero with absolute Galois group Γ. The paper builds a pro-finite multiplicative algebraic group u as a limit of finite groups. It then takes W to be the extension 1 → u → W → Γ → 1 attached to a canonical class in H<sup>2</sup>(Γ, u).
- Why canonical: H<sup>1</sup>(Γ, u) = 0, so W has no automorphisms beyond conjugation by u.

**The set H<sup>1</sup>(u → W, Z → G).** G is an affine algebraic group over F and Z a finite central subgroup. Take continuous 1-cocycles of W valued in G(F̄) whose restriction to u is an algebraic homomorphism u → Z. Divide by coboundaries.
- It contains H<sup>1</sup>(Γ, G): there is an injection H<sup>1</sup>(Γ, G) → H<sup>1</sup>(u → W, Z → G).
- It covers H<sup>1</sup>(Γ, G/Z): the map to that set is surjective.

**Rigid inner twist.** An inner twist ψ : G → G′ together with a cocycle z in Z<sup>1</sup>(u → W, Z → G), for some finite central Z, such that ψ<sup>−1</sup>σ(ψ) is conjugation by the image of z(σ) in the adjoint group, for every σ in Γ.

**The group S<sub>φ</sub><sup>+</sup>.** For a tempered parameter φ with centraliser S<sub>φ</sub> in the dual group of G, let S<sub>φ</sub><sup>+</sup> be the preimage of S<sub>φ</sub> in the dual group of G/Z. Its component group π<sub>0</sub>(S<sub>φ</sub><sup>+</sup>) replaces the usual component group.

## Main results

**Theorem (the cohomology of u; Theorem 3.1).** H<sup>1</sup>(Γ, u) = 0. H<sup>2</sup>(Γ, u) is the profinite completion of ℤ when F is non-archimedean, and ℤ/2ℤ when F = ℝ.
- Consequence: the extension W is determined up to an isomorphism that is unique up to conjugation by u.

**Theorem (every inner form can be rigidified; Section 3.3).** Let G be connected reductive and let Z contain the centre of the derived group. Then H<sup>1</sup>(u → W, Z → G) → H<sup>1</sup>(Γ, G/Z(G)) is surjective, and the set H<sup>1</sup>(u → W, Z → G) is finite.
- Sharp case: for G split, F p-adic and Z the centre of the derived group, the map is a bijection. Each inner twist is rigidified in exactly one way.

**Theorem (duality; Theorems 4.8 and 4.11, Corollary 5.4).** For connected reductive G, a quotient of H<sup>1</sup>(u → W, Z → G) is isomorphic, functorially, to a finite abelian group built from the root datum. This gives a pairing between H<sup>1</sup>(u → W, Z → G) and π<sub>0</sub> of a group Z(Ĝ̄)<sup>+</sup> inside the centre of the dual group of G/Z. When F is p-adic, or G is a torus, the map to the Pontryagin dual is a bijection.
- Step 1: tori, by an explicit cocycle that extends the Tate–Nakayama isomorphism.
- Step 2: reductive groups, by reducing to a fundamental maximal torus.

**Conjecture and theorem (refined local Langlands; Sections 5.4 and 5.6).** Fix a Whittaker datum. Conjecture: the quadruples (G′, ψ, z, π′) with π′ in the packet of φ correspond bijectively to irreducible representations of π<sub>0</sub>(S<sub>φ</sub><sup>+</sup>). The class of z matches the central character, and the endoscopic character identities hold with an explicitly normalised transfer factor. For F = ℝ the paper proves this from the work of Langlands and Shelstad.
- Also proved (Theorem 5.2): over ℝ, rigid inner twists are equivalent to the strong real forms of Adams, Barbasch and Vogan.

## Note, then ignore

- The quotient H<sup>1</sup><sub>sc</sub>. Section 3.4 divides by an equivalence relation, by analogy with the crossed module G<sub>sc</sub> → G. Over p-adic fields it changes nothing. Safe to skip on a first reading.
- Unbalanced cup products. Section 4.3 invents a device to write explicit cocycles. It serves only the proof of the duality theorem. Safe to skip.
- Refined endoscopic data. Transfer factors need an element of S<sub>φ</sub><sup>+</sup>, not of S<sub>φ</sub>. This fixes an invariance problem that Arthur noticed. Safe to skip at first.
- Isocrystals. Kottwitz's set B(G)<sub>bas</sub> gives a rival enlargement. It works when the centre is connected and fails for simply connected groups. The comparison is in later papers. Safe to skip.
- "Rigid rational forms". Vogan uses a similar name for a different notion. The paper warns about it. Safe to skip.

## One next step

Open the PDF at page 3 and look at diagram (1.2), then at page 5 and diagram (1.3). Note what changed in each corner.
