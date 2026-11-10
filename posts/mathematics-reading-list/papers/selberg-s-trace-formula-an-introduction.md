source: https://arxiv.org/pdf/math/0407288
slogan: On a compact hyperbolic surface, the Laplace eigenvalues and the lengths of closed geodesics determine each other through one explicit identity.
basis: the full text

## Before you start

This is a 37-page lecture course with many integrals and contour pictures. The likely feeling is impatience: the formula you came for arrives in Section 10, after nine sections of preparation. It is fine to feel that, and fine to jump ahead. If you want one fully worked trace formula in your hands before meeting the adelic ones, this is a friendly place to get it. Enjoy the circle and the sphere first. The rest can wait.

## The story

Nobody has a formula for a single eigenvalue of the Laplacian on a compact hyperbolic surface M. Yet one can say a great deal about all of them together. Marklof starts with the circle, where Poisson summation equates a sum over eigenvalues with a sum over closed geodesics of length 2π|n|. The sphere works the same way. On M = Γ\ℍ<sup>2</sup> there is no Poisson summation to quote, so he builds an operator L from a function of hyperbolic distance, averaged over Γ. Its trace is Σ h(ρ<sub>j</sub>) on the spectral side. On the geometric side the sum over Γ splits into conjugacy classes, and each class is a closed geodesic. The identity between the two is Selberg's trace formula. Weyl's law, the count of closed geodesics and the Selberg zeta function all follow from good choices of h.

## Main definitions

**Spectral parameters.** The operator −Δ on M has eigenvalues 0 = λ<sub>0</sub> &lt; λ<sub>1</sub> ≤ λ<sub>2</sub> ≤ … → ∞. Write λ<sub>j</sub> = ρ<sub>j</sub><sup>2</sup> + 1/4. Eigenvalues below 1/4 give imaginary ρ<sub>j</sub> and are called small.

**Admissible test function.** A function h that is (H1) analytic in a strip |Im ρ| ≤ σ with σ > 1/2, (H2) even, and (H3) bounded by a constant times (1 + |Re ρ|)<sup>−2−δ</sup> in the strip. Its Fourier transform is g(t) = (1/2π) ∫ h(ρ) e<sup>−iρt</sup> dρ.

**Point-pair invariant.** A function k(z, w) on ℍ<sup>2</sup> × ℍ<sup>2</sup> that depends only on the distance d(z, w). Marklof builds k from h by integrating the Green's function of Δ against ρ h(ρ).
- Step: sum over the group, k<sub>Γ</sub>(z, w) = Σ k(γz, w), to get a kernel on M.
- Step: every eigenfunction φ<sub>j</sub> satisfies Lφ<sub>j</sub> = h(ρ<sub>j</sub>) φ<sub>j</sub>.

**Selberg zeta function.** Z(s) = Π Π (1 − e<sup>−ℓ(s+m)</sup>), over primitive closed geodesics of length ℓ and integers m ≥ 0. The product converges for Re s > 1.

## Main results

**Theorem (Selberg's trace formula; Theorem 4 with Corollary 1).** Let M = Γ\ℍ<sup>2</sup> be compact, with Γ strictly hyperbolic, and let h satisfy (H1), (H2), (H3). Then Σ<sub>j</sub> h(ρ<sub>j</sub>) = (Area(M)/4π) ∫ h(ρ) tanh(πρ) ρ dρ + Σ<sub>γ</sub> Σ<sub>n≥1</sub> ℓ<sub>γ</sub> g(nℓ<sub>γ</sub>) / (2 sinh(nℓ<sub>γ</sub>/2)). The integral is over ℝ. The outer sum is over primitive closed geodesics γ of length ℓ<sub>γ</sub>.
- Step 1: expand k<sub>Γ</sub>(z, z) in eigenfunctions to get the pre-trace formula (Theorem 3), valid at each point z.
- Step 2: integrate over M. The identity term gives the area term. Each conjugacy class reduces to a computation on a hyperbolic cylinder.

**Theorem (Weyl's law; Proposition 10).** The number of eigenvalues λ<sub>j</sub> ≤ λ is asymptotic to (Area(M)/4π) λ as λ → ∞.
- Step 1: put h(ρ) = e<sup>−βρ²</sup> in the trace formula. The geodesic sum vanishes as β → 0.
- Step 2: apply a Tauberian theorem to the heat trace.

**Theorem (zeros of Z; Theorem 5).** Z(s) continues to an entire function. Its non-trivial zeros are s = 1 and s = 1/2 ± iρ<sub>j</sub>. Its trivial zeros are at s = 0, −1, −2, … with multiplicities fixed by the genus. Z satisfies a functional equation relating Z(s) and Z(1 − s).

**Claim (density of closed geodesics; Proposition 11).** A smoothed count of closed geodesics with length near L has a main term from the small eigenvalues, the leading one of size e<sup>L</sup>/L, with error O(e<sup>L/2</sup>/L). The notes prove only this smoothed version.

## Note, then ignore

- (H3\*) versus (H3). Early proofs use rapid decay of h. Corollary 1 removes the extra assumption once Weyl's law is known. Safe to skip on a first reading.
- Strictly hyperbolic Γ. The notes assume no elliptic elements, so M has no cone points. Extra terms appear otherwise. Safe to skip at first.
- The branch of ρ<sub>j</sub>. A convention fixes the argument of ρ<sub>j</sub>. Since h is even, the choice does not change the formula. Safe to skip at first.
- "The ghost of the sphere" (Section 6). It explains the tanh term by analogy with the tan term for the sphere. It is a side remark. Safe to skip at first.
- Hyperbolic cylinders and scattering poles (Section 8). They give a second reading of each geodesic term. Safe to skip at first.

## One next step

Read Section 1 (two pages) and check formula (6): Poisson summation as the trace of an operator on the circle.
