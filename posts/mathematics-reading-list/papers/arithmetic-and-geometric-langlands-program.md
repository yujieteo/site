source: https://arxiv.org/pdf/2504.07502
slogan: Sheaf-level Langlands theorems, pushed back down by a trace of Frobenius, give new statements and proofs about Galois representations and Shimura varieties.
basis: the introduction and the main theorem statements

## Before you start

This survey is only 26 pages, but it moves fast through perfect geometry, shtukas, isocrystals and Shimura varieties. The likely feeling is shame at not knowing half the nouns. That is a normal response to a survey by someone who works in all of these areas, and you can leave it alone. If you want to see why number theorists care about the geometric theory, the road map on page 2 says it. Enjoy the map first.

## The story

The classical Langlands programme relates Galois representations to automorphic representations. The geometric programme replaces functions by sheaves on moduli spaces: numbers become vector spaces, and vector spaces become categories. For a long time ideas flowed one way, from arithmetic to geometry, and the only way back was Grothendieck's dictionary from sheaves to functions. Zhu describes a second way back. In the analogy between number fields and 3-manifolds, Frobenius plays the part of a circle, and "compactifying on a circle" turns a category into a vector space by a categorical trace. Apply this trace to an equivalence of categories from the geometric theory and you get an arithmetic statement. The survey follows this from geometric Satake to the cohomology of shtukas and to cycles on Shimura varieties.

## Main definitions

**Local Hecke stack and Satake category.** Let F be a local field with ring of integers O and perfect residue field k of characteristic p. Hk<sub>G</sub> is the quotient of the loop group LG by the arc group L<sup>+</sup>G on both sides. It classifies two G-torsors on the disc with an isomorphism away from the origin. The Satake category is the category of perverse sheaves on Hk<sub>G</sub>, with convolution.
- Equal characteristic: the disc is Spec k[[ϖ]].
- Mixed characteristic: the disc is built from Witt vectors, and one works with perfect schemes.

**Stack of local Langlands parameters.** For F a finite extension of ℚ<sub>p</sub> or 𝔽<sub>q</sub>((ϖ)), Loc<sub>cG</sub> classifies continuous homomorphisms from the Weil group of F to the C-group of G, up to conjugation by the dual group Ĝ. It is a quotient by Ĝ of a scheme that is flat, of finite type and a local complete intersection over ℤ<sub>ℓ</sub> (Theorem 2.1.1).

**Stack of isocrystals.** 𝔅(G) is the quotient of the loop group LG by Frobenius-twisted conjugation, h·g = h g σ(h)<sup>−1</sup>. Its points are the Kottwitz set B(G). The stratum of a point b carries the representations of a group J<sub>b</sub>(F), and J<sub>1</sub> = G.

## Main results

**Theorem (geometric Satake; Theorem 1.1.4).** For a connected reductive group G that extends over O, and coefficients Λ a field over ℤ<sub>ℓ</sub> with ℓ ≠ p, there is a canonical equivalence of monoidal abelian categories between finite-dimensional algebraic representations of the dual group Ĝ over Λ and perverse sheaves on Hk<sub>G</sub> over the algebraic closure of k.
- Equal characteristic: this grew out of work of Lusztig, Ginzburg, Beilinson–Drinfeld and Mirković–Vilonen.
- Mixed characteristic: proved later, with the equal characteristic case as input.

**Theorem (Bezrukavnikov equivalence; Theorem 1.2.2).** After choosing a topological generator of tame inertia, there is a canonical monoidal equivalence between coherent sheaves on the unipotent Steinberg stack of Ĝ over ℚ<sub>ℓ</sub> and constructible sheaves on the Iwahori Hecke stack. It categorifies the Kazhdan–Lusztig description of the Iwahori Hecke algebra.
- Equal characteristic: due to Bezrukavnikov.
- Mixed characteristic: deduced from the equal characteristic case by Yun and Zhu.

**Theorem (unipotent categorical local Langlands; Theorem 2.1.5).** For a reductive group G over O with a fixed pinning, there is a canonical equivalence between coherent sheaves on the unipotent part of Loc<sub>cG</sub> over ℚ<sub>ℓ</sub> and unipotent constructible sheaves on 𝔅(G). The full statement, Coh(Loc<sub>cG</sub>) ≅ Shv<sub>c</sub>(𝔅(G)) for quasi-split G with a pinning, is Conjecture 2.1.3 and is open.
- Step 1: start from the Bezrukavnikov equivalence.
- Step 2: take the Frobenius-twisted categorical trace of both sides.

**Theorem (shtuka cohomology is spectral; Theorem 2.2.4).** Let X be a smooth projective curve over 𝔽<sub>q</sub> and K a level. For each degree i there is a quasi-coherent sheaf on the classical stack of global parameters over ℚ<sub>ℓ</sub> whose sections, twisted by the bundle of a representation V, give the i-th compactly supported cohomology of the moduli of shtukas with coefficients in the Satake sheaf of V, compatibly with Weil group and Hecke actions. The action of functions on the parameter stack recovers the excursion operators of Vincent Lafforgue. The derived form with integral coefficients is Conjecture 2.2.3.

## Note, then ignore

- C-group versus L-group. The survey uses a slightly larger dual group that absorbs a square root of q and makes Satake canonical over ℤ[q<sup>−1</sup>]. Safe to skip on a first reading.
- Perfect algebraic geometry. All schemes on the automorphic side are perfected so that equal and mixed characteristic can be treated together. Safe to skip.
- Two models for the local category. Fargues–Scholze use sheaves on Bun<sub>G</sub> of the Fargues–Fontaine curve. Zhu uses sheaves on 𝔅(G). The conjectures are parallel. Safe to skip.
- Status of the global geometric conjecture. Section 1.3 calls the de Rham conjecture "widely open". Part II of a five-paper series, also on this reading list, says the series proves it. I did not reconcile the two. Safe to skip.
- Section 3. The applications to Shimura varieties each need their own hypotheses. Safe to skip until you want one of them.

## One next step

Open the PDF at page 2 and look at the road-map diagram, then read the display (1.1) at the top of page 3.
