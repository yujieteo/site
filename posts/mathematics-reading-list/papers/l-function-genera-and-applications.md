source: https://arxiv.org/pdf/2311.17747
slogan: An L-function is a genus of a space with Galois action, so cutting the space into pieces replaces long residue computations for Eisenstein series.
basis: the introduction and the main theorem statements

## Before you start

These are 89 pages of notes that move between automorphic forms, equivariant K-theory and stacks, often in one paragraph. The likely feeling is overwhelm, and a worry that you need Langlands's book before you may start. You may feel that and start anyway. The authors call the notes leisurely, and they include an elementary appendix for readers with no automorphic background. If you like seeing a contour integral turn into geometry, Section 2 has a one-page example that carries the whole idea. Enjoy that example. Finishing is optional.

## The story

Eisenstein series are eigenfunctions of Hecke operators, but they are not square-integrable. To find the spectrum inside L<sup>2</sup>, Langlands paired wave packets of Eisenstein series and moved contours of integrals whose integrands are ratios of ζ-functions. Each pole crossed gives a residue. For G<sub>2</sub> this took him 15 pages. For E<sub>8</sub> there are 120 polar hyperplanes and a Weyl group of order 696729600. Yet the answer is indexed by only 70 nilpotent classes in the dual Lie algebra. The idea is to read the integral as a pushforward in equivariant K-theory from a space that is not proper. Then cutting the space into a closed piece and its complement does the same job as crossing poles. Cutting along nilpotent orbits gives the spectral decomposition directly.

## Main definitions

**Euler characteristic as a distribution.** Let a reductive group G act on X, and let F be an equivariant coherent sheaf. If every irreducible representation occurs with finite multiplicity in the cohomology of F, the character of χ(X, F) = Σ (−1)<sup>i</sup> H<sup>i</sup>(X, F) is a linear functional on class functions of G.
- Example: for ℂ<sup>×</sup> scaling ℂ<sup>n</sup>, χ(O) = (1 − z<sup>−1</sup>)<sup>−n</sup>, expanded for |z| &gt; 1. Pairing with φ is a contour integral over a circle of radius above 1.

**Scissor relation.** For a closed invariant Y in X, χ(X, F) = χ(X − Y, F) + χ(Thom(Y → X), F), where the last term is the Euler characteristic of local cohomology along Y.
- Example: ℂ<sup>n</sup> = (ℂ<sup>n</sup> − 0) plus the origin. The first piece gives χ(ℙ<sup>n−1</sup>, φ(O(1))), a distribution supported at z = 1. The second gives the same integral over a circle of radius below 1. So the relation is the residue at z = 1.

**Genus.** For a Laurent polynomial ψ, set ψ(X) = χ(∏ ψ(x<sub>i</sub>)) over the Chern roots x<sub>i</sub> of the tangent bundle. It is multiplicative on products and obeys the scissor relation.

**ζ-genus and L-genus.** For a curve C of genus g over 𝔽<sub>q</sub>, let ξ<sub>C</sub>(t) = (q<sup>1/2</sup>t)<sup>1−g</sup> ζ<sub>C</sub>(t), so ξ<sub>C</sub>(1/(qt)) = ξ<sub>C</sub>(t). There is a ψ whose genus on the cotangent bundle of a line of weight t, with Frobenius scaling the fibres, equals ξ<sub>C</sub>(t). This is the ζ-genus. The L-genus extends it to a variety with an action of a Weil-type group Γ.
- Step 1: pass to the fixed locus Fix of the inertia subgroup Γ<sub>1</sub>.
- Step 2: take the index of the spinor bundle of the bundle H<sup>1</sup>(Γ<sub>1</sub>, TM) on Fix, equivariant for Frobenius.

## Main results

**Theorem (Eisenstein distribution as a ζ-genus; equation (48), proved in the authors' earlier paper).** Let G be split reductive with dual group G<sup>∨</sup>, Borel B<sup>∨</sup> and torus A<sup>∨</sup>. Let Ψ<sub>Eis</sub> be the distribution on two copies of A<sup>∨</sup> given by L<sup>2</sup> inner products of pseudo-Eisenstein series induced from the trivial character of the Borel. Then Ψ<sub>Eis</sub> equals the pushforward of the ζ-genus of the stack T<sup>\*</sup>(B<sup>∨</sup>\G<sup>∨</sup>/B<sup>∨</sup>). The notes state this for function fields and number fields.
- Consequence: the stack maps to nilpotent elements of Lie(G<sup>∨</sup>) modulo conjugation. The scissor relations for the nilpotent orbits give the spectral decomposition.

**Theorem (general case; Theorem 1, proved in a second paper).** Over a function field, take Eisenstein series induced from an unramified cuspidal eigenform on a Levi subgroup, with its Galois parameter. Then Ψ<sub>Eis</sub> equals an L-genus (the version the notes mark with a subscript 1/2) of a cotangent stack of a double quotient of G<sup>∨</sup> by parabolic subgroups, with Γ acting through the parameter. I could not fix the exact double quotient from the text I read, so check the statement in Section 4.2.3.

**Theorem (categorification for PGL(2); Theorem 2, as described in Section 5.1).** Let C be a curve over a finite field and M a line bundle on C. The compactly supported cohomology of a moduli space of quasisections of ℙ<sup>1</sup>-bundles, which computes a constant term of Eisenstein series at M, matches a pushforward of the spinor bundle on T<sup>\*</sup>ℙ<sup>1</sup> twisted by a line bundle from M. The match holds after shifts and twists, respects Frobenius, and has an exceptional case in genus 2. I read only this summary, not the full statement.

## Note, then ignore

- "Distribution". Here it means a linear functional on functions analytic near the compact torus, not a Schwartz distribution. Safe to skip.
- Cohomologically proper. This is the finiteness condition that makes a pushforward from a non-compact space defined. Safe to skip.
- K-theory or cohomology. Function fields use equivariant K-theory. Number fields use equivariant cohomology, seen as the limit q → 1. Safe to skip.
- Square roots. The polynomial ψ involves square roots of q and a splitting of Frobenius eigenvalues. The ambiguities cancel in the genus. Safe to skip.
- The odd typeface. Some bundle names in the PDF are set in a decorative font and may not copy as text. They are the Clifford and spinor bundles. Safe to skip.

## One next step

Open the notes at Section 2.3.3 on page 11 and read the four linked examples up to equation (23).
