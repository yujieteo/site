source: https://arxiv.org/pdf/0708.2160
slogan: After tensoring with ℚ, the K-theory of connective complex K-theory splits as K(ℤ) times BBU<sub>⊗</sub>, so its rational homotopy is fully known.
basis: the introduction and the main theorem statements

## Before you start

The title can raise a small dizziness: K-theory of K-theory sounds like a subject with no floor. If that is what you feel, there is nothing wrong with feeling it. The paper is in fact one of the gentler ones in this area, because working rationally removes most of the difficulty. If you want one computation in "higher" K-theory that you can hold in your head, with a generating function at the end, this is it. Read for the answer first and enjoy it. The proof can come later, or never.

## The story

The spectrum ku of connective complex K-theory is a ring spectrum, so it has its own algebraic K-theory K(ku). Earlier work of the authors showed that with finite coefficients K(ku) behaves like a form of elliptic cohomology, and that it classifies "2-vector bundles". Those finite-coefficient calculations are hard. For numerical invariants over ℂ only the rational homotopy type matters, so the authors compute that first. The obstacle is that K(ku) is not K of an ordinary ring. The idea is that rationally ku can be replaced by a simplicial ℚ-algebra, and Goodwillie's theorem then computes the difference between K(ku) and K(ℤ) by negative cyclic homology. The difference is BBU<sub>⊗</sub>, the classifying space of the 1-component of the units of ku. A rational determinant map splits it off.

## Main definitions

**K-theory of a ring spectrum.** For a connective S-algebra A, the space K(A) is K<sub>0</sub>(π<sub>0</sub>A) × BGL<sub>∞</sub>(A)<sup>+</sup>, with Quillen's plus construction. For an Eilenberg–Mac Lane spectrum of a ring it gives ordinary algebraic K-theory.

**The maps w and π.** These are the two maps in the main fibre sequence.
- w: the unit inclusion BBU<sub>⊗</sub> → BGL<sub>1</sub>(ku) → BGL<sub>∞</sub>(ku)<sup>+</sup> → K(ku).
- π: K(ku) → K(ℤ), induced by the zeroth Postnikov section ku → Hℤ.

**Poincaré series.** For a space X of finite type it is the power series Σ r<sub>n</sub>t<sup>n</sup>, where r<sub>n</sub> is the rank of π<sub>n</sub>(X).

**Rational de Rham equivalence.** Connes' operator B acts on Hochschild homology with B∘B = 0, and de Rham homology is ker B / im B. A map of simplicial rings is a rational de Rham equivalence when its relative de Rham homology vanishes after tensoring with ℚ.

## Main results

**Theorem (rational K(ku); Theorem 0.1).** After rationalisation, BBU<sub>⊗</sub> → K(ku) → K(ℤ), with maps w and π, is a split homotopy fibre sequence. The Poincaré series of K(ku) is 1 + t<sup>3</sup>/(1 − t<sup>2</sup>) + t<sup>5</sup>/(1 − t<sup>4</sup>). A rational determinant map BGL<sub>∞</sub>(ku)<sup>+</sup> → BGL<sub>1</sub>(ku)<sub>ℚ</sub>, in its relative form for ku → Hℤ, rationally splits w.
- Step 1: by Goodwillie's theorem and the trace map, the rational homotopy of the fibre of π is ℚ[u]{du} inside THH<sub>\*</sub>(ku) ⊗ ℚ, with |u| = 2 and |du| = 3 (Theorem 2.5).
- Step 2: the determinant composed with w is rationalisation, and a count of ranks shows that w maps BBU<sub>⊗</sub> rationally onto the whole fibre (Theorem 4.8).

**Theorem (rational K(KU); Theorem 0.2).** There is a rationally split homotopy fibre sequence of infinite loop spaces K(ku) → K(KU) → BK(ℤ). The first map comes from ku → KU, and BK(ℤ) is the first connected delooping of K(ℤ). The Poincaré series of K(KU) is (1 + t) + (t<sup>3</sup> + 2t<sup>5</sup> + t<sup>6</sup>)/(1 − t<sup>4</sup>).
- Step 1: use the localisation sequence K(ℤ) → K(ku) → K(KU) of Blumberg and Mandell.
- Step 2: evaluate the transfer map K(ℤ) → K(ku) rationally.

**Theorem (relative rational K-theory; Corollary 1.6, after Goodwillie).** Let A → A′ be a map of connective S-algebras that is surjective with nilpotent kernel on π<sub>0</sub>. Then the rationalised fibre of K(A) → K(A′) is equivalent to the fibre of the map of circle homotopy fixed points of THH of the rationalisations.

## Note, then ignore

- BU<sub>⊗</sub> versus BU. The subscript means BU with the multiplication from tensor product of virtual bundles of virtual dimension one, which is the 1-component of the unit space of ku. Safe to skip on a first reading.
- The rank count. The last step for ku is a counting argument, and the authors say it fails for the bordism spectrum MU. Safe to skip.
- Other spectra. The same method handles ko, the Adams summand ℓ, and rationally MU, MSO and MSp. Safe to skip.
- Anomaly bundles. Section 5 reads the splitting as saying that a 2-vector bundle over X is rationally its dimension bundle plus a virtual vector bundle over the free loop space LX. It is an interpretation with physics language, not a step in the proof. Safe to skip.
- Models of spectra. The first section compares commutative simplicial ℚ-algebras with commutative Hℚ-algebras so that determinants exist. Safe to skip.

## One next step

Open the paper and read Theorem 0.1 on page 2 and the short paragraph after it that defines the Poincaré series. Then expand the series to degree 9 by hand.
