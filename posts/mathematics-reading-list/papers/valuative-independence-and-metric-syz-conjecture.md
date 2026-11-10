source: https://arxiv.org/pdf/2605.00516
slogan: A basis of sections that behaves like monomials on a torus forces degenerating Calabi–Yau metrics to carry special Lagrangian torus fibrations.
basis: the introduction and the main theorem statements

## Before you start

This paper sits where three hard subjects meet: Calabi–Yau metrics, Berkovich spaces and optimal transport. The likely feeling is that you are not allowed in without all three. You can feel that and still read. The introduction is four pages and states the whole logic as a chain of implications. If you want to see how a problem about a partial differential equation turns into a problem about a basis of a vector space, that chain is the reward. Enjoy the chain. Leave the proofs for another day.

## The story

Take a family of compact Calabi–Yau manifolds X<sub>t</sub> that degenerates as much as possible when t → 0. The metric SYZ conjecture says that, for small t, most of X<sub>t</sub> is fibred by special Lagrangian tori. Proving this directly means controlling solutions of a complex Monge–Ampère equation, which is hard. Earlier work moved the problem to the limit. Over the field K = ℂ((t)) the family has a Berkovich space, and inside it a simplicial complex called the essential skeleton. A limiting potential lives there. If that potential depends only on the skeleton coordinates near almost every point, the conjecture follows. Li's idea is that an algebraic input gives this. Suppose the sections of the polarising line bundle have a basis that behaves like monomials on a torus. Then the Calabi–Yau looks toric enough for the potential to factor.

## Main definitions

**Polarised maximal degeneration.** A meromorphic family X → D\* of compact Calabi–Yau n-folds over the punctured disc, with a relatively ample line bundle L, whose essential skeleton Sk(X) has the top dimension n. The skeleton is a simplicial complex inside the Berkovich space of X over K.
- The normalised Calabi–Yau measures on X<sub>t</sub> converge to Lebesgue measure μ<sub>0</sub> on Sk(X).

**Non-archimedean Calabi–Yau potential φ<sub>0</sub>.** The continuous semipositive potential on the Berkovich space, unique up to a constant, that solves the non-archimedean Monge–Ampère equation MA(φ<sub>0</sub>) = (L<sup>n</sup>) μ<sub>0</sub>. It exists by a theorem of Boucksom, Favre and Jonsson.

**Weak comparison property (Definition 1.2).** A model of the family with simple normal crossings gives a retraction r from the Berkovich space to the dual complex of its central fibre. The property holds if there is an open set U ⊂ Sk(X) of full Lebesgue measure over which φ<sub>0</sub> factors through r.

**Valuative independence (Definition 1.5).** A K-basis {θ<sub>α</sub>} of H<sup>0</sup>(X<sub>K</sub>, lL) such that, for every point x of Sk(X) seen as a valuation, val<sub>x</sub>(Σ a<sub>α</sub>θ<sub>α</sub>) = min over α with a<sub>α</sub> ≠ 0 of (val(a<sub>α</sub>) + val<sub>x</sub>(θ<sub>α</sub>)).
- Meaning: no cancellation between basis elements, as with monomials on a torus.

## Main results

**Theorem (main theorem; Theorem 1.8).** Let X → D\* be a polarised maximal degeneration of compact Calabi–Yau manifolds with a semistable model. Assume that for every l ≥ 0 the K-vector space H<sup>0</sup>(X<sub>K</sub>, lL) has a basis satisfying valuative independence. Then the weak comparison property holds.
- Step 1 (Section 3): limits of l<sup>−1</sup> log |θ<sub>α</sub>| define a cost function c(x, p) on Sk(X) × B, where B is an auxiliary space built from Okounkov bodies.
- Step 2 (Section 4): certain bad sets have measure zero, so the potential factors through the retraction on a set of full measure.

**Theorem (comparison implies SYZ; Theorem 1.4, from the author's earlier work).** If the weak comparison property holds for some semistable model of a polarised maximal degeneration, then the metric SYZ conjecture holds for that family. That is, for each small δ > 0 and all small enough t, an open subset of X<sub>t</sub> of normalised measure at least 1 − δ carries a special Lagrangian T<sup>n</sup>-fibration.

**Theorem (general measures; Theorem 4.2).** Under the same basis assumption, let φ solve MA(φ) = (L<sup>n</sup>) μ for a probability measure μ on Sk(X) that is absolutely continuous with respect to Lebesgue measure. Then φ factors through the retraction over an open set of full μ-measure inside the n-dimensional open faces.
- Consequence (Corollary 4.3): on that set φ solves a real Monge–Ampère equation.

**Announced result (Blum–Liu; quoted as Theorem 1.6, not proved here).** For any polarised degeneration of smooth projective Calabi–Yau varieties over K, there is m<sub>0</sub> ≥ 1 such that H<sup>0</sup>(X<sub>K</sub>, m<sub>0</sub>lL) has a valuatively independent basis for all l. With Theorems 1.8 and 1.4 this would prove the metric SYZ conjecture for all polarised maximal degenerations.

## Note, then ignore

- Conditional status. The paper proves an implication. The full conjecture rests on the Blum–Liu work, which the paper cites as forthcoming. Keep this in mind, then skip on a first reading.
- Semistable model. A finite base change is needed to get one. It costs nothing for the conjecture. Safe to skip.
- m<sub>0</sub>L in place of L. Blum–Liu give a basis only for multiples of m<sub>0</sub>, so the main theorem is applied to m<sub>0</sub>L. Safe to skip.
- Two comparison properties. Definition 1.2 is close to, but not the same as, the property in the author's earlier paper. Section 2.7 explains the difference. Safe to skip.
- Trivialisations. Evaluating val<sub>x</sub> on a section needs a local trivialisation of L, and the condition does not depend on the choice. Safe to skip.

## One next step

Open the paper at Definition 1.5 on page 3 and check the formula on a toy case: two monomials on a torus, with x a monomial valuation.
