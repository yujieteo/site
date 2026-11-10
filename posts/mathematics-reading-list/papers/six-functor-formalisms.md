source: https://arxiv.org/pdf/2510.26269
slogan: A six-functor formalism is one functor out of a category of correspondences, and Poincaré duality reduces to finding two maps and checking two diagrams.
basis: the introduction and the main theorem statements

## Before you start

The title sounds like bookkeeping, and the notes use ∞-categories from Lecture II on. The likely feeling is a fear of being too slow with that language. It is fine to feel slow here. The author himself calls the formalisation a highly nontrivial task. If you have ever wanted Poincaré duality to have a short reason, these lectures give one. Lecture I needs only sheaves on topological spaces, and it is a pleasure to read by itself.

## The story

Cohomology theories of many kinds share the same package: pullback, pushforward, tensor, internal Hom, and the two "shriek" functors, tied together by base change and the projection formula. For decades the definition was "you know it when you see it", because nobody could write out all the compatibilities. The unblocking idea, due to Lurie, Gaitsgory–Rozenblyum, Liu–Zheng and Mann, is to build a category whose morphisms are correspondences X ← W → Y. One lax symmetric monoidal functor out of it encodes tensor, pullback, proper pushforward and every compatibility at once. Inside this framework a map is "cohomologically smooth" when f<sup>!</sup> is a twist of f<sup>\*</sup>. Scholze shows that this property needs only a small amount of data. Duality for manifolds then reduces to the real line.

## Main definitions

**Category of correspondences.** Fix a category C with finite limits and a class E of morphisms that contains isomorphisms and is stable under pullback, composition and diagonals. Corr(C, E) has the objects of C. A morphism from X to Y is a diagram X ← W → Y whose right-hand map lies in E. Composition is by fibre product, and the monoidal structure is the product in C (Definition 2.3).

**3-functor and 6-functor formalism.** A 3-functor formalism is a lax symmetric monoidal functor D from Corr(C, E) to ∞-categories (Definition 2.4). It is a 6-functor formalism if − ⊗ A, f<sup>\*</sup> and f<sub>!</sub> all have right adjoints (Definition 2.5).
- The correspondence X ← W → Y, with maps f to X and g to Y, goes to g<sub>!</sub>f<sup>\*</sup>.
- Compatibility with composition is exactly the base change formula.

**Cohomologically smooth map.** A map f : X → Y in E such that the natural map f<sup>!</sup>(1<sub>Y</sub>) ⊗ f<sup>\*</sup>(−) → f<sup>!</sup>(−) is an isomorphism, the object f<sup>!</sup>(1<sub>Y</sub>) is ⊗-invertible, and both properties hold after every base change, compatibly with it (Definition 5.1).

## Main results

**Theorem (construction; Theorem 4.6, credited to Mann and Liu–Zheng).** Suppose every map in E factors through two classes: I ("open immersions") and P ("proper maps"), under the hypotheses listed in Lecture IV, which I did not check line by line. Then a functor D<sub>0</sub> that has only ⊗ and f<sup>\*</sup> extends canonically to a 3-functor formalism on Corr(C, E).
- For f in I, the functor f<sub>!</sub> is the left adjoint of f<sup>\*</sup>.
- For f in P, the functor f<sub>!</sub> is the right adjoint of f<sup>\*</sup>.

**Theorem (criterion for smoothness; Theorem 5.5).** Assume all morphisms of C lie in E, and let f : X → Y be a map to the final object, with diagonal Δ : X → X ×<sub>Y</sub> X and projections p<sub>1</sub>, p<sub>2</sub>. Then f is cohomologically smooth if and only if there are a ⊗-invertible object L in D(X) and maps α : Δ<sub>!</sub>1<sub>X</sub> → p<sub>2</sub><sup>\*</sup>L and β : f<sub>!</sub>L → 1<sub>Y</sub> such that two explicit composites, 1<sub>X</sub> → 1<sub>X</sub> and L → L, are the identity.
- Step 1: an object of D(X<sub>1</sub> × X<sub>2</sub>) acts as a kernel for a functor D(X<sub>1</sub>) → D(X<sub>2</sub>), as in Fourier–Mukai theory.
- Step 2: α and β are then the unit and counit of an adjunction between the kernels 1<sub>X</sub> and L, in a 2-category of kernels.

**Proposition (the real line; Proposition 5.10).** For sheaves on locally compact Hausdorff spaces, the map ℝ → point is cohomologically smooth, with L = ℤ[1].
- Consequence: by composition, base change and open immersions, every manifold bundle is cohomologically smooth. This gives Verdier duality in the form f<sup>!</sup> ≅ f<sup>\*</sup> ⊗ ω.

**Theorem (passage to stacks; Theorem 5.19).** A 6-functor formalism on (C, E) extends to sheaves of anima on C for a suitable topology. There is a minimal class of morphisms, containing the representable ones, on which the shriek functors exist and which is stable under disjoint unions, local on the target, local on the source, and tame.

## Note, then ignore

- Simplicial sets. Lecture II defines ∞-categories as simplicial sets with a lifting property, to make the text self-contained. You can read "category" and lose little. Safe to skip on a first reading.
- "Lax" symmetric monoidal. The laxness is what produces the exterior tensor product D(X) × D(Y) → D(X × Y), and from it ⊗ and the projection formula. Safe to skip.
- Stability under diagonals. The class E must contain diagonals of its maps. A footnote says earlier versions did not always ask this. Safe to skip.
- Suave and prim. Lecture VI renames the object-level versions of "smooth" and "proper" following Heyer–Mann. The 2025 revision uses the new names. Safe to skip.
- Smooth versus cohomologically smooth. The second is weaker. A universal homeomorphism of schemes is cohomologically smooth for étale sheaves. Safe to skip.

## One next step

Open the PDF at Lecture I and read from Theorem 1.4 (Poincaré duality) to Theorem 1.6, about one page.
