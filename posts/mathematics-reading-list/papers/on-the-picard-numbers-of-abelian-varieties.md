source: https://arxiv.org/pdf/1703.05882
slogan: Picard numbers of abelian varieties of dimension g skip values just below g², yet in the limit almost every value up to g² occurs.
basis: the introduction and the main theorem statements

## Before you start

This one is short, about twenty pages, and the authors call their methods mostly elementary. So the likely feeling is mild doubt: is something this concrete worth an evening? You are allowed to wonder that. If you want to see how the endomorphism algebra of an abelian variety controls a plain integer invariant, this is a friendly place to watch it happen. Read it as a counting puzzle with real geometry behind it. Enjoy the examples. There is no need to check every case.

## The story

The Picard number ρ of a complex abelian variety of dimension g lies between 1 and g<sup>2</sup>. For surfaces every value 1, 2, 3, 4 occurs, and for K3 surfaces every value up to 20 occurs. So one might guess that all values occur in every dimension. They do not. In dimension 3 the realised values are 1, …, 6 and 9, so 7 and 8 are missing. The tool is isogeny. Up to isogeny an abelian variety is a product of powers of simple ones. The Picard number adds over non-isogenous blocks, and a formula of Murty gives it for each block. The question becomes combinatorics. The authors find gaps near the top for every g ≥ 3. Then they show the gaps become negligible: the proportion of realised values tends to 1.

## Main definitions

**Picard number.** For a complex abelian variety A, ρ(A) is the rank of the Néron–Severi group NS(A) = H<sup>2</sup>(A, ℤ) ∩ H<sup>1,1</sup>(A). It is invariant under isogeny and satisfies 1 ≤ ρ(A) ≤ g<sup>2</sup> with g = dim A.

**The set R<sub>g</sub>.** R<sub>g</sub> is the set of integers that occur as ρ(A) for some abelian variety A of dimension g. The asymptotic density is δ = lim #R<sub>g</sub>/g<sup>2</sup> as g → ∞.
- Example: R<sub>2</sub> = {1, 2, 3, 4} and R<sub>3</sub> = {1, …, 6, 9}.

**Isogeny decomposition and length.** By Poincaré's complete reducibility theorem, A is isogenous to A<sub>1</sub><sup>n<sub>1</sub></sup> × … × A<sub>r</sub><sup>n<sub>r</sub></sup> with the A<sub>i</sub> simple and pairwise non-isogenous. The length r(A) is the number r of blocks.
- Additivity (Corollary 2.3): ρ(A) is the sum of the ρ(A<sub>i</sub><sup>n<sub>i</sub></sup>).
- Blocks (Proposition 2.4, due to Murty): ρ(B<sup>k</sup>) for simple B is an explicit quadratic in k that depends on the Albert type of End(B) ⊗ ℚ.

## Main results

**Theorem (two gaps; Theorem 1.1).** For g ≥ 4 no abelian variety of dimension g has (g − 1)<sup>2</sup> + 1 &lt; ρ &lt; g<sup>2</sup>. For g ≥ 7 none has (g − 2)<sup>2</sup> + 4 &lt; ρ &lt; (g − 1)<sup>2</sup> + 1.
- Case 1: if r(A) ≥ 2, write A ∼ A<sub>1</sub> × A<sub>2</sub> with no maps between the factors. Then ρ ≤ n<sup>2</sup> + (g − n)<sup>2</sup>, which is largest at n = 1.
- Case 2: if A is a power of one simple variety, Murty's formula bounds ρ directly.

**Theorem (who sits at the top; Theorem 4.2).** For g ≥ 5, ρ(A) = (g − 1)<sup>2</sup> + 1 exactly when A is isogenous to E<sub>1</sub><sup>g−1</sup> × E<sub>2</sub>, with E<sub>1</sub> a CM elliptic curve not isogenous to E<sub>2</sub>. For g ≥ 7, ρ(A) = (g − 2)<sup>2</sup> + 4 exactly when A is isogenous to E<sub>1</sub><sup>g−2</sup> × E<sub>2</sub><sup>2</sup>, with both curves CM and not isogenous.
- Key input (Proposition 3.1): among varieties of length r, the largest Picard number is (g − r + 1)<sup>2</sup> + (r − 1), reached by a power of a CM elliptic curve times r − 1 further pairwise non-isogenous elliptic curves.

**Theorem (asymptotic completeness; Theorems 1.2 and 7.1).** The density δ equals 1. That is, #R<sub>g</sub>/g<sup>2</sup> → 1 as g → ∞.
- Step 1 (Lemma 7.2): if n − 1 = n<sub>1</sub><sup>2</sup> + … + n<sub>k</sub><sup>2</sup> with n<sub>1</sub> + … + n<sub>k</sub> ≤ g − 1, then some g-dimensional abelian variety has ρ = n. This follows from additivity.
- Step 2: take n<sub>1</sub> as large as possible and write the remainder as four squares by Lagrange's theorem. For large g the sizes add up to less than g.

**Theorem (number fields; Theorem 8.1 and Corollary 8.2).** Every polarised complex abelian variety shares its endomorphism algebra with Rosati involution with one defined over a number field. So every ρ ∈ R<sub>g</sub> occurs for an abelian variety over a number field. The proof of Theorem 8.1 is credited to Ben Moonen.

## Note, then ignore

- Albert's four types. Murty's formula splits into Types I to IV according to the endomorphism algebra of a simple abelian variety. You only need "the formula exists" on a first reading, so skip the table.
- Non-algebraic tori. A general complex torus can have ρ = 0. The paper excludes these and works only with abelian varieties. Safe to ignore.
- The thresholds g ≥ 4, 5, 7. They are needed because small dimensions have coincidences, such as ρ = 6 for a cube of a non-CM elliptic curve when g = 3. Safe to skip.
- Additive, not strongly additive. ρ(A × B) = ρ(A) + ρ(B) needs Hom(A, B) = 0. For E × E it fails, since ρ is 3 or 4. Note it and move on.
- Theorem 7.4 and Corollary 7.6. They describe how large Picard numbers cluster into translated copies of smaller sets R<sub>n</sub>, for g large. This refines the story and can wait.

## One next step

Open the paper at the introduction and read the paragraph that shows R<sub>3</sub> = {1, …, 6, 9}, just before Theorem 1.1. Try to see why 7 and 8 cannot occur.
