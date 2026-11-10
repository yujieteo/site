source: https://arxiv.org/pdf/2006.12565
slogan: The dilogarithm is a Chern-Simons invariant of flat line bundles on a torus, so its five-term relation becomes a picture of a link.
basis: the introduction and the main theorem statements

## Before you start

The paper is only 25 pages, but it speaks field theory: bordism categories, super lines, spin structures, differential cohomology. If you do not know that language, you may feel shut out, as if the dilogarithm you know had been moved behind a locked door. That is a reasonable reaction to the vocabulary. The pay-off is a reason why the dilogarithm has its odd branches and its five-term identity. Sections 4 and 5 need only the stated properties of the theory. Go there for the fun of it, and leave the appendix alone.

## The story

The dilogarithm Li<sub>2</sub>(z) = Σ z<sup>n</sup>/n<sup>2</sup> has awkward features. It is many-valued, its natural home is a cover of the sphere minus three points, and it obeys a five-term relation that is easy to check and hard to explain. Freed and Neitzke found a geometric source for all three. Take the torus T and a flat ℂ<sup>×</sup>-connection on it with holonomies μ<sub>1</sub> and μ<sub>2</sub>. Spin Chern-Simons theory assigns a complex line to it. Over the curve μ<sub>1</sub> + μ<sub>2</sub> = 1 these lines form a flat bundle with trivial holonomy, so it has a flat section. Choosing logarithms u<sub>1</sub>, u<sub>2</sub> of the holonomies gives a second trivialisation. The ratio of the two is a function, and its logarithm is the dilogarithm. Identities then come from maps and 3-manifolds.

## Main definitions

**Chern-Simons invariant F.** For a ℂ<sup>×</sup>-bundle with connection Θ and curvature Ω on a closed oriented 3-manifold X, with a section s, F(X; Θ) = exp(2πi ∫<sub>X</sub> s\*α), where α = −(1/4π<sup>2</sup>) Θ ∧ Ω. It does not depend on s.
- On a surface: a closed oriented 2-manifold with connection gets a complex line, and a 3-manifold with that boundary gives an element of the line (Theorem 2.13).

**Spin Chern-Simons theory S.** On spin manifolds there is a refinement S with S<sup>⊗2</sup> ≅ F (Theorem 3.5). It takes values in ℤ/2-graded lines.
- Source of the square root: on a closed spin 4-manifold, c<sub>1</sub>(P)<sup>2</sup> is even.

**The curve and its cover.** M<sub>T</sub> = (ℂ<sup>×</sup>)<sup>2</sup> is the space of flat ℂ<sup>×</sup>-connections on T. M′<sub>T</sub> is the curve μ<sub>1</sub> + μ<sub>2</sub> = 1, which is ℂℙ<sup>1</sup> minus {0, 1, ∞} via z = μ<sub>1</sub>. Its ℤ<sup>2</sup>-cover M̂′<sub>T</sub> is the set of (u<sub>1</sub>, u<sub>2</sub>) in ℂ<sup>2</sup> with e<sup>u<sub>1</sub></sup> + e<sup>u<sub>2</sub></sup> = 1.

**Enhanced Rogers dilogarithm.** The function Li<sub>2</sub>(z) + ½ log(z) log(1 − z) with u<sub>1</sub> = log z and u<sub>2</sub> = log(1 − z). It is well defined on M̂′<sub>T</sub> with values in ℂ/ℤ(2), where ℤ(2) = 4π<sup>2</sup>ℤ.

## Main results

**Theorem (the construction; Proposition 4.15 and Theorem 4.36).** Let L′ → M′<sub>T</sub> be the spin Chern-Simons line bundle of the universal flat connection, for the spin structure on T that bounds along both coordinate loops. Then L′ is flat with trivial holonomy. Let φ be the ratio of the trivialisation from (u<sub>1</sub>, u<sub>2</sub>) to a flat section, and write φ = exp(L/2πi). Then L equals the enhanced Rogers dilogarithm up to an additive constant.
- Step 1: compute the connection form in the (u<sub>1</sub>, u<sub>2</sub>) trivialisation. This gives dL = (u<sub>1</sub> du<sub>2</sub> − u<sub>2</sub> du<sub>1</sub>)/2.
- Step 2: differentiate the Rogers function and get the same 1-form.

**Theorem (branches; Theorem 5.1).** For integers n<sub>1</sub>, n<sub>2</sub>, L(u<sub>1</sub> + 2πi n<sub>1</sub>, u<sub>2</sub> + 2πi n<sub>2</sub>) = L(u<sub>1</sub>, u<sub>2</sub>) + πi(n<sub>1</sub>u<sub>2</sub> − n<sub>2</sub>u<sub>1</sub>) + 2π<sup>2</sup>n<sub>1</sub>n<sub>2</sub> modulo ℤ(2).
- Step 1: a deck transformation is a gauge transformation of the trivialisation, and the middle term is its Chern-Simons cost.
- Step 2: the last term is the quadratic form of the spin structure, n<sub>1</sub>n<sub>2</sub> mod 2.

**Theorem (reflection; Theorem 5.6).** L(u<sub>1</sub>, u<sub>2</sub>) + L(u<sub>2</sub>, u<sub>1</sub>) is constant.
- Why: swapping the two circles of T reverses orientation, and that sends the line bundle to its inverse.

**Theorem (five-term relation; Theorem 5.12).** The sum L(u<sub>1</sub>, v<sub>1</sub>) + ... + L(u<sub>5</sub>, v<sub>5</sub>) is constant over points of M̂′<sub>T</sub> with v<sub>i</sub> = u<sub>i−1</sub> + u<sub>i+1</sub>, indices mod 5.
- Step 1: let X be the 3-sphere minus a tubular neighbourhood of a certain 5-component link. Its boundary is five tori, and flat connections on X satisfy the constraint by Stokes' theorem.
- Step 2: the invariant of X is a flat section of the product of the five line bundles, and comparing it with the five trivialisations gives the relation.

## Note, then ignore

- Sign of the holonomy. The authors define holonomy as the exponential of minus the integral of the connection form, so that dL matches the classical formula. Safe to skip on a first reading.
- Additive constant. L is fixed only up to a constant, the choice of flat section. One choice makes the five-term sum zero (Remark 5.18). Safe to skip.
- Other spin structures. The three other spin structures on T, with matching curves, give variants of the function (Remark 4.29). The identity for L(z) + L(1/z) needs them. Safe to skip.
- Families and germs. The bordism category really uses germs of 3-manifolds and smooth families. A footnote says so and the text simplifies. Safe to skip.
- Appendix A. It proves the properties of S with differential cohomology. Sections 4 and 5 use only the statements. Safe to skip.

## One next step

Open the paper at page 16, look at Figure 1 (the five-component link), and read the first paragraph of the proof of Theorem 5.12 beside it.
