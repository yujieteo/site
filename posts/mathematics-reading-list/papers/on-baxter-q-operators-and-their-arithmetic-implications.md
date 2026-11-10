source: https://arxiv.org/pdf/0711.2812
slogan: The Gamma factors of number theory appear as eigenvalues of an explicit integral operator in the quantum Toda chain.
basis: the introduction and the main theorem statements

## Before you start

Expect some disorientation. These are seminar notes from mathematical physicists, with long kernels, three versions of the Toda chain, and claims that range from proved to hoped for. It is fine to feel unsure which is which. The notes themselves often do not say. If you have wondered why π<sup>−s/2</sup>Γ(s/2) belongs next to the Euler factors of ζ, here it comes out of a concrete integral. Start with that one integral for pleasure. The affine generalisations are optional.

## The story

At a prime p, a local L-factor is 1/(1 − p<sup>−s</sup>), and it has a clear origin: a Frobenius eigenvalue, or a Hecke operator acting on a spherical function. At the real place the factor is π<sup>−s/2</sup>Γ(s/2), and its origin is much less clear. In earlier work the authors found a candidate. The quantum Toda chain is an integrable system whose eigenfunctions are Whittaker functions of GL(ℓ+1, ℝ). Baxter's method for integrable systems supplies an extra operator Q(λ) commuting with the Hamiltonians. Its eigenvalue on a Whittaker function is exactly the product of Gamma factors attached to the principal series. So Q behaves like a Hecke operator at infinity. These notes push the idea further: a determinant formula for Γ, versions for affine Lie algebras, and a lattice model that interpolates between the real and p-adic worlds.

## Main definitions

**Quantum gl<sub>ℓ+1</sub>-Toda chain.** A family of ℓ+1 commuting differential operators in variables x<sub>1</sub>, …, x<sub>ℓ+1</sub>. The first is −iΣ∂/∂x<sub>j</sub>. The second is −½Σ∂<sup>2</sup>/∂x<sub>j</sub><sup>2</sup> + Σ exp(x<sub>j</sub> − x<sub>j+1</sub>).

**Whittaker function.** A common eigenfunction Ψ<sub>γ</sub>(x) of these Hamiltonians, labelled by γ = (γ<sub>1</sub>, …, γ<sub>ℓ+1</sub>). The first two eigenvalues are Σγ<sub>j</sub> and ½Σγ<sub>j</sub><sup>2</sup>.
- Class one principal series: the case used here, given by an explicit iterated integral.
- ℓ = 0: the function is just exp(iγx).

**Baxter Q-operator.** An integral operator Q(λ), depending on a spectral parameter λ, with an explicit kernel that is an exponential of exponentials. In the earlier paper [GLO] the authors read it as an element of the spherical Hecke algebra of GL(ℓ+1, ℝ) relative to SO(ℓ+1).
- ℓ = 0: the kernel is 2 exp(iλ(x − y) − π e<sup>2(x−y)</sup>).

**Local Archimedean L-factor.** For the principal series of GL(ℓ+1, ℝ) with parameters γ, the product over j of π<sup>−s<sub>j</sub>/2</sup> Γ(s<sub>j</sub>/2), with s<sub>j</sub> = iλ − iγ<sub>j</sub>.

## Main results

**Theorem (eigenvalue of Q; Theorem 2.1, from [GLO]).** The modified class one Whittaker function Φ<sub>γ</sub> is an eigenfunction of Q(λ). The eigenvalue is the product over j = 1, …, ℓ+1 of π<sup>−(iλ−iγ<sub>j</sub>)/2</sup> Γ((iλ − iγ<sub>j</sub>)/2).
- Case ℓ = 0 (Corollary 2.1): Q(λ) applied to exp(iγx) is a one-line Gamma integral.
- General ℓ: the proof is in [GLO] and is not repeated in these notes.

**Proposition (generalised Q; Proposition 2.1).** Insert a parameter t > 0 into the kernel. The eigenvalue becomes the same product with π replaced by πt. It satisfies a first-order differential equation in t and the difference equation Q(λ − 2i, t) = Π<sub>j</sub> ((iλ − iγ<sub>j</sub>)/(2πt)) · Q(λ, t).
- Consequence: the eigenvalue is a fundamental solution of an ordinary differential operator, evaluated at t = 1. This is the Dorey-Tateo picture of Q-eigenvalues as spectral determinants.

**Claim (Γ as a determinant; formula 2.29).** After regularisation, Γ(λ − γ) = 1/det(λ − γ + x∂<sub>x</sub>). The argument computes the trace of the scaling operator f(x) ↦ e<sup>−tγ</sup>f(e<sup>−t</sup>x) and compares it with an integral formula for log Γ.
- Interpretation (physics argument): the authors identify x∂<sub>x</sub> with a generator of the abelianised Weil group of ℝ and with the Archimedean Pólya-Hilbert operator of Berry and Keating.

**Claim (affine and lattice versions; Proposition 3.1 and Sections 5 and 6).** For the affine algebra of gl<sub>1</sub> at generic level, the Q-eigenvalue is a double sine function. The authors propose it as a new Archimedean L-factor for affine groups. A lattice q-Toda chain gives Whittaker functions that reduce, as q → 0, to the p-adic formula of Shintani and Casselman-Shalika, where a Whittaker function is a character of the dual group. The real-place analogue is proposed, not proved.

## Note, then ignore

- Two kinds of statement. Theorem 2.1 and the Propositions are computations. The Weil group reading and the Archimedean Casselman-Shalika formula are proposals. Safe to skip the proposals on a first reading.
- The shift by ρ. The modified function Φ is Ψ times an exponential exp(Σρ<sub>j</sub>x<sub>j</sub>). It only tidies the kernel. Safe to skip.
- Regularisation. The determinant in (2.29) needs divergent terms removed, for example by zeta regularisation. The notes do not fix one scheme. Safe to skip.
- Generic against critical level. The affine chain splits into two cases, the relativistic (q-deformed) chain and the standard affine chain. Only the simplest instances are worked out. Safe to skip.
- Spelling. The abstract writes "Berry-Kitting" for Berry and Keating. Safe to skip.

## One next step

Open the paper at Corollary 2.1 (page 6) and check formula (2.13) by hand: substitute u = e<sup>2(x−y)</sup> and watch Γ appear.
