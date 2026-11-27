### Naturality explains why V ≅ V\*\* is canonical but V ≅ V\* is not

**Remember:** Natural means: the maps commute with every change of object.

*Makes the theorem clean to state or prove.* MSC 18A23 (Natural morphisms, dinatural morphisms), 15A03. arXiv math.CT. Level 2: later undergraduate.

**Definition.** For functors F,G from C to D, a natural transformation assigns a map αₓ from F(x) to G(x) to every object x. Every arrow f from x to y must satisfy G(f)αₓ = αᵧF(f). A natural isomorphism requires every αₓ to be invertible.

**Problem.** On finite-dimensional vector spaces, the maps V → V\*\*, v ↦ (ω ↦ ω(v)), form a natural isomorphism. Over ℝ or ℂ, no family of isomorphisms V ≅ V\* is natural with respect to linear isomorphisms once dim V ≥ 2.

**How the definition helps.** For any linear f, evaluating f\*\* at the evaluation vector of v gives the evaluation vector of f(v) (our own). These evaluation maps are isomorphisms in finite dimension (our own). On isomorphisms the dual acts by inverse transpose, so a natural identification with the dual would give an invariant nondegenerate bilinear form (our own). Scaling by two multiplies that form by four, contradicting invariance (our own).

**nLab:** [natural transformation](https://ncatlab.org/nlab/show/natural+transformation), [unnatural isomorphism](https://ncatlab.org/nlab/show/unnatural+isomorphism). It says: “(right on the first pages) for introducing the notion of natural transformation (and with it category theory) in the first place.”

**Sources:**

- [Samuel Eilenberg, Saunders Mac Lane, General theory of natural equivalences, Transactions of the American Mathematical Society 58 (1945) 231–294](https://doi.org/10.1090/S0002-9947-1945-0013131-6)

### Defining products by a universal property makes them unique up to isomorphism

**Remember:** Unique compatible maps each way force both composites to be identities.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 2: later undergraduate.

**Definition.** A product of objects X and Y in a category is an object P with maps to X and to Y. It must be universal: any object with maps to X and Y has exactly one compatible map to P. Compatible means that composing it with the maps from P to X and Y gives back the given maps.

**Problem.** Any two products of the same pair of objects are isomorphic.

**How the definition helps.** Universality gives one compatible map in each direction (our own). Each composite preserves both projections, as does the identity (our own). Uniqueness therefore makes both composites identities (our own).

**Paper or page:** [An Infinitely Large Napkin: Cats: Categories](https://venhance.github.io/napkin/Napkin.pdf). It says: “When they exist, products are unique up to isomorphism: given two products P₁ and P₂ of X and Y there is an isomorphism between the two objects.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Groupoid cardinality divides the set size by the group order

**Remember:** Weight each orbit by the reciprocal of the size of its stabilizer.

*True by definition. Confidence: medium.* MSC 18B40 (Groupoids, semigroupoids, semigroups, groups (viewed as categories)), 20L05. arXiv math.CT, math.CO. Level 2: later undergraduate.

**Definition.** For a finite groupoid, sum 1/\|Aut(x)\| over one representative x of every isomorphism class to define its cardinality. In the action groupoid of G on X, the objects are points and each g gives one arrow x → gx for every x.

**Problem.** For a finite group G acting on a finite set X, the action groupoid has cardinality \|X//G\| = \|X\|/\|G\|, even if the action is not free.

**How the definition helps.** An orbit contributes the reciprocal of its stabilizer order (our own). Orbit–stabilizer identifies that reciprocal with the orbit size divided by \|G\| (our own). Summing counts every point of X once in the numerator (our own).

**nLab:** [groupoid cardinality](https://ncatlab.org/nlab/show/groupoid+cardinality). It says: “More generally, for an action of G on a set X, then the cardinality of the action groupoid X//G is \|X\|/\|G\|. This is traditionally sometimes called the class formula.”

**Sources:** none listed. No primary source with a working link was found.

### Defining split sequences as direct sums makes additive functors preserve them

**Remember:** An additive functor keeps direct sums, so it keeps split sequences.

*True by definition. Confidence: medium.* MSC 18E05 (Preadditive, additive categories), 18E10. arXiv math.KT. Level 2: later undergraduate.

**Definition.** Call a short exact sequence split if it is isomorphic to the sequence A → A ⊕ C → C. Here the maps are the inclusion of A and the projection onto C. A common alternative asks only for a right inverse to the last map.

**Problem.** Every additive functor between abelian categories sends split short exact sequences to split short exact sequences. This holds even if the functor is not exact.

**How the definition helps.** With this definition, the claim reduces to one fact: an additive functor preserves finite direct sums with their inclusion and projection maps (our own). The work goes into the splitting lemma, which says that a right inverse gives such a direct sum (our own).

**Wikipedia:** [Splitting lemma](https://en.wikipedia.org/wiki/Splitting_lemma). It says: “we assume 3. and take as t the natural projection of the direct sum onto A”

**Sources:** none listed. No primary source with a working link was found.

### Defining Ext¹ by extensions makes its vanishing detect projective modules

**Remember:** If every extension of A splits, then every surjection onto A splits.

*True by definition. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G05. arXiv math.KT. Level 2: later undergraduate.

**Definition.** For modules A,B over the same ring, Ext¹(A,B) consists of equivalence classes of short exact sequences 0 → B → E → A → 0. Two extensions are equivalent if an isomorphism of their middle terms commutes with both endpoint maps. The split sequences form the zero class.

**Problem.** A module A is projective exactly when Ext¹(A, B) is zero for every module B.

**How the definition helps.** With this definition, Ext¹(A, ·) = 0 says that every surjection onto A splits, which is one standard definition of projective (our own). The work goes into proving that extension classes agree with Ext¹ from a resolution, so that the result applies to the usual Ext¹ (our own).

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “An extension of A by B is called split if it is equivalent to the trivial extension”

**Sources:** none listed. No primary source with a working link was found.

### Defining split exactness by direct sums makes exact vector-space complexes contractible

**Remember:** Choosing complements in every degree contracts the whole complex.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18E10. arXiv math.KT. Level 2: later undergraduate.

**Definition.** Call an exact complex split if each term is its cycles plus a complement. The differential must map the complement isomorphically onto the next cycles. A contractible complex is one whose identity map is chain homotopic to zero.

**Problem.** Every exact complex of vector spaces is contractible.

**How the definition helps.** Over a field every subspace has a complement, so every exact complex is split under this definition (our own). The work goes into proving that split exact complexes are contractible, by writing them as direct sums of two-term identity complexes (our own).

**nLab:** [split exact sequence](https://ncatlab.org/nlab/show/split+exact+sequence). It says: “in that the identity on C• has a null homotopy.”

**Sources:** none listed. No primary source with a working link was found.

### In univalent categories, equivalent categories are equal

**Remember:** Make isomorphic objects equal, and equivalent categories become equal.

*Makes the theorem clean to state or prove.* MSC 18A05 (Definitions and generalizations in theory of categories), 03B38. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A precategory in homotopy type theory is univalent if, for every pair of objects a,b, the canonical map from a=b to a≅b is an equivalence.

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

**Remember:** A separable functor lets you undo its action on morphisms, naturally.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A22 (Special properties of functors (faithful, full, etc.)), 18A40, 20C07. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** For every x,y, separability requires a retraction Hom(Fx,Fy) → Hom(x,y) of the map induced by F. These retractions must be natural in both objects.

**Problem.** For a finite group G with \|G\| invertible in k, the forgetful functor from k\[G\]-modules to k-modules is separable. An exact sequence of k\[G\]-modules therefore splits exactly when its underlying sequence of k-modules splits.

**How the definition helps.** Average any k-linear map f by sending m to \|G\|⁻¹∑ g f(g⁻¹m), summing over G (our own). This gives a natural retraction onto equivariant maps and fixes every equivariant map (our own). Averaging a k-linear section therefore produces an equivariant section (our own).

**nLab:** [separable functor](https://ncatlab.org/nlab/show/separable+functor), [Maschke's theorem](https://ncatlab.org/nlab/show/Maschke%27s+theorem). It says: “This "Maschke property" of the forgetful functor kG Mod → k Mod is what is generalized by the notion of separable functors.”

**Sources:**

- [C. Năstăsescu, M. Van den Bergh, F. Van Oystaeyen, Separable functors applied to graded rings, Journal of Algebra 123 (1989) 397–413](https://doi.org/10.1016/0021-8693(89)90053-7)

### Counting the terminal object as an empty product gives all finite limits

**Remember:** The product of nothing is the terminal object, just as the empty product is 1.

*Makes the theorem clean to state or prove.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** A terminal object receives exactly one arrow from each object. This is the universal property of the product of the empty family.

**Problem.** A category has all finite products and equalizers exactly when it has all pullbacks and a terminal object. Both conditions say that the category has all finite limits.

**How the definition helps.** Including the empty product supplies the terminal object in the finite-product formulation. Our own argument uses the finite-limit construction from products and equalizers. Conversely, pullbacks over the terminal object give binary products. Pulling back a diagonal along a pair of arrows then gives their equalizer.

**nLab:** [finite limit](https://ncatlab.org/nlab/show/finite+limit). It says: “In particular, binary products are finite limits and the terminal object (being the limit over the empty diagram) is a finite limit.”

**Paper or page:** [Category has Products and Equalizers iff Pullbacks and Terminal Object](https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object). It says: “(1): C has all finite products and equalizers. (2): C has all pullbacks and a terminal object.”

**Sources:**

- [ProofWiki, Category has Products and Equalizers iff Pullbacks and Terminal Object](https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object)

### Defining ends as right adjoints makes iterated ends commute, like Fubini's theorem

**Remember:** An end represents families compatible with every arrow.

*True by definition. Confidence: medium.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A23. arXiv math.CT. Level 3: graduate.

**Definition.** For T:Cᵒᵖ×C→D, the end represents wedges into T. A wedge from X consists of maps π<sub>c</sub>:X→T(c,c) satisfying T(c,f)π<sub>c</sub> = T(f,d)π<sub>d</sub> for every f:c→d. Thus Hom(X,end T) corresponds naturally to wedges from X, the hom-set form of the end adjunction.

**Problem.** For a functor of pairs from Aᵒᵖ × A and Bᵒᵖ × B, assume the indicated ends exist. Either iterated end is canonically isomorphic to the end over A × B.

**How the definition helps.** Our own argument applies the universal property twice. A map into an iterated end specifies a family compatible with arrows in each variable. Each arrow in the product factors into one arrow in each variable, so these are exactly the families defining the product end.

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

**Definition.** For parallel arrows f,g from A to B, a split coequalizer consists of e from B to C with ef = eg and two splittings. These are arrows s from C to B and t from B to A satisfying es = id<sub>C</sub>, ft = id<sub>B</sub> and gt = se.

**Problem.** Every functor sends a split coequalizer to a coequalizer. So split coequalizers are absolute coequalizers.

**How the definition helps.** Every functor preserves the splitting equations. Our own verification works in the image diagram as well. If hf = hg, then h = hft = hgt = hse. The factor hs is unique because es = id<sub>C</sub>.

**nLab:** [split coequalizer](https://ncatlab.org/nlab/show/split+coequalizer). It says: “In fact, a split coequalizer is not just a coequalizer but an absolute coequalizer: one preserved by all functors.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexive coequalizers make categories of algebras cocomplete, by Linton's theorem

**Remember:** A common section makes the pair reflexive.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** Parallel arrows f,g:A→B form a reflexive pair if some s:B→A satisfies fs = gs = id<sub>B</sub>. A reflexive coequalizer is a coequalizer of such a pair.

**Problem.** Linton's theorem says that if C is cocomplete and the category Cᵀ of T-algebras has reflexive coequalizers, then Cᵀ is cocomplete. So if a monad on a complete and cocomplete category preserves reflexive coequalizers, its category of algebras is complete and cocomplete.

**How the definition helps.** Each algebra has a reflexive presentation by free algebras. Linton’s theorem uses these presentations to construct colimits. Our own explanation of the consequence uses the forgetful functor, which creates limits and creates reflexive coequalizers when T preserves them.

**nLab:** [colimits in categories of algebras](https://ncatlab.org/nlab/show/colimits+in+categories+of+algebras). It says: “If C is cocomplete and Cᵀ has reflexive coequalizers, then Cᵀ is cocomplete.”

**Sources:**

- [Fred Linton, Coequalizers in categories of algebras, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80, Springer (1969)](https://doi.org/10.1007/BFb0083082)

### Reflexive coequalizers preserved in each variable are preserved jointly

**Remember:** A common section lets a joint equation test each variable separately.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18C15. arXiv math.CT. Level 3: graduate.

**Definition.** Parallel arrows f,g from A to B form a reflexive pair if some arrow s from B to A satisfies fs = gs = id<sub>B</sub>. Their coequalizer is called a reflexive coequalizer.

**Problem.** If a functor of two variables preserves reflexive coequalizers in each variable separately, then it preserves them in both variables together.

**How the definition helps.** Our own argument uses the common sections to recover each separate coequalizing equation from the joint equation. The separate universal properties then give a unique factor through the result of taking both coequalizers.

**nLab:** [reflexive coequalizer](https://ncatlab.org/nlab/show/reflexive+coequalizer). It says: “In this case it implies that the free monoid monad on such a category preserves reflexive coequalizers, and thus (by Linton's theorem) the category of monoid objects in C is cocomplete.”

**Sources:**

- [F. E. J. Linton, Coequalizers in categories of algebras, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80 (1969) 75–90](https://doi.org/10.1007/BFb0083082)

### Sifted categories are defined by the theorem they satisfy

**Remember:** Sifted means that colimits of this shape pass through finite products.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A small category D is sifted if its colimit functor from Set-valued D-diagrams to Set preserves every finite product, including the empty product.

**Problem.** A nonempty small category D is sifted exactly when its diagonal functor D → D × D is final. Every small category with finite coproducts is sifted, as is the shape of a reflexive coequalizer.

**How the definition helps.** The empty product tests connectedness and nonemptiness. For binary products, the comparison restricts an external product diagram along the diagonal (our own). Gabriel and Ulmer identify the resulting condition with finality of the diagonal. Finite coproducts give initial cospans, and the shared section connects cospans in the reflexive-pair shape (our own).

**nLab:** [sifted category](https://ncatlab.org/nlab/show/sifted+category), [filtered category](https://ncatlab.org/nlab/show/filtered+category). It says: “A category D is called sifted if colimits of diagrams of shape D commute with finite products in Set”

**Sources:**

- [Jiří Adámek, Jiří Rosický, On sifted colimits and generalized varieties, Theory and Applications of Categories 8 (2001) 33–53](http://tac.mta.ca/tac/volumes/8/n3/8-03abs.html)
- [Jiří Adámek, Jiří Rosický, Enrico Vitale, What are sifted colimits?, Theory and Applications of Categories 23 (2010) 251–260](http://tac.mta.ca/tac/volumes/23/13/23-13abs.html)

### Split pushouts are preserved by every functor

**Remember:** Equations witness the pushout, and every functor preserves equations.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** Consider a commuting square mp = nq with p,q from A to B,C respectively and m,n from B,C to P respectively. It is a split pushout if p,q,m have respective sections s,t,u satisfying pt = un.

**Problem.** A split pushout is an absolute pushout: every functor out of the category sends it to a pushout.

**How the definition helps.** Every functor preserves the sections and their equations. For any cocone bp=cq, the candidate factor bu satisfies bun=bpt=cqt=c (our own). Since bump=bunq=cq=bp and p is epic, bum=b. The factor is unique because mu is the identity.

**nLab:** [absolute pushout](https://ncatlab.org/nlab/show/absolute+pushout). It says: “arbitrary functors do not preserve epimorphisms. They do however preserve split epimorphisms, and thus the section guarantees that the image of p will define an epimorphism in any category.”

**Sources:**

- [Samuel B. Isaacson, Symmetric cubical sets, Journal of Pure and Applied Algebra 215 (2011) 1146–1173](https://doi.org/10.1016/j.jpaa.2010.08.001)

### The Mittag-Leffler condition makes inverse limits keep short exact sequences exact

**Remember:** When images stop shrinking, inverse limits stay exact.

*Rules out counterexamples.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18G10. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** An inverse system (Aᵢ) is Mittag-Leffler if for every i some j ≥ i satisfies the following condition. For every k ≥ j, the maps from Aₖ and Aⱼ to Aᵢ have equal images.

**Problem.** Take a short exact sequence 0→Aᵢ→Bᵢ→Cᵢ→0 of inverse systems of abelian groups indexed by the natural numbers. If (Aᵢ) is Mittag-Leffler, then 0→lim Aᵢ→lim Bᵢ→lim Cᵢ→0 is exact.

**How the definition helps.** Stable images let compatible lifts be chosen successively in a countable tower (our own). For a prime p, the inclusions pⁱℤ ⊂ ℤ give the standard counterexample. Their images shrink forever, and the resulting map ℤ → ℤₚ misses some p-adic integers.

**Wikipedia:** [Inverse limit](https://en.wikipedia.org/wiki/Inverse_limit). It says: “the Mittag-Leffler condition is a condition on the transition morphisms fᵢⱼ that ensures the exactness of lim”

**Paper or page:** [Stacks Project, Algebra, Lemma 10.86.4](https://stacks.math.columbia.edu/tag/0598). It says: “Suppose I is countable. If (Aᵢ) is Mittag-Leffler, then 0 → lim Aᵢ → lim Bᵢ → lim Cᵢ → 0 is exact.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0598 (Algebra, Lemma 10.86.4)](https://stacks.math.columbia.edu/tag/0598)

### The unique empty map makes the empty set the initial object

**Remember:** From nothing there is exactly one way to go anywhere.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18B05. arXiv math.CT. Level 3: graduate.

**Definition.** A map from S to T is a set of pairs that gives each element of S exactly one value in T. For S = ∅, the empty set of pairs satisfies this, and it is the only one. An initial object is one with exactly one map to every object.

**Problem.** The empty set is initial in the category of sets. There is exactly one map from ∅ to ∅. No nonempty set admits a map to ∅.

**How the definition helps.** Defining maps as sets of pairs makes the empty map exist and be unique with no special rule. Then ∅ is initial straight from the definition. The same rule gives exactly one map from ∅ to ∅, so 0⁰ = 1 for sets. In our own reading, the definition also shows that ∅ is not terminal, since no nonempty set maps to it.

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

**Definition.** Let C be small and E a Grothendieck topos. A functor F:C→E is flat if its colimit-preserving extension along the Yoneda embedding C→PSh(C) preserves finite limits.

**Problem.** For every small category C and Grothendieck topos E, geometric morphisms E → PSh(C) correspond to internally flat functors C → E.

**How the definition helps.** Flatness makes the extension the inverse-image functor of a geometric morphism (our own). Diaconescu’s theorem gives the correspondence even when C lacks finite limits.

**nLab:** [flat functor](https://ncatlab.org/nlab/show/flat+functor), [Diaconescu's theorem](https://ncatlab.org/nlab/show/Diaconescu%27s+theorem). It says: “lacks some finite limits, then this concept still makes sense, but it may not be the correct one.”

**Sources:**

- [Radu Diaconescu, Change of base for toposes with generators, Journal of Pure and Applied Algebra 6 (1975) 191–218](https://doi.org/10.1016/0022-4049(75)90015-8)

### Strict creation of limits gives monadicity up to isomorphism

**Remember:** Each colimit cocone downstairs has exactly one lift, itself a colimit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A functor U strictly creates colimits of J if each colimit cocone of U∘J has exactly one cocone over J mapping to it. Each such lift must be a colimit cocone.

**Problem.** Suppose U has a left adjoint and strictly creates coequalizers of U-split pairs. These conditions are necessary and sufficient for U to be isomorphic over C to the forgetful functor of a monad on C.

**How the definition helps.** Strict creation specifies the lifted object and cocone exactly. A U-split pair is a parallel pair whose image admits a split coequalizer. Beck’s strict monadicity theorem uses these lifts to characterize the algebra category up to isomorphism.

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

**Definition.** A reflection into a full subcategory assigns each X a local object TX and an arrow η<sub>X</sub> from X to TX. Here local means belonging to the subcategory. Every map from X to a local object factors uniquely through η<sub>X</sub>.

**Problem.** The monad of a reflection is idempotent, so T(T(X)) is naturally isomorphic to T(X).

**How the definition helps.** Since TX is local, its identity already satisfies the reflection property (our own). Uniqueness makes η<sub>TX</sub> invertible. The monad multiplication is its inverse by the unit law (our own).

**nLab:** [idempotent monad](https://ncatlab.org/nlab/show/idempotent+monad). It says: “Conversely, the monad induced by any reflective subcategory is idempotent”

**Sources:** none listed. No primary source with a working link was found.

### Defining adjoints by matching sets of maps makes right adjoints preserve limits

**Remember:** Move the test object across the adjunction.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** L is left adjoint to R if there are bijections Hom(LX,Y) ≅ Hom(X,RY) for every X and Y, natural in both.

**Problem.** A right adjoint R sends every limit that exists to a limit. A limit of a diagram is a universal object with compatible maps to each object of the diagram.

**How the definition helps.** Maps X → R(lim D) correspond to maps LX → lim D (our own). Those maps correspond to cones from LX to D. Applying the adjunction componentwise identifies these cones with cones from X to RD. This gives the universal property of the image cone.

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

**Definition.** For a k\[H\]-module P, induction gives a k\[G\]-module Ind(P) with bijections Hom<sub>G</sub>(Ind(P),V) ≅ Hom<sub>H</sub>(P,V\|H), natural in each k\[G\]-module V.

**Problem.** Let H be a subgroup of G and k a commutative ring with identity. If P is a projective k\[H\]-module, its induced k\[G\]-module is projective. A module is projective if every map from it into a quotient lifts along the quotient map.

**How the definition helps.** The adjoint definition reduces lifting maps from the induced module to lifting maps from P (our own). Restriction leaves the underlying modules and surjections unchanged, so projectivity of P supplies the lift (our own). The work lies in showing that the tensor construction realizes the required map correspondence (our own). The tensor proof instead checks that induction sends free modules to free modules and preserves direct summands (our own).

**nLab:** [induced representation](https://ncatlab.org/nlab/show/induced+representation). It says: “of restricting linear representations of G to H-representations has both a left adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Initial arrows assemble left adjoints

**Remember:** One initial arrow for every input builds the adjoint.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 01A60. arXiv math.CT, math.HO. Level 3: graduate.

**Definition.** A functor R sends objects and arrows of a category C to those of D, preserving identities and composition. For an object d of D, call u from d to R(c) universal if it has the following property. Every arrow from d to R(b) factors uniquely as u followed by R(h), for an arrow h from c to b.

**Problem.** If we choose such a universal arrow for every d, then R has a left adjoint. This means arrows from its value at d to b correspond bijectively to arrows from d to R(b), compatibly with composition.

**How the definition helps.** The universal arrow gives the adjunction bijection by taking each arrow to its unique factor. Applying the same factorization to arrows between inputs defines the left adjoint on arrows (our own). Uniqueness gives functoriality and naturality.

**nLab:** [adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem). It says: “the existence of the adjoint is equivalent to the existence for each d ∈ D of an initial object”

**Paper or page:** [The history of the General Adjoint Functor Theorem](https://arxiv.org/abs/2310.19528). It says: “for each S-object (S, σ) there exists an E-universal arrow”

**Sources:** none listed. No primary source with a working link was found.

### The Isbell adjunction between spaces and algebras holds by unwinding definitions

**Remember:** Functions map a space into representables, and points map an algebra into representables.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A25. arXiv math.CT. Level 3: graduate.

**Definition.** For a small category C, let X be a presheaf and A a copresheaf. Define O(X)(c) = Nat(X,C(−,c)) and Spec(A)(c) = Nat(A,C(c,−)). Here Nat denotes the set of natural transformations.

**Problem.** The functor O, from presheaves on C to the opposite of copresheaves on C, is left adjoint to Spec.

**How the definition helps.** Both sides of the adjunction specify pairings X(d) × A(c) → C(d,c), natural in c and d (our own). Fixing either argument gives the corresponding transformation into a representable. These assignments are mutually inverse and natural.

**nLab:** [Isbell duality](https://ncatlab.org/nlab/show/Isbell+duality). It says: “The proof is mostly a tautology after the notation is unwound.”

**Sources:**

- [John R. Isbell, Structure of categories, Bulletin of the American Mathematical Society 72 (1966) 619–655](https://doi.org/10.1090/S0002-9904-1966-11541-0)

### The pointwise formula makes Kan extension along a full embedding fully faithful

**Remember:** Over an object already included, its identity is the last stop.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** For small categories C,D, take functors F from C to D and G from C to Set. The pointwise left Kan extension at Y is the colimit of G(X) over the comma category (F ↓ Y). Its objects are arrows FX → Y, and its arrows are commuting triangles induced by arrows of C.

**Problem.** Let F be fully faithful, which means it gives bijections on sets of maps. Then left Kan extension along F, from functors C → Set to functors D → Set, is fully faithful.

**How the definition helps.** Full faithfulness makes (X,id<sub>FX</sub>) terminal in (F ↓ FX) (our own). Thus the colimit at FX evaluates to G(X). The unit of the extension–restriction adjunction is invertible, which makes extension fully faithful.

**nLab:** [Kan extension](https://ncatlab.org/nlab/show/Kan+extension). It says: “is itself a full and faithful functor.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of shifts makes itinerary maps commute automatically

**Remember:** The first coordinate determines a map into the shift that commutes with time.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 37B10. arXiv math.CT, math.DS. Level 3: graduate.

**Definition.** The one-sided shift S on sequences in X deletes the first term. Its universal property identifies system maps h:(Y,T)→(Xᴺ,S) bijectively with functions Y→X by taking coordinate zero. A system map satisfies h∘T = S∘h.

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

**Definition.** A Lawvere–Tierney topology on a topos E is a map j : Ω → Ω on the subobject classifier, the object of truth values. It satisfies j ∘ true = true, j ∘ j = j and j ∘ ∧ = ∧ ∘ (j × j). You read j as the logical operator 'it is locally the case that'.

**Problem.** In every elementary topos, a Lawvere–Tierney topology j defines j-sheaves and a sheafification functor, and the j-sheaves form a subtopos. For presheaves on a small category C, these topologies correspond exactly to the Grothendieck topologies on C.

**How the definition helps.** The definition uses only the subobject classifier, so it makes sense in every elementary topos. The correspondence with Grothendieck topologies shows that nothing is lost for presheaf toposes. To construct sheafification in this generality is still real work.

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

**Definition.** A lattice with all joins has a least upper bound for every subset. The power set of X is free on X among such lattices. This means each assignment of lattice elements to points of X extends uniquely to a map preserving all joins.

**Problem.** Union-preserving maps between the power sets of X and Y correspond exactly to relations from X to Y. Composition of these maps corresponds to composition of relations.

**How the definition helps.** Freeness determines the map by its values on singletons. Relate x to y exactly when y belongs to F({x}) (our own). Conversely, take each subset to the union of the values assigned to its elements. A second such union includes z exactly when some intermediate y relates x to z, giving relational composition (our own).

**nLab:** [suplattice](https://ncatlab.org/nlab/show/suplattice). It says: “The Kleisli category of this monad is equivalent to Rel, the category of sets and relations. Thus the objects of Rel may be thought of as the free suplattices.”

**Sources:** none listed. No primary source with a working link was found.

### Right adjoints make complete lattices self-dual

**Remember:** Reverse the order and replace each join-preserving map by its right adjoint.

*True by definition.* MSC 18B35 (Preorders, orders, domains and lattices (viewed as categories)), 06B23. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A complete lattice has a join and a meet for every subset. In this category, the maps between complete lattices preserve all joins. Equivalently, each map f is a left adjoint, so there is a map g with f(x) ≤ y exactly when x ≤ g(y).

**Problem.** The category of complete lattices and join-preserving maps is isomorphic to its opposite. In that opposite category, every arrow goes in the reverse direction.

**How the definition helps.** The right adjoint preserves meets, so it preserves joins between the lattices with reversed orders. Its value at y is the join of all x with f(x) ≤ y. Right adjoints compose in reverse order. Reversing orders and taking adjoints twice recovers each original lattice and map (our own).

**nLab:** [suplattice](https://ncatlab.org/nlab/show/suplattice). It says: “(which takes a morphism f: P → Q to gᵒᵖ: Qᵒᵖ → Pᵒᵖ, where g is right adjoint to f) also means that colimits may be formed as appropriate limits”

**Paper or page:** [Completeness and injectivity](https://arxiv.org/abs/2005.05311). It says: “A function f: L ⟶ L′ preserves arbitrary suprema if and only if there exists a function u: L′ ⟶ L such that f ⊣ u.”

**Sources:**

- [Soichiro Fujii, Completeness and injectivity, Proposition 2.2](https://arxiv.org/abs/2005.05311v2)

### Groups contain an identity, so the trivial group is a zero object

**Remember:** From the trivial group, e must go to e, so there is one map.

*True by definition. Confidence: medium.* MSC 18B40 (Groupoids, semigroupoids, semigroups, groups (viewed as categories)), 18A30, 20A05. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** A group contains an identity e, so it is never empty, and every homomorphism sends e to e. An initial object has exactly one arrow to every object, and a terminal object has exactly one arrow from every object. A zero object is both.

**Problem.** The trivial group is a zero object of the category of groups: it is both initial and terminal.

**How the definition helps.** The sole element of the trivial group must map to the identity, and this assignment is a homomorphism. Conversely, the constant map to the trivial group is the unique homomorphism into it (our own).

**Paper or page:** [Trivial Group is Initial Object](https://proofwiki.org/wiki/Trivial_Group_is_Initial_Object), [Trivial Group is Terminal Object of Category of Groups](https://proofwiki.org/wiki/Trivial_Group_is_Terminal_Object_of_Category_of_Groups), [Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty). It says: “Let 1 = {e} be the trivial group. Then 1 is an initial object of Grp.”

**Sources:**

- [ProofWiki, Trivial Group is Initial Object](https://proofwiki.org/wiki/Trivial_Group_is_Initial_Object)
- [ProofWiki, Trivial Group is Terminal Object of Category of Groups](https://proofwiki.org/wiki/Trivial_Group_is_Terminal_Object_of_Category_of_Groups)
- [ProofWiki, Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty)

### Commutative theories make homomorphism sets into algebras and give tensor products

**Remember:** In a commutative theory, every operation is itself a homomorphism.

*Makes the theorem clean to state or prove.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18D15, 08A99. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** An algebraic theory is commutative if, in every algebra A, each n-ary operation defines a homomorphism Aⁿ → A for every arity n.

**Problem.** For a commutative algebraic theory, the set Hom(A, B) of homomorphisms between algebras is again an algebra. The category of algebras is closed symmetric monoidal, with Hom(A ⊗ B, C) ≅ Hom(A, Hom(B, C)), as for abelian groups.

**How the definition helps.** Commutativity ensures that pointwise operations preserve the homomorphism condition. Thus Hom(A,B) is an algebra. The tensor product represents maps that are homomorphisms separately in each variable (our own). The closed symmetric monoidal structure follows from the theorem of Keigher and Seal.

**nLab:** [commutative algebraic theory](https://ncatlab.org/nlab/show/commutative+algebraic+theory). It says: “We discuss that the category of algebras for an algebraic theory over a commutative algebraic theory is canonically a closed symmetric monoidal category (Keigher 78, Seal 12).”

**Sources:**

- [Anders Kock, Monads on symmetric monoidal closed categories, Archiv der Mathematik 21 (1970) 1–10](https://doi.org/10.1007/BF01220868)
- [William Keigher, Symmetric monoidal closed categories generated by commutative adjoint monads, Cahiers de Topologie et Géométrie Différentielle Catégoriques 19 (1978) 269–293](http://www.numdam.org/item/?id=CTGDC_1978__19_3_269_0)

### Isomorphic Lawvere theories give isomorphic categories of algebras

**Remember:** An isomorphism of theories transports the functors that define algebras.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 08B05. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A Lawvere theory is a small category with finite products whose objects are the specified finite powers of one distinguished object. Its algebras are finite-product-preserving functors to Set, and their homomorphisms are natural transformations.

**Problem.** An isomorphism of Lawvere theories induces an isomorphism of their categories of algebras that preserves underlying sets. For example, Higman and Neumann presented groups using the single operation of right division and one equation.

**How the definition helps.** Precomposition with the theory isomorphism transports algebras and their natural transformations (our own). Precomposition with its inverse undoes this action. Evaluation at the distinguished object gives the same underlying set because the isomorphism preserves that object.

**nLab:** [clone](https://ncatlab.org/nlab/show/clone). It says: “Abstract clones are equivalent to Lawvere theories, and also to finitary monads. These are all different ways of giving presentation-invariant descriptions of single-sorted algebraic theories.”

**Wikipedia:** [Clone (algebra)](https://en.wikipedia.org/wiki/Clone_%28algebra%29), [Lawvere theory](https://en.wikipedia.org/wiki/Lawvere_theory). It says: “A model of a Lawvere theory in a category C with finite products is a finite-product preserving functor M: L → C.”

**Sources:**

- [G. Higman and B. H. Neumann, Groups as groupoids with one law, Publicationes Mathematicae Debrecen 2 (1952)](https://doi.org/10.5486/pmd.1952.2.3-4.10)

### Lawvere theories define group objects in every category at once

**Remember:** Models interpret all derived operations by preserving finite products.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18C40. arXiv math.CT. Level 3: graduate.

**Definition.** A Lawvere theory is a category T with finite products in which every object is a finite power xⁿ of one generic object x. You can think of the maps xⁿ → x as the n-ary operations of the theory. A model of T in a category C with finite products is a functor T → C that preserves products.

**Problem.** A group object in a category C with finite products is a product-preserving functor from the Lawvere theory of groups to C. In Set, Top and smooth manifolds these are the groups, topological groups and Lie groups. The theory, and so the definition, does not depend on a chosen presentation.

**How the definition helps.** Derived group operations are arrows in the theory, and equations are equalities of arrows (our own). A product-preserving functor therefore interprets every operation and respects every equation in C. Equivalent presentations give the same models.

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “For example, a topological group may be identified with a functor”

**Sources:**

- [F. William Lawvere, Functorial semantics of algebraic theories, PhD thesis, Columbia University (1963); Reprints in Theory and Applications of Categories 5 (2004) 1–121](http://tac.mta.ca/tac/reprints/articles/5/tr5abs.html)

### Lawvere theory functors give free algebras on finitely many generators

**Remember:** Maps from the functor T(n, −) to an algebra amount to choosing n elements.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 08B20. arXiv math.CT. Level 3: graduate.

**Definition.** In a Lawvere theory T, each object n is the specified n-fold power of the generic object 1. A T-algebra is a finite-product-preserving functor T → Set, and an algebra map is a natural transformation.

**Problem.** The free T-algebra on n generators is the functor T(n, −), which sends m to the set of maps n → m. An assignment of the n generators into any T-algebra extends uniquely to a homomorphism.

**How the definition helps.** The representable T(n,−) preserves products by their universal property (our own). Yoneda identifies maps from this representable to A with elements of A(n). Product preservation identifies these with assignments of n elements of A(1).

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “For S = (n) ∈ FinSet a finite set with n elements , the free T-algebra on S is just the representable”

**Sources:** none listed. No primary source with a working link was found.

### Lawvere theory models restrict by composing functors

**Remember:** To restrict a model, compose it with the map of theories.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A model of a Lawvere theory is a finite-product-preserving functor from the theory to Set. A map of theories preserves the distinguished object and its specified finite powers.

**Problem.** A map f from a Lawvere theory T₁ to T₂ gives a functor from T₂-models to T₁-models. This includes forgetting the inverse operation of a group to get a monoid.

**How the definition helps.** Precomposition with f preserves finite products because both functors preserve them. Restricting each natural transformation along f gives the action on homomorphisms (our own).

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “Let T₁ and T₂ be Lawvere theories and f: T₁ → T₂ a morphism. Write f\*: T₂ Alg → T₁ Alg for the functor on categories of algebras induced by precomposition with f.”

**Sources:** none listed. No primary source with a working link was found.

### A comonad's standard simplicial resolution is contractible after forgetting structure

**Remember:** The unit of the adjunction is a free extra degeneracy.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18G31. arXiv math.CT. Level 3: graduate.

**Definition.** For an adjunction F ⊣ U with unit η and counit ε, put L = FU and δ = FηU. The augmented simplicial resolution of G has Lⁿ⁺¹G in degree n, with augmentation ε<sub>G</sub>. Face i applies LⁱεLⁿ⁻ⁱ and degeneracy i applies LⁱδLⁿ⁻ⁱ at G for 0 ≤ i ≤ n.

**Problem.** For every group G, the standard simplicial resolution is free in every degree, has π₀ = G, and has all higher homotopy groups zero. For any adjoint pair, the resolution becomes homotopy equivalent to its augmentation after applying the right adjoint.

**How the definition helps.** After applying U, the unit inserts an extra degeneracy, which contracts the augmented resolution by the adjunction identities. For free groups, each positive iterate of FU is free. The contraction gives π₀ ≅ G and trivial higher homotopy groups (our own).

**nLab:** [simplicial resolution](https://ncatlab.org/nlab/show/simplicial+resolution). It says: “The resulting object is an augmented simplicial group that is free in all non-negative dimensions and is acyclic. It has zeroth homotopy equal to G and all homotopy groups are trivial.”

**Paper or page:** [Simplicial, tag 08ND](https://stacks.math.columbia.edu/tag/08ND). It says: “the maps 1<sub>V</sub> ⋆ ε : V ∘ X → V, and ε ⋆ 1<sub>U</sub> : X ∘ U → U are homotopy equivalences.”

**Sources:** none listed. No primary source with a working link was found.

### Defining idempotent monads by equal unit insertions makes algebras fixed points

**Remember:** The only possible algebra action undoes the unit.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A monad (T,η,μ) is idempotent if μ is invertible, equivalently if Tη = ηT. A T-algebra action on X is a map a from TX to X satisfying aη<sub>X</sub> = id<sub>X</sub> and aμ<sub>X</sub> = aT(a).

**Problem.** For an idempotent monad, an object X has an algebra structure exactly when its unit η : X → T X is invertible. Then the only action is the inverse of η.

**How the definition helps.** For an action a, naturality gives η<sub>X</sub> a = T(a)η<sub>TX</sub> = T(aη<sub>X</sub>) = id<sub>TX</sub> (our own). Thus a must invert η<sub>X</sub>. Conversely, if η<sub>X</sub> is invertible, then T(η<sub>X</sub>⁻¹) = μ<sub>X</sub> by the monad unit law. Hence its inverse satisfies both action laws (our own).

**nLab:** [idempotent monad](https://ncatlab.org/nlab/show/idempotent+monad). It says: “every algebra is a fixed point”

**Sources:** none listed. No primary source with a working link was found.

### Defining monoids as list algebras makes general associativity hold by definition

**Remember:** Every bracketing is a way to cut one list into blocks.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A list algebra assigns a value a(L) in M to every finite list L in M, with a(\[x\]) = x for each x. For every list of lists, evaluating its concatenation must equal evaluating the list of its block values.

**Problem.** In a list algebra, the product xy = a\[x, y\] is associative, with identity a\[ \]. More generally, every bracketing of a product of n elements gives the same result.

**How the definition helps.** The block law collapses any innermost bracket without changing the list value (our own). Repeating gives the same value for every bracketing. Inserting an empty block on either side of \[x\] gives the identity laws.

**nLab:** [list monad](https://ncatlab.org/nlab/show/list+monad). It says: “The Eilenberg-Moore category of modules over the list monad is the category of monoids Mon:”

**Sources:** none listed. No primary source with a working link was found.

### Defining the state monad by currying makes its sequencing laws automatic

**Remember:** Every adjunction gives a monad, so state inherits the monad laws.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 68N18. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** For a fixed store type W, the state monad is the monad induced by the adjunction between W × (−) and functions from W. Its functor takes X to the type of functions W → W × X.

**Problem.** Sequencing of store-passing computations is associative and has a two-sided identity.

**How the definition helps.** Every adjunction induces a monad, whose Kleisli composition is associative and unital. Here that composition runs the second computation with the store returned by the first (our own).

**nLab:** [state monad](https://ncatlab.org/nlab/show/state+monad). It says: “Here the operation \[W, W × (-)\] is the monad on the type system which is induced by the above adjunction”

**Sources:**

- [Eugenio Moggi, Notions of Computation and Monads](https://www.cs.cmu.edu/~crary/819-f09/Moggi91.pdf)

### Distributive laws give exactly the structure needed to compose two monads

**Remember:** To multiply T S T S, swap the middle S T first.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** For monads S,T, a distributive law is a natural transformation λ from ST to TS respecting both units and both multiplications. The unit equations are λ∘ηˢT = Tηˢ and λ∘Sηᵀ = ηᵀS. The multiplication equations are λ∘μˢT = Tμˢ∘λS∘Sλ and λ∘Sμᵀ = μᵀS∘Tλ∘λT.

**Problem.** Beck's theorem says that distributive laws S T → T S correspond to liftings of T to the category of S-algebras. A lifting is a monad on S-algebras that becomes T when you forget the S-algebra structure. For example, the abelian group monad lifts to a monad on monoids, and the algebras of this lifted monad are rings.

**How the definition helps.** For an S-algebra action a on X, the composite T(a)∘λ<sub>X</sub> gives an S-action on TX (our own). The four equations give the algebra laws and make the unit and multiplication of T algebra maps. Beck’s theorem recovers λ from the lifting on free algebras.

**nLab:** [distributive law](https://ncatlab.org/nlab/show/distributive+law). It says: “Such a transformation λ: S T → T S, satisfying suitable axioms to make T S into a monad, is called a distributive law, because of the motivating example relating addition to multiplication in a ring.”

**Sources:**

- [Jon Beck, Distributive laws, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80, Springer (1969); reprinted in Reprints in Theory and Applications of Categories 18 (2008)](https://doi.org/10.1007/BFb0083084)

### Strong monads interpret sequencing in a context

**Remember:** The strength lets the context ride along into the computation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18D25, 18C50. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** A strong monad has natural maps s<sub>X</sub>,Y from X ⊗ TY to T(X ⊗ Y). They satisfy the tensorial strength unit and associativity diagrams, and the monad unit and multiplication are strong natural transformations.

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

**Definition.** A Kleisli triple assigns TX to each X, a unit η<sub>X</sub>:X→TX, and an extension f♯:TX→TY for each f:X→TY. The laws are η<sub>X</sub>♯ = id<sub>TX</sub>, f♯∘η<sub>X</sub> = f and (g♯∘f)♯ = g♯∘f♯ whenever the arrows compose.

**Problem.** Kleisli composition puts f : X → T Y and g : Y → T Z together as g♯ ∘ f. This composition is associative. Kleisli arrows model computations with side effects in programming.

**How the definition helps.** The extension law identifies (h♯∘g)♯ with h♯∘g♯ (our own). Composing either with f gives the same result by associativity of ordinary composition.

**Wikipedia:** [Kleisli category](https://en.wikipedia.org/wiki/Kleisli_category). It says: “It follows trivially from these properties that Kleisli composition is associative”

**Sources:**

- [Heinrich Kleisli, Every standard construction is induced by a pair of adjoint functors, Proceedings of the American Mathematical Society 16 (1965), 544–546](https://doi.org/10.1090/S0002-9939-1965-0177024-4)

### Kleisli maps into T Y make the Kleisli adjunction initial among realizations

**Remember:** Every realization receives the free maps.

*True by definition. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads). arXiv math.CT. Level 3: graduate.

**Definition.** A realization of (T,η,μ) is an adjunction L ⊣ R inducing that functor, unit and multiplication. A Kleisli arrow from X to Y is a map f:X→TY, with identity η<sub>X</sub> and composition g ⋆ f = μ∘T(g)∘f.

**Problem.** The Kleisli realization is initial among all realizations of T. So each realization receives exactly one comparison functor from it that respects the adjunctions.

**How the definition helps.** Compatibility forces the comparison to send X to LX and f:X→RLY to its adjoint transpose (our own). The unit transposes to the identity, and Kleisli composition transposes to ordinary composition by the adjunction identities. These forced assignments give the unique comparison.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “initial in the category of adjunctions for T”

**Sources:** none listed. No primary source with a working link was found.

### Kleisli maps into T Y show every monad comes from an adjunction

**Remember:** The two sets of maps are the same set.

*True by definition. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** For a monad (T,η,μ) on C, its Kleisli category has the objects of C and arrows f:X→TY from X to Y. Its identity at X is η<sub>X</sub> and its composition is g ⋆ f = μ∘T(g)∘f.

**Problem.** Every monad T arises from an adjunction between C and its Kleisli category. The left adjoint is the identity on objects, and the right adjoint sends Y to T Y.

**How the definition helps.** The left adjoint sends h to η∘h and the right adjoint sends f to μ∘T(f) (our own). The defining hom-sets agree identically, giving the adjunction. Its unit is η and applying the right adjoint to the counit gives μ.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “Each Kleisli category comes with an adjunction”

**Sources:**

- [Heinrich Kleisli, Every standard construction is induced by a pair of adjoint functors, Proceedings of the American Mathematical Society 16 (1965), 544–546](https://doi.org/10.1090/S0002-9939-1965-0177024-4)

### Locally presentable categories make the adjoint functor theorem clean

**Remember:** Locally presentable means generated under colimits by a small set of small objects.

*Makes the theorem clean to state or prove.* MSC 18C35 (Accessible and locally presentable categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A locally presentable category is locally small and cocomplete. For some regular cardinal λ, it has a small set of λ-presentable objects whose λ-filtered colimits give every object up to isomorphism. An object A is λ-presentable if Hom(A,−) preserves λ-filtered colimits.

**Problem.** Let F be a functor between locally presentable categories. Then F has a right adjoint if and only if it preserves small colimits. It has a left adjoint if and only if it is accessible and preserves small limits.

**How the definition helps.** The adjoint functor theorems for locally presentable categories supply the solution sets (our own). For a limit-preserving functor, accessibility supplies the needed size bound. Accessibility means preserving λ-filtered colimits for some regular cardinal λ.

**nLab:** [adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem), [locally presentable category](https://ncatlab.org/nlab/show/locally+presentable+category). It says: “indicating the need for something more than just continuity to force a functor between locally presentable categories to be a right adjoint”

**Sources:**

- [Jiří Adámek, Jiří Rosický, Locally presentable and accessible categories, London Mathematical Society Lecture Note Series 189, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9780511600579)

### Defining folds by initiality gives the fusion law for free

**Remember:** A fold is the only algebra map out of the initial algebra.

*True by definition. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 18A40, 68N18. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** For an endofunctor F, an algebra consists of an object A and an arrow φ:FA→A. A map h from φ to ψ satisfies h∘φ = ψ∘Fh. The fold of φ is the unique algebra map from the initial F-algebra to φ.

**Problem.** Fusion law: if h : A → B is an algebra map from φ to ψ, then h ∘ cata φ = cata ψ.

**How the definition helps.** The composite h∘cata φ is an algebra map to ψ (our own). Initiality gives exactly one such map, namely cata ψ.

**nLab:** [catamorphism](https://ncatlab.org/nlab/show/catamorphism), [recursion scheme](https://ncatlab.org/nlab/show/recursion+scheme). It says: “In category theoretic terms, this is simply the unique homomorphism out of an initial algebra.”

**Sources:**

- [Erik Meijer, Maarten Fokkinga, Ross Paterson, Functional programming with bananas, lenses, envelopes and barbed wire, FPCA 1991, LNCS 523](https://doi.org/10.1007/3540543961_7)

### Parametrized natural numbers objects give primitive recursion without exponentials

**Remember:** Recursion must be allowed to carry extra inputs along.

*Makes the theorem clean to state or prove.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 03G30. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** In a category with finite products, a parametrized natural numbers object consists of N with zero z:1→N and successor s:N→N. For each f:A→X and g:X→X there must be exactly one φ:A×N→X satisfying the recursion equations. These are φ∘⟨id<sub>A</sub>,z!⟩ = f and φ∘(id<sub>A</sub>×s) = g∘φ, where ! maps A to the terminal object.

**Problem.** A parametrized natural numbers object defines addition and multiplication by recursion. In the free category with finite products and such an object, the maps Nᵐ→N give exactly the m-argument primitive recursive functions (Román 1989).

**How the definition helps.** The parameter A carries the extra arguments through recursion without exponentials. Iterating successor gives addition, and iterating addition while retaining a parameter gives multiplication (our own). Román’s characterization identifies the numerical maps in the free category with the primitive recursive functions.

**nLab:** [natural numbers object](https://ncatlab.org/nlab/show/natural+numbers+object). It says: “if E is not cartesian closed, then it is better to explicitly assume a stronger version of this definition "with parameters" (which follows automatically when E is cartesian closed, such as when E is a topos).”

**Sources:**

- [Leopoldo Román, Cartesian categories with natural numbers object, Journal of Pure and Applied Algebra 58 (1989) 267–278](https://doi.org/10.1016/0022-4049(89)90042-X)

### Hyperdoctrines define the quantifiers as adjoints to substitution

**Remember:** ∃ is left adjoint to substitution and ∀ is right adjoint to it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C50 (Categorical semantics of formal languages), 18D30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** For a substitution map f:A→B, reindexing takes predicates on B to predicates on A. Quantifiers along f are its adjoints, with ∃<sub>f</sub> left adjoint and ∀<sub>f</sub> right adjoint. Beck–Chevalley requires the canonical comparisons between reindexing and quantifying around each relevant pullback square to be invertible.

**Problem.** In a hyperdoctrine, the rules for ∃ and ∀ are sound, because they are the adjunctions ∃<sub>f</sub> ⊣ P(f) ⊣ ∀<sub>f</sub>. The Beck–Chevalley condition makes quantification commute with substitution of variables.

**How the definition helps.** The adjunctions express exactly the inference rules relating a quantified predicate to one in the extended context (our own). Beck–Chevalley gives the substitution rule by identifying the two routes around a pullback.

**nLab:** [hyperdoctrine](https://ncatlab.org/nlab/show/hyperdoctrine), [Beck-Chevalley condition](https://ncatlab.org/nlab/show/Beck-Chevalley+condition). It says: “The Beck-Chevalley condition ensures that quantification interacts with substitution of variables as expected”

**Sources:**

- [F. William Lawvere, Adjointness in Foundations, Dialectica 23 (1969); Reprints in Theory and Applications of Categories 16 (2006) 1–16](http://tac.mta.ca/tac/reprints/articles/16/tr16abs.html)
- [Robert A. G. Seely, Hyperdoctrines, Natural Deduction and the Beck Condition, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 29 (1983) 505–542](https://www.math.mcgill.ca/seely/ZML/ZML.PDF)

### Reflexive objects validate beta reduction by undoing function encoding

**Remember:** Decode an encoded function and get the same function back.

*True by definition. Confidence: medium.* MSC 18C50 (Categorical semantics of formal languages), 03B40. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** A reflexive object in a cartesian closed category is an object U with arrows ℓ:Uᵁ→U and a:U→Uᵁ satisfying a∘ℓ = id<sub>U</sub>ᵁ.

**Problem.** A reflexive object gives an interpretation of untyped lambda calculus that respects beta reduction. This rule replaces a function application by the body with its input substituted for the parameter.

**How the definition helps.** The equation makes decoding after abstraction recover the original function. Evaluation therefore applies that function to the argument. The substitution lemma identifies the result with the interpretation of the substituted body (our own).

**nLab:** [lambda-calculus](https://ncatlab.org/nlab/show/lambda-calculus). It says: “such that a ∘ ℓ = 1 (to validate the β equation).”

**Sources:** none listed. No primary source with a working link was found.

### Defining exponentials by currying makes exponentiable objects closed under products

**Remember:** Two extra inputs can travel as one pair.

*True by definition.* MSC 18D15 (Closed categories (closed monoidal and Cartesian closed categories, etc.)), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** In a category with binary products, an exponential Yᴬ represents maps X × A → Y. This means that Hom(X,Yᴬ) ≅ Hom(X × A,Y) naturally in every X.

**Problem.** Suppose that exponentials by A and by B exist for every object. Then exponentials by A × B exist too, and Y to the power A × B is (Yᴬ)ᴮ.

**How the definition helps.** Reordering product factors identifies X × (A × B) with (X × B) × A (our own). Currying twice identifies maps from this product to Y with maps X → (Yᴬ)ᴮ. Naturality gives the claimed exponential.

**nLab:** [exponential object](https://ncatlab.org/nlab/show/exponential+object). It says: “showing that exponentiable objects are closed under products.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted limits are the right notion of limit for enriched categories

**Remember:** The weight says how many legs, of what shape, each point's cone has.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** For a small enriched diagram F:K→C and weight W:K→V, a W-weighted limit represents the enriched functor c ↦ \[K,V\](W,C(c,F(−))). Thus C(c,L) is naturally isomorphic to this object of enriched natural transformations.

**Problem.** Over a complete and cocomplete symmetric monoidal closed base, an enriched category has all small weighted limits exactly when it has conical limits and powers. Powers need not follow from conical limits alone, and the Bousfield–Kan homotopy limit is a weighted limit.

**How the definition helps.** A power represents a cone weighted at one object. Kelly’s end formula constructs general weighted limits from powers and conical limits. For an ordinary small diagram of fibrant simplicial sets, weighting by k ↦ N(K/k) gives the Bousfield–Kan formula.

**nLab:** [weighted limit](https://ncatlab.org/nlab/show/weighted+limit), [conical limit](https://ncatlab.org/nlab/show/conical+limit). It says: “However, it is not true that completeness under a class of weights can always be expressed as completeness under a class of diagrams.”

**Sources:**

- [Francis Borceux, G. M. Kelly, A notion of limit for enriched categories, Bulletin of the Australian Mathematical Society 12 (1975) 49–72](https://doi.org/10.1017/S0004972700023637)
- [G. M. Kelly, Basic Concepts of Enriched Category Theory, LMS Lecture Note Series 64 (1982); Reprints in Theory and Applications of Categories 10 (2005)](http://www.tac.mta.ca/tac/reprints/articles/10/tr10abs.html)

### In Grothendieck fibrations, the coherence of pseudofunctors comes for free

**Remember:** Ask only that pullbacks exist; the universal property picks them and glues them.

*True by definition. Confidence: medium.* MSC 18D30 (Fibered categories), 18N10. arXiv math.CT. Level 3: graduate.

**Definition.** A fibration p:E→B admits a cartesian arrow u:x→e above every arrow f:b→p(e), for every e. Cartesian means that every v:y→e above f∘h factors uniquely as u∘w with p(w)=h, for each such h.

**Problem.** Chosen cartesian lifts in a fibration determine a pseudofunctor Bᵒᵖ → Cat. The comparison isomorphisms for composition and identities satisfy the coherence laws. The Grothendieck construction turns every such pseudofunctor into a fibration.

**How the definition helps.** Composites of cartesian arrows are cartesian, so chosen lifts compare with composite lifts by unique vertical isomorphisms (our own). Uniqueness gives both coherence laws. Conversely, in the Grothendieck construction the identity on each reindexed object specifies its cartesian lift.

**nLab:** [Grothendieck fibration](https://ncatlab.org/nlab/show/Grothendieck+fibration). It says: “By contrast, pseudofunctors are an "algebraic" structure, since the functors f\* are specified, together with the necessary coherence data and axioms; the latter come for free in a fibration because of the universal property.”

**Sources:**

- [Alexander Grothendieck, Revêtements étales et groupe fondamental (SGA 1), exposé VI, LNM 224 (1971), arXiv:math/0206203](https://arxiv.org/abs/math/0206203)
- [Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (2004), arXiv:math/0412512](https://arxiv.org/abs/math/0412512)

### Defining a functor by a representation gives its action on morphisms for free

**Remember:** Say what maps into F(c) are, and F already knows its action on morphisms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D60 (Profunctors (= correspondences, distributors, modules)), 18A05, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** For a profunctor R:Dᵒᵖ×C→Set, a right functor presentation chooses an object Fc in D for every c in C. It specifies bijections R(d,c) ≅ Hom<sub>D</sub>(d,Fc), natural in d for each c.

**Problem.** Such presentations are in bijection with functors F : C → D that come with a natural isomorphism R(d, c) ≅ D(d, F c). The action of F on morphisms and its functoriality follow automatically.

**How the definition helps.** An arrow c→c′ induces a transformation R(−,c)→R(−,c′). Yoneda identifies this with a unique arrow Fc→Fc′ under the chosen representations (our own). Uniqueness gives the functor laws and naturality in c, while forgetting the arrow action recovers the presentation.

**nLab:** [representability determines functoriality](https://ncatlab.org/nlab/show/representability+determines+functoriality). It says: “Since the action of the functor on morphisms is determined by the data of a representation of a profunctor, we can even define the functor by giving that data.”

**Sources:**

- [Ross Street, The core of adjoint functors, 2011, arXiv:1112.0094 (a related result for adjoint functors, as the page says)](https://arxiv.org/abs/1112.0094)

### In semiadditive categories, biproducts give addition of morphisms for free

**Remember:** When sums and products agree, add arrows by copying, acting and merging.

*True by definition.* MSC 18E05 (Preadditive, additive categories), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** A category with a zero object and finite products and coproducts is semiadditive if each canonical comparison A⊔B → A×B is invertible. Its diagonal entries are identities and its off-diagonal entries are zero maps.

**Problem.** A semiadditive category is enriched in commutative monoids: each hom-set has an addition that composition respects. So an additive category is a semiadditive category with a property (negatives exist), not with extra structure.

**How the definition helps.** Define f+g by composing the diagonal, f⊕g, and the codiagonal (our own). Swapping summands proves commutativity, and using three summands proves associativity. The zero map is the identity for addition, and naturality of diagonals and codiagonals gives distributivity of composition. Thus additive inverses, when they exist, are unique.

**nLab:** [biproduct](https://ncatlab.org/nlab/show/biproduct). It says: “A semiadditive category is automatically enriched over the monoidal category of commutative monoids with the usual tensor product, as follows.”

**Sources:**

- [Stephen Lack, Non-canonical isomorphisms, Journal of Pure and Applied Algebra 216 (2012) 593–597, arXiv:0912.2126](https://arxiv.org/abs/0912.2126)

### Compactly generated Hausdorff spaces form a regular category

**Remember:** Test openness by pulling back along every map from a compact Hausdorff space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 54D50, 18F60. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A Hausdorff space X is compactly generated if it passes this test for every subset U. If h⁻¹(U) is open for every continuous h:K→X from a compact Hausdorff space K, then U is open.

**Problem.** The category of compactly generated Hausdorff spaces is regular, so quotient maps in it are stable under pullback. Top is not regular.

**How the definition helps.** The regularity theorem for compactly generated Hausdorff spaces gives pullback stability of regular epimorphisms (our own). Its quotients and pullbacks are taken in that category. The finite non-Hausdorff poset example in Top has a quotient whose pullback fails to be a quotient.

**nLab:** [regular category](https://ncatlab.org/nlab/show/regular+category). It says: “this example serves to show also that the category Top of all topological spaces is not regular.”

**Sources:**

- [F. Cagliari, S. Mantovani, E. Vitale, Regularity of the category of Kelley spaces, Applied Categorical Structures 3 (1995) 357–361](https://doi.org/10.1007/BF00872904)

### Regular categories have the images that make relations compose

**Remember:** Regular means images exist and survive pullback.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18B10. arXiv math.CT. Level 3: graduate.

**Definition.** A regular category has finite limits, coequalizers of all kernel pairs, and pullback-stable regular epimorphisms. A kernel pair is a map’s pullback along itself. A regular epimorphism is a coequalizer of some parallel pair.

**Problem.** In a regular category, relations (subobjects of c × d) compose by taking the image of the pullback span, and this composition is associative. So relations form an allegory, as they do in Set.

**How the definition helps.** Regularity supplies the image of the pullback of two relations over their common object. Pullback stability makes either bracketing of three relations the image of their triple pullback (our own). This gives associativity in the standard construction of the allegory of relations.

**nLab:** [Rel](https://ncatlab.org/nlab/show/Rel), [regular category](https://ncatlab.org/nlab/show/regular+category). It says: “the axioms of a regular category ensure that Rel(C) is a 2-category with desirable properties.”

**Sources:**

- [Peter J. Freyd, Andre Scedrov, Categories, Allegories, North-Holland Mathematical Library 39 (1990), chapter 2: Allegories](https://doi.org/10.1016/s0924-6509(08)70049-7)

### A compact projective generator recognizes module categories among abelian categories

**Remember:** One small projective that sees everything turns a category into modules.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 16D90, 18E20. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** In a cocomplete abelian category, a compact projective generator P is an object for which Hom(P,−) is faithful, exact and preserves arbitrary direct sums.

**Problem.** An abelian category with small coproducts is equivalent to left modules over some ring exactly when it has a compact projective generator P. One may take the ring End(P)ᵒᵖ. Thus Mod-R and Mod-S are equivalent exactly when S is isomorphic to the endomorphism ring of such a generator of Mod-R.

**How the definition helps.** The free rank-one module has all three properties. Conversely, sums of copies of P give presentations, and Hom(P,−) sends these to free module presentations (our own). The module-category characterization gives the equivalence, and applying it within Mod-R yields Morita’s criterion.

**nLab:** [Freyd-Mitchell embedding theorem](https://ncatlab.org/nlab/show/Freyd-Mitchell+embedding+theorem). It says: “If C has all small coproducts and has a compact projective generator, then C ≃ R Mod for some ring R.”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “(Note that not all Grothendieck categories allow projective resolutions for all objects; examples are categories of sheaves of abelian groups on many topological spaces, such as on the space of real numbers.)”

**Sources:**

- [P. Freyd, Abelian Categories, Harper &amp; Row (1964), Exercise F on p. 103; reprinted in Reprints in Theory Appl. Categ. 3 (2003)](http://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html)

### A generator lets cocontinuous functors on Grothendieck categories have right adjoints

**Remember:** One generator and a set of quotients let Freyd’s theorem supply the adjoint.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck category is a cocomplete abelian category with exact filtered colimits and a generator U. Being a generator means that Hom(U,−) is faithful.

**Problem.** A functor from a Grothendieck category to a category with small Hom-sets has a right adjoint exactly when it preserves all small colimits. Similarly, a functor 𝒜ᵒᵖ → Sets is representable exactly when it turns colimits into limits.

**How the definition helps.** The generator supplies a small generating family for Freyd’s special adjoint functor theorem. Quotients correspond to subobjects by their kernels, and subobjects of each object form a set. The representability form of the same theorem applies to contravariant Set-valued functors (our own).

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “it has a right adjoint if and only if it commutes with all colimits. This follows from Peter J. Freyd's special adjoint functor theorem and its dual.”

**Paper or page:** [Injectives, Lemma 19.13.1](https://stacks.math.columbia.edu/tag/07D7). It says: “Let F : 𝒜ᵒᵖᵖ → Sets be a functor. Then F is representable if and only if F commutes with colimits”

**Sources:**

- [A. Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### A reflective embedding into modules makes every Grothendieck category complete

**Remember:** Gabriel–Popescu puts the category inside modules as a reflective subcategory.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E20, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A full subcategory is reflective if its inclusion has a left adjoint. Thus every object has a universal arrow into the subcategory.

**Problem.** Every Grothendieck category has all small limits, in particular all products. Products need not be exact, as sheaves on a space show.

**How the definition helps.** Gabriel–Popescu realizes a Grothendieck category as a full reflective subcategory of a module category (our own). Reflective subcategories are closed under existing limits up to isomorphism, and module categories have all small limits. Exactness of products can still fail for sheaves.

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

**Definition.** An abelian category is an additive category with all kernels and cokernels, with one more condition. Every monomorphism is the kernel of its cokernel, and every epimorphism is the cokernel of its kernel. Examples are the modules over a ring and the sheaves of abelian groups on a space or a site.

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

**Definition.** Regard a ring R as a one-object preadditive category with composition given by multiplication. Its free abelian category Ab(R) represents additive functors from R to abelian categories by exact functors from Ab(R), including natural transformations.

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

**How the definition helps.** Grothendieck chose the axioms so that one theorem gives injectives for modules and for sheaves at once. In the Tôhoku paper, he chose AB5 and a generator for this purpose, and both module and sheaf categories satisfy them. Sheaf cohomology then becomes a derived functor of global sections on every space. The proof that a Grothendieck category has an injective cogenerator is still real work.

**nLab:** [Grothendieck category](https://ncatlab.org/nlab/show/Grothendieck+category), [Tôhoku](https://ncatlab.org/nlab/show/T%C3%B4hoku), [additive and abelian categories](https://ncatlab.org/nlab/show/additive+and+abelian+categories). It says: “as well as some additional axioms (including AB5) to abelian categories ensuring existence of sufficiently many injective objects, what is now called a Grothendieck category.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal (2) 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### In abelian categories, monic and epic maps are isomorphisms

**Remember:** Every monic is a kernel, so monic plus epic means isomorphism.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18A20. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is an additive category with kernels and cokernels in which every monomorphism is a kernel and every epimorphism is a cokernel.

**Problem.** In an abelian category, a map is an isomorphism exactly when it is both monic and epic. Many other categories lack this property.

**How the definition helps.** An epic arrow has zero cokernel, and a monic arrow in an abelian category is the kernel of its cokernel (our own). A kernel of a zero arrow is invertible, and every isomorphism is monic and epic. Multiplication by two on ℤ is monic and epic among torsion-free abelian groups, yet fails to be a kernel there.

**nLab:** [balanced category](https://ncatlab.org/nlab/show/balanced+category). It says: “An additive category need not be balanced: A counterexample is the category of torsion subgroup-free abelian groups, each nonzero homomorphism ℤ → ℤ is both monic and epic.”

**Paper or page:** [An Infinitely Large Napkin: Cats: Abelian](https://venhance.github.io/napkin/Napkin.pdf), [An Infinitely Large Napkin: Cats: Abelian](https://venhance.github.io/napkin/Napkin.pdf). It says: “In an abelian category, a map is an isomorphism if and only if it is monic and epic.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Localizing subcategories make the Serre quotient a full subcategory of closed objects

**Remember:** A section functor turns an abstract quotient into concrete closed objects.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35, 18E40. arXiv math.CT. Level 3: graduate.

**Definition.** A Serre subcategory 𝒞 of 𝒜 is localizing when the quotient functor T: 𝒜 → 𝒜/𝒞 has a right adjoint S, the section functor. An object X is 𝒞-closed when the unit X → ST(X) is an isomorphism.

**Problem.** For a localizing subcategory 𝒞, the section functor is fully faithful and identifies 𝒜/𝒞 with the full subcategory of 𝒞-closed objects. Finite-dimensional spaces in Mod(k) are a Serre subcategory with no such description.

**How the definition helps.** The section theorem for a Serre quotient makes its right adjoint fully faithful. The adjunction then identifies its image with the objects having invertible unit. A quotient with a right adjoint preserves coproducts, so its kernel is closed under them (our own). A countable sum of copies of k excludes the finite-dimensional subcategory.

**nLab:** [localizing subcategory](https://ncatlab.org/nlab/show/localizing+subcategory). It says: “The section functor S<sub>T</sub> realizes the equivalence of categories between A/T and the full subcategory of A generated by T-closed objects.”

**Wikipedia:** [Localizing subcategory](https://en.wikipedia.org/wiki/Localizing_subcategory), [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category). It says: “Since then T, as a left adjoint, preserves colimits, each localizing subcategory is closed under colimits.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Requiring finitely presented subobjects makes coherent objects an abelian subcategory

**Remember:** Coherence asks subobjects to stay finitely presented, so kernels stay inside.

*Rules out counterexamples. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 13E99. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** An object of a Grothendieck category is coherent when it is finitely presented and each finitely generated subobject is also finitely presented. Finitely presented alone is the weaker condition it replaces.

**Problem.** In any Grothendieck category the coherent objects form an abelian subcategory, and the inclusion is exact. Finitely presented modules over a ring that is not coherent are not closed under kernels.

**How the definition helps.** For coherent source and target, the image is a finitely generated subobject of the target, hence finitely presented (our own). The kernel is then finitely generated inside the coherent source and inherits coherence. The coherent-subcategory theorem gives cokernel closure and exact inclusion. In k\[x,y₁,y₂,…\]/(xy₁,xy₂,…) the kernel of multiplication by x lacks finite generators (our own).

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “The full subcategory of all coherent objects in 𝒜 is abelian and the inclusion functor is exact.”

**Sources:**

- [I. Herzog, The Ziegler spectrum of a locally coherent Grothendieck category, Proc. London Math. Soc. 74 (1997) 503–558](https://doi.org/10.1112/S002461159700018X)

### Serre quotients by fractions make K₀ of the quotient a cokernel

**Remember:** Classes from the killed subcategory are exactly what K₀ of the quotient forgets.

*True by definition.* MSC 18E10 (Abelian categories, Grothendieck categories), 18F30. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** For a Serre subcategory 𝒞 of 𝒜, the Serre quotient localizes 𝒜 at all arrows with kernel and cokernel in 𝒞. For an essentially small abelian category, K₀ has generators \[X\] indexed by isomorphism classes and relations \[B\]=\[A\]+\[C\] for every short exact sequence A↪︎B↠C.

**Problem.** For a Serre subcategory 𝒞 of an essentially small abelian category 𝒜, the sequence K₀(𝒞) → K₀(𝒜) → K₀(𝒜/𝒞) → 0 is exact. Quillen extends it to a long exact sequence of higher K-groups.

**How the definition helps.** The quotient keeps the objects, and inverted arrows preserve their classes modulo the image of K₀(𝒞) (our own). Short exact sequences in the quotient lift up to isomorphism, so these classes respect its relations. This constructs the inverse to the induced quotient map. Quillen’s localization theorem supplies the higher sequence.

**Wikipedia:** [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category). It says: “Here, one starts with the class S of those morphisms in 𝒜 whose kernel and cokernel both belong to ℬ.”

**Paper or page:** [Homology, Lemma 12.11.3](https://stacks.math.columbia.edu/tag/02MX). It says: “The exact functors 𝒞 → 𝒜 and 𝒜 → ℬ induce an exact sequence K₀(𝒞) → K₀(𝒜) → K₀(ℬ) → 0 of K-groups”

**Sources:**

- [D. Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973) 85–147](https://doi.org/10.1007/BFb0067053)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### The self-dual definition of abelian categories gives injective results from projective ones

**Remember:** Turn the arrows around and projectives become injectives for free.

*True by definition.* MSC 18E10 (Abelian categories, Grothendieck categories), 18G05, 18G10. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is an additive category with kernels and cokernels in which each map from the coimage to the image is an isomorphism. Every axiom has its dual among the axioms, unlike the definition of a module category.

**Problem.** In an abelian category with enough injectives, each object has an injective resolution unique up to homotopy equivalence. Right derived functors of left exact additive functors to abelian categories are well defined. These conclusions follow from their projective versions in the opposite category.

**How the definition helps.** Because the opposite of an abelian category is abelian, every theorem about projectives has a dual about injectives with no new proof. Injectives in 𝒜 are the projectives in 𝒜ᵒᵖ, and injective resolutions are projective resolutions read backwards (our own). So the comparison theorem for projective resolutions gives the one for injective resolutions (our own). The work stays in the projective proof, done once.

**nLab:** [abelian category](https://ncatlab.org/nlab/show/abelian+category). It says: “The notion of abelian category is self-dual: opposite of any abelian category is abelian.”

**Sources:**

- [A. Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### The universal property of Serre quotients identifies localized module categories

**Remember:** Kill the torsion modules and you are left with modules over the localization.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35, 13B30. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** The Serre quotient by a Serre subcategory 𝒯 is universal among exact functors that send every object of 𝒯 to zero. Factorization through the quotient is unique up to unique compatible isomorphism.

**Problem.** For a multiplicative subset S of a commutative ring A, let 𝒯 consist of modules whose elements are each annihilated by some member of S. Then Mod(A)/𝒯 is equivalent to Mod(S⁻¹A). In particular, Ab modulo torsion groups is equivalent to ℚ-vector spaces.

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

**How the definition helps.** The long exact sequence expresses each middle cohomology object as an extension of a kernel by a cokernel (our own). Both belong to ℬ, and shifts only reindex cohomology. Direct summands also belong to ℬ because they are kernels of complementary idempotents. Rational vector spaces satisfy these conditions despite the subgroup ℤ ⊂ ℚ.

**Paper or page:** [Derived, Lemma 13.17.1](https://stacks.math.columbia.edu/tag/06UQ), [Homology, Lemma 12.10.3](https://stacks.math.columbia.edu/tag/0754). It says: “Let ℬ ⊂ 𝒜 be a weak Serre subcategory. The category D\_ℬ(𝒜) is a strictly full saturated triangulated subcategory of D(𝒜).”

**Sources:** none listed. No primary source with a working link was found.

### Semi-abelian categories give the homological lemmas for groups and Lie algebras

**Remember:** Semi-abelian categories are to groups what abelian categories are to abelian groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E13 (Protomodular categories, semi-abelian categories, Mal'tsev categories), 18G50. arXiv math.CT. Level 3: graduate.

**Definition.** A semi-abelian category is a pointed, Barr-exact, protomodular category with finite coproducts. Barr-exactness means regularity with every internal equivalence relation effective. In this setting protomodularity means that the split short five lemma holds.

**Problem.** The isomorphism theorems, nine lemma and snake lemma hold in their semi-abelian forms, with the proper morphisms required for the snake lemma. They apply to groups, nonunital rings and Lie algebras.

**How the definition helps.** Exactness and protomodularity allow the homological lemmas to use kernels and quotients in nonadditive categories. The semi-abelian versions of the nine lemma and snake lemma supply the proofs, including the properness hypotheses for the snake lemma (our own).

**nLab:** [semi-abelian category](https://ncatlab.org/nlab/show/semi-abelian+category), [Malcev, protomodular, homological and semi-abelian categories](https://ncatlab.org/nlab/show/Malcev%2C+protomodular%2C+homological+and+semi-abelian+categories). It says: “the Nine Lemma, the Snake Lemma, which remain valid and strongly meaningful in the category”

**Sources:**

- [George Janelidze, László Márki, Walter Tholen, Semi-abelian categories, J. Pure Appl. Algebra 168 (2002) 367–386](https://doi.org/10.1016/S0022-4049(01)00103-7)
- [Francis Borceux, Dominique Bourn, Mal'cev, protomodular, homological and semi-abelian categories, Kluwer (2004)](https://doi.org/10.1007/978-1-4020-1962-3)

### A calculus of fractions makes each morphism of a localization one span

**Remember:** With the Ore condition, every fraction is f ∘ w⁻¹ with one denominator.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions). arXiv math.CT. Level 3: graduate.

**Definition.** A right multiplicative system W contains identities and is closed under composition. For arrows f and w with common target and w∈W, some v∈W and g satisfy fv=wg. Whenever wf=wg with w∈W, some v∈W satisfies fv=gv.

**Problem.** Suppose W admits a calculus of right fractions. Every arrow x→z in C\[W⁻¹\] is represented by one span x←y→z whose left leg belongs to W. Two such spans compose into one span.

**How the definition helps.** The common-square condition replaces two successive spans by one span (our own). Identities and ordinary arrows already have span representatives, as do inverses of W-arrows. Thus every zigzag reduces to one span, with the cancellation axiom giving the calculus of right fractions.

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions), [category of fractions](https://ncatlab.org/nlab/show/category+of+fractions). It says: “A class W of weak equivalences in a category C is said to admit a calculus of fractions if it satisfies some axioms ensuring that its localization C\[W⁻¹\] can be constructed in a particularly simple way using 'one-step generalized morphisms.'”

**Sources:**

- [Pierre Gabriel, Michel Zisman, Calculus of Fractions and Homotopy Theory, Ergebnisse der Mathematik und ihrer Grenzgebiete 35, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)

### A left calculus of fractions makes localization preserve finite colimits

**Remember:** Fractions on the left let localization keep pushouts and finite coproducts.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A left multiplicative system S contains identities and is closed under composition. For arrows f and s with common source and s∈S, some t∈S and g satisfy tf=gs. Whenever fs=gs with s∈S, some t∈S satisfies tf=tg.

**Problem.** For a left multiplicative system S, the localization functor from C to S⁻¹C preserves every finite colimit that exists in C.

**How the definition helps.** Fractions write each set of maps in S⁻¹C as a filtered colimit of sets of maps in C (our own). Maps out of a finite colimit form a finite limit of sets, and filtered colimits of sets commute with finite limits (our own). So the localization keeps the universal property of finite colimits (our own). Without fractions, maps in a localization are long zigzags, and this argument fails (our own).

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions). It says: “Dually, if W admits a calculus of left fractions, then Q is right exact and preserves finite colimits.”

**Paper or page:** [Categories, Lemma 4.27.9](https://stacks.math.columbia.edu/tag/05Q2). It says: “Let C be a category and let S be a left multiplicative system of morphisms of C. The localization functor Q : C → S⁻¹C commutes with finite colimits.”

**Sources:**

- [Pierre Gabriel and Michel Zisman, Calculus of Fractions and Homotopy Theory, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)

### Compatible multiplicative systems give the localization a unique triangulated structure

**Remember:** Compatible fractions carry triangles through the localization.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A multiplicative system S in a pre-triangulated category is compatible if shifts and inverse shifts preserve S and the following extension condition holds. Every commuting square between first arrows of distinguished triangles whose vertical arrows belong to S extends to a triangle morphism with third component in S.

**Problem.** For a compatible multiplicative system in a pre-triangulated category D, S⁻¹D has a unique pre-triangulated structure making Q exact and strictly compatible with shifts. If D is triangulated, so is S⁻¹D.

**How the definition helps.** Compatibility lets the localization theorem transport the triangle axioms through fractions (our own). Its distinguished triangles are exactly those isomorphic to images of distinguished triangles. When the original category satisfies the octahedral axiom, the theorem transports that axiom too.

**Paper or page:** [Derived, Proposition 13.5.6](https://stacks.math.columbia.edu/tag/05R6). It says: “Then there exists a unique structure of a pre-triangulated category on S⁻¹D such that \[1\] ∘ Q = Q ∘ \[1\] and the localization functor Q : D → S⁻¹D is exact.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicative systems give a concrete test for the maps that localization inverts

**Remember:** A map turns invertible exactly when S-maps complete it on both sides.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions). arXiv math.CT. Level 3: graduate.

**Definition.** A multiplicative system S in a category C is a class of maps with a calculus of fractions on both sides. S is saturated if every map that becomes invertible in the localization S⁻¹C already lies in S.

**Problem.** A map f becomes invertible in S⁻¹C exactly when there are maps g and h with gf and fh in S. These maps form the smallest saturated multiplicative system that contains S.

**How the definition helps.** The two-sided calculus of fractions expresses both inverse equations using common denominators (our own). Clearing them gives a left multiple gf and a right multiple fh in S. Conversely, those multiples give Q(f) a left and a right inverse. The saturation lemma identifies the resulting class as the smallest saturated multiplicative system containing S.

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions). It says: “In the presence of either sort of calculus of fractions, the 2-out-of-6 property is equivalent to saturation of W, i.e. that any morphism in C which becomes an isomorphism in C\[W⁻¹\] is already in W.”

**Paper or page:** [Categories, Lemma 4.27.21](https://stacks.math.columbia.edu/tag/05Q9). It says: “The set Ŝ = {f ∈ Arrows(C) \| Q(f) is an isomorphism} is equal to S′ = {f ∈ Arrows(C) \| there exist g, h such that gf, fh ∈ S} and is the smallest saturated multiplicative system containing S.”

**Sources:** none listed. No primary source with a working link was found.

### Saturation makes compatible multiplicative systems and thick subcategories the same data

**Remember:** Thick subcategories and saturated systems are two faces of one quotient.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A triangulated subcategory B of D is thick if it contains every direct summand of each of its objects. A multiplicative system S is saturated if it contains every map that becomes invertible after localizing at S. The cone of a map f is the third object of a distinguished triangle on f.

**Problem.** Send B to the maps whose cone lies in B, and send S to the objects that become zero in S⁻¹D. These two rules are inverse bijections between saturated compatible multiplicative systems and strictly full thick triangulated subcategories of D.

**How the definition helps.** The localization theorem for triangulated categories identifies the objects killed by a Verdier quotient with the thick closure of its defining subcategory. A map becomes invertible exactly when its cone becomes zero (our own). Thickness therefore recovers the objects, and saturation recovers the maps.

**Paper or page:** [Derived, Lemma 13.6.10](https://stacks.math.columbia.edu/tag/05RL). It says: “In particular, the constructions define mutually inverse maps between the (partially ordered) set of saturated multiplicative systems in D compatible with the triangulated structure on D and the (partially ordered) set of strictly full saturated triangulated subcategories of D.”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion pairs by vanishing Hom makes the torsion sequence unique

**Remember:** No maps from torsion to torsion-free forces one torsion part.

*True by definition.* MSC 18E40 (Torsion theories, radicals), 18E10. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** A torsion pair consists of full subcategories 𝒯,ℱ of an abelian category with Hom(T,F)=0 for every T in 𝒯 and F in ℱ. Every object X must have a subobject Y in 𝒯 with X/Y in ℱ.

**Problem.** In a torsion pair, the exact sequence 0→Y→X→X/Y→0 with Y in 𝒯 and X/Y in ℱ is unique up to isomorphism. The assignment X ↦ Y is right adjoint to the inclusion of 𝒯.

**How the definition helps.** Every map from a torsion object to X becomes zero in X/Y, so it factors uniquely through Y (our own). This universal property makes Y unique as a subobject. It also gives functoriality and the right adjunction.

**nLab:** [torsion theory](https://ncatlab.org/nlab/show/torsion+theory). It says: “Presentation of an object X in Ob A as an extension 0→Y→X→X/Y→0, Y in Ob T by X/Y in Ob F is unique up to an isomorphism of short exact sequences”

**Sources:**

- [S. E. Dickson, A torsion theory for Abelian categories, Trans. Amer. Math. Soc. 121 (1966) 223–235](https://doi.org/10.1090/S0002-9947-1966-0191935-0)

### Hereditary torsion classes are the localizing subcategories, unlike divisible groups

**Remember:** Torsion closed under subobjects is a Serre subcategory closed under sums.

*Rules out counterexamples.* MSC 18E40 (Torsion theories, radicals), 18E10, 16S90. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** In a Grothendieck category, a torsion class is a strictly full subcategory closed under quotients, arbitrary coproducts and extensions. It is hereditary if it also contains every subobject of its objects.

**Problem.** In a Grothendieck category, the hereditary torsion classes are exactly the localizing subcategories. The divisible abelian groups form a torsion class that is not hereditary and is not localizing.

**How the definition helps.** The extra closure condition makes a hereditary torsion class precisely a Serre subcategory closed under coproducts. Gabriel’s theorem identifies these with localizing subcategories of a Grothendieck category. Divisible groups form a torsion class, but ℤ ⊂ ℚ violates subobject closure (our own).

**nLab:** [torsion theory](https://ncatlab.org/nlab/show/torsion+theory). It says: “A torsion theory is called hereditary if T is closed under subobjects, or equivalently, t is left exact functor.”

**Wikipedia:** [Localizing subcategory](https://en.wikipedia.org/wiki/Localizing_subcategory). It says: “Hence the notion of a localizing subcategory is equivalent to the notion of a hereditary torsion class.”

**Sources:**

- [S. E. Dickson, A torsion theory for Abelian categories, Trans. Amer. Math. Soc. 121 (1966) 223–235](https://doi.org/10.1090/S0002-9947-1966-0191935-0)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Grothendieck's Galois theory matches étale algebras with all finite G-sets

**Remember:** The fibre functor remembers the finite set, and its automorphisms recover the action.

*Makes the theorem clean to state or prove.* MSC 18E50 (Categorical Galois theory), 14F35, 20E18. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Galois category has finite limits, finite colimits and a functor F to finite sets preserving both and reflecting isomorphisms. Every arrow must factor as a strict epimorphism followed by inclusion of a coproduct summand.

**Problem.** Every Galois category is equivalent to the category of finite sets with a continuous action of some profinite group G. For a field K, this gives an anti-equivalence between finite étale K-algebras and finite G-sets, with fields matching transitive G-sets.

**How the definition helps.** Grothendieck’s Galois theorem realizes F as the forgetful functor for finite continuous actions of the profinite group Aut(F). Coproducts allow arbitrary finite unions of orbits. For finite étale K-algebras, the connected pieces on the opposite side correspond to fields (our own).

**nLab:** [Grothendieck's Galois theory](https://ncatlab.org/nlab/show/Grothendieck%27s+Galois+theory), [Galois category](https://ncatlab.org/nlab/show/Galois+category), [Galois theory](https://ncatlab.org/nlab/show/Galois+theory). It says: “Even for the classical case of the inclusion of fields, Grothendieck's Galois theorem gives more general statement than the previously known.”

**Sources:**

- [Alexander Grothendieck, Michèle Raynaud, Revêtements étales et groupe fondamental (SGA 1), Lecture Notes in Math. 224, Springer (1971); arXiv:math/0206203](https://arxiv.org/abs/math/0206203)
- [Eduardo J. Dubuc, Constanza Sánchez de la Vega, On the Galois theory of Grothendieck, Bol. Acad. Nac. Cienc. (Córdoba) 65 (2000) 111–136, arXiv:math/0009145](https://arxiv.org/abs/math/0009145)

### Coverages let good open covers form a site without pullback stability

**Remember:** A pulled-back cover need not be a cover; it only needs to contain one.

*Makes the theorem clean to state or prove.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** A coverage assigns to each object U families of arrows into U called covers. For each cover of U and each f:V→U, some cover of V refines it after composition with f. Refinement means each composite factors through a member of the original cover.

**Problem.** Differentiably good open covers form a coverage on CartSp, the category of Euclidean spaces and smooth maps. Here every nonempty finite intersection in a good cover is diffeomorphic to the ambient Euclidean space. Smooth sets are sheaves for this coverage.

**How the definition helps.** Inverse images of a good cover form an open cover, which admits a good refinement. A periodic smooth curve can pull one member back to disjoint intervals, so the inverse-image family itself need not be good (our own). Refinement gives exactly the coverage axiom.

**nLab:** [coverage](https://ncatlab.org/nlab/show/coverage), [geometry of physics -- coordinate systems](https://ncatlab.org/nlab/show/geometry+of+physics+--+coordinate+systems), [good open cover](https://ncatlab.org/nlab/show/good+open+cover). It says: “every pullback of a good open cover gives an open cover that may be refined by a good open cover. This is all we need in the definition of coverage.”

**Sources:**

- [D. Fiorenza, U. Schreiber, J. Stasheff, Čech cocycles for differential characteristic classes: an ∞-Lie theoretic construction, Advances in Theoretical and Mathematical Physics 16 (2012) 149–250, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### Covering conditions replace stalk conditions for locally ringed sites

**Remember:** Ask 'f or 1 − f is a unit' on a covering, not at points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20, 14A15. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** For every object U and section f∈𝒪(U), require a cover of U on each member of which either f or 1−f restricts to a unit.

**Problem.** If the covering condition holds, every stalk of 𝒪 at a point is a local ring or the zero ring. When the site has enough points, the covering condition is equivalent to this stalk condition.

**How the definition helps.** A germ comes from a section, so the cover makes either that germ or its complement invertible (our own). Conversely, the subobject of sections locally satisfying this alternative has full stalks when every stalk passes the ring test. Enough points then makes that subobject the whole sheaf (our own).

**Paper or page:** [Stacks Project, Sites Modules, Lemma 18.40.2](https://stacks.math.columbia.edu/tag/04ET), [Stacks Project, Sites Modules, Lemma 18.40.3](https://stacks.math.columbia.edu/tag/05D8). It says: “For every point p of 𝒞 the stalk 𝒪ₚ is either the zero ring or a local ring. We always have (1) ⇒ (2). If 𝒞 has enough points then (1) and (2) are equivalent.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 04ET (Sites Modules, Lemma 18.40.2)](https://stacks.math.columbia.edu/tag/04ET)
- [The Stacks Project Authors, The Stacks Project, Tag 05D8 (Sites Modules, Lemma 18.40.3)](https://stacks.math.columbia.edu/tag/05D8)

### Covering-flat morphisms of sites give exactly the right geometric morphisms

**Remember:** Ask for flatness only up to covers, since sheaves cannot see more.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A covering-flat functor F locally lifts finite cones. For every finite diagram D in its source, each cone into FD admits, after covering its vertex, factorizations through F-images of cones into D. A morphism of sites in this sense also takes covering families to covering families.

**Problem.** A morphism of sites C → D induces a geometric morphism Sh(D) → Sh(C). For subcanonical sites, every geometric morphism in this direction whose inverse image preserves representables comes from such a morphism of sites.

**How the definition helps.** Local factorization supplies the flatness needed after sheafification, and preservation of covers gives continuity of the induced inverse image (our own). Shulman’s comparison for site morphisms gives the converse for subcanonical sites when inverse image preserves representables.

**nLab:** [morphism of sites](https://ncatlab.org/nlab/show/morphism+of+sites). It says: “Note that the general case would not be true for the classical definition of "morphism of sites".”

**Sources:**

- [Michael Shulman, Exact completions and small sheaves, Theory Appl. Categ. 27 (2012) 97–173, arXiv:1203.4318](https://arxiv.org/abs/1203.4318)

### Hypercoverings let Čech cohomology compute sheaf cohomology on general sites

**Remember:** Refine the overlaps too, and Čech cohomology becomes correct.

*Makes the theorem clean to state or prove.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18G40, 14F20. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A hypercover of U is an augmented simplicial presheaf over U whose levels are coproducts of representables. For every n ≥ 0, the map to its relative matching object is locally surjective. In degree zero the matching object is U, and higher matching objects specify all compatible boundaries.

**Problem.** Let a site have fibre products and binary products, and fix an object U and an abelian sheaf. The sheaf cohomology of U is the colimit of Čech cohomology over its hypercoverings.

**How the definition helps.** Local surjectivity lets a refinement cover compatible boundaries in every degree. Verdier’s hypercovering theorem identifies the colimit over hypercover refinements, up to simplicial homotopy, with derived sheaf cohomology. Ordinary covers can miss classes in degree two or higher (our own).

**Wikipedia:** [Hypercovering](https://en.wikipedia.org/wiki/Hypercovering). It says: “The original definition given for étale cohomology by Jean-Louis Verdier in SGA4, Expose V, Sec. 7, Thm. 7.4.1, to compute sheaf cohomology in arbitrary Grothendieck topologies.”

**Paper or page:** [Stacks Project, Hypercovering, Proposition 25.10.2](https://stacks.math.columbia.edu/tag/09VZ). It says: “In other words, modulo set theoretical issues, the cohomology groups of ℱ on 𝒞 are the colimit of the Čech cohomology groups of ℱ over all hypercoverings.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 09VZ (Hypercovering, Proposition 25.10.2)](https://stacks.math.columbia.edu/tag/09VZ)

### Locality as a right adjoint makes global sections the initial point

**Remember:** The global-sections point maps uniquely to every other point.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topos is local if its global sections functor Γ = Hom(1,−) has a right adjoint. A point has a finite-limit-preserving inverse image to Set with a right adjoint.

**Problem.** In a local Grothendieck topos, Γ is the inverse image of a point, and this point is initial among all points.

**How the definition helps.** Representability makes Γ preserve limits, so its right adjoint makes it the inverse image of a point (our own). By Yoneda, natural transformations Γ → p\* correspond to elements of p\*(1). Each inverse image preserves the terminal object, so this set is a singleton (our own).

**nLab:** [local geometric morphism](https://ncatlab.org/nlab/show/local+geometric+morphism), [point of a topos](https://ncatlab.org/nlab/show/point+of+a+topos). It says: “this point is an initial object in the category of all points of E”

**Sources:** none listed. No primary source with a working link was found.

### Points as geometric morphisms make stalks preserve finite limits and colimits

**Remember:** A stalk is a left adjoint that also preserves finite limits.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** A point of a topos E is a geometric morphism from Set to E. Its stalk functor is the inverse image p\*:E→Set, a left adjoint preserving finite limits.

**Problem.** At any point of a Grothendieck topos, the stalk functor preserves finite limits and all small colimits.

**How the definition helps.** With this definition, both claims are part of the data or follow from it at once (our own). Finite limits are preserved by definition, and colimits because the stalk is a left adjoint (our own). The work moves to showing that the germ construction on a space gives a point (our own). There, filtered colimits of sets commute with finite limits, and skyscraper sheaves give the right adjoint (our own).

**nLab:** [geometric morphism](https://ncatlab.org/nlab/show/geometric+morphism), [point of a topos](https://ncatlab.org/nlab/show/point+of+a+topos). It says: “such that the left adjoint f\*: F → E preserves finite limits.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Sierpinski sheaves as arrows make global sections preserve limits and colimits

**Remember:** Global sections are the set at the start of the arrow.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** The Sierpiński space has two points and a single proper nonempty open U. Its sheaves of sets are represented by arrows A→B, the restriction from global sections to sections over U. A morphism of such arrows is a commuting square.

**Problem.** Global sections, from sheaves of sets on the Sierpinski space to sets, preserve all small limits and colimits.

**How the definition helps.** In the arrow picture, global sections just evaluate at the source of the arrow (our own). Limits and colimits of functors are computed at each object, so evaluation preserves both (our own). The work moves to the equivalence of sheaves with arrows, which the nLab states. Gluing adds only a single element over the empty set (our own).

**nLab:** [Sierpinski topos](https://ncatlab.org/nlab/show/Sierpinski+topos). It says: “The Sierpinski topos is the arrow category of Set.”

**Sources:** none listed. No primary source with a working link was found.

### Slices inherit subobject classifiers

**Remember:** Keep the old classifying map and attach its map to the base.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A subobject classifier in a topos consists of Ω and an arrow true:1→Ω. Every monomorphism is the pullback of true along exactly one arrow from its codomain to Ω. Objects over X are arrows to X, and morphisms over X are commuting triangles.

**Problem.** The subobject classifier of the slice over X is the projection Ω × X → X.

**How the definition helps.** Pair the original classifying map with the structure map to X (our own). Pulling back ⟨true∘!,id<sub>X</sub>⟩ along this pair gives the original subobject over X. Its first component is unique by classification, and its second is forced by the slice.

**nLab:** [over-topos](https://ncatlab.org/nlab/show/over-topos). It says: “regarded as an object in the slice over X is the subobject classifier of T/X.”

**Sources:** none listed. No primary source with a working link was found.

### Surjective submersions are the good covers among smooth manifolds

**Remember:** Cover every point and surject on each tangent space.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18A20, 58A05. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** A smooth map p:M→N is a surjective submersion if it is onto and its differential at every x∈M surjects onto the tangent space at p(x).

**Problem.** In Diff, the pullback of a surjective submersion along any smooth map exists and is again a surjective submersion. So surjective submersions form a pullback-stable class of covers for Lie groupoids and differentiable stacks.

**How the definition helps.** The submersion theorem makes p locally a coordinate projection, whose pullback is again a coordinate projection (our own). Surjectivity supplies a point over each point of the new base. Even a split epimorphism can lack a pullback in smooth manifolds, so regular epimorphisms alone do not suffice.

**nLab:** [regular epimorphism](https://ncatlab.org/nlab/show/regular+epimorphism). It says: “the usual procedure is to consider the largest class of arrows inside regular epis of which all pullbacks exist, namely the surjective submersions.”

**Sources:**

- [I. Moerdijk, J. Mrčun, Introduction to Foliations and Lie Groupoids, Cambridge University Press (2003)](https://doi.org/10.1017/CBO9780511615450)

### Topoi as left exact reflections of presheaves make equivalence relations effective

**Remember:** Quotient in presheaves, then reflect the quotient and its pullback.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topos is a category equivalent to a full reflective subcategory of Set-valued presheaves on a small category whose reflector preserves finite limits.

**Problem.** In a Grothendieck topos, every equivalence relation R on X is effective. That means R is exactly the pairs with the same image in the quotient of X by R.

**How the definition helps.** Presheaves compute quotients and kernel pairs objectwise, so effectiveness there follows from effectiveness in sets (our own). The reflector preserves the quotient as a left adjoint and the kernel pair by finite-limit preservation. Reflecting the presheaf calculation thus gives effectiveness in the topos.

**nLab:** [Grothendieck topos](https://ncatlab.org/nlab/show/Grothendieck+topos), [sheaf toposes are equivalently the left exact reflective subcategories of presheaf toposes](https://ncatlab.org/nlab/show/sheaf+toposes+are+equivalently+the+left+exact+reflective+subcategories+of+presheaf+toposes). It says: “such that the reflector L : PSh(C) → Sh(C) preserves finite limits”

**Sources:** none listed. No primary source with a working link was found.

### Topologies given by covering sieves make intersections of topologies topologies

**Remember:** Keep a sieve exactly when every topology counts it as a cover.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topology selects covering sieves, meaning collections of arrows into each object closed under precomposition. Maximal sieves cover, and every pullback of a covering sieve covers. A sieve R covers whenever some covering sieve S has f\*R covering for every f in S (our own).

**Problem.** For any set of Grothendieck topologies Jᵢ on a category, the sieves that cover in every Jᵢ form a topology.

**How the definition helps.** Each axiom only asks that certain sieves cover, so it passes to intersections (our own). The full sieve covers in every Jᵢ, and pullbacks of a common cover are common covers (our own). The local character rule also holds in each Jᵢ separately (our own). With covering families, a sieve may cover in both topologies without containing a family common to both, so more care is needed (our own).

**Paper or page:** [Sites, Lemma 7.47.9.](https://stacks.math.columbia.edu/tag/00Z7). It says: “The rule J(U) = ⋂ Jᵢ(U) defines a topology on C.”

**Sources:**

- [The Stacks Project, Sites, Lemma 7.47.9.](https://stacks.math.columbia.edu/tag/00Z7)

### Universally effective-epimorphic covers make the canonical topology the finest subcanonical

**Remember:** Test unique extension after every pullback.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A sieve on an object U is a set of arrows into U such that f ∘ g is in it whenever f is. A topology is subcanonical when every representable presheaf, the presheaf of arrows into a fixed object, is a sheaf. In the canonical topology a sieve covers when every representable is a sheaf for every pullback of it.

**Problem.** The canonical topology is the finest Grothendieck topology in which every representable presheaf is a sheaf.

**How the definition helps.** With this definition, being the finest is almost a restatement (our own). In a subcanonical topology, pullbacks of a cover are covers, so representables are sheaves for them (our own). So every cover of such a topology passes the test (our own). The work moves to proving that the test sieves form a topology, mainly the local character rule (our own).

**nLab:** [canonical topology](https://ncatlab.org/nlab/show/canonical+topology). It says: “a sieve R is a covering for the canonical topology iff every representable functor is a sheaf for every pullback of R.”

**Sources:** none listed. No primary source with a working link was found.

### Abelian gerbes are classified by H² by definition

**Remember:** A gerbe is locally a copy of 𝐁G with its translation action.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 55N30, 53C08. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** For an abelian sheaf G, a G-banded gerbe over X is a torsor for its delooping 𝐁G (our own). Locally it looks like 𝐁G acting on itself by translation (our own).

**Problem.** G-banded gerbes over X are classified by H²(X,G). For smooth U(1)-valued functions on a paracompact smooth manifold X, this group is H³(X,ℤ).

**How the definition helps.** Pulling back the universal 𝐁G-torsor identifies equivalence classes of these torsors with homotopy classes of maps X → 𝐁𝐁G. Those classes define H²(X,G). On a paracompact smooth manifold, the exponential sequence gives the degree shift because the smooth real-function sheaf is acyclic (our own).

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

**Definition.** Every Grothendieck topos has an essentially unique geometric morphism to the topos of sets. Define the constant sheaf on a set S as the inverse image of S along this morphism. On a space, the concrete definition takes locally constant functions into S.

**Problem.** For every geometric morphism f between Grothendieck topoi, f\* carries each constant sheaf to the corresponding constant sheaf up to canonical isomorphism.

**How the definition helps.** With this definition, the claim follows from uniqueness of the morphism to sets (our own). Composing f with the morphism from E to sets gives a morphism from F to sets, so it is the unique one (our own). Inverse images of a composite are the composite of inverse images (our own). The work moves to showing that, on a space, this constant sheaf is the sheaf of locally constant functions (our own).

**nLab:** [constant sheaf](https://ncatlab.org/nlab/show/constant+sheaf), [terminal geometric morphism](https://ncatlab.org/nlab/show/terminal+geometric+morphism). It says: “Together with the global section functor, the constant sheaf functor is a geometric morphism”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Extension by zero defined as a left adjoint commutes with tensor products

**Remember:** Move extension and tensor across the map using their adjoints.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** On a site with a sheaf of commutative rings, extension by zero from the slice over U is the left adjoint jᵤ! to module restriction.

**Problem.** For every module G on the slice and module F on the site, jᵤ!G ⊗ F ≅ jᵤ!(G ⊗ F\|U) naturally.

**How the definition helps.** Maps from either side to H correspond naturally to maps G → Hom(F\|U,H\|U), with Hom denoting internal Hom (our own). Apply both adjunctions and use Hom(F,H)\|U ≅ Hom(F\|U,H\|U) (our own). Yoneda gives the isomorphism (our own).

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

**Definition.** A site is a category with chosen covering families of arrows into each object. Call a map of sheaves F → G surjective when each section of G lifts to F after restriction to some covering family. The categorical definition of an epimorphism asks that maps out of G be fixed by their composites with F → G.

**Problem.** On any site, the pullback of an epimorphism of sheaves of sets along any map is an epimorphism.

**How the definition helps.** Local surjectivity is a condition on sections, so it passes to pullbacks (our own). A section of the other factor maps to a section of G, which lifts locally to F (our own). The local lift and the restricted section form a local lift into the pullback, since pullbacks of sheaves are taken on sections (our own). The work moves to showing that surjective maps are exactly the epimorphisms, which is Stacks Lemma 7.11.2.

**Paper or page:** [Sites, Lemma 7.11.2.](https://stacks.math.columbia.edu/tag/00WN). It says: “The injective (resp. surjective) maps defined above are exactly the monomorphisms (resp. epimorphisms) of the category Sh(C).”

**Sources:**

- [The Stacks Project, Sites, Lemma 7.11.2.](https://stacks.math.columbia.edu/tag/00WN)

### Sheafification as sections of the germ space leaves stalks unchanged

**Remember:** The same space of germs has the same fibers.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54B40. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** For a presheaf F on X, form the disjoint union of its stalks with the projection to X. For every section over every open U, take its germs throughout U as a basic open. Sheafification takes continuous local sections of this projection (our own).

**Problem.** On a topological space, sheafifying a presheaf of sets does not change its stalks.

**How the definition helps.** Evaluation at x identifies germs of continuous sections with the original fiber over x (our own). Each basic open projects homeomorphically onto its domain, giving a unique inverse germ through each point of the fiber (our own).

**Paper or page:** [Sites Modules, Lemma 18.36.1.](https://stacks.math.columbia.edu/tag/04EN). It says: “We have (F♯)ₚ = Fₚ for any presheaf of sets on C.”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.36.1.](https://stacks.math.columbia.edu/tag/04EN)

### Stable isomorphism ignores cover refinements

**Remember:** Compare the gerbes after both covers have been pulled back.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** Over covers Y and Z of X, a stable isomorphism uses a line bundle L on Y ×ₓ Z. For every two lifts (y,z),(y′,z′) over one point, it identifies P(y,y′) ⊗ L(y′,z′) with L(y,z) ⊗ Q(z,z′), compatibly with gerbe multiplication (our own).

**Problem.** Refining the cover of a bundle gerbe gives a stably isomorphic presentation.

**How the definition helps.** For a refinement r from Z to Y, take L(y,z) = P(y,r(z)) (our own). Multiplying either pair of lines gives P(y,r(z′)), and associativity supplies the compatibility (our own).

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

*True by definition.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)), 18G80. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** For an essentially small triangulated category, K₀ has one abelian group generator per isomorphism class of objects. Impose \[B\] = \[A\] + \[C\] for every distinguished triangle A → B → C → ΣA.

**Problem.** In K₀ of a triangulated category, \[ΣA\] = −\[A\] for every object A. Hence every element is the class of a single object, since \[A\] − \[B\] = \[A ⊕ ΣB\].

**How the definition helps.** The zero triangle gives \[0\] = 0, and the triangle A → 0 → ΣA gives \[ΣA\] = −\[A\]. Split triangles give \[A ⊕ B\] = \[A\] + \[B\], so shifts and sums realize every integer combination (our own).

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “\[A\] + \[Σ A\] = 0”

**Sources:** none listed. No primary source with a working link was found.

### Waldhausen's S• construction makes short exact sequences add in K-theory

**Remember:** A two-step filtration has three faces giving the subobject, total object, and quotient.

*Makes the theorem clean to state or prove.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)), 18N45. arXiv math.KT. Level 3: graduate.

**Definition.** For a Waldhausen category C, SₙC consists of length-n cofibration chains starting at zero, equipped with compatible quotient objects. Its morphisms preserve the quotient diagrams, and w selects the objectwise weak equivalences. Looping the realization of wS•C gives K(C) (our own).

**Problem.** Waldhausen K-theory gives a spectrum whose K₀ is the Grothendieck group. For a natural cofiber sequence of exact functors, the middle map on each K-group equals the sum of the outer maps.

**How the definition helps.** The three faces of a two-step filtration give its subobject, total object, and quotient (our own). Their triangle imposes the Grothendieck relation in K₀ (our own). Iterating S• gives the spectrum, and Waldhausen’s additivity theorem gives the induced-map identity in every degree (our own).

**nLab:** [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction), [Quillen Q-construction](https://ncatlab.org/nlab/show/Quillen+Q-construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “The difference is that it imposes additivity over all cofiber sequences, not just over direct sums”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces, Lecture Notes in Math. 1126, Springer (1985) 318–419](https://doi.org/10.1007/BFb0074449)
- [Daniel Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973) 85–147](https://doi.org/10.1007/BFb0067053)

### The Grothendieck group makes Riemann–Roch a comparison of two homomorphisms

**Remember:** Euler characteristics add over exact sequences, so they live on K₀.

*Makes the theorem clean to state or prove.* MSC 18F30 (Grothendieck groups (category-theoretic aspects)), 14C40. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** The Grothendieck group K₀(X) is the abelian group generated by classes of coherent sheaves on X. Its only relations say that the middle term of each short exact sequence is the sum of the outer terms.

**Problem.** Take a vector bundle E on a smooth projective variety X. Hirzebruch–Riemann–Roch says that the Euler characteristic of E equals the degree of ch(E)·td(X). Here ch is the Chern character and td is the Todd class.

**How the definition helps.** Both sides descend to homomorphisms on K₀(X) because Euler characteristic and Chern character respect short exact sequences (our own). Multiplication by the Todd class and taking degree are additive (our own). Hirzebruch–Riemann–Roch identifies the resulting homomorphisms (our own).

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

**Definition.** For a commutative line object R, set D = {ε ∈ R ∣ ε² = 0}. The Kock–Lawvere axiom makes (a,b) ↦ (ε ↦ a + εb) an isomorphism R × R → Rᴰ. Define the synthetic tangent bundle of X by evaluating Xᴰ at zero.

**Problem.** Every internal g : D → R has a unique expression g(ε) = g(0) + εd under the Kock–Lawvere axiom. For f : R → R, the slope of its restriction to D gives f′(0). The tangent bundle of X is Xᴰ with evaluation at zero.

**How the definition helps.** The isomorphism supplies a unique constant and slope, and evaluation at zero identifies the constant (our own). Restricting f to D therefore determines its derivative at zero (our own). Evaluation sends every infinitesimal path to its base point.

**nLab:** [Kock-Lawvere axiom](https://ncatlab.org/nlab/show/Kock-Lawvere+axiom), [synthetic differential geometry](https://ncatlab.org/nlab/show/synthetic+differential+geometry). It says: “This linearity condition is what in synthetic differential geometry allows to identify the tangent bundle T X → X of a space X with its fiberwise linearity by simply the internal hom object X<sup>D</sup> → X.”

**Sources:**

- [Anders Kock, A simple axiomatics for differentiation, Mathematica Scandinavica 40 (1977) 183–193](https://doi.org/10.7146/math.scand.a-11687)

### In a convenient category of spaces, geometric realization preserves products

**Remember:** Convenient means it holds CW complexes, all limits and colimits, and mapping spaces.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 55U10, 54D50. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A convenient category of spaces is a full subcategory of Top containing all CW complexes and admitting all small limits and colimits. It is also cartesian closed.

**Problem.** Geometric realization into a convenient category of spaces preserves finite products, using products in that category.

**How the definition helps.** Cartesian closure lets each product functor preserve colimits. The standard triangulation identifies the product of two geometric simplices with the realization of their simplicial product (our own). Expressing both simplicial sets as colimits of simplices extends this identification to arbitrary products of two realizations (our own).

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “That geometric realization preserves products is sensitive to whether we think of it as valued in Top or in a convenient category Space. In particular, the proof uses cartesian closure of Space in an essential way”

**Sources:**

- [Rudolf Fritsch, Renzo A. Piccinini, Cellular structures in topology, Cambridge University Press 1990](https://doi.org/10.1017/CBO9780511983948)

### Any intersection of dense sublocales is dense

**Remember:** Dense means that no non-empty open set is missed.

*Makes the theorem clean to state or prove.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.GN. Level 3: graduate.

**Definition.** A nucleus on a frame of opens is an inflationary, idempotent, finite-meet-preserving map j from the frame to itself. Its fixed opens describe a sublocale, which is dense exactly when j(0) = 0.

**Problem.** Any intersection of dense sublocales of a locale is dense.

**How the definition helps.** Every dense sublocale contains the dense double-negation sublocale (our own). Their intersection therefore contains it too and is dense (our own).

**nLab:** [locale](https://ncatlab.org/nlab/show/locale), [dense subspace](https://ncatlab.org/nlab/show/dense+subspace). It says: “in the pointfree setting arbitrary intersections of dense sublocales are always dense.”

**Sources:**

- [John R. Isbell, Atomless parts of spaces, Math. Scand. 31 (1972) 5–32 (cited on the nLab page as the paper that introduced the term locale)](https://doi.org/10.7146/math.scand.a-11409)

### Frame presentations give a nontrivial pointless locale of surjections ℕ ↠ ℝ

**Remember:** The equations allow nontrivial opens, but no actual surjection.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** Generate a frame by U(n,a) for n ∈ ℕ and a ∈ ℝ. For each n the generators indexed by a are pairwise disjoint with join one. For each a impose ⋁ₙ U(n,a) = 1 (our own).

**Problem.** The locale of surjections ℕ → ℝ is nontrivial, meaning its top and bottom opens differ, yet it has no points.

**How the definition helps.** A point would choose one value per integer and hit every real, contradicting Cantor’s theorem (our own). In the regular-open completion of finite partial maps ordered by extension, interpret U(n,a) by the condition n ↦ a (our own). Extensions can assign any unused input and hit any prescribed real, so the joins hold in this nontrivial frame (our own).

**Wikipedia:** [Pointless topology](https://en.wikipedia.org/wiki/Pointless_topology). It says: “Of course, there are no such surjective functions ℕ → ℝ, and this is not a spatial locale.”

**Sources:** none listed. No primary source with a working link was found.

### Heine–Borel holds constructively for the locale of real numbers

**Remember:** Cover the interval by joining its opens with the two exterior rays.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D30. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** The closed unit interval sublocale has covers given by families whose join with (−∞,0) and (1,∞) equals the whole localic real line. Compactness means every such family has a finite subfamily satisfying the same equation (our own).

**Problem.** In constructive mathematics, the closed unit interval in the locale of real numbers is compact (Heine–Borel). For the set of real numbers, the theorem can fail constructively.

**How the definition helps.** Localic Heine–Borel gives the finite-subcover conclusion directly for these frame covers. Passing from a pointwise cover to a frame cover requires an extra principle in constructive mathematics (our own).

**nLab:** [locale of real numbers](https://ncatlab.org/nlab/show/locale+of+real+numbers), [locale](https://ncatlab.org/nlab/show/locale). It says: “But the beauty of the localic approach is that Heine--Borel necessarily holds when interpreted as a statement about opens in the locale of real numbers.”

**Sources:**

- [Ingo Blechschmidt, Generalized spaces for constructive algebra, arXiv:2012.13850 (2020), Section 2.1 (the locale of real numbers)](https://arxiv.org/abs/2012.13850)

### In sober spaces, continuous maps are the same as frame homomorphisms

**Remember:** In a sober space, every point the open sets can see is there, exactly once.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A space X is sober if every completely prime filter of open sets comes from exactly one point. A filter is completely prime if, whenever it contains a union of open sets, it contains one of them. Equivalently, every frame homomorphism from the opens of X to the two truth values comes from exactly one point.

**Problem.** If Y is sober, every frame homomorphism O(Y) → O(X) is the inverse-image map of exactly one continuous map X → Y.

**How the definition helps.** For each x, the opens V with x ∈ h(V) form a completely prime filter since h preserves joins and finite meets (our own). Sobriety supplies its unique point f(x), giving f⁻¹(V) = h(V) for every open V (our own). This proves continuity and uniqueness (our own).

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “It means that continuous functions between sober topological spaces are entirely determined by their inverse image functions on the frames of opens, disregarding the underlying sets of points.”

**Sources:**

- [Peter T. Johnstone, Stone Spaces, Cambridge Studies in Advanced Mathematics 3, Cambridge University Press (1982; paperback 1986), Section II.1](https://openlibrary.org/isbn/9780521337793)
- [The Stacks Project, Section 5.8 (Tag 004U), Irreducible components](https://stacks.math.columbia.edu/tag/004U)

### Locales make Stone duality hold without the ultrafilter theorem

**Remember:** Recover all opens as ideals of compact opens.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 06E15. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** A coherent locale has a frame generated under joins by compact opens, with compact opens closed under finite meets including the top. A Stone locale is coherent with Boolean lattice of compact opens (our own).

**Problem.** Constructively, coherent locales with coherent maps are dual to bounded distributive lattices with bounded lattice homomorphisms. Stone locales are dual to Boolean algebras.

**How the definition helps.** Ideal completion recovers the frame from its compact opens, and the compact elements of an ideal completion are exactly the principal ideals (our own). Restricting this correspondence to Boolean lattices gives the Stone case without choosing points (our own).

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

**Definition.** Define a point of a locale X as a locale map into X from the one-point locale, whose frame is the truth values. The algebraic definition uses a completely prime filter of opens instead. This is an upward-closed set of opens, closed under finite meets, that contains a member of each join it contains.

**Problem.** The set of points of a small limit of locales is the limit of their sets of points.

**How the definition helps.** With this definition, points are maps out of one fixed locale, and such sets of maps preserve limits (our own). A map from the one-point locale into a limit is a compatible family of maps into the factors (our own). With filters, one would first need the frame of the limit locale, a colimit of frames, which is hard to describe (our own). The work moves to constructing limits of locales and matching maps from the point with completely prime filters (our own).

**nLab:** [point of a locale](https://ncatlab.org/nlab/show/point+of+a+locale), [locale](https://ncatlab.org/nlab/show/locale). It says: “A point of X is a continuous map f: 1 → X”

**Sources:** none listed. No primary source with a working link was found.

### Sublocales given by nuclei make joins of sublocales pointwise meets

**Remember:** To join sublocales, take the meet of their nuclei.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A sublocale corresponds to a nucleus on its frame, with sublocale inclusion reversing pointwise order. A nucleus is an inflationary, idempotent map that preserves finite meets.

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

**Definition.** A locale is a frame viewed contravariantly, so products of locales are coproducts of frames. A locale is compact if every directed family of opens with join one contains one.

**Problem.** Without the axiom of choice, a product of any family of compact locales is compact (Tychonoff's theorem).

**How the definition helps.** Compactness asks only about directed joins in the coproduct frame (our own). The constructive localic Tychonoff theorem, proved using preframes, gives the result without choosing points (our own).

**nLab:** [Tychonoff theorem for locales](https://ncatlab.org/nlab/show/Tychonoff+theorem+for+locales), [Tychonoff theorem](https://ncatlab.org/nlab/show/Tychonoff+theorem). It says: “even in constructive mathematics, a Cartesian product of locales is compact if each of the locales is compact. From that perspective, the statement equivalent to the axiom of choice is this: a product of locales is spatial”

**Sources:**

- [Peter Johnstone, Steven Vickers, Preframe presentations present, in: Category Theory (Como 1990), Lecture Notes in Mathematics 1488, Springer (1991) 193–212](https://doi.org/10.1007/BFb0084221)

### Defining injectives by exact Hom makes right adjoints preserve them

**Remember:** The adjunction moves the exact functor to the source of the maps.

*True by definition.* MSC 18G05 (Projectives and injectives (category-theoretic aspects)), 18A40. arXiv math.KT. Level 3: graduate.

**Definition.** An object I is injective if the functor of maps into I turns short exact sequences into short exact sequences. One can instead ask that every short exact sequence starting at I split.

**Problem.** Let u be a right adjoint of a functor v between abelian categories. If v is exact, then u sends injective objects to injective objects.

**How the definition helps.** Maps into u(I) equal maps into I after applying v to the source (our own). Both v and maps into I are exact, so maps into u(I) are exact (our own). In fact it is enough that v preserves injective maps (our own). The work goes into proving that this definition of injective agrees with the splitting test (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.29.1](https://stacks.math.columbia.edu/tag/015Z). It says: “u transforms injectives into injectives.”

**Sources:** none listed. No primary source with a working link was found.

### Posets that are injective for order embeddings are the complete lattices

**Remember:** Extend maps only along embeddings, not along all monos, and complete lattices appear.

*Rules out counterexamples.* MSC 18G05 (Projectives and injectives (category-theoretic aspects)), 06B23, 18B35. arXiv math.CT. Level 3: graduate.

**Definition.** A poset I is injective for order embeddings if every monotone map A → I extends along every order embedding A → B. An order embedding preserves and reflects order.

**Problem.** A poset is injective relative to order embeddings exactly when it is a complete lattice. Against all monomorphisms, only the one-point poset is injective.

**How the definition helps.** In a complete lattice, extend at b by joining the values on embedded elements below b (our own). Conversely, extending the identity along the principal-downset embedding yields a retraction from the downset lattice and hence arbitrary joins (our own). The identity from two discrete points to a two-element chain is monic but reflects no strict comparison (our own). Extension along both orderings forces all pairs of values equal, and extension from the empty poset requires a value (our own).

**nLab:** [injective object](https://ncatlab.org/nlab/show/injective+object). It says: “However, if we require injectives to satisfy the extension property only with respect to regular monomorphisms, then the injective objects are precisely the complete lattices.”

**Sources:**

- [B. Banaschewski, G. Bruns, Categorical characterization of the MacNeille completion, Archiv der Mathematik 18 (1967) 369–377](https://doi.org/10.1007/BF01898828)

### A two-term product complex makes higher derived limits of towers vanish

**Remember:** Subtract each successor’s image, then take cohomology of the two-term product complex.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** For a tower of abelian groups with maps fₙ : Aₙ₊₁ → Aₙ, take ∏ₙ Aₙ in degrees zero and one. Define the differential by ∂(a)ₙ = aₙ − fₙ(aₙ₊₁).

**Problem.** For every tower of abelian groups, Rᵖlim Aₙ = 0 for all p ≥ 2. So a short exact sequence of towers gives a six-term exact sequence from lim to lim¹ that ends in 0.

**How the definition helps.** A complex with only two terms has cohomology in only two degrees, so all higher derived limits vanish at once. The six-term sequence is then the long exact sequence, cut off after lim¹ (our own). The work moves into showing that the product complex computes R lim, using that ∂ is onto for injective towers (our own).

**nLab:** [lim<sup>1</sup> and Milnor sequences](https://ncatlab.org/nlab/show/lim%5E1+and+Milnor+sequences). It says: “The notation "lim¹" is common notation for the first derived functor R¹lim of the limit functor.”

**Paper or page:** [More Algebra, Lemma 15.87.1.](https://stacks.math.columbia.edu/tag/07KW). It says: “for any (Aₙ) in Ab(N) we have Rᵖlim Aₙ = 0 for p &gt; 1, the object Rlim Aₙ of D(Ab) is represented by the complex ∏ Aₙ → ∏ Aₙ, (xₙ) ↦ (xₙ − fₙ₊₁(xₙ₊₁))”

**Sources:** none listed. No primary source with a working link was found.

### Acyclic objects compute derived functors as well as injective objects do

**Remember:** Acyclic terms have no higher derived functors.

*Makes the theorem clean to state or prove.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** Let F be a left exact additive functor between abelian categories, with right derived functors RⁱF. An object J is F-acyclic when RⁱF(J) = 0 for all i &gt; 0. Injective objects are F-acyclic, but so are many others, such as flasque sheaves for the global sections functor.

**Problem.** An F-acyclic resolution J• of A computes RⁱF(A) as Hⁱ(F(J•)) for every i ≥ 0. Flasque resolutions compute sheaf cohomology, and the dual statement gives flat resolutions for Tor.

**How the definition helps.** The long exact sequences for successive kernels shift positive derived functors down the resolution because its terms are acyclic (our own). This identifies RⁱF(A) with Hⁱ(F(J•)), giving the flasque case for global sections (our own). The dual argument for tensor products gives the flat-resolution formula for Tor (our own).

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

**Definition.** Write Q for localization at quasi-isomorphisms in each category. A total right derived functor RF carries a comparison QF → RF Q through which every transformation QF → H Q factors uniquely (our own).

**Problem.** Suppose the total right derived functors of F, G and their composite all exist. Then there is a canonical map from the derived functor of the composite to the composite of the derived functors.

**How the definition helps.** Composing the comparisons gives QGF → RG QF → RG RF Q (our own). The universal property of R(GF) yields the unique comparison R(GF) → RG RF (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.14.16](https://stacks.math.columbia.edu/tag/05T2). It says: “there is a canonical transformation of functors”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived functors universally makes each exact functor its own derived functor

**Remember:** An exact functor already preserves quasi-isomorphisms.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** Write Q for localization at quasi-isomorphisms in each category. The total right derived functor RF has a comparison QF → RF Q through which each transformation QF → H Q factors uniquely (our own).

**Problem.** For an exact functor F between abelian categories, the total right derived functor RF is F applied to each complex.

**How the definition helps.** An exact functor commutes with cohomology, so it sends quasi-isomorphisms (maps inducing isomorphisms on cohomology) to quasi-isomorphisms (our own). So it already passes to derived categories (our own). A functor that already passes to the derived category is its own universal approximation (our own). The work goes into proving that the universal definition agrees with the injective-resolution recipe when that recipe applies (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.16.9](https://stacks.math.columbia.edu/tag/015F). It says: “every complex computes RF, in other words, the canonical map F(K•) → RF(K•) is an isomorphism for all complexes”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived limits by a product cone makes the Milnor sequence immediate

**Remember:** The two ends are the kernel and cokernel of the product difference map.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** For a countable tower of complexes with transition maps fₙ, define its derived limit as the shifted mapping cone Cone(∂)\[−1\]. Here ∂ acts on the product complex by ∂(x)ₙ = xₙ − fₙ(xₙ₊₁) (our own).

**Problem.** For a countable tower of complexes of abelian groups, each cohomology group of the derived limit fits in a short exact sequence. Its ends are lim¹ of the cohomology one degree lower and lim of the cohomology in the same degree. Here lim¹ is the first derived functor of the inverse limit.

**How the definition helps.** Taking cohomology of the defining triangle gives a long exact sequence, which breaks into these short sequences (our own). Products of abelian groups are exact, so cohomology commutes with the products (our own). On cohomology, the kernel of the difference map is lim and its cokernel is lim¹ (our own). The work goes into proving that this triangle computes the derived limit defined by injective resolutions (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.87.9](https://stacks.math.columbia.edu/tag/07KX). It says: “is a derived limit of the inverse system”

**Sources:** none listed. No primary source with a working link was found.

### Degreewise split horseshoe resolutions give derived functors long exact sequences

**Remember:** Split in each degree, so every additive functor keeps the sequence exact.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** A horseshoe resolution is a short exact sequence of projective resolutions lifting the given short exact sequence. In each degree it is the split sequence given by inclusion and projection for P′ₙ ⊕ P″ₙ.

**Problem.** Let F be additive between abelian categories, with enough projectives in the source. Every short exact sequence induces the long exact sequence of left derived functors ending in L₀F(A″) → 0.

**How the definition helps.** The horseshoe lemma supplies the resolution, and every additive functor preserves its degreewise splittings (our own). Taking the long exact homology sequence after applying F gives the asserted sequence of derived functors (our own).

**nLab:** [derived functor in homological algebra](https://ncatlab.org/nlab/show/derived+functor+in+homological+algebra). It says: “Since Aⁿ is an injective object for all n, its component sequences 0 → Aⁿ → Bⁿ → Cⁿ → 0 are indeed split exact sequences”

**Wikipedia:** [Horseshoe lemma](https://en.wikipedia.org/wiki/Horseshoe_lemma). It says: “a resolution of A can be built up inductively with the nth item in the resolution equal to the coproduct of the nth items in the resolutions of A′ and A″.”

**Sources:**

- [Henri Cartan and Samuel Eilenberg, Homological Algebra, Princeton University Press (1956)](https://doi.org/10.1515/9781400883844)

### Derived functors defined on the derived category keep adjunctions

**Remember:** Adjoint functors stay adjoint after deriving, with no exactness needed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** Write Q for localization at quasi-isomorphisms. RF has a universal comparison QF → RF Q through which each QF → H Q factors uniquely. LG has the dual universal comparison LG Q → QG (our own).

**Problem.** Let F and G be additive functors between abelian categories, with G left adjoint to F. If RF : D(A) → D(B) and LG : D(B) → D(A) both exist, then LG is left adjoint to RF.

**How the definition helps.** Total derived functors act on whole derived categories, so their adjunction compares morphisms of complexes in every degree (our own). The derived adjunction theorem transports the chain-level adjunction to LG and RF.

**Paper or page:** [Derived, Lemma 13.30.3.](https://stacks.math.columbia.edu/tag/09T5). It says: “If the derived functors RF : D(A) → D(B) and LG : D(B) → D(A) exist, then RF is a right adjoint to LG.”

**Sources:** none listed. No primary source with a working link was found.

### Finite cohomological dimension extends derived functors to unbounded complexes

**Remember:** A bound on cohomological dimension lets acyclic complexes compute RF everywhere.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** Suppose F is left exact and every object embeds in a right F-acyclic object. Finite cohomological dimension means some integer d ≥ 0 satisfies RⁿF(A) = 0 for every object A and every n &gt; d.

**Problem.** If F has finite cohomological dimension, then RF exists on the whole unbounded derived category D(A), and every complex of F-acyclic objects computes it. Without the bound, an unbounded complex of acyclic objects can give the wrong answer.

**How the definition helps.** The finite-cohomological-dimension theorem extends the computation to unbounded complexes under this uniform bound. Over ℤ/4, the exact doubly infinite multiplication-by-two complex has injective terms, but Hom(ℤ/2,−) gives nonzero terms with zero differentials (our own). Nonzero Extⁿ(ℤ/2,ℤ/2) in every degree excludes this example (our own).

**Paper or page:** [Derived, Lemma 13.32.2.](https://stacks.math.columbia.edu/tag/07K7). It says: “there exists an integer n ≥ 0 such that RⁿF = 0, Then RF : D(A) → D(B) exists, any complex consisting of right acyclic objects for F computes RF”

**Sources:** none listed. No primary source with a working link was found.

### K-injective complexes give derived functors on unbounded complexes

**Remember:** Every map from an acyclic complex into a K-injective complex contracts.

*Makes the theorem clean to state or prove.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80, 18G35. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** A complex I is K-injective if every chain map from every acyclic complex into I is homotopic to zero.

**Problem.** In a Grothendieck abelian category, every complex, bounded or not, has a K-injective resolution. So right derived functors such as RHom and derived pushforward exist on the whole unbounded derived category.

**How the definition helps.** Maps into K-injective complexes compute derived-category morphisms up to chain homotopy (our own). The K-injective resolution theorem supplies such replacements for all complexes in a Grothendieck abelian category (our own). Applying a functor to these replacements computes its total right derived functor.

**Paper or page:** [Stacks Project, Derived, Lemma 13.31.7](https://stacks.math.columbia.edu/tag/070K), [Stacks Project, Injectives, Theorem 19.12.6](https://stacks.math.columbia.edu/tag/079P). It says: “Assume every complex has a quasi-isomorphism towards a K-injective complex. Then any exact functor F : K(𝒜) → 𝒟′ of triangulated categories has a right derived functor RF : D(𝒜) ⟶ 𝒟′”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 070K (Derived, Lemma 13.31.7)](https://stacks.math.columbia.edu/tag/070K)
- [The Stacks Project Authors, The Stacks Project, Tag 079P (Injectives, Theorem 19.12.6)](https://stacks.math.columbia.edu/tag/079P)

### Projective complexes make chain maps into exact complexes null-homotopic

**Remember:** Projective terms lift maps to cycles through the differential, one degree at a time.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G35, 18G05. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** An object P is projective if every map from P to the target of an epimorphism lifts through that epimorphism. A chain complex is degreewise projective if each of its terms is projective.

**Problem.** Every chain map, in non-negative degrees, from a degreewise projective complex into an exact complex is null-homotopic. So projective resolutions are unique up to chain homotopy.

**How the definition helps.** Starting in degree zero, exactness makes the differential onto cycles, and projectivity lifts the residual map to the next target term (our own). These successive lifts form the null-homotopy and give the usual comparison of projective resolutions (our own). Without projectivity, the identity into degree zero of ℤ →² ℤ → ℤ/2 cannot lift through ℤ → ℤ/2 (our own).

**nLab:** [projective resolution](https://ncatlab.org/nlab/show/projective+resolution), [homotopy category of chain complexes](https://ncatlab.org/nlab/show/homotopy+category+of+chain+complexes). It says: “This points to the problem: the components of the domain chain complex are not free enough to admit sufficiently many maps out of it.”

**Sources:**

- [Peter J. Hilton, Urs Stammbach, A Course in Homological Algebra, Graduate Texts in Mathematics 4, Springer (1971; 2nd edition 1997)](https://doi.org/10.1007/978-1-4419-8566-8)

### Requiring injective terms makes derived functors independent of the resolution

**Remember:** Injective resolutions agree up to homotopy, so F cannot tell them apart.

*Rules out counterexamples.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** An object I is injective when Hom(−, I) keeps short exact sequences exact. An injective resolution of X is an exact sequence 0 → X → I⁰ → I¹ → ⋯ in which each Iⁿ is injective. The right derived functor RⁱF(X) is the i-th cohomology of F(I•).

**Problem.** For a left exact additive functor F, any two injective resolutions of X give canonically isomorphic groups Hⁱ(F(I•)). Arbitrary resolutions can give different groups.

**How the definition helps.** The comparison theorem gives homotopy equivalences over X unique up to homotopy, which additive functors preserve (our own). The identity resolution of ℤ/2 gives zero degree-one cohomology after Hom(ℤ/2,−) (our own). Its injective resolution by multiplication by two on ℚ/ℤ gives ℤ/2 instead (our own).

**Wikipedia:** [Derived functor](https://en.wikipedia.org/wiki/Derived_functor). It says: “various things have to be checked: the result does not depend on the given injective resolution of X, and any morphism X → Y naturally yields a morphism RⁱF(X) → RⁱF(Y), so that we indeed obtain a functor.”

**Sources:**

- [Henri Cartan and Samuel Eilenberg, Homological Algebra, Princeton University Press (1956)](https://doi.org/10.1515/9781400883844)

### Defining Ext as derived-category maps makes the Yoneda product associative

**Remember:** A Yoneda product is composition with the degrees lined up.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** For objects A and B of an abelian category, define Extⁿ(A,B) = Hom(A,B\[n\]) in its derived category. For α in Extⁿ(A,B) and β in Extᵐ(B,C), their product is β\[n\] ∘ α.

**Problem.** The Yoneda product on Ext groups is associative.

**How the definition helps.** The product is composition of maps, and shifting is a functor, so associativity of composition gives associativity of the product (our own). With resolutions or spliced sequences, one checks associativity by hand (our own). The work goes into proving that maps into shifted objects agree with the older Ext groups and products (our own).

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “which is simply the composition of morphisms in the derived category.”

**Sources:** none listed. No primary source with a working link was found.

### Defining flatness by vanishing Tor makes flat modules closed under extensions

**Remember:** Flatness is Tor₁ vanishing, so long exact sequences decide it.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 13C11. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A left R-module M is flat exactly when Tor₁ᴿ(X,M) vanishes for every right R-module X (our own).

**Problem.** Let 0 → A → B → C → 0 be a short exact sequence of modules with C flat. Then A is flat if and only if B is flat. If A and B are flat, C need not be flat.

**How the definition helps.** The long exact sequence places Tor₁(X,A) → Tor₁(X,B) between Tor₂(X,C) and Tor₁(X,C) (our own). Flatness of C kills both ends, so the middle map is an isomorphism for every X (our own). Multiplication by two embeds ℤ in ℤ with nonflat quotient ℤ/2 (our own).

**Wikipedia:** [Flat module](https://en.wikipedia.org/wiki/Flat_module). It says: “If A and C are flat, then so is B. Also, if B and C are flat, then so is A. If A and B are flat, C need not be flat in general.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Tor with both inputs resolved makes Tor symmetric

**Remember:** Swap the two resolutions, with a sign from the degrees.

*True by definition. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 13D07. arXiv math.KT. Level 3: graduate.

**Definition.** For modules M and N over a commutative ring, choose nonnegative projective resolutions P → M and Q → N. Define Torₙ(M,N) as Hₙ of the total tensor complex P ⊗ Q (our own).

**Problem.** Over a commutative ring, Torₙ(M, N) and Torₙ(N, M) are naturally isomorphic for every n.

**How the definition helps.** With both inputs resolved, the definition is symmetric apart from the order of the tensor factors (our own). Swapping them, with a minus sign when both degrees are odd, is an isomorphism of complexes (our own). The work goes into proving that this two-sided Tor agrees with Tor computed by resolving either input alone (our own).

**nLab:** [Tor](https://ncatlab.org/nlab/show/Tor). It says: “the total complex of the degreewise tensor product of modules double complex”

**Sources:** none listed. No primary source with a working link was found.

### Derived tensor products give a Künneth spectral sequence over any ring

**Remember:** Resolve inside the definition, and the freeness hypothesis disappears.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G40, 55U25. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** For bounded complexes of right and left R-modules K and L, choose a bounded-above flat resolution P → K in cohomological degrees. The derived tensor product K ⊗ᴸ L is represented by P ⊗ L (our own).

**Problem.** For bounded right and left module complexes over any ring, the Künneth spectral sequence converges to Hᵖ⁺ᑫ(K ⊗ᴸ L). Its E₂ᵖᑫ term is ⊕ᵢ₊ⱼ₌q Tor₋ₚ(HⁱK,HʲL). Over a principal ideal domain, the two possible columns give the Künneth short exact sequence.

**How the definition helps.** The replacement lets the hyper-Tor spectral sequence use arbitrary bounded inputs (our own). Over a principal ideal domain, higher Tor vanishes above degree one, leaving at most two columns and the Künneth short exact sequence (our own).

**Wikipedia:** [Künneth theorem](https://en.wikipedia.org/wiki/K%C3%BCnneth_theorem). It says: “The freeness of the chain modules means that in this geometric case it is not necessary to use any hyperhomology or total derived tensor product.”

**Paper or page:** [More Algebra, Lemma 15.64.4.](https://stacks.math.columbia.edu/tag/0H7Z). It says: “Let R be a ring. Let K and L be objects of Dᵇ(R). There exists a bigraded bounded spectral sequence”

**Sources:** none listed. No primary source with a working link was found.

### Hereditary rings make the Künneth theorem a short exact sequence

**Remember:** Resolutions of length one leave room for only one Tor term.

*Rules out counterexamples.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55U25. arXiv math.AC, math.AT. Level 3: graduate.

**Definition.** A ring is hereditary when every submodule of a projective module is projective. Equivalently, every module has a projective resolution of length at most 1, so Torₙ = 0 for all n ≥ 2. Principal ideal domains such as Z, and Dedekind domains, are hereditary.

**Problem.** Over a commutative hereditary ring, let C be a complex of projectives and D any complex. The sequence 0 → ⊕ᵢ₊ⱼ₌ₙ Hᵢ(C)⊗Hⱼ(D) → Hₙ(C⊗D) → ⊕ᵢ₊ₖ₌ₙ₋₁ Tor₁(Hᵢ(C),Hₖ(D)) → 0 is exact. This can fail over ℤ/4.

**How the definition helps.** Projective boundaries split each surjection Cᵢ → Bᵢ₋₁, decomposing C into shifted length-one projective resolutions of its homology (our own). Tensoring gives the Künneth sequence (our own). Over ℤ/4, the multiplication-by-two free resolution of ℤ/2 gives nonzero Tor₂ against ℤ/2, although both proposed outer terms vanish in degree two (our own).

**nLab:** [Künneth theorem](https://ncatlab.org/nlab/show/K%C3%BCnneth+theorem). It says: “For R a principal ideal domain, given a chain complex C• ∈ Ch•(R Mod) of free modules over R and given any other chain complex C′• ∈ Ch•(R Mod), then for each n ∈ ℕ”

**Wikipedia:** [Hereditary ring](https://en.wikipedia.org/wiki/Hereditary_ring). It says: “The ring R is left hereditary if and only if all left modules have projective resolutions of length at most 1.”

**Sources:** none listed. No primary source with a working link was found.

### Identifying extensions with Ext¹ makes the Baer sum a group law

**Remember:** Pull back along the diagonal, then push out along addition.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** For two extensions of A by B, take their direct sum and pull back along the diagonal A → A ⊕ A. Push out along addition B ⊕ B → B to obtain their Baer sum, up to isomorphism fixing both endpoints (our own).

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

**Definition.** A chain complex of abelian groups is free if its chain group in every degree is free abelian.

**Problem.** For a free chain complex C and an abelian group A, the universal coefficient sequence is natural and splits nonnaturally. It reads 0 → Hₙ(C) ⊗ A → Hₙ(C ⊗ A) → Tor₁(Hₙ₋₁(C),A) → 0. For other complexes it can fail.

**How the definition helps.** Free boundaries split Cₙ → Bₙ₋₁, and free cycles give a length-one resolution Bₙ → Zₙ of Hₙ(C). These splittings give the tensor and Tor terms, with the splitting depending on choices (our own). For C concentrated in degree zero at ℤ/2, tensoring with ℤ/2 gives zero H₁ despite nonzero Tor₁ (our own).

**nLab:** [universal coefficient theorem](https://ncatlab.org/nlab/show/universal+coefficient+theorem). It says: “as a projective resolution of Hₙ(C•). Therefore by definition of Tor the group Tor₁(Hₙ(C•), A) is the chain homology in degree 1 of”

**Wikipedia:** [Universal coefficient theorem](https://en.wikipedia.org/wiki/Universal_coefficient_theorem). It says: “The usual proof of this result is a pure piece of homological algebra about chain complexes of free abelian groups.”

**Sources:** none listed. No primary source with a working link was found.

### Splicing Yoneda extensions makes vanishing of one Ext propagate upward

**Remember:** Every long extension is a splice, so one zero factor kills it.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** For i ≥ 1, a Yoneda i-extension is an exact sequence from A to B with i middle terms and zeros beyond both endpoints. Classes identify sequences joined by zigzags of chain maps fixing both endpoints. Splicing representatives gives their Yoneda product (our own).

**Problem.** In an abelian category, suppose Extᵖ(B,A) vanishes for every pair of objects A,B at some fixed degree p ≥ 0. Then Extⁱ(B,A) vanishes for every such pair and every i ≥ p.

**How the definition helps.** For i &gt; p ≥ 1, cutting a representative at an intermediate image expresses its class as a product with a degree-p factor (our own). Bilinearity makes this product zero (our own). For p = 0 the hypothesis kills every identity morphism, so every object is zero (our own).

**Paper or page:** [Derived, Lemma 13.27.8.](https://stacks.math.columbia.edu/tag/0EWW). It says: “If Extᵖ<sub>A</sub>(B, A) = 0 for any pair of objects A, B of A, then Extⁱ<sub>A</sub>(B, A) = 0 for i ≥ p and any pair of objects A, B of A.”

**Sources:** none listed. No primary source with a working link was found.

### The Ext group lets cohomology be computed from homology

**Remember:** Ext records maps from relations that do not extend to the free generators.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55U20, 55N10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For abelian groups H and A, choose a free resolution 0 → F₁ → F₀ → H → 0. Then Ext¹(H, A) is the cokernel of Hom(F₀, A) → Hom(F₁, A), the first right derived functor of Hom(−, A). It vanishes when H is free, and Ext¹(Z/m, Z) = Z/m.

**Problem.** For every space X and abelian group A, Hⁿ(X;A) ≅ Hom(Hₙ(X),A) ⊕ Ext¹(Hₙ₋₁(X),A) nonnaturally. For a finite CW complex, integral Hⁿ is isomorphic to ℤ of rank βₙ plus the torsion subgroup of Hₙ₋₁.

**How the definition helps.** Evaluation on cycles gives the Hom term, while the free resolution Bₙ₋₁ → Zₙ₋₁ gives the Ext kernel (our own). Free boundaries split the chain groups over the cycles, giving a nonnatural splitting (our own). For finitely generated homology, Hom into ℤ detects free summands and Ext¹ into ℤ recovers torsion up to isomorphism (our own).

**nLab:** [universal coefficient theorem](https://ncatlab.org/nlab/show/universal+coefficient+theorem). It says: “If the coefficients are not a field but an arbitrary abelian group, then this relationship receives a correction by an Ext-group.”

**Wikipedia:** [Universal coefficient theorem](https://en.wikipedia.org/wiki/Universal_coefficient_theorem). It says: “This gives the following statement for integral cohomology: Hⁱ(X;ℤ) ≅ ℤ<sup>βᵢ</sup>(X) ⊕ Tᵢ₋₁.”

**Sources:**

- [Samuel Eilenberg and Saunders MacLane, Group extensions and homology, Annals of Mathematics 43 (1942), 757–831](https://doi.org/10.2307/1968966)

### Vanishing Ext² makes every bounded complex split into its cohomology

**Remember:** With no Ext², nothing can glue the cohomology pieces together.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is hereditary when Ext²(B, A) = 0 for all objects A and B. Modules over a principal ideal domain, and coherent sheaves on a smooth projective curve, form hereditary categories. The bounded derived category Dᵇ(A) has bounded complexes as objects, with quasi-isomorphisms inverted.

**Problem.** In a hereditary abelian category, each bounded complex K is isomorphic in the derived category to ⊕ᵢ Hⁱ(K)\[−i\].

**How the definition helps.** Splicing extensions propagates the assumed Ext² vanishing to every higher degree (our own). By induction, the lower truncation is a sum of shifted cohomology objects (our own). The connecting map from the top cohomology has components in Ext of degree at least two, so the truncation triangle splits (our own).

**Paper or page:** [Derived, Lemma 13.27.10.](https://stacks.math.columbia.edu/tag/0EWX). It says: “Assume Ext²<sub>A</sub>(B, A) = 0 for any pair of objects A, B of A. Then any object K of Dᵇ(A) is isomorphic to the direct sum of its cohomologies: K ≅ ⊕ Hⁱ(K)\[−i\].”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing on injectives makes Ext the same whichever variable is resolved

**Remember:** Long exact, starts with Hom, dies on injectives, so it is Ext.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G10. arXiv math.CT. Level 3: graduate.

**Definition.** In an abelian category with enough injectives, a cohomological δ-functor extending F computes its right derived functors if it vanishes on injectives in positive degrees. The identification is unique once fixed in degree zero.

**Problem.** For modules A and B, let P → A be a projective resolution and B → I an injective resolution. Then Hⁿ(Hom(P, B)) ≅ Hⁿ(Hom(A, I)) for all n, so both give Extⁿ(A, B).

**How the definition helps.** For fixed P, the functors HⁿHom(P,−) form a cohomological δ-functor since its terms Hom(Pᵢ,−) are exact (our own). Degree zero is Hom(A,−), and injectivity of B makes Hom(−,B) exact, killing positive degrees (our own). The recognition criterion therefore identifies both computations.

**nLab:** [Ext](https://ncatlab.org/nlab/show/Ext). It says: “If they exist, the classical right derived functors of either functor agree”

**Wikipedia:** [Derived functor](https://en.wikipedia.org/wiki/Derived_functor). It says: “such that for every injective object I of A, Rⁱ(I)=0 for every positive i, then these functors are the right derived functors of R⁰.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal 9 (1957), 119–221](https://doi.org/10.2748/tmj/1178244839)

### Yoneda's definition lets every exact functor act on Ext

**Remember:** Apply the functor to the whole exact sequence; that is the map.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT. Level 3: graduate.

**Definition.** For i ≥ 1, Yoneda Extⁱ(B,A) consists of exact sequences 0 → A → E₁ → ⋯ → Eᵢ → B → 0 modulo equivalence. Zigzags of chain maps inducing the identity on A and B generate this equivalence (our own).

**Problem.** Every exact functor F between abelian categories induces a homomorphism Ext¹(B, A) → Ext¹(F(B), F(A)) that sends an extension E to F(E). The same rule works for Yoneda's higher Ext groups.

**How the definition helps.** Exactness preserves the representing sequences, and functoriality preserves their equivalences (our own). An exact functor preserves finite sums, pullbacks, and pushouts, so it preserves the Baer sum in every degree (our own).

**Paper or page:** [Homology, Lemma 12.7.3.](https://stacks.math.columbia.edu/tag/010O). It says: “Let F : A → B be an exact functor. For every pair of objects A, B of A the functor F induces an abelian group homomorphism Ext<sub>A</sub>(B, A) ⟶ Ext<sub>B</sub>(F(B), F(A)) which maps the extension E to F(E).”

**Sources:** none listed. No primary source with a working link was found.

### Yoneda's extension classes define Ext in abelian categories without projectives

**Remember:** Ext¹ is the group of extensions, with no resolutions needed.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** For n ≥ 1, Yoneda Extⁿ(A,B) uses exact sequences from B to A with n middle terms and zeros beyond both endpoints. Zigzags of chain maps fixing B and A identify representatives, and Baer sum adds the classes (our own).

**Problem.** In any essentially small abelian category, Yoneda Ext groups exist, and Ext¹(A,B) classifies extensions of A by B with split extensions representing zero. With enough projectives or injectives, these groups agree with Ext computed by resolutions.

**How the definition helps.** This construction needs only exact sequences and their maps, so it applies without resolutions. The neutral class in degree one is the split extension (our own). The Yoneda comparison theorem identifies these groups with resolution Ext when enough projectives or injectives exist.

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “for objects A and B in any abelian category C; this agrees with the definition in terms of resolutions if C has enough projectives or enough injectives.”

**Sources:**

- [R. Baer, Erweiterung von Gruppen und ihren Isomorphismen, Mathematische Zeitschrift 38 (1934) 375–416](https://doi.org/10.1007/BF01170643)

### Defining global dimension through Ext makes projective and injective versions agree

**Remember:** Ext does not care which variable you resolve, so both suprema agree.

*True by definition.* MSC 18G20 (Homological dimension (category-theoretic aspects)), 16E10. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The global dimension of an abelian category is the supremum of degrees i ≥ 0 with Extⁱ(M,N) ≠ 0 for some objects M,N. Take the supremum in the nonnegative integers together with infinity.

**Problem.** In an abelian category with enough projectives and enough injectives, the supremum of the projective dimensions equals the supremum of the injective dimensions. Both equal the global dimension, and C and its opposite category have the same global dimension.

**How the definition helps.** The Ext definition treats the two variables of Ext in the same way, so it is unchanged when arrows are reversed. Each one-sided supremum equals it, because M has projective dimension at most n exactly when Extⁿ⁺¹(M, −) = 0 (our own summary). The dual statement holds for injective dimension. The work goes into this dimension-shifting lemma.

**nLab:** [projective dimension](https://ncatlab.org/nlab/show/projective+dimension). It says: “More generally, a global dimension of an abelian category C may be defined as gl.dim(C) := sup{ i ≥ 0 \| ∃ M,N ∈ C, Extⁱ(M,N) ≠ 0}”

**Sources:** none listed. No primary source with a working link was found.

### Defining projective dimension by Ext makes it drop on direct summands

**Remember:** A summand cannot have nonzero Ext where the whole module has none.

*True by definition. Confidence: medium.* MSC 18G20 (Homological dimension (category-theoretic aspects)), 16E10. arXiv math.KT. Level 3: graduate.

**Definition.** The projective dimension of M is the least n ≥ 0 with Extᵏ(M, N) = 0 for all k &gt; n and all N. If no such n exists, it is infinity. The usual definition uses the length of a shortest projective resolution of M.

**Problem.** A direct summand of a module has projective dimension at most that of the module.

**How the definition helps.** If M = A ⊕ B, then Extᵏ(M,N) ≅ Extᵏ(A,N) ⊕ Extᵏ(B,N) for every N and k (our own). Thus each vanishing degree for M also vanishes for A and B (our own).

**nLab:** [projective dimension](https://ncatlab.org/nlab/show/projective+dimension). It says: “its projective dimension pd(M) is the minimal integer n (if it exists) such that there is a resolution of M”

**Sources:** none listed. No primary source with a working link was found.

### Defining cotorsion pairs by Ext¹ makes both classes closed under extensions

**Remember:** A class cut out by vanishing Ext¹ inherits every closure property Ext¹ has.

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

**Definition.** For a class 𝒞 of modules, a 𝒞-precover of M is a map φ: C → M with C in 𝒞. Every map from an object of 𝒞 to M must factor through φ. It is a 𝒞-cover if also each endomorphism f of C with φf = φ is an automorphism.

**Problem.** If a module M has a 𝒞-cover, it is unique up to an isomorphism over M. In particular, the flat cover of a module is unique up to isomorphism.

**How the definition helps.** The factorization property gives maps f and g between two covers over M (our own). Both composites are automorphisms by minimality, giving f both a left inverse and a right inverse (our own). Apply this to the class of flat modules (our own).

**Wikipedia:** [Flat cover](https://en.wikipedia.org/wiki/Flat_cover). It says: “Any module over a ring has a flat cover that is unique up to (non-unique) isomorphism.”

**Sources:**

- [E. E. Enochs, Injective and flat covers, envelopes and resolvents, Israel Journal of Mathematics 39 (1981)](https://doi.org/10.1007/BF02760849)

### Combinatorial simplicial homotopy matches chain homotopy under Dold–Kan

**Remember:** Index cylinder copies by simplices of the interval and prescribe both endpoint maps.

*Makes the theorem clean to state or prove.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For simplicial objects U,V in an abelian category, a simplicial homotopy is a map U ⊗ Δ\[1\] → V restricting to the two given maps. In degree n the cylinder has one copy of Uₙ for each n-simplex of Δ\[1\], combined by direct sum (our own).

**Problem.** In an abelian category, two maps a, b of simplicial objects are homotopic exactly when N(a) and N(b) are chain homotopic. So Dold–Kan identifies simplicial homotopy classes of maps with chain homotopy classes.

**How the definition helps.** The simplicial cylinder encodes both endpoint maps in one morphism (our own). The Dold–Kan homotopy comparison theorem identifies existence of such a morphism with chain homotopy after normalization (our own).

**Paper or page:** [Simplicial, tag 019S](https://stacks.math.columbia.edu/tag/019S), [Simplicial, tag 01A4](https://stacks.math.columbia.edu/tag/01A4). It says: “If a, b are homotopic, then s(a), s(b) : s(U) → s(V) are homotopic maps of chain complexes. If 𝒜 is abelian, then also N(a), N(b) : N(U) → N(V) are homotopic maps of chain complexes.”

**Sources:**

- [The Stacks Project, Simplicial Methods, Lemmas 14.27.1 and 14.29.3](https://stacks.math.columbia.edu/tag/019S)

### Defining normalization as the Dold–Kan equivalence makes it exact

**Remember:** An equivalence preserves kernels and cokernels.

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U15. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a simplicial abelian group A, normalization takes NₙA = ⋂₁≤ᵢ≤ₙ ker(dᵢ) with differential d₀ in positive degrees. Dold–Kan identifies this functor as an equivalence with nonnegative chain complexes (our own).

**Problem.** Normalization sends short exact sequences of simplicial abelian groups to short exact sequences of chain complexes.

**How the definition helps.** An equivalence of abelian categories preserves kernels and cokernels, so it preserves exactness (our own). With the kernel-intersection formula, cokernels are not obviously preserved (our own). The work goes into the Dold–Kan theorem, which recovers each group of simplices from normalized chains and degeneracies (our own).

**nLab:** [Dold-Kan correspondence](https://ncatlab.org/nlab/show/Dold-Kan+correspondence). It says: “The Dold–Kan correspondence asserts there is an equivalence of categories between abelian simplicial groups and connective chain complexes of abelian groups.”

**Sources:**

- [Albrecht Dold, Homology of Symmetric Products and Other Functors of Complexes, Annals of Mathematics (1958)](https://doi.org/10.2307/1970043)

### Dold–Kan turns a shifted abelian group into an Eilenberg–MacLane space

**Remember:** Put A in degree n, apply Γ, get K(A, n).

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55P20. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For an abelian group A and n ≥ 1, place A in chain degree n and zero elsewhere. Apply the inverse normalization functor Γ of Dold–Kan to this complex.

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

**Definition.** Normalized chains have a lax symmetric monoidal structure with a unit map and natural shuffle chain maps N(A) ⊗ N(B) → N(A ⊗ B). These satisfy associativity, unit and symmetry identities (our own).

**Problem.** For a simplicial ring R, the normalized complex N(R) is a differential graded ring, and the homotopy groups π∗(R) form a graded ring. If R is commutative, N(R) and π∗(R) are graded-commutative.

**How the definition helps.** Composing the shuffle map with normalized multiplication makes N(R) a differential graded ring (our own). Shuffle symmetry gives the sign rule for commutative R (our own). The identification π∗R ≅ H∗N(R) transfers the product to homotopy groups (our own).

**nLab:** [monoidal Dold-Kan correspondence](https://ncatlab.org/nlab/show/monoidal+Dold-Kan+correspondence). It says: “The two functors in the Dold-Kan correspondence individually respect these monoidal structures, in the sense that they are lax monoidal functors (but not strong monoidal functors”

**Sources:** none listed. No primary source with a working link was found.

### Splitting off degenerate simplices lets homology use only nondegenerate simplices

**Remember:** Degenerate simplices form a contractible summand, so throw them away.

*Makes the theorem clean to state or prove.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For a simplicial abelian group A, give Cₙ = Aₙ the alternating face differential. Define Dₙ as the sum of the images of all degeneracy maps into Aₙ. The normalized quotient complex is C/D.

**Problem.** For every simplicial abelian group A, the quotient map C A → C A / D A is a chain homotopy equivalence. So the homology of a simplicial set can be computed from the free complex on its nondegenerate simplices.

**How the definition helps.** The normalized complex is a direct summand complementary to D A, so the comparison reduces to one fact: D A is contractible. For a simplicial set X, the quotient of ℤ\[X\] by its degenerate part is free on the nondegenerate simplices (our own). The work went into the Eilenberg–Mac Lane theorem that D A is null-homotopic. So the standard n-simplex, which has infinitely many degenerate simplices, has a finite chain complex.

**nLab:** [Moore complex](https://ncatlab.org/nlab/show/Moore+complex). It says: “i.e. the complex D•(X) is null-homotopic (a contractible chain complex).”

**Paper or page:** [Simplicial, tag 019A](https://stacks.math.columbia.edu/tag/019A). It says: “The canonical morphism of chain complexes N(U) → s(U) is split. In fact, s(U) = N(U) ⊕ D(U) for some complex D(U). The construction U ↦ D(U) is functorial.”

**Sources:**

- [Paul G. Goerss and John F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### The Moore complex makes homotopy groups of simplicial abelian groups its homology

**Remember:** A cycle of the Moore complex is a sphere based at zero.

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For a simplicial abelian group A, put N₀A = A₀ and NₙA = ⋂₁≤ᵢ≤ₙ ker(dᵢ) for n &gt; 0. Use d₀ as the differential in positive degrees.

**Problem.** Let A be a simplicial abelian group and let n ≥ 0. Then the simplicial homotopy group πₙ(A, 0) is naturally isomorphic to the homology group Hₙ(N A).

**How the definition helps.** Positive-degree cycles have every face zero, so they represent based spheres in the underlying Kan complex (our own). In the Kan description, a cycle contracts exactly when it bounds a simplex whose other faces vanish (our own). In degree zero, quotienting vertices by these boundaries gives the components (our own).

**nLab:** [Moore complex](https://ncatlab.org/nlab/show/Moore+complex). It says: “For A a simplicial abelian group there are natural isomorphisms πₙ(A,0) ≃ Hₙ(N A) ≃ Hₙ(A) between the simplicial homotopy groups and the chain homology groups of the unnormalized and of the normalized chain complexes.”

**Paper or page:** [Simplicial, tag 08NZ](https://stacks.math.columbia.edu/tag/08NZ). It says: “Let X be a simplicial group. Then X is a Kan complex.”

**Sources:**

- [Paul G. Goerss and John F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Through Dold–Kan, every simplicial abelian group splits into Eilenberg–MacLane spaces

**Remember:** Chain complexes over ℤ split up to quasi-isomorphism, so simplicial abelian groups split.

*Makes the theorem clean to state or prove.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55P20. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** The Dold–Kan correspondence identifies simplicial abelian groups with chain complexes of abelian groups in degrees n ≥ 0. Weak equivalences of simplicial abelian groups correspond to quasi-isomorphisms, that is, chain maps that induce isomorphisms on homology.

**Problem.** Every simplicial abelian group A is homotopy equivalent, as a simplicial set, to the product over i ≥ 0 of Eilenberg–MacLane spaces K(πᵢA, i). The equivalence is not natural in A.

**How the definition helps.** Dold–Kan turns the topological question into one about chain complexes, where it becomes a fact about the ring ℤ. Over ℤ every submodule of a free module is free. So every chain complex is quasi-isomorphic to the direct sum of its homology groups in their degrees (our own). Applying Γ gives the product of the spaces K(Hᵢ, i), since each simplicial degree sees finitely many factors (our own).

**nLab:** [Dold-Kan correspondence](https://ncatlab.org/nlab/show/Dold-Kan+correspondence). It says: “The simplicial abelian group Γ(A\[−n\]) is an Eilenberg-MacLane object K(A,n).”

**Wikipedia:** [Simplicial group](https://en.wikipedia.org/wiki/Simplicial_group). It says: “any simplicial abelian group A is non-canonically homotopy equivalent to a product of Eilenberg–MacLane spaces, ∏ i≥0 K(πᵢA, i).”

**Sources:**

- [Paul G. Goerss and John F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Defining cones by maps out of them makes null homotopies extend

**Remember:** A map out of the cone carries its own null homotopy.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** For a chain map f : X → Y, its cone represents pairs (g,h) where g : Y → W is a chain map. Here h is a specified null-homotopy of gf. Each pair determines a unique map Cone(f) → W, naturally in W.

**Problem.** Every chain map g : Y → W with g∘f homotopic to zero extends to a chain map from the cone on f.

**How the definition helps.** With the universal definition, choose a homotopy from g∘f to zero, and the definition gives the extension (our own). The extension depends on the chosen homotopy (our own). The work goes into checking that the usual formula has this universal property (our own).

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “universal object with a morphism i from Y and a left homotopy from i ∘ f to the zero morphism.”

**Sources:** none listed. No primary source with a working link was found.

### Donors and receptors make diagram chases short in the salamander lemma

**Remember:** Intersect outgoing kernels for the receptor and sum incoming images for the donor.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories). arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** At each object of a double complex, the receptor is the intersection of outgoing kernels modulo the image of the incoming diagonal composite. The donor is the kernel of the outgoing diagonal composite modulo the sum of incoming images (our own).

**Problem.** The salamander lemma gives a local exact sequence of donors, receptors, and homology groups for each horizontal or vertical arrow. It implies the 3×3, four, five, and snake lemmas and the long exact homology sequence.

**How the definition helps.** The two quotients capture precisely the intermediate objects in Bergman’s salamander exact sequence (our own). Applying that sequence at consecutive arrows gives the standard diagram lemmas under their usual exactness hypotheses.

**nLab:** [salamander lemma](https://ncatlab.org/nlab/show/salamander+lemma). It says: “all the standard diagram chasing lemmas of homological algebra are direct and transparent consequences of the salamander lemma, such as the 3x3 lemma, the four lemma, hence the five lemma, the snake lemma”

**Sources:**

- [George M. Bergman, On diagram-chasing in double complexes, Theory and Applications of Categories 26 (2012) 60–96, arXiv:1108.0958](https://arxiv.org/abs/1108.0958)

### Identifying homotopic chain maps makes cone triangles satisfy the triangulated axioms

**Remember:** Up to homotopy, the cone of an identity becomes zero.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** The homotopy category K(A) of an additive category A has chain complexes as objects and chain maps up to chain homotopy as morphisms. A triangle in K(A) is distinguished when it is isomorphic to a cone triangle A → B → C(f) → A\[1\]. The category of complexes itself has the same cone triangles, but it does not identify homotopic maps.

**Problem.** For every additive category A, the homotopy category K(A) with cone triangles is a triangulated category, meaning these triangles satisfy Verdier's axioms. The category of complexes is not: for a nonzero complex X, the triangle X → X → 0 → X\[1\] fails there.

**How the definition helps.** Passing to homotopy classes makes the cone of an identity map isomorphic to 0, because that cone is contractible, meaning its identity map is null-homotopic. So the triangle X → X → 0 → X\[1\], which the axioms demand, becomes distinguished. Among plain complexes the cone of the identity stays nonzero, so this triangle fails. The remaining work went into the rotation and octahedral axioms.

**Wikipedia:** [Homotopy category of chain complexes](https://en.wikipedia.org/wiki/Homotopy_category_of_chain_complexes). It says: “is not distinguished since the cone of the identity map is not isomorphic to the complex 0 (however, the zero map C(id) → 0 is a homotopy equivalence, so that this triangle is distinguished in K(A)).”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/014S). It says: “Let 𝒜 be an additive category. The category K(𝒜) of complexes up to homotopy with its natural translation functors and distinguished triangles as defined above is a triangulated category.”

**Sources:** none listed. No primary source with a working link was found.

### Inverting quasi-isomorphisms makes every short exact sequence of complexes a triangle

**Remember:** Cone and cokernel agree in cohomology, not up to homotopy.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** The derived category D(A) of an abelian category A is obtained from complexes by inverting all quasi-isomorphisms. Let 0 → X → Y → Z → 0 be a short exact sequence of complexes, with f the map from X to Y. The comparison map from the cone C(f) to Z sends (x, y) to the image of y.

**Problem.** For every short exact sequence of complexes, the map from the cone of the injection to the cokernel is a quasi-isomorphism. So in D(A) every short exact sequence gives a distinguished triangle, but in K(A), complexes up to homotopy, some do not.

**How the definition helps.** In D(A) the comparison map becomes an isomorphism, so the cokernel can stand in for the cone. The map is onto, and its kernel is the cone of the identity of X, which is acyclic (our own). In K(A) this fails for 0 → ℤ → ℤ → ℤ/2 → 0, with the first map multiplication by 2. Every chain map from ℤ/2 to the cone of this map is zero, so the two are not homotopy equivalent (our own).

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “The following discussion revolves around the fact that now cone(f)• as well as Z• are both models for the homotopy cofiber of f.”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/0152). It says: “Let 𝒜 be an abelian category. The functor Comp(𝒜) → D(𝒜) defined has the natural structure of a δ-functor, with δ<sub>A•→B•→C•</sub> = − p ∘ q⁻¹ with p and q as explained above.”

**Sources:** none listed. No primary source with a working link was found.

### Mapping cones turn a quasi-isomorphism test into one acyclicity check

**Remember:** A map is a quasi-isomorphism when its cone has no cohomology.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** For a cochain map f : A → B, its cone has terms Cⁿ = Aⁿ⁺¹ ⊕ Bⁿ. Its differential sends (a,b) to (−da,f(a) + db) (our own).

**Problem.** A chain map f between complexes over an abelian category is a quasi-isomorphism exactly when its mapping cone is acyclic. Acyclic means that all its cohomology groups are zero.

**How the definition helps.** The cone is built so that the connecting map of its short exact sequence is the map that f induces on cohomology. So in the long exact sequence, Hⁿ(C(f)) sits between the cokernel of Hⁿ(f) and the kernel of Hⁿ⁺¹(f). Exactness then shows that every Hⁿ(f) is an isomorphism exactly when every Hⁿ(C(f)) is zero. The only real work is a sign check that the connecting map is H(f).

**nLab:** [quasi-isomorphism](https://ncatlab.org/nlab/show/quasi-isomorphism). It says: “A chain map f• : C• → D• is a quasi-isomorphism precisely if its mapping cone cone(f)• ∈ Ch•(𝒜) has all trivial chain homology groups.”

**Wikipedia:** [Mapping cone (homological algebra)](https://en.wikipedia.org/wiki/Mapping_cone_%28homological_algebra%29). It says: “The main use of the cone is to identify quasi-isomorphisms: if the cone is acyclic, then the map is a quasi-isomorphism.”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Pretriangulated dg categories give triangulated homotopy categories and exact functors

**Remember:** Take cones at the dg level, and ho(A) gets its triangles free.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** A dg category is pretriangulated when its representable dg modules contain zero and are closed under shifts and cones up to homotopy equivalence (our own).

**Problem.** If A is pretriangulated, then ho(A) has a canonical triangulated structure. A dg functor between pretriangulated dg categories then induces an exact functor between their homotopy categories.

**How the definition helps.** The dg Yoneda embedding identifies ho(A) with a full subcategory closed under the triangulated operations on dg modules (our own). Extension of scalars along a dg functor preserves representables, shifts, and cone triangles, inducing an exact functor on these subcategories (our own).

**nLab:** [pretriangulated dg-category](https://ncatlab.org/nlab/show/pretriangulated+dg-category). It says: “As an immediate corollary, note that for a pretriangulated dg-category A, its homotopy category ho(A) inherits a canonical triangulated structure.”

**Paper or page:** [Dga, Proposition 22.10.3.](https://stacks.math.columbia.edu/tag/09KJ). It says: “The homotopy category K(Mod\_(A, d)) of differential graded A-modules with its natural translation functors and distinguished triangles is a triangulated category.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Enhanced triangulated categories, Math. USSR Sbornik (1991)](https://doi.org/10.1070/SM1991v070n01ABEH001253)

### Product totalization turns any exact left resolution of complexes into a quasi-isomorphism

**Remember:** Resolve to the left, then totalize with products.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G40. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** For a cochain double complex with anticommuting differentials, product totalization takes the product of all terms on each diagonal p + q = n. Its differential is the sum of the two differentials (our own).

**Problem.** Let … → A₁ → A₀ → M → 0 be an exact sequence of complexes of abelian groups. Then the product total complex of the double complex of the A's maps to M by a quasi-isomorphism.

**How the definition helps.** In the augmented complex, row exactness kills each cycle recursively, and the product stores all corrections together (our own). For M = 0, take A₀ = ℤ\[0\] and Aₘ the identity ℤ → ℤ in degrees m−1,m for m ≥ 1 (our own). Connect adjacent columns by identity on the shared degree (our own). The sum totalization leaves H⁰ ≅ ℤ because its corrections must have finite support (our own).

**nLab:** [total complex](https://ncatlab.org/nlab/show/total+complex). It says: “Using the four different types of total complexes gives the flexibility to make more nuanced exactness statements for the total complex under various assumptions on the double complex.”

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/0E1R). It says: “Let Tot\_π(A<sup>•, •</sup>) be the product total complex associated to the double complex (see proof). Then the map Tot\_π(A<sup>•, •</sup>) → M• induced by A₀• → M• is a quasi-isomorphism.”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Property (P) modules make maps in the derived category homotopy classes

**Remember:** Built from free pieces, P sees every acyclic module as zero.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 16E45, 18G80. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** A dg module has property (P) if it admits an exhaustive filtration by dg submodules indexed from F₋₁ = 0. Each inclusion splits on graded modules. Each successive quotient is a dg direct summand of a direct sum of shifts of the algebra (our own).

**Problem.** If P has property (P), then every map of dg modules from P to an acyclic dg module is null-homotopic. Every dg module receives a quasi-isomorphism from such a P, so maps in the derived category are homotopy classes of maps out of P.

**How the definition helps.** Each filtered step extends a null-homotopy because maps from shifted free pieces to an acyclic module have no cohomological obstruction (our own). Over k\[ε\]/(ε²) for a field k, the doubly infinite multiplication-by-ε complex is acyclic and degreewise free but has noncontractible identity (our own). The existence theorem for property (P) resolutions supplies the replacement used to compute derived maps (our own).

**Paper or page:** [Dga, Lemma 22.20.2.](https://stacks.math.columbia.edu/tag/09KM), [Dga, Lemma 22.20.4.](https://stacks.math.columbia.edu/tag/09KP). It says: “Let P be a differential graded A-module with property (P). Then Hom<sub>K</sub>(Mod\_(A, d))(P, N) = 0 for all acyclic differential graded A-modules N.”

**Sources:**

- [B. Keller, Deriving DG categories, Ann. Sci. École Norm. Sup. 27 (1994) 63–102](https://doi.org/10.24033/asens.1689)

### Strongly pretriangulated dg categories make cones of strict squares canonical

**Remember:** A cone that represents a functor is natural in its arrow.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT. Level 3: graduate.

**Definition.** A strongly pretriangulated dg category contains zero, shifts, and cones representing the corresponding dg modules. For closed degree-zero f : X → Y, a chosen cone represents the module Z ↦ Cone(Hom(Z,X) → Hom(Z,Y)).

**Problem.** In a strongly pretriangulated dg category, a strictly commuting square of closed degree-zero maps induces a canonical map between the two cones. In a triangulated category, the third map of a morphism of triangles exists but need not be unique.

**How the definition helps.** A strict square acts diagonally on the two summands of the module cone and commutes with its differential (our own). Dg Yoneda transfers this map uniquely to the chosen representing objects (our own). For a zero map X → Y, a nonzero component X\[1\] → Y gives a second filler for the identity square (our own).

**nLab:** [pretriangulated dg-category](https://ncatlab.org/nlab/show/pretriangulated+dg-category). It says: “The cone of a closed morphism f : X → Y of degree zero is an object Cone(f) ∈ A representing the functor”

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “One of the technical complications with triangulated categories is the fact the cone construction is not functorial.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Enhanced triangulated categories, Math. USSR Sbornik (1991)](https://doi.org/10.1070/SM1991v070n01ABEH001253)

### Truncating at kernels and quotients makes bounded-cohomology complexes bounded

**Remember:** Keep the kernel or the quotient where the complex meets the cutoff.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** Upper truncation at n keeps lower terms, replaces degree n by ker dⁿ, and sets higher terms to zero. Lower truncation keeps higher terms, replaces degree n by coker dⁿ⁻¹, and sets lower terms to zero (our own).

**Problem.** A complex whose cohomology is zero outside finitely many degrees is quasi-isomorphic to a bounded complex. A quasi-isomorphism is a chain map that induces isomorphisms on cohomology.

**How the definition helps.** The upper truncation maps into the original complex, preserving cohomology through its cutoff (our own). Projection onto the lower truncation preserves cohomology from its cutoff upward (our own). Taking both cutoffs beyond the nonzero cohomology therefore gives a bounded complex connected by quasi-isomorphisms (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.11.5](https://stacks.math.columbia.edu/tag/05RV). It says: “where all the arrows are quasi-isomorphisms, L• bounded below, M• bounded above, and N• a bounded complex.”

**Sources:** none listed. No primary source with a working link was found.

### Twisted complexes give every dg category a universal pretriangulated envelope

**Remember:** Twist a finite sum of shifts by a triangular differential.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories). arXiv math.CT. Level 3: graduate.

**Definition.** A finite one-sided twisted complex consists of a formal finite sum of shifts of objects of C and a strictly triangular degree-one endomorphism q. The matrix satisfies dq + q² = 0 in the shifted morphism complexes (our own).

**Problem.** Embedding C into its category of finite one-sided twisted complexes gives a pretriangulated envelope. Every dg functor to a strongly pretriangulated dg category extends along this embedding. Its homotopy category identifies with the triangulated subcategory generated by representables in the homotopy category of dg modules.

**How the definition helps.** A twisted complex is an iterated cone in one object, so the cone of a closed map of twisted complexes is again one (our own). The nLab gives another construction of the envelope: a full subcategory of dg modules generated by the representable ones. The work went into Bondal and Kapranov's proof that twisted complexes give the same envelope.

**nLab:** [pretriangulated dg-category](https://ncatlab.org/nlab/show/pretriangulated+dg-category), [twisted complex](https://ncatlab.org/nlab/show/twisted+complex). It says: “such that any functor u: A → B to a strongly pretriangulated dg-category B factors uniquely through a functor tri(A) → B.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Enhanced triangulated categories, Math. USSR Sbornik (1991)](https://doi.org/10.1070/SM1991v070n01ABEH001253)

### Algebraic de Rham cohomology as hypercohomology recovers a curve's whole H¹

**Remember:** Global forms miss H¹(𝒪); hypercohomology keeps it.

*Rules out counterexamples.* MSC 18G40 (Spectral sequences, hypercohomology), 14F40. arXiv math.AG. Level 3: graduate.

**Definition.** Algebraic de Rham cohomology of a smooth complex variety is the hypercohomology of its Zariski sheaf complex of algebraic differential forms. For this bounded-below complex, take global sections of a bounded-below injective resolution and then take cohomology (our own).

**Problem.** For a smooth connected projective complex curve of genus g, first algebraic de Rham cohomology has dimension 2g. First cohomology of its global algebraic forms has dimension g.

**How the definition helps.** Grothendieck’s de Rham comparison theorem identifies hypercohomology with singular cohomology, giving dimension 2g (our own). On a connected projective curve global functions are constant, so their differentials vanish (our own). The global-form complex thus gives only the g-dimensional space of global one-forms (our own).

**nLab:** [hypercohomology](https://ncatlab.org/nlab/show/hypercohomology). It says: “In the context of algebraic geometry, "de Rham cohomology" refers to the hypercohomology of the de Rham complex Ω•.”

**Wikipedia:** [Hodge–de Rham spectral sequence](https://en.wikipedia.org/wiki/Hodge%E2%80%93de_Rham_spectral_sequence). It says: “For smooth proper varieties over a field of characteristic 0, the spectral sequence can also be written as”

**Sources:**

- [Alexander Grothendieck, On the de Rham cohomology of algebraic varieties, Publications Mathématiques de l'IHÉS 29 (1966) 95–103](https://doi.org/10.1007/BF02684807)

### Cartan–Eilenberg resolutions make the second hypercohomology spectral sequence immediate

**Remember:** Resolve the cohomology too, and the spectral sequence follows.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 18G10. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** A Cartan–Eilenberg injective resolution of a bounded-below complex K is an augmented double complex K → I. In the resolution direction, its terms, cycles, boundaries, and cohomology from the K direction resolve the corresponding objects of K by injectives.

**Problem.** For a left exact additive functor F, a Cartan–Eilenberg resolution of K gives a second spectral sequence with E₂ᵖᑫ = RᵖF(HᑫK). It converges to Hᵖ⁺ᑫ(RF(K)).

**How the definition helps.** The short exact sequences that link boundaries, cycles and cohomology in the resolution consist of injectives, so they split. Hence F commutes with that cohomology, which becomes F of an injective resolution of the cohomology of K (our own). The next step then gives RᵖF of that cohomology at once. The work went into proving that these resolutions exist, with the horseshoe lemma (Stacks 015I).

**Wikipedia:** [Cartan–Eilenberg resolution](https://en.wikipedia.org/wiki/Cartan%E2%80%93Eilenberg_resolution). It says: “The complex Hₚ(P, dʰ) obtained by taking the homology of each row with respect to the horizontal differential forms a projective resolution Hₚ(ε): Hₚ(P, dʰ) → Hₚ(A) of degree p homology of A.”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/015J). It says: “The spectral sequences (′Eᵣ, ′dᵣ)<sub>r ≥ 0</sub> and (″Eᵣ, ″dᵣ)<sub>r ≥ 0</sub> associated to the double complex F(I<sup>•, •</sup>) satisfy the relations ′E₁<sup>p, q</sup> = R<sup>qF</sup>(Kᵖ) and ″E₂<sup>p, q</sup> = RᵖF(H<sup>q</sup>(K•))”

**Sources:**

- [H. Cartan and S. Eilenberg, Homological Algebra, Princeton University Press (1956)](https://doi.org/10.1515/9781400883844)

### Defining direct images by preimages makes the Leray spectral sequence a composite

**Remember:** Sections over Y of f∗F are sections over X, so derive twice.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55N30. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For a continuous map f : X → Y, the direct image f∗F has sections (f∗F)(V) = F(f⁻¹V). The higher direct images Rʲf∗F are its right derived functors.

**Problem.** For every abelian sheaf F on X there is a spectral sequence with second page Hⁱ(Y, Rʲf∗F) that converges to Hⁱ⁺ʲ(X, F).

**How the definition helps.** The definition gives Γ(Y, f∗F) = Γ(X, F), so global sections on X are the composite of f∗ and global sections on Y. The functor f∗ has the exact left adjoint f⁻¹, so it sends injective sheaves to injective sheaves (our own summary). The Grothendieck spectral sequence of a composite of functors then gives the Leray spectral sequence, and it carries the work. Without this identity, one would have to build a double complex of resolutions by hand (our own remark).

**Wikipedia:** [Leray spectral sequence](https://en.wikipedia.org/wiki/Leray_spectral_sequence). It says: “Composing this with the functor Γ of taking sections on ShAb(Y) is the same as taking sections on ShAb(X), by the definition of the direct image functor f∗”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01F2). It says: “Let f : X → Y be a morphism of ringed spaces. Let ℱ• be a bounded below complex of 𝒪<sub>X</sub>-modules. There is a spectral sequence”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Defining pages as homology of earlier pages makes page isomorphisms propagate

**Remember:** Each new page and its map are the homology of the preceding page and map.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A spectral sequence is a sequence of pages Eᵣ with differentials dᵣ such that dᵣ ∘ dᵣ = 0. Each page Eᵣ₊₁ is defined as the homology of (Eᵣ, dᵣ). A morphism is a family of maps fᵣ that commute with the differentials, with fᵣ₊₁ induced by fᵣ on homology.

**Problem.** A morphism of spectral sequences that is an isomorphism on some page Eᵣ is an isomorphism on every later page. This is the mapping lemma.

**How the definition helps.** Homology sends an isomorphism of complexes to an isomorphism. Since each later page map is the homology of the preceding map, induction gives the result (our own).

**nLab:** [spectral sequence](https://ncatlab.org/nlab/show/spectral+sequence). It says: “is a morphism of spectral sequences such that for some r we have that fᵣ : Eᵣ<sup>p,q</sup> → Fᵣ<sup>p,q</sup> is an isomorphism, then also fₛ is an isomorphism for all s ≥ r.”

**Wikipedia:** [Spectral sequence](https://en.wikipedia.org/wiki/Spectral_sequence). It says: “It is straightforward to check that the homology of Eᵣ with respect to this differential is Eᵣ₊₁, so this gives a spectral sequence.”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Filtering the holomorphic de Rham complex gives the Frölicher spectral sequence

**Remember:** Filter forms by degree; the pieces are single sheaves Ωⁱ.

*Makes the theorem clean to state or prove.* MSC 18G40 (Spectral sequences, hypercohomology), 14F40, 32Q15. arXiv math.AG, math.CV. Level 3: graduate.

**Definition.** On a complex manifold, the p-th Hodge filtration subcomplex of holomorphic forms equals Ωⁱ in degrees i ≥ p and zero in lower degrees.

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

**Definition.** A filtration F on a complex K is finite when each Kⁿ has integers a ≤ b with FᵃKⁿ = Kⁿ and Fᵇ⁺¹Kⁿ = 0. A finite filtration is exhaustive, with union everything, and separated, with intersection zero.

**Problem.** Let f be a map of complexes with finite filtrations that preserves the filtrations. If f is an isomorphism on some page Eᵣ of the associated spectral sequences, then f is a quasi-isomorphism.

**How the definition helps.** With finite filtrations the spectral sequence converges, so an isomorphism on Eᵣ gives one on the limit page E∞, the associated graded of the cohomology. A five lemma induction up the finite filtration of Hⁿ then finishes the proof (our own). Finiteness removes a counterexample: filter ℤ in degree 0 with every Fᵖ equal to 0, or every Fᵖ equal to ℤ. Then all pages vanish, so the map from the zero complex is an isomorphism on every page but not a quasi-isomorphism (our own).

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/012W). It says: “Assume that the filtration on each Kⁿ is finite (see Definition). Then the spectral sequence associated to (K•, F) is bounded, the filtration on each Hⁿ(K•) is finite, the spectral sequence associated to (K•, F) converges to H\*(K•)”

**Sources:**

- [C. A. Weibel, An Introduction to Homological Algebra, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9781139644136)

### Requiring injectives to go to acyclics gives the Grothendieck spectral sequence

**Remember:** Injectives to acyclics, and composite derived functors split into two steps.

*Makes the theorem clean to state or prove.* MSC 18G40 (Spectral sequences, hypercohomology), 18G10. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** An object B is G-acyclic when RⁱG(B) = 0 for all i &gt; 0. Take left exact functors F from A to B and G from B to C. The key hypothesis is that F sends injectives to G-acyclic objects.

**Problem.** Let A and B have enough injectives, with F sending injectives to G-acyclic objects. For each bounded-below complex X, the spectral sequence E₂ᵖᑫ = RᵖG(Hᑫ(RF(X))) converges to Hᵖ⁺ᑫ(R(G∘F)(X)). Its diagonals have finite support.

**How the definition helps.** Applying F to a bounded-below injective resolution of X gives a complex of G-acyclic objects (our own). Hence RG(RF(X)) computes R(G∘F)(X), and the hypercohomology spectral sequence for G gives the stated page (our own).

**Wikipedia:** [Grothendieck spectral sequence](https://en.wikipedia.org/wiki/Grothendieck_spectral_sequence). It says: “such that both 𝒜 and ℬ have enough injectives and F takes injective objects to G-acyclic objects, then for each object A of 𝒜 there is a spectral sequence”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/015N). It says: “There exists a spectral sequence (Eᵣ, dᵣ)<sub>r ≥ 0</sub> consisting of bigraded objects Eᵣ of 𝒞 with dᵣ of bidegree (r, − r + 1) and with E₂<sup>p, q</sup> = RᵖG(H<sup>q</sup>(RF(X)))”

**Sources:**

- [A. Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal 9 (1957)](https://doi.org/10.2748/tmj/1178244839)

### Starting spectral sequences from exact couples makes differentials square to zero

**Remember:** Two differentials contain two consecutive maps of an exact sequence.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.KT. Level 3: graduate.

**Definition.** An exact couple consists of maps i : A → A, j : A → E, and k : E → A. Each image equals the kernel of the next map in cyclic order i,j,k. Its page differential is j ∘ k.

**Problem.** Each differential in the spectral sequence of a filtered complex squares to zero.

**How the definition helps.** The square of E → A → E contains A → E → A in the middle, and exactness makes that composite zero (our own). The next page comes from a new exact couple, so the same argument works on every page (our own). The work goes into building the exact couple from the filtration and proving that the next couple is again exact (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.21.2](https://stacks.math.columbia.edu/tag/011R). It says: “d = g ∘ f : E → E so that d ∘ d = 0”

**Sources:** none listed. No primary source with a working link was found.

### Weak Serre subcategories let finiteness pass from a page to cohomology

**Remember:** Closed under kernels, cokernels and extensions is all a spectral sequence needs.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 18E10. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** A weak Serre subcategory is a full subcategory of an abelian category containing zero and closed under kernels and cokernels of its morphisms and extensions. Equivalently, the four outer terms of an exact five-term sequence force its middle term into the subcategory when they belong to it (our own).

**Problem.** Let K be a complex with a finite filtration in each degree. If some page Eᵣ lies in a weak Serre subcategory C, then every cohomology object Hⁿ(K) lies in C.

**How the definition helps.** Each later page is a kernel modulo an image of a map between objects of C, so it stays in C. With a finite filtration, Hⁿ(K) is built from finitely many terms of the limit page E∞ by extensions, which stay in C. A Serre subcategory must also contain all subobjects, so the weaker closure covers more cases, like ℚ-vector spaces among abelian groups (our own). The work went into convergence for finite filtrations.

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/012W). It says: “if 𝒞 ⊂ 𝒜 is a weak Serre subcategory and for some r we have Eᵣ<sup>p, q</sup> ∈ 𝒞 for all p, q ∈ 𝐙, then Hⁿ(K•) is in 𝒞.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring out projectives makes self-injective module categories triangulated

**Remember:** Quotient by projectives, and short exact sequences become triangles.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 16D50, 18G80. arXiv math.RT. Level 3: graduate.

**Definition.** For a finite-dimensional self-injective algebra, the stable module category has the same modules and takes morphisms modulo maps factoring through projectives. These projectives are also the injectives (our own).

**Problem.** For a finite-dimensional self-injective algebra A, the stable module category is triangulated with shift functor Ω⁻¹. Each short exact sequence 0 → X → E → Y → 0 gives a triangle X → E → Y → Ω⁻¹X.

**How the definition helps.** Modules form a Frobenius category because projectives and injectives coincide (our own). Happel’s theorem makes its stable category triangulated, with suspension given by the cokernel of an embedding into an injective. Pushing out such an embedding along X → E supplies the connecting map Y → Ω⁻¹X (our own).

**nLab:** [Frobenius category](https://ncatlab.org/nlab/show/Frobenius+category). It says: “The stable category of a Frobenius category is canonically a triangulated category.”

**Wikipedia:** [Stable module category](https://en.wikipedia.org/wiki/Stable_module_category). It says: “Taking Ω⁻¹ to be the translation functor and such sequences as above to be exact triangles, the stable module category becomes a triangulated category.”

**Sources:**

- [D. Happel, Triangulated Categories in the Representation Theory of Finite Dimensional Algebras, Cambridge University Press (1988)](https://doi.org/10.1017/CBO9780511629228)

### Over any ring, the syzygy is a functor on the stable category

**Remember:** Lifts differ by maps through a projective, so Ω is stably well defined.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 16D40. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** The stable module category of a ring R has the same objects as the module category. Its morphisms are module maps modulo those that factor through a projective module. The syzygy Ω(M) is the kernel of any surjection P → M from a projective module P.

**Problem.** For every ring R, sending M to Ω(M) gives a well-defined additive functor from the stable module category of R to itself.

**How the definition helps.** Fix projective presentations and lift each map between their quotients to a map between the projectives (our own). On kernels, differences of lifts factor through the source projective, so their stable classes agree (our own). This preserves sums and composites and kills maps factoring through projectives, whose syzygies are stably zero (our own). Schanuel’s lemma identifies the resulting objects up to stable isomorphism (our own).

**Wikipedia:** [Stable module category](https://en.wikipedia.org/wiki/Stable_module_category). It says: “One important property of the stable module category is it allows defining the Ω functor for general rings.”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting by perfect complexes makes singularity categories vanish exactly for regular rings

**Remember:** Singularity category zero means every module has a finite resolution.

*True by definition.* MSC 18G65 (Stable module categories), 13D09, 13H05. arXiv math.AC, math.RT. Level 3: graduate.

**Definition.** For a commutative Noetherian ring R, take the bounded derived category of finitely generated modules. A perfect complex is one isomorphic there to a bounded complex of finitely generated projectives. The singularity category Dsg(R) is the Verdier quotient by the perfect complexes, the triangulated category in which perfect complexes become zero.

**Problem.** A commutative Noetherian ring R has Dsg(R) = 0 if and only if R is regular. Here regular means that every localization of R at a prime is a regular local ring.

**How the definition helps.** The kernel of the Verdier quotient is the thick subcategory of perfect complexes (our own). If the quotient vanishes, localizing a finite projective resolution of R/𝔭 gives one for the residue field of R𝔭 (our own). Auslander–Buchsbaum–Serre then makes R𝔭 regular (our own). Conversely, over a regular Noetherian ring every bounded complex with finitely generated cohomology is perfect.

**Paper or page:** [More Algebra, tag 066Z](https://stacks.math.columbia.edu/tag/066Z). It says: “a complex of R-modules K• is perfect if and only if K• ∈ Dᵇ(R) and each Hⁱ(K•) is a finite R-module.”

**Sources:**

- [Ragnar-Olaf Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, AMS (2021)](https://doi.org/10.1090/surv/262)

### Stable Hom of syzygies computes Ext over a group algebra

**Remember:** Ext is stable Hom out of a syzygy.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 20J06. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** In the stable module category, Hom(M, N) is the group of module maps modulo those that factor through a projective module. The syzygy Ω(M) is the kernel of a surjection from a projective module onto M. Over a group algebra kG of a finite group, projective and injective modules coincide.

**Problem.** Let G be a finite group, k a field and M, N two kG-modules. Then for every n ≥ 1, Extⁿ(M, N) is isomorphic to the stable Hom from Ωⁿ(M) to N.

**How the definition helps.** The stable category is the place where Ext becomes a Hom group, so the theorem is a statement inside one category. Take 0 → Ω(M) → P → M → 0. Then Ext¹(M, N) is Hom(Ω(M), N) modulo the maps that extend to P. Since projective kG-modules are injective, these are exactly the maps through a projective (our own), and dimension shifting gives higher n.

**Wikipedia:** [Stable module category](https://en.wikipedia.org/wiki/Stable_module_category). It says: “One can show that there exist isomorphisms H̲o̲m̲(Ωⁿ(M), N) ≅ Extⁿ<sub>kG</sub>(M,N) ≅ H̲o̲m̲(M, Ω⁻ⁿ(N)) for every positive integer n.”

**Sources:** none listed. No primary source with a working link was found.

### A right adjoint to the inclusion makes a triangulated subcategory thick

**Remember:** The counit extracts the admissible part and leaves a right-orthogonal cone.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT. Level 3: graduate.

**Definition.** A full triangulated subcategory A of D is right admissible if its inclusion into D has a right adjoint. The right orthogonal of A is the class of objects that receive no nonzero maps from objects of A. Strictly full means full and closed under isomorphic objects.

**Problem.** For a strictly full triangulated subcategory A, right admissibility means every X fits into a triangle Aₓ → X → Bₓ → Aₓ\[1\]. Here Aₓ belongs to A and Bₓ to its right orthogonal. Then A is thick and equals the left orthogonal of its right orthogonal.

**How the definition helps.** The cone of the adjunction counit is right orthogonal by adjunction (our own). Conversely, applying Hom(A,−) to each such triangle shows that its first term represents maps from the subcategory (our own). These representing objects give the right adjoint, and the admissibility criterion identifies the replete image with the left orthogonal (our own). Orthogonals are closed under direct summands (our own).

**Paper or page:** [Derived, Lemma 13.40.7](https://stacks.math.columbia.edu/tag/0CQS). It says: “for every X in D there exists a distinguished triangle A → X → B → A\[1\] in D with A ∈ Ob(A) and B ∈ Ob(A⊥).”

**Sources:** none listed. No primary source with a working link was found.

### Axioms of a t-structure make truncation right adjoint to inclusion

**Remember:** Maps from low objects factor uniquely through the low part.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18A40. arXiv math.KT. Level 3: graduate.

**Definition.** A t-structure specifies full isomorphism-closed subcategories L,H with L\[1\] ⊆ L, H\[−1\] ⊆ H, and Hom(L,H) = 0. Every X admits a distinguished triangle Lₓ → X → Hₓ → Lₓ\[1\] with Lₓ in L and Hₓ in H (our own).

**Problem.** In a t-structure, taking the low part is right adjoint to the inclusion of low objects.

**How the definition helps.** For A in L, both Hom(A,Hₓ\[−1\]) and Hom(A,Hₓ) vanish (our own). Exactness therefore gives Hom(A,Lₓ) ≅ Hom(A,X) naturally in A, exhibiting the right adjoint (our own).

**nLab:** [t-structure](https://ncatlab.org/nlab/show/t-structure). It says: “For all objects X ∈ C there is a fiber sequence”

**Sources:** none listed. No primary source with a working link was found.

### Countable direct sums make every idempotent split in a triangulated category

**Remember:** A telescope of an idempotent is its image.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT. Level 3: graduate.

**Definition.** For maps fₙ : Xₙ → Xₙ₊₁, their telescope is a cone of 1 − s on ⊕ₙ Xₙ. On summand n, s applies fₙ into summand n+1 (our own).

**Problem.** If a pre-triangulated category has countable direct sums, then every idempotent in it splits, so the category is Karoubian. The same holds if it has countable products.

**How the definition helps.** The telescope splitting theorem decomposes X into the telescopes of e and 1 − e for every idempotent e (our own). Under this decomposition e projects onto its own telescope (our own). Applying the same theorem in the opposite category gives the product case (our own).

**Paper or page:** [Derived, Lemma 13.4.14](https://stacks.math.columbia.edu/tag/05QW). It says: “If D has countable coproducts, then D is Karoubian.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the derived category by localization makes homology factor through it

**Remember:** Homology already inverts every map that the derived category inverts.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 3: graduate.

**Definition.** The derived category localizes complexes at chain maps inducing isomorphisms on all homology groups. Every functor sending these maps to isomorphisms factors uniquely through the localization.

**Problem.** Each homology functor on chain complexes factors uniquely through the derived category.

**How the definition helps.** Homology sends quasi-isomorphisms to isomorphisms by their definition, so the universal property gives the factorization (our own). With the projective model, one must first prove that it is equivalent to the localization (our own). The work goes into constructing the localization and making its maps manageable (our own).

**nLab:** [derived category](https://ncatlab.org/nlab/show/derived+category). It says: “the quasi-isomorphisms of chain complexes become true isomorphisms and that D(A) is universal with respect to this property.”

**Sources:**

- [Jean-Louis Verdier, Des catégories dérivées des catégories abéliennes, Astérisque 239](https://doi.org/10.24033/ast.364)

### Defining the Serre functor by representability makes it unique and exact

**Remember:** An object fixed by a universal property allows only one choice.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** In a k-linear triangulated category with finite-dimensional Hom spaces, a Serre functor is an autoequivalence S equipped with isomorphisms Hom(Y,SX) ≅ Hom(X,Y)\*. These isomorphisms must be natural in both variables.

**Problem.** A Serre functor is unique up to unique natural isomorphism respecting its duality isomorphisms. It is exact and therefore preserves distinguished triangles.

**How the definition helps.** Yoneda identifies any two representatives by a unique isomorphism respecting the duality, and naturality in X makes these isomorphisms natural (our own). The exactness theorem for Serre functors supplies compatibility with shifts and distinguished triangles.

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “A Serre functor does not always exist, but when it does then it is unique up to graded natural isomorphism.”

**Paper or page:** [Derived Categories of Varieties, Lemma 57.3.5](https://stacks.math.columbia.edu/tag/0FY6), [Derived Categories of Varieties, Lemma 57.3.1](https://stacks.math.columbia.edu/tag/0FY4). It says: “If a Serre functor exists, then it is unique up to unique isomorphism and it is an exact functor of triangulated categories.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### Defining Verdier quotients by a universal property makes exact functors factor

**Remember:** Any exact functor that kills A passes through the quotient.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 3: graduate.

**Definition.** For a triangulated subcategory A of B, the Verdier quotient B/A localizes B at every map whose cone belongs to A (our own).

**Problem.** Every exact functor out of B that sends A to zero factors uniquely through the Verdier quotient B/A.

**How the definition helps.** An exact functor killing A sends each such cone to zero, so it sends the corresponding map to an isomorphism (our own). Localization gives the unique factorization, which is exact because quotient triangles come from distinguished triangles in B (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “universal among all triangulated functors B → D which send objects of A to objects isomorphic to 0.”

**Sources:**

- [Jean-Louis Verdier, Des catégories dérivées des catégories abéliennes, Astérisque 239](https://doi.org/10.24033/ast.364)

### Finite Hom spaces let every exceptional object split off a semiorthogonal piece

**Remember:** An exceptional object projects out with one finite sum.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** In a k-linear triangulated category, E is exceptional if k → Hom(E,E) is an isomorphism and Hom(E,E\[t\]) = 0 for every nonzero integer t. Its generated triangulated subcategory consists of finite sums of its shifts up to isomorphism (our own).

**Problem.** Let T be a triangulated category over k whose spaces ⊕ Hom(X, Y\[t\]) are finite-dimensional. Let E be exceptional, meaning that Hom(E, E) = k and Hom(E, E\[t\]) = 0 for t ≠ 0. Then the subcategory ⟨E⟩ of finite sums of shifts of E is right admissible, so T = ⟨E⊥, ⟨E⟩⟩.

**How the definition helps.** Set R(X) = ⊕ₜ Hom(E,X\[t\]) ⊗ E\[−t\], a finite sum by hypothesis (our own). Exceptionality makes evaluation R(X) → X induce an isomorphism on maps from every shift of E, hence from every finite sum (our own). This gives the right adjoint, and the evaluation cone lies in E⊥, yielding the decomposition (our own).

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “In a proper triangulated category 𝒯 over k, such as the bounded derived category of coherent sheaves on a smooth projective variety, every exceptional collection generates an admissible subcategory, and so it determines a semiorthogonal decomposition”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)
- [D. Huybrechts, Fourier–Mukai Transforms in Algebraic Geometry, Oxford University Press (2006)](https://doi.org/10.1093/acprof:oso/9780199296866.001.0001)

### K-injective complexes make products in the derived category termwise products

**Remember:** Into K-injectives, homotopy classes are derived maps, so products are termwise.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18E10. arXiv math.CT. Level 3: graduate.

**Definition.** A complex I is K-injective if every map from an acyclic complex to I is null-homotopic. Equivalently, maps into I in the homotopy category already equal maps into I in the derived category.

**Problem.** In a Grothendieck abelian category, the derived category has all products. The product of a family is the termwise product of K-injective complexes that represent its members.

**How the definition helps.** Maps into a K-injective complex are computed up to homotopy, and in the homotopy category the termwise product is already a product. Termwise products of K-injective complexes stay K-injective (Stacks Lemma 13.31.5), so the product passes to the derived category. The work goes into the existence of K-injective resolutions in Grothendieck categories (Stacks Theorem 19.12.6). Termwise products of arbitrary complexes do not work, because products of exact sequences of sheaves need not be exact (our own).

**Paper or page:** [Injectives, Lemma 19.13.4](https://stacks.math.columbia.edu/tag/07D9). It says: “Let A be a Grothendieck abelian category. Then (1) D(A) has both direct sums and products, (2) direct sums are obtained by taking termwise direct sums of any complexes, (3) products are obtained by taking termwise products of K-injective complexes.”

**Sources:** none listed. No primary source with a working link was found.

### Non-degeneracy makes the cohomology functors of a t-structure detect isomorphisms

**Remember:** Non-degenerate t-structures hide nothing from their cohomology.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT. Level 3: graduate.

**Definition.** Each t-structure has cohomology functors Hⁿ from D to its heart. The t-structure is non-degenerate if the only objects that lie in every D≤n, or in every D≥n, are zero.

**Problem.** For a non-degenerate t-structure, a map f is an isomorphism exactly when Hⁿ(f) is an isomorphism for every n. Also, D≤n then consists exactly of the objects whose Hⁱ vanish for all i &gt; n.

**How the definition helps.** The nondegenerate truncation criterion gives X in D≤n exactly when Hⁱ(X) vanishes above n, and dually for D≥n (our own). Thus an object with zero cohomology lies in every truncation range and vanishes (our own). Applying this to the cone detects isomorphisms (our own). The degenerate pair (D,0) on nonzero D has zero heart, so it misses every nonzero object (our own).

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “A t-structure is non-degenerate if the intersection of all D≤n, as well as the intersection of all D≥n, consists only of zero objects. For a non-degenerate t-structure, the collection of functors {Hⁿ}ₙ∈ℤ is conservative.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring thickness makes a subcategory exactly the kernel of its Verdier quotient

**Remember:** Quotients kill summands too, so only thick subcategories are kernels.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.CT. Level 3: graduate.

**Definition.** The Verdier quotient D/B of a triangulated category D by a triangulated subcategory B inverts every map whose cone lies in B. The subcategory B is thick if it contains every direct summand of each of its objects.

**Problem.** The objects that become zero in D/B are exactly the direct summands of objects of B. So B is the kernel of the quotient functor exactly when B is thick.

**How the definition helps.** The Verdier kernel theorem identifies the kernel with the thick closure of B, obtained by adjoining direct summands. Thus thickness makes the kernel equal to B. For bounded complexes of finite-dimensional vector spaces, even Euler characteristic defines a triangulated subcategory containing k ⊕ k but missing k (our own). The quotient kills both the sum and its summand k (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “The Verdier quotient B/A has the property that the only objects whose images in B/A are isomorphic to the zero object are the objects from the thickening of A (the smallest thick subcategory containing A).”

**Paper or page:** [Derived, Lemma 13.6.9](https://stacks.math.columbia.edu/tag/05RK). It says: “In other words it is the smallest strictly full saturated triangulated subcategory of D containing B.”

**Sources:** none listed. No primary source with a working link was found.

### Semiorthogonal decompositions split the Grothendieck group into a direct sum

**Remember:** A canonical filtration of every object splits K₀ into pieces.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18F30, 14F08. arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** A semiorthogonal decomposition of a triangulated category D consists of full triangulated subcategories A₁,…,Aₙ. Every map from Aⱼ to Aᵢ vanishes for j &gt; i. Every object admits a tower of distinguished triangles whose cones, starting from zero, belong successively to Aₙ,…,A₁.

**Problem.** A semiorthogonal decomposition D = ⟨A₁, …, Aₙ⟩ gives K₀(D) ≅ K₀(A₁) ⊕ … ⊕ K₀(Aₙ). Here K₀ is the Grothendieck group. It has a generator for each object and the relation \[Y\] = \[X\] + \[Z\] for each distinguished triangle X → Y → Z.

**How the definition helps.** The definition gives each object a filtration that is unique up to unique isomorphism, so its pieces are functors of the object. Their classes invert the map from K₀(A₁) ⊕ … ⊕ K₀(Aₙ) to K₀(D) that adds up classes (our own). Bondal and Kapranov's proof that the filtration is unique carries the work. It makes each projection to Aᵢ an exact functor, which respects the relations of K₀ (our own).

**Wikipedia:** [Semiorthogonal decomposition](https://en.wikipedia.org/wiki/Semiorthogonal_decomposition). It says: “Using that observation, a semiorthogonal decomposition 𝒯=⟨𝒜₁,…,𝒜ₙ⟩ implies a direct sum splitting of Grothendieck groups”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya 35 (1990) 519–541](https://doi.org/10.1070/IM1990v035n03ABEH000716)

### The octahedral axiom makes maps with cones in a subcategory compose

**Remember:** The cone of a composite is an extension of the two cones.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.CT. Level 3: graduate.

**Definition.** Fix a full triangulated subcategory D′ of D. A map in D belongs to S if its cone is isomorphic to an object of D′.

**Problem.** For every full triangulated subcategory D′ of a triangulated category D, the class S is a multiplicative system compatible with the triangulated structure. So the Verdier quotient D/D′, defined as S⁻¹D, exists as a triangulated category.

**How the definition helps.** The octahedral axiom makes the cone of vu an extension of the cones of u and v (our own). So this cone lies in D′ when the other two do, and S is closed under composition (our own). Wikipedia reads the axiom as a third isomorphism theorem, (Z/X)/(Y/X) ≅ Z/Y. Stacks Lemma 13.6.6 checks the remaining conditions.

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “Putting these together, the octahedral axiom asserts the "third isomorphism theorem":”

**Paper or page:** [Derived, Lemma 13.6.6](https://stacks.math.columbia.edu/tag/05RG). It says: “Then S is a multiplicative system compatible with the triangulated structure on D.”

**Sources:** none listed. No primary source with a working link was found.

### Cartesian products force a unique comonoid structure on every object

**Remember:** Deleting either output must return the input, so copying is the diagonal.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 3: graduate.

**Definition.** In a cartesian monoidal category, the tensor is the categorical product and the unit is terminal. A comonoid on X consists of a coassociative map X → X × X and a counit X → I. Applying the counit to either output must recover the identity of X under the unit isomorphism.

**Problem.** In a cartesian monoidal category every object has exactly one comonoid structure. Copying is unchanged by swapping the outputs, and every map preserves copying and deletion.

**How the definition helps.** With the product definition, the two projections determine the copy map. Deletion is the unique map to the terminal object, so the comonoid laws force both projections of copying to be the identity. The resulting diagonal satisfies the laws and commutes with every map. The work in the other description is Fox's converse, which uses compatible comonoid structures to recover the product property.

**nLab:** [Markov category](https://ncatlab.org/nlab/show/Markov+category), [Fox's theorem](https://ncatlab.org/nlab/show/Fox%27s+theorem). It says: “In a cartesian monoidal category every object is equipped with a unique commutative comonoid structure, defined in terms of the universal property of the product.”

**Sources:**

- [T. Fox, Coalgebras and cartesian categories, Communications in Algebra 4 (1976)](https://doi.org/10.1080/00927877608822127)

### Cartesian products turn the Hopf monoid antipode into group inverse

**Remember:** Cartesian copying repeats the input, so the antipode law is the inverse law.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16T05. arXiv math.CT, math.QA. Level 3: graduate.

**Definition.** A Hopf monoid is a bimonoid with an antipode. A bimonoid has a monoid structure (μ,η) and a comonoid structure (δ,ε), with δ and ε preserving multiplication and unit. Its antipode S is an endomorphism satisfying μ(1 ⊗ S)δ = ηε = μ(S ⊗ 1)δ.

**Problem.** With categorical products as tensor, Hopf monoids are exactly group objects. In sets, they are ordinary groups.

**How the definition helps.** The counit laws force both projections of δ to be identities, so δ is the diagonal (our own). Every map preserves diagonals and terminal maps. The two antipode equations now say that S gives a right and a left inverse, respectively.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “A Hopf monoid in a cartesian monoidal category V is the same as a group object in V.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Day convolution by colimit extension makes Yoneda preserve the tensor

**Remember:** Tensor the original objects before taking their presheaves of maps.

*True by definition. Confidence: medium.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** For a small monoidal category C, write yX for the presheaf Hom(−,X). Day convolution extends (yX,yY) ↦ y(X ⊗ Y) to all set-valued presheaves by preserving colimits separately in both variables. Its unit is yI for the tensor unit I.

**Problem.** The Yoneda embedding sends X to Hom(−, X). It sends the tensor of C to the Day tensor, and the unit of C to the unit of the Day tensor.

**How the definition helps.** On representables the extension gives yX ⋆ yY ≅ y(X ⊗ Y) and unit yI. These are the structure isomorphisms of the strong monoidal Yoneda embedding. The density theorem expresses every presheaf as a colimit of representables and gives the extension formula (our own).

**nLab:** [Day convolution](https://ncatlab.org/nlab/show/Day+convolution). It says: “The Yoneda embedding constitutes a strong monoidal functor”

**Sources:** none listed. No primary source with a working link was found.

### Mac Lane's coherence theorem is true for formal diagrams only

**Remember:** Coherence is about bracketings of letters, not about the objects you put in.

*Rules out counterexamples.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 3: graduate.

**Definition.** A formal monoidal diagram has parenthesized tensor words in variables and the unit as vertices. Its arrows are built by composing and tensoring identities, associators, unitors and their inverses.

**Problem.** Mac Lane's coherence theorem: in any monoidal category, every formal diagram of associators, unitors and identities commutes.

**How the definition helps.** Distinct formal bracketings stay distinct even when evaluation gives them the same object (our own). In Isbell’s skeletal category of sets, the associator on three countably infinite factors is a nonidentity endomorphism. Its endpoints have different formal bracketings, so it cannot compete with an identity path in a formal diagram. Mac Lane’s coherence theorem proves commutativity for the formal diagrams.

**nLab:** [Mac Lane's proof of the coherence theorem for monoidal categories](https://ncatlab.org/nlab/show/Mac+Lane%27s+proof+of+the+coherence+theorem+for+monoidal+categories), [coherence theorem](https://ncatlab.org/nlab/show/coherence+theorem), [coherence and strictification for monoidal categories](https://ncatlab.org/nlab/show/coherence+and+strictification+for+monoidal+categories). It says: “So, in order for coherence to work, we must change it to the statement that every "formal" diagram commutes.”

**Sources:**

- [Saunders Mac Lane, Natural associativity and commutativity, Rice University Studies 49 (1963) 28–46; reprinted in Saunders Mac Lane: Selected Papers, Springer (1979)](https://doi.org/10.1007/978-1-4615-7831-4_19)

### The augmented simplex category is the free monoidal category on a monoid

**Remember:** Concatenate finite ordinals, including the empty ordinal, and use all order-preserving maps.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18C15, 18N50. arXiv math.CT. Level 3: graduate.

**Definition.** The augmented simplex category Δₐ has finite ordinals as objects and all order-preserving maps as arrows. Ordinal sum places the first ordinal before the second and makes Δₐ strict monoidal with empty unit.

**Problem.** Monoids in a strict monoidal category B are the same as strict monoidal functors Δₐ → B. Monads in a 2-category K are the same as 2-functors into K from BΔₐ, the one-object 2-category whose morphisms form Δₐ.

**How the definition helps.** Each order-preserving map partitions its domain into consecutive fibres, one for each output (our own). A monoid evaluates each fibre by iterated multiplication, using its unit for an empty fibre. Associativity and the unit laws make this assignment functorial and determine it uniquely. Applying this description to the endomorphisms of an object in K gives the monad statement (our own).

**nLab:** [simplex category](https://ncatlab.org/nlab/show/simplex+category). It says: “thus becomes the universal category-equipped-with-a-monoid, in the sense that for any strict monoidal category”

**Sources:**

- [Saunders Mac Lane, Categories for the Working Mathematician, Graduate Texts in Mathematics 5, Springer](https://doi.org/10.1007/978-1-4757-4721-8)

### The Euler characteristic is the trace of the identity

**Remember:** Euler characteristic is dimension: create X and its dual, swap them, annihilate.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M10, 55N10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For a dualizable object X in a symmetric monoidal category, use its coevaluation I → X ⊗ X\* and evaluation X\* ⊗ X → I. Its Euler characteristic composes coevaluation, symmetry and evaluation, in that order.

**Problem.** For a bounded complex of finitely generated free modules over a commutative ring, the Euler characteristic is the alternating sum of ranks. For a compact Euclidean neighbourhood retract X, Σ∞₊X is dualizable and its Euler characteristic is the alternating sum of Betti numbers.

**How the definition helps.** Strong symmetric monoidal functors preserve the composite defining Euler characteristic. The graded symmetry gives the sign (−1)ⁿ on the contribution of degree n (our own). Dold–Puppe duality supplies dualizability for compact Euclidean neighbourhood retracts. Rational homology preserves the trace by the Künneth isomorphism, giving the alternating sum of Betti numbers (our own).

**nLab:** [Euler characteristic](https://ncatlab.org/nlab/show/Euler+characteristic). It says: “Since the categorical definition is purely in terms of the symmetric monoidal structure, Euler characteristics are preserved by any symmetric monoidal functor (as long as enough of its structure maps are isomorphisms).”

**Sources:**

- [K. Ponto, M. Shulman, Traces in symmetric monoidal categories, Expositiones Mathematicae 32 (2014), arXiv:1107.6032](https://arxiv.org/abs/1107.6032)

### The Frobenius law makes every Frobenius monoid its own dual

**Remember:** Multiplication followed by the counit pairs, and the unit followed by comultiplication copairs.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16D40. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A Frobenius monoid has a monoid structure (μ,η) and a comonoid structure (δ,ε) on one object in a monoidal category. They satisfy (1 ⊗ μ)(δ ⊗ 1) = δμ = (μ ⊗ 1)(1 ⊗ δ).

**Problem.** Every Frobenius monoid is its own dual. Over a commutative ring k, its underlying module is a direct summand of a finite free k-module.

**How the definition helps.** The pairing εµ and copairing δη satisfy both triangle identities by the Frobenius law followed by the unit and counit laws. Over k, write δη(1) = ∑ xᵢ ⊗ yᵢ. One triangle gives x = ∑ xᵢ ε(yᵢx), exhibiting the module as a retract of a finite free module (our own).

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra). It says: “A Frobenius algebra A in a monoidal category is an object dual to itself.”

**Sources:** none listed. No primary source with a working link was found.

### The braid category as a free braided category makes braid groups act

**Remember:** One object gives an action of every braid group.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories), 20F36. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** The braid category is the free braided strict monoidal category on one generator. Choosing an object of a braided strict monoidal category determines a unique strict braided monoidal functor sending the generator there.

**Problem.** In a braided monoidal category, the n-strand braid group acts on the nth tensor power of any object. For a category that is not strict, first fix a bracketing of that power.

**How the definition helps.** The free definition gives a braided monoidal functor that sends the generating object to the chosen object (our own explanation). On the maps from the nth tensor power to itself, this functor is the action. The work moves into the coherence theorem of Joyal and Street. It identifies the free category with geometric braids, so its endomorphism groups are Artin's braid groups.

**nLab:** [braided monoidal category](https://ncatlab.org/nlab/show/braided+monoidal+category). It says: “The braid category is the free braided strict monoidal category on an object.”

**Sources:**

- [André Joyal and Ross Street, Braided Tensor Categories (1993)](https://doi.org/10.1006/aima.1993.1055)

### Frobenius–Perron dimension is defined and positive in every fusion category

**Remember:** The Frobenius–Perron dimension is how fast tensor powers of X grow.

*Makes the theorem clean to state or prove.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 16T05. arXiv math.QA. Level 3: graduate.

**Definition.** For each object X of a fusion category, form the matrix of left multiplication by \[X\] in the simple-object basis of its Grothendieck ring. The Frobenius–Perron dimension FPdim(X) is its spectral radius.

**Problem.** In every fusion category, FPdim is defined for every object and is multiplicative, FPdim(X ⊗ Y) = FPdim(X)·FPdim(Y). It is at least 1 for every nonzero object.

**How the definition helps.** The fusion matrices have nonnegative integer entries, regardless of the signs of any categorical dimensions. The Frobenius–Perron theorem for fusion rings makes their spectral radii a positive dimension character on simple classes (our own). Every simple and its dual have equal dimension, and their product contains the unit, giving the lower bound (our own).

**nLab:** [Frobenius-Perron dimension](https://ncatlab.org/nlab/show/Frobenius-Perron+dimension). It says: “Even in spherical categories where there is a good notion of trace, there is no guarantee that the quantum dimension will be positive.”

**Sources:**

- [Pavel Etingof, Dmitri Nikshych, Viktor Ostrik, On fusion categories, Annals of Math. 162 (2005) 581–642, arXiv:math/0203060](https://arxiv.org/abs/math/0203060)
- [Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, Victor Ostrik, Tensor categories, Mathematical Surveys and Monographs 205, AMS (2015)](https://doi.org/10.1090/surv/205)

### Loop actions diagonalize fusion

**Remember:** An encircling loop acts by a scalar on each simple label.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** In a complex ribbon fusion category, each label U defines a natural endomorphism by encircling each strand with a U-loop. Modularity means the resulting linear map from the complex fusion algebra to natural endomorphisms of the identity is an algebra isomorphism (our own formulation).

**Problem.** In a modular complex ribbon fusion category, write S(i,j) for the trace of the double exchange and 1 for the unit label. The functions i ↦ S(i,j)/S(1,j) identify the fusion algebra with a product of copies of ℂ, one per j.

**How the definition helps.** Each family acts by a scalar on each simple object, so composing families multiplies their coordinates. Our own argument closes the strand labelled j to compute its scalar. Closing multiplies the scalar by the dimension S(1,j) and produces the linked-loop entry S(i,j). The work lies in identifying nested loops with tensor products and proving equivalence with invertibility of S.

**nLab:** [modular tensor category](https://ncatlab.org/nlab/show/modular+tensor+category). It says: “straight V-line encircled by U-loop”

**Sources:**

- [Yi-Zhi Huang, Rigidity and modularity of vertex tensor categories](https://doi.org/10.1142/S0219199708003083)

### Nondegeneracy excludes singular torus matrices

**Remember:** A transparent simple object repeats the vacuum row up to a scalar.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** Work in a complex ribbon fusion category, where objects split into finitely many types of simples and have tensor products, duals, exchanges and compatible twists. A simple object is transparent if exchanging it twice with every object gives the identity. Call the category modular when its tensor unit is its only transparent simple object up to isomorphism.

**Problem.** For simple labels i and j, let S(i,j) be the categorical trace of their double exchange. The categorical trace closes the input and output lines into loops. The matrix S is invertible exactly when the category is modular.

**How the definition helps.** A transparent simple gives a row proportional to the unit row because the trace of its double exchange is the product of dimensions (our own). The odd line in complex super vector spaces, for example, exchanges twice by the identity and duplicates the unit row up to scale. Müger’s modularity criterion proves that triviality of the transparent subcategory also suffices (our own).

**nLab:** [modular tensor category](https://ncatlab.org/nlab/show/modular+tensor+category). It says: “the matrix (sⁱʲ) = (Uᵢ-circle threading through the Uⱼ -circle) is non-degenerate.”

**Sources:**

- [Vladimir Turaev, Modular Categories and 3-Manifold Invariants](https://doi.org/10.1142/S0217979292000876)
- [Michael Müger, On the Structure of Modular Categories](https://doi.org/10.1112/s0024611503014187)

### Sewing counts torus labels

**Remember:** Cut one torus cycle and count one block per label.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** Use a modular functor that assigns finite-dimensional spaces to surfaces with boundaries marked by labels from a finite set. Cutting a circle gives a direct sum over labels, with dual labels on the two new boundary circles. Assume the space for a sphere with two holes has dimension one for dual labels and zero otherwise.

**Problem.** The space assigned to the closed torus has dimension equal to the number of labels.

**How the definition helps.** Our own argument cuts the torus into a sphere with two holes, so each summand has dimension one. The sewing axiom supplies one summand per label. A construction starting from fields must prove sewing and the two-point normalization before it can use this count.

**nLab:** [modular functor](https://ncatlab.org/nlab/show/modular+functor). It says: “E respects sewing: if Xφ is obtained from X by cutting along a circle and giving the same label φ ∈ Φ to both resulting boundaries”

**Sources:**

- [Graeme Segal, The Definition of Conformal Field Theory](https://doi.org/10.1017/CBO9780511526398.019)

### Tannaka reconstruction works because the forgetful functor is kept

**Remember:** Keep the forgetful functor, and the algebra comes back as its endomorphisms.

*Rules out counterexamples.* MSC 18M25 (Tannakian categories), 18A23, 16T05. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** For a unital associative k-algebra A over a field k, the fibre functor F sends each left A-module to its underlying vector space. Its endomorphism algebra End(F) consists of natural families of linear endomorphisms, with pointwise composition.

**Problem.** Tannaka reconstruction: A ≅ End(F), where F is the fiber functor on the category of all A-modules. Without F, the module category alone does not determine A.

**How the definition helps.** Naturality recovers each family from its value on 1 in the regular left module A (our own). Apply it to the module map A → M sending 1 to m. The family must act by left multiplication by a single element of A, and composition multiplies these elements. Forgetting F loses this distinction for k and Mₙ(k), which have equivalent module categories for n ≥ 2 (our own).

**nLab:** [Tannaka duality](https://ncatlab.org/nlab/show/Tannaka+duality). It says: “The fiber functor is necessary; for example, in the context of reconstruction of associative algebras, not remembering the underlying vector spaces results in reconstructing two different algebras with equivalent module categories (cf. Morita equivalence).”

**Sources:**

- [André Joyal, Ross Street, An introduction to Tannaka duality and quantum groups, Category Theory (Como 1990), Lecture Notes in Math. 1488 (1991) 413–492](https://doi.org/10.1007/BFb0084235)
- [Pierre Deligne, Catégories tannakiennes, The Grothendieck Festschrift vol. II, Progress in Math. 87 (1990) 111–195](https://publications.ias.edu/sites/default/files/60_categoriestanna.pdf)

### No-cloning means that vector spaces have no natural diagonal

**Remember:** Cloning one chosen basis is easy; cloning every state at once is impossible.

*Makes the theorem clean to state or prove.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 81P45. arXiv quant-ph, math.CT. Level 3: graduate.

**Definition.** A uniform cloning family on complex vector spaces consists of coassociative, cocommutative linear maps d(V) from V to V ⊗ V. They satisfy (f ⊗ f)d(V) = d(W)f for every linear f from V to W and d(ℂ)(1) = 1 ⊗ 1 (our own).

**Problem.** Complex vector spaces with their tensor product admit no uniform cloning family.

**How the definition helps.** Naturality for twice the identity forces 4d(V) = 2d(V), so every component vanishes (our own). The required component on the tensor unit is nonzero.

**nLab:** [no-cloning theorem](https://ncatlab.org/nlab/show/no-cloning+theorem). It says: “Quantum theoretically, this effect is ultimately due to the non-cartesian nature of the tensor product of vector/Hilbert spaces of quantum states (category theoretically it refers to this tensor product lacking natural diagonal morphisms)”

**Sources:**

- [S. Abramsky, No-Cloning in categorical quantum mechanics, in: Semantic Techniques for Quantum Computation, CUP (2009), arXiv:0910.2401](https://arxiv.org/abs/0910.2401)
- [W. K. Wootters, W. H. Zurek, A single quantum cannot be cloned, Nature 299 (1982) 802–803](https://doi.org/10.1038/299802a0)

### In a linear exponential comonad, every coalgebra can copy and delete

**Remember:** Ask the cofree !-coalgebras to copy and delete, and all !-coalgebras can.

*Makes the theorem clean to state or prove.* MSC 18M45 (Categorical aspects of linear logic), 03B47, 18C15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A linear exponential comonad on a symmetric monoidal category is a symmetric monoidal comonad with natural commutative comonoids on its cofree coalgebras. Copying and deletion are monoidal natural transformations and coalgebra maps, and comonad comultiplication preserves them.

**Problem.** For a linear exponential comonad !, every !-coalgebra is a comonoid, so the category of !-coalgebras is cartesian monoidal. If the linear category has finite products, the Seely isomorphism !(A × B) ≅ !A ⊗ !B follows.

**How the definition helps.** For a coalgebra a from A to !A, copy after a and apply the comonad counit to each output (our own). Deletion likewise follows a by cofree deletion. The linear exponential axioms make these natural compatible comonoids, so tensor gives the coalgebra product. The cofree right adjoint preserves products, giving the Seely isomorphism (our own).

**nLab:** [!-modality](https://ncatlab.org/nlab/show/%21-modality). It says: “It follows automatically that all !-coalgebras are comonoids, and therefore that the category of all !-coalgebras (not just the cofree ones) is cartesian monoidal.”

**Sources:**

- [N. Benton, G. Bierman, V. de Paiva, M. Hyland, Linear λ-calculus and categorical models revisited, Computer Science Logic 1992, Lecture Notes in Computer Science 702 (1993) 61–84](https://doi.org/10.1007/3-540-56992-8_6)

### Endomorphism operads make restriction of algebras ordinary composition

**Remember:** To restrict an operad algebra, compose the two operad maps.

*True by definition.* MSC 18M60 (Operads (general)). arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For an object A, its endomorphism operad End(A) has n-ary operations from n copies of A to A, with substitution as composition. A P-algebra structure on A is a morphism of operads P → End(A).

**Problem.** A map of operads Q → P turns every P-algebra into a Q-algebra on the same object. For example, a commutative algebra is an associative algebra.

**How the definition helps.** With the endomorphism operad definition, restriction is a composite of operad maps and therefore respects plugging and identity. Our own example uses the map from the associative operad to the commutative operad, which sends multiplication to multiplication. The work moves into proving that plugging multilinear operations makes an operad. One must also show that maps into it give exactly the usual compatible action maps.

**nLab:** [endomorphism operad](https://ncatlab.org/nlab/show/endomorphism+operad). It says: “The structure of an algebra over an operad on an object A ∈ C over an operad P is equivalently a morphism of operads ρ: P → End(A)”

**Sources:**

- [J. P. May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271 (1972)](https://doi.org/10.1007/BFb0067491)

### In a multicategory, the strong universal property of tensors gives associativity

**Remember:** A tensor product must absorb the pair A, B in any context.

*Makes the theorem clean to state or prove.* MSC 18M65 (Non-symmetric operads, multicategories, generalized multicategories), 18M05. arXiv math.CT. Level 3: graduate.

**Definition.** In a multicategory, a tensor of A and B represents their replacement by one input. Substitution of its map (A,B) → A ⊗ B must give a bijection on multimorphisms in every surrounding input list, for every output. A representable multicategory has such tensors for every pair and an analogous universal object for the empty list.

**Problem.** In a representable multicategory, the tensor products defined by this universal property are associative and unital up to coherent isomorphism. So representable multicategories are equivalent to monoidal categories (Hermida).

**How the definition helps.** Because the pair A, B can be replaced inside any longer list, both bracketings of three objects can be compared through the same maps. The plain universal property, for bilinear maps A, B → C alone, defines A ⊗ B but does not prove associativity. The version in context compares (A ⊗ B) ⊗ C and A ⊗ (B ⊗ C) through the ternary multimorphisms A, B, C → X. So the associator, and its coherence, come from uniqueness.

**nLab:** [tensor product](https://ncatlab.org/nlab/show/tensor+product), [representable multicategory](https://ncatlab.org/nlab/show/representable+multicategory). It says: “For this we need the stronger property that any multilinear map D₁,…,Dₘ,A,B,E₁,…,Eₙ → C factors uniquely through A,B → A⊗B via a multilinear map D₁,…,Dₘ, A⊗B ,E₁,…,Eₙ → C.”

**Sources:**

- [Claudio Hermida, Representable multicategories, Adv. Math. 151 (2000) 164–225](https://doi.org/10.1006/aima.1999.1877)
- [Claudio Hermida, From coherent structures to universal properties, J. Pure Appl. Algebra 165 (2001) 7–61, arXiv:math/0006161](https://arxiv.org/abs/math/0006161)

### A species with exactly one empty structure has a multiplicative inverse

**Remember:** One empty structure makes a species invertible, like a power series with constant one.

*Rules out counterexamples. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 05A15. arXiv math.CO, math.CT. Level 3: graduate.

**Definition.** A species is a functor from finite sets and bijections to sets. Its positive part G₊ agrees with G on nonempty sets and has no structures on the empty set. Virtual species allow formal differences.

**Problem.** A species G with exactly one structure on the empty set has a multiplicative inverse, given by an alternating geometric series in G₊.

**How the definition helps.** Exactly one empty structure gives G = 1 + G₊, so the alternating geometric series in G₊ inverts G. On an n-element set, powers above n vanish because every factor needs a nonempty part (our own). The species of nonempty sets has zero constant term, so no product with it has constant term one (our own).

**Paper or page:** [On combinatorial differential operators on species of structures](https://arxiv.org/abs/2305.05059). It says: “Let G be a species of structures such that G(0) = 1. Then the multiplicative inverse of G is given by G⁻¹ = 1/G = Σₖ≥₀ (−1)ᵏ(G₊)ᵏ”

**Sources:**

- [Arthur Gonçalves Fidalgo, On combinatorial differential operators on species of structures, arXiv:2305.05059 (2023)](https://arxiv.org/abs/2305.05059)

### Combinatorial species turn generating function identities into isomorphisms

**Remember:** A species is a kind of structure that you can move along bijections.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 05A15. arXiv math.CO, math.CT. Level 3: graduate.

**Definition.** A species is a functor from the groupoid of finite sets and bijections to finite sets. It sends each finite set to the set of all structures of some kind on it. Its exponential generating function is ∑ \|F(n)\| xⁿ/n!, where F(n) is the set of structures on an n-element set.

**Problem.** Exponential generating functions take species sums and Cauchy products to sums and products of power series. They take composition to power-series composition when the inner species has no empty structure. Thus an isomorphism of species gives an identity of generating functions.

**How the definition helps.** Counting structures on each labelled set gives the coefficients. A sum chooses a summand, a product uses an ordered split, and substitution puts inner structures on partition blocks (our own). The labelled counting formulas give addition, multiplication and substitution, respectively. Isomorphic species have equal counts in each degree.

**nLab:** [species](https://ncatlab.org/nlab/show/species). It says: “since the generating function of the Cauchy product of species is the product of their generating functions.”

**Sources:**

- [André Joyal, Une théorie combinatoire des séries formelles, Advances in Mathematics 42 (1981) 1–82](https://doi.org/10.1016/0001-8708(81)90052-9)

### Adjoint equivalence data carry no more information than being an equivalence

**Remember:** Ask the two isomorphisms to obey the triangle laws, and the choice becomes unique.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** An adjoint equivalence is a quadruple (f, g, η, ε). Here η: 1 ≅ g f and ε: f g ≅ 1 are 2-isomorphisms (invertible 2-cells). They must satisfy the zigzag (triangle) identities of an adjunction.

**Problem.** For a fixed 1-cell f in a 2-category, the category of adjoint-equivalence data (g, η, ε) on f is either empty or equivalent to the terminal category. So these data carry no more information than the property that f is an equivalence.

**How the definition helps.** The triangle identities make right adjoints unique up to a unique isomorphism compatible with unit and counit (our own). Every equivalence can be equipped with adjoint-equivalence data. Thus the category of choices, when nonempty, has exactly one arrow between each pair of objects.

**nLab:** [adjoint equivalence](https://ncatlab.org/nlab/show/adjoint+equivalence), [stuff, structure, property](https://ncatlab.org/nlab/show/stuff%2C+structure%2C+property). It says: “In other words, adjoint equivalences are the way to make the property of "being an equivalence" completely into "algebraic" structure.”

**Sources:**

- [Nick Gurski, Biequivalences in tricategories, Theory and Applications of Categories 26 no. 14 (2012) 349–384](http://www.tac.mta.ca/tac/volumes/26/14/26-14abs.html)

### In a bicategory, functions are the relations that have a right adjoint

**Remember:** A map is a morphism that has a right adjoint.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18B10, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A bicategory is like a 2-category, but composition is associative only up to coherent isomorphism. In a bicategory K, a morphism f : a → b is called a map if it has a right adjoint f\* : b → a. Map K is the sub-bicategory of K that keeps only the maps.

**Problem.** In the bicategory Rel, the maps are exactly the graphs of functions, so Map Rel ≃ Set. For C with finite limits, Map Span(C) ≃ C, where a span from x to y is a pair x ← s → y.

**How the definition helps.** Adjunction tests a relation or span without choosing a function in advance. In Rel the unit requires a value for every input and the counit forces that value to be unique (our own). The adjoint-span characterization says precisely that the left leg is invertible (our own). Such a span is isomorphic to the graph span of its right leg composed with the inverse left leg.

**nLab:** [bicategory of maps](https://ncatlab.org/nlab/show/bicategory+of+maps). It says: “In the bicategory Rel of sets and relations, a relation is a map if and only if it is the graph of a function. Consequently, Map Rel is equivalent to Set.”

**Sources:**

- [A. Carboni, R. F. C. Walters, Cartesian bicategories I, Journal of Pure and Applied Algebra 49 (1987) 11–32](https://doi.org/10.1016/0022-4049(87)90121-6)

### Combinatorial model categories can be built from a small amount of data

**Remember:** Combinatorial: small sets of generating maps, in a category where every object is small.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18C35, 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A combinatorial model category is a cofibrantly generated model category whose underlying category is locally presentable. For some regular cardinal κ, a locally presentable category has all small colimits and a set of κ-presentable objects generating it under κ-filtered colimits.

**Problem.** Let W be an accessible, accessibly embedded class of arrows satisfying two-out-of-three and retract closure in a locally presentable category. Let I be a set of arrows with I-injectives in W and cof(I) ∩ W closed under pushouts and transfinite composition. Smith’s theorem gives a combinatorial model structure with weak equivalences W and cofibrations cof(I), hence set-indexed left Bousfield localizations in left proper combinatorial categories.

**How the definition helps.** Local presentability lets the small object argument generate cof(I) from I by pushouts, transfinite compositions and retracts (our own). An I-injective map has the right lifting property against every member of I. Smith’s recognition theorem supplies the model structure under the stated closure and accessibility assumptions. Its localization theorem applies this approach to the enlarged class of weak equivalences (our own).

**nLab:** [combinatorial model category](https://ncatlab.org/nlab/show/combinatorial+model+category). It says: “Jeff Smith's theorem characterizes combinatorial model categories just in terms of weak equivalences and generating cofibrations, hence using only two third of the input data explicitly required.”

**Sources:**

- [Daniel Dugger, Combinatorial model categories have presentations, Adv. Math. 164 (2001), arXiv:math/0007068](https://arxiv.org/abs/math/0007068)
- [Tibor Beke, Sheafifiable homotopy model categories, 2000, arXiv:math/0102087](https://arxiv.org/abs/math/0102087)

### In cellular model categories, left Bousfield localizations always exist

**Remember:** Cellular means the cells are compact and the cofibrations are honest inclusions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cellular model category is cofibrantly generated by sets I of cofibrations and J of trivial cofibrations satisfying three conditions. Sources and targets of I are compact relative to I-cell complexes, and sources of J are small relative to I-cell complexes. Every cofibration is the equalizer of its cokernel pair.

**Problem.** In a left proper cellular model category C, the left Bousfield localization at any set S of maps exists (Hirschhorn). It is a model structure on C in which the maps in S become weak equivalences, in a universal way.

**How the definition helps.** Cellularity packages the size and inclusion conditions that Hirschhorn’s localization theorem uses for every set S (our own). Left properness ensures that pushout along a cofibration preserves weak equivalences. Hirschhorn’s theorem constructs the localized model structure.

**nLab:** [cellular model category](https://ncatlab.org/nlab/show/cellular+model+category). It says: “For cellular model categories C that are left proper model categories all left Bousfield localizations L<sub>S</sub> C at any set S of morphisms are guaranteed to exist.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, AMS (2002)](https://doi.org/10.1090/surv/099)

### In proper model categories, ordinary pullbacks along fibrations are homotopy pullbacks

**Remember:** Proper means weak equivalences survive pullback along fibrations, or pushout along cofibrations.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category is a category with weak equivalences, fibrations and cofibrations, used to do homotopy theory. It is right proper if the pullback of a weak equivalence along a fibration is a weak equivalence. It is left proper if the pushout of a weak equivalence along a cofibration is a weak equivalence.

**Problem.** In a right proper model category, an ordinary pullback along a fibration is a homotopy pullback, for all objects. M is right proper exactly when base change along every weak equivalence X → Y gives a Quillen equivalence M/X ⇄ M/Y (Rezk).

**How the definition helps.** Right properness preserves weak equivalences during pullback along a fibration, so the ordinary pullback computes the derived pullback (our own). For base change, the comparison at a fibrant slice object is precisely the pullback of the base weak equivalence along its structure fibration. Rezk’s criterion identifies these comparisons as the test for a Quillen equivalence (our own).

**nLab:** [proper model category](https://ncatlab.org/nlab/show/proper+model+category). It says: “In a left proper model category, ordinary pushouts along cofibrations are homotopy pushouts. Dually, in a right proper model category, ordinary pullbacks along fibrations are homotopy pullbacks.”

**Sources:**

- [Charles Rezk, Every homotopy theory of simplicial algebras admits a proper model, Topology and its Applications 119 (2002) 65–94, arXiv:math/0003065](https://arxiv.org/abs/math/0003065)

### Lifting tests make model category cofibrations stable under pushouts

**Remember:** A pushout transfers each lifting problem back to the original cofibration.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cofibration has the left lifting property against every acyclic fibration. This means every commutative square with those left and right edges admits a diagonal filler. An acyclic fibration is both a fibration and a weak equivalence.

**Problem.** In a model category, a pushout of a cofibration along any map is again a cofibration. Cofibrations are also closed under composition and retracts.

**How the definition helps.** A square for the pushout restricts to a square for the original cofibration. Its filler extends by the universal property of the pushout. Two successive lifts fill a square for a composite, and retracting a filler gives a filler for the retract (our own).

**nLab:** [weak factorization system](https://ncatlab.org/nlab/show/weak+factorization+system). It says: “ℒ is closed under forming pushouts of morphisms in 𝒞 ("cobase change").”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “Cofibrations can be characterized as the maps which have the left lifting property with respect to acyclic fibrations”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Lifting tests make two model category classes determine the third

**Remember:** Two map classes determine the lifting tests for the missing class.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** The left lifting class of S consists of arrows admitting diagonal fillers in all commutative squares with right edge in S. The right lifting class uses S on the left.

**Problem.** On a fixed category, any two of the three classes of a model structure determine the third.

**How the definition helps.** Cofibrations lift against exactly the acyclic fibrations on their right, and acyclic cofibrations lift against exactly the fibrations. Thus weak equivalences together with either class recover the other by lifting. From cofibrations and fibrations alone, lifting recovers both acyclic classes (our own). Factorization and two-out-of-three identify weak equivalences as precisely the composites of an acyclic cofibration followed by an acyclic fibration (our own).

**nLab:** [model category](https://ncatlab.org/nlab/show/model+category). It says: “Given a model category structure, any two of the three classes of special morphisms (cofibrations, fibrations, weak equivalences) determine the third”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Model structures make the homotopy category locally small

**Remember:** Replace objects by fibrant-cofibrant ones, and the maps become plain homotopy classes.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In a model category, an object X is fibrant-cofibrant if X → 1 is a fibration and 0 → X is a cofibration. Here 0 is initial and 1 is terminal.

**Problem.** If C has a model structure, every morphism of the homotopy category C\[W⁻¹\] is a homotopy class of maps between fibrant-cofibrant replacements. So C\[W⁻¹\] has a set of morphisms between any two objects when C does.

**How the definition helps.** Quillen’s homotopy category theorem identifies localized maps with homotopy classes of maps between fibrant-cofibrant replacements (our own). A quotient of the set of maps between these replacements is a set. Thus zigzags in the localization need no separate size bound.

**nLab:** [homotopy category of a model category](https://ncatlab.org/nlab/show/homotopy+category+of+a+model+category), [homotopy category](https://ncatlab.org/nlab/show/homotopy+category), [model category](https://ncatlab.org/nlab/show/model+category). It says: “A model category structure (𝒞(W,Fib,Cof)) on some category 𝒞 is a means to guarantee the local smallness and to improve the tractability of the homotopy category”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Pushout-product and unit axioms make the homotopy category closed monoidal

**Remember:** Pushout-products test tensoring cofibrations, and a cofibrant replacement must still act as unit.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18M05. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A monoidal model category is a closed monoidal category with a model structure satisfying the pushout-product and unit axioms. For cofibrations f and g, their pushout-product must be a cofibration, acyclic whenever either input is acyclic. Tensoring a cofibrant unit replacement QI → I on either side with any cofibrant object must give a weak equivalence.

**Problem.** The homotopy category of a monoidal model category is closed monoidal, with the derived tensor product ⊗ᴸ as its tensor product (Hovey).

**How the definition helps.** The pushout-product axiom gives a Quillen adjunction in two variables. Its derived adjunction supplies the derived tensor and internal homs (our own). Associativity descends on cofibrant objects, and the unit axiom gives the derived unit isomorphisms, as in Hovey’s theorem.

**nLab:** [monoidal model category](https://ncatlab.org/nlab/show/monoidal+model+category). It says: “In short, the pushout-product axiom is the model-category theoretic way to ensure that not just the tensor product, but also the internal hom as well as their joint relatin in a two-variable adjunction are homotopically meaningful.”

**Sources:**

- [Mark Hovey, Monoidal model categories, arXiv:math/9803002 (1998)](https://arxiv.org/abs/math/9803002)
- [Stefan Schwede, Brooke Shipley, Algebras and modules in monoidal model categories, Proc. London Math. Soc. 80 (2000) 491–511, arXiv:math/9801082](https://arxiv.org/abs/math/9801082)
- [Mark Hovey, Model Categories, AMS Mathematical Surveys and Monographs 63 (1999)](https://doi.org/10.1090/surv/063)

### Quillen adjunctions have equivalent left and right preservation tests

**Remember:** Adjunction moves a lifting problem from one side to the other.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A Quillen adjunction is an adjunction between model categories whose left adjoint preserves cofibrations and acyclic cofibrations. An acyclic cofibration is both a cofibration and a weak equivalence.

**Problem.** An adjunction between model categories is Quillen exactly when its right adjoint preserves fibrations and acyclic fibrations.

**How the definition helps.** Adjunction identifies squares and diagonal fillers for L(f) against g with those for f against R(g). Cofibrations test acyclic fibrations, and acyclic cofibrations test fibrations. Applying these lifting characterizations on both sides proves both implications (our own).

**nLab:** [Quillen adjunction](https://ncatlab.org/nlab/show/Quillen+adjunction). It says: “A left adjoint L between model categories preserves acyclic cofibrations precisely if its right adjoint R preserves fibrations.”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “F preserves cofibrations and acyclic cofibrations or, equivalently by the closed model axioms, such that G preserves fibrations and acyclic fibrations.”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Reedy fibrancy makes totalization homotopy invariant

**Remember:** Tot maps out of the cofibrant Δ, so it needs a fibrant target.

*True by definition. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cosimplicial simplicial set X is Reedy fibrant if Xⁿ → MⁿX is a Kan fibration for every n. Here MⁿX is the limit over proper surjections out of \[n\]. Totalization is the simplicial mapping space from the cosimplicial standard simplex Δ to X.

**Problem.** Totalization sends degreewise weak equivalences between Reedy fibrant cosimplicial simplicial sets to weak equivalences.

**How the definition helps.** Since Δ is Reedy cofibrant, its mapping-space functor is right Quillen (our own). Ken Brown’s lemma gives preservation of weak equivalences between fibrant objects, and Reedy weak equivalences are degreewise.

**nLab:** [model structure on cosimplicial simplicial sets](https://ncatlab.org/nlab/show/model+structure+on+cosimplicial+simplicial+sets). It says: “Since Δ is cofibrant in the Reedy model structure it follows that totalization of Reedy-fibrant cosimplicial simplicial sets preserves weak equivalences.”

**Sources:**

- [A. K. Bousfield, D. M. Kan, Homotopy Limits, Completions and Localizations, Lecture Notes in Mathematics 304, Springer (1972)](https://doi.org/10.1007/978-3-540-38117-4)

### Right properness is exactly what makes base change a Quillen equivalence

**Remember:** Right proper: pulling back along fibrations keeps weak equivalences weak equivalences.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category is right proper if the pullback of a weak equivalence along a fibration is again a weak equivalence.

**Problem.** A model category 𝒞 is right proper exactly when, for every weak equivalence φ : S → T, base change between 𝒞/S and 𝒞/T is a Quillen equivalence (Rezk). Base change composes with φ in one direction and pulls back along φ in the other.

**How the definition helps.** Right properness asks for exactly the condition that base change needs, for all weak equivalences at once. Base change along φ is a Quillen equivalence exactly when every pullback of φ along a fibration is a weak equivalence. Without right properness, the slices over weakly equivalent objects can be homotopically different, unless S and T are fibrant or φ is an acyclic fibration.

**nLab:** [slice model structure](https://ncatlab.org/nlab/show/slice+model+structure). It says: “Notice that the property (∗) of φ is implied as soon as either: 𝒞 is right proper, or φ is an acyclic fibration, or both S and T are fibrant objects”

**Sources:**

- [Charles Rezk, Every homotopy theory of simplicial algebras admits a proper model, Topology and its Applications 119 (2002) 65–94, arXiv:math/0003065](https://arxiv.org/abs/math/0003065)

### The projective model structure makes colimits left Quillen

**Remember:** Constant diagrams pass the projective fibration test at every entry.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35, 18A30. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** For diagrams of small shape D in a model category, the projective model structure tests fibrations and weak equivalences at every object of D. Assume this model structure exists.

**Problem.** The colimit functor for the projective model structure is left Quillen, meaning it preserves cofibrations and cofibrations that are weak equivalences.

**How the definition helps.** The constant diagram functor preserves fibrations and acyclic fibrations because each component is the original map (our own). It is right adjoint to colimit, so colimit is left Quillen.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “When these model structures exist (as they do when C is combinatorial), limit and colimit constitute then two sSet-enriched Quillen adjunctions”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “in one, the so-called projective model structure, fibrations and weak equivalences are those maps of functors which are fibrations and weak equivalences when evaluated at each object of C.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Two-out-of-six makes weak equivalences behave like isomorphisms

**Remember:** If both overlapping pairs are weak equivalences, so is everything in the chain.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A class W satisfies two-out-of-six if, for every composable triple u,v,w, membership of vu and wv in W implies membership of u,v,w and wvu.

**Problem.** If W contains the identities and satisfies 2-out-of-6, then W contains all isomorphisms and satisfies 2-out-of-3. If W also admits a calculus of fractions, 2-out-of-6 is equivalent to saturation: every map that becomes invertible in C\[W⁻¹\] is in W (Kashiwara–Schapira).

**How the definition helps.** Apply two-out-of-six to an isomorphism, its inverse and the isomorphism again to obtain membership of both arrows (our own). Inserting an identity before, between or after two composable arrows gives the three two-out-of-three implications. Kashiwara and Schapira’s calculus-of-fractions criterion gives the equivalence with saturation.

**nLab:** [two-out-of-six property](https://ncatlab.org/nlab/show/two-out-of-six+property), [category with weak equivalences](https://ncatlab.org/nlab/show/category+with+weak+equivalences). It says: “Suppose W admits a calculus of fractions. Then W satisfies two-out-of-six if and only if it is saturated.”

**Sources:**

- [William G. Dwyer, Philip S. Hirschhorn, Daniel M. Kan, Jeffrey H. Smith, Homotopy Limit Functors on Model Categories and Homotopical Categories, AMS Mathematical Surveys and Monographs 113, 2004](https://doi.org/10.1090/surv/113)
- [Masaki Kashiwara, Pierre Schapira, Categories and Sheaves, Springer, 2006 (7.1.20)](https://doi.org/10.1007/3-540-27950-4)

### Whitehead's theorem is a formal lemma about model categories

**Remember:** Between fibrant-cofibrant objects, a weak equivalence is a real homotopy equivalence.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55P10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In a model category, X is fibrant if its map to the terminal object is a fibration. It is cofibrant if the map from the initial object to X is a cofibration.

**Problem.** Whitehead's theorem says that each weak homotopy equivalence between CW complexes is a homotopy equivalence.

**How the definition helps.** Quillen’s model-category Whitehead theorem gives a homotopy inverse to any weak equivalence between fibrant-cofibrant objects. In the classical model structure on spaces, all spaces are fibrant and CW complexes are cofibrant (our own). The standard cylinder on a CW complex gives ordinary homotopies, so the inverse is a topological homotopy inverse (our own).

**nLab:** [Introduction to Homotopy Theory](https://ncatlab.org/nlab/show/Introduction+to+Homotopy+Theory), [Whitehead theorem](https://ncatlab.org/nlab/show/Whitehead+theorem), [model category](https://ncatlab.org/nlab/show/model+category). It says: “Let 𝒞 be a model category. A weak equivalence between two objects which are both fibrant and cofibrant is a homotopy equivalence.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the AMS 55 (1949) 213–245](https://doi.org/10.1090/s0002-9904-1949-09175-9)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Categories of fibrant objects are enough to build a homotopy category

**Remember:** Keep only fibrations and path objects, and you can still form the homotopy category.

*Makes the theorem clean to state or prove.* MSC 18N45 (Categories of fibrations, relations to \\(K\\)-theory, relations to type theory), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A Brown category of fibrant objects has finite products, fibrations and weak equivalences containing all isomorphisms, with two-out-of-three for weak equivalences. Fibrations compose, include maps to the terminal object, and admit pullbacks preserving fibrations and acyclic fibrations. Every diagonal factors as a weak equivalence followed by a fibration.

**Problem.** In a category of fibrant objects, every morphism of the homotopy category is a span of length one whose backward leg is an acyclic fibration (Brown). Locally Kan simplicial sheaves form such a category, and its hom-sets compute generalized sheaf cohomology.

**How the definition helps.** Brown’s path-object factorization and pullback axioms reduce localization zigzags to spans with an acyclic fibration pointing backward (our own). His theorem applies to locally Kan simplicial sheaves with local fibrations and local weak equivalences. The resulting homotopy classes give the generalized cohomology in the statement (our own).

**nLab:** [category of fibrant objects](https://ncatlab.org/nlab/show/category+of+fibrant+objects). It says: “In particular, it is sufficient for giving a convenient construction of the homotopy category in terms of spans of length one.”

**Sources:**

- [Kenneth S. Brown, Abstract homotopy theory and generalized sheaf cohomology, Trans. Amer. Math. Soc. 186 (1973) 419–458](https://doi.org/10.1090/s0002-9947-1973-0341469-9)

### For isofibrations, strict pullbacks of categories are homotopy pullbacks

**Remember:** An isofibration lets you lift every isomorphism in the base exactly.

*Rules out counterexamples.* MSC 18N45 (Categories of fibrations, relations to \\(K\\)-theory, relations to type theory), 18N40, 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A functor p: E → B is an isofibration if it lifts isomorphisms exactly. That is, for every object e of E and every isomorphism φ: p(e) ≅ b in B, there is an isomorphism ψ: e ≅ e' in E with p(ψ) = φ.

**Problem.** A strict pullback of two functors into B computes their pseudopullback if either leg is an isofibration. Such pullbacks are invariant up to equivalence under equivalences of diagrams satisfying this hypothesis.

**How the definition helps.** Lift the comparison isomorphism of a pseudopullback object to obtain an isomorphic object with equal images. Between strict objects the pseudopullback condition on morphisms is exactly the strict one (our own). Two point inclusions at distinct isomorphic objects of a groupoid have empty strict pullback but nonempty pseudopullback (our own).

**nLab:** [isofibration](https://ncatlab.org/nlab/show/isofibration). It says: “For example, any strict pullback of an isofibration is also a weak pullback.”

**Sources:**

- [Ronald Brown, Fibrations of groupoids, Journal of Algebra 15 (1970) 103–132](https://doi.org/10.1016/0021-8693(70)90089-X)

### Augmented simplicial sets make the join preserve colimits in each variable

**Remember:** Allow the empty simplex, and the join becomes a tensor product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** An augmented simplicial set is a presheaf on the category of finite ordinals, including the empty ordinal, and order-preserving maps. The join is Day convolution for ordinal sum on that category.

**Problem.** The join of augmented simplicial sets preserves colimits in each variable separately. So the join of a horn with a simplex is the union of the joins of the faces of the horn with that simplex.

**How the definition helps.** Day convolution on set-valued presheaves preserves colimits separately because its construction uses products with fixed sets and colimits (our own). A horn is a union of faces, and the simplex-pair formula for the join preserves their inclusions. Joining this union with a simplex therefore gives the union of the joined faces (our own).

**nLab:** [join of simplicial sets](https://ncatlab.org/nlab/show/join+of+simplicial+sets). It says: “Recall that the join of augmented simplicial sets S ⋆ T is a cocontinuous functor in each of its separate arguments S and T (this is true generally of Day convolution products).”

**Sources:**

- [P. J. Ehlers, T. Porter, Joins for (Augmented) Simplicial Sets, Journal of Pure and Applied Algebra 145 (2000) 37–44, arXiv:math/9904039](https://arxiv.org/abs/math/9904039)

### Fat geometric realization is homotopy invariant because it leaves out degeneracies

**Remember:** Fat realization glues simplices along faces and keeps the degenerate simplices.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** The fat geometric realization ‖X•‖ of a simplicial space X• glues the pieces Xₙ × Δⁿ along the face maps only. Formally, it is the coend of Xₙ × Δⁿ over the category of finite ordinals and injective maps. It does not divide out by the degeneracy maps.

**Problem.** Fat realization takes degreewise homotopy equivalences to homotopy equivalences. If every level has CW homotopy type, so does the fat realization. Both conclusions can fail for ordinary realization.

**How the definition helps.** Fat realization attaches Xₙ × Δⁿ along Xₙ × ∂Δⁿ, a cofibration in every degree (our own). Segal’s skeletal gluing theorem gives homotopy invariance and preservation of CW homotopy type. Ordinary realization also identifies degeneracies, whose inclusions can fail to be cofibrations.

**nLab:** [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “If f : X• → Y• is degreewise a homotopy equivalence, then also ‖f‖ is a homotopy equivalence.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Minimal Kan fibrations are fibre bundles

**Remember:** In a minimal fibration, homotopic simplices with the same boundary are equal.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10, 55R05. arXiv math.AT. Level 3: graduate.

**Definition.** A Kan fibration p is minimal if any two n-simplices over the same base simplex coincide whenever they are fibrewise homotopic relative to their boundary. This condition applies in every degree.

**Problem.** A minimal Kan fibration over a connected base is locally trivial over each base simplex and hence is a simplicial fibre bundle. Geometric realization takes every Kan fibration to a Serre fibration.

**How the definition helps.** Minimality turns fibrewise homotopy equivalences between minimal fibrations into isomorphisms, giving simplexwise triviality (our own). For a general Kan fibration, the minimal-fibration factorization gives a trivial fibration followed by a minimal fibration. Quillen’s realization theorem uses this factorization and the realization results for both factors (our own).

**nLab:** [minimal Kan fibration](https://ncatlab.org/nlab/show/minimal+Kan+fibration). It says: “Minimal Kan fibrations over connected bases happen to be fiber bundles, locally trivial over each simplex”

**Sources:**

- [P. Gabriel, M. Zisman, Calculus of Fractions and Homotopy Theory, Ergebnisse der Mathematik 35, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)
- [P. G. Goerss, J. F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Realization of proper simplicial spaces respects levelwise weak equivalences

**Remember:** In a proper simplicial space, degenerate simplices include as cofibrations.

*True by definition.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** A simplicial space X is proper if the inclusion of the union of all degenerate n-simplices into Xₙ is a closed cofibration for every n.

**Problem.** An objectwise weak homotopy equivalence X• → Y• between proper simplicial spaces gives a weak homotopy equivalence \|X•\| → \|Y•\| of geometric realizations.

**How the definition helps.** Properness makes the skeletal attachment maps cofibrations, so the gluing lemma preserves degreewise weak equivalences at each stage (our own). Passage to the sequential union of these cofibrations preserves the weak equivalence.

**nLab:** [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “If X• → Y• is an objectwise weak homotopy equivalence between proper simplicial spaces, then the induced map \|X•\| → \|Y•\| is a weak homotopy equivalence.”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer, 1972](https://doi.org/10.1007/BFb0067491)
- [J. Peter May, E∞ spaces, group completions, and permutative categories, in New Developments in Topology, London Math. Soc. Lecture Note Series 11, 1974, 61–94](https://doi.org/10.1017/CBO9780511662607.008)

### The 0-simplex has no horns, so the empty groupoid is Kan

**Remember:** Every horn contains a vertex, so none maps to the empty simplicial set.

*Rules out counterexamples.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** The k-th horn Λₖ\[n\] of the n-simplex Δ\[n\] is the union of all faces of Δ\[n\] except the k-th one. It is defined only for n ≥ 1, so the 0-simplex has no horn at all.

**Problem.** The empty simplicial set, the nerve of the empty groupoid, is a Kan complex. Every map out of the empty simplicial set is a Kan fibration.

**How the definition helps.** Every horn contains a vertex, so no lifting square for a map with empty domain can have a horn as its upper left corner. Consequently every required lifting condition holds, including for the map to a point (our own). Allowing an empty horn in degree zero would require a vertex in the empty simplicial set.

**nLab:** [horn](https://ncatlab.org/nlab/show/horn). It says: “In particular one must not declare a would-be horn of the 0-simplex to be itself the empty simplicial set, as that would make the nerve of the empty groupoid fail to be a Kan complex”

**Sources:** none listed. No primary source with a working link was found.

### Transferring the model structure makes Sing preserve weak equivalences by definition

**Remember:** Call a map of spaces a weak equivalence when Sing makes it one.

*True by definition.* MSC 18N50 (Simplicial sets, simplicial objects), 18N40, 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** The singular simplicial set Sing(X) of a space X has the continuous maps from the standard n-simplex into X as its n-simplices. A map of topological spaces f : X → Y is a weak equivalence when the map Sing(X) → Sing(Y) is a weak equivalence of simplicial sets. This is the model structure on spaces transferred from simplicial sets along the adjunction \|−\| ⊣ Sing, where \|−\| is geometric realization.

**Problem.** The singular complex functor Sing : Top → sSet preserves weak equivalences.

**How the definition helps.** The transferred definition tests f by applying Sing, which is exactly the assertion. Agreement with the classical weak homotopy equivalences uses the natural weak equivalence from the realization of Sing(X) to X and two-out-of-three (our own).

**nLab:** [singular simplicial complex](https://ncatlab.org/nlab/show/singular+simplicial+complex). It says: “The classical model structure on topological spaces can be defined to be transferred from simplicial sets, in which case the singular complex preserves weak equivalences by definition.”

**Sources:**

- [Daniel G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Testing local equivalences on local objects makes them invertible there

**Remember:** Testing against both endpoints supplies both inverse identities.

*True by definition.* MSC 18N55 (Localizations (e.g., simplicial localization, Bousfield localization)), 55P60. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** Fix a set S of maps in an ∞-category. An object is S-local if each map in S induces an equivalence of spaces of maps into it. A map is an S-equivalence if it induces an equivalence of spaces of maps into every S-local object.

**Problem.** An S-equivalence between S-local objects is an equivalence.

**How the definition helps.** Both endpoints are local, so testing into each gives one inverse identity (our own). For f from X to Y, testing into X supplies a map g with gf homotopic to the identity. Testing into Y makes precomposition with f injective on components, so fg is homotopic to the identity too.

**nLab:** [local object](https://ncatlab.org/nlab/show/local+object). It says: “A morphism f : x → y in C is an S-local morphism or S-equivalence if for every S-local object c the induced morphism”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Cartesian fibrations are families of ∞-categories that vary functorially

**Remember:** Enough Cartesian lifts turn a correspondence into a functor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18D30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A Cartesian fibration of ∞-categories is an inner fibration p admitting a Cartesian lift of each base arrow to every object over its target. An edge x → y is Cartesian when Map(z,x) → Map(z,y) ×₍Map(pz,py)₎ Map(pz,px) is an equivalence for every z. The product here is a homotopy pullback.

**Problem.** In a Cartesian fibration over D, each morphism f : d₁ → d₂ gives a functor from the fiber over d₂ to the fiber over d₁, unique up to contractible choice. By the straightening theorem, Cartesian fibrations over D are equivalent to functors Dᵒᵖ → (∞,1)Cat.

**How the definition helps.** Cartesian lifts give each morphism of the base a functor between fibers, so the family becomes functorial. A bare inner fibration is functorial only up to correspondences. The straightening theorem, the (∞,1)-Grothendieck construction, is hard; the definition only makes it possible to state.

**nLab:** [Cartesian fibration](https://ncatlab.org/nlab/show/Cartesian+fibration). It says: “Then the condition of p being a cartesian fibration ensures that the family is actually functorial.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### Coherent idempotents in ∞-categories split exactly when they have a limit

**Remember:** In an ∞-category, being idempotent is structure, not a property.

*Rules out counterexamples.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An idempotent in an ∞-category C is a map Idem → C, where Idem is the nerve of the free category on one idempotent. So it carries all higher coherence data, not only an equivalence e ∘ e ≃ e. It is effective if it extends to the free retraction diagram Idem⁺.

**Problem.** A coherent idempotent Idem → C in an ∞-category is effective (splits) exactly when it has a limit, or equivalently a colimit (Lurie).

**How the definition helps.** Because a coherent idempotent carries all its higher data, a limit is enough to split it. An idempotent only in the homotopy category can fail to lift to a coherent one. Lurie's example (Higher Algebra, Warning 1.2.4.8) uses an injective, non-surjective group map λ : G → G with λ conjugate to λ². Then Bλ is idempotent up to homotopy in ∞Gpd, but it is not a coherent idempotent.

**nLab:** [idempotent complete (infinity,1)-category](https://ncatlab.org/nlab/show/idempotent+complete+%28infinity%2C1%29-category). It says: “In particular, being idempotent is no longer a property of a morphism, but structure on it.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, Annals of Mathematics Studies 170, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)
- [Jacob Lurie, Higher Algebra, Warning 1.2.4.8 (the counterexample with Bλ)](https://www.math.ias.edu/~lurie/papers/HA.pdf)

### Completeness makes complete Segal spaces see equivalences correctly

**Remember:** Complete means the space of objects already knows every equivalence between objects.

*Rules out counterexamples.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A Segal space is a Reedy-fibrant simplicial space whose Segal maps to strings of n composable edges are weak equivalences for every n ≥ 2. It is complete if the identity degeneracy from X₀ to the subspace of equivalences in X₁ is a weak equivalence.

**Problem.** A functor of ordinary categories is an equivalence exactly when the induced map of Rezk's classifying diagrams, which are complete Segal spaces, is a levelwise weak equivalence. For plain nerves, which are complete only for gaunt categories, such a map detects only isomorphism of categories.

**How the definition helps.** Rezk’s diagram in degree n is the nerve of the groupoid of n-arrow strings and their natural isomorphisms (our own). An equivalence induces equivalences of these groupoids, and degrees zero and one detect essential surjectivity and full faithfulness. The walking isomorphism maps equivalently to the terminal category, but their discrete nerves differ already in degree zero (our own).

**nLab:** [complete Segal space](https://ncatlab.org/nlab/show/complete+Segal+space), [Segal space](https://ncatlab.org/nlab/show/Segal+space). It says: “this says that if a morphism is an equivalence under the explicit composition operation then it is already a morphism in X₀”

**Sources:**

- [Charles Rezk, A model for the homotopy theory of homotopy theory, Trans. Amer. Math. Soc. 353 (2001) 973–1007, arXiv:math/9811037](https://arxiv.org/abs/math/9811037)

### In an ∞-topos every colimit is van Kampen

**Remember:** In an ∞-topos, a family over a colimit equals compatible families over the pieces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A colimit is van Kampen if it is stable under pullback and satisfies descent. Equivalently, the slice construction x ↦ C/x sends it to a limit of categories. In words, an object over the colimit is the same as a compatible system of objects over its pieces.

**Problem.** A presentable (∞,1)-category is an ∞-topos exactly when all its colimits are van Kampen. So, with the circle as the coequalizer of 1 ⇉ 1, descent in ∞-groupoids gives ΩS¹ ≃ ℤ.

**How the definition helps.** Van Kampen descent identifies spaces over the circle with a space over its point equipped with a self-equivalence (our own). Translation on ℤ gives such a family with contractible total space, the line covering the circle. Its fibre is therefore ΩS¹ ≃ ℤ (our own). Lurie’s ∞-topos characterization supplies descent for all small colimits.

**nLab:** [van Kampen colimit](https://ncatlab.org/nlab/show/van+Kampen+colimit), [(infinity,1)-topos](https://ncatlab.org/nlab/show/%28infinity%2C1%29-topos). It says: “gives a concise proof that the loop space of the circle is equivalent to the integers”

**Sources:**

- [Pawel Sobocinski, Tobias Heindel, Being Van Kampen is a universal property, Log. Methods Comput. Sci. 7 (2011), arXiv:1101.4594](https://arxiv.org/abs/1101.4594)
- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### In hypercomplete ∞-toposes the Whitehead theorem holds by definition

**Remember:** Hypercomplete means homotopy sheaves see everything.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An object Z is hypercomplete if precomposition with every ∞-connected map induces an equivalence of mapping spaces into Z. An ∞-topos is hypercomplete if every object is hypercomplete. An ∞-connected map induces isomorphisms on all homotopy sheaves, including components and all local basepoints.

**Problem.** In a hypercomplete ∞-topos, a map inducing isomorphisms on all homotopy sheaves is an equivalence. This Whitehead theorem holds for spaces, but fails in some ∞-toposes.

**How the definition helps.** If every object is local for ∞-connected maps, Yoneda makes each such map an equivalence (our own). Spaces are hypercomplete by the classical weak homotopy equivalence criterion. Recognizing hypercomplete ∞-toposes is the separate mathematical work.

**nLab:** [hypercomplete (infinity,1)-topos](https://ncatlab.org/nlab/show/hypercomplete+%28infinity%2C1%29-topos). It says: “if the Whitehead theorem is valid in it. Equivalently: if all its object are hypercomplete objects.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### Marked simplicial sets make Cartesian fibrations exactly the fibrant objects

**Remember:** Mark the edges that should be Cartesian, and the model structure can see them.

*Makes the theorem clean to state or prove.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18N45, 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A marked simplicial set is a simplicial set with a chosen set of edges, called the marked edges. The marked edges must include all degenerate edges. The marking records which edges are meant to be Cartesian morphisms.

**Problem.** In Lurie's model structure on marked simplicial sets over S, with all edges of S marked, the fibrant objects are exactly the Cartesian fibrations X → S with their Cartesian edges marked. Straightening is then a Quillen equivalence with presheaves.

**How the definition helps.** The marking lets a lifting property see which edges are Cartesian, so the fibrant objects are exactly the Cartesian fibrations. A map has the lifting property against marked anodyne maps exactly when it is an inner fibration whose marked edges are the Cartesian lifts of marked edges. Every object is cofibrant. The existence of the model structure and the straightening theorem are substantial results in Higher Topos Theory.

**nLab:** [model structure for Cartesian fibrations](https://ncatlab.org/nlab/show/model+structure+for+Cartesian+fibrations). It says: “Every object is cofibrant and the fibrant objects of SSet⁺/S are precisely the Cartesian fibrations over S.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, 2009, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### Stable ∞-categories give triangulated categories with functorial cones

**Remember:** In a stable ∞-category, fibre sequences and cofibre sequences are the same thing.

*Makes the theorem clean to state or prove.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18G80. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A stable ∞-category has a zero object, all finite limits and colimits, and exactly the same pullback squares as pushout squares.

**Problem.** The homotopy category of a stable ∞-category is triangulated, and the octahedral axiom holds (Lurie). In the stable ∞-category itself, the cone of a morphism is a pushout, so it is functorial.

**How the definition helps.** Pushing out X → Y along X → 0 defines its cofiber functorially (our own). Pasting pushouts for two composable arrows gives the cofiber diagram underlying the octahedron. Lurie’s triangulation theorem takes these coherent diagrams to distinguished triangles in the homotopy category.

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category), [triangulated category](https://ncatlab.org/nlab/show/triangulated+category), [enhanced triangulated category](https://ncatlab.org/nlab/show/enhanced+triangulated+category). It says: “The complexity and bad behavior of triangulated categories comes from them being the decategorification of a structure that is natural in higher category theory.”

**Sources:**

- [Jacob Lurie, Stable Infinity Categories, arXiv:math/0608228 (2006)](https://arxiv.org/abs/math/0608228)
- [Fernando Muro, Stefan Schwede, Neil Strickland, Triangulated categories without models, Inventiones Mathematicae 170 (2007) 231–241; arXiv:0704.1378](https://arxiv.org/abs/0704.1378)

### The enriched homotopy category, not the ordinary one, detects adjoint ∞-functors

**Remember:** To test for an adjoint, remember the mapping spaces, not only their components.

*Rules out counterexamples. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18D20, 18A40. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An (∞,1)-category has a space of maps between any two objects. Its Ho-enriched homotopy category keeps, for each pair of objects, this mapping space as an object of Ho, the homotopy category of spaces. The ordinary homotopy category keeps only the set of path components of the mapping space.

**Problem.** If an ∞-functor induces a functor of Ho-enriched homotopy categories that has a right adjoint, then the ∞-functor has a right adjoint (Lurie, HTT Prop. 5.2.2.12). The same claim with ordinary homotopy categories is false.

**How the definition helps.** The enriched homotopy category keeps enough of the mapping spaces to exclude adjunctions that do not lift. In the ordinary category Ho, π₀ is both left and right adjoint to the inclusion Set ⊆ Ho. But π₀ : ∞Gpd → Set has no left adjoint, so that adjunction does not lift. In our own reading, the enriched version excludes this example, since the mapping space from a discrete set S to X is Xˢ, which is not discrete.

**nLab:** [adjoint (infinity,1)-functor](https://ncatlab.org/nlab/show/adjoint+%28infinity%2C1%29-functor). It says: “For a counterexample, when Ho is considered as an ordinary category, π₀ : Ho → Set is both left and right adjoint to the inclusion Set ⊆ Ho. However, π₀ : ∞Gpd → Set does not have a left adjoint.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### The homotopy coherent nerve turns homotopy coherent diagrams into simplicial maps

**Remember:** A simplex of the coherent nerve is a diagram that commutes up to coherent homotopy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18D20, 18N50. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** For a simplicial category C, an n-simplex of its coherent nerve is a simplicial functor S\[Δⁿ\] → C. The objects of S\[Δⁿ\] are 0,…,n, with maps i → j given by the nerve of the inclusion poset of endpoint-containing subsets of \[i,j\]. For i &gt; j the mapping space is empty, and composition uses union.

**Problem.** Cordier–Porter theorem: if every hom-object of C is a Kan complex, then the homotopy coherent nerve N(C) is a quasi-category. Here a homotopy coherent diagram of shape A in C is a simplicial map from the nerve of A to N(C).

**How the definition helps.** The coherent nerve records coherent diagrams of shape A as maps from the ordinary nerve of A. The Cordier–Porter theorem uses the Kan fillers in each mapping space to fill the inner horns of this nerve (our own).

**nLab:** [homotopy coherent nerve](https://ncatlab.org/nlab/show/homotopy+coherent+nerve). It says: “This allowed a good definition of homotopy coherent diagrams in arbitrary simplicially enriched categories to be given.”

**Sources:**

- [Jean-Marc Cordier, Tim Porter, Vogt's theorem on categories of homotopy coherent diagrams, Math. Proc. Cambridge Philos. Soc. 100 (1986) 65–90](https://doi.org/10.1017/S0305004100065877)

### Categories without equality of objects respect isomorphism automatically

**Remember:** If you cannot ask whether two objects are equal, you cannot tell isomorphic ones apart.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A05 (Definitions and generalizations in theory of categories), 18A15. arXiv math.CT, math.LO. Level 4: research.

**Definition.** In the FOLDS signature for categories, objects form a sort with no object-equality predicate. Arrows have dependent sorts indexed by their source and target, and parallel arrows admit equality.

**Problem.** In Makkai's first-order logic with dependent sorts (FOLDS), which has no equality of objects, every sentence is invariant under the matching notion of equivalence. So no statable property of objects can tell isomorphic objects apart.

**How the definition helps.** The signature permits transport along object isomorphisms in every arrow sort (our own). Makkai’s invariance theorem extends this transport to formulas by induction, including quantification over dependent sorts. Thus equivalent models satisfy the same sentences, and isomorphic objects satisfy the same definable properties.

**nLab:** [preset](https://ncatlab.org/nlab/show/preset), [principle of equivalence](https://ncatlab.org/nlab/show/principle+of+equivalence), [strict category](https://ncatlab.org/nlab/show/strict+category). It says: “To make the principle of equivalence hold automatically, a category should have only a preset of objects and only its hom-sets as sets.”

**Sources:**

- [Michael Makkai, First Order Logic with Dependent Sorts, with Applications to Category Theory (1995), preprint](https://www.math.mcgill.ca/makkai/folds/foldsinpdf/FOLDS.pdf)

### In homotopy type theory, skeletal and univalent together mean gaunt

**Remember:** Skeletal is univalence with the isomorphisms truncated to a mere proposition.

*True by definition. Confidence: medium.* MSC 18A05 (Definitions and generalizations in theory of categories), 03B38. arXiv math.CT, math.LO. Level 4: research.

**Definition.** In homotopy type theory, a precategory is a category whose hom-types are sets, with no condition on the type of objects. A precategory C is skeletal if, for all objects a and b, the canonical map (a = b) → ‖a ≅ b‖ is an equivalence. Here ‖–‖ is propositional truncation: it turns a type into a proposition that says only whether the type has an element.

**Problem.** In homotopy type theory, a skeletal precategory is a strict category, so being skeletal is a property. If it is also univalent, it is gaunt: its only isomorphisms are identities.

**How the definition helps.** The definition has the same form as univalence, with the isomorphisms truncated, so the two conditions combine directly. The first guess, a map ‖a ≅ b‖ → (a = b), is structure, not a property, when objects do not form a set. With the chosen definition, a = b is a proposition, so the objects form a set. Univalence then makes a ≅ b equivalent to its own truncation, so isomorphisms are unique and are identities.

**nLab:** [skeletal category](https://ncatlab.org/nlab/show/skeletal+category). It says: “It follows that if a precategory is both skeletal and univalent, then a≅b is always a proposition (since it is equivalent to its propositional truncation), and thus the category is gaunt.”

**Sources:** none listed. No primary source with a working link was found.

### Defining graphs by reflexive relations makes them a quasitopos

**Remember:** Every vertex has an invisible loop, so an edge may collapse onto a vertex.

*True by definition.* MSC 18A10 (Graphs, diagram schemes, precategories), 18B25, 05C75. arXiv math.CT, math.CO. Level 4: research.

**Definition.** A simple graph here is a set with a reflexive symmetric relation. A graph morphism is a function preserving that relation, so it may identify adjacent vertices.

**Problem.** With these morphisms, the category of simple graphs is a Grothendieck quasitopos, and every edge contraction is a quotient.

**How the definition helps.** These graphs are separated presheaves for the double-negation topology on the full subcategory of sets on the one- and two-element sets. The separation test says an edge is determined by its endpoints, giving the Grothendieck quasitopos description. Identifying two adjacent vertices and taking the image relation has the universal property of their quotient (our own).

**nLab:** [category of simple graphs](https://ncatlab.org/nlab/show/category+of+simple+graphs). It says: “On the other hand, a Grothendieck quasitopos is, essentially by definition, the category of separated presheaves for a topology on a presheaf topos, in this case the ¬¬-topology.”

**Sources:**

- [Jiří Adámek, Horst Herrlich, Cartesian closed categories, quasitopoi and topological universes, Commentationes Mathematicae Universitatis Carolinae 27(2) (1986) 235–257](http://dml.cz/handle/10338.dmlcz/106447)

### With anafunctors, fully faithful and essentially surjective means equivalence, without choice

**Remember:** An anafunctor gives each object a family of interchangeable values, not one chosen value.

*Rules out counterexamples.* MSC 18A22 (Special properties of functors (faithful, full, etc.)), 18B10, 03E25. arXiv math.CT. Level 4: research.

**Definition.** An anafunctor F : C → D assigns to each object c a non-empty set of 'specified values' in D, instead of one chosen value. Specified isomorphisms join these values. Formally, an anafunctor is a span of functors C ← F̄ → D whose left leg is fully faithful and surjective on objects.

**Problem.** Without the axiom of choice, every fully faithful and essentially surjective functor has an inverse anafunctor, so it is an equivalence of categories in the sense of anafunctors.

**How the definition helps.** The inverse span uses all triples (d,c,α) with α an isomorphism from F(c) to d (our own). Its arrows are pairs of arrows in D and C commuting with α. Projection to D is surjective on objects by essential surjectivity and fully faithful by full faithfulness of F. Projection to C then gives the inverse anafunctor without choosing representatives.

**nLab:** [anafunctor](https://ncatlab.org/nlab/show/anafunctor). It says: “The notion of \*anafunctor\* is a generalization of the usual notion of \*functor\*, which enables us to recover a version of this statement without the axiom of choice.”

**Sources:**

- [Michael Makkai, Avoiding the axiom of choice in general category theory, Journal of Pure and Applied Algebra 108 (1996) 109–173](https://doi.org/10.1016/0022-4049(95)00029-1)

### Coherent functors on an abelian category have global dimension at most two

**Remember:** Hom keeps kernels, so every coherent functor has a resolution of length two.

*True by definition.* MSC 18A25 (Functor categories, comma categories), 16E10, 18E10. arXiv math.CT, math.RT. Level 4: research.

**Definition.** A coherent functor on an abelian category C is a contravariant additive functor F to abelian groups. It admits an exact presentation Hom(−,a) → Hom(−,b) → F → 0 for some objects a,b.

**Problem.** Every coherent functor on an abelian category has projective dimension at most two, so the coherent functor category has global dimension at most two. For finite-dimensional modules over a representation-finite finite-dimensional algebra, this gives the category of finite-dimensional modules over its Auslander algebra.

**How the definition helps.** The presentation comes from a map f from a to b in C, and the kernel of the induced map is again representable. Since Hom(x, −) keeps kernels, that kernel is Hom(−, ker f) (our own summary). So 0 → Hom(−, ker f) → Hom(−, a) → Hom(−, b) → F → 0 is a projective resolution of length 2. All the work sits in the Yoneda lemma and the existence of kernels in C.

**nLab:** [abelianization of an additive category](https://ncatlab.org/nlab/show/abelianization+of+an+additive+category). It says: “In the case where C is abelian already, finitely presentable additive presheaves of abelian groups were studied under the name of coherent functors by Auslander.”

**Sources:**

- [M. Auslander, Coherent functors, Proceedings of the Conference on Categorical Algebra, Springer (1966)](https://doi.org/10.1007/978-3-642-99902-4_8)

### A ternary factorization system is two nested factorization systems

**Remember:** Two nested two-step factorizations give one three-step factorization.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A32 (Factorization systems, substructures, quotient structures, congruences, amalgams), 18F60. arXiv math.CT. Level 4: research.

**Definition.** An orthogonal factorization system (L,R) factors every arrow as an L-map followed by an R-map. Each class consists exactly of the arrows uniquely lifting against the other class, with L on the left. A ternary system uses two such systems with L₁ ⊆ L₂ and takes the classes L₁, R₁ ∩ L₂, R₂ in order.

**Problem.** In a ternary factorization system, every morphism factors as an E-map, then an F-map, then an M-map, uniquely up to unique isomorphism. In Top, this is a quotient map, then a continuous bijection, then a subspace embedding.

**How the definition helps.** First factor through L₁ and R₁, then factor the R₁ part through L₂ and R₂ (our own). Since R₂ ⊆ R₁, cancellation for right orthogonal classes puts the middle factor in R₁. Uniqueness follows by applying binary uniqueness twice. In Top the intermediate spaces give the quotient topology on the image and then its subspace topology (our own).

**nLab:** [ternary factorization system](https://ncatlab.org/nlab/show/ternary+factorization+system). It says: “It turns out that a convenient way to state the definition is in terms of a pair of ordinary (orthogonal) factorization systems.”

**Sources:**

- [A. Pultr, W. Tholen, Free Quillen factorization systems, Georgian Mathematical Journal 9 (2002) 807–820](https://doi.org/10.1515/GMJ.2002.807)

### Total categories satisfy an adjoint functor theorem without a solution-set condition

**Remember:** Total means every presheaf has a best approximation by an object of C.

*Makes the theorem clean to state or prove.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A locally small category C is total if its Yoneda embedding C → \[Cᵒᵖ, Set\] has a left adjoint. Equivalently, C has every colimit of the identity functor weighted by any presheaf W : Cᵒᵖ → Set. The left adjoint sends a presheaf W to this weighted colimit, the object of C that best approximates W.

**Problem.** If C is total, every functor from C to a locally small category that preserves large colimits has a right adjoint. No solution-set condition is needed.

**How the definition helps.** For each target object d, totality represents the weighted colimit of the identity with weight W(c) = Hom(Fc,d) (our own). Preservation by F turns the evaluation cocone into a map from its image to d. The weighted colimit and evaluation give the universal arrow to d by the total-category adjoint functor theorem. These universal arrows define the right adjoint.

**nLab:** [total category](https://ncatlab.org/nlab/show/total+category). It says: “Total categories satisfy a very satisfactory adjoint functor theorem: any large-colimit-preserving functor from a total category to a locally small category has a right adjoint.”

**Sources:**

- [Ross Street, Bob Walters, Yoneda structures on 2-categories, Journal of Algebra 50 (1978) 350–379](https://doi.org/10.1016/0021-8693(78)90160-6)
- [Richard J. Wood, Some remarks on total categories, Journal of Algebra 75 (1982) 538–545](https://doi.org/10.1016/0021-8693(82)90055-2)

### Functors that preserve weak pullbacks lift relations exactly, giving bisimulations

**Remember:** Preserve weak pullbacks, and lifted relations compose and keep identities.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B10 (Categories of spans/cospans, relations, or partial maps), 18A35, 68Q85. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** For an endofunctor F of sets, the Barr lift of R ⊆ X × Y is the image of F(R) under the two transformed projections. Thus u and v are related exactly when some element of F(R) projects to both.

**Problem.** If a set functor F preserves weak pullbacks, its Barr extension preserves composition of relations and identity relations. So the generic bisimulation, in which related states have successors related by the lifted relation, behaves well.

**How the definition helps.** Relation composition takes the image of the pullback of two adjacent projections (our own). Weak pullback preservation supplies a common witness for any two lifted witnesses with the same middle value. Conversely, the surjection from the pullback onto the composite splits in sets with choice, so F preserves its image factorization. The identity relation has two identical bijective projections, so it lifts to the identity (our own).

**Paper or page:** [Identity-Preserving Lax Extensions and Where to Find Them](https://arxiv.org/abs/2410.14440v2). It says: “It is known that preservation of weak pullbacks is a sufficient condition for a functor to admit a normal lax extension (the Barr extension, which in fact is then even strict)”

**Sources:**

- [Sergey Goncharov, Dirk Hofmann, Pedro Nora, Lutz Schröder, Paul Wild, Identity-Preserving Lax Extensions and Where to Find Them, arXiv:2410.14440 (2025)](https://arxiv.org/abs/2410.14440v2)

### The Freyd cover gives the disjunction and existence properties

**Remember:** Glue each abstract object to a set of its global elements.

*Makes the theorem clean to state or prove.* MSC 18B25 (Topoi), 18A25, 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** For a locally small category T with terminal object 1, put Γ(U) = Hom(1,U). Its Freyd cover is the comma category Set ↓ Γ, whose objects are triples (X,U,u) with u from X to Γ(U).

**Problem.** In the free topos, the global sections functor Γ preserves finite colimits, so the terminal object is connected and projective. Hence its logic has the disjunction property and the existence property.

**How the definition helps.** Global elements of a cover object (X,U,u) correspond to elements of X, and this set projection preserves finite colimits (our own). The cover of the free topos is a topos, and freeness gives a logical section of its projection back to the free topos. Transport along the section gives the finite-colimit property there, yielding connectedness and projectivity. These give the disjunction and existence properties, respectively (our own).

**nLab:** [Freyd cover](https://ncatlab.org/nlab/show/Freyd+cover). It says: “They were originally proved by syntactic means; the conceptual proofs of the lemma and theorem below are due to Freyd.”

**Sources:**

- [Ieke Moerdijk, On the Freyd cover of a topos, Notre Dame Journal of Formal Logic 24 (1983) 517–526](https://doi.org/10.1305/ndjfl/1093870454)

### Adhesive categories make double-pushout rewriting well defined

**Remember:** Pushouts along monomorphisms behave like unions of sets.

*Makes the theorem clean to state or prove.* MSC 18B50 (Extensive, distributive, and adhesive categories), 68Q42. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** An adhesive category has pullbacks and pushouts along monomorphisms, and each such pushout is van Kampen. In every cube over that pushout with back and left faces pullbacks, the top is a pushout exactly when front and right are pullbacks.

**Problem.** In an adhesive category, a pushout complement of a monomorphism followed by any map, when it exists, is unique up to unique isomorphism. So double-pushout rewriting with rules whose left leg is a monomorphism is well defined.

**How the definition helps.** The van Kampen cube compares two candidate pushout complements with the same prescribed maps (our own). Lack and Sobociński’s uniqueness theorem gives a unique isomorphism respecting the complement squares. Thus a double-pushout step with monic left leg is independent of the complement chosen, whenever one exists.

**nLab:** [adhesive category](https://ncatlab.org/nlab/show/adhesive+category), [span rewriting](https://ncatlab.org/nlab/show/span+rewriting). It says: “In an adhesive category, if m: C → A is mono and g: A → D is any morphism, then if a pushout complement exists, it is unique up to unique isomorphism.”

**Sources:**

- [Stephen Lack, Paweł Sobociński, Adhesive categories, FoSSaCS 2004, Lecture Notes in Computer Science 2987, Springer (2004)](https://doi.org/10.1007/978-3-540-24727-2_20)
- [Stephen Lack, Paweł Sobociński, Adhesive and quasiadhesive categories, RAIRO Theoretical Informatics and Applications 39(3) (2005) 511–545](https://doi.org/10.1051/ita:2005028)

### A separate sort for scalars makes topological vector spaces internal to Top

**Remember:** Give the scalars their own sort, so that they can carry their own topology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 46A99. arXiv math.FA, math.CT. Level 4: research.

**Definition.** Fix a topological field k as the scalar sort of the two-sorted vector-space theory. The vector sort X carries continuous addition, zero, negation and scalar multiplication k × X → X satisfying the vector-space identities.

**Problem.** Topological vector spaces over a fixed topological field k are exactly the models in Top with scalar sort k of the two-sorted vector-space theory.

**How the definition helps.** A model interprets scalar multiplication as a map in Top from the product k × X, so continuity is joint. Its remaining vector operations and identities are precisely those of a topological vector space (our own). Conversely, these data interpret every operation in the two sorts.

**nLab:** [topological vector space](https://ncatlab.org/nlab/show/topological+vector+space). It says: “Much as a topological group is a group object in Top, so a TVS is the same as a vector space internal to Top ... provided that we use the two-sorted notion of vector space (k, X)”

**Sources:** none listed. No primary source with a working link was found.

### A universal property defines closed intervals without first defining the real numbers

**Remember:** An interval is the universal averaging structure between two end points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18A30. arXiv math.CT. Level 4: research.

**Definition.** An interval object is initial among cancellative iterative midpoint algebras with two specified endpoints and midpoint-preserving maps respecting the endpoints. A midpoint operation is idempotent, symmetric and medial, and cancellation means that averaging with a fixed point is injective. Iteration uniquely solves h(x) = a(x) ⊕ h(t(x)) for every pair of maps a:X→A and t:X→X.

**Problem.** Two midpoint-preserving maps from an interval object to a cancellative iterative midpoint algebra agree if they agree on both endpoints. In sets, the interval objects are, up to isomorphism, the real closed intervals \[a,b\] with a &lt; b and ordinary midpoint.

**How the definition helps.** The two common endpoint images make the target a bipointed algebra, so initiality gives exactly one map (our own). The paper’s Corollary 4.19 identifies real closed intervals with distinct endpoints as interval objects in sets. Initial objects are unique up to isomorphism.

**Paper or page:** [Euclidean interval objects in categories with finite products](https://arxiv.org/abs/2504.21551), [Euclidean interval objects in categories with finite products](https://arxiv.org/abs/2504.21551). It says: “The universal property characterises such structures up to isomorphism, supports the definition of functions between intervals, and provides a means of verifying identities between functions.”

**Sources:**

- [Martin Escardo and Alex Simpson, Euclidean interval objects in categories with finite products, arXiv:2504.21551 (2025)](https://arxiv.org/abs/2504.21551)

### Fermat theories get derivatives from Hadamard quotients, with no limits

**Remember:** Divide the increment by the step as an operation, then set the step to zero.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18F40. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A Fermat theory extends the Lawvere theory of commutative rings. Every operation f(x,z) admits a unique operation q satisfying f(x+h,z) − f(x,z) = hq(x,h,z), where z lists the other variables. Its x-partial derivative is q(x,0,z).

**Problem.** In a Fermat theory, with the derivative of f defined as f̃(x, 0, z), the sum, product and chain rules follow by algebra alone. Each partial derivative is a derivation of the free algebra T(n).

**How the definition helps.** Uniqueness identifies the quotient obtained by expanding each increment (our own). Sums add quotients, and the product increment is Δf·g + f·Δg + Δf·Δg. For composition, take the outer increment with step Δf and substitute the inner quotient. Setting h to zero gives the sum, product and chain rules, including the derivation law on the free algebra.

**nLab:** [Fermat theory](https://ncatlab.org/nlab/show/Fermat+theory), [tangent category](https://ncatlab.org/nlab/show/tangent+category), [Hadamard lemma](https://ncatlab.org/nlab/show/Hadamard+lemma). It says: “is in fact a Fermat theory in that Hadamard's lemma holds for smooth functions in particular on Cartesian spaces.”

**Sources:**

- [Eduardo J. Dubuc, Anders Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### Algebraically free monads satisfy the ordinary free monad property

**Remember:** The algebra categories tell us how maps out of the free monad factor.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads). arXiv math.CT. Level 4: research.

**Definition.** For an endofunctor F, an F-algebra is an object X with a map FX → X. A natural transformation F → T into a monad is algebraically free if restriction identifies T-algebras with F-algebras over the base category.

**Problem.** An algebraically free monad on F is free on F in the ordinary sense. Every natural map F → S factors uniquely through a map T → S that preserves the monad unit and multiplication.

**How the definition helps.** For any monad S, a transformation F → S corresponds to a functor from S-algebras to F-algebras over the base (our own). Algebraic freeness identifies these with functors from S-algebras to T-algebras over the base. The Eilenberg–Moore correspondence identifies the latter with monad maps T → S, giving the required unique factorization.

**nLab:** [free monad](https://ncatlab.org/nlab/show/free+monad). It says: “We say that a monad T is algebraically-free on an endofunctor F if the category T Alg<sub>mnd</sub> of T-algebras (in the sense of algebras for a monad) is equivalent to the category F Alg<sub>endo</sub> of F-algebras (in the sense of algebras for an endofunctor).”

**Sources:** none listed. No primary source with a working link was found.

### Cartesian monads make T-spans a bicategory, so generalized multicategories exist

**Remember:** A cartesian monad respects pullbacks, so composing spans by pullback stays coherent.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18M65, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A monad T on a category with pullbacks is cartesian if T preserves pullbacks. Also, every naturality square of its unit and multiplication must be a pullback square.

**Problem.** If T is a cartesian monad, the T-spans T E ← M → E′ form a bicategory, with composition by pullback and the multiplication of T. A T-multicategory is then a monad in this bicategory, as a category is a monad in spans of sets.

**How the definition helps.** The cartesian condition makes the coherence 2-cells of T-span composition invertible, so the bicategory exists. These 2-cells come from the universal property of pullbacks, and for a general monad they need not be invertible. With it, Leinster's T-multicategories and globular operads have a one-line definition. The free commutative monoid monad is not cartesian, so symmetric multicategories do not fit this scheme directly.

**nLab:** [cartesian monad](https://ncatlab.org/nlab/show/cartesian+monad). It says: “In fact, it turns out that requiring the monad T to be cartesian is exactly what is needed to ensure that the coherence 2-cells are isomorphisms, and hence that T-spans do in fact form a bicategory.”

**Sources:**

- [Tom Leinster, Higher Operads, Higher Categories, 2003, arXiv:math/0305049](https://arxiv.org/abs/math/0305049)

### Defining codensity monads as right Kan extensions makes the monad laws automatic

**Remember:** Check the laws after the universal map.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18A40. arXiv math.CT. Level 4: research.

**Definition.** For G from D to C, its codensity endofunctor T is the right Kan extension of G along itself, when it exists. It has a natural transformation ε from TG to G. For every endofunctor H of C, composition with ε after whiskering by G bijects transformations H → T with transformations HG → G.

**Problem.** Let the right Kan extension T of G along itself exist. The unit comes from factoring the identity of G through ε, and the multiplication from factoring ε ∘ T ε. With these, T is a monad.

**How the definition helps.** The universal bijection detects equality of transformations into T after whiskering by G and composing with ε. Both unit equations then reduce to ε itself (our own). Both associativity composites reduce to ε ∘ Tε ∘ T²ε by naturality (our own).

**nLab:** [codensity monad](https://ncatlab.org/nlab/show/codensity+monad). It says: “it suffices by universality to check that applying G on the right, followed by ε, results in a commutative diagram.”

**Paper or page:** [Probability monads as codensity monads, Proposition 2.1](https://arxiv.org/abs/2111.01250). It says: “The triple (Tᴳ, η, μ) is a monad.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius monads as two-sided adjunctions make free algebras also cofree

**Remember:** One functor builds both the free and the cofree algebra.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18M05. arXiv math.CT, math.QA. Level 4: research.

**Definition.** For a monad T, write F for its free-algebra functor and U for its forgetful functor. A Frobenius structure can be specified by an adjunction U ⊣ F in addition to the usual adjunction F ⊣ U.

**Problem.** Let T be a Frobenius monad with free-algebra functor F. For every algebra A and object X, algebra maps A → F(X) correspond to maps from the underlying object of A to X.

**How the definition helps.** With the adjunction definition, the claim is the statement that F is right adjoint to U (our own explanation). The work moves into the theorem that the operation-based definition gives this adjunction, which the nLab states with a reference to Street (2004, Section II). There the counit T(X) → X of the comultiplication gives the counit of the new adjunction (our own).

**nLab:** [Frobenius monad](https://ncatlab.org/nlab/show/Frobenius+monad). It says: “The monad induced from an ambidextrous adjunction is Frobenius. The converse is also true:”

**Sources:**

- [Ross Street, Frobenius monads and pseudomonoids (2004)](https://doi.org/10.1063/1.1788852)

### Nervous monads are defined as those for which the nerve theorem holds

**Remember:** A nervous monad is one whose algebras its theory already describes.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C10. arXiv math.CT. Level 4: research.

**Definition.** Let 𝒜 be a small dense full subcategory of arities in ℰ. Form the full theory of free T-algebras on 𝒜 and take the restricted Yoneda nerve of T-algebras on this theory. T is 𝒜-nervous if this nerve is fully faithful and its image consists precisely of presheaves restricting to arity nerves of objects of ℰ.

**Problem.** The constructions between monads and theories form an adjunction whose fixed points are exactly the nervous monads and the theories. So nervous monads correspond to theories, and every monad with arities is nervous (Theorem 43).

**How the definition helps.** The nerve condition identifies T-algebras with models of the associated arity theory (our own). The monad–theory adjunction identifies exactly these monads and the 𝒜-theories as its fixed points. Weber’s nerve theorem supplies the condition for monads with arities, giving the stated inclusion.

**Paper or page:** [Monads and theories](https://arxiv.org/abs/1805.04346), [Monads and theories](https://arxiv.org/abs/1805.04346). It says: “The fixpoints of the adjunction are characterised as the 𝒜-nervous monads—those for which the conclusions of Weber's nerve theorem hold—and the 𝒜-theories, which we introduce here.”

**Sources:**

- [John Bourke and Richard Garner, Monads and theories, Advances in Mathematics 351 (2019), 1024–1071](https://arxiv.org/abs/1805.04346)

### Profinite monads let Reiterman's theorem hold for finite algebras of any monad

**Remember:** A profinite term is a compatible family of values in finite algebras.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 08B05. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** For a monad T on a variety D, send each finite T-algebra to its underlying finite object in the profinite completion of D. The profinite monad is the right Kan extension of this forgetful functor along itself (our own).

**Problem.** Let D be a variety of algebras and T a monad on D preserving surjective homomorphisms. A class of finite T-algebras is definable by profinite equations exactly when it is closed under finite products, subalgebras and surjective quotients.

**How the definition helps.** The codensity construction makes profinite terms compatible over all finite algebra evaluations (our own). This gives one meaning to satisfaction of equations for all the finite T-algebras. The generalized Reiterman theorem proves that the stated closure operations characterize those equational classes.

**Paper or page:** [Reiterman's Theorem on Finite Algebras for a Monad](https://arxiv.org/abs/2101.00942). It says: “As a key technical tool, we introduce the concept of a profinite monad associated to the monad T, which gives a categorical view of the construction of the space of profinite terms.”

**Sources:**

- [Jiri Adamek, Liang-Ting Chen, Stefan Milius and Henning Urbat, Reiterman's Theorem on Finite Algebras for a Monad, arXiv:2101.00942 (2021)](https://arxiv.org/abs/2101.00942)

### Weak distributive laws combine choice and probability where ordinary laws fail

**Remember:** Drop one unit law, and nondeterminism and probability combine.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C50. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** Here a weak distributive law for monads S,P is a natural transformation SP → PS compatible with both multiplications and the unit of P. It omits compatibility with the unit of S, where S forms finite weighted sums and P is powerset.

**Problem.** No ordinary distributive law combines the powerset monad with the distribution monad (Plotkin). For a class of semirings containing the positive semifields, a weak distributive law combines the powerset and semimodule monads into the monad of convex sets of weighted sums.

**How the definition helps.** Omitting the semimodule unit equation allows the weak law to send weighted choices to convex sets of weighted sums (our own). The paper constructs this law under its semiring hypotheses. Splitting the idempotent of the weak composite gives its convex-set monad, while Plotkin’s obstruction applies to ordinary distributive laws.

**Paper or page:** [Convexity via Weak Distributive Laws](https://arxiv.org/abs/2108.10718v4), [No-Go Theorems for Distributive Laws](https://arxiv.org/abs/2003.12531v4). It says: “Using the abstract theory of weak distributive laws, we compose the powerset and the semimodule monads via δ, obtaining the monad of convex subsets of the free semimodule.”

**Sources:**

- [Filippo Bonchi, Alessio Santamaria, Convexity via Weak Distributive Laws, Logical Methods in Computer Science 18(4) (2022), arXiv:2108.10718](https://arxiv.org/abs/2108.10718v4)
- [Maaike Zwart, Dan Marsden, No-Go Theorems for Distributive Laws, Logical Methods in Computer Science 18(1) (2022), arXiv:2003.12531](https://arxiv.org/abs/2003.12531v4)
- [Richard Garner, The Vietoris Monad and Weak Distributive Laws, Applied Categorical Structures (2019)](https://doi.org/10.1007/s10485-019-09582-w)

### In thunk-force categories, pure programs are the maps where thunking is natural

**Remember:** A program is pure when thunking before or after running it gives the same result.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18C50. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** A thunk-force category carries an endofunctor L, a natural counit ε and maps θₐ from A to LA. The triple (L,ε,θL) is a comonad, and each θₐ is a coalgebra structure. An arrow f from A to B is thunkable if (Lf)θₐ = θᵦf.

**Problem.** In a thunk-force category, the thunkable maps form a subcategory with a monad on it. Thunk-force categories correspond to the monads whose unit is an equalizer, which form a reflective subcategory of all monads (Führmann).

**How the definition helps.** Identities and composites preserve the coalgebra structures θₐ, so thunkable maps form a subcategory (our own). On it L gives the monad with unit θ and multiplication Lε. Führmann’s correspondence identifies the resulting monads by the equalizer condition and proves reflectivity.

**nLab:** [thunk-force category](https://ncatlab.org/nlab/show/thunk-force+category). It says: “The presence of non-thunkable morphisms makes θ fail to be natural overall; naturality of θ is exactly the same as saying all morphisms are thunkable.”

**Sources:**

- [Carsten Führmann, Direct models of the computational lambda-calculus, Electronic Notes in Theoretical Computer Science 20 (1999)](https://doi.org/10.1016/S1571-0661(04)80078-1)

### Define extended natural numbers as monotone sequences of bits

**Remember:** The position of the first 1 is the number; no 1 means ∞.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 03F65. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Constructively, an extended natural number is an infinite monotone sequence of bits: once a 1 appears, all later bits are 1. The number n is n zeros followed by ones. ∞ is the sequence of all zeros.

**Problem.** Constructively, in a topos with a natural numbers object, monotone bit sequences form the terminal coalgebra for X ↦ 1 + X. Its structure map returns the left summand for an initial one and the shifted sequence in the right summand otherwise.

**How the definition helps.** A coalgebra X → 1 + X determines a sequence for each state by testing for termination at each finite step (our own). Bit n is one exactly when termination has occurred by step n, so the sequence is monotone. The coalgebra equation forces each successive bit, giving existence and uniqueness without deciding eventual termination.

**nLab:** [extended natural number](https://ncatlab.org/nlab/show/extended+natural+number). It says: “Note that this universal property also holds constructively (which is why we can be sure that the constructive definition above is correct).”

**Sources:**

- [Martín H. Escardó, Infinite sets that satisfy the principle of omniscience in any variety of constructive mathematics, Journal of Symbolic Logic 78 (2013) 764–784](https://doi.org/10.2178/jsl.7803040)

### Lawful lenses are exactly projections out of a product

**Remember:** Read what you wrote, writing what you read does nothing, and the last write wins.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 18C50, 68N18. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** A lens from a state type S to a view type V is a pair of maps, get : S → V and put : V × S → S. The lens is lawful (very well-behaved) when three laws hold. Get after put returns the value that put wrote, putting back what get read changes nothing, and a second put overwrites the first.

**Problem.** For an inhabited view set V, lawful lenses on S correspond to product splittings S ≅ D × V up to isomorphism of complements. Getting projects to V, and putting replaces that coordinate. Lawful lenses also correspond to coalgebras for the costate comonad S ↦ V × (V → S).

**How the definition helps.** Choose v₀ in V and take D to be the fibre of get over v₀ (our own). Send s to (put(v₀,s),get(s)) and send (d,v) back to put(v,d). The three laws make these maps inverse and make put replace the view coordinate. Currying put and pairing it with get gives the coalgebra, whose equations are precisely the lens laws (our own).

**nLab:** [lens (in computer science)](https://ncatlab.org/nlab/show/lens+%28in+computer+science%29). It says: “those for which updates of the "view" V completely overwrite any previous such changes -- turn out to equivalently be data base types of product form S = D × V with "view" given by projecting onto the V-factor.”

**Sources:**

- [R. O'Connor, Functor is to Lens as Applicative is to Biplate: Introducing Multiplate, arXiv:1103.2841 (2011)](https://arxiv.org/abs/1103.2841)
- [Michael Johnson, Robert Rosebrugh, Richard Wood, Algebras and Update Strategies, Journal of Universal Computer Science 16 (2010) 729–748](https://doi.org/10.3217/jucs-016-05-0729)

### Algebraically compact categories solve mixed-variance domain equations

**Remember:** In an algebraically compact category, each functor's least and greatest fixed points coincide.

*Makes the theorem clean to state or prove.* MSC 18C50 (Categorical semantics of formal languages), 18B35, 03B40. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** An algebra for an endofunctor F is an object X with a map F(X) → X, and a coalgebra is an object X with a map X → F(X). A category is algebraically compact if every endofunctor F has an initial algebra and a final coalgebra, and the canonical map from the initial algebra to the final coalgebra is an isomorphism.

**Problem.** If C is algebraically compact, every mixed-variance equation X ≅ T(X, X), for a functor T : Cᵒᵖ × C → C, has a solution. An example is X ≅ (X → X) for the untyped lambda calculus.

**How the definition helps.** Algebraic compactness passes to Cᵒᵖ × C, and there a mixed-variance equation becomes an ordinary fixed-point equation. The fixed point is the initial algebra of (X, Y) ↦ (T(Y, X), T(X, Y)). A symmetry argument of Freyd shows that its two parts agree, which gives X ≅ T(X, X). Few categories are algebraically compact in the classical sense, so in practice one restricts to enriched functors, for example on pointed complete partial orders.

**nLab:** [algebraically compact category](https://ncatlab.org/nlab/show/algebraically+compact+category). It says: “If C and D are algebraically compact, so is C×D. If C is algebraically compact, so is the dual category Cᵒᵖ.”

**Sources:**

- [Peter Freyd, Algebraically complete categories, in: Category Theory (Como 1990), Lecture Notes in Mathematics 1488 (1991)](https://doi.org/10.1007/BFb0084215)

### CHAD makes automatic differentiation the unique structure-preserving functor

**Remember:** Give the derivative of each primitive, and initiality gives the derivative of every program.

*Makes the theorem clean to state or prove.* MSC 18C50 (Categorical semantics of formal languages), 65D25, 18D30. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** Take the source language to be Syn, the initial category with structure S, such as products, function types and primitive operations. Forward and reverse CHAD are the unique S-preserving functors from Syn into two categories, Σ(C, L) and Σ(C, Lᵒᵖ), built by the Grothendieck construction.

**Problem.** For programs between first-order types, which may be higher-order inside, forward CHAD computes the correct derivative and reverse CHAD the transposed derivative. This assumes that the derivatives of the primitive operations are correct.

**How the definition helps.** Because Syn is initial, automatic differentiation is compositional by definition: its values on the primitive operations fix it everywhere. The nLab says that the proof is a standard logical relations argument. Viewed abstractly, it follows because the Artin gluing of an S-category is again an S-category.

**nLab:** [automatic differentiation](https://ncatlab.org/nlab/show/automatic+differentiation). It says: “Viewed more abstractly, the proof follows automatically because the Artin gluing along a representable functor (like the hom out of the real numbers) of an S-category is itself again an S-category, for common most choices of S.”

**Sources:**

- [Matthijs Vákár, Reverse AD at Higher Types: Pure, Principled and Denotationally Correct (2021), arXiv:2007.05283](https://arxiv.org/abs/2007.05283)
- [Fernando Lucatelli Nunes, Matthijs Vákár, CHAD for Expressive Total Languages, Mathematical Structures in Computer Science 33 (2023), arXiv:2110.00446](https://arxiv.org/abs/2110.00446)

### Split comprehension categories make substitution strictly associative

**Remember:** Split means substitution composes exactly, as it does in syntax.

*Rules out counterexamples.* MSC 18C50 (Categorical semantics of formal languages), 03B38, 18D30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A comprehension category has a fibration of types over contexts. Its comprehension functor lies over the context category and takes Cartesian arrows to pullback squares. A splitting chooses Cartesian reindexings that preserve identities and composition exactly.

**Problem.** A split comprehension category with strictly stable interpretations of the required type formers models dependent type theory, with substitution given by reindexing. Hofmann’s construction supplies such a split interpretation from a locally cartesian closed category.

**How the definition helps.** Chosen pullbacks in a locally cartesian closed category can differ from iterated chosen pullbacks by an isomorphism (our own). A split cleavage makes the two reindexings equal, as substitution in syntax requires. Hofmann’s coherence construction supplies the strictly stable operations for the interpretation.

**nLab:** [categorical semantics of dependent type theory](https://ncatlab.org/nlab/show/categorical+semantics+of+dependent+type+theory). It says: “The way this is generally dealt with is to introduce a category-theoretic structure which does have a "substitution" operation which is strictly associative, hence does correspond directly to type theory”

**Sources:**

- [Martin Hofmann, On the interpretation of type theory in locally cartesian closed categories, CSL 1994, Lecture Notes in Computer Science 933 (1995) 427–441](https://doi.org/10.1007/BFb0022273)
- [Bart Jacobs, Comprehension categories and the semantics of type dependency, Theoretical Computer Science 107 (1993) 169–207](https://doi.org/10.1016/0304-3975(93)90169-T)
- [Pierre-Louis Curien, Richard Garner, Martin Hofmann, Revisiting the categorical interpretation of dependent type theory, Theoretical Computer Science 546 (2014) 99–119](https://doi.org/10.1016/j.tcs.2014.03.003)

### C\*-categories need a positivity axiom for the GNS representation

**Remember:** Every arrow’s squared norm obeys the C\*-identity, and its square a\*a must be positive.

*Rules out counterexamples. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 46L05, 18M40. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A C\*-category is a complex Banach-enriched category with a conjugate-linear, identity-on-objects involution reversing composition and satisfying ‖a\*a‖ = ‖a‖². For every arrow a from x to y, there must exist an endomorphism b of x with a\*a = b\*b.

**Problem.** Every small C\*-category has a faithful \*-functor into the category Hilb of Hilbert spaces, an analogue of the GNS representation of a C\*-algebra.

**How the definition helps.** The extra axiom gives back the positivity of a\*a that the C\*-identity no longer gives, and a representation on Hilbert spaces needs it. Take two objects with every hom-space ℂ, and put a\* = conj(a) on endomorphisms but a\* = −conj(a) on arrows between different objects. Then a\*a is negative, so no faithful representation on Hilbert spaces exists. That the axiom is what the theorem needs is our reading of the page.

**nLab:** [C-star-category](https://ncatlab.org/nlab/show/C-star-category). It says: “Unlike C\*-algebras, this does not follow automatically, as can be seen by considering the category with two objects x,y with all morphism sets a copy of ℂ”

**Sources:**

- [P. Ghez, R. Lima, J. E. Roberts, W\*-categories, Pacific Journal of Mathematics 120 (1985) 79–109](https://doi.org/10.2140/pjm.1985.120.79)

### Isbell convexity of metric spaces is the same as categorical completeness

**Remember:** For skeletal metric spaces, injective means complete, and complete means Isbell convex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 51F30. arXiv math.CT, math.MG. Level 4: research.

**Definition.** A Lawvere metric space has extended nonnegative distances satisfying d(x,x) = 0 and the triangle inequality, without requiring symmetry. Isbell convexity means that every family (xᵢ,rᵢ,sᵢ) with nonnegative extended radii satisfying d(xᵢ,xⱼ) ≤ rᵢ+sⱼ for all i,j admits a common point z. It must satisfy d(xᵢ,z) ≤ rᵢ and d(z,xᵢ) ≤ sᵢ for every i.

**Problem.** Among skeletal categories enriched over a quantale, completeness is equivalent to injectivity for fully faithful enriched functors. For skeletal Lawvere metric spaces, this gives the injectivity characterization by Isbell convexity.

**How the definition helps.** Completeness is a categorical notion, so one injectivity theorem for enriched categories covers metric spaces at once. A quantale is a complete lattice with a compatible multiplication; here it is \[0,∞\] with addition. Skeletal means that distance zero in both directions forces equality. The proof uses the MacNeille completion as the injective envelope, and the result is a special case of theorems of Hofmann and Stubbe.

**Paper or page:** [Completeness and injectivity](https://arxiv.org/abs/2005.05311), [Completeness and injectivity](https://arxiv.org/abs/2005.05311). It says: “A Lawvere metric space is Isbell convex if and only if it is complete”

**Sources:**

- [Soichiro Fujii, Completeness and injectivity, Topology and its Applications 301 (2021), 107503](https://doi.org/10.1016/j.topol.2020.107503)

### Lawvere metric spaces make the triangle inequality a composition law

**Remember:** Distances are hom-objects, and the triangle inequality is how you compose them.

*Makes the theorem clean to state or prove.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 54E50. arXiv math.CT, math.MG. Level 4: research.

**Definition.** A Lawvere metric space is a set with a distance d taking values in \[0,∞\]. For every x, d(x,x) = 0, and for every x,y,z, d(x,z) ≤ d(x,y) + d(y,z). These are the identity and composition axioms for enrichment in (\[0,∞\], ≥, +, 0).

**Problem.** A metric space is complete in the usual sense exactly when it is Cauchy complete as an enriched category: every adjoint pair of bimodules comes from a functor (Lawvere). For ordinary categories, the same notion is idempotent completeness.

**How the definition helps.** The distance axioms make the enriched Cauchy-completeness test applicable without changing its definition. Lawvere’s theorem identifies representability of left adjoint modules with convergence of Cauchy sequences for ordinary metric spaces. For Set-enrichment the same representability test asks that every idempotent split (our own).

**nLab:** [metric space](https://ncatlab.org/nlab/show/metric+space), [complete space](https://ncatlab.org/nlab/show/complete+space), [triangle inequality](https://ncatlab.org/nlab/show/triangle+inequality), [Cauchy complete category](https://ncatlab.org/nlab/show/Cauchy+complete+category). It says: “he found that a metric space was complete if and only if every adjunction of bimodules over the enriched category is induced by an enriched functor.”

**Sources:**

- [F. William Lawvere, Metric spaces, generalized logic and closed categories, Rendiconti del Seminario Matematico e Fisico di Milano 43 (1973) 135–166; Reprints in Theory and Applications of Categories 1 (2002) 1–37](http://www.tac.mta.ca/tac/reprints/articles/1/tr1abs.html)

### Over sets, every functor has exactly one strength

**Remember:** In sets, a strength is forced: pair each result with the context.

*True by definition. Confidence: medium.* MSC 18D25 (Actions of a monoidal category, tensorial strength), 18C15, 18C50. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A strength for a set endofunctor T is a natural family s(A,X) from A × TX to T(A × X). For singleton A it is the canonical unit identification. For A × B it equals s(A,B × X) after 1ₐ × s(B,X), under product associativity.

**Problem.** Over sets, every functor has exactly one strength, and every natural transformation is strong. So every monad on sets is strong in exactly one way, as Moggi's semantics of effects needs.

**How the definition helps.** Naturality at each point 1 → A and the unit axiom force s(a,t) = T(x ↦ (a,x))(t) (our own). Functoriality gives naturality and the product laws for this formula. Naturality of any transformation at x ↦ (a,x) gives strength compatibility, including for monad units and multiplications (our own).

**Paper or page:** [What Makes a Strong Monad?](https://arxiv.org/abs/2207.00851v1). It says: “If ▷ᴅ is functionally complete, then every functor F : C → D has a unique strength, and every natural transformation τ : F ⇒ G of functors C → D is strong.”

**Sources:**

- [Dylan McDermott, Tarmo Uustalu, What Makes a Strong Monad?, EPTCS 360 (2022) 113–133, arXiv:2207.00851](https://arxiv.org/abs/2207.00851v1)
- [Anders Kock, Strong functors and monoidal monads, Archiv der Mathematik (1972)](https://doi.org/10.1007/BF01304852)

### Displayed categories give a Grothendieck construction for every functor

**Remember:** Instead of a functor into C, give the fibres over each object and arrow.

*Makes the theorem clean to state or prove.* MSC 18D30 (Fibered categories), 18D60, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A displayed category over C assigns objects over each base object and arrows over each base arrow between each pair of objects over its endpoints. Displayed identities and composition lie over base identities and composition and satisfy the category laws.

**Problem.** Displayed categories over C are equivalent to the slice Cat/C, that is, to all functors into C (Bénabou). The ordinary Grothendieck construction covers only the fibrations, which come from pseudofunctors Cᵒᵖ → Cat.

**How the definition helps.** A functor into C gives displayed objects and arrows by taking fibres over base objects and arrows (our own). Conversely, pairing each base object or arrow with a displayed one gives the total category and its projection. These constructions are inverse up to equivalence, while pseudofunctors recover the fibred case by the ordinary Grothendieck construction.

**nLab:** [displayed category](https://ncatlab.org/nlab/show/displayed+category), [Grothendieck construction](https://ncatlab.org/nlab/show/Grothendieck+construction). It says: “Instead of fibrations over C, such normal lax functors correspond to arbitrary functors into C.”

**Sources:**

- [Benedikt Ahrens, Peter LeFanu Lumsdaine, Displayed categories, Logical Methods in Computer Science 15 (2019), arXiv:1705.04296](https://arxiv.org/abs/1705.04296)

### Street fibrations make fibrations respect equivalence of categories

**Remember:** Lift the morphism up to an isomorphism at its source, not exactly.

*Makes the theorem clean to state or prove.* MSC 18D30 (Fibered categories), 18N10. arXiv math.CT. Level 4: research.

**Definition.** For a functor p, an arrow u is Cartesian if each factorization p(v) = p(u)h with v targeting the codomain of u lifts uniquely. The lift factors v through u with its first arrow over h. A Street fibration supplies such a u targeting e for every f into p(e), with p(u) = fh for some isomorphism h.

**Problem.** A functor equivalent to a Street fibration is again a Street fibration, so the notion makes sense in any bicategory. Over B, the 2-category of Street fibrations is equivalent to the 2-category of pseudofunctors Bᵒᵖ → Cat.

**How the definition helps.** Equivalences transport the Cartesian universal property and the isomorphism at the source, so they preserve weak lifts (our own). Street’s bicategorical lifting condition expresses this representably. Taking essential fibres and applying the bicategorical Grothendieck construction gives the pseudofunctor correspondence for Cartesian functors over B (our own).

**nLab:** [Street fibration](https://ncatlab.org/nlab/show/Street+fibration). It says: “A Street fibration, or weak fibration, is a generalization of a Grothendieck fibration which obeys the principle of equivalence, i.e. covariant under equivalence of categories.”

**Sources:**

- [Ross Street, Fibrations in bicategories, Cahiers de topologie et géométrie différentielle catégoriques 21(2) (1980) 111–160](http://www.numdam.org/item/CTGDC_1980__21_2_111_0/)
- [Ross Street, Conspectus of variable categories, Journal of Pure and Applied Algebra 21(3) (1981) 307–338](https://doi.org/10.1016/0022-4049(81)90021-9)

### In an equipment, pointwise Kan extensions are weighted limits

**Remember:** A pointwise Kan extension is a limit weighted by the arrow's hom-profunctor.

*Makes the theorem clean to state or prove.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** For k from D to A in a proarrow equipment, restrict the identity proarrow of A along k at its target. The resulting proarrow A(1,k) specializes in enriched categories to the weight (a,d) ↦ A(a,kd).

**Problem.** In an equipment, a pointwise right Kan extension along k : D → A is a limit weighted by the proarrow A(1,k). In the equipment of V-categories this gives the correct enriched pointwise Kan extension.

**How the definition helps.** The weight A(1,k) records all arrows from each test point a to the objects kd (our own). Its weighted-limit universal property therefore tests cones at each point, giving the pointwise right extension. In V-categories this is the classical enriched formula using the weights A(a,k−) (our own).

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows). It says: “That is, the extra data of a proarrow equipment lets us define the good notion of Kan extension (even in the enriched case) as a special case of a general notion of limit.”

**Sources:**

- [R. J. Wood, Abstract proarrows I, Cahiers de topologie et géométrie différentielle 23(3) (1982) 279–290](http://www.numdam.org/item/CTGDC_1982__23_3_279_0)
- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Proarrow equipments give the right fully faithful functors for enriched categories

**Remember:** Fully faithful means: pull back B's homs along f, and you get A's homs.

*True by definition.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18D20, 18A22. arXiv math.CT. Level 4: research.

**Definition.** An equipment is a 2-category K with a second 2-category M of proarrows (such as profunctors) and a 2-functor K → M, bijective on objects and locally fully faithful. Each arrow f : A → B gives a proarrow B(1,f) with a right adjoint B(f,1). The arrow f is fully faithful in the equipment when the canonical map from the identity proarrow of A to B(f,f) is an isomorphism.

**Problem.** In the equipment of V-categories and V-profunctors, an arrow is fully faithful exactly when it is a V-fully-faithful V-functor.

**How the definition helps.** The canonical proarrow comparison has components A(x,y) → B(fx,fy) for every pair x,y (our own). A map of enriched profunctors is invertible exactly when every component is invertible. That componentwise condition defines enriched full faithfulness.

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows). It says: “is said to be fully faithful if the canonical morphism U(A) → B(f,f) is an isomorphism of proarrows A → A. In V Cat this recaptures the correct notion of V-fully-faithful V-functor.”

**Sources:**

- [R. J. Wood, Abstract proarrows I, Cahiers de topologie et géométrie différentielle 23(3) (1982) 279–290](http://www.numdam.org/item/CTGDC_1982__23_3_279_0)
- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Under a lax-idempotent 2-monad, every map is lax in one way

**Remember:** For colimit-like structure, every functor already has its unique comparison map colim(F∘D) → F(colim D).

*True by definition. Confidence: medium.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18N15. arXiv math.CT. Level 4: research.

**Definition.** A 2-monad T is lax-idempotent (also called Kock–Zöberlein) if every morphism f : A → B between T-algebras carries exactly one 2-cell that makes it a lax T-morphism. A lax T-morphism is a map together with a 2-cell, not necessarily invertible, that compares the two ways round the algebra square. The model case is the 2-monad of free cocompletion under some class of colimits.

**Problem.** For a lax-idempotent 2-monad T, every algebra structure TA → A is left adjoint to the unit A → TA. So an object carries at most one pseudo-algebra structure, up to unique isomorphism.

**How the definition helps.** The Kock–Zöberlein characterization identifies pseudo-algebra structures with left adjoints to the unit having invertible counit (our own). It connects the unique lax comparison in the definition to the claimed adjunction. Uniqueness of left adjoints up to unique compatible isomorphism then gives the uniqueness of the algebra structure.

**nLab:** [lax-idempotent 2-monad](https://ncatlab.org/nlab/show/lax-idempotent+2-monad), [lax morphism](https://ncatlab.org/nlab/show/lax+morphism). It says: “If T is a lax-idempotent 2-monad, then (by definition) every morphism in the underlying 2-category K between (the objects underlying) T-algebras has a unique structure of lax T-morphism.”

**Sources:**

- [Anders Kock, Monads for which structures are adjoint to units, J. Pure Appl. Algebra 104 (1995) 41–59](https://doi.org/10.1016/0022-4049(94)00111-U)
- [G. M. Kelly, Stephen Lack, On property-like structures, Theory Appl. Categ. 3 (1997) no. 9](http://www.tac.mta.ca/tac/volumes/1997/n9/3-09abs.html)

### Virtual equipments remove the cocompleteness condition on the enriching category

**Remember:** Use a string of proarrows as input without forming its composite.

*Makes the theorem clean to state or prove.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18D20, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A virtual equipment is a virtual double category admitting horizontal units and restrictions of every proarrow along every pair of vertical arrows at its ends. A cell can take a string of proarrows as inputs without requiring a composite proarrow.

**Problem.** For every monoidal category V, V-categories and V-profunctors form a virtual equipment. Internal categories in any category with pullbacks also form one.

**How the definition helps.** Cells with several inputs describe compatible families of maps directly, so no coend for a composite profunctor is required (our own). Enriched homs give units and substitution of functors gives restrictions. For internal categories, pullbacks form the objects of composable inputs and give restrictions, yielding the internal version (our own).

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows), [virtual equipment](https://ncatlab.org/nlab/show/virtual+equipment). It says: “One can formulate a generalized notion of equipment which includes V Cat for any monoidal category V (and in fact, any multicategory), and Cat(S) for any category S with pullbacks.”

**Sources:**

- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Pseudo-equivalence relations show which exact categories are free exact completions

**Remember:** Keep the proofs that x \~ y, not only the fact, and weak limits suffice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18A35, 18G05. arXiv math.CT. Level 4: research.

**Definition.** A pseudo-equivalence relation consists of arrows s,t from R to X witnessing a relation with possibly several witnesses per pair. There are maps assigning every x a witness from x to x and reversing every witness. On a weak pullback of t and s, a composition map assigns each composable witness pair a witness with the outer endpoints.

**Problem.** The Carboni–Vitale theorem is about exact categories (regular categories in which every equivalence relation is the kernel pair of some map). An exact category D is Cex/lex for some C with weak finite limits if and only if D has enough projectives (every object is a quotient of a projective object). Then C can be the full subcategory of projectives of D.

**How the definition helps.** Weak finite limits suffice to form pseudo-equivalence relations and add their formal quotients (our own). In an exact category with enough projectives, projective covers of finite limits provide weak finite limits among projectives. Carboni and Vitale identify the resulting completion with the exact category, and every such completion has enough projectives.

**nLab:** [regular and exact completions](https://ncatlab.org/nlab/show/regular+and+exact+completions). It says: “Moreover, an exact category D is of the form Cex/lex for some C (with weak finite limits) if and only if it has enough projectives”

**Sources:**

- [Aurelio Carboni, Enrico Vitale, Regular and exact completions, Journal of Pure and Applied Algebra 125 (1998) 79–116](https://doi.org/10.1016/S0022-4049(96)00115-6)

### With the right internal categories, Cat becomes 2-exact

**Remember:** A 2-congruence is an internal category with discrete hom-objects, like an honest 1-category.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18N10, 18D40. arXiv math.CT. Level 4: research.

**Definition.** A 2-congruence is a homwise-discrete internal category whose span of arrows is a two-sided discrete fibration over its object of objects on both sides. Its fibres give sets of arrows with compatible precomposition and postcomposition.

**Problem.** In a finitely complete 2-category, the comma object f/f of any morphism f is a 2-congruence, its kernel. In Cat every 2-congruence is a kernel, so Cat is 2-exact.

**How the definition helps.** In Cat the two-sided discrete fibration makes the internal arrows into hom-sets depending functorially on both endpoints (our own). The internal identities and composition assemble these into an ordinary category. The canonical functor into that category has the given congruence as its comma kernel, as required by the 2-exactness theorem (our own).

**nLab:** [2-congruence](https://ncatlab.org/nlab/show/2-congruence), [exact 2-category](https://ncatlab.org/nlab/show/exact+2-category). It says: “But internal categories in Cat are double categories, so we need to somehow cut down the double categories to those that really represent honest 1-categories. These are the 2-congruences.”

**Sources:**

- [Ross Street, Two-dimensional sheaf theory, J. Pure Appl. Algebra 23 (1982) 251–270](https://doi.org/10.1016/0022-4049(82)90101-3)

### Finitely cocomplete categories give a Deligne tensor product that always exists

**Remember:** Work with finitely cocomplete categories, and the tensor product always exists.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18M05, 18A35. arXiv math.CT. Level 4: research.

**Definition.** For small finitely cocomplete k-linear categories A and B over a commutative ring k, Kelly’s tensor represents separately right exact k-bilinear functors. Composition with its universal bifunctor identifies those functors into any finitely cocomplete k-linear C with right exact k-linear functors A ⊠ B → C. Right exact means preserving finite colimits.

**Problem.** Kelly’s tensor product exists for small finitely cocomplete k-linear categories. For finite abelian k-linear categories it agrees with Deligne’s tensor product whenever the latter exists.

**How the definition helps.** Kelly’s existence theorem constructs a universal finitely cocomplete target for separately right exact bilinear functors (our own). The comparison theorem with Deligne’s product identifies the two when the Deligne product exists. The construction therefore applies even when one cannot obtain an abelian target.

**nLab:** [Deligne tensor product of abelian categories](https://ncatlab.org/nlab/show/Deligne+tensor+product+of+abelian+categories). It says: “He argues that in this case it is better to use Kelly's tensor product of finitely cocomplete categories, because it always exists, and it agrees with Deligne's tensor product when the latter exists.”

**Sources:**

- [Ignacio López Franco, Tensor products of finitely cocomplete and abelian categories, Journal of Algebra 396 (2013) 207–219](https://doi.org/10.1016/j.jalgebra.2013.08.015)
- [Alexandru Chirvasitu, Theo Johnson-Freyd, The fundamental pro-groupoid of an affine 2-scheme, Applied Categorical Structures 21 (2013) 469–522, arXiv:1105.3104](https://arxiv.org/abs/1105.3104)

### Gabriel's spectrum of indecomposable injectives recovers a noetherian scheme

**Remember:** Indecomposable injectives are the points, so the category knows its scheme.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 14A15, 14A22. arXiv math.CT, math.AG. Level 4: research.

**Definition.** The Gabriel spectrum of a Grothendieck category is the set of isomorphism classes of indecomposable injective objects. It is defined from the abelian category alone, with no ring or space given.

**Problem.** Two noetherian schemes with equivalent categories of quasi-coherent sheaves are isomorphic. Rosenberg later extended this to all schemes, using a different spectrum.

**How the definition helps.** An equivalence of categories preserves indecomposable injectives, so it gives a bijection of Gabriel spectra automatically. For a noetherian scheme, the indecomposable injectives correspond one-to-one to the points (our own). The work is Gabriel's proof that the topology and the structure sheaf can be recovered from localizing subcategories.

**nLab:** [Des Catégories Abéliennes](https://ncatlab.org/nlab/show/Des+Cat%C3%A9gories+Ab%C3%A9liennes), [Gabriel-Rosenberg theorem](https://ncatlab.org/nlab/show/Gabriel-Rosenberg+theorem). It says: “for any abelian category Gabriel introduces a spectrum whose points are (isomorphism classes of) indecomposable injectives”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “This category encodes all the relevant geometric information about V, and V can be recovered from Qcoh(V) (the Gabriel–Rosenberg reconstruction theorem).”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Gabriel–Popescu makes every Grothendieck category locally presentable

**Remember:** Build every object by filtered colimits from one set of presentable objects.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 18C35, 18E20. arXiv math.CT. Level 4: research.

**Definition.** A locally presentable category has all small colimits and a set 𝒢 of κ-presentable objects for some infinite regular cardinal κ. Every object is a κ-filtered colimit of objects in 𝒢. An object G is κ-presentable if Hom(G, −) preserves κ-filtered colimits.

**Problem.** Every Grothendieck category is locally presentable. So the small object argument and the theory of accessible categories apply to it.

**How the definition helps.** Gabriel–Popescu puts the category inside Mod(R) as a reflective subcategory, and module categories are locally presentable. A reflective subcategory closed under κ-filtered colimits for some κ is again locally presentable, a standard fact of accessible category theory (our own). Beke gives the details of this argument.

**nLab:** [Grothendieck category](https://ncatlab.org/nlab/show/Grothendieck+category). It says: “Any Grothendieck abelian category is locally presentable.”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “As a consequence of Gabriel–Popescu, one can show that every Grothendieck category is locally presentable.”

**Sources:**

- [T. Beke, Sheafifiable homotopy model categories, Math. Proc. Cambridge Philos. Soc. 129 (2000) 447–475](https://doi.org/10.1017/S0305004100004722)
- [M. Takeuchi, A simple proof of Gabriel and Popesco's theorem, J. Algebra 18 (1971) 112–113](https://doi.org/10.1016/0021-8693(71)90130-X)

### In locally noetherian categories, noetherian objects determine the localizing subcategories

**Remember:** A set of noetherian generators supplies the noetherian pieces of every object.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E40, 16D90. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A Grothendieck category is locally noetherian when it has a set of noetherian generators. A noetherian object is one whose subobjects satisfy the ascending chain condition.

**Problem.** In a locally noetherian Grothendieck category 𝒜, sending a localizing subcategory to its noetherian objects is a bijection onto the Serre subcategories of noetherian objects. For a noetherian ring R this matches localizing subcategories of Mod(R) with Serre subcategories of finitely generated modules.

**How the definition helps.** Every object is a directed union of noetherian subobjects (our own). Closure under subobjects and directed unions therefore determines a localizing subcategory from its noetherian members (our own). Gabriel proves that directed unions from a Serre subcategory give the inverse correspondence.

**nLab:** [localizing subcategory](https://ncatlab.org/nlab/show/localizing+subcategory). It says: “the assignment which to any localizing subcategory T⊂A assigns the full subcategory T<sub>Noether</sub>⊂T of noetherian objects in T is the bijection between the localizing subcategories in A and (strongly) thick subcategories in A<sub>Noether</sub>”

**Wikipedia:** [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “A Grothendieck category is called locally Noetherian if it has a set of Noetherian generators; an example is the category of left modules over a left-Noetherian ring.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Left and right abelian envelopes of a thin category are Ringel dual

**Remember:** Extend right exact functors through the right envelope and left exact functors through the left.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16G10. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A right abelian envelope of an exact category E consists of an abelian category R and a right exact functor i from E to R. For every abelian category A, restriction along i identifies the categories of right exact functors R → A and E → A up to equivalence. The left envelope uses left exact functors throughout.

**Problem.** Highest weight categories are exactly the right or left abelian envelopes of thin exact categories. The two envelopes of each thin exact category are Ringel dual.

**How the definition helps.** With the two envelopes, Ringel duality becomes a change of side: the same thin category, with right exact or with left exact universality. In our own explanation, Ringel duality is usually defined through a tilting object, so this gives a new way to state it. The work is proving that the envelopes exist and that they are highest weight categories. The duality for thin categories itself uses derived categories and Serre functors.

**Paper or page:** [Abelian envelopes of exact categories and highest weight categories](https://arxiv.org/abs/2012.15707v4). It says: “Ringel duality is interpreted as a duality between the right and left abelian envelopes of a thin exact category.”

**Sources:**

- [Agnieszka Bodzenta, Alexey Bondal, Abelian envelopes of exact categories and highest weight categories, arXiv:2012.15707 (2024)](https://arxiv.org/abs/2012.15707v4)
- [Agnieszka Bodzenta, Alexey Bondal, Abelian envelopes of exact categories and highest weight categories, Mathematische Zeitschrift (2024)](https://doi.org/10.1007/s00209-024-03543-3)

### Universal properties make abelianizing a localization a Serre quotient

**Remember:** Invert, then abelianize, equals abelianize, then kill kernels and cokernels.

*True by definition. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35. arXiv math.CT. Level 4: research.

**Definition.** A free abelian category on C comes with a functor i from C. For every abelian category A, restriction along i identifies exact functors into A with functors C → A up to equivalence of functor categories.

**Problem.** Let Σ be a set of arrows of a small category C. In its free abelian category, let S be the Serre subcategory generated by the kernels and cokernels of their images. The quotient by S is equivalent to the free abelian category on C\[Σ⁻¹\].

**How the definition helps.** Both categories classify functors out of C that invert Σ (our own). An exact functor inverts each image precisely when it kills its kernel and cokernel (our own). Its kernel is Serre, so this is equivalent to killing S (our own). The universal properties give the equivalence.

**Paper or page:** [Abelian versus triangulated quotients, Proposition 6](https://arxiv.org/abs/2503.07194), [Abelian versus triangulated quotients, Lemma 5](https://arxiv.org/abs/2503.07194). It says: “Then the localisation 𝒞 → 𝒞\[Σ⁻¹\] induces an equivalence Ab(add(𝒞))/𝒮 ⥲ Ab(add(𝒞\[Σ⁻¹\])), where 𝒮 denotes the Serre subcategory generated by the kernels and cokernels of the morphisms in Σ”

**Sources:**

- [Abelian versus triangulated quotients, arXiv:2503.07194 (2025)](https://arxiv.org/abs/2503.07194)

### Well-powered abelian categories have Serre quotients with small Hom-sets

**Remember:** Few subobjects means a set-sized colimit, so small Hom-sets.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E35. arXiv math.CT. Level 4: research.

**Definition.** An abelian category is well-powered when the subobjects of each object form a set, not a proper class. Gabriel defines Hom from X to Y in 𝒜/ℬ as a direct limit of Hom(X′, Y/Y′). The limit runs over subobjects X′ ⊆ X and Y′ ⊆ Y with X/X′ and Y′ in ℬ.

**Problem.** If 𝒜 has small Hom-sets, which are sets rather than proper classes, and is well-powered, then every Serre quotient 𝒜/ℬ has small Hom-sets. Grothendieck categories are well-powered, so their Serre quotients are honest categories.

**How the definition helps.** Gabriel's formula makes each Hom of the quotient a colimit of small Hom-sets indexed by pairs of subobjects. Well-poweredness makes that index a set, so the colimit is a set (our own). Without it, the quoted paper gives an abelian category with small Hom-sets and a Serre quotient whose Hom-sets are not small. For a Grothendieck category, Stacks bounds the number of subobjects by the maps out of a generator.

**Wikipedia:** [Quotient of an abelian category](https://en.wikipedia.org/wiki/Quotient_of_an_abelian_category), [Grothendieck category](https://en.wikipedia.org/wiki/Grothendieck_category). It says: “where the limit is taken over subobjects X′ ⊆ X and Y′ ⊆ Y such that X/X′∈ℬ and Y′ ∈ ℬ.”

**Paper or page:** [Abelian versus triangulated quotients, Proposition 7](https://arxiv.org/abs/2503.07194), [Injectives, Lemma 19.11.1](https://stacks.math.columbia.edu/tag/0E8N). It says: “The abelian category Ab(add(𝒞)) is a 𝔘-category, and there exists a Serre subcategory such that the corresponding quotient is not a 𝔘-category.”

**Sources:**

- [Abelian versus triangulated quotients, arXiv:2503.07194 (2025)](https://arxiv.org/abs/2503.07194)
- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)

### Barr's embedding lets statements about regular categories be checked in sets

**Remember:** If it holds in sets with finite limits and images, it holds regularly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E20 (Categorical embedding theorems), 18E08. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A regular category has finite limits, and each arrow factors as a regular epimorphism followed by a monomorphism. Pullback preserves regular epimorphisms. A regular functor preserves finite limits and regular epimorphisms.

**Problem.** Every small regular category embeds fully, faithfully and regularly into a presheaf category. Regular sequents valid in sets therefore hold in every small regular category. For example, regular epimorphisms compose.

**How the definition helps.** Barr’s embedding preserves and reflects the subobject inclusions expressed by regular sequents (our own). Presheaves compute finite limits and images objectwise, so validity in sets gives validity there (our own).

**nLab:** [Barr embedding theorem](https://ncatlab.org/nlab/show/Barr+embedding+theorem). It says: “by Barr's embedding theorem, if a category is small and regular, then there exists an embedding, which is a full, faithful and regular, into a category of presheaves over some small category.”

**Sources:**

- [M. Barr, Exact categories, in Exact Categories and Categories of Sheaves, Lecture Notes in Math. 236, Springer (1971) 1–120](https://doi.org/10.1007/BFb0058580)

### Gabriel–Popescu makes Grothendieck categories exactly quotients of module categories

**Remember:** Grothendieck categories are module categories with some modules declared zero.

*Makes the theorem clean to state or prove.* MSC 18E20 (Categorical embedding theorems), 18E10, 18E35. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A Grothendieck category is an abelian category with all coproducts, exact filtered colimits and a generator U, an object such that Hom(U, −) is faithful. A localizing subcategory ℬ of Mod(R) is a Serre subcategory whose quotient functor Mod(R) → Mod(R)/ℬ has a right adjoint.

**Problem.** An abelian category is a Grothendieck category exactly when it is equivalent to Mod(R)/ℬ for a ring R and a localizing subcategory ℬ. One can take R = End(U) and G = Hom(U, −).

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

**How the definition helps.** Dropping exact filtered colimits and keeping a projective generator gives a class with its own embedding theorem, parallel to Gabriel–Popescu. The projective generator P gives the exact functor Hom(P, −) into modules over End(P) (our own). The work is showing that the image is cut out by Hom and Ext conditions.

**Paper or page:** [Abelian right perpendicular subcategories in module categories, Corollary 4.11](https://arxiv.org/abs/1705.04960). It says: “The following classes of abelian categories (viewed as abstract categories irrespectively of a particular embedding into a category of modules) coincide with each other, and with the class of all locally presentable abelian categories with a projective generator”

**Sources:**

- [L. Positselski, Abelian right perpendicular subcategories in module categories, arXiv:1705.04960 (2022)](https://arxiv.org/abs/1705.04960)

### The Gabriel–Quillen embedding moves diagram lemmas into exact categories

**Remember:** First arrows survive pushout, last arrows survive pullback, and each kind composes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E20 (Categorical embedding theorems), 18E05, 18E10. arXiv math.CT, math.KT. Level 4: research.

**Definition.** An exact structure on an additive category selects kernel–cokernel pairs, called conflations, closed under isomorphism and including all split pairs. First arrows compose and admit pushouts along arbitrary maps that remain first arrows. Last arrows compose and admit pullbacks along arbitrary maps that remain last arrows.

**Problem.** Every small exact category embeds fully and faithfully into an abelian category. The image is closed under extensions, and a sequence is a conflation exactly when it is short exact there. So the five lemma holds for conflations in every small exact category.

**How the definition helps.** Quillen's axioms are exactly what make the embedding into left exact functors detect conflations, so lemmas pass across. Given a map of conflations whose outer maps are isomorphisms, the five lemma in the abelian category makes the middle map invertible (our own). A fully faithful functor reflects isomorphisms, so the middle map is invertible in the exact category (our own). The work goes into showing that left exact functors form an abelian category with the stated properties.

**Wikipedia:** [Exact category](https://en.wikipedia.org/wiki/Exact_category). It says: “in which E is a natural subcategory (via the Yoneda embedding, since Hom is left exact), stable under extensions, and in which a sequence is in E if and only if it is exact in A”

**Sources:**

- [D. Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973)](https://doi.org/10.1007/BFb0067053)

### Left modular torsion classes are exactly those splitting every brick

**Remember:** Test the two sides on bricks, not on every indecomposable module.

*Makes the theorem clean to state or prove.* MSC 18E40 (Torsion theories, radicals), 16G10. arXiv math.RT. Level 4: research.

**Definition.** A brick is a module whose endomorphisms form a division ring. A torsion pair of module classes splits each module into a torsion submodule and a torsion-free quotient. The pair is brick-splitting if each brick lies wholly in one of the two classes.

**Problem.** For a finite-dimensional algebra, a torsion class T is left modular exactly when its torsion pair is brick-splitting. Left modular means that (U ∨ T) ∧ V = U ∨ (T ∧ V) in the lattice of torsion classes whenever U ⊆ V.

**How the definition helps.** The brick test replaces a lattice identity over pairs of torsion classes with a membership test on modules. The paper connects the test to the arrows between adjacent torsion classes, which carry brick labels. Proving that the position of those arrows gives left modularity in both directions still takes work.

**Paper or page:** [Brick-splitting Torsion Pairs and Left Modularity](https://arxiv.org/abs/2506.13602v2). It says: “A torsion pair is called brick-splitting if any given brick is either torsion or torsion-free with respect to that torsion pair.”

**Sources:**

- [Sota Asai, Osamu Iyama, Kaveh Mousavand, Charles Paquette, Brick-splitting Torsion Pairs and Left Modularity, arXiv:2506.13602 (2025)](https://arxiv.org/abs/2506.13602v2)

### Adjunctions of toposes are homotopy equivalences

**Remember:** The fundamental ∞-groupoid sees a homotopy equivalence as an equivalence.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18N60, 55P55. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A geometric morphism is an adjoint pair whose left adjoint preserves finite limits. It is a weak homotopy equivalence if its induced map on shapes is an equivalence.

**Problem.** Every local geometric morphism and every totally connected geometric morphism is a homotopy equivalence of toposes.

**How the definition helps.** Each specified morphism belongs to an adjunction of toposes (our own). Shape carries the unit and counit to homotopies, giving mutually inverse maps up to homotopy (our own).

**nLab:** [homotopy equivalence of toposes](https://ncatlab.org/nlab/show/homotopy+equivalence+of+toposes). It says: “One important thing to note is that any adjunction in the 2-category Topos induces a homotopy equivalence in any of the above senses.”

**Sources:**

- [M. Artin, B. Mazur, Etale Homotopy, Lecture Notes in Mathematics 100, Springer (1969)](https://doi.org/10.1007/BFb0080957)

### Closed condensed subsets of a compactly generated space are its closed subspaces

**Remember:** Closed means closed on every profinite probe, exactly like compactly generated closedness.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54D50. arXiv math.CT, math.GN. Level 4: research.

**Definition.** Let S be a profinite set (compact, Hausdorff and totally disconnected) with a map to a condensed set A. A subobject Z of A is closed if its pullback to every such S is a closed subset. This tests closedness on compact probes, as a compactly generated topology does.

**Problem.** For a compactly generated space T, closed subspaces Z ⊂ T correspond bijectively to closed condensed subsets of T̲, by Z ↦ Z̲. Here T̲ is the condensed set S ↦ C(S, T).

**How the definition helps.** A subset of a compactly generated space is closed when its preimage in every compact Hausdorff probe is closed, and profinite probes suffice. Closed condensed subsets are defined by the same test (our own wording of the standard definition), so the two notions match on the underlying set. The work left is to see that a closed condensed subset is the condensed set of its underlying subspace. That uses that maps S → T landing in Z are continuous into Z with the subspace topology.

**Paper or page:** [The condensed homotopy type of a scheme](https://arxiv.org/abs/2510.07443). It says: “Sending a closed subspace Z ⊂ T to Z → T induces an order-preserving bijection between closed subspaces of T and closed condensed subsets of T.”

**Sources:**

- [The condensed homotopy type of a scheme, arXiv:2510.07443](https://arxiv.org/abs/2510.07443)

### Condensed abelian groups form an abelian category

**Remember:** Glue abelian-group sections along finite jointly surjective families of profinite probes.

*Rules out counterexamples.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18E10, 18F20. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A condensed abelian group is a sheaf of abelian groups on profinite sets for the topology of finite jointly surjective families.

**Problem.** Condensed abelian groups form an abelian category, with all limits and colimits and enough compact projective objects. Topological abelian groups do not form an abelian category.

**How the definition helps.** Abelian sheaves form an abelian category with small limits and colimits (our own). Free condensed abelian groups on extremally disconnected profinite sets supply compact projective generators (our own). For topological groups, the continuous identity from discrete ℝ to usual ℝ has zero kernel and cokernel but no continuous inverse (our own). In condensed groups it has nonzero cokernel (our own).

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics), [condensed abelian group](https://ncatlab.org/nlab/show/condensed+abelian+group), [condensed set](https://ncatlab.org/nlab/show/condensed+set), [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “For instance, the category of topological abelian groups is not abelian, which means for instance that it lacks a good theory of exact sequences. But the category of condensed abelian groups is abelian”

**Sources:**

- [Peter Scholze (all results joint with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Clark Barwick, Peter Haine, Pyknotic objects, I. Basic notions, arXiv:1904.09966 (2019)](https://arxiv.org/abs/1904.09966)

### Four conditions on a site give a cohesive topos

**Remember:** Remember the terminal object, connected covers, points everywhere, and sifted opposite.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A cohesive site is a small site with a terminal object, connected covering sieves, and a global point of every object. Its opposite must also be sifted, meaning that colimits of that shape commute with finite products in sets.

**Problem.** The sheaf topos on a cohesive site is cohesive over sets. Its adjoints form the chain Π₀ ⊣ Disc ⊣ Γ ⊣ CoDisc, where Π₀ preserves finite products. Each connected piece has a global point.

**How the definition helps.** Connected covering sieves make constant presheaves into sheaves, so taking the colimit gives the left adjoint to Disc (our own). Cosiftedness makes this adjoint preserve finite products (our own). Evaluation at the terminal object gives global sections and has the codiscrete right adjoint (our own). Points of site objects ensure that every piece has a point (our own).

**nLab:** [cohesive site](https://ncatlab.org/nlab/show/cohesive+site). It says: “For C a cohesive site, the category of sheaves Sh(C) on C is a cohesive topos over Set for which pieces have points.”

**Sources:**

- [U. Schreiber, Differential cohomology in a cohesive infinity-topos, arXiv:1310.7930 (2013)](https://arxiv.org/abs/1310.7930)

### In cohesive sites, finite products make the shape functor preserve products

**Remember:** Cosifted means colimits over the opposite category preserve finite products.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 4: research.

**Definition.** A category C is cosifted if colimits indexed by Cᵒᵖ commute with all finite products in sets. A site is locally connected here if every covering sieve is connected.

**Problem.** On a locally connected site C, the functor Π₀ : Sh(C) → Set preserves finite products exactly when C is cosifted. In particular, this holds when C has finite products.

**How the definition helps.** The axiom on the site is a restatement of the property that Π₀ needs. Local connectedness makes constant presheaves into sheaves, so Π₀ exists and is the colimit over Cᵒᵖ. Colimits over Cᵒᵖ commute with finite products exactly when C is cosifted. The rest of cohesiveness still needs short separate arguments.

**nLab:** [cohesive site](https://ncatlab.org/nlab/show/cohesive+site), [categories with finite products are cosifted](https://ncatlab.org/nlab/show/categories+with+finite+products+are+cosifted). It says: “The condition that Π₀ preserves finite products is precisely the condition that C be a cosifted category.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos (2013), arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Johnstone's topological topos makes geometric realization preserve finite limits

**Remember:** The topological topos is the world of spaces seen through convergent sequences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F60, 55U10. arXiv math.CT, math.GN. Level 4: research.

**Definition.** Johnstone’s topological topos consists of sheaves for the canonical topology on the full subcategory of spaces with objects 1 and ℕ⁺. Here 1 is a point and ℕ⁺ is the one-point compactification of discrete ℕ.

**Problem.** In the topological topos ℰ, geometric realization sSet → ℰ is the inverse image of a geometric morphism. So it preserves finite limits.

**How the definition helps.** In the topological topos, realization is an inverse image, and inverse images preserve finite limits. Johnstone points out that this fails for the big topos on Top and for Lawvere's topos for continuum mechanics. The price is that the objects are generalized sequential spaces, not all topological spaces.

**nLab:** [Johnstone's topological topos](https://ncatlab.org/nlab/show/Johnstone%27s+topological+topos), [nice category of spaces](https://ncatlab.org/nlab/show/nice+category+of+spaces). It says: “following an idea by Joyal, the topological topos ℰ ≔ Sh<sub>J</sub>(Σ) allows one to represent the geometric realization functor sSet → ℰ as the inverse image of a geometric morphism”

**Sources:**

- [Peter Johnstone, On a topological topos, Proc. London Math. Soc. (3) 38 (1979) 237–271](https://doi.org/10.1112/plms/s3-38.2.237)

### Lex total categories make Giraud's theorem a property of the Yoneda embedding

**Remember:** Lex total means 𝒞 is a left exact reflection of its own presheaves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18A40. arXiv math.CT. Level 4: research.

**Definition.** A locally small category 𝒞 is total if its Yoneda embedding 𝒞 → \[𝒞ᵒᵖ, Set\] has a left adjoint. It is lex total if that left adjoint also preserves finite limits. 'Lex' is short for left exact, which means 'preserves finite limits'.

**Problem.** A lex total category is a Grothendieck topos exactly when it has a small set of generators (Street and Walters).

**How the definition helps.** Lex totality states Giraud's property for 𝒞 itself, so no site has to be chosen. Giraud's theorem presents Grothendieck toposes as left exact localizations of presheaf toposes on some small site. Lex totality asks for this with the large presheaf category of 𝒞 itself. So the only remaining condition is about size.

**nLab:** [lex total category](https://ncatlab.org/nlab/show/lex+total+category). It says: “A lex total category ℰ is a Grothendieck topos iff ℰ has a small set of generators.”

**Sources:**

- [Ross Street, Notions of topos, Bulletin of the Australian Mathematical Society 23 (1981) 199–208](https://doi.org/10.1017/S000497270000705X)

### Probing by profinite sets embeds compactly generated spaces fully faithfully

**Remember:** A compactly generated topology is exactly what maps from compact spaces see.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54D50, 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A space X is compactly generated if every subset with closed preimage under every continuous map from a compact Hausdorff space is closed. Its condensed set X̲ sends each profinite set S to the set of continuous maps S → X.

**Problem.** For compactly generated spaces X and arbitrary Y, maps of condensed sets X̲ → Y̲ are the same as continuous maps X → Y.

**How the definition helps.** Naturality at points determines a transformation by its underlying function, whose composites with all profinite probes are continuous (our own). Every compact Hausdorff space is a quotient of a profinite set, so the function passes every compact Hausdorff test (our own). Compact generation then gives continuity (our own). For κ-condensed sets use κ-small probes and κ-compactly generated X.

**nLab:** [condensed set](https://ncatlab.org/nlab/show/condensed+set). It says: “The forgetful functor from the category of topological spaces to κ-condensed sets is a faithful functor. It becomes fully faithful when restricted to κ-compactly generated spaces.”

**Paper or page:** [Arithmetic duality for p-adic pro-étale cohomology of analytic curves](https://arxiv.org/abs/2308.07712). It says: “restricted to compactly generated topological spaces is fully faithful.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Profinite covers let condensed sets be evaluated on all compact Hausdorff spaces

**Remember:** Profinite sets cover every compact Hausdorff space and cover overlaps too.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20, 54D30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A condensed set is a sheaf on profinite sets (compact, Hausdorff and totally disconnected), where a cover is a finite jointly surjective family of maps. The same kind of cover defines a site on all compact Hausdorff spaces. A site is a category with a chosen notion of cover.

**Problem.** Restriction from compact Hausdorff spaces to profinite sets is an equivalence of their categories of sheaves. So a condensed set has a well-defined value on every compact Hausdorff space, such as the interval \[0, 1\].

**How the definition helps.** Every compact Hausdorff space S is the image of a profinite set S′, such as the Stone–Čech compactification of S taken as a discrete set. The fibre product S′ ×ₛ S′ is closed in S′ × S′, so it is again profinite. So the sheaf condition for the cover S′ → S fixes the value on S from values on profinite sets. The remaining work is the comparison lemma, which says that a dense subcategory of a site has the same sheaves.

**nLab:** [condensed set](https://ncatlab.org/nlab/show/condensed+set). It says: “In all three cases, morphisms are given by continuous maps and covering families are given by finite families of jointly surjective continuous maps.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Quasiseparatedness excludes ℝ modulo ℚ from compact Hausdorff condensed sets

**Remember:** Compact plus closed equivalence relation gives compact Hausdorff; ℝ/ℚ fails the second.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54D30, 54B15. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A condensed set T is quasicompact if some profinite set S (compact, Hausdorff and totally disconnected) maps onto it. It is quasiseparated if for any two profinite sets S₁, S₂ over T the fibre product S₁ ×ₜ S₂ is quasicompact. For a space X, X̲ is the condensed set S ↦ C(S, X).

**Problem.** The functor X ↦ X̲ is an equivalence from compact Hausdorff spaces to quasicompact quasiseparated condensed sets.

**How the definition helps.** For a profinite cover S→T, quasiseparatedness makes S×ₜS a compact image in the Hausdorff space S×S (our own). The relation is therefore closed, so its quotient is compact Hausdorff (our own). The condensed quotient ℝ/ℚ for discrete ℚ is quasicompact because the interval covers it (our own). Its interval overlap has infinitely many nonempty disjoint open pieces indexed by rational differences, so it fails quasiseparatedness (our own).

**Paper or page:** [Arithmetic duality for p-adic pro-étale cohomology of analytic curves](https://arxiv.org/abs/2308.07712). It says: “induces an equivalence between the category of compact Hausdorff spaces and qcqs (i.e., quasi-compact quasi-separated) condensed sets.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Arithmetic duality for p-adic pro-étale cohomology of analytic curves, arXiv:2308.07712](https://arxiv.org/abs/2308.07712)

### Splitting covers turn condensed sets into finite-product-preserving functors

**Remember:** Where every cover splits, the sheaf condition is only about finite disjoint unions.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54G05, 18F20. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A compact Hausdorff space is extremally disconnected if the closure of every open set is open. Gleason’s theorem says equivalently that every continuous surjection onto it from a compact Hausdorff space has a continuous section.

**Problem.** Fix an uncountable strong limit cardinal κ. κ-condensed sets correspond to contravariant set-valued functors on κ-small extremally disconnected compact Hausdorff spaces sending finite disjoint unions to products. This includes the empty union.

**How the definition helps.** For a finite cover of an extremally disconnected space, the map from the disjoint union admits a section (our own). Split surjections satisfy descent for every presheaf, leaving only the finite disjoint union condition (our own). Every κ-small profinite set admits a κ-small extremally disconnected cover, so the comparison lemma identifies the sheaves (our own).

**nLab:** [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “Take 𝒞 ⊂ Top to be the subcategory of tiny compact hausdorff spaces that are extremally disconnected, called Stonean spaces. A pyknotic set carries finite coproducts to products in Set.”

**Wikipedia:** [Extremally disconnected space](https://en.wikipedia.org/wiki/Extremally_disconnected_space). It says: “the projective objects of the category of compact Hausdorff spaces are exactly the extremally disconnected compact Hausdorff spaces.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Andrew M. Gleason, Projective topological spaces, Illinois Journal of Mathematics 2 (1958), 482–489](https://doi.org/10.1215/ijm/1255454110)

### Superextensive sites let you sheafify for single covers after imposing coproducts

**Remember:** Glue the covering pieces into one coproduct, and treat coproducts separately.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B50, 18F20. arXiv math.CT. Level 4: research.

**Definition.** On a category with disjoint, pullback-stable finite coproducts, a finitary superextensive topology contains all finite coproduct covers. Every covering sieve contains a finite covering family.

**Problem.** Let T be a superextensive topology whose covers are stable under finite coproducts. Then sheafifying an extensive sheaf for the single covers of T gives an extensive sheaf, and hence a T-sheaf.

**How the definition helps.** Extensivity splits a single cover of a coproduct into covers of its summands (our own). Closure under finite coproducts lets covers of the summands recombine (our own). The sheafification construction therefore preserves the conversion of finite coproducts to products (our own). This supplies descent for covering families once descent for single covers holds (our own).

**nLab:** [superextensive site](https://ncatlab.org/nlab/show/superextensive+site). It says: “In general, it is not true, for two Grothendieck topologies T₁ and T₂ on the same category, that T₂-sheafification preserves T₁-sheaves”

**Sources:**

- [David M. Roberts, Internal categories, anafunctors and localisations, Theory and Applications of Categories 26 (2012), arXiv:1101.2363](https://arxiv.org/abs/1101.2363)

### The atomic topology works on any category, without the Ore condition

**Remember:** In the atomic topology, any single arrow into an object covers it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 4: research.

**Definition.** On a small category C, the generated atomic topology is the least Grothendieck topology in which every arrow generates a covering sieve. A sieve on X is a family of arrows into X closed under precomposition.

**Problem.** For every small category C with the generated atomic topology, its sheaf topos is an atomic Grothendieck topos.

**How the definition helps.** Generating a topology makes every arrow cover, even where the right Ore condition fails. Restricting to objects where the empty sieve does not cover gives a site satisfying the right Ore condition (our own). The comparison lemma reduces the claim to the classical atomic site theorem (our own).

**nLab:** [atomic site](https://ncatlab.org/nlab/show/atomic+site). It says: “it was observed by O. Caramello (2012) that the atomic topology can in fact be defined on arbitrary categories not only on those satisfying the Ore condition.”

**Sources:**

- [Olivia Caramello, Atomic toposes and countable categoricity, Applied Categorical Structures 20 (2012) 379–391, arXiv:0811.3547](https://arxiv.org/abs/0811.3547)

### The Yoneda internal Hom makes condensed sets cartesian closed

**Remember:** Define maps over S as maps from A × S, and currying is automatic.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 54C35, 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** Let S be a profinite set, that is, a compact Hausdorff totally disconnected space. For condensed sets A and B, the internal Hom is the condensed set with Hom(A, B)(S) = Hom(A × S̲, B). This is forced by the Yoneda lemma if Hom is to be right adjoint to A × −.

**Problem.** Condensed sets form a cartesian closed category. For Hausdorff X and Y with X compactly generated, Hom(X̲, Y̲) is the condensed set of C(X, Y) with the compact-open topology. Here X̲ means S ↦ C(S, X).

**How the definition helps.** The adjunction Hom(T, Hom(A, B)) = Hom(T × A, B) holds for T = S̲ by definition. It then holds for every T, since every condensed set is a colimit of profinite ones and products commute with colimits. Topological spaces are not cartesian closed, and their exponential law needs a condition such as local compactness. The comparison with C(X, Y) uses the classical exponential law for compact Hausdorff S and the full faithfulness on compactly generated spaces.

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “Let A and B be Hausdorff topological spaces, where A is compactly generated. Then, Hom(A, B) = C(A,B) where C(A,B) is given the compact-open topology.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers, arXiv:2109.07816](https://arxiv.org/abs/2109.07816)

### In a (2,1)-topos, every principal bundle is locally trivial

**Remember:** Recover the base as the homotopy quotient of the total space.

*True by definition. Confidence: medium.* MSC 18F15 (Abstract manifolds and fiber bundles (category-theoretic aspects)), 18N60, 18F20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** For a group object G in a (2,1)-topos, a principal G-bundle over X is a G-object P with an equivalence P//G ≃ X over X. Here P//G denotes the homotopy quotient, and the map to X is induced by the bundle projection.

**Problem.** In a (2,1)-topos, every G-principal bundle is locally trivial. In topological spaces, a free action with a quotient, a Cartan principal bundle, need not be locally trivial.

**How the definition helps.** Effectiveness of the action groupoid gives a cover P → X and identifies P ×ₓ P with P × G (our own). Thus this cover trivializes the bundle (our own). Karube’s free topological quotient of an infinite product of circles by coordinatewise signs has no local sections (our own).

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle), [principal infinity-bundle](https://ncatlab.org/nlab/show/principal+infinity-bundle). It says: “every G-principal bundle is locally trivial in a (2,1)-topos H; accordingly there is no mismatch between the various definitions anymore as in the context of topological spaces”

**Sources:**

- [Thomas Nikolaus, Urs Schreiber, Danny Stevenson, Principal ∞-bundles – General theory, J. Homotopy Relat. Struct. 10 (2015) 749–801, arXiv:1207.0248](https://arxiv.org/abs/1207.0248)
- [Takashi Karube, On the local cross-sections in locally compact groups, J. Math. Soc. Japan 10 (1958) 343–347](https://doi.org/10.2969/jmsj/01040343)

### Classifying maps pull 2-bundles back

**Remember:** Pull back the bundle by precomposing its classifying map.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N10. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Fix a smooth 2-group G and its universal principal 2-bundle EG → BG. A map f: X → BG classifies P if its homotopy pullback of EG is equivalent to P over X.

**Problem.** If X → BG classifies a principal 2-bundle, the composite Y → X → BG classifies its pullback to Y.

**How the definition helps.** Two successive pullbacks of the universal bundle give the pullback along the composite. In our own comparison, a description by transition maps requires pulling back their compatibility isomorphisms as well. The classification theorem identifies those local data with maps to BG.

**nLab:** [principal 2-bundle](https://ncatlab.org/nlab/show/principal+2-bundle). It says: “This says that principal 2-bundles are classified by Cech cohomology with coefficients in deloopings of (sheaves of) 2-groups.”

**Paper or page:** [Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1). It says: “is a principal 𝒢-2-bundle over 𝒵”

**Sources:**

- [Caviglia, Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1)

### Coherent actions descend gerbes

**Remember:** Compare successive actions with multiplication, coherently over triples.

*Rules out counterexamples.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A weak G-action on a bundle gerbe is a smooth equivalence between its pullbacks along the action and projection G × M → M. It includes unit data and a smooth comparison isomorphism between successive actions and the action of their product. These comparisons satisfy the unit laws and the pentagon.

**Problem.** On a principal group bundle, a gerbe with a weak action comes from a gerbe on the quotient, up to equivalence.

**How the definition helps.** Each pair in one fiber differs by a unique group element, so the comparison maps give the gluing rules. The descent theorem proves these rules produce a gerbe on the quotient. In our own example, every translation of the three-sphere group SU(2) preserves the gerbe classified by a generator of its third integral cohomology. That class cannot come from the quotient point.

**Paper or page:** [Equivariant bundle gerbes](https://arxiv.org/abs/1506.07931). It says: “Let M → N be a principal G-bundle. If 𝒢 is a bundle gerbe on M acted on weakly by G then 𝒢 descends to a bundle gerbe on N”

**Sources:**

- [M. K. Murray, D. M. Roberts, D. Stevenson and R. F. Vozzo, Equivariant bundle gerbes](https://arxiv.org/abs/1506.07931)

### Condensed epimorphisms let Hochschild–Serre hold for topological group extensions

**Remember:** Ask compact families to lift, and the spectral sequence for subgroups works.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 20J06, 18G40. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For an exact topological group extension with quotient Q, condensed surjectivity means every continuous f from a profinite S to Q lifts locally. Some continuous surjection S′ → S from a profinite set admits a continuous lift S′ → G of the composite S′ → Q.

**Problem.** Consider a topological group extension with kernel H carrying the subspace topology and quotient Q carrying the quotient topology. If G̲ → Q̲ is epic, every topological G-module A has the condensed Hochschild–Serre spectral sequence ℍᵖ(Q, ℍᵐ(H, A)) ⇒ ℍᵖ⁺ᵐ(G, A).

**How the definition helps.** With the epimorphism condition, Q̲ is the quotient of G̲ by H̲ in condensed sets (our own summary). So the classifying topos of H is the slice of the classifying topos of G over Q̲. The spectral sequence is then the Grothendieck spectral sequence for H-invariants followed by Q-invariants. For continuous cochains the classical theorem usually needs extra conditions, such as a continuous local section of G → Q.

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “Suppose that G → Q is an epimorphism in 𝒞. Let A be a topological G-module. Then the condensed abelian group ℍ<sup>q</sup>(B<sub>H</sub>, i<sup>\*A</sup>) carries a Q-action for all q, and there is an Hochschild-Serre spectral sequence”

**Sources:**

- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)

### Condensed group cohomology is a derived functor matching continuous cochains

**Remember:** Derived invariants of condensed modules give long exact sequences and continuous cochains.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 20J06, 18G10. arXiv math.AG, math.CT. Level 4: research.

**Definition.** For a condensed group G, condensed group cohomology ℍⁿ(G, A) is the n-th derived functor of invariants on condensed G-modules. For a fixed size bound κ, these modules form a Grothendieck abelian category, so the derived functors exist.

**Problem.** Every short exact sequence of condensed G-modules gives a long exact cohomology sequence. For topological G and A, assume every Gⁿ is compactly generated and A has no higher sheaf cohomology there. Continuous cochains then compute the underlying cohomology groups.

**How the definition helps.** Right derived invariants give the long exact sequence (our own). Under the acyclicity hypothesis the bar spectral sequence reduces to its continuous cochain row after evaluation at a point (our own).

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “In particular, the underlying abelian group H<sup>q</sup>(B<sub>G</sub>, A) = ℍ<sup>q</sup>(B<sub>G</sub>, A)(∗) coincides with continuous group cohomology.”

**Sources:**

- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)

### Connected bands preserve loop gerbes

**Remember:** The automorphism groups form a locally trivial bundle with connected fibers.

*Rules out counterexamples.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 4: research.

**Definition.** An abelian gerbe has a band, the sheaf of abelian automorphism groups identified by local isomorphisms of objects. A locally trivial band with connected Lie fibers is a group bundle locally isomorphic to a product with a connected abelian Lie group.

**Problem.** For a finite-dimensional abelian gerbe on a finite-dimensional manifold, a locally trivial band of connected Lie groups ensures the loop stack is a gerbe. Its base is the free loop space, and its band consists of smooth sections of the original band along each loop.

**How the definition helps.** Connected fibers allow local isomorphisms along a loop to join up around the circle. The theorem proves smooth local existence and comparison for families of loops. In our own counterexample, take the gerbe of principal two-element group bundles over a point. Its loops include both double covers of the circle, which are not isomorphic.

**Paper or page:** [Smooth loop stacks of differentiable stacks and gerbes](https://arxiv.org/abs/1602.07973). It says: “Then 𝕃X is an abelian L𝒜-gerbe on LM.”

**Sources:**

- [D. M. Roberts and R. F. Vozzo, Smooth loop stacks of differentiable stacks and gerbes](https://arxiv.org/abs/1602.07973)

### Equivariance splits gerbe symmetries

**Remember:** A coherent lift of every group element gives a splitting.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 53C08. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Let Sym<sub>G</sub>(𝒢) be the smooth 2-group of symmetries of a gerbe covering the given G-action. A splitting is a morphism of smooth 2-groups G → Sym<sub>G</sub>(𝒢) whose composite with projection is isomorphic to the identity as a monoidal morphism.

**Problem.** For a connected Lie group acting smoothly on the base, the gerbe admits a compatible action exactly when its symmetry 2-group splits over the group.

**How the definition helps.** A splitting chooses a symmetry over each group element and supplies compatible isomorphisms for products, precisely the data of a group action on the gerbe. A splitting here varies smoothly over the group. Our own comparison replaces separate multiplication diagrams with a single map of smooth 2-groups. The theorem constructs the smooth extension in which this map takes values.

**Paper or page:** [Smooth 2-Group Extensions and Symmetries of Bundle Gerbes](https://arxiv.org/abs/2004.13395). It says: “The gerbe 𝒢 admits a G-equivariant structure if and only if there exists a morphism G̲ ⟶ Sym<sub>G</sub>(𝒢) of smooth 2-groups which splits the extension”

**Sources:**

- [S. Bunk, L. Müller and R. J. Szabo, Smooth 2-Group Extensions and Symmetries of Bundle Gerbes](https://arxiv.org/abs/2004.13395)

### Fréchet complexes are condensed-exact exactly when algebraically exact

**Remember:** Each profinite family lifts after a profinite cover.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 46A04, 18E10. arXiv math.CT, math.FA. Level 4: research.

**Definition.** A continuous linear map V → W is a condensed epimorphism if every continuous map S → W from a profinite set lifts locally. This means there exist a profinite surjection S′ → S and a continuous map S′ → V inducing the composite S′ → W.

**Problem.** A complex of Fréchet spaces is exact as condensed ℝ-modules if and only if it is exact as a complex of vector spaces.

**How the definition helps.** Kernels are closed, so algebraic exactness gives continuous surjections of Fréchet spaces onto the kernels (our own). The Fréchet compact lifting theorem puts each compact subset of the target in the image of a compact subset (our own). Pulling back that compact lift and taking a profinite cover gives local lifts (our own). Conversely, evaluation at a point detects the required algebraic lifts (our own).

**Paper or page:** [Duality for condensed cohomology of the Weil group of a p-adic field](https://arxiv.org/abs/2402.05565). It says: “A complex of Frechet (resp. Banach) spaces is exact as a complex of condensed ℝ-modules if and only if it is exact on the underlying vector spaces.”

**Sources:**

- [Duality for condensed cohomology of the Weil group of a p-adic field, arXiv:2402.05565](https://arxiv.org/abs/2402.05565)

### Functorial resolutions of abelian groups pass to condensed groups by sheafifying

**Remember:** A resolution natural in A works in every topos after sheafifying.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A Breen–Deligne resolution resolves every abelian group A by finite sums of free groups ℤ\[Aʳ\] on powers of A. It is natural in A, and the exponents do not depend on A. For a condensed abelian group M, ℤ\[Mʳ\] is the free condensed abelian group on the condensed set Mʳ.

**Problem.** Every condensed abelian group M has a resolution ⋯ → ℤ\[M³\] ⊕ ℤ\[M²\] → ℤ\[M²\] → ℤ\[M\] → M → 0. Its terms are finite sums of free condensed abelian groups ℤ\[Mʳ\] on powers of M.

**How the definition helps.** The resolution is natural in A, so applying it to each group M(S) gives a resolution of presheaves. Sheafification is exact, so it gives a resolution of M. All the work is in the existence of the natural resolution for abstract abelian groups. Breen and Deligne constructed it, and Scholze's notes sketch a proof with stable homotopy theory.

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816), [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “that is functorial in A and the rᵢ,ⱼ are independent of the choice of A.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Hypercovers by extremally disconnected sets give projective resolutions

**Remember:** Cover each matching object by an extremally disconnected space.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G10, 54G05. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An extremally disconnected hypercover of a compact Hausdorff space S is an augmented simplicial compact Hausdorff space S• → S with extremally disconnected terms. For every n ≥ 0, the matching map from Sₙ onto compatible boundaries in degree n is surjective, with matching object S in degree zero.

**Problem.** Let S• → S be a hypercover of a compact Hausdorff space by extremally disconnected spaces. The augmented alternating chain complex ℤ\[S•\] → ℤ\[S\] is a projective resolution. Hence Extⁱ(ℤ\[S\],M) is the degree-i cohomology of the cochain complex M(S•).

**How the definition helps.** The terms are projective by Gleason's theorem, since each Sₙ is extremally disconnected. The complex is exact because a hypercover is a covering in every degree, so the free sheaves on it form an exact complex. The work is the existence of such hypercovers, which uses that every compact Hausdorff space is covered by a Stone–Čech compactification.

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

**Remember:** Locally constant maps from a limit of finite sets factor through a finite stage.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18F10. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A condensed set is discrete if it is isomorphic to the condensed set of locally constant maps S → X for some set X. This is the constant sheaf, left adjoint to taking the underlying set X(∗).

**Problem.** For every cofiltered presentation S = lim Sᵢ by finite discrete sets, consider the canonical map colim X(Sᵢ) → X(S). A condensed set X is discrete exactly when every such map is bijective.

**How the definition helps.** Continuous maps from a profinite limit to a discrete set factor through finite stages, with equality detected at a later stage (our own). For finite F, the sheaf condition identifies X(F) with functions F → X(∗) (our own). The colimit formula therefore identifies X with the sheaf of locally constant maps into X(∗) (our own).

**Paper or page:** [A formal characterization of discrete condensed objects](https://arxiv.org/abs/2410.17847). It says: “A condensed set X is discrete if and only if for every profinite set S = lim Sᵢ, the canonical map X(S) → colim X(Sᵢ) is an isomorphism.”

**Sources:**

- [A formal characterization of discrete condensed objects, arXiv:2410.17847](https://arxiv.org/abs/2410.17847)

### On the test spaces ℝⁿ alone, BG is already a stack

**Remember:** Every ℝⁿ is contractible, so every G-bundle on it is trivial.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N60, 55R35. arXiv math.CT, math.DG. Level 4: research.

**Definition.** For a Lie group G, the presheaf BG assigns each Cartesian space U the one-object groupoid with automorphism group C∞(U,G). Restriction acts by precomposition.

**Problem.** On Cartesian spaces with good open covers, BG satisfies descent. On all manifolds, descent can fail when G admits a nontrivial principal bundle. Its stackification there is the stack of principal G-bundles.

**How the definition helps.** Bundle descent identifies gluing data on a cover with principal bundles on the base (our own). Every principal G-bundle on ℝⁿ is trivial, and its automorphisms in a trivialization are smooth G-valued functions (our own). Thus the comparison from BG is an equivalence on every Cartesian space (our own).

**nLab:** [smooth infinity-stack](https://ncatlab.org/nlab/show/smooth+infinity-stack). It says: “But restricted to the site CartSp the simplicial sheaf BG does satisfy descent: there is up to isomorphism only a single G-bundle on ℝⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Principal 2-bundles let quotient families glue

**Remember:** A quotient family remembers the torsor, not just the orbit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N10. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Let a smooth 2-group G act on a stack X, which records objects and their isomorphisms over manifolds. A quotient family is a locally trivial principal G 2-bundle together with a map to X that respects the action. Local triviality means the bundle is locally a copy of G over the base.

**Problem.** These quotient families form a 2-stack on smooth manifolds. Compatible local families, maps and isomorphisms between maps glue over open covers.

**How the definition helps.** A family carries the transition isomorphisms and their compatibility on triple overlaps. In our own smooth-site argument these data glue the principal 2-bundle, and descent in X glues its map. Describing a quotient by pointwise orbits loses those gluing maps. The proof uses effective descent for bundles, which constructs a global bundle from compatible local pieces.

**Paper or page:** [Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1). It says: “Then the quotient pre-2-stack \[𝒳/𝒢\] is a 2-stack.”

**Sources:**

- [Caviglia, Principal 2-bundles and quotient 2-stacks](https://arxiv.org/abs/2403.09379v1)

### Probing by compact spaces makes the pyknotic embedding preserve limits

**Remember:** Mapping out of a fixed compact space preserves limits, so the embedding does.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54D50, 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A pyknotic set is a sheaf of sets on compact Hausdorff spaces of a fixed small size, with finite jointly surjective covers (Barwick and Haine). A space X gives the pyknotic set S ↦ C(S, X).

**Problem.** The embedding of compactly generated spaces into pyknotic sets preserves all small limits, though not colimits. In topological spaces the reverse holds: compactly generated spaces are closed under colimits but not under limits.

**How the definition helps.** Limits of sheaves are computed sectionwise, and maps out of a fixed S turn limits into limits. A limit of compactly generated spaces is the compactly generated version of the topological limit. Maps from a compact Hausdorff S do not see that change of topology. The work is in the full faithfulness, which uses that a compactly generated topology is fixed by its compact probes.

**nLab:** [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “Compactly generated topological spaces embed fully faithfully into pyknotic sets, in a manner that preserves limits.”

**Sources:**

- [Clark Barwick and Peter Haine, Pyknotic objects, I. Basic notions, arXiv:1904.09966 (2019)](https://arxiv.org/abs/1904.09966)

### Projective test spaces make infinite products of condensed abelian groups exact

**Remember:** Products of condensed groups are taken pointwise on spaces where every cover splits.

*Rules out counterexamples.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18E10, 18G05. arXiv math.CT, math.AG. Level 4: research.

**Definition.** An extremally disconnected test space is a compact Hausdorff space S such that every continuous surjection onto S from a compact Hausdorff space splits. Condensed abelian groups are contravariant abelian-group-valued functors on these probes sending finite disjoint unions to products, with the usual fixed size bound (our own).

**Problem.** In condensed abelian groups a product of surjections is a surjection, so infinite products are exact (Grothendieck's axiom AB4\*). Sheaves of abelian groups on a topological space usually fail this.

**How the definition helps.** Products and surjections can both be tested on extremally disconnected sets S, and there they are products and surjections of abelian groups. For sheaves on a topological space, surjectivity is tested at stalks, and a product does not commute with stalks. Our own example on the real line maps the extension by zero Fₙ of ℤ from (−1/n, 1/n) onto the skyscraper ℤ at 0. Each map is surjective, but the section (1, 1, 1, …) of the product of the skyscrapers lifts on no neighbourhood of 0.

**nLab:** [condensed abelian group](https://ncatlab.org/nlab/show/condensed+abelian+group). It says: “In this category, filtered colimits and infinite products are exact. The latter property is rather rare.”

**Paper or page:** [Condensed Mathematics: The internal Hom of condensed sets and condensed abelian groups and a prismatic construction of the real numbers](https://arxiv.org/abs/2109.07816). It says: “(AB4\*) Arbitrary products are exact.”

**Sources:**

- [Peter Scholze (with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Repleteness makes towers of surjective condensed abelian groups have no lim¹

**Remember:** In a tower of covers, the limit covers every stage.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G10, 18B25. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A topos is replete if, for every sequence ⋯ → F₂ → F₁ → F₀ of surjections of sheaves, the limit maps onto each Fₙ. An extremally disconnected set is a compact Hausdorff space onto which every surjection from a compact Hausdorff space splits. Condensed sets are replete, since surjectivity can be tested on extremally disconnected sets.

**Problem.** Let ⋯ → M₂ → M₁ → M₀ be a tower of surjections of condensed abelian groups. Then lim¹ Mₙ, the first derived functor of the limit, is zero, so the derived limit is the ordinary limit.

**How the definition helps.** On an extremally disconnected set S each map Mₙ₊₁(S) → Mₙ(S) is surjective, because S is projective. A tower of surjective abelian groups has lim¹ = 0 by the Mittag-Leffler condition. Limits, infinite products and cokernels of condensed abelian groups are computed pointwise on such S, so the condensed lim¹ vanishes too (our own summary). On a general site this fails, since surjections of sheaves need not be surjective on sections.

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

*True by definition.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** Fix a Waldhausen category and an integer n ≥ 0. An n-step flag is a chain of n cofibrations starting at zero. Its quotient diagram chooses compatible pushouts Aⱼ ⊔₍Aᵢ₎ 0 for every 0 ≤ i ≤ j ≤ n.

**Problem.** The functor from the groupoid of n-step Waldhausen diagrams to the groupoid of n-step cofibration flags is an equivalence. In both groupoids use only isomorphisms as maps.

**How the definition helps.** Each pushout is unique up to unique isomorphism commuting with its structure maps (our own). Thus every flag admits quotient data, and every flag isomorphism extends uniquely to those data (our own). This proves essential surjectivity and full faithfulness (our own).

**Paper or page:** [2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561). It says: “The functor μₙ : iSₙ𝒞 → Mₙ𝒞 which sends A to A₀,₁ ↣ A₀,₂ ↣ ⋯ ↣ A₀,ₙ is an equivalence.”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Tanner Nathan Carawan, 2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561)

### Mapping cones turn arrows into K-theory objects

**Remember:** A square counts as an equivalence when its cone map does.

*Makes the theorem clean to state or prove.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** Fix an exact category with forms, weak equivalences and a strong symmetric cone in Schlichting’s sense. In its arrow category, a commuting square is a weak equivalence if its induced map of mapping cones is a weak equivalence.

**Problem.** The cone functor induces a homotopy equivalence from the K-theory of this arrow category to the K-theory of the original category.

**How the definition helps.** Testing squares on their cones makes the cone functor preserve the chosen weak equivalences by definition. A mapping cone records the homotopy quotient of the target by the given arrow. Schlichting proves that taking cones induces an equivalence on K-theory. Its inverse sends each object to the arrow from zero to that object.

**Paper or page:** [Higher K-theory of forms II. From exact categories to chain complexes](https://arxiv.org/abs/2411.08746). It says: “induces an equivalence of K-theory spaces with inverse given by”

**Sources:**

- [Marco Schlichting, Higher K-theory of forms II. From exact categories to chain complexes](https://arxiv.org/abs/2411.08746)

### Retaining gluing maps distinguishes Waldhausen flags

**Remember:** Keep the shared-edge isomorphism when gluing quotient flags.

*Rules out counterexamples.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** A three-step flag is a chain of subobjects 0 ⊂ A ⊂ B ⊂ X, with equality allowed. Waldhausen’s construction records the subobjects, their quotients and all compatible isomorphisms. To glue quotient diagrams, specify an isomorphism between their copies of the common object.

**Problem.** In an abelian category, the inclusion A ⊂ X and the inclusion B/A ⊂ X/A determine the flag once their copies of X/A are identified. Their separate isomorphism classes can agree for different flags.

**How the definition helps.** The shared quotient identifies a subobject of X/A whose inverse image is B (our own). Take X = ℤ/4 ⊕ ℤ/2 and A generated by (2,0) (our own). The coordinate lines in X/A are exchanged by an automorphism, but their inverse images are cyclic and noncyclic respectively (our own).

**Paper or page:** [2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561). It says: “where the squares are pushouts and the right square is a pullback.”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Tanner Nathan Carawan, 2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561)

### The motive of finite spectra corepresents K-theory

**Remember:** K-theory is what the universal additive invariant sees when the sphere probes it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)), 18N60. arXiv math.KT, math.CT. Level 4: research.

**Definition.** An additive invariant of small stable ∞-categories inverts Morita equivalences, preserves filtered colimits, and sends split exact sequences to cofiber sequences. The universal additive invariant U represents these functors by colimit-preserving functors from its category of motives.

**Problem.** Connective Waldhausen K-theory of A is the mapping spectrum from U(finite spectra) to U(A). For a spectrum-valued additive invariant E, the spectrum of natural transformations from K-theory to E is equivalent to E(finite spectra).

**How the definition helps.** The corepresentability theorem of Blumberg, Gepner and Tabuada identifies the mapping spectrum with connective K-theory (our own). Enriched Yoneda then evaluates natural transformations at the representing object (our own).

**nLab:** [K-theory of a stable (∞,1)-category](https://ncatlab.org/nlab/show/K-theory+of+a+stable+%28%E2%88%9E%2C1%29-category), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “universal with the property that it respects filtered colimits and exact sequences in a suitable way.”

**Sources:**

- [Andrew Blumberg, David Gepner, Gonçalo Tabuada, A universal characterization of higher algebraic K-theory, Geom. Topol. 17 (2013) 733–838, arXiv:1001.2282](https://arxiv.org/abs/1001.2282)

### Differential graded C∞-rings make the Poincaré lemma formal

**Remember:** The degree 0 differential must obey the chain rule for every smooth function.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 18G35, 58A10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A nonnegatively graded differential graded C∞-ring is a commutative differential graded real algebra whose degree-zero algebra has compatible C∞-operations. For every smooth f: ℝⁿ → ℝ and degree-zero tuple a, require d(f(a)) = ∑ᵢ (∂ᵢf)(a) d(aᵢ).

**Problem.** The free differential graded C∞-ring on C∞(M) is the de Rham complex Ω(M). As a consequence, Ω(ℝⁿ) is quasi-isomorphic to ℝ in degree 0 (the Poincaré lemma).

**How the definition helps.** The chain rule gives the smooth differentials used in the Dubuc–Kock identification of the free object with Ω(M). On ℝⁿ, radial contraction gives a cochain homotopy from the identity on forms to evaluation at the origin (our own). Thus the cohomology is ℝ in degree zero only (our own).

**nLab:** [differential graded C<sup>∞</sup>-ring](https://ncatlab.org/nlab/show/differential+graded+C%5E%E2%88%9E-ring), [smooth differential forms form the free C<sup>∞</sup>-DGA on smooth functions](https://ncatlab.org/nlab/show/smooth+differential+forms+form+the+free+C%5E%E2%88%9E-DGA+on+smooth+functions). It says: “The stronger condition is essential for some theorems about coconnective differential graded C<sup>∞</sup>-rings, such as the one that states that smooth differential forms form the free C<sup>∞</sup>-DGA on smooth functions.”

**Sources:**

- [E. J. Dubuc, A. Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)
- [Domenico Fiorenza, Urs Schreiber, Jim Stasheff, Čech cocycles for differential characteristic classes: an ∞-Lie theoretic construction, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### For C∞-rings the coproduct is already the completed tensor product

**Remember:** A C∞-ring knows how to apply every smooth function, not only polynomials.

*Makes the theorem clean to state or prove.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 46J05, 18C10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A C∞-ring is a set A with an operation Aⁿ → A for every smooth function ℝⁿ → ℝ. Composition of smooth functions must go to composition of operations. Equivalently, a C∞-ring is a functor that preserves products, from the category of Cartesian spaces ℝⁿ with smooth maps to the category of sets.

**Problem.** For manifolds X and Y, the coproduct of C∞-rings C∞(X) ⊗∞ C∞(Y) is C∞(X × Y). More generally, C∞(−) sends transversal pullbacks of manifolds to pushouts of C∞-rings.

**How the definition helps.** The coproduct of C∞-rings already gives all smooth functions on the product, so no separate completion step is needed. The algebraic tensor product C∞(X) ⊗ C∞(Y) is in general a proper subalgebra of C∞(X × Y). For Cartesian spaces the statement holds by definition, because C∞(ℝⁿ) is the free C∞-ring on n generators. The general case, by Moerdijk and Reyes, still needs analysis.

**nLab:** [C<sup>∞</sup>-ring](https://ncatlab.org/nlab/show/C%5E%E2%88%9E-ring). It says: “The smooth tensor product is automatically the completed tensor product.”

**Sources:**

- [I. Moerdijk, G. E. Reyes, Models for Smooth Infinitesimal Analysis, Springer (1991)](https://doi.org/10.1007/978-1-4757-4143-8)

### Vietoris–Rips is the codegree 2 approximation of the Čech filtration

**Remember:** Vietoris–Rips is Čech seen only through pairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F50 (Goodwillie calculus and functor calculus), 55N31, 55U10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For a metric space and radius r ≥ 0, the Vietoris–Rips complex consists of finite subsets whose pairwise distances are at most 2r. The ambient Čech complex consists of finite subsets whose closed radius-r balls have common intersection.

**Problem.** For finite point sets in Euclidean space with ambient closed balls, Vietoris–Rips is the codegree-two approximation of the Čech filtration.

**How the definition helps.** Two ambient Euclidean balls of radius r intersect exactly when their centers are at distance at most 2r (our own). Completing the Čech pair data by including every simplex with all its edges present gives Vietoris–Rips (our own). The quoted poset cocalculus theorem identifies this completion with the codegree-two approximation.

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

**Remember:** Pick exponentiable test spaces whose products are built from test spaces.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18D15. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A class 𝒞 of spaces is productive if two conditions hold. Every member is exponentiable in Top, that is, function spaces out of it satisfy the exponential law. And the product of any two members is a colimit in Top of members of 𝒞, so it is glued from members. A space is 𝒞-generated if it is a colimit in Top of spaces in 𝒞.

**Problem.** For a productive class 𝒞, the 𝒞-generated spaces form a coreflective, cartesian closed subcategory of Top. Its internal hom is the coreflection of the compact-open topology.

**How the definition helps.** The definition isolates two properties that the classical proof for compactly generated spaces uses, so one proof covers many cases (our reading). One theorem then covers k-spaces, Δ-generated spaces and others at once. The real work is the theorem of Escardó, Lawson and Simpson.

**nLab:** [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “cartesian closed, with the internal hom given by the coreflection of the usual mapping space with its compact-open topology.”

**Sources:**

- [Martín Escardó, Jimmie Lawson, Alex Simpson, Comparing Cartesian closed categories of (core) compactly generated spaces, Topology Appl. 143 (2004) 105–145](https://doi.org/10.1016/j.topol.2004.02.011)
- [Rainer M. Vogt, Convenient categories of topological spaces for homotopy theory, Arch. Math. 22 (1971) 545–555](https://doi.org/10.1007/BF01222616)

### Quasi-topological spaces, as sheaves on compact Hausdorff spaces, form a convenient category

**Remember:** A quasi-topology is known only through its maps out of compact Hausdorff spaces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18F20, 54B30. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A quasi-topology on X selects functions C → X, called plots, for each compact Hausdorff C, including all constants. Plots remain plots after continuous precomposition. A function is a plot whenever its restrictions along some finite jointly surjective family of compact Hausdorff probes are plots.

**Problem.** Quasi-topological spaces form a complete, cocomplete and cartesian closed category.

**How the definition helps.** A quasi-continuous map preserves plots under composition (our own). Limits use plots detected by projections, and colimits use the quasi-topology generated by the structure maps (our own). Function spaces use plots whose evaluations on products with probes are plots, giving the exponential adjunction (our own).

**nLab:** [quasi-topological space](https://ncatlab.org/nlab/show/quasi-topological+space). It says: “In particular, quasi-topological spaces form a complete and cocomplete cartesian closed category.”

**Sources:**

- [Edwin Spanier, Quasi-topologies, Duke Mathematical Journal 30 (1963) 1–14](https://doi.org/10.1215/S0012-7094-63-03001-1)

### Topological functors must lift large families to be faithful and self-dual

**Remember:** Any object gets the initial structure for any family of maps out of it.

*Rules out counterexamples. Confidence: medium.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18A22. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A functor U is topological if every possibly large family fᵢ: X → U(Sᵢ) lifts to maps gᵢ: T → Sᵢ over fᵢ, with U(T)=X. For every h: U(B) → X and compatible prescribed lifts of all fᵢh, exactly one lift of h has those prescribed composites with gᵢ.

**Problem.** Every topological functor is faithful. The notion is self-dual: U is topological exactly when every large family of maps U(Sᵢ) → X has a final lift.

**How the definition helps.** The initial-lift theorem for arbitrary sources gives faithfulness and the dual final-lift property (our own). For small families alone, a functor to the terminal category has initial lifts whenever its source has small products (our own). Such a category can have parallel arrows or lack coproducts, so neither conclusion follows (our own).

**nLab:** [topological concrete category](https://ncatlab.org/nlab/show/topological+concrete+category). It says: “However, it need not satisfy the dual property (unless C also has all small coproducts) nor need it be faithful.”

**Sources:**

- [Jiří Adámek, Horst Herrlich, George E. Strecker, Abstract and Concrete Categories: The Joy of Cats, Wiley (1990); reprinted in Reprints in Theory and Applications of Categories 17 (2006)](http://www.tac.mta.ca/tac/reprints/articles/17/tr17abs.html)

### Frame-valued support makes radical localizing ideals the universal support

**Remember:** Generate the smallest radical localizing tensor ideal containing the object.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18G80, 06D22. arXiv math.CT. Level 4: research.

**Definition.** A radical localizing tensor ideal is a thick subcategory closed under arbitrary coproducts and tensoring with every object. It contains X whenever it contains X⊗ⁿ for some n ≥ 1. Write rad(X) for the intersection of all such ideals containing X.

**Problem.** Suppose K has a property called the tensor property, and its radical localizing tensor ideals form a set. Then they form a frame, and sending X to the radical ideal it generates is the initial support on K.

**How the definition helps.** Krause and Letz prove that the ideals form a frame and that rad is a support under the tensor property. Any factorization of a support must send rad(X) to the support of X (our own). Their initiality theorem shows these assignments extend uniquely to a frame map (our own).

**Paper or page:** [The spectrum of a well-generated tensor triangulated category](https://arxiv.org/abs/2203.03249), [The spectrum of a well-generated tensor triangulated category](https://arxiv.org/abs/2203.03249). It says: “Then the radical localizing tensor ideals of 𝒦 form a frame and the map Obj(𝒦) ⟶ Rad(𝒦), X ↦ rad(X) is a support; it is initial among all supports on 𝒦.”

**Sources:**

- [Henning Krause and Janina C. Letz, The spectrum of a well-generated tensor-triangulated category, Bull. Lond. Math. Soc. 55 (2023) 680–705](https://doi.org/10.1112/blms.12749)

### Locale maps are the right continuous functions for constructive analysis

**Remember:** Define continuity on the open sets, and composition and 1/x come free.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 03F60. arXiv math.GN, math.LO. Level 4: research.

**Definition.** A locale map X → Y is a frame homomorphism from the opens of Y to the opens of X. It preserves arbitrary joins and finite meets, including the empty join and meet.

**Problem.** Locale maps compose constructively and include the reciprocal on the open sublocale where x is apart from zero. Endomaps of the real locale correspond exactly to Bishop’s locally uniformly continuous real functions.

**How the definition helps.** Inverse-image homomorphisms compose, and reciprocal on its domain acts on opens by inverse image (our own). Palmgren’s comparison theorem identifies the endomaps of the real locale with Bishop’s functions.

**nLab:** [Bishop's constructive mathematics](https://ncatlab.org/nlab/show/Bishop%27s+constructive+mathematics). It says: “Palmgren shows that the continuous endomaps of the locale of real numbers ℝ coincide with Bishop's locally uniformly continuous functions, whereas for spaces other than ℝ itself locale maps are better-behaved than Bishops'”

**Sources:**

- [F. Waaldijk, On the Foundations of Constructive Mathematics – Especially in Relation to the Theory of Continuous Functions, Foundations of Science 10 (2005) 249–324](https://doi.org/10.1007/s10699-004-3065-z)

### Locales make Banach–Alaoglu, Hahn–Banach and Gelfand duality constructive

**Remember:** A locale can be compact before anyone has found its points.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 46S30, 46L05. arXiv math.FA, math.GN. Level 4: research.

**Definition.** A frame is a complete lattice in which binary meets distribute over arbitrary joins. A locale is an object of the opposite category of frames, whose homomorphisms preserve arbitrary joins and finite meets.

**Problem.** The localic Hahn–Banach and Banach–Alaoglu theorems hold constructively. Constructive localic Gelfand duality relates unital commutative C\*-algebras to compact regular locales. These formulations apply internally in a topos with a natural numbers object.

**How the definition helps.** The localic statements express existence through locale maps and compactness through covers, without choosing individual functionals or characters (our own). Pelletier constructs the localic dual ball, and Coquand and Spitters establish constructive Gelfand duality (our own).

**nLab:** [Banach-Alaoglu theorem](https://ncatlab.org/nlab/show/Banach-Alaoglu+theorem), [Hahn-Banach theorem](https://ncatlab.org/nlab/show/Hahn-Banach+theorem), [constructive Gelfand duality theorem](https://ncatlab.org/nlab/show/constructive+Gelfand+duality+theorem). It says: “As usual, when formulating the theorem using locales instead of topological spaces the theorem holds constructively”

**Sources:**

- [Joan Wick Pelletier, Locales in functional analysis, Journal of Pure and Applied Algebra 70 (1991) 133–145](https://doi.org/10.1016/0022-4049(91)90013-R)
- [Thierry Coquand, Bas Spitters, Constructive Gelfand duality for C\*-algebras, Mathematical Proceedings of the Cambridge Philosophical Society 147 (2009) 323–337; arXiv:0808.1518](https://arxiv.org/abs/0808.1518)

### Point-free calculus defines a function as the integral of its derivative

**Remember:** Integrate the continuous derivative and add the initial value.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 26A42, 03F60. arXiv math.GN, math.CA. Level 4: research.

**Definition.** In this point-free calculus on \[a,b\], continuously differentiable real maps are represented by a continuous locale map g on \[a,b\] and a real c. The represented map has value c + ∫ₐˣ g(t) dt at x.

**Problem.** In point-free calculus, the fundamental theorem of calculus holds: indefinite integrals are antiderivatives, and antiderivatives are indefinite integrals.

**How the definition helps.** A differentiable map is given by its derivative and its initial value, so it equals the integral of its derivative by construction. Two things remain to prove. Indefinite integrals must exist directly as locale maps, and differentiation must have its usual properties. Vickers does this in geometric logic.

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “In the locale-theoretic approach, we essentially define an antiderivative to be an indefinite integral.”

**Sources:**

- [S. Vickers, The Fundamental Theorem of Calculus point-free, with applications to exponentials and logarithms, arXiv:2312.05228 (2023)](https://arxiv.org/abs/2312.05228)

### Prodiscrete localic groups take limits of progroups in locales

**Remember:** Take the limit in locales, not in spaces, and no surjective progroup collapses.

*Rules out counterexamples.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18C40. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A surjective progroup is a small cofiltered diagram of groups with surjective transition maps, regarded as a pro-object. A prodiscrete localic group is a localic group isomorphic to a limit of such a diagram of discrete localic groups.

**Problem.** The category of prodiscrete localic groups is equivalent to the category of surjective progroups (Moerdijk). Taken in groups or topological groups instead, the limit of a nontrivial surjective progroup can be trivial.

**How the definition helps.** The localic limit projects surjectively to each discrete stage (our own). Moerdijk’s comparison theorem identifies morphisms between these limits with morphisms of surjective progroups (our own). The Higman–Stone example yields a nontrivial surjective progroup whose ordinary limit is trivial (our own).

**nLab:** [progroup](https://ncatlab.org/nlab/show/progroup), [Galois topos](https://ncatlab.org/nlab/show/Galois+topos). It says: “However, we do get an embedding on pro-groups with surjective transition maps if instead of Top we take the limit in the category Loc of locales.”

**Sources:**

- [I. Moerdijk, Prodiscrete groups and Galois toposes, Indagationes Mathematicae (Proceedings) 92(2) (1989) 219–234](https://doi.org/10.1016/s1385-7258(89)80030-7)

### Products of paracompact locales are paracompact

**Remember:** Paracompact means every cover refines to one that is finite near each place.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D20. arXiv math.GN. Level 4: research.

**Definition.** A regular locale is paracompact if every open cover has a locally finite open refinement. A family is locally finite if some open cover has each member meeting only finitely many family members nontrivially.

**Problem.** A product of paracompact locales is paracompact.

**How the definition helps.** Use the reflection theorem for paracompact locales in regular locales (our own). Regular locales admit products computed in locales, and a full reflective subcategory is closed under such limits (our own). The paracompact Sorgenfrey line has a nonparacompact topological square, illustrating why the product category matters (our own).

**nLab:** [paracompact locale](https://ncatlab.org/nlab/show/paracompact+locale). It says: “This last property clearly distinguishes paracompact locales from paracompact spaces, since products of paracompact spaces need not be paracompact.”

**Sources:**

- [John R. Isbell, Atomless parts of spaces, Mathematica Scandinavica 31 (1972) 5–32](https://doi.org/10.7146/math.scand.a-11409)

### Radical ideals form a coherent frame, so the spectrum is spectral

**Remember:** A coherent frame of ideals gives a spectral space of primes.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18G80, 06D22. arXiv math.CT. Level 4: research.

**Definition.** A frame is coherent if its compact elements generate it under joins, include the top and are closed under binary meets. An element c is compact if every family whose join dominates c has a finite subfamily whose join dominates c.

**Problem.** For an essentially small tensor triangulated category K, Spc(K) is spectral. The frame of radical thick tensor ideals of K is the frame of opens of its Hochster dual, whose opens are the Thomason subsets.

**How the definition helps.** The coherence theorem for radical ideals gives a coherent frame, whose points form a spectral space by Stone duality (our own). Identifying its points with prime tensor ideals identifies its opens with Thomason subsets (our own). Hochster duality then gives spectrality of Spc(K) (our own).

**nLab:** [coherent locale](https://ncatlab.org/nlab/show/coherent+locale). It says: “Coherent locales are spatial.”

**Paper or page:** [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257), [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257). It says: “Suppose (𝒜,⊗,𝟙) is a tensor extriangulated category. If Rad(𝒜) is a set, then it is a coherent frame.”

**Sources:**

- [Joachim Kock and Wolfgang Pitsch, Hochster duality in derived categories and point-free reconstruction of schemes, Trans. Amer. Math. Soc. 369 (2017) 223–261](https://doi.org/10.1090/tran/6773)
- [Raphael Bennett-Tennenhaus, Isambard Goodbody, Janina C. Letz and Amit Shah, Tensor extriangulated categories, arXiv:2502.18257 (2025)](https://arxiv.org/abs/2502.18257)

### With sublocales as parts, the Banach–Tarski pieces overlap

**Remember:** In a locale, two pieces with no common point can still overlap.

*Rules out counterexamples.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 28C15. arXiv math.GN. Level 4: research.

**Definition.** A sublocale of X is specified by a nucleus on its frame of opens. A nucleus is an inflationary, idempotent map preserving finite meets. Its fixed elements are the opens of the sublocale.

**Problem.** With sublocales as parts, the pieces of the Vitali and Banach–Tarski partitions are not disjoint. So additivity does not apply to them, and the paradox does not arise.

**How the definition helps.** Simpson’s overlap result gives a nonempty localic intersection for the intertangled pieces even though their sets of points are disjoint. Additivity on disjoint sublocales therefore does not apply to these pieces (our own).

**nLab:** [Banach-Tarski paradox](https://ncatlab.org/nlab/show/Banach-Tarski+paradox). It says: “According to our notion of "part", two such intertangled pieces are not disjoint from each other, so additivity does not apply.”

**Sources:**

- [Alex Simpson, Measure, randomness and sublocales, Annals of Pure and Applied Logic 163:11 (2012) 1642–1659](https://doi.org/10.1016/j.apal.2011.12.014)
- [Olivier Leroy, Théorie de la mesure dans les lieux réguliers. ou : Les intersections cachées dans le paradoxe de Banach-Tarski (manuscript, 1995); arXiv:1303.5631](https://arxiv.org/abs/1303.5631)

### A set of generators makes lim¹ vanish on towers of epimorphisms

**Remember:** Some map from a generator detects each nonzero map by composition.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18E10. arXiv math.CT. Level 4: research.

**Definition.** A generating set in an abelian category detects every nonzero arrow f by some composite fg ≠ 0 with g from a generating object. AB3 requires small coproducts, and AB4\* requires exact small products.

**Problem.** In an abelian category satisfying AB3 and AB4\* with a set of generators, every tower of epimorphisms has lim¹ = 0. Without generators this fails, even with AB4 and AB4\*.

**How the definition helps.** A set of generators rules out the Neeman–Deligne example, so the vanishing known for abelian groups holds in every such category. Neeman and Deligne built a category with AB4 and AB4\*, but without generators, and a tower of epimorphisms in it with nonzero lim¹. This disproved a 1961 claim of Roos. Roos's 2006 paper proves the result once a set of generators is added.

**Wikipedia:** [Inverse limit](https://en.wikipedia.org/wiki/Inverse_limit). It says: “Roos has since shown (in "Derived functors of inverse limits revisited") that his result is correct if C has a set of generators (in addition to satisfying (AB3) and (AB4\*)).”

**Sources:**

- [Jan-Erik Roos, Derived functors of inverse limits revisited, Journal of the London Mathematical Society 73 (2006), 65–83](https://doi.org/10.1112/S0024610705022416)
- [Amnon Neeman, A counterexample to a 1961 “theorem” in homological algebra, Inventiones Mathematicae 148 (2002), 397–420](https://doi.org/10.1007/s002220100197)

### Roos's axiom rescues resolutions of unbounded complexes

**Remember:** Bounded failure of exact products keeps limits of resolutions honest.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80, 18E10. arXiv math.RA, math.CT. Level 4: research.

**Definition.** Fix an abelian category with enough injectives and all small products. It satisfies Roos’s product axiom with bound k ≥ 0 if every small indexed product functor has zero right derived functors in degrees above k.

**Problem.** Assume Roos’s product axiom with a finite bound. For an unbounded complex, taking the limit of the truncation construction’s compatible partial resolutions gives an injective resolution. Without the axiom, the usual constructions can fail on an explicit complex.

**How the definition helps.** The finite bound controls the derived products in the inverse limit of the resolution tower (our own). The cited resolution theorem then gives the required quasi-isomorphism. Its counterexample uses a quotient of modules over Nagata’s noetherian ring of infinite dimension (our own).

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “We show that various methods for explicitly building resolutions of unbounded complexes in fact fail when applied to a rather simple and explicit complex. We show that one way to rescue these methods is to assume Roos (Ab.4\*)-k axiom.”

**Sources:**

- [Dolors Herbera, Wolfgang Pitsch, Manuel Saorín, Simone Virili, A poisonous example to explicit resolutions of unbounded complexes, arXiv:2407.09741 (2024)](https://arxiv.org/abs/2407.09741v3)
- [Jan-Erik Roos, Derived functors of inverse limits revisited, J. London Math. Soc. 73 (2006), 65-83](https://doi.org/10.1112/s0024610705022416)

### Vanishing lim¹ on countable sums characterizes Mittag-Leffler towers

**Remember:** At each stage, the images from all sufficiently late stages agree.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18A30. arXiv math.CT, math.AC. Level 4: research.

**Definition.** A tower (Aₙ) is a sequence of abelian groups with maps Aₙ₊₁ → Aₙ. It is Mittag-Leffler when, for each n, the images of Aₘ → Aₙ stop shrinking for large m. The group lim¹ is the first right derived functor of the inverse limit of towers.

**Problem.** A tower of abelian groups is Mittag-Leffler exactly when lim¹ vanishes both on the tower and on the termwise countable direct sum of its copies.

**How the definition helps.** The theorem turns a condition on images into a purely homological test. The test on sums is needed: for the tower of p-adic integers Zₚ with every map multiplication by p, the images keep shrinking (our own). Yet its lim¹ is Ext¹(Z\[1/p\], Zₚ) = 0, because Zₚ is a cotorsion group (our own). The hard direction, from vanishing to the condition on images, is Emmanouil's theorem.

**Paper or page:** [More Algebra, Lemma 15.87.14.](https://stacks.math.columbia.edu/tag/0CQA). It says: “Let (Aₙ) be an inverse system of abelian groups. The following are equivalent (Aₙ) is Mittag-Leffler, R¹lim Aₙ = 0 and the same holds for ⊕<sub>i ∈ N</sub> (Aₙ).”

**Sources:**

- [Ioannis Emmanouil, Mittag-Leffler condition and the vanishing of lim¹, Topology 35 (1996), 267–271](https://doi.org/10.1016/0040-9383(94)00056-5)

### Presenting magnitude cohomology as Ext gives it a Yoneda algebra structure

**Remember:** Splice self-extensions to multiply classes in the Yoneda algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 55N35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For a graded algebra R and graded module M, the Yoneda algebra is the bigraded self-Ext of M, including all internal shifts. Its product composes extension classes by splicing extensions.

**Problem.** For a finite quasimetric space, magnitude cohomology is an Ext group over the distance algebra, and the magnitude cohomology algebra is a Yoneda algebra.

**How the definition helps.** Asao and Ivanov identify the magnitude cohomology algebra with self-Ext of the vertex module over the distance algebra (our own). Under their comparison, splicing extensions gives the magnitude cohomology product (our own).

**Paper or page:** [Magnitude homology is a derived functor](https://arxiv.org/abs/2402.14466). It says: “In addition, we show that the magnitude cohomology algebra of a finite quasimetric space can be described as a Yoneda algebra.”

**Sources:**

- [Yasuhiko Asao and Sergei O. Ivanov, Magnitude homology is a derived functor, arXiv:2402.14466 (2024)](https://arxiv.org/abs/2402.14466)

### A projective class gives relative homological algebra its own model structure

**Remember:** Choose which objects count as projective, and the homotopy theory follows.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18N40. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A projective class on an abelian category is a class 𝒫 of objects with a class ℰ of maps. The maps in ℰ are the f for which every Hom(P, f) with P in 𝒫 is onto. The class 𝒫 must be exactly the objects projective against all of ℰ. Every object must receive a map in ℰ from some object of 𝒫.

**Problem.** Fix a projective class in a complete and cocomplete abelian category. Test chain maps by Hom(P, −) for every P in that class, using quasi-isomorphisms for weak equivalences and degreewise surjections for fibrations. If cofibrant resolutions exist, these classes define a model structure on unbounded complexes.

**How the definition helps.** Applying Hom(P, −) for every relative projective gives uniform tests for fibrations and weak equivalences (our own). The Christensen–Hovey existence theorem supplies the remaining model axioms when cofibrant resolutions exist (our own).

**nLab:** [model structure on chain complexes](https://ncatlab.org/nlab/show/model+structure+on+chain+complexes). It says: “Then this constitutes a model category structure precisely if cofibrant resolutions exist”

**Sources:**

- [J. D. Christensen and M. Hovey, Quillen model structures for relative homological algebra, Mathematical Proceedings of the Cambridge Philosophical Society 133 (2002)](https://doi.org/10.1017/S0305004102006126)

### A resolving left class makes a cotorsion pair kill all higher Ext

**Remember:** Close the left class under kernels and every higher Ext vanishes too.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18G15. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A cotorsion pair (𝒳,𝒴) consists of mutual left and right orthogonals for Ext¹, with 𝒳 in the first argument. Assume 𝒳 generates by epimorphisms and 𝒴 cogenerates by monomorphisms. The left class is resolving here when it contains the kernel of every epimorphism between its members.

**Problem.** For such a pair, Extⁱ(X, Y) = 0 for all i ≥ 1, all X in 𝒳 and all Y in 𝒴. Moreover, the pair is left-complete exactly when it is right-complete.

**How the definition helps.** The hereditary cotorsion-pair lemma identifies kernel closure with vanishing of all positive Ext groups under the generating and cogenerating hypotheses (our own). Its completeness criterion then makes left and right completeness equivalent (our own).

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “(𝒳, 𝒴) is a cotorsion pair and 𝒳 is closed under kernels of epimorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Abelian model structures are exactly two compatible complete cotorsion pairs

**Remember:** Cofibrations have cofibrant cokernels and are monic, while fibrations have fibrant kernels and are epic.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18N40. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A model structure picks out three classes of maps, cofibrations, fibrations and weak equivalences, that allow homotopy theory. On a complete and cocomplete abelian category, it is abelian when cofibrations are exactly the monomorphisms with cofibrant cokernel. Fibrations must be exactly the epimorphisms with fibrant kernel. Write 𝒞, ℱ and 𝒲 for the cofibrant, fibrant and trivial objects.

**Problem.** Abelian model structures correspond one to one to triples (𝒞, 𝒲, ℱ) of classes (Hovey, 2002). In such a triple, 𝒲 is thick, and (𝒞 ∩ 𝒲, ℱ) and (𝒞, ℱ ∩ 𝒲) are complete cotorsion pairs. Thick means closed under summands, with two-out-of-three in short exact sequences.

**How the definition helps.** The definition describes maps through their kernels and cokernels, so every model category axiom becomes a statement about classes of objects. A monomorphism lifts against an epimorphism when Ext¹ of the cokernel into the kernel vanishes, so lifting becomes a cotorsion pair condition (our own summary). The factorization axioms become completeness. The work goes into the two-out-of-three property of weak equivalences, which uses the thickness of 𝒲.

**nLab:** [abelian model category](https://ncatlab.org/nlab/show/abelian+model+category). It says: “Then there exists a unique abelian model structure on 𝒜 such that 𝒞, ℱ, 𝒲 are the classes of cofibrant, fibrant, and trivial objects, respectively.”

**Sources:**

- [M. Hovey, Cotorsion pairs, model category structures, and representation theory, Mathematische Zeitschrift 241 (2002)](https://doi.org/10.1007/s00209-002-0431-9)

### Cogenerating a cotorsion pair by a set makes it complete

**Remember:** A set of test objects lets the small object argument build approximations.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16D40. arXiv math.RA, math.CT. Level 4: research.

**Definition.** For a set S, let 𝒴 consist of all Y with Ext¹(s,Y)=0 for every s ∈ S. Its cogenerated pair is (𝒳,𝒴), where 𝒳 consists of all X with Ext¹(X,Y)=0 for every Y ∈ 𝒴. Completeness means every M admits exact sequences 0→Y→X→M→0 and 0→M→Y′→X′→0 with X,X′ ∈ 𝒳 and Y,Y′ ∈ 𝒴.

**Problem.** In a Grothendieck category with enough projectives, such as a module category, every cotorsion pair cogenerated by a set is complete. Eklof and Trlifaj proved this for modules.

**How the definition helps.** Since only a set must be tested, one can glue copies of its members transfinitely until Ext¹ against S vanishes (our own summary). Eklof's lemma, also in the data set, keeps the glued object in the left class. The work moves to showing that a given pair is cogenerated by a set. For flat modules this is the key step towards flat covers (our own).

**Paper or page:** [Cotorsion pairs and model structures on Morita rings](https://arxiv.org/abs/2208.05684v3), [Powers of ghost ideals](https://arxiv.org/abs/2411.05250v1). It says: “Let 𝒜 be a Grothendieck category with enough projective objects. Then any cotorsion pair in 𝒜 cogenerated by a set is complete.”

**Sources:**

- [P. C. Eklof and J. Trlifaj, How to make Ext vanish, Bulletin of the London Mathematical Society 33 (2001)](https://doi.org/10.1112/blms/33.1.41)

### Defining injective classes by lifting makes relative resolutions unique up to homotopy

**Remember:** Relative injectives extend along relative monomorphisms, so comparison works as usual.

*True by definition.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18G10. arXiv math.RA, math.CT. Level 4: research.

**Definition.** Let ℐ be a class of objects. A map f is an ℐ-monomorphism when every Hom(f, I) with I in ℐ is onto. Then ℐ is an injective class when it is exactly the objects injective against all ℐ-monomorphisms, and every object has an ℐ-monomorphism into ℐ.

**Problem.** For any injective class ℐ, any two relative ℐ-injective resolutions of an object are homotopy equivalent. The homotopy equivalence is compatible with the maps from the object and is unique up to homotopy.

**How the definition helps.** The classical comparison theorem uses only that maps into injectives extend along the maps of the resolution. The ℐ-monomorphisms are defined as exactly the maps along which maps into ℐ extend (our own summary). So the classical proof works word for word, and relative derived functors such as Eilenberg and Moore's relative Ext are well defined. The work moves to checking that a class is an injective class.

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “then there is a homotopy equivalence f•:I•→J• such that f•∘u=v, and f• is unique up to homotopy.”

**Sources:**

- [S. Eilenberg and J. C. Moore, Foundations of relative homological algebra, Memoirs of the American Mathematical Society 55 (1965)](https://doi.org/10.1090/memo/0055)

### Hovey triples with the same trivial objects have the same homotopy category

**Remember:** Same trivial objects, same weak equivalences, same homotopy category.

*True by definition.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 18N40, 18G80. arXiv math.CT, math.RT. Level 4: research.

**Definition.** A Hovey triple (𝒞, 𝒲, ℱ) has 𝒲 thick and (𝒞 ∩ 𝒲, ℱ) and (𝒞, 𝒲 ∩ ℱ) complete cotorsion pairs. It gives a model structure whose trivial objects are 𝒲, and its homotopy category inverts the weak equivalences. The triple is hereditary when both its cotorsion pairs are hereditary.

**Problem.** In a weakly idempotent complete exact category, two Hovey triples with the same trivial class 𝒲 have the same homotopy category (Šťovíček). For hereditary triples, their stable categories (𝒞 ∩ ℱ)/(𝒞 ∩ ℱ ∩ 𝒲) are triangle equivalent.

**How the definition helps.** Hovey’s factorization criterion identifies weak equivalences using 𝒲 alone (our own). They are admissible monomorphisms with cokernel in 𝒲 followed by admissible epimorphisms with kernel in 𝒲 (our own). Both structures therefore give the same localization. For hereditary triples, the stable category of cofibrant-fibrant objects presents that localization as a triangulated category (our own).

**Paper or page:** [Chains of model structures arising from modules of finite Gorenstein dimension](https://arxiv.org/abs/2403.05232v4), [Chains of model structures arising from modules of finite Gorenstein dimension](https://arxiv.org/abs/2403.05232v4). It says: “If W=W′, then the homotopy categories of the two exact model structures on 𝒜 are the same.”

**Sources:**

- [J. Šťovíček, Exact model categories, approximation theory, and cohomology of quasi-coherent sheaves, in Advances in Representation Theory of Algebras, EMS (2014)](https://doi.org/10.4171/125-1/10)

### Tensor-tested Gorenstein modules give a complete cotorsion pair over every ring

**Remember:** Take cycles of exact projective complexes that stay exact after tensoring with every injective.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16E65, 16D40. arXiv math.RA, math.RT. Level 4: research.

**Definition.** A module is Gorenstein projective when it is the kernel of one map in an exact complex of projectives. That complex must stay exact under every Hom(−, Q) with Q projective. The module is projectively coresolved Gorenstein flat (PGF) when instead the complex stays exact under every I ⊗ − with I an injective right module.

**Problem.** For every ring, (PGF, PGF⊥) is a complete hereditary cotorsion pair, cogenerated by a set, whose common objects are the projectives (Šaroch and Šťovíček). Over left virtually Gorenstein rings, PGF modules are exactly the Gorenstein projective ones.

**How the definition helps.** The tensor test defines the same class over every ring (our own). Šaroch and Šťovíček use singular compactness to prove set cogeneration, completeness, heredity and the identification of the common objects. The comparison over left virtually Gorenstein rings identifies this class with the Gorenstein projectives (our own).

**Paper or page:** [Chains of model structures arising from modules of finite Gorenstein dimension](https://arxiv.org/abs/2403.05232v4), [Homotopy equivalences and Grothendieck duality over rings with finite Gorenstein weak global dimension](https://arxiv.org/abs/2402.03010v1). It says: “(𝒫𝒢ℱ, 𝒫𝒢ℱ⊥) is a complete and hereditary cotorsion pair with kernel 𝒫, and cogenerated by a set.”

**Sources:**

- [J. Šaroch and J. Šťovíček, Singular compactness and definability for Σ-cotorsion and Gorenstein modules, Selecta Mathematica 26 (2020)](https://doi.org/10.1007/s00029-020-0543-2)

### The flat cotorsion pair gives quasi-coherent sheaves a derived tensor product

**Remember:** Use flat terms and test chain maps against exact complexes with cotorsion cycles.

*Makes the theorem clean to state or prove.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 14F08, 18N40. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A cotorsion sheaf C satisfies Ext¹(F,C)=0 for every flat quasi-coherent sheaf F. A dg-flat complex has flat terms, and every chain map from it to an exact complex with cotorsion cycles is null-homotopic.

**Problem.** For a quasi-compact separated scheme X, complexes of quasi-coherent sheaves carry a monoidal model structure whose weak equivalences are the quasi-isomorphisms. So the derived tensor product exists on D(Qcoh X), although Qcoh X usually lacks enough projectives.

**How the definition helps.** Gillespie’s flat model structure uses dg-flat complexes as cofibrant objects and quasi-isomorphisms as weak equivalences (our own). Its monoidal structure lets one compute the derived tensor product by tensoring cofibrant replacements (our own).

**nLab:** [model structure on chain complexes](https://ncatlab.org/nlab/show/model+structure+on+chain+complexes). It says: “This gives a better understanding of the derived category of quasi-coherent sheaves D(Qcoh(X)), and in particular gives immediately the derived functor · ⊗ᴸ · (which is usually a problem due to sheaves not having enough projectives).”

**Sources:**

- [J. Gillespie, The flat model structure on complexes of sheaves, Transactions of the American Mathematical Society 358 (2006)](https://doi.org/10.1090/S0002-9947-06-04157-2)
- [J. Gillespie, Kaplansky classes and derived categories, Mathematische Zeitschrift 257 (2007)](https://doi.org/10.1007/s00209-007-0148-x)

### Using flat modules instead of projectives gives every module a cover

**Remember:** All maps from flats factor through the cover, and its endomorphisms over M are invertible.

*Rules out counterexamples.* MSC 18G25 (Relative homological algebra, projective classes (category-theoretic aspects)), 16D40. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A projective cover of M is a surjection P → M from a projective module with superfluous kernel K. This means that N + K = P forces N = P. A flat cover is a map F → M from a flat module through which all maps from flat modules factor. Its endomorphisms over M must all be automorphisms.

**Problem.** Every module over every ring has a flat cover (Bican, El Bashir and Enochs, 2001). Projective covers do not always exist: the ℤ-module ℤ/2ℤ has none.

**How the definition helps.** Flat modules are closed under direct limits, and Enochs showed that a precovering class closed under direct limits is covering (our own summary). Bican and El Bashir showed that the flat cotorsion pair is cogenerated by a set, so flat precovers exist (our own summary). For projectives, ℤ/2ℤ fails, as Wikipedia states. The reason is that the kernel of a projective cover lies in J(R)P, where J(R) is the Jacobson radical, and J(ℤ) = 0 (our own).

**Wikipedia:** [Projective cover](https://en.wikipedia.org/wiki/Projective_cover), [Flat cover](https://en.wikipedia.org/wiki/Flat_cover). It says: “the natural map from Z onto Z/2Z is not a projective cover of the Z-module Z/2Z (which in fact has no projective cover).”

**Sources:**

- [L. Bican, R. El Bashir and E. Enochs, All modules have flat covers, Bulletin of the London Mathematical Society 33 (2001)](https://doi.org/10.1017/S0024609301008104)

### In stable ∞-categories, simplicial objects are filtered objects by their skeleta

**Remember:** Skeleta filter the realization; the filtration's layers are the Moore complex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 18N60. arXiv math.CT, math.AT. Level 4: research.

**Definition.** For a simplicial object X, its n-skeleton is the left Kan extension of its restriction to degrees at most n along the inclusion. The skeletal filtration consists of the realizations of these skeleta and the maps induced by successive inclusions.

**Problem.** In a stable ∞-category, simplicial objects correspond to sequences indexed by the nonnegative integers. When the realization exists, its skeletal filtration yields a spectral sequence after applying a homological functor. For a t-structure, the homotopy-object spectral sequence has normalized Moore complexes as its first-page rows.

**How the definition helps.** The equivalence makes the skeleton filtration a filtered object, so the general spectral sequence of a filtered object applies at once. The nLab notes that the chain complex of this filtration agrees with the ordinary Dold–Kan chain complex in the homotopy category. The work went into Lurie's proof of the equivalence in Higher Algebra, Theorem 1.2.4.1.

**nLab:** [infinity-Dold-Kan correspondence](https://ncatlab.org/nlab/show/infinity-Dold-Kan+correspondence). It says: “Under this equivalence, a simplicial object X• is sent to the sequence of geometric realizations ((∞,1)-colimits) of its simplicial skeleta”

**Sources:** none listed. No primary source with a working link was found.

### Adding contracting homotopies to killed objects makes dg quotients enhance Verdier quotients

**Remember:** To kill an object, give its identity a null homotopy.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18E35, 18G80. arXiv math.CT, math.KT. Level 4: research.

**Definition.** Let A be a pretriangulated dg category over a field and B a full pretriangulated dg subcategory. For each object U of B, Drinfeld's dg quotient A/B freely adds a degree −1 map ε from U to U with dε = id. So each object of B becomes contractible, that is, isomorphic to zero in the homotopy category.

**Problem.** The homotopy category of the dg quotient A/B is equivalent to the Verdier quotient H⁰(A)/H⁰(B). The dg quotient of this pair is unique up to isomorphism in the homotopy category of dg categories.

**How the definition helps.** The new differential makes each killed identity a boundary, so the quotient functor factors on homotopy categories through the Verdier quotient (our own). Drinfeld’s comparison theorem proves that this factorization is an equivalence (our own).

**nLab:** [model structure on dg-categories](https://ncatlab.org/nlab/show/model+structure+on+dg-categories). It says: “The DG quotient of Drinfeld is a model for the homotopy cofibre with respect to the Morita model structure.”

**Paper or page:** [On the graded singularity category of Abelian quotient singularities, I. Smooth categorical compactification](https://arxiv.org/abs/2507.19815). It says: “the DG quotient of the pair (A, B) (meaning A modulo B) exists and is unique in the sense of Hqe. Moreover, the DG quotient, denoted by A/B, is a DG enhancement of the triangulated category H⁰(A)/H⁰(B).”

**Sources:**

- [V. Drinfeld, DG quotients of DG categories, J. Algebra (2004)](https://doi.org/10.1016/j.jalgebra.2003.05.001)

### Algebraic compactly generated triangulated categories are derived categories of dg categories

**Remember:** Algebraic plus compact generators means modules over a dg category.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80, 55P42. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A triangulated category is algebraic if it is triangle equivalent to the stable category of a Frobenius exact category. Such an exact category has enough injectives and projectives, and these classes coincide. It is compactly generated if it admits small coproducts and has a set of compact objects whose shifts detect every nonzero object. An object G is compact if Hom(G, −) preserves small coproducts.

**Problem.** Every algebraic compactly generated triangulated category is equivalent to the derived category of a small dg category (Keller). The algebraic condition is needed: the stable homotopy category is compactly generated but has no dg model.

**How the definition helps.** Being algebraic gives dg morphism complexes between the compact generators, so they form a small dg category A (our own). The work went into showing that the derived tensor functor from D(A) to T is an equivalence (our own). The condition removes the stable homotopy category, where twice the identity of the cone of 2 on the sphere spectrum is nonzero (our own). In an algebraic category, n times the identity of a cone of n is zero, by an explicit null homotopy (our own).

**nLab:** [algebraic triangulated category](https://ncatlab.org/nlab/show/algebraic+triangulated+category). It says: “A triangulated category is called algebraic (in the sense of B. Keller) if it is equivalent to the stable category of a Quillen exact category of a Frobenius category”

**Wikipedia:** [Differential graded category](https://en.wikipedia.org/wiki/Differential_graded_category). It says: “In general, there need not exist dg enhancements of triangulated categories or functors between them, for example stable homotopy category can be shown not to arise from a dg category in this way.”

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369). It says: “Let T be an algebraic compactly generated triangulated category. Then, there exists a small differential graded category and a k-linear equivalence of triangulated categories T → D(A).”

**Sources:**

- [B. Keller, Deriving DG categories, Ann. Sci. École Norm. Sup. 27 (1994) 63–102](https://doi.org/10.24033/asens.1689)
- [S. Schwede, Algebraic versus topological triangulated categories, in Triangulated Categories, LMS Lecture Note Ser. 375 (2010) 389–407](https://doi.org/10.1017/cbo9781139107075.010)

### Defining exactness with homotopies makes dg exact structures match ∞-categorical ones

**Remember:** Record the homotopy that kills the composite, not only the two maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18N60, 18E10. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A three-term homotopy complex in a dg category consists of closed degree-zero arrows f: A → B and g: B → C. It also specifies a degree −1 map h: A → C satisfying dh = gf.

**Problem.** Let A be a dg category whose homotopy category is additive. Then exact structures on A correspond one to one with exact structures, in Barwick's sense, on the dg nerve of A. The dg nerve is an ∞-category, a category with higher homotopies between maps, built from A.

**How the definition helps.** The chosen h supplies the null homotopy of the composite required for an exact square in the dg nerve (our own). The quoted comparison theorem matches the admissible homotopy complexes and their exactness axioms with Barwick’s exact structures (our own).

**Paper or page:** [On exact dg categories](https://arxiv.org/abs/2306.08231v1). It says: “there is a bijection between exact structures on A and exact structures (in the sense of Barwick) on the dg nerve of A.”

**Sources:**

- [Xiaofa Chen, On exact dg categories, arXiv:2306.08231 (2023)](https://arxiv.org/abs/2306.08231v1)

### Dg functors between varieties are Fourier–Mukai, but exact functors need not be

**Remember:** Pull back, tensor with the kernel, then push forward along the other projection.

*Rules out counterexamples.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A Fourier–Mukai transform with kernel K on X × Y sends E to R(pᵧ)∗(L(pₓ)∗E ⊗ᴸ K), using the two projections. A dg quasi-functor here means a morphism between the enhancements in the homotopy category of dg categories over the base field.

**Problem.** For smooth projective varieties over a field k, every k-linear dg quasi-functor between their categories of perfect complexes has a Fourier–Mukai kernel. Some exact functors between bounded derived categories of smooth projective varieties have no such kernel.

**How the definition helps.** A dg functor keeps its higher homotopies, so Toën's description of functors as bimodules applies, and the bimodule is the kernel (our own). An exact functor keeps only the triangulated shadow, and Rizzardo, Van den Bergh and Neeman found one with no kernel. That functor has no dg lift, since a lift would have a kernel by Toën's theorem (our own). The work went into Toën's derived Morita theory.

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “For varieties X and Y, every functor from the dg-category of X to that of Y comes from a complex of sheaves on X×Y by the Fourier–Mukai transform.”

**Paper or page:** [Twisted Hodge diamonds give rise to non-Fourier-Mukai functors](https://arxiv.org/abs/2207.03363). It says: “Finally we use the above computations to apply the construction by A. Rizzardo, M. Van den Bergh and A. Neeman of non-Fourier-Mukai functors and verify that the constructed functors indeed cannot be Fourier-Mukai for odd dimensional quadrics.”

**Sources:**

- [B. Toën, The homotopy theory of dg-categories and derived Morita theory, Invent. Math. 167 (2007) 615–667](https://doi.org/10.1007/s00222-006-0025-y)
- [A. Rizzardo, M. Van den Bergh and A. Neeman, An example of a non-Fourier–Mukai functor between derived categories of coherent sheaves, Invent. Math. (2019)](https://doi.org/10.1007/s00222-019-00862-9)

### Exact sequences of dg categories give long exact sequences in Hochschild homology

**Remember:** Hochschild homology turns dg localizations into triangles.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 19D55, 16E40. arXiv math.KT, math.CT. Level 4: research.

**Definition.** A sequence of small dg categories is exact if its induced sequence of perfect derived categories is Verdier exact up to direct summands. This means the first functor is fully faithful and the second identifies the idempotent-completed quotient with the last category.

**Problem.** For an exact sequence A → B → C of small dg categories, the mixed complexes form a triangle M(A) → M(B) → M(C) (Keller). So Hochschild and cyclic homology have long exact sequences along it.

**How the definition helps.** Keller’s localization theorem sends an exact sequence to a distinguished triangle of derived mixed complexes (our own). Applying Hochschild or cyclic homology to this triangle gives its long exact sequence (our own).

**Paper or page:** [On a theorem of Keller over a base ring](https://arxiv.org/abs/2511.09264). It says: “Then the sequence M(A) → M(B) → M(C) is a triangle in 𝒟Mix.”

**Sources:**

- [B. Keller, Invariance and localization for cyclic homology of DG algebras, J. Pure Appl. Algebra (1998)](https://doi.org/10.1016/s0022-4049(96)00085-0)
- [B. Keller, On the cyclic homology of exact categories, J. Pure Appl. Algebra (1999)](https://doi.org/10.1016/s0022-4049(97)00152-7)

### Functors that preserve direct sums between derived dg categories are bimodules

**Remember:** At each source object, the bimodule gives a representable target module up to quasi-isomorphism.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18N40. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A quasi-functor from A to B is a derived A–B bimodule M that is right quasi-representable. For every object a of A, the right B-module M(a,−) must be isomorphic in D(B) to a representable B-module.

**Problem.** Let A and B be small dg categories over a commutative ring k. Take the quasi-functors between their derived dg categories that preserve small direct sums. In the homotopy category of dg categories, they form the derived dg category of the derived tensor product Aᵒᵖ ⊗ B (Toën).

**How the definition helps.** A sum-preserving functor is fixed by its values on representable modules, and in the homotopy category these values form a bimodule (our own). With strict dg functors the statement fails, because a quasi-equivalence need not have a dg inverse (our own). The work went into Toën's computation of mapping spaces in the model structure on dg categories, through right quasi-representable bimodules (our own).

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369), [A new model for dg-categories](https://arxiv.org/abs/2302.00430). It says: “where the right-hand side is the differential graded category of quasi-functors D<sub>dg</sub>(A) ⇝ D<sub>dg</sub>(B) whose induced k-linear functor D(A) → D(B) preserves small coproducts.”

**Sources:**

- [B. Toën, The homotopy theory of dg-categories and derived Morita theory, Invent. Math. 167 (2007) 615–667](https://doi.org/10.1007/s00222-006-0025-y)

### Morita equivalence lets a thick generating subcategory replace the whole dg category

**Remember:** Morita equivalence sees only what thick closure can build.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A dg functor F from C to D is a Morita equivalence if restriction along F is an equivalence of derived categories of dg modules. Every quasi-equivalence, a quasi-isomorphism on morphism complexes that is an equivalence on homotopy categories, is one. X is Karoubian if idempotents split in its homotopy category H⁰(X), and a thick subcategory is a triangulated subcategory closed under direct summands.

**Problem.** Let X be a Karoubian pretriangulated dg category, and let A be a full dg subcategory whose homotopy category generates H⁰(X) as a thick subcategory. Then the inclusion of A in X is a Morita equivalence (Keller).

**How the definition helps.** The full inclusion identifies representables and hence their thick closures in perfect modules (our own). By hypothesis every representable from X lies in this closure (our own). Keller’s Morita criterion therefore gives an equivalence on derived module categories (our own).

**nLab:** [model structure on dg-categories](https://ncatlab.org/nlab/show/model+structure+on+dg-categories). It says: “functors F: C → D whose induced restriction of scalars functor L f\* : D(D) → D(C) is an equivalence of categories.”

**Paper or page:** [The Derived Auslander-Iyama Correspondence](https://arxiv.org/abs/2208.14413). It says: “Let X be a Karoubian pre-triangulated DG category and A ⊆ X a full DG subcategory such that thick(H⁰(A)) = H⁰(X). Then, the inclusion functor A ↪︎ X is a Morita equivalence”

**Sources:**

- [B. Keller, On differential graded categories, Proceedings of the ICM, Madrid 2006, vol. II](https://doi.org/10.4171/022-2/8)

### Cartan–Eilenberg systems determine poset-filtered complexes up to filtered chain equivalence

**Remember:** Keep the homology of each interval, its induced maps, and its boundary maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 37B30. arXiv math.AT, math.DS. Level 4: research.

**Definition.** For a finite poset P, filter a differential vector space D by subcomplexes D(I) indexed by down-sets, preserving unions as sums and intersections as intersections. Require D(∅)=0 and D(P)=D. The Cartan–Eilenberg system assigns H(D(J)/D(I)) to I ⊆ J, with induced maps and connecting maps for all nested triples.

**Problem.** For a finite poset P, two down-set-filtered differential vector spaces over a field are filtered chain equivalent exactly when their Cartan–Eilenberg systems are isomorphic.

**How the definition helps.** The system keeps all relative homology groups and their connecting maps, which is exactly the data a filtered chain equivalence must preserve. So over a field it is a complete invariant of the filtered complex up to filtered chain equivalence. The work went into building a filtered chain equivalence from an isomorphism of systems. The authors apply it to two open conjectures of Robbin and Salamon on the uniqueness of connection matrices in Conley index theory.

**nLab:** [Cartan-Eilenberg spectral sequence](https://ncatlab.org/nlab/show/Cartan-Eilenberg+spectral+sequence). It says: “axioms for certain systems of bigraded modules H(p,q) ("Cartan-Eilenberg systems") are given which imply the existence of a spectral sequence converging to H(-∞,∞).”

**Paper or page:** [Graded differential groups, Cartan-Eilenberg systems and conjectures in Conley index theory](https://arxiv.org/abs/2406.19977). It says: “Let (D, d<sub>D</sub>) and (D′, d<sub>D′</sub>) be O(P)-filtered differential vector spaces over a field 𝕂. Then, E(D, d<sub>D</sub>) ≅ E(D′, d<sub>D′</sub>) if and only if (D, d<sub>D</sub>) and (D′, d<sub>D′</sub>) are O(P)-filtered chain equivalent”

**Sources:**

- [K. Spendlove and R. Vandervorst, Graded differential groups, Cartan-Eilenberg systems and conjectures in Conley index theory (2024)](https://arxiv.org/abs/2406.19977)

### Conditional convergence lets an isomorphism on one page lift to the abutment

**Remember:** Exhaust the target toward one end and kill both inverse limits toward the other.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For a decreasing tower Dˢ with target D, conditional convergence requires colimₛ→₋∞ Dˢ → D to be an isomorphism. Toward s → +∞, both lim Dˢ and lim¹ Dˢ must vanish in each degree.

**Problem.** Take a map of exact couples whose spectral sequences converge conditionally and lie in the left half-plane, with homological indexing. If the map is an isomorphism on some page Eʳ, then it is an isomorphism on the filtered targets (Boardman).

**How the definition helps.** Conditional convergence is a property of the tower alone, so it holds for both couples without knowing any differentials. The mapping lemma gives isomorphisms on all later pages and on the limit page E∞ (our own summary). Boardman's argument with lim and lim¹ then carries this to the filtered targets (our own summary). It covers half-plane cases such as Adams spectral sequences.

**nLab:** [conditional convergence of spectral sequences](https://ncatlab.org/nlab/show/conditional+convergence+of+spectral+sequences). It says: “then it is said to converge conditionally to 𝒟<sup>0,•</sup> if, when regarding {𝒟<sup>s,•</sup>} as a filtering for 𝒟<sup>0,•</sup> it is exhaustive and complete”

**Paper or page:** [The singularity and cosingularity categories of C\*BG for groups with cyclic Sylow p-subgroups](https://arxiv.org/abs/2107.09389). It says: “where both spectral sequences are conditionally convergent and live in the (homologically indexed) left half plane, if the map Eʳ → E′ʳ is an isomorphism for some r then D → D′ is an isomorphism of filtered graded groups.”

**Sources:**

- [J. M. Boardman, Conditionally convergent spectral sequences, Contemporary Mathematics 239 (1999)](https://doi.org/10.1090/conm/239/03597)

### Filtered objects in stable ∞-categories give all filtration spectral sequences at once

**Remember:** One tower, one homological functor, one spectral sequence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 18N60, 55T05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In a stable ∞-category, such as complexes up to quasi-isomorphism, every map has a cofibre, which plays the role of the cone. A filtered object is any sequence … → Xₙ₋₁ → Xₙ → … of maps, not necessarily inclusions. A homological functor π to an abelian category turns cofibre sequences into long exact sequences.

**Problem.** Every homological functor π gives a functor from filtered objects to spectral sequences, with E₁ given by π of the cofibres of Xₙ₋₁ → Xₙ. The spectral sequence of a filtered complex and the Atiyah–Hirzebruch and Adams spectral sequences are all instances.

**How the definition helps.** Every map has a cofibre with a long exact sequence, so each tower gives an exact couple with no injectivity to check. One construction therefore gives the spectral sequences that classical texts build separately for filtered complexes, double complexes and towers of spaces. The work moves into building the stable ∞-category and its cofibre sequences. Convergence then needs only conditions on the tower and on π.

**nLab:** [spectral sequence of a filtered stable homotopy type](https://ncatlab.org/nlab/show/spectral+sequence+of+a+filtered+stable+homotopy+type). It says: “Any homological functor 𝒞 → 𝒜 from a stable (∞,1)-category to an abelian category induces a functor Filt(𝒞) → SpSeq(𝒜) from the stable (∞,1)-category of filtered objects in 𝒞 to the abelian category of bigraded spectral sequences in 𝒜.”

**Sources:** none listed. No primary source with a working link was found.

### Filtered quasi-isomorphisms make spectral sequence pages from E₁ on choice-free

**Remember:** Invert maps that are quasi-isomorphisms on every graded piece.

*Makes the theorem clean to state or prove.* MSC 18G40 (Spectral sequences, hypercohomology), 18G80. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A map of filtered complexes is a filtered quasi-isomorphism when it induces a quasi-isomorphism on every graded piece grᵖ = Fᵖ/Fᵖ⁺¹. The filtered derived category inverts these maps. A quasi-isomorphism of the underlying complexes is not enough, because it can change the graded pieces.

**Problem.** Let T be left exact on an abelian category with enough injectives, and K a bounded below complex with finite filtrations. A spectral sequence runs from the derived functors of T at each grᵖK to those at K, with pages from E₁ on free of choices.

**How the definition helps.** Filtered injective resolutions admit filtered homotopy equivalences over K by the filtered comparison theorem (our own). Applying the additive functor T preserves those homotopies, so the graded complexes have isomorphic cohomology (our own). This identifies E₁, and the mapping lemma identifies all later pages (our own).

**nLab:** [filtered derived category](https://ncatlab.org/nlab/show/filtered+derived+category). It says: “One defines a morphism in Comp(Fil(A)) to be a quasi-isomorphism if it induces quasi-isomorphisms on each degree of the associated graded objects.”

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/015W). It says: “The construction of this spectral sequence is functorial in the object K• of Comp⁺(Filᶠ(𝒜)) and the terms (Eᵣ, dᵣ) for r ≥ 1 do not depend on any choices.”

**Sources:** none listed. No primary source with a working link was found.

### Shifted cones detect isomorphisms on a chosen spectral sequence page

**Remember:** Shift the filtration by r, and the cone sees page r plus one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 18N40, 18G35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For an increasing filtration and integer r ≥ 0, the r-cone of f: A → B is its mapping cone with FₚCᵣ(f)=FₚB ⊕ (Fₚ₋ᵣA)\[1\]. An r-quasi-isomorphism induces an isomorphism on Eᵣ₊₁, and an r-acyclic complex has Eᵣ₊₁=0.

**Problem.** A map f of filtered chain complexes is an r-quasi-isomorphism exactly when its r-cone is r-acyclic (Cirici, Egas Santander, Livernet and Whitehouse).

**How the definition helps.** The shift puts the off-diagonal term f of the cone differential at filtration drop r (our own). The cone comparison theorem of Cirici, Egas Santander, Livernet and Whitehouse identifies vanishing of its next page with invertibility of the induced page map.

**Paper or page:** [A distributive lattice of model structures relating to spectral sequences](https://arxiv.org/abs/2402.09893). It says: “Let f: A → B be a morphism of filtered chain complexes. Then f ∈ ℰᵣ if and only if Cᵣ(f) is r-acyclic.”

**Sources:**

- [J. Cirici, D. Egas Santander, M. Livernet and S. Whitehouse, Model category structures and spectral sequences, Proceedings of the Royal Society of Edinburgh A (2020)](https://doi.org/10.1017/prm.2019.45)
- [J. A. Brotherston, A distributive lattice of model structures relating to spectral sequences (2024)](https://arxiv.org/abs/2402.09893)

### Strict differentials make a filtered complex's spectral sequence degenerate at E₁

**Remember:** The image of each filtration step equals the image intersected with that step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G40 (Spectral sequences, hypercohomology), 14C30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** Take decreasing filtrations, and write gr for the associated graded, the sum of the quotients Fᵖ/Fᵖ⁺¹. A map f from A to B of filtered objects always satisfies f(FᵖA) ⊆ f(A) ∩ FᵖB. It is strict when equality holds for every p.

**Problem.** Let K be a complex with a finite filtration. Its spectral sequence degenerates at E₁, meaning dᵣ = 0 for all r ≥ 1, exactly when every differential of K is strict (Deligne).

**How the definition helps.** For strict maps, taking the associated graded commutes with kernels, images and cohomology, so E₁ = H(gr K) equals gr H(K) = E∞. Deligne proved the full equivalence, which turns a statement about all pages into one condition on d (our own). Without strictness the graded loses information. The identity of a field k, from k in filtration degree −1 to k in degree 0, is bijective with zero graded (our own).

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/0128). It says: “Let A → B → C be a complex of filtered objects of 𝒜. Assume α : A → B and β : B → C are strict morphisms of filtered objects. Then gr(Ker(β)/Im(α)) = Ker(gr(β))/Im(gr(α))).”

**Sources:**

- [P. Deligne, Théorie de Hodge II, Publications Mathématiques de l'IHÉS 40 (1971)](https://doi.org/10.1007/BF02684692)

### Butterflies describe weak morphisms of 2-groups with ordinary groups

**Remember:** One diagonal extends, one composes trivially, and conjugation realizes both actions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 18N10, 20E22. arXiv math.CT, math.AT. Level 4: research.

**Definition.** For crossed modules ∂ₓ and ∂ᵧ, a butterfly has homomorphisms i: Y₁→P, j: X₁→P, p: P→X₀ and q: P→Y₀. Require i,p to form a short exact sequence, qj to be trivial, pj=∂ₓ and qi=∂ᵧ. For every u ∈ P, conjugation by u on j and i intertwines the given actions of p(u) and q(u), respectively.

**Problem.** Weak 2-functors between strict 2-groups correspond to butterflies between their crossed modules (Noohi, Aldrovandi–Noohi). Strict maps of crossed modules give only the strict 2-functors.

**How the definition helps.** Butterflies capture exactly the weak 2-functors, and they are still diagrams of ordinary groups. Crossed modules correspond to categories internal to groups. Under this correspondence, butterflies are the saturated anafunctors internal to groups, functors defined through a cover instead of directly.

**nLab:** [butterfly](https://ncatlab.org/nlab/show/butterfly). It says: “Under the correspondence between crossed modules and categories internal to Grp, butterflies are precisely the saturated anafunctors internal to Grp, using the Grothendieck pretopology of surjective homomorphisms.”

**Sources:**

- [Behrang Noohi, On weak maps between 2-groups, arXiv:math/0506313 (2005)](https://arxiv.org/abs/math/0506313)
- [Ettore Aldrovandi, Behrang Noohi, Butterflies I: morphisms of 2-group stacks, Advances in Mathematics 221 (2009) 687–773, arXiv:0808.3627](https://arxiv.org/abs/0808.3627)

### Filtered spaces give a van Kampen theorem in all dimensions

**Remember:** Filter the space, and gluing pieces becomes a colimit of algebra.

*Makes the theorem clean to state or prove.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 55U35. arXiv math.AT. Level 4: research.

**Definition.** A filtered space is a space X with an increasing sequence X₀ ⊆ X₁ ⊆ ⋯ of subspaces. Each open U inherits the filtration Uₙ = U ∩ Xₙ.

**Problem.** Suppose a filtered space has an open cover whose nonempty finite intersections satisfy the Brown–Higgins connectivity conditions for their induced filtrations. Its fundamental crossed complex is the coequalizer of the diagram from pairwise overlaps to cover members.

**How the definition helps.** The filtration lets Π retain paths in degree one and relative homotopy groups in higher degrees (our own). Brown and Higgins prove the coequalizer statement using subdivision and composition in the associated cubical ω-groupoids with connections (our own).

**nLab:** [Nonabelian Algebraic Topology](https://ncatlab.org/nlab/show/Nonabelian+Algebraic+Topology), [higher homotopy van Kampen theorem](https://ncatlab.org/nlab/show/higher+homotopy+van+Kampen+theorem). It says: “the Seifert-van Kampen theorem is most naturally understood as being not about homotopy groups, but about the cubical fundamental omega-groupoid of a filtered space and may be generalized to a higher homotopy van Kampen theorem this way.”

**Sources:**

- [R. Brown, P. J. Higgins, Colimit theorems for relative homotopy groups, Journal of Pure and Applied Algebra 22 (1981) 11–41](https://doi.org/10.1016/0022-4049(81)90080-3)
- [R. Brown, P. J. Higgins, R. Sivera, Nonabelian Algebraic Topology, EMS Tracts in Mathematics (2011)](https://doi.org/10.4171/083)

### Relative homotopy squares compose strictly and give a 2-dimensional van Kampen theorem

**Remember:** Fix where the edges and corners may go, and squares compose strictly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 55Q05, 18N10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For C ⊆ A ⊆ X, a relative square is a continuous map I² → X taking edges into A and vertices into C. Two squares represent the same element of ρ(X,A,C) if a homotopy through relative squares fixes all four vertices.

**Problem.** The homotopy squares ρ(X, A, C) form a strict double groupoid with connections. It satisfies a van Kampen theorem in dimension 2, which computes nonabelian second relative homotopy groups.

**How the definition helps.** A homotopy of matching edges lets representatives be adjusted and pasted, and the relative homotopy class makes the result independent of choices (our own). Brown and Higgins establish the double groupoid laws and the van Kampen theorem under its cover connectivity hypotheses (our own). The associated crossed module records π₂(X,A,c) at vertices c ∈ C (our own).

**nLab:** [higher dimensional algebra](https://ncatlab.org/nlab/show/higher+dimensional+algebra). It says: “Brown and Higgins realised in 1974 that this could be achieved fairly easily in a relative situation”

**Sources:**

- [R. Brown, P. J. Higgins, On the connection between the second relative homotopy groups of some related spaces, Proceedings of the London Mathematical Society (3) 36 (1978) 193–212](https://doi.org/10.1112/plms/s3-36.2.193)

### Chains of monomorphisms extend Buchweitz's theorem from complexes to N-complexes

**Remember:** Replace single objects with chains of inclusions when N exceeds two.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G65 (Stable module categories), 18G35, 18G80. arXiv math.RT, math.CT. Level 4: research.

**Definition.** An N-complex is a sequence of maps in which any N consecutive maps compose to zero; N = 2 gives ordinary complexes. The N-stable category has as objects chains of N − 2 monomorphisms in the base category. Its maps are maps of chains, with maps that factor through projective-injective chains set to zero.

**Problem.** Let A be a Frobenius exact abelian category, one in which projective and injective objects coincide and there are enough of them. Then three categories are equivalent: the N-stable category, the homotopy category of acyclic N-complexes of projectives, and the N-singularity category. The N-singularity category is the bounded derived category of N-complexes with bounded complexes of projectives sent to zero.

**How the definition helps.** Buchweitz's theorem needs a stable category, and chains of monomorphisms supply the right one for N-complexes. In our own explanation, at N = 2 a chain is a single object, so the definition gives the ordinary stable category. Building the functors and proving that they are equivalences is still the paper's work.

**Paper or page:** [The $N$-Stable Category](https://arxiv.org/abs/2109.07728v2). It says: “We identify this "N-stable category" via the monomorphism category and prove Buchweitz's theorem for N-complexes over a Frobenius exact abelian category.”

**Sources:**

- [Jeremy R. B. Brightbill, Vanessa Miemietz, The $N$-Stable Category, arXiv:2109.07728 (2021)](https://arxiv.org/abs/2109.07728v2)

### Cofibrant modules give every group ring a triangulated stable module category

**Remember:** Tensor with finite-image functions using the diagonal action, then test projectivity.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G65 (Stable module categories), 20J05. arXiv math.RT, math.GR. Level 4: research.

**Definition.** Let B(G,R) consist of finite-image functions G → R with pointwise R-module structure and left translation by G (our own). An RG-module M is cofibrant if M ⊗<sub>R</sub> B(G,R), with diagonal G-action, is projective over RG.

**Problem.** For every group G and commutative ring R, the stable category of cofibrant RG-modules is triangulated. It is triangle equivalent to the homotopy category of fibrant RG-modules.

**How the definition helps.** The quoted Frobenius theorem identifies projective-injectives among cofibrant modules with the projective RG-modules. Happel’s theorem makes the stable category triangulated (our own). The equivalence with the homotopy category of fibrant modules uses the cofibrant–fibrant comparison theorem (our own).

**Paper or page:** [Gorenstein cohomological dimension and stable categories for groups](https://arxiv.org/abs/2206.09589), [Gorenstein cohomological dimension and stable categories for groups](https://arxiv.org/abs/2206.09589). It says: “Then the subcategory of cofibrant RG-modules 𝒞of(RG) is a Frobenius category, whose projective and injective objects coincide and are precisely the projective RG-modules.”

**Sources:**

- [Gorenstein cohomological dimension and stable categories for groups, arXiv:2206.09589](https://arxiv.org/abs/2206.09589)

### Defining Tate–Hochschild cohomology by singularity categories makes it detect smoothness

**Remember:** A perfect diagonal is zero in the singularity category.

*True by definition. Confidence: medium.* MSC 18G65 (Stable module categories), 16E40. arXiv math.RT, math.RA. Level 4: research.

**Definition.** For a finite-dimensional algebra A over a field, let Aᵉ = A ⊗ Aᵒᵖ be its enveloping algebra, so A-bimodules are Aᵉ-modules. Tate–Hochschild (singular Hochschild) cohomology is HHⁿsg(A) = Hom(A, A\[n\]) in the singularity category of Aᵉ, for every integer n. The algebra A is homologically smooth if A is a perfect complex of bimodules.

**Problem.** For a finite-dimensional algebra A over a field, the Tate–Hochschild cohomology HH∗sg(A) is zero if and only if A is homologically smooth.

**How the definition helps.** A perfect diagonal becomes zero in the singularity category, so all its graded self-maps vanish (our own). Conversely, vanishing in degree zero kills the identity, making the diagonal zero there (our own). The kernel of the singularity quotient consists exactly of perfect complexes (our own).

**Paper or page:** [DG singular equivalence and singular locus](https://arxiv.org/abs/2403.13637). It says: “There is a canonical isomorphism of graded algebras between the Tate-Hochschild cohomologies HH∗<sub>sg</sub>(A) of A and the Hochschild cohomologies of S<sub>dg</sub>(A).”

**Sources:**

- [Bernhard Keller, Singular Hochschild cohomology via the singularity category, Comptes Rendus Mathématique 356 (2018) 1106–1111](https://doi.org/10.1016/j.crma.2018.10.003)
- [Ragnar-Olaf Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, AMS (2021)](https://doi.org/10.1090/surv/262)

### Endotrivial modules are the invertible objects of the stable module category

**Remember:** Invertible up to projectives means endotrivial.

*Makes the theorem clean to state or prove.* MSC 18G65 (Stable module categories), 20C20. arXiv math.RT, math.GR. Level 4: research.

**Definition.** Let G be finite and k a field of positive characteristic dividing \|G\|. A finite-dimensional kG-module M is endotrivial if Endₖ(M), with conjugation action, is isomorphic to k ⊕ P for some projective kG-module P.

**Problem.** For a finite group G, the endotrivial modules modulo stable isomorphism form an abelian group T(G) under tensor product, which contains every syzygy Ωⁿ(k). For an elementary abelian p-group of rank at least 2, over a field of characteristic p, T(G) ≅ ℤ, generated by Ω(k) (Dade).

**How the definition helps.** The dual M\* is the tensor inverse of an endotrivial module modulo projectives, and tensor symmetry makes the group abelian (our own). Stably, tensoring with Ω(k) acts as syzygy, so all its positive and negative powers belong to the group (our own). Dade’s classification gives the stated generator and infinite order in elementary abelian rank at least two (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308). It says: “π₀ pic StMod(kC<sub>p</sub>ⁿ) ≅ 0 if p = 2 and n = 1; C₂ if p is odd and n = 1; ℤ if n ≥ 2.”

**Sources:**

- [Everett C. Dade, Endo-permutation modules over p-groups II, Annals of Mathematics 108 (1978) 317–346](https://doi.org/10.2307/1971169)

### Finite Gorenstein dimension is exactly what lets Gorenstein projectives fill singularity categories

**Remember:** Stable Gorenstein projectives always sit inside; finite dimension makes them everything.

*Rules out counterexamples.* MSC 18G65 (Stable module categories), 18G80, 16E65. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A Gorenstein projective object is a cycle in an exact complex of projectives that remains exact under Hom(−,P) for every projective P. An object has finite Gorenstein projective dimension if it has a finite resolution by Gorenstein projectives.

**Problem.** Let 𝒜 be an abelian category with enough projectives. The stable category of Gorenstein projectives embeds in the singularity category, and it fills it exactly when every object has finite Gorenstein projective dimension.

**How the definition helps.** A finite Gorenstein projective dimension gives a Gorenstein projective syzygy whose shift represents the original object in the singularity category (our own). The quoted theorem proves full faithfulness and the converse. For finite modules over k\[x,y\]/(x,y)², all Gorenstein projectives are free, but the residue field has infinite projective dimension (our own).

**Paper or page:** [Lambda-pure global dimension of Grothendieck categories and some applications](https://arxiv.org/abs/2411.05356). It says: “Then the canonical functor F: 𝒢(𝒜) → 𝐃ᵇ<sub>sg</sub>(𝒜) is a fully faithful triangle functor. Moreover, F is a triangulated equivalent if and only if the Gorenstein projective dimension of each object in 𝒜 is finite”

**Sources:**

- [Ragnar-Olaf Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, AMS (2021)](https://doi.org/10.1090/surv/262)

### Inverting the syzygy on the stable category gives the singularity category

**Remember:** Force the syzygy to be invertible and you get the singularity category.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G65 (Stable module categories), 16E35. arXiv math.RT. Level 4: research.

**Definition.** For an Artin algebra Λ, stabilization uses pairs (X,n) of a finitely generated Λ-module and an integer. Maps from (X,n) to (Y,m) form the colimit of stable Hom(Ωᵖ⁻ⁿX, Ωᵖ⁻ᵐY) over integers p ≥ max(n,m). The transition maps apply syzygy to stable morphisms.

**Problem.** For an Artin algebra Λ, the stabilization of its stable module category with respect to Ω is triangle equivalent to the singularity category Dsg(Λ). No Gorenstein or self-injective hypothesis is needed.

**How the definition helps.** In the singularity category projectives are zero, so every module is a shift of its syzygy and Ω is already invertible. The stabilization is the universal way to make Ω invertible, so the comparison functor exists by its universal property (our own). The work went into showing the functor is fully faithful and dense (Keller and Vossieck, and Buchweitz). In the quoted paper, Ωnc ⊗ − is a functorial model of Ω.

**Paper or page:** [The singularity category as a stable module category](https://arxiv.org/abs/2509.01056). It says: “(Buchweitz, Keller-Vossieck) The functor above F induces a triangle equivalence 𝒮(Λ-m̲o̲d̲, Ω<sub>nc</sub> ⊗\_Λ −) ⟶ 𝐃<sub>sg</sub>(Λ)”

**Sources:**

- [The singularity category as a stable module category, arXiv:2509.01056](https://arxiv.org/abs/2509.01056)

### A∞-functors compute the derived internal Hom of dg categories

**Remember:** The bar map commutes with differentials, and only the first component sees identities.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G70 (\\(A\_\\)-categories, relations with homological mirror symmetry), 18G35. arXiv math.CT. Level 4: research.

**Definition.** An A∞-functor assigns objects and multilinear maps fₙ on composable strings, for n ≥ 1, of degree 1−n. Its suspended components define a coalgebra map between bar constructions that commutes with their differentials. Strict unitality requires f₁ to preserve identities and every fₙ with n &gt; 1 to vanish on strings containing an identity.

**Problem.** Work over a field and in the homotopy category of dg categories. There, the internal Hom from A to B is isomorphic to the dg category of strictly unital A∞-functors (Faonte; Canonaco, Ornaghi and Stellari). So no free resolution of A is needed first.

**How the definition helps.** An A∞-functor out of A is a dg functor out of the bar–cobar resolution of A (our own). That resolution is a free dg category equivalent to A in the homotopy category (our own). With strict dg functors one must first replace A by such a free resolution, as in Toën's construction (our own). The work went into comparing A∞-functors with Toën's internal Hom (our own).

**nLab:** [model structure on dg-categories](https://ncatlab.org/nlab/show/model+structure+on+dg-categories). It says: “The derived internal Hom in the homotopy category of DG-categories is equivalent to the dg-category of A∞-functors.”

**Sources:**

- [G. Faonte, A∞-functors and homotopy theory of dg-categories, J. Noncommut. Geom. 11 (2017)](https://doi.org/10.4171/jncg/11-3-6)
- [A. Canonaco, M. Ornaghi and P. Stellari, Localizations of the category of A∞ categories and internal Homs, Doc. Math. (2019)](https://doi.org/10.4171/dm/731)

### Twisted complexes over an A∞-category model the triangulated category its objects generate

**Remember:** Shift and sum the objects, then twist by a triangular solution of the Maurer–Cartan equation.

*Makes the theorem clean to state or prove.* MSC 18G70 (\\(A\_\\)-categories, relations with homological mirror symmetry), 18G35. arXiv math.CT. Level 4: research.

**Definition.** A twisted complex over an uncurved A∞-category A consists of a finite sum of shifted objects and a strictly triangular degree-one endomorphism δ. Its entries satisfy ∑ₙ≥₁ mₙ(δ,…,δ) = 0.

**Problem.** The A∞ Yoneda embedding of A into A∞-modules over A factors through Tw A. It induces an equivalence from H⁰(Tw A) to the triangulated subcategory of the derived category of A generated by its objects (Lefèvre-Hasegawa).

**How the definition helps.** Triangularity lets each successive summand attach by a cone (our own). Lefèvre-Hasegawa’s Yoneda theorem for twisted complexes identifies their cohomology category with the triangulated closure of the representables.

**Paper or page:** [Perverse coherent extensions on Calabi-Yau threefolds and representations of cohomological Hall algebras](https://arxiv.org/abs/2309.16582). It says: “inducing an equivalence of triangulated categories H⁰(Y₂): H⁰(Tw A) → Triang(Aᵢ) where Triang(Aᵢ) denotes the triangulated subcategory of D(A) generated by the objects Aᵢ.”

**Sources:**

- [M. Kontsevich, Homological algebra of mirror symmetry, Proceedings of the ICM, Zürich 1994](https://doi.org/10.1007/978-3-0348-9078-6_11)

### A set of compact objects generates a t-structure

**Remember:** Orthogonality defines the halves, and compactness builds the truncations.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories). arXiv math.CT, math.AG. Level 4: research.

**Definition.** Let S₀ be a set of compact objects in a triangulated category D with direct sums. Define D≥1 as the objects that receive no nonzero maps from any shift S\[n\] with S in S₀ and n ≥ 0. Define D≤0 as the objects with no nonzero maps into D≥1.

**Problem.** The pair of D≤0 and D≥0 = D≥1\[1\] is a t-structure (Alonso, Jeremías and Souto). Here D≤0 is the smallest class that contains S₀ and is closed under positive shifts, extensions and sums.

**How the definition helps.** Defining D≥1 by orthogonality makes the vanishing axiom and the shift conditions automatic, so only the truncation triangle needs work (our own). That triangle is built as a homotopy colimit that attaches sums of shifted objects of S₀ step by step. Compactness of S₀ makes this colimit land in D≤0 with cone in D≥1 (our own summary). For S₀ = {R} in the derived category of a ring R, this gives the standard t-structure (our own).

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “Many t-structures arise by means of the following fact: in a triangulated category with arbitrary direct sums, and a set S₀ of compact objects in D, the subcategories”

**Sources:**

- [Leovigildo Alonso Tarrío, Ana Jeremías López and María José Souto Salorio, Construction of t-structures and equivalences of derived categories, Trans. Amer. Math. Soc. 355 (2003) 2523–2543](https://doi.org/10.1090/S0002-9947-03-03261-6)

### Allowing massless semistable objects makes stability pass to a quotient category

**Remember:** Let some objects weigh nothing, then divide them out.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.RT, math.CT. Level 4: research.

**Definition.** Fix a locally finite slicing P of a triangulated category and an additive charge Z on its chosen charge lattice. Require Z(E) = m·exp(iπφ) with m ≥ 0 for every nonzero E in P(φ). For some C &gt; 0, require \|Z(E)\| ≥ C‖\[E\]‖ for every stable E of positive mass (our own).

**Problem.** In a lax stability condition, the massless objects form a thick subcategory, one closed under shifts, cones of maps and direct summands. The Verdier quotient by this subcategory, which makes the massless objects zero, carries an induced ordinary stability condition.

**How the definition helps.** The lax definition lets stability conditions in which some objects have lost all their mass sit at the edge of the stability space. The theorem then describes such a point as an ordinary stability condition on a quotient category. In our own explanation, this is what lets the lax conditions form a partial compactification. Proving that the massless objects form a thick subcategory and that stability descends to the quotient is the paper's work.

**Paper or page:** [Partial compactification of stability manifolds by massless semistable objects](https://arxiv.org/abs/2208.03173v1). It says: “The subcategory of massless objects is thick and there is an induced classical stability on the quotient category.”

**Sources:**

- [Nathan Broomhead, David Pauksztello, David Ploog, Jon Woolf, Partial compactification of stability manifolds by massless semistable objects, arXiv:2208.03173 (2022)](https://arxiv.org/abs/2208.03173v1)

### BIK stratification is defined so that support classifies localizing ideals

**Remember:** Build every ideal from points, and make each point indivisible.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 13D09. arXiv math.CT, math.RT. Level 4: research.

**Definition.** Let a graded noetherian ring act on a compactly generated tensor triangulated category K, with local cohomology functors Γₚ at homogeneous primes p. Stratification requires every X to belong to the localizing tensor ideal generated by all ΓₚX. Each nonzero ΓₚK must also be minimal among nonzero localizing tensor ideals.

**Problem.** If K is stratified by R, then support is a bijection. It goes from the localizing tensor ideals of K onto the subsets of the support of K.

**How the definition helps.** Every ideal is generated by the pieces of its objects, and each nonzero piece generates its entire prime component (our own). Thus the ideal records exactly its occupied primes. Conversely, the components at any chosen subset generate an ideal supported precisely there, since distinct components are orthogonal (our own).

**Paper or page:** [On localizing subcategories of Lie superalgebra representations](https://arxiv.org/abs/2503.13639). It says: “If 𝒦 is stratified in the sense of BIK, then the maps σ and τ provide mutually inverse bijections between the set of ⊗-ideal localizing subcategories of 𝒦 and subsets of Proj R”

**Sources:**

- [Dave Benson, Srikanth B. Iyengar and Henning Krause, Stratifying triangulated categories, J. Topol. 4 (2011) 641–666](https://doi.org/10.1112/jtopol/jtr017)

### Bounded t-structures make the Grothendieck group equal to that of the heart

**Remember:** Every object fits between two truncation bounds.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 18F30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A t-structure on D is bounded if every object X belongs to D≥a ∩ D≤b for some integers a ≤ b.

**Problem.** For a bounded t-structure with heart A, the inclusion of A gives an isomorphism from K₀(A) to K₀(D). Its inverse sends \[X\] to the alternating sum of the classes \[Hⁱ(X)\].

**How the definition helps.** Finite truncation towers give the alternating sum, and long exact cohomology sequences make it additive on triangles (our own). In the bounded-above derived category of finite-dimensional k-vector spaces, take T = ⨁ₙ≥₀ k\[2n\] (our own). Then T ≅ k ⊕ T\[2\] forces \[k\] = 0, although dimension detects \[k\] in the heart. Boundedness excludes T.

**Wikipedia:** [Bridgeland stability condition](https://en.wikipedia.org/wiki/Bridgeland_stability_condition). It says: “There is a natural isomorphism of Grothendieck groups K₀(A) ≅ K₀(D) that turns the stability function into a central charge”

**Sources:** none listed. No primary source with a working link was found.

### Bridgeland stability conditions are bounded hearts with a stability function

**Remember:** Charge every nonzero heart object, then filter it by decreasing semistable phases.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** On an abelian category A, a stability function is a homomorphism Z from K₀(A) to ℂ taking every nonzero object into the semi-closed upper half-plane. This region consists of numbers with positive imaginary part and negative real numbers. The Harder–Narasimhan property requires every nonzero object to admit a finite filtration by semistable factors of strictly decreasing phase.

**Problem.** (Bridgeland) A pre-stability condition on D is the same as a bounded heart A with a stability function that has the Harder–Narasimhan property. That property says each object of A has a filtration with semistable factors of strictly decreasing phase.

**How the definition helps.** The slicing definition deforms well but is hard to write down, while the heart form reduces construction to one abelian category (our own). There one checks a sign condition and the existence of Harder–Narasimhan filtrations. The work is Bridgeland's Proposition 5.3, which rebuilds the slicing from the heart. The heart is then the objects of phase in (0, 1\], and most known examples are built in this form (our own).

**Wikipedia:** [Bridgeland stability condition](https://en.wikipedia.org/wiki/Bridgeland_stability_condition). It says: “Conversely if (Z,P) is a stability condition, then the subcategory P(0,1\] is the heart of a bounded t-structure on which Z gives a stability function with Harder—Narasimhan property.”

**Paper or page:** [A short proof of the deformation property of Bridgeland stability conditions](https://arxiv.org/abs/1606.02169v3). It says: “To give a pre-stability condition on D is equivalent to giving a heart A of a bounded t-structure, and a stability function Z on A with the HN property.”

**Sources:**

- [Tom Bridgeland, Stability conditions on triangulated categories, Ann. of Math. 166 (2007) 317–345](https://doi.org/10.4007/annals.2007.166.317)

### Closure under cones is what lets the spectrum see Spec R

**Remember:** Without cones, ideals of projectives only see connected components.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 13D09, 14A30. arXiv math.CT, math.AC. Level 4: research.

**Definition.** A perfect complex over a commutative ring R is an object of its derived category isomorphic to a bounded complex of finitely generated projective modules.

**Problem.** For a commutative ring R, Spc of the perfect complexes over R is homeomorphic to Spec R.

**How the definition helps.** Perfect complexes include the cone of multiplication by each f ∈ R, whose support is exactly V(f) (our own). Over ℤ, finitely generated projectives alone see only one connected component (our own). Thomason’s classification identifies the prime tensor ideals of perfect complexes with the individual ring primes (our own).

**Paper or page:** [Tensor extriangulated categories](https://arxiv.org/abs/2502.18257). It says: “If R is a commutative hereditary noetherian ring, then the Balmer spectrum BSpc(proj(R)) is the finite set of connected components of the Zariski spectrum ZSpec(R) equipped with the discrete topology”

**Sources:**

- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)
- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)
- [Raphael Bennett-Tennenhaus, Isambard Goodbody, Janina C. Letz and Amit Shah, Tensor extriangulated categories, arXiv:2502.18257 (2025)](https://arxiv.org/abs/2502.18257)

### Compact generation makes sum-to-product cohomological functors representable

**Remember:** Maps from compact generators commute with sums, and their shifts detect zero objects.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 55U35. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An object G of a triangulated category D with direct sums is compact if maps out of G commute with direct sums. D is compactly generated if a set of compact objects detects zero. That is, X is zero when every map to X from every shift of a generator is zero.

**Problem.** (Neeman) In a compactly generated triangulated category D, each cohomological functor H from D to abelian groups that sends sums to products is representable. Here cohomological means contravariant and sending triangles to long exact sequences.

**How the definition helps.** Compact generators let one build the representing object W in countably many steps, each checked on generators (our own summary of Neeman). W is the homotopy colimit of these steps. The result mirrors Brown's theorem for spectra, with generators in place of spheres. Applied to Hom(F(−), Y), it gives a right adjoint to each exact F out of D that preserves sums.

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “Let D be a compactly generated triangulated category, H: Dᵒᵖ → Ab a cohomological functor which takes coproducts to products. Then H is representable.”

**Paper or page:** [Derived, Lemma 13.38.1](https://stacks.math.columbia.edu/tag/0A8F), [Derived, Proposition 13.38.2](https://stacks.math.columbia.edu/tag/0A8G). It says: “Let H : D → Ab be a contravariant cohomological functor which transforms direct sums into products. Then H is representable.”

**Sources:**

- [Amnon Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/S0894-0347-96-00174-9)

### Compact generators detect zero exactly when they build all compact objects

**Remember:** Detecting zero with one compact object means building all compacts from it.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 13D09. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A compact object E generates D if X = 0 whenever every map from every shift E\[n\] to X is zero. E is a classical generator of the compact objects if each of them comes from E by finitely many shifts, cones and direct summands.

**Problem.** If D has direct sums, a compact object E generates D exactly when D is compactly generated and E classically generates the compact objects. So every perfect complex over a ring R is built from R by finitely many shifts, cones and direct summands.

**How the definition helps.** The weak definition only asks that maps out of E detect zero, and the theorem upgrades this to a finite building process. The work is Neeman's proof that each object is a homotopy colimit of objects built from sums of shifts of E. A compact object maps into such a colimit through a finite stage, so it is a summand of a finitely built object (our own).

**Paper or page:** [Derived, Proposition 13.37.6](https://stacks.math.columbia.edu/tag/09SR). It says: “Let E be a compact object of D. The following are equivalent (1) E is a classical generator for D<sub>c</sub> and D is compactly generated, and (2) E is a generator for D.”

**Sources:**

- [Amnon Neeman, The connection between the K-theory localization theorem of Thomason, Trobaugh and Yao and the smashing subcategories of Bousfield and Ravenel, Ann. Sci. École Norm. Sup. 25 (1992) 547–566](https://doi.org/10.24033/asens.1659)

### Defining Bousfield localization by an adjoint makes local objects detectable

**Remember:** A map into a local object cannot see an object killed by the quotient.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 4: research.

**Definition.** A Bousfield localization is a Verdier quotient Q of a triangulated category that admits a fully faithful right adjoint R. An object is local if it is isomorphic to R(Y) for some object Y of the quotient.

**Problem.** An object X is isomorphic to R of some object exactly when every map into X from an object killed by Q is zero.

**How the definition helps.** Adjunction gives Hom(A,R(Y)) = 0 whenever Q(A) = 0 (our own). For X right orthogonal to the kernel, complete the unit X → RQ(X) to a triangle with cone C. Since Q inverts the unit, C lies in the kernel. Applying Hom(C,−) gives Hom(C,C) = 0 by orthogonality to RQ(X) and X\[1\], so the unit is invertible (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “which is then (automatically) triangulated and fully faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Defining perverse sheaves as a heart makes them an abelian category

**Remember:** Perverse sheaves are abelian because every heart is abelian.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 32S60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** Fix a perversity and its perverse t-structure on a constructible derived category. A constructible complex is a perverse sheaf if it belongs to both halves of that t-structure.

**Problem.** The heart of any t-structure is abelian, and its short exact sequences are the distinguished triangles with all three terms in the heart. So perverse sheaves form an abelian category, although they are complexes and not sheaves.

**How the definition helps.** Once perverse sheaves are defined as a heart, being abelian is inherited from the general theorem of Beilinson, Bernstein and Deligne. Kernels and cokernels in the heart come from truncating the cone of a map (our own). Without this definition one would have to build kernels of maps of complexes by hand (our own). The work moves to that general theorem and to the proof that the perversity conditions define a t-structure, which glues over strata.

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “The category of perverse sheaves is, by definition, the core of the so-called perverse t-structure on the derived category of the category of sheaves on a complex analytic space X”

**Paper or page:** [The left heart and exact hull of an additive regular category](https://arxiv.org/abs/2105.11483v2). It says: “Moreover, a sequence 0 → X →f Y →g Z → 0 is a short exact sequence in T♥ if and only if there is a triangle X →f Y →g Z → Σ(X) in T.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the comparison map through cones makes it a spectral map

**Remember:** r lies in ρ(P) when r stops being invertible modulo P.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** For an essentially small tensor triangulated category K, let R be the graded endomorphism ring of its unit. For each prime tensor ideal P, define ρ(P) as the ideal generated by homogeneous r in R whose cone lies outside P.

**Problem.** ρ is a spectral continuous map from Spc K to Specʰ(R), natural in K. For perfect complexes over a commutative ring A it is a homeomorphism onto Spec A.

**How the definition helps.** The inverse image of V(r) is the support of cone(r), directly from the formula (our own). Its complement is quasi-compact, and tensor triangulated functors preserve these cones (our own). Balmer’s comparison theorem establishes primality and identifies the map for perfect complexes over a commutative ring (our own).

**Paper or page:** [Periods in equivariant and motivic contexts](https://arxiv.org/abs/2511.14325), [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446). It says: “the formula ρ(𝒫) = {r ∈ ℛ\_ℳ \| cone(r) ∉ 𝒫} defines a spectral continuous map”

**Sources:**

- [Paul Balmer, Spectra, spectra, spectra – Tensor triangular spectra versus Zariski spectra of endomorphism rings, Algebr. Geom. Topol. 10 (2010) 1521–1563](https://doi.org/10.2140/agt.2010.10.1521)

### Defining the spectrum by prime thick ideals makes it classify radical ideals

**Remember:** A prime contains a factor of every product it contains.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 18M05. arXiv math.CT, math.AG. Level 4: research.

**Definition.** Fix an essentially small tensor triangulated category K. A proper thick tensor ideal P is prime if a⊗b ∈ P implies a ∈ P or b ∈ P. The Balmer spectrum consists of these primes, with closed basis supp(a) = {P ∣ a ∉ P} as a ranges over K.

**Problem.** (Balmer) Support gives an order-preserving bijection from radical thick tensor ideals of K to Thomason subsets of Spc K. For perfect complexes on a quasi-compact quasi-separated scheme X, the spectrum is X itself.

**How the definition helps.** Support on Spc K has the formal properties of a support theory by construction, so prime-ideal arguments give the bijection (our own). Thomason subsets are unions of closed sets with quasi-compact complements. Earlier classifications by Hopkins, Neeman and Thomason each needed their own proof, and now the work moves to computing Spc K (our own). The computations use Thomason's theorem for schemes and the nilpotence theorem of Devinatz, Hopkins and Smith for finite spectra (our own).

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

**Definition.** The patch topology on a spectral space has the quasi-compact open sets and their complements as a subbasis. A subset is patch-dense if it meets every nonempty patch-open set. Functors Fᵢ jointly detect ⊗-nilpotence if each map killed by every Fᵢ has a tensor power equal to zero.

**Problem.** Let K be rigid, and let tensor triangulated functors Fᵢ out of K jointly detect ⊗-nilpotence. Then the union of the images of the maps Spc(Fᵢ) is patch-dense, so it determines Spc K.

**How the definition helps.** Patch-density is the right notion because a patch-dense subset, with the supports on it, already determines the spectrum. Ordinary density is too weak, since one generic point is dense in an irreducible space. If every Fᵢ kills an object a, its identity map is ⊗-nilpotent, so a = 0 because K is rigid (our own sketch). So the images meet every nonempty supp(a), and the paper extends this to all patch-open sets.

**Paper or page:** [Patch-density in tensor-triangular geometry](https://arxiv.org/abs/2503.15274), [Patch-density in tensor-triangular geometry](https://arxiv.org/abs/2503.15274). It says: “If 𝒦 is rigid and a family of tt-functors {Fᵢ: 𝒦 → ℒᵢ} jointly detects ⊗-nilpotence then the subset ∪ᵢ Im(Spc(Fᵢ)) ⊆ Spc(𝒦) is patch-dense.”

**Sources:**

- [Patch-density in tensor-triangular geometry, arXiv:2503.15274 (2025)](https://arxiv.org/abs/2503.15274)

### Finite global dimension gives the bounded derived category a Serre functor

**Remember:** One finite bound suffices for every module’s projective resolution.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 16E10, 16G70. arXiv math.RT. Level 4: research.

**Definition.** A finite-dimensional algebra A has finite global dimension if some integer d bounds the projective dimension of every A-module.

**Problem.** Let A be a finite-dimensional algebra of finite global dimension. Then the derived Nakayama functor is a Serre functor on the bounded derived category of finitely generated A-modules. So this category has Auslander–Reiten triangles (Happel).

**How the definition helps.** Finite global dimension gives every bounded complex a bounded projective resolution (our own). The derived Nakayama functor exchanges bounded projectives with bounded injectives, and termwise Nakayama duality gives Serre duality (our own). Happel’s theorem then gives Auslander–Reiten triangles (our own). Over k\[x\]/(x²), Extⁿ(k,k) never vanishes, whereas a Serre functor would force eventual vanishing (our own).

**nLab:** [Serre functor](https://ncatlab.org/nlab/show/Serre+functor). It says: “A Serre functor does not always exist, but when it does then it is unique up to graded natural isomorphism.”

**Sources:**

- [A. I. Bondal and M. M. Kapranov, Representable functors, Serre functors, and mutations, Mathematics of the USSR-Izvestiya (1990)](https://doi.org/10.1070/IM1990v035n03ABEH000716)
- [D. Happel, Auslander–Reiten triangles in derived categories of finite-dimensional algebras, Proceedings of the American Mathematical Society (1991)](https://doi.org/10.1090/S0002-9939-1991-1045137-6)

### Inverse images of prime ideals are prime, so the spectrum is functorial

**Remember:** Pull a prime back along F and it stays prime.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** For a tensor triangulated functor F: K → L and a prime Q of L, define F⁻¹(Q) = {a ∈ K ∣ F(a) ∈ Q}.

**Problem.** Every tensor triangulated functor F from K to L gives a continuous map Spc(F) from Spc L to Spc K, sending Q to F⁻¹(Q). The inverse image of supp(a) under this map is supp(F(a)).

**How the definition helps.** F⁻¹(Q) is prime because F(a⊗b) ≅ F(a)⊗F(b), and proper because F keeps the unit (our own remark). The support formula is also immediate from the definitions (our own remark). Maximal ideals fail this: along ℤ → ℚ, the zero ideal of ℚ pulls back to the zero ideal of ℤ (our own example). The quoted paper adds that the map is injective when F is essentially surjective.

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

**Definition.** In a filtered colimit of tensor triangulated categories, represent objects and morphisms by objects and morphisms at individual stages. Identify two representatives precisely when their images agree at some common later stage, using the transition identifications.

**Problem.** For a filtered colimit 𝒯 of tensor triangulated categories 𝒯ᵢ, Spc(𝒯) is the inverse limit of the spaces Spc(𝒯ᵢ). The comparison map to the homogeneous spectrum of End\*(1) is the limit of the comparison maps.

**How the definition helps.** A compatible family of primes defines membership for an object by testing any representative at its stage (our own). Filteredness makes this test independent of the representative and lets one check all ideal axioms at common stages (our own). Supports from the stages generate the limit topology. Cones and homogeneous endomorphisms of the unit also come from stages, so the comparison maps agree (our own).

**Paper or page:** [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446). It says: “Then we have Spc(𝒯)=lim←ᵢ Spc(𝒯ᵢ) and Specʰ(R)=lim←ᵢ Specʰ(Rᵢ) as topological spaces”

**Sources:**

- [Eike Lau, The Balmer spectrum of certain Deligne–Mumford stacks, Compositio Math. 159 (2023) 1314–1346](https://doi.org/10.1112/s0010437x23007200)

### Recollements glue t-structures from an open set and its closed complement

**Remember:** Test both bounds on the open part, then use i\* below and i! above.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 32S60. arXiv math.AG, math.CT. Level 4: research.

**Definition.** In a recollement of D by F and U, define the glued aisle by requiring j\*K ∈ U≤0 and i\*K ∈ F≤0. Define the glued coaisle by requiring j\*K ∈ U≥0 and i!K ∈ F≥0.

**Problem.** Given t-structures on U and on F, the following rule defines a t-structure on D. K lies in D≤0 when j\*K and i\*K lie in degrees ≤ 0, and in D≥0 when j\*K and i!K lie in degrees ≥ 0.

**How the definition helps.** The gluing triangles split each object into an open part and a closed part, so the conditions can be stated on each part (our own). The work is the construction of the truncation triangle by Beilinson, Bernstein and Deligne. Perverse sheaves are then built one stratum at a time, starting from shifted local systems on each stratum (our own).

**nLab:** [recollement](https://ncatlab.org/nlab/show/recollement). It says: “As suggested by this example, recollement may in fact be regarded as the additive or triangulated version of Artin gluing.”

**Wikipedia:** [T-structure](https://en.wikipedia.org/wiki/T-structure). It says: “This t-structure is said to be the gluing of the t-structures on U and F.”

**Sources:** none listed. No primary source with a working link was found.

### Rigidity makes every thick tensor ideal radical

**Remember:** With duals, a is a summand of a⊗a∨⊗a.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18M05. arXiv math.CT. Level 4: research.

**Definition.** A rigid object a has a dual a∨ with coevaluation 1 → a∨⊗a and evaluation a⊗a∨ → 1 satisfying both triangle identities. A tensor triangulated category is rigid if every object has such a dual.

**Problem.** In a rigid tensor triangulated category every thick tensor ideal is radical. So Thomason subsets of Spc K classify all thick tensor ideals.

**How the definition helps.** The triangle identities make a a direct summand of a⊗a∨⊗a, so a lies in every thick tensor ideal that contains a⊗a (our own sketch). Repeating this brings any tensor power of a down to a itself (our own sketch). The work for the classification stays in the general theorem on radical ideals.

**Paper or page:** [The Spectrum of Stable Infinity Categories with Actions](https://arxiv.org/abs/2505.02724). It says: “Assume every tensor ideal I is radical—that is, for any a ∈ D ∖ I and any n ≥ 1, a⊗ⁿ ∉ I (e.g., when D is rigid, see \[Ba, Remark 4.3\]).”

**Sources:**

- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Set-generated localizing subcategories of compactly generated categories have Bousfield localizations

**Remember:** Closed under sums and set-generated, so the localization exists.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 55P60. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A localizing subcategory S of a triangulated category with direct sums is a triangulated subcategory closed under all direct sums. A Bousfield localization functor L with kernel S gives each X a triangle Y → X → LX → Y\[1\]. Here Y lies in S, and LX receives no nonzero maps from S.

**Problem.** In a compactly generated triangulated category, every localizing subcategory generated by a set of objects is the kernel of a Bousfield localization functor. Examples include localizing a spectrum at a prime and restricting complexes of sheaves to an open subset.

**How the definition helps.** Closure under sums makes S a triangulated category with sums, so representability theorems apply inside S (our own). When the set consists of compact objects, S is compactly generated and its inclusion preserves sums (our own). Then Neeman's theorem gives the inclusion a right adjoint, whose counit triangle is the Bousfield triangle (our own). For arbitrary sets, the work is Neeman's theory of well generated categories, as surveyed by Krause (our own).

**Wikipedia:** [Triangulated category](https://en.wikipedia.org/wiki/Triangulated_category). It says: “if a localizing subcategory S of a compactly generated triangulated category D is generated by a set of objects, then there is a Bousfield localization functor L: D → D with kernel S.”

**Sources:**

- [Henning Krause, Localization theory for triangulated categories, in Triangulated Categories, LMS Lecture Note Ser. 375, Cambridge Univ. Press (2010) 161–235](https://doi.org/10.1017/CBO9781139107075.005)

### Silting subcategories reduce a triangulated Grothendieck group to direct sums

**Remember:** Silting objects generate up to summands and have no positive maps between them.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 19A99. arXiv math.RT, math.KT. Level 4: research.

**Definition.** A silting subcategory S of a triangulated category D is full, additive, and closed under direct summands. It generates D as a thick subcategory and satisfies Hom(X,Y\[n\]) = 0 for every X,Y ∈ S and integer n &gt; 0.

**Problem.** The inclusion of a silting subcategory identifies its split Grothendieck group with the Grothendieck group of the whole triangulated category.

**How the definition helps.** The silting conditions give a bounded weight structure with heart S (our own). The Grothendieck group theorem for bounded weight structures identifies the inverse with the alternating sum of the weight pieces (our own).

**Paper or page:** [The Grothendieck group of a triangulated category](https://arxiv.org/abs/2404.15800v3). It says: “the Grothendieck group of a triangulated category with a silting subcategory is isomorphic to the split Grothendieck group of the silting subcategory.”

**Sources:**

- [Xiao-Wu Chen, Zhi-Wei Li, Xiaojin Zhang, Zhibing Zhao, The Grothendieck group of a triangulated category, arXiv:2404.15800 (2024)](https://arxiv.org/abs/2404.15800v3)

### Stratification by a noetherian ring makes smashing ideals compactly generated

**Remember:** Stratified by a noetherian ring, smashing means finite.

*Rules out counterexamples.* MSC 18G80 (Derived categories, triangulated categories), 55U35, 13D09. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A localizing tensor ideal S is smashing if the localization that kills S commutes with direct sums. It is finite if compact objects generate it. K is stratified by a noetherian ring R when support in Spec R classifies its localizing tensor ideals.

**Problem.** Let K be stratified by a noetherian ring R, with the graded maps between compact objects finitely generated over R. Then every smashing localizing tensor ideal of K is generated by compact objects.

**How the definition helps.** Stratification describes ideals by support. Under the finiteness hypotheses, the telescope theorem of Benson, Iyengar and Krause makes smashing supports specialization closed (our own). Koszul objects built from compact generators then generate the corresponding ideals (our own). Keller’s valuation-ring example lacks the required noetherian support theory and has a smashing kernel that compact objects cannot generate (our own).

**Paper or page:** [Stratification of Derived Categories of Tate Motives](https://arxiv.org/abs/2406.13088), [Stratification of Derived Categories of Tate Motives](https://arxiv.org/abs/2406.13088). It says: “Every smashing ideal of DTM(ℚ̄, ℤ) is compactly generated. That is, every smashing localization is a finite localization.”

**Sources:**

- [Dave Benson, Srikanth B. Iyengar and Henning Krause, Stratifying triangulated categories, J. Topol. 4 (2011) 641–666](https://doi.org/10.1112/jtopol/jtr017)
- [Stratification of Derived Categories of Tate Motives, arXiv:2406.13088 (2024)](https://arxiv.org/abs/2406.13088)
- [Bernhard Keller, A remark on the generalized smashing conjecture, Manuscripta Math. 84 (1994) 193–198](https://doi.org/10.1007/bf02567453)

### Strong generation makes every finite cohomological functor representable

**Remember:** A bounded number of cones replaces infinite sums in Brown's theorem.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.CT, math.AG. Level 4: research.

**Definition.** An object G strongly generates D if one number n works for all objects. Each object is a summand of one built from finite sums of shifts of G using at most n cones. D is Ext-finite over a field k if the maps from X to all shifts of Y have finite total dimension.

**Problem.** Let D be an Ext-finite, strongly generated, idempotent-complete k-linear triangulated category over a field k. Every k-linear contravariant cohomological functor H to k-vector spaces is representable if ∑ᵢ dimₖ H(X\[i\]) is finite for every X.

**How the definition helps.** The uniform cone bound lets Bondal and Van den Bergh construct a representing object using finitely many stages (our own). Idempotent completeness supplies the final summand (our own).

**Paper or page:** [Brown representability for triangulated categories with a linear action by a graded ring](https://arxiv.org/abs/2206.09646v2). It says: “a graded R-linear triangulated category, that is strongly generated, Ext-finite and idempotent complete. Then a graded R-linear cohomological functor f : Tᵒᵖ → grMod(R) is graded representable if and only if f is locally finite.”

**Sources:**

- [Alexei Bondal and Michel Van den Bergh, Generators and representability of functors in commutative and noncommutative geometry, Moscow Math. J. 3 (2003) 1–36](https://doi.org/10.17323/1609-4514-2003-3-1-1-36)

### The Balmer spectrum is the final space carrying a tensor support

**Remember:** At each point, the objects missing that point form its prime.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 14A30. arXiv math.CT, math.AG. Level 4: research.

**Definition.** A support datum assigns each object a of an essentially small tensor triangulated category a closed subset σ(a) of a space X. It sends zero to ∅, the unit to X, sums to unions and tensor products to intersections, and ignores shifts. Each triangle a → b → c → a\[1\] requires σ(b) ⊆ σ(a) ∪ σ(c).

**Problem.** (Spc K, supp) is a support data. Every support data (X, σ) on K comes from it by a unique continuous map f with σ(a) = f⁻¹(supp a).

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

**How the definition helps.** Under the algebra-based definition, the theorem is the definition itself. The real content is the quoted proposition that the two definitions match one to one. In one direction, give X ⊗ Y the action B(X ⊗ Y) → B(X) ⊗ B(Y) → X ⊗ Y (our own explanation). In the other direction, tensor two free algebras and restrict along their units to recover the splitting map (our own).

**Paper or page:** [Duoidal R-Matrices](https://arxiv.org/abs/2503.03445v1). It says: “There exists a bijective correspondence between bimonad structures on B and monoidal structures on Cᴮ”

**Sources:**

- [Duoidal R-Matrices (arXiv 2503.03445v1)](https://arxiv.org/abs/2503.03445v1)

### Frobenius monoidal functors send Frobenius algebras to Frobenius algebras by design

**Remember:** Compatible joining and splitting carry the Frobenius laws along.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16L60. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A Frobenius monoidal functor has lax monoidal maps μ and colax monoidal maps δ satisfying two identities for every triple of objects. Suppressing associators and indexing maps by their tensor factors, require δ₍X⊗Y,Z₎ μ₍X,Y⊗Z₎ = (μ₍X,Y₎⊗1)(1⊗δ₍Y,Z₎). Also require δ₍X,Y⊗Z₎ μ₍X⊗Y,Z₎ = (1⊗μ₍Y,Z₎)(δ₍X,Y₎⊗1).

**Problem.** A Frobenius monoidal functor sends every Frobenius algebra to a Frobenius algebra.

**How the definition helps.** The functor's two laws are the image of the algebra's Frobenius laws, so the proof is a short diagram chase (our own explanation). F(A) gets its multiplication from the joining map and its comultiplication from the splitting map. The work moves into checking the Frobenius monoidal laws for each particular functor, which can be hard (our own). With the form definition, one would first have to turn the form into a comultiplication.

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

**Definition.** A monoidal category with unit I is semicartesian if for every object A there is exactly one morphism A → I.

**Problem.** A monoidal category has a monoidal natural family of maps A → I exactly when I is terminal, that is, when it is semicartesian. So semicartesian categories are the models in which weakening behaves well.

**How the definition helps.** Naturality for any f from A to I gives ε<sub>A</sub> = ε<sub>I</sub> ∘ f, and monoidality gives ε<sub>I</sub> = id<sub>I</sub> (our own). Thus f = ε<sub>A</sub>. Conversely, terminality makes the naturality and tensor diagrams commute by uniqueness (our own). In Rel the natural family of empty relations fails the unit condition (our own).

**nLab:** [affine logic](https://ncatlab.org/nlab/show/affine+logic), [semicartesian monoidal category](https://ncatlab.org/nlab/show/semicartesian+monoidal+category). It says: “unless one additionally requires these natural transformations to be monoidal, but it can be shown that this additional requirement already forces the tensor unit to be terminal (specifically, this follows from the component at I being the identity).”

**Sources:**

- [Bart Jacobs, Semantics of weakening and contraction, Annals of Pure and Applied Logic 69 (1994) 73–106](https://doi.org/10.1016/0168-0072(94)90020-5)

### The Day convolution universal property makes monoids lax monoidal functors

**Remember:** Day convolution collects a natural family of products into one multiplication map.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 4: research.

**Definition.** For functors F,G from a small monoidal category C to sets, their Day convolution is the left Kan extension of F×G along C’s tensor functor. Equivalently, maps F ⊗Day G → H correspond naturally to families F(a)×G(b) → H(a⊗b) natural in both a and b.

**Problem.** Monoids for Day convolution are exactly the lax monoidal functors C → Set. Such a functor has compatible product maps F(a) × F(b) → F(a ⊗ b). It also has a chosen element of F(I), where I is the unit of C.

**How the definition helps.** The universal property makes a multiplication map for Day convolution the same as a family of product maps for a lax monoidal functor. The unit of convolution is the functor C(I, −), so a unit map amounts to an element of F(I). The two coherence conditions for these data match the monoid laws. The work moves into constructing the universal extension and proving that convolution is associative and unital.

**nLab:** [Day convolution](https://ncatlab.org/nlab/show/Day+convolution). It says: “(commutative) monoid objects in the Day convolution monoidal category (\[𝒞,V\], ⊗Day, y(I)) of prop. are equivalent to (symmetric) lax monoidal functors 𝒞 → V”

**Sources:**

- [B. Day, On closed categories of functors, Reports of the Midwest Category Seminar IV, Lecture Notes in Mathematics 137 (1970)](https://doi.org/10.1007/BFb0060438)

### Defining negligible maps by traces makes the quotient's trace pairings nondegenerate

**Remember:** Remove exactly the maps that no trace can detect.

*True by definition.* MSC 18M10 (Traced monoidal categories, compact closed categories, star-autonomous categories), 18M20. arXiv math.QA, math.CT. Level 4: research.

**Definition.** In a k-linear spherical category, f: X → Y is negligible if tr(g ∘ f) = 0 for every g: Y → X. The negligible quotient divides each morphism space by its subspace of negligible maps.

**Problem.** Take a spherical category whose maps from the tensor unit to itself are the base-field scalars. On its negligible quotient, the trace pairing (f, g) ↦ tr(g ∘ f) is nondegenerate.

**How the definition helps.** The trace definition removes exactly the kernel of each pairing, so nondegeneracy holds by construction (our own argument). The work moves into proving that negligible maps form a tensor ideal, so that composition and tensor products pass to the quotient (our own explanation). That step uses the equality of left and right traces. The quoted proposition identifies the negligible ideal with the unique maximal ideal, which links the trace definition to the ideal definition.

**Paper or page:** [Categories generated by a trivalent vertex](https://arxiv.org/abs/1501.06869v3). It says: “An evaluable pivotal category has a unique maximal ideal, the negligible ideal.”

**Sources:**

- [Categories generated by a trivalent vertex (arXiv 1501.06869v3)](https://arxiv.org/abs/1501.06869v3)

### Defining the Drinfeld center by transformations makes its braiding an interchange

**Remember:** Two transformations of the identity slide past each other.

*True by definition. Confidence: medium.* MSC 18M15 (Braided monoidal categories and ribbon categories), 18N10. arXiv math.CT, math.QA. Level 4: research.

**Definition.** Deloop a monoidal category C to the one-object bicategory BC with composition given by tensor product. Its transformation center has pseudonatural transformations id<sub>BC</sub> ⇒ id<sub>BC</sub> as objects and modifications as morphisms, with composition of transformations as tensor product.

**Problem.** The Drinfeld center of a monoidal category is braided.

**How the definition helps.** The naturality isomorphism of one transformation at the component of another exchanges their order (our own). Pseudonaturality gives the braiding axioms (our own). The quoted monoidal equivalence transports this braiding to the Drinfeld center.

**Paper or page:** [Categorical centers and Yetter--Drinfel\`d-modules as 2-categorical (bi)lax structures](https://arxiv.org/abs/2306.05337v1). It says: “There exists a monoidal equivalence of categories between the Drinfel\`d center of C and the category of pseudonatural transformations and their modifications”

**Sources:**

- [Categorical centers and Yetter--Drinfel\`d-modules as 2-categorical (bi)lax structures](https://arxiv.org/abs/2306.05337v1)

### Equal left and right traces give spherical categories invariance on the sphere

**Remember:** Closing a strand on either side gives the same number.

*True by definition. Confidence: medium.* MSC 18M15 (Braided monoidal categories and ribbon categories). arXiv math.QA, math.CT. Level 4: research.

**Definition.** A spherical category is a pivotal category in which the left and right pivotal traces agree for every endomorphism of every object.

**Problem.** In a spherical category, the value of a closed diagram does not change when the diagram moves on the sphere.

**How the definition helps.** The trace definition captures exactly the one move that plane isotopy does not cover. On the sphere, a strand can pass behind the point at infinity, and this turns a left closure into a right closure (our own explanation). Invariance under plane isotopy already holds in every pivotal category, by a coherence theorem (our own summary). The work moves into that coherence theorem and into splitting each isotopy of the sphere into plane moves and such passes (our own).

**nLab:** [spherical category](https://ncatlab.org/nlab/show/spherical+category). It says: “A spherical category is a pivotal category C where the left and right trace operations coincide on all objects.”

**Sources:**

- [John Barrett and Bruce Westbury, Spherical Categories (1999)](https://doi.org/10.1006/aima.1998.1800)

### Framed tangles as the free ribbon category give invariants from every object

**Remember:** Choose an object, and every framed tangle gets a value.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories), 57K16. arXiv math.QA, math.GT. Level 4: research.

**Definition.** Use the strict ribbon presentation of framed oriented tangles. Its morphisms are isotopy classes of oriented framed tangles with fixed boundary, with stacking as composition and juxtaposition as tensor product.

**Problem.** Each object V of a strict ribbon category determines a unique strict ribbon functor from framed oriented tangles sending the generating point to V.

**How the definition helps.** Shum’s coherence theorem identifies the tangle category with the free ribbon category on one object (our own). The universal property then extends the chosen object to the unique strict ribbon functor (our own).

**nLab:** [Shum's theorem](https://ncatlab.org/nlab/show/Shum%27s+theorem). It says: “The category of framed oriented tangles FrOrTang is equivalently the free ribbon category generated by a single object.”

**Sources:**

- [Mei Chee Shum, Tortile tensor categories (1994)](https://doi.org/10.1016/0022-4049(92)00039-T)

### Pivotal structures as double-dual isomorphisms differ by tensor automorphisms of identity

**Remember:** Divide two pivotal isomorphisms to get an automorphism.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories). arXiv math.QA, math.CT. Level 4: research.

**Definition.** A pivotal structure on a rigid monoidal category is a monoidal natural isomorphism from the identity functor to the double-dual functor.

**Problem.** Fix one pivotal structure a on a rigid monoidal category. Every pivotal structure is a ∘ u for a unique tensor-preserving natural automorphism u of the identity functor. Each such a ∘ u is a pivotal structure.

**How the definition helps.** Given pivotal structures a and a′, their ratio u = a⁻¹ ∘ a′ is a monoidal natural automorphism of the identity (our own). The equation a′ = a ∘ u determines u uniquely. Conversely, composing a with any such u again gives a monoidal natural isomorphism (our own).

**nLab:** [pivotal category](https://ncatlab.org/nlab/show/pivotal+category). It says: “if a pivotal structure exists then it will be unique up to precomposing with an element of the group Aut⊗(id𝒞) of monoidal natural automorphisms of the identity”

**Sources:** none listed. No primary source with a working link was found.

### Cohomologous twists rescale tensor constraints

**Remember:** A coboundary changes rebracketing by a change of tensor coordinates.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** Fix a finite group G and a normalized complex 3-cocycle ω, a function taking nonzero scalar values on triples satisfying the pentagon identity. In the twisted category of G-graded complex vector spaces, rebracketing homogeneous factors of degrees g,h,k multiplies by ω(g,h,k).

**Problem.** Suppose normalized cocycles satisfy ω = (dμ)ω′ for a normalized function μ from pairs in G to nonzero complex numbers. Here dμ(g,h,k) = μ(h,k)μ(g,hk)/(μ(gh,k)μ(g,h)). The identity functor from the ω category to the ω′ category becomes a tensor equivalence with comparison scalars μ(g,h).

**How the definition helps.** On each homogeneous triple, the monoidal functor axiom is exactly ω = (dμ)ω′ (our own). Normalization gives the unit axiom, and reciprocal comparison scalars give the inverse (our own).

**Paper or page:** [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2). It says: “which is the identity as a functor with monoidal structure given by”

**Sources:**

- [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2)

### Doubling cancels the surgery anomaly

**Remember:** Combine a twist with its reverse to cancel the gluing scalar.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T45. arXiv math.QA. Level 4: research.

**Definition.** Let C be a complex modular fusion category, with finitely many simple labels and nondegenerate crossings. Double C by taking its tensor product with the category having the opposite crossings and inverse twists. The positive and negative Gauss sums weight squared quantum dimensions by each simple label’s twist or its inverse.

**Problem.** Both Gauss sums of the double equal the global dimension of C, the sum of the squared quantum dimensions. With this dimension as normalization, the double has trivial surgery anomaly.

**How the definition helps.** Reversing twists exchanges the two Gauss sums, so doubling gives the same product for either sign. Our own calculation separates the sum over pairs of simple labels into one sum for each factor. The modular Gauss-sum identity identifies their product with the global dimension. Identifying the double with the braided center uses the center factorization theorem.

**Paper or page:** [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1). It says: “Then Z(C) is an anomaly free modular category”

**Sources:**

- [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1)

### Encircling loops diagonalize torus fusion

**Remember:** Evaluate an encircling loop on each simple color to read the eigenvalues.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** For a complex ribbon fusion category, the fusion algebra has a basis of simple labels and multiplies them by tensor product. Encircling a strand with a labeled loop gives an operator natural in the strand label. The loop definition of modularity requires this assignment to identify the fusion algebra with the algebra of natural endomorphisms of the identity functor.

**Problem.** Let Sᵢⱼ denote the evaluation of two linked circles with labels i and j, and let 0 denote the tensor unit. In a modular category, fusion by each simple label i acts diagonally in one common basis, with entries Sᵢⱼ/S₀ⱼ indexed by j.

**How the definition helps.** The loop definition turns fusion into multiplication of scalar functions on simple labels. Each natural operator acts by a scalar on a simple strand. Our own calculation closes the strand labeled j, multiplying that scalar by its quantum dimension S₀ⱼ and giving Sᵢⱼ. The equivalence with the usual invertible-matrix definition supplies the common basis.

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

**Definition.** For a commutative algebra A in a braided category, a right A-module with action ρ is local if ρ ∘ c₍A,M₎ ∘ c₍M,A₎ = ρ. Here c denotes the braiding and M denotes the underlying module object.

**Problem.** Let A be a connected commutative separable algebra with trivial twist in a unitary modular fusion category over ℂ. Connected means the unit occurs once, and separable means multiplication admits a section respecting both A-actions. Local modules form a modular category under tensor product over A.

**How the definition helps.** Locality lets the crossing descend through the relations defining the tensor product over A. Those relations identify the action on one factor with the action on the other. Proving that the induced crossings are nondegenerate requires the modularity theorem for local modules.

**Paper or page:** [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2). It says: “of local modules over A in C is also modular.”

**Sources:**

- [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2)

### Modularity prevents singular torus rotation

**Remember:** A transparent extra color gives the torus rotation a redundant row.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T45. arXiv math.QA. Level 4: research.

**Definition.** In a complex ribbon fusion category, objects are sums of finitely many simple types, with tensor products, duals, crossings and compatible twists. A simple object is transparent if crossing it twice with any object acts as the identity. Modularity requires the tensor unit to be the only transparent simple type.

**Problem.** The Hopf-link matrix evaluates two linked circles for each pair of simple labels. This matrix is invertible exactly when the category is modular.

**How the definition helps.** Modularity excludes transparent labels whose rows are proportional to the unit row. In our own example, the two simple complex representations of the order-two group have dimension one. Their usual symmetric crossings give a matrix of ones. Proving that every singular matrix arises from nontrivial transparency requires the modularity criterion.

**Wikipedia:** [Modular tensor category](https://en.wikipedia.org/wiki/Modular_tensor_category). It says: “a modular tensor category is a braided spherical fusion category with non-degenerate braiding.”

**Paper or page:** [CFT Correlators for Cardy Bulk Fields via String-Net Models](https://arxiv.org/abs/1911.10147v2). It says: “A ribbon fusion category C is a modular tensor category if and only if the canonical functor Ξ is a braided equivalence.”

**Sources:**

- [Reshetikhin and Turaev, Invariants of 3-manifolds via link polynomials and quantum groups](https://link.springer.com/article/10.1007/BF01239527)
- [Bruguières, Catégories prémodulaires, modularisations et invariants des variétés de dimension 3](https://doi.org/10.1007/s002080050011)

### A growth bound makes a tensor category a category of supergroup representations

**Remember:** Tensor powers of an object may grow no faster than for a vector space.

*Makes the theorem clean to state or prove.* MSC 18M25 (Tannakian categories), 18M05. arXiv math.QA, math.CT. Level 4: research.

**Definition.** Let C be a rigid symmetric k-linear abelian tensor category with finite-length objects, finite-dimensional morphism spaces and End(𝟙) = k. Moderate growth means that for every X some real N ≥ 1 satisfies length(X⊗ⁿ) ≤ Nⁿ for every positive integer n.

**Problem.** Over an algebraically closed field k of characteristic zero, every such category of moderate growth is equivalent as a symmetric tensor category to Rep(G,ε). Here G is an affine supergroup and ε² = 1 acts by parity.

**How the definition helps.** The bound measures growth inside C without first choosing a representation functor (our own). Deligne’s super-Tannakian reconstruction theorem produces the supergroup and its parity element from these hypotheses (our own).

**nLab:** [Deligne's theorem on tensor categories](https://ncatlab.org/nlab/show/Deligne%27s+theorem+on+tensor+categories), [Tannakian category](https://ncatlab.org/nlab/show/Tannakian+category). It says: “Categories that do not satisfy sub-exponential growth have come to be known as Deligne categories”

**Sources:**

- [Pierre Deligne, Catégories tensorielles, Moscow Mathematical Journal 2 (2002) no. 2, 227–248](https://www.math.ias.edu/files/deligne/Tensorielles.pdf)
- [Serina Hu, An Introduction to Deligne Categories, arXiv:2404.08689 (2024)](https://arxiv.org/abs/2404.08689)

### Doplicher–Roberts reconstruction needs the symmetric structure

**Remember:** Keep the symmetry, and the category of representations knows its group.

*Makes the theorem clean to state or prove.* MSC 18M25 (Tannakian categories), 18D20, 46L05. arXiv math.QA, math.OA. Level 4: research.

**Definition.** Take an essentially small symmetric tensor C\*-category with conjugates, finite direct sums, subobjects and simple tensor unit. Its symmetry is a unitary natural braiding satisfying c₍Y,X₎ ∘ c₍X,Y₎ = id for every X,Y.

**Problem.** Every such symmetric tensor ∗-category is equivalent to the representations of a compact supergroup, unique up to isomorphism (Doplicher–Roberts, Müger). No fiber functor needs to be given.

**How the definition helps.** The symmetry is part of the structure that the representation equivalence must preserve (our own). Isocategorical groups show why tensor equivalence alone loses information. Doplicher–Roberts reconstruction recovers the compact group and its central parity involution from the symmetric C\*-category (our own).

**nLab:** [Doplicher-Roberts reconstruction theorem](https://ncatlab.org/nlab/show/Doplicher-Roberts+reconstruction+theorem). It says: “Beware that there are non-isomorphic finite groups whose categories of representations are equivalent considered merely as tensor categories, ignoring the symmetric structure”

**Sources:**

- [Sergio Doplicher, John E. Roberts, A new duality theory for compact groups, Inventiones Mathematicae 98 (1989) 157–218](https://doi.org/10.1007/BF01388849)
- [Pavel Etingof, Shlomo Gelaki, Isocategorical groups, arXiv:math/0007196](https://arxiv.org/abs/math/0007196)

### Super vector spaces let a growth bound reconstruct the symmetry supergroup

**Remember:** Assume only a growth bound, and supergroups are what you get.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M25 (Tannakian categories), 18M05. arXiv math.QA, math.CT. Level 4: research.

**Definition.** Over an algebraically closed field k of characteristic zero, take a rigid symmetric k-linear abelian tensor category with finite-length objects and finite-dimensional morphism spaces. Require End(𝟙) = k. Moderate growth means that for every object X some number N ≥ 1 bounds length(X⊗ⁿ) by Nⁿ for all positive integers n.

**Problem.** Every such category of moderate growth is symmetrically tensor equivalent to Rep(G,ε) for an affine supergroup G with a specified element ε acting by parity.

**How the definition helps.** The length bound can be tested before choosing any functor to vector spaces (our own). Deligne’s reconstruction theorem supplies a super fiber functor and identifies the category with representations respecting parity (our own).

**nLab:** [Deligne's theorem on tensor categories](https://ncatlab.org/nlab/show/Deligne%27s+theorem+on+tensor+categories). It says: “Deligne's theorem then gives that supersymmetry is the most general context in which this works out.”

**Sources:**

- [Pierre Deligne, Catégories tensorielles, Moscow Math. J. 2 (2002) 227–248](https://www.math.ias.edu/files/deligne/Tensorielles.pdf)

### Frobenius algebras give the spider rule of the ZX-calculus

**Remember:** Copy and delete one basis, or reverse those maps, to build a phase-zero spider.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 18M30, 81P45. arXiv quant-ph, math.CT. Level 4: research.

**Definition.** Fix one qubit basis B in the ZX-calculus. Its phase-zero generators are copying b ↦ b⊗b, deleting b ↦ 1, and their adjoints, extended linearly from every b ∈ B.

**Problem.** Two connected diagrams of one colour are equal exactly when they have the same numbers of inputs and outputs (Coecke and Duncan, Theorem 1). So each such diagram is a single spider.

**How the definition helps.** The Frobenius laws make a connected one-colour diagram depend only on its numbers of inputs and outputs. Spider fusion, which merges two connected spiders of one colour, then replaces long algebraic checks. The result needs the algebras to be special and commutative. In the full ZX-calculus, spiders also carry phases, which add when spiders fuse.

**nLab:** [ZX-calculus](https://ncatlab.org/nlab/show/ZX-calculus). It says: “since the Frobenius algebra-property ensures --- recalled as Coecke &amp; Duncan (2011), Theorem 1 --- that any connected diagrams are equal iff they have the same number of in/outputs”

**Sources:**

- [B. Coecke, R. Duncan, Interacting Quantum Observables: Categorical Algebra and Diagrammatics, New Journal of Physics 13 (2011) 043016, arXiv:0906.4725](https://arxiv.org/abs/0906.4725)

### Finite sets form the initial rig category, with the right 2-category

**Remember:** There is a map out, and any two maps have exactly one isomorphism between them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M50 (Bimonoidal, skew-monoidal, duoidal categories), 18N10. arXiv math.CT. Level 4: research.

**Definition.** An object I in a 2-category is bi-initial if each hom-category Hom(I,A) is equivalent to the terminal category.

**Problem.** The groupoid of finite sets and bijections is the bi-initial symmetric rig category, just as ℕ is the initial commutative rig. Baez conjectured this, and Elgueta proved it in 2021.

**How the definition helps.** Bi-initiality expresses precisely the uniqueness available for functors preserving rig operations up to coherent isomorphism (our own). Elgueta’s coherence theorem proves that finite sets and bijections have this property in the 2-category of symmetric rig categories (our own).

**nLab:** [rig category](https://ncatlab.org/nlab/show/rig+category). It says: “Using the correct definition of the 2-category of symmetric rig categories, the groupoid FinSet× of finite sets and bijections is the initial symmetric rig category, just as ℕ is the initial commutative rig.”

**Sources:**

- [Josep Elgueta, The groupoid of finite sets is biinitial in the 2-category of rig categories, Journal of Pure and Applied Algebra 225 (2021), arXiv:2004.08684](https://arxiv.org/abs/2004.08684)

### Clubs of mixed variance throw away compositions that make loops

**Remember:** A loop in a composite of graphs has no answer, so clubs forbid loops.

*Rules out counterexamples. Confidence: medium.* MSC 18M60 (Operads (general)), 18N20, 18D15. arXiv math.CT. Level 4: research.

**Definition.** In Kelly’s graph category for mixed variance, arrows pair occurrences of signed variables. Composition joins the matchings along the shared boundary and returns a distinguished basepoint if any closed loop appears. A mixed-variance club must assign graphs compatibly with composition and avoid that basepoint.

**Problem.** Coherence is the question of which diagrams of canonical maps commute. Coherence for symmetric monoidal closed categories, and for similar structures with right adjoints, can be described by a club. Coherence for compact closed categories cannot.

**How the definition helps.** A cup followed by a cap can form a closed loop in compact closed coherence, so its graph composite reaches the forbidden basepoint (our own). The loop represents a genuine scalar, such as dimension for vector spaces (our own). Kelly’s cut-elimination theorem excludes these loops for symmetric monoidal closed coherence (our own).

**nLab:** [club](https://ncatlab.org/nlab/show/club). It says: “The lesson learned is that the doctrine of compact closed categories is not describable by a club, and that for the purposes of clubs there is no use for compositions of graphs which produce loops.”

**Sources:**

- [G. M. Kelly, An abstract approach to coherence, in Coherence in Categories, Lecture Notes in Mathematics 281, Springer, 1972, 106–147](https://doi.org/10.1007/BFb0059557)

### In Feynman categories the hereditary condition gives free algebras

**Remember:** Every operation splits into pieces with one output each, as in an operad.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M60 (Operads (general)), 18M05. arXiv math.CT. Level 4: research.

**Definition.** For a Feynman category with generating groupoid C and monoidal category M, heredity requires the canonical tensor functor Iso(M↓C)⊗ → Iso(M↓M) to be an equivalence. Here ⊗ denotes free symmetric monoidal completion, and the comma categories record arrows with generating or arbitrary targets, respectively.

**Problem.** Take strong symmetric monoidal functors from M into a cocomplete symmetric monoidal category whose tensor preserves colimits separately. Restriction to the generating groupoid has a left adjoint, and the resulting monad has these strong symmetric monoidal functors as its algebras up to equivalence.

**How the definition helps.** Heredity makes the left Kan extension of the freely extended generator data strong monoidal (our own). The free-algebra and monadicity theorems for Feynman categories identify its algebras with the original monoidal functors (our own).

**nLab:** [Feynman category](https://ncatlab.org/nlab/show/Feynman+category). It says: “The condition of a pattern or that of being hereditary guarantees that there is a left adjoint free functor for the forgetful functor of restricting a monoidal functor from M to C.”

**Sources:**

- [Ralph M. Kaufmann, Benjamin C. Ward, Feynman categories, Astérisque 387 (2017), arXiv:1312.1269](https://arxiv.org/abs/1312.1269)

### Operads as substitution monoids give monads on sets

**Remember:** Substitution acts on sets, turning an operad's plugging into monad multiplication.

*True by definition.* MSC 18M60 (Operads (general)), 18C15. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A set operad is a monoid for substitution of symmetric sequences of sets. Substitution takes an outer operation and one inner operation per input, modulo simultaneous relabelling of the inputs and inner operations.

**Problem.** Every operad in sets gives a monad on sets. This is a functor with a unit and associative multiplication, sending a set to operad operations with inputs labelled by its elements, up to relabelling. Its algebras are exactly the sets on which the operad acts.

**How the definition helps.** Defining operads as substitution monoids makes the monad laws follow from the operation of substitution on sets. Substituting twice corresponds to plugging operations together, and the identity species acts as the identity functor. The work moves into proving that substitution is associative and unital and that it acts on sets in this way. In our own unpacking, a monad algebra evaluates labelled operations, and its laws are the operad action laws.

**nLab:** [operad](https://ncatlab.org/nlab/show/operad). It says: “the monoidal category (Psh(ℙ), ∘, I) acts on Set in such a way as to give an actegory structure, and therefore an operad or ∘-monoid gives rise to a monad on Set.”

**Paper or page:** [A unified framework for notions of algebraic theory](https://arxiv.org/abs/1904.08541v2). It says: “The key observation is that each notion of algebraic theory can be identified with a monoidal category, in such a way that algebraic theories correspond to monoid objects therein.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized multicategories are monoids in a double category

**Remember:** Spans give the multicategories; the vertical maps give their functors.

*Makes the theorem clean to state or prove.* MSC 18M65 (Non-symmetric operads, multicategories, generalized multicategories), 18C15, 18N10. arXiv math.CT. Level 4: research.

**Definition.** For a cartesian monad T on a category V with pullbacks, a horizontal endomorphism at X is a span X ← R → TX. A T-multicategory is a monoid for horizontal composition of such spans, with vertical arrows given by maps in V.

**Problem.** Take a T-multicategory to be a monoid in the double category of T-spans and maps of V. Then monoid homomorphisms are exactly the correct functors in all examples, such as categories, multicategories and globular operads.

**How the definition helps.** The vertical arrows of the double category supply the maps of objects that a functor needs. In the bicategory of T-spans, no standard kind of monad morphism gives the intended functors. The nearest one, a colax morphism of monads, lets the object part be an arbitrary span instead of a map of V. Virtual double categories (Cruttwell and Shulman) also cover symmetric multicategories.

**nLab:** [generalized multicategory](https://ncatlab.org/nlab/show/generalized+multicategory). It says: “Thus, a better definition of T-multicategory is "a monoid in the double category Span(V,T)," since this definition recovers the correct morphisms immediately.”

**Sources:**

- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010) 580–655, arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Defined as pseudonatural transformations, Schur functors compose associatively by a universal property

**Remember:** A Schur functor works in every suitable category and commutes with every functor between them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 20C30, 18M05. arXiv math.RT, math.CT. Level 4: research.

**Definition.** An abstract Schur functor is a pseudonatural endotransformation of the forgetful 2-functor from Cauchy-complete symmetric monoidal linear categories to categories. It assigns each category C an endofunctor and each strong symmetric monoidal linear functor G a coherent invertible comparison with G.

**Problem.** Abstract Schur functors are equivalent to polynomial species. Composition of Schur functors, called plethysm, makes polynomial species an associative, unital monoidal category.

**How the definition helps.** Composition of functors is already associative, and the universal property turns plethysm into composition. U is represented by the Cauchy completion of the linearized permutation groupoid, so Schur functors are polynomial species. The associator, unitors and pentagon come from this universal property, not from Young symmetrizers. The real content is the representability theorem, which the page only sketches.

**nLab:** [Schur functor](https://ncatlab.org/nlab/show/Schur+functor). It says: “the Schur functors S<sub>R</sub> are precisely those functors that are defined on all symmetric monoidal Cauchy complete linear C and that are pseudonatural with respect to change of base G: C → D!”

**Sources:**

- [John C. Baez, Joe Moeller, Todd Trimble, Schur functors and categorified plethysm, 2021, arXiv:2106.00190](https://arxiv.org/abs/2106.00190)

### A universal shadow makes every known Morita invariance result an immediate corollary

**Remember:** Prove Morita invariance once for the universal shadow, and every shadow inherits it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18M10, 16E40. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A universal shadow of a bicategory B is a shadow valued in a category U representing shadows of B. For each category D, postcomposition induces an equivalence from functors U → D to D-valued shadows of B.

**Problem.** Morita invariance holds for the universal shadow on the free adjunction bicategory. Every known Morita invariance result for Hochschild homology and its variants is an immediate corollary.

**How the definition helps.** Every shadow factors through the universal shadow, so a fact proved for the universal shadow passes to all shadows. The free adjunction bicategory is the smallest one that contains an adjunction. Our own explanation: any adjunction in another bicategory is its image under a functor. The hard part is to compute the Hochschild homology of the free adjunction bicategory.

**Paper or page:** [Shadows are Bicategorical Traces](https://arxiv.org/abs/2109.02144). It says: “Using the universal shadow on the free adjunction bicategory, we can then establish a universal Morita invariance theorem, of which all known cases are immediate corollaries.”

**Sources:**

- [Kathryn Hess and Nima Rasekh, Shadows are Bicategorical Traces, arXiv:2109.02144 (2021)](https://arxiv.org/abs/2109.02144)

### Coherent multiplication permits a free-loop String model

**Remember:** Move the product through an equivalence instead of forcing strict laws.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories). arXiv math.CT, math.DG. Level 4: research.

**Definition.** A coherent Lie 2-group is a smooth monoidal groupoid in which each object has a chosen weak inverse. Its associator and unitors satisfy the pentagon and triangle identities, and its inverse data satisfy the adjunction triangle identities.

**Problem.** For compact, simple, simply connected G, a coherent model of its 3-connected cover String(G) uses the basic circle extension of the free loop group. This extension is the space of arrows starting at the unit, which no strict Lie 2-group model can have here.

**How the definition helps.** Transport across a smooth equivalence preserves the group laws up to coherent isomorphism (our own). The coherent string-group construction transfers the based-loop model this way (our own). The cited obstruction rules out the same source fibre in a strict model.

**Paper or page:** [Quasi-periodic paths and a string 2-group model from the free loop group](https://arxiv.org/abs/1702.01514v2). It says: “there does not exist a strict Lie 2-group model for the string group of G that has L̂G as source-fibre.”

**Sources:**

- [Murray, Roberts and Wockel, Quasi-Periodic Paths and a String 2-Group Model from the Free Loop Group](https://doi.org/10.5802/jolt.988)
- [Murray, Roberts and Wockel, Quasi-periodic paths and a string 2-group model from the free loop group, Corollary 2.6](https://arxiv.org/abs/1702.01514v2)

### Doctrinal adjunction becomes a statement about conjunctions in a double category

**Remember:** Lax goes one way, colax the other, and the adjunction lives across the square.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18N15, 18A40. arXiv math.CT. Level 4: research.

**Definition.** Fix strict algebras a: TA → A and b: TB → B for a 2-monad T. A lax morphism f has a comparison b·Tf ⇒ f·a. A colax morphism has the opposite comparison, and both satisfy the unit and multiplication axioms. The algebra double category uses lax arrows horizontally, colax arrows vertically, and squares compatible with their comparisons.

**Problem.** Kelly's doctrinal adjunction: for an adjunction f ⊣ u of T-algebras, lax structures on u correspond by mates to colax structures on f. In T-Alg this says that the forgetful double functor creates conjunctions.

**How the definition helps.** In T-Alg, lax and colax morphisms live in one structure, so the theorem becomes a statement about conjunctions. In 2-category terms, the statement mixes morphisms from two different 2-categories. Strong morphisms are exactly the arrows that have companions. The mate calculus still does the work; the double category gives it a clean statement.

**nLab:** [doctrinal adjunction](https://ncatlab.org/nlab/show/doctrinal+adjunction), [monoidal adjunction](https://ncatlab.org/nlab/show/monoidal+adjunction). It says: “Doctrinal adjunction can be stated cleanly in terms of double categories.”

**Sources:**

- [G. M. Kelly, Doctrinal adjunction, in: Category Seminar, Lecture Notes in Math. 420 (1974)](https://doi.org/10.1007/BFb0063105)
- [M. Shulman, Comparing composites of left and right derived functors, New York J. Math. 17 (2011) 75–125, arXiv:0706.2868](https://arxiv.org/abs/0706.2868)

### Enhanced 2-categories make limits of lax morphisms statable

**Remember:** Mark the strict morphisms as tight, and limits can remember which projections are strict.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18N15, 18D20. arXiv math.CT. Level 4: research.

**Definition.** An enhanced 2-category, also called an 𝓕-category, is a 2-category with two kinds of 1-morphisms, tight and loose. Being tight is a property of a loose morphism, and both kinds share the same 2-cells. Formally, it is a category enriched in the category 𝓕 of full embeddings of categories.

**Problem.** For a 2-monad, the forgetful functors from the 𝓕-categories of algebras with strict, pseudo, lax or colax morphisms create a class of 𝓕-weighted limits, the rigged limits (Lack and Shulman).

**How the definition helps.** Tight morphisms let a limit record which of its projections are strict. In a plain 2-category of algebras and lax morphisms, you cannot say that some limit projections are strict and jointly detect strictness. The 2-monad theory that proves creation is still needed.

**nLab:** [enhanced 2-category](https://ncatlab.org/nlab/show/enhanced+2-category). It says: “they allow us to define the classes of rigged limits, which are the 𝓕-weighted limits that are created by the forgetful functors from the various 𝓕-categories of algebras and strict/pseudo/lax/colax morphisms over a 2-monad”

**Sources:**

- [Stephen Lack, Michael Shulman, Enhanced 2-categories and limits for lax morphisms, Advances in Mathematics 229 (2012), arXiv:1104.2111](https://arxiv.org/abs/1104.2111)

### Flexible limits give all bilimits in strict 2-categories

**Remember:** A strict section of the pseudomorphism classifier makes the weight flexible.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18A30, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A flexible limit is a strict weighted 2-limit whose weight Φ admits a strict section of the canonical map q: QΦ → Φ. Here QΦ classifies pseudonatural maps out of Φ by strict maps out of QΦ.

**Problem.** A strict 2-category with all flexible limits has all bilimits. An example is the 2-category of algebras for a 2-monad with pseudo morphisms, which lacks many strict 2-limits.

**How the definition helps.** Flexible limits are already bilimits, and they are enough to build every bilimit. The class includes all PIE-limits (built from products, inserters and equifiers) and all strict pseudo-limits. Every bilimit can be computed as a strict pseudo-limit (Bird, Kelly, Power, Street).

**nLab:** [flexible limit](https://ncatlab.org/nlab/show/flexible+limit). It says: “Furthermore, all PIE-limits and therefore all strict pseudo-limits are flexible; thus any strict 2-category which admits all flexible limits also admits all 2-limits.”

**Sources:**

- [Greg J. Bird, G. Max Kelly, A. John Power, Ross Street, Flexible limits for 2-categories, J. Pure Appl. Algebra 61 (1989) 1–27](https://doi.org/10.1016/0022-4049(89)90065-0)

### Lax 𝓕-adjunctions are lax adjunctions whose adjoints are still unique

**Remember:** Lax everywhere, but pseudo on the tight maps.

*True by definition. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A lax 𝓕-adjunction uses 𝓕-functors with unit and counit transformations whose components are tight. Their naturality cells are lax on loose arrows and invertible on tight arrows, with invertible triangle comparisons.

**Problem.** Two lax 𝓕-right adjoints of the same functor are equivalent.

**How the definition helps.** The usual comparison between two right adjoints composes one unit with the other counit (our own). Its reverse uses the opposite choices. Their composites simplify by the triangle comparisons because the naturality cells at unit and counit components are invertible (our own).

**nLab:** [lax F-adjunction](https://ncatlab.org/nlab/show/lax+F-adjunction). It says: “The following theorem seems to fail for 2-adjunctions involving lax transformations; the fact that it holds for lax 𝓕-adjunctions thus means that they are significantly better-behaved and more interesting.”

**Sources:**

- [Peter T. Johnstone, Fibrations and partial products in a 2-category, Applied Categorical Structures 1 (1993) 141–179](https://doi.org/10.1007/BF00880041)

### Clubs over the lax slice map fully faithfully to monads

**Remember:** Put clubs in the lax slice, and they keep all the morphisms that monads have.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 18N15 (2-dimensional monad theory), 18M60, 18C15. arXiv math.CT. Level 4: research.

**Definition.** A Kelly club over the lax slice is a monoid for its substitution product. A lax-slice morphism between categories over Cat consists of a functor and a natural transformation comparing the two arity functors.

**Problem.** For Kelly's clubs over the lax slice, the functor Mon(CAT⫽Cat, ∘) → Mnd(Cat) from clubs to monads on Cat is fully faithful.

**How the definition helps.** The lax slice has enough morphisms that no monad morphism is lost. For the earlier notions of club, over the symmetric monoidal monad or over FinSet, the functor to monads is not fully faithful. The nLab notes that Kelly gave no interesting new examples in this generality.

**nLab:** [club](https://ncatlab.org/nlab/show/club). It says: “This has the advantage that the resulting functor Mon(CAT⫽Cat,∘) → Mnd(Cat) from clubs to monads on Cat is fully faithful, which it is not for the previous notions of club.”

**Sources:**

- [G. M. Kelly, On clubs and data-type constructors, in Applications of Categories in Computer Science, LMS Lecture Note Series 177, Cambridge University Press (1992) 163–190](https://doi.org/10.1017/CBO9780511525902.010)

### Every tricategory is equivalent to a Gray-category

**Remember:** In a Gray-category, everything is strict except sliding two 2-cells past each other.

*Makes the theorem clean to state or prove.* MSC 18N20 (Tricategories, weak \\(n\\)-categories, coherence, semi-strictification). arXiv math.CT. Level 4: research.

**Definition.** A Gray-category is a category enriched in strict 2-categories with the Gray tensor product. Composition is strictly associative and unital, with coherent interchange isomorphisms for 2-cells.

**Problem.** Every tricategory is equivalent to a Gray-category (Gordon, Power and Street). Not every tricategory is equivalent to a strict 3-category.

**How the definition helps.** The Gray tensor product retains the interchange isomorphism needed to encode a braiding (our own). A nonsymmetric braided monoidal category gives a doubly degenerate tricategory whose braiding obstructs full strictification. The coherence theorem of Gordon, Power and Street proves that Gray-categories suffice (our own).

**nLab:** [Gray-category](https://ncatlab.org/nlab/show/Gray-category), [tricategory](https://ncatlab.org/nlab/show/tricategory), [semi-strict infinity-category](https://ncatlab.org/nlab/show/semi-strict+infinity-category). It says: “Not every tricategory is equivalent to a fully strict 3-category; any doubly-degenerate braided monoidal category which is not symmetric is an example.”

**Sources:**

- [Robert Gordon, A. John Power, Ross Street, Coherence for tricategories, Mem. Amer. Math. Soc. 117 no. 558 (1995)](https://doi.org/10.1090/memo/0558)

### Thin simplices pick out the nerves of strict ω-categories

**Remember:** Mark which simplices are identities, and the nerve remembers the ω-category.

*Makes the theorem clean to state or prove.* MSC 18N30 (Strict omega-categories, computads, polygraphs), 18N50. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A stratified simplicial set marks selected positive-dimensional simplices as thin and marks every degenerate simplex. It is strict complicial if it has unique extensions against every standard complicial horn inclusion and satisfies the complicial thinness extensions.

**Problem.** The nerves of strict ω-categories are exactly the complicial sets. This is the Street–Roberts conjecture, proved by Verity.

**How the definition helps.** In our own reading, thin simplices help because they record which simplices are composites or identities. A plain simplicial set cannot tell this, so it has no clean horn-filling description of strict ω-categories. The real work is in Verity's long proof. Dropping uniqueness gives weak complicial sets, a proposed model for weak ω-categories.

**nLab:** [thin element](https://ncatlab.org/nlab/show/thin+element). It says: “Street and Roberts conjectured that the nerves of strict ω-categories could be characterized as stratified simplicial sets such that”

**Sources:**

- [D. Verity, Complicial Sets, arXiv:math/0410412 (2004)](https://arxiv.org/abs/math/0410412)

### A good cylinder makes it easier to recognize a model category

**Remember:** A good cylinder turns cofibrations into anodyne cofibrations, so one check does two jobs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A32. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Fix a premodel category with cofibrations C, anodyne cofibrations AC, and a functorial cylinder admitting a right adjoint. Cylindricity requires the cylinder-boundary pushout product to preserve both C and AC. For either endpoint inclusion, its pushout product must send every map of C into AC.

**Problem.** A premodel category is a model category exactly when W = AF ∘ AC satisfies 2-out-of-3. In a cylindrical premodel category, this reduces to two conditions instead of three (Cavallo and Sattler).

**How the definition helps.** The cylinder makes one condition follow from another, so there is less to check. In a cylindrical premodel category, the first of the three conditions implies the second (Lemma 3.22). This is a step toward building model structures, for example on cubical sets. The remaining two conditions still need a proof in each case.

**nLab:** [premodel category](https://ncatlab.org/nlab/show/premodel+category). It says: “In a cylindrical premodel structure, the first condition of Proposition 1 implies the second (Cavallo &amp; Sattler 2022, Lemma 3.22), yielding a simplified recognition theorem”

**Sources:**

- [Evan Cavallo, Christian Sattler, Relative elegance and cartesian cubes with one connection, arXiv:2211.14801 (2022)](https://arxiv.org/abs/2211.14801)
- [Reid William Barton, A model 2-category of enriched combinatorial premodel categories, PhD thesis, arXiv:2004.12937 (2020)](https://arxiv.org/abs/2004.12937)

### Chosen fillers give a model category where every object is fibrant

**Remember:** Do not just know that fillers exist; carry them with you.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50, 18C15. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Fix generating acyclic cofibrations J in a model category C. An algebraic fibrant object X chooses an extension B → X for every j: A → B in J and map A → X. Its morphisms preserve all chosen extensions.

**Problem.** Let C be cofibrantly generated, with monomorphic acyclic cofibrations and generating acyclic cofibrations having finitely presentable domains. Algebraic fibrant objects form a complete and cocomplete model category Quillen equivalent to C, and every object is fibrant.

**How the definition helps.** Chosen extensions allow a free algebraic fibrant replacement and a forgetful functor (our own). Nikolaus’s transfer theorem gives the model structure and Quillen equivalence. Lifting against the generators makes each underlying object fibrant, and the forgetful functor detects fibrations (our own).

**nLab:** [model structure on algebraic fibrant objects](https://ncatlab.org/nlab/show/model+structure+on+algebraic+fibrant+objects). It says: “Under mild conditions, the category Alg C of algebraic fibrant objects in a model category C forms itself naturally a model category which is Quillen equivalent to C, and in which all objects are fibrant.”

**Sources:**

- [Thomas Nikolaus, Algebraic models for higher categories (2010), arXiv:1003.1342](https://arxiv.org/abs/1003.1342)

### Closure rules give a smallest basic localizer, which is classical homotopy theory

**Remember:** A basic localizer is closed under the moves that Quillen's Theorem A uses.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A basic localizer W contains identities, satisfies two-out-of-three, and contains i whenever ri = id and ir ∈ W. It contains A → 1 whenever A has a terminal object. For every functor A → B over C, membership of all A/c → B/c in W implies membership of A → B.

**Problem.** The smallest basic localizer is the class of functors whose nerve is a weak homotopy equivalence. Grothendieck conjectured this, and Cisinski proved it.

**How the definition helps.** The definition uses only closure conditions, so any intersection of basic localizers is again one, and a smallest one exists. The last axiom is a form of Quillen's Theorem A. So facts such as 'every functor with an adjoint is a weak equivalence' follow in a few lines. The identification with nerve weak equivalences is a real theorem.

**nLab:** [basic localizer](https://ncatlab.org/nlab/show/basic+localizer). It says: “Since the definition consists merely of closure conditions, the intersection of any family of basic localizers is again a basic localizer. It follows that there is a unique smallest basic localizer.”

**Sources:**

- [Denis-Charles Cisinski, Le localisateur fondamental minimal, Cahiers de Topologie et Géométrie Différentielle Catégoriques 45 (2004) 109–140](http://www.numdam.org/item/CTGDC_2004__45_2_109_0/)
- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](http://www.numdam.org/item/AST_2005__301__R1_0/)

### Constructive definitions give the Kan–Quillen model structure on simplicial sets

**Remember:** Lifts are data, cofibrations are decidable, and Kan complexes define weak equivalences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50, 03F65. arXiv math.AT, math.LO. Level 4: research.

**Definition.** A constructive Kan fibration supplies a section choosing a solution to every horn lifting problem. A cofibration is a levelwise decidable inclusion for which degeneracy is decidable on simplices outside the image. Weak equivalences between cofibrant Kan complexes are homotopy equivalences, extended to arbitrary maps by cofibrant and fibrant replacement.

**Problem.** With these definitions, the Kan–Quillen model structure on simplicial sets exists constructively, without excluded middle or choice. With excluded middle and choice, it is the classical one (Henry; Gambino, Sattler and Szumiło).

**How the definition helps.** Specified horn fillers supply the witnesses that a classical lifting argument might choose (our own). Decidable degeneracy gives the constructive test for cofibrancy (our own). The constructive Kan–Quillen theorems establish the model axioms and recover the usual classes under excluded middle and choice (our own).

**nLab:** [constructive model structure on simplicial sets](https://ncatlab.org/nlab/show/constructive+model+structure+on+simplicial+sets). It says: “due to the constructive nature of the existential quantifier, being an (acyclic) fibration means we have a section of the map from the set of solutions to lifting problems to the set of lifting problems.”

**Sources:**

- [S. Henry, A constructive account of the Kan–Quillen model structure and of Kan's Ex∞ functor, arXiv:1905.06160 (2019)](https://arxiv.org/abs/1905.06160)
- [N. Gambino, C. Sattler, K. Szumiło, The constructive Kan–Quillen model structure: two new proofs, arXiv:1907.05394 (2019)](https://arxiv.org/abs/1907.05394)

### Derivators are built so that homotopy exact squares have a combinatorial test

**Remember:** Test the square’s Kan extension comparison in every derivator.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A40. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A lax square of small categories has a specified natural transformation vf ⇒ gu between its two composites. It is homotopy exact if its left Beck–Chevalley comparison is invertible for every derivator.

**Problem.** Let f: A → B, u: A → C, v: B → D and g: C → D form such a square. It is homotopy exact precisely when each comparison (b/A/c) → Hom<sub>D</sub>(vb,gc) induces a weak equivalence of nerves. Here b ∈ B and c ∈ C vary independently, and the target is discrete.

**How the definition helps.** Pointwise Kan extension reduces the comparison to homotopy colimits over categories of factorizations (our own). Cisinski’s theorem gives the criterion that each factorization category over a specified arrow vb → gc has weakly contractible nerve (our own). These categories are exactly the fibres over the displayed discrete target (our own).

**nLab:** [exact square](https://ncatlab.org/nlab/show/exact+square), [derivator](https://ncatlab.org/nlab/show/derivator), [homotopy exact square](https://ncatlab.org/nlab/show/homotopy+exact+square). It says: “The notion of derivator is essentially designed exactly so that this argument works, up until the last step”

**Sources:**

- [Moritz Groth, Derivators, pointed derivators, and stable derivators, Algebr. Geom. Topol. 13 (2013), arXiv:1112.3840](https://arxiv.org/abs/1112.3840)

### Derivators show homotopy types freely complete the point under homotopy colimits

**Remember:** A derivator is a homotopy category that remembers diagrams, so homotopy colimits make sense.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N60, 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A derivator is a strict 2-functor Catᵒᵖ → CAT sending disjoint unions to products up to equivalence, with evaluations jointly detecting isomorphisms. Every restriction must have both adjoints, and the canonical comma-category comparisons must compute those adjoints pointwise.

**Problem.** The free derivator under homotopy colimits on the terminal category is the derivator of simplicial sets (Cisinski). So homotopy types act on every derivator.

**How the definition helps.** Derivators let you ask the question inside ordinary category theory, and a universal property then answers it. The point acts on every derivator, so homotopy types then act on every derivator. The definition only makes the question possible to state. The identification of the free cocompletion is a real theorem.

**nLab:** [derivator](https://ncatlab.org/nlab/show/derivator). It says: “Note that in order to conclude this, we didn't take for granted that homotopy types should be important: its universal property is formulated purely with ordinary category theory.”

**Sources:**

- [Denis-Charles Cisinski, Propriétés universelles et extensions de Kan dérivées, Theory and Applications of Categories 20 (2008), no. 17](http://www.tac.mta.ca/tac/volumes/20/17/20-17abs.html)
- [Alex Heller, Homotopy theories, Memoirs of the American Mathematical Society 71, no. 383 (1988)](https://doi.org/10.1090/memo/0383)

### Filtered complete modules give curved algebras a homotopy theory

**Remember:** With no homology, measure weak equivalence on the associated graded.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 17B70. arXiv math.AT, math.RA. Level 4: research.

**Definition.** A complete filtered module has a descending filtration F with M ≅ limₚ M/FᵖM. Give it a filtration-preserving degree −1 map d satisfying d²(FᵖM) ⊆ Fᵖ⁺¹M for every p. A filtered map commuting with d is a graded weak equivalence if it induces a quasi-isomorphism on every associated graded piece.

**Problem.** Filtered complete modules, with weak equivalences detected on the associated graded, give curved algebras a homotopy theory with resolutions. In it, André-Quillen cohomology of curved algebras can be defined and computed.

**How the definition helps.** On the associated graded, d squares to zero, so homology makes sense there and gives a notion of weak equivalence. Quasi-isomorphism cannot give one, because d² is not zero. The hard part is the theory of curved operads that are not augmented, with bar and cobar constructions and Koszul duality.

**Paper or page:** [André-Quillen cohomology in the context of curved algebras](https://arxiv.org/abs/2401.14309). It says: “For curved algebras however, the notion of quasi-isomorphism is meaningless. … To get a homotopical context with an appropriate notion of weak equivalence, we consider filtered complete modules with a predifferential inducing a differential on the associated graded.”

**Sources:**

- [Joan Bellier-Millès, Sinan Yalin, André-Quillen cohomology in the context of curved algebras, arXiv:2401.14309 (2024)](https://arxiv.org/abs/2401.14309)

### Generalized Reedy categories give Reedy model structures for shapes with symmetries

**Remember:** Allow symmetries, but treat each lowering map like an epimorphism for them.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A generalized Reedy category has natural-number degrees and wide subcategories R₊, R₋ intersecting in all isomorphisms, which preserve degree. Noninvertible arrows in R₊ raise degree, those in R₋ lower it, and every arrow factors minus then plus, uniquely up to isomorphism. For every f ∈ R₋ and isomorphism θ, the equation θf = f forces θ = id.

**Problem.** For a small generalized Reedy category R and an R-projective model category M, diagrams R → M carry the generalized Reedy model structure. Examples of indexing categories include Segal’s Γ, Connes’ Λ and the tree category Ω.

**How the definition helps.** The generalized definition lets isomorphisms in and still gives the Reedy model structure. An ordinary Reedy category has no isomorphisms other than identities, so Γ, Λ and Ω do not fit it. The extra condition on isomorphisms and R₋ is used in exactly one lemma, about matching objects. The proof uses latching and matching objects with group actions, following Berger and Moerdijk.

**nLab:** [generalized Reedy category](https://ncatlab.org/nlab/show/generalized+Reedy+category), [generalized Reedy model structure](https://ncatlab.org/nlab/show/generalized+Reedy+model+structure). It says: “The notion of generalized Reedy category lifts this restriction, while maintaining the truth of the main theorem about Reedy categories: the existence of the Reedy model structure.”

**Sources:**

- [C. Berger, I. Moerdijk, On an extension of the notion of Reedy category, Mathematische Zeitschrift 269 (2011) 977–1004, arXiv:0809.3341](https://arxiv.org/abs/0809.3341)

### Grothendieck's inspiring assumption is easy for homotopy theories, not homotopy categories

**Remember:** Keep the homotopy colimits, and homotopy types become the free cocompletion of a point.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N60, 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The ∞-category S of spaces freely cocompletes a point if evaluation there gives Funᴸ(S,D) ≃ D for every cocomplete ∞-category D. Here Funᴸ denotes the ∞-category of colimit-preserving functors.

**Problem.** Every self-equivalence of the ∞-category of spaces is naturally equivalent to the identity, whose space of natural automorphisms is contractible.

**How the definition helps.** An equivalence preserves colimits and sends the terminal point to a terminal object (our own). The free cocompletion property identifies natural equivalences of such functors with equivalences of their values at the point (our own). The space of equivalences between terminal objects is contractible (our own).

**nLab:** [hypothèse inspiratrice](https://ncatlab.org/nlab/show/hypoth%C3%A8se+inspiratrice). It says: “The hypothèse inspiratrice can be proven relatively easily if one re-formulates the question for a lift of the homotopy category to derivators, (∞,1)-category theory, or some other such setting for homotopy theory.”

**Sources:**

- [Bertrand Toën, Gabriele Vezzosi, Segal topoi and stacks over Segal categories, arXiv:math/0212330 (2002)](https://arxiv.org/abs/math/0212330)
- [Denis-Charles Cisinski, Propriétés universelles et extensions de Kan dérivées, Theory and Applications of Categories 20 (2008) 605–649](http://www.tac.mta.ca/tac/volumes/20/17/20-17abs.html)

### In elegant Reedy categories, Reedy cofibrations are just monomorphisms

**Remember:** Every element comes from one nondegenerate element by one degeneracy, as in simplicial sets.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A25. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A Reedy category R is elegant if every element of every set-valued presheaf on R is uniquely a degeneracy of a nondegenerate element. The expression specifies both the degree-lowering arrow and the nondegenerate element from which restriction along that arrow produces the given element.

**Problem.** For an elegant Reedy category R, the Reedy and injective model structures on presheaves over R coincide. This holds for values in simplicial sets, or in any Cisinski model category.

**How the definition helps.** Elegance makes the Reedy cofibrations the same as the monomorphisms, so the two model structures match. Both have the objectwise weak equivalences, so they agree exactly when their cofibrations agree. The real work is to show that the forms of the definition agree and to pass from sets to a Grothendieck topos. Examples are Δ and Joyal's Θₙ, so every simplicial presheaf on them is Reedy cofibrant.

**nLab:** [elegant Reedy category](https://ncatlab.org/nlab/show/elegant+Reedy+category). It says: “The principal theorem about elegant Reedy categories is that the Reedy model structure on presheaves (i.e. contravariant diagrams) over an elegant Reedy category coincides with the injective model structure.”

**Sources:**

- [Julia E. Bergner, Charles Rezk, Reedy categories and the Θ-construction, arXiv:1110.1066 (2011)](https://arxiv.org/abs/1110.1066)

### Judging functors by their nerves lets small categories model every homotopy type

**Remember:** Judge a functor only by what it does to the space of its nerve.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55P15, 18N50. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The nerve of a category is the simplicial set whose n-simplices are strings of n composable morphisms. A functor between small categories is a Thomason weak equivalence if its nerve is a weak homotopy equivalence of simplicial sets. The Thomason model structure on Cat has these weak equivalences.

**Problem.** Thomason weak equivalences give a model structure on Cat that is Quillen equivalent to simplicial sets. So small categories model all homotopy types, not only homotopy 1-types.

**How the definition helps.** The Thomason definition judges a functor by its nerve, so the claim that categories model all homotopy types gets a meaning. With equivalence of categories as sameness, groupoids model only homotopy 1-types. The real content is Thomason's theorem.

**nLab:** [Thomason model structure](https://ncatlab.org/nlab/show/Thomason+model+structure), [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis). It says: “if we declare a functor between categories to be a weak equivalence iff its nerve is a weak equivalence of simplicial sets, then all homotopy types can be modeled by 1-categories in this way”

**Sources:**

- [R. W. Thomason, Cat as a closed model category, Cahiers de Topologie et Géométrie Différentielle 21 (1980) 305–324](http://www.numdam.org/item/?id=CTGDC_1980__21_3_305_0)

### Shared contraacyclic trivial objects make K(Proj) equivalent to K(Flat-Cot)

**Remember:** Share the trivial objects and the homotopy categories must agree.

*True by definition. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18G25, 18G80. arXiv math.CT, math.RA. Level 4: research.

**Definition.** A complex X is contraacyclic here if every chain map P → X is null-homotopic for every complex P of projective R-modules (our own).

**Problem.** For every ring R, K(Proj) is triangle equivalent to K(Flat-Cot). These are the categories of complexes, up to chain homotopy, of projective modules and of flat cotorsion modules.

**How the definition helps.** Both model structures have the same trivial objects, so they have the same weak equivalences and the same homotopy category (our own summary). Each homotopy category is the category of objects both cofibrant and fibrant, up to homotopy, which gives K(Proj) and K(Flat-Cot) (our own). So the equivalence needs no direct comparison of the two kinds of complexes. The work is in building the flat model structure from the flat cotorsion pair.

**Paper or page:** [Quillen equivalences inducing Grothendieck duality for unbounded chain complexes of sheaves](https://arxiv.org/abs/2104.10783v2), [Quillen equivalences inducing Grothendieck duality for unbounded chain complexes of sheaves](https://arxiv.org/abs/2104.10783v2). It says: “Consequently, we have triangulated equivalences K(Proj) ≅ Ho(𝔐<sup>proj<sub>ctr</sub></sup>) = Ho(𝔐<sup>flat<sub>ctr</sub></sup>) ≅ K(Flat-Cot) ≅ 𝒟(Flat).”

**Sources:**

- [S. Estrada and J. Gillespie, Quillen equivalences inducing Grothendieck duality for unbounded chain complexes of sheaves, Communications in Contemporary Mathematics 27 (2025), published online 2024](https://doi.org/10.1142/S0219199724500342)

### Stable derivators give triangulated categories whose cones have universal properties

**Remember:** In a stable derivator, pullback squares and pushout squares are the same squares.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18G80, 55U35. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A derivator is stable if it is pointed and every coherent square is a homotopy pullback exactly when it is a homotopy pushout.

**Problem.** For a strong stable derivator D, each diagram category D(X) is canonically triangulated. Suspension is an equivalence, and coherent arrows have cones given by homotopy pushouts.

**How the definition helps.** Stability identifies suspension and loops as inverse equivalences through their defining squares (our own). Taking the homotopy pushout of Y ← X → 0 gives the cone of a coherent arrow X → Y (our own). Strongness supplies coherent representatives for arrows, and the triangulation theorem verifies the triangle axioms (our own).

**nLab:** [stable derivator](https://ncatlab.org/nlab/show/stable+derivator), [pointed derivator](https://ncatlab.org/nlab/show/pointed+derivator). It says: “This resolves many common issues with triangulated categories stemming from the fact that at the level of a homotopy category, certain desirable maps can only be stipulated to exist with some weak properties”

**Sources:**

- [Moritz Groth, Derivators, pointed derivators, and stable derivators, Algebraic &amp; Geometric Topology 13 (2013) 313–374, arXiv:1112.3840](https://arxiv.org/abs/1112.3840)

### The commutative monoid axiom gives model structures on commutative monoids

**Remember:** Symmetric powers of trivial cofibrations must stay trivial cofibrations.

*Rules out counterexamples. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18C40, 18M05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The commutative monoid axiom requires h□ⁿ/Σₙ to be a trivial cofibration for every trivial cofibration h and every integer n ≥ 1 (our own). Here h□ⁿ denotes the n-fold pushout product, with Σₙ permuting the factors.

**Problem.** Let C be a cofibrantly generated symmetric monoidal model category satisfying the monoid and commutative monoid axioms. Assume the smallness hypotheses for transfer along the free commutative monoid functor. Then commutative monoids in C carry the transferred model structure.

**How the definition helps.** The axiom controls the symmetric powers in White’s filtration of free commutative monoid cell attachments (our own). The monoid axiom then makes the resulting attachments weak equivalences (our own). In unbounded chain complexes over a positive-characteristic field, a free commutative algebra on a contractible disk can have extra homology (our own).

**nLab:** [commutative monoid in a symmetric monoidal model category](https://ncatlab.org/nlab/show/commutative+monoid+in+a+symmetric+monoidal+model+category). It says: “This is why the model structure on commutative monoids may not always exist even when the model structure on E-infinity monoids in a symmetric monoidal model category does.”

**Sources:**

- [David White, Model structures on commutative monoids in general model categories, Journal of Pure and Applied Algebra 221 (2017) 3124–3168, arXiv:1403.6759](https://arxiv.org/abs/1403.6759)

### The Frobenius condition gives right properness of Kan complexes without topological realization

**Remember:** Frobenius makes pullback along fibrations safe, so right properness follows.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A weak factorization system (L,R) satisfies Frobenius if pulling back any map in L along any map in R yields another map in L.

**Problem.** The Quillen model structure for Kan complexes is right proper. Through the Frobenius condition, this follows without topological realization or minimal fibrations (Gambino and Sattler).

**How the definition helps.** Our own summary: the Frobenius condition lets both halves of a factorisation survive pullback along a fibration, so right properness follows. Factor a weak equivalence as a trivial cofibration followed by a trivial fibration. Pullback along a fibration keeps trivial fibrations, and the Frobenius condition keeps trivial cofibrations. Gambino and Sattler build weak factorization systems with the Frobenius condition from uniform fibrations.

**Paper or page:** [The Frobenius Condition, Right Properness, and Uniform Fibrations](https://arxiv.org/abs/1510.00669), [A short proof of the Frobenius property for generic fibrations](https://arxiv.org/abs/2402.04227). It says: “we obtain a new proof that the Quillen model structure for Kan complexes is right proper, avoiding entirely the use of topological realization and minimal fibrations”

**Sources:**

- [Nicola Gambino and Christian Sattler, The Frobenius Condition, Right Properness, and Uniform Fibrations, Journal of Pure and Applied Algebra 221 (12) (2017), 3027–3068](https://doi.org/10.1016/j.jpaa.2017.02.013)
- [Reid Barton, A short proof of the Frobenius property for generic fibrations, Math. Struct. Comp. Sci. 35 (2025), e20](https://arxiv.org/abs/2402.04227)

### The monoid axiom gives a model structure on monoids

**Remember:** Tensor an acyclic cofibration with anything, then glue: you still get a weak equivalence.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18M05, 55P43. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A monoidal model category satisfies the monoid axiom if every transfinite composite of pushouts of maps h⊗X is a weak equivalence. Here h ranges over trivial cofibrations and X ranges over all objects.

**Problem.** Let a monoidal model category be cofibrantly generated, have all objects small, and satisfy the monoid axiom. Then monoids in it carry the transferred model structure (Schwede and Shipley).

**How the definition helps.** Free monoid cell attachments have a filtration with stages built from the tensor maps covered by the monoid axiom (our own). The transfer theorem of Schwede and Shipley uses this filtration to prove that the required cell attachments are weak equivalences (our own).

**nLab:** [monoid axiom in a monoidal model category](https://ncatlab.org/nlab/show/monoid+axiom+in+a+monoidal+model+category), [monoidal model category](https://ncatlab.org/nlab/show/monoidal+model+category). It says: “The monoid axiom is an extra condition on a monoidal model category that helps to make its model structure on monoids in a monoidal model category exist and be well behaved.”

**Sources:**

- [Stefan Schwede, Brooke Shipley, Algebras and modules in monoidal model categories, Proc. London Math. Soc. 80 (2000) 491–511, arXiv:math/9801082](https://arxiv.org/abs/math/9801082)

### The simplicial model category axiom makes mapping spaces Kan complexes

**Remember:** Apply the mapping-space axiom to maps from and to the endpoints.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In a simplicial model category, the mapping-space axiom tests every cofibration X → Y and fibration A → B. It requires Map(Y,A) → Map(X,A) ×<sub>Map(X,B)</sub> Map(Y,B) to be a Kan fibration, trivial if either input is trivial.

**Problem.** An object is cofibrant if the map from the initial object is a cofibration. An object is fibrant if its map to the terminal object is a fibration. From a cofibrant object to a fibrant one, the simplicial set of maps is a Kan complex.

**How the definition helps.** Take the cofibration ∅ → X and the fibration A → 1 (our own). Their comparison is Map(X,A) → ∗, since maps out of the initial object or into the terminal object form a point (our own). This is precisely the Kan condition.

**nLab:** [simplicial model category](https://ncatlab.org/nlab/show/simplicial+model+category). It says: “If X ∈ 𝒞 is cofibrant and A ∈ 𝒞 is fibrant, then 𝒞(X,A) is fibrant in sSet, hence is a Kan complex.”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Realization recovers the topological String classifying space

**Remember:** Realize the smooth fiber to recover the topological fiber.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 57R15. arXiv math.CT, math.DG. Level 4: research.

**Definition.** The smooth String(n) classifying stack is the homotopy fibre of the smooth characteristic map ½p₁: BSpin(n) → B³U(1) over the base point. Its objects thus include a chosen trivialization of the characteristic class.

**Problem.** For n ≥ 5, topological realization of this smooth classifying stack gives the classifying space of String(n), the 3-connected cover of Spin(n).

**How the definition helps.** The defining fiber has the same two maps as the topological construction after realization. The proof shows that realization preserves this particular fiber. It uses a model of the target made from finite products of circles in each simplicial degree.

**nLab:** [string 2-group](https://ncatlab.org/nlab/show/string+2-group). It says: “indeed maps under \|−\| to the topological string group:”

**Sources:**

- [Fiorenza, Schreiber and Stasheff, Čech cocycles for differential characteristic classes](https://doi.org/10.4310/atmp.2012.v16.n1.a5)

### The π∗-Kan condition makes realization preserve homotopy pullbacks

**Remember:** Kan-like homotopy groups in the levels make realization keep homotopy pullbacks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 4: research.

**Definition.** For a bisimplicial set X, write Bₘ = Xₘ,₀ for the basepoints in level m. For each n ≥ 1, form the simplicial set with m-simplices (b,α), where b ∈ Bₘ and α ∈ πₙ(\|Xₘ,•\|,b). The π∗-Kan condition requires each projection (b,α) ↦ b to be a Kan fibration.

**Problem.** Let f: X → Y be a map of bisimplicial sets satisfying the π∗-Kan condition, with π₀(f) a Kan fibration of simplicial sets. Derived realization preserves levelwise homotopy pullback squares along f.

**How the definition helps.** The condition packages homotopy groups at varying basepoints into fibrations in the remaining simplicial direction (our own). With the component fibration, the Bousfield–Friedlander homotopy pullback theorem gives the realization result (our own).

**nLab:** [π-Kan condition](https://ncatlab.org/nlab/show/%CF%80-Kan+condition), [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “The π∗-Kan condition (Bousfield &amp; Friedlander 1978, B.3) on a bisimplicial set guarantees that its geometric realization behaves well with respect to homotopy pullback”

**Sources:**

- [A. K. Bousfield, E. M. Friedlander, Homotopy theory of Γ-spaces, spectra, and bisimplicial sets, Lecture Notes in Mathematics 658 (1978) 80–130](https://doi.org/10.1007/BFb0068711)

### Unique thin fillers give a nonabelian Dold–Kan theorem

**Remember:** Unique thin fillers turn a Kan complex into algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 18G45, 18G50. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A simplicial T-complex marks positive-dimensional simplices as thin, including every degenerate simplex. Every horn has exactly one thin filler. For a thin simplex of dimension at least two, if all but one face are thin, the remaining face is thin.

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

**How the definition helps.** The reflector preserves pullbacks, so pulling back an inverted map gives another inverted map (our own). Localizing spaces at a point inclusion ∗ → ∗ ⊔ ∗ gives propositional truncation (our own). It fails to preserve the empty pullback of the two distinct point inclusions (our own). Lurie’s classification identifies topological localizations with Grothendieck topologies (our own).

**nLab:** [topological localization](https://ncatlab.org/nlab/show/topological+localization). It says: “A topological localization is, by definition, a left exact localization at a set of monomorphisms; left exactness is part of the definition. A general localization at a set of monomorphisms need not be left exact.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, Annals of Mathematics Studies 170, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### An ∞-connected (∞,1)-topos has the shape of a point

**Remember:** In an ∞-connected topos, constant sheaves remember exactly the ∞-groupoids they came from.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P55. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An (∞,1)-topos H is ∞-connected if the constant-sheaf functor LConst : ∞Grpd → H is fully faithful. Here ∞Grpd is the (∞,1)-category of ∞-groupoids, and LConst is the inverse image of the global sections morphism. Fully faithful means that LConst does not change the spaces of maps between ∞-groupoids.

**Problem.** An ∞-connected (∞,1)-topos has the shape of the point.

**How the definition helps.** Full faithfulness makes the adjunction unit K → Γ(LConst K) an equivalence for every space K (our own). The shape pro-space represents the functor K ↦ Γ(LConst K), which is therefore equivalent to K ↦ Map(∗,K) (our own). Hence the point represents the shape (our own).

**nLab:** [infinity-connected (infinity,1)-topos](https://ncatlab.org/nlab/show/infinity-connected+%28infinity%2C1%29-topos). It says: “An ∞-connected (∞,1)-topos has the shape of the point, in the sense of shape of an (∞,1)-topos.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040 (shape theory)](https://arxiv.org/abs/math/0608040)

### Defining n-connected maps by orthogonality gives closure under pushouts

**Remember:** A pushout leaves the space of lifts unchanged in the transferred square.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In an ∞-topos, a map is n-truncated if all its fibers, after testing by mapping spaces, have no homotopy above degree n. A map is left orthogonal to another if each square with those left and right maps has a contractible space of fillers. One definition calls a map n-connected if it is left orthogonal to every n-truncated map.

**Problem.** For n ≥ 0, a pushout of an n-connected map in an ∞-topos is n-connected.

**How the definition helps.** The orthogonality test survives a pushout because the pushout transfers every lifting problem and its fillers to the original map (our own explanation). The same test therefore still gives a contractible space of fillers. In spaces the alternative definition asks for nonempty, path-connected homotopy fibers with vanishing homotopy groups through degree n. The work is proving that this description agrees with orthogonality and constructing the factorization into an n-connected map followed by an n-truncated map.

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “the class of n-truncated morphisms in 𝐇 forms the right class in a orthogonal factorization system in an (∞,1)-category. The left class is that of n-connected morphisms in 𝐇.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Diagonal truncation makes finite-limit functors preserve truncated maps and objects

**Remember:** Finite-limit functors preserve every diagonal in the truncation test.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories). arXiv math.CT, math.AT. Level 4: research.

**Definition.** A (−2)-truncated map is an equivalence. For k ≥ −1, a map X → Y is k-truncated if its diagonal X → X ×<sub>Y</sub> X is (k−1)-truncated. An object is k-truncated if its map to the terminal object is k-truncated.

**Problem.** A functor between ∞-categories with finite limits that preserves those limits also preserves k-truncated maps and objects.

**How the definition helps.** The diagonal definition uses only equivalences and finite limits, so a functor preserving those limits carries each step to the same test. Induction proves preservation for maps, and preservation of the terminal object gives the result for objects. The other definition asks that induced maps of mapping spaces have k-truncated fibers. The work is proving the two tests agree, using that taking a path space in a space lowers the truncation level (our own summary).

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “This follows from the above recursive characterization of k-truncated morphisms by the (k-1)-truncation of their diagonal, which is preserved by the finite limit preserving F.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Effective groupoids in ∞-toposes make every group object a loop object

**Remember:** The degree-one term of the quotient nerve is the loop object.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55R35, 55P35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A groupoid object U• in an ∞-topos is effective when its canonical map to the Čech nerve of U₀ → \|U•\| is an equivalence. For a group object G, its one-object groupoid has U₀ = ∗, U₁ = G and realization BG.

**Problem.** For a group object G in an ∞-topos, let BG be the quotient of its one-object groupoid. Then G is equivalent to the loop object of BG, the pullback of the base point along itself.

**How the definition helps.** The effectiveness axiom identifies G with the degree-one term of the Čech nerve of the base point in BG. That term is exactly the pullback that defines the loop object. Another definition presents an ∞-topos as a category obtained from presheaves of spaces by a finite-limit-preserving localization. The higher Giraud theorem proves that this presentation and the axioms, including effectiveness, describe the same categories.

**nLab:** [groupoid object in an (infinity,1)-category](https://ncatlab.org/nlab/show/groupoid+object+in+an+%28infinity%2C1%29-category). It says: “Notice that one of the four characterizing properties of an (∞,1)-topos by the higher analog of the Giraud theorem is that all groupoid objects in an (infinity,1)-topos are effective.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### G-∞-categories are defined so that Elmendorf's theorem holds

**Remember:** A G-∞-category is a presheaf of ∞-categories on the orbits G/H.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P91. arXiv math.AT, math.CT. Level 4: research.

**Definition.** The orbit category of a group G has the transitive G-sets G/H as objects and the G-maps between them as morphisms. A G-∞-category is a functor from the opposite of the orbit category to the ∞-category of ∞-categories. So it is a system of ∞-categories, one for each subgroup H, with restriction functors between them.

**Problem.** G-∞-categories satisfy Elmendorf's theorem. G-spaces form a G-∞-category whose value at G/H is the ∞-category of H-spaces, with restriction as transition maps.

**How the definition helps.** The definition takes the conclusion of Elmendorf's theorem as its starting point, so the theorem follows by unwinding definitions. This is the approach of Barwick, Dotto, Glasman, Nardin and Shah. The real content is the classical Elmendorf theorem, which says that this agrees with genuine G-spaces.

**nLab:** [G-∞-category](https://ncatlab.org/nlab/show/G-%E2%88%9E-category). It says: “The starting point of Parametrized Higher Category Theory and Higher Algebra is to define G-∞-categories so that they satisfy Elmendorf's theorem.”

**Sources:**

- [C. Barwick, E. Dotto, S. Glasman, D. Nardin, J. Shah, Parametrized higher category theory and higher algebra: Exposé I – Elements of parametrized higher category theory, 2016, arXiv:1608.03657](https://arxiv.org/abs/1608.03657)

### Homotopy 2-category adjunctions compose and have unique adjoints up to equivalence

**Remember:** Units and counits compose by the ordinary rules for a 2-category.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18N10, 18A40. arXiv math.CT. Level 4: research.

**Definition.** For functors F: A → B and U: B → A between quasi-categories, an adjunction consists of transformations id<sub>A</sub> ⇒ UF and FU ⇒ id<sub>B</sub>. Their two triangle composites must equal the respective identities in the homotopy categories of the functor quasi-categories.

**Problem.** Adjunctions of quasi-categories compose. Any two right adjoints to the same functor are naturally equivalent.

**How the definition helps.** The homotopy 2-category definition turns composition and uniqueness into the ordinary unit-and-counit calculations in a 2-category (our own explanation). Composition pastes the units and counits, and uniqueness gives inverse transformations between the two right adjoints. Another definition gives a natural equivalence of mapping spaces instead. The work lies in proving that the definitions agree and that the 2-category adjunction extends to a coherent adjunction.

**nLab:** [formal (infinity,1)-category theory](https://ncatlab.org/nlab/show/formal+%28infinity%2C1%29-category+theory). It says: “For instance, this includes the theory of adjoint (∞,1)-functors (which are automatically homotopy coherent)”

**Sources:**

- [E. Riehl, D. Verity, The 2-category theory of quasi-categories, Advances in Mathematics 280 (2015) 549–642](https://doi.org/10.1016/j.aim.2015.04.021)

### In an ∞-topos, one object classifies all small maps

**Remember:** Up to homotopy, every small map is a pullback of one universal map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 03B38. arXiv math.CT, math.LO. Level 4: research.

**Definition.** For a pullback-stable class S, an S-classifier is a map p: Û → U in S. For every X, pullback of p must identify Map(X,U) with the maximal ∞-groupoid of S-maps over X.

**Problem.** An ∞-topos has a classifier for relatively κ-compact morphisms for every sufficiently large regular cardinal κ. Conversely, a presentable ∞-category with universal colimits and such classifiers is an ∞-topos (Rezk; Lurie, HTT 6.1.6.8).

**How the definition helps.** The mapping space records both families and their equivalences, including automorphisms of each fibre (our own). Thus the classifier expresses descent for entire families, and the size bound makes its statement possible (our own). The characterization theorem of Rezk and Lurie supplies existence and the converse (our own).

**nLab:** [(sub)object classifier in an (infinity,1)-topos](https://ncatlab.org/nlab/show/%28sub%29object+classifier+in+an+%28infinity%2C1%29-topos). It says: “When one passes all the way to ∞-toposes, there should be objects that classify all morphisms, subject to some bound on size.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Math. Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### In any ∞-topos, cocycles classify principal ∞-bundles

**Remember:** A bundle is the homotopy fiber of its classifying map.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55R15, 55R35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For a group object G in an ∞-topos, a principal G-bundle over X is a G-object P with an equivalence P//G ≃ X. Here P//G is the colimit of the action groupoid, and the bundle map is the resulting map P → X.

**Problem.** In an ∞-topos, G-principal ∞-bundles over X are equivalent to cocycles X → 𝐁G. So the nonabelian cohomology H(X, 𝐁G) classifies them.

**How the definition helps.** Pullback of ∗ → BG along a cocycle X → BG gives its principal bundle because colimits are universal (our own). Conversely, the action groupoid maps to the one-object groupoid of G, inducing X ≃ P//G → BG (our own). Effectiveness identifies P with the pullback of the base point, making the constructions inverse on the corresponding ∞-groupoids (our own).

**nLab:** [principal infinity-bundle](https://ncatlab.org/nlab/show/principal+infinity-bundle). It says: “In words this says that the cohomology on X with coefficients in G classified G-principal ∞-bundles, and in fact does so on the level of cocycles.”

**Sources:**

- [Thomas Nikolaus, Urs Schreiber, Danny Stevenson, Principal ∞-bundles – General theory, J. Homotopy Relat. Struct. 10 (2015) 749–801, arXiv:1207.0248](https://arxiv.org/abs/1207.0248)

### Invertible suspension makes stable mapping sets abelian groups

**Remember:** Every stable target is a double loop object, so maps into it add.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P42. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A pointed ∞-category with finite limits and colimits is stable if suspension is an equivalence. Suspension sends Y to the pushout of 0 ← Y → 0.

**Problem.** In the homotopy category of a stable ∞-category, maps between any two objects form an abelian group. Composition is additive in both arguments.

**How the definition helps.** Since looping is right adjoint to suspension, Y is naturally equivalent to Ω²Σ²Y. Mapping out of X preserves pullbacks, so Map(X,Y) is naturally a double loop space. Interchange makes its group of components abelian, and naturality gives additivity under composition in each variable (our own argument).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “which are autoequivalences of C that are inverses of each other.”

**Sources:** none listed. No primary source with a working link was found.

### Mapping-space truncation makes truncated objects closed under limits

**Remember:** Test every mapping space into the object for homotopy above degree n.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For n ≥ 0, a space is n-truncated if its homotopy groups above degree n vanish at every base point. An object A of an ∞-category is n-truncated if every space of maps into A is n-truncated.

**Problem.** In any ∞-category, a limit of n-truncated objects is n-truncated whenever the limit exists.

**How the definition helps.** Maps into a limit form the limit of the mapping spaces. For n ≥ 0, a space S is n-truncated exactly when constant maps give an equivalence S → Map(Sⁿ⁺¹,S). Both functors preserve limits, so the test passes to limits (our own argument).

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “For C an (∞,1)-category and k ≥ −2, the full sub-(∞,1)-category τ≤ₖ C is stable under all ∞-limits in C.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Regular ∞-group actions are those with a contractible homotopy quotient

**Remember:** Free and transitive together mean that the quotient is a point, up to homotopy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55R35, 03B38. arXiv math.AT, math.CT. Level 4: research.

**Definition.** An action of an ∞-group G is a type family X over its classifying type BG. Call the action regular if the total type ∑(b ∈ BG) X(b) is contractible.

**Problem.** For a group acting on a nonempty set, the homotopy quotient is contractible exactly when the action is free and transitive. Thus regular actions extend torsors to every ∞-group.

**How the definition helps.** The action groupoid has one arrow x → y for each group element carrying x to y (our own explanation). Transitivity gives at least one such element for every pair, and freeness gives at most one. A nonempty groupoid with exactly one arrow between every pair is contractible, and conversely.

**nLab:** [regular action](https://ncatlab.org/nlab/show/regular+action). It says: “Transitivity ensures that all the points in the homotopy quotient are connected by equivalences, while freeness means that the space of equivalences between two points is itself contractible.”

**Sources:** none listed. No primary source with a working link was found.

### Represented cohomology turns coefficient fibers into long exact sequences

**Remember:** Mapping into a fiber gives a fiber of mapping spaces.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55U35, 18F20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** Work in an ∞-category with finite limits, and choose a coefficient object A with a base point. Represented cohomology of X with coefficients in A is the set of path components of the space of maps X → A. Its degree −n version, for n ≥ 0, uses the n-fold loop object of A instead.

**Problem.** A fiber sequence of pointed coefficient objects gives a long exact sequence in nonpositive degrees. Here the fiber is the pullback of the target’s base point along the map. The terms in degree zero are pointed sets, not necessarily groups.

**How the definition helps.** Mapping out of X preserves fibers and therefore preserves iterated loops. The homotopy exact sequence of the resulting fiber sequence gives the claimed terms by taking components (our own explanation).

**nLab:** [cohomology](https://ncatlab.org/nlab/show/cohomology), [fiber sequence](https://ncatlab.org/nlab/show/fiber+sequence). It says: “By projecting everything to connected components with Π₀ this then yields an ordinary long exact sequence of pointed sets”

**Sources:**

- [K. S. Brown, Abstract homotopy theory and generalized sheaf cohomology, Transactions of the American Mathematical Society 186 (1973) 419–458](https://doi.org/10.1090/S0002-9947-1973-0341469-9)

### Stable ∞-categories make finite-limit preservation equivalent to finite-colimit preservation

**Remember:** The same squares test preservation of finite limits and finite colimits.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18G80. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An ∞-category has spaces of maps and keeps track of their higher homotopies. It is stable if it has a zero object and finite limits and colimits, and its pullback squares are exactly its pushout squares. A zero object is both initial and terminal.

**Problem.** A functor between stable ∞-categories preserves finite limits exactly when it preserves finite colimits.

**How the definition helps.** Finite limits require preservation of a terminal object and pullbacks. Finite colimits require preservation of an initial object and pushouts. Stability identifies the two objects and the two classes of squares, so the tests agree (our own argument).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “every exact triangle is coexact and vice versa, i.e. every morphism is the cokernel of its kernel and the kernel of its cokernel.”

**Sources:** none listed. No primary source with a working link was found.

### Terminal-cone limits in ∞-categories are unique up to contractible choice

**Remember:** All terminal cones form a space equivalent to a point.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18A30. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A cone connects an object to every entry of a diagram, with compatible maps and higher homotopies. In an ∞-category, an object is terminal if every space of maps into it is contractible, meaning equivalent to a point. A limit is a terminal object in the ∞-category of cones.

**Problem.** If a limit exists, the full subcategory of limit cones is a contractible space.

**How the definition helps.** Between any two terminal cones the mapping space is contractible in each direction. Every pair of opposite maps composes to the identity up to homotopy, since each endomorphism space is contractible. Hence all maps are equivalences, and any chosen limit cone exhibits this subcategory as equivalent to a point (our own argument).

**nLab:** [terminal object in an (infinity,1)-category](https://ncatlab.org/nlab/show/terminal+object+in+an+%28infinity%2C1%29-category). It says: “instead of demanding that from any other object there is a unique morphism into the terminal object, in a quasi-category there is a contractible infinity-groupoid of such morphisms”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Defining monoidal n-categories as degenerate higher categories makes delooping true by definition

**Remember:** A k-tuply monoidal n-category is an (n+k)-category squashed to one point below level k.

*True by definition.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is a pointed (n+k)-category in which every pair of parallel j-morphisms is equivalent for 0 ≤ j &lt; k. At level zero this requires every object to be equivalent to the chosen object.

**Problem.** The delooping hypothesis says that k-tuply monoidal n-categories are the same as pointed (k−1)-connected (n+k)-categories.

**How the definition helps.** The equivalences below level k express precisely (k−1)-connectedness, so this definition gives the delooping statement immediately. Comparing it with independently defined monoidal structures requires a comparison theorem (our own explanation).

**nLab:** [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis), [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category). It says: “Not infrequently the delooping hypothesis is used to supply a definition of”

**Sources:**

- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)
- [David Gepner, Rune Haugseng, Enriched ∞-categories via non-symmetric ∞-operads, Adv. Math. (2015), arXiv:1312.3178](https://arxiv.org/abs/1312.3178)

### Defining monoidal structure by little cubes turns stabilization into a theorem

**Remember:** k monoidal structures are k directions in which little cubes can sit side by side.

*Makes the theorem clean to state or prove.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is an algebra over the little k-cubes operad in n-categories. Its r-input operations are configurations of r labeled, axis-aligned little k-cubes with disjoint interiors inside the unit cube. Operadic composition inserts one configuration into each little cube.

**Problem.** The Baez–Dolan stabilization hypothesis says this: for k ≥ n+2, a k-tuply monoidal n-category is already maximally monoidal, that is, symmetric monoidal. More monoidal structures beyond that point add nothing new.

**How the definition helps.** The operad expresses stabilization as equivalence between symmetric monoidal structures and Eₖ-structures by restriction. The Baez–Dolan stabilization theorem proves this equivalence in the stated range (our own explanation).

**nLab:** [stabilization hypothesis](https://ncatlab.org/nlab/show/stabilization+hypothesis), [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category). It says: “makes good sense, as discussed further below. With this definition the stabilization hypothesis is a theorem at least for (n,1)-categories”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)
- [David Gepner, Rune Haugseng, Enriched ∞-categories via non-symmetric ∞-operads, Adv. Math. (2015), arXiv:1312.3178](https://arxiv.org/abs/1312.3178)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Fully dualizable objects make the cobordism hypothesis a precise statement

**Remember:** A fully dualizable object bends back on itself in every dimension, like a point.

*Makes the theorem clean to state or prove.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 57R56, 18M10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** In a symmetric monoidal (∞,n)-category, a fully dualizable object has a dual with evaluation and coevaluation. Both maps must have left and right adjoints when n ≥ 2. Require left and right adjoints recursively for every resulting unit and counit of dimension below n.

**Problem.** Evaluation at the framed point identifies the space of symmetric monoidal functors Bordₙᶠʳ → C with the space of fully dualizable objects in C. Here C is a symmetric monoidal (∞,n)-category. Thus the point determines a fully extended framed field theory.

**How the definition helps.** Full dualizability records the duals and adjoints that a functor must preserve at the framed point. The framed cobordism hypothesis proves that each such value extends with contractible choice (our own explanation).

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis), [fully dualizable object](https://ncatlab.org/nlab/show/fully+dualizable+object), [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “before definitions of these higher category theoretical notions were available.”

**Sources:**

- [Jacob Lurie, On the Classification of Topological Field Theories, Current Developments in Mathematics 2008 (2009) 129–280, arXiv:0905.0465](https://arxiv.org/abs/0905.0465)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Trimble n-categories build the fundamental n-groupoid into the definition

**Remember:** T says how to glue paths, and the same T defines composition and fundamental n-groupoids.

*True by definition.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18M75, 55P15. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A Trimble 0-category is a set. A Trimble (n+1)-category has objects and Trimble n-categories of arrows between each ordered pair, with composition along strings governed by the operad ΠₙT. Here T(r) consists of endpoint-preserving continuous maps \[0,1\] → \[0,r\], with composition by concatenation and reparametrization.

**Problem.** Every space X has a fundamental n-groupoid ΠₙX that is a Trimble n-category and is functorial in X.

**How the definition helps.** Take Π₀X to be the set of path components. For Πₙ₊₁X take points as objects and apply Πₙ to each space of paths between two points. Concatenation and reparametrization give T-operations on paths, and product preservation by Πₙ gives the required ΠₙT-operations. Continuous maps preserve these operations by postcomposition (our own explanation).

**nLab:** [Trimble n-category](https://ncatlab.org/nlab/show/Trimble+n-category), [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis). It says: “This definition was introduced in order to give an algebraic notion of fundamental n-groupoid”

**Sources:**

- [Tom Leinster, A Survey of Definitions of n-Category, arXiv:math/0107188 (2001)](https://arxiv.org/abs/math/0107188)
