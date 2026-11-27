### Generating series make recurrences rational

**Remember:** A lag is multiplication by z, apart from initial terms.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a sequence over a field, define its ordinary generating function as the formal series with coefficient aₙ at degree n, starting at n=0. No convergence assumption is needed.

**Problem.** A sequence satisfies a constant-coefficient linear homogeneous recurrence from some index onward exactly when its ordinary generating function is rational.

**How the definition helps.** Encoding the sequence as coefficients turns a shift of indices into multiplication by a power of z. In our own proof, multiply the series by the polynomial whose coefficients specify the recurrence. All but finitely many coefficients vanish, so the product is a polynomial. Conversely, write a rational series with a denominator nonzero at zero. Comparing coefficients above the numerator’s degree gives the recurrence.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “A generating function is an element of R⟦z⟧, the rig of formal power series over the rig R”

**Sources:** none listed. No primary source with a working link was found.

### Nonresonance makes polynomial forcing solvable

**Remember:** Nonresonance keeps the solution in the same polynomial space as the forcing.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let S shift a sequence forward one step, so (Sy)ₙ=yₙ₊₁. Write a real constant-coefficient linear recurrence as P(S)y=f for a polynomial P and forcing sequence f. Call a nonzero real number μ nonresonant if P(μ)≠0.

**Problem.** Let the forcing equal μ to the power n times a polynomial in n of degree at most s. If μ is nonresonant, the recurrence has exactly one particular solution of that same form and degree bound.

**How the definition helps.** Nonresonance makes every diagonal entry of the matrix for P(S) nonzero. In our own proof, use the basis formed by μⁿ times successive powers of n through degree s. Shifting n to n+1 preserves the leading polynomial coefficient, while shifting μⁿ contributes μ. Thus S is triangular with diagonal μ, and P(S) is triangular with diagonal P(μ). This proves invertibility in the stated space. At resonance, yₙ₊₁−yₙ=1 has no constant solution.

**Paper or page:** [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1). It says: “and the system in question has a unique solution.”

**Sources:**

- [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1)

### Sequence updates give unique solutions

**Remember:** One update on whole sequences replaces infinitely many separate equations.

*Makes the theorem clean to state or prove.* MSC 39A22 (Growth, boundedness, comparison of solutions to difference equations), 39A05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a recurrence yₙ=Fₙ(yₙ₋₁), define an update on whole sequences instead of one term at a time. The new entry at time n is Fₙ applied to the old entry at time n−1. Measure distance between bounded sequences by the supremum of the distances between corresponding entries.

**Problem.** Suppose each Fₙ acts on the same complete normed vector space and reduces distances by a common factor less than one. If the values Fₙ(0) are uniformly bounded, the recurrence has exactly one bounded solution on all integer times.

**How the definition helps.** Updating whole sequences turns bounded solutions into fixed points. In our own proof, the updated sequence has norm at most qM+B. Here M bounds the original sequence, q is the contraction factor and B bounds the norms of Fₙ(0). The update also reduces distances by the factor q. The contraction mapping theorem gives a unique fixed point because the bounded sequences form a complete space.

**Paper or page:** [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1). It says: “has a unique bounded entire solution”

**Sources:**

- [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1)

### Unique solutions inherit forcing periods

**Remember:** Shift the unique entire solution by one period and nothing changes.

