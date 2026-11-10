source: https://link.springer.com/article/10.1007/s11005-010-0407-3
slogan: The Γ-factor at the infinite prime is a disk partition function, so the odd place gets a geometric meaning of its own.
basis: the abstract only

## Before you start

This letter is a short account of longer papers, and it sits between two fields. The likely feeling is a double doubt: not enough number theory for one half, not enough field theory for the other. You are allowed to feel out of place in both rooms. If you have wondered why the completed zeta function needs a Γ-function in front, here is an answer with a picture. Enjoy the single Gaussian integral at its centre. The rest can wait.

## The story

A global L-function is a product over primes, plus one extra factor for the real or complex place. At a prime p the factor comes from a characteristic polynomial of Frobenius. At infinity it is a product of Γ-functions, with no algebra in sight. The authors want the infinite place to stand on the same footing. Their idea: look at holomorphic maps from a disk to ℂ. Such a map is a power series, and the circle rotates the n-th coefficient with weight n. A Gaussian integral over the coefficients gives the regularised product of 1/(λ + n) over n ≥ 0, and that product is Γ(λ) up to elementary factors. So Γ is an equivariant volume of an infinite-dimensional space. Euler's integral then appears as the mirror-dual description.

## Main definitions

**Local Archimedean L-factor.** For V = ℂ<sup>ℓ+1</sup> and a matrix Λ acting on V, the real factor is L(s) = det<sub>V</sub> π<sup>−(s−Λ)/2</sup> Γ((s−Λ)/2). The complex factor is det<sub>V</sub> (2π)<sup>−(s−Λ)</sup> Γ(s−Λ).
- Compare with a prime p, where the factor is det<sub>V</sub> (1 − g p<sup>−s</sup>)<sup>−1</sup> for a Frobenius class g.

**Equivariant type A linear sigma model on a disk.** A topological field theory with quadratic action whose fields include a map from the disk D = {|z| ≤ 1} to V. The group S<sup>1</sup> × U<sub>ℓ+1</sub> acts: the circle rotates D and the unitary group acts on V. One inserts a boundary observable O built from the symplectic form and the moment maps.
- The action is quadratic, so the functional integral is Gaussian and is defined by ζ-function regularisation.

**q-deformed Γ-function.** Γ<sub>q</sub>(t) = Π<sub>k≥0</sub> 1/(1 − t q<sup>k</sup>). It is a character: the trace of a torus element on polynomial functions on the space of maps.

**Universal Baxter operator.** According to the abstract, a certain element of the spherical Hecke algebra of (G, K). It is the Archimedean stand-in for the Hecke operators at a prime.

## Main results

The letter reports results proved in companion papers. Theorem numbers below are from Part I (arXiv:0906.1065), which this page was checked against.

**Theorem (Γ-factors as a disk correlator; Part I, Theorem 2.1).** Let V = ℂ<sup>ℓ+1</sup> be the standard representation of U<sub>ℓ+1</sub> and Λ the image of a Lie algebra element in End(V). In the S<sup>1</sup> × U<sub>ℓ+1</sub>-equivariant type A linear sigma model on D, computed by ζ-regularisation, the correlator of exp(μO) equals ħ<sup>−(ℓ+1)/2</sup> det<sub>V</sub> (2/μħ)<sup>−Λ/ħ</sup> Γ(Λ/ħ). With μ = 2/π, ħ = 1 and Λ replaced by (s − Λ)/2 this is the real Archimedean L-factor.
- Step 1: unitary invariance reduces to diagonal Λ, so the integral factorises into ℓ + 1 copies of the case V = ℂ.
- Step 2: for V = ℂ the Gaussian integral over Fourier modes gives a ζ-regularised product, which is Γ (Part I, Proposition 2.1).

**Theorem (quantised volume; Part I, Proposition 3.1).** Quantising the space of holomorphic maps D → ℂ<sup>ℓ+1</sup> gives a partition function equal to Π<sub>j</sub> Γ<sub>q</sub>(t<sub>j</sub>), with q = e<sup>−βħ</sup> and t<sub>j</sub> = e<sup>−βλ<sub>j</sub></sup>. Part I also writes this as a functional integral in a three-dimensional sigma model on D × S<sup>1</sup>.

**Claim (Baxter eigenvalues; from the abstract).** The universal Baxter operator acts on spherical vectors in irreducible representations of G, and its eigenvalues are the local Archimedean L-factors.

**Claim (physics argument: Langlands as mirror symmetry).** A type B sigma model on the disk with a superpotential computes the same L-factor and reduces to Euler's integral for Γ (Part II, arXiv:0909.2016). The authors propose that the mirror map between the A and B models is the local Archimedean Langlands correspondence. The mirror map itself is derived heuristically.

## Note, then ignore

- Basis of this page. The journal text is behind a paywall. This page uses the journal abstract and the two companion preprints the letter summarises. Details of the letter's own wording were not checked.
- Regularisation scale. A different ζ-regularisation changes the answer by a factor A·B<sup>s</sup>, which is the usual freedom in an L-factor. Safe to skip.
- Real and complex places. The real factor uses Γ((s − Λ)/2) and the complex one Γ(s − Λ). Other choices of μ and ħ give the complex factor. Read one case and skip the other at first.
- Class one Whittaker functions. They enter the q-deformed story and the link to the Casselman-Shalika formula. The Γ-function story stands without them. Safe to skip.
- Real structure on fields. Part II picks a reality condition that differs from the one in twisted supersymmetric models. It matters for convergence, not for the plot. Skip it.

## One next step

Open arXiv:0906.1065 and read only Theorem 2.1 and the two-line proof under it. Then glance at Proposition 2.1 to see the single-variable case.
