source: https://arxiv.org/pdf/2609.21892
slogan: Special values of Faddeev's quantum dilogarithm at real quadratic points satisfy explicit polynomial equations, so Stark's units for real quadratic fields are algebraic numbers.
basis: the abstract and introduction

## Before you start

The abstract names Stark units, quantum dilogarithms, fusion categories and equiangular lines in one paragraph. The likely feeling is overwhelm at so many fields at once. You are allowed to feel that. The authors themselves give three separate proofs because no single language covers it. If you have wanted to see a transcendental-looking integral turn out to be a nested square root, the example on page 2 delivers it. Go for that pleasure first.

## The story

Roots of unity are values of e(x) = exp(2πix) at rational x. Values of the j-function at imaginary quadratic points are algebraic too. Both generate abelian extensions. Hilbert's 12th problem asks for the same over other fields. For real quadratic fields, Stark and Shintani proposed numbers built from derivatives of partial zeta functions at 0, and conjectured they are units in class fields. Shintani's work shows these numbers are special values of Faddeev's quantum dilogarithm. Outside a few special examples treated by Shintani, nobody could prove they are even algebraic. Radchenko and Wheeler find that the N special values attached to a hyperbolic matrix satisfy an overdetermined polynomial system. It mirrors the functional equations of the function, with integrals replaced by finite sums. The system has finitely many solutions, so the values are algebraic.

## Main definitions

**Faddeev's modular quantum dilogarithm.** For γ in SL<sub>2</sub>(ℤ) with bottom row (c, d), integers m, n, and τ not real, Φ<sub>γ,m,n</sub>(z; τ) is the quotient of the q-Pochhammer symbols (q<sup>m</sup>e(z); e(τ))<sub>∞</sub> and (q̃<sup>n</sup>e(z/(cτ+d)); e(γτ))<sub>∞</sub>, with q = e(τ) and q̃ = e(γτ). It continues meromorphically to all τ with cτ + d not in the non-positive reals. Garoufalidis, Kashaev and Zagier introduced it.

**The special values F<sub>γ</sub><sup>±</sup>(u).** Fix a hyperbolic γ in SL<sub>2</sub>(ℤ) with c &gt; 0 and trace N + 2, N &gt; 0. Let τ be a fixed point of γ, a real quadratic number, and ε = cτ + d. For u in ℤ<sup>2</sup>, F<sub>γ</sub><sup>±</sup>(u) is a value of Φ<sub>γ</sub> at a point built from u, τ and ε, times the eta multiplier of γ.
- Exceptional case: if uγ ≡ u mod N, set F<sub>γ</sub><sup>±</sup>(u) = ε<sup>±1/2</sup>.
- Periodicity: the values depend only on u in G = ℤ<sup>2</sup>/Λ, a group of order N, where Λ = ℤ<sup>2</sup>(γ − I).

**Stark unit.** For a ray class c of a real quadratic field, ε<sub>c</sub> = exp(ζ′(0, c) − ζ′(0, rc)), a real number. It equals |F<sub>γ</sub><sup>+</sup>(u)|<sup>−t</sup> with t = 1 or 2 for suitable γ and u.

**Finite quantum dilogarithm.** A function E on a finite abelian group G solving the cubic equations (8) of the paper with a non-zero constant C. The case C = 0 is Andersen and Kashaev's notion and has only trivial solutions on finite groups.

## Main results

**Theorem (algebraicity; Theorem 1).** For every hyperbolic γ as above and every u in ℤ<sup>2</sup>, the number F<sub>γ</sub><sup>±</sup>(u) is algebraic. This contains the algebraicity part of Stark's conjecture for all real quadratic fields. The paper does not claim that the numbers are units in the predicted class field.
- Step 1: prove the polynomial system of Theorem 2.
- Step 2: show the system defines a zero-dimensional variety.

**Theorem (the equations; Theorem 2).** The values F<sub>γ</sub><sup>±</sup> on G satisfy four explicit families of equations with coefficients in ℤ[ζ<sub>2N</sub>, 1/√N]. They are: a closed formula for F<sub>γ</sub><sup>±</sup>(0), an inversion relation F<sup>+</sup>(u)F<sup>−</sup>(−u) = ⟨u⟩<sup>−1</sup>, a finite Fourier transform relation, and a finite five-term type relation.
- Consequence: E = F<sub>γ</sub><sup>+</sup> is a finite quantum dilogarithm on G.

**Theorem (general algebraicity; Theorem 8).** Any finite quantum dilogarithm on G with |G| &gt; 1 and C ≠ 0 takes algebraic values. I read only the introduction's description of this statement.
- Case N prime: a short proof from Tao's uncertainty principle for the finite Fourier transform. A second elementary proof uses 2-adic valuations.
- General case: the same equations are Izumi's equations for near-group fusion categories, and Ocneanu rigidity gives algebraicity.

**Claim (by-products, as stated in the abstract and introduction).** Near-group fusion categories of Izumi's type exist for every G = ℤ/n × ℤ/m. A family of quadratic relations for Stark units conjectured by Appleby, Flammia and Kopp holds.

## Note, then ignore

- "Stark unit" means a real number here. A footnote says the term refers to ε<sub>c</sub>, not to the conjectural unit in the ray class field. Safe to skip on a first reading.
- F<sup>+</sup> versus F<sup>−</sup>. They agree except at u = 0 in G. The sign only tracks the two roots ε<sup>±1/2</sup>. Safe to skip.
- The eta multiplier μ<sub>γ</sub>. It is a normalising root of unity factor. Safe to skip.
- Two names for one function. Faddeev's quantum dilogarithm is also called the double sine function, and is close to Barnes's double gamma function. Safe to skip.
- Izumi's conjugation condition. Izumi assumed an extra symmetry under complex conjugation. The authors remove it, following Evans and Gannon. Safe to skip.

## One next step

Open the paper at page 2 and read the displayed identity that ends the paragraph beginning "In the case of real quadratic fields", then Theorem 1 on page 3.
