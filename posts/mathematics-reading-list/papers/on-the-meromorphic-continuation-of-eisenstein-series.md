source: https://arxiv.org/pdf/1911.02342
slogan: An Eisenstein series is the unique solution of a linear system that varies analytically, so Cramer's rule continues it to the whole parameter space.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling is intimidation by reputation. Continuation of Eisenstein series carries the names Selberg and Langlands, and Section 2 opens with a page of parabolic subgroups and adelic notation. It is fine to feel small in front of that. You do not have to push through it. If you want to see why this continuation is the soft part of the theory, the SL<sub>2</sub> section shows it in three pages. Enjoy that example first. The general case can wait or never come.

## The story

An Eisenstein series is a sum over cosets of a discrete group. It converges only for a spectral parameter far out in a cone. Spectral theory needs it on the imaginary axis, so it must be continued. Langlands did this first for series built from cusp forms, then reached the general case through a hard study of residues. Franke later covered every automorphic form.

Bernstein and Lapid turn the problem round. They write down linear equations, depending analytically on the parameter, which the Eisenstein series satisfies. In the region of convergence it is the only solution. A general principle then says that the unique solution of such a system is meromorphic everywhere. For SL<sub>2</sub>(ℤ) the equations say three things: ψ is an eigenfunction of convolution operators, its constant term is y<sup>s+1/2</sup> plus a multiple of y<sup>−s+1/2</sup>, and it is orthogonal to cusp forms.

## Main definitions

**Eisenstein series.** For a standard parabolic P = MU of a reductive group G over a global field F, an automorphic form φ on the quotient attached to P, and a character λ of the Levi M, put E(g, φ, λ) = Σ φ<sub>λ</sub>(γg) over γ ∈ P(F)\G(F). Here φ<sub>λ</sub> is φ twisted by λ. The sum converges when Re λ is far inside the positive Weyl chamber.

**Analytic system of linear equations.** A family Ξ(s) of equations μ<sub>i,s</sub>(v) = c<sub>i</sub>(s) on a vector v in a locally convex space E. The operators μ<sub>i,s</sub> and the right-hand sides c<sub>i</sub>(s) depend holomorphically on s in a complex manifold.

**Locally of finite type.** Near every point s<sub>0</sub>, all solutions of Ξ(s) lie in the image of a holomorphic family of injective maps from one fixed finite-dimensional space into E.
- Tool: Fredholm theory. If an operator is left-invertible modulo compact operators at s<sub>0</sub>, its kernel is of finite type near s<sub>0</sub>.

**Intertwining operator M(w, λ).** For w carrying the Levi of P to the Levi of Q, an integral over part of the unipotent radical of Q that sends automorphic forms for P to automorphic forms for Q. It gives the constant terms of E.

## Main results

**Theorem (principle of meromorphic continuation; Section 3.3).** Let Ξ(s) be an analytic family of linear systems, locally of finite type, on a connected manifold. Suppose the set where Ξ(s) has exactly one solution v(s) has non-empty interior. Then that set is open, its complement is analytic, v is holomorphic on it, and v is meromorphic on the whole manifold.
- Step 1: local finiteness reduces the system to finitely many unknowns near each point.
- Step 2: Cramer's rule writes the solution as a ratio of holomorphic determinants.

**Theorem (continuation of Eisenstein series; Section 2.3).** Let φ be any automorphic form for P, not necessarily cuspidal. Over a number field, E(φ, λ) extends to a meromorphic function of λ with values in smooth functions of uniform moderate growth, and it is an automorphic form wherever it is regular. Over a function field, a polynomial multiple of E(φ, λ) is a polynomial in λ. The operators M(w, λ) continue too, and E(M(w, λ)φ, wλ) = E(φ, λ).
- Step 1 (uniqueness): an automorphic form is determined by its leading cuspidal components, so deep in the convergent region E is the only solution.
- Step 2 (local finiteness): a refinement of Harish-Chandra's finiteness theorem, proved with Fredholm theory.

**Claim (worked case SL<sub>2</sub>(ℤ); Section 5).** For Re s > 1/2 the classical series E(z; s) is the unique solution of the three sets of equations in the story. No truncation is needed. Continuation of E then gives continuation of the constant term coefficient m(s), a ratio of zeta and gamma values.

## Note, then ignore

- Adelic language. The paper works with G(F)\G(𝔸), but the authors say the method also covers non-arithmetic lattices. Safe to skip on a first reading.
- K-finiteness. The result is for K-finite automorphic forms. Smooth forms need other papers. Safe to skip.
- Finite order. The proof does not show that E has finite order as a meromorphic function of λ. Safe to skip.
- Topological vector spaces. Section 3 fixes what holomorphic means for functions with values in a locally convex space. The scalar intuition is enough at first. Safe to skip.
- Function fields. There an algebraic version of the principle applies and local finiteness is not needed. Safe to skip.

## One next step

Open the PDF at Section 5, "An example: SL2", and read only equations (5.2a) to (5.2c) and Claim 2 after them.
