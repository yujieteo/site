source: https://arxiv.org/pdf/1107.5511
slogan: An étale groupoid can be rebuilt from the algebra of its open bisections, which extends Stone duality from Boolean algebras to inverse semigroups.
basis: the introduction and the main theorem statements

## Before you start

The paper uses inverse semigroups, frames and étale groupoids together, and its vocabulary is unusual: "callitic", "spatial", "sober", several kinds of filter. The likely feeling is irritation at so many small definitions before anything happens. That reaction is understandable. Every one of those words has a familiar cousin in the duality between spaces and frames. If you like the idea that a space is recovered from its open sets, this is the same game with symmetries added. Read for that picture first.

## The story

A frame is a lattice that behaves like the open sets of a space, and a space can often be rebuilt from its frame. Ehresmann cared about more than open sets. He cared about pseudogroups of partial homeomorphisms, the changes of coordinates in an atlas. Their idempotents are the open sets, so frames sit inside them. Lawson and Lenz go back and do frame theory for the whole pseudogroup. From an étale groupoid they take its open bisections, which multiply like partial symmetries. From an abstract pseudogroup they build a groupoid whose points are completely prime filters. The two constructions are adjoint, and on the good objects they are inverse. Restricting to finite-type objects gives a non-commutative Stone duality. It underlies the groupoids used for Cuntz algebras and tilings.

## Main definitions

**Pseudogroup.** An inverse monoid in which every compatible set of elements has a join, and multiplication distributes over these joins. Elements s and t are compatible if s<sup>−1</sup>t and st<sup>−1</sup> are idempotents.
- Model case: the partial homeomorphisms between open subsets of a space.

**Étale groupoid and open bisection.** A topological groupoid whose domain map is a local homeomorphism. A bisection is a subset A with A<sup>−1</sup>A and AA<sup>−1</sup> inside the identities. The open bisections of an étale groupoid G form a pseudogroup B(G) under subset multiplication.

**Completely prime filter; G(S).** A filter F in a pseudogroup S is completely prime if, whenever a join of elements lies in F, one of the elements lies in F. The set G(S) of these filters is an étale groupoid.
- Its basic open sets are X<sub>s</sub>, the filters that contain s.

**Spatial and sober.** S is spatial if X<sub>s</sub> = X<sub>t</sub> forces s = t. G is sober if the map sending g to the filter of open bisections containing g is a homeomorphism G → G(B(G)).

## Main results

**Theorem (adjunction; Theorem 2.22).** Take pseudogroups with callitic morphisms, and étale groupoids with continuous covering functors. Then G, from the opposite of the category of pseudogroups to étale groupoids, is right adjoint to B.
- Step 1: a covering functor α : H → G(S) gives the map s ↦ α<sup>−1</sup>(X<sub>s</sub>) from S to B(H).
- Step 2: a callitic map β : S → B(H) gives the functor sending h to the inverse image under β of the filter of h. The two steps undo each other.

**Theorem (duality; Theorem 2.23).** The opposite of the category of spatial pseudogroups is equivalent to the category of sober étale groupoids. On objects this was first proved by Resende.

**Theorem (distributive inverse semigroups; Theorem 3.17).** Distributive inverse semigroups with callitic morphisms are dually equivalent to coherent étale groupoids with coherent continuous covering functors. Here the semigroup has only finite compatible joins, and the groupoid is sober with a basis of compact-open bisections, plus a closure condition on that basis.

**Theorem (non-commutative Stone duality; Theorem 3.25).** Boolean inverse semigroups with callitic morphisms are dual to Boolean groupoids with proper continuous covering functors. A Boolean groupoid is a Hausdorff étale groupoid with a basis of compact-open bisections, whose space of identities is a Boolean space.
- On the groupoid side, the points can be taken to be ultrafilters.

## Note, then ignore

- Callitic morphisms. A morphism must preserve meets and must meet every completely prime filter of the target. This is what makes inverse images of filters work. Safe to skip on a first reading.
- Non-unital conventions. Here "Boolean algebra" and "distributive lattice" need not have a top element, and Boolean spaces are locally compact, not compact. Safe to skip.
- Proper filters only. Every filter in the paper excludes zero. Safe to skip.
- Topological versus localic. Resende works with localic groupoids and quantales. This paper uses topological groupoids and adds morphisms. Safe to skip.
- Later sections. Coverages, Paterson's universal groupoid and Exel's tight groupoid are applications of the duality. Safe to skip at first.

## One next step

Open the paper at Section 2.1 and read only Proposition 2.1 and the paragraph before it, where the open bisections are shown to form a pseudogroup.
