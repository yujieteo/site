source: https://arxiv.org/pdf/alg-geom/9202022
slogan: The polylogarithms fit into one matrix with rational monodromy, so a family of old power series becomes a variation of mixed Hodge structure.
basis: the introduction and the main theorem statements

## Before you start

This is a 48-page survey that starts with a power series from 1768 and ends with motivic path spaces. The likely feeling is overwhelm at the slope: each section asks for a little more, and you may dread the page where you fall off. Falling off is allowed, and the dread makes sense. If you want to see what a variation of mixed Hodge structure is in one worked example, Sections 2 and 3 give it with matrices you can check by hand. Enjoy those first. The later sections can wait for the day you want them.

## The story

The polylogarithm ln<sub>k</sub>(x) = Σ x<sup>n</sup>/n<sup>k</sup> converges in the unit disc and continues to a multivalued function on ℂ − {0, 1}. People expected it to describe regulators, the maps from algebraic K-theory to Deligne cohomology, just as log describes the first one. Multivaluedness blocks this: a regulator needs one value. Hain's exposition turns the obstacle into the structure. Put 1, ln<sub>1</sub>, …, ln<sub>n</sub> and powers of log into one upper triangular matrix Λ(x). It solves a first-order linear differential equation, and going round 0 or 1 multiplies it by a rational matrix. So the rows span a local system over ℚ. Add two filtrations and it is a variation of mixed Hodge structure. Single-valued cousins such as the Bloch-Wigner function then give real regulators.

## Main definitions

**Polylogarithm.** ln<sub>k</sub>(x) = Σ<sub>n ≥ 1</sub> x<sup>n</sup>/n<sup>k</sup> for |x| &lt; 1, so ln<sub>1</sub>(x) = −log(1 − x). For k ≥ 2, ln<sub>k</sub>(x) = ∫<sub>0</sub><sup>x</sup> ln<sub>k−1</sub>(z) dz/z, which continues it to ℂ − {0, 1}.

**Polylogarithm local system.** Let ω<sub>0</sub> = dz/z and ω<sub>1</sub> = dz/(1 − z), and let ω be the (n+1) × (n+1) matrix of 1-forms with ω<sub>1</sub> in the first slot above the diagonal and ω<sub>0</sub> in the others. The n-th polylogarithm local system V is the ℚ-span of the rows of the fundamental solution Λ(x) of dλ = λω.
- First row of Λ: 1, ln<sub>1</sub> x, …, ln<sub>n</sub> x.
- Other rows: row j is (2πi)<sup>j</sup> times powers of log x divided by factorials.

**Bloch-Wigner function.** D<sub>2</sub>(x) = Im ln<sub>2</sub>(x) + log|x| · arg(1 − x). It is single-valued and real analytic on ℂ − {0, 1}, and extends continuously to ℙ<sup>1</sup> with value 0 at 0, 1 and ∞.

**Tate variation of mixed Hodge structure.** A good variation of mixed Hodge structure over a smooth variety whose weight graded quotients are constant, of even weight, with the piece of weight 2p of type (p, p).

## Main results

**Theorem (monodromy; Proposition 2.2 and Corollary 2.4).** Let σ<sub>0</sub> and σ<sub>1</sub> be loops based at 1/2 around 0 and 1. Continuation along σ<sub>0</sub> fixes every ln<sub>k</sub> and sends log x to log x + 2πi. Continuation along σ<sub>1</sub> fixes log x and sends ln<sub>k</sub> x to ln<sub>k</sub> x − (2πi/(k−1)!) log<sup>k−1</sup> x. So the monodromy representation of Λ takes values in GL<sub>n+1</sub>(ℚ). The paper credits the computation to Ramakrishnan.
- Step 1: induct on k using the integral formula for ln<sub>k+1</sub>.
- Step 2: shrink the loop around 1 and use that ln<sub>k</sub> is bounded near 1 for k > 1.

**Theorem (volume and the five-term relation; Theorem 3.1 and Corollary 3.3).** The ideal tetrahedron in hyperbolic 3-space with vertices z, 1, 0, ∞ has volume D<sub>2</sub>(z). Hence, for distinct points y, x, 1, 0, ∞ of ℙ<sup>1</sup>, D<sub>2</sub>(x) − D<sub>2</sub>(y) + D<sub>2</sub>(y/x) − D<sub>2</sub>((1−y)/(1−x)) + D<sub>2</sub>((1−y<sup>−1</sup>)/(1−x<sup>−1</sup>)) = 0.
- Why: the ideal polyhedron on five vertices splits into tetrahedra in two ways, as three pieces or as two.

**Theorem (second regulator; Theorem 4.2).** The function D<sub>2</sub> defines a class in H<sup>3</sup> of GL<sub>2</sub>(ℂ) as a discrete group, with real coefficients. The map K<sub>3</sub>(ℂ) → ℂ/ℝ(2) defined by iD<sub>2</sub> equals the Beilinson regulator, and that equals half the Borel regulator. The proof is a sketch that assembles results of Bloch, Wigner, Suslin, Dupont and others.

**Theorem (variation of mixed Hodge structure; Theorem 7.1).** The n-th polylogarithm local system underlies a good variation of mixed Hodge structure over ℂ − {0, 1}, with weight graded quotients canonically ℚ, ℚ(1), …, ℚ(n). So it is a Tate variation.
- Limit at 1 (Theorem 7.2): the limit mixed Hodge structure at the tangent vector −∂/∂z at 1 has first rational vector (1, 0, ζ(2), …, ζ(n)).
- Motivic form (Theorem 11.2): the variation is a quotient of the canonical variation on path spaces of ℂ − {0, 1}, based at the tangent vector ∂/∂z at 0.

## Note, then ignore

- Notation ln<sub>k</sub>. Hain writes ln<sub>k</sub> for what most authors call Li<sub>k</sub>. It is not a natural logarithm. Safe to skip on a first reading.
- Λ(k). The symbol means the subgroup (2πi)<sup>k</sup>Λ of ℂ, and also the Hodge structure of type (−k, −k) on it. Both uses appear without warning. Safe to skip.
- Principal branch. Statements about Λ(x) refer to the branch on the disc |x − 1/2| &lt; 1/2. This fixes signs in the monodromy. Safe to skip.
- Zagier's conjecture. The introduction describes hoped-for links between K-theory of fields and functional equations of D<sub>k</sub>. These are stated as beliefs, not results. Safe to skip.
- Tangential base points. Limits at 0 and 1 are taken along a tangent vector because the fibre there does not exist. Safe to skip until Section 7.

## One next step

Open the paper at Section 2 and read Proposition 2.2 with the two matrices M(σ<sub>0</sub>) and M(σ<sub>1</sub>).
