source: https://math.berkeley.edu/~teichner/Papers/Oxford.pdf
slogan: A vector bundle with connection is a one-dimensional field theory, so two-dimensional conformal theories with data on points and arcs may be cocycles for tmf.
basis: the introduction and the main theorem statements

## Before you start

This survey runs to 88 pages and leans on conformal field theory, von Neumann algebras and homotopy theory at once. That can raise shame at not knowing three fields. It is fine to feel that. The authors call it work in progress and give only ideas of proofs. If you want to know why field theories that extend down to points matter, the introduction answers in seven pages. Read those for pleasure. The rest is there when you want it.

## The story

K-theory has geometric cocycles, namely vector bundles. The theory tmf is the home of a family version of the Witten genus, but its construction is pure homotopy theory. People wanted geometric cocycles. A vector bundle with connection gives a vector space at each point and a linear map along each path. That is a one-dimensional field theory over X. So try two-dimensional conformal field theories over X: Hilbert spaces for loops, operators for surfaces. The block is excision. Cut a loop into an arc in U and an arc in V. The restrictions to U and V do not determine the Hilbert space of the loop. The fix: points get von Neumann algebras, arcs get bimodules, and the Hilbert space of a loop is a Connes fusion of bimodules.

## Main definitions

**Segal elliptic object.** Over a manifold X, it assigns a topological vector space H(γ) to each map γ of a closed rigged 1-manifold into X, and a vector Ψ(Γ) in H of the boundary to each map Γ of a rigged conformal surface into X.
- Disjoint unions go to tensor products.
- Gluing surfaces goes to composing operators.

**Clifford elliptic object of degree n (Definition 4.1.3).** A Clifford linear two-dimensional conformal field theory over X, with a supersymmetric refinement. Fermions on the surfaces replace Segal's riggings and define the degree n.

**Enriched elliptic object (Definition 1.2.1, marked preliminary).** A degree n Clifford elliptic object (H, Ψ) with a bundle A of von Neumann algebras over X and a bundle B of bimodules over the path space of X. Gluing of paths corresponds to Connes fusion over the algebra at the common point.
- Loops: for two paths γ<sub>1</sub>, γ<sub>2</sub> with the same ends, the Hilbert space of the loop they form is the fusion of B(γ<sub>1</sub>) with B of the reversed γ<sub>2</sub>.
- Final form (Section 4): a functor from a bicategory of 0-, 1- and 2-manifolds over X to the bicategory of von Neumann algebras, bimodules and intertwiners.

**String structure.** On an n-dimensional spin bundle, a lift of the structure group along 1 → PU(A) → String(n) → Spin(n) → 1. Here A is an explicit hyperfinite type III<sub>1</sub> factor, the local fermions on the circle.
- Existence: a vector bundle has a string structure if and only if w<sub>1</sub>, w<sub>2</sub> and p<sub>1</sub>/2 vanish.

## Main results

The paper is a survey. It gives ideas of proofs only.

**Theorem (K-theory from field theories; Theorem 1.0.1).** For each integer n, the space of supersymmetric one-dimensional Euclidean field theories of degree n has the homotopy type of K<sub>−n</sub>, the (−n)-th space of the Ω-spectrum of periodic K-theory. Real field theories give periodic KO-theory in the same way.

**Theorem (modular forms; Theorem 1.0.2).** A degree n Clifford elliptic object E over X gives a canonical Laurent series MF(E) in K<sup>−n</sup>(X)[[q]][q<sup>−1</sup>]. If n is even and X is a point, MF(E) lies in ℤ[[q]][q<sup>−1</sup>] and is the q-expansion of a weak modular form of weight n/2. "Weak" means that its product with a high enough power of the discriminant Δ is a modular form.
- Step 1: cross with the standard circle. The length of an interval becomes the conformal modulus of an annulus.
- Step 2: the proof uses Hypothesis 3.3.13 on supersymmetry, which the authors say is not yet precise.

**Theorem (string bundles give elliptic objects; Theorem 1.0.3).** Let E be an n-dimensional vector bundle over a manifold X with a string structure and a string connection. Then there is a canonical degree n enriched elliptic object over X whose algebras A(x) are hyperfinite type III<sub>1</sub> factors. A different string connection gives an isomorphic object.

**Conjecture (hope stated in the introduction).** Enriched elliptic objects over X, once made precise, are cocycles for tmf<sup>\*</sup>(X), as vector bundles are for K-theory. The authors do not claim this.

## Note, then ignore

- Riggings. Segal needed extra structure on 1- and 2-manifolds, such as parametrised boundary circles. The fermions remove the need. Safe to skip on a first reading.
- Preliminary definitions. Definition 1.2.1 leaves out several axioms, the supersymmetry and the fermions, and the authors give no final definition of an elliptic cocycle. Safe to accept for the story.
- Length matters. In the K-theory picture parallel transport must depend on the length of the interval. This is why "Euclidean" appears in Theorem 1.0.1. Safe to skip.
- Pfaffian lines. For a closed surface a fermion is a point in the n-th power of the Pfaffian line, a square root of the determinant line. This explains the weight n/2. Safe to skip.
- Status of tmf. The authors note that no complete written account of its construction was available at the time. Safe to ignore here.

## One next step

Open the PDF and read Section 1.1, "Segal elliptic objects and Excision" (pages 5 to 6), for the two-path argument against excision.
