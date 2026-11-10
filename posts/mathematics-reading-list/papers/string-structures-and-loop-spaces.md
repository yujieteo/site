source: https://arxiv.org/pdf/2312.12998
slogan: A string structure on a manifold shows up as a spin structure on its loop space, and bundle gerbes let you write both down.
basis: the introduction and the main theorem statements

## Before you start

This is a 20-page encyclopedia article, and it names a new object on almost every page: gerbes, 2-gerbes, 2-groups, fusion products, von Neumann algebras. The likely feeling is overwhelm at the vocabulary. That is a fair response to a dense survey, and you do not need to fight it. If you want one clear picture of why p<sub>1</sub>/2 matters in string theory, sections 1 to 3 give it. Read those for pleasure. The other sections are optional rooms in the same house.

## The story

Orientation, then spin structure: each step kills the lowest homotopy group of the structure group. The next step kills π<sub>3</sub>(Spin(d)) = ℤ and gives the string group. Physics wants it. A fermionic particle needs a spin structure to make its path integral well defined, and a fermionic string needs a string structure for the same reason. The trouble is that String(d) is not a finite-dimensional Lie group, so principal String(d)-bundles are awkward. The article gives three workable substitutes. One: trivialise a 2-gerbe that represents the obstruction class p<sub>1</sub>/2. Two: move to the loop space LM, where a string structure becomes a lift of the loop group bundle to its central extension. Three: treat String(d) as a 2-group. The link between one and two is transgression: a gerbe on M becomes a line bundle on LM.

## Main definitions

**Bundle gerbe.** A surjective submersion Y → M, a line bundle L over Y ×<sub>M</sub> Y, and an associative product L<sub>y2,y3</sub> ⊗ L<sub>y1,y2</sub> → L<sub>y1,y3</sub>. Bundle gerbes over M are classified by H<sup>3</sup>(M, ℤ), as line bundles are by H<sup>2</sup>.
- Example: the basic gerbe on Spin(d), which generates H<sup>3</sup>(Spin(d), ℤ) = ℤ for d = 3 or d > 4.

**String structure (Definition 3.4).** For a spin manifold M, a trivialisation of the Chern-Simons 2-gerbe CS(M). This 2-gerbe is built from the spin frame bundle and the basic gerbe, and its class in H<sup>4</sup>(M, ℤ) is p<sub>1</sub>(M)/2.
- Homotopy version: a lift of the classifying map of the frame bundle from BSpin(d) to BString(d).

**Fusion product.** For a line bundle L over the loop space LM: maps L<sub>γ2∪γ3</sub> ⊗ L<sub>γ1∪γ2</sub> → L<sub>γ1∪γ3</sub> for triples of paths with common end points, associative over four paths. It records how two loops that share a half merge into one.

**Loop-spin structure (Definition 5.1).** A lift of the structure group of the bundle LSpin(M) → LM from the loop group LSpin(d) to its basic central extension by U(1). It is called fusive if the associated line bundle carries a compatible fusion product.

## Main results

**Theorem (existence and classification; Lemma 3.5, Theorem 3.7).** A spin manifold M has a string structure if and only if p<sub>1</sub>(M)/2 = 0. Equivalence classes form a torsor over H<sup>3</sup>(M, ℤ). They correspond to classes in H<sup>3</sup>(Spin(M), ℤ) that restrict to a generator on each fibre, and to tangential String(d)-structures.

**Theorem (loop space; Theorems 5.2 and 5.4).** Transgression H<sup>4</sup>(M, ℤ) → H<sup>3</sup>(LM, ℤ) sends p<sub>1</sub>(M)/2 to the obstruction class for loop-spin structures (McLaughlin). So string manifolds are loop-spin. The converse holds if M is 2-connected and d > 5. With fusion it holds more widely: a spin manifold of dimension d = 3 or d > 5 is string if and only if it is fusive loop-spin.
- Step 1: transgress a string structure, with chosen connections, to a fusive loop-spin structure.
- Step 2: go back by regression, which turns a fusion line bundle on LM into a gerbe on M.

**Theorem (string connections; Theorem 8.3).** Every string structure admits a string connection, and the string connections on it form an affine space. A geometric string structure T has a 3-form D<sub>T</sub> on M with dD<sub>T</sub> = ½ R<sub>A</sub> ∧ R<sub>A</sub>, where R<sub>A</sub> is the curvature of the connection A on the spin frame bundle.

**Theorem (anomaly cancellation; Theorem 9.2, Bunke).** The line bundle over the mapping space C<sup>∞</sup>(Σ, M) obtained by transgressing CS(M) is canonically isomorphic to the Pfaffian line bundle of the worldsheet Dirac operators. So a geometric string structure trivialises the Pfaffian bundle and cancels the global anomaly.

## Note, then ignore

- p<sub>1</sub>/2 is not p<sub>1</sub>. The class p<sub>1</sub>/2 lives on BSpin(d) only, and p<sub>1</sub>(M) = 0 does not force p<sub>1</sub>(M)/2 = 0. Safe to skip once noted.
- Bicategories. String structures form a bicategory, and the text sometimes treats a structure as a property. For counting, the set of equivalence classes is enough. Safe to skip.
- Flat paths and sitting instants. These are conditions on paths that keep concatenation smooth. Safe to skip.
- Thin homotopy. Fusion alone does not give a bijection between string structures and fusive loop-spin structures. An extra equivariance is needed. Safe to skip.
- Fake-flatness. A standard condition on 2-bundle connections is too strong here, and "adjusted" connections replace it. Safe to skip.

## One next step

Open the article at section 3 and read Definition 3.4 with the three facts (a), (b), (c) that follow it.
