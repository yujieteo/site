source: https://virtualmath1.stanford.edu/~rltaylor/kott5.pdf
slogan: Fixing one diagram of Weil-type group extensions makes Kottwitz's cocycles canonical, so you can use cocycles and not only their cohomology classes.
basis: the abstract and introduction

## Before you start

This paper has 110 pages, and its authors say it contains no main theorem, only a framework. The likely feeling is boredom mixed with unease: page after page of extensions and subscripts, and no summit to reach. You may feel that. It is an accurate reading of the text. The paper does answer one honest question: what must you choose so that a cocycle, and not just a class, makes sense? The six-page introduction answers it. Read that with curiosity, and stop when it stops being interesting.

## The story

Kottwitz attached to a Galois extension E/F of local or global fields certain extensions of Gal(E/F) by abelian groups. The Weil group is the best known. He studied their "algebraic" cohomology with values in an algebraic group G, which classifies inner forms and feeds the theory of Shimura varieties. Each extension comes from a canonical class in H<sup>2</sup>, not from a canonical 2-cocycle. So it is defined only up to conjugation. Cohomology sets do not notice this. Sets of cocycles do. Sempliner and Taylor need actual cocycles for their work on Shimura varieties. Their observation is that single extensions have automorphisms, but a whole diagram of them, linked by localisation maps, has none. Fix the diagram, and cocycles make sense.

## Main definitions

**Algebraic cocycles.** Let E(E/F) be an extension of Gal(E/F) by an abelian group E(E/F)<sup>0</sup>, and let G be a group with Gal(E/F)-action. Z<sup>1</sup><sub>alg</sub>(E(E/F), G) is the set of 1-cocycles whose restriction to E(E/F)<sup>0</sup> lies in a chosen class of homomorphisms. H<sup>1</sup><sub>alg</sub> is its quotient by the usual equivalence.
- Local case: E(E/F) is the Weil group W<sub>E/F</sub>, and the restriction to E<sup>×</sup> must be an algebraic character ν: 𝔾<sub>m</sub> → G.
- Basic: ν takes values in the centre Z(G).

**The global extensions.** For number fields, V<sub>E</sub> is the set of places of E. T<sub>2,E</sub> is the protorus over F attached to the free abelian group ℤ[V<sub>E</sub>], and T<sub>3,E</sub> the one attached to the elements of ℤ[V<sub>E</sub>] with coefficient sum 0. The paper uses E<sup>loc</sup>(E/F), an extension by the product of all E<sub>w</sub><sup>×</sup>, then E<sub>2</sub>(E/F) by T<sub>2,E</sub>(𝔸<sub>E</sub>), E<sup>glob</sup>(E/F) by a subgroup of T<sub>2,E</sub>(𝔸<sub>E</sub>), E<sub>3</sub>(E/F) by T<sub>3,E</sub>(E), and the global Weil group W<sub>E/F</sub>.

**The set H(E/F).** The set of choices of the localisation map loc<sub>a</sub>: E<sup>glob</sup>(E/F) → E<sub>2</sub>(E/F), and so of the whole diagram. T<sub>2,E</sub>(𝔸<sub>E</sub>) acts transitively on it. H(E/F)<sup>+</sup> adds "complete rigidification data", which relate W<sub>E/F</sub> to a quotient of the absolute Weil group.

## Main results

The authors state that the paper has no main theorem. These are the main claims of the introduction.

**Claim (extensions are unique up to conjugation; Section 1).** Since H<sup>1</sup>(Gal(E/F), E(E/F)<sup>0</sup>) = 0, each extension E(E/F) is unique up to isomorphism, and that isomorphism is unique up to conjugation by an element of E(E/F)<sup>0</sup>. So H<sup>1</sup><sub>alg</sub>(E(E/F), G) is defined up to unique isomorphism, and Z<sup>1</sup><sub>alg</sub> is not.

**Claim (the diagram is rigid; Section 1).** The diagram that joins E<sub>3</sub>(E/F), E<sup>glob</sup>(E/F), W<sub>E/F</sub>, E<sup>loc</sup>(E/F), E<sub>2</sub>(E/F) and the local Weil groups has no automorphisms. After a choice of a ∈ H(E/F), algebraic cocycles are well defined.
- Change of choice: if a′ = ta with t ∈ T<sub>2,E</sub>(𝔸<sub>E</sub>), there is a bijection z<sub>t</sub> between the cocycle sets. It may depend on t.
- On cohomology: the induced map does not depend on t, and the localisation and restriction maps are independent of a.

**Claim (inner forms; Section 1, credited to Kottwitz).** A basic algebraic cocycle φ gives a 1-cocycle ad φ with values in (G/Z(G))(E), and so an inner form of G over F, called an extended pure inner form. If Z(G) is a torus, the maps from H<sup>1</sup><sub>alg</sub>(W<sub>E/F</sub>, G(E))<sub>basic</sub> (F local) and from H<sup>1</sup><sub>alg</sub>(E<sub>3</sub>(E/F), G(E))<sub>basic</sub> (F global) to H<sup>1</sup>(Gal(E/F), (G/Z(G))(E)) are surjective.

**Claim (special elements; Sections 1, 8 and 9).** A choice a<sup>+</sup> ∈ H(E/F)<sup>+</sup>, a torus T over F split by E, a cocharacter μ of T and an automorphism τ determine an element b<sub>a<sup>+</sup>,v,μ,τ</sub> in a quotient of T(𝔸<sub>E</sub>). For the Serre torus these elements are closely related to the Taniyama group. They enter the description of the Galois action on Shimura varieties of tori.
- Change of choice: replacing a<sup>+</sup> by ta<sup>+</sup> multiplies the element by an explicit product over embeddings ρ of E.

## Note, then ignore

- Like choosing a place. The authors compare choosing a ∈ H(E/F) to choosing one place of E above a place of F: many choices, and for most purposes any will do. Safe to skip on a first reading.
- Why not the absolute Weil group. Comparing cocycles for D ⊃ E ⊃ F is not compatible with the natural map between quotients of the absolute Weil group. That is why W<sub>E/F</sub> stays. Safe to skip.
- Changing the field E. Inflation maps from E to a larger field D depend on an auxiliary element t. Safe to skip.
- The maps κ. Kottwitz's maps send basic classes to coinvariants built from the algebraic fundamental group of G. The introduction only recalls them. Safe to skip.
- Protorus. T<sub>2,E</sub> is an inverse limit of tori because E has infinitely many places. Safe to skip.

## One next step

Open the paper at page 3 and read the diagram of extensions and the paragraph after it that begins "A key observation".
