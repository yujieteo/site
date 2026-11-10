source: https://arxiv.org/pdf/2308.08369
slogan: A cell structure on the source turns Reidemeister torsion into a canonical volume form on a mapping stack, and the Todd class is one case.
basis: the introduction and the main theorem statements

## Before you start

This paper speaks in ∞-categories, derived stacks and K-theory spectra from its first page. That may bring shame at not owning the language. It is fine to feel that. Under the language sits a classical object, Reidemeister torsion, and one plain idea about counting cells. If you want to see how K-theory produces volume forms, the four-page introduction gives it to you. Read that for interest. The other 54 pages are there if you want them later.

## The story

The Euler characteristic of a finite CW complex has a local formula: count cells with signs. The homotopy type alone does not give such a formula. The extra data is a simple homotopy type, and K-theory records it as a lift of a class along an assembly map. Whitehead torsion measures the difference between two lifts. Naef and Safronov move this to derived algebraic geometry. A derived stack X with such a lift has a "simple structure". Then the determinant of cohomology of any perfect complex on X factors into contributions from points. Apply this to the cotangent complex of a mapping stack Map(X, Y), and you get a trivialisation of its determinant line. That is a volume form. For local systems on a finite CW complex it is the Reidemeister-Turaev torsion of the adjoint local system.

## Main definitions

**Simple structure.** Let X be a derived prestack over a commutative ring k satisfying a finiteness assumption (Assumption 1.8). There is an assembly map α from chains on X(k) with coefficients in K(k) to K<sup>ω</sup>(X), the K-theory of compact quasi-coherent complexes. A simple structure is a K-theoretic Euler class e<sub>K</sub>(X) in the source of α together with a homotopy α(e<sub>K</sub>(X)) ∼ [O<sub>X</sub>] (Definition 1.9).
- For the Betti stack M<sub>B</sub> of a homotopy type M, this is a simple homotopy type. A finite CW structure gives one.
- The Euler class e(X) is the image of e<sub>K</sub>(X) under K(k) → ℤ. Its push-forward to a point is the Euler characteristic χ(X).

**Volume form.** Let Y be a derived prestack with a perfect cotangent complex L<sub>Y</sub>. A volume form on Y is an isomorphism det(L<sub>Y</sub>) ≅ O<sub>Y</sub> (Definition 2.5). The virtual dimension dim(Y) is the Euler characteristic of L<sub>Y</sub>.

**Mapping stack.** Map(X, Y) is the derived stack of maps from X to Y. Its cotangent complex is π<sub>♯</sub> ev<sup>\*</sup> L<sub>Y</sub>, where ev is evaluation and π<sub>♯</sub> is homology along X (Proposition 1.5).
- Main example: Loc<sub>G</sub>(M) = Map(M<sub>B</sub>, BG), the derived stack of G-local systems on M.

## Main results

**Theorem (local index formula; Theorem 1.12).** Let X have a simple structure and let F be a perfect complex on X. Then the class of the homology p<sub>♯</sub>F in K(k) is homotopic to a sum of classes of fibres [F<sub>x<sub>i</sub></sub>] weighted by elements α<sub>i</sub> of K(k), for some points x<sub>i</sub> of X. This is the statement as the introduction gives it. The full statement is in Section 1.

**Theorem (torsion volume form; Theorem 2.8).** Let Y have pure dimension dim(Y) and let X have a simple structure. Assume one of: dim(Y) = 0, or a chosen isomorphism det(p<sub>♯</sub>O<sub>X</sub>) ≅ k. Assume also one of: a volume form on Y, or a trivialisation of the Euler class e(X). Then Map(X, Y) carries a canonical volume form, and dim Map(X, Y) = dim(Y) χ(X). The theorem also has a third option on each side, using squares and mod 2 classes.
- Step 1: write det L<sub>Map(X,Y)</sub> as det of π<sub>♯</sub> ev<sup>\*</sup> L<sub>Y</sub>.
- Step 2: use the simple structure to factor this determinant into fibres of det L<sub>Y</sub>, which the chosen data trivialise.

**Theorem (Todd class; Theorem 5.23).** The loop stack LY = Map(S<sup>1</sup><sub>B</sub>, Y) and the shifted tangent bundle T[−1]Y both carry torsion volume forms. Pulled back to a common correspondence, their ratio is det(at / (exp(at) − 1)), with at the Atiyah class. This is the Todd class of Y.

**Theorem (orientation data; Proposition 3.41 and Theorem 3.45).** Let M be a closed oriented 3-manifold and G a split connected reductive group. Then the (−1)-shifted symplectic stack Loc<sub>G</sub>(M) has canonical orientation data, that is, a canonical square root of its determinant line.
- Case 1: for a parabolic P ⊂ G with Levi L, the correspondence Loc<sub>L</sub>(M) ← Loc<sub>P</sub>(M) → Loc<sub>G</sub>(M) also has canonical orientation data, if M has a spin structure or the modular character of P has a square root.

## Note, then ignore

- Euler structure versus simple structure. An Euler structure is a simple structure plus a trivialisation of the K-theoretic Euler class. The paper needs the weaker notion for spaces with non-zero Euler characteristic. Safe to skip on a first reading.
- Surfaces and signs. On a closed oriented surface the torsion volume form and the symplectic volume form on Loc<sub>G</sub> differ by a sign given by a second Stiefel-Whitney class (Theorem 3.35). Safe to skip on a first reading.
- Shifts divisible by 4. Symplectic volume forms on n-shifted symplectic stacks are defined here for n divisible by 4, using Grothendieck-Witt spectra. Safe to skip on a first reading.
- De Rham and Dolbeault stacks. Section 4 builds simple structures on these using de Rham ε-factors. This is a separate thread. Safe to skip on a first reading.
- Homology and cohomology. The paper uses p<sub>♯</sub> (homology, a left adjoint) more than p<sub>\*</sub> (cohomology). Poincaré duality converts between them. Safe to skip on a first reading.

## One next step

Open the arXiv PDF and read the first page of the Introduction, the part headed "Simple homotopy types", up to the two bullet points on Wall's obstruction and Whitehead torsion.
