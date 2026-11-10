source: https://www.physics.rutgers.edu/~gmoore/TASI-ChernSimons-StudentNotes.pdf
slogan: Chern-Simons theory swaps the usual troubles of quantum field theory for questions in topology, and those questions have exact answers.
basis: the introduction and the main theorem statements

## Before you start

These notes are 249 pages, unfinished, with margin reminders from the author to himself and several late sections that are only headings. You may feel overwhelm, or irritation at loose ends. Both are fine to have. If you want one quantum field theory where you can compute a Hilbert space by hand, the torus computation in section 2.2 gives you that. Read the parts that please you. Nothing here asks you to reach the last page.

## The story

Physicists want a quantum gauge theory they can solve. Most cannot be solved. Chern-Simons theory in three dimensions can, because its action uses no metric. Take a gauge field A with curvature F. The 4-form tr F<sup>2</sup> is the exterior derivative of a 3-form cs(A), and you integrate cs(A) over a 3-manifold. The classical solutions are flat connections. Naively the path integral is then a topological invariant, and Wilson loops give invariants of knots and links. Moore says this is true in spirit only. Regularisation forces extra choices, called framings. He starts with gauge group U(1), where every step is a Gaussian integral or a theta function, and then moves to nonabelian groups and their link with two-dimensional conformal field theory.

## Main definitions

**Chern-Simons form.** For a gauge field A with F = dA + A<sup>2</sup>, the 3-form cs(A) = tr(A dA + (2/3)A<sup>3</sup>) satisfies d cs(A) = tr F<sup>2</sup>. The action is the integral of cs(A) over an oriented 3-manifold M<sub>3</sub>.
- For U(1): the weight is exp(i(κ/2π)∫ A ∧ F) with coupling κ (eqn. (2.47)).

**Level.** The coefficient of the action. A gauge transformation that is not connected to the identity shifts the action, so the weight is well defined only for quantised levels. In general the level is an element of H<sup>4</sup>(BG; ℤ).

**Wilson line.** For a closed oriented curve γ in M<sub>3</sub> and a representation R of G, W(R, γ) is the trace in R of the holonomy of A around γ.

**Framing.** A nowhere zero section of the normal bundle of γ, up to homotopy. You need it to define the self-linking number of γ.

## Main results

The notes work at physics level. Most statements are derived by path integral or canonical quantisation, not proved as theorems.

**Claim (physics argument; data of the theory; section 1).** A compact group G and a level define a three-dimensional topological field theory. To get numbers you also need an orientation and a 2-framing of M<sub>3</sub>, and ribbons labelled by representations in place of bare loops.

**Claim (physics argument; U(1) Wilson loops; eqn. (2.255)).** In U(1) theory at coupling κ, the correlator of Wilson loops with charges r<sub>α</sub> on curves γ<sub>α</sub> is a normalisation N times exp((2πi/4κ) Σ r<sub>α</sub> r<sub>β</sub> L(γ<sub>α</sub>, γ<sub>β</sub>)). Here L is the Gauss linking number.
- Step 1: the action is quadratic, so the integral is Gaussian.
- Step 2: the terms with α = β are self-linking numbers, and they need a framing.

**Claim (physics argument; U(1) Hilbert space; section 2.2).** Quantising U(1) theory on a torus gives a space of dimension 2κ, spanned by level κ theta functions. On a surface of genus g the dimension is (2κ)<sup>g</sup>.
- Step 1: the phase space is the torus of flat connections with a symplectic form proportional to κ.
- Step 2: a complex structure on the surface turns states into holomorphic sections of a line bundle.

**Claim (physics argument; link with conformal field theory; sections 2.3 and 3.4).** The space of states of Chern-Simons theory on Σ × ℝ is isomorphic to the space of conformal blocks of a matching rational conformal field theory on Σ. For compact simple G this is the WZW model. For SU(2) at level k the Verlinde formula (eqn. (3.90)) gives the dimension.

## Note, then ignore

- κ against k. The notes use κ for U(1) and k for nonabelian groups, with k = −2κ when you pass from one to the other. This is a convention, safe to skip on a first reading.
- Half-integer levels. The notes allow them for spin theories, defined through a bounding manifold. Safe to skip at first.
- The factor N. The normalisation of the U(1) path integral hides a topological anomaly, treated in section 2.2.17. Safe to skip.
- Unfinished sections. Sections 6 to 11 are mostly headings in this draft, dated June 2019. You lose nothing by skipping them.
- Four quantisations of the torus. Sections 2.2.8 to 2.2.11 do the same computation four ways. One is enough at first.

## One next step

Open the notes at section 1 and read the three numbered items that begin "A compact group G". They list the exact data the theory needs.
