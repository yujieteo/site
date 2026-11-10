source: https://arxiv.org/pdf/0706.4054
slogan: One operator built from the quantum dilogarithm has fifth power a constant, because it quantises the rotation of five points on a line.
basis: the introduction and the main theorem statements

## Before you start

The paper is twelve pages, yet page one opens with a contour integral inside an exponential, and page five moves to unbounded operators on L<sup>2</sup>(ℝ). The likely feeling is fear of being too slow: analysis of this kind punishes skimming. You are allowed to be slow here, or to stop at the statement. If you want to see why the five-term relation of the dilogarithm has five terms, this paper gives a geometric reason. Read it for that picture, and let the proof wait.

## The story

Abel's five-term relation for the dilogarithm has a quantum version: a pentagon identity for Faddeev's quantum dilogarithm Φ<sup>ħ</sup>. It can be phrased as a statement about one operator K on L<sup>2</sup>(ℝ), a Fourier transform followed by multiplication by Φ<sup>ħ</sup>. The claim is K<sup>5</sup> = constant. Chekhov and Fock stated it, but their argument had a gap, and this held up the quantisation of Teichmüller spaces. Goncharov places K inside a rigid structure. The space of five cyclically ordered points on ℙ<sup>1</sup> has five coordinate charts and a rotation γ of order 5. Its quantised function algebra L acts on L<sup>2</sup>(ℝ) by difference operators. K turns out to implement γ. Since γ<sup>5</sup> = 1, K<sup>5</sup> commutes with everything in L, and that forces it to be a constant.

## Main definitions

**Quantum dilogarithm.** For ħ > 0, Φ<sup>ħ</sup>(z) = exp(−(1/4)∫<sub>Ω</sub> e<sup>−ipz</sup> / (sh(πp) sh(πħp)) dp/p), with sh(p) = (e<sup>p</sup> − e<sup>−p</sup>)/2 and Ω a path along the real line passing over 0. It is meromorphic and has absolute value 1 on the real line.
- Difference relations: with q = e<sup>πiħ</sup> and q<sup>∨</sup> = e<sup>πi/ħ</sup>, Φ<sup>ħ</sup>(z + 2πiħ) = Φ<sup>ħ</sup>(z)(1 + qe<sup>z</sup>) and Φ<sup>ħ</sup>(z + 2πi) = Φ<sup>ħ</sup>(z)(1 + q<sup>∨</sup>e<sup>z/ħ</sup>).
- Limit: as ħ → 0 it behaves like exp(L<sub>2</sub>(e<sup>z</sup>)/2πiħ), where L<sub>2</sub>(x) = ∫<sub>0</sub><sup>x</sup> log(1 + t) dt/t.

**The operator K.** Kf(z) = ∫ f(x) Φ<sup>ħ</sup>(x) exp(−xz/2πiħ) dx over the real line. A constant multiple of K is unitary, because |Φ<sup>ħ</sup>| = 1 on ℝ.

**The algebra L and the automorphism γ.** The quantum torus T<sub>q</sub> has generators X, Y with q<sup>−1</sup>XY = qYX. The map γ sends X to Y<sup>−1</sup> and Y to (1 + qY)X, and has order 5 on the fraction field. L<sub>q</sub> is spanned by a canonical basis of elements that stay Laurent polynomials under all powers of γ. L = L<sub>q</sub> ⊗ L<sub>q<sup>∨</sup></sub>.
- Action: X acts on functions by the shift x ↦ x + 2πiħ and Y by multiplication by e<sup>x</sup>. The second factor uses the shift by 2πi and multiplication by e<sup>x/ħ</sup>.

**Schwartz space S<sub>L</sub>.** The common domain in L<sup>2</sup>(ℝ) of all operators from L, with the topology given by the seminorms f ↦ ‖Bf‖ for B in L (Definition 2.2).

## Main results

**Theorem (pentagon; Theorem 1.1).** Let ħ > 0 and let K be normalised to be unitary. Then K<sup>5</sup> = λ·Id with |λ| = 1.
- Step 1: by Theorem 2.6, K<sup>5</sup> commutes with L. Commuting with the multiplications e<sup>nx</sup> makes K<sup>5</sup> multiplication by a function F.
- Step 2: F is analytic in the upper half plane and invariant under shifts by 2πi(m + nħ). So F is constant for irrational ħ, and continuity in ħ gives the rest.

**Theorem (K quantises the rotation; Theorem 2.6).** K preserves S<sub>L</sub>, and for every A in L and s in S<sub>L</sub>, K<sup>−1</sup>AKs = γ(A)s. This characterises K up to a constant.
- Step 1: check three identities for K against X<sup>−1</sup>, Y<sup>−1</sup> and (1 + qY)X on Gaussian test functions, by shifting contours and using the difference relations.
- Step 2: pass from test functions to S<sub>L</sub> by density.

**Theorem (density; Theorem 2.3).** The space W of finite combinations of functions e<sup>−ax²/2 + bx</sup>P(x), with a > 0, b complex and P a polynomial, is dense in S<sub>L</sub>. In other words, L is essentially self-adjoint on L<sup>2</sup>(ℝ).

**Theorem (geometry of the classical space; Theorem 3.2).** The space of 5 cyclically ordered points on ℙ<sup>1</sup>, with neighbours not allowed to collide, is covered by five open charts inside M<sub>0,5</sub>, and an explicit family of functions indexed by integers a ≥ 0, b ≤ 0 and a chart index mod 5 is a basis of its regular functions. This identifies it with the cluster variety of type A<sub>2</sub>.

## Note, then ignore

- The constant in front of K. The paper writes the unitary operator as 2π√ħ·K. Only the fact that some multiple is unitary matters. Safe to skip on a first reading.
- Earlier proofs. The paper credits the pentagon for the simpler function Ψ<sup>q</sup> to Faddeev and Kashaev, and says the equivalent relation for Φ<sup>ħ</sup> was proved by other methods by Woronowicz and by Faddeev, Kashaev and Volkov. Safe to skip.
- Why ħ > 0. The contour shifts in the proof must avoid the poles of Φ<sup>ħ</sup>, which lie in the lower half plane. Safe to skip.
- Modular double. The second copy L<sub>q<sup>∨</sup></sub>, with ħ replaced by 1/ħ, commutes with the first. It is needed to pin K down, but the algebra is the same. Safe to skip.
- Positivity. The canonical basis has positive integer coefficients, and a footnote says the proof does not use this. Safe to skip.

## One next step

Open the paper at page 2 and read Theorem 1.1 with the two paragraphs after it, then look at Figure 1.
