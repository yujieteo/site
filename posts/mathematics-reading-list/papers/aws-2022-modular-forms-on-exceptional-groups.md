source: https://swc-math.github.io/aws/2022/2022PollackNotes.pdf
slogan: Exceptional groups have no holomorphic modular forms, but quaternionic ones fill the gap and still have Fourier coefficients you can compute.
basis: the introduction and the main theorem statements

## Before you start

The title contains "exceptional groups", and the notes soon reach octonions, cubic norm structures and E<sub>8</sub>. The likely feeling is intimidation: this sounds like a subject for specialists with years of Lie theory. You are allowed to feel out of your depth here. Most readers do. The notes are 46 pages from a winter school, written for students, and they start from the modular forms you already know. If you want to see G<sub>2</sub> do something concrete, this is a friendly place. Read Chapter 1 for interest, and stop whenever you like.

## The story

Holomorphic modular forms exist on a group G only when its symmetric space has an invariant complex structure, as for Sp<sub>2n</sub>, SO(2, n) and U(p, q). They are prized because they have Fourier coefficients with arithmetic meaning. Most groups, including G<sub>2</sub>, F<sub>4</sub> and E<sub>8</sub>, have no such structure. Is there a substitute? Gross and Wallach noticed that holomorphic forms exist when the maximal compact subgroup K maps onto U(1), the smallest compact group. They asked what happens when K maps onto the next smallest, SU(2)/±1. Those groups are called quaternionic. On them one defines forms with values in a representation of SU(2), killed by a first-order differential operator that plays the part of the Cauchy–Riemann equations. Pollack's theorem is that these forms have a Fourier expansion with honest numerical coefficients. On G<sub>2</sub> the coefficients are indexed by cubic rings.

## Main definitions

**Quaternionic group.** A semisimple group G over ℚ such that the maximal compact subgroup of G(ℝ)<sup>0</sup> surjects onto SU(2)/μ<sub>2</sub> = SO(3). Examples: split G<sub>2</sub>, split F<sub>4</sub>, the forms of E<sub>6</sub>, E<sub>7</sub>, E<sub>8</sub> of real rank four, and SO(4, n) for n ≥ 3.

**Quaternionic modular form of weight ℓ (Definitions 3.2.1 and 7.1.1).** Let V<sub>ℓ</sub> = Sym<sup>2ℓ</sup>(ℂ<sup>2</sup>), a representation of K through SU(2)/μ<sub>2</sub>. A weight ℓ ≥ 1 form is a smooth function φ: G(𝔸) → V<sub>ℓ</sub> of moderate growth, left invariant under G(ℚ), right invariant under an open compact subgroup of the finite adeles, with φ(gk) = k<sup>−1</sup>φ(g) for k in K, and D<sub>ℓ</sub>φ = 0.
- The operator D<sub>ℓ</sub>: differentiate φ along the non-compact directions 𝔭 of the Lie algebra, then project to one K-summand of V<sub>ℓ</sub> ⊗ 𝔭<sup>∨</sup>.

**Heisenberg parabolic.** A parabolic subgroup P = MN whose unipotent radical N is a Heisenberg group with one-dimensional centre Z. For G<sub>2</sub>, M ≅ GL<sub>2</sub> and the abelian quotient N/Z is the space W of binary cubic forms.

**Fourier coefficient attached to a cubic ring.** Integral binary cubic forms up to GL<sub>2</sub>(ℤ) correspond to cubic rings. For a level one form φ of even weight on G<sub>2</sub>, the coefficient at a cubic form depends only on its orbit, so one writes a<sub>φ</sub>(A) for a cubic ring A.

## Main results

**Theorem (Fourier expansion on G<sub>2</sub>; Theorem 3.2.2, from Pollack's papers).** For each positive semi-definite w in W(ℝ) there is an explicit function W<sub>w</sub>: G<sub>2</sub>(ℝ) → V<sub>ℓ</sub> that transforms by the character of N given by w, is K-equivariant, is killed by D<sub>ℓ</sub> and has moderate growth. If φ is a weight ℓ modular form on G<sub>2</sub>, then its constant term along Z equals its constant term along N plus a sum of a<sub>φ,w</sub>(g<sub>f</sub>) W<sub>w</sub>(g<sub>∞</sub>) over rational w ≥ 0.
- Step 1: D<sub>ℓ</sub>φ = 0 becomes a system of differential equations for each Fourier component along N.
- Step 2: the moderate growth solutions form a space of dimension at most one, zero unless w is positive semi-definite (Theorem 7.3.1 for general quaternionic exceptional groups).

**Theorem (Eisenstein coefficients are zeta values; Theorem 3.3.1, Gan–Gross–Savin and Jiang–Rallis).** Let ℓ ≥ 4 be even and E<sub>ℓ</sub> the spherical weight ℓ Eisenstein series on G<sub>2</sub>. Assume its non-degenerate Fourier coefficients are non-zero, which comes down to one archimedean integral being non-zero. If A is a maximal totally real cubic ring, the coefficient of E<sub>ℓ</sub> at A is ζ<sub>A</sub>(1 − ℓ) up to a non-zero constant independent of A.

**Theorem (cusp forms with integral coefficients; Theorem 3.3.2, Pollack).** For every even weight w ≥ 16 there are non-zero cusp forms on G<sub>2</sub> whose Fourier coefficients are all algebraic integers. In weight 20 there is a level one cusp form with coefficients in ℤ.

**Theorem (modular forms on E<sub>8</sub>; Theorems 7.4.1 and 7.4.2).** Special values of Eisenstein series on quaternionic E<sub>8</sub> give square-integrable, non-cuspidal modular forms of weight 4 (Gan, Gan–Savin) and weight 8 (Pollack). Both have rational Fourier coefficients.

## Note, then ignore

- Adelic language. Forms are functions on G(𝔸) and not on a half-space, because there is no complex half-space to use. Safe to skip on a first reading.
- The constant term along N. It is essentially a holomorphic modular form of weight 3ℓ on GL<sub>2</sub>. It sits apart from the main sum. Safe to skip.
- Only the abelian part. The expansion describes φ after averaging over the centre Z of N, not φ itself. Safe to skip.
- Chapters 4 to 6. Composition algebras, cubic norm structures and the Freudenthal construction build F<sub>4</sub> and the E groups uniformly. For G<sub>2</sub> you need none of it. Safe to skip.
- The proviso in Theorem 3.3.1. The non-vanishing of an archimedean integral is assumed, not proved. Safe to skip.

## One next step

Open the notes at Section 1.2, "Quaternionic modular forms" (page 6), and read to the end of the list of quaternionic groups.
