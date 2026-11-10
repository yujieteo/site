source: https://shaybm.com/k-theory-seminar/notes/k-theory-of-fin-fields.pdf
slogan: The K-groups of a finite field are the fixed points of an Adams operation on topological K-theory, so Bott periodicity hands you every one of them.
basis: the full text

## Before you start

These are ten pages of seminar notes, written in the language of ∞-categories, and they sketch the hardest step. You may feel uneasy that a sketch is not a proof and that you are missing the real argument. You are allowed to feel that. The notes are honest about what they skip. If you want one complete computation of all K-groups of a ring, this is the classic one. Read it for the pleasure of watching q<sup>i</sup> − 1 appear. Completeness can come later, from Quillen's paper.

## The story

Quillen wanted the higher K-groups of a finite field 𝔽<sub>q</sub>. By definition K(𝔽<sub>q</sub>) is the group completion of the disjoint union of the spaces BGL<sub>n</sub>(𝔽<sub>q</sub>). Group completion is hard to compute directly.

The notes take two steps. First, group completion equals "invert the generator, then apply the plus construction". So K(𝔽<sub>q</sub>) = ℤ × BGL<sub>∞</sub>(𝔽<sub>q</sub>)<sup>+</sup>, and the plus construction does not change homology.

Second, compare with topology. The roots of unity in the algebraic closure of 𝔽<sub>p</sub> embed in the circle U(1). Brauer lifting turns representations over 𝔽<sub>q</sub> into virtual complex ones fixed by the Adams operation ψ<sup>q</sup>. This gives a map from BGL<sub>∞</sub>(𝔽<sub>q</sub>) to the fixed points of ψ<sup>q</sup> on BU. Bott periodicity computes the target.

## Main definitions

**K-theory space.** K(R) is the group completion of the commutative monoid of finitely generated projective R-modules under direct sum, taken in spaces.
- Over a field F: the monoid is the disjoint union of the BGL<sub>n</sub>(F).

**Plus construction.** A space is hypoabelian if every π<sub>1</sub> has trivial maximal perfect subgroup. The inclusion of hypoabelian spaces into spaces has a left adjoint X ↦ X<sup>+</sup> (Theorem 13).
- Key property: X → X<sup>+</sup> is a homology equivalence (Proposition 15).

**Brauer lift.** Fix an embedding σ of the units of the algebraic closure of 𝔽<sub>p</sub> into U(1). For a representation ρ of a finite group G over that closure, set χ<sub>ρ</sub>(g) = the sum of σ(λ) over eigenvalues λ of ρ(g). Green's theorem says χ<sub>ρ</sub> is the character of a virtual complex representation.

**Fixed points BU<sup>ψ<sup>q</sup></sup>.** The fibre of ψ<sup>q</sup> − id : BU → BU, where ψ<sup>q</sup> is the Adams operation.

## Main results

**Theorem (Quillen; Theorems 1 and 27).** For q a power of a prime p: K<sub>0</sub>(𝔽<sub>q</sub>) = ℤ, K<sub>2i</sub>(𝔽<sub>q</sub>) = 0 and K<sub>2i−1</sub>(𝔽<sub>q</sub>) = ℤ/(q<sup>i</sup> − 1) for i ≥ 1.
- Step 1: build θ : BGL<sub>∞</sub>(𝔽<sub>q</sub>) → BU<sup>ψ<sup>q</sup></sup> from Brauer lifts and show it is an isomorphism on integral homology (Theorem 25).
- Step 2: both sides are simple spaces after the plus construction, so a homology isomorphism is a homotopy equivalence (Theorem 26).

**Theorem (group completion; Theorem 17).** For a commutative monoid M in spaces, (M<sub>∞</sub>)<sup>+</sup> = (M<sup>+</sup>)<sub>∞</sub> = the group completion of M, as spaces. Here M<sub>∞</sub> is the colimit that inverts the elements of π<sub>0</sub>M.
- Step 1: M<sub>∞</sub> fixes π<sub>0</sub> but can leave π<sub>1</sub> non-abelian. For BGL the fundamental group is GL<sub>∞</sub>(F).
- Step 2: M<sub>∞</sub> is already the group completion exactly when π<sub>1</sub> is hypoabelian (Theorem 9). The plus construction forces this.

**Theorem (homotopy of the fixed points; Theorem 24).** π<sub>2n−1</sub>(BU<sup>ψ<sup>q</sup></sup>) = ℤ/(q<sup>n</sup> − 1) and π<sub>2n</sub>(BU<sup>ψ<sup>q</sup></sup>) = 0.
- Step 1: by Bott periodicity π<sub>2n</sub>(BU) = ℤ and odd groups vanish.
- Step 2: ψ<sup>q</sup> acts on π<sub>2n</sub>(BU) by q<sup>n</sup>, so the long exact sequence of the fibre gives the cokernel of q<sup>n</sup> − 1.

## Note, then ignore

- Hypoabelian, not abelian. Spaces with abelian π<sub>1</sub> are not closed under limits, so no left adjoint exists for them. Safe to skip on a first reading.
- The embedding σ is not canonical. It depends on a choice of isomorphism between roots of unity. The final answer does not. Safe to skip.
- Theorem 25 is only outlined. Most of Quillen's paper goes into it. The mod ℓ case for ℓ ≠ p uses an Eilenberg–Moore spectral sequence. Safe to skip.
- C as a discrete field. K(ℂ) with ℂ discrete is not ℤ × BU. The notes use the topological version only as a comparison target. Safe to skip.
- The switch map. Inverting x can fail because the swap on x·x is a non-trivial loop. This explains why Theorem 9 needs a condition. Safe to skip.

## One next step

Open the notes at Section 4.2 and read only Theorem 24 and its four-line proof. That is where q<sup>n</sup> − 1 comes from.
