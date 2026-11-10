source: https://arxiv.org/pdf/2603.21471
slogan: A logarithm on syntomic cohomology inverts the Bloch-Kato exponential with integral control, so lattice volumes for Tate twists can be computed over every local field.
basis: the introduction and the main theorem statements

## Before you start

This is 86 pages of filtered prismatic cohomology, determinants of perfect complexes and special value conjectures. The likely feeling is being out of your depth, and with it the thought that you have no business reading it. You can have that thought and read on anyway. The introduction contains a two-page account of the ordinary p-adic logarithm, rebuilt from filtrations, and that part asks for very little. If you want to see what prisms are used for in number theory, it is here. Read that part for enjoyment. The rest can wait.

## The story

Bloch and Kato defined an exponential map for a p-adic Galois representation V of a local field K. Their conjecture on special values of L-functions needs to know what this map does to integral lattices, not only to ℚ<sub>p</sub>-vector spaces. For the Tate twists ℚ<sub>p</sub>(n) with n ≥ 2, that was known when K is unramified, and in a few other cases. The block is ramification. The authors build the inverse map directly, as a "de Rham logarithm" from syntomic cohomology to truncated de Rham cohomology. To control it they copy the classical picture: the units 1 + 𝔪<sup>i</sup> and the ideals 𝔪<sup>i</sup> have matching graded pieces, and multiplication by p shifts both filtrations by e. A new filtration G does the same job on prismatic cohomology. The result is a lattice formula for all K.

## Main definitions

**Syntomic cohomology.** For a derived p-adic formal scheme X, RΓ<sub>syn</sub>(X, ℤ<sub>p</sub>(n)) is the fibre of φ{n} − can, a map from the n-th Nygaard filtration step of twisted prismatic cohomology to twisted prismatic cohomology. Here φ{n} is the Frobenius and can is the inclusion.
- Additive version: RΓ<sub>add</sub>(X, ℤ<sub>p</sub>(n)) is the fibre of can alone. The Frobenius is dropped.

**Relative part.** For a functor F on such X, F(X)<sup>rel</sup> is the fibre of F(X) → F(X/p). It records what is lost on reduction mod p.

**De Rham logarithm.** A map log<sub>X</sub> from RΓ<sub>syn</sub>(X, ℤ<sub>p</sub>(n))<sup>rel</sup> to the Hodge-truncated p-complete derived de Rham cohomology of X, shifted by −1. It is functorial in X and comes from taking horizontal fibres in a commutative square (Proposition 1.2.1).
- For n = 1 and X = Spf 𝒪<sub>K</sub> this is the usual logarithm from 1 + p𝒪<sub>K</sub> to p𝒪<sub>K</sub> (p odd).

**Syntomic logarithm.** An isomorphism between deep enough steps G<sup>≥k</sup> of a filtration on the relative syntomic and relative additive syntomic cohomology. The G-filtration is the new tool of the paper.

## Main results

**Theorem (main theorem; Theorem 1.2.1).** Let X be a quasi-compact, quasi-separated derived formal scheme. (a) log<sub>X</sub> is an isomorphism after inverting p. (b) For 0 &lt; n &lt; p − 1, log<sub>X</sub> factors through an integral isomorphism onto a relative truncated de Rham complex. (c) If X is proper over ℤ<sub>p</sub> of finite tor-amplitude with perfect p-completed cotangent complex, source and target are perfect, and their ℤ<sub>p</sub>-lattices differ by an explicit product of factorials C<sub>∞</sub>(X, n). (d) For X smooth and proper over 𝒪<sub>K</sub>, log<sub>X</sub> is compatible with the Bloch-Kato exponential maps of the étale cohomology groups of X, twisted by n.
- Step 1: the syntomic logarithm is an isomorphism, and the maps from the G<sup>≥k</sup> steps to the full complexes are rational isomorphisms (Theorem 1.3.1). This gives (a) and (c).
- Step 2: part (b) has a separate proof through Fontaine-Messing syntomic cohomology.

**Theorem (lattice formula; Theorem 1.1.1).** Let K be a finite extension of ℚ<sub>p</sub> and n ≥ 2. The image of 𝒪<sub>K</sub> under the Bloch-Kato exponential of ℚ<sub>p</sub>(n) and the integral Galois cohomology RΓ(K, ℤ<sub>p</sub>(n)) define the same ℤ<sub>p</sub>-line, up to an explicit factor. The factor is built from 1 − q<sup>−n</sup>, from (n − 1)! to the power [K : ℚ<sub>p</sub>], and from a power of the discriminant of K. Here q is the size of the residue field. I state the factor loosely. Read the exact exponents in the source.
- Step 1: apply part (d) to X = Spf 𝒪<sub>K</sub>, where the square over ℂ<sub>p</sub> recovers the fundamental exact sequence of p-adic Hodge theory.
- Step 2: apply the volume computation (c), and a cited result that syntomic and Galois cohomology of K agree for n ≥ 2.

**Corollary (compatibility with the functional equation; Corollary 1.1.1).** The conjecture C<sub>EP</sub>(ℚ<sub>p</sub>(n)) of Fontaine and Perrin-Riou holds for all finite K over ℚ<sub>p</sub> and all integers n. So the Tamagawa number conjecture for the Dedekind zeta function of a number field F holds at s = n if and only if it holds at s = 1 − n.

**Corollary (known cases; Corollary 1.1.2).** The Tamagawa number conjecture for ζ<sub>F</sub> holds for F totally real and n > 1 even. This follows from the known case of odd n &lt; 0 and the previous corollary.

## Note, then ignore

- "Fundamental square", not "Beilinson square". The authors have not checked that their map equals Beilinson's K-theoretic one, so they avoid his name. Safe to skip on a first reading.
- Breuil-Kisin twists {n}. These adjust prismatic cohomology so that Frobenius and the filtration fit. They are bookkeeping. Safe to skip.
- Determinants of perfect complexes. Volumes of lattices are stated as identities of ℤ<sub>p</sub>-lines inside a ℚ<sub>p</sub>-line. Think "compare two lattices". Safe to skip.
- F-filtration versus G-filtration. The naive filtration F fails because p does not kill its graded pieces when n ≥ 2. G regroups F to repair this. Safe to skip.
- The case p = 2. In the classical example p must be replaced by p<sup>2</sup>. Safe to skip.

## One next step

Open the PDF at page 8 and read from "In order to explain the F- and G-filtration" down to the limit formula for log(α).
