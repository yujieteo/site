source: https://arxiv.org/pdf/1909.01096
slogan: Functions on U(2) turn the principal series of SU(2,1) into lattice-point diagrams, so you can see each irreducible piece and compute the intertwining operator.
basis: the introduction and the main theorem statements

## Before you start

This is 34 pages of explicit calculation: Pauli matrices, Clebsch-Gordan coefficients, Γ-functions and tables of coefficients with four indices. The likely feeling is dread of the bookkeeping, a sense that you will lose a sign on page 9 and never recover. That is a reasonable feeling, and it can come along while you read. The paper draws every piece of a family of representations as a picture, for a group beyond SL(2, ℝ). Enjoy the pictures first. Formulas come second.

## The story

For SL(2, ℝ) the principal series is a line of dots. Each dot is a character e<sup>ikθ</sup> of the circle SO(2), and raising and lowering operators move one step along the line. Where a step has coefficient zero the line breaks, and you read off discrete series and finite-dimensional pieces. People want the same picture for larger groups. The obstacle is that the maximal compact subgroup K is no longer a circle. Zhang follows the method Buttcane and Miller used for SL(3, ℝ). For SU(2,1) the group K is U(2), and its matrix coefficients, the Wigner D-functions, give a basis. The Lie algebra moves each basis function to a few neighbours with explicit coefficients. The dots now sit in a plane, and the breaks cut it into shaded regions.

## Main definitions

**SU(2,1).** The group of g in SL(3, ℂ) that preserve the Hermitian form with matrix J = diag(1, 1, −1). It has real rank one. Its maximal compact subgroup K is isomorphic to U(2).

**Minimal principal series I(χ<sub>δ,λ</sub>).** Take the minimal parabolic subgroup P = MAN. Fix an integer δ, which gives a character of M, and a complex number λ, which gives a character of A. The principal series is the space of K-finite functions on G that transform on the right by this character of MAN. G acts by translation.
- Restriction to K: by the Iwasawa decomposition, each such function is fixed by its values on K = U(2).

**K-type and Wigner D-function.** A K-type is an irreducible representation of K that occurs in a representation of G. For U(2) it is labelled by a pair (j, n) of half-integers. The Wigner D-functions W<sup>(j,n)</sup><sub>m₁,m₂</sub> are the matrix coefficients of these representations. By the Peter-Weyl theorem they span the K-finite functions on U(2).
- In the principal series: only functions with −n + 3m₂ = δ occur (equation 43).

**Long intertwining operator.** The operator A(w₀, χ<sub>δ,λ</sub>) sends f to the integral of f(g w₀ n) over a unipotent subgroup. Here w₀ is the one non-trivial element of the restricted Weyl group. It maps I(χ<sub>δ,λ</sub>) to I(w₀χ<sub>δ,λ</sub>) and commutes with the action.

## Main results

**Proposition (action of the Lie algebra; Proposition 4.1).** Each weight vector of the non-compact part 𝔭<sub>ℂ</sub> of the Lie algebra sends a basis function W<sup>(j,n)</sup><sub>m₁,m₂</sub> to a combination of two basis functions, with j changed by ±½ and n changed by ±3/2. The coefficients are explicit: a square root factor, a Clebsch-Gordan coefficient, and a factor κ that is linear in λ.
- Step 1: write the Lie algebra elements as differential operators on K using the Iwasawa decomposition.
- Step 2: expand products of D-functions with the Clebsch-Gordan product formula.

**Theorem (composition series; Section 4.2).** Assume χ<sub>δ,λ</sub> takes non-zero integer values on both simple coroots. Then I(χ<sub>δ,λ</sub>) is reducible, and its irreducible subquotients come from six families: holomorphic and antiholomorphic discrete series, quaternionic discrete series V<sub>H</sub>, finite-dimensional representations V<sub>fin</sub>, and two further modules Q<sub>+</sub> and Q<sub>−</sub>. The paper states this as a case list over six Weyl chambers, not as one numbered theorem.
- Example, chamber I₁ (λ − δ ≥ 2 and λ + δ ≥ 2): V<sub>H</sub> ⊂ V₁ ⊂ I(χ<sub>δ,λ</sub>), with V₁/V<sub>H</sub> ≅ Q<sub>−</sub> ⊕ Q<sub>+</sub> and top quotient V<sub>fin</sub>.
- How: a subquotient boundary appears where a coefficient κ vanishes.

**Theorem (long intertwining operator; Theorem 1.3).** The operator A(w₀, δ, λ) acts on each basis function W<sup>(j,n)</sup><sub>m₁,m₂</sub> by a scalar. The scalar is π² 2<sup>−λ−1</sup> Γ(λ) times a ratio of Γ-functions in j ± m₁ and (λ ± δ)/2. The author says this is a new proof of a known result of Johnson and Wallach. I do not reproduce the full ratio here.
- Step 1: compute the integral where it converges, as a hypergeometric sum.
- Step 2: extend to all λ by meromorphic continuation.

## Note, then ignore

- Half-integer n. The label n takes values in ½ℤ with parity conditions tied to j. The paper switches to integer coordinates (k, l) with j = k/2 and n = −δ + 3l/2 for the pictures. Safe to skip on a first reading.
- The shift in λ. The transformation rule uses e<sup>−(λ+2)s</sup>, not e<sup>−λs</sup>. The 2 is a normalising shift built into the definition. Safe to skip.
- Two Casimir elements. The paper computes a quadratic and a cubic Casimir element and their eigenvalues. They label the infinitesimal character and are not needed for the pictures. Safe to skip.
- Section 2. Fifteen pages rebuild the representation theory of SU(2) and U(2) with explicit conventions. Use it as a lookup table. Safe to skip.
- Earlier work. The reducibility of these principal series was known from the 1970s. The new part is the explicit basis and method. Safe to skip.

## One next step

Open the paper at Figure 2 (Section 4.2.2, about page 23) and find the three shades of grey: V<sub>fin</sub>, Q<sub>±</sub> and V<sub>H</sub>.
