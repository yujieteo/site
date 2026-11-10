source: https://arxiv.org/pdf/2510.15196
slogan: Define the de Rham stack as the right adjoint of perfectoidisation, and the p-adic monodromy theorem follows from geometry without differential equations.
basis: the abstract and introduction

## Before you start

This is 129 pages by five authors, stacked on perfectoid spaces, analytic stacks and six functors. The likely feeling is shame at not holding all that background. You are allowed to feel it. Very few readers hold all of it. If you would like to see why de Rham cohomology of a p-adic space depends on so little of the space, the introduction tells that story on its own. Enjoy those ten pages first. The rest is optional.

## The story

Over a field of characteristic p, the algebraic de Rham stack of a scheme X has a neat description: maps from Spec R into it are maps from the perfection of R into X. So "de Rham stack" is right adjoint to "perfection". The authors copy this in p-adic analytic geometry, with perfectoidisation in place of perfection. A naive attempt fails, because it cannot tell the algebraic affine line from the analytic one. The repair is to restrict the test rings to Gelfand rings, which always map to perfectoid algebras, and to add a finiteness condition called qfd. The resulting functor commutes with limits and colimits. Applied to Fargues–Fontaine curves it gives Hyodo–Kato stacks, and a new proof of the p-adic monodromy theorem.

## Main definitions

**Gelfand ring.** A bounded ℚ<sub>p</sub>-algebra A (roughly, a Banach algebra that need not be complete) whose uniform completion A<sup>u</sup> is a Banach ℚ<sub>p</sub>-algebra (Definition 1.1.2). Its Berkovich spectrum M(A) is that of A<sup>u</sup>.
- Example that fails: ℤ<sub>p</sub>[[T]][1/p] is bounded but not Gelfand.
- Gelfand stacks are analytic stacks on separable Gelfand rings.

**†-reduction.** Each bounded algebra A has a †-nilradical, thought of as the elements of spectral norm 0. The †-reduction is the quotient of A by it. It plays the part that the reduced ring plays for the algebraic de Rham stack.

**Analytic de Rham stack.** Perfectoidisation sends a Gelfand stack to the arc-stack of its maps from separable perfectoid ℚ<sub>p</sub>-algebras. On the qfd versions of both categories it has a right adjoint X ↦ X<sup>dR</sup>, and this is the analytic de Rham stack (Definition 1.2.4).
- qfd: the uniform completion is quasi-pro-étale over a finite-dimensional affine space.

**Hyodo–Kato stack.** For a qfd arc-stack X over 𝔽<sub>p</sub>, the Fargues–Fontaine curve FF<sub>X</sub> is the quotient of X × M<sub>arc</sub>(ℚ<sub>p</sub>) by Frobenius. The Hyodo–Kato stack X<sup>HK</sup> is the de Rham stack of FF<sub>X</sub> (Definition 1.4.1).

## Main results

**Theorem (properties of the de Rham stack; Theorem 1.2.5).** The functor X ↦ X<sup>dR</sup> commutes with limits and colimits, so it takes epimorphisms to epimorphisms. For a qfd derived Berkovich space X, the stack X<sup>dR</sup> is the sheafification, for the !-topology, of A ↦ X(A<sup>†-red</sup>). The de Rham stack of the analytic affine line over ℚ<sub>p</sub> is the line modulo the overconvergent neighbourhood of the origin, acting by translation.
- Case 1: on derived Berkovich spaces this agrees with the earlier definition of Rodríguez Camargo.
- Case 2: for an immersion X → Y, the relative de Rham stack is the overconvergent neighbourhood of X in Y, an analytic form of Kashiwara's lemma.

**Theorem (six functors; Theorem 1.3.2).** Let f : Y → X be a map of qfd arc-stacks over ℚ<sub>p</sub>. If f is smooth of pure dimension d, then f<sup>dR</sup> is cohomologically smooth with dualising sheaf the unit shifted by 2d. If f is proper (and locally of quasi-finite dimension), then f<sup>dR</sup> is cohomologically proper.
- Consequence: finiteness and Poincaré duality for de Rham cohomology of smooth proper rigid varieties over ℚ<sub>p</sub>, with coefficients.
- Surprise: the de Rham stack of the perfectoid punctured open unit disc is also cohomologically smooth, with dualising sheaf the unit shifted by 2.

**Theorem (p-adic monodromy; Theorem 1.4.5).** There is a Galois-equivariant map Ψ from the Hyodo–Kato stack of ℂ<sub>p</sub> to a classifying stack built from the isocrystal of slope −1, and pullback along Ψ is a t-exact equivalence on perfect complexes. In particular, for a field L between ℚ<sub>p</sub> and its algebraic closure, vector bundles on L<sup>HK</sup> are equivalent to (φ, N, Gal<sub>L</sub>)-modules over the maximal unramified extension of ℚ<sub>p</sub>.
- Step 1: build Ψ from a non-split extension of O(−1) by O, which comes from the Tate elliptic curve.
- Step 2: prove full faithfulness and essential surjectivity with descent, six functors and Banach–Colmez spaces.

## Note, then ignore

- Two de Rham stacks. The paper has a "big" version DR without the qfd condition and the working version dR. They share most properties, but only dR commutes with colimits. Safe to skip on a first reading.
- Induced analytic structures. All ℚ<sub>p,□</sub>-algebras carry the induced analytic ring structure. This identifies the closed disc with its Huber compactification, so adic spaces must be partially proper. Safe to skip.
- Separability and lightness. Countability conditions appear throughout because some faithfully flat maps are not descendable. They do not affect the story. Safe to skip.
- "Analytic D-module" in quotation marks. The paper uses it to mean a quasi-coherent sheaf on the de Rham stack. The link to D-modules in the usual sense is left to later work. Safe to skip.
- The dualising sheaf on Hyodo–Kato stacks. It is a power of a Tate twist, and computing it needs Chern classes. The smoothness statement does not need this. Safe to skip.

## One next step

Open the PDF at Section 1.1 and read only the paragraph that begins "We now provide a motivation for our construction", up to the adjunction formula with R<sub>perf</sub>.
