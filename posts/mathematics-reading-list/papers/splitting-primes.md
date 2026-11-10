source: https://arxiv.org/pdf/1007.4426
slogan: Which primes make a polynomial split completely is read off from a modular form, and worked examples show the rule without any proofs.
basis: the full text

## Before you start

This note is 16 pages, has no proofs, and uses the word "Langlands" early. The likely feeling is suspicion that a survey without proofs will leave you with names and no understanding. You can keep that suspicion while you read. If you want one concrete instance of a non-abelian reciprocity law that you can check on a calculator, the cubic T<sup>3</sup> − T − 1 on page 5 is it. Enjoy the examples. You do not need to reach the end.

## The story

Take a monic irreducible f in ℤ[T] of degree n. For which primes p does f mod p have n distinct roots in 𝔽<sub>p</sub>? For T<sup>2</sup> + 1 the answer is p ≡ 1 mod 4. Quadratic reciprocity gives such a rule for every quadratic f, and class field theory does whenever the Galois group of f is commutative. The block is that congruence rules exist only in that commutative case. For T<sup>3</sup> − T − 1, with group S<sub>3</sub>, no congruence on p decides. Langlands changes what counts as a rule. Write N<sub>p</sub>(f) for the number of roots mod p. Then N<sub>p</sub>(f) = 1 + a<sub>p</sub>, where a<sub>p</sub> is the p-th coefficient of a modular form. For this cubic the form is q ∏ (1 − q<sup>k</sup>)(1 − q<sup>23k</sup>).

## Main definitions

**Splitting completely.** A prime p splits completely for f if the reduction of f mod p has n = deg f distinct roots in 𝔽<sub>p</sub>. N<sub>p</sub>(f) is the number of roots of the reduction in 𝔽<sub>p</sub>.

**Abelian polynomial.** Let K<sub>f</sub> be the field got by adjoining all complex roots of f to ℚ, and Gal<sub>f</sub> its automorphism group. f is abelian if Gal<sub>f</sub> is commutative.
- Quadratic f: Gal<sub>f</sub> ≅ ℤ/2.
- Cyclotomic Φ<sub>m</sub>: Gal<sub>f</sub> ≅ (ℤ/m)<sup>×</sup>.

**Primitive eigenform.** An analytic function F(τ) = Σ a<sub>n</sub> e<sup>2πinτ</sup> on the upper half-plane that transforms by a factor (cτ + d)<sup>k</sup>, times a character of d, under integer matrices of determinant 1 with c ≡ 0 mod N. Here k is the weight and N the level. Its coefficients satisfy multiplicative relations.

**Reciprocity law.** In the note's final formulation: an equality of two L-functions built in different ways. The Artin L-function comes from counting roots or points mod p. The Hecke L-function comes from an automorphic object such as an eigenform.

## Main results

**Theorem (abelian case; Kronecker–Weber and class field theory).** The primes that split completely for f are given by congruence conditions modulo some integer D<sub>f</sub> if and only if Gal<sub>f</sub> is commutative. For such f, every root lies in a cyclotomic field ℚ(ζ<sub>m</sub>).
- Example: Φ<sub>m</sub> splits completely mod p exactly when p ≡ 1 mod m.

**Claim (the cubic T<sup>3</sup> − T − 1; stated without proof, credited to Hecke and Serre).** For every prime p, N<sub>p</sub>(f) = 1 + a<sub>p</sub>, where Σ a<sub>n</sub>q<sup>n</sup> = q ∏<sub>k≥1</sub> (1 − q<sup>k</sup>)(1 − q<sup>23k</sup>). This series is a primitive eigenform of weight 1 and level 23, with character the Legendre symbol mod 23.
- If p ≠ 23 is a square mod 23: p has the form x<sup>2</sup> + xy + 6y<sup>2</sup> and N<sub>p</sub> = 3, or the form 2x<sup>2</sup> + xy + 3y<sup>2</sup> and N<sub>p</sub> = 0.
- If p is not a square mod 23: N<sub>p</sub> = 1. The smallest prime with N<sub>p</sub> = 3 is 59.

**Theorem (modularity of elliptic curves over ℚ; Wiles, Taylor, Diamond, Conrad, Breuil).** For each elliptic curve over ℚ, the numbers a<sub>p</sub> = p − (number of points mod p) are, at good primes, the coefficients of a primitive eigenform of weight 2. For S<sup>2</sup> + S = T<sup>3</sup> − T<sup>2</sup> the form is q ∏ (1 − q<sup>k</sup>)<sup>2</sup>(1 − q<sup>11k</sup>)<sup>2</sup>, of level 11, and the only bad prime is 11.

**Conjecture (Langlands reciprocity, as described in the note).** Every embedding ρ of Gal<sub>f</sub> into GL<sub>d</sub>(ℂ) has a reciprocity law. The case d = 1 is class field theory. The note says that the only other known cases are essentially d = 2 with solvable image (Langlands–Tunnell), or with complex conjugation not sent to a scalar (Khare–Wintenberger–Kisin).

## Note, then ignore

- Finitely many bad primes. Each example has primes where the rule needs adjusting: 2 for T<sup>2</sup> + 1, 23 for the cubic, 11 for the curve. They do not affect the pattern. Safe to skip.
- Two meanings of "Artin L-function". The note uses the name for Galois representations and also for the L-function of an elliptic curve. The second use is loose. Safe to skip.
- Serre's conjecture section. The second half treats mod ℓ representations and the field ℚ(E[ℓ]). The author says it needs more maturity. It is safe to stop before it.
- Necessary, not sufficient. For ℚ(E[ℓ]), the congruences p ≡ 1 and c<sub>p</sub> ≡ 2 mod ℓ follow from complete splitting but do not imply it. The exact test is that all ℓ-torsion of E mod p is rational over 𝔽<sub>p</sub>. Safe to skip at first.
- Sato–Tate. The last page reports equidistribution of normalised coefficients. It is an application, not part of the splitting story. Safe to skip.

## One next step

Open the PDF at page 5, find T<sup>3</sup> − T − 1, and check by hand that it has three roots mod 59.
