### Conjugation makes the complex modulus multiplicative

**Remember:** Conjugation respects products, so the squared modulus does too.

*True by definition.* MSC 30A99 (General properties of functions of one complex variable). arXiv math.CV. Level 1: early undergraduate.

**Definition.** The conjugate of z = x + iy is z̄ = x − iy, and conjugation respects products. The modulus is \|z\| = √(z z̄), the nonnegative square root, which equals √(x² + y²).

**Problem.** For all complex numbers z and w, \|zw\| = \|z\|\|w\|.

**How the definition helps.** Since the conjugate of zw is z̄ w̄, \|zw\|² = (z z̄)(w w̄) = \|z\|²\|w\|² (our own). Taking nonnegative square roots gives \|zw\| = \|z\|\|w\| (our own).

**Wikipedia:** [Absolute value](https://en.wikipedia.org/wiki/Absolute_value). It says: “\|z\| = √(z · z̄).”

**Sources:** none listed. No primary source with a working link was found.

### A complex derivative as an i-linear map gives Cauchy–Riemann at once

**Remember:** The derivative's value on i is i times its value on 1.

*True by definition. Confidence: medium.* MSC 30A05 (Monogenic and polygenic functions of one complex variable), 26B05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Identify ℂ with ℝ². Call f complex differentiable at z if it is real differentiable there and its derivative L commutes with multiplication by i, so L(iv) = iL(v) for every v.

**Problem.** Let f = u + iv be complex differentiable at a point. Then ∂u/∂x = ∂v/∂y and ∂u/∂y = −∂v/∂x at that point.

**How the definition helps.** The two equations are the real and imaginary parts of L(i) = iL(1) (our own). Here L(1) = uₓ + ivₓ and L(i) = uᵧ + ivᵧ, while iL(1) = −vₓ + iuₓ (our own). This matches the difference-quotient definition because such an L is multiplication by L(1) (our own).

**Wikipedia:** [Cauchy–Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations). It says: “the partial derivatives of u and v exist and satisfy the Cauchy–Riemann equations at that point.”

**Paper or page:** [Cauchy-Riemann Equations/Necessary Condition](https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Necessary_Condition). It says: “The following two equations, known as the Cauchy-Riemann equations, hold for the partial derivatives of u and v:”

**Sources:** none listed. No primary source with a working link was found.

### Real differentiability makes the Cauchy–Riemann test sufficient

**Remember:** First a real linear approximation; then Cauchy–Riemann makes it complex.

*Rules out counterexamples.* MSC 30A05 (Monogenic and polygenic functions of one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A function f is real differentiable at z if a real linear map L approximates f(z + h) − f(z) with an error that is small compared with \|h\| as h → 0.

**Problem.** Write f = u + iv and suppose f is real differentiable at a point. There f has a complex derivative exactly when its partial derivatives satisfy uₓ = vᵧ and uᵧ = −vₓ.

**How the definition helps.** Real differentiability supplies the linear map L, and the equations say L is multiplication by uₓ + ivₓ, which is complex differentiability (our own proof). Partial derivatives alone are not enough: f(x + iy) = xy/√(x² + y²), with f(0) = 0, has zero partial derivatives at 0. Yet its difference quotient along the diagonal has opposite one-sided limits (our own example).

**Paper or page:** [Cauchy-Riemann Equations/Sufficient Condition](https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Sufficient_Condition). It says: “u and v be differentiable in their entire domain”

**Sources:** none listed. No primary source with a working link was found.

### The Wirtinger derivative test makes holomorphic functions harmonic

**Remember:** The Laplacian factors through ∂/∂z̄, which kills holomorphic functions.

*True by definition.* MSC 30A05 (Monogenic and polygenic functions of one complex variable), 31A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuously differentiable f holomorphic if ∂f/∂z̄ = ½(∂f/∂x + i∂f/∂y) is zero, the Cauchy–Riemann equations in one line. On twice continuously differentiable functions, 4 ∂/∂z ∂/∂z̄ is the Laplacian, where ∂/∂z = ½(∂/∂x − i∂/∂y).

**Problem.** The real and imaginary parts of a holomorphic function are harmonic: their second partial derivatives in x and y sum to zero.

**How the definition helps.** The Laplacian of f is 4 ∂/∂z(∂f/∂z̄), which is zero (our own). Holomorphic functions have power series, so f has continuous second derivatives and the mixed partials agree (our own). The Laplacian is a real operator, so it also kills the real and imaginary parts (our own).

**Wikipedia:** [Wirtinger derivatives](https://en.wikipedia.org/wiki/Wirtinger_derivatives). It says: “The second Wirtinger derivative is also related with complex differentiation; ∂f/∂z̄ = 0 is equivalent to the Cauchy-Riemann equations in a complex form.”

**Paper or page:** [Real and Imaginary Parts of Holomorphic Function are Harmonic](https://proofwiki.org/wiki/Real_and_Imaginary_Parts_of_Holomorphic_Function_are_Harmonic). It says: “Then u and v are harmonic functions.”

**Sources:**

- [W. Wirtinger, Zur formalen Theorie der Funktionen von mehr komplexen Veränderlichen, Mathematische Annalen 97 (1927), 357–375](https://doi.org/10.1007/BF01447872)

### Circle averages give Cauchy’s bounds on Taylor coefficients

**Remember:** A coefficient is a circle average, and averages never exceed the maximum.

*True by definition.* MSC 30A10 (Inequalities in the complex plane), 30E20, 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Suppose f is holomorphic near the closed disk with center a and radius r &gt; 0. Its nth Taylor coefficient at a is the average over θ of f(a + reⁱᶿ)exp(−inθ), divided by rⁿ, and the factor exp(−inθ) has magnitude one (our own).

**Problem.** Suppose f is holomorphic near a closed disk centered at a, with radius r and largest boundary magnitude M. Its nth Taylor coefficient at a has magnitude at most M divided by the nth power of r.

**How the definition helps.** An average of values of magnitude at most M has magnitude at most M, so the coefficient is at most M/rⁿ (our own proof). The real work is Cauchy’s integral formula, which identifies these circle averages with Taylor coefficients (our own).

**Wikipedia:** [Cauchy's integral formula](https://en.wikipedia.org/wiki/Cauchy%27s_integral_formula). It says: “then the coefficients aₙ satisfy Cauchy's estimate”

**Sources:** none listed. No primary source with a working link was found.

### Absolute convergence lets a power series change its center

**Remember:** Inside the radius, absolute sums are finite, so regrouping is safe.

*Makes the theorem clean to state or prove.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The radius of convergence R of ∑ aₙzⁿ is the supremum of the r ≥ 0 with ∑ \|aₙ\|rⁿ finite, or ∞ if there is no bound. So inside the radius the series converges absolutely, and its terms may be regrouped freely.

**Problem.** A power series with radius R has a power series about each point a with \|a\| &lt; R. The new series agrees with the old sum throughout \|z − a\| &lt; R − \|a\|.

**How the definition helps.** Write z = a + (z − a) and expand each aₙzⁿ by the binomial theorem (our own proof). The absolute values of all the resulting terms sum to ∑ \|aₙ\|rⁿ with r = \|a\| + \|z − a\| &lt; R, which is finite. So the terms may be grouped by powers of z − a without changing the sum.

**Wikipedia:** [Power series](https://en.wikipedia.org/wiki/Power_series). It says: “The series converges absolutely inside its disc of convergence”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 8.4](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### An everywhere convergent Taylor series exposes Liouville’s theorem

**Remember:** A bounded entire series can keep only its constant term.

*True by definition. Confidence: medium.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** An entire function is one given by a single power series ∑ aₙzⁿ that converges at every point of the plane, so the same coefficients serve on every circle. Equivalently, it is complex differentiable at every point.

**Problem.** Every bounded entire function is constant.

**How the definition helps.** Cauchy’s estimate on the circle of radius r gives \|aₙ\| ≤ M/rⁿ for the global bound M, with the same aₙ for every r. Letting r grow forces aₙ = 0 for every n ≥ 1 (our own proof). The real work is proving that an entire function has one global series and proving Cauchy’s estimate (our own proof).

**Paper or page:** [Liouville's Theorem (Complex Analysis)](https://proofwiki.org/wiki/Liouville's_Theorem_(Complex_Analysis)). It says: “Let f: ℂ → ℂ be a bounded entire function. Then f is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Complex differentiability on a disk gives a Taylor series

**Remember:** Holomorphic at a point means differentiable on a whole disk around it.

*Rules out counterexamples.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A function is holomorphic at a point if it is complex differentiable at every point of some open disk about that point. A derivative at the single point is not enough (our own).

**Problem.** A function holomorphic at a point has a power series expansion on some disk about that point.

**How the definition helps.** The disk contains a circle and its interior, so Cauchy’s integral formula applies there and expands f as a power series (our own). A derivative at one point is not enough: f(z) = \|z\|² has a derivative at zero and nowhere else, so it has no power series there (our own).

**Wikipedia:** [Complex analysis](https://en.wikipedia.org/wiki/Complex_analysis). It says: “Complex functions that are differentiable at every point of an open subset Ω of the complex plane are said to be holomorphic on Ω.”

**Paper or page:** [Holomorphic Function is Analytic](https://proofwiki.org/wiki/Holomorphic_Function_is_Analytic). It says: “Then f is complex analytic on D.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiation preserves a power series radius

**Remember:** The nth root of n tends to one, so growth is unchanged.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The radius of convergence of ∑ aₙ(z − c)ⁿ is 1/limsup \|aₙ\|<sup>(1/n)</sup>, with 1/0 = ∞ and 1/∞ = 0. It depends only on how fast the coefficients grow, and the series converges inside it and diverges outside it.

**Problem.** A complex power series and its termwise derivative have the same radius of convergence.

**How the definition helps.** The derivative times (z − c) has coefficients n aₙ, and n<sup>(1/n)</sup> → 1, so the limsup is unchanged (our own). Multiplying by z − c does not change convergence away from c (our own). The Cauchy–Hadamard theorem links the coefficient formula to the disk of convergence (our own).

**Paper or page:** [Radius of Convergence of Derivative of Complex Power Series](https://proofwiki.org/wiki/Radius_of_Convergence_of_Derivative_of_Complex_Power_Series). It says: “Then R = R′.”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic as one power series on a disk gives antiderivatives there

**Remember:** Integrate each power, and the radius of convergence stays the same.

*True by definition. Confidence: medium.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 30A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** On an open disk, describe a holomorphic function by one power series about the centre that converges on the whole disk. A theorem of Cauchy says this agrees with the usual definition by a complex derivative at each point.

**Problem.** Every holomorphic function on an open disk has an antiderivative defined throughout the disk.

**How the definition helps.** Integrate the series term by term: each coefficient aₙ becomes aₙ/(n + 1), which keeps the radius of convergence (our own). So the new series converges on the whole disk, and termwise differentiation gives back f (our own). Cauchy’s integral formula supplies one Taylor expansion valid on the entire disk.

**Wikipedia:** [Analyticity of holomorphic functions](https://en.wikipedia.org/wiki/Analyticity_of_holomorphic_functions). It says: “The argument, first given by Cauchy, hinges on Cauchy's integral formula and the power series expansion of the expression”

**Sources:** none listed. No primary source with a working link was found.

### Log-convexity controls reciprocal signs

**Remember:** Ratios that never decrease make every later reciprocal coefficient nonpositive.

*Rules out counterexamples.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive sequence aₙ is log-convex if the ratios aₙ/aₙ₋₁ of successive terms never decrease, that is, aₙ² ≤ aₙ₋₁aₙ₊₁ for every n ≥ 1.

**Problem.** For a power series of positive radius with positive log-convex coefficients, its reciprocal has nonpositive coefficients beyond the constant.

**How the definition helps.** Induction shows each reciprocal coefficient bₙ with n ≥ 1 is at most zero, starting from b₁ = −a₁/a₀² (our own). Subtracting (aₙ/aₙ₋₁) times the degree n−1 product identity from the degree n one gives a₀bₙ = ∑ⱼ₌₁ⁿ⁻¹ ((aₙ/aₙ₋₁)aₙ₋₁₋ⱼ − aₙ₋ⱼ)bⱼ, and log-convexity makes each bracket nonnegative (our own). Without log-convexity, coefficients 1, 1, ½ give a reciprocal with quadratic coefficient ½ (our own).

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “b₀ = 1/a₀ &gt; 0 and bₙ ≤ 0 for all n ∈ {1, 2, …}.”

**Sources:** none listed. No primary source with a working link was found.

### One absolutely convergent boundary point controls the closed disk

**Remember:** The boundary magnitudes bound the terms everywhere inside.

*Rules out counterexamples.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A power series ∑ aₙzⁿ converges absolutely at a point of modulus R if ∑ \|aₙ\|Rⁿ is finite. That sum then bounds the series on the whole closed disk \|z\| ≤ R, since there \|aₙzⁿ\| ≤ \|aₙ\|Rⁿ.

**Problem.** Suppose a power series converges absolutely at a point of modulus R. It converges uniformly to a continuous function on the closed disk of radius R.

**How the definition helps.** The bound \|aₙzⁿ\| ≤ \|aₙ\|Rⁿ holds on the whole closed disk, so the Weierstrass M-test gives uniform convergence, and the uniform limit of polynomials is continuous (our own argument). Plain convergence at one boundary point is not enough: ∑ zⁿ/n, from n = 1, converges at −1 but diverges at 1.

**Wikipedia:** [Power series](https://en.wikipedia.org/wiki/Power_series). It says: “Absolute convergence at every point of the boundary”

**Sources:** none listed. No primary source with a working link was found.

### Power series make holomorphic circle averages equal the center value

**Remember:** Only the constant term survives a full turn.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A function is holomorphic if it is complex differentiable at each point of its open domain. Equivalently, near each point a it is a convergent power series ∑ cₙ(z − a)ⁿ, and each power with n ≥ 1 averages to zero on a circle about a (our own proof).

**Problem.** A function holomorphic on an open set containing a closed disk equals its circle average at the disk center.

**How the definition helps.** On a circle centred at a, each term cₙ(z − a)ⁿ with n ≥ 1 averages to zero, leaving the constant term f(a) (our own proof). Cauchy’s formula gives a centred Taylor series on a slightly larger disk, and uniform convergence on the circle lets us average term by term (our own proof).

**Paper or page:** [Mean Value Theorem for Holomorphic Functions](https://proofwiki.org/wiki/Mean_Value_Theorem_for_Holomorphic_Functions). It says: “f(z) = (1/2π) ∫₀²π f(z + r eⁱᶿ) dθ”

**Sources:** none listed. No primary source with a working link was found.

### Power series make holomorphic functions differentiable to every order

**Remember:** Differentiate the power series term by term to get another power series.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a function analytic if it equals a convergent power series near each point of its open domain. Cauchy’s integral formula shows that every holomorphic function, one with a complex derivative at every point, is analytic.

**Problem.** Every holomorphic function has complex derivatives of all orders, and those derivatives are holomorphic.

**How the definition helps.** A power series differentiates term by term into another power series with the same radius of convergence, so the derivative of an analytic function is analytic (our own). The step repeats for every order (our own). Cauchy’s integral formula supplies the local series for a holomorphic function.

**nLab:** [holomorphic function](https://ncatlab.org/nlab/show/holomorphic+function). It says: “The theorem that every continuously complex-differentiable function is analytic is soft and due to Augustin Cauchy; the theorem that every complex-differentiable function is continuously differentiable is hard and due essentially to Édouard Goursat”

**Paper or page:** [Holomorphic Function is Analytic](https://proofwiki.org/wiki/Holomorphic_Function_is_Analytic). It says: “Let f be a function holomorphic on some open ball D = B(a, r). Then f is complex analytic on D.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Two power series give Laurent series two convergence radii

**Remember:** Positive powers converge inside a circle, negative powers outside one.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A Laurent series about a is a power series in z − a plus a power series in 1/(z − a) without constant term. It converges at z when both series converge there separately.

**Problem.** If a Laurent series about a converges on a nonempty open set, the interior of its convergence set away from a is an annulus. The inner radius may be zero and the outer radius infinite.

**How the definition helps.** The first series converges for \|z − a\| &lt; R and the second for 1/\|z − a\| &lt; 1/r, so together they give the annulus r &lt; \|z − a\| &lt; R (our own). Each radius comes from the convergence theorem for power series (our own). Separate convergence stops symmetric partial sums from hiding cancellation between the two series (our own).

**Wikipedia:** [Laurent series](https://en.wikipedia.org/wiki/Laurent_series). It says: “both the positive- and negative degree power series converge.”

**Sources:** none listed. No primary source with a working link was found.

### A bounded approach angle keeps Abel’s boundary limit valid

**Remember:** Stay in a wedge at 1, and the series follows its sum.

*Rules out counterexamples.* MSC 30B30 (Boundary behavior of power series in one complex variable; over-convergence), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Fix M &gt; 1. The Stolz sector at 1 is the set of z in the open unit disk with \|1 − z\| ≤ M(1 − \|z\|), a region shaped like a wedge near 1 whose closure meets the boundary circle only at 1.

**Problem.** Suppose a power series about zero converges at 1. Its values inside any fixed Stolz sector tend to that same sum as z approaches 1.

**How the definition helps.** After summation by parts, the error is a tail sum multiplied by a factor of size about \|1 − z\|/(1 − \|z\|), which the sector bounds by M (our own explanation). Outside a sector the limit can fail: a known series converges at 1 but is unbounded near boundary points arbitrarily close to 1.

**Wikipedia:** [Abel's theorem](https://en.wikipedia.org/wiki/Abel%27s_theorem). It says: “provided that z → 1 entirely within a single Stolz sector”

**Sources:** none listed. No primary source with a working link was found.

### A connected continuation domain makes analytic extensions unique

**Remember:** Agreement on a small open set determines the extension throughout a connected domain.

*Rules out counterexamples.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Let f be holomorphic on a nonempty open subset U of a domain D, a connected open set. A direct continuation of f to D is a holomorphic function on D equal to f on U.

**Problem.** Two direct analytic continuations of the same holomorphic function to the same domain coincide.

**How the definition helps.** Two continuations agree on the open set U, so the identity theorem makes them agree on all of the connected domain D (our own). Connectedness is needed: on two disjoint disks, two extensions can agree on the first disk and be different constants on the second (our own).

**nLab:** [analytic continuation](https://ncatlab.org/nlab/show/analytic+continuation). It says: “analytic continuation refers to the extension of the domain of an analytic function.”

**Paper or page:** [Uniqueness of Analytic Continuation](https://proofwiki.org/wiki/Uniqueness_of_Analytic_Continuation). It says: “Let V be connected.”

**Sources:** none listed. No primary source with a working link was found.

### Germs turn multivalued functions such as log z into true functions

**Remember:** Keep the local function with its base point to distinguish branches.

*Makes the theorem clean to state or prove.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30F99. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A germ at a point a is a holomorphic function near a, where two functions give the same germ if they agree on some neighbourhood of a. The germs of one function on a disk, taken at all points of the disk, form a basic open set. Each germ has one value, its value at its base point.

**Problem.** Analytic continuation of a germ gives a single-valued holomorphic function on its component of the space of germs. Examples include germs of log z and √z away from zero.

**How the definition helps.** Evaluation at the base point is a single-valued function on the space of germs (our own). On each basic open set the base point is a coordinate, and evaluation equals the function that defines the set, so it is holomorphic (our own). So different branches of log z are different germs, not different values of one function (our own).

**Wikipedia:** [Analytic continuation](https://en.wikipedia.org/wiki/Analytic_continuation), [Riemann surface](https://en.wikipedia.org/wiki/Riemann_surface). It says: “The idea of finding the maximal analytic continuation of a function in turn led to the development of the idea of Riemann surfaces.”

**Sources:**

- [H. Weyl, Die Idee der Riemannschen Fläche, Teubner, Leipzig, 1913](https://archive.org/details/dieideederrieman00weyluoft)

### Real boundary values let analytic functions reflect across a line

**Remember:** Conjugate the input and output, and join where the values are real.

*Rules out counterexamples.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For f holomorphic on an upper half-disk centred on the real line, reflection defines f at each point z below the diameter as the conjugate of f(z̄). Where f is real on the diameter, the two halves meet continuously, since a real number equals its conjugate.

**Problem.** If f extends continuously to the open diameter and takes real values there, reflection extends f holomorphically to the whole disk.

**How the definition helps.** Real boundary values make the glued function continuous across the diameter (our own). Triangles that cross the diameter split into pieces with zero boundary integrals, so Morera’s theorem makes the glued function holomorphic (our own). Real values are needed: the square root on the upper half-disk centred at zero does not extend holomorphically across zero (our own).

**Wikipedia:** [Schwarz reflection principle](https://en.wikipedia.org/wiki/Schwarz_reflection_principle). It says: “which takes real values on the real axis.”

**Sources:** none listed. No primary source with a working link was found.

### Zero triangle integrals make locally uniform limits holomorphic

**Remember:** Zero triangle integrals pass to a locally uniform limit.

*True by definition.* MSC 30B60 (Completeness problems, closure of a system of functions of one complex variable), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic if its integral around the boundary of every solid triangle in the set is zero. By Goursat’s and Morera’s theorems, this agrees with the usual definition by a complex derivative at each point.

**Problem.** Let holomorphic functions converge uniformly on every compact subset of an open set. Their limit is holomorphic.

**How the definition helps.** Uniform convergence on each compact triangle boundary passes the zero integrals to the limit, and the limit is continuous (our own). So the limit is holomorphic in this sense, and Goursat’s and Morera’s theorems make it holomorphic in the usual sense (our own).

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem). It says: “This in fact characterizes holomorphy, i.e. f is holomorphic on D if and only if the above conditions hold.”

**Paper or page:** [Uniform Limit of Analytic Functions is Analytic](https://proofwiki.org/wiki/Uniform_Limit_of_Analytic_Functions_is_Analytic), [Morera's Theorem](https://proofwiki.org/wiki/Morera's_Theorem). It says: “Let ⟨fₙ⟩ converge locally uniformly to f on U. Then f is analytic.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Homogeneous polynomials count every preimage of a rational map

**Remember:** Count the roots of one homogeneous equation, even for the value infinity.

*Makes the theorem clean to state or prove.* MSC 30C10 (Polynomials and rational functions of one complex variable), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A point of the Riemann sphere is \[X:Y\], a nonzero pair of complex numbers up to common scaling, with ∞ = \[1:0\]. A rational map of degree d sends \[X:Y\] to \[P(X,Y):Q(X,Y)\], where P and Q are homogeneous of degree d with no common zero other than (0,0).

**Problem.** A nonconstant rational map of degree d takes each value exactly d times on the sphere, counting a root of order m as m preimages.

**How the definition helps.** The preimages of \[A:B\] are the roots of the single homogeneous equation BP − AQ = 0 of degree d (our own). This polynomial is not zero because the map is nonconstant (our own). A nonzero homogeneous polynomial of degree d in two variables splits over ℂ into d linear factors, counted with multiplicity, which include the point ∞ (our own).

**nLab:** [Riemann sphere](https://ncatlab.org/nlab/show/Riemann+sphere). It says: “the complex projective line”

**Wikipedia:** [Rational function](https://en.wikipedia.org/wiki/Rational_function). It says: “the maximum of the degrees of its constituent polynomials P and Q”

**Sources:** none listed. No primary source with a working link was found.

### On the Riemann sphere, Möbius maps become bijections with two fixed points

**Remember:** Points are lines in ℂ², and Möbius maps are invertible matrices.

*Makes the theorem clean to state or prove.* MSC 30C10 (Polynomials and rational functions of one complex variable), 30F10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A point of the Riemann sphere is \[X:Y\], a nonzero complex pair up to common scaling, with ∞ = \[1:0\]. A Möbius transformation applies an invertible matrix with rows (a, b) and (c, d), sending \[X:Y\] to \[aX + bY : cX + dY\].

**Problem.** The Möbius transformations form a group of bijections. Every one except the identity has exactly two fixed points, counted with multiplicity.

**How the definition helps.** Composing and inverting the maps is multiplying and inverting the matrices, so the maps form a group of bijections (our own). A fixed point \[X:Y\] is an eigenvector, so it solves cX² + (d − a)XY − bY² = 0 (our own). This quadratic is zero only for the identity, and otherwise it has two projective roots counted with multiplicity (our own).

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “Thus a Möbius transformation is always a bijective holomorphic function from the Riemann sphere to the Riemann sphere.”

**Sources:** none listed. No primary source with a working link was found.

### An interior accumulation point forces analytic functions to agree

**Remember:** Zeros must gather where the function still has a Taylor series.

*Rules out counterexamples.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** An accumulation point of a set S is a point a such that every disk about a contains a point of S other than a. For the identity theorem, a must lie in the domain, where f − g has a Taylor series.

**Problem.** Two holomorphic functions on a connected open set agree everywhere if their agreement set has an accumulation point inside it.

**How the definition helps.** At a, the difference f − g has a Taylor series, and a first nonzero term would make its zeros isolated near a, so all terms vanish (our own). Connectedness spreads this local agreement over the whole set (our own). The point must be inside: sin(1/z) on the punctured plane has zeros that gather only at the missing point zero (our own).

**Wikipedia:** [Identity theorem](https://en.wikipedia.org/wiki/Identity_theorem). It says: “if f = g on some S ⊆ D, where S has an accumulation point in D, then f = g on D.”

**Sources:** none listed. No primary source with a working link was found.

### Counting zeros with multiplicity makes the argument principle exact

**Remember:** Each zero or pole is a power, contributing its exponent.

*Makes the theorem clean to state or prove.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Near a, write f(z) = (z − a)ⁿg(z) with n an integer and g holomorphic near a with g(a) ≠ 0. Then a is a zero of multiplicity n if n &gt; 0 and a pole of order −n if n &lt; 0.

**Problem.** Let f be meromorphic near a positively oriented, simple, closed, piecewise smooth contour C and its interior, with no zeros or poles on C. Then (1/(2πi)) ∮<sub>C</sub> (f′/f) dz equals the number of interior zeros minus the number of interior poles, counted with multiplicity.

**How the definition helps.** Near each zero or pole, f′/f = n/(z − a) + g′/g, so its residue is the signed order n (our own). The residue theorem adds these signed orders (our own).

**Wikipedia:** [Argument principle](https://en.wikipedia.org/wiki/Argument_principle). It says: “where Z and P denote respectively the number of zeros and poles of f inside the contour C, with each zero and pole counted as many times as its multiplicity and order, respectively, indicate.”

**Sources:** none listed. No primary source with a working link was found.

### Defining analytic by local power series makes zeros isolated at once

**Remember:** After the first nonzero term, the leftover factor stays nonzero nearby.

*True by definition. Confidence: medium.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a complex function analytic on an open set if near each point it equals a convergent power series. If the series at z₀ has a first nonzero term c(z − z₀)ᵏ, the series is (z − z₀)ᵏ times a series with nonzero constant term c.

**Problem.** Let f be analytic near z₀ with f(z₀) = 0. If f is not zero on the whole of any neighbourhood of z₀, then some neighbourhood of z₀ has no other zero.

**How the definition helps.** Since f is not zero on a whole neighbourhood of z₀, its Taylor series has a first nonzero term (our own). Factor out that power of z − z₀ (our own). The remaining series has nonzero constant term, so by continuity it is nonzero near z₀ (our own).

**nLab:** [analytic function](https://ncatlab.org/nlab/show/analytic+function). It says: “An analytic function is a function that is locally given by a converging power series.”

**Sources:** none listed. No primary source with a working link was found.

### Defining zero order by factoring out (z − z₀)ⁿ makes orders add

**Remember:** Multiplying the factorizations multiplies the powers, so the orders add.

*True by definition. Confidence: medium.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Let f be analytic near z₀ and not identically zero there. Its order at z₀ is the n ≥ 0 with f(z) = (z − z₀)ⁿ u(z) for some analytic u with u(z₀) ≠ 0.

**Problem.** Let f and g be analytic near z₀, and let neither be identically zero there. Then the order of fg at z₀ is the sum of the orders of f and g.

**How the definition helps.** If f = (z − z₀)ⁿu and g = (z − z₀)ᵐv, then fg = (z − z₀)ⁿ⁺ᵐ uv, so the exponents add (our own). The factor uv is analytic and nonzero at z₀, since u and v are nonzero there (our own).

**Wikipedia:** [Zeros and poles](https://en.wikipedia.org/wiki/Zeros_and_poles). It says: “(z − z₀)ⁿ f(z) is holomorphic and nonzero in a neighbourhood of z₀ (this is a consequence of the analytic property).”

**Sources:** none listed. No primary source with a working link was found.

### An ordered triple fixes a Möbius transformation

**Remember:** Three distinct lines fix a projective basis and hence fix the map.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 30C10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** View points of the Riemann sphere as lines through the origin in ℂ². A Möbius transformation is the action on these lines of an invertible 2×2 complex matrix, where matrices that differ by a nonzero scalar give the same action.

**Problem.** For any two ordered triples of distinct points on the Riemann sphere, exactly one Möbius map sends the first triple to the second in order.

**How the definition helps.** Three distinct lines fix a basis up to one common scalar: choose vectors on the first two lines, scaled so their sum lies on the third (our own). Distinctness makes this choice unique up to a common factor (our own). The matrix that sends one such basis to the other is then unique up to scalar, and it is the required map (our own).

**nLab:** [Riemann sphere](https://ncatlab.org/nlab/show/Riemann+sphere). It says: “the complex projective line”

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “for any two ordered triples of distinct points, there is a unique map that takes one triple to the other”

**Sources:** none listed. No primary source with a working link was found.

### Möbius maps on complex lines compose by multiplying matrices

**Remember:** Multiply the matrices to compose their Möbius maps.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 51B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the Riemann sphere as the set of complex lines through zero in ℂ². An invertible complex 2×2 matrix sends each such line to another line, and this action is its Möbius map.

**Problem.** Möbius maps form a group under composition. The map for AB is the map for B followed by the map for A.

**How the definition helps.** Applying B and then A to a line is the same as applying AB, so composition matches matrix multiplication (our own). The identity matrix fixes every line, and the inverse matrix gives the inverse map (our own).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “Möbius transformations form a group under composition, isomorphic to the projective linear group”

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “Since they act on projective coordinates, two matrices yield the same Möbius transformation if and only if they differ by a nonzero factor. The group of Möbius transformations is the projective linear group PGL(2,C).”

**Paper or page:** [Möbius Transformations form Group under Composition](https://proofwiki.org/wiki/Möbius_Transformations_form_Group_under_Composition). It says: “Let G be the set of Möbius transformations. Let ∘ denote the composition of mappings. Then (G, ∘) is a group.”

**Sources:** none listed. No primary source with a working link was found.

### The disk distance turns Schwarz–Pick into Schwarz at zero

**Remember:** Move both marked points to zero, then apply Schwarz.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 30C80, 30F45. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a in the unit disk, the disk automorphism φₐ(z) = (z − a)/(1 − āz) moves a to zero, where ā is the conjugate of a. The Poincaré distance from a to z is 2 artanh\|φₐ(z)\|, so it measures how far z is from zero once a is moved to zero.

**Problem.** Every holomorphic self-map of the open unit disk decreases or preserves Poincaré distance. Equality at two distinct points forces the map to be a disk automorphism.

**How the definition helps.** After moving a and f(a) to zero by automorphisms, Schwarz’s lemma says the new map does not increase the distance from zero (our own). Equality at a point other than zero makes the centred map a rotation, so f is a disk automorphism (our own). The formula agrees with the distance defined by shortest hyperbolic path length (our own).

**Wikipedia:** [Schwarz lemma](https://en.wikipedia.org/wiki/Schwarz_lemma). It says: “decreases the distance of points in the Poincaré metric.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring a zero gives a local power map

**Remember:** A local root of the nonzero factor turns the function into a power.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30C35 (General theory of conformal mappings), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The order m of f at a is the exponent in f(z) − f(a) = (z − a)ᵐu(z), where u is holomorphic near a and u(a) ≠ 0. Since u is nonzero near a, it has a holomorphic mth root there.

**Problem.** Near each point a of a nonconstant holomorphic function on a domain, a holomorphic coordinate w gives f(z) = f(a) + w(z)ᵐ. Consequently the function maps open sets to open sets.

**How the definition helps.** Take a holomorphic mth root v of u on a small disk and set w(z) = (z − a)v(z), so f(z) = f(a) + w(z)ᵐ (our own). Since w′(a) = v(a) ≠ 0, the inverse function theorem makes w a local coordinate (our own). The power map sends disks about zero onto disks, so f maps open sets to open sets (our own).

**Wikipedia:** [Open mapping theorem (complex analysis)](https://en.wikipedia.org/wiki/Open_mapping_theorem_%28complex_analysis%29). It says: “it sends open subsets of U to open subsets of ℂ”

**Sources:** none listed. No primary source with a working link was found.

### Fixing a base point and direction makes the Riemann map unique

**Remember:** Center the map and fix its direction, and no disk symmetry remains.

*Rules out counterexamples.* MSC 30C35 (General theory of conformal mappings), 30C20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Fix a point a in the domain. A conformal bijection f to the unit disk is normalized if f(a) = 0 and f′(a) is a positive real number, so the first condition fixes the centre and the second fixes the rotation.

**Problem.** For every proper simply connected plane domain and every point a in it, exactly one normalized conformal bijection to the disk exists.

**How the definition helps.** If f and g are normalized, g∘f⁻¹ is a disk automorphism fixing zero, so Schwarz’s lemma makes it a rotation (our own). Its derivative at zero is positive, so the rotation is the identity (our own). Existence follows by moving a map from the Riemann mapping theorem so that a goes to zero and then rotating it (our own).

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “normalized such that f(a)=0 and f′(a)&gt;0.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring orientation makes conformal maps exactly the holomorphic ones

**Remember:** Angles kept and orientation kept means holomorphic with nonzero derivative.

*Rules out counterexamples.* MSC 30C35 (General theory of conformal mappings). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A plane map is conformal at a point if its real derivative there is a positive multiple of a rotation, that is, multiplication by a nonzero complex number (our own). It is conformal on an open set if this holds at every point.

**Problem.** A map on an open set in the plane is conformal if and only if it is holomorphic with nowhere-zero derivative.

**How the definition helps.** Multiplication by a nonzero complex number is exactly a nonzero complex derivative, so the condition says f is holomorphic with nonzero derivative, and conversely (our own). Complex conjugation keeps unsigned angles but reverses orientation, so its derivative is not a multiple of a rotation (our own).

**Wikipedia:** [Conformal map](https://en.wikipedia.org/wiki/Conformal_map). It says: “If U is an open subset of the complex plane ℂ, then a function f:U→ℂ is conformal if and only if it is holomorphic and its derivative is everywhere non-zero on U.”

**Sources:** none listed. No primary source with a working link was found.

### Rotation and scaling derivatives make holomorphic maps preserve angles

**Remember:** A nonzero complex derivative rotates and scales all tangent vectors together.

*True by definition.* MSC 30C35 (General theory of conformal mappings), 30A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a real differentiable map holomorphic if its derivative matrix at each point has rows (a, −b) and (b, a). This matrix is multiplication by a + ib, which turns every vector through the same angle and scales it by the same factor.

**Problem.** At any point where its derivative is nonzero, a holomorphic map preserves the angle between smooth curves with nonzero tangent vectors.

**How the definition helps.** By the chain rule, both tangent vectors are multiplied by the same nonzero number a + ib (our own). So both turn through the same angle, and the angle between them is kept (our own).

**Wikipedia:** [Cauchy–Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations). It says: “Consequently, a function satisfying the Cauchy–Riemann equations, with a nonzero derivative, preserves the angle between curves in the plane.”

**Sources:** none listed. No primary source with a working link was found.

### The largest derivative forces a disk map to be onto

**Remember:** The map stretching most at a leaves no room to miss values.

*Makes the theorem clean to state or prove.* MSC 30C35 (General theory of conformal mappings), 30C70, 30D45. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Fix a point a in a simply connected plane domain other than the whole plane. Among injective holomorphic maps from the domain into the unit disk that send a to zero, an extremal map is one with the largest \|f′(a)\|.

**Problem.** An extremal disk map exists, and every such map is onto the disk. This gives a conformal equivalence between any proper simply connected plane domain and the disk.

**How the definition helps.** If an extremal map missed a value, recentering, taking a square root and recentering again would give an allowed map with larger \|f′(a)\|, by Schwarz’s lemma for the reverse squaring map (our own). A square root of z − b, for b outside the domain, gives one allowed map after inverting and rescaling (our own). Montel’s and Hurwitz’s theorems then give an injective maximizer, since the limiting derivative is nonzero (our own).

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “the desired mapping was obtained as the solution of an extremal problem.”

**Sources:** none listed. No primary source with a working link was found.

### A mean square of Taylor terms rules out an interior maximum

**Remember:** Every nonconstant Taylor term adds a positive amount to the mean square.

*True by definition.* MSC 30C80 (Maximum principle, Schwarz's lemma, Lindelöf principle, analogues and generalizations; subordination), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Describe a holomorphic function near each point a by a convergent power series ∑ cₙ(z − a)ⁿ. Its mean square on a circle of radius r about a, the average of \|f\|² over the circle, equals ∑ \|cₙ\|²r²ⁿ.

**Problem.** A nonconstant holomorphic function on a connected open set has no interior local maximum of its magnitude. If it extends continuously to a compact closure, its maximum magnitude is on the boundary.

**How the definition helps.** The mean square is \|f(a)\|² plus \|cₙ\|²r²ⁿ for each n ≥ 1, because the cross terms average to zero on the circle (our own proof). For a nonconstant function on a connected set, the identity theorem gives some cₙ ≠ 0 with n ≥ 1. Then the average of \|f\|² exceeds \|f(a)\|², so some nearby point has \|f\| larger than \|f(a)\| (our own proof).

**Paper or page:** [Maximum Modulus Principle](https://proofwiki.org/wiki/Maximum_Modulus_Principle). It says: “Then \|f\| does not have any maximum points in the interior of D.”

**Sources:** none listed. No primary source with a working link was found.

### Circle integrals make bounded singularities removable

**Remember:** Shrink the circle, and a bounded function loses its negative powers.

*True by definition.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For f holomorphic on a punctured disk about a, its Laurent coefficient of degree n is (1/(2πi)) ∮ f(z)(z − a)<sup>(−n−1)</sup> dz around any counterclockwise circle about a inside the disk. Since any radius r gives the same value, small circles may be used.

**Problem.** A holomorphic function bounded near an isolated missing point extends holomorphically over that point.

**How the definition helps.** If \|f\| ≤ M, the coefficient of degree −k, with k ≥ 1, has magnitude at most Mrᵏ for every small r, so it is zero (our own). Laurent’s theorem then writes f as a power series, which extends f across a (our own).

**Paper or page:** [Riemann Removable Singularities Theorem](https://proofwiki.org/wiki/Riemann_Removable_Singularities_Theorem). It says: “f is bounded in a deleted neighborhood of z₀.”

**Sources:** none listed. No primary source with a working link was found.

### Principal parts turn meromorphic functions on the sphere into rational functions

**Remember:** Subtract every pole term, including the polynomial terms from infinity.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30F10, 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The principal part of a meromorphic function at a pole is the finite sum of negative-power terms of its Laurent series. At infinity, use the coordinate w = 1/z, so the principal part there is a polynomial in z without constant term.

**Problem.** Every meromorphic function on the Riemann sphere equals a constant plus the sum of its principal parts, including the part at infinity. Hence it is rational.

**How the definition helps.** Subtracting all principal parts leaves a function holomorphic on the whole sphere, which is constant (our own). Each finite principal part is rational and the part at infinity is a polynomial, so the function is rational (our own). Compactness of the sphere ensures that there are only finitely many poles (our own).

**nLab:** [Laurent series](https://ncatlab.org/nlab/show/Laurent+series). It says: “if all but finitely many negatively indexed terms are zero.”

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “the field of rational functions on the sphere”

**Sources:** none listed. No primary source with a working link was found.

### Signed orders give the residues of logarithmic derivatives

**Remember:** A power contributes its exponent to the residue of the logarithmic derivative.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The signed order of a meromorphic function f at a is the integer m with f(z) = (z − a)ᵐu(z), where u is holomorphic and nonzero at a. It is positive at zeros and negative at poles.

**Problem.** The residue of the logarithmic derivative f′/f at an isolated zero or pole of f is the signed order of f there.

**How the definition helps.** Differentiating the factorization gives f′/f = m/(z − a) + u′/u (our own). The term u′/u is holomorphic near a, so the residue is m (our own).

**Paper or page:** [Proposition 5.1. (The logarithmic derivative)](https://venhance.github.io/napkin/Napkin.pdf). It says: “A pole at each zero of f whose residue is the multiplicity, and a pole at each pole of f whose residue is the negative of the pole's order.”

**Sources:** none listed. No primary source with a working link was found.

### The limit test makes essential singularities have dense images

**Remember:** Essential means neither fillable nor infinite, so no disk is missed.

*Rules out counterexamples.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)). arXiv math.CV. Level 2: later undergraduate.

**Definition.** An isolated singularity is essential if the function neither extends holomorphically across it nor tends to infinity there.

**Problem.** On every sufficiently small punctured disk about an essential singularity, the function takes values in every open disk in the complex plane.

**How the definition helps.** If f missed a disk of radius ε about b near the point, then 1/(f − b) would be bounded by 1/ε, so it would extend holomorphically (our own). A nonzero extension value would let f extend, and a zero value would make f tend to infinity (our own). The definition excludes both outcomes (our own).

**Paper or page:** [Weierstrass-Casorati Theorem](https://proofwiki.org/wiki/Weierstrass-Casorati_Theorem). It says: “Let f have an essential singularity at a.”

**Sources:** none listed. No primary source with a working link was found.

### The principal part classifies isolated singularities

**Remember:** Count the negative powers: none, finitely many, or infinitely many.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Let f be holomorphic on a disk with its centre a removed. The principal part of f at a is the sum of the negative-power terms of its Laurent series about a.

**Problem.** A zero principal part gives a removable singularity, and finitely many nonzero negative-power terms give a pole if any occur. Infinitely many nonzero negative-power terms give an essential singularity.

**How the definition helps.** If the principal part is zero, what remains is a Taylor series, which extends across a (our own). If its lowest exponent is −m, then (z − a)ᵐf is holomorphic and nonzero at a, so f has a pole (our own). With infinitely many terms neither can happen, since the Laurent expansion is unique (our own).

**Wikipedia:** [Laurent series](https://en.wikipedia.org/wiki/Laurent_series). It says: “the series of terms with negative degree”

**Paper or page:** [Existence of Laurent Series](https://proofwiki.org/wiki/Existence_of_Laurent_Series). It says: “Let f: B′(z₀, R) → ℂ be holomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Arc length bounds contour integrals

**Remember:** Keep total length and discard direction to bound the integral.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30A10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The length of a piecewise smooth path γ is the integral of its speed \|γ′(t)\|. It also equals the least upper bound of the lengths of polygonal paths through successive points on γ.

**Problem.** The magnitude of the contour integral of a continuous function is at most its largest magnitude on the path times the path length.

**How the definition helps.** The triangle inequality gives \|∫ f(γ(t))γ′(t) dt\| ≤ ∫ \|f(γ(t))\| \|γ′(t)\| dt (our own proof). Replacing \|f\| by its maximum M leaves M times the integral of speed, which is the length.

**Paper or page:** [Lemma 6.3. (ML estimation lemma)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then \|∮α f(z) dz\| ≤ ML.”

**Sources:** none listed. No primary source with a working link was found.

### Complex contour integrals keep direction but ignore speed

**Remember:** The velocity carries both the speed and the direction.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a continuous f and a contour γ made of smooth pieces, the contour integral is ∫ f(γ(t))γ′(t) dt. The velocity γ′(t) records both speed and direction, so a change of speed is absorbed by the substitution rule while a change of direction is not.

**Problem.** An increasing smooth change of parameter preserves a contour integral along the same path. Reversing the path changes the sign.

**How the definition helps.** Under an increasing change of parameter, the chain rule turns γ′(t) dt into the new velocity times the new dt, so the real substitution rule applies (our own proof). Reversing the path reverses the limits of integration and changes the sign. An integral against speed alone would be an arc length integral, which reversal does not change (our own comparison).

**nLab:** [line integral](https://ncatlab.org/nlab/show/line+integral). It says: “In particular, dz is interpreted as z′(t) dt.”

**Paper or page:** [Contour Integral is Independent of Parameterization](https://proofwiki.org/wiki/Contour_Integral_is_Independent_of_Parameterization). It says: “Let C be a contour defined by a finite sequence C₁, …, Cₙ of directed smooth curves.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous complex derivatives let Green’s theorem prove Cauchy’s theorem

**Remember:** A continuous complex derivative lets Green’s theorem apply.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Use Cauchy’s original definition of holomorphic: a complex derivative at every point of an open set, and that derivative is continuous. Then the real and imaginary parts have continuous first partial derivatives.

**Problem.** Let f be holomorphic on an open set containing a simple, closed, piecewise smooth curve and all of its interior. The integral of f around the curve is zero.

**How the definition helps.** Continuous first partial derivatives let Green’s theorem turn the curve integral into area integrals (our own). The Cauchy–Riemann equations make both area integrands zero (our own). Goursat’s theorem later removed the continuity assumption.

**Wikipedia:** [Cauchy's integral theorem](https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem). It says: “Cauchy provided this proof, but it was later proven by Goursat without requiring techniques from vector calculus, or the continuity of partial derivatives.”

**Paper or page:** [Holomorphic 1-forms are closed](https://proofwiki.org/wiki/Holomorphic_1-forms_are_closed), [Cauchy-Goursat Theorem](https://proofwiki.org/wiki/Cauchy-Goursat_Theorem). It says: “Holomorphic 1-forms are closed.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Defining simple connectivity by primitives gives holomorphic logarithms

**Remember:** Every holomorphic function has a primitive, so f′/f has one too.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a connected open set in the plane holomorphically simply connected if every holomorphic function on it has a holomorphic primitive, a function whose derivative is the given one.

**Problem.** Every nowhere-zero holomorphic function f on such a set has a holomorphic logarithm g, meaning exp(g) = f.

**How the definition helps.** The definition gives a primitive h of f′/f. Then f exp(−h) has derivative zero, so by connectedness it is a nonzero constant c (our own). Choose b with exp(b) = c; then h + b is a logarithm of f (our own).

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “(3) ⇒ (4) by integrating f⁻¹ df/dz along γ from a to x to give a branch of the logarithm.”

**Paper or page:** [Existence of logarithms](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let f : U → ℂ be holomorphic. Then f has a logarithm if and only if (1/(2πi)) ∮γ (f′/f) dz = 0 for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Laurent coefficients make every derivative have zero residue

**Remember:** Residue is the 1/(z − a) coefficient; derivatives never produce that term.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For f holomorphic on a punctured disk about a, its residue at a is the coefficient of (z − a)⁻¹ in its Laurent series.

**Problem.** If a function is holomorphic on a punctured disk, its derivative has zero residue at the center.

**How the definition helps.** Termwise, (z − a)ⁿ differentiates to n(z − a)ⁿ⁻¹, so the power −1 could only come from n = 0, whose factor n is zero (our own). Termwise differentiation is allowed because the Laurent series converges locally uniformly on the punctured disk (our own).

**nLab:** [residue](https://ncatlab.org/nlab/show/residue). It says: “the coefficient of (z − ζ)⁻¹”

**Sources:** none listed. No primary source with a working link was found.

### Local circle integrals make the residue theorem a boundary sum

**Remember:** Cut out each singularity and read off its circle integral.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The residue of f at an isolated singularity a is 1/(2πi) times the integral of f around a small counterclockwise circle about a. Cauchy’s theorem makes the value independent of the radius.

**Problem.** Suppose f is holomorphic on and inside a piecewise smooth simple closed contour except for finitely many interior poles. The counterclockwise integral of f equals 2πi times the sum of their residues.

**How the definition helps.** Remove a small disk around each pole and apply Cauchy’s theorem to the region that is left (our own). Its boundary integral is zero, so the outer integral is the sum of the small circle integrals (our own). By the definition, each circle integral is 2πi times a residue (our own).

**Paper or page:** [Theorem 4.3. (Cauchy's residue theorem)](https://venhance.github.io/napkin/Napkin.pdf). It says: “1/(2πi) ∮γ f(z) dz = ∑\[pole p\] Wind(γ, p) Res(f; p)”

**Sources:** none listed. No primary source with a working link was found.

### Local primitives make Morera’s test a segment calculation

**Remember:** Zero triangle integrals turn a long integral into a short difference.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A local primitive of f is a function F on a small disk with complex derivative F′ = f. A function is holomorphic exactly when it has a local primitive near each point, since the derivative of a holomorphic function is holomorphic.

**Problem.** A continuous function on an open set is holomorphic if its integral around the boundary of every solid triangle in that set vanishes.

**How the definition helps.** In a disk, define F(w) as the integral of f along the segment from the centre to w (our own proof). Zero triangle integrals make F(w) − F(z) the integral along the segment from z to w, and continuity of f gives F′(z) = f(z). So f has local primitives, and it is holomorphic as the derivative of a holomorphic function (our own proof).

**Paper or page:** [Morera's Theorem](https://proofwiki.org/wiki/Morera's_Theorem). It says: “Then f is analytic on D.”

**Sources:** none listed. No primary source with a working link was found.

### Locally uniform convergence controls all complex derivatives

**Remember:** Control the function on circles to control its derivatives inside.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** On an open set U, fₙ converges locally uniformly to f if the largest error \|fₙ − f\| on K tends to zero for every compact K inside U. So one error bound holds on all small circles of a fixed radius around the points of a compact set (our own proof).

**Problem.** A locally uniform limit of holomorphic functions is holomorphic. For each derivative order, the derivatives converge locally uniformly to that derivative of the limit.

**How the definition helps.** Cauchy’s estimate bounds each derivative of fₙ − f at a point by the largest error on a small circle around it, so the derivatives converge where the functions do (our own extension). Choose one radius small enough that these circles lie in a larger compact subset of U. The limit is holomorphic by the holomorphic limit theorem, so its derivatives exist.

**Paper or page:** [Derivative of Uniform Limit of Analytic Functions](https://proofwiki.org/wiki/Derivative_of_Uniform_Limit_of_Analytic_Functions). It says: “converges locally uniformly to f′.”

**Sources:** none listed. No primary source with a working link was found.

### Residues of forms make all residues on the sphere sum to zero

**Remember:** Take residues of the form f(z) dz, not of f.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30F30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The residue at infinity of f, holomorphic outside some disk, is the residue of the form f(z) dz at the point ∞ of the sphere. In the coordinate w = 1/z this form is −f(1/w) dw/w², so the residue is the coefficient of w⁻¹ in −f(1/w)/w².

**Problem.** Let f be holomorphic on the plane except at finitely many isolated singular points. Then the sum of all its residues, including the residue at infinity, is zero.

**How the definition helps.** One integral of f(z) dz over a large circle computes both sides, so the residues cancel (our own). Counterclockwise, the residue theorem gives 2πi times the sum of the finite residues (our own). In w = 1/z the same path circles zero clockwise, giving −2πi times the residue at infinity (our own).

**Wikipedia:** [Residue at infinity](https://en.wikipedia.org/wiki/Residue_at_infinity), [Residue (complex analysis)](https://en.wikipedia.org/wiki/Residue_%28complex_analysis%29). It says: “the reason that we consider instead −(1/z²) f(1/z) is that one does not take residues of functions, but of differential forms”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric principal values give real poles half a residue

**Remember:** A gap centred at a pole costs half a turn.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The principal value of a real-line integral removes an interval (a − ε, a + ε) centred at each real pole a. It then lets ε shrink to zero and the outer endpoints tend to ±∞. Because each gap is centred at its pole, a small semicircle over it closes the contour (our own).

**Problem.** Suppose a rational function decays at least as fast as 1/\|z\|² at infinity and each real pole is simple. Its principal value equals 2πi times the upper-half-plane residue sum plus πi times the real residue sum.

**How the definition helps.** Each centred gap is closed by a small upper semicircle, whose integral tends to −πi times the residue at a simple pole (our own). The residue theorem on the closed contour and the decay on the large semicircle give the rest (our own).

**Wikipedia:** [Cauchy principal value](https://en.wikipedia.org/wiki/Cauchy_principal_value). It says: “where the portion inside the disk of radius ε around the pole has been removed.”

**Paper or page:** [Residue at Simple Pole](https://proofwiki.org/wiki/Residue_at_Simple_Pole). It says: “Let f have a simple pole at a.”

**Sources:** none listed. No primary source with a working link was found.

### Taylor coefficients evaluate residues after clearing a pole

**Remember:** Multiply by (z − a)ᵐ; the residue becomes coefficient m − 1.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The residue of f at a is the coefficient of 1/(z − a) in its Laurent series at a. At a pole of order m the series starts at (z − a)⁻ᵐ, so multiplying by (z − a)ᵐ clears the pole.

**Problem.** At a pole a of order m, the product of f with (z − a) to the power m extends holomorphically. The residue is its Taylor coefficient of degree m − 1.

**How the definition helps.** Multiplying by (z − a)ᵐ adds m to every exponent, so the 1/(z − a) term moves to degree m − 1 (our own). The new series has no negative powers, so it is the Taylor series of the extension (our own).

**Paper or page:** [Residue at Multiple Pole](https://proofwiki.org/wiki/Residue_at_Multiple_Pole). It says: “Let f have a single pole in D, of order N, at a.”

**Sources:** none listed. No primary source with a working link was found.

### The integral definition of winding makes products add their turns

**Remember:** Logarithmic derivatives turn products of loops into sums of turns.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a piecewise smooth loop γ avoiding zero is the time integral of γ′(t)/γ(t), divided by 2πi. This integrand is the logarithmic derivative of γ, and it counts signed turns about zero.

**Problem.** For two such loops on the same time interval, the winding number of their pointwise product equals the sum of their winding numbers.

**How the definition helps.** The product rule gives (γδ)′/(γδ) = γ′/γ + δ′/δ, as in the quote, so the two integrals add (our own).

**Paper or page:** [Logarithmic Derivative of Product of Analytic Functions](https://proofwiki.org/wiki/Logarithmic_Derivative_of_Product_of_Analytic_Functions). It says: “(fg)′(z)/(fg)(z) = f′(z)/f(z) + g′(z)/g(z)”

**Sources:** none listed. No primary source with a working link was found.

### The integral winding number is constant between crossings

**Remember:** An integer that changes continuously cannot change at all.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a closed contour γ about a point a off γ is the integral of 1/(z − a) along γ, divided by 2πi. It is an integer, and it varies continuously with a because the integrand does (our own).

**Problem.** The winding number is constant on each connected region outside the image of a piecewise smooth loop. It is zero on the unbounded region.

**How the definition helps.** A continuous integer-valued function is constant on each connected region (our own). Far from γ the integrand is uniformly small, so the integral tends to zero on the unbounded region (our own). The integer values come from reading the integral as the total change of angle divided by 2π (our own).

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “The winding numbers of the curve around two points in the same region are equal.”

**Sources:** none listed. No primary source with a working link was found.

### The triangle test makes parameter integrals holomorphic

**Remember:** Zero triangle integrals stay zero after integrating over a parameter.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic when its integral around the boundary of every solid triangle in the set is zero. Morera’s and Cauchy’s theorems show that this agrees with complex differentiability.

**Problem.** Let f(z, t) be jointly continuous on an open set of complex z times a compact real interval of t. If f is holomorphic in z for each t, its integral over t is holomorphic in z.

**How the definition helps.** Integrate each zero triangle integral over t and swap the order by Fubini’s theorem, using joint continuity on compact sets (our own proof). The parameter integral is continuous by uniform continuity on compact sets, so it passes the triangle test (our own proof).

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem). It says: “This in fact characterizes holomorphy, i.e. f is holomorphic on D if and only if the above conditions hold.”

**Sources:** none listed. No primary source with a working link was found.

### Winding divisible by n detects a holomorphic nth root

**Remember:** A root makes one turn for every n turns of f.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A holomorphic nth root of f is a holomorphic g with gⁿ = f, so g′/g = (1/n) f′/f (our own). The winding of a nonvanishing f along a closed contour is (1/2πi)∮ f′/f, the signed turns of its values around zero.

**Problem.** Let f be holomorphic with no zeros on a connected open set. It admits a holomorphic nth root exactly when its winding on every closed contour is a multiple of n.

**How the definition helps.** If gⁿ = f, then f′/f = n g′/g, so the winding of f is n times an integer (our own). Conversely, fix a root at a base point and continue it by the factor exp((1/n)∫ f′/f) along paths (our own). Divisibility by n makes this factor path independent, and logarithmic differentiation shows its nth power is f (our own).

**Paper or page:** [Theorem 4.1. (Existence of holomorphic nth roots)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then f has a holomorphic nth root if and only if (1/2πi) ∮γ (f′/f) dz ∈ nℤ for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Winding number gives one Cauchy formula for all turns

**Remember:** If a contour turns twice, Cauchy’s formula counts the value twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a closed piecewise smooth path γ about a point a off γ is the integral of 1/(z − a) along γ, divided by 2πi. It counts signed turns around a, so a contour that turns twice counts twice.

**Problem.** Let γ be a closed contour in a disk where f is holomorphic, and let a lie in the disk off γ. The integral of f(z)/(z − a) along γ equals 2πi times f(a) times the winding number about a.

**How the definition helps.** Write f(z) = f(a) + (f(z) − f(a)); the second part divided by z − a extends holomorphically at a (our own proof). Cauchy’s theorem in the disk makes its integral zero, and the first part gives 2πi f(a) times the winding number (our own proof).

**Paper or page:** [Theorem 6.1. (Cauchy's integral formula)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then for any point a in the interior of D, we have f(a) = (1/2πi) ∮γ f(z)/(z − a) dz.”

**Sources:** none listed. No primary source with a working link was found.

### Zero triangle integrals show the Gamma integral is holomorphic

**Remember:** Holomorphic means zero triangle integrals, and those survive integrating in x.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 33B15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic when its integral around every triangle boundary in the set is zero. This test passes through an integral over a parameter once Fubini’s theorem swaps the integrals (our own).

**Problem.** Define Γ(s) by integrating exp((s − 1) log x − x) over real x &gt; 0. The resulting function is holomorphic where the real part of s is positive.

**How the definition helps.** For each x &gt; 0 the integrand is entire in s, so its triangle integrals vanish, and Fubini’s theorem moves the x-integral outside (our own). On 0 &lt; a ≤ Re(s) ≤ b the integrand is bounded by xᵃ⁻¹e⁻ˣ for x &lt; 1 and by xᵇ⁻¹e⁻ˣ for x ≥ 1 (our own). These integrable bounds justify Fubini’s theorem and give continuity by dominated convergence (our own).

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem), [Gamma function](https://en.wikipedia.org/wiki/Gamma_function). It says: “Morera's theorem can also be used in conjunction with Fubini's theorem and the Weierstrass M-test to show the analyticity of functions defined by sums or integrals”

**Sources:** none listed. No primary source with a working link was found.

### Zero winding around holes gives Cauchy’s theorem for arbitrary contours

**Remember:** Check winding around missing points, not whether the domain has holes.

*Rules out counterexamples.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A closed contour in an open set U is null homologous there when its winding number, its count of signed turns, is zero around every point outside U.

**Problem.** If f is holomorphic on U, its integral around each null homologous contour in U is zero.

**How the definition helps.** Zero winding excludes loops that encircle a missing point, where f may be singular. In U = ℂ minus zero, the unit circle winds once around zero and the integral of 1/z is 2πi (our own calculation). The general Cauchy theorem proves that zero winding outside U suffices.

**Wikipedia:** [Cauchy's integral theorem](https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem). It says: “the Cauchy integral theorem does not apply here since f(z) = 1/z is not defined (and is certainly not holomorphic) at z = 0.”

**Paper or page:** [Cauchy-Goursat Theorem/Corollary 1](https://proofwiki.org/wiki/Cauchy-Goursat_Theorem/Corollary_1). It says: “Let Int C ⊆ U, where Int C denotes the interior of C.”

**Sources:**

- [L. V. Ahlfors, Complex Analysis, 3rd ed. (1979), chapter 4, §§4.3–4.5, including A. F. Beardon’s proof.](https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf)

### Zero winding detects a holomorphic logarithm on any domain

**Remember:** A logarithm exists when no loop gains a full turn.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A holomorphic logarithm of a nonvanishing f is a holomorphic L with exp(L) = f, so L′ = f′/f. The winding of f along a closed contour is (1/2πi)∮ f′/f, the signed turns of its values around zero.

**Problem.** A nonvanishing holomorphic function on a connected open set admits a holomorphic logarithm exactly when its winding is zero on every closed contour there.

**How the definition helps.** A logarithm is a primitive of f′/f, and f′/f has a primitive exactly when all its closed contour integrals vanish (our own proof). Given a primitive L, f·exp(−L) has zero derivative, so adding a constant to L gives exp(L) = f (our own proof).

**Paper or page:** [Theorem 5.1. (Existence of logarithms)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then f has a logarithm if and only if (1/2πi) ∮γ (f′/f) dz = 0 for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Adding a point at infinity makes poles ordinary points

**Remember:** Add one point at infinity, and the poles have somewhere to go.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30F10 (Compact Riemann surfaces and uniformization), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The Riemann sphere is the plane with one point ∞ added, with coordinate 1/z near ∞. So a map is holomorphic at a point it sends to ∞ when 1/f is holomorphic there.

**Problem.** Every rational function extends to a holomorphic map from the Riemann sphere to itself that sends its poles to ∞. Apart from the constant map to ∞, these are all the holomorphic maps from the sphere to itself.

**How the definition helps.** At each pole of a rational function f, 1/f is holomorphic, as the chart at ∞ requires; the source chart 1/z treats z = ∞ the same way (our own). Conversely, a sphere map other than constant ∞ has finitely many poles by compactness (our own). Subtracting their rational principal parts leaves a holomorphic function on the compact sphere, which is constant (our own).

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “For example, any rational function on the complex plane can be extended to a holomorphic function on the Riemann sphere, with the poles of the rational function mapping to infinity.”

**Sources:** none listed. No primary source with a working link was found.

### The positive Jacobian test makes every Riemann surface orientable

**Remember:** Multiplying by α scales areas by \|α\|², never flipping them.

*True by definition.* MSC 30F99 (Riemann surfaces). arXiv math.CV, math.GT. Level 2: later undergraduate.

**Definition.** A smooth surface is orientable when it has an atlas whose coordinate changes all have positive Jacobian determinant. A Riemann surface has an atlas whose coordinate changes are holomorphic bijections, so their real derivatives are multiplications by nonzero complex numbers.

**Problem.** Every Riemann surface is orientable.

**How the definition helps.** The complex atlas is already an oriented atlas. Multiplication by α, the nonzero complex derivative of a coordinate change, has real determinant \|α\|² &gt; 0.

**Wikipedia:** [Riemann surface](https://en.wikipedia.org/wiki/Riemann_surface). It says: “However, the real determinant of multiplication by a complex number α equals \|α\|², so the Jacobian of h has positive determinant. Consequently, the complex atlas is an oriented atlas.”

**Sources:** none listed. No primary source with a working link was found.

### Germs as a space make monodromy follow from path lifting

**Remember:** Analytic continuation is path lifting in the space of germs.

*True by definition. Confidence: medium.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30F99. arXiv math.CV. Level 3: graduate.

**Definition.** A germ at z is an analytic function near z, with two counted equal if they agree on some neighborhood of z. The germs of each analytic function on a disk form an open set mapping bijectively onto the disk. So continuing a germ along a path means lifting the path (our own).

**Problem.** Let G be a simply connected open region in the plane. If a germ at a point of G continues along every path in G from that point, it extends to one holomorphic function on G.

**How the definition helps.** Continuation along a path is its lift, and lifts of nearby paths with fixed endpoints end at the same germ (our own). So the endpoint germ is constant along homotopies, and simple connectivity makes it path independent (our own). These germs agree locally, so they define one holomorphic function on G (our own).

**Wikipedia:** [Analytic continuation](https://en.wikipedia.org/wiki/Analytic_continuation), [Monodromy theorem](https://en.wikipedia.org/wiki/Monodromy_theorem). It says: “In the above language this means that if G is a simply connected domain, and S is a sheaf whose set of base points contains G, then there exists an analytic function f on G whose germs belong to S.”

**Paper or page:** [Uniqueness of Analytic Continuation](https://proofwiki.org/wiki/Uniqueness_of_Analytic_Continuation). It says: “Let F₁ and F₂ be analytic continuations of f to V. Then F₁ = F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Band limits diagonalize mean squares

**Remember:** A narrow spectrum cannot reach any gap between distinct frequencies.

*Rules out counterexamples. Confidence: medium.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 42A38. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** Fix T &gt; 0 and N ≥ 1, and weight time t by w(t/T), where w is smooth and rapidly decreasing. Its Fourier transform ŵ(ξ), the integral of w(u) exp(−iuξ) over ℝ, must vanish for \|ξ\| ≥ T/N. Distinct frequencies log m, log n with m, n ≤ N differ by at least 1/N, so this weight sees only equal frequencies (our own).

**Problem.** For P(t) = ∑ over n ≤ N of a(n) exp(−it log n), the integral of w(t/T)\|P(t)\|² over ℝ equals Tŵ(0)∑ \|a(n)\|².

**How the definition helps.** Expanding \|P\|² gives cross terms a(m) times the conjugate of a(n) times Tŵ(T log(m/n)), which vanish since \|log(m/n)\| ≥ 1/N for distinct m, n ≤ N (our own). The diagonal terms give Tŵ(0)∑\|a(n)\|² (our own). The cited estimate has no cutoff and bounds the cross terms by Fourier decay instead.

**Paper or page:** [Extreme values of Dirichlet polynomials with multiplicative coefficients](https://arxiv.org/abs/2303.06739). It says: “M<sub>1</sub>(R, T) = T{\\hat\\Phi }(0) (1 + O(T<sup>-1</sup>) ) \\sum <sub>n\\leqslant X</sub> \|r<sub>f</sub>(n)\|<sup>2</sup>.”

**Sources:**

- [Max Wenqiang Xu, Daodao Yang, Extreme values of Dirichlet polynomials with multiplicative coefficients](https://arxiv.org/abs/2303.06739)

### Prime phases recover time moments

**Remember:** Give each prime its own random phase on the circle.

*Makes the theorem clean to state or prove.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 11K06. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** Model the phases exp(−it log n) by a random multiplicative function. Give each prime p ≤ N an independent uniform point U(p) on the unit circle. Multiply over prime factors, so U(1) = 1 and U(mn) = U(m)U(n) when mn ≤ N.

**Problem.** Put P(t) = ∑ a(n) exp(−it log n) and X = ∑ a(n)U(n), summing over 1 ≤ n ≤ N. For each real q &gt; 0, the average of the qth power of \|P(t)\| over \[0, T\] tends to the expected qth power of \|X\| as T grows.

**How the definition helps.** The phases exp(−it log p) for primes p ≤ N become equidistributed on the product of circles (our own). Unique factorization makes the numbers log p linearly independent over ℚ, which gives this (our own). Weyl’s criterion then gives the limit for the continuous function of the phases that equals \|X\| to the qth power (our own).

**Wikipedia:** [Equidistribution theorem](https://en.wikipedia.org/wiki/Equidistribution_theorem). It says: “equidistribution is equivalent to having a non-trivial estimate for the exponential sums formed with the sequence as exponents.”

**Sources:** none listed. No primary source with a working link was found.

### Product coefficients simplify even moments

**Remember:** Raise to the kth power first, then take the mean square.

*Makes the theorem clean to state or prove.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable). arXiv math.NT. Level 3: graduate.

**Definition.** Let P(t) = ∑ a(n) exp(−it log n) over 1 ≤ n ≤ N. Its power P(t)ᵏ is again such a sum, with coefficient b(m) = ∑ a(n₁)⋯a(nₖ) over ordered k-tuples in \[1, N\] with product m. So the 2kth moment of P is the mean square of Pᵏ, with terms up to m = Nᵏ.

**Problem.** On any interval of length T, the integral of \|P(t)\|²ᵏ equals (T + O(Nᵏ))∑ \|b(m)\|². The implied constant is absolute.

**How the definition helps.** Since \|P\|²ᵏ = \|Pᵏ\|², the even moment is a mean square with one coefficient b(m) for each m ≤ Nᵏ (our own). The Montgomery–Vaughan mean value theorem gives (T + O(Nᵏ))∑\|b(m)\|² for such a sum. For prime indices each product has at most k! orders, which gives the cited bound.

**Paper or page:** [Conditional mean values of long Dirichlet polynomials](https://arxiv.org/abs/2201.02108). It says: “\\int \_T<sup>2T</sup>\\bigg\|\\sum <sub>p\\leqslant x</sub>\\frac{a(p)}{p<sup>1/2+it</sup>}\\bigg\|<sup>2k</sup>dt\\ll Tk!\\bigg(\\sum <sub>p\\leqslant x</sub>\\frac{\|a(p)\|<sup>2}{p}\\bigg</sup>)<sup>k</sup>.”

**Sources:**

- [H. L. Montgomery and R. C. Vaughan, Hilbert’s inequality, J. London Math. Soc. 8 (1974), 73–82](https://doi.org/10.1112/jlms/s2-8.1.73)

### Summatory weights expose mean squares

**Remember:** On the log scale, partial sums transform to A(s)/s.

*Makes the theorem clean to state or prove.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 44A15. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** For a finite Dirichlet polynomial A(s) = ∑ a(n) exp(−s log n), let S(x) be the sum of a(n) over n ≤ x. On the log scale, F(u) = exp(−σu)S(exp u) with σ &gt; 0 has Fourier transform A(σ+it)/(σ+it) (our own).

**Problem.** ∫ from 0 to ∞ of \|S(x)\|² exp(−(1+2σ) log x) dx equals (1/(2π))∫ over ℝ of \|A(σ+it)/(σ+it)\|² dt.

**How the definition helps.** With x = exp u, the left side becomes the integral of \|F(u)\|² (our own). Each a(n) contributes the integral of exp(−(σ+it)u) from log n to ∞ to the transform (our own). Plancherel’s theorem equates the square integrals of F and its transform, which brings the factor 1/(2π).

**nLab:** [Mellin transform](https://ncatlab.org/nlab/show/Mellin+transform). It says: “its Mellin transform is the function given by the integral expression”

**Paper or page:** [Helson's conjecture for smooth numbers](https://arxiv.org/abs/2511.03430). It says: “\\int \_0<sup>\\infty</sup> \\frac{\|\\sum <sub>1\\leqslant n \\leqslant x</sub> a<sub>n</sub>\|<sup>2}{x<sup>1</sup> + 2 \\sigma </sup>} \\,  dx \\,  = \\frac{1}{2\\pi } \\int <sub>-\\infty </sub><sup>\\infty </sup> \\biggl\| \\frac{A(\\sigma + i t)}{\\sigma + it} \\biggr\|<sup>2</sup> \\,  dt \\,  .”

**Sources:**

- [Seth Hardy, Max Wenqiang Xu, Helson's conjecture for smooth numbers](https://arxiv.org/abs/2511.03430)

### Disk automorphisms preserve Blaschke degree

**Remember:** Composing with a bijection keeps a map proper and keeps fiber counts.

*True by definition.* MSC 30C10 (Polynomials and rational functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic disk self-map is proper when inverse images of compact sets are compact. The proper ones are exactly the nonconstant finite Blaschke products: finitely many disk automorphisms multiplied together, times a constant of modulus one. Their degree is the number of preimages of any point, with multiplicity (our own).

**Problem.** Precomposing or postcomposing a nonconstant finite Blaschke product with a disk automorphism preserves its class and degree.

**How the definition helps.** Composing with a disk automorphism, a homeomorphism, keeps a map proper and keeps the number of preimages of each point (our own). The characterization then returns a Blaschke product of the same degree (our own). It is proved by dividing out the zeros and applying the maximum principle to the quotient and its reciprocal (our own).

**Paper or page:** [Multipoint Julia theorems](https://arxiv.org/abs/2101.03559v1). It says: “In particular, if γ ∈ Aut(𝔻) then B ∘ γ and γ ∘ B are still Blaschke products of the same degree d.”

**Sources:** none listed. No primary source with a working link was found.

### Blaschke sums exclude impossible zeros

**Remember:** Zeros of bounded functions crowd the circle with finite total distance.

*Rules out counterexamples.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)). arXiv math.CV. Level 3: graduate.

**Definition.** A sequence (zₙ) in the unit disk satisfies the Blaschke condition when its points approach the circle fast (our own). Precisely, their total distance to it, ∑(1 − \|zₙ\|), is finite.

**Problem.** Count the points of a disk sequence with repetition. It is the complete zero list of a nonzero bounded holomorphic disk function exactly when it satisfies the Blaschke condition.

**How the definition helps.** Jensen’s formula bounds this sum for the zeros of a bounded function, and the condition makes the Blaschke product with those zeros converge (our own). The points 1 − 1/n have no limit inside the disk, yet no nonzero bounded function vanishes at all of them (our own).

**Paper or page:** [Translation-based completeness on compact intervals](https://arxiv.org/abs/2409.17563v1). It says: “Let F ∈ 𝒪(𝔻) ∖ {0} be bounded with zeros Z = {zₙ}ₙ∈ℕ. Then the Blaschke condition is satisfied: ∑ₙ∈ℕ 1 − \|zₙ\| &lt; ∞.”

**Sources:** none listed. No primary source with a working link was found.

### Cross-ratio distortion gives the Schwarzian derivative its chain rule

**Remember:** Cross-ratio distortions multiply under composition, so their first corrections add.

*True by definition. Confidence: medium.* MSC 30C45 (Special classes of univalent and multivalent functions of one complex variable (starlike, convex, bounded rotation, etc.)), 51B10. arXiv math.CV. Level 3: graduate.

**Definition.** The Schwarzian of a locally injective holomorphic f measures how f distorts the cross-ratio of four nearby points. Let R = (z₃−z₁)(z₄−z₂)/((z₃−z₂)(z₄−z₁)) for distinct points, and let Rf be the same ratio of their images. Then Sf(z) is six times the limit of (Rf/R − 1)/((z₁−z₂)(z₃−z₄)) as all four points tend to z.

**Problem.** Where the holomorphic functions and the composite are defined and their derivatives are nonzero, S(f∘g) = ((Sf)∘g)·(g′)² + Sg. In particular, Möbius maps have zero Schwarzian wherever finite.

**How the definition helps.** The distortion ratio of f∘g is that of f at the image points times that of g, so first-order corrections add (our own). The term for f is divided by differences of image points, which brings the factor g′(z)² (our own). Möbius maps preserve cross-ratios, so their Schwarzian is zero (our own).

**Wikipedia:** [Schwarzian derivative](https://en.wikipedia.org/wiki/Schwarzian_derivative). It says: “This immediately yields the chain rule S(f∘g) = ((Sf)∘g)·(g′)² + Sg.”

**Sources:** none listed. No primary source with a working link was found.

### Loewner transition maps compose

**Remember:** Change coordinates twice, and the middle map cancels its inverse.

*True by definition.* MSC 30C55 (General theory of univalent and multivalent functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** A Loewner chain is a family of injective holomorphic maps fₜ from the disk whose images grow with t. The transition from time s to t is φₛ,ₜ = fₜ⁻¹ ∘ fₛ, defined because the image of fₛ lies inside that of fₜ.

**Problem.** Fix three times s ≤ t ≤ r in a Loewner chain. Going from s to t and then to r gives the transition from s to r.

**How the definition helps.** φₜ,ᵣ ∘ φₛ,ₜ = fᵣ⁻¹ ∘ fₜ ∘ fₜ⁻¹ ∘ fₛ, and the middle pair cancels (our own). Image inclusion keeps every point in the domain of each inverse (our own). Deriving the same law from the Loewner equation needs uniqueness of its solutions (our own).

**Wikipedia:** [Loewner differential equation](https://en.wikipedia.org/wiki/Loewner_differential_equation). It says: “By uniqueness the mappings φₛ,ₜ have the following semigroup property”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing univalent functions makes the Bieberbach coefficient bound statable

**Remember:** Fix f(0) = 0 and f′(0) = 1, then \|aₙ\| ≤ n.

*Makes the theorem clean to state or prove.* MSC 30C55 (General theory of univalent and multivalent functions of one complex variable), 30C50. arXiv math.CV. Level 3: graduate.

**Definition.** A schlicht function is a one-to-one holomorphic map of the unit disc with f(0) = 0 and f′(0) = 1. Its Taylor series is then z + a₂z² + a₃z³ + ⋯. Every one-to-one holomorphic g becomes schlicht as (g − g(0))/g′(0).

**Problem.** De Branges's theorem, once the Bieberbach conjecture, says that every schlicht function has \|aₙ\| ≤ n for all n ≥ 2. The Koebe function z/(1 − z)², with aₙ = n, shows that the bound is sharp.

**How the definition helps.** Without the normalization, scaling f by a constant would make the coefficients arbitrarily large, so no bound could hold (our own). With it, de Branges’s theorem gives \|aₙ\| ≤ n, and expanding the Koebe function gives aₙ = n (our own).

**Wikipedia:** [De Branges's theorem](https://en.wikipedia.org/wiki/De_Branges%27s_theorem), [Hurwitz's theorem (complex analysis)](https://en.wikipedia.org/wiki/Hurwitz%27s_theorem_%28complex_analysis%29). It says: “The statement concerns the Taylor coefficients aₙ of a univalent function, i.e., a one-to-one holomorphic function that maps the unit disk into the complex plane, normalized as is always possible so that a₀=0 and a₁=1.”

**Sources:**

- [L. de Branges, A proof of the Bieberbach conjecture, Acta Mathematica 154 (1985)](https://doi.org/10.1007/BF02392821)

### Curve modulus multiplies distortion bounds

**Remember:** Two distortions multiply, and reversing a map swaps the bounds.

*True by definition.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** The modulus mod Γ of a curve family Γ is the infimum of ∫ρ² dA over admissible densities. A Borel density ρ ≥ 0 is admissible if every locally rectifiable curve of Γ has ρ-length at least one. A plane homeomorphism f is K-quasiconformal, with K ≥ 1, if mod Γ/K ≤ mod f(Γ) ≤ K mod Γ for every curve family Γ.

**Problem.** The composition of quasiconformal maps with bounds K and L has bound KL. The inverse of a map with bound K has bound K.

**How the definition helps.** Applying the two-sided bound for one map and then the other gives the factor KL (our own). For the inverse, apply the bound for f to the family f⁻¹(Γ) and rearrange (our own). The hard work is showing that this definition matches the analytic one (our own).

**Wikipedia:** [Quasiconformal mapping](https://en.wikipedia.org/wiki/Quasiconformal_mapping). It says: “The inverse of a K-quasiconformal homeomorphism is K-quasiconformal.”

**Sources:**

- [Lars V. Ahlfors, Lectures on Quasiconformal Mappings, second edition (2006)](https://doi.org/10.1090/ulect/038)

### Matching Beltrami coefficients cancel distortion

**Remember:** Equal Beltrami coefficients mean derivatives differ by a complex scalar.

*True by definition. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** A quasiconformal map f is an orientation-preserving plane homeomorphism with locally square-integrable weak derivatives and \|f<sub>z</sub>̄\| ≤ k\|f<sub>z</sub>\| almost everywhere, for some k &lt; 1. Its Beltrami coefficient μ = f<sub>z</sub>̄/f<sub>z</sub>, set to zero where f<sub>z</sub> = 0, fixes the derivative f<sub>z</sub>(dz + μ dz̄) up to a complex scalar factor (our own).

**Problem.** Suppose two such maps on the same plane domain have equal Beltrami coefficients almost everywhere. Then one is the other followed by a holomorphic change of coordinates.

**How the definition helps.** Equal coefficients make the derivative of g ∘ f⁻¹ complex linear almost everywhere, by the chain rule for quasiconformal maps (our own). Its weak Cauchy–Riemann equations then make g ∘ f⁻¹ holomorphic (our own).

**nLab:** [quasiconformal map](https://ncatlab.org/nlab/show/quasiconformal+map). It says: “is called the complex dilatation μf of f, a measure for the function's failure to be a conformal map or holomorphic map.”

**Sources:**

- [Lars V. Ahlfors, Lectures on Quasiconformal Mappings, second edition (2006)](https://doi.org/10.1090/ulect/038)

### Measurable Beltrami coefficients and Sobolev maps give the measurable Riemann mapping theorem

**Remember:** Weak derivatives let a merely measurable μ define the equation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** A quasiconformal map here is an orientation-preserving homeomorphism with locally square-integrable weak first derivatives solving the Beltrami equation f<sub>z</sub>̄ = μf<sub>z</sub> almost everywhere. Because the derivatives are weak, μ need only be measurable with \|μ\| ≤ k almost everywhere, for some k &lt; 1.

**Problem.** Let D ≠ ℂ be a simply connected domain and μ measurable on D with ‖μ‖∞ &lt; 1. Then some quasiconformal homeomorphism of D onto the unit disc solves the Beltrami equation for μ, which for μ = 0 is the Riemann mapping theorem.

**How the definition helps.** Weak derivatives give f<sub>z</sub>̄ = μf<sub>z</sub> a meaning for every measurable μ with ‖μ‖∞ &lt; 1, so the theorem can be stated for all of them (our own). The measurable Riemann mapping theorem supplies the solution, and μ = 0 gives the conformal case (our own).

**Wikipedia:** [Quasiconformal mapping](https://en.wikipedia.org/wiki/Quasiconformal_mapping). It says: “suppose that μ : D → ℂ is Lebesgue measurable and satisfies ‖μ‖∞&lt;1. Then there is a quasiconformal homeomorphism f from D to the unit disk which is in the Sobolev space W1,2(D)”

**Sources:**

- [C. B. Morrey, On the solutions of quasi-linear elliptic partial differential equations, Transactions of the American Mathematical Society 43 (1938)](https://doi.org/10.1090/s0002-9947-1938-1501936-8)
- [L. Ahlfors and L. Bers, Riemann's Mapping Theorem for Variable Metrics, Annals of Mathematics 72 (1960)](https://doi.org/10.2307/1970141)

### Curve modulus is subadditive

**Remember:** The pointwise maximum of admissible densities is admissible for the union.

*True by definition.* MSC 30C70 (Extremal problems for conformal and quasiconformal mappings, variational methods), 31A15. arXiv math.CV. Level 3: graduate.

**Definition.** The modulus of a curve family is the infimum of ∫ρ² dA over Borel densities ρ ≥ 0 that give each locally rectifiable curve in the family ρ-length at least one. Densities admissible for several families combine by taking their supremum, which is admissible for the union (our own).

**Problem.** The modulus of a countable union of curve families is at most the sum of their moduli.

**How the definition helps.** The supremum of admissible densities ρᵢ is admissible for the union, and its square is at most ∑ρᵢ² (our own). Choosing ρᵢ within ε/2ⁱ of mod Γᵢ and letting ε tend to zero gives the bound (our own).

**Paper or page:** [Divergent geodesics in the Universal Teichmüller space](https://arxiv.org/abs/2307.02775v1). It says: “Subadditivity: mod(⋃ᵢ₌₁…∞ Γᵢ) ≤ ∑ᵢ₌₁…∞ mod(Γᵢ).”

**Sources:**

- [Divergent geodesics in the Universal Teichmüller space](https://arxiv.org/abs/2307.02775v1)

### Excluding rotations makes iterates converge

**Remember:** Rotations circle forever; every other self-map settles on one point.

*Rules out counterexamples.* MSC 30D05 (Functional equations in the complex plane, iteration and composition of analytic functions of one complex variable). arXiv math.CV, math.DS. Level 3: graduate.

**Definition.** An elliptic automorphism of the disk is a holomorphic bijection with an interior fixed point. In a coordinate putting that point at zero it is a rotation z ↦ eⁱᶿz, the identity included.

**Problem.** If a holomorphic disk self-map is not conjugate to a rotation, its iterates converge locally uniformly to one point of the closed disk.

**How the definition helps.** Rotations are the maps whose orbits keep circling or stay at their different starting points, so no single limit exists (our own). With an interior fixed point and no rotation, Schwarz’s lemma makes the iterates converge to that point (our own). Without one, the Denjoy–Wolff theorem gives convergence to a boundary point (our own).

**Paper or page:** [On cubic Blaschke products](https://arxiv.org/abs/2511.13484v1). It says: “Then either f is conjugate to a rotation, or there exists w₀ ∈ 𝔻̄ such that fⁿ converges to the constant map w₀ locally uniformly on 𝔻.”

**Sources:** none listed. No primary source with a working link was found.

### Rotations stop disk iterates converging

**Remember:** An interior rotation keeps orbit points circling instead of settling.

*Rules out counterexamples.* MSC 30D05 (Functional equations in the complex plane, iteration and composition of analytic functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** An elliptic disk automorphism is a holomorphic bijection of the disk with an interior fixed point, the identity included. After a change of disk coordinates it is a rotation about zero.

**Problem.** Every holomorphic disk self-map other than an elliptic automorphism has iterates converging locally uniformly to a single point of the closed disk.

**How the definition helps.** Rotations are the only self-maps whose iterates do not settle: z ↦ −z alternates at every nonzero point, and the identity has no constant limit (our own). The cited theorem handles maps that are not automorphisms. The other automorphisms become translations or dilations in half-plane coordinates, whose iterates tend to one boundary point (our own).

**Wikipedia:** [Denjoy–Wolff theorem](https://en.wikipedia.org/wiki/Denjoy%E2%80%93Wolff_theorem). It says: “the iterates of f tend to z uniformly on compact subsets of D.”

**Sources:** none listed. No primary source with a working link was found.

### Exponential type turns compact Fourier support into a growth bound

**Remember:** Support inside \[−A, A\] means growth like exp(A\|ζ\|).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30D15 (Special classes of entire functions of one complex variable and growth estimates), 42A38. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** An entire function f has exponential type at most A if, for every ε &gt; 0, some constant Cε gives \|f(ζ)\| ≤ Cε exp((A + ε)\|ζ\|) on ℂ. This is the growth of the integral of g(x) exp(ixζ) when g lives on \[−A, A\], since there \|exp(ixζ)\| ≤ exp(A\|Im ζ\|) (our own).

**Problem.** For A ≥ 0 use the Fourier kernel exp(ixζ). Transforms of L² functions supported in \[−A,A\] are exactly the entire functions of exponential type at most A square-integrable on each horizontal line.

**How the definition helps.** For g in L² supported in \[−A, A\], the bound \|exp(ixζ)\| ≤ exp(A\|Im ζ\|) gives type at most A, and Plancherel gives square integrability on horizontal lines (our own). The converse is the Paley–Wiener theorem.

**Wikipedia:** [Paley–Wiener theorem](https://en.wikipedia.org/wiki/Paley%E2%80%93Wiener_theorem). It says: “Conversely, any entire function of exponential type A which is square-integrable over horizontal lines is the holomorphic Fourier transform of an L² function supported in \[−A,A\].”

**Sources:**

- [R. Paley and N. Wiener, Fourier Transforms in the Complex Domain, AMS Colloquium Publications 19 (1934)](https://doi.org/10.1090/coll/019)

### The order of an entire function makes Hadamard's factorization finite

**Remember:** Finite order means a polynomial exponent and one fixed elementary factor.

*Makes the theorem clean to state or prove.* MSC 30D15 (Special classes of entire functions of one complex variable and growth estimates), 30D20. arXiv math.CV. Level 3: graduate.

**Definition.** The order of a nonconstant entire function f is the least ρ such that each ε &gt; 0 gives \|f(z)\| ≤ exp(\|z\| to the power ρ + ε) for large \|z\|. Equivalently, with M(r) the maximum of \|f\| on \|z\| = r, it is the upper limit of log(log M(r))/log r. Nonzero constants have order zero.

**Problem.** Every nonzero entire function of finite order ρ factors as zᵐ exp(P(z)) ∏ Eₚ(z/aₖ), where m is the zero order at zero and the aₖ list all nonzero zeros with multiplicity. Here P is a polynomial of degree at most ρ, and one nonnegative integer p ≤ ρ serves for every factor.

**How the definition helps.** Finite order forces the exponent in Weierstrass’s product to be a polynomial and lets one degree p serve every zero. Jensen’s formula bounds the number of zeros in each disk, so the sum of \|aₖ\| to the power −(p + 1) converges (our own summary). A growth estimate on the quotient by the product then shows that its logarithm is a polynomial of degree at most ρ (our own summary).

**Wikipedia:** [Weierstrass factorization theorem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem). It says: “A special case of the Weierstrass factorization theorem occurs for entire functions of finite order. In this case the pₙ can be taken independent of n and the function g(z) is a polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Elementary factors give an entire function for every sequence of zeros

**Remember:** Each factor plants one zero and stays near one elsewhere.

*Makes the theorem clean to state or prove.* MSC 30D20 (Entire functions of one complex variable (general theory)), 30C15. arXiv math.CV. Level 3: graduate.

**Definition.** Weierstrass’s elementary factors are E₀(z) = 1 − z and Eₙ(z) = (1 − z) exp(z + z²/2 + … + zⁿ/n). Each vanishes only at z = 1, and \|1 − Eₙ(z)\| ≤ \|z\|ⁿ⁺¹ for \|z\| ≤ 1, so it stays near 1 near 0.

**Problem.** For any sequence of nonzero complex numbers aₙ tending to infinity in modulus, some entire function has precisely those zeros with the listed multiplicities. Every nonzero entire function factors as zᵐ exp(g(z)) times an elementary-factor product over its nonzero zeros, with g entire.

**How the definition helps.** On each compact disk, eventually \|z/aₙ\| ≤ ½, so \|1 − Eₙ(z/aₙ)\| ≤ (½)ⁿ⁺¹ and the product converges with exactly the given zeros (our own). Dividing a given entire function by zᵐ and the product over its nonzero zeros leaves a zero-free entire function, which is exp(g) for some entire g (our own).

**Wikipedia:** [Weierstrass factorization theorem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem). It says: “The necessity of additional terms in the product is demonstrated when one considers ∏ₙ(z−cₙ) where the sequence {cₙ} is not finite. It can never define an entire function, because the infinite product does not converge.”

**Sources:** none listed. No primary source with a working link was found.

### Counting infinity as a value unifies Picard's theorems

**Remember:** On the sphere, an essential singularity misses at most two points.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30D35. arXiv math.CV. Level 3: graduate.

**Definition.** A meromorphic function is a holomorphic map into the Riemann sphere, using 1/f as the coordinate near a pole, so ∞ is a value like any other. An isolated singularity is essential if the map has no holomorphic sphere-valued extension there.

**Problem.** Near an essential singularity, a meromorphic function takes every point of the Riemann sphere infinitely often, with at most two exceptions. So a nonconstant entire function misses at most one complex value.

**How the definition helps.** Counting ∞ as a value, Great Picard’s theorem allows at most two omitted sphere values near an essential singularity (our own). A nonpolynomial entire function has an essential singularity at ∞ and already omits ∞, so it omits at most one finite value. A nonconstant polynomial takes every finite value by the fundamental theorem of algebra (our own).

**Wikipedia:** [Picard theorem](https://en.wikipedia.org/wiki/Picard_theorem). It says: “With this generalization, Little Picard Theorem follows from Great Picard Theorem because an entire function is either a polynomial or it has an essential singularity at infinity.”

**Sources:** none listed. No primary source with a working link was found.

### Adding the proximity function makes Nevanlinna's characteristic independent of the value

**Remember:** Count how often f hits a, plus how close it comes.

*Makes the theorem clean to state or prove.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** N(r, a) counts the solutions of f = a in \|z\| &lt; r with multiplicity, weighting a nonzero solution z by log(r/\|z\|) and a solution at 0 by log r. The proximity m(r, a), which measures how close f comes to a, is the mean over \|z\| = r of max(0, log(1/\|f − a\|)). For a = ∞ use max(0, log\|f\|), and set T(r, f) = N(r, ∞) + m(r, ∞).

**Problem.** For every nonconstant meromorphic function f on the plane and every sphere value a, T(r,f) = N(r,a) + m(r,a) + O(1) as r grows.

**How the definition helps.** Jensen’s formula for f − a turns N(r, a) + m(r, a) into T(r, f) plus a bounded error, so the sum does not depend on a (our own). Counting alone does depend on a: eᶻ never takes 0, so N(r, 0) = 0 (our own example). But eᶻ comes very close to 0 on the left half of each circle, and m(r, 0) records this (our own example).

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “the First Fundamental Theorem says that the sum N(r,a,f) + m(r,a,f), tends to infinity at the rate which is independent of a. The first Fundamental theorem is a simple consequence of Jensen's formula.”

**Sources:**

- [R. Nevanlinna, Zur Theorie der Meromorphen Funktionen, Acta Mathematica 46 (1925)](https://doi.org/10.1007/BF02543858)

### Normalized deficiencies sum to at most two

**Remember:** A value can fall short without going completely missing.

*Makes the theorem clean to state or prove.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** The deficiency δ(a) = 1 − limsup N(r, a)/T(r), as r → ∞, measures how far f falls short of taking the value a as often as its growth allows. Here N(r, a) counts solutions of f = a in \|z\| &lt; r with multiplicity, weighting z ≠ 0 by log(r/\|z\|) and z = 0 by log r. The characteristic T(r) is N(r, ∞) plus the mean over \|z\| = r of max(0, log\|f\|).

**Problem.** For a transcendental meromorphic function on the plane, the sum of the deficiencies of all sphere values is at most two.

**How the definition helps.** All deficiencies are shortfalls against the same T(r), so the Second Fundamental Theorem bounds their sum (our own). For finitely many values it bounds the summed shortfalls by 2T(r) plus an error that is small outside an exceptional set of radii (our own). So every finite subsum is at most two, and since the First Fundamental Theorem makes each deficiency nonnegative, the full sum is too (our own).

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “The defect relation is one of the main corollaries”

**Sources:** none listed. No primary source with a working link was found.

### Spherical area makes growth rotation invariant

**Remember:** Rotating the sphere moves the image but keeps its area.

*True by definition.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** The Ahlfors–Shimizu characteristic measures growth by spherical area. Let A(t) be the spherical area of the image of \|z\| ≤ t, counted with multiplicity and divided by the sphere’s area; the characteristic at r is the integral of A(t)/t from 0 to r.

**Problem.** Postcomposing a meromorphic function by a rotation of the sphere preserves its Ahlfors–Shimizu characteristic exactly.

**How the definition helps.** A rotation of the sphere is an isometry, so it keeps spherical area and multiplicity, hence every A(t) (our own). The hard part, not needed here, compares this characteristic with Nevanlinna’s up to a bounded error (our own).

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “is the spherical area of the image of the disc \|z\| ≤ t, counting multiplicity”

**Sources:** none listed. No primary source with a working link was found.

### Non-tangential approach gives boundary limits of bounded holomorphic functions

**Remember:** Approach the boundary inside a wedge, and the limit exists almost everywhere.

*Rules out counterexamples. Confidence: medium.* MSC 30D40 (Cluster sets, prime ends, boundary behavior), 30H10. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** A path z(t) approaches a circle point ζ non-tangentially if it tends to ζ inside a wedge at ζ: the ratio \|z(t) − ζ\|/(1 − \|z(t)\|) stays bounded near the end.

**Problem.** For 0 &lt; p &lt; ∞, let f be holomorphic on the disk with uniformly bounded circular means of \|f\|ᵖ. At almost every circle point, f tends to its radial boundary value along every non-tangential path.

**How the definition helps.** Inside a wedge the distance to ζ stays comparable to the distance to the circle (our own). There Fatou’s theorem gives limits almost everywhere in every wedge at once (our own). Tangential approach fails: Littlewood’s examples are bounded holomorphic functions with no limit along rotated tangent curves at almost every point (our own).

**Wikipedia:** [Fatou's theorem](https://en.wikipedia.org/wiki/Fatou%27s_theorem). It says: “Let f ∈ Hᵖ(𝔻). Then for almost all θ ∈ \[0,2π\], lim (t→1) f(γ(t)) = f₁(eⁱᶿ) for every non-tangential limit γ converging to eⁱᶿ, where f₁ is defined as above.”

**Sources:**

- [P. Fatou, Séries trigonométriques et séries de Taylor, Acta Mathematica 30 (1906)](https://doi.org/10.1007/BF02418579)

### Prime ends give every conformal map of the disc a boundary correspondence

**Remember:** Boundary points may fail, but prime ends always match the circle.

*Makes the theorem clean to state or prove.* MSC 30D40 (Cluster sets, prime ends, boundary behavior), 30C35. arXiv math.CV. Level 3: graduate.

**Definition.** A crosscut is an open Jordan arc in the domain whose two distinct endpoints lie on the boundary. A prime end is a way of reaching the boundary, given by a chain of crosscuts with disjoint closures, each separating its neighbours, whose spherical diameters tend to zero. Two chains give the same prime end when the part beyond each crosscut of one eventually contains the crosscuts of the other, and vice versa.

**Problem.** Let f be a conformal bijection from the unit disc onto a simply connected domain B. Then f gives a bijection from the unit circle onto the prime ends of B.

**How the definition helps.** Prime ends separate approaches that boundary points merge, such as the two sides of a slit, so the correspondence can be one-to-one (our own). Carathéodory’s prime end theorem extends f to a homeomorphism from the closed disc onto B completed by its prime ends (our own). Restricting it to the circle gives the bijection (our own).

**Wikipedia:** [Prime end](https://en.wikipedia.org/wiki/Prime_end). It says: “If ƒ maps the unit disk conformally and one-to-one onto the domain B, it induces a one-to-one mapping between the points on the unit circle and the prime ends of B.”

**Sources:**

- [C. Carathéodory, Über die Begrenzung einfach zusammenhängender Gebiete, Mathematische Annalen 73 (1913)](https://doi.org/10.1007/BF01456699)

### Separate accesses distinguish slit sides

**Remember:** One slit point can have two different ways in.

*Makes the theorem clean to state or prove.* MSC 30D40 (Cluster sets, prime ends, boundary behavior). arXiv math.CV. Level 3: graduate.

**Definition.** An access to a boundary point p is a class of curves from a fixed interior point to p. Two curves are in one class if one deforms into the other with fixed endpoints and interiors in the domain. So the two sides at an interior point of a straight slit give two accesses to that point (our own).

**Problem.** Let φ be a holomorphic bijection from the disk onto a simply connected plane domain. Accesses to p correspond bijectively to circle points where φ tends to p along the radius.

**How the definition helps.** An access records the way in to p, which a boundary point alone forgets (our own). The correspondence theorem shows that each access ends at one circle point in disk coordinates. Conversely, a radius whose image tends to p gives the access for its endpoint.

**Paper or page:** [Boundary behaviour of universal covering maps](https://arxiv.org/abs/2409.01070v1). It says: “Then, there is a one-to-one correspondence between accesses from Ω to p and the points eⁱᶿ ∈ ∂𝔻 such that φ\*(eⁱᶿ) = p.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the limit infinity makes Montel's two-omitted-values theorem true

**Remember:** Normal families may run off to infinity, and that counts as converging.

*Rules out counterexamples.* MSC 30D45 (Normal functions of one complex variable, normal families), 30D35. arXiv math.CV. Level 3: graduate.

**Definition.** A family of holomorphic or meromorphic functions on a domain is normal if every sequence in it has a subsequence converging uniformly on compact sets in the spherical distance. So a subsequence may converge to the constant ∞.

**Problem.** Montel's theorem says that a family of holomorphic functions on a domain, all omitting the same two complex values, is normal. Its meromorphic form says that omitting three points of the Riemann sphere is enough.

**How the definition helps.** Allowing the limit ∞ admits the sequence fₙ = n, which omits 0 and 1 for n ≥ 2 but has no finite limit (our own). Montel’s meromorphic theorem gives normality when all functions omit the same three sphere values. Holomorphic functions already omit ∞, so the same two finite omitted values suffice.

**Wikipedia:** [Normal family](https://en.wikipedia.org/wiki/Normal_family), [Montel's theorem](https://en.wikipedia.org/wiki/Montel%27s_theorem). It says: “For a family of holomorphic functions, this reduces to requiring two values omitted by viewing each function as a meromorphic function omitting the value infinity.”

**Sources:**

- [P. Montel, Sur les familles de fonctions analytiques qui admettent des valeurs exceptionnelles dans un domaine, Annales scientifiques de l'École normale supérieure 29 (1912)](https://doi.org/10.24033/asens.652)

### Spherical derivatives test normality

**Remember:** Bounded spherical stretching makes the maps equicontinuous into the compact sphere.

*Makes the theorem clean to state or prove.* MSC 30D45 (Normal functions of one complex variable, normal families). arXiv math.CV. Level 3: graduate.

**Definition.** The spherical derivative 2\|f′\|/(1 + \|f\|²) of a meromorphic f measures how fast f stretches lengths when values lie on the unit sphere, with ∞ as a point. At a pole use the same formula for 1/f.

**Problem.** A family is normal if every sequence has a subsequence converging uniformly on compact sets in spherical distance. Marty’s theorem says a meromorphic family is normal exactly when its spherical derivatives have a common bound on each compact set.

**How the definition helps.** A common bound on spherical derivatives makes the family equicontinuous into the compact sphere, so the Arzelà–Ascoli theorem gives normality (our own). Conversely, near each point use a finite chart about the limit’s value and Cauchy’s derivative estimates (our own). On a small disk about 1 the family fₙ(z) = nz is normal, though its ordinary derivatives are unbounded (our own).

**Wikipedia:** [Normal family](https://en.wikipedia.org/wiki/Normal_family). It says: “Indeed, the expression on the left is the formula for the pull-back of the arclength element on the Riemann sphere to the complex plane via the inverse of stereographic projection.”

**Sources:** none listed. No primary source with a working link was found.

### No holes allow polynomial approximation

**Remember:** One complementary component means one allowed pole, at infinity.

*Rules out counterexamples.* MSC 30E10 (Approximation in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** A compact plane set is full, or has no holes, if its complement is connected, so every outside point can be joined to infinity without crossing the set.

**Problem.** Every function holomorphic near a compact plane set with connected complement can be uniformly approximated there by polynomials.

**How the definition helps.** Runge’s theorem approximates by rational functions with poles in each complementary component (our own), and a connected complement lets all poles sit at ∞, giving polynomials. The hole matters: on the unit circle the integral of 1/z is 2πi, while every polynomial integrates to zero (our own).

**Wikipedia:** [Runge's theorem](https://en.wikipedia.org/wiki/Runge%27s_theorem). It says: “Since rational functions with no poles except at infinity are simply polynomials”

**Sources:** none listed. No primary source with a working link was found.

### The Cauchy principal value makes the boundary jump formula statable

**Remember:** Boundary value equals principal value plus or minus half the density.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 46F20, 26A42. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** At z on a smooth contour C, the Cauchy principal value deletes the arc where \|ζ − z\| &lt; ε from the Cauchy integral. It then lets ε decrease to zero, when that limit exists. Because the cut is symmetric about z, a constant density φ(z) contributes half its full-turn value (our own).

**Problem.** For a positively oriented smooth simple closed curve C and φ analytic near C, put Φ(w) = (1/(2πi))∮<sub>C</sub> φ(ζ)/(ζ−w) dζ off C; at z on C, its interior and exterior limits are its normalized principal value plus and minus ½φ(z). On ℝ, 1/(x ± iε) tends distributionally to PV(1/x) ∓ iπδ₀ as ε decreases to zero.

**How the definition helps.** Subtracting φ(z) leaves an integrand regular at z, so it has the same limit from both sides (our own). The constant φ(z) contributes φ(z) inside and 0 outside, which is its principal value ½φ(z) plus or minus ½φ(z), as the Sokhotski–Plemelj formulas state. The real-line form of the same computation gives the distributional identity (our own).

**Wikipedia:** [Sokhotski–Plemelj theorem](https://en.wikipedia.org/wiki/Sokhotski%E2%80%93Plemelj_theorem). It says: “The Sokhotski–Plemelj formulas relate the limiting boundary values of these two analytic functions at a point z on C and the Cauchy principal value P of the integral”

**Sources:**

- [J. Plemelj, Ein Ergänzungssatz zur Cauchyschen Integraldarstellung analytischer Funktionen, Randwerte betreffend, Monatshefte für Mathematik und Physik 19 (1908)](https://doi.org/10.1007/bf01736696)

### Logarithms split scalar jumps

**Remember:** Take a logarithm before splitting the jump, then exponentiate.

*True by definition. Confidence: medium.* MSC 30E25 (Boundary value problems in the complex plane), 45E05. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** Take logarithms to turn the multiplicative jump g into an additive one. A smooth nonzero g on the counterclockwise unit circle that winds zero times around 0 has a continuous logarithm ℓ. Off the circle let C(z) be the contour integral of ℓ(ζ)/(ζ − z), divided by 2πi.

**Problem.** There are nonvanishing analytic functions inside and outside the circle whose inside boundary value divided by the outside value equals g. The outside function tends to one at infinity.

**How the definition helps.** By the Sokhotski–Plemelj formula, the inside boundary value of C minus the outside one is ℓ (our own). So exp(C) inside and outside are nonvanishing with boundary ratio exp(ℓ) = g (our own). C tends to zero at infinity, so the outside function tends to one (our own).

**Wikipedia:** [Riemann–Hilbert problem](https://en.wikipedia.org/wiki/Riemann%E2%80%93Hilbert_problem). It says: “the Sokhotski–Plemelj theorem gives the solution.”

**Sources:** none listed. No primary source with a working link was found.

### Compact meromorphic maps fill the sphere

**Remember:** Poles are just points sent to ∞ on the sphere.

*True by definition.* MSC 30F10 (Compact Riemann surfaces and uniformization). arXiv math.CV. Level 3: graduate.

**Definition.** A meromorphic function on a Riemann surface is a holomorphic map to the Riemann sphere, with poles sent to ∞. As a map of surfaces, a nonconstant one on a connected surface is open by the open mapping theorem, poles included (our own).

**Problem.** Every nonconstant meromorphic function on a compact connected Riemann surface takes every value of the sphere.

**How the definition helps.** The image is open and, as a compact set, closed, so it is the whole connected sphere (our own). Treating poles as points sent to ∞ lets the open mapping theorem apply there through the chart 1/f (our own).

**nLab:** [Riemann surface](https://ncatlab.org/nlab/show/Riemann+surface). It says: “If X is compact and f is nonconstant, then f is surjective and Y compact.”

**Sources:** none listed. No primary source with a working link was found.

### Ramification indices make the Riemann–Hurwitz formula an exact count

**Remember:** Each ramification point costs e − 1 from the Euler characteristic.

*Makes the theorem clean to state or prove.* MSC 30F10 (Compact Riemann surfaces and uniformization), 14H30. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** Near each point P′, a nonconstant holomorphic map π between compact Riemann surfaces looks like z ↦ zᵉ in suitable local coordinates. The number e = eₚ is the ramification index, the number of sheets meeting at P′, and π is ramified at P′ when e &gt; 1.

**Problem.** For a map π of degree N from S′ to S, the Euler characteristics satisfy χ(S′) = N·χ(S) − Σ(eₚ − 1). Equivalently, 2g(S′) − 2 = N(2g(S) − 2) + Σ(eₚ − 1).

**How the definition helps.** Each ramification point merges e sheets into one point, so it removes e − 1 vertices from a lifted triangulation (our own). Lift a triangulation of S whose vertices include all branch values: each edge and face has N lifts (our own). Vertices minus edges plus faces then gives χ(S′) = Nχ(S) − Σ(eₚ − 1) (our own).

**Wikipedia:** [Riemann–Hurwitz formula](https://en.wikipedia.org/wiki/Riemann%E2%80%93Hurwitz_formula). It says: “What the Riemann–Hurwitz formula does is to add in a correction to allow for ramification (sheets coming together).”

**Sources:**

- [A. Hurwitz, Ueber Riemann'sche Flächen mit gegebenen Verzweigungspunkten, Mathematische Annalen 39 (1891)](https://doi.org/10.1007/bf01199469)

### Weierstrass non-gaps add

**Remember:** Multiply two functions to add their sole pole orders.

*Makes the theorem clean to state or prove.* MSC 30F10 (Compact Riemann surfaces and uniformization), 14H55. arXiv math.CV. Level 3: graduate.

**Definition.** A positive integer n is a non-gap at p if some meromorphic function has a pole of exact order n at p and no other poles; zero counts too, for constants. Equivalently, allowing a pole of order n at p, rather than n − 1, gives a larger space of functions.

**Problem.** The non-gaps at any point of a compact Riemann surface contain zero and are closed under addition. Exactly g positive integers are missing, where g is the genus, or number of handles.

**How the definition helps.** Multiplying two such functions adds their pole orders and creates no other poles, so non-gaps are closed under addition (our own). Each positive non-gap raises the dimension of the allowed space by one, so the non-gaps from 1 to n number that dimension minus one (our own). For large n Riemann–Roch gives dimension n + 1 − g, so exactly g of the numbers 1 to n are gaps (our own).

**Wikipedia:** [Weierstrass point](https://en.wikipedia.org/wiki/Weierstrass_point). It says: “Multiplication of functions gives the non-gaps a numerical semigroup structure”

**Sources:** none listed. No primary source with a working link was found.

### Disk covers force entire maps constant

**Remember:** Hyperbolic means the disk covers it, and bounded entire maps are constant.

*True by definition.* MSC 30F20 (Classification theory of Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** Call a Riemann surface hyperbolic when its universal cover, its simply connected covering surface, is the unit disk. A holomorphic map from the plane then lifts to the bounded disk (our own).

**Problem.** Every holomorphic map from the complex plane to a hyperbolic Riemann surface is constant.

**How the definition helps.** A map from ℂ lifts to the disk because ℂ is simply connected, and the lift is holomorphic because the cover has local holomorphic inverses (our own). The lift is a bounded entire function, so Liouville’s theorem makes it and the map constant (our own).

**Wikipedia:** [Uniformization theorem](https://en.wikipedia.org/wiki/Uniformization_theorem). It says: “those with the unit disk as universal cover ("hyperbolic")”

**Sources:** none listed. No primary source with a working link was found.

### Periods cancel Abel–Jacobi path choices

**Remember:** Two paths differ by a period, which the Jacobian removes.

*True by definition.* MSC 30F30 (Differentials on Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** The Jacobian of a compact Riemann surface is the dual of its space of holomorphic differentials, modulo the periods: the functionals given by integrating over closed paths. The Abel–Jacobi map sends a point to the class of integration along any path from a fixed base point.

**Problem.** The Abel–Jacobi map of a compact Riemann surface is independent of the integration path.

**How the definition helps.** Two paths with the same ends form a closed path, so their integrals differ by a period, which the quotient erases. The Riemann bilinear relations make the periods a lattice, so the Jacobian is a compact torus (our own).

**Wikipedia:** [Abel–Jacobi map](https://en.wikipedia.org/wiki/Abel%E2%80%93Jacobi_map). It says: “Thus the difference is erased in the passage to the quotient by Λ.”

**Sources:** none listed. No primary source with a working link was found.

### Schottky quotients omit fixed points

**Remember:** Remove the limit set before identifying points by the group action.

*Rules out counterexamples.* MSC 30F40 (Kleinian groups (aspects of compact Riemann surfaces and uniformization)). arXiv math.CV. Level 3: graduate.

**Definition.** Pair 2g Jordan disks on the sphere with disjoint closures by g Möbius maps, each sending one disk’s exterior onto its partner’s interior. These maps generate a Schottky group, whose domain of discontinuity, the complement of its limit set, is the largest invariant open set where it acts properly discontinuously. That means each compact K meets γK for only finitely many group elements γ.

**Problem.** The quotient of the domain of discontinuity of a rank g Schottky group is a compact Riemann surface of genus g. The quotient map is a holomorphic covering.

**How the definition helps.** On this domain stabilizers are finite, hence trivial since nonidentity Schottky elements have infinite order, so the quotient map is a holomorphic covering (our own). For the group generated by z ↦ 2z this removes the fixed points 0 and ∞ (our own). Gluing the paired circles bounding a fundamental region gives a compact surface with g handles.

**Wikipedia:** [Schottky group](https://en.wikipedia.org/wiki/Schottky_group). It says: “The corresponding quotient space Ω(G)/G is given by joining up the Jordan curves in pairs”

**Sources:** none listed. No primary source with a working link was found.

### Cross-ratio distance makes real Möbius maps hyperbolic isometries

**Remember:** Distance is a log cross-ratio, and Möbius maps keep cross-ratios.

*True by definition. Confidence: medium.* MSC 30F45 (Conformal metrics (hyperbolic, Poincaré, distance functions)), 51M10. arXiv math.CV, math.MG. Level 3: graduate.

**Definition.** The hyperbolic distance between two distinct points p, q of the upper half-plane is the logarithm of a cross-ratio. Take the semicircle or vertical line through p and q that meets the real axis at right angles, with endpoints ordered a, p, q, b. The distance is log\|(q−a)(p−b)/((p−a)(q−b))\|, taking a limit when an endpoint is ∞, and zero when p = q.

**Problem.** Every Möbius map with real coefficients and positive determinant preserves hyperbolic distance in the upper half-plane.

**How the definition helps.** A real Möbius map with positive determinant keeps the half-plane, sends these lines to these lines in order, and preserves cross-ratios (our own). So the formula gives the same value before and after the map. This is our own half-plane version of the article's argument for the Klein model.

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio), [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “Since the cross-ratio is invariant under projective transformations, it follows that the hyperbolic distance is invariant under the projective transformations that preserve the conic C.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithms give the Teichmüller triangle inequality

**Remember:** Distance is half the log of the least stretching.

*True by definition.* MSC 30F60 (Teichmüller theory for Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** The Teichmüller distance between two marked Riemann surfaces is half the log of the least dilatation needed between them. Precisely, take the infimum of the maximal dilatations K(f) of quasiconformal maps f that respect the markings. A marking is an orientation-preserving homeomorphism from a fixed closed oriented surface, and f respects markings m, n when f∘m is isotopic to n.

**Problem.** Teichmüller distance satisfies the triangle inequality.

**How the definition helps.** Dilatation is submultiplicative, K(g∘f) ≤ K(g)K(f), and the logarithm turns this product bound into the sum the triangle inequality needs (our own). Compose maps whose dilatations approach the two infima and pass to the limit (our own).

**Wikipedia:** [Teichmüller space](https://en.wikipedia.org/wiki/Teichm%C3%BCller_space). It says: “then the Teichmüller distance between them is by definition ½ log K.”

**Sources:** none listed. No primary source with a working link was found.

### Markings give moduli by quotient

**Remember:** Forget the marking, and only the Riemann surface remains.

*True by definition.* MSC 30F60 (Teichmüller theory for Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** A point of Teichmüller space is a Riemann surface with a marking, an orientation-preserving homeomorphism from a fixed closed oriented surface Σ. Two marked surfaces are the same point when a holomorphic isomorphism carries one marking to the other up to isotopy. The mapping class group, the orientation-preserving homeomorphisms of Σ up to isotopy, acts by changing the marking.

**Problem.** In genus at least two, quotienting Teichmüller space by the mapping class group gives the moduli space of compact Riemann surfaces.

**How the definition helps.** Changing the marking by a mapping class makes any holomorphic isomorphism respect the markings (our own). So two points share an orbit exactly when their surfaces are isomorphic (our own). The deeper theorem gives each point a neighborhood modeled on a ball modulo a finite group, so the quotient is an orbifold (our own).

**nLab:** [Teichmüller theory](https://ncatlab.org/nlab/show/Teichm%C3%BCller+theory). It says: “Hence the Riemann moduli space is the orbifold quotient of Teichmüller space by the mapping class group of Σ.”

**Sources:** none listed. No primary source with a working link was found.

### A countable base makes Riemann surfaces metrizable

**Remember:** Local discs plus a countable base let Urysohn supply the distance.

*True by definition.* MSC 30F99 (Riemann surfaces), 54E35. arXiv math.CV, math.GN. Level 3: graduate.

**Definition.** Here a Riemann surface is a connected Hausdorff space with complex charts whose coordinate changes are holomorphic. Its topology must have a countable base, a countable family of open sets whose unions give every open set.

**Problem.** Every Riemann surface is metrizable. This means its open sets can be obtained from a distance function.

**How the definition helps.** The charts make the space locally compact Hausdorff, hence regular, so Urysohn's metrization theorem gives a metric from the countable base (our own argument). Under the convention without a countable base, Radó's theorem supplies one.

**Wikipedia:** [Radó's theorem (Riemann surfaces)](https://en.wikipedia.org/wiki/Rad%C3%B3%27s_theorem_%28Riemann_surfaces%29). It says: “states that every connected Riemann surface is second-countable (has a countable base for its topology).”

**Paper or page:** [Riemann Surface is Metrizable](https://proofwiki.org/wiki/Riemann_Surface_is_Metrizable). It says: “A Riemann surface is metrizable.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform separation prevents incompatible interpolation

**Remember:** Each point keeps the product of its distances above δ.

*Makes the theorem clean to state or prove.* MSC 30H05 (Spaces of bounded analytic functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** A sequence (zₙ) in the unit disk is uniformly separated if some δ &gt; 0 satisfies ∏ₘ≠ₙ d(zₙ,zₘ) ≥ δ for every n. Here d(z,w) = \|(z−w)/(1−w̄z)\| is the pseudohyperbolic distance. So no point is crowded by the others, even when all their distances are multiplied together.

**Problem.** A sequence in the disk interpolates all bounded data by bounded holomorphic functions exactly when it is uniformly separated.

**How the definition helps.** Carleson's interpolation theorem gives the equivalence, and uniform separation is the condition it names (our own). It excludes crowding pairs such as 1−2⁻ⁿ and 1−2⁻ⁿ+4⁻ⁿ for n ≥ 2 (our own). Assigning 0 and 1 on each pair contradicts Schwarz–Pick for any bounded interpolant, after rescaling it into the disk (our own).

**Paper or page:** [Random Interpolating Sequences in the Polydisc and the Unit Ball](https://arxiv.org/abs/2012.05381v4). It says: “A sequence Z in 𝔻 is uniformly separated if and only if it is weakly separated and the measure μ<sub>Z</sub> := ∑ₙ∈ℕ (1 − \|zₙ\|²) δ<sub>z</sub>ₙ is a Carleson measure for H²(𝔻).”

**Sources:**

- [Lennart Carleson, An Interpolation Problem for Bounded Analytic Functions](https://doi.org/10.2307/2372840)

### Boundary modulus determines outer functions

**Remember:** Outer: exponentiate the harmonic extension of the log modulus.

*Rules out counterexamples.* MSC 30H10 (Hardy spaces). arXiv math.CV. Level 3: graduate.

**Definition.** An outer function is exp(H), where H is holomorphic on the disk and Re H is the Poisson integral of log φ. So it is built from its boundary modulus φ alone (our own). Here φ is positive almost everywhere on the unit circle, with log φ integrable.

**Problem.** Two outer functions on the disk with equal boundary modulus almost everywhere differ by a constant of modulus one. The statement fails for zero-free bounded holomorphic functions in general.

**How the definition helps.** Equal boundary moduli give the same Re H, so the exponents differ by an imaginary constant and the functions by a constant phase (our own). The zero-free bounded function exp(−(1+z)/(1−z)) is nonconstant but has boundary modulus 1 almost everywhere, like the constant 1 (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “some positive measurable function φ on the unit circle such that log(φ) is integrable on the circle”

**Sources:** none listed. No primary source with a working link was found.

### Disk covers test Hardy membership

**Remember:** Hardy means \|f\|ᵖ lies below some harmonic function.

*True by definition. Confidence: medium.* MSC 30H10 (Hardy spaces). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic disk function f is in the Hardy space with exponent p &gt; 0 when \|f\|ᵖ has a harmonic majorant, a harmonic function above it. This is equivalent to the usual definition by bounded circular means of \|f\|ᵖ (our own).

**Problem.** Let π map the disk onto a plane domain as a holomorphic covering, meaning it has separate inverse branches over each small neighborhood. At fixed p &gt; 0, every holomorphic disk map into that domain belongs to the Hardy space exactly when π does.

**How the definition helps.** A harmonic majorant pulls back along holomorphic maps (our own). If harmonic u ≥ \|π\|ᵖ, each map f into the domain lifts as f = π∘g, and harmonic u∘g ≥ \|f\|ᵖ (our own). The lift exists because the disk is simply connected, and π itself gives the converse (our own).

**Paper or page:** [The Hardy number and the Bergman number of a planar domain are equal](https://arxiv.org/abs/2409.09150v2). It says: “Let D ⊂ ℂ be a hyperbolic domain with universal covering map f<sub>D</sub> : 𝔻 → D. Then, for all α &gt; −1, h(D) = h(f<sub>D</sub>)”

**Sources:**

- [Dimitrios Betsakos, Francisco J. Cruz-Zamorano, The Hardy number and the Bergman number of a planar domain are equal (2024)](https://arxiv.org/abs/2409.09150v2)

### Inner factors preserve Hardy norms

**Remember:** An inner factor changes boundary phase but not boundary size.

*True by definition.* MSC 30H10 (Hardy spaces). arXiv math.CV. Level 3: graduate.

**Definition.** An inner function is a bounded holomorphic disk function whose radial boundary values have modulus one almost everywhere. For 1 ≤ p &lt; ∞, the Hardy norm of f is the pth root of the supremum of its circular means of \|f\|ᵖ. It equals the Lᵖ norm of the radial boundary values of f (our own).

**Problem.** Multiplying by any inner function preserves every Hardy norm with 1 ≤ p &lt; ∞.

**How the definition helps.** For an inner function I, \|If\| = \|f\| on the circle almost everywhere, so the boundary form of the norm is unchanged (our own). The product is still holomorphic with bounded circular means, because I is bounded, so it lies in the space (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “exists for almost all θ and its modulus is equal to 1 a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Modulus fixes normalized outer functions

**Remember:** Exponentiate the harmonic extension of the log modulus, then fix the phase.

*Rules out counterexamples.* MSC 30H10 (Hardy spaces), 30J05. arXiv math.CV. Level 3: graduate.

**Definition.** An outer function is c·exp(H), where \|c\| = 1 and H is holomorphic on the disk with Im H(0) = 0. Its real part Re H is the Poisson integral of log φ, so φ fixes the function up to the phase c (our own). Here φ, the boundary modulus, is positive on the unit circle with log φ integrable.

**Problem.** Two outer functions with the same radial boundary modulus almost everywhere differ only by a constant of modulus one. If both are positive at zero, they agree.

**How the definition helps.** The Poisson boundary theorem makes φ the radial boundary modulus, so equal moduli give the same H and only c can differ (our own). Positivity at zero forces c = 1 in both, because exp(H(0)) is positive (our own). Without outerness, 1 and z have equal boundary modulus but differ inside the disk (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “for some complex number c with \|c\| = 1, and some positive measurable function φ on the unit circle such that log(φ) is integrable on the circle.”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative modes bound Hardy evaluation

**Remember:** H² functions are power series with square-summable coefficients.

*True by definition.* MSC 30H10 (Hardy spaces), 42A16. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** H² consists of the analytic functions f(z) = ∑ₙ≥₀ aₙzⁿ on the unit disk with square-summable coefficients, normed by √(∑ₙ≥₀ \|aₙ\|²) (our own). Equivalently, it consists of the boundary functions in L² of normalized circle measure whose negative Fourier coefficients vanish.

**Problem.** For \|z\| &lt; 1, evaluation at z on the interior function has operator norm 1/√(1 − \|z\|²).

**How the definition helps.** Evaluation at z pairs the coefficients with the sequence zⁿ, since f(z) = ∑ₙ≥₀ aₙzⁿ (our own). Cauchy–Schwarz bounds it by √(∑ₙ≥₀ \|z\|²ⁿ) = 1/√(1 − \|z\|²) on unit vectors (our own). Coefficients proportional to the conjugates of zⁿ attain equality (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “the associated holomorphic function f of Hᵖ is given by f(z)=∑ₙ₌₀∞ aₙ zⁿ, \|z\| &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### Inner multipliers preserve Hardy norms

**Remember:** Unit boundary modulus leaves the Hardy norm alone.

*Rules out counterexamples.* MSC 30J05 (Inner functions of one complex variable), 30H10. arXiv math.CV. Level 3: graduate.

**Definition.** An inner function is a bounded holomorphic disk function whose radial boundary values have modulus one almost everywhere. The H² norm of f is the square root of the supremum of its circular means of \|f\|². It equals the L² norm of the radial boundary values of f (our own).

**Problem.** Multiplication by an inner function preserves the H² norm.

**How the definition helps.** For an inner function I, \|If\| = \|f\| on the circle almost everywhere, so the boundary form of the norm is unchanged (our own). A bounded multiplier without unit boundary modulus, such as the constant 1/2, halves the norm instead (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “and its modulus is equal to 1 a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Disk quotients lower Blaschke degree

**Remember:** Send both base points to zero, then divide.

*True by definition.* MSC 30J10 (Blaschke products), 30C80. arXiv math.CV. Level 3: graduate.

**Definition.** The hyperbolic difference quotient of a holomorphic disk map f at w is M(f(w), f(z))/M(w, z), extended to z = w by its limit. Here M(a,z) = (z − a)/(1 − āz) is the disk automorphism sending a to zero. A finite Blaschke product of degree d is a constant of modulus one times d factors M(a,z).

**Problem.** For d ≥ 1, the hyperbolic difference quotient of a degree-d finite Blaschke product is a finite Blaschke product of degree d − 1.

**How the definition helps.** Composing with M(f(w), ·) gives a Blaschke product of the same degree d (Abate), and it vanishes at w. So it contains the factor M(w,z), and dividing removes exactly that factor (our own). The ordinary difference f(z) − f(w) need not keep unit modulus on the circle (our own).

**Paper or page:** [Multipoint Julia theorems](https://arxiv.org/abs/2101.03559v1). It says: “then B ∘ γ and γ ∘ B are still Blaschke products of the same degree d.”

**Sources:** none listed. No primary source with a working link was found.

### Normalized Blaschke products converge

**Remember:** Fix the phase at zero before multiplying infinitely many factors.

*Rules out counterexamples.* MSC 30J10 (Blaschke products). arXiv math.CV. Level 3: graduate.

**Definition.** For a nonzero disk point a, the normalized Blaschke factor bₐ(z) = (\|a\|/a)(a − z)/(1 − āz) vanishes only at a. Its phase is fixed by bₐ(0) = \|a\| &gt; 0, so on each smaller disk \|1 − bₐ\| ≤ C(1 − \|a\|) (our own).

**Problem.** For nonzero disk points a with ∑(1 − \|a\|) finite, the product of the factors bₐ converges uniformly on compact subsets. Its zeros are exactly these points, counted with repetition.

**How the definition helps.** These bounds are summable when ∑(1 − \|a\|) is finite, so the infinite-product convergence theorem gives a holomorphic limit with no extra zeros (our own). Without the normalization, taking −bₐ for every factor makes the partial products alternate in sign at the center (our own).

**Wikipedia:** [Blaschke product](https://en.wikipedia.org/wiki/Blaschke_product). It says: “The Blaschke product B(z) defines a function analytic in the open unit disc and vanishing exactly at the points aₙ, with multiplicity counted.”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint prime blocks factor moments

**Remember:** Disjoint primes make every product index split in one way.

*Rules out counterexamples.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable). arXiv math.NT. Level 4: research.

**Definition.** Take finitely many Dirichlet polynomials Aⱼ(s) = ∑ aⱼ(n) n⁻ˢ, finite sums over positive integers n, built on disjoint sets of primes. That is, aⱼ(n) = 0 unless every prime divisor of n lies in the jth set. Write M(A) for the average of \|A(½+it)\|² over T ≤ t ≤ 2T.

**Problem.** Fix the number of factors, and suppose the product has no index above N, with N/T tending to zero. Then M(∏ Aⱼ) = (1 + O(N/T)) ∏ M(Aⱼ).

**How the definition helps.** Each index of the product splits uniquely among the disjoint prime sets, so the sum of squared coefficients factors exactly. The Dirichlet polynomial mean value theorem turns these sums into the time averages, with the stated error. Our own counterexample: two copies of 1 + √2·2⁻ˢ each have limiting mean square 2, but their product has 6, not 4.

**Paper or page:** [Freezing transition and moments of moments of the Riemann zeta function](https://arxiv.org/abs/2301.10634). It says: “such that aⱼ(n) vanishes unless n is composed of primes in Iⱼ.”

**Sources:**

- [Michael J. Curran, Freezing transition and moments of moments of the Riemann zeta function](https://arxiv.org/abs/2301.10634)

### Hardy spaces of Dirichlet series do not depend on the chosen group

**Remember:** The real line winds densely through G, and characters read off frequencies.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 42B30, 43A25. arXiv math.FA, math.CV. Level 4: research.

**Definition.** A λ-Dirichlet group is a compact abelian group G, with normalized Haar measure, and a continuous homomorphism β from ℝ with dense image. Each frequency λₙ must have a character χₙ with χₙ(β(t)) = exp(−iλₙt) for all real t. ℋₚ(λ) holds the series whose coefficients are Fourier coefficients at the χₙ of an f in Lᵖ(G) with spectrum among them, normed by ‖f‖ₚ.

**Problem.** For 1 ≤ p ≤ ∞ and a frequency sequence λ, every λ-Dirichlet group gives the same space ℋₚ(λ). For λₙ = log n, the infinite torus realizes this space isometrically as its Hardy space.

**How the definition helps.** The characters pick out the same frequencies in every such group, and the independence theorem for Dirichlet groups identifies the Hardy spaces isometrically. For λₙ = log n, unique prime factorization makes each n a monomial in the coordinates of the infinite torus (our own). These monomials are exactly the Hardy spectrum of that torus (our own).

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “ℋₚ(λ) is independent of the chosen λ-Dirichlet group G.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Beltrami disks interpolate quasiconformal maps

**Remember:** Maps are coded by coefficients below one, and coefficients move linearly.

*Makes the theorem clean to state or prove.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 4: research.

**Definition.** A normalized quasiconformal sphere map is an orientation-preserving homeomorphism fixing 0, 1 and ∞ whose locally square-integrable weak derivatives satisfy f<sub>z</sub>̄ = μf<sub>z</sub> almost everywhere. Its Beltrami coefficient μ is measurable with essential supremum of \|μ\| below one. By the measurable Riemann mapping theorem, each such μ belongs to exactly one such map (our own).

**Problem.** Let k &gt; 0 be the essential supremum of \|μ\|. Then the map is the value at k of a holomorphic motion: injections indexed by the disk, the identity at 0, each point moving holomorphically.

**How the definition helps.** Because maps are coded by coefficients, the line λμ/k for \|λ\| &lt; 1 gives coefficients bounded by \|λ\|, each with a unique normalized map (our own). These maps depend holomorphically on λ, which gives the motion (our own). Uniqueness makes them the identity at 0 and the given map at k (our own).

**Paper or page:** [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2). It says: “If F: ℂ → ℂ is a k-quasiconformal homeomorphism, then there exists a holomorphic motion f: 𝔻 × ℂ → ℂ such that fₖ = F.”

**Sources:**

- [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2)

### Infima preserve Harnack bounds

**Remember:** A common Harnack bound survives taking the infimum.

*Makes the theorem clean to state or prove.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 4: research.

**Definition.** An inf-harmonic function is the pointwise infimum of a nonempty family of positive harmonic functions. So any Harnack bound shared by the whole family holds for it too (our own). A holomorphic motion starts at the identity, moves each point holomorphically with a disk parameter λ, and keeps distinct points distinct.

**Problem.** For a holomorphic motion of a bounded plane set of positive diameter, fix 0 &lt; ρ &lt; 1 and M above every diameter d(λ) with \|λ\| &lt; ρ. On \|λ\| &lt; ρ, h(λ) = log(M/d(λ)) lies between h(0)/C and Ch(0), where C = (ρ+\|λ\|)/(ρ−\|λ\|).

**How the definition helps.** Since the diameter is the supremum of pairwise distances, h is the infimum of log(M/distance) over distinct moving pairs (our own). Each of these is positive harmonic, because the moving difference is holomorphic and never zero, so Harnack gives both bounds with one C (our own). Taking infima keeps both bounds (our own).

**Paper or page:** [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2). It says: “the map λ ↦ log(M/diam fλ(S)) is an inf-harmonic function on D(0,ρ).”

**Sources:**

- [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2)

### Disk differences let Schwarz–Pick iterate

**Remember:** Move both base points to zero before taking the quotient.

*True by definition.* MSC 30C80 (Maximum principle, Schwarz's lemma, Lindelöf principle, analogues and generalizations; subordination). arXiv math.CV. Level 4: research.

**Definition.** The hyperbolic difference quotient of a holomorphic disk map f at v is M(f(v), f(z))/M(v, z), extended to z = v by its limit. Here M(a,z) = (z − a)/(1 − āz) is the disk automorphism sending a to zero. So both base points move to zero before dividing, which is the setting of Schwarz's lemma (our own).

**Problem.** Suppose f maps the disk holomorphically into itself and is not a bijection. Its hyperbolic difference quotient at any v never increases hyperbolic distance, the disk distance with length element 2\|dz\|/(1 − \|z\|²).

**How the definition helps.** Schwarz's lemma bounds the quotient's modulus by one, strictly when f is not a bijection, so the quotient maps the disk into itself (our own). Schwarz–Pick then applies to it with no new estimate (our own).

**Paper or page:** [Multipoint Julia theorems](https://arxiv.org/abs/2101.03559v1). It says: “Then ω(f\*(z,v),f\*(w,v)) ≤ ω(z,w) for all z, v, w ∈ 𝔻.”

**Sources:**

- [Marco Abate, Multipoint Julia theorems (2021)](https://arxiv.org/abs/2101.03559v1)

### Analytic capacity zero means removable for bounded holomorphic functions

**Remember:** Maximize the first coefficient at infinity among bounded normalized functions.

*True by definition.* MSC 30C85 (Capacity and harmonic measure in the complex plane), 30H05. arXiv math.CV. Level 4: research.

**Definition.** For compact K ⊂ ℂ, take the holomorphic f off K with \|f\| ≤ 1 and f(∞) = 0. The analytic capacity γ(K) is the supremum of their first coefficients at infinity, \|lim<sub>z→∞</sub> z f(z)\|. K is removable if, for every open Ω ⊃ K, bounded holomorphic functions on Ω ∖ K extend holomorphically to Ω.

**Problem.** A compact set K in the plane is removable for bounded holomorphic functions exactly when its analytic capacity γ(K) is zero.

**How the definition helps.** If K is removable, each admissible f extends to a bounded entire function, constant by Liouville, so f = 0 and γ(K) = 0 (our own). If γ(K) = 0, testing a normalized multiple of (F(z)−F(a))/(z−a) shows each bounded F off K is constant (our own). A smooth cutoff and the Cauchy transform pass from this global statement to every Ω (our own).

**Wikipedia:** [Analytic capacity](https://en.wikipedia.org/wiki/Analytic_capacity). It says: “It is easy to see that K is removable if and only if γ(K) = 0. However, analytic capacity is a purely complex-analytic concept, and much more work needs to be done in order to obtain a more geometric characterization.”

**Sources:**

- [L. Ahlfors, Bounded analytic functions, Duke Mathematical Journal 14 (1947)](https://doi.org/10.1215/S0012-7094-47-01401-4)
- [X. Tolsa, Painlevé's problem and the semiadditivity of analytic capacity, Acta Mathematica 190 (2003)](https://doi.org/10.1007/BF02393237)

### Translation coordinates make centralizers commutative

**Remember:** The Koenigs coordinate turns φ into adding one.

*Makes the theorem clean to state or prove.* MSC 30D05 (Functional equations in the complex plane, iteration and composition of analytic functions of one complex variable), 37F50. arXiv math.CV, math.DS. Level 4: research.

**Definition.** A Koenigs coordinate for φ is an injective holomorphic function h on the disk with h(φ(z)) = h(z) + 1, so φ becomes translation by one. Here φ is an injective holomorphic disk self-map with no interior fixed point. Its centralizer is the set of injective holomorphic disk self-maps that commute with φ.

**Problem.** Let φ have attracting boundary point τ, and let λ be the limit of (1 − \|φ(rτ)\|)/(1 − r) as r increases to one. If λ &lt; 1, or λ = 1 and successive iterates of a point approach each other hyperbolically, then any two members of the centralizer commute.

**How the definition helps.** Under these hypotheses each member of the centralizer also acts as a translation in the Koenigs coordinate (our own). Translations commute, so any two members commute (our own). The work lies in proving that first step (our own).

**Paper or page:** [Centralizers of non-elliptic univalent self-maps and the embeddability problem in the unit disc](https://arxiv.org/abs/2311.04134v3). It says: “In particular, the centralizer 𝒵(φ) is abelian.”

**Sources:**

- [Centralizers of non-elliptic univalent self-maps and the embeddability problem in the unit disc, Proposition 4.3](https://arxiv.org/abs/2311.04134v3)

### Linear local connectivity is exactly what quasisymmetric spheres need

**Remember:** Connect inside a bigger ball, and outside a smaller one.

*Makes the theorem clean to state or prove.* MSC 30L10 (Quasiconformal mappings in metric spaces), 54F65. arXiv math.CV, math.MG. Level 4: research.

**Definition.** A metric space is linearly locally connected (LLC) if, for some λ ≥ 1 and every ball B(a,r), two tests hold. Any two points in B(a,r) lie in a connected subset of B(a,λr). Any two points outside B(a,r) lie in a connected subset outside B(a,r/λ).

**Problem.** An Ahlfors 2-regular metric 2-sphere is quasisymmetrically equivalent to the round sphere exactly when it is linearly locally connected (Bonk and Kleiner). A quasisymmetric map distorts the ratios of distances from a point only by a controlled amount.

**How the definition helps.** Quasisymmetric maps keep the LLC property with a changed constant, and the round sphere is LLC, so the condition is necessary (our own). The theorem says that, once area is Ahlfors 2-regular, nothing else is needed, and its hard direction builds the map from the space.

**Paper or page:** [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1). It says: “Let X be a metric 2-sphere that is Ahlfors 2-regular. Then there exists a quasisymmetric homeomorphism f: Ĉ → X if and only if X is LLC. The statement is quantitative.”

**Sources:**

- [Dimitrios Ntalampekos, Uniformization of metric surfaces: A survey, arXiv:2505.02697 (2025)](https://arxiv.org/abs/2505.02697v1)
- [Bonk, Kleiner, Quasisymmetric parametrizations of two-dimensional metric spheres, Inventiones mathematicae 150 (2002), 127–183](https://doi.org/10.1007/s00222-002-0233-z)

### Local reciprocality is exactly the condition for quasiconformal uniformization

**Remember:** The plane has modulus product one; ask only that it stays bounded.

*Makes the theorem clean to state or prove.* MSC 30L10 (Quasiconformal mappings in metric spaces), 30F10. arXiv math.CV, math.MG. Level 4: research.

**Definition.** A metric surface without boundary is locally reciprocal if, near each point, the two conformal moduli of every quadrilateral have bounded product. Precisely, each point has a neighborhood U and a finite κ with M₁M₂ ≤ κ for every topological quadrilateral in U. Here M₁ and M₂ are the moduli of the curve families joining the two pairs of opposite sides inside it (our own).

**Problem.** A metric surface without boundary and with locally finite area admits quasiconformal uniformization by a complete constant-curvature Riemannian surface exactly when locally reciprocal. For simply connected surfaces, the model is the sphere, plane or disk.

**How the definition helps.** A quasiconformal map changes the modulus of a curve family by at most a fixed factor (our own). So quasiconformal images of Riemannian surfaces have locally bounded modulus products, and the condition is necessary (our own). The theorem says it is also sufficient, and its hard direction builds the map, as Rajala first did for metric spheres.

**Paper or page:** [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1), [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1). It says: “Then there exists a complete Riemannian surface (Z,g) of constant curvature that is homeomorphic to X and a quasiconformal map f: Z → X if and only if X is locally reciprocal.”

**Sources:**

- [Dimitrios Ntalampekos, Uniformization of metric surfaces: A survey, arXiv:2505.02697 (2025)](https://arxiv.org/abs/2505.02697v1)
- [Rajala, Uniformization of two-dimensional metric surfaces, Inventiones mathematicae 207 (2016), 1301–1375](https://doi.org/10.1007/s00222-016-0686-0)
