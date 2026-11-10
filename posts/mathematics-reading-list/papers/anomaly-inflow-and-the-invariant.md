source: https://arxiv.org/pdf/1909.08775
slogan: Put an anomalous fermion on the edge of a gapped bulk, and the bulk's η-invariant supplies exactly the phase the edge cannot define alone.
basis: the introduction and the main theorem statements

## Before you start

This paper runs to more than fifty pages and leans on the Atiyah-Patodi-Singer index theorem and the Dai-Freed theorem. You may feel shame at not having that background. The feeling makes sense, and you can keep reading with it. If you want to see how one spectral invariant decides whether a fermion theory exists at all, section 2.1 shows it in a few pages. Read what you enjoy. Finishing can wait.

## The story

A chiral fermion in d dimensions can be anomalous: the phase of its path integral has no consistent definition. The old cure is anomaly inflow. Make the fermion the boundary mode of a massive fermion on a manifold Y of dimension d + 1. The bulk then contributes a Chern-Simons term whose gauge variation cancels the boundary anomaly. The quantum Hall effect is the model case. But Chern-Simons terms see only perturbative anomalies. Global anomalies need the η-invariant instead, and the Dai-Freed theorem suggested the right formula. Nobody had derived it from the physics. Witten and Yonekura do so. They treat the path integral on Y as an overlap of states on the boundary W, and insert the state defined by the APS boundary condition. The bulk factor becomes an exponentiated η-invariant.

## Main definitions

**η-invariant.** For a self-adjoint Dirac operator with eigenvalues λ<sub>k</sub>, η is a regularised version of Σ sign(λ<sub>k</sub>). One regularisation is the limit ε → 0 of Σ exp(−ε|λ<sub>k</sub>|) sign(λ<sub>k</sub>).
- On a closed manifold: the phase of a massless fermion path integral is exp(−iπη/2), with a positive regulator mass.
- On Y with boundary W: η is computed with APS boundary conditions along W.

**Local boundary condition L.** Near the boundary, Y looks like a product with normal coordinate τ. The condition is (1 − γ<sup>τ</sup>)Ψ = 0 at τ = 0. It is elliptic but not self-adjoint. For mass m &lt; 0 it leaves one massless chiral mode χ on W.

**APS boundary condition.** A global, self-adjoint boundary condition defined from the spectrum of the boundary Dirac operator D<sub>W</sub>. It exists as stated when D<sub>W</sub> has no zero-modes. It gives a state |APS⟩ with no phase ambiguity.

**Anomaly (d + 2)-form Φ<sub>d+2</sub>.** The characteristic form in the index theorem on a (d + 2)-manifold X. The APS index theorem reads I = ∫<sub>X</sub> Φ<sub>d+2</sub> − η<sub>Y</sub>/2 when Y is the boundary of X. The form vanishes exactly when χ has no perturbative anomaly.

## Main results

These are physics-level derivations with path integrals. The paper does not label theorems.

**Claim (physics argument; inflow for a Dirac fermion; eqn. (2.13)).** Let Ψ be a massive Dirac fermion on Y with boundary condition L, with |m| large compared to the inverse size of Y and W. Assume D<sub>W</sub> has no zero-modes. Then, up to factors removable by local counterterms, Z(Y, L) = |Det D<sub>W</sub><sup>+</sup>| exp(−iπη<sub>D</sub>), with η<sub>D</sub> computed with APS boundary conditions.
- Step 1: for large |m|, evolution near the boundary projects onto the ground state |Ω⟩, so Z(Y, L) = ⟨L|Ω⟩⟨Ω|Y⟩.
- Step 2: insert |APS⟩. The bulk factor ⟨APS|Y⟩ gives the η term and the rest gives the absolute value of the boundary determinant.

**Claim (physics argument; general fermions; eqns. (2.52) and (3.1)).** For an arbitrary relativistic fermion χ on W, realised as the boundary mode of a massive fermion on Y, Z(Y, L) = |Pf(D<sub>W</sub><sup>+</sup>)| exp(−iπη<sub>Y</sub>/2). The case where D<sub>W</sub> always has zero-modes needs operator insertions and is treated in section 2.5.

**Claim (physics argument; the anomaly; eqn. (3.5)).** Two choices Y and Y′ with the same boundary give partition functions whose ratio is exp(−iπη/2) of the closed manifold made by gluing Y to the orientation reversal of Y′. If this factor equals 1 on every closed (d + 1)-manifold with the relevant structures, the theory of χ is anomaly-free and the formula above defines its phase.
- Step 1: the gluing theorem for η.
- Step 2: when no Y exists, the definition is fixed only up to a homomorphism from a cobordism group to U(1).

**Claim (physics argument; cobordism invariance; section 3.2).** If Φ<sub>d+2</sub> = 0, then exp(−iπη<sub>Y</sub>/2) = 1 whenever Y bounds some X over which the structures extend. So the global anomaly is a cobordism invariant.
- Step 1: the APS index theorem gives η<sub>Y</sub> = −2I.
- Step 2: an antilinear symmetry squaring to −1 forces I to be even.

## Note, then ignore

- Factor of 2 in the exponent. The Dirac case has exp(−iπη) and the general case has exp(−iπη/2), because a Dirac fermion counts twice. Safe to skip on a first reading.
- Pauli-Villars regulator. The authors regularise with a heavy field of opposite statistics and positive mass. Other regulators shift the answer by local terms. Safe to skip.
- "Nonuniversal factors". Equalities hold up to terms removable by local counterterms, such as vacuum energy. Safe to skip.
- Line bundle language. Dai and Freed treat exp(−iπη) as a section of a determinant line bundle. The authors avoid this when D<sub>W</sub> generically has no zero-modes. Safe to skip.
- Pin and unorientable cases. The derivation allows them, and they matter for the examples in section 4. Safe to skip at first.

## One next step

Open the paper at section 2.1 and read from eqn. (2.6) to eqn. (2.13). Watch one partition function split into a boundary factor and a bulk factor.
