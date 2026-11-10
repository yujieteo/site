source: https://indico.math.cnrs.fr/category/603/attachments/3705/9114/Expose%CC%81-ATR_IHP-Pierre-2025-v2.pdf
slogan: The elliptic Gamma function, evaluated at points of a complex cubic field, appears to give units in abelian extensions, as theta functions do for imaginary quadratic fields.
basis: the full text

## Before you start

This is a slide deck for a seminar talk, with many overlay pages and a main statement that is a conjecture. The likely feeling is unease: no proofs to hold on to, and Hilbert's twelfth problem has a heavy reputation. It is fine to feel unsure what to trust here. The talk is built on a numerical example you could rerun yourself in PARI/GP. If you like seeing a transcendental function land on an algebraic number, this is that. Enjoy the example first. Completeness can come later.

## The story

Hilbert asked for analytic functions whose special values generate the abelian extensions of a number field. Over ℚ the exponential does it, and 1 − e<sup>2πia/f</sup> gives cyclotomic units. Over an imaginary quadratic field, a theta function θ<sub>0</sub>(z, τ) at CM points gives elliptic units. The next case is a complex cubic field, whose ring of integers has rank 3. Here there is an obstruction: no meromorphic function on ℂ has three independent periods. In 1844 Eisenstein suggested "quotients of quotients" of triple infinite products with inequality conditions on the indices. Bergeron, Charollois and García show that such a quotient is a ratio of elliptic Gamma functions, a function from mathematical physics. Then they evaluate it at cubic points. The numbers agree with units to 1000 digits.

## Main definitions

**Theta function θ<sub>0</sub>.** With q<sub>z</sub> = e<sup>2πiz</sup> and q<sub>τ</sub> = e<sup>2πiτ</sup>, it is θ<sub>0</sub>(z, τ) = (1 − q<sub>z</sub>) ∏<sub>n≥1</sub> (1 − q<sub>τ</sub><sup>n</sup>q<sub>z</sub>)(1 − q<sub>τ</sub><sup>n</sup>/q<sub>z</sub>) on ℂ × ℍ. Under SL<sub>2</sub>(ℤ) it changes by an exponential of a polynomial of degree at most 2 in z.
- Smoothing: for an ideal of norm N, the ratio θ<sub>0</sub>(z, τ)<sup>N</sup>/θ<sub>0</sub>(Nz, Nτ) at CM points gives the elliptic units.

**Elliptic Gamma function.** Γ(z, τ, σ) = ∏<sub>j,k≥0</sub> (1 − e<sup>2πi((j+1)τ + (k+1)σ − z)</sup>) / (1 − e<sup>2πi(jτ + kσ + z)</sup>), meromorphic on ℂ × ℍ × ℍ. Ruijsenaars introduced it in 1997.
- Periodicity: Γ(z + 1, τ, σ) = Γ(z, τ, σ) and Γ(z + τ, τ, σ) = θ<sub>0</sub>(z, σ) Γ(z, τ, σ).
- Modularity: under SL<sub>3</sub>(ℤ), a product of three Γ values equals the exponential of a polynomial of degree 3 in z (Felder-Varchenko).

**The functions Γ<sub>a,b</sub>.** For a pair a, b of primitive vectors in ℤ<sup>3</sup>, Felder, Henriques, Rossi and Zhu define Γ<sub>a,b</sub>(z, x) as a product over linear forms δ with δ(a) > 0 and δ(b) ≤ 0. It is a finite product of ordinary elliptic Gamma functions and is equivariant under SL<sub>3</sub>(ℤ).
- Cocycle property: Γ<sub>a,b</sub> Γ<sub>b,c</sub> Γ<sub>c,a</sub> is the exponential of a polynomial in z with coefficients rational in x.

## Main results

**Theorem (Eisenstein's triple product; Bergeron-Charollois-García 2023).** Take Eisenstein's smoothed triple product over λ ∈ ℤ and λ′, λ″ > 0, and the same product over λ′, λ″ ≤ 0. Their quotient is an explicit ratio of elliptic Gamma functions of the shape Γ(z, A, A′)<sup>N</sup>/Γ(Nz, NA, NA′).
- Step 1: sum over λ first, with Euler's product for the sine.
- Step 2: do this at (z, v) and at (Nz, Nv), then divide. The smoothing removes the divergence.

**Conjecture (cubic elliptic units; Bergeron-Charollois-García).** Let K be a complex cubic field, f ≠ O<sub>K</sub> and b coprime integral ideals, L = fb<sup>−1</sup>, and a a degree one prime coprime to bf and to 6N(L). A specific smoothed value Γ<sub>a</sub>(L), built from Γ<sub>a,εa</sub> for a suitable unit ε ≡ 1 mod f, is the image of a unit u<sub>a</sub>(L) in the ray class field K(f).
- It has absolute value 1 at places above the real place of K.
- Reciprocity: σ<sub>c</sub>(u<sub>a</sub>(L)) = u<sub>a</sub>(c<sup>−1</sup>L) for ideals c coprime to f and a.

**Claim (numerical evidence).** For K = ℚ(β) with β<sup>3</sup> = 7, an ideal of norm 5 and conductor of norm 3, the number Γ(v, τ, σ)<sup>5</sup>/Γ(5v, 5τ, 5σ) at v = 1/3 and explicit τ, σ ∈ K agrees to at least 1000 digits with a root of a monic reciprocal sextic over K. Its splitting field is a cyclic degree 6 extension of K ramified only at 3. The slides report dozens of further examples, up to absolute degree 144.

**Theorem (Kronecker limit formula; Bergeron-Charollois-García 2023).** For the smoothed partial zeta function ζ<sub>f,a</sub>(b, s) of a complex cubic field, the derivative at s = 0 equals ± log|Γ<sub>a</sub>(fb<sup>−1</sup>)|<sup>2</sup>, unconditionally.
- Consequence: the conjecture is compatible with Stark's conjecture and refines it, since it predicts the unit itself and not only its absolute value.

## Note, then ignore

- Smoothing by the ideal a. The N-th power divided by the value at N times the argument removes a pole and an ambiguity. It is the same device as for elliptic units. Safe to skip on a first reading.
- The factor "coprime to 6". Small primes cause roots of unity and bad exponents in the transformation laws. This is a hypothesis for bookkeeping. Skip it.
- Orientation lemmas. Two lemmas pick an oriented basis of L and a primitive vector a so that the evaluation point lies where Γ<sub>a,b</sub> is defined. They fix signs only. Safe to ignore.
- Repeated slides. The PDF has overlay pages, so the same text appears several times with small additions. Only the last copy of each matters.
- Kato's theorem on differential equations. It is quoted to fit the theme of the seminar. It plays no part in the conjecture.

## One next step

Open the slides and read only the page titled "First cubic specialization" and the page after it, where the sextic polynomial appears.
