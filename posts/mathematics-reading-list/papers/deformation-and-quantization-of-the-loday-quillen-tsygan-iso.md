source: https://arxiv.org/pdf/2505.09378
slogan: For a Koszul Calabi-Yau algebra, Poincaré duality deforms and then quantizes the link between matrix Lie algebra homology and cyclic homology.
basis: the introduction and the main theorem statements

## Before you start

The title alone stacks four names and three theories. The likely feeling is shame at the background: cyclic homology, Koszul duality, Calabi-Yau algebras, Hopf algebras, all assumed. That feeling is allowed, and it says nothing about you. The paper recalls each notion before using it, and the core is one classical isomorphism plus one extra structure. If you care how K-theory sees duality, this gives a concrete handle. Read for the picture of cutting and gluing cyclic words. The sign rules can stay unread.

## The story

Loday, Quillen and Tsygan proved that for an associative algebra A over a field of characteristic zero, the homology of the Lie algebra gl(A) of infinite matrices is the graded symmetric algebra on the cyclic homology of A, shifted by one. Both sides are Hopf algebras that are commutative and cocommutative. The authors ask whether this can be deformed, and then quantized, with the isomorphism surviving. The block: for a general A there is nothing to deform with. The idea: if A is Koszul and Calabi-Yau, its Koszul dual carries a non-degenerate pairing. That pairing lets you glue two cyclic words into one and cut one into two. This gives a Lie bracket and a cobracket on cyclic homology. The bracket deforms the product, the cobracket the coproduct, and an explicit Hopf algebra quantizes both.

## Main definitions

**Calabi-Yau algebra (Definition 2.7).** An associative k-algebra A is n-Calabi-Yau if it is homologically smooth and RHom<sub>A⊗A<sup>op</sup></sub>(A, A ⊗ A) ≅ A[n] in the derived category of A-bimodules.
- Consequence: a class in HH<sub>n</sub>(A) gives a Poincaré duality between Hochschild cohomology and Hochschild homology.
- If A is also Koszul, its Koszul dual algebra A<sup>!</sup> is a graded Frobenius algebra of degree n (Proposition 2.8), and the dual coalgebra A<sup>¡</sup> is co-Frobenius.

**Lie bialgebra.** A graded module L with a Lie bracket and a Lie cobracket ν: L → L ⊗ L, tied by a cocycle condition. It is involutive if bracket ∘ ν = 0.

**Co-Poisson bialgebra (Definition 5.2, after Turaev).** A bialgebra with coproduct Δ and a Lie cobracket ν, compatible with Δ, such that ν(ab) = ν(a)Δ(b) + Δ(a)ν(b).

**Quantization of a Lie bialgebra g (Definition 6.1).** A Hopf algebra 𝒜, flat over k[h, ℏ], that reduces to the symmetric algebra on g modulo h and ℏ. To first order, its commutator divided by h is the bracket, and Δ − Δ<sup>op</sup> divided by ℏ is the cobracket.

## Main results

Throughout, k is a field of characteristic zero.

**Theorem (Loday, Quillen, Tsygan; Theorem 3.3).** For an associative k-algebra A there is an isomorphism of Hopf algebras H<sub>•</sub>(gl(A)) ≅ Λ<sup>•</sup>(HC<sub>•</sub>(A)[1]).
- Step 1: a map from the Chevalley-Eilenberg complex to cyclic chains is built from antisymmetrisation followed by a trace.
- Step 2: it is an isomorphism on primitive elements.

**Theorem (Lie bialgebra on cyclic chains; Proposition 5.1).** Let A<sup>¡</sup> be a co-Frobenius coalgebra with pairing of degree n. Then the shifted cyclic complex of A<sup>¡</sup> is an involutive differential graded Lie bialgebra of degree (2 − n, 2 − n).
- Bracket: pair one letter of each cyclic word and join the remaining letters into one word.
- Cobracket: pair two letters of one word and split the rest into two words.

**Theorem (deformation; Theorem 5.5).** Let A be a Koszul Calabi-Yau algebra. Then H<sub>•</sub>(gl(A)) deforms to a co-Poisson bialgebra over k[h, ℏ]. The Loday-Quillen-Tsygan maps and the Koszul duality maps, for both A and A<sup>¡</sup>, form a commutative square of isomorphisms of co-Poisson bialgebras.
- Step 1: Koszul duality identifies the cyclic homology of A with that of A<sup>¡</sup> (Proposition 2.5, Theorem 3.12).
- Step 2: Turaev's construction V<sub>hℏ</sub> turns the Lie bialgebra into a co-Poisson bialgebra (Theorem 5.3).

**Theorem (quantization; Theorems 6.2 and 6.13).** For A Koszul Calabi-Yau of dimension n, there is a differential graded Hopf algebra that quantizes the Lie bialgebra above. The square of Theorem 5.5 lifts to a commutative square of isomorphisms of Hopf algebras.
- The construction is combinatorial. It adds a "height" to each letter, following Schedler's quantization of the necklace Lie bialgebra.

## Note, then ignore

- Koszul signs. Every formula carries signs from the Koszul rule, and the authors often write ± themselves. Safe to skip on a first reading.
- Algebra versus coalgebra. The bracket lives naturally on the coalgebra A<sup>¡</sup>. Koszul duality moves it to A. This is why the paper proves a coalgebra version of the classical theorem (Section 3.2). Safe to skip.
- Two parameters. Turaev used one parameter h. The authors add ℏ because the quantization has higher-order terms in both directions. Safe to skip.
- Wider setting. Remark 1.3 says the results extend to cyclic A<sub>∞</sub>-algebras and proper Calabi-Yau A<sub>∞</sub>-categories, which explains "categories" in the title. Safe to skip.
- K-theory reading. By Hennion, the classical map is the tangent map from BGL to K-theory. The paper reads its result as a quantization of that map and does not need it for the proofs. Safe to skip.

## One next step

Open the paper and read only Question 1.1 and Theorem 1.2 on pages 2 and 3.
