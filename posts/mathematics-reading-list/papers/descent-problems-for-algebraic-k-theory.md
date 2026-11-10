source: https://webhomes.maths.ed.ac.uk/~cbarwick/papers/descentK.pdf
slogan: Special values of zeta functions count torsion in K-groups, and the reason is that K-theory nearly glues along Galois covers.
basis: the full text

## Before you start

These are eleven pages of colloquium notes that start with a class number formula and end with Beilinson's conjectures. The likely feeling is a slide from comfort into being lost, somewhere around the equivariant spectra of Section 4, and then a wish to stop. That is the normal shape of a colloquium talk, and you may feel it without fault. If you want to see why anyone hopes K-theory knows about ζ(3), Sections 1 to 3 show it with numbers you can check. Enjoy those numbers. Whether you reach page 11 matters much less.

## The story

Dirichlet's class number formula writes the leading term of ζ<sub>F</sub> at s = 0 as class number over roots of unity, times a regulator. In K-theory terms that is torsion of K<sub>0</sub> over torsion of K<sub>1</sub>. Lichtenbaum guessed the same pattern at every negative integer, with higher K-groups and Borel's regulators. For F = ℚ this ties Bernoulli numbers to the orders of K<sub>4k−2</sub>(ℤ) and K<sub>4k−1</sub>(ℤ). Results from Iwasawa theory express the same zeta values through étale cohomology. So the question becomes one of descent: can K-theory of a field be recovered from K-theory of its algebraic closure with the Galois action? Not exactly, but conjecturally in high degrees. Barwick then reports an equivariant result that removes the degree bound.

## Main definitions

**Special value.** For a number field F with r<sub>1</sub> real and r<sub>2</sub> complex embeddings, ζ<sub>F</sub> vanishes at s = 1 − m to order d<sub>m</sub>, where d<sub>1</sub> = r<sub>1</sub> + r<sub>2</sub> − 1, d<sub>m</sub> = r<sub>1</sub> + r<sub>2</sub> for odd m > 1, and d<sub>m</sub> = r<sub>2</sub> for even m. The special value ζ<sub>F</sub><sup>\*</sup>(1 − m) is the first non-zero Taylor coefficient there.

**Borel regulator.** For m > 0, Borel's map K<sub>2m−1</sub>(O<sub>F</sub>) → ℝ<sup>d<sub>m</sub></sup> has finite kernel and its image is a lattice. The regulator R<sup>B</sup><sub>F,m</sub> is the covolume of that lattice.
- Case m = 1: this is Dirichlet's logarithmic embedding of the units.

**Descent for a presheaf of spectra.** K-theory assigns a spectrum K(X) to each scheme X. It satisfies descent for a topology if K(X) can be recovered from its values on covers. When it does, there is a spectral sequence from the cohomology of the sheaves of K-groups to K-groups of X.
- For a field F with absolute Galois group G<sub>F</sub>: compare K(F) with the homotopy fixed points of G<sub>F</sub> on K of the algebraic closure.

## Main results

**Theorem (Borel; Theorem 2.2 and 2.3).** For a number field F, K<sub>m</sub>(O<sub>F</sub>) is finite for even m > 0. The rank of K<sub>2m−1</sub>(O<sub>F</sub>) is d<sub>m</sub>, the order of vanishing of ζ<sub>F</sub> at 1 − m, and ζ<sub>F</sub><sup>\*</sup>(1 − m) is a rational multiple of the Borel regulator.

**Conjecture (Lichtenbaum; Conjecture 2.4).** For m > 0, up to powers of 2, |ζ<sub>F</sub><sup>\*</sup>(1 − m)| equals the order of the torsion of K<sub>2m−2</sub>(O<sub>F</sub>), divided by the order of the torsion of K<sub>2m−1</sub>(O<sub>F</sub>), times R<sup>B</sup><sub>F,m</sub>. The notes say this is very likely now known as a consequence of the Voevodsky–Rost theorem, without giving a proof.
- Case F = ℚ, m = 2k: the notes state the known result |B<sub>2k</sub>|/4k = #K<sub>4k−2</sub>(ℤ)/#K<sub>4k−1</sub>(ℤ).
- Case m = 1: Dirichlet's class number formula (Theorem 1.6).

**Theorem (Thomason; Theorem 3.6).** On Noetherian schemes of finite Krull dimension, K-theory and K-theory mod m satisfy Zariski and Nisnevich descent. If the prime ℓ is invertible, Bott-inverted K-theory mod ℓ<sup>ν</sup> satisfies étale descent. So does rational K-theory. Plain K-theory and K-theory mod m do not satisfy étale hyperdescent.

**Conjecture (Quillen–Lichtenbaum; Conjectures 3.8 and 3.11).** Let F be a field of characteristic not ℓ and of ℓ-adic cohomological dimension d. After ℓ-completion, the map from K(F) to the homotopy fixed points of G<sub>F</sub> on K of the algebraic closure induces isomorphisms on π<sub>i</sub> for i > d.
- Input: Suslin's theorem (3.10) that the ℓ-completed K-theory of an algebraically closed field of characteristic not ℓ is ℓ-completed connective topological K-theory ku.

**Theorem (Barwick, partly with Lyo, conjectured by Carlsson for fields; Theorem 4.2).** For a geometrically connected variety X over a field F of finite ℓ-adic cohomological dimension, a base change map between two G<sub>F</sub>-equivariant K-theory ring spectra becomes an equivalence after completion along the mod ℓ rank map. On fixed points this recovers the ℓ-completed K-theory of X. The notes only sketch the proof, which uses an equivariant form of Grayson's weight filtration.

## Note, then ignore

- "Up to powers of 2". Several formulas hold only away from the prime 2. Example 4.11 says the Beilinson regulator removes the ambiguity. Safe to skip on a first reading.
- The date. The talk is from November 2009, so the status of conjectures is as of then. Safe to skip.
- The shift by one. Quillen's K-groups of 𝔽<sub>q</sub> match étale cohomology with an index shift that the notes point out and leave as a question. Safe to skip.
- Mackey and Green functors. Section 4 sets up equivariant spectra through a Burnside ∞-category so that Theorem 4.2 can be stated. Safe to skip.
- Section 5. It states Beilinson's conjecture for L-functions of varieties as the general form of everything before. It has no proofs. Safe to skip.

## One next step

Open the notes at Example 2.6 on page 4 and read the formula that relates B<sub>2k</sub> to the orders of K<sub>4k−2</sub>(ℤ) and K<sub>4k−1</sub>(ℤ).
