source: https://www.ias.edu/sites/default/files/deglise4.pdf
slogan: One class on infinite projective space gives a cohomology theory of schemes all its Chern classes, and symplectic bundles cover theories with no such class.
basis: the introduction and the main theorem statements

## Before you start

These are 55 pages of summer school notes, and they assume the school's earlier lectures: the stable motivic homotopy category, ∞-categories, six functors. You may feel shame at meeting SH(S) on page 5 as if you were meant to know it. That feeling is fair, and you can leave it be. If you know Chern classes from topology, you already hold the plot. Read for the pleasure of watching a familiar story replayed in algebraic geometry. Finishing is optional.

## The story

Topologists attach Chern classes to complex vector bundles, and the theory follows from one computation: the cohomology of projective space. Algebraic geometers wanted the same for every cohomology theory of schemes at once: Chow groups, K-theory, de Rham, étale, cobordism. Motivic homotopy theory makes each such theory an object E of one category SH(S). The unblocking idea is orientation: choose one class c in the E-cohomology of P<sup>∞</sup> that restricts to the unit on P<sup>1</sup>. From c you get the projective bundle formula, Chern classes, Thom classes, a formal group law, and a Riemann-Roch formula comparing any two oriented theories. Then the analogy breaks. Theories that see quadratic forms, such as Chow-Witt groups and hermitian K-theory, admit no orientation. The last lecture repairs this with symplectic orientations and a quadratic Riemann-Roch formula.

## Main definitions

**Motivic ring spectrum.** SH(S) is the stable motivic homotopy category of a Noetherian scheme S, built from Nisnevich sheaves on smooth S-schemes by inverting A<sup>1</sup> and then P<sup>1</sup>. An object E gives a bigraded cohomology E<sup>n,i</sup>(X) for smooth X over S. A ring spectrum is a commutative monoid in the homotopy category of SH(S), so E<sup>\*\*</sup>(X) has a cup product.
- Examples: motivic cohomology H<sub>M</sub>ℤ with H<sup>2n,n</sup> = CH<sup>n</sup>, algebraic K-theory KGL, algebraic cobordism MGL.

**Orientation (Definition 1.2.1).** An orientation of E is a class c in the reduced group E<sup>2,1</sup>(P<sup>∞</sup><sub>S</sub>) whose restriction to P<sup>1</sup><sub>S</sub> is the unit of E. Since P<sup>∞</sup> classifies line bundles, c gives a first Chern class c<sub>1</sub>(L) ∈ E<sup>2,1</sup>(X) for each line bundle L on X.
- Oriented: H<sub>M</sub>ℤ, the Weil cohomologies, KGL, MGL.
- Not orientable: singular cohomology of the real points, where H<sup>1</sup>(ℝP<sup>∞</sup>, ℤ) is only ℤ/2.

**Formal group law of (E, c).** The map c<sub>1</sub> need not be additive. There is a power series F with coefficients in E<sup>\*\*</sup>(S) such that c<sub>1</sub>(L<sub>1</sub> ⊗ L<sub>2</sub>) = F(c<sub>1</sub>(L<sub>1</sub>), c<sub>1</sub>(L<sub>2</sub>)).
- Motivic cohomology: F(x, y) = x + y.
- K-theory: F(x, y) = x + y − βxy, with β the Bott element.

**Sp-orientation.** A class b in the reduced group E<sup>4,2</sup>(HP<sup>∞</sup><sub>S</sub>) that restricts to the unit on HP<sup>1</sup>, where HP<sup>∞</sup> = BSp<sub>2</sub> classifies rank 2 symplectic bundles. It gives Borel classes for symplectic bundles in place of Chern classes.

## Main results

**Theorem (projective bundle formula; Theorem 1.2.4).** Let (E, c) be an oriented ring spectrum over S, X a smooth S-scheme, V a vector bundle of rank n on X, and P(V) its projective bundle with tautological line bundle λ. Then E<sup>\*\*</sup>(P(V)) is a free E<sup>\*\*</sup>(X)-module on 1, c<sub>1</sub>(λ), ..., c<sub>1</sub>(λ)<sup>n−1</sup>.
- Step 1: the higher Chern classes c<sub>i</sub>(V) ∈ E<sup>2i,i</sup>(X) are defined as the coefficients of the one relation among powers of c<sub>1</sub>(λ).

**Theorem (cobordism and the Lazard ring; Theorem 2.2.9, Levine, Hoyois, Spitzweck).** Let S be a local scheme, pro-smooth over a field of characteristic exponent e or over a discrete valuation ring of mixed characteristic (0, e). Then the map from the Lazard ring to MGL<sup>2\*,\*</sup>(S) becomes an isomorphism after inverting e. So MGL[1/e] carries the universal formal group law.
- Background: Voevodsky conjectured the isomorphism for every regular local S, without inverting e.

**Theorem (Grothendieck-Riemann-Roch; Theorem 3.2.7).** Let φ : E → F be a morphism of ring spectra between oriented spectra (E, c) and (F, d). Let f : X → S be a smoothable lci morphism of dimension n with virtual tangent bundle τ<sub>f</sub>. Then φ sends the fundamental class of f for c to the Todd class td<sub>φ</sub>(τ<sub>f</sub>) times the fundamental class of f for d.
- Step 1: fundamental classes come from the six functors formalism (Theorem 3.1.8, Déglise, Jin and Khan).
- Step 2: the splitting principle reduces the comparison of Thom classes to line bundles, where it is the definition of the Todd class.

**Theorem (quadratic Hirzebruch-Riemann-Roch; Theorem 4.3.9).** Let k be a regular local ring and X a regular, lci, projective k-scheme of even dimension d, whose virtual tangent bundle has a stable Sp-orientation. Let (V, φ) be a symplectic bundle if d ≡ 2 mod 4, or a symmetric bundle if d ≡ 0 mod 4. Then the quadratic Euler characteristic of (V, φ), a class in the Grothendieck-Witt ring GW(k), equals the quadratic degree of the Todd class of the tangent bundle times the Borel character of (V, φ).
- Step 1: the Borel character is a rational isomorphism from hermitian K-theory to a sum of Milnor-Witt and ordinary motivic cohomology (Theorem 4.3.2).
- Step 2: apply the symplectic version of Riemann-Roch to this character.

## Note, then ignore

- ∞-categories. The notes use them to define SH(S) by a universal property, then work in the homotopy category almost everywhere. Safe to skip on a first reading.
- The elements η and ε. The Hopf map η and the swap ε on G<sub>m</sub> ∧ G<sub>m</sub> control the sign rule for cup products. For an orientable E, η acts by zero and ε by −1 (Proposition 1.2.14), so the usual sign rule returns. Safe to skip.
- Formal ternary laws. In the symplectic case a series in three variables replaces the formal group law. The last theorem does not need it, so it is safe to skip.

## One next step

Open the PDF at page 3 and read only the table of Stiefel-Whitney, Pontryagin and Chern classes with the paragraph after it. Then jump to Definition 1.2.1 on page 12.
