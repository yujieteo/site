source: https://www.ihes.fr/~brown/ColombiaNotes7.pdf
slogan: Iterated integrals on the sphere minus three points are multiple polylogarithms, closed under taking primitives, so many Feynman integrals come out as zeta values.
basis: the introduction and the main theorem statements

## Before you start

The title may raise a fear of being too slow, because it joins two subjects and you may think you need both. You do not. The notes were written for a mixed room of mathematics and physics students, and the first five sections use only calculus on a path. It is fine to feel wary of the physics. If you want to see why numbers such as ζ(3) appear in particle physics, this is a short road there. Enjoy the first lecture first. The other 35 pages can wait.

## The story

Physicists compute Feynman amplitudes and keep finding the same numbers: values of the zeta function and their multi-index relatives. Nobody planned this. Brown's explanation starts with an old idea. Solve a linear differential equation by Picard's method and you get a sum of nested integrals. Chen turned these into a theory of iterated integrals along paths. On the simplest interesting space, the Riemann sphere minus 0, 1 and ∞, the iterated integrals are exactly the multiple polylogarithms, and their values at 1 are multiple zeta values. The key point is that this class of functions is closed under taking primitives. So if a Feynman integral can be done one variable at a time, staying inside the class, the answer must be a multiple zeta value. Section 7 says which graphs allow this.

## Main definitions

**Iterated integral.** Let γ : [0,1] → M be a piecewise smooth path and ω<sub>1</sub>, …, ω<sub>n</sub> be 1-forms on M with γ<sup>\*</sup>ω<sub>i</sub> = f<sub>i</sub>(t) dt. The iterated integral ∫<sub>γ</sub> ω<sub>1</sub>…ω<sub>n</sub> is the integral of f<sub>1</sub>(t<sub>1</sub>)…f<sub>n</sub>(t<sub>n</sub>) over the simplex 0 ≤ t<sub>1</sub> ≤ … ≤ t<sub>n</sub> ≤ 1 (Definition 2.1).
- It is a homotopy functional if its value depends only on the homotopy class of γ with fixed endpoints. Most iterated integrals are not.

**Multiple polylogarithm and multiple zeta value.** For positive integers n<sub>1</sub>, …, n<sub>r</sub>, Li<sub>n<sub>1</sub>,…,n<sub>r</sub></sub>(z) is the sum over 0 &lt; k<sub>1</sub> &lt; … &lt; k<sub>r</sub> of z<sup>k<sub>r</sub></sup> / (k<sub>1</sub><sup>n<sub>1</sub></sup> … k<sub>r</sub><sup>n<sub>r</sub></sup>). It converges for |z| &lt; 1 and continues to a multivalued function on ℂ∖{0, 1}. Its value at z = 1, for n<sub>r</sub> ≥ 2, is ζ(n<sub>1</sub>, …, n<sub>r</sub>).
- In words: one writes Li<sub>w</sub>(z) for a word w in two letters x<sub>0</sub>, x<sub>1</sub>, which stand for the forms dz/z and dz/(1−z).

**Graph polynomial and residue.** For a graph G with edge variables α<sub>e</sub>, the polynomial Ψ<sub>G</sub> is the sum over spanning trees T of the product of α<sub>e</sub> over edges not in T. For a primitively divergent G with N edges, the residue I<sub>G</sub> is the integral of dα<sub>1</sub>…dα<sub>N−1</sub> / Ψ<sub>G</sub><sup>2</sup> over [0, ∞]<sup>N−1</sup> with α<sub>N</sub> = 1.

## Main results

**Theorem (structure on ℂ∖{0,1}; Theorem 4.5).** The map w ↦ Li<sub>w</sub>(z) is an isomorphism from the shuffle algebra on words in x<sub>0</sub>, x<sub>1</sub> over ℂ to the homotopy invariant iterated integrals on ℂ∖{0, 1}. So every such integral is a linear combination of the Li<sub>w</sub>, and the Li<sub>w</sub> are linearly independent.
- Step 1: the Li<sub>w</sub> solve d Li<sub>x<sub>i</sub>w</sub> = ω<sub>i</sub> Li<sub>w</sub>, which packages into the KZ equation for a generating series.
- Step 2: the monodromy of that series is computed with the Drinfeld associator, whose coefficients are multiple zeta values (Proposition 4.3).

**Theorem (primitives; Theorem 4.6).** Let O = ℚ[z, 1/z, 1/(1−z)] and let L be the algebra of combinations of the Li<sub>w</sub>(z) with coefficients in O. Every element of L has a primitive in L, unique up to a constant, and L is the smallest extension of O with this property.

**Theorem (Chen; Theorems 6.4 and 6.7).** On a general manifold, the homotopy invariant iterated integrals of length at most n are described by the degree-zero part of the bar construction on a model of the de Rham complex. Chen's π<sub>1</sub>-de Rham theorem then identifies them, after tensoring with ℂ, with the dual of the group ring ℚ[π<sub>1</sub>(M, x)] cut off by a power of its augmentation ideal. This is stated loosely here. See Section 6.3 for the exact indices.

**Theorem (linear reducibility; Theorem 7.4).** If a graph G has vertex width at most 3, then G is linearly reducible. For such primitively divergent graphs the residue I<sub>G</sub> is a combination of multiple zeta values, or possibly of alternating sums.
- Step 1: integrate out one edge variable at a time. Most denominators that appear are Dodgson polynomials, which are linear in each variable.
- Step 2: Theorem 4.6 and its several-variable form (Theorem 6.14) supply the primitive at each stage.

## Note, then ignore

- Tangential base points. Section 2.5 explains how to integrate from a puncture such as 0, which is not in the space. It is needed for regularisation and is safe to skip on a first reading.
- Starred sections. Sections marked with a star (3.3, 4.3) are digressions. Safe to skip on a first reading.
- Conjectures on zeta values. Section 5 lists conjectures (algebraic independence of π, ζ(3), ζ(5), …, and Zagier's dimension conjecture) next to the Goncharov-Terasoma upper bound. They are context, not used later. Safe to skip on a first reading.
- No motives. The notes avoid mixed Tate motives on purpose, for reasons of space. Safe to skip on a first reading.
- The date. The lectures are from 2009, so the survey in Section 7 is not current. For example the zig-zag formula is called a conjecture there. Safe to skip on a first reading.

## One next step

Open the notes and read Section 2.1, "Picard integration", on pages 3 and 4. It shows where iterated integrals come from in about two minutes.
