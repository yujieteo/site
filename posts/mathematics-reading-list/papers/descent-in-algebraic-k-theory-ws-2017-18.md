source: https://www.preschema.com/lecture-notes/kdescent/
slogan: K-theory glues along open covers and, in a weaker pro sense, along blow-ups, and that is enough to show negative K-groups vanish below minus the dimension.
basis: the introduction and the main theorem statements

## Before you start

Eleven lectures, derived algebraic geometry from Lecture 1, and a recent research theorem as the goal. The feeling this raises is fear of being too slow: that each lecture will take you a week. It may. That is allowed, and the notes do not expire. If you want to understand how singular schemes differ from smooth ones in K-theory, the four-page overview tells the whole plot. Read the overview for the plot and enjoy it. Go further only where you are curious.

## The story

For regular schemes, K-theory behaves like a cohomology theory: it has Mayer–Vietoris for open covers (Thomason) and is invariant under X ↦ X × A<sup>1</sup> (Quillen). For singular schemes, homotopy invariance fails and negative K-groups appear.

Weibel conjectured in 1980 that these negative groups stop: K<sub>i</sub>(X) = 0 for i below minus the dimension. Kerz, Strunk and Tamme proved it. The course builds up to their proof.

The key question is how K-theory behaves under blow-ups. It does not satisfy descent for general blow-up squares. But two substitutes hold. For a derived blow-up along a regular immersion, descent is exact. For a classical abstract blow-up, descent holds after you replace the centre and the exceptional divisor by all their infinitesimal thickenings at once.

## Main definitions

**Nonconnective K-theory.** For a quasi-compact quasi-separated scheme X, K(X) is the K-theory spectrum of perfect complexes on X. Its π<sub>0</sub> is the Grothendieck group of perfect complexes, and it can have negative homotopy groups.
- As a functor: K sends exact sequences of small stable idempotent-complete ∞-categories to exact triangles of spectra, and preserves filtered colimits.

**Abstract blow-up square.** A cartesian square with Z → X a closed immersion, Y → X proper, and E the preimage of Z, such that Y − E → X − Z is an isomorphism on underlying reduced schemes.

**Homotopy K-theory KH.** The universal A<sup>1</sup>-invariant presheaf of spectra receiving a map from K.
- On regular schemes K → KH is an equivalence (Thomason, Weibel).

**Derived blow-up.** A blow-up of a derived scheme along a regular immersion that agrees with the classical one for classical schemes and commutes with arbitrary derived base change.

## Main results

**Theorem (Zariski descent, Thomason; Lecture 4, Theorem 3.2).** Let X be a quasi-compact quasi-separated derived scheme with open cover X = U ∪ V. Then the square K(X), K(U), K(V), K(U ∩ V) is cartesian in spectra.
- Step 1: the sequence Perf(X)<sub>U</sub> → Perf(X) → Perf(U) is exact, so K gives an exact triangle (the localisation sequence).
- Step 2: perfect complexes on X vanishing on U agree with those on V vanishing on U ∩ V, so the fibres match.

**Theorem (derived blow-up descent; Lecture 0, Theorem 4.2).** Let Z → X be a regular immersion of derived schemes, with derived blow-up and virtual exceptional divisor E = P(N<sub>Z/X</sub>). Then K sends the blow-up square to a cartesian square of spectra.

**Theorem (pro cdh excision; Lecture 9, Theorem 1.2).** For an abstract blow-up square of noetherian classical schemes, the square of pro-spectra K(X), K(Y), {K(Z<sup>(n)</sup>)}, {K(E<sup>(n)</sup>)} is quasi-cartesian: the map from K(X) to the pro-system of fibre products K(Z<sup>(n)</sup>) ×<sub>K(E<sup>(n)</sup>)</sub> K(Y) is a quasi-isomorphism of pro-spectra. Here Z<sup>(n)</sup> and E<sup>(n)</sup> run over the infinitesimal neighbourhoods.
- Step 1: compare the classical blow-up with the derived one, where descent is exact.
- Step 2: control the difference with pro Milnor excision (Lecture 9, Theorems 3.1 and 3.2).

**Theorem (Weibel's conjecture, Kerz–Strunk–Tamme; Lecture 0, Theorem 3.4).** Let X be a noetherian scheme of finite dimension d. Then K<sub>i</sub>(X) = 0 for i &lt; −d, and K<sub>−d</sub>(X) → K<sub>−d</sub>(X × A<sup>1</sup>) is an isomorphism. The overview calls this the final goal of the lectures.

## Note, then ignore

- Preliminary notes. The page warns readers to use them with caution. Safe to skip worrying on a first reading.
- Connective versus nonconnective. Applying A<sup>1</sup>-localisation to connective K-theory gives a badly behaved object, so the notes insist on the nonconnective version. Safe to skip.
- G-theory. K-theory of coherent sheaves is A<sup>1</sup>-invariant for all noetherian schemes and agrees with K on regular ones. It explains Quillen's theorem. Safe to skip.
- Nisnevich squares. Thomason's descent also holds for these étale variants of open covers (Lecture 5). Safe to skip.
- Zariski–Riemann spaces. Kerz, Strunk and Tamme use them to avoid resolution of singularities. Safe to skip.

## One next step

Open the page, click the pdf for "Lecture 0: Overview", and read Section 3 only: Theorem 3.2 and Theorem 3.4.
