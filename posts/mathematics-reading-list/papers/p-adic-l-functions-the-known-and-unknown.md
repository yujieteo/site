source: https://swc-math.github.io/aws/2018/2018HarronProblems.pdf
slogan: A p-adic L-function is a bounded measure whose integrals against characters are classical L-values, and you can build two of them by hand.
basis: the full text

## Before you start

This is a problem set, not a paper: about forty problems in 21 pages, some ending with "feel free to try to prove this". A problem set can stir the fear of being tested and found slow. Let that fear be there. Nobody marks this one. The tone is friendly and jokes about the prime 2. If you want p-adic L-functions to become objects you can compute with, working three or four problems does more than reading a survey. Choose the ones that look like fun. The full set is for a week-long school.

## The story

Values of L-functions at integers are complex numbers, but after dividing by a period many are algebraic. Kubota and Leopoldt asked whether such values vary p-adically continuously. The obstacle is that integers are dense in ℤ<sub>p</sub>, yet the raw values do not interpolate: you must first remove the Euler factor at p. Iwasawa's idea was that the interpolating function is a power series in ℤ<sub>p</sub>[[T]], or the same thing, a bounded measure on a p-adic group. The notes build this dictionary, then construct two examples: Dirichlet characters from Stickelberger elements, and weight 2 modular forms from modular symbols. The last section states what should hold for any motive. That is the "unknown" of the title.

## Main definitions

**Iwasawa algebra and Iwasawa function.** Λ = ℤ<sub>p</sub>[[T]]. Let q = p for odd p and q = 4 for p = 2. Sending T to γ<sub>0</sub> − 1 identifies Λ with the completed group ring of Γ = 1 + qℤ<sub>p</sub>, with topological generator γ<sub>0</sub> = 1 + q. Each f ∈ Λ gives an Iwasawa function L<sub>f</sub>(s) = f((1 + q)<sup>s</sup> − 1) on ℤ<sub>p</sub>.
- Weierstrass preparation: a non-zero f factors uniquely as p<sup>μ</sup> P(T) u(T), with P a distinguished polynomial of degree λ and u a unit.

**p-adic measure.** A distribution on a profinite space X is a finitely additive function on compact open subsets. It is a measure if it is bounded. Measures on a profinite group G with values in ℤ<sub>p</sub> are the same as elements of ℤ<sub>p</sub>[[G]].
- Amice transform: a measure μ on ℤ<sub>p</sub> goes to the power series ∫ (1 + T)<sup>x</sup> dμ(x), and this is an isomorphism onto ℤ<sub>p</sub>[[T]].

**Teichmüller character ω.** The character (ℤ/qℤ)<sup>×</sup> → ℤ<sub>p</sub><sup>×</sup> that sends a to the root of unity congruent to it. Each a ∈ ℤ<sub>p</sub><sup>×</sup> factors as ω(a)⟨a⟩ with ⟨a⟩ ∈ 1 + qℤ<sub>p</sub>.

**Ordinary at p.** A weight 2 eigenform f of level prime to p is p-ordinary if p does not divide a<sub>p</sub>. Then x² − a<sub>p</sub>x + p has a unique root α<sub>p</sub> that is a p-adic unit.

## Main results

**Theorem (Kubota–Leopoldt, Iwasawa; Theorem 2.1).** Let χ be a non-trivial, primitive, even Dirichlet character of the first kind. Then there is an Iwasawa function L<sub>p</sub>(s, χ) with L<sub>p</sub>(n, χ) = (1 − χω<sup>n−1</sup>(p) p<sup>−n</sup>) L(n, χω<sup>n−1</sup>) for all integers n ≤ 0. For χ trivial there is ζ<sub>p</sub>(s) with the same interpolation property, and (s − 1)ζ<sub>p</sub>(s) is an Iwasawa function.
- Step 1: L(1 − n, χ) = −B<sub>n,χ</sub>/n, a generalised Bernoulli number, and B<sub>n,χ</sub> is a p-adic limit of sums Σ χ(a)a<sup>n</sup>.
- Step 2: twisted Stickelberger elements at levels Nqp<sup>n</sup> are compatible, and their inverse limit is the power series.

**Theorem (Manin, Amice–Vélu, Višik; Theorem 3.1).** Let f be a cuspidal newform of weight 2 and level Γ<sub>0</sub>(N) with rational Hecke eigenvalues, p not dividing N, and f p-ordinary. Then there is a unique p-adic measure μ<sub>f</sub> on ℤ<sub>p</sub><sup>×</sup> such that for each Dirichlet character χ of conductor p<sup>r</sup> > 1, the integral of χ is τ(χ) α<sub>p</sub><sup>−r</sup> L(1, f, χ)/Ω<sub>f</sub><sup>±</sup>, with sign χ(−1). The integral of 1 is (1 − 1/α<sub>p</sub>)² L(1, f)/Ω<sub>f</sub><sup>+</sup>.
- Step 1: modular symbols, the integrals of f from i∞ to a/p<sup>r</sup>, are rational multiples of two periods Ω<sub>f</sub><sup>±</sup> (Shimura).
- Step 2: replace f by its p-stabilisation f<sub>α</sub>, an eigenvector of U<sub>p</sub> with eigenvalue α<sub>p</sub>. Dividing by α<sub>p</sub><sup>r</sup> then gives the distribution property, and the unit root keeps the values bounded.

**Conjecture (Coates and Perrin-Riou; Section 4.2).** Let M be a motive that is critical at s = 1 and ordinary at p in Greenberg's sense, with p odd and a further technical condition. Then there is a p-adic measure μ<sub>M</sub> on ℤ<sub>p</sub><sup>×</sup>/{±1} whose integral against 1 is E<sub>p</sub>(M) L(1, M)/Ω<sub>M</sub>, and whose integrals against even characters of p-power conductor are twisted L-values with Gauss sums and powers of Frobenius eigenvalues. Here Ω<sub>M</sub> is Deligne's period and E<sub>p</sub>(M) is an explicit product of Euler-type factors.

## Note, then ignore

- "2 = 4". For p = 2 the Teichmüller character has conductor 4, so q = 4 replaces p in many formulas. Safe to skip.
- First and second kind. A character is of the first kind if its conductor divides Nq, and of the second kind if it factors through ⟨a⟩. The split matches ℤ<sub>p</sub><sup>×</sup> = roots of unity × (1 + qℤ<sub>p</sub>). Safe to skip.
- Interpolating at one point. For an elliptic curve only s = 1 is critical. The fix is to twist by all characters of the second kind. The true domain is a space of characters. Safe to skip.
- The involution γ ↦ γ<sup>−1</sup>. Problem 1.10 uses it to interpolate at non-negative integers. It keeps μ and λ. Safe to skip.
- Deligne's motives. Section 4 treats a motive as a list of realisations with a Hodge decomposition, enough to define Gamma factors and critical integers. Safe to skip.

## One next step

Open the notes at Problem 1.10 and do part (i): from three values of an Iwasawa function, find the 3-adic λ-invariant of ℚ(√−2).
