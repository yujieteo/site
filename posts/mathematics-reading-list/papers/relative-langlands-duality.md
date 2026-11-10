source: https://arxiv.org/pdf/2409.04677
slogan: Each good symplectic space with a group action has a dual for the dual group, and the period of one equals the L-function of the other.
basis: the abstract and introduction

## Before you start

The paper is 474 pages, with diagrams the authors themselves call confusing at first. The likely feeling is overwhelm, and a worry that you need automorphic forms, symplectic geometry and field theory all at once. You can let that feeling be. Most of the paper states definitions and conjectures, and the authors say so. If you want one frame that holds Tate's thesis, Rankin–Selberg and Gan–Gross–Prasad together, the first pages give it. Read those for the pleasure of the idea.

## The story

A period is a way to get a number from an automorphic form, usually by integrating it. An L-function gets a number from a Galois representation. Since Hecke in 1937 people have found cases where a period equals an L-value, one integral at a time. The authors index both by one kind of object: a symplectic variety M with a Hamiltonian group action. Placed on the automorphic side, M gives a period. Placed on the Galois side, it gives an L-function. Then the relation is symmetric: M for G has a dual M̌ for Ǧ, and the period of one is the L-function of the other. For G = GL<sub>n</sub> × GL<sub>n</sub> the Godement–Jacquet and Rankin–Selberg integrals are swapped. The model is electric-magnetic duality of boundary conditions in gauge theory.

## Main definitions

**Graded Hamiltonian G-space.** Let G be a split connected reductive group. A graded Hamiltonian G-space is a smooth symplectic variety M with a G-action, a moment map μ : M → 𝔤<sup>∗</sup>, and a commuting action of a "grading group" 𝔾<sub>gr</sub> = 𝔾<sub>m</sub> that scales the symplectic form by the square of the scalar.
- Polarised case: M = T<sup>∗</sup>X for a G-variety X, with 𝔾<sub>gr</sub> scaling the fibres.

**Hyperspherical variety.** An affine graded Hamiltonian G-space whose G-invariant functions Poisson-commute, with mild extra conditions on the moment map and on generic stabilisers, and a normalised grading. Cotangent bundles of affine spherical varieties are examples. The condition abstracts "multiplicity one": each representation of G(F) appears at most once in functions on X(F).

**Whittaker induction.** Given H × SL<sub>2</sub> → G and a symplectic representation S of H, Whittaker induction builds a graded Hamiltonian G-space from S by Hamiltonian induction, twisted by the nilpotent element coming from SL<sub>2</sub>.

**Period sheaf and L-sheaf.** For M = T<sup>∗</sup>X and a curve, the period sheaf is the pushforward to Bun<sub>G</sub> of the constant sheaf on the space of G-bundles with a section of the associated X-bundle. For M̌ = T<sup>∗</sup>X̌, the L-sheaf is the pushforward to the moduli of Ǧ-local systems of the dualising sheaf on the space of local systems with a flat section of the X̌-bundle.

## Main results

**Theorem (structure theorem; Theorem 3.6.1).** Every hyperspherical variety is a Whittaker induction of a symplectic representation of a reductive subgroup H of G. The converse fails: it is not obvious when a Whittaker induction is hyperspherical.

**Claim (construction of the dual; Section 4).** For a polarised hyperspherical M, the paper builds a Hamiltonian Ǧ-space M̌ as a Whittaker induction from three inputs. The exact domain on which M ↦ M̌ is a duality is stated as an expectation (Expectation 5.2.1), not a theorem.
- Input 1: the dual subgroup Ǧ<sub>X</sub> of Ǧ attached to a spherical variety, and a commuting SL<sub>2</sub> → Ǧ, both from earlier work.
- Input 2: a symplectic representation S<sub>X</sub> of Ǧ<sub>X</sub>.

**Conjecture (local duality; Sections 7 and 8).** Over a geometric local field, the category of spherical sheaves on the loop space of X is equivalent to a category of coherent sheaves built from M̌. A weaker form compares one algebra, the Plancherel algebra, with functions on M̌.
- Evidence: Section 9 checks the weaker form at the level of Frobenius traces in many cases, using known Plancherel measures.

**Conjecture (global duality; Sections 12 and 14).** Under the geometric Langlands equivalence, the period sheaf of M matches the L-sheaf of M̌. Over a function field and for everywhere unramified forms, this becomes the statement that the M-period of a form equals an L-value attached to M̌.
- Evidence: for particular pairs, such as Godement–Jacquet and Rankin–Selberg, the numerical statement is a result already in the literature.
- Evidence: Section 13 studies the sheaf statement on the projective line.

## Note, then ignore

- X or M. The tables list a variety X, but the authors warn that only M = T<sup>∗</sup>X is intrinsic. Different X can give the same M. Safe to skip on a first reading.
- Parity and anomaly. M must satisfy extra conditions for the quantisation to exist without a metaplectic cover. They are bookkeeping at this stage. Safe to skip.
- Shearing. The spectral side shifts cohomological degree by the weight of 𝔾<sub>gr</sub>. Section 6 sets this up. Safe to skip.
- States and observables. The introduction pairs each object with its "square", such as the Plancherel algebra or the relative trace formula. The squares need fewer choices. Safe to skip.
- Scope. Number fields, ramification, non-split groups, and singular or non-affine M are left open, though the authors expect the picture to extend. Safe to skip.

## One next step

Open the PDF and read the first two pages of Section 1, from diagram (1.1) to equations (1.2) and (1.3).
