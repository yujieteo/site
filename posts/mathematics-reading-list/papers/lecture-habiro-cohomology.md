source: https://archive.mpim-bonn.mpg.de/id/eprint/5155/
slogan: The q-deformation of de Rham cohomology should live over the Habiro ring, where no prime p is singled out.
basis: the page itself

## Before you start

This is a page of eight lecture videos, about 90 minutes each, with a one-page abstract and no notes. The likely feeling is reluctance at the hours, and worry that a missed minute means a lost thread. That reluctance is reasonable. Video is slow. If you like q-series and wonder why they keep turning up in arithmetic geometry, the abstract alone gives you the question in the author's own words. Start with what is fun to watch. You need not watch all eight.

## The story

De Rham cohomology of an algebraic variety seems to have a canonical q-deformation, in which the integer n becomes 1 + q + … + q<sup>n−1</sup>. Prismatic cohomology explains this, but only one prime p at a time and only after completing at q = 1. The formulas then seem to depend on p. The course aims for a cohomology theory that is visibly independent of p. The idea is to complete at every root of unity at once, not only at q = 1. The ring you get is the Habiro ring. The abstract ties this to a classical picture: the Legendre family of elliptic curves gives the Picard–Fuchs equation and hypergeometric functions, and a q-deformed class should satisfy a q-difference equation that deforms it.

## Main definitions

**Habiro ring.** The inverse limit H of the rings ℤ[q, q<sup>−1</sup>]/(1 − q<sup>n</sup>)<sup>m</sup> over all n and m. It is the completion of the Laurent polynomial ring at all roots of unity together.
- Compare: ℤ[[q − 1]] completes at q = 1 only.

**q-de Rham cohomology.** A deformation of de Rham cohomology over ℤ[[q − 1]], in which derivatives become q-differences. After p-completion it comes from prismatic cohomology.
- In families it gives a module with q-connection that deforms the Gauss–Manin connection.

**Habiro cohomology.** The theory the course sets out to build: defined over a version of the Habiro ring, with comparisons to de Rham, crystalline, prismatic and étale cohomology at suitable specialisations.
- Test case: for the 0-dimensional scheme Spec of 𝒪<sub>K</sub>[1/Δ], with K a number field, it should give the Habiro ring of K from the author's previous course.

## Main results

The abstract states aims and announces results. It has no numbered theorems. The items below are its claims, and I have not checked them against the videos.

**Claim (Wagner).** Ferdinand Wagner's Master and PhD theses study whether q-de Rham cohomology can be defined over the Habiro ring, with both positive and negative results. He defines a notion of Habiro cohomology using refined topological cyclic homology over KU.

**Claim (ring stack).** The course constructs, by explicit computations with q-series, a ring stack over an analytic version of the Habiro ring. It gives a realisation of Berkovich motives at the level of (∞, 2)-categories.
- Consequence 1: a notion of Habiro cohomology for varieties over ℤ, and coefficients with six functors, called "variations of Habiro structures".
- Consequence 2: a stacky interpretation of étale cohomology of rigid varieties over non-archimedean fields of equal characteristic 0, which the abstract says was not known before.

**Claim (open puzzle).** Computations of Garoufalidis and Wheeler suggest explicit q-series that give classes in q-de Rham cohomology. They satisfy q-difference equations whose coefficients are rational functions of q. The existing formalism predicts only power series in q − 1, and the abstract calls this the most mysterious point.

## Note, then ignore

- "A version of" the Habiro ring. The abstract hedges twice: the theory lives over a version of H, and the ring stack over an analytic version. The exact ring is a matter for the lectures. Safe to skip on a first reading.
- Refined TC over KU. This is the homotopy-theoretic machine behind Wagner's definition. The course's own construction avoids it. Safe to skip.
- Two categorical levels. The (∞, 2)-categorical statement is the strongest form, and ordinary cohomology groups sit two levels below it. Safe to skip.
- Uneven dates. The eight lectures run from 11 April to 11 July 2025 with gaps. This affects nothing. Safe to skip.

## One next step

On the archive page, open the file ss2025\_habiro.pdf and read its first paragraph. It takes two minutes.
