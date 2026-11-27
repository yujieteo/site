### Conjugation makes the complex modulus multiplicative

**Remember:** Conjugation respects products, so the squared modulus does too.

*True by definition.* MSC 30A99 (General properties of functions of one complex variable). arXiv math.CV. Level 1: early undergraduate.

**Definition.** For z = x + iy, its complex conjugate is z̄ = x − iy. Define the modulus by \|z\| = √(z z̄), the nonnegative square root of the real number z z̄. The coordinate definition is \|z\| = √(x² + y²).

**Problem.** For all complex numbers z and w, \|zw\| = \|z\|\|w\|.

**How the definition helps.** The conjugate definition makes the squared modulus of a product a rearrangement of factors. Conjugation sends zw to z̄w̄, so \|zw\|² = (z z̄)(w w̄) = \|z\|²\|w\|². Taking nonnegative square roots gives the result. With coordinates, one would instead expand the squares of the real and imaginary parts of zw (our own comparison). The work moves into showing from complex multiplication that conjugation respects products (our own explanation).

**Wikipedia:** [Absolute value](https://en.wikipedia.org/wiki/Absolute_value). It says: “\|z\| = √(z · z̄).”

**Sources:** none listed. No primary source with a working link was found.

### A complex derivative as an i-linear map gives Cauchy–Riemann at once

**Remember:** The derivative's value on i is i times its value on 1.

*True by definition. Confidence: medium.* MSC 30A05 (Monogenic and polygenic functions of one complex variable), 26B05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Identify ℂ with ℝ². Call f complex differentiable at z if it has a real linear approximation L there with L(iv) = iL(v) for every vector v. The usual definition takes the limit of (f(z + h) − f(z))/h over complex h → 0.

**Problem.** Let f = u + iv be complex differentiable at a point. Then ∂u/∂x = ∂v/∂y and ∂u/∂y = −∂v/∂x at that point.

**How the definition helps.** With this definition, the equations are just L(i) = iL(1) written in coordinates (our own). Here L(1) = ∂u/∂x + i∂v/∂x and L(i) = ∂u/∂y + i∂v/∂y (our own). Since iL(1) = −∂v/∂x + i∂u/∂x, comparing real and imaginary parts gives both equations (our own). The work moves into the lemma that the two definitions agree (our own). It holds because a real linear map that commutes with i is multiplication by one complex number (our own).

**Wikipedia:** [Cauchy–Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations). It says: “the partial derivatives of u and v exist and satisfy the Cauchy–Riemann equations at that point.”

**Paper or page:** [Cauchy-Riemann Equations/Necessary Condition](https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Necessary_Condition). It says: “The following two equations, known as the Cauchy-Riemann equations, hold for the partial derivatives of u and v:”

**Sources:** none listed. No primary source with a working link was found.

### The Wirtinger derivative test makes holomorphic functions harmonic

**Remember:** One factor of the Laplacian already vanishes on holomorphic functions.

*True by definition.* MSC 30A05 (Monogenic and polygenic functions of one complex variable), 31A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a continuously differentiable function, define D = ½(∂/∂x − i∂/∂y) and E = ½(∂/∂x + i∂/∂y), the two Wirtinger operators. Call the function holomorphic if E sends it to zero. The usual definition uses a complex difference quotient.

**Problem.** The real and imaginary parts of a holomorphic function are harmonic. Their second partial derivatives in x and y sum to zero.

**How the definition helps.** The Wirtinger definition makes harmonicity follow from a factorization. On twice continuously differentiable functions, the Laplacian, the sum of the two second partial derivatives, is 4DE. This factorization follows by expanding the product and canceling the equal mixed partial derivatives. Since Ef = 0, the Laplacian of f is zero, so both parts have zero Laplacian. This is our own calculation. The equivalence with the difference quotient uses real differentiability, and the power series theorem supplies the second derivatives.

**Wikipedia:** [Wirtinger derivatives](https://en.wikipedia.org/wiki/Wirtinger_derivatives). It says: “The second Wirtinger derivative is also related with complex differentiation; ∂f/∂z̄ = 0 is equivalent to the Cauchy-Riemann equations in a complex form.”

**Paper or page:** [Real and Imaginary Parts of Holomorphic Function are Harmonic](https://proofwiki.org/wiki/Real_and_Imaginary_Parts_of_Holomorphic_Function_are_Harmonic). It says: “Then u and v are harmonic functions.”

**Sources:**

- [W. Wirtinger, Zur formalen Theorie der Funktionen von mehr komplexen Veränderlichen, Mathematische Annalen 97 (1927), 357–375](https://doi.org/10.1007/BF01447872)

### Differentiation preserves a power series radius

**Remember:** An nth root makes the derivative’s factor n vanish in the limit.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Take the upper limit of the nth roots of the coefficient magnitudes. Its reciprocal gives the radius, with zero and infinity exchanging places. Geometrically, the radius is the supremum of the distances from the center at which the series converges, including distance zero.

**Problem.** A complex power series and its termwise derivative have the same radius of convergence.

**How the definition helps.** The coefficient rule makes the extra factor n harmless, since its nth root tends to one (our own). Apply the rule to the derivative multiplied by the variable minus the center to align the powers (our own). That multiplication does not change convergence off the center (our own). The work goes into the Cauchy–Hadamard theorem, which gets the disk from the coefficient rule (our own).

**Paper or page:** [Radius of Convergence of Derivative of Complex Power Series](https://proofwiki.org/wiki/Radius_of_Convergence_of_Derivative_of_Complex_Power_Series). It says: “Then R = R′.”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic as one power series on a disk gives antiderivatives there

**Remember:** Integrate each power, and the radius of convergence stays the same.

*True by definition. Confidence: medium.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 30A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** On an open disk, describe a holomorphic function by one power series about the centre that converges on the whole disk. The usual definition asks for a complex derivative at each point. A theorem of Cauchy says that the two agree on disks.

**Problem.** Every holomorphic function on an open disk has an antiderivative defined throughout the disk.

**How the definition helps.** With one series on the whole disk, integrating term by term gives an explicit antiderivative (our own). The series of aₙ(z − c)ⁿ⁺¹/(n + 1) has the same radius of convergence as the series for f (our own). Term-by-term differentiation then gives back f (our own). The usual proof instead integrates f along segments from the centre and uses Goursat's theorem on triangles (our own). The work moves into the theorem that a holomorphic function on a disk has one series valid on the whole disk. Wikipedia says that this proof rests on Cauchy's integral formula.

**Wikipedia:** [Analyticity of holomorphic functions](https://en.wikipedia.org/wiki/Analyticity_of_holomorphic_functions). It says: “The argument, first given by Cauchy, hinges on Cauchy's integral formula and the power series expansion of the expression”

**Sources:** none listed. No primary source with a working link was found.

### Power series make holomorphic functions differentiable to every order

**Remember:** Differentiate the power series term by term to get another power series.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a function analytic if it equals a convergent power series near each point of its open domain. The usual definition of holomorphic asks for a complex derivative at every point.

**Problem.** Every holomorphic function has complex derivatives of all orders, and those derivatives are holomorphic.

**How the definition helps.** The power series definition makes each derivative analytic by termwise differentiation. The new series has the same radius of convergence, so we can repeat the step indefinitely. This is our own deduction from the equivalence of analyticity and complex differentiability. The hard part of that equivalence is Goursat’s theorem, which removes the continuity assumption from Cauchy’s integral theorem. Cauchy’s integral formula then gives the power series.

**nLab:** [holomorphic function](https://ncatlab.org/nlab/show/holomorphic+function). It says: “The theorem that every continuously complex-differentiable function is analytic is soft and due to Augustin Cauchy; the theorem that every complex-differentiable function is continuously differentiable is hard and due essentially to Édouard Goursat”

**Paper or page:** [Holomorphic Function is Analytic](https://proofwiki.org/wiki/Holomorphic_Function_is_Analytic). It says: “Let f be a function holomorphic on some open ball D = B(a, r). Then f is complex analytic on D.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Germs turn multivalued functions such as log z into true functions

**Remember:** Do not continue the value; continue the germ, and every branch gets its own point.

*Makes the theorem clean to state or prove.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30F99. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A germ of an analytic function at a point z₀ is its power series at z₀. The set of all germs gets a topology. In it, a basic open set is the set of germs of one analytic function at all points of a disc. A connected component of this space is a Riemann surface, and on it the analytic continuation of a function is one single-valued function.

**Problem.** Analytic continuation of functions such as log z or √z gives one well-defined function.

**How the definition helps.** On the space of germs, each branch of the function is a different point, so continuation can never give two values at one point. In the plane, continuing log z once around the origin gives a value that differs by 2πi. So in the plane the result is a 'multivalued function', which is not a function. On the space of germs, continuation gives a single-valued holomorphic function on a Riemann surface. For the logarithm, exp(f(z)) = z holds on the whole component. The search for the largest analytic continuation led to Riemann surfaces and the universal cover, and Weyl gave the classic rigorous account in 1913 (our own remark). What stays hard is to decide when continuation along different paths gives the same result (the monodromy theorem), and to find natural boundaries (curves past which no continuation is possible).

**Wikipedia:** [Analytic continuation](https://en.wikipedia.org/wiki/Analytic_continuation), [Riemann surface](https://en.wikipedia.org/wiki/Riemann_surface). It says: “The idea of finding the maximal analytic continuation of a function in turn led to the development of the idea of Riemann surfaces.”

**Sources:**

- [H. Weyl, Die Idee der Riemannschen Fläche, Teubner, Leipzig, 1913](https://archive.org/details/dieideederrieman00weyluoft)

### Zero triangle integrals make locally uniform limits holomorphic

**Remember:** Zero triangle integrals pass to a locally uniform limit.

*True by definition.* MSC 30B60 (Completeness problems, closure of a system of functions of one complex variable), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic if its contour integral around every solid triangle in the set is zero. The usual definition asks for a complex derivative at each point.

**Problem.** Let holomorphic functions converge uniformly on every compact subset of an open set. Their limit is holomorphic.

**How the definition helps.** The triangle definition makes the proof a passage to the limit inside each contour integral. Uniform convergence on the triangle preserves the zero integral and gives continuity of the limit. The article gives this approach. The work moves into the equivalence of definitions. Goursat’s theorem gives zero integrals from complex differentiability, and Morera’s theorem gives the converse.

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem). It says: “This in fact characterizes holomorphy, i.e. f is holomorphic on D if and only if the above conditions hold.”

**Paper or page:** [Uniform Limit of Analytic Functions is Analytic](https://proofwiki.org/wiki/Uniform_Limit_of_Analytic_Functions_is_Analytic), [Morera's Theorem](https://proofwiki.org/wiki/Morera's_Theorem). It says: “Let ⟨fₙ⟩ converge locally uniformly to f on U. Then f is analytic.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### On the Riemann sphere, Möbius maps become bijections with two fixed points

**Remember:** Add one point at infinity and division by zero stops being an exception.

*Makes the theorem clean to state or prove.* MSC 30C10 (Polynomials and rational functions of one complex variable), 30F10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A Möbius transformation is a map z ↦ (az + b)/(cz + d) with ad − bc ≠ 0. It acts on the Riemann sphere, which is the complex plane with one point ∞ added. When c ≠ 0, it sends −d/c to ∞ and ∞ to a/c. When c = 0, it fixes ∞.

**Problem.** The Möbius transformations form a group of bijections. Every one except the identity has exactly two fixed points, counted with multiplicity.

**How the definition helps.** The added point ∞ gives each Möbius transformation a value at every point and a preimage of every point, so each one is a bijection. On the complex plane alone, z ↦ 1/z is undefined at 0 and never takes the value 0, so it is not a bijection (our own example). On the Riemann sphere every Möbius transformation is a bijective holomorphic map. Together they form the automorphism group of the sphere (the group of all its bijective holomorphic maps to itself). The condition ad − bc ≠ 0 excludes the constant maps, which are not bijections. The fixed-point count works because a fixed point may be ∞.

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “Thus a Möbius transformation is always a bijective holomorphic function from the Riemann sphere to the Riemann sphere.”

**Sources:** none listed. No primary source with a working link was found.

### Counting zeros with multiplicity makes the argument principle exact

**Remember:** Count each zero by its multiplicity, and the winding gives the count.

*Makes the theorem clean to state or prove.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A zero of f at a has multiplicity k if f(z) = (z − a)ᵏ g(z) with g(a) ≠ 0. A pole of order m is a point where f(z) = (z − a)⁻ᵐ h(z) with h(a) ≠ 0. Counting with multiplicity means each zero or pole is counted k or m times.

**Problem.** Let f be meromorphic, with no zeros or poles on a simple closed contour C oriented counter-clockwise. Then (1/2πi) ∮ f′/f dz = Z − P. Here Z and P count the zeros and poles inside C with multiplicity.

**How the definition helps.** At a zero of multiplicity k, f′/f has a simple pole with residue exactly k, so the residue theorem counts multiplicities directly. A count without multiplicity fails (our own example). For f(z) = z² on the unit circle, the integral is 2, but there is only one distinct zero. Multiplicity also makes the count stable under small changes of f, which is Rouché's theorem (our own). So zeros of polynomials move continuously with the coefficients (our own). The page notes that the contour must be simple and positively oriented for this form.

**Wikipedia:** [Argument principle](https://en.wikipedia.org/wiki/Argument_principle). It says: “where Z and P denote respectively the number of zeros and poles of f inside the contour C, with each zero and pole counted as many times as its multiplicity and order, respectively, indicate.”

**Sources:** none listed. No primary source with a working link was found.

### Defining analytic by local power series makes zeros isolated at once

**Remember:** After the first nonzero term, the leftover factor stays nonzero nearby.

*True by definition. Confidence: medium.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a complex function analytic on an open set if, near each point, it equals a convergent power series. The other usual definition, holomorphic, asks for a complex derivative at each point. A theorem says that the two definitions agree.

**Problem.** Let f be analytic near z₀ with f(z₀) = 0. If f is not zero on the whole of any neighbourhood of z₀, then some neighbourhood of z₀ has no other zero.

**How the definition helps.** With the series definition, the local form of f is given, so one factorization proves the claim (our own). Some coefficient aₘ is nonzero, because otherwise f is zero on a whole disk (our own). Take the first such m and write f(z) = (z − z₀)ᵐ g(z) (our own). Here g is a convergent power series with g(z₀) = aₘ ≠ 0, so g has no zeros near z₀ by continuity (our own). The work moves into the theorem that complex differentiable functions are analytic. That proof uses the Cauchy integral formula (our own).

**nLab:** [analytic function](https://ncatlab.org/nlab/show/analytic+function). It says: “An analytic function is a function that is locally given by a converging power series.”

**Sources:** none listed. No primary source with a working link was found.

### Defining zero order by factoring out (z − z₀)ⁿ makes orders add

**Remember:** Multiplying the factorizations multiplies the powers, so the orders add.

*True by definition. Confidence: medium.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Let f be analytic near z₀ and not identically zero there. Its order at z₀ is the n ≥ 0 with f(z) = (z − z₀)ⁿ g(z) for some analytic g with g(z₀) ≠ 0. The other common definition takes the least k with f⁽ᵏ⁾(z₀) ≠ 0.

**Problem.** Let f and g be analytic near z₀, and let neither be identically zero there. Then the order of fg at z₀ is the sum of the orders of f and g.

**How the definition helps.** With the factorization definition, the proof is one multiplication (our own). Write f = (z − z₀)ᵐ f₁ and g = (z − z₀)ⁿ g₁ (our own). Then fg = (z − z₀)ᵐ⁺ⁿ f₁g₁, and f₁(z₀)g₁(z₀) ≠ 0 (our own). With the derivative definition, one needs the general Leibniz rule for the derivatives of fg (our own). The work moves into the theorem that the two definitions agree, which uses the Taylor series of f at z₀ (our own).

**Wikipedia:** [Zeros and poles](https://en.wikipedia.org/wiki/Zeros_and_poles). It says: “(z − z₀)ⁿ f(z) is holomorphic and nonzero in a neighbourhood of z₀ (this is a consequence of the analytic property).”

**Sources:** none listed. No primary source with a working link was found.

### Möbius maps on complex lines compose by multiplying matrices

**Remember:** Multiply the matrices to compose their Möbius maps.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 51B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the Riemann sphere as the set of complex lines through zero in ℂ². An invertible complex matrix sends each such line to another, defining a Möbius map. The usual model starts with the plane and adds ∞, with separate rules for poles and ∞.

**Problem.** Möbius maps form a group under composition. The map for AB is the map for B followed by the map for A.

**How the definition helps.** The projective-line definition makes composition ordinary matrix multiplication on lines. The identity and inverses also come from matrices, without separate cases at poles or ∞. Our own comparison uses z = x/y as the coordinate of the line through (x, y) when y ≠ 0. The remaining line represents ∞. In this coordinate a matrix with rows (a, b) and (c, d) gives the usual map z ↦ (az + b)/(cz + d).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “Möbius transformations form a group under composition, isomorphic to the projective linear group”

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “Since they act on projective coordinates, two matrices yield the same Möbius transformation if and only if they differ by a nonzero factor. The group of Möbius transformations is the projective linear group PGL(2,C).”

**Paper or page:** [Möbius Transformations form Group under Composition](https://proofwiki.org/wiki/Möbius_Transformations_form_Group_under_Composition). It says: “Let G be the set of Möbius transformations. Let ∘ denote the composition of mappings. Then (G, ∘) is a group.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring orientation makes conformal maps exactly the holomorphic ones

**Remember:** Angles kept and orientation kept means holomorphic with nonzero derivative.

*Rules out counterexamples.* MSC 30C35 (General theory of conformal mappings). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A map is conformal at a point if it preserves angles between directed curves through the point, and also preserves orientation. Equivalently, its Jacobian matrix there is a positive multiple of a rotation matrix.

**Problem.** A map on an open set in the plane is conformal if and only if it is holomorphic with nowhere-zero derivative.

**How the definition helps.** A positive multiple of a rotation matrix is exactly multiplication by a nonzero complex number. So the orientation condition is the Cauchy–Riemann equations in another form (our own explanation). Without orientation the theorem fails. Complex conjugation z ↦ z̄ keeps the size of angles but reverses their direction, and it is not holomorphic. Circle inversions are the same kind of example. Some authors allow orientation-reversing maps, and then they must add the antiholomorphic maps to the theorem. In dimension three and higher, Liouville's theorem leaves only Möbius maps.

**Wikipedia:** [Conformal map](https://en.wikipedia.org/wiki/Conformal_map). It says: “If U is an open subset of the complex plane ℂ, then a function f:U→ℂ is conformal if and only if it is holomorphic and its derivative is everywhere non-zero on U.”

**Sources:** none listed. No primary source with a working link was found.

### Rotation and scaling derivatives make holomorphic maps preserve angles

**Remember:** A nonzero complex derivative rotates and scales all tangent vectors together.

*True by definition.* MSC 30C35 (General theory of conformal mappings), 30A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a real differentiable map holomorphic if its derivative matrix at each point has rows (a, −b) and (b, a). This matrix acts by multiplication by a + ib. The usual definition uses a limit of complex difference quotients.

**Problem.** At any point where its derivative is nonzero, a holomorphic map preserves the angle between smooth curves with nonzero tangent vectors.

**How the definition helps.** The matrix definition makes angle preservation a property of the derivative itself. Multiplication by a nonzero complex number rotates and scales both tangents by the same amounts. The chain rule gives the image tangents. The work moves into showing that this definition agrees with the complex difference quotient. The matrix entries express the Cauchy–Riemann equations when a real derivative exists.

**Wikipedia:** [Cauchy–Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations). It says: “Consequently, a function satisfying the Cauchy–Riemann equations, with a nonzero derivative, preserves the angle between curves in the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous complex derivatives let Green’s theorem prove Cauchy’s theorem

**Remember:** A continuous complex derivative lets Green’s theorem apply.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Use Cauchy’s stronger version of holomorphic. Ask for a complex derivative at every point of an open set and require that derivative to be continuous. The modern definition does not require continuity separately.

**Problem.** Let f be holomorphic on an open set containing a simple, closed, piecewise smooth curve and all of its interior. The integral of f around the curve is zero.

**How the definition helps.** The continuity condition lets Green’s theorem turn the curve integral into an area integral. Complex differentiability gives the Cauchy–Riemann equations, which relate the first partial derivatives and make the area integrand zero. Without continuity, Green’s theorem does not apply directly. Goursat proved vanishing for triangles without this assumption. Cauchy’s integral formula then gives a local power series, so the derivative is continuous after all.

**Wikipedia:** [Cauchy's integral theorem](https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem). It says: “Cauchy provided this proof, but it was later proven by Goursat without requiring techniques from vector calculus, or the continuity of partial derivatives.”

**Paper or page:** [Holomorphic 1-forms are closed](https://proofwiki.org/wiki/Holomorphic_1-forms_are_closed), [Cauchy-Goursat Theorem](https://proofwiki.org/wiki/Cauchy-Goursat_Theorem). It says: “Holomorphic 1-forms are closed.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Defining simple connectivity by primitives gives holomorphic logarithms

**Remember:** A primitive of the logarithmic derivative differs from a logarithm by a constant.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a connected open subset of the plane holomorphically simply connected if each holomorphic function has a holomorphic primitive, a function whose derivative equals it. The topological definition asks that every closed path can shrink to a point inside the set.

**Problem.** Every nowhere-zero holomorphic function f on such a set has a holomorphic logarithm g, meaning exp(g) = f.

**How the definition helps.** The primitive definition supplies a function h with derivative f′/f. The derivative of f exp(−h) is zero, so this product is a nonzero constant. Add a logarithm of that constant to h. Our own calculation makes explicit the step in the article’s integration argument. The work is proving the two definitions agree. Cauchy’s theorem gives primitives on topologically simply connected domains, and the converse uses the topology of winding around points in the complement.

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “(3) ⇒ (4) by integrating f⁻¹ df/dz along γ from a to x to give a branch of the logarithm.”

**Paper or page:** [Existence of logarithms](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let f : U → ℂ be holomorphic. Then f has a logarithm if and only if (1/(2πi)) ∮γ (f′/f) dz = 0 for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Residues of forms make all residues on the sphere sum to zero

**Remember:** Take residues of f(z) dz, not of f, and they sum to zero.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30F30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The residue at infinity of f is defined as −Res(f(1/z)/z², 0). This is the residue of the form f(z) dz, written in the coordinate w = 1/z near infinity. The extra factor −1/z² comes from the change of variable dz = −dw/w².

**Problem.** Let f be holomorphic on the plane except at finitely many isolated singular points. Then the sum of all its residues, including the residue at infinity, is zero.

**How the definition helps.** A residue of a form does not depend on the coordinate. So one large circle measures the finite residues from inside and the residue at infinity from outside, with opposite orientation. So the two counts cancel, and the theorem is the residue theorem read twice. The naive definition, the residue of f(1/z) at 0, fails (our own example). For f(z) = 1/z the residue at 0 is 1, and f(1/z) = z has residue 0 at 0, so the naive sum is 1. The form definition gives −Res(1/z, 0) = −1 at infinity, and the sum is 0. The work stays in the ordinary residue theorem.

**Wikipedia:** [Residue at infinity](https://en.wikipedia.org/wiki/Residue_at_infinity), [Residue (complex analysis)](https://en.wikipedia.org/wiki/Residue_%28complex_analysis%29). It says: “the reason that we consider instead −(1/z²) f(1/z) is that one does not take residues of functions, but of differential forms”

**Sources:** none listed. No primary source with a working link was found.

### Zero triangle integrals show the Gamma integral is holomorphic

**Remember:** Swap the integrals to expose an inner contour integral equal to zero.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 33B15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic if its integral around the boundary of every solid triangle in the set is zero. The usual definition asks for a complex derivative at every point.

**Problem.** Define Γ(s) by integrating exp((s − 1) log x − x) over real x &gt; 0. The resulting function is holomorphic where the real part of s is positive.

**How the definition helps.** The triangle definition lets us prove holomorphy by changing the order of integration. For fixed x the integrand is holomorphic in s, so its contour integral around each triangle is zero. On any compact subset, choose positive a and b bounding the real parts from below and above. The functions xᵃ⁻¹ exp(−x) for x ≤ 1 and xᵇ⁻¹ exp(−x) for x ≥ 1 bound the absolute value of the integrand. These integrable bounds give continuity by dominated convergence and justify the exchange by Fubini’s theorem. This Gamma application is our own use of the article’s method. Goursat’s theorem and Morera’s theorem establish the equivalence of definitions.

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem), [Gamma function](https://en.wikipedia.org/wiki/Gamma_function). It says: “Morera's theorem can also be used in conjunction with Fubini's theorem and the Weierstrass M-test to show the analyticity of functions defined by sums or integrals”

**Sources:** none listed. No primary source with a working link was found.

### Adding a point at infinity makes poles ordinary points

**Remember:** Add one point at infinity, and the poles have somewhere to go.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30F10 (Compact Riemann surfaces and uniformization), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The Riemann sphere is the complex plane with one point ∞ added. Near ordinary points the coordinate is z, and near ∞ the coordinate is 1/z. These two coordinates decide which functions on the sphere are holomorphic. On the sphere, 1/0 = ∞ is well behaved.

**Problem.** Rational functions and Möbius transformations should be holomorphic maps that are defined at every point.

**How the definition helps.** On the sphere, every rational function extends to a holomorphic map from the sphere to itself, and it sends its poles to ∞. On the plane, by contrast, a rational function is undefined at its poles. A Möbius map z ↦ (az + b)/(cz + d) with c ≠ 0 is undefined at one point and misses one value (our own remark). Apart from the constant map to ∞, the holomorphic maps from the sphere to itself are exactly the rational functions. The automorphisms of the sphere (holomorphic bijections with holomorphic inverses) are exactly the Möbius transformations. A meromorphic function (a function that is holomorphic except at isolated poles) becomes a holomorphic map to the sphere. Arithmetic is still not defined everywhere: expressions such as ∞ + ∞ and 0 · ∞ stay undefined (our own remark).

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “For example, any rational function on the complex plane can be extended to a holomorphic function on the Riemann sphere, with the poles of the rational function mapping to infinity.”

**Sources:** none listed. No primary source with a working link was found.

### The positive Jacobian test makes every Riemann surface orientable

**Remember:** Complex coordinate changes have positive real determinants.

*True by definition.* MSC 30F99 (Riemann surfaces). arXiv math.CV, math.GT. Level 2: later undergraduate.

**Definition.** A smooth surface is orientable if it has coordinate charts whose changes of coordinates all have positive Jacobian determinant. An alternative asks for a smooth, nowhere-zero choice of signed area on its tangent planes. A Riemann surface has complex charts whose changes of coordinates and their inverses are holomorphic.

**Problem.** Every Riemann surface is orientable.

**How the definition helps.** The positive Jacobian definition lets the complex charts serve as the orientation charts. The real derivative of each change of coordinates multiplies by its complex derivative. That complex derivative is nonzero by the chain rule for the inverse. Its real determinant is its squared absolute value, which is positive. In our own comparison, the signed-area definition adds a gluing step. A partition of unity, a family of smooth weights that sum to one, combines the consistent local area forms into one global form.

**Wikipedia:** [Riemann surface](https://en.wikipedia.org/wiki/Riemann_surface). It says: “However, the real determinant of multiplication by a complex number α equals \|α\|², so the Jacobian of h has positive determinant. Consequently, the complex atlas is an oriented atlas.”

**Sources:** none listed. No primary source with a working link was found.

### Germs as a space make monodromy follow from path lifting

**Remember:** Neighboring paths use the same chain of germs, so fixed endpoints give the same result.

*True by definition. Confidence: medium.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30F99. arXiv math.CV. Level 3: graduate.

**Definition.** A germ at z records an analytic function near z, identifying two functions if they agree near z. Give the set of germs a topology using germs of a single function on a disc as basic open sets. Each such set projects to the disc by sending each germ to its center. The usual description of analytic continuation uses chains of overlapping discs along a path.

**Problem.** Let G be a simply connected open region in the plane. If a germ at a point of G continues along every path in G from that point, it extends to one holomorphic function on G.

**How the definition helps.** The germ-space definition turns continuation into a continuous lift of a path, so it suffices to show its endpoint survives a deformation. Each lift can be followed in finitely many basic open sets above discs. For nearby paths with the same endpoints, the same chain of discs gives the same endpoint germ. Our own lifting explanation uses the identity theorem to ensure uniqueness on overlaps. Thus the endpoint stays constant during any deformation that fixes both endpoints. Simple connectivity lets us deform any two paths with the same endpoints into each other with endpoints fixed. The endpoint germs give a holomorphic function since each extends to one function on a disc.

**Wikipedia:** [Analytic continuation](https://en.wikipedia.org/wiki/Analytic_continuation), [Monodromy theorem](https://en.wikipedia.org/wiki/Monodromy_theorem). It says: “In the above language this means that if G is a simply connected domain, and S is a sheaf whose set of base points contains G, then there exists an analytic function f on G whose germs belong to S.”

**Paper or page:** [Uniqueness of Analytic Continuation](https://proofwiki.org/wiki/Uniqueness_of_Analytic_Continuation). It says: “Let F₁ and F₂ be analytic continuations of f to V. Then F₁ = F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Cross-ratio distortion gives the Schwarzian derivative its chain rule

**Remember:** Cross-ratio distortion ratios multiply under composition, so their leading corrections add.

*True by definition. Confidence: medium.* MSC 30C45 (Special classes of univalent and multivalent functions of one complex variable (starlike, convex, bounded rotation, etc.)), 51B10. arXiv math.CV. Level 3: graduate.

**Definition.** For distinct points z₁, z₂, z₃, z₄ approaching z, use the cross-ratio R = ((z₃ − z₁)(z₄ − z₂))/((z₃ − z₂)(z₄ − z₁)). Divide the cross-ratio of their images under f by R. The Schwarzian Sf at z is six times the coefficient of (z₁ − z₂)(z₃ − z₄) in the leading distortion term. The usual formula is Sf = (f″/f′)′ − ½(f″/f′)².

**Problem.** Where the holomorphic functions and the composite are defined and their derivatives are nonzero, S(f∘g) = ((Sf)∘g)·(g′)² + Sg. In particular, Möbius maps have zero Schwarzian wherever finite.

**How the definition helps.** The distortion definition gives the chain rule because the distortion ratio for a composite is the product of two ratios. The leading corrections add because each is already quadratic in the small differences. For f after g, the two differences each gain a factor of g′ to first order, giving the square in the formula. The article gives the expansion and its implication, and the multiplication step is our own explanation. The work moves into the Taylor calculation that identifies the coefficient with the differential formula.

**Wikipedia:** [Schwarzian derivative](https://en.wikipedia.org/wiki/Schwarzian_derivative). It says: “This immediately yields the chain rule S(f∘g) = ((Sf)∘g)·(g′)² + Sg.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing univalent functions makes the Bieberbach coefficient bound statable

**Remember:** Fix f(0) = 0 and f′(0) = 1, then \|aₙ\| ≤ n.

*Makes the theorem clean to state or prove.* MSC 30C55 (General theory of univalent and multivalent functions of one complex variable), 30C50. arXiv math.CV. Level 3: graduate.

**Definition.** A schlicht function is a one-to-one holomorphic function f on the unit disc with f(0) = 0 and f′(0) = 1. So f(z) = z + a₂z² + a₃z³ + … . Any one-to-one holomorphic g becomes schlicht after (g − g(0))/g′(0).

**Problem.** De Branges's theorem, once the Bieberbach conjecture, says that every schlicht function has \|aₙ\| ≤ n for all n ≥ 2. The Koebe function z/(1 − z)², with aₙ = n, shows that the bound is sharp.

**How the definition helps.** The normalization removes the freedom of scaling and translation, which would otherwise make the coefficients unbounded. Without it, cf is one-to-one for every c ≠ 0 and has coefficients caₙ, so no bound can hold (our own). The normalization also makes the class compact (our own link). By Hurwitz's theorem a limit of one-to-one functions is one-to-one or constant, and f′(0) = 1 excludes the constant. The hard part was the proof. Bieberbach did n = 2 in 1916, and de Branges did all n in 1985.

**Wikipedia:** [De Branges's theorem](https://en.wikipedia.org/wiki/De_Branges%27s_theorem), [Hurwitz's theorem (complex analysis)](https://en.wikipedia.org/wiki/Hurwitz%27s_theorem_%28complex_analysis%29). It says: “The statement concerns the Taylor coefficients aₙ of a univalent function, i.e., a one-to-one holomorphic function that maps the unit disk into the complex plane, normalized as is always possible so that a₀=0 and a₁=1.”

**Sources:**

- [L. de Branges, A proof of the Bieberbach conjecture, Acta Mathematica 154 (1985)](https://doi.org/10.1007/BF02392821)

### Geometric and analytic quasiconformality agree, so each proof can choose

**Remember:** Distortion of shapes and the Beltrami bound are the same condition.

*True by definition. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane), 30F60. arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** In the geometric sense, a K-quasiconformal map is a homeomorphism that changes the conformal modulus of each quadrilateral by at most a factor K. The modulus is a conformal invariant, like the ratio of the sides of a rectangle. In the analytic sense, it is a homeomorphism with weak derivatives that satisfy \|∂f/∂z̄\| ≤ k\|∂f/∂z\| almost everywhere, where k = (K−1)/(K+1). The theorem adds that these derivatives are locally square-integrable.

**Problem.** Teichmüller theory needs maps between Riemann surfaces that are close to conformal. It needs both their geometric properties and the Beltrami equation.

**How the definition helps.** Each definition makes some theorems immediate, and the equivalence lets every proof use the easier one. With the geometric definition, the inverse of a K-quasiconformal map is K-quasiconformal by definition (our own). Compositions multiply the constants, also by definition (our own). The analytic definition links the maps to the Beltrami equation ∂f/∂z̄ = μ ∂f/∂z (our own). The work moves into the proof that the two definitions agree.

**Paper or page:** [Survey on the Canonical Metrics on the Teichmüller Spaces and the Moduli Spaces of Riemann Surfaces](https://arxiv.org/abs/2405.00761). It says: “The geometric and the analytic definitions of K-quasiconformality are equivalent.”

**Sources:**

- [K. W. Chan, Survey on the Canonical Metrics on the Teichmüller Spaces and the Moduli Spaces of Riemann Surfaces, arXiv:2405.00761 (2024)](https://arxiv.org/abs/2405.00761)

### Measurable Beltrami coefficients and Sobolev maps give the measurable Riemann mapping theorem

**Remember:** Measurable distortion, weak derivatives: every such Beltrami equation has a solution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** A quasiconformal map is a homeomorphism that solves the Beltrami equation ∂f/∂z̄ = μ ∂f/∂z. Here μ is a measurable function with sup \|μ\| &lt; 1, and the derivatives are weak derivatives in the Sobolev space W1,2 (square-integrable first derivatives). To first order, such a map takes small circles to ellipses of bounded eccentricity.

**Problem.** Let D be a simply connected domain other than ℂ, and let μ be measurable on D with ‖μ‖∞ &lt; 1. Then a quasiconformal homeomorphism from D onto the unit disc solves the Beltrami equation for μ. This generalizes the Riemann mapping theorem from conformal to quasiconformal maps.

**How the definition helps.** Measurable coefficients and weak derivatives give a class that is closed under the limits that the existence proof takes (our own). With only continuous coefficients and classical derivatives, such limits can leave the class (our own). In applications, μ is often discontinuous, for example when an ellipse field is pulled back by a dynamical system (our own). The weaker definition lets such μ be used at all. The page says the solution is unique up to 3 real parameters. Morrey proved existence for measurable μ in 1938 (our own). Ahlfors and Bers showed in 1960 that the solution depends analytically on μ (our own).

**Wikipedia:** [Quasiconformal mapping](https://en.wikipedia.org/wiki/Quasiconformal_mapping). It says: “suppose that μ : D → ℂ is Lebesgue measurable and satisfies ‖μ‖∞&lt;1. Then there is a quasiconformal homeomorphism f from D to the unit disk which is in the Sobolev space W1,2(D)”

**Sources:**

- [C. B. Morrey, On the solutions of quasi-linear elliptic partial differential equations, Transactions of the American Mathematical Society 43 (1938)](https://doi.org/10.1090/s0002-9947-1938-1501936-8)
- [L. Ahlfors and L. Bers, Riemann's Mapping Theorem for Variable Metrics, Annals of Mathematics 72 (1960)](https://doi.org/10.2307/1970141)

### Exponential type turns compact Fourier support into a growth bound

**Remember:** Support inside \[−A, A\] means growth like exp(A\|ζ\|).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30D15 (Special classes of entire functions of one complex variable and growth estimates), 42A38. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** An entire function f has exponential type A if there is a constant C with \|f(ζ)\| ≤ C exp(A\|ζ\|) for all complex ζ. This measures growth in every complex direction by one number.

**Problem.** The Paley–Wiener theorem describes the Fourier transforms of L² functions supported in \[−A, A\]. They are exactly the entire functions of exponential type A that are square integrable over horizontal lines.

**How the definition helps.** The number A in the growth bound is the size of the support. So a support condition becomes an equivalent condition on growth in the complex plane. The forward direction is easy: \|exp(ixζ)\| ≤ exp(A\|ζ\|) for \|x\| ≤ A. The converse is the real content, and it needs contour shifts and growth estimates (our own summary). Schwartz extended the theorem to distributions with compact support. This form is used in signal theory: band-limited signals are restrictions of entire functions of exponential type (our own).

**Wikipedia:** [Paley–Wiener theorem](https://en.wikipedia.org/wiki/Paley%E2%80%93Wiener_theorem). It says: “Conversely, any entire function of exponential type A which is square-integrable over horizontal lines is the holomorphic Fourier transform of an L² function supported in \[−A,A\].”

**Sources:**

- [R. Paley and N. Wiener, Fourier Transforms in the Complex Domain, AMS Colloquium Publications 19 (1934)](https://doi.org/10.1090/coll/019)

### The order of an entire function makes Hadamard's factorization finite

**Remember:** Finite order means a polynomial exponent and one fixed elementary factor.

*Makes the theorem clean to state or prove.* MSC 30D15 (Special classes of entire functions of one complex variable and growth estimates), 30D20. arXiv math.CV. Level 3: graduate.

**Definition.** Let M(r) be the maximum of \|f\| on the circle \|z\| = r. The order of an entire function f is the lim sup of log log M(r) / log r as r → ∞. For example, sin z, cos z and eᶻ have order 1.

**Problem.** Hadamard's theorem says that an entire function of finite order ρ is zᵐ exp(P(z)) times a product of elementary factors Eₚ(z/aₖ) over its zeros. Here P is a polynomial of degree at most ρ, and one integer p ≤ ρ serves for every factor.

**How the definition helps.** One number that measures growth controls both free parts of the Weierstrass product, so the factorization has a short, rigid form. Weierstrass's general theorem leaves the entire function g in exp(g(z)) and the degrees pₙ uncontrolled. Finite order forces g to be a polynomial and lets one degree p work for all zeros. The page explains how the genus of f, the larger of p and the degree of P, relates to the integer part of ρ. The hard part is the proof, which bounds the zeros by Jensen's formula and bounds g by growth estimates (our own summary). The theorem was a key tool in the 1896 proofs of the prime number theorem (our own).

**Wikipedia:** [Weierstrass factorization theorem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem). It says: “A special case of the Weierstrass factorization theorem occurs for entire functions of finite order. In this case the pₙ can be taken independent of n and the function g(z) is a polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Elementary factors give an entire function for every sequence of zeros

**Remember:** Each elementary factor puts one zero in place and stays near one elsewhere.

*Makes the theorem clean to state or prove.* MSC 30D20 (Entire functions of one complex variable (general theory)), 30C15. arXiv math.CV. Level 3: graduate.

**Definition.** Weierstrass's elementary factors are E₀(z) = 1 − z and Eₙ(z) = (1 − z) exp(z + z²/2 + … + zⁿ/n). Each one vanishes only at z = 1. For \|z\| ≤ 1 it satisfies \|1 − Eₙ(z)\| ≤ \|z\|ⁿ⁺¹, so it is very close to 1 near 0.

**Problem.** Let aₙ be any sequence of nonzero complex numbers with \|aₙ\| → ∞. Then some entire function has zeros exactly at the aₙ, with multiplicity equal to the number of repeats. Every entire function is such a product times zᵐ and a nonvanishing factor exp(g(z)).

**How the definition helps.** An infinite product converges only if its factors tend to 1. The elementary factors are built to do exactly that while keeping their one zero. The naive product of (1 − z/aₙ) can diverge. For aₙ = n it diverges because the sum of 1/n diverges (our own example). The exponential correction cancels the first terms of log(1 − z), so the factor Eₙ(z/aₙ) is within \|z/aₙ\|ⁿ⁺¹ of 1. A suitable choice of degrees, for example pₙ = n, then makes the product converge. What stays hard is control of the leftover factor exp(g(z)), which needs growth conditions (Hadamard).

**Wikipedia:** [Weierstrass factorization theorem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem). It says: “The necessity of additional terms in the product is demonstrated when one considers ∏ₙ(z−cₙ) where the sequence {cₙ} is not finite. It can never define an entire function, because the infinite product does not converge.”

**Sources:** none listed. No primary source with a working link was found.

### Counting infinity as a value unifies Picard's theorems

**Remember:** On the sphere, an essential singularity misses at most two points.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30D35. arXiv math.CV. Level 3: graduate.

**Definition.** Treat a meromorphic function as a holomorphic map into the Riemann sphere ℂ ∪ {∞}. Classify its behaviour at ∞ by the behaviour of f(1/z) at 0. An entire function that is not a polynomial has an essential singularity at ∞.

**Problem.** The meromorphic Great Picard theorem looks at f near an essential singularity. There f takes every point of the Riemann sphere infinitely often, with at most two exceptions. Little Picard says that a nonconstant entire function misses at most one complex value.

**How the definition helps.** On the sphere, poles are ordinary values, so the exceptional values of entire and meromorphic functions are counted in one way. An entire function never takes ∞, which uses up one of the two exceptions, so at most one finite value is missed (our own step). A singularity at infinity is classified like a finite one, so the Little theorem is a case of the Great one. The page gives 1/(1 − exp(1/z)), which takes ∞ infinitely often but misses 0 and 1. The hard part stays in the proof, through the modular lambda function, as the page says, or through Nevanlinna theory (our own).

**Wikipedia:** [Picard theorem](https://en.wikipedia.org/wiki/Picard_theorem). It says: “With this generalization, Little Picard Theorem follows from Great Picard Theorem because an entire function is either a polynomial or it has an essential singularity at infinity.”

**Sources:** none listed. No primary source with a working link was found.

### Adding the proximity function makes Nevanlinna's characteristic independent of the value

**Remember:** Count how often f hits a, plus how close it comes.

*Makes the theorem clean to state or prove.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** Let f be meromorphic and let a be a value. The counting function N(r, a, f) counts the solutions of f = a in the disc \|z\| &lt; r, with a logarithmic weight. The proximity function m(r, a, f) is the average over \|z\| = r of log⁺ 1/\|f − a\|. It measures how close f comes to a on the circle, and the characteristic is T(r, f) = m(r, ∞, f) + N(r, ∞, f).

**Problem.** The First Fundamental Theorem says that for every a on the Riemann sphere, T(r, f) = N(r, a, f) + m(r, a, f) + O(1).

**How the definition helps.** The proximity term is designed so that Jensen's formula turns the sum into a quantity that does not depend on a. Counting alone does depend on a (our own example). The exponential function eᶻ never takes the value 0, so N(r, 0) = 0, while N(r, 1) grows. But eᶻ comes very close to 0 on the left half of each circle, and m(r, 0) records this. The hard part is the Second Fundamental Theorem. It gives the defect relation, a quantitative form of Picard's theorem.

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “the First Fundamental Theorem says that the sum N(r,a,f) + m(r,a,f), tends to infinity at the rate which is independent of a. The first Fundamental theorem is a simple consequence of Jensen's formula.”

**Sources:**

- [R. Nevanlinna, Zur Theorie der Meromorphen Funktionen, Acta Mathematica 46 (1925)](https://doi.org/10.1007/BF02543858)

### Non-tangential approach gives boundary limits of bounded holomorphic functions

**Remember:** Approach the boundary inside a wedge, and the limit exists almost everywhere.

*Rules out counterexamples. Confidence: medium.* MSC 30D40 (Cluster sets, prime ends, boundary behavior), 30H10. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** A path in the unit disc converges non-tangentially to a boundary point if it stays in a wedge at that point. The wedge is symmetric about the radius and has opening angle less than π. Radial approach is the simplest case.

**Problem.** Fatou's theorem is about the Hardy space Hᵖ of the disc: holomorphic functions with bounded p-th means on circles. Each such f, for example a bounded one, has a boundary function f₁. At almost every boundary point, f(z) tends to f₁ along every non-tangential path.

**How the definition helps.** Inside a wedge, the distance to the boundary is comparable to the distance to the point. So the Poisson kernel and a maximal function control the values. Tangential approach is excluded because it fails (our own). Littlewood showed this in 1927 for any curve tangent to the circle (our own). Some bounded holomorphic function then has no limit along rotated copies of the curve at almost every point. Radial limits alone are true but too weak for many uses (our own). The hard part is the maximal function estimate.

**Wikipedia:** [Fatou's theorem](https://en.wikipedia.org/wiki/Fatou%27s_theorem). It says: “Let f ∈ Hᵖ(𝔻). Then for almost all θ ∈ \[0,2π\], lim (t→1) f(γ(t)) = f₁(eⁱᶿ) for every non-tangential limit γ converging to eⁱᶿ, where f₁ is defined as above.”

**Sources:**

- [P. Fatou, Séries trigonométriques et séries de Taylor, Acta Mathematica 30 (1906)](https://doi.org/10.1007/BF02418579)

### Prime ends give every conformal map of the disc a boundary correspondence

**Remember:** Boundary points may fail, but prime ends always match the circle.

*Makes the theorem clean to state or prove.* MSC 30D40 (Cluster sets, prime ends, boundary behavior), 30C35. arXiv math.CV. Level 3: graduate.

**Definition.** A prime end of a simply connected plane domain is an equivalence class of chains of cross-cuts. A cross-cut is an arc in the domain with both ends on the boundary. A chain is a nested sequence of cross-cuts that shrinks toward the boundary.

**Problem.** Carathéodory's theorem: let f be a conformal bijection from the unit disc onto a simply connected domain B. Then f gives a bijection from the unit circle onto the prime ends of B. For a domain bounded by a Jordan curve, prime ends are boundary points, and f extends to the closures (our own).

**How the definition helps.** Prime ends describe the boundary as seen from inside the domain, which is what the conformal map sees. Ordinary boundary points do not work in general (our own examples). A disc with a slit along a radius has slit points that are reached from two sides, so they match two points of the circle. In a comb-shaped domain some boundary points cannot be reached by any path from inside. Prime ends split or merge such points, and the theorem holds with no exceptions. The hard part is the length–area argument in Carathéodory's proof (our own).

**Wikipedia:** [Prime end](https://en.wikipedia.org/wiki/Prime_end). It says: “If ƒ maps the unit disk conformally and one-to-one onto the domain B, it induces a one-to-one mapping between the points on the unit circle and the prime ends of B.”

**Sources:**

- [C. Carathéodory, Über die Begrenzung einfach zusammenhängender Gebiete, Mathematische Annalen 73 (1913)](https://doi.org/10.1007/BF01456699)

### Allowing the limit infinity makes Montel's two-omitted-values theorem true

**Remember:** Normal families may run off to infinity, and that counts as converging.

*Rules out counterexamples.* MSC 30D45 (Normal functions of one complex variable, normal families), 30D35. arXiv math.CV. Level 3: graduate.

**Definition.** A family of functions on a domain is normal if every sequence in it has a subsequence that converges uniformly on compact sets. For holomorphic and meromorphic functions, the distance on the values is the spherical distance on the Riemann sphere. So a subsequence may converge to the constant ∞.

**Problem.** Montel's theorem says that a family of holomorphic functions on a domain, all omitting the same two complex values, is normal. Its meromorphic form says that omitting three points of the Riemann sphere is enough.

**How the definition helps.** With the spherical distance, escape to infinity becomes one more allowed limit, so the theorem can hold with no exceptions. Without it the theorem is false (our own example). The constant functions fₙ = n, for n ≥ 2, all omit 0 and 1. No subsequence converges to a finite function, but the sequence converges to ∞ in the spherical distance. The meromorphic form then counts ∞ as an omitted value, so three omitted points become the uniform condition. The hard part stays in the proof, which uses the modular function or Zalcman's lemma.

**Wikipedia:** [Normal family](https://en.wikipedia.org/wiki/Normal_family), [Montel's theorem](https://en.wikipedia.org/wiki/Montel%27s_theorem). It says: “For a family of holomorphic functions, this reduces to requiring two values omitted by viewing each function as a meromorphic function omitting the value infinity.”

**Sources:**

- [P. Montel, Sur les familles de fonctions analytiques qui admettent des valeurs exceptionnelles dans un domaine, Annales scientifiques de l'École normale supérieure 29 (1912)](https://doi.org/10.24033/asens.652)

### The Cauchy principal value makes the boundary jump formula statable

**Remember:** Boundary value equals principal value plus or minus half the density.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 46F20, 26A42. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** Take the integral of φ(ζ)/(ζ − z) over a curve C through z. Its Cauchy principal value removes a small piece of C centred at z and lets the piece shrink. The two sides of the singularity cancel in the limit. On the real line this gives P(1/x).

**Problem.** Let Φ(z) be 1/(2πi) times the integral of φ(ζ)/(ζ − z) over a smooth simple closed curve C, with φ analytic on C. Its limits from inside and outside at z on C are the principal value of this integral plus ½φ(z) and minus ½φ(z). On the real line, 1/(x ± iε) tends to ∓iπδ(x) + P(1/x).

**How the definition helps.** The ordinary integral diverges at z, because 1/(ζ − z) is not integrable there, and the principal value is the symmetric limit that does exist. With it, each one-sided limit splits into a common average plus or minus half the density. The difference of the two limits is φ(z), the jump. This is the key step in Plemelj's 1908 solution of the Riemann–Hilbert problem. The hard part is the analysis for less smooth curves and data.

**Wikipedia:** [Sokhotski–Plemelj theorem](https://en.wikipedia.org/wiki/Sokhotski%E2%80%93Plemelj_theorem). It says: “The Sokhotski–Plemelj formulas relate the limiting boundary values of these two analytic functions at a point z on C and the Cauchy principal value P of the integral”

**Sources:**

- [J. Plemelj, Ein Ergänzungssatz zur Cauchyschen Integraldarstellung analytischer Funktionen, Randwerte betreffend, Monatshefte für Mathematik und Physik 19 (1908)](https://doi.org/10.1007/bf01736696)

### Ramification indices make the Riemann–Hurwitz formula an exact count

**Remember:** Each ramification point costs e − 1 from the Euler characteristic.

*Makes the theorem clean to state or prove.* MSC 30F10 (Compact Riemann surfaces and uniformization), 14H30. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a nonconstant holomorphic map π between compact Riemann surfaces, every point P′ has local coordinates in which π(z) = zⁿ. The number n is the ramification index e at P′. The map is ramified at P′ when e &gt; 1.

**Problem.** For a map π of degree N from S′ to S, the Euler characteristics satisfy χ(S′) = N·χ(S) − Σ(eₚ − 1). Equivalently, 2g(S′) − 2 = N(2g(S) − 2) + Σ(eₚ − 1).

**How the definition helps.** The local form zⁿ says exactly how many sheets meet at a point, so the correction to the count is a sum of local numbers. Away from ramification points the map is an N-sheeted covering, and Euler characteristics multiply by N. A point of index e stands for e sheets that meet in one point. So it removes e − 1 points from the fibre over its image, which gives the correction. The page's example is ℘ on an elliptic curve, a double cover of the sphere with four points of index 2. It checks 0 = 2·2 − 4. Only finitely many points have e &gt; 1.

**Wikipedia:** [Riemann–Hurwitz formula](https://en.wikipedia.org/wiki/Riemann%E2%80%93Hurwitz_formula). It says: “What the Riemann–Hurwitz formula does is to add in a correction to allow for ramification (sheets coming together).”

**Sources:**

- [A. Hurwitz, Ueber Riemann'sche Flächen mit gegebenen Verzweigungspunkten, Mathematische Annalen 39 (1891)](https://doi.org/10.1007/bf01199469)

### Cross-ratio distance makes real Möbius maps hyperbolic isometries

**Remember:** Möbius maps preserve the cross-ratio and therefore preserve this distance.

*True by definition. Confidence: medium.* MSC 30F45 (Conformal metrics (hyperbolic, Poincaré, distance functions)), 51M10. arXiv math.CV, math.MG. Level 3: graduate.

**Definition.** In the upper half-plane, the hyperbolic line through distinct p and q is an arc or a vertical ray perpendicular to the boundary. Let a and b be its boundary endpoints in the order a, p, q, b. Define the distance as log \|(q − a)(p − b)/((p − a)(q − b))\|, using a limit for an infinite endpoint. The usual distance minimizes lengths computed from \|dz\|/Im z.

**Problem.** Every Möbius map with real coefficients and positive determinant preserves hyperbolic distance in the upper half-plane.

**How the definition helps.** The cross-ratio definition makes distance invariant because the map preserves both the cross-ratio and the hyperbolic lines with their endpoints. The work is to show that the formula agrees with the distance from the hyperbolic length element. This is our own half-plane version of the argument in the article for the Klein model.

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio), [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “Since the cross-ratio is invariant under projective transformations, it follows that the hyperbolic distance is invariant under the projective transformations that preserve the conic C.”

**Sources:** none listed. No primary source with a working link was found.

### A countable base makes Riemann surfaces metrizable

**Remember:** A countable base lets a general metrization theorem supply the distance.

*True by definition.* MSC 30F99 (Riemann surfaces), 54E35. arXiv math.CV, math.GN. Level 3: graduate.

**Definition.** Define a Riemann surface as a connected Hausdorff space with complex coordinate charts and holomorphic changes of coordinates. In one convention its topology must have a countable base, a countable list of open sets whose unions give all open sets. The other convention leaves out that requirement.

**Problem.** Every Riemann surface is metrizable. This means its open sets can be obtained from a distance function.

**How the definition helps.** The countable-base convention lets us apply Urysohn’s metrization theorem directly. The charts make the Hausdorff space locally compact. Such a space is regular, meaning that a point and a closed set not containing it have disjoint open neighborhoods. Urysohn’s theorem supplies a metric for a regular Hausdorff space with a countable base. This is our own argument. Without the countability axiom, Radó’s theorem supplies the countable base.

**Wikipedia:** [Radó's theorem (Riemann surfaces)](https://en.wikipedia.org/wiki/Rad%C3%B3%27s_theorem_%28Riemann_surfaces%29). It says: “states that every connected Riemann surface is second-countable (has a countable base for its topology).”

**Paper or page:** [Riemann Surface is Metrizable](https://proofwiki.org/wiki/Riemann_Surface_is_Metrizable). It says: “A Riemann surface is metrizable.”

**Sources:** none listed. No primary source with a working link was found.

### Hardy spaces of Dirichlet series do not depend on the chosen group

**Remember:** Lift a Dirichlet series to a group, and any good group will do.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 42B30, 43A25. arXiv math.FA, math.CV. Level 4: research.

**Definition.** A general Dirichlet series is a sum of aₙ e to the power −λₙs, for an increasing sequence of frequencies λₙ. A λ-Dirichlet group is a compact abelian group G with a continuous homomorphism from ℝ into G with dense image. Each map t ↦ e to the power −iλₙt must extend through it to a character of G. The space ℋₚ(λ) consists of the Dirichlet series whose coefficients are the Fourier coefficients of a function in Lᵖ(G) with spectrum in the frequencies.

**Problem.** Hardy spaces of Dirichlet series are defined through a choice of compact group, so one must know that the choice does not matter. For ordinary Dirichlet series with λₙ = log n, one choice is the infinite torus, with one coordinate per prime. Then ℋₚ equals the Hardy space of the infinite torus isometrically (Corollary 3.4).

**How the definition helps.** Defining the norm on a compact group, instead of on vertical lines in the complex plane, turns Dirichlet series into Fourier series on a group. Then tools of harmonic analysis apply, and the independence theorem says that the definition is sound. For ordinary Dirichlet series this is Bohr's idea (our own remark). He writes n to the power −s as a monomial in the variables p to the power −s, one for each prime p. Hard questions stay, for example the convergence of partial sums.

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “ℋₚ(λ) is independent of the chosen λ-Dirichlet group G.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Analytic capacity zero means removable for bounded holomorphic functions

**Remember:** Ahlfors defined the capacity so that zero capacity means removable.

*True by definition.* MSC 30C85 (Capacity and harmonic measure in the complex plane), 30H05. arXiv math.CV. Level 4: research.

**Definition.** For a compact set K in the plane, consider holomorphic f on the complement of K with \|f\| ≤ 1 and f(∞) = 0. Let f′(∞) be the limit of z f(z) as z → ∞. The analytic capacity γ(K) is the supremum of \|f′(∞)\| over all such f. A set K is removable if every bounded holomorphic function on Ω minus K extends holomorphically to Ω, for every open Ω containing K.

**Problem.** Painlevé's problem of 1880 asks which compact sets are removable for bounded holomorphic functions. A single point is removable by Riemann's theorem.

**How the definition helps.** The capacity measures the largest normalized bounded function that lives outside K, so it is zero exactly when no such nonconstant function exists. That equivalence is easy. The work moves into a geometric description. Zero length implies zero capacity. But Vitushkin and Garnett gave sets of positive length with zero capacity. David proved Vitushkin's conjecture for sets of finite length in 1998. Tolsa proved that analytic capacity is countably semiadditive, in a paper published in 2003.

**Wikipedia:** [Analytic capacity](https://en.wikipedia.org/wiki/Analytic_capacity). It says: “It is easy to see that K is removable if and only if γ(K) = 0. However, analytic capacity is a purely complex-analytic concept, and much more work needs to be done in order to obtain a more geometric characterization.”

**Sources:**

- [L. Ahlfors, Bounded analytic functions, Duke Mathematical Journal 14 (1947)](https://doi.org/10.1215/S0012-7094-47-01401-4)
- [X. Tolsa, Painlevé's problem and the semiadditivity of analytic capacity, Acta Mathematica 190 (2003)](https://doi.org/10.1007/BF02393237)

### Pants-gluing hyperbolic structures make Teichmüller space work for infinite-type surfaces

**Remember:** Only pants, no funnels, and big surfaces get a Teichmüller space.

*Rules out counterexamples. Confidence: medium.* MSC 30F60 (Teichmüller theory for Riemann surfaces), 57K20. arXiv math.GT, math.CV. Level 4: research.

**Definition.** A complete hyperbolic surface is Nielsen-convex when it equals its convex core, the smallest convex subsurface that holds all closed geodesics. By Proposition 2, this holds exactly when the surface is glued from hyperbolic pairs of pants, possibly with cusps. It also holds exactly when the limit set is the whole circle at infinity. So the surface has no funnels or half-planes.

**Problem.** Build a space of marked hyperbolic structures on an infinite-type surface with a continuous mapping class group action. For finite-type surfaces it should be the usual Teichmüller space.

**How the definition helps.** A complete hyperbolic structure can have funnels, which add extra parameters and make the space too big (our own example). Asking for Nielsen-convex structures excludes funnels and half-planes. Then each structure is glued from pairs of pants. On finite-type surfaces the topology agrees with that of Teichmüller space (Corollary 30). The same definition works for surfaces of infinite type, where the mapping class group acts by homeomorphisms (Corollary 24). What stays hard is the choice of topology on the space for infinite-type surfaces.

**Paper or page:** [A Moduli Space of Marked Hyperbolic Structures for Big Surfaces](https://arxiv.org/abs/2311.01551), [A Moduli Space of Marked Hyperbolic Structures for Big Surfaces](https://arxiv.org/abs/2311.01551). It says: “We define a topology on the marked moduli space and prove that it reduces to the usual Teichmüller space for finite type surfaces.”

**Sources:**

- [C. Tappu, A Moduli Space of Marked Hyperbolic Structures for Big Surfaces, arXiv:2311.01551 (2023)](https://arxiv.org/abs/2311.01551)

### Linear local connectivity is exactly what quasisymmetric spheres need

**Remember:** No narrow necks at any scale makes a regular sphere round.

*Makes the theorem clean to state or prove.* MSC 30L10 (Quasiconformal mappings in metric spaces), 54F65. arXiv math.CV, math.MG. Level 4: research.

**Definition.** A metric space is linearly locally connected (LLC) with constant λ when two conditions hold for every ball B(a, r). Any two points in the ball can be joined by a connected set inside B(a, λr). Any two points outside the ball can be joined by a connected set outside B(a, r/λ). Ahlfors 2-regular means that balls of radius r have area between c·r² and C·r².

**Problem.** An Ahlfors 2-regular metric 2-sphere is quasisymmetrically equivalent to the round sphere exactly when it is linearly locally connected (Bonk and Kleiner). A quasisymmetric map distorts the ratios of distances from a point only by a controlled amount.

**How the definition helps.** In our own words, the round sphere is LLC, and a quasisymmetric map keeps the LLC property with a changed constant. So the condition is necessary; this is also our own. The theorem says that, once area is regular, no other condition is needed. So the definition collects exactly the connectivity that a quasisymmetric map preserves, in our own reading. Our own remark is that the hard direction builds the map from the space. The survey also states that the map can be found as a minimizer of energy (Theorem 9).

**Paper or page:** [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1). It says: “Let X be a metric 2-sphere that is Ahlfors 2-regular. Then there exists a quasisymmetric homeomorphism f: Ĉ → X if and only if X is LLC. The statement is quantitative.”

**Sources:**

- [Dimitrios Ntalampekos, Uniformization of metric surfaces: A survey, arXiv:2505.02697 (2025)](https://arxiv.org/abs/2505.02697v1)
- [Bonk, Kleiner, Quasisymmetric parametrizations of two-dimensional metric spheres, Inventiones mathematicae 150 (2002), 127–183](https://doi.org/10.1007/s00222-002-0233-z)

### Local reciprocality is exactly the condition for quasiconformal uniformization

**Remember:** The plane has modulus product one; ask only that it stays bounded.

*Makes the theorem clean to state or prove.* MSC 30L10 (Quasiconformal mappings in metric spaces), 30F10. arXiv math.CV, math.MG. Level 4: research.

**Definition.** A metric surface is a metric space that is locally like the plane. Take one with locally finite area, meaning two-dimensional Hausdorff measure. For a quadrilateral, let M₁ and M₂ be the conformal moduli of the curves that join its two pairs of opposite sides. By Theorem 28, a surface without boundary is reciprocal exactly when M₁·M₂ ≤ κ for all quadrilaterals; in the plane, M₁·M₂ = 1.

**Problem.** A metric surface with locally finite area admits a quasiconformal map from a complete Riemannian surface of constant curvature exactly when it is locally reciprocal. For simply connected surfaces without boundary, the model is the sphere, the plane or the disc (Rajala's theorem).

**How the definition helps.** In our own words, a quasiconformal map changes the modulus of a curve family by at most a fixed factor. So a quasiconformal image of a Riemannian surface must have bounded modulus products, locally; this is also our own. The definition thus asks for exactly what any such map would preserve, in our own reading. The theorem says that this necessary condition, in its local form, is also sufficient. The hard direction builds the map; Rajala did this first for metric spheres. Without reciprocality, the survey states that such a surface still has a weakly quasiconformal map from a model surface (Theorem 47).

**Paper or page:** [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1), [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1). It says: “Then there exists a complete Riemannian surface (Z,g) of constant curvature that is homeomorphic to X and a quasiconformal map f: Z → X if and only if X is locally reciprocal.”

**Sources:**

- [Dimitrios Ntalampekos, Uniformization of metric surfaces: A survey, arXiv:2505.02697 (2025)](https://arxiv.org/abs/2505.02697v1)
- [Rajala, Uniformization of two-dimensional metric surfaces, Inventiones mathematicae 207 (2016), 1301–1375](https://doi.org/10.1007/s00222-016-0686-0)
