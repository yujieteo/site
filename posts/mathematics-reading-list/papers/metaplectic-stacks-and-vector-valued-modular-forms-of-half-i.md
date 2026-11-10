source: https://www.math.mcgill.ca/darmon/theses/candelori/PhDthesis.pdf
slogan: Elliptic curves with a chosen square root of the Hodge bundle form a stack on which half-integral weight modular forms are sections of bundles.
basis: the abstract and introduction

## Before you start

This is a thesis of about 100 pages that opens with stacks, gerbes and Heisenberg group schemes. You may feel shame at not having that background, and want to put the file away until you do. You can feel that and still read the introduction, which asks for none of it. If you have wondered why the theta series Σ q<sup>n²</sup> counts as a modular form of weight ½, the answer here is a clean one. Read the introduction for enjoyment. The chapters can wait.

## The story

Modular forms of integral weight k have a geometric meaning: they are sections of ω<sup>k</sup>, a power of the Hodge bundle on the moduli stack M<sub>1</sub> of elliptic curves. This works over ℤ, so you can reduce mod p and take q-expansions on the Tate curve. Half-integral weight forms, and the vector-valued forms attached to Weil representations, had only an analytic definition, with a square root of cτ + d in the transformation law. The block is that ω has no square root on M<sub>1</sub>. Candelori's idea is to add the square root to the moduli problem. Classify pairs: an elliptic curve and a line bundle Q with Q<sup>⊗2</sup> ≅ ω. On this "metaplectic stack" the bundle ω<sup>1/2</sup> exists by construction, and the Weil representation becomes a vector bundle V<sub>m</sub> built from Heisenberg groups. Theta constants are then sections, over ℤ[1/m].

## Main definitions

**Metaplectic group and Weil representation.** Mp<sub>2</sub>(ℤ) is the group of pairs (γ, φ) with γ in SL<sub>2</sub>(ℤ) and φ a holomorphic function on the upper half plane with φ<sup>2</sup> = cτ + d. It is a central extension of SL<sub>2</sub>(ℤ) by ±1. For m a positive even integer, the Weil representation ρ<sub>m</sub> acts on the functions on ℤ/mℤ. It is attached to the rank 1 lattice ℤ with quadratic form x ↦ mx<sup>2</sup>/2.
- A weight k/2, ρ<sub>m</sub>-valued modular form is a holomorphic f with f(γτ) = φ<sup>k</sup> ρ<sub>m</sub>(γ, φ) f(τ).

**Metaplectic stack M<sub>1/2</sub>.** The moduli stack of pairs (E/S, Q): an elliptic curve E over a scheme S, and an invertible sheaf Q with a quadratic map q : Q → ω<sub>E/S</sub> that induces an isomorphism Q<sup>⊗2</sup> ≅ ω<sub>E/S</sub>.
- It carries the invertible sheaf ω<sup>1/2</sup>, which sends (E/S, Q) to Q. If p : M<sub>1/2</sub> → M<sub>1</sub> forgets Q, then p<sup>\*</sup>ω ≅ (ω<sup>1/2</sup>)<sup>⊗2</sup>.
- Over ℂ it is the orbifold quotient of the upper half plane by Mp<sub>2</sub>(ℤ).

**The bundle V<sub>m</sub>.** For each elliptic curve E/S the level m Heisenberg group has Schrödinger representations of rank m, unique up to a twist by a line bundle. Their endomorphism algebras glue to an Azumaya algebra A<sub>m</sub> on M<sub>1</sub>, of order two in the Brauer group. V<sub>m</sub> is a locally free sheaf of rank m on M<sub>1/2</sub> with p<sup>\*</sup>A<sub>m</sub> ≅ End(V<sub>m</sub>).
- A weight k/2, V<sub>m</sub>-valued modular form is a global section of V<sub>m</sub> ⊗ ω<sup>k/2</sup> over M<sub>1/2</sub>.

## Main results

**Theorem (existence of V<sub>m</sub>; Introduction).** V<sub>m</sub> does not exist on M<sub>1</sub>, but it does on M<sub>1/2</sub>. Over ℂ, V<sub>m</sub> (or its dual, by convention) is the local system of the Weil representation ρ<sub>m</sub>.
- Step 1: the Azumaya algebra A<sub>m</sub> gives an obstruction class of order two.
- Step 2: Giraud's torsor-lifting theory shows the obstruction vanishes after pullback to M<sub>1/2</sub>.

**Theorem (descent and comparison; Theorems 2.2.14 and 2.2.20).** When k is odd, V<sub>m</sub> ⊗ ω<sup>k/2</sup> descends to M<sub>1</sub>. There is a canonical isomorphism V<sub>m</sub> ⊗ ω<sup>−1/2</sup> ≅ J<sub>m</sub>, where J<sub>m</sub> sends E/S to the sections of the totally symmetric degree m line bundle L<sub>m</sub> on E.
- Consequence: V<sub>m</sub> ⊗ ω<sup>k−1/2</sup> ≅ J<sub>m</sub> ⊗ ω<sup>k</sup>. Over ℂ this is the Eichler–Zagier correspondence between weight k − ½ vector-valued forms and Jacobi forms of weight k and index m/2.

**Theorem (flatness; Theorem 2.2.19).** V<sub>m</sub> is flat for the étale topology of M<sub>1/2</sub>. So J<sub>m</sub> ⊗ ω<sup>1/2</sup> has a canonical integrable connection. It corresponds to the heat equation for theta functions.

**Theorem (theta constants and Shimura's forms; Sections 2.3.1 to 2.3.4).** Evaluation at the origin of E gives a section θ<sub>null,m</sub> of V<sub>m</sub><sup>∨</sup> ⊗ ω<sup>1/2</sup> over M<sub>1</sub>. Its q-expansion on the Tate curve is the classical one. For m = 2 there is an invertible subsheaf L<sub>Shi</sub> of V<sub>2</sub><sup>∨</sup> ⊗ ω<sup>1/2</sup> over M<sub>0</sub>(4) and a section θ<sub>0</sub> with q-expansion Σ q<sup>n²</sup>. Sections of powers of L<sub>Shi</sub> are Shimura's half-integral weight forms, now defined algebraically.

## Note, then ignore

- Inverting m: the thesis almost always works over bases where the even integer m, and so 2, is invertible. This keeps the Heisenberg groups well behaved. Safe to skip on a first reading.
- V<sub>m</sub> or its dual: conventions differ on which one matches ρ<sub>m</sub>. The author flags this himself. Safe to skip.
- Schemes: "scheme" means separated and locally noetherian throughout. This is a standing convention. Safe to skip.
- Gerbes: Chapter 1 phrases the obstruction to V<sub>m</sub> in the language of gerbes. You only need that the obstruction has order two. Safe to skip.
- Chapter 3: it redoes Chapter 2 analytically, section by section, to check agreement with the classical definitions. Safe to skip.

## One next step

Open the thesis at page 16 and read only the definition of the metaplectic stack M<sub>1/2</sub> and the paragraph after it.
