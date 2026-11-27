### Falling powers make polynomial differences and sums simple

**Remember:** Differences of falling powers copy the power rule, so sums telescope.

*True by definition.* MSC 39A70 (Difference operators), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The falling factorial (x)ₘ is the product x(x − 1)⋯(x − m + 1) for a positive integer m, with (x)₀ = 1. The forward difference of a function f is Δf(x) = f(x + 1) − f(x). Instead of usual powers xᵐ, one can use falling factorials to write polynomials.

**Problem.** For m ≥ 1, Δ(x)ₘ = m(x)ₘ₋₁. The sum of (k)ₘ for k = 0, …, n − 1 is (n)ₘ₊₁/(m + 1) for integers m ≥ 0 and n ≥ 1.

**How the definition helps.** The falling-factorial definition gives the difference rule because the two products share all but one factor. Factoring out (x)ₘ₋₁ leaves the difference (x + 1) − (x − m + 1) = m (our own calculation). Adding consecutive differences cancels the intermediate terms and gives the sum, since (0)ₘ₊₁ = 0. The difference of an ordinary power instead gives several terms by the binomial theorem. For general polynomial sums, the work moves into rewriting the polynomial in falling factorials (our own comparison).

**Wikipedia:** [Falling and rising factorials](https://en.wikipedia.org/wiki/Falling_and_rising_factorials). It says: “In this formula, the falling factorial (x)ₙ in the calculus of finite differences plays the role of xⁿ in differential calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Twisted Mahler residues decide whether a rational function is a twisted difference

**Remember:** Group poles by pth powers before checking for cancellation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)), 12H10. arXiv math.NT, math.CA. Level 4: research.

**Definition.** Fix integers p &gt; 1 and λ. Write a rational function f in partial fractions. Group its poles into classes whose members are related by repeated pth powers or pth roots. The λ-twisted Mahler discrete residues are built from the partial-fraction coefficients along these classes.

**Problem.** Let f be a rational function over the paper’s base field 𝕂. The question is whether f(x) equals p to the power λ times g(xᵖ), minus g(x), for some rational function g. Theorem 1.1 says this holds exactly when every λ-twisted Mahler discrete residue of f is zero.

**How the definition helps.** The residues turn an equation with an unknown rational function g into a finite list of tests on f. In our own explanation, the substitution x ↦ xᵖ moves poles only within a class, so g can cancel f only class by class. In our own account, one direction is direct, and the harder direction builds g when all residues vanish. The case λ = 0 is the untwisted Mahler summability problem from the authors’ earlier work.

**Paper or page:** [Twisted Mahler discrete residues](https://arxiv.org/abs/2308.16765v1). It says: “For λ ∈ ℤ, f(x) ∈ 𝕂(x) is λ-Mahler summable if and only if every λ-Mahler discrete residue of f is zero.”

**Sources:**

- [Carlos E. Arreche, Yi Zhang, Twisted Mahler discrete residues, arXiv:2308.16765v1 (2023). International Mathematics Research Notices IMRN 2024(23), 14259-14288, (2024)](https://arxiv.org/abs/2308.16765v1)

### Mahler discrete residues decide Mahler summability

**Remember:** All Mahler residues vanish exactly when f has the form g(xᵖ) − g(x).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A20 (Multiplicative and other generalized difference equations), 39A45. arXiv math.NT, math.CA. Level 4: research.

**Definition.** Fix an integer p &gt; 1. A rational function f(x) is Mahler summable if f(x) = g(xᵖ) − g(x) for some rational function g. Mahler discrete residues are vectors computed from f, one for each group of poles of f and each order k. Our own note: poles α and β share a group when α raised to pʳ equals β raised to pˢ for some r and s.

**Problem.** Decide whether a given rational function is Mahler summable. The paper shows that f is Mahler summable exactly when all its Mahler discrete residues are zero. Proposition 4.18 states this one component at a time.

**How the definition helps.** Our own reason: the residues turn a search for an unknown g into a check that some vectors are zero. Our own analogy: a rational function is the derivative of a rational function exactly when all its ordinary residues are zero. The abstract says that the paper extends known discrete residues to the Mahler case. Our own note: Chen and Singer introduced such residues for the shift case. What stays hard is to find the right grouping of poles, so that the residues are complete (our own).

**Paper or page:** [Mahler discrete residues and summability for rational functions](https://arxiv.org/abs/2202.09805). It says: “We construct Mahler discrete residues for rational functions and show that they comprise a complete obstruction to the Mahler summability problem”

**Sources:**

- [Carlos E. Arreche, Yi Zhang, Mahler discrete residues and summability for rational functions, Proceedings of ISSAC 2022, pp. 525-533, arXiv:2202.09805](https://arxiv.org/abs/2202.09805)
- [Shaoshi Chen, Michael F. Singer, Residues and telescopers for bivariate rational functions, Advances in Applied Mathematics (2012)](https://doi.org/10.1016/j.aam.2012.04.003)

### A radiation condition makes lattice wave problems uniquely solvable

**Remember:** Keep the outgoing wave and rule out waves coming in from infinity.

*Rules out counterexamples.* MSC 39A27 (Boundary value problems for difference equations), 39A14. arXiv math.AP. Level 4: research.

**Definition.** The discrete Helmholtz equation is Δu + k²u = 0, where Δ is the difference Laplacian of the triangular lattice. A radiating solution also satisfies a radiation condition at infinity. This condition is a lattice form of the Sommerfeld condition and allows only outgoing waves far from the sources.

**Problem.** Fix a wave number k with 0 &lt; k &lt; 2√2. Prescribe data on finitely many finite rows or columns of lattice sites. The exterior problem then has exactly one radiating solution.

**How the definition helps.** The radiation condition removes the solutions that the equation and the finite data cannot tell apart. Our own example is a finite sum of lattice plane waves chosen to vanish at the finitely many data sites. It solves the problem with zero data, but it does not decay, so the condition excludes it. The paper proves uniqueness first and then builds the solution from difference potentials.

**Paper or page:** [Propagation of Waves from Finite Sources Arranged in Line Segments within an Infinite Triangular Lattice](https://arxiv.org/abs/2405.18806v3). It says: “Consistent with a continuum theory, we employ the notion of radiating solution and establish a unique solvability result and Green's representation formula using difference potentials.”

**Sources:**

- [David Kapanadze, Zurab Vashakidze, Propagation of Waves from Finite Sources Arranged in Line Segments within an Infinite Triangular Lattice, arXiv:2405.18806 (2024)](https://arxiv.org/abs/2405.18806v3)
