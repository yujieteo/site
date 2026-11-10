source: https://arxiv.org/pdf/1904.10491
slogan: Add pinnings on boundary intervals, and moduli of G-local systems glue from triangles, carry cluster coordinates, and can be quantised for every G.
basis: the introduction and the main theorem statements

## Before you start

This paper has about 230 pages and a 12-page summary before the introduction even starts. Overwhelm is the natural response. You can let it be there. Nobody reads this front to back. The main construction fits in a few pictures of triangles. If you want to see how quantum groups can come out of plain geometry on a surface, those pictures are the reward. Look at what interests you. Reaching the last page is not the point.

## The story

Fock and Goncharov gave cluster coordinates on moduli spaces of framed local systems on a surface, mainly for PGL<sub>m</sub>. Such coordinates bring a Poisson structure and a recipe for quantisation. People wanted this for every split group G, built by gluing triangles. The block is simple. For PGL<sub>2</sub> the old space for a triangle is one point, and you cannot build a space from points. The fix is extra boundary data. On each chosen boundary interval, add a "pinning", which trivialises the local system there. Now two surfaces glue along pinned intervals, and the moduli spaces glue with them. The authors build cluster coordinates on a triangle from a reduced word for the longest Weyl group element, and show that the result does not depend on the choices. Quantisation, and with it quantum groups, follow.

## Main definitions

**Colored decorated surface S.** An oriented surface with punctures, with special points on the boundary (at least one on each boundary component), and with a chosen subset of the boundary intervals between special points, called colored.

**Pinning.** Let G be a split semi-simple adjoint group over ℚ. Let L be a G-local system on an oriented interval, with flags B<sub>s</sub>, B<sub>t</sub> at the ends in generic position. A pinning is a pair of decorated flags (A<sub>s</sub>, A<sub>t</sub>) over them, with invariant h(A<sub>s</sub>, A<sub>t</sub>) = 1 in the Cartan group. A decorated flag is a point of G/U, with U maximal unipotent.
- Key fact: a pinning trivialises L on the interval and turns the two flags into the standard opposite pair.

**The space P<sub>G,S</sub> (Definition 2.1).** It parametrises triples: a G-local system on S, an invariant flag near each puncture and each special point (generic along colored intervals), and a pinning on each colored interval.
- No colored intervals: this is the Fock–Goncharov space X<sub>G,S</sub>.
- Gluing: identifying two colored intervals, pinning to opposite pinning, gives a map from P<sub>G,S</sub> to the space of the glued surface.

**Cluster Poisson structure.** A collection of birational charts by tori, one for each quiver, with Poisson bracket {X<sub>λ</sub>, X<sub>μ</sub>} = 2⟨λ, μ⟩X<sub>λ</sub>X<sub>μ</sub>, related by mutations. The dual notion on a partner space A is a cluster K<sub>2</sub>-structure. The pair is called a cluster ensemble.

## Main results

**Theorem (cluster Poisson structure; Theorem 2.6).** Let G be split semi-simple adjoint over ℚ, and S a colored decorated surface with at least one marked point, apart from a short list of small cases. Then P<sub>G,S</sub> has a cluster Poisson structure, equivariant under the mapping class group of S and Out(G). Apart from one further small case, the Weyl group at each puncture acts by cluster Poisson transformations. Under a further mild condition, a braid group at each boundary component acts by quasi-cluster transformations.
- Step 1: define coordinates on a triangle from a reduced word for w<sub>0</sub> and a choice of angle. Prove independence of both choices.
- Step 2: glue triangles by amalgamation, and prove that flipping the diagonal of a quadrangle is a cluster transformation.

**Theorem (the dual space; Theorem 2.9).** Under the same assumptions, the space A<sub>G′,S</sub> for the simply connected cover G′ has an equivariant cluster K<sub>2</sub>-structure. The pair (A<sub>G′,S</sub>, P<sub>G,S</sub>) is a cluster ensemble. The cluster structures on A for the Langlands dual group and on P<sub>G,S</sub> are Langlands dual.

**Theorem (DT transformation and canonical basis; Theorems 2.11 and 2.12).** For admissible S, an explicit transformation, built from the longest element w<sub>0</sub> in three guises, is the Donaldson–Thomas transformation of P<sub>G,S</sub> and is a quasi-cluster Poisson transformation. As a result, the algebra of regular functions on P<sub>G,S</sub> has a canonical linear basis, indexed by the integral tropical points of the A-space of the Langlands dual group. Basis elements are Laurent polynomials with positive integer coefficients in every cluster chart.
- Input: the Gross–Hacking–Keel–Kontsevich construction, and a theorem of Shen that regular functions equal universally Laurent polynomials here.

**Claim (quantum groups; from the abstract).** Cluster quantisation gives a \*-algebra and an equivariant principal series representation on a Hilbert space. For a punctured disc with two special points, this constructs principal series representations of the Langlands modular double of U<sub>q</sub>(𝔤). I did not read the precise theorem in the body.

## Note, then ignore

- Excluded cases. Conditions (63) to (65) remove discs with few special points and some surfaces for types A<sub>1</sub>, A<sub>2</sub>. Safe to skip on a first reading.
- Adjoint versus simply connected. By convention G is adjoint in P and simply connected in A. This keeps the two dual. Safe to skip.
- Cluster versus quasi-cluster. Quasi-cluster transformations also allow certain rescalings by frozen variables. The braid group needs them. Safe to skip.
- Punctures versus holes. Section 2.1.5 gives a variant where punctures carry no flag. The authors prefer it but state theorems without it. Safe to skip.
- Conjectures. The modular functor conjecture and the pairing with conformal blocks of Liouville and Toda theory are conjectures, not results of the paper. Safe to skip.

## One next step

Open the paper at Section 2.1.3 and look at Figures 3 and 4: two triangles with pinnings glued into a quadrangle. That picture is the main idea.
