source: https://people.maths.ox.ac.uk/horawa/Siegel.pdf
slogan: A Siegel modular form appears in two cohomological degrees, and a class from an abelian surface should carry one copy to the other.
basis: the introduction and the main theorem statements

## Before you start

The introduction names motivic cohomology, Beilinson's conjecture, L-packets and coherent cohomology of Shimura varieties within two pages. The honest feeling is shame at how much of that you have not studied. Nobody holds all of it at once, and the feeling needs no fixing. The paper asks a question you can keep without the machinery: why does the same form show up twice, and what links the two copies? Read for that question. Enjoy the statement of Conjecture A, and let the proofs stay closed for now.

## The story

A cuspidal Siegel modular form f of weight (k, 2) gives a class [f] in H<sup>0</sup> of an automorphic vector bundle on a Siegel threefold. The same Hecke eigenvalues appear again in H<sup>1</sup>, through a different, generic automorphic representation. So the eigensystem fills a two-dimensional space across two degrees. Prasanna and Venkatesh met the same excess for singular cohomology of locally symmetric spaces, and proposed that a motivic cohomology group acts and explains it. Here the obstacle is normalisation: the H<sup>1</sup> class comes from a different representation, so there is no obvious way to scale it. The authors scale [f] by rationality and the H<sup>1</sup> class by its Whittaker model. They then conjecture that dividing by a regulator makes the H<sup>1</sup> class rational too. For a form attached to an abelian surface A, the regulator is an explicit integral over divisors on A × A.

## Main definitions

**The two classes.** Let f be a non-endoscopic cuspidal holomorphic Siegel modular form of weight (k, 2) and paramodular level N, with coefficients in ℚ. Let X be the Siegel threefold of that level over ℚ and E<sub>k,2</sub> the automorphic vector bundle.
- [f] ∈ H<sup>0</sup>(X<sub>ℚ</sub>, E<sub>k,2</sub>) is the section defined by f.
- [f<sup>W</sup>] ∈ H<sup>1</sup>(X<sub>ℂ</sub>, E<sub>k,2</sub>) comes from the Whittaker-normalised vector in the unique generic representation with the same finite part π<sub>f</sub>. Together they span the π<sub>f</sub>-part of the cohomology.

**The motivic group.** H<sup>1</sup><sub>M</sub> is the motivic cohomology H<sup>1</sup><sub>M</sub>(M(π<sub>f</sub>, Ad)<sub>ℤ</sub>, ℚ(1)) of the conjectural adjoint motive. Beilinson's conjecture predicts that the regulator r<sub>D</sub> maps H<sup>1</sup><sub>M</sub> ⊗ ℝ isomorphically onto a one-dimensional Deligne cohomology space H<sup>1</sup><sub>D</sub>.
- Abelian surface case, weight (2, 2): the motive is Sym<sup>2</sup>H<sup>1</sup>(A)(1), and a class is a finite set of pairs (D<sub>i</sub>, φ<sub>i</sub>), with D<sub>i</sub> an irreducible divisor on A × A and φ<sub>i</sub> a meromorphic function on D<sub>i</sub>, such that the divisors of the φ<sub>i</sub> sum to zero.

**The action.** The authors pick an explicit generator δ<sup>∨</sup> of the dual of H<sup>1</sup><sub>D</sub> and declare that it sends [f] to [f<sup>W</sup>]. Through the regulator this defines an action of the dual of H<sup>1</sup><sub>M</sub> on the π<sub>f</sub>-part of the cohomology over ℂ.

## Main results

**Conjecture (motivic action; Conjecture A, which is Conjecture 4.19).** The action of the dual of H<sup>1</sup><sub>M</sub> preserves the rational structure. Equivalently, for non-zero α in H<sup>1</sup><sub>M</sub>, the class [f<sup>W</sup>] divided by δ<sup>∨</sup>(r<sub>D</sub>(α)) lies in H<sup>1</sup>(X<sub>ℚ</sub>, E<sub>k,2</sub>).

**Theorem (conditional proof; Theorem B, which is Theorem 4.21).** Conjecture A follows from Beilinson's conjecture for the adjoint L-function L(π<sub>f</sub>, Ad, s) at s = 1, Deligne's conjecture for some quadratic twists of the spin L-function, and a non-vanishing hypothesis for those twists.
- Step 1: results of Chen and Ichino relate the Petersson norm of f<sup>W</sup> to the adjoint L-value.
- Step 2: assuming Deligne's conjecture, the Whittaker period equals a product of two Deligne periods, and an explicit form of Beilinson's conjecture finishes the comparison.

**Theorem (real quadratic Yoshida lifts; Theorem C, which is Theorem 6.2).** Let f be the Yoshida lift of a Hilbert modular form f<sub>0</sub> of weight (2, 2) over a real quadratic field. Then an explicit rank one subspace of the dual of H<sup>1</sup><sub>M</sub> acts rationally. Given Beilinson's rank prediction, Conjecture A holds for f.
- Step 1: L(f, Ad, s) = L(f<sub>0</sub>, Ad, s) · L(f<sub>0</sub>, Asai, s + 1), and at s = 1 only the Asai factor is non-critical.
- Step 2: Ramakrishnan built the needed classes from Hirzebruch-Zagier divisors and modular units, and computed their regulators.

**Theorem (Bianchi compatibility; Theorem D, which is Theorem 7.1).** Let f be the Yoshida lift of a Bianchi modular form f<sub>0</sub> of weight (2, 2) over an imaginary quadratic field. Theta maps carry H<sup>1</sup> and H<sup>2</sup> of the Bianchi threefold to H<sup>0</sup> and H<sup>1</sup> of E<sub>2,2</sub>, and they intertwine the Prasanna-Venkatesh action with the action above, up to ℚ<sup>×</sup>. Given Beilinson's rank prediction, the two conjectures are equivalent here.

## Note, then ignore

- Toroidal compactification. X is a smooth compactification that depends on a choice of cone decomposition. The choice is fixed once and does not affect the story. Safe to skip on a first reading.
- The motive is conjectural. M(π<sub>f</sub>, Ad) is only known to exist in special cases such as abelian surfaces. Safe to skip.
- Constants in δ<sup>∨</sup>. The powers of π and the square root of the adjoint conductor are there so that the statement holds up to ℚ<sup>×</sup> and not just up to algebraic numbers. Safe to skip.
- Hypothesis 5.2. Theorem B needs a slightly stronger non-vanishing statement than the known one. Safe to skip.
- Oh's thesis. Gyujin Oh states a related conjecture with metrics in place of rational structures. Section 1.6 compares the two. Safe to skip.

## One next step

Open the paper at Section 1.2 (page 3) and read to formula (1.7), which writes Conjecture A for an abelian surface as one explicit quotient.
