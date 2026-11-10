source: https://arxiv.org/pdf/2411.05995
slogan: Remove one point from a large profinite set and cohomology appears, enough to build a faithfully flat ring map that fails descent for categories.
basis: the full text

## Before you start

The paper is six pages, but its abstract speaks of ℵ<sub>ω</sub>, descendability and condensed mathematics in one breath. The likely feeling is intimidation: the sense that you need three research areas before line one. That feeling is fair, and you can let it sit. The core of the paper needs only functions on products of infinite sets. If you want to see how plain set theory can break a clean statement in algebra, that core shows it in two pages. Read for the trick first. Whether you reach the applications matters less.

## The story

A profinite set has no higher sheaf cohomology. Remove a single point and this can fail: Pierce showed that {0, 1}<sup>ℵ<sub>n</sub></sup> minus a point has cohomological dimension n. Aoki wanted more: explicit classes, and control of their cup products. He uses a concrete space. Take one-point compactifications of discrete sets of sizes ℵ<sub>α<sub>0</sub></sub>, …, ℵ<sub>α<sub>n</sub></sub>, multiply them, and remove the corner point at infinity. A top-degree class is then just a function on a product of sets, and it is zero exactly when the function is a sum of pieces that are "almost constant" in one coordinate each. A counting argument shows some functions are not such sums. Products of degree-one classes then survive, and Stone duality turns them into a faithfully flat map of Boolean rings that is not descendable.

## Main definitions

**Locally profinite set.** A topological space obtained by removing one point from a profinite set, that is, from a totally disconnected compact Hausdorff space.

**The space X(α)<sup>−</sup>.** For a sequence of ordinals α = (α<sub>0</sub>, …, α<sub>n</sub>), X(α) is the product of the one-point compactifications of the discrete sets ℵ<sub>α<sub>i</sub></sub>. X(α)<sup>−</sup> is X(α) with the point at infinity removed (Definition 2.1).
- Cohomology (Proposition 2.5): an n-cocycle is a function f on ℵ<sub>α<sub>0</sub></sub> × … × ℵ<sub>α<sub>n</sub></sub> with values in 𝔽<sub>2</sub>. It is a coboundary exactly when f = f<sub>0</sub> + … + f<sub>n</sub> with each f<sub>i</sub> constant in the i-th coordinate outside a finite set.
- The class ε (Definition 2.7): split each ℵ<sub>α<sub>i</sub></sub> into halves E<sub>i</sub> and F<sub>i</sub> of equal size, and take the indicator function of E<sub>0</sub> × … × E<sub>n</sub>.

**Descendable map.** A map of E<sub>∞</sub>-rings f : A → B is descendable of index ≤ n if the map fib(f)<sup>⊗n</sup> → A is null, with the tensor power taken over A. It is descendable if this holds for some n (Definition 3.8). Descendability gives descent for linear categories, one level above descent for modules.

## Main results

**Theorem (cohomology in degree n; Theorems A and 2.8).** For n ≥ 0 there is a locally profinite set U of cardinality ℵ<sub>n</sub> with H<sup>n</sup>(U; 𝔽<sub>2</sub>) ≠ 0. Precisely, the class ε on X(α)<sup>−</sup> is nonzero when α<sub>0</sub> &lt; α<sub>1</sub> &lt; … &lt; α<sub>n</sub>.
- Step 1 (Lemma 2.10): if f on P × Q is almost constant in Q, then f is truly constant in Q after removing at most |P| points of Q.
- Step 2: induct on n. Since the last set is larger than the product of the others, pick s in E<sub>n</sub> and t in F<sub>n</sub> that survive, and subtract the two slices to get a contradiction one dimension down.

**Theorem (nonzero products; Theorems C and 2.12).** For n ≥ 0 there is a locally profinite set U of cardinality ℵ<sub>2n+1</sub> with classes η<sub>0</sub>, …, η<sub>n</sub> in H<sup>1</sup>(U; 𝔽<sub>2</sub>) whose product in H<sup>n+1</sup> is nonzero. Take U = X(0, 1)<sup>−</sup> × … × X(2n, 2n+1)<sup>−</sup>.
- Step: Proposition 2.11 identifies H<sup>n+1</sup>(U) with H<sup>2n+1</sup>(X(0, …, 2n+1)<sup>−</sup>), and the product goes to the class ε of Theorem 2.8.

**Theorem (Boolean rings; Theorem B).** For n ≥ 0 there is a Boolean ring of cardinality ℵ<sub>n</sub> with self-injective dimension n + 1. There is a Boolean ring of cardinality ℵ<sub>ω</sub> with infinite self-injective dimension.

**Theorem (failure of descent; Theorems D and E).** There is a faithfully flat map B → B′ of Boolean rings of cardinality ℵ<sub>ω</sub> that is not descendable. As a result, the functor that sends a profinite set X of weight below ℵ<sub>ω+1</sub> to module categories over sheaves on X with 𝔽<sub>2</sub>-coefficients does not satisfy Čech descent.
- Step 1: glue the examples of Theorem C for all n to get infinitely many degree-one classes with all finite products nonzero.
- Step 2: feed them to a deformed symmetric algebra construction (Proposition 3.13, attributed to de Jong) and pass to the Boolean quotient.

## Note, then ignore

- Optimality. Every faithfully flat map out of an E<sub>∞</sub>-ring A with |π<sub>\*</sub>A| &lt; ℵ<sub>ω</sub> is descendable (Mathew), so ℵ<sub>ω</sub> is the smallest possible size. Safe to skip on a first reading.
- Coefficients 𝔽<sub>2</sub>. Remark 1.3 says any nontrivial ring works in Theorems A and C. The paper keeps 𝔽<sub>2</sub> for simplicity. Safe to skip.
- Weight versus cardinality. For these spaces both equal the largest ℵ<sub>α<sub>i</sub></sub> (Remark 2.2). Safe to skip.
- Zelich's example. A different, more algebro-geometric counterexample appeared independently (Remark 1.1). Safe to skip.
- Light condensed sets. Theorem E does not single out ℵ<sub>1</sub>: descent still holds up to ℵ<sub>ω</sub> (Remark 3.19). Safe to skip.

## One next step

Open the paper at page 3 and read Lemma 2.10 with its four-line proof. It is the whole set-theoretic input.
