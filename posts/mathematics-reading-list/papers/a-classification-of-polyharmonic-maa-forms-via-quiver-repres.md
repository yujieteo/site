source: https://arxiv.org/pdf/2207.02278
slogan: Every polyharmonic Maaß form generates one of ten kinds of Harish-Chandra module, and small quiver diagrams make the list visible.
basis: the introduction and the main theorem statements

## Before you start

This paper asks you to hold three languages at once: Maaß forms, (𝔤, K)-modules for SL<sub>2</sub>(ℝ), and quiver representations. The likely feeling is a small dread of not knowing one of the three, and of being found out on page 5. Nothing is wrong with that feeling. You do not need to clear it before reading. The reward is a way of seeing which differential equations a non-holomorphic form satisfies, as a diagram of dots and arrows. Read the two-page introduction for the picture, and let the rest be optional.

## The story

Harmonic weak Maaß forms are killed by the weight k Laplacian. Bringmann and Kudla sorted them by representation theory: pull the form back to SL<sub>2</sub>(ℝ), let the Lie algebra act, and ask which Harish-Chandra module appears. They found nine cases. Their method used the fact that each K-type occurs at most once, so the raising and lowering maps are scalars. Polyharmonic forms are killed only by a power of the Laplacian, and the model example is log(y<sup>12</sup>|η(τ)|<sup>48</sup>) from the Kronecker limit formula. Now K-types repeat, and scalars become matrices. The authors' idea is to translate the modules into representations of two small quivers. The representations that come from a form turn out to be cyclic, and cyclic ones are few. This gives ten cases. The authors then build a form for each case.

## Main definitions

**Polyharmonic weak Maaß form (Definition 3.1).** Let Γ ⊂ SL<sub>2</sub>(ℤ) have finite index and let ρ be a finite-dimensional representation of Γ. A smooth f on the upper half plane with values in the space of ρ has weight k ∈ ℤ and depth d ≥ 0 if f|<sub>k</sub>γ = ρ(γ)f, Δ<sub>k</sub><sup>d+1</sup>f = 0, and f grows at most like exp(ay) at every cusp.
- Laplacian: Δ<sub>k</sub> = −R<sub>k−2</sub>L<sub>k</sub>, with R the raising and L the lowering operator.
- Exact depth d: also Δ<sub>k</sub><sup>d</sup>f ≠ 0. Depth 0 is the harmonic case.

**Harish-Chandra module of f.** Pull f back to a function on SL<sub>2</sub>(ℝ) and take the (𝔤, K)-module it generates under the complexified Lie algebra 𝔰𝔩<sub>2</sub>(ℂ). Informally, this module records every SL<sub>2</sub>(ℝ)-covariant differential equation that f satisfies.

**Cyclic quiver and Gelfand quiver.** The cyclic quiver has two vertices − and + and one arrow each way. The Gelfand quiver has three vertices −, ∗, +, arrows in both directions between ∗ and each of the others, and the relation that the two loops at ∗ are equal.
- A representation puts a vector space at each vertex and a linear map on each arrow.
- It is cyclic if one vector at one vertex generates it.

## Main results

**Theorem (modules are quiver representations; Proposition 1.6 and Theorem 1.9).** Fix an integer l ≥ 0 and consider Harish-Chandra modules on which the Casimir element acts with generalised eigenvalue l<sup>2</sup> − 1. For l = 0 this category is equivalent to finite-dimensional nilpotent representations of the cyclic quiver. For l > 0 it is equivalent to those of the Gelfand quiver.
- Step 1: away from the weights ±l (shifted by one), the raising and lowering maps are isomorphisms, so only two or three weight spaces carry information.
- Step 2: those spaces and the maps between them are the quiver representation.

**Theorem (forms give cyclic representations; Theorem 3.7).** For a non-zero polyharmonic weak Maaß form f of exact depth d, the quiver representation of its Harish-Chandra module is cyclic. So the module is indecomposable. Cyclic representations of the Gelfand quiver are determined by their dimension vector (Theorem 2.5).

**Theorem (Classification A).** The Harish-Chandra modules of weight k forms of exact depth d fall into ten cases: Ia to Id for k &lt; 1, IIa and IIb for k = 1, and IIIa to IIId for k > 1. The case is read off from whether certain derivatives of f vanish.
- Case k = 1: test whether L<sub>k</sub>Δ<sub>k</sub><sup>d</sup>f = 0. Here the cyclic quiver applies.
- Case k > 1: test L<sub>k</sub>Δ<sub>k</sub><sup>d−1</sup>f, L<sub>k</sub>Δ<sub>k</sub><sup>d</sup>f and L<sub>k</sub><sup>k</sup>Δ<sub>k</sub><sup>d</sup>f. Each vanishing implies the next, so four cases remain. Case IIId occurs only for d > 0, and it is the one missing from the harmonic list.

**Theorem (all cases occur; Theorem C).** For every k ∈ ℤ and every case of the classification attached to that k, some vector-valued polyharmonic weak Maaß form of weight k realises it.
- Step 1: take a family f<sub>s</sub> with Δ<sub>k</sub>f<sub>s</sub> = s(1 − k − s)f<sub>s</sub> and use its Taylor coefficients in s, which are preimages under powers of Δ<sub>k</sub>.
- Step 2: shift the weight by multiplying with explicit vector-valued forms (Theorem 4.15).

## Note, then ignore

- Completed path algebras. The paper writes the quivers as matrix rings A and B over ℂ[[t]]. This is a convenient model of the same thing. Safe to skip on a first reading.
- "Weak". The word allows exponential growth at cusps, where plain Maaß forms grow polynomially. Safe to skip.
- Vector-valued forms. Theorem C realises the cases with vector-valued forms in general, because the weight-shifting method multiplies by vector-valued factors. Safe to skip.
- Sign of the Laplacian. Here Δ<sub>k</sub> = −R<sub>k−2</sub>L<sub>k</sub>. Other papers differ by a sign or a shift. Safe to skip.
- The computer implementation. It checks coefficients in each case and is not needed to follow the proof. Safe to skip.

## One next step

Open the paper and read only Classification A, Example B and the paragraph after them on page 3.
