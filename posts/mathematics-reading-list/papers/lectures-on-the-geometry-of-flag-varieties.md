source: http://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
slogan: Schubert varieties have mild singularities, and that alone forces the signs in the K-theory of a flag variety to alternate.
basis: the introduction and the main theorem statements

## Before you start

Flag varieties have a reputation for heavy combinatorics: Young tableaux, Bruhat order, root systems. Opening 59 pages on them can bring a tired sort of dread, the sense of a reference text to be endured. That feeling is fine to have. These notes are different in kind. They use Hartshorne-level geometry and no algebraic groups, and they aim at one sign rule. If you want to see vanishing theorems do real work, start here, and enjoy the first section before you think about the last.

## The story

A flag variety X is cut into Schubert cells, each an affine space. Their closures, the Schubert varieties, give a basis of the cohomology ring, and the structure constants are non-negative because they count intersection points. In the Grothendieck ring K(X) of coherent sheaves, the structure sheaves of Schubert varieties also form a basis. Buch computed the constants for Grassmannians, found that their signs alternate with codimension, and conjectured this for all flag varieties. No combinatorial formula is known in general, so counting cannot settle it. Brion's proof is geometric. Schubert varieties are normal with rational singularities. A degeneration of the diagonal of X × X into products of Schubert varieties turns each structure constant into an Euler characteristic on a Richardson variety. A vanishing theorem of Kawamata–Viehweg type then leaves one cohomology group, which fixes the sign.

## Main definitions

**Schubert cell and variety (Section 1.2).** Let G = GL<sub>n</sub>(ℂ), B the upper triangular matrices, and X = G/B the variety of complete flags. The B-orbits C<sub>w</sub> are indexed by permutations w, and C<sub>w</sub> is an affine space of dimension ℓ(w). The Schubert variety X<sub>w</sub> is its closure.
- X<sub>w</sub> is the union of the cells C<sub>v</sub> with v ≤ w in the Bruhat order.
- Opposite Schubert varieties X<sup>v</sup> come from the lower triangular group.

**Richardson variety (Definition 1.3.3).** For v ≤ w, the intersection of X<sub>w</sub> with X<sup>v</sup>. It is non-empty exactly when v ≤ w, and then it is irreducible (Proposition 1.3.2).

**Rational singularities (Definition 2.2.4).** A variety Y has rational singularities if some resolution π: Z → Y has π<sub>\*</sub>O<sub>Z</sub> = O<sub>Y</sub> and vanishing higher direct images of O<sub>Z</sub>.
- The first condition is normality of Y.

**Schubert classes in K(X) (Section 4.3).** Write O<sub>w</sub> for the class of the structure sheaf of X<sub>w</sub>. The constants c<sub>vw</sub><sup>x</sup> are defined by O<sub>v</sub> · O<sub>w</sub> = Σ<sub>x</sub> c<sub>vw</sub><sup>x</sup> O<sub>x</sub>.

## Main results

**Theorem (singularities of Schubert varieties; Theorems 2.1.1 and 2.2.3).** Every Schubert variety X<sub>w</sub> is normal. The Bott–Samelson resolution Z → X<sub>w</sub> attached to a reduced word of w has trivial higher direct images of its structure sheaf. So X<sub>w</sub> has rational singularities and is Cohen–Macaulay.
- Step 1: induct along the ℙ<sup>1</sup>-fibrations G/B → G/P<sub>i</sub> for minimal parabolics P<sub>i</sub>.
- Step 2: build Z as an iterated ℙ<sup>1</sup>-bundle and push forward one factor at a time.

**Theorem (vanishing; Theorem 2.3.1).** For a dominant weight λ and any w, the restriction H<sup>0</sup>(X, L<sub>λ</sub>) → H<sup>0</sup>(X<sub>w</sub>, L<sub>λ</sub>) is surjective, and H<sup>j</sup>(X<sub>w</sub>, L<sub>λ</sub>) = 0 for j ≥ 1.

**Theorem (degeneration of the diagonal; Theorems 3.1.2 and 3.4.1).** The diagonal of X × X degenerates flatly to the union over w of X<sub>w</sub> × X<sup>w</sup>. In K(X × X), the class of the diagonal is Σ<sub>w</sub> [O<sub>X<sub>w</sub></sub>] × [O<sub>X<sup>w</sup></sub>(−∂X<sup>w</sup>)], where ∂ denotes the boundary, the union of the Schubert divisors.
- Consequence: the pairing (α, β) ↦ χ(α · β) on K(X) is non-degenerate, and the classes O<sub>X<sup>w</sup></sub>(−∂X<sup>w</sup>) form the basis dual to the Schubert classes.

**Theorem (Buch's conjecture; Theorem 4.3.1).** The structure constants of K(X) satisfy (−1)<sup>ℓ(v)+ℓ(w)+ℓ(x)+ℓ(w<sub>0</sub>)</sup> c<sub>vw</sub><sup>x</sup> ≥ 0, where w<sub>0</sub> is the longest permutation.
- Step 1: Theorem 4.2.1 shows Richardson varieties have rational singularities, and writes c<sub>vw</sub><sup>x</sup> as a coefficient of the class of a Richardson variety.
- Step 2: Theorem 4.1.3, a vanishing theorem for a subvariety Y with rational singularities met by a general translate of a Schubert variety, gives the sign.

## Note, then ignore

- GL<sub>n</sub> only. The notes state everything for the general linear group so that no structure theory is needed. The intro says the results extend to connected reductive groups. Safe to skip on a first reading.
- Complex numbers. All varieties are over ℂ because the proofs use Kodaira-type vanishing. Skip the question of positive characteristic at first.
- Dimension versus codimension. X<sub>w</sub> has dimension ℓ(w), so the sign in Theorem 4.3.1 is (−1) to the difference of codimensions. Other papers index by codimension. Skip the bookkeeping at first.
- Two bases. The ideal sheaves O(−∂X<sub>w</sub>) form a second basis of K(X), and several formulas pass between the two. Skip the second basis until Section 3.4.
- Rational singularities are needed. The sign rule for the class of a general subvariety Y fails without them (Remark 4.1.4). Note it and move on.

## One next step

Open the notes and read the first three paragraphs of the Introduction on page 1. They state the whole goal in plain terms.