*True by definition.* MSC 39A23 (Periodic solutions of difference equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An entire solution is a sequence that satisfies the recurrence at every integer time. A forward solution instead starts at a specified time and is defined only after that.

**Problem.** If a recurrence repeats after p time steps and has a unique bounded entire solution, that solution is p-periodic.

**How the definition helps.** Using all integer times lets a shift by p preserve the time domain and the recurrence. In our own proof, the shifted sequence is bounded, so uniqueness identifies it with the original. Shifting a forward solution can change its prescribed starting value. The cited theorem proves uniqueness from contraction over a period.

**Paper or page:** [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1). It says: “is θ-periodic”

**Sources:**

- [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1)

### Green matrices turn boundary problems into fixed points

**Remember:** Solve each unit forcing once, then combine the answers.

*Makes the theorem clean to state or prove.* MSC 39A27 (Boundary value problems for difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an invertible linear difference operator with fixed homogeneous boundary conditions, define the Green matrix as its inverse. Each column is the solution when the forcing is zero except for one unit entry.

**Problem.** Write the finite boundary problem as Ly=N(y), where L is the invertible linear difference operator and N is continuous. A solution exists if applying the Green matrix to N maps a closed ball of possible sequences into itself.

**How the definition helps.** The Green matrix turns the boundary equation into y=GN(y), a fixed-point equation. In our own formulation, G denotes the Green matrix. Brouwer’s fixed-point theorem applies because the ball is compact and convex and the map is continuous. The work lies in constructing G and bounding its action on the forcing. The cited theorem uses a bound on sums of absolute values of Green matrix entries.

**Paper or page:** [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1). It says: “has a solution defined on”

**Sources:**

- [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1)

### Companion states give one stability test

**Remember:** One shift of the state is one matrix multiplication.

*Makes the theorem clean to state or prove.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a homogeneous constant-coefficient linear recurrence of order d, use d consecutive terms as its state. The companion matrix advances the state by dropping the oldest term and appending the one given by the recurrence. Its characteristic polynomial is the recurrence’s characteristic polynomial, so its eigenvalues are the characteristic roots.

**Problem.** Every solution of a homogeneous constant-coefficient recurrence tends to zero exactly when every characteristic root has modulus below one.

**How the definition helps.** The state definition turns decay for all initial data into decay of the powers of one matrix. In our own proof, put the matrix into Jordan form, which groups repeated eigenvalues into triangular blocks. Each nonzero eigenvalue contributes powers multiplied by polynomials in the time index. Blocks for zero vanish after finitely many steps. All blocks therefore decay when every root has modulus below one. An eigenvector for a root of modulus at least one gives a state that fails to decay.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “Linear recurrences with constant coefficients can also be solved using matrix methods.”

**Sources:** none listed. No primary source with a working link was found.

### Falling powers make polynomial differences and sums simple

**Remember:** Differences of falling powers copy the power rule, so sums telescope.

*True by definition.* MSC 39A70 (Difference operators), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The falling factorial (x)ₘ is the product x(x − 1)⋯(x − m + 1) for a positive integer m, with (x)₀ = 1. The forward difference of a function f is Δf(x) = f(x + 1) − f(x). Instead of usual powers xᵐ, one can use falling factorials to write polynomials.

**Problem.** For m ≥ 1, Δ(x)ₘ = m(x)ₘ₋₁. The sum of (k)ₘ for k = 0, …, n − 1 is (n)ₘ₊₁/(m + 1) for integers m ≥ 0 and n ≥ 1.

**How the definition helps.** The falling-factorial definition gives the difference rule because the two products share all but one factor. Factoring out (x)ₘ₋₁ leaves the difference (x + 1) − (x − m + 1) = m (our own calculation). Adding consecutive differences cancels the intermediate terms and gives the sum, since (0)ₘ₊₁ = 0. The difference of an ordinary power instead gives several terms by the binomial theorem. For general polynomial sums, the work moves into rewriting the polynomial in falling factorials (our own comparison).

**Wikipedia:** [Falling and rising factorials](https://en.wikipedia.org/wiki/Falling_and_rising_factorials). It says: “In this formula, the falling factorial (x)ₙ in the calculus of finite differences plays the role of xⁿ in differential calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Abel coordinates exist exactly without cycles

**Remember:** A clock that adds one each step cannot return to its start.

*Rules out counterexamples.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An Abel coordinate for a map T is a real-valued function h with h(T(x))=h(x)+1. It need not be one-to-one. Call T free of periodic points if no point returns to itself after a positive number of steps.

**Problem.** Assuming the axiom of choice, a self-map of a set admits an Abel coordinate exactly when it has no periodic points.

**How the definition helps.** Each step adds one to the coordinate, so a periodic point would force a positive integer to equal zero. For the converse, our own construction groups points whose forward orbits meet and chooses one reference point per group. If x after m steps meets the reference point after n steps, set h(x)=n−m. Two meetings with different step differences would repeat a point on the shared orbit. Thus h is well defined, and advancing x once increases h by one.

**Wikipedia:** [Abel equation](https://en.wikipedia.org/wiki/Abel_equation). It says: “The Abel equation has at least one solution on E if and only if for all x ∈ E and all n ∈ ℕ∗, fⁿ(x) ≠ x,”

**Sources:**

- [R. Tambs Lyche, Sur l’équation fonctionnelle d’Abel (1924)](https://doi.org/10.4064/fm-5-1-331-333)

### Angles turn tangent addition into rotation

**Remember:** Tangent addition becomes a rotation of a uniform angle.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Represent a real number x by the angle with tangent x, counting angles that differ by π as equal. Only π/2 has no finite tangent. Choose an angle uniformly from this circle.

**Problem.** Suppose a real function f satisfies f((x+y)/(1−xy))=f(x)+f(y) whenever xy≠1. Assume f is Borel measurable, so inverse images of open sets belong to the family generated from intervals by countable unions and complements. Then f vanishes everywhere.

**How the definition helps.** The angle coordinate turns the input operation into a rotation, which preserves uniform probability. In our own proof, fix y and rotate a uniform angle by the angle representing y. The exceptional angles have probability zero. The equation says this adds f(y) to the output without changing its probability distribution. A real probability distribution cannot equal a translate of itself by a nonzero amount. Hence f(y)=0.

**Paper or page:** [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1). It says: “is limited to the function f(x) = 0 for every x ∈ ℝ.”

**Sources:**

- [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1)

### Continuity makes additive functions linear

**Remember:** Additivity fixes the rational values and continuity fills the gaps.

*Rules out counterexamples.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Here a continuous additive function on the reals satisfies f(x+y)=f(x)+f(y) and is continuous at zero. An additive function without that extra requirement need only respect rational scaling.

**Problem.** Every additive real function continuous at zero has the form f(x)=cx.

**How the definition helps.** Continuity extends the formula fixed by additivity on the rationals to the whole real line. In our own proof, additivity gives f(q)=qf(1) for rational q and transports continuity at zero to every point. Approximate each real number by rationals. Without continuity, choose a basis of the reals over the rationals containing 1 and √2. Assign value zero to 1 and all other basis elements except √2, which receives value one. Extending by rational linearity gives our own counterexample.

**Wikipedia:** [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “there are infinitely many other functions that satisfy the equation.”

**Sources:** none listed. No primary source with a working link was found.

### Raabe averages multiply scales

**Remember:** Two successive averages are one average over a larger grid.

*True by definition.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a positive integer a, let Aₐf(x) be the mean of f((x+k)/a) for integers k from 0 to a−1. For a nonnegative integer n, the Raabe equation says Aₐf(x)=a⁻ⁿf(x) for every real x.

**Problem.** If f satisfies the degree n Raabe equations at positive integer scales a and b, it also satisfies the equation at scale ab.

**How the definition helps.** Writing each grid sum as an operator reduces the calculation to composition of two averages. In our own proof, the work is to count indices in the double sum. Each integer from 0 to ab−1 occurs exactly once as i+aj, with 0≤i&lt;a and 0≤j&lt;b. The composition therefore averages at scale ab, and the two scale factors multiply.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “then it is a solution of Equation $({\\mathbb E}<sub>n , a b</sub>)$.”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

### Subadditivity forces a limiting growth rate

**Remember:** Repeat any fixed block to bound the eventual cost per step.

*Rules out counterexamples.* MSC 39B62 (Functional inequalities, including subadditivity, convexity, etc.). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real sequence is subadditive if aₘ₊ₙ≤aₘ+aₙ for all positive m and n. Unlike a bound on each term separately, this rule bounds the cost of joining two blocks.

**Problem.** For a real subadditive sequence, aₙ/n tends to the infimum of those ratios. This limit may be −∞.

**How the definition helps.** Subadditivity bounds a long block by copies of any fixed block and one short remainder. In our own proof, fix the block length m and divide this bound by the total length n. The remainder contributes at most a constant divided by n. The upper limit is therefore at most aₘ/m for every m. The infimum of the ratios already bounds each ratio below. Without subadditivity, taking aₙ=n for odd n and zero otherwise gives our own counterexample.

**Wikipedia:** [Fekete's lemma](https://en.wikipedia.org/wiki/Fekete%27s_lemma). It says: “converges to its infimum. Note that this infimum may be −∞.”

**Sources:**

- [M. Fekete, Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten (1923)](https://doi.org/10.1007/BF01504345)

### Falling factorial series simplify index multiplication

**Remember:** Each falling factorial is an eigenvector whose eigenvalue equals its degree.

*True by definition.* MSC 39A06 (Linear difference equations), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** Let Bₙ(z) be the product of n consecutive descending factors starting at z, with B₀(z)=1. Encode a sequence by a formal series in t whose coefficient at degree n is aₙBₙ(z). Define θg(z)=z(g(z)−g(z−1)), acting separately on each coefficient.

**Problem.** For any polynomial p, multiplying the nth sequence term by p(n) acts on the discrete generating series as p(θ). Here p(θ) uses repeated applications of θ in place of powers of the variable.

**How the definition helps.** The falling factorial basis makes θ act as multiplication by the index. In our own calculation, subtracting the two products and multiplying by z gives θBₙ=nBₙ. Ordinary powers of z would mix several degrees under this operation. Applying the identity repeatedly proves the result for every polynomial in θ.

**Paper or page:** [Discrete Generating Series and Linear Difference Equations](https://arxiv.org/abs/2504.21722v1). It says: “For the discrete generating series, the following relation holds:”

**Sources:**

- [Discrete Generating Series and Linear Difference Equations](https://arxiv.org/abs/2504.21722v1)

### Reversible weights make spectra nonnegative

**Remember:** Balanced weights turn differences into squares.

*True by definition.* MSC 39A14 (Partial difference equations), 33C50. arXiv math.CA. Level 3: graduate.

**Definition.** On a finite lattice, let a difference operator sum r(x,y)(f(x)−f(y)) over neighbors y with nonnegative rates r(x,y). In place of an unweighted sum of products, define the inner product by weighting each point x by w(x)&gt;0. Choose weights with w(x)r(x,y)=w(y)r(y,x).

**Problem.** The difference operator is self-adjoint for the inner product weighted by w. Every eigenvalue is real and nonnegative.

**How the definition helps.** Balanced weights give the same coefficient to both directions of each edge. In our own proof, combine these two terms in the weighted inner product of f with the operator applied to g. Each edge contributes w(x)r(x,y)(f(x)−f(y))(g(x)−g(y)) for real functions. This expression is symmetric in f and g, so the operator is self-adjoint. Taking g=f gives a sum of nonnegative squares, which forces nonnegative eigenvalues. The work lies in finding balancing weights. The quoted Hahn theorem also describes symmetric matrices obtained after changing coordinates.

**Paper or page:** [Multivariate Hahn polynomials and difference equations](https://arxiv.org/abs/2305.09170v3). It says: “are real symmetric positive semi-definite matrices and the eigenvalues are real and non-negative.”

**Sources:**

- [Multivariate Hahn polynomials and difference equations](https://arxiv.org/abs/2305.09170v3)

### Residuals correct approximate trajectories

**Remember:** Solve for the residual, then subtract the correction.

*True by definition.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 3: graduate.

**Definition.** For matrices Aₙ and vectors xₙ at integer times, define the residual by wₙ=xₙ₊₁−Aₙxₙ. Call the recurrence admissible for bounded errors if one constant L works for every bounded sequence w. Each such w must admit a correction z satisfying zₙ₊₁−Aₙzₙ=wₙ and supₙ\|zₙ\|≤L supₙ\|wₙ\|.

**Problem.** Bounded-error admissibility for a linear recurrence on integer times implies Hyers–Ulam stability. This means a sequence with small uniform residual stays uniformly close to some exact solution.

**How the definition helps.** Admissibility supplies a correction with exactly the residual of the proposed trajectory. In our own argument, subtracting this correction gives an exact trajectory within the stated bound. This replaces a search for a nearby trajectory with the quoted solvability estimate.

**Paper or page:** [Hyers-Ulam stability for finite-dimensional nonautonomous dynamics](https://arxiv.org/abs/2401.04516v1). It says: “supₙ∈ℤ \|zₙ\| ≤ L supₙ∈ℤ \|wₙ\|.”

**Sources:**

- [Hyers-Ulam stability for finite-dimensional nonautonomous dynamics](https://arxiv.org/abs/2401.04516v1)

### Nested compositions absorb one more step

**Remember:** Moving time forward puts one more map on the outside.

*True by definition.* MSC 39A45 (Difference equations in the complex domain), 39B12. arXiv math.CA. Level 3: graduate.

**Definition.** Let Tₛ(z)=u(s)f(z), where f is continuous on the complex plane. Fix a starting value z. Apply the maps from time s−n through time s−1 to z in chronological order. Define F(s) as the limit of these values as n tends to infinity.

**Problem.** Suppose these limits exist at s and s+1 for the same starting value. Then F(s+1)=u(s)f(F(s)).

**How the definition helps.** Letting the starting time recede makes one forward step add a single outer map. In our own argument, the composition of length n+1 ending at time s applies Tₛ to the previous composition of length n. Continuity allows Tₛ to pass through the limit. This replaces the choice of an initial time with the task of proving convergence.

**Paper or page:** [Infinite Compositions and Complex Dynamics; Generalizing Schröder and Abel Functions](https://arxiv.org/abs/2108.13519v1). It says: “F(s+1) = u(s)f(F(s))”

**Sources:**

- [Infinite Compositions and Complex Dynamics; Generalizing Schröder and Abel Functions](https://arxiv.org/abs/2108.13519v1)

### Laplace transforms turn differences into factors

**Remember:** Each forward difference adds one factor of exp(−ht) minus one.

*True by definition.* MSC 39A70 (Difference operators), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** Represent f(z) as the integral of exp(−zt)g(t) over t≥0. The forward difference with step h sends f(z) to f(z+h)−f(z).

**Problem.** Suppose the integral converges absolutely at z and h&gt;0. Applying the forward difference n times multiplies the integrand by (exp(−ht)−1)ⁿ for every positive integer n.

**How the definition helps.** The integral representation replaces an expanding sum of shifted values by one factor per difference. In our own calculation, shifting z by h multiplies the integrand by exp(−ht). Subtraction supplies the factor exp(−ht)−1. Absolute convergence justifies subtraction at every step because h is positive. The remaining work is to establish the integral representation.

**Paper or page:** [On the convergence of Newton series and the asymptotics of finite differences](https://arxiv.org/abs/2404.04288v3). It says: “Suppose f has an inverse Laplace transform.”

**Sources:**

- [On the convergence of Newton series and the asymptotics of finite differences](https://arxiv.org/abs/2404.04288v3)

### Normalized iterates solve Schröder’s equation

**Remember:** Composing with f advances the iterate count and leaves one λ.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations), 39B32. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** Let f be holomorphic, meaning complex differentiable near zero, with f(0)=0 and derivative λ satisfying 0&lt;\|λ\|&lt;1. Define the Koenigs function h near zero as the limit of the nth iterate of f divided by λⁿ.

**Problem.** Near zero, the Koenigs function satisfies h(f(z))=λh(z). It has h′(0)=1, so it gives a locally invertible change of coordinates.

**How the definition helps.** Defining h by normalized iterates turns composition with f into a shift of the index. In our own calculation, shifting leaves one factor of λ, so h(f(z))=λh(z). This gives the coordinate change directly, in place of solving Schröder’s equation for its coefficients. The work is to prove uniform convergence on compact sets near zero. The derivative of every normalized iterate at zero is one, and this convergence preserves derivatives there.

**Wikipedia:** [Koenigs function](https://en.wikipedia.org/wiki/Koenigs_function). It says: “the uniform limit on compacta of the normalized iterates”

**Sources:**

- [Gabriel Koenigs, Recherches sur les intégrales de certaines équations fonctionnelles (1884)](https://doi.org/10.24033/asens.247)

### Diagonal values simplify mixed differences

**Remember:** After p differences, each increment must occupy one slot.

*True by definition.* MSC 39B22 (Functional equations for real functions), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a positive integer p. Take a real function F of p real variables that is additive in each variable and unchanged by permutations. Define its diagonal function by f(x)=F(x,…,x). A difference with increment h sends f(x) to f(x+h)−f(x).

**Problem.** Take p successive differences with arbitrary increments. For the diagonal function this gives p factorial times F applied to the p increments. All higher differences vanish.

**How the definition helps.** The diagonal definition turns repeated differences into a count of occupied slots. In our own proof, expand by additivity. Each difference cancels terms missing its increment, so only the p! permutations survive after p differences. Symmetry gives the same value for each permutation. One further difference kills the constant result. Starting from difference identities instead requires a reconstruction theorem to recover the symmetric additive function.

**Paper or page:** [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1). It says: “and let f: ℝ → ℝ be the diagonalization of F.”

**Sources:**

- [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1)

### Fourier coefficients untangle Raabe equations

**Remember:** The average keeps only frequencies divisible by the scale.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** The Fourier coefficient at k measures the contribution of the wave with integer frequency k. For each nonzero k, multiply the coefficient by the absolute value of k to the power n. In the Raabe equation, the average of f((x+j)/a) over j=0,…,a−1 equals a to the power −n times f(x).

**Problem.** Let f be continuous and 1-periodic with mean zero. Take a positive integer n and an integer scale a≥2. The Raabe equation holds exactly when the rescaled coefficients at k and ak agree for every nonzero k.

**How the definition helps.** Rescaling turns the functional equation into equalities between pairs of coefficients. In our own proof, integrating over a adjacent subintervals gives the average’s coefficient at k as the original coefficient at ak. The rescaling cancels the factor a⁻ⁿ. Uniqueness of Fourier coefficients proves the converse for continuous functions.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “uₐₖ = uₖ, vₐₖ = vₖ (∀ k ∈ ℕ).”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

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

### Halving removes Kac–Bernstein parity terms

**Remember:** If every element has a half, there is only one parity class.

*Rules out counterexamples.* MSC 39B52 (Functional equations for functions with more general domains and/or ranges). arXiv math.CA. Level 4: research.

**Definition.** Call an abelian group 2-divisible if every element is twice another element. The Kac–Bernstein equation asks that f(x+y)g(x−y) equal f(x)f(y)g(x)g(−y). In the positive version, both functions take only positive values.

**Problem.** Suppose two positive functions on a 2-divisible abelian group satisfy the Kac–Bernstein equation. Their logarithms have one shared quadratic part, separate additive parts and separate constants. A quadratic part Q satisfies Q(x+y)+Q(x−y)=2Q(x)+2Q(y).

**How the definition helps.** When every group element is a double, a function constant on each translate of the doubles must be constant everywhere. The cited classification gives precisely such an extra term in each logarithm. An additive part preserves sums. In our own counterexample on the integers, set f=1 on even numbers, f=e on odd numbers and g=1/f. The arguments x+y and x−y have the same parity, so both sides of the equation equal one. On the integers a quadratic plus an additive function has the form an²+bn. Adding a constant cannot make that expression both bounded and nonconstant.

**Paper or page:** [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1). It says: “the function r(x) is a constant on each of the cosets of the subgroup X⁽²⁾ in X.”

**Sources:**

- [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1)
