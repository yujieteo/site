### Naturality explains why V ≅ V\*\* is canonical but V ≅ V\* is not

**Remember:** Natural means: the maps commute with every change of object.

*Makes the theorem clean to state or prove.* MSC 18A23 (Natural morphisms, dinatural morphisms), 15A03. arXiv math.CT. Level 2: later undergraduate.

**Definition.** A natural transformation α : F ⇒ G between functors C → D is a family of maps α(c) : F(c) → G(c), one for each object c. They must satisfy G(f) ∘ α(c) = α(c′) ∘ F(f) for every map f : c → c′. In words: applying f and then α gives the same result as applying α and then f. A natural isomorphism is one whose maps α(c) are all isomorphisms.

**Problem.** On finite-dimensional vector spaces, the maps V → V\*\*, v ↦ (ω ↦ ω(v)), form a natural isomorphism. Over ℝ or ℂ, no family of isomorphisms V ≅ V\* is natural with respect to linear isomorphisms once dim V ≥ 2.

**How the definition helps.** Naturality turns "canonical" into a condition one can check, and the double-dual map passes it while no family of maps to the dual does. The dual reverses maps, so an isomorphism g acts on V\* by the inverse of its transpose. A natural family V → V\* would then be a nondegenerate bilinear form that every invertible linear map preserves, and there is none.

**nLab:** [natural transformation](https://ncatlab.org/nlab/show/natural+transformation), [unnatural isomorphism](https://ncatlab.org/nlab/show/unnatural+isomorphism). It says: “(right on the first pages) for introducing the notion of natural transformation (and with it category theory) in the first place.”

**Sources:**

- [Samuel Eilenberg, Saunders Mac Lane, General theory of natural equivalences, Transactions of the American Mathematical Society 58 (1945) 231–294](https://doi.org/10.1090/S0002-9947-1945-0013131-6)

### Defining products by a universal property makes them unique up to isomorphism

**Remember:** Two universal objects have one map each way, so they are isomorphic.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 2: later undergraduate.

**Definition.** A product of objects X and Y in a category is an object P with maps to X and to Y. It must be universal: any object with maps to X and Y has exactly one compatible map to P. Compatible means that composing it with the maps from P to X and Y gives back the given maps.

**Problem.** Any two products of the same pair of objects are isomorphic.

**How the definition helps.** Each product has exactly one compatible map into the other (our own outline). The two composites are compatible maps from a product to itself, and so is the identity. By uniqueness, each composite is the identity (our own). So the isomorphism follows from the definition alone, and it is even unique among compatible maps (our own). The same argument works for every object defined by a universal property (our own). The work moves into existence. In the category of fields, ℚ and 𝔽₂ have no product, because no field maps to both (our own example).

**Paper or page:** [An Infinitely Large Napkin: Cats: Categories](https://venhance.github.io/napkin/Napkin.pdf). It says: “When they exist, products are unique up to isomorphism: given two products P₁ and P₂ of X and Y there is an isomorphism between the two objects.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Groupoid cardinality divides the set size by the group order

**Remember:** Weight each orbit by the reciprocal of the size of its stabilizer.

*True by definition. Confidence: medium.* MSC 18B40 (Groupoids, semigroupoids, semigroups, groups (viewed as categories)), 20L05. arXiv math.CT, math.CO. Level 2: later undergraduate.

**Definition.** A groupoid is a category in which every arrow is invertible. Its cardinality counts each isomorphism class with weight one divided by the number of invertible arrows from a representative to itself. In the action groupoid X//G, each group element gives an arrow from x to gx. The isomorphism classes are orbits, and the arrows from x to itself form the subgroup that fixes x.

**Problem.** For a finite group G acting on a finite set X, the action groupoid has cardinality \|X//G\| = \|X\|/\|G\|, even if the action is not free.

**How the definition helps.** Groupoid cardinality makes division exact because each orbit's weight is its size divided by \|G\|. In our own proof, this is the orbit–stabilizer theorem, which relates orbit size to the subgroup fixing a point. Adding the orbit sizes counts every point once. Ordinary orbit counting gives each orbit weight 1 instead. For example, a group of order two fixing one point has one orbit, but the weighted count is ½.

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

**Definition.** Define Ext¹(A, B) as the set of short exact sequences 0 → B → E → A → 0. Two sequences count as equal if an isomorphism of middle terms fixes A and B. The zero class is the split sequence. The usual definition computes Ext¹ from a projective resolution of A.

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

**Definition.** In the HoTT Book, a precategory has a type of objects and a set of morphisms between any two objects. It is a univalent category when the map from equalities a = b of objects to isomorphisms a ≅ b is an equivalence. In short, isomorphic objects are equal, in exactly one way for each isomorphism.

**Problem.** A functor between univalent categories is an equivalence exactly when it is an isomorphism of categories. Also, equalities between two univalent categories are the same as equivalences between them.

**How the definition helps.** An equivalence comes with an inverse functor and with natural isomorphisms between the composites and the identities (our own). In a univalent category, these isomorphisms of objects become equalities, so the inverse is an inverse on objects too (our own). So an equivalence is already an isomorphism of categories. Classically this fails: a category with one object and the category with two isomorphic objects are equivalent but not isomorphic (our own example). In a univalent category those two objects are equal, so this case disappears (our own). Univalence of the universe, the axiom that equivalent types are equal, then turns isomorphism of categories into equality (our own).

**nLab:** [univalent category](https://ncatlab.org/nlab/show/univalent+category). It says: “The notion of "category" in which equality and isomorphism coincide in this way is called univalent or saturated.”

**Paper or page:** [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “For categories A and B, a functor F : A → B is an equivalence of categories if and only if it is an isomorphism of categories.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Benedikt Ahrens, Krzysztof Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science (2015)](https://doi.org/10.1017/s0960129514000486)

### In reflexive graphs the vertices are the maps from the terminal graph

**Remember:** Every vertex brings its own loop, so the terminal graph is just one vertex.

*True by definition. Confidence: medium.* MSC 18A10 (Graphs, diagram schemes, precategories), 05C20. arXiv math.CT, math.CO. Level 3: graduate.

**Definition.** A reflexive graph (also called a reflexive quiver) is a directed graph in which every vertex has a chosen loop, its identity edge. Morphisms must send identity loops to identity loops.

**Problem.** In the category of reflexive graphs, the maps from the terminal graph 1 to a graph G correspond exactly to the vertices of G.

**How the definition helps.** The one loop of the terminal graph must go to an identity loop, so each map from it picks out exactly one vertex. In plain graphs the terminal object is also one vertex with one loop. But a map from it needs a loop at the target vertex, and there may be none or many. In plain graphs the vertices are still represented, but by the graph with one vertex and no edges, not by the terminal graph.

**nLab:** [reflexive graph](https://ncatlab.org/nlab/show/reflexive+graph). It says: “One advantage of RefGph is that the set of vertices of a reflexive quiver G is representable: it is naturally isomorphic to hom(1,G).”

**Sources:** none listed. No primary source with a working link was found.

### Separable functors turn Maschke's theorem into a property of a forgetful functor

**Remember:** A separable functor lets you undo its action on morphisms, naturally.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A22 (Special properties of functors (faithful, full, etc.)), 18A40, 20C07. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** A functor F : C → D is separable if each map C(x, y) → D(Fx, Fy) has a left inverse that is natural in x and y. Rafael's theorem gives a test for a right adjoint G, with left adjoint F. G is separable exactly when the counit ε : FG → id is a natural split epimorphism. That is, there is a natural ν : id → FG with ε∘ν = id.

**Problem.** If \|G\| is invertible in a ring k, the forgetful functor from k\[G\]-modules to k-modules is separable. So an exact sequence of k\[G\]-modules splits if and only if it splits as a sequence of k-modules.

**How the definition helps.** The definition names the property that Maschke's theorem is about, so the theorem becomes one check on one functor. Rafael's theorem reduces separability of the forgetful functor to finding a natural section of the counit k\[G\] ⊗ M → M. In our own words, the section comes from averaging over G: m ↦ (1/\|G\|) Σ g ⊗ g⁻¹m. The same notion covers separable ring extensions, whose restriction-of-scalars functors are separable.

**nLab:** [separable functor](https://ncatlab.org/nlab/show/separable+functor), [Maschke's theorem](https://ncatlab.org/nlab/show/Maschke%27s+theorem). It says: “This "Maschke property" of the forgetful functor kG Mod → k Mod is what is generalized by the notion of separable functors.”

**Sources:**

- [C. Năstăsescu, M. Van den Bergh, F. Van Oystaeyen, Separable functors applied to graded rings, Journal of Algebra 123 (1989) 397–413](https://doi.org/10.1016/0021-8693(89)90053-7)

### Counting the terminal object as an empty product gives all finite limits

**Remember:** The product of nothing is the terminal object, just as the empty product is 1.

*Makes the theorem clean to state or prove.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** A terminal object is an object with exactly one arrow into it from every object. It is the product of the empty family of objects, the limit over the empty diagram. A pullback of two arrows into C is a universal object with arrows to their sources that agree in C. An equalizer of two arrows f, g is a universal arrow that makes f and g agree.

**Problem.** A category has all finite products and equalizers exactly when it has all pullbacks and a terminal object. Both conditions say that the category has all finite limits.

**How the definition helps.** Because finite products include the empty product, condition (1) already contains the terminal object, and the two conditions can match. Our own sketch: in condition (2), the product A × B is the pullback of A → 1 ← B. Here 1 is the terminal object. The equalizer of f, g from A to B is the pullback of the diagonal B → B × B along the pair (f, g). In the other direction, a pullback is an equalizer of two maps out of a product. Without the empty product, condition (1) would not give a terminal object, and the theorem would need a separate clause. The nLab says that finite limits come from pullbacks and a terminal object, the limit over the empty diagram.

**nLab:** [finite limit](https://ncatlab.org/nlab/show/finite+limit). It says: “In particular, binary products are finite limits and the terminal object (being the limit over the empty diagram) is a finite limit.”

**Paper or page:** [Category has Products and Equalizers iff Pullbacks and Terminal Object](https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object). It says: “(1): C has all finite products and equalizers. (2): C has all pullbacks and a terminal object.”

**Sources:**

- [ProofWiki, Category has Products and Equalizers iff Pullbacks and Terminal Object](https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object)

### Defining ends as right adjoints makes iterated ends commute, like Fubini's theorem

**Remember:** Adjoints compose, so ends over a product can be taken one at a time.

*True by definition. Confidence: medium.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A23. arXiv math.CT. Level 3: graduate.

**Definition.** Let T take two objects of C and be contravariant in the first, which means it reverses arrows. The end of T is a universal object with maps to each T(c, c), compatible with each arrow c → d. The nLab defines the end functor as the right adjoint of a functor that turns one object into a diagram. The other definition gives each end separately by its universal family of maps.

**Problem.** Let T have two pairs of arguments, from categories A and B, and let all ends over A, over B and over A × B exist. Then the end over A of the end over B is the end over A × B. By symmetry, it is also the end over B of the end over A.

**How the definition helps.** With the adjoint definition, Fubini follows because adjoints compose. The diagram functor for A × B is the diagram functor for A applied after the one for B (our own). The right adjoint of a composite is the composite of the right adjoints (our own). So the end over A × B is the iterated end (our own). The nLab says that this adjoint description immediately implies Fubini. The work goes into the existence of the ends and their description as right adjoints (our own).

**nLab:** [end](https://ncatlab.org/nlab/show/end). It says: “This immediately implies a Fubini theorem for ends and coends.”

**Sources:** none listed. No primary source with a working link was found.

### Defining final functors by preserved colimits makes their composites final

**Remember:** Two restrictions that keep the colimit keep it together.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** A functor F : C → D is final when restricting any diagram on D along F leaves its colimit unchanged, by the canonical map. The equivalent test asks, for each object d of D, that the arrows from d to values of F form a nonempty connected category.

**Problem.** If F₁ and F₂ are final, then so is their composite F₁ ∘ F₂.

**How the definition helps.** With the colimit definition, the proof is two restrictions in a row. Restricting along F₁ ∘ F₂ means restricting along F₁ and then along F₂ (our own). Neither step changes the colimit, so the composite does not either (our own). With the connectedness test, one must join chains of arrows through two categories (our own). The work goes into the theorem that the two definitions agree.

**nLab:** [final functor](https://ncatlab.org/nlab/show/final+functor). It says: “If F₁ and F₂ are final, then so is their composite F₁ ∘ F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Defining split coequalizers by equations makes every functor preserve them

**Remember:** Functors carry the splitting equations with them.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** A coequalizer of maps f, g : A → B is a universal map e : B → C with e f = e g. A split coequalizer is such a map e with extra maps s : C → B and t : B → A. They must satisfy e s = 1, f t = 1 and g t = s e.

**Problem.** Every functor sends a split coequalizer to a coequalizer. So split coequalizers are absolute coequalizers.

**How the definition helps.** The definition consists only of equations between composites, and every functor preserves such equations. So the image under any functor is again a split coequalizer. The work goes into showing that a split coequalizer is a coequalizer (our own). If h f = h g, then h = h f t = h g t = h s e, so h factors through e (our own). The factor is unique because e s = 1 (our own). An ordinary coequalizer, defined only by its universal property, need not survive a functor (our own).

**nLab:** [split coequalizer](https://ncatlab.org/nlab/show/split+coequalizer). It says: “In fact, a split coequalizer is not just a coequalizer but an absolute coequalizer: one preserved by all functors.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexive coequalizers make categories of algebras cocomplete, by Linton's theorem

**Remember:** Give the pair a shared section, and many monads keep the coequalizer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A reflexive coequalizer is a coequalizer of two maps f, g : A → B that have a common section s : B → A. A common section means that f s = g s = id, the identity on B. Every algebra of a monad is a reflexive coequalizer of free algebras.

**Problem.** Linton's theorem says that if C is cocomplete and the category Cᵀ of T-algebras has reflexive coequalizers, then Cᵀ is cocomplete. So if a monad on a complete and cocomplete category preserves reflexive coequalizers, its category of algebras is complete and cocomplete.

**How the definition helps.** Reflexive coequalizers are the right colimits to ask for, because free algebras and reflexive coequalizers build all other colimits of algebras. Cᵀ need not be cocomplete, even when C is cocomplete; the nLab cites an example over Pos, the category of partially ordered sets. The structure map of each algebra is a reflexive coequalizer of free algebras. Coproducts and general coequalizers in Cᵀ can be built from free algebras and reflexive coequalizers. The hypothesis is often easy to check. Finitary algebraic theories (theories whose operations each take finitely many inputs) over a cartesian closed category preserve reflexive coequalizers, because the power functors x ↦ xⁿ do.

**nLab:** [colimits in categories of algebras](https://ncatlab.org/nlab/show/colimits+in+categories+of+algebras). It says: “If C is cocomplete and Cᵀ has reflexive coequalizers, then Cᵀ is cocomplete.”

**Sources:**

- [Fred Linton, Coequalizers in categories of algebras, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80, Springer (1969)](https://doi.org/10.1007/BFb0083082)

### Reflexive coequalizers preserved in each variable are preserved jointly

**Remember:** A reflexive pair shares a section, as an equivalence relation contains the diagonal.

*Rules out counterexamples.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18C15. arXiv math.CT. Level 3: graduate.

**Definition.** A reflexive pair is a parallel pair f, g : A ⇉ B with a common section s : B → A, so f s = g s is the identity of B. A reflexive coequalizer is a coequalizer of such a pair.

**Problem.** If a functor of two variables preserves reflexive coequalizers in each variable separately, then it preserves them in both variables together.

**How the definition helps.** The common section makes a 3 × 3 diagram lemma work; for arbitrary coequalizers the statement is not true. Apply this to the tensor product of a cocomplete closed monoidal category. It shows that the free monoid monad preserves reflexive coequalizers, and Linton's theorem then makes the category of monoids cocomplete. In Set, reflexive coequalizers commute with finite products, so every finitary monad on Set preserves them.

**nLab:** [reflexive coequalizer](https://ncatlab.org/nlab/show/reflexive+coequalizer). It says: “In this case it implies that the free monoid monad on such a category preserves reflexive coequalizers, and thus (by Linton's theorem) the category of monoid objects in C is cocomplete.”

**Sources:**

- [F. E. J. Linton, Coequalizers in categories of algebras, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80 (1969) 75–90](https://doi.org/10.1007/BFb0083082)

### Sifted categories are defined by the theorem they satisfy

**Remember:** Sifted means that colimits of this shape pass through finite products.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A small category D is sifted if colimits of shape D commute with finite products in Set. That is, the colimit over d of F(d) × G(d) is isomorphic to (colimit of F) × (colimit of G).

**Problem.** A nonempty small category D is sifted exactly when its diagonal functor D → D × D is final. So every category with finite coproducts is sifted, and so is the shape of a reflexive coequalizer.

**How the definition helps.** The definition turns the commutation property into a statement about the diagonal. In Set, (colimit of F) × (colimit of G) is the colimit over D × D of F(d) × G(d′), so the definition compares a colimit over D × D with its restriction to the diagonal (our own). That is a finality condition on the diagonal, and Gabriel and Ulmer prove the equivalence. The bare parallel pair is not sifted.

**nLab:** [sifted category](https://ncatlab.org/nlab/show/sifted+category), [filtered category](https://ncatlab.org/nlab/show/filtered+category). It says: “A category D is called sifted if colimits of diagrams of shape D commute with finite products in Set”

**Sources:**

- [Jiří Adámek, Jiří Rosický, On sifted colimits and generalized varieties, Theory and Applications of Categories 8 (2001) 33–53](http://tac.mta.ca/tac/volumes/8/n3/8-03abs.html)
- [Jiří Adámek, Jiří Rosický, Enrico Vitale, What are sifted colimits?, Theory and Applications of Categories 23 (2010) 251–260](http://tac.mta.ca/tac/volumes/23/13/23-13abs.html)

### Split pushouts are preserved by every functor

**Remember:** Equations witness the pushout, and every functor preserves equations.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** Take a commutative square with p : A → B, q : A → C, m : B → P and n : C → P. It is a split pushout if there are sections s, t, u with p s = 1, q t = 1 and m u = 1, such that p t = u n. All the data are morphisms and equations between them.

**Problem.** A split pushout is an absolute pushout: every functor out of the category sends it to a pushout.

**How the definition helps.** The splitting consists only of morphisms and equations, and every functor keeps those. So any functor carries a split pushout to another split pushout. It is then enough to show once that a split pushout is a pushout, which is a short diagram chase. The splitting of p matters. In the original category, an epimorphism alone would be enough for the pushout property. But functors do not preserve epimorphisms, while they do preserve split ones. The nLab also gives a general, harder description of all absolute pushouts.

**nLab:** [absolute pushout](https://ncatlab.org/nlab/show/absolute+pushout). It says: “arbitrary functors do not preserve epimorphisms. They do however preserve split epimorphisms, and thus the section guarantees that the image of p will define an epimorphism in any category.”

**Sources:**

- [Samuel B. Isaacson, Symmetric cubical sets, Journal of Pure and Applied Algebra 215 (2011) 1146–1173](https://doi.org/10.1016/j.jpaa.2010.08.001)

### The Mittag-Leffler condition makes inverse limits keep short exact sequences exact

**Remember:** When images stop shrinking, inverse limits stay exact.

*Rules out counterexamples.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18G10. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** An inverse system of abelian groups (Aᵢ) is Mittag-Leffler if, for each i, the images of the maps Aⱼ → Aᵢ eventually stop shrinking. Systems with surjective transition maps are the main example.

**Problem.** Let 0 → Aᵢ → Bᵢ → Cᵢ → 0 be a short exact sequence of inverse systems of abelian groups indexed by the natural numbers. If (Aᵢ) is Mittag-Leffler, then 0 → lim Aᵢ → lim Bᵢ → lim Cᵢ → 0 is exact.

**How the definition helps.** When the images are stable, an element of lim Cᵢ can be lifted step by step (our own summary). Each choice can be corrected inside the stable image. The standard counterexample uses 0 → pⁱℤ → ℤ → ℤ/pⁱ → 0, as on Wikipedia. The limits are 0, ℤ and the p-adic integers ℤₚ, and ℤ → ℤₚ is not surjective. Here the system (pⁱℤ) is not Mittag-Leffler, since its images shrink forever. The quoted lemma also needs a countable index set; for uncountable systems the result can fail (our own).

**Wikipedia:** [Inverse limit](https://en.wikipedia.org/wiki/Inverse_limit). It says: “the Mittag-Leffler condition is a condition on the transition morphisms fᵢⱼ that ensures the exactness of lim”

**Paper or page:** [Stacks Project, Algebra, Lemma 10.86.4](https://stacks.math.columbia.edu/tag/0598). It says: “Suppose I is countable. If (Aᵢ) is Mittag-Leffler, then 0 → lim Aᵢ → lim Bᵢ → lim Cᵢ → 0 is exact.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0598 (Algebra, Lemma 10.86.4)](https://stacks.math.columbia.edu/tag/0598)

### The unique empty map makes the empty set the initial object

**Remember:** From nothing there is exactly one way to go anywhere.

*True by definition.* MSC 18A30 (Limits and colimits (products, sums, directed limits, pushouts, fiber products, equalizers, kernels, ends and coends, etc.)), 18B05. arXiv math.CT. Level 3: graduate.

**Definition.** A map from S to T is a set of pairs that gives each element of S exactly one value in T. For S = ∅, the empty set of pairs satisfies this, and it is the only one. An initial object is one with exactly one map to every object.

**Problem.** The empty set is an initial object of the category of sets. The set of maps from ∅ to ∅ has one element, and the set of maps from a nonempty set to ∅ is empty.

**How the definition helps.** Defining maps as sets of pairs makes the empty map exist and be unique with no special rule. Then ∅ is initial straight from the definition. The same rule gives exactly one map from ∅ to ∅, so 0⁰ = 1 for sets. In our own reading, the definition also shows that ∅ is not terminal, since no nonempty set maps to it.

**Paper or page:** [Empty Set is Initial Object](https://proofwiki.org/wiki/Empty_Set_is_Initial_Object), [Empty Mapping is Unique](https://proofwiki.org/wiki/Empty_Mapping_is_Unique), [Cardinality of Set of All Mappings to Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_to_Empty_Set). It says: “For each set T there exists exactly one empty mapping e: ∅ → T whose domain is the empty set.”

**Sources:**

- [ProofWiki, Empty Set is Initial Object](https://proofwiki.org/wiki/Empty_Set_is_Initial_Object)
- [ProofWiki, Empty Mapping is Unique](https://proofwiki.org/wiki/Empty_Mapping_is_Unique)
- [ProofWiki, Cardinality of Set of All Mappings to Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_to_Empty_Set)

### Defining the Karoubi envelope by formal pairs makes every idempotent split

**Remember:** Make the idempotent the identity of its formal image.

*True by definition.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions). arXiv math.CT. Level 3: graduate.

**Definition.** An idempotent is a map e with e ∘ e = e. The Karoubi envelope has as objects pairs (X, e) with e an idempotent on X, and e is the identity of (X, e). A map (X, e) → (Y, f) is a map u : X → Y with f ∘ u ∘ e = u. Another description uses retracts of representable presheaves, which are set-valued functors of the form Hom(−, X).

**Problem.** In the Karoubi envelope, every idempotent splits. That is, it equals j ∘ p for some maps p and j with p ∘ j equal to the identity.

**How the definition helps.** With formal pairs, the idempotent itself is an identity, so the splitting needs no construction. Let φ be an idempotent on (X, e). Let both p : (X, e) → (X, φ) and j : (X, φ) → (X, e) be φ. Then j ∘ p = φ, and p ∘ j = φ, which is the identity of (X, φ). The nLab gives this argument. The work goes into showing that this formal category matches the retracts of representable presheaves (our own).

**nLab:** [Karoubi envelope](https://ncatlab.org/nlab/show/Karoubi+envelope). It says: “It is clear that p ∘ j is the identity e : (c, e) → (c, e)”

**Sources:** none listed. No primary source with a working link was found.

### Defining the limit functor as a right adjoint makes limits commute

**Remember:** A limit functor is a right adjoint, so it preserves limits.

*True by definition.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** For a small shape I, the limit functor sends each diagram of shape I to its limit. Define it as the right adjoint of the functor that sends an object to the constant diagram. The other definition picks, for each diagram separately, a universal cone, which is a compatible family of maps into the diagram.

**Problem.** Suppose a category has all limits of two small shapes I and J. Then taking limits over I and then over J gives the same result as the other order, up to a canonical isomorphism.

**How the definition helps.** With the adjoint definition, the theorem is a special case of the theorem that right adjoints preserve limits. The limit functor over I is a right adjoint, so it preserves limits over J. Limits over J of diagrams of shape I are computed at each object of I (our own). So both orders give the same object (our own). With separate universal cones, one must first assemble the choices into a functor with a left adjoint (our own). The work goes there and into the theorem on right adjoints.

**nLab:** [limits commute with limits](https://ncatlab.org/nlab/show/limits+commute+with+limits). It says: “Since the limit-construction is the right adjoint functor to the constant diagram-functor, this is a special case of right adjoints preserve limits.”

**Sources:** none listed. No primary source with a working link was found.

### Flat functors make Diaconescu's theorem hold for every small category

**Remember:** A flat functor preserves all finite limits, even the ones that do not exist yet.

*Makes the theorem clean to state or prove.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** A functor F : C → Set is flat if its category of elements, the pairs (c, x) with x in F(c), is cofiltered. Equivalently, its extension to presheaves on C preserves finite limits. When C has finite limits, flat means the same as preserving them.

**Problem.** Diaconescu's theorem: for every small category C and every topos E, the geometric morphisms E → PSh(C) correspond to the internally flat functors C → E.

**How the definition helps.** Flatness asks for the right limits even when C lacks some of them, so the theorem needs no extra condition on C. If C lacks some finite limits, 'preserves finite limits' still makes sense, but the nLab says that it may not be the correct condition. Flatness asks for the limits that the functor would have to preserve after C is freely completed. When C has finite limits, the definition agrees with the naive one.

**nLab:** [flat functor](https://ncatlab.org/nlab/show/flat+functor), [Diaconescu's theorem](https://ncatlab.org/nlab/show/Diaconescu%27s+theorem). It says: “lacks some finite limits, then this concept still makes sense, but it may not be the correct one.”

**Sources:**

- [Radu Diaconescu, Change of base for toposes with generators, Journal of Pure and Applied Algebra 6 (1975) 191–218](https://doi.org/10.1016/0022-4049(75)90015-8)

### Strict creation of limits gives monadicity up to isomorphism

**Remember:** Strict creation: each limit downstairs has exactly one preimage upstairs, on the nose.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A functor U : A → C strictly creates colimits of a diagram J if the following holds. For every colimit cocone over U∘J, exactly one cocone over J is sent to it exactly, not only up to isomorphism, and that cocone is a colimit. Strict creation of limits is defined dually.

**Problem.** A functor U : A → C is isomorphic, over C, to the forgetful functor from the algebras of a monad exactly when U has a left adjoint and strictly creates coequalizers of U-split pairs.

**How the definition helps.** A notion that is not invariant under equivalence can detect a category up to isomorphism. Ordinary creation, up to isomorphism, can only detect categories up to equivalence. A U-split pair is a pair whose image under U has a split coequalizer. For amnestic isofibrations, strict creation and ordinary creation agree.

**nLab:** [created limit](https://ncatlab.org/nlab/show/created+limit). It says: “This is used in stating the version of the monadicity theorem that characterizes the category of algebras for a monad up to isomorphism rather than equivalence of categories.”

**Sources:**

- [Saunders Mac Lane, Categories for the Working Mathematician, 2nd edition, Springer (1978), Definition V.1](https://doi.org/10.1007/978-1-4757-4721-8)

### Adjoints are unique up to isomorphism by their universal property

**Remember:** An object known by its maps is known up to isomorphism.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** A functor F is left adjoint to G when maps F(C) → D match maps C → G(D), naturally in C and D. So F(C) is described only by the maps out of it.

**Problem.** Let C and D be locally small categories. If a functor G from D to C has a left adjoint, then any two left adjoints of G are naturally isomorphic.

**How the definition helps.** The definition fixes F(C) by the functor 'maps from C into G of something'. In our own proof, two objects that represent the same functor are isomorphic, by the Yoneda lemma. These isomorphisms fit together into a natural isomorphism. So uniqueness needs no construction. What stays hard is the existence of an adjoint, which needs an adjoint functor theorem or an explicit construction; this remark is our own.

**Paper or page:** [Left Adjoint Functor is Unique up to Natural Isomorphism](https://proofwiki.org/wiki/Left_Adjoint_Functor_is_Unique_up_to_Natural_Isomorphism). It says: “Then: the left adjoint functor F of G is unique up to isomorphism in the functor category Funct(C, D).”

**Sources:**

- [ProofWiki, Left Adjoint Functor is Unique up to Natural Isomorphism](https://proofwiki.org/wiki/Left_Adjoint_Functor_is_Unique_up_to_Natural_Isomorphism)

### By matching maps, left adjoints are fully faithful precisely for invertible units

**Remember:** The unit measures what the left adjoint changes about maps.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** Define an adjunction by a natural bijection between maps L X → Y and maps X → R Y. The unit at Y is then the map Y → R L Y that matches the identity of L Y. The other definition takes the unit and counit as given, with two triangle laws.

**Problem.** A left adjoint L is fully faithful exactly when every unit map is invertible. Fully faithful means that L gives a bijection from maps X → Y to maps L X → L Y.

**How the definition helps.** With the bijection definition, the action of L on maps becomes composition with a unit map. Applying L to a map X → Y and then using the bijection gives that map followed by the unit at Y (our own). So L is fully faithful exactly when composing with each unit map is a bijection for every X (our own). By the Yoneda lemma, a map is invertible exactly when composing with it gives such a bijection for every X (our own). The work goes into the Yoneda lemma and the naturality of the bijection (our own).

**Paper or page:** [Categories, Lemma 4.24.4.](https://stacks.math.columbia.edu/tag/07RB). It says: “u is fully faithful ⇔ id ≅ v ∘ u ⇔ η : id → v ∘ u is an isomorphism”

**Sources:**

- [Daniel M. Kan, Adjoint Functors, Transactions of the American Mathematical Society 87 (1958), 294–329](https://doi.org/10.2307/1993102)

### Defining a monad by a reflection makes it idempotent automatically

**Remember:** Reflecting an object that is already local changes nothing.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18C15. arXiv math.CT. Level 3: graduate.

**Definition.** Choose a full subcategory whose objects are called local. A reflection sends each object X to a local object T(X) with a map X → T(X). Each map from X to a local object must factor through this map in exactly one way. A general monad need not be idempotent, which means that the map T(T(X)) → T(X) need not be invertible.

**Problem.** The monad of a reflection is idempotent, so T(T(X)) is naturally isomorphic to T(X).

**How the definition helps.** T(X) is already local, so the identity map on T(X) has the reflection property. Uniqueness in the reflection property then makes the map T(X) → T(T(X)) invertible. This short argument is our own. The nLab states the result for any reflective subcategory. The real work is the converse. Each idempotent monad comes from the reflection onto its own local objects.

**nLab:** [idempotent monad](https://ncatlab.org/nlab/show/idempotent+monad). It says: “Conversely, the monad induced by any reflective subcategory is idempotent”

**Sources:** none listed. No primary source with a working link was found.

### Defining adjoints by matching sets of maps makes right adjoints preserve limits

**Remember:** Move the test object across the adjunction.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** An adjunction between functors L and R is a natural bijection between maps L X → Y and maps X → R Y. The other common definition uses two natural maps, the unit X → R L X and the counit L R Y → Y. They must satisfy two triangle laws.

**Problem.** A right adjoint R sends every limit that exists to a limit. A limit of a diagram is a universal object with compatible maps to each object of the diagram.

**How the definition helps.** With the bijection definition, the proof is a chain of three bijections for each test object X. Maps X → R(lim D) match maps L X → lim D by the adjunction (our own). These match compatible families of maps L X → D, by the definition of a limit (our own). These match compatible families X → R D, again by the adjunction (our own). So R(lim D) has the universal property of a limit of R D (our own). With the unit and counit, one must first build this bijection, and that is where the work goes (our own).

**Paper or page:** [Categories, Lemma 4.24.5.](https://stacks.math.columbia.edu/tag/0038). It says: “In other words v commutes with representable limits.”

**Sources:**

- [Daniel M. Kan, Adjoint Functors, Transactions of the American Mathematical Society 87 (1958), 294–329](https://doi.org/10.2307/1993102)

### Defining dependent sums by composition makes pullback squares satisfy Beck–Chevalley

**Remember:** Test both constructions by the same pullback rectangle.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18D30. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** The slice C/A has maps X → A as objects and commuting triangles as arrows. Pulling back along f : A → B sends objects over B to objects over A. The dependent sum along f sends X → A to the composite X → A → B. Another definition takes it as any left adjoint of pullback along f.

**Problem.** Take a pullback square of f : A → B and g : B′ → B. Its other sides are f′ : A′ → B′ and g′ : A′ → A. For X → A, summing along f then pulling back along g equals pulling back along g′ then summing along f′.

**How the definition helps.** With dependent sum as composition, both routes give a pullback of X along the same map. Summing then pulling back gives the pullback of X → B along g (our own). The other route gives the pullback of X → A along A′ → A, then composes with f′ (our own). Pasting of pullback squares shows that these are the same object (our own). The nLab states this agreement, the Beck–Chevalley condition, for every pullback square. With the left-adjoint definition, one must prove that a canonical comparison map is invertible (our own). The work goes into pullback pasting and the proof that composition is left adjoint to pullback (our own).

**nLab:** [Beck-Chevalley condition](https://ncatlab.org/nlab/show/Beck-Chevalley+condition). It says: “The codomain fibration of any category with pullbacks is a bifibration, and satisfies the Beck–Chevalley condition at every pullback square.”

**Sources:** none listed. No primary source with a working link was found.

### Defining group completion as a left adjoint makes it preserve pushouts

**Remember:** Maps out of a completion are monoid maps, so pushouts carry over.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 20M14, 18A30. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** Define the group completion G(M) of a commutative monoid M by a universal property. It comes with a monoid map M → G(M). Every monoid map from M to an abelian group extends uniquely to a group homomorphism from G(M). The concrete definition uses equivalence classes of pairs (a, b).

**Problem.** Take two maps of commutative monoids from a common source M to N and P. Their pushout glues N and P along the images of M. Completing the pushout gives the pushout of the completed groups.

**How the definition helps.** By the universal property, maps out of a completion are the same as monoid maps out of the original monoid. So both sides of the claim have the same maps to every abelian group, which makes them isomorphic (our own). The nLab states that completion is left adjoint to forgetting the group structure, which is this universal property in category language. Such left adjoints preserve all gluing constructions, pushouts among them (our own). With pairs, one would have to compare two quotient constructions by hand (our own). The work moves to proving that the pair construction has the universal property (our own).

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “has a left adjoint F (the corresponding free functor), the group completion functor”

**Sources:** none listed. No primary source with a working link was found.

### Defining Kan extensions as adjoints makes them send representables to representables

**Remember:** Adjunction and Yoneda turn extension into evaluation at F(c).

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** Let F : C → D be a functor between small categories. Left Kan extension along F sends a functor C → Set to a functor D → Set. Define it as the left adjoint of restriction, which composes a functor D → Set with F. The other definition computes it at each object of D as a colimit over arrows from values of F.

**Problem.** Left Kan extension along F sends the functor Hom(c, −) to the functor Hom(F(c), −). These are representable functors, which record the maps out of one object.

**How the definition helps.** With the adjoint definition, both functors have the same maps into any functor H : D → Set. Maps from the extension of Hom(c, −) to H match maps from Hom(c, −) to H ∘ F, by the adjunction (our own). By the Yoneda lemma, these match elements of H(F(c)), and so maps from Hom(F(c), −) to H (our own). The Yoneda lemma says that maps out of Hom(c, −) match elements at c. So the Yoneda lemma identifies the two functors (our own). The work goes into the existence of the adjoint, usually by the colimit formula (our own).

**nLab:** [Kan extension](https://ncatlab.org/nlab/show/Kan+extension). It says: “the left Kan extension along F takes representable presheaves C(c, −) : C → 𝒱 to their image under F:”

**Sources:** none listed. No primary source with a working link was found.

### Defining reflections by a universal property gives colimits by reflecting ambient ones

**Remember:** Take the ambient colimit, then reflect it.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A35. arXiv math.CT. Level 3: graduate.

**Definition.** A full subcategory D of C is reflective when each object X of C has a reflection, a map X → R X into D. Every map from X to an object of D must factor uniquely through it. The other way specifies R by a construction, such as the quotient of a group by its commutator subgroup.

**Problem.** Let a diagram in a reflective subcategory D have a colimit in C. Then the reflection of that colimit is a colimit of the diagram in D. For example, a coproduct of abelian groups is the abelianization of their free product.

**How the definition helps.** With the universal property, the reflection is a left adjoint of the inclusion, and left adjoints preserve colimits (our own). The reflection of an object already in D is that object, up to isomorphism (our own). So the reflected colimit is a colimit of the same diagram in D (our own). With a concrete construction, one must check this by hand for each case (our own). The work goes into constructing the reflection and proving its universal property (our own).

**nLab:** [reflective subcategory](https://ncatlab.org/nlab/show/reflective+subcategory). It says: “inherits colimits from the larger category by application of the reflector”

**Sources:** none listed. No primary source with a working link was found.

### In univalent categories, being a left adjoint is a property, not structure

**Remember:** Adjoints are unique up to isomorphism, and isomorphism is equality here.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 03B38. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A functor F : A → B is a left adjoint when some functor G : B → A has a unit and a counit that satisfy the two triangle identities. A mere proposition is a type with at most one element up to equality. In a univalent category, equalities of objects are the same as isomorphisms.

**Problem.** Let F : A → B be a functor, where A is a univalent category and B is a precategory. Then "F is a left adjoint" is a mere proposition: any two right adjoints of F, with their units and counits, are equal.

**How the definition helps.** Any two right adjoints of F are naturally isomorphic, by the usual argument (our own). The book shows that the functors from a precategory into a univalent category form a univalent category again. So that natural isomorphism is an equality, and the adjoint data are unique (our own outline). In an ordinary category the adjoint is unique only up to isomorphism, so "F is a left adjoint" carries data (our own comparison).

**Paper or page:** [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Categories](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “If A is a category (but B may be only a precategory), then the type “F is a left adjoint” is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Benedikt Ahrens, Krzysztof Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science (2015)](https://doi.org/10.1017/s0960129514000486)

### Induction defined by maps automatically preserves projectivity

**Remember:** The map correspondence transfers the lifting property from H to G.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 16D40, 16S34. arXiv math.RT, math.CT. Level 3: graduate.

**Definition.** Start with a module for a subgroup H of G. Define induction so that maps from the induced module to V correspond naturally to maps from the original module to V restricted to H. This is what it means for induction to be left adjoint to restriction. The concrete construction instead tensors the original module with k\[G\] over k\[H\].

**Problem.** Let H be a subgroup of G and k a commutative ring with identity. If P is a projective k\[H\]-module, its induced k\[G\]-module is projective. A module is projective if every map from it into a quotient lifts along the quotient map.

**How the definition helps.** The adjoint definition reduces lifting maps from the induced module to lifting maps from P (our own). Restriction leaves the underlying modules and surjections unchanged, so projectivity of P supplies the lift (our own). The work lies in showing that the tensor construction realizes the required map correspondence (our own). The tensor proof instead checks that induction sends free modules to free modules and preserves direct summands (our own).

**nLab:** [induced representation](https://ncatlab.org/nlab/show/induced+representation). It says: “of restricting linear representations of G to H-representations has both a left adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Initial arrows assemble left adjoints

**Remember:** One initial arrow for every input builds the adjoint.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 01A60. arXiv math.CT, math.HO. Level 3: graduate.

**Definition.** A functor R sends objects and arrows of a category C to those of D, preserving identities and composition. For an object d of D, call u from d to R(c) universal if it has the following property. Every arrow from d to R(b) factors uniquely as u followed by R(h), for an arrow h from c to b.

**Problem.** If we choose such a universal arrow for every d, then R has a left adjoint. This means arrows from its value at d to b correspond bijectively to arrows from d to R(b), compatibly with composition.

**How the definition helps.** A universal arrow gives the required bijection by assigning each arrow its unique factor h. In our own explanation, these same factorizations determine how the left adjoint acts on arrows. Uniqueness then gives the identity and composition laws. The hard part in an existence theorem is finding the universal arrows. The historical paper gives one such theorem under additional hypotheses.

**nLab:** [adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem). It says: “the existence of the adjoint is equivalent to the existence for each d ∈ D of an initial object”

**Paper or page:** [The history of the General Adjoint Functor Theorem](https://arxiv.org/abs/2310.19528). It says: “for each S-object (S, σ) there exists an E-universal arrow”

**Sources:** none listed. No primary source with a working link was found.

### The Isbell adjunction between spaces and algebras holds by unwinding definitions

**Remember:** Functions map a space into representables, and points map an algebra into representables.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A25. arXiv math.CT. Level 3: graduate.

**Definition.** Let C be a small category. A presheaf on C is a functor Cᵒᵖ → Set, and a copresheaf is a functor C → Set. Send a presheaf X to the copresheaf O(X) whose value at c is the set of maps from X to the representable presheaf C(−, c). Send a copresheaf A to the presheaf Spec(A) whose value at c is the set of maps from A to the representable copresheaf C(c, −).

**Problem.** The functor O, from presheaves on C to the opposite of copresheaves on C, is left adjoint to Spec.

**How the definition helps.** O and Spec both map into the same object C(−, −), so the adjunction comes from unwinding notation. In our reading, both sides of the adjunction describe the same thing: a family of pairings X(d) × A(c) → C(d, c) that is natural in both variables. The nLab calls Isbell duality the archetype of dualities such as Gelfand duality and Stone duality. Each of those concrete dualities still needs its own theorem.

**nLab:** [Isbell duality](https://ncatlab.org/nlab/show/Isbell+duality). It says: “The proof is mostly a tautology after the notation is unwound.”

**Sources:**

- [John R. Isbell, Structure of categories, Bulletin of the American Mathematical Society 72 (1966) 619–655](https://doi.org/10.1090/S0002-9904-1966-11541-0)

### The pointwise formula makes Kan extension along a full embedding fully faithful

**Remember:** Over an object already included, its identity is the last stop.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 18A22. arXiv math.CT. Level 3: graduate.

**Definition.** Let F : C → D be a functor between small categories. The pointwise left Kan extension of G : C → Set has, at Y, the colimit of G over all arrows F(X) → Y. The other definition makes extension the left adjoint of restriction along F, with no formula.

**Problem.** Let F be fully faithful, which means it gives bijections on sets of maps. Then left Kan extension along F, from functors C → Set to functors D → Set, is fully faithful.

**How the definition helps.** With the formula, the extension at F(X) is visibly G(X). Among arrows into F(X), the identity of F(X) is the last object, because each arrow is F of a unique map (our own). A colimit over a category with a last object is the value there, so the restricted extension is G again (our own). So the unit of the adjunction is invertible, as the nLab states. A left adjoint with invertible unit is fully faithful, by a standard lemma on adjoint functors. The work goes into the pointwise formula and that lemma (our own).

**nLab:** [Kan extension](https://ncatlab.org/nlab/show/Kan+extension). It says: “is itself a full and faithful functor.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of shifts makes itinerary maps commute automatically

**Remember:** The first coordinate determines a map into the shift that commutes with time.

*True by definition.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)), 37B10. arXiv math.CT, math.DS. Level 3: graduate.

**Definition.** A discrete-time system is a set Y with a self-map T, and maps between systems commute with their respective self-maps. The left shift on sequences in X deletes the first entry. Its universal property says that for each system (Y, T), maps from Y to X correspond to system maps into the shift. The correspondence takes a system map to its first coordinate.

**Problem.** For any function f from Y to X, the itinerary y ↦ (f(y), f(Ty), f(T²y), …) is the unique system map with first coordinate f.

**How the definition helps.** The universal property makes existence, uniqueness, and commutation part of the description of the shift. The coordinate definition gives the left shift but does not state which maps into it commute with the dynamics. To prove that the descriptions agree, commutation forces coordinate n at y to equal the first coordinate at Tⁿy (our own). Those forced coordinates give the displayed itinerary, which commutes with the shift. This is the right-adjoint description, meaning that system maps into the shift correspond to ordinary functions into its alphabet.

**nLab:** [shift](https://ncatlab.org/nlab/show/shift). It says: “From the point of view of category theory, they are a universal (right adjoint) way of forming dynamical systems from the objects of a category.”

**Sources:** none listed. No primary source with a working link was found.

### With adjoints as matching sets of maps, composite adjoints reverse order

**Remember:** Move two functors across one at a time, and their order reverses.

*True by definition. Confidence: medium.* MSC 18A40 (Adjoint functors (universal constructions, reflective subcategories, Kan extensions, etc.)). arXiv math.CT. Level 3: graduate.

**Definition.** Functors L and R are adjoint when maps L X → Y match maps X → R Y, naturally in X and Y. The other definition uses a unit and a counit, two natural maps that satisfy two triangle laws.

**Problem.** Let R and S be composable functors with left adjoints L and M. Then the composite S ∘ R has the left adjoint L ∘ M.

**How the definition helps.** With the bijection definition, the proof is two bijections in a row. Maps L M X → Y match maps M X → R Y, and these match maps X → S R Y (our own). Both steps are natural, so their composite is natural (our own). With the unit and counit, one must build a new unit and counit and check the triangle laws (our own). The Stacks Project does part of that check, for the counit, in the same lemma.

**Paper or page:** [Categories, Lemma 4.24.9.](https://stacks.math.columbia.edu/tag/0DV0). It says: “The functor v″ = v′ ∘ v has a left adjoint equal to u″ = u ∘ u′.”

**Sources:**

- [Daniel M. Kan, Adjoint Functors, Transactions of the American Mathematical Society 87 (1958), 294–329](https://doi.org/10.2307/1993102)

### Atomic topoi defined as sums of atoms make every subobject complemented

**Remember:** A subobject keeps or drops each atom.

*True by definition.* MSC 18B25 (Topoi), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** An atom of a topos is a nonzero object whose only subobjects are itself and the initial object 0. Call a Grothendieck topos atomic if each object is a disjoint union of atoms. A site definition instead presents the topos as sheaves for the atomic topology.

**Problem.** In an atomic Grothendieck topos, every subobject has a complement, so the topos is Boolean.

**How the definition helps.** With this definition, a subobject must keep or drop each atom whole (our own). Write X as a disjoint union of atoms and pull the subobject back to each atom (our own). Each pullback is 0 or the whole atom (our own). Disjoint unions are stable under pullback, so the subobject is the union of the atoms it keeps (our own). The atoms it drops form its complement (our own). The work moves to proving that the site definition gives this decomposition (our own).

**nLab:** [atomic topos](https://ncatlab.org/nlab/show/atomic+topos). It says: “Every object of E can be written as a disjoint union of atoms.”

**Sources:** none listed. No primary source with a working link was found.

### Classifying toposes make classical proofs of geometric statements constructive

**Remember:** The universal model satisfies exactly what the theory proves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B25 (Topoi), 18F10, 03F65. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A geometric theory T has axioms that are implications, called geometric sequents, between formulas built from equality, finite 'and', arbitrary 'or' and 'there exists'. The classifying topos of T contains a universal model U. A geometric sequent is deducible from T exactly when U satisfies it. Every model of T in any topos is a pullback of U along a geometric morphism.

**Problem.** Barr's theorem: if a geometric sequent is deducible from a geometric theory using classical logic and the axiom of choice, then it is deducible from the theory in geometric logic, which is constructive.

**How the definition helps.** The universal model reduces the question to one classical model. Barr's theorem gives a surjective geometric morphism to the classifying topos from a topos that satisfies the axiom of choice. Its inverse image is conservative, so a sequent that holds in that classical model also holds in U, and is therefore deducible. The nLab notes that the proof of Barr's theorem uses Zorn's lemma in the base topos.

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

**Definition.** A subtopos of a topos E is a full subcategory whose inclusion has a left adjoint L that preserves finite limits. L is called the reflector. The map X → LX is universal among maps from X into the subcategory. A site description instead gives a covering rule that the sheaves must obey.

**Problem.** A subtopos is the localization of E at the maps that L turns into isomorphisms. Localization means the universal functor that makes those maps invertible.

**How the definition helps.** The reflector is part of the definition, so it directly gives the needed factorization (our own). A functor G that inverts those maps inverts each unit X → LX, since L sends units to isomorphisms (our own). So G is isomorphic to G on the subcategory composed with L (our own). This step holds for any full reflective subcategory and does not use finite limits (our own). The work moves to showing that sheaves for a topology form such a subcategory with a finite-limit-preserving reflector (our own).

**nLab:** [geometric embedding](https://ncatlab.org/nlab/show/geometric+embedding). It says: “Another perspective is that a geometric embedding F ↪︎ E is the localization of E at the class W of morphisms that the left adjoint E → F sends to isomorphisms in F.”

**Sources:** none listed. No primary source with a working link was found.

### The functor definition makes monoid actions a presheaf topos

**Remember:** Write monoid actions as presheaves and inherit the general theorem about presheaves.

*True by definition.* MSC 18B25 (Topoi), 37B02. arXiv math.CT, math.DS. Level 3: graduate.

**Definition.** A monoid M is a set with an associative product and an identity. An action on a set assigns each m a self-map, with multiplication giving composition and the identity giving the identity map. Regard M as a category B with one object and one arrow for each element. An action is then a functor B → Set, an assignment of a set and maps that preserves identities and composition.

**Problem.** Sets with actions of a fixed monoid form a topos. This is a category with set-like operations such as products and an object that classifies subobjects, which here are invariant subsets.

**How the definition helps.** The functor definition makes the category a topos because it identifies actions with presheaves. A presheaf on a category is a functor to sets that reverses its arrows. A functor B → Set is thus a presheaf on the opposite category of B, which reverses the arrows of B. Maps of actions are exactly the maps of these presheaves since both commute with every action map (our own). The work goes into the general theorem that presheaves on any small category, one whose objects and arrows form sets, give a topos. The self-map description does not display this theorem directly.

**nLab:** [shift](https://ncatlab.org/nlab/show/shift), [category of presheaves](https://ncatlab.org/nlab/show/category+of+presheaves). It says: “Since any category of the form PSh(C) is a topos, such a category is often called a presheaf topos.”

**Sources:** none listed. No primary source with a working link was found.

### Étale topoi defined as slices make lifts correspond to global elements

**Remember:** A lift to the slice selects a global element.

*True by definition. Confidence: medium.* MSC 18B25 (Topoi), 18F10. arXiv math.CT. Level 3: graduate.

**Definition.** For an object A of a topos E, the slice E/A has maps B → A as objects and commuting triangles as arrows. Define the étale topos over A as this slice, with its projection to E. Over a space X, A matches a local homeomorphism Y → X, which is a homeomorphism near each point. The slice then matches sheaves on Y.

**Problem.** For a geometric morphism f : F → E, lifts of f through E/A → E correspond to global elements 1 → f\*A.

**How the definition helps.** The slice is built from E alone, so a lift can be described through f\* (our own). A lift g gives a global element by applying g\* to the diagonal section of A × A → A (our own). Conversely, a global element s gives the lift sending B → A to the pullback of f\*B → f\*A along s (our own). The work moves to proving that the slice is a topos and that it matches sheaves on the local homeomorphism (our own).

**nLab:** [over-topos](https://ncatlab.org/nlab/show/over-topos), [étale geometric morphism](https://ncatlab.org/nlab/show/%C3%A9tale+geometric+morphism). It says: “factors as an equivalence followed by a projection out of an overcategory topos.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Free join lattices turn union-preserving maps into relations

**Remember:** A union-preserving map is determined by what it does to singletons.

*True by definition.* MSC 18B35 (Preorders, orders, domains and lattices (viewed as categories)), 03E20. arXiv math.CT, math.CO. Level 3: graduate.

**Definition.** A lattice with all joins has a least upper bound for every subset. The power set of X is free on X among such lattices. This means each assignment of lattice elements to points of X extends uniquely to a map preserving all joins.

**Problem.** Union-preserving maps between the power sets of X and Y correspond exactly to relations from X to Y. Composition of these maps corresponds to composition of relations.

**How the definition helps.** Freeness reduces the map to one subset of Y per element of X, which is exactly a relation. Our own formula relates x to y when y belongs to F({x}). Conversely, send a set to the union of the subsets assigned to its members. Composing these maps takes unions in both stages, which gives relation composition (our own check). The work lies in showing that the free description agrees with the direct definition by preservation of arbitrary unions. This follows because every set is a union of singletons.

**nLab:** [suplattice](https://ncatlab.org/nlab/show/suplattice). It says: “The Kleisli category of this monad is equivalent to Rel, the category of sets and relations. Thus the objects of Rel may be thought of as the free suplattices.”

**Sources:** none listed. No primary source with a working link was found.

### Right adjoints make complete lattices self-dual

**Remember:** Reverse the order and replace each join-preserving map by its right adjoint.

*True by definition.* MSC 18B35 (Preorders, orders, domains and lattices (viewed as categories)), 06B23. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A complete lattice has a join and a meet for every subset. In this category, the maps between complete lattices preserve all joins. Equivalently, each map f is a left adjoint, so there is a map g with f(x) ≤ y exactly when x ≤ g(y).

**Problem.** The category of complete lattices and join-preserving maps is isomorphic to its opposite. In that opposite category, every arrow goes in the reverse direction.

**How the definition helps.** The adjoint definition gives a canonical reverse arrow because the right adjoint preserves meets, which become joins when the orders reverse. Right adjoints compose in reverse order and are unique. Applying the rule twice gives back the original lattice and map. The work lies in showing that every join-preserving map f has a right adjoint. Its value at y is the join of all x with f(x) ≤ y.

**nLab:** [suplattice](https://ncatlab.org/nlab/show/suplattice). It says: “(which takes a morphism f: P → Q to gᵒᵖ: Qᵒᵖ → Pᵒᵖ, where g is right adjoint to f) also means that colimits may be formed as appropriate limits”

**Paper or page:** [Completeness and injectivity](https://arxiv.org/abs/2005.05311). It says: “A function f: L ⟶ L′ preserves arbitrary suprema if and only if there exists a function u: L′ ⟶ L such that f ⊣ u.”

**Sources:**

- [Soichiro Fujii, Completeness and injectivity, Proposition 2.2](https://arxiv.org/abs/2005.05311v2)

### Groups contain an identity, so the trivial group is a zero object

**Remember:** From the trivial group, e must go to e, so there is one map.

*True by definition. Confidence: medium.* MSC 18B40 (Groupoids, semigroupoids, semigroups, groups (viewed as categories)), 18A30, 20A05. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** A group contains an identity e, so it is never empty, and every homomorphism sends e to e. An initial object has exactly one arrow to every object, and a terminal object has exactly one arrow from every object. A zero object is both.

**Problem.** The trivial group is a zero object of the category of groups: it is both initial and terminal.

**How the definition helps.** Because a group is never empty and homomorphisms keep the identity, the only map out of {e} sends e to e. The trivial group is terminal, since every element must go to e. Our own remark: in the category of semigroups, a map from the one-element semigroup to S can pick any idempotent of S. So the one-element semigroup is not initial there.

**Paper or page:** [Trivial Group is Initial Object](https://proofwiki.org/wiki/Trivial_Group_is_Initial_Object), [Trivial Group is Terminal Object of Category of Groups](https://proofwiki.org/wiki/Trivial_Group_is_Terminal_Object_of_Category_of_Groups), [Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty). It says: “Let 1 = {e} be the trivial group. Then 1 is an initial object of Grp.”

**Sources:**

- [ProofWiki, Trivial Group is Initial Object](https://proofwiki.org/wiki/Trivial_Group_is_Initial_Object)
- [ProofWiki, Trivial Group is Terminal Object of Category of Groups](https://proofwiki.org/wiki/Trivial_Group_is_Terminal_Object_of_Category_of_Groups)
- [ProofWiki, Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty)

### Commutative theories make homomorphism sets into algebras and give tensor products

**Remember:** In a commutative theory, every operation is itself a homomorphism.

*Makes the theorem clean to state or prove.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18D15, 08A99. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** An algebraic theory is a set of operations and equations, such as the theory of groups. Two operations commute if the following holds for every matrix of elements: apply one operation to each column and then the other to the resulting row, and you get the same result as in the other order. A theory is commutative if all pairs of its operations commute. Equivalently, every operation is a homomorphism of algebras.

**Problem.** For a commutative algebraic theory, the set Hom(A, B) of homomorphisms between algebras is again an algebra. The category of algebras is closed symmetric monoidal, with Hom(A ⊗ B, C) ≅ Hom(A, Hom(B, C)), as for abelian groups.

**How the definition helps.** Commutativity makes pointwise operations on homomorphisms give homomorphisms again. So Hom(A, B) is an algebra, and maps that are homomorphisms in each variable separately define the tensor product. In monad terms, the condition is that the two natural maps T A × T B → T(A × B) agree, which makes a commutative monad. The nLab warns that the operations of a commutative theory need not be symmetric in their arguments.

**nLab:** [commutative algebraic theory](https://ncatlab.org/nlab/show/commutative+algebraic+theory). It says: “We discuss that the category of algebras for an algebraic theory over a commutative algebraic theory is canonically a closed symmetric monoidal category (Keigher 78, Seal 12).”

**Sources:**

- [Anders Kock, Monads on symmetric monoidal closed categories, Archiv der Mathematik 21 (1970) 1–10](https://doi.org/10.1007/BF01220868)
- [William Keigher, Symmetric monoidal closed categories generated by commutative adjoint monads, Cahiers de Topologie et Géométrie Différentielle Catégoriques 19 (1978) 269–293](http://www.numdam.org/item/?id=CTGDC_1978__19_3_269_0)

### Isomorphic Lawvere theories give isomorphic categories of algebras

**Remember:** An isomorphism of theories transports the functors that define algebras.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 08B05. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A Lawvere theory is a category whose objects are finite powers of one chosen object x. Maps from xⁿ to x are operations on n inputs, with equal expressions already identified. An algebra is a functor to sets that preserves finite products, and a homomorphism is a natural transformation between these functors. The usual presentation instead lists operations and equations.

**Problem.** An isomorphism of Lawvere theories induces an isomorphism of their categories of algebras that preserves underlying sets. For example, Higman and Neumann presented groups using the single operation of right division and one equation.

**How the definition helps.** Defining algebras as functors lets us transport them by composition with the isomorphism of theories. Composition with its inverse reverses this, including on natural transformations, which are compatible families of maps. The underlying sets stay the same because the isomorphism preserves the chosen object. The work moves into proving that the two presentations give isomorphic theories. In the group example, the single equation for right division must suffice to recover the group laws.

**nLab:** [clone](https://ncatlab.org/nlab/show/clone). It says: “Abstract clones are equivalent to Lawvere theories, and also to finitary monads. These are all different ways of giving presentation-invariant descriptions of single-sorted algebraic theories.”

**Wikipedia:** [Clone (algebra)](https://en.wikipedia.org/wiki/Clone_%28algebra%29), [Lawvere theory](https://en.wikipedia.org/wiki/Lawvere_theory). It says: “A model of a Lawvere theory in a category C with finite products is a finite-product preserving functor M: L → C.”

**Sources:**

- [G. Higman and B. H. Neumann, Groups as groupoids with one law, Publicationes Mathematicae Debrecen 2 (1952)](https://doi.org/10.5486/pmd.1952.2.3-4.10)

### Lawvere theories define group objects in every category at once

**Remember:** A theory is the category of all its derived operations; a model preserves products.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18C40. arXiv math.CT. Level 3: graduate.

**Definition.** A Lawvere theory is a category T with finite products in which every object is a finite power xⁿ of one generic object x. You can think of the maps xⁿ → x as the n-ary operations of the theory. A model of T in a category C with finite products is a functor T → C that preserves products.

**Problem.** A group object in a category C with finite products is a product-preserving functor from the Lawvere theory of groups to C. In Set, Top and smooth manifolds these are the groups, topological groups and Lie groups. The theory, and so the definition, does not depend on a chosen presentation.

**How the definition helps.** The theory of groups contains all derived operations at once, so two presentations of the same structure give the same Lawvere theory. So one definition, a product-preserving functor, covers models in every category. Statements about all such models become statements about functors. The correspondence between Lawvere theories and finitary monads on Set is a separate theorem.

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “For example, a topological group may be identified with a functor”

**Sources:**

- [F. William Lawvere, Functorial semantics of algebraic theories, PhD thesis, Columbia University (1963); Reprints in Theory and Applications of Categories 5 (2004) 1–121](http://tac.mta.ca/tac/reprints/articles/5/tr5abs.html)

### Lawvere theory functors give free algebras on finitely many generators

**Remember:** Maps from the functor T(n, −) to an algebra amount to choosing n elements.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 08B20. arXiv math.CT. Level 3: graduate.

**Definition.** A Lawvere theory T is a category whose object n is the n-fold product of a chosen object 1. Its maps n → 1 are operations on n inputs. An algebra is a functor T → Set that preserves finite products. The usual free algebra construction starts with expressions in generators and identifies those equal by the theory's equations.

**Problem.** The free T-algebra on n generators is the functor T(n, −), which sends m to the set of maps n → m. An assignment of the n generators into any T-algebra extends uniquely to a homomorphism.

**How the definition helps.** The functor definition lets Yoneda supply the free algebra's unique extension property. The functor T(n, −) preserves products because a map into a product amounts to a tuple of maps. The Yoneda lemma identifies compatible families of maps from T(n, −) to an algebra A with elements of A(n). Since A preserves products, those elements are tuples of n elements of A(1). The work moves into matching functor models with the usual algebras given by operations and equations.

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “For S = (n) ∈ FinSet a finite set with n elements , the free T-algebra on S is just the representable”

**Sources:** none listed. No primary source with a working link was found.

### Lawvere theory models restrict by composing functors

**Remember:** To restrict a model, compose it with the map of theories.

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A Lawvere theory is a category whose objects are finite powers of one chosen object and whose maps encode operations. A model is a functor from the theory to sets that preserves finite products. A map of theories is a functor that preserves the chosen object and its products. It interprets the operations of the first theory in the second.

**Problem.** A map f from a Lawvere theory T₁ to T₂ gives a functor from T₂-models to T₁-models. This includes forgetting the inverse operation of a group to get a monoid.

**How the definition helps.** Defining models as functors makes restriction just composition with f, and composition preserves the product condition. A homomorphism is a compatible family of maps between models, so it also restricts along f. The usual operations-and-equations description must instead check that each interpreted operation satisfies the required equations. The work moves into constructing f from the interpretation and proving that functor models agree with those given by operations and equations.

**nLab:** [Lawvere theory](https://ncatlab.org/nlab/show/Lawvere+theory). It says: “Let T₁ and T₂ be Lawvere theories and f: T₁ → T₂ a morphism. Write f\*: T₂ Alg → T₁ Alg for the functor on categories of algebras induced by precomposition with f.”

**Sources:** none listed. No primary source with a working link was found.

### Defining idempotent monads by equal unit insertions makes algebras fixed points

**Remember:** The only possible algebra action undoes the unit.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A monad T has a unit η : X → T X and a multiplication T T X → T X. It is idempotent when the multiplication is invertible. An equivalent definition says that the two maps T η and η T from T X to T T X are equal. An algebra is an object X with an action a : T X → X such that a ∘ η = 1 and a respects the multiplication.

**Problem.** For an idempotent monad, an object X has an algebra structure exactly when its unit η : X → T X is invertible. Then the only action is the inverse of η.

**How the definition helps.** With the equal-insertions definition, any action is forced to be the inverse of the unit. Given an action a, naturality of η gives η ∘ a = T a ∘ η (our own). The definition replaces that η by T η, so η ∘ a = T(a ∘ η) = 1 (our own). Together with a ∘ η = 1, the action a is a two-sided inverse of η (our own). The nLab lists this property: every algebra is a fixed point. The work goes into proving that the two definitions of idempotent agree, and that the inverse of η is an action (our own).

**nLab:** [idempotent monad](https://ncatlab.org/nlab/show/idempotent+monad). It says: “every algebra is a fixed point”

**Sources:** none listed. No primary source with a working link was found.

### Defining monoids as list algebras makes general associativity hold by definition

**Remember:** Every bracketing is a way to cut one list into blocks.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A list algebra is a set M with a map a from finite lists in M to M. It must send each one-element list \[x\] to x. It must give the same result on a flattened list of lists as on the list of results of the blocks. The usual definition of a monoid uses an associative binary product and an identity element.

**Problem.** In a list algebra, the product xy = a\[x, y\] is associative, with identity a\[ \]. More generally, every bracketing of a product of n elements gives the same result.

**How the definition helps.** With list algebras, a bracketing cuts one list into blocks, and the flattening law says the cuts do not matter (our own). For three elements, both (xy)z and x(yz) equal a\[x, y, z\] (our own). An empty block gives the identity laws by the same rule (our own). From an associative binary product, general associativity needs a proof by induction on n (our own). The work goes into the converse, that an ordinary monoid gives a list algebra, which is that same induction (our own). The nLab states that algebras for the list monad are exactly monoids.

**nLab:** [list monad](https://ncatlab.org/nlab/show/list+monad). It says: “The Eilenberg-Moore category of modules over the list monad is the category of monoids Mon:”

**Sources:** none listed. No primary source with a working link was found.

### Defining the state monad by currying makes its sequencing laws automatic

**Remember:** Every adjunction gives a monad, so state inherits the monad laws.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 68N18. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** Fix a type W of stores. Currying gives a natural correspondence between functions W × X → Y and functions X → (W → Y), and this correspondence is an adjunction. Define the state monad as the monad that this adjunction gives, with T(X) = W → W × X. The direct definition writes out the unit and the store-passing composition by hand.

**Problem.** Sequencing of store-passing computations is associative and has a two-sided identity.

**How the definition helps.** Every adjunction gives a monad, so the laws hold with no calculation on store functions. The nLab states that the state monad is induced by the currying adjunction. Our own remark puts the remaining work in one check. The monad's composition must pass the final store of the first computation to the second. The direct proof instead expands three nested store functions.

**nLab:** [state monad](https://ncatlab.org/nlab/show/state+monad). It says: “Here the operation \[W, W × (-)\] is the monad on the type system which is induced by the above adjunction”

**Sources:**

- [Eugenio Moggi, Notions of Computation and Monads](https://www.cs.cmu.edu/~crary/819-f09/Moggi91.pdf)

### Distributive laws give exactly the structure needed to compose two monads

**Remember:** To multiply T S T S, swap the middle S T first.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C20. arXiv math.CT. Level 3: graduate.

**Definition.** A distributive law of a monad S over a monad T is a natural transformation λ : S T → T S. It must satisfy axioms that make the composite T S a monad. The model example is the law a(b + c) = ab + ac. This law composes the monoid monad with the abelian group monad.

**Problem.** Beck's theorem says that distributive laws S T → T S correspond to liftings of T to the category of S-algebras. A lifting is a monad on S-algebras that becomes T when you forget the S-algebra structure. For example, the abelian group monad lifts to a monad on monoids, and the algebras of this lifted monad are rings.

**How the definition helps.** The definition asks for exactly the one map that the composition needs. A composite monad T S needs a multiplication T S T S → T S, and the only way to use the two given multiplications is to swap the middle S T into T S first. With this swap, 'rings are to monoids as abelian groups are to sets' becomes a theorem about lifting monads. Our own remark: the composite need not keep all properties, since the commutative ring monad is not a commutative monad although its two parts are.

**nLab:** [distributive law](https://ncatlab.org/nlab/show/distributive+law). It says: “Such a transformation λ: S T → T S, satisfying suitable axioms to make T S into a monad, is called a distributive law, because of the motivating example relating addition to multiplication in a ring.”

**Sources:**

- [Jon Beck, Distributive laws, in: Seminar on Triples and Categorical Homology Theory, Lecture Notes in Mathematics 80, Springer (1969); reprinted in Reprints in Theory and Applications of Categories 18 (2008)](https://doi.org/10.1007/BFb0083084)

### Strong monads interpret sequencing in a context

**Remember:** The strength lets the context ride along into the computation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18D25, 18C50. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** A monad T is an endofunctor with a unit X → T(X) and a multiplication T(T(X)) → T(X) that obey associativity and unit laws; in programming, T(X) stands for computations that return a value in X. A strong monad on a monoidal category is a monad T with a natural map X ⊗ T(Y) → T(X ⊗ Y), called the strength. The strength must be compatible with the unit and the multiplication of T.

**Problem.** A family of binding operations that interprets Moggi's rule 'let x = t in u' in every context Γ, where u may use the variables of Γ, is the same thing as a strong monad.

**How the definition helps.** Binding needs a map that carries the context into a computation, and the strength is exactly that map. To bind x in a term that also depends on Γ, you must turn a value of Γ and a computation of X into a computation of Γ ⊗ X. A plain monad does not give this map. On Set every monad is strong, so the condition only shows in other categories.

**nLab:** [strong monad](https://ncatlab.org/nlab/show/strong+monad). It says: “Such a structure is the same thing as a strong monad.”

**Sources:**

- [Eugenio Moggi, Notions of computation and monads, Information and Computation 93 (1991) 55–92](https://doi.org/10.1016/0890-5401(91)90052-4)
- [Anders Kock, Strong functors and monoidal monads, Archiv der Mathematik 23 (1972) 113–120](https://doi.org/10.1007/BF01304852)

### Defining Kleisli arrows as free-algebra maps makes their composition associative

**Remember:** Kleisli arrows compose as ordinary maps between free algebras.

*True by definition.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 68Q55. arXiv math.CT, cs.PL. Level 3: graduate.

**Definition.** A monad T assigns to each type X a type T(X) of computations that return values in X. A free T-algebra is T(X) together with the map that flattens T(T(X)) to T(X). Define a Kleisli arrow from X to Y as a map of algebras from T(X) to T(Y). The usual definition uses a function X → T(Y) and a separate formula for composing such functions.

**Problem.** Composition of effectful functions X → T(Y) is associative and has the unit of T as its identity.

**How the definition helps.** With this definition, Kleisli composition is ordinary composition of functions, which is always associative. The nLab defines the Kleisli category as the full subcategory of free T-algebras. The work moves to a theorem that the nLab also states. Algebra maps T(X) → T(Y) correspond exactly to functions X → T(Y). Our own remark is that this correspondence turns ordinary composition into the usual composition formula.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “The Kleisli category Cₜ of the monad T is the full subcategory of the Eilenberg-Moore category Cᵀ on the free T-algebras.”

**Sources:**

- [Eugenio Moggi, Notions of Computation and Monads](https://www.cs.cmu.edu/~crary/819-f09/Moggi91.pdf)

### Defining monads by Kleisli triples makes Kleisli composition associative

**Remember:** Extend after composing, or compose the extensions.

*True by definition.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18C15. arXiv math.CT, cs.LO. Level 3: graduate.

**Definition.** A monad is usually a functor T with a unit X → T X and a multiplication μ : T T X → T X. A Kleisli triple gives instead the unit and an extension rule. The rule sends each map f : X → T Y to a map f♯ : T X → T Y. One of its three laws says (g♯ ∘ f)♯ = g♯ ∘ f♯.

**Problem.** Kleisli composition puts f : X → T Y and g : Y → T Z together as g♯ ∘ f. This composition is associative. Kleisli arrows model computations with side effects in programming.

**How the definition helps.** With the Kleisli triple, associativity is one law plus associativity of ordinary composition. The two ways to compose h after g after f are h♯ ∘ (g♯ ∘ f) and (h♯ ∘ g)♯ ∘ f (our own). The third law turns (h♯ ∘ g)♯ into h♯ ∘ g♯, so the two agree (our own). Wikipedia says that associativity follows trivially from the three laws. With the multiplication, one needs naturality and the associativity law of the monad (our own). The work goes into the theorem that the two definitions of a monad agree, with f♯ = μ ∘ T f.

**Wikipedia:** [Kleisli category](https://en.wikipedia.org/wiki/Kleisli_category). It says: “It follows trivially from these properties that Kleisli composition is associative”

**Sources:**

- [Heinrich Kleisli, Every standard construction is induced by a pair of adjoint functors, Proceedings of the American Mathematical Society 16 (1965), 544–546](https://doi.org/10.1090/S0002-9939-1965-0177024-4)

### Kleisli maps into T Y make the Kleisli adjunction initial among realizations

**Remember:** Every realization receives the free maps.

*True by definition. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads). arXiv math.CT. Level 3: graduate.

**Definition.** A realization of a monad T is an adjunction, with L left adjoint to R, whose composite R L is T. A Kleisli map X → Y is a map X → T Y, composed by using the multiplication of T. An alternative takes the full subcategory of free algebras for T.

**Problem.** The Kleisli realization is initial among all realizations of T. So each realization receives exactly one comparison functor from it that respects the adjunctions.

**How the definition helps.** With this definition, the comparison functor has no choices left. It must send X to L X (our own). A Kleisli map X → T Y is a map X → R L Y, so it matches a map L X → L Y (our own). The comparison must use that map (our own). With free algebras, one must first match algebra maps T X → T Y with maps X → T Y (our own). The work goes into checking that the comparison respects Kleisli composition (our own). The nLab states the result and cites Riehl, Category Theory in Context, Proposition 5.2.12.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “initial in the category of adjunctions for T”

**Sources:** none listed. No primary source with a working link was found.

### Kleisli maps into T Y show every monad comes from an adjunction

**Remember:** The two sets of maps are the same set.

*True by definition. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A monad T on C is a functor with a unit X → T X and a multiplication T T X → T X. The Kleisli category has the same objects as C. A map X → Y in it is a map X → T Y in C. An alternative uses the category of free algebras for T.

**Problem.** Every monad T arises from an adjunction between C and its Kleisli category. The left adjoint is the identity on objects, and the right adjoint sends Y to T Y.

**How the definition helps.** With this definition, the bijection of the adjunction is the identity map on sets of maps. Kleisli maps X → Y are by definition maps X → T Y in C (our own). These are exactly the maps from X to the right adjoint applied to Y (our own). The work goes into showing that both functors respect composition, and that the adjunction gives back T (our own). Kleisli proved this theorem in 1965.

**nLab:** [Kleisli category](https://ncatlab.org/nlab/show/Kleisli+category). It says: “Each Kleisli category comes with an adjunction”

**Sources:**

- [Heinrich Kleisli, Every standard construction is induced by a pair of adjoint functors, Proceedings of the American Mathematical Society 16 (1965), 544–546](https://doi.org/10.1090/S0002-9939-1965-0177024-4)

### Locally presentable categories make the adjoint functor theorem clean

**Remember:** Locally presentable means generated under colimits by a small set of small objects.

*Makes the theorem clean to state or prove.* MSC 18C35 (Accessible and locally presentable categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A category is locally presentable if it is locally small and cocomplete, and every object is a λ-filtered colimit of objects from a small set of λ-presentable objects, for some regular cardinal λ. An object is λ-presentable when maps out of it commute with λ-filtered colimits. Examples are Set, Group and every presheaf category.

**Problem.** Let F be a functor between locally presentable categories. Then F has a right adjoint if and only if it preserves small colimits. It has a left adjoint if and only if it is accessible and preserves small limits.

**How the definition helps.** Between locally presentable categories, the solution set condition of Freyd's theorem disappears. Accessible means that F preserves λ-filtered colimits for some regular cardinal λ, and it is still needed for left adjoints. Mac Lane's example is the product of Hom(G(κ), −) : Group → Set over all infinite cardinals κ, with G(κ) a simple group of size κ; it preserves limits but has no left adjoint. The remaining work is in two theorems of Adámek and Rosický: accessible functors satisfy the solution set condition, and locally presentable categories are co-wellpowered.

**nLab:** [adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem), [locally presentable category](https://ncatlab.org/nlab/show/locally+presentable+category). It says: “indicating the need for something more than just continuity to force a functor between locally presentable categories to be a right adjoint”

**Sources:**

- [Jiří Adámek, Jiří Rosický, Locally presentable and accessible categories, London Mathematical Society Lecture Note Series 189, Cambridge University Press (1994)](https://doi.org/10.1017/CBO9780511600579)

### Defining folds by initiality gives the fusion law for free

**Remember:** A fold is the only algebra map out of the initial algebra.

*True by definition. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 18A40, 68N18. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** An F-algebra is an object A with a map φ : F A → A, and the initial algebra (μF, in) has exactly one algebra homomorphism to every F-algebra. For an endofunctor F with an initial algebra, the catamorphism (fold) of an F-algebra φ is this unique algebra homomorphism cata φ : μF → A.

**Problem.** Fusion law: if h : A → B is an algebra map from φ to ψ, then h ∘ cata φ = cata ψ.

**How the definition helps.** Uniqueness of maps out of the initial algebra proves the fusion law in one line. The composite h ∘ cata φ is an algebra map from the initial algebra to ψ. There is only one such map, cata ψ, so the two are equal. This is our own reading of the commuting diagram that the nLab gives in place of a proof. Defining recursion by initiality also makes every fold a total, well-defined function, unlike an unrestricted fixed-point operator (our own remark).

**nLab:** [catamorphism](https://ncatlab.org/nlab/show/catamorphism), [recursion scheme](https://ncatlab.org/nlab/show/recursion+scheme). It says: “In category theoretic terms, this is simply the unique homomorphism out of an initial algebra.”

**Sources:**

- [Erik Meijer, Maarten Fokkinga, Ross Paterson, Functional programming with bananas, lenses, envelopes and barbed wire, FPCA 1991, LNCS 523](https://doi.org/10.1007/3540543961_7)

### Parametrized natural numbers objects give primitive recursion without exponentials

**Remember:** Recursion must be allowed to carry extra inputs along.

*Makes the theorem clean to state or prove.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 03G30. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** Work in a category with finite products. A parametrized natural numbers object is an object N with maps z : 1 → N (zero) and s : N → N (successor), such that for all maps f : A → X and g : X → X there is exactly one φ : A × N → X with φ(a, 0) = f(a) and φ(a, n + 1) = g(φ(a, n)). In words, φ starts at f(a) and applies g once for each step. The plain definition is the case A = 1.

**Problem.** With a parametrized natural numbers object, addition and multiplication are definable by recursion. In the free category with finite products and such an object, the maps Nᵐ → N give exactly the primitive recursive functions of m arguments (Román 1989).

**How the definition helps.** Putting the parameter A into the definition makes recursion with extra inputs available without exponentials. In a cartesian closed category, the parameter version follows from the plain one by currying, which turns a map A × N → X into a map N → Xᴬ. Without exponentials it does not, so the nLab says to build parameters into the definition. With cartesian closure, more functions become definable, for example the Ackermann function.

**nLab:** [natural numbers object](https://ncatlab.org/nlab/show/natural+numbers+object). It says: “if E is not cartesian closed, then it is better to explicitly assume a stronger version of this definition "with parameters" (which follows automatically when E is cartesian closed, such as when E is a topos).”

**Sources:**

- [Leopoldo Román, Cartesian categories with natural numbers object, Journal of Pure and Applied Algebra 58 (1989) 267–278](https://doi.org/10.1016/0022-4049(89)90042-X)

### Hyperdoctrines define the quantifiers as adjoints to substitution

**Remember:** ∃ is left adjoint to substitution and ∀ is right adjoint to it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C50 (Categorical semantics of formal languages), 18D30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A hyperdoctrine assigns to each context A (roughly, a list of typed variables) a category, or a poset, P(A) of propositions or types. It assigns to each map f a substitution functor P(f). The existential and universal quantifiers along f are the left and right adjoints of P(f). They must satisfy two conditions, Frobenius reciprocity and the Beck–Chevalley condition.

**Problem.** In a hyperdoctrine, the rules for ∃ and ∀ are sound, because they are the adjunctions ∃<sub>f</sub> ⊣ P(f) ⊣ ∀<sub>f</sub>. The Beck–Chevalley condition makes quantification commute with substitution of variables.

**How the definition helps.** Adjointness fixes the quantifiers by a universal property, so one definition covers every model. In syntax, commuting with substitution is automatic, and the Beck–Chevalley condition is exactly this requirement in a model. So to check that the quantifier rules are sound in a model, you check these adjunction conditions. Lawvere also treats equality and comprehension in this adjoint style.

**nLab:** [hyperdoctrine](https://ncatlab.org/nlab/show/hyperdoctrine), [Beck-Chevalley condition](https://ncatlab.org/nlab/show/Beck-Chevalley+condition). It says: “The Beck-Chevalley condition ensures that quantification interacts with substitution of variables as expected”

**Sources:**

- [F. William Lawvere, Adjointness in Foundations, Dialectica 23 (1969); Reprints in Theory and Applications of Categories 16 (2006) 1–16](http://tac.mta.ca/tac/reprints/articles/16/tr16abs.html)
- [Robert A. G. Seely, Hyperdoctrines, Natural Deduction and the Beck Condition, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 29 (1983) 505–542](https://www.math.mcgill.ca/seely/ZML/ZML.PDF)

### Reflexive objects validate beta reduction by undoing function encoding

**Remember:** Decode an encoded function and get the same function back.

*True by definition. Confidence: medium.* MSC 18C50 (Categorical semantics of formal languages), 03B40. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** A cartesian closed category has products and function objects Uᵁ, which represent maps from U to U. A reflexive object U has an encoding ℓ from Uᵁ to U and a decoding a from U to Uᵁ. It requires a ∘ ℓ to be the identity on Uᵁ. Lambda abstraction uses ℓ, and application uses a before evaluating the function.

**Problem.** A reflexive object gives an interpretation of untyped lambda calculus that respects beta reduction. This rule replaces a function application by the body with its input substituted for the parameter.

**How the definition helps.** The decoding equation makes applying an encoded function the same as applying the original function. The substitution lemma then identifies the result with the meaning of the body after substitution (our own). Without the equation, arbitrary encoding and decoding maps could change the function before it is applied (our own). The work moves into the substitution lemma and the construction of a nontrivial object with the required maps (our own). Ordinary sets offer no such nontrivial object, but categories of domains, which model partial information, do.

**nLab:** [lambda-calculus](https://ncatlab.org/nlab/show/lambda-calculus). It says: “such that a ∘ ℓ = 1 (to validate the β equation).”

**Sources:** none listed. No primary source with a working link was found.

### Defining exponentials by currying makes exponentiable objects closed under products

**Remember:** Two extra inputs can travel as one pair.

*True by definition.* MSC 18D15 (Closed categories (closed monoidal and Cartesian closed categories, etc.)), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** An exponential Yᴬ is an object with a natural bijection between maps X × A → Y and maps X → Yᴬ. This is the currying rule for functions of two inputs. The other approach builds a concrete space of functions, such as the compact-open topology on continuous maps.

**Problem.** Suppose that exponentials by A and by B exist for every object. Then exponentials by A × B exist too, and Y to the power A × B is (Yᴬ)ᴮ.

**How the definition helps.** With the currying definition, the proof is three bijections in a row. Maps X × (A × B) → Y match maps (X × B) × A → Y, because products are associative and symmetric (our own). These match maps X × B → Yᴬ, and then maps X → (Yᴬ)ᴮ. The nLab gives this argument. With a concrete function space, each bijection needs its own proof, for example a check of continuity (our own). The work goes into constructing the two exponentials (our own).

**nLab:** [exponential object](https://ncatlab.org/nlab/show/exponential+object). It says: “showing that exponentiable objects are closed under products.”

**Sources:** none listed. No primary source with a working link was found.

### Lawvere's fixed point theorem gives Cantor, Russell and Gödel from one definition

**Remember:** If A names every map A → B, every map B → B has a fixed point.

*Makes the theorem clean to state or prove.* MSC 18D15 (Closed categories (closed monoidal and Cartesian closed categories, etc.)), 18A15, 03F40. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** Work in a cartesian closed category. A global point of an object X is a map 1 → X from the terminal object. A map φ : A → Bᴬ is point-surjective if every global point of Bᴬ is φ of some global point of A.

**Problem.** Lawvere's fixed point theorem: if a point-surjective map φ : A → Bᴬ exists, then every map f : B → B has a fixed point 1 → B. Cantor's theorem, the halting theorem, Tarski's undefinability of truth and Gödel's incompleteness theorem are contrapositives of it, for maps with no fixed point.

**How the definition helps.** With point-surjectivity as the hypothesis, the diagonal argument is a three-line calculation. Lift the map a ↦ f(φ(a)(a)) to a point p with φ(p) equal to it; then φ(p)(p) is a fixed point of f. Epimorphism does not work in place of point-surjectivity: a countable dense map from ℕ into sequences in S¹ is an epimorphism, but a non-trivial rotation of S¹ has no fixed point. For Gödel and Tarski, the work lies in building the category and the point-surjective map from arithmetic.

**nLab:** [Lawvere's fixed point theorem](https://ncatlab.org/nlab/show/Lawvere%27s+fixed+point+theorem). It says: “The statement need not hold if "(weakly) point-surjective" is replaced by "epimorphism".”

**Sources:**

- [F. William Lawvere, Diagonal arguments and cartesian closed categories, Lecture Notes in Mathematics 92 (1969) 134–145; reprinted in Reprints in Theory and Applications of Categories 15 (2006)](http://tac.mta.ca/tac/reprints/articles/15/tr15abs.html)
- [Noson S. Yanofsky, A universal approach to self-referential paradoxes, incompleteness and fixed points, Bulletin of Symbolic Logic 9 (2003) 362–386, arXiv:math/0305282](https://arxiv.org/abs/math/0305282)

### Weighted limits are the right notion of limit for enriched categories

**Remember:** The weight says how many legs, of what shape, each point's cone has.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** Take a category C enriched in V, a diagram F : K → C and a weight W : K → V. The weighted limit is an object L with C(c, L) ≅ \[K, V\](W, C(c, F(−))), naturally in c. In words, maps from c to L correspond to natural transformations from W to C(c, F(−)), which are cones over F whose shape W prescribes. An ordinary (conical) limit is the case where W is constant at the unit object of V.

**Problem.** An enriched category has all weighted limits exactly when it has conical limits and powers (cotensors). Powers, which conical limits cannot express, and Bousfield–Kan homotopy limits are both weighted limits.

**How the definition helps.** Weighted limits let a cone use generalized elements of the hom-objects, while conical limits use only global elements (maps from the unit object). Kelly's book has a section on 'the inadequacy of conical limits'. Completeness under a class of weights cannot always be expressed by a class of diagrams; having powers is not the same as having D-indexed limits for any class D. When V is simplicial sets and the weight is k ↦ N(K/k), the weighted limit of fibrant objects is the Bousfield–Kan homotopy limit.

**nLab:** [weighted limit](https://ncatlab.org/nlab/show/weighted+limit), [conical limit](https://ncatlab.org/nlab/show/conical+limit). It says: “However, it is not true that completeness under a class of weights can always be expressed as completeness under a class of diagrams.”

**Sources:**

- [Francis Borceux, G. M. Kelly, A notion of limit for enriched categories, Bulletin of the Australian Mathematical Society 12 (1975) 49–72](https://doi.org/10.1017/S0004972700023637)
- [G. M. Kelly, Basic Concepts of Enriched Category Theory, LMS Lecture Note Series 64 (1982); Reprints in Theory and Applications of Categories 10 (2005)](http://www.tac.mta.ca/tac/reprints/articles/10/tr10abs.html)

### In Grothendieck fibrations, the coherence of pseudofunctors comes for free

**Remember:** Ask only that pullbacks exist; the universal property picks them and glues them.

*True by definition. Confidence: medium.* MSC 18D30 (Fibered categories), 18N10. arXiv math.CT. Level 3: graduate.

**Definition.** A functor p : E → B is a fibration if every arrow f : a → p(e) in B has a cartesian lift that ends at e. A cartesian lift is a universal lift: other arrows over a factor through it in a unique way. The fibres of p and the pullback functors f\* between them are then fixed up to isomorphism by this universal property.

**Problem.** A fibration with a chosen cartesian lift for each arrow gives a pseudofunctor Bᵒᵖ → Cat, f ↦ f\*, whose coherence isomorphisms (g∘f)\* ≅ f\*∘g\* and id\* ≅ id satisfy the coherence axioms automatically. The Grothendieck construction turns every pseudofunctor into a fibration.

**How the definition helps.** In a fibration, uniqueness in a universal property does the coherence work. The functors f\* are characterized by a universal property, so the comparison isomorphisms are the unique ones it gives, and their axioms hold by uniqueness. The real content is the correspondence between fibrations and pseudofunctors. Once you know it, you can work with fibrations and never write coherence diagrams.

**nLab:** [Grothendieck fibration](https://ncatlab.org/nlab/show/Grothendieck+fibration). It says: “By contrast, pseudofunctors are an "algebraic" structure, since the functors f\* are specified, together with the necessary coherence data and axioms; the latter come for free in a fibration because of the universal property.”

**Sources:**

- [Alexander Grothendieck, Revêtements étales et groupe fondamental (SGA 1), exposé VI, LNM 224 (1971), arXiv:math/0206203](https://arxiv.org/abs/math/0206203)
- [Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (2004), arXiv:math/0412512](https://arxiv.org/abs/math/0412512)

### Defining a functor by a representation gives its action on morphisms for free

**Remember:** Say what maps into F(c) are, and F already knows its action on morphisms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D60 (Profunctors (= correspondences, distributors, modules)), 18A05, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A right functor presentation from C to D has a profunctor R (a functor of d in D and c in C to sets), an object map F₀, and two more pieces. An 'introduction rule' ι : R(d, c) → D(d, F₀c) is natural in d. For each c, a 'universal morphism' ε in R(F₀c, c) inverts ι. Only naturality in D is required.

**Problem.** Such presentations are in bijection with functors F : C → D that come with a natural isomorphism R(d, c) ≅ D(d, F c). The action of F on morphisms and its functoriality follow automatically.

**How the definition helps.** The Yoneda lemma forces the action on morphisms, so you do not have to give it. By that lemma, the representation isomorphism is fixed by its value on identities. So F(f) must be ι applied to R(id, f)(ε). Functoriality and full naturality then follow from the equations of the presentation. This is why you may define functors such as the product × by a universal property without checking functoriality. In type theory, it explains why introduction and elimination rules with β and η are enough to define a type former.

**nLab:** [representability determines functoriality](https://ncatlab.org/nlab/show/representability+determines+functoriality). It says: “Since the action of the functor on morphisms is determined by the data of a representation of a profunctor, we can even define the functor by giving that data.”

**Sources:**

- [Ross Street, The core of adjoint functors, 2011, arXiv:1112.0094 (a related result for adjoint functors, as the page says)](https://arxiv.org/abs/1112.0094)

### In semiadditive categories, biproducts give addition of morphisms for free

**Remember:** When sums and products agree, add arrows by copying, acting and merging.

*True by definition.* MSC 18E05 (Preadditive, additive categories), 18A30. arXiv math.CT. Level 3: graduate.

**Definition.** A category is semiadditive if it has a zero object and finite products and coproducts, and the canonical map from a ⊔ b to a × b is an isomorphism. Here ⊔ is the coproduct and × is the product. The object is then called a biproduct and written a ⊕ b.

**Problem.** A semiadditive category is enriched in commutative monoids: each hom-set has an addition that composition respects. So an additive category is a semiadditive category with a property (negatives exist), not with extra structure.

**How the definition helps.** The biproduct lets you copy, act and merge, and this gives an addition on morphisms that is already there. Define f + g : a → b as a → a ⊕ a → b ⊕ b → b: copy with the diagonal, apply f and g side by side, and merge with the codiagonal. The zero morphism is the unit, and the monoid axioms are short diagram checks. Lack adds that any natural isomorphism from coproducts to products already forces the canonical map to be invertible.

**nLab:** [biproduct](https://ncatlab.org/nlab/show/biproduct). It says: “A semiadditive category is automatically enriched over the monoidal category of commutative monoids with the usual tensor product, as follows.”

**Sources:**

- [Stephen Lack, Non-canonical isomorphisms, Journal of Pure and Applied Algebra 216 (2012) 593–597, arXiv:0912.2126](https://arxiv.org/abs/0912.2126)

### Compactly generated Hausdorff spaces form a regular category

**Remember:** Regular means images exist and quotients stay quotients under pullback.

*Rules out counterexamples. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 54D50, 18F60. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A regular category is a category with finite limits and coequalizers of kernel pairs, in which regular epimorphisms are stable under pullback. In spaces, the regular epimorphisms are the quotient maps. A compactly generated (Kelley) space is a space whose topology is determined by the maps into it from compact Hausdorff spaces.

**Problem.** The category of compactly generated Hausdorff spaces is regular, so quotient maps in it are stable under pullback. Top is not regular.

**How the definition helps.** Restricting to compactly generated Hausdorff spaces removes the quotient maps of Top that fail to pull back to quotient maps. The nLab shows the failure in Top with finite posets, viewed as finite spaces: a quotient map pulls back along an inclusion to an epimorphism that is not regular. Compactly generated weakly Hausdorff spaces are also regular (Cagliari, Mantovani and Vitale). The category of Hausdorff Kelley spaces is still not exact and not locally cartesian closed.

**nLab:** [regular category](https://ncatlab.org/nlab/show/regular+category). It says: “this example serves to show also that the category Top of all topological spaces is not regular.”

**Sources:**

- [F. Cagliari, S. Mantovani, E. Vitale, Regularity of the category of Kelley spaces, Applied Categorical Structures 3 (1995) 357–361](https://doi.org/10.1007/BF00872904)

### Regular categories have the images that make relations compose

**Remember:** Regular means images exist and survive pullback.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18B10. arXiv math.CT. Level 3: graduate.

**Definition.** A regular category is a category with finite limits in which kernel pairs have coequalizers and regular epimorphisms are stable under pullback. (The kernel pair of f is the pullback of f along itself. A regular epimorphism is a morphism that is the coequalizer of some pair of maps.) Then every morphism factors as a regular epimorphism followed by a monomorphism. This factorization is the image factorization, and it is stable under pullback.

**Problem.** In a regular category, relations (subobjects of c × d) compose by taking the image of the pullback span, and this composition is associative. So relations form an allegory, as they do in Set.

**How the definition helps.** Composing relations needs images, and regularity supplies images that are stable under pullback. The composite of r ⊆ c × d and s ⊆ d × e is the image of the map from the pullback of r and s over d to c × e. Associativity needs images to be stable under pullback (our own reading of the standard argument). Top, Pos and Cat are not regular; the nLab gives a regular epimorphism in Pos whose pullback is not regular.

**nLab:** [Rel](https://ncatlab.org/nlab/show/Rel), [regular category](https://ncatlab.org/nlab/show/regular+category). It says: “the axioms of a regular category ensure that Rel(C) is a 2-category with desirable properties.”

**Sources:**

- [Peter J. Freyd, Andre Scedrov, Categories, Allegories, North-Holland Mathematical Library 39 (1990), chapter 2: Allegories](https://doi.org/10.1016/s0924-6509(08)70049-7)

### A zero object is not simple, so Schur's lemma has no exception

**Remember:** A simple object has exactly two quotients; the zero object has only one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16D60. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** An object X is simple if it has exactly two quotient objects: X itself and the terminal object. In an abelian category, it is simple if it has exactly two subobjects. A zero object has only one, so it is not simple.

**Problem.** Schur's lemma has two parts. In an abelian category, each morphism between simple objects is zero or an isomorphism. And the endomorphism ring of a simple object is a division ring.

**How the definition helps.** Excluding the zero object removes the one case where Schur's lemma would fail. The endomorphism ring of a zero object is the trivial ring, and the trivial ring is not a division ring. So if a zero object counted as simple, the second half of Schur's lemma would need an exception. The nLab page 'too simple to be simple' states the general principle: classification theorems work better when the trivial object is not simple. The link to Schur's lemma in particular is our reading, not an nLab sentence. The proof of Schur's lemma itself is short: the kernel and the cokernel of a map between simple objects are each 0 or everything.

**nLab:** [simple object](https://ncatlab.org/nlab/show/simple+object), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple). It says: “The terminal object itself is \*not\* simple, as it has only \*one\* quotient object. It is too simple to be simple.”

**Sources:** none listed. No primary source with a working link was found.

### Abelian categories and the embedding theorem justify element chases

**Remember:** In an abelian category, you may chase elements as if the objects were modules.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18E20. arXiv math.CT. Level 3: graduate.

**Definition.** An abelian category is an additive category with all kernels and cokernels, with one more condition. Every monomorphism is the kernel of its cokernel, and every epimorphism is the cokernel of its kernel. Examples are the modules over a ring and the sheaves of abelian groups on a space or a site.

**Problem.** Freyd–Mitchell theorem: every small abelian category has a full, faithful and exact embedding into the modules over some ring. So diagram lemmas such as the five lemma and the snake lemma, proved by chasing elements in modules, hold in every abelian category.

**How the definition helps.** The axioms give exact sequences and homology a meaning, so the diagram lemmas can be stated in this generality. A statement about exactness in a finite diagram lives in a small abelian subcategory. So you can chase elements in modules, and the exact embedding carries the result back. The real content is the embedding theorem, whose proof is long; generalized elements (maps into the object) avoid it.

**nLab:** [Freyd-Mitchell embedding theorem](https://ncatlab.org/nlab/show/Freyd-Mitchell+embedding+theorem), [abelian category](https://ncatlab.org/nlab/show/abelian+category). It says: “This implies for instance that proofs about exactness of sequences in an abelian category can always be obtained by a naive argument on elements -- called a "diagram chase”

**Sources:**

- [Barry Mitchell, The full imbedding theorem, American Journal of Mathematics 86 (1964) 619–637](https://doi.org/10.2307/2373027)
- [Peter Freyd, Abelian categories, Harper and Row (1964); Reprints in Theory and Applications of Categories 3 (2003)](http://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html)
- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### Freyd's free abelian category makes modules the same as exact functors

**Remember:** Evaluate an exact functor at the ring's one object to get the module.

*True by definition. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16D90. arXiv math.RT, math.CT. Level 3: graduate.

**Definition.** View a ring R as an additive category with one object, whose maps are the elements of R. Freyd's free abelian category Ab(R) contains R, and each additive functor from R to abelian groups extends to an exact functor on Ab(R). This extension is unique up to isomorphism, and exact functors preserve short exact sequences. Prest defines a left R-module as an exact functor from Ab(R) to abelian groups.

**Problem.** The new definition agrees with the usual one. Restricting an exact functor to the one object of R gives an equivalence of categories from exact functors on Ab(R) to ordinary left R-modules.

**How the definition helps.** The universal property of Ab(R) says that exact functors on it are fixed by their values on R, so the equivalence follows at once. In our own explanation, an additive functor from R to abelian groups is an abelian group on which R acts, that is, a left module. All the real work is in Freyd's construction of Ab(R) and its universal property, which is a separate theorem. That property must also cover maps between functors, so that restriction is an equivalence.

**Paper or page:** [Modules as exact functors](https://arxiv.org/abs/1801.08015v1). It says: “We can define a module to be an exact functor on a small abelian category. This is explained and shown to be equivalent to the usual definition”

**Sources:**

- [Mike Prest, Modules as exact functors, arXiv:1801.08015 (2018)](https://arxiv.org/abs/1801.08015v1)

### Grothendieck abelian categories have enough injectives

**Remember:** Grothendieck category = abelian + generator + exact filtered colimits.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18G05. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck category is an abelian category with a generator and all small colimits, in which filtered colimits keep exact sequences exact (axiom AB5). A generator is an object G such that maps out of G can tell any two different maps apart. Examples are the R-modules and the sheaves of abelian groups on any site (a category with a notion of covering, such as the open sets of a space).

**Problem.** Every Grothendieck category has enough injectives: each object embeds in an injective object. So derived functors such as sheaf cohomology are defined in the same way for modules and for sheaves of abelian groups on any site.

**How the definition helps.** Grothendieck chose the axioms so that one theorem gives injectives for modules and for sheaves at once. In the Tôhoku paper, he chose AB5 and a generator for this purpose, and both module and sheaf categories satisfy them. Sheaf cohomology then becomes a derived functor of global sections on every space. The proof that a Grothendieck category has an injective cogenerator is still real work.

**nLab:** [Grothendieck category](https://ncatlab.org/nlab/show/Grothendieck+category), [Tôhoku](https://ncatlab.org/nlab/show/T%C3%B4hoku), [additive and abelian categories](https://ncatlab.org/nlab/show/additive+and+abelian+categories). It says: “as well as some additional axioms (including AB5) to abelian categories ensuring existence of sufficiently many injective objects, what is now called a Grothendieck category.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique, I, Tôhoku Mathematical Journal (2) 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)

### In abelian categories, monic and epic maps are isomorphisms

**Remember:** Every monic is a kernel, so monic plus epic means isomorphism.

*Rules out counterexamples.* MSC 18E10 (Abelian categories, Grothendieck categories), 18A20. arXiv math.CT. Level 3: graduate.

**Definition.** A map f is monic if fg = fh implies g = h, and epic if gf = hf implies g = h. An additive category is one where maps can be added, as for abelian groups, with a zero object and finite direct sums. An abelian category is an additive category where every map has a kernel and a cokernel. Also, every monic map is a kernel and every epic map is a cokernel.

**Problem.** In an abelian category, a map is an isomorphism exactly when it is both monic and epic. Many other categories lack this property.

**How the definition helps.** The axiom that every monic map is a kernel does the work. Napkin shows that an epic map has zero cokernel. In our own summary, a monic epic map is then the kernel of a zero map, which is an isomorphism. The axiom excludes the category of torsion-free abelian groups. There, as the nLab says, multiplication by 2 on ℤ is monic and epic but not invertible. In that category the cokernel of this map is zero, so the map is monic but not a kernel (our own). What stays hard is to check the axioms for a given category, such as sheaves of abelian groups (our own).

**nLab:** [balanced category](https://ncatlab.org/nlab/show/balanced+category). It says: “An additive category need not be balanced: A counterexample is the category of torsion subgroup-free abelian groups, each nonzero homomorphism ℤ → ℤ is both monic and epic.”

**Paper or page:** [An Infinitely Large Napkin: Cats: Abelian](https://venhance.github.io/napkin/Napkin.pdf), [An Infinitely Large Napkin: Cats: Abelian](https://venhance.github.io/napkin/Napkin.pdf). It says: “In an abelian category, a map is an isomorphism if and only if it is monic and epic.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Semi-abelian categories give the homological lemmas for groups and Lie algebras

**Remember:** Semi-abelian categories are to groups what abelian categories are to abelian groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E13 (Protomodular categories, semi-abelian categories, Mal'tsev categories), 18G50. arXiv math.CT. Level 3: graduate.

**Definition.** A category is semi-abelian if it is Barr-exact, has a zero object and finite coproducts, and is protomodular. Barr-exact means, roughly, that the category is regular and every equivalence relation is the kernel pair of a map. Protomodular means that the split short five lemma holds. Groups, non-unital rings and Lie algebras are examples.

**Problem.** In every semi-abelian category, the isomorphism theorems, the nine lemma and the snake lemma hold. This covers groups, rings without unit and Lie algebras, which are not abelian categories.

**How the definition helps.** The semi-abelian definition uses a few simple conditions, and the homological lemmas can be proved once from them for all examples. Groups do not form an abelian category, so the usual categorical proofs do not apply. Earlier axiom systems for this were long and hard to check. The work is in the general proofs, which are harder than in the abelian case.

**nLab:** [semi-abelian category](https://ncatlab.org/nlab/show/semi-abelian+category), [Malcev, protomodular, homological and semi-abelian categories](https://ncatlab.org/nlab/show/Malcev%2C+protomodular%2C+homological+and+semi-abelian+categories). It says: “the Nine Lemma, the Snake Lemma, which remain valid and strongly meaningful in the category”

**Sources:**

- [George Janelidze, László Márki, Walter Tholen, Semi-abelian categories, J. Pure Appl. Algebra 168 (2002) 367–386](https://doi.org/10.1016/S0022-4049(01)00103-7)
- [Francis Borceux, Dominique Bourn, Mal'cev, protomodular, homological and semi-abelian categories, Kluwer (2004)](https://doi.org/10.1007/978-1-4020-1962-3)

### A calculus of fractions makes each morphism of a localization one span

**Remember:** With the Ore condition, every fraction is f ∘ w⁻¹ with one denominator.

*Makes the theorem clean to state or prove.* MSC 18E35 (Localization of categories, calculus of fractions). arXiv math.CT. Level 3: graduate.

**Definition.** Let W be a class of morphisms in a category C. W admits a calculus of right fractions if it contains the identities, is closed under composition, satisfies the Ore condition, and satisfies a cancellation condition. The Ore condition says: a map into the target of a W-map can be pulled back along some W-map to make a commuting square. These conditions copy the conditions on a multiplicative set at which one localizes a ring.

**Problem.** If W admits a calculus of right fractions, every morphism of the localization C\[W⁻¹\] from x to z is the class of one span x ← y → z whose left leg is in W. Two such spans compose into one span.

**How the definition helps.** The Ore condition is exactly what lets two spans compose into one span. Without it, a morphism of C\[W⁻¹\] is a class of arbitrary zigzags, which is hard to use. With it, the hom-sets are a colimit of the hom-sets C(y, z) over the W-maps y → x. Even then, the localization need not be locally small; the nLab gives extra conditions under which it is.

**nLab:** [calculus of fractions](https://ncatlab.org/nlab/show/calculus+of+fractions), [category of fractions](https://ncatlab.org/nlab/show/category+of+fractions). It says: “A class W of weak equivalences in a category C is said to admit a calculus of fractions if it satisfies some axioms ensuring that its localization C\[W⁻¹\] can be constructed in a particularly simple way using 'one-step generalized morphisms.'”

**Sources:**

- [Pierre Gabriel, Michel Zisman, Calculus of Fractions and Homotopy Theory, Ergebnisse der Mathematik und ihrer Grenzgebiete 35, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)

### Grothendieck's Galois theory matches étale algebras with all finite G-sets

**Remember:** Replace intermediate fields by all étale algebras, which match all G-sets.

*Makes the theorem clean to state or prove.* MSC 18E50 (Categorical Galois theory), 14F35, 20E18. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A Galois category is a category C with a fiber functor F from C to finite sets, with three properties. C has finite limits and finite colimits. Every map factors as a strict epimorphism followed by the inclusion of a summand. F preserves finite limits and colimits, and reflects isomorphisms.

**Problem.** Every Galois category is equivalent to the category of finite sets with a continuous action of some profinite group G. For a field K, this gives an anti-equivalence between finite étale K-algebras and finite G-sets, with fields matching transitive G-sets.

**How the definition helps.** Grothendieck's form matches all algebras with all G-sets, so objects that are not connected also get a meaning. Classical Galois theory matches intermediate fields with subgroups, which give only the transitive G-sets. The same axioms apply to the finite étale covers of a scheme, and define its étale fundamental group. The real work is to prove that the axioms give a pro-representable fiber functor and an equivalence.

**nLab:** [Grothendieck's Galois theory](https://ncatlab.org/nlab/show/Grothendieck%27s+Galois+theory), [Galois category](https://ncatlab.org/nlab/show/Galois+category), [Galois theory](https://ncatlab.org/nlab/show/Galois+theory). It says: “Even for the classical case of the inclusion of fields, Grothendieck's Galois theorem gives more general statement than the previously known.”

**Sources:**

- [Alexander Grothendieck, Michèle Raynaud, Revêtements étales et groupe fondamental (SGA 1), Lecture Notes in Math. 224, Springer (1971); arXiv:math/0206203](https://arxiv.org/abs/math/0206203)
- [Eduardo J. Dubuc, Constanza Sánchez de la Vega, On the Galois theory of Grothendieck, Bol. Acad. Nac. Cienc. (Córdoba) 65 (2000) 111–136, arXiv:math/0009145](https://arxiv.org/abs/math/0009145)

### Coverages let good open covers form a site without pullback stability

**Remember:** A pulled-back cover need not be a cover; it only needs to contain one.

*Makes the theorem clean to state or prove.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** A coverage on a category gives each object a set of covering families. A covering family of an object U is a set of maps into U. The only axiom is about pullback: take a covering family of U and a map V → U. Then V has some covering family whose maps each factor through some member of the first family.

**Problem.** Differentiably good open covers, whose finite intersections are all diffeomorphic to ℝⁿ, form a coverage on CartSp, the category of spaces ℝⁿ and smooth maps. So smooth sets can be defined as sheaves on CartSp with these covers.

**How the definition helps.** A coverage only asks that a pulled-back cover is refined by a cover, and good covers meet that demand. Good covers are not stable under pullback: pull two overlapping half planes back along t ↦ 2(cos 2πt, sin 2πt), and each set becomes infinitely many disjoint intervals. So they do not form a Grothendieck pretopology, but every open cover has a good refinement, which is a separate theorem. Every coverage has a unique Grothendieck topology with the same sheaves, so nothing is lost.

**nLab:** [coverage](https://ncatlab.org/nlab/show/coverage), [geometry of physics -- coordinate systems](https://ncatlab.org/nlab/show/geometry+of+physics+--+coordinate+systems), [good open cover](https://ncatlab.org/nlab/show/good+open+cover). It says: “every pullback of a good open cover gives an open cover that may be refined by a good open cover. This is all we need in the definition of coverage.”

**Sources:**

- [D. Fiorenza, U. Schreiber, J. Stasheff, Čech cocycles for differential characteristic classes: an ∞-Lie theoretic construction, Advances in Theoretical and Mathematical Physics 16 (2012) 149–250, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### Covering conditions replace stalk conditions for locally ringed sites

**Remember:** Ask 'f or 1 − f is a unit' on a covering, not at points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20, 14A15. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A ringed site (C, 𝒪) satisfies the covering condition if, for each local section f of 𝒪, some covering has pieces on which f or 1 − f is invertible. A point of a site is a way of taking stalks, like a point of a topological space.

**Problem.** If the covering condition holds, every stalk of 𝒪 at a point is a local ring or the zero ring. When the site has enough points, the covering condition is equivalent to this stalk condition.

**How the definition helps.** The covering condition uses only sections and coverings, so it can be stated on any site, even one with too few points. It passes to stalks because stalks are colimits over neighbourhoods (our own). It allows zero stalks, because the zero ring passes the test 'x or 1 − x is a unit' (our own). A second lemma (Tag 05D8) restates the clause 1 ≠ 0 as a condition on the sheaf.

**Paper or page:** [Stacks Project, Sites Modules, Lemma 18.40.2](https://stacks.math.columbia.edu/tag/04ET), [Stacks Project, Sites Modules, Lemma 18.40.3](https://stacks.math.columbia.edu/tag/05D8). It says: “For every point p of 𝒞 the stalk 𝒪ₚ is either the zero ring or a local ring. We always have (1) ⇒ (2). If 𝒞 has enough points then (1) and (2) are equivalent.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 04ET (Sites Modules, Lemma 18.40.2)](https://stacks.math.columbia.edu/tag/04ET)
- [The Stacks Project Authors, The Stacks Project, Tag 05D8 (Sites Modules, Lemma 18.40.3)](https://stacks.math.columbia.edu/tag/05D8)

### Covering-flat morphisms of sites give exactly the right geometric morphisms

**Remember:** Ask for flatness only up to covers, since sheaves cannot see more.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A site is a category with a coverage: a choice of which families of maps count as covers. A morphism of sites C → D is a functor that preserves covering families and is covering-flat. Covering-flatness is a weaker form of representable flatness (roughly, preserving finite limits). It asks for flatness only relative to the coverage of D.

**Problem.** Every morphism of sites C → D induces a geometric morphism between the sheaf toposes. Conversely, every geometric morphism whose inverse image sends representables to representables comes from a morphism of sites.

**How the definition helps.** The covering-flat definition makes the correspondence hold in both directions in general (Shulman). With the classical definition (representably flat functors), the converse holds only in special cases, for example when both sites have finite limits and D is subcanonical. The two definitions agree when C has finite limits and all covers in D are strong epimorphisms. So few practical examples see a difference.

**nLab:** [morphism of sites](https://ncatlab.org/nlab/show/morphism+of+sites). It says: “Note that the general case would not be true for the classical definition of "morphism of sites".”

**Sources:**

- [Michael Shulman, Exact completions and small sheaves, Theory Appl. Categ. 27 (2012) 97–173, arXiv:1203.4318](https://arxiv.org/abs/1203.4318)

### Hypercoverings let Čech cohomology compute sheaf cohomology on general sites

**Remember:** Refine the overlaps too, and Čech cohomology becomes correct.

*Makes the theorem clean to state or prove.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18G40, 14F20. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A hypercovering is a simplicial object built from coverings. Its degree-0 part covers the space. In each higher degree, the pieces cover the overlaps of the previous level instead of being equal to them. The Čech nerve of one covering is the special case where no overlap is refined.

**Problem.** On a site with fibre products and products of pairs, the sheaf cohomology of an object with coefficients in an abelian sheaf is the colimit, over all its hypercoverings, of their Čech cohomology.

**How the definition helps.** Letting each overlap have its own covering gives enough room for every cohomology class to appear. Ordinary Čech cohomology over coverings can differ from sheaf cohomology in degree 2 and higher on general spaces (our own; a standard fact). Verdier introduced hypercoverings in SGA 4 for this purpose (from Wikipedia). What stays hard is the simplicial argument that hypercoverings are cofinal enough (our own).

**Wikipedia:** [Hypercovering](https://en.wikipedia.org/wiki/Hypercovering). It says: “The original definition given for étale cohomology by Jean-Louis Verdier in SGA4, Expose V, Sec. 7, Thm. 7.4.1, to compute sheaf cohomology in arbitrary Grothendieck topologies.”

**Paper or page:** [Stacks Project, Hypercovering, Proposition 25.10.2](https://stacks.math.columbia.edu/tag/09VZ). It says: “In other words, modulo set theoretical issues, the cohomology groups of ℱ on 𝒞 are the colimit of the Čech cohomology groups of ℱ over all hypercoverings.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 09VZ (Hypercovering, Proposition 25.10.2)](https://stacks.math.columbia.edu/tag/09VZ)

### Locality as a right adjoint makes global sections the initial point

**Remember:** The global-sections point maps uniquely to every other point.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** A Grothendieck topos E is local when its global sections functor Γ has a right adjoint. Γ sends a sheaf X to the set of maps 1 → X from the terminal object. The nLab notes that over sets this right adjoint is then fully faithful. A point of E is given by a functor E → Set that preserves finite limits and has a right adjoint.

**Problem.** In a local Grothendieck topos, Γ is the inverse image of a point, and this point is initial among all points.

**How the definition helps.** With this definition, Γ already has both properties that a point needs (our own). Γ preserves all limits, since it is right adjoint to the constant sheaf functor (our own). Maps between points are natural transformations between their inverse images (our own). By the Yoneda lemma, maps from Γ = Hom(1, −) to an inverse image p\* match elements of p\*(1) (our own). Since p\* keeps the terminal object, p\*(1) has exactly one element (our own).

**nLab:** [local geometric morphism](https://ncatlab.org/nlab/show/local+geometric+morphism), [point of a topos](https://ncatlab.org/nlab/show/point+of+a+topos). It says: “this point is an initial object in the category of all points of E”

**Sources:** none listed. No primary source with a working link was found.

### Points as geometric morphisms make stalks preserve finite limits and colimits

**Remember:** A stalk is a left adjoint that also preserves finite limits.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** A topos is a category that behaves like the category of sheaves on a space. A geometric morphism is an adjoint pair whose left part, the inverse image, preserves finite limits. A point of a topos is a geometric morphism from the topos of sets, and its inverse image is the stalk functor. On a space, the usual stalk at x is the set of germs at x.

**Problem.** At any point of a Grothendieck topos, the stalk functor preserves finite limits and all small colimits.

**How the definition helps.** With this definition, both claims are part of the data or follow from it at once (our own). Finite limits are preserved by definition, and colimits because the stalk is a left adjoint (our own). The work moves to showing that the germ construction on a space gives a point (our own). There, filtered colimits of sets commute with finite limits, and skyscraper sheaves give the right adjoint (our own).

**nLab:** [geometric morphism](https://ncatlab.org/nlab/show/geometric+morphism), [point of a topos](https://ncatlab.org/nlab/show/point+of+a+topos). It says: “such that the left adjoint f\*: F → E preserves finite limits.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Sierpinski sheaves as arrows make global sections preserve limits and colimits

**Remember:** Global sections are the set at the start of the arrow.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** The Sierpinski space has one open point and one closed point. Describe a sheaf on it as one function of sets, from sections over the whole space to sections over the open point. So these sheaves form the arrow category of sets. The usual definition lists sections over every open set, including the empty set, and checks gluing.

**Problem.** Global sections, from sheaves of sets on the Sierpinski space to sets, preserve all small limits and colimits.

**How the definition helps.** In the arrow picture, global sections just evaluate at the source of the arrow (our own). Limits and colimits of functors are computed at each object, so evaluation preserves both (our own). The work moves to the equivalence of sheaves with arrows, which the nLab states. Gluing adds only a single element over the empty set (our own).

**nLab:** [Sierpinski topos](https://ncatlab.org/nlab/show/Sierpinski+topos). It says: “The Sierpinski topos is the arrow category of Set.”

**Sources:** none listed. No primary source with a working link was found.

### Slices inherit subobject classifiers

**Remember:** Keep the old classifying map and attach its map to the base.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** Define the topos over an object X as the slice of maps to X. A subobject classifier Ω records each inclusion by a unique map from its target into Ω. Over a space, the other construction takes sheaves on the local homeomorphism corresponding to X.

**Problem.** The subobject classifier of the slice over X is the projection Ω × X → X.

**How the definition helps.** An inclusion over X is an inclusion in the original topos (our own explanation). Pair its old classifying map with the given map to X to get the unique classifying map in the slice (our own explanation). The work moves to identifying this slice with the sheaves on the associated local homeomorphism (our own comparison).

**nLab:** [over-topos](https://ncatlab.org/nlab/show/over-topos). It says: “regarded as an object in the slice over X is the subobject classifier of T/X.”

**Sources:** none listed. No primary source with a working link was found.

### Surjective submersions are the good covers among smooth manifolds

**Remember:** A surjective submersion is an onto map you can pull back along anything.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18A20, 58A05. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** In the category Diff of smooth manifolds, use surjective submersions as the covering maps, in place of regular epimorphisms. A regular epimorphism is the category-theory version of a quotient map.

**Problem.** In Diff, the pullback of a surjective submersion along any smooth map exists and is again a surjective submersion. So surjective submersions form a pullback-stable class of covers for Lie groupoids and differentiable stacks.

**How the definition helps.** A submersion is transverse to every smooth map, so pullbacks of surjective submersions always exist. General regular epimorphisms do not have this property: even split epimorphisms in Diff can have pullbacks that do not exist. This is why the source and target maps of a Lie groupoid must be surjective submersions, so that composable pairs form a manifold. The nLab says surjective submersions are the largest class of regular epimorphisms with all pullbacks, but gives no proof.

**nLab:** [regular epimorphism](https://ncatlab.org/nlab/show/regular+epimorphism). It says: “the usual procedure is to consider the largest class of arrows inside regular epis of which all pullbacks exist, namely the surjective submersions.”

**Sources:**

- [I. Moerdijk, J. Mrčun, Introduction to Foliations and Lie Groupoids, Cambridge University Press (2003)](https://doi.org/10.1017/CBO9780511615450)

### Topoi as left exact reflections of presheaves make equivalence relations effective

**Remember:** Quotient in presheaves, then reflect the quotient and its pullback.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** Define a Grothendieck topos as a full subcategory of presheaves whose inclusion has a left adjoint L that preserves finite limits. A presheaf assigns a set to each object, with restriction maps, and need not glue. The site definition uses covering families and requires unique gluing.

**Problem.** In a Grothendieck topos, every equivalence relation R on X is effective. That means R is exactly the pairs with the same image in the quotient of X by R.

**How the definition helps.** The claim holds in presheaves, and L carries it over because L keeps both quotients and pullbacks (our own). In presheaves, quotients and pullbacks are taken object by object, so the claim reduces to sets (our own). L preserves the quotient because it is a left adjoint (our own). L preserves the pullback of pairs with equal image because it preserves finite limits (our own). The work moves to proving that sheafification exists and preserves finite limits (our own).

**nLab:** [Grothendieck topos](https://ncatlab.org/nlab/show/Grothendieck+topos), [sheaf toposes are equivalently the left exact reflective subcategories of presheaf toposes](https://ncatlab.org/nlab/show/sheaf+toposes+are+equivalently+the+left+exact+reflective+subcategories+of+presheaf+toposes). It says: “such that the reflector L : PSh(C) → Sh(C) preserves finite limits”

**Sources:** none listed. No primary source with a working link was found.

### Topologies given by covering sieves make intersections of topologies topologies

**Remember:** Keep a sieve exactly when every topology counts it as a cover.

*True by definition.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi). arXiv math.CT. Level 3: graduate.

**Definition.** A sieve on an object U is a set of arrows into U such that f ∘ g is in it whenever f is. A Grothendieck topology chooses covering sieves on each object. They must include the sieve of all arrows, be stable under pullback, and obey a local character rule.

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

**Remember:** A gerbe is what a map to 𝐁𝐁G pulls back; its class is that map.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 55N30, 53C08. arXiv math.AG, math.AT. Level 3: graduate.

**Definition.** For an abelian group G, a G-gerbe over X is a map P → X that is the homotopy pullback of the point along some map X → 𝐁𝐁G. So each fiber of P looks like 𝐁G, the groupoid with one object whose morphisms are the elements of G. Here 𝐁𝐁G is the double delooping of G: an object whose only nontrivial homotopy group is G, in degree 2. It exists because G is abelian.

**Problem.** Abelian G-gerbes over X are classified by the cohomology group H²(X, G). For G = U(1), taken as the sheaf of smooth U(1)-valued functions, this group is H³(X, ℤ).

**How the definition helps.** Both cohomology and gerbes are defined by maps to 𝐁𝐁G, so the classification is a tautology. Degree-2 cohomology with coefficients in G is defined as the set of homotopy classes of maps X → 𝐁𝐁G. A gerbe is defined as what such a map pulls back. The real work moves elsewhere. You must show that this definition agrees with Giraud's definition of gerbes as stacks (sheaves of groupoids) with extra properties. For nonabelian G, you must replace 𝐁𝐁G by 𝐁AUT(G).

**nLab:** [gerbe (general idea)](https://ncatlab.org/nlab/show/gerbe+%28general+idea%29). It says: “Moreover, since cohomology on X with values in 𝐁𝐁G is nothing but the hom-set H²(X,G) = Ho(X, 𝐁𝐁G) in the homotopy category of our generalized spaces, it is a tautology that these G-gerbes are classified by H²(X,G).”

**Sources:**

- [I. Moerdijk, Introduction to the language of stacks and gerbes, 2002, arXiv:math/0212266](https://arxiv.org/abs/math/0212266)
- [L. Breen, Notes on 1- and 2-gerbes, 2006, arXiv:math/0611317](https://arxiv.org/abs/math/0611317)

### Allowing empty covers gives every sheaf one section over the empty set

**Remember:** The empty family of sections glues in exactly one way.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54B40. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** A sheaf on a space assigns a set of sections to each open set. For each open cover, families of sections that agree on overlaps must glue to exactly one section. The empty set is covered by the empty family of open sets. Some books exclude empty covers and add a separate axiom for the empty set.

**Problem.** A sheaf of sets on a topological space has exactly one section over the empty open set.

**How the definition helps.** Applied to the empty cover, the gluing condition says directly that the empty set has exactly one section. The empty cover has exactly one family of sections, the empty family. That family meets every agreement condition, because there are none. So it glues to exactly one section. Definitions that allow only nonempty covers lose this fact and must state it as an extra axiom. These points are our own, and the page states only the general gluing condition.

**nLab:** [sheaf](https://ncatlab.org/nlab/show/sheaf). It says: “A presheaf on a site is a sheaf if its value on any object of the site is given by its compatible values on any covering of that object.”

**Sources:** none listed. No primary source with a working link was found.

### Constant sheaves defined as inverse images from sets are preserved by pullback

**Remember:** The map to a point is the same after composition.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18B25. arXiv math.CT. Level 3: graduate.

**Definition.** Every Grothendieck topos has an essentially unique geometric morphism to the topos of sets. Define the constant sheaf on a set S as the inverse image of S along this morphism. On a space, the concrete definition takes locally constant functions into S.

**Problem.** For a geometric morphism f : F → E, f\* sends the constant sheaf on S in E to that in F.

**How the definition helps.** With this definition, the claim follows from uniqueness of the morphism to sets (our own). Composing f with the morphism from E to sets gives a morphism from F to sets, so it is the unique one (our own). Inverse images of a composite are the composite of inverse images (our own). The work moves to showing that, on a space, this constant sheaf is the sheaf of locally constant functions (our own).

**nLab:** [constant sheaf](https://ncatlab.org/nlab/show/constant+sheaf), [terminal geometric morphism](https://ncatlab.org/nlab/show/terminal+geometric+morphism). It says: “Together with the global section functor, the constant sheaf functor is a geometric morphism”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Extension by zero defined as a left adjoint commutes with tensor products

**Remember:** Move extension and tensor across the map using their adjoints.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** A ringed site is a site with a sheaf of rings O. For an object U, restriction sends a module F on the site to the module F\|U on U. Define extension by zero jᵤ! as the left adjoint of restriction. The explicit construction sheafifies a presheaf built from sections over arrows into U.

**Problem.** For a module G on U and a module F on the site, jᵤ!G ⊗ F = jᵤ!(G ⊗ F\|U).

**How the definition helps.** With adjoints, both sides represent the same functor, so they agree (our own). Maps from the left side to H match maps G → Hom(F, H)\|U, by the tensor–hom and extension adjunctions (our own). Maps from the right side to H match maps G → Hom(F\|U, H\|U), by the same steps in the other order (our own). These agree because the sheaf of homomorphisms commutes with restriction (our own). The work moves to proving the extension adjunction and that fact about restriction (our own).

**Paper or page:** [Sites Modules, Lemma 18.27.9.](https://stacks.math.columbia.edu/tag/0E8I). It says: “we have jᵤ!G ⊗ₒ F = jᵤ!(G ⊗₍Oᵤ₎ F\|ᵤ).”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.27.9.](https://stacks.math.columbia.edu/tag/0E8I)

### Extension by zero defined as left adjoint of restriction composes along inclusions

**Remember:** Restrictions compose, so the extensions by zero compose too.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** Let j : U → X be the inclusion of an open set. Restriction sends a sheaf of abelian groups on X to its part on U. Extension by zero j! is its left adjoint. Concretely, j!G is the sheaf made from the presheaf that is G(V) when V ⊆ U and 0 otherwise.

**Problem.** For open sets W ⊆ U ⊆ X, extending by zero from W to U and then to X equals extending from W to X.

**How the definition helps.** The adjoint definition reduces the claim to restriction, which plainly composes (our own). Restricting from X to U and then to W is restricting from X to W (our own). Left adjoints of the same functor are isomorphic, so the two extensions agree (our own). With the explicit formula one would compare two sheafifications by hand (our own). The work moves to constructing extension by zero and proving the adjunction, which the Stacks Project does for ringed sites.

**Paper or page:** [Sites Modules, Lemma 18.19.2.](https://stacks.math.columbia.edu/tag/03DI). It says: “The restriction functor jᵤ\* : Mod(O) → Mod(Oᵤ) has a left adjoint jᵤ! : Mod(Oᵤ) → Mod(O).”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.19.2.](https://stacks.math.columbia.edu/tag/03DI)

### Inverse image defined as a left adjoint makes inverse images compose

**Remember:** Direct images compose, so their left adjoints compose in reverse order.

*True by definition.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 54B40. arXiv math.CT, math.AG. Level 3: graduate.

**Definition.** For a continuous map f, the direct image f∗F gives the sections of F over the preimage of each open set. Define the inverse image f⁻¹ as the left adjoint of f∗. So maps f⁻¹G → F match maps G → f∗F. The usual construction takes colimits of sections over neighbourhoods of f(U) and then sheafifies.

**Problem.** For continuous maps f : X → Y and g : Y → Z, (g ∘ f)⁻¹ is canonically isomorphic to f⁻¹ ∘ g⁻¹.

**How the definition helps.** The adjoint definition reduces the claim to direct images, which compose on the nose (our own). Preimages of open sets compose, so (g ∘ f)∗ = g∗ ∘ f∗ (our own). Left adjoints of a composite compose in reverse order, and left adjoints are unique up to isomorphism (our own). With the colimit construction one must compare iterated colimits and sheafifications by hand (our own). The work moves to proving that the colimit construction is left adjoint to f∗ (our own).

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

**Definition.** The stalk of a presheaf F at x is the set of germs of sections at x. On a space X, build a space whose points are all germs of F. Define the sheafification of F as the sheaf of continuous sections of this germ space. Another construction applies a gluing step twice.

**Problem.** On a topological space, sheafifying a presheaf of sets does not change its stalks.

**How the definition helps.** With this definition, a stalk of the sheafification is a fiber of the germ space, which is the old stalk (our own). The germ space maps to X by a local homeomorphism, a map that is a homeomorphism near each point (our own). For a local homeomorphism, germs of sections at x are the same as points over x (our own). The work moves to proving that this sheaf of sections has the universal property of sheafification (our own). The Stacks Project proves the result for any point of any site.

**Paper or page:** [Sites Modules, Lemma 18.36.1.](https://stacks.math.columbia.edu/tag/04EN). It says: “We have (F♯)ₚ = Fₚ for any presheaf of sets on C.”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.36.1.](https://stacks.math.columbia.edu/tag/04EN)

### Tensor products characterized by bilinear maps commute with sheafification

**Remember:** Maps out of a tensor product are bilinear maps.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 14F06. arXiv math.AG, math.CT. Level 3: graduate.

**Definition.** Sheafification turns a presheaf of modules into the closest sheaf of modules. Characterize the tensor product of two sheaves of modules by its maps out, which are bilinear maps into another sheaf of modules. The concrete recipe tensors sections on each object and then sheafifies.

**Problem.** For presheaves of modules F and G over a presheaf of rings O, sheafifying their sectionwise tensor product gives F♯ ⊗ G♯ over O♯.

**How the definition helps.** With the bilinear-map description, both sides need only represent the same functor (our own). A map from either side into a sheaf of O♯-modules H amounts to a bilinear map F × G → H (our own). For the right side, this needs every bilinear map from F × G into a sheaf to extend uniquely to F♯ × G♯ (our own). That step holds because sheafification preserves finite products (our own). The work moves into that extension step and the existence of sheafification (our own).

**Paper or page:** [Sites Modules, Lemma 18.26.1.](https://stacks.math.columbia.edu/tag/0GMW). It says: “Then F♯ ⊗₍O♯₎ G♯ is equal to (F ⊗ₚ,ₒ G)♯.”

**Sources:**

- [The Stacks Project, Sites Modules, Lemma 18.26.1.](https://stacks.math.columbia.edu/tag/0GMW)

### Defining K₀ of triangulated categories by triangles makes shifts negate classes

**Remember:** Shifting a complex by one negates its class.

*True by definition.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)), 18G80. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** A triangulated category has a shift functor Σ and distinguished triangles A → B → C → ΣA. These triangles play the role of short exact sequences. K₀ is the free abelian group on objects, modulo \[B\] = \[A\] + \[C\] for each triangle. For perfect complexes over a ring, which are bounded complexes of finitely generated projective modules, the older model takes the alternating sum of the terms.

**Problem.** In K₀ of a triangulated category, \[ΣA\] = −\[A\] for every object A. Hence every element is the class of a single object, since \[A\] − \[B\] = \[A ⊕ ΣB\].

**How the definition helps.** The triangle A → 0 → ΣA gives \[A\] + \[ΣA\] = 0 directly from the defining relations. The nLab notes that this holds by definition. The second claim is our own. In K₀(ℤ) = ℤ, by contrast, −\[ℤ\] is not the class of any module (our own). The work moves to the comparison theorem (our own). The alternating sum must be unchanged by maps that are isomorphisms on cohomology, and it must recover K₀ of the ring.

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “\[A\] + \[Σ A\] = 0”

**Sources:** none listed. No primary source with a working link was found.

### Waldhausen's S• construction makes short exact sequences add in K-theory

**Remember:** One triangle for each sequence A ↪︎ B ↠ B/A forces \[B\] = \[A\] + \[B/A\].

*True by definition.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)), 18N45. arXiv math.KT. Level 3: graduate.

**Definition.** Let C be a category with cofibrations (maps that act like inclusions) and weak equivalences. Waldhausen's Sₙ C is the category of chains 0 ↪︎ A₁ ↪︎ … ↪︎ Aₙ of cofibrations with chosen quotients Aⱼ/Aᵢ. The K-theory space is K(C) = Ω\|wS•C\|, the loop space of the realization of the weak equivalences in S•C.

**Problem.** Waldhausen K-theory is a spectrum whose K₀ is the Grothendieck group. Additivity theorem: cofiber sequences A ↪︎ B ↠ B/A add in every K-group.

**How the definition helps.** The construction puts the relation \[B\] = \[A\] + \[B/A\] into the space by hand. The realization \|S•C\| has one 2-simplex for each cofiber sequence, so the relation holds in the fundamental group by construction. Additivity in all degrees is a real theorem (Waldhausen 1985, §1.4), and it makes the K-theory spectrum an Ω-spectrum. For exact categories, \|iS•A\| ≃ \|QA\|, so this agrees with Quillen's K-theory (Waldhausen 1985, §1.9).

**nLab:** [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction), [Quillen Q-construction](https://ncatlab.org/nlab/show/Quillen+Q-construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “The difference is that it imposes additivity over all cofiber sequences, not just over direct sums”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces, Lecture Notes in Math. 1126, Springer (1985) 318–419](https://doi.org/10.1007/BFb0074449)
- [Daniel Quillen, Higher algebraic K-theory I, Lecture Notes in Math. 341, Springer (1973) 85–147](https://doi.org/10.1007/BFb0067053)

### The Grothendieck group makes Riemann–Roch a comparison of two homomorphisms

**Remember:** Euler characteristics add over exact sequences, so they live on K₀.

*Makes the theorem clean to state or prove.* MSC 18F30 (Grothendieck groups (category-theoretic aspects)), 14C40. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** The Grothendieck group K₀(X) is the abelian group generated by classes of coherent sheaves on X. Its only relations say that the middle term of each short exact sequence is the sum of the outer terms.

**Problem.** Take a vector bundle E on a smooth projective variety X. Hirzebruch–Riemann–Roch says that the Euler characteristic of E equals the degree of ch(E)·td(X). Here ch is the Chern character and td is the Todd class.

**How the definition helps.** The Euler characteristic is additive on short exact sequences, so by the definition of K₀ it becomes a homomorphism on K₀(X). The Chern character is also a homomorphism from K₀(X) to the rational Chow ring. So both sides of the formula are additive, and they need to be compared only on generators (our own summary). Pushforward along a proper map also becomes a homomorphism on K₀, the alternating sum of the higher direct images. Grothendieck's proof then embeds X into projective space and reduces to projective space itself. There, Euler characteristics of line bundles are binomial coefficients. What stays hard is the behaviour under the closed embedding, which is the heart of the proof.

**Wikipedia:** [Grothendieck–Riemann–Roch theorem](https://en.wikipedia.org/wiki/Grothendieck%E2%80%93Riemann%E2%80%93Roch_theorem). It says: “the Grothendieck group K0(X) of bounded complexes of coherent sheaves is canonically isomorphic to the Grothendieck group of bounded complexes of finite-rank vector bundles.”

**Paper or page:** [Grothendieck's proof of Hirzebruch-Riemann-Roch theorem](https://arxiv.org/abs/2511.06880v2). It says: “we introduce the two modern tools necessary for the generalization: the Grothendieck group K₀(X) as the natural setting for the Euler characteristic, and the Chow ring A•(X) as the setting for cycles and intersection theory.”

**Sources:**

- [Giacomo Graziani, Grothendieck's proof of Hirzebruch-Riemann-Roch theorem, arXiv:2511.06880v2 (2025)](https://arxiv.org/abs/2511.06880v2)
- [A. Borel, J.-P. Serre, Le théorème de Riemann-Roch, Bulletin de la Société mathématique de France 86 (1958)](https://doi.org/10.24033/bsmf.1500)

### An integration axiom gives the fundamental theorem of calculus synthetically

**Remember:** Every function has exactly one antiderivative that starts at zero.

*True by definition.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 58A03, 26A42. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** Synthetic differential geometry works in a smooth topos: a universe of sets in which infinitesimal quantities exist. Take such a topos with an ordered line R. The integration axiom says: for every function f on an interval \[a,b\], there is exactly one function ∫ₐf on \[a,b\] that has value 0 at a and has derivative f.

**Problem.** In synthetic differential geometry with the integration axiom, the derivative of ∫ₐf is f. And if F′ = f on \[a,b\], then ∫ₐf = F − F(a).

**How the definition helps.** The axiom defines the integral as the unique antiderivative that is 0 at a, so both parts of the theorem are almost free. The Kock–Lawvere axiom (every function on the infinitesimals is linear) gives derivatives, but it gives no integrals. The derivative of ∫ₐf is f, by the integration axiom. Now suppose F′ = f. Then F − F(a) is also an antiderivative that is 0 at a. So, by uniqueness, F − F(a) equals ∫ₐf (our own short step). The nLab says that, without this axiom, synthetic differential geometry has no fundamental theorem of calculus and indeed no integrals.

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus), [integration axiom](https://ncatlab.org/nlab/show/integration+axiom). It says: “Conversely, in synthetic differential geometry, we essentially define an indefinite integral to be an antiderivative.”

**Sources:**

- [A. Kock, Synthetic Differential Geometry, Cambridge University Press (2006)](https://doi.org/10.1017/CBO9780511550812)

### The Kock–Lawvere axiom makes the tangent bundle a function space

**Remember:** To first order every map is linear, and D is where first order lives.

*True by definition.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 58A03. arXiv math.CT, math.DG. Level 3: graduate.

**Definition.** Let R be a ring object in a topos, and let D = {x ∈ R \| x² = 0}, the infinitesimals whose square is 0. The Kock–Lawvere axiom says that the map R × R → Rᴰ, (x, d) ↦ (ε ↦ x + εd), is an isomorphism. Here Rᴰ is the object of maps D → R.

**Problem.** Under the Kock–Lawvere axiom, every map g : D → R has the unique form g(ε) = g(0) + εd, so every map is linear to first order. The derivative of f at 0 is that d for g = f restricted to D, and the tangent bundle of X is the function space Xᴰ.

**How the definition helps.** The axiom makes the derivative an algebraic fact, so no limits are needed. A tangent vector is literally an infinitesimal path D → X. The axiom fails in ordinary sets: for R = ℝ, D = {0}, so the map R × R → Rᴰ forgets d. The hard work moves into building well-adapted models, toposes that contain smooth manifolds and satisfy the axiom.

**nLab:** [Kock-Lawvere axiom](https://ncatlab.org/nlab/show/Kock-Lawvere+axiom), [synthetic differential geometry](https://ncatlab.org/nlab/show/synthetic+differential+geometry). It says: “This linearity condition is what in synthetic differential geometry allows to identify the tangent bundle T X → X of a space X with its fiberwise linearity by simply the internal hom object X<sup>D</sup> → X.”

**Sources:**

- [Anders Kock, A simple axiomatics for differentiation, Mathematica Scandinavica 40 (1977) 183–193](https://doi.org/10.7146/math.scand.a-11687)

### In a convenient category of spaces, geometric realization preserves products

**Remember:** Convenient means it holds CW complexes, all limits and colimits, and mapping spaces.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 55U10, 54D50. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A convenient category of topological spaces is a full subcategory of Top with three properties. It contains all CW complexes. It has all limits and colimits (it is complete and cocomplete). It is cartesian closed, which means that it has mapping spaces that satisfy the exponential law.

**Problem.** Geometric realization of simplicial sets preserves finite products: \|X × Y\| ≅ \|X\| × \|Y\|. In words, the realization of a product is the product of the realizations.

**How the definition helps.** In a convenient category, finite products distribute over colimits, and realization is a colimit, so the proof is short. With values in Top, geometric realization does not preserve products in general. With values in a convenient category, cartesian closure makes finite products distribute over colimits. Geometric realization is a colimit of simplices, so it then preserves finite products. The product on the right must be the product of the convenient category, for example the k-ified product. It must not be the product in Top.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “That geometric realization preserves products is sensitive to whether we think of it as valued in Top or in a convenient category Space. In particular, the proof uses cartesian closure of Space in an essential way”

**Sources:**

- [Rudolf Fritsch, Renzo A. Piccinini, Cellular structures in topology, Cambridge University Press 1990](https://doi.org/10.1017/CBO9780511983948)

### Any intersection of dense sublocales is dense

**Remember:** Dense means that no non-empty open set is missed.

*Makes the theorem clean to state or prove.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.GN. Level 3: graduate.

**Definition.** A locale is a space given by its lattice of open sets alone, with no set of points assumed. A sublocale is a subspace in this pointless sense, and it need not have points. A nucleus j on the lattice of opens describes the sublocale; a nucleus is a closure operator that keeps finite meets. The sublocale is dense if j(0) = 0, that is, if the only open set that does not meet it is the empty one.

**Problem.** Any intersection of dense sublocales of a locale is dense.

**How the definition helps.** For sublocales the claim holds with no conditions, at the price of losing points. For topological subspaces it fails badly: the intersection of all dense subspaces is the set of isolated points. The Baire category theorem gives only special conditions under which countable intersections of dense open sets stay dense. The intersection of all dense sublocales is the double-negation sublocale, which is usually not spatial.

**nLab:** [locale](https://ncatlab.org/nlab/show/locale), [dense subspace](https://ncatlab.org/nlab/show/dense+subspace). It says: “in the pointfree setting arbitrary intersections of dense sublocales are always dense.”

**Sources:**

- [John R. Isbell, Atomless parts of spaces, Math. Scand. 31 (1972) 5–32 (cited on the nLab page as the paper that introduced the term locale)](https://doi.org/10.7146/math.scand.a-11409)

### Frame presentations give a nontrivial pointless locale of surjections ℕ ↠ ℝ

**Remember:** The equations allow nontrivial opens, but no actual surjection.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A frame can be presented by generators and relations, like a group. Take a generator U(n, a) for each n ∈ ℕ and a ∈ ℝ, read as 'n is sent to a'. The relations say that each n has exactly one value and that each real a is a value. As a space, the object would be the set of such surjections, which is empty.

**Problem.** The locale of surjections ℕ → ℝ is nontrivial, meaning its top and bottom opens differ, yet it has no points.

**How the definition helps.** The presentation lets the locale exist even though its intended set of points is empty (our own). A point sends each generator to true or false, so it would give a real surjection ℕ → ℝ (our own). Cantor's theorem rules this out, which is why Wikipedia says it is not spatial. The work moves to proving that the relations do not collapse the frame (our own). One proof maps the frame to the regular opens of the order of finite partial functions ℕ → ℝ, a standard forcing order (our own).

**Wikipedia:** [Pointless topology](https://en.wikipedia.org/wiki/Pointless_topology). It says: “Of course, there are no such surjective functions ℕ → ℝ, and this is not a spatial locale.”

**Sources:** none listed. No primary source with a working link was found.

### Heine–Borel holds constructively for the locale of real numbers

**Remember:** The localic real line is the real line known only through its open intervals.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D30. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** A locale is a space given by its lattice of open sets alone, with no set of points assumed. The locale of real numbers is the real line given in this way. Its frame (its lattice of opens) is generated by open intervals (a, b) with rational ends, under the usual relations. An open cover of \[0, 1\] is a family of opens whose join (union) with (−∞, 0) and (1, ∞) is the whole line.

**Problem.** In constructive mathematics, the closed unit interval in the locale of real numbers is compact (Heine–Borel). For the set of real numbers, the theorem can fail constructively.

**How the definition helps.** On the locale, the theorem is about opens, not points, and that makes the proof short. For the set of reals, its constructive truth is related to the fan theorem. For opens of the locale, the nLab gives a proof that is 'almost embarrassingly simple'. What is lost is the statement about points, which does not follow without extra principles.

**nLab:** [locale of real numbers](https://ncatlab.org/nlab/show/locale+of+real+numbers), [locale](https://ncatlab.org/nlab/show/locale). It says: “But the beauty of the localic approach is that Heine--Borel necessarily holds when interpreted as a statement about opens in the locale of real numbers.”

**Sources:**

- [Ingo Blechschmidt, Generalized spaces for constructive algebra, arXiv:2012.13850 (2020), Section 2.1 (the locale of real numbers)](https://arxiv.org/abs/2012.13850)

### In sober spaces, continuous maps are the same as frame homomorphisms

**Remember:** In a sober space, every point the open sets can see is there, exactly once.

*True by definition.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A space X is sober if every completely prime filter of open sets comes from exactly one point. A filter is completely prime if, whenever it contains a union of open sets, it contains one of them. Equivalently, every frame homomorphism from the opens of X to the two truth values comes from exactly one point.

**Problem.** If Y is sober, then for every space X, each frame homomorphism O(Y) → O(X) is f⁻¹ for a unique continuous map f : X → Y. Here O(X) is the frame of open sets of X.

**How the definition helps.** Sobriety asks exactly that the points of X are the points of its locale of opens, so the statement is almost the definition. The category of sober spaces is then equivalent to the category of locales with enough points. The content moves to showing that important spaces are sober, such as Hausdorff spaces and the underlying spaces of schemes.

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “It means that continuous functions between sober topological spaces are entirely determined by their inverse image functions on the frames of opens, disregarding the underlying sets of points.”

**Sources:**

- [Peter T. Johnstone, Stone Spaces, Cambridge Studies in Advanced Mathematics 3, Cambridge University Press (1982; paperback 1986), Section II.1](https://openlibrary.org/isbn/9780521337793)
- [The Stacks Project, Section 5.8 (Tag 004U), Irreducible components](https://stacks.math.columbia.edu/tag/004U)

### Locales make Stone duality hold without the ultrafilter theorem

**Remember:** Define spaces as the opposites of their lattices of opens, and duality comes free.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 06E15. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** A frame is a lattice that behaves like the lattice of open sets of a space: it has all joins and finite meets, and finite meets distribute over joins. The category of locales is defined to be the opposite of the category of frames.

**Problem.** Without the ultrafilter theorem, and even constructively, coherent locales are dual to distributive lattices and Stone locales are dual to Boolean algebras.

**How the definition helps.** Locales do not need points, so the duality does not need choice to supply enough points. The duality between locales and frames is a tautology, and the interesting dualities are between subcategories. For topological spaces, these dualities need the ultrafilter theorem or another form of choice, so that points tell open sets apart. Choice is still needed to show that coherent locales have enough points (the prime ideal theorem).

**nLab:** [Stone duality](https://ncatlab.org/nlab/show/Stone+duality). It says: “In many cases, one requires the ultrafilter theorem (or other forms of the axiom of choice) in order for the duality to hold when applied to topological spaces, while the duality holds for locales even in constructive mathematics.”

**Sources:**

- [Peter T. Johnstone, The point of pointless topology, Bulletin of the AMS 8 (1983) 41–53](https://doi.org/10.1090/S0273-0979-1983-15080-2)

### Open sublocales defined by a universal property pull back to open sublocales

**Remember:** A map lands in an open exactly when its preimage is everything.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A locale is a space given only by its frame of abstract opens, and a locale map f gives a frame map f\* backwards. Define the open sublocale for an open u by a universal property. A locale map g factors through it exactly when g\*(u) is the top open. Concretely, its frame is the opens below u, with v sent to v ∧ u.

**Problem.** For a locale map f : X → Y and an open u of Y, the open sublocale for u pulls back to that for f\*(u).

**How the definition helps.** The universal property turns the claim into a chain of equivalent conditions (our own). A map g into X factors through the pullback exactly when f ∘ g factors through the open sublocale for u (our own). That holds exactly when g\*(f\*(u)) is the top open, so when g factors through the open sublocale for f\*(u) (our own). The work moves to proving that the frame of opens below u has the universal property (our own). The nLab gives the matching nucleus, which sends v to the largest open that agrees with v on u.

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

**Definition.** A frame is a lattice of abstract opens with all joins and finite meets, where finite meets distribute over joins. A nucleus on a frame is a map j with a ≤ j(a), j(a ∧ b) = j(a) ∧ j(b) and j(j(a)) = j(a). Define a sublocale by a nucleus. The other definition uses a quotient frame.

**Problem.** The nucleus of the join of a family of sublocales is the pointwise meet of their nuclei.

**How the definition helps.** With nuclei, the join becomes a meet computed one element at a time (our own). Larger sublocales have smaller nuclei, so joins of sublocales are meets of nuclei (our own). The pointwise meet j of nuclei jᵢ is above the identity and preserves finite meets (our own). Also j(j(a)) ≤ jᵢ(jᵢ(a)) = jᵢ(a) for each i, so j is a nucleus (our own). The work moves to the order-reversing match between quotient frames and nuclei (our own).

**nLab:** [nucleus](https://ncatlab.org/nlab/show/nucleus), [sublocale](https://ncatlab.org/nlab/show/sublocale). It says: “we define a sublocale of L to be a quotient frame of L, which corresponds to a nucleus on L as above.”

**Sources:**

- [Jorge Picado and Aleš Pultr, Frames and Locales, Chapter III, Birkhäuser (2012)](https://doi.org/10.1007/978-3-0348-0154-6)

### The Sierpinski locale as a free frame classifies opens of locales

**Remember:** A map into Sierpinski names one open.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22. arXiv math.CT, math.GN. Level 3: graduate.

**Definition.** A frame is a lattice of abstract opens with all joins and finite meets, where finite meets distribute over joins. Define the Sierpinski locale as the locale whose frame is free on one generator. The usual Sierpinski space has two points and one nonempty proper open set. Its frame is the three-element chain, which is that free frame.

**Problem.** For any locale X, locale maps from X to the Sierpinski locale correspond naturally to the opens of X.

**How the definition helps.** With the free frame, the claim is just the universal property of a free object (our own). A locale map into the Sierpinski locale is a frame map from the free frame to the frame of X (our own). Such a frame map is fixed by the image of the generator, which can be any open (our own). The work moves to identifying the free frame on one generator with the three-element chain (our own). The nLab states the matching fact for topological spaces.

**nLab:** [Sierpinski space](https://ncatlab.org/nlab/show/Sierpinski+space), [locale](https://ncatlab.org/nlab/show/locale). It says: “The Sierpinski space S is a classifier for open subspaces of a topological space X”

**Sources:** none listed. No primary source with a working link was found.

### Tychonoff's theorem holds for locales without the axiom of choice

**Remember:** A locale is a space known by its opens alone, with no points behind them.

*Makes the theorem clean to state or prove.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D30. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** A frame is a complete lattice in which finite meets distribute over arbitrary joins, like the lattice of open sets of a space. A locale is a frame viewed as a space. Products of locales are coproducts of frames. A locale is compact if, whenever its top element is a directed join, the top element is already in the directed family.

**Problem.** Without the axiom of choice, a product of any family of compact locales is compact (Tychonoff's theorem).

**How the definition helps.** For locales the theorem is about opens and not points, and so it needs no choice. For topological spaces, Tychonoff's theorem is equivalent to the axiom of choice. The constructive proof goes through Johnstone and Vickers's theory of preframes. Choice moves into the separate statement that a product of spatial locales is spatial, which is needed to get back to points.

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

**Definition.** An object I is injective relative to a class J of monomorphisms if every map A → I extends along every m : A → B in J. That is, there is a map B → I whose composite with m is the given map. A regular monomorphism is a monomorphism that is the equalizer of some pair of maps. In posets, the regular monomorphisms are the order embeddings.

**Problem.** A poset is injective relative to order embeddings exactly when it is a complete lattice. Against all monomorphisms, only the one-point poset is injective.

**How the definition helps.** Restricting to regular monomorphisms leaves out the monomorphisms that are not embeddings, so many more objects become injective. The same happens elsewhere. Against regular monomorphisms, the injective Banach spaces are the spaces C(K) for K extremally disconnected, and the injective T₀ spaces are the continuous lattices with the Scott topology. Each characterization is still a theorem; the poset case is the Banaschewski–Bruns result.

**nLab:** [injective object](https://ncatlab.org/nlab/show/injective+object). It says: “However, if we require injectives to satisfy the extension property only with respect to regular monomorphisms, then the injective objects are precisely the complete lattices.”

**Sources:**

- [B. Banaschewski, G. Bruns, Categorical characterization of the MacNeille completion, Archiv der Mathematik 18 (1967) 369–377](https://doi.org/10.1007/BF01898828)

### Defining derived functors as universal δ-functors makes natural maps extend uniquely

**Remember:** A map in degree zero fixes the whole map of derived functors.

*True by definition. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)). arXiv math.KT. Level 3: graduate.

**Definition.** A δ-functor is a family of functors with connecting maps that turn short exact sequences into long exact sequences. Define the right derived functors of F as the universal δ-functor starting at F. Universal means that each map from F in degree zero to another δ-functor extends uniquely. The resolution definition applies F to an injective resolution and takes cohomology.

**Problem.** Assume every object of the domain embeds in an injective object. Then a natural map between left exact functors extends uniquely to their right derived functors, compatibly with connecting maps.

**How the definition helps.** Under this definition, the extension is the universal property applied to the degree-zero map (our own). The work goes into proving that the resolution construction is universal, using embeddings into injectives (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.12.4](https://stacks.math.columbia.edu/tag/010T). It says: “Then F is a universal δ-functor.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d’algèbre homologique, I (1957)](https://doi.org/10.2748/tmj/1178244839)

### Defining derived functors by a universal property gives a canonical composite comparison

**Remember:** Compose the two comparison maps, then use the universal property.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** The total right derived functor of F comes with a map from F. It is the universal functor on the derived category with such a map. One can instead build derived functors by resolving objects before applying F.

**Problem.** Suppose the total right derived functors of F, G and their composite all exist. Then there is a canonical map from the derived functor of the composite to the composite of the derived functors.

**How the definition helps.** With this definition, composing the comparison maps for F and G gives a map from the composite (our own). The universal property of the derived composite turns it into the canonical map (our own). With resolutions, the map depends on choices that one must compare (our own). The work goes into proving that F, G and the composite have derived functors with this universal property (our own). The map need not be an isomorphism without extra conditions (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.14.16](https://stacks.math.columbia.edu/tag/05T2). It says: “there is a canonical transformation of functors”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived functors universally makes each exact functor its own derived functor

**Remember:** An exact functor already preserves quasi-isomorphisms.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** The total right derived functor of F is the best approximation to F by a functor on derived categories, defined by a universal property. The resolution definition instead replaces a bounded-below complex by a complex of injective objects and then applies F.

**Problem.** For an exact functor F between abelian categories, the total right derived functor RF is F applied to each complex.

**How the definition helps.** An exact functor commutes with cohomology, so it sends quasi-isomorphisms (maps inducing isomorphisms on cohomology) to quasi-isomorphisms (our own). So it already passes to derived categories (our own). A functor that already passes to the derived category is its own universal approximation (our own). The work goes into proving that the universal definition agrees with the injective-resolution recipe when that recipe applies (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.16.9](https://stacks.math.columbia.edu/tag/015F). It says: “every complex computes RF, in other words, the canonical map F(K•) → RF(K•) is an isomorphism for all complexes”

**Sources:** none listed. No primary source with a working link was found.

### Defining derived limits by a product cone makes the Milnor sequence immediate

**Remember:** The two ends are the kernel and cokernel of the product difference map.

*True by definition.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** For a tower of complexes Kₙ of abelian groups, define its derived limit by a distinguished triangle, an analogue of a short exact sequence. Its other two terms are the product of the Kₙ twice, joined by the map that subtracts each transition map from the identity. The classical definition resolves the whole tower by injective towers.

**Problem.** For a countable tower of complexes of abelian groups, each cohomology group of the derived limit fits in a short exact sequence. Its ends are lim¹ of the cohomology one degree lower and lim of the cohomology in the same degree. Here lim¹ is the first derived functor of the inverse limit.

**How the definition helps.** Taking cohomology of the defining triangle gives a long exact sequence, which breaks into these short sequences (our own). Products of abelian groups are exact, so cohomology commutes with the products (our own). On cohomology, the kernel of the difference map is lim and its cokernel is lim¹ (our own). The work goes into proving that this triangle computes the derived limit defined by injective resolutions (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.87.9](https://stacks.math.columbia.edu/tag/07KX). It says: “is a derived limit of the inverse system”

**Sources:** none listed. No primary source with a working link was found.

### K-injective complexes give derived functors on unbounded complexes

**Remember:** Ask for the property resolutions need, not for injective terms.

*Makes the theorem clean to state or prove.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80, 18G35. arXiv math.CT, math.AC. Level 3: graduate.

**Definition.** A complex I is K-injective if every map from an acyclic complex (one with no cohomology) to I is homotopic to zero. A bounded below complex of injective objects is K-injective, but an unbounded one need not be. K(𝒜) is the category of complexes up to homotopy, and D(𝒜) is the derived category.

**Problem.** In a Grothendieck abelian category, every complex, bounded or not, has a K-injective resolution. So right derived functors such as RHom and derived pushforward exist on the whole unbounded derived category.

**How the definition helps.** The definition names exactly what resolutions are for: homotopy classes of maps into I equal maps in the derived category. With it, the existence of RF is a formal step. 'Complex of injectives' is not enough (our own example). Over ℤ/4, the unbounded complex of copies of ℤ/4 with every map multiplication by 2 is acyclic and made of injectives, but it is not homotopic to zero.

**Paper or page:** [Stacks Project, Derived, Lemma 13.31.7](https://stacks.math.columbia.edu/tag/070K), [Stacks Project, Injectives, Theorem 19.12.6](https://stacks.math.columbia.edu/tag/079P). It says: “Assume every complex has a quasi-isomorphism towards a K-injective complex. Then any exact functor F : K(𝒜) → 𝒟′ of triangulated categories has a right derived functor RF : D(𝒜) ⟶ 𝒟′”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 070K (Derived, Lemma 13.31.7)](https://stacks.math.columbia.edu/tag/070K)
- [The Stacks Project Authors, The Stacks Project, Tag 079P (Injectives, Theorem 19.12.6)](https://stacks.math.columbia.edu/tag/079P)

### Projective complexes make chain maps into exact complexes null-homotopic

**Remember:** Projective pieces are free enough to give every map that homotopy theory expects.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G35, 18G05. arXiv math.KT, math.CT. Level 3: graduate.

**Definition.** A projective object P is one where every map out of P lifts along every epimorphism. A degreewise projective complex is a chain complex whose term in each degree is projective, such as a projective resolution ⋯ → P₁ → P₀ of an object.

**Problem.** Every chain map, in non-negative degrees, from a degreewise projective complex into an exact complex is null-homotopic. So projective resolutions are unique up to chain homotopy.

**How the definition helps.** Projective objects in the source supply the maps that a null-homotopy needs. Without them it fails: the chain map from ℤ/2 in degree 0 into the exact complex ℤ → ℤ → ℤ/2 is not null-homotopic, since every map ℤ/2 → ℤ is zero. After you replace ℤ/2 by its free resolution ℤ → ℤ, the composite has a null-homotopy. Dually, injective resolutions do the same for maps into them.

**nLab:** [projective resolution](https://ncatlab.org/nlab/show/projective+resolution), [homotopy category of chain complexes](https://ncatlab.org/nlab/show/homotopy+category+of+chain+complexes). It says: “This points to the problem: the components of the domain chain complex are not free enough to admit sufficiently many maps out of it.”

**Sources:**

- [Peter J. Hilton, Urs Stammbach, A Course in Homological Algebra, Graduate Texts in Mathematics 4, Springer (1971; 2nd edition 1997)](https://doi.org/10.1007/978-1-4419-8566-8)

### Defining Ext as derived-category maps makes the Yoneda product associative

**Remember:** A Yoneda product is composition with the degrees lined up.

*True by definition.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** The derived category makes quasi-isomorphisms of complexes into isomorphisms. Define Extⁿ(A, B) as maps there from A to B\[n\], which is B shifted n degrees. Multiply a class in Extⁿ(A, B) and a class in Extᵐ(B, C) by shifting the second by n and composing. The older definitions use cocycles on resolutions or splice together long exact sequences.

**Problem.** The Yoneda product on Ext groups is associative.

**How the definition helps.** The product is composition of maps, and shifting is a functor, so associativity of composition gives associativity of the product (our own). With resolutions or spliced sequences, one checks associativity by hand (our own). The work goes into proving that maps into shifted objects agree with the older Ext groups and products (our own).

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “which is simply the composition of morphisms in the derived category.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Tor with both inputs resolved makes Tor symmetric

**Remember:** Swap the two resolutions, with a sign from the degrees.

*True by definition. Confidence: medium.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)), 13D07. arXiv math.KT. Level 3: graduate.

**Definition.** For modules M and N over a commutative ring, take projective resolutions of both. A projective resolution of M is a complex of projective modules whose only homology is M, in degree zero. Tor is then the homology of the tensor product of the two resolutions. The usual definition resolves only one input.

**Problem.** Over a commutative ring, Torₙ(M, N) and Torₙ(N, M) are naturally isomorphic for every n.

**How the definition helps.** With both inputs resolved, the definition is symmetric apart from the order of the tensor factors (our own). Swapping them, with a minus sign when both degrees are odd, is an isomorphism of complexes (our own). The work goes into proving that this two-sided Tor agrees with Tor computed by resolving either input alone (our own).

**nLab:** [Tor](https://ncatlab.org/nlab/show/Tor). It says: “the total complex of the degreewise tensor product of modules double complex”

**Sources:** none listed. No primary source with a working link was found.

### Yoneda's extension classes define Ext in abelian categories without projectives

**Remember:** Ext¹ is the group of extensions, with no resolutions needed.

*Makes the theorem clean to state or prove.* MSC 18G15 (Ext and Tor, generalizations, Künneth formula (category-theoretic aspects)). arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** An extension of A by B is a short exact sequence 0 → B → E → A → 0. Yoneda's Ext¹(A, B) is the set of such extensions up to equivalence, with the Baer sum, a standard way to add two extensions, as addition. Higher Ext groups use exact sequences of length n, up to an equivalence relation.

**Problem.** In every abelian category, Yoneda Ext groups exist, and Ext¹(A, B) classifies extensions of A by B, with the split extension as zero. With enough projectives or injectives, they agree with Ext defined by resolutions.

**How the definition helps.** Yoneda's definition uses only exact sequences, which exist in every abelian category, so it needs no resolutions. Resolutions can be missing: finite abelian groups have no nonzero projective or injective objects (our own). The comparison with resolutions, when they exist, is the real work. Splicing sequences gives the Yoneda product, which is associative.

**Wikipedia:** [Ext functor](https://en.wikipedia.org/wiki/Ext_functor). It says: “for objects A and B in any abelian category C; this agrees with the definition in terms of resolutions if C has enough projectives or enough injectives.”

**Sources:**

- [R. Baer, Erweiterung von Gruppen und ihren Isomorphismen, Mathematische Zeitschrift 38 (1934) 375–416](https://doi.org/10.1007/BF01170643)

### Defining projective dimension by Ext makes it drop on direct summands

**Remember:** A summand cannot have nonzero Ext where the whole module has none.

*True by definition. Confidence: medium.* MSC 18G20 (Homological dimension (category-theoretic aspects)), 16E10. arXiv math.KT. Level 3: graduate.

**Definition.** The projective dimension of M is the least n ≥ 0 with Extᵏ(M, N) = 0 for all k &gt; n and all N. If no such n exists, it is infinity. The usual definition uses the length of a shortest projective resolution of M.

**Problem.** A direct summand of a module has projective dimension at most that of the module.

**How the definition helps.** Ext of a direct sum is the direct sum of the Ext groups, so vanishing for the module gives vanishing for each summand (our own). With resolution lengths one would need to build a short resolution of the summand (our own). The work goes into proving that the Ext definition agrees with resolution length (our own).

**nLab:** [projective dimension](https://ncatlab.org/nlab/show/projective+dimension). It says: “its projective dimension pd(M) is the minimal integer n (if it exists) such that there is a resolution of M”

**Sources:** none listed. No primary source with a working link was found.

### Defining normalization as the Dold–Kan equivalence makes it exact

**Remember:** An equivalence preserves kernels and cokernels.

*True by definition.* MSC 18G31 (Simplicial modules and Dold-Kan correspondence), 55U15. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** A simplicial abelian group is a sequence of abelian groups with face and degeneracy maps. View normalized chains as the Dold–Kan equivalence from simplicial abelian groups to chain complexes in nonnegative degrees. The direct definition takes the intersection of the kernels of all face maps but one in each degree.

**Problem.** Normalization sends short exact sequences of simplicial abelian groups to short exact sequences of chain complexes.

**How the definition helps.** An equivalence of abelian categories preserves kernels and cokernels, so it preserves exactness (our own). With the kernel-intersection formula, cokernels are not obviously preserved (our own). The work goes into the Dold–Kan theorem, which recovers each group of simplices from normalized chains and degeneracies (our own).

**nLab:** [Dold-Kan correspondence](https://ncatlab.org/nlab/show/Dold-Kan+correspondence). It says: “The Dold–Kan correspondence asserts there is an equivalence of categories between abelian simplicial groups and connective chain complexes of abelian groups.”

**Sources:**

- [Albrecht Dold, Homology of Symmetric Products and Other Functors of Complexes, Annals of Mathematics (1958)](https://doi.org/10.2307/1970043)

### Defining cones by maps out of them makes null homotopies extend

**Remember:** A map out of the cone carries its own null homotopy.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** Let f : X → Y be a chain map. Its cone is the universal complex with a map i from Y and a chain homotopy from i∘f to zero. A chain homotopy from φ to zero is a degree-one map h with φ = d∘h + h∘d. The usual formula takes Y ⊕ X\[1\] with a differential that involves f and a sign.

**Problem.** Every chain map g : Y → W with g∘f homotopic to zero extends to a chain map from the cone on f.

**How the definition helps.** With the universal definition, choose a homotopy from g∘f to zero, and the definition gives the extension (our own). The extension depends on the chosen homotopy (our own). The work goes into checking that the usual formula has this universal property (our own).

**nLab:** [mapping cone](https://ncatlab.org/nlab/show/mapping+cone). It says: “universal object with a morphism i from Y and a left homotopy from i ∘ f to the zero morphism.”

**Sources:** none listed. No primary source with a working link was found.

### Donors and receptors make diagram chases short in the salamander lemma

**Remember:** Each object receives from one diagonal side and donates to the other.

*Makes the theorem clean to state or prove.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories). arXiv math.CT, math.KT. Level 3: graduate.

**Definition.** In a double complex, take two extra quotients at each object A. The receptor is the elements killed by both outgoing maps, modulo the image of the incoming diagonal map (a horizontal map composed with a vertical one). The donor is the elements killed by the outgoing diagonal map, modulo the images of both incoming maps.

**Problem.** Salamander lemma: along each map of a double complex, the donor, the receptors and the horizontal and vertical homology form one exact sequence. The 3×3 lemma, the four and five lemmas, the snake lemma and the long exact sequence in homology follow from it.

**How the definition helps.** Donors and receptors turn each diagram lemma into small local checks of one kind. Every map of the double complex gives a map from a donor to a receptor, and these form long diagonal zigzags. A diagram lemma says that each map in such a zigzag is an isomorphism, and the salamander lemma checks this one position at a time. New lemmas, such as an n×n lemma, follow in the same way.

**nLab:** [salamander lemma](https://ncatlab.org/nlab/show/salamander+lemma). It says: “all the standard diagram chasing lemmas of homological algebra are direct and transparent consequences of the salamander lemma, such as the 3x3 lemma, the four lemma, hence the five lemma, the snake lemma”

**Sources:**

- [George M. Bergman, On diagram-chasing in double complexes, Theory and Applications of Categories 26 (2012) 60–96, arXiv:1108.0958](https://arxiv.org/abs/1108.0958)

### Truncating at kernels and quotients makes bounded-cohomology complexes bounded

**Remember:** Keep the kernel or the quotient where the complex meets the cutoff.

*True by definition.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18G80. arXiv math.KT. Level 3: graduate.

**Definition.** To cut off a cochain complex above degree n, keep the terms below n and replace the degree-n term by the kernel of its differential. To cut off below degree n, replace the degree-n term by its quotient by the image of the incoming differential. Just deleting the terms past n can change cohomology at degree n.

**Problem.** A complex whose cohomology is zero outside finitely many degrees is quasi-isomorphic to a bounded complex. A quasi-isomorphism is a chain map that induces isomorphisms on cohomology.

**How the definition helps.** These truncations keep all cohomology on the retained side and kill it beyond, so cutting at both bounds gives the result (our own). Deleting terms would lose cohomology at the edge (our own). The work goes into checking that the truncation maps are chain maps that induce isomorphisms on the kept cohomology (our own).

**Paper or page:** [Stacks Project, Derived, Lemma 13.11.5](https://stacks.math.columbia.edu/tag/05RV). It says: “where all the arrows are quasi-isomorphisms, L• bounded below, M• bounded above, and N• a bounded complex.”

**Sources:** none listed. No primary source with a working link was found.

### Starting spectral sequences from exact couples makes differentials square to zero

**Remember:** Two differentials contain two consecutive maps of an exact sequence.

*True by definition.* MSC 18G40 (Spectral sequences, hypercohomology), 55T05. arXiv math.KT. Level 3: graduate.

**Definition.** An exact couple is two objects A and E with maps A → A, A → E and E → A. These maps form a triangle that is exact at each corner. Its differential on E is the composite E → A → E. The direct approach to a filtered complex builds each page differential by lifting representatives.

**Problem.** Each differential in the spectral sequence of a filtered complex squares to zero.

**How the definition helps.** The square of E → A → E contains A → E → A in the middle, and exactness makes that composite zero (our own). The next page comes from a new exact couple, so the same argument works on every page (our own). The work goes into building the exact couple from the filtration and proving that the next couple is again exact (our own).

**Paper or page:** [Stacks Project, Homology, Lemma 12.21.2](https://stacks.math.columbia.edu/tag/011R). It says: “d = g ∘ f : E → E so that d ∘ d = 0”

**Sources:** none listed. No primary source with a working link was found.

### Axioms of a t-structure make truncation right adjoint to inclusion

**Remember:** Maps from low objects factor uniquely through the low part.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18A40. arXiv math.KT. Level 3: graduate.

**Definition.** A triangulated category has shifts and distinguished triangles, which play the role of short exact sequences. A t-structure gives two classes of objects, low and high, with no nonzero maps from low to high. Each object X sits in a distinguished triangle between its low part and its high part. For complexes the low part can instead be built by cutting off at a kernel.

**Problem.** In a t-structure, taking the low part is right adjoint to the inclusion of low objects.

**How the definition helps.** The axioms already contain both facts the proof needs, so it is two lines (our own). For a low object A, apply maps from A to the triangle of X (our own). The axioms make all maps from A to the high part and to its shift zero (our own). So maps from A to X equal maps from A to the low part (our own). The work goes into checking these axioms for complexes, using truncation at kernels (our own).

**nLab:** [t-structure](https://ncatlab.org/nlab/show/t-structure). It says: “For all objects X ∈ C there is a fiber sequence”

**Sources:** none listed. No primary source with a working link was found.

### Defining the derived category by localization makes homology factor through it

**Remember:** Homology already inverts every map that the derived category inverts.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 3: graduate.

**Definition.** The derived category is the category obtained from chain complexes by formally inverting the quasi-isomorphisms. A quasi-isomorphism is a chain map that induces isomorphisms on all homology groups. The derived category is characterized by this universal property. Over a ring, its bounded-above part can instead be modelled by complexes of projective modules up to chain homotopy.

**Problem.** Each homology functor on chain complexes factors uniquely through the derived category.

**How the definition helps.** Homology sends quasi-isomorphisms to isomorphisms by their definition, so the universal property gives the factorization (our own). With the projective model, one must first prove that it is equivalent to the localization (our own). The work goes into constructing the localization and making its maps manageable (our own).

**nLab:** [derived category](https://ncatlab.org/nlab/show/derived+category). It says: “the quasi-isomorphisms of chain complexes become true isomorphisms and that D(A) is universal with respect to this property.”

**Sources:**

- [Jean-Louis Verdier, Des catégories dérivées des catégories abéliennes, Astérisque 239](https://doi.org/10.24033/ast.364)

### Defining Verdier quotients by a universal property makes exact functors factor

**Remember:** Any exact functor that kills A passes through the quotient.

*True by definition.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 3: graduate.

**Definition.** Let A be a triangulated subcategory of B. The Verdier quotient B/A is the universal triangulated category with an exact functor from B that sends objects of A to zero. An exact functor here preserves distinguished triangles, which play the role of short exact sequences. The concrete construction formally inverts the maps whose cones lie in A.

**Problem.** Every exact functor out of B that sends A to zero factors uniquely through the Verdier quotient B/A.

**How the definition helps.** With the universal definition, the factorization is the definition (our own). The work goes into proving that the concrete construction has this universal property (our own). The key step is that an exact functor inverts a map exactly when it kills the map's cone (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “universal among all triangulated functors B → D which send objects of A to objects isomorphic to 0.”

**Sources:**

- [Jean-Louis Verdier, Des catégories dérivées des catégories abéliennes, Astérisque 239](https://doi.org/10.24033/ast.364)

### Cartesian products force a unique comonoid structure on every object

**Remember:** Deleting either output must return the input, so copying is the diagonal.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 3: graduate.

**Definition.** A cartesian monoidal category uses products as its tensor and a terminal object, which receives exactly one map from each object, as its unit. A comonoid has a copy map X → X ⊗ X and a delete map X → I. Repeated copying must agree in either order, and deleting either output of a copy must return the input. Fox's other description starts with compatible copying and deletion on every object, preserved by all maps.

**Problem.** In a cartesian monoidal category every object has exactly one comonoid structure. Copying is unchanged by swapping the outputs, and every map preserves copying and deletion.

**How the definition helps.** With the product definition, the two projections determine the copy map. Deletion is the unique map to the terminal object, so the comonoid laws force both projections of copying to be the identity. The resulting diagonal satisfies the laws and commutes with every map. The work in the other description is Fox's converse, which uses compatible comonoid structures to recover the product property.

**nLab:** [Markov category](https://ncatlab.org/nlab/show/Markov+category), [Fox's theorem](https://ncatlab.org/nlab/show/Fox%27s+theorem). It says: “In a cartesian monoidal category every object is equipped with a unique commutative comonoid structure, defined in terms of the universal property of the product.”

**Sources:**

- [T. Fox, Coalgebras and cartesian categories, Communications in Algebra 4 (1976)](https://doi.org/10.1080/00927877608822127)

### Cartesian products turn the Hopf monoid antipode into group inverse

**Remember:** Cartesian copying repeats the input, so the antipode law is the inverse law.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16T05. arXiv math.CT, math.QA. Level 3: graduate.

**Definition.** A Hopf monoid has associative multiplication μ, a unit η, and comonoid maps δ and ε for copying and deleting. These maps obey the copy and delete laws and preserve multiplication and its unit. An antipode S satisfies μ(1 ⊗ S)δ = ηε = μ(S ⊗ 1)δ, with 1 the identity map. A group object instead has multiplication, unit and inverse maps obeying the group laws as equalities of composites.

**Problem.** With categorical products as tensor, Hopf monoids are exactly group objects. In sets, they are ordinary groups.

**How the definition helps.** The Hopf monoid definition reduces to group laws because the product forces the copy and delete maps. Copying is the diagonal and deletion is the unique map to the terminal object, one that receives one map from each object. Every map respects these two maps, so compatibility with multiplication and unit is automatic. The antipode law now says that multiplying an input by its image under S in either order gives the unit. The work moves into proving that the comonoid structure is unique by checking its two projections.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “A Hopf monoid in a cartesian monoidal category V is the same as a group object in V.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Day convolution by colimit extension makes Yoneda preserve the tensor

**Remember:** Tensor the original objects before taking their presheaves of maps.

*True by definition. Confidence: medium.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18F20. arXiv math.CT. Level 3: graduate.

**Definition.** Let C be a small monoidal category, which has a tensor product of objects and a unit object. A presheaf on C is a set-valued functor that reverses arrows, such as Hom(−, X). Define the Day tensor as the extension of the tensor on such representable presheaves that preserves colimits in each variable. The other definition gives a formula, a quotient of a disjoint union of products of sets.

**Problem.** The Yoneda embedding sends X to Hom(−, X). It sends the tensor of C to the Day tensor, and the unit of C to the unit of the Day tensor.

**How the definition helps.** With the extension definition, the Day tensor of Hom(−, X) and Hom(−, Y) is Hom(−, X ⊗ Y) by construction. The unit is Hom(−, I), where I is the unit of C (our own). The nLab states that the Yoneda embedding is a strong monoidal functor. The work goes into showing that the extension exists and matches the quotient formula (our own). This uses the fact that every presheaf is a colimit of representable presheaves (our own).

**nLab:** [Day convolution](https://ncatlab.org/nlab/show/Day+convolution). It says: “The Yoneda embedding constitutes a strong monoidal functor”

**Sources:** none listed. No primary source with a working link was found.

### Mac Lane's coherence theorem is true for formal diagrams only

**Remember:** Coherence is about bracketings of letters, not about the objects you put in.

*Rules out counterexamples.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 3: graduate.

**Definition.** A formal diagram in a monoidal category is built from instances of the associator, the unitors and identities. The associator is the isomorphism from A ⊗ (B ⊗ C) to (A ⊗ B) ⊗ C, and the unitors remove the unit object. In a formal diagram, words (bracketings) in free variables index the vertices, not actual objects. Equivalently, it is a diagram in the free monoidal category on a set of generators.

**Problem.** Mac Lane's coherence theorem: in any monoidal category, every formal diagram of associators, unitors and identities commutes.

**How the definition helps.** The restriction to formal diagrams is what makes the statement true. Read literally, 'every diagram of these maps commutes' is false. In a skeleton of Set, take a countable set D. Then D × (D × D) equals (D × D) × D, but the associator between them is not the identity (Isbell's example), and this diagram is not formal. The proof is still a real argument (Mac Lane 1963).

**nLab:** [Mac Lane's proof of the coherence theorem for monoidal categories](https://ncatlab.org/nlab/show/Mac+Lane%27s+proof+of+the+coherence+theorem+for+monoidal+categories), [coherence theorem](https://ncatlab.org/nlab/show/coherence+theorem), [coherence and strictification for monoidal categories](https://ncatlab.org/nlab/show/coherence+and+strictification+for+monoidal+categories). It says: “So, in order for coherence to work, we must change it to the statement that every "formal" diagram commutes.”

**Sources:**

- [Saunders Mac Lane, Natural associativity and commutativity, Rice University Studies 49 (1963) 28–46; reprinted in Saunders Mac Lane: Selected Papers, Springer (1979)](https://doi.org/10.1007/978-1-4615-7831-4_19)

### The augmented simplex category is the free monoidal category on a monoid

**Remember:** Δₐ is the free monoidal category on one monoid, with the empty ordinal as unit.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18C15, 18N50. arXiv math.CT. Level 3: graduate.

**Definition.** The augmented simplex category Δₐ has the finite ordinals as objects: 0 = ∅, 1 = {0}, 2 = {0 &lt; 1}, and so on. Its morphisms are the order-preserving maps. Ordinal sum ⊕ (placing one order after the other) makes it a strict monoidal category, with the empty ordinal 0 as unit.

**Problem.** Monoids in a strict monoidal category B are the same as strict monoidal functors Δₐ → B. Monads in a 2-category K are the same as 2-functors into K from BΔₐ, the one-object 2-category whose morphisms form Δₐ.

**How the definition helps.** Δₐ holds one monoid and the monoid laws and nothing more, so a monoid anywhere is a functor out of Δₐ. The maps 0 → 1 and 2 → 1 make the ordinal 1 a monoid. These two maps generate all maps under ∘ and ⊕, with exactly the monoid laws as relations; this is a real, if elementary, check. The empty ordinal is needed as the unit for ⊕ and the source of the unit map.

**nLab:** [simplex category](https://ncatlab.org/nlab/show/simplex+category). It says: “thus becomes the universal category-equipped-with-a-monoid, in the sense that for any strict monoidal category”

**Sources:**

- [Saunders Mac Lane, Categories for the Working Mathematician, Graduate Texts in Mathematics 5, Springer](https://doi.org/10.1007/978-1-4757-4721-8)

### The Euler characteristic is the trace of the identity

**Remember:** Euler characteristic is dimension: create X and its dual, swap them, annihilate.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M10, 55N10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** Let X be a dualizable object in a symmetric monoidal category: it has a dual X\* with a unit map and a counit map that satisfy the triangle identities. The Euler characteristic of X is the composite I → X ⊗ X\* ≅ X\* ⊗ X → I, where I is the unit object. In words, the composite uses the unit of the duality, then the symmetry that swaps the two factors, then the counit.

**Problem.** For a chain complex of finitely generated free modules, the Euler characteristic is the alternating sum of ranks. For a Euclidean neighbourhood retract X, Σ∞₊X is dualizable, and its Euler characteristic is the alternating sum of the Betti numbers of X.

**How the definition helps.** One definition applies in every setting, and symmetric monoidal functors preserve it. In chain complexes, the symmetry carries a sign that depends on the degrees, so the trace of the identity is the alternating sum of ranks. Chains and homology are symmetric monoidal functors, so the Euler characteristic of Σ∞₊X agrees with that of its homology. In our own reading, the real work is the proof that Σ∞₊X is dualizable (Dold–Puppe duality).

**nLab:** [Euler characteristic](https://ncatlab.org/nlab/show/Euler+characteristic). It says: “Since the categorical definition is purely in terms of the symmetric monoidal structure, Euler characteristics are preserved by any symmetric monoidal functor (as long as enough of its structure maps are isomorphisms).”

**Sources:**

- [K. Ponto, M. Shulman, Traces in symmetric monoidal categories, Expositiones Mathematicae 32 (2014), arXiv:1107.6032](https://arxiv.org/abs/1107.6032)

### The Frobenius law makes every Frobenius monoid its own dual

**Remember:** Multiplication followed by the counit pairs, and the unit followed by comultiplication copairs.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16D40. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A Frobenius monoid in a category with tensor product ⊗ has an associative multiplication μ and a unit η. It also has a coassociative map δ in the reverse direction and a counit ε that removes either output of δ. The Frobenius law is (1 ⊗ μ)(δ ⊗ 1) = δμ = (μ ⊗ 1)(1 ⊗ δ), where 1 is the identity map. Over a field, the usual definition gives a finite-dimensional algebra a linear form ε whose pairing ε(xy) separates elements in both slots.

**Problem.** Every Frobenius monoid is its own dual. Over a commutative ring k, its underlying module is a direct summand of a finite free k-module.

**How the definition helps.** The Frobenius law simplifies the two composites that test whether the pairing and copairing cancel. Use ε after μ to pair two inputs and δ after η to create two outputs. The Frobenius law rewrites each composite so the unit and counit laws reduce it to the identity. In our own module argument, write the copairing of 1 as a finite sum of simple tensors to get a finite dual basis. This gives the required direct summand. In the pairing definition over a field, the work moves into building δ from the nondegenerate pairing.

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra). It says: “A Frobenius algebra A in a monoidal category is an object dual to itself.”

**Sources:** none listed. No primary source with a working link was found.

### The braid category as a free braided category makes braid groups act

**Remember:** One object gives an action of every braid group.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories), 20F36. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** Define the braid category as the free braided strict monoidal category on one object. It has one generating object and only the relations that tensor products and braidings require. Its concrete form has geometric braids as maps. Artin's presentation instead lists crossing generators σ₁, …, σₙ₋₁ and their relations.

**Problem.** In a braided monoidal category, the n-strand braid group acts on the nth tensor power of any object. For a category that is not strict, first fix a bracketing of that power.

**How the definition helps.** The free definition gives a braided monoidal functor that sends the generating object to the chosen object (our own explanation). On the maps from the nth tensor power to itself, this functor is the action. The work moves into the coherence theorem of Joyal and Street. It identifies the free category with geometric braids, so its endomorphism groups are Artin's braid groups.

**nLab:** [braided monoidal category](https://ncatlab.org/nlab/show/braided+monoidal+category). It says: “The braid category is the free braided strict monoidal category on an object.”

**Sources:**

- [André Joyal and Ross Street, Braided Tensor Categories (1993)](https://doi.org/10.1006/aima.1993.1055)

### Frobenius–Perron dimension is defined and positive in every fusion category

**Remember:** The Frobenius–Perron dimension is how fast tensor powers of X grow.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 16T05. arXiv math.QA. Level 3: graduate.

**Definition.** A fusion category is a semisimple tensor category with duals and finitely many simple objects, and its fusion ring is the ring of isomorphism classes of its objects. For an object X, let N(X) be the matrix of multiplication by \[X\] on the basis of simple objects of the fusion ring. The Frobenius–Perron dimension FPdim(X) is the largest non-negative real eigenvalue of N(X). The Perron–Frobenius theorem says that this eigenvalue exists.

**Problem.** In every fusion category, FPdim is defined for every object and is multiplicative, FPdim(X ⊗ Y) = FPdim(X)·FPdim(Y). It is at least 1 for every nonzero object.

**How the definition helps.** The Frobenius–Perron dimension uses only the fusion rules, so it exists for every fusion category. The quantum dimension, the trace of the identity, needs a pivotal or spherical structure, and even then it need not be positive in non-unitary examples. In the unitary case the two agree, so nothing is lost there. Theorems that use FPdim, such as the divisibility results of Etingof, Nikshych and Ostrik, still need their own proofs.

**nLab:** [Frobenius-Perron dimension](https://ncatlab.org/nlab/show/Frobenius-Perron+dimension). It says: “Even in spherical categories where there is a good notion of trace, there is no guarantee that the quantum dimension will be positive.”

**Sources:**

- [Pavel Etingof, Dmitri Nikshych, Viktor Ostrik, On fusion categories, Annals of Math. 162 (2005) 581–642, arXiv:math/0203060](https://arxiv.org/abs/math/0203060)
- [Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, Victor Ostrik, Tensor categories, Mathematical Surveys and Monographs 205, AMS (2015)](https://doi.org/10.1090/surv/205)

### Loop actions diagonalize fusion

**Remember:** An encircling loop acts by a scalar on each simple label.

*True by definition.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** In a complex ribbon fusion category, the simple objects form a basis for the fusion algebra, whose multiplication records tensor products. A loop labelled U around a strand labelled V defines an operator on V. Define modularity by requiring this assignment to identify the fusion algebra with all natural endomorphisms of the identity functor. These are families of operators commuting with every morphism.

**Problem.** Let S(i,j) be the trace of the double exchange of simple labels i and j, and let 1 denote the unit label. The functions i ↦ S(i,j)/S(1,j) identify the fusion algebra with a product of copies of ℂ, one per j.

**How the definition helps.** Each family acts by a scalar on each simple object, so composing families multiplies their coordinates. Our own argument closes the strand labelled j to compute its scalar. Closing multiplies the scalar by the dimension S(1,j) and produces the linked-loop entry S(i,j). The work lies in identifying nested loops with tensor products and proving equivalence with invertibility of S.

**nLab:** [modular tensor category](https://ncatlab.org/nlab/show/modular+tensor+category). It says: “straight V-line encircled by U-loop”

**Sources:**

- [Yi-Zhi Huang, Rigidity and modularity of vertex tensor categories](https://doi.org/10.1142/S0219199708003083)

### Nondegeneracy excludes singular torus matrices

**Remember:** A transparent simple object repeats the vacuum row up to a scalar.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors), 81T40. arXiv math.QA, math-ph. Level 3: graduate.

**Definition.** Work in a complex ribbon fusion category, where objects split into finitely many types of simples and have tensor products, duals, exchanges and compatible twists. A simple object is transparent if exchanging it twice with every object gives the identity. Call the category modular when its tensor unit is its only transparent simple object up to isomorphism.

**Problem.** For simple labels i and j, let S(i,j) be the categorical trace of their double exchange. The categorical trace closes the input and output lines into loops. The matrix S is invertible exactly when the category is modular.

**How the definition helps.** Transparency makes one row of S a scalar multiple of the unit row. Our own calculation uses the identity double exchange, whose trace is the product of the two dimensions. In finite-dimensional complex super vector spaces, exchanging two odd vectors changes the sign. The odd line is therefore transparent and gives a second proportional row. The modularity criterion proves the converse implication.

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

**Definition.** For an algebra A, keep with the category of A-modules its fiber functor F, which forgets the action of A and keeps the underlying object. End(F) is the algebra of natural transformations from F to itself.

**Problem.** Tannaka reconstruction: A ≅ End(F), where F is the fiber functor on the category of all A-modules. Without F, the module category alone does not determine A.

**How the definition helps.** The fiber functor holds the information that the bare category of modules loses. With F in the data, A ≅ End(F) is the enriched Yoneda lemma in disguise, as the nLab says. Without F, the statement is false: a field k and the matrix ring Mₙ(k), n ≥ 2, have equivalent module categories but are not isomorphic. The hard part that remains is reconstruction from the dualizable (finite-dimensional) modules.

**nLab:** [Tannaka duality](https://ncatlab.org/nlab/show/Tannaka+duality). It says: “The fiber functor is necessary; for example, in the context of reconstruction of associative algebras, not remembering the underlying vector spaces results in reconstructing two different algebras with equivalent module categories (cf. Morita equivalence).”

**Sources:**

- [André Joyal, Ross Street, An introduction to Tannaka duality and quantum groups, Category Theory (Como 1990), Lecture Notes in Math. 1488 (1991) 413–492](https://doi.org/10.1007/BFb0084235)
- [Pierre Deligne, Catégories tannakiennes, The Grothendieck Festschrift vol. II, Progress in Math. 87 (1990) 111–195](https://publications.ias.edu/sites/default/files/60_categoriestanna.pdf)

### No-cloning means that vector spaces have no natural diagonal

**Remember:** Cloning one chosen basis is easy; cloning every state at once is impossible.

*Makes the theorem clean to state or prove.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 81P45. arXiv quant-ph, math.CT. Level 3: graduate.

**Definition.** A cloning map on vector spaces would be a natural transformation A → A ⊗ A, for all spaces A at once. It must be coassociative and cocommutative, like the diagonal x ↦ (x, x) of a cartesian product. Naturality means that it commutes with every linear map.

**Problem.** No-cloning theorem: there is no cloning map on vector spaces, because the tensor product of vector spaces is not cartesian (not a categorical product).

**How the definition helps.** Naturality turns no-cloning into a short fact about the tensor product (Abramsky 2009, Thm. 11). Naturality is the essential condition. For a fixed space, a chosen basis gives a coassociative, cocommutative map \|b⟩ ↦ \|b⟩ ⊗ \|b⟩, but it copies only the basis states, not their superpositions. Abramsky shows that a natural diagonal on a compact closed category forces every endomorphism to be a scalar multiple of the identity.

**nLab:** [no-cloning theorem](https://ncatlab.org/nlab/show/no-cloning+theorem). It says: “Quantum theoretically, this effect is ultimately due to the non-cartesian nature of the tensor product of vector/Hilbert spaces of quantum states (category theoretically it refers to this tensor product lacking natural diagonal morphisms)”

**Sources:**

- [S. Abramsky, No-Cloning in categorical quantum mechanics, in: Semantic Techniques for Quantum Computation, CUP (2009), arXiv:0910.2401](https://arxiv.org/abs/0910.2401)
- [W. K. Wootters, W. H. Zurek, A single quantum cannot be cloned, Nature 299 (1982) 802–803](https://doi.org/10.1038/299802a0)

### In a linear exponential comonad, every coalgebra can copy and delete

**Remember:** Ask the cofree !-coalgebras to copy and delete, and all !-coalgebras can.

*Makes the theorem clean to state or prove.* MSC 18M45 (Categorical aspects of linear logic), 03B47, 18C15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** In linear logic, the exponential ! marks the formulas that you may copy and delete. A linear exponential comonad ! on a symmetric monoidal category is a lax monoidal comonad with one more condition. Every cofree !-coalgebra must carry, naturally, the structure of a comonoid in the category of coalgebras. A comonoid is an object X with a copy map X → X ⊗ X and a delete map X → I that satisfy the expected laws.

**Problem.** For a linear exponential comonad !, every !-coalgebra is a comonoid, so the category of !-coalgebras is cartesian monoidal. If the linear category has finite products, the Seely isomorphism !(A × B) ≅ !A ⊗ !B follows.

**How the definition helps.** It is enough to ask for copy and delete on the cofree coalgebras, because every coalgebra then has them too (Benton, Bierman, de Paiva and Hyland). So the non-linear types form a cartesian category without assuming products in the linear category. The Seely isomorphism follows because the cofree-coalgebra functor is a right adjoint. So Seely's earlier definition becomes a consequence.

**nLab:** [!-modality](https://ncatlab.org/nlab/show/%21-modality). It says: “It follows automatically that all !-coalgebras are comonoids, and therefore that the category of all !-coalgebras (not just the cofree ones) is cartesian monoidal.”

**Sources:**

- [N. Benton, G. Bierman, V. de Paiva, M. Hyland, Linear λ-calculus and categorical models revisited, Computer Science Logic 1992, Lecture Notes in Computer Science 702 (1993) 61–84](https://doi.org/10.1007/3-540-56992-8_6)

### Endomorphism operads make restriction of algebras ordinary composition

**Remember:** To restrict an operad algebra, compose the two operad maps.

*True by definition.* MSC 18M60 (Operads (general)). arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An operad has operations with any finite number of inputs and a rule for plugging them into one another. Its plugging rule is associative and has an identity operation. In vector spaces, the endomorphism operad of A consists of multilinear maps from copies of A to A. Define a P-algebra as a map from the operad P to this endomorphism operad, rather than as separate action maps with laws.

**Problem.** A map of operads Q → P turns every P-algebra into a Q-algebra on the same object. For example, a commutative algebra is an associative algebra.

**How the definition helps.** With the endomorphism operad definition, restriction is a composite of operad maps and therefore respects plugging and identity. Our own example uses the map from the associative operad to the commutative operad, which sends multiplication to multiplication. The work moves into proving that plugging multilinear operations makes an operad. One must also show that maps into it give exactly the usual compatible action maps.

**nLab:** [endomorphism operad](https://ncatlab.org/nlab/show/endomorphism+operad). It says: “The structure of an algebra over an operad on an object A ∈ C over an operad P is equivalently a morphism of operads ρ: P → End(A)”

**Sources:**

- [J. P. May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271 (1972)](https://doi.org/10.1007/BFb0067491)

### In a multicategory, the strong universal property of tensors gives associativity

**Remember:** A tensor product must absorb the pair A, B in any context.

*Makes the theorem clean to state or prove.* MSC 18M65 (Non-symmetric operads, multicategories, generalized multicategories), 18M05. arXiv math.CT. Level 3: graduate.

**Definition.** A multicategory has multimorphisms with a list of inputs and one output, like multilinear maps. A tensor product A ⊗ B is an object with a multimorphism A, B → A ⊗ B such that every multimorphism D₁, …, Dₘ, A, B, E₁, …, Eₙ → C factors uniquely through it, by a multimorphism D₁, …, Dₘ, A ⊗ B, E₁, …, Eₙ → C. In words, the pair A, B can be replaced by A ⊗ B inside any longer list of inputs. A multicategory with all such tensor products, and units, is called representable.

**Problem.** In a representable multicategory, the tensor products defined by this universal property are associative and unital up to coherent isomorphism. So representable multicategories are equivalent to monoidal categories (Hermida).

**How the definition helps.** Because the pair A, B can be replaced inside any longer list, both bracketings of three objects can be compared through the same maps. The plain universal property, for bilinear maps A, B → C alone, defines A ⊗ B but does not prove associativity. The version in context compares (A ⊗ B) ⊗ C and A ⊗ (B ⊗ C) through the ternary multimorphisms A, B, C → X. So the associator, and its coherence, come from uniqueness.

**nLab:** [tensor product](https://ncatlab.org/nlab/show/tensor+product), [representable multicategory](https://ncatlab.org/nlab/show/representable+multicategory). It says: “For this we need the stronger property that any multilinear map D₁,…,Dₘ,A,B,E₁,…,Eₙ → C factors uniquely through A,B → A⊗B via a multilinear map D₁,…,Dₘ, A⊗B ,E₁,…,Eₙ → C.”

**Sources:**

- [Claudio Hermida, Representable multicategories, Adv. Math. 151 (2000) 164–225](https://doi.org/10.1006/aima.1999.1877)
- [Claudio Hermida, From coherent structures to universal properties, J. Pure Appl. Algebra 165 (2001) 7–61, arXiv:math/0006161](https://arxiv.org/abs/math/0006161)

### A species with exactly one empty structure has a multiplicative inverse

**Remember:** One empty structure makes a species invertible, like a power series with constant one.

*Rules out counterexamples. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 05A15. arXiv math.CO, math.CT. Level 3: graduate.

**Definition.** A species of structures assigns to each finite set the set of structures on it, such as graphs or orders. G(0) is the set of structures on the empty set. G₊ is the part of G on nonempty sets. Inverses here live among virtual species, which allow formal differences.

**Problem.** A species G with exactly one structure on the empty set has a multiplicative inverse, given by an alternating geometric series in G₊.

**How the definition helps.** The condition G(0) = 1 lets one write G = 1 + G₊ and expand 1/(1 + G₊) as a geometric series. The series is finite on each set, because (G₊)ᵏ is empty on sets with fewer than k elements (our own remark). Without the condition, the inverse can fail to exist. For example, the species of nonempty sets has no structure on the empty set, so it has no inverse (our own example). This matches power series: a series is invertible exactly when its constant term is invertible.

**Paper or page:** [On combinatorial differential operators on species of structures](https://arxiv.org/abs/2305.05059). It says: “Let G be a species of structures such that G(0) = 1. Then the multiplicative inverse of G is given by G⁻¹ = 1/G = Σₖ≥₀ (−1)ᵏ(G₊)ᵏ”

**Sources:**

- [Arthur Gonçalves Fidalgo, On combinatorial differential operators on species of structures, arXiv:2305.05059 (2023)](https://arxiv.org/abs/2305.05059)

### Combinatorial species turn generating function identities into isomorphisms

**Remember:** A species is a kind of structure that you can move along bijections.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 05A15. arXiv math.CO, math.CT. Level 3: graduate.

**Definition.** A species is a functor from the groupoid of finite sets and bijections to finite sets. It sends each finite set to the set of all structures of some kind on it. Its exponential generating function is ∑ \|F(n)\| xⁿ/n!, where F(n) is the set of structures on an n-element set.

**Problem.** Taking exponential generating functions sends the sum, product (Day convolution) and composition (plethysm) of species to the sum, product and composition of power series. So an isomorphism of species proves an identity of generating functions.

**How the definition helps.** The operations on species are defined in terms of categories, and the generating function forgets only the sizes. The Cauchy product splits the set into two parts and puts a structure on each part. A natural isomorphism of species is then a bijective proof of the identity. The use of species for proofs such as Cayley's formula for trees is in Joyal's paper, not on the nLab page.

**nLab:** [species](https://ncatlab.org/nlab/show/species). It says: “since the generating function of the Cauchy product of species is the product of their generating functions.”

**Sources:**

- [André Joyal, Une théorie combinatoire des séries formelles, Advances in Mathematics 42 (1981) 1–82](https://doi.org/10.1016/0001-8708(81)90052-9)

### Adjoint equivalence data carry no more information than being an equivalence

**Remember:** Ask the two isomorphisms to obey the triangle laws, and the choice becomes unique.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** An adjoint equivalence is a quadruple (f, g, η, ε). Here η: 1 ≅ g f and ε: f g ≅ 1 are 2-isomorphisms (invertible 2-cells). They must satisfy the zigzag (triangle) identities of an adjunction.

**Problem.** For a fixed 1-cell f in a 2-category, the category of adjoint-equivalence data (g, η, ε) on f is either empty or equivalent to the terminal category. So these data carry no more information than the property that f is an equivalence.

**How the definition helps.** Adjoint-equivalence data are unique up to unique isomorphism when they exist, so asking for them adds no real choice. Arbitrary pairs of isomorphisms η, ε do not have this property. For this reason the Gordon–Power–Street tricategories are not algebraic, while Gurski's version with adjoint-equivalence data is. The walking adjoint equivalence is equivalent to the point, so it can serve as an interval object in 2Cat.

**nLab:** [adjoint equivalence](https://ncatlab.org/nlab/show/adjoint+equivalence), [stuff, structure, property](https://ncatlab.org/nlab/show/stuff%2C+structure%2C+property). It says: “In other words, adjoint equivalences are the way to make the property of "being an equivalence" completely into "algebraic" structure.”

**Sources:**

- [Nick Gurski, Biequivalences in tricategories, Theory and Applications of Categories 26 no. 14 (2012) 349–384](http://www.tac.mta.ca/tac/volumes/26/14/26-14abs.html)

### In a bicategory, functions are the relations that have a right adjoint

**Remember:** A map is a morphism that has a right adjoint.

*Makes the theorem clean to state or prove.* MSC 18N10 (2-categories, bicategories, double categories), 18B10, 18A40. arXiv math.CT. Level 3: graduate.

**Definition.** A bicategory is like a 2-category, but composition is associative only up to coherent isomorphism. In a bicategory K, a morphism f : a → b is called a map if it has a right adjoint f\* : b → a. Map K is the sub-bicategory of K that keeps only the maps.

**Problem.** In the bicategory Rel, the maps are exactly the graphs of functions, so Map Rel ≃ Set. For C with finite limits, Map Span(C) ≃ C, where a span from x to y is a pair x ← s → y.

**How the definition helps.** The definition turns 'being a function' into a property that you can state in any bicategory. A relation has a right adjoint exactly when it is total and single-valued. In Prof, the maps into a Cauchy complete category are exactly the representable profunctors. This property lets Carboni and Walters, and later Lack, Walters and Wood, characterize bicategories of relations and spans abstractly, which is the real work.

**nLab:** [bicategory of maps](https://ncatlab.org/nlab/show/bicategory+of+maps). It says: “In the bicategory Rel of sets and relations, a relation is a map if and only if it is the graph of a function. Consequently, Map Rel is equivalent to Set.”

**Sources:**

- [A. Carboni, R. F. C. Walters, Cartesian bicategories I, Journal of Pure and Applied Algebra 49 (1987) 11–32](https://doi.org/10.1016/0022-4049(87)90121-6)

### Combinatorial model categories can be built from a small amount of data

**Remember:** Combinatorial: small sets of generating maps, in a category where every object is small.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18C35, 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A combinatorial model category is a model category that is cofibrantly generated and whose underlying category is locally presentable. Cofibrantly generated means that small sets of maps generate the cofibrations and the acyclic cofibrations. Locally presentable means that the category has all small colimits and that a set of small objects generates it under colimits.

**Problem.** Smith's theorem: on a locally presentable category, a class of weak equivalences and a set of generating cofibrations give a combinatorial model structure, under simple conditions. So left Bousfield localizations of left proper combinatorial model categories exist.

**How the definition helps.** In a locally presentable category every object is small, so the small object argument works for every set of maps. Dugger's theorem adds that combinatorial model categories are, up to Quillen equivalence, localizations of simplicial presheaves. A left Bousfield localization keeps the cofibrations and adds weak equivalences. Top with its standard model structure is cofibrantly generated but not combinatorial, so these results do not apply to it directly.

**nLab:** [combinatorial model category](https://ncatlab.org/nlab/show/combinatorial+model+category). It says: “Jeff Smith's theorem characterizes combinatorial model categories just in terms of weak equivalences and generating cofibrations, hence using only two third of the input data explicitly required.”

**Sources:**

- [Daniel Dugger, Combinatorial model categories have presentations, Adv. Math. 164 (2001), arXiv:math/0007068](https://arxiv.org/abs/math/0007068)
- [Tibor Beke, Sheafifiable homotopy model categories, 2000, arXiv:math/0102087](https://arxiv.org/abs/math/0102087)

### In cellular model categories, left Bousfield localizations always exist

**Remember:** Cellular means the cells are compact and the cofibrations are honest inclusions.

*Rules out counterexamples. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cofibrantly generated model category has sets I and J of maps that generate its cofibrations and its trivial cofibrations. A cellular model category is a cofibrantly generated model category whose generating sets satisfy three conditions. The domains and codomains of I are compact relative to I, and the domains of J are small relative to I. Cofibrations are effective monomorphisms, that is, monomorphisms that are the equalizer of their own cokernel pair.

**Problem.** In a left proper cellular model category C, the left Bousfield localization at any set S of maps exists (Hirschhorn). It is a model structure on C in which the maps in S become weak equivalences, in a universal way.

**How the definition helps.** In our own reading, the compactness and smallness conditions on the cells are what Hirschhorn's construction uses. Left proper means that pushout along a cofibration keeps weak equivalences. The conditions pass to diagram categories with the projective structure and to over-categories, so the theorem applies widely. The existence proof itself is long; the definition makes it possible, not trivial.

**nLab:** [cellular model category](https://ncatlab.org/nlab/show/cellular+model+category). It says: “For cellular model categories C that are left proper model categories all left Bousfield localizations L<sub>S</sub> C at any set S of morphisms are guaranteed to exist.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, AMS (2002)](https://doi.org/10.1090/surv/099)

### In proper model categories, ordinary pullbacks along fibrations are homotopy pullbacks

**Remember:** Proper means weak equivalences survive pullback along fibrations, or pushout along cofibrations.

*Rules out counterexamples.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category is a category with weak equivalences, fibrations and cofibrations, used to do homotopy theory. It is right proper if the pullback of a weak equivalence along a fibration is a weak equivalence. It is left proper if the pushout of a weak equivalence along a cofibration is a weak equivalence.

**Problem.** In a right proper model category, an ordinary pullback along a fibration is a homotopy pullback, for all objects. M is right proper exactly when base change along every weak equivalence X → Y gives a Quillen equivalence M/X ⇄ M/Y (Rezk).

**How the definition helps.** Properness makes ordinary pullbacks along fibrations homotopy pullbacks without fibrant replacement. In a general model category this holds only between fibrant objects, and dually for pushouts. Some natural model categories are not proper; simplicial associative algebras are not left proper, but Rezk shows they are Quillen equivalent to proper ones. Right properness is a property of the presentation, not of the underlying (∞,1)-category.

**nLab:** [proper model category](https://ncatlab.org/nlab/show/proper+model+category). It says: “In a left proper model category, ordinary pushouts along cofibrations are homotopy pushouts. Dually, in a right proper model category, ordinary pullbacks along fibrations are homotopy pullbacks.”

**Sources:**

- [Charles Rezk, Every homotopy theory of simplicial algebras admits a proper model, Topology and its Applications 119 (2002) 65–94, arXiv:math/0003065](https://arxiv.org/abs/math/0003065)

### Lifting tests make model category cofibrations stable under pushouts

**Remember:** A pushout transfers each lifting problem back to the original cofibration.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category specifies classes of maps called cofibrations, fibrations and weak equivalences. An acyclic fibration is a fibration that is also a weak equivalence. A cofibration is a map that fills every square with itself on the left and an acyclic fibration on the right.

**Problem.** In a model category, a pushout of a cofibration along any map is again a cofibration. Cofibrations are also closed under composition and retracts.

**How the definition helps.** The lifting test makes pushout closure immediate because a square for the pushed-out map restricts to a square for the original map. Its filler extends by the defining property of the pushout. Successive fillers prove closure under composition, and a filler for the larger map restricts to a retract. These arguments apply to any class defined by left lifting. For model categories presented by separate classes and axioms, the factorization axiom and retract argument give the lifting description (our own summary).

**nLab:** [weak factorization system](https://ncatlab.org/nlab/show/weak+factorization+system). It says: “ℒ is closed under forming pushouts of morphisms in 𝒞 ("cobase change").”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “Cofibrations can be characterized as the maps which have the left lifting property with respect to acyclic fibrations”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Lifting tests make two model category classes determine the third

**Remember:** Two map classes determine the lifting tests for the missing class.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT. Level 3: graduate.

**Definition.** A model category has three classes of maps called cofibrations, fibrations and weak equivalences. A map is acyclic if it is a weak equivalence. A left lifting class consists of maps that fill every square with themselves on the left and a test map on the right. The right lifting class uses test maps on the left instead.

**Problem.** On a fixed category, any two of the three classes of a model structure determine the third.

**How the definition helps.** Lifting tests recover the missing class directly, or recover two subclasses whose composites give that class. Cofibrations and weak equivalences identify the acyclic cofibrations, whose right lifting class is the fibrations. Fibrations and weak equivalences identify the acyclic fibrations, whose left lifting class is the cofibrations. With only cofibrations and fibrations, lifting identifies both acyclic classes. Their composites are exactly the weak equivalences, by the factorization and weak equivalence axioms. When the axioms list the three classes separately, factorization and the retract argument establish these lifting descriptions (our own summary).

**nLab:** [model category](https://ncatlab.org/nlab/show/model+category). It says: “Given a model category structure, any two of the three classes of special morphisms (cofibrations, fibrations, weak equivalences) determine the third”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Model structures make the homotopy category locally small

**Remember:** Replace objects by fibrant-cofibrant ones, and the maps become plain homotopy classes.

*Rules out counterexamples.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model structure on a category with weak equivalences adds two more classes of maps, the fibrations and the cofibrations, which satisfy lifting and factorization axioms. An object is fibrant-cofibrant when its map to the terminal object is a fibration and its map from the initial object is a cofibration.

**Problem.** If C has a model structure, every morphism of the homotopy category C\[W⁻¹\] is a homotopy class of maps between fibrant-cofibrant replacements. So C\[W⁻¹\] has a set of morphisms between any two objects when C does.

**How the definition helps.** A model structure turns every morphism of the homotopy category into a homotopy class of ordinary maps, and these form a set. In a general localization, morphisms are zigzags whose backward arrows are weak equivalences. So C\[W⁻¹\] need not be locally small, even if C is. The model structure is extra data, and not every category with weak equivalences has one.

**nLab:** [homotopy category of a model category](https://ncatlab.org/nlab/show/homotopy+category+of+a+model+category), [homotopy category](https://ncatlab.org/nlab/show/homotopy+category), [model category](https://ncatlab.org/nlab/show/model+category). It says: “A model category structure (𝒞(W,Fib,Cof)) on some category 𝒞 is a means to guarantee the local smallness and to improve the tractability of the homotopy category”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Pushout-product and unit axioms make the homotopy category closed monoidal

**Remember:** Tensor and internal hom respect cofibrations jointly, and a cofibrant unit still acts as unit.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18M05. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A monoidal model category is a closed monoidal category with a model structure that satisfies two axioms. The pushout-product axiom says that the pushout-product of two cofibrations is a cofibration, and that it is acyclic (also a weak equivalence) if one of the two is acyclic. Here the pushout-product of f : A → B and g : C → D is the map to B ⊗ D from the pushout of A ⊗ D and B ⊗ C over A ⊗ C. The unit axiom says that QI ⊗ X → X is a weak equivalence for a cofibrant replacement QI of the unit I and every cofibrant X.

**Problem.** The homotopy category of a monoidal model category is closed monoidal, with the derived tensor product ⊗ᴸ as its tensor product (Hovey).

**How the definition helps.** The two axioms let the tensor product and its unit pass to the homotopy category. The pushout-product axiom makes ⊗ a left Quillen bifunctor, so it has a left derived functor, and the associator descends. The unit axiom ensures that the unit stays a unit for ⊗ᴸ. If the unit is cofibrant, the unit axiom follows from the pushout-product axiom by Ken Brown's lemma.

**nLab:** [monoidal model category](https://ncatlab.org/nlab/show/monoidal+model+category). It says: “In short, the pushout-product axiom is the model-category theoretic way to ensure that not just the tensor product, but also the internal hom as well as their joint relatin in a two-variable adjunction are homotopically meaningful.”

**Sources:**

- [Mark Hovey, Monoidal model categories, arXiv:math/9803002 (1998)](https://arxiv.org/abs/math/9803002)
- [Stefan Schwede, Brooke Shipley, Algebras and modules in monoidal model categories, Proc. London Math. Soc. 80 (2000) 491–511, arXiv:math/9801082](https://arxiv.org/abs/math/9801082)
- [Mark Hovey, Model Categories, AMS Mathematical Surveys and Monographs 63 (1999)](https://doi.org/10.1090/surv/063)

### Quillen adjunctions have equivalent left and right preservation tests

**Remember:** Adjunction moves a lifting problem from one side to the other.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category has three classes of maps called cofibrations, fibrations and weak equivalences. A map is acyclic if it is a weak equivalence. In a lifting test, a diagonal must fill every commutative square with the given left and right maps. A Quillen adjunction is an adjunction whose left adjoint preserves cofibrations and acyclic cofibrations.

**Problem.** An adjunction between model categories is Quillen exactly when its right adjoint preserves fibrations and acyclic fibrations.

**How the definition helps.** The lifting descriptions of the map classes let the adjunction carry each test to the other side. A filler for the square with left map L(f) and right map g corresponds to one for f and R(g). Testing against acyclic cofibrations gives the test for fibrations. Testing against cofibrations gives the test for acyclic fibrations. In the axioms that list the three classes separately, factorization and the retract argument establish their lifting descriptions (our own summary).

**nLab:** [Quillen adjunction](https://ncatlab.org/nlab/show/Quillen+adjunction). It says: “A left adjoint L between model categories preserves acyclic cofibrations precisely if its right adjoint R preserves fibrations.”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “F preserves cofibrations and acyclic cofibrations or, equivalently by the closed model axioms, such that G preserves fibrations and acyclic fibrations.”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Reedy fibrancy makes totalization homotopy invariant

**Remember:** Tot maps out of the cofibrant Δ, so it needs a fibrant target.

*Rules out counterexamples. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A cosimplicial simplicial set X• is a sequence of simplicial sets X⁰, X¹, … with coface and codegeneracy maps between them. It is Reedy fibrant when each matching map Xⁿ → MⁿX is a Kan fibration (the simplicial form of a fibration). The matching object MⁿX is a limit built from the lower levels along the codegeneracy maps. The totalization Tot(X•) is the simplicial set of maps from Δ to X• in cosimplicial simplicial sets, where Δ is the cosimplicial simplicial set of standard simplices.

**Problem.** Totalization sends degreewise weak equivalences between Reedy fibrant cosimplicial simplicial sets to weak equivalences.

**How the definition helps.** Tot is a mapping space out of the Reedy cofibrant object Δ, and such mapping spaces respect weak equivalences between fibrant objects. So Tot is homotopy invariant on Reedy fibrant objects. Without the fibrancy condition, homotopy invariance fails in general. The page lists special cases where it still holds, such as cosimplicial groupoids.

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

**Definition.** A model category specifies classes of maps called cofibrations, fibrations and weak equivalences. Let D be a small category and suppose the projective model structure on D-shaped diagrams exists. In this structure, a map is a fibration or weak equivalence exactly when it is one at each entry. The colimit functor is left adjoint to the constant diagram functor.

**Problem.** The colimit functor for the projective model structure is left Quillen, meaning it preserves cofibrations and cofibrations that are weak equivalences.

**How the definition helps.** The projective definition lets us test the right adjoint at each entry, where it does nothing to the map. Thus the constant diagram functor preserves fibrations and fibrations that are weak equivalences (our own explanation). The equivalence of the two Quillen adjunction tests gives the claim. The injective structure instead tests cofibrations at each entry, so this fibration argument does not apply there. The main work is proving that the projective structure exists, for example under the generating hypotheses in Hirschhorn’s Theorem 11.6.1.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “When these model structures exist (as they do when C is combinatorial), limit and colimit constitute then two sSet-enriched Quillen adjunctions”

**Wikipedia:** [Model category](https://en.wikipedia.org/wiki/Model_category). It says: “in one, the so-called projective model structure, fibrations and weak equivalences are those maps of functors which are fibrations and weak equivalences when evaluated at each object of C.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Two-out-of-six makes weak equivalences behave like isomorphisms

**Remember:** If both overlapping pairs are weak equivalences, so is everything in the chain.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** Weak equivalences are the maps of a category that you want to treat as isomorphisms. A class W of morphisms satisfies 2-out-of-6 if the following holds for composable maps u, v, w: if the composites wv and vu are in W, then u, v, w and wvu are all in W. A homotopical category (Dwyer, Hirschhorn, Kan and Smith) has a class of weak equivalences that contains the identities and satisfies 2-out-of-6.

**Problem.** If W contains the identities and satisfies 2-out-of-6, then W contains all isomorphisms and satisfies 2-out-of-3. If W also admits a calculus of fractions, 2-out-of-6 is equivalent to saturation: every map that becomes invertible in C\[W⁻¹\] is in W (Kashiwara–Schapira).

**How the definition helps.** 2-out-of-6 is a simple property of isomorphisms that gives the other wanted axioms. So it turns saturation, a condition about the localization, into a check on chains of three maps. A similar result holds when good cofibrations are present (Blumberg–Mandell). The equivalence with saturation needs these extra hypotheses; 2-out-of-6 alone does not give it.

**nLab:** [two-out-of-six property](https://ncatlab.org/nlab/show/two-out-of-six+property), [category with weak equivalences](https://ncatlab.org/nlab/show/category+with+weak+equivalences). It says: “Suppose W admits a calculus of fractions. Then W satisfies two-out-of-six if and only if it is saturated.”

**Sources:**

- [William G. Dwyer, Philip S. Hirschhorn, Daniel M. Kan, Jeffrey H. Smith, Homotopy Limit Functors on Model Categories and Homotopical Categories, AMS Mathematical Surveys and Monographs 113, 2004](https://doi.org/10.1090/surv/113)
- [Masaki Kashiwara, Pierre Schapira, Categories and Sheaves, Springer, 2006 (7.1.20)](https://doi.org/10.1007/3-540-27950-4)

### Whitehead's theorem is a formal lemma about model categories

**Remember:** Between fibrant-cofibrant objects, a weak equivalence is a real homotopy equivalence.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55P10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A model category is a category with three classes of maps: weak equivalences, fibrations and cofibrations. They satisfy lifting, factorization and two-out-of-three axioms. An object is fibrant if its map to the terminal object is a fibration, and cofibrant if the map from the initial object is a cofibration. In the classical model structure on Top, the weak equivalences are the weak homotopy equivalences (maps that give isomorphisms on all homotopy groups), and the cofibrant objects are the retracts of cell complexes.

**Problem.** Whitehead's theorem says that each weak homotopy equivalence between CW complexes is a homotopy equivalence.

**How the definition helps.** The axioms of a model category already contain the argument, so the theorem becomes a corollary. In any model category, a short argument with the factorization and lifting axioms shows that a weak equivalence between fibrant-cofibrant objects is a homotopy equivalence. In Top with the classical model structure, every space is fibrant and CW complexes are cofibrant. So Whitehead's theorem follows at once. The work moves into the construction of the model structure on Top. That construction needs the small object argument and facts about Serre fibrations.

**nLab:** [Introduction to Homotopy Theory](https://ncatlab.org/nlab/show/Introduction+to+Homotopy+Theory), [Whitehead theorem](https://ncatlab.org/nlab/show/Whitehead+theorem), [model category](https://ncatlab.org/nlab/show/model+category). It says: “Let 𝒞 be a model category. A weak equivalence between two objects which are both fibrant and cofibrant is a homotopy equivalence.”

**Sources:**

- [J. H. C. Whitehead, Combinatorial homotopy. I, Bulletin of the AMS 55 (1949) 213–245](https://doi.org/10.1090/s0002-9904-1949-09175-9)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Categories of fibrant objects are enough to build a homotopy category

**Remember:** Keep only fibrations and path objects, and you can still form the homotopy category.

*Makes the theorem clean to state or prove.* MSC 18N45 (Categories of fibrations, relations to \\(K\\)-theory, relations to type theory), 18N55. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** A category of fibrant objects is a category with weak equivalences and fibrations in which every object is fibrant. Every object has a path object, which plays the role of the space of paths in it. There are no cofibrations.

**Problem.** In a category of fibrant objects, every morphism of the homotopy category is a span of length one whose backward leg is an acyclic fibration (Brown). Locally Kan simplicial sheaves form such a category, and its hom-sets compute generalized sheaf cohomology.

**How the definition helps.** Fibrations alone are enough to describe the homotopy category by short spans, so cofibrations are not needed. Brown dropped all axioms on cofibrations and kept only fibrations, with all objects fibrant. Abelian sheaf cohomology is a special case of the generalized cohomology. So the weaker definition reaches examples where cofibrations do not exist or are hard to use.

**nLab:** [category of fibrant objects](https://ncatlab.org/nlab/show/category+of+fibrant+objects). It says: “In particular, it is sufficient for giving a convenient construction of the homotopy category in terms of spans of length one.”

**Sources:**

- [Kenneth S. Brown, Abstract homotopy theory and generalized sheaf cohomology, Trans. Amer. Math. Soc. 186 (1973) 419–458](https://doi.org/10.1090/s0002-9947-1973-0341469-9)

### For isofibrations, strict pullbacks of categories are homotopy pullbacks

**Remember:** An isofibration lets you lift every isomorphism in the base exactly.

*Rules out counterexamples.* MSC 18N45 (Categories of fibrations, relations to \\(K\\)-theory, relations to type theory), 18N40, 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A functor p: E → B is an isofibration if it lifts isomorphisms exactly. That is, for every object e of E and every isomorphism φ: p(e) ≅ b in B, there is an isomorphism ψ: e ≅ e' in E with p(ψ) = φ.

**Problem.** If one of two functors into a category B is an isofibration, their strict pullback is equivalent to their weak (pseudo) pullback. So it does not change when a category is replaced by an equivalent one.

**How the definition helps.** Lifting isomorphisms exactly lets the strict pullback capture every object of the weak pullback up to isomorphism. A strict pullback of arbitrary functors can change when you replace a category by an equivalent one, so it is not a 2-categorical construction. The nLab explains the result by the role of isofibrations as the fibrations of the canonical model structure on Cat. The definition deliberately breaks the principle of equivalence for this purpose.

**nLab:** [isofibration](https://ncatlab.org/nlab/show/isofibration). It says: “For example, any strict pullback of an isofibration is also a weak pullback.”

**Sources:**

- [Ronald Brown, Fibrations of groupoids, Journal of Algebra 15 (1970) 103–132](https://doi.org/10.1016/0021-8693(70)90089-X)

### Augmented simplicial sets make the join preserve colimits in each variable

**Remember:** Allow the empty simplex, and the join becomes a tensor product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** Augmented simplicial sets have an extra level of (−1)-simplices, called the augmentation. The join S ⋆ T of augmented simplicial sets is the Day convolution product (the standard extension of a monoidal product from a category to its presheaves) for ordinal sum on the augmented simplex category. Its n-simplices are pairs of an i-simplex of S and a j-simplex of T with i + j = n − 1, where i, j ≥ −1.

**Problem.** The join of augmented simplicial sets preserves colimits in each variable separately. So the join of a horn with a simplex is the union of the joins of the faces of the horn with that simplex.

**How the definition helps.** As a Day convolution, the join is a tensor product, and such products preserve colimits in each variable. On plain simplicial sets, the join commutes only with connected colimits. For plain simplicial sets, one uses instead the functor S ⋆ (−) into S/sSet, which preserves colimits.

**nLab:** [join of simplicial sets](https://ncatlab.org/nlab/show/join+of+simplicial+sets). It says: “Recall that the join of augmented simplicial sets S ⋆ T is a cocontinuous functor in each of its separate arguments S and T (this is true generally of Day convolution products).”

**Sources:**

- [P. J. Ehlers, T. Porter, Joins for (Augmented) Simplicial Sets, Journal of Pure and Applied Algebra 145 (2000) 37–44, arXiv:math/9904039](https://arxiv.org/abs/math/9904039)

### Fat geometric realization is homotopy invariant because it leaves out degeneracies

**Remember:** Fat realization forgets the degeneracies, so it never collapses anything.

*Rules out counterexamples.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** The fat geometric realization ‖X•‖ of a simplicial space X• glues the pieces Xₙ × Δⁿ along the face maps only. Formally, it is the coend of Xₙ × Δⁿ over the category of finite ordinals and injective maps. It does not divide out by the degeneracy maps.

**Problem.** First claim: if f : X• → Y• is a homotopy equivalence in each degree, then ‖f‖ is a homotopy equivalence. Second claim: if each Xₙ has the homotopy type of a CW complex, so does ‖X•‖. For the ordinary realization both claims fail in general.

**How the definition helps.** In our own reading, the fat realization is homotopy invariant because it glues only along cofibrations (inclusions with the homotopy extension property). It uses only face maps, so it is built by gluing along the inclusions ∂Δⁿ × Xₙ ⊂ Δⁿ × Xₙ, which are always cofibrations. This gives the homotopy invariance (Segal 1974, Prop. A.1). The ordinary realization divides out by the degeneracies, and these quotients can be badly behaved. So there, degreewise homotopy equivalences need not give homotopy equivalences. The price is that the fat realization is bigger: the fat realization of the point is an infinite-dimensional contractible ball, not a point. For good simplicial spaces the natural map ‖X•‖ → \|X•\| is a homotopy equivalence, so the two agree up to homotopy where the ordinary one is well behaved.

**nLab:** [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “If f : X• → Y• is degreewise a homotopy equivalence, then also ‖f‖ is a homotopy equivalence.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Minimal Kan fibrations are fibre bundles

**Remember:** In a minimal fibration, homotopic simplices with the same boundary are equal.

*Makes the theorem clean to state or prove.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10, 55R05. arXiv math.AT. Level 3: graduate.

**Definition.** A Kan fibration is a map of simplicial sets with the lifting property for filling horns. A Kan fibration is minimal under this condition: take two simplices in the same fibre with the same boundary. If they are homotopic relative to their boundary, they must be equal.

**Problem.** Every minimal Kan fibration is locally trivial over each simplex of its base, so it is a fibre bundle. Hence the geometric realization of every Kan fibration is a Serre fibration.

**How the definition helps.** A minimal fibration has no spare homotopic copies of simplices, so it is rigid enough to be locally trivial. A short induction shows that a fibrewise homotopy equivalence between minimal fibrations is an isomorphism. Every Kan fibration deformation retracts onto a minimal one, which also needs an inductive argument. The realization of a fibre bundle is a fibre bundle, and so a Serre fibration.

**nLab:** [minimal Kan fibration](https://ncatlab.org/nlab/show/minimal+Kan+fibration). It says: “Minimal Kan fibrations over connected bases happen to be fiber bundles, locally trivial over each simplex”

**Sources:**

- [P. Gabriel, M. Zisman, Calculus of Fractions and Homotopy Theory, Ergebnisse der Mathematik 35, Springer (1967)](https://doi.org/10.1007/978-3-642-85844-4)
- [P. G. Goerss, J. F. Jardine, Simplicial Homotopy Theory, Progress in Mathematics 174, Birkhäuser (1999)](https://doi.org/10.1007/978-3-0348-8707-6)

### Realization of proper simplicial spaces respects levelwise weak equivalences

**Remember:** In a proper simplicial space, degenerate simplices include as cofibrations.

*Rules out counterexamples.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** A simplicial topological space X• is proper if, in each degree n, the inclusion sXₙ ⊂ Xₙ of the degenerate simplices is a closed cofibration. X• is good if every degeneracy map Xₙ₋₁ → Xₙ is a closed cofibration, and good implies proper.

**Problem.** An objectwise weak homotopy equivalence X• → Y• between proper simplicial spaces gives a weak homotopy equivalence \|X•\| → \|Y•\| of geometric realizations.

**How the definition helps.** Properness makes the realization a sequence of gluings along cofibrations, and such gluings respect weak equivalences. Gluing along a map that is not a cofibration need not respect weak equivalences (our own reading). So an induction over the skeleta proves the theorem. Goodness is often easier to check than properness.

**nLab:** [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “If X• → Y• is an objectwise weak homotopy equivalence between proper simplicial spaces, then the induced map \|X•\| → \|Y•\| is a weak homotopy equivalence.”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer, 1972](https://doi.org/10.1007/BFb0067491)
- [J. Peter May, E∞ spaces, group completions, and permutative categories, in New Developments in Topology, London Math. Soc. Lecture Note Series 11, 1974, 61–94](https://doi.org/10.1017/CBO9780511662607.008)

### The 0-simplex has no horns, so the empty groupoid is Kan

**Remember:** A horn is a simplex minus one face, and a point has no face to miss.

*Rules out counterexamples.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 3: graduate.

**Definition.** The k-th horn Λₖ\[n\] of the n-simplex Δ\[n\] is the union of all faces of Δ\[n\] except the k-th one. It is defined only for n ≥ 1, so the 0-simplex has no horn at all.

**Problem.** The empty simplicial set, the nerve of the empty groupoid, is a Kan complex. Every map out of the empty simplicial set is a Kan fibration.

**How the definition helps.** Because horns start at n ≥ 1, the empty simplicial set is never a horn, so nothing asks it for a filler. If one declared the empty simplicial set a horn of Δ\[0\], a filler would be a vertex, and the empty simplicial set would fail to be Kan. A side effect is that a Kan fibration need not be surjective, unlike an acyclic Kan fibration.

**nLab:** [horn](https://ncatlab.org/nlab/show/horn). It says: “In particular one must not declare a would-be horn of the 0-simplex to be itself the empty simplicial set, as that would make the nerve of the empty groupoid fail to be a Kan complex”

**Sources:** none listed. No primary source with a working link was found.

### Transferring the model structure makes Sing preserve weak equivalences by definition

**Remember:** Call a map of spaces a weak equivalence when Sing makes it one.

*True by definition.* MSC 18N50 (Simplicial sets, simplicial objects), 18N40, 55U10. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** The singular simplicial set Sing(X) of a space X has the continuous maps from the standard n-simplex into X as its n-simplices. A map of topological spaces f : X → Y is a weak equivalence when the map Sing(X) → Sing(Y) is a weak equivalence of simplicial sets. This is the model structure on spaces transferred from simplicial sets along the adjunction \|−\| ⊣ Sing, where \|−\| is geometric realization.

**Problem.** The singular complex functor Sing : Top → sSet preserves weak equivalences.

**How the definition helps.** With the transferred model structure, the statement is true by definition. The traditional definitions say that a weak equivalence of simplicial sets is a map whose geometric realization is a weak homotopy equivalence. With those definitions, the proof needs two facts. One is the 2-out-of-3 property: if two of f, g and g ∘ f are weak equivalences, so is the third. The other is that \|Sing X\| → X is a weak homotopy equivalence (a CW replacement). With the transferred definition, the real content moves to the theorem that the transferred and the classical model structures agree.

**nLab:** [singular simplicial complex](https://ncatlab.org/nlab/show/singular+simplicial+complex). It says: “The classical model structure on topological spaces can be defined to be transferred from simplicial sets, in which case the singular complex preserves weak equivalences by definition.”

**Sources:**

- [Daniel G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Testing local equivalences on local objects makes them invertible there

**Remember:** Testing against both endpoints supplies both inverse identities.

*True by definition.* MSC 18N55 (Localizations (e.g., simplicial localization, Bousfield localization)), 55P60. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** Fix a set S of maps in an ∞-category. An object is S-local if each map in S induces an equivalence of spaces of maps into it. A map is an S-equivalence if it induces an equivalence of spaces of maps into every S-local object.

**Problem.** An S-equivalence between S-local objects is an equivalence.

**How the definition helps.** Testing on the two endpoints makes the inverse visible because both endpoints qualify as local objects (our own explanation). Suppose f goes from X to Y. Testing into X gives g with g ∘ f homotopic to the identity on X. Testing into Y shows that f ∘ g and the identity on Y agree up to homotopy, since they agree after precomposition with f. In the alternative presentation, the maps are defined by becoming invertible after a localization that has a fully faithful right adjoint. The work there is constructing the localization and proving that its inverted maps are exactly the maps detected by local objects.

**nLab:** [local object](https://ncatlab.org/nlab/show/local+object). It says: “A morphism f : x → y in C is an S-local morphism or S-equivalence if for every S-local object c the induced morphism”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Cartesian fibrations are families of ∞-categories that vary functorially

**Remember:** Enough Cartesian lifts turn a correspondence into a functor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18D30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A Cartesian fibration of simplicial sets is an inner fibration p : X → Y (a map whose fibers are ∞-categories) such that every edge of Y has a p-Cartesian lift with any given target. Cartesian edges play the role of 'pullback along a morphism'.

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

**Definition.** A simplicial space X is a sequence of spaces X₀, X₁, X₂, … with face and degeneracy maps; think of Xₙ as the space of strings of n arrows. A Segal space is a Reedy-fibrant simplicial space (a technical condition that makes fibre products behave well) whose Segal maps are equivalences. The Segal map goes from Xₙ to the fibre product of n copies of X₁ over X₀, the space of n composable arrows. A Segal space is complete if the subspace of invertible arrows in X₁ is equivalent to the space of objects X₀.

**Problem.** A functor of ordinary categories is an equivalence exactly when the induced map of Rezk's classifying diagrams, which are complete Segal spaces, is a levelwise weak equivalence. For plain nerves, which are complete only for gaunt categories, such a map detects only isomorphism of categories.

**How the definition helps.** Completeness removes the models that do not respect equivalence of categories. A category is gaunt when its only isomorphisms are identities. Rezk's classifying diagram is built from groupoids of isomorphisms of diagrams, and it is complete. The model structure for complete Segal spaces then presents the (∞,1)-category of (∞,1)-categories.

**nLab:** [complete Segal space](https://ncatlab.org/nlab/show/complete+Segal+space), [Segal space](https://ncatlab.org/nlab/show/Segal+space). It says: “this says that if a morphism is an equivalence under the explicit composition operation then it is already a morphism in X₀”

**Sources:**

- [Charles Rezk, A model for the homotopy theory of homotopy theory, Trans. Amer. Math. Soc. 353 (2001) 973–1007, arXiv:math/9811037](https://arxiv.org/abs/math/9811037)

### In an ∞-topos every colimit is van Kampen

**Remember:** In an ∞-topos, a family over a colimit equals compatible families over the pieces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18A30. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A colimit is van Kampen if it is stable under pullback and satisfies descent. Equivalently, the slice construction x ↦ C/x sends it to a limit of categories. In words, an object over the colimit is the same as a compatible system of objects over its pieces.

**Problem.** A presentable (∞,1)-category is an ∞-topos exactly when all its colimits are van Kampen. So, with the circle as the coequalizer of 1 ⇉ 1, descent in ∞-groupoids gives ΩS¹ ≃ ℤ.

**How the definition helps.** Because every colimit is van Kampen, descent computes loop spaces directly. In Set and other 1-toposes, not all colimits are van Kampen; the coequalizer 1 ⇉ 1 → 1 is not. The characterization follows from Theorem 6.1.3.9 of Higher Topos Theory. The nLab notes that this exact ∞-categorical form may not be in the literature.

**nLab:** [van Kampen colimit](https://ncatlab.org/nlab/show/van+Kampen+colimit), [(infinity,1)-topos](https://ncatlab.org/nlab/show/%28infinity%2C1%29-topos). It says: “gives a concise proof that the loop space of the circle is equivalent to the integers”

**Sources:**

- [Pawel Sobocinski, Tobias Heindel, Being Van Kampen is a universal property, Log. Methods Comput. Sci. 7 (2011), arXiv:1101.4594](https://arxiv.org/abs/1101.4594)
- [Jacob Lurie, Higher Topos Theory, Annals of Mathematics Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### In hypercomplete ∞-toposes the Whitehead theorem holds by definition

**Remember:** Hypercomplete means homotopy sheaves see everything.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P10. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** An ∞-topos (an (∞,1)-topos, a homotopy version of a category of sheaves) is hypercomplete if the Whitehead theorem holds in it. That is, every ∞-connected morphism is an equivalence. An ∞-connected morphism is one that is an isomorphism on all homotopy sheaves.

**Problem.** The Whitehead theorem says that a map that gives isomorphisms on all homotopy groups is an equivalence. This holds in ∞Grpd, the ∞-category of spaces. It fails in some ∞-toposes.

**How the definition helps.** In a hypercomplete ∞-topos the Whitehead theorem is true by definition. The real work moves to recognizing which ∞-toposes are hypercomplete. For example, an ∞-topos is hypercomplete if it is locally of finite homotopy dimension, or if it has enough points in the ∞-topos sense. The nLab warns that enough points of the underlying 1-topos is not enough. It also names the Goodwillie n-jet toposes (n &gt; 1) as far from hypercomplete. For a 1-site (an ordinary site), the hypercompletion of its ∞-topos of sheaves is the ∞-topos that the Joyal–Jardine local model structure on simplicial presheaves presents.

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

*Rules out counterexamples.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18G80. arXiv math.CT, math.AT. Level 3: graduate.

**Definition.** A stable (∞,1)-category is a pointed (∞,1)-category (one with a zero object) with finite limits and colimits, in which a square is a pullback exactly when it is a pushout. Equivalently, the loop functor Ω is an equivalence. Being stable is a property of the ∞-category, not extra structure.

**Problem.** The homotopy category of a stable ∞-category is triangulated, and the octahedral axiom holds (Lurie). In the stable ∞-category itself, the cone of a morphism is a pushout, so it is functorial.

**How the definition helps.** In a stable ∞-category the cone of a morphism is a pushout, so a universal property fixes it. In a triangulated category, the cone is unique only up to a non-unique isomorphism, so it is not functorial. The nLab says that this bad behaviour comes from passing to the homotopy category. Not every triangulated category arises this way, by examples of Muro, Schwede and Strickland.

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

**Definition.** A simplicially enriched category C is a category whose hom-sets are simplicial sets. Its homotopy coherent nerve N(C) is the simplicial set whose n-simplices are the simplicial functors from S\[Δⁿ\] into C. Here S\[Δⁿ\] is a simplicial resolution of the ordered set \[n\] = {0, …, n}, built from free categories. It adds homotopies between composites, then homotopies between those homotopies, and so on.

**Problem.** Cordier–Porter theorem: if every hom-object of C is a Kan complex, then the homotopy coherent nerve N(C) is a quasi-category. Here a homotopy coherent diagram of shape A in C is a simplicial map from the nerve of A to N(C).

**How the definition helps.** The nerve turns a homotopy coherent diagram, which is hard to define directly, into a plain map of simplicial sets. Vogt defined homotopy coherent diagrams in Top, and Cordier saw that these are exactly the simplicial functors S\[A\] → Top. A quasi-category is a simplicial set in which every inner horn has a filler. This theorem was one of the first links between two models of (∞,1)-categories.

**nLab:** [homotopy coherent nerve](https://ncatlab.org/nlab/show/homotopy+coherent+nerve). It says: “This allowed a good definition of homotopy coherent diagrams in arbitrary simplicially enriched categories to be given.”

**Sources:**

- [Jean-Marc Cordier, Tim Porter, Vogt's theorem on categories of homotopy coherent diagrams, Math. Proc. Cambridge Philos. Soc. 100 (1986) 65–90](https://doi.org/10.1017/S0305004100065877)

### Categories without equality of objects respect isomorphism automatically

**Remember:** If you cannot ask whether two objects are equal, you cannot tell isomorphic ones apart.

*True by definition. Confidence: medium.* MSC 18A05 (Definitions and generalizations in theory of categories), 18A15. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A preset is a collection of things with no equality relation given. In this approach a category has only a preset of objects. Each hom-set is still a genuine set, with equality. A strict category is one whose objects get the extra structure of a set.

**Problem.** In Makkai's first-order logic with dependent sorts (FOLDS), which has no equality of objects, every sentence is invariant under the matching notion of equivalence. So no statable property of objects can tell isomorphic objects apart.

**How the definition helps.** If you cannot write an equation between objects, you lose the main way to break the principle of equivalence. The nLab says that the principle should be the conclusion of such a theorem. A category with only a preset of objects builds this restriction into the definition. When you want equality of objects, you must add it as explicit structure, and that is what a strict category is.

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

**Definition.** A simple graph is a set V of vertices with a reflexive, symmetric relation E on V. An edge is a pair of distinct vertices x and y with E(x, y). A morphism from (V, E) to (W, F) is a function f such that E(x, y) implies F(f(x), f(y)). So a morphism may send an edge to a single vertex.

**Problem.** With these morphisms, the category of simple graphs is a Grothendieck quasitopos, and every edge contraction is a quotient.

**How the definition helps.** This definition makes simple graphs a special kind of presheaf, and a quasitopos is essentially a category of such presheaves. Simple graphs are exactly the presheaves on a small category of the sets 1 and 2 whose map X(2) → X(1) × X(1) is injective. These are the ¬¬-separated presheaves, so the theorem follows almost at once. If morphisms had to send edges to edges, edge contractions would not be quotients.

**nLab:** [category of simple graphs](https://ncatlab.org/nlab/show/category+of+simple+graphs). It says: “On the other hand, a Grothendieck quasitopos is, essentially by definition, the category of separated presheaves for a topology on a presheaf topos, in this case the ¬¬-topology.”

**Sources:**

- [Jiří Adámek, Horst Herrlich, Cartesian closed categories, quasitopoi and topological universes, Commentationes Mathematicae Universitatis Carolinae 27(2) (1986) 235–257](http://dml.cz/handle/10338.dmlcz/106447)

### With anafunctors, fully faithful and essentially surjective means equivalence, without choice

**Remember:** An anafunctor gives each object a family of interchangeable values, not one chosen value.

*Rules out counterexamples.* MSC 18A22 (Special properties of functors (faithful, full, etc.)), 18B10, 03E25. arXiv math.CT. Level 4: research.

**Definition.** An anafunctor F : C → D assigns to each object c a non-empty set of 'specified values' in D, instead of one chosen value. Specified isomorphisms join these values. Formally, an anafunctor is a span of functors C ← F̄ → D whose left leg is fully faithful and surjective on objects.

**Problem.** Without the axiom of choice, every fully faithful and essentially surjective functor has an inverse anafunctor, so it is an equivalence of categories in the sense of anafunctors.

**How the definition helps.** An anafunctor does not need to choose, so the inverse exists without the axiom of choice. With ordinary functors, the statement is equivalent to the axiom of choice, because the inverse must choose, for each d, an object c with F(c) ≅ d. An anafunctor instead takes all such pairs at once, and any two are joined by a unique isomorphism. The cost is that composing anafunctors needs a pullback.

**nLab:** [anafunctor](https://ncatlab.org/nlab/show/anafunctor). It says: “The notion of \*anafunctor\* is a generalization of the usual notion of \*functor\*, which enables us to recover a version of this statement without the axiom of choice.”

**Sources:**

- [Michael Makkai, Avoiding the axiom of choice in general category theory, Journal of Pure and Applied Algebra 108 (1996) 109–173](https://doi.org/10.1016/0022-4049(95)00029-1)

### Coherent functors give Serre's theorem on projective sheaves without noetherian hypotheses

**Remember:** Use finitely presented, not finitely generated, and noetherian rings are not needed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A25 (Functor categories, comma categories), 14F06, 18E35. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A coherent functor, in Auslander's sense, is a functor that is the cokernel of a map between representable functors. A ring is right coherent when its finitely generated right ideals are finitely presented. Krause works with finitely presented graded modules over such rings instead of finitely generated modules over noetherian rings.

**Problem.** Let an abelian category have an object C and an autoequivalence σ, and let R be the graded ring of the groups Hom(C, σⁿC), n ≥ 0. If R is right coherent and semiperfect, Krause gives a necessary and sufficient criterion for the category to be finitely presented graded R-modules modulo finite length modules.

**How the definition helps.** Finitely presented modules over a coherent ring form an abelian category, so the quotient makes sense without noetherian rings. C and σ play the roles of the structure sheaf and the twist by O(1). Serre's theorem on coherent sheaves on a projective variety is one case. A theorem of Lenzing on hereditary algebras is another.

**Paper or page:** [Serre's theorem for coherent sheaves via Auslander's techniques](https://arxiv.org/abs/2312.13755v2). It says: “A particular example is the category of coherent sheaves on a projective variety, following a theorem of Serre from 1955. The proof uses Auslander's theory of coherent functors, and there are no noetherianess assumptions.”

**Sources:**

- [Henning Krause, Serre's theorem for coherent sheaves via Auslander's techniques, arXiv:2312.13755v2 (2024)](https://arxiv.org/abs/2312.13755v2)

### A ternary factorization system is two nested factorization systems

**Remember:** Two nested two-step factorizations give one three-step factorization.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18A32 (Factorization systems, substructures, quotient structures, congruences, amalgams), 18F60. arXiv math.CT. Level 4: research.

**Definition.** An orthogonal factorization system (L, R) on a category is a pair of classes of morphisms such that every morphism factors as an L-map followed by an R-map, uniquely up to unique isomorphism. A ternary factorization system is a pair of such systems (L₁, R₁) and (L₂, R₂) with L₁ ⊆ L₂. Its three classes are E = L₁, F = L₂ ∩ R₁ and M = R₂.

**Problem.** In a ternary factorization system, every morphism factors as an E-map, then an F-map, then an M-map, uniquely up to unique isomorphism. In Top, this is a quotient map, then a continuous bijection, then a subspace embedding.

**How the definition helps.** With this definition, uniqueness of the three-step factorization is a short exercise about orthogonality. You can factor in the two possible orders, and the results are isomorphic, so the middle map lies in both L₂ and R₁. Describing such systems as iterated distributive laws fails in general, because the class R₂L₁ need not be closed under composition. Top is a concrete example.

**nLab:** [ternary factorization system](https://ncatlab.org/nlab/show/ternary+factorization+system). It says: “It turns out that a convenient way to state the definition is in terms of a pair of ordinary (orthogonal) factorization systems.”

**Sources:**

- [A. Pultr, W. Tholen, Free Quillen factorization systems, Georgian Mathematical Journal 9 (2002) 807–820](https://doi.org/10.1515/GMJ.2002.807)

### A weak composition law freely generates an algebraic weak factorization system

**Remember:** A composition law says how to compose chosen lifts.

*True by definition. Confidence: medium.* MSC 18A32 (Factorization systems, substructures, quotient structures, congruences, amalgams), 18C15. arXiv math.CT. Level 4: research.

**Definition.** Take a functorial factorization, which sends each arrow f to a left factor followed by a right factor. View it as a pointed endofunctor R on the arrow category. An R-algebra structure on an arrow is a choice of lifts for it. A right weak composition law is a functor that composes R-algebra structures along composable arrows; it must be compatible with morphisms of algebras, but it need not be associative.

**Problem.** A functorial factorization with a right weak composition law freely generates an algebraic weak factorization system, through the algebraically free monad 𝔽(R) on R (Garner–Riehl).

**How the definition helps.** The free monad on R turns a weak composition law into a strong one with no extra work. Garner and Riehl show that if R is a monad, the factorization is an algebraic weak factorization system exactly when it has a strong composition law. The algebras of 𝔽(R) are by definition the R-algebras, so the weak law is a strong law for 𝔽(R). The work is in the first theorem and in building 𝔽(R) by a transfinite construction.

**nLab:** [composition law for factorizations](https://ncatlab.org/nlab/show/composition+law+for+factorizations). It says: “By definition, the algebraically-free monad 𝔽(R) satisfies 𝔽(R) Alg = R Alg. Thus, the weak composition law for R extends to a strong one for 𝔽(R); now we can apply the previous theorem.”

**Sources:**

- [Richard Garner, Understanding the small object argument, Applied Categorical Structures 17 (2009) 247–285](https://doi.org/10.1007/s10485-008-9137-4)
- [Emily Riehl, Algebraic model structures, New York Journal of Mathematics 17 (2011) 173–231, arXiv:0910.2733](https://arxiv.org/abs/0910.2733)

### Total categories satisfy an adjoint functor theorem without a solution-set condition

**Remember:** Total means every presheaf has a best approximation by an object of C.

*Makes the theorem clean to state or prove.* MSC 18A35 (Categories admitting limits (complete categories), functors preserving limits, completions), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A locally small category C is total if its Yoneda embedding C → \[Cᵒᵖ, Set\] has a left adjoint. Equivalently, C has every colimit of the identity functor weighted by any presheaf W : Cᵒᵖ → Set. The left adjoint sends a presheaf W to this weighted colimit, the object of C that best approximates W.

**Problem.** If C is total, every functor from C to a locally small category that preserves large colimits has a right adjoint. No solution-set condition is needed.

**How the definition helps.** For a total category, preserving all large colimits is already enough to have a right adjoint. The usual adjoint functor theorem also needs a solution-set condition. Most familiar categories of structures are total: Set, Grp, Top, locally presentable categories, and anything monadic or topological over Set. The work moves into proving that a given category is total, and Day and Tholen give criteria for that.

**nLab:** [total category](https://ncatlab.org/nlab/show/total+category). It says: “Total categories satisfy a very satisfactory adjoint functor theorem: any large-colimit-preserving functor from a total category to a locally small category has a right adjoint.”

**Sources:**

- [Ross Street, Bob Walters, Yoneda structures on 2-categories, Journal of Algebra 50 (1978) 350–379](https://doi.org/10.1016/0021-8693(78)90160-6)
- [Richard J. Wood, Some remarks on total categories, Journal of Algebra 75 (1982) 538–545](https://doi.org/10.1016/0021-8693(82)90055-2)

### Functors that preserve weak pullbacks lift relations exactly, giving bisimulations

**Remember:** Preserve weak pullbacks, and lifted relations compose and keep identities.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B10 (Categories of spans/cospans, relations, or partial maps), 18A35, 68Q85. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A set functor F describes a type of system, such as nondeterministic or probabilistic transitions. Its Barr extension sends a relation R ⊆ X × Y to the image of F(R) in F(X) × F(Y). A lax extension lifts relations monotonically, respects F on functions, and lifts a composite at least as large as the composite of the lifts. It is normal if it sends identity relations to identity relations.

**Problem.** If a set functor F preserves weak pullbacks, its Barr extension preserves composition of relations and identity relations. So the generic bisimulation, in which related states have successors related by the lifted relation, behaves well.

**How the definition helps.** A composite of relations comes from a pullback of their pairs, so preserving weak pullbacks lifts composites exactly (our own explanation). Some useful functors fail this condition, such as those for neighbourhood systems (our own remark). The paper shows that functors with a normal lax extension still preserve a weaker class of pullbacks, the 1/4-iso pullbacks. It also gives sufficient conditions beyond weak pullbacks for the hard cases.

**Paper or page:** [Identity-Preserving Lax Extensions and Where to Find Them](https://arxiv.org/abs/2410.14440v2). It says: “It is known that preservation of weak pullbacks is a sufficient condition for a functor to admit a normal lax extension (the Barr extension, which in fact is then even strict)”

**Sources:**

- [Sergey Goncharov, Dirk Hofmann, Pedro Nora, Lutz Schröder, Paul Wild, Identity-Preserving Lax Extensions and Where to Find Them, arXiv:2410.14440 (2025)](https://arxiv.org/abs/2410.14440v2)

### Flabby objects show that internal and external injectivity agree in a topos

**Remember:** Flabby objects tie the inside view of injectivity to the outside view.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B25 (Topoi), 18G05, 18F20. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A topos is a category that behaves like the category of sets and has its own internal logic. A sheaf on a space is flabby when every section over an open set extends to the whole space. The paper defines flabby objects in any elementary topos. For sheaves on a space, and more generally in localic toposes, the notion reduces to flabby sheaves.

**Problem.** In an elementary topos, an object is injective in the internal logic exactly when it is injective as seen from outside. The analogous statement fails for projective objects.

**How the definition helps.** Our own reading: both the internal and the external view can use flabby objects, so the two kinds of injectivity can be compared. With this tool, the paper shows that the two notions of injective object coincide. The abstract notes that the analogous statement fails for projective objects. As an application, higher direct images become internal cohomology. The paper also gives a definition of flabby sheaves that does not depend on the site.

**Paper or page:** [Flabby and injective objects in toposes](https://arxiv.org/abs/1810.12708). It says: “we use flabby objects to show that an internal notion of injective objects coincides with the corresponding external notion, in stark contrast with the situation for projective objects.”

**Sources:**

- [Ingo Blechschmidt, Flabby and injective objects in toposes, arXiv:1810.12708 (2018)](https://arxiv.org/abs/1810.12708)

### The Freyd cover gives the disjunction and existence properties

**Remember:** Glue each abstract object to a set of its global elements.

*Makes the theorem clean to state or prove.* MSC 18B25 (Topoi), 18A25, 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The Freyd cover (or scone) of a category T with a terminal object is the comma category Set ↓ Γ, where Γ = T(1, −) is the global sections functor. An object of the cover is a set X, an object U of T, and a function X → Γ(U).

**Problem.** In the free topos, the global sections functor Γ preserves finite colimits, so the terminal object is connected and projective. Hence its logic has the disjunction property and the existence property.

**How the definition helps.** The result is easy in the Freyd cover, and the initial topos inherits it as a retract. In the cover, Γ is representable and preserves colimits. The cover is again a topos, and the initial topos is a retract of it through logical functors. So if P ∨ Q is provable, one of P and Q is provable, and if ∃x.P(x) is provable, then P(a) is provable for some global element a.

**nLab:** [Freyd cover](https://ncatlab.org/nlab/show/Freyd+cover). It says: “They were originally proved by syntactic means; the conceptual proofs of the lemma and theorem below are due to Freyd.”

**Sources:**

- [Ieke Moerdijk, On the Freyd cover of a topos, Notre Dame Journal of Formal Logic 24 (1983) 517–526](https://doi.org/10.1305/ndjfl/1093870454)

### Adhesive categories make double-pushout rewriting well defined

**Remember:** Pushouts along monomorphisms behave like unions of sets.

*Rules out counterexamples.* MSC 18B50 (Extensive, distributive, and adhesive categories), 68Q42. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** A category is adhesive if it has pullbacks, it has pushouts along monomorphisms, and these pushouts are van Kampen. Van Kampen means this: take a cube whose bottom face is such a pushout and whose back and left faces are pullbacks. Then the top face is a pushout exactly when the front and right faces are pullbacks. Every topos is adhesive.

**Problem.** In an adhesive category, a pushout complement of a monomorphism followed by any map, when it exists, is unique up to unique isomorphism. So double-pushout rewriting with rules whose left leg is a monomorphism is well defined.

**How the definition helps.** Lack and Sobociński chose the definition so that the facts used in graph rewriting hold. Pushouts preserve monomorphisms, and a pushout square of monomorphisms is also a pullback. A pushout complement is the missing corner that completes a pushout square from two given maps. Cat, posets, topological spaces and groupoids are not adhesive, and there the uniqueness result is not available.

**nLab:** [adhesive category](https://ncatlab.org/nlab/show/adhesive+category), [span rewriting](https://ncatlab.org/nlab/show/span+rewriting). It says: “In an adhesive category, if m: C → A is mono and g: A → D is any morphism, then if a pushout complement exists, it is unique up to unique isomorphism.”

**Sources:**

- [Stephen Lack, Paweł Sobociński, Adhesive categories, FoSSaCS 2004, Lecture Notes in Computer Science 2987, Springer (2004)](https://doi.org/10.1007/978-3-540-24727-2_20)
- [Stephen Lack, Paweł Sobociński, Adhesive and quasiadhesive categories, RAIRO Theoretical Informatics and Applications 39(3) (2005) 511–545](https://doi.org/10.1051/ita:2005028)

### M-adhesive categories make sequential composition of rewriting rules associative

**Remember:** Adhesive pushouts let rules compose along overlaps associatively.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18B50 (Extensive, distributive, and adhesive categories), 68Q42. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** In double-pushout rewriting, a rule L ← K → R replaces a copy of L in a graph by R, keeping K. A pushout glues two objects along a common part, and a monomorphism is an arrow that behaves like an injective map. An adhesive category is one where pushouts along monomorphisms behave like unions of sets: they are stable under pullback and are also pullbacks. M-adhesive categories ask this only for a chosen class M of monomorphisms.

**Problem.** In an M-adhesive category with the extra conditions the paper names, such as finitarity and effective unions, composing rewriting rules along overlaps is associative. So the rules form a rule algebra, which has a unit when there is an M-initial object.

**How the definition helps.** The adhesive conditions make pushouts and pullbacks along M-morphisms fit together like unions and intersections of sets (our own explanation). The abstract says this complements the classical Concurrency Theorem of double-pushout rewriting. The rule algebras give a way to compute how statistical moments evolve in stochastic rewriting systems. Checking the extra conditions in each category stays hard (our own remark).

**Paper or page:** [Rule Algebras for Adhesive Categories](https://arxiv.org/abs/1807.00785v4). It says: “We demonstrate that the most well-known approach to rewriting graphical structures, the Double-Pushout (DPO) approach, possesses a notion of sequential compositions of rules along an overlap that is associative in a natural sense.”

**Sources:**

- [Nicolas Behr, Pawel Sobocinski, Rule Algebras for Adhesive Categories, Logical Methods in Computer Science 16(3) (2020), arXiv:1807.00785](https://arxiv.org/abs/1807.00785v4)

### A separate sort for scalars makes topological vector spaces internal to Top

**Remember:** Give the scalars their own sort, so that they can carry their own topology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 46A99. arXiv math.FA, math.CT. Level 4: research.

**Definition.** Use the two-sorted theory of vector spaces. It has one sort k for scalars and one sort X for vectors, and operations such as scalar multiplication k × X → X. Interpret it in Top, with the topological ground field as the scalar sort.

**Problem.** Topological vector spaces are exactly the models of the two-sorted theory of vector spaces in Top. So a topological vector space is a vector space internal to Top, as a topological group is a group object in Top.

**How the definition helps.** With two sorts, the joint continuity of scalar multiplication k × X → X is part of the model. The usual one-sorted theory has a separate unary operation for each scalar (our own reading). Interpreted in Top, it makes scalar multiplication continuous only for the discrete topology on k.

**nLab:** [topological vector space](https://ncatlab.org/nlab/show/topological+vector+space). It says: “Much as a topological group is a group object in Top, so a TVS is the same as a vector space internal to Top ... provided that we use the two-sorted notion of vector space (k, X)”

**Sources:** none listed. No primary source with a working link was found.

### A universal property defines closed intervals without first defining the real numbers

**Remember:** An interval is the universal averaging structure between two end points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18A30. arXiv math.CT. Level 4: research.

**Definition.** The paper works in any category with finite products. It uses a binary operation ⊕ that behaves like taking the midpoint, with laws such as x⊕x = x and x⊕y = y⊕x. An interval object is, roughly, the universal such structure with two chosen end points; the paper also needs infinite iterated averages (our own summary). The definition is a universal property, so it fixes the object up to isomorphism.

**Problem.** Two midpoint-preserving maps out of an interval object that agree on the end points are equal. In the category of sets, the interval objects are the closed intervals \[a,b\] with a &lt; b and their midpoint operation.

**How the definition helps.** A universal property gives a unique structure-preserving map into any suitable target with two chosen points, so it defines functions out of the interval. Identities between such functions follow from uniqueness. The definition does not assume the real numbers. Corollary 4.19 confirms that \[a,b\] with a &lt; b is an interval object; the condition a &lt; b excludes the one-point interval (our own remark).

**Paper or page:** [Euclidean interval objects in categories with finite products](https://arxiv.org/abs/2504.21551), [Euclidean interval objects in categories with finite products](https://arxiv.org/abs/2504.21551). It says: “The universal property characterises such structures up to isomorphism, supports the definition of functions between intervals, and provides a means of verifying identities between functions.”

**Sources:**

- [Martin Escardo and Alex Simpson, Euclidean interval objects in categories with finite products, arXiv:2504.21551 (2025)](https://arxiv.org/abs/2504.21551)

### Fermat theories get derivatives from Hadamard quotients, with no limits

**Remember:** Write f(x + y) = f(x) + y · f̃(x, y); the derivative is f̃(x, 0).

*True by definition.* MSC 18C10 (Theories (e.g., algebraic theories), structure, and semantics), 18F40. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A Lawvere theory is an algebraic theory, given as a category whose objects are the powers of one object. A Fermat theory is a Lawvere theory that extends the theory of commutative rings, such that each operation f has a unique operation f̃ (its Hadamard quotient) with f(x + y, z) = f(x, z) + y · f̃(x, y, z). In words, the change in f when x moves by y is y times another operation. The derivative of f is then f̃(x, 0, z), and the theory of C∞-rings is the main example.

**Problem.** In a Fermat theory, with the derivative of f defined as f̃(x, 0, z), the sum, product and chain rules follow by algebra alone. Each partial derivative is a derivation of the free algebra T(n).

**How the definition helps.** The derivative is the value of an operation, so the rules of calculus follow from one equation by algebra. The nLab uses these partial derivatives to define derivations of any T-algebra, and from them Kähler differentials. The tangent category page shows that abelian group objects over a smooth algebra are modules over its underlying ring. The real work is to show that smooth functions form a Fermat theory at all, which is Hadamard's lemma.

**nLab:** [Fermat theory](https://ncatlab.org/nlab/show/Fermat+theory), [tangent category](https://ncatlab.org/nlab/show/tangent+category), [Hadamard lemma](https://ncatlab.org/nlab/show/Hadamard+lemma). It says: “is in fact a Fermat theory in that Hadamard's lemma holds for smooth functions in particular on Cartesian spaces.”

**Sources:**

- [Eduardo J. Dubuc, Anders Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### A Kan extension comonad comes with a homomorphism counting theorem for free

**Remember:** Build the comonad by Kan extension, and homomorphism counting comes along.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18A40, 05C60. arXiv math.CT, math.CO. Level 4: research.

**Definition.** A comonad on graphs is a functor G with maps G(A) → A and G(A) → G(G(A)), with laws dual to those of a monad. A graph parameter assigns a number to each graph, such as its treewidth. The paper builds a comonad for each standard graph parameter by a Kan extension formula. This comonad classifies the same class of graphs as the parameter, which means that the graphs in the class are those that carry a coalgebra structure.

**Problem.** For each standard graph parameter, the comonad built by the Kan extension is the initial comonad whose coalgebras are the graphs in the class. It automatically has a homomorphism-counting theorem: two structures are equivalent for it exactly when they have equally many homomorphisms from each graph in the class.

**How the definition helps.** The Kan extension builds the comonad from exactly the graphs that the parameter allows, so the counting theorem comes with the construction. Initial means that it has a unique map to any other comonad that solves the same problem. Earlier counting theorems came from particular comonads built from model comparison games, and this construction needs no game. The hard work sits in the general theorem that links comonads of this form to homomorphism counts (our own remark).

**Paper or page:** [Discrete density comonads and graph parameters](https://arxiv.org/abs/2205.06589). It says: “This comonad is constructed via a simple Kan extension formula, making it the initial solution to this problem and, furthermore, automatically admitting a homomorphism-counting theorem.”

**Sources:**

- [Samson Abramsky, Tomáš Jakl and Thomas Paine, Discrete density comonads and graph parameters, arXiv:2205.06589 (2022)](https://arxiv.org/abs/2205.06589)

### Algebraically free monads satisfy the ordinary free monad property

**Remember:** The algebra categories tell us how maps out of the free monad factor.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads). arXiv math.CT. Level 4: research.

**Definition.** An endofunctor F sends a category to itself. An F-algebra is an object X with a map FX → X and no extra laws. A monad T has natural maps X → TX and TTX → TX with unit and associativity laws. A map F → T makes T algebraically free if restriction along it identifies T-algebras with F-algebras, without changing their underlying objects or maps.

**Problem.** An algebraically free monad on F is free on F in the ordinary sense. Every natural map F → S factors uniquely through a map T → S that preserves the monad unit and multiplication.

**How the definition helps.** The algebraically free definition makes ordinary freeness follow by comparing functors between categories of algebras. A natural map F → S amounts to a functor from S-algebras to F-algebras that preserves underlying objects and maps. By the definition, this is a functor from S-algebras to T-algebras over the original category. Such functors correspond to monad maps T → S. The work moves into proving these two correspondences and constructing a monad with the required algebra category.

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

**Definition.** The codensity monad T of a functor G : D → C is the right Kan extension of G along itself. That means a universal natural map ε : T G → G. Each natural map H G → G factors uniquely as ε after a map H → T. The other description computes T at each object as a limit.

**Problem.** Let the right Kan extension T of G along itself exist. The unit comes from factoring the identity of G through ε, and the multiplication from factoring ε ∘ T ε. With these, T is a monad.

**How the definition helps.** With the universal property, each monad law reduces to an equation after composing with ε. By uniqueness of factors, two maps into T agree when they agree after applying G and then ε. The nLab proves the laws this way. The unit laws reduce to inserting an identity (our own). Both sides of the associativity law reduce to three applications of ε in a row (our own). With the limit formula, one must check the laws on compatible families by hand (our own). The work goes into the existence of the Kan extension.

**nLab:** [codensity monad](https://ncatlab.org/nlab/show/codensity+monad). It says: “it suffices by universality to check that applying G on the right, followed by ε, results in a commutative diagram.”

**Paper or page:** [Probability monads as codensity monads, Proposition 2.1](https://arxiv.org/abs/2111.01250). It says: “The triple (Tᴳ, η, μ) is a monad.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius monads as two-sided adjunctions make free algebras also cofree

**Remember:** One functor builds both the free and the cofree algebra.

*True by definition. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18M05. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A monad T on a category C has algebras, objects X with an action T(X) → X. The forgetful functor U from algebras to C has the free-algebra functor F as its left adjoint. Call T Frobenius when F is also right adjoint to U, so that the adjunction is ambidextrous. The operation-based definition instead gives T a comultiplication and counit that satisfy Frobenius laws with its multiplication.

**Problem.** Let T be a Frobenius monad with free-algebra functor F. For every algebra A and object X, algebra maps A → F(X) correspond to maps from the underlying object of A to X.

**How the definition helps.** With the adjunction definition, the claim is the statement that F is right adjoint to U (our own explanation). The work moves into the theorem that the operation-based definition gives this adjunction, which the nLab states with a reference to Street (2004, Section II). There the counit T(X) → X of the comultiplication gives the counit of the new adjunction (our own).

**nLab:** [Frobenius monad](https://ncatlab.org/nlab/show/Frobenius+monad). It says: “The monad induced from an ambidextrous adjunction is Frobenius. The converse is also true:”

**Sources:**

- [Ross Street, Frobenius monads and pseudomonoids (2004)](https://doi.org/10.1063/1.1788852)

### Nervous monads are defined as those for which the nerve theorem holds

**Remember:** A nervous monad is one whose algebras its theory already describes.

*True by definition.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C10. arXiv math.CT. Level 4: research.

**Definition.** A monad on a category ℰ describes a kind of algebraic structure on its objects. Here ℰ is a locally presentable enriched category, and every object is a canonical colimit of a small full subcategory 𝒜 of arities. A monad is 𝒜-nervous when the conclusions of Weber's nerve theorem hold for it. These conclusions say that its algebras are exactly certain presheaves on an associated theory.

**Problem.** The constructions between monads and theories form an adjunction whose fixed points are exactly the nervous monads and the theories. So nervous monads correspond to theories, and every monad with arities is nervous (Theorem 43).

**How the definition helps.** The definition is the conclusion of the nerve theorem, so the theorem holds for nervous monads by definition. The work moves to proving the adjunction and identifying its fixed points. The paper says that the resulting equivalence is best possible in a precise sense. Theorem 50 shows that monads with arities need not be closed under colimits.

**Paper or page:** [Monads and theories](https://arxiv.org/abs/1805.04346), [Monads and theories](https://arxiv.org/abs/1805.04346). It says: “The fixpoints of the adjunction are characterised as the 𝒜-nervous monads—those for which the conclusions of Weber's nerve theorem hold—and the 𝒜-theories, which we introduce here.”

**Sources:**

- [John Bourke and Richard Garner, Monads and theories, Advances in Mathematics 351 (2019), 1024–1071](https://arxiv.org/abs/1805.04346)

### Profinite monads let Reiterman's theorem hold for finite algebras of any monad

**Remember:** Profinite terms form a monad, so Reiterman's theorem holds for any monad.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 08B05. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** A monad T on a category D describes a kind of algebraic structure, and its Eilenberg–Moore algebras are the structures of that kind. A profinite term is, roughly, a term that is known only through its values in all finite algebras. The profinite monad of T collects the spaces of profinite terms into one monad.

**Problem.** Reiterman's theorem holds for finite algebras of a monad T on a category D: a class of finite T-algebras is a pseudovariety exactly when profinite equations define it. A pseudovariety is closed under finite products, subalgebras and quotients.

**How the definition helps.** The profinite monad turns profinite terms into a categorical object, so the classical argument can be stated for any monad. Our own remark: ordinary equations are too weak to define pseudovarieties, which is why profinite equations are needed. The abstract calls profinite equations an indispensable tool for the algebraic classification of formal languages. Our own remark: the main technical work is to construct the profinite monad and prove its properties.

**Paper or page:** [Reiterman's Theorem on Finite Algebras for a Monad](https://arxiv.org/abs/2101.00942). It says: “As a key technical tool, we introduce the concept of a profinite monad associated to the monad T, which gives a categorical view of the construction of the space of profinite terms.”

**Sources:**

- [Jiri Adamek, Liang-Ting Chen, Stefan Milius and Henning Urbat, Reiterman's Theorem on Finite Algebras for a Monad, arXiv:2101.00942 (2021)](https://arxiv.org/abs/2101.00942)

### Weak distributive laws combine choice and probability where ordinary laws fail

**Remember:** Drop one unit law, and nondeterminism and probability combine.

*Makes the theorem clean to state or prove.* MSC 18C15 (Monads (= standard construction, triple or triad), algebras for monads, homology and derived functors for monads), 18C50. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A monad models a computational effect, such as nondeterministic choice (the powerset monad) or weighted choice (the semimodule monad of finite weighted sums). A distributive law between two monads is a natural map that swaps them and satisfies four laws. Beck showed that it makes the composite a monad. A weak distributive law keeps three of the four laws and drops one law about a unit.

**Problem.** No ordinary distributive law combines the powerset monad with the distribution monad (Plotkin). For a class of semirings containing the positive semifields, a weak distributive law combines the powerset and semimodule monads into the monad of convex sets of weighted sums.

**How the definition helps.** The weak definition drops one unit law, and a combined monad becomes possible again (our own summary). A weak distributive law still produces a combined monad, by a construction of Garner and others. The quoted paper describes the weak law as a convex closure. What stays hard is the condition on the semiring of weights.

**Paper or page:** [Convexity via Weak Distributive Laws](https://arxiv.org/abs/2108.10718v4), [No-Go Theorems for Distributive Laws](https://arxiv.org/abs/2003.12531v4). It says: “Using the abstract theory of weak distributive laws, we compose the powerset and the semimodule monads via δ, obtaining the monad of convex subsets of the free semimodule.”

**Sources:**

- [Filippo Bonchi, Alessio Santamaria, Convexity via Weak Distributive Laws, Logical Methods in Computer Science 18(4) (2022), arXiv:2108.10718](https://arxiv.org/abs/2108.10718v4)
- [Maaike Zwart, Dan Marsden, No-Go Theorems for Distributive Laws, Logical Methods in Computer Science 18(1) (2022), arXiv:2003.12531](https://arxiv.org/abs/2003.12531v4)
- [Richard Garner, The Vietoris Monad and Weak Distributive Laws, Applied Categorical Structures (2019)](https://doi.org/10.1007/s10485-019-09582-w)

### In thunk-force categories, pure programs are the maps where thunking is natural

**Remember:** A program is pure when thunking before or after running it gives the same result.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 18C50. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** In programming, a thunk is a suspended computation, and forcing it runs it. A thunk-force category is a category K with a functor L, a natural transformation ε : L → Id called force, and a transformation θ : Id → L called thunk that need not be natural. These satisfy four equations: (L, ε, θL) is a comonad, and each component of θ makes its object A a coalgebra. A morphism f is thunkable if (Lf)θ = θf, that is, if θ is natural at f.

**Problem.** In a thunk-force category, the thunkable maps form a subcategory with a monad on it. Thunk-force categories correspond to the monads whose unit is an equalizer, which form a reflective subcategory of all monads (Führmann).

**How the definition helps.** Because θ need not be natural, the places where naturality holds pick out the pure maps. So 'θ is natural' says that every morphism is pure, as in the Kleisli category of the identity monad. In the Kleisli category of the maybe monad, the thunkable maps are exactly the total functions. Führmann's theorem is real work.

**nLab:** [thunk-force category](https://ncatlab.org/nlab/show/thunk-force+category). It says: “The presence of non-thunkable morphisms makes θ fail to be natural overall; naturality of θ is exactly the same as saying all morphisms are thunkable.”

**Sources:**

- [Carsten Führmann, Direct models of the computational lambda-calculus, Electronic Notes in Theoretical Computer Science 20 (1999)](https://doi.org/10.1016/S1571-0661(04)80078-1)

### Measurable convex spaces are the algebras of the Giry monad

**Remember:** Probability algebras are convex spaces whose points are told apart by affine measurable tests.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 18C20 (Eilenberg-Moore and Kleisli constructions for monads), 60B05, 52A01. arXiv math.CT, math.PR. Level 4: research.

**Definition.** A convex space is a set in which you can form weighted averages ∑ pᵢ xᵢ, with pᵢ ≥ 0 and ∑ pᵢ = 1. A measurable convex space is a convex space with a measurable structure in which all finite affine sums are measurable. It must also have enough affine measurable maps to ℝ∞ to separate its points: for any two different points, some such map takes different values on them.

**Problem.** By a recent claim of Sturtz, the Eilenberg–Moore algebras of the Giry monad are exactly the measurable convex spaces. The Giry monad sends a measurable space to its space of probability measures.

**How the definition helps.** In our own reading, the separation condition makes the barycentre of a probability measure a well-defined unique point. Every Giry algebra G(X) → X makes X a convex space, sending ∑ pᵢ xᵢ to the image of ∑ pᵢ δ(xᵢ). With the separation condition, Beck's monadicity theorem shows that the comparison functor is an equivalence. This is a recent claim, not yet a standard result.

**nLab:** [Giry monad](https://ncatlab.org/nlab/show/Giry+monad). It says: “Moreover, we require that each object in Meas ∩ Cvx have enough affine measurable functions X → ℝ<sub>∞</sub> to coseparate the points of X.”

**Sources:**

- [Kirk Sturtz, The algebras of the Giry monad, arXiv:2409.14861](https://arxiv.org/abs/2409.14861)
- [Michèle Giry, A categorical approach to probability theory, Lecture Notes in Math. 915 (1982) 68–85](https://doi.org/10.1007/BFb0092872)

### Define extended natural numbers as monotone sequences of bits

**Remember:** The position of the first 1 is the number; no 1 means ∞.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 03F65. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Constructively, an extended natural number is an infinite monotone sequence of bits: once a 1 appears, all later bits are 1. The number n is n zeros followed by ones. ∞ is the sequence of all zeros.

**Problem.** In constructive mathematics and in any topos, the set ℕ̄ of monotone bit sequences is the terminal coalgebra of X ↦ 1 + X. Its coalgebra map sends a sequence starting with 1 to zero, and any other sequence to its shift by one place.

**How the definition helps.** With monotone sequences, the predecessor map only looks at the first bit, so the universal property holds constructively. The classical definition ℕ ⊔ {∞} fails constructively, because one cannot decide whether a given count is finite or infinite. The same set is also compact Hausdorff without the fan theorem.

**nLab:** [extended natural number](https://ncatlab.org/nlab/show/extended+natural+number). It says: “Note that this universal property also holds constructively (which is why we can be sure that the constructive definition above is correct).”

**Sources:**

- [Martín H. Escardó, Infinite sets that satisfy the principle of omniscience in any variety of constructive mathematics, Journal of Symbolic Logic 78 (2013) 764–784](https://doi.org/10.2178/jsl.7803040)

### Lawful lenses are exactly projections out of a product

**Remember:** Read what you wrote, writing what you read does nothing, and the last write wins.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18C40 (Structured objects in a category (group objects, etc.)), 18C50, 68N18. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** A lens from a state type S to a view type V is a pair of maps, get : S → V and put : V × S → S. The lens is lawful (very well-behaved) when three laws hold. Get after put returns the value that put wrote, putting back what get read changes nothing, and a second put overwrites the first.

**Problem.** Lawful lenses with view V are the same as splittings S ≅ D × V in which get is the projection onto V. They are also the same as coalgebras of the costate comonad, the comonad S ↦ V × (V → S).

**How the definition helps.** The three laws are exactly what these two equivalences need. The link with coalgebras of the costate (store) comonad is a direct check: the three laws are the coalgebra axioms (O'Connor). The product splitting S ≅ D × V is a real theorem. Johnson, Rosebrugh and Wood prove it with a monadicity argument, and it needs V to be inhabited (non-empty). Our own remark: without the overwrite law (PutPut), the lens can remember earlier edits, so it need not be a product projection.

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

**Definition.** A comprehension category is a fibration E → C of dependent types over a category C of contexts, together with a functor to the arrow category of C. A fibration lets you reindex (pull back) a type along a map of contexts. The comprehension category is split when the fibration is split. Then reindexing along a composite is exactly equal to the composite of the reindexings.

**Problem.** Dependent type theory has a sound interpretation in split comprehension categories, with substitution interpreted as reindexing, which is strictly associative there. Hofmann's construction strictifies a locally cartesian closed category into such a structure.

**How the definition helps.** Split comprehension categories have strictly associative substitution, so they match the syntax directly. In syntax, substitution is strictly associative, and type formers commute with it strictly. But a category defines pullback only up to isomorphism, which breaks a direct interpretation in a locally cartesian closed category. The remaining work is the coherence theorem that strictifies such categories.

**nLab:** [categorical semantics of dependent type theory](https://ncatlab.org/nlab/show/categorical+semantics+of+dependent+type+theory). It says: “The way this is generally dealt with is to introduce a category-theoretic structure which does have a "substitution" operation which is strictly associative, hence does correspond directly to type theory”

**Sources:**

- [Martin Hofmann, On the interpretation of type theory in locally cartesian closed categories, CSL 1994, Lecture Notes in Computer Science 933 (1995) 427–441](https://doi.org/10.1007/BFb0022273)
- [Bart Jacobs, Comprehension categories and the semantics of type dependency, Theoretical Computer Science 107 (1993) 169–207](https://doi.org/10.1016/0304-3975(93)90169-T)
- [Pierre-Louis Curien, Richard Garner, Martin Hofmann, Revisiting the categorical interpretation of dependent type theory, Theoretical Computer Science 546 (2014) 99–119](https://doi.org/10.1016/j.tcs.2014.03.003)

### C\*-categories need a positivity axiom for the GNS representation

**Remember:** In a C\*-category, a\*a must be positive by axiom, because it is no longer automatic.

*Rules out counterexamples. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 46L05, 18M40. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A C\*-category is a category enriched in Banach spaces with an involution a ↦ a\*. It satisfies the C\*-identity ‖a\*a‖ = ‖a‖² and the bound ‖ba‖ ≤ ‖b‖‖a‖. In addition, for every arrow a : x → y there must be an arrow b : x → x with a\*a = b\*b. So every a\*a is a positive element.

**Problem.** Every small C\*-category has a faithful \*-functor into the category Hilb of Hilbert spaces, an analogue of the GNS representation of a C\*-algebra.

**How the definition helps.** The extra axiom gives back the positivity of a\*a that the C\*-identity no longer gives, and a representation on Hilbert spaces needs it. Take two objects with every hom-space ℂ, and put a\* = conj(a) on endomorphisms but a\* = −conj(a) on arrows between different objects. Then a\*a is negative, so no faithful representation on Hilbert spaces exists. That the axiom is what the theorem needs is our reading of the page.

**nLab:** [C-star-category](https://ncatlab.org/nlab/show/C-star-category). It says: “Unlike C\*-algebras, this does not follow automatically, as can be seen by considering the category with two objects x,y with all morphism sets a copy of ℂ”

**Sources:**

- [P. Ghez, R. Lima, J. E. Roberts, W\*-categories, Pacific Journal of Mathematics 120 (1985) 79–109](https://doi.org/10.2140/pjm.1985.120.79)

### Isbell convexity of metric spaces is the same as categorical completeness

**Remember:** For skeletal metric spaces, injective means complete, and complete means Isbell convex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 51F30. arXiv math.CT, math.MG. Level 4: research.

**Definition.** A Lawvere metric space has a distance d into \[0,∞\] with d(x,x) = 0 and the triangle inequality, but not always symmetry. It is a category enriched over \[0,∞\], so complete has its categorical meaning: suitable enriched limits exist, which is stronger than Cauchy completeness. Isbell convexity is a geometric condition from Kemajou, Künzi and Otafudu. Our own summary: suitable families of balls whose radii fit the distances between their centres have a common point.

**Problem.** For any quantale 𝒬, a 𝒬-category is skeletal and complete exactly when it is injective for fully faithful 𝒬-functors. For Lawvere metric spaces, this gives the theorem of Kemajou, Künzi and Otafudu on injective spaces.

**How the definition helps.** Completeness is a categorical notion, so one injectivity theorem for enriched categories covers metric spaces at once. A quantale is a complete lattice with a compatible multiplication; here it is \[0,∞\] with addition. Skeletal means that distance zero in both directions forces equality. The proof uses the MacNeille completion as the injective envelope, and the result is a special case of theorems of Hofmann and Stubbe.

**Paper or page:** [Completeness and injectivity](https://arxiv.org/abs/2005.05311), [Completeness and injectivity](https://arxiv.org/abs/2005.05311). It says: “A Lawvere metric space is Isbell convex if and only if it is complete”

**Sources:**

- [Soichiro Fujii, Completeness and injectivity, Topology and its Applications 301 (2021), 107503](https://doi.org/10.1016/j.topol.2020.107503)

### Lawvere metric spaces make the triangle inequality a composition law

**Remember:** Distances are hom-objects, and the triangle inequality is how you compose them.

*Makes the theorem clean to state or prove.* MSC 18D20 (Enriched categories (over closed or monoidal categories)), 54E50. arXiv math.CT, math.MG. Level 4: research.

**Definition.** A Lawvere metric space is a category enriched in (\[0,∞\], ≥, +, 0). (An enriched category has hom-objects taken from a monoidal category instead of hom-sets.) So the hom-object d(x, y) is a number. Composition is the triangle inequality d(x, y) + d(y, z) ≥ d(x, z), and identities give d(x, x) = 0.

**Problem.** A metric space is complete in the usual sense exactly when it is Cauchy complete as an enriched category: every adjoint pair of bimodules comes from a functor (Lawvere). For ordinary categories, the same notion is idempotent completeness.

**How the definition helps.** Once metric spaces are enriched categories, the enriched notion of Cauchy completeness applies to them. A bimodule between two enriched categories gives a hom-object from each object of one to each object of the other. For ordinary categories, the same notion relates to Morita equivalence. The equivalence with Cauchy sequences is Lawvere's theorem, not a tautology.

**nLab:** [metric space](https://ncatlab.org/nlab/show/metric+space), [complete space](https://ncatlab.org/nlab/show/complete+space), [triangle inequality](https://ncatlab.org/nlab/show/triangle+inequality), [Cauchy complete category](https://ncatlab.org/nlab/show/Cauchy+complete+category). It says: “he found that a metric space was complete if and only if every adjunction of bimodules over the enriched category is induced by an enriched functor.”

**Sources:**

- [F. William Lawvere, Metric spaces, generalized logic and closed categories, Rendiconti del Seminario Matematico e Fisico di Milano 43 (1973) 135–166; Reprints in Theory and Applications of Categories 1 (2002) 1–37](http://www.tac.mta.ca/tac/reprints/articles/1/tr1abs.html)

### Over sets, every functor has exactly one strength

**Remember:** In sets, a strength is forced: pair each result with the context.

*True by definition. Confidence: medium.* MSC 18D25 (Actions of a monoidal category, tensorial strength), 18C15, 18C50. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A strength for a functor T is a natural map from Γ × TX to T(Γ × X) that respects the product structure. It lets a computation use a variable from its context Γ. The paper's condition, functional completeness, says roughly that maps are determined by their values on global elements, as in sets.

**Problem.** Over sets, every functor has exactly one strength, and every natural transformation is strong. So every monad on sets is strong in exactly one way, as Moggi's semantics of effects needs.

**How the definition helps.** When maps are determined by their action on points, the strength has only one possible value. In sets it must send (γ, t) to the result of applying T to the map x ↦ (γ, x) at t (our own formula). In general, a monad may have no strength or several. The paper gives several equivalent characterizations and conditions for strength to exist.

**Paper or page:** [What Makes a Strong Monad?](https://arxiv.org/abs/2207.00851v1). It says: “If ▷ᴅ is functionally complete, then every functor F : C → D has a unique strength, and every natural transformation τ : F ⇒ G of functors C → D is strong.”

**Sources:**

- [Dylan McDermott, Tarmo Uustalu, What Makes a Strong Monad?, EPTCS 360 (2022) 113–133, arXiv:2207.00851](https://arxiv.org/abs/2207.00851v1)
- [Anders Kock, Strong functors and monoidal monads, Archiv der Mathematik (1972)](https://doi.org/10.1007/BF01304852)

### Displayed categories give a Grothendieck construction for every functor

**Remember:** Instead of a functor into C, give the fibres over each object and arrow.

*Makes the theorem clean to state or prove.* MSC 18D30 (Fibered categories), 18D60, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A displayed category over C gives a fibre category D(a) for each object a of C. It also gives a set of morphisms over each arrow f of C, with identities and composition that lie over those of C. Equivalently, it is a normal lax functor from C to the bicategory of profunctors. A profunctor is a kind of relation between categories, and a normal lax functor keeps identities but has only comparison maps, not isomorphisms, for composites.

**Problem.** Displayed categories over C are equivalent to the slice Cat/C, that is, to all functors into C (Bénabou). The ordinary Grothendieck construction covers only the fibrations, which come from pseudofunctors Cᵒᵖ → Cat.

**How the definition helps.** Displayed categories let the fibre over an arrow be a profunctor instead of a functor, and let composition be only lax, so they match every functor into C. The old cases come back as special cases. If the lax functor factors through Catᵒᵖ, it is a cloven prefibration, and if it is a pseudofunctor, it is a Conduché functor. In type theory, a displayed category gives a functor whose laws hold by definitional equality.

**nLab:** [displayed category](https://ncatlab.org/nlab/show/displayed+category), [Grothendieck construction](https://ncatlab.org/nlab/show/Grothendieck+construction). It says: “Instead of fibrations over C, such normal lax functors correspond to arbitrary functors into C.”

**Sources:**

- [Benedikt Ahrens, Peter LeFanu Lumsdaine, Displayed categories, Logical Methods in Computer Science 15 (2019), arXiv:1705.04296](https://arxiv.org/abs/1705.04296)

### Street fibrations make fibrations respect equivalence of categories

**Remember:** Lift the morphism up to an isomorphism at its source, not exactly.

*Makes the theorem clean to state or prove.* MSC 18D30 (Fibered categories), 18N10. arXiv math.CT. Level 4: research.

**Definition.** A cartesian morphism is a morphism in E through which other morphisms with the same target factor uniquely, in a way that is compatible with p. A functor p : E → B is a Street fibration if this holds: for every morphism f : a → p(e) in B, there is a cartesian morphism φ : e′ → e and an isomorphism h : p(e′) ≅ a with f ∘ h = p(φ). In words, f lifts to E up to an isomorphism at its source. A Grothendieck fibration asks for h to be an identity.

**Problem.** A functor equivalent to a Street fibration is again a Street fibration, so the notion makes sense in any bicategory. Over B, the 2-category of Street fibrations is equivalent to the 2-category of pseudofunctors Bᵒᵖ → Cat.

**How the definition helps.** Street fibrations ask for a lift only up to isomorphism, so an equivalence of categories cannot break the property. Grothendieck fibrations do not respect equivalence: an equivalence is in general not a Grothendieck fibration. Street fibrations are closed under composition and include all equivalences. For the correspondence with pseudofunctors you must use essential fibres (objects whose image is isomorphic to b, not equal to it).

**nLab:** [Street fibration](https://ncatlab.org/nlab/show/Street+fibration). It says: “A Street fibration, or weak fibration, is a generalization of a Grothendieck fibration which obeys the principle of equivalence, i.e. covariant under equivalence of categories.”

**Sources:**

- [Ross Street, Fibrations in bicategories, Cahiers de topologie et géométrie différentielle catégoriques 21(2) (1980) 111–160](http://www.numdam.org/item/CTGDC_1980__21_2_111_0/)
- [Ross Street, Conspectus of variable categories, Journal of Pure and Applied Algebra 21(3) (1981) 307–338](https://doi.org/10.1016/0022-4049(81)90021-9)

### In an equipment, pointwise Kan extensions are weighted limits

**Remember:** A pointwise Kan extension is a limit weighted by the arrow's hom-profunctor.

*Makes the theorem clean to state or prove.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** An equipment is a 2-category with an extra kind of arrow, called proarrows, that behave like profunctors. A profunctor is a functor of two variables, contravariant in one of them, that generalizes a hom-functor. In an equipment, a J-weighted limit uses a proarrow J as its weight. A pointwise right Kan extension along k : D → A is then a limit weighted by the proarrow A(1,k).

**Problem.** In an equipment, a pointwise right Kan extension along k : D → A is a limit weighted by the proarrow A(1,k). In the equipment of V-categories this gives the correct enriched pointwise Kan extension.

**How the definition helps.** Proarrows give the weights a place to live, so weighted limits and pointwise Kan extensions can be stated. In our own reading, the bare 2-category V Cat does not see V-valued homs, so its internal Kan extensions need not be pointwise. Every pointwise Kan extension is an internal one, but the converse fails in V Cat. The cited papers show that the formal notion matches the classical enriched one.

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows). It says: “That is, the extra data of a proarrow equipment lets us define the good notion of Kan extension (even in the enriched case) as a special case of a general notion of limit.”

**Sources:**

- [R. J. Wood, Abstract proarrows I, Cahiers de topologie et géométrie différentielle 23(3) (1982) 279–290](http://www.numdam.org/item/CTGDC_1982__23_3_279_0)
- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Proarrow equipments give the right fully faithful functors for enriched categories

**Remember:** Fully faithful means: pull back B's homs along f, and you get A's homs.

*Rules out counterexamples.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18D20, 18A22. arXiv math.CT. Level 4: research.

**Definition.** An equipment is a 2-category K with a second 2-category M of proarrows (such as profunctors) and a 2-functor K → M, bijective on objects and locally fully faithful. Each arrow f : A → B gives a proarrow B(1,f) with a right adjoint B(f,1). The arrow f is fully faithful in the equipment when the canonical map from the identity proarrow of A to B(f,f) is an isomorphism.

**Problem.** In the equipment of V-categories and V-profunctors, an arrow is fully faithful exactly when it is a V-fully-faithful V-functor.

**How the definition helps.** The equipment supplies the V-valued homs B(f,f), so the definition can ask directly that f preserves them. The naive internal definition in the bare 2-category V Cat asks that K(X,A) → K(X,B) be fully faithful for all X. This is weaker, so it lets in functors that are not V-fully faithful. The two notions agree when f has a left or a right adjoint.

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows). It says: “is said to be fully faithful if the canonical morphism U(A) → B(f,f) is an isomorphism of proarrows A → A. In V Cat this recaptures the correct notion of V-fully-faithful V-functor.”

**Sources:**

- [R. J. Wood, Abstract proarrows I, Cahiers de topologie et géométrie différentielle 23(3) (1982) 279–290](http://www.numdam.org/item/CTGDC_1982__23_3_279_0)
- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Under a lax-idempotent 2-monad, every map is lax in one way

**Remember:** For colimit-like structure, every functor already has its unique comparison map colim(F∘D) → F(colim D).

*True by definition. Confidence: medium.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18N15. arXiv math.CT. Level 4: research.

**Definition.** A 2-monad T is lax-idempotent (also called Kock–Zöberlein) if every morphism f : A → B between T-algebras carries exactly one 2-cell that makes it a lax T-morphism. A lax T-morphism is a map together with a 2-cell, not necessarily invertible, that compares the two ways round the algebra square. The model case is the 2-monad of free cocompletion under some class of colimits.

**Problem.** For a lax-idempotent 2-monad T, every algebra structure TA → A is left adjoint to the unit A → TA. So an object carries at most one pseudo-algebra structure, up to unique isomorphism.

**How the definition helps.** The definition puts the canonical comparison map into the axioms, and uniqueness of structure then comes from an adjunction. For a functor F between categories with chosen colimits, the unique lax structure is the map colim(F∘D) → F(colim D). F preserves the colimits exactly when this map is invertible. A pseudo-algebra structure on A is the same as a left adjoint to the unit with invertible counit, which is unique up to unique isomorphism.

**nLab:** [lax-idempotent 2-monad](https://ncatlab.org/nlab/show/lax-idempotent+2-monad), [lax morphism](https://ncatlab.org/nlab/show/lax+morphism). It says: “If T is a lax-idempotent 2-monad, then (by definition) every morphism in the underlying 2-category K between (the objects underlying) T-algebras has a unique structure of lax T-morphism.”

**Sources:**

- [Anders Kock, Monads for which structures are adjoint to units, J. Pure Appl. Algebra 104 (1995) 41–59](https://doi.org/10.1016/0022-4049(94)00111-U)
- [G. M. Kelly, Stephen Lack, On property-like structures, Theory Appl. Categ. 3 (1997) no. 9](http://www.tac.mta.ca/tac/volumes/1997/n9/3-09abs.html)

### Virtual equipments remove the cocompleteness condition on the enriching category

**Remember:** A virtual equipment is to an equipment what a multicategory is to a monoidal category.

*Rules out counterexamples.* MSC 18D65 (Proarrow equipments, Yoneda structures, KZ doctrines (lax idempotent monads)), 18D20, 18N10. arXiv math.CT. Level 4: research.

**Definition.** A virtual double category has squares whose top side is a composable string of proarrows (arrows such as profunctors). So proarrows need not have composites. A virtual equipment is a virtual double category in which all units and all restrictions exist. A restriction is the proarrow that you get when you pull a proarrow back along ordinary arrows at its two ends.

**Problem.** For every monoidal category V, V-categories and V-profunctors form a virtual equipment. Internal categories in any category with pullbacks also form one.

**How the definition helps.** The virtual definition never composes proarrows, so it needs no conditions that make composition exist. To make V-profunctors an ordinary equipment, V must be cocomplete with ⊗ preserving colimits on both sides. For internal categories, one needs finite limits and coequalizers that are stable under pullback. The nLab says that most of category theory can still be done in the virtual setting.

**nLab:** [2-category equipped with proarrows](https://ncatlab.org/nlab/show/2-category+equipped+with+proarrows), [virtual equipment](https://ncatlab.org/nlab/show/virtual+equipment). It says: “One can formulate a generalized notion of equipment which includes V Cat for any monoidal category V (and in fact, any multicategory), and Cat(S) for any category S with pullbacks.”

**Sources:**

- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010), arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Pseudo-equivalence relations show which exact categories are free exact completions

**Remember:** Keep the proofs that x \~ y, not only the fact, and weak limits suffice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18A35, 18G05. arXiv math.CT. Level 4: research.

**Definition.** A pseudo-equivalence relation on an object X is a pair of maps R ⇉ X with extra maps that give reflexivity, symmetry and transitivity. Unlike an equivalence relation, the map R → X × X need not be monic, so R can hold several witnesses that two points are related. The free exact completion Cex/lex of a category C has these pseudo-equivalence relations as its objects. The construction works when C has only weak finite limits (limits whose comparison maps exist but need not be unique).

**Problem.** The Carboni–Vitale theorem is about exact categories (regular categories in which every equivalence relation is the kernel pair of some map). An exact category D is Cex/lex for some C with weak finite limits if and only if D has enough projectives (every object is a quotient of a projective object). Then C can be the full subcategory of projectives of D.

**How the definition helps.** In our own reading, the construction asks only for weak finite limits, and this is why the theorem needs no extra condition on the projectives. The free exact completion adds formal quotients of pseudo-equivalence relations. The nLab notes that this construction works when C has only weak finite limits. This matters because the projectives of an exact category with enough projectives always have weak finite limits. But they need not have finite limits. In Cex/lex, the objects of C are exactly the projectives.

**nLab:** [regular and exact completions](https://ncatlab.org/nlab/show/regular+and+exact+completions). It says: “Moreover, an exact category D is of the form Cex/lex for some C (with weak finite limits) if and only if it has enough projectives”

**Sources:**

- [Aurelio Carboni, Enrico Vitale, Regular and exact completions, Journal of Pure and Applied Algebra 125 (1998) 79–116](https://doi.org/10.1016/S0022-4049(96)00115-6)

### With the right internal categories, Cat becomes 2-exact

**Remember:** A 2-congruence is an internal category with discrete hom-objects, like an honest 1-category.

*Rules out counterexamples. Confidence: medium.* MSC 18E08 (Regular categories, Barr-exact categories), 18N10, 18D40. arXiv math.CT. Level 4: research.

**Definition.** A 2-congruence in a finitely complete 2-category K is a homwise-discrete internal category D. That is, D has an object D₀, a discrete morphism D₁ → D₀ × D₀, and composition and identities that satisfy the category axioms up to isomorphism. 'Discrete' means that D₁ behaves like a family of sets of arrows, not of categories. D must also be a two-sided fibration D₀ ← D₁ → D₀; equivalently, there is a functor from the kernel of D₀ to D that is the identity on D₀.

**Problem.** In a finitely complete 2-category, the comma object f/f of any morphism f is a 2-congruence, its kernel. In Cat every 2-congruence is a kernel, so Cat is 2-exact.

**How the definition helps.** The two restrictions remove the internal categories that are not kernels. An arbitrary internal category in Cat is a double category, and not all of them come from 1-categories as kernels. Because D₁ → D₀ × D₀ is discrete, the coherence axioms for the structural isomorphisms hold automatically. The nLab notes that 2-exactness is not a conservative extension of 1-exactness.

**nLab:** [2-congruence](https://ncatlab.org/nlab/show/2-congruence), [exact 2-category](https://ncatlab.org/nlab/show/exact+2-category). It says: “But internal categories in Cat are double categories, so we need to somehow cut down the double categories to those that really represent honest 1-categories. These are the 2-congruences.”

**Sources:**

- [Ross Street, Two-dimensional sheaf theory, J. Pure Appl. Algebra 23 (1982) 251–270](https://doi.org/10.1016/0022-4049(82)90101-3)

### Finitely cocomplete categories give a Deligne tensor product that always exists

**Remember:** Work with finitely cocomplete categories, and the tensor product always exists.

*Makes the theorem clean to state or prove.* MSC 18E10 (Abelian categories, Grothendieck categories), 18M05, 18A35. arXiv math.CT. Level 4: research.

**Definition.** A finitely cocomplete category has all finite colimits. A right exact functor is a functor that preserves finite colimits. Kelly's tensor product A ⊠ B of two finitely cocomplete categories is the finitely cocomplete category with this property: right exact functors A ⊠ B → C are the same as functors A × B → C that are right exact in each variable.

**Problem.** Kelly's tensor product of two finitely cocomplete categories always exists. It agrees with Deligne's tensor product of finite abelian categories whenever the latter exists.

**How the definition helps.** In the larger world of finitely cocomplete categories, the tensor product always exists, so no finiteness conditions are needed. Deligne's tensor product exists for finite abelian categories, but not for all abelian categories. The result need not be abelian. So one can state A-Mod ⊠ B-Mod ≃ (A ⊗ B)-Mod with no finiteness conditions, as Chirvasitu and Johnson-Freyd do.

**nLab:** [Deligne tensor product of abelian categories](https://ncatlab.org/nlab/show/Deligne+tensor+product+of+abelian+categories). It says: “He argues that in this case it is better to use Kelly's tensor product of finitely cocomplete categories, because it always exists, and it agrees with Deligne's tensor product when the latter exists.”

**Sources:**

- [Ignacio López Franco, Tensor products of finitely cocomplete and abelian categories, Journal of Algebra 396 (2013) 207–219](https://doi.org/10.1016/j.jalgebra.2013.08.015)
- [Alexandru Chirvasitu, Theo Johnson-Freyd, The fundamental pro-groupoid of an affine 2-scheme, Applied Categorical Structures 21 (2013) 469–522, arXiv:1105.3104](https://arxiv.org/abs/1105.3104)

### Left and right abelian envelopes of a thin category are Ringel dual

**Remember:** Same thin category, other side of the envelope, Ringel dual result.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18E10 (Abelian categories, Grothendieck categories), 16G10. arXiv math.RT, math.CT. Level 4: research.

**Definition.** An exact category is an additive category with a chosen class of short exact sequences. A thin exact category is built from finitely many copies of finite-dimensional vector spaces, glued by admissible subcategories. Its right abelian envelope is the abelian category universal for right exact functors out of it, and the left envelope uses left exact functors. For example, coherent sheaves on a scheme form the right envelope of vector bundles.

**Problem.** Highest weight categories are exactly the right or left abelian envelopes of thin exact categories. A highest weight category is an abelian category whose simple objects carry a partial order, with standard objects that build the projective objects. For a thin exact category, the right and left envelopes are Ringel dual to each other.

**How the definition helps.** With the two envelopes, Ringel duality becomes a change of side: the same thin category, with right exact or with left exact universality. In our own explanation, Ringel duality is usually defined through a tilting object, so this gives a new way to state it. The work is proving that the envelopes exist and that they are highest weight categories. The duality for thin categories itself uses derived categories and Serre functors.

**Paper or page:** [Abelian envelopes of exact categories and highest weight categories](https://arxiv.org/abs/2012.15707v4). It says: “Ringel duality is interpreted as a duality between the right and left abelian envelopes of a thin exact category.”

**Sources:**

- [Agnieszka Bodzenta, Alexey Bondal, Abelian envelopes of exact categories and highest weight categories, arXiv:2012.15707 (2024)](https://arxiv.org/abs/2012.15707v4)
- [Agnieszka Bodzenta, Alexey Bondal, Abelian envelopes of exact categories and highest weight categories, Mathematische Zeitschrift (2024)](https://doi.org/10.1007/s00209-024-03543-3)

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

**Definition.** A geometric morphism is the usual notion of map between toposes. It is a (weak) homotopy equivalence of toposes if it induces an equivalence of fundamental ∞-groupoids, or more generally of shapes. For locally ∞-connected 1-toposes, this agrees with the classical notion. The classical notion asks for isomorphisms on cohomology with locally constant abelian coefficients, and on nonabelian cohomology in degree one.

**Problem.** Every local geometric morphism and every totally connected geometric morphism is a homotopy equivalence of toposes.

**How the definition helps.** The fundamental ∞-groupoid sends adjunctions to equivalences, and these geometric morphisms are parts of adjunctions. Π∞ is a 2-functor from toposes to ∞-groupoids, where every 2-morphism is invertible. An adjunction in ∞-groupoids must be an equivalence. The agreement with the classical cohomological notion uses the Artin–Mazur theorem.

**nLab:** [homotopy equivalence of toposes](https://ncatlab.org/nlab/show/homotopy+equivalence+of+toposes). It says: “One important thing to note is that any adjunction in the 2-category Topos induces a homotopy equivalence in any of the above senses.”

**Sources:**

- [M. Artin, B. Mazur, Etale Homotopy, Lecture Notes in Mathematics 100, Springer (1969)](https://doi.org/10.1007/BFb0080957)

### Condensed abelian groups form an abelian category

**Remember:** Test a topological group by maps from profinite sets, and the algebra becomes abelian.

*Rules out counterexamples.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18E10, 18F20. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A profinite set is a compact Hausdorff totally disconnected space, such as the Cantor set. A condensed set is a sheaf of sets on profinite sets, where a cover is a finite family of jointly surjective maps. A condensed abelian group is an abelian group object in condensed sets. Pyknotic sets, by Barwick and Haine, are a close variant. Under mild conditions, topological abelian groups sit inside condensed abelian groups as a full subcategory.

**Problem.** Condensed abelian groups form an abelian category, with all limits and colimits and enough compact projective objects. Topological abelian groups do not form an abelian category.

**How the definition helps.** Condensed abelian groups form an abelian category, so exact sequences and derived functors of topological objects can be stated in the usual way. Scholze's counterexample for topological groups is the identity map from discrete ℝ to ℝ with its usual topology. It has zero kernel and zero cokernel, but it is not an isomorphism. In condensed abelian groups its cokernel is nonzero.

**nLab:** [condensed mathematics](https://ncatlab.org/nlab/show/condensed+mathematics), [condensed abelian group](https://ncatlab.org/nlab/show/condensed+abelian+group), [condensed set](https://ncatlab.org/nlab/show/condensed+set), [pyknotic set](https://ncatlab.org/nlab/show/pyknotic+set). It says: “For instance, the category of topological abelian groups is not abelian, which means for instance that it lacks a good theory of exact sequences. But the category of condensed abelian groups is abelian”

**Sources:**

- [Peter Scholze (all results joint with Dustin Clausen), Lectures on Condensed Mathematics, lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Clark Barwick, Peter Haine, Pyknotic objects, I. Basic notions, arXiv:1904.09966 (2019)](https://arxiv.org/abs/1904.09966)

### Four conditions on a site give a cohesive topos

**Remember:** Each condition on the site buys one adjoint of the cohesive topos.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT, math.LO. Level 4: research.

**Definition.** A site is a category with a rule that says which families of maps cover an object; these families are the covering sieves. A cohesive site is a small site with four properties. It has a terminal object, and its covering sieves are connected (as categories). Every object has a global point (a map from the terminal object), and the site is cosifted, for example because it has finite products. Cosifted means that colimits indexed by its opposite category commute with finite products of sets.

**Problem.** The sheaf topos Sh(C) is then cohesive. That is, it has a chain of adjoint functors Π₀ ⊣ Disc ⊣ Γ ⊣ CoDisc to sets, Π₀ preserves finite products, and pieces have points. Here Γ takes the global points of a sheaf, Π₀ takes its set of connected pieces, and Disc and CoDisc make a set into a discrete or a codiscrete sheaf.

**How the definition helps.** Each condition gives one part of the cohesive structure, so the proof is a short check. Connected covers make constant presheaves into sheaves, so Disc has a left adjoint Π₀. Cosiftedness makes Π₀ preserve finite products. Global points make the site local (its global sections functor has a further right adjoint). This gives CoDisc and makes the map Disc → CoDisc monic. The real work is to find sites in practice that satisfy the conditions, such as Cartesian spaces (the spaces ℝⁿ) with their open covers.

**nLab:** [cohesive site](https://ncatlab.org/nlab/show/cohesive+site). It says: “For C a cohesive site, the category of sheaves Sh(C) on C is a cohesive topos over Set for which pieces have points.”

**Sources:**

- [U. Schreiber, Differential cohomology in a cohesive infinity-topos, arXiv:1310.7930 (2013)](https://arxiv.org/abs/1310.7930)

### In cohesive sites, finite products make the shape functor preserve products

**Remember:** Give the site finite products, and Π₀ preserves finite products.

*True by definition. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 4: research.

**Definition.** A cohesive site is a site C with the following properties, and a few more. It is locally connected (every covering sieve is connected) and cosifted (for example, it has finite products). Every object has a point. The sheaf topos on such a site is then cohesive.

**Problem.** On a locally connected site C, the functor Π₀ : Sh(C) → Set preserves finite products exactly when C is cosifted. In particular, this holds when C has finite products.

**How the definition helps.** The axiom on the site is a restatement of the property that Π₀ needs. Local connectedness makes constant presheaves into sheaves, so Π₀ exists and is the colimit over Cᵒᵖ. Colimits over Cᵒᵖ commute with finite products exactly when C is cosifted. The rest of cohesiveness still needs short separate arguments.

**nLab:** [cohesive site](https://ncatlab.org/nlab/show/cohesive+site), [categories with finite products are cosifted](https://ncatlab.org/nlab/show/categories+with+finite+products+are+cosifted). It says: “The condition that Π₀ preserves finite products is precisely the condition that C be a cosifted category.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos (2013), arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Johnstone's topological topos makes geometric realization preserve finite limits

**Remember:** The topological topos is the world of spaces seen through convergent sequences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18F60, 55U10. arXiv math.CT, math.GN. Level 4: research.

**Definition.** The topological topos is a topos of sheaves on a small full subcategory of Top. That subcategory has two objects: the point and ℕ⁺, the one-point compactification of the natural numbers (a convergent sequence together with its limit). The sheaves are taken for the canonical topology. Sequential spaces (spaces whose topology is fixed by their convergent sequences) sit inside it as a full subcategory.

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

### Superextensive sites let you sheafify for single covers after imposing coproducts

**Remember:** Glue the covering pieces into one coproduct, and treat coproducts separately.

*Rules out counterexamples. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B50, 18F20. arXiv math.CT. Level 4: research.

**Definition.** An extensive category is a category whose coproducts are disjoint and stable under pullback. A Grothendieck topology on it is superextensive if it contains the extensive topology, whose covering families are the families of coproduct injections, and every covering family is generated by a finite (or small) one. Then you can replace each covering family (Uᵢ → B) by the single cover ∐ᵢ Uᵢ → B.

**Problem.** Let T be a superextensive topology whose covers are stable under finite coproducts. Then sheafifying an extensive sheaf for the single covers of T gives an extensive sheaf, and hence a T-sheaf.

**How the definition helps.** For a superextensive topology the two conditions do not interfere, so you can impose them one after the other. For two arbitrary topologies, sheafification for one need not preserve sheaves for the other. The nLab's counterexample is the walking arrow 0 → 1, with one topology that inverts the arrow and another that makes 0 terminal. The proof uses extensivity to split covers over a coproduct c₁ + c₂.

**nLab:** [superextensive site](https://ncatlab.org/nlab/show/superextensive+site). It says: “In general, it is not true, for two Grothendieck topologies T₁ and T₂ on the same category, that T₂-sheafification preserves T₁-sheaves”

**Sources:**

- [David M. Roberts, Internal categories, anafunctors and localisations, Theory and Applications of Categories 26 (2012), arXiv:1101.2363](https://arxiv.org/abs/1101.2363)

### The atomic topology works on any category, without the Ore condition

**Remember:** In the atomic topology, any single arrow into an object covers it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F10 (Grothendieck topologies and Grothendieck topoi), 18B25. arXiv math.CT. Level 4: research.

**Definition.** The atomic topology on a category C is the smallest Grothendieck topology in which every nonempty sieve covers. A sieve on an object is a set of arrows into it that is closed under composition with arrows into their domains. Classically you ask C to satisfy the right Ore condition (any two arrows with the same target complete to a commutative square), and then the nonempty sieves already form a topology.

**Problem.** For every atomic site (C, Jₐₜ), the sheaf topos Sh(C, Jₐₜ) is an atomic Grothendieck topos.

**How the definition helps.** Defining the topology as the one generated, instead of as the nonempty sieves, removes the Ore hypothesis from the statement. Classically, the nonempty sieves form a topology only when C satisfies the Ore condition. The proof reduces to the Ore case: the objects that the empty sieve does not cover form a full subcategory with the Ore condition, and the comparison lemma finishes. The topos can be degenerate, for example on the walking cospan a → c ← b.

**nLab:** [atomic site](https://ncatlab.org/nlab/show/atomic+site). It says: “it was observed by O. Caramello (2012) that the atomic topology can in fact be defined on arbitrary categories not only on those satisfying the Ore condition.”

**Sources:**

- [Olivia Caramello, Atomic toposes and countable categoricity, Applied Categorical Structures 20 (2012) 379–391, arXiv:0811.3547](https://arxiv.org/abs/0811.3547)

### In a (2,1)-topos, every principal bundle is locally trivial

**Remember:** In a higher topos, the bundle is the quotient, and the quotient is the bundle.

*True by definition. Confidence: medium.* MSC 18F15 (Abstract manifolds and fiber bundles (category-theoretic aspects)), 18N60, 18F20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A (2,1)-topos is a setting like the stacks of groupoids on a site, where objects can have internal symmetries. In a (2,1)-topos H, a G-principal bundle over X is a map P → X with a G-action that makes X the homotopy quotient of P by G. Such bundles are equivalent to cocycles X → BG, which are maps into the delooping BG of G (the object with one point whose loops form G).

**Problem.** In a (2,1)-topos, every G-principal bundle is locally trivial. In topological spaces, a free action with a quotient, a Cartan principal bundle, need not be locally trivial.

**How the definition helps.** In a (2,1)-topos, quotients are homotopy quotients, so local triviality follows fairly directly from the Giraud axioms. In topological spaces, take the infinite product of circles divided by the product of their subgroups of order 2 (Karube). This is a free quotient with no local sections. The definition does not fix the classical problem in spaces; it changes the base to a homotopy quotient.

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle), [principal infinity-bundle](https://ncatlab.org/nlab/show/principal+infinity-bundle). It says: “every G-principal bundle is locally trivial in a (2,1)-topos H; accordingly there is no mismatch between the various definitions anymore as in the context of topological spaces”

**Sources:**

- [Thomas Nikolaus, Urs Schreiber, Danny Stevenson, Principal ∞-bundles – General theory, J. Homotopy Relat. Struct. 10 (2015) 749–801, arXiv:1207.0248](https://arxiv.org/abs/1207.0248)
- [Takashi Karube, On the local cross-sections in locally compact groups, J. Math. Soc. Japan 10 (1958) 343–347](https://doi.org/10.2969/jmsj/01040343)

### Light condensed sets form a Grothendieck topos without universes

**Remember:** Light means countable, so the test spaces stay a small collection.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18F10, 54B40. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A light profinite set is a countable limit of finite sets. A light condensed set is a sheaf on the site of light profinite sets. In this site, the covers are finite families of maps that are jointly surjective.

**Problem.** The category of light condensed sets is a Grothendieck topos, and it needs no Grothendieck universes (large sets fixed in advance to bound sizes). It still contains the sequential topological spaces (spaces whose topology is fixed by convergent sequences) as a full subcategory.

**How the definition helps.** Countable limits of finite sets give an essentially small site, and sheaves on a small site always form a Grothendieck topos. Condensed sets are sheaves on all profinite sets, which form a large site. The nLab notes that condensed sets form merely a pretopos, not a Grothendieck topos. Pyknotic sets avoid this problem by fixing a universe. Light profinite sets form an essentially small site, so the usual theorem applies at once. The cost is that only sequential spaces, not all compactly generated spaces, embed fully faithfully. The internal logic of this topos is separate, harder work: for example, WLPO fails and LLPO holds there (these are weak forms of excluded middle).

**nLab:** [light condensed set](https://ncatlab.org/nlab/show/light+condensed+set). It says: “unlike condensed sets, light condensed sets form a Grothendieck topos, rather than merely a pretopos”

**Sources:**

- [Dustin Clausen, Peter Scholze, Analytic Stacks, lecture course, 2023](https://indico.math.cnrs.fr/event/10345/)

### On the test spaces ℝⁿ alone, BG is already a stack

**Remember:** Every ℝⁿ is contractible, so every G-bundle on it is trivial.

*True by definition. Confidence: medium.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18N60, 55R35. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A smooth ∞-groupoid is an ∞-sheaf on CartSp: a presheaf of spaces on CartSp that glues correctly over covers. CartSp is the category whose objects are the Cartesian spaces ℝⁿ and whose morphisms are smooth maps, with good open covers as its covers. For a Lie group G, BG is the presheaf of groupoids with one object, whose morphisms over a test space are the smooth functions from that space to G.

**Problem.** On the site CartSp, the presheaf BG satisfies descent, so it is already an ∞-stack. On the site of all manifolds it fails descent, and its stackification is the stack of principal G-bundles.

**How the definition helps.** On CartSp, BG needs no correction, because every G-bundle on ℝⁿ is trivial and there is nothing to glue. The gluing has not gone away. It comes back when you map a manifold X that is not contractible into BG, and these maps give G-bundles on X.

**nLab:** [smooth infinity-stack](https://ncatlab.org/nlab/show/smooth+infinity-stack). It says: “But restricted to the site CartSp the simplicial sheaf BG does satisfy descent: there is up to isomorphism only a single G-bundle on ℝⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Small presheaves give the free cocompletion of a large category

**Remember:** A small presheaf is built from a small diagram of representables.

*Makes the theorem clean to state or prove.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18A35, 18C35. arXiv math.CT. Level 4: research.

**Definition.** Let C be a locally small category that may be large. A presheaf F : Cᵒᵖ → Set is small when it is a small colimit of representable presheaves. Equivalently, it is the left Kan extension of a functor defined on a small category.

**Problem.** For a locally small category C, possibly large, the small presheaves on C form a locally small category. It is the free cocompletion of C.

**How the definition helps.** Small presheaves come from small data, so they form a locally small category, and no universe is needed. The category of all presheaves on a large C is not locally small. Small presheaves are cocomplete, because small colimits of small colimits are small. Completeness is not automatic; Day and Lack characterize when it holds.

**nLab:** [small presheaf](https://ncatlab.org/nlab/show/small+presheaf). It says: “Since small colimits of small colimits are small colimits, P C is cocomplete. In fact, it is easily seen to be the free cocompletion of C, even when C is not small.”

**Sources:**

- [Brian J. Day, Stephen Lack, Limits of small functors, Journal of Pure and Applied Algebra 210 (2007) 651–663, arXiv:math/0610439](https://arxiv.org/abs/math/0610439)

### Solid modules give the exceptional pushforward f₍!₎ in coherent cohomology

**Remember:** A solid module is one that cannot tell A\[S\] from its completion A■\[S\].

*Makes the theorem clean to state or prove. Confidence: low.* MSC 18F20 (Presheaves and sheaves, stacks, descent conditions (category-theoretic aspects)), 18G80, 14F08. arXiv math.AG, math.CT. Level 4: research.

**Definition.** A profinite set is a compact, totally disconnected Hausdorff space, such as the Cantor set. A condensed A-module is a sheaf of A-modules on profinite sets; it plays the role of a topological module. A complex M of condensed A-modules is solid if, for every profinite set S, maps from the free module A\[S\] to M extend uniquely along A\[S\] → A■\[S\]. Here A■\[S\] is a completed version of A\[S\]. Solid modules form a full subcategory D■(A).

**Problem.** On solid quasi-coherent modules, the pullback j\* along an open immersion has a left adjoint j₍!₎. This gives an exceptional pushforward f₍!₎ with a right adjoint f⁽!⁾, and a coherent duality theorem (Scholze, Theorem 11.1).

**How the definition helps.** On solid modules, j\* has a left adjoint, so you can build f₍!₎ from it. You define f₍!₎ as the pushforward from a relative compactification composed with j₍!₎. This f₍!₎ commutes with direct sums, so its right adjoint f⁽!⁾ exists. The real work is in the theory of condensed and solid modules.

**nLab:** [solid module](https://ncatlab.org/nlab/show/solid+module). It says: “The functor f₍!₎ has to be constructed, and f⁽!⁾ will be defined to be its right adjoint.”

**Sources:**

- [Peter Scholze, Lectures on condensed mathematics, 2019 (lecture notes, Lectures IX–XI)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### Flags determine their Waldhausen quotients

**Remember:** A flag determines its quotient data up to unique compatible isomorphism.

*True by definition.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** In Waldhausen’s S-construction, an n-step diagram records a chain of cofibrations from zero with its quotients. A cofibration is a chosen type of inclusion. Each quotient is the pushout that collapses an earlier object to zero.

**Problem.** The functor from the groupoid of n-step Waldhausen diagrams to the groupoid of n-step cofibration flags is an equivalence. In both groupoids use only isomorphisms as maps.

**How the definition helps.** Each quotient in the full diagram is a pushout, so the bare chain determines it up to unique compatible isomorphism. Here the pushout identifies the earlier object with zero. In our own proof, its universal property extends every isomorphism of chains uniquely to the full diagrams. This comparison holds for each fixed chain length. The full diagrams also record the quotients needed to remove the first step of a chain.

**Paper or page:** [2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561). It says: “The functor μₙ : iSₙ𝒞 → Mₙ𝒞 which sends A to A₀,₁ ↣ A₀,₂ ↣ ⋯ ↣ A₀,ₙ is an equivalence.”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Tanner Nathan Carawan, 2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561)

### K-theory is the universal additive invariant

**Remember:** K-theory is what the universal additive invariant sees when the sphere probes it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)), 18N60. arXiv math.KT, math.CT. Level 4: research.

**Definition.** An additive invariant is a functor from small stable ∞-categories to a stable ∞-category that preserves filtered colimits and sends split exact sequences to cofiber sequences. Blumberg, Gepner and Tabuada define the universal additive invariant U, with values in noncommutative motives.

**Problem.** Waldhausen K-theory of A is the mapping spectrum from U(finite spectra) to U(A). So natural transformations from K-theory to an additive invariant E are the same as elements of E(finite spectra).

**How the definition helps.** A universal property makes maps out of K-theory easy to describe. K-theory is corepresented by the motive of finite spectra, so the Yoneda lemma classifies maps out of it. The authors use this to classify maps from K-theory to topological Hochschild homology and to describe the cyclotomic trace. The real content is the comparison with Waldhausen K-theory.

**nLab:** [K-theory of a stable (∞,1)-category](https://ncatlab.org/nlab/show/K-theory+of+a+stable+%28%E2%88%9E%2C1%29-category), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “universal with the property that it respects filtered colimits and exact sequences in a suitable way.”

**Sources:**

- [Andrew Blumberg, David Gepner, Gonçalo Tabuada, A universal characterization of higher algebraic K-theory, Geom. Topol. 17 (2013) 733–838, arXiv:1001.2282](https://arxiv.org/abs/1001.2282)

### Mapping cones turn arrows into K-theory objects

**Remember:** A square counts as an equivalence when its cone map does.

*Makes the theorem clean to state or prove.* MSC 18F25 (Algebraic \\(K\\)-theory and \\(L\\)-theory (category-theoretic aspects)). arXiv math.KT. Level 4: research.

**Definition.** Use Schlichting’s exact categories with forms, which specify short exact sequences, a duality and quadratic form data. They also specify weak equivalences, the maps one treats as invertible. Assume a strong symmetric cone, Schlichting’s compatible choice of cone and path constructions for this duality. For arrows as objects, treat a commuting square as a weak equivalence precisely when it gives a weak equivalence on mapping cones.

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

**How the definition helps.** In our own proof, the matching isomorphism locates the subobject whose inverse image in X recovers B. For our own example, set R = ℤ/4ℤ, k = ℤ/2ℤ, X = R ⊕ k and A = 2R ⊕ 0. Then X/A is a two-dimensional vector space over k. Its two coordinate lines are isomorphic as subobjects after exchanging coordinates. Their inverse images are R ⊕ 0 and 2R ⊕ k. Only the first has an element of order four, so the flags differ.

**Paper or page:** [2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561). It says: “where the squares are pushouts and the right square is a pullback.”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Tanner Nathan Carawan, 2-Segal maps associated to a category with cofibrations](https://arxiv.org/abs/2405.11561)

### Differential graded C∞-rings make the Poincaré lemma formal

**Remember:** The degree 0 differential must obey the chain rule for every smooth function.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F40 (Synthetic differential geometry, tangent categories, differential categories), 18G35, 58A10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A C∞-ring is a ring in which you can apply every smooth function ℝⁿ → ℝ, not only polynomials. A (coconnective) differential graded C∞-ring is a commutative differential graded real algebra A whose degree 0 part A₀ is a C∞-ring. The differential A₀ → A₁ must be a C∞-derivation, so it obeys the chain rule for all smooth functions, not only for polynomials.

**Problem.** The free differential graded C∞-ring on C∞(M) is the de Rham complex Ω(M). As a consequence, Ω(ℝⁿ) is quasi-isomorphic to ℝ in degree 0 (the Poincaré lemma).

**How the definition helps.** The chain-rule condition makes the free object the de Rham complex, and then the Poincaré lemma is a formal fact about free objects. The ordinary free commutative differential graded algebra does not give Ω(M), because ordinary Kähler differentials are wrong for smooth functions. Ω(ℝⁿ) is free on a contractible cochain complex, and the free functor preserves cochain homotopy equivalences. The real content is the Dubuc–Kock theorem on Kähler C∞-differentials.

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

**Definition.** Poset cocalculus takes a functor from a distributive lattice, such as the subsets of a set, to a model category. A model category is a setting for homotopy theory. The method gives codegree n approximations, and a codegree n functor sends strongly bicartesian (n+1)-cubes to homotopy cocartesian ones. The Čech complex has a simplex for each set of points whose r-balls meet, and Vietoris–Rips for each set pairwise within 2r.

**Problem.** In poset cocalculus, the Vietoris–Rips filtration is precisely the codegree 2 approximation of the Čech filtration.

**How the definition helps.** The codegree n approximation keeps only the information from small subsets (our own). The Vietoris–Rips filtration checks only pairs of points, so it appears as the codegree 2 case (our own). The paper also proves that the approximations are stable under interleaving distance. The hard part is the construction of the cocalculus tower.

**Paper or page:** [Poset functor cocalculus and applications to topological data analysis](https://arxiv.org/abs/2501.05996). It says: “We draw connections to filtrations of simplicial complexes, and show that the Vietoris-Rips filtration is precisely the codegree 2 approximation of the Čech filtration.”

**Sources:**

- [Bjørnar Gullikstad Hem, Poset functor cocalculus and applications to topological data analysis, arXiv:2501.05996 (2025)](https://arxiv.org/abs/2501.05996)

### Delta-generated spaces form a convenient category that is locally presentable

**Remember:** A Δ-generated space has a topology that its simplices see completely.

*Makes the theorem clean to state or prove.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18C35. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A space X is Δ-generated if its topology is the final topology for all continuous maps from the topological simplices Δⁿ into X. In other words, a set is open when its preimage under every continuous map Δⁿ → X is open.

**Problem.** Δ-generated spaces form a coreflective, cartesian closed subcategory of Top that contains all CW complexes. This category is also locally presentable (Fajstrup and Rosický).

**How the definition helps.** The definition tests open sets with a small set of spaces, the simplices, instead of all compact Hausdorff spaces. A small set of generators is what local presentability needs. Coreflective means that every space has a best Δ-generated approximation that maps to it.

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

**Definition.** Give the category of compact Hausdorff spaces the coverage of finite jointly surjective families. That is, a cover is a finite family of maps whose images together cover the target. A quasi-topological space is a concrete sheaf on this site. It is a set X with a compatible choice, for each compact Hausdorff space C, of which functions C → X count as continuous.

**Problem.** Quasi-topological spaces form a complete, cocomplete and cartesian closed category.

**How the definition helps.** Defining a space by its maps in from compact Hausdorff spaces makes it a concrete sheaf. Concrete sheaves on a site form a quasitopos, so they have all limits, colimits and exponentials. Top is not cartesian closed. The price is size: there is no small site, so the quasitopos property needs care.

**nLab:** [quasi-topological space](https://ncatlab.org/nlab/show/quasi-topological+space). It says: “In particular, quasi-topological spaces form a complete and cocomplete cartesian closed category.”

**Sources:**

- [Edwin Spanier, Quasi-topologies, Duke Mathematical Journal 30 (1963) 1–14](https://doi.org/10.1215/S0012-7094-63-03001-1)

### Topological functors must lift large families to be faithful and self-dual

**Remember:** Any object gets the initial structure for any family of maps out of it.

*Rules out counterexamples. Confidence: medium.* MSC 18F60 (Categories of topological spaces and continuous mappings), 18A22. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A functor U : C → D is topological if every family of maps fᵢ : X → U(Sᵢ) has an initial lift. Here the Sᵢ are objects of C, and the family may be large, that is, indexed by a proper class. An initial lift is an object T of C over X through which the fᵢ become maps of C, in a universal way. For the forgetful functor Top → Set, the initial lift is the coarsest topology that makes the fᵢ continuous.

**Problem.** Every topological functor is faithful. The notion is self-dual: U is topological exactly when every large family of maps U(Sᵢ) → X has a final lift.

**How the definition helps.** When the definition allows large families, faithfulness and self-duality follow as theorems. With only small families they fail. Take a large category C with all small products and the functor from C to the one-object category. It lifts all small families, but it need not be faithful, and it need not lift the dual families unless C has all small coproducts.

**nLab:** [topological concrete category](https://ncatlab.org/nlab/show/topological+concrete+category). It says: “However, it need not satisfy the dual property (unless C also has all small coproducts) nor need it be faithful.”

**Sources:**

- [Jiří Adámek, Horst Herrlich, George E. Strecker, Abstract and Concrete Categories: The Joy of Cats, Wiley (1990); reprinted in Reprints in Theory and Applications of Categories 17 (2006)](http://www.tac.mta.ca/tac/reprints/articles/17/tr17abs.html)

### Defining pointfree continuity by bases gives Brouwer's principle a precise form

**Remember:** Define continuity by basic opens, and Brouwer's principle gets precise conditions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 03F60. arXiv cs.LO, math.GN. Level 4: research.

**Definition.** A pointfree topology is given by a set of basic opens and a covering relation between them, without assuming points. An operation on points is called continuous if a relation between basic opens induces it. The principle of pointfree continuity says that every relation that induces a continuous operation on points is a morphism of pointfree topologies.

**Problem.** The principle of pointfree continuity holds when the source is bi-spatial. For the formal Baire space or the formal unit interval, mapped to the natural numbers, it is equivalent to spatiality of the source.

**How the definition helps.** Because continuity is defined through bases, Brouwer's principle becomes a statement that one can prove or refute for each pair of spaces. Bi-spatial is a strong form of having enough points, and spatial is the plain form (our own gloss). Known links between spatiality, bar induction and compactness of the unit interval are restated in terms of this principle. Spatiality itself stays hard (our own remark).

**Paper or page:** [The principle of pointfree continuity](https://arxiv.org/abs/1802.04512v4). It says: “An operation between points of pointfree topologies is continuous if it is induced by a relation between the bases of the topologies; this gives a rigorous condition for Brouwer's continuity principle to hold.”

**Sources:**

- [Tatsuji Kawai, Giovanni Sambin, The principle of pointfree continuity, Logical Methods in Computer Science 15(1) (2019), arXiv:1802.04512](https://arxiv.org/abs/1802.04512v4)

### Locale maps are the right continuous functions for constructive analysis

**Remember:** Define continuity on the open sets, and composition and 1/x come free.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 03F60. arXiv math.GN, math.LO. Level 4: research.

**Definition.** In the localic approach, a continuous function between spaces of real numbers is a map of locales, or of formal topologies, not a function on points. A locale is a space described by its lattice of open sets, with no points needed. A formal topology is a predicative version of a locale. On the locale ℝ, these maps are the same as Bishop's locally uniformly continuous functions.

**Problem.** Maps of locales give a constructive notion of continuous function that is closed under composition and contains x ↦ 1/x. On ℝ they are exactly Bishop's locally uniformly continuous functions (Palmgren).

**How the definition helps.** Locale maps have these properties, while a notion of continuity on points needs the fan theorem to have them. Waaldijk showed that a pointwise notion that is closed under composition, contains x ↦ 1/x and agrees with uniform continuity on closed intervals implies the fan theorem. Bishop rejected the fan theorem. The hard part moves into building the theory of locales.

**nLab:** [Bishop's constructive mathematics](https://ncatlab.org/nlab/show/Bishop%27s+constructive+mathematics). It says: “Palmgren shows that the continuous endomaps of the locale of real numbers ℝ coincide with Bishop's locally uniformly continuous functions, whereas for spaces other than ℝ itself locale maps are better-behaved than Bishops'”

**Sources:**

- [F. Waaldijk, On the Foundations of Constructive Mathematics – Especially in Relation to the Theory of Continuous Functions, Foundations of Science 10 (2005) 249–324](https://doi.org/10.1007/s10699-004-3065-z)

### Locales make Banach–Alaoglu, Hahn–Banach and Gelfand duality constructive

**Remember:** A locale can be compact before anyone has found its points.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 46S30, 46L05. arXiv math.FA, math.GN. Level 4: research.

**Definition.** Replace the topological space of functionals, or the Gelfand spectrum (the space of characters of a commutative C\*-algebra), by a locale. A locale is a space described only by its lattice of open sets. We do not ask it to have enough points.

**Problem.** Stated with locales, the Hahn–Banach and Banach–Alaoglu theorems hold constructively. Gelfand duality between commutative C\*-algebras and compact regular locales also holds constructively, and so in any topos.

**How the definition helps.** These theorems need choice only to produce points, such as functionals or characters, and a locale does not need its points. Pelletier built a compact, completely regular locale of functionals whose points are the unit ball of the dual space. Coquand and Spitters gave a fully constructive proof of Gelfand duality. The classical theorems come back only when choice gives the locale enough points.

**nLab:** [Banach-Alaoglu theorem](https://ncatlab.org/nlab/show/Banach-Alaoglu+theorem), [Hahn-Banach theorem](https://ncatlab.org/nlab/show/Hahn-Banach+theorem), [constructive Gelfand duality theorem](https://ncatlab.org/nlab/show/constructive+Gelfand+duality+theorem). It says: “As usual, when formulating the theorem using locales instead of topological spaces the theorem holds constructively”

**Sources:**

- [Joan Wick Pelletier, Locales in functional analysis, Journal of Pure and Applied Algebra 70 (1991) 133–145](https://doi.org/10.1016/0022-4049(91)90013-R)
- [Thierry Coquand, Bas Spitters, Constructive Gelfand duality for C\*-algebras, Mathematical Proceedings of the Cambridge Philosophical Society 147 (2009) 323–337; arXiv:0808.1518](https://arxiv.org/abs/0808.1518)

### Point-free calculus defines a function as the integral of its derivative

**Remember:** Store the derivative and the start value; the function is then an integral.

*True by definition. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 26A42, 03F60. arXiv math.GN, math.CA. Level 4: research.

**Definition.** Locale theory is point-free topology: it describes a space through its lattice of open sets, not through its points. In this approach, a continuously differentiable map on \[a,b\] is given by two pieces of data. One is a continuous map, its derivative, and the other is a real number, its value at a. The map itself is then the indefinite integral of the derivative.

**Problem.** In point-free calculus, the fundamental theorem of calculus holds: indefinite integrals are antiderivatives, and antiderivatives are indefinite integrals.

**How the definition helps.** A differentiable map is given by its derivative and its initial value, so it equals the integral of its derivative by construction. Two things remain to prove. Indefinite integrals must exist directly as locale maps, and differentiation must have its usual properties. Vickers does this in geometric logic.

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “In the locale-theoretic approach, we essentially define an antiderivative to be an indefinite integral.”

**Sources:**

- [S. Vickers, The Fundamental Theorem of Calculus point-free, with applications to exponentials and logarithms, arXiv:2312.05228 (2023)](https://arxiv.org/abs/2312.05228)

### Prodiscrete localic groups take limits of progroups in locales

**Remember:** Take the limit in locales, not in spaces, and no surjective progroup collapses.

*Rules out counterexamples.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 18C40. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A surjective progroup is a cofiltered system of groups whose transition maps are surjective. Cofiltered means that any two stages receive maps from a common stage. A prodiscrete localic group is a group in locales that is a cofiltered limit of discrete groups with surjective transition maps, computed in the category of locales and not of spaces. A locale is a space described only by its lattice of open sets, which need not have enough points.

**Problem.** The category of prodiscrete localic groups is equivalent to the category of surjective progroups (Moerdijk). Taken in groups or topological groups instead, the limit of a nontrivial surjective progroup can be trivial.

**How the definition helps.** In locales, the maps from a limit of surjections to its stages are again surjections, so no information is lost. Higman and Stone give an ω₁-indexed system of sets with surjective maps and an empty limit. The free vector spaces on these sets form a nontrivial surjective progroup whose limit in topological groups is trivial.

**nLab:** [progroup](https://ncatlab.org/nlab/show/progroup), [Galois topos](https://ncatlab.org/nlab/show/Galois+topos). It says: “However, we do get an embedding on pro-groups with surjective transition maps if instead of Top we take the limit in the category Loc of locales.”

**Sources:**

- [I. Moerdijk, Prodiscrete groups and Galois toposes, Indagationes Mathematicae (Proceedings) 92(2) (1989) 219–234](https://doi.org/10.1016/s1385-7258(89)80030-7)

### Products of paracompact locales are paracompact

**Remember:** Paracompact means every cover refines to one that is finite near each place.

*Rules out counterexamples. Confidence: medium.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 54D20. arXiv math.GN. Level 4: research.

**Definition.** A locale is a space given by its lattice of open sets alone, with no set of points assumed. A locale is paracompact if it is regular and every open cover has a locally finite refinement. A locally finite refinement is a finer cover that has only finitely many of its opens near each place.

**Problem.** A product of paracompact locales is paracompact.

**How the definition helps.** Paracompact locales form a reflective subcategory of all locales, and a reflective subcategory is closed under limits. For topological spaces the statement is false. A standard example, not on the nLab page, is the Sorgenfrey line: it is paracompact, but its square is not even normal. The price is that the localic product can differ from the spatial product.

**nLab:** [paracompact locale](https://ncatlab.org/nlab/show/paracompact+locale). It says: “This last property clearly distinguishes paracompact locales from paracompact spaces, since products of paracompact spaces need not be paracompact.”

**Sources:**

- [John R. Isbell, Atomless parts of spaces, Mathematica Scandinavica 31 (1972) 5–32](https://doi.org/10.7146/math.scand.a-11409)

### With sublocales as parts, the Banach–Tarski pieces overlap

**Remember:** In a locale, two pieces with no common point can still overlap.

*Rules out counterexamples.* MSC 18F70 (Frames and locales, pointfree topology, Stone duality), 06D22, 28C15. arXiv math.GN. Level 4: research.

**Definition.** Treat spaces as locales, and take the parts of a space to be its sublocales, not only its subsets. A locale is a space described by its lattice of open sets, without a set of points. A sublocale is a part of a locale, and it need not be determined by its points.

**Problem.** With sublocales as parts, the pieces of the Vitali and Banach–Tarski partitions are not disjoint. So additivity does not apply to them, and the paradox does not arise.

**How the definition helps.** With sublocales as parts, the paradoxical pieces overlap, so additivity does not apply to them. The pieces share no point, but they overlap on the topological 'glue' between points (Simpson). Leroy made the same observation earlier for regular locales. The work moves into building measure theory on sublocales.

**nLab:** [Banach-Tarski paradox](https://ncatlab.org/nlab/show/Banach-Tarski+paradox). It says: “According to our notion of "part", two such intertangled pieces are not disjoint from each other, so additivity does not apply.”

**Sources:**

- [Alex Simpson, Measure, randomness and sublocales, Annals of Pure and Applied Logic 163:11 (2012) 1642–1659](https://doi.org/10.1016/j.apal.2011.12.014)
- [Olivier Leroy, Théorie de la mesure dans les lieux réguliers. ou : Les intersections cachées dans le paradoxe de Banach-Tarski (manuscript, 1995); arXiv:1303.5631](https://arxiv.org/abs/1303.5631)

### Roos's axiom rescues resolutions of unbounded complexes

**Remember:** Bounded failure of exact products keeps limits of resolutions honest.

*Rules out counterexamples. Confidence: medium.* MSC 18G10 (Resolutions; derived functors (category-theoretic aspects)), 18G80, 18E10. arXiv math.RA, math.CT. Level 4: research.

**Definition.** Let 𝒜 be an abelian category with enough injectives. It satisfies Roos's axiom (Ab.4\*)-k when the derived functors of infinite products vanish above degree k. For k = 0 this says that products are exact. Module categories satisfy it with k = 0.

**Problem.** Let an abelian category with enough injectives satisfy (Ab.4\*)-k. Then the limit of a tower of partial injective resolutions of an unbounded complex is an injective resolution. Without the axiom, the usual methods fail on a simple explicit complex.

**How the definition helps.** The axiom bounds how far infinite products are from being exact, and the limit step of the construction only needs that bound. The paper's counterexample lives in a quotient of the module category over Nagata's Noetherian ring of infinite dimension (our own reading of Lemmas 3.1 and 3.2). In our own reading, products there are not exact in any bounded degree.

**Paper or page:** [A poisonous example to explicit resolutions of unbounded complexes](https://arxiv.org/abs/2407.09741v3). It says: “We show that various methods for explicitly building resolutions of unbounded complexes in fact fail when applied to a rather simple and explicit complex. We show that one way to rescue these methods is to assume Roos (Ab.4\*)-k axiom.”

**Sources:**

- [Dolors Herbera, Wolfgang Pitsch, Manuel Saorín, Simone Virili, A poisonous example to explicit resolutions of unbounded complexes, arXiv:2407.09741 (2024)](https://arxiv.org/abs/2407.09741v3)
- [Jan-Erik Roos, Derived functors of inverse limits revisited, J. London Math. Soc. 73 (2006), 65-83](https://doi.org/10.1112/s0024610705022416)

### Defining exactness with homotopies makes dg exact structures match ∞-categorical ones

**Remember:** Record the homotopy that kills the composite, not only the two maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G35 (Chain complexes (category-theoretic aspects), dg categories), 18N60, 18E10. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A dg (differential graded) category has a chain complex of maps between any two objects. An exact structure chooses certain sequences A → B → C, each with a homotopy from the composite A → C to zero. Quillen's definition of an exact category uses kernel–cokernel pairs; here these are replaced by a homotopy category of such three-term sequences. The chosen sequences must obey analogues of Quillen's axioms.

**Problem.** Let A be a dg category whose homotopy category is additive. Then exact structures on A correspond one to one with exact structures, in Barwick's sense, on the dg nerve of A. The dg nerve is an ∞-category, a category with higher homotopies between maps, built from A.

**How the definition helps.** Building the homotopy into the definition puts the dg structure in the same form as Barwick's exact ∞-categories, so the two can be compared directly. In our own explanation, a sequence in the nerve comes with a square that commutes up to homotopy, and the chosen homotopy supplies it. Proving that the two kinds of structure determine one another is still the paper's work.

**Paper or page:** [On exact dg categories](https://arxiv.org/abs/2306.08231v1). It says: “there is a bijection between exact structures on A and exact structures (in the sense of Barwick) on the dg nerve of A.”

**Sources:**

- [Xiaofa Chen, On exact dg categories, arXiv:2306.08231 (2023)](https://arxiv.org/abs/2306.08231v1)

### Butterflies describe weak morphisms of 2-groups with ordinary groups

**Remember:** A butterfly is a group P with two wings: one crossed module on each side.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 18N10, 20E22. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A crossed module is a group homomorphism X₁ → X₀ with an action of X₀ on X₁, and crossed modules model strict 2-groups. A butterfly between crossed modules X₁ → X₀ and Y₁ → Y₀ is a group P with homomorphisms X₁ → P → X₀ and Y₁ → P → Y₀ that form a crossed profunctor. In addition, the diagonal Y₁ → P → X₀ must be a group extension (a short exact sequence).

**Problem.** Weak 2-functors between strict 2-groups correspond to butterflies between their crossed modules (Noohi, Aldrovandi–Noohi). Strict maps of crossed modules give only the strict 2-functors.

**How the definition helps.** Butterflies capture exactly the weak 2-functors, and they are still diagrams of ordinary groups. Crossed modules correspond to categories internal to groups. Under this correspondence, butterflies are the saturated anafunctors internal to groups, functors defined through a cover instead of directly.

**nLab:** [butterfly](https://ncatlab.org/nlab/show/butterfly). It says: “Under the correspondence between crossed modules and categories internal to Grp, butterflies are precisely the saturated anafunctors internal to Grp, using the Grothendieck pretopology of surjective homomorphisms.”

**Sources:**

- [Behrang Noohi, On weak maps between 2-groups, arXiv:math/0506313 (2005)](https://arxiv.org/abs/math/0506313)
- [Ettore Aldrovandi, Behrang Noohi, Butterflies I: morphisms of 2-group stacks, Advances in Mathematics 221 (2009) 687–773, arXiv:0808.3627](https://arxiv.org/abs/0808.3627)

### Filtered spaces give a van Kampen theorem in all dimensions

**Remember:** Filter the space, and gluing pieces becomes a colimit of algebra.

*Makes the theorem clean to state or prove.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 55U35. arXiv math.AT. Level 4: research.

**Definition.** A filtered space is a space X with an increasing chain of subspaces X₀ ⊆ X₁ ⊆ …. Its fundamental crossed complex ΠX records the relative homotopy groups of the filtration, together with the action of the fundamental groupoid on them. A crossed complex is equivalent to a strict ω-groupoid (a groupoid with morphisms in every dimension, where all laws hold exactly).

**Problem.** Take an open cover of a filtered space whose finite intersections are all connected filtered spaces. Then the fundamental crossed complex Π sends the coequaliser of the cover to a coequaliser (Brown and Higgins).

**How the definition helps.** A filtered space carries enough structure that Π turns gluing into a colimit, which plain homotopy groups do not do. The proof goes through cubical ω-groupoids with connections, where subdivision of cubes has an algebraic inverse. Consequences include the relative Hurewicz theorem without singular homology. The price is that strict structures lose some homotopy information.

**nLab:** [Nonabelian Algebraic Topology](https://ncatlab.org/nlab/show/Nonabelian+Algebraic+Topology), [higher homotopy van Kampen theorem](https://ncatlab.org/nlab/show/higher+homotopy+van+Kampen+theorem). It says: “the Seifert-van Kampen theorem is most naturally understood as being not about homotopy groups, but about the cubical fundamental omega-groupoid of a filtered space and may be generalized to a higher homotopy van Kampen theorem this way.”

**Sources:**

- [R. Brown, P. J. Higgins, Colimit theorems for relative homotopy groups, Journal of Pure and Applied Algebra 22 (1981) 11–41](https://doi.org/10.1016/0022-4049(81)90080-3)
- [R. Brown, P. J. Higgins, R. Sivera, Nonabelian Algebraic Topology, EMS Tracts in Mathematics (2011)](https://doi.org/10.4171/083)

### Relative homotopy squares compose strictly and give a 2-dimensional van Kampen theorem

**Remember:** Fix where the edges and corners may go, and squares compose strictly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G45 (2-groups, crossed modules, crossed complexes), 55Q05, 18N10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Take spaces C ⊆ A ⊆ X. The double groupoid ρ(X, A, C) has as elements the homotopy classes, rel vertices (keeping the four corners fixed), of maps I² → X that send the edges of the square into A and the vertices into C. It has two partial compositions of squares, and extra structure called connections.

**Problem.** The homotopy squares ρ(X, A, C) form a strict double groupoid with connections. It satisfies a van Kampen theorem in dimension 2, which computes nonabelian second relative homotopy groups.

**How the definition helps.** Fixing where the edges and vertices go makes the compositions of squares work fairly easily (Brown and Higgins). In our own reading, squares in a bare space do not form a strict double groupoid. The double groupoid with connections is equivalent to a crossed module of groupoids, which holds the groups π₂(X, A, c). The nLab says that proving the compositions are inherited is still 'not quite trivial'.

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

### Allowing massless semistable objects makes stability pass to a quotient category

**Remember:** Let some objects weigh nothing, then divide them out.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 14F08. arXiv math.RT, math.CT. Level 4: research.

**Definition.** A Bridgeland stability condition on a triangulated category gives each semistable object a phase, a real number, and a nonzero complex number called its charge. The mass of a semistable object is the absolute value of its charge, so it is positive. A lax stability condition keeps the phases but lets some semistable objects have charge zero, that is, mass zero.

**Problem.** In a lax stability condition, the massless objects form a thick subcategory, one closed under shifts, cones of maps and direct summands. The Verdier quotient by this subcategory, which makes the massless objects zero, carries an induced ordinary stability condition.

**How the definition helps.** The lax definition lets stability conditions in which some objects have lost all their mass sit at the edge of the stability space. The theorem then describes such a point as an ordinary stability condition on a quotient category. In our own explanation, this is what lets the lax conditions form a partial compactification. Proving that the massless objects form a thick subcategory and that stability descends to the quotient is the paper's work.

**Paper or page:** [Partial compactification of stability manifolds by massless semistable objects](https://arxiv.org/abs/2208.03173v1). It says: “The subcategory of massless objects is thick and there is an induced classical stability on the quotient category.”

**Sources:**

- [Nathan Broomhead, David Pauksztello, David Ploog, Jon Woolf, Partial compactification of stability manifolds by massless semistable objects, arXiv:2208.03173 (2022)](https://arxiv.org/abs/2208.03173v1)

### Defining Bousfield localization by an adjoint makes local objects detectable

**Remember:** A map into a local object cannot see an object killed by the quotient.

*True by definition. Confidence: medium.* MSC 18G80 (Derived categories, triangulated categories), 18E35. arXiv math.KT. Level 4: research.

**Definition.** A Verdier quotient Q is the universal exact functor that sends a chosen subcategory to zero. A Bousfield localization is such a Q with a fully faithful right adjoint R. Fully faithful means that R is a bijection on sets of maps. A concrete quotient instead builds its maps as fractions with a formally inverted arrow.

**Problem.** An object X is isomorphic to R of some object exactly when every map into X from an object killed by Q is zero.

**How the definition helps.** The adjunction gives maps from A to R(Y) as maps from Q(A) to Y, which vanish when Q(A) is zero (our own). Conversely, the map from X to RQ(X) has its cone killed by Q, and the vanishing makes that cone zero (our own). The work goes into proving that the right adjoint exists in the case at hand (our own).

**nLab:** [Bousfield localization of triangulated categories](https://ncatlab.org/nlab/show/Bousfield+localization+of+triangulated+categories). It says: “which is then (automatically) triangulated and fully faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Silting subcategories reduce a triangulated Grothendieck group to direct sums

**Remember:** Use shifted silting pieces and count them with alternating signs.

*Makes the theorem clean to state or prove.* MSC 18G80 (Derived categories, triangulated categories), 19A99. arXiv math.RT, math.KT. Level 4: research.

**Definition.** The Grothendieck group of a triangulated category has one generator per object and one relation per exact triangle. A silting subcategory generates the category using shifts, cones and direct summands. No object in it has a nonzero map to a positive shift of another. Its split Grothendieck group uses only the relations that come from direct sums.

**Problem.** The inclusion of a silting subcategory identifies its split Grothendieck group with the Grothendieck group of the whole triangulated category.

**How the definition helps.** The silting conditions reduce a group defined by all triangle relations to a group defined by direct sums. In our own explanation, a filtration by shifted silting pieces gives the candidate inverse as an alternating sum. One still has to show that the sum is independent of the filtration and respects triangles.

**Paper or page:** [The Grothendieck group of a triangulated category](https://arxiv.org/abs/2404.15800v3). It says: “the Grothendieck group of a triangulated category with a silting subcategory is isomorphic to the split Grothendieck group of the silting subcategory.”

**Sources:**

- [Xiao-Wu Chen, Zhi-Wei Li, Xiaojin Zhang, Zhibing Zhao, The Grothendieck group of a triangulated category, arXiv:2404.15800 (2024)](https://arxiv.org/abs/2404.15800v3)

### Defining bimonads through their algebras makes those algebras tensor together

**Remember:** The bimonad's tensor product already lives on its algebras.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18C15. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A monad B on a monoidal category is a functor with an associative multiplication B ∘ B → B and a unit. Its algebras are objects X with an action B(X) → X. Define a bimonad structure as a monoidal structure on the algebras that the forgetful functor preserves strictly. The map-based definition instead gives maps B(X ⊗ Y) → B(X) ⊗ B(Y) and B(1) → 1 with compatibility laws.

**Problem.** The algebras for a bimonad have a tensor product. Forgetting the actions turns it into the original tensor product.

**How the definition helps.** Under the algebra-based definition, the theorem is the definition itself. The real content is the quoted proposition that the two definitions match one to one. In one direction, give X ⊗ Y the action B(X ⊗ Y) → B(X) ⊗ B(Y) → X ⊗ Y (our own explanation). In the other direction, tensor two free algebras and restrict along their units to recover the splitting map (our own).

**Paper or page:** [Duoidal R-Matrices](https://arxiv.org/abs/2503.03445v1). It says: “There exists a bijective correspondence between bimonad structures on B and monoidal structures on Cᴮ”

**Sources:**

- [Duoidal R-Matrices (arXiv 2503.03445v1)](https://arxiv.org/abs/2503.03445v1)

### Frobenius monoidal functors send Frobenius algebras to Frobenius algebras by design

**Remember:** Compatible joining and splitting carry the Frobenius laws along.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 16L60. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A Frobenius monoidal functor F has joining maps F(X) ⊗ F(Y) → F(X ⊗ Y) and splitting maps in the other direction, with unit maps. Two laws relate joining and splitting, in the pattern of the Frobenius laws. A Frobenius algebra in a monoidal category has a multiplication and a comultiplication related by the two Frobenius laws. Over a field this agrees with the classical definition by a nondegenerate form with σ(ab, c) = σ(a, bc).

**Problem.** A Frobenius monoidal functor sends every Frobenius algebra to a Frobenius algebra.

**How the definition helps.** The functor's two laws are the image of the algebra's Frobenius laws, so the proof is a short diagram chase (our own explanation). F(A) gets its multiplication from the joining map and its comultiplication from the splitting map. The work moves into checking the Frobenius monoidal laws for each particular functor, which can be hard (our own). With the form definition, one would first have to turn the form into a comultiplication.

**Paper or page:** [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2). It says: “If A is a Frobenius algebra in C, then F(A) is a Frobenius algebra in D.”

**Sources:**

- [Frobenius Monoidal Functors of Dijkgraaf-Witten Categories and Rigid Frobenius Algebras](https://arxiv.org/abs/2303.04493v2)

### In hypergraph categories, the spider theorem lets string diagrams be hypergraphs

**Remember:** Every wire may split and merge freely, and only the count of legs matters.

*Makes the theorem clean to state or prove.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M30. arXiv math.CT. Level 4: research.

**Definition.** A hypergraph category is a symmetric monoidal category in which each object carries a special commutative Frobenius algebra. Such an algebra has a multiplication and a comultiplication that obey the Frobenius law; special means that comultiplying and then multiplying gives the identity. The Frobenius structure on X ⊗ Y must be the one built from those on X and Y. Morphisms need not respect the Frobenius structure.

**Problem.** The spider theorem: any connected composite of Frobenius structure maps from X⊗ᵐ to X⊗ⁿ is one and the same morphism, called a spider. So string diagrams can be drawn as hypergraphs.

**How the definition helps.** The special and commutative Frobenius axioms are exactly what makes any composite of two spiders again a spider. So every connected diagram built from the structure maps is fixed by its number of inputs and outputs. This lets one read string diagrams as hypergraphs, in which one edge can join many vertices. The free hypergraph category on one object is then the category of finite sets and cospans (pairs of maps A → C ← B). Fong and Spivak describe hypergraph categories generated by a set of objects as lax monoidal functors out of labelled cospans.

**nLab:** [hypergraph category](https://ncatlab.org/nlab/show/hypergraph+category). It says: “the real point is that the special commutative Frobenius axioms ensure that any composite of two such morphisms is again another such morphism.”

**Sources:**

- [Brendan Fong, David I. Spivak, Hypergraph categories, 2018, arXiv:1806.08304](https://arxiv.org/abs/1806.08304)

### Semicartesian monoidal categories are the right models of affine logic

**Remember:** Weakening is a map to the unit; make it monoidal and the unit is terminal.

*Rules out counterexamples. Confidence: medium.* MSC 18M05 (Monoidal categories, symmetric monoidal categories), 18M45, 03B47. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A monoidal category is semicartesian when its tensor unit I is a terminal object. Affine logic is linear logic with the weakening rule, which lets you drop an unused hypothesis. Its intended models are semicartesian monoidal categories.

**Problem.** A monoidal category has a monoidal natural family of maps A → I exactly when I is terminal, that is, when it is semicartesian. So semicartesian categories are the models in which weakening behaves well.

**How the definition helps.** If weakening must respect the tensor product, the unit must be terminal, and this rules out the bad models. A merely natural family of maps A → I lets in bad models. In Rel with the cartesian product as tensor, the empty relations form such a family, and every weakening becomes empty. A monoidal family has the identity as its component at I, and this forces I to be terminal.

**nLab:** [affine logic](https://ncatlab.org/nlab/show/affine+logic), [semicartesian monoidal category](https://ncatlab.org/nlab/show/semicartesian+monoidal+category). It says: “unless one additionally requires these natural transformations to be monoidal, but it can be shown that this additional requirement already forces the tensor unit to be terminal (specifically, this follows from the component at I being the identity).”

**Sources:**

- [Bart Jacobs, Semantics of weakening and contraction, Annals of Pure and Applied Logic 69 (1994) 73–106](https://doi.org/10.1016/0168-0072(94)90020-5)

### The Day convolution universal property makes monoids lax monoidal functors

**Remember:** Day convolution collects a natural family of products into one multiplication map.

*True by definition.* MSC 18M05 (Monoidal categories, symmetric monoidal categories). arXiv math.CT. Level 4: research.

**Definition.** Let C be a small monoidal category, with an associative tensor and unit, and take functors from C to sets. Day convolution defines F ⊗Day G by extending (a, b) ↦ F(a) × G(b) along the tensor of C. The extension is universal, so maps from F ⊗Day G to H correspond to natural families of maps F(a) × G(b) → H(a ⊗ b). The alternative description gives an explicit quotient of a disjoint union.

**Problem.** Monoids for Day convolution are exactly the lax monoidal functors C → Set. Such a functor has compatible product maps F(a) × F(b) → F(a ⊗ b). It also has a chosen element of F(I), where I is the unit of C.

**How the definition helps.** The universal property makes a multiplication map for Day convolution the same as a family of product maps for a lax monoidal functor. The unit of convolution is the functor C(I, −), so a unit map amounts to an element of F(I). The two coherence conditions for these data match the monoid laws. The work moves into constructing the universal extension and proving that convolution is associative and unital.

**nLab:** [Day convolution](https://ncatlab.org/nlab/show/Day+convolution). It says: “(commutative) monoid objects in the Day convolution monoidal category (\[𝒞,V\], ⊗Day, y(I)) of prop. are equivalent to (symmetric) lax monoidal functors 𝒞 → V”

**Sources:**

- [B. Day, On closed categories of functors, Reports of the Midwest Category Seminar IV, Lecture Notes in Mathematics 137 (1970)](https://doi.org/10.1007/BFb0060438)

### Defining negligible maps by traces makes the quotient's trace pairings nondegenerate

**Remember:** Remove exactly the maps that no trace can detect.

*True by definition.* MSC 18M10 (Traced monoidal categories, compact closed categories, star-autonomous categories), 18M20. arXiv math.QA, math.CT. Level 4: research.

**Definition.** In a spherical category, the trace of a map g: X → X closes its strand into a loop. Call f: X → Y negligible when the trace of g ∘ f is zero for every g: Y → X. The negligible quotient sets every negligible map to zero. When the maps from the unit to itself are just base-field scalars, the negligible maps form the unique maximal ideal.

**Problem.** Take a spherical category whose maps from the tensor unit to itself are the base-field scalars. On its negligible quotient, the trace pairing (f, g) ↦ tr(g ∘ f) is nondegenerate.

**How the definition helps.** The trace definition removes exactly the kernel of each pairing, so nondegeneracy holds by construction (our own argument). The work moves into proving that negligible maps form a tensor ideal, so that composition and tensor products pass to the quotient (our own explanation). That step uses the equality of left and right traces. The quoted proposition identifies the negligible ideal with the unique maximal ideal, which links the trace definition to the ideal definition.

**Paper or page:** [Categories generated by a trivalent vertex](https://arxiv.org/abs/1501.06869v3). It says: “An evaluable pivotal category has a unique maximal ideal, the negligible ideal.”

**Sources:**

- [Categories generated by a trivalent vertex (arXiv 1501.06869v3)](https://arxiv.org/abs/1501.06869v3)

### Defining the Drinfeld center by transformations makes its braiding an interchange

**Remember:** Two transformations of the identity slide past each other.

*True by definition. Confidence: medium.* MSC 18M15 (Braided monoidal categories and ribbon categories), 18N10. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A bicategory has objects, maps, and 2-cells, which are maps between maps. The delooping of a monoidal category C is the bicategory with one object whose maps are the objects of C, composed by the tensor product. Take as the center the pseudonatural transformations of its identity, whose naturality squares commute up to given 2-cells, with modifications, the maps between them. The usual Drinfeld center instead uses an object X with a half-braiding, a coherent family of isomorphisms X ⊗ Y ≅ Y ⊗ X.

**Problem.** The Drinfeld center of a monoidal category is braided.

**How the definition helps.** In the transformation definition, the braiding comes from a general fact about composing transformations of an identity (our own explanation). The naturality 2-cell of one transformation at the other exchanges the two orders of composition. Its coherence follows from the axioms of pseudonatural transformations (our own explanation). The work moves into the quoted theorem of the cited paper, a monoidal equivalence between these transformations and the usual Drinfeld center. Transporting the braiding along it gives the half-braiding of the first object (our own).

**Paper or page:** [Categorical centers and Yetter--Drinfel\`d-modules as 2-categorical (bi)lax structures](https://arxiv.org/abs/2306.05337v1). It says: “There exists a monoidal equivalence of categories between the Drinfel\`d center of C and the category of pseudonatural transformations and their modifications”

**Sources:**

- [Categorical centers and Yetter--Drinfel\`d-modules as 2-categorical (bi)lax structures](https://arxiv.org/abs/2306.05337v1)

### Equal left and right traces give spherical categories invariance on the sphere

**Remember:** Closing a strand on either side gives the same number.

*True by definition. Confidence: medium.* MSC 18M15 (Braided monoidal categories and ribbon categories). arXiv math.QA, math.CT. Level 4: research.

**Definition.** A pivotal category has duals and a natural isomorphism X ≅ X\*\* that respects tensor products. For a map f: X → X, closing the strand on the left or on the right gives two traces. Call the category spherical when the two traces agree for every such f. A graphical definition would instead ask directly that closed diagrams keep their value under isotopy on the sphere.

**Problem.** In a spherical category, the value of a closed diagram does not change when the diagram moves on the sphere.

**How the definition helps.** The trace definition captures exactly the one move that plane isotopy does not cover. On the sphere, a strand can pass behind the point at infinity, and this turns a left closure into a right closure (our own explanation). Invariance under plane isotopy already holds in every pivotal category, by a coherence theorem (our own summary). The work moves into that coherence theorem and into splitting each isotopy of the sphere into plane moves and such passes (our own).

**nLab:** [spherical category](https://ncatlab.org/nlab/show/spherical+category). It says: “A spherical category is a pivotal category C where the left and right trace operations coincide on all objects.”

**Sources:**

- [John Barrett and Bruce Westbury, Spherical Categories (1999)](https://doi.org/10.1006/aima.1998.1800)

### Framed tangles as the free ribbon category give invariants from every object

**Remember:** Choose an object, and every framed tangle gets a value.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories), 57K16. arXiv math.QA, math.GT. Level 4: research.

**Definition.** A ribbon category is a monoidal category with braidings, duals and twists that satisfy coherence laws. A framed tangle is made of thin ribbons, not bare strings, with ends on two parallel planes. Regard framed oriented tangles as the free ribbon category on one object. The diagram definition instead takes tangle diagrams modulo framed Reidemeister moves.

**Problem.** For each object V of a ribbon category, there is a unique ribbon functor from framed oriented tangles that sends the generating point to V.

**How the definition helps.** The free-category definition gives the functor from the universal property alone (our own explanation). The work moves into Shum's theorem, which identifies the free ribbon category with the geometric category of tangles. Its proof shows that the ribbon axioms match the tangle moves and that no other relations are needed. Tangles with no ends are framed links, so the functor gives link invariants. Quantum groups give the standard examples, as the nLab notes.

**nLab:** [Shum's theorem](https://ncatlab.org/nlab/show/Shum%27s+theorem). It says: “The category of framed oriented tangles FrOrTang is equivalently the free ribbon category generated by a single object.”

**Sources:**

- [Mei Chee Shum, Tortile tensor categories (1994)](https://doi.org/10.1016/0022-4049(92)00039-T)

### Pivotal structures as double-dual isomorphisms differ by tensor automorphisms of identity

**Remember:** Divide two pivotal isomorphisms to get an automorphism.

*True by definition.* MSC 18M15 (Braided monoidal categories and ribbon categories). arXiv math.QA, math.CT. Level 4: research.

**Definition.** In a rigid monoidal category, every object X has a dual X\* and a double dual X\*\*. Define a pivotal structure as a natural isomorphism a from X to X\*\* that respects tensor products. The alternative definition fixes compatible left and right duals with their evaluation and coevaluation maps. Evaluation pairs an object with its dual, and coevaluation creates such a pair.

**Problem.** Fix one pivotal structure a on a rigid monoidal category. Every pivotal structure is a ∘ u for a unique tensor-preserving natural automorphism u of the identity functor. Each such a ∘ u is a pivotal structure.

**How the definition helps.** With the double-dual definition, take u = a⁻¹ ∘ a′, which is natural and respects tensor products (our own). Uniqueness holds because a is invertible, and the converse holds because such isomorphisms compose. The work moves into the equivalence with the definition by left and right duals. That proof transports evaluation and coevaluation maps and checks the tensor laws (our own explanation). The nLab cites Bartlett for the result.

**nLab:** [pivotal category](https://ncatlab.org/nlab/show/pivotal+category). It says: “if a pivotal structure exists then it will be unique up to precomposing with an element of the group Aut⊗(id𝒞) of monoidal natural automorphisms of the identity”

**Sources:** none listed. No primary source with a working link was found.

### Cohomologous twists rescale tensor constraints

**Remember:** A coboundary changes rebracketing by a change of tensor coordinates.

*Makes the theorem clean to state or prove.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** Fix a finite group G and a normalized complex 3-cocycle ω, a function taking nonzero scalar values on triples satisfying the pentagon identity. In the twisted category of G-graded complex vector spaces, rebracketing homogeneous factors of degrees g,h,k multiplies by ω(g,h,k).

**Problem.** Suppose normalized cocycles satisfy ω = (dμ)ω′ for a normalized function μ from pairs in G to nonzero complex numbers. Here dμ(g,h,k) = μ(h,k)μ(g,hk)/(μ(gh,k)μ(g,h)). The identity functor from the ω category to the ω′ category becomes a tensor equivalence with comparison scalars μ(g,h).

**How the definition helps.** Writing the twist as a rebracketing scalar turns compatibility of the tensor maps into the displayed coboundary equation. The normalization makes comparison with the tensor unit automatic. The reciprocal scalars give the inverse equivalence.

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

**Definition.** A fusion category is a semisimple linear tensor category with duals and finitely many simple objects. Its fusion ring has a basis of simple objects, and its product records how tensor products split into simple objects. Define the Frobenius–Perron dimension as the unique ring homomorphism to ℝ that is positive on every simple object. The matrix definition takes the largest eigenvalue of multiplication by an object.

**Problem.** In a fusion category, FPdim(X ⊗ Y) = FPdim(X) · FPdim(Y) for all objects X and Y.

**How the definition helps.** A ring homomorphism preserves products, so the character definition makes the formula automatic (our own explanation). With the matrix definition, the claim concerns the largest eigenvalues of products of nonnegative matrices. The work moves into proving that the two definitions agree. One applies the Perron–Frobenius theorem to the matrix of multiplication by the sum of all simple objects (our own). Its positive eigenvector is shared by every multiplication matrix and gives the character.

**nLab:** [Frobenius-Perron dimension](https://ncatlab.org/nlab/show/Frobenius-Perron+dimension). It says: “This maximal eigenvalue is called the Frobenius-Perron dimension”

**Sources:**

- [Pavel Etingof, Dmitri Nikshych, and Viktor Ostrik, On fusion categories (2005)](https://doi.org/10.4007/annals.2005.162.581)

### Local modules inherit braiding

**Remember:** A crossing must respect the equation that moves the algebra action.

*Rules out counterexamples.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA. Level 4: research.

**Definition.** A modular fusion category has finitely many simple types, duals, twists and nondegenerate crossings. For a commutative algebra A in it, a right module M has an action from M ⊗ A to M. Call M local when crossing M and A twice before acting leaves that action unchanged.

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

### Veined fusion categories give tetrahedral symmetry of 6j-symbols without pivotal structure

**Remember:** Keep more than the skeleton, and the 6j-symbols show tetrahedral symmetry.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M20 (Fusion categories, modular tensor categories, modular functors). arXiv math.QA, math.CT. Level 4: research.

**Definition.** A fusion category is a semisimple linear monoidal category with duals, finitely many simple objects and a simple unit object. Its 6j-symbols are the numbers that describe its associativity maps in chosen bases. A veined fusion category is generated by a finite set of simple objects but is larger than its skeleton. Every fusion category contains veined subcategories that are monoidally equivalent to it.

**Problem.** In every fusion category, with no pivotal structure or unitarity assumed, the 6j-symbols have the symmetries of a tetrahedron.

**How the definition helps.** The veined category does not need a pivotal structure, so the symmetry can be proved under minimal assumptions. Veined subcategories are monoidally equivalent to the whole category, so properties computed there hold for the whole category. Our own remark: a skeleton has one object in each isomorphism class, which leaves little freedom in the calculations.

**Paper or page:** [Tetrahedral symmetry of 6j-symbols in fusion categories](https://arxiv.org/abs/2106.16186). It says: “The notion of a veined fusion category does not assume the presence of a pivotal structure, and thus in particular does not assume unitarity.”

**Sources:**

- [Jürgen Fuchs and Tobias Grøsfjeld, Tetrahedral symmetry of 6j-symbols in fusion categories, arXiv:2106.16186 (2021)](https://arxiv.org/abs/2106.16186)

### A growth bound makes a tensor category a category of supergroup representations

**Remember:** Tensor powers of an object may grow no faster than for a vector space.

*Rules out counterexamples.* MSC 18M25 (Tannakian categories), 18M05. arXiv math.QA, math.CT. Level 4: research.

**Definition.** A tensor category is a category with a tensor product ⊗ that behaves like the tensor product of vector spaces. Here it is k-linear and symmetric. It has subexponential growth if each object X has a number N, which depends on X, such that each tensor power X⊗ⁿ has length at most Nⁿ. The length of an object is the number of simple pieces in a composition series (a chain of subobjects whose successive quotients are simple).

**Problem.** Over an algebraically closed field of characteristic zero, every tensor category of subexponential growth is equivalent to Rep(G, ε) for an affine supergroup G (Deligne). In Rep(G, ε), a fixed element ε of order 2 acts as +1 on the even part and −1 on the odd part.

**How the definition helps.** The growth bound is a weak condition that is easy to state, and it is enough to recover a supergroup. Without it the statement is false. Deligne categories such as Rep(Sₜ) for non-integer t grow too fast to be representations of any supergroup. The proof itself is long, and the definition does not make it easy.

**nLab:** [Deligne's theorem on tensor categories](https://ncatlab.org/nlab/show/Deligne%27s+theorem+on+tensor+categories), [Tannakian category](https://ncatlab.org/nlab/show/Tannakian+category). It says: “Categories that do not satisfy sub-exponential growth have come to be known as Deligne categories”

**Sources:**

- [Pierre Deligne, Catégories tensorielles, Moscow Mathematical Journal 2 (2002) no. 2, 227–248](https://www.math.ias.edu/files/deligne/Tensorielles.pdf)
- [Serina Hu, An Introduction to Deligne Categories, arXiv:2404.08689 (2024)](https://arxiv.org/abs/2404.08689)

### Doplicher–Roberts reconstruction needs the symmetric structure

**Remember:** Keep the symmetry, and the category of representations knows its group.

*Rules out counterexamples.* MSC 18M25 (Tannakian categories), 18D20, 46L05. arXiv math.QA, math.OA. Level 4: research.

**Definition.** The object is a symmetric tensor ∗-category with conjugates, direct sums, subobjects and End(𝟙) = ℂ. The last condition says that the unit object has only scalar endomorphisms. The symmetry is a braiding c with c∘c = id, and it is part of the data.

**Problem.** Every such symmetric tensor ∗-category is equivalent to the representations of a compact supergroup, unique up to isomorphism (Doplicher–Roberts, Müger). No fiber functor needs to be given.

**How the definition helps.** Putting the symmetry into the definition rules out the known counterexamples. Etingof and Gelaki found non-isomorphic finite groups whose representation categories are equivalent as tensor categories alone. The symmetry rules out these isocategorical counterexamples. The reconstruction itself is still a hard theorem.

**nLab:** [Doplicher-Roberts reconstruction theorem](https://ncatlab.org/nlab/show/Doplicher-Roberts+reconstruction+theorem). It says: “Beware that there are non-isomorphic finite groups whose categories of representations are equivalent considered merely as tensor categories, ignoring the symmetric structure”

**Sources:**

- [Sergio Doplicher, John E. Roberts, A new duality theory for compact groups, Inventiones Mathematicae 98 (1989) 157–218](https://doi.org/10.1007/BF01388849)
- [Pavel Etingof, Shlomo Gelaki, Isocategorical groups, arXiv:math/0007196](https://arxiv.org/abs/math/0007196)

### Super vector spaces let a growth bound reconstruct the symmetry supergroup

**Remember:** Assume only a growth bound, and supergroups are what you get.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M25 (Tannakian categories), 18M05. arXiv math.QA, math.CT. Level 4: research.

**Definition.** A super vector space is a vector space split into an even part and an odd part (a ℤ/2-graded vector space), with a sign rule: swapping two odd elements in a tensor product gives a minus sign. A supergroup acts on super vector spaces. Here a tensor category is a symmetric rigid monoidal abelian k-linear category, with k algebraically closed of characteristic zero; rigid means that each object has a dual. It has subexponential growth if each object X has a number N with length(X⊗ⁿ) ≤ Nⁿ for all n, where the length counts the simple pieces of an object.

**Problem.** Every tensor category of subexponential growth is the representation category of an affine supergroup (Deligne). So supergroups are the most general symmetries for which this reconstruction works.

**How the definition helps.** Once symmetries may be supergroups, a mild growth bound is the only condition that reconstruction needs. The nLab concludes that supersymmetry is the most general setting in which reconstruction works. Categories that fail subexponential growth are called Deligne categories. The proof is Deligne's hard 2002 theorem.

**nLab:** [Deligne's theorem on tensor categories](https://ncatlab.org/nlab/show/Deligne%27s+theorem+on+tensor+categories). It says: “Deligne's theorem then gives that supersymmetry is the most general context in which this works out.”

**Sources:**

- [Pierre Deligne, Catégories tensorielles, Moscow Math. J. 2 (2002) 227–248](https://www.math.ias.edu/files/deligne/Tensorielles.pdf)

### Dropping the monoidal structure lets one characterisation include quaternionic Hilbert spaces

**Remember:** Drop the tensor product, and the quaternions come back.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 46C15. arXiv math.CT, math.FA. Level 4: research.

**Definition.** A dagger category has an operation † that turns each map f from A to B into a map f† from B to A. It acts like the adjoint of a linear map. Heunen and Kornell gave axioms on a monoidal dagger category that pick out real or complex Hilbert spaces. Lack and Tobin give axioms without a monoidal structure.

**Problem.** Lack and Tobin's axioms on a dagger category, with no monoidal structure, characterise the categories of Hilbert spaces over the reals, the complex numbers or the quaternions.

**How the definition helps.** The monoidal assumption is what ruled out the quaternions, so without it one characterisation covers all three cases of Solèr's theorem. Our own remark: the quaternions do not commute, so quaternionic Hilbert spaces have no good tensor product. Theorem 6.8 shows that C(K,−) is an equivalence onto Hilbert spaces over the scalars C(K,K). Solèr's theorem still fixes the scalars.

**Paper or page:** [A characterisation for the category of Hilbert spaces](https://arxiv.org/abs/2412.03776), [A characterisation for the category of Hilbert spaces](https://arxiv.org/abs/2412.03776). It says: “The characterisation by Heunen and Kornell makes use of a monoidal structure, which in turn excludes the category of quaternionic Hilbert spaces. We provide an alternative characterisation without the assumption of monoidal structure on the category.”

**Sources:**

- [Stephen Lack and Shay Tobin, A characterisation for the category of Hilbert spaces, Applied Categorical Structures 33 (2025), 13](https://arxiv.org/abs/2412.03776)

### Frobenius algebras give the spider rule of the ZX-calculus

**Remember:** Same colour, connected: only the number of legs matters.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M40 (Dagger categories, categorical quantum mechanics), 18M30, 81P45. arXiv quant-ph, math.CT. Level 4: research.

**Definition.** The ZX-calculus is a graphical language for quantum circuits. In it, each of the two qubit bases, Z and X, gives a special commutative Frobenius algebra structure on ℂ², drawn as green or red dots. A Frobenius algebra has a multiplication and a comultiplication that satisfy a compatibility law, and 'special' means that comultiplying and then multiplying gives the identity. A connected diagram made only of the multiplications, comultiplications, units and counits of one colour is drawn as one 'spider' with some inputs and outputs.

**Problem.** Two connected diagrams of one colour are equal exactly when they have the same numbers of inputs and outputs (Coecke and Duncan, Theorem 1). So each such diagram is a single spider.

**How the definition helps.** The Frobenius laws make a connected one-colour diagram depend only on its numbers of inputs and outputs. Spider fusion, which merges two connected spiders of one colour, then replaces long algebraic checks. The result needs the algebras to be special and commutative. In the full ZX-calculus, spiders also carry phases, which add when spiders fuse.

**nLab:** [ZX-calculus](https://ncatlab.org/nlab/show/ZX-calculus). It says: “since the Frobenius algebra-property ensures --- recalled as Coecke &amp; Duncan (2011), Theorem 1 --- that any connected diagrams are equal iff they have the same number of in/outputs”

**Sources:**

- [B. Coecke, R. Duncan, Interacting Quantum Observables: Categorical Algebra and Diagrammatics, New Journal of Physics 13 (2011) 043016, arXiv:0906.4725](https://arxiv.org/abs/0906.4725)

### Finite sets form the initial rig category, with the right 2-category

**Remember:** A rig category is a categorified ring without negatives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M50 (Bimonoidal, skew-monoidal, duoidal categories), 18N10. arXiv math.CT. Level 4: research.

**Definition.** A rig is a ring without negatives, like ℕ. A symmetric rig category is a category with two symmetric monoidal structures, ⊕ and ⊗, where ⊗ distributes over ⊕ up to coherent natural isomorphisms. A symmetric monoidal structure is a product of objects that is associative and commutative up to coherent isomorphism. The morphisms between symmetric rig categories must preserve both structures up to coherent isomorphism.

**Problem.** The groupoid of finite sets and bijections is the bi-initial symmetric rig category, just as ℕ is the initial commutative rig. Baez conjectured this, and Elgueta proved it in 2021.

**How the definition helps.** The right definitions make the statement possible, but its proof is real coherence work. It is only true for a weak notion of 'initial' and with the correct 2-category of symmetric rig categories. The map out of finite sets is unique up to an equivalence, which is unique up to a unique isomorphism. Comfort, Delpeuch and Hedges give another proof with sheet diagrams.

**nLab:** [rig category](https://ncatlab.org/nlab/show/rig+category). It says: “Using the correct definition of the 2-category of symmetric rig categories, the groupoid FinSet× of finite sets and bijections is the initial symmetric rig category, just as ℕ is the initial commutative rig.”

**Sources:**

- [Josep Elgueta, The groupoid of finite sets is biinitial in the 2-category of rig categories, Journal of Pure and Applied Algebra 225 (2021), arXiv:2004.08684](https://arxiv.org/abs/2004.08684)

### Clubs of mixed variance throw away compositions that make loops

**Remember:** A loop in a composite of graphs has no answer, so clubs forbid loops.

*Rules out counterexamples. Confidence: medium.* MSC 18M60 (Operads (general)), 18N20, 18D15. arXiv math.CT. Level 4: research.

**Definition.** A club is a structure, a little like an operad, that Kelly uses to describe coherence problems. For structures of mixed variance (with both covariant and contravariant arguments), Kelly uses a category G whose objects are finite signed sets and whose morphisms are Eilenberg–Kelly–Mac Lane graphs. These graphs link the variables of a source to the variables of a target. Graphs compose as cospans, except that a composite that creates a closed loop goes to an extra junk basepoint. A club of mixed variance is built only from functors into G that never hit the basepoint.

**Problem.** Coherence is the question of which diagrams of canonical maps commute. Coherence for symmetric monoidal closed categories, and for similar structures with right adjoints, can be described by a club. Coherence for compact closed categories cannot.

**How the definition helps.** The junk basepoint catches every composite that makes a loop, and the club is not allowed to use it. In a compact closed category, a composite of extranatural transformations can produce a loop, such as dim(c) for finite-dimensional vector spaces. Then composition is not well defined. That no loops appear for symmetric monoidal closed categories is nontrivial and rests on Kelly's cut-elimination theorem.

**nLab:** [club](https://ncatlab.org/nlab/show/club). It says: “The lesson learned is that the doctrine of compact closed categories is not describable by a club, and that for the purposes of clubs there is no use for compositions of graphs which produce loops.”

**Sources:**

- [G. M. Kelly, An abstract approach to coherence, in Coherence in Categories, Lecture Notes in Mathematics 281, Springer, 1972, 106–147](https://doi.org/10.1007/BFb0059557)

### In Feynman categories the hereditary condition gives free algebras

**Remember:** Every operation splits into pieces with one output each, as in an operad.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M60 (Operads (general)), 18M05. arXiv math.CT. Level 4: research.

**Definition.** A Feynman category is a symmetric strong monoidal functor τ : C⊗ → M, where C⊗ is the free symmetric monoidal category on a groupoid C. The isomorphisms of M are exactly those of C⊗. The hereditary condition says that every morphism of M splits, up to isomorphism, as a tensor product of morphisms whose targets are single objects of C. There is also a size condition.

**Problem.** For a hereditary Feynman category τ : C⊗ → M, restriction of monoidal functors from M to C has a left adjoint, which builds free algebras. Strong monoidal functors out of M are the algebras over the resulting monad.

**How the definition helps.** The hereditary condition makes the left Kan extension along τ strong monoidal, and this one fact gives the free algebras. Getzler's pattern condition on Day convolution does the same job. So operads, cyclic operads, modular operads and similar notions get free constructions from one theorem.

**nLab:** [Feynman category](https://ncatlab.org/nlab/show/Feynman+category). It says: “The condition of a pattern or that of being hereditary guarantees that there is a left adjoint free functor for the forgetful functor of restricting a monoidal functor from M to C.”

**Sources:**

- [Ralph M. Kaufmann, Benjamin C. Ward, Feynman categories, Astérisque 387 (2017), arXiv:1312.1269](https://arxiv.org/abs/1312.1269)

### Operads as substitution monoids give monads on sets

**Remember:** Substitution acts on sets, turning an operad's plugging into monad multiplication.

*True by definition.* MSC 18M60 (Operads (general)), 18C15. arXiv math.CT, math.QA. Level 4: research.

**Definition.** A species assigns a set of structures to each finite set and can relabel those structures along bijections. The substitution product of species describes plugging one structure into each input of another. An operad is a monoid for this product, with associative plugging and an identity. The usual definition lists the plugging maps and their associativity, identity and relabelling laws separately.

**Problem.** Every operad in sets gives a monad on sets. This is a functor with a unit and associative multiplication, sending a set to operad operations with inputs labelled by its elements, up to relabelling. Its algebras are exactly the sets on which the operad acts.

**How the definition helps.** Defining operads as substitution monoids makes the monad laws follow from the operation of substitution on sets. Substituting twice corresponds to plugging operations together, and the identity species acts as the identity functor. The work moves into proving that substitution is associative and unital and that it acts on sets in this way. In our own unpacking, a monad algebra evaluates labelled operations, and its laws are the operad action laws.

**nLab:** [operad](https://ncatlab.org/nlab/show/operad). It says: “the monoidal category (Psh(ℙ), ∘, I) acts on Set in such a way as to give an actegory structure, and therefore an operad or ∘-monoid gives rise to a monad on Set.”

**Paper or page:** [A unified framework for notions of algebraic theory](https://arxiv.org/abs/1904.08541v2). It says: “The key observation is that each notion of algebraic theory can be identified with a monoidal category, in such a way that algebraic theories correspond to monoid objects therein.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized multicategories are monoids in a double category

**Remember:** Spans give the multicategories; the vertical maps give their functors.

*Makes the theorem clean to state or prove.* MSC 18M65 (Non-symmetric operads, multicategories, generalized multicategories), 18C15, 18N10. arXiv math.CT. Level 4: research.

**Definition.** Let T be a cartesian monad on a category V with pullbacks (its functor preserves pullbacks, and its unit and multiplication have pullback naturality squares). A T-span from X to Y is a span X ← R → TY. A T-multicategory is a monoid, or monad, among T-spans. The better definition takes it to be a monoid in the double category whose horizontal arrows are T-spans and whose vertical arrows are maps of V.

**Problem.** Take a T-multicategory to be a monoid in the double category of T-spans and maps of V. Then monoid homomorphisms are exactly the correct functors in all examples, such as categories, multicategories and globular operads.

**How the definition helps.** The vertical arrows of the double category supply the maps of objects that a functor needs. In the bicategory of T-spans, no standard kind of monad morphism gives the intended functors. The nearest one, a colax morphism of monads, lets the object part be an arbitrary span instead of a map of V. Virtual double categories (Cruttwell and Shulman) also cover symmetric multicategories.

**nLab:** [generalized multicategory](https://ncatlab.org/nlab/show/generalized+multicategory). It says: “Thus, a better definition of T-multicategory is "a monoid in the double category Span(V,T)," since this definition recovers the correct morphisms immediately.”

**Sources:**

- [G. S. H. Cruttwell, M. A. Shulman, A unified framework for generalized multicategories, Theory Appl. Categ. 24 (2010) 580–655, arXiv:0907.2460](https://arxiv.org/abs/0907.2460)

### Defined as pseudonatural transformations, Schur functors compose associatively by a universal property

**Remember:** A Schur functor works in every suitable category and commutes with every functor between them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18M80 (Species, Hopf monoids, operads in combinatorics), 20C30, 18M05. arXiv math.RT, math.CT. Level 4: research.

**Definition.** An abstract Schur functor is a pseudonatural transformation of the forgetful 2-functor U : SymMonLinCauch → Cat. In words, it is a functor on every symmetric monoidal, linear, Cauchy complete category C. It must be compatible, up to coherent isomorphism, with every symmetric monoidal linear functor G : C → D. For a linear category, Cauchy complete means that it has direct sums and that idempotents split.

**Problem.** Abstract Schur functors are equivalent to polynomial species. Composition of Schur functors, called plethysm, makes polynomial species an associative, unital monoidal category.

**How the definition helps.** Composition of functors is already associative, and the universal property turns plethysm into composition. U is represented by the Cauchy completion of the linearized permutation groupoid, so Schur functors are polynomial species. The associator, unitors and pentagon come from this universal property, not from Young symmetrizers. The real content is the representability theorem, which the page only sketches.

**nLab:** [Schur functor](https://ncatlab.org/nlab/show/Schur+functor). It says: “the Schur functors S<sub>R</sub> are precisely those functors that are defined on all symmetric monoidal Cauchy complete linear C and that are pseudonatural with respect to change of base G: C → D!”

**Sources:**

- [John C. Baez, Joe Moeller, Todd Trimble, Schur functors and categorified plethysm, 2021, arXiv:2106.00190](https://arxiv.org/abs/2106.00190)

### A universal shadow makes every known Morita invariance result an immediate corollary

**Remember:** Prove Morita invariance once for the universal shadow, and every shadow inherits it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18M10, 16E40. arXiv math.CT, math.KT. Level 4: research.

**Definition.** A bicategory has objects, morphisms between them, and 2-morphisms between morphisms; rings with bimodules form one. A shadow, introduced by Ponto, assigns a value to each endomorphism, with a trace-like isomorphism between the values of MN and NM. The paper defines Hochschild homology of a bicategory so that every shadow factors through one universal shadow.

**Problem.** Morita invariance holds for the universal shadow on the free adjunction bicategory. Every known Morita invariance result for Hochschild homology and its variants is an immediate corollary.

**How the definition helps.** Every shadow factors through the universal shadow, so a fact proved for the universal shadow passes to all shadows. The free adjunction bicategory is the smallest one that contains an adjunction. Our own explanation: any adjunction in another bicategory is its image under a functor. The hard part is to compute the Hochschild homology of the free adjunction bicategory.

**Paper or page:** [Shadows are Bicategorical Traces](https://arxiv.org/abs/2109.02144). It says: “Using the universal shadow on the free adjunction bicategory, we can then establish a universal Morita invariance theorem, of which all known cases are immediate corollaries.”

**Sources:**

- [Kathryn Hess and Nima Rasekh, Shadows are Bicategorical Traces, arXiv:2109.02144 (2021)](https://arxiv.org/abs/2109.02144)

### Doctrinal adjunction becomes a statement about conjunctions in a double category

**Remember:** Lax goes one way, colax the other, and the adjunction lives across the square.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18N15, 18A40. arXiv math.CT. Level 4: research.

**Definition.** A 2-monad T is a monad on a 2-category; for example, monoidal categories are the algebras of a 2-monad. A lax T-morphism preserves the structure up to a comparison map in one direction, and a colax T-morphism up to a comparison map in the other direction. A double category has two kinds of arrows, horizontal and vertical, and squares between them; the double category T-Alg has T-algebras as objects, lax T-morphisms as horizontal arrows and colax T-morphisms as vertical arrows. A conjunction in a double category is a vertical arrow and a horizontal arrow that are adjoint across the two directions.

**Problem.** Kelly's doctrinal adjunction: for an adjunction f ⊣ u of T-algebras, lax structures on u correspond by mates to colax structures on f. In T-Alg this says that the forgetful double functor creates conjunctions.

**How the definition helps.** In T-Alg, lax and colax morphisms live in one structure, so the theorem becomes a statement about conjunctions. In 2-category terms, the statement mixes morphisms from two different 2-categories. Strong morphisms are exactly the arrows that have companions. The mate calculus still does the work; the double category gives it a clean statement.

**nLab:** [doctrinal adjunction](https://ncatlab.org/nlab/show/doctrinal+adjunction), [monoidal adjunction](https://ncatlab.org/nlab/show/monoidal+adjunction). It says: “Doctrinal adjunction can be stated cleanly in terms of double categories.”

**Sources:**

- [G. M. Kelly, Doctrinal adjunction, in: Category Seminar, Lecture Notes in Math. 420 (1974)](https://doi.org/10.1007/BFb0063105)
- [M. Shulman, Comparing composites of left and right derived functors, New York J. Math. 17 (2011) 75–125, arXiv:0706.2868](https://arxiv.org/abs/0706.2868)

### Double categories of zig-zags give a shorter proof of the necklace theorem

**Remember:** Track the zig-zags, and colimits of categories become computable.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18N50, 18N60. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A colimit of a diagram of categories glues the categories together along the functors. A zig-zag is a chain of morphisms that point in alternate directions. The paper introduces double categories of zig-zags to keep track of which composites the colimit identifies. A double category has objects, two kinds of morphisms, and squares between them.

**Problem.** The necklace theorem of Dugger and Spivak follows by a direct computation with double categories of zig-zags. It describes the mapping spaces of the simplicial category made from a simplicial set through necklaces, chains of simplices joined end to end.

**How the definition helps.** The zig-zag description computes any colimit of categories directly, so the necklace description follows by a computation in each simplicial degree. Our own remark: the simplicial category made from a simplicial set is a colimit of simple pieces, one for each simplex. This is why a general colimit formula applies.

**Paper or page:** [Colimits of categories, zig-zags and necklaces](https://arxiv.org/abs/2309.00337). It says: “When applied pointwise in the simplicially enriched setting, our constructions offer a shorter proof of the necklace theorem of Dugger and Spivak by direct computation.”

**Sources:**

- [Redi Haderi, Colimits of categories, zig-zags and necklaces, arXiv:2309.00337 (2023)](https://arxiv.org/abs/2309.00337)

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

**Remember:** Flexible weights already behave as if they were pseudo.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18A30, 18D20. arXiv math.CT. Level 4: research.

**Definition.** A weighted limit uses a weight Φ, a functor that sets the shape of the cones. A flexible limit is a strict 2-limit whose weight Φ is cofibrant. Cofibrant here means that the canonical map q : QΦ → Φ has a section. QΦ is the pseudo-morphism classifier of Φ: strict maps out of QΦ correspond to pseudo-natural maps out of Φ (maps that are natural up to coherent invertible 2-cells).

**Problem.** A strict 2-category with all flexible limits has all bilimits. An example is the 2-category of algebras for a 2-monad with pseudo morphisms, which lacks many strict 2-limits.

**How the definition helps.** Flexible limits are already bilimits, and they are enough to build every bilimit. The class includes all PIE-limits (built from products, inserters and equifiers) and all strict pseudo-limits. Every bilimit can be computed as a strict pseudo-limit (Bird, Kelly, Power, Street).

**nLab:** [flexible limit](https://ncatlab.org/nlab/show/flexible+limit). It says: “Furthermore, all PIE-limits and therefore all strict pseudo-limits are flexible; thus any strict 2-category which admits all flexible limits also admits all 2-limits.”

**Sources:**

- [Greg J. Bird, G. Max Kelly, A. John Power, Ross Street, Flexible limits for 2-categories, J. Pure Appl. Algebra 61 (1989) 1–27](https://doi.org/10.1016/0022-4049(89)90065-0)

### Lax 𝓕-adjunctions are lax adjunctions whose adjoints are still unique

**Remember:** Lax everywhere, but pseudo on the tight maps.

*Rules out counterexamples. Confidence: medium.* MSC 18N10 (2-categories, bicategories, double categories), 18A40, 18D20. arXiv math.CT. Level 4: research.

**Definition.** An 𝓕-category is a 2-category in which some 1-cells are marked as tight. A lax 𝓕-adjunction has a unit and a counit that are lax natural in general but pseudo natural on tight morphisms. Lax natural means that the naturality squares commute only up to a 2-cell in one direction, and pseudo natural means that they commute up to an invertible 2-cell. The triangle identities hold up to isomorphism.

**Problem.** Two lax 𝓕-right adjoints of the same functor are equivalent.

**How the definition helps.** The tight components make the needed squares commute up to isomorphism, so the usual proof of uniqueness works. That proof slides units past counits with naturality squares. If the squares commute only laxly, as in a 2-adjunction with lax unit and counit, the proof fails. Johnstone used lax 𝓕-adjunctions to characterize fibrations in a 2-category.

**nLab:** [lax F-adjunction](https://ncatlab.org/nlab/show/lax+F-adjunction). It says: “The following theorem seems to fail for 2-adjunctions involving lax transformations; the fact that it holds for lax 𝓕-adjunctions thus means that they are significantly better-behaved and more interesting.”

**Sources:**

- [Peter T. Johnstone, Fibrations and partial products in a 2-category, Applied Categorical Structures 1 (1993) 141–179](https://doi.org/10.1007/BF00880041)

### Clubs over the lax slice map fully faithfully to monads

**Remember:** Put clubs in the lax slice, and they keep all the morphisms that monads have.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 18N15 (2-dimensional monad theory), 18M60, 18C15. arXiv math.CT. Level 4: research.

**Definition.** A club is a description of a kind of structure on categories, such as monoidal structure, that is more general than an operad. Kelly's most general clubs are monoids for a substitution product on the lax slice 2-category CAT⫽Cat, not on the ordinary slice category CAT/Cat. In the lax slice, the triangles that define morphisms need to commute only up to a natural transformation. The Grothendieck construction lets the substitution product still work there.

**Problem.** For Kelly's clubs over the lax slice, the functor Mon(CAT⫽Cat, ∘) → Mnd(Cat) from clubs to monads on Cat is fully faithful.

**How the definition helps.** The lax slice has enough morphisms that no monad morphism is lost. For the earlier notions of club, over the symmetric monoidal monad or over FinSet, the functor to monads is not fully faithful. The nLab notes that Kelly gave no interesting new examples in this generality.

**nLab:** [club](https://ncatlab.org/nlab/show/club). It says: “This has the advantage that the resulting functor Mon(CAT⫽Cat,∘) → Mnd(Cat) from clubs to monads on Cat is fully faithful, which it is not for the previous notions of club.”

**Sources:**

- [G. M. Kelly, On clubs and data-type constructors, in Applications of Categories in Computer Science, LMS Lecture Note Series 177, Cambridge University Press (1992) 163–190](https://doi.org/10.1017/CBO9780511525902.010)

### Every tricategory is equivalent to a Gray-category

**Remember:** In a Gray-category, everything is strict except sliding two 2-cells past each other.

*Rules out counterexamples.* MSC 18N20 (Tricategories, weak \\(n\\)-categories, coherence, semi-strictification). arXiv math.CT. Level 4: research.

**Definition.** A Gray-category is a semi-strict 3-category. Its composition is strictly associative and unital. Only the interchange law holds up to coherent isomorphism instead of strictly. The interchange law says that, for 2-cells, you get the same result if you compose side by side first or one after the other first.

**Problem.** Every tricategory is equivalent to a Gray-category (Gordon, Power and Street). Not every tricategory is equivalent to a strict 3-category.

**How the definition helps.** Gray-categories weaken only the interchange law, and this is enough to make every tricategory equivalent to one. A braided monoidal category that is not symmetric gives a tricategory with one object and one 1-cell. That tricategory is not equivalent to any strict 3-category. The proof of the coherence theorem is still long.

**nLab:** [Gray-category](https://ncatlab.org/nlab/show/Gray-category), [tricategory](https://ncatlab.org/nlab/show/tricategory), [semi-strict infinity-category](https://ncatlab.org/nlab/show/semi-strict+infinity-category). It says: “Not every tricategory is equivalent to a fully strict 3-category; any doubly-degenerate braided monoidal category which is not symmetric is an example.”

**Sources:**

- [Robert Gordon, A. John Power, Ross Street, Coherence for tricategories, Mem. Amer. Math. Soc. 117 no. 558 (1995)](https://doi.org/10.1090/memo/0558)

### An inductive definition of computads gives direct proofs by structural induction

**Remember:** Define the words inductively, and prove facts about them by induction.

*Makes the theorem clean to state or prove.* MSC 18N30 (Strict omega-categories, computads, polygraphs), 18N20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A weak ω-category has cells of every dimension, with composition laws that hold only up to higher cells. A computad is a presentation of a free ω-category by generating cells. The paper defines computads and their free words, the formal composites of cells, by one explicit inductive definition, without globular operads.

**Problem.** Every ω-category is equivalent to a free one. Computads with generator-preserving maps form a presheaf topos, whose index category the induction describes directly.

**How the definition helps.** An inductive definition comes with structural induction, so a property of all words follows from a check at each step of construction. The work then moves into a comparison theorem. It shows that the new definition agrees with that of Batanin and Leinster, and that the cofibrant replacement coincides with Garner's.

**Paper or page:** [Computads for weak ω-categories as an inductive type](https://arxiv.org/abs/2208.08719). It says: “Our framework permits direct proofs of important results via structural induction, and we use this to give new proofs that every ω-category is equivalent to a free one”

**Sources:**

- [Christopher J. Dean, Eric Finster, Ioannis Markakis, David Reutter and Jamie Vicary, Computads for weak ω-categories as an inductive type, Advances in Mathematics 450 (2024), 109739](https://arxiv.org/abs/2208.08719)

### Thin simplices pick out the nerves of strict ω-categories

**Remember:** Mark which simplices are identities, and the nerve remembers the ω-category.

*Makes the theorem clean to state or prove.* MSC 18N30 (Strict omega-categories, computads, polygraphs), 18N50. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A stratified simplicial set is a simplicial set with a chosen set of 'thin' simplices, which includes all degenerate simplices. A complicial set is a stratified simplicial set in which every complicial horn has a unique thin filler. A horn is a simplex with one face and its interior missing, and complicial horns are a special kind of horn. Also, when all the other faces of such a filler are thin, the missing face is thin too.

**Problem.** The nerves of strict ω-categories are exactly the complicial sets. This is the Street–Roberts conjecture, proved by Verity.

**How the definition helps.** In our own reading, thin simplices help because they record which simplices are composites or identities. A plain simplicial set cannot tell this, so it has no clean horn-filling description of strict ω-categories. The real work is in Verity's long proof. Dropping uniqueness gives weak complicial sets, a proposed model for weak ω-categories.

**nLab:** [thin element](https://ncatlab.org/nlab/show/thin+element). It says: “Street and Roberts conjectured that the nerves of strict ω-categories could be characterized as stratified simplicial sets such that”

**Sources:**

- [D. Verity, Complicial Sets, arXiv:math/0410412 (2004)](https://arxiv.org/abs/math/0410412)

### A good cylinder makes it easier to recognize a model category

**Remember:** A good cylinder turns cofibrations into anodyne cofibrations, so one check does two jobs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A32. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A premodel category is a category with all limits and colimits and two weak factorization systems (C, AF) and (AC, F), with AC ⊆ C. Maps in C are cofibrations, and maps in AC are anodyne cofibrations. It is cylindrical if it has a functorial cylinder with a right adjoint, and both systems are closed under pushout-product with the cylinder boundary. Also, pushout-product with each end inclusion must send cofibrations to anodyne cofibrations.

**Problem.** A premodel category is a model category exactly when W = AF ∘ AC satisfies 2-out-of-3. In a cylindrical premodel category, this reduces to two conditions instead of three (Cavallo and Sattler).

**How the definition helps.** The cylinder makes one condition follow from another, so there is less to check. In a cylindrical premodel category, the first of the three conditions implies the second (Lemma 3.22). This is a step toward building model structures, for example on cubical sets. The remaining two conditions still need a proof in each case.

**nLab:** [premodel category](https://ncatlab.org/nlab/show/premodel+category). It says: “In a cylindrical premodel structure, the first condition of Proposition 1 implies the second (Cavallo &amp; Sattler 2022, Lemma 3.22), yielding a simplified recognition theorem”

**Sources:**

- [Evan Cavallo, Christian Sattler, Relative elegance and cartesian cubes with one connection, arXiv:2211.14801 (2022)](https://arxiv.org/abs/2211.14801)
- [Reid William Barton, A model 2-category of enriched combinatorial premodel categories, PhD thesis, arXiv:2004.12937 (2020)](https://arxiv.org/abs/2004.12937)

### Chosen fillers give a model category where every object is fibrant

**Remember:** Do not just know that fillers exist; carry them with you.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50, 18C15. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Take a cofibrantly generated model category C (one where small sets of maps generate the cofibrations and the acyclic cofibrations) whose acyclic cofibrations are monomorphisms. An algebraic fibrant object is a fibrant object together with a chosen filler for every lifting problem against the generating acyclic cofibrations. Morphisms must preserve the chosen fillers. For simplicial sets these are Kan complexes with chosen horn fillers.

**Problem.** Under mild conditions, algebraic fibrant objects form a model category that is Quillen equivalent to C, and in which every object is fibrant. It has all limits and colimits that C has.

**How the definition helps.** Chosen fillers make fibrant objects into algebras for a monad, and the category of algebras has the limits and colimits that fibrant objects lack. Limits and filtered colimits are computed as in C. Nikolaus transfers the model structure along the free and forgetful adjunction. The hard part is a pushout lemma that shows the transfer works.

**nLab:** [model structure on algebraic fibrant objects](https://ncatlab.org/nlab/show/model+structure+on+algebraic+fibrant+objects). It says: “Under mild conditions, the category Alg C of algebraic fibrant objects in a model category C forms itself naturally a model category which is Quillen equivalent to C, and in which all objects are fibrant.”

**Sources:**

- [Thomas Nikolaus, Algebraic models for higher categories (2010), arXiv:1003.1342](https://arxiv.org/abs/1003.1342)

### Closure rules give a smallest basic localizer, which is classical homotopy theory

**Remember:** A basic localizer is closed under the moves that Quillen's Theorem A uses.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A basic localizer is a class W of functors between small categories that contains the identities, has the 2-out-of-3 property and is weakly saturated. The 2-out-of-3 property says that if two of f, g and g ∘ f are in W, so is the third. Weak saturation is a closure condition about functors that have a left inverse. W must also contain the functor A → 1 whenever A has a terminal object. Last, take a functor A → B that commutes with given functors to a category C. If each induced functor A/c → B/c of comma categories is in W, then A → B is in W. Here A/c is the category of objects of A with a map to c.

**Problem.** The smallest basic localizer is the class of functors whose nerve is a weak homotopy equivalence. Grothendieck conjectured this, and Cisinski proved it.

**How the definition helps.** The definition uses only closure conditions, so any intersection of basic localizers is again one, and a smallest one exists. The last axiom is a form of Quillen's Theorem A. So facts such as 'every functor with an adjoint is a weak equivalence' follow in a few lines. The identification with nerve weak equivalences is a real theorem.

**nLab:** [basic localizer](https://ncatlab.org/nlab/show/basic+localizer). It says: “Since the definition consists merely of closure conditions, the intersection of any family of basic localizers is again a basic localizer. It follows that there is a unique smallest basic localizer.”

**Sources:**

- [Denis-Charles Cisinski, Le localisateur fondamental minimal, Cahiers de Topologie et Géométrie Différentielle Catégoriques 45 (2004) 109–140](http://www.numdam.org/item/CTGDC_2004__45_2_109_0/)
- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](http://www.numdam.org/item/AST_2005__301__R1_0/)

### Constructive definitions give the Kan–Quillen model structure on simplicial sets

**Remember:** Lifts are data, cofibrations are decidable, and Kan complexes define weak equivalences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50, 03F65. arXiv math.AT, math.LO. Level 4: research.

**Definition.** This is a constructive version of the usual model structure on simplicial sets. A fibration is a map with a chosen way to fill horns (a horn is a simplex with one face and its interior missing): a section of the map from solutions of lifting problems to lifting problems. A cofibration is a levelwise decidable inclusion (each simplex is provably either in the image or not) whose new degenerate simplices also form a decidable subset. Weak equivalences are first defined between cofibrant Kan complexes as homotopy equivalences, and then extended to all maps by replacement.

**Problem.** With these definitions, the Kan–Quillen model structure on simplicial sets exists constructively, without excluded middle or choice. With excluded middle and choice, it is the classical one (Henry; Gambino, Sattler and Szumiło).

**How the definition helps.** The definitions put the needed choices into the data, so the proofs no longer need excluded middle or choice. The classical proofs use them, for example to show that every simplicial set is cofibrant. Constructively, only simplicial sets with decidable degeneracies are cofibrant. The proofs are still long.

**nLab:** [constructive model structure on simplicial sets](https://ncatlab.org/nlab/show/constructive+model+structure+on+simplicial+sets). It says: “due to the constructive nature of the existential quantifier, being an (acyclic) fibration means we have a section of the map from the set of solutions to lifting problems to the set of lifting problems.”

**Sources:**

- [S. Henry, A constructive account of the Kan–Quillen model structure and of Kan's Ex∞ functor, arXiv:1905.06160 (2019)](https://arxiv.org/abs/1905.06160)
- [N. Gambino, C. Sattler, K. Szumiło, The constructive Kan–Quillen model structure: two new proofs, arXiv:1907.05394 (2019)](https://arxiv.org/abs/1907.05394)

### Derivators are built so that homotopy exact squares have a combinatorial test

**Remember:** A derivator is just enough structure to compute homotopy Kan extensions pointwise from comma categories.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A40. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A derivator 𝔻 assigns to each small category J a category 𝔻(J) of 'diagrams of shape J'. Each functor u gives a restriction functor with a left and a right adjoint, the homotopy left and right Kan extensions. The axioms make these Kan extensions computable pointwise, by comma categories. A square of small categories is homotopy exact if its Beck–Chevalley map (the comparison map between the two ways round the square) is an isomorphism in every derivator.

**Problem.** Take a square with functors u : A → C, f : A → B, v : B → D and g : C → D. The square is homotopy exact exactly when, for all b in B and c in C, the functor from the double comma category (b/A/c) to D(v(b), g(c)) induces a weak equivalence of nerves.

**How the definition helps.** The derivator axioms are chosen so that a known proof for ordinary squares carries over to homotopy Kan extensions. For ordinary exact squares, you paste comma squares, and this reduces exactness to comparing colimits of constant diagrams. In Set these colimits depend only on connected components. In a derivator every step of this argument goes through. Only the last step changes: in a general derivator a constant colimit can depend on more than π₀, the set of connected components. Here the real work is Cisinski's theorem that such colimits never depend on more than the nerve of the domain. That theorem gives the test by weak equivalence of nerves.

**nLab:** [exact square](https://ncatlab.org/nlab/show/exact+square), [derivator](https://ncatlab.org/nlab/show/derivator), [homotopy exact square](https://ncatlab.org/nlab/show/homotopy+exact+square). It says: “The notion of derivator is essentially designed exactly so that this argument works, up until the last step”

**Sources:**

- [Moritz Groth, Derivators, pointed derivators, and stable derivators, Algebr. Geom. Topol. 13 (2013), arXiv:1112.3840](https://arxiv.org/abs/1112.3840)

### Derivators show homotopy types freely complete the point under homotopy colimits

**Remember:** A derivator is a homotopy category that remembers diagrams, so homotopy colimits make sense.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N60, 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A derivator sends each small category A to a category D(A), which holds the A-shaped diagrams up to homotopy. The restriction functors between these categories must have adjoints, called homotopy Kan extensions, and these adjoints must be computed pointwise. A derivator must also satisfy some conditions like those of a sheaf. The definition needs only ordinary 2-category theory.

**Problem.** The free derivator under homotopy colimits on the terminal category is the derivator of simplicial sets (Cisinski). So homotopy types act on every derivator.

**How the definition helps.** Derivators let you ask the question inside ordinary category theory, and a universal property then answers it. The point acts on every derivator, so homotopy types then act on every derivator. The definition only makes the question possible to state. The identification of the free cocompletion is a real theorem.

**nLab:** [derivator](https://ncatlab.org/nlab/show/derivator). It says: “Note that in order to conclude this, we didn't take for granted that homotopy types should be important: its universal property is formulated purely with ordinary category theory.”

**Sources:**

- [Denis-Charles Cisinski, Propriétés universelles et extensions de Kan dérivées, Theory and Applications of Categories 20 (2008), no. 17](http://www.tac.mta.ca/tac/volumes/20/17/20-17abs.html)
- [Alex Heller, Homotopy theories, Memoirs of the American Mathematical Society 71, no. 383 (1988)](https://doi.org/10.1090/memo/0383)

### Equivariant fibrations make cartesian cubical sets model classical homotopy theory

**Remember:** Fillers must respect the swapping of cube coordinates.

*Rules out counterexamples.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U05, 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** Cartesian cubical sets are presheaves on a category of cubes whose maps include diagonals and permutations of coordinates. The equivariant fibration model structure on them asks that fibrations have fillers that are compatible with the symmetries of the cubes, that is, with the permutations of coordinates. It is not enough to have a filler for each open box (a cube with one face and its interior missing) separately.

**Problem.** The equivariant fibration model structure on cartesian cubical sets is Quillen equivalent to simplicial sets, so it presents classical homotopy theory. The plain cartesian cubical model structure does not.

**How the definition helps.** Asking fillers to respect the cube symmetries turns a negative answer into a positive one. With equivariance, the model structure agrees with the test model structure (Awodey, Cavallo, Coquand, Riehl and Sattler). Cavallo and Sattler found a second such structure on cartesian cubes with one connection. The proofs are substantial papers, not consequences of the definition alone.

**nLab:** [cubical-type model category](https://ncatlab.org/nlab/show/cubical-type+model+category). It says: “A modified model structure for cartesian cubes, the equivariant fibration model structure, does present classical homotopy theory”

**Sources:**

- [Steve Awodey, Evan Cavallo, Thierry Coquand, Emily Riehl, Christian Sattler, The equivariant model structure on cartesian cubical sets, 2024, arXiv:2406.18497](https://arxiv.org/abs/2406.18497)
- [Evan Cavallo, Christian Sattler, Relative elegance and cartesian cubes with one connection, 2022, arXiv:2211.14801](https://arxiv.org/abs/2211.14801)

### Filtered complete modules give curved algebras a homotopy theory

**Remember:** With no homology, measure weak equivalence on the associated graded.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 17B70. arXiv math.AT, math.RA. Level 4: research.

**Definition.** A curved algebra has a map d of degree −1, called a predifferential, whose square is not zero. Instead, d² is the bracket with a fixed element, the curvature. So the homology of d is not defined. The paper puts a complete filtration on the modules and asks that d becomes a true differential on the associated graded pieces.

**Problem.** Filtered complete modules, with weak equivalences detected on the associated graded, give curved algebras a homotopy theory with resolutions. In it, André-Quillen cohomology of curved algebras can be defined and computed.

**How the definition helps.** On the associated graded, d squares to zero, so homology makes sense there and gives a notion of weak equivalence. Quasi-isomorphism cannot give one, because d² is not zero. The hard part is the theory of curved operads that are not augmented, with bar and cobar constructions and Koszul duality.

**Paper or page:** [André-Quillen cohomology in the context of curved algebras](https://arxiv.org/abs/2401.14309). It says: “For curved algebras however, the notion of quasi-isomorphism is meaningless. … To get a homotopical context with an appropriate notion of weak equivalence, we consider filtered complete modules with a predifferential inducing a differential on the associated graded.”

**Sources:**

- [Joan Bellier-Millès, Sinan Yalin, André-Quillen cohomology in the context of curved algebras, arXiv:2401.14309 (2024)](https://arxiv.org/abs/2401.14309)

### Generalized Reedy categories give Reedy model structures for shapes with symmetries

**Remember:** Allow symmetries, but treat each lowering map like an epimorphism for them.

*Rules out counterexamples.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A Reedy category has a degree on its objects, a subcategory R₊ of maps that raise the degree and a subcategory R₋ of maps that lower it. A Berger–Moerdijk generalized Reedy category has the same R₊ and R₋, but it allows isomorphisms. Isomorphisms keep the degree and lie in both R₊ and R₋, and the factorization of a map is unique only up to isomorphism. One extra condition says: if θ is an isomorphism, f is in R₋ and θ ∘ f = f, then θ is the identity.

**Problem.** For a generalized Reedy category R, diagrams on R with values in a suitable model category carry a Reedy model structure. This covers Segal's Γ, Connes' Λ and the tree category Ω.

**How the definition helps.** The generalized definition lets isomorphisms in and still gives the Reedy model structure. An ordinary Reedy category has no isomorphisms other than identities, so Γ, Λ and Ω do not fit it. The extra condition on isomorphisms and R₋ is used in exactly one lemma, about matching objects. The proof uses latching and matching objects with group actions, following Berger and Moerdijk.

**nLab:** [generalized Reedy category](https://ncatlab.org/nlab/show/generalized+Reedy+category), [generalized Reedy model structure](https://ncatlab.org/nlab/show/generalized+Reedy+model+structure). It says: “The notion of generalized Reedy category lifts this restriction, while maintaining the truth of the main theorem about Reedy categories: the existence of the Reedy model structure.”

**Sources:**

- [C. Berger, I. Moerdijk, On an extension of the notion of Reedy category, Mathematische Zeitschrift 269 (2011) 977–1004, arXiv:0809.3341](https://arxiv.org/abs/0809.3341)

### Grothendieck's inspiring assumption is easy for homotopy theories, not homotopy categories

**Remember:** Keep the homotopy colimits, and homotopy types become the free cocompletion of a point.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N60, 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Do not use the classical homotopy category Hot, which is an ordinary category. Use a richer model of homotopy theory instead: the derivator of homotopy types, or the (∞,1)-category of ∞-groupoids. A derivator remembers the homotopy categories of diagrams, not only of single spaces, and ∞-groupoids are a model of homotopy types. In these richer models, homotopy colimits have a universal property.

**Problem.** Grothendieck's hypothèse inspiratrice (inspiring assumption) has two parts. Every self-equivalence of the homotopy theory of homotopy types is isomorphic to the identity. Also, the identity has no nontrivial automorphisms.

**How the definition helps.** In the richer models, homotopy types are freely built from a point, so an equivalence is fixed by where it sends the point. For Set the argument is short, because Set is the free cocompletion of the point. The same argument works for ∞-groupoids, but it needs homotopy colimits, which Hot cannot express. Cisinski (for derivators) and Toën–Vezzosi (for Segal categories) prove the lifted statements; the statement for Hot is still open.

**nLab:** [hypothèse inspiratrice](https://ncatlab.org/nlab/show/hypoth%C3%A8se+inspiratrice). It says: “The hypothèse inspiratrice can be proven relatively easily if one re-formulates the question for a lift of the homotopy category to derivators, (∞,1)-category theory, or some other such setting for homotopy theory.”

**Sources:**

- [Bertrand Toën, Gabriele Vezzosi, Segal topoi and stacks over Segal categories, arXiv:math/0212330 (2002)](https://arxiv.org/abs/math/0212330)
- [Denis-Charles Cisinski, Propriétés universelles et extensions de Kan dérivées, Theory and Applications of Categories 20 (2008) 605–649](http://www.tac.mta.ca/tac/volumes/20/17/20-17abs.html)

### In elegant Reedy categories, Reedy cofibrations are just monomorphisms

**Remember:** Every element comes from one nondegenerate element by one degeneracy, as in simplicial sets.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18A25. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A Reedy category (a category with degree-raising and degree-lowering maps, like the simplex category) R is elegant if a certain gluing map is always a monomorphism. Take a monomorphism A ↪︎ B of presheaves of sets on R and an object x, and let Lₓ be the latching object at x (the part of a presheaf at x that comes from lower degrees). Then the map from the pushout of Aₓ and LₓB over LₓA to Bₓ must be a monomorphism. Equivalently, every element of a presheaf on R is a degeneracy of exactly one nondegenerate element, in exactly one way.

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

### Stable derivators give triangulated categories whose cones have universal properties

**Remember:** In a stable derivator, pullback squares and pushout squares are the same squares.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18G80, 55U35. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A derivator gives a category D(X) for each small category X, thought of as the homotopy category of diagrams of shape X. A derivator is pointed if each category D(X) has a zero object (an object that is both initial and terminal). It is stable if, in addition, a commutative square in D(□) is a homotopy pullback exactly when it is a homotopy pushout. Here □ is the category with the shape of a commutative square.

**Problem.** Maltsiniotis' theorem says that each category D(X) of a stable derivator is canonically triangulated. A triangulated category is a category with a shift functor and distinguished triangles, like a derived category. In D(X) the suspension is an equivalence, and cones come from a true universal property.

**How the definition helps.** Stability makes suspension invertible, and it makes cones come from universal properties. The suspension ΣX is the homotopy pushout of 0 ← X → 0. Stability makes Σ an equivalence, with the loop functor Ω as its inverse; in a pointed derivator, Σ is only left adjoint to Ω. You read off distinguished triangles from bicartesian diagrams of two squares (a bicartesian square is both a homotopy pullback and a homotopy pushout). So cones are defined by universal properties in diagram categories. In a bare triangulated category, cones are unique only up to a non-unique isomorphism. Proving the triangulated-category axioms is still real work.

**nLab:** [stable derivator](https://ncatlab.org/nlab/show/stable+derivator), [pointed derivator](https://ncatlab.org/nlab/show/pointed+derivator). It says: “This resolves many common issues with triangulated categories stemming from the fact that at the level of a homotopy category, certain desirable maps can only be stipulated to exist with some weak properties”

**Sources:**

- [Moritz Groth, Derivators, pointed derivators, and stable derivators, Algebraic &amp; Geometric Topology 13 (2013) 313–374, arXiv:1112.3840](https://arxiv.org/abs/1112.3840)

### The commutative monoid axiom gives model structures on commutative monoids

**Remember:** Symmetric powers of trivial cofibrations must stay trivial cofibrations.

*Rules out counterexamples. Confidence: medium.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18C40, 18M05. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A symmetric monoidal model category satisfies the commutative monoid axiom if a condition holds for every trivial cofibration h. A trivial cofibration is a cofibration that is also a weak equivalence. The pushout product is the standard way to multiply maps in such a category. The condition is that the n-fold pushout product of h, taken modulo the action of the symmetric group Σₙ, is again a trivial cofibration. This wording is our own summary of White's definition, because the nLab page leaves the axiom unstated. Lurie's 'freely powered' condition is a related, stronger hypothesis.

**Problem.** Let a symmetric monoidal model category C satisfy smallness conditions, the monoid axiom and the commutative monoid axiom. Then commutative monoids in C carry the model structure transferred from C (White, Theorem 3.2).

**How the definition helps.** The commutative monoid axiom controls the symmetric powers that appear when one glues cells in commutative monoids. The operad Comm is not cofibrant, so the monoid axiom alone does not give a model structure on commutative monoids. The axiom excludes chain complexes over a field of positive characteristic, where commutative dg-algebras have no such model structure. Rectification with E∞-monoids is a separate question.

**nLab:** [commutative monoid in a symmetric monoidal model category](https://ncatlab.org/nlab/show/commutative+monoid+in+a+symmetric+monoidal+model+category). It says: “This is why the model structure on commutative monoids may not always exist even when the model structure on E-infinity monoids in a symmetric monoidal model category does.”

**Sources:**

- [David White, Model structures on commutative monoids in general model categories, Journal of Pure and Applied Algebra 221 (2017) 3124–3168, arXiv:1403.6759](https://arxiv.org/abs/1403.6759)

### The Frobenius condition gives right properness of Kan complexes without topological realization

**Remember:** Frobenius makes pullback along fibrations safe, so right properness follows.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N50. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A weak factorization system factors every map as a left map followed by a right map; here the right maps act as fibrations. The system satisfies the Frobenius condition when pulling a left map back along a fibration gives a left map. Uniform fibrations are fibrations with chosen lifts that are compatible with pullback.

**Problem.** The Quillen model structure for Kan complexes is right proper. Through the Frobenius condition, this follows without topological realization or minimal fibrations (Gambino and Sattler).

**How the definition helps.** Our own summary: the Frobenius condition lets both halves of a factorisation survive pullback along a fibration, so right properness follows. Factor a weak equivalence as a trivial cofibration followed by a trivial fibration. Pullback along a fibration keeps trivial fibrations, and the Frobenius condition keeps trivial cofibrations. Gambino and Sattler build weak factorization systems with the Frobenius condition from uniform fibrations.

**Paper or page:** [The Frobenius Condition, Right Properness, and Uniform Fibrations](https://arxiv.org/abs/1510.00669), [A short proof of the Frobenius property for generic fibrations](https://arxiv.org/abs/2402.04227). It says: “we obtain a new proof that the Quillen model structure for Kan complexes is right proper, avoiding entirely the use of topological realization and minimal fibrations”

**Sources:**

- [Nicola Gambino and Christian Sattler, The Frobenius Condition, Right Properness, and Uniform Fibrations, Journal of Pure and Applied Algebra 221 (12) (2017), 3027–3068](https://doi.org/10.1016/j.jpaa.2017.02.013)
- [Reid Barton, A short proof of the Frobenius property for generic fibrations, Math. Struct. Comp. Sci. 35 (2025), e20](https://arxiv.org/abs/2402.04227)

### The monoid axiom gives a model structure on monoids

**Remember:** Tensor an acyclic cofibration with anything, then glue: you still get a weak equivalence.

*Makes the theorem clean to state or prove.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18M05, 55P43. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A model category has three classes of maps (weak equivalences, fibrations and cofibrations) that let one do homotopy theory. An acyclic cofibration is a cofibration that is also a weak equivalence. A monoidal model category satisfies the monoid axiom if this holds: take maps of the form (acyclic cofibration) ⊗ (any object), form pushouts of them, and compose these pushouts in a transfinite sequence. The result is always a weak equivalence.

**Problem.** Let a monoidal model category be cofibrantly generated, have all objects small, and satisfy the monoid axiom. Then monoids in it carry the transferred model structure (Schwede and Shipley).

**How the definition helps.** The monoid axiom gives the extra control that the transfer of the model structure needs. The pushout-product axiom only controls tensor products of cofibrations with cofibrant objects. For a cofibrantly generated model category, it is enough to check the axiom on the generating acyclic cofibrations. Simplicial sets, connective chain complexes and symmetric spectra satisfy it.

**nLab:** [monoid axiom in a monoidal model category](https://ncatlab.org/nlab/show/monoid+axiom+in+a+monoidal+model+category), [monoidal model category](https://ncatlab.org/nlab/show/monoidal+model+category). It says: “The monoid axiom is an extra condition on a monoidal model category that helps to make its model structure on monoids in a monoidal model category exist and be well behaved.”

**Sources:**

- [Stefan Schwede, Brooke Shipley, Algebras and modules in monoidal model categories, Proc. London Math. Soc. 80 (2000) 491–511, arXiv:math/9801082](https://arxiv.org/abs/math/9801082)

### The simplicial model category axiom makes mapping spaces Kan complexes

**Remember:** Apply the mapping-space axiom to maps from and to the endpoints.

*True by definition.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 55U10. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A simplicial model category has simplicial sets of maps, with tensor and cotensor operations that give adjoints for these mapping spaces. Its axiom pairs a cofibration X → Y and a fibration A → B. The map from maps Y → A to compatible pairs of maps X → A and Y → B must be a Kan fibration. It must also be a weak equivalence if either input map is one.

**Problem.** An object is cofibrant if the map from the initial object is a cofibration. An object is fibrant if its map to the terminal object is a fibration. From a cofibrant object to a fibrant one, the simplicial set of maps is a Kan complex.

**How the definition helps.** The mapping-space axiom gives the claim by taking the initial source and terminal target in its two tests. The simplicial set of compatible pairs is then a point. A Kan fibration lifts simplices with one face missing, so a Kan fibration to a point is precisely a Kan complex. The equivalent pushout-product axiom instead tests products of cofibrations with maps of simplicial sets. The work lies in that adjunction of tests and in proving the compatibility axiom in examples (our own summary).

**nLab:** [simplicial model category](https://ncatlab.org/nlab/show/simplicial+model+category). It says: “If X ∈ 𝒞 is cofibrant and A ∈ 𝒞 is fibrant, then 𝒞(X,A) is fibrant in sSet, hence is a Kan complex.”

**Sources:**

- [D. G. Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer, 1967](https://doi.org/10.1007/BFb0097438)

### Type-theoretic model categories make type theory valid in the presented (∞,1)-category

**Remember:** Strict pullbacks and pushforwards must also mean the right homotopy things.

*Rules out counterexamples.* MSC 18N40 (Homotopical algebra, Quillen model categories, derivators), 18N45, 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** A type-theoretic model category is a model category with extra conditions. Examples are: it is right proper (pullback along a fibration keeps weak equivalences), pullback along a fibration has a right adjoint, and cofibrations are closed under limits (or are exactly the monomorphisms). Several variants exist (Shulman; Arndt–Kapulkin; Gepner–Kock; Lumsdaine–Shulman).

**Problem.** The fibrant objects of a type-theoretic model category interpret type theory validly in the (∞,1)-category that it presents. For example, Π-types satisfy function extensionality when pullback along fibrations preserves cofibrations (Shulman, Lemma 5.9).

**How the definition helps.** With the extra conditions, the strict constructions (pullback, pushforward along fibrations, path objects) present the (∞,1)-categorical ones. Stronger conditions of this kind are meant to rule out Bordg's counterexample. There, groupoids with a ℤ/2-action give a model with Π-types and a universe, but function extensionality and univalence fail. The nLab says that there is no single agreed definition yet.

**nLab:** [type-theoretic model category](https://ncatlab.org/nlab/show/type-theoretic+model+category). It says: “the universe fails to be univalent and indeed that function extensionality fails to hold, even though the (∞,1)-category presented by this model structure is locally cartesian closed and has an object classifier for discrete objects.”

**Sources:**

- [Michael Shulman, Univalence for inverse diagrams and homotopy canonicity, Math. Struct. Comp. Sci. 25 (2015), arXiv:1203.3253](https://arxiv.org/abs/1203.3253)
- [Anthony Bordg, On the inadequacy of the projective structure with respect to the Univalence Axiom, 2017, arXiv:1712.02652](https://arxiv.org/abs/1712.02652)

### Pullback-stable generating maps give well-behaved fibrations in type theory

**Remember:** If the test maps survive pullback, fibrancy survives substitution.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 18N45 (Categories of fibrations, relations to \\(K\\)-theory, relations to type theory), 18A32, 03B38. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Define the fibrations of a model of type theory as the maps with the right lifting property against a class of generating left maps. Ask that this class is stable under pullback. Then the fibrations form the right class of an algebraic weak factorization system (a functorial way to factor each map into a left map and a right map, with lifts given as structure).

**Problem.** If the generating left maps are stable under pullback, a Π-type with fibrant codomain is fibrant. Fibrant replacement then commutes with substitution, so it can be internalized as a monad on types.

**How the definition helps.** Pullback-stable generating maps make fibrancy survive substitution, so both properties hold. Kan fibrancy and Segal fibrancy do not have them, because a horn or open box is filled above a cell that is not part of it. The nLab says 'one way to guarantee', so this is a sufficient condition, not a characterization.

**nLab:** [contextual fibrancy](https://ncatlab.org/nlab/show/contextual+fibrancy). It says: “One way to guarantee that properties 1-2 hold, is by defining fibrations as the right class of an algebraic weak factorization system generated by a class of generating left maps whose pullback is again a left map”

**Sources:**

- [Andreas Nuyts, Contributions to Multimode and Presheaf Type Theory, chapter 8: Fibrancy, PhD thesis, KU Leuven (2020)](https://lirias.kuleuven.be/retrieve/581985)
- [Simon Boulier, Nicolas Tabareau, Model structure on the universe of all types in interval type theory, Mathematical Structures in Computer Science 31 (2021)](https://doi.org/10.1017/S0960129520000213)

### After subdivision, the Barratt nerve models every homotopy type

**Remember:** The Barratt nerve sees only the face poset, so simplices must be embedded.

*Rules out counterexamples. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 4: research.

**Definition.** The Barratt nerve Ba(X) of a simplicial set X is the nerve of the poset of non-degenerate simplices of X, ordered by the face relation. A simplicial set is non-singular when its non-degenerate simplices are embedded, that is, the map from the standard simplex is injective. It is regular when each non-degenerate simplex is embedded along its last face.

**Problem.** For every simplicial set X, the map Ba(Sd X) → X is a weak homotopy equivalence, in fact a triangulation. So every homotopy type is modelled by the nerve of a poset.

**How the definition helps.** Subdivision makes every simplicial set regular, and on regular simplicial sets the Barratt nerve gives the right homotopy type. On general simplicial sets it fails: the sphere Δⁿ/∂Δⁿ has Barratt nerve Δ¹, which is contractible. Fjellbo shows that Ba X → X is a triangulation whenever X is regular.

**nLab:** [Barratt nerve](https://ncatlab.org/nlab/show/Barratt+nerve). It says: “But on "non-singular" simplicial sets such as produced by subdivision Sd : sSet → sSet, the Barratt nerve produces weakly homotopy equivalent types”

**Sources:**

- [Vegard Fjellbo, Optimal Triangulation of Regular Simplicial Sets (2020), arXiv:2001.04339](https://arxiv.org/abs/2001.04339)

### The π∗-Kan condition makes realization preserve homotopy pullbacks

**Remember:** Kan-like homotopy groups in the levels make realization keep homotopy pullbacks.

*Rules out counterexamples. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 55U10. arXiv math.AT. Level 4: research.

**Definition.** The π∗-Kan condition (Bousfield–Friedlander, B.3) is a condition on a bisimplicial set, or a simplicial space. Roughly, for each n ≥ 1, the homotopy groups πₙ of the levels, taken at all base points together, form a simplicial set. The condition asks that the map from this simplicial set to the simplicial set of base points be a Kan fibration. A Kan fibration is a map of simplicial sets with the horn-filling property that a fibration of spaces has.

**Problem.** Let f : X• → Y• be a map of simplicial spaces that satisfy the π∗-Kan condition, with π₀(f)• a Kan fibration. Then realization takes every homotopy pullback square along f to a homotopy pullback (Bousfield–Friedlander, Theorem B.4).

**How the definition helps.** The π∗-Kan condition is a hypothesis under which realization does preserve homotopy pullbacks. Without such conditions, it does not. Anderson, Rezk and others later gave other sufficient conditions. Rezk's condition (π₀ of the base is constant) is often easier to check.

**nLab:** [π-Kan condition](https://ncatlab.org/nlab/show/%CF%80-Kan+condition), [geometric realization of simplicial topological spaces](https://ncatlab.org/nlab/show/geometric+realization+of+simplicial+topological+spaces). It says: “The π∗-Kan condition (Bousfield &amp; Friedlander 1978, B.3) on a bisimplicial set guarantees that its geometric realization behaves well with respect to homotopy pullback”

**Sources:**

- [A. K. Bousfield, E. M. Friedlander, Homotopy theory of Γ-spaces, spectra, and bisimplicial sets, Lecture Notes in Mathematics 658 (1978) 80–130](https://doi.org/10.1007/BFb0068711)

### Unique thin fillers give a nonabelian Dold–Kan theorem

**Remember:** Unique thin fillers turn a Kan complex into algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N50 (Simplicial sets, simplicial objects), 18G45, 18G50. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A simplicial T-complex is a simplicial set with a chosen set of thin elements that satisfy Dakin's axioms. Every degenerate element is thin. Every horn (a simplex with one face and its interior missing) has a unique thin filler. If all faces but one of a thin element are thin, then the last face is thin too.

**Problem.** Ashley's theorem, which Dakin conjectured, says that simplicial T-complexes are equivalent to crossed complexes. A crossed complex is an algebraic object: a sequence of groups and groupoids with boundary maps and actions, a nonabelian kind of chain complex.

**How the definition helps.** In our own reading, unique thin fillers make composition well defined, and so the structure can be equivalent to an algebraic one. A Kan complex has many horn fillers and no algebra. Ashley calls the result a nonabelian Dold–Kan theorem. The proof is long; the definition makes the theorem possible to state, not easy to prove.

**nLab:** [thin element](https://ncatlab.org/nlab/show/thin+element). It says: “Ashley's theorem, conjectured by Dakin, is that the category of such T-complexes is equivalent to that of crossed complexes.”

**Sources:**

- [Ronald Brown, Philip J. Higgins, The equivalence of ∞-groupoids and crossed complexes, Cahiers de Topologie et Géométrie Différentielle 22 (1981) 371–386 (the cubical case)](https://www.numdam.org/item/?id=CTGDC_1981__22_4_371_0)

### Topological localizations are left exact by definition

**Remember:** Topological means: invert monomorphisms and keep finite limits.

*Rules out counterexamples.* MSC 18N55 (Localizations (e.g., simplicial localization, Bousfield localization)), 18N60, 18F10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A reflective localization of an ∞-category of presheaves is a full subcategory whose inclusion has a left adjoint. It is left exact when that left adjoint preserves finite limits. A topological localization is a left exact reflective localization at a set of monomorphisms. Left exactness is part of the definition.

**Problem.** Topological localizations of ∞-presheaves on C correspond exactly to Grothendieck topologies on C. The class of maps that they invert is stable under pullback.

**How the definition helps.** Putting left exactness into the definition removes the bad examples and gives pullback stability for free. A general localization at a set of monomorphisms need not be left exact. For example, localizing at an inclusion 1 → 1 + 1 gives the (−1)-truncation (it sends each object to the proposition that the object is inhabited), and this does not keep finite limits. A reflective localization is exact precisely when its inverted maps are stable under pullback, so this stability holds by definition. What the definition buys is a clean statement: topological localizations of ∞-presheaves on C are exactly the ∞-categories of sheaves for Grothendieck topologies on C. That bijection is still a theorem of Lurie.

**nLab:** [topological localization](https://ncatlab.org/nlab/show/topological+localization). It says: “A topological localization is, by definition, a left exact localization at a set of monomorphisms; left exactness is part of the definition. A general localization at a set of monomorphisms need not be left exact.”

**Sources:**

- [Jacob Lurie, Higher Topos Theory, 2009, Annals of Mathematics Studies 170, arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### An ∞-connected (∞,1)-topos has the shape of a point

**Remember:** In an ∞-connected topos, constant sheaves remember exactly the ∞-groupoids they came from.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P55. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An (∞,1)-topos H is ∞-connected if the constant-sheaf functor LConst : ∞Grpd → H is fully faithful. Here ∞Grpd is the (∞,1)-category of ∞-groupoids, and LConst is the inverse image of the global sections morphism. Fully faithful means that LConst does not change the spaces of maps between ∞-groupoids.

**Problem.** An ∞-connected (∞,1)-topos has the shape of the point.

**How the definition helps.** The definition already says that the shape is the identity, which is the shape of the point. LConst is fully faithful exactly when the unit Id → Γ ∘ LConst is an equivalence, where Γ is the global sections functor. The shape of H is the functor Γ ∘ LConst : ∞Grpd → ∞Grpd. So the definition says that this shape is the identity. When H is also locally ∞-connected, the condition is the same as this: the fundamental ∞-groupoid functor Π preserves the terminal object.

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

**Definition.** A map is (−2)-truncated if it is an equivalence. For k ≥ −1, a map f from X to Y is k-truncated if its diagonal is (k−1)-truncated. The diagonal is the map from X to the pullback of f along itself. An object is k-truncated if its map to the terminal object is k-truncated.

**Problem.** A functor between ∞-categories with finite limits that preserves those limits also preserves k-truncated maps and objects.

**How the definition helps.** The diagonal definition uses only equivalences and finite limits, so a functor preserving those limits carries each step to the same test. Induction proves preservation for maps, and preservation of the terminal object gives the result for objects. The other definition asks that induced maps of mapping spaces have k-truncated fibers. The work is proving the two tests agree, using that taking a path space in a space lowers the truncation level (our own summary).

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “This follows from the above recursive characterization of k-truncated morphisms by the (k-1)-truncation of their diagonal, which is preserved by the finite limit preserving F.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Effective groupoids in ∞-toposes make every group object a loop object

**Remember:** The degree-one term of the quotient nerve is the loop object.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55R35, 55P35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** An ∞-topos is an ∞-category with the properties of a category of sheaves of spaces. A group object is a group in this setting, encoded by a groupoid with one object. A groupoid object is effective if its diagram is the Čech nerve of the map from its objects to its quotient. This nerve records the repeated pullbacks of that map along itself.

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

**Definition.** A quasi-category is a simplicial set in which simplices with one non-end face missing have fillers. Its homotopy 2-category has quasi-categories as objects, functors as maps, and homotopy classes of natural transformations as maps between functors. In this setting, an adjunction consists of a unit and counit satisfying the two triangle identities after passage to homotopy classes.

**Problem.** Adjunctions of quasi-categories compose. Any two right adjoints to the same functor are naturally equivalent.

**How the definition helps.** The homotopy 2-category definition turns composition and uniqueness into the ordinary unit-and-counit calculations in a 2-category (our own explanation). Composition pastes the units and counits, and uniqueness gives inverse transformations between the two right adjoints. Another definition gives a natural equivalence of mapping spaces instead. The work lies in proving that the definitions agree and that the 2-category adjunction extends to a coherent adjunction.

**nLab:** [formal (infinity,1)-category theory](https://ncatlab.org/nlab/show/formal+%28infinity%2C1%29-category+theory). It says: “For instance, this includes the theory of adjoint (∞,1)-functors (which are automatically homotopy coherent)”

**Sources:**

- [E. Riehl, D. Verity, The 2-category theory of quasi-categories, Advances in Mathematics 280 (2015) 549–642](https://doi.org/10.1016/j.aim.2015.04.021)

### In an ∞-topos, one object classifies all small maps

**Remember:** Up to homotopy, every small map is a pullback of one universal map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 03B38. arXiv math.CT, math.LO. Level 4: research.

**Definition.** Let S be a class of morphisms that is stable under pullback. An S-classifier is a morphism Û → U such that every morphism in S is a pullback of it along an essentially unique map. In an ∞-topos, pullbacks are homotopy pullbacks, and 'unique' means unique up to a contractible space of choices.

**Problem.** An ∞-topos has a classifier for relatively κ-compact morphisms for every sufficiently large regular cardinal κ. Conversely, a presentable ∞-category with universal colimits and such classifiers is an ∞-topos (Rezk; Lurie, HTT 6.1.6.8).

**How the definition helps.** In an ∞-topos, uniqueness is only up to equivalence, so automorphisms become part of the classifying object instead of blocking it. In a 1-topos only monomorphisms are classified. An object of a 1-category can classify only a poset of maps, and maps with automorphisms would have non-unique classifying maps. Rezk's characterization is a real theorem.

**nLab:** [(sub)object classifier in an (infinity,1)-topos](https://ncatlab.org/nlab/show/%28sub%29object+classifier+in+an+%28infinity%2C1%29-topos). It says: “When one passes all the way to ∞-toposes, there should be objects that classify all morphisms, subject to some bound on size.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Math. Studies 170 (2009), arXiv:math/0608040](https://arxiv.org/abs/math/0608040)

### In any ∞-topos, cocycles classify principal ∞-bundles

**Remember:** A bundle is the homotopy fiber of its classifying map.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55R15, 55R35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let H be an ∞-topos (an ∞-category that behaves like the ∞-category of spaces or of ∞-sheaves), and let G be a group in H. A G-principal ∞-bundle over X is a map P → X with a G-action on P such that X is the quotient of the action. Here the quotient is the ∞-colimit of the action groupoid. A cocycle is a map X → 𝐁G, where 𝐁G is the delooping of G (the object whose loop object is G).

**Problem.** In an ∞-topos, G-principal ∞-bundles over X are equivalent to cocycles X → 𝐁G. So the nonabelian cohomology H(X, 𝐁G) classifies them.

**How the definition helps.** The classification follows from the Giraud axioms of an ∞-topos alone. From a cocycle X → 𝐁G you take its homotopy fiber P. Every groupoid object is effective and colimits are stable under pullback, so the bundle and the cocycle determine each other. Our own remark: no paracompactness or numerable covers are needed, unlike the classical theorem for spaces.

**nLab:** [principal infinity-bundle](https://ncatlab.org/nlab/show/principal+infinity-bundle). It says: “In words this says that the cohomology on X with coefficients in G classified G-principal ∞-bundles, and in fact does so on the level of cocycles.”

**Sources:**

- [Thomas Nikolaus, Urs Schreiber, Danny Stevenson, Principal ∞-bundles – General theory, J. Homotopy Relat. Struct. 10 (2015) 749–801, arXiv:1207.0248](https://arxiv.org/abs/1207.0248)

### In elementary ∞-toposes, enough universes make finite colimits van Kampen

**Remember:** Every map lives in some universe closed under all the basic operations.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18B25. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An elementary (∞,1)-topos is an (∞,1)-category with finite limits, finite colimits, local cartesian closure and a subobject classifier. Local cartesian closure means that every slice category is cartesian closed. In addition, every morphism must be classified by some universe (an object classifier) that is closed under finite limits, finite colimits, sums and products.

**Problem.** In an elementary (∞,1)-topos, the initial object is strict, coproducts are disjoint, and all finite colimits are van Kampen.

**How the definition helps.** The universe axiom does much of the work. Each finite family of maps is classified by one universe, so a few lines show that finite colimits are van Kampen (they satisfy descent). The page also builds a natural numbers object, but in type theory, so that part depends on a translation. Finite colimits must stay in the definition: Frey and Rasekh show that the other axioms do not give pushouts.

**nLab:** [elementary (infinity,1)-topos](https://ncatlab.org/nlab/show/elementary+%28infinity%2C1%29-topos). It says: “However, there is still a good deal of extra structure that "comes for free" from the above definition.”

**Sources:**

- [Jonas Frey, Nima Rasekh, Constructing coproducts in locally cartesian closed ∞-categories, 2021, arXiv:2108.11304](https://arxiv.org/abs/2108.11304)

### Invertible suspension makes stable mapping sets abelian groups

**Remember:** Every stable target is a double loop object, so maps into it add.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55P42. arXiv math.AT, math.CT. Level 4: research.

**Definition.** In a pointed ∞-category, the zero object is both initial and terminal. The loop object ΩY is the pullback of the two maps from zero to Y. The suspension ΣY is the pushout of the two maps from Y to zero. One definition of stability requires finite limits and colimits and makes suspension an equivalence.

**Problem.** In the homotopy category of a stable ∞-category, maps between any two objects form an abelian group. Composition is additive in both arguments.

**How the definition helps.** Invertible suspension lets us write every target Y as the double loop object Ω²Σ²Y. Mapping into a pullback gives a pullback of mapping spaces. Thus the mapping space into Y is itself a double loop space. The two loop operations commute by the interchange law, so the group of components is abelian. Naturality gives additivity in both arguments. With stability defined by agreement of fiber and cofiber sequences, the work lies in proving that suspension and looping are inverse (our own summary).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “which are autoequivalences of C that are inverses of each other.”

**Sources:** none listed. No primary source with a working link was found.

### Mapping-space truncation makes truncated objects closed under limits

**Remember:** A limit of mapping spaces cannot create higher homotopy in this range.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55U35. arXiv math.AT, math.CT. Level 4: research.

**Definition.** For n ≥ 0, a space is n-truncated if its homotopy groups above degree n vanish at every base point. An object A of an ∞-category is n-truncated if every space of maps into A is n-truncated.

**Problem.** In any ∞-category, a limit of n-truncated objects is n-truncated whenever the limit exists.

**How the definition helps.** The mapping-space definition makes the claim a test on spaces because maps into a limit form the limit of the mapping spaces. The work is proving the corresponding fact for spaces. A space is n-truncated exactly when constant maps from the (n + 1)-sphere give an equivalence from the space to its space of sphere maps. Both sides of this test preserve limits, so it passes to a limit (our own argument). This connects the abstract test to the definition by vanishing homotopy groups.

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “For C an (∞,1)-category and k ≥ −2, the full sub-(∞,1)-category τ≤ₖ C is stable under all ∞-limits in C.”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Regular ∞-group actions are those with a contractible homotopy quotient

**Remember:** Free and transitive together mean that the quotient is a point, up to homotopy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55R35, 03B38. arXiv math.AT, math.CT. Level 4: research.

**Definition.** An ∞-group is a group up to coherent homotopy. In homotopy type theory, an action of an ∞-group G is a type family X over BG, the classifying type of G. The action is regular if its homotopy quotient Σ (b : BG), X(b) is contractible. This homotopy quotient is the total type of the family: it collects all the fibers X(b) into one type.

**Problem.** For a group acting on a set, the homotopy quotient is contractible exactly when the action is free and transitive. So regular actions extend torsors to every ∞-group.

**How the definition helps.** One condition, a contractible homotopy quotient, does the work of both 'free' and 'transitive', and it makes sense for any ∞-group. Transitivity says that all points of the homotopy quotient are connected. Freeness says that the paths between two points form a contractible space. With this definition, results such as the regularity of the automorphism group action get short proofs in homotopy type theory.

**nLab:** [regular action](https://ncatlab.org/nlab/show/regular+action). It says: “Transitivity ensures that all the points in the homotopy quotient are connected by equivalences, while freeness means that the space of equivalences between two points is itself contractible.”

**Sources:** none listed. No primary source with a working link was found.

### Represented cohomology turns coefficient fibers into long exact sequences

**Remember:** Mapping into a fiber gives a fiber of mapping spaces.

*True by definition.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 55U35, 18F20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** Work in an ∞-category with finite limits, and choose a coefficient object A with a base point. Represented cohomology of X with coefficients in A is the set of path components of the space of maps X → A. Its degree −n version, for n ≥ 0, uses the n-fold loop object of A instead.

**Problem.** A fiber sequence of pointed coefficient objects gives a long exact sequence in nonpositive degrees. Here the fiber is the pullback of the target’s base point along the map. The terms in degree zero are pointed sets, not necessarily groups.

**How the definition helps.** The mapping-space definition gives the exact sequence because mapping into a fiber produces a fiber sequence of spaces. It also turns maps into iterated loop objects into loops on the original mapping space. Taking components therefore gives the homotopy groups in negative degrees and the pointed sets in degree zero. The usual long exact homotopy sequence gives the result. Compared with a cochain definition, the work lies in proving that the mapping spaces recover the cohomology in question. Brown’s work on sheaf cohomology gives one such comparison (our own summary).

**nLab:** [cohomology](https://ncatlab.org/nlab/show/cohomology), [fiber sequence](https://ncatlab.org/nlab/show/fiber+sequence). It says: “By projecting everything to connected components with Π₀ this then yields an ordinary long exact sequence of pointed sets”

**Sources:**

- [K. S. Brown, Abstract homotopy theory and generalized sheaf cohomology, Transactions of the American Mathematical Society 186 (1973) 419–458](https://doi.org/10.1090/S0002-9947-1973-0341469-9)

### Stable ∞-categories make finite-limit preservation equivalent to finite-colimit preservation

**Remember:** The same squares test preservation of finite limits and finite colimits.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18G80. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An ∞-category has spaces of maps and keeps track of their higher homotopies. It is stable if it has a zero object and finite limits and colimits, and its pullback squares are exactly its pushout squares. A zero object is both initial and terminal.

**Problem.** A functor between stable ∞-categories preserves finite limits exactly when it preserves finite colimits.

**How the definition helps.** The square-based definition makes finite limits and finite colimits use the same tests. A functor preserving finite limits keeps the zero object and pullbacks, so it keeps the initial object and pushouts. These generate finite colimits. The reverse argument exchanges limits and colimits. The alternative definition compares only fiber and cofiber sequences, the pullback and pushout squares with a zero corner. Showing that the two definitions agree is where the work lies (our own summary).

**nLab:** [stable (infinity,1)-category](https://ncatlab.org/nlab/show/stable+%28infinity%2C1%29-category). It says: “every exact triangle is coexact and vice versa, i.e. every morphism is the cokernel of its kernel and the kernel of its cokernel.”

**Sources:** none listed. No primary source with a working link was found.

### Terminal-cone limits in ∞-categories are unique up to contractible choice

**Remember:** All terminal cones form a space equivalent to a point.

*True by definition. Confidence: medium.* MSC 18N60 (\\((\\infty,1)\\)-categories (quasi-categories, Segal spaces, etc.); \\(\\infty\\)-topoi, stable \\(\\infty\\)-categories), 18A30. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A cone connects an object to every entry of a diagram, with compatible maps and higher homotopies. In an ∞-category, an object is terminal if every space of maps into it is contractible, meaning equivalent to a point. A limit is a terminal object in the ∞-category of cones.

**Problem.** If a limit exists, the full subcategory of limit cones is a contractible space.

**How the definition helps.** The terminal-cone definition reduces uniqueness to the map spaces between terminal objects (our own explanation). Each is contractible, and all its maps are equivalences because the reverse maps and the identity composites exist up to homotopy. Thus the terminal objects form a space equivalent to a point if there is at least one. The equivalent slice definition instead uses a trivial fibration, a map that lifts against every simplex boundary. The work in that presentation is proving the slice test and the map-space test agree.

**nLab:** [terminal object in an (infinity,1)-category](https://ncatlab.org/nlab/show/terminal+object+in+an+%28infinity%2C1%29-category). It says: “instead of demanding that from any other object there is a unique morphism into the terminal object, in a quasi-category there is a contractible infinity-groupoid of such morphisms”

**Sources:**

- [J. Lurie, Higher Topos Theory, Annals of Mathematics Studies 170, Princeton University Press, 2009](https://doi.org/10.1515/9781400830558)

### Axioms for (∞,n)-categories make all the models give one theory

**Remember:** (∞,n)-categories come from freely gluing strict n-categorical shapes, with nothing extra.

*Makes the theorem clean to state or prove.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories). arXiv math.CT, math.AT. Level 4: research.

**Definition.** The Barwick–Schommer-Pries axioms describe an (∞,1)-category of (∞,n)-categories. It must be presentable, that is, generated under colimits by a small set of objects. It must be strongly generated by a set of strict n-categories, such as globes and their pastings. It must also respect certain basic pushouts, have certain base-change adjoints, and be universal with these properties.

**Problem.** The Barwick–Schommer-Pries axioms determine the (∞,1)-category of (∞,n)-categories up to equivalence. So all models that satisfy them, such as complete Segal Θₙ-spaces and iterated complete Segal spaces, give the same homotopy theory.

**How the definition helps.** With the axioms, uniqueness is almost immediate from the first axiom, so comparing models reduces to checking axioms. The automorphism ∞-group of the theory can also be computed from the axioms. Checking that each model satisfies the axioms is the remaining hard work.

**nLab:** [(infinity,n)-category](https://ncatlab.org/nlab/show/%28infinity%2Cn%29-category). It says: “By the first axiom, the localization demanded in the universal property is essentially unique.”

**Sources:**

- [Clark Barwick, Christopher Schommer-Pries, On the Unicity of the Homotopy Theory of Higher Categories, J. Amer. Math. Soc. 34 (2021) 1011–1058, arXiv:1112.0040](https://arxiv.org/abs/1112.0040)

### Defining monoidal n-categories as degenerate higher categories makes delooping true by definition

**Remember:** A k-tuply monoidal n-category is an (n+k)-category squashed to one point below level k.

*True by definition.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is a pointed (n+k)-category (one with a chosen object) in which any two parallel j-morphisms are equivalent for j &lt; k. Parallel means that they have the same source and the same target. Its j-morphisms are then renamed as (j−k)-morphisms.

**Problem.** The delooping hypothesis says that k-tuply monoidal n-categories are the same as pointed (k−1)-connected (n+k)-categories.

**How the definition helps.** If you take these degenerate (n+k)-categories as the definition, then the delooping hypothesis holds by definition. The content then moves to another question. Does this definition agree with hand-made ones, such as monoidal or braided monoidal categories? The nLab checks this in low dimensions. For (∞,n)-categories defined by iterated enrichment, Gepner and Haugseng proved the hypothesis as a theorem.

**nLab:** [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis), [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category). It says: “Not infrequently the delooping hypothesis is used to supply a definition of”

**Sources:**

- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)
- [David Gepner, Rune Haugseng, Enriched ∞-categories via non-symmetric ∞-operads, Adv. Math. (2015), arXiv:1312.3178](https://arxiv.org/abs/1312.3178)

### Defining monoidal structure by little cubes turns stabilization into a theorem

**Remember:** k monoidal structures are k directions in which little cubes can sit side by side.

*Makes the theorem clean to state or prove.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is defined as an n-category with an action of the little k-cubes operad. In other words, it is an Eₖ-algebra in n-categories. An operad records the ways to combine several inputs into one output. The little k-cubes operad records the ways to put several small cubes side by side inside one k-dimensional cube.

**Problem.** The Baez–Dolan stabilization hypothesis says this: for k ≥ n+2, a k-tuply monoidal n-category is already maximally monoidal, that is, symmetric monoidal. More monoidal structures beyond that point add nothing new.

**How the definition helps.** The little-cubes definition gives the hypothesis an exact meaning, so it can be proved. Before a definition of k-tuply monoidal n-category existed, nobody could state the hypothesis exactly. With the little-cubes definition, the hypothesis becomes a theorem for (n,1)-categories (n-categories in which every morphism above the first level is invertible). The first full proof in print comes from Lurie's work on Eₖ-algebras. Gepner and Haugseng proved a strong general form for (∞,n)-categories, which they define by iterated enrichment.

**nLab:** [stabilization hypothesis](https://ncatlab.org/nlab/show/stabilization+hypothesis), [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category). It says: “makes good sense, as discussed further below. With this definition the stabilization hypothesis is a theorem at least for (n,1)-categories”

**Sources:**

- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)
- [David Gepner, Rune Haugseng, Enriched ∞-categories via non-symmetric ∞-operads, Adv. Math. (2015), arXiv:1312.3178](https://arxiv.org/abs/1312.3178)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Fully dualizable objects make the cobordism hypothesis a precise statement

**Remember:** A fully dualizable object bends back on itself in every dimension, like a point.

*Makes the theorem clean to state or prove.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 57R56, 18M10. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An (∞,n)-category is a higher category with morphisms in all levels, in which the morphisms above level n are invertible. An object of a symmetric monoidal (∞,n)-category is fully dualizable if it has a dual, and the unit and counit of the duality have adjoints, which have adjoints in turn, and so on up to level n−1. The framed bordism (∞,n)-category Bordₙᶠʳ has framed points as objects, cobordisms between them as morphisms, and higher cobordisms as higher morphisms.

**Problem.** Cobordism hypothesis: evaluation at the point is an equivalence from symmetric monoidal functors Bordₙᶠʳ → C to the ∞-groupoid of fully dualizable objects of C. So a framed fully extended TQFT is determined by its value on the point.

**How the definition helps.** Full dualizability gives the hypothesis an exact meaning, but it does not prove it. Baez and Dolan stated the hypothesis in 1995, before the needed higher categories were defined. The proof is hard, and the nLab calls Lurie's account a detailed but incomplete sketch. Other tangential structures follow from the framed case through homotopy fixed points of an O(n)-action.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis), [fully dualizable object](https://ncatlab.org/nlab/show/fully+dualizable+object), [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “before definitions of these higher category theoretical notions were available.”

**Sources:**

- [Jacob Lurie, On the Classification of Topological Field Theories, Current Developments in Mathematics 2008 (2009) 129–280, arXiv:0905.0465](https://arxiv.org/abs/0905.0465)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Keeping the basepoint makes the periodic table of higher categories hold

**Remember:** Keep the basepoint, or extra transformations creep in.

*Rules out counterexamples.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18N70. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A k-tuply monoidal n-category is a pointed (k−1)-connected (n+k)-category. Here (k−1)-connected means that any two parallel j-morphisms are equivalent for every j less than k. The basepoint is extra data. Functors and transformations must respect the basepoint.

**Problem.** With pointed functors and pointed transformations, the entries of the Baez–Dolan periodic table hold as equivalences. For example, 1-tuply monoidal 0-categories are monoids, and 2-tuply monoidal 0-categories are commutative monoids.

**How the definition helps.** The basepoint removes extra transformations, so the expected equivalences hold. Without it, a transformation between functors f and g of one-object categories is an element y with f(x)y = y g(x) for all x. So connected 1-categories do not form the 1-category of monoids. For doubly degenerate bicategories, nonidentity modifications cause the same problem (Cheng and Gurski).

**nLab:** [k-tuply monoidal n-category](https://ncatlab.org/nlab/show/k-tuply+monoidal+n-category), [periodic table](https://ncatlab.org/nlab/show/periodic+table). It says: “However, the nonidentity modifications do screw things up, so the tricategory of 1-connected bicategories is not equivalent to the 1-category of commutative monoids.”

**Sources:**

- [Eugenia Cheng, Nick Gurski, The periodic table of n-categories for low dimensions I: degenerate categories and degenerate bicategories, arXiv:0708.1178](https://arxiv.org/abs/0708.1178)
- [John C. Baez, James Dolan, Higher-dimensional algebra and topological quantum field theory, J. Math. Phys. 36 (1995) 6073–6105, arXiv:q-alg/9503002](https://arxiv.org/abs/q-alg/9503002)

### Simpson conjectures that only the unit laws need to be weak

**Remember:** Keep everything strict except the identities.

*Rules out counterexamples. Confidence: medium.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18N20. arXiv math.CT, math.AT. Level 4: research.

**Definition.** A semi-strict ∞-category in Simpson's sense has strictly associative composition and strict interchange laws (the rule that composing horizontally then vertically gives the same result as the other order). Only its unit laws hold weakly, that is, up to equivalence.

**Problem.** One-object 3-groupoids that are strict except for weak units model all connected, simply connected homotopy 3-types (Joyal and Kock). Simpson conjectures that every weak ∞-category is equivalent to one in which only the unit laws are weak.

**How the definition helps.** Making only the units weak is Simpson's proposed way around a known obstruction. Simpson proved that no strict n-groupoid, for n ≥ 3, realizes the n-type of the 2-sphere, under a realization compatible with homotopy groups. So fully strict groupoids, except for inverses, cannot model all homotopy types. The general case is open, so the definition is a proposed fix, not a finished theorem.

**nLab:** [Simpson's conjecture](https://ncatlab.org/nlab/show/Simpson%27s+conjecture), [semi-strict infinity-category](https://ncatlab.org/nlab/show/semi-strict+infinity-category). It says: “Simpson's conjecture is proven up to the case of 3-categories with a single object.”

**Sources:**

- [Carlos Simpson, Homotopy types of strict 3-groupoids, arXiv:math/9810059 (1998)](https://arxiv.org/abs/math/9810059)
- [André Joyal, Joachim Kock, Weak units and homotopy 3-types, in: Categories in Algebra, Geometry and Mathematical Physics, Contemp. Math. 431 (2007) 257–276; arXiv:math/0602084](https://arxiv.org/abs/math/0602084)

### Trimble n-categories build the fundamental n-groupoid into the definition

**Remember:** T says how to glue paths, and the same T defines composition and fundamental n-groupoids.

*True by definition.* MSC 18N65 (\\((\\infty, n)\\)-categories and \\((\\infty,\\infty)\\)-categories), 18M75, 55P15. arXiv math.CT, math.AT. Level 4: research.

**Definition.** An operad is a family of spaces of k-input operations together with a way to compose them. Let T be the operad of ways to cut the unit interval into k pieces: Tₖ is the space of continuous maps \[0,1\] → \[0,k\] that send 0 to 0 and 1 to k. A Trimble 0-category is a set. A Trimble (n+1)-category is a set of objects with an n-category of morphisms between each pair, which together form an algebra over the operad ΠₙT; here Πₙ is the fundamental n-groupoid functor, applied to T.

**Problem.** Every space X has a fundamental n-groupoid ΠₙX that is a Trimble n-category and is functorial in X.

**How the definition helps.** Paths in X glue in the ways that T allows, so the fundamental n-groupoid fits the definition with no extra work. The paths form a T-algebra, and applying Πₙ gives a ΠₙT-algebra, which is Πₙ₊₁X. For n = 0, Π₀T is the associative operad, so this gives the usual fundamental groupoid. The induction needs one real theorem: Πₙ₊₁ preserves finite products and coproducts.

**nLab:** [Trimble n-category](https://ncatlab.org/nlab/show/Trimble+n-category), [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis). It says: “This definition was introduced in order to give an algebraic notion of fundamental n-groupoid”

**Sources:**

- [Tom Leinster, A Survey of Definitions of n-Category, arXiv:math/0107188 (2001)](https://arxiv.org/abs/math/0107188)
