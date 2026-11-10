source: https://arxiv.org/pdf/1908.08424
slogan: Enlarge ℂ<sub>p</sub> to the rings B<sub>crys</sub> and B<sub>dR</sub>, and étale and de Rham cohomology of a p-adic variety become isomorphic over them.
basis: the introduction and the main theorem statements

## Before you start

These are 59 pages of course notes, and the middle section builds the period rings in full technical detail. The likely feeling is dread of that middle: the sense that you must get through it before the subject opens up. You can feel that dread and not obey it. Caruso himself tells the impatient reader to read Section 1, the start of Section 3, and then Section 4. If you want to know what "crystalline" and "de Rham" mean for a Galois representation, that path gives it. Follow what interests you. Completeness can come later, or never.

## The story

Over ℂ, a period such as 2πi is an entry of the matrix that compares singular and de Rham cohomology. People wanted the same comparison for a variety X over a finite extension K of ℚ<sub>p</sub>, with étale cohomology in place of singular cohomology. The comparison needs a ring B of "p-adic periods" to tensor with. The first candidate is ℂ<sub>p</sub>, the completion of an algebraic closure of K. It falls short. It recovers only the graded pieces of de Rham cohomology, not the filtered space itself. Fontaine's idea is to build larger rings with more structure: B<sub>dR</sub> with a filtration, and B<sub>crys</sub> with a Frobenius. A Galois representation is then sorted by which ring makes it trivial. The notes build both rings and state the comparison theorems.

## Main definitions

**B-admissible representation.** Let G be a group acting on a ring B, and let V be a finite dimensional representation of G over a subfield E of B fixed by G. Then V is B-admissible if B ⊗<sub>E</sub> V has a B-basis of vectors fixed by G.
- Under Fontaine's hypotheses (H1) to (H3) on B, this holds exactly when (B ⊗<sub>E</sub> V)<sup>G</sup> has dimension dim V over B<sup>G</sup> (Proposition 1.4.4).

**Hodge-Tate representation.** A ℚ<sub>p</sub>-representation V of G<sub>K</sub> = Gal(K̄/K) such that ℂ<sub>p</sub> ⊗ V is a direct sum of copies of ℂ<sub>p</sub> twisted by integer powers of the cyclotomic character. The integers are the Hodge-Tate weights.

**B<sub>dR</sub>.** A discrete valuation field with residue field ℂ<sub>p</sub> and a G<sub>K</sub>-action. It has a uniformiser t on which G<sub>K</sub> acts through the cyclotomic character, and (B<sub>dR</sub>)<sup>G<sub>K</sub></sup> = K (Theorem 3.4.1).
- Its filtration is by powers of t. Its graded ring is B<sub>HT</sub> = ℂ<sub>p</sub>[t, t<sup>−1</sup>].

**B<sub>crys</sub>.** A subring of B<sub>dR</sub> that contains t and carries a Frobenius ring map φ. Its invariants are (B<sub>crys</sub>)<sup>G<sub>K</sub></sup> = K<sub>0</sub>, the maximal unramified subfield of K (Theorem 3.4.2).
- V is crystalline if it is B<sub>crys</sub>-admissible, and de Rham if it is B<sub>dR</sub>-admissible (Definition 4.0.1). Crystalline implies de Rham.

## Main results

**Theorem (ℂ<sub>p</sub>-admissibility; Theorem 1.4.6).** Let V be a finite dimensional ℚ<sub>p</sub>-representation of G<sub>K</sub>, with K a finite extension of ℚ<sub>p</sub>. Then V is ℂ<sub>p</sub>-admissible if and only if the inertia subgroup acts on V through a finite quotient.
- Consequence: the cyclotomic character is not ℂ<sub>p</sub>-admissible, so ℂ<sub>p</sub> alone sees too few representations.

**Theorem (de Rham comparison, C<sub>dR</sub>; Theorem 4.1.1).** Let X be a proper smooth variety over K. For every r there is a canonical isomorphism B<sub>dR</sub> ⊗<sub>K</sub> H<sup>r</sup><sub>dR</sub>(X) ≅ B<sub>dR</sub> ⊗<sub>ℚ<sub>p</sub></sub> H<sup>r</sup><sub>ét</sub>(X<sub>K̄</sub>, ℚ<sub>p</sub>). It respects filtrations and Galois actions, and is functorial in X. The notes state it and do not prove it.
- Consequence: the étale cohomology of such X is a de Rham representation.

**Theorem (crystalline comparison, C<sub>crys</sub>; Theorem 4.1.3).** Let X be proper and smooth over K with good reduction, with a proper smooth model over 𝒪<sub>K</sub>. For every r there is a canonical, functorial isomorphism between B<sub>crys</sub> ⊗ H<sup>r</sup><sub>crys</sub> of the special fibre and B<sub>crys</sub> ⊗<sub>ℚ<sub>p</sub></sub> H<sup>r</sup><sub>ét</sub>(X<sub>K̄</sub>, ℚ<sub>p</sub>). Stated, not proved. I did not read which extra structures the statement lists.

**Corollary (de Rham implies Hodge-Tate; Corollary 4.2.6).** A de Rham representation V is Hodge-Tate. Its weights are the integers m for which the graded piece gr<sup>−m</sup> of D<sub>dR</sub>(V) = (B<sub>dR</sub> ⊗ V)<sup>G<sub>K</sub></sup> is non-zero.
- The converse holds for characters. It fails in higher dimension.

## Note, then ignore

- The variants B<sub>μ</sub>, B<sub>max</sub>, B<sub>inf</sub><sup>+</sup>. Section 3 builds a family of rings around B<sub>crys</sub> for technical convenience. Only B<sub>crys</sub> and B<sub>dR</sub> matter for the story. Safe to skip on a first reading.
- B<sub>dR</sub> is not a ℂ<sub>p</sub>-algebra. It has residue field ℂ<sub>p</sub>, but no Galois-equivariant copy of ℂ<sub>p</sub> sits inside it. This is a known surprise. Safe to skip.
- Restriction to finite extensions of ℚ<sub>p</sub>. A footnote says the results hold for any complete discretely valued field of characteristic 0 with perfect residue field of characteristic p. Safe to skip.
- Sen's theory (Section 2.3). It classifies all ℂ<sub>p</sub>-semi-linear representations by an operator. It is marked as a complement. Safe to skip.
- No group cohomology. The notes phrase Section 2 through semi-linear representations and fixed vectors, unlike most texts. Safe to skip.

## One next step

Open the PDF at page 28 and read the two bullet lists of properties of B<sub>dR</sub> and B<sub>crys</sub>.
