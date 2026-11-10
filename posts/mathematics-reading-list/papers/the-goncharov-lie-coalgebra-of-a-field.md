source: https://arxiv.org/pdf/2606.23863
slogan: The homology of general linear groups hides a Lie coalgebra whose generators behave like polylogarithms, and it computes K-groups of fields in weight 3.
basis: the introduction and the main theorem statements

## Before you start

This paper runs past 120 pages and uses E<sub>∞</sub>-algebras, Koszul duality and Steinberg modules. The likely feeling is shame at not knowing three backgrounds at once. That feeling is allowed. Nobody reads this paper with all three in hand. If you want to see K-groups of a field written in symbols you can compute with, the introduction already delivers that. Enjoy the pictures of simplices in projective space first. Finishing is optional.

## The story

People want formulas for the K-groups of a field F. Milnor and Matsumoto gave one for K<sub>2</sub> by symbols. Bloch and Suslin gave one for K<sub>3</sub> using the dilogarithm. Goncharov conjectured the next case with the trilogarithm, and behind it a Lie coalgebra of mixed Tate motives that nobody could construct for a general field.

The blocker: that Lie coalgebra had no definition. The idea here is to find it inside the homology of the groups GL<sub>n</sub>(F). Block sum of matrices makes their classifying spaces into one commutative algebra up to homotopy. Its "generators and relations" form a table of groups. That table vanishes below a line of slope 2. The groups on the line form a Lie coalgebra. The authors give it a presentation, compute its cobracket, and use it to describe K<sub>4</sub> and part of K<sub>5</sub> in weight 3.

## Main definitions

**E<sub>∞</sub>-homology of BGL(F).** Take rational chains on the spaces BGL<sub>n</sub>(F) for all n ≥ 1, with the product from block sum. The derived indecomposables of this algebra have homology groups H<sup>E∞</sup><sub>n,d</sub>, graded by rank n and degree d.
- Vanishing: for n ≥ 2 these groups are zero when d ≤ 2n − 2 (Galatius, Kupers, Randal-Williams).

**Goncharov Lie coalgebra G(F).** The direct sum over n ≥ 1 of G<sub>n</sub>(F) = H<sup>E∞</sup><sub>n,2n−1</sub>, the groups on the critical line. Koszul duality gives a cobracket G<sub>n</sub> → ⊕ G<sub>n1</sub> ⊗ G<sub>n2</sub> over n = n<sub>1</sub> + n<sub>2</sub>.
- Weight n means rank n.

**Cohomology H<sup>i</sup>(G(F))<sub>n</sub>.** The cohomology of the weight n part of the Chevalley–Eilenberg complex G<sub>n</sub> → (Λ<sup>2</sup>G)<sub>n</sub> → ... → Λ<sup>n</sup>(F<sup>×</sup> ⊗ ℚ). Here G<sub>n</sub> sits in degree 1 and the cobracket induces the differential.

**Adams weight piece K<sub>i</sub><sup>(r)</sup>(F)<sub>ℚ</sub>.** The part of K<sub>i</sub>(F) ⊗ ℚ on which each Adams operation ψ<sup>p</sup> acts by p<sup>r</sup>.

## Main results

**Theorem (presentation; Theorem C.a).** For any field F, the space G<sub>n</sub>(F) is spanned over ℚ by correlators Cor(x<sub>0</sub>, ..., x<sub>n</sub>), with the x<sub>i</sub> in F and not all equal. The relations are homogeneity under a common shift x<sub>i</sub> ↦ x<sub>i</sub> + b, cyclic symmetry, shuffle relations, and a family of decomposition relations.
- Step 1: relate E<sub>∞</sub>-homology to Steinberg modules, built from the Tits building of F<sup>n</sup>.
- Step 2: find generators of the "infinite Steinberg module" and read off the relations.

**Theorem (cobracket; Theorem C.b).** For distinct x<sub>0</sub>, ..., x<sub>n</sub>, the cobracket of Cor(x<sub>0</sub>, ..., x<sub>n</sub>) is the sum over j and over 1 ≤ i ≤ n − 1 of Cor(x<sub>j</sub>, ..., x<sub>j+i</sub>) ∧ Cor(x<sub>j</sub>, x<sub>j+i+1</sub>, ..., x<sub>j+n</sub>). You cut the cycle of points into two arcs that share one point.

**Theorem (low weights; Theorem C.c).** G<sub>1</sub>(F) ≅ F<sup>×</sup> ⊗ ℚ, G<sub>2</sub>(F) ≅ B<sub>2</sub>(F)<sub>ℚ</sub> (the pre-Bloch group of Bloch and Suslin), and G<sub>3</sub>(F) ≅ B<sub>3</sub>(F)<sub>ℚ</sub> (Goncharov's group).
- The symbol {a}<sub>2</sub> goes to −Cor(1, 0, a), and {a}<sub>3</sub> goes to −Cor(1, 0, 0, a).

**Theorem (weight 3 K-theory; Theorem B).** For any field F: K<sub>4</sub><sup>(3)</sup>(F)<sub>ℚ</sub> ≅ H<sup>2</sup>(G(F))<sub>3</sub>. Also there is an exact sequence K<sub>4</sub><sup>(2)</sup>(F)<sub>ℚ</sub> ⊗ F<sup>×</sup><sub>ℚ</sub> → K<sub>5</sub><sup>(3)</sup>(F)<sub>ℚ</sub> → H<sup>1</sup>(G(F))<sub>3</sub> → 0.
- Step 1: use the presentation to identify the weight 3 complex with Goncharov's complex B<sub>3</sub> → B<sub>2</sub> ⊗ F<sup>×</sup> → Λ<sup>3</sup>F<sup>×</sup>.
- Step 2: feed it into a rank spectral sequence related to that of Rognes.

The general statement stays open. **Conjecture (Conjecture A.b).** For any field and 1 ≤ i ≤ n, K<sub>2n−i</sub><sup>(n)</sup>(F)<sub>ℚ</sub> ≅ H<sup>i</sup>(G(F))<sub>n</sub>.

## Note, then ignore

- Everything is rational. The paper tensors with ℚ throughout, so torsion in K-groups is invisible. Safe to skip on a first reading.
- No Koszul signs. The authors remark that the gradings make the cobracket a plain Lie cobracket with no extra signs. Safe to skip.
- The set T(n) and the signs in the decomposition relations. The authors say it is enough to know the shape of the relation, not the details. Safe to skip.
- Mixed Tate motives. Conjecture A.a says comodules over G(F) should be the category of mixed Tate motives over F. For number fields the authors announce a proof in a sequel, which is not in this paper. Safe to skip.
- Three appendices on categorical and operadic foundations. They support the definitions and do not change the statements. Safe to skip.

## One next step

Open the paper at page 5 and look only at Figure 1, the table of E<sub>∞</sub>-homology groups, and find G<sub>1</sub>, G<sub>2</sub>, G<sub>3</sub> on the dashed line.
