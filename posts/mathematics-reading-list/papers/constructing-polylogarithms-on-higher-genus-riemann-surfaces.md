source: https://arxiv.org/pdf/2306.08644
slogan: One flat connection built from the Arakelov Green function gives explicit polylogarithms on a compact Riemann surface of any genus.
basis: the introduction and the main theorem statements

## Before you start

This is a 55-page physics paper with tensor indices on almost every symbol: I, J, raised, lowered, summed. The likely feeling is a fear of being slow, of losing the thread in the index notation by page 15. That fear is reasonable, and it can sit beside you while you read. If you want to see how the logarithm generalises from the sphere to the torus to any surface, this paper shows the pattern in one formula. Enjoy the genus-zero and genus-one review first. The rest can wait.

## The story

Physicists compute scattering amplitudes with polylogarithms, because that class of functions is closed under taking primitives, so integration becomes an algorithm. On the sphere the functions come from the forms dz/(z − s). On the torus, Brown and Levin found the right kernels by expanding a Kronecker-Eisenstein series. Higher loop orders need surfaces of higher genus, and there the mathematical proposals of Enriquez and Zerbini had not yet given usable formulas. The authors notice that the genus-one kernels can also be written as repeated convolutions of the Green function on the torus. That description does not use theta functions or translation invariance, so it survives at genus h. They replace the torus Green function by the Arakelov Green function, convolve it with holomorphic differentials, and assemble the results into a flat connection. Its path-ordered exponential generates the polylogarithms.

## Main definitions

**Flat connection and homotopy invariance.** A one-form J on a surface Σ with values in a Lie algebra is flat when dJ − J ∧ J = 0. Then the path-ordered exponential of J along a path depends only on the endpoints and the homotopy class of the path.
- Genus zero: J = Σ e<sub>i</sub> dz/(z − s<sub>i</sub>), the Knizhnik-Zamolodchikov connection.
- Genus one: the Brown-Levin connection, with two generators a and b.

**Arakelov Green function.** Let ω<sub>I</sub> (I = 1, …, h) be the holomorphic differentials normalised on A-cycles, and let κ be the unit-volume form (i/2h) ω<sub>I</sub> ∧ ω̄<sup>I</sup>. The Arakelov Green function G(x, y) is the function on Σ × Σ with ∂<sub>x̄</sub>∂<sub>x</sub>G = −πδ(x, y) + πκ(x) and ∫ κ(x) G(x, y) = 0.

**Modular tensor.** A function of the surface with a choice of canonical homology basis, carrying indices I<sub>1</sub>, …, I<sub>n</sub>, which transforms under M in Sp(2h, ℤ) by one factor of Q = CΩ + D (or its inverse) per index. Here Ω is the period matrix. At genus one this is a modular form.

**Higher-genus polylogarithm.** Let L be the free Lie algebra on 2h generators a<sup>I</sup>, b<sub>I</sub>. Expand the path-ordered exponential of the connection J(x, p) from y to x as a sum over words w in these letters. The coefficient Γ(w; x, y; p) of w is the polylogarithm of the word w.

## Main results

**Theorem (flat connection; Theorem 3.1).** On a compact Riemann surface of genus h with a marked point p there is an explicit connection J(x, p) with values in the free Lie algebra on a<sup>I</sup>, b<sub>I</sub>. Its coefficients are ω̄<sup>I</sup> and derivatives of convolutions of Arakelov Green functions with holomorphic differentials. It is flat, and at genus one it equals the Brown-Levin connection.
- Step 1: pack the convolutions into two generating series, with the operators B<sub>I</sub> = [b<sub>I</sub>, ·] as formal variables, and derive their x̄-derivatives from the Green function equation.
- Step 2: combine the series so that the κ terms cancel. The remaining equations give dJ − J ∧ J = 0 away from p.

**Theorem (modular invariance; Theorem 3.2).** If the generators transform by a<sup>I</sup> ↦ Q<sup>I</sup><sub>J</sub> a<sup>J</sup> + 2πi C<sup>IJ</sup> b<sub>J</sub> and b<sub>I</sub> ↦ b<sub>J</sub> R<sup>J</sup><sub>I</sub>, with R = Q<sup>−1</sup>, then J(x, p) is invariant under Sp(2h, ℤ). So the polylogarithms can be organised as modular tensors.

**Claim (closure under primitives; Section 4.6).** The authors give evidence, not a proof, that products of these polylogarithms with the integration kernels have primitives in the same class. The two tools are the interchange lemma and Fay identities at higher genus.

**Claim (degeneration; Section 6).** When a genus-two surface pinches along a separating cycle into two tori, the connection reduces to the Brown-Levin connection on each torus.

## Note, then ignore

- Single-valued, not meromorphic. At genus h ≥ 1 a connection cannot be single-valued, meromorphic and have only simple poles at once. The authors keep the first and third. Safe to skip on a first reading.
- The tensor Φ. A traceless convolution tensor Φ appears at genus h ≥ 2 and makes up for the loss of translation invariance. It vanishes at genus one. Safe to skip.
- The basis â<sup>I</sup> = a<sup>I</sup> + πY<sup>IJ</sup> b<sub>J</sub>. This change of generators makes the modular transformation purely tensorial. Safe to skip.
- Relation to Enriquez-Zerbini. The paper shares their Lie algebra but does not prove that the function spaces agree. It leaves that to later work. Safe to skip.
- Versions. The arXiv file is version 3, revised in March 2025. Equation numbers here follow it. Safe to skip.

## One next step

Open the paper at Section 2.2 (page 7) and read the three numbered options for a genus-one connection. Then look at formula (3.32) in Theorem 3.1.
