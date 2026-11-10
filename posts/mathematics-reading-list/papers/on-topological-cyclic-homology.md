source: https://arxiv.org/pdf/1707.01799
slogan: A cyclotomic spectrum is a spectrum with a circle action and one Frobenius map per prime, so TC becomes a short fibre sequence.
basis: the introduction and the main theorem statements

## Before you start

This is 169 pages written in the language of ∞-categories, about an object with a reputation for heavy equivariant machinery. The likely feeling is shame at the background you lack: genuine equivariant spectra, orthogonal spectra, the Tate construction. You are allowed to feel that. The paper exists because its authors found the old foundations hard to see through too. If you want to know what computes algebraic K-theory in practice, the eight-page introduction tells you. Read it for the plot. The other 160 pages can wait.

## The story

The K-theory spectrum K(A) of a ring is hard to compute, so people approximate it. Rationally, Goodwillie's trace to negative cyclic homology HC<sup>−</sup>(A) controls how K-theory changes under a nilpotent thickening. Integrally the right target is topological cyclic homology TC(A), built by Bökstedt, Hsiang and Madsen from topological Hochschild homology THH(A). Their construction needs genuine equivariant homotopy theory and explicit point-set models, and it is hard to tell how much structure THH(A) really carries. Nikolaus and Scholze show that, for bounded below spectra, the answer is short. THH(A) has a circle action and, for each prime p, a Frobenius map into its own Tate construction. Nothing else. TC(A) is then the fibre of a map between two explicit spectra.

## Main definitions

**Tate construction.** For a spectrum X with an action of the cyclic group C<sub>p</sub>, the norm map goes from homotopy orbits to homotopy fixed points, Nm: X<sub>hC<sub>p</sub></sub> → X<sup>hC<sub>p</sub></sup>. The Tate construction X<sup>tC<sub>p</sub></sup> is its cofibre.
- Classical shadow: Tate cohomology of a finite group, which splices group homology and group cohomology together.

**Topological Hochschild homology.** For a ring spectrum A, THH(A) is the geometric realisation of the cyclic object whose n-th term is the (n+1)-fold tensor product of A over the sphere spectrum S. The cyclic structure gives an action of the circle group T.
- Over ℤ in place of S, the same recipe gives ordinary Hochschild homology HH(A).

**Cyclotomic spectrum (Definition 1.3).** A spectrum X with a T-action, in the plain sense of a functor BT → Sp, together with maps φ<sub>p</sub>: X → X<sup>tC<sub>p</sub></sup> for every prime p. Each φ<sub>p</sub> is equivariant for T ≅ T/C<sub>p</sub>.
- No compatibility between the maps for different primes is required.
- Older definition ("genuine"): an orthogonal T-spectrum with equivalences Φ<sup>C<sub>p</sub></sup>X ≃ X from the geometric fixed points, commuting with each other.

## Main results

**Theorem (the two definitions agree; Theorem 1.4).** The forgetful functor from genuine cyclotomic spectra to cyclotomic spectra is an equivalence of ∞-categories when restricted to bounded below spectra on both sides.
- Step 1: a genuine cyclotomic spectrum gives φ<sub>p</sub> by composing X ≃ Φ<sup>C<sub>p</sub></sup>X with the natural map Φ<sup>C<sub>p</sub></sup>X → X<sup>tC<sub>p</sub></sup>.
- Step 2: the key input is the Tate orbit lemma (Lemma I.2.1). For bounded below X with a C<sub>p²</sub>-action, the Tate construction of C<sub>p²</sub>/C<sub>p</sub> on X<sub>hC<sub>p</sub></sub> vanishes.

**Corollary (formula for TC; Corollary 1.5).** For a connective ring spectrum A there is a natural fibre sequence TC(A) → THH(A)<sup>hT</sup> → ∏<sub>p</sub> (THH(A)<sup>tC<sub>p</sub></sup>)<sup>hT</sup>. The second map is φ<sub>p</sub><sup>hT</sup> − can in the factor for p.
- Here can is the canonical map from homotopy fixed points to the Tate construction, after identifying T/C<sub>p</sub> with T.
- The product on the right is the profinite completion of THH(A)<sup>tT</sup>.

**Theorem (Tate diagonal; Theorem 1.7).** For a prime p let T<sub>p</sub>(X) = (X ⊗ … ⊗ X)<sup>tC<sub>p</sub></sup>, with p factors permuted cyclically. Then T<sub>p</sub> is exact, and there is a unique lax symmetric monoidal transformation Δ<sub>p</sub>: X → T<sub>p</sub>(X). If X is bounded below, Δ<sub>p</sub> exhibits T<sub>p</sub>(X) as the p-completion of X.
- For X = S this is the Segal conjecture for C<sub>p</sub>, proved by Lin and Gunawardena. The paper extends it.
- Use: Δ<sub>p</sub> is what builds the Frobenius φ<sub>p</sub> on THH(A) without point-set models.

**Theorem (background, due to Dundas, Goodwillie and McCarthy; quoted as Theorem 1.2).** There is a cyclotomic trace K(A) → TC(A). For a map of connective ring spectra that is a surjection with nilpotent kernel on π<sub>0</sub>, the square formed by K and TC of the two rings is homotopy cartesian.

## Note, then ignore

- Bounded below. The main theorem needs homotopy groups to vanish below some degree. Rings and connective ring spectra satisfy this, so it is safe to skip on a first reading.
- TC is not "cyclic homology of THH". A footnote warns that TC refines the homotopy fixed points THH(A)<sup>hT</sup>, written TC<sup>−</sup>(A), and not the orbits. Safe to skip once noted.
- Bökstedt's construction. The classical model uses a special point-set smash product so that fixed points behave. Chapter III compares it with the new one. Safe to skip.
- Fibre versus equaliser. The paper writes TC as a fibre of a difference of maps and remarks that an equaliser says the same thing. Safe to skip.
- Appendices. Three appendices on symmetric monoidal ∞-categories, the cyclic category and homotopy colimits support the constructions. Safe to skip on a first reading.

## One next step

Open the paper at the foot of page 5 and read Definition 1.3, then Theorem 1.4 and Corollary 1.5 on page 6.
