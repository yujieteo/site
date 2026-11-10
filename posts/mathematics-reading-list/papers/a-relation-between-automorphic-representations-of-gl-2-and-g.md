source: https://www.numdam.org/articles/10.24033/asens.1355/
slogan: Every cusp form on GL(2) has a symmetric square on GL(3), which is one of the first proved cases of Langlands functoriality.
basis: the introduction and the main theorem statements

## Before you start

This is 72 pages from 1978, scanned, in the adelic language of Jacquet and Langlands. The likely feeling is discouragement at the notation, and perhaps shame at not having read the earlier papers it cites on every page. That is a fair reaction, and you can keep it. The main theorem fits in three lines and the plan of proof fits in one paragraph. If you want to see how a case of functoriality is actually proved, enjoy the plan. The local computations can stay unread.

## The story

Langlands predicted that a map between dual groups moves automorphic representations from one group to another. The adjoint action of PGL(2, ℂ) on its Lie algebra gives a map GL(2, ℂ) → GL(3, ℂ). So each automorphic representation σ of GL(2) should have a lift π on GL(3). At an unramified place, if σ has Satake parameters (m, n), then π has parameters (m/n, 1, n/m). How do you prove that π is automorphic? Gelbart and Jacquet use a converse theorem: π is automorphic and cuspidal if all its twisted L-functions are entire with functional equations. The L-function of π is a degree 3 Euler product L<sub>2</sub>(s, σ, χ). Shimura had shown how to control it with an integral against a theta series and an Eisenstein series of half-integral weight. The paper carries that method to the metaplectic group over the adeles.

## Main definitions

**The degree 3 L-function.** For a representation σ of GL(2) and a character χ, L<sub>2</sub>(s, σ, χ) = L(s, (σ ⊗ χ) × σ̃) / L(s, χ). Here σ̃ is the contragredient and the numerator is the Rankin–Selberg L-function for GL(2) × GL(2).
- At an unramified place it is det(1 − χ(ϖ) q<sup>−s</sup> A)<sup>−1</sup> with A = diag(m/n, 1, n/m).

**Local lift (Definition 3.1.3).** Over a local field, an irreducible admissible representation π of GL(3) is a lift of σ if π has trivial central character, π is equivalent to its contragredient, and for every character χ the factors L(s, π ⊗ χ) and ε(s, π ⊗ χ, ψ) equal L<sub>2</sub>(s, σ, χ) and ε<sub>2</sub>(s, σ, χ, ψ).
- A lift of σ is also a lift of every twist σ ⊗ χ.

**Metaplectic group.** An extension Mp(𝔸) of SL(2, 𝔸) by the circle group that splits over SL(2, F). Theta series and half-integral weight Eisenstein series live on it.

## Main results

**Theorem (the lift; Theorem 9.3).** Let F be a global field with adele ring 𝔸 (the main integral needs characteristic not 2). Let σ be a unitary cuspidal automorphic representation of GL(2, 𝔸). Assume σ is not equivalent to σ ⊗ χ for any non-trivial character χ of the idele class group. Then L<sub>2</sub>(s, σ, χ) is entire for every χ. Each local component σ<sub>v</sub> has a lift π<sub>v</sub>. The product π = ⊗ π<sub>v</sub> is a cuspidal automorphic representation of GL(3, 𝔸).
- Step 1: prove L<sub>2</sub> is entire for highly ramified χ (Theorem 8.1).
- Step 2: apply the converse theorem for GL(3) of Jacquet, Piatetski-Shapiro and Shalika, completed in Section 4.

**Theorem (holomorphy; Theorem 8.1).** For σ cuspidal and χ sufficiently ramified at the bad places, L<sub>2</sub>(s, σ, χ) is entire and bounded in vertical strips. Section 8 states this for F a number field.
- Step 1: an integral of a form in σ, a theta series and a metaplectic Eisenstein series factors into local integrals and equals L<sub>2</sub> for good choices (Sections 5 and 6).
- Step 2: continue the Eisenstein series analytically through its constant term (Sections 7 and 8).

**Theorem (a bound towards Ramanujan; Theorem 9.3, part 4).** Under the same hypotheses, the local components of σ are restricted: no complementary series representation with parameter t ≥ 1/4 occurs. The scan is hard to read at this line, so check the exact form in the source.

**Claim (the excluded case; Section 3.7 and Remark 9.9).** Suppose σ is equivalent to σ ⊗ χ for some non-trivial χ. Then χ is quadratic and cuts out a quadratic extension H of F, and σ comes from a character Ω of the idele class group of H. Each local lift is then induced from the parabolic of type (2, 1), from a GL(2) representation built from Ω and its conjugate, together with χ<sub>v</sub>.

## Note, then ignore

- "Symmetric square" versus "adjoint". The lift uses the adjoint map, which is the symmetric square twisted by the inverse of the determinant. This is why π has trivial central character. Safe to skip on a first reading.
- Sections 1 and 2. They complete the GL(2) × GL(2) theory of L and ε factors in every local case. The authors say some results are not used later. Safe to skip.
- Extraordinary representations. In residual characteristic 2 some supercuspidal σ<sub>v</sub> do not come from a quadratic extension. Their local lifts are obtained by a global argument in Section 9.4. Safe to skip.
- Highly ramified twists. The holomorphy proof needs χ very ramified at bad places. The converse theorem allows this restriction. Safe to skip.
- Deviations from the outline. The authors say the actual proof departs from their simple scheme for technical reasons. Safe to skip.

## One next step

On the Numdam page, open the PDF and read the Introduction from "The purpose of this paper" to the display of the 3 × 3 diagonal matrix, about half a page.
