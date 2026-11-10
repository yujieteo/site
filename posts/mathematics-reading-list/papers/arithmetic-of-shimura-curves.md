source: https://web.math.princeton.edu/~shouwu/publications/crmnote.pdf
slogan: Heights of CM points on Shimura curves equal derivatives of L-series, and that gives rational points on abelian varieties of rank one.
basis: the full text

## Before you start

These are 20 pages of lecture notes by Shou-Wu Zhang. They move fast, state theorems without proofs, and switch to adelic language on page 2. The likely feeling is fear of being too slow: each line assumes automorphic representations of GL<sub>2</sub>. You are allowed to be slow here. The notes are a map and not a course. If you want to see how the Gross-Zagier formula looks once the special cases are stripped away, this is a short way in. Read for the shape of the formulas, and enjoy how the same shape returns three times.

## The story

Gross and Zagier showed that the height of a Heegner point on a modular curve equals the derivative of an L-series at its centre. Their formula needed a restrictive hypothesis on the level and the imaginary quadratic field. People wanted the formula for every weight 2 form, every character χ of the CM field, and over totally real fields. The block is that the modular curve is the wrong curve in general. The idea that unblocks it: the local root numbers of L(s, π, χ) single out a set Σ of places, and Σ tells you which quaternion algebra to use. If Σ is odd, the L-value vanishes and a Shimura curve carries CM points whose height gives L′(1/2). If Σ is even, there is no curve, and Waldspurger's formula gives L(1/2) as a period integral. Both formulas are identities between elements of a one-dimensional space of functionals.

## Main definitions

**Adelic modular curve and Shimura curve.** For an open compact subgroup U of the finite adelic points of GL<sub>2</sub>, the curve Y<sub>U</sub> is GL<sub>2</sub>(ℚ)\(H<sup>±</sup> × GL<sub>2</sub>(finite adeles)/U). It is a finite union of classical modular curves and has a canonical model over ℚ. Replacing GL<sub>2</sub> by the units of an indefinite quaternion algebra B gives a Shimura curve.
- Over ℚ: the curve parametrises abelian surfaces with an action of B and level structure.

**Incoherent quaternion algebra.** Let F be totally real and Σ a finite set of places of odd size. No quaternion algebra over F ramifies exactly at Σ. But there is a quaternion algebra over the adeles of F, free of rank 4, that is a division algebra exactly at the places of Σ. If Σ contains all archimedean places, it defines a tower of Shimura curves X<sub>U</sub> over F.

**CM point P<sub>χ</sub>.** Fix a CM extension E and an embedding of its adeles into the quaternion algebra. The points of X fixed by E<sup>×</sup> are defined over E<sup>ab</sup>, and Galois acts on them through class field theory. For a character χ, P<sub>χ</sub> is the χ-weighted integral over the Galois group of the classes P<sup>σ</sup> − ξ, where ξ is the Hodge class of the component.

**Néron-Tate distribution NT<sub>χ</sub>.** The functional f ↦ ⟨T(f)P<sub>χ</sub>, P<sub>χ</sub>⟩ on Hecke functions f, where T(f) is the Hecke correspondence and ⟨ , ⟩ is the Néron-Tate height. It splits into pieces NT<sub>π,χ</sub>, one for each cuspidal π of weight 2.

## Main results

**Theorem (Gross-Zagier formula; Theorem 4.2.1, credited to Gross-Zagier and Yuan-Zhang-Zhang).** Let F be totally real, π a cuspidal representation of GL<sub>2</sub> of parallel weight 2, E a totally imaginary quadratic extension, and χ a finite order character with ω<sub>π</sub> · χ restricted to the ideles of F trivial. Suppose Σ is odd, and take the Shimura curve of the incoherent algebra ramified at Σ. Then NT<sub>π<sup>JL</sup>,χ</sub> = L′(1/2, π, χ) L(1, η) β, where η is the quadratic character of E/F and β is a canonical generator built from local matrix coefficient integrals.
- Case F = ℚ, Σ = {∞}: the curve is the modular curve (Theorem 3.2.2).
- Local input: the space of E<sup>×</sup>-invariant functionals has dimension one on exactly one of π<sub>p</sub> and its Jacquet-Langlands transfer (Saito-Tunnell, Proposition 3.1.1).

**Theorem (Waldspurger formula; Theorem 3.4.1).** For any number field F, with Σ even and B the quaternion algebra over F ramified at Σ, the product of the two torus period integrals of forms in π<sup>JL</sup> equals (1/2) L(1/2, π, χ) L(1, η) β.

**Theorem (Tian-Zhang; Theorem 4.3.2).** Assume L(s, π) vanishes to order at most 1 at the centre, and that [F : ℚ] is odd or π is not principal at some finite place. Then the abelian variety A attached to π has Mordell-Weil rank over F equal to the degree of its coefficient field times the order of vanishing, and its Tate-Shafarevich group is finite.
- Step 1: the Gross-Zagier formula gives a point of infinite order when L′ ≠ 0.
- Step 2: Kolyvagin's Euler system bounds the rank and the Tate-Shafarevich group.

**Theorem (triple product; Theorem 5.2.1, Yuan-Zhang-Zhang).** For three forms of parallel weight 2 with root number −1, the Beilinson-Bloch height of the modified diagonal (Gross-Schoen) cycle on X<sup>3</sup> gives L′(1/2, π, r<sub>8</sub>) times a canonical generator. Here r<sub>8</sub> is the degree 8 triple product L-series.

## Note, then ignore

- Centre of symmetry. The notes centre L(s, π, χ) at s = 1/2 and L(s, A) at s = 1. The shift is s − 1/2. Safe to skip on a first reading.
- Volume of the Haar measure. Section 2.3 normalises the Galois group to volume 2L(2, η) and Section 4.2 to 2L(1, η). This looks like a misprint in one place and changes only a constant. Safe to skip.
- The Hodge class ξ. It replaces the cusp ∞ as a base point of degree one, since compact Shimura curves have no cusps. Safe to skip.

## One next step

Open the PDF at Section 3.4 (journal page 585) and read Theorem 3.4.1. Then turn to Theorem 4.2.1 on page 587 and compare the two right-hand sides.
