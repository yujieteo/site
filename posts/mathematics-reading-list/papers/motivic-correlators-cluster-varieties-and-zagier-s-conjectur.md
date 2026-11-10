source: https://arxiv.org/pdf/1803.08585
slogan: The zeta value of any number field at 4 is a determinant of 4-logarithm values, proved with a seven-point relation found through cluster varieties.
basis: the introduction and the main theorem statements

## Before you start

The feeling to expect is overwhelm. The paper runs past 100 pages, and its introduction alone is 25 pages of K-theory, Lie coalgebras and conjectures about mixed Tate motives. You are allowed to feel swamped by that. The statement of the main theorem needs only a number field, a determinant and one function. If you have ever liked the formula for ζ(2), this is its far descendant. Read the first three pages for the pleasure of the statement. Nothing obliges you to go on.

## The story

The class number formula writes the residue of ζ<sub>F</sub>(s) at s = 1 through a determinant of logarithms of units. Zagier conjectured the same shape for ζ<sub>F</sub>(n): a determinant of values of a single-valued n-logarithm. He proved n = 2, and Goncharov proved n = 3 with an explicit 22-term relation for the trilogarithm. For n = 4 nobody could find the analogous relation for Li<sub>4</sub> alone. The authors change the target. They build the whole weight 4 part of the motivic Lie coalgebra, which needs one more generator {x, y}<sub>3,1</sub> besides {x}<sub>4</sub>. A single relation Q<sub>4</sub> on seven points of the projective line defines it. That relation comes from the cluster structure on configurations of points, where the five-term relation is the pentagon. This yields a map from K-theory that computes Borel's regulator.

## Main definitions

**Single-valued polylogarithm L<sub>n</sub>.** Li<sub>n</sub>(z) = Σ z<sup>k</sup>/k<sup>n</sup>, continued analytically, is multivalued. L<sub>n</sub>(z) is the real or imaginary part of a fixed combination of Li<sub>n−k</sub>(z) log<sup>k</sup>|z| with Bernoulli number coefficients. It is single-valued and continuous on ℂℙ<sup>1</sup>.
- n = 2: the Bloch-Wigner dilogarithm.

**Higher Bloch group and polylogarithmic complex.** B<sub>n</sub>(F) = ℚ[F]/R<sub>n</sub>(F), where R<sub>n</sub>(F) is a subspace of functional equations of the n-logarithm, defined inductively. The map δ<sub>n</sub> sends {x}<sub>n</sub> to {x}<sub>n−1</sub> ⊗ x for n > 2, and {x}<sub>2</sub> to (1 − x) ∧ x.
- Weight 4 complex: B<sub>4</sub>(F) → B<sub>3</sub>(F) ⊗ F<sup>×</sup> → B<sub>2</sub>(F) ⊗ Λ<sup>2</sup>F<sup>×</sup> → Λ<sup>4</sup>F<sup>×</sup>, in degrees 1 to 4, all tensored with ℚ.

**The space 𝓛<sub>4</sub>(F) and relation Q<sub>4</sub> (Definition 1.11).** The ℚ-vector space with generators {x}<sub>4</sub> and {x, y}<sub>3,1</sub> for x, y in F<sup>×</sup>. The relations are Q<sub>4</sub>, a cyclic sum over any seven distinct points of ℙ<sup>1</sup>(F) with cross-ratios as arguments, and its specialisations.
- Shape: put a certain element on each six of the seven points. The sum of the seven is zero. The five-term relation Q<sub>2</sub> has the same shape with four points among five.

**Motivic correlator.** An element of the motivic Lie coalgebra attached to a cyclic word of points, introduced by Goncharov in 2008. It exists when mixed Tate motives do, for example over a number field. The generators {x, y}<sub>3,1</sub> map to correlators of the form Cor(0, 0, x, 1, y).

## Main results

**Theorem (Zagier's conjecture for n = 4; Theorem 1.2).** Let F be a number field with r<sub>1</sub> real and r<sub>2</sub> pairs of complex embeddings, and discriminant d<sub>F</sub>. Then there are y<sub>1</sub>, ..., y<sub>r<sub>2</sub></sub> in Ker δ<sub>4</sub> ⊂ B<sub>4</sub>(F) with ζ<sub>F</sub>(4) = π<sup>4(r<sub>1</sub>+r<sub>2</sub>)</sup> |d<sub>F</sub>|<sup>−1/2</sup> · det L<sub>4</sub>(σ<sub>i</sub>(y<sub>j</sub>)), where σ<sub>i</sub> runs over the complex embeddings up to conjugation. For any such y<sub>j</sub> the right side is a rational multiple of ζ<sub>F</sub>(4).
- Step 1: by Theorem 1.3 (iv), L<sub>4</sub> on H<sup>1</sup> of the complex computes Borel's regulator on K<sub>7</sub>.
- Step 2: Borel's theorem gives the rank of K<sub>7</sub>(F) and relates his regulator to ζ<sub>F</sub>(4).

**Theorem (K-theory to the weight 4 complex; Theorem 1.3).** For an infinite field F there are canonical maps K<sub>8−i</sub>(F) ⊗ ℚ → H<sup>i</sup> of the weight 4 polylogarithmic complex, for i = 1, 2, 3, 4. They vanish on the third step of the rank filtration. For the function field of a complex variety, composing with the map to real Deligne cohomology gives a non-zero rational multiple of Beilinson's regulator.
- Case F = ℂ, i = 1: the composite K<sub>7</sub>(ℂ) → ℝ given by L<sub>4</sub> is a non-zero rational multiple of the Borel regulator.

**Theorem (weight 4 extension; Theorem 1.14).** The explicit spaces 𝓛<sub>n</sub>(F), n ≤ 4, form a graded Lie coalgebra. There is a short exact sequence 0 → 𝓑<sub>4</sub>(F) → 𝓛<sub>4</sub>(F) → Λ<sup>2</sup>B<sub>2</sub>(F) → 0, functorial in F, where 𝓑<sub>4</sub>(F) is the span of the symbols {x}<sub>4</sub>.

**Conjecture (Conjecture 1.4).** The induced maps from the fourth graded piece of the rank filtration on K<sub>8−i</sub>(F) ⊗ ℚ to H<sup>i</sup> are isomorphisms. This is known for i = 4 by Suslin.

## Note, then ignore

- Everything is tensored with ℚ. The authors work modulo torsion throughout and drop the sign for it. Safe to skip on a first reading.
- Two fonts. The paper uses one font of L and B for the conjectural motivic objects and another for the explicit ones. In this summary 𝓛 and 𝓑 always mean the explicit spaces. Safe to skip.
- Rational factor. The determinant formula holds up to a rational number that the theorem does not specify. Safe to skip.
- The Freeness Conjecture. It predicts the extension in Theorem 1.14 and motivates the method, but the proof does not assume it. Safe to skip.
- Version. The arXiv file is version 5, revised in 2026, long after the 2018 first posting. Safe to skip.

## One next step

Open the paper at Section 1.1 and read Theorem 1.1 and the definition of L<sub>n</sub>(z) just above it. That is under one page.
