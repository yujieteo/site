source: https://arxiv.org/pdf/2405.03578
slogan: Values of Artin L-functions at negative integers count equivariant K-groups, so twisting a zeta function by a character matches twisting K-theory by a sphere.
basis: the abstract and introduction

## Before you start

The title joins two fields that each have a reputation: genuine equivariant homotopy theory and Artin L-functions. You may feel like an outsider to both and expect to be lost by page two. That is a fair feeling to have, and you can keep it while you read. If you want to see why K-groups know special values of zeta functions, the finite field example on page 2 shows it with one fraction. Read for that one fraction and enjoy it. The rest can wait.

## The story

Quillen computed the K-groups of a finite field 𝔽<sub>q</sub>. Their sizes give the zeta value: ζ(𝔽<sub>q</sub>, −k) = 1/(1 − q<sup>k</sup>) is, up to sign, the ratio #K<sub>2k</sub>/#K<sub>2k−1</sub>. The Quillen–Lichtenbaum conjecture says the same for Dedekind zeta functions of number fields, with regulators.

A zeta function of a Galois extension factors into Artin L-functions, one for each representation of the Galois group. What on the K-theory side matches a single L-function? Plain K-groups cannot see the representation.

The idea: let the Galois group G act on K-theory of the big field, and tensor with a G-spectrum M(ρ) whose homology is the representation ρ. The equivariant homotopy groups of K ⊗ M(ρ) then have sizes given by L(ρ, s) at negative integers.

## Main definitions

**Artin L-function.** For a G-Galois cover Y → X and a representation ρ of G, the function L(X, ρ, s) is an Euler product over points of X built from Frobenius elements acting through ρ.
- Finite field case: for a character χ of Gal(𝔽<sub>q<sup>m</sup></sub>/𝔽<sub>q</sub>), L(𝔽<sub>q</sub>, χ, s) = 1/(1 − χ(Fr<sub>q</sub>) q<sup>−s</sup>).

**Equivariant Moore spectrum M(ρ).** For ρ : G → GL<sub>N</sub>(O<sub>E</sub>) with E a number field, a connective G-CW spectrum whose integral homology sits in degree 0 and equals O<sub>E</sub><sup>N</sup> with G acting by ρ.
- Example: for the sign character σ of C<sub>2</sub>, the representation sphere S<sup>1−σ</sup>.

**Equivariant K-groups with coefficients.** The groups π<sub>t</sub><sup>G</sup>(K(Y) ⊗ M(ρ)), where K(Y) is a genuine G-spectrum (a spectral Mackey functor). It records K-theory of every intermediate quotient Y/H, not only the G-action on K(Y).

## Main results

**Theorem (sign character; Theorem 1.1).** Let σ be the sign character of Gal(𝔽<sub>q<sup>2</sup></sub>/𝔽<sub>q</sub>) = C<sub>2</sub>. Then π<sub>t</sub><sup>C<sub>2</sub></sup>(K(𝔽<sub>q<sup>2</sup></sub>) ⊗ S<sup>1−σ</sup>) is ℤ/(q<sup>k</sup> + 1) for t = 2k − 1 > 0 and zero otherwise. So the ratio of sizes in degrees 2k and 2k − 1 is L(𝔽<sub>q</sub>, σ, −k) = 1/(1 + q<sup>k</sup>).

**Theorem (Moore spectra exist; Theorem 1.2).** Let G be a finite group and ρ : G → GL<sub>N</sub>(O<sub>E</sub>). If ρ is conjugate to a direct sum of inductions of abelian characters of subgroups, then M(ρ) exists.

**Theorem (main theorem; Theorem 1.3).** With ρ and M(ρ) as above, the norm from E to ℚ of an L-value equals, up to an explicit sign or power of 2, the ratio of sizes of two consecutive equivariant K-groups of K(Y) ⊗ M(ρ).
- Finite fields and curves: for 𝔽<sub>q<sup>m</sup></sub> over 𝔽<sub>q</sub> at s = −k with k ≥ 1, and for suitable covers of normal affine curves over 𝔽<sub>q</sub> at s = 1 − k with k ≥ 2.
- Totally real fields: for F′/F Galois, both totally real and abelian, at s = 1 − 2n with n ≥ 1. If F′ is totally real but not abelian over ℚ, the identity holds only up to powers of 2.

**Claim (how the proof goes; Section 1.2).** The proof of Theorem 1.3 has two steps.
- Step 1: for a primitive character of a cyclic group, Möbius inversion writes the L-value as an alternating product of zeta values. The same alternating product appears as an Euler characteristic on the first page of an equivariant Atiyah–Hirzebruch spectral sequence.
- Step 2: reduce general ρ to that case, using that induction and direct sums behave the same way for L-functions and for equivariant homotopy groups.

**Theorem (orders of vanishing; Theorem 1.8, after Gross and Zhang).** For any Galois extension F′/F of number fields, the order of vanishing of L(O<sub>F</sub>, ρ, s) at s = 1 − n equals the E-dimension of π<sub>2n−1</sub><sup>G</sup> of K(O<sub>F′</sub>) tensored with a rational Moore spectrum.

## Note, then ignore

- Genuine versus homotopy fixed points. The authors use genuine equivariant spectra because Y → X may ramify. After inverting the order of G the difference disappears. Safe to skip on a first reading.
- Norms. The L-value lies in a cyclotomic field, so the theorem compares its norm to ℚ with a group order. Safe to skip.
- Powers of 2. The number field case inherits the usual 2-primary gap from the classical conjecture. Safe to skip.
- Moore spectra are not unique. An action on a group need not lift to its Moore spectrum, and lifts can differ. The authors build specific ones. Safe to skip.
- Dependence on earlier work. The classical Quillen–Lichtenbaum statements are an input here, not reproved. Safe to skip.

## One next step

Open the paper at page 2 and read only Theorem 1.1. Compare ℤ/(q<sup>k</sup> + 1) with Quillen's ℤ/(q<sup>k</sup> − 1) just above it.
