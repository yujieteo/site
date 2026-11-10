source: https://arxiv.org/pdf/1510.06366
slogan: Massey products lift from cohomology classes to bundles with connection, once you compute them inside stacks of higher bundles.
basis: the introduction and the main theorem statements

## Before you start

Three vocabularies meet here: Massey products, Deligne cohomology and simplicial sheaves, with string theory examples at the end. The likely feeling is being outnumbered, as if each paragraph needs a different textbook. That feeling is reasonable and it can stay. Underneath there is one small formula, the triple product, which is repeated in richer settings. If you like secondary invariants such as linking numbers, this shows what they become when forms and integral classes are kept together. Read for the pattern and take pleasure in it. Coverage is optional.

## The story

When two cup products ab and bc both vanish, the reasons they vanish combine into a new class ⟨a, b, c⟩, the Massey triple product. It detects structure that cup products miss. Differential cohomology refines integral cohomology by remembering differential forms: a class is a higher circle bundle with connection. People had built Massey products there by hand in Deligne cohomology, with Čech cocycles and many signs. Grady and Sati move the construction into smooth stacks. The stack of n-bundles with connection plays the role of an Eilenberg–MacLane space. A cup product that vanishes is a chosen homotopy, a trivialisation, in a mapping stack. The Massey product is then the curvature of a "formal connection", an upper triangular matrix of bundles and trivialisations. The old constructions come out as special cases, and the rules are easier to see.

## Main definitions

**Triple Massey product (classical).** Let a, b, c be closed elements of a differential graded algebra with [a][b] = 0 and [b][c] = 0. Choose f and g whose differentials are ±ab and ±bc. Then ±ag ± fc is closed, and its class is ⟨[a], [b], [c]⟩.
- Indeterminacy: the class is defined only modulo [a]·H + H·[c], because f and g can change by closed elements.

**Differential cohomology and its stack.** For a manifold X, the differential cohomology group Ĥ<sup>n</sup>(X; ℤ) is the degree n hypercohomology of the Deligne complex ℤ → Ω<sup>0</sup> → Ω<sup>1</sup> → … → Ω<sup>n−1</sup>. The smooth stack **B**<sup>n</sup>U(1)<sub>conn</sub> classifies n-bundles with connection, and Ĥ<sup>n+1</sup>(X; ℤ) ≅ π<sub>0</sub> Map(X, **B**<sup>n</sup>U(1)<sub>conn</sub>).
- Two shadows: the curvature map R to closed n-forms and the map I to integral cohomology.
- Flat classes: those with R = 0, which come from H<sup>n−1</sup>(X; U(1)).

**Formal connection.** An upper triangular matrix A with zero diagonal and entries in a (sheaf of) differential graded algebras, such that μ(A) = dA − A·A vanishes modulo ker A. The matrix μ(A) is its curvature.

**Stacky Massey product (Definition 11).** Take a family of abelian stacks R<sub>ij</sub> with associative products R<sub>ij</sub> ⊗ R<sub>jk</sub> → R<sub>ik</sub>, for example the mapping stacks from X into the **B**<sup>n</sup>U(1)<sub>conn</sub> with the Deligne–Beilinson cup product. For a formal connection A, the entries of the class [μ(A)] are the stacky Massey products.

## Main results

**Theorem (agreement with Deligne cohomology; Theorem 12).** Let â<sub>1</sub>, …, â<sub>l</sub> be Deligne cocycles whose l-fold Massey product is defined, and let G<sub>1</sub>, …, G<sub>l</sub> be the bundles with connection that represent them. Then there is a natural bijection ⟨G<sub>1</sub>, …, G<sub>l</sub>⟩ ≃ ⟨â<sub>1</sub>, …, â<sub>l</sub>⟩.
- Step 1: the stack **B**<sup>n</sup>U(1)<sub>conn</sub> is the Dold–Kan image of the Deligne complex.
- Step 2: the normalised chains functor carries the stacky cup product to the cocycle cup product, so the two matrix algebras match.

**Proposition (basic rules; Proposition 13).** Stacky Massey products have the expected degree, are natural under pullback along smooth maps, and satisfy m⟨G<sub>1</sub>, …, G<sub>n</sub>⟩ ⊂ ⟨G<sub>1</sub>, …, mG<sub>i</sub>, …, G<sub>n</sub>⟩ for integers m. A triple product is defined exactly when both cup products are trivial. For four or more entries, vanishing of the lower products is necessary but not sufficient.

**Proposition (forgetting connections; Proposition 14).** For bundles with defined Massey product, the forgetful map I gives singular cocycles with defined Massey product, and I⟨G<sub>1</sub>, G<sub>2</sub>, G<sub>3</sub>⟩ ⊂ ⟨I(G<sub>1</sub>), I(G<sub>2</sub>), I(G<sub>3</sub>)⟩.
- The inclusion can be strict. The differential product is not simply a lift of the topological one.

**Proposition (triple products are flat; Proposition 9).** The class of the triple product G<sub>1</sub> ∪ φ<sub>2,3</sub> − φ<sub>1,2</sub> ∪ G<sub>3</sub> lies in cohomology with U(1) coefficients, H<sup>n<sub>1</sub>+n<sub>2</sub>+n<sub>3</sub>+1</sup>(X; U(1)), in the paper's indexing of the degrees n<sub>i</sub>. I did not check the degree conventions beyond this statement.

## Note, then ignore

- Signs. Every formula carries signs that depend on degrees, and conventions differ between sources. Trust the shape of the formula and skip the signs at first.
- Chain grading. The authors grade the Deligne complex as a chain complex, with ℤ in top degree, which reverses the usual de Rham grading. It is there for the Dold–Kan correspondence. Safe to skip.
- Cofibrant replacement. Mapping spaces out of X are computed from the Čech nerve of a good open cover, so that the answer is a Kan complex. This is model-category housekeeping. Safe to skip.
- "Stack" means simplicial sheaf. The stacks here are presheaves of simplicial sets on Cartesian spaces that satisfy descent, not algebraic stacks. Note it once.
- Section 4. The applications to String structures, anomaly cancellation and Ramond–Ramond fields are illustrations, and some are proposals. The definitions do not depend on them.

## One next step

Open the paper at Section 2.1 and read only the 4 × 4 matrix A and formula (2.5) for the triple product. That is the whole mechanism in its classical form.
