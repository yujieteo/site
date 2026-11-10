source: https://web.ma.utexas.edu/users/dafr/CBMS133.pdf
slogan: Invertible phases of matter are homotopy classes of maps from a Thom spectrum, so a physics classification becomes a computation in algebraic topology.
basis: the introduction and the main theorem statements

## Before you start

This book runs to about 190 pages and leans on bordism, higher categories and stable homotopy theory all at once. The likely feeling is shame at not having all three ready. That feeling is allowed. Freed wrote an eleven-page introduction that tells the whole plot without the machinery, and it reads well alone. If you want to see how physics hands a question to topology, that introduction is the place. Read it for pleasure. The lectures can wait.

## The story

Condensed matter physicists want to classify invertible gapped phases of matter. Ice and water are two phases because no smooth path joins them without a transition. So the answer is a set of path components of some space of systems. Nobody has a definition of that space for lattice models. Freed and Hopkins move the problem to field theory instead. The long-range behaviour of a gapped system is modelled by a field theory, in Segal's sense: a functor from a bordism category to vector spaces. An invertible theory factors through groupoids, and so becomes a map of spectra. Then unitarity must be added in its Wick-rotated form, reflection positivity. The outcome: adding reflection positivity only replaces a Madsen-Tillmann spectrum by a Thom spectrum. The classifying group is then computable, for example by the Adams spectral sequence.

## Main definitions

**Field theory (Axiom System).** An n-dimensional field theory is a symmetric monoidal functor from a bordism category of manifolds with background fields to a category of complex vector spaces. Closed (n−1)-manifolds go to state spaces and n-dimensional bordisms go to linear maps.
- Topological case: the bordism category uses manifolds with only topological structure, such as an orientation or spin structure.
- Extended case: the domain is a bordism n-category, so the theory is local down to points.

**Symmetry type.** A pair (H<sub>n</sub>, ρ<sub>n</sub>) of a compact Lie group H<sub>n</sub> and a homomorphism ρ<sub>n</sub> : H<sub>n</sub> → O<sub>n</sub> whose image is SO<sub>n</sub> or O<sub>n</sub>. Manifolds in the bordism category carry an H<sub>n</sub>-structure. For n ≥ 3 the groups stabilise to a group H with a map ρ : H → O (Theorem 3.24).

**Invertible theory.** A theory with an inverse under tensor product of theories. Every closed (n−1)-manifold then has a one-dimensional state space. In the homotopy model, an invertible theory is a map of spectra out of a Madsen-Tillmann spectrum. The book takes this model as an ansatz in Lecture 6.

**Reflection positivity.** A reflection structure makes the theory equivariant for two involutions: orientation reversal on bordisms and complex conjugation on vector spaces. It gives each state space a Hermitian form. Positivity asks that these forms are positive definite.
- Non-extended theories: reflection is a structure and positivity is a condition.
- Extended invertible theories: positivity also carries data in lower dimensions, and the book defines it only in the invertible topological case.

## Main results

**Theorem (reflection positive theories are stable; Theorem 8.68 and Corollary 8.69).** Fix a dimension n and a symmetry type (H<sub>n</sub>, ρ<sub>n</sub>) with stabilisation H. The space of continuous invertible n-dimensional reflection positive extended topological field theories is homotopy equivalent to the mapping space Map(MTH, Σ<sup>n+1</sup>Iℤ(1)). Here MTH is the Thom spectrum of the stable group and Iℤ is the Anderson dual of the sphere. On path components this gives the group [MTH, Σ<sup>n+1</sup>Iℤ(1)]. The proof is in the Freed-Hopkins paper, not here.

**Theorem (deformation classes; Theorem 8.75).** Deformation classes of invertible n-dimensional reflection positive extended topological field theories of the given symmetry type correspond one to one with the torsion subgroup of [MTH, Σ<sup>n+1</sup>Iℤ(1)].
- Step 1: discrete theories map onto exactly the torsion of the continuous group (Theorem 8.73).
- Step 2: combine this with Corollary 8.69.

**Conjecture (non-topological theories; Conjecture 9.34).** Drop the word "topological" on the field theory side. Then deformation classes of invertible reflection positive extended field theories correspond to the whole group [MTH, Σ<sup>n+1</sup>Iℤ(1)], torsion or not. This is the statement applied to phases of matter, and it is a conjecture.

**Theorem (two-dimensional theories; Theorem 4.22).** Let F be an oriented 2-dimensional topological field theory with values in vector spaces over a field k. Then F(S<sup>1</sup>) is a commutative Frobenius algebra. Each commutative Frobenius algebra A arises from such a theory, unique up to isomorphism.
- Step 1: the disc, the cap and the pair of pants give the unit, the trace and the product.
- Step 2: Morse and Cerf theory show these pieces and their relations suffice.

## Note, then ignore

- The twist in ℤ(1). The source writes ℤ(1) for 2π√−1·ℤ, the kernel of the exponential map ℂ → ℂ<sup>×</sup>, to avoid choosing a square root of −1. Safe to skip on a first reading.
- Continuous versus discrete theories. "Continuous" theories are a device, special to the invertible case, that makes path components count deformation classes and not isomorphism classes. Safe to skip at first.
- Madsen-Tillmann versus Thom. The unstable Madsen-Tillmann spectra depend on n and limit to the Thom spectrum MTH. You only need to know that positivity forces the stable one. Skip the details.
- Reinhart bordism. Partition functions of invertible theories without positivity are invariants of a finer bordism relation than Thom's (Theorem 6.27). This matters only before unitarity enters. Skip it.
- The ten-fold way. Theorem 10.2 lists ten symmetry types for free fermion systems, built from Spin, Pin<sup>+</sup>, Pin<sup>−</sup> and their versions with internal group the circle or SU<sub>2</sub>. Skip it at first.

## One next step

Open the PDF at the Introduction and read only its first section, down to the heading "Moduli spaces and deformation classes". It states the problem with ice, water and vapour in under two pages.
