source: https://arxiv.org/pdf/2603.03012
slogan: Solid modules make every null sequence summable, so non-archimedean analysis becomes algebra and Serre duality drops out of a six-functor formalism.
basis: the introduction and the main theorem statements

## Before you start

These notes run to 130 pages and lean on ∞-categories, so the likely feeling is overwhelm, with some worry that you lack the background. That feeling is allowed. It is a fair reaction to the size of the thing. If you want to see how one framework holds schemes and rigid spaces at once, this is a guided route in. Read for the pleasure of the first three sections. Reaching Section 7 can wait.

## The story

Algebraic geometry is built from rings and their modules. Analytic geometry is built from topological rings such as Banach algebras, and topology mixes badly with algebra: complete modules form no good abelian category. Clausen and Scholze fix this in two moves. First, replace topological spaces by light condensed sets, which are sheaves on metrisable profinite sets. Second, cut out the "complete" modules by a condition instead of a topology: a module is solid when every null sequence in it can be summed. The interval [0, 1] is a quotient of the Cantor set by binary expansion, which is why profinite test objects suffice. Rings with a chosen category of complete modules glue into analytic stacks. The notes end with Serre duality for schemes and rigid varieties together.

## Main definitions

**Light condensed set.** A sheaf of sets on the category of light (that is, metrisable) profinite sets, where covers are finite families of jointly surjective maps. A reasonable topological space X gives the sheaf S ↦ Map(S, X) of continuous maps.

**Solid abelian group.** Let P = ℤ[ℕ ∪ {∞}]/(∞) be the free condensed abelian group on a null sequence. A light condensed abelian group A is solid if the map 1 − Shift induces an isomorphism on the internal Hom from P to A (Definition 3.2.1).
- Meaning: each null sequence in A has a unique sum, in a strong sense.
- Examples: discrete groups, p-adically complete modules, Banach and Fréchet spaces over ℚ<sub>p</sub>.

**Analytic ring.** A pair of a light condensed (animated) ring A<sup>▷</sup> and a full subcategory D(A) of the derived category of condensed A<sup>▷</sup>-modules, called the complete modules. It must be closed under limits and colimits, have a completion functor left adjoint to the inclusion that preserves connective objects, and contain A<sup>▷</sup> itself (Definition 1.2.1).

**Solid smooth map.** A map A → B of solid Huber rings, of solid finite presentation, whose cotangent complex L<sub>B/A</sub> is a finite projective B-module (Definition 7.6.1). It is solid étale if L<sub>B/A</sub> = 0. "Locally solid smooth" means this holds on rational covers of A and B.

## Main results

**Theorem (solid abelian groups; Theorem 3.2.4).** The category Solid is a Grothendieck abelian category, closed under limits, colimits and extensions inside condensed abelian groups. It contains ℤ. The inclusion has a left adjoint, solidification, and there is a unique symmetric monoidal structure ⊗<sup>□</sup> making solidification symmetric monoidal. The solidification of ℝ is 0.
- Step 1: the object P is internally projective, so the defining condition behaves well in the derived category.
- Step 2: the derived category of Solid embeds fully faithfully in the derived category of condensed abelian groups, with image the solid complexes.

**Theorem (structure of Solid; Theorem 3.3.1 and what follows it).** For a light profinite set S = lim S<sub>n</sub>, the solidification of ℤ[S] is lim ℤ[S<sub>n</sub>]. The countable product ∏<sub>ℕ</sub> ℤ is a compact projective generator of Solid. For countable sets I and J, the solid tensor product of ∏<sub>I</sub> ℤ and ∏<sub>J</sub> ℤ is ∏<sub>I×J</sub> ℤ.

**Theorem (Serre duality; Theorems 7.7.1 and 7.7.21).** Let f : A → B be a locally solid smooth morphism of solid Huber rings. Then f is cohomologically smooth, and the dualising sheaf f<sup>!</sup>1 is, locally in the analytic topology, a line bundle placed in homological degree dim f. In dimension n, deformation to the normal cone gives f<sup>!</sup>1 ≅ det(L<sub>B/A</sub>)[n], natural up to a sign that depends only on n.
- Step 1: reduce locally to standard charts, then to the affine line ℤ<sub>□</sub> → ℤ[T]<sub>□</sub> and to the closed point T = 0.
- Step 2: use the diagonal and deformation to the normal cone to reduce the dualising sheaf to the case of vector bundles.

The notes then deduce the classical statement for schemes and Serre duality for rigid varieties.

## Note, then ignore

- Light versus original condensed sets. The notes use only metrisable profinite sets, which avoids set-theoretic technicalities and makes P internally projective. Safe to skip on a first reading.
- Higher categories. Analytic rings use animated rings and stable ∞-categories, but Theorem 4.4.1 says D(A) is determined by its abelian heart. The author suggests reading D(A) as a classical derived category at first. Safe to skip.
- Two admitted gaps. Footnotes say the author knows no proof that analytic rings form a presentable ∞-category, and has not fully followed the computation of the gaseous ring. Neither is used in the solid story. Safe to skip.
- "Locally" in solid smooth. Solid finite presentation is not known to descend, so smoothness is imposed on rational covers. For Tate algebras over a field the two notions agree. Safe to skip.
- Attribution. The theory and the duality proof belong to Clausen and Scholze. Only the treatment of smooth, étale and finitely presented maps in Section 7 is new. Safe to skip.

## One next step

Open the PDF at Section 1.4 and read only the paragraph headed "Solid abelian groups", which lists what the category does in ten lines.
