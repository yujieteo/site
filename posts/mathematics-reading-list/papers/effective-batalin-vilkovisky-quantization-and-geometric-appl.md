source: https://arxiv.org/pdf/1709.00669
slogan: Smooth out the singular kernel, demand one master equation at every scale, and quantising a field theory becomes solving an equation in a known algebra.
basis: the introduction and the main theorem statements

## Before you start

This note is 18 pages, but it touches index theory, vertex algebras and mirror symmetry in turn. That breadth can raise a fear of being exposed: three fields, and you may know none of them well. The fear is allowed, and nothing here asks you to cure it. If you have wanted to see Feynman graphs do honest geometry, Section 2 shows the whole mechanism in finite dimensions. Enjoy that toy model first. The applications can wait.

## The story

Physicists want to integrate e<sup>S/ħ</sup> over an infinite-dimensional space of fields. No such integral exists. The Batalin-Vilkovisky (BV) approach replaces integration by cohomology: an operator Δ plays the role of the de Rham differential, and a "closed" integrand is one that satisfies the quantum master equation. In finite dimensions this is ordinary calculus in disguise. In field theory a new block appears. The operator Δ contracts with a kernel that is a δ-function, and two distributions cannot be paired. Costello's idea, which Li explains, is to replace the δ-function by a smooth kernel in the same cohomology class. Each smooth choice gives an honest BV algebra, and a sum over Feynman graphs carries solutions from one choice to another. A quantum theory is then a compatible family of solutions. In three examples the family is governed by a familiar algebra: Weyl algebras, vertex algebras, integrable hierarchies.

## Main definitions

**Differential BV algebra.** A triple (A, Q, Δ). A is a ℤ-graded commutative algebra. Q is a derivation of degree 1 with Q<sup>2</sup> = 0. Δ is a second-order operator of degree 1 with Δ<sup>2</sup> = 0 and [Q, Δ] = 0. The BV bracket {a, b} measures how far Δ is from being a derivation.
- Example: polyvector fields on a manifold X with a volume form, Q = 0 and Δ the divergence operator.

**Quantum master equation (QME).** An element I = I<sub>0</sub> + I<sub>1</sub>ħ + … of degree 0 in A[[ħ]] satisfies the QME if (Q + ħΔ)e<sup>I/ħ</sup> = 0. Equivalently QI + ħΔI + ½{I, I} = 0.
- Classical limit: I<sub>0</sub> satisfies QI<sub>0</sub> + ½{I<sub>0</sub>, I<sub>0</sub>} = 0, the classical master equation.

**Homotopic renormalisation group flow.** Let K and K<sub>P</sub> = K + Q(P) be two BV kernels, with P of degree 0 in Sym<sup>2</sup>(V). The flow W(P, −) is defined by e<sup>W(P, I)/ħ</sup> = e<sup>ħ∂<sub>P</sub></sup> e<sup>I/ħ</sup>, where ∂<sub>P</sub> contracts with P.
- Concretely, W(P, I) is the sum over connected Feynman graphs with propagator P and vertices I, weighted by ħ<sup>genus</sup> and divided by the order of the automorphism group.

**Effective solution of the QME.** A choice of I[r] in O(E)[[ħ]] for each smooth kernel K<sub>r</sub> homologous to the δ-function kernel K<sub>0</sub>. Each I[r] satisfies the QME for Δ<sub>K<sub>r</sub></sub>, and any two are related by the flow.

## Main results

**Lemma (flow intertwines BV operators; Lemma 2.6 and Corollary 2.8).** On O(V)[[ħ]] one has (Q + ħΔ<sub>K<sub>P</sub></sub>) e<sup>ħ∂<sub>P</sub></sup> = e<sup>ħ∂<sub>P</sub></sup> (Q + ħΔ<sub>K</sub>). So if I is at least cubic modulo ħ and solves the QME for K, then W(P, I) solves it for K<sub>P</sub>.
- Step 1: check that [Q, ∂<sub>P</sub>] = Δ<sub>K</sub> − Δ<sub>K<sub>P</sub></sub>.
- Step 2: the cubic condition makes the infinite graph sum well defined.

**Theorem (one dimension gives the Weyl algebra; Theorem 3.1, quoted from Grady, Li and Li).** Take fields Ω<sup>•</sup>(S<sup>1</sup>) ⊗ V with V a graded symplectic vector space, and I in O<sup>+</sup>(V) of degree 1. The limit of W(P<sub>ε</sub><sup>L</sup>, Î) as ε → 0 exists. The resulting family is an effective solution of the QME if and only if [I, I]<sub>⋆</sub> = 0, where ⋆ is the Moyal-Weyl product.

**Theorem (Fedosov quantisation and the index; Theorem 3.2).** On a symplectic manifold X, effective solutions of the QME for the theory near constant maps S<sup>1</sup> → X correspond to Fedosov's abelian connections on the Weyl bundle. Local quantum observables form Fedosov's deformation quantisation. Li refers to the original paper for the exact meaning of each term.
- Consequence: with a localisation computation, the BV integral of 1 equals ∫<sub>X</sub> e<sup>−ω<sub>ħ</sub>/ħ</sup> Â(X). This is the simplest algebraic index theorem.

**Theorem (two dimensions gives a vertex algebra; Theorem 3.4, quoted from an earlier paper).** For a chiral deformation I = ∫ d<sup>2</sup>z L<sup>hol</sup> of a free conformal field theory on an elliptic curve, the theory is UV-finite. Effective solutions of the QME correspond to the equation δ∮L<sup>hol</sup> + (1/2ħ)[∮L<sup>hol</sup>, ∮L<sup>hol</sup>] = 0 in the Lie algebra of modes of the vertex algebra.
- Application: this solves the quantum B-model (BCOV theory) on elliptic curves in the stationary sector.

## Note, then ignore

- Koszul signs and shifts. Everything is ℤ-graded, V[n] shifts degrees, and commutators are graded. The conventions are listed once on page 3. Safe to skip on a first reading.
- Degenerate kernels. Remark 2.5 notes that only the kernel K matters, not the symplectic form, so K may be degenerate. BCOV theory needs this. Safe to skip until Section 3.3.
- Heat kernel choice. Remark 2.12 picks smooth kernels from a heat operator with a length scale L. It is one convenient choice among many. Safe to skip.
- Section 3.4 is a proposal. The link from the master equation to integrable hierarchies on Calabi-Yau geometries is put forward, not proved in general. Safe to skip.
- Proofs are elsewhere. This is an expanded talk. The theorems in Section 3 are quoted from the original papers. Safe to accept on a first reading.

## One next step

Open the paper at page 6 and read only Example 2.4, where the BV algebra of a polynomial f gives back the Milnor ring.
