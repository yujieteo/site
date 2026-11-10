source: https://arxiv.org/pdf/2403.08472
slogan: Cut a scheme into strata by dimension, glue a sheaf back from the strata, and the adelic resolution appears without being put in by hand.
basis: the introduction and the main theorem statements

## Before you start

The title stacks two reputations: higher adeles, with their products over flags, and solid modules, with their ∞-categories. The likely feeling is shame at knowing neither well. That makes sense, and you can let it sit there. The paper answers something you may want to see: why ℤ is glued from ℚ and the ℤ<sub>p</sub>, and what the same gluing looks like on a surface. The first four pages tell that story. Read them for the picture. Finishing is optional.

## The story

The integers sit in a pullback square: ℤ is recovered from ℚ and the product of all ℤ<sub>p</sub>, glued over their tensor product. Parshin and Beilinson built a higher version that resolves a quasi-coherent sheaf by products, over flags of integral closed subschemes, of iterated completed localisations. Older constructions write these products down first and then prove exactness. Brav and Konovalov reverse this. On a topological space, a closed set and its complement give a gluing square for free, because all six functors exist. Quasi-coherent sheaves lack two. Solid ones have all six, once "closed subscheme" is replaced by its tubular neighbourhood. Filter the scheme by tubes around subschemes of dimension at most k. Gluing along this filtration is exact by construction, and the pieces turn out to be the adelic products.

## Main definitions

**Solid modules.** For a ring A of finite type over ℤ, Mod<sub>A■</sub> is the Clausen–Scholze category of solid A-modules. It contains the usual derived category of A-modules by a fully faithful, colimit-preserving, symmetric monoidal embedding, and it is generated under colimits by products ∏<sub>I</sub> A.
- Caution: the embedding does not preserve infinite products. Products taken inside Mod<sub>A■</sub> are "complete".

**Tubular neighbourhood.** For a closed subset Z = Spec(A/I) of X = Spec(A), the tube is the analytic spectrum of the I-completion of A, with the completion computed as a limit of solid modules. The solid sheaves killed by restriction to U = X \ Z are the sheaves on this tube, not on Z itself.
- Consequence: solid sheaves on X form a recollement from the tube and U, with all functors preserving colimits.

**Skeletal filtration.** For X of dimension d, a chain Z<sub>0</sub> ⊂ Z<sub>1</sub> ⊂ … ⊂ Z<sub>d−1</sub> ⊂ X<sub>■</sub>, where Z<sub>k</sub> is the spectrum of the limit of the completions of A at all ideals of dimension at most k. Informally, Z<sub>k</sub> is the union of all tubes around closed subschemes of dimension at most k.

**Fracture cube.** Let L<sub>k</sub> be the functor "restrict to the k-th stratum Z<sub>k</sub> \ Z<sub>k−1</sub>, then push back". For each chain k<sub>0</sub> &lt; … &lt; k<sub>m</sub> form the composite L<sub>k<sub>0</sub></sub> ⋯ L<sub>k<sub>m</sub></sub>. The units id → L<sub>k</sub> arrange these composites into a cube, and every solid module M is the homotopy limit of the cube with the vertex M removed.

## Main results

**Theorem (vertices of the cube; Theorem 0.0.1, a special case of Theorem 2.3.1).** Let A be a commutative ring of finite type over ℤ. Then L<sub>k<sub>0</sub></sub> ⋯ L<sub>k<sub>m</sub></sub> A is an iterated product over nested chains of primes p<sub>0</sub> ⊃ p<sub>1</sub> ⊃ … ⊃ p<sub>m</sub> with p<sub>i</sub> of dimension k<sub>i</sub>. Start with the completed local rings of A at the p<sub>0</sub>, take the product, localise and complete at p<sub>1</sub>, take the product, and so on out to p<sub>m</sub>. The cube for a general solid module commutes with colimits and with right-bounded products.
- Step 1: the skeletal filtration gives the cube and its exactness formally.
- Step 2: compute each vertex for A, then pass to general modules by colimits.

**Theorem (the Hasse square, categorified; Theorem 0.0.2).** The category of solid abelian groups is the pullback of the categories of modules, inside solid abelian groups, over ℚ and over ∏ ℤ<sub>p</sub>, glued over modules over ℚ ⊗<sub>ℤ■</sub> ∏ ℤ<sub>p</sub>.
- Step 1: the square of rings is a pullback by the theorem above.
- Step 2: the three algebras are idempotent in solid abelian groups.

**Theorem (solid adelic descent; Theorem 0.0.3, proved as Theorem 4.2.4).** For A of finite type over ℤ and of dimension d, the functor from Mod<sub>A■</sub> to the limit, over chains k<sub>0</sub> &lt; … &lt; k<sub>m</sub>, of modules over L<sub>k<sub>0</sub></sub>A ⊗<sub>A■</sub> ⋯ ⊗<sub>A■</sub> L<sub>k<sub>m</sub></sub>A is an equivalence of symmetric monoidal presentable stable categories.
- Step 1: full faithfulness is formal for any such filtration.
- Step 2: essential surjectivity uses that the tensor product of the L<sub>k<sub>i</sub></sub>A equals the iterated localisation (Proposition 4.2.1) and is idempotent (Corollary 4.2.2).

## Note, then ignore

- Everything is derived. "Category" means (∞, 1)-category and "completion" means derived completion (0.1.1). It keeps the squares exact. Safe to skip on a first reading.
- Finite type over ℤ. The authors chose this base for convenience and say the first three sections should also work over a field with ultrasolid modules (0.1.4). Safe to skip.
- Two kinds of completion. The paper completes at specialisation-closed subsets and at generalisation-closed subsets and uses similar notation for both (0.1.6, 0.1.7). Safe to skip.
- Relation to the classical formula. The products in the theorem are compared with Beilinson's original adeles in Section 2.4. They are not word for word the same expression. Safe to skip.
- Version. I read version 3 (July 2025). Its acknowledgements say an earlier proof of Proposition 1.1.2 was wrong and has been replaced. Safe to skip.

## One next step

Open the paper at the Introduction and read down to the first recollement diagram on page 1, then look at the d = 2 cube on page 3.
