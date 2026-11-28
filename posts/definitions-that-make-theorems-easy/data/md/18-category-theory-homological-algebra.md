### Naturality explains why V ≅ V\*\* is canonical but V ≅ V\* is not

**Remember:** Natural means: the maps commute with every change of object.

*Makes the theorem clean to state or prove.* MSC 18A23 (Natural morphisms, dinatural morphisms), 15A03. arXiv math.CT. Level 2: later undergraduate.

**Definition.** A natural transformation between functors F, G from C to D picks a map αₓ from F(x) to G(x) for each object x that commutes with every arrow: G(f)αₓ = αᵧF(f) for each f from x to y. It is a natural isomorphism when every αₓ is invertible.

**Problem.** On finite-dimensional vector spaces, the maps V → V\*\*, v ↦ (ω ↦ ω(v)), form a natural isomorphism. Over ℝ or ℂ, no family of isomorphisms V ≅ V\* is natural with respect to linear isomorphisms once dim V ≥ 2.

**How the definition helps.** Evaluation commutes with f\*\* for every linear f and is invertible in finite dimension, so V → V\*\* is a natural isomorphism (our own). On isomorphisms the dual acts by inverse transpose, so a natural V ≅ V\* would be a nondegenerate bilinear form kept by every linear isomorphism (our own). Scaling by two multiplies such a form by four, a contradiction (our own).

**nLab:** [natural transformation](https://ncatlab.org/nlab/show/natural+transformation), [unnatural isomorphism](https://ncatlab.org/nlab/show/unnatural+isomorphism). It says: “(right on the first pages) for introducing the notion of natural transformation (and with it category theory) in the first place.”

**Sources:**

- [Samuel Eilenberg, Saunders Mac Lane, General theory of natural equivalences, Transactions of the American Mathematical Society 58 (1945) 231–294](https://doi.org/10.1090/S0002-9947-1945-0013131-6)

### Defining products by a universal property makes them unique up to isomorphism

**Remember:** Unique compatible maps each way force both composites to be identities.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 2: later undergraduate.

**Definition.** A product of X and Y is an object P with maps to X and to Y through which every such pair of maps factors uniquely. That is, for any object Q with maps to X and Y, exactly one map from Q to P composes with the maps of P to give the maps of Q.

**Problem.** Any two products of the same pair of objects are isomorphic.

**How the definition helps.** Universality gives one compatible map in each direction (our own). Each composite preserves both projections, as does the identity (our own). Uniqueness therefore makes both composites identities (our own).

**Paper or page:** [An Infinitely Large Napkin: Cats: Categories](https://venhance.github.io/napkin/Napkin.pdf). It says: “When they exist, products are unique up to isomorphism: given two products P₁ and P₂ of X and Y there is an isomorphism between the two objects.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Groupoid cardinality divides the set size by the group order

**Remember:** Weight each orbit by the reciprocal of the size of its stabilizer.

*True by definition. Confidence: medium.* MSC 18B40 (Groupoids, semigroupoids, semigroups, groups (viewed as categories)), 20L05. arXiv math.CT, math.CO. Level 2: later undergraduate.

**Definition.** The cardinality of a finite groupoid counts each isomorphism class with weight 1/\|Aut(x)\|, for a representative x. In the action groupoid of G on X, the objects are the points of X and each g gives an arrow x → gx, so the automorphisms of x form its stabilizer.

**Problem.** For a finite group G acting on a finite set X, the action groupoid has cardinality \|X//G\| = \|X\|/\|G\|, even if the action is not free.

**How the definition helps.** Each orbit contributes one over its stabilizer order, which is the orbit size divided by \|G\| by orbit–stabilizer (our own). Summing over orbits counts every point of X once, which gives \|X\|/\|G\| (our own).

**nLab:** [groupoid cardinality](https://ncatlab.org/nlab/show/groupoid+cardinality). It says: “More generally, for an action of G on a set X, then the cardinality of the action groupoid X//G is \|X\|/\|G\|. This is traditionally sometimes called the class formula.”

**Sources:** none listed. No primary source with a working link was found.

### Defining split sequences as direct sums makes additive functors preserve them

**Remember:** An additive functor keeps direct sums, so it keeps split sequences.

*True by definition. Confidence: medium.* MSC 18E05 (Preadditive, additive categories), 18E10. arXiv math.KT. Level 2: later undergraduate.

**Definition.** A short exact sequence is split if it is isomorphic to A → A ⊕ C → C, with the inclusion of A and the projection onto C. So a split sequence is a direct sum together with its structure maps.

**Problem.** Every additive functor between abelian categories sends split short exact sequences to split short exact sequences. This holds even if the functor is not exact.

**How the definition helps.** An additive functor F preserves finite direct sums with their inclusions and projections, so it sends A → A ⊕ C → C to FA → FA ⊕ FC → FC (our own). The splitting lemma, which turns a right inverse of the last map into such a direct sum, links this to the other common definition (our own).

**Wikipedia:** [Splitting lemma](https://en.wikipedia.org/wiki/Splitting_lemma). It says: “we assume 3. and take as t the natural projection of the direct sum onto A”

**Sources:** none listed. No primary source with a working link was found.

### Defining Ext¹ by extensions makes its vanishing detect projective modules

**Remember:** If every extension of A splits, then every surjection onto A splits.

*True by definition. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G05. arXiv math.KT. Level 2: later undergraduate.

**Definition.** For modules A and B over one ring, Ext¹(A,B) is the set of extensions 0 → B → E → A → 0, up to an isomorphism of middle terms that commutes with both end maps. Its zero is the class of split extensions, so Ext¹(A,B) = 0 says that every such extension splits.

**Problem.** A module A is projective exactly when Ext¹(A, B) is zero for every module B.

**How the definition helps.** Every surjection onto A with kernel B is such an extension, so Ext¹(A, ·) = 0 says that every surjection onto A splits, a standard definition of projective (our own). To apply this to Ext¹ from a resolution, one proves that the two definitions agree (our own).

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “An extension of A by B is called split if it is equivalent to the trivial extension”

**Sources:** none listed. No primary source with a working link was found.

### Defining split exactness by direct sums makes exact vector-space complexes contractible

**Remember:** Choosing complements in every degree contracts the whole complex.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18E10. arXiv math.KT. Level 2: later undergraduate.

**Definition.** An exact complex is split if each term is the sum of its cycles and a complement that the differential maps isomorphically onto the next cycles. A complex is contractible if its identity map is chain homotopic to zero.

**Problem.** Every exact complex of vector spaces is contractible.

**How the definition helps.** Over a field every subspace has a complement, so every exact complex of vector spaces is split (our own). A split exact complex is a direct sum of two-term complexes V → V with the identity as differential, and each of these is contractible (our own).

**nLab:** [split exact sequence](https://ncatlab.org/nlab/show/split+exact+sequence). It says: “in that the identity on C• has a null homotopy.”

**Sources:** none listed. No primary source with a working link was found.

### In univalent categories, equivalent categories are equal

**Remember:** Make isomorphic objects equal, and equivalent categories become equal.

*Makes the theorem clean to state or prove.* MSC 18A05 (Definitions and generalizations in theory of categories), 03B38. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A precategory in homotopy type theory is univalent if equality of objects is the same as isomorphism. That is, for all objects a, b, the canonical map from a = b to a ≅ b is an equivalence.

**Problem.** A functor between univalent categories is an equivalence exactly when it is an isomorphism of categories. In a univalent universe, the type of equalities between two small univalent categories is equivalent to the type of equivalences between them.

**How the definition helps.** Univalence converts the component isomorphisms of a quasi-inverse into equalities, making the object map an equivalence of types (our own). Full faithfulness then makes the functor an isomorphism of categories (our own). The structure identity principle in a univalent universe identifies these isomorphisms with equalities of categories (our own).

**nLab:** [univalent category](https://ncatlab.org/nlab/show/univalent+category). It says: “The notion of "category" in which equality and isomorphism coincide in this way is called univalent or saturated.”

**Paper or page:** [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “For categories A and B, a functor F : A → B is an equivalence of categories if and only if it is an isomorphism of categories.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Benedikt Ahrens, Krzysztof Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science (2015)](https://doi.org/10.1017/s0960129514000486)

### In reflexive graphs the vertices are the maps from the terminal graph

**Remember:** Choose the vertex image and its chosen loop determines the edge image.

*True by definition. Confidence: medium.* MSC 18A10 (Graphs, diagram schemes, precategories), 05C20. arXiv math.CT, math.CO. Level 3: graduate.

**Definition.** A reflexive graph (also called a reflexive quiver) is a directed graph in which every vertex has a chosen loop, its identity edge. Morphisms must send identity loops to identity loops.

**Problem.** In the category of reflexive graphs, the maps from the terminal graph 1 to a graph G correspond exactly to the vertices of G.

**How the definition helps.** The terminal graph has one vertex and its chosen loop (our own). A map to G chooses the vertex image, and preservation of chosen loops forces its edge image (our own). Every vertex gives such a map (our own).

**nLab:** [reflexive graph](https://ncatlab.org/nlab/show/reflexive+graph). It says: “One advantage of RefGph is that the set of vertices of a reflexive quiver G is representable: it is naturally isomorphic to hom(1,G).”

**Sources:** none listed. No primary source with a working link was found.

### Separable functors turn Maschke's theorem into a property of a forgetful functor

**Remember:** Pull maps between images back to maps, naturally.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A22 (Special properties of functors (faithful, full, etc.)), 18A40, 20C07. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** A functor F is separable if every map from Fx to Fy can be pulled back to a map from x to y, naturally in x and y, fixing maps of the form Ff. Precisely, the map Hom(x,y) → Hom(Fx,Fy) induced by F has a retraction natural in both objects.

**Problem.** For a finite group G with \|G\| invertible in k, the forgetful functor from k\[G\]-modules to k-modules is separable. An exact sequence of k\[G\]-modules therefore splits exactly when its underlying sequence of k-modules splits.

**How the definition helps.** Averaging, which sends a k-linear f to m ↦ \|G\|⁻¹∑ g f(g⁻¹m), gives a natural retraction onto equivariant maps, so the forgetful functor is separable (our own). Averaging a k-linear section of a surjection of k\[G\]-modules then gives an equivariant section (our own).

**nLab:** [separable functor](https://ncatlab.org/nlab/show/separable+functor), [Maschke's theorem](https://ncatlab.org/nlab/show/Maschke%27s+theorem). It says: “This "Maschke property" of the forgetful functor kG Mod → k Mod is what is generalized by the notion of separable functors.”

**Sources:**

- [C. Năstăsescu, M. Van den Bergh, F. Van Oystaeyen, Separable functors applied to graded rings, Journal of Algebra 123 (1989) 397–413](https://doi.org/10.1016/0021-8693(89)90053-7)

### Counting the terminal object as an empty product gives all finite limits

**Remember:** The terminal object is the product of nothing.

*Makes the theorem clean to state or prove.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** A terminal object receives exactly one arrow from each object. This is the universal property of the product of the empty family.

**Problem.** A category has all finite products and equalizers exactly when it has all pullbacks and a terminal object. Both conditions say that the category has all finite limits.

**How the definition helps.** Counting the terminal object as the empty product, finite products supply it, and products with equalizers give pullbacks (our own). Conversely, a pullback over the terminal object is a binary product. Pulling back the diagonal of B along a pair of arrows from A to B gives their equalizer.

**nLab:** [finite limit](https://ncatlab.org/nlab/show/finite+limit). It says: “In particular, binary products are finite limits and the terminal object (being the limit over the empty diagram) is a finite limit.”

**Paper or page:** [Category has Products and Equalizers iff Pullbacks and Terminal Object](https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object). It says: “(1): C has all finite products and equalizers. (2): C has all pullbacks and a terminal object.”

**Sources:**

- [ProofWiki, Category has Products and Equalizers iff Pullbacks and Terminal Object](https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object)

### Defining ends as right adjoints makes iterated ends commute, like Fubini's theorem

**Remember:** An end represents families compatible with every arrow.

*True by definition. Confidence: medium.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A23. arXiv math.CT. Level 3: graduate.

**Definition.** The end of T: Cᵒᵖ×C → D is the universal wedge: maps from X to the end correspond naturally to wedges from X. A wedge from X is a family of maps π<sub>c</sub>: X → T(c,c) with T(c,f)π<sub>c</sub> = T(f,d)π<sub>d</sub> for every f: c → d.

**Problem.** For a functor of pairs from Aᵒᵖ × A and Bᵒᵖ × B, assume the indicated ends exist. Either iterated end is canonically isomorphic to the end over A × B.

**How the definition helps.** Both iterated ends and the end over A × B represent the same families of maps, so they are canonically isomorphic (our own). A map into an iterated end is a family compatible with arrows in each variable separately. Every arrow of A × B is a composite of one arrow in each variable, so these are the families compatible with all arrows.

**nLab:** [end](https://ncatlab.org/nlab/show/end). It says: “This immediately implies a Fubini theorem for ends and coends.”

**Sources:** none listed. No primary source with a working link was found.

### Defining final functors by preserved colimits makes their composites final

**Remember:** Two restrictions that keep the colimit keep it together.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** A functor F from C to D is final if restriction along F preserves and reflects colimit cocones for every diagram on D.

**Problem.** If F₁ and F₂ are final, then so is their composite F₁ ∘ F₂.

**How the definition helps.** Restriction along a composite performs the two restrictions in succession (our own). Each restriction preserves and reflects the colimit property, so their composite does too.

**nLab:** [final functor](https://ncatlab.org/nlab/show/final+functor). It says: “If F₁ and F₂ are final, then so is their composite F₁ ∘ F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Defining split coequalizers by equations makes every functor preserve them

**Remember:** Functors carry the splitting equations with them.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** A split coequalizer of f, g: A → B is an arrow e: B → C with ef = eg, together with arrows s: C → B and t: B → A satisfying es = id<sub>C</sub>, ft = id<sub>B</sub> and gt = se. It is defined by equations alone, and every functor preserves equations.

**Problem.** Every functor sends a split coequalizer to a coequalizer. So split coequalizers are absolute coequalizers.

**How the definition helps.** Every functor preserves these equations, and the equations alone make e a coequalizer. If hf = hg, then h = hft = hgt = hse, so h factors through e as hs. The factor is unique because es = id<sub>C</sub> makes e epic (our own).

**nLab:** [split coequalizer](https://ncatlab.org/nlab/show/split+coequalizer). It says: “In fact, a split coequalizer is not just a coequalizer but an absolute coequalizer: one preserved by all functors.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexive coequalizers make categories of algebras cocomplete, by Linton's theorem

**Remember:** A common section makes the pair reflexive.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** Parallel arrows f,g:A→B form a reflexive pair if some s:B→A satisfies fs = gs = id<sub>B</sub>. A reflexive coequalizer is a coequalizer of such a pair.

**Problem.** Linton's theorem says that if C is cocomplete and the category Cᵀ of T-algebras has reflexive coequalizers, then Cᵀ is cocomplete. So if a monad on a complete and cocomplete category preserves reflexive coequalizers, its category of algebras is complete and cocomplete.

**How the definition helps.** Every algebra has a reflexive presentation by free algebras, and Linton’s theorem uses these to build colimits from reflexive coequalizers. If T preserves reflexive coequalizers, the forgetful functor creates them, so the algebras have them (our own). The forgetful functor also creates limits, so the algebras are complete as well (our own).

**nLab:** [colimits in categories of algebras](https://ncatlab.org/nlab/show/colimits+in+categories+of+algebras). It says: “If C is cocomplete and Cᵀ has reflexive coequalizers, then Cᵀ is cocomplete.”

**Sources:**

- [Fred Linton, Coequalizers in categories of algebras, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80, Springer (1969)](https://doi.org/10.1007/BFb0083082)

### Reflexive coequalizers preserved in each variable are preserved jointly

**Remember:** A common section lets a joint equation test each variable separately.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18C15. arXiv math.CT. Level 3: graduate.

**Definition.** Parallel arrows f,g from A to B form a reflexive pair if some arrow s from B to A satisfies fs = gs = id<sub>B</sub>. Their coequalizer is called a reflexive coequalizer.

**Problem.** If a functor of two variables preserves reflexive coequalizers in each variable separately, then it preserves them in both variables together.

**How the definition helps.** The common sections recover each separate coequalizing equation from the joint one (our own). The separate universal properties then give a unique factor through the result of taking both coequalizers.

**nLab:** [reflexive coequalizer](https://ncatlab.org/nlab/show/reflexive+coequalizer). It says: “In this case it implies that the free monoid monad on such a category preserves reflexive coequalizers, and thus (by Linton's theorem) the category of monoid objects in C is cocomplete.”

**Sources:**

- [F. E. J. Linton, Coequalizers in categories of algebras, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80 (1969) 75–90](https://doi.org/10.1007/BFb0083082)

### Sifted categories are defined by the theorem they satisfy

**Remember:** Sifted means that colimits of this shape pass through finite products.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A small category D is sifted if colimits of D-shaped diagrams of sets commute with finite products, including the empty product.

**Problem.** A nonempty small category D is sifted exactly when its diagonal functor D → D × D is final. Every small category with finite coproducts is sifted, as is the shape of a reflexive coequalizer.

**How the definition helps.** Commuting with binary products says that colimits over D × D can be computed along the diagonal, which Gabriel and Ulmer identify with finality of the diagonal (our own reading). Finite coproducts give each pair of objects an initial cospan, which makes the diagonal final (our own). In the reflexive-pair shape, the shared section connects all cospans (our own).

**nLab:** [sifted category](https://ncatlab.org/nlab/show/sifted+category), [filtered category](https://ncatlab.org/nlab/show/filtered+category). It says: “A category D is called sifted if colimits of diagrams of shape D commute with finite products in Set”

**Sources:**

- [Jiří Adámek, Jiří Rosický, On sifted colimits and generalized varieties, Theory and Applications of Categories 8 (2001) 33–53](http://tac.mta.ca/tac/volumes/8/n3/8-03abs.html)
- [Jiří Adámek, Jiří Rosický, Enrico Vitale, What are sifted colimits?, Theory and Applications of Categories 23 (2010) 251–260](http://tac.mta.ca/tac/volumes/23/13/23-13abs.html)

### Split pushouts are preserved by every functor

**Remember:** Equations witness the pushout, and every functor preserves equations.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A split pushout is a commuting square mp = nq, with p from A to B, q from A to C, and m, n from B, C to P, held together by equations. The maps p, q, m have sections s, t, u, and pt = un.

**Problem.** A split pushout is an absolute pushout: every functor out of the category sends it to a pushout.

**How the definition helps.** Every functor preserves the sections and their equations, and the equations alone make the square a pushout. For a cocone bp = cq, the factor bu satisfies bun = bpt = cqt = c, and bum = b because bump = bunq = cq = bp and p is split epic (our own). The factor is unique because mu is the identity.

**nLab:** [absolute pushout](https://ncatlab.org/nlab/show/absolute+pushout). It says: “arbitrary functors do not preserve epimorphisms. They do however preserve split epimorphisms, and thus the section guarantees that the image of p will define an epimorphism in any category.”

**Sources:**

- [Samuel B. Isaacson, Symmetric cubical sets, Journal of Pure and Applied Algebra 215 (2011) 1146–1173](https://doi.org/10.1016/j.jpaa.2010.08.001)

### The Mittag-Leffler condition makes inverse limits keep short exact sequences exact

**Remember:** When images stop shrinking, inverse limits stay exact.

*Rules out counterexamples.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18G10. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** An inverse system (Aᵢ) is Mittag-Leffler if the images in each Aᵢ stop shrinking. That is, for every i some j ≥ i has the same image in Aᵢ as every Aₖ with k ≥ j.

**Problem.** Take a short exact sequence 0→Aᵢ→Bᵢ→Cᵢ→0 of inverse systems of abelian groups indexed by the natural numbers. If (Aᵢ) is Mittag-Leffler, then 0→lim Aᵢ→lim Bᵢ→lim Cᵢ→0 is exact.

**How the definition helps.** Stable images let compatible lifts be chosen successively in a countable tower (our own). For a prime p, the inclusions pⁱℤ ⊂ ℤ give the standard counterexample. Their images shrink forever, and the resulting map ℤ → ℤₚ misses some p-adic integers.

**Wikipedia:** [Inverse limit](https://en.wikipedia.org/wiki/Inverse_limit). It says: “the Mittag-Leffler condition is a condition on the transition morphisms fᵢⱼ that ensures the exactness of lim”

**Paper or page:** [Stacks Project, Algebra, Lemma 10.86.4](https://stacks.math.columbia.edu/tag/0598). It says: “Suppose I is countable. If (Aᵢ) is Mittag-Leffler, then 0 → lim Aᵢ → lim Bᵢ → lim Cᵢ → 0 is exact.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0598 (Algebra, Lemma 10.86.4)](https://stacks.math.columbia.edu/tag/0598)

### The unique empty map makes the empty set the initial object

**Remember:** From nothing there is exactly one way to go anywhere.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18B05. arXiv math.CT. Level 3: graduate.

**Definition.** A map from S to T is a set of pairs that gives each element of S exactly one value in T. For S = ∅ the empty set of pairs qualifies vacuously, and it is the only set of pairs. An initial object has exactly one map to every object.

**Problem.** The empty set is initial in the category of sets, so there is exactly one map from ∅ to ∅. No nonempty set has a map to ∅.

**How the definition helps.** The empty set of pairs is a map from ∅ to every set, and the only one, so ∅ is initial. In particular there is exactly one map from ∅ to ∅, so 0⁰ = 1 for sets. A nonempty set has an element that needs a value in ∅, so it has no map to ∅ (our own).

**Paper or page:** [Empty Set is Initial Object](https://proofwiki.org/wiki/Empty_Set_is_Initial_Object), [Empty Mapping is Unique](https://proofwiki.org/wiki/Empty_Mapping_is_Unique), [Cardinality of Set of All Mappings to Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_to_Empty_Set). It says: “For each set T there exists exactly one empty mapping e: ∅ → T whose domain is the empty set.”

**Sources:**

- [ProofWiki, Empty Set is Initial Object](https://proofwiki.org/wiki/Empty_Set_is_Initial_Object)
- [ProofWiki, Empty Mapping is Unique](https://proofwiki.org/wiki/Empty_Mapping_is_Unique)
- [ProofWiki, Cardinality of Set of All Mappings to Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_to_Empty_Set)

### Defining the Karoubi envelope by formal pairs makes every idempotent split

**Remember:** Make the idempotent the identity of its formal image.

*True by definition.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions). arXiv math.CT. Level 3: graduate.

**Definition.** The Karoubi envelope of C has objects (X,e) with e² = e on X. An arrow from (X,e) to (Y,f) is an arrow u in C satisfying fue = u. Composition comes from C, and e serves as the identity on (X,e).

**Problem.** In the Karoubi envelope, every idempotent splits. That is, it equals j ∘ p for some maps p and j with p ∘ j equal to the identity.

**How the definition helps.** An idempotent φ on (X,e) gives the object (X,φ). The equations eφ = φe = φ and φ² = φ make φ an arrow in both directions between these objects. Both composites equal φ, the identity on (X,φ).

**nLab:** [Karoubi envelope](https://ncatlab.org/nlab/show/Karoubi+envelope). It says: “It is clear that p ∘ j is the identity e : (c, e) → (c, e)”

**Sources:** none listed. No primary source with a working link was found.

### Defining the limit functor as a right adjoint makes limits commute

**Remember:** A limit functor is a right adjoint, so it preserves limits.

*True by definition.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** For a small category I, the limit functor on I-shaped diagrams in C is a right adjoint to the constant-diagram functor from C.

**Problem.** Suppose a category has all limits of two small shapes I and J. Then taking limits over I and then over J gives the same result as the other order, up to a canonical isomorphism.

**How the definition helps.** A right adjoint preserves limits, so the limit functor over I preserves limits over J. Diagram categories compute these limits object by object (our own). This identifies the two iterated limits canonically.

**nLab:** [limits commute with limits](https://ncatlab.org/nlab/show/limits+commute+with+limits). It says: “Since the limit-construction is the right adjoint functor to the constant diagram-functor, this is a special case of right adjoints preserve limits.”

**Sources:** none listed. No primary source with a working link was found.

### Flat functors make Diaconescu's theorem hold for every small category

**Remember:** Extend along Yoneda, then test finite limits.

*Makes the theorem clean to state or prove.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** A functor F from a small category C to a Grothendieck topos E is flat if its colimit-preserving extension to presheaves on C preserves finite limits. The extension is taken along the Yoneda embedding of C into PSh(C).

**Problem.** For every small category C and Grothendieck topos E, geometric morphisms E → PSh(C) correspond to internally flat functors C → E.

**How the definition helps.** An inverse-image functor is one that preserves colimits and finite limits, so flatness makes the extension the inverse image of a geometric morphism (our own). Diaconescu’s theorem gives the correspondence even when C lacks finite limits.

**nLab:** [flat functor](https://ncatlab.org/nlab/show/flat+functor), [Diaconescu's theorem](https://ncatlab.org/nlab/show/Diaconescu%27s+theorem). It says: “lacks some finite limits, then this concept still makes sense, but it may not be the correct one.”

**Sources:**

- [Radu Diaconescu, Change of base for toposes with generators, Journal of Pure and Applied Algebra 6 (1975) 191–218](https://doi.org/10.1016/0022-4049(75)90015-8)

### Strict creation of limits gives monadicity up to isomorphism

**Remember:** Each colimit cocone downstairs has exactly one lift, itself a colimit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A functor U strictly creates colimits of J if every colimit cocone of U∘J lifts to exactly one cocone over J, and that lift is a colimit cocone.

**Problem.** Suppose U has a left adjoint and strictly creates coequalizers of U-split pairs, pairs whose images have split coequalizers. These conditions are necessary and sufficient for U to be isomorphic over C to the forgetful functor of a monad on C.

**How the definition helps.** Strict creation fixes the lifted object and cocone exactly, not just up to isomorphism. Beck’s strict monadicity theorem uses these lifts to identify the category with the algebras up to isomorphism.

**nLab:** [created limit](https://ncatlab.org/nlab/show/created+limit). It says: “This is used in stating the version of the monadicity theorem that characterizes the category of algebras for a monad up to isomorphism rather than equivalence of categories.”

**Sources:**

- [Saunders Mac Lane, Categories for the Working Mathematician, 2nd edition, Springer (1978), Definition V.1](https://doi.org/10.1007/978-1-4757-4721-8)

### Adjoints are unique up to isomorphism by their universal property

**Remember:** An object known by its maps is known up to isomorphism.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** F is left adjoint to G if there are bijections Hom(Fc,d) ≅ Hom(c,Gd) for every c and d, natural in both.

**Problem.** Let C and D be locally small categories. If a functor G from D to C has a left adjoint, then any two left adjoints of G are naturally isomorphic.

**How the definition helps.** For each C, both proposed left adjoints represent the functor D ↦ Hom(C,G(D)). The Yoneda lemma identifies their values up to a canonical isomorphism (our own). Naturality in C makes these isomorphisms natural in C.

**Paper or page:** [Left Adjoint Functor is Unique up to Natural Isomorphism](https://proofwiki.org/wiki/Left_Adjoint_Functor_is_Unique_up_to_Natural_Isomorphism). It says: “Then: the left adjoint functor F of G is unique up to isomorphism in the functor category Funct(C, D).”

**Sources:**

- [ProofWiki, Left Adjoint Functor is Unique up to Natural Isomorphism](https://proofwiki.org/wiki/Left_Adjoint_Functor_is_Unique_up_to_Natural_Isomorphism)

### By matching maps, left adjoints are fully faithful precisely for invertible units

**Remember:** The unit corresponds to the identity under the adjunction.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** An adjunction L ⊣ R gives bijections Hom(LX,Z) ≅ Hom(X,RZ), natural in every X and Z. The unit η<sub>Y</sub> corresponds to the identity of LY.

**Problem.** A left adjoint L is fully faithful exactly when every unit map is invertible. Fully faithful means that L gives a bijection from maps X → Y to maps L X → L Y.

**How the definition helps.** Under the adjunction, sending f to Lf amounts to sending f to η<sub>Y</sub> ∘ f (our own). Full faithfulness says this operation is bijective for every X and Y. By Yoneda, this holds exactly when every η<sub>Y</sub> is invertible (our own).

**Paper or page:** [Categories, Lemma 4.24.4.](https://stacks.math.columbia.edu/tag/07RB). It says: “u is fully faithful ⇔ id ≅ v ∘ u ⇔ η : id → v ∘ u is an isomorphism”

**Sources:**

- [Daniel M. Kan, Adjoint Functors, Transactions of the American Mathematical Society 87 (1958), 294–329](https://doi.org/10.2307/1993102)

### Defining a monad by a reflection makes it idempotent automatically

**Remember:** Reflecting an object that is already local changes nothing.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18C15. arXiv math.CT. Level 3: graduate.

**Definition.** A reflection into a full subcategory sends each X to a local object TX, one in the subcategory, with an arrow η<sub>X</sub> from X to TX. Every map from X to a local object factors uniquely through η<sub>X</sub>.

**Problem.** The monad of a reflection is idempotent, so T(T(X)) is naturally isomorphic to T(X).

**How the definition helps.** Since TX is local, its identity already satisfies the reflection property (our own). Uniqueness makes η<sub>TX</sub> invertible. The monad multiplication is its inverse by the unit law (our own).

**nLab:** [idempotent monad](https://ncatlab.org/nlab/show/idempotent+monad). It says: “Conversely, the monad induced by any reflective subcategory is idempotent”

**Sources:** none listed. No primary source with a working link was found.

### Defining adjoints by matching sets of maps makes right adjoints preserve limits

**Remember:** Move the test object across the adjunction.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** L is left adjoint to R if there are bijections Hom(LX,Y) ≅ Hom(X,RY) for every X and Y, natural in both.

**Problem.** A right adjoint R sends every limit that exists to a limit. A limit of a diagram is a universal object with compatible maps to each object of the diagram.

**How the definition helps.** Maps from X to R(lim D) correspond to maps from LX to lim D, hence to cones from LX to D (our own). The adjunction, applied to each leg, turns these into cones from X to RD, so R(lim D) has the universal property of a limit of RD.

**Paper or page:** [Categories, Lemma 4.24.5.](https://stacks.math.columbia.edu/tag/0038). It says: “In other words v commutes with representable limits.”

**Sources:**

- [Daniel M. Kan, Adjoint Functors, Transactions of the American Mathematical Society 87 (1958), 294–329](https://doi.org/10.2307/1993102)

### Defining dependent sums by composition makes pullback squares satisfy Beck–Chevalley

**Remember:** Dependent sum composes the structure map.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18D30. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** For an arrow f from A to B, dependent sum along f sends each slice object x over A to the composite f ∘ x. It leaves the underlying arrow of each slice morphism unchanged.

**Problem.** In a category with pullbacks, take the pullback A′ of f from A to B along g from B′ to B. Write f′ and g′ for its projections to B′ and A. For any X over A, summing along f then pulling back along g agrees canonically with pulling back along g′ then summing along f′.

**How the definition helps.** Both routes form a pullback of the composite X → B along g (our own). For the route through A′, the pullback pasting lemma gives this property. Uniqueness of pullbacks gives the canonical isomorphism.

**nLab:** [Beck-Chevalley condition](https://ncatlab.org/nlab/show/Beck-Chevalley+condition). It says: “The codomain fibration of any category with pullbacks is a bifibration, and satisfies the Beck–Chevalley condition at every pullback square.”

**Sources:** none listed. No primary source with a working link was found.

### Defining group completion as a left adjoint makes it preserve pushouts

**Remember:** Maps out of a completion are monoid maps, so pushouts carry over.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 20M14, 18A30. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** A group completion of a commutative monoid M is an abelian group G with a monoid map i from M to G. Every monoid map from M to an abelian group factors uniquely through i by a group homomorphism.

**Problem.** Take two maps of commutative monoids from a common source M to N and P. Their pushout glues N and P along the images of M. Completing the pushout gives the pushout of the completed groups.

**How the definition helps.** The universal property makes completion left adjoint to the forgetful functor. Left adjoints preserve pushouts (our own).

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “has a left adjoint F (the corresponding free functor), the group completion functor”

**Sources:** none listed. No primary source with a working link was found.

### Defining Kan extensions as adjoints makes them send representables to representables

**Remember:** Adjunction and Yoneda turn extension into evaluation at F(c).

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** For a functor F between small categories, left Kan extension of Set-valued functors along F is left adjoint to restriction along F.

**Problem.** Left Kan extension along F sends the functor Hom(c, −) to the functor Hom(F(c), −). These are representable functors, which record the maps out of one object.

**How the definition helps.** Maps from the extension of Hom(c,−) to H correspond by adjunction to maps from Hom(c,−) to H∘F (our own). By Yoneda these correspond to elements of H(Fc), hence to maps from Hom(Fc,−) to H. Naturality and Yoneda identify the two functors up to canonical isomorphism.

**nLab:** [Kan extension](https://ncatlab.org/nlab/show/Kan+extension). It says: “the left Kan extension along F takes representable presheaves C(c, −) : C → 𝒱 to their image under F:”

**Sources:** none listed. No primary source with a working link was found.

### Defining reflections by a universal property gives colimits by reflecting ambient ones

**Remember:** Take the ambient colimit, then reflect it.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A full subcategory D of C is reflective if every object X of C admits a map X → RX with RX in D. Every map from X to an object of D must factor uniquely through this map.

**Problem.** Let a diagram in a reflective subcategory D have a colimit in C. Then the reflection of that colimit is a colimit of the diagram in D. For example, a coproduct of abelian groups is the abelianization of their free product.

**How the definition helps.** The reflector is left adjoint to the inclusion, so it preserves colimits (our own). Its restriction to D is naturally isomorphic to the identity. Thus reflecting the ambient colimit gives a colimit of the original diagram in D.

**nLab:** [reflective subcategory](https://ncatlab.org/nlab/show/reflective+subcategory). It says: “inherits colimits from the larger category by application of the reflector”

**Sources:** none listed. No primary source with a working link was found.

### In univalent categories, being a left adjoint is a property, not structure

**Remember:** Adjoints are unique up to isomorphism, and isomorphism is equality here.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 03B38. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** For F from A to B, left adjoint structure consists of G from B to A and bijections Hom(Fa,b) ≅ Hom(a,Gb), natural in a,b. A category is univalent if the canonical map from equality to isomorphism is an equivalence for every pair of objects.

**Problem.** Let F map a univalent category A to a precategory B. The type of left adjoint structures on F is a mere proposition, so any two such structures are equal.

**How the definition helps.** Any two adjunction structures give a unique natural isomorphism of right adjoints compatible with their hom-set bijections (our own). Univalence of A makes the functor category into A univalent. The compatible isomorphism therefore identifies the functors together with their adjunction structures (our own).

**Paper or page:** [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “If A is a category (but B may be only a precategory), then the type “F is a left adjoint” is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Benedikt Ahrens, Krzysztof Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science (2015)](https://doi.org/10.1017/s0960129514000486)

### Induction defined by maps automatically preserves projectivity

**Remember:** The map correspondence transfers the lifting property from H to G.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 16D40, 16S34. arXiv math.RT, math.CT. Level 3: graduate.

**Definition.** Induction sends a k\[H\]-module P to the k\[G\]-module Ind(P) whose maps to each k\[G\]-module V match the k\[H\]-maps from P to V. That is, Hom<sub>G</sub>(Ind(P),V) ≅ Hom<sub>H</sub>(P,V\|H), naturally in V.

**Problem.** Let H be a subgroup of G and k a commutative ring with identity. If P is a projective k\[H\]-module, so that maps from P lift along every surjection, then the induced k\[G\]-module is projective.

**How the definition helps.** The map correspondence turns each lifting problem for Ind(P) over G into one for P over H (our own). Restriction keeps the underlying modules and surjections, so projectivity of P gives the lift, which corresponds back to a lift for Ind(P) (our own). The tensor construction realizes this correspondence (our own).

**nLab:** [induced representation](https://ncatlab.org/nlab/show/induced+representation). It says: “of restricting linear representations of G to H-representations has both a left adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Initial arrows assemble left adjoints

**Remember:** One initial arrow for every input builds the adjoint.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 01A60. arXiv math.CT, math.HO. Level 3: graduate.

**Definition.** For a functor R from C to D and an object d of D, an arrow u from d to R(c) is universal if every arrow from d to R(b) factors uniquely as u followed by R(h), for an arrow h from c to b.

**Problem.** If we choose such a universal arrow for every d, then R has a left adjoint. This means arrows from its value at d to b correspond bijectively to arrows from d to R(b), compatibly with composition.

**How the definition helps.** The universal arrow gives the adjunction bijection by taking each arrow to its unique factor. Applying the same factorization to arrows between inputs defines the left adjoint on arrows (our own). Uniqueness gives functoriality and naturality.

**nLab:** [adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem). It says: “the existence of the adjoint is equivalent to the existence for each d ∈ D of an initial object”

**Paper or page:** [The history of the General Adjoint Functor Theorem](https://arxiv.org/abs/2310.19528). It says: “for each S-object (S, σ) there exists an E-universal arrow”

**Sources:** none listed. No primary source with a working link was found.

### The Isbell adjunction between spaces and algebras holds by unwinding definitions

**Remember:** Functions and points are both maps into representables.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A25. arXiv math.CT. Level 3: graduate.

**Definition.** For a small category C, the functions on a presheaf X are O(X)(c) = Nat(X, C(−,c)), its natural transformations into representables. The points of a copresheaf A are Spec(A)(c) = Nat(A, C(c,−)), its natural transformations into corepresentables.

**Problem.** The functor O, from presheaves on C to the opposite of copresheaves on C, is left adjoint to Spec.

**How the definition helps.** Both sides of the adjunction specify pairings X(d) × A(c) → C(d,c), natural in c and d (our own). Fixing either argument gives the corresponding transformation into a representable. These assignments are mutually inverse and natural.

**nLab:** [Isbell duality](https://ncatlab.org/nlab/show/Isbell+duality). It says: “The proof is mostly a tautology after the notation is unwound.”

**Sources:**

- [John R. Isbell, Structure of categories, Bulletin of the American Mathematical Society 72 (1966) 619–655](https://doi.org/10.1090/S0002-9904-1966-11541-0)

### The pointwise formula makes Kan extension along a full embedding fully faithful

**Remember:** Over an object already included, its identity is the last stop.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** For small categories C, D and functors F: C → D and G: C → Set, the pointwise left Kan extension at Y is the colimit of G(X) over all arrows FX → Y. These arrows form the comma category (F ↓ Y), whose arrows are the commuting triangles induced by arrows of C.

**Problem.** Let F be fully faithful, which means it gives bijections on sets of maps. Then left Kan extension along F, from functors C → Set to functors D → Set, is fully faithful.

**How the definition helps.** Full faithfulness makes (X,id<sub>FX</sub>) terminal in (F ↓ FX) (our own). Thus the colimit at FX evaluates to G(X). The unit of the extension–restriction adjunction is invertible, which makes extension fully faithful.

**nLab:** [Kan extension](https://ncatlab.org/nlab/show/Kan+extension). It says: “is itself a full and faithful functor.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of shifts makes itinerary maps commute automatically

**Remember:** The first coordinate determines a map into the shift that commutes with time.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 37B10. arXiv math.CT, math.DS. Level 3: graduate.

**Definition.** The one-sided shift S on sequences in X deletes the first term. A system map h from (Y,T) to (Xᴺ,S), one with h∘T = S∘h, is determined by its coordinate zero, and every function from Y to X arises this way.

**Problem.** For any function f from Y to X, the itinerary y ↦ (f(y), f(Ty), f(T²y), …) is the unique system map with first coordinate f.

**How the definition helps.** Commutation forces h(y)ₙ = h(Tⁿy)₀ for every n (our own). Thus prescribing the first coordinate f forces every coordinate of the itinerary. The resulting sequence satisfies h(Ty)ₙ = h(y)ₙ₊₁, so it gives a system map.

**nLab:** [shift](https://ncatlab.org/nlab/show/shift). It says: “From the point of view of category theory, they are a universal (right adjoint) way of forming dynamical systems from the objects of a category.”

**Sources:** none listed. No primary source with a working link was found.

### With adjoints as matching sets of maps, composite adjoints reverse order

**Remember:** Move two functors across one at a time, and their order reverses.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** L is left adjoint to R if maps LX → Y correspond bijectively to maps X → RY for every X,Y, naturally in both.

**Problem.** Let R and S be composable functors with left adjoints L and M. Then the composite S ∘ R has the left adjoint L ∘ M.

**How the definition helps.** Applying the two adjunctions identifies Hom(LMX,Y) with Hom(MX,RY) and then with Hom(X,SRY) (our own). Both bijections are natural, so their composite defines the required adjunction.

**Paper or page:** [Categories, Lemma 4.24.9.](https://stacks.math.columbia.edu/tag/0DV0). It says: “The functor v″ = v′ ∘ v has a left adjoint equal to u″ = u ∘ u′.”

**Sources:**

- [Daniel M. Kan, Adjoint Functors, Transactions of the American Mathematical Society 87 (1958), 294–329](https://doi.org/10.2307/1993102)

### Atomic topoi defined as sums of atoms make every subobject complemented

**Remember:** A subobject keeps or drops each atom.

*True by definition.* MSC 18B25 (Topoi), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** An atom is a noninitial object whose only subobjects are zero and the whole object. A Grothendieck topos is atomic if every object is a coproduct of atoms.

**Problem.** In an atomic Grothendieck topos, every subobject has a complement, so the topos is Boolean.

**How the definition helps.** Pulling a subobject back to each summand gives either zero or the whole atom (our own). Coproducts in a topos are disjoint and stable under pullback. Thus the subobject consists of its whole summands, and the remaining summands give its complement.

**nLab:** [atomic topos](https://ncatlab.org/nlab/show/atomic+topos). It says: “Every object of E can be written as a disjoint union of atoms.”

**Sources:** none listed. No primary source with a working link was found.

### Classifying toposes make classical proofs of geometric statements constructive

**Remember:** The universal model satisfies exactly what the theory proves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B25 (Topoi), 18F10, 03F65. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A classifying topos for a geometric theory T carries a model U. Pullback of U gives an equivalence between geometric morphisms into this topos and T-models in each Grothendieck topos, naturally in that topos.

**Problem.** Suppose classical logic with choice derives a geometric sequent from a geometric theory. Then geometric logic alone derives that sequent from the theory.

**How the definition helps.** Barr’s Boolean localization theorem supplies a surjective geometric morphism from a topos satisfying choice onto the classifying topos. The classical deduction holds in the pulled-back model. Conservativity reflects the geometric sequent back to U, and completeness for U gives geometric deducibility.

**nLab:** [Barr's theorem](https://ncatlab.org/nlab/show/Barr%27s+theorem). It says: “In other words, if a statement in geometric logic is deducible from a geometric theory using classical logic and the axiom of choice, then it is also deducible from it in constructive mathematics.”

**Sources:**

- [Michael Barr, Toposes without points, Journal of Pure and Applied Algebra 5 (1974) 265–280](https://doi.org/10.1016/0022-4049(74)90037-1)

### Lawvere–Tierney topologies give sheaves inside any topos

**Remember:** A Lawvere–Tierney topology is the operator 'it is locally true' on truth values.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B25 (Topoi), 18F10. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A Lawvere–Tierney topology on a topos E is an operator j: Ω → Ω on the object of truth values, read as ‘it is locally the case that’. It keeps truth, is idempotent and commutes with ‘and’: j ∘ true = true, j ∘ j = j and j ∘ ∧ = ∧ ∘ (j × j).

**Problem.** In every elementary topos, a Lawvere–Tierney topology j defines j-sheaves and a sheafification functor, and the j-sheaves form a subtopos. For presheaves on a small category C, these topologies correspond exactly to the Grothendieck topologies on C.

**How the definition helps.** The definition uses only the object of truth values, so the statement makes sense in every elementary topos. For presheaves on C, the correspondence with Grothendieck topologies shows that nothing is lost. The existence of sheafification still needs its own proof.

**nLab:** [Lawvere-Tierney topology](https://ncatlab.org/nlab/show/Lawvere-Tierney+topology). It says: “is equivalent to choosing a Lawvere--Tierney topology in the presheaf topos”

**Sources:**

- [F. William Lawvere, Quantifiers and sheaves, Actes du Congrès International des Mathématiciens (Nice 1970), Tome 1, 329–334](https://www.mathunion.org/fileadmin/ICM/Proceedings/ICM1970.1/ICM1970.1.ocr.pdf)

### Subtopoi as left exact reflective subcategories are localizations by definition

**Remember:** Every object becomes its reflection once you invert the unit.

*True by definition.* MSC 18B25 (Topoi), 18E35, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A subtopos of E is a full reflective subcategory whose reflector L preserves finite limits.

**Problem.** A subtopos is the localization of E at the maps that L turns into isomorphisms. Localization means the universal functor that makes those maps invertible.

**How the definition helps.** Any functor G inverting the maps inverted by L also inverts each unit X → LX (our own). The units identify G naturally with its restriction to the subtopos composed with L. Since L restricts to the identity up to natural isomorphism, this factorization has the localization universal property.

**nLab:** [geometric embedding](https://ncatlab.org/nlab/show/geometric+embedding). It says: “Another perspective is that a geometric embedding F ↪︎ E is the localization of E at the class W of morphisms that the left adjoint E → F sends to isomorphisms in F.”

**Sources:** none listed. No primary source with a working link was found.

### The functor definition makes monoid actions a presheaf topos

**Remember:** Write monoid actions as presheaves and inherit the general theorem about presheaves.

*True by definition.* MSC 18B25 (Topoi), 37B02. arXiv math.CT, math.DS. Level 3: graduate.

**Definition.** Regard a monoid M as a one-object category B whose composition is multiplication. A left M-action is a functor B → Set, and an equivariant map is a natural transformation.

**Problem.** Sets with actions of a fixed monoid form a topos. This is a category with set-like operations such as products and an object that classifies subobjects, which here are invariant subsets.

**How the definition helps.** Actions and equivariant maps thus form the presheaf category on Bᵒᵖ (our own). The presheaf topos theorem applies since B is small.

**nLab:** [shift](https://ncatlab.org/nlab/show/shift), [category of presheaves](https://ncatlab.org/nlab/show/category+of+presheaves). It says: “Since any category of the form PSh(C) is a topos, such a category is often called a presheaf topos.”

**Sources:** none listed. No primary source with a working link was found.

### Étale topoi defined as slices make lifts correspond to global elements

**Remember:** A lift to the slice selects a global element.

*True by definition. Confidence: medium.* MSC 18B25 (Topoi), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** For an object A of a topos E, its étale topos is the slice E/A with its projection to E. Objects are arrows to A, and a morphism is a commuting triangle over A.

**Problem.** For a geometric morphism f : F → E, lifts of f through E/A → E correspond to global elements 1 → f\*A.

**How the definition helps.** A lift pulls the diagonal section of A × A → A back to a global element of f\*A (our own). Conversely, pull each f\*B → f\*A back along the chosen global element. These inverse-image constructions are inverse up to canonical isomorphism by pullback pasting (our own).

**nLab:** [over-topos](https://ncatlab.org/nlab/show/over-topos), [étale geometric morphism](https://ncatlab.org/nlab/show/%C3%A9tale+geometric+morphism). It says: “factors as an equivalence followed by a projection out of an overcategory topos.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Free join lattices turn union-preserving maps into relations

**Remember:** A union-preserving map is determined by what it does to singletons.

*True by definition.* MSC 18B35 (Preorders, orders, domains and lattices (viewed as categories)), 03E20. arXiv math.CT, math.CO. Level 3: graduate.

**Definition.** The power set of X is the free complete join lattice on X. Each assignment of elements of a lattice with all joins to the points of X extends uniquely to a map preserving all joins, sending each subset to the join of the values at its points.

**Problem.** Union-preserving maps between the power sets of X and Y correspond exactly to relations from X to Y. Composition of these maps corresponds to composition of relations.

**How the definition helps.** Freeness determines a union-preserving map F by its values on singletons, which is a relation: x relates to y when y belongs to F({x}) (our own). Conversely, a relation gives the map that sends each subset to the union of the sets related to its points. Composing two such maps, z lies in the image of {x} exactly when some y relates x to y and y to z (our own).

**nLab:** [suplattice](https://ncatlab.org/nlab/show/suplattice). It says: “The Kleisli category of this monad is equivalent to Rel, the category of sets and relations. Thus the objects of Rel may be thought of as the free suplattices.”

**Sources:** none listed. No primary source with a working link was found.

### Right adjoints make complete lattices self-dual

**Remember:** Flip the order and trade each map for its right adjoint.

*True by definition.* MSC 18B35 (Preorders, orders, domains and lattices (viewed as categories)), 06B23. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A join-preserving map f between complete lattices is exactly a map with a right adjoint g, so f(x) ≤ y holds exactly when x ≤ g(y). The right adjoint g preserves all meets, which are the joins of the reversed orders.

**Problem.** The category of complete lattices and join-preserving maps is isomorphic to its opposite.

**How the definition helps.** Send each lattice to its reversed order and each map to its right adjoint; this is a functor to the opposite category, because right adjoints compose in reverse order. Doing it twice gives back each lattice and each map (our own).

**nLab:** [suplattice](https://ncatlab.org/nlab/show/suplattice). It says: “(which takes a morphism f: P → Q to gᵒᵖ: Qᵒᵖ → Pᵒᵖ, where g is right adjoint to f) also means that colimits may be formed as appropriate limits”

**Paper or page:** [Completeness and injectivity](https://arxiv.org/abs/2005.05311). It says: “A function f: L ⟶ L′ preserves arbitrary suprema if and only if there exists a function u: L′ ⟶ L such that f ⊣ u.”

**Sources:**

- [Soichiro Fujii, Completeness and injectivity, Proposition 2.2](https://arxiv.org/abs/2005.05311v2)

### Groups contain an identity, so the trivial group is a zero object

**Remember:** From the trivial group, e must go to e, so there is one map.

*True by definition. Confidence: medium.* MSC 18B40 (Groupoids, semigroupoids, semigroups, groups (viewed as categories)), 18A30, 20A05. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** A zero object has exactly one arrow to every object and exactly one arrow from every object. Every group contains an identity e, and every homomorphism sends e to e.

**Problem.** The trivial group is a zero object of the category of groups: it is both initial and terminal.

**How the definition helps.** Into any group, the one element of the trivial group must go to e, and this map is a homomorphism. Out of any group, the constant map to e is the only map, and it is a homomorphism (our own).

**Paper or page:** [Trivial Group is Initial Object](https://proofwiki.org/wiki/Trivial_Group_is_Initial_Object), [Trivial Group is Terminal Object of Category of Groups](https://proofwiki.org/wiki/Trivial_Group_is_Terminal_Object_of_Category_of_Groups), [Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty). It says: “Let 1 = {e} be the trivial group. Then 1 is an initial object of Grp.”

**Sources:**

- [ProofWiki, Trivial Group is Initial Object](https://proofwiki.org/wiki/Trivial_Group_is_Initial_Object)
- [ProofWiki, Trivial Group is Terminal Object of Category of Groups](https://proofwiki.org/wiki/Trivial_Group_is_Terminal_Object_of_Category_of_Groups)
- [ProofWiki, Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty)

### Commutative theories make homomorphism sets into algebras and give tensor products

**Remember:** In a commutative theory, every operation is itself a homomorphism.

*Makes the theorem clean to state or prove.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18D15, 08A99. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** An algebraic theory is commutative if any two of its operations commute with each other. Equivalently, in every algebra A, each n-ary operation Aⁿ → A is a homomorphism.

**Problem.** For a commutative algebraic theory, the homomorphisms Hom(A, B) between two algebras form an algebra under pointwise operations. The category of algebras is closed symmetric monoidal, with Hom(A ⊗ B, C) ≅ Hom(A, Hom(B, C)), as for abelian groups.

**How the definition helps.** Pointwise operations on homomorphisms are again homomorphisms because each operation is itself a homomorphism, so Hom(A,B) is an algebra (our own). The tensor product represents maps that are homomorphisms in each variable separately (our own). Keigher and Seal prove the closed symmetric monoidal structure.

**nLab:** [commutative algebraic theory](https://ncatlab.org/nlab/show/commutative+algebraic+theory). It says: “We discuss that the category of algebras for an algebraic theory over a commutative algebraic theory is canonically a closed symmetric monoidal category (Keigher 78, Seal 12).”

**Sources:**

- [Anders Kock, Monads on symmetric monoidal closed categories, Archiv der Mathematik 21 (1970) 1–10](https://doi.org/10.1007/BF01220868)
- [William Keigher, Symmetric monoidal closed categories generated by commutative adjoint monads, Cahiers de Topologie et Géométrie Différentielle Catégoriques 19 (1978) 269–293](http://www.numdam.org/item/?id=CTGDC_1978__19_3_269_0)

### Isomorphic Lawvere theories give isomorphic categories of algebras

**Remember:** An isomorphism of theories transports the functors that define algebras.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 08B05. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A Lawvere theory is a small category with finite products whose objects are the specified finite powers of one distinguished object. Its algebras are finite-product-preserving functors to Set, and their homomorphisms are natural transformations.

**Problem.** An isomorphism of Lawvere theories gives an isomorphism of their categories of algebras that keeps underlying sets. For example, Higman and Neumann's presentation by right division and one equation gives exactly the groups.

**How the definition helps.** Composing algebras and their natural transformations with the isomorphism gives the functor, and composing with the inverse undoes it (our own). The underlying set is the value at the distinguished object, which the isomorphism keeps.

**nLab:** [clone](https://ncatlab.org/nlab/show/clone). It says: “Abstract clones are equivalent to Lawvere theories, and also to finitary monads. These are all different ways of giving presentation-invariant descriptions of single-sorted algebraic theories.”

**Wikipedia:** [Clone (algebra)](https://en.wikipedia.org/wiki/Clone_%28algebra%29), [Lawvere theory](https://en.wikipedia.org/wiki/Lawvere_theory). It says: “A model of a Lawvere theory in a category C with finite products is a finite-product preserving functor M: L → C.”

**Sources:**

- [G. Higman and B. H. Neumann, Groups as groupoids with one law, Publicationes Mathematicae Debrecen 2 (1952)](https://doi.org/10.5486/pmd.1952.2.3-4.10)

### Lawvere theories define group objects in every category at once

**Remember:** A model sends every operation and equation into C by keeping products.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18C40. arXiv math.CT. Level 3: graduate.

**Definition.** A Lawvere theory is a category T with finite products whose objects are the finite powers xⁿ of one object x; its maps xⁿ → x are the n-ary operations, and equal maps are the equations. A model of T in a category C with finite products is a product-preserving functor T → C.

**Problem.** A group object in a category C with finite products is a product-preserving functor from the Lawvere theory of groups to C; in Set, Top and smooth manifolds these are groups, topological groups and Lie groups. This definition does not depend on a chosen presentation of groups.

**How the definition helps.** A product-preserving functor sends each operation to an arrow of C and each equation to an equation in C (our own). Different presentations of groups give the same theory, so they give the same models.

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “For example, a topological group may be identified with a functor”

**Sources:**

- [F. William Lawvere, Functorial semantics of algebraic theories, PhD thesis, Columbia University (1963); Reprints in Theory and Applications of Categories 5 (2004) 1–121](http://tac.mta.ca/tac/reprints/articles/5/tr5abs.html)

### Lawvere theory functors give free algebras on finitely many generators

**Remember:** Maps from the functor T(n, −) to an algebra amount to choosing n elements.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 08B20. arXiv math.CT. Level 3: graduate.

**Definition.** In a Lawvere theory T, each object n is the specified n-fold power of the object 1. A T-algebra is a finite-product-preserving functor A from T to Set, so A(n) is the set of n-tuples of elements of A(1). An algebra map is a natural transformation.

**Problem.** The free T-algebra on n generators is the functor T(n, −), which sends m to the set of maps n → m. An assignment of the n generators into any T-algebra extends uniquely to a homomorphism.

**How the definition helps.** By the Yoneda lemma, maps from T(n,−) to A are the elements of A(n), which are n-tuples of elements of A(1). The functor T(n,−) preserves products by the universal property of products (our own).

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “For S = (n) ∈ FinSet a finite set with n elements , the free T-algebra on S is just the representable”

**Sources:** none listed. No primary source with a working link was found.

### Lawvere theory models restrict by composing functors

**Remember:** To restrict a model, compose it with the map of theories.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A model of a Lawvere theory is a finite-product-preserving functor from the theory to Set. A map of theories is a functor that keeps the distinguished object and its finite powers, so it preserves finite products.

**Problem.** A map f from a Lawvere theory T₁ to T₂ gives a functor from T₂-models to T₁-models. This includes forgetting the inverse operation of a group to get a monoid.

**How the definition helps.** A composite of finite-product-preserving functors preserves finite products, so a T₂-model composed with f is a T₁-model. Composing natural transformations with f gives the action on homomorphisms (our own).

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “Let T₁ and T₂ be Lawvere theories and f: T₁ → T₂ a morphism. Write f\*: T₂ Alg → T₁ Alg for the functor on categories of algebras induced by precomposition with f.”

**Sources:** none listed. No primary source with a working link was found.

### A comonad's standard simplicial resolution is contractible after forgetting structure

**Remember:** Free in each degree, and the unit contracts it after forgetting.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18G31. arXiv math.CT. Level 3: graduate.

**Definition.** For an adjunction F ⊣ U, the standard resolution of G has (FU)ⁿ⁺¹G in degree n, augmented to G by the counit ε. Its faces apply ε at each of the n+1 positions, and its degeneracies insert the unit η between an F and a U.

**Problem.** For every group G, the standard simplicial resolution is free in every degree, has π₀ = G, and has all higher homotopy groups zero. For any adjoint pair, the resolution becomes homotopy equivalent to its augmentation after applying the right adjoint.

**How the definition helps.** After applying U, the unit η at U(FU)ⁿG gives an extra degeneracy, and an augmented simplicial object with an extra degeneracy is homotopy equivalent to its augmentation. For groups, each (FU)ⁿ⁺¹G is a free group, and the contraction gives π₀ = G and zero higher homotopy groups (our own).

**nLab:** [simplicial resolution](https://ncatlab.org/nlab/show/simplicial+resolution). It says: “The resulting object is an augmented simplicial group that is free in all non-negative dimensions and is acyclic. It has zeroth homotopy equal to G and all homotopy groups are trivial.”

**Paper or page:** [Simplicial, tag 08ND](https://stacks.math.columbia.edu/tag/08ND). It says: “the maps 1<sub>V</sub> ⋆ ε : V ∘ X → V, and ε ⋆ 1<sub>U</sub> : X ∘ U → U are homotopy equivalences.”

**Sources:** none listed. No primary source with a working link was found.

### Defining idempotent monads by equal unit insertions makes algebras fixed points

**Remember:** The only possible algebra action undoes the unit.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A monad (T,η,μ) is idempotent if applying T twice gives nothing new: μ is invertible, equivalently Tη = ηT. An algebra action on X is a map a: TX → X with aη<sub>X</sub> = id<sub>X</sub> and aμ<sub>X</sub> = aT(a).

**Problem.** For an idempotent monad, an object X has an algebra structure exactly when its unit η : X → T X is invertible. Then the only action is the inverse of η.

**How the definition helps.** For an action a, naturality and Tη = ηT give η<sub>X</sub> a = T(a)η<sub>TX</sub> = T(aη<sub>X</sub>) = id, so a is the inverse of η<sub>X</sub> (our own). Conversely, if η<sub>X</sub> is invertible, then μ<sub>X</sub> = T(η<sub>X</sub>⁻¹) by the unit law, and η<sub>X</sub>⁻¹ satisfies both action laws (our own).

**nLab:** [idempotent monad](https://ncatlab.org/nlab/show/idempotent+monad). It says: “every algebra is a fixed point”

**Sources:** none listed. No primary source with a working link was found.

### Defining monoids as list algebras makes general associativity hold by definition

**Remember:** Every bracketing is a way to cut one list into blocks.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A list algebra on a set M sends every finite list in M to a value in M, and a one-element list to its entry. For every list of lists, the value of their concatenation equals the value of the list of their values.

**Problem.** In a list algebra, the product xy = a\[x, y\] is associative, with identity a\[ \]. More generally, every bracketing of a product of n elements gives the same result.

**How the definition helps.** A bracketing cuts the list into blocks, and the block law replaces an innermost bracket by its value without changing the total (our own). Repeating this shows that every bracketing gives the value of the whole list. Inserting an empty block next to \[x\] gives the identity laws.

**nLab:** [list monad](https://ncatlab.org/nlab/show/list+monad). It says: “The Eilenberg-Moore category of modules over the list monad is the category of monoids Mon:”

**Sources:** none listed. No primary source with a working link was found.

### Defining the state monad by currying makes its sequencing laws automatic

**Remember:** Every adjunction gives a monad, so state inherits the monad laws.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 68N18. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** For a store type W, the state monad sends X to the functions W → W × X: a computation takes a store and returns a new store and a value. It is the monad of the adjunction between W × (−) and functions from W.

**Problem.** Sequencing of store-passing computations is associative and has a two-sided identity.

**How the definition helps.** Every adjunction induces a monad, whose Kleisli composition is associative and unital. Here that composition runs the second computation with the store returned by the first (our own).

**nLab:** [state monad](https://ncatlab.org/nlab/show/state+monad). It says: “Here the operation \[W, W × (-)\] is the monad on the type system which is induced by the above adjunction”

**Sources:**

- [Eugenio Moggi, Notions of Computation and Monads](https://www.cs.cmu.edu/~crary/819-f09/Moggi91.pdf)

### Distributive laws give exactly the structure needed to compose two monads

**Remember:** To multiply T S T S, swap the middle S T first.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A distributive law is a natural transformation λ: ST → TS, a way to swap S past T, that commutes with both units and both multiplications. Explicitly, λ∘ηˢT = Tηˢ, λ∘Sηᵀ = ηᵀS, λ∘μˢT = Tμˢ∘λS∘Sλ and λ∘Sμᵀ = μᵀS∘Tλ∘λT.

**Problem.** Beck's theorem: distributive laws ST → TS correspond to liftings of T to a monad on S-algebras that becomes T after forgetting the S-action. For example, the abelian group monad lifts to monoids, and the algebras of the lifted monad are rings.

**How the definition helps.** Given an S-algebra a: SX → X, the map T(a)∘λ<sub>X</sub> makes TX an S-algebra (our own). The four equations make this an action and make the unit and multiplication of T into S-algebra maps. Conversely, the lifting on free S-algebras gives back λ.

**nLab:** [distributive law](https://ncatlab.org/nlab/show/distributive+law). It says: “Such a transformation λ: S T → T S, satisfying suitable axioms to make T S into a monad, is called a distributive law, because of the motivating example relating addition to multiplication in a ring.”

**Sources:**

- [Jon Beck, Distributive laws, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80, Springer (1969); reprinted in Reprints in Theory and Applications of Categories 18 (2008)](https://doi.org/10.1007/BFb0083084)

### Strong monads interpret sequencing in a context

**Remember:** The strength lets the context ride along into the computation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18D25, 18C50. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** A strong monad has natural maps s: X ⊗ TY → T(X ⊗ Y) that carry a context X into a computation. They satisfy the unit and associativity laws of a tensorial strength, and η and μ are strong natural transformations.

**Problem.** In Moggi’s cartesian setting, giving a monad with contextual binding operations satisfying the strong Kleisli triple laws is equivalent to giving a strong monad.

**How the definition helps.** Strength pairs the context with a computed value, so the continuation can use both. Conversely, binding with a continuation that returns the pair recovers the strength (our own). The contextual binding laws give precisely the coherence laws for this construction.

**nLab:** [strong monad](https://ncatlab.org/nlab/show/strong+monad). It says: “Such a structure is the same thing as a strong monad.”

**Sources:**

- [Eugenio Moggi, Notions of computation and monads, Information and Computation 93 (1991) 55–92](https://doi.org/10.1016/0890-5401(91)90052-4)
- [Anders Kock, Strong functors and monoidal monads, Archiv der Mathematik 23 (1972) 113–120](https://doi.org/10.1007/BF01304852)

### Defining Kleisli arrows as free-algebra maps makes their composition associative

**Remember:** Kleisli arrows compose as ordinary maps between free algebras.

*True by definition.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 68Q55. arXiv math.CT, cs.PL. Level 3: graduate.

**Definition.** For a monad (T,η,μ), a Kleisli arrow from X to Y is an algebra map between the free algebras (TX,μ<sub>X</sub>) and (TY,μ<sub>Y</sub>). Composition is algebra-map composition.

**Problem.** Composition of effectful functions X → T(Y) is associative and has the unit of T as its identity.

**How the definition helps.** Algebra maps compose associatively and have identity maps. Freeness identifies each such map h with h∘η<sub>X</sub> (our own). Under this correspondence the identity becomes η<sub>X</sub> and composition becomes Kleisli composition.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “The Kleisli category Cₜ of the monad T is the full subcategory of the Eilenberg-Moore category Cᵀ on the free T-algebras.”

**Sources:**

- [Eugenio Moggi, Notions of Computation and Monads](https://www.cs.cmu.edu/~crary/819-f09/Moggi91.pdf)

### Defining monads by Kleisli triples makes Kleisli composition associative

**Remember:** Extend after composing, or compose the extensions.

*True by definition.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18C15. arXiv math.CT, cs.LO. Level 3: graduate.

**Definition.** A Kleisli triple gives an object TX for each X, a unit η<sub>X</sub>: X → TX, and an extension f♯: TX → TY of each f: X → TY. The laws are η<sub>X</sub>♯ = id, f♯∘η<sub>X</sub> = f and (g♯∘f)♯ = g♯∘f♯.

**Problem.** Kleisli composition, which puts f : X → TY and g : Y → TZ together as g♯ ∘ f, is associative. Kleisli arrows model computations with side effects in programs.

**How the definition helps.** The third law says that extending a Kleisli composite equals composing the extensions. So (h♯∘g)♯∘f = h♯∘(g♯∘f), which is associativity (our own).

**Wikipedia:** [Kleisli category](https://en.wikipedia.org/wiki/Kleisli_category). It says: “It follows trivially from these properties that Kleisli composition is associative”

**Sources:**

- [Heinrich Kleisli, Every standard construction is induced by a pair of adjoint functors, Proceedings of the American Mathematical Society 16 (1965), 544–546](https://doi.org/10.1090/S0002-9939-1965-0177024-4)

### Kleisli maps into T Y make the Kleisli adjunction initial among realizations

**Remember:** Every realization receives the free maps.

*True by definition. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads). arXiv math.CT. Level 3: graduate.

**Definition.** A realization of a monad T is an adjunction L ⊣ R that induces T with its unit and multiplication. The Kleisli realization uses each map X → TY as an arrow from X to Y, with identity η<sub>X</sub> and composition g ⋆ f = μ∘T(g)∘f.

**Problem.** The Kleisli realization is initial among all realizations of T. So each realization receives exactly one comparison functor from it that respects the adjunctions.

**How the definition helps.** Compatibility forces the comparison to send X to LX and f:X→RLY to its adjoint transpose (our own). The unit transposes to the identity, and Kleisli composition transposes to ordinary composition by the adjunction identities. These forced assignments give the unique comparison.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “initial in the category of adjunctions for T”

**Sources:** none listed. No primary source with a working link was found.

### Kleisli maps into T Y show every monad comes from an adjunction

**Remember:** A Kleisli arrow from X to Y is a map into TY.

*True by definition. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** For a monad (T,η,μ) on C, its Kleisli category has the objects of C and arrows f:X→TY from X to Y. Its identity at X is η<sub>X</sub> and its composition is g ⋆ f = μ∘T(g)∘f.

**Problem.** Every monad T arises from an adjunction between C and its Kleisli category. The left adjoint is the identity on objects, and the right adjoint sends Y to T Y.

**How the definition helps.** The adjunction needs Kleisli arrows X → Y to match maps X → TY in C, and they are these maps by definition. The left adjoint sends h to η∘h, the right adjoint sends f to μ∘T(f), the unit is η, and the counit gives μ (our own).

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “Each Kleisli category comes with an adjunction”

**Sources:**

- [Heinrich Kleisli, Every standard construction is induced by a pair of adjoint functors, Proceedings of the American Mathematical Society 16 (1965), 544–546](https://doi.org/10.1090/S0002-9939-1965-0177024-4)

### Locally presentable categories make the adjoint functor theorem clean

**Remember:** Locally presentable means generated under colimits by a small set of small objects.

*Makes the theorem clean to state or prove.* MSC 18C35 (Accessible and locally presentable categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A locally presentable category is a locally small, cocomplete category generated by a small set of small objects: for some regular cardinal λ, every object is a λ-filtered colimit of objects from a small set of λ-presentable objects. An object A is λ-presentable if Hom(A,−) preserves λ-filtered colimits.

**Problem.** Let F be a functor between locally presentable categories. Then F has a right adjoint if and only if it preserves small colimits. It has a left adjoint if and only if it is accessible and preserves small limits.

**How the definition helps.** The adjoint functor theorems for locally presentable categories use the small generating set to meet their size conditions (our own). For a left adjoint, accessibility, meaning that the functor preserves λ-filtered colimits for some λ, gives the solution set.

**nLab:** [adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem), [locally presentable category](https://ncatlab.org/nlab/show/locally+presentable+category). It says: “indicating the need for something more than just continuity to force a functor between locally presentable categories to be a right adjoint”

**Sources:**

- [Jiří Adámek, Jiří Rosický, Locally presentable and accessible categories, London Mathematical Society Lecture Note Series 189, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9780511600579)

### Defining folds by initiality gives the fusion law for free

**Remember:** A fold is the only algebra map out of the initial algebra.

*True by definition. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 18A40, 68N18. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** The fold cata φ of an F-algebra φ: FA → A is the unique algebra map from the initial F-algebra to φ. An algebra map h from φ to ψ is an arrow with h∘φ = ψ∘Fh.

**Problem.** Fusion law: if h : A → B is an algebra map from φ to ψ, then h ∘ cata φ = cata ψ.

**How the definition helps.** The composite h∘cata φ is an algebra map to ψ (our own). Initiality gives exactly one such map, namely cata ψ.

**nLab:** [catamorphism](https://ncatlab.org/nlab/show/catamorphism), [recursion scheme](https://ncatlab.org/nlab/show/recursion+scheme). It says: “In category theoretic terms, this is simply the unique homomorphism out of an initial algebra.”

**Sources:**

- [Erik Meijer, Maarten Fokkinga, Ross Paterson, Functional programming with bananas, lenses, envelopes and barbed wire, FPCA 1991, LNCS 523](https://doi.org/10.1007/3540543961_7)

### Parametrized natural numbers objects give primitive recursion without exponentials

**Remember:** Recursion must be allowed to carry extra inputs along.

*Makes the theorem clean to state or prove.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 03G30. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A parametrized natural numbers object is an object N with zero z: 1 → N and successor s: N → N such that recursion with a parameter has exactly one solution. For each f: A → X and g: X → X there is exactly one φ: A × N → X with φ(a, 0) = f(a) and φ(a, s(n)) = g(φ(a, n)).

**Problem.** A parametrized natural numbers object defines addition and multiplication by recursion. In the free category with finite products and such an object, the maps Nᵐ→N give exactly the m-argument primitive recursive functions (Román 1989).

**How the definition helps.** The parameter A carries the extra arguments through recursion without exponentials. Iterating successor gives addition, and iterating addition while retaining a parameter gives multiplication (our own). Román’s characterization identifies the numerical maps in the free category with the primitive recursive functions.

**nLab:** [natural numbers object](https://ncatlab.org/nlab/show/natural+numbers+object). It says: “if E is not cartesian closed, then it is better to explicitly assume a stronger version of this definition "with parameters" (which follows automatically when E is cartesian closed, such as when E is a topos).”

**Sources:**

- [Leopoldo Román, Cartesian categories with natural numbers object, Journal of Pure and Applied Algebra 58 (1989) 267–278](https://doi.org/10.1016/0022-4049(89)90042-X)

### Hyperdoctrines define the quantifiers as adjoints to substitution

**Remember:** ∃ is left adjoint to substitution and ∀ is right adjoint to it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C50 (Categorical semantics of formal languages), 18D30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** In a hyperdoctrine, each map f: A → B gives reindexing P(f), which substitutes along f in predicates on B. The quantifiers are its adjoints, ∃<sub>f</sub> ⊣ P(f) ⊣ ∀<sub>f</sub>, and the Beck–Chevalley condition says that quantifying commutes with reindexing around each pullback square.

**Problem.** In a hyperdoctrine, the rules for ∃ and ∀ are sound, because they are the adjunctions ∃<sub>f</sub> ⊣ P(f) ⊣ ∀<sub>f</sub>. The Beck–Chevalley condition makes quantification commute with substitution of variables.

**How the definition helps.** The adjunctions express exactly the inference rules relating a quantified predicate to one in the extended context (our own). Beck–Chevalley gives the substitution rule by identifying the two routes around a pullback.

**nLab:** [hyperdoctrine](https://ncatlab.org/nlab/show/hyperdoctrine), [Beck-Chevalley condition](https://ncatlab.org/nlab/show/Beck-Chevalley+condition). It says: “The Beck-Chevalley condition ensures that quantification interacts with substitution of variables as expected”

**Sources:**

- [F. William Lawvere, Adjointness in Foundations, Dialectica 23 (1969); Reprints in Theory and Applications of Categories 16 (2006) 1–16](http://tac.mta.ca/tac/reprints/articles/16/tr16abs.html)
- [Robert A. G. Seely, Hyperdoctrines, Natural Deduction and the Beck Condition, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 29 (1983) 505–542](https://www.math.mcgill.ca/seely/ZML/ZML.PDF)

### Reflexive objects validate beta reduction by undoing function encoding

**Remember:** Decode an encoded function and get the same function back.

*True by definition. Confidence: medium.* MSC 18C50 (Categorical semantics of formal languages), 03B40. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** A reflexive object in a cartesian closed category is an object U with an encoding ℓ: Uᵁ → U of functions as points and a decoding a: U → Uᵁ. Decoding an encoded function gives it back: a∘ℓ = id<sub>U</sub>ᵁ.

**Problem.** A reflexive object gives an interpretation of untyped lambda calculus that respects beta reduction. This rule replaces a function application by the body with its input substituted for the parameter.

**How the definition helps.** The equation makes decoding after abstraction recover the original function. Evaluation therefore applies that function to the argument. The substitution lemma identifies the result with the interpretation of the substituted body (our own).

**nLab:** [lambda-calculus](https://ncatlab.org/nlab/show/lambda-calculus). It says: “such that a ∘ ℓ = 1 (to validate the β equation).”

**Sources:** none listed. No primary source with a working link was found.

### Defining exponentials by currying makes exponentiable objects closed under products

**Remember:** Two extra inputs can travel as one pair.

*True by definition.* MSC 18D15 (Closed categories (closed monoidal and Cartesian closed categories, etc.)), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** In a category with binary products, an exponential Yᴬ represents maps X × A → Y. This means that Hom(X,Yᴬ) ≅ Hom(X × A,Y) naturally in every X.

**Problem.** Suppose that exponentials by A and by B exist for every object. Then exponentials by A × B exist too, and Y to the power A × B is (Yᴬ)ᴮ.

**How the definition helps.** Maps X × (A × B) → Y are maps (X × B) × A → Y, which curry to maps X × B → Yᴬ and again to maps X → (Yᴬ)ᴮ. These bijections are natural in X, so (Yᴬ)ᴮ is the exponential by A × B (our own).

**nLab:** [exponential object](https://ncatlab.org/nlab/show/exponential+object). It says: “showing that exponentiable objects are closed under products.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted limits are the right notion of limit for enriched categories

**Remember:** The weight says how many legs, of what shape, each point's cone has.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** A weighted limit of a small enriched diagram F: K → C, with weight W: K → V, is an object L whose maps from c are the cones weighted by W. That is, C(c,L) ≅ \[K,V\](W, C(c,F−)) naturally in c.

**Problem.** Over a complete and cocomplete symmetric monoidal closed base, an enriched category has all small weighted limits exactly when it has conical limits and powers. Powers need not follow from conical limits alone, and the Bousfield–Kan homotopy limit is a weighted limit.

**How the definition helps.** A power is a limit weighted at one object, and Kelly's end formula builds every weighted limit from powers and conical limits. Weighting by k ↦ N(K/k) gives the Bousfield–Kan homotopy limit of a diagram of fibrant simplicial sets.

**nLab:** [weighted limit](https://ncatlab.org/nlab/show/weighted+limit), [conical limit](https://ncatlab.org/nlab/show/conical+limit). It says: “However, it is not true that completeness under a class of weights can always be expressed as completeness under a class of diagrams.”

**Sources:**

- [Francis Borceux, G. M. Kelly, A notion of limit for enriched categories, Bulletin of the Australian Mathematical Society 12 (1975) 49–72](https://doi.org/10.1017/S0004972700023637)
- [G. M. Kelly, Basic Concepts of Enriched Category Theory, LMS Lecture Note Series 64 (1982); Reprints in Theory and Applications of Categories 10 (2005)](http://www.tac.mta.ca/tac/reprints/articles/10/tr10abs.html)

### In Grothendieck fibrations, the coherence of pseudofunctors comes for free

**Remember:** Ask only that pullbacks exist; the universal property picks them and glues them.

*True by definition. Confidence: medium.* MSC 18D30 (Fibered categories), 18N10. arXiv math.CT. Level 3: graduate.

**Definition.** A fibration p: E → B lets you pull back every object e along every arrow f: b → p(e) by a cartesian arrow u above f. Cartesian means that every v above f∘h factors uniquely as u∘w with w above h.

**Problem.** Chosen cartesian lifts in a fibration give a pseudofunctor Bᵒᵖ → Cat whose comparison isomorphisms satisfy the coherence laws. Conversely, the Grothendieck construction turns every such pseudofunctor into a fibration.

**How the definition helps.** Composites of cartesian arrows are cartesian, so chosen lifts compare with composite lifts by unique vertical isomorphisms (our own). Uniqueness gives both coherence laws. Conversely, in the Grothendieck construction the identity on each reindexed object specifies its cartesian lift.

**nLab:** [Grothendieck fibration](https://ncatlab.org/nlab/show/Grothendieck+fibration). It says: “By contrast, pseudofunctors are an "algebraic" structure, since the functors f\* are specified, together with the necessary coherence data and axioms; the latter come for free in a fibration because of the universal property.”

**Sources:**

- [Alexander Grothendieck, Revêtements étales et groupe fondamental (SGA 1), exposé VI, LNM 224 (1971), arXiv:math/0206203](https://arxiv.org/abs/math/0206203)
- [Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (2004), arXiv:math/0412512](https://arxiv.org/abs/math/0412512)

### Defining a functor by a representation gives its action on morphisms for free

**Remember:** Say what maps into F(c) are, and F already knows its action on morphisms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D60 (Profunctors (= correspondences, distributors, modules)), 18A05, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A right functor presentation of a profunctor R: Dᵒᵖ × C → Set chooses, for each c in C, an object Fc of D that represents R(−,c). That is, it gives bijections R(d,c) ≅ D(d,Fc) natural in d.

**Problem.** Such presentations are in bijection with functors F : C → D that come with a natural isomorphism R(d, c) ≅ D(d, F c). The action of F on morphisms and its functoriality follow automatically.

**How the definition helps.** An arrow c→c′ induces a transformation R(−,c)→R(−,c′). Yoneda identifies this with a unique arrow Fc→Fc′ under the chosen representations (our own). Uniqueness gives the functor laws and naturality in c, while forgetting the arrow action recovers the presentation.

**nLab:** [representability determines functoriality](https://ncatlab.org/nlab/show/representability+determines+functoriality). It says: “Since the action of the functor on morphisms is determined by the data of a representation of a profunctor, we can even define the functor by giving that data.”

**Sources:**

- [Ross Street, The core of adjoint functors, 2011, arXiv:1112.0094 (a related result for adjoint functors, as the page says)](https://arxiv.org/abs/1112.0094)

### In semiadditive categories, biproducts give addition of morphisms for free

**Remember:** When sums and products agree, add arrows by copying, acting and merging.

*True by definition.* MSC 18E05 (Preadditive, additive categories), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** A semiadditive category has a zero object and finite products and coproducts that agree: each canonical map A⊔B → A×B, with identities on the diagonal and zero maps off it, is invertible. So A⊕B is both, with a diagonal A → A⊕A and a codiagonal A⊕A → A.

**Problem.** A semiadditive category is enriched in commutative monoids: each hom-set has an addition that composition respects. So an additive category is a semiadditive category with a property (negatives exist), not with extra structure.

**How the definition helps.** Define f+g as the diagonal, then f⊕g, then the codiagonal (our own). Swapping summands gives commutativity, three summands give associativity, the zero map is the unit, and naturality gives distributivity. So inverses are unique when they exist, and being additive is a property.

**nLab:** [biproduct](https://ncatlab.org/nlab/show/biproduct). It says: “A semiadditive category is automatically enriched over the monoidal category of commutative monoids with the usual tensor product, as follows.”

**Sources:**

- [Stephen Lack, Non-canonical isomorphisms, Journal of Pure and Applied Algebra 216 (2012) 593–597, arXiv:0912.2126](https://arxiv.org/abs/0912.2126)

### Compactly generated Hausdorff spaces form a regular category

**Remember:** Test openness by pulling back along every map from a compact Hausdorff space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 54D50, 18F60. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A Hausdorff space X is compactly generated if a subset U is open whenever h⁻¹(U) is open for every continuous map h from a compact Hausdorff space K to X.

**Problem.** The category of compactly generated Hausdorff spaces is regular, so quotient maps in it are stable under pullback. Top is not regular.

**How the definition helps.** A theorem says that compactly generated Hausdorff spaces form a regular category, with quotients and pullbacks taken in that category (our own). In Top, a finite non-Hausdorff example has a quotient map whose pullback is not a quotient.

**nLab:** [regular category](https://ncatlab.org/nlab/show/regular+category). It says: “this example serves to show also that the category Top of all topological spaces is not regular.”

**Sources:**

- [F. Cagliari, S. Mantovani, E. Vitale, Regularity of the category of Kelley spaces, Applied Categorical Structures 3 (1995) 357–361](https://doi.org/10.1007/BF00872904)

### Regular categories have the images that make relations compose

**Remember:** Regular means images exist and survive pullback.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18B10. arXiv math.CT. Level 3: graduate.

**Definition.** A regular category has finite limits and images that survive pullback. Every map factors as a regular epimorphism (a coequalizer) followed by a monomorphism, and pullbacks of regular epimorphisms are regular epimorphisms.

**Problem.** In a regular category, relations (subobjects of c × d) compose by taking the image of the pullback span, and this composition is associative. So relations form an allegory, as they do in Set.

**How the definition helps.** Regularity supplies the image of the pullback of two relations over their common object. Pullback stability makes either bracketing of three relations the image of their triple pullback (our own). This gives associativity in the standard construction of the allegory of relations.

**nLab:** [Rel](https://ncatlab.org/nlab/show/Rel), [regular category](https://ncatlab.org/nlab/show/regular+category). It says: “the axioms of a regular category ensure that Rel(C) is a 2-category with desirable properties.”

**Sources:**

- [Peter J. Freyd, Andre Scedrov, Categories, Allegories, North-Holland Mathematical Library 39 (1990), chapter 2: Allegories](https://doi.org/10.1016/s0924-6509(08)70049-7)

### A compact projective generator recognizes module categories among abelian categories

**Remember:** One small projective that sees everything turns a category into modules.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 16D90, 18E20. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** In a cocomplete abelian category, a compact projective generator is an object P for which Hom(P,−) is faithful (P sees every object), exact (P is projective) and preserves direct sums (P is compact).

**Problem.** An abelian category with small coproducts is equivalent to left modules over some ring exactly when it has a compact projective generator P, and one may take the ring End(P)ᵒᵖ. So Mod-R and Mod-S are equivalent exactly when S is isomorphic to the endomorphism ring of such a generator of Mod-R.

**How the definition helps.** Hom(P,−) turns each object into a module over End(P)ᵒᵖ, and sums of copies of P give presentations that it sends to free presentations, so it is an equivalence (our own). The free module of rank one has all three properties, and applying the result inside Mod-R gives Morita's criterion.

**nLab:** [Freyd-Mitchell embedding theorem](https://ncatlab.org/nlab/show/Freyd-Mitchell+embedding+theorem). It says: “If C has all small coproducts and has a compact projective generator, then C ≃ R Mod for some ring R.”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “(Note that not all Grothendieck categories allow projective resolutions for all objects; examples are categories of sheaves of abelian groups on many topological spaces, such as on the space of real numbers.)”

**Sources:**

- [P. Freyd, Abelian Categories, Harper &amp; Row (1964), Exercise F on p. 103; reprinted in Reprints in Theory Appl. Categ. 3 (2003)](http://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html)

### A generator lets cocontinuous functors on Grothendieck categories have right adjoints

**Remember:** One generator and a set of quotients let Freyd’s theorem supply the adjoint.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck category is a cocomplete abelian category with exact filtered colimits and a generator U, an object for which Hom(U,−) is faithful.

**Problem.** A functor from a Grothendieck category to a category with small Hom-sets has a right adjoint exactly when it preserves all small colimits. Similarly, a functor 𝒜ᵒᵖ → Sets is representable exactly when it turns colimits into limits.

**How the definition helps.** The generator gives a small generating family. Quotients correspond to subobjects by their kernels, and subobjects of each object form a set, so Freyd's special adjoint functor theorem applies. The representability form of the same theorem handles functors 𝒜ᵒᵖ → Sets (our own).

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “it has a right adjoint if and only if it commutes with all colimits. This follows from Peter J. Freyd's special adjoint functor theorem and its dual.”

**Paper or page:** [Injectives, Lemma 19.13.1](https://stacks.math.columbia.edu/tag/07D7). It says: “Let F : 𝒜ᵒᵖᵖ → Sets be a functor. Then F is representable if and only if F commutes with colimits”

**Sources:**

- [A. Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### A reflective embedding into modules makes every Grothendieck category complete

**Remember:** Reflective inside modules, so limits come from modules.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E20, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A full subcategory is reflective if its inclusion has a left adjoint, so each object has a best approximation inside it. A reflective subcategory contains, up to isomorphism, every limit that the larger category has of its objects.

**Problem.** Every Grothendieck category has all small limits, in particular all products. Products need not be exact, as sheaves on a space show.

**How the definition helps.** Gabriel–Popescu makes every Grothendieck category a full reflective subcategory of a module category, and module categories have all small limits (our own). Sheaves on a space show that these products can fail to be exact.

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “Furthermore, Gabriel-Popescu can be used to see that every Grothendieck category is complete, being a reflective subcategory of the complete category Mod(R) for some R.”

**Paper or page:** [Injectives, Lemma 19.13.2](https://stacks.math.columbia.edu/tag/07D8), [Injectives, Theorem 19.14.3](https://stacks.math.columbia.edu/tag/0F5U). It says: “A Grothendieck abelian category has Ab3\*.”

**Sources:**

- [M. Takeuchi, A simple proof of Gabriel and Popesco's theorem, J. Algebra 18 (1971) 112–113](https://doi.org/10.1016/0021-8693(71)90130-X)
- [A. Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### A zero object is not simple, so Schur's lemma has no exception

**Remember:** A simple object is nonzero and has no proper nonzero subobject.

*Rules out counterexamples. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16D60. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** In an abelian category, a simple object is a nonzero object having only the zero subobject and the whole object as subobjects.

**Problem.** Schur's lemma has two parts. In an abelian category, each morphism between simple objects is zero or an isomorphism. And the endomorphism ring of a simple object is a division ring.

**How the definition helps.** A nonzero map between simple objects has zero kernel and full image, hence is invertible (our own). This makes every nonzero endomorphism invertible. Excluding the zero object ensures its zero endomorphism ring never counts as a division ring.

**nLab:** [simple object](https://ncatlab.org/nlab/show/simple+object), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple). It says: “The terminal object itself is \*not\* simple, as it has only \*one\* quotient object. It is too simple to be simple.”

**Sources:** none listed. No primary source with a working link was found.

### Abelian categories and the embedding theorem justify element chases

**Remember:** Kernels and cokernels recover every monomorphism and epimorphism.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E20. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is an additive category with all kernels and cokernels in which every monomorphism is the kernel of its cokernel and every epimorphism is the cokernel of its kernel.

**Problem.** Freyd–Mitchell theorem: every small abelian category has a full, faithful and exact embedding into the modules over some ring. So diagram lemmas such as the five lemma and the snake lemma, proved by chasing elements in modules, hold in every abelian category.

**How the definition helps.** The abelian axioms express kernels, cokernels and exactness without referring to elements. Each finite diagram lies in a small full abelian subcategory (our own). Freyd–Mitchell embeds it fully, faithfully and exactly into modules, so the module diagram lemmas transfer back.

**nLab:** [Freyd-Mitchell embedding theorem](https://ncatlab.org/nlab/show/Freyd-Mitchell+embedding+theorem), [abelian category](https://ncatlab.org/nlab/show/abelian+category). It says: “This implies for instance that proofs about exactness of sequences in an abelian category can always be obtained by a naive argument on elements -- called a "diagram chase”

**Sources:**

- [Barry Mitchell, The full imbedding theorem, American Journal of Mathematics 86 (1964) 619–637](https://doi.org/10.2307/2373027)
- [Peter Freyd, Abelian categories, Harper and Row (1964); Reprints in Theory and Applications of Categories 3 (2003)](http://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html)
- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### Closure under subobjects makes Serre subcategories exactly the kernels of exact functors

**Remember:** Kernels of exact functors absorb subobjects; weak Serre subcategories need not.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35. arXiv math.CT. Level 3: graduate.

**Definition.** A Serre subcategory is a full subcategory containing zero, closed under isomorphisms, subobjects, quotients and extensions. A weak Serre subcategory instead requires extensions and the kernels and cokernels of maps between its objects.

**Problem.** For an essentially small abelian category, a full subcategory is the kernel of an exact functor exactly when it is Serre. The weak Serre subcategory of ℚ-vector spaces in Ab is the kernel of no exact functor.

**How the definition helps.** Exactness forces a functor’s kernel to contain subobjects, quotients and extensions of its objects. Conversely, the Serre quotient theorem realizes each Serre subcategory as such a kernel. Rational vector spaces form a weak Serre subcategory of abelian groups, yet ℤ ⊂ ℚ violates subobject closure (our own).

**Wikipedia:** [Localizing subcategory](https://en.wikipedia.org/wiki/Localizing_subcategory). It says: “The importance of this notion stems from the fact that kernels of exact functors between abelian categories are Serre subcategories”

**Paper or page:** [Homology, Lemma 12.10.4](https://stacks.math.columbia.edu/tag/02MQ), [Homology, Lemma 12.10.3](https://stacks.math.columbia.edu/tag/0754). It says: “Let F : 𝒜 → ℬ be an exact functor. Then the full subcategory of objects C of 𝒜 such that F(C) = 0 forms a Serre subcategory of 𝒜.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Freyd's free abelian category makes modules the same as exact functors

**Remember:** Evaluate an exact functor at the ring's one object to get the module.

*True by definition. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16D90. arXiv math.RT, math.CT. Level 3: graduate.

**Definition.** Regard a ring R as a one-object preadditive category whose arrows are its elements, composed by multiplication. Its free abelian category Ab(R) is the one whose exact functors to any abelian category are the same as additive functors from R, with natural transformations.

**Problem.** The new definition agrees with the usual one. Restricting an exact functor to the one object of R gives an equivalence of categories from exact functors on Ab(R) to ordinary left R-modules.

**How the definition helps.** Freyd’s universal property identifies exact functors from Ab(R) to abelian groups with additive functors from R to abelian groups. Such an additive functor specifies precisely an abelian group and a unital left R-action (our own). Natural transformations are exactly module homomorphisms.

**Paper or page:** [Modules as exact functors](https://arxiv.org/abs/1801.08015v1). It says: “We can define a module to be an exact functor on a small abelian category. This is explained and shown to be equivalent to the usual definition”

**Sources:**

- [Mike Prest, Modules as exact functors, arXiv:1801.08015 (2018)](https://arxiv.org/abs/1801.08015v1)

### Grothendieck abelian categories have enough injectives

**Remember:** Add exact filtered colimits and a generator to a cocomplete abelian category.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18G05. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck category is a cocomplete abelian category with exact filtered colimits and a generator G. A generator is an object for which Hom(G,−) is faithful.

**Problem.** Every Grothendieck category has enough injectives: each object embeds in an injective object. So derived functors such as sheaf cohomology are defined in the same way for modules and for sheaves of abelian groups on any site.

**How the definition helps.** Grothendieck chose AB5 and a generator because these axioms give an injective cogenerator, and both modules and sheaves satisfy them. That theorem still needs a real proof. Sheaf cohomology is then a derived functor of global sections on every site.

**nLab:** [Grothendieck category](https://ncatlab.org/nlab/show/Grothendieck+category), [Tôhoku](https://ncatlab.org/nlab/show/T%C3%B4hoku), [additive and abelian categories](https://ncatlab.org/nlab/show/additive+and+abelian+categories). It says: “as well as some additional axioms (including AB5) to abelian categories ensuring existence of sufficiently many injective objects, what is now called a Grothendieck category.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal (2) 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### In abelian categories, monic and epic maps are isomorphisms

**Remember:** Every monic is a kernel, so monic plus epic means isomorphism.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18A20. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is an additive category with kernels and cokernels in which every monomorphism is a kernel and every epimorphism is a cokernel.

**Problem.** In an abelian category, a map is an isomorphism exactly when it is both monic and epic. Many other categories lack this property.

**How the definition helps.** If f is monic and epic, it is the kernel of its cokernel, which is zero, and the kernel of a zero map is an isomorphism (our own). Among torsion-free abelian groups, multiplication by two on ℤ is monic and epic but not a kernel, so it is not invertible.

**nLab:** [balanced category](https://ncatlab.org/nlab/show/balanced+category). It says: “An additive category need not be balanced: A counterexample is the category of torsion subgroup-free abelian groups, each nonzero homomorphism ℤ → ℤ is both monic and epic.”

**Paper or page:** [An Infinitely Large Napkin: Cats: Abelian](https://venhance.github.io/napkin/Napkin.pdf), [An Infinitely Large Napkin: Cats: Abelian](https://venhance.github.io/napkin/Napkin.pdf). It says: “In an abelian category, a map is an isomorphism if and only if it is monic and epic.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Localizing subcategories make the Serre quotient a full subcategory of closed objects

**Remember:** A section functor turns an abstract quotient into concrete closed objects.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35, 18E40. arXiv math.CT. Level 3: graduate.

**Definition.** A Serre subcategory 𝒞 of 𝒜 is localizing when the quotient functor T: 𝒜 → 𝒜/𝒞 has a right adjoint S, the section functor. An object X is 𝒞-closed when the unit X → ST(X) is an isomorphism.

**Problem.** For a localizing subcategory 𝒞, the section functor is fully faithful and identifies 𝒜/𝒞 with the full subcategory of 𝒞-closed objects. Finite-dimensional spaces in Mod(k) are a Serre subcategory with no such description.

**How the definition helps.** The section theorem makes the right adjoint S fully faithful, so the adjunction identifies 𝒜/𝒞 with the objects whose unit is invertible. The quotient functor is a left adjoint, so it preserves coproducts and its kernel 𝒞 is closed under them (our own). A countable sum of copies of k is not finite-dimensional, so finite-dimensional spaces are not localizing.

**nLab:** [localizing subcategory](https://ncatlab.org/nlab/show/localizing+subcategory). It says: “The section functor S<sub>T</sub> realizes the equivalence of categories between A/T and the full subcategory of A generated by T-closed objects.”

**Wikipedia:** [Localizing subcategory](https://en.wikipedia.org/wiki/Localizing_subcategory), [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category). It says: “Since then T, as a left adjoint, preserves colimits, each localizing subcategory is closed under colimits.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Requiring finitely presented subobjects makes coherent objects an abelian subcategory

**Remember:** Coherence asks subobjects to stay finitely presented, so kernels stay inside.

*Rules out counterexamples. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 13E99. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** An object of a Grothendieck category is coherent when it is finitely presented and every finitely generated subobject of it is finitely presented too.

**Problem.** In any Grothendieck category the coherent objects form an abelian subcategory, and the inclusion is exact. Finitely presented modules over a ring that is not coherent are not closed under kernels.

**How the definition helps.** For a map of coherent objects, the image is finitely generated in the coherent target, hence finitely presented, so the kernel is finitely generated and coherent (our own). The coherent-subcategory theorem gives closure under cokernels and exactness of the inclusion. Over k\[x,y₁,y₂,…\]/(xy₁,xy₂,…), the kernel of multiplication by x is not finitely generated (our own).

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “The full subcategory of all coherent objects in 𝒜 is abelian and the inclusion functor is exact.”

**Sources:**

- [I. Herzog, The Ziegler spectrum of a locally coherent Grothendieck category, Proc. London Math. Soc. 74 (1997) 503–558](https://doi.org/10.1112/S002461159700018X)

### Serre quotients by fractions make K₀ of the quotient a cokernel

**Remember:** Classes from the killed subcategory are exactly what K₀ of the quotient forgets.

*True by definition.* MSC 18E10 (Abelian categories, Grothendieck categories), 18F30. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** The Serre quotient 𝒜/𝒞 has the objects of 𝒜 and inverts every arrow whose kernel and cokernel lie in 𝒞. K₀ of an essentially small abelian category is generated by classes \[X\], with \[B\] = \[A\] + \[C\] for every short exact sequence A ↪︎ B ↠ C.

**Problem.** For a Serre subcategory 𝒞 of an essentially small abelian category 𝒜, the sequence K₀(𝒞) → K₀(𝒜) → K₀(𝒜/𝒞) → 0 is exact. Quillen extends it to a long exact sequence of higher K-groups.

**How the definition helps.** The quotient keeps the objects and only inverts arrows that change classes by elements of the image of K₀(𝒞), so classes modulo that image are defined on the quotient (our own). Short exact sequences in the quotient lift up to isomorphism, so these classes satisfy its relations and give the inverse map. Quillen's localization theorem gives the higher sequence.

**Wikipedia:** [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category). It says: “Here, one starts with the class S of those morphisms in 𝒜 whose kernel and cokernel both belong to ℬ.”

**Paper or page:** [Homology, Lemma 12.11.3](https://stacks.math.columbia.edu/tag/02MX). It says: “The exact functors 𝒞 → 𝒜 and 𝒜 → ℬ induce an exact sequence K₀(𝒞) → K₀(𝒜) → K₀(ℬ) → 0 of K-groups”

**Sources:**

- [D. Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973) 85–147](https://doi.org/10.1007/BFb0067053)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### The self-dual definition of abelian categories gives injective results from projective ones

**Remember:** Turn the arrows around and projectives become injectives for free.

*True by definition.* MSC 18E10 (Abelian categories, Grothendieck categories), 18G05, 18G10. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is an additive category with kernels and cokernels in which each map from coimage to image is an isomorphism. This definition is self-dual, so the opposite of an abelian category is abelian.

**Problem.** In an abelian category with enough injectives, each object has an injective resolution unique up to homotopy equivalence. Right derived functors of left exact additive functors to abelian categories are well defined. These conclusions follow from their projective versions in the opposite category.

**How the definition helps.** Injectives in 𝒜 are the projectives in 𝒜ᵒᵖ, and injective resolutions are projective resolutions read backwards (our own). Since 𝒜ᵒᵖ is abelian, the projective results apply there and give the injective ones with no new proof (our own).

**nLab:** [abelian category](https://ncatlab.org/nlab/show/abelian+category). It says: “The notion of abelian category is self-dual: opposite of any abelian category is abelian.”

**Sources:**

- [A. Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### The universal property of Serre quotients identifies localized module categories

**Remember:** Kill the torsion modules and you are left with modules over the localization.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35, 13B30. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** The Serre quotient by a Serre subcategory 𝒯 is universal among exact functors that send every object of 𝒯 to zero. Factorization through the quotient is unique up to unique compatible isomorphism.

**Problem.** For a multiplicative subset S of a commutative ring A, let 𝒯 be the modules in which each element is killed by some member of S; then Mod(A)/𝒯 is equivalent to Mod(S⁻¹A). In particular, Ab modulo torsion groups is equivalent to ℚ-vector spaces.

**How the definition helps.** Localization is exact and kills the S-torsion modules, so it factors through the quotient (our own). Restriction of scalars supplies an inverse there. The localization unit has S-torsion kernel and cokernel, and the counit is invertible for every localized module (our own).

**Wikipedia:** [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category). It says: “The Serre quotient here is equivalent to the category Mod(ℚ) of all vector spaces over the rationals, with the canonical functor Ab→Mod(ℚ) given by tensoring with ℚ.”

**Paper or page:** [Homology, Lemma 12.10.6](https://stacks.math.columbia.edu/tag/02MS), [Examples, Proposition 110.77.1](https://stacks.math.columbia.edu/tag/0EA5). It says: “For any exact functor G : 𝒜 → ℬ such that 𝒞 ⊂ Ker(G) there exists a factorization G = H ∘ F for a unique exact functor H : 𝒜/𝒞 → ℬ.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)
- [J.-P. Serre, Groupes d'homotopie et classes de groupes abéliens, Ann. of Math. 58 (1953) 258–294](https://doi.org/10.2307/1969789)

### Weak Serre subcategories make complexes with cohomology in them triangulated

**Remember:** Kernels, cokernels and extensions are exactly what the long exact sequence asks.

*True by definition.* MSC 18E10 (Abelian categories, Grothendieck categories), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A weak Serre subcategory is a strictly full subcategory containing zero and closed under extensions and under kernels and cokernels of maps between its objects.

**Problem.** For weak Serre ℬ in 𝒜, complexes with cohomology in ℬ form a triangulated subcategory of D(𝒜) closed under direct summands. Rational vector spaces in Ab give an example even though they do not form a Serre subcategory.

**How the definition helps.** In the long exact sequence, each cohomology object of the middle term of a triangle is an extension of a kernel by a cokernel of maps between objects of ℬ (our own). Shifts only reindex cohomology, and a direct summand has cohomology the kernel of an idempotent. Rational vector spaces satisfy these conditions, though ℤ ⊂ ℚ shows they are not Serre.

**Paper or page:** [Derived, Lemma 13.17.1](https://stacks.math.columbia.edu/tag/06UQ), [Homology, Lemma 12.10.3](https://stacks.math.columbia.edu/tag/0754). It says: “Let ℬ ⊂ 𝒜 be a weak Serre subcategory. The category D\_ℬ(𝒜) is a strictly full saturated triangulated subcategory of D(𝒜).”

**Sources:** none listed. No primary source with a working link was found.

### Semi-abelian categories give the homological lemmas for groups and Lie algebras

**Remember:** Semi-abelian categories are to groups what abelian categories are to abelian groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E13 (Protomodular categories, semi-abelian categories, Mal'tsev categories), 18G50. arXiv math.CT. Level 3: graduate.

**Definition.** A semi-abelian category is pointed, has finite coproducts, and is Barr-exact (regular, with every internal equivalence relation a kernel pair) and protomodular (the split short five lemma holds).

**Problem.** The isomorphism theorems, nine lemma and snake lemma hold in their semi-abelian forms, with the proper morphisms required for the snake lemma. They apply to groups, nonunital rings and Lie algebras.

**How the definition helps.** Exactness and protomodularity allow the homological lemmas to use kernels and quotients in nonadditive categories. The semi-abelian versions of the nine lemma and snake lemma supply the proofs, including the properness hypotheses for the snake lemma (our own).

**nLab:** [semi-abelian category](https://ncatlab.org/nlab/show/semi-abelian+category), [Malcev, protomodular, homological and semi-abelian categories](https://ncatlab.org/nlab/show/Malcev%2C+protomodular%2C+homological+and+semi-abelian+categories). It says: “the Nine Lemma, the Snake Lemma, which remain valid and strongly meaningful in the category”

**Sources:**

- [George Janelidze, László Márki, Walter Tholen, Semi-abelian categories, J. Pure Appl. Algebra 168 (2002) 367–386](https://doi.org/10.1016/S0022-4049(01)00103-7)
- [Francis Borceux, Dominique Bourn, Mal'cev, protomodular, homological and semi-abelian categories, Kluwer (2004)](https://doi.org/10.1007/978-1-4020-1962-3)

### A calculus of fractions makes each morphism of a localization one span

**Remember:** With the Ore condition, every fraction is f ∘ w⁻¹ with one denominator.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions). arXiv math.CT. Level 3: graduate.

**Definition.** A right multiplicative system W contains identities, is closed under composition, and lets a fraction be swapped: for f and w ∈ W with a common target, some v ∈ W and g satisfy fv = wg. It also allows cancelling: if wf = wg with w ∈ W, then fv = gv for some v ∈ W.

**Problem.** Suppose W admits a calculus of right fractions. Every arrow x→z in C\[W⁻¹\] is represented by one span x←y→z whose left leg belongs to W. Two such spans compose into one span.

**How the definition helps.** The swap condition turns two spans in a row into one span (our own). Every arrow of C and every inverse of a W-arrow is a span, so every zigzag reduces to one span, and cancellation says when two spans are equal.

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions), [category of fractions](https://ncatlab.org/nlab/show/category+of+fractions). It says: “A class W of weak equivalences in a category C is said to admit a calculus of fractions if it satisfies some axioms ensuring that its localization C\[W⁻¹\] can be constructed in a particularly simple way using 'one-step generalized morphisms.'”

**Sources:**

- [Pierre Gabriel, Michel Zisman, Calculus of Fractions and Homotopy Theory, Ergebnisse der Mathematik und ihrer Grenzgebiete 35, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)

### A left calculus of fractions makes localization preserve finite colimits

**Remember:** Fractions on the left let localization keep pushouts and finite coproducts.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A left multiplicative system S contains identities, is closed under composition, and lets a fraction be swapped: for f and s ∈ S with a common source, some t ∈ S and g satisfy tf = gs. It also allows cancelling: if fs = gs with s ∈ S, then tf = tg for some t ∈ S.

**Problem.** For a left multiplicative system S, the localization functor from C to S⁻¹C preserves every finite colimit that exists in C.

**How the definition helps.** With fractions, each set of maps in S⁻¹C is a filtered colimit of sets of maps in C (our own). Maps out of a finite colimit form a finite limit of sets, and filtered colimits commute with finite limits in Set, so the universal property survives (our own).

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions). It says: “Dually, if W admits a calculus of left fractions, then Q is right exact and preserves finite colimits.”

**Paper or page:** [Categories, Lemma 4.27.9](https://stacks.math.columbia.edu/tag/05Q2). It says: “Let C be a category and let S be a left multiplicative system of morphisms of C. The localization functor Q : C → S⁻¹C commutes with finite colimits.”

**Sources:**

- [Pierre Gabriel and Michel Zisman, Calculus of Fractions and Homotopy Theory, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)

### Compatible multiplicative systems give the localization a unique triangulated structure

**Remember:** Compatible fractions carry triangles through the localization.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A multiplicative system S in a pre-triangulated category is compatible if shifts and inverse shifts preserve S and the following extension condition holds. Every commuting square between first arrows of distinguished triangles whose vertical arrows belong to S extends to a triangle morphism with third component in S.

**Problem.** For a compatible multiplicative system in a pre-triangulated category D, S⁻¹D has a unique pre-triangulated structure making Q exact and strictly compatible with shifts. If D is triangulated, so is S⁻¹D.

**How the definition helps.** Compatibility lets the triangles of D pass through fractions, and the distinguished triangles of S⁻¹D are those isomorphic to images of distinguished triangles (our own). When D satisfies the octahedral axiom, the same localization theorem carries it over.

**Paper or page:** [Derived, Proposition 13.5.6](https://stacks.math.columbia.edu/tag/05R6). It says: “Then there exists a unique structure of a pre-triangulated category on S⁻¹D such that \[1\] ∘ Q = Q ∘ \[1\] and the localization functor Q : D → S⁻¹D is exact.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicative systems give a concrete test for the maps that localization inverts

**Remember:** A map turns invertible exactly when S-maps complete it on both sides.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions). arXiv math.CT. Level 3: graduate.

**Definition.** A multiplicative system S in a category C is a class of maps with a calculus of fractions on both sides. It is saturated if it contains every map that becomes invertible in S⁻¹C.

**Problem.** A map f becomes invertible in S⁻¹C exactly when there are maps g and h with gf and fh in S. These maps form the smallest saturated multiplicative system that contains S.

**How the definition helps.** With fractions on both sides, inverses of Q(f) can be written with common denominators, and clearing them gives maps g and h with gf and fh in S (our own). Conversely, invertible Q(gf) and Q(fh) give Q(f) a left and a right inverse. The saturation lemma shows this class is the smallest saturated system containing S.

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions). It says: “In the presence of either sort of calculus of fractions, the 2-out-of-6 property is equivalent to saturation of W, i.e. that any morphism in C which becomes an isomorphism in C\[W⁻¹\] is already in W.”

**Paper or page:** [Categories, Lemma 4.27.21](https://stacks.math.columbia.edu/tag/05Q9). It says: “The set Ŝ = {f ∈ Arrows(C) \| Q(f) is an isomorphism} is equal to S′ = {f ∈ Arrows(C) \| there exist g, h such that gf, fh ∈ S} and is the smallest saturated multiplicative system containing S.”

**Sources:** none listed. No primary source with a working link was found.

### Saturation makes compatible multiplicative systems and thick subcategories the same data

**Remember:** Thick subcategories and saturated systems are two faces of one quotient.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A thick triangulated subcategory contains every direct summand of its objects, and a saturated multiplicative system contains every map that its localization inverts. The two match through cones: a map is inverted exactly when its cone, the third object of its distinguished triangle, is killed (our own).

**Problem.** Send B to the maps whose cone lies in B, and send S to the objects that become zero in S⁻¹D. These two rules are inverse bijections between saturated compatible multiplicative systems and strictly full thick triangulated subcategories of D.

**How the definition helps.** A map becomes invertible in a Verdier quotient exactly when its cone becomes zero (our own). The localization theorem says that the objects that become zero form the thick closure of the defining subcategory, so thickness recovers the objects and saturation recovers the maps.

**Paper or page:** [Derived, Lemma 13.6.10](https://stacks.math.columbia.edu/tag/05RL). It says: “In particular, the constructions define mutually inverse maps between the (partially ordered) set of saturated multiplicative systems in D compatible with the triangulated structure on D and the (partially ordered) set of strictly full saturated triangulated subcategories of D.”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion pairs by vanishing Hom makes the torsion sequence unique

**Remember:** No maps from torsion to torsion-free forces one torsion part.

*True by definition.* MSC 18E40 (Torsion theories, radicals), 18E10. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** A torsion pair is two full subcategories 𝒯 (torsion) and ℱ (torsion-free) of an abelian category, with no nonzero map from an object of 𝒯 to an object of ℱ. Every object X must have a subobject Y in 𝒯 with X/Y in ℱ.

**Problem.** In a torsion pair, the exact sequence 0→Y→X→X/Y→0 with Y in 𝒯 and X/Y in ℱ is unique up to isomorphism. The assignment X ↦ Y is right adjoint to the inclusion of 𝒯.

**How the definition helps.** Every map from a torsion object T to X has zero composite T → X/Y, since Hom(T,X/Y) = 0, so it factors uniquely through Y (our own). This universal property makes Y unique as a subobject and makes X ↦ Y right adjoint to the inclusion of 𝒯.

**nLab:** [torsion theory](https://ncatlab.org/nlab/show/torsion+theory). It says: “Presentation of an object X in Ob A as an extension 0→Y→X→X/Y→0, Y in Ob T by X/Y in Ob F is unique up to an isomorphism of short exact sequences”

**Sources:**

- [S. E. Dickson, A torsion theory for Abelian categories, Trans. Amer. Math. Soc. 121 (1966) 223–235](https://doi.org/10.1090/S0002-9947-1966-0191935-0)

### Hereditary torsion classes are the localizing subcategories, unlike divisible groups

**Remember:** Torsion closed under subobjects is a Serre subcategory closed under sums.

*Rules out counterexamples.* MSC 18E40 (Torsion theories, radicals), 18E10, 16S90. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** In a Grothendieck category, a torsion class is a strictly full subcategory closed under quotients, arbitrary coproducts and extensions. It is hereditary if it is also closed under subobjects, so it is closed under subobjects, quotients, extensions and coproducts.

**Problem.** In a Grothendieck category, the hereditary torsion classes are exactly the localizing subcategories. The divisible abelian groups form a torsion class that is not hereditary and is not localizing.

**How the definition helps.** Closure under subobjects, quotients and extensions makes a hereditary torsion class exactly a Serre subcategory closed under coproducts. Gabriel’s theorem identifies these with the localizing subcategories of a Grothendieck category. Divisible groups form a torsion class, but ℤ ⊂ ℚ shows they are not closed under subobjects (our own).

**nLab:** [torsion theory](https://ncatlab.org/nlab/show/torsion+theory). It says: “A torsion theory is called hereditary if T is closed under subobjects, or equivalently, t is left exact functor.”

**Wikipedia:** [Localizing subcategory](https://en.wikipedia.org/wiki/Localizing_subcategory). It says: “Hence the notion of a localizing subcategory is equivalent to the notion of a hereditary torsion class.”

**Sources:**

- [S. E. Dickson, A torsion theory for Abelian categories, Trans. Amer. Math. Soc. 121 (1966) 223–235](https://doi.org/10.1090/S0002-9947-1966-0191935-0)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Grothendieck's Galois theory matches étale algebras with all finite G-sets

**Remember:** The fibre functor gives finite sets; its automorphisms give the group.

*Makes the theorem clean to state or prove.* MSC 18E50 (Categorical Galois theory), 14F35, 20E18. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Galois category has finite limits and finite colimits, and a fibre functor F to finite sets that preserves both and reflects isomorphisms. Every arrow factors as a strict epimorphism followed by the inclusion of a coproduct summand.

**Problem.** Every Galois category is equivalent to the category of finite sets with a continuous action of some profinite group G. For a field K with absolute Galois group G, this gives an anti-equivalence between finite étale K-algebras and finite G-sets, with fields matching transitive G-sets.

**How the definition helps.** The profinite group Aut(F) acts on every fibre F(X), and Grothendieck’s Galois theorem makes X ↦ F(X) an equivalence onto finite continuous Aut(F)-sets. For finite étale K-algebras, the connected objects on the opposite side are the fields, and they match transitive G-sets (our own).

**nLab:** [Grothendieck's Galois theory](https://ncatlab.org/nlab/show/Grothendieck%27s+Galois+theory), [Galois category](https://ncatlab.org/nlab/show/Galois+category), [Galois theory](https://ncatlab.org/nlab/show/Galois+theory). It says: “Even for the classical case of the inclusion of fields, Grothendieck's Galois theorem gives more general statement than the previously known.”

**Sources:**

- [Alexander Grothendieck, Michèle Raynaud, Revêtements étales et groupe fondamental (SGA 1), Lecture Notes in Math. 224, Springer (1971); arXiv:math/0206203](https://arxiv.org/abs/math/0206203)
- [Eduardo J. Dubuc, Constanza Sánchez de la Vega, On the Galois theory of Grothendieck, Bol. Acad. Nac. Cienc. (Córdoba) 65 (2000) 111–136, arXiv:math/0009145](https://arxiv.org/abs/math/0009145)

### Coverages let good open covers form a site without pullback stability

**Remember:** A pulled-back cover need not be a cover; it only needs to contain one.

*Makes the theorem clean to state or prove.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** A coverage assigns to each object U some families of arrows into U, called covers. For every cover of U and every arrow f : V → U, some cover of V refines the pullback: each of its members, composed with f, factors through a member of the original cover.

**Problem.** Differentiably good open covers, whose nonempty finite intersections are all diffeomorphic to the ambient ℝⁿ, form a coverage on CartSp, the category of spaces ℝⁿ and smooth maps. Smooth sets are the sheaves for this coverage.

**How the definition helps.** The preimage of a good cover is an open cover, and it can be refined by a good open cover, which is all the coverage axiom asks. The preimage family itself need not be good, since a periodic smooth curve can pull one open set back to many disjoint intervals (our own).

**nLab:** [coverage](https://ncatlab.org/nlab/show/coverage), [geometry of physics -- coordinate systems](https://ncatlab.org/nlab/show/geometry+of+physics+--+coordinate+systems), [good open cover](https://ncatlab.org/nlab/show/good+open+cover). It says: “every pullback of a good open cover gives an open cover that may be refined by a good open cover. This is all we need in the definition of coverage.”

**Sources:**

- [D. Fiorenza, U. Schreiber, J. Stasheff, Čech cocycles for differential characteristic classes: an ∞-Lie theoretic construction, Advances in Theoretical and Mathematical Physics 16 (2012) 149–250, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### Covering conditions replace stalk conditions for locally ringed sites

**Remember:** Ask 'f or 1 − f is a unit' on a covering, not at points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20, 14A15. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A ringed site satisfies the covering condition if every section f ∈ 𝒪(U) has a cover of U on each member of which f or 1 − f is a unit.

**Problem.** If the covering condition holds, every stalk of 𝒪 at a point is a local ring or the zero ring. When the site has enough points, the covering condition is equivalent to this stalk condition.

**How the definition helps.** A germ at a point p comes from a section f, and the cover makes the germ of f or of 1 − f a unit, so the stalk is local or zero (our own). Conversely, if every stalk passes this test, the subsheaf of sections that satisfy the condition locally has full stalks. Enough points then makes it the whole sheaf (our own).

**Paper or page:** [Stacks Project, Sites Modules, Lemma 18.40.2](https://stacks.math.columbia.edu/tag/04ET), [Stacks Project, Sites Modules, Lemma 18.40.3](https://stacks.math.columbia.edu/tag/05D8). It says: “For every point p of 𝒞 the stalk 𝒪ₚ is either the zero ring or a local ring. We always have (1) ⇒ (2). If 𝒞 has enough points then (1) and (2) are equivalent.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 04ET (Sites Modules, Lemma 18.40.2)](https://stacks.math.columbia.edu/tag/04ET)
- [The Stacks Project Authors, The Stacks Project, Tag 05D8 (Sites Modules, Lemma 18.40.3)](https://stacks.math.columbia.edu/tag/05D8)

### Covering-flat morphisms of sites give exactly the right geometric morphisms

**Remember:** Ask for flatness only up to covers, since sheaves cannot see more.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A morphism of sites here is a functor F that takes covering families to covering families and is covering-flat, meaning it preserves finite limits up to covers. Precisely, for every finite diagram D, each cone over F∘D factors, after restriction to some cover of its vertex, through F-images of cones over D.

**Problem.** A morphism of sites C → D induces a geometric morphism Sh(D) → Sh(C). For subcanonical sites, every geometric morphism in this direction whose inverse image preserves representables comes from such a morphism of sites.

**How the definition helps.** Preserving covers makes restriction along F send sheaves to sheaves, and covering-flatness makes its left adjoint preserve finite limits after sheafification (our own). Shulman’s comparison for site morphisms gives the converse for subcanonical sites when the inverse image preserves representables.

**nLab:** [morphism of sites](https://ncatlab.org/nlab/show/morphism+of+sites). It says: “Note that the general case would not be true for the classical definition of "morphism of sites".”

**Sources:**

- [Michael Shulman, Exact completions and small sheaves, Theory Appl. Categ. 27 (2012) 97–173, arXiv:1203.4318](https://arxiv.org/abs/1203.4318)

### Hypercoverings let Čech cohomology compute sheaf cohomology on general sites

**Remember:** Refine the overlaps too, and Čech cohomology becomes correct.

*Makes the theorem clean to state or prove.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18G40, 14F20. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A hypercovering of U is a simplicial presheaf over U, each level a coproduct of representables, in which each level covers the overlaps of the one below. Precisely, for every n ≥ 0 the map from n-simplices to compatible families of boundary faces is locally surjective; for n = 0 the 0-simplices cover U.

**Problem.** Let a site have fibre products and binary products, and fix an object U and an abelian sheaf. The sheaf cohomology of U is the colimit of Čech cohomology over its hypercoverings.

**How the definition helps.** Ordinary Čech covers refine only U, so they can miss classes in degree two and higher; a hypercovering also refines every overlap (our own). Verdier’s hypercovering theorem identifies the colimit of Čech cohomology over hypercoverings, up to simplicial homotopy, with sheaf cohomology.

**Wikipedia:** [Hypercovering](https://en.wikipedia.org/wiki/Hypercovering). It says: “The original definition given for étale cohomology by Jean-Louis Verdier in SGA4, Expose V, Sec. 7, Thm. 7.4.1, to compute sheaf cohomology in arbitrary Grothendieck topologies.”

**Paper or page:** [Stacks Project, Hypercovering, Proposition 25.10.2](https://stacks.math.columbia.edu/tag/09VZ). It says: “In other words, modulo set theoretical issues, the cohomology groups of ℱ on 𝒞 are the colimit of the Čech cohomology groups of ℱ over all hypercoverings.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 09VZ (Hypercovering, Proposition 25.10.2)](https://stacks.math.columbia.edu/tag/09VZ)

### Locality as a right adjoint makes global sections the initial point

**Remember:** The global-sections point maps uniquely to every other point.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topos is local if its global sections functor Γ = Hom(1,−) to Set has a right adjoint. Γ already preserves all limits as a hom functor, so this right adjoint makes Γ the inverse image of a point (our own).

**Problem.** In a local Grothendieck topos, Γ is the inverse image of a point, and this point is initial among all points.

**How the definition helps.** By Yoneda, natural maps Γ → p\* correspond to elements of p\*(1), because Γ = Hom(1,−) (our own). Every inverse image p\* preserves the terminal object, so p\*(1) is a single element and the map Γ → p\* is unique (our own).

**nLab:** [local geometric morphism](https://ncatlab.org/nlab/show/local+geometric+morphism), [point of a topos](https://ncatlab.org/nlab/show/point+of+a+topos). It says: “this point is an initial object in the category of all points of E”

**Sources:** none listed. No primary source with a working link was found.

### Points as geometric morphisms make stalks preserve finite limits and colimits

**Remember:** A stalk is a left adjoint that also preserves finite limits.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** A point of a topos E is a geometric morphism from Set to E. Its stalk functor is the inverse image p\* : E → Set, which by definition is a left adjoint that preserves finite limits.

**Problem.** At any point of a Grothendieck topos, the stalk functor preserves finite limits and all small colimits.

**How the definition helps.** Finite limits are preserved by definition, and every left adjoint preserves all small colimits (our own). The work moves to showing that taking germs at a point of a space gives such a point (our own). There, filtered colimits of sets commute with finite limits, and skyscraper sheaves give the right adjoint (our own).

**nLab:** [geometric morphism](https://ncatlab.org/nlab/show/geometric+morphism), [point of a topos](https://ncatlab.org/nlab/show/point+of+a+topos). It says: “such that the left adjoint f\*: F → E preserves finite limits.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Sierpinski sheaves as arrows make global sections preserve limits and colimits

**Remember:** Global sections are the set at the start of the arrow.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** Sheaves of sets on the Sierpiński space, which has two points and one proper nonempty open set U, are the same as maps of sets A → B. Here A is the global sections, B is the sections over U, the map is restriction, and sheaf maps are commuting squares.

**Problem.** Global sections, from sheaves of sets on the Sierpinski space to sets, preserve all small limits and colimits.

**How the definition helps.** In this arrow picture, global sections evaluate at the source A, and evaluation preserves limits and colimits because both are computed objectwise for functors (our own). The work moves to the equivalence of sheaves with arrows, which the nLab states; gluing adds only the single section over the empty set (our own).

**nLab:** [Sierpinski topos](https://ncatlab.org/nlab/show/Sierpinski+topos). It says: “The Sierpinski topos is the arrow category of Set.”

**Sources:** none listed. No primary source with a working link was found.

### Slices inherit subobject classifiers

**Remember:** Keep the old classifying map and attach its map to the base.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A subobject classifier is an object Ω with an arrow true : 1 → Ω such that every subobject of every object A is the pullback of true along exactly one arrow A → Ω. In the slice over X, subobjects of A → X are subobjects of A, and maps over X into Ω × X → X are just maps A → Ω (our own).

**Problem.** The subobject classifier of the slice over X is the projection Ω × X → X.

**How the definition helps.** So the classifying maps over X are the old classifying maps, paired with the structure map to X (our own). Pulling back the slice’s true, ⟨true∘!, id<sub>X</sub>⟩ : X → Ω × X, along this pair gives the original subobject, and uniqueness comes from uniqueness in the topos.

**nLab:** [over-topos](https://ncatlab.org/nlab/show/over-topos). It says: “regarded as an object in the slice over X is the subobject classifier of T/X.”

**Sources:** none listed. No primary source with a working link was found.

### Surjective submersions are the good covers among smooth manifolds

**Remember:** Cover every point and surject on each tangent space.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18A20, 58A05. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** A smooth map p : M → N is a surjective submersion if it is onto and its differential at every x ∈ M is onto the tangent space at p(x). By the submersion theorem, p then looks locally like a coordinate projection.

**Problem.** In Diff, the pullback of a surjective submersion along any smooth map exists and is again a surjective submersion. So surjective submersions form a pullback-stable class of covers for Lie groupoids and differentiable stacks.

**How the definition helps.** The pullback of a coordinate projection along a smooth map is again a coordinate projection, so the pullback exists and is a submersion (our own). Surjectivity passes to the pullback point by point. Even a split epimorphism can lack a pullback in smooth manifolds, so regular epimorphisms alone do not suffice.

**nLab:** [regular epimorphism](https://ncatlab.org/nlab/show/regular+epimorphism). It says: “the usual procedure is to consider the largest class of arrows inside regular epis of which all pullbacks exist, namely the surjective submersions.”

**Sources:**

- [I. Moerdijk, J. Mrčun, Introduction to Foliations and Lie Groupoids, Cambridge University Press (2003)](https://doi.org/10.1017/CBO9780511615450)

### Topoi as left exact reflections of presheaves make equivalence relations effective

**Remember:** Quotient in presheaves, then reflect the quotient and its pullback.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topos is a category equivalent to a full reflective subcategory of Set-valued presheaves on a small category whose reflector preserves finite limits.

**Problem.** In a Grothendieck topos, every equivalence relation R on X is effective. That means R is exactly the pairs with the same image in the quotient of X by R.

**How the definition helps.** The reflector keeps quotients, being a left adjoint, and keeps kernel pairs, since it preserves finite limits, so effectiveness passes from presheaves to the topos. In presheaves, quotients and kernel pairs are computed objectwise, so effectiveness there follows from effectiveness in sets (our own).

**nLab:** [Grothendieck topos](https://ncatlab.org/nlab/show/Grothendieck+topos), [sheaf toposes are equivalently the left exact reflective subcategories of presheaf toposes](https://ncatlab.org/nlab/show/sheaf+toposes+are+equivalently+the+left+exact+reflective+subcategories+of+presheaf+toposes). It says: “such that the reflector L : PSh(C) → Sh(C) preserves finite limits”

**Sources:** none listed. No primary source with a working link was found.

### Topologies given by covering sieves make intersections of topologies topologies

**Remember:** Keep a sieve exactly when every topology counts it as a cover.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topology says which sieves cover each object, a sieve being a set of arrows into the object closed under precomposition. Each axiom says some sieve covers whenever certain others do: maximal sieves cover, pullbacks of covers cover, and R covers if some cover S has f\*R covering for every f in S (our own).

**Problem.** For any set of Grothendieck topologies Jᵢ on a category, the sieves that cover in every Jᵢ form a topology.

**How the definition helps.** Each axiom only asks that a sieve covers when certain others cover, so a sieve covering in every Jᵢ passes every axiom (our own). With covering families instead of sieves, a sieve may cover in two topologies without containing a family common to both, so more care is needed (our own).

**Paper or page:** [Sites, Lemma 7.47.9.](https://stacks.math.columbia.edu/tag/00Z7). It says: “The rule J(U) = ⋂ Jᵢ(U) defines a topology on C.”

**Sources:**

- [The Stacks Project, Sites, Lemma 7.47.9.](https://stacks.math.columbia.edu/tag/00Z7)

### Universally effective-epimorphic covers make the canonical topology the finest subcanonical

**Remember:** Cover exactly when representables glue uniquely over every pullback.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A topology is subcanonical when every representable presheaf Hom(−,X) is a sheaf. In the canonical topology, a sieve covers exactly when every representable presheaf is a sheaf for it and for each of its pullbacks.

**Problem.** The canonical topology is the finest Grothendieck topology in which every representable presheaf is a sheaf.

**How the definition helps.** Every cover of a subcanonical topology passes this test, because its pullbacks are again covers and representables are sheaves for them (our own). The work moves to proving that the test sieves form a topology, mainly the local character rule (our own).

**nLab:** [canonical topology](https://ncatlab.org/nlab/show/canonical+topology). It says: “a sieve R is a covering for the canonical topology iff every representable functor is a sheaf for every pullback of R.”

**Sources:** none listed. No primary source with a working link was found.

### Abelian gerbes are classified by H² by definition

**Remember:** A gerbe is locally a copy of 𝐁G with its translation action.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 55N30, 53C08. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** For an abelian sheaf G, a G-banded gerbe over X is a torsor for the group stack 𝐁G, so it is classified by a map X → 𝐁𝐁G (our own). Locally it looks like 𝐁G acting on itself by translation (our own).

**Problem.** G-banded gerbes over X are classified by H²(X,G). For smooth U(1)-valued functions on a paracompact smooth manifold X, this group is H³(X,ℤ).

**How the definition helps.** Homotopy classes of maps X → 𝐁𝐁G are by definition H²(X,G), so the classification is a tautology. On a paracompact smooth manifold, the sheaf of smooth real functions is acyclic, so the exponential sequence gives H²(X,U(1)) ≅ H³(X,ℤ) (our own).

**nLab:** [gerbe (general idea)](https://ncatlab.org/nlab/show/gerbe+%28general+idea%29). It says: “Moreover, since cohomology on X with values in 𝐁𝐁G is nothing but the hom-set H²(X,G) = Ho(X, 𝐁𝐁G) in the homotopy category of our generalized spaces, it is a tautology that these G-gerbes are classified by H²(X,G).”

**Sources:**

- [I. Moerdijk, Introduction to the language of stacks and gerbes, 2002, arXiv:math/0212266](https://arxiv.org/abs/math/0212266)
- [L. Breen, Notes on 1- and 2-gerbes, 2006, arXiv:math/0611317](https://arxiv.org/abs/math/0611317)

### Allowing empty covers gives every sheaf one section over the empty set

**Remember:** The empty family of sections glues in exactly one way.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54B40. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** A sheaf of sets is a presheaf in which every compatible family on every open cover glues to exactly one section. Open covers include the empty family over the empty open set (our own).

**Problem.** A sheaf of sets on a topological space has exactly one section over the empty open set.

**How the definition helps.** The empty cover has exactly one compatible family, since it requires no sections or overlap agreements (our own). Its unique gluing is the unique section over the empty set (our own).

**nLab:** [sheaf](https://ncatlab.org/nlab/show/sheaf). It says: “A presheaf on a site is a sheaf if its value on any object of the site is given by its compatible values on any covering of that object.”

**Sources:** none listed. No primary source with a working link was found.

### Constant sheaves defined as inverse images from sets are preserved by pullback

**Remember:** Pull a set back along the unique geometric morphism to sets.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** Every Grothendieck topos has an essentially unique geometric morphism to the topos of sets. Define the constant sheaf on a set S as the inverse image of S along this morphism.

**Problem.** For every geometric morphism f between Grothendieck topoi, f\* carries each constant sheaf to the corresponding constant sheaf up to canonical isomorphism.

**How the definition helps.** For f from F to E, composing f with the morphism E → Set gives a morphism F → Set, so uniqueness makes it the one for F (our own). Inverse images of a composite are composites of inverse images, which gives the claim (our own). The work moves to showing that, on a space, this is the sheaf of locally constant functions (our own).

**nLab:** [constant sheaf](https://ncatlab.org/nlab/show/constant+sheaf), [terminal geometric morphism](https://ncatlab.org/nlab/show/terminal+geometric+morphism). It says: “Together with the global section functor, the constant sheaf functor is a geometric morphism”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Extension by zero defined as a left adjoint commutes with tensor products

**Remember:** Extension by zero is left adjoint to restriction, so test maps out.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** On a site with a sheaf of commutative rings, extension by zero jᵤ! from the slice over U is the left adjoint to restriction of modules. So maps jᵤ!G → H are the same as maps G → H\|U.

**Problem.** For every module G on the slice and module F on the site, jᵤ!G ⊗ F ≅ jᵤ!(G ⊗ F\|U) naturally.

**How the definition helps.** Maps from either side to any module H correspond naturally to maps G → Hom(F\|U,H\|U), using internal Hom and Hom(F,H)\|U ≅ Hom(F\|U,H\|U) (our own). Yoneda then gives the isomorphism (our own).

**Paper or page:** [Sites Modules, Lemma 18.27.9.](https://stacks.math.columbia.edu/tag/0E8I). It says: “we have jᵤ!G ⊗ₒ F = jᵤ!(G ⊗₍Oᵤ₎ F\|ᵤ).”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.27.9.](https://stacks.math.columbia.edu/tag/0E8I)

### Extension by zero defined as left adjoint of restriction composes along inclusions

**Remember:** Restrictions compose, so the extensions by zero compose too.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** For an open inclusion j, extension by zero j! on sheaves of abelian groups is the left adjoint to restriction along j.

**Problem.** For open sets W ⊆ U ⊆ X, successive extensions by zero from W through U to X are canonically isomorphic to direct extension.

**How the definition helps.** Successive restrictions equal restriction along the composite inclusion (our own). Their left adjoints compose in reverse order, and uniqueness of left adjoints gives the canonical isomorphism (our own).

**Paper or page:** [Sites Modules, Lemma 18.19.2.](https://stacks.math.columbia.edu/tag/03DI). It says: “The restriction functor jᵤ\* : Mod(O) → Mod(Oᵤ) has a left adjoint jᵤ! : Mod(Oᵤ) → Mod(O).”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.19.2.](https://stacks.math.columbia.edu/tag/03DI)

### Inverse image defined as a left adjoint makes inverse images compose

**Remember:** Direct images compose, so their left adjoints compose in reverse order.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54B40. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** For a continuous map f, direct image on sheaves has (f∗F)(V) = F(f⁻¹V) for every open V. Inverse image is the left adjoint to direct image (our own).

**Problem.** For continuous maps f : X → Y and g : Y → Z, (g ∘ f)⁻¹ is canonically isomorphic to f⁻¹ ∘ g⁻¹.

**How the definition helps.** Preimages compose, so direct images compose (our own). Both inverse-image functors in the statement are therefore left adjoint to the same direct image (our own). Uniqueness of left adjoints gives the canonical isomorphism (our own).

**Paper or page:** [Sheaves, Lemma 6.21.6.](https://stacks.math.columbia.edu/tag/008I). It says: “The functors (g ∘ f)⁻¹ and f⁻¹ ∘ g⁻¹ are canonically isomorphic.”

**Sources:**

- [The Stacks Project, Sheaves, Lemma 6.21.6.](https://stacks.math.columbia.edu/tag/008I)

### Sheaf surjections defined as locally surjective make epimorphisms stable under pullback

**Remember:** Lift on a cover and keep the other pullback coordinate.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** Call a map of sheaves F → G on a site locally surjective when every section of G lifts to F after restriction to the members of some covering family. These maps are exactly the epimorphisms of sheaves (Stacks Lemma 7.11.2).

**Problem.** On any site, the pullback of an epimorphism of sheaves of sets along any map is an epimorphism.

**How the definition helps.** Local surjectivity is a condition on sections, so it passes to pullbacks (our own). For a section of the other factor, its image in G lifts locally to F (our own). Together they give a local section of the pullback, since pullbacks of sheaves are computed on sections (our own).

**Paper or page:** [Sites, Lemma 7.11.2.](https://stacks.math.columbia.edu/tag/00WN). It says: “The injective (resp. surjective) maps defined above are exactly the monomorphisms (resp. epimorphisms) of the category Sh(C).”

**Sources:**

- [The Stacks Project, Sites, Lemma 7.11.2.](https://stacks.math.columbia.edu/tag/00WN)

### Sheafification as sections of the germ space leaves stalks unchanged

**Remember:** The same space of germs has the same fibers.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54B40. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** The sheafification of a presheaf F on X is the sheaf of continuous sections of its space of germs (our own). This space is the disjoint union of the stalks of F. Each section s over an open U gives a basic open set, the germs of s at points of U (our own).

**Problem.** On a topological space, sheafifying a presheaf of sets does not change its stalks.

**How the definition helps.** Evaluation at x sends germs of continuous sections to the fiber over x, which is the stalk Fₓ (our own). It is a bijection: each point of the fiber lies on a basic open that maps homeomorphically onto its domain, and two continuous sections that agree at x agree near x (our own).

**Paper or page:** [Sites Modules, Lemma 18.36.1.](https://stacks.math.columbia.edu/tag/04EN). It says: “We have (F♯)ₚ = Fₚ for any presheaf of sets on C.”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.36.1.](https://stacks.math.columbia.edu/tag/04EN)

### Stable isomorphism ignores cover refinements

**Remember:** A line bundle on the common refinement intertwines the two gerbes.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** A stable isomorphism between a bundle gerbe P over a cover Y and a bundle gerbe Q over a cover Z of X is a line bundle L on Y ×ₓ Z that intertwines them. For lifts (y,z), (y′,z′) of one point it gives P(y,y′) ⊗ L(y′,z′) ≅ L(y,z) ⊗ Q(z,z′), compatibly with gerbe multiplication (our own).

**Problem.** Refining the cover of a bundle gerbe gives a stably isomorphic presentation.

**How the definition helps.** For a refinement map r : Z → Y, the refined gerbe is Q(z,z′) = P(r(z),r(z′)), and L(y,z) = P(y,r(z)) works (our own). Gerbe multiplication turns both sides into P(y,r(z′)), and associativity gives the compatibility (our own).

**nLab:** [bundle gerbe](https://ncatlab.org/nlab/show/bundle+gerbe). It says: “by refining, if necessary, the surjective submersion Y by a good open cover”

**Sources:**

- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)

### Tensor products characterized by bilinear maps commute with sheafification

**Remember:** Maps out of a tensor product are bilinear maps.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** Over a sheaf of commutative rings, the tensor product of F and G represents bilinear maps from F × G into arbitrary module sheaves.

**Problem.** For module presheaves F and G over a commutative ring presheaf O, sheafifying their sectionwise tensor product gives F♯ ⊗ G♯ over O♯.

**How the definition helps.** Both sides represent presheaf bilinear maps F × G → H for each module sheaf H (our own). Sheafification preserves products, so each such map extends uniquely and retains the bilinearity identities (our own).

**Paper or page:** [Sites Modules, Lemma 18.26.1.](https://stacks.math.columbia.edu/tag/0GMW). It says: “Then F♯ ⊗₍O♯₎ G♯ is equal to (F ⊗ₚ,ₒ G)♯.”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.26.1.](https://stacks.math.columbia.edu/tag/0GMW)

### Defining K₀ of triangulated categories by triangles makes shifts negate classes

**Remember:** In each triangle, the middle class equals the sum of the outer classes.

*True by definition.* MSC 18F25 (Algebraic K-theory and L-theory (category-theoretic aspects)), 18G80. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** For an essentially small triangulated category, K₀ has one abelian group generator per isomorphism class of objects. Impose \[B\] = \[A\] + \[C\] for every distinguished triangle A → B → C → ΣA.

**Problem.** In K₀ of a triangulated category, \[ΣA\] = −\[A\] for every object A. Hence every element is the class of a single object, since \[A\] − \[B\] = \[A ⊕ ΣB\].

**How the definition helps.** The zero triangle gives \[0\] = 0, and the triangle A → 0 → ΣA gives \[ΣA\] = −\[A\]. Split triangles give \[A ⊕ B\] = \[A\] + \[B\], so shifts and sums realize every integer combination (our own).

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “\[A\] + \[Σ A\] = 0”

**Sources:** none listed. No primary source with a working link was found.

### Waldhausen's S• construction makes short exact sequences add in K-theory

**Remember:** Each cofiber sequence is a 2-simplex with faces sub, whole and quotient.

*Makes the theorem clean to state or prove.* MSC 18F25 (Algebraic K-theory and L-theory (category-theoretic aspects)), 18N45. arXiv math.KT. Level 3: graduate.

**Definition.** For a Waldhausen category C, the n-simplices of S•C are chains of n cofibrations starting at 0, with chosen quotients, and K(C) is the loop space of the realization of wS•C (our own). The 2-simplices of S•C are cofiber sequences A₁ ↣ A₂ ↠ A₂/A₁, whose three faces are A₂/A₁, A₂ and A₁ (our own).

**Problem.** Waldhausen K-theory gives a spectrum whose K₀ is the Grothendieck group. For a natural cofiber sequence of exact functors, the middle map on each K-group equals the sum of the outer maps.

**How the definition helps.** Each 2-simplex gives a path in the loop space from the middle class to the sum of the outer classes, which is the Grothendieck relation in K₀ (our own). Iterating S• gives the spectrum, and Waldhausen’s additivity theorem gives the induced-map identity in every degree (our own).

**nLab:** [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction), [Quillen Q-construction](https://ncatlab.org/nlab/show/Quillen+Q-construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “The difference is that it imposes additivity over all cofiber sequences, not just over direct sums”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces, Lecture Notes in Math. 1126, Springer (1985) 318–419](https://doi.org/10.1007/BFb0074449)
- [Daniel Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973) 85–147](https://doi.org/10.1007/BFb0067053)

### The Grothendieck group makes Riemann–Roch a comparison of two homomorphisms

**Remember:** Euler characteristics add over exact sequences, so they live on K₀.

*Makes the theorem clean to state or prove.* MSC 18F30 (Grothendieck groups (category-theoretic aspects)), 14C40. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** The Grothendieck group K₀(X) is the abelian group generated by classes of coherent sheaves on X, with one relation \[B\] = \[A\] + \[C\] for each short exact sequence 0 → A → B → C → 0. So any quantity that adds over short exact sequences is a homomorphism on K₀(X).

**Problem.** For a vector bundle E on a smooth projective variety X, Hirzebruch–Riemann–Roch says χ(E) = deg(ch(E)·td(X)), where ch is the Chern character and td is the Todd class.

**How the definition helps.** Euler characteristic and Chern character add over short exact sequences, and multiplying by td(X) and taking degree are additive, so both sides are homomorphisms on K₀(X) (our own). Hirzebruch–Riemann–Roch says these two homomorphisms agree (our own).

**Wikipedia:** [Grothendieck–Riemann–Roch theorem](https://en.wikipedia.org/wiki/Grothendieck%E2%80%93Riemann%E2%80%93Roch_theorem). It says: “the Grothendieck group K0(X) of bounded complexes of coherent sheaves is canonically isomorphic to the Grothendieck group of bounded complexes of finite-rank vector bundles.”

**Paper or page:** [Grothendieck's proof of Hirzebruch-Riemann-Roch theorem](https://arxiv.org/abs/2511.06880v2). It says: “we introduce the two modern tools necessary for the generalization: the Grothendieck group K₀(X) as the natural setting for the Euler characteristic, and the Chow ring A•(X) as the setting for cycles and intersection theory.”

**Sources:**

- [Giacomo Graziani, Grothendieck's proof of Hirzebruch-Riemann-Roch theorem, arXiv:2511.06880v2 (2025)](https://arxiv.org/abs/2511.06880v2)
- [A. Borel, J.-P. Serre, Le théorème de Riemann-Roch, Bulletin de la Société mathématique de France 86 (1958)](https://doi.org/10.24033/bsmf.1500)

### An integration axiom gives the fundamental theorem of calculus synthetically

**Remember:** Every function has exactly one antiderivative that starts at zero.

*True by definition.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 58A03, 26A42. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** On an interval \[a,b\] of the synthetic line R, assume each f : \[a,b\] → R has exactly one primitive vanishing at a. Define ∫ₐf to be this primitive.

**Problem.** In synthetic differential geometry with the integration axiom, the derivative of ∫ₐf is f. And if F′ = f on \[a,b\], then ∫ₐf = F − F(a).

**How the definition helps.** By definition, (∫ₐf)′ = f. If F′ = f, then F − F(a) has derivative f and vanishes at a, so uniqueness gives the second formula (our own).

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus), [integration axiom](https://ncatlab.org/nlab/show/integration+axiom). It says: “Conversely, in synthetic differential geometry, we essentially define an indefinite integral to be an antiderivative.”

**Sources:**

- [A. Kock, Synthetic Differential Geometry, Cambridge University Press (2006)](https://doi.org/10.1017/CBO9780511550812)

### The Kock–Lawvere axiom makes the tangent bundle a function space

**Remember:** Every infinitesimal path in the line has a unique starting point and slope.

*True by definition.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 58A03. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** The Kock–Lawvere axiom says every map from the infinitesimals D = {ε ∈ R ∣ ε² = 0} to the line R is uniquely affine. That is, (a,b) ↦ (ε ↦ a + εb) is an isomorphism R × R → Rᴰ. The tangent bundle of X is the space Xᴰ of infinitesimal paths, mapped to X by evaluation at zero.

**Problem.** Under the Kock–Lawvere axiom, every g : D → R is uniquely g(ε) = g(0) + εd, and for f : R → R the slope on D is f′(0). The tangent bundle of X is Xᴰ with evaluation at zero.

**How the definition helps.** The axiom gives each g a unique constant a and slope b, and evaluation at zero picks out a = g(0) (our own). Applied to the restriction of f to D, the slope is f′(0) (our own). Evaluation sends every infinitesimal path to its base point.

**nLab:** [Kock-Lawvere axiom](https://ncatlab.org/nlab/show/Kock-Lawvere+axiom), [synthetic differential geometry](https://ncatlab.org/nlab/show/synthetic+differential+geometry). It says: “This linearity condition is what in synthetic differential geometry allows to identify the tangent bundle T X → X of a space X with its fiberwise linearity by simply the internal hom object X<sup>D</sup> → X.”

**Sources:**

- [Anders Kock, A simple axiomatics for differentiation, Mathematica Scandinavica 40 (1977) 183–193](https://doi.org/10.7146/math.scand.a-11687)

### In a convenient category of spaces, geometric realization preserves products

**Remember:** Convenient means CW complexes, all limits and colimits, and mapping spaces.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 55U10, 54D50. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A convenient category of spaces is a full subcategory of Top that contains all CW complexes, has all small limits and colimits, and is cartesian closed. Cartesian closed means X × − has a right adjoint, the mapping space, so products preserve colimits in each variable.

**Problem.** Geometric realization into a convenient category of spaces preserves finite products, using products in that category.

**How the definition helps.** Every realization is a colimit of simplices, and products preserve colimits in each variable, so the claim reduces to a product of two simplices (our own). The standard triangulation identifies that product with the realization of the simplicial product (our own).

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “That geometric realization preserves products is sensitive to whether we think of it as valued in Top or in a convenient category Space. In particular, the proof uses cartesian closure of Space in an essential way”

**Sources:**

- [Rudolf Fritsch, Renzo A. Piccinini, Cellular structures in topology, Cambridge University Press 1990](https://doi.org/10.1017/CBO9780511983948)

### Any intersection of dense sublocales is dense

**Remember:** Every dense sublocale contains the smallest one, the double negation.

*Makes the theorem clean to state or prove.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.GN. Level 3: graduate.

**Definition.** A sublocale is dense when its nucleus j fixes the bottom open, j(0) = 0. Every dense sublocale contains the double-negation sublocale, the smallest dense sublocale (our own).

**Problem.** Any intersection of dense sublocales of a locale is dense.

**How the definition helps.** An intersection of sublocales that all contain the double-negation sublocale still contains it, so it is dense (our own).

**nLab:** [locale](https://ncatlab.org/nlab/show/locale), [dense subspace](https://ncatlab.org/nlab/show/dense+subspace). It says: “in the pointfree setting arbitrary intersections of dense sublocales are always dense.”

**Sources:**

- [John R. Isbell, Atomless parts of spaces, Math. Scand. 31 (1972) 5–32 (cited on the nLab page as the paper that introduced the term locale)](https://doi.org/10.7146/math.scand.a-11409)

### Frame presentations give a nontrivial pointless locale of surjections ℕ ↠ ℝ

**Remember:** The equations allow nontrivial opens, but no actual surjection.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** Present a frame by generators U(n,a), read as ‘n goes to a’, for n ∈ ℕ and a ∈ ℝ (our own). The relations say each n goes to exactly one a: for fixed n, the U(n,a) are pairwise disjoint with join one. They also say each a is hit: ⋁ₙ U(n,a) = 1 for each a (our own).

**Problem.** The locale of surjections ℕ → ℝ is nontrivial, meaning its top and bottom opens differ, yet it has no points.

**How the definition helps.** A point would choose one value per integer and hit every real, contradicting Cantor’s theorem (our own). In the regular-open completion of finite partial maps ordered by extension, interpret U(n,a) by the condition n ↦ a (our own). Extensions can assign any unused input and hit any prescribed real, so the joins hold in this nontrivial frame (our own).

**Wikipedia:** [Pointless topology](https://en.wikipedia.org/wiki/Pointless_topology). It says: “Of course, there are no such surjective functions ℕ → ℝ, and this is not a spatial locale.”

**Sources:** none listed. No primary source with a working link was found.

### Heine–Borel holds constructively for the locale of real numbers

**Remember:** Cover the interval by joining its opens with the two exterior rays.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D30. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** In the locale of real numbers, a family of opens covers the closed interval \[0,1\] when its join with (−∞,0) and (1,∞) is the whole line. Compactness of \[0,1\] asks that every such family has a finite subfamily that still covers in this sense (our own).

**Problem.** In constructive mathematics, the closed unit interval in the locale of real numbers is compact (Heine–Borel). For the set of real numbers, the theorem can fail constructively.

**How the definition helps.** Covers are equations between opens, not statements about points, so the localic Heine–Borel theorem proves the finite-subcover property constructively. For the set of real numbers, a pointwise cover need not give a frame cover without an extra constructive principle (our own).

**nLab:** [locale of real numbers](https://ncatlab.org/nlab/show/locale+of+real+numbers), [locale](https://ncatlab.org/nlab/show/locale). It says: “But the beauty of the localic approach is that Heine--Borel necessarily holds when interpreted as a statement about opens in the locale of real numbers.”

**Sources:**

- [Ingo Blechschmidt, Generalized spaces for constructive algebra, arXiv:2012.13850 (2020), Section 2.1 (the locale of real numbers)](https://arxiv.org/abs/2012.13850)

### In sober spaces, continuous maps are the same as frame homomorphisms

**Remember:** Every point the opens can describe exists, exactly once.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A space X is sober if every frame homomorphism from its opens to the two truth values comes from exactly one point x, as ‘the opens containing x’. Equivalently, every completely prime filter of opens, one that contains a member of each union it contains, is the set of opens around exactly one point.

**Problem.** If Y is sober, every frame homomorphism O(Y) → O(X) is the inverse-image map of exactly one continuous map X → Y.

**How the definition helps.** For each x, the opens V with x ∈ h(V) form a completely prime filter since h preserves joins and finite meets (our own). Sobriety supplies its unique point f(x), giving f⁻¹(V) = h(V) for every open V (our own). This proves continuity and uniqueness (our own).

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “It means that continuous functions between sober topological spaces are entirely determined by their inverse image functions on the frames of opens, disregarding the underlying sets of points.”

**Sources:**

- [Peter T. Johnstone, Stone Spaces, Cambridge Studies in Advanced Mathematics 3, Cambridge University Press (1982; paperback 1986), Section II.1](https://openlibrary.org/isbn/9780521337793)
- [The Stacks Project, Section 5.8 (Tag 004U), Irreducible components](https://stacks.math.columbia.edu/tag/004U)

### Locales make Stone duality hold without the ultrafilter theorem

**Remember:** Recover all opens as ideals of compact opens.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 06E15. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** A coherent locale has a frame generated under joins by its compact opens, with compact opens closed under finite meets, including the top. Its frame is then the lattice of ideals of its compact opens, so no points are needed (our own). A Stone locale is coherent with a Boolean lattice of compact opens (our own).

**Problem.** Constructively, coherent locales with coherent maps are dual to bounded distributive lattices with bounded lattice homomorphisms. Stone locales are dual to Boolean algebras.

**How the definition helps.** Ideal completion rebuilds the frame from the lattice of compact opens, and the compact elements of an ideal completion are exactly the principal ideals (our own). Neither step chooses points, so no ultrafilter theorem is needed, and restricting to Boolean lattices gives the Stone case (our own).

**nLab:** [Stone duality](https://ncatlab.org/nlab/show/Stone+duality). It says: “In many cases, one requires the ultrafilter theorem (or other forms of the axiom of choice) in order for the duality to hold when applied to topological spaces, while the duality holds for locales even in constructive mathematics.”

**Sources:**

- [Peter T. Johnstone, The point of pointless topology, Bulletin of the AMS 8 (1983) 41–53](https://doi.org/10.1090/S0273-0979-1983-15080-2)

### Open sublocales defined by a universal property pull back to open sublocales

**Remember:** A map lands in an open exactly when its preimage is everything.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** For each open u of a locale Y, its open sublocale represents the maps g into Y satisfying g\*(u) = 1 (our own).

**Problem.** For every locale map f and every open u of its target, the pullback of the open sublocale for u corresponds to f\*(u).

**How the definition helps.** A map g into X factors through the pullback exactly when (f ∘ g)\*(u) = 1 (our own). Since (f ∘ g)\*(u) = g\*(f\*(u)), the pullback represents the open f\*(u) (our own).

**nLab:** [sublocale](https://ncatlab.org/nlab/show/sublocale), [locale](https://ncatlab.org/nlab/show/locale). It says: “is the largest open which agrees with V on U.”

**Sources:** none listed. No primary source with a working link was found.

### Points as maps from the one-point locale make points preserve limits

**Remember:** A point of a limit is a compatible family of points.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A point of a locale X is a locale map into X from the one-point locale, whose frame is the truth values.

**Problem.** The set of points of a small limit of locales is the limit of their sets of points.

**How the definition helps.** Points are maps out of one fixed locale, and maps out of a fixed object turn limits into limits of sets (our own). The work moves to constructing limits of locales and matching maps from the one-point locale with completely prime filters (our own).

**nLab:** [point of a locale](https://ncatlab.org/nlab/show/point+of+a+locale), [locale](https://ncatlab.org/nlab/show/locale). It says: “A point of X is a continuous map f: 1 → X”

**Sources:** none listed. No primary source with a working link was found.

### Sublocales given by nuclei make joins of sublocales pointwise meets

**Remember:** To join sublocales, take the meet of their nuclei.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** Sublocales of a frame correspond to nuclei, the inflationary, idempotent maps that preserve finite meets, with a larger sublocale for a smaller nucleus.

**Problem.** The nucleus of the join of a family of sublocales is the pointwise meet of their nuclei.

**How the definition helps.** Reversal of order reduces the join to a meet of nuclei (our own). Their pointwise meet j is inflationary and preserves finite meets (our own). For each i, j(j(a)) ≤ jᵢ(jᵢ(a)) = jᵢ(a), so inflationarity gives idempotence (our own).

**nLab:** [nucleus](https://ncatlab.org/nlab/show/nucleus), [sublocale](https://ncatlab.org/nlab/show/sublocale). It says: “we define a sublocale of L to be a quotient frame of L, which corresponds to a nucleus on L as above.”

**Sources:**

- [Jorge Picado and Aleš Pultr, Frames and Locales, Chapter III, Birkhäuser (2012)](https://doi.org/10.1007/978-3-0348-0154-6)

### The Sierpinski locale as a free frame classifies opens of locales

**Remember:** One free frame generator can name any open.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** The Sierpinski locale has the free frame on one generator as its frame of opens (our own).

**Problem.** For any locale X, locale maps from X to the Sierpinski locale correspond naturally to the opens of X.

**How the definition helps.** A locale map into Sierpinski corresponds to a frame map out of that free frame (our own). Each open of the domain gives exactly one such map by specifying the generator’s image, naturally under inverse image (our own).

**nLab:** [Sierpinski space](https://ncatlab.org/nlab/show/Sierpinski+space), [locale](https://ncatlab.org/nlab/show/locale). It says: “The Sierpinski space S is a classifier for open subspaces of a topological space X”

**Sources:** none listed. No primary source with a working link was found.

### Tychonoff's theorem holds for locales without the axiom of choice

**Remember:** Test compactness using directed joins in the coproduct frame.

*Makes the theorem clean to state or prove.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D30. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** A locale is compact if every directed family of opens whose join is the top open contains the top open. Products of locales are coproducts of their frames, built from opens and not from points.

**Problem.** Without the axiom of choice, a product of any family of compact locales is compact (Tychonoff's theorem).

**How the definition helps.** The product frame is presented by generators and relations, so compactness of the product is a question about opens, not points (our own). The constructive localic Tychonoff theorem, proved using preframes, answers it without the axiom of choice (our own).

**nLab:** [Tychonoff theorem for locales](https://ncatlab.org/nlab/show/Tychonoff+theorem+for+locales), [Tychonoff theorem](https://ncatlab.org/nlab/show/Tychonoff+theorem). It says: “even in constructive mathematics, a Cartesian product of locales is compact if each of the locales is compact. From that perspective, the statement equivalent to the axiom of choice is this: a product of locales is spatial”

**Sources:**

- [Peter Johnstone, Steven Vickers, Preframe presentations present, in: Category Theory (Como 1990), Lecture Notes in Mathematics 1488, Springer (1991) 193–212](https://doi.org/10.1007/BFb0084221)

### Defining injectives by exact Hom makes right adjoints preserve them

**Remember:** Maps into u(I) are maps into I out of v.

*True by definition.* MSC 18G05 (Projectives and injectives (category-theoretic aspects)), 18A40. arXiv math.KT. Level 3: graduate.

**Definition.** An object I is injective if the functor Hom(−,I) of maps into I is exact.

**Problem.** Let u be a right adjoint of a functor v between abelian categories. If v is exact, then u sends injective objects to injective objects.

**How the definition helps.** By adjunction, Hom(−,u(I)) equals Hom(v(−),I), a composite of two exact functors, so it is exact (our own). In fact it is enough that v preserves monomorphisms (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.29.1](https://stacks.math.columbia.edu/tag/015Z). It says: “u transforms injectives into injectives.”

**Sources:** none listed. No primary source with a working link was found.

### Posets that are injective for order embeddings are the complete lattices

**Remember:** Extend along embeddings only, and complete lattices appear.

*Rules out counterexamples.* MSC 18G05 (Projectives and injectives (category-theoretic aspects)), 06B23, 18B35. arXiv math.CT. Level 3: graduate.

**Definition.** A poset I is injective for order embeddings if every monotone map A → I extends along every order embedding A → B. An order embedding preserves and reflects order.

**Problem.** A poset is injective relative to order embeddings exactly when it is a complete lattice. Against all monomorphisms, only the one-point poset is injective.

**How the definition helps.** In a complete lattice, extend a map to b by taking the join of the values at embedded elements below b (our own). Conversely, extending the identity along the embedding into down-sets gives a retraction from a complete lattice, which supplies all joins (our own). Against all monomorphisms, the bijection from two unordered points onto a two-element chain makes any two values equal, and the empty poset forces one value (our own).

**nLab:** [injective object](https://ncatlab.org/nlab/show/injective+object). It says: “However, if we require injectives to satisfy the extension property only with respect to regular monomorphisms, then the injective objects are precisely the complete lattices.”

**Sources:**

- [B. Banaschewski, G. Bruns, Categorical characterization of the MacNeille completion, Archiv der Mathematik 18 (1967) 369–377](https://doi.org/10.1007/BF01898828)

### A two-term product complex makes higher derived limits of towers vanish

**Remember:** R lim lives on two terms, so nothing survives above degree one.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** For a tower of abelian groups with maps fₙ : Aₙ₊₁ → Aₙ, R lim is computed by a complex with only two terms: ∏ₙ Aₙ in degrees zero and one. Its differential is ∂(a)ₙ = aₙ − fₙ(aₙ₊₁).

**Problem.** For every tower of abelian groups, Rᵖlim Aₙ = 0 for all p ≥ 2. So a short exact sequence of towers gives a six-term exact sequence from lim to lim¹ that ends in 0.

**How the definition helps.** A complex with only two terms has cohomology in only two degrees, so all higher derived limits vanish at once. The six-term sequence is then the long exact sequence, cut off after lim¹ (our own). The work moves into showing that the product complex computes R lim, using that ∂ is onto for injective towers (our own).

**nLab:** [lim<sup>1</sup> and Milnor sequences](https://ncatlab.org/nlab/show/lim%5E1+and+Milnor+sequences). It says: “The notation "lim¹" is common notation for the first derived functor R¹lim of the limit functor.”

**Paper or page:** [More Algebra, Lemma 15.87.1.](https://stacks.math.columbia.edu/tag/07KW). It says: “for any (Aₙ) in Ab(N) we have Rᵖlim Aₙ = 0 for p &gt; 1, the object Rlim Aₙ of D(Ab) is represented by the complex ∏ Aₙ → ∏ Aₙ, (xₙ) ↦ (xₙ − fₙ₊₁(xₙ₊₁))”

**Sources:** none listed. No primary source with a working link was found.

### Acyclic objects compute derived functors as well as injective objects do

**Remember:** Acyclic terms have no higher derived functors.

*Makes the theorem clean to state or prove.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** For a left exact additive functor F between abelian categories, an object J is F-acyclic when all its higher right derived functors RⁱF(J), i &gt; 0, vanish. Injective objects are F-acyclic, and so are many others, such as flasque sheaves for global sections.

**Problem.** An F-acyclic resolution J• of A computes RⁱF(A) as Hⁱ(F(J•)) for every i ≥ 0. Flasque resolutions compute sheaf cohomology, and the dual statement gives flat resolutions for Tor.

**How the definition helps.** Split the resolution into short exact sequences; since its terms have no higher derived functors, the long exact sequences shift RⁱF(A) down to Hⁱ(F(J•)) (our own). Flasque sheaves are acyclic for global sections, and the dual argument with flat modules gives Tor (our own).

**nLab:** [acyclic object](https://ncatlab.org/nlab/show/acyclic+object). It says: “A resolution by F-acyclic objects serves to compute the derived functor of F.”

**Paper or page:** [Derived, Lemma 13.16.7.](https://stacks.math.columbia.edu/tag/015E). It says: “Let A• be a bounded below complex of right F-acyclic objects such that RF is defined at A•. The canonical map F(A•) ⟶ RF(A•) is an isomorphism in D⁺(B), i.e., A• computes RF.”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived functors as universal δ-functors makes natural maps extend uniquely

**Remember:** A map in degree zero fixes the whole map of derived functors.

*True by definition. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.KT. Level 3: graduate.

**Definition.** A universal cohomological δ-functor T extending F has T⁰ = F and natural connecting maps giving long exact sequences for short exact sequences. For every cohomological δ-functor S, every natural map F → S⁰ extends uniquely to a morphism T → S respecting connecting maps (our own).

**Problem.** Between abelian categories, a natural map between left exact additive functors extends uniquely to their right derived δ-functors when the source has enough injectives.

**How the definition helps.** Under this definition, the extension is the universal property applied to the degree-zero map (our own). The work goes into proving that the resolution construction is universal, using embeddings into injectives (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.12.4](https://stacks.math.columbia.edu/tag/010T). It says: “Then F is a universal δ-functor.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d’algèbre homologique, I (1957)](https://doi.org/10.2748/tmj/1178244839)

### Defining derived functors by a universal property gives a canonical composite comparison

**Remember:** Compose the two comparison maps, then use the universal property.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** A total right derived functor RF is the best approximation of F on derived categories (our own). It comes with a map QF → RF Q, Q being passage to the derived category, through which every map QF → HQ factors uniquely (our own).

**Problem.** Suppose the total right derived functors of F, G and their composite all exist. Then there is a canonical map from the derived functor of the composite to the composite of the derived functors.

**How the definition helps.** Composing the comparisons gives QGF → RG QF → RG RF Q (our own). The universal property of R(GF) yields the unique comparison R(GF) → RG RF (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.14.16](https://stacks.math.columbia.edu/tag/05T2). It says: “there is a canonical transformation of functors”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived functors universally makes each exact functor its own derived functor

**Remember:** An exact functor already preserves quasi-isomorphisms.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** A total right derived functor RF is the best approximation of F on derived categories (our own). It comes with a map QF → RF Q, Q being passage to the derived category, through which every map QF → HQ factors uniquely (our own).

**Problem.** For an exact functor F between abelian categories, the total right derived functor RF is F applied to each complex.

**How the definition helps.** An exact functor commutes with cohomology, so it sends quasi-isomorphisms to quasi-isomorphisms and already passes to derived categories (our own). A functor that already passes to the derived category is its own universal approximation (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.16.9](https://stacks.math.columbia.edu/tag/015F). It says: “every complex computes RF, in other words, the canonical map F(K•) → RF(K•) is an isomorphism for all complexes”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived limits by a product cone makes the Milnor sequence immediate

**Remember:** The two ends are the kernel and cokernel of the product difference map.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** For a countable tower of complexes Kₙ with transition maps fₙ, define its derived limit as Cone(∂)\[−1\], the shifted cone of the difference map ∂(x)ₙ = xₙ − fₙ(xₙ₊₁) on ∏ₙ Kₙ (our own).

**Problem.** For a countable tower of complexes of abelian groups, each cohomology group Hᵏ of the derived limit sits in a short exact sequence 0 → lim¹ Hᵏ⁻¹ → Hᵏ → lim Hᵏ → 0. Here lim¹ is the first derived functor of the inverse limit.

**How the definition helps.** The defining triangle gives a long exact sequence, and since products are exact, its other terms are products of cohomology with the difference map between them (our own). That map has kernel lim and cokernel lim¹, which splits the long sequence into these short ones (our own). The work goes into proving that this triangle computes the derived limit from injective resolutions (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.87.9](https://stacks.math.columbia.edu/tag/07KX). It says: “is a derived limit of the inverse system”

**Sources:** none listed. No primary source with a working link was found.

### Degreewise split horseshoe resolutions give derived functors long exact sequences

**Remember:** Split in each degree, so every additive functor keeps the sequence exact.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** A horseshoe resolution of a short exact sequence 0 → A′ → A → A″ → 0 is a short exact sequence of projective resolutions over it that splits in each degree. Its middle term is P′ₙ ⊕ P″ₙ, with the inclusion and the projection as maps.

**Problem.** Let F be additive between abelian categories, with enough projectives in the source. Every short exact sequence induces the long exact sequence of left derived functors ending in L₀F(A″) → 0.

**How the definition helps.** The horseshoe lemma supplies the resolution, and every additive functor preserves its degreewise splittings (our own). Taking the long exact homology sequence after applying F gives the asserted sequence of derived functors (our own).

**nLab:** [derived functor in homological algebra](https://ncatlab.org/nlab/show/derived+functor+in+homological+algebra). It says: “Since Aⁿ is an injective object for all n, its component sequences 0 → Aⁿ → Bⁿ → Cⁿ → 0 are indeed split exact sequences”

**Wikipedia:** [Horseshoe lemma](https://en.wikipedia.org/wiki/Horseshoe_lemma). It says: “a resolution of A can be built up inductively with the nth item in the resolution equal to the coproduct of the nth items in the resolutions of A′ and A″.”

**Sources:**

- [Henri Cartan and Samuel Eilenberg, Homological Algebra, Princeton University Press (1956)](https://doi.org/10.1515/9781400883844)

### Derived functors defined on the derived category keep adjunctions

**Remember:** Derived functors are best approximations, and best approximations of adjoints stay adjoint.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** The right derived functor RF is the best approximation of F on derived categories from one side: it comes with a natural map from F to RF, and every other such map from F factors through it uniquely (our own). The left derived functor LG is the best approximation of G from the other side (our own).

**Problem.** Let F and G be additive functors between abelian categories, with G left adjoint to F. If RF : D(A) → D(B) and LG : D(B) → D(A) both exist, then LG is left adjoint to RF.

**How the definition helps.** The universal properties of RF and LG let the unit and counit of the adjunction between G and F pass to the derived functors (our own). The derived adjunction theorem carries out this check.

**Paper or page:** [Derived, Lemma 13.30.3.](https://stacks.math.columbia.edu/tag/09T5). It says: “If the derived functors RF : D(A) → D(B) and LG : D(B) → D(A) exist, then RF is a right adjoint to LG.”

**Sources:** none listed. No primary source with a working link was found.

### Finite cohomological dimension extends derived functors to unbounded complexes

**Remember:** One bound on every derived functor tames unbounded complexes.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** Assume F is left exact and every object embeds in a right F-acyclic object. Then F has finite cohomological dimension when one integer d ≥ 0 bounds all its derived functors: RⁿF(A) = 0 for every object A and every n &gt; d.

**Problem.** If F has finite cohomological dimension, then RF exists on the whole unbounded derived category D(A), and every complex of F-acyclic objects computes it. Without the bound, an unbounded complex of acyclic objects can give the wrong answer.

**How the definition helps.** The uniform bound lets the proof reduce an unbounded complex to bounded truncations, degree by degree (our own). Over ℤ/4, the exact complex ⋯ → ℤ/4 → ℤ/4 → ⋯ of multiplication by 2 has injective terms, but Hom(ℤ/2,−) turns it into ℤ/2 in every degree with zero differentials (our own). This functor has no bound, because Extⁿ(ℤ/2,ℤ/2) ≠ 0 for every n (our own).

**Paper or page:** [Derived, Lemma 13.32.2.](https://stacks.math.columbia.edu/tag/07K7). It says: “there exists an integer n ≥ 0 such that RⁿF = 0, Then RF : D(A) → D(B) exists, any complex consisting of right acyclic objects for F computes RF”

**Sources:** none listed. No primary source with a working link was found.

### K-injective complexes give derived functors on unbounded complexes

**Remember:** Acyclic complexes are invisible to maps into a K-injective complex.

*Makes the theorem clean to state or prove.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80, 18G35. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** A complex I is K-injective if every chain map from an acyclic complex into I is homotopic to zero. So, up to homotopy, maps into I cannot see acyclic complexes, and they already are maps in the derived category (our own).

**Problem.** In a Grothendieck abelian category, every complex, bounded or not, has a K-injective resolution. So right derived functors such as RHom and derived pushforward exist on the whole unbounded derived category.

**How the definition helps.** Because maps into a K-injective complex already compute derived-category maps, applying a functor to a K-injective replacement gives its right derived functor (our own). The K-injective resolution theorem for Grothendieck abelian categories supplies such a replacement for every complex (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.31.7](https://stacks.math.columbia.edu/tag/070K), [Stacks Project, Injectives, Theorem 19.12.6](https://stacks.math.columbia.edu/tag/079P). It says: “Assume every complex has a quasi-isomorphism towards a K-injective complex. Then any exact functor F : K(𝒜) → 𝒟′ of triangulated categories has a right derived functor RF : D(𝒜) ⟶ 𝒟′”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 070K (Derived, Lemma 13.31.7)](https://stacks.math.columbia.edu/tag/070K)
- [The Stacks Project Authors, The Stacks Project, Tag 079P (Injectives, Theorem 19.12.6)](https://stacks.math.columbia.edu/tag/079P)

### Projective complexes make chain maps into exact complexes null-homotopic

**Remember:** Projective terms lift each map back along the exact differential.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G35, 18G05. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** A chain complex in degrees n ≥ 0 is degreewise projective when each term is projective: every map from it into the target of an epimorphism lifts through that epimorphism. So a map from a term into the cycles of an exact complex can always be lifted back one degree along the differential (our own).

**Problem.** Every chain map, in non-negative degrees, from a degreewise projective complex into an exact complex is null-homotopic. So projective resolutions are unique up to chain homotopy.

**How the definition helps.** Build the null-homotopy upward from degree 0: exactness makes the differential map onto the cycles, and projectivity lifts the leftover map through it (our own). Applied to augmented resolutions, this makes any two comparison maps of projective resolutions chain homotopic (our own). Without projectivity this fails: the identity of ℤ/2, mapped to the end of the exact complex ℤ →² ℤ → ℤ/2, does not lift to ℤ (our own).

**nLab:** [projective resolution](https://ncatlab.org/nlab/show/projective+resolution), [homotopy category of chain complexes](https://ncatlab.org/nlab/show/homotopy+category+of+chain+complexes). It says: “This points to the problem: the components of the domain chain complex are not free enough to admit sufficiently many maps out of it.”

**Sources:**

- [Peter J. Hilton, Urs Stammbach, A Course in Homological Algebra, Graduate Texts in Mathematics 4, Springer (1971; 2nd edition 1997)](https://doi.org/10.1007/978-1-4419-8566-8)

### Requiring injective terms makes derived functors independent of the resolution

**Remember:** Injective resolutions are all homotopy equivalent, so F cannot tell them apart.

*Rules out counterexamples.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** An injective resolution of X is an exact sequence 0 → X → I⁰ → I¹ → ⋯ whose terms are injective, meaning Hom(−, Iⁿ) keeps short exact sequences exact. Any two injective resolutions of X are then linked by homotopy equivalences over X that are unique up to homotopy (our own).

**Problem.** For a left exact additive functor F, any two injective resolutions I• of X give canonically isomorphic groups Hⁱ(F(I•)), the right derived functors RⁱF(X). Arbitrary resolutions can give different groups.

**How the definition helps.** The additive functor F keeps homotopies, so it turns the homotopy equivalences between two injective resolutions into canonical isomorphisms on cohomology (our own). The resolution of ℤ/2 by itself gives H¹ = 0 for Hom(ℤ/2,−) (our own). The injective resolution ℚ/ℤ → ℚ/ℤ by multiplication by 2 gives H¹ = ℤ/2 instead (our own).

**Wikipedia:** [Derived functor](https://en.wikipedia.org/wiki/Derived_functor). It says: “various things have to be checked: the result does not depend on the given injective resolution of X, and any morphism X → Y naturally yields a morphism RⁱF(X) → RⁱF(Y), so that we indeed obtain a functor.”

**Sources:**

- [Henri Cartan and Samuel Eilenberg, Homological Algebra, Princeton University Press (1956)](https://doi.org/10.1515/9781400883844)

### Defining Ext as derived-category maps makes the Yoneda product associative

**Remember:** A Yoneda product is composition with the degrees lined up.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** Define Extⁿ(A,B) as the maps from A to B shifted by n in the derived category, Hom(A, B\[n\]). The product of α in Extⁿ(A,B) and β in Extᵐ(B,C) is the composite β\[n\] ∘ α.

**Problem.** The Yoneda product on Ext groups is associative.

**How the definition helps.** The product is composition, and shifting is a functor, so both bracketings of three classes give the same composite γ\[n+m\] ∘ β\[n\] ∘ α (our own). The remaining work is to show that these groups and products agree with the older Ext groups from resolutions or spliced sequences (our own).

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “which is simply the composition of morphisms in the derived category.”

**Sources:** none listed. No primary source with a working link was found.

### Defining flatness by vanishing Tor makes flat modules closed under extensions

**Remember:** Flatness is Tor₁ vanishing, so long exact sequences decide it.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 13C11. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A left R-module M is flat exactly when Tor₁ᴿ(X,M) vanishes for every right R-module X (our own).

**Problem.** Let 0 → A → B → C → 0 be a short exact sequence of modules with C flat. Then A is flat if and only if B is flat. If A and B are flat, C need not be flat.

**How the definition helps.** Flatness of C kills Tor₂(X,C) and Tor₁(X,C), so the long exact sequence makes Tor₁(X,A) → Tor₁(X,B) an isomorphism for every X (our own). So A is flat exactly when B is flat (our own). For the last claim, multiplication by 2 embeds ℤ in ℤ with the nonflat quotient ℤ/2 (our own).

**Wikipedia:** [Flat module](https://en.wikipedia.org/wiki/Flat_module). It says: “If A and C are flat, then so is B. Also, if B and C are flat, then so is A. If A and B are flat, C need not be flat in general.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Tor with both inputs resolved makes Tor symmetric

**Remember:** Swap the two resolutions, with a sign from the degrees.

*True by definition. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 13D07. arXiv math.KT. Level 3: graduate.

**Definition.** Over a commutative ring, define Torₙ(M,N) by resolving both inputs: take projective resolutions P → M and Q → N in degrees ≥ 0, and take Hₙ of the total complex of P ⊗ Q (our own).

**Problem.** Over a commutative ring, Torₙ(M, N) and Torₙ(N, M) are naturally isomorphic for every n.

**How the definition helps.** Swapping the tensor factors, with the sign (−1)ᵖᑫ on Pₚ ⊗ Q<sub>q</sub>, is an isomorphism of total complexes from P ⊗ Q to Q ⊗ P, so the two-sided definition is symmetric (our own). The remaining work is to show that this Tor agrees with Tor from resolving one input alone (our own).

**nLab:** [Tor](https://ncatlab.org/nlab/show/Tor). It says: “the total complex of the degreewise tensor product of modules double complex”

**Sources:** none listed. No primary source with a working link was found.

### Derived tensor products give a Künneth spectral sequence over any ring

**Remember:** Resolve inside the definition, and the freeness hypothesis disappears.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G40, 55U25. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** The derived tensor product K ⊗ᴸ L is the tensor product taken after replacing K by a flat resolution: choose a quasi-isomorphism P → K from a bounded-above complex of flat modules and use P ⊗ L (our own). So it needs no freeness of K or L.

**Problem.** For bounded complexes K and L of right and left modules over any ring, the Künneth spectral sequence with E₂ᵖᑫ = ⊕ᵢ₊ⱼ₌q Tor₋ₚ(HⁱK, HʲL) converges to Hᵖ⁺ᑫ(K ⊗ᴸ L). Over a principal ideal domain, only two columns can be nonzero, and they give the Künneth short exact sequence.

**How the definition helps.** Because K ⊗ᴸ L already contains the resolution, the spectral sequence of P ⊗ L works for arbitrary bounded inputs (our own). Over a principal ideal domain, Torₖ = 0 for k ≥ 2, so at most two columns survive and give the short exact sequence (our own).

**Wikipedia:** [Künneth theorem](https://en.wikipedia.org/wiki/K%C3%BCnneth_theorem). It says: “The freeness of the chain modules means that in this geometric case it is not necessary to use any hyperhomology or total derived tensor product.”

**Paper or page:** [More Algebra, Lemma 15.64.4.](https://stacks.math.columbia.edu/tag/0H7Z). It says: “Let R be a ring. Let K and L be objects of Dᵇ(R). There exists a bigraded bounded spectral sequence”

**Sources:** none listed. No primary source with a working link was found.

### Hereditary rings make the Künneth theorem a short exact sequence

**Remember:** Resolutions of length one leave room for only one Tor term.

*Rules out counterexamples.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55U25. arXiv math.AC, math.AT. Level 3: graduate.

**Definition.** A ring is hereditary, as ℤ and every Dedekind domain are, when every submodule of a projective module is projective. So every module has a projective resolution of length at most 1, Torₙ vanishes for n ≥ 2, and the boundaries and cycles of a complex of projectives are projective.

**Problem.** Over a commutative hereditary ring, for a complex C of projectives and any complex D, the sequence 0 → ⊕ᵢ₊ⱼ₌ₙ Hᵢ(C)⊗Hⱼ(D) → Hₙ(C⊗D) → ⊕ᵢ₊ₖ₌ₙ₋₁ Tor₁(Hᵢ(C),Hₖ(D)) → 0 is exact. Over ℤ/4, which is not hereditary, it can fail.

**How the definition helps.** Projective boundaries split each map Cᵢ → Bᵢ₋₁, so C breaks into shifted length-one projective resolutions of its homology, and tensoring each piece with D gives the two outer terms (our own). Over ℤ/4, the resolution ⋯ →² ℤ/4 →² ℤ/4 of ℤ/2, tensored with ℤ/2, has H₂ = ℤ/2 (our own). Both outer terms vanish in degree 2 (our own).

**nLab:** [Künneth theorem](https://ncatlab.org/nlab/show/K%C3%BCnneth+theorem). It says: “For R a principal ideal domain, given a chain complex C• ∈ Ch•(R Mod) of free modules over R and given any other chain complex C′• ∈ Ch•(R Mod), then for each n ∈ ℕ”

**Wikipedia:** [Hereditary ring](https://en.wikipedia.org/wiki/Hereditary_ring). It says: “The ring R is left hereditary if and only if all left modules have projective resolutions of length at most 1.”

**Sources:** none listed. No primary source with a working link was found.

### Identifying extensions with Ext¹ makes the Baer sum a group law

**Remember:** Pull back along the diagonal, then push out along addition.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** The Baer sum of two extensions 0 → B → Eᵢ → A → 0 adds them termwise: take E₁ ⊕ E₂, pull back along the diagonal A → A ⊕ A, then push out along addition B ⊕ B → B (our own). Two extensions count as equal when an isomorphism of middle terms fixes A and B (our own).

**Problem.** Equivalence classes of extensions of A by B form an abelian group under Baer sum. The split extension is the zero, and negating the map B → E gives the inverse.

**How the definition helps.** The extension-class correspondence sends the Baer sum to addition in Ext¹(A,B). Under this correspondence the split sequence represents zero, and pushing out by −1 on B negates the class (our own).

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “The Baer sum is an explicit description of the abelian group structure on Ext¹<sub>R</sub>(A,B), viewed as the set of equivalence classes of extensions of A by B.”

**Paper or page:** [Homology, Lemma 12.6.3.](https://stacks.math.columbia.edu/tag/010L). It says: “The construction (E₁, E₂) ↦ E₁ + E₂ above defines a commutative group law on Ext<sub>A</sub>(B, A) which is functorial in both variables.”

**Sources:**

- [Reinhold Baer, Erweiterung von Gruppen und ihren Isomorphismen, Mathematische Zeitschrift 38 (1934), 375–416](https://doi.org/10.1007/BF01170643)
- [Charles A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Requiring free chain groups makes the universal coefficient theorem for homology hold

**Remember:** Free chains turn cycles over boundaries into a resolution, and Tor appears.

*Rules out counterexamples.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55U20. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A chain complex of abelian groups is free when each chain group is free abelian. Then its boundaries and cycles are free too, so 0 → Bₙ₋₁ → Zₙ₋₁ → Hₙ₋₁(C) → 0 is a free resolution of the homology (our own).

**Problem.** For a free chain complex C and an abelian group A, the sequence 0 → Hₙ(C) ⊗ A → Hₙ(C ⊗ A) → Tor₁(Hₙ₋₁(C),A) → 0 is exact and natural, and it splits, though not naturally. For complexes that are not free it can fail.

**How the definition helps.** Free boundaries split Cₙ → Bₙ₋₁, so tensoring with A keeps 0 → Zₙ → Cₙ → Bₙ₋₁ → 0 exact, and its long exact sequence yields the tensor term and the Tor₁ term of the free resolution (our own). For C equal to ℤ/2 in degree 0 and A = ℤ/2, H₁(C ⊗ A) = 0 but Tor₁(ℤ/2, ℤ/2) = ℤ/2 (our own).

**nLab:** [universal coefficient theorem](https://ncatlab.org/nlab/show/universal+coefficient+theorem). It says: “as a projective resolution of Hₙ(C•). Therefore by definition of Tor the group Tor₁(Hₙ(C•), A) is the chain homology in degree 1 of”

**Wikipedia:** [Universal coefficient theorem](https://en.wikipedia.org/wiki/Universal_coefficient_theorem). It says: “The usual proof of this result is a pure piece of homological algebra about chain complexes of free abelian groups.”

**Sources:** none listed. No primary source with a working link was found.

### Splicing Yoneda extensions makes vanishing of one Ext propagate upward

**Remember:** Every long extension is a splice, so one zero factor kills it.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** For i ≥ 1, a Yoneda i-extension is an exact sequence 0 → A → E₁ → ⋯ → Eᵢ → B → 0, taken up to zigzags of chain maps fixing A and B. Their product splices one sequence onto another, so cutting a long sequence at a middle image writes it as a product of shorter ones (our own).

**Problem.** In an abelian category, suppose Extᵖ(B,A) vanishes for every pair of objects A,B at some fixed degree p ≥ 0. Then Extⁱ(B,A) vanishes for every such pair and every i ≥ p.

**How the definition helps.** For i &gt; p ≥ 1, cut a representative at an intermediate image to write its class as a product with a factor in Extᵖ, which is zero, so the class is zero (our own). For p = 0 the hypothesis kills every identity morphism, so every object is zero (our own).

**Paper or page:** [Derived, Lemma 13.27.8.](https://stacks.math.columbia.edu/tag/0EWW). It says: “If Extᵖ<sub>A</sub>(B, A) = 0 for any pair of objects A, B of A, then Extⁱ<sub>A</sub>(B, A) = 0 for i ≥ p and any pair of objects A, B of A.”

**Sources:** none listed. No primary source with a working link was found.

### The Ext group lets cohomology be computed from homology

**Remember:** Ext records maps from relations that do not extend to the free generators.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55U20, 55N10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For abelian groups H and A, Ext¹(H, A) counts maps on relations that do not extend to generators: choose a free resolution 0 → F₁ → F₀ → H → 0 and take the cokernel of Hom(F₀, A) → Hom(F₁, A). It is zero for free H and Ext¹(ℤ/m, ℤ) = ℤ/m, so for finitely generated H, Ext¹(H, ℤ) is the torsion of H (our own).

**Problem.** For every space X and abelian group A, Hⁿ(X;A) ≅ Hom(Hₙ(X),A) ⊕ Ext¹(Hₙ₋₁(X),A) nonnaturally. For a finite CW complex, integral Hⁿ is isomorphic to ℤ of rank βₙ plus the torsion subgroup of Hₙ₋₁.

**How the definition helps.** Evaluating cochains on cycles gives the Hom term, and the free resolution Bₙ₋₁ → Zₙ₋₁ of Hₙ₋₁ gives the Ext¹ term as the kernel (our own). Free boundaries split the chain groups, so the sequence splits, though not naturally (our own). For finitely generated homology, Hom(−, ℤ) keeps the free part and Ext¹(−, ℤ) the torsion, which gives the integral formula (our own).

**nLab:** [universal coefficient theorem](https://ncatlab.org/nlab/show/universal+coefficient+theorem). It says: “If the coefficients are not a field but an arbitrary abelian group, then this relationship receives a correction by an Ext-group.”

**Wikipedia:** [Universal coefficient theorem](https://en.wikipedia.org/wiki/Universal_coefficient_theorem). It says: “This gives the following statement for integral cohomology: Hⁱ(X;ℤ) ≅ ℤ<sup>βᵢ</sup>(X) ⊕ Tᵢ₋₁.”

**Sources:**

- [Samuel Eilenberg and Saunders MacLane, Group extensions and homology, Annals of Mathematics 43 (1942), 757–831](https://doi.org/10.2307/1968966)

### Vanishing Ext² makes every bounded complex split into its cohomology

**Remember:** With no Ext², nothing can glue the cohomology pieces together.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is hereditary when Ext²(B, A) = 0 for all objects A and B, as for modules over a principal ideal domain or coherent sheaves on a smooth projective curve. Then all higher Ext groups vanish too, so no class of degree 2 or more can glue cohomology objects of different degrees together (our own).

**Problem.** In a hereditary abelian category, each bounded complex K is isomorphic in the derived category to ⊕ᵢ Hⁱ(K)\[−i\].

**How the definition helps.** In the truncation triangle that splits off the top cohomology, the joining map has components in Ext groups of degree at least 2, so it is zero and the triangle splits (our own). Splicing Yoneda extensions passes the Ext² vanishing to every higher degree, and induction on the length of K handles the lower part (our own).

**Paper or page:** [Derived, Lemma 13.27.10.](https://stacks.math.columbia.edu/tag/0EWX). It says: “Assume Ext²<sub>A</sub>(B, A) = 0 for any pair of objects A, B of A. Then any object K of Dᵇ(A) is isomorphic to the direct sum of its cohomologies: K ≅ ⊕ Hⁱ(K)\[−i\].”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing on injectives makes Ext the same whichever variable is resolved

**Remember:** Long exact, starts with Hom, dies on injectives, so it is Ext.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G10. arXiv math.CT. Level 3: graduate.

**Definition.** In an abelian category with enough injectives, a cohomological δ-functor Tⁿ extending F, a family with long exact sequences and T⁰ = F, is the right derived functor of F whenever Tⁿ(I) = 0 for every injective I and n &gt; 0. The identification is unique once fixed in degree zero.

**Problem.** For modules A and B, let P → A be a projective resolution and B → I an injective resolution. Then Hⁿ(Hom(P, B)) ≅ Hⁿ(Hom(A, I)) for all n, so both give Extⁿ(A, B).

**How the definition helps.** Both computations are δ-functors in B that start with Hom(A, B) and vanish on injective B in positive degrees, so the criterion identifies both with Ext (our own). For Hⁿ(Hom(P, −)) this uses that each Hom(Pᵢ, −) is exact, and that Hom(−, I) is exact for injective I (our own).

**nLab:** [Ext](https://ncatlab.org/nlab/show/Ext). It says: “If they exist, the classical right derived functors of either functor agree”

**Wikipedia:** [Derived functor](https://en.wikipedia.org/wiki/Derived_functor). It says: “such that for every injective object I of A, Rⁱ(I)=0 for every positive i, then these functors are the right derived functors of R⁰.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal 9 (1957), 119–221](https://doi.org/10.2748/tmj/1178244839)

### Yoneda's definition lets every exact functor act on Ext

**Remember:** Apply the functor to the whole exact sequence; that is the map.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** For i ≥ 1, Yoneda Extⁱ(B,A) consists of exact sequences 0 → A → E₁ → ⋯ → Eᵢ → B → 0, identified along zigzags of chain maps fixing A and B (our own). Classes are added by Baer sum, which uses only direct sums, pullbacks and pushouts (our own).

**Problem.** Every exact functor F between abelian categories induces a homomorphism Ext¹(B, A) → Ext¹(F(B), F(A)) that sends an extension E to F(E). The same rule works for Yoneda's higher Ext groups.

**How the definition helps.** Exactness preserves the representing sequences, and functoriality preserves their equivalences (our own). An exact functor preserves finite sums, pullbacks, and pushouts, so it preserves the Baer sum in every degree (our own).

**Paper or page:** [Homology, Lemma 12.7.3.](https://stacks.math.columbia.edu/tag/010O). It says: “Let F : A → B be an exact functor. For every pair of objects A, B of A the functor F induces an abelian group homomorphism Ext<sub>A</sub>(B, A) ⟶ Ext<sub>B</sub>(F(B), F(A)) which maps the extension E to F(E).”

**Sources:** none listed. No primary source with a working link was found.

### Yoneda's extension classes define Ext in abelian categories without projectives

**Remember:** Ext¹ is the group of extensions, with no resolutions needed.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** For n ≥ 1, Yoneda Extⁿ(A,B) is the set of exact sequences 0 → B → E₁ → ⋯ → Eₙ → A → 0, identified along zigzags of chain maps fixing A and B, with Baer sum as addition (our own). It uses only exact sequences, never projectives or injectives.

**Problem.** In any essentially small abelian category, Yoneda Ext groups exist, and Ext¹(A,B) classifies extensions of A by B with split extensions representing zero. With enough projectives or injectives, these groups agree with Ext computed by resolutions.

**How the definition helps.** The definition needs only exact sequences and their maps, so it applies without resolutions, and the split extension is the zero class (our own). The Yoneda comparison theorem identifies these groups with resolution Ext when enough projectives or injectives exist.

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “for objects A and B in any abelian category C; this agrees with the definition in terms of resolutions if C has enough projectives or enough injectives.”

**Sources:**

- [R. Baer, Erweiterung von Gruppen und ihren Isomorphismen, Mathematische Zeitschrift 38 (1934) 375–416](https://doi.org/10.1007/BF01170643)

### Defining global dimension through Ext makes projective and injective versions agree

**Remember:** Ext does not care which variable you resolve, so both suprema agree.

*True by definition.* MSC 18G20 (Homological dimension (category-theoretic aspects)), 16E10. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The global dimension of an abelian category is the largest degree i ≥ 0 in which some Ext group is nonzero: the supremum of i with Extⁱ(M,N) ≠ 0 for some objects M and N, possibly infinity. This definition does not prefer either variable of Ext.

**Problem.** In an abelian category with enough projectives and enough injectives, the supremum of the projective dimensions equals the supremum of the injective dimensions. Both equal the global dimension, and C and its opposite category have the same global dimension.

**How the definition helps.** Each one-sided supremum equals the Ext supremum, because M has projective dimension at most n exactly when Extⁿ⁺¹(M,−) = 0, and dually for injective dimension (our own summary). The Ext definition treats both variables alike, so it is unchanged when arrows are reversed. The work is the dimension-shifting lemma behind the first sentence.

**nLab:** [projective dimension](https://ncatlab.org/nlab/show/projective+dimension). It says: “More generally, a global dimension of an abelian category C may be defined as gl.dim(C) := sup{ i ≥ 0 \| ∃ M,N ∈ C, Extⁱ(M,N) ≠ 0}”

**Sources:** none listed. No primary source with a working link was found.

### Defining projective dimension by Ext makes it drop on direct summands

**Remember:** A summand cannot have nonzero Ext where the whole module has none.

*True by definition. Confidence: medium.* MSC 18G20 (Homological dimension (category-theoretic aspects)), 16E10. arXiv math.KT. Level 3: graduate.

**Definition.** The projective dimension of M is the least n ≥ 0 such that Extᵏ(M, N) = 0 for all modules N and all k &gt; n, or infinity if there is none. It equals the length of a shortest projective resolution of M.

**Problem.** A direct summand of a module has projective dimension at most that of the module.

**How the definition helps.** If M = A ⊕ B, then Extᵏ(M,N) ≅ Extᵏ(A,N) ⊕ Extᵏ(B,N) for every N and k (our own). Thus each vanishing degree for M also vanishes for A and B (our own).

**nLab:** [projective dimension](https://ncatlab.org/nlab/show/projective+dimension). It says: “its projective dimension pd(M) is the minimal integer n (if it exists) such that there is a resolution of M”

**Sources:** none listed. No primary source with a working link was found.

### Defining cotorsion pairs by Ext¹ makes both classes closed under extensions

**Remember:** A class cut out by vanishing Ext¹ inherits Ext¹'s closure properties.

*True by definition. Confidence: medium.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18G15. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A cotorsion pair (𝒟, ℰ) is a pair of classes of objects in an abelian category, each defined from the other by vanishing Ext¹. So D lies in 𝒟 exactly when Ext¹(D, E) = 0 for every E in ℰ, and dually.

**Problem.** In every cotorsion pair (𝒟, ℰ), both classes are closed under extensions and direct summands. The class 𝒟 contains all projective objects, and ℰ contains all injective objects.

**How the definition helps.** In either variable the long exact sequence traps the middle Ext¹ between the two vanishing outer groups (our own). Additivity for binary direct sums passes vanishing to summands (our own). Ext¹(P,−) vanishes for projective P, and Ext¹(−,I) vanishes for injective I (our own).

**nLab:** [cotorsion pair](https://ncatlab.org/nlab/show/cotorsion+pair). It says: “D ∈ 𝒟 if and only if Ext¹(D, E) = 0 for all E ∈ ℰ”

**Sources:**

- [M. Hovey, Cotorsion pairs and model categories, in Interactions between Homotopy Theory and Algebra, Contemporary Mathematics 436 (2007)](https://doi.org/10.1090/conm/436/08413)

### The automorphism condition in Enochs's definition makes covers unique

**Remember:** Self-maps over M must be invertible, so two covers are isomorphic.

*True by definition.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16D40. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A 𝒞-cover of M is a map φ : C → M from a module C in 𝒞 through which every map from a module in 𝒞 to M factors. It must also be minimal: every endomorphism f of C with φf = φ is an automorphism.

**Problem.** If a module M has a 𝒞-cover, it is unique up to an isomorphism over M. In particular, the flat cover of a module is unique up to isomorphism.

**How the definition helps.** The factorization property gives maps f and g between two covers over M (our own). Both composites are automorphisms by minimality, giving f both a left inverse and a right inverse (our own). Apply this to the class of flat modules (our own).

**Wikipedia:** [Flat cover](https://en.wikipedia.org/wiki/Flat_cover). It says: “Any module over a ring has a flat cover that is unique up to (non-unique) isomorphism.”

**Sources:**

- [E. E. Enochs, Injective and flat covers, envelopes and resolvents, Israel Journal of Mathematics 39 (1981)](https://doi.org/10.1007/BF02760849)

### Combinatorial simplicial homotopy matches chain homotopy under Dold–Kan

**Remember:** A homotopy is one map from the cylinder, matching both ends.

*Makes the theorem clean to state or prove.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A simplicial homotopy between maps a, b : U → V is one map from the cylinder U ⊗ Δ\[1\] to V that restricts to a and b at the two ends. In degree n the cylinder is a direct sum of copies of Uₙ, one for each n-simplex of Δ\[1\] (our own).

**Problem.** In an abelian category, two maps a, b of simplicial objects are homotopic exactly when N(a) and N(b) are chain homotopic. So Dold–Kan identifies simplicial homotopy classes of maps with chain homotopy classes.

**How the definition helps.** The simplicial cylinder encodes both endpoint maps in one morphism (our own). The Dold–Kan homotopy comparison theorem identifies existence of such a morphism with chain homotopy after normalization (our own).

**Paper or page:** [Simplicial, tag 019S](https://stacks.math.columbia.edu/tag/019S), [Simplicial, tag 01A4](https://stacks.math.columbia.edu/tag/01A4). It says: “If a, b are homotopic, then s(a), s(b) : s(U) → s(V) are homotopic maps of chain complexes. If 𝒜 is abelian, then also N(a), N(b) : N(U) → N(V) are homotopic maps of chain complexes.”

**Sources:**

- [The Stacks Project, Simplicial Methods, Lemmas 14.27.1 and 14.29.3](https://stacks.math.columbia.edu/tag/019S)

### Defining normalization as the Dold–Kan equivalence makes it exact

**Remember:** An equivalence preserves kernels and cokernels.

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U15. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** Normalization sends a simplicial abelian group A to the chain complex with NₙA = ⋂₁≤ᵢ≤ₙ ker(dᵢ) and differential d₀. By Dold–Kan it is an equivalence of categories onto chain complexes in degrees ≥ 0 (our own).

**Problem.** Normalization sends short exact sequences of simplicial abelian groups to short exact sequences of chain complexes.

**How the definition helps.** An equivalence of abelian categories preserves kernels and cokernels, so it sends short exact sequences to short exact sequences (our own). From the kernel formula alone, preservation of cokernels is not obvious (our own). The work is the Dold–Kan theorem itself (our own).

**nLab:** [Dold-Kan correspondence](https://ncatlab.org/nlab/show/Dold-Kan+correspondence). It says: “The Dold–Kan correspondence asserts there is an equivalence of categories between abelian simplicial groups and connective chain complexes of abelian groups.”

**Sources:**

- [Albrecht Dold, Homology of Symmetric Products and Other Functors of Complexes, Annals of Mathematics (1958)](https://doi.org/10.2307/1970043)

### Dold–Kan turns a shifted abelian group into an Eilenberg–MacLane space

**Remember:** Put A in degree n, apply Γ, get K(A, n).

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55P20. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For an abelian group A and n ≥ 1, apply Γ, the inverse of the Dold–Kan normalization functor, to the complex with A in degree n and zero elsewhere. The homotopy groups of the resulting simplicial abelian group are the homology groups of that complex (our own).

**Problem.** For every abelian group A and n ≥ 1, Γ(A\[n\]) is connected and Kan, with πₙ ≅ A and all other positive homotopy groups trivial. Its realization is a K(A,n).

**How the definition helps.** Normalization recovers the original complex, and the homotopy groups of a simplicial abelian group are its normalized homology groups. Every simplicial group is Kan, and realization preserves these homotopy groups (our own).

**nLab:** [Dold-Kan correspondence](https://ncatlab.org/nlab/show/Dold-Kan+correspondence). It says: “The simplicial abelian group Γ(A\[−n\]) is an Eilenberg-MacLane object K(A,n).”

**Wikipedia:** [Dold–Kan correspondence](https://en.wikipedia.org/wiki/Dold%E2%80%93Kan_correspondence). It says: “For a chain complex C that has an abelian group A in degree n and zero in all other degrees, the corresponding simplicial group is the Eilenberg–MacLane space K(A, n).”

**Sources:**

- [Albrecht Dold, Homology of symmetric products and other functors of complexes, Annals of Mathematics 68 (1958) 54–80](https://doi.org/10.2307/1970043)
- [Daniel M. Kan, Functors involving c.s.s. complexes, Transactions of the American Mathematical Society 87 (1958)](https://doi.org/10.1090/s0002-9947-1958-0131873-8)

### Lax monoidal normalization makes homotopy of a simplicial ring a graded ring

**Remember:** Shuffle maps carry multiplication from simplicial rings to differential graded rings.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 18M05. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** Normalized chains are lax symmetric monoidal: a unit map and natural shuffle chain maps N(A) ⊗ N(B) → N(A ⊗ B) compare tensor products of chain complexes with tensor products of simplicial abelian groups. These maps respect associativity, units and symmetry (our own).

**Problem.** For a simplicial ring R, the normalized complex N(R) is a differential graded ring, and the homotopy groups π∗(R) form a graded ring. If R is commutative, N(R) and π∗(R) are graded-commutative.

**How the definition helps.** Composing the shuffle map with normalized multiplication makes N(R) a differential graded ring (our own). Shuffle symmetry gives the sign rule for commutative R (our own). The identification π∗R ≅ H∗N(R) transfers the product to homotopy groups (our own).

**nLab:** [monoidal Dold-Kan correspondence](https://ncatlab.org/nlab/show/monoidal+Dold-Kan+correspondence). It says: “The two functors in the Dold-Kan correspondence individually respect these monoidal structures, in the sense that they are lax monoidal functors (but not strong monoidal functors”

**Sources:** none listed. No primary source with a working link was found.

### Splitting off degenerate simplices lets homology use only nondegenerate simplices

**Remember:** Degenerate simplices form a contractible summand, so throw them away.

*Makes the theorem clean to state or prove.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For a simplicial abelian group A, let C A have Aₙ in degree n with the alternating sum of faces as differential. Its degenerate part D A is the subcomplex spanned by the images of all degeneracy maps, and the normalized complex is C A / D A.

**Problem.** For every simplicial abelian group A, the quotient map C A → C A / D A is a chain homotopy equivalence. So the homology of a simplicial set can be computed from the free complex on its nondegenerate simplices.

**How the definition helps.** Since C A = N A ⊕ D A, the quotient map is a homotopy equivalence exactly when D A is contractible, which is the Eilenberg–Mac Lane theorem. For a simplicial set X, the quotient of ℤ\[X\] by its degenerate part is free on the nondegenerate simplices (our own). So the standard n-simplex, which has infinitely many degenerate simplices, gets a finite chain complex.

**nLab:** [Moore complex](https://ncatlab.org/nlab/show/Moore+complex). It says: “i.e. the complex D•(X) is null-homotopic (a contractible chain complex).”

**Paper or page:** [Simplicial, tag 019A](https://stacks.math.columbia.edu/tag/019A). It says: “The canonical morphism of chain complexes N(U) → s(U) is split. In fact, s(U) = N(U) ⊕ D(U) for some complex D(U). The construction U ↦ D(U) is functorial.”

**Sources:**

- [Paul G. Goerss and John F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### The Moore complex makes homotopy groups of simplicial abelian groups its homology

**Remember:** A cycle of the Moore complex is a sphere based at zero.

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** The Moore complex of a simplicial abelian group A keeps, in degree n &gt; 0, the simplices whose faces d₁, …, dₙ all vanish, NₙA = ⋂₁≤ᵢ≤ₙ ker(dᵢ), with N₀A = A₀ and differential d₀. So a cycle is a simplex with every face zero, a sphere based at 0 (our own).

**Problem.** Let A be a simplicial abelian group and let n ≥ 0. Then the simplicial homotopy group πₙ(A, 0) is naturally isomorphic to the homology group Hₙ(N A).

**How the definition helps.** A cycle has every face zero, so it represents a based sphere in the underlying Kan complex and an element of πₙ(A, 0) (our own). That sphere contracts exactly when it is d₀ of a simplex whose other faces vanish, that is, a boundary (our own). In degree zero, vertices modulo these boundaries are the path components (our own).

**nLab:** [Moore complex](https://ncatlab.org/nlab/show/Moore+complex). It says: “For A a simplicial abelian group there are natural isomorphisms πₙ(A,0) ≃ Hₙ(N A) ≃ Hₙ(A) between the simplicial homotopy groups and the chain homology groups of the unnormalized and of the normalized chain complexes.”

**Paper or page:** [Simplicial, tag 08NZ](https://stacks.math.columbia.edu/tag/08NZ). It says: “Let X be a simplicial group. Then X is a Kan complex.”

**Sources:**

- [Paul G. Goerss and John F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Through Dold–Kan, every simplicial abelian group splits into Eilenberg–MacLane spaces

**Remember:** Complexes over ℤ split into their homology, so simplicial abelian groups split.

*Makes the theorem clean to state or prove.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55P20. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** The Dold–Kan correspondence is an equivalence between simplicial abelian groups and chain complexes of abelian groups in degrees ≥ 0. It sends πᵢ to Hᵢ and weak equivalences to quasi-isomorphisms, the chain maps inducing isomorphisms on homology (our own).

**Problem.** Every simplicial abelian group A is homotopy equivalent, as a simplicial set, to the product over i ≥ 0 of Eilenberg–MacLane spaces K(πᵢA, i). The equivalence is not natural in A.

**How the definition helps.** Over ℤ every subgroup of a free group is free, so every chain complex is quasi-isomorphic to the direct sum of its homology groups in their degrees (our own). Dold–Kan turns this into a weak equivalence, hence a homotopy equivalence of Kan complexes, from A to Γ of that sum (our own). Γ of the sum is the product of the spaces K(Hᵢ, i), since each simplicial degree sees only finitely many factors (our own).

**nLab:** [Dold-Kan correspondence](https://ncatlab.org/nlab/show/Dold-Kan+correspondence). It says: “The simplicial abelian group Γ(A\[−n\]) is an Eilenberg-MacLane object K(A,n).”

**Wikipedia:** [Simplicial group](https://en.wikipedia.org/wiki/Simplicial_group). It says: “any simplicial abelian group A is non-canonically homotopy equivalent to a product of Eilenberg–MacLane spaces, ∏ i≥0 K(πᵢA, i).”

**Sources:**

- [Paul G. Goerss and John F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Defining cones by maps out of them makes null homotopies extend

**Remember:** A map out of the cone carries its own null homotopy.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** The cone of a chain map f : X → Y is defined by the maps out of it: a chain map Cone(f) → W is the same as a chain map g : Y → W together with a chosen null-homotopy of g ∘ f, naturally in W.

**Problem.** Every chain map g : Y → W with g∘f homotopic to zero extends to a chain map from the cone on f.

**How the definition helps.** A null-homotopy of g ∘ f is exactly the extra data that the definition needs, so it gives the extension at once; different homotopies can give different extensions (our own). The remaining work is to check that the usual formula for the cone has this property (our own).

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “universal object with a morphism i from Y and a left homotopy from i ∘ f to the zero morphism.”

**Sources:** none listed. No primary source with a working link was found.

### Donors and receptors make diagram chases short in the salamander lemma

**Remember:** Receptor: outgoing kernels meet; donor: incoming images add.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories). arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** At each object of a double complex, the receptor is the intersection of outgoing kernels modulo the image of the incoming diagonal composite. The donor is the kernel of the outgoing diagonal composite modulo the sum of incoming images (our own).

**Problem.** The salamander lemma gives a local exact sequence of donors, receptors, and homology groups for each horizontal or vertical arrow. It implies the 3×3, four, five, and snake lemmas and the long exact homology sequence.

**How the definition helps.** The two quotients are exactly the objects that join horizontal and vertical homology in Bergman's salamander exact sequence at one arrow (our own). Chaining that sequence along consecutive arrows gives each standard diagram lemma under its usual exactness hypotheses.

**nLab:** [salamander lemma](https://ncatlab.org/nlab/show/salamander+lemma). It says: “all the standard diagram chasing lemmas of homological algebra are direct and transparent consequences of the salamander lemma, such as the 3x3 lemma, the four lemma, hence the five lemma, the snake lemma”

**Sources:**

- [George M. Bergman, On diagram-chasing in double complexes, Theory and Applications of Categories 26 (2012) 60–96, arXiv:1108.0958](https://arxiv.org/abs/1108.0958)

### Identifying homotopic chain maps makes cone triangles satisfy the triangulated axioms

**Remember:** Up to homotopy, the cone of an identity becomes zero.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** The homotopy category K(A) has chain complexes as objects and chain maps up to chain homotopy as morphisms, so a contractible complex, one whose identity is null-homotopic, becomes zero. Its distinguished triangles are those isomorphic to a cone triangle X → Y → C(f) → X\[1\].

**Problem.** For every additive category A, the homotopy category K(A) with cone triangles is a triangulated category, meaning these triangles satisfy Verdier's axioms. The category of complexes is not: for a nonzero complex X, the triangle X → X → 0 → X\[1\] fails there.

**How the definition helps.** The cone of an identity map is contractible, so in K(A) it is isomorphic to 0 and the required triangle X → X → 0 → X\[1\] becomes distinguished. Among plain complexes that cone stays nonzero, so this triangle is not a cone triangle. The rest of the proof checks rotation and the octahedral axiom.

**Wikipedia:** [Homotopy category of chain complexes](https://en.wikipedia.org/wiki/Homotopy_category_of_chain_complexes). It says: “is not distinguished since the cone of the identity map is not isomorphic to the complex 0 (however, the zero map C(id) → 0 is a homotopy equivalence, so that this triangle is distinguished in K(A)).”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/014S). It says: “Let 𝒜 be an additive category. The category K(𝒜) of complexes up to homotopy with its natural translation functors and distinguished triangles as defined above is a triangulated category.”

**Sources:** none listed. No primary source with a working link was found.

### Inverting quasi-isomorphisms makes every short exact sequence of complexes a triangle

**Remember:** Cone and cokernel agree in cohomology, not up to homotopy.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** The derived category D(A) of an abelian category A is made from complexes by inverting quasi-isomorphisms, the chain maps inducing isomorphisms on cohomology. For a short exact sequence 0 → X → Y → Z → 0 of complexes, compare the cone of X → Y with Z by the map sending (x, y) to the image of y.

**Problem.** For every short exact sequence of complexes, the map from the cone of the injection to the cokernel is a quasi-isomorphism. So in D(A) every short exact sequence gives a distinguished triangle, but in K(A), complexes up to homotopy, some do not.

**How the definition helps.** The comparison map is onto, and its kernel is the cone of the identity of X, which is acyclic, so the map is a quasi-isomorphism and an isomorphism in D(A) (our own). In K(A) this fails for 0 → ℤ →² ℤ → ℤ/2 → 0 (our own). Every chain map from ℤ/2 to the cone of multiplication by 2 is zero, so the two are not homotopy equivalent (our own).

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “The following discussion revolves around the fact that now cone(f)• as well as Z• are both models for the homotopy cofiber of f.”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/0152). It says: “Let 𝒜 be an abelian category. The functor Comp(𝒜) → D(𝒜) defined has the natural structure of a δ-functor, with δ<sub>A•→B•→C•</sub> = − p ∘ q⁻¹ with p and q as explained above.”

**Sources:** none listed. No primary source with a working link was found.

### Mapping cones turn a quasi-isomorphism test into one acyclicity check

**Remember:** A map is a quasi-isomorphism when its cone has no cohomology.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** The mapping cone of a cochain map f : A → B glues a shifted copy of A onto B: Cⁿ = Aⁿ⁺¹ ⊕ Bⁿ, with differential (a, b) ↦ (−da, f(a) + db) (our own). It fits in a short exact sequence 0 → B → C(f) → A\[1\] → 0 whose connecting map is H(f) up to sign (our own).

**Problem.** A chain map f between complexes over an abelian category is a quasi-isomorphism exactly when its mapping cone is acyclic, with all cohomology zero.

**How the definition helps.** In the long exact sequence of the cone, Hⁿ(C(f)) sits between the cokernel of Hⁿ(f) and the kernel of Hⁿ⁺¹(f). So every Hⁿ(C(f)) is zero exactly when every Hⁿ(f) is an isomorphism. The only real work is the sign check that the connecting map is H(f).

**nLab:** [quasi-isomorphism](https://ncatlab.org/nlab/show/quasi-isomorphism). It says: “A chain map f• : C• → D• is a quasi-isomorphism precisely if its mapping cone cone(f)• ∈ Ch•(𝒜) has all trivial chain homology groups.”

**Wikipedia:** [Mapping cone (homological algebra)](https://en.wikipedia.org/wiki/Mapping_cone_%28homological_algebra%29). It says: “The main use of the cone is to identify quasi-isomorphisms: if the cone is acyclic, then the map is a quasi-isomorphism.”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Pretriangulated dg categories give triangulated homotopy categories and exact functors

**Remember:** Take cones at the dg level, and ho(A) gets its triangles free.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** A dg category A is pretriangulated when its image under the dg Yoneda embedding contains zero and is closed, up to homotopy equivalence, under shifts and cones of dg modules (our own). So ho(A) sits inside the triangulated homotopy category of dg modules, closed under its triangle operations (our own).

**Problem.** If A is pretriangulated, then ho(A) has a canonical triangulated structure. A dg functor between pretriangulated dg categories then induces an exact functor between their homotopy categories.

**How the definition helps.** A full subcategory closed under zero, shifts and cones inherits the triangulated structure, which gives ho(A) its triangles (our own). A dg functor induces extension of scalars on dg modules, which preserves representables, shifts and cone triangles, so it gives an exact functor (our own).

**nLab:** [pretriangulated dg-category](https://ncatlab.org/nlab/show/pretriangulated+dg-category). It says: “As an immediate corollary, note that for a pretriangulated dg-category A, its homotopy category ho(A) inherits a canonical triangulated structure.”

**Paper or page:** [Dga, Proposition 22.10.3.](https://stacks.math.columbia.edu/tag/09KJ). It says: “The homotopy category K(Mod\_(A, d)) of differential graded A-modules with its natural translation functors and distinguished triangles is a triangulated category.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Enhanced triangulated categories, Math. USSR Sbornik (1991)](https://doi.org/10.1070/SM1991v070n01ABEH001253)

### Product totalization turns any exact left resolution of complexes into a quasi-isomorphism

**Remember:** Products hold infinitely many corrections; sums do not.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G40. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** The product total complex of a double complex puts in degree n the product of all terms on the diagonal p + q = n, so an element may have infinitely many nonzero components. Its differential is the sum of the two anticommuting differentials (our own).

**Problem.** Let … → A₁ → A₀ → M → 0 be an exact sequence of complexes of abelian groups. Then the product total complex of the double complex of the A's maps to M by a quasi-isomorphism.

**How the definition helps.** Row exactness lets each cycle be killed step by step down the resolution, and the product total complex holds all infinitely many correction terms at once (our own). The sum total complex cannot: for M = 0, take A₀ = ℤ in degree 0 and Aₘ the identity ℤ → ℤ in degrees m−1 and m, joined by identities (our own). Its sum totalization has H⁰ ≅ ℤ, because corrections must have finite support (our own).

**nLab:** [total complex](https://ncatlab.org/nlab/show/total+complex). It says: “Using the four different types of total complexes gives the flexibility to make more nuanced exactness statements for the total complex under various assumptions on the double complex.”

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/0E1R). It says: “Let Tot\_π(A<sup>•, •</sup>) be the product total complex associated to the double complex (see proof). Then the map Tot\_π(A<sup>•, •</sup>) → M• induced by A₀• → M• is a quasi-isomorphism.”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Property (P) modules make maps in the derived category homotopy classes

**Remember:** Built from free pieces, P sees every acyclic module as zero.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 16E45, 18G80. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** A dg module P has property (P) when it is built from free pieces: it has an exhaustive filtration 0 = F₋₁P ⊂ F₀P ⊂ ⋯ by dg submodules, each inclusion split as graded modules. Each quotient FᵢP/Fᵢ₋₁P is a dg direct summand of a direct sum of shifts of the algebra (our own).

**Problem.** If P has property (P), then every map of dg modules from P to an acyclic dg module is null-homotopic. Every dg module receives a quasi-isomorphism from such a P, so maps in the derived category are homotopy classes of maps out of P.

**How the definition helps.** A map from a shift of the algebra into an acyclic module is a cocycle, hence a boundary, so a null-homotopy extends one filtration step at a time (our own). Degreewise free is not enough: over k\[ε\]/(ε²) for a field k, the doubly infinite multiplication-by-ε complex is acyclic and free, but its identity is not null-homotopic (our own). The existence of property (P) resolutions then lets derived maps be computed as homotopy classes (our own).

**Paper or page:** [Dga, Lemma 22.20.2.](https://stacks.math.columbia.edu/tag/09KM), [Dga, Lemma 22.20.4.](https://stacks.math.columbia.edu/tag/09KP). It says: “Let P be a differential graded A-module with property (P). Then Hom<sub>K</sub>(Mod\_(A, d))(P, N) = 0 for all acyclic differential graded A-modules N.”

**Sources:**

- [B. Keller, Deriving DG categories, Ann. Sci. École Norm. Sup. 27 (1994) 63–102](https://doi.org/10.24033/asens.1689)

### Strongly pretriangulated dg categories make cones of strict squares canonical

**Remember:** A cone that represents a functor is natural in its arrow.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A dg category is strongly pretriangulated when it contains zero, shifts and cones that represent the corresponding dg modules exactly. So the chosen cone of a closed degree-zero f : X → Y represents Z ↦ Cone(Hom(Z,X) → Hom(Z,Y)), a module that is natural in f.

**Problem.** In a strongly pretriangulated dg category, a strictly commuting square of closed degree-zero maps induces a canonical map between the two cones. In a triangulated category, the third map of a morphism of triangles exists but need not be unique.

**How the definition helps.** A strict square acts diagonally on the two summands of the module cone and commutes with its differential (our own). Dg Yoneda transfers this map uniquely to the chosen representing objects (our own). For a zero map X → Y, a nonzero component X\[1\] → Y gives a second filler for the identity square (our own).

**nLab:** [pretriangulated dg-category](https://ncatlab.org/nlab/show/pretriangulated+dg-category). It says: “The cone of a closed morphism f : X → Y of degree zero is an object Cone(f) ∈ A representing the functor”

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “One of the technical complications with triangulated categories is the fact the cone construction is not functorial.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Enhanced triangulated categories, Math. USSR Sbornik (1991)](https://doi.org/10.1070/SM1991v070n01ABEH001253)

### Truncating at kernels and quotients makes bounded-cohomology complexes bounded

**Remember:** Keep the kernel or the quotient where the complex meets the cutoff.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** Truncation cuts a complex at degree n without changing cohomology on the kept side. Upper truncation keeps degrees below n, puts ker dⁿ in degree n and zero above; lower truncation keeps degrees above n, puts coker dⁿ⁻¹ in degree n and zero below (our own).

**Problem.** A complex whose cohomology vanishes outside finitely many degrees is linked to a bounded complex by quasi-isomorphisms, chain maps inducing isomorphisms on cohomology.

**How the definition helps.** The upper truncation includes into the complex, the complex maps onto the lower truncation, and each map keeps cohomology on its kept side (our own). Cutting above and below the nonzero cohomology gives a bounded complex linked to the original by quasi-isomorphisms (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.11.5](https://stacks.math.columbia.edu/tag/05RV). It says: “where all the arrows are quasi-isomorphisms, L• bounded below, M• bounded above, and N• a bounded complex.”

**Sources:** none listed. No primary source with a working link was found.

### Twisted complexes give every dg category a universal pretriangulated envelope

**Remember:** Twist a finite sum of shifts by a triangular differential.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories). arXiv math.CT. Level 3: graduate.

**Definition.** A finite one-sided twisted complex over C is a finite formal sum of shifted objects of C with a strictly triangular degree-one matrix q of maps such that dq + q² = 0 (our own). It is an iterated cone written as one object, with q recording the gluing maps (our own).

**Problem.** Finite one-sided twisted complexes over C form a pretriangulated envelope, along which every dg functor to a strongly pretriangulated dg category extends. Its homotopy category is the triangulated subcategory generated by representables in the homotopy category of dg modules.

**How the definition helps.** Since a twisted complex is an iterated cone, the cone of a closed map of twisted complexes is again one, so the envelope is pretriangulated (our own). A dg functor to a strongly pretriangulated target extends by sending each twisted complex to the iterated cone of its image (our own). The nLab builds the envelope instead from dg modules generated by representables, and Bondal and Kapranov show the two agree.

**nLab:** [pretriangulated dg-category](https://ncatlab.org/nlab/show/pretriangulated+dg-category), [twisted complex](https://ncatlab.org/nlab/show/twisted+complex). It says: “such that any functor u: A → B to a strongly pretriangulated dg-category B factors uniquely through a functor tri(A) → B.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Enhanced triangulated categories, Math. USSR Sbornik (1991)](https://doi.org/10.1070/SM1991v070n01ABEH001253)

### Algebraic de Rham cohomology as hypercohomology recovers a curve's whole H¹

**Remember:** Global forms miss H¹(𝒪); hypercohomology keeps it.

*Rules out counterexamples.* MSC 18G40 (Spectral sequences, hypercohomology), 14F40. arXiv math.AG. Level 3: graduate.

**Definition.** Algebraic de Rham cohomology of a smooth complex variety is the hypercohomology of its Zariski complex of algebraic forms: resolve the complex by injectives, take global sections, then cohomology (our own). So it sees the sheaf cohomology of each sheaf of forms, such as H¹(𝒪), not only global forms (our own).

**Problem.** For a smooth connected projective complex curve of genus g, first algebraic de Rham cohomology has dimension 2g. First cohomology of its global algebraic forms has dimension g.

**How the definition helps.** Grothendieck's comparison theorem identifies hypercohomology with singular cohomology, giving dimension 2g (our own). The complex of global forms has only constant functions in degree 0, so its H¹ is the g-dimensional space of global one-forms (our own). The missing g dimensions come from H¹(𝒪) (our own).

**nLab:** [hypercohomology](https://ncatlab.org/nlab/show/hypercohomology). It says: “In the context of algebraic geometry, "de Rham cohomology" refers to the hypercohomology of the de Rham complex Ω•.”

**Wikipedia:** [Hodge–de Rham spectral sequence](https://en.wikipedia.org/wiki/Hodge%E2%80%93de_Rham_spectral_sequence). It says: “For smooth proper varieties over a field of characteristic 0, the spectral sequence can also be written as”

**Sources:**

- [Alexander Grothendieck, On the de Rham cohomology of algebraic varieties, Publications Mathématiques de l'IHÉS 29 (1966) 95–103](https://doi.org/10.1007/BF02684807)

### Cartan–Eilenberg resolutions make the second hypercohomology spectral sequence immediate

**Remember:** Resolve the cohomology too, and the spectral sequence follows.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 18G10. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** A Cartan–Eilenberg injective resolution of a bounded-below complex K is an augmented double complex K → I of injectives that resolves everything at once. The terms, cycles, boundaries and cohomology objects of K are each resolved by the corresponding objects of I.

**Problem.** For a left exact additive functor F, a Cartan–Eilenberg resolution of K gives a second spectral sequence with E₂ᵖᑫ = RᵖF(HᑫK). It converges to Hᵖ⁺ᑫ(RF(K)).

**How the definition helps.** The sequences that link boundaries, cycles and cohomology in the resolution consist of injectives, so they split, and F commutes with taking that cohomology (our own). So the first page is F of an injective resolution of HᑫK, and the next page is RᵖF(HᑫK) (our own). The work is the existence of these resolutions, by the horseshoe lemma (Stacks 015I).

**Wikipedia:** [Cartan–Eilenberg resolution](https://en.wikipedia.org/wiki/Cartan%E2%80%93Eilenberg_resolution). It says: “The complex Hₚ(P, dʰ) obtained by taking the homology of each row with respect to the horizontal differential forms a projective resolution Hₚ(ε): Hₚ(P, dʰ) → Hₚ(A) of degree p homology of A.”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/015J). It says: “The spectral sequences (′Eᵣ, ′dᵣ)<sub>r ≥ 0</sub> and (″Eᵣ, ″dᵣ)<sub>r ≥ 0</sub> associated to the double complex F(I<sup>•, •</sup>) satisfy the relations ′E₁<sup>p, q</sup> = R<sup>qF</sup>(Kᵖ) and ″E₂<sup>p, q</sup> = RᵖF(H<sup>q</sup>(K•))”

**Sources:**

- [H. Cartan and S. Eilenberg, Homological Algebra, Princeton University Press (1956)](https://doi.org/10.1515/9781400883844)

### Defining direct images by preimages makes the Leray spectral sequence a composite

**Remember:** Sections over Y of f∗F are sections over X, so derive twice.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55N30. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For a continuous map f : X → Y, the direct image f∗F has as sections over V the sections of F over the preimage f⁻¹V, so Γ(Y, f∗F) = Γ(X, F). The higher direct images Rʲf∗F are its right derived functors.

**Problem.** For every abelian sheaf F on X there is a spectral sequence with second page Hⁱ(Y, Rʲf∗F) that converges to Hⁱ⁺ʲ(X, F).

**How the definition helps.** Since Γ(Y, f∗F) = Γ(X, F), global sections on X are global sections on Y after f∗. The functor f∗ has the exact left adjoint f⁻¹, so it sends injective sheaves to injective sheaves (our own summary). The Grothendieck spectral sequence for a composite of functors then gives the Leray spectral sequence.

**Wikipedia:** [Leray spectral sequence](https://en.wikipedia.org/wiki/Leray_spectral_sequence). It says: “Composing this with the functor Γ of taking sections on ShAb(Y) is the same as taking sections on ShAb(X), by the definition of the direct image functor f∗”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01F2). It says: “Let f : X → Y be a morphism of ringed spaces. Let ℱ• be a bounded below complex of 𝒪<sub>X</sub>-modules. There is a spectral sequence”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Defining pages as homology of earlier pages makes page isomorphisms propagate

**Remember:** Each new page and its map are the homology of the preceding page and map.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A spectral sequence is a sequence of pages Eᵣ with differentials dᵣ, dᵣ ∘ dᵣ = 0, in which each page Eᵣ₊₁ is the homology of the page before. A morphism is a family of maps fᵣ commuting with the differentials, each fᵣ₊₁ being the map that fᵣ induces on homology.

**Problem.** A morphism of spectral sequences that is an isomorphism on some page Eᵣ is an isomorphism on every later page. This is the mapping lemma.

**How the definition helps.** Homology sends an isomorphism of complexes to an isomorphism. Since each later page map is the homology of the preceding map, induction gives the result (our own).

**nLab:** [spectral sequence](https://ncatlab.org/nlab/show/spectral+sequence). It says: “is a morphism of spectral sequences such that for some r we have that fᵣ : Eᵣ<sup>p,q</sup> → Fᵣ<sup>p,q</sup> is an isomorphism, then also fₛ is an isomorphism for all s ≥ r.”

**Wikipedia:** [Spectral sequence](https://en.wikipedia.org/wiki/Spectral_sequence). It says: “It is straightforward to check that the homology of Eᵣ with respect to this differential is Eᵣ₊₁, so this gives a spectral sequence.”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Filtering the holomorphic de Rham complex gives the Frölicher spectral sequence

**Remember:** Filter forms by degree; the pieces are single sheaves Ωⁱ.

*Makes the theorem clean to state or prove.* MSC 18G40 (Spectral sequences, hypercohomology), 14F40, 32Q15. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** On a complex manifold X, the Hodge filtration Fᵖ of the holomorphic de Rham complex keeps the sheaves Ωⁱ in degrees i ≥ p and puts zero in lower degrees. So each graded piece Fᵖ/Fᵖ⁺¹ is the single sheaf Ωᵖ in degree p (our own).

**Problem.** There is a spectral sequence whose first page is Hʲ(X, Ωⁱ) and which converges to Hⁱ⁺ʲ(X, ℂ). On a compact Kähler manifold it degenerates at the first page.

**How the definition helps.** Each graded piece is Ωⁱ placed in degree i, giving E₁ⁱʲ = Hʲ(X,Ωⁱ) (our own). The holomorphic Poincaré lemma identifies the abutment with complex cohomology. Compact Kähler degeneration follows from the Hodge decomposition theorem (our own).

**Wikipedia:** [Hodge–de Rham spectral sequence](https://en.wikipedia.org/wiki/Hodge%E2%80%93de_Rham_spectral_sequence). It says: “The existence of the spectral sequence as stated above follows from the Poincaré lemma, which gives a quasi-isomorphism of complexes of sheaves”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0BKK). It says: “Let ℱ• be a filtered complex of 𝒪<sub>X</sub>-modules. There exists a canonical spectral sequence”

**Sources:**

- [Alfred Frölicher, Relations between the cohomology groups of Dolbeault and topological invariants, Proceedings of the National Academy of Sciences 41 (1955) 641–644](https://doi.org/10.1073/pnas.41.9.641)
- [Phillip Griffiths and Joseph Harris, Principles of Algebraic Geometry, Wiley (1978; reprinted 1994)](https://doi.org/10.1002/9781118032527)

### Finite filtrations make an isomorphism on one page a quasi-isomorphism

**Remember:** Finite filtrations let pages decide cohomology.

*Rules out counterexamples.* MSC 18G40 (Spectral sequences, hypercohomology). arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A filtration F on a complex K is finite when in each degree it starts at the whole term and ends at zero: there are integers a ≤ b with FᵃKⁿ = Kⁿ and Fᵇ⁺¹Kⁿ = 0.

**Problem.** Let f be a map of complexes with finite filtrations that preserves the filtrations. If f is an isomorphism on some page Eᵣ of the associated spectral sequences, then f is a quasi-isomorphism.

**How the definition helps.** A finite filtration makes the spectral sequence converge, so an isomorphism on Eᵣ gives one on E∞, the associated graded of cohomology, and a five lemma induction up the filtration finishes (our own). Finiteness removes a counterexample: filter ℤ in degree 0 by Fᵖ = 0 for all p, or by Fᵖ = ℤ for all p (our own). Then every page vanishes, so the map from the zero complex is an isomorphism on all pages but not a quasi-isomorphism (our own).

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/012W). It says: “Assume that the filtration on each Kⁿ is finite (see Definition). Then the spectral sequence associated to (K•, F) is bounded, the filtration on each Hⁿ(K•) is finite, the spectral sequence associated to (K•, F) converges to H\*(K•)”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Requiring injectives to go to acyclics gives the Grothendieck spectral sequence

**Remember:** Injectives to acyclics, and composite derived functors split into two steps.

*Makes the theorem clean to state or prove.* MSC 18G40 (Spectral sequences, hypercohomology), 18G10. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** For left exact functors F : A → B and G : B → C, the key hypothesis is that F sends injective objects to G-acyclic ones, objects B with RⁱG(B) = 0 for all i &gt; 0. Then F of an injective resolution is already a valid input for computing RG (our own).

**Problem.** If A and B have enough injectives and F sends injectives to G-acyclic objects, then for each bounded-below complex X a spectral sequence with E₂ᵖᑫ = RᵖG(Hᑫ(RF(X))) converges to Hᵖ⁺ᑫ(R(G∘F)(X)). Its diagonals have finite support.

**How the definition helps.** Applying F to a bounded-below injective resolution of X gives a complex of G-acyclic objects (our own). Hence RG(RF(X)) computes R(G∘F)(X), and the hypercohomology spectral sequence for G gives the stated page (our own).

**Wikipedia:** [Grothendieck spectral sequence](https://en.wikipedia.org/wiki/Grothendieck_spectral_sequence). It says: “such that both 𝒜 and ℬ have enough injectives and F takes injective objects to G-acyclic objects, then for each object A of 𝒜 there is a spectral sequence”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/015N). It says: “There exists a spectral sequence (Eᵣ, dᵣ)<sub>r ≥ 0</sub> consisting of bigraded objects Eᵣ of 𝒞 with dᵣ of bidegree (r, − r + 1) and with E₂<sup>p, q</sup> = RᵖG(H<sup>q</sup>(RF(X)))”

**Sources:**

- [A. Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal 9 (1957)](https://doi.org/10.2748/tmj/1178244839)

### Starting spectral sequences from exact couples makes differentials square to zero

**Remember:** Squaring jk puts kj in the middle, and exactness kills it.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.KT. Level 3: graduate.

**Definition.** An exact couple is a triangle of maps i : A → A, j : A → E and k : E → A, exact at each corner: each image is the kernel of the next map. Its differential on E is d = j ∘ k.

**Problem.** Each differential in the spectral sequence of a filtered complex squares to zero.

**How the definition helps.** The square d ∘ d = j ∘ (k ∘ j) ∘ k contains k ∘ j, which is zero because the image of j is the kernel of k (our own). The derived couple is again exact, so the same argument works on every page (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.21.2](https://stacks.math.columbia.edu/tag/011R). It says: “d = g ∘ f : E → E so that d ∘ d = 0”

**Sources:** none listed. No primary source with a working link was found.

### Weak Serre subcategories let finiteness pass from a page to cohomology

**Remember:** Closed under kernels, cokernels and extensions is all a spectral sequence needs.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 18E10. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** A weak Serre subcategory C of an abelian category is a full subcategory that contains zero and is closed under kernels, cokernels and extensions. Equivalently, in an exact sequence of five objects, the middle one lies in C when the four outer ones do (our own).

**Problem.** Let K be a complex with a finite filtration in each degree. If some page Eᵣ lies in a weak Serre subcategory C, then every cohomology object Hⁿ(K) lies in C.

**How the definition helps.** Each later page is a kernel modulo an image of a map in C, so it stays in C. With a finite filtration, Hⁿ(K) is built from finitely many terms of the limit page E∞ by extensions, which stay in C. Subobjects are never needed, so weak Serre subcategories such as ℚ-vector spaces among abelian groups also qualify (our own).

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/012W). It says: “if 𝒞 ⊂ 𝒜 is a weak Serre subcategory and for some r we have Eᵣ<sup>p, q</sup> ∈ 𝒞 for all p, q ∈ 𝐙, then Hⁿ(K•) is in 𝒞.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring out projectives makes self-injective module categories triangulated

**Remember:** Quotient by projectives, and short exact sequences become triangles.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 16D50, 18G80. arXiv math.RT. Level 3: graduate.

**Definition.** For a finite-dimensional self-injective algebra, whose projective modules are exactly its injective modules, the stable module category keeps the modules and takes maps modulo those that factor through a projective module (our own).

**Problem.** For a finite-dimensional self-injective algebra A, the stable module category is triangulated with shift functor Ω⁻¹. Each short exact sequence 0 → X → E → Y → 0 gives a triangle X → E → Y → Ω⁻¹X.

**How the definition helps.** Modules form a Frobenius category because projectives and injectives coincide (our own). Happel’s theorem makes its stable category triangulated, with suspension given by the cokernel of an embedding into an injective. Pushing out such an embedding along X → E supplies the connecting map Y → Ω⁻¹X (our own).

**nLab:** [Frobenius category](https://ncatlab.org/nlab/show/Frobenius+category). It says: “The stable category of a Frobenius category is canonically a triangulated category.”

**Wikipedia:** [Stable module category](https://en.wikipedia.org/wiki/Stable_module_category). It says: “Taking Ω⁻¹ to be the translation functor and such sequences as above to be exact triangles, the stable module category becomes a triangulated category.”

**Sources:**

- [D. Happel, Triangulated Categories in the Representation Theory of Finite Dimensional Algebras, Cambridge University Press (1988)](https://doi.org/10.1017/CBO9780511629228)

### Over any ring, the syzygy is a functor on the stable category

**Remember:** Ignore maps through projectives, and kernels of projective covers become well defined.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 16D40. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** The stable module category of a ring R keeps all R-modules but treats two module maps as equal when their difference factors through a projective module. The syzygy Ω(M) is the kernel of a surjection P → M with P projective, and in this category any two choices are isomorphic by Schanuel's lemma (our own).

**Problem.** For every ring R, sending M to Ω(M) gives a well-defined additive functor from the stable module category of R to itself.

**How the definition helps.** Any map M → N lifts to a map between the chosen projectives and restricts to a map Ω(M) → Ω(N) (our own). Two lifts differ by a map through the source projective, so the stable class of the restriction is well defined (our own). The same argument shows that maps through projectives go to zero and that sums and composites are kept (our own).

**Wikipedia:** [Stable module category](https://en.wikipedia.org/wiki/Stable_module_category). It says: “One important property of the stable module category is it allows defining the Ω functor for general rings.”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting by perfect complexes makes singularity categories vanish exactly for regular rings

**Remember:** Kill the complexes with finite resolutions; nothing left means regular.

*True by definition.* MSC 18G65 (Stable module categories), 13D09, 13H05. arXiv math.AC, math.RT. Level 3: graduate.

**Definition.** For a commutative Noetherian ring R, the singularity category Dsg(R) is the bounded derived category of finitely generated modules with the perfect complexes made zero (a Verdier quotient). A perfect complex is one isomorphic to a bounded complex of finitely generated projective modules. So Dsg(R) = 0 exactly when every finitely generated module has a finite resolution by finitely generated projectives (our own).

**Problem.** A commutative Noetherian ring R has Dsg(R) = 0 if and only if R is regular, meaning that every localization of R at a prime is a regular local ring.

**How the definition helps.** If Dsg(R) = 0, localizing a finite projective resolution of R/𝔭 resolves the residue field of R\_𝔭, so Auslander–Buchsbaum–Serre makes R\_𝔭 regular (our own). Conversely, over a regular Noetherian ring every bounded complex with finitely generated cohomology is perfect, so the quotient is zero.

**Paper or page:** [More Algebra, tag 066Z](https://stacks.math.columbia.edu/tag/066Z). It says: “a complex of R-modules K• is perfect if and only if K• ∈ Dᵇ(R) and each Hⁱ(K•) is a finite R-module.”

**Sources:**

- [Ragnar-Olaf Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, AMS (2021)](https://doi.org/10.1090/surv/262)

### Stable Hom of syzygies computes Ext over a group algebra

**Remember:** Ext is maps out of the syzygy, ignoring maps through projectives.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 20J06. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** Over the group algebra kG of a finite group, the stable Hom from M to N is the group of module maps modulo those that factor through a projective module. The syzygy Ω(M) is the kernel of a surjection P → M with P projective. Because projective kG-modules are injective, a map out of Ω(M) extends over P exactly when it factors through a projective (our own).

**Problem.** Let G be a finite group, k a field and M, N two kG-modules. Then for every n ≥ 1, Extⁿ(M, N) is isomorphic to the stable Hom from Ωⁿ(M) to N.

**How the definition helps.** The sequence 0 → Ω(M) → P → M → 0 makes Ext¹(M, N) the group Hom(Ω(M), N) modulo the maps that extend over P. By the definition these are exactly the maps through a projective, so Ext¹ is stable Hom. Dimension shifting, Extⁿ(M, N) ≅ Ext¹(Ωⁿ⁻¹(M), N), gives every n ≥ 1.

**Wikipedia:** [Stable module category](https://en.wikipedia.org/wiki/Stable_module_category). It says: “One can show that there exist isomorphisms H̲o̲m̲(Ωⁿ(M), N) ≅ Extⁿ<sub>kG</sub>(M,N) ≅ H̲o̲m̲(M, Ω⁻ⁿ(N)) for every positive integer n.”

**Sources:** none listed. No primary source with a working link was found.

### A right adjoint to the inclusion makes a triangulated subcategory thick

**Remember:** Every object splits into its best A-part and an A-invisible remainder.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT. Level 3: graduate.

**Definition.** A full triangulated subcategory A of D is right admissible if its inclusion has a right adjoint, which gives each object X a best approximation Aₓ → X from A. The right orthogonal A⊥ is the class of objects that receive only zero maps from objects of A.

**Problem.** A strictly full triangulated subcategory A, one closed under isomorphic objects, is right admissible exactly when every X sits in a triangle Aₓ → X → Bₓ → Aₓ\[1\] with Aₓ in A and Bₓ in A⊥. Then A is thick and equals the left orthogonal of A⊥.

**How the definition helps.** The counit Aₓ → X is a bijection on maps from A, so its cone Bₓ lies in A⊥ (our own). Conversely, applying Hom(A, −) to such a triangle shows that Aₓ → X is universal, which gives the right adjoint (our own). An object with no maps to A⊥ has Bₓ = 0 and so lies in A, and left orthogonals are closed under summands (our own).

**Paper or page:** [Derived, Lemma 13.40.7](https://stacks.math.columbia.edu/tag/0CQS). It says: “for every X in D there exists a distinguished triangle A → X → B → A\[1\] in D with A ∈ Ob(A) and B ∈ Ob(A⊥).”

**Sources:** none listed. No primary source with a working link was found.

### Axioms of a t-structure make truncation right adjoint to inclusion

**Remember:** Maps from low objects cannot see the high part.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18A40. arXiv math.KT. Level 3: graduate.

**Definition.** A t-structure splits each object X by a triangle Lₓ → X → Hₓ → Lₓ\[1\] into a low part Lₓ in L and a high part Hₓ in H. Here L and H are full isomorphism-closed subcategories with L\[1\] ⊆ L, H\[−1\] ⊆ H, and no nonzero maps from L to H (our own formulation).

**Problem.** In a t-structure, taking the low part is right adjoint to the inclusion of low objects.

**How the definition helps.** For A in L, the maps from A to Hₓ and to Hₓ\[−1\] vanish, because H\[−1\] ⊆ H (our own). The long exact Hom sequence then gives Hom(A, Lₓ) ≅ Hom(A, X), naturally in A, so X ↦ Lₓ is the right adjoint (our own).

**nLab:** [t-structure](https://ncatlab.org/nlab/show/t-structure). It says: “For all objects X ∈ C there is a fiber sequence”

**Sources:** none listed. No primary source with a working link was found.

### Countable direct sums make every idempotent split in a triangulated category

**Remember:** Repeat an idempotent forever, and the telescope is its image.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT. Level 3: graduate.

**Definition.** The telescope of a sequence of maps X₀ → X₁ → X₂ → … is the cone of 1 − s on ⊕ₙ Xₙ, where s maps summand n into summand n+1 by the given map (our own). For an idempotent e on X, the telescope of X → X → … with every map equal to e is a summand of X on which e acts as the identity (our own).

**Problem.** If a pre-triangulated category has countable direct sums, then every idempotent in it splits, so the category is Karoubian. The same holds if it has countable products.

**How the definition helps.** The telescope needs only countable sums, and the telescope splitting theorem gives X ≅ Tel(e) ⊕ Tel(1 − e), with e projecting onto Tel(e) (our own). So every idempotent splits. The opposite category turns products into sums and gives the product case (our own).

**Paper or page:** [Derived, Lemma 13.4.14](https://stacks.math.columbia.edu/tag/05QW). It says: “If D has countable coproducts, then D is Karoubian.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the derived category by localization makes homology factor through it

**Remember:** Invert exactly the maps that homology already sees as isomorphisms.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 3: graduate.

**Definition.** The derived category is obtained from chain complexes by making every quasi-isomorphism invertible, a quasi-isomorphism being a chain map that is an isomorphism on all homology groups. By its universal property, every functor that already sends quasi-isomorphisms to isomorphisms factors uniquely through it.

**Problem.** Each homology functor on chain complexes factors uniquely through the derived category.

**How the definition helps.** Homology sends quasi-isomorphisms to isomorphisms by the definition of quasi-isomorphism, so the universal property gives the factorization (our own). If the derived category is built from projective resolutions instead, one must first prove that it is this localization (our own).

**nLab:** [derived category](https://ncatlab.org/nlab/show/derived+category). It says: “the quasi-isomorphisms of chain complexes become true isomorphisms and that D(A) is universal with respect to this property.”

**Sources:**

- [Jean-Louis Verdier, Des catégories dérivées des catégories abéliennes, Astérisque 239](https://doi.org/10.24033/ast.364)

### Defining the Serre functor by representability makes it unique and exact

**Remember:** Maps into SX are the duals of maps out of X.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** In a k-linear triangulated category with finite-dimensional Hom spaces, a Serre functor is an autoequivalence S with isomorphisms Hom(Y, SX) ≅ Hom(X, Y)\*, natural in X and Y. So SX is the object that represents Y ↦ Hom(X, Y)\*, which fixes it up to unique isomorphism (our own).

**Problem.** A Serre functor is unique up to unique natural isomorphism respecting its duality isomorphisms. It is exact and therefore preserves distinguished triangles.

**How the definition helps.** Yoneda's lemma joins any two representing objects by a unique isomorphism that respects the duality, and naturality in X makes these isomorphisms natural (our own). The exactness theorem for Serre functors gives compatibility with shifts and distinguished triangles.

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “A Serre functor does not always exist, but when it does then it is unique up to graded natural isomorphism.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.3.5](https://stacks.math.columbia.edu/tag/0FY6), [Derived Categories of Varieties, Lemma 57.3.1](https://stacks.math.columbia.edu/tag/0FY4). It says: “If a Serre functor exists, then it is unique up to unique isomorphism and it is an exact functor of triangulated categories.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### Defining Verdier quotients by a universal property makes exact functors factor

**Remember:** Invert maps whose cones lie in A, and A becomes zero.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 3: graduate.

**Definition.** For a triangulated subcategory A of B, the Verdier quotient B/A makes invertible every map whose cone lies in A (our own). This makes every object of A zero, since the map 0 → A has cone A (our own).

**Problem.** Every exact functor out of B that sends A to zero factors uniquely through the Verdier quotient B/A.

**How the definition helps.** An exact functor that kills A sends each such cone to zero, and a map with zero cone is an isomorphism (our own). The universal property of localization gives a unique factorization, which is exact because triangles of B/A come from triangles of B (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “universal among all triangulated functors B → D which send objects of A to objects isomorphic to 0.”

**Sources:**

- [Jean-Louis Verdier, Des catégories dérivées des catégories abéliennes, Astérisque 239](https://doi.org/10.24033/ast.364)

### Finite Hom spaces let every exceptional object split off a semiorthogonal piece

**Remember:** Exceptional: self-maps are only scalars, and no shifted self-maps.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** In a k-linear triangulated category, an object E is exceptional if it behaves like a point: Hom(E, E) = k and Hom(E, E\[t\]) = 0 for every t ≠ 0. Then every X receives an evaluation map from the sum ⊕ₜ Hom(E, X\[t\]) ⊗ E\[−t\], which sees every map from a shift of E exactly once (our own).

**Problem.** Let T be a k-linear triangulated category whose spaces ⊕ₜ Hom(X, Y\[t\]) are finite-dimensional, and let E be exceptional. Then ⟨E⟩, the finite sums of shifts of E, is right admissible, so T = ⟨E⊥, ⟨E⟩⟩.

**How the definition helps.** The sum R(X) = ⊕ₜ Hom(E, X\[t\]) ⊗ E\[−t\] is finite by hypothesis, and exceptionality makes evaluation R(X) → X a bijection on maps from every shift of E (our own). So evaluation gives the right adjoint to the inclusion of ⟨E⟩, and its cone lies in E⊥, giving the decomposition (our own).

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “In a proper triangulated category 𝒯 over k, such as the bounded derived category of coherent sheaves on a smooth projective variety, every exceptional collection generates an admissible subcategory, and so it determines a semiorthogonal decomposition”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### K-injective complexes make products in the derived category termwise products

**Remember:** Into K-injectives, homotopy classes are derived maps, so products are termwise.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18E10. arXiv math.CT. Level 3: graduate.

**Definition.** A complex I is K-injective if every map from an acyclic complex to I is null-homotopic. Equivalently, maps into I in the derived category are just chain maps up to homotopy, as in the homotopy category.

**Problem.** In a Grothendieck abelian category, the derived category has all products. The product of a family is the termwise product of K-injective complexes that represent its members.

**How the definition helps.** In the homotopy category the termwise product is a product, and maps into K-injective complexes are the same there and in the derived category. Termwise products of K-injective complexes are K-injective (Stacks Lemma 13.31.5), so they give products in the derived category. Grothendieck abelian categories have K-injective resolutions (Stacks Theorem 19.12.6), so every family has such representatives.

**Paper or page:** [Injectives, Lemma 19.13.4](https://stacks.math.columbia.edu/tag/07D9). It says: “Let A be a Grothendieck abelian category. Then (1) D(A) has both direct sums and products, (2) direct sums are obtained by taking termwise direct sums of any complexes, (3) products are obtained by taking termwise products of K-injective complexes.”

**Sources:** none listed. No primary source with a working link was found.

### Non-degeneracy makes the cohomology functors of a t-structure detect isomorphisms

**Remember:** Non-degenerate t-structures hide nothing from their cohomology.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT. Level 3: graduate.

**Definition.** A t-structure on D has cohomology functors Hⁿ from D to its heart. It is non-degenerate if the only object lying in every D≤n is zero, and likewise for every D≥n. Such objects have all Hⁿ zero, so non-degeneracy removes nonzero objects that cohomology cannot see (our own).

**Problem.** For a non-degenerate t-structure, a map f is an isomorphism exactly when Hⁿ(f) is an isomorphism for every n. Also, D≤n then consists exactly of the objects whose Hⁱ vanish for all i &gt; n.

**How the definition helps.** Non-degeneracy gives the truncation criterion: X lies in D≤n exactly when Hⁱ(X) = 0 for all i &gt; n, and dually for D≥n (our own). So an object with zero cohomology lies in every D≤n and is zero, and applied to the cone of f this detects isomorphisms (our own). The degenerate pair (D, 0) on a nonzero D has zero heart, so its cohomology misses every object (our own).

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “A t-structure is non-degenerate if the intersection of all D≤n, as well as the intersection of all D≥n, consists only of zero objects. For a non-degenerate t-structure, the collection of functors {Hⁿ}ₙ∈ℤ is conservative.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring thickness makes a subcategory exactly the kernel of its Verdier quotient

**Remember:** A quotient kills summands too, so kernels are always thick.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.CT. Level 3: graduate.

**Definition.** The Verdier quotient D/B inverts every map of D whose cone lies in the triangulated subcategory B. It therefore sends each object of B to zero, and hence every direct summand of one. B is thick if it contains every direct summand of each of its objects.

**Problem.** The objects that become zero in D/B are exactly the direct summands of objects of B. So B is the kernel of the quotient functor exactly when B is thick.

**How the definition helps.** The Verdier kernel theorem says the objects sent to zero are exactly the summands of objects of B, so the kernel is B exactly when B is thick. In bounded complexes of finite-dimensional vector spaces, those with even Euler characteristic form a triangulated subcategory (our own). It contains k ⊕ k but not k, yet the quotient kills k (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “The Verdier quotient B/A has the property that the only objects whose images in B/A are isomorphic to the zero object are the objects from the thickening of A (the smallest thick subcategory containing A).”

**Paper or page:** [Derived, Lemma 13.6.9](https://stacks.math.columbia.edu/tag/05RK). It says: “In other words it is the smallest strictly full saturated triangulated subcategory of D containing B.”

**Sources:** none listed. No primary source with a working link was found.

### Semiorthogonal decompositions split the Grothendieck group into a direct sum

**Remember:** Each object breaks uniquely into pieces, so its class breaks too.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18F30, 14F08. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** A semiorthogonal decomposition D = ⟨A₁, …, Aₙ⟩ is a list of full triangulated subcategories with no nonzero maps from Aⱼ to Aᵢ when j &gt; i. Every object has a tower of triangles from 0 up to it whose successive cones lie in Aₙ, …, A₁. The orthogonality makes this tower unique up to unique isomorphism, so each piece is an exact functor of the object (our own).

**Problem.** A semiorthogonal decomposition D = ⟨A₁, …, Aₙ⟩ gives K₀(D) ≅ K₀(A₁) ⊕ … ⊕ K₀(Aₙ). Here K₀ is the Grothendieck group, generated by classes of objects with \[Y\] = \[X\] + \[Z\] for each distinguished triangle X → Y → Z.

**How the definition helps.** Each piece is an exact functor to Aᵢ, so taking classes of pieces gives a map from K₀(D) to K₀(A₁) ⊕ … ⊕ K₀(Aₙ) (our own). It inverts the map that adds classes, because \[X\] is the sum of the classes of its pieces and an object of Aᵢ is its only piece (our own).

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “Using that observation, a semiorthogonal decomposition 𝒯=⟨𝒜₁,…,𝒜ₙ⟩ implies a direct sum splitting of Grothendieck groups”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### The octahedral axiom makes maps with cones in a subcategory compose

**Remember:** The cone of a composite is an extension of the two cones.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.CT. Level 3: graduate.

**Definition.** Fix a full triangulated subcategory D′ of D, and let S be the class of maps whose cone is isomorphic to an object of D′. The octahedral axiom places the cone of a composite vu in a triangle with the cones of u and v (our own).

**Problem.** For every full triangulated subcategory D′ of a triangulated category D, the class S is a multiplicative system compatible with the triangulated structure. So the Verdier quotient D/D′, defined as S⁻¹D, exists as a triangulated category.

**How the definition helps.** Since D′ is closed under extensions, the cone of vu lies in D′ when the cones of u and v do, so S is closed under composition (our own). Stacks Lemma 13.6.6 checks the remaining conditions of a compatible multiplicative system.

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “Putting these together, the octahedral axiom asserts the "third isomorphism theorem":”

**Paper or page:** [Derived, Lemma 13.6.6](https://stacks.math.columbia.edu/tag/05RG). It says: “Then S is a multiplicative system compatible with the triangulated structure on D.”

**Sources:** none listed. No primary source with a working link was found.

### Cartesian products force a unique comonoid structure on every object

**Remember:** Deleting either output must return the input, so copying is the diagonal.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 3: graduate.

**Definition.** In a cartesian monoidal category the tensor is the product and the unit is terminal, so a map into X × X is a pair of maps into X. A comonoid on X is a coassociative copy map X → X × X with a deletion map X → I. Deleting either output after copying must give back the identity of X.

**Problem.** In a cartesian monoidal category every object has exactly one comonoid structure. Copying is unchanged by swapping the outputs, and every map preserves copying and deletion.

**How the definition helps.** Deletion must be the unique map to the terminal object, and deleting one output of a pair is a projection. So both components of the copy map are the identity, and the copy map is the diagonal. The diagonal satisfies the laws, is unchanged by swapping outputs, and commutes with every map.

**nLab:** [Markov category](https://ncatlab.org/nlab/show/Markov+category), [Fox's theorem](https://ncatlab.org/nlab/show/Fox%27s+theorem). It says: “In a cartesian monoidal category every object is equipped with a unique commutative comonoid structure, defined in terms of the universal property of the product.”

**Sources:**

- [T. Fox, Coalgebras and cartesian categories, Communications in Algebra 4 (1976)](https://doi.org/10.1080/00927877608822127)

### Cartesian products turn the Hopf monoid antipode into group inverse

**Remember:** Copying is the diagonal, so the antipode law says x·S(x) = e.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16T05. arXiv math.CT, math.QA. Level 3: graduate.

**Definition.** A Hopf monoid is a monoid (μ, η) with a comonoid structure (δ, ε) of monoid maps, and an antipode S with μ(1 ⊗ S)δ = ηε = μ(S ⊗ 1)δ. With cartesian products as tensor, δ is forced to be the diagonal x ↦ (x, x), so these equations say x·S(x) = e = S(x)·x (our own).

**Problem.** With categorical products as tensor, Hopf monoids are exactly group objects. In sets, they are ordinary groups.

**How the definition helps.** Under cartesian products the comonoid is forced to be the diagonal and the terminal map, and every map preserves these (our own). So a bimonoid is just a monoid object, and the antipode equations say that S is a two-sided inverse.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “A Hopf monoid in a cartesian monoidal category V is the same as a group object in V.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Day convolution by colimit extension makes Yoneda preserve the tensor

**Remember:** Tensor the objects first, then take their presheaves.

*True by definition. Confidence: medium.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** Day convolution is the tensor product of set-valued presheaves on a small monoidal category C that preserves colimits in each variable. It sends the representables Hom(−, X) and Hom(−, Y) to Hom(−, X ⊗ Y), and its unit is Hom(−, I) for the unit I of C.

**Problem.** The Yoneda embedding sends X to Hom(−, X). It sends the tensor of C to the Day tensor, and the unit of C to the unit of the Day tensor.

**How the definition helps.** On representables the Day tensor gives Hom(−, X ⊗ Y) and the unit Hom(−, I), and these are the structure isomorphisms of a strong monoidal Yoneda embedding. The density theorem writes every presheaf as a colimit of representables, which gives the extension formula (our own).

**nLab:** [Day convolution](https://ncatlab.org/nlab/show/Day+convolution). It says: “The Yoneda embedding constitutes a strong monoidal functor”

**Sources:** none listed. No primary source with a working link was found.

### Mac Lane's coherence theorem is true for formal diagrams only

**Remember:** Coherence is about bracketed words, not the objects they evaluate to.

*Rules out counterexamples.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 3: graduate.

**Definition.** A formal monoidal diagram has bracketed words in variables and the unit as vertices, and composites and tensors of identities, associators, unitors and their inverses as arrows. Its vertices are words, not objects, so two different bracketings stay different even when they evaluate to the same object (our own).

**Problem.** Mac Lane's coherence theorem: in any monoidal category, every formal diagram of associators, unitors and identities commutes.

**How the definition helps.** Mac Lane's theorem proves that every formal diagram commutes, and the restriction to formal diagrams keeps it true. In Isbell's skeletal category of sets, the associator on three countably infinite factors is a nonidentity map from an object to itself. Its two ends are different formal bracketings, so no formal diagram compares it with an identity.

**nLab:** [Mac Lane's proof of the coherence theorem for monoidal categories](https://ncatlab.org/nlab/show/Mac+Lane%27s+proof+of+the+coherence+theorem+for+monoidal+categories), [coherence theorem](https://ncatlab.org/nlab/show/coherence+theorem), [coherence and strictification for monoidal categories](https://ncatlab.org/nlab/show/coherence+and+strictification+for+monoidal+categories). It says: “So, in order for coherence to work, we must change it to the statement that every "formal" diagram commutes.”

**Sources:**

- [Saunders Mac Lane, Natural associativity and commutativity, Rice University Studies 49 (1963) 28–46; reprinted in Saunders Mac Lane: Selected Papers, Springer (1979)](https://doi.org/10.1007/978-1-4615-7831-4_19)

### The augmented simplex category is the free monoidal category on a monoid

**Remember:** The one-point ordinal is the universal monoid: merge points, or create one.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18C15, 18N50. arXiv math.CT. Level 3: graduate.

**Definition.** The augmented simplex category Δₐ has the finite ordinals, including the empty one, as objects and order-preserving maps as arrows. Ordinal sum, placing one ordinal before the other, makes it strict monoidal. The one-point ordinal 1 is a monoid in it, with the unique maps 1 + 1 → 1 and 0 → 1 as multiplication and unit (our own).

**Problem.** Monoids in a strict monoidal category B are the same as strict monoidal functors Δₐ → B. Monads in a 2-category K are the same as 2-functors into K from BΔₐ, the one-object 2-category whose morphisms form Δₐ.

**How the definition helps.** Each order-preserving map is a tensor of maps n → 1, one per output point, and a monoid sends n → 1 to n-fold multiplication (our own). Associativity and the unit laws make this a strict monoidal functor, and the only one sending 1 to the monoid. The monad case applies this to the endomorphisms of an object of K (our own).

**nLab:** [simplex category](https://ncatlab.org/nlab/show/simplex+category). It says: “thus becomes the universal category-equipped-with-a-monoid, in the sense that for any strict monoidal category”

**Sources:**

- [Saunders Mac Lane, Categories for the Working Mathematician, Graduate Texts in Mathematics 5, Springer](https://doi.org/10.1007/978-1-4757-4721-8)

### The Euler characteristic is the trace of the identity

**Remember:** Euler characteristic is dimension: create X and its dual, swap them, annihilate.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M10, 55N10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For a dualizable object X in a symmetric monoidal category, the Euler characteristic is the trace of the identity: coevaluation I → X ⊗ X\*, then the swap, then evaluation X\* ⊗ X → I. It uses only the symmetric monoidal structure, so strong symmetric monoidal functors preserve it.

**Problem.** For a bounded complex of finitely generated free modules over a commutative ring, the Euler characteristic is the alternating sum of ranks. For a compact Euclidean neighbourhood retract X, Σ∞₊X is dualizable and its Euler characteristic is the alternating sum of Betti numbers.

**How the definition helps.** A strong symmetric monoidal functor preserves the composite, so the Euler characteristic can be computed after any such functor. For free complexes the trace is a sum over degrees, and the graded swap gives the sign (−1)ⁿ in degree n (our own). Dold–Puppe duality makes compact Euclidean neighbourhood retracts dualizable, and rational homology turns the trace into the alternating sum of Betti numbers (our own).

**nLab:** [Euler characteristic](https://ncatlab.org/nlab/show/Euler+characteristic). It says: “Since the categorical definition is purely in terms of the symmetric monoidal structure, Euler characteristics are preserved by any symmetric monoidal functor (as long as enough of its structure maps are isomorphisms).”

**Sources:**

- [K. Ponto, M. Shulman, Traces in symmetric monoidal categories, Expositiones Mathematicae 32 (2014), arXiv:1107.6032](https://arxiv.org/abs/1107.6032)

### The Frobenius law makes every Frobenius monoid its own dual

**Remember:** Multiply then apply the counit to pair; unit then comultiply to copair.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16D40. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A Frobenius monoid is an object with a monoid structure (μ, η) and a comonoid structure (δ, ε) satisfying the Frobenius law (1 ⊗ μ)(δ ⊗ 1) = δμ = (μ ⊗ 1)(1 ⊗ δ). The law makes the pairing εμ and the copairing δη cancel, as an evaluation and a coevaluation must (our own).

**Problem.** Every Frobenius monoid is its own dual. Over a commutative ring k, its underlying module is a direct summand of a finite free k-module.

**How the definition helps.** The Frobenius law, then the unit and counit laws, give both triangle identities for εμ and δη, so the object is its own dual. Over k, write δη(1) = ∑ xᵢ ⊗ yᵢ, and one triangle identity gives x = ∑ xᵢ ε(yᵢ x) (our own). So x ↦ (ε(yᵢ x))ᵢ splits the module off a finite free module (our own).

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra). It says: “A Frobenius algebra A in a monoidal category is an object dual to itself.”

**Sources:** none listed. No primary source with a working link was found.

### The braid category as a free braided category makes braid groups act

**Remember:** Braids are free, so any object can be braided like strands.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories), 20F36. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** The braid category is the free braided strict monoidal category on one object. So each object X of a braided strict monoidal category gives a unique strict braided monoidal functor sending the generator to X. The automorphisms of the n-th tensor power of the generator are the n-strand braids (Joyal–Street).

**Problem.** In a braided monoidal category, the n-strand braid group acts on the nth tensor power of any object. For a category that is not strict, first fix a bracketing of that power.

**How the definition helps.** The functor sends each n-strand braid to an automorphism of the n-th tensor power of X, and functoriality makes this an action (our own explanation). Joyal and Street's coherence theorem identifies the free category with geometric braids, so its automorphism groups are Artin's braid groups. A non-strict braided category is braided equivalent to a strict one, which carries the action to the power with a fixed bracketing (our own).

**nLab:** [braided monoidal category](https://ncatlab.org/nlab/show/braided+monoidal+category). It says: “The braid category is the free braided strict monoidal category on an object.”

**Sources:**

- [André Joyal and Ross Street, Braided Tensor Categories (1993)](https://doi.org/10.1006/aima.1993.1055)

### Frobenius–Perron dimension is defined and positive in every fusion category

**Remember:** The Frobenius–Perron dimension is how fast tensor powers of X grow.

*Makes the theorem clean to state or prove.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 16T05. arXiv math.QA. Level 3: graduate.

**Definition.** For an object X of a fusion category, tensoring with X acts on the Grothendieck ring by a matrix with nonnegative integer entries in the basis of simple objects. FPdim(X) is the spectral radius of this matrix, which measures how fast the tensor powers of X grow.

**Problem.** In every fusion category, FPdim is defined for every object and is multiplicative, FPdim(X ⊗ Y) = FPdim(X)·FPdim(Y). It is at least 1 for every nonzero object.

**How the definition helps.** The matrices have nonnegative entries, so Frobenius–Perron theory applies whatever the signs of other categorical dimensions. It makes the spectral radii a positive ring homomorphism from the Grothendieck ring to ℝ, hence multiplicative (our own). A simple X and its dual have equal FPdim, and X ⊗ X\* contains the unit, so FPdim(X)² ≥ 1 (our own).

**nLab:** [Frobenius-Perron dimension](https://ncatlab.org/nlab/show/Frobenius-Perron+dimension). It says: “Even in spherical categories where there is a good notion of trace, there is no guarantee that the quantum dimension will be positive.”

**Sources:**

- [Pavel Etingof, Dmitri Nikshych, Viktor Ostrik, On fusion categories, Annals of Math. 162 (2005) 581–642, arXiv:math/0203060](https://arxiv.org/abs/math/0203060)
- [Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, Victor Ostrik, Tensor categories, Mathematical Surveys and Monographs 205, AMS (2015)](https://doi.org/10.1090/surv/205)

### Loop actions diagonalize fusion

**Remember:** An encircling loop acts by a scalar on each simple label.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** In a complex ribbon fusion category, each label U acts on every object by encircling its strand with a U-loop, a natural endomorphism of the identity functor. On a simple object this loop acts by a scalar, since simple objects have only scalar endomorphisms. Modularity means that this map from the fusion algebra to natural endomorphisms of the identity is an algebra isomorphism (our own formulation).

**Problem.** In a modular complex ribbon fusion category, write S(i,j) for the trace of the double exchange and 1 for the unit label. The functions i ↦ S(i,j)/S(1,j) identify the fusion algebra with a product of copies of ℂ, one per j.

**How the definition helps.** Encircling by U and then by V equals encircling by U ⊗ V, so the scalars multiply. Closing the strand j multiplies its scalar by the dimension S(1, j) and gives S(i, j), so the scalar is S(i, j)/S(1, j) (our own). Modularity, which is equivalent to invertibility of S, makes this an isomorphism onto one copy of ℂ per simple j.

**nLab:** [modular tensor category](https://ncatlab.org/nlab/show/modular+tensor+category). It says: “straight V-line encircled by U-loop”

**Sources:**

- [Yi-Zhi Huang, Rigidity and modularity of vertex tensor categories](https://doi.org/10.1142/S0219199708003083)

### Nondegeneracy excludes singular torus matrices

**Remember:** Transparent means double exchange does nothing; modular means only the unit is.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** In a complex ribbon fusion category, one with finitely many simple objects, duals, a braiding and twists, a simple object is transparent if exchanging it twice with any object gives the identity. The category is modular when the tensor unit is its only transparent simple object up to isomorphism.

**Problem.** Let S(i, j) be the categorical trace of the double exchange of the simple labels i and j, which closes both lines into linked loops. The matrix S is invertible exactly when the category is modular.

**How the definition helps.** If t is transparent, its double exchange is the identity, so S(t, j) = dim(t)·dim(j) and the row of t is a multiple of the unit row (our own). So S is singular, as the odd line in complex super vector spaces shows. Müger's modularity criterion gives the converse: if only the unit is transparent, S is invertible (our own).

**nLab:** [modular tensor category](https://ncatlab.org/nlab/show/modular+tensor+category). It says: “the matrix (sⁱʲ) = (Uᵢ-circle threading through the Uⱼ -circle) is non-degenerate.”

**Sources:**

- [Vladimir Turaev, Modular Categories and 3-Manifold Invariants](https://doi.org/10.1142/S0217979292000876)
- [Michael Müger, On the Structure of Modular Categories](https://doi.org/10.1112/s0024611503014187)

### Sewing counts torus labels

**Remember:** Cut one torus cycle and count one block per label.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** A modular functor assigns finite-dimensional spaces to surfaces whose boundary circles carry labels from a finite set. Cutting along a circle splits the space into a direct sum over labels, with dual labels on the two new circles. The sphere with two holes has a one-dimensional space for a pair of dual labels and zero otherwise.

**Problem.** The space assigned to the closed torus has dimension equal to the number of labels.

**How the definition helps.** Cutting the torus along one circle gives a sphere with two holes, with one summand per label (our own). Each summand carries a label and its dual, so it has dimension one, and the dimensions add up to the number of labels.

**nLab:** [modular functor](https://ncatlab.org/nlab/show/modular+functor). It says: “E respects sewing: if Xφ is obtained from X by cutting along a circle and giving the same label φ ∈ Φ to both resulting boundaries”

**Sources:**

- [Graeme Segal, The Definition of Conformal Field Theory](https://doi.org/10.1017/CBO9780511526398.019)

### Tannaka reconstruction works because the forgetful functor is kept

**Remember:** Keep the forgetful functor, and the algebra comes back as its endomorphisms.

*Rules out counterexamples.* MSC 18M25 (Tannakian categories), 18A23, 16T05. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** For an algebra A over a field k, the fibre functor F sends each left A-module to its underlying vector space. End(F) is the algebra of families of linear maps, one on each module, that commute with every module map.

**Problem.** Every algebra A is recovered as End(F), where F is the fibre functor on all A-modules (Tannaka reconstruction). Without F, the module category alone does not determine A.

**How the definition helps.** Naturality along the module map A → M sending 1 to m forces each family to act on M by left multiplication by its value on 1 in A (our own). So End(F) ≅ A, with composition matching multiplication. Without F the module category fails: k and Mₙ(k) have equivalent module categories for n ≥ 2 (our own).

**nLab:** [Tannaka duality](https://ncatlab.org/nlab/show/Tannaka+duality). It says: “The fiber functor is necessary; for example, in the context of reconstruction of associative algebras, not remembering the underlying vector spaces results in reconstructing two different algebras with equivalent module categories (cf. Morita equivalence).”

**Sources:**

- [André Joyal, Ross Street, An introduction to Tannaka duality and quantum groups, Category Theory (Como 1990), Lecture Notes in Math. 1488 (1991) 413–492](https://doi.org/10.1007/BFb0084235)
- [Pierre Deligne, Catégories tannakiennes, The Grothendieck Festschrift vol. II, Progress in Math. 87 (1990) 111–195](https://publications.ias.edu/sites/default/files/60_categoriestanna.pdf)

### No-cloning means that vector spaces have no natural diagonal

**Remember:** A copy map natural for scaling sees 2 become 4.

*Makes the theorem clean to state or prove.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 81P45. arXiv quant-ph, math.CT. Level 3: graduate.

**Definition.** A uniform cloning family is a linear map d(V): V → V ⊗ V for each complex vector space V, with (f ⊗ f)d(V) = d(W)f for every linear f: V → W. For f equal to c times the identity this says c²d(V) = c·d(V), since f ⊗ f scales by c². The maps must also be coassociative and cocommutative, with d(ℂ)(1) = 1 ⊗ 1 (our own).

**Problem.** Complex vector spaces with their tensor product admit no uniform cloning family.

**How the definition helps.** Taking c = 2 gives 4d(V) = 2d(V), so every d(V) is zero (our own). This contradicts d(ℂ)(1) = 1 ⊗ 1.

**nLab:** [no-cloning theorem](https://ncatlab.org/nlab/show/no-cloning+theorem). It says: “Quantum theoretically, this effect is ultimately due to the non-cartesian nature of the tensor product of vector/Hilbert spaces of quantum states (category theoretically it refers to this tensor product lacking natural diagonal morphisms)”

**Sources:**

- [S. Abramsky, No-Cloning in categorical quantum mechanics, in: Semantic Techniques for Quantum Computation, CUP (2009), arXiv:0910.2401](https://arxiv.org/abs/0910.2401)
- [W. K. Wootters, W. H. Zurek, A single quantum cannot be cloned, Nature 299 (1982) 802–803](https://doi.org/10.1038/299802a0)

### In a linear exponential comonad, every coalgebra can copy and delete

**Remember:** Cofree coalgebras can copy and delete, so every coalgebra can.

*Makes the theorem clean to state or prove.* MSC 18M45 (Categorical aspects of linear logic), 03B47, 18C15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A linear exponential comonad ! is a symmetric monoidal comonad whose cofree coalgebras !A carry natural commutative comonoids, a copy map !A → !A ⊗ !A and a deletion !A → I. These must be monoidal natural transformations and coalgebra maps, and the comultiplication !A → !!A must preserve them.

**Problem.** For a linear exponential comonad !, every !-coalgebra is a comonoid, so the category of !-coalgebras is cartesian monoidal. If the linear category has finite products, the Seely isomorphism !(A × B) ≅ !A ⊗ !B follows.

**How the definition helps.** A coalgebra a: A → !A copies by a, then cofree copying, then the counit on each output, and deletes by a then cofree deletion (our own). The axioms make these natural compatible comonoids, so the tensor product is the cartesian product of coalgebras. The cofree functor is right adjoint to forgetting, so it preserves products, giving !(A × B) ≅ !A ⊗ !B (our own).

**nLab:** [!-modality](https://ncatlab.org/nlab/show/%21-modality). It says: “It follows automatically that all !-coalgebras are comonoids, and therefore that the category of all !-coalgebras (not just the cofree ones) is cartesian monoidal.”

**Sources:**

- [N. Benton, G. Bierman, V. de Paiva, M. Hyland, Linear λ-calculus and categorical models revisited, Computer Science Logic 1992, Lecture Notes in Computer Science 702 (1993) 61–84](https://doi.org/10.1007/3-540-56992-8_6)

### Endomorphism operads make restriction of algebras ordinary composition

**Remember:** An algebra is an operad map into End(A).

*True by definition.* MSC 18M60 (Operads (general)). arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** The endomorphism operad End(A) has as n-ary operations all maps from n copies of A to A, composed by plugging outputs into inputs. A P-algebra structure on A is an operad map P → End(A).

**Problem.** A map of operads Q → P turns every P-algebra into a Q-algebra on the same object. For example, a commutative algebra is an associative algebra.

**How the definition helps.** Composing a P-algebra P → End(A) with a map Q → P gives an operad map Q → End(A), which is a Q-algebra. For example, the map from the associative to the commutative operad sends multiplication to multiplication, so a commutative algebra is associative (our own).

**nLab:** [endomorphism operad](https://ncatlab.org/nlab/show/endomorphism+operad). It says: “The structure of an algebra over an operad on an object A ∈ C over an operad P is equivalently a morphism of operads ρ: P → End(A)”

**Sources:**

- [J. P. May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271 (1972)](https://doi.org/10.1007/BFb0067491)

### In a multicategory, the strong universal property of tensors gives associativity

**Remember:** A tensor product must absorb the pair A, B in any context.

*Makes the theorem clean to state or prove.* MSC 18M65 (Non-symmetric operads, multicategories, generalized multicategories), 18M05. arXiv math.CT. Level 3: graduate.

**Definition.** In a multicategory, a tensor of A and B is an object A ⊗ B with a map (A, B) → A ⊗ B. Every multimorphism with A, B as adjacent inputs must factor uniquely through it, whatever other inputs surround them. A representable multicategory has such a tensor for every pair, and a unit object that does the same for the empty list.

**Problem.** In a representable multicategory, the tensor products defined by this universal property are associative and unital up to coherent isomorphism. So representable multicategories are equivalent to monoidal categories (Hermida).

**How the definition helps.** Because A, B can be replaced inside any longer list, both (A ⊗ B) ⊗ C and A ⊗ (B ⊗ C) represent the multimorphisms (A, B, C) → X. Uniqueness of representing objects gives the associator, and uniqueness of factorizations gives its coherence. The plain universal property, for maps (A, B) → X alone, defines A ⊗ B but does not give associativity.

**nLab:** [tensor product](https://ncatlab.org/nlab/show/tensor+product), [representable multicategory](https://ncatlab.org/nlab/show/representable+multicategory). It says: “For this we need the stronger property that any multilinear map D₁,…,Dₘ,A,B,E₁,…,Eₙ → C factors uniquely through A,B → A⊗B via a multilinear map D₁,…,Dₘ, A⊗B ,E₁,…,Eₙ → C.”

**Sources:**

- [Claudio Hermida, Representable multicategories, Adv. Math. 151 (2000) 164–225](https://doi.org/10.1006/aima.1999.1877)
- [Claudio Hermida, From coherent structures to universal properties, J. Pure Appl. Algebra 165 (2001) 7–61, arXiv:math/0006161](https://arxiv.org/abs/math/0006161)

### A species with exactly one empty structure has a multiplicative inverse

**Remember:** One empty structure: invert it like a power series 1 + x.

*Rules out counterexamples. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 05A15. arXiv math.CO, math.CT. Level 3: graduate.

**Definition.** A species G assigns to each finite set its set of G-structures, functorially along bijections. Its positive part G₊ keeps the structures on nonempty sets and drops those on the empty set, so exactly one empty structure means G = 1 + G₊. Virtual species allow formal differences of species.

**Problem.** A species G with exactly one structure on the empty set has a multiplicative inverse, given by an alternating geometric series in G₊.

**How the definition helps.** As for a power series 1 + x, the alternating geometric series 1 − G₊ + G₊² − … inverts G = 1 + G₊. The sum is finite on each set, because G₊ᵏ needs k nonempty blocks and vanishes on sets with fewer than k elements (our own). The species of nonempty sets has no empty structure, so no product with it has exactly one (our own).

**Paper or page:** [On combinatorial differential operators on species of structures](https://arxiv.org/abs/2305.05059). It says: “Let G be a species of structures such that G(0) = 1. Then the multiplicative inverse of G is given by G⁻¹ = 1/G = Σₖ≥₀ (−1)ᵏ(G₊)ᵏ”

**Sources:**

- [Arthur Gonçalves Fidalgo, On combinatorial differential operators on species of structures, arXiv:2305.05059 (2023)](https://arxiv.org/abs/2305.05059)

### Combinatorial species turn generating function identities into isomorphisms

**Remember:** A species is a kind of structure you can relabel.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 05A15. arXiv math.CO, math.CT. Level 3: graduate.

**Definition.** A species F assigns to each finite set the finite set of structures of some kind on it, and to each bijection the relabelling of structures. Its exponential generating function is ∑ₙ \|F(n)\| xⁿ/n!, which counts the labelled structures on n-element sets.

**Problem.** Exponential generating functions take species sums and Cauchy products to sums and products of power series. They take composition to power-series composition when the inner species has no empty structure. Thus an isomorphism of species gives an identity of generating functions.

**How the definition helps.** The generating function only counts structures, so isomorphic species have equal coefficients. A sum chooses a summand, a product splits the labels into an ordered pair of sets, and composition puts inner structures on the blocks of a partition (our own). The labelled counting formulas then give the sum, product and composition of power series.

**nLab:** [species](https://ncatlab.org/nlab/show/species). It says: “since the generating function of the Cauchy product of species is the product of their generating functions.”

**Sources:**

- [André Joyal, Une théorie combinatoire des séries formelles, Advances in Mathematics 42 (1981) 1–82](https://doi.org/10.1016/0001-8708(81)90052-9)

### Adjoint equivalence data carry no more information than being an equivalence

**Remember:** Add the triangle laws, and the inverse data become unique.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** An adjoint equivalence on a 1-cell f is a 1-cell g with invertible 2-cells η: 1 ≅ g f and ε: f g ≅ 1 that satisfy the triangle identities of an adjunction. The triangle identities make g, η and ε unique up to a unique compatible isomorphism (our own).

**Problem.** For a fixed 1-cell f in a 2-category, the category of adjoint-equivalence data (g, η, ε) on f is either empty or equivalent to the terminal category. So these data carry no more information than the property that f is an equivalence.

**How the definition helps.** Right adjoints are unique up to a unique isomorphism compatible with unit and counit, so any two choices are joined by exactly one map (our own). Every equivalence can be made an adjoint equivalence by changing ε. So the category of choices is empty or has exactly one arrow between any two objects.

**nLab:** [adjoint equivalence](https://ncatlab.org/nlab/show/adjoint+equivalence), [stuff, structure, property](https://ncatlab.org/nlab/show/stuff%2C+structure%2C+property). It says: “In other words, adjoint equivalences are the way to make the property of "being an equivalence" completely into "algebraic" structure.”

**Sources:**

- [Nick Gurski, Biequivalences in tricategories, Theory and Applications of Categories 26 no. 14 (2012) 349–384](http://www.tac.mta.ca/tac/volumes/26/14/26-14abs.html)

### In a bicategory, functions are the relations that have a right adjoint

**Remember:** A map is a morphism that has a right adjoint.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18B10, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** In a bicategory K, a 2-category whose composition is associative only up to coherent isomorphism, a morphism f: a → b is a map if it has a right adjoint f\*: b → a. Map K keeps only the maps. In Rel, the unit of the adjunction says each input has a related output, and the counit says that output is unique (our own).

**Problem.** In the bicategory Rel, the maps are exactly the graphs of functions, so Map Rel ≃ Set. For C with finite limits, Map Span(C) ≃ C, where a span from x to y is a pair x ← s → y.

**How the definition helps.** In Rel the right adjoint of a relation is its converse, so the definition says that the relation is total and single-valued, a function (our own). A span x ← s → y has a right adjoint exactly when its left leg is invertible (our own). Such a span is the graph of a map x → y, so Map Span(C) ≃ C.

**nLab:** [bicategory of maps](https://ncatlab.org/nlab/show/bicategory+of+maps). It says: “In the bicategory Rel of sets and relations, a relation is a map if and only if it is the graph of a function. Consequently, Map Rel is equivalent to Set.”

**Sources:**

- [A. Carboni, R. F. C. Walters, Cartesian bicategories I, Journal of Pure and Applied Algebra 49 (1987) 11–32](https://doi.org/10.1016/0022-4049(87)90121-6)

### Combinatorial model categories can be built from a small amount of data

**Remember:** A set of generating maps on a category built from small objects.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18C35, 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A combinatorial model category is a model category on a locally presentable category whose cofibrations and acyclic cofibrations are generated by sets of maps. Locally presentable means it has all small colimits and, for some regular cardinal κ, every object is a κ-filtered colimit of objects from a set of κ-presentable ones.

**Problem.** In a locally presentable category, let W be an accessible, accessibly embedded class of maps with two-out-of-three and closed under retracts, and I a set of maps with I-injectives in W and cof(I) ∩ W closed under pushouts and transfinite composition. Then W and cof(I) form a combinatorial model structure (Smith), which yields left Bousfield localizations at sets of maps in left proper combinatorial model categories.

**How the definition helps.** Local presentability runs the small object argument, so the set I generates cof(I) by pushouts, transfinite composites and retracts (our own). Smith's recognition theorem then builds the model structure from W and I alone, without generating acyclic cofibrations. Its localization theorem applies this to the larger class of weak equivalences (our own).

**nLab:** [combinatorial model category](https://ncatlab.org/nlab/show/combinatorial+model+category). It says: “Jeff Smith's theorem characterizes combinatorial model categories just in terms of weak equivalences and generating cofibrations, hence using only two third of the input data explicitly required.”

**Sources:**

- [Daniel Dugger, Combinatorial model categories have presentations, Adv. Math. 164 (2001), arXiv:math/0007068](https://arxiv.org/abs/math/0007068)
- [Tibor Beke, Sheafifiable homotopy model categories, 2000, arXiv:math/0102087](https://arxiv.org/abs/math/0102087)

### In cellular model categories, left Bousfield localizations always exist

**Remember:** Cellular means the cells are compact and the cofibrations are honest inclusions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cellular model category is cofibrantly generated by a set I of cofibrations and a set J of acyclic cofibrations whose cells are small. The sources and targets of I are compact relative to I-cell complexes, and the sources of J are small relative to them. Every cofibration is an honest inclusion, the equalizer of its cokernel pair.

**Problem.** In a left proper cellular model category C, the left Bousfield localization at any set S of maps exists (Hirschhorn). It is a model structure on C in which the maps in S become weak equivalences, in a universal way.

**How the definition helps.** These are the size and inclusion conditions that Hirschhorn's localization theorem needs, so it applies to every set S (our own). Left properness makes pushout along a cofibration preserve weak equivalences, which the construction of the localized structure also uses.

**nLab:** [cellular model category](https://ncatlab.org/nlab/show/cellular+model+category). It says: “For cellular model categories C that are left proper model categories all left Bousfield localizations L<sub>S</sub> C at any set S of morphisms are guaranteed to exist.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, AMS (2002)](https://doi.org/10.1090/surv/099)

### In proper model categories, ordinary pullbacks along fibrations are homotopy pullbacks

**Remember:** Proper means weak equivalences survive pullback along fibrations, or pushout along cofibrations.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category is right proper if pulling back a weak equivalence along a fibration gives a weak equivalence. It is left proper if, dually, pushing out a weak equivalence along a cofibration gives a weak equivalence.

**Problem.** In a right proper model category, an ordinary pullback along a fibration is a homotopy pullback, for all objects. M is right proper exactly when base change along every weak equivalence X → Y gives a Quillen equivalence M/X ⇄ M/Y (Rezk).

**How the definition helps.** A homotopy pullback first replaces a map by a fibration, and right properness says this replacement does not change the pullback along a fibration up to weak equivalence (our own). For base change along X → Y, the comparison at a fibrant object over Y is a pullback of X → Y along a fibration. Rezk's criterion says these comparisons decide the Quillen equivalence (our own).

**nLab:** [proper model category](https://ncatlab.org/nlab/show/proper+model+category). It says: “In a left proper model category, ordinary pushouts along cofibrations are homotopy pushouts. Dually, in a right proper model category, ordinary pullbacks along fibrations are homotopy pullbacks.”

**Sources:**

- [Charles Rezk, Every homotopy theory of simplicial algebras admits a proper model, Topology and its Applications 119 (2002) 65–94, arXiv:math/0003065](https://arxiv.org/abs/math/0003065)

### Lifting tests make model category cofibrations stable under pushouts

**Remember:** A pushout transfers each lifting problem back to the original cofibration.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cofibration has the left lifting property against every acyclic fibration, a map that is both a fibration and a weak equivalence. That is, every commutative square with the cofibration on the left and an acyclic fibration on the right has a diagonal filler.

**Problem.** In a model category, a pushout of a cofibration along any map is again a cofibration. Cofibrations are also closed under composition and retracts.

**How the definition helps.** A square for the pushout restricts to a square for the original cofibration. Its filler extends by the universal property of the pushout. Two successive lifts fill a square for a composite, and retracting a filler gives a filler for the retract (our own).

**nLab:** [weak factorization system](https://ncatlab.org/nlab/show/weak+factorization+system). It says: “ℒ is closed under forming pushouts of morphisms in 𝒞 ("cobase change").”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “Cofibrations can be characterized as the maps which have the left lifting property with respect to acyclic fibrations”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Lifting tests make two model category classes determine the third

**Remember:** Lifting tests rebuild the missing class from the other two.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** For a class S of maps, its left lifting class is the maps with a diagonal filler in every commutative square whose right edge lies in S, and its right lifting class uses S on the left. In a model category, cofibrations are the left lifting class of acyclic fibrations, and fibrations the right lifting class of acyclic cofibrations.

**Problem.** On a fixed category, any two of the three classes of a model structure determine the third.

**How the definition helps.** With the weak equivalences and one other class, intersect with the weak equivalences and take the lifting class to get the third. With cofibrations and fibrations, lifting gives the acyclic fibrations and the acyclic cofibrations (our own). Factorization and two-out-of-three make the weak equivalences exactly the composites of an acyclic cofibration and an acyclic fibration (our own).

**nLab:** [model category](https://ncatlab.org/nlab/show/model+category). It says: “Given a model category structure, any two of the three classes of special morphisms (cofibrations, fibrations, weak equivalences) determine the third”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Model structures make the homotopy category locally small

**Remember:** Replace objects by fibrant-cofibrant ones, and the maps become plain homotopy classes.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In a model category, an object X is fibrant-cofibrant if X → 1 is a fibration and 0 → X is a cofibration, for 1 terminal and 0 initial. Between such objects, homotopy through cylinder objects is an equivalence relation on the ordinary set of maps (our own).

**Problem.** If C has a model structure, every morphism of the homotopy category C\[W⁻¹\] is a homotopy class of maps between fibrant-cofibrant replacements. So C\[W⁻¹\] has a set of morphisms between any two objects when C does.

**How the definition helps.** Quillen's theorem identifies the maps of C\[W⁻¹\] with homotopy classes of maps between fibrant-cofibrant replacements (our own). A quotient of a set is a set, so each hom of the localization is a set. Without a model structure, the zigzags of a localization need not form a set.

**nLab:** [homotopy category of a model category](https://ncatlab.org/nlab/show/homotopy+category+of+a+model+category), [homotopy category](https://ncatlab.org/nlab/show/homotopy+category), [model category](https://ncatlab.org/nlab/show/model+category). It says: “A model category structure (𝒞(W,Fib,Cof)) on some category 𝒞 is a means to guarantee the local smallness and to improve the tractability of the homotopy category”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Pushout-product and unit axioms make the homotopy category closed monoidal

**Remember:** Tensoring cofibrations stays cofibrant, and a replaced unit stays a unit.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18M05. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A monoidal model category is a closed monoidal category with a model structure in which the tensor respects cofibrations. The pushout-product of two cofibrations is a cofibration, acyclic if either input is acyclic. Tensoring a cofibrant replacement QI → I of the unit, on either side, with any cofibrant object gives a weak equivalence.

**Problem.** The homotopy category of a monoidal model category is closed monoidal, with the derived tensor product ⊗ᴸ as its tensor product (Hovey).

**How the definition helps.** The pushout-product axiom makes tensor and internal hom a Quillen adjunction of two variables, so they derive to a tensor and an internal hom on the homotopy category (our own). Associativity descends from cofibrant objects, and the unit axiom gives the unit isomorphisms (Hovey).

**nLab:** [monoidal model category](https://ncatlab.org/nlab/show/monoidal+model+category). It says: “In short, the pushout-product axiom is the model-category theoretic way to ensure that not just the tensor product, but also the internal hom as well as their joint relatin in a two-variable adjunction are homotopically meaningful.”

**Sources:**

- [Mark Hovey, Monoidal model categories, arXiv:math/9803002 (1998)](https://arxiv.org/abs/math/9803002)
- [Stefan Schwede, Brooke Shipley, Algebras and modules in monoidal model categories, Proc. London Math. Soc. 80 (2000) 491–511, arXiv:math/9801082](https://arxiv.org/abs/math/9801082)
- [Mark Hovey, Model Categories, AMS Mathematical Surveys and Monographs 63 (1999)](https://doi.org/10.1090/surv/063)

### Quillen adjunctions have equivalent left and right preservation tests

**Remember:** Adjunction moves a lifting problem from one side to the other.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A Quillen adjunction is an adjunction L ⊣ R between model categories whose left adjoint L preserves cofibrations and acyclic cofibrations, those that are also weak equivalences. Adjunction turns a lifting square for L(f) against g into a lifting square for f against R(g) (our own).

**Problem.** An adjunction between model categories is Quillen exactly when its right adjoint preserves fibrations and acyclic fibrations.

**How the definition helps.** A lifting problem for L(f) against g has a solution exactly when the matching one for f against R(g) does. Cofibrations are detected by lifting against acyclic fibrations, and acyclic cofibrations by lifting against fibrations. So L preserves the first pair exactly when R preserves the second (our own).

**nLab:** [Quillen adjunction](https://ncatlab.org/nlab/show/Quillen+adjunction). It says: “A left adjoint L between model categories preserves acyclic cofibrations precisely if its right adjoint R preserves fibrations.”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “F preserves cofibrations and acyclic cofibrations or, equivalently by the closed model axioms, such that G preserves fibrations and acyclic fibrations.”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Reedy fibrancy makes totalization homotopy invariant

**Remember:** Tot maps out of the cofibrant Δ, so it needs a fibrant target.

*True by definition. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cosimplicial simplicial set X is Reedy fibrant if each Xⁿ → MⁿX is a Kan fibration, where MⁿX is the limit of X over the proper surjections out of \[n\]. Totalization is the simplicial mapping space into X from the cosimplicial simplex Δ, which is Reedy cofibrant.

**Problem.** Totalization sends degreewise weak equivalences between Reedy fibrant cosimplicial simplicial sets to weak equivalences.

**How the definition helps.** Mapping out of the Reedy cofibrant Δ is a right Quillen functor, so Ken Brown's lemma makes it preserve weak equivalences between fibrant objects (our own). Degreewise weak equivalences are the Reedy weak equivalences.

**nLab:** [model structure on cosimplicial simplicial sets](https://ncatlab.org/nlab/show/model+structure+on+cosimplicial+simplicial+sets). It says: “Since Δ is cofibrant in the Reedy model structure it follows that totalization of Reedy-fibrant cosimplicial simplicial sets preserves weak equivalences.”

**Sources:**

- [A. K. Bousfield, D. M. Kan, Homotopy Limits, Completions and Localizations, Lecture Notes in Mathematics 304, Springer (1972)](https://doi.org/10.1007/978-3-540-38117-4)

### Right properness is exactly what makes base change a Quillen equivalence

**Remember:** Right proper: pulling back along fibrations keeps weak equivalences weak equivalences.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category is right proper if the pullback of a weak equivalence along a fibration is again a weak equivalence.

**Problem.** A model category 𝒞 is right proper exactly when, for every weak equivalence φ : S → T, base change between 𝒞/S and 𝒞/T is a Quillen equivalence (Rezk). Base change composes with φ in one direction and pulls back along φ in the other.

**How the definition helps.** Rezk's criterion says base change along φ is a Quillen equivalence exactly when every pullback of φ along a fibration over T is a weak equivalence. Right properness is this condition for all weak equivalences φ at once. Without it the condition can still hold for one φ, for example when S and T are fibrant or φ is an acyclic fibration.

**nLab:** [slice model structure](https://ncatlab.org/nlab/show/slice+model+structure). It says: “Notice that the property (∗) of φ is implied as soon as either: 𝒞 is right proper, or φ is an acyclic fibration, or both S and T are fibrant objects”

**Sources:**

- [Charles Rezk, Every homotopy theory of simplicial algebras admits a proper model, Topology and its Applications 119 (2002) 65–94, arXiv:math/0003065](https://arxiv.org/abs/math/0003065)

### The projective model structure makes colimits left Quillen

**Remember:** Constant diagrams pass the projective fibration test at every entry.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35, 18A30. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For diagrams of small shape D in a model category, the projective model structure, when it exists, has as fibrations and weak equivalences the maps that are fibrations and weak equivalences at every object of D. So a constant diagram on a fibration is a projective fibration (our own).

**Problem.** The colimit functor for the projective model structure is left Quillen, meaning it preserves cofibrations and cofibrations that are weak equivalences.

**How the definition helps.** The constant diagram functor preserves fibrations and acyclic fibrations because each component is the original map (our own). It is right adjoint to colimit, so colimit is left Quillen.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “When these model structures exist (as they do when C is combinatorial), limit and colimit constitute then two sSet-enriched Quillen adjunctions”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “in one, the so-called projective model structure, fibrations and weak equivalences are those maps of functors which are fibrations and weak equivalences when evaluated at each object of C.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Two-out-of-six makes weak equivalences behave like isomorphisms

**Remember:** Two overlapping composites in W put the whole chain in W.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A class W satisfies two-out-of-six if, for every composable triple u,v,w, membership of vu and wv in W implies membership of u,v,w and wvu.

**Problem.** If W contains the identities and satisfies 2-out-of-6, then W contains all isomorphisms and satisfies 2-out-of-3. If W also admits a calculus of fractions, 2-out-of-6 is equivalent to saturation: every map that becomes invertible in C\[W⁻¹\] is in W (Kashiwara–Schapira).

**How the definition helps.** For an isomorphism f, apply two-out-of-six to f, f⁻¹, f: both composites are identities, so f is in W (our own). Inserting an identity before, between or after two composable maps gives the three cases of two-out-of-three. Kashiwara and Schapira's criterion gives the equivalence with saturation under a calculus of fractions.

**nLab:** [two-out-of-six property](https://ncatlab.org/nlab/show/two-out-of-six+property), [category with weak equivalences](https://ncatlab.org/nlab/show/category+with+weak+equivalences). It says: “Suppose W admits a calculus of fractions. Then W satisfies two-out-of-six if and only if it is saturated.”

**Sources:**

- [William G. Dwyer, Philip S. Hirschhorn, Daniel M. Kan, Jeffrey H. Smith, Homotopy Limit Functors on Model Categories and Homotopical Categories, AMS Mathematical Surveys and Monographs 113, 2004](https://doi.org/10.1090/surv/113)
- [Masaki Kashiwara, Pierre Schapira, Categories and Sheaves, Springer, 2006 (7.1.20)](https://doi.org/10.1007/3-540-27950-4)

### Whitehead's theorem is a formal lemma about model categories

**Remember:** Between fibrant-cofibrant objects, a weak equivalence is a real homotopy equivalence.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55P10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In a model category, X is fibrant-cofibrant if its map to the terminal object is a fibration and the map from the initial object is a cofibration. Between such objects, every weak equivalence has an inverse up to homotopy (Quillen).

**Problem.** Every weak homotopy equivalence between CW complexes is a homotopy equivalence (Whitehead).

**How the definition helps.** In the classical model structure on spaces, every space is fibrant and every CW complex is cofibrant (our own). So Quillen's theorem gives a homotopy inverse, and the cylinder X × \[0, 1\] makes it an ordinary homotopy inverse (our own).

**nLab:** [Introduction to Homotopy Theory](https://ncatlab.org/nlab/show/Introduction+to+Homotopy+Theory), [Whitehead theorem](https://ncatlab.org/nlab/show/Whitehead+theorem), [model category](https://ncatlab.org/nlab/show/model+category). It says: “Let 𝒞 be a model category. A weak equivalence between two objects which are both fibrant and cofibrant is a homotopy equivalence.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the AMS 55 (1949) 213–245](https://doi.org/10.1090/s0002-9904-1949-09175-9)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Categories of fibrant objects are enough to build a homotopy category

**Remember:** Fibrations and path objects alone give a homotopy category of spans.

*Makes the theorem clean to state or prove.* MSC 18N45 (Categories of fibrations, relations to K-theory, relations to type theory), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A category of fibrant objects (Brown) has finite products, weak equivalences that contain the isomorphisms and satisfy two-out-of-three, and fibrations that compose and include every map to the terminal object. Fibrations and acyclic fibrations have pullbacks along any map, and these are again fibrations and acyclic fibrations. Every diagonal X → X × X factors as a weak equivalence followed by a fibration, giving a path object.

**Problem.** In a category of fibrant objects, every morphism of the homotopy category is a span of length one whose backward leg is an acyclic fibration (Brown). Locally Kan simplicial sheaves form such a category, and its hom-sets compute generalized sheaf cohomology.

**How the definition helps.** Path objects let one compose and invert homotopies, and pullback along acyclic fibrations turns a zigzag into one span whose backward leg is an acyclic fibration (our own). Brown's theorem applies to locally Kan simplicial sheaves with local fibrations and local weak equivalences. Their homotopy classes of spans are the generalized cohomology in the statement (our own).

**nLab:** [category of fibrant objects](https://ncatlab.org/nlab/show/category+of+fibrant+objects). It says: “In particular, it is sufficient for giving a convenient construction of the homotopy category in terms of spans of length one.”

**Sources:**

- [Kenneth S. Brown, Abstract homotopy theory and generalized sheaf cohomology, Trans. Amer. Math. Soc. 186 (1973) 419–458](https://doi.org/10.1090/s0002-9947-1973-0341469-9)

### For isofibrations, strict pullbacks of categories are homotopy pullbacks

**Remember:** An isofibration lifts every isomorphism out of an image, exactly.

*Rules out counterexamples.* MSC 18N45 (Categories of fibrations, relations to K-theory, relations to type theory), 18N40, 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A functor p: E → B is an isofibration if every isomorphism in B that starts at an image p(e) lifts to an isomorphism in E that starts at e. So every object of B isomorphic to p(e) is hit exactly, by an object isomorphic to e.

**Problem.** If either leg is an isofibration, the strict pullback of two functors into B is equivalent to their pseudopullback. So such strict pullbacks are invariant under equivalences of diagrams that keep this hypothesis.

**How the definition helps.** A pseudopullback object carries an isomorphism p(e) ≅ q(c), and lifting it replaces e by an isomorphic e' with p(e') = q(c) exactly (our own). Between such strict objects the two conditions on morphisms agree (our own). Without the hypothesis, two inclusions of distinct isomorphic objects of a groupoid have an empty strict pullback but a nonempty pseudopullback (our own).

**nLab:** [isofibration](https://ncatlab.org/nlab/show/isofibration). It says: “For example, any strict pullback of an isofibration is also a weak pullback.”

**Sources:**

- [Ronald Brown, Fibrations of groupoids, Journal of Algebra 15 (1970) 103–132](https://doi.org/10.1016/0021-8693(70)90089-X)

### Augmented simplicial sets make the join preserve colimits in each variable

**Remember:** Allow the empty simplex, and the join becomes a tensor product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** An augmented simplicial set is a simplicial set with an extra set of (−1)-simplices, that is, a presheaf on the finite ordinals including the empty one. Its join is the Day convolution of ordinal sum, a tensor product of presheaves that preserves colimits in each variable.

**Problem.** The join of augmented simplicial sets preserves colimits in each variable separately. So the join of a horn with a simplex is the union of the joins of the faces of the horn with that simplex.

**How the definition helps.** Day convolution is built from products with fixed sets and from colimits, so it preserves colimits in each variable (our own). A horn is a union, that is a colimit, of faces of the simplex. So its join with a simplex is the union of the joins of those faces (our own).

**nLab:** [join of simplicial sets](https://ncatlab.org/nlab/show/join+of+simplicial+sets). It says: “Recall that the join of augmented simplicial sets S ⋆ T is a cocontinuous functor in each of its separate arguments S and T (this is true generally of Day convolution products).”

**Sources:**

- [P. J. Ehlers, T. Porter, Joins for (Augmented) Simplicial Sets, Journal of Pure and Applied Algebra 145 (2000) 37–44, arXiv:math/9904039](https://arxiv.org/abs/math/9904039)

### Fat geometric realization is homotopy invariant because it leaves out degeneracies

**Remember:** Glue along faces only; never collapse the degenerate simplices.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** The fat geometric realization ‖X•‖ of a simplicial space X• glues the pieces Xₙ × Δⁿ along the face maps only and never collapses degenerate simplices (it is the coend over injective order maps). So each stage attaches Xₙ × Δⁿ along Xₙ × ∂Δⁿ, which is always a cofibration.

**Problem.** Fat realization takes degreewise homotopy equivalences to homotopy equivalences. If every level has CW homotopy type, so does the fat realization. Both conclusions can fail for ordinary realization.

**How the definition helps.** Each stage glues along Xₙ × ∂Δⁿ → Xₙ × Δⁿ, a cofibration whatever Xₙ is (our own). Segal’s gluing results then give homotopy invariance and keep CW homotopy type. Ordinary realization also collapses degeneracies, and those inclusions need not be cofibrations.

**nLab:** [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “If f : X• → Y• is degreewise a homotopy equivalence, then also ‖f‖ is a homotopy equivalence.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Minimal Kan fibrations are fibre bundles

**Remember:** In a minimal fibration, homotopic simplices with the same boundary are equal.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10, 55R05. arXiv math.AT. Level 3: graduate.

**Definition.** A Kan fibration is minimal if two simplices over the same base simplex are equal whenever they are homotopic over the base relative to their boundary, in every degree. So each fibre keeps exactly one simplex from each such homotopy class.

**Problem.** A minimal Kan fibration over a connected base is locally trivial over each base simplex and hence is a simplicial fibre bundle. Geometric realization takes every Kan fibration to a Serre fibration.

**How the definition helps.** Minimality makes every fibrewise homotopy equivalence between minimal fibrations an isomorphism. Over each base simplex the fibration is fibrewise homotopy equivalent to a product, hence isomorphic to it, so it is locally trivial (our own). For a general Kan fibration, Quillen factors it as a trivial fibration followed by a minimal one and realizes each factor (our own).

**nLab:** [minimal Kan fibration](https://ncatlab.org/nlab/show/minimal+Kan+fibration). It says: “Minimal Kan fibrations over connected bases happen to be fiber bundles, locally trivial over each simplex”

**Sources:**

- [P. Gabriel, M. Zisman, Calculus of Fractions and Homotopy Theory, Ergebnisse der Mathematik 35, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)
- [P. G. Goerss, J. F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Realization of proper simplicial spaces respects levelwise weak equivalences

**Remember:** In a proper simplicial space, degenerate simplices include as cofibrations.

*True by definition.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** A simplicial space X is proper if, in every degree n, the degenerate n-simplices form a subspace whose inclusion into Xₙ is a closed cofibration, an inclusion with the homotopy extension property. So each new level of the realization is glued on along a cofibration.

**Problem.** An objectwise weak homotopy equivalence X• → Y• between proper simplicial spaces gives a weak homotopy equivalence \|X•\| → \|Y•\| of geometric realizations.

**How the definition helps.** Properness makes each skeleton of the realization a pushout along a cofibration, so the gluing lemma passes the levelwise weak equivalence to every skeleton (our own). The realization is the union of its skeleta along cofibrations, and this union keeps the weak equivalence.

**nLab:** [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “If X• → Y• is an objectwise weak homotopy equivalence between proper simplicial spaces, then the induced map \|X•\| → \|Y•\| is a weak homotopy equivalence.”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer, 1972](https://doi.org/10.1007/BFb0067491)
- [J. Peter May, E∞ spaces, group completions, and permutative categories, in New Developments in Topology, London Math. Soc. Lecture Note Series 11, 1974, 61–94](https://doi.org/10.1017/CBO9780511662607.008)

### The 0-simplex has no horns, so the empty groupoid is Kan

**Remember:** Every horn contains a vertex, so none maps to the empty simplicial set.

*Rules out counterexamples.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** The horn Λₖ\[n\] is the n-simplex Δ\[n\] with its interior and its k-th face removed. It exists only for n ≥ 1, so every horn contains a vertex and the 0-simplex has no horn.

**Problem.** The empty simplicial set, the nerve of the empty groupoid, is a Kan complex. Every map out of the empty simplicial set is a Kan fibration.

**How the definition helps.** Every horn contains a vertex, so no horn maps into the empty simplicial set. So every horn-filling condition holds vacuously for the empty simplicial set and for every map out of it (our own). An empty horn of the 0-simplex would need a filler, a vertex, in the empty simplicial set.

**nLab:** [horn](https://ncatlab.org/nlab/show/horn). It says: “In particular one must not declare a would-be horn of the 0-simplex to be itself the empty simplicial set, as that would make the nerve of the empty groupoid fail to be a Kan complex”

**Sources:** none listed. No primary source with a working link was found.

### Transferring the model structure makes Sing preserve weak equivalences by definition

**Remember:** Call a map of spaces a weak equivalence when Sing makes it one.

*True by definition.* MSC 18N50 (Simplicial sets, simplicial objects), 18N40, 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In the model structure transferred from simplicial sets, a map of spaces f : X → Y is a weak equivalence exactly when Sing(f) : Sing(X) → Sing(Y) is one. Here Sing(X) has the continuous maps Δⁿ → X as its n-simplices.

**Problem.** The singular complex functor Sing : Top → sSet preserves weak equivalences.

**How the definition helps.** The definition tests f by applying Sing, so the claim is the definition. These weak equivalences agree with the classical weak homotopy equivalences, by the natural weak equivalence \|Sing X\| → X and two-out-of-three (our own).

**nLab:** [singular simplicial complex](https://ncatlab.org/nlab/show/singular+simplicial+complex). It says: “The classical model structure on topological spaces can be defined to be transferred from simplicial sets, in which case the singular complex preserves weak equivalences by definition.”

**Sources:**

- [Daniel G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Testing local equivalences on local objects makes them invertible there

**Remember:** Local objects cannot tell an S-equivalence from an isomorphism.

*True by definition.* MSC 18N55 (Localizations (e.g., simplicial localization, Bousfield localization)), 55P60. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** Fix a set S of maps in an ∞-category. An object is S-local if every map in S looks invertible to it, that is, it induces an equivalence of mapping spaces into the object. An S-equivalence is a map that every S-local object sees as invertible in this way.

**Problem.** An S-equivalence between S-local objects is an equivalence.

**How the definition helps.** An S-equivalence f : X → Y between local objects looks invertible from X and from Y, so the Yoneda argument applies (our own). Mapping into X gives g with gf ≃ 1. Mapping into Y shows fg ≃ 1, since fgf ≃ f and precomposition with f is injective on components.

**nLab:** [local object](https://ncatlab.org/nlab/show/local+object). It says: “A morphism f : x → y in C is an S-local morphism or S-equivalence if for every S-local object c the induced morphism”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Cartesian fibrations are families of ∞-categories that vary functorially

**Remember:** Enough Cartesian lifts turn a correspondence into a functor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18D30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A Cartesian fibration of ∞-categories is an inner fibration p in which every base arrow f : d₁ → d₂ has, at each object over d₂, a Cartesian lift, a universal arrow over f ending at that object. Universal means that maps into its source are, up to equivalence, maps into its target whose image factors through f.

**Problem.** In a Cartesian fibration over D, each morphism f : d₁ → d₂ gives a functor from the fiber over d₂ to the fiber over d₁, unique up to contractible choice. By the straightening theorem, Cartesian fibrations over D are equivalent to functors Dᵒᵖ → (∞,1)Cat.

**How the definition helps.** Choosing a Cartesian lift at each object over d₂ defines pullback along f, a functor from the fibre over d₂ to the fibre over d₁, and universality makes the choice contractible. A bare inner fibration gives only correspondences between fibres. The straightening theorem is hard; the definition makes it statable.

**nLab:** [Cartesian fibration](https://ncatlab.org/nlab/show/Cartesian+fibration). It says: “Then the condition of p being a cartesian fibration ensures that the family is actually functorial.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### Coherent idempotents in ∞-categories split exactly when they have a limit

**Remember:** In an ∞-category, being idempotent is structure, not a property.

*Rules out counterexamples.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An idempotent in an ∞-category C is a functor Idem → C from the walking idempotent, the nerve of the free category on one idempotent map, so it carries e ∘ e ≃ e and all higher coherences. It is effective, or splits, if it extends to the walking retraction Idem⁺.

**Problem.** A coherent idempotent Idem → C in an ∞-category is effective (splits) exactly when it has a limit, or equivalently a colimit (Lurie).

**How the definition helps.** Because the coherent diagram carries all its higher data, its limit supplies the retract, so a limit is enough to split it (Lurie). The coherence cannot be dropped: an idempotent of the homotopy category need not lift. Lurie's Warning 1.2.4.8 takes an injective, non-surjective group map λ : G → G conjugate to λ², so Bλ is idempotent up to homotopy but not coherently.

**nLab:** [idempotent complete (infinity,1)-category](https://ncatlab.org/nlab/show/idempotent+complete+%28infinity%2C1%29-category). It says: “In particular, being idempotent is no longer a property of a morphism, but structure on it.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, Annals of Mathematics Studies 170, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)
- [Jacob Lurie, Higher Algebra, Warning 1.2.4.8 (the counterexample with Bλ)](https://www.math.ias.edu/~lurie/papers/HA.pdf)

### Completeness makes complete Segal spaces see equivalences correctly

**Remember:** Complete means every equivalence is a path in the space of objects.

*Rules out counterexamples.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A Segal space is a Reedy-fibrant simplicial space X whose Segal maps identify each Xₙ, up to weak equivalence, with strings of n composable arrows. It is complete if the degeneracy from the space of objects X₀ to the space of equivalences in X₁ is a weak equivalence, so equivalent objects are joined by a path in X₀.

**Problem.** A functor of ordinary categories is an equivalence exactly when the induced map of Rezk's classifying diagrams, which are complete Segal spaces, is a levelwise weak equivalence. For plain nerves, which are complete only for gaunt categories, such a map detects only isomorphism of categories.

**How the definition helps.** Completeness puts equivalent objects in one path component of X₀, so a levelwise weak equivalence of complete Segal spaces sees exactly an equivalence of categories. Rezk’s diagram in degree n is the nerve of the groupoid of n-arrow strings and their isomorphisms, and degrees 0 and 1 detect essential surjectivity and full faithfulness (our own). The walking isomorphism is equivalent to the terminal category, but their discrete nerves differ already in degree 0 (our own).

**nLab:** [complete Segal space](https://ncatlab.org/nlab/show/complete+Segal+space), [Segal space](https://ncatlab.org/nlab/show/Segal+space). It says: “this says that if a morphism is an equivalence under the explicit composition operation then it is already a morphism in X₀”

**Sources:**

- [Charles Rezk, A model for the homotopy theory of homotopy theory, Trans. Amer. Math. Soc. 353 (2001) 973–1007, arXiv:math/9811037](https://arxiv.org/abs/math/9811037)

### In an ∞-topos every colimit is van Kampen

**Remember:** In an ∞-topos, a family over a colimit equals compatible families over the pieces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A colimit is van Kampen if an object over the colimit is the same as a compatible family of objects over its pieces. Precisely, the slice functor x ↦ C/x takes it to a limit of categories.

**Problem.** A presentable (∞,1)-category is an ∞-topos exactly when all its colimits are van Kampen. So, with the circle as the coequalizer of 1 ⇉ 1, descent in ∞-groupoids gives ΩS¹ ≃ ℤ.

**How the definition helps.** Descent for the circle, the coequalizer of 1 ⇉ 1, says that a space over S¹ is a space with a self-equivalence (our own). Translation on ℤ gives one with contractible total space, so its fibre is ΩS¹ ≃ ℤ (our own). Lurie’s characterization of ∞-toposes supplies descent for all small colimits.

**nLab:** [van Kampen colimit](https://ncatlab.org/nlab/show/van+Kampen+colimit), [(infinity,1)-topos](https://ncatlab.org/nlab/show/%28infinity%2C1%29-topos). It says: “gives a concise proof that the loop space of the circle is equivalent to the integers”

**Sources:**

- [Pawel Sobocinski, Tobias Heindel, Being Van Kampen is a universal property, Log. Methods Comput. Sci. 7 (2011), arXiv:1101.4594](https://arxiv.org/abs/1101.4594)
- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### In hypercomplete ∞-toposes the Whitehead theorem holds by definition

**Remember:** Hypercomplete means homotopy sheaves see everything.

*True by definition.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55P10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An ∞-topos is hypercomplete if no object can tell an ∞-connected map from an equivalence: precomposing with such a map gives an equivalence of mapping spaces into every object. An ∞-connected map is one that induces isomorphisms on all homotopy sheaves, at every component and local basepoint.

**Problem.** In a hypercomplete ∞-topos, a map inducing isomorphisms on all homotopy sheaves is an equivalence. This Whitehead theorem holds for spaces, but fails in some ∞-toposes.

**How the definition helps.** If every object is local for an ∞-connected map, the Yoneda lemma makes that map an equivalence (our own). Spaces are hypercomplete by the classical Whitehead theorem. Deciding which ∞-toposes are hypercomplete is separate work.

**nLab:** [hypercomplete (infinity,1)-topos](https://ncatlab.org/nlab/show/hypercomplete+%28infinity%2C1%29-topos). It says: “if the Whitehead theorem is valid in it. Equivalently: if all its object are hypercomplete objects.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### Marked simplicial sets make Cartesian fibrations exactly the fibrant objects

**Remember:** Mark the edges that should be Cartesian, and the model structure can see them.

*Makes the theorem clean to state or prove.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18N45, 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A marked simplicial set is a simplicial set with a chosen set of edges, the marked ones, that includes every degenerate edge. The marking records which edges should be Cartesian, so a lifting property can test them.

**Problem.** In Lurie's model structure on marked simplicial sets over S, with all edges of S marked, the fibrant objects are exactly the Cartesian fibrations X → S with their Cartesian edges marked. Straightening is then a Quillen equivalence with presheaves.

**How the definition helps.** The marking lets a lifting property see which edges are Cartesian, so over S with all edges marked the fibrant objects are the Cartesian fibrations. Maps lifting against marked anodyne maps are the inner fibrations in which marked edges of S have Cartesian lifts, which are exactly the marked edges (our own). The existence of the model structure and straightening are substantial results in Higher Topos Theory.

**nLab:** [model structure for Cartesian fibrations](https://ncatlab.org/nlab/show/model+structure+for+Cartesian+fibrations). It says: “Every object is cofibrant and the fibrant objects of SSet⁺/S are precisely the Cartesian fibrations over S.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, 2009, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### Stable ∞-categories give triangulated categories with functorial cones

**Remember:** In a stable ∞-category, fibre sequences and cofibre sequences are the same thing.

*Makes the theorem clean to state or prove.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18G80. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A stable ∞-category has a zero object and all finite limits and colimits, and its pullback squares are exactly its pushout squares. So the cone of a map, its pushout along the map to 0, is functorial, and its defining square is also a pullback (our own).

**Problem.** The homotopy category of a stable ∞-category is triangulated, and the octahedral axiom holds (Lurie). In the stable ∞-category itself, the cone of a morphism is a pushout, so it is functorial.

**How the definition helps.** Pushing out X → Y along X → 0 defines its cone functorially (our own). Pasting pushouts for two composable arrows gives the coherent diagram behind the octahedral axiom. Lurie’s theorem takes these diagrams to distinguished triangles in the homotopy category.

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category), [triangulated category](https://ncatlab.org/nlab/show/triangulated+category), [enhanced triangulated category](https://ncatlab.org/nlab/show/enhanced+triangulated+category). It says: “The complexity and bad behavior of triangulated categories comes from them being the decategorification of a structure that is natural in higher category theory.”

**Sources:**

- [Jacob Lurie, Stable Infinity Categories, arXiv:math/0608228 (2006)](https://arxiv.org/abs/math/0608228)
- [Fernando Muro, Stefan Schwede, Neil Strickland, Triangulated categories without models, Inventiones Mathematicae 170 (2007) 231–241; arXiv:0704.1378](https://arxiv.org/abs/0704.1378)

### The enriched homotopy category, not the ordinary one, detects adjoint ∞-functors

**Remember:** To test for an adjoint, remember the mapping spaces, not only their components.

*Rules out counterexamples. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18D20, 18A40. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** The Ho-enriched homotopy category of an (∞,1)-category keeps each mapping space as an object of Ho, the homotopy category of spaces. The ordinary homotopy category keeps only its set of path components.

**Problem.** If an ∞-functor induces a functor of Ho-enriched homotopy categories that has a right adjoint, then the ∞-functor has a right adjoint (Lurie, HTT Prop. 5.2.2.12). The same claim with ordinary homotopy categories is false.

**How the definition helps.** The enriched homotopy category keeps the homotopy type of mapping spaces, which is enough to build an ∞-adjunction (Lurie). In the ordinary Ho, π₀ is both left and right adjoint to Set ⊆ Ho, but π₀ : ∞Gpd → Set has no left adjoint. In our own reading the enriched version excludes this, since maps from a discrete set S into X form Xˢ, which is not discrete.

**nLab:** [adjoint (infinity,1)-functor](https://ncatlab.org/nlab/show/adjoint+%28infinity%2C1%29-functor). It says: “For a counterexample, when Ho is considered as an ordinary category, π₀ : Ho → Set is both left and right adjoint to the inclusion Set ⊆ Ho. However, π₀ : ∞Gpd → Set does not have a left adjoint.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### The homotopy coherent nerve turns homotopy coherent diagrams into simplicial maps

**Remember:** A simplex of the coherent nerve is a diagram that commutes up to coherent homotopy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18D20, 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An n-simplex of the homotopy coherent nerve N(C) of a simplicial category C is an n-simplex diagram in C that commutes up to homotopies, which commute up to higher homotopies, and so on. Formally it is a simplicial functor S\[Δⁿ\] → C, where the maps from i to j in S\[Δⁿ\] form the nerve of the poset of subsets of \[i,j\] containing i and j.

**Problem.** Cordier–Porter theorem: if every hom-object of C is a Kan complex, then the homotopy coherent nerve N(C) is a quasi-category. Here a homotopy coherent diagram of shape A in C is a simplicial map from the nerve of A to N(C).

**How the definition helps.** Filling an inner horn of N(C) means supplying one missing higher homotopy, which is a horn-filling problem in a hom-complex of C (our own). So Kan hom-complexes give the fillers, which is the Cordier–Porter theorem.

**nLab:** [homotopy coherent nerve](https://ncatlab.org/nlab/show/homotopy+coherent+nerve). It says: “This allowed a good definition of homotopy coherent diagrams in arbitrary simplicially enriched categories to be given.”

**Sources:**

- [Jean-Marc Cordier, Tim Porter, Vogt's theorem on categories of homotopy coherent diagrams, Math. Proc. Cambridge Philos. Soc. 100 (1986) 65–90](https://doi.org/10.1017/S0305004100065877)

### Categories without equality of objects respect isomorphism automatically

**Remember:** If you cannot ask whether two objects are equal, you cannot tell isomorphic ones apart.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A05 (Definitions and generalizations in theory of categories), 18A15. arXiv math.CT, math.LO. Level 4: research.

**Definition.** In the FOLDS signature for categories, no formula can say that two objects are equal, because the object sort has no equality predicate. Arrows form sorts that depend on a source and a target, and only parallel arrows can be equal.

**Problem.** In Makkai's first-order logic with dependent sorts (FOLDS), which has no equality of objects, every sentence is invariant under the matching notion of equivalence. So no statable property of objects can tell isomorphic objects apart.

**How the definition helps.** Without object equality, a formula can speak about objects only through arrows, and arrows transport along isomorphisms (our own). Makkai’s invariance theorem makes this precise by induction on formulas, including quantifiers over dependent sorts. So equivalent models satisfy the same sentences.

**nLab:** [preset](https://ncatlab.org/nlab/show/preset), [principle of equivalence](https://ncatlab.org/nlab/show/principle+of+equivalence), [strict category](https://ncatlab.org/nlab/show/strict+category). It says: “To make the principle of equivalence hold automatically, a category should have only a preset of objects and only its hom-sets as sets.”

**Sources:**

- [Michael Makkai, First Order Logic with Dependent Sorts, with Applications to Category Theory (1995), preprint](https://www.math.mcgill.ca/makkai/folds/foldsinpdf/FOLDS.pdf)

### In homotopy type theory, skeletal and univalent together mean gaunt

**Remember:** Skeletal is univalence with the isomorphisms truncated to a mere proposition.

*True by definition. Confidence: medium.* MSC 18A05 (Definitions and generalizations in theory of categories), 03B38. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A precategory in homotopy type theory, one whose hom-types are sets, is skeletal if for all objects a and b the map (a = b) → ‖a ≅ b‖ is an equivalence, where ‖–‖ keeps only whether a type has an element. So two objects are equal exactly when they are merely isomorphic, and a = b is a proposition.

**Problem.** In homotopy type theory, a skeletal precategory is a strict category, so being skeletal is a property. If it is also univalent, it is gaunt: its only isomorphisms are identities.

**How the definition helps.** Since ‖a ≅ b‖ is a proposition, so is a = b, and the objects form a set: the precategory is strict. Univalence says (a = b) ≃ (a ≅ b), so a ≅ b is equivalent to its own truncation and is a proposition. Thus every isomorphism is unique and is an identity, which is gauntness.

**nLab:** [skeletal category](https://ncatlab.org/nlab/show/skeletal+category). It says: “It follows that if a precategory is both skeletal and univalent, then a≅b is always a proposition (since it is equivalent to its propositional truncation), and thus the category is gaunt.”

**Sources:** none listed. No primary source with a working link was found.

### Defining graphs by reflexive relations makes them a quasitopos

**Remember:** Every vertex has an invisible loop, so an edge may collapse onto a vertex.

*True by definition.* MSC 18A10 (Graphs, diagram schemes, precategories), 18B25, 05C75. arXiv math.CT, math.CO. Level 4: research.

**Definition.** A simple graph here is a set of vertices with a reflexive symmetric relation, so each vertex counts as adjacent to itself. A morphism preserves the relation, so it may send an edge onto a single vertex.

**Problem.** With these morphisms, the category of simple graphs is a Grothendieck quasitopos, and every edge contraction is a quotient.

**How the definition helps.** Because each vertex carries an invisible loop, gluing two adjacent vertices is a morphism with the universal property of a quotient (our own). These graphs are the separated presheaves for the double-negation topology on presheaves over the one- and two-element sets. That description makes the category a Grothendieck quasitopos.

**nLab:** [category of simple graphs](https://ncatlab.org/nlab/show/category+of+simple+graphs). It says: “On the other hand, a Grothendieck quasitopos is, essentially by definition, the category of separated presheaves for a topology on a presheaf topos, in this case the ¬¬-topology.”

**Sources:**

- [Jiří Adámek, Horst Herrlich, Cartesian closed categories, quasitopoi and topological universes, Commentationes Mathematicae Universitatis Carolinae 27(2) (1986) 235–257](http://dml.cz/handle/10338.dmlcz/106447)

### With anafunctors, fully faithful and essentially surjective means equivalence, without choice

**Remember:** An anafunctor gives each object a family of interchangeable values, not one chosen value.

*Rules out counterexamples.* MSC 18A22 (Special properties of functors (faithful, full, etc.)), 18B10, 03E25. arXiv math.CT. Level 4: research.

**Definition.** An anafunctor F : C → D gives each object of C a non-empty set of 'specified values' in D, joined by specified isomorphisms, instead of one chosen value. Formally it is a span C ← F̄ → D of functors whose left leg is fully faithful and surjective on objects.

**Problem.** Without the axiom of choice, every fully faithful and essentially surjective functor has an inverse anafunctor, so it is an equivalence of categories in the sense of anafunctors.

**How the definition helps.** An inverse to F can take as values at d all pairs (c, α) with α : F(c) ≅ d, so it never chooses one, and essential surjectivity makes this set non-empty. Formally the span uses the triples (d, c, α), whose projection to D is surjective on objects and fully faithful because F is (our own). The projection to C gives the inverse anafunctor.

**nLab:** [anafunctor](https://ncatlab.org/nlab/show/anafunctor). It says: “The notion of \*anafunctor\* is a generalization of the usual notion of \*functor\*, which enables us to recover a version of this statement without the axiom of choice.”

**Sources:**

- [Michael Makkai, Avoiding the axiom of choice in general category theory, Journal of Pure and Applied Algebra 108 (1996) 109–173](https://doi.org/10.1016/0022-4049(95)00029-1)

### Coherent functors on an abelian category have global dimension at most two

**Remember:** A coherent functor is a cokernel of representables; kernels stay representable.

*True by definition.* MSC 18A25 (Functor categories, comma categories), 16E10, 18E10. arXiv math.CT, math.RT. Level 4: research.

**Definition.** A coherent functor on an abelian category C is a contravariant additive functor F to abelian groups that is the cokernel of a map of representables, Hom(−,a) → Hom(−,b) → F → 0.

**Problem.** Every coherent functor on an abelian category has projective dimension at most two, so the coherent functor category has global dimension at most two. For finite-dimensional modules over a representation-finite finite-dimensional algebra, this gives the category of finite-dimensional modules over its Auslander algebra.

**How the definition helps.** The map comes from some f : a → b, and Hom(x, −) keeps kernels, so its kernel is Hom(−, ker f), again representable (our own summary). This gives the projective resolution 0 → Hom(−, ker f) → Hom(−, a) → Hom(−, b) → F → 0 of length 2.

**nLab:** [abelianization of an additive category](https://ncatlab.org/nlab/show/abelianization+of+an+additive+category). It says: “In the case where C is abelian already, finitely presentable additive presheaves of abelian groups were studied under the name of coherent functors by Auslander.”

**Sources:**

- [M. Auslander, Coherent functors, Proceedings of the Conference on Categorical Algebra, Springer (1966)](https://doi.org/10.1007/978-3-642-99902-4_8)

### A ternary factorization system is two nested factorization systems

**Remember:** Two nested two-step factorizations give one three-step factorization.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A32 (Factorization systems, substructures, quotient structures, congruences, amalgams), 18F60. arXiv math.CT. Level 4: research.

**Definition.** A ternary factorization system is two orthogonal factorization systems (L₁,R₁) and (L₂,R₂) with L₁ ⊆ L₂, each factoring every arrow uniquely up to unique isomorphism as a left map followed by a right map. Its three classes are E = L₁, F = R₁ ∩ L₂ and M = R₂.

**Problem.** In a ternary factorization system, every morphism factors as an E-map, then an F-map, then an M-map, uniquely up to unique isomorphism. In Top, this is a quotient map, then a continuous bijection, then a subspace embedding.

**How the definition helps.** Factor by the first system, then factor the R₁ part by the second system (our own). Since R₂ ⊆ R₁, cancellation puts the middle factor in R₁, and uniqueness follows from binary uniqueness twice. In Top the steps give the image with the quotient topology and then with the subspace topology (our own).

**nLab:** [ternary factorization system](https://ncatlab.org/nlab/show/ternary+factorization+system). It says: “It turns out that a convenient way to state the definition is in terms of a pair of ordinary (orthogonal) factorization systems.”

**Sources:**

- [A. Pultr, W. Tholen, Free Quillen factorization systems, Georgian Mathematical Journal 9 (2002) 807–820](https://doi.org/10.1515/GMJ.2002.807)

### Total categories satisfy an adjoint functor theorem without a solution-set condition

**Remember:** Total means every presheaf has a best approximation by an object of C.

*Makes the theorem clean to state or prove.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A locally small category C is total if its Yoneda embedding has a left adjoint, so every presheaf W on C has a best approximation by an object of C. That object is the colimit of the identity functor weighted by W.

**Problem.** If C is total, every functor from C to a locally small category that preserves large colimits has a right adjoint. No solution-set condition is needed.

**How the definition helps.** For each target d, totality supplies the weighted colimit of the identity with weight Hom(F−, d), with no smallness or solution-set condition (our own). Since F preserves it, the evaluation cocone gives a map from its image to d, the universal arrow by the adjoint functor theorem for total categories. These universal arrows define the right adjoint.

**nLab:** [total category](https://ncatlab.org/nlab/show/total+category). It says: “Total categories satisfy a very satisfactory adjoint functor theorem: any large-colimit-preserving functor from a total category to a locally small category has a right adjoint.”

**Sources:**

- [Ross Street, Bob Walters, Yoneda structures on 2-categories, Journal of Algebra 50 (1978) 350–379](https://doi.org/10.1016/0021-8693(78)90160-6)
- [Richard J. Wood, Some remarks on total categories, Journal of Algebra 75 (1982) 538–545](https://doi.org/10.1016/0021-8693(82)90055-2)

### Functors that preserve weak pullbacks lift relations exactly, giving bisimulations

**Remember:** Preserve weak pullbacks, and lifted relations compose and keep identities.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B10 (Categories of spans/cospans, relations, or partial maps), 18A35, 68Q85. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** For an endofunctor F of sets, the Barr lift of a relation R ⊆ X × Y relates u in FX and v in FY exactly when some element of F(R) projects to u and to v. So a lifted relation is witnessed by F applied to R itself.

**Problem.** If a set functor F preserves weak pullbacks, its Barr extension preserves composition of relations and identity relations. So the generic bisimulation, in which related states have successors related by the lifted relation, behaves well.

**How the definition helps.** Composing lifted relations means merging witnesses in F(R) and F(S) that agree in the middle into one witness for the composite (our own), and preserving weak pullbacks gives exactly this. The reverse inclusion holds because F, with choice, keeps image factorizations. The identity relation is the diagonal, and it lifts to the diagonal (our own).

**Paper or page:** [Identity-Preserving Lax Extensions and Where to Find Them](https://arxiv.org/abs/2410.14440v2). It says: “It is known that preservation of weak pullbacks is a sufficient condition for a functor to admit a normal lax extension (the Barr extension, which in fact is then even strict)”

**Sources:**

- [Sergey Goncharov, Dirk Hofmann, Pedro Nora, Lutz Schröder, Paul Wild, Identity-Preserving Lax Extensions and Where to Find Them, arXiv:2410.14440 (2025)](https://arxiv.org/abs/2410.14440v2)

### The Freyd cover gives the disjunction and existence properties

**Remember:** Glue each abstract object to a set of its global elements.

*Makes the theorem clean to state or prove.* MSC 18B25 (Topoi), 18A25, 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The Freyd cover of a locally small category T with terminal object 1 glues T to sets along its global sections Γ = Hom(1,−). Its objects are triples (X, U, u) with X a set, U an object of T, and u a function from X to Γ(U).

**Problem.** In the free topos, the global sections functor Γ preserves finite colimits, so the terminal object is connected and projective. Hence its logic has the disjunction property and the existence property.

**How the definition helps.** In the cover, the global elements of (X, U, u) are the elements of X, and taking X preserves finite colimits (our own). The cover of the free topos is a topos, so freeness gives a logical section back, which transports this property to Γ. Preserving finite colimits makes 1 connected and projective, which gives the disjunction and existence properties (our own).

**nLab:** [Freyd cover](https://ncatlab.org/nlab/show/Freyd+cover). It says: “They were originally proved by syntactic means; the conceptual proofs of the lemma and theorem below are due to Freyd.”

**Sources:**

- [Ieke Moerdijk, On the Freyd cover of a topos, Notre Dame Journal of Formal Logic 24 (1983) 517–526](https://doi.org/10.1305/ndjfl/1093870454)

### Adhesive categories make double-pushout rewriting well defined

**Remember:** Pushouts along monomorphisms behave like unions of sets.

*Makes the theorem clean to state or prove.* MSC 18B50 (Extensive, distributive, and adhesive categories), 68Q42. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** An adhesive category has pullbacks and pushouts along monomorphisms, and these pushouts behave like unions of sets by being van Kampen. That is, in every cube over such a pushout whose back and left faces are pullbacks, the top is a pushout exactly when the front and right faces are pullbacks.

**Problem.** In an adhesive category, a pushout complement of a monomorphism followed by any map, when it exists, is unique up to unique isomorphism. So double-pushout rewriting with rules whose left leg is a monomorphism is well defined.

**How the definition helps.** The van Kampen cube compares two candidate pushout complements of the same maps (our own). Lack and Sobociński’s theorem gives a unique isomorphism between them that commutes with their maps. So a double-pushout step with monic left leg does not depend on the complement chosen, whenever one exists.

**nLab:** [adhesive category](https://ncatlab.org/nlab/show/adhesive+category), [span rewriting](https://ncatlab.org/nlab/show/span+rewriting). It says: “In an adhesive category, if m: C → A is mono and g: A → D is any morphism, then if a pushout complement exists, it is unique up to unique isomorphism.”

**Sources:**

- [Stephen Lack, Paweł Sobociński, Adhesive categories, FoSSaCS 2004, Lecture Notes in Computer Science 2987, Springer (2004)](https://doi.org/10.1007/978-3-540-24727-2_20)
- [Stephen Lack, Paweł Sobociński, Adhesive and quasiadhesive categories, RAIRO Theoretical Informatics and Applications 39(3) (2005) 511–545](https://doi.org/10.1051/ita:2005028)

### A separate sort for scalars makes topological vector spaces internal to Top

**Remember:** Give the scalars their own sort, so that they can carry their own topology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 46A99. arXiv math.FA, math.CT. Level 4: research.

**Definition.** Fix a topological field k as the scalar sort of the two-sorted theory of vector spaces. A model in Top is then a space X with continuous addition, zero and negation, and a scalar multiplication k × X → X continuous on the product space, satisfying the vector-space identities.

**Problem.** Topological vector spaces over a fixed topological field k are exactly the models in Top with scalar sort k of the two-sorted vector-space theory.

**How the definition helps.** A map in Top out of k × X is jointly continuous, which is exactly the condition on a topological vector space. The other operations and identities match those of a topological vector space, and conversely (our own).

**nLab:** [topological vector space](https://ncatlab.org/nlab/show/topological+vector+space). It says: “Much as a topological group is a group object in Top, so a TVS is the same as a vector space internal to Top ... provided that we use the two-sorted notion of vector space (k, X)”

**Sources:** none listed. No primary source with a working link was found.

### A universal property defines closed intervals without first defining the real numbers

**Remember:** An interval is the universal averaging structure between two end points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18A30. arXiv math.CT. Level 4: research.

**Definition.** An interval object is the initial cancellative iterative midpoint algebra with two endpoints: for any such algebra with two chosen points, exactly one midpoint-preserving map sends the endpoints to them. Here a midpoint algebra has an idempotent, symmetric and medial averaging ⊕, and cancellative means that x ↦ x ⊕ a is injective. Iterative means that h(x) = a(x) ⊕ h(t(x)) has a unique solution h for all maps a and t.

**Problem.** Two midpoint-preserving maps from an interval object to a cancellative iterative midpoint algebra agree if they agree on both endpoints. In sets, the interval objects are, up to isomorphism, the real closed intervals \[a,b\] with a &lt; b and ordinary midpoint.

**How the definition helps.** Initiality gives exactly one map for each choice of endpoint images, so two maps that agree there are equal (our own). The paper’s Corollary 4.19 identifies the real closed intervals \[a,b\] with a &lt; b as interval objects in sets, and initial objects are unique up to isomorphism.

**Paper or page:** [Euclidean interval objects in categories with finite products](https://arxiv.org/abs/2504.21551), [Euclidean interval objects in categories with finite products](https://arxiv.org/abs/2504.21551). It says: “The universal property characterises such structures up to isomorphism, supports the definition of functions between intervals, and provides a means of verifying identities between functions.”

**Sources:**

- [Martin Escardo and Alex Simpson, Euclidean interval objects in categories with finite products, arXiv:2504.21551 (2025)](https://arxiv.org/abs/2504.21551)

### Fermat theories get derivatives from Hadamard quotients, with no limits

**Remember:** Divide the increment by the step as an operation, then set the step to zero.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18F40. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A Fermat theory is a Lawvere theory extending commutative rings in which every increment divides by its step: each operation f(x,z) has a unique operation q with f(x+h,z) − f(x,z) = h·q(x,h,z). The x-derivative of f is q(x,0,z).

**Problem.** In a Fermat theory, with the derivative of f defined as q(x,0,z), the sum, product and chain rules follow by algebra alone. Each partial derivative is a derivation of the free algebra T(n).

**How the definition helps.** Uniqueness lets one compute q by expanding each increment, so the rules become identities between operations (our own). The product increment is Δf·g + f·Δg + Δf·Δg, and for a composite one substitutes the inner quotient into the outer one. Setting h = 0 gives the sum, product and chain rules.

**nLab:** [Fermat theory](https://ncatlab.org/nlab/show/Fermat+theory), [tangent category](https://ncatlab.org/nlab/show/tangent+category), [Hadamard lemma](https://ncatlab.org/nlab/show/Hadamard+lemma). It says: “is in fact a Fermat theory in that Hadamard's lemma holds for smooth functions in particular on Cartesian spaces.”

**Sources:**

- [Eduardo J. Dubuc, Anders Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### Algebraically free monads satisfy the ordinary free monad property

**Remember:** Algebras for the monad are exactly algebras for the endofunctor.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads). arXiv math.CT. Level 4: research.

**Definition.** A natural transformation F → T from an endofunctor to a monad is algebraically free if restricting along it identifies T-algebras with F-algebras, objects X with a map FX → X, over the base category.

**Problem.** An algebraically free monad on F is free on F in the ordinary sense. Every natural map F → S factors uniquely through a map T → S that preserves the monad unit and multiplication.

**How the definition helps.** Monad maps T → S correspond to functors from S-algebras to T-algebras over the base (Eilenberg–Moore). Algebraic freeness turns these into functors from S-algebras to F-algebras over the base, which correspond to transformations F → S (our own). So each F → S factors uniquely through a monad map T → S.

**nLab:** [free monad](https://ncatlab.org/nlab/show/free+monad). It says: “We say that a monad T is algebraically-free on an endofunctor F if the category T Alg<sub>mnd</sub> of T-algebras (in the sense of algebras for a monad) is equivalent to the category F Alg<sub>endo</sub> of F-algebras (in the sense of algebras for an endofunctor).”

**Sources:** none listed. No primary source with a working link was found.

### Cartesian monads make T-spans a bicategory, so generalized multicategories exist

**Remember:** A cartesian monad respects pullbacks, so composing spans by pullback stays coherent.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18M65, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A monad T on a category with pullbacks is cartesian if T preserves pullbacks and every naturality square of its unit and multiplication is a pullback. So composing T-spans by pullback and multiplication is associative and unital up to invertible 2-cells.

**Problem.** If T is a cartesian monad, the T-spans T E ← M → E′ form a bicategory, with composition by pullback and the multiplication of T. A T-multicategory is then a monad in this bicategory, as a category is a monad in spans of sets.

**How the definition helps.** The coherence 2-cells of T-span composition are universal maps between pullbacks, and the cartesian condition is exactly what makes them invertible. Then a T-multicategory, such as a globular operad, is just a monad in this bicategory. The free commutative monoid monad is not cartesian, so symmetric multicategories do not fit directly.

**nLab:** [cartesian monad](https://ncatlab.org/nlab/show/cartesian+monad). It says: “In fact, it turns out that requiring the monad T to be cartesian is exactly what is needed to ensure that the coherence 2-cells are isomorphisms, and hence that T-spans do in fact form a bicategory.”

**Sources:**

- [Tom Leinster, Higher Operads, Higher Categories, 2003, arXiv:math/0305049](https://arxiv.org/abs/math/0305049)

### Defining codensity monads as right Kan extensions makes the monad laws automatic

**Remember:** A map into T is known by what it does to G.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18A40. arXiv math.CT. Level 4: research.

**Definition.** The codensity monad of G : D → C is the right Kan extension T of G along itself, when it exists, with counit ε : TG → G. Its universal property says that transformations H → T are the same as transformations HG → G, matched by whiskering with G and composing with ε.

**Problem.** Let the right Kan extension T of G along itself exist. The unit comes from factoring the identity of G through ε, and the multiplication from factoring ε ∘ T ε. With these, T is a monad.

**How the definition helps.** Two transformations into T are equal when they agree after whiskering by G and composing with ε. After this step both unit laws reduce to ε (our own). Both associativity composites reduce to ε ∘ Tε ∘ T²ε by naturality (our own).

**nLab:** [codensity monad](https://ncatlab.org/nlab/show/codensity+monad). It says: “it suffices by universality to check that applying G on the right, followed by ε, results in a commutative diagram.”

**Paper or page:** [Probability monads as codensity monads, Proposition 2.1](https://arxiv.org/abs/2111.01250). It says: “The triple (Tᴳ, η, μ) is a monad.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius monads as two-sided adjunctions make free algebras also cofree

**Remember:** One functor builds both the free and the cofree algebra.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18M05. arXiv math.CT, math.QA. Level 4: research.

**Definition.** Write F for the free-algebra functor and U for the forgetful functor of a monad T. T is Frobenius when F is also right adjoint to U, so that F ⊣ U ⊣ F is an ambidextrous adjunction.

**Problem.** Let T be a Frobenius monad with free-algebra functor F. For every algebra A and object X, algebra maps A → F(X) correspond to maps from the underlying object of A to X.

**How the definition helps.** With this definition the claim is the adjunction U ⊣ F, read on hom-sets (our own). The work sits in the theorem that the usual definition by a Frobenius counit T(X) → X gives this adjunction (Street 2004, Section II, cited by the nLab). That counit gives the counit of the new adjunction (our own).

**nLab:** [Frobenius monad](https://ncatlab.org/nlab/show/Frobenius+monad). It says: “The monad induced from an ambidextrous adjunction is Frobenius. The converse is also true:”

**Sources:**

- [Ross Street, Frobenius monads and pseudomonoids (2004)](https://doi.org/10.1063/1.1788852)

### Nervous monads are defined as those for which the nerve theorem holds

**Remember:** A nervous monad is one whose algebras its theory already describes.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C10. arXiv math.CT. Level 4: research.

**Definition.** Fix a small dense full subcategory 𝒜 of ℰ, the arities. A monad T is 𝒜-nervous if T-algebras are exactly the models of its theory: the nerve from T-algebras to presheaves on the free T-algebras on 𝒜 is fully faithful, with image the presheaves that restrict to nerves of objects of ℰ.

**Problem.** The constructions between monads and theories form an adjunction whose fixed points are exactly the nervous monads and the theories. So nervous monads correspond to theories, and every monad with arities is nervous (Theorem 43).

**How the definition helps.** The nerve condition identifies T-algebras with models of the associated theory (our own). The monad–theory adjunction has exactly these monads and the 𝒜-theories as its fixed points. Weber’s nerve theorem says that monads with arities satisfy the condition.

**Paper or page:** [Monads and theories](https://arxiv.org/abs/1805.04346), [Monads and theories](https://arxiv.org/abs/1805.04346). It says: “The fixpoints of the adjunction are characterised as the 𝒜-nervous monads—those for which the conclusions of Weber's nerve theorem hold—and the 𝒜-theories, which we introduce here.”

**Sources:**

- [John Bourke and Richard Garner, Monads and theories, Advances in Mathematics 351 (2019), 1024–1071](https://arxiv.org/abs/1805.04346)

### Profinite monads let Reiterman's theorem hold for finite algebras of any monad

**Remember:** A profinite term is a compatible family of values in finite algebras.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 08B05. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** The profinite monad of a monad T on a variety D is the codensity monad of the functor from finite T-algebras to the profinite completion of D (our own). Its elements are profinite terms, compatible families of values in all finite T-algebras.

**Problem.** Let D be a variety of algebras and T a monad on D preserving surjective homomorphisms. A class of finite T-algebras is definable by profinite equations exactly when it is closed under finite products, subalgebras and surjective quotients.

**How the definition helps.** A profinite term can be evaluated in every finite T-algebra, so a profinite equation has one meaning for all of them (our own). The generalized Reiterman theorem proves that the classes cut out by such equations are exactly those closed under finite products, subalgebras and surjective quotients.

**Paper or page:** [Reiterman's Theorem on Finite Algebras for a Monad](https://arxiv.org/abs/2101.00942). It says: “As a key technical tool, we introduce the concept of a profinite monad associated to the monad T, which gives a categorical view of the construction of the space of profinite terms.”

**Sources:**

- [Jiri Adamek, Liang-Ting Chen, Stefan Milius and Henning Urbat, Reiterman's Theorem on Finite Algebras for a Monad, arXiv:2101.00942 (2021)](https://arxiv.org/abs/2101.00942)

### Weak distributive laws combine choice and probability where ordinary laws fail

**Remember:** Drop one unit law, and nondeterminism and probability combine.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C50. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A weak distributive law of a monad S over a monad P is a natural map SP → PS that respects both multiplications and the unit of P, but not necessarily the unit of S. Here S forms finite weighted sums and P is powerset.

**Problem.** No ordinary distributive law combines the powerset monad with the distribution monad (Plotkin). For a class of semirings containing the positive semifields, a weak distributive law combines the powerset and semimodule monads into the monad of convex sets of weighted sums.

**How the definition helps.** Dropping the unit law of S lets the law send a weighted sum of sets to the convex set of weighted sums of their elements (our own). The paper builds this law under its semiring hypotheses, and splitting an idempotent on the composite gives the convex-set monad. Plotkin’s obstruction applies only to ordinary distributive laws.

**Paper or page:** [Convexity via Weak Distributive Laws](https://arxiv.org/abs/2108.10718v4), [No-Go Theorems for Distributive Laws](https://arxiv.org/abs/2003.12531v4). It says: “Using the abstract theory of weak distributive laws, we compose the powerset and the semimodule monads via δ, obtaining the monad of convex subsets of the free semimodule.”

**Sources:**

- [Filippo Bonchi, Alessio Santamaria, Convexity via Weak Distributive Laws, Logical Methods in Computer Science 18(4) (2022), arXiv:2108.10718](https://arxiv.org/abs/2108.10718v4)
- [Maaike Zwart, Dan Marsden, No-Go Theorems for Distributive Laws, Logical Methods in Computer Science 18(1) (2022), arXiv:2003.12531](https://arxiv.org/abs/2003.12531v4)
- [Richard Garner, The Vietoris Monad and Weak Distributive Laws, Applied Categorical Structures (2019)](https://doi.org/10.1007/s10485-019-09582-w)

### In thunk-force categories, pure programs are the maps where thunking is natural

**Remember:** A program is pure when thunking before or after running it gives the same result.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18C50. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** A thunk-force category has an endofunctor L, a natural ε : L ⇒ 1 and thunk maps θₐ : A → LA, with (L, ε, θL) a comonad and each θₐ a coalgebra. An arrow f : A → B is thunkable, or pure, if thunking commutes with it: (Lf)θₐ = θᵦf.

**Problem.** In a thunk-force category, the thunkable maps form a subcategory with a monad on it. Thunk-force categories correspond to the monads whose unit is an equalizer, which form a reflective subcategory of all monads (Führmann).

**How the definition helps.** Thunkability is naturality of θ at one map, so identities and composites of thunkable maps are thunkable (our own). On thunkable maps L is a monad with unit θ and multiplication Lε. Führmann’s theorem identifies these monads by the equalizer condition and proves reflectivity.

**nLab:** [thunk-force category](https://ncatlab.org/nlab/show/thunk-force+category). It says: “The presence of non-thunkable morphisms makes θ fail to be natural overall; naturality of θ is exactly the same as saying all morphisms are thunkable.”

**Sources:**

- [Carsten Führmann, Direct models of the computational lambda-calculus, Electronic Notes in Theoretical Computer Science 20 (1999)](https://doi.org/10.1016/S1571-0661(04)80078-1)

### Define extended natural numbers as monotone sequences of bits

**Remember:** The position of the first 1 is the number; no 1 means ∞.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 03F65. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Constructively, an extended natural number is a monotone infinite sequence of bits: once a 1 appears, all later bits are 1. The number n is n zeros followed by ones, and ∞ is all zeros.

**Problem.** Constructively, in a topos with a natural numbers object, monotone bit sequences form the terminal coalgebra for X ↦ 1 + X. Its structure map returns the left summand for an initial one and the shifted sequence in the right summand otherwise.

**How the definition helps.** A coalgebra X → 1 + X lets each state stop or step, and bit n records whether a state has stopped within n steps (our own). This sequence is monotone, and the coalgebra equation forces each bit, giving the unique map. No step needs to decide whether a state ever stops.

**nLab:** [extended natural number](https://ncatlab.org/nlab/show/extended+natural+number). It says: “Note that this universal property also holds constructively (which is why we can be sure that the constructive definition above is correct).”

**Sources:**

- [Martín H. Escardó, Infinite sets that satisfy the principle of omniscience in any variety of constructive mathematics, Journal of Symbolic Logic 78 (2013) 764–784](https://doi.org/10.2178/jsl.7803040)

### Lawful lenses are exactly projections out of a product

**Remember:** A lawful lens is a coordinate: read it, overwrite it, nothing else.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 18C50, 68N18. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** A lens from a state type S to a view type V is a pair of maps, get : S → V and put : V × S → S. The lens is lawful (very well-behaved) when three laws hold. Get after put returns the value that put wrote, putting back what get read changes nothing, and a second put overwrites the first.

**Problem.** For an inhabited view set V, lawful lenses on S correspond to splittings S ≅ D × V, up to isomorphism of D, with get the projection and put replacing the V-coordinate. They also correspond to coalgebras for the costate comonad S ↦ V × (V → S).

**How the definition helps.** The three laws say that put replaces one coordinate and leaves the rest alone, so S splits. Fix v₀ in V, let D be the fibre of get over v₀, and send s to (put(v₀,s), get(s)), with inverse (d,v) ↦ put(v,d) (our own). Currying put and pairing it with get gives the coalgebra, whose equations are the lens laws (our own).

**nLab:** [lens (in computer science)](https://ncatlab.org/nlab/show/lens+%28in+computer+science%29). It says: “those for which updates of the "view" V completely overwrite any previous such changes -- turn out to equivalently be data base types of product form S = D × V with "view" given by projecting onto the V-factor.”

**Sources:**

- [R. O'Connor, Functor is to Lens as Applicative is to Biplate: Introducing Multiplate, arXiv:1103.2841 (2011)](https://arxiv.org/abs/1103.2841)
- [Michael Johnson, Robert Rosebrugh, Richard Wood, Algebras and Update Strategies, Journal of Universal Computer Science 16 (2010) 729–748](https://doi.org/10.3217/jucs-016-05-0729)

### Algebraically compact categories solve mixed-variance domain equations

**Remember:** Every functor's least and greatest fixed points are the same object.

*Makes the theorem clean to state or prove.* MSC 18C50 (Categorical semantics of formal languages), 18B35, 03B40. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A category is algebraically compact if every endofunctor F has an initial algebra (a map FX → X) and a final coalgebra (a map X → FX), and the canonical map between them is an isomorphism. So one object is both the least and the greatest fixed point of F.

**Problem.** If C is algebraically compact, every mixed-variance equation X ≅ T(X, X), for a functor T : Cᵒᵖ × C → C, has a solution. An example is X ≅ (X → X) for the untyped lambda calculus.

**How the definition helps.** Algebraic compactness passes to Cᵒᵖ × C, where X ≅ T(X, X) becomes an ordinary fixed point of (X, Y) ↦ (T(Y, X), T(X, Y)). A symmetry argument of Freyd shows that its two parts agree. Few categories are compact in the classical sense, so in practice one restricts to enriched functors, for example on pointed complete partial orders.

**nLab:** [algebraically compact category](https://ncatlab.org/nlab/show/algebraically+compact+category). It says: “If C and D are algebraically compact, so is C×D. If C is algebraically compact, so is the dual category Cᵒᵖ.”

**Sources:**

- [Peter Freyd, Algebraically complete categories, in: Category Theory (Como 1990), Lecture Notes in Mathematics 1488 (1991)](https://doi.org/10.1007/BFb0084215)

### CHAD makes automatic differentiation the unique structure-preserving functor

**Remember:** Give the derivative of each primitive, and initiality gives the derivative of every program.

*Makes the theorem clean to state or prove.* MSC 18C50 (Categorical semantics of formal languages), 65D25, 18D30. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** Take the source language to be Syn, the initial category with structure S, such as products, function types and primitive operations. Forward and reverse CHAD are the unique S-preserving functors from Syn into two Grothendieck-construction categories, Σ(C, L) and Σ(C, Lᵒᵖ), so they are fixed by the derivatives chosen for the primitives.

**Problem.** For programs between first-order types, which may be higher-order inside, forward CHAD computes the correct derivative and reverse CHAD the transposed derivative. This assumes that the derivatives of the primitive operations are correct.

**How the definition helps.** Because Syn is initial, automatic differentiation is compositional by definition: its values on the primitive operations fix it everywhere. The nLab says that the proof is a standard logical relations argument. Viewed abstractly, it follows because the Artin gluing of an S-category is again an S-category.

**nLab:** [automatic differentiation](https://ncatlab.org/nlab/show/automatic+differentiation). It says: “Viewed more abstractly, the proof follows automatically because the Artin gluing along a representable functor (like the hom out of the real numbers) of an S-category is itself again an S-category, for common most choices of S.”

**Sources:**

- [Matthijs Vákár, Reverse AD at Higher Types: Pure, Principled and Denotationally Correct (2021), arXiv:2007.05283](https://arxiv.org/abs/2007.05283)
- [Fernando Lucatelli Nunes, Matthijs Vákár, CHAD for Expressive Total Languages, Mathematical Structures in Computer Science 33 (2023), arXiv:2110.00446](https://arxiv.org/abs/2110.00446)

### Split comprehension categories make substitution strictly associative

**Remember:** Split means substitution composes exactly, as it does in syntax.

*Rules out counterexamples.* MSC 18C50 (Categorical semantics of formal languages), 03B38, 18D30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A comprehension category interprets types as a fibration over contexts, with substitution as reindexing and a comprehension functor taking Cartesian arrows to pullback squares. It is split when the chosen reindexings preserve identities and composition exactly, as substitution does in syntax.

**Problem.** A split comprehension category with strictly stable interpretations of the required type formers models dependent type theory, with substitution given by reindexing. Hofmann’s construction supplies such a split interpretation from a locally cartesian closed category.

**How the definition helps.** Syntax has strictly associative substitution, and a split cleavage gives exactly that, while chosen pullbacks in a locally cartesian closed category agree with iterated ones only up to isomorphism (our own). Hofmann’s coherence construction turns such a category into a split model with strictly stable type formers.

**nLab:** [categorical semantics of dependent type theory](https://ncatlab.org/nlab/show/categorical+semantics+of+dependent+type+theory). It says: “The way this is generally dealt with is to introduce a category-theoretic structure which does have a "substitution" operation which is strictly associative, hence does correspond directly to type theory”

**Sources:**

- [Martin Hofmann, On the interpretation of type theory in locally cartesian closed categories, CSL 1994, Lecture Notes in Computer Science 933 (1995) 427–441](https://doi.org/10.1007/BFb0022273)
- [Bart Jacobs, Comprehension categories and the semantics of type dependency, Theoretical Computer Science 107 (1993) 169–207](https://doi.org/10.1016/0304-3975(93)90169-T)
- [Pierre-Louis Curien, Richard Garner, Martin Hofmann, Revisiting the categorical interpretation of dependent type theory, Theoretical Computer Science 546 (2014) 99–119](https://doi.org/10.1016/j.tcs.2014.03.003)

### C\*-categories need a positivity axiom for the GNS representation

**Remember:** Demand that every a\*a be a square b\*b.

*Rules out counterexamples. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 46L05, 18M40. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A C\*-category is a complex Banach-enriched category with a conjugate-linear involution a ↦ a\* that fixes objects, reverses composition and satisfies ‖a\*a‖ = ‖a‖². It must also be positive: for every arrow a from x to y, a\*a = b\*b for some endomorphism b of x.

**Problem.** Every small C\*-category has a faithful \*-functor into the category Hilb of Hilbert spaces, an analogue of the GNS representation of a C\*-algebra.

**How the definition helps.** A representation on Hilbert spaces makes every a\*a a positive operator, and the C\*-identity alone does not give this. On two objects with all hom-spaces ℂ, put a\* = conj(a) on endomorphisms but a\* = −conj(a) between the objects; then a\*a is negative, so no faithful representation exists. That the axiom is what the theorem needs is our reading of the page.

**nLab:** [C-star-category](https://ncatlab.org/nlab/show/C-star-category). It says: “Unlike C\*-algebras, this does not follow automatically, as can be seen by considering the category with two objects x,y with all morphism sets a copy of ℂ”

**Sources:**

- [P. Ghez, R. Lima, J. E. Roberts, W\*-categories, Pacific Journal of Mathematics 120 (1985) 79–109](https://doi.org/10.2140/pjm.1985.120.79)

### Isbell convexity of metric spaces is the same as categorical completeness

**Remember:** For skeletal metric spaces, injective means complete, and complete means Isbell convex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 51F30. arXiv math.CT, math.MG. Level 4: research.

**Definition.** A Lawvere metric space has distances in \[0,∞\] with d(x,x) = 0 and the triangle inequality, but need not be symmetric. It is Isbell convex if every family of points xᵢ with radii rᵢ, sᵢ in \[0,∞\] and d(xᵢ,xⱼ) ≤ rᵢ + sⱼ for all i, j has a common point z with d(xᵢ,z) ≤ rᵢ and d(z,xᵢ) ≤ sᵢ.

**Problem.** Among skeletal categories enriched over a quantale, completeness is equivalent to injectivity for fully faithful enriched functors. For skeletal Lawvere metric spaces, this gives the injectivity characterization by Isbell convexity.

**How the definition helps.** Completeness is a categorical notion, so one injectivity theorem for enriched categories covers metric spaces, using the quantale \[0,∞\] under addition. Skeletal means that distance zero in both directions forces equality. The proof uses the MacNeille completion as injective envelope, and the result is a case of theorems of Hofmann and Stubbe.

**Paper or page:** [Completeness and injectivity](https://arxiv.org/abs/2005.05311), [Completeness and injectivity](https://arxiv.org/abs/2005.05311). It says: “A Lawvere metric space is Isbell convex if and only if it is complete”

**Sources:**

- [Soichiro Fujii, Completeness and injectivity, Topology and its Applications 301 (2021), 107503](https://doi.org/10.1016/j.topol.2020.107503)

### Lawvere metric spaces make the triangle inequality a composition law

**Remember:** Distances are hom-objects, and the triangle inequality is how you compose them.

*Makes the theorem clean to state or prove.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 54E50. arXiv math.CT, math.MG. Level 4: research.

**Definition.** A Lawvere metric space is a category enriched in (\[0,∞\], ≥, +, 0): the distance d(x,y) in \[0,∞\] is the hom-object. Then d(x,x) = 0 is the identity axiom, and d(x,z) ≤ d(x,y) + d(y,z) is composition.

**Problem.** A metric space is complete in the usual sense exactly when it is Cauchy complete as an enriched category: every adjoint pair of bimodules comes from a functor (Lawvere). For ordinary categories, the same notion is idempotent completeness.

**How the definition helps.** Because a metric space is an enriched category, the general enriched Cauchy-completeness test applies to it unchanged. Lawvere showed that for ordinary metric spaces, representability of left adjoint bimodules is convergence of Cauchy sequences. For Set-enrichment the same test asks that every idempotent split (our own).

**nLab:** [metric space](https://ncatlab.org/nlab/show/metric+space), [complete space](https://ncatlab.org/nlab/show/complete+space), [triangle inequality](https://ncatlab.org/nlab/show/triangle+inequality), [Cauchy complete category](https://ncatlab.org/nlab/show/Cauchy+complete+category). It says: “he found that a metric space was complete if and only if every adjunction of bimodules over the enriched category is induced by an enriched functor.”

**Sources:**

- [F. William Lawvere, Metric spaces, generalized logic and closed categories, Rendiconti del Seminario Matematico e Fisico di Milano 43 (1973) 135–166; Reprints in Theory and Applications of Categories 1 (2002) 1–37](http://www.tac.mta.ca/tac/reprints/articles/1/tr1abs.html)

### Over sets, every functor has exactly one strength

**Remember:** In sets, a strength is forced: pair each result with the context.

*True by definition. Confidence: medium.* MSC 18D25 (Actions of a monoidal category, tensorial strength), 18C15, 18C50. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A strength for a set endofunctor T is a natural map s : A × TX → T(A × X) that carries a context value a in A inside T. It must agree with the unit 1 × X ≅ X and be compatible with products A × B.

**Problem.** Over sets, every functor has exactly one strength, and every natural transformation is strong. So every monad on sets is strong in exactly one way, as Moggi's semantics of effects needs.

**How the definition helps.** Naturality along each point a : 1 → A and the unit law force s(a,t) = T(x ↦ (a,x))(t), so there is only one candidate (our own). Functoriality of T shows that this formula is natural and satisfies the product law. Naturality of any transformation at x ↦ (a,x) makes it strong, including monad units and multiplications (our own).

**Paper or page:** [What Makes a Strong Monad?](https://arxiv.org/abs/2207.00851v1). It says: “If ▷ᴅ is functionally complete, then every functor F : C → D has a unique strength, and every natural transformation τ : F ⇒ G of functors C → D is strong.”

**Sources:**

- [Dylan McDermott, Tarmo Uustalu, What Makes a Strong Monad?, EPTCS 360 (2022) 113–133, arXiv:2207.00851](https://arxiv.org/abs/2207.00851v1)
- [Anders Kock, Strong functors and monoidal monads, Archiv der Mathematik (1972)](https://doi.org/10.1007/BF01304852)

### Displayed categories give a Grothendieck construction for every functor

**Remember:** Instead of a functor into C, give the fibres over each object and arrow.

*Makes the theorem clean to state or prove.* MSC 18D30 (Fibered categories), 18D60, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A displayed category over C gives a collection of objects over each object of C and, for each arrow f and objects over its ends, a set of arrows over f. Identities and composition lie over those of C and satisfy the category laws, and no lifting condition is asked.

**Problem.** Displayed categories over C are equivalent to the slice Cat/C, that is, to all functors into C (Bénabou). The ordinary Grothendieck construction covers only the fibrations, which come from pseudofunctors Cᵒᵖ → Cat.

**How the definition helps.** A displayed category asks for no lifts, so the fibres of any functor into C form one (our own). Conversely, pairs of a base and a displayed object or arrow form the total category and its projection. These constructions are inverse up to equivalence, and pseudofunctors recover the fibred case.

**nLab:** [displayed category](https://ncatlab.org/nlab/show/displayed+category), [Grothendieck construction](https://ncatlab.org/nlab/show/Grothendieck+construction). It says: “Instead of fibrations over C, such normal lax functors correspond to arbitrary functors into C.”

**Sources:**

- [Benedikt Ahrens, Peter LeFanu Lumsdaine, Displayed categories, Logical Methods in Computer Science 15 (2019), arXiv:1705.04296](https://arxiv.org/abs/1705.04296)

### Street fibrations make fibrations respect equivalence of categories

**Remember:** Lift the morphism up to an isomorphism at its source, not exactly.

*Makes the theorem clean to state or prove.* MSC 18D30 (Fibered categories), 18N10. arXiv math.CT. Level 4: research.

**Definition.** A Street fibration is a functor p : E → B in which each arrow f into p(e) lifts to a Cartesian arrow u into e only up to an isomorphism at the source: p(u) = fh for some isomorphism h. Cartesian means that every arrow v into e with p(v) = p(u)g factors uniquely as v = uw with p(w) = g.

**Problem.** A functor equivalent to a Street fibration is again a Street fibration, so the notion makes sense in any bicategory. Over B, the 2-category of Street fibrations is equivalent to the 2-category of pseudofunctors Bᵒᵖ → Cat.

**How the definition helps.** An equivalent functor moves objects only up to isomorphism, and the definition already allows an isomorphism at the source, so the lifts survive (our own). Taking fibres and applying the bicategorical Grothendieck construction gives the correspondence with pseudofunctors for Cartesian functors over B (our own).

**nLab:** [Street fibration](https://ncatlab.org/nlab/show/Street+fibration). It says: “A Street fibration, or weak fibration, is a generalization of a Grothendieck fibration which obeys the principle of equivalence, i.e. covariant under equivalence of categories.”

**Sources:**

- [Ross Street, Fibrations in bicategories, Cahiers de topologie et géométrie différentielle catégoriques 21(2) (1980) 111–160](http://www.numdam.org/item/CTGDC_1980__21_2_111_0/)
- [Ross Street, Conspectus of variable categories, Journal of Pure and Applied Algebra 21(3) (1981) 307–338](https://doi.org/10.1016/0022-4049(81)90021-9)

### In an equipment, pointwise Kan extensions are weighted limits

**Remember:** A pointwise Kan extension is a limit weighted by the arrow's hom-profunctor.

*Makes the theorem clean to state or prove.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** For an arrow k : D → A in a proarrow equipment, A(1,k) is the identity proarrow of A restricted along k at its target. In enriched categories it is the weight (a,d) ↦ A(a,kd), which records all arrows from points a of A to the objects kd.

**Problem.** In an equipment, a pointwise right Kan extension along k : D → A is a limit weighted by the proarrow A(1,k). In the equipment of V-categories this gives the correct enriched pointwise Kan extension.

**How the definition helps.** A limit weighted by A(1,k) must be universal against cones from each point a through the arrows a → kd, which is exactly the pointwise condition (our own). In V-categories this is the classical enriched formula with weights A(a,k−) (our own).

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows). It says: “That is, the extra data of a proarrow equipment lets us define the good notion of Kan extension (even in the enriched case) as a special case of a general notion of limit.”

**Sources:**

- [R. J. Wood, Abstract proarrows I, Cahiers de topologie et géométrie différentielle 23(3) (1982) 279–290](http://www.numdam.org/item/CTGDC_1982__23_3_279_0)
- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Proarrow equipments give the right fully faithful functors for enriched categories

**Remember:** Pull B's homs back along f and get exactly A's homs.

*True by definition.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18D20, 18A22. arXiv math.CT. Level 4: research.

**Definition.** An equipment is a 2-category K of arrows with a 2-category M of proarrows (such as profunctors). A 2-functor K → M, bijective on objects and locally fully faithful, sends each arrow f : A → B to a proarrow B(1,f) with a right adjoint B(f,1). The arrow f is fully faithful when the canonical map from A's identity proarrow to B(f,f), B's homs pulled back along f, is invertible.

**Problem.** In the equipment of V-categories and V-profunctors, an arrow is fully faithful exactly when it is a V-fully-faithful V-functor.

**How the definition helps.** In V-profunctors the canonical map has components A(x,y) → B(fx,fy), so it is invertible exactly when every component is (our own). That componentwise condition is the definition of a V-fully-faithful V-functor.

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows). It says: “is said to be fully faithful if the canonical morphism U(A) → B(f,f) is an isomorphism of proarrows A → A. In V Cat this recaptures the correct notion of V-fully-faithful V-functor.”

**Sources:**

- [R. J. Wood, Abstract proarrows I, Cahiers de topologie et géométrie différentielle 23(3) (1982) 279–290](http://www.numdam.org/item/CTGDC_1982__23_3_279_0)
- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Under a lax-idempotent 2-monad, every map is lax in one way

**Remember:** Every map between algebras respects structure up to one forced 2-cell.

*True by definition. Confidence: medium.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18N15. arXiv math.CT. Level 4: research.

**Definition.** A 2-monad T is lax-idempotent (Kock–Zöberlein) if every morphism f : A → B between T-algebras carries exactly one 2-cell making it a lax T-morphism. That 2-cell, not necessarily invertible, compares the two ways round the algebra square. Free cocompletion under a class of colimits is the model case, where the 2-cell is the comparison colim(F∘D) → F(colim D) (our own).

**Problem.** For a lax-idempotent 2-monad T, every algebra structure TA → A is left adjoint to the unit A → TA. So an object carries at most one pseudo-algebra structure, up to unique isomorphism.

**How the definition helps.** The Kock–Zöberlein characterization says that a pseudo-algebra structure is exactly a left adjoint to the unit with invertible counit (our own). Left adjoints are unique up to unique isomorphism, so the algebra structure is unique.

**nLab:** [lax-idempotent 2-monad](https://ncatlab.org/nlab/show/lax-idempotent+2-monad), [lax morphism](https://ncatlab.org/nlab/show/lax+morphism). It says: “If T is a lax-idempotent 2-monad, then (by definition) every morphism in the underlying 2-category K between (the objects underlying) T-algebras has a unique structure of lax T-morphism.”

**Sources:**

- [Anders Kock, Monads for which structures are adjoint to units, J. Pure Appl. Algebra 104 (1995) 41–59](https://doi.org/10.1016/0022-4049(94)00111-U)
- [G. M. Kelly, Stephen Lack, On property-like structures, Theory Appl. Categ. 3 (1997) no. 9](http://www.tac.mta.ca/tac/volumes/1997/n9/3-09abs.html)

### Virtual equipments remove the cocompleteness condition on the enriching category

**Remember:** Use a string of proarrows as input without forming its composite.

*Makes the theorem clean to state or prove.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18D20, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A virtual equipment is a virtual double category, whose cells take a string of proarrows as input with no composite proarrow needed. It must also have units and restrictions, so that every proarrow can be pulled back along vertical arrows at both ends.

**Problem.** For every monoidal category V, V-categories and V-profunctors form a virtual equipment. Internal categories in any category with pullbacks also form one.

**How the definition helps.** Cells with a string of inputs describe compatible families of maps directly, so no coend has to exist and V needs no colimits (our own). Enriched homs give units, and substituting functors gives restrictions. For internal categories, pullbacks build the objects of composable inputs (our own).

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows), [virtual equipment](https://ncatlab.org/nlab/show/virtual+equipment). It says: “One can formulate a generalized notion of equipment which includes V Cat for any monoidal category V (and in fact, any multicategory), and Cat(S) for any category S with pullbacks.”

**Sources:**

- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Pseudo-equivalence relations show which exact categories are free exact completions

**Remember:** Keep every witness that x \~ y, not just the fact.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18A35, 18G05. arXiv math.CT. Level 4: research.

**Definition.** A pseudo-equivalence relation on X is a pair of arrows s, t : R → X, read as witnesses that x \~ y, with possibly several per pair. It has maps giving each x a witness x \~ x, reversing witnesses, and composing witnesses. The composing map is defined on a weak pullback of t and s, so only weak finite limits are needed (our own).

**Problem.** An exact category D is regular, and every equivalence relation in it is a kernel pair. Such D is Cex/lex for some C with weak finite limits exactly when D has enough projectives, and then C can be its projectives.

**How the definition helps.** Cex/lex adds formal quotients of pseudo-equivalence relations, which need only weak finite limits, and its objects from C are projective (our own). Conversely, projective covers of finite limits give weak finite limits among the projectives of D. Carboni and Vitale identify D with the completion of its projectives.

**nLab:** [regular and exact completions](https://ncatlab.org/nlab/show/regular+and+exact+completions). It says: “Moreover, an exact category D is of the form Cex/lex for some C (with weak finite limits) if and only if it has enough projectives”

**Sources:**

- [Aurelio Carboni, Enrico Vitale, Regular and exact completions, Journal of Pure and Applied Algebra 125 (1998) 79–116](https://doi.org/10.1016/S0022-4049(96)00115-6)

### With the right internal categories, Cat becomes 2-exact

**Remember:** A 2-congruence is a double category that is secretly an ordinary category.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18N10, 18D40. arXiv math.CT. Level 4: research.

**Definition.** A 2-congruence is an internal category that behaves like an honest 1-category: it is homwise-discrete, and its span of arrows is a two-sided discrete fibration over its object of objects. So its arrows form sets between each pair of objects, with compatible pre- and postcomposition.

**Problem.** In a finitely complete 2-category, the comma object f/f of any morphism f is a 2-congruence, its kernel. In Cat every 2-congruence is a kernel, so Cat is 2-exact.

**How the definition helps.** In Cat the discrete fibration condition turns the internal arrows into hom-sets, functorial in both ends, so the congruence is an ordinary category (our own). The canonical functor into that category has the congruence as its comma kernel f/f, which is what 2-exactness asks (our own).

**nLab:** [2-congruence](https://ncatlab.org/nlab/show/2-congruence), [exact 2-category](https://ncatlab.org/nlab/show/exact+2-category). It says: “But internal categories in Cat are double categories, so we need to somehow cut down the double categories to those that really represent honest 1-categories. These are the 2-congruences.”

**Sources:**

- [Ross Street, Two-dimensional sheaf theory, J. Pure Appl. Algebra 23 (1982) 251–270](https://doi.org/10.1016/0022-4049(82)90101-3)

### Finitely cocomplete categories give a Deligne tensor product that always exists

**Remember:** Work with finitely cocomplete categories, and the tensor product always exists.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18M05, 18A35. arXiv math.CT. Level 4: research.

**Definition.** Kelly’s tensor A ⊠ B of small finitely cocomplete k-linear categories, k a commutative ring, is again finitely cocomplete. Right exact k-linear functors A ⊠ B → C are the k-bilinear functors A × B → C that are right exact in each variable. Here C is any finitely cocomplete k-linear category, and right exact means preserving finite colimits.

**Problem.** Kelly’s tensor product exists for small finitely cocomplete k-linear categories. For finite abelian k-linear categories it agrees with Deligne’s tensor product whenever the latter exists.

**How the definition helps.** Kelly’s existence theorem builds this universal target, since it only has to be finitely cocomplete, not abelian (our own). Deligne’s product asks for an abelian target, which may not exist. A comparison theorem identifies the two when Deligne’s product exists.

**nLab:** [Deligne tensor product of abelian categories](https://ncatlab.org/nlab/show/Deligne+tensor+product+of+abelian+categories). It says: “He argues that in this case it is better to use Kelly's tensor product of finitely cocomplete categories, because it always exists, and it agrees with Deligne's tensor product when the latter exists.”

**Sources:**

- [Ignacio López Franco, Tensor products of finitely cocomplete and abelian categories, Journal of Algebra 396 (2013) 207–219](https://doi.org/10.1016/j.jalgebra.2013.08.015)
- [Alexandru Chirvasitu, Theo Johnson-Freyd, The fundamental pro-groupoid of an affine 2-scheme, Applied Categorical Structures 21 (2013) 469–522, arXiv:1105.3104](https://arxiv.org/abs/1105.3104)

### Gabriel's spectrum of indecomposable injectives recovers a noetherian scheme

**Remember:** Indecomposable injectives are the points, so the category knows its scheme.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 14A15, 14A22. arXiv math.CT, math.AG. Level 4: research.

**Definition.** The Gabriel spectrum of a Grothendieck category is the set of isomorphism classes of indecomposable injective objects, defined from the abelian category alone. For a noetherian scheme these are the injective hulls of the residue fields, one for each point (our own).

**Problem.** Two noetherian schemes with equivalent categories of quasi-coherent sheaves are isomorphic. Rosenberg later extended this to all schemes, using a different spectrum.

**How the definition helps.** An equivalence of categories preserves indecomposable injectives, so it gives a bijection of points. Gabriel then recovers the topology and the structure sheaf from localizing subcategories, which an equivalence also preserves.

**nLab:** [Des Catégories Abéliennes](https://ncatlab.org/nlab/show/Des+Cat%C3%A9gories+Ab%C3%A9liennes), [Gabriel-Rosenberg theorem](https://ncatlab.org/nlab/show/Gabriel-Rosenberg+theorem). It says: “for any abelian category Gabriel introduces a spectrum whose points are (isomorphism classes of) indecomposable injectives”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “This category encodes all the relevant geometric information about V, and V can be recovered from Qcoh(V) (the Gabriel–Rosenberg reconstruction theorem).”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Gabriel–Popescu makes every Grothendieck category locally presentable

**Remember:** Build every object by filtered colimits from one set of presentable objects.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 18C35, 18E20. arXiv math.CT. Level 4: research.

**Definition.** A category is locally presentable when it has all small colimits and a set of κ-presentable objects, for some infinite regular cardinal κ. Every object is a κ-filtered colimit of these objects, and κ-presentable means that maps out of them commute with κ-filtered colimits.

**Problem.** Every Grothendieck category is locally presentable. So the small object argument and the theory of accessible categories apply to it.

**How the definition helps.** Gabriel–Popescu makes the category a reflective subcategory of Mod(R), and module categories are locally presentable. A reflective subcategory closed under κ-filtered colimits for some κ is again locally presentable (our own).

**nLab:** [Grothendieck category](https://ncatlab.org/nlab/show/Grothendieck+category). It says: “Any Grothendieck abelian category is locally presentable.”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “As a consequence of Gabriel–Popescu, one can show that every Grothendieck category is locally presentable.”

**Sources:**

- [T. Beke, Sheafifiable homotopy model categories, Math. Proc. Cambridge Philos. Soc. 129 (2000) 447–475](https://doi.org/10.1017/S0305004100004722)
- [M. Takeuchi, A simple proof of Gabriel and Popesco's theorem, J. Algebra 18 (1971) 112–113](https://doi.org/10.1016/0021-8693(71)90130-X)

### In locally noetherian categories, noetherian objects determine the localizing subcategories

**Remember:** Every object is a directed union of its noetherian pieces.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E40, 16D90. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A Grothendieck category is locally noetherian when it has a set of noetherian generators, objects whose subobjects satisfy the ascending chain condition. Then every object is the directed union of its noetherian subobjects (our own).

**Problem.** In a locally noetherian Grothendieck category 𝒜, sending a localizing subcategory to its noetherian objects is a bijection onto the Serre subcategories of noetherian objects. For a noetherian ring R this matches localizing subcategories of Mod(R) with Serre subcategories of finitely generated modules.

**How the definition helps.** A localizing subcategory is closed under subobjects and directed unions, so it is determined by its noetherian members (our own). Gabriel shows that directed unions of objects from a Serre subcategory of noetherian objects give the inverse map.

**nLab:** [localizing subcategory](https://ncatlab.org/nlab/show/localizing+subcategory). It says: “the assignment which to any localizing subcategory T⊂A assigns the full subcategory T<sub>Noether</sub>⊂T of noetherian objects in T is the bijection between the localizing subcategories in A and (strongly) thick subcategories in A<sub>Noether</sub>”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “A Grothendieck category is called locally Noetherian if it has a set of Noetherian generators; an example is the category of left modules over a left-Noetherian ring.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Left and right abelian envelopes of a thin category are Ringel dual

**Remember:** One thin category, two universal envelopes, right exact and left exact.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16G10. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A right abelian envelope of an exact category E is an abelian category R with a right exact functor E → R. Right exact functors out of E extend through it: for every abelian category A, restriction identifies right exact functors R → A with those E → A, up to equivalence. The left envelope uses left exact functors throughout.

**Problem.** Highest weight categories are exactly the right or left abelian envelopes of thin exact categories. The two envelopes of each thin exact category are Ringel dual.

**How the definition helps.** Ringel duality, usually defined through a tilting object, becomes a change of side: the same thin category, with right exact or left exact universality (our own). The work is proving that the envelopes exist and are highest weight categories. The duality for thin categories itself uses derived categories and Serre functors.

**Paper or page:** [Abelian envelopes of exact categories and highest weight categories](https://arxiv.org/abs/2012.15707v4). It says: “Ringel duality is interpreted as a duality between the right and left abelian envelopes of a thin exact category.”

**Sources:**

- [Agnieszka Bodzenta, Alexey Bondal, Abelian envelopes of exact categories and highest weight categories, arXiv:2012.15707 (2024)](https://arxiv.org/abs/2012.15707v4)
- [Agnieszka Bodzenta, Alexey Bondal, Abelian envelopes of exact categories and highest weight categories, Mathematische Zeitschrift (2024)](https://doi.org/10.1007/s00209-024-03543-3)

### Universal properties make abelianizing a localization a Serre quotient

**Remember:** Invert, then abelianize, equals abelianize, then kill kernels and cokernels.

*True by definition. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35. arXiv math.CT. Level 4: research.

**Definition.** The free abelian category on C is an abelian category with a functor from C through which every functor from C to an abelian category extends exactly. Precisely, for every abelian category A, restriction identifies exact functors into A with functors C → A, up to equivalence.

**Problem.** Let Σ be a set of arrows in a small category C. Then the free abelian category on C\[Σ⁻¹\] is equivalent to the quotient of the one on C by the Serre subcategory generated by kernels and cokernels of Σ.

**How the definition helps.** Both sides classify functors out of C that invert Σ, so the universal properties give the equivalence (our own). An exact functor inverts an image arrow exactly when it kills its kernel and cokernel (our own). Its kernel is a Serre subcategory, so this means it kills the whole Serre subcategory they generate (our own).

**Paper or page:** [Abelian versus triangulated quotients, Proposition 6](https://arxiv.org/abs/2503.07194), [Abelian versus triangulated quotients, Lemma 5](https://arxiv.org/abs/2503.07194). It says: “Then the localisation 𝒞 → 𝒞\[Σ⁻¹\] induces an equivalence Ab(add(𝒞))/𝒮 ⥲ Ab(add(𝒞\[Σ⁻¹\])), where 𝒮 denotes the Serre subcategory generated by the kernels and cokernels of the morphisms in Σ”

**Sources:**

- [Abelian versus triangulated quotients, arXiv:2503.07194 (2025)](https://arxiv.org/abs/2503.07194)

### Well-powered abelian categories have Serre quotients with small Hom-sets

**Remember:** Few subobjects means a set-sized colimit, so small Hom-sets.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35. arXiv math.CT. Level 4: research.

**Definition.** An abelian category is well-powered when the subobjects of each object form a set, not a proper class. This matters for a Serre quotient 𝒜/ℬ, where Hom(X, Y) is a direct limit of Hom(X′, Y/Y′). The limit runs over subobjects X′ ⊆ X and Y′ ⊆ Y with X/X′ and Y′ in ℬ.

**Problem.** If 𝒜 has small Hom-sets, which are sets rather than proper classes, and is well-powered, then every Serre quotient 𝒜/ℬ has small Hom-sets. Grothendieck categories are well-powered, so their Serre quotients are honest categories.

**How the definition helps.** Well-poweredness makes the index of Gabriel’s direct limit a set, so each Hom of the quotient is a set (our own). Without it, the quoted paper gives an abelian category with small Hom-sets and a Serre quotient whose Hom-sets are not small. Grothendieck categories are well-powered, since maps out of a generator bound the number of subobjects.

**Wikipedia:** [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category), [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “where the limit is taken over subobjects X′ ⊆ X and Y′ ⊆ Y such that X/X′∈ℬ and Y′ ∈ ℬ.”

**Paper or page:** [Abelian versus triangulated quotients, Proposition 7](https://arxiv.org/abs/2503.07194), [Injectives, Lemma 19.11.1](https://stacks.math.columbia.edu/tag/0E8N). It says: “The abelian category Ab(add(𝒞)) is a 𝔘-category, and there exists a Serre subcategory such that the corresponding quotient is not a 𝔘-category.”

**Sources:**

- [Abelian versus triangulated quotients, arXiv:2503.07194 (2025)](https://arxiv.org/abs/2503.07194)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Barr's embedding lets statements about regular categories be checked in sets

**Remember:** Regular means finite limits plus images that survive pullback.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E20 (Categorical embedding theorems), 18E08. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A regular category has finite limits and images: every arrow factors as a regular epimorphism followed by a monomorphism, and pullback preserves regular epimorphisms. A regular functor preserves finite limits and regular epimorphisms, so it preserves images.

**Problem.** Every small regular category embeds fully, faithfully and regularly into a presheaf category. So regular sequents valid in sets, such as the fact that regular epimorphisms compose, hold in every small regular category.

**How the definition helps.** Regular sequents speak only of finite limits and images, which Barr’s embedding preserves and, being full and faithful, reflects (our own). Presheaves compute these objectwise, as in sets, so a sequent valid in sets holds in presheaves and hence in the category (our own).

**nLab:** [Barr embedding theorem](https://ncatlab.org/nlab/show/Barr+embedding+theorem). It says: “by Barr's embedding theorem, if a category is small and regular, then there exists an embedding, which is a full, faithful and regular, into a category of presheaves over some small category.”

**Sources:**

- [M. Barr, Exact categories, in Exact Categories and Categories of Sheaves, Lecture Notes in Math. 236, Springer (1971) 1–120](https://doi.org/10.1007/BFb0058580)

### Gabriel–Popescu makes Grothendieck categories exactly quotients of module categories

**Remember:** Grothendieck categories are module categories with some modules declared zero.

*Makes the theorem clean to state or prove.* MSC 18E20 (Categorical embedding theorems), 18E10, 18E35. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A Grothendieck category is an abelian category with all coproducts, exact filtered colimits and a generator U, an object such that Hom(U, −) is faithful. A localizing subcategory ℬ of Mod(R) is a Serre subcategory whose quotient functor Mod(R) → Mod(R)/ℬ has a right adjoint.

**Problem.** An abelian category is a Grothendieck category exactly when it is equivalent to Mod(R)/ℬ for a ring R and a localizing subcategory ℬ. One can take R = End(U), with the equivalence induced by Hom(U, −).

**How the definition helps.** Gabriel–Popescu gives a fully faithful functor Hom(U, −) to right End(U)-modules with an exact left adjoint. The left adjoint identifies the target of the localization with the quotient by its kernel (our own). Conversely, a localizing quotient of a Grothendieck category is Grothendieck (our own).

**Wikipedia:** [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category), [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “The Gabriel–Popescu theorem states that any Grothendieck category 𝒜 is equivalent to a Serre quotient of the form Mod(R)/ℬ, where Mod(R) denotes the abelian category of right modules over some unital ring R”

**Paper or page:** [Injectives, Theorem 19.14.3](https://stacks.math.columbia.edu/tag/0F5U). It says: “Then there exists a (noncommutative) ring R and functors G : 𝒜 → Mod<sub>R</sub> and F : Mod<sub>R</sub> → 𝒜 such that F is the left adjoint to G, G is fully faithful, and F is exact.”

**Sources:**

- [M. Takeuchi, A simple proof of Gabriel and Popesco's theorem, J. Algebra 18 (1971) 112–113](https://doi.org/10.1016/0021-8693(71)90130-X)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Perpendicular subcategories of modules are exactly abelian categories with projective generators

**Remember:** Test every chosen module for vanishing maps and first extensions into M.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E20 (Categorical embedding theorems), 18E10, 18C35. arXiv math.CT, math.RA. Level 4: research.

**Definition.** Fix a set 𝒮 of modules over a ring R. Its right perpendicular subcategory is the full subcategory of R-modules M satisfying Hom(S, M) = Ext¹(S, M) = 0 for every S ∈ 𝒮.

**Problem.** An abelian category embeds exactly and fully faithfully into modules as a right perpendicular subcategory exactly when it is locally presentable with a projective generator. This class contains categories of contramodules, which in general are not Grothendieck categories.

**How the definition helps.** The projective generator P gives the exact functor Hom(P, −) into modules over End(P), so the category sits inside modules (our own). The theorem says its image is cut out by vanishing of Hom and Ext¹ from a set of modules, parallel to Gabriel–Popescu. Dropping exact filtered colimits is what lets contramodule categories in.

**Paper or page:** [Abelian right perpendicular subcategories in module categories, Corollary 4.11](https://arxiv.org/abs/1705.04960). It says: “The following classes of abelian categories (viewed as abstract categories irrespectively of a particular embedding into a category of modules) coincide with each other, and with the class of all locally presentable abelian categories with a projective generator”

**Sources:**

- [L. Positselski, Abelian right perpendicular subcategories in module categories, arXiv:1705.04960 (2022)](https://arxiv.org/abs/1705.04960)

### The Gabriel–Quillen embedding moves diagram lemmas into exact categories

**Remember:** First arrows survive pushout, last arrows survive pullback, and each kind composes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E20 (Categorical embedding theorems), 18E05, 18E10. arXiv math.CT, math.KT. Level 4: research.

**Definition.** An exact structure on an additive category is a class of kernel–cokernel pairs, called conflations, that contains all split pairs and is closed under isomorphism. Their first arrows compose and stay first arrows under pushout along any map. Their last arrows compose and stay last arrows under pullback along any map.

**Problem.** Every small exact category embeds fully faithfully, closed under extensions, into an abelian category. A sequence is a conflation exactly when it is short exact there, so the five lemma holds for conflations.

**How the definition helps.** Quillen’s axioms make the left exact functors an abelian category into which the embedding detects conflations, so the five lemma transfers. For a map of conflations with invertible outer maps, the abelian five lemma inverts the middle map there (our own). A fully faithful functor reflects isomorphisms, so the middle map is invertible in the exact category (our own).

**Wikipedia:** [Exact category](https://en.wikipedia.org/wiki/Exact_category). It says: “in which E is a natural subcategory (via the Yoneda embedding, since Hom is left exact), stable under extensions, and in which a sequence is in E if and only if it is exact in A”

**Sources:**

- [D. Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973)](https://doi.org/10.1007/BFb0067053)

### Left modular torsion classes are exactly those splitting every brick

**Remember:** Every brick falls wholly on the torsion side or the torsion-free side.

*Makes the theorem clean to state or prove.* MSC 18E40 (Torsion theories, radicals), 16G10. arXiv math.RT. Level 4: research.

**Definition.** A torsion pair (T, F) of module classes is brick-splitting if every brick, a module whose endomorphism ring is a division ring, lies in T or in F.

**Problem.** For a finite-dimensional algebra, a torsion class T is left modular exactly when its torsion pair is brick-splitting. Left modular means that (U ∨ T) ∧ V = U ∨ (T ∧ V) in the lattice of torsion classes whenever U ⊆ V.

**How the definition helps.** The brick test replaces a lattice identity over pairs of torsion classes with a membership test on modules. The arrows between adjacent torsion classes carry brick labels, and the paper links left modularity to where those arrows sit. That link is the main work, in both directions.

**Paper or page:** [Brick-splitting Torsion Pairs and Left Modularity](https://arxiv.org/abs/2506.13602v2). It says: “A torsion pair is called brick-splitting if any given brick is either torsion or torsion-free with respect to that torsion pair.”

**Sources:**

- [Sota Asai, Osamu Iyama, Kaveh Mousavand, Charles Paquette, Brick-splitting Torsion Pairs and Left Modularity, arXiv:2506.13602 (2025)](https://arxiv.org/abs/2506.13602v2)

### Adjunctions of toposes are homotopy equivalences

**Remember:** Shape turns every adjunction of toposes into a homotopy equivalence.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18N60, 55P55. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A geometric morphism, an adjoint pair whose left adjoint preserves finite limits, is a weak homotopy equivalence when its induced map on shapes (fundamental ∞-groupoids) is an equivalence. Shape turns the 2-cells between geometric morphisms into homotopies (our own).

**Problem.** Every local geometric morphism and every totally connected geometric morphism is a homotopy equivalence of toposes.

**How the definition helps.** A local or totally connected geometric morphism is one half of an adjunction of toposes (our own). Shape carries the unit and counit to homotopies, so the two maps are inverse up to homotopy (our own).

**nLab:** [homotopy equivalence of toposes](https://ncatlab.org/nlab/show/homotopy+equivalence+of+toposes). It says: “One important thing to note is that any adjunction in the 2-category Topos induces a homotopy equivalence in any of the above senses.”

**Sources:**

- [M. Artin, B. Mazur, Etale Homotopy, Lecture Notes in Mathematics 100, Springer (1969)](https://doi.org/10.1007/BFb0080957)

### Closed condensed subsets of a compactly generated space are its closed subspaces

**Remember:** Closed means closed on every profinite probe, exactly like compactly generated closedness.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54D50. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A subobject Z of a condensed set A is closed if its pullback to S is closed for every map to A from a profinite set S. Profinite sets are the compact, Hausdorff, totally disconnected spaces, and this is the test that defines closedness in a compactly generated space.

**Problem.** For a compactly generated space T, closed subspaces Z ⊂ T correspond bijectively to closed condensed subsets of T̲, by Z ↦ Z̲. Here T̲ is the condensed set S ↦ C(S, T).

**How the definition helps.** Closedness in a compactly generated space is tested on compact Hausdorff probes, and profinite probes suffice, so both notions pick the same subsets (our own). A closed condensed subset is then the condensed set of its subspace, since maps S → T landing in Z are continuous into Z with the subspace topology.

**Paper or page:** [The condensed homotopy type of a scheme](https://arxiv.org/abs/2510.07443). It says: “Sending a closed subspace Z ⊂ T to Z → T induces an order-preserving bijection between closed subspaces of T and closed condensed subsets of T.”

**Sources:**

- [The condensed homotopy type of a scheme, arXiv:2510.07443](https://arxiv.org/abs/2510.07443)

### Condensed abelian groups form an abelian category

**Remember:** Glue abelian-group sections along finite jointly surjective families of profinite probes.

*Rules out counterexamples.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18E10, 18F20. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A condensed abelian group is a sheaf of abelian groups on profinite sets, where a cover is a finite family of maps that is jointly surjective. Being sheaves, they have kernels and cokernels computed as for sheaves (our own).

**Problem.** Condensed abelian groups form an abelian category, with all limits and colimits and enough compact projective objects. Topological abelian groups do not form an abelian category.

**How the definition helps.** Sheaves of abelian groups form an abelian category with small limits and colimits (our own). Free condensed abelian groups on extremally disconnected profinite sets give compact projective generators (our own). Topological groups fail: the identity from discrete ℝ to usual ℝ has zero kernel and cokernel but is not invertible, while condensed groups see a nonzero cokernel (our own).

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics), [condensed abelian group](https://ncatlab.org/nlab/show/condensed+abelian+group), [condensed set](https://ncatlab.org/nlab/show/condensed+set), [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “For instance, the category of topological abelian groups is not abelian, which means for instance that it lacks a good theory of exact sequences. But the category of condensed abelian groups is abelian”

**Sources:**

- [Peter Scholze (all results joint with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Clark Barwick, Peter Haine, Pyknotic objects, I. Basic notions, arXiv:1904.09966 (2019)](https://arxiv.org/abs/1904.09966)

### Four conditions on a site give a cohesive topos

**Remember:** Remember the terminal object, connected covers, points everywhere, and sifted opposite.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A cohesive site is a small site with a terminal object, whose covering sieves are all connected and whose objects all have a global point. Its opposite category must also be sifted: colimits of that shape commute with finite products in sets.

**Problem.** The sheaf topos on a cohesive site is cohesive over sets, with adjoints Π₀ ⊣ Disc ⊣ Γ ⊣ CoDisc and Π₀ preserving finite products. Each connected piece has a global point.

**How the definition helps.** Each condition supplies one piece of cohesion: connected covers make constant presheaves sheaves, so the colimit gives Π₀ ⊣ Disc (our own). Siftedness makes Π₀ preserve finite products, and evaluation at the terminal object gives Γ with a codiscrete right adjoint (our own). Global points of site objects give every piece a point (our own).

**nLab:** [cohesive site](https://ncatlab.org/nlab/show/cohesive+site). It says: “For C a cohesive site, the category of sheaves Sh(C) on C is a cohesive topos over Set for which pieces have points.”

**Sources:**

- [U. Schreiber, Differential cohomology in a cohesive infinity-topos, arXiv:1310.7930 (2013)](https://arxiv.org/abs/1310.7930)

### In cohesive sites, finite products make the shape functor preserve products

**Remember:** Cosifted means colimits over the opposite category preserve finite products.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 4: research.

**Definition.** A category C is cosifted if colimits indexed by Cᵒᵖ commute with finite products in sets. A site is locally connected if every covering sieve is connected, which makes Π₀ of a sheaf its colimit over Cᵒᵖ.

**Problem.** On a locally connected site C, the functor Π₀ : Sh(C) → Set preserves finite products exactly when C is cosifted. In particular, this holds when C has finite products.

**How the definition helps.** Local connectedness makes constant presheaves sheaves, so Π₀ exists and is the colimit over Cᵒᵖ. Colimits over Cᵒᵖ commute with finite products exactly when C is cosifted. A category with finite products is cosifted, since its opposite has finite coproducts and so is sifted (our own).

**nLab:** [cohesive site](https://ncatlab.org/nlab/show/cohesive+site), [categories with finite products are cosifted](https://ncatlab.org/nlab/show/categories+with+finite+products+are+cosifted). It says: “The condition that Π₀ preserves finite products is precisely the condition that C be a cosifted category.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos (2013), arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Johnstone's topological topos makes geometric realization preserve finite limits

**Remember:** The topological topos is the world of spaces seen through convergent sequences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F60, 55U10. arXiv math.CT, math.GN. Level 4: research.

**Definition.** Johnstone’s topological topos is the topos of sheaves, for the canonical topology, on the full subcategory of spaces with two objects: a point 1 and the convergent sequence ℕ⁺, the one-point compactification of discrete ℕ. Its objects are spaces seen through convergent sequences.

**Problem.** In the topological topos ℰ, geometric realization sSet → ℰ is the inverse image of a geometric morphism. So it preserves finite limits.

**How the definition helps.** In the topological topos, realization is an inverse image, and inverse images preserve finite limits. Johnstone points out that this fails for the big topos on Top and for Lawvere’s topos for continuum mechanics. The price is that the objects are generalized sequential spaces, not all topological spaces.

**nLab:** [Johnstone's topological topos](https://ncatlab.org/nlab/show/Johnstone%27s+topological+topos), [nice category of spaces](https://ncatlab.org/nlab/show/nice+category+of+spaces). It says: “following an idea by Joyal, the topological topos ℰ ≔ Sh<sub>J</sub>(Σ) allows one to represent the geometric realization functor sSet → ℰ as the inverse image of a geometric morphism”

**Sources:**

- [Peter Johnstone, On a topological topos, Proc. London Math. Soc. (3) 38 (1979) 237–271](https://doi.org/10.1112/plms/s3-38.2.237)

### Lex total categories make Giraud's theorem a property of the Yoneda embedding

**Remember:** 𝒞 is a left exact reflection of its own presheaves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18A40. arXiv math.CT. Level 4: research.

**Definition.** A locally small category 𝒞 is lex total if its Yoneda embedding into presheaves \[𝒞ᵒᵖ, Set\] has a left adjoint that preserves finite limits (is left exact). So 𝒞 is a left exact reflection of its own large presheaf category.

**Problem.** A lex total category is a Grothendieck topos exactly when it has a small set of generators (Street and Walters).

**How the definition helps.** Giraud’s theorem presents Grothendieck toposes as left exact reflections of presheaf toposes on small sites. Lex totality asks for this with the large presheaf category of 𝒞 itself, so no site has to be chosen. A small set of generators is what cuts this down to a small site (our own).

**nLab:** [lex total category](https://ncatlab.org/nlab/show/lex+total+category). It says: “A lex total category ℰ is a Grothendieck topos iff ℰ has a small set of generators.”

**Sources:**

- [Ross Street, Notions of topos, Bulletin of the Australian Mathematical Society 23 (1981) 199–208](https://doi.org/10.1017/S000497270000705X)

### Probing by profinite sets embeds compactly generated spaces fully faithfully

**Remember:** A compactly generated topology is exactly what maps from compact spaces see.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54D50, 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A space X is compactly generated if a subset is closed whenever its preimage under every continuous map from a compact Hausdorff space is closed. So its topology is fixed by maps from compact spaces, and its condensed set X̲ records such maps: X̲(S) is the set of continuous maps S → X for profinite S.

**Problem.** For compactly generated spaces X and arbitrary Y, maps of condensed sets X̲ → Y̲ are the same as continuous maps X → Y.

**How the definition helps.** A map X̲ → Y̲ is fixed by its value on the point, a function X → Y that is continuous on every profinite probe (our own). Every compact Hausdorff space is a quotient of a profinite set, so the function is continuous on compact Hausdorff probes, and compact generation gives continuity (our own). For κ-condensed sets use κ-small probes and κ-compactly generated X.

**nLab:** [condensed set](https://ncatlab.org/nlab/show/condensed+set). It says: “The forgetful functor from the category of topological spaces to κ-condensed sets is a faithful functor. It becomes fully faithful when restricted to κ-compactly generated spaces.”

**Paper or page:** [Arithmetic duality for p-adic pro-étale cohomology of analytic curves](https://arxiv.org/abs/2308.07712). It says: “restricted to compactly generated topological spaces is fully faithful.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Profinite covers let condensed sets be evaluated on all compact Hausdorff spaces

**Remember:** Profinite sets cover every compact Hausdorff space and cover overlaps too.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20, 54D30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A condensed set is a sheaf on profinite sets (compact, Hausdorff and totally disconnected), where a cover is a finite jointly surjective family. The same covers make all compact Hausdorff spaces a site. Profinite sets are dense in it: every compact Hausdorff space is the image of a profinite set, and the overlap of such a cover is again profinite.

**Problem.** Restriction from compact Hausdorff spaces to profinite sets is an equivalence of their categories of sheaves. So a condensed set has a well-defined value on every compact Hausdorff space, such as the interval \[0, 1\].

**How the definition helps.** By the comparison lemma, a dense subcategory of a site has the same sheaves, and profinite sets are dense. For S compact Hausdorff, the Stone–Čech compactification S′ of S taken as a discrete set maps onto S. The overlap S′ ×ₛ S′ is closed in S′ × S′, hence profinite, so the sheaf condition fixes the value on S.

**nLab:** [condensed set](https://ncatlab.org/nlab/show/condensed+set). It says: “In all three cases, morphisms are given by continuous maps and covering families are given by finite families of jointly surjective continuous maps.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Quasiseparatedness excludes ℝ modulo ℚ from compact Hausdorff condensed sets

**Remember:** Compact plus closed equivalence relation gives compact Hausdorff; ℝ/ℚ fails the second.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54D30, 54B15. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A condensed set T is quasicompact if some profinite set maps onto it. It is quasiseparated if the fibre product S₁ ×ₜ S₂ of any two profinite sets over T is quasicompact. For a profinite cover S → T, this makes the relation S ×ₜ S compact, hence closed in S × S (our own).

**Problem.** The functor sending a space X to the condensed set X̲ : S ↦ C(S, X) is an equivalence from compact Hausdorff spaces to quasicompact quasiseparated condensed sets.

**How the definition helps.** Quasiseparatedness makes S ×ₜ S a closed equivalence relation on a profinite cover S, so its quotient is compact Hausdorff (our own). The condensed quotient ℝ/ℚ, with ℚ discrete, is quasicompact because the interval covers it (our own). Its overlap over the interval splits into infinitely many disjoint nonempty open pieces, one for each rational difference, so it is not quasiseparated (our own).

**Paper or page:** [Arithmetic duality for p-adic pro-étale cohomology of analytic curves](https://arxiv.org/abs/2308.07712). It says: “induces an equivalence between the category of compact Hausdorff spaces and qcqs (i.e., quasi-compact quasi-separated) condensed sets.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Arithmetic duality for p-adic pro-étale cohomology of analytic curves, arXiv:2308.07712](https://arxiv.org/abs/2308.07712)

### Splitting covers turn condensed sets into finite-product-preserving functors

**Remember:** Where every cover splits, sheaves only see finite disjoint unions.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54G05, 18F20. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A compact Hausdorff space is extremally disconnected if every continuous surjection onto it from a compact Hausdorff space has a continuous section. By Gleason, equivalently, the closure of every open set is open. On such spaces every cover splits, so the sheaf condition only asks finite disjoint unions to go to products (our own).

**Problem.** Fix an uncountable strong limit cardinal κ. Then κ-condensed sets are the contravariant set-valued functors on κ-small extremally disconnected compact Hausdorff spaces that send finite disjoint unions, including the empty one, to products.

**How the definition helps.** A finite cover of an extremally disconnected space splits, and split covers satisfy descent for every presheaf, so only the finite-union condition remains (our own). Every κ-small profinite set has a κ-small extremally disconnected cover, so the comparison lemma identifies the sheaves (our own).

**nLab:** [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “Take 𝒞 ⊂ Top to be the subcategory of tiny compact hausdorff spaces that are extremally disconnected, called Stonean spaces. A pyknotic set carries finite coproducts to products in Set.”

**Wikipedia:** [Extremally disconnected space](https://en.wikipedia.org/wiki/Extremally_disconnected_space). It says: “the projective objects of the category of compact Hausdorff spaces are exactly the extremally disconnected compact Hausdorff spaces.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Andrew M. Gleason, Projective topological spaces, Illinois Journal of Mathematics 2 (1958), 482–489](https://doi.org/10.1215/ijm/1255454110)

### Superextensive sites let you sheafify for single covers after imposing coproducts

**Remember:** Glue the covering pieces into one coproduct, and treat coproducts separately.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B50, 18F20. arXiv math.CT. Level 4: research.

**Definition.** A finitary superextensive topology lives on a category with disjoint, pullback-stable finite coproducts. It contains every finite coproduct cover, and every covering sieve contains a finite covering family. So a finite covering family can be replaced by the single map from its coproduct (our own).

**Problem.** Let T be a superextensive topology whose covers are stable under finite coproducts. Then sheafifying an extensive sheaf for the single covers of T gives an extensive sheaf, and hence a T-sheaf.

**How the definition helps.** A finite covering family becomes a single cover by its coproduct, so descent splits into a coproduct condition and a single-cover condition (our own). Extensivity splits a single cover of a coproduct into covers of the summands, and closure under coproducts recombines them (our own). So sheafifying for single covers keeps the extensive condition, and the result is a T-sheaf (our own).

**nLab:** [superextensive site](https://ncatlab.org/nlab/show/superextensive+site). It says: “In general, it is not true, for two Grothendieck topologies T₁ and T₂ on the same category, that T₂-sheafification preserves T₁-sheaves”

**Sources:**

- [David M. Roberts, Internal categories, anafunctors and localisations, Theory and Applications of Categories 26 (2012), arXiv:1101.2363](https://arxiv.org/abs/1101.2363)

### The atomic topology works on any category, without the Ore condition

**Remember:** In the atomic topology, any single arrow into an object covers it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 4: research.

**Definition.** On a small category C, the generated atomic topology is the least Grothendieck topology in which every single arrow into an object covers it. So every nonempty sieve, a family of arrows into an object closed under precomposition, covers.

**Problem.** For every small category C with the generated atomic topology, its sheaf topos is an atomic Grothendieck topos.

**How the definition helps.** Objects covered by the empty sieve carry only trivial sheaf values, and the remaining objects satisfy the right Ore condition (our own). The comparison lemma then reduces the claim to the classical theorem that atomic sites give atomic toposes (our own).

**nLab:** [atomic site](https://ncatlab.org/nlab/show/atomic+site). It says: “it was observed by O. Caramello (2012) that the atomic topology can in fact be defined on arbitrary categories not only on those satisfying the Ore condition.”

**Sources:**

- [Olivia Caramello, Atomic toposes and countable categoricity, Applied Categorical Structures 20 (2012) 379–391, arXiv:0811.3547](https://arxiv.org/abs/0811.3547)

### The Yoneda internal Hom makes condensed sets cartesian closed

**Remember:** Maps over S are maps from A × S; currying is automatic.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54C35, 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** For condensed sets A and B, the internal Hom is the condensed set whose value on a profinite set S is Hom(A × S̲, B). The Yoneda lemma forces this value if Hom is to be right adjoint to A × −.

**Problem.** Condensed sets form a cartesian closed category, where X̲ denotes the condensed set S ↦ C(S, X). For Hausdorff X and Y with X compactly generated, Hom(X̲, Y̲) is the condensed set of C(X, Y) with the compact-open topology.

**How the definition helps.** The adjunction Hom(T, Hom(A, B)) = Hom(T × A, B) holds for T = S̲ by definition. It then holds for every T, since every condensed set is a colimit of profinite ones and products commute with colimits. The comparison with C(X, Y) uses the classical exponential law for compact Hausdorff S and full faithfulness on compactly generated spaces.

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “Let A and B be Hausdorff topological spaces, where A is compactly generated. Then, Hom(A, B) = C(A,B) where C(A,B) is given the compact-open topology.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers, arXiv:2109.07816](https://arxiv.org/abs/2109.07816)

### In a (2,1)-topos, every principal bundle is locally trivial

**Remember:** Recover the base as the homotopy quotient of the total space.

*True by definition. Confidence: medium.* MSC 18F15 (Abstract manifolds and fiber bundles (category-theoretic aspects)), 18N60, 18F20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** For a group object G in a (2,1)-topos, a principal G-bundle over X is a G-object P whose homotopy quotient P//G is equivalent to X over X. So P → X is a cover and P ×ₓ P ≃ P × G, as for a quotient of sets (our own).

**Problem.** In a (2,1)-topos, every G-principal bundle is locally trivial. In topological spaces, a free action with a quotient, a Cartan principal bundle, need not be locally trivial.

**How the definition helps.** Pulling the bundle back along the cover P → X makes it trivial, since P ×ₓ P ≃ P × G (our own). Karube’s free topological quotient of an infinite product of circles by coordinatewise signs has no local sections, so Cartan bundles need not be locally trivial (our own).

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle), [principal infinity-bundle](https://ncatlab.org/nlab/show/principal+infinity-bundle). It says: “every G-principal bundle is locally trivial in a (2,1)-topos H; accordingly there is no mismatch between the various definitions anymore as in the context of topological spaces”

**Sources:**

- [Thomas Nikolaus, Urs Schreiber, Danny Stevenson, Principal ∞-bundles – General theory, J. Homotopy Relat. Struct. 10 (2015) 749–801, arXiv:1207.0248](https://arxiv.org/abs/1207.0248)
- [Takashi Karube, On the local cross-sections in locally compact groups, J. Math. Soc. Japan 10 (1958) 343–347](https://doi.org/10.2969/jmsj/01040343)

### Classifying maps pull 2-bundles back

**Remember:** Pull back the bundle by precomposing its classifying map.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N10. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Fix a smooth 2-group G with universal principal 2-bundle EG → BG. A map f : X → BG classifies P when the homotopy pullback of EG along f is equivalent to P over X.

**Problem.** If X → BG classifies a principal 2-bundle, the composite Y → X → BG classifies its pullback to Y.

**How the definition helps.** Pulling back along f and then along g is pulling back along the composite, because homotopy pullbacks paste. A description by transition maps would also need to pull back their compatibility isomorphisms (our own). The classification theorem identifies those local data with maps to BG.

**nLab:** [principal 2-bundle](https://ncatlab.org/nlab/show/principal+2-bundle). It says: “This says that principal 2-bundles are classified by Cech cohomology with coefficients in deloopings of (sheaves of) 2-groups.”

**Paper or page:** [Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1). It says: “is a principal 𝒢-2-bundle over 𝒵”

**Sources:**

- [Caviglia, Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1)

### Coherent actions descend gerbes

**Remember:** Compare successive actions with multiplication, coherently over triples.

*Rules out counterexamples.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A weak G-action on a bundle gerbe over M is an equivalence between its pullbacks along the action map and the projection G × M → M. It comes with unit data and a comparison between acting twice and acting by the product, satisfying the unit laws and the pentagon over triples.

**Problem.** On a principal group bundle, a gerbe with a weak action comes from a gerbe on the quotient, up to equivalence.

**How the definition helps.** Over a principal bundle, two points in one fibre differ by a unique group element, so the action gives gluing data and the comparisons make it coherent. The descent theorem builds a gerbe on the quotient from these data. In our own example, each translation of SU(2) preserves the gerbe of a generator of H³(SU(2); ℤ), but that class cannot come from the quotient point.

**Paper or page:** [Equivariant bundle gerbes](https://arxiv.org/abs/1506.07931). It says: “Let M → N be a principal G-bundle. If 𝒢 is a bundle gerbe on M acted on weakly by G then 𝒢 descends to a bundle gerbe on N”

**Sources:**

- [M. K. Murray, D. M. Roberts, D. Stevenson and R. F. Vozzo, Equivariant bundle gerbes](https://arxiv.org/abs/1506.07931)

### Condensed epimorphisms let Hochschild–Serre hold for topological group extensions

**Remember:** Every compact family in Q lifts to G after a profinite cover.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 20J06, 18G40. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For a topological group extension with quotient Q, condensed surjectivity of G → Q means that compact families in Q lift locally. Precisely, each continuous map S → Q from a profinite set lifts to G after composing with some profinite surjection S′ → S.

**Problem.** Consider a topological group extension with kernel H carrying the subspace topology and quotient Q carrying the quotient topology. If G̲ → Q̲ is epic, every topological G-module A has the condensed Hochschild–Serre spectral sequence ℍᵖ(Q, ℍᵐ(H, A)) ⇒ ℍᵖ⁺ᵐ(G, A).

**How the definition helps.** With condensed surjectivity, Q̲ is the condensed quotient of G̲ by H̲ (our own summary). So the classifying topos of H is the slice of that of G over Q̲, giving the Grothendieck spectral sequence of H- then Q-invariants. For continuous cochains the classical theorem needs more, such as a continuous local section of G → Q.

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “Suppose that G → Q is an epimorphism in 𝒞. Let A be a topological G-module. Then the condensed abelian group ℍ<sup>q</sup>(B<sub>H</sub>, i<sup>\*A</sup>) carries a Q-action for all q, and there is an Hochschild-Serre spectral sequence”

**Sources:**

- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)

### Condensed group cohomology is a derived functor matching continuous cochains

**Remember:** Derived invariants of condensed modules give long exact sequences and continuous cochains.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 20J06, 18G10. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For a condensed group G, condensed group cohomology ℍⁿ(G, A) is the n-th derived functor of invariants on condensed G-modules. For a fixed size bound κ, these modules form a Grothendieck abelian category, so the derived functors exist.

**Problem.** Every short exact sequence of condensed G-modules gives a long exact cohomology sequence. For topological G and A, if every Gⁿ is compactly generated and A has no higher sheaf cohomology on Gⁿ, continuous cochains compute the underlying cohomology groups.

**How the definition helps.** Right derived invariants give the long exact sequence (our own). Under the acyclicity hypothesis the bar spectral sequence reduces to its continuous cochain row after evaluation at a point (our own).

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “In particular, the underlying abelian group H<sup>q</sup>(B<sub>G</sub>, A) = ℍ<sup>q</sup>(B<sub>G</sub>, A)(∗) coincides with continuous group cohomology.”

**Sources:**

- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)

### Connected bands preserve loop gerbes

**Remember:** Connected automorphism groups let local trivializations close up around every loop.

*Rules out counterexamples.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 4: research.

**Definition.** The band of an abelian gerbe is the sheaf of automorphism groups of its local objects, identified canonically because they are abelian. The band is locally trivial with connected Lie fibres if it is locally a product of the base with a connected abelian Lie group.

**Problem.** For a finite-dimensional abelian gerbe on a finite-dimensional manifold, a locally trivial band of connected Lie groups ensures the loop stack is a gerbe. Its base is the free loop space, and its band consists of smooth sections of the original band along each loop.

**How the definition helps.** Connected fibres let local isomorphisms along a loop join up around the circle, and the theorem makes this smooth in families of loops. Our own counterexample is the gerbe of principal two-element group bundles over a point, whose band is not connected. Its loops include both double covers of the circle, which are not isomorphic.

**Paper or page:** [Smooth loop stacks of differentiable stacks and gerbes](https://arxiv.org/abs/1602.07973). It says: “Then 𝕃X is an abelian L𝒜-gerbe on LM.”

**Sources:**

- [D. M. Roberts and R. F. Vozzo, Smooth loop stacks of differentiable stacks and gerbes](https://arxiv.org/abs/1602.07973)

### Equivariance splits gerbe symmetries

**Remember:** A coherent lift of every group element gives a splitting.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 4: research.

**Definition.** The symmetry 2-group Sym<sub>G</sub>(𝒢) consists of the symmetries of the gerbe that cover the G-action on the base. A splitting is a morphism of smooth 2-groups G → Sym<sub>G</sub>(𝒢) whose composite with the projection to G is isomorphic to the identity as a monoidal morphism. It picks a symmetry over each group element, compatibly with products.

**Problem.** For a connected Lie group acting smoothly on the base, the gerbe admits a compatible action exactly when its symmetry 2-group splits over the group.

**How the definition helps.** A splitting picks a symmetry over each group element with compatible isomorphisms for products, which is exactly an equivariant structure. In our own comparison, one map of smooth 2-groups replaces separate multiplication diagrams. The theorem constructs the smooth extension in which this map takes values.

**Paper or page:** [Smooth 2-Group Extensions and Symmetries of Bundle Gerbes](https://arxiv.org/abs/2004.13395). It says: “The gerbe 𝒢 admits a G-equivariant structure if and only if there exists a morphism G̲ ⟶ Sym<sub>G</sub>(𝒢) of smooth 2-groups which splits the extension”

**Sources:**

- [S. Bunk, L. Müller and R. J. Szabo, Smooth 2-Group Extensions and Symmetries of Bundle Gerbes](https://arxiv.org/abs/2004.13395)

### Fréchet complexes are condensed-exact exactly when algebraically exact

**Remember:** Each profinite family lifts after a profinite cover.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 46A04, 18E10. arXiv math.CT, math.FA. Level 4: research.

**Definition.** A continuous linear map V → W is a condensed epimorphism if every continuous map S → W from a profinite set lifts locally. This means there exist a profinite surjection S′ → S and a continuous map S′ → V inducing the composite S′ → W.

**Problem.** A complex of Fréchet spaces is exact as condensed ℝ-modules if and only if it is exact as a complex of vector spaces.

**How the definition helps.** Kernels of Fréchet complexes are closed, so algebraic exactness gives continuous surjections of Fréchet spaces onto the kernels (our own). Every compact subset of the target of such a surjection is the image of a compact subset, so each profinite family lifts after a profinite cover (our own). Conversely, evaluation at a point gives the algebraic lifts (our own).

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “A complex of Frechet (resp. Banach) spaces is exact as a complex of condensed ℝ-modules if and only if it is exact on the underlying vector spaces.”

**Sources:**

- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)

### Functorial resolutions of abelian groups pass to condensed groups by sheafifying

**Remember:** A resolution natural in A works in every topos after sheafifying.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A Breen–Deligne resolution resolves every abelian group A by finite sums of free groups ℤ\[Aʳ\] on powers of A. It is natural in A, and the exponents do not depend on A. For a condensed abelian group M, ℤ\[Mʳ\] is the free condensed abelian group on the condensed set Mʳ.

**Problem.** Every condensed abelian group M has a resolution ⋯ → ℤ\[M³\] ⊕ ℤ\[M²\] → ℤ\[M²\] → ℤ\[M\] → M → 0. Its terms are finite sums of free condensed abelian groups ℤ\[Mʳ\] on powers of M.

**How the definition helps.** Applying the natural resolution to each group M(S) gives a resolution of presheaves, because it is natural. Sheafification is exact, so it gives a resolution of M. All the work is the existence of the natural resolution for abstract abelian groups, due to Breen and Deligne.

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816), [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “that is functorial in A and the rᵢ,ⱼ are independent of the choice of A.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Hypercovers by extremally disconnected sets give projective resolutions

**Remember:** Cover each matching object by an extremally disconnected space.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G10, 54G05. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An extremally disconnected hypercover of a compact Hausdorff space S is an augmented simplicial space S• → S whose terms are extremally disconnected compact Hausdorff spaces. In each degree n ≥ 0, Sₙ maps onto the space of compatible boundary data, which is S in degree 0, so every stage is a cover.

**Problem.** For an extremally disconnected hypercover S• → S, the alternating chain complex ℤ\[S•\] → ℤ\[S\] is a projective resolution. Hence Extⁱ(ℤ\[S\], M) is the degree-i cohomology of the cochain complex M(S•).

**How the definition helps.** The terms are projective by Gleason’s theorem, since each Sₙ is extremally disconnected. The complex is exact because a hypercover is a cover in every degree. The work is the existence of such hypercovers, which uses that every compact Hausdorff space is covered by a Stone–Čech compactification.

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “Let S be a compact Hausdorff space and let S• → S be a simplicial hypercover of S by extremally disconnected spaces. Then, ⋯ → ℤ\[S₁\] → ℤ\[S₀\] → ℤ\[S\] → 0 is a projective resolution of ℤ\[S\].”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Roy Dyckhoff, Projective resolutions of topological spaces, Journal of Pure and Applied Algebra 7 (1976)](https://doi.org/10.1016/0022-4049(76)90069-4)
- [Andrew M. Gleason, Projective topological spaces, Illinois Journal of Mathematics 2 (1958), 482–489](https://doi.org/10.1215/ijm/1255454110)

### Light condensed sets form a Grothendieck topos without universes

**Remember:** Take countable inverse limits of finite probes, then sheaves on those probes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18F10, 54B40. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A light profinite set is an inverse limit of a countable system of finite discrete spaces. A light condensed set is a sheaf of sets on these spaces for finite jointly surjective covers.

**Problem.** The category of light condensed sets is a Grothendieck topos, and it needs no Grothendieck universes (large sets fixed in advance to bound sizes). It still contains the sequential topological spaces (spaces whose topology is fixed by convergent sequences) as a full subcategory.

**How the definition helps.** There are only a set of countable systems of finite sets up to isomorphism, giving an essentially small site (our own). Sheaves on a small site form a Grothendieck topos. The convergent sequence with its limit is a light probe, so probe maps detect continuity out of sequential spaces (our own).

**nLab:** [light condensed set](https://ncatlab.org/nlab/show/light+condensed+set). It says: “unlike condensed sets, light condensed sets form a Grothendieck topos, rather than merely a pretopos”

**Sources:**

- [Dustin Clausen, Peter Scholze, Analytic Stacks, lecture course, 2023](https://indico.math.cnrs.fr/event/10345/)

### Locally constant maps characterize discrete condensed sets by finite approximation

**Remember:** Maps from a limit of finite sets factor through a finite stage.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18F10. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A condensed set is discrete if it is the sheaf of locally constant maps S → X for some set X, the constant sheaf. Locally constant maps out of a profinite limit S = lim Sᵢ factor through a finite stage Sᵢ (our own).

**Problem.** For every cofiltered presentation S = lim Sᵢ by finite discrete sets, consider the canonical map colim X(Sᵢ) → X(S). A condensed set X is discrete exactly when every such map is bijective.

**How the definition helps.** So the constant sheaf has value colim X(Sᵢ) on S, and the condition says that X agrees with it (our own). For finite F the sheaf condition gives X(F) = maps F → X(∗), so this matches X with the sheaf of locally constant maps into X(∗) (our own).

**Paper or page:** [A formal characterization of discrete condensed objects](https://arxiv.org/abs/2410.17847). It says: “A condensed set X is discrete if and only if for every profinite set S = lim Sᵢ, the canonical map X(S) → colim X(Sᵢ) is an isomorphism.”

**Sources:**

- [A formal characterization of discrete condensed objects, arXiv:2410.17847](https://arxiv.org/abs/2410.17847)

### On the test spaces ℝⁿ alone, BG is already a stack

**Remember:** Every ℝⁿ is contractible, so every G-bundle on it is trivial.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N60, 55R35. arXiv math.CT, math.DG. Level 4: research.

**Definition.** For a Lie group G, the presheaf BG sends each Cartesian space U = ℝⁿ to the one-object groupoid with automorphism group C∞(U, G), restricted by precomposition. This is the groupoid of trivial principal G-bundles on U and their automorphisms (our own).

**Problem.** On Cartesian spaces with good open covers, BG satisfies descent. On all manifolds descent can fail when G has a nontrivial principal bundle, and the stackification there is the stack of principal G-bundles.

**How the definition helps.** Descent glues local data to principal G-bundles on U (our own). Every principal G-bundle on ℝⁿ is trivial, with automorphisms the smooth G-valued functions, so the glued bundle is already in BG(U) (our own).

**nLab:** [smooth infinity-stack](https://ncatlab.org/nlab/show/smooth+infinity-stack). It says: “But restricted to the site CartSp the simplicial sheaf BG does satisfy descent: there is up to isomorphism only a single G-bundle on ℝⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Principal 2-bundles let quotient families glue

**Remember:** A quotient family remembers the torsor, not just the orbit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N10. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Let a smooth 2-group G act on a stack X. A quotient family over a manifold is a locally trivial principal G 2-bundle with a G-equivariant map to X. It keeps the bundle’s transition data, which an orbit-by-orbit description loses.

**Problem.** These quotient families form a 2-stack on smooth manifolds. Compatible local families, maps and isomorphisms between maps glue over open covers.

**How the definition helps.** Families come with transition isomorphisms and their compatibility on triple overlaps, so they can be glued (our own). Effective descent for principal 2-bundles glues the bundle, and descent in X glues its map (our own). Describing a quotient by pointwise orbits loses those gluing data.

**Paper or page:** [Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1). It says: “Then the quotient pre-2-stack \[𝒳/𝒢\] is a 2-stack.”

**Sources:**

- [Caviglia, Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1)

### Probing by compact spaces makes the pyknotic embedding preserve limits

**Remember:** Maps out of a compact space preserve limits, so the embedding does.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54D50, 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A pyknotic set is a sheaf of sets on compact Hausdorff spaces of a fixed small size, with finite jointly surjective covers (Barwick and Haine). A space X gives the pyknotic set S ↦ C(S, X).

**Problem.** The embedding of compactly generated spaces into pyknotic sets preserves all small limits, though not colimits. In topological spaces the reverse holds: compactly generated spaces are closed under colimits but not under limits.

**How the definition helps.** Limits of sheaves are computed sectionwise, and maps out of a fixed S turn limits into limits. A limit of compactly generated spaces is the compactly generated version of the topological limit, and maps from compact Hausdorff S do not see that change. Full faithfulness, the main work, uses that a compactly generated topology is fixed by its compact probes.

**nLab:** [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “Compactly generated topological spaces embed fully faithfully into pyknotic sets, in a manner that preserves limits.”

**Sources:**

- [Clark Barwick and Peter Haine, Pyknotic objects, I. Basic notions, arXiv:1904.09966 (2019)](https://arxiv.org/abs/1904.09966)

### Projective test spaces make infinite products of condensed abelian groups exact

**Remember:** On probes where every cover splits, products and surjections are pointwise.

*Rules out counterexamples.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18E10, 18G05. arXiv math.CT, math.AG. Level 4: research.

**Definition.** An extremally disconnected test space is a compact Hausdorff space S such that every continuous surjection onto S from a compact Hausdorff space splits. Condensed abelian groups are contravariant abelian-group-valued functors on these probes sending finite disjoint unions to products, with the usual size bound (our own). On each probe, products and surjections of condensed groups are those of abelian groups (our own).

**Problem.** In condensed abelian groups a product of surjections is a surjection, so infinite products are exact (Grothendieck's axiom AB4\*). Sheaves of abelian groups on a topological space usually fail this.

**How the definition helps.** Products and surjections are computed on each probe as for abelian groups, so AB4\* holds. On ℝ, our own example maps ℤ extended by zero from (−1/n, 1/n) onto the skyscraper ℤ at 0. The product of these surjections is not surjective, since the section (1, 1, …) lifts on no neighbourhood of 0.

**nLab:** [condensed abelian group](https://ncatlab.org/nlab/show/condensed+abelian+group). It says: “In this category, filtered colimits and infinite products are exact. The latter property is rather rare.”

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “(AB4\*) Arbitrary products are exact.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Repleteness makes towers of surjective condensed abelian groups have no lim¹

**Remember:** In a tower of covers, the limit covers every stage.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G10, 18B25. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A topos is replete if, for every tower ⋯ → F₂ → F₁ → F₀ of surjections of sheaves, the limit maps onto each Fₙ. Condensed sets are replete, because surjectivity can be tested on extremally disconnected sets, where every surjection from a compact Hausdorff space splits.

**Problem.** Let ⋯ → M₂ → M₁ → M₀ be a tower of surjections of condensed abelian groups. Then lim¹ Mₙ, the first derived functor of the limit, is zero, so the derived limit is the ordinary limit.

**How the definition helps.** On an extremally disconnected S each map Mₙ₊₁(S) → Mₙ(S) is surjective, since S is projective, so lim¹ of these groups vanishes by Mittag-Leffler. Limits, infinite products and cokernels of condensed abelian groups are computed on such S, so the condensed lim¹ vanishes too (our own summary). On a general site this fails, since surjections of sheaves need not be surjective on sections.

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “Let G be a condensed group. Then its classifying topos B<sub>G</sub> is replete.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)
- [Bhargav Bhatt and Peter Scholze, The pro-étale topology for schemes, Astérisque 369 (2015), 99–201](https://doi.org/10.24033/ast.960)

### Small presheaves give the free cocompletion of a large category

**Remember:** A small presheaf is built from a small diagram of representables.

*Makes the theorem clean to state or prove.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18A35, 18C35. arXiv math.CT. Level 4: research.

**Definition.** A small presheaf on a locally small category C is a functor Cᵒᵖ → Set isomorphic to a small colimit of representables.

**Problem.** For a locally small category C, possibly large, the small presheaves on C form a locally small category. It is the free cocompletion of C.

**How the definition helps.** Maps from a small colimit of representables into F form a small limit of values of F by Yoneda (our own). This proves local smallness, and small colimits of small presheaves remain small. Every functor from C into a cocomplete category extends by taking these colimits, uniquely up to natural isomorphism (our own).

**nLab:** [small presheaf](https://ncatlab.org/nlab/show/small+presheaf). It says: “Since small colimits of small colimits are small colimits, P C is cocomplete. In fact, it is easily seen to be the free cocompletion of C, even when C is not small.”

**Sources:**

- [Brian J. Day, Stephen Lack, Limits of small functors, Journal of Pure and Applied Algebra 210 (2007) 651–663, arXiv:math/0610439](https://arxiv.org/abs/math/0610439)

### Flags determine their Waldhausen quotients

**Remember:** A flag determines its quotient data up to unique compatible isomorphism.

*True by definition.* MSC 18F25 (Algebraic K-theory and L-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** An n-step flag in a Waldhausen category is a chain of n cofibrations starting at zero. Its quotient data are chosen pushouts Aⱼ ⊔₍Aᵢ₎ 0 for all 0 ≤ i ≤ j ≤ n, each unique up to unique isomorphism (our own).

**Problem.** The functor from the groupoid of n-step Waldhausen diagrams to the groupoid of n-step cofibration flags is an equivalence. In both groupoids use only isomorphisms as maps.

**How the definition helps.** Since pushouts are unique up to unique isomorphism, every flag has quotient data and every flag isomorphism extends uniquely to them (our own). This gives essential surjectivity and full faithfulness (our own).

**Paper or page:** [2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561). It says: “The functor μₙ : iSₙ𝒞 → Mₙ𝒞 which sends A to A₀,₁ ↣ A₀,₂ ↣ ⋯ ↣ A₀,ₙ is an equivalence.”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Tanner Nathan Carawan, 2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561)

### Mapping cones turn arrows into K-theory objects

**Remember:** A square is an equivalence exactly when its cone map is.

*Makes the theorem clean to state or prove.* MSC 18F25 (Algebraic K-theory and L-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** Fix an exact category with forms, weak equivalences and a strong symmetric cone in Schlichting’s sense. In its arrow category, a commuting square counts as a weak equivalence exactly when the map it induces between the two mapping cones is one.

**Problem.** The cone functor induces a homotopy equivalence from the K-theory of this arrow category to the K-theory of the original category.

**How the definition helps.** Squares are tested on their cones, so the cone functor preserves the weak equivalences by definition. Schlichting proves that the cone functor then induces an equivalence on K-theory. Its inverse sends each object X to the arrow 0 → X.

**Paper or page:** [Higher K-theory of forms II. From exact categories to chain complexes](https://arxiv.org/abs/2411.08746). It says: “induces an equivalence of K-theory spaces with inverse given by”

**Sources:**

- [Marco Schlichting, Higher K-theory of forms II. From exact categories to chain complexes](https://arxiv.org/abs/2411.08746)

### Retaining gluing maps distinguishes Waldhausen flags

**Remember:** Gluing flags needs the shared quotient’s isomorphism, not only its class.

*Rules out counterexamples.* MSC 18F25 (Algebraic K-theory and L-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** Waldhausen’s construction records a flag 0 ⊂ A ⊂ B ⊂ X (equalities allowed) with all its quotients and chosen isomorphisms between them. To glue two quotient diagrams, one must specify an isomorphism between their copies of the common object.

**Problem.** In an abelian category, the inclusions A ⊂ X and B/A ⊂ X/A determine the flag once their copies of X/A are identified. Their separate isomorphism classes do not, because different flags can give the same pair of classes.

**How the definition helps.** The identification makes B/A a subobject of X/A, and B is its inverse image in X (our own). Without it, take X = ℤ/4 ⊕ ℤ/2 and A generated by (2,0) (our own). An automorphism of X/A swaps its two coordinate lines, but their inverse images are cyclic and noncyclic (our own).

**Paper or page:** [2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561). It says: “where the squares are pushouts and the right square is a pullback.”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Tanner Nathan Carawan, 2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561)

### The motive of finite spectra corepresents K-theory

**Remember:** K-theory is the maps out of the motive of finite spectra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F25 (Algebraic K-theory and L-theory (category-theoretic aspects)), 18N60. arXiv math.KT, math.CT. Level 4: research.

**Definition.** An additive invariant of small stable ∞-categories is a functor that inverts Morita equivalences, preserves filtered colimits, and sends split exact sequences to cofiber sequences. The universal one, U, sends each category to its motive, and every additive invariant factors uniquely through U by a colimit-preserving functor.

**Problem.** Connective Waldhausen K-theory of A is the mapping spectrum from U(finite spectra) to U(A). For a spectrum-valued additive invariant E, the spectrum of natural transformations from K-theory to E is equivalent to E(finite spectra).

**How the definition helps.** K-theory is corepresented by the motive of finite spectra, so mapping out of U(finite spectra) computes it (our own). This is the corepresentability theorem of Blumberg, Gepner and Tabuada. Enriched Yoneda then evaluates natural transformations at the representing object (our own).

**nLab:** [K-theory of a stable (∞,1)-category](https://ncatlab.org/nlab/show/K-theory+of+a+stable+%28%E2%88%9E%2C1%29-category), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “universal with the property that it respects filtered colimits and exact sequences in a suitable way.”

**Sources:**

- [Andrew Blumberg, David Gepner, Gonçalo Tabuada, A universal characterization of higher algebraic K-theory, Geom. Topol. 17 (2013) 733–838, arXiv:1001.2282](https://arxiv.org/abs/1001.2282)

### Differential graded C∞-rings make the Poincaré lemma formal

**Remember:** The differential obeys the chain rule for every smooth function.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 18G35, 58A10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A differential graded C∞-ring is a commutative differential graded real algebra in nonnegative degrees whose degree-zero part is a C∞-ring and whose differential obeys the chain rule. That is, d(f(a)) = ∑ᵢ (∂ᵢf)(a) d(aᵢ) for every smooth f: ℝⁿ → ℝ and every tuple a of degree-zero elements.

**Problem.** The free differential graded C∞-ring on C∞(M) is the de Rham complex Ω(M). As a consequence, Ω(ℝⁿ) is quasi-isomorphic to ℝ in degree 0 (the Poincaré lemma).

**How the definition helps.** The chain rule makes d act on smooth functions exactly as the de Rham differential, so the free object on C∞(M) is Ω(M) (Dubuc–Kock). On ℝⁿ, radial contraction gives a cochain homotopy from the identity on forms to evaluation at the origin (our own). So the cohomology is ℝ in degree 0 only (our own).

**nLab:** [differential graded C<sup>∞</sup>-ring](https://ncatlab.org/nlab/show/differential+graded+C%5E%E2%88%9E-ring), [smooth differential forms form the free C<sup>∞</sup>-DGA on smooth functions](https://ncatlab.org/nlab/show/smooth+differential+forms+form+the+free+C%5E%E2%88%9E-DGA+on+smooth+functions). It says: “The stronger condition is essential for some theorems about coconnective differential graded C<sup>∞</sup>-rings, such as the one that states that smooth differential forms form the free C<sup>∞</sup>-DGA on smooth functions.”

**Sources:**

- [E. J. Dubuc, A. Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)
- [Domenico Fiorenza, Urs Schreiber, Jim Stasheff, Čech cocycles for differential characteristic classes: an ∞-Lie theoretic construction, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### For C∞-rings the coproduct is already the completed tensor product

**Remember:** A C∞-ring knows how to apply every smooth function, not only polynomials.

*Makes the theorem clean to state or prove.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 46J05, 18C10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A C∞-ring is a set A with an operation Aⁿ → A for every smooth function ℝⁿ → ℝ, such that composing smooth functions corresponds to composing operations. Equivalently, it is a product-preserving functor from Cartesian spaces ℝⁿ with smooth maps to sets.

**Problem.** For manifolds X and Y, the coproduct of C∞-rings C∞(X) ⊗∞ C∞(Y) is C∞(X × Y). More generally, C∞(−) sends transversal pullbacks of manifolds to pushouts of C∞-rings.

**How the definition helps.** The coproduct of C∞-rings must accept every smooth function of its generators, so it already holds all smooth functions on X × Y, not only finite sums of f ⊗ g. For Cartesian spaces this holds by definition, since C∞(ℝⁿ) is the free C∞-ring on n generators. The general case is a theorem of Moerdijk and Reyes and needs analysis.

**nLab:** [C<sup>∞</sup>-ring](https://ncatlab.org/nlab/show/C%5E%E2%88%9E-ring). It says: “The smooth tensor product is automatically the completed tensor product.”

**Sources:**

- [I. Moerdijk, G. E. Reyes, Models for Smooth Infinitesimal Analysis, Springer (1991)](https://doi.org/10.1007/978-1-4757-4143-8)

### Vietoris–Rips is the codegree 2 approximation of the Čech filtration

**Remember:** Vietoris–Rips is Čech seen only through pairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F50 (Goodwillie calculus and functor calculus), 55N31, 55U10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** At radius r, the Vietoris–Rips complex contains every finite set of points whose pairwise distances are at most 2r, so its edges determine it. The ambient Čech complex contains every finite set whose closed radius-r balls share a common point.

**Problem.** For finite point sets in Euclidean space with ambient closed balls, Vietoris–Rips is the codegree-two approximation of the Čech filtration.

**How the definition helps.** Vietoris–Rips depends only on pairs, and pair data is what a codegree-two approximation keeps from a filtration (our own). Two Euclidean balls of radius r meet exactly when their centres are at most 2r apart, so both complexes have the same edges (our own). The quoted poset cocalculus theorem identifies the completion of these edges with the codegree-two approximation.

**Paper or page:** [Poset functor cocalculus and applications to topological data analysis](https://arxiv.org/abs/2501.05996). It says: “We draw connections to filtrations of simplicial complexes, and show that the Vietoris-Rips filtration is precisely the codegree 2 approximation of the Čech filtration.”

**Sources:**

- [Bjørnar Gullikstad Hem, Poset functor cocalculus and applications to topological data analysis, arXiv:2501.05996 (2025)](https://arxiv.org/abs/2501.05996)

### Delta-generated spaces form a convenient category that is locally presentable

**Remember:** A Δ-generated space has a topology that its simplices see completely.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18C35. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A space X is Δ-generated if its topology is the final topology for all continuous maps from the topological simplices Δⁿ into X. In other words, a set is open when its preimage under every continuous map Δⁿ → X is open.

**Problem.** Δ-generated spaces form a coreflective, cartesian closed subcategory of Top that contains all CW complexes. This category is also locally presentable (Fajstrup and Rosický).

**How the definition helps.** Giving each space the final topology for its simplex probes constructs the coreflector (our own). CW complexes have this topology, and products of simplex probes are triangulable, giving cartesian closure by the productive-class theorem (our own). Local presentability uses the theorem of Fajstrup and Rosický (our own).

**nLab:** [Delta-generated topological space](https://ncatlab.org/nlab/show/Delta-generated+topological+space), [nice category of spaces](https://ncatlab.org/nlab/show/nice+category+of+spaces). It says: “The subcategory of Delta-generated topological spaces is also both cartesian closed and locally presentable.”

**Sources:**

- [Lisbeth Fajstrup, Jiří Rosický, A convenient category for directed homotopy, Theory Appl. Categ. 21 (2008) 7–20, arXiv:0708.3937](https://arxiv.org/abs/0708.3937)
- [Daniel Dugger, Notes on Delta-generated spaces, 2003](https://pages.uoregon.edu/ddugger/delta.html)

### Productive classes of test spaces give cartesian closed categories of spaces

**Remember:** Test spaces must be exponentiable, with products glued from test spaces.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18D15. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A class 𝒞 of spaces is productive if each member is exponentiable in Top and the product of any two members is glued from members, that is, it is a colimit in Top of members. A space is 𝒞-generated if it is a colimit in Top of members of 𝒞.

**Problem.** For a productive class 𝒞, the 𝒞-generated spaces form a coreflective, cartesian closed subcategory of Top. Its internal hom is the coreflection of the compact-open topology.

**How the definition helps.** These two properties are exactly what the classical proof for compactly generated spaces uses, so the same proof works for any productive class (our reading). This is the theorem of Escardó, Lawson and Simpson. It covers k-spaces and Δ-generated spaces at once.

**nLab:** [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “cartesian closed, with the internal hom given by the coreflection of the usual mapping space with its compact-open topology.”

**Sources:**

- [Martín Escardó, Jimmie Lawson, Alex Simpson, Comparing Cartesian closed categories of (core) compactly generated spaces, Topology Appl. 143 (2004) 105–145](https://doi.org/10.1016/j.topol.2004.02.011)
- [Rainer M. Vogt, Convenient categories of topological spaces for homotopy theory, Arch. Math. 22 (1971) 545–555](https://doi.org/10.1007/BF01222616)

### Quasi-topological spaces, as sheaves on compact Hausdorff spaces, form a convenient category

**Remember:** A quasi-topology is known only through its maps out of compact Hausdorff spaces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18F20, 54B30. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A quasi-topology on X chooses, for each compact Hausdorff space C, which functions C → X count as plots. Constants are plots, plots stay plots under continuous precomposition, and a function is a plot if its composites with some finite jointly surjective family of maps from compact Hausdorff spaces are plots. These rules make it a concrete sheaf on compact Hausdorff spaces.

**Problem.** Quasi-topological spaces form a complete, cocomplete and cartesian closed category.

**How the definition helps.** Quasi-topological spaces are concrete sheaves, and such categories of sheaves are complete, cocomplete and cartesian closed (our own). Limits take the plots detected by the projections, and colimits take the quasi-topology generated by the structure maps (our own). Function spaces take the plots whose evaluations on products with probes are plots (our own).

**nLab:** [quasi-topological space](https://ncatlab.org/nlab/show/quasi-topological+space). It says: “In particular, quasi-topological spaces form a complete and cocomplete cartesian closed category.”

**Sources:**

- [Edwin Spanier, Quasi-topologies, Duke Mathematical Journal 30 (1963) 1–14](https://doi.org/10.1215/S0012-7094-63-03001-1)

### Topological functors must lift large families to be faithful and self-dual

**Remember:** Every family of maps, even a large one, has an initial lift.

*Rules out counterexamples. Confidence: medium.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18A22. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A functor U is topological if every family of maps fᵢ: X → U(Sᵢ), even a large one, has an initial lift: maps gᵢ: T → Sᵢ over fᵢ with U(T) = X. Initial means that for every h: U(B) → X and compatible lifts of all fᵢh, exactly one lift of h composes with the gᵢ to those lifts.

**Problem.** Every topological functor is faithful. The notion is self-dual: U is topological exactly when every large family of maps U(Sᵢ) → X has a final lift.

**How the definition helps.** Large families include all maps out of a given object, and initial lifts of such families give faithfulness and, dually, final lifts (our own). Small families are not enough: a functor to the terminal category has their initial lifts whenever its source has small products (our own). Such a category can have parallel arrows or lack coproducts, so neither conclusion follows (our own).

**nLab:** [topological concrete category](https://ncatlab.org/nlab/show/topological+concrete+category). It says: “However, it need not satisfy the dual property (unless C also has all small coproducts) nor need it be faithful.”

**Sources:**

- [Jiří Adámek, Horst Herrlich, George E. Strecker, Abstract and Concrete Categories: The Joy of Cats, Wiley (1990); reprinted in Reprints in Theory and Applications of Categories 17 (2006)](http://www.tac.mta.ca/tac/reprints/articles/17/tr17abs.html)

### Frame-valued support makes radical localizing ideals the universal support

**Remember:** Each object’s support is the smallest radical ideal containing it.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18G80, 06D22. arXiv math.CT. Level 4: research.

**Definition.** A radical localizing tensor ideal is a thick subcategory closed under arbitrary coproducts, under tensoring with any object, and under tensor roots: it contains X whenever it contains X⊗ⁿ for some n ≥ 1. The ideal rad(X) is the smallest one that contains X.

**Problem.** Suppose K has a property called the tensor property, and its radical localizing tensor ideals form a set. Then they form a frame, and sending X to the radical ideal it generates is the initial support on K.

**How the definition helps.** Krause and Letz prove that these ideals form a frame and that rad is a support under the tensor property. Any frame map through which a support factors must send rad(X) to the support of X, and their initiality theorem gives exactly one such map (our own).

**Paper or page:** [The spectrum of a well-generated tensor triangulated category](https://arxiv.org/abs/2203.03249), [The spectrum of a well-generated tensor triangulated category](https://arxiv.org/abs/2203.03249). It says: “Then the radical localizing tensor ideals of 𝒦 form a frame and the map Obj(𝒦) ⟶ Rad(𝒦), X ↦ rad(X) is a support; it is initial among all supports on 𝒦.”

**Sources:**

- [Henning Krause and Janina C. Letz, The spectrum of a well-generated tensor-triangulated category, Bull. Lond. Math. Soc. 55 (2023) 680–705](https://doi.org/10.1112/blms.12749)

### Locale maps are the right continuous functions for constructive analysis

**Remember:** Define continuity on the open sets, and composition and 1/x come free.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 03F60. arXiv math.GN, math.LO. Level 4: research.

**Definition.** A locale map X → Y is a frame homomorphism in the other direction, from the opens of Y to the opens of X, preserving arbitrary joins and finite meets. So it is a continuous map given only by its inverse image on open sets, with no points needed.

**Problem.** Locale maps compose constructively and include the reciprocal on the open sublocale where x is apart from zero. Endomaps of the real locale correspond exactly to Bishop’s locally uniformly continuous real functions.

**How the definition helps.** Inverse images compose, so locale maps compose constructively, and 1/x acts on opens by inverse image on its domain (our own). Palmgren’s comparison theorem identifies the endomaps of the real locale with Bishop’s locally uniformly continuous functions.

**nLab:** [Bishop's constructive mathematics](https://ncatlab.org/nlab/show/Bishop%27s+constructive+mathematics). It says: “Palmgren shows that the continuous endomaps of the locale of real numbers ℝ coincide with Bishop's locally uniformly continuous functions, whereas for spaces other than ℝ itself locale maps are better-behaved than Bishops'”

**Sources:**

- [F. Waaldijk, On the Foundations of Constructive Mathematics – Especially in Relation to the Theory of Continuous Functions, Foundations of Science 10 (2005) 249–324](https://doi.org/10.1007/s10699-004-3065-z)

### Locales make Banach–Alaoglu, Hahn–Banach and Gelfand duality constructive

**Remember:** A locale can be compact before anyone has found its points.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 46S30, 46L05. arXiv math.FA, math.GN. Level 4: research.

**Definition.** A locale is a space described only by its lattice of open sets, a frame: a complete lattice in which binary meets distribute over arbitrary joins. Maps of locales go opposite to frame homomorphisms, which preserve arbitrary joins and finite meets.

**Problem.** The localic Hahn–Banach and Banach–Alaoglu theorems hold constructively. Constructive localic Gelfand duality relates unital commutative C\*-algebras to compact regular locales. These formulations apply internally in a topos with a natural numbers object.

**How the definition helps.** Locales state existence through locale maps and compactness through covers, so no choice of individual functionals or characters is needed (our own). Pelletier constructs the localic dual ball, and Coquand and Spitters prove constructive Gelfand duality (our own).

**nLab:** [Banach-Alaoglu theorem](https://ncatlab.org/nlab/show/Banach-Alaoglu+theorem), [Hahn-Banach theorem](https://ncatlab.org/nlab/show/Hahn-Banach+theorem), [constructive Gelfand duality theorem](https://ncatlab.org/nlab/show/constructive+Gelfand+duality+theorem). It says: “As usual, when formulating the theorem using locales instead of topological spaces the theorem holds constructively”

**Sources:**

- [Joan Wick Pelletier, Locales in functional analysis, Journal of Pure and Applied Algebra 70 (1991) 133–145](https://doi.org/10.1016/0022-4049(91)90013-R)
- [Thierry Coquand, Bas Spitters, Constructive Gelfand duality for C\*-algebras, Mathematical Proceedings of the Cambridge Philosophical Society 147 (2009) 323–337; arXiv:0808.1518](https://arxiv.org/abs/0808.1518)

### Point-free calculus defines a function as the integral of its derivative

**Remember:** A differentiable map is stored as its derivative plus its starting value.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 26A42, 03F60. arXiv math.GN, math.CA. Level 4: research.

**Definition.** In this point-free calculus on \[a,b\], a continuously differentiable map is represented by its derivative, a continuous locale map g on \[a,b\], and its initial value c. The map it represents is x ↦ c + ∫ₐˣ g(t) dt.

**Problem.** In point-free calculus, the fundamental theorem of calculus holds: indefinite integrals are antiderivatives, and antiderivatives are indefinite integrals.

**How the definition helps.** A differentiable map is stored as its derivative and initial value, so it is the integral of its derivative by construction. What remains is to build indefinite integrals directly as locale maps and to check the usual rules of differentiation. Vickers does this in geometric logic.

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “In the locale-theoretic approach, we essentially define an antiderivative to be an indefinite integral.”

**Sources:**

- [S. Vickers, The Fundamental Theorem of Calculus point-free, with applications to exponentials and logarithms, arXiv:2312.05228 (2023)](https://arxiv.org/abs/2312.05228)

### Prodiscrete localic groups take limits of progroups in locales

**Remember:** Take the limit in locales, and no surjective progroup collapses.

*Rules out counterexamples.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18C40. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A prodiscrete localic group is a localic group isomorphic to a limit, taken in locales, of a surjective progroup: a small cofiltered diagram of discrete groups with surjective transition maps.

**Problem.** The category of prodiscrete localic groups is equivalent to the category of surjective progroups (Moerdijk). Taken in groups or topological groups instead, the limit of a nontrivial surjective progroup can be trivial.

**How the definition helps.** In locales the limit projects onto each discrete stage, so it keeps all the data of the progroup (our own). Moerdijk’s comparison theorem then identifies maps between these limits with maps of surjective progroups (our own). In groups or spaces, the Higman–Stone example gives a nontrivial surjective progroup with trivial limit (our own).

**nLab:** [progroup](https://ncatlab.org/nlab/show/progroup), [Galois topos](https://ncatlab.org/nlab/show/Galois+topos). It says: “However, we do get an embedding on pro-groups with surjective transition maps if instead of Top we take the limit in the category Loc of locales.”

**Sources:**

- [I. Moerdijk, Prodiscrete groups and Galois toposes, Indagationes Mathematicae (Proceedings) 92(2) (1989) 219–234](https://doi.org/10.1016/s1385-7258(89)80030-7)

### Products of paracompact locales are paracompact

**Remember:** Every cover refines to one that is finite near each place.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D20. arXiv math.GN. Level 4: research.

**Definition.** A regular locale is paracompact if every open cover has a locally finite open refinement, meaning that some open cover has each of its members meeting only finitely many members of the refinement.

**Problem.** A product of paracompact locales is paracompact.

**How the definition helps.** Paracompact locales form a full reflective subcategory of regular locales, and such a subcategory is closed under the limits of the larger category (our own). Products of regular locales are formed in locales, so products of paracompact locales stay paracompact (our own). By contrast, the Sorgenfrey line is paracompact but its square as a space is not (our own).

**nLab:** [paracompact locale](https://ncatlab.org/nlab/show/paracompact+locale). It says: “This last property clearly distinguishes paracompact locales from paracompact spaces, since products of paracompact spaces need not be paracompact.”

**Sources:**

- [John R. Isbell, Atomless parts of spaces, Mathematica Scandinavica 31 (1972) 5–32](https://doi.org/10.7146/math.scand.a-11409)

### Radical ideals form a coherent frame, so the spectrum is spectral

**Remember:** A coherent frame of ideals gives a spectral space of primes.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18G80, 06D22. arXiv math.CT. Level 4: research.

**Definition.** A coherent frame is a frame generated under joins by its compact elements, where the compact elements include the top and are closed under binary meets. An element is compact if, whenever it lies below a join, it lies below the join of finitely many of the terms.

**Problem.** For an essentially small tensor triangulated category K, Spc(K) is spectral. The frame of radical thick tensor ideals of K is the frame of opens of its Hochster dual, whose opens are the Thomason subsets.

**How the definition helps.** By Stone duality, coherent frames are exactly the frames of opens of spectral spaces, so the coherent frame of radical ideals gives a spectral space (our own). Its points are the prime tensor ideals and its opens are the Thomason subsets (our own). Hochster duality then gives spectrality of Spc(K) (our own).

**nLab:** [coherent locale](https://ncatlab.org/nlab/show/coherent+locale). It says: “Coherent locales are spatial.”

**Paper or page:** [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257), [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257). It says: “Suppose (𝒜,⊗,𝟙) is a tensor extriangulated category. If Rad(𝒜) is a set, then it is a coherent frame.”

**Sources:**

- [Joachim Kock and Wolfgang Pitsch, Hochster duality in derived categories and point-free reconstruction of schemes, Trans. Amer. Math. Soc. 369 (2017) 223–261](https://doi.org/10.1090/tran/6773)
- [Raphael Bennett-Tennenhaus, Isambard Goodbody, Janina C. Letz and Amit Shah, Tensor extriangulated categories, arXiv:2502.18257 (2025)](https://arxiv.org/abs/2502.18257)

### With sublocales as parts, the Banach–Tarski pieces overlap

**Remember:** In a locale, two pieces with no common point can still overlap.

*Rules out counterexamples.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 28C15. arXiv math.GN. Level 4: research.

**Definition.** A sublocale of X is a part of X described by a nucleus on its frame of opens, a map that is inflationary, idempotent and preserves finite meets. Its fixed elements are the opens of the sublocale, and two sublocales can meet in a nonempty sublocale that has no points.

**Problem.** With sublocales as parts, the pieces of the Vitali and Banach–Tarski partitions are not disjoint. So additivity does not apply to them, and the paradox does not arise.

**How the definition helps.** Simpson shows that the intertangled pieces have a nonempty localic intersection, even though their sets of points are disjoint. So additivity on disjoint sublocales does not apply to them (our own).

**nLab:** [Banach-Tarski paradox](https://ncatlab.org/nlab/show/Banach-Tarski+paradox). It says: “According to our notion of "part", two such intertangled pieces are not disjoint from each other, so additivity does not apply.”

**Sources:**

- [Alex Simpson, Measure, randomness and sublocales, Annals of Pure and Applied Logic 163:11 (2012) 1642–1659](https://doi.org/10.1016/j.apal.2011.12.014)
- [Olivier Leroy, Théorie de la mesure dans les lieux réguliers. ou : Les intersections cachées dans le paradoxe de Banach-Tarski (manuscript, 1995); arXiv:1303.5631](https://arxiv.org/abs/1303.5631)

### A set of generators makes lim¹ vanish on towers of epimorphisms

**Remember:** Maps from generators detect every nonzero map.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18E10. arXiv math.CT. Level 4: research.

**Definition.** A set of generators in an abelian category is a set of objects that detects every nonzero map f: some map g from a generator has fg ≠ 0.

**Problem.** In an abelian category with small coproducts (AB3), exact small products (AB4\*) and a set of generators, every tower of epimorphisms has lim¹ = 0. Without generators this fails, even with exact coproducts and products (AB4 and AB4\*).

**How the definition helps.** Generators rule out the Neeman–Deligne counterexample, a category with AB4 and AB4\* but no generators that has a tower of epimorphisms with nonzero lim¹. With generators, Roos’s 2006 paper proves the vanishing.

**Wikipedia:** [Inverse limit](https://en.wikipedia.org/wiki/Inverse_limit). It says: “Roos has since shown (in "Derived functors of inverse limits revisited") that his result is correct if C has a set of generators (in addition to satisfying (AB3) and (AB4\*)).”

**Sources:**

- [Jan-Erik Roos, Derived functors of inverse limits revisited, Journal of the London Mathematical Society 73 (2006), 65–83](https://doi.org/10.1112/S0024610705022416)
- [Amnon Neeman, A counterexample to a 1961 “theorem” in homological algebra, Inventiones Mathematicae 148 (2002), 397–420](https://doi.org/10.1007/s002220100197)

### Roos's axiom rescues resolutions of unbounded complexes

**Remember:** Products may fail to be exact, but only up to degree k.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80, 18E10. arXiv math.RA, math.CT. Level 4: research.

**Definition.** An abelian category with enough injectives and all small products satisfies Roos’s axiom with bound k ≥ 0 if products are exact up to degree k: every small product functor has zero right derived functors above degree k.

**Problem.** Assume Roos’s product axiom with a finite bound. For an unbounded complex, taking the limit of the truncation construction’s compatible partial resolutions gives an injective resolution. Without the axiom, the usual constructions can fail on an explicit complex.

**How the definition helps.** Because derived products vanish above degree k, the bound controls the derived products in the inverse limit of the tower of partial resolutions (our own). The cited resolution theorem then gives the required quasi-isomorphism. Without the axiom, the methods fail on a quotient of modules over Nagata’s noetherian ring of infinite dimension (our own).

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “We show that various methods for explicitly building resolutions of unbounded complexes in fact fail when applied to a rather simple and explicit complex. We show that one way to rescue these methods is to assume Roos (Ab.4\*)-k axiom.”

**Sources:**

- [Dolors Herbera, Wolfgang Pitsch, Manuel Saorín, Simone Virili, A poisonous example to explicit resolutions of unbounded complexes, arXiv:2407.09741 (2024)](https://arxiv.org/abs/2407.09741v3)
- [Jan-Erik Roos, Derived functors of inverse limits revisited, J. London Math. Soc. 73 (2006), 65-83](https://doi.org/10.1112/s0024610705022416)

### Vanishing lim¹ on countable sums characterizes Mittag-Leffler towers

**Remember:** At each stage, the images from all sufficiently late stages agree.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18A30. arXiv math.CT, math.AC. Level 4: research.

**Definition.** A tower of abelian groups Aₙ ← Aₙ₊₁ is Mittag-Leffler when, for each n, the images of Aₘ → Aₙ stop shrinking for large m. Here lim¹ is the first right derived functor of the inverse limit.

**Problem.** A tower of abelian groups is Mittag-Leffler exactly when lim¹ vanishes both on the tower and on the termwise countable direct sum of its copies.

**How the definition helps.** The theorem replaces a condition on images with a homological test, and the hard direction is Emmanouil’s theorem. The test on sums is needed. Take every Aₙ = Zₚ with maps multiplication by p: the images keep shrinking, yet lim¹ = Ext¹(Z\[1/p\], Zₚ) = 0, since Zₚ is cotorsion (our own).

**Paper or page:** [More Algebra, Lemma 15.87.14.](https://stacks.math.columbia.edu/tag/0CQA). It says: “Let (Aₙ) be an inverse system of abelian groups. The following are equivalent (Aₙ) is Mittag-Leffler, R¹lim Aₙ = 0 and the same holds for ⊕<sub>i ∈ N</sub> (Aₙ).”

**Sources:**

- [Ioannis Emmanouil, Mittag-Leffler condition and the vanishing of lim¹, Topology 35 (1996), 267–271](https://doi.org/10.1016/0040-9383(94)00056-5)

### Presenting magnitude cohomology as Ext gives it a Yoneda algebra structure

**Remember:** Splice self-extensions to multiply classes in the Yoneda algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55N35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The Yoneda algebra of a graded module M over a graded algebra R is the bigraded self-Ext of M, with all internal shifts, in which classes multiply by splicing extensions end to end.

**Problem.** For a finite quasimetric space, magnitude cohomology is an Ext group over the distance algebra, and the magnitude cohomology algebra is a Yoneda algebra.

**How the definition helps.** Asao and Ivanov identify magnitude cohomology with self-Ext of the vertex module over the distance algebra, so it inherits the splicing product (our own). Under their comparison, this product is the magnitude cohomology product (our own).

**Paper or page:** [Magnitude homology is a derived functor](https://arxiv.org/abs/2402.14466). It says: “In addition, we show that the magnitude cohomology algebra of a finite quasimetric space can be described as a Yoneda algebra.”

**Sources:**

- [Yasuhiko Asao and Sergei O. Ivanov, Magnitude homology is a derived functor, arXiv:2402.14466 (2024)](https://arxiv.org/abs/2402.14466)

### A projective class gives relative homological algebra its own model structure

**Remember:** Choose which objects count as projective, and the homotopy theory follows.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18N40. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A projective class on an abelian category chooses objects 𝒫 that count as projective and maps ℰ that count as epimorphisms: the f with Hom(P, f) onto for every P in 𝒫. 𝒫 must be exactly the objects projective against ℰ, and every object must receive a map in ℰ from some object of 𝒫.

**Problem.** Fix a projective class in a complete and cocomplete abelian category. Call a chain map a weak equivalence or fibration when every Hom(P, −) with P in the class makes it a quasi-isomorphism or degreewise surjection; if cofibrant resolutions exist, these define a model structure on unbounded complexes.

**How the definition helps.** Testing by Hom(P, −) gives the fibrations and weak equivalences directly from the class (our own). The Christensen–Hovey existence theorem supplies the remaining model axioms when cofibrant resolutions exist (our own).

**nLab:** [model structure on chain complexes](https://ncatlab.org/nlab/show/model+structure+on+chain+complexes). It says: “Then this constitutes a model category structure precisely if cofibrant resolutions exist”

**Sources:**

- [J. D. Christensen and M. Hovey, Quillen model structures for relative homological algebra, Mathematical Proceedings of the Cambridge Philosophical Society 133 (2002)](https://doi.org/10.1017/S0305004102006126)

### A resolving left class makes a cotorsion pair kill all higher Ext

**Remember:** Kernels stay in the left class, so vanishing Ext climbs upward.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18G15. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A cotorsion pair (𝒳, 𝒴) is two classes, each exactly the Ext¹-orthogonal of the other, with 𝒳 generating by epimorphisms and 𝒴 cogenerating by monomorphisms. The left class is resolving when it contains the kernel of every epimorphism between its members, so dimension shifting carries Ext¹ = 0 to every higher Ext.

**Problem.** For such a pair, Extⁱ(X, Y) = 0 for all i ≥ 1, all X in 𝒳 and all Y in 𝒴. Moreover, the pair is left-complete exactly when it is right-complete.

**How the definition helps.** Since 𝒳 generates, each class in Extⁱ⁺¹(X, Y) dies on some epimorphism X′ → X with X′ in 𝒳. The kernel K is in 𝒳, so the class comes from Extⁱ(K, Y), and induction kills every higher Ext (our own). The completeness criterion of the hereditary cotorsion-pair lemma makes left and right completeness equivalent (our own).

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “(𝒳, 𝒴) is a cotorsion pair and 𝒳 is closed under kernels of epimorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Abelian model structures are exactly two compatible complete cotorsion pairs

**Remember:** Cofibrations are monos with cofibrant cokernel, fibrations epis with fibrant kernel.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18N40. arXiv math.CT, math.RA. Level 4: research.

**Definition.** On a complete and cocomplete abelian category, a model structure is abelian when cofibrations are exactly the monomorphisms with cofibrant cokernel and fibrations are exactly the epimorphisms with fibrant kernel. So the classes of maps are fixed by classes of objects: the cofibrant objects 𝒞, the fibrant objects ℱ and the trivial objects 𝒲.

**Problem.** Abelian model structures correspond one to one to triples (𝒞, 𝒲, ℱ) in which 𝒲 is thick, and (𝒞 ∩ 𝒲, ℱ) and (𝒞, ℱ ∩ 𝒲) are complete cotorsion pairs (Hovey, 2002). Thick means closed under summands, with two-out-of-three in short exact sequences.

**How the definition helps.** Maps are described by kernels and cokernels, so each model axiom becomes a statement about classes of objects. A monomorphism lifts against an epimorphism when Ext¹ of the cokernel into the kernel vanishes, so lifting becomes a cotorsion pair and factorization becomes completeness (our own summary). Two-out-of-three for weak equivalences becomes thickness of 𝒲.

**nLab:** [abelian model category](https://ncatlab.org/nlab/show/abelian+model+category). It says: “Then there exists a unique abelian model structure on 𝒜 such that 𝒞, ℱ, 𝒲 are the classes of cofibrant, fibrant, and trivial objects, respectively.”

**Sources:**

- [M. Hovey, Cotorsion pairs, model category structures, and representation theory, Mathematische Zeitschrift 241 (2002)](https://doi.org/10.1007/s00209-002-0431-9)

### Cogenerating a cotorsion pair by a set makes it complete

**Remember:** Testing against a set lets transfinite gluing build approximations.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16D40. arXiv math.RA, math.CT. Level 4: research.

**Definition.** The pair cogenerated by a set S has as right class 𝒴 all Y with Ext¹(s, Y) = 0 for every s in S, and as left class 𝒳 all X with Ext¹(X, Y) = 0 for every Y in 𝒴. It is complete when every M has sequences 0 → Y → X → M → 0 and 0 → M → Y′ → X′ → 0 with X, X′ in 𝒳 and Y, Y′ in 𝒴.

**Problem.** In a Grothendieck category with enough projectives, such as a module category, every cotorsion pair cogenerated by a set is complete. Eklof and Trlifaj proved this for modules.

**How the definition helps.** Since only a set must be tested, one can glue copies of its members transfinitely until Ext¹ against S vanishes (our own summary). Eklof’s lemma keeps the glued object in the left class. For flat modules, showing that the pair is cogenerated by a set is the key step towards flat covers (our own).

**Paper or page:** [Cotorsion pairs and model structures on Morita rings](https://arxiv.org/abs/2208.05684v3), [Powers of ghost ideals](https://arxiv.org/abs/2411.05250v1). It says: “Let 𝒜 be a Grothendieck category with enough projective objects. Then any cotorsion pair in 𝒜 cogenerated by a set is complete.”

**Sources:**

- [P. C. Eklof and J. Trlifaj, How to make Ext vanish, Bulletin of the London Mathematical Society 33 (2001)](https://doi.org/10.1112/blms/33.1.41)

### Defining injective classes by lifting makes relative resolutions unique up to homotopy

**Remember:** Maps into ℐ extend along ℐ-monomorphisms, so comparison works as usual.

*True by definition.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18G10. arXiv math.RA, math.CT. Level 4: research.

**Definition.** For a class ℐ of objects, the ℐ-monomorphisms are the maps along which every map into a member of ℐ extends, that is, the f with every Hom(f, I) onto. ℐ is an injective class when it is exactly the objects injective against all ℐ-monomorphisms, and every object has an ℐ-monomorphism into a member of ℐ.

**Problem.** For any injective class ℐ, any two relative ℐ-injective resolutions of an object are homotopy equivalent. The homotopy equivalence is compatible with the maps from the object and is unique up to homotopy.

**How the definition helps.** The classical comparison theorem uses only that maps into injectives extend along the maps of the resolution, and ℐ-monomorphisms are defined as exactly such maps (our own summary). So the classical proof works word for word. Relative derived functors such as Eilenberg and Moore’s relative Ext are then well defined.

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “then there is a homotopy equivalence f•:I•→J• such that f•∘u=v, and f• is unique up to homotopy.”

**Sources:**

- [S. Eilenberg and J. C. Moore, Foundations of relative homological algebra, Memoirs of the American Mathematical Society 55 (1965)](https://doi.org/10.1090/memo/0055)

### Hovey triples with the same trivial objects have the same homotopy category

**Remember:** Same trivial objects, same weak equivalences, same homotopy category.

*True by definition.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18N40, 18G80. arXiv math.CT, math.RT. Level 4: research.

**Definition.** A Hovey triple (𝒞, 𝒲, ℱ) has 𝒲 thick and (𝒞 ∩ 𝒲, ℱ) and (𝒞, 𝒲 ∩ ℱ) complete cotorsion pairs. Its weak equivalences are exactly the composites of an admissible monomorphism with cokernel in 𝒲 and an admissible epimorphism with kernel in 𝒲 (our own). The triple is hereditary when both its cotorsion pairs are hereditary.

**Problem.** In a weakly idempotent complete exact category, two Hovey triples with the same trivial class 𝒲 have the same homotopy category (Šťovíček). For hereditary triples, their stable categories (𝒞 ∩ ℱ)/(𝒞 ∩ ℱ ∩ 𝒲) are triangle equivalent.

**How the definition helps.** The weak equivalences depend on 𝒲 alone, so two triples with the same 𝒲 invert the same maps and have the same localization (our own). For hereditary triples, the stable category of cofibrant-fibrant objects presents that localization as a triangulated category (our own).

**Paper or page:** [Chains of model structures arising from modules of finite Gorenstein dimension](https://arxiv.org/abs/2403.05232v4), [Chains of model structures arising from modules of finite Gorenstein dimension](https://arxiv.org/abs/2403.05232v4). It says: “If W=W′, then the homotopy categories of the two exact model structures on 𝒜 are the same.”

**Sources:**

- [J. Šťovíček, Exact model categories, approximation theory, and cohomology of quasi-coherent sheaves, in Advances in Representation Theory of Algebras, EMS (2014)](https://doi.org/10.4171/125-1/10)

### Tensor-tested Gorenstein modules give a complete cotorsion pair over every ring

**Remember:** Kernels of projective complexes that stay exact when tensored with injectives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16E65, 16D40. arXiv math.RA, math.RT. Level 4: research.

**Definition.** A module is projectively coresolved Gorenstein flat (PGF) when it is a kernel in an exact complex of projective modules that stays exact after tensoring with every injective right module. Gorenstein projective modules use instead the test Hom(−, Q) for every projective Q.

**Problem.** For every ring, (PGF, PGF⊥) is a complete hereditary cotorsion pair, cogenerated by a set, whose common objects are the projectives (Šaroch and Šťovíček). Over left virtually Gorenstein rings, PGF modules are exactly the Gorenstein projective ones.

**How the definition helps.** The tensor test needs no hypothesis on the ring, so the class behaves well over every ring (our own). Šaroch and Šťovíček use singular compactness to prove set cogeneration, completeness, heredity and that the common objects are the projectives. Over left virtually Gorenstein rings, a comparison identifies this class with the Gorenstein projectives (our own).

**Paper or page:** [Chains of model structures arising from modules of finite Gorenstein dimension](https://arxiv.org/abs/2403.05232v4), [Homotopy equivalences and Grothendieck duality over rings with finite Gorenstein weak global dimension](https://arxiv.org/abs/2402.03010v1). It says: “(𝒫𝒢ℱ, 𝒫𝒢ℱ⊥) is a complete and hereditary cotorsion pair with kernel 𝒫, and cogenerated by a set.”

**Sources:**

- [J. Šaroch and J. Šťovíček, Singular compactness and definability for Σ-cotorsion and Gorenstein modules, Selecta Mathematica 26 (2020)](https://doi.org/10.1007/s00029-020-0543-2)

### The flat cotorsion pair gives quasi-coherent sheaves a derived tensor product

**Remember:** Flat terms, and null-homotopic maps to exact complexes with cotorsion cycles.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 14F08, 18N40. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A dg-flat complex of quasi-coherent sheaves has flat terms, and every chain map from it to an exact complex with cotorsion cycles is null-homotopic. A sheaf C is cotorsion when Ext¹(F, C) = 0 for every flat quasi-coherent sheaf F.

**Problem.** For a quasi-compact separated scheme X, complexes of quasi-coherent sheaves carry a monoidal model structure whose weak equivalences are the quasi-isomorphisms. So the derived tensor product exists on D(Qcoh X), although Qcoh X usually lacks enough projectives.

**How the definition helps.** Dg-flat complexes are the cofibrant objects of Gillespie’s flat model structure, whose weak equivalences are the quasi-isomorphisms (our own). The structure is monoidal, so the derived tensor product is computed by tensoring dg-flat replacements (our own).

**nLab:** [model structure on chain complexes](https://ncatlab.org/nlab/show/model+structure+on+chain+complexes). It says: “This gives a better understanding of the derived category of quasi-coherent sheaves D(Qcoh(X)), and in particular gives immediately the derived functor · ⊗ᴸ · (which is usually a problem due to sheaves not having enough projectives).”

**Sources:**

- [J. Gillespie, The flat model structure on complexes of sheaves, Transactions of the American Mathematical Society 358 (2006)](https://doi.org/10.1090/S0002-9947-06-04157-2)
- [J. Gillespie, Kaplansky classes and derived categories, Mathematische Zeitschrift 257 (2007)](https://doi.org/10.1007/s00209-007-0148-x)

### Using flat modules instead of projectives gives every module a cover

**Remember:** Every map from a flat factors through the cover, and minimally.

*Rules out counterexamples.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16D40. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A flat cover of M is a map F → M from a flat module through which every map from a flat module to M factors, such that every endomorphism of F over M is an automorphism. A projective cover is a surjection P → M from a projective module whose kernel K is superfluous: N + K = P forces N = P.

**Problem.** Every module over every ring has a flat cover (Bican, El Bashir and Enochs, 2001). Projective covers do not always exist: the ℤ-module ℤ/2ℤ has none.

**How the definition helps.** Flat modules are closed under direct limits, and Enochs showed that such a precovering class is covering; Bican and El Bashir showed that flat precovers exist (our own summary). The kernel of a projective cover lies in J(R)P, where J(R) is the Jacobson radical (our own). Since J(ℤ) = 0, a projective cover of ℤ/2ℤ would be an isomorphism from a projective, which is impossible (our own).

**Wikipedia:** [Projective cover](https://en.wikipedia.org/wiki/Projective_cover), [Flat cover](https://en.wikipedia.org/wiki/Flat_cover). It says: “the natural map from Z onto Z/2Z is not a projective cover of the Z-module Z/2Z (which in fact has no projective cover).”

**Sources:**

- [L. Bican, R. El Bashir and E. Enochs, All modules have flat covers, Bulletin of the London Mathematical Society 33 (2001)](https://doi.org/10.1017/S0024609301008104)

### In stable ∞-categories, simplicial objects are filtered objects by their skeleta

**Remember:** Skeleta filter the realization; the layers are the Moore complex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 18N60. arXiv math.CT, math.AT. Level 4: research.

**Definition.** The n-skeleton of a simplicial object X is the part built from its degrees at most n, the left Kan extension of its restriction to those degrees. The skeletal filtration is the sequence of realizations of these skeleta, joined by the maps their inclusions induce.

**Problem.** In a stable ∞-category, simplicial objects correspond to sequences indexed by the nonnegative integers, so a homological functor turns the skeletal filtration of an existing realization into a spectral sequence. For a t-structure, the homotopy-object spectral sequence has normalized Moore complexes as its first-page rows.

**How the definition helps.** The equivalence makes the skeletal filtration a filtered object, so the general spectral sequence of a filtered object applies at once. Its chain complex agrees with the Dold–Kan complex in the homotopy category. The equivalence itself is Lurie’s Higher Algebra, Theorem 1.2.4.1.

**nLab:** [infinity-Dold-Kan correspondence](https://ncatlab.org/nlab/show/infinity-Dold-Kan+correspondence). It says: “Under this equivalence, a simplicial object X• is sent to the sequence of geometric realizations ((∞,1)-colimits) of its simplicial skeleta”

**Sources:** none listed. No primary source with a working link was found.

### Adding contracting homotopies to killed objects makes dg quotients enhance Verdier quotients

**Remember:** To kill an object, give its identity a null homotopy.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18E35, 18G80. arXiv math.CT, math.KT. Level 4: research.

**Definition.** Drinfeld’s dg quotient A/B kills each object U of B by freely adding a contracting homotopy, a degree −1 map ε: U → U with dε = id. Here A is a pretriangulated dg category over a field and B a full pretriangulated dg subcategory.

**Problem.** The homotopy category of the dg quotient A/B is equivalent to the Verdier quotient H⁰(A)/H⁰(B). The dg quotient of this pair is unique up to isomorphism in the homotopy category of dg categories.

**How the definition helps.** The new map makes each killed identity a boundary, so every object of B becomes zero and the quotient functor factors through the Verdier quotient (our own). Drinfeld’s comparison theorem proves that this factorization is an equivalence (our own).

**nLab:** [model structure on dg-categories](https://ncatlab.org/nlab/show/model+structure+on+dg-categories). It says: “The DG quotient of Drinfeld is a model for the homotopy cofibre with respect to the Morita model structure.”

**Paper or page:** [On the graded singularity category of Abelian quotient singularities, I. Smooth categorical compactification](https://arxiv.org/abs/2507.19815). It says: “the DG quotient of the pair (A, B) (meaning A modulo B) exists and is unique in the sense of Hqe. Moreover, the DG quotient, denoted by A/B, is a DG enhancement of the triangulated category H⁰(A)/H⁰(B).”

**Sources:**

- [V. Drinfeld, DG quotients of DG categories, J. Algebra (2004)](https://doi.org/10.1016/j.jalgebra.2003.05.001)

### Algebraic compactly generated triangulated categories are derived categories of dg categories

**Remember:** Algebraic plus compact generators means modules over a dg category.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80, 55P42. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A triangulated category is algebraic if it is the stable category of a Frobenius exact category, one with enough projectives and injectives where the two classes coincide. It is compactly generated if it has small coproducts and a set of compact objects, those G with Hom(G, −) preserving coproducts, whose shifts detect every nonzero object.

**Problem.** Every algebraic compactly generated triangulated category is equivalent to the derived category of a small dg category (Keller). The algebraic condition is needed: the stable homotopy category is compactly generated but has no dg model.

**How the definition helps.** Being algebraic gives dg morphism complexes between the compact generators, so they form a small dg category A, and the derived tensor functor D(A) → T is an equivalence (our own). The condition removes the stable homotopy category (our own). There, twice the identity of the cone of 2 on the sphere is nonzero, while in an algebraic category n times the identity of a cone of n is zero (our own).

**nLab:** [algebraic triangulated category](https://ncatlab.org/nlab/show/algebraic+triangulated+category). It says: “A triangulated category is called algebraic (in the sense of B. Keller) if it is equivalent to the stable category of a Quillen exact category of a Frobenius category”

**Wikipedia:** [Differential graded category](https://en.wikipedia.org/wiki/Differential_graded_category). It says: “In general, there need not exist dg enhancements of triangulated categories or functors between them, for example stable homotopy category can be shown not to arise from a dg category in this way.”

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369). It says: “Let T be an algebraic compactly generated triangulated category. Then, there exists a small differential graded category and a k-linear equivalence of triangulated categories T → D(A).”

**Sources:**

- [B. Keller, Deriving DG categories, Ann. Sci. École Norm. Sup. 27 (1994) 63–102](https://doi.org/10.24033/asens.1689)
- [S. Schwede, Algebraic versus topological triangulated categories, in Triangulated Categories, LMS Lecture Note Ser. 375 (2010) 389–407](https://doi.org/10.1017/cbo9781139107075.010)

### Defining exactness with homotopies makes dg exact structures match ∞-categorical ones

**Remember:** Record the homotopy that kills the composite, not only the two maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18N60, 18E10. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A three-term homotopy complex in a dg category is a pair of closed degree-zero maps f: A → B and g: B → C with a chosen null homotopy of their composite, a degree −1 map h: A → C with dh = gf.

**Problem.** Let A be a dg category whose homotopy category is additive. Then exact structures on A correspond one to one with exact structures, in Barwick’s sense, on the dg nerve of A, the ∞-category built from A.

**How the definition helps.** The chosen h supplies the null homotopy of the composite required for an exact square in the dg nerve (our own). The quoted comparison theorem matches the admissible homotopy complexes and their exactness axioms with Barwick’s exact structures (our own).

**Paper or page:** [On exact dg categories](https://arxiv.org/abs/2306.08231v1). It says: “there is a bijection between exact structures on A and exact structures (in the sense of Barwick) on the dg nerve of A.”

**Sources:**

- [Xiaofa Chen, On exact dg categories, arXiv:2306.08231 (2023)](https://arxiv.org/abs/2306.08231v1)

### Dg functors between varieties are Fourier–Mukai, but exact functors need not be

**Remember:** Dg functors keep their homotopies, so they come from kernels.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A Fourier–Mukai transform with kernel K on X × Y pulls E back from X, tensors with K, and pushes forward to Y: E ↦ R(pᵧ)∗(L(pₓ)∗E ⊗ᴸ K). A dg quasi-functor is a morphism between the dg enhancements in the homotopy category of dg categories over the base field, so it keeps the higher homotopies that an exact functor forgets.

**Problem.** For smooth projective varieties over a field k, every k-linear dg quasi-functor between their categories of perfect complexes has a Fourier–Mukai kernel. Some exact functors between bounded derived categories of smooth projective varieties have no such kernel.

**How the definition helps.** Dg functors keep their higher homotopies, so Toën’s derived Morita theory describes them as bimodules on X × Y, and the bimodule is the kernel (our own). Rizzardo, Van den Bergh and Neeman found an exact functor with no kernel. It has no dg lift, since a lift would have a kernel by Toën’s theorem (our own).

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “For varieties X and Y, every functor from the dg-category of X to that of Y comes from a complex of sheaves on X×Y by the Fourier–Mukai transform.”

**Paper or page:** [Twisted Hodge diamonds give rise to non-Fourier-Mukai functors](https://arxiv.org/abs/2207.03363). It says: “Finally we use the above computations to apply the construction by A. Rizzardo, M. Van den Bergh and A. Neeman of non-Fourier-Mukai functors and verify that the constructed functors indeed cannot be Fourier-Mukai for odd dimensional quadrics.”

**Sources:**

- [B. Toën, The homotopy theory of dg-categories and derived Morita theory, Invent. Math. 167 (2007) 615–667](https://doi.org/10.1007/s00222-006-0025-y)
- [A. Rizzardo, M. Van den Bergh and A. Neeman, An example of a non-Fourier–Mukai functor between derived categories of coherent sheaves, Invent. Math. (2019)](https://doi.org/10.1007/s00222-019-00862-9)

### Exact sequences of dg categories give long exact sequences in Hochschild homology

**Remember:** Hochschild homology turns dg localizations into triangles.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 19D55, 16E40. arXiv math.KT, math.CT. Level 4: research.

**Definition.** A sequence A → B → C of small dg categories is exact when, on perfect derived categories, the first functor is fully faithful and the second identifies the idempotent-completed quotient with the last category.

**Problem.** For an exact sequence A → B → C of small dg categories, the mixed complexes form a triangle M(A) → M(B) → M(C) (Keller). So Hochschild and cyclic homology have long exact sequences along it.

**How the definition helps.** Exact sequences are localizations, and Keller’s localization theorem sends them to triangles of mixed complexes (our own). Hochschild and cyclic homology then read off long exact sequences from the triangle (our own).

**Paper or page:** [On a theorem of Keller over a base ring](https://arxiv.org/abs/2511.09264). It says: “Then the sequence M(A) → M(B) → M(C) is a triangle in 𝒟Mix.”

**Sources:**

- [B. Keller, Invariance and localization for cyclic homology of DG algebras, J. Pure Appl. Algebra (1998)](https://doi.org/10.1016/s0022-4049(96)00085-0)
- [B. Keller, On the cyclic homology of exact categories, J. Pure Appl. Algebra (1999)](https://doi.org/10.1016/s0022-4049(97)00152-7)

### Functors that preserve direct sums between derived dg categories are bimodules

**Remember:** Bimodules whose rows are representable up to quasi-isomorphism.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18N40. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A quasi-functor from A to B is a derived A–B bimodule M that is right quasi-representable: for each object a of A, the B-module M(a, −) is isomorphic in D(B) to a representable module.

**Problem.** Let A and B be small dg categories over a commutative ring k. In the homotopy category of dg categories, the sum-preserving quasi-functors between their derived dg categories form the derived dg category of the derived tensor product Aᵒᵖ ⊗ B (Toën).

**How the definition helps.** A sum-preserving functor is fixed by its values on representable modules, and up to quasi-isomorphism these values form a bimodule (our own). Strict dg functors would not do, because a quasi-equivalence need not have a dg inverse (our own). The work is Toën’s computation of mapping spaces of dg categories through right quasi-representable bimodules (our own).

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369), [A new model for dg-categories](https://arxiv.org/abs/2302.00430). It says: “where the right-hand side is the differential graded category of quasi-functors D<sub>dg</sub>(A) ⇝ D<sub>dg</sub>(B) whose induced k-linear functor D(A) → D(B) preserves small coproducts.”

**Sources:**

- [B. Toën, The homotopy theory of dg-categories and derived Morita theory, Invent. Math. 167 (2007) 615–667](https://doi.org/10.1007/s00222-006-0025-y)

### Morita equivalence lets a thick generating subcategory replace the whole dg category

**Remember:** Morita equivalence sees only what thick closure can build.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A dg functor F: C → D is a Morita equivalence if restricting dg modules along F gives an equivalence of derived categories. So it sees only what the representables build under cones, shifts and direct summands.

**Problem.** Let X be a pretriangulated dg category whose homotopy category H⁰(X) has split idempotents (X is Karoubian). If a full dg subcategory A has H⁰(A) generating H⁰(X) under cones, shifts and direct summands, then the inclusion A ⊆ X is a Morita equivalence (Keller).

**How the definition helps.** A Morita equivalence only needs the representables of X to lie in the thick closure of those of A, and this is the hypothesis (our own). The full inclusion identifies these thick closures in perfect modules, and Keller’s Morita criterion gives the equivalence (our own).

**nLab:** [model structure on dg-categories](https://ncatlab.org/nlab/show/model+structure+on+dg-categories). It says: “functors F: C → D whose induced restriction of scalars functor L f\* : D(D) → D(C) is an equivalence of categories.”

**Paper or page:** [The Derived Auslander-Iyama Correspondence](https://arxiv.org/abs/2208.14413). It says: “Let X be a Karoubian pre-triangulated DG category and A ⊆ X a full DG subcategory such that thick(H⁰(A)) = H⁰(X). Then, the inclusion functor A ↪︎ X is a Morita equivalence”

**Sources:**

- [B. Keller, On differential graded categories, Proceedings of the ICM, Madrid 2006, vol. II](https://doi.org/10.4171/022-2/8)

### Cartan–Eilenberg systems determine poset-filtered complexes up to filtered chain equivalence

**Remember:** Keep each interval’s homology, with its induced and connecting maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 37B30. arXiv math.AT, math.DS. Level 4: research.

**Definition.** For a finite poset P, a filtered differential vector space has a subcomplex D(I) for each down-set I, with D(∅) = 0, D(P) = D, unions going to sums and intersections to intersections. Its Cartan–Eilenberg system records the homology of every quotient D(J)/D(I) for I ⊆ J, with the induced maps and the connecting maps of all nested triples.

**Problem.** For a finite poset P, two down-set-filtered differential vector spaces over a field are filtered chain equivalent exactly when their Cartan–Eilenberg systems are isomorphic.

**How the definition helps.** Over a field, the system keeps all relative homology and connecting maps, which is exactly what a filtered chain equivalence must preserve. The work is to build a filtered chain equivalence from an isomorphism of systems. The authors apply this to two conjectures of Robbin and Salamon on connection matrices in Conley index theory.

**nLab:** [Cartan-Eilenberg spectral sequence](https://ncatlab.org/nlab/show/Cartan-Eilenberg+spectral+sequence). It says: “axioms for certain systems of bigraded modules H(p,q) ("Cartan-Eilenberg systems") are given which imply the existence of a spectral sequence converging to H(-∞,∞).”

**Paper or page:** [Graded differential groups, Cartan-Eilenberg systems and conjectures in Conley index theory](https://arxiv.org/abs/2406.19977). It says: “Let (D, d<sub>D</sub>) and (D′, d<sub>D′</sub>) be O(P)-filtered differential vector spaces over a field 𝕂. Then, E(D, d<sub>D</sub>) ≅ E(D′, d<sub>D′</sub>) if and only if (D, d<sub>D</sub>) and (D′, d<sub>D′</sub>) are O(P)-filtered chain equivalent”

**Sources:**

- [K. Spendlove and R. Vandervorst, Graded differential groups, Cartan-Eilenberg systems and conjectures in Conley index theory (2024)](https://arxiv.org/abs/2406.19977)

### Conditional convergence lets an isomorphism on one page lift to the abutment

**Remember:** Exhaust at one end; kill lim and lim¹ at the other.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A decreasing tower Dˢ with target D converges conditionally when it is exhaustive and complete: colimₛ→₋∞ Dˢ → D is an isomorphism, and both lim Dˢ and lim¹ Dˢ vanish as s → +∞, in each degree.

**Problem.** Take a map of exact couples whose spectral sequences converge conditionally and lie in the left half-plane, with homological indexing. If the map is an isomorphism on some page Eʳ, then it is an isomorphism on the filtered targets (Boardman).

**How the definition helps.** Conditional convergence depends only on the tower, so it holds for both couples without knowing any differentials. The mapping lemma gives isomorphisms on all later pages and on E∞ (our own summary). Boardman’s argument with lim and lim¹ then carries this to the filtered targets (our own summary).

**nLab:** [conditional convergence of spectral sequences](https://ncatlab.org/nlab/show/conditional+convergence+of+spectral+sequences). It says: “then it is said to converge conditionally to 𝒟<sup>0,•</sup> if, when regarding {𝒟<sup>s,•</sup>} as a filtering for 𝒟<sup>0,•</sup> it is exhaustive and complete”

**Paper or page:** [The singularity and cosingularity categories of C\*BG for groups with cyclic Sylow p-subgroups](https://arxiv.org/abs/2107.09389). It says: “where both spectral sequences are conditionally convergent and live in the (homologically indexed) left half plane, if the map Eʳ → E′ʳ is an isomorphism for some r then D → D′ is an isomorphism of filtered graded groups.”

**Sources:**

- [J. M. Boardman, Conditionally convergent spectral sequences, Contemporary Mathematics 239 (1999)](https://doi.org/10.1090/conm/239/03597)

### Filtered objects in stable ∞-categories give all filtration spectral sequences at once

**Remember:** One tower, one homological functor, one spectral sequence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 18N60, 55T05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A filtered object in a stable ∞-category is any sequence of maps … → Xₙ₋₁ → Xₙ → …, not necessarily inclusions, where every map has a cofibre that plays the role of a cone. A homological functor π to an abelian category turns cofibre sequences into long exact sequences.

**Problem.** Every homological functor π gives a functor from filtered objects to spectral sequences, with E₁ given by π of the cofibres of Xₙ₋₁ → Xₙ. The spectral sequence of a filtered complex and the Atiyah–Hirzebruch and Adams spectral sequences are all instances.

**How the definition helps.** Every map has a cofibre with a long exact sequence, so each tower gives an exact couple with nothing to check. One construction therefore covers filtered complexes, double complexes and towers of spaces. Convergence needs only conditions on the tower and on π.

**nLab:** [spectral sequence of a filtered stable homotopy type](https://ncatlab.org/nlab/show/spectral+sequence+of+a+filtered+stable+homotopy+type). It says: “Any homological functor 𝒞 → 𝒜 from a stable (∞,1)-category to an abelian category induces a functor Filt(𝒞) → SpSeq(𝒜) from the stable (∞,1)-category of filtered objects in 𝒞 to the abelian category of bigraded spectral sequences in 𝒜.”

**Sources:** none listed. No primary source with a working link was found.

### Filtered quasi-isomorphisms make spectral sequence pages from E₁ on choice-free

**Remember:** Invert maps that are quasi-isomorphisms on every graded piece.

*Makes the theorem clean to state or prove.* MSC 18G40 (Spectral sequences, hypercohomology), 18G80. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A filtered quasi-isomorphism is a map of filtered complexes that is a quasi-isomorphism on every graded piece grᵖ = Fᵖ/Fᵖ⁺¹, and the filtered derived category inverts these maps. A plain quasi-isomorphism is not enough, because it can change the graded pieces.

**Problem.** Let T be left exact on an abelian category with enough injectives, and K a bounded below complex with finite filtrations. A spectral sequence runs from the derived functors of T at each grᵖK to those at K, with pages from E₁ on free of choices.

**How the definition helps.** Any two filtered injective resolutions of K are filtered homotopy equivalent, so T applied to them gives graded complexes with isomorphic cohomology (our own). This fixes E₁ without choices, and the mapping lemma fixes all later pages (our own).

**nLab:** [filtered derived category](https://ncatlab.org/nlab/show/filtered+derived+category). It says: “One defines a morphism in Comp(Fil(A)) to be a quasi-isomorphism if it induces quasi-isomorphisms on each degree of the associated graded objects.”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/015W). It says: “The construction of this spectral sequence is functorial in the object K• of Comp⁺(Filᶠ(𝒜)) and the terms (Eᵣ, dᵣ) for r ≥ 1 do not depend on any choices.”

**Sources:** none listed. No primary source with a working link was found.

### Shifted cones detect isomorphisms on a chosen spectral sequence page

**Remember:** Shift the filtration by r, and the cone sees page r plus one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 18N40, 18G35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For an increasing filtration and an integer r ≥ 0, the r-cone of a filtered map f: A → B is its mapping cone with the filtration of A shifted by r: FₚCᵣ(f) = FₚB ⊕ (Fₚ₋ᵣA)\[1\]. The map f is an r-quasi-isomorphism when it is an isomorphism on page Eᵣ₊₁, and a complex is r-acyclic when its Eᵣ₊₁ is zero.

**Problem.** A map f of filtered chain complexes is an r-quasi-isomorphism exactly when its r-cone is r-acyclic (Cirici, Egas Santander, Livernet and Whitehouse).

**How the definition helps.** The shift places the term f of the cone differential at filtration drop r, so page r + 1 of the cone sees exactly the map that f induces on page r + 1 (our own). The cone comparison theorem of Cirici, Egas Santander, Livernet and Whitehouse makes this precise.

**Paper or page:** [A distributive lattice of model structures relating to spectral sequences](https://arxiv.org/abs/2402.09893). It says: “Let f: A → B be a morphism of filtered chain complexes. Then f ∈ ℰᵣ if and only if Cᵣ(f) is r-acyclic.”

**Sources:**

- [J. Cirici, D. Egas Santander, M. Livernet and S. Whitehouse, Model category structures and spectral sequences, Proceedings of the Royal Society of Edinburgh A (2020)](https://doi.org/10.1017/prm.2019.45)
- [J. A. Brotherston, A distributive lattice of model structures relating to spectral sequences (2024)](https://arxiv.org/abs/2402.09893)

### Strict differentials make a filtered complex's spectral sequence degenerate at E₁

**Remember:** Whatever lands in step p of the image comes from step p.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 14C30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A map f: A → B of filtered objects always satisfies f(FᵖA) ⊆ f(A) ∩ FᵖB. It is strict when equality holds for every p, so anything in the image that lies in FᵖB already comes from FᵖA.

**Problem.** Let K be a complex with a finite filtration. Its spectral sequence degenerates at E₁, meaning dᵣ = 0 for all r ≥ 1, exactly when every differential of K is strict (Deligne).

**How the definition helps.** For strict differentials, taking the graded commutes with kernels, images and cohomology, so E₁ = H(gr K) equals gr H(K) = E∞. Deligne also proved the converse (our own). Without strictness the graded loses information: the identity of a field k, from filtration degree −1 to degree 0, is bijective but zero on graded pieces (our own).

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/0128). It says: “Let A → B → C be a complex of filtered objects of 𝒜. Assume α : A → B and β : B → C are strict morphisms of filtered objects. Then gr(Ker(β)/Im(α)) = Ker(gr(β))/Im(gr(α))).”

**Sources:**

- [P. Deligne, Théorie de Hodge II, Publications Mathématiques de l'IHÉS 40 (1971)](https://doi.org/10.1007/BF02684692)

### Butterflies describe weak morphisms of 2-groups with ordinary groups

**Remember:** One diagonal extends, one composes trivially, and conjugation realizes both actions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 18N10, 20E22. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A butterfly between crossed modules ∂ₓ: X₁ → X₀ and ∂ᵧ: Y₁ → Y₀ is a group P with maps i: Y₁ → P, j: X₁ → P, p: P → X₀ and q: P → Y₀, where Y₁ → P → X₀ is short exact, qj is trivial, pj = ∂ₓ and qi = ∂ᵧ. Conjugation in P must realize the given actions: conjugating j and i by u matches the actions of p(u) and q(u).

**Problem.** Weak 2-functors between strict 2-groups correspond to butterflies between their crossed modules (Noohi, Aldrovandi–Noohi). Strict maps of crossed modules give only the strict 2-functors.

**How the definition helps.** A butterfly is an anafunctor internal to groups, a functor defined through a cover, so it captures exactly the weak 2-functors while staying a diagram of ordinary groups. Under the correspondence between crossed modules and categories internal to groups, butterflies are the saturated anafunctors for surjective homomorphisms as covers.

**nLab:** [butterfly](https://ncatlab.org/nlab/show/butterfly). It says: “Under the correspondence between crossed modules and categories internal to Grp, butterflies are precisely the saturated anafunctors internal to Grp, using the Grothendieck pretopology of surjective homomorphisms.”

**Sources:**

- [Behrang Noohi, On weak maps between 2-groups, arXiv:math/0506313 (2005)](https://arxiv.org/abs/math/0506313)
- [Ettore Aldrovandi, Behrang Noohi, Butterflies I: morphisms of 2-group stacks, Advances in Mathematics 221 (2009) 687–773, arXiv:0808.3627](https://arxiv.org/abs/0808.3627)

### Filtered spaces give a van Kampen theorem in all dimensions

**Remember:** Filter the space, and gluing pieces becomes a colimit of algebra.

*Makes the theorem clean to state or prove.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 55U35. arXiv math.AT. Level 4: research.

**Definition.** A filtered space is a space X with an increasing sequence X₀ ⊆ X₁ ⊆ ⋯ of subspaces, and each open U inherits the filtration Uₙ = U ∩ Xₙ. The fundamental crossed complex uses the filtration, taking paths in degree one and relative homotopy groups of (Xₙ, Xₙ₋₁) in higher degrees (our own).

**Problem.** Suppose a filtered space has an open cover whose nonempty finite intersections satisfy the Brown–Higgins connectivity conditions for their induced filtrations. Its fundamental crossed complex is the coequalizer of the diagram from pairwise overlaps to cover members.

**How the definition helps.** The invariant is built from the filtered pieces, so under the connectivity conditions its value on the space is determined by its values on the cover (our own). Brown and Higgins prove the coequalizer statement by subdivision and composition in cubical ω-groupoids with connections (our own).

**nLab:** [Nonabelian Algebraic Topology](https://ncatlab.org/nlab/show/Nonabelian+Algebraic+Topology), [higher homotopy van Kampen theorem](https://ncatlab.org/nlab/show/higher+homotopy+van+Kampen+theorem). It says: “the Seifert-van Kampen theorem is most naturally understood as being not about homotopy groups, but about the cubical fundamental omega-groupoid of a filtered space and may be generalized to a higher homotopy van Kampen theorem this way.”

**Sources:**

- [R. Brown, P. J. Higgins, Colimit theorems for relative homotopy groups, Journal of Pure and Applied Algebra 22 (1981) 11–41](https://doi.org/10.1016/0022-4049(81)90080-3)
- [R. Brown, P. J. Higgins, R. Sivera, Nonabelian Algebraic Topology, EMS Tracts in Mathematics (2011)](https://doi.org/10.4171/083)

### Relative homotopy squares compose strictly and give a 2-dimensional van Kampen theorem

**Remember:** Fix where the edges and corners may go, and squares compose strictly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 55Q05, 18N10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For C ⊆ A ⊆ X, a relative square is a map I² → X sending edges into A and vertices into C. ρ(X, A, C) consists of their classes under homotopies through relative squares that fix the four vertices.

**Problem.** The homotopy squares ρ(X, A, C) form a strict double groupoid with connections. It satisfies a van Kampen theorem in dimension 2, which computes nonabelian second relative homotopy groups.

**How the definition helps.** Homotopies need only fix vertices, so the edges of adjacent squares can be matched, representatives paste, and classes compose independently of choices (our own). Brown and Higgins prove the double groupoid laws and the van Kampen theorem under connectivity hypotheses on the cover (our own).

**nLab:** [higher dimensional algebra](https://ncatlab.org/nlab/show/higher+dimensional+algebra). It says: “Brown and Higgins realised in 1974 that this could be achieved fairly easily in a relative situation”

**Sources:**

- [R. Brown, P. J. Higgins, On the connection between the second relative homotopy groups of some related spaces, Proceedings of the London Mathematical Society (3) 36 (1978) 193–212](https://doi.org/10.1112/plms/s3-36.2.193)

### Chains of monomorphisms extend Buchweitz's theorem from complexes to N-complexes

**Remember:** Replace single objects with chains of inclusions when N exceeds two.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G65 (Stable module categories), 18G35, 18G80. arXiv math.RT, math.CT. Level 4: research.

**Definition.** An N-complex is a sequence of maps in which any N consecutive maps compose to zero, so N = 2 gives ordinary complexes. The N-stable category has as objects chains of N − 2 monomorphisms, with maps of chains taken modulo those that factor through projective-injective chains.

**Problem.** Over a Frobenius exact abelian category, where projectives and injectives coincide and there are enough of them, three categories are equivalent: the N-stable category, the homotopy category of acyclic N-complexes of projectives, and the N-singularity category. The last is the bounded derived category of N-complexes modulo bounded complexes of projectives.

**How the definition helps.** Buchweitz’s theorem needs a stable category, and chains of monomorphisms supply it for N-complexes. At N = 2 a chain is a single object, so the definition gives the ordinary stable category (our own). Building the functors and proving them equivalences is the paper’s work.

**Paper or page:** [The $N$-Stable Category](https://arxiv.org/abs/2109.07728v2). It says: “We identify this "N-stable category" via the monomorphism category and prove Buchweitz's theorem for N-complexes over a Frobenius exact abelian category.”

**Sources:**

- [Jeremy R. B. Brightbill, Vanessa Miemietz, The $N$-Stable Category, arXiv:2109.07728 (2021)](https://arxiv.org/abs/2109.07728v2)

### Cofibrant modules give every group ring a triangulated stable module category

**Remember:** Tensor with finite-image functions using the diagonal action, then test projectivity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G65 (Stable module categories), 20J05. arXiv math.RT, math.GR. Level 4: research.

**Definition.** Let B(G, R) be the finite-image functions G → R, with G acting by left translation (our own). An RG-module M is cofibrant if M ⊗<sub>R</sub> B(G, R), with the diagonal action, is projective over RG; these modules form a Frobenius category whose projective-injectives are the projective RG-modules.

**Problem.** For every group G and commutative ring R, the stable category of cofibrant RG-modules is triangulated. It is triangle equivalent to the homotopy category of fibrant RG-modules.

**How the definition helps.** Cofibrant modules form a Frobenius category, and Happel’s theorem makes the stable category of any Frobenius category triangulated (our own). The equivalence with the homotopy category of fibrant modules uses the cofibrant–fibrant comparison theorem (our own).

**Paper or page:** [Gorenstein cohomological dimension and stable categories for groups](https://arxiv.org/abs/2206.09589), [Gorenstein cohomological dimension and stable categories for groups](https://arxiv.org/abs/2206.09589). It says: “Then the subcategory of cofibrant RG-modules 𝒞of(RG) is a Frobenius category, whose projective and injective objects coincide and are precisely the projective RG-modules.”

**Sources:**

- [Gorenstein cohomological dimension and stable categories for groups, arXiv:2206.09589](https://arxiv.org/abs/2206.09589)

### Defining Tate–Hochschild cohomology by singularity categories makes it detect smoothness

**Remember:** Smooth means the diagonal is perfect, so it vanishes stably.

*True by definition. Confidence: medium.* MSC 18G65 (Stable module categories), 16E40. arXiv math.RT, math.RA. Level 4: research.

**Definition.** For a finite-dimensional algebra A over a field, Tate–Hochschild cohomology is HHⁿsg(A) = Hom(A, A\[n\]) in the singularity category of A-bimodules, the bounded derived category with perfect complexes made zero. A is homologically smooth if A is a perfect complex of bimodules, that is, exactly when A becomes zero there.

**Problem.** For a finite-dimensional algebra A over a field, the Tate–Hochschild cohomology HH∗sg(A) is zero if and only if A is homologically smooth.

**How the definition helps.** A is smooth exactly when it becomes zero in the singularity category, because that quotient kills precisely the perfect complexes (our own). A zero object has no nonzero self-maps, and conversely HH⁰sg(A) = 0 kills the identity of A, so A is zero (our own).

**Paper or page:** [DG singular equivalence and singular locus](https://arxiv.org/abs/2403.13637). It says: “There is a canonical isomorphism of graded algebras between the Tate-Hochschild cohomologies HH∗<sub>sg</sub>(A) of A and the Hochschild cohomologies of S<sub>dg</sub>(A).”

**Sources:**

- [Bernhard Keller, Singular Hochschild cohomology via the singularity category, Comptes Rendus Mathématique 356 (2018) 1106–1111](https://doi.org/10.1016/j.crma.2018.10.003)
- [Ragnar-Olaf Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, AMS (2021)](https://doi.org/10.1090/surv/262)

### Endotrivial modules are the invertible objects of the stable module category

**Remember:** Endotrivial: M tensor its dual is k plus projectives.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 20C20. arXiv math.RT, math.GR. Level 4: research.

**Definition.** Let G be finite and k a field whose characteristic divides \|G\|. A finite-dimensional kG-module M is endotrivial if it is invertible up to projectives: Endₖ(M) ≅ M\*⊗M, with conjugation action, is k ⊕ P for some projective kG-module P.

**Problem.** For a finite group G, the endotrivial modules modulo stable isomorphism form an abelian group T(G) under tensor product, which contains every syzygy Ωⁿ(k). For an elementary abelian p-group of rank at least 2, over a field of characteristic p, T(G) ≅ ℤ, generated by Ω(k) (Dade).

**How the definition helps.** M\*⊗M ≅ k ⊕ P says that M\* is a tensor inverse of M up to projectives, so stable classes form a group, abelian by symmetry of ⊗ (our own). Ω(k)⊗Ω⁻¹(k) is k plus a projective, so every syzygy Ωⁿ(k) belongs (our own). Dade’s theorem gives T(G) ≅ ℤ, generated by Ω(k), for elementary abelian groups of rank at least 2 (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308). It says: “π₀ pic StMod(kC<sub>p</sub>ⁿ) ≅ 0 if p = 2 and n = 1; C₂ if p is odd and n = 1; ℤ if n ≥ 2.”

**Sources:**

- [Everett C. Dade, Endo-permutation modules over p-groups II, Annals of Mathematics 108 (1978) 317–346](https://doi.org/10.2307/1971169)

### Finite Gorenstein dimension is exactly what lets Gorenstein projectives fill singularity categories

**Remember:** Finite Gorenstein dimension makes every object a shifted Gorenstein projective.

*Rules out counterexamples.* MSC 18G65 (Stable module categories), 18G80, 16E65. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A Gorenstein projective object is a syzygy in a two-sided exact complex of projectives that stays exact after applying Hom(−,P) for every projective P. An object has finite Gorenstein projective dimension if it has a finite resolution by Gorenstein projectives, so some syzygy of it is Gorenstein projective (our own).

**Problem.** Let 𝒜 be an abelian category with enough projectives. The stable category of Gorenstein projectives embeds in the singularity category, and it fills it exactly when every object has finite Gorenstein projective dimension.

**How the definition helps.** In the singularity category each object is a shift of its syzygy, so finite dimension makes every object a shifted Gorenstein projective (our own). The quoted theorem proves full faithfulness and the converse. For finite modules over k\[x,y\]/(x,y)², all Gorenstein projectives are free, yet the residue field is nonzero in the singularity category (our own).

**Paper or page:** [Lambda-pure global dimension of Grothendieck categories and some applications](https://arxiv.org/abs/2411.05356). It says: “Then the canonical functor F: 𝒢(𝒜) → 𝐃ᵇ<sub>sg</sub>(𝒜) is a fully faithful triangle functor. Moreover, F is a triangulated equivalent if and only if the Gorenstein projective dimension of each object in 𝒜 is finite”

**Sources:**

- [Ragnar-Olaf Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, AMS (2021)](https://doi.org/10.1090/surv/262)

### Inverting the syzygy on the stable category gives the singularity category

**Remember:** Force the syzygy to be invertible and you get the singularity category.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G65 (Stable module categories), 16E35. arXiv math.RT. Level 4: research.

**Definition.** Stabilization makes the syzygy functor Ω invertible on the stable module category of an Artin algebra Λ. Its objects are pairs (X,n) of a finitely generated Λ-module and an integer, read as Ω⁻ⁿX. Maps from (X,n) to (Y,m) form the colimit over large p of stable maps Ωᵖ⁻ⁿX → Ωᵖ⁻ᵐY, with Ω as transition map.

**Problem.** For an Artin algebra Λ, the stabilization of its stable module category with respect to Ω is triangle equivalent to the singularity category Dsg(Λ). No Gorenstein or self-injective hypothesis is needed.

**How the definition helps.** In the singularity category projectives are zero, so Ω is already invertible there, and the universal property of stabilization gives a comparison functor (our own). Keller and Vossieck, and Buchweitz, proved that this functor is fully faithful and dense.

**Paper or page:** [The singularity category as a stable module category](https://arxiv.org/abs/2509.01056). It says: “(Buchweitz, Keller-Vossieck) The functor above F induces a triangle equivalence 𝒮(Λ-m̲o̲d̲, Ω<sub>nc</sub> ⊗\_Λ −) ⟶ 𝐃<sub>sg</sub>(Λ)”

**Sources:**

- [The singularity category as a stable module category, arXiv:2509.01056](https://arxiv.org/abs/2509.01056)

### A∞-functors compute the derived internal Hom of dg categories

**Remember:** An A∞-functor is a dg functor from a built-in free resolution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G70 (A<sub>∞</sub>-categories, relations with homological mirror symmetry), 18G35. arXiv math.CT. Level 4: research.

**Definition.** An A∞-functor from A to B sends objects to objects and strings of n composable morphisms to morphisms by maps fₙ of degree 1−n, for n ≥ 1. Together these maps form a coalgebra map between bar constructions that commutes with their differentials. It is strictly unital if f₁ preserves identities and every fₙ with n &gt; 1 vanishes on strings containing an identity.

**Problem.** Work over a field and in the homotopy category of dg categories. There, the internal Hom from A to B is isomorphic to the dg category of strictly unital A∞-functors (Faonte; Canonaco, Ornaghi and Stellari). So no free resolution of A is needed first.

**How the definition helps.** An A∞-functor out of A is the same as a dg functor out of the bar–cobar resolution of A, a free dg category equivalent to A (our own). So A∞-functors build in the free resolution that Toën’s construction must take first (our own). The work is the comparison with Toën’s internal Hom (our own).

**nLab:** [model structure on dg-categories](https://ncatlab.org/nlab/show/model+structure+on+dg-categories). It says: “The derived internal Hom in the homotopy category of DG-categories is equivalent to the dg-category of A∞-functors.”

**Sources:**

- [G. Faonte, A∞-functors and homotopy theory of dg-categories, J. Noncommut. Geom. 11 (2017)](https://doi.org/10.4171/jncg/11-3-6)
- [A. Canonaco, M. Ornaghi and P. Stellari, Localizations of the category of A∞ categories and internal Homs, Doc. Math. (2019)](https://doi.org/10.4171/dm/731)

### Twisted complexes over an A∞-category model the triangulated category its objects generate

**Remember:** Shifted objects glued by triangular twists are iterated cones.

*Makes the theorem clean to state or prove.* MSC 18G70 (A<sub>∞</sub>-categories, relations with homological mirror symmetry), 18G35. arXiv math.CT. Level 4: research.

**Definition.** A twisted complex over an uncurved A∞-category A is a finite sum of shifted objects of A with a strictly triangular degree-one map δ that solves the Maurer–Cartan equation ∑ₙ≥₁ mₙ(δ,…,δ) = 0. Triangularity glues each summand onto the earlier ones by a cone (our own).

**Problem.** The A∞ Yoneda embedding of A into A∞-modules over A factors through Tw A. It induces an equivalence from H⁰(Tw A) to the triangulated subcategory of the derived category of A generated by its objects (Lefèvre-Hasegawa).

**How the definition helps.** Triangularity makes each twisted complex an iterated cone of shifted objects, so its image lies in the triangulated closure of the objects (our own). Lefèvre-Hasegawa’s Yoneda theorem for twisted complexes identifies H⁰(Tw A) with that whole closure.

**Paper or page:** [Perverse coherent extensions on Calabi-Yau threefolds and representations of cohomological Hall algebras](https://arxiv.org/abs/2309.16582). It says: “inducing an equivalence of triangulated categories H⁰(Y₂): H⁰(Tw A) → Triang(Aᵢ) where Triang(Aᵢ) denotes the triangulated subcategory of D(A) generated by the objects Aᵢ.”

**Sources:**

- [M. Kontsevich, Homological algebra of mirror symmetry, Proceedings of the ICM, Zürich 1994](https://doi.org/10.1007/978-3-0348-9078-6_11)

### A set of compact objects generates a t-structure

**Remember:** Orthogonality defines the halves, and compactness builds the truncations.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT, math.AG. Level 4: research.

**Definition.** Let S₀ be a set of compact objects in a triangulated category D with direct sums. Define D≥1 as the objects that receive no nonzero maps from any shift S\[n\] with S in S₀ and n ≥ 0. Define D≤0 as the objects with no nonzero maps into D≥1.

**Problem.** The pair of D≤0 and D≥0 = D≥1\[1\] is a t-structure (Alonso, Jeremías and Souto). Here D≤0 is the smallest class that contains S₀ and is closed under positive shifts, extensions and sums.

**How the definition helps.** Defining D≥1 by orthogonality makes the vanishing axiom and the shift conditions automatic, so only the truncation triangle needs work (our own). That triangle comes from a homotopy colimit that attaches sums of shifted objects of S₀ step by step. Compactness of S₀ makes this colimit land in D≤0 with cone in D≥1 (our own summary).

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “Many t-structures arise by means of the following fact: in a triangulated category with arbitrary direct sums, and a set S₀ of compact objects in D, the subcategories”

**Sources:**

- [Leovigildo Alonso Tarrío, Ana Jeremías López and María José Souto Salorio, Construction of t-structures and equivalences of derived categories, Trans. Amer. Math. Soc. 355 (2003) 2523–2543](https://doi.org/10.1090/S0002-9947-03-03261-6)

### Allowing massless semistable objects makes stability pass to a quotient category

**Remember:** Let some objects weigh nothing, then divide them out.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A lax stability condition is a stability condition in which nonzero semistable objects may have mass zero: Z(E) = m·exp(iπφ) with m ≥ 0 for every nonzero E in the slice P(φ). It keeps a locally finite slicing, an additive charge Z on a chosen lattice, and, for some C &gt; 0, the bound \|Z(E)\| ≥ C‖\[E\]‖ for stable E of positive mass (our own).

**Problem.** In a lax stability condition, the massless objects form a thick subcategory, one closed under shifts, cones of maps and direct summands. The Verdier quotient by this subcategory, which makes the massless objects zero, carries an induced ordinary stability condition.

**How the definition helps.** Massless objects look like zero to the charge, so dividing them out leaves a charge with positive mass on every remaining semistable object (our own). The paper proves that the massless objects form a thick subcategory and that the slicing descends to the Verdier quotient. This places lax conditions at the edge of the stability space, as ordinary conditions on quotients (our own).

**Paper or page:** [Partial compactification of stability manifolds by massless semistable objects](https://arxiv.org/abs/2208.03173v1). It says: “The subcategory of massless objects is thick and there is an induced classical stability on the quotient category.”

**Sources:**

- [Nathan Broomhead, David Pauksztello, David Ploog, Jon Woolf, Partial compactification of stability manifolds by massless semistable objects, arXiv:2208.03173 (2022)](https://arxiv.org/abs/2208.03173v1)

### BIK stratification is defined so that support classifies localizing ideals

**Remember:** Build every ideal from points, and make each point indivisible.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 13D09. arXiv math.CT, math.RT. Level 4: research.

**Definition.** A compactly generated tensor triangulated category K with an action of a graded noetherian ring R is stratified if it is built from its pieces ΓₚK at homogeneous primes p, and each nonzero piece is indivisible. That is, each X lies in the localizing tensor ideal generated by all ΓₚX, and each nonzero ΓₚK is minimal among nonzero localizing tensor ideals.

**Problem.** If K is stratified by R, support is a bijection from the localizing tensor ideals of K onto the subsets of the support of K.

**How the definition helps.** An ideal is generated by the pieces ΓₚX of its objects, and minimality makes each nonzero piece generate all of ΓₚK, so the ideal is fixed by the primes it meets (our own). Conversely, the pieces at any subset of the support generate an ideal supported exactly there, since distinct pieces are orthogonal (our own).

**Paper or page:** [On localizing subcategories of Lie superalgebra representations](https://arxiv.org/abs/2503.13639). It says: “If 𝒦 is stratified in the sense of BIK, then the maps σ and τ provide mutually inverse bijections between the set of ⊗-ideal localizing subcategories of 𝒦 and subsets of Proj R”

**Sources:**

- [Dave Benson, Srikanth B. Iyengar and Henning Krause, Stratifying triangulated categories, J. Topol. 4 (2011) 641–666](https://doi.org/10.1112/jtopol/jtr017)

### Bounded t-structures make the Grothendieck group equal to that of the heart

**Remember:** Finitely many cohomology pieces, so every class is an alternating sum.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 18F30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A t-structure on D is bounded if every object X lies in D≥a ∩ D≤b for some integers a ≤ b, so X has only finitely many nonzero cohomology objects.

**Problem.** For a bounded t-structure with heart A, the inclusion of A gives an isomorphism from K₀(A) to K₀(D). Its inverse sends \[X\] to the alternating sum of the classes \[Hⁱ(X)\].

**How the definition helps.** A bounded object is a finite tower of shifted heart objects, so \[X\] = ∑ᵢ(−1)ⁱ\[Hⁱ(X)\], and long exact sequences make this additive on triangles (our own). Without boundedness this fails: in the bounded-above derived category of finite-dimensional vector spaces, T = ⨁ₙ≥₀ k\[2n\] satisfies T ≅ k ⊕ T\[2\], which forces \[k\] = 0 (our own).

**Wikipedia:** [Bridgeland stability condition](https://en.wikipedia.org/wiki/Bridgeland_stability_condition). It says: “There is a natural isomorphism of Grothendieck groups K₀(A) ≅ K₀(D) that turns the stability function into a central charge”

**Sources:** none listed. No primary source with a working link was found.

### Bridgeland stability conditions are bounded hearts with a stability function

**Remember:** Charge every nonzero heart object, then filter it by decreasing semistable phases.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A stability function on an abelian category A is a homomorphism Z from K₀(A) to ℂ sending every nonzero object into the upper half-plane with the negative real axis added. It has the Harder–Narasimhan property if every nonzero object has a finite filtration whose factors are semistable of strictly decreasing phase.

**Problem.** (Bridgeland) A pre-stability condition on D is the same as a bounded heart A with a stability function that has the Harder–Narasimhan property.

**How the definition helps.** The objects of phase in (0, 1\] form a bounded heart on which Z is a stability function (our own), and Harder–Narasimhan filtrations in the heart rebuild every other slice by shifting (Bridgeland, Proposition 5.3). So building a stability condition reduces to one abelian category, where one checks a sign condition and the filtrations (our own).

**Wikipedia:** [Bridgeland stability condition](https://en.wikipedia.org/wiki/Bridgeland_stability_condition). It says: “Conversely if (Z,P) is a stability condition, then the subcategory P(0,1\] is the heart of a bounded t-structure on which Z gives a stability function with Harder—Narasimhan property.”

**Paper or page:** [A short proof of the deformation property of Bridgeland stability conditions](https://arxiv.org/abs/1606.02169v3). It says: “To give a pre-stability condition on D is equivalent to giving a heart A of a bounded t-structure, and a stability function Z on A with the HN property.”

**Sources:**

- [Tom Bridgeland, Stability conditions on triangulated categories, Ann. of Math. 166 (2007) 317–345](https://doi.org/10.4007/annals.2007.166.317)

### Closure under cones is what lets the spectrum see Spec R

**Remember:** Cones of multiplication by f let perfect complexes see V(f).

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 13D09, 14A30. arXiv math.CT, math.AC. Level 4: research.

**Definition.** A perfect complex over a commutative ring R is a complex isomorphic, in the derived category, to a bounded complex of finitely generated projective modules. Perfect complexes are closed under cones, so they include cone(f: R → R) for every f ∈ R, whose support is exactly V(f) (our own).

**Problem.** For a commutative ring R, Spc of the perfect complexes over R is homeomorphic to Spec R.

**How the definition helps.** The cones cone(f) supply the supports V(f), so the spectrum can separate all primes of R (our own). Thomason’s classification identifies the prime thick tensor ideals with the primes of R (our own). Projective modules alone, without cones, see only the connected components of Spec R, as the quote shows for hereditary noetherian rings.

**Paper or page:** [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257). It says: “If R is a commutative hereditary noetherian ring, then the Balmer spectrum BSpc(proj(R)) is the finite set of connected components of the Zariski spectrum ZSpec(R) equipped with the discrete topology”

**Sources:**

- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)
- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)
- [Raphael Bennett-Tennenhaus, Isambard Goodbody, Janina C. Letz and Amit Shah, Tensor extriangulated categories, arXiv:2502.18257 (2025)](https://arxiv.org/abs/2502.18257)

### Compact generation makes sum-to-product cohomological functors representable

**Remember:** Compact generators commute with sums and detect zero objects.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 55U35. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A triangulated category D with direct sums is compactly generated if it has a set of compact objects, ones whose maps out commute with direct sums, that detects zero. That is, X = 0 whenever every map from every shift of a generator to X is zero.

**Problem.** (Neeman) In a compactly generated triangulated category D, each cohomological functor H from D to abelian groups that sends sums to products is representable. Here cohomological means contravariant and sending triangles to long exact sequences.

**How the definition helps.** Compactness lets one build a representing object as a countable homotopy colimit, each step checked by maps out of the generators (our own summary of Neeman). Detection of zero then shows the resulting map is an isomorphism of functors (our own). This mirrors Brown’s theorem for spectra, with generators in place of spheres.

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “Let D be a compactly generated triangulated category, H: Dᵒᵖ → Ab a cohomological functor which takes coproducts to products. Then H is representable.”

**Paper or page:** [Derived, Lemma 13.38.1](https://stacks.math.columbia.edu/tag/0A8F), [Derived, Proposition 13.38.2](https://stacks.math.columbia.edu/tag/0A8G). It says: “Let H : D → Ab be a contravariant cohomological functor which transforms direct sums into products. Then H is representable.”

**Sources:**

- [Amnon Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/S0894-0347-96-00174-9)

### Compact generators detect zero exactly when they build all compact objects

**Remember:** Detecting zero with one compact object means building all compacts from it.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 13D09. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A compact object E generates D if maps out of its shifts detect zero: X = 0 whenever every map from every E\[n\] to X is zero. E classically generates the compact objects if each compact object is built from E by finitely many shifts, cones and direct summands.

**Problem.** If D has direct sums, a compact object E generates D exactly when D is compactly generated and E classically generates the compact objects. So every perfect complex over a ring R is built from R by finitely many shifts, cones and direct summands.

**How the definition helps.** Neeman shows that every object is a homotopy colimit of objects built from sums of shifts of E. A compact object maps into such a colimit through a finite stage, so it is a summand of an object built in finitely many steps (our own).

**Paper or page:** [Derived, Proposition 13.37.6](https://stacks.math.columbia.edu/tag/09SR). It says: “Let E be a compact object of D. The following are equivalent (1) E is a classical generator for D<sub>c</sub> and D is compactly generated, and (2) E is a generator for D.”

**Sources:**

- [Amnon Neeman, The connection between the K-theory localization theorem of Thomason, Trobaugh and Yao and the smashing subcategories of Bousfield and Ravenel, Ann. Sci. École Norm. Sup. 25 (1992) 547–566](https://doi.org/10.24033/asens.1659)

### Defining Bousfield localization by an adjoint makes local objects detectable

**Remember:** A map into a local object cannot see an object killed by the quotient.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 4: research.

**Definition.** A Bousfield localization is a Verdier quotient Q of a triangulated category that admits a fully faithful right adjoint R. An object is local if it is isomorphic to R(Y) for some object Y of the quotient.

**Problem.** An object X is isomorphic to R of some object exactly when every map into X from an object killed by Q is zero.

**How the definition helps.** Adjunction gives Hom(A, R(Y)) = Hom(Q(A), Y) = 0 whenever Q(A) = 0 (our own). Conversely, if X is orthogonal to the kernel, complete the unit X → RQ(X) to a triangle with cone C, which lies in the kernel because Q inverts the unit. Orthogonality of C to X\[1\] and to RQ(X) gives Hom(C,C) = 0, so C = 0 and the unit is invertible (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “which is then (automatically) triangulated and fully faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Defining perverse sheaves as a heart makes them an abelian category

**Remember:** Perverse sheaves are abelian because every heart is abelian.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 32S60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Fix a perversity and its perverse t-structure on a constructible derived category. A perverse sheaf is a constructible complex in the heart of that t-structure, that is, in both its halves D≤0 and D≥0.

**Problem.** The heart of any t-structure is abelian, and its short exact sequences are the distinguished triangles with all three terms in the heart. So perverse sheaves form an abelian category, although they are complexes and not sheaves.

**How the definition helps.** Defined as a heart, perverse sheaves are abelian by the theorem of Beilinson, Bernstein and Deligne that every heart is abelian. Kernels and cokernels in the heart come from truncating the cone of a map (our own). The work moves to proving that the perversity conditions define a t-structure, by gluing over strata.

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “The category of perverse sheaves is, by definition, the core of the so-called perverse t-structure on the derived category of the category of sheaves on a complex analytic space X”

**Paper or page:** [The left heart and exact hull of an additive regular category](https://arxiv.org/abs/2105.11483v2). It says: “Moreover, a sequence 0 → X →f Y →g Z → 0 is a short exact sequence in T♥ if and only if there is a triangle X →f Y →g Z → Σ(X) in T.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the comparison map through cones makes it a spectral map

**Remember:** r lies in ρ(P) when r stops being invertible modulo P.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** For an essentially small tensor triangulated category K, let R be the graded endomorphism ring of its unit. For each prime P, ρ(P) is the ideal generated by the homogeneous r in R whose cone lies outside P, that is, the r that stay non-invertible modulo P.

**Problem.** ρ is a spectral continuous map from Spc K to Specʰ(R), natural in K. For perfect complexes over a commutative ring A it is a homeomorphism onto Spec A.

**How the definition helps.** By the formula, the inverse image of V(r) is supp(cone(r)), which is closed with quasi-compact complement, so ρ is spectral (our own). Tensor triangulated functors preserve these cones, which gives naturality (our own). Balmer’s comparison theorem shows that ρ(P) is prime and identifies the map for perfect complexes (our own).

**Paper or page:** [Periods in equivariant and motivic contexts](https://arxiv.org/abs/2511.14325), [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446). It says: “the formula ρ(𝒫) = {r ∈ ℛ\_ℳ \| cone(r) ∉ 𝒫} defines a spectral continuous map”

**Sources:**

- [Paul Balmer, Spectra, spectra, spectra – Tensor triangular spectra versus Zariski spectra of endomorphism rings, Algebr. Geom. Topol. 10 (2010) 1521–1563](https://doi.org/10.2140/agt.2010.10.1521)

### Defining the spectrum by prime thick ideals makes it classify radical ideals

**Remember:** A prime contains a factor of every product it contains.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18M05. arXiv math.CT, math.AG. Level 4: research.

**Definition.** Fix an essentially small tensor triangulated category K. A proper thick tensor ideal P is prime if a⊗b ∈ P implies a ∈ P or b ∈ P. The Balmer spectrum consists of these primes, with closed basis supp(a) = {P ∣ a ∉ P} as a ranges over K.

**Problem.** (Balmer) Support gives an order-preserving bijection from radical thick tensor ideals of K to Thomason subsets of Spc K. For perfect complexes on a quasi-compact quasi-separated scheme X, the spectrum is X itself.

**How the definition helps.** Supports supp(a) behave like supports of ring elements, so prime ideal arguments give the bijection (our own). Thomason subsets are unions of closed sets with quasi-compact complements. The work moves to computing Spc K, for example by Thomason’s theorem for schemes (our own).

**nLab:** [spectrum of a tensor triangulated category](https://ncatlab.org/nlab/show/spectrum+of+a+tensor+triangulated+category). It says: “Accordingly, one may consider the prime spectrum of a tensor triangulated category in direct analogy: the prime ideals are taken to be the thick subcategories which behave as prime ideals under the tensor product, in the obvious way.”

**Paper or page:** [The Spectrum of Stable Infinity Categories with Actions](https://arxiv.org/abs/2505.02724v3). It says: “Let 𝔖 be the set of radical tensor ideals of T, and 𝔗 the set of Thomason subsets of Spec⊗T. Then, the map Supp⊗ : 𝔖 → 𝔗 is an order-preserving bijection”

**Sources:**

- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Defining the twisted inverse image as a right adjoint makes it exist

**Remember:** Define the duality functor as an adjoint, then let Brown build it.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For a proper map f between quasi-compact quasi-separated schemes, a twisted inverse image f! is a right adjoint to Rf∗ on derived categories with quasi-coherent cohomology. Thus Hom(Rf∗A,B) ≅ Hom(A,f!B) naturally in every A and B.

**Problem.** For every such f, the functor Rf∗ on complexes with quasi-coherent cohomology has a right adjoint. For proper f this adjoint is the twisted inverse image, so the duality isomorphism holds by definition.

**How the definition helps.** The duality formula is the defining adjunction (our own). Brown representability supplies the adjoint because the source is compactly generated and Rf∗ preserves arbitrary sums (our own summary of Neeman).

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “In particular, Neeman used it to simplify and generalize the construction of the exceptional inverse image functor f<sup>!</sup> for a morphism f of schemes, the central feature of coherent duality theory.”

**Paper or page:** [Duality, Lemma 48.3.1](https://stacks.math.columbia.edu/tag/0A9E). It says: “Let f : X → Y be a morphism between quasi-separated and quasi-compact schemes. The functor Rf\_\* : D<sub>QCoh</sub>(𝒪<sub>X</sub>) → D<sub>QCoh</sub>(𝒪<sub>Y</sub>) has a right adjoint.”

**Sources:**

- [Amnon Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/S0894-0347-96-00174-9)

### Detecting tensor nilpotence makes the images of spectra patch-dense

**Remember:** Detect nilpotence, and the images of spectra recover the whole spectrum.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18F70. arXiv math.CT. Level 4: research.

**Definition.** Functors Fᵢ jointly detect ⊗-nilpotence if every map that all Fᵢ send to zero has some tensor power equal to zero. A subset of a spectral space is patch-dense if it meets every nonempty open set of the patch topology, the topology generated by quasi-compact opens and their complements.

**Problem.** Let K be rigid, and let tensor triangulated functors Fᵢ out of K jointly detect ⊗-nilpotence. Then the union of the images of the maps Spc(Fᵢ) is patch-dense, so it determines Spc K.

**How the definition helps.** If every Fᵢ kills an object a, its identity map is ⊗-nilpotent, so a = 0 by rigidity, and the images meet every nonempty supp(a) (our own sketch). The paper extends this from supports to all patch-open sets. Ordinary density would be too weak, since one generic point is dense in an irreducible space.

**Paper or page:** [Patch-density in tensor-triangular geometry](https://arxiv.org/abs/2503.15274), [Patch-density in tensor-triangular geometry](https://arxiv.org/abs/2503.15274). It says: “If 𝒦 is rigid and a family of tt-functors {Fᵢ: 𝒦 → ℒᵢ} jointly detects ⊗-nilpotence then the subset ∪ᵢ Im(Spc(Fᵢ)) ⊆ Spc(𝒦) is patch-dense.”

**Sources:**

- [Patch-density in tensor-triangular geometry, arXiv:2503.15274 (2025)](https://arxiv.org/abs/2503.15274)

### Finite global dimension gives the bounded derived category a Serre functor

**Remember:** One finite bound suffices for every module’s projective resolution.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 16E10, 16G70. arXiv math.RT. Level 4: research.

**Definition.** A finite-dimensional algebra A has finite global dimension if one integer d bounds the projective dimension of every A-module, so every bounded complex has a bounded projective resolution (our own).

**Problem.** Let A be a finite-dimensional algebra of finite global dimension. Then the derived Nakayama functor is a Serre functor on the bounded derived category of finitely generated A-modules. So this category has Auslander–Reiten triangles (Happel).

**How the definition helps.** Bounded projective resolutions let the derived Nakayama functor, which turns projectives into injectives, give Serre duality on the bounded derived category (our own). Happel’s theorem then gives Auslander–Reiten triangles (our own). Over k\[x\]/(x²), Extⁿ(k,k) never vanishes, which a Serre functor on bounded complexes would forbid (our own).

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “A Serre functor does not always exist, but when it does then it is unique up to graded natural isomorphism.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya (1990)](https://doi.org/10.1070/IM1990v035n03ABEH000716)
- [D. Happel, Auslander–Reiten triangles in derived categories of finite-dimensional algebras, Proceedings of the American Mathematical Society (1991)](https://doi.org/10.1090/S0002-9939-1991-1045137-6)

### Inverse images of prime ideals are prime, so the spectrum is functorial

**Remember:** Pull a prime back along F and it stays prime.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** For a tensor triangulated functor F: K → L and a prime Q of L, define F⁻¹(Q) = {a ∈ K ∣ F(a) ∈ Q}.

**Problem.** Every tensor triangulated functor F from K to L gives a continuous map Spc(F) from Spc L to Spc K, sending Q to F⁻¹(Q). The inverse image of supp(a) under this map is supp(F(a)).

**How the definition helps.** F⁻¹(Q) is prime because F(a⊗b) ≅ F(a)⊗F(b), and proper because F keeps the unit (our own remark). The support formula, and so continuity, follow directly from the definitions (our own remark). Maximal ideals do not pull back: along ℤ → ℚ, the maximal ideal 0 of ℚ pulls back to 0 in ℤ, which is not maximal (our own example).

**Paper or page:** [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257). It says: “Then the induced map BSpc(ℬ) → BSpc(𝒜) is injective.”

**Sources:**

- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Killing the objects supported off U makes the spectrum exactly U

**Remember:** Kill what lives on V, and only U is left.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18E35, 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** Let V be a Thomason subset of Spc K with complement U. Let J be the thick tensor ideal of objects whose support lies in V. The restriction K\|U is the Verdier quotient K/J, the category in which objects of J become zero, made idempotent complete.

**Problem.** The quotient functor K → K\|U induces a homeomorphism from Spc(K\|U) onto the subspace U of Spc K.

**How the definition helps.** Primes of the Verdier quotient correspond to primes containing J, and idempotent completion preserves the spectrum (our own). Such primes lie exactly outside the union of supports of objects of J. The classification of radical ideals identifies that union with V, and the support formula gives the subspace topology (our own).

**Paper or page:** [Periods in equivariant and motivic contexts](https://arxiv.org/abs/2511.14325). It says: “The localization 𝒦 → 𝒦\|<sub>U</sub> induces on spectra the inclusion U ≅ Spc(𝒦\|<sub>U</sub>) ↪︎ Spc(𝒦)”

**Sources:**

- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)
- [Martin Gallauer, Periods in equivariant and motivic contexts, arXiv:2511.14325 (2025)](https://arxiv.org/abs/2511.14325)

### One-sided t-exactness makes adjoint functors restrict to adjoint functors on hearts

**Remember:** Half-exact adjoints stay adjoint after taking zeroth cohomology.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT, math.AG. Level 4: research.

**Definition.** An exact functor F between triangulated categories with t-structures is right t-exact if it sends D≤0 into D≤0. It is left t-exact if it sends D≥0 into D≥0. Its heart version sends an object A of the heart to H⁰(F(A)).

**Problem.** If L is left adjoint to R, then L is right t-exact exactly when R is left t-exact. In that case the heart versions of L and R form an adjoint pair between the hearts.

**How the definition helps.** Adjunction turns the vanishing of maps from L(D≤0) to D≥1 into the vanishing of maps from D≤0 to R(D≥1) (our own). These two vanishing conditions say exactly that L is right t-exact and R is left t-exact (our own). On the heart, H⁰ is a truncation, and truncations are adjoint to inclusions, so the adjunction passes to the heart versions (our own).

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “are exact functors with T\* left adjoint to T∗, then T\* is right t-exact if and only if T∗ is left t-exact”

**Sources:** none listed. No primary source with a working link was found.

### Prime ideals pass to filtered colimits, so spectra become inverse limits

**Remember:** Objects live at finite stages, so primes are checked stage by stage.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** In a filtered colimit of tensor triangulated categories, every object and morphism comes from some stage. Two representatives are equal when their images agree at some later stage.

**Problem.** For a filtered colimit 𝒯 of tensor triangulated categories 𝒯ᵢ, Spc(𝒯) is the inverse limit of the spaces Spc(𝒯ᵢ). The comparison map to the homogeneous spectrum of End\*(1) is the limit of the comparison maps.

**How the definition helps.** So a compatible family of primes decides whether an object belongs by testing it at any stage where it lives, and filteredness makes this well defined (our own). The ideal axioms and the supports are checked at common stages, which gives the limit topology (our own). Cones and homogeneous endomorphisms of the unit also come from stages, so the comparison maps agree (our own).

**Paper or page:** [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446). It says: “Then we have Spc(𝒯)=lim←ᵢ Spc(𝒯ᵢ) and Specʰ(R)=lim←ᵢ Specʰ(Rᵢ) as topological spaces”

**Sources:**

- [Eike Lau, The Balmer spectrum of certain Deligne–Mumford stacks, Compositio Math. 159 (2023) 1314–1346](https://doi.org/10.1112/s0010437x23007200)

### Recollements glue t-structures from an open set and its closed complement

**Remember:** Open part: both bounds; closed part: i\* below, i! above.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 32S60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** In a recollement of D by a closed part F and an open part U, put K in the glued D≤0 when j\*K ∈ U≤0 and i\*K ∈ F≤0. Put K in the glued D≥0 when j\*K ∈ U≥0 and i!K ∈ F≥0.

**Problem.** Given t-structures on U and on F, the glued halves form a t-structure on D.

**How the definition helps.** The gluing triangles split each object into an open part and a closed part, so each bound can be tested on the parts (our own). The work is the construction of the truncation triangle by Beilinson, Bernstein and Deligne. Perverse sheaves are then built one stratum at a time from shifted local systems (our own).

**nLab:** [recollement](https://ncatlab.org/nlab/show/recollement). It says: “As suggested by this example, recollement may in fact be regarded as the additive or triangulated version of Artin gluing.”

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “This t-structure is said to be the gluing of the t-structures on U and F.”

**Sources:** none listed. No primary source with a working link was found.

### Rigidity makes every thick tensor ideal radical

**Remember:** With duals, a is a summand of a⊗a∨⊗a.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18M05. arXiv math.CT. Level 4: research.

**Definition.** A rigid object a has a dual a∨ with coevaluation 1 → a∨⊗a and evaluation a⊗a∨ → 1 satisfying both triangle identities, so a is a direct summand of a⊗a∨⊗a (our own). A tensor triangulated category is rigid if every object has such a dual.

**Problem.** In a rigid tensor triangulated category every thick tensor ideal is radical. So Thomason subsets of Spc K classify all thick tensor ideals.

**How the definition helps.** If a⊗a lies in a thick tensor ideal, so does a⊗a∨⊗a, and hence its summand a (our own sketch). The same step lowers any tensor power a⊗ⁿ to a, so every thick tensor ideal is radical (our own sketch). The classification then follows from the general theorem on radical ideals.

**Paper or page:** [The Spectrum of Stable Infinity Categories with Actions](https://arxiv.org/abs/2505.02724). It says: “Assume every tensor ideal I is radical—that is, for any a ∈ D ∖ I and any n ≥ 1, a⊗ⁿ ∉ I (e.g., when D is rigid, see \[Ba, Remark 4.3\]).”

**Sources:**

- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Set-generated localizing subcategories of compactly generated categories have Bousfield localizations

**Remember:** Generated by a set, the subcategory’s inclusion has a right adjoint.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 55P60. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A localizing subcategory S, a triangulated subcategory closed under all direct sums, is the kernel of a Bousfield localization L if each X sits in a triangle Y → X → LX → Y\[1\]. Here Y lies in S, and LX receives no nonzero maps from S.

**Problem.** In a compactly generated triangulated category, every localizing subcategory generated by a set of objects is the kernel of a Bousfield localization functor. Examples include localizing a spectrum at a prime and restricting complexes of sheaves to an open subset.

**How the definition helps.** Such triangles exist exactly when the inclusion of S has a right adjoint, which gives the map Y → X (our own). When the set consists of compact objects, S is compactly generated and its inclusion preserves sums, so Brown representability gives the adjoint (our own). For arbitrary sets, the work is Neeman’s theory of well generated categories, as surveyed by Krause (our own).

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “if a localizing subcategory S of a compactly generated triangulated category D is generated by a set of objects, then there is a Bousfield localization functor L: D → D with kernel S.”

**Sources:**

- [Henning Krause, Localization theory for triangulated categories, in Triangulated Categories, LMS Lecture Note Ser. 375, Cambridge Univ. Press (2010) 161–235](https://doi.org/10.1017/CBO9781139107075.005)

### Silting subcategories reduce a triangulated Grothendieck group to direct sums

**Remember:** Silting objects generate up to summands and have no positive maps between them.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 19A99. arXiv math.RT, math.KT. Level 4: research.

**Definition.** A silting subcategory S of a triangulated category D is full, additive, closed under direct summands, and has no positive self-extensions: Hom(X,Y\[n\]) = 0 for all X,Y ∈ S and n &gt; 0. It also generates D as a thick subcategory.

**Problem.** The inclusion of a silting subcategory identifies its split Grothendieck group with the Grothendieck group of the whole triangulated category.

**How the definition helps.** The silting conditions give a bounded weight structure with heart S, so each object is a finite extension of shifted objects of S (our own). Sending \[X\] to the alternating sum of its weight pieces inverts the inclusion map on Grothendieck groups (our own).

**Paper or page:** [The Grothendieck group of a triangulated category](https://arxiv.org/abs/2404.15800v3). It says: “the Grothendieck group of a triangulated category with a silting subcategory is isomorphic to the split Grothendieck group of the silting subcategory.”

**Sources:**

- [Xiao-Wu Chen, Zhi-Wei Li, Xiaojin Zhang, Zhibing Zhao, The Grothendieck group of a triangulated category, arXiv:2404.15800 (2024)](https://arxiv.org/abs/2404.15800v3)

### Stratification by a noetherian ring makes smashing ideals compactly generated

**Remember:** Stratified by a noetherian ring, smashing means finite.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 55U35, 13D09. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A localizing tensor ideal S is smashing if the localization that kills S commutes with direct sums, and finite if compact objects generate it. K is stratified by a noetherian ring R when support in Spec R classifies its localizing tensor ideals.

**Problem.** Let K be stratified by a noetherian ring R, with the graded maps between compact objects finitely generated over R. Then every smashing localizing tensor ideal of K is generated by compact objects.

**How the definition helps.** Stratification turns the question into one about supports (our own). Under the finiteness hypotheses, the telescope theorem of Benson, Iyengar and Krause makes a smashing support specialization closed, and Koszul objects then generate the ideal (our own). Keller’s valuation-ring example lacks such a support theory and has a smashing ideal that compact objects cannot generate (our own).

**Paper or page:** [Stratification of Derived Categories of Tate Motives](https://arxiv.org/abs/2406.13088), [Stratification of Derived Categories of Tate Motives](https://arxiv.org/abs/2406.13088). It says: “Every smashing ideal of DTM(ℚ̄, ℤ) is compactly generated. That is, every smashing localization is a finite localization.”

**Sources:**

- [Dave Benson, Srikanth B. Iyengar and Henning Krause, Stratifying triangulated categories, J. Topol. 4 (2011) 641–666](https://doi.org/10.1112/jtopol/jtr017)
- [Stratification of Derived Categories of Tate Motives, arXiv:2406.13088 (2024)](https://arxiv.org/abs/2406.13088)
- [Bernhard Keller, A remark on the generalized smashing conjecture, Manuscripta Math. 84 (1994) 193–198](https://doi.org/10.1007/bf02567453)

### Strong generation makes every finite cohomological functor representable

**Remember:** A bounded number of cones replaces infinite sums in Brown's theorem.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.CT, math.AG. Level 4: research.

**Definition.** An object G strongly generates D if one number n works for all objects: each object is a summand of one built from finite sums of shifts of G using at most n cones. D is Ext-finite over a field k if the maps from X to all shifts of Y have finite total dimension, for all X and Y.

**Problem.** Let D be an Ext-finite, strongly generated, idempotent-complete k-linear triangulated category over a field k. Every k-linear contravariant cohomological functor H to k-vector spaces is representable if ∑ᵢ dimₖ H(X\[i\]) is finite for every X.

**How the definition helps.** The uniform cone bound lets Bondal and Van den Bergh construct a representing object using finitely many stages (our own). Idempotent completeness supplies the final summand (our own).

**Paper or page:** [Brown representability for triangulated categories with a linear action by a graded ring](https://arxiv.org/abs/2206.09646v2). It says: “a graded R-linear triangulated category, that is strongly generated, Ext-finite and idempotent complete. Then a graded R-linear cohomological functor f : Tᵒᵖ → grMod(R) is graded representable if and only if f is locally finite.”

**Sources:**

- [Alexei Bondal and Michel Van den Bergh, Generators and representability of functors in commutative and noncommutative geometry, Moscow Math. J. 3 (2003) 1–36](https://doi.org/10.17323/1609-4514-2003-3-1-1-36)

### The Balmer spectrum is the final space carrying a tensor support

**Remember:** At each point, the objects missing that point form its prime.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A support datum on an essentially small tensor triangulated category K is a space X with a closed subset σ(a) for each object a, behaving like the support of a module. So σ(0) = ∅, σ(1) = X, σ(a⊕b) = σ(a) ∪ σ(b), σ(a⊗b) = σ(a) ∩ σ(b) and σ(a\[1\]) = σ(a). Each triangle a → b → c → a\[1\] gives σ(b) ⊆ σ(a) ∪ σ(c).

**Problem.** (Spc K, supp) is a support datum. Every support datum (X, σ) on K comes from it by a unique continuous map f with σ(a) = f⁻¹(supp a).

**How the definition helps.** For each x, the support axioms make {a ∣ x ∉ σ(a)} a proper prime thick tensor ideal (our own). Taking this ideal as f(x) gives the required inverse images, hence continuity and uniqueness (our own). Balmer support itself satisfies the axioms by the thick tensor ideal and primality conditions (our own).

**nLab:** [spectrum of a tensor triangulated category](https://ncatlab.org/nlab/show/spectrum+of+a+tensor+triangulated+category). It says: “the prime ideals are taken to be the thick subcategories which behave as prime ideals under the tensor product, in the obvious way.”

**Paper or page:** [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446). It says: “The cohomological support (Specʰ(R),V) is a support data on 𝒯 iff for all X,Y∈𝒯 the set V(X) is closed and V(X⊗Y)=V(X)∩V(Y).”

**Sources:**

- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Torsion pairs give exactly the hearts between a heart and its shift

**Remember:** Shift the torsion-free part left by one, and a new heart appears.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18E40. arXiv math.AG, math.RT. Level 4: research.

**Definition.** A torsion pair (T, F) in an abelian category A is a pair of full subcategories with no nonzero maps from T to F. Each object E has a short exact sequence 0 → T → E → F → 0 with T in T and F in F. The tilt of a bounded heart A at the pair is the extension closure of F\[1\] and T.

**Problem.** (Happel, Reiten and Smalø) The tilt of a bounded heart at a torsion pair is again a bounded heart. (Polishchuk) Conversely, every bounded heart inside the extension closure of A and A\[1\] is the tilt of A at a torsion pair.

**How the definition helps.** The torsion decomposition tells which cohomology objects to shift (our own). The Happel–Reiten–Smalø tilting theorem constructs the new t-structure from that decomposition (our own). Polishchuk recovers T by intersecting the hearts. The objects of A whose shifts belong to the new heart form F (our own).

**Paper or page:** [Filtrations and torsion pairs in Abramovich Polishchuk's heart](https://arxiv.org/abs/2206.06839v2), [Stability conditions on the canonical line bundle of ℙ³](https://arxiv.org/abs/2501.15251v1). It says: “Suppose A is the heart of a bounded t-structure on a triangulated category D, (T,F) is a torsion pair in A. Then A\# = ⟨F\[1\], T⟩ is a heart of a bounded t-structure on D.”

**Sources:**

- [Dieter Happel, Idun Reiten and Sverre O. Smalø, Tilting in abelian categories and quasitilted algebras, Mem. Amer. Math. Soc. 575 (1996)](https://doi.org/10.1090/memo/0575)

### Defining bimonads through their algebras makes those algebras tensor together

**Remember:** The bimonad's tensor product already lives on its algebras.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18C15. arXiv math.CT, math.QA. Level 4: research.

**Definition.** Fix a monad B on a monoidal category C. In the algebra formulation, a bimonad structure on B is a monoidal structure on its Eilenberg–Moore category making the forgetful functor to C strict monoidal.

**Problem.** The algebras for a bimonad have a tensor product. Forgetting the actions turns it into the original tensor product.

**How the definition helps.** With the algebra definition, the theorem is the definition itself. The real content is the quoted bijection with the usual definition by splitting maps B(X⊗Y) → B(X)⊗B(Y). Given such a map, X⊗Y gets the action B(X⊗Y) → B(X)⊗B(Y) → X⊗Y (our own explanation).

**Paper or page:** [Duoidal R-Matrices](https://arxiv.org/abs/2503.03445v1). It says: “There exists a bijective correspondence between bimonad structures on B and monoidal structures on Cᴮ”

**Sources:**

- [Duoidal R-Matrices (arXiv 2503.03445v1)](https://arxiv.org/abs/2503.03445v1)

### Frobenius monoidal functors send Frobenius algebras to Frobenius algebras by design

**Remember:** Compatible joining and splitting carry the Frobenius laws along.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16L60. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A Frobenius monoidal functor F has joining maps μ: F(X)⊗F(Y) → F(X⊗Y), making it lax monoidal, and splitting maps δ in the reverse direction, making it colax monoidal. Up to associators, they satisfy the two Frobenius laws δ₍X⊗Y,Z₎ μ₍X,Y⊗Z₎ = (μ₍X,Y₎⊗1)(1⊗δ₍Y,Z₎) and δ₍X,Y⊗Z₎ μ₍X⊗Y,Z₎ = (1⊗μ₍Y,Z₎)(δ₍X,Y₎⊗1).

**Problem.** A Frobenius monoidal functor sends every Frobenius algebra to a Frobenius algebra.

**How the definition helps.** The functor’s two laws carry the algebra’s Frobenius laws across, so the proof is a short diagram chase (our own explanation). F(A) multiplies by joining and then multiplying, and comultiplies by comultiplying and then splitting (our own explanation).

**Paper or page:** [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2). It says: “If A is a Frobenius algebra in C, then F(A) is a Frobenius algebra in D.”

**Sources:**

- [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2)

### In hypergraph categories, the spider theorem lets string diagrams be hypergraphs

**Remember:** Every wire may split and merge freely, and only the count of legs matters.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M30. arXiv math.CT. Level 4: research.

**Definition.** A hypergraph category is a symmetric monoidal category with a special commutative Frobenius algebra on every object. The structure on each tensor product must equal the tensor product structure, and the unit must carry its canonical structure.

**Problem.** The spider theorem: any connected composite of Frobenius structure maps from X⊗ᵐ to X⊗ⁿ is one and the same morphism, called a spider. So string diagrams can be drawn as hypergraphs.

**How the definition helps.** The Frobenius laws fuse connected multiplication and comultiplication trees, and specialness removes the extra loops (our own). Commutativity and cocommutativity remove the ordering of the legs (our own). The spider theorem therefore identifies every connected component by its inputs and outputs, as in a hypergraph.

**nLab:** [hypergraph category](https://ncatlab.org/nlab/show/hypergraph+category). It says: “the real point is that the special commutative Frobenius axioms ensure that any composite of two such morphisms is again another such morphism.”

**Sources:**

- [Brendan Fong, David I. Spivak, Hypergraph categories, 2018, arXiv:1806.08304](https://arxiv.org/abs/1806.08304)

### Semicartesian monoidal categories are the right models of affine logic

**Remember:** Weakening is a map to the unit; make it monoidal and the unit is terminal.

*Rules out counterexamples. Confidence: medium.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M45, 03B47. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A monoidal category with unit I is semicartesian if I is terminal: every object A has exactly one morphism A → I, which discards A.

**Problem.** A monoidal category has a monoidal natural family of maps A → I exactly when I is terminal, that is, when it is semicartesian. So semicartesian categories are the models in which weakening behaves well.

**How the definition helps.** Naturality for any f: A → I gives ε<sub>A</sub> = ε<sub>I</sub> ∘ f, and monoidality forces ε<sub>I</sub> = id<sub>I</sub>, so f = ε<sub>A</sub> and I is terminal (our own). Conversely, terminality makes the naturality and tensor diagrams commute by uniqueness (our own). In Rel the empty relations form a natural family that fails the unit condition (our own).

**nLab:** [affine logic](https://ncatlab.org/nlab/show/affine+logic), [semicartesian monoidal category](https://ncatlab.org/nlab/show/semicartesian+monoidal+category). It says: “unless one additionally requires these natural transformations to be monoidal, but it can be shown that this additional requirement already forces the tensor unit to be terminal (specifically, this follows from the component at I being the identity).”

**Sources:**

- [Bart Jacobs, Semantics of weakening and contraction, Annals of Pure and Applied Logic 69 (1994) 73–106](https://doi.org/10.1016/0168-0072(94)90020-5)

### The Day convolution universal property makes monoids lax monoidal functors

**Remember:** Day convolution collects a natural family of products into one multiplication map.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 4: research.

**Definition.** For functors F,G from a small monoidal category C to sets, their Day convolution is the left Kan extension of F×G along C’s tensor functor. Equivalently, maps F ⊗Day G → H correspond naturally to families F(a)×G(b) → H(a⊗b) natural in both a and b.

**Problem.** Monoids for Day convolution are exactly the lax monoidal functors C → Set. Such a functor has compatible product maps F(a) × F(b) → F(a ⊗ b). It also has a chosen element of F(I), where I is the unit of C.

**How the definition helps.** The universal property makes a multiplication F ⊗Day F → F the same as a natural family of maps F(a) × F(b) → F(a ⊗ b). The unit of convolution is C(I, −), so by Yoneda a unit map is an element of F(I). The monoid laws then match the coherence conditions of a lax monoidal functor.

**nLab:** [Day convolution](https://ncatlab.org/nlab/show/Day+convolution). It says: “(commutative) monoid objects in the Day convolution monoidal category (\[𝒞,V\], ⊗Day, y(I)) of prop. are equivalent to (symmetric) lax monoidal functors 𝒞 → V”

**Sources:**

- [B. Day, On closed categories of functors, Reports of the Midwest Category Seminar IV, Lecture Notes in Mathematics 137 (1970)](https://doi.org/10.1007/BFb0060438)

### Defining negligible maps by traces makes the quotient's trace pairings nondegenerate

**Remember:** Remove exactly the maps that no trace can detect.

*True by definition.* MSC 18M10 (Traced monoidal categories, compact closed categories, star-autonomous categories), 18M20. arXiv math.QA, math.CT. Level 4: research.

**Definition.** In a k-linear spherical category, f: X → Y is negligible if tr(g ∘ f) = 0 for every g: Y → X. The negligible quotient divides each morphism space by its subspace of negligible maps.

**Problem.** Take a spherical category whose maps from the tensor unit to itself are the base-field scalars. On its negligible quotient, the trace pairing (f, g) ↦ tr(g ∘ f) is nondegenerate.

**How the definition helps.** Negligible maps are exactly the kernel of the trace pairing, so dividing them out makes the pairing nondegenerate by construction (our own argument). The work moves into proving that negligible maps form a tensor ideal, using equal left and right traces, so composition and tensor products pass to the quotient (our own explanation). The quoted proposition identifies this ideal with the unique maximal ideal.

**Paper or page:** [Categories generated by a trivalent vertex](https://arxiv.org/abs/1501.06869v3). It says: “An evaluable pivotal category has a unique maximal ideal, the negligible ideal.”

**Sources:**

- [Categories generated by a trivalent vertex (arXiv 1501.06869v3)](https://arxiv.org/abs/1501.06869v3)

### Defining the Drinfeld center by transformations makes its braiding an interchange

**Remember:** Two transformations of the identity slide past each other.

*True by definition. Confidence: medium.* MSC 18M15 (Braided monoidal categories and ribbon categories), 18N10. arXiv math.CT, math.QA. Level 4: research.

**Definition.** Regard a monoidal category C as a bicategory BC with one object, whose composition is the tensor product. Its transformation center has the pseudonatural transformations of the identity of BC as objects and modifications as morphisms, with composition of transformations as tensor product.

**Problem.** The Drinfeld center of a monoidal category is braided.

**How the definition helps.** Evaluating one transformation’s naturality isomorphism at the component of another swaps their order, and this swap is the braiding (our own). Pseudonaturality gives the braiding axioms (our own). The quoted monoidal equivalence transports this braiding to the Drinfeld center.

**Paper or page:** [Categorical centers and Yetter--Drinfel\`d-modules as 2-categorical (bi)lax structures](https://arxiv.org/abs/2306.05337v1). It says: “There exists a monoidal equivalence of categories between the Drinfel\`d center of C and the category of pseudonatural transformations and their modifications”

**Sources:**

- [Categorical centers and Yetter--Drinfel\`d-modules as 2-categorical (bi)lax structures](https://arxiv.org/abs/2306.05337v1)

### Equal left and right traces give spherical categories invariance on the sphere

**Remember:** Closing a strand on either side gives the same number.

*True by definition. Confidence: medium.* MSC 18M15 (Braided monoidal categories and ribbon categories). arXiv math.QA, math.CT. Level 4: research.

**Definition.** A spherical category is a pivotal category in which the left and right pivotal traces agree for every endomorphism of every object.

**Problem.** In a spherical category, the value of a closed diagram does not change when the diagram moves on the sphere.

**How the definition helps.** Equal traces are exactly the one move that plane isotopy lacks: on the sphere, a strand passing behind the point at infinity turns a left closure into a right closure (our own explanation). Plane isotopy invariance already holds in every pivotal category, by a coherence theorem (our own summary). Every isotopy of the sphere splits into plane moves and such passes (our own).

**nLab:** [spherical category](https://ncatlab.org/nlab/show/spherical+category). It says: “A spherical category is a pivotal category C where the left and right trace operations coincide on all objects.”

**Sources:**

- [John Barrett and Bruce Westbury, Spherical Categories (1999)](https://doi.org/10.1006/aima.1998.1800)

### Framed tangles as the free ribbon category give invariants from every object

**Remember:** Choose an object, and every framed tangle gets a value.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories), 57K16. arXiv math.QA, math.GT. Level 4: research.

**Definition.** Framed oriented tangles form a strict ribbon category, with isotopy classes of tangles with fixed boundary as morphisms, stacking as composition and juxtaposition as tensor product. It is the free ribbon category on one object, the positively oriented point.

**Problem.** Each object V of a strict ribbon category determines a unique strict ribbon functor from framed oriented tangles sending the generating point to V.

**How the definition helps.** Freeness means that a ribbon functor out of tangles is fixed by where it sends the generating point. So each object V extends to a unique strict ribbon functor (our own). The freeness itself is Shum’s coherence theorem (our own).

**nLab:** [Shum's theorem](https://ncatlab.org/nlab/show/Shum%27s+theorem). It says: “The category of framed oriented tangles FrOrTang is equivalently the free ribbon category generated by a single object.”

**Sources:**

- [Mei Chee Shum, Tortile tensor categories (1994)](https://doi.org/10.1016/0022-4049(92)00039-T)

### Pivotal structures as double-dual isomorphisms differ by tensor automorphisms of identity

**Remember:** Divide two pivotal isomorphisms to get an automorphism.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories). arXiv math.QA, math.CT. Level 4: research.

**Definition.** A pivotal structure on a rigid monoidal category is a monoidal natural isomorphism from the identity functor to the double-dual functor.

**Problem.** Fix one pivotal structure a on a rigid monoidal category. Then the pivotal structures are exactly the a ∘ u, for a unique tensor-preserving natural automorphism u of the identity functor.

**How the definition helps.** Given pivotal structures a and a′, their ratio u = a⁻¹ ∘ a′ is a monoidal natural automorphism of the identity (our own). The equation a′ = a ∘ u determines u uniquely. Conversely, composing a with any such u again gives a monoidal natural isomorphism (our own).

**nLab:** [pivotal category](https://ncatlab.org/nlab/show/pivotal+category). It says: “if a pivotal structure exists then it will be unique up to precomposing with an element of the group Aut⊗(id𝒞) of monoidal natural automorphisms of the identity”

**Sources:** none listed. No primary source with a working link was found.

### Cohomologous twists rescale tensor constraints

**Remember:** A coboundary changes rebracketing by a change of tensor coordinates.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** Fix a finite group G and a normalized complex 3-cocycle ω, a function taking nonzero scalar values on triples satisfying the pentagon identity. In the twisted category of G-graded complex vector spaces, rebracketing homogeneous factors of degrees g,h,k multiplies by ω(g,h,k).

**Problem.** Suppose normalized cocycles satisfy ω = (dμ)ω′, where dμ(g,h,k) = μ(h,k)μ(g,hk)/(μ(gh,k)μ(g,h)) for a normalized μ from pairs in G to nonzero complex numbers. Then the identity functor, with comparison scalars μ(g,h), is a tensor equivalence from the ω category to the ω′ category.

**How the definition helps.** On each homogeneous triple, the monoidal functor axiom is exactly ω = (dμ)ω′ (our own). Normalization gives the unit axiom, and reciprocal comparison scalars give the inverse (our own).

**Paper or page:** [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2). It says: “which is the identity as a functor with monoidal structure given by”

**Sources:**

- [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2)

### Doubling cancels the surgery anomaly

**Remember:** Pair the twists with their inverses, and the anomaly cancels.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T45. arXiv math.QA. Level 4: research.

**Definition.** Let C be a complex modular fusion category, one with finitely many simple labels and nondegenerate crossings. Its double is C ⊠ C̄, where C̄ is C with opposite crossings and inverse twists. So C̄ swaps the two Gauss sums p₊ = ∑ᵢ θᵢdᵢ² and p₋ = ∑ᵢ θᵢ⁻¹dᵢ² of C.

**Problem.** Both Gauss sums of the double equal the global dimension of C, the sum of the squared quantum dimensions. With this dimension as normalization, the double has trivial surgery anomaly.

**How the definition helps.** Gauss sums of a product are products, so both Gauss sums of the double equal p₊p₋ (our own calculation). The modular Gauss-sum identity gives p₊p₋ = dim C. Identifying the double with the braided center uses the center factorization theorem.

**Paper or page:** [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1). It says: “Then Z(C) is an anomaly free modular category”

**Sources:**

- [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1)

### Encircling loops diagonalize torus fusion

**Remember:** Evaluate an encircling loop on each simple color to read the eigenvalues.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** In a complex ribbon fusion category, encircling a strand with a loop labeled i gives a natural operator on every strand. The category is modular, in the loop sense, if this identifies the fusion algebra, spanned by simple labels and multiplied by tensor product, with the natural endomorphisms of the identity functor. Those act by one scalar on each simple object.

**Problem.** Let Sᵢⱼ denote the evaluation of two linked circles with labels i and j, and let 0 denote the tensor unit. In a modular category, fusion by each simple label i acts diagonally in one common basis, with entries Sᵢⱼ/S₀ⱼ indexed by j.

**How the definition helps.** So fusion becomes multiplication of scalar functions on simple labels, which is diagonal in the basis of functions supported at one label (our own). The loop i acts on a simple strand j by a scalar, and closing the strand multiplies it by S₀ⱼ to give Sᵢⱼ, so the scalar is Sᵢⱼ/S₀ⱼ (our own calculation).

**nLab:** [modular tensor category](https://ncatlab.org/nlab/show/modular+tensor+category). It says: “modularity a non-degeneracy condition on the braiding given by an isomorphism of algebras”

**Sources:**

- [Verlinde, Fusion rules and modular transformations in 2D conformal field theory](https://doi.org/10.1016/0550-3213(88)90603-7)

### Frobenius–Perron dimension as a positive character makes it multiplicative

**Remember:** A positive ring homomorphism already multiplies dimensions.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 15B48. arXiv math.QA, math.CT. Level 4: research.

**Definition.** The Frobenius–Perron dimension on a fusion category is the unique ring homomorphism from its Grothendieck ring to ℝ that is positive on every simple class.

**Problem.** In a fusion category, FPdim(X ⊗ Y) = FPdim(X) · FPdim(Y) for all objects X and Y.

**How the definition helps.** Tensor product gives multiplication in the Grothendieck ring, and a ring homomorphism preserves multiplication (our own). The Frobenius–Perron theorem for fusion rings identifies this positive character with the spectral radius of each fusion matrix (our own).

**nLab:** [Frobenius-Perron dimension](https://ncatlab.org/nlab/show/Frobenius-Perron+dimension). It says: “This maximal eigenvalue is called the Frobenius-Perron dimension”

**Sources:**

- [Pavel Etingof, Dmitri Nikshych, and Viktor Ostrik, On fusion categories (2005)](https://doi.org/10.4007/annals.2005.162.581)

### Local modules inherit braiding

**Remember:** Cross the algebra twice before acting, and the action stays the same.

*Makes the theorem clean to state or prove.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** A right module M over a commutative algebra A in a braided category is local if the action does not notice A passing around M: ρ ∘ c₍A,M₎ ∘ c₍M,A₎ = ρ. Here ρ is the action and c is the braiding.

**Problem.** Let A be a connected, separable, commutative algebra with trivial twist in a unitary modular fusion category over ℂ. Then local A-modules form a modular category under tensor product over A.

**How the definition helps.** Locality makes the braiding compatible with the relations of the tensor product over A, which identify the action on one factor with the action on the other, so the braiding descends. Nondegeneracy of the descended braiding is the modularity theorem for local modules.

**Paper or page:** [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2). It says: “of local modules over A in C is also modular.”

**Sources:**

- [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2)

### Modularity prevents singular torus rotation

**Remember:** A transparent extra color gives the torus rotation a redundant row.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T45. arXiv math.QA. Level 4: research.

**Definition.** A simple object of a complex ribbon fusion category is transparent if crossing it twice with any object acts as the identity. The category is modular if the tensor unit is its only transparent simple object.

**Problem.** The Hopf-link matrix evaluates two linked circles for each pair of simple labels. This matrix is invertible exactly when the category is modular.

**How the definition helps.** A transparent simple label t has Hopf-link row Sₜⱼ = dₜdⱼ, proportional to the unit row dⱼ, so a nontrivial one makes the matrix singular (our own). For example, the two one-dimensional representations of the order-two group, with symmetric crossing, give a matrix of ones (our own). The converse, that a singular matrix forces a nontrivial transparent label, is the modularity criterion.

**Wikipedia:** [Modular tensor category](https://en.wikipedia.org/wiki/Modular_tensor_category). It says: “a modular tensor category is a braided spherical fusion category with non-degenerate braiding.”

**Paper or page:** [CFT Correlators for Cardy Bulk Fields via String-Net Models](https://arxiv.org/abs/1911.10147v2). It says: “A ribbon fusion category C is a modular tensor category if and only if the canonical functor Ξ is a braided equivalence.”

**Sources:**

- [Reshetikhin and Turaev, Invariants of 3-manifolds via link polynomials and quantum groups](https://link.springer.com/article/10.1007/BF01239527)
- [Bruguières, Catégories prémodulaires, modularisations et invariants des variétés de dimension 3](https://doi.org/10.1007/s002080050011)

### A growth bound makes a tensor category a category of supergroup representations

**Remember:** Tensor powers of an object may grow no faster than for a vector space.

*Makes the theorem clean to state or prove.* MSC 18M25 (Tannakian categories), 18M05. arXiv math.QA, math.CT. Level 4: research.

**Definition.** Moderate growth means that each object’s tensor powers grow at most exponentially in length: for every X some real N ≥ 1 has length(X⊗ⁿ) ≤ Nⁿ for all n ≥ 1. The setting is a rigid symmetric k-linear abelian tensor category with finite-length objects, finite-dimensional morphism spaces and End(𝟙) = k.

**Problem.** Over an algebraically closed field k of characteristic zero, every such category of moderate growth is equivalent as a symmetric tensor category to Rep(G,ε). Here G is an affine supergroup and ε² = 1 acts by parity.

**How the definition helps.** A representation X of a supergroup has length(X⊗ⁿ) ≤ (dim X)ⁿ, so moderate growth is a necessary condition visible inside C (our own). Deligne’s super-Tannakian theorem shows that it is also sufficient, and produces G and ε from C (our own).

**nLab:** [Deligne's theorem on tensor categories](https://ncatlab.org/nlab/show/Deligne%27s+theorem+on+tensor+categories), [Tannakian category](https://ncatlab.org/nlab/show/Tannakian+category). It says: “Categories that do not satisfy sub-exponential growth have come to be known as Deligne categories”

**Sources:**

- [Pierre Deligne, Catégories tensorielles, Moscow Mathematical Journal 2 (2002) no. 2, 227–248](https://www.math.ias.edu/files/deligne/Tensorielles.pdf)
- [Serina Hu, An Introduction to Deligne Categories, arXiv:2404.08689 (2024)](https://arxiv.org/abs/2404.08689)

### Doplicher–Roberts reconstruction needs the symmetric structure

**Remember:** Keep the symmetry, and the category of representations knows its group.

*Makes the theorem clean to state or prove.* MSC 18M25 (Tannakian categories), 18D20, 46L05. arXiv math.QA, math.OA. Level 4: research.

**Definition.** A symmetric tensor C\*-category is an essentially small tensor C\*-category with conjugates, finite direct sums, subobjects and simple unit, together with a unitary braiding c that is its own inverse: c₍Y,X₎ ∘ c₍X,Y₎ = id. This symmetry is part of the structure, and equivalences must preserve it.

**Problem.** Every such symmetric tensor C\*-category is equivalent to the representations of a compact supergroup, unique up to isomorphism (Doplicher–Roberts, Müger). No fiber functor needs to be given.

**How the definition helps.** The reconstruction reads the group off from the symmetric structure, so keeping the symmetry keeps the group (our own). Tensor structure alone loses information: some non-isomorphic finite groups have tensor-equivalent representation categories. Doplicher–Roberts reconstruction recovers the compact group and its central parity element from the symmetric category (our own).

**nLab:** [Doplicher-Roberts reconstruction theorem](https://ncatlab.org/nlab/show/Doplicher-Roberts+reconstruction+theorem). It says: “Beware that there are non-isomorphic finite groups whose categories of representations are equivalent considered merely as tensor categories, ignoring the symmetric structure”

**Sources:**

- [Sergio Doplicher, John E. Roberts, A new duality theory for compact groups, Inventiones Mathematicae 98 (1989) 157–218](https://doi.org/10.1007/BF01388849)
- [Pavel Etingof, Shlomo Gelaki, Isocategorical groups, arXiv:math/0007196](https://arxiv.org/abs/math/0007196)

### Super vector spaces let a growth bound reconstruct the symmetry supergroup

**Remember:** Tensor powers grow at most exponentially, so a supergroup is behind it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M25 (Tannakian categories), 18M05. arXiv math.QA, math.CT. Level 4: research.

**Definition.** A tensor category has moderate growth if the lengths of the tensor powers of each object grow at most exponentially: length(X⊗ⁿ) ≤ Nⁿ for some N ≥ 1 and all n ≥ 1. Here the category is rigid, symmetric, k-linear and abelian over an algebraically closed field k of characteristic zero, with End(𝟙) = k, finite-length objects and finite-dimensional Hom spaces.

**Problem.** Every such category of moderate growth is symmetrically tensor equivalent to Rep(G,ε) for an affine supergroup G with a specified element ε acting by parity.

**How the definition helps.** The growth bound is an intrinsic test that needs no functor to vector spaces, and Deligne's theorem turns it into a super fiber functor (our own). Tannakian reconstruction then identifies the category with representations of a supergroup that respect parity (our own).

**nLab:** [Deligne's theorem on tensor categories](https://ncatlab.org/nlab/show/Deligne%27s+theorem+on+tensor+categories). It says: “Deligne's theorem then gives that supersymmetry is the most general context in which this works out.”

**Sources:**

- [Pierre Deligne, Catégories tensorielles, Moscow Math. J. 2 (2002) 227–248](https://www.math.ias.edu/files/deligne/Tensorielles.pdf)

### Frobenius algebras give the spider rule of the ZX-calculus

**Remember:** Copy and delete in one basis: connected diagrams collapse into one spider.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 18M30, 81P45. arXiv quant-ph, math.CT. Level 4: research.

**Definition.** In the ZX-calculus, one qubit basis B gives a special commutative Frobenius algebra: copying b ↦ b⊗b and deleting b ↦ 1 for each b ∈ B, extended linearly, together with their adjoints. The Frobenius laws let wires slide freely between these maps, so a connected diagram keeps only its numbers of inputs and outputs.

**Problem.** Two connected diagrams of one colour are equal exactly when they have the same numbers of inputs and outputs (Coecke and Duncan, Theorem 1). So each such diagram is a single spider.

**How the definition helps.** The Frobenius, special and commutative laws rewrite any connected one-colour diagram into one normal form fixed by its inputs and outputs. That normal form is the spider, and spider fusion then replaces long algebraic checks. In the full ZX-calculus, spiders also carry phases, which add when spiders fuse.

**nLab:** [ZX-calculus](https://ncatlab.org/nlab/show/ZX-calculus). It says: “since the Frobenius algebra-property ensures --- recalled as Coecke &amp; Duncan (2011), Theorem 1 --- that any connected diagrams are equal iff they have the same number of in/outputs”

**Sources:**

- [B. Coecke, R. Duncan, Interacting Quantum Observables: Categorical Algebra and Diagrammatics, New Journal of Physics 13 (2011) 043016, arXiv:0906.4725](https://arxiv.org/abs/0906.4725)

### Finite sets form the initial rig category, with the right 2-category

**Remember:** A map out exists, and any two are uniquely isomorphic.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M50 (Bimonoidal, skew-monoidal, duoidal categories), 18N10. arXiv math.CT. Level 4: research.

**Definition.** An object I of a 2-category is bi-initial if, for every object A, there is a 1-morphism I → A and any two such 1-morphisms are joined by exactly one 2-cell, which is invertible. Equivalently, each hom-category Hom(I,A) is equivalent to the terminal category.

**Problem.** The groupoid of finite sets and bijections is the bi-initial symmetric rig category, just as ℕ is the initial commutative rig. Baez conjectured this, and Elgueta proved it in 2021.

**How the definition helps.** Rig functors out of finite sets are unique only up to a unique coherent isomorphism, and bi-initiality is exactly that kind of uniqueness (our own). Elgueta’s coherence theorem proves that finite sets and bijections have this property in the 2-category of symmetric rig categories (our own).

**nLab:** [rig category](https://ncatlab.org/nlab/show/rig+category). It says: “Using the correct definition of the 2-category of symmetric rig categories, the groupoid FinSet× of finite sets and bijections is the initial symmetric rig category, just as ℕ is the initial commutative rig.”

**Sources:**

- [Josep Elgueta, The groupoid of finite sets is biinitial in the 2-category of rig categories, Journal of Pure and Applied Algebra 225 (2021), arXiv:2004.08684](https://arxiv.org/abs/2004.08684)

### Clubs of mixed variance throw away compositions that make loops

**Remember:** Composites that close a loop have no answer, so clubs forbid them.

*Rules out counterexamples. Confidence: medium.* MSC 18M60 (Operads (general)), 18N20, 18D15. arXiv math.CT. Level 4: research.

**Definition.** In Kelly’s graph category for mixed variance, a graph pairs up the signed variables of a canonical map, and composing graphs joins the pairings end to end. If a closed loop appears, the composite is a distinguished basepoint with no meaning. A club for mixed variance assigns graphs compatibly with composition and never reaches that basepoint.

**Problem.** Coherence, the question of which diagrams of canonical maps commute, can be described by a club for symmetric monoidal closed categories and similar structures with right adjoints. For compact closed categories it cannot.

**How the definition helps.** In a compact closed category, a cup followed by a cap closes a loop, so the graph composite is the forbidden basepoint (our own). The loop is a genuine scalar, such as the dimension of a vector space, so it cannot be dropped (our own). For symmetric monoidal closed categories, Kelly’s cut-elimination theorem shows that loops never form (our own).

**nLab:** [club](https://ncatlab.org/nlab/show/club). It says: “The lesson learned is that the doctrine of compact closed categories is not describable by a club, and that for the purposes of clubs there is no use for compositions of graphs which produce loops.”

**Sources:**

- [G. M. Kelly, An abstract approach to coherence, in Coherence in Categories, Lecture Notes in Mathematics 281, Springer, 1972, 106–147](https://doi.org/10.1007/BFb0059557)

### In Feynman categories the hereditary condition gives free algebras

**Remember:** Every morphism splits into pieces with one output each, as in operads.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M60 (Operads (general)), 18M05. arXiv math.CT. Level 4: research.

**Definition.** A Feynman category is hereditary if every morphism, up to isomorphism, splits uniquely as a tensor product of morphisms that each have a single generating object as target. Formally, the functor Iso(M↓C)⊗ → Iso(M↓M) is an equivalence, where C is the generating groupoid and ⊗ is free symmetric monoidal completion.

**Problem.** Let E be a cocomplete symmetric monoidal category whose tensor preserves colimits in each variable. Restricting strong symmetric monoidal functors M → E to the generating groupoid has a left adjoint, and the algebras of the resulting monad are these functors, up to equivalence.

**How the definition helps.** Because each morphism splits into one-output pieces, the left Kan extension of data on the generators is again strong monoidal, which gives the free functor (our own). The free-algebra and monadicity theorems for Feynman categories identify its algebras with the original monoidal functors (our own).

**nLab:** [Feynman category](https://ncatlab.org/nlab/show/Feynman+category). It says: “The condition of a pattern or that of being hereditary guarantees that there is a left adjoint free functor for the forgetful functor of restricting a monoidal functor from M to C.”

**Sources:**

- [Ralph M. Kaufmann, Benjamin C. Ward, Feynman categories, Astérisque 387 (2017), arXiv:1312.1269](https://arxiv.org/abs/1312.1269)

### Operads as substitution monoids give monads on sets

**Remember:** Substitution acts on sets, turning an operad's plugging into monad multiplication.

*True by definition.* MSC 18M60 (Operads (general)), 18C15. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A set operad is a monoid for substitution of symmetric sequences of sets, where substitution plugs one inner operation into each input of an outer operation, up to relabelling. Substitution also acts on plain sets, by labelling inputs with elements, and this action respects substitution: (P∘Q)(X) ≅ P(Q(X)).

**Problem.** Every operad P in sets gives a monad X ↦ P(X) on sets, sending X to the operations of P with inputs labelled by elements of X, up to relabelling. Its algebras are exactly the sets on which the operad acts.

**How the definition helps.** Because substitution acts on sets, the operad's unit and multiplication give maps X → P(X) and P(P(X)) → P(X), and the monoid laws become the monad laws. In our own unpacking, a monad algebra evaluates labelled operations, and its laws are the operad action laws.

**nLab:** [operad](https://ncatlab.org/nlab/show/operad). It says: “the monoidal category (Psh(ℙ), ∘, I) acts on Set in such a way as to give an actegory structure, and therefore an operad or ∘-monoid gives rise to a monad on Set.”

**Paper or page:** [A unified framework for notions of algebraic theory](https://arxiv.org/abs/1904.08541v2). It says: “The key observation is that each notion of algebraic theory can be identified with a monoidal category, in such a way that algebraic theories correspond to monoid objects therein.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized multicategories are monoids in a double category

**Remember:** Spans give the multicategories; the vertical maps give their functors.

*Makes the theorem clean to state or prove.* MSC 18M65 (Non-symmetric operads, multicategories, generalized multicategories), 18C15, 18N10. arXiv math.CT. Level 4: research.

**Definition.** For a cartesian monad T on a category V with pullbacks, a T-multicategory is a monoid for composition of spans X ← R → TX, where R holds the operations, each with a source in TX and a target in X. In the double category of such spans, the vertical arrows are maps of V, so a monoid map includes an honest map of objects.

**Problem.** In the double category of T-spans and maps of V, monoid homomorphisms between T-multicategories are exactly the correct functors in all examples, such as categories, multicategories and globular operads.

**How the definition helps.** A functor needs a map of objects, and the vertical arrows of the double category supply exactly that. In the bicategory of T-spans, the nearest monad morphisms, the colax ones, let the object part be an arbitrary span instead of a map of V. Virtual double categories (Cruttwell and Shulman) also cover symmetric multicategories.

**nLab:** [generalized multicategory](https://ncatlab.org/nlab/show/generalized+multicategory). It says: “Thus, a better definition of T-multicategory is "a monoid in the double category Span(V,T)," since this definition recovers the correct morphisms immediately.”

**Sources:**

- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010) 580–655, arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Defined as pseudonatural transformations, Schur functors compose associatively by a universal property

**Remember:** Defined everywhere and natural in every functor, Schur functors compose like functors.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 20C30, 18M05. arXiv math.RT, math.CT. Level 4: research.

**Definition.** An abstract Schur functor is an endofunctor given on every Cauchy-complete symmetric monoidal linear category C, which commutes up to coherent isomorphism with every strong symmetric monoidal linear functor G: C → D. Formally, it is a pseudonatural endotransformation of the forgetful 2-functor U from such categories to categories.

**Problem.** Abstract Schur functors are equivalent to polynomial species. Composition of Schur functors, called plethysm, makes polynomial species an associative, unital monoidal category.

**How the definition helps.** Pseudonatural endotransformations of U compose like functors, so plethysm is composition and its associator, unitors and pentagon come for free, not from Young symmetrizers. U is represented by the Cauchy completion of the linearized permutation groupoid, so these transformations are polynomial species. This representability theorem is the real content, and the page only sketches it.

**nLab:** [Schur functor](https://ncatlab.org/nlab/show/Schur+functor). It says: “the Schur functors S<sub>R</sub> are precisely those functors that are defined on all symmetric monoidal Cauchy complete linear C and that are pseudonatural with respect to change of base G: C → D!”

**Sources:**

- [John C. Baez, Joe Moeller, Todd Trimble, Schur functors and categorified plethysm, 2021, arXiv:2106.00190](https://arxiv.org/abs/2106.00190)

### A universal shadow makes every known Morita invariance result an immediate corollary

**Remember:** Prove it once for the universal shadow; every shadow inherits it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18M10, 16E40. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A universal shadow of a bicategory B is a shadow, a trace-like functor on endomorphism 1-cells, through which every other shadow of B factors essentially uniquely. Precisely, it takes values in a category U such that, for every category D, composing with functors U → D gives an equivalence to D-valued shadows of B.

**Problem.** Morita invariance holds for the universal shadow on the free adjunction bicategory. Every known Morita invariance result for Hochschild homology and its variants is an immediate corollary.

**How the definition helps.** Every shadow factors through the universal one, so a Morita invariance fact proved for the universal shadow passes to all shadows. The free adjunction bicategory suffices, because in our own explanation any adjunction in another bicategory is its image under a functor. The hard part is to compute the Hochschild homology of the free adjunction bicategory.

**Paper or page:** [Shadows are Bicategorical Traces](https://arxiv.org/abs/2109.02144). It says: “Using the universal shadow on the free adjunction bicategory, we can then establish a universal Morita invariance theorem, of which all known cases are immediate corollaries.”

**Sources:**

- [Kathryn Hess and Nima Rasekh, Shadows are Bicategorical Traces, arXiv:2109.02144 (2021)](https://arxiv.org/abs/2109.02144)

### Coherent multiplication permits a free-loop String model

**Remember:** Move the product through an equivalence instead of forcing strict laws.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories). arXiv math.CT, math.DG. Level 4: research.

**Definition.** A coherent Lie 2-group is a smooth monoidal groupoid whose group laws hold only up to specified isomorphisms (associator, unitors and chosen weak inverses) that satisfy the pentagon, triangle and adjunction identities. Such laws can be transported across any smooth equivalence of groupoids, which strict laws cannot (our own).

**Problem.** For compact, simple, simply connected G, the string group String(G), its 3-connected cover, has a coherent Lie 2-group model whose arrows starting at the unit form the basic circle extension of the free loop group. No strict Lie 2-group model has this source fibre.

**How the definition helps.** Coherent laws survive transport across a smooth equivalence, so a known model can be moved onto a groupoid with this source fibre (our own). The cited obstruction shows that no strict model has the same source fibre.

**Paper or page:** [Quasi-periodic paths and a string 2-group model from the free loop group](https://arxiv.org/abs/1702.01514v2). It says: “there does not exist a strict Lie 2-group model for the string group of G that has L̂G as source-fibre.”

**Sources:**

- [Murray, Roberts and Wockel, Quasi-Periodic Paths and a String 2-Group Model from the Free Loop Group](https://doi.org/10.5802/jolt.988)
- [Murray, Roberts and Wockel, Quasi-periodic paths and a string 2-group model from the free loop group, Corollary 2.6](https://arxiv.org/abs/1702.01514v2)

### Doctrinal adjunction becomes a statement about conjunctions in a double category

**Remember:** Lax arrows horizontal, colax arrows vertical: the adjunction pairs one of each.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18N15, 18A40. arXiv math.CT. Level 4: research.

**Definition.** For a 2-monad T and strict algebras a: TA → A and b: TB → B, a lax morphism f: A → B carries a 2-cell b·Tf ⇒ f·a, and a colax morphism carries one in the opposite direction, each satisfying the unit and multiplication axioms. The double category T-Alg has lax morphisms as horizontal arrows, colax morphisms as vertical arrows, and squares compatible with both comparisons.

**Problem.** Kelly's doctrinal adjunction says that, for an adjunction f ⊣ u of T-algebras, lax structures on u correspond by mates to colax structures on f. In T-Alg, this says that the forgetful double functor creates conjunctions.

**How the definition helps.** A conjunction pairs a horizontal arrow with a vertical one, so it can hold a lax u and a colax f at once. In 2-category terms, the statement mixes morphisms from two different 2-categories. The mate calculus still does the work; the double category gives it a clean statement.

**nLab:** [doctrinal adjunction](https://ncatlab.org/nlab/show/doctrinal+adjunction), [monoidal adjunction](https://ncatlab.org/nlab/show/monoidal+adjunction). It says: “Doctrinal adjunction can be stated cleanly in terms of double categories.”

**Sources:**

- [G. M. Kelly, Doctrinal adjunction, in: Category Seminar, Lecture Notes in Math. 420 (1974)](https://doi.org/10.1007/BFb0063105)
- [M. Shulman, Comparing composites of left and right derived functors, New York J. Math. 17 (2011) 75–125, arXiv:0706.2868](https://arxiv.org/abs/0706.2868)

### Enhanced 2-categories make limits of lax morphisms statable

**Remember:** Mark strict maps tight, and limits remember which projections are strict.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18N15, 18D20. arXiv math.CT. Level 4: research.

**Definition.** An enhanced 2-category, or 𝓕-category, is a 2-category whose 1-morphisms (the loose ones) include a chosen class of tight ones, with the same 2-cells between both kinds. Formally, it is a category enriched in the category 𝓕 of full embeddings of categories.

**Problem.** For a 2-monad, the forgetful functors from the 𝓕-categories of algebras with strict, pseudo, lax or colax morphisms create a class of 𝓕-weighted limits, the rigged limits (Lack and Shulman).

**How the definition helps.** Tight morphisms let a limit record which of its projections are strict and that they jointly detect strictness. A plain 2-category of algebras and lax morphisms cannot express this. The 2-monad theory that proves creation is still needed.

**nLab:** [enhanced 2-category](https://ncatlab.org/nlab/show/enhanced+2-category). It says: “they allow us to define the classes of rigged limits, which are the 𝓕-weighted limits that are created by the forgetful functors from the various 𝓕-categories of algebras and strict/pseudo/lax/colax morphisms over a 2-monad”

**Sources:**

- [Stephen Lack, Michael Shulman, Enhanced 2-categories and limits for lax morphisms, Advances in Mathematics 229 (2012), arXiv:1104.2111](https://arxiv.org/abs/1104.2111)

### Flexible limits give all bilimits in strict 2-categories

**Remember:** A flexible weight is a strict retract of its pseudo-version.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18A30, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A weight Φ is flexible if it is a strict retract of QΦ, the weight whose strict maps out of it are the pseudonatural maps out of Φ; that is, the canonical map q: QΦ → Φ has a strict section. A flexible limit is a strict 2-limit with a flexible weight.

**Problem.** A strict 2-category with all flexible limits has all bilimits. An example is the 2-category of algebras for a 2-monad with pseudo morphisms, which lacks many strict 2-limits.

**How the definition helps.** A flexible weight is a retract of QΦ, so its strict limit is equivalent to the pseudo-limit and is a bilimit (our own). Strict pseudo-limits are flexible, and every bilimit can be computed as one (Bird, Kelly, Power, Street). The class includes PIE-limits (products, inserters, equifiers), and 2-monad algebras with pseudo morphisms have every flexible limit the base has (our own).

**nLab:** [flexible limit](https://ncatlab.org/nlab/show/flexible+limit). It says: “Furthermore, all PIE-limits and therefore all strict pseudo-limits are flexible; thus any strict 2-category which admits all flexible limits also admits all 2-limits.”

**Sources:**

- [Greg J. Bird, G. Max Kelly, A. John Power, Ross Street, Flexible limits for 2-categories, J. Pure Appl. Algebra 61 (1989) 1–27](https://doi.org/10.1016/0022-4049(89)90065-0)

### Lax 𝓕-adjunctions are lax adjunctions whose adjoints are still unique

**Remember:** Lax everywhere, but pseudo on the tight maps.

*True by definition. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A lax 𝓕-adjunction is a lax adjunction between 𝓕-functors whose unit and counit have tight components and whose naturality 2-cells are invertible on tight arrows, lax only on loose ones. Its triangle comparisons are invertible.

**Problem.** Two lax 𝓕-right adjoints of the same functor are equivalent.

**How the definition helps.** The comparisons between two right adjoints compose one unit with the other counit (our own). Their composites reduce to identities by the triangle comparisons, because the naturality cells needed sit at the tight unit and counit components, where they are invertible (our own).

**nLab:** [lax F-adjunction](https://ncatlab.org/nlab/show/lax+F-adjunction). It says: “The following theorem seems to fail for 2-adjunctions involving lax transformations; the fact that it holds for lax 𝓕-adjunctions thus means that they are significantly better-behaved and more interesting.”

**Sources:**

- [Peter T. Johnstone, Fibrations and partial products in a 2-category, Applied Categorical Structures 1 (1993) 141–179](https://doi.org/10.1007/BF00880041)

### Clubs over the lax slice map fully faithfully to monads

**Remember:** Lax-slice clubs keep every morphism that their monads have.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 18N15 (2-dimensional monad theory), 18M60, 18C15. arXiv math.CT. Level 4: research.

**Definition.** A Kelly club over the lax slice is a monoid for the substitution product in CAT⫽Cat, the lax slice of categories over Cat. A morphism there is a functor together with a natural transformation between the two arity functors, not a strictly commuting triangle.

**Problem.** For Kelly's clubs over the lax slice, the functor Mon(CAT⫽Cat, ∘) → Mnd(Cat) from clubs to monads on Cat is fully faithful.

**How the definition helps.** Lax-slice morphisms allow a transformation between arity functors, so they match every monad morphism and none is lost. For the earlier notions of club, over the symmetric monoidal monad or over FinSet, the functor to monads is not fully faithful.

**nLab:** [club](https://ncatlab.org/nlab/show/club). It says: “This has the advantage that the resulting functor Mon(CAT⫽Cat,∘) → Mnd(Cat) from clubs to monads on Cat is fully faithful, which it is not for the previous notions of club.”

**Sources:**

- [G. M. Kelly, On clubs and data-type constructors, in Applications of Categories in Computer Science, LMS Lecture Note Series 177, Cambridge University Press (1992) 163–190](https://doi.org/10.1017/CBO9780511525902.010)

### Every tricategory is equivalent to a Gray-category

**Remember:** Everything strict except sliding two 2-cells past each other.

*Makes the theorem clean to state or prove.* MSC 18N20 (Tricategories, weak n-categories, coherence, semi-strictification). arXiv math.CT. Level 4: research.

**Definition.** A Gray-category is a 3-category that is strict except for interchange: two 2-cells side by side slide past each other only up to a coherent isomorphism. Formally, it is a category enriched in strict 2-categories with the Gray tensor product.

**Problem.** Every tricategory is equivalent to a Gray-category (Gordon, Power and Street). Not every tricategory is equivalent to a strict 3-category.

**How the definition helps.** The interchange isomorphism keeps exactly the data that a braiding needs, so Gray-categories can hold tricategories that strict 3-categories cannot (our own). A nonsymmetric braided monoidal category gives a doubly degenerate tricategory that is not equivalent to a strict 3-category. The coherence theorem of Gordon, Power and Street proves that Gray-categories suffice (our own).

**nLab:** [Gray-category](https://ncatlab.org/nlab/show/Gray-category), [tricategory](https://ncatlab.org/nlab/show/tricategory), [semi-strict infinity-category](https://ncatlab.org/nlab/show/semi-strict+infinity-category). It says: “Not every tricategory is equivalent to a fully strict 3-category; any doubly-degenerate braided monoidal category which is not symmetric is an example.”

**Sources:**

- [Robert Gordon, A. John Power, Ross Street, Coherence for tricategories, Mem. Amer. Math. Soc. 117 no. 558 (1995)](https://doi.org/10.1090/memo/0558)

### Thin simplices pick out the nerves of strict ω-categories

**Remember:** Mark which simplices are identities, and the nerve remembers the ω-category.

*Makes the theorem clean to state or prove.* MSC 18N30 (Strict omega-categories, computads, polygraphs), 18N50. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A stratified simplicial set marks some positive-dimensional simplices as thin, including every degenerate one, so that thin simplices stand for composites and identities. It is strict complicial if every complicial horn has exactly one thin filler and the complicial thinness extension conditions hold.

**Problem.** The nerves of strict ω-categories are exactly the complicial sets. This is the Street–Roberts conjecture, proved by Verity.

**How the definition helps.** Thin simplices record which simplices are composites, and unique fillers make composition single-valued, as in a strict ω-category (our own). A plain simplicial set cannot tell composites from other simplices. The real work is in Verity's long proof.

**nLab:** [thin element](https://ncatlab.org/nlab/show/thin+element). It says: “Street and Roberts conjectured that the nerves of strict ω-categories could be characterized as stratified simplicial sets such that”

**Sources:**

- [D. Verity, Complicial Sets, arXiv:math/0410412 (2004)](https://arxiv.org/abs/math/0410412)

### A good cylinder makes it easier to recognize a model category

**Remember:** The cylinder makes cofibrations anodyne, so one check does two jobs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A32. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A cylindrical premodel category has a functorial cylinder, with a right adjoint, that respects the cofibrations C and anodyne cofibrations AC. Its pushout product with the boundary inclusion preserves C and AC, and its pushout product with either end inclusion sends every map in C into AC.

**Problem.** A premodel category is a model category exactly when W = AF ∘ AC satisfies 2-out-of-3. This needs three conditions in general, but two in a cylindrical premodel category (Cavallo and Sattler).

**How the definition helps.** The end inclusions turn cofibrations into anodyne cofibrations, so the first of the three conditions implies the second (Cavallo and Sattler, Lemma 3.22). This simplifies building model structures, for example on cubical sets. The remaining two conditions still need a proof in each case.

**nLab:** [premodel category](https://ncatlab.org/nlab/show/premodel+category). It says: “In a cylindrical premodel structure, the first condition of Proposition 1 implies the second (Cavallo &amp; Sattler 2022, Lemma 3.22), yielding a simplified recognition theorem”

**Sources:**

- [Evan Cavallo, Christian Sattler, Relative elegance and cartesian cubes with one connection, arXiv:2211.14801 (2022)](https://arxiv.org/abs/2211.14801)
- [Reid William Barton, A model 2-category of enriched combinatorial premodel categories, PhD thesis, arXiv:2004.12937 (2020)](https://arxiv.org/abs/2004.12937)

### Chosen fillers give a model category where every object is fibrant

**Remember:** Do not just know that fillers exist; carry them with you.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50, 18C15. arXiv math.AT, math.CT. Level 4: research.

**Definition.** An algebraic fibrant object is an object X with chosen fillers: for every generating acyclic cofibration j: A → B and every map A → X, a chosen extension B → X. Its morphisms preserve the chosen extensions.

**Problem.** Let C be cofibrantly generated, with monomorphic acyclic cofibrations and generating acyclic cofibrations having finitely presentable domains. Algebraic fibrant objects form a complete and cocomplete model category Quillen equivalent to C, and every object is fibrant.

**How the definition helps.** Chosen extensions make algebraic fibrant objects the algebras of a monad, so free algebraic fibrant replacements exist (our own). Nikolaus’s transfer theorem gives the model structure and the Quillen equivalence. Every object is fibrant because its chosen extensions solve the lifting problems against the generators (our own).

**nLab:** [model structure on algebraic fibrant objects](https://ncatlab.org/nlab/show/model+structure+on+algebraic+fibrant+objects). It says: “Under mild conditions, the category Alg C of algebraic fibrant objects in a model category C forms itself naturally a model category which is Quillen equivalent to C, and in which all objects are fibrant.”

**Sources:**

- [Thomas Nikolaus, Algebraic models for higher categories (2010), arXiv:1003.1342](https://arxiv.org/abs/1003.1342)

### Closure rules give a smallest basic localizer, which is classical homotopy theory

**Remember:** Closed under identities, two-out-of-three, retractions, terminal objects and Theorem A.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A basic localizer is a class W of functors between small categories given only by closure rules: it contains identities, satisfies two-out-of-three, and contains every i with a retraction r (ri = id) such that ir ∈ W. It contains A → 1 when A has a terminal object, and it contains a functor A → B over C whenever every induced A/c → B/c is in W.

**Problem.** The smallest basic localizer is the class of functors whose nerve is a weak homotopy equivalence. Grothendieck conjectured this, and Cisinski proved it.

**How the definition helps.** The definition lists only closure rules, so any intersection of basic localizers is one, and a smallest one exists. The last rule is a form of Quillen's Theorem A, so facts such as 'every functor with an adjoint is in W' follow in a few lines. Identifying the smallest one with nerve weak equivalences is a real theorem.

**nLab:** [basic localizer](https://ncatlab.org/nlab/show/basic+localizer). It says: “Since the definition consists merely of closure conditions, the intersection of any family of basic localizers is again a basic localizer. It follows that there is a unique smallest basic localizer.”

**Sources:**

- [Denis-Charles Cisinski, Le localisateur fondamental minimal, Cahiers de Topologie et Géométrie Différentielle Catégoriques 45 (2004) 109–140](http://www.numdam.org/item/CTGDC_2004__45_2_109_0/)
- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](http://www.numdam.org/item/AST_2005__301__R1_0/)

### Constructive definitions give the Kan–Quillen model structure on simplicial sets

**Remember:** Lifts are data, cofibrations are decidable, and Kan complexes define weak equivalences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50, 03F65. arXiv math.AT, math.LO. Level 4: research.

**Definition.** Constructively, a Kan fibration comes with a chosen filler for every horn lifting problem, given as a section of the map from solutions to problems. A cofibration is a levelwise decidable inclusion in which it is decidable whether a simplex outside the image is degenerate. Weak equivalences are homotopy equivalences between cofibrant Kan complexes, extended to all maps by cofibrant and fibrant replacement.

**Problem.** With these definitions, the Kan–Quillen model structure on simplicial sets exists constructively, without excluded middle or choice. With excluded middle and choice, it is the classical one (Henry; Gambino, Sattler and Szumiło).

**How the definition helps.** Each definition supplies, as data, the witness that a classical proof would get from excluded middle or choice (our own). Specified fillers give the lifts, and decidable degeneracy gives the test for cofibrancy (our own). The constructive Kan–Quillen theorems then prove the model axioms and recover the usual classes classically (our own).

**nLab:** [constructive model structure on simplicial sets](https://ncatlab.org/nlab/show/constructive+model+structure+on+simplicial+sets). It says: “due to the constructive nature of the existential quantifier, being an (acyclic) fibration means we have a section of the map from the set of solutions to lifting problems to the set of lifting problems.”

**Sources:**

- [S. Henry, A constructive account of the Kan–Quillen model structure and of Kan's Ex∞ functor, arXiv:1905.06160 (2019)](https://arxiv.org/abs/1905.06160)
- [N. Gambino, C. Sattler, K. Szumiło, The constructive Kan–Quillen model structure: two new proofs, arXiv:1907.05394 (2019)](https://arxiv.org/abs/1907.05394)

### Derivators are built so that homotopy exact squares have a combinatorial test

**Remember:** Test the square’s Kan extension comparison in every derivator.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A40. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A lax square of small categories, with a natural transformation vf ⇒ gu, is homotopy exact if its Beck–Chevalley comparison between the two ways to restrict and Kan extend is invertible in every derivator.

**Problem.** A lax square f: A → B, u: A → C, v: B → D, g: C → D is homotopy exact exactly when, for all b ∈ B and c ∈ C, each comparison (b/A/c) → Hom<sub>D</sub>(vb,gc) to the discrete target induces a weak equivalence of nerves.

**How the definition helps.** Derivators compute Kan extensions pointwise, so the comparison reduces to homotopy colimits over categories of factorizations (our own). Cisinski’s theorem says it is invertible exactly when each factorization category over an arrow vb → gc has weakly contractible nerve, and these are the fibres over the discrete target (our own).

**nLab:** [exact square](https://ncatlab.org/nlab/show/exact+square), [derivator](https://ncatlab.org/nlab/show/derivator), [homotopy exact square](https://ncatlab.org/nlab/show/homotopy+exact+square). It says: “The notion of derivator is essentially designed exactly so that this argument works, up until the last step”

**Sources:**

- [Moritz Groth, Derivators, pointed derivators, and stable derivators, Algebr. Geom. Topol. 13 (2013), arXiv:1112.3840](https://arxiv.org/abs/1112.3840)

### Derivators show homotopy types freely complete the point under homotopy colimits

**Remember:** A homotopy category that remembers diagrams, so homotopy colimits make sense.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N60, 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A derivator is a homotopy category that remembers diagram categories: a strict 2-functor Catᵒᵖ → CAT whose restriction functors all have both adjoints, the homotopy Kan extensions, computed pointwise by comma categories. It also sends disjoint unions to products up to equivalence, and evaluations at objects jointly detect isomorphisms.

**Problem.** The free derivator under homotopy colimits on the terminal category is the derivator of simplicial sets (Cisinski). So homotopy types act on every derivator.

**How the definition helps.** Derivators make 'free cocompletion under homotopy colimits' a question of ordinary category theory, without assuming that homotopy types matter. The point acts on every derivator, so by the universal property homotopy types do too. Identifying the free cocompletion with simplicial sets is a real theorem.

**nLab:** [derivator](https://ncatlab.org/nlab/show/derivator). It says: “Note that in order to conclude this, we didn't take for granted that homotopy types should be important: its universal property is formulated purely with ordinary category theory.”

**Sources:**

- [Denis-Charles Cisinski, Propriétés universelles et extensions de Kan dérivées, Theory and Applications of Categories 20 (2008), no. 17](http://www.tac.mta.ca/tac/volumes/20/17/20-17abs.html)
- [Alex Heller, Homotopy theories, Memoirs of the American Mathematical Society 71, no. 383 (1988)](https://doi.org/10.1090/memo/0383)

### Filtered complete modules give curved algebras a homotopy theory

**Remember:** With no homology, measure weak equivalence on the associated graded.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 17B70. arXiv math.AT, math.RA. Level 4: research.

**Definition.** A predifferential on a complete filtered module M, one with M ≅ limₚ M/FᵖM, is a filtration-preserving degree −1 map d with d²(FᵖM) ⊆ Fᵖ⁺¹M for every p, so that d squares to zero on the associated graded. A filtered map commuting with d is a graded weak equivalence if it is a quasi-isomorphism on every associated graded piece.

**Problem.** Filtered complete modules, with weak equivalences detected on the associated graded, give curved algebras a homotopy theory with resolutions. In it, André-Quillen cohomology of curved algebras can be defined and computed.

**How the definition helps.** Curved algebras have d² ≠ 0, so homology and quasi-isomorphism make no sense, but on the associated graded d² = 0 and homology exists. The hard part is the theory of curved operads that are not augmented, with bar and cobar constructions and Koszul duality.

**Paper or page:** [André-Quillen cohomology in the context of curved algebras](https://arxiv.org/abs/2401.14309). It says: “For curved algebras however, the notion of quasi-isomorphism is meaningless. … To get a homotopical context with an appropriate notion of weak equivalence, we consider filtered complete modules with a predifferential inducing a differential on the associated graded.”

**Sources:**

- [Joan Bellier-Millès, Sinan Yalin, André-Quillen cohomology in the context of curved algebras, arXiv:2401.14309 (2024)](https://arxiv.org/abs/2401.14309)

### Generalized Reedy categories give Reedy model structures for shapes with symmetries

**Remember:** Allow symmetries, but treat each lowering map like an epimorphism for them.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A generalized Reedy category has degrees in ℕ and two wide subcategories R₊ and R₋ whose common arrows are exactly the isomorphisms, which keep degree. Noninvertible arrows of R₊ raise degree, those of R₋ lower it, and every arrow factors as an R₋ arrow then an R₊ arrow, uniquely up to isomorphism. Isomorphisms act freely on lowering maps: if θ is invertible, f ∈ R₋ and θf = f, then θ = id.

**Problem.** For a small generalized Reedy category R and an R-projective model category M, diagrams R → M carry the generalized Reedy model structure. Examples of indexing categories include Segal’s Γ, Connes’ Λ and the tree category Ω.

**How the definition helps.** Allowing isomorphisms admits Γ, Λ and Ω, while the factorizations still build diagrams degree by degree from latching and matching objects with group actions (Berger and Moerdijk). The free-action condition is used in exactly one lemma, about matching objects. An ordinary Reedy category has no isomorphisms other than identities, so Γ, Λ and Ω do not fit it.

**nLab:** [generalized Reedy category](https://ncatlab.org/nlab/show/generalized+Reedy+category), [generalized Reedy model structure](https://ncatlab.org/nlab/show/generalized+Reedy+model+structure). It says: “The notion of generalized Reedy category lifts this restriction, while maintaining the truth of the main theorem about Reedy categories: the existence of the Reedy model structure.”

**Sources:**

- [C. Berger, I. Moerdijk, On an extension of the notion of Reedy category, Mathematische Zeitschrift 269 (2011) 977–1004, arXiv:0809.3341](https://arxiv.org/abs/0809.3341)

### Grothendieck's inspiring assumption is easy for homotopy theories, not homotopy categories

**Remember:** Spaces are the free cocompletion of a point.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N60, 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The ∞-category S of spaces is the free cocompletion of a point: for every cocomplete ∞-category D, evaluating at the point gives an equivalence Funᴸ(S,D) ≃ D, where Funᴸ means colimit-preserving functors.

**Problem.** Every self-equivalence of the ∞-category of spaces is naturally equivalent to the identity, whose space of natural automorphisms is contractible.

**How the definition helps.** A self-equivalence of S preserves colimits, so the free cocompletion property determines it, and its natural automorphisms, by its value at the point (our own). It sends the point, the terminal object, to a terminal object, and the space of equivalences between terminal objects is contractible (our own).

**nLab:** [hypothèse inspiratrice](https://ncatlab.org/nlab/show/hypoth%C3%A8se+inspiratrice). It says: “The hypothèse inspiratrice can be proven relatively easily if one re-formulates the question for a lift of the homotopy category to derivators, (∞,1)-category theory, or some other such setting for homotopy theory.”

**Sources:**

- [Bertrand Toën, Gabriele Vezzosi, Segal topoi and stacks over Segal categories, arXiv:math/0212330 (2002)](https://arxiv.org/abs/math/0212330)
- [Denis-Charles Cisinski, Propriétés universelles et extensions de Kan dérivées, Theory and Applications of Categories 20 (2008) 605–649](http://www.tac.mta.ca/tac/volumes/20/17/20-17abs.html)

### In elegant Reedy categories, Reedy cofibrations are just monomorphisms

**Remember:** Each element is one degeneracy of one nondegenerate element, as in Δ.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A25. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A Reedy category R is elegant if, in every presheaf of sets on R, each element is a degeneracy of a nondegenerate element in exactly one way: one degree-lowering arrow and one nondegenerate element.

**Problem.** For an elegant Reedy category R, the Reedy and injective model structures on presheaves over R coincide. This holds for values in simplicial sets, or in any Cisinski model category.

**How the definition helps.** Elegance makes the Reedy cofibrations exactly the monomorphisms, so the two model structures match. Both have the objectwise weak equivalences, so they agree once their cofibrations agree. Examples are Δ and Joyal's Θₙ, so every simplicial presheaf on them is Reedy cofibrant.

**nLab:** [elegant Reedy category](https://ncatlab.org/nlab/show/elegant+Reedy+category). It says: “The principal theorem about elegant Reedy categories is that the Reedy model structure on presheaves (i.e. contravariant diagrams) over an elegant Reedy category coincides with the injective model structure.”

**Sources:**

- [Julia E. Bergner, Charles Rezk, Reedy categories and the Θ-construction, arXiv:1110.1066 (2011)](https://arxiv.org/abs/1110.1066)

### Judging functors by their nerves lets small categories model every homotopy type

**Remember:** Judge a functor only by what it does to the space of its nerve.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55P15, 18N50. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A Thomason weak equivalence is a functor between small categories whose nerve, the simplicial set of strings of composable arrows, is a weak homotopy equivalence. The Thomason model structure on Cat has these weak equivalences.

**Problem.** Thomason weak equivalences give a model structure on Cat that is Quillen equivalent to simplicial sets. So small categories model all homotopy types, not only homotopy 1-types.

**How the definition helps.** Judging functors by their nerves gives the claim that categories model all homotopy types a precise meaning. With equivalence of categories as sameness, groupoids model only homotopy 1-types. The real content is Thomason's theorem.

**nLab:** [Thomason model structure](https://ncatlab.org/nlab/show/Thomason+model+structure), [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis). It says: “if we declare a functor between categories to be a weak equivalence iff its nerve is a weak equivalence of simplicial sets, then all homotopy types can be modeled by 1-categories in this way”

**Sources:**

- [R. W. Thomason, Cat as a closed model category, Cahiers de Topologie et Géométrie Différentielle 21 (1980) 305–324](http://www.numdam.org/item/?id=CTGDC_1980__21_3_305_0)

### Shared contraacyclic trivial objects make K(Proj) equivalent to K(Flat-Cot)

**Remember:** Share the trivial objects and the homotopy categories must agree.

*True by definition. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18G25, 18G80. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A complex X is contraacyclic if every chain map into X from a complex of projective R-modules is null-homotopic (our own). Both the projective and the flat contraacyclic model structures on complexes have exactly these complexes as their trivial objects (our own summary).

**Problem.** For every ring R, K(Proj) is triangle equivalent to K(Flat-Cot). These are the categories of complexes, up to chain homotopy, of projective modules and of flat cotorsion modules.

**How the definition helps.** Two model structures with the same trivial objects have the same weak equivalences, hence the same homotopy category (our own summary). Each homotopy category is its cofibrant and fibrant objects up to homotopy, which gives K(Proj) for one and K(Flat-Cot) for the other (our own). The work is in building the flat model structure from the flat cotorsion pair.

**Paper or page:** [Quillen equivalences inducing Grothendieck duality for unbounded chain complexes of sheaves](https://arxiv.org/abs/2104.10783v2), [Quillen equivalences inducing Grothendieck duality for unbounded chain complexes of sheaves](https://arxiv.org/abs/2104.10783v2). It says: “Consequently, we have triangulated equivalences K(Proj) ≅ Ho(𝔐<sup>proj<sub>ctr</sub></sup>) = Ho(𝔐<sup>flat<sub>ctr</sub></sup>) ≅ K(Flat-Cot) ≅ 𝒟(Flat).”

**Sources:**

- [S. Estrada and J. Gillespie, Quillen equivalences inducing Grothendieck duality for unbounded chain complexes of sheaves, Communications in Contemporary Mathematics 27 (2025), published online 2024](https://doi.org/10.1142/S0219199724500342)

### Stable derivators give triangulated categories whose cones have universal properties

**Remember:** Stable: pullback squares and pushout squares are the same squares.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18G80, 55U35. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A derivator is stable if it is pointed, with a zero object, and every coherent square is a homotopy pullback exactly when it is a homotopy pushout.

**Problem.** For a strong stable derivator D, each diagram category D(X) is canonically triangulated. Suspension is an equivalence, and coherent arrows have cones given by homotopy pushouts.

**How the definition helps.** Stability identifies suspension and loops as inverse equivalences through their defining squares (our own). Taking the homotopy pushout of Y ← X → 0 gives the cone of a coherent arrow X → Y (our own). Strongness supplies coherent representatives for arrows, and the triangulation theorem verifies the triangle axioms (our own).

**nLab:** [stable derivator](https://ncatlab.org/nlab/show/stable+derivator), [pointed derivator](https://ncatlab.org/nlab/show/pointed+derivator). It says: “This resolves many common issues with triangulated categories stemming from the fact that at the level of a homotopy category, certain desirable maps can only be stipulated to exist with some weak properties”

**Sources:**

- [Moritz Groth, Derivators, pointed derivators, and stable derivators, Algebraic &amp; Geometric Topology 13 (2013) 313–374, arXiv:1112.3840](https://arxiv.org/abs/1112.3840)

### The commutative monoid axiom gives model structures on commutative monoids

**Remember:** Symmetric powers of trivial cofibrations must stay trivial cofibrations.

*Rules out counterexamples. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18C40, 18M05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The commutative monoid axiom says that symmetric powers of trivial cofibrations are trivial cofibrations: h□ⁿ/Σₙ is one for every trivial cofibration h and n ≥ 1 (our own). Here h□ⁿ is the n-fold pushout product of h, and Σₙ permutes its factors.

**Problem.** Let C be a cofibrantly generated symmetric monoidal model category with the monoid and commutative monoid axioms and the smallness needed for transfer along the free commutative monoid functor. Then commutative monoids in C carry the transferred model structure.

**How the definition helps.** White’s filtration of free commutative monoid cell attachments has the symmetric powers h□ⁿ/Σₙ as its pieces, and the axiom makes them trivial cofibrations (our own). The monoid axiom then makes the attachments weak equivalences (our own). In unbounded chain complexes over a positive-characteristic field, a free commutative algebra on a contractible disk can have extra homology (our own).

**nLab:** [commutative monoid in a symmetric monoidal model category](https://ncatlab.org/nlab/show/commutative+monoid+in+a+symmetric+monoidal+model+category). It says: “This is why the model structure on commutative monoids may not always exist even when the model structure on E-infinity monoids in a symmetric monoidal model category does.”

**Sources:**

- [David White, Model structures on commutative monoids in general model categories, Journal of Pure and Applied Algebra 221 (2017) 3124–3168, arXiv:1403.6759](https://arxiv.org/abs/1403.6759)

### The Frobenius condition gives right properness of Kan complexes without topological realization

**Remember:** Frobenius makes pullback along fibrations safe, so right properness follows.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A weak factorization system (L,R) has the Frobenius property if L is stable under pullback along R: pulling back any map in L along any map in R gives a map in L. In a model category, it is applied to trivial cofibrations and fibrations.

**Problem.** The Quillen model structure for Kan complexes is right proper. Through the Frobenius condition, this follows without topological realization or minimal fibrations (Gambino and Sattler).

**How the definition helps.** Both halves of a weak equivalence, factored as a trivial cofibration then a trivial fibration, survive pullback along a fibration, so right properness follows (our own). Trivial fibrations are always stable under pullback, and the Frobenius property keeps the trivial cofibration. Gambino and Sattler obtain the Frobenius property from uniform fibrations.

**Paper or page:** [The Frobenius Condition, Right Properness, and Uniform Fibrations](https://arxiv.org/abs/1510.00669), [A short proof of the Frobenius property for generic fibrations](https://arxiv.org/abs/2402.04227). It says: “we obtain a new proof that the Quillen model structure for Kan complexes is right proper, avoiding entirely the use of topological realization and minimal fibrations”

**Sources:**

- [Nicola Gambino and Christian Sattler, The Frobenius Condition, Right Properness, and Uniform Fibrations, Journal of Pure and Applied Algebra 221 (12) (2017), 3027–3068](https://doi.org/10.1016/j.jpaa.2017.02.013)
- [Reid Barton, A short proof of the Frobenius property for generic fibrations, Math. Struct. Comp. Sci. 35 (2025), e20](https://arxiv.org/abs/2402.04227)

### The monoid axiom gives a model structure on monoids

**Remember:** Tensor a trivial cofibration with anything, glue, and stay a weak equivalence.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18M05, 55P43. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The monoid axiom says that trivial cofibrations stay weak equivalences after tensoring with any object and gluing: every transfinite composite of pushouts of maps h⊗X, with h a trivial cofibration and X any object, is a weak equivalence.

**Problem.** Let a monoidal model category be cofibrantly generated, have all objects small, and satisfy the monoid axiom. Then monoids in it carry the transferred model structure (Schwede and Shipley).

**How the definition helps.** Free monoid cell attachments are filtered with stages built from maps h⊗X, so the monoid axiom makes them weak equivalences (our own). The transfer theorem of Schwede and Shipley uses this to give the model structure (our own).

**nLab:** [monoid axiom in a monoidal model category](https://ncatlab.org/nlab/show/monoid+axiom+in+a+monoidal+model+category), [monoidal model category](https://ncatlab.org/nlab/show/monoidal+model+category). It says: “The monoid axiom is an extra condition on a monoidal model category that helps to make its model structure on monoids in a monoidal model category exist and be well behaved.”

**Sources:**

- [Stefan Schwede, Brooke Shipley, Algebras and modules in monoidal model categories, Proc. London Math. Soc. 80 (2000) 491–511, arXiv:math/9801082](https://arxiv.org/abs/math/9801082)

### The simplicial model category axiom makes mapping spaces Kan complexes

**Remember:** Cofibration in, fibration out: the map of mapping spaces is Kan.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The mapping-space axiom of a simplicial model category says that for every cofibration X → Y and fibration A → B, the map Map(Y,A) → Map(X,A) ×<sub>Map(X,B)</sub> Map(Y,B) is a Kan fibration, trivial if either input is trivial.

**Problem.** From a cofibrant object X, one with ∅ → X a cofibration, to a fibrant object A, one with A → 1 a fibration, the simplicial set of maps is a Kan complex.

**How the definition helps.** Take the cofibration ∅ → X and the fibration A → 1 (our own). Their comparison is Map(X,A) → ∗, since maps out of the initial object or into the terminal object form a point (our own). This is precisely the Kan condition.

**nLab:** [simplicial model category](https://ncatlab.org/nlab/show/simplicial+model+category). It says: “If X ∈ 𝒞 is cofibrant and A ∈ 𝒞 is fibrant, then 𝒞(X,A) is fibrant in sSet, hence is a Kan complex.”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Realization recovers the topological String classifying space

**Remember:** Realize the smooth fiber to recover the topological fiber.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 57R15. arXiv math.CT, math.DG. Level 4: research.

**Definition.** The smooth String(n) classifying stack is the homotopy fibre of the smooth class ½p₁: BSpin(n) → B³U(1) over the base point. So its objects are Spin(n)-bundles with a chosen trivialization of ½p₁.

**Problem.** For n ≥ 5, topological realization of this smooth classifying stack gives the classifying space of String(n), the 3-connected cover of Spin(n).

**How the definition helps.** The smooth stack is the same homotopy fibre that defines the topological BString(n), so it suffices that realization preserves this fibre. The proof shows this using a model of B³U(1) built from finite products of circles in each simplicial degree.

**nLab:** [string 2-group](https://ncatlab.org/nlab/show/string+2-group). It says: “indeed maps under \|−\| to the topological string group:”

**Sources:**

- [Fiorenza, Schreiber and Stasheff, Čech cocycles for differential characteristic classes](https://doi.org/10.4310/atmp.2012.v16.n1.a5)

### The π∗-Kan condition makes realization preserve homotopy pullbacks

**Remember:** Kan-like homotopy groups in the levels make realization keep homotopy pullbacks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 4: research.

**Definition.** A bisimplicial set X satisfies the π∗-Kan condition if, for each n ≥ 1, the homotopy groups πₙ(\|Xₘ,•\|,b) at all basepoints b ∈ Xₘ,₀ form a simplicial set in m that is a Kan fibration over the simplicial set of basepoints.

**Problem.** Let f: X → Y be a map of bisimplicial sets satisfying the π∗-Kan condition, with π₀(f) a Kan fibration of simplicial sets. Derived realization preserves levelwise homotopy pullback squares along f.

**How the definition helps.** The condition packages homotopy groups at varying basepoints into fibrations in the remaining simplicial direction (our own). With the component fibration, the Bousfield–Friedlander homotopy pullback theorem gives the realization result (our own).

**nLab:** [π-Kan condition](https://ncatlab.org/nlab/show/%CF%80-Kan+condition), [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “The π∗-Kan condition (Bousfield &amp; Friedlander 1978, B.3) on a bisimplicial set guarantees that its geometric realization behaves well with respect to homotopy pullback”

**Sources:**

- [A. K. Bousfield, E. M. Friedlander, Homotopy theory of Γ-spaces, spectra, and bisimplicial sets, Lecture Notes in Mathematics 658 (1978) 80–130](https://doi.org/10.1007/BFb0068711)

### Unique thin fillers give a nonabelian Dold–Kan theorem

**Remember:** Unique thin fillers turn a Kan complex into algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 18G45, 18G50. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A simplicial T-complex is a simplicial set with some positive-dimensional simplices marked thin, including every degenerate one, in which every horn has exactly one thin filler. Also, if a thin simplex of dimension at least two has all faces but one thin, the last face is thin.

**Problem.** Ashley's theorem, which Dakin conjectured, says that simplicial T-complexes are equivalent to crossed complexes. A crossed complex is an algebraic object: a sequence of groups and groupoids with boundary maps and actions, a nonabelian kind of chain complex.

**How the definition helps.** Unique thin fillers make the operations used to extract a crossed complex single-valued (our own). Ashley’s equivalence theorem reconstructs the T-complex from this algebraic data (our own).

**nLab:** [thin element](https://ncatlab.org/nlab/show/thin+element). It says: “Ashley's theorem, conjectured by Dakin, is that the category of such T-complexes is equivalent to that of crossed complexes.”

**Sources:**

- [Ronald Brown, Philip J. Higgins, The equivalence of ∞-groupoids and crossed complexes, Cahiers de Topologie et Géométrie Différentielle 22 (1981) 371–386 (the cubical case)](https://www.numdam.org/item/?id=CTGDC_1981__22_4_371_0)

### Topological localizations are left exact by definition

**Remember:** Topological means: invert monomorphisms and keep finite limits.

*Rules out counterexamples.* MSC 18N55 (Localizations (e.g., simplicial localization, Bousfield localization)), 18N60, 18F10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A topological localization of a presheaf ∞-category is a reflective localization generated by a set of monomorphisms whose reflector preserves finite limits.

**Problem.** Topological localizations of ∞-presheaves on C correspond exactly to Grothendieck topologies on C. The class of maps that they invert is stable under pullback.

**How the definition helps.** The reflector preserves pullbacks, so pulling back an inverted map gives another inverted map (our own). Without left exactness this fails: localizing spaces at ∗ → ∗ ⊔ ∗ gives propositional truncation, which does not preserve the empty pullback of the two point inclusions (our own). Lurie’s classification identifies topological localizations with Grothendieck topologies (our own).

**nLab:** [topological localization](https://ncatlab.org/nlab/show/topological+localization). It says: “A topological localization is, by definition, a left exact localization at a set of monomorphisms; left exactness is part of the definition. A general localization at a set of monomorphisms need not be left exact.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, Annals of Mathematics Studies 170, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### An ∞-connected (∞,1)-topos has the shape of a point

**Remember:** Constant sheaves remember exactly the ∞-groupoids they came from.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55P55. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An (∞,1)-topos H is ∞-connected if its constant-sheaf functor LConst: ∞Grpd → H is fully faithful, so constant sheaves have the same mapping spaces as the ∞-groupoids they come from.

**Problem.** An ∞-connected (∞,1)-topos has the shape of the point.

**How the definition helps.** Full faithfulness makes the adjunction unit K → Γ(LConst K) an equivalence for every space K (our own). The shape pro-space represents the functor K ↦ Γ(LConst K), which is therefore equivalent to K ↦ Map(∗,K) (our own). Hence the point represents the shape (our own).

**nLab:** [infinity-connected (infinity,1)-topos](https://ncatlab.org/nlab/show/infinity-connected+%28infinity%2C1%29-topos). It says: “An ∞-connected (∞,1)-topos has the shape of the point, in the sense of shape of an (∞,1)-topos.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040 (shape theory)](https://arxiv.org/abs/math/0608040)

### Defining n-connected maps by orthogonality gives closure under pushouts

**Remember:** Every square against a truncated map has a contractible space of lifts.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In an ∞-topos, call a map n-connected if every square from it to an n-truncated map, one whose fibers have no homotopy above degree n, has a contractible space of diagonal fillers.

**Problem.** For n ≥ 0, a pushout of an n-connected map in an ∞-topos is n-connected.

**How the definition helps.** A square from a pushout of f to a map g gives a square from f to g, and the pushout property identifies their spaces of fillers, so the filler test passes to the pushout (our own explanation). In spaces, the other definition asks for nonempty, path-connected homotopy fibers with vanishing homotopy groups through degree n. Proving that this agrees with orthogonality is the real work.

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “the class of n-truncated morphisms in 𝐇 forms the right class in a orthogonal factorization system in an (∞,1)-category. The left class is that of n-connected morphisms in 𝐇.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Diagonal truncation makes finite-limit functors preserve truncated maps and objects

**Remember:** Finite-limit functors preserve every diagonal in the truncation test.

*True by definition.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories). arXiv math.CT, math.AT. Level 4: research.

**Definition.** Truncation is defined by diagonals: a map is (−2)-truncated if it is an equivalence, and for k ≥ −1 a map X → Y is k-truncated if its diagonal X → X ×<sub>Y</sub> X is (k−1)-truncated. An object is k-truncated if its map to the terminal object is.

**Problem.** A functor between ∞-categories with finite limits that preserves those limits also preserves k-truncated maps and objects.

**How the definition helps.** The definition uses only equivalences, pullbacks and the terminal object, so a functor preserving finite limits preserves each step. Induction on k gives the result for maps, and then for objects. The work is proving this agrees with the mapping-space definition, using that loop spaces lower the truncation level (our own summary).

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “This follows from the above recursive characterization of k-truncated morphisms by the (k-1)-truncation of their diagonal, which is preserved by the finite limit preserving F.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Effective groupoids in ∞-toposes make every group object a loop object

**Remember:** The degree-one term of the quotient nerve is the loop object.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55R35, 55P35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A groupoid object U• in an ∞-topos is effective if it is the Čech nerve of its own quotient map U₀ → \|U•\|. A group object G gives a one-object groupoid with U₀ = ∗, U₁ = G and quotient BG.

**Problem.** For a group object G in an ∞-topos, let BG be the quotient of its one-object groupoid. Then G is equivalent to the loop object of BG, the pullback of the base point along itself.

**How the definition helps.** Effectiveness identifies G with the degree-one term of the Čech nerve of ∗ → BG, which is the pullback ∗ ×<sub>BG</sub> ∗, the loop object. The higher Giraud theorem includes effectiveness of all groupoid objects among the defining properties of an ∞-topos, so it holds in every ∞-topos.

**nLab:** [groupoid object in an (infinity,1)-category](https://ncatlab.org/nlab/show/groupoid+object+in+an+%28infinity%2C1%29-category). It says: “Notice that one of the four characterizing properties of an (∞,1)-topos by the higher analog of the Giraud theorem is that all groupoid objects in an (infinity,1)-topos are effective.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### G-∞-categories are defined so that Elmendorf's theorem holds

**Remember:** A G-∞-category is a presheaf of ∞-categories on the orbits G/H.

*True by definition.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55P91. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A G-∞-category is a presheaf of ∞-categories on the orbit category of G: one ∞-category for each orbit G/H, with restriction functors along the G-maps between orbits.

**Problem.** G-∞-categories satisfy Elmendorf's theorem. G-spaces form a G-∞-category whose value at G/H is the ∞-category of H-spaces, with restriction as transition maps.

**How the definition helps.** The definition takes the conclusion of Elmendorf's theorem as its starting point, so the theorem follows by unwinding definitions (Barwick, Dotto, Glasman, Nardin and Shah). The real content is the classical Elmendorf theorem, which matches this with genuine G-spaces.

**nLab:** [G-∞-category](https://ncatlab.org/nlab/show/G-%E2%88%9E-category). It says: “The starting point of Parametrized Higher Category Theory and Higher Algebra is to define G-∞-categories so that they satisfy Elmendorf's theorem.”

**Sources:**

- [C. Barwick, E. Dotto, S. Glasman, D. Nardin, J. Shah, Parametrized higher category theory and higher algebra: Exposé I – Elements of parametrized higher category theory, 2016, arXiv:1608.03657](https://arxiv.org/abs/1608.03657)

### Homotopy 2-category adjunctions compose and have unique adjoints up to equivalence

**Remember:** Units and counits compose by the ordinary rules for a 2-category.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18N10, 18A40. arXiv math.CT. Level 4: research.

**Definition.** For functors F: A → B and U: B → A between quasi-categories, an adjunction consists of transformations id<sub>A</sub> ⇒ UF and FU ⇒ id<sub>B</sub>. Their two triangle composites must equal the respective identities in the homotopy categories of the functor quasi-categories.

**Problem.** Adjunctions of quasi-categories compose. Any two right adjoints to the same functor are naturally equivalent.

**How the definition helps.** The definition lives in the homotopy 2-category, so composition and uniqueness are the ordinary 2-category arguments (our own explanation). Composites paste units and counits, and two right adjoints get inverse comparisons from each other's units and counits. The work lies in proving that this agrees with the mapping-space definition and extends to a coherent adjunction.

**nLab:** [formal (infinity,1)-category theory](https://ncatlab.org/nlab/show/formal+%28infinity%2C1%29-category+theory). It says: “For instance, this includes the theory of adjoint (∞,1)-functors (which are automatically homotopy coherent)”

**Sources:**

- [E. Riehl, D. Verity, The 2-category theory of quasi-categories, Advances in Mathematics 280 (2015) 549–642](https://doi.org/10.1016/j.aim.2015.04.021)

### In an ∞-topos, one object classifies all small maps

**Remember:** Up to homotopy, every small map is a pullback of one universal map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 03B38. arXiv math.CT, math.LO. Level 4: research.

**Definition.** For a pullback-stable class S, an S-classifier is one map p: Û → U in S such that pulling back p turns maps X → U into S-maps over X. Precisely, for every X it identifies Map(X,U) with the maximal ∞-groupoid of S-maps over X.

**Problem.** An ∞-topos has a classifier for relatively κ-compact morphisms for every sufficiently large regular cardinal κ. Conversely, a presentable ∞-category with universal colimits and such classifiers is an ∞-topos (Rezk; Lurie, HTT 6.1.6.8).

**How the definition helps.** The mapping space records both families and their equivalences, so one object can classify all small maps up to homotopy (our own). The size bound makes the statement possible (our own). The characterization theorem of Rezk and Lurie supplies existence and the converse (our own).

**nLab:** [(sub)object classifier in an (infinity,1)-topos](https://ncatlab.org/nlab/show/%28sub%29object+classifier+in+an+%28infinity%2C1%29-topos). It says: “When one passes all the way to ∞-toposes, there should be objects that classify all morphisms, subject to some bound on size.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Math. Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### In any ∞-topos, cocycles classify principal ∞-bundles

**Remember:** A bundle is the homotopy fiber of its classifying map.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55R15, 55R35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For a group object G in an ∞-topos, a principal G-bundle over X is an object P with a G-action whose homotopy quotient P//G, the colimit of the action groupoid, is equivalent to X. The bundle map is the resulting map P → X.

**Problem.** In an ∞-topos, G-principal ∞-bundles over X are equivalent to cocycles X → 𝐁G. So the nonabelian cohomology H(X, 𝐁G) classifies them.

**How the definition helps.** Pullback of ∗ → BG along a cocycle X → BG gives its principal bundle because colimits are universal (our own). Conversely, the action groupoid maps to the one-object groupoid of G, inducing X ≃ P//G → BG (our own). Effectiveness identifies P with the pullback of the base point, making the constructions inverse on the corresponding ∞-groupoids (our own).

**nLab:** [principal infinity-bundle](https://ncatlab.org/nlab/show/principal+infinity-bundle). It says: “In words this says that the cohomology on X with coefficients in G classified G-principal ∞-bundles, and in fact does so on the level of cocycles.”

**Sources:**

- [Thomas Nikolaus, Urs Schreiber, Danny Stevenson, Principal ∞-bundles – General theory, J. Homotopy Relat. Struct. 10 (2015) 749–801, arXiv:1207.0248](https://arxiv.org/abs/1207.0248)

### Invertible suspension makes stable mapping sets abelian groups

**Remember:** Every stable target is a double loop object, so maps into it add.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55P42. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A pointed ∞-category with finite limits and colimits is stable if suspension, Y ↦ the pushout of 0 ← Y → 0, is an equivalence. Its inverse is then the loop functor.

**Problem.** In the homotopy category of a stable ∞-category, maps between any two objects form an abelian group. Composition is additive in both arguments.

**How the definition helps.** Since looping is right adjoint to suspension, Y is naturally equivalent to Ω²Σ²Y. Mapping out of X preserves pullbacks, so Map(X,Y) is naturally a double loop space. Interchange makes its group of components abelian, and naturality gives additivity under composition in each variable (our own argument).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “which are autoequivalences of C that are inverses of each other.”

**Sources:** none listed. No primary source with a working link was found.

### Mapping-space truncation makes truncated objects closed under limits

**Remember:** Test every mapping space into the object for homotopy above degree n.

*True by definition.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For n ≥ 0, a space is n-truncated if its homotopy groups above degree n vanish at every base point. An object A of an ∞-category is n-truncated if every space of maps into A is n-truncated.

**Problem.** In any ∞-category, a limit of n-truncated objects is n-truncated whenever the limit exists.

**How the definition helps.** Maps into a limit form the limit of the mapping spaces. For n ≥ 0, a space S is n-truncated exactly when constant maps give an equivalence S → Map(Sⁿ⁺¹,S). Both functors preserve limits, so the test passes to limits (our own argument).

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “For C an (∞,1)-category and k ≥ −2, the full sub-(∞,1)-category τ≤ₖ C is stable under all ∞-limits in C.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Regular ∞-group actions are those with a contractible homotopy quotient

**Remember:** Free and transitive together mean that the quotient is a point, up to homotopy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55R35, 03B38. arXiv math.AT, math.CT. Level 4: research.

**Definition.** An action of an ∞-group G is a type family X over its classifying type BG. Call the action regular if its homotopy quotient, the total type ∑(b ∈ BG) X(b), is contractible.

**Problem.** For a group acting on a nonempty set, the homotopy quotient is contractible exactly when the action is free and transitive. Thus regular actions extend torsors to every ∞-group.

**How the definition helps.** The action groupoid has one arrow x → y for each group element carrying x to y (our own explanation). Transitivity gives at least one such element for every pair, and freeness gives at most one. A nonempty groupoid with exactly one arrow between every pair is contractible, and conversely.

**nLab:** [regular action](https://ncatlab.org/nlab/show/regular+action). It says: “Transitivity ensures that all the points in the homotopy quotient are connected by equivalences, while freeness means that the space of equivalences between two points is itself contractible.”

**Sources:** none listed. No primary source with a working link was found.

### Represented cohomology turns coefficient fibers into long exact sequences

**Remember:** Cohomology is components of maps into A; looping A lowers degree.

*True by definition.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 55U35, 18F20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** In an ∞-category with finite limits, the cohomology of X with coefficients in a pointed object A is the set of path components of the mapping space Map(X, A). In degree −n, for n ≥ 0, replace A by its n-fold loop object, and Map(X, −) turns these loops and all fibers of coefficients into loops and fibers of mapping spaces.

**Problem.** A fiber sequence of pointed coefficient objects, with the fiber taken as the pullback of the target’s base point, gives a long exact sequence of cohomology in nonpositive degrees. The degree-zero terms are pointed sets, not necessarily groups.

**How the definition helps.** Map(X, −) preserves limits, so it turns the coefficient fiber sequence into a fiber sequence of mapping spaces and loop objects into loop spaces. Taking path components of the long exact homotopy sequence of that fiber sequence gives the claimed terms (our own explanation).

**nLab:** [cohomology](https://ncatlab.org/nlab/show/cohomology), [fiber sequence](https://ncatlab.org/nlab/show/fiber+sequence). It says: “By projecting everything to connected components with Π₀ this then yields an ordinary long exact sequence of pointed sets”

**Sources:**

- [K. S. Brown, Abstract homotopy theory and generalized sheaf cohomology, Transactions of the American Mathematical Society 186 (1973) 419–458](https://doi.org/10.1090/S0002-9947-1973-0341469-9)

### Stable ∞-categories make finite-limit preservation equivalent to finite-colimit preservation

**Remember:** In stable categories, pullback squares and pushout squares are the same squares.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18G80. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An ∞-category, a category with spaces of maps, is stable if it has finite limits and colimits, a zero object that is both initial and terminal, and its pullback squares are exactly its pushout squares.

**Problem.** A functor between stable ∞-categories preserves finite limits exactly when it preserves finite colimits.

**How the definition helps.** A functor preserves finite limits exactly when it preserves the terminal object and pullbacks, and finite colimits exactly when it preserves the initial object and pushouts. Stability makes these the same object and the same squares, so the two tests agree (our own argument).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “every exact triangle is coexact and vice versa, i.e. every morphism is the cokernel of its kernel and the kernel of its cokernel.”

**Sources:** none listed. No primary source with a working link was found.

### Terminal-cone limits in ∞-categories are unique up to contractible choice

**Remember:** Maps into a limit form a point, so limits do too.

*True by definition. Confidence: medium.* MSC 18N60 ((∞,1)-categories (quasi-categories, Segal spaces, etc.); ∞-topoi, stable ∞-categories), 18A30. arXiv math.CT, math.AT. Level 4: research.

**Definition.** In an ∞-category, a limit of a diagram is a terminal cone: an object with compatible maps to every entry of the diagram, such that the space of cone maps from any other cone into it is contractible, that is, equivalent to a point.

**Problem.** If a limit exists, the full subcategory of limit cones is contractible, that is, equivalent to a point.

**How the definition helps.** Between two limit cones every mapping space is contractible, so maps exist both ways and their composites are homotopic to the identities. Hence the subcategory is a groupoid whose mapping spaces are all contractible, which is equivalent to a point (our own argument).

**nLab:** [terminal object in an (infinity,1)-category](https://ncatlab.org/nlab/show/terminal+object+in+an+%28infinity%2C1%29-category). It says: “instead of demanding that from any other object there is a unique morphism into the terminal object, in a quasi-category there is a contractible infinity-groupoid of such morphisms”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Defining monoidal n-categories as degenerate higher categories makes delooping true by definition

**Remember:** Squash an (n+k)-category to one point below level k.

*True by definition.* MSC 18N65 ((∞, n)-categories and (∞,∞)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is a pointed (n+k)-category that is trivial below level k: every object is equivalent to the base point, and any two parallel j-morphisms are equivalent for j &lt; k. This triviality below level k is what (k−1)-connected means.

**Problem.** With this definition, k-tuply monoidal n-categories are the same as pointed (k−1)-connected (n+k)-categories, as the delooping hypothesis says.

**How the definition helps.** The equivalences below level k are exactly (k−1)-connectedness, so the delooping statement holds by definition. Comparing this with independently defined monoidal structures needs a separate comparison theorem (our own explanation).

**nLab:** [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis), [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category). It says: “Not infrequently the delooping hypothesis is used to supply a definition of”

**Sources:**

- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)
- [David Gepner, Rune Haugseng, Enriched ∞-categories via non-symmetric ∞-operads, Adv. Math. (2015), arXiv:1312.3178](https://arxiv.org/abs/1312.3178)

### Defining monoidal structure by little cubes turns stabilization into a theorem

**Remember:** k monoidal products are k directions for placing cubes side by side.

*Makes the theorem clean to state or prove.* MSC 18N65 ((∞, n)-categories and (∞,∞)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is an n-category with an action of the little k-cubes operad. Each way to place r disjoint, axis-aligned little cubes in the unit k-cube gives an r-fold product, and nesting configurations composes these products.

**Problem.** The Baez–Dolan stabilization hypothesis says that for k ≥ n+2 a k-tuply monoidal n-category is already symmetric monoidal. Further monoidal structures then add nothing new.

**How the definition helps.** The cube definition turns the claim into a precise statement: restricting symmetric monoidal structures to little k-cube structures is an equivalence for k ≥ n+2. The stabilization theorem proves this equivalence, at least for (n,1)-categories as the quote says (our own explanation).

**nLab:** [stabilization hypothesis](https://ncatlab.org/nlab/show/stabilization+hypothesis), [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category). It says: “makes good sense, as discussed further below. With this definition the stabilization hypothesis is a theorem at least for (n,1)-categories”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)
- [David Gepner, Rune Haugseng, Enriched ∞-categories via non-symmetric ∞-operads, Adv. Math. (2015), arXiv:1312.3178](https://arxiv.org/abs/1312.3178)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Fully dualizable objects make the cobordism hypothesis a precise statement

**Remember:** Like the point: a dual, and adjoints in every dimension.

*Makes the theorem clean to state or prove.* MSC 18N65 ((∞, n)-categories and (∞,∞)-categories), 57R56, 18M10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** In a symmetric monoidal (∞,n)-category, an object is fully dualizable if it has a dual whose evaluation and coevaluation maps have left and right adjoints, whose units and counits again have adjoints, and so on through dimension n. These are exactly the duals and adjoints that the framed point has among framed bordisms.

**Problem.** For a symmetric monoidal (∞,n)-category C, evaluation at the framed point identifies the space of symmetric monoidal functors Bordₙᶠʳ → C with the space of fully dualizable objects of C. So a fully extended framed field theory is determined by its value on the point.

**How the definition helps.** Every functor preserves duals and adjoints, so it sends the framed point to a fully dualizable object (our own explanation). The framed cobordism hypothesis gives the converse: each such object extends to a field theory with a contractible space of choices.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis), [fully dualizable object](https://ncatlab.org/nlab/show/fully+dualizable+object), [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “before definitions of these higher category theoretical notions were available.”

**Sources:**

- [Jacob Lurie, On the Classification of Topological Field Theories, Current Developments in Mathematics 2008 (2009) 129–280, arXiv:0905.0465](https://arxiv.org/abs/0905.0465)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Trimble n-categories build the fundamental n-groupoid into the definition

**Remember:** Composition is Πₙ of path reparametrization, so paths compose automatically.

*True by definition.* MSC 18N65 ((∞, n)-categories and (∞,∞)-categories), 18M75, 55P15. arXiv math.CT, math.AT. Level 4: research.

**Definition.** Trimble n-categories are defined by induction: a 0-category is a set, and an (n+1)-category has objects and an n-category of arrows between each ordered pair, composed by the operad ΠₙT. Here T(r) is the space of endpoint-preserving maps \[0,1\] → \[0,r\], the ways to run one path through r consecutive paths.

**Problem.** Every space X has a fundamental n-groupoid ΠₙX that is a Trimble n-category and is functorial in X.

**How the definition helps.** Paths in a space carry T-operations by concatenation and reparametrization, so the definition fits paths by design. Let Π₀X be the path components, and let Πₙ₊₁X have the points of X as objects and Πₙ of the path spaces as arrows. Πₙ preserves products, so T-operations become ΠₙT-operations, and continuous maps act by postcomposition (our own explanation).

**nLab:** [Trimble n-category](https://ncatlab.org/nlab/show/Trimble+n-category), [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis). It says: “This definition was introduced in order to give an algebraic notion of fundamental n-groupoid”

**Sources:**

- [Tom Leinster, A Survey of Definitions of n-Category, arXiv:math/0107188 (2001)](https://arxiv.org/abs/math/0107188)
