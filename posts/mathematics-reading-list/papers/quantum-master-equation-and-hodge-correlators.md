source: https://arxiv.org/pdf/2404.09488
slogan: Goncharov's tree integrals on a punctured Riemann surface gain one-loop partners, and the enlarged series still obeys a single master equation.
basis: the introduction and the main theorem statements

## Before you start

This is a paper of about 60 pages that mixes two vocabularies: mixed Hodge structures and the Feynman-graph language of Chern–Simons perturbation theory. The feeling it tends to raise is being lost between two fields, at home in neither. That is a reasonable response to a paper that sits on a border. You do not need both languages to follow the plot. If you like the idea that multiple zeta values are tree-level terms of a field theory, this paper shows the next term. Read the introduction for the picture and let the rest wait.

## The story

Goncharov attached to a punctured Riemann surface X \ S a set of numbers called Hodge correlators. Each is an integral over configurations of points, with one Green function for every edge of a planar trivalent tree. They include polylogarithms and multiple zeta values. In a family of surfaces they assemble into a connection whose form G satisfies a Maurer–Cartan equation. That equation encodes Griffiths transversality for a variation of mixed Hodge structure. Physicists know this shape: it is the ℏ → 0 limit of the quantum master equation for the effective action of Chern–Simons theory. So trees ought to be only the start. The authors add graphs with one loop. Goncharov's Green functions do not extend smoothly to compactified configuration spaces, so the Stokes arguments need extra care. The result is a series S<sup>eff</sup> that satisfies the master equation with its ℏ term.

## Main definitions

**Hodge correlator.** For a compact Riemann surface X with a finite set S of punctures, a Hodge correlator is a complex number assigned to a cyclic word in H<sup>1</sup>(X; ℂ) and the punctures. It is a sum, over planar trivalent trees decorated by the word, of integrals of products of Green functions.

**Hodge correlator class and twistor connection.** For a family X → B with sections, the dual of the correlators gives a connection ∇ = d + G on a bundle over B × ℂ², where ℂ² is the twistor plane. The 1-form G takes values in a Lie algebra of cyclic words.
- On the twistor line: the restriction G′ satisfies dG′ + G′ ∧ G′ = 0.

**Graph complex.** A differential graded Lie algebra built from decorated uni-trivalent graphs, which may contain loops. It has a bracket [ , ] and a differential δ. It replaces the Lie algebra of cyclic words as the home of the coefficients.

**Effective action S<sup>eff</sup>.** S<sup>eff</sup> = S<sup>eff</sup><sub>tree</sub> + ℏ S<sup>eff</sup><sub>1-loop</sub> (display 5.3.67). Each term is a sum over connected uni-trivalent graphs Γ with external vertices, with zero loops or one loop, of the integral Z<sub>Γ</sub> divided by the number of automorphisms of Γ, times the dual graph.

## Main results

**Theorem (master equation; Theorem 5.3.16).** (1) S<sup>eff</sup> is a ℂ<sup>×</sup> × ℂ<sup>×</sup>-equivariant real connection 1-form with values in the graph differential graded Lie algebra. (2) Its restriction S<sup>eff</sup>′ to the twistor line satisfies (d ⊗ Id) S<sup>eff</sup>′ + ½ [S<sup>eff</sup>′, S<sup>eff</sup>′] + ℏ (Id ⊗ δ) S<sup>eff</sup>′ = 0, where d is the de Rham differential on the base and the twistor line.
- Step 1: an algebraic framework for a formal effective action turns boundary relations among graph integrals into this equation.
- Step 2: Stokes' theorem on compactified configuration spaces supplies those boundary relations.

**Theorem (trees recover Goncharov; Theorem 6.1.1).** An explicit map F from cyclic words to graphs identifies G with the pullback of the tree part: G = (Id ⊗ F)<sup>∗</sup> S<sup>eff</sup><sub>tree</sub>.

**Proposition (KZ connection; Proposition 6.3.1).** For the universal family of genus 0 curves with n marked points and a tangent vector at one of them, the restriction of S<sup>eff</sup>′ at the twistor parameters u = 0 and u = 1 equals its tree part and equals G′. For four points this restriction is, up to sign and the adjoint map, the formal Knizhnik–Zamolodchikov 1-form or its anti-holomorphic version. The introduction phrases this as a master homotopy between S<sup>eff</sup>′ and the formal KZ form.

**Claim (higher loops; Appendix A.5).** For two or more loops the authors expect that renormalisation is needed to get well-defined integrals. The paper proves nothing there.

## Note, then ignore

- Tate twist on the tree part. The definition of S<sup>eff</sup> twists the tree terms by ℝ(−1) so that the whole series is real. The one-loop terms need no twist. Safe to skip on a first reading.
- Non-smooth propagators. Goncharov's Green functions do not extend smoothly to the Axelrod–Singer compactification. Section 3 exists to handle this. Safe to skip.
- Orientation of graphs. Each graph carries an orientation torsor to fix signs in the graph complex. Safe to skip.
- Normalisation of Green functions. The paper follows Goncharov's normalisation, which differs from Arakelov's. Safe to skip.
- Arithmetic topology motive. The authors hope S<sup>eff</sup> models loop analogues of Milnor invariants for Galois actions. This is motivation and is not used in the proofs. Safe to skip.

## One next step

Open the paper at page 3 and compare equations (1.0.1), (1.0.3) and (1.0.4): the last is the first with one added ℏ term.
