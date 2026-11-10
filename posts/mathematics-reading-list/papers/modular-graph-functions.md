source: https://arxiv.org/pdf/1512.06779
slogan: Each Feynman graph on a torus gives a modular function, and cutting one vertex open turns it into a single-valued elliptic polylogarithm.
basis: the introduction and the main theorem statements

## Before you start

This paper comes from string theory, and its first page talks about four-graviton amplitudes. That can bring a quiet sense of being an outsider who lacks the physics. You may feel that for as long as it lasts. The mathematics needs only lattice sums and the logarithm. If you like the non-holomorphic Eisenstein series, here it is the simplest member of a large family drawn as graphs. Look at the pictures in Sections 3 and 4 for fun. Reading to the end is optional.

## The story

Closed string amplitudes at genus one expand at low energy into integrals over a torus. Each term is a Feynman graph: vertices are points on the torus, edges are copies of the scalar Green function, and every vertex is integrated. The result depends only on the shape τ of the torus and is invariant under the modular group. The authors call it a modular graph function. Earlier work found many unexplained relations between these functions, and odd zeta values in their expansions at the cusp. The idea here is to leave one vertex unintegrated and split it into two points. The graph then gives a function of a point ζ on the elliptic curve with no monodromy. At ζ = 1 the original function comes back. So modular graph functions are special values, just as zeta values are special values of polylogarithms.

## Main definitions

**Green function on the torus.** Write Σ = ℂ/(ℤτ + ℤ), τ = τ<sub>1</sub> + iτ<sub>2</sub>, z = uτ + v, q = e<sup>2πiτ</sup> and ζ = e<sup>2πiz</sup>. The Green function G(z|τ) inverts the Laplacian on Σ and has integral zero. As a lattice sum, G = Σ τ<sub>2</sub> e<sup>2πi(mv − nu)</sup> / (π|mτ + n|<sup>2</sup>) over (m, n) ≠ (0, 0).
- It equals Zagier's single-valued elliptic polylogarithm D<sub>1,1</sub>(q; ζ), a sum of terms 2 Re Li<sub>1</sub> over the images q<sup>n</sup>ζ and q<sup>n</sup>/ζ, plus πτ<sub>2</sub>B<sub>2</sub>(u) with B<sub>2</sub> the second Bernoulli polynomial.

**Modular graph function I<sub>Γ</sub>(q).** Let Γ be a graph with N vertices and n<sub>ij</sub> edges between vertices i and j. Then I<sub>Γ</sub>(q) is the integral over Σ<sup>N</sup> of the product of D<sub>1,1</sub>(q; ζ<sub>i</sub>/ζ<sub>j</sub>)<sup>n<sub>ij</sub></sup>, each vertex with measure d<sup>2</sup>log ζ / (4π<sup>2</sup>τ<sub>2</sub>). The weight w is the number of edges. The number of loops is L.
- One loop with a edges gives the non-holomorphic Eisenstein series E<sub>a</sub> = Σ τ<sub>2</sub><sup>a</sup> / (π<sup>a</sup>|mτ + n|<sup>2a</sup>).

**Single-valued elliptic multiple polylogarithm I<sub>Γ</sub>(q; ζ).** Choose one vertex of Γ. Do not integrate it, and let the edges at it end at two separate points ζ and 1. Integrate the other vertices. The result is a function of ζ on the elliptic curve with no monodromy.

**Single-valued multiple zeta value.** The value at argument 1 of a single-valued multiple polylogarithm on ℂ minus {0, 1}. In Brown's convention ζ<sub>sv</sub>(2n) = 0 and ζ<sub>sv</sub>(2n + 1) = 2ζ(2n + 1).

## Main results

**Proposition (special values; Proposition 3.4).** Every modular graph function I<sub>Γ</sub>(q) is the value at ζ = 1 of a single-valued elliptic multiple polylogarithm I<sub>Γ</sub>(q; ζ).
- Step 1: single-valuedness in ζ holds because the Green function is single-valued and the other vertices are integrated over the whole torus.
- Step 2: translation invariance lets you glue the two points back together by setting ζ = 1.

**Conjecture (polylogarithm structure; Section 5).** Let Γ be a single-component graph with w Green functions, N + 1 vertices and L = w − N loops. Then I<sub>Γ</sub>(q; ζ) is a linear combination of multiple polylogarithms of depth at most L and weight at most w + N − 1. The abstract adds that the coefficients are rational.
- Proved case: star graphs, with one integrated vertex of valence above 2 and any number of integrated bivalent vertices, and graphs derived from them.
- General graphs: the paper gives an outline of evidence only.

**Proposition (cusp expansion, conditional on the Conjecture; Section 6.1).** The constant Fourier mode of I<sub>Γ</sub>(q) in τ<sub>1</sub> is, for large τ<sub>2</sub>, a Laurent polynomial in πτ<sub>2</sub> with top degree w and bottom degree 1 − w, plus corrections of order e<sup>−2πτ<sub>2</sub></sup>. The coefficient of (πτ<sub>2</sub>)<sup>k</sup> is a single-valued multiple zeta value of weight w − k.
- The shape of the Laurent polynomial follows directly from the definition. Only the statement about coefficients needs the Conjecture.

## Note, then ignore

- Two kinds of elliptic polylogarithm. An earlier kind, cited in Section 2.8, is holomorphic in q and suits open strings. The ones here are not holomorphic. The relation between the two is left open. Safe to skip.
- Non-uniqueness. One modular graph function can come from several inequivalent I<sub>Γ</sub>(q; ζ), depending on which vertex you open. The authors leave the meaning of this unexplored. Safe to skip.
- Vanishing graphs. A graph that falls apart on removing one edge, or has a vertex with a single edge, gives zero. Safe to skip.
- Only N = 4 is physics. For N above 4 the string amplitude contains further graphs with derivatives, treated briefly in Section 7. Safe to skip.
- Normalisations. Factors such as (−4πτ<sub>2</sub>)<sup>1−a</sup> relate chains of Green functions to Zagier's D<sub>a,a</sub>. They are bookkeeping. Safe to skip.

## One next step

Open the paper at Section 4.1 and read only equations (4.1) and (4.2), where a chain of Green functions closes up into an Eisenstein series.
