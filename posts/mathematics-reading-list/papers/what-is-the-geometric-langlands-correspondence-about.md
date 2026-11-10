source: https://arxiv.org/pdf/2605.23167
slogan: Geometric Langlands is a spectral theorem for sheaves on moduli of bundles: Hecke operators are diagonalised, with dual-group local systems as eigenvalues.
basis: the introduction and the main theorem statements

## Before you start

You may feel a wary fatigue here: one more survey that promises to explain geometric Langlands and then buries you in stacks by page three. That wariness has been earned, and you can keep it. This survey starts from the spectral theorem and the Fourier transform, and it has drawings. If you want one picture of what the subject is for, the first six pages give it. Read them like a good popular lecture. Section 5 can stay unread.

## The story

The spectral theorem takes a self-adjoint operator and spreads its Hilbert space out over the real line, one eigenspace per frequency. Fourier theory does the same for the translation group. Both exploit abelian symmetry. People want the same for nonabelian groups, and number theory and physics each found a version. The survey presents geometric Langlands as the algebraic form of this. The warm-up is plain algebra: a vector space with an invertible operator is a module over ℂ[t, t<sup>−1</sup>], so a family of vector spaces over ℂ<sup>×</sup>. Read the operator as monodromy, and local systems on the punctured line become sheaves on the space of eigenvalues. Replace the punctured line by the moduli of G-bundles on a curve C. The eigenvalues become local systems on C for the dual group.

## Main definitions

**Bun<sub>G</sub>(C).** The moduli stack of algebraic G-bundles on a compact Riemann surface C, for a connected complex reductive group G. For G = GL<sub>1</sub> it is the Picard group, whose identity component is the Jacobian.

**Loc<sub>Ǧ</sub>(C).** The stack of local systems on C for the Langlands dual group Ǧ. It plays the role of the line of frequencies.
- Betti version: homomorphisms π<sub>1</sub>(C) → Ǧ modulo conjugation, so tuples A<sub>i</sub>, B<sub>i</sub> in Ǧ with product of commutators equal to 1.
- De Rham version: Ǧ-bundles with a flat connection. It agrees with the Betti version analytically but not algebraically.

**Automorphic sheaves.** The category Shv(Bun<sub>G</sub>) to be decomposed.
- De Rham version: D-modules on Bun<sub>G</sub>, that is, systems of linear differential equations.
- Betti version: constructible sheaves with singularities allowed only along nilpotent directions.

**Langlands dual group.** The complex reductive group Ǧ with the same Weyl group as G and the dual torus and root data. GL<sub>n</sub> is self-dual, SL<sub>n</sub> pairs with PGL<sub>n</sub>, and SO<sub>2n+1</sub> pairs with Sp<sub>2n</sub>.

## Main results

**Claim (algebraic spectral theorem; Section 1.3.1).** Vector spaces with an endomorphism are the same as quasicoherent sheaves on the affine line, because an operator H extends uniquely to an action of ℂ[t]. No topology or inner product is needed, and any field works.

**Claim (Mellin transform for sheaves; Sections 1.3.2 and 1.3.3).** Local systems on ℂ<sup>×</sup> are equivalent to quasicoherent sheaves on ℂ<sup>×</sup>, and D-modules on ℂ<sup>×</sup> are equivalent to quasicoherent sheaves on ℂ/ℤ. Convolution on one side goes to tensor product on the other. The survey calls this a first case of the correspondence, for GL<sub>1</sub> on the sphere with two tame punctures.
- Building blocks: the rank one local system with monodromy t, or the equation z d/dz f = sf with solution z<sup>s</sup>, goes to a skyscraper sheaf.

**Theorem (GL<sub>1</sub>, geometric class field theory; Section 2.4).** Local systems on Jac(C) are equivalent to quasicoherent sheaves on (ℂ<sup>×</sup>)<sup>2g</sup>, the rank one character variety of C. In the de Rham setting, Laumon and Rothstein proved that D-modules on Jac(C) are equivalent to quasicoherent sheaves on the de Rham space of rank one local systems. This holds only for derived categories.
- Key property: a rank one local system on the Jacobian goes to the skyscraper at its restriction to C along the Abel–Jacobi map.

**Theorem (geometric Langlands, unramified; Section 2.5).** For C a smooth projective curve over ℂ and G reductive, there are equivalences Shv(Bun<sub>G</sub>) ≃ QCoh(Loc<sub>Ǧ</sub>) in the de Rham and Betti settings. The survey credits Gaitsgory and Raskin with Arinkin, Beraldo, Campbell, Chen, Faergeman, Lin and Rozenblyum. It adds at once that the statement needs a correction: QCoh must be enlarged to a variant called IndCoh<sub>N</sub>, and all categories are derived.
- Why to expect it: Hecke operators give commuting symmetries of Shv(Bun<sub>G</sub>), labelled by representations of Ǧ.
- Why to expect it: through the Hitchin fibration, Bun<sub>G</sub> looks generically like a Jacobian after microlocalisation.

## Note, then ignore

- IndCoh<sub>N</sub>. The spaces Loc<sub>Ǧ</sub> are singular, so quasicoherent sheaves are slightly too few. The survey defers this to Section 5.1. Safe to skip on a first reading.
- Stacky points. The survey often ignores the ℂ<sup>×</sup> of automorphisms of a rank one local system and some derived corrections, and says so in footnotes. Safe to skip.
- Betti versus de Rham. The two versions are separate algebraic statements linked by the exponential map. Safe to skip the difference at first.
- Intuition first. The author warns that he favours intuition over precision and cites surveys in place of original papers. Take statements as informal. Safe to skip.
- Unramified only. The curve has no punctures or extra data at points. This is the base case and the one proved. Safe to skip.

## One next step

Open the paper at page 5, read Section 1.3.2 on the Betti Mellin transform, then look at Figure 1 on page 6.
