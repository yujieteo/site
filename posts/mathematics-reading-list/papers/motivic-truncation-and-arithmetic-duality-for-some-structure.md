source: https://www.mn.uio.no/math/personer/vit/rognes/papers/wuppertal.pdf
slogan: The fraction field of p-adic topological K-theory behaves like a two-dimensional local field: its K-theory shows the same truncation and hints at the same duality.
basis: the full text

## Before you start

These are twenty pages of informal talk notes, and the author warns "handle with care". The notation comes fast: V(1), v<sub>2</sub>, TC, L<sub>p</sub>, K(n). The likely feeling is fear of being too slow for chromatic homotopy theory. You can be slow here. The first eight pages are about ordinary number fields and need no spectra. If you want to see why topologists treat ring spectra as number rings, this talk says it plainly. Enjoy the analogy first. The computations can wait.

## The story

Topologists want the algebraic K-theory of the sphere spectrum S, because it controls diffeomorphism groups of high-dimensional manifolds. It can be computed through topological cyclic homology, but the answer has no visible pattern. For the integers there is a pattern. Pass to the fraction field ℚ<sub>p</sub>, compare K-theory with Galois cohomology, and keep only the part allowed by motivic cohomology. Local Galois cohomology also has a Poincaré-type duality. Rognes asks whether ring spectra have the same structure. The chromatic tower cuts S into layers, and the first new layer leads to L<sub>p</sub>, the Adams summand of p-complete complex K-theory. Computations with Ausoni show that the pattern reappears only after one inverts p in L<sub>p</sub> in a non-commutative sense. That "fraction field" looks like a 2-local field.

## Main definitions

**Galois K-theory and the descent spectral sequence.** For a field F of characteristic not p, K<sup>Gal</sup>(F)<sub>p</sub> is the continuous homotopy fixed points of the absolute Galois group acting on the p-completed K-theory of a separable closure. By Suslin, that K-theory is connective complex K-theory ku<sub>p</sub>. A spectral sequence runs from Galois cohomology H<sup>−s</sup><sub>Gal</sub>(F; ℤ<sub>p</sub>(t/2)) to π<sub>s+t</sub> K<sup>Gal</sup>(F)<sub>p</sub>.

**Motivic cohomology of a field.** H<sup>n</sup><sub>mot</sub>(F; ℤ(k)) = CH<sup>k</sup>(F, 2k−n), a higher Chow group of Bloch. It vanishes for n > k, because the simplex Δ<sup>2k−n</sup> has no subvarieties of codimension k.
- The Bloch–Lichtenbaum spectral sequence runs from these groups to π<sub>s+t</sub> K(F).

**V(1)-homotopy.** V(0) = S/p is the mod p Moore spectrum, with self-map v<sub>1</sub>. V(1) = S/(p, v<sub>1</sub>) is the Smith–Toda complex. For p ≥ 5 it is a homotopy commutative ring spectrum with a self-map v<sub>2</sub> of degree 2p<sup>2</sup>−2. V(1)<sub>\*</sub>(X) is the homotopy of V(1) ∧ X.

**The fraction field ff(L<sub>p</sub>) = p<sup>−1</sup>L<sub>p</sub>.** L<sub>p</sub> has coefficients ℤ<sub>p</sub>[v<sub>1</sub>, v<sub>1</sub><sup>−1</sup>]. Its residue ring L/p = K(1) is associative but not commutative, so inverting p must be a non-commutative localisation. For now its K-theory is defined by the cofibre sequence K(L/p) → K(L<sub>p</sub>) → K(p<sup>−1</sup>L<sub>p</sub>).

## Main results

**Theorem (motivic truncation for fields; quoted, no number).** For F of characteristic not p, H<sup>n</sup><sub>mot</sub>(F; ℤ<sub>p</sub>(k)) ≅ H<sup>n</sup><sub>Gal</sub>(F; ℤ<sub>p</sub>(k)) for n ≤ k, and it is 0 for n > k. The notes call this the content of the Milnor and Bloch–Kato conjectures and attribute the proof to Voevodsky and Rost.
- Consequence: for local or global number fields, K(F)<sub>p</sub> → K<sup>Gal</sup>(F)<sub>p</sub> is injective on π<sub>0</sub> and an isomorphism in higher degrees.

**Theorem (local duality, Tate and Poitou; quoted).** For a local number field F, cup product gives a perfect pairing H<sup>n</sup>(F; 𝔽<sub>p</sub>(k)) ⊗ H<sup>2−n</sup>(F; 𝔽<sub>p</sub>(1−k)) → H<sup>2</sup>(F; 𝔽<sub>p</sub>(1)) ≅ ℤ/p. So the Galois group behaves like a closed surface.

**Theorem (Ausoni–Rognes; stated without number).** Let p ≥ 5. Modulo the kernel of the cyclotomic trace, which is explicit and finite, V(1)<sub>\*</sub>K(p<sup>−1</sup>L<sub>p</sub>) is a free module over the polynomial ring P(v<sub>2</sub>) of rank 2p<sup>2</sup>+6, on listed generators.
- Step 1: compute V(1)<sub>\*</sub>TC for ℤ, ℓ and ℓ/p from topological Hochschild homology.
- Step 2: combine them through a 3×3 diagram of localisation cofibre sequences.

**Conjecture (Galois theory of the fraction field).** There is a separably closed pro-Galois extension Ω<sub>1</sub> of p<sup>−1</sup>L<sub>p</sub> with L<sub>K(2)</sub>K(Ω<sub>1</sub>) ≃ E<sub>2</sub>. The computed groups then suggest a perfect pairing into H<sup>3</sup><sub>Gal</sub>(p<sup>−1</sup>L<sub>p</sub>; 𝔽<sub>p<sup>2</sup></sub>(2)), as for a 2-local field. The notes say "strongly suggests", not "proves".

## Note, then ignore

- Completion at p. The notes pass from S and ℤ to their p-completions. A homotopy Cartesian square says little is lost. Safe to skip.
- Adams summand. The notes use L<sub>p</sub> in place of KU<sub>p</sub> to shorten formulas. The author expects no qualitative difference. Skip.
- Hypothetical spectral sequence. The "motivic cohomology" of p<sup>−1</sup>L<sub>p</sub> is read off from the K-theory answer. No such theory is constructed. Keep this in mind, then move on.
- Two six-functor pictures. The notes offer two ways to view the chromatic layers as open and closed pieces, and say the details remain open. Skip on a first reading.
- Date. The talk is from 2005. Some statements marked as expected or "apparently proven" have since been settled. The notes themselves do not say so.

## One next step

Open the PDF at page 6, the section "Motivic cohomology", and read to the sentence on page 7 that explains the line 2s + t = 0.
