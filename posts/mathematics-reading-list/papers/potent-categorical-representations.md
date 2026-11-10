source: https://arxiv.org/pdf/2510.07482
slogan: Let the parameters of a categorical representation vary over a symplectic space, and Langlands duality for G becomes a Fourier transform.
basis: the introduction and the main theorem statements

## Before you start

This is an announcement of joint work still in progress, written in the language of 2-categories and sheaves of categories. Proofs are deferred, and the nouns pile up fast. The likely feeling is fog: you cannot tell what is defined and what is promised. That fog is in the text, not in you, so let it be there. If you want a symmetric picture of where a group and its dual both live, this offers one. Read for the picture. Completion is optional.

## The story

A categorical representation of a reductive group G is a category with an action of D-modules on G. Like ordinary induced representations, these come in families, here indexed by local systems on a torus T, which form the dual torus Ť. Most work fixes the parameter, often the "unipotent" one. The authors want Langlands duality between G and Ǧ at the level of such representations, but the usual setting is lopsided: positions in Ť are visible and the dual momenta in T are not. Their idea is to let all parameters vary and take the geometry of the parameter space seriously, hence "potent" in contrast to "unipotent". Concretely, they replace the classifying stack of G by its loop space G/G and use sheaves of categories on it. Representations then live over the symplectic space T × Ť, and duality becomes a Fourier transform that swaps the two factors.

## Main definitions

All algebra is over ℂ or a field k of characteristic 0, and all categories are derived.

**Potent D-modules.** For a stack X, with loop space LX = Map(S<sup>1</sup>, X), potent D-modules are ind-coherent sheaves on LX after the Tate construction for loop rotation (Definition 2.1.4).
- For a scheme: this gives ordinary D-modules, made 2-periodic.
- For a stack: ordinary D-modules use only the formal neighbourhood of constant loops. Potent ones use all loops.

**2IndCoh<sup>♢</sup>.** Stefanich's theory assigns to a stack X a 2-category 2IndCoh(X) of "ind-coherent sheaves of categories". The diamond marks two additions, called periodisation and equivariant expansion.

**Potent categorical G-representations.** The 2-category 2IndCoh<sup>♢</sup>(G/G)<sup>Tate</sup>, where G/G is the adjoint quotient, which is the loop space of BG (Definition 2.2.4). These are not categories with a G-action. Restricting to the formal loop space gives an underlying ordinary categorical representation, and loses information.
- De Rham variant: replace G/G by the stack of regular singular G-connections on the punctured line.

**Potent Hecke monad.** An algebra object H<sub>G</sub> in potent categorical representations of T × T, built from loops in B\G/B (Definition 2.4.2). Pairing it with different Lagrangians gives back the universal, unipotent, equivariant and K-theoretic Hecke categories.

## Main results

The paper announces these theorems from forthcoming work with Stefanich. It does not prove them.

**Theorem (2-Fourier transform; Theorem 2.3.3).** For a finite-dimensional vector space V with dual V<sup>∗</sup>, the periodised 2-categories 2IndCoh<sup>π</sup>(V) and 2IndCoh<sup>π</sup>(V<sup>∗</sup>) are equivalent. Taking the cyclic trace gives back a 2-periodic form of the Fourier transform for D-modules.

**Theorem (highest weight theory; Theorem 2.4.3).** Potent categorical G-representations are monadic over potent categorical T-representations, through loops in the correspondence G/G ← B/B → T/T. The monad is H<sub>G</sub>. The same holds for the de Rham and graded variants.

**Theorem (duality for tori; Theorem 2.5.2).** For a torus T with Lie algebra 𝔱 and coweight lattice Λ, a multiplicative 2-Fourier transform gives an equivalence between de Rham potent categorical representations of T and of the dual torus Ť.
- Case: it contains the known equivalence that comes from D(T) ≃ QCoh(𝔱̌/Λ̌).

**Conjecture (potent Langlands duality; Conjecture 2.5.7).** For a reductive group G, the multiplicative 2-Fourier transform carries the de Rham potent Hecke monad of G to that of Ǧ. By the highest weight theorem, de Rham potent categorical representations of G and of Ǧ are then equivalent.
- Consequence: one Hecke monad lives over 𝔱/Λ × 𝔱̌/Λ̌, and each familiar Hecke category gets two dual descriptions.

## Note, then ignore

- Betti against de Rham. Many constructions have two versions that agree analytically but not algebraically. The conjecture is stated in the de Rham version, and the authors expect a Betti version once analytic foundations exist. Safe to skip on a first reading.
- The Tate construction. Take circle invariants, then invert a degree 2 parameter u. It is what turns sheaves on loops into D-modules. Safe to skip the details.
- Two-periodicity. Many categories are 2-periodic, and the authors leave base changes implicit. Safe to skip.
- The zoo of circles. Section 2.2.6 lists several stand-ins for the circle, each with its own loop space. Only the Betti and de Rham ones matter for the story. Safe to skip.
- Sections 3 and 4. They retell the story through topological field theory and through Hecke algebras, with further conjectures. Safe to skip at first.

## One next step

Open the paper at Section 1.2, "What is potent?", on pages 1 and 2. Read those three paragraphs only.
