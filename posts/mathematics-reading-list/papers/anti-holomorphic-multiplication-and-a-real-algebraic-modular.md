source: https://www.math.ias.edu/~goresky/pdf/newhyp.jour.pdf
slogan: Quotients of hyperbolic 3-space and its higher analogues are the real points of a Siegel modular variety, and they classify abelian varieties.
basis: the introduction and the main theorem statements

## Before you start

The title names a structure you have probably never met, and the paper runs to nearly fifty journal pages of symplectic matrices. The likely feeling is wariness: a new definition, many block matrices, and no sign yet of why it matters. That is a fair reaction and you can keep it. The reward is concrete. Arithmetic hyperbolic 3-manifolds, which look purely topological, turn out to parametrise abelian surfaces. Sections 1 and 2 state everything in six pages. Read them for the picture, with no duty to follow the matrices.

## The story

The quotient of the Siegel upper half space by Sp(2n, ℤ) has three good properties. It is an algebraic variety, it is a moduli space of abelian varieties, and its Baily-Borel compactification has a model over ℚ. Locally symmetric spaces for groups of non-Hermitian type, such as arithmetic quotients of hyperbolic 3-space, seem to have none of these. In the 1970s Shimura, Millson and Kuga asked whether such a space could sit inside a Hermitian one as real points, with a moduli meaning. Shimura found an example where this fails. Goresky and Tai show it works for Sp(2n, ℂ) and the integers O<sub>d</sub> of an imaginary quadratic field. The idea is a new structure on an abelian variety: O<sub>d</sub> acts, but √d acts anti-holomorphically.

## Main definitions

**Quaternionic Siegel space Y<sub>n</sub>.** Y<sub>n</sub> = Sp(2n, ℂ)/U(n, ℍ), the symmetric space of the complex symplectic group. It is not compact and not Hermitian.
- n = 1: Y<sub>1</sub> is real hyperbolic 3-space.
- Quotient: W = Λ\Y<sub>n</sub> for Λ = Sp(2n, O<sub>d</sub>)(M), the principal congruence subgroup of level M. For M ≥ 3 it is a smooth manifold of real dimension 2n<sup>2</sup> + n.

**The involution τ.** An involution of G = Sp(4n, ℝ) of the form g ↦ NgN<sup>−1</sup> that commutes with the Cartan involution. It induces an anti-holomorphic involution of the usual Siegel space h<sub>2n</sub>. An injective homomorphism φ: Sp(2n, ℂ) → Sp(4n, ℝ) has image exactly the fixed group G<sup>τ</sup>, and φ<sup>−1</sup>(Sp(4n, ℤ)) = Sp(2n, O<sub>d</sub>).

**Anti-holomorphic multiplication.** Let A be a complex abelian variety with a principal polarisation and a level M structure. An anti-holomorphic multiplication by O<sub>d</sub> is a homomorphism O<sub>d</sub> → End<sub>ℝ</sub>(A), compatible with the polarisation and the level structure, such that √d acts as an anti-holomorphic map.
- Consequence: the complex dimension of A is even, so elliptic curves have none.

## Main results

**Lemma (the embedding; Lemma 2.2).** The map φ induces a closed embedding Y<sub>n</sub> → h<sub>2n</sub> whose image is the set of points fixed by τ.

**Theorem (real points; Theorem 2.3).** Let Γ ⊂ Sp(4n, ℤ) be a torsion-free arithmetic subgroup preserved by τ. If d ≡ 1 mod 4, assume also Γ ⊂ Γ(2). Put X = Γ\h<sub>2n</sub> and Λ = φ<sup>−1</sup>(Γ). Then τ descends to an anti-holomorphic involution of X, and its fixed set X<sub>ℝ</sub> is a disjoint union of finitely many translates of φ(W), where W = Λ\Y<sub>n</sub>. The translates are indexed by the non-abelian cohomology set H<sup>1</sup>(⟨τ⟩, Γ).
- Step 1: a fixed point of τ on X lifts to a point Z with τ(Z) = γZ, and γ gives a 1-cocycle.
- Step 2: an exact sequence of non-abelian cohomology (Proposition 3.2) sorts the fixed points by the class of that cocycle.

**Theorem (rational model; Theorem 2.4).** Fix M ≥ 3, even if d ≡ 1 mod 4, and take Γ = Γ(M) ∩ τ(Γ(M)). Then Λ is Sp(2n, O<sub>d</sub>)(M). The Baily-Borel compactification of X embeds in a projective space so that its image is defined over ℚ and τ is the restriction of an anti-holomorphic involution of the projective space, also defined over ℚ. So X<sub>ℝ</sub> is the set of real points of a quasi-projective variety with a model over ℚ.
- Main input: a result of Shimura on rational structures, used in Section 9.

**Theorem (moduli; Theorem 2.5).** With the same Γ, X<sub>ℝ</sub> is canonically the coarse moduli space of abelian varieties with principal polarisation, level M structure and anti-holomorphic multiplication by O<sub>d</sub>.
- Key tool: Proposition 7.7 gives normal forms for the period matrix of such an abelian variety. It is an analogue of a lemma of Comessatti and Silhol.
- Behind it: a structure theorem for symplectic modules over a Dedekind ring (Proposition 6.4).

## Note, then ignore

- Level 2 when d ≡ 1 mod 4. The extra hypothesis Γ ⊂ Γ(2), or M even, is needed because the ring of integers then contains (1 + √d)/2. Safe to skip on a first reading.
- Several components. X<sub>ℝ</sub> is not one copy of W but finitely many isomorphic copies. The count is a cohomology set and does not change the picture. Safe to skip.
- The dimension of A. The Siegel space involved is h<sub>2n</sub>, so the abelian varieties have complex dimension 2n, even where the introduction says "n-dimensional". This is my reading of the statements. Safe to skip.
- Section 10. The description of Y<sub>n</sub> by quaternionic matrices and fractional linear maps is not needed for the main results. The paper says so. Safe to skip.
- Other groups. The authors chose these groups because the statements are easy and the Shimura variety is defined over ℚ. They do not know how far the results generalise. Safe to skip.

## One next step

Open the paper at Section 1.2 (page 514) and read the three statements (a), (b), (c) about X<sub>ℝ</sub>.
