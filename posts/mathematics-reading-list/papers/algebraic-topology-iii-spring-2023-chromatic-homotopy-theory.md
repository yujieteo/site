source: https://www.uio.no/studier/emner/matnat/math/MAT9580/v23/documents/mat9580v23morava.pdf
slogan: Morava K-theories act like fields for spectra, so they detect nilpotence, and Landweber's criterion builds new homology theories from complex bordism by algebra alone.
basis: the introduction and the main theorem statements

## Before you start

This is chapter 11 of a course, and it leans on ten chapters you may not have read. The likely feeling is shame at the missing background: the Lazard ring L, the classes v<sub>n</sub>, the Hopf algebroid (L, LB). It is fine to feel that. If you want to know why chromatic homotopy theory sorts spectra by height, this chapter holds the statements. Read it for the pleasure of seeing the cast assembled. Finishing can wait.

## The story

Complex bordism MU sees a great deal of stable homotopy, but its coefficient ring L is a polynomial ring on infinitely many generators and is hard to compute with. People wanted smaller theories that isolate one prime p and one height n of formal group law. The first idea is to work with MU-modules. There you can kill a regular sequence of elements of L and invert another, and the homotopy groups do what the algebra says. This gives Morava K-theory K(n), whose coefficients form a graded field, and the E-theories that surround it. The second idea is Landweber's. You do not need a flat L-module to get a homology theory by tensoring. You only need p, v<sub>1</sub>, v<sub>2</sub>, ... to act injectively in turn. The nilpotence theorems then say that these small theories still detect what matters.

## Main definitions

**Quotient and localisation of a module spectrum.** Let R be a commutative ring spectrum, M an R-module and x ∈ π<sub>\*</sub>(R). Then M/x is the homotopy cofibre of multiplication by x on M, and x<sup>−1</sup>M is the homotopy colimit of repeated multiplication by x.
- Regular case: if (x<sub>1</sub>, x<sub>2</sub>, ...) is a regular sequence in π<sub>\*</sub>(R), then π<sub>\*</sub>(R/(x<sub>1</sub>, x<sub>2</sub>, ...)) ≅ π<sub>\*</sub>(R)/(x<sub>1</sub>, x<sub>2</sub>, ...) (Lemma 1.3).

**Morava K-theory K(n).** Fix a prime p and a height 1 ≤ n &lt; ∞. Kill in MU a regular sequence that generates the kernel of the map L → 𝔽<sub>p</sub>[v<sub>n</sub>] classifying the Honda formal group law, then invert v<sub>n</sub>. The result has π<sub>\*</sub>K(n) ≅ 𝔽<sub>p</sub>[v<sub>n</sub><sup>±1</sup>].
- Conventions: K(0) = Hℚ and K(∞) = H𝔽<sub>p</sub>.
- Height 1: K(1) is a direct summand of mod p complex K-theory.

**Johnson-Wilson theory E(n).** The MU-module with π<sub>\*</sub>E(n) ≅ ℤ<sub>(p)</sub>[v<sub>1</sub>, ..., v<sub>n−1</sub>, v<sub>n</sub><sup>±1</sup>]. Its quotient by I<sub>n</sub> = (p, v<sub>1</sub>, ..., v<sub>n−1</sub>) has the coefficients of K(n).

**Landweber exact module.** An MU<sub>\*</sub>-module E<sub>\*</sub> such that, for every prime p and every n ≥ 0, multiplication by v<sub>n</sub> is injective on E<sub>\*</sub>/(p, v<sub>1</sub>, ..., v<sub>n−1</sub>). Here v<sub>0</sub> = p.

## Main results

**Theorem (Künneth for K(n); Theorem 2.3).** For all spectra X and Y, the map K(n)<sub>\*</sub>(X) ⊗ K(n)<sub>\*</sub>(Y) → K(n)<sub>\*</sub>(X ∧ Y), with the tensor product over K(n)<sub>\*</sub>, is an isomorphism. Also K(n)-cohomology of X is the K(n)<sub>\*</sub>-dual of K(n)-homology of X.
- Step 1: K(n)<sub>\*</sub> is a graded field, so every module over it is free.
- Step 2: the Tor and Ext spectral sequences then collapse.

**Theorem (nilpotence, Devinatz-Hopkins-Smith; Theorem 4.3).** If R is a ring spectrum in the homotopy category, the kernel of the Hurewicz map π<sub>\*</sub>(R) → MU<sub>\*</sub>(R) consists of nilpotent elements. If f is a self-map of a finite spectrum, up to suspension, and MU<sub>\*</sub>(f) = 0, then f is nilpotent.
- Step 1: the second statement follows from the first applied to the endomorphism ring spectrum F(X, X).
- Step 2: for the first, climb from the sphere to MU through the Thom spectra X(n) of bundles over ΩSU(n).

**Theorem (nilpotence via K(n), Hopkins-Smith; Theorem 4.4).** Let R be a p-local ring spectrum. An element f ∈ π<sub>\*</sub>(R) is nilpotent if and only if its image in K(n)<sub>\*</sub>(R) is nilpotent for every 0 ≤ n ≤ ∞.

**Theorem (Landweber exact functor theorem; Theorem 7.9).** Let E<sub>\*</sub> be an MU<sub>\*</sub>-module. The functor X ↦ E<sub>\*</sub> ⊗ MU<sub>\*</sub>(X), tensored over MU<sub>\*</sub>, is a homology theory if and only if E<sub>\*</sub> is Landweber exact.
- Step 1: for a finite spectrum X, the comodule MU<sub>\*</sub>(X) has a finite filtration with quotients that are shifts of L/J for invariant prime ideals J (Theorem 7.1).
- Step 2: the invariant prime ideals are only 0 and the I<sub>p,n</sub> (Theorem 7.3), so injectivity of each v<sub>n</sub> kills the Tor terms that could break exactness.

## Note, then ignore

- The prime 2: K(n) and its relatives are homotopy commutative only for odd p, and at p = 2 there are two opposite products. It affects ring structures, not the story, and is safe to skip on a first reading.
- "((ETC: ...))" marks: these are the author's notes to himself about material still to add. Safe to skip.
- Choice of regular sequence: BP⟨n⟩ and E(n) depend on which generators you kill, so they are not well defined as ring spectra. Safe to skip at first.
- E(n) versus E<sub>n</sub>: the Lubin-Tate version E<sub>n</sub> has coefficients built from Witt vectors of 𝔽<sub>p<sup>n</sup></sub> and is fully commutative. The chapter uses it little, so it is safe to skip.
- How commutative: the text records which spectra admit E<sub>1</sub>, E<sub>3</sub>, E<sub>4</sub> or E<sub>∞</sub> structures. These are refinements for later, and safe to skip.

## One next step

Open the PDF at Remark 2.5 on page 4 and read the computation of K(n)<sup>\*</sup>(BC<sub>p</sub>). It shows in one paragraph how the height n enters an answer.
