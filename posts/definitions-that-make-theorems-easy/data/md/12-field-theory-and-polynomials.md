### Centering the roots removes the second term of a polynomial

**Remember:** The centered roots add to zero.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Center the root list by subtracting its mean from each root, counting repeats in the mean. For a polynomial f with root mean m, the centered polynomial is f(y + m).

**Problem.** Centering gives the unique shift of a nonconstant complex polynomial that makes the coefficient just below its leading term zero.

**How the definition helps.** In our own proof, shifting the variable by c changes the mean of the roots from m to m − c. Only c = m makes this mean zero. Viète’s formula says the coefficient in question equals the negative root sum times the leading coefficient. It also gives the shift from the coefficients without finding the roots.

**Paper or page:** [Tschirnhaus Transformation yields Depressed Polynomial](https://proofwiki.org/wiki/Tschirnhaus_Transformation_yields_Depressed_Polynomial). It says: “converts f into a depressed polynomial”

**Sources:** none listed. No primary source with a working link was found.

### The quadratic discriminant measures the height at the vertex

**Remember:** The vertex height gives the discriminant after multiplication by −4a.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 1: early undergraduate.

**Definition.** For a real quadratic f(x) = ax² + bx + c with a ≠ 0, the vertex lies at h = −b/(2a). Define its discriminant Δ by multiplying the vertex height f(h) by −4a.

**Problem.** The complex roots are h ± √Δ/(2a). Positive, zero, and negative Δ give two, one, and no distinct real roots, respectively.

**How the definition helps.** Our own proof writes f(x) as a(x − h)² + f(h), so solving f(x) = 0 requires just one square root. Our own comparison expands −4a f(h) to recover b² − 4ac.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “the roots are distinct and real if Δ &gt; 0, coincide at x = −b/(2a) if Δ = 0”

**Sources:** none listed. No primary source with a working link was found.

### Counting roots with multiplicity makes every degree-n polynomial have n roots

**Remember:** A double root is one root that you count twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 30C15. arXiv math.AC, math.CV. Level 1: early undergraduate.

**Definition.** Let a be a root of a polynomial p. The multiplicity of a is the largest k such that (x−a)ᵏ divides p.

**Problem.** Over the complex numbers, every polynomial of degree n ≥ 1 has exactly n roots, counted with multiplicity.

**How the definition helps.** Counting with multiplicity lets the statement hold with no exceptions. Take x³ + 2x² − 7x + 4 = (x+4)(x−1)². As a set, its roots are only −4 and 1, so 'exactly n roots' would be false. With multiplicity, the root 1 counts twice, and the count is 3. The hard part does not become easier: a complex root must exist at all, and that is the fundamental theorem of algebra (our own remark).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “The notion of multiplicity is important to be able to count correctly without specifying exceptions (for example, double roots counted twice).”

**Sources:** none listed. No primary source with a working link was found.

### One comparison polynomial bounds every complex root

**Remember:** Replace the lower coefficients by negative sizes and bound all roots.

*Makes the theorem clean to state or prove.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 30C15. arXiv math.CV. Level 1: early undergraduate.

**Definition.** Make the leading coefficient 1 by dividing through. Define the comparison polynomial by keeping the leading term and replacing each lower coefficient by minus its absolute value.

**Problem.** If there is a nonzero lower coefficient, the comparison polynomial has a unique positive root R. Every complex root of the original polynomial has absolute value at most R.

**How the definition helps.** In our own proof, the triangle inequality makes the comparison polynomial nonpositive at the absolute value of every root. For positive inputs, divide by the leading power to get one minus a strictly decreasing sum. This quotient increases from negative infinity to one, so its unique zero bounds every root size.

**Wikipedia:** [Geometrical properties of polynomial roots](https://en.wikipedia.org/wiki/Geometrical_properties_of_polynomial_roots). It says: “Descartes' rule of signs shows that the polynomial has exactly one positive real root.”

**Sources:**

- [Augustin-Louis Cauchy, Sur la résolution des équations numériques et sur la théorie de l’élimination, Exercices de mathématiques (1829), §§IV–V](https://upload.wikimedia.org/wikipedia/commons/6/6a/Daugustin_Gauchy_Mathematiques_%28IA_in.ernet.dli.2015.164686%29.pdf)

### Zero coefficients cannot hide sign changes

**Remember:** Skip zeros before counting signs.

*Rules out counterexamples.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 01A45. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Count a polynomial’s sign changes after deleting all zero coefficients. A tempting alternative counts only adjacent coefficients with opposite signs.

**Problem.** For a real polynomial with a nonzero constant term, the positive root count equals the sign count minus a nonnegative even integer. Count roots with multiplicity.

**How the definition helps.** Deleting zeros counts a sign change across a missing power. In our own example, x² − 1 has one positive root, but neither adjacent coefficient pair changes sign. Our own proof outline uses the fact that multiplying by x − a for positive a adds at least one sign change. For parity, compare the first and last nonzero coefficients. Their signs also give the signs near zero and near positive infinity, and only roots of odd multiplicity reverse the polynomial’s sign.

**Wikipedia:** [Descartes's rule of signs](https://en.wikipedia.org/wiki/Descartes%27s_rule_of_signs). It says: “the number of sign changes in the sequence of the polynomial's coefficients (omitting zero coefficients)”

**Paper or page:** [Gauss's proof of Descartes's rule of signs](https://arxiv.org/abs/2205.04249v2). It says: “Let f(x) be a polynomial with f(0) ≠ 0. There exists a nonnegative even integer ν such that”

**Sources:**

- [Melvyn B. Nathanson, Gauss's proof of Descartes's rule of signs](https://arxiv.org/abs/2205.04249v2)

### Formal differentiation detects repeated roots

**Remember:** At a root, the derivative detects a second copy of the same linear factor.

*Makes the theorem clean to state or prove.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** The formal derivative sends constants to zero. For each positive power, multiply the coefficient by the exponent and lower the exponent by one. A root a is repeated when (x − a)² divides the polynomial.

**Problem.** If a is a root of a nonzero polynomial f over a field, then a is a repeated root exactly when f′(a) = 0.

**How the definition helps.** The formal product rule turns the test into one substitution at the root (our own). Write f = (x − a)g by the factor theorem, so the product rule gives f′(a) = g(a) (our own). Apply the factor theorem again to see that g(a) vanishes exactly when x − a divides g (our own). The work is in proving the formal product rule from the rule on powers (our own).

**Wikipedia:** [Formal derivative](https://en.wikipedia.org/wiki/Formal_derivative). It says: “Formal differentiation is used in algebra to test for multiple roots of a polynomial.”

**Paper or page:** [Double Root of Polynomial is Root of Derivative](https://proofwiki.org/wiki/Double_Root_of_Polynomial_is_Root_of_Derivative). It says: “Then a is a root of f′.”

**Sources:** none listed. No primary source with a working link was found.

### Lagrange basis polynomials isolate data points

**Remember:** Each basis polynomial contributes only its own prescribed value at the given inputs.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** For each distinct input, multiply the linear factors that vanish at every other input. Divide by the value of that product at the chosen input. These Lagrange basis polynomials replace the usual basis of successive powers of x.

**Problem.** Choose n + 1 distinct inputs in a field. Exactly one polynomial of degree at most n takes prescribed values from that field at those inputs.

**How the definition helps.** Each basis polynomial is 1 at its own input and 0 at the others (our own). Distinct inputs make each denominator a product of nonzero differences (our own). Weight each basis polynomial by its prescribed value and add the results (our own). The root bound does the remaining work, since the difference of two solutions would have more roots than its degree (our own).

**Wikipedia:** [Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial). It says: “The interpolating polynomial is unique.”

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that”

**Sources:** none listed. No primary source with a working link was found.

### Over an algebraically closed field every linear map has an eigenvector

**Remember:** Every characteristic polynomial has a root, so every linear map has an eigenvalue.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 15A18. arXiv math.AC. Level 1: early undergraduate.

**Definition.** A field F is algebraically closed when every non-constant polynomial with coefficients in F has a root in F.

**Problem.** Every linear map from Fⁿ to itself, for n ≥ 1, has an eigenvector.

**How the definition helps.** A linear map has an eigenvector exactly when its characteristic polynomial has a root, so over an algebraically closed field the theorem is immediate. The article shows that the converse also holds, so the eigenvector property is an equivalent definition of algebraic closure. The real numbers fail: our own example is a rotation of ℝ² by 90°, which has no eigenvector. What stays hard is the fundamental theorem of algebra, which says that ℂ is algebraically closed.

**Wikipedia:** [Algebraically closed field](https://en.wikipedia.org/wiki/Algebraically_closed_field). It says: “The field F is algebraically closed if and only if, for each natural number n, every linear map from Fⁿ into itself has some eigenvector.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial remainders modulo a linear factor are evaluations

**Remember:** Modulo x − a, every x is a.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Over a field, group two polynomials together when their difference is a multiple of x − a. Define the remainder of f as the unique constant in its group.

**Problem.** The remainder of a polynomial f on division by x − a is f(a). In particular, x − a divides f exactly when f(a) = 0.

**How the definition helps.** In our own proof, replacing x by a leaves every sum and product in the same group. Thus f and the constant f(a) belong together. Polynomial division gives exactly one constant in each group and identifies it with the usual remainder.

**Paper or page:** [Little Bézout Theorem](https://proofwiki.org/wiki/Little_Bézout_Theorem). It says: “Then the remainder of Pₙ(x) when divided by x − a is equal to Pₙ(a).”

**Sources:** none listed. No primary source with a working link was found.

### Every field has a smallest subfield

**Remember:** Keep exactly the elements that every subfield must contain.

*True by definition.* MSC 12E99 (General field theory). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Define the prime subfield as the intersection of all subfields that share the field's one. An alternative builds it from one using the field operations.

**Problem.** Every field has a unique smallest subfield.

**How the definition helps.** The intersection automatically lies in every subfield, which is the required minimality. In our own proof, zero and one belong to every subfield. The intersection inherits addition, subtraction, multiplication, and inversion of nonzero elements. Constructing the smallest subfield from one instead requires showing that the construction gives exactly this intersection.

**Paper or page:** [Intersection of All Division Subrings is Prime Subfield](https://proofwiki.org/wiki/Intersection_of_All_Division_Subrings_is_Prime_Subfield). It says: “Let P be the intersection of the set of all division subrings of K. Then P is the prime subfield of K.”

**Sources:** none listed. No primary source with a working link was found.

### As the terminal Archimedean ordered field, the reals are unique by definition

**Remember:** Every Archimedean ordered field maps into the reals in exactly one way.

*True by definition. Confidence: medium.* MSC 12J15 (Ordered fields), 26A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** An Archimedean ordered field is an ordered field in which no element is larger than every natural number. The real numbers are the terminal one, which means that every Archimedean ordered field has exactly one order-preserving field homomorphism into it.

**Problem.** All constructions of the real numbers give the same field, up to a unique isomorphism.

**How the definition helps.** A terminal object is unique up to a unique isomorphism, so uniqueness holds by definition. The classical theorem says that any two complete ordered fields are isomorphic, and its proof builds the isomorphism by hand (our own). Here that work moves into existence, which needs a construction such as Dedekind cuts or Cauchy sequences. One must also show that the constructed field receives exactly one map from each Archimedean ordered field. The nLab cites Fred Richman for this description.

**nLab:** [real number](https://ncatlab.org/nlab/show/real+number). It says: “We speak of the such field because it is unique up to unique isomorphism by definition of terminal object.”

**Sources:**

- [Fred Richman, Real numbers and other completions, Mathematical Logic Quarterly 54 (2008) 98–108](https://doi.org/10.1002/malq.200710024)

### Conjugate pairs determine the sign of the discriminant

**Remember:** Each conjugate pair flips the sign of the discriminant.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization), 13P15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define the discriminant from an ordered list of roots. Multiply the differences obtained by subtracting the later root from the earlier one for each pair. Include the leading coefficient to the power degree minus one, then square the whole product.

**Problem.** For a nonconstant real polynomial with distinct roots, the discriminant has sign (−1)ᵏ when k pairs of roots are nonreal.

**How the definition helps.** Conjugation swaps the two roots in each nonreal pair, and each swap negates the unsquared product. Thus the product is real for even k and purely imaginary for odd k. Its square has the claimed sign because distinct roots make the product nonzero. Our own comparison uses the theorem on symmetric polynomials to recover a formula in the coefficients.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “If the discriminant is positive, the number of non-real roots is a multiple of 4.”

**Sources:** none listed. No primary source with a working link was found.

### Cosine coordinates solve the cubic with three distinct real roots

**Remember:** Divide the cosine angle by three to solve the cubic.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Use the third Chebyshev polynomial, defined by T₃(cos θ) = cos(3θ). Its ordinary polynomial form is T₃(z) = 4z³ − 3z.

**Problem.** For t³ − 3a²t − 2b = 0 with a &gt; 0 and \|b\| &lt; a³, let θ = arccos(b/a³). The three roots are 2a cos(θ/3), 2a cos(θ/3 + 2π/3), and 2a cos(θ/3 + 4π/3).

**How the definition helps.** The cosine definition turns the scaled cubic into an equation for three times an angle. In our own proof, t = 2az gives T₃(z) = b/a³. The triple-angle identity gives the polynomial formula for T₃. Since 0 &lt; θ &lt; π, the three displayed cosines are distinct.

**Paper or page:** [Cardano's Formula/Trigonometric Form](https://proofwiki.org/wiki/Cardano's_Formula/Trigonometric_Form). It says: “Then the solutions of P can be expressed as: x₁ = 2√(−Q) cos(θ/3) − b/(3a)”

**Sources:** none listed. No primary source with a working link was found.

### Ferrari’s resolvent reduces a quartic to quadratics

**Remember:** Make the remainder a square, then take a difference of squares.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Subtract the quartic x⁴ + px² + qx + r from (x² + m)². Define Ferrari’s resolvent as the equation that sets the discriminant in x of the remainder to zero. It is 4(2m − p)(m² − r) = q².

**Problem.** Suppose q ≠ 0. Over the complex numbers, any root m of this resolvent gives a factorization of the quartic into two quadratics.

**How the definition helps.** The resolvent makes the difference a quadratic with a repeated root, hence a square over the complex numbers. In our own proof, q ≠ 0 forces 2m − p ≠ 0, so the difference really has degree two. Subtracting its square representation from (x² + m)² gives two quadratic factors. The fundamental theorem of algebra supplies a root m of the cubic resolvent.

**Paper or page:** [Ferrari's Method](https://proofwiki.org/wiki/Ferrari's_Method). It says: “Ferrari's Method is a technique for solving this quartic.”

**Sources:** none listed. No primary source with a working link was found.

### Pairing cube roots makes Cardano’s formula valid

**Remember:** Choose the first cube root freely and force the second.

*Rules out counterexamples.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Work over the complex numbers with p ≠ 0. For x³ + px + q, let U and V be the roots of z² + qz − p³/27. Call cube roots u and v of U and V a pair when uv = −p/3.

**Problem.** Each paired sum u + v is a root of x³ + px + q. Taking all three choices of u gives all three roots, counted with multiplicity.

**How the definition helps.** The pairing condition cancels the mixed terms in (u + v)³ + p(u + v) + q. Each choice of u forces v = −p/(3u), whose cube is V. In our own check, expanding the three factors x − (u + v) gives the original cubic, including repeated roots. For x³ − 3x + 2, our own incompatible choice u = v = (1 + i√3)/2 gives a nonreal sum.

**Wikipedia:** [Cubic equation](https://en.wikipedia.org/wiki/Cubic_equation). It says: “At this point Cardano imposed the condition 3uv + p = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Reciprocal symmetry reduces an even degree equation to half degree

**Remember:** Pair opposite powers, then use x plus its reciprocal.

*Makes the theorem clean to state or prove.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For positive degree 2m, define a palindromic polynomial by the identity P(x) = x to the power 2m times P(1/x). This is equivalent to reading the same coefficient list in either order.

**Problem.** A palindromic complex polynomial equation of degree 2m reduces to degree m in y = x + 1/x. Each y gives the solutions of x² − yx + 1 = 0.

**How the definition helps.** In our own proof, the matching coefficients pair each positive power with its reciprocal after division by x to the power m. The middle coefficient stays constant. The pair sums start with 2 and y, and each next sum equals y times the last minus the preceding sum. The final sum has degree m, and the original constant coefficient is nonzero, so division loses no root.

**Wikipedia:** [Reciprocal polynomial](https://en.wikipedia.org/wiki/Reciprocal_polynomial). It says: “A self-reciprocal polynomial is also called palindromic because its coefficients, when the polynomial is written in the order of ascending or descending powers, form a palindrome.”

**Sources:** none listed. No primary source with a working link was found.

### The Hermite form counts distinct real roots by its signature

**Remember:** Real roots contribute positive squares, while conjugate pairs have zero net signature.

*True by definition.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a nonconstant real polynomial f of degree n, its Hermite form assigns a number to each real polynomial g of degree below n. That number is the sum of g(r)² over all complex roots r of f, counted with repetition.

**Problem.** The signature of the Hermite form equals the number of distinct real roots of f. Signature counts positive squares minus negative squares in a diagonal expression for the form.

**How the definition helps.** Root values separate the form into one block per real root or conjugate pair. In our own proof, a real root of multiplicity m contributes one positive square, while a conjugate pair contributes 2m(u² − v²). Real polynomial interpolation realizes arbitrary real values and conjugate pairs of values at the distinct roots. Polynomials vanishing there contribute zero, and Newton’s identities recover the usual matrix from the coefficients.

**Paper or page:** [Certified Hermite Matrices from Approximate Roots](https://arxiv.org/abs/2110.10313v1). It says: “σ(Hg(ℐ)) = \# {x ∈ Vℝ(ℐ) \| g(x) &gt; 0} − \# {x ∈ Vℝ(ℐ) \| g(x) &lt; 0}.”

**Sources:** none listed. No primary source with a working link was found.

### Asking that −1 is not a sum of squares characterizes orderable fields

**Remember:** If −1 is no sum of squares, some ordering exists.

*Makes the theorem clean to state or prove.* MSC 12D15 (Fields related with sums of squares (formally real fields, Pythagorean fields, etc.)), 12J15. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** A field is formally real if −1 is not a sum of squares in it. Artin and Schreier showed that this is the same as having an ordering that makes the field an ordered field.

**Problem.** A field can be ordered exactly when −1 is not a sum of squares. Every formally real field also sits inside a real closed field, one with no larger formally real algebraic extension.

**How the definition helps.** The sum-of-squares condition is purely algebraic, so it can be checked inside the field and stated as a list of first-order sentences, while the definition by existence of an ordering quantifies over sets, as the page says. One direction is easy, because squares are positive in every ordering. The other direction uses Zorn's lemma to enlarge the sums of squares to a positive cone, the set of positive elements of an ordering. Artin used these fields in 1927 to solve Hilbert's seventeenth problem (our own).

**Wikipedia:** [Formally real field](https://en.wikipedia.org/wiki/Formally_real_field). It says: “It is also easy to see that a field that admits an ordering must satisfy these three properties.”

**Sources:**

- [Emil Artin and Otto Schreier, Algebraische Konstruktion reeller Körper, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927)](https://doi.org/10.1007/bf02952512)

### A monic greatest common divisor does not change when the field grows

**Remember:** Normalize the gcd to be monic and it ignores the field.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13F07. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** Over a field, a greatest common divisor of two polynomials is unique only up to a nonzero constant factor. The usual convention takes the monic one, with leading coefficient 1.

**Problem.** Let E be an extension field of F, and let P and Q have coefficients in F. Then their monic greatest common divisor over E equals their monic greatest common divisor over F.

**How the definition helps.** The theorem says that the two greatest common divisors are equal, and this only makes sense when the gcd is one fixed polynomial, which the monic convention ensures (our own reading). Then the Euclidean algorithm, done in F, gives the same answer as in E, so the gcd lies in F\[X\]; this argument is our own. Without the convention, the statement could only say that the two differ by a constant. A useful corollary, in our own reading, is that two polynomials over F have a common root in some extension exactly when their gcd over F is not constant.

**Paper or page:** [GCD of Polynomials does not depend on Base Field](https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field). It says: “Let: gcd {P, Q} = R in F\[X\] gcd {P, Q} = S in E\[X\]. Then R = S. In particular, S ∈ F\[X\].”

**Sources:**

- [ProofWiki, GCD of Polynomials does not depend on Base Field](https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field)

### Defining the discriminant by root differences makes repeated roots visible

**Remember:** A product of squared root gaps vanishes exactly when two roots meet.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Let f be a polynomial over a field with degree n ≥ 2 and leading coefficient a. List its roots r₁, …, rₙ in a field where f factors into linear terms, repeating each root according to its multiplicity. Define the discriminant as a²ⁿ⁻² times the product of (rᵢ − rⱼ)² over all pairs i &lt; j. Another definition uses the coefficients, giving b² − 4ac for a quadratic ax² + bx + c.

**Problem.** The discriminant of f is zero if and only if f has a repeated root. If f has real coefficients and all its roots are real and distinct, the discriminant is positive.

**How the definition helps.** The product definition makes a repeated root exactly a zero factor, and for real distinct roots the squared differences and the even power of a are positive. These facts are not visible directly in a coefficient formula. The work moves into proving that the product agrees with the coefficient formula. The root expression is symmetric under permutations of the roots, so the theorem on symmetric polynomials and the relations between roots and coefficients write it in terms of the coefficients.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “This expression for the discriminant is often taken as a definition. It makes clear that if the polynomial has a multiple root, then its discriminant is zero,”

**Sources:** none listed. No primary source with a working link was found.

### Eisenstein's square condition rules out two nonconstant factors

**Remember:** Modulo p both factors need zero constant terms, which forces divisibility by p².

*Rules out counterexamples.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13B25. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For an integer polynomial to be Eisenstein at a prime p, its leading coefficient must survive reduction modulo p and every lower coefficient must vanish. Its degree must be positive, and p² must not divide its constant term.

**Problem.** A polynomial that is Eisenstein at a prime is irreducible over the rational numbers.

**How the definition helps.** Modulo p, both positive-degree factors would have to be single terms, so their constant coefficients would both be divisible by p (our own). Their product would have constant coefficient divisible by p², which the definition forbids (our own). The work moves to Gauss's lemma, which turns a rational factorization into one over the integers (our own). Without the square condition, x² + 4x + 4 passes the test at 2 but equals (x + 2)² (our own).

**Wikipedia:** [Eisenstein's criterion](https://en.wikipedia.org/wiki/Eisenstein%27s_criterion). It says: “Then Q cannot be written as a product of two non-constant polynomials in D\[x\].”

**Paper or page:** [Schönemann-Eisenstein Theorem](https://proofwiki.org/wiki/Schönemann-Eisenstein_Theorem). It says: “Then f is irreducible in ℚ\[x\].”

**Sources:**

- [G. Eisenstein, Über die Irreductibilität und einige andere Eigenschaften der Gleichung, von welcher die Theilung der ganzen Lemniscate abhängt (1850), pp. 160–179.](https://doi.org/10.1515/crll.1850.39.160)

### Keeping the polynomial degree makes irreducibility lift from a prime modulus

**Remember:** If the leading term survives, every factor keeps its degree.

*Rules out counterexamples.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13B25. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Reduction modulo p sends each integer coefficient to its class in ℤ/pℤ. Say this reduction preserves degree if p does not divide the leading coefficient.

**Problem.** If an integer polynomial reduces to an irreducible polynomial of the same degree modulo a prime p, it is irreducible over ℚ.

**How the definition helps.** Keeping the degree prevents a nonconstant factor from reducing to a constant (our own). Gauss's lemma brings any rational factorization back to integer factors, so their reductions would contradict irreducibility (our own). Without the degree rule, (2x + 1)(x + 1) reduces to x + 1 modulo 2 (our own).

**Wikipedia:** [Irreducible polynomial](https://en.wikipedia.org/wiki/Irreducible_polynomial). It says: “does not divide the leading coefficient of f”

**Sources:** none listed. No primary source with a working link was found.

### Primitive roots make the degree of a cyclotomic polynomial visible

**Remember:** Count one linear factor for each primitive root.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Define the nth cyclotomic polynomial as the product of x − ζ over all complex roots ζ of order exactly n. One can instead take the minimal polynomial of a single such root over ℚ.

**Problem.** The nth cyclotomic polynomial has degree φ(n), the number of integers from 1 to n that are coprime to n.

**How the definition helps.** The product definition gives one factor for each power of a fixed primitive root whose exponent is coprime to n (our own). The work moves to proving the product irreducible, which identifies it with the minimal polynomial of one primitive root (our own).

**Wikipedia:** [Cyclotomic polynomial](https://en.wikipedia.org/wiki/Cyclotomic_polynomial). It says: “The degree of Φₙ, or in other words the number of nth primitive roots of unity, is φ(n)”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial definition makes cyclotomic polynomials irreducible

**Remember:** Use one primitive root to get irreducibility from its minimal polynomial.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Define the nth cyclotomic polynomial as the monic minimal polynomial over ℚ of a complex root of unity of order exactly n. The other definition multiplies x − ζ over all roots ζ of order n.

**Problem.** The nth cyclotomic polynomial is irreducible over ℚ.

**How the definition helps.** A minimal polynomial is irreducible because a factorization would give a lower-degree polynomial vanishing at the chosen root (our own). The work shifts to showing that all primitive roots are conjugate, so the two definitions agree (our own).

**Wikipedia:** [Cyclotomic polynomial](https://en.wikipedia.org/wiki/Cyclotomic_polynomial). It says: “irreducible over the field of the rational numbers.”

**Sources:** none listed. No primary source with a working link was found.

### The recursive definition gives integer coefficients for cyclotomic polynomials

**Remember:** Division by a monic polynomial needs no new denominators.

*Makes the theorem clean to state or prove.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Set Φ₁(x) = x − 1. For n &gt; 1, multiply the previously defined cyclotomic polynomials indexed by the positive proper divisors of n. Define Φₙ(x) as xⁿ − 1 divided by this product.

**Problem.** Every cyclotomic polynomial has integer coefficients.

**How the definition helps.** Each earlier cyclotomic polynomial is monic, so polynomial long division introduces no denominators (our own). Grouping the complex roots of xⁿ − 1 by their orders proves that the division is exact. Induction starting with x − 1 now gives integer coefficients.

**Paper or page:** [Cyclotomic Polynomial has Integer Coefficients](https://proofwiki.org/wiki/Cyclotomic_Polynomial_has_Integer_Coefficients). It says: “Then the nth cyclotomic polynomial Φₙ(x) has integer coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### Finite fields as Frobenius fixed fields make intersections use greatest common divisors

**Remember:** A point fixed by two powers is fixed by their greatest common divisor.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Fix an algebraic closure K of the field with p elements. The Frobenius map σ raises each element to the pth power, and it is an automorphism of K. Define the subfield of size pⁿ as the set of elements that σⁿ fixes. The usual definition takes the subfield with exactly pⁿ elements.

**Problem.** The intersection of the finite subfields of degrees m and n has degree gcd(m, n) over the prime field.

**How the definition helps.** With the fixed-field definition, an intersection of subfields is the fixed set of a group of powers of σ (our own). The elements fixed by σᵐ and σⁿ are those fixed by the subgroup they generate (our own). By Bézout’s identity, this subgroup is generated by σ to the power gcd(m, n) (our own). The work moves to proving that σ is bijective on K and that σⁿ has exactly pⁿ fixed points (our own).

**nLab:** [finite field](https://ncatlab.org/nlab/show/finite+field). It says: “may be defined to be the fixed field of the automorphism σⁿ: K → K.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed points of Frobenius give fields of every prime power size

**Remember:** Fixed points give a field before you count them.

*Makes the theorem clean to state or prove.* MSC 12E20 (Finite fields (field-theoretic aspects)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Fix a prime p and a positive integer n, and put q = pⁿ. Inside an algebraic closure of the field with p elements, take the elements unchanged by raising them to the power q.

**Problem.** For every prime p and positive integer n, a field of size pⁿ exists and is unique up to isomorphism.

**How the definition helps.** Raising to the power q preserves field operations, so its fixed elements form a field (our own). They solve xᑫ − x = 0, whose derivative is −1, giving exactly q distinct roots. In any field of size q, each nonzero element has order dividing q − 1. Every such field is therefore a splitting field of the same polynomial over 𝔽ₚ, which proves uniqueness up to isomorphism.

**Paper or page:** [Theorem 4.2. (Complete classification of finite fields)](https://venhance.github.io/napkin/Napkin.pdf). It says: “A field $F$ is a finite field with $p<sup>n$</sup> elements if and only if it is a splitting field of $x<sup>p<sup>n</sup>-x$</sup> over $\\FF<sub>p</sub>$.”

**Sources:** none listed. No primary source with a working link was found.

### Surjective Frobenius makes every finite field perfect

**Remember:** On a finite field, injective Frobenius is already onto.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In prime characteristic p, a field is perfect if every element has a pth root in the field. Equivalently, every irreducible polynomial has distinct roots in a splitting field.

**Problem.** Every finite field is perfect.

**How the definition helps.** On a finite field the map taking pth powers is injective, hence onto (our own). The work lies in the polynomial criterion. An irreducible polynomial with repeated roots would have zero derivative and only exponents divisible by p. Taking pth roots of its coefficients would make it a pth power, contradicting irreducibility.

**Paper or page:** [Theorem 5.6. (Finite fields are perfect)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Suppose F is a field with finitely many elements. Then it is perfect.”

**Sources:** none listed. No primary source with a working link was found.

### A commutative unital ring with exactly two ideals is a field

**Remember:** A field has two ideals, and the zero ring has only one.

*Makes the theorem clean to state or prove.* MSC 12E99 (General field theory), 13A15. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A field is a commutative ring with 1 ≠ 0 in which every nonzero element has an inverse. An ideal is an additive subgroup that is closed under multiplication by every ring element.

**Problem.** A commutative ring with unity is a field exactly when its only ideals are {0} and the whole ring, and these two are different.

**How the definition helps.** Because a field must have 1 ≠ 0, being a field matches having exactly two ideals. Our own sketch: if a ≠ 0, then Ra is not {0}, so Ra = R and 1 = ra. Our own remark: the zero ring has only one ideal, so the rule 1 ≠ 0 makes the count exactly two. ProofWiki shows that commutativity is needed; the ring of 2 × 2 real matrices has only two two-sided ideals but has zero divisors (our own example).

**Paper or page:** [Commutative and Unitary Ring with 2 Ideals is Field](https://proofwiki.org/wiki/Commutative_and_Unitary_Ring_with_2_Ideals_is_Field), [Field has 2 Ideals](https://proofwiki.org/wiki/Field_has_2_Ideals), [Non-Commutative Ring with Unity and 2 Ideals not necessarily Division Ring](https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring). It says: “That is, such that (R, +, ∘) has no non-null proper ideals. Then (R, +, ∘) is a field.”

**Sources:**

- [ProofWiki, Commutative and Unitary Ring with 2 Ideals is Field](https://proofwiki.org/wiki/Commutative_and_Unitary_Ring_with_2_Ideals_is_Field)
- [ProofWiki, Field has 2 Ideals](https://proofwiki.org/wiki/Field_has_2_Ideals)
- [ProofWiki, Non-Commutative Ring with Unity and 2 Ideals not necessarily Division Ring](https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring)

### Sending 1 to 1 makes every field homomorphism injective

**Remember:** A field map that keeps 1 cannot collapse anything.

*Rules out counterexamples.* MSC 12E99 (General field theory), 13B10, 13A35. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A field homomorphism is a map between fields that keeps sums and products. Many authors also require that it sends 1 to 1. In a field, 1 is not equal to 0.

**Problem.** Every homomorphism between fields that sends 1 to 1 is injective. So a surjective one is an isomorphism, and the Frobenius map x ↦ xᵖ is injective in characteristic p.

**How the definition helps.** Asking that 1 goes to 1 rules out the zero map, which is the only field map that is not injective. The reason is that the kernel of a ring map is an ideal, and a field has only two ideals. The ProofWiki page keeps the zero map as a second case; in our own reading, the condition 1 ↦ 1 removes it. The theorem then has no exceptions, and the surjective case and the Frobenius case follow at once.

**Paper or page:** [Field Homomorphism is either Trivial or Injection](https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection), [Surjective Field Homomorphism is Field Isomorphism](https://proofwiki.org/wiki/Surjective_Field_Homomorphism_is_Field_Isomorphism), [Frobenius Endomorphism on Field is Injective](https://proofwiki.org/wiki/Frobenius_Endomorphism_on_Field_is_Injective). It says: “Then φ is either an injection or the trivial homomorphism.”

**Sources:**

- [ProofWiki, Field Homomorphism is either Trivial or Injection](https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection)
- [ProofWiki, Surjective Field Homomorphism is Field Isomorphism](https://proofwiki.org/wiki/Surjective_Field_Homomorphism_is_Field_Isomorphism)
- [ProofWiki, Frobenius Endomorphism on Field is Injective](https://proofwiki.org/wiki/Frobenius_Endomorphism_on_Field_is_Injective)

### The group exponent makes finite multiplicative subgroups cyclic

**Remember:** Every element solves one equation, and its degree bounds the group.

*Makes the theorem clean to state or prove.* MSC 12E99 (General field theory), 12E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The exponent e of a finite group is the least positive integer such that the eth power of every element is 1. It is the least common multiple of the element orders.

**Problem.** Every finite subgroup of the multiplicative group of a field is cyclic.

**How the definition helps.** The exponent e puts the whole subgroup among the roots of xᵉ − 1, so it has at most e elements. Every finite abelian group contains an element of order equal to its exponent. That element already gives e distinct powers and hence generates the subgroup.

**nLab:** [root of unity](https://ncatlab.org/nlab/show/root+of+unity). It says: “Let G be a finite subgroup of the multiplicative group k∗ of a field k. Then G is cyclic.”

**Sources:** none listed. No primary source with a working link was found.

### A normal closure is the field generated by all conjugates

**Remember:** Collect every image before asking for normality.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Fix an algebraic closure containing the finite extension E/F. Its normal closure over F is the field generated by all images of E under embeddings fixing F. This replaces a search among all normal fields containing E.

**Problem.** The normal closure of a finite extension is the unique smallest normal extension of the base containing it inside the chosen algebraic closure.

**How the definition helps.** Every normal field containing E contains each image of E under an embedding fixing F (our own). The images together contain every root of the minimal polynomials of a finite set of generators of E. Here one uses the theorem extending embeddings to the algebraic closure. Those roots generate the proposed closure, so it is a splitting field and hence normal.

**Paper or page:** [Lemma 9.16.3.](https://stacks.math.columbia.edu/tag/09DT). It says: “There exists a unique smallest finite extension K/E such that K is normal over F.”

**Sources:** none listed. No primary source with a working link was found.

### Adjoining a root by a quotient makes its embeddings easy

**Remember:** To map the field, choose where its new root goes.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let a be algebraic over F with minimal polynomial m. Model the field F(a) as polynomials over F modulo multiples of m, with x representing a.

**Problem.** For any field L containing F, sending a to its image pairs the embeddings of F(a) fixing F with the roots of m in L.

**How the definition helps.** Evaluation at a root of m gives the same value on polynomials differing by a multiple of m (our own). It therefore gives a field embedding. Conversely, an embedding must send a to a root, and this choice determines every polynomial value. The work lies in identifying the field generated by a with the quotient.

**Paper or page:** [Universal Property for Simple Field Extensions](https://proofwiki.org/wiki/Universal_Property_for_Simple_Field_Extensions). It says: “Then there exists a unique field homomorphism ψ : K(α) → L extending φ that sends α to β.”

**Sources:** none listed. No primary source with a working link was found.

### Algebraicity makes algebraic closures unique up to isomorphism

**Remember:** An algebraic closure leaves no room for independent variables.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic closure of F is an algebraically closed field that is algebraic over F. Algebraically closed means that every nonconstant polynomial over the field has a root there.

**Problem.** Any two algebraic closures of F are isomorphic by a map that fixes F.

**How the definition helps.** Algebraicity makes an embedding between the closures onto (our own). Its image is algebraically closed, and the target is algebraic over that image (our own). Without algebraicity, ℂ and an algebraic closure of ℂ(t) are not isomorphic over ℂ (our own). The work lies in proving the embedding theorem for algebraic extensions (our own).

**Paper or page:** [Lemma 9.10.6.](https://stacks.math.columbia.edu/tag/09GV). It says: “Any two algebraic closures of a field are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Constructible numbers sit at the top of towers of degree-2 steps

**Remember:** A compass solves only quadratic equations, so each step doubles the degree.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M04. arXiv math.AC, math.MG. Level 2: later undergraduate.

**Definition.** A real number is constructible if you can reach it with straightedge and compass, starting from 0 and 1. In algebra, this means it lies at the top of a tower of fields that starts at ℚ. Each step in the tower is a field extension of degree 2.

**Problem.** Doubling the cube and trisecting a general angle are impossible with straightedge and compass (Wantzel, 1837).

**How the definition helps.** The definition turns a question about geometry into a question about degrees of field extensions. The tower gives \[ℚ(γ):ℚ\] = 2ʳ, so the degree of a constructible number is a power of 2. The number ∛2 has degree 3, so the cube cannot be doubled. Trisecting 60° needs cos 20°, a root of an irreducible cubic, so it has degree 3 too.

**Wikipedia:** [Constructible number](https://en.wikipedia.org/wiki/Constructible_number). It says: “It follows from this decomposition that the degree of the field extension \[ℚ(γ):ℚ\] is 2ʳ, where r counts the number of quadratic extension steps.”

**Sources:**

- [P. L. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, Journal de Mathématiques Pures et Appliquées 2 (1837), 366–372](http://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Defining field trace as a matrix trace makes it linear

**Remember:** Add the multiplication maps, then add their traces.

*True by definition.* MSC 12F05 (Algebraic field extensions), 11R04. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite field extension L of K, multiplication by an element a is a K-linear map of L. Define the trace of a as the matrix trace of this map. Another definition adds the roots of the minimal polynomial of a, each counted \[L : K(a)\] times.

**Problem.** The field trace is linear over the base field.

**How the definition helps.** With the matrix-trace definition, the theorem is the linearity of matrix trace (our own). Multiplication by xa + yb is x times multiplication by a plus y times multiplication by b (our own). With the root-sum definition, the roots for a + b are not simply sums of roots for a and b (our own). The Napkin proves that the two definitions agree for number fields, and the work moves there.

**Paper or page:** [Theorem 2.8. (Morally correct definition of norm and trace)](https://venhance.github.io/napkin/Napkin.pdf). It says: “the trace of α equals the trace”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal extensions as splitting fields makes composita normal

**Remember:** Combine the polynomial families to combine their splitting fields.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Define a normal extension of K as a splitting field of a family of polynomials over K. That is the field generated over K by all roots of those polynomials. Another definition asks that every irreducible polynomial over K with one root in the extension splits there.

**Problem.** The compositum of normal algebraic extensions in a common algebraic closure is normal. The compositum is the smallest field containing them all.

**How the definition helps.** With the splitting-field definition, the compositum is generated by all roots of the combined families, so it is a splitting field (our own). The work moves to proving that splitting fields pass the other test (our own).

**nLab:** [normal field extension](https://ncatlab.org/nlab/show/normal+field+extension). It says: “A field extension K ⊂ L is said to be normal if L is the splitting field of a family of polynomials in K\[x\].”

**Sources:** none listed. No primary source with a working link was found.

### Finite coefficient fields make algebraic extensions transitive

**Remember:** Collect the coefficients first, then adjoin the root.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An element is algebraic over a field if it satisfies a nonzero polynomial over that field. Equivalently, adjoining it gives an extension of finite degree. An extension is algebraic if every element is algebraic.

**Problem.** An algebraic extension of an algebraic extension is algebraic over the original base field.

**How the definition helps.** A polynomial for the element needs finitely many coefficients, so put them in one finite extension of the base field (our own). Adjoin the element to that finite extension and apply the tower law (our own). The work is the equivalence between the polynomial test and finite degree (our own).

**Paper or page:** [Transitivity of Algebraic Extensions](https://proofwiki.org/wiki/Transitivity_of_Algebraic_Extensions). It says: “Let E / F / K be a tower of field extensions. Let E be algebraic over F. Let F be algebraic over K. Then E is algebraic over K.”

**Sources:** none listed. No primary source with a working link was found.

### Finite degree forces every element to satisfy a polynomial

**Remember:** In finite dimension, powers must become dependent.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A field extension has finite degree if it has a finite basis over its base field. An element is algebraic if some nonzero polynomial over the base field vanishes at it.

**Problem.** Every finite-degree field extension is algebraic, meaning that all its elements are algebraic over the base field.

**How the definition helps.** In dimension d, the first d + 1 powers of any element, starting with 1, must be linearly dependent (our own). Their dependence gives a polynomial equation with coefficients in the base field.

**Paper or page:** [Lemma 9.8.5.](https://stacks.math.columbia.edu/tag/09GG). It says: “A finite extension is algebraic.”

**Sources:** none listed. No primary source with a working link was found.

### Finite extensions keep algebraic elements closed under field operations

**Remember:** Put two algebraic elements in one finite field extension.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call an element of E algebraic over F if it lies in a finite extension of F inside E. The usual definition instead asks for a nonzero polynomial over F that vanishes there.

**Problem.** In any field extension E/F, the elements algebraic over F form a field. Any finite set of these elements generates a finite extension of F.

**How the definition helps.** Finite extensions give a common field in which to perform the operations (our own). Adjoin the elements successively. Each still satisfies its original polynomial, so each step has finite degree and the tower law gives finite total degree. Every element of the resulting field is algebraic by linear dependence of its powers.

**Paper or page:** [Lemma 9.8.7.](https://stacks.math.columbia.edu/tag/09GI). It says: “Then the elements of E algebraic over k form a subextension of E/k.”

**Sources:** none listed. No primary source with a working link was found.

### Matrices of multiplication make trace transitive in towers

**Remember:** Taking the trace of diagonal blocks is taking trace in two stages.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a finite field extension E/F and an element a of E, multiplication by a is an F-linear map on E. Its matrix trace, the sum of its diagonal entries, is the field trace of a.

**Problem.** In a tower of finite field extensions, the trace from the largest field to the smallest equals the composition of the two intermediate traces.

**How the definition helps.** In a basis built from the two tower bases, each upper matrix entry becomes its multiplication matrix over the bottom field (our own). Only diagonal blocks contribute to the full trace. Their traces sum to the lower field trace of the sum of the upper diagonal entries, by linearity.

**Paper or page:** [Lemma 9.20.5.](https://stacks.math.columbia.edu/tag/0BIJ). It says: “Let M/L/K be a tower of finite extensions of fields. Then Trace₍M/K₎ = Trace₍L/K₎ ∘ Trace₍M/L₎”

**Sources:** none listed. No primary source with a working link was found.

### Norms as products over embeddings compose down towers of separable extensions

**Remember:** Group the conjugates by their restriction to the middle field.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Let L be a finite separable extension of K, and fix an algebraic closure of K. Define the norm of an element a as the product of σ(a) over all field maps σ from L to the closure that fix K. Another definition uses the determinant of multiplication by a.

**Problem.** Take finite separable extensions K ⊂ L ⊂ M. The norm from M to K is the norm from M to L followed by the norm from L to K.

**How the definition helps.** With the embedding definition, transitivity is a regrouping of one product (our own). Sort the field maps from M by their restrictions τ to L; the maps above one τ multiply to τ applied to the norm from M to L (our own). Multiplying over all τ gives the norm from L to K of that norm (our own). The work moves to counting the extensions of each τ, and to agreement with the determinant definition (our own).

**Paper or page:** [Lemma 9.20.5.](https://stacks.math.columbia.edu/tag/0BIJ). It says: “Let M/L/K be a tower of finite extensions of fields.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial remainders give the degree of a simple algebraic extension

**Remember:** A root of degree d needs just d powers for a basis.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a monic irreducible polynomial m over F, form the field F\[x\]/(m) of polynomials modulo m. Two polynomials represent the same element when m divides their difference. The class of x is a root of m.

**Problem.** If m has degree d, the field generated by a root has degree d over F. The first d powers of the root, starting with 1, form a basis.

**How the definition helps.** Polynomial division gives each class exactly one remainder of degree below d, including the zero remainder (our own). Its coefficients are the coordinates in the power basis. Evaluation at the root identifies this quotient field with the field generated by the root.

**Paper or page:** [Lemma 9.9.2.](https://stacks.math.columbia.edu/tag/09GN). It says: “The degree of the minimal polynomial is \[k(α) : k\].”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic towers rule out doubling the cube

**Remember:** A cubic degree cannot divide a power of two.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A real number is constructible from a unit segment if it lies in a field reached from ℚ by successive extensions of degree two. The geometric definition allows straightedge and compass operations.

**Problem.** No straightedge and compass construction can double the volume of a given cube by constructing its new edge.

**How the definition helps.** The tower law makes the degree of every constructible number divide a power of two (our own). Doubling a unit cube would require an edge satisfying x³ − 2 = 0. This cubic has no rational root, so it is irreducible and the edge has degree three. The geometric input identifies constructible lengths with real lengths in quadratic towers.

**Paper or page:** [Doubling the Cube by Compass and Straightedge Construction is Impossible](https://proofwiki.org/wiki/Doubling_the_Cube_by_Compass_and_Straightedge_Construction_is_Impossible). It says: “There is no compass and straightedge construction to allow a cube to be constructed whose volume is double that of a given cube.”

**Sources:**

- [P. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, 1837](https://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Quadratic towers rule out squaring the circle

**Remember:** A square with area π would need a transcendental side.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A length is constructible from a unit segment when it belongs to a tower of degree-two extensions of ℚ. The geometric definition gives only the allowed lines and circles.

**Problem.** A straightedge and compass cannot construct a square with the area of a given circle.

**How the definition helps.** Quadratic towers contain only algebraic numbers, so a constructible side would have an algebraic square (our own). The unit circle has area π, which is not algebraic (our own). The work is identifying constructible lengths with quadratic towers and proving Lindemann’s theorem that π is transcendental (our own).

**Paper or page:** [Squaring the Circle by Compass and Straightedge Construction is Impossible](https://proofwiki.org/wiki/Squaring_the_Circle_by_Compass_and_Straightedge_Construction_is_Impossible). It says: “There is no compass and straightedge construction to allow a square to be constructed whose area is equal to that of a given circle.”

**Sources:**

- [F. Lindemann, Ueber die Zahl π, 1882](https://doi.org/10.1007/BF01446522)

### Quadratic towers rule out trisecting a 60 degree angle

**Remember:** A twenty degree angle needs a length of degree three.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A length is constructible from a unit segment when it lies in a tower of quadratic field extensions over ℚ. Each step in the tower has degree two.

**Problem.** A straightedge and compass cannot trisect every angle. In particular, they cannot trisect a 60° angle.

**How the definition helps.** The quadratic tower condition forces a constructible length to have degree a power of two (our own). A 60° angle is constructible, so trisecting it would make twice the cosine of 20° constructible. The triple-angle formula makes this number a root of x³ − 3x − 1. Neither 1 nor −1 is a root, so this cubic is irreducible and the number has degree three.

**Paper or page:** [Trisecting the Angle by Compass and Straightedge Construction is Impossible](https://proofwiki.org/wiki/Trisecting_the_Angle_by_Compass_and_Straightedge_Construction_is_Impossible). It says: “There is no compass and straightedge construction for the trisection of the general angle.”

**Sources:**

- [P. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, 1837](https://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Requiring the minimal polynomial to be monic makes it unique

**Remember:** Fix the leading coefficient at 1 and only one polynomial is left.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions), 12E05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The minimal polynomial of α over a field K is a monic polynomial with coefficients in K that has α as a root. It has the smallest degree among such polynomials. Monic means that the leading coefficient is 1.

**Problem.** For each element α that is algebraic over K, there is exactly one minimal polynomial.

**How the definition helps.** Without the word 'monic', every nonzero constant multiple of a smallest polynomial would also be smallest. The monic condition picks one polynomial from each such family. In our own proof, two monic minimal polynomials differ by a polynomial of lower degree that also vanishes at α, so the difference is 0.

**Paper or page:** [Minimal Polynomial is Unique](https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique). It says: “Let α ∈ L be algebraic over K. Then the minimal polynomial of α over K is unique.”

**Sources:**

- [ProofWiki, Minimal Polynomial is Unique](https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique)

### Root generators make splitting fields unique

**Remember:** A splitting field contains all the roots and no extra generators.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A splitting field of a nonconstant polynomial is an extension where the polynomial factors into linear factors and its roots generate the field.

**Problem.** Any two splitting fields of a nonconstant polynomial are isomorphic over its coefficient field.

**How the definition helps.** The root generators make an embedding between splitting fields onto because it matches the full root sets (our own). The work lies in constructing an embedding by choosing roots one at a time (our own).

**Paper or page:** [Lemma 9.16.1.](https://stacks.math.columbia.edu/tag/09HU). It says: “Moreover, the field extension E/F is normal and unique up to (nonunique) isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Splitting over the base keeps the upper extension normal

**Remember:** The same roots generate over any larger base inside L.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite extension L/F is normal if L is the splitting field of a polynomial over F. This means that the roots all lie in L and generate it over F.

**Problem.** If L/F is a finite normal extension and E is an intermediate field, then L/E is normal.

**How the definition helps.** The same polynomial splits over L and its roots still generate L over the larger base E (our own). The work moves to proving that the splitting field definition agrees with the test using irreducible polynomials (our own).

**Paper or page:** [Lemma 9.15.2.](https://stacks.math.columbia.edu/tag/09HN). It says: “If K is normal over F, then K is normal over E.”

**Sources:** none listed. No primary source with a working link was found.

### The field norm as a determinant multiplies because multiplication maps compose

**Remember:** Multiplication maps compose, so their determinants multiply.

*True by definition.* MSC 12F05 (Algebraic field extensions), 11R04. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite field extension L of K, multiplication by an element a is a K-linear map of L. Define the norm of a as the determinant of this map. Another definition multiplies the roots of the minimal polynomial of a, each counted \[L : K(a)\] times.

**Problem.** The norm of a product equals the product of the norms.

**How the definition helps.** With the determinant definition, the theorem is the product rule for determinants (our own). Multiplying by b and then by a is the same as multiplying by ab (our own). With the root-product definition, the roots for ab are not simply products of roots for a and b (our own). The work moves to proving that the two definitions agree (our own).

**Wikipedia:** [Field norm](https://en.wikipedia.org/wiki/Field_norm). It says: “is defined as the determinant of this linear transformation.”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial generates all polynomial relations

**Remember:** Every equation for a is a multiple of its minimal polynomial.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define the minimal polynomial of an algebraic element a as the monic generator of the ideal of polynomials that vanish at a. This means that all such polynomials are its multiples. Monic means the leading coefficient is 1.

**Problem.** Every polynomial over the base field that vanishes at a is divisible by the minimal polynomial of a.

**How the definition helps.** A generator divides every polynomial in its ideal (our own). For the usual least-degree definition, divide a vanishing polynomial by the minimal polynomial. The remainder also vanishes at a, so minimality forces it to be zero.

**Paper or page:** [Polynomial with Algebraic Number as Root is Multiple of Minimal Polynomial](https://proofwiki.org/wiki/Polynomial_with_Algebraic_Number_as_Root_is_Multiple_of_Minimal_Polynomial). It says: “Then P(x) is a multiple of the minimal polynomial m(x) in z over F.”

**Sources:** none listed. No primary source with a working link was found.

### The polynomial root definition keeps algebraically closed fields infinite

**Remember:** A polynomial can avoid any finite list of field elements.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A field is algebraically closed if each nonconstant polynomial over it has a root in it. The equivalent extension definition says that the field has no proper algebraic extension.

**Problem.** Every algebraically closed field is infinite.

**How the definition helps.** The root requirement rules out any finite field through a single polynomial (our own). In a finite field, multiply x − a over every field element a, then add 1. The resulting nonconstant polynomial takes the value 1 everywhere. Adjoining roots proves the equivalence with the definition using algebraic extensions.

**Paper or page:** [Algebraically Closed Field is Infinite](https://proofwiki.org/wiki/Algebraically_Closed_Field_is_Infinite). It says: “Then F is infinite.”

**Sources:** none listed. No primary source with a working link was found.

### The root test makes intersections of normal extensions normal

**Remember:** If a polynomial splits in both fields, its roots lie in both.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension L of K is normal if each irreducible polynomial over K with a root in L splits into linear factors in L. Another definition says L is the splitting field of a family of polynomials over K. That means their roots generate L over K.

**Problem.** Let E and F be normal extensions of K in a common field. Then E ∩ F is normal over K.

**How the definition helps.** The root test gives the claim without finding generators for the intersection. An irreducible polynomial with a root in E ∩ F splits in E and in F, so in a common algebraic closure all its roots lie in E ∩ F (our own proof). The splitting-field definition would ask which family of polynomials generates the intersection. The work moves to the theorem that the two definitions agree.

**Wikipedia:** [Normal extension](https://en.wikipedia.org/wiki/Normal_extension). It says: “If E and F are normal extensions of K contained in L, then the compositum EF and E ∩ F are also normal extensions of K.”

**Sources:** none listed. No primary source with a working link was found.

### Tower degrees multiply because bases multiply

**Remember:** Multiply basis elements to multiply degrees.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The degree of a field extension E/F is the dimension of E as a vector space over F.

**Problem.** For finite field extensions L/E and E/F, the degree of L/F is the product of their degrees.

**How the definition helps.** Products of basis elements give coordinates over the bottom field (our own). Expand each element in the upper basis, then expand its coefficients in the lower basis. Uniqueness at both steps makes the products a basis.

**Paper or page:** [Lemma 9.7.7.](https://stacks.math.columbia.edu/tag/09G9). It says: “Suppose given a tower of fields F/E/k. Then \[F:k\] = \[F:E\]\[E:k\]”

**Sources:** none listed. No primary source with a working link was found.

### A primitive root turns cyclotomic automorphisms into multiplication modulo n

**Remember:** Compose two maps on ζ by multiplying their exponents.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 11R18. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Define the nth cyclotomic field as ℚ(ζ), where ζ is a complex root of unity of exact order n. Thus this one element generates the field and its powers give all nth roots of unity.

**Problem.** The Galois group of the nth cyclotomic field is isomorphic to the multiplicative group of invertible residues modulo n.

**How the definition helps.** An automorphism is determined by the image of ζ, which must be a power of ζ of order n (our own). Composition multiplies the exponents modulo n (our own). The work is proving cyclotomic irreducibility, which ensures that every primitive power gives an automorphism (our own).

**Wikipedia:** [Cyclotomic field](https://en.wikipedia.org/wiki/Cyclotomic_field). It says: “the multiplicative group (ℤ/nℤ)ˣ, which consists of the invertible residues modulo n”

**Sources:** none listed. No primary source with a working link was found.

### Artin–Schreier polynomials replace roots in degree equal to the characteristic

**Remember:** In characteristic p, use xᵖ − x − a instead of xᵖ − a.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 12E10. arXiv math.NT. Level 2: later undergraduate.

**Definition.** Let K have characteristic p. An Artin–Schreier polynomial is xᵖ − x − a with a in K. If a is not of the form bᵖ − b, it is irreducible and its splitting field is cyclic of degree p.

**Problem.** Every Galois extension of degree p of a field of characteristic p is the splitting field of an Artin–Schreier polynomial.

**How the definition helps.** The additive map x ↦ xᵖ − x has kernel 𝔽ₚ, so it plays the part that the n-th power map plays in Kummer theory. Kummer theory fails in degree p because xᵖ − 1 = (x − 1)ᵖ, so there are no nontrivial p-th roots of unity, and xᵖ − a gives only inseparable extensions (our own). The proof uses the additive form of Hilbert's Theorem 90 in place of the multiplicative one, as the page says.

**Wikipedia:** [Artin–Schreier theory](https://en.wikipedia.org/wiki/Artin%E2%80%93Schreier_theory), [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “Artin–Schreier theory is a branch of Galois theory, specifically a positive characteristic analogue of Kummer theory, for Galois extensions of degree equal to the characteristic p.”

**Sources:**

- [Emil Artin and Otto Schreier, Eine Kennzeichnung der reell abgeschlossenen Körper, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927)](https://doi.org/10.1007/BF02952522)
- [Ernst Witt, Zyklische Körper und Algebren der Charakteristik p vom Grad pⁿ, Journal für die reine und angewandte Mathematik 176 (1937)](https://doi.org/10.1515/crll.1937.176.126)

### Asking for separability makes the Galois correspondence work

**Remember:** A separable polynomial never has a repeated root.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic extension E/F is separable if the minimal polynomial of every element of E has distinct roots. An extension is normal if every irreducible polynomial over F that has one root in E splits into linear factors in E. A Galois extension is one that is both normal and separable.

**Problem.** For a finite Galois extension E/F, the intermediate fields correspond one to one with the subgroups of the Galois group, and \[E : F\] equals the order of the group.

**How the definition helps.** Separability excludes the purely inseparable cases, which have too few automorphisms for the correspondence. In characteristic 0 every extension is separable, so the condition does not show. Our own example: E = 𝔽ₚ(x) over F = 𝔽ₚ(xᵖ) is normal of degree p, since x is the only root of Xᵖ − xᵖ = (X − x)ᵖ. Its automorphism group is trivial, so its two intermediate fields E and F cannot match the one subgroup.

**Wikipedia:** [Separable extension](https://en.wikipedia.org/wiki/Separable_extension). It says: “the fundamental theorem of Galois theory is a theorem about normal extensions, which remains true in non-zero characteristic only if the extensions are also assumed to be separable.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic zero prevents inseparable irreducible polynomials

**Remember:** In characteristic zero, a nonconstant polynomial cannot have zero derivative.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Characteristic zero means no positive sum of copies of 1 is zero. An irreducible polynomial is separable when it has no repeated roots in a field where it splits.

**Problem.** Over a field of characteristic zero, every irreducible polynomial is separable. Thus every algebraic extension of such a field is separable.

**How the definition helps.** Characteristic zero keeps the leading term of every nonconstant polynomial’s derivative nonzero (our own). An irreducible polynomial then has no factor in common with its lower-degree derivative, so it has distinct roots. Over the rational function field 𝔽₂(t), the polynomial x² − t is irreducible because t is not a square. Its derivative vanishes, and its two roots coincide.

**Paper or page:** [Lemma 9.12.1.](https://stacks.math.columbia.edu/tag/09H0). It says: “The second case can only happen if F has characteristic p &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugating subgroups makes normal intermediate fields easy to recognize

**Remember:** Moving a subgroup moves its fixed field in the same way.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a subgroup H of automorphisms, take its fixed field to be the elements that every map in H fixes. A subgroup is normal when conjugating it by any group element leaves it unchanged.

**Problem.** For a finite Galois extension L/K, an intermediate field is Galois over K exactly when its corresponding subgroup is normal.

**How the definition helps.** Conjugation by an automorphism takes the fixed field of H to the fixed field of the conjugate subgroup (our own). The Galois correspondence is the work that lets equality of those fields detect equality of the subgroups (our own). Normality of the intermediate field can then be read from whether each automorphism preserves it (our own).

**Paper or page:** [Theorem 9.21.7.](https://stacks.math.columbia.edu/tag/09DW). It says: “The normal subgroups H of G correspond exactly to those subextensions M with M/K Galois.”

**Sources:** none listed. No primary source with a working link was found.

### Counting embeddings as separable degree makes separable degrees multiply in towers

**Remember:** Count embeddings by the intermediate field, then count the extensions of each.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 12F15. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Let K be a finite extension of F, and fix an algebraic closure of F. Define the separable degree of K over F as the number of field maps from K to that closure that fix F. Another definition takes the degree over F of the largest subfield of K that is separable over F. Separable means each element has a minimal polynomial with distinct roots.

**Problem.** Take finite extensions F ⊂ M ⊂ K. The separable degree of K over F is the product of those of K over M and M over F.

**How the definition helps.** With the counting definition, the proof is a count of field maps (our own). Sort the field maps from K by their restrictions to M (our own). Each field map from M extends to K in exactly as many ways as the separable degree of K over M (our own). The work moves to this extension count and to Stacks Lemma 9.14.8, which proves that the two definitions agree.

**Paper or page:** [Lemma 9.14.8.](https://stacks.math.columbia.edu/tag/09HJ). It says: “Then \[K : F\]ₛ = \|Morꜰ(K, F̄)\|.”

**Sources:** none listed. No primary source with a working link was found.

### Counting embeddings makes separability pass through finite towers

**Remember:** When both embedding counts are full, their product is full.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite extension E/F is separable if the number of embeddings into an algebraic closure fixing F equals its degree. The elementwise definition instead asks that each minimal polynomial have distinct roots.

**Problem.** In a finite tower L/E/F, the extension L/F is separable exactly when L/E and E/F are separable.

**How the definition helps.** The embedding counts and the field degrees both multiply in a tower (our own). Each count is positive and bounded by its degree, so equality for the products means equality at both steps. The work lies in proving multiplication of embedding counts and their equivalence with the distinct-root test.

**Paper or page:** [Lemma 9.12.12.](https://stacks.math.columbia.edu/tag/09HB). It says: “Let E/k and F/E be separable algebraic extensions of fields. Then F/k is a separable extension of fields.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclotomic fields make regular polygons a power of two test

**Remember:** For a regular polygon, count the degree of its cyclotomic field.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 51M15. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** For n at least 3, encode the regular polygon by the root of unity ζ at angle 2π/n on the unit circle. The cyclotomic field ℚ(ζ) is the field generated by that vertex as a complex number.

**Problem.** A regular polygon with n sides can be constructed with straightedge and compass exactly when φ(n) is a power of two. Here φ(n) counts the integers from 1 to n that are coprime to n.

**How the definition helps.** Encoding a vertex by ζ turns constructibility into membership in a tower of quadratic extensions (our own). Its cyclotomic field has degree φ(n), so the tower law makes a power of two necessary. Conversely, when φ(n) is a power of two, the Galois group has a chain of subgroups of successive index two. The Galois correspondence gives the required quadratic tower.

**Wikipedia:** [Constructible polygon](https://en.wikipedia.org/wiki/Constructible_polygon). It says: “Wantzel's result comes down to a calculation showing that φ(n) is a power of 2 precisely in the cases specified.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Galois extensions by fixed fields frees Galois theory from primitive elements

**Remember:** Start from a group of symmetries, and the base field comes for free.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** Let G be a finite group of automorphisms of a field E. The fixed field F is the set of elements of E that every element of G fixes. Artin takes such pairs E and F as the starting point of Galois theory.

**Problem.** If G is a finite group of automorphisms of E with fixed field F, then E over F is a Galois extension. Its degree equals the order of G, and its Galois group is G.

**How the definition helps.** Starting from a group and its fixed field turns the main count into linear algebra. The proof that the degree equals the order of G uses the linear independence of distinct field homomorphisms (our own). The older approach wrote the field as F(α) for one primitive element and counted the roots of the minimal polynomial of α. Artin's route needs no primitive element, so it works in the same form for all fields (our own).

**Wikipedia:** [Primitive element theorem](https://en.wikipedia.org/wiki/Primitive_element_theorem), [Galois extension](https://en.wikipedia.org/wiki/Galois_extension). It says: “Emil Artin reformulated Galois theory in the 1930s without relying on primitive elements.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius powers give every automorphism of a finite field

**Remember:** One Frobenius step generates every symmetry over the finite base.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a finite base field F of size q, define the Frobenius map by x ↦ x to the power q. It is a field automorphism on every finite extension of F and fixes F.

**Problem.** The Galois group of an extension of finite fields of degree n is cyclic of order n and is generated by the Frobenius map.

**How the definition helps.** Iterating Frobenius gives an automorphism whose order can be read from its fixed points (our own). Its nth iterate fixes all qⁿ elements. For 0 &lt; k &lt; n, the kth iterate fixes at most qᵏ elements by the polynomial root bound. Hence its powers already give n automorphisms, the upper bound for a degree n extension.

**Paper or page:** [Corollary 5.23.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “If K is a finite field, then Gal(K/F) is cyclic, generated by the Frobenius automorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Kummer theory needs the n-th roots of unity in the base field

**Remember:** With the roots of unity at home, cyclic means radical.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** A Kummer extension of K is a field made by adjoining n-th roots of elements of K. Kummer theory assumes that K contains n distinct n-th roots of unity.

**Problem.** If K contains n distinct n-th roots of unity, every abelian extension of exponent dividing n comes from adjoining n-th roots. These extensions match subgroups of K× modulo n-th powers.

**How the definition helps.** With the roots of unity already in K, adjoining one n-th root gives all its conjugates, so the extension is normal with a cyclic group. Without them, the splitting field of x³ − 2 over ℚ has group S₃, which is not abelian (our own). The page says that ℚ has no degree 3 Kummer extensions for this reason. The cyclic cubic fields over ℚ exist, but they are not made by cube roots (our own). The page says that removing the extra roots of unity is the main burden of class field theory.

**Wikipedia:** [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “Taking n = 3, there are no degree 3 Kummer extensions of the rational number field Q, since for three cube roots of 1 complex numbers are required.”

**Sources:**

- [David Hilbert, Die Theorie der algebraischen Zahlkörper, Jahresbericht der Deutschen Mathematiker-Vereinigung 4 (1897)](http://resolver.sub.uni-goettingen.de/purl?GDZPPN002115344)

### Normality and separability give the full automorphism count

**Remember:** Separability supplies the embeddings, and normality makes them automorphisms.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite extension E/F is Galois when it is normal and separable. Count embeddings of E into a fixed algebraic closure containing E that fix F. Normality means every image equals E, and separability means the count equals the degree.

**Problem.** A finite extension is Galois exactly when the number of automorphisms fixing the base field equals its degree.

**How the definition helps.** Normality makes every embedding an automorphism, and separability makes their number equal the degree (our own). Conversely, automorphisms are among the embeddings, whose number cannot exceed the degree. Equality forces both conditions. The work lies in the embedding bound and the equivalence with the usual splitting and distinct-root tests.

**Paper or page:** [Lemma 9.21.2.](https://stacks.math.columbia.edu/tag/09I1). It says: “Then E is Galois over F if and only if \|Aut(E/F)\| = \[E : F\].”

**Sources:** none listed. No primary source with a working link was found.

### Normality makes field automorphisms restrict to intermediate fields

**Remember:** A normal intermediate field stays put when its elements move.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic extension M/K is normal if every embedding of M into an algebraic closure of K has image M. The embeddings must fix K.

**Problem.** If M/K is normal in a finite tower L/M/K, every automorphism of L over K restricts to an automorphism of M over K.

**How the definition helps.** Normality keeps the image of M equal to M (our own). In the splitting field of x³ − 2 over ℚ, some automorphisms move the real cube root to a nonreal root (our own). They do not preserve the field generated by the real root (our own). The work moves to the equivalence of this embedding test and the usual splitting field definition (our own).

**Paper or page:** [Lemma 9.15.7.](https://stacks.math.columbia.edu/tag/0BME). It says: “If $M/K$ is normal, then any automorphism $\\tau$ of $L/K$ induces an automorphism $\\tau\|<sub>M</sub> : M \\to M$.”

**Sources:** none listed. No primary source with a working link was found.

### Normality makes the automorphisms fix exactly the base field

**Remember:** A normal field keeps all the roots, so its symmetries can move them.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension L of K is normal when every irreducible polynomial over K with one root in L has all its roots in L. For a finite extension, this means that L is the splitting field of a polynomial. An extension is separable if each element's minimal polynomial has distinct roots, and Galois if it is both normal and separable.

**Problem.** An algebraic extension L of K is normal and separable exactly when the field fixed by all automorphisms of L over K is K itself.

**How the definition helps.** Normality makes sure that each root has its partner roots in the field, so automorphisms have somewhere to send it. The bad case, from the page, is ℚ(∛2) over ℚ: it is separable but holds only the real cube root of 2. Its only automorphism is the identity, so the fixed field is ℚ(∛2), not ℚ. Normality alone is not enough either: a purely inseparable extension is normal but has only the identity automorphism (our own).

**Wikipedia:** [Galois extension](https://en.wikipedia.org/wiki/Galois_extension), [Normal extension](https://en.wikipedia.org/wiki/Normal_extension). It says: “a Galois extension is an algebraic field extension E/F that is normal and separable; or equivalently, E/F is algebraic, and the field fixed by the automorphism group Aut(E/F) is precisely the base field F.”

**Sources:** none listed. No primary source with a working link was found.

### Orbit polynomials expose the irreducible factors

**Remember:** One orbit gives one irreducible factor.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a root a in a finite Galois extension, its orbit O is the set of its images under all automorphisms fixing the base. Its orbit polynomial is the product of x − b over the distinct elements b of O.

**Problem.** Suppose a polynomial over F has distinct roots that all lie in a finite Galois extension of F. Its monic irreducible factors are the orbit polynomials of its roots.

**How the definition helps.** Automorphisms permute the orbit, so they fix every coefficient of its polynomial (our own). The fixed field theorem puts these coefficients in F. The minimal polynomial divides the orbit polynomial and vanishes at every distinct orbit element, so the two monic polynomials agree.

**Paper or page:** [Minimal Polynomial of Element with Finite Orbit under Group of Automorphisms over Fixed Field in terms of Orbit](https://proofwiki.org/wiki/Minimal_Polynomial_of_Element_with_Finite_Orbit_under_Group_of_Automorphisms_over_Fixed_Field_in_terms_of_Orbit). It says: “Then α is algebraic over F and the product of polynomials p(x) = ∏β ∈ Λ (x − β) is the minimal polynomial of α over F.”

**Sources:** none listed. No primary source with a working link was found.

### Over a perfect field every algebraic extension is separable

**Remember:** In a perfect field, p-th roots already exist, so no root repeats.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 12F15. arXiv math.NT. Level 2: later undergraduate.

**Definition.** A field K is perfect if every irreducible polynomial over K has distinct roots. Equivalently, K has characteristic 0, or K has characteristic p and every element of K is a p-th power. An extension is separable if the minimal polynomial of each of its elements has distinct roots.

**Problem.** Over a perfect field, every algebraic extension is separable. So for Galois theory over such a field, only normality needs checking.

**How the definition helps.** One of the equivalent definitions says exactly that every algebraic extension is separable, so the theorem is a restatement. The work moves to the proof that the definitions agree. That proof uses the fact that an irreducible inseparable polynomial has zero derivative, so it is a polynomial in xᵖ. The field 𝔽ₚ(t) of rational functions is not perfect, and xᵖ − t is irreducible but has one repeated root. The page names this example. Imperfect fields still matter in algebraic geometry in characteristic p.

**Wikipedia:** [Perfect field](https://en.wikipedia.org/wiki/Perfect_field), [Separable polynomial](https://en.wikipedia.org/wiki/Separable_polynomial). It says: “Perfect fields are significant because Galois theory over these fields becomes simpler, since the general Galois assumption of field extensions being separable is automatically satisfied over these fields”

**Sources:**

- [Ernst Steinitz, Algebraische Theorie der Körper, Journal für die reine und angewandte Mathematik 137 (1910)](https://doi.org/10.1515/crll.1910.137.167)

### Root differences detect the Galois group of an irreducible cubic

**Remember:** Odd permutations negate the product, but all permutations fix its square.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a monic irreducible cubic over ℚ, order its three complex roots. Multiply the three differences between earlier and later roots. The discriminant is the square of this product.

**Problem.** The discriminant is a rational square exactly when the Galois group of the cubic is cyclic of order three.

**How the definition helps.** Swapping two roots negates their difference product, so exactly the even permutations fix it (our own). The fixed field theorem makes the product rational exactly when every Galois permutation is even. Irreducibility makes the group transitive on three roots. The only transitive group of even permutations on three roots is cyclic of order three.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “if and only if the Galois group of the cubic equation is the cyclic group of order three.”

**Sources:** none listed. No primary source with a working link was found.

### Root generators make the Galois action faithful

**Remember:** Fix every root and you fix the whole splitting field.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The splitting field of a polynomial is generated over its coefficient field by all its roots. Its Galois group consists of the field automorphisms that fix the coefficient field.

**Problem.** The Galois group of a polynomial with r distinct roots embeds in the group of permutations of those r roots.

**How the definition helps.** Generation by the roots prevents a nonidentity automorphism from fixing every root (our own). Every automorphism permutes the roots because it fixes the coefficients. If the ambient field had extra generators, an automorphism could move those while fixing all the roots.

**Paper or page:** [Automorphism Group Acts Faithfully on Generating Set](https://proofwiki.org/wiki/Automorphism_Group_Acts_Faithfully_on_Generating_Set). It says: “Then the induced group action on S is faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Separability is what the primitive element theorem needs

**Remember:** Separable finite extensions are always generated by one element.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** A finite extension E of F is separable if the minimal polynomial of each element of E has distinct roots. An element α is primitive if E = F(α), so one element generates the whole extension.

**Problem.** Every finite separable extension is generated by a single element. This holds for all number fields and all finite extensions of finite fields.

**How the definition helps.** Separability gives the extension only finitely many intermediate fields, and that is enough for one element to generate it. The page gives the counterexample. Let E = 𝔽ₚ(T, U), rational functions in two variables, and F = 𝔽ₚ(Tᵖ, Uᵖ). Then E has degree p² over F. Every element α of E has αᵖ in F, so F(α) has degree at most p. So no single element generates E. Steinitz proved the modern form of the theorem in 1910.

**Wikipedia:** [Primitive element theorem](https://en.wikipedia.org/wiki/Primitive_element_theorem). It says: “When \[E : F\] = p², there may not be a primitive element (in which case there are infinitely many intermediate fields by Steinitz's theorem).”

**Sources:**

- [Ernst Steinitz, Algebraische Theorie der Körper, Journal für die reine und angewandte Mathematik 137 (1910)](https://doi.org/10.1515/crll.1910.137.167)

### Starting from independent roots makes the general Galois group symmetric

**Remember:** With independent roots, every permutation is allowed.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Start with n algebraically independent root variables over ℚ, meaning they satisfy no nonzero polynomial relation over ℚ. Form the product of the n linear factors x minus each root variable. Its coefficients generate the base field over ℚ.

**Problem.** Over this coefficient field, the general monic polynomial of degree n has every root permutation as a Galois automorphism. For n ≥ 5, no formula in radicals solves the general polynomial.

**How the definition helps.** Every permutation of the root variables fixes the coefficients, and every automorphism that fixes the coefficients permutes the roots (our own). The theorem on symmetric polynomials shows that the coefficients are independent, so this is the usual general polynomial (our own). In degree five or higher the full permutation group is not solvable, so the Galois criterion rules out a radical formula (our own).

**Wikipedia:** [Abel–Ruffini theorem](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem). It says: “For proving that the Galois group is 𝒮ₙ, it is simpler to start from the roots.”

**Sources:** none listed. No primary source with a working link was found.

### The power test makes pure inseparability pass through towers

**Remember:** Raising to powers in succession multiplies the exponents.

*True by definition.* MSC 12F15 (Inseparable field extensions), 12F05. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Let E be an algebraic extension of a field F of prime characteristic p. The extension is purely inseparable if each element of E has a power with exponent pⁿ in F, for some integer n ≥ 0. Another definition requires that every element outside F have a minimal polynomial with a repeated root.

**Problem.** Let F ⊆ M ⊆ E be fields of characteristic p. If E is purely inseparable over M and M is purely inseparable over F, then E is purely inseparable over F.

**How the definition helps.** The power test makes the tower claim a rule for multiplying exponents. For α in E choose n so that β = α<sup>(pⁿ)</sup> lies in M, then m so that β<sup>(pᵐ)</sup> lies in F. Then α<sup>(pⁿ⁺ᵐ)</sup> lies in F, which proves the claim (our own). The minimal-polynomial test does not directly say how to combine the two extensions.

**Wikipedia:** [Purely inseparable extension](https://en.wikipedia.org/wiki/Purely_inseparable_extension). It says: “For each element α ∈ E, there exists n ≥ 0 such that \\(\\alpha<sup>p<sup>n</sup>\\in</sup> F\\).”

**Sources:** none listed. No primary source with a working link was found.

### Transcendence makes a simple extension a rational function field

**Remember:** A transcendental element can replace the variable without losing information.

*Rules out counterexamples.* MSC 12F20 (Transcendental field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define an element a to be transcendental over F when evaluation at a kills no nonzero polynomial over F. A rational function is a fraction of polynomials with a nonzero denominator.

**Problem.** The field generated by one transcendental element over F is isomorphic over F to the rational function field in one variable.

**How the definition helps.** Transcendence keeps every nonzero polynomial denominator nonzero at a (our own). Evaluation therefore embeds the rational function field into the field containing a. Its image contains F and a, and every value is a quotient of polynomials in a. Thus its image is the smallest field containing F and a.

**Paper or page:** [Structure of Simple Transcendental Field Extension](https://proofwiki.org/wiki/Structure_of_Simple_Transcendental_Field_Extension). It says: “If α is transcendental over K then K(α) ≃ K(X).”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence of absolute values gives Ostrowski's short list

**Remember:** Up to powers, ℚ has only the real size and the p-adic sizes.

*Makes the theorem clean to state or prove.* MSC 12J10 (Valued fields), 11S85. arXiv math.NT. Level 2: later undergraduate.

**Definition.** Two absolute values are equivalent if they give the same topology. Equivalently, one is a positive power of the other.

**Problem.** Every nontrivial absolute value on ℚ is equivalent to the real one or to a p-adic one.

**How the definition helps.** Grouping absolute values that differ by a power turns an infinite family into one class per prime, plus one real class. Without this, each power of the real absolute value with exponent between 0 and 1 counts as a different absolute value (our own). The trivial absolute value, which is 1 on every nonzero number, is excluded. The classes are the places of ℚ. Ostrowski proved the theorem in 1916.

**Wikipedia:** [Ostrowski's theorem](https://en.wikipedia.org/wiki/Ostrowski%27s_theorem). It says: “is equivalent to either the usual real absolute value or a p-adic absolute value.”

**Sources:**

- [Alexander Ostrowski, Über einige Lösungen der Funktionalgleichung φ(x)·φ(y) = φ(xy), Acta Mathematica 41 (1916)](https://doi.org/10.1007/bf02422947)

### The ultrametric inequality makes p-adic series converge when terms tend to zero

**Remember:** In ℚₚ, a sum is never bigger than its biggest part.

*True by definition. Confidence: low.* MSC 12J25 (Non-Archimedean valued fields), 26E30. arXiv math.NT, math.CA. Level 2: later undergraduate.

**Definition.** For a prime p, the p-adic absolute value of a nonzero rational x is p⁻ᵛ. Here v is the exponent of p in x, negative when p divides the denominator. It satisfies the strong triangle inequality: \|x + y\|ₚ is at most the larger of \|x\|ₚ and \|y\|ₚ. The field ℚₚ of p-adic numbers is the completion of ℚ for this absolute value.

**Problem.** In ℚₚ, a series converges exactly when its terms tend to 0.

**How the definition helps.** With the strong triangle inequality, the sum of a block of consecutive terms is no larger than its largest term (our own). So if the terms tend to 0, the partial sums form a Cauchy sequence, and completeness of ℚₚ gives a limit (our own). Over the real numbers this test fails: the terms of the harmonic series tend to 0, but the series diverges (our own).

**Paper or page:** [An Infinitely Large Napkin: Calculus: P Adic](https://venhance.github.io/napkin/Napkin.pdf). It says: “A series ∑ xₖ (k = 1 to ∞) in ℚₚ converges to some limit if and only if lim (k → ∞) \|xₖ\|ₚ = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Using base p for p-adic sizes makes the product formula exact

**Remember:** Base p makes each prime's p-adic size exactly cancel its ordinary size.

*True by definition.* MSC 12J25 (Non-Archimedean valued fields), 13A18. arXiv math.NT. Level 2: later undergraduate.

**Definition.** For a nonzero rational r, write vₚ(r) for the exponent of the prime p in r. The p-adic absolute value of r is \|r\|ₚ = p to the power −vₚ(r). So r has a small p-adic size when p appears in r to a high power.

**Problem.** The product formula: for every nonzero rational r, \|r\| · ∏ₚ \|r\|ₚ = 1. In words, the ordinary size of r times all its p-adic sizes is exactly 1.

**How the definition helps.** In our own words: base p is the one base that makes the sizes cancel exactly. Any base greater than 1 gives an absolute value with the same topology. But only base p gives pᵏ the p-adic size 1/pᵏ, which cancels its ordinary size pᵏ. So the product formula follows from unique factorization.

**Wikipedia:** [P-adic valuation](https://en.wikipedia.org/wiki/P-adic_valuation). It says: “The choice of base p in the exponentiation p<sup>(−νₚ(r))</sup> makes no difference for most of the properties, but supports the product formula”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius groups irreducible factors

**Remember:** Multiply conjugate factors to recover one factor over the smaller field.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)). arXiv math.NT. Level 3: graduate.

**Definition.** Let g be a squarefree monic polynomial over the field 𝔽<sub>q</sub>, and factor it into monic irreducibles over a larger finite field. The Frobenius map raises each coefficient to its qth power. A Frobenius orbit is the set of distinct factors that repeated use of this map reaches from one factor.

**Problem.** The products of the Frobenius orbits, one product per orbit, are exactly the monic irreducible factors of g over 𝔽<sub>q</sub>.

**How the definition helps.** In our own proof, taking a whole orbit makes its product fixed by Frobenius. The fixed coefficients belong to the smaller field. Finding factors directly there would require ruling out every proper factor. Unique factorization over the larger field reduces this to ruling out a nonempty proper subset of the orbit preserved by Frobenius. Repeated application reaches every member, so no such subset exists.

**Paper or page:** [Closed formulas for the factorization of Xⁿ−1, the n-th cyclotomic polynomial, Xⁿ−a and f(Xⁿ) over a finite field for arbitrary positive integers n](https://arxiv.org/abs/2306.11183). It says: “Then the factorization of g into monic irreducible polynomials over 𝔽q is given by: ∏(R ∈ ℛ/∼) spin<sub>q</sub>\[R\]”

**Sources:**

- [Anna-Maurin Graner, Closed formulas for the factorization of Xⁿ−1, the n-th cyclotomic polynomial, Xⁿ−a and f(Xⁿ) over a finite field for arbitrary positive integers n](https://arxiv.org/abs/2306.11183)

### Norm forms preserve C₁ under extension

**Remember:** Taking the norm multiplies the degree and variable count equally.

*Makes the theorem clean to state or prove.* MSC 12E30 (Field arithmetic). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** A field is C₁ if every homogeneous polynomial of positive degree d in more than d variables has a nonzero solution. For a finite field extension, the norm of an element is the determinant of multiplication by that element over the base field.

**Problem.** Every finite extension of a C₁ field is again C₁.

**How the definition helps.** The C₁ inequality survives taking the norm because the degree and the number of variables grow by the same factor. In our own proof, take f of degree d in m &gt; d variables over an extension of degree n, and write each variable in a basis. The norm of f is then a form of degree nd in nm &gt; nd coordinates over the base field, so it has a nonzero zero. Only zero has norm zero, so f vanishes at the corresponding nonzero tuple.

**Wikipedia:** [Quasi-algebraically closed field](https://en.wikipedia.org/wiki/Quasi-algebraically_closed_field). It says: “Any algebraic extension of a quasi-algebraically closed field is quasi-algebraically closed.”

**Sources:**

- [Serge Lang, On Quasi Algebraic Closure (1952)](https://doi.org/10.2307/1969785)

### Pseudo-finite fields inherit norm surjectivity

**Remember:** At each fixed degree, norms are given by one formula.

*True by definition. Confidence: medium.* MSC 12E30 (Field arithmetic). arXiv math.LO, math.NT. Level 3: graduate.

**Definition.** A pseudo-finite field is an infinite field satisfying every first-order sentence true in every finite field. Such sentences quantify over field elements and use field operations and equality.

**Problem.** The norm from every finite extension of a pseudo-finite field is onto the nonzero elements of the base field.

**How the definition helps.** The first-order definition transfers the finite-field norm theorem one extension degree at a time. In our own proof, fix the degree and describe a simple extension by the coefficients of an irreducible polynomial. Irreducibility and the norm as a determinant both have first-order formulas, so surjectivity in that degree is one sentence. Pseudo-finite fields are perfect, so the primitive element theorem makes every finite extension simple.

**Wikipedia:** [Pseudo-finite field](https://en.wikipedia.org/wiki/Pseudo-finite_field). It says: “an infinite model of the first-order theory of finite fields.”

**Sources:**

- [James Ax, The Elementary Theory of Finite Fields (1968)](https://doi.org/10.2307/1970573)

### Rational points split Brauer classes

**Remember:** Find a point on the variety that records splitting.

*Makes the theorem clean to state or prove.* MSC 12E30 (Field arithmetic). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** A pseudo-algebraically closed field supplies a rational point on every geometrically integral variety over it. Such a variety stays irreducible and has no nilpotent functions after extending to an algebraic closure. A rational point has coordinates in the original field.

**Problem.** Over a pseudo-algebraically closed field, every finite-dimensional central simple algebra is a matrix algebra. Equivalently, the Brauer group of the field is trivial.

**How the definition helps.** The rational-point axiom applies to the variety that detects whether a given algebra is a matrix algebra. The Severi–Brauer theorem constructs this variety and identifies its rational points as the test for splitting. Over an algebraic closure the variety becomes projective space, so it is geometrically integral.

**Wikipedia:** [Pseudo algebraically closed field](https://en.wikipedia.org/wiki/Pseudo_algebraically_closed_field). It says: “The Brauer group of a PAC field is trivial, as any Severi–Brauer variety has a rational point.”

**Sources:** none listed. No primary source with a working link was found.

### Defining separable as geometrically reduced makes separability survive base change

**Remember:** Changing the base field just changes which tensor product you test.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 13B40. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** Call a finite field extension K of k separable when K ⊗ₖ k′ is reduced for every field extension k′ of k. Reduced means that no nonzero element has a power equal to zero. The usual definition asks that each minimal polynomial has distinct roots.

**Problem.** Let K be a finite separable extension of k, and let k′ be any extension field of k. Then K ⊗ₖ k′ is a finite product of finite separable extensions of k′.

**How the definition helps.** With the tensor definition, the test for each factor is already one of the original tests (our own). The ring K ⊗ₖ k′ is reduced and finite over k′, so it is a product of fields (our own). For a further extension k″ of k′, each factor tensored with k″ is a factor of K ⊗ₖ k″, which is reduced (our own). The work moves to Stacks Lemma 10.44.2, which proves that the tensor test agrees with the usual definition.

**Paper or page:** [Lemma 10.44.2.](https://stacks.math.columbia.edu/tag/030W). It says: “K is geometrically reduced over k.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius generates the Galois group of a finite field topologically

**Remember:** Frobenius powers are dense, not everything, in the profinite integers.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 12E20. arXiv math.NT. Level 3: graduate.

**Definition.** An element generates a topological group topologically if the closure of its powers is the whole group. The absolute Galois group carries the Krull topology.

**Problem.** The absolute Galois group of a field is the Galois group of its separable closure. For a finite field with q elements, it is the profinite integers, the limit of all the groups ℤ/n. The map that sends x to x raised to the power q generates it topologically.

**How the definition helps.** The profinite group is uncountable, so no single element generates it as an abstract group; topological generation is the right sense. The powers of Frobenius form only a copy of ℤ inside it (our own). With the Krull topology, this copy is dense, so Frobenius determines every continuous action.

**Wikipedia:** [Absolute Galois group](https://en.wikipedia.org/wiki/Absolute_Galois_group), [Weil group](https://en.wikipedia.org/wiki/Weil_group). It says: “The Frobenius automorphism is a canonical (topological) generator of GK.”

**Sources:**

- [Wolfgang Krull, Galoissche Theorie der unendlichen algebraischen Erweiterungen, Mathematische Annalen 100 (1928)](https://doi.org/10.1007/bf01448872)

### In infinite Galois theory, closed subgroups correspond to intermediate fields

**Remember:** Topologize the Galois group, and only closed subgroups correspond to fields.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory), 20E18. arXiv math.AC, math.GR. Level 3: graduate.

**Definition.** Let L/K be a Galois extension, possibly infinite. Its Galois group Gal(L/K) is the inverse limit of the finite groups Gal(E/K), over all finite Galois subextensions E. The Krull topology on it is the inverse-limit topology, with each finite group discrete.

**Problem.** The intermediate fields of L/K correspond one to one with the closed subgroups of Gal(L/K) in the Krull topology. Under this correspondence, finite subextensions match open subgroups.

**How the definition helps.** The topology picks out the subgroups that come from fields, so the bijection holds again. For infinite extensions there are more subgroups than intermediate fields. For example, Gal(F̄ₚ/Fₚ) ≅ Ẑ, and the subgroup ℤ generated by Frobenius is dense, so it has the same fixed field Fₚ as Ẑ (this example is ours, not from the nLab). The finite theorem is still needed as input.

**nLab:** [Galois theory](https://ncatlab.org/nlab/show/Galois+theory). It says: “correspond bijectively to the closed subgroups of”

**Sources:**

- [Hendrik Lenstra, Galois theory for schemes, Mathematisch Instituut, Universiteit van Amsterdam (1985; electronic third edition, Leiden, 2008), Section 2.1](https://websites.math.leidenuniv.nl/algebra/GSchemes.pdf)
- [Wolfgang Krull, Galoissche Theorie der unendlichen algebraischen Erweiterungen, Mathematische Annalen 100 (1928) 687–698](https://doi.org/10.1007/BF01448872)

### Separability prevents degenerate trace pairings

**Remember:** A nonzero trace pairs every nonzero element with something.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 3: graduate.

**Definition.** For a finite field extension L of K, the trace of z is the matrix trace of multiplication by z on L over K. Pair x and y by taking the trace of xy. The extension is separable if every minimal polynomial over K of an element of L has distinct roots.

**Problem.** The trace pairing (x, y) ↦ trace of xy is nondegenerate exactly when L is separable over K. Nondegenerate means that each nonzero x has some y with trace of xy nonzero.

**How the definition helps.** Separability excludes precisely the extensions whose trace vanishes everywhere (our own). If z has nonzero trace, take y = z/x for each nonzero x. For our own counterexample, adjoin a square root u of t to 𝔽₂(t). In the basis 1, u, multiplication by a + bu has diagonal entries a, a, so every trace is 2a = 0.

**Paper or page:** [Lemma 9.20.7.](https://stacks.math.columbia.edu/tag/0BIL). It says: “L/K is separable, Traceₗ⁄ₖ is not identically zero, and the trace pairing Qₗ⁄ₖ is nondegenerate.”

**Sources:** none listed. No primary source with a working link was found.

### A p-basis gives differential coordinates

**Remember:** Differentiate the bounded powers as if they were independent variables.

*Rules out counterexamples.* MSC 12F15 (Inseparable field extensions). arXiv math.AC. Level 3: graduate.

**Definition.** For a field extension K over k of characteristic p, let E be the field generated by k and all pth powers in K. A p-basis is a set whose monomials form a vector space basis of K over E. These monomials use finitely many factors and exponents from zero through p − 1. The differential space records formal derivatives, with the sum and product rules and zero derivative on k.

**Problem.** The differentials of the elements of a p-basis form a basis of the differential space of K over k.

**How the definition helps.** Unique monomial expansions let us take a partial derivative in each chosen element independently. In our own argument, reducing an exponent by the relation for a pth power respects differentiation because both sides have derivative zero. The resulting partial derivatives distinguish the basis differentials, and the monomial expansions show that those differentials span. In our own example, adjoining tᵖ to the list containing t preserves generation of 𝔽ₚ(t) but adds a zero differential.

**Paper or page:** [Power Towers: Purely Inseparable Galois Theory and Foliations in Positive Characteristic](https://arxiv.org/abs/2510.06058). It says: “dxᵢ is a basis of the K-vector space Ω(K/k).”

**Sources:**

- [Przemysław Grabowski, Power Towers: Purely Inseparable Galois Theory and Foliations in Positive Characteristic (2025), Lemma 2.16](https://arxiv.org/abs/2510.06058)

### Building perfect closures from pth roots makes field maps extend uniquely

**Remember:** Each new root has only one possible image.

*True by definition.* MSC 12F15 (Inseparable field extensions). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** For a field k of characteristic p, form its perfect closure by adjoining every iterated pth root of every element. A field is perfect when the map x ↦ xᵖ is bijective. Another definition asks for a perfect extension of k that is purely inseparable. Purely inseparable means some iterated pth power of each new element lies in k.

**Problem.** Every homomorphism between fields of characteristic p extends uniquely to a homomorphism between their perfect closures.

**How the definition helps.** In characteristic p an element has at most one pth root, so each adjoined root has only one possible image (our own). A map φ sends the pⁿth root of a to the pⁿth root of φ(a) in the target closure (our own). This rule preserves sums and products because x ↦ xᵖ does (our own). The work moves to Stacks Lemma 10.45.4, which shows that this construction is the unique perfect, purely inseparable extension.

**Paper or page:** [Lemma 10.45.4.](https://stacks.math.columbia.edu/tag/046W). It says: “The field extension k′/k is unique up to unique isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Regular extensions stay integral

**Remember:** Test the tensor product once over an algebraic closure.

*True by definition.* MSC 12F20 (Transcendental field extensions). arXiv math.AC. Level 3: graduate.

**Definition.** A field extension L of k is regular if L ⊗ₖ k̄ is a domain, where k̄ is an algebraic closure of k. A domain is a ring without zero divisors.

**Problem.** For a regular extension L of k and any field extension E of k, E ⊗ₖ L is a domain.

**How the definition helps.** The tensor definition gives exactly the single test needed to preserve integrality over every larger field. The first cited lemma proves that testing an algebraic closure suffices. In our own comparison, the usual definition requires separability and requires every element of L algebraic over k to lie in k. The equivalence with that definition carries the field-theoretic work.

**Wikipedia:** [Regular extension](https://en.wikipedia.org/wiki/Regular_extension). It says: “or equivalently, L ⊗ₖ k̄ is an integral domain when k̄ is the algebraic closure of k”

**Paper or page:** [Lemma 10.49.3.](https://stacks.math.columbia.edu/tag/0FWF), [Lemma 10.49.4.](https://stacks.math.columbia.edu/tag/09P9). It says: “Let k be a field. Let S be a geometrically integral k-algebra. Let R be a k-algebra and an integral domain. Then R ⊗ₖ S is an integral domain.”

**Sources:** none listed. No primary source with a working link was found.

### Separating bases leave one algebraic generator

**Remember:** Choose the variables so the algebraic part stays separable.

*Rules out counterexamples.* MSC 12F20 (Transcendental field extensions). arXiv math.AC. Level 3: graduate.

**Definition.** A separating transcendence basis is an algebraically independent set that leaves only a separable algebraic extension. In other words, over the rational function field it generates, all minimal polynomials have distinct roots. An ordinary transcendence basis does not require this.

**Problem.** If a finitely generated field extension admits a separating transcendence basis, one separable element suffices to generate the extension over the resulting rational function field.

**How the definition helps.** Choosing a separating basis makes the remaining extension finite and separable, so the primitive element theorem gives one generator. In our own example, the singleton containing tᵖ is a transcendence basis for 𝔽ₚ(t) over the field with p elements. Over 𝔽ₚ(tᵖ), the minimal polynomial of t has a repeated root. No separable element generates that extension.

**Paper or page:** [Lemma 10.42.3.](https://stacks.math.columbia.edu/tag/030Q). It says: “K = k(x₁, …, xᵣ₊₁), and xᵣ₊₁ is separable over k(x₁, …, xᵣ).”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Brauer group as Galois H² makes it torsion

**Remember:** Each Galois class lives on a finite quotient, so Brauer classes have finite order.

*True by definition.* MSC 12G05 (Galois cohomology), 16K50, 20J06. arXiv math.NT, math.RA. Level 3: graduate.

**Definition.** The Brauer group Br(K) of a field K classifies central simple algebras over K up to matrix algebras over them. These are finite-dimensional algebras with centre K and no two-sided ideals other than 0 and the whole algebra. It is isomorphic to continuous H² of the absolute Galois group of K, with coefficients in the units of a separable closure.

**Problem.** For every field K, the Brauer group Br(K) is a torsion group.

**How the definition helps.** Continuous cohomology of a profinite group is torsion in positive degrees, so the isomorphism makes Br(K) torsion at once. Each class is split by a finite Galois extension L, and the degree of L kills it, by restriction and transfer (our own). With algebras alone, one must show instead that the order of a class divides the degree of its division algebra (our own). The work went into the isomorphism, which matches algebras split by L with 2-cocycles and uses Hilbert's Theorem 90 (our own).

**Wikipedia:** [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “For an arbitrary field K, the Brauer group can be expressed in terms of Galois cohomology as follows: Br K ≅ H²(K, Gₘ),”

**Paper or page:** [Etale Cohomology, Lemma 59.57.6](https://stacks.math.columbia.edu/tag/0DV3). It says: “Let G be a profinite topological group. Then Hⁱ(G, M) is torsion for i &gt; 0 and any G-module M”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Galois cohomology turns Kummer theory into one long exact sequence

**Remember:** Hilbert 90 turns m-th power classes into first cohomology.

*Makes the theorem clean to state or prove.* MSC 12G05 (Galois cohomology), 11R34, 20J06. arXiv math.NT. Level 3: graduate.

**Definition.** Let K be a field, Kₛ a separable closure and m an integer prime to the characteristic. Let μₘ be the group of m-th roots of unity in Kₛ. The Kummer sequence is 1 → μₘ → Kₛ× → Kₛ× → 1, where the second map raises each nonzero element to the m-th power. It is exact because m is prime to the characteristic.

**Problem.** For every such K and m, the group K×/(K×)ᵐ is isomorphic to H¹(K, μₘ), even when K has no m-th roots of unity. When K contains them, this gives the classical description of cyclic extensions of degree dividing m by m-th roots.

**How the definition helps.** Galois cohomology lets the m-th power classes of K be a cohomology group, with no roots of unity needed in K. The long exact sequence of the Kummer sequence gives K× → K× → H¹(K, μₘ) → H¹(K, Kₛ×), and the last group is 0. So H¹(K, μₘ) is the cokernel of the m-th power map, and the work went into Hilbert's Theorem 90 (our own). When μₘ lies in K, H¹(K, μₘ) is Hom(Gal(Kₛ/K), ℤ/m), which classifies cyclic extensions (our own).

**Wikipedia:** [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “By Hilbert's Theorem 90 H¹(L, K̄×) = 0, and hence we get an isomorphism δ: L×/(L×)ᵐ → H¹(L, K̄×\[m\]).”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Group cohomology states Hilbert's Theorem 90 for every Galois group

**Remember:** Every cocycle into L× has the form σ(b)/b; that is Theorem 90.

*Makes the theorem clean to state or prove.* MSC 12G05 (Galois cohomology), 20J06. arXiv math.NT. Level 3: graduate.

**Definition.** A 1-cocycle of G with values in L× is a map f from G to L× with f(στ) = f(σ)·σ(f(τ)). A coboundary is a cocycle of the form σ ↦ σ(b)/b. The first cohomology group is cocycles modulo coboundaries.

**Problem.** For a finite Galois extension L of K with group G, the first cohomology group H¹(G, L×) is trivial. For a cyclic group this says that each element of norm 1 has the form σ(b)/b.

**How the definition helps.** The cohomology definition turns the special statement about norm-one elements into one vanishing statement that makes sense for any Galois group. For a cyclic group, a cocycle is fixed by its value at a generator, which is an element of norm 1. Noether gave the general form in 1933. The proof is short: average a cocycle against independent characters to find b (our own).

**Wikipedia:** [Hilbert's Theorem 90](https://en.wikipedia.org/wiki/Hilbert%27s_Theorem_90). It says: “the first cohomology group of G, with coefficients in the multiplicative group of L, is trivial”

**Sources:**

- [Emmy Noether, Der Hauptgeschlechtssatz für relativ-galoissche Zahlkörper, Mathematische Annalen 108 (1933)](https://doi.org/10.1007/BF01452845)
- [David Hilbert, Die Theorie der algebraischen Zahlkörper, Jahresbericht der Deutschen Mathematiker-Vereinigung 4 (1897)](http://resolver.sub.uni-goettingen.de/purl?GDZPPN002115344)

### Cohomological dimension one of finite fields makes finite division rings commutative

**Remember:** Dimension one and torsion units leave no room for Brauer classes.

*True by definition.* MSC 12G10 (Cohomological dimension of fields), 16K20, 12G05. arXiv math.NT, math.RA. Level 3: graduate.

**Definition.** The cohomological dimension of a profinite group G is the least n with Hᵏ(G, M) = 0 for all k &gt; n and torsion discrete M. A field has the cohomological dimension of its absolute Galois group. For a finite field this group is Ẑ, the profinite integers.

**Problem.** The Brauer group of a finite field is 0. Hence every finite division ring is commutative, which is Wedderburn's little theorem.

**How the definition helps.** The units of an algebraic closure of a finite field form a torsion module, so dimension one kills their H², which is the Brauer group. Every nonzero element of the closure lies in a finite field, so it has finite order (our own). A finite division ring is a central division algebra over its centre, a finite field, so it equals its centre (our own). Witt's elementary proof counts with the class equation instead, and here the work went into showing that Ẑ has dimension one (our own).

**Wikipedia:** [Cohomological dimension](https://en.wikipedia.org/wiki/Cohomological_dimension), [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “Every finite field has absolute Galois group isomorphic to Ẑ and so has cohomological dimension 1.”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Differential closedness gives separability without perfection

**Remember:** An extension must carry the derivative before it can supply a root.

*Rules out counterexamples.* MSC 12H05 (Differential algebra). arXiv math.AC. Level 3: graduate.

**Definition.** A differentially closed field solves any finite system of differential equations and inequations that has a solution in a differential field extension. A differential equation can involve the unknown and its repeated derivatives. Unlike ordinary algebraic closedness, this definition tests only extensions that admit the original derivative.

**Problem.** Every differentially closed field is separably closed: each nonconstant separable polynomial has a root in it. In characteristic p it is not perfect, so it is not algebraically closed.

**How the definition helps.** Testing differential extensions gives roots of separable polynomials because the derivative extends to every separable algebraic extension. In our own argument, adjoin a variable with derivative one. Differential closedness then gives an element a of the field with derivative one. In characteristic p, every pth power has derivative zero, so a has no pth root.

**Wikipedia:** [Differentially closed field](https://en.wikipedia.org/wiki/Differentially_closed_field). It says: “Taking g=1 and f any ordinary separable polynomial shows that any differentially closed field is separably closed.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed constants preserve solution dimension

**Remember:** A full set of solutions needs no extra constants.

*Rules out counterexamples.* MSC 12H05 (Differential algebra). arXiv math.AC. Level 3: graduate.

**Definition.** A Picard–Vessiot field for a system Y′ = AY is generated by the entries of an invertible matrix F satisfying F′ = AF. It adds no constants, meaning elements with derivative zero.

**Problem.** In a Picard–Vessiot field for an n-dimensional system, the solution space has dimension n over the original constants.

**How the definition helps.** The constant-field condition forces every solution to be a combination of the columns of F with coefficients in the original constants. In our own calculation, multiplying a solution by the inverse of F gives a vector with derivative zero. For our own counterexample, take ℂ(x) with ordinary differentiation and adjoin a transcendental constant c. For y′ = 0, the invertible solution matrix (c) generates this extension, yet 1 and c are independent solutions over ℂ.

**Paper or page:** [Differential Central Simple Algebras](https://arxiv.org/abs/2303.12430). It says: “The field of constants C<sub>K</sub>=C<sub>k</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### Henselian as unique extension makes conjugate elements have equal values

**Remember:** Conjugating an extended valuation gives the same extension.

*True by definition.* MSC 12J10 (Valued fields), 13J15. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** Call a valued field K henselian if its valuation extends uniquely, up to equivalence, to an algebraic closure. The usual definition asks that simple roots modulo the maximal ideal of the valuation ring lift to roots.

**Problem.** Let K be a henselian field with a real-valued valuation v, extended to an algebraic closure. Conjugate elements, which are roots of the same irreducible polynomial over K, have equal values.

**How the definition helps.** With the uniqueness definition, the theorem takes one line (our own). For an automorphism σ of the closure that fixes K, the map x ↦ v(σ(x)) also extends v (our own). It agrees with v on K, so for real values uniqueness makes it equal to v (our own). Any two conjugates differ by such a σ (our own). The work moves to the theorem that root lifting agrees with unique extension.

**Wikipedia:** [Henselian ring](https://en.wikipedia.org/wiki/Henselian_ring). It says: “if and only if v extends uniquely to every finite extension of K”

**Sources:** none listed. No primary source with a working link was found.

### Non-discreteness gives the classification of local fields

**Remember:** Locally compact but not discrete gives ℝ, ℂ, p-adic fields and Laurent series.

*Rules out counterexamples.* MSC 12J10 (Valued fields), 11S85. arXiv math.NT. Level 3: graduate.

**Definition.** A local field is a field with a topology that is locally compact, Hausdorff and not discrete. The page takes this definition from Weil.

**Problem.** Every local field is ℝ, ℂ, a finite extension of a p-adic field ℚₚ, or a field 𝔽q((t)) of Laurent series over a finite field.

**How the definition helps.** The non-discrete condition rules out the trivial case and leaves only fields whose topology comes from an absolute value. Any field with the discrete topology is locally compact, so without the condition every field would count (our own). The page builds that absolute value from Haar measure, the translation-invariant measure on the field. Sorting the resulting complete fields into the four types is the remaining work (our own).

**Wikipedia:** [Local field](https://en.wikipedia.org/wiki/Local_field). It says: “In mathematics, a local field is a locally compact Hausdorff non-discrete topological field.”

**Sources:**

- [André Weil, Basic Number Theory, Springer (1974)](https://doi.org/10.1007/978-3-642-61945-8)

### Residue fields classify unramified extensions

**Remember:** A simple residue factor lifts without splitting ambiguities.

*Rules out counterexamples.* MSC 12J10 (Valued fields). arXiv math.AC. Level 3: graduate.

**Definition.** A discrete valuation ring is henselian if coprime monic factors of a monic polynomial modulo the maximal ideal lift to factors over the ring. A finite extension of its fraction field is unramified if its degree equals its residue degree and its residue extension is separable.

**Problem.** For a henselian discrete valuation ring, taking residue fields gives a one-to-one correspondence between finite unramified extensions of the fraction field and finite separable extensions of the residue field. It also matches their embeddings.

**How the definition helps.** The henselian lifting property recovers separable residue extensions and their embeddings from lifted polynomial factors. The cited theorem proves this for finite étale algebras, and the connected ones give the unramified fields. In our own counterexample, adjoin √6 to the integers localized at 5, which is not henselian. The result is a domain, but its reduction splits because X² − 6 has two distinct roots modulo 5.

**Paper or page:** [Lemma 10.153.7.](https://stacks.math.columbia.edu/tag/04GK). It says: “The category of finite étale ring extensions R → S is equivalent to the category of finite étale algebras κ → S̄ via the functor S ↦ S/𝔪S.”

**Sources:** none listed. No primary source with a working link was found.

### Divisible exponents yield real closedness

**Remember:** An nth root needs room for the leading exponent divided by n.

*Rules out counterexamples.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** A Hahn field consists of formal series with exponents in an ordered abelian group. Every nonempty subset of the exponents with nonzero coefficients must have a least element. Over ordered coefficients, the first nonzero coefficient determines the sign. A divisible exponent group allows division by every positive integer.

**Problem.** Suppose the ordered coefficient field is real closed, meaning it has no proper ordered algebraic extension. Its Hahn field is also real closed if the exponent group is divisible.

**How the definition helps.** Divisibility removes the obstruction from the first nonzero term of a series. In our own example, t has no square root in ℝ((t)), since a square has an even leading exponent. The algebraic closure theorem for Hahn fields does the hard work. Adjoining a square root of −1 just extends the coefficients, and the resulting Hahn field is algebraically closed.

**nLab:** [Hahn series](https://ncatlab.org/nlab/show/Hahn+series). It says: “As a corollary, if G is divisible, k\[tᴳ\] is real closed if k is real closed.”

**Sources:** none listed. No primary source with a working link was found.

### Field embeddings preserve real closed orders

**Remember:** A field map sends squares to squares.

*True by definition.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** A real closed ordered field has square roots of all positive elements and roots of all odd-degree polynomials. One can also define it as an ordered field with no proper ordered algebraic extension.

**Problem.** Every field embedding between real closed fields preserves their unique orders.

**How the definition helps.** The square-root axiom identifies positive elements with nonzero squares. Every field embedding preserves nonzero squares, so it preserves the order. In our own argument, the Artin–Schreier theorem supplies the root axioms when one starts with the definition using ordered algebraic extensions.

**nLab:** [real closed field](https://ncatlab.org/nlab/show/real+closed+field). It says: “In fact, the category of real closed fields and order-preserving field homomorphisms is a full subcategory of the category Field of fields and field homomorphisms.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed orders make real closures unique

**Remember:** Keep the signs before you adjoin square roots.

*Rules out counterexamples.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** A real closure of an ordered field is an algebraic extension with an order extending the given one. In that extension, every positive element has a square root and every polynomial of odd degree has a root.

**Problem.** An ordered field has a real closure unique up to a unique order-preserving isomorphism over that field.

**How the definition helps.** Fixing the order rules out extensions that give square roots to elements declared negative. In our own example, the rational function field ℚ(t) admits orders with t positive and orders with t negative. Only the first real closures contain a square root of t, so no isomorphism fixing ℚ(t) can identify the two. The Artin–Schreier theorem proves existence and uniqueness once the order is fixed.

**Paper or page:** [An Artin-Schreier-type theory for signatures of hermitian forms over involutions](https://arxiv.org/abs/2304.03598). It says: “unique up to a unique K-isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Root axioms make value groups divisible

**Remember:** Roots of positive representatives divide their values.

*True by definition.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** In an ordered field, two nonzero elements have the same natural value when their absolute ratio lies between two positive rational bounds. These classes form the natural value group, with field multiplication written as group addition. In a real closed ordered field, positive elements have square roots and odd-degree polynomials have roots.

**Problem.** The natural value group of a real closed field is divisible. For every value v and positive integer n, some value w satisfies nw = v.

**How the definition helps.** Every value has a positive representative, and a positive nth root divides its value by n. The odd-degree root axiom handles the odd part of n, and repeated square roots handle the powers of two. In our own terms, the Artin–Schreier theorem supplies these root axioms if real closed means maximal among ordered algebraic extensions.

**nLab:** [real closed field](https://ncatlab.org/nlab/show/real+closed+field). It says: “If R is real closed, then the value group is a linearly ordered divisible group (divisible because we can take nth roots of positive elements in R).”

**Sources:** none listed. No primary source with a working link was found.

### Discrete henselization changes no values or residues

**Remember:** Take the separable algebraic part without changing the values or residues.

*True by definition.* MSC 12J20 (General valuation theory for fields). arXiv math.AC. Level 3: graduate.

**Definition.** A discrete valuation assigns integer orders to nonzero elements of a field. It is henselian if it extends uniquely to algebraic extensions. Its henselization is the smallest henselian extension inside a chosen valued algebraic closure. For a discrete valuation, this field also consists of the separable algebraic elements in the completion.

**Problem.** The henselization of a discretely valued field has its original value group and residue field.

**How the definition helps.** The completion description puts the henselization in a field where arbitrarily close approximations come from the base. In our own argument, approximate a nonzero element until the error has higher value than the element. The approximation then has the same value. For an element of nonnegative value, an error of positive value also leaves the residue unchanged. The henselization theorem identifies the separable algebraic part of the completion with the smallest henselian extension.

**nLab:** [Henselian ring](https://ncatlab.org/nlab/show/Henselian+ring). It says: “Then the Henselization of R is isomorphic to the subring of R̂ whose elements are roots of separable polynomials with coefficients in K.”

**Sources:** none listed. No primary source with a working link was found.

### Pure inseparability gives one valuation ring

**Remember:** Test an element by raising it back to the base field.

*True by definition.* MSC 12J20 (General valuation theory for fields), 12F15. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring A of a field K contains x or its inverse for every nonzero x in K. In characteristic p &gt; 0, an extension L of K is purely inseparable if each element of L has some power x<sup>(pⁿ)</sup> in K.

**Problem.** If L is purely inseparable over K, exactly one valuation ring of L meets K in A. It is the integral closure of A in L.

**How the definition helps.** In our own proof, the power description forces membership in any extending valuation ring B. For x in L choose a power y = x<sup>(pⁿ)</sup> in K. If x belongs to B, then y belongs to A. Conversely, if y belongs to A, then x satisfies a monic equation over B and belongs to B because valuation rings are integrally closed.

**Paper or page:** [Lemma 15.124.3.](https://stacks.math.columbia.edu/tag/0H37). It says: “Then the integral closure B of A in L is a valuation ring with fraction field L and A ⊂ B is an extension of valuation rings.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings restrict by intersection

**Remember:** Restrict the field and keep the elements of size at most one.

*True by definition.* MSC 12J20 (General valuation theory for fields). arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring in a field is a subring containing x or its inverse for each nonzero field element x. Its elements have size at most one for the corresponding valuation. Alternatively, a valuation assigns values in an ordered group.

**Problem.** Restricting a valuation from a field L to a subfield K corresponds to intersecting its valuation ring with K. So restrictions compose in towers.

**How the definition helps.** The ring definition turns restriction to a subfield K into intersection with K. In our own proof, the intersection still contains x or its inverse for every nonzero x in K. Taking two successive intersections gives the same ring as restricting directly. The correspondence with ordered-group valuations requires recovering the group of values by dividing the multiplicative group by the units of the ring.

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “There is a natural bijective correspondence between equivalence classes of valuations on K and valuation rings in K.”

**Sources:** none listed. No primary source with a working link was found.

### Haar scaling makes a local field’s module multiplicative

**Remember:** Multiplying twice multiplies the volume scaling factors.

*True by definition.* MSC 12J25 (Non-Archimedean valued fields), 28C10. arXiv math.NT. Level 3: graduate.

**Definition.** A local field is a nondiscrete, locally compact Hausdorff topological field. Fix Haar measure μ on its additive group, so μ is unchanged by addition of a fixed element. For nonzero a, the module \|a\| is the factor with μ(aS) = \|a\|μ(S) for Borel sets S, and set \|0\| = 0. Another approach starts with a chosen absolute value on the field.

**Problem.** The module is multiplicative. On ℚₚ, the field of p-adic numbers, \|p\| = 1/p for the prime p.

**How the definition helps.** The scaling definition makes multiplication of field elements into composition of volume changes. Each scaling factor is well defined because a ↦ μ(aS) gives another translation-invariant measure, and Haar measure is unique up to scale. The p-adic integers ℤₚ split into p translates of pℤₚ, which all have the same measure, so \|p\| = 1/p (our own). A chosen absolute value already assumes multiplicativity, whereas this proof recovers it from the additive group alone (our own).

**Wikipedia:** [Local field](https://en.wikipedia.org/wiki/Local_field). It says: “The module of an element a of F is defined so as to measure the change in size of a set after multiplying it by a.”

**Sources:**

- [A. Weil, Basic Number Theory, Springer (2nd ed. 1974)](https://doi.org/10.1007/978-3-642-61945-8)

### Hahn series admit a missing root

**Remember:** Well-ordered exponents need not have bounded denominators.

*Makes the theorem clean to state or prove.* MSC 12J25 (Non-Archimedean valued fields). arXiv math.AC. Level 3: graduate.

**Definition.** A Hahn series has exponents in an ordered abelian group. Each nonempty subset of the exponents with nonzero coefficients must have a least element. A Puiseux series is a Laurent series in a single fractional power of t, so its exponents share a denominator.

**Problem.** Over a field of characteristic p, the Hahn field with rational exponents has a root of Xᵖ − X = t⁻¹. The Puiseux field does not.

**How the definition helps.** The Hahn definition admits the increasing exponents −1/p, −1/p², and so on, although they have no common denominator. Give each exponent coefficient one. Raising this series to the pth power shifts the terms, so subtraction leaves t⁻¹. In our own argument, any two roots differ by a solution of zᵖ = z, hence by an element of the prime field. Adding a constant leaves all the negative exponents in place.

**Wikipedia:** [Hahn series](https://en.wikipedia.org/wiki/Hahn_series). It says: “it is not a Puiseux series because the denominators in the exponents are unbounded.”

**Sources:** none listed. No primary source with a working link was found.

### p-adic numbers make Hasse–Minkowski a test one prime at a time

**Remember:** ℚₚ looks at ℚ through a lens that sees only divisibility by p.

*Makes the theorem clean to state or prove.* MSC 12J25 (Non-Archimedean valued fields), 11E12, 11E08. arXiv math.NT. Level 3: graduate.

**Definition.** Fix a prime p. The p-adic absolute value makes a rational number small when a high power of p divides it. The p-adic numbers ℚₚ are the completion of ℚ for this absolute value. Together with ℝ, the fields ℚₚ are the completions of ℚ.

**Problem.** The Hasse–Minkowski theorem: a quadratic form over ℚ represents 0 nontrivially (it is 0 at some nonzero point) if and only if this holds over ℝ and over every ℚₚ. The same is true for the equivalence of two quadratic forms.

**How the definition helps.** The field ℚₚ packs the congruence conditions modulo every power of p into one complete field. In ℚₚ, Hensel's lemma turns a root modulo p into an exact root when the derivative there is not 0 modulo p. With these fields, the theorem has the form 'global if and only if everywhere local'. The theorem fails for cubic forms, for example Selmer's 3x³ + 4y³ + 5z³ = 0 (our own example, not from the article).

**Wikipedia:** [Hasse–Minkowski theorem](https://en.wikipedia.org/wiki/Hasse%E2%80%93Minkowski_theorem). It says: “in order to determine whether an equation of a certain type has a solution in rational numbers, it is sufficient to test whether it has solutions over complete fields of real and p-adic numbers”

**Sources:**

- [H. Hasse, Über die Darstellbarkeit von Zahlen durch quadratische Formen im Körper der rationalen Zahlen, Journal für die reine und angewandte Mathematik 152 (1923)](https://doi.org/10.1515/crll.1923.152.129)

### Residue sequences make p-adic units exactly those nonzero modulo p

**Remember:** Invert each residue, and uniqueness makes the inverses fit together.

*True by definition. Confidence: medium.* MSC 12J25 (Non-Archimedean valued fields), 11S99. arXiv math.NT. Level 3: graduate.

**Definition.** For a prime p, define a p-adic integer as a sequence of residues xₙ modulo pⁿ. Each xₙ₊₁ reduces to xₙ, and multiplication takes place at each level. An alternative completes ℤ for the p-adic metric, in which multiples of high powers of p are small.

**Problem.** A p-adic integer is a unit, meaning it has a multiplicative inverse, exactly when its first residue x₁ is not zero.

**How the definition helps.** The residue definition makes the inverse a sequence of ordinary modular inverses. If x₁ is nonzero, every xₙ is coprime to pⁿ and has an inverse. The inverses reduce to each other because inverses are unique (our own). Conversely, reduction modulo p sends units to units. The work moves into inversion modulo pⁿ and the equivalence with the metric completion (our own).

**Paper or page:** [An Infinitely Large Napkin: Calculus: P Adic](https://venhance.github.io/napkin/Napkin.pdf). It says: “The number x ∈ ℤₚ is invertible if and only if x₁ ≠ 0. In symbols, x ∈ ℤₚˣ ⟺ x ≢ 0 (mod p).”

**Sources:** none listed. No primary source with a working link was found.

### Spherical completeness excludes immediate extensions

**Remember:** A new element in an immediate extension produces nested balls with no common point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12J25 (Non-Archimedean valued fields). arXiv math.NT. Level 3: graduate.

**Definition.** A valuation assigns ordered values to nonzero elements, with larger values meaning smaller size. A valued field is spherically complete if every nested family of closed balls has a common point. An immediate extension preserves the value group and the residue field, obtained by reducing elements of size at most one modulo those of smaller size.

**Problem.** A spherically complete valued field has no proper immediate extension.

**How the definition helps.** Spherical completeness tests all approximations to a proposed new element at once. In our own proof, take a new element x and form a closed ball around each old element a with radius the distance to x. The valuation inequality makes the balls nested. Immediacy gives a closer old element b by matching the value of x − a and then its first nonzero residue. The ball around b excludes a, so no old element lies in every ball.

**Wikipedia:** [Spherically complete field](https://en.wikipedia.org/wiki/Spherically_complete_field). It says: “every collection of balls that is totally ordered by inclusion has a nonempty intersection.”

**Sources:**

- [Irving Kaplansky, Maximal fields with valuations (1942)](https://doi.org/10.1215/s0012-7094-42-00922-0)

### The fundamental theorem of algebra, stated for the multiset of roots

**Remember:** Find the roots as one bag, not one by one.

*Makes the theorem clean to state or prove.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 03F60. arXiv math.AC, math.LO. Level 4: research.

**Definition.** Richman uses the complete metric space of multisets of n complex numbers. A multiset is a set in which an element can occur more than once. The roots of a polynomial of degree n are then one point of this space, not a list of n separate numbers.

**Problem.** In constructive mathematics without the axiom of choice, every monic complex polynomial of degree n has its roots as one multiset of n complex numbers (Richman 2000).

**How the definition helps.** Stated for the multiset of roots, the theorem becomes provable without choice. Constructively, one cannot pick out the individual roots, because one cannot decide whether two complex numbers are equal. To factor every monic polynomial into linear factors, one needs a weak choice principle. The nLab notes the same reformulation for the Weierstrass factorization of entire functions.

**nLab:** [fundamental theorem of algebra](https://ncatlab.org/nlab/show/fundamental+theorem+of+algebra), [Weierstrass factorization theorem](https://ncatlab.org/nlab/show/Weierstrass+factorization+theorem). It says: “In light of this, one can instead interpret the constructive FTA as a statement about sets of roots rather than about individual roots, an interpretation that dates from Richman 2000.”

**Sources:**

- [F. Richman, The fundamental theorem of algebra: a constructive development without choice, Pacific Journal of Mathematics 196 (2000) 213–230](https://doi.org/10.2140/pjm.2000.196.213)

### Hopf–Galois Kummer theory needs no roots of unity

**Remember:** Change the symmetry object, and radical extensions become Kummer without roots of unity.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 12F10 (Separable extensions, Galois theory), 16T05, 12F05. arXiv math.NT, math.RA. Level 4: research.

**Definition.** A Hopf–Galois structure on a field extension L/K replaces the Galois group by a Hopf algebra H that acts on L. Every Galois extension has the classical structure, given by its Galois group. The extension is H-Kummer if eigenvectors of this action generate L over K.

**Problem.** A class of H-Kummer extensions of K is exactly the class of radical extensions of K that are linearly disjoint from K(ζₙ), the field made by adding the n-th roots of unity to K. Linearly disjoint means, roughly, that the two fields share only K.

**How the definition helps.** Our own reason: the new structure lets the eigenvector idea of Kummer theory work over fields without the roots of unity. The abstract says this extends the classical Kummer condition for the classical Galois structure. Our own example: ℚ(∛2)/ℚ is not Galois, so classical Kummer theory does not apply, but it has a Hopf–Galois structure. The main tool, says the abstract, is a product Hopf–Galois structure on a compositum.

**Paper or page:** [A generalization of Kummer theory to Hopf-Galois extensions](https://arxiv.org/abs/2305.08648). It says: “an H-Galois extension L/K is H-Kummer if L can be generated by adjoining to K a finite set S of eigenvectors for the action of the Hopf algebra H on L.”

**Sources:**

- [Daniel Gil-Muñoz, A generalization of Kummer theory to Hopf-Galois extensions, arXiv:2305.08648 (2024)](https://arxiv.org/abs/2305.08648)

### Derivations replace automorphisms in the Galois theory of purely inseparable extensions

**Remember:** When automorphisms see nothing, derivations see everything.

*Makes the theorem clean to state or prove.* MSC 12F15 (Inseparable field extensions), 12H05. arXiv math.NT, math.RA. Level 4: research.

**Definition.** An extension L of K in characteristic p is purely inseparable of exponent 1 if xᵖ is in K for every x in L. A derivation is an additive map D with D(xy) = xD(y) + yD(x). A restricted Lie algebra is a Lie algebra with a p-th power operation.

**Problem.** Let L over K be finite and purely inseparable of exponent 1. Its intermediate fields match the restricted Lie subalgebras of the K-derivations of L that are also L-subspaces.

**How the definition helps.** Derivations detect inseparable structure that automorphisms miss, so they can replace the Galois group. A purely inseparable extension has only the identity automorphism over K, so the classical Galois group sees no intermediate fields (our own). Jacobson used derivations instead in 1937 and 1944. Extensions of higher exponent need higher derivations, as in later work by Sweedler and by Gerstenhaber and Zaromp.

**Wikipedia:** [Purely inseparable extension](https://en.wikipedia.org/wiki/Purely_inseparable_extension). It says: “introduced a variation of Galois theory for purely inseparable extensions of exponent 1, where the Galois groups of field automorphisms in Galois theory are replaced by restricted Lie algebras of derivations.”

**Sources:**

- [Nathan Jacobson, Galois theory of purely inseparable fields of exponent one, American Journal of Mathematics 66 (1944)](https://doi.org/10.2307/2371772)

### Iterated closures solve new equations

**Remember:** Each equation appears at a finite stage and is solved at the next.

*True by definition.* MSC 12H05 (Differential algebra). arXiv math.AC. Level 4: research.

**Definition.** A Picard–Vessiot field adjoins a basis of solutions of one homogeneous linear differential equation without adding constants, meaning elements with derivative zero. A Picard–Vessiot closure does this for all such equations over the starting field. The complete closure repeats this step indefinitely and takes the union.

**Problem.** Suppose the starting differential field has characteristic zero and its constants form an algebraically closed field. The union has the same constants. Each homogeneous linear differential equation of positive order n over the union has n solutions linearly independent over those constants.

**How the definition helps.** The iteration allows the next stage to solve equations using the previous stage’s solutions as coefficients. In our own terms, a linear equation has finitely many coefficients, so a single finite stage contains all of them. A constant in the union already lies at some finite stage and so belongs to the original field. The existence theorem for a Picard–Vessiot closure with unchanged constants supplies each stage.

**Paper or page:** [The Complete Picard Vessiot Closure](https://arxiv.org/abs/2203.00705). It says: “The constants of F∞ are those of F.”

**Sources:** none listed. No primary source with a working link was found.

### L'Hôpital's rule holds in an ordered field exactly when suprema exist

**Remember:** Without suprema, a function with zero derivative can still jump.

*Rules out counterexamples.* MSC 12J15 (Ordered fields), 26A24. arXiv math.CA, math.RA. Level 4: research.

**Definition.** An ordered field has the least upper bound property when every nonempty subset that is bounded above has a least upper bound. Up to isomorphism, the real numbers are the only ordered field with this property.

**Problem.** In an ordered field, consider L'Hôpital's rule, Taylor's theorem with Peano remainder and the limit-of-derivatives property. Each of them holds for all functions exactly when the field has the least upper bound property.

**How the definition helps.** The usual proofs of these rules go through the mean value theorem, which needs suprema to exist; this is our own summary. Our own counterexample in ℚ is f(x) = 0 for x &lt; √2 and f(x) = 1 for x &gt; √2. On ℚ this function has derivative 0 at every point, yet it is not constant. Our own remark is that functions like this break each of the rules, so completeness is forced. In our own reading, the paper's new work is the reverse direction, that each rule implies the least upper bound property.

**Paper or page:** [L'Hôpital's Rule is Equivalent to the Least Upper Bound Property](https://arxiv.org/abs/2505.23092v1). It says: “In an arbitrary ordered field 𝔽, the following are equivalent. (a) Least Upper Bound Property (b) L'Hôpital's Rule (c) Taylor's Theorem with Peano Remainder (d) Limit of Derivatives Property”

**Sources:**

- [Martin Grant, Kyle Hambrook, Alex Rusterholtz, L'Hôpital's Rule is Equivalent to the Least Upper Bound Property, arXiv:2505.23092 (2025)](https://arxiv.org/abs/2505.23092v1)

### Tame ramification kills logarithmic differentials

**Remember:** An invertible ramification index kills the new logarithmic derivative.

*Rules out counterexamples.* MSC 12J20 (General valuation theory for fields). arXiv math.NT, math.AC. Level 4: research.

**Definition.** A henselian discrete valuation extends uniquely to algebraic extensions. A finite extension is tame if its residue field extension is separable, its ramification index e is invertible in the residue field, and its degree is e times the residue degree.

**Problem.** For a finite tame extension of henselian discretely valued fields, the relative logarithmic differentials of the valuation rings vanish. These are the differentials together with symbols dlog x, where x dlog x = dx.

**How the definition helps.** Tameness makes the coefficient of the new logarithmic derivative invertible. In our own explanation, the lifted separable residue extension contributes nothing, and a uniformizer s has sᵉ in the lifted base. Taking logarithmic derivatives gives e dlog s = 0, so dlog s = 0. In our own wild example, t = sᵖ over Laurent series in characteristic p, and the operator s d/ds kills every series in t but sends dlog s to 1.

**Paper or page:** [Logarithmic differentials on discretely ringed adic spaces](https://arxiv.org/abs/2009.14128). It says: “For any tame extension L\|K of valued fields the logarithmic cotangent complex is trivial.”

**Sources:**

- [Katharina Hübner, Logarithmic differentials on discretely ringed adic spaces (2025), Proposition 3.2](https://doi.org/10.24033/bsmf.2905)
