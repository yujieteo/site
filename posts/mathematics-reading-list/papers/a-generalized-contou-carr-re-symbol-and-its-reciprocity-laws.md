source: https://arxiv.org/pdf/1410.3451
slogan: The tame symbol and its relatives are boundary maps in K-theory, so a reciprocity law is the statement that two boundary maps compose to zero.
basis: the introduction and the main theorem statements

## Before you start

The introduction alone runs to twelve pages and passes through class field theory, Tate vector spaces, spectra and adèles. The likely feeling is shame at how much background seems to be assumed. That feeling makes sense here, and nothing is wrong with having it. The authors wrote the introduction as a guided tour for exactly this reason. If you want to see why residues, tame symbols and K-theory are one subject, the tour shows it. Read it for the view. Finishing the paper can wait.

## The story

On a curve, the tame symbol of two functions at a point is a non-zero number, and the product over all points is 1. Contou-Carrère extended the symbol from a field k to any k-algebra A: two units of A((t)) give a unit of A. The explicit formula is long and depends on the coordinate t, although the symbol does not. People wanted the same in n variables, for n + 1 units of A((t<sub>1</sub>))···((t<sub>n</sub>)), with a reciprocity law. Formulas do not scale. The paper gives two constructions and proves they agree. One composes n boundary maps in K-theory. The other, after Tate, reads the symbol as a commutator in an extension of an automorphism group. Reciprocity then becomes d<sup>2</sup> = 0 in a Gersten-style complex.

## Main definitions

**Iterated loop group.** For a group functor G on rings, L<sup>n</sup>G(A) = G(A((t<sub>1</sub>))···((t<sub>n</sub>))), where A((t)) = A[[t]][t<sup>−1</sup>]. The symbol lives on L<sup>n</sup>𝔾<sub>m</sub>(A), the units of the iterated Laurent series ring.
- Case n = 1, A a field: this is k((t))<sup>×</sup>, and the symbol is the tame symbol (f, g) ↦ (−1)<sup>v(f)v(g)</sup> f<sup>v(g)</sup>/g<sup>v(f)</sup> evaluated at t = 0.

**n-Tate object.** A Tate object is a formal ind-pro limit of finite objects, the way k((t)) is a colimit over n of limits over m of t<sup>−n</sup>k[t]/(t<sup>m</sup>). An n-Tate object is the result of iterating this n times, so A((t<sub>1</sub>))···((t<sub>n</sub>)) is an n-Tate object over A.
- Why: its automorphism group is much larger than the units, and includes every change of coordinate.

**Spectral extension and higher commutator.** A central extension of a group G by an abelian group M is a homotopy class of maps BG → B<sup>2</sup>M. A spectral extension replaces B<sup>2</sup>M by a spectrum E: it is a map from the suspension spectrum of BG to Σ<sup>2</sup>E. A higher commutator assigns to n + 1 commuting elements of G a class built from this map, generalising the commutator of lifts in a central extension.

**Higher Contou-Carrère symbol.** For f<sub>0</sub>, …, f<sub>n</sub> in A((t<sub>1</sub>))···((t<sub>n</sub>))<sup>×</sup>, the symbol (f<sub>0</sub>, …, f<sub>n</sub>) ∈ A<sup>×</sup> is the higher commutator of the f<sub>i</sub> in the spectral extension of Theorem-Construction 1.1.

## Main results

**Theorem (construction; Theorem-Construction 1.1).** Let k be a field and A a k-algebra. Every n-Tate object V over A has a non-trivial spectral extension of Aut(V) by the shifted non-connective K-theory spectrum Σ<sup>n−2</sup>K<sub>A</sub>. Restricting to the units of A((t<sub>1</sub>))···((t<sub>n</sub>)) and taking higher commutators defines the symbol. For n ≤ 2 it recovers the symbols of Contou-Carrère and of Osipov and Zhu.
- Step 1: the extension comes from the n-fold iterate of an index map on K-theory of Tate categories.
- Step 2: the plus construction does not change homology, so a map out of K-theory gives a cohomology class of B Aut(V).

**Theorem (boundary map formula; Theorem 1.2).** For A a k-algebra and f<sub>0</sub>, …, f<sub>n</sub> as above, (f<sub>0</sub>, …, f<sub>n</sub>) raised to the power (−1)<sup>n</sup> equals det π<sub>\*</sub> ∂<sub>1</sub>···∂<sub>n</sub>{f<sub>0</sub>, …, f<sub>n</sub>}. Here {…} is the Steinberg symbol in K<sub>n+1</sub>, each ∂<sub>i</sub> is a K-theory boundary map that removes one Laurent variable, and det: K<sub>1</sub>(A) → A<sup>×</sup> is the determinant. If A is a field, this is the higher tame symbol of Parshin and Kato.

**Theorem (the classical case; Theorem 1.3).** For a k-algebra A and f, g ∈ A((t))<sup>×</sup>, the classical symbol satisfies (f, g)<sup>−1</sup> = det ∂{f, g}, with ∂: K<sub>2</sub>(A((t))) → K<sub>1</sub>(A). Kapranov and Vasserot had conjectured this.

**Theorem (reciprocity; Theorem 1.4).** Let X be a reduced separated k-scheme of finite type and dimension n. Fix a flag of integral closed subschemes Z<sub>n</sub> ⊃ … ⊃ Z<sub>0</sub> with dim Z<sub>j</sub> = j and the term Z<sub>i</sub> left out. If i = 0, assume Z<sub>1</sub> is proper over k. For units f<sub>0</sub>, …, f<sub>n</sub> of the adèle-type ring of the flag, the product of the symbols over all Z with Z<sub>i−1</sub> ⊂ Z ⊂ Z<sub>i+1</sub> is well defined and equals 1.
- Step 1: Theorem 1.2 turns each symbol into a composite of boundary maps.
- Step 2: the sum of those composites is d<sup>2</sup> in a Gersten-style complex, built from perfect complexes with localisation and completion, so it vanishes.

## Note, then ignore

- The exponent (−1)<sup>n</sup>. It is a sign convention between the commutator and the boundary map. Safe to skip on a first reading.
- Graded lines and π<sub>0</sub>. The sign in the tame symbol comes from K<sub>0</sub>, which the introduction first ignores and then repairs with graded lines. Safe to skip.
- Non-connective K-theory. The extension uses the spectrum with negative K-groups so that the shifts work for every A. Safe to skip.
- Field coefficients. All theorems assume A is an algebra over a field k. The mixed characteristic case is not treated. Safe to skip.
- The "curve" of a flag. The authors say the geometric object behind an almost saturated flag is not available, and they work with a stable ∞-category in its place. Safe to skip.

## One next step

Open the paper at Section 1.5 and read the tame symbol formula (13) and the two lines after it that produce it from a K-theory boundary map.
