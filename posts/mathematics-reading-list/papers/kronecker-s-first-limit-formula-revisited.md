source: https://people.math.ethz.ch/~oezlemi/pdf/papers/2018-DIT-KroneckerLF.pdf
slogan: Kronecker's formula reads L-values off one modular function, at points for imaginary quadratic fields and against winding numbers of closed geodesics for real ones.
basis: the introduction and the main theorem statements

## Before you start

The introduction lists a dozen great names, from Weber to Zagier, and 150 years of work. That can bring a feeling of arriving late to a long conversation. It is fine to feel that. The paper is written as a guided tour and proves the old formula in two pages. If you like explicit identities, it gives you class numbers from continued fractions and from areas in the upper half-plane. Pick the examples that please you. The rest can wait.

## The story

At s = 1 the Riemann zeta function is 1/(s − 1) plus Euler's constant. Kronecker found the next term for the zeta function of a positive definite quadratic form Q. It is the value at a point z<sub>Q</sub> of one modular function, H(z) = −log(y|η(z)|<sup>4</sup>). This gives closed formulas for L-values of imaginary quadratic fields. For real quadratic fields the forms are indefinite and there is no point z<sub>Q</sub>. Hecke's answer was to integrate over a closed geodesic on the modular surface. That handles "even" characters. For "odd" ones the first derivative at 0 stayed open. The authors replace the line integral by an area integral: they weight H by the winding number of the geodesic around each point. The result ties a real quadratic field to two imaginary ones.

## Main definitions

**Zeta function of a form and the height H.** For Q(x, y) = ax² + bxy + cy² with a > 0 and D = b² − 4ac &lt; 0, set ζ<sub>Q</sub>(s) = Σ Q(m, n)<sup>−s</sup> over (m, n) ≠ (0, 0), and z<sub>Q</sub> = (−b + √D)/(2a) in the upper half-plane. Set H(z) = −log(y|η(z)|<sup>4</sup>), with η the Dedekind eta function. H is invariant under Γ = PSL(2, ℤ).
- H is the coefficient of −s in the expansion of the Eisenstein series E(z, s) at s = 0, and ΔH = 1 for the hyperbolic Laplacian.

**Closed geodesic C<sub>A</sub>.** Let D > 0 be a fundamental discriminant and A a narrow ideal class of ℚ(√D). Write an ideal in A as wℤ + ℤ with w > w<sup>σ</sup>. The semicircle from w<sup>σ</sup> to w, taken modulo the unit ε<sub>D</sub>, is a closed geodesic C<sub>A</sub> on Γ\ℍ.
- The class J of the different (√D) reverses orientation: C<sub>A<sup>−1</sup>J</sub> is C<sub>A</sub> run backwards.

**Odd part ζ<sub>−</sub> and Ψ.** Set ζ<sub>±</sub>(s, A) = ½(ζ(s, A) ± ζ(s, JA)), with ζ(s, A) the partial zeta function. Let ((n<sub>1</sub>, …, n<sub>ℓ</sub>)) be the cycle of the minus continued fraction of w. Then Ψ(A) = n<sub>1</sub> + … + n<sub>ℓ</sub> − 3ℓ. It equals the Rademacher symbol of the hyperbolic matrix fixing w.

**Winding number ν<sub>A</sub>.** ν<sub>A</sub>(z) is the integral over C<sub>A</sub> of j′(τ)dτ/(j(z) − j(τ)), with j′ = (1/2πi) dj/dτ. For z off C<sub>A</sub> it is an integer: the signed number of times a path from i∞ to z in the fundamental domain F crosses C<sub>A</sub>.

## Main results

**Theorem (Kronecker's first limit formula; Theorem 1).** For a > 0 and D &lt; 0, the limit as s → 1<sup>+</sup> of |D|<sup>s/2</sup> ζ<sub>Q</sub>(s) − 2π/(s − 1) equals 2π(2γ<sub>0</sub> − log 4 + H(z<sub>Q</sub>)), with γ<sub>0</sub> Euler's constant.
- Step 1: write ζ<sub>Q</sub> through E(z<sub>Q</sub>, s) and use its Fourier expansion with Bessel functions.
- Step 2: at s = 1 the Bessel function is elementary, and the series sums to log|η|.

**Theorem (Hecke, even case; Theorem 5).** For D > 1, ζ<sub>+</sub>(0, A) = 0 and ζ<sub>+</sub>′(0, A) = −¼ log ε<sub>D</sub>. The second derivative ζ<sub>+</sub>″(0, A) is ¼ times the integral over C<sub>A</sub> of H(z) plus an explicit constant, against hyperbolic arc length.

**Theorem (value at 0, odd case; Theorem 6).** For a narrow class A of a real quadratic field, ζ<sub>−</sub>(0, A) = Ψ(A)/12. Equivalently (3/π) ∫<sub>F</sub> ν<sub>A</sub> dμ = Ψ(A), with dμ = dx dy/y².
- Consequence (after Corollary 3): for a prime q ≡ 3 mod 4, q > 3, with h(4q) = 2, the class number h(−q) is a third of Σ(n<sub>k</sub> − 3) over the cycle of √q. For q = 163 this is (108 − 105)/3 = 1.

**Theorem (derivative at 0, odd case, new; Theorem 7).** Let D = d′d with d, d′ negative coprime fundamental discriminants. Then ζ<sub>−</sub>(0, A) = (1/4π) ∫<sub>F</sub> ν<sub>A</sub> dμ, and ζ<sub>−</sub>′(0, A) = −(1/4π) ∫<sub>F</sub> ν<sub>A</sub>(z)(H(z) + c<sub>D</sub>) dμ, where c<sub>D</sub> is an explicit constant involving log D (see the statement).
- Corollary 5: for the genus character χ of D = d′d, the χ-weighted average of H − 1 against the winding numbers ν<sub>C</sub> equals the average of H − 1 over the CM points of discriminant d plus the same average for d′.
- Method: integrate H against ν<sub>A</sub> over F, in place of integrating a derivative of the Eisenstein series along C<sub>A</sub>.

## Note, then ignore

- Narrow versus wide classes. Narrow classes use only generators of positive norm. The two notions differ exactly when there is no unit of norm −1, and that is when odd characters exist. Safe to skip.
- Expansion at 0, not 1. The functional equation moves everything to s = 0, where Euler's constant drops out. Safe to skip.
- Minus continued fractions. They use subtraction, a<sub>0</sub> − 1/(a<sub>1</sub> − …), with all later terms at least 2. They are chosen because the cycle spells a word in the generators T and S. Safe to skip.
- Constants. Terms such as log(8π²|D|<sup>−1/2</sup>) and the root numbers w come from Gamma factors and units. Safe to skip.

## One next step

Open the paper at Figure 3 on page 16 and read the worked example for D = 12 just after equation (74), where three areas add up to Ψ = 1.
