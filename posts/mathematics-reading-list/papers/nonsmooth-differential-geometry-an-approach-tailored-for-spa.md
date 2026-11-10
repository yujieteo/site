source: https://arxiv.org/pdf/1407.0809
slogan: Treat vector fields as modules over bounded functions, and a measure space with a Ricci lower bound gets a Hessian, covariant derivative and Ricci tensor.
basis: the abstract and introduction

## Before you start

This is 161 pages of functional analysis on spaces with no charts, and the likely feeling is overwhelm, with some worry that you lack the optimal transport background. Both are reasonable reactions to a text this size, and nothing needs to be done about them. If you have ever wanted to know what survives of Riemannian geometry when smoothness is taken away, the twelve-page introduction answers that by itself. Read it for the pleasure of watching familiar formulas come back. The other 149 pages can wait.

## The story

Spaces with Ricci curvature bounded below, the RCD spaces, arise as limits of Riemannian manifolds. They can be singular, and until this paper even the question "what is a tangent vector?" had no working answer on them. A curvature bound is a second order statement, so using it needs a calculus with Hessians. Gigli's idea is to stop looking for a tangent space at each point. On a manifold, the sections of a vector bundle form a module over the smooth functions. He keeps the module and drops the bundle. A vector field becomes an element of a Banach space that can be multiplied by bounded measurable functions and has a pointwise norm. Every metric measure space then has differentials and gradients of Sobolev functions. With a Ricci lower bound, Bochner's inequality supplies enough regular functions to define Hessians, covariant derivatives, exterior derivatives and a Ricci tensor.

## Main definitions

**L<sup>2</sup>(m)-normed module.** Let (M, d, m) be a complete separable metric space with a non-negative Radon measure. An L<sup>2</sup>(m)-normed module is a Banach space whose elements v can be multiplied by functions in L<sup>∞</sup>(m), with a pointwise norm |v| in L<sup>2</sup>(m) whose L<sup>2</sup> norm is the norm of v.
- Model case: the L<sup>2</sup> vector fields on a Riemannian or Finsler manifold.

**Cotangent and tangent module.** A Sobolev function f has a minimal weak upper gradient |Df|. The cotangent module L<sup>2</sup>(T\*M) is the completion of formal sums of pieces χ<sub>A</sub> df, with A Borel and f Sobolev, under the norm that makes |df| = |Df| almost everywhere. The tangent module L<sup>2</sup>(TM) is its dual as a module.
- On a smooth manifold these are the usual L<sup>2</sup> sections of T\*M and TM.

**Infinitesimally Hilbertian space.** A metric measure space is infinitesimally Hilbertian if the energy f ↦ ½∫|Df|<sup>2</sup> dm is a Dirichlet form. Then each Sobolev function has a unique gradient, the gradient is linear in f, and the tangent module has a pointwise scalar product that plays the part of the metric tensor.

**RCD(K, ∞) space.** An infinitesimally Hilbertian space that satisfies the Lott-Sturm-Villani condition "Ricci curvature at least K". No dimension bound is imposed.

## Main results

**Theorem (first order calculus; Sections 2.2 and 2.3, Theorem 2.3.18).** On every metric measure space as above, each Sobolev function f has a differential df in the cotangent module with |df| = |Df|. The differential is a closed operator and obeys locality, the chain rule and the Leibniz rule. For a test plan π, almost every curve at almost every time has a tangent vector whose norm is the metric speed.
- Step 1: build the cotangent module by completion, so that df exists by construction.
- Step 2: obtain vector fields by duality, and velocities of curves by pulling the module back along the evaluation map.

**Theorem (Hessian; Section 3.3).** On an RCD(K, ∞) space the space W<sup>2,2</sup>(M) of functions with a Hessian in L<sup>2</sup> is dense in W<sup>1,2</sup>(M). For test functions f the Hessian satisfies ∫|Hess f|<sup>2</sup><sub>HS</sub> dm ≤ ∫((Δf)<sup>2</sup> − K|∇f|<sup>2</sup>) dm, and the usual product and chain rules for Hessians hold.
- Step 1: define Hess f weakly, by the smooth formula that expresses Hess f(∇g<sub>1</sub>, ∇g<sub>2</sub>) through scalar products of gradients.
- Step 2: improve the Bochner inequality so that it contains the Hilbert-Schmidt norm of the Hessian, following Bakry and Savaré.

**Theorem (covariant and exterior derivatives; Sections 3.4 and 3.5).** On an RCD(K, ∞) space, Sobolev vector fields with a covariant derivative are dense in L<sup>2</sup>(TM), and the covariant derivative obeys the rules that single out the Levi-Civita connection. Sobolev differential forms have a closed exterior differential with d<sup>2</sup> = 0. This gives de Rham cohomology groups and a form of the Hodge theorem (Theorem 3.5.15).

**Theorem (Ricci curvature; Section 3.6).** For sufficiently regular vector fields X on an RCD(K, ∞) space, Bochner's identity defines a measure Ric(X, X), and Ric(X, X) ≥ K|X|<sup>2</sup> m. I read this statement in the introduction only, not in Section 3.6.

## Note, then ignore

- Almost everywhere only. Tensor fields are module elements, so they have no value at a single point. This is the price of the method. Safe to skip on a first reading.
- Not the blow-up tangent. The tangent module is unrelated in general to tangent spaces found as Gromov-Hausdorff limits of rescalings. The introduction says so plainly. Safe to skip.
- Finsler-like spaces. Without the infinitesimally Hilbertian hypothesis a gradient need not be unique or linear in f. This is why the hypothesis appears. Safe to skip.
- Weaker Hodge theory. Sobolev forms are not known to embed compactly in L<sup>2</sup> forms, so Mayer-Vietoris and the Hodge decomposition come out weaker than in the smooth case (Remark 3.5.10). Safe to skip.
- No geometry yet. The paper builds the language and says openly that geometric applications are left for later. Safe to skip.

## One next step

Open the paper at "Aim and key ideas" on page 2 and read only the first pillar, the paragraph that explains an L<sup>∞</sup>(m)-module by analogy with sections of a vector bundle.
