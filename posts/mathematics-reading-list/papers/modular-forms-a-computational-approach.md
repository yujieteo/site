source: https://wstein.org/books/modform/modform/
slogan: Modular symbols turn spaces of modular forms into finite linear algebra, so a computer can list cusp forms and their Hecke eigenvalues.
basis: the page itself

## Before you start

This is a textbook of algorithms, with ten chapters and an appendix. The likely feeling is boredom at a reference text, or a small guilt that you are reading recipes and not theorems. Both are fine to feel. If you have ever wanted to see an actual q-expansion of a cusp form of level 39 appear on a screen, this book shows how. Play with one example first. Finishing chapters can wait.

## The story

People want explicit modular forms: bases of the spaces M<sub>k</sub>(N, ε), q-expansions, Hecke eigenvalues. In level 1 this is easy, because every form is a polynomial in the Eisenstein series E<sub>4</sub> and E<sub>6</sub>. In higher level that fails. For a prime p the Eisenstein part of weight 2 has dimension 1, while the cusp forms have dimension about p/12, and they are not built from Eisenstein series.

The idea that unblocks this is due to Birch and Manin. A weight 2 cusp form is a differential on the modular curve X<sub>0</sub>(N). So study the homology of the curve, which pairs with the forms. Paths between cusps, called modular symbols, give a finite presentation of that homology. Hecke operators act on it by explicit matrices. Cusp forms then come out of linear algebra over ℚ. Stein turns each step into a tested recipe, with Sage code.

## Main definitions

**Modular symbol.** For α, β in ℙ<sup>1</sup>(ℚ), the symbol {α, β} stands for a path in the extended upper half plane from the cusp α to the cusp β. The group of weight 2 symbols for Γ<sub>0</sub>(N) is the free abelian group on these symbols, modulo the relations {α, β} + {β, γ} + {γ, α} = 0, modulo the action of Γ<sub>0</sub>(N), and modulo torsion.
- Weight k ≥ 2: tensor with the homogeneous polynomials of degree k − 2 in X and Y, then pass to the quotient by a finite index subgroup G of SL<sub>2</sub>(ℤ).

**Manin symbol.** For g in SL<sub>2</sub>(ℤ), the Manin symbol [g] is the modular symbol g{0, ∞}. It depends only on the right coset of g, so there are finitely many. In weight k the Manin symbol [P, g] also carries a polynomial P.

**Cuspidal modular symbols.** The kernel of the boundary map, which sends {α, β} to the formal difference of the cusps β and α. This is the part that matches cusp forms.

**Integration pairing.** A cusp form f and a path x pair to the number 2πi ∫<sub>x</sub> f(z) dz. In weight k the integrand also contains the polynomial P(z, 1).

## Main results

**Theorem (Manin; Theorem 3.7).** The cuspidal modular symbols of weight 2 for Γ<sub>0</sub>(N) are canonically isomorphic to the homology group H<sub>1</sub>(X<sub>0</sub>(N), ℤ). So their rank is 2g, twice the dimension of S<sub>2</sub>(Γ<sub>0</sub>(N)). The book cites Manin for the proof.

**Theorem (finite presentation; Theorem 3.13).** Take the free abelian group on the Manin symbols [r<sub>i</sub>], one for each right coset of Γ<sub>0</sub>(N) in SL<sub>2</sub>(ℤ). Divide by the relations x + xσ = 0 and x + xτ + xτ<sup>2</sup> = 0, and by torsion. The result is isomorphic to the weight 2 modular symbols for Γ<sub>0</sub>(N). Here σ has order 4 and τ has order 3 as matrices.
- Step 1: Manin symbols generate. Expand a rational number a/b as a continued fraction, and the convergents cut {0, a/b} into Manin symbols.
- Step 2: the two relations hold because σ swaps 0 and ∞, and τ cycles three cusps. That these are all the relations is harder, and the book leaves it to Manin's paper.

**Theorem (pairing; Theorem 3.4 in weight 2).** The integration pairing between S<sub>2</sub>(Γ<sub>0</sub>(N)) and H<sub>1</sub>(X<sub>0</sub>(N), ℤ) is nondegenerate and respects every Hecke operator T<sub>n</sub>. It gives a perfect pairing with H<sub>1</sub>(X<sub>0</sub>(N), ℝ). The general weight version is in the chapter on general modular symbols.

**Claim (the algorithm).** To compute S<sub>k</sub>(N, ε): list Manin symbols, solve the relations by linear algebra, cut out the cuspidal part with the boundary map, compute matrices of Hecke operators, and read off q-expansions of eigenforms from eigenvectors. The relations in weight k are the Merel–Shokurov theorem, which the book states without proof.

## Note, then ignore

- Left and right actions. Stein lets matrices act on symbols from the left and on Manin symbols from the right, with an inverse to make it work. It matters only when you write code. Safe to skip on a first reading.
- Numbering on the web page. The online chapter on general modular symbols numbers its results as 1.x, which differs from the printed book. It is a quirk of the web build. Safe to skip.
- Plus and minus parts. A star involution splits cuspidal symbols into two pieces, one pairing with cusp forms and one with their conjugates. It halves the work in practice. Safe to skip at first.
- What is left out. Weight 1, half-integral weight, quaternion algebras, trace formulas and complexity analysis are not treated. The preface says so. Safe to skip.
- The linear algebra chapter. It covers echelon forms over ℚ and stands alone. Read it only when you want speed. Safe to skip.

## One next step

Open the chapter "Modular Forms of Weight 2" on the page and read only Example 3.9, where three modular symbols give a basis for level 11.
