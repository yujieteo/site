source: https://arxiv.org/pdf/2102.09511
slogan: A product of two solutions of a differential equation is an integral of one solution against a kernel, and such formulas pin down Galois data.
basis: the full text

## Before you start

This note is ten pages, has no proofs, and moves through Langlands lifts, Fano threefolds, Bessel functions and quaternions at speed. The likely feeling is confusion, with a worry that you are missing what everyone else knows. The text is a programme written for insiders, and it is fine to feel lost in it. If you want to see a Langlands-type idea in a formula you can check by hand, sections 7 and 8 give you one. Enjoy the examples. Finishing is optional.

## The story

To compute a Galois representation, the usual route is a spectral problem: find a Hecke eigenform and read the Frobenius traces from its eigenvalues. Over a curve, Galois representations become local systems or differential equations, and the authors (following discussions with Kontsevich) want a route that stays on that side. Their idea is to look for multiplication laws. Abel's theorem, rewritten multiplicatively, says that a product Φ(x<sub>0</sub>)⋯Φ(x<sub>g</sub>) of solutions equals an integral of Φ(y<sub>1</sub>)⋯Φ(y<sub>g</sub>) against a simple kernel. That form can survive for equations of higher rank. Set the arguments equal and you get a duplication formula, of which Clausen's formula for the Bessel series is the model. Such identities constrain the coefficients so strongly that they can replace the Hecke eigen-property. The test case is the Markov local system on a punctured torus.

## Main definitions

**Multiplication kernel (non-abelian Abel's theorem).** For a differential equation with normalised solution Φ, a multiplication kernel is a function K with Φ(x)Φ(y) = ∫ K(x, y, z) Φ(z) dz.
- Simplest case: for d/dz on the line, exp(λx)·exp(λy) = exp(λ(x+y)), and K is a delta function on z = x + y.
- Duplication: restrict K to the diagonal x = y. The result is a formula for Φ(x)<sup>2</sup>, read as a precursor of the Sym<sup>2</sup> lift.

**D2 equation.** Put f(t) = t<sup>3</sup> + At<sup>2</sup> + Bt and L = f(t)∂<sup>2</sup> + f′(t)∂ + t. A D2 equation is Lφ = λφ. The power series solution with φ(0) = 1 has coefficients b<sub>n</sub>(λ), polynomials of degree n in λ.
- Degenerate case A = B = 0: a change of variable turns it into Bessel's equation.

**Markov local system.** Markov's cubic m<sub>1</sub><sup>2</sup> + m<sub>2</sub><sup>2</sup> + m<sub>3</sub><sup>2</sup> = m<sub>1</sub>m<sub>2</sub>m<sub>3</sub> is a character variety of the free group on A, B, the fundamental group of a punctured torus E∖{O}. A point gives a representation φ into SL<sub>2</sub> with m<sub>1</sub> = Tr φ(A), m<sub>2</sub> = Tr φ(B), m<sub>3</sub> = Tr φ(AB), and with the loop around the puncture conjugate to an upper triangular matrix with −1 on the diagonal. The rank 2 local system M of a triple of natural numbers is the Markov local system.

**Convolution with the quadratic character.** The fibre of M ∗ L at x is H<sup>1</sup>(E, j<sub>∗</sub>(M ⊗ L)). Here L is the quadratic character sheaf ramified at 2x and at O. The result lives on a 4:1 cover of E∖{O}.

## Main results

The paper states no numbered theorems. The authors label the Markov statements experimental.

**Claim (Clausen's formula as duplication; section 7).** (Σ z<sup>n</sup>/n!<sup>2</sup>)<sup>2</sup> = Σ C(2n, n) z<sup>n</sup>/n!<sup>2</sup>, where C(2n, n) is the central binomial coefficient. The right side is a convolution on the multiplicative group with the series of 1/√(1 − 4z).
- Consequence: the functional equation (Σ a<sub>n</sub>z<sup>n</sup>)<sup>2</sup> = Σ C(2n, n) a<sub>n</sub>z<sup>n</sup> with a<sub>0</sub> = a<sub>1</sub> = 1 recovers every a<sub>n</sub> by induction.

**Claim (Bessel multiplication, Sonine and Gegenbauer; section 8).** For 0 &lt; x &lt; y, J<sub>0</sub>(x) J<sub>0</sub>(y) = ∫ K(x, y, z) J<sub>0</sub>(z) z dz over y − x &lt; z &lt; y + x, with K = 1/(2π√S). Here S is the squared area of the triangle with sides x, y, z.

**Claim (multiplication kernel for D2; section 9).** With P(x, y, z) = (B − xy − yz − xz)<sup>2</sup> − 4xyz(x + y + z + A) and K(x, y, z) = Bz<sup>−1</sup>·P(x, y, Bz<sup>−1</sup>)<sup>−1/2</sup>, one has ∫ K(x, y, z) φ<sub>λ</sub>(z) dz = φ<sub>λ</sub>(x) φ<sub>λ</sub>(y) for every λ.
- Step 1: check L<sub>x</sub>K = L<sub>y</sub>K = L<sub>z</sub>K, so the integral is an eigenfunction in x and in y.
- Step 2: put x = 0, where K becomes 1/(z − y), to fix the constant at 1.

**Claim (quaternionic rotation; section 10, found experimentally).** For the Markov local system M, the monodromy of M ∗ L has traces m<sub>1</sub><sup>2</sup> − 1, m<sub>2</sub><sup>2</sup> − 1, m<sub>3</sub><sup>2</sup> − 1 on A<sup>2</sup>, B<sup>2</sup>, (AB)<sup>2</sup>, as Sym<sup>2</sup> M would suggest. Yet its image has no unipotent elements. It is a rank 3 local system given by units of an order in the quaternion algebra over ℚ ramified at 2 and 3, acting by conjugation on traceless quaternions.
- Explanation offered: a "twisted Clausen formula" relates M ∗ L to a Sym<sup>2</sup> after descending M to the affine line and convolving with a Kummer sheaf of order 4.
- The quaternions enter through a subgroup of the (3,4,4) triangle group, which is arithmetic.

## Note, then ignore

- Fano threefolds and D3, D4 equations (sections 1 and 2). They explain where the authors' interest in "congruence sheaves" came from. Safe to skip on a first reading.
- "Quantization" and "master formula". These words link the kernels to Hecke operators. The formulas stand without them, so skip them at first.
- The sheaves L<sub>χ</sub> and L<sub>ρ</sub> in the twisted Clausen formula. They carry characters of order 4 and 8 so that local monodromies match. Skip the bookkeeping.

## One next step

Open the paper at section 7 and expand both sides of formula (7) by hand up to z<sup>3</sup>. You should get 1 + 2z + (3/2)z<sup>2</sup> + (5/9)z<sup>3</sup> on each side.
