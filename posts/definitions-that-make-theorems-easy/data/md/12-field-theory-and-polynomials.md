### Centering the roots removes the second term of a polynomial

**Remember:** The centered roots add to zero.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 1: early undergraduate.

**Definition.** To center a polynomial f, shift its variable by the mean m of its roots, counted with repetition. The centered polynomial f(y+m) has roots equal to the old roots minus m, so they add to zero.

**Problem.** Centering gives the unique shift of a nonconstant complex polynomial that makes the coefficient just below its leading term zero.

**How the definition helps.** By Viète’s formula the coefficient below the leading term is minus the leading coefficient times the root sum, so it vanishes exactly when the roots add to zero (our own proof). Shifting by c moves the root mean from m to m − c, so only c = m works. Viète also gives m from the coefficients without finding the roots.

**Paper or page:** [Tschirnhaus Transformation yields Depressed Polynomial](https://proofwiki.org/wiki/Tschirnhaus_Transformation_yields_Depressed_Polynomial). It says: “converts f into a depressed polynomial”

**Sources:** none listed. No primary source with a working link was found.

### The quadratic discriminant measures the height at the vertex

**Remember:** The discriminant is the vertex height scaled by −4a.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 1: early undergraduate.

**Definition.** For a real quadratic f(x) = ax² + bx + c with a ≠ 0 and vertex h = −b/(2a), the discriminant is Δ = −4a·f(h). Since f(x) = a(x − h)² + f(h), the roots solve (x − h)² = Δ/(4a²) (our own).

**Problem.** The complex roots are h ± √Δ/(2a). Positive, zero, and negative Δ give two, one, and no distinct real roots, respectively.

**How the definition helps.** Taking the square root gives h ± √Δ/(2a), and the sign of Δ decides whether that root is real and nonzero (our own proof). Expanding −4a·f(h) recovers b² − 4ac (our own comparison).

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “the roots are distinct and real if Δ &gt; 0, coincide at x = −b/(2a) if Δ = 0”

**Sources:** none listed. No primary source with a working link was found.

### Counting roots with multiplicity makes every degree-n polynomial have n roots

**Remember:** Count a root once for each copy of its linear factor.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 30C15. arXiv math.AC, math.CV. Level 1: early undergraduate.

**Definition.** The multiplicity of a root a of a nonzero polynomial p is the number of times the factor x − a appears in p, that is, the largest k ≥ 1 with (x − a)ᵏ dividing p.

**Problem.** Over the complex numbers, every polynomial of degree n ≥ 1 has exactly n roots, counted with multiplicity.

**How the definition helps.** By the fundamental theorem of algebra, a complex polynomial of degree n splits into n linear factors (our own argument). Counting each root once per factor makes the total n. For example, (x + 4)(x − 1)² has the root −4 once and the root 1 twice.

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “The notion of multiplicity is important to be able to count correctly without specifying exceptions (for example, double roots counted twice).”

**Sources:** none listed. No primary source with a working link was found.

### One comparison polynomial bounds every complex root

**Remember:** Make every lower coefficient negative; its positive root caps all roots.

*True by definition.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 30C15. arXiv math.CV. Level 1: early undergraduate.

**Definition.** Divide a polynomial by its leading coefficient to make it monic. Its comparison polynomial keeps the leading term xⁿ and replaces each lower coefficient by minus its absolute value.

**Problem.** If there is a nonzero lower coefficient, the comparison polynomial has a unique positive root R. Every complex root of the original polynomial has absolute value at most R.

**How the definition helps.** The triangle inequality makes the comparison polynomial at most zero at \|z\| for every root z (our own proof). Divided by xⁿ, it is one minus a strictly decreasing sum, which rises from −∞ to 1 on positive x. So it has a unique positive zero R, and it is negative only below R.

**Wikipedia:** [Geometrical properties of polynomial roots](https://en.wikipedia.org/wiki/Geometrical_properties_of_polynomial_roots). It says: “Descartes' rule of signs shows that the polynomial has exactly one positive real root.”

**Sources:**

- [Augustin-Louis Cauchy, Sur la résolution des équations numériques et sur la théorie de l’élimination, Exercices de mathématiques (1829), §§IV–V](https://upload.wikimedia.org/wikipedia/commons/6/6a/Daugustin_Gauchy_Mathematiques_%28IA_in.ernet.dli.2015.164686%29.pdf)

### Zero coefficients cannot hide sign changes

**Remember:** Skip zeros before counting signs.

*Rules out counterexamples.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 01A45. arXiv math.HO. Level 1: early undergraduate.

**Definition.** The sign count of a real polynomial is the number of sign changes in its list of coefficients in descending degree, after all zero coefficients are deleted.

**Problem.** For a real polynomial with a nonzero constant term, the number of positive roots, counted with multiplicity, equals the sign count minus a nonnegative even integer.

**How the definition helps.** Multiplying by x − a with a &gt; 0 adds at least one sign change, so induction bounds the positive roots by the sign count (our own argument). The signs of the first and last nonzero coefficients fix the parity of both numbers (our own argument). Deleting zeros matters: x² − 1 has a positive root, and its zero middle coefficient must not hide the sign change (our own example).

**Wikipedia:** [Descartes's rule of signs](https://en.wikipedia.org/wiki/Descartes%27s_rule_of_signs). It says: “the number of sign changes in the sequence of the polynomial's coefficients (omitting zero coefficients)”

**Paper or page:** [Gauss's proof of Descartes's rule of signs](https://arxiv.org/abs/2205.04249v2). It says: “Let f(x) be a polynomial with f(0) ≠ 0. There exists a nonnegative even integer ν such that”

**Sources:**

- [Melvyn B. Nathanson, Gauss's proof of Descartes's rule of signs](https://arxiv.org/abs/2205.04249v2)

### Formal differentiation detects repeated roots

**Remember:** A double root makes the derivative vanish there too.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** The formal derivative of ∑ aₖxᵏ is ∑ k·aₖxᵏ⁻¹, defined by this rule with no limits. A root a is repeated when (x − a)² divides the polynomial.

**Problem.** If a is a root of a nonzero polynomial f over a field, then a is a repeated root exactly when f′(a) = 0.

**How the definition helps.** Write f = (x − a)g by the factor theorem, so the product rule gives f′(a) = g(a) (our own). So f′(a) = 0 exactly when x − a divides g, that is, when (x − a)² divides f (our own). The only work is the formal product rule, which follows from the rule on powers (our own).

**Wikipedia:** [Formal derivative](https://en.wikipedia.org/wiki/Formal_derivative). It says: “Formal differentiation is used in algebra to test for multiple roots of a polynomial.”

**Paper or page:** [Double Root of Polynomial is Root of Derivative](https://proofwiki.org/wiki/Double_Root_of_Polynomial_is_Root_of_Derivative). It says: “Then a is a root of f′.”

**Sources:** none listed. No primary source with a working link was found.

### Lagrange basis polynomials isolate data points

**Remember:** Each basis polynomial is one at home, zero elsewhere.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** For n + 1 distinct inputs, the Lagrange basis polynomial of one input is the product of the factors x − xⱼ over the other inputs, divided by its value at that input. So it is 1 at its own input and 0 at every other input (our own).

**Problem.** Choose n + 1 distinct inputs in a field. Exactly one polynomial of degree at most n takes prescribed values from that field at those inputs.

**How the definition helps.** Weight each basis polynomial by its prescribed value and add, to get a solution of degree at most n (our own). Distinct inputs keep every denominator nonzero (our own). The difference of two solutions has degree at most n but n + 1 roots, so it is zero (our own).

**Wikipedia:** [Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial). It says: “The interpolating polynomial is unique.”

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that”

**Sources:** none listed. No primary source with a working link was found.

### Over an algebraically closed field every linear map has an eigenvector

**Remember:** Every polynomial has a root, so every characteristic polynomial does.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 15A18. arXiv math.AC. Level 1: early undergraduate.

**Definition.** A field F is algebraically closed when every non-constant polynomial with coefficients in F has a root in F.

**Problem.** Over an algebraically closed field F, every linear map from Fⁿ to itself has an eigenvector whenever n ≥ 1.

**How the definition helps.** A linear map has an eigenvector exactly when its characteristic polynomial, of degree n ≥ 1, has a root in F, so the theorem is immediate. The article shows the converse, so the eigenvector property is an equivalent definition of algebraic closure. Over ℝ it fails: the rotation of ℝ² by 90° has no eigenvector (our own example).

**Wikipedia:** [Algebraically closed field](https://en.wikipedia.org/wiki/Algebraically_closed_field). It says: “The field F is algebraically closed if and only if, for each natural number n, every linear map from Fⁿ into itself has some eigenvector.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial remainders modulo a linear factor are evaluations

**Remember:** Modulo x − a, every x is a.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Two polynomials over a field F are congruent modulo x − a when x − a divides their difference; in particular, x is congruent to a. The remainder of f modulo x − a is the unique constant congruent to f.

**Problem.** The remainder of a polynomial f on division by x − a is f(a). In particular, x − a divides f exactly when f(a) = 0.

**How the definition helps.** Since x is congruent to a and congruence respects sums and products, f(x) is congruent to the constant f(a) (our own proof). Polynomial division gives exactly one constant in each class, and it is the usual remainder (our own).

**Paper or page:** [Little Bézout Theorem](https://proofwiki.org/wiki/Little_Bézout_Theorem). It says: “Then the remainder of Pₙ(x) when divided by x − a is equal to Pₙ(a).”

**Sources:** none listed. No primary source with a working link was found.

### Every field has a smallest subfield

**Remember:** Keep exactly the elements that every subfield must contain.

*True by definition.* MSC 12E99 (General field theory). arXiv math.AC. Level 1: early undergraduate.

**Definition.** The prime subfield of a field is the intersection of all its subfields, that is, the set of elements that every subfield contains.

**Problem.** Every field has a unique smallest subfield.

**How the definition helps.** The intersection lies inside every subfield, so it is the smallest one as soon as it is a subfield. It is one, because every subfield contains 0 and 1 and is closed under addition, subtraction, multiplication and inverses of nonzero elements (our own proof).

**Paper or page:** [Intersection of All Division Subrings is Prime Subfield](https://proofwiki.org/wiki/Intersection_of_All_Division_Subrings_is_Prime_Subfield). It says: “Let P be the intersection of the set of all division subrings of K. Then P is the prime subfield of K.”

**Sources:** none listed. No primary source with a working link was found.

### As the terminal Archimedean ordered field, the reals are unique by definition

**Remember:** Every Archimedean ordered field maps into the reals in exactly one way.

*True by definition. Confidence: medium.* MSC 12J15 (Ordered fields), 26A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The real numbers are the terminal Archimedean ordered field: every Archimedean ordered field, one with no element above all natural numbers, has exactly one order-preserving field homomorphism into them.

**Problem.** All constructions of the real numbers give the same field, up to a unique isomorphism.

**How the definition helps.** A terminal object is unique up to unique isomorphism by definition. Two terminal fields have unique maps each way, and each composite is the identity, the only endomorphism of a terminal field (our own). So each construction need only prove that its field is terminal.

**nLab:** [real number](https://ncatlab.org/nlab/show/real+number). It says: “We speak of the such field because it is unique up to unique isomorphism by definition of terminal object.”

**Sources:**

- [Fred Richman, Real numbers and other completions, Mathematical Logic Quarterly 54 (2008) 98–108](https://doi.org/10.1002/malq.200710024)

### Conjugate pairs determine the sign of the discriminant

**Remember:** Conjugation flips the sign of the root-difference product once per nonreal pair.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization), 13P15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a polynomial of degree n ≥ 1 with leading coefficient a and complex roots r₁, …, rₙ listed with multiplicity, let D = aⁿ⁻¹ times the product of rᵢ − rⱼ over i &lt; j. The discriminant is D².

**Problem.** For a nonconstant real polynomial with distinct roots, the discriminant has sign (−1)ᵏ when k pairs of roots are nonreal.

**How the definition helps.** Complex conjugation swaps the two roots of each of the k nonreal pairs, and each swap negates D, so the conjugate of D is (−1)ᵏD. So D is real for even k and purely imaginary for odd k, and D ≠ 0 because the roots are distinct. Hence D² has sign (−1)ᵏ.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “If the discriminant is positive, the number of non-real roots is a multiple of 4.”

**Sources:** none listed. No primary source with a working link was found.

### Cosine coordinates solve the cubic with three distinct real roots

**Remember:** The third Chebyshev polynomial triples the angle inside a cosine.

*True by definition.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The third Chebyshev polynomial T₃(z) = 4z³ − 3z is the cubic that triples an angle inside a cosine: T₃(cos θ) = cos 3θ for every real θ.

**Problem.** For t³ − 3a²t − 2b = 0 with a &gt; 0 and \|b\| &lt; a³, let θ = arccos(b/a³). The three roots are 2a cos(θ/3), 2a cos(θ/3 + 2π/3), and 2a cos(θ/3 + 4π/3).

**How the definition helps.** Substituting t = 2az turns the equation into 4z³ − 3z = b/a³, that is, T₃(z) = cos θ (our own proof). So z = cos φ with cos 3φ = cos θ, which gives φ = θ/3, θ/3 + 2π/3 and θ/3 + 4π/3. Since 0 &lt; θ &lt; π, these three cosines are distinct.

**Paper or page:** [Cardano's Formula/Trigonometric Form](https://proofwiki.org/wiki/Cardano's_Formula/Trigonometric_Form). It says: “Then the solutions of P can be expressed as: x₁ = 2√(−Q) cos(θ/3) − b/(3a)”

**Sources:** none listed. No primary source with a working link was found.

### Ferrari’s resolvent reduces a quartic to quadratics

**Remember:** Make the remainder a square, then take a difference of squares.

*True by definition. Confidence: medium.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Ferrari’s resolvent for x⁴ + px² + qx + r is the condition on m that makes (x² + m)² minus the quartic a perfect square in x. That difference is (2m − p)x² − qx + (m² − r), and it is a square when its discriminant vanishes: q² = 4(2m − p)(m² − r).

**Problem.** Suppose q ≠ 0. Over the complex numbers, any root m of this resolvent gives a factorization of the quartic into two quadratics.

**How the definition helps.** With such m, the quartic is (x² + m)² minus a square, a difference of two squares, so it factors into two quadratics. Since q ≠ 0, the resolvent forces 2m − p ≠ 0, so the square is of a genuine linear polynomial (our own proof). The fundamental theorem of algebra supplies a root m of the cubic resolvent.

**Paper or page:** [Ferrari's Method](https://proofwiki.org/wiki/Ferrari's_Method). It says: “Ferrari's Method is a technique for solving this quartic.”

**Sources:** none listed. No primary source with a working link was found.

### Pairing cube roots makes Cardano’s formula valid

**Remember:** Choose the first cube root freely and force the second.

*Rules out counterexamples.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Work over ℂ with p ≠ 0, and let U and V be the roots of z² + qz − p³/27. Cube roots u of U and v of V form a pair when uv = −p/3, the condition that makes the cross term 3uv(u + v) cancel p(u + v).

**Problem.** Each paired sum u + v is a root of x³ + px + q. Taking all three choices of u gives all three roots, counted with multiplicity.

**How the definition helps.** Since u³ + v³ = U + V = −q and 3uv = −p, the sum u + v satisfies x³ + px + q = 0. Each of the three choices of u forces v = −p/(3u), and expanding the three factors x − (u + v) gives the cubic back (our own check). Unpaired choices fail: for x³ − 3x + 2, u = v = (1 + i√3)/2 gives a nonreal sum (our own).

**Wikipedia:** [Cubic equation](https://en.wikipedia.org/wiki/Cubic_equation). It says: “At this point Cardano imposed the condition 3uv + p = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Reciprocal symmetry reduces an even degree equation to half degree

**Remember:** Pair opposite powers, then use x plus its reciprocal.

*Makes the theorem clean to state or prove.* MSC 12D05 (Polynomials in real and complex fields: factorization). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial P of degree 2m is palindromic when its coefficient list reads the same in either order, that is, P(x) = x²ᵐP(1/x). So P(x)/xᵐ is the middle coefficient plus terms cₖ(xᵏ + x⁻ᵏ) (our own).

**Problem.** A palindromic complex polynomial equation of degree 2m reduces to degree m in y = x + 1/x. Each y gives the solutions of x² − yx + 1 = 0.

**How the definition helps.** Each xᵏ + x⁻ᵏ is a polynomial of degree k in y = x + 1/x, since it equals y times the previous sum minus the one before, starting from 2 and y (our own proof). So P(x)/xᵐ is a polynomial of degree m in y. The constant coefficient equals the leading one, so it is nonzero and dividing by xᵐ loses no root.

**Wikipedia:** [Reciprocal polynomial](https://en.wikipedia.org/wiki/Reciprocal_polynomial). It says: “A self-reciprocal polynomial is also called palindromic because its coefficients, when the polynomial is written in the order of ascending or descending powers, form a palindrome.”

**Sources:** none listed. No primary source with a working link was found.

### The Hermite form counts distinct real roots by its signature

**Remember:** Real roots contribute positive squares, while conjugate pairs have zero net signature.

*True by definition.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a real polynomial f of degree n ≥ 1, the Hermite form sends each real polynomial g of degree below n to the sum of g(r)² over the complex roots r of f, counted with multiplicity. A real root contributes a square, while a conjugate pair with g(r) = u + iv contributes 2(u² − v²) (our own).

**Problem.** The signature of the Hermite form equals the number of distinct real roots of f. Signature counts positive squares minus negative squares in a diagonal expression for the form.

**How the definition helps.** Real interpolation lets g take arbitrary real values, and conjugate pairs of values, at the distinct roots, so the form splits into independent pieces (our own proof). A real root of multiplicity m gives m·u², one positive square, and a conjugate pair gives 2m(u² − v²), one positive and one negative square. So the signature is the number of distinct real roots.

**Paper or page:** [Certified Hermite Matrices from Approximate Roots](https://arxiv.org/abs/2110.10313v1). It says: “σ(Hg(ℐ)) = \# {x ∈ Vℝ(ℐ) \| g(x) &gt; 0} − \# {x ∈ Vℝ(ℐ) \| g(x) &lt; 0}.”

**Sources:** none listed. No primary source with a working link was found.

### Asking that −1 is not a sum of squares characterizes orderable fields

**Remember:** Sums of squares miss −1 exactly when an ordering exists.

*Makes the theorem clean to state or prove.* MSC 12D15 (Fields related with sums of squares (formally real fields, Pythagorean fields, etc.)), 12J15. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** A field is formally real if no finite sum of squares of its elements equals −1.

**Problem.** A field can be ordered exactly when −1 is not a sum of squares. Every formally real field also sits inside a real closed field, one with no larger formally real algebraic extension.

**How the definition helps.** Formal reality is the obvious necessary condition (our own), since sums of squares are nonnegative in any ordered field. The Artin–Schreier theorem shows that it is also sufficient, and it gives every formally real field a real closure (our own).

**Wikipedia:** [Formally real field](https://en.wikipedia.org/wiki/Formally_real_field). It says: “It is also easy to see that a field that admits an ordering must satisfy these three properties.”

**Sources:**

- [Emil Artin and Otto Schreier, Algebraische Konstruktion reeller Körper, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927)](https://doi.org/10.1007/bf02952512)

### A monic greatest common divisor does not change when the field grows

**Remember:** Normalize the gcd to be monic and it ignores the field.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13F07. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** The monic greatest common divisor of polynomials P and Q over a field, not both zero, is the common divisor with leading coefficient 1 that every common divisor divides. The Euclidean algorithm computes it from P and Q by division with remainder alone.

**Problem.** If E extends F and P, Q ∈ F\[X\] are not both zero, their monic greatest common divisor over E equals the one over F.

**How the definition helps.** Division of polynomials over F gives the same quotients and remainders in E, so the Euclidean algorithm runs the same in both fields (our own). Both give the same last nonzero remainder, and the monic condition picks the same scalar multiple of it (our own).

**Paper or page:** [GCD of Polynomials does not depend on Base Field](https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field). It says: “Let: gcd {P, Q} = R in F\[X\] gcd {P, Q} = S in E\[X\]. Then R = S. In particular, S ∈ F\[X\].”

**Sources:**

- [ProofWiki, GCD of Polynomials does not depend on Base Field](https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field)

### Defining the discriminant by root differences makes repeated roots visible

**Remember:** A product of squared root gaps vanishes exactly when two roots meet.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** For f of degree n ≥ 2 with leading coefficient a over a field, the discriminant is a²ⁿ⁻² times the product of (rᵢ − rⱼ)² over all i &lt; j. Here r₁, …, rₙ are the roots of f in a splitting field, listed with multiplicity.

**Problem.** The discriminant of f is zero if and only if f has a repeated root. If f has real coefficients and all its roots are real and distinct, the discriminant is positive.

**How the definition helps.** A repeated root gives a zero factor, and a zero product forces a zero factor. For distinct real roots, every squared difference and the even power of a are positive (our own).

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “This expression for the discriminant is often taken as a definition. It makes clear that if the polynomial has a multiple root, then its discriminant is zero,”

**Sources:** none listed. No primary source with a working link was found.

### Eisenstein's square condition rules out two nonconstant factors

**Remember:** p divides all but the leader, and the constant only once.

*Rules out counterexamples.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13B25. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integer polynomial aₙxⁿ + … + a₀ of positive degree is Eisenstein at a prime p when p does not divide aₙ, p divides every other coefficient, and p² does not divide a₀.

**Problem.** A polynomial that is Eisenstein at a prime is irreducible over the rational numbers.

**How the definition helps.** Modulo p the polynomial is the single term aₙxⁿ, so both factors of a factorization reduce to single terms and both constant terms are divisible by p (our own). Their product would have constant term divisible by p², which the definition forbids; Gauss's lemma reduces rational factorizations to integer ones (our own). Without the square condition, x² + 4x + 4 = (x + 2)² passes the other tests at 2 (our own).

**Wikipedia:** [Eisenstein's criterion](https://en.wikipedia.org/wiki/Eisenstein%27s_criterion). It says: “Then Q cannot be written as a product of two non-constant polynomials in D\[x\].”

**Paper or page:** [Schönemann-Eisenstein Theorem](https://proofwiki.org/wiki/Schönemann-Eisenstein_Theorem). It says: “Then f is irreducible in ℚ\[x\].”

**Sources:**

- [G. Eisenstein, Über die Irreductibilität und einige andere Eigenschaften der Gleichung, von welcher die Theilung der ganzen Lemniscate abhängt (1850), pp. 160–179.](https://doi.org/10.1515/crll.1850.39.160)

### Keeping the polynomial degree makes irreducibility lift from a prime modulus

**Remember:** If the leading term survives, every factor keeps its degree.

*Rules out counterexamples.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13B25. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Reducing an integer polynomial modulo a prime p preserves degree when p does not divide its leading coefficient.

**Problem.** If an integer polynomial reduces to an irreducible polynomial of the same degree modulo a prime p, it is irreducible over ℚ.

**How the definition helps.** When the degree survives, every factor keeps its degree, so an integer factorization into nonconstant factors reduces to one modulo p (our own). Gauss's lemma turns any rational factorization into an integer one (our own). Without the degree condition, (2x + 1)(x + 1) reduces to x + 1, which is irreducible modulo 2 (our own).

**Wikipedia:** [Irreducible polynomial](https://en.wikipedia.org/wiki/Irreducible_polynomial). It says: “does not divide the leading coefficient of f”

**Sources:** none listed. No primary source with a working link was found.

### Primitive roots make the degree of a cyclotomic polynomial visible

**Remember:** Count one linear factor for each primitive root.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** The nth cyclotomic polynomial is the product of x − ζ over the primitive nth roots of unity ζ, the complex numbers of order exactly n.

**Problem.** The nth cyclotomic polynomial has degree φ(n), the number of integers from 1 to n that are coprime to n.

**How the definition helps.** The primitive nth roots are the powers ζᵏ of one of them with 1 ≤ k ≤ n and k coprime to n, so the product has φ(n) linear factors (our own). The work moves to proving the product irreducible, which identifies it with the minimal polynomial of one primitive root (our own).

**Wikipedia:** [Cyclotomic polynomial](https://en.wikipedia.org/wiki/Cyclotomic_polynomial). It says: “The degree of Φₙ, or in other words the number of nth primitive roots of unity, is φ(n)”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial definition makes cyclotomic polynomials irreducible

**Remember:** A minimal polynomial cannot factor.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** The nth cyclotomic polynomial is the monic minimal polynomial over ℚ of a complex root of unity of order exactly n.

**Problem.** The nth cyclotomic polynomial is irreducible over ℚ.

**How the definition helps.** A minimal polynomial is irreducible, since a factor of lower degree would also vanish at the chosen root (our own). The work moves to showing that all primitive nth roots are conjugate, so this agrees with the product definition (our own).

**Wikipedia:** [Cyclotomic polynomial](https://en.wikipedia.org/wiki/Cyclotomic_polynomial). It says: “irreducible over the field of the rational numbers.”

**Sources:** none listed. No primary source with a working link was found.

### The recursive definition gives integer coefficients for cyclotomic polynomials

**Remember:** Divide xⁿ − 1 by the cyclotomic factors for all proper positive divisors.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Set Φ₁(x) = x − 1. For n &gt; 1, let Φₙ(x) be xⁿ − 1 divided by the product of Φ<sub>d</sub>(x) over the proper positive divisors d of n.

**Problem.** Every cyclotomic polynomial has integer coefficients.

**How the definition helps.** By induction each Φ<sub>d</sub> is monic with integer coefficients, so long division of xⁿ − 1 by their product introduces no denominators (our own). The division is exact, because grouping the complex roots of xⁿ − 1 by their orders shows that the product divides it.

**Paper or page:** [Cyclotomic Polynomial has Integer Coefficients](https://proofwiki.org/wiki/Cyclotomic_Polynomial_has_Integer_Coefficients). It says: “Then the nth cyclotomic polynomial Φₙ(x) has integer coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### Finite fields as Frobenius fixed fields make intersections use greatest common divisors

**Remember:** A point fixed by two powers is fixed by their greatest common divisor.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Fix an algebraic closure K of 𝔽ₚ with Frobenius map σ(x) = xᵖ. The subfield of K of size pⁿ is the set of elements that σⁿ fixes.

**Problem.** The intersection of the finite subfields of degrees m and n has degree gcd(m, n) over the prime field.

**How the definition helps.** An element lies in both subfields when σᵐ and σⁿ fix it, that is, when the whole group they generate fixes it (our own). By Bézout's identity, that group is generated by σ to the power gcd(m, n) (our own). The work moves to proving that σ is bijective on K and that σⁿ has exactly pⁿ fixed points (our own).

**nLab:** [finite field](https://ncatlab.org/nlab/show/finite+field). It says: “may be defined to be the fixed field of the automorphism σⁿ: K → K.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed points of Frobenius give fields of every prime power size

**Remember:** Fixed points give a field before you count them.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Fix a prime p and put q = pⁿ. In an algebraic closure of 𝔽ₚ, take the elements fixed by the map x ↦ xᑫ, that is, the roots of xᑫ − x.

**Problem.** For every prime p and positive integer n, a field of size pⁿ exists and is unique up to isomorphism.

**How the definition helps.** Raising to the power q preserves sums and products, so its fixed elements form a field (our own). The polynomial xᑫ − x has derivative −1, so it has exactly q distinct roots. In any field of size q every element satisfies xᑫ = x by Lagrange's theorem, so that field is a splitting field of xᑫ − x over 𝔽ₚ, unique up to isomorphism.

**Paper or page:** [Theorem 4.2. (Complete classification of finite fields)](https://venhance.github.io/napkin/Napkin.pdf). It says: “A field $F$ is a finite field with $p<sup>n$</sup> elements if and only if it is a splitting field of $x<sup>p<sup>n</sup>-x$</sup> over $\\FF<sub>p</sub>$.”

**Sources:** none listed. No primary source with a working link was found.

### Surjective Frobenius makes every finite field perfect

**Remember:** On a finite field, injective Frobenius is already onto.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A field of prime characteristic p is perfect when every element has a pth root in it, that is, when the Frobenius map x ↦ xᵖ is onto.

**Problem.** Every finite field is perfect.

**How the definition helps.** Frobenius is a field homomorphism, so it is injective, and an injective map from a finite set to itself is onto (our own).

**Paper or page:** [Theorem 5.6. (Finite fields are perfect)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Suppose F is a field with finitely many elements. Then it is perfect.”

**Sources:** none listed. No primary source with a working link was found.

### A commutative unital ring with exactly two ideals is a field

**Remember:** A field has two ideals, and the zero ring has only one.

*Rules out counterexamples.* MSC 12E99 (General field theory), 13A15. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A field is a commutative ring with 1 ≠ 0 in which every nonzero element a has an inverse, that is, the ideal Ra of multiples of a contains 1.

**Problem.** A commutative ring with unity is a field exactly when its only ideals are {0} and the whole ring, and these two are different.

**How the definition helps.** In a field every nonzero a is a unit, so any ideal containing a contains 1 and hence the whole ring. Conversely, if the only ideals are {0} and R, then Ra = R for a ≠ 0, so ra = 1 for some r (our own). Asking that the two ideals differ excludes the zero ring, just as 1 ≠ 0 does (our own).

**Paper or page:** [Commutative and Unitary Ring with 2 Ideals is Field](https://proofwiki.org/wiki/Commutative_and_Unitary_Ring_with_2_Ideals_is_Field), [Field has 2 Ideals](https://proofwiki.org/wiki/Field_has_2_Ideals), [Non-Commutative Ring with Unity and 2 Ideals not necessarily Division Ring](https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring). It says: “That is, such that (R, +, ∘) has no non-null proper ideals. Then (R, +, ∘) is a field.”

**Sources:**

- [ProofWiki, Commutative and Unitary Ring with 2 Ideals is Field](https://proofwiki.org/wiki/Commutative_and_Unitary_Ring_with_2_Ideals_is_Field)
- [ProofWiki, Field has 2 Ideals](https://proofwiki.org/wiki/Field_has_2_Ideals)
- [ProofWiki, Non-Commutative Ring with Unity and 2 Ideals not necessarily Division Ring](https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring)

### Sending 1 to 1 makes every field homomorphism injective

**Remember:** A field map that keeps 1 cannot collapse anything.

*Rules out counterexamples.* MSC 12E99 (General field theory), 13B10, 13A35. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A unital field homomorphism f from K to L respects sums and products and sends 1 to 1, so it cannot send all of K to 0.

**Problem.** Every homomorphism between fields that sends 1 to 1 is injective. So a surjective one is an isomorphism, and the Frobenius map x ↦ xᵖ is injective in characteristic p.

**How the definition helps.** The kernel of f is an ideal of the field K, so it is {0} or K. Since f(1) = 1 ≠ 0, it is {0}, and f is injective. ProofWiki keeps the zero map as a second case, and in our own reading the condition 1 ↦ 1 removes it.

**Paper or page:** [Field Homomorphism is either Trivial or Injection](https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection), [Surjective Field Homomorphism is Field Isomorphism](https://proofwiki.org/wiki/Surjective_Field_Homomorphism_is_Field_Isomorphism), [Frobenius Endomorphism on Field is Injective](https://proofwiki.org/wiki/Frobenius_Endomorphism_on_Field_is_Injective). It says: “Then φ is either an injection or the trivial homomorphism.”

**Sources:**

- [ProofWiki, Field Homomorphism is either Trivial or Injection](https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection)
- [ProofWiki, Surjective Field Homomorphism is Field Isomorphism](https://proofwiki.org/wiki/Surjective_Field_Homomorphism_is_Field_Isomorphism)
- [ProofWiki, Frobenius Endomorphism on Field is Injective](https://proofwiki.org/wiki/Frobenius_Endomorphism_on_Field_is_Injective)

### The group exponent makes finite multiplicative subgroups cyclic

**Remember:** The exponent is the one power that kills every element.

*True by definition.* MSC 12E99 (General field theory), 12E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The exponent e of a finite group is the least positive integer such that the eth power of every element is 1. It is the least common multiple of the element orders.

**Problem.** Every finite subgroup of the multiplicative group of a field is cyclic.

**How the definition helps.** Every element of the subgroup is a root of xᵉ − 1, which has at most e roots in a field, so the subgroup has at most e elements (our own). The structure theorem for finite abelian groups gives an element of order e. Its e powers then fill the subgroup (our own).

**nLab:** [root of unity](https://ncatlab.org/nlab/show/root+of+unity). It says: “Let G be a finite subgroup of the multiplicative group k∗ of a field k. Then G is cyclic.”

**Sources:** none listed. No primary source with a working link was found.

### A normal closure is the field generated by all conjugates

**Remember:** Collect every image before asking for normality.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Inside a fixed algebraic closure, the normal closure of a finite extension E/F is the field generated by all images of E under embeddings that fix F.

**Problem.** The normal closure of a finite extension is the unique smallest normal extension of the base containing it inside the chosen algebraic closure.

**How the definition helps.** Every normal field containing E must contain each such image, so the generated field lies inside every candidate (our own). The images contain all roots of the minimal polynomials of finitely many generators of E, by the theorem that extends embeddings to the algebraic closure. Those roots generate the field, so it is a splitting field and hence normal.

**Paper or page:** [Lemma 9.16.3.](https://stacks.math.columbia.edu/tag/09DT). It says: “There exists a unique smallest finite extension K/E such that K is normal over F.”

**Sources:** none listed. No primary source with a working link was found.

### Adjoining a root by a quotient makes its embeddings easy

**Remember:** To map the field, choose where its new root goes.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a algebraic over F with minimal polynomial m, model F(a) as F\[x\]/(m): polynomials over F, two being equal when m divides their difference, with x standing for a.

**Problem.** For each extension L/F, evaluation at a bijects the F-embeddings F(a) → L with the roots of m in L.

**How the definition helps.** An F-embedding of F\[x\]/(m) into L is fixed by where it sends x, and that image must be a root of m. Conversely, evaluation at a root b of m in L gives the same value on polynomials that differ by a multiple of m, so it is a well-defined embedding (our own). The work lies in identifying F(a) with the quotient.

**Paper or page:** [Universal Property for Simple Field Extensions](https://proofwiki.org/wiki/Universal_Property_for_Simple_Field_Extensions). It says: “Then there exists a unique field homomorphism ψ : K(α) → L extending φ that sends α to β.”

**Sources:** none listed. No primary source with a working link was found.

### Algebraicity makes algebraic closures unique up to isomorphism

**Remember:** An algebraic closure leaves no room for independent variables.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic closure of F is an algebraically closed field, one where every nonconstant polynomial has a root, in which every element is a root of a nonzero polynomial over F.

**Problem.** Any two algebraic closures of F are isomorphic by a map that fixes F.

**How the definition helps.** The embedding theorem gives a map over F from one closure into the other, and its image is algebraically closed (our own). The target is algebraic over this image, so the image is everything (our own). Without algebraicity, ℂ and an algebraic closure of ℂ(t) are not isomorphic over ℂ (our own).

**Paper or page:** [Lemma 9.10.6.](https://stacks.math.columbia.edu/tag/09GV). It says: “Any two algebraic closures of a field are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Constructible numbers sit at the top of towers of degree-2 steps

**Remember:** Constructible means reached from ℚ by finitely many square-root steps.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M04. arXiv math.AC, math.MG. Level 2: later undergraduate.

**Definition.** A real number is constructible from a unit segment when it lies at the top of a finite tower of real fields that starts at ℚ, each field of degree two over the one before.

**Problem.** Doubling the cube and trisecting a general angle are impossible with straightedge and compass (Wantzel, 1837).

**How the definition helps.** By the tower law, a constructible number has degree over ℚ dividing the degree of its tower, a power of two (our own). Doubling a unit cube needs ∛2, and trisecting 60° needs cos 20°, and both have degree three.

**Wikipedia:** [Constructible number](https://en.wikipedia.org/wiki/Constructible_number). It says: “It follows from this decomposition that the degree of the field extension \[ℚ(γ):ℚ\] is 2ʳ, where r counts the number of quadratic extension steps.”

**Sources:**

- [P. L. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, Journal de Mathématiques Pures et Appliquées 2 (1837), 366–372](http://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Defining field trace as a matrix trace makes it linear

**Remember:** The trace of multiply-by-a is linear in a.

*True by definition.* MSC 12F05 (Algebraic field extensions), 11R04. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite extension L/K, the trace of an element a of L is the matrix trace of the K-linear map on L that multiplies by a.

**Problem.** The field trace is linear over the base field.

**How the definition helps.** Multiplication by xa + yb is x times multiplication by a plus y times multiplication by b, so linearity of matrix trace gives the theorem (our own). With the other definition, a sum of the roots of the minimal polynomial counted \[L : K(a)\] times, the roots for a + b are not sums of roots for a and b (our own). The Napkin proves that the two definitions agree for number fields.

**Paper or page:** [Theorem 2.8. (Morally correct definition of norm and trace)](https://venhance.github.io/napkin/Napkin.pdf). It says: “the trace of α equals the trace”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal extensions as splitting fields makes composita normal

**Remember:** Combine the polynomial families to combine their splitting fields.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** A normal extension of K is a splitting field of some family of polynomials over K, the field generated over K by all their roots.

**Problem.** The compositum of normal algebraic extensions in a common algebraic closure is normal. The compositum is the smallest field containing them all.

**How the definition helps.** The compositum is generated by all roots of the union of the families, so it is again a splitting field (our own). The work moves to proving that splitting fields meet the other test, that every irreducible polynomial over K with one root in the field splits there (our own).

**nLab:** [normal field extension](https://ncatlab.org/nlab/show/normal+field+extension). It says: “A field extension K ⊂ L is said to be normal if L is the splitting field of a family of polynomials in K\[x\].”

**Sources:** none listed. No primary source with a working link was found.

### Finite coefficient fields make algebraic extensions transitive

**Remember:** Collect the coefficients first, then adjoin the root.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An element is algebraic over a field when it is a root of a nonzero polynomial over that field. Equivalently, adjoining it gives an extension of finite degree.

**Problem.** An algebraic extension of an algebraic extension is algebraic over the original base field.

**How the definition helps.** An element a of E satisfies a polynomial over F with finitely many coefficients, each algebraic over K, so they generate a finite extension F₀ of K (our own). Then F₀(a) is finite over F₀, so finite over K by the tower law, and a is algebraic over K (our own). The work is the equivalence between the polynomial test and finite degree (our own).

**Paper or page:** [Transitivity of Algebraic Extensions](https://proofwiki.org/wiki/Transitivity_of_Algebraic_Extensions). It says: “Let E / F / K be a tower of field extensions. Let E be algebraic over F. Let F be algebraic over K. Then E is algebraic over K.”

**Sources:** none listed. No primary source with a working link was found.

### Finite degree forces every element to satisfy a polynomial

**Remember:** In finite dimension, powers must become dependent.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A field extension has finite degree if it has a finite basis over its base field. An element is algebraic if some nonzero polynomial over the base field vanishes at it.

**Problem.** Every finite-degree field extension is algebraic, meaning that all its elements are algebraic over the base field.

**How the definition helps.** In dimension d, the first d + 1 powers of any element, starting with 1, must be linearly dependent (our own). Their dependence gives a polynomial equation with coefficients in the base field.

**Paper or page:** [Lemma 9.8.5.](https://stacks.math.columbia.edu/tag/09GG). It says: “A finite extension is algebraic.”

**Sources:** none listed. No primary source with a working link was found.

### Finite extensions keep algebraic elements closed under field operations

**Remember:** Put two algebraic elements in one finite field extension.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call an element of E algebraic over F when it lies in some finite extension of F inside E. This agrees with the usual test, a nonzero polynomial over F that vanishes at it.

**Problem.** In any field extension E/F, the elements algebraic over F form a field. Any finite set of these elements generates a finite extension of F.

**How the definition helps.** Adjoining algebraic elements one at a time gives finite steps, so by the tower law F(a, b) is finite over F (our own). So a ± b, ab and a/b lie in a finite extension and are algebraic. The same argument shows that any finite set generates a finite extension.

**Paper or page:** [Lemma 9.8.7.](https://stacks.math.columbia.edu/tag/09GI). It says: “Then the elements of E algebraic over k form a subextension of E/k.”

**Sources:** none listed. No primary source with a working link was found.

### Matrices of multiplication make trace transitive in towers

**Remember:** Taking the trace of diagonal blocks is taking trace in two stages.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a finite field extension E/F and an element a of E, multiplication by a is an F-linear map on E. Its matrix trace, the sum of its diagonal entries, is the field trace of a.

**Problem.** In a tower of finite field extensions, the trace from the largest field to the smallest equals the composition of the two intermediate traces.

**How the definition helps.** Build a basis of E over F from products of a basis of E over the middle field and one of the middle field over F (our own). The matrix of a over F then has one block for each entry of its matrix over the middle field, namely that entry's matrix over F. The full trace sums the traces of the diagonal blocks, which by linearity is the lower trace of the upper trace.

**Paper or page:** [Lemma 9.20.5.](https://stacks.math.columbia.edu/tag/0BIJ). It says: “Let M/L/K be a tower of finite extensions of fields. Then Trace₍M/K₎ = Trace₍L/K₎ ∘ Trace₍M/L₎”

**Sources:** none listed. No primary source with a working link was found.

### Norms as products over embeddings compose down towers of separable extensions

**Remember:** Group the conjugates by their restriction to the middle field.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite separable extension L/K and an algebraic closure Ω of K, the norm of an element a of L is the product of its images σ(a) under all K-embeddings σ from L into Ω.

**Problem.** Take finite separable extensions K ⊂ L ⊂ M. The norm from M to K is the norm from M to L followed by the norm from L to K.

**How the definition helps.** Group the K-embeddings of M by their restriction τ to L (our own). Extending τ to an automorphism of Ω and composing with the L-embeddings of M gives exactly the embeddings above τ, so their product is τ applied to the norm from M to L. Multiplying over all τ gives the norm from L to K of that norm (our own).

**Paper or page:** [Lemma 9.20.5.](https://stacks.math.columbia.edu/tag/0BIJ). It says: “Let M/L/K be a tower of finite extensions of fields.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial remainders give the degree of a simple algebraic extension

**Remember:** A root of degree d needs just d powers for a basis.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a monic irreducible polynomial m of degree d over F, the field F\[x\]/(m) consists of polynomials over F, two being equal when m divides their difference. The class of x is a root of m.

**Problem.** If m has degree d, the field generated by a root has degree d over F. The first d powers of the root, starting with 1, form a basis.

**How the definition helps.** Division by m gives each class exactly one remainder of degree below d, so the classes of 1, x, …, xᵈ⁻¹ form a basis (our own). Evaluation at the root identifies this field with the field that the root generates.

**Paper or page:** [Lemma 9.9.2.](https://stacks.math.columbia.edu/tag/09GN). It says: “The degree of the minimal polynomial is \[k(α) : k\].”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic towers rule out doubling the cube

**Remember:** Constructible means reached from ℚ by finitely many square-root steps.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A real length is constructible from a unit segment when it lies at the top of a finite tower of real fields that starts at ℚ, each field of degree two over the one before.

**Problem.** No straightedge and compass construction can double the volume of a given cube by constructing its new edge.

**How the definition helps.** By the tower law, every constructible number has degree a power of two over ℚ (our own). The doubled edge ∛2 is a root of x³ − 2, which has no rational root and so is irreducible, giving degree three. The geometric work is identifying constructible lengths with quadratic towers.

**Paper or page:** [Doubling the Cube by Compass and Straightedge Construction is Impossible](https://proofwiki.org/wiki/Doubling_the_Cube_by_Compass_and_Straightedge_Construction_is_Impossible). It says: “There is no compass and straightedge construction to allow a cube to be constructed whose volume is double that of a given cube.”

**Sources:**

- [P. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, 1837](https://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Quadratic towers rule out squaring the circle

**Remember:** Constructible means reached from ℚ by finitely many square-root steps.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A real length is constructible from a unit segment when it lies at the top of a finite tower of real fields that starts at ℚ, each field of degree two over the one before.

**Problem.** A straightedge and compass cannot construct a square with the area of a given circle.

**How the definition helps.** Every number in a quadratic tower is algebraic, so a constructible side s would make s² = π algebraic (our own). Lindemann’s theorem says that π is transcendental (our own). The other work is identifying constructible lengths with quadratic towers (our own).

**Paper or page:** [Squaring the Circle by Compass and Straightedge Construction is Impossible](https://proofwiki.org/wiki/Squaring_the_Circle_by_Compass_and_Straightedge_Construction_is_Impossible). It says: “There is no compass and straightedge construction to allow a square to be constructed whose area is equal to that of a given circle.”

**Sources:**

- [F. Lindemann, Ueber die Zahl π, 1882](https://doi.org/10.1007/BF01446522)

### Quadratic towers rule out trisecting a 60 degree angle

**Remember:** Constructible means reached from ℚ by finitely many square-root steps.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A real length is constructible from a unit segment when it lies at the top of a finite tower of real fields that starts at ℚ, each field of degree two over the one before.

**Problem.** A straightedge and compass cannot trisect every angle. In particular, they cannot trisect a 60° angle.

**How the definition helps.** By the tower law, every constructible number has degree a power of two over ℚ (our own). Trisecting 60° would make 2 cos 20° constructible, and the triple-angle formula makes it a root of x³ − 3x − 1. Neither 1 nor −1 is a root, so this cubic is irreducible and the number has degree three.

**Paper or page:** [Trisecting the Angle by Compass and Straightedge Construction is Impossible](https://proofwiki.org/wiki/Trisecting_the_Angle_by_Compass_and_Straightedge_Construction_is_Impossible). It says: “There is no compass and straightedge construction for the trisection of the general angle.”

**Sources:**

- [P. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, 1837](https://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Requiring the minimal polynomial to be monic makes it unique

**Remember:** Fix the leading coefficient at 1 and only one polynomial is left.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions), 12E05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The minimal polynomial of α over K is the monic polynomial, one with leading coefficient 1, of smallest degree over K that has α as a root.

**Problem.** For each element α that is algebraic over K, there is exactly one minimal polynomial.

**How the definition helps.** Without the word monic, every nonzero constant multiple of a smallest polynomial would also be smallest. Two monic ones of the same degree differ by a polynomial of lower degree that vanishes at α, so the difference is 0 (our own).

**Paper or page:** [Minimal Polynomial is Unique](https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique). It says: “Let α ∈ L be algebraic over K. Then the minimal polynomial of α over K is unique.”

**Sources:**

- [ProofWiki, Minimal Polynomial is Unique](https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique)

### Root generators make splitting fields unique

**Remember:** A splitting field contains all the roots and no extra generators.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A splitting field of a nonconstant polynomial is an extension where the polynomial factors into linear factors and its roots generate the field.

**Problem.** Any two splitting fields of a nonconstant polynomial are isomorphic over its coefficient field.

**How the definition helps.** The extension theorem gives an embedding over the base of the first splitting field into an algebraic closure containing the second (our own). It sends the roots in the first field bijectively onto the roots in the second. Those roots generate the second field, so the embedding is onto (our own).

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

**Definition.** For a finite extension L/K, the norm of an element a of L is the determinant of the K-linear map on L that multiplies by a.

**Problem.** The norm of a product equals the product of the norms.

**How the definition helps.** Multiplying by b and then by a is multiplying by ab, so the product rule for determinants gives the theorem (our own). With the other definition, a product of the roots of the minimal polynomial counted \[L : K(a)\] times, the roots for ab are not products of roots for a and b (our own). The work moves to proving that the two definitions agree (our own).

**Wikipedia:** [Field norm](https://en.wikipedia.org/wiki/Field_norm). It says: “is defined as the determinant of this linear transformation.”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial generates all polynomial relations

**Remember:** Every equation for a is a multiple of its minimal polynomial.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The minimal polynomial of an algebraic element a is the monic generator of the ideal of polynomials that vanish at a, so every such polynomial is a multiple of it.

**Problem.** Every polynomial over the base field that vanishes at a is divisible by the minimal polynomial of a.

**How the definition helps.** A generator of an ideal divides every member of it (our own). For the usual least-degree definition, divide a vanishing polynomial by the minimal polynomial. The remainder also vanishes at a, so minimality forces it to be zero.

**Paper or page:** [Polynomial with Algebraic Number as Root is Multiple of Minimal Polynomial](https://proofwiki.org/wiki/Polynomial_with_Algebraic_Number_as_Root_is_Multiple_of_Minimal_Polynomial). It says: “Then P(x) is a multiple of the minimal polynomial m(x) in z over F.”

**Sources:** none listed. No primary source with a working link was found.

### The polynomial root definition keeps algebraically closed fields infinite

**Remember:** Every nonconstant polynomial must have a root inside the field.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A field is algebraically closed when every nonconstant polynomial over it has a root in it.

**Problem.** Every algebraically closed field is infinite.

**How the definition helps.** In a finite field, the product of x − a over all elements a, plus 1, is a nonconstant polynomial equal to 1 everywhere, so it has no root (our own). The equivalent definition, no proper algebraic extension, follows by adjoining roots.

**Paper or page:** [Algebraically Closed Field is Infinite](https://proofwiki.org/wiki/Algebraically_Closed_Field_is_Infinite). It says: “Then F is infinite.”

**Sources:** none listed. No primary source with a working link was found.

### The root test makes intersections of normal extensions normal

**Remember:** Normal means one root inside pulls in all its conjugates.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension L of K is normal if every irreducible polynomial over K with one root in L has all its roots in L.

**Problem.** Let E and F be normal extensions of K in a common field. Then E ∩ F is normal over K.

**How the definition helps.** If an irreducible polynomial over K has a root in E ∩ F, then all its roots lie in E and all lie in F (our own). Inside the common field these roots are the same elements, so they lie in E ∩ F.

**Wikipedia:** [Normal extension](https://en.wikipedia.org/wiki/Normal_extension). It says: “If E and F are normal extensions of K contained in L, then the compositum EF and E ∩ F are also normal extensions of K.”

**Sources:** none listed. No primary source with a working link was found.

### Tower degrees multiply because bases multiply

**Remember:** Multiply basis elements to multiply degrees.

*True by definition.* MSC 12F05 (Algebraic field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The degree \[E : F\] of a field extension is the dimension of E as a vector space over F, the size of a basis.

**Problem.** For finite field extensions L/E and E/F, the degree of L/F is the product of their degrees.

**How the definition helps.** If the aᵢ form a basis of L over E and the bⱼ a basis of E over F, the products aᵢbⱼ form a basis of L over F (our own). Expand an element in the aᵢ, then each coefficient in the bⱼ. Uniqueness at both steps gives independence.

**Paper or page:** [Lemma 9.7.7.](https://stacks.math.columbia.edu/tag/09G9). It says: “Suppose given a tower of fields F/E/k. Then \[F:k\] = \[F:E\]\[E:k\]”

**Sources:** none listed. No primary source with a working link was found.

### A primitive root turns cyclotomic automorphisms into multiplication modulo n

**Remember:** Each symmetry raises the one generator ζ to a coprime power.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 11R18. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** The nth cyclotomic field is ℚ(ζ), generated by one complex root of unity ζ of exact order n. So an automorphism is fixed by where it sends ζ, and it must send ζ to some ζᵏ with k coprime to n (our own).

**Problem.** The Galois group of the nth cyclotomic field is isomorphic to the multiplicative group of invertible residues modulo n.

**How the definition helps.** Sending an automorphism to its exponent k gives an injective map to (ℤ/nℤ)ˣ, and composition multiplies exponents (our own). The work is the irreducibility of the cyclotomic polynomial, which makes every such k occur (our own).

**Wikipedia:** [Cyclotomic field](https://en.wikipedia.org/wiki/Cyclotomic_field). It says: “the multiplicative group (ℤ/nℤ)ˣ, which consists of the invertible residues modulo n”

**Sources:** none listed. No primary source with a working link was found.

### Artin–Schreier polynomials replace roots in degree equal to the characteristic

**Remember:** Shift one Artin–Schreier root by 1 to get the next.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 12E10. arXiv math.NT. Level 2: later undergraduate.

**Definition.** Over a field K of prime characteristic p, an Artin–Schreier polynomial is xᵖ − x − a with a ∈ K. If u is one root, the roots are u, u + 1, …, u + p − 1, because xᵖ − x is additive and vanishes on 𝔽ₚ (our own).

**Problem.** Every Galois extension of degree p of a field of characteristic p is the splitting field of an Artin–Schreier polynomial.

**How the definition helps.** Take a generator σ of the Galois group of order p; since 1 has trace zero, additive Hilbert 90 gives u with σ(u) = u + 1. Then u generates the extension, and its conjugates u + i make it a root of xᵖ − x − a with a = uᵖ − u in K (our own).

**Wikipedia:** [Artin–Schreier theory](https://en.wikipedia.org/wiki/Artin%E2%80%93Schreier_theory), [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “Artin–Schreier theory is a branch of Galois theory, specifically a positive characteristic analogue of Kummer theory, for Galois extensions of degree equal to the characteristic p.”

**Sources:**

- [Emil Artin and Otto Schreier, Eine Kennzeichnung der reell abgeschlossenen Körper, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927)](https://doi.org/10.1007/BF02952522)
- [Ernst Witt, Zyklische Körper und Algebren der Charakteristik p vom Grad pⁿ, Journal für die reine und angewandte Mathematik 176 (1937)](https://doi.org/10.1515/crll.1937.176.126)

### Asking for separability makes the Galois correspondence work

**Remember:** Galois extensions split each minimal polynomial completely, with distinct roots.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic extension E/F is Galois when the minimal polynomial over F of every element of E splits into distinct linear factors in E. The word distinct is separability, and it makes the number of automorphisms equal the degree.

**Problem.** For a finite Galois extension E/F, the intermediate fields correspond bijectively to the subgroups of its Galois group. The group has order \[E : F\].

**How the definition helps.** With distinct roots, a finite Galois extension has exactly \[E : F\] automorphisms, and the fundamental theorem of Galois theory gives the correspondence. Without separability this fails: 𝔽ₚ(x) over 𝔽ₚ(xᵖ) has degree p but only the identity automorphism, since x is the only pth root of xᵖ (our own example).

**Wikipedia:** [Separable extension](https://en.wikipedia.org/wiki/Separable_extension). It says: “the fundamental theorem of Galois theory is a theorem about normal extensions, which remains true in non-zero characteristic only if the extensions are also assumed to be separable.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic zero prevents inseparable irreducible polynomials

**Remember:** In characteristic zero, a nonconstant polynomial cannot have zero derivative.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An irreducible polynomial f is separable when it has no repeated roots in a splitting field, which holds exactly when f and its derivative f′ have no common factor. In characteristic zero, where no positive multiple of 1 is zero, a nonconstant f has nonzero f′ of lower degree (our own).

**Problem.** Over a field of characteristic zero, every irreducible polynomial is separable. Thus every algebraic extension of such a field is separable.

**How the definition helps.** An irreducible f shares a factor with f′ only if f divides f′, which a nonzero f′ of lower degree prevents. In characteristic 2, x² − t over 𝔽₂(t) is irreducible, but its derivative is 0 and its two roots coincide.

**Paper or page:** [Lemma 9.12.1.](https://stacks.math.columbia.edu/tag/09H0). It says: “The second case can only happen if F has characteristic p &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugating subgroups makes normal intermediate fields easy to recognize

**Remember:** Moving a subgroup moves its fixed field in the same way.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a finite Galois extension L/K, each subgroup H of the Galois group G matches its fixed field, the elements every map in H fixes. Moving the field by σ ∈ G matches conjugating the subgroup: σ(Fix H) = Fix(σHσ⁻¹) (our own).

**Problem.** For a finite Galois extension L/K, an intermediate field is Galois over K exactly when its corresponding subgroup is normal.

**How the definition helps.** An intermediate field M is Galois over K exactly when σ(M) = M for every σ ∈ G (our own). By the matching, this says σHσ⁻¹ = H for every σ, which is normality of H (our own).

**Paper or page:** [Theorem 9.21.7.](https://stacks.math.columbia.edu/tag/09DW). It says: “The normal subgroups H of G correspond exactly to those subextensions M with M/K Galois.”

**Sources:** none listed. No primary source with a working link was found.

### Counting embeddings as separable degree makes separable degrees multiply in towers

**Remember:** Count embeddings by the intermediate field, then count the extensions of each.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 12F15. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite extension K/F, fix an algebraic closure Ω of F. The separable degree of K/F counts the embeddings K → Ω that fix every element of F.

**Problem.** Take finite extensions F ⊂ M ⊂ K. The separable degree of K over F is the product of those of K over M and M over F.

**How the definition helps.** Sort the embeddings of K by their restrictions to M (our own). Each embedding of M extends to K in exactly \[K : M\]ₛ ways (our own). The work is this extension count and Stacks Lemma 9.14.8, which matches the count with the other definitions.

**Paper or page:** [Lemma 9.14.8.](https://stacks.math.columbia.edu/tag/09HJ). It says: “Then \[K : F\]ₛ = \|Morꜰ(K, F̄)\|.”

**Sources:** none listed. No primary source with a working link was found.

### Counting embeddings makes separability pass through finite towers

**Remember:** Separable means the embedding count reaches its maximum, the degree.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite extension E/F is separable when its number of embeddings into an algebraic closure fixing F equals its degree, the largest possible count.

**Problem.** In a finite tower L/E/F, the extension L/F is separable exactly when L/E and E/F are separable.

**How the definition helps.** Embedding counts and degrees both multiply in a tower (our own). Each count is at most its degree, so the products are equal only if both steps are equal. The work is the multiplication of counts and their match with the distinct-root test.

**Paper or page:** [Lemma 9.12.12.](https://stacks.math.columbia.edu/tag/09HB). It says: “Let E/k and F/E be separable algebraic extensions of fields. Then F/k is a separable extension of fields.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclotomic fields make regular polygons a power of two test

**Remember:** A polygon is constructible when its vertex field has 2-power degree.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 51M15. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** For n ≥ 3, the nth cyclotomic field ℚ(ζ) is generated by ζ = e<sup>(2πi/n)</sup>, a vertex of the regular n-gon on the unit circle. It has degree φ(n) over ℚ and an abelian Galois group, and constructing the polygon means reaching ζ by a tower of quadratic extensions (our own).

**Problem.** A regular polygon with n sides can be constructed with straightedge and compass exactly when φ(n) is a power of two. Here φ(n) counts the integers from 1 to n that are coprime to n.

**How the definition helps.** The tower law makes φ(n) a power of two necessary. Conversely, a group whose order is a power of two has a chain of subgroups of successive index two. The Galois correspondence turns that chain into the quadratic tower.

**Wikipedia:** [Constructible polygon](https://en.wikipedia.org/wiki/Constructible_polygon). It says: “Wantzel's result comes down to a calculation showing that φ(n) is a power of 2 precisely in the cases specified.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Galois extensions by fixed fields frees Galois theory from primitive elements

**Remember:** Start with the symmetries; the field they fix is the base.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** Given a finite group G of automorphisms of a field E, its fixed field F is the set of elements of E that every element of G fixes. Artin starts Galois theory from such a pair, not from a polynomial or a primitive element.

**Problem.** If G is a finite group of automorphisms of E with fixed field F, then E over F is a Galois extension. Its degree equals the order of G, and its Galois group is G.

**How the definition helps.** Starting from G turns the degree count into linear algebra: distinct field homomorphisms are linearly independent, which gives \[E : F\] = \|G\| (our own). No primitive element is needed, unlike the older route through one generator's minimal polynomial (our own).

**Wikipedia:** [Primitive element theorem](https://en.wikipedia.org/wiki/Primitive_element_theorem), [Galois extension](https://en.wikipedia.org/wiki/Galois_extension). It says: “Emil Artin reformulated Galois theory in the 1930s without relying on primitive elements.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius powers give every automorphism of a finite field

**Remember:** Frobenius over a field of size q raises each element to the qth power.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a finite field F of size q, the Frobenius map sends x to x to the power q. It is an automorphism of every finite extension that fixes F, and its kth power fixes exactly the roots of the polynomial x<sup>(qᵏ)</sup> − x.

**Problem.** The Galois group of an extension of finite fields of degree n is cyclic of order n and is generated by the Frobenius map.

**How the definition helps.** In a degree n extension, which has qⁿ elements, the nth power of Frobenius fixes everything. For 0 &lt; k &lt; n, the kth power fixes at most qᵏ elements, so it is not the identity. So Frobenius has order n, the largest possible size of the Galois group (our own).

**Paper or page:** [Corollary 5.23.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “If K is a finite field, then Gal(K/F) is cyclic, generated by the Frobenius automorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Kummer theory needs the n-th roots of unity in the base field

**Remember:** Each symmetry multiplies an nth root by a root of unity.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** Let K contain n distinct nth roots of unity. A Kummer extension of exponent dividing n is generated over K by nth roots of elements of K, so each automorphism multiplies such a root by a root of unity in K.

**Problem.** If K contains n distinct n-th roots of unity, every abelian extension of exponent dividing n comes from adjoining n-th roots. These extensions match subgroups of K× modulo n-th powers.

**How the definition helps.** Sending σ to σ(α)/α makes the Galois group act through roots of unity, so it is abelian of exponent dividing n (our own). The extension depends only on the subgroup of K×/(K×)ⁿ that the radicands generate, and the Kummer correspondence matches these subgroups with such abelian extensions (our own).

**Wikipedia:** [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “Taking n = 3, there are no degree 3 Kummer extensions of the rational number field Q, since for three cube roots of 1 complex numbers are required.”

**Sources:**

- [David Hilbert, Die Theorie der algebraischen Zahlkörper, Jahresbericht der Deutschen Mathematiker-Vereinigung 4 (1897)](http://resolver.sub.uni-goettingen.de/purl?GDZPPN002115344)

### Normality and separability give the full automorphism count

**Remember:** Separability supplies the embeddings, and normality makes them automorphisms.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite extension E/F is Galois when it is normal and separable. For embeddings of E into an algebraic closure that fix F, normality says each one has image E, and separability says there are \[E : F\] of them.

**Problem.** A finite extension is Galois exactly when the number of automorphisms fixing the base field equals its degree.

**How the definition helps.** Together the two conditions give \[E : F\] automorphisms (our own). Conversely, automorphisms are embeddings, and there are at most \[E : F\] embeddings, so equality forces both conditions. The work is the embedding bound and its match with the splitting and distinct-root tests.

**Paper or page:** [Lemma 9.21.2.](https://stacks.math.columbia.edu/tag/09I1). It says: “Then E is Galois over F if and only if \|Aut(E/F)\| = \[E : F\].”

**Sources:** none listed. No primary source with a working link was found.

### Normality makes field automorphisms restrict to intermediate fields

**Remember:** A normal field stays put under every embedding.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic extension M/K is normal if every embedding of M into an algebraic closure of K that fixes K has image exactly M.

**Problem.** In a finite tower L/M/K with M/K normal, every K-automorphism of L restricts to a K-automorphism of M.

**How the definition helps.** The restriction of τ to M is an embedding fixing K, so normality gives τ(M) = M (our own). Without normality this fails: in the splitting field of x³ − 2, some automorphisms move ∛2 to a nonreal root, so they do not preserve ℚ(∛2) (our own). The work is the match of this test with the splitting field definition (our own).

**Paper or page:** [Lemma 9.15.7.](https://stacks.math.columbia.edu/tag/0BME). It says: “If $M/K$ is normal, then any automorphism $\\tau$ of $L/K$ induces an automorphism $\\tau\|<sub>M</sub> : M \\to M$.”

**Sources:** none listed. No primary source with a working link was found.

### Normality makes the automorphisms fix exactly the base field

**Remember:** Every element outside K has a distinct conjugate inside L.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension L/K is normal and separable when every irreducible polynomial over K with one root in L has all its roots in L, and they are distinct. So every element outside K has a different conjugate in L for an automorphism to send it to.

**Problem.** An algebraic extension L of K is normal and separable exactly when the field fixed by all automorphisms of L over K is K itself.

**How the definition helps.** The embedding extension theorem gives an automorphism carrying an element outside K to a different conjugate (our own). Conversely, an element's orbit polynomial has distinct roots in L and coefficients in the fixed field, so a fixed field of K forces both conditions (our own). In ℚ(∛2), the nonreal conjugates are missing, so every ℚ-automorphism fixes ∛2.

**Wikipedia:** [Galois extension](https://en.wikipedia.org/wiki/Galois_extension), [Normal extension](https://en.wikipedia.org/wiki/Normal_extension). It says: “a Galois extension is an algebraic field extension E/F that is normal and separable; or equivalently, E/F is algebraic, and the field fixed by the automorphism group Aut(E/F) is precisely the base field F.”

**Sources:** none listed. No primary source with a working link was found.

### Orbit polynomials expose the irreducible factors

**Remember:** One orbit gives one irreducible factor.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For an element a of a finite Galois extension of F, its orbit is the set of its distinct images under the Galois group. Its orbit polynomial is the product of x − b over the orbit; the group permutes these factors, so it fixes the coefficients (our own).

**Problem.** Suppose a polynomial over F has distinct roots that all lie in a finite Galois extension of F. Its monic irreducible factors are the orbit polynomials of its roots.

**How the definition helps.** The fixed field theorem puts the coefficients in F (our own). The minimal polynomial of a vanishes at every orbit element and divides the orbit polynomial, which has distinct roots, so the two monic polynomials agree.

**Paper or page:** [Minimal Polynomial of Element with Finite Orbit under Group of Automorphisms over Fixed Field in terms of Orbit](https://proofwiki.org/wiki/Minimal_Polynomial_of_Element_with_Finite_Orbit_under_Group_of_Automorphisms_over_Fixed_Field_in_terms_of_Orbit). It says: “Then α is algebraic over F and the product of polynomials p(x) = ∏β ∈ Λ (x − β) is the minimal polynomial of α over F.”

**Sources:** none listed. No primary source with a working link was found.

### Over a perfect field every algebraic extension is separable

**Remember:** Over a perfect field, irreducible polynomials have no repeated roots.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 12F15. arXiv math.NT. Level 2: later undergraduate.

**Definition.** A field K is perfect if every irreducible polynomial over K has distinct roots in a splitting field.

**Problem.** Over a perfect field, every algebraic extension is separable. So for Galois theory over such a field, only normality needs checking.

**How the definition helps.** Every element of an algebraic extension has an irreducible minimal polynomial over K, and perfection gives it distinct roots (our own). That is exactly the separability of the element.

**Wikipedia:** [Perfect field](https://en.wikipedia.org/wiki/Perfect_field), [Separable polynomial](https://en.wikipedia.org/wiki/Separable_polynomial). It says: “Perfect fields are significant because Galois theory over these fields becomes simpler, since the general Galois assumption of field extensions being separable is automatically satisfied over these fields”

**Sources:**

- [Ernst Steinitz, Algebraische Theorie der Körper, Journal für die reine und angewandte Mathematik 137 (1910)](https://doi.org/10.1515/crll.1910.137.167)

### Root differences detect the Galois group of an irreducible cubic

**Remember:** Odd permutations negate the product, but all permutations fix its square.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a monic irreducible cubic over ℚ with roots r₁, r₂, r₃, let δ = (r₁ − r₂)(r₁ − r₃)(r₂ − r₃). Swapping two roots changes the sign of δ, and the discriminant is δ².

**Problem.** The discriminant is a rational square exactly when the Galois group of the cubic is cyclic of order three.

**How the definition helps.** δ is rational exactly when every Galois automorphism fixes it, that is, when every Galois permutation is even (our own). Irreducibility makes the group transitive on the three roots. The only transitive group of even permutations of three roots is cyclic of order three.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “if and only if the Galois group of the cubic equation is the cyclic group of order three.”

**Sources:** none listed. No primary source with a working link was found.

### Root generators make the Galois action faithful

**Remember:** Fix every root and you fix the whole splitting field.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The splitting field of a polynomial is generated over its coefficient field by the roots, so an automorphism that fixes the coefficient field is decided by what it does to the roots.

**Problem.** The Galois group of a polynomial with r distinct roots embeds in the group of permutations of those r roots.

**How the definition helps.** Each such automorphism fixes the coefficients, so it permutes the roots. Two automorphisms that permute the roots in the same way agree on all generators, so they are equal (our own).

**Paper or page:** [Automorphism Group Acts Faithfully on Generating Set](https://proofwiki.org/wiki/Automorphism_Group_Acts_Faithfully_on_Generating_Set). It says: “Then the induced group action on S is faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Separability is what the primitive element theorem needs

**Remember:** Separable means finitely many middle fields, hence one generator.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** A finite extension E of F is separable if the minimal polynomial of each element of E has distinct roots. Then E lies in a finite Galois extension, so by the Galois correspondence it has only finitely many intermediate fields (our own).

**Problem.** Every finite separable extension is generated by a single element. This holds for all number fields and all finite extensions of finite fields.

**How the definition helps.** Steinitz's theorem says that finitely many intermediate fields give a primitive element, one α with E = F(α). Without separability this fails: 𝔽ₚ(T,U) has degree p² over 𝔽ₚ(Tᵖ,Uᵖ), but each element has its pth power in the base, so it generates degree at most p (our own example).

**Wikipedia:** [Primitive element theorem](https://en.wikipedia.org/wiki/Primitive_element_theorem). It says: “When \[E : F\] = p², there may not be a primitive element (in which case there are infinitely many intermediate fields by Steinitz's theorem).”

**Sources:**

- [Ernst Steinitz, Algebraische Theorie der Körper, Journal für die reine und angewandte Mathematik 137 (1910)](https://doi.org/10.1515/crll.1910.137.167)

### Starting from independent roots makes the general Galois group symmetric

**Remember:** With independent roots, every permutation is allowed.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Start with n algebraically independent variables r₁, …, rₙ over ℚ, which satisfy no nonzero polynomial relation, and treat them as roots. The base field is generated by the coefficients of (x − r₁)⋯(x − rₙ), which every permutation of the roots leaves unchanged.

**Problem.** Over this coefficient field, the general monic polynomial of degree n has every root permutation as a Galois automorphism. For n ≥ 5, no formula in radicals solves the general polynomial.

**How the definition helps.** Every permutation of the roots fixes the coefficients and extends to an automorphism of ℚ(r₁, …, rₙ), so the Galois group is the full symmetric group (our own). The theorem on symmetric polynomials makes the coefficients independent, so this is the general polynomial (our own). For n ≥ 5 the symmetric group is not solvable, so Galois's criterion rules out a radical formula (our own).

**Wikipedia:** [Abel–Ruffini theorem](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem). It says: “For proving that the Galois group is 𝒮ₙ, it is simpler to start from the roots.”

**Sources:** none listed. No primary source with a working link was found.

### The power test makes pure inseparability pass through towers

**Remember:** Raising to powers in succession multiplies the exponents.

*True by definition.* MSC 12F15 (Inseparable field extensions), 12F05. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension E of a field F of prime characteristic p is purely inseparable if every element of E, raised to some power pⁿ with n ≥ 0, lands in F.

**Problem.** Let F ⊆ M ⊆ E be fields of characteristic p. If E is purely inseparable over M and M is purely inseparable over F, then E is purely inseparable over F.

**How the definition helps.** If α<sup>(pⁿ)</sup> lies in M and that element raised to pᵐ lies in F, then α<sup>(pⁿ⁺ᵐ)</sup> lies in F (our own). The minimal-polynomial definition gives no direct way to combine the two steps.

**Wikipedia:** [Purely inseparable extension](https://en.wikipedia.org/wiki/Purely_inseparable_extension). It says: “For each element α ∈ E, there exists n ≥ 0 such that \\(\\alpha<sup>p<sup>n</sup>\\in</sup> F\\).”

**Sources:** none listed. No primary source with a working link was found.

### Transcendence makes a simple extension a rational function field

**Remember:** A transcendental element can replace the variable without losing information.

*True by definition.* MSC 12F20 (Transcendental field extensions). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An element a is transcendental over F when no nonzero polynomial over F vanishes at a. So every fraction p(x)/q(x) of polynomials over F with q ≠ 0 can be evaluated at a.

**Problem.** The field generated by one transcendental element over F is isomorphic over F to the rational function field in one variable.

**How the definition helps.** Evaluation at a is therefore a field map from F(x), and field maps are injective (our own). Its image contains F and a and consists of fractions of polynomials in a, so it is F(a).

**Paper or page:** [Structure of Simple Transcendental Field Extension](https://proofwiki.org/wiki/Structure_of_Simple_Transcendental_Field_Extension). It says: “If α is transcendental over K then K(α) ≃ K(X).”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence of absolute values gives Ostrowski's short list

**Remember:** Equivalent absolute values are positive powers of each other.

*Makes the theorem clean to state or prove.* MSC 12J10 (Valued fields), 11S85. arXiv math.NT. Level 2: later undergraduate.

**Definition.** Two absolute values are equivalent if they give the same topology. Equivalently, one is a positive power of the other.

**Problem.** Every nontrivial absolute value on ℚ is equivalent to the real one or to a p-adic one.

**How the definition helps.** Equivalence reduces the claim to a short list, and the proof splits by whether \|n\| is bounded on the integers (our own). If it is, the absolute value is a power of the p-adic one for the one prime with \|p\| &lt; 1 (our own). If not, it is a power of the real one (our own).

**Wikipedia:** [Ostrowski's theorem](https://en.wikipedia.org/wiki/Ostrowski%27s_theorem). It says: “is equivalent to either the usual real absolute value or a p-adic absolute value.”

**Sources:**

- [Alexander Ostrowski, Über einige Lösungen der Funktionalgleichung φ(x)·φ(y) = φ(xy), Acta Mathematica 41 (1916)](https://doi.org/10.1007/bf02422947)

### The ultrametric inequality makes p-adic series converge when terms tend to zero

**Remember:** In ℚₚ, a sum is never bigger than its biggest part.

*True by definition. Confidence: low.* MSC 12J25 (Non-Archimedean valued fields), 26E30. arXiv math.NT, math.CA. Level 2: later undergraduate.

**Definition.** For a prime p, the p-adic absolute value is \|x\|ₚ = p⁻ᵛ, where v is the exponent of p in the rational x, and \|0\|ₚ = 0. It satisfies \|x + y\|ₚ ≤ max(\|x\|ₚ, \|y\|ₚ), and ℚₚ is the completion of ℚ for it.

**Problem.** In ℚₚ, a series converges exactly when its terms tend to 0.

**How the definition helps.** The strong inequality bounds each finite block of terms by its largest term, so terms tending to 0 make the partial sums Cauchy (our own). Completeness then gives convergence. Conversely, the terms of any convergent series tend to 0.

**Paper or page:** [An Infinitely Large Napkin: Calculus: P Adic](https://venhance.github.io/napkin/Napkin.pdf). It says: “A series ∑ xₖ (k = 1 to ∞) in ℚₚ converges to some limit if and only if lim (k → ∞) \|xₖ\|ₚ = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Using base p for p-adic sizes makes the product formula exact

**Remember:** Base p makes each prime's p-adic size exactly cancel its ordinary size.

*True by definition.* MSC 12J25 (Non-Archimedean valued fields), 13A18. arXiv math.NT. Level 2: later undergraduate.

**Definition.** For a nonzero rational r, the p-adic absolute value is \|r\|ₚ = p<sup>(−vₚ(r))</sup>, where vₚ(r) is the exponent of the prime p in r. The base p is chosen so that \|p\|ₚ = 1/p exactly cancels the ordinary size \|p\| = p.

**Problem.** The product formula: for every nonzero rational r, \|r\| · ∏ₚ \|r\|ₚ = 1. In words, the ordinary size of r times all its p-adic sizes is exactly 1.

**How the definition helps.** By unique factorization r = ±∏ pᵏ, and each prime power gives pᵏ to \|r\|, p⁻ᵏ to \|r\|ₚ, and 1 to every other \|r\|<sub>q</sub>. So the whole product is 1. Another base gives the same topology but breaks the exact cancellation (our own).

**Wikipedia:** [P-adic valuation](https://en.wikipedia.org/wiki/P-adic_valuation). It says: “The choice of base p in the exponentiation p<sup>(−νₚ(r))</sup> makes no difference for most of the properties, but supports the product formula”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius groups irreducible factors

**Remember:** Multiply each Frobenius cycle of factors to get one factor over 𝔽<sub>q</sub>.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)). arXiv math.NT. Level 3: graduate.

**Definition.** Factor a squarefree monic polynomial g over 𝔽<sub>q</sub> into monic irreducibles over a larger finite field. The Frobenius map, which raises each coefficient to the qth power, permutes these factors, and a Frobenius orbit is the set of factors it reaches from one factor.

**Problem.** The products of the Frobenius orbits, one product per orbit, are exactly the monic irreducible factors of g over 𝔽<sub>q</sub>.

**How the definition helps.** Frobenius permutes each orbit, so the orbit product has coefficients fixed by Frobenius, which lie in 𝔽<sub>q</sub> (our own). By unique factorization, a monic divisor of g over 𝔽<sub>q</sub> is the product of a Frobenius-invariant set of factors. One orbit has no smaller nonempty invariant set, so its product is irreducible.

**Paper or page:** [Closed formulas for the factorization of Xⁿ−1, the n-th cyclotomic polynomial, Xⁿ−a and f(Xⁿ) over a finite field for arbitrary positive integers n](https://arxiv.org/abs/2306.11183). It says: “Then the factorization of g into monic irreducible polynomials over 𝔽q is given by: ∏(R ∈ ℛ/∼) spin<sub>q</sub>\[R\]”

**Sources:**

- [Anna-Maurin Graner, Closed formulas for the factorization of Xⁿ−1, the n-th cyclotomic polynomial, Xⁿ−a and f(Xⁿ) over a finite field for arbitrary positive integers n](https://arxiv.org/abs/2306.11183)

### Norm forms preserve C₁ under extension

**Remember:** More variables than the degree forces a nonzero zero.

*True by definition.* MSC 12E30 (Field arithmetic). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** A field K is C₁ if every homogeneous polynomial over K whose number of variables exceeds its positive degree has a nonzero zero in K.

**Problem.** Every finite extension of a C₁ field is again C₁.

**How the definition helps.** Take a degree-d form f over L in m &gt; d variables, and write each variable in a basis of L over K (our own). Its norm is a degree-nd form over K in nm &gt; nd variables, with n = \[L : K\], so it has a nonzero zero. At the matching nonzero tuple over L, f has norm zero, so f vanishes there.

**Wikipedia:** [Quasi-algebraically closed field](https://en.wikipedia.org/wiki/Quasi-algebraically_closed_field). It says: “Any algebraic extension of a quasi-algebraically closed field is quasi-algebraically closed.”

**Sources:**

- [Serge Lang, On Quasi Algebraic Closure (1952)](https://doi.org/10.2307/1969785)

### Pseudo-finite fields inherit norm surjectivity

**Remember:** Infinite, yet obeying every first-order law all finite fields obey.

*True by definition. Confidence: medium.* MSC 12E30 (Field arithmetic). arXiv math.LO, math.NT. Level 3: graduate.

**Definition.** A pseudo-finite field is an infinite field that satisfies every first-order sentence, one that quantifies only over field elements, which holds in all finite fields.

**Problem.** The norm from every finite extension of a pseudo-finite field is onto the nonzero elements of the base field.

**How the definition helps.** For a fixed degree, norm surjectivity in all extensions of that degree is one first-order sentence, since irreducibility and the norm as a determinant are expressible (our own). It holds in finite fields, so it holds here. Pseudo-finite fields are perfect, so the primitive element theorem makes every finite extension simple and covered (our own).

**Wikipedia:** [Pseudo-finite field](https://en.wikipedia.org/wiki/Pseudo-finite_field). It says: “an infinite model of the first-order theory of finite fields.”

**Sources:**

- [James Ax, The Elementary Theory of Finite Fields (1968)](https://doi.org/10.2307/1970573)

### Rational points split Brauer classes

**Remember:** Every geometrically integral variety has a point over the field.

*Makes the theorem clean to state or prove.* MSC 12E30 (Field arithmetic). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** A field K is pseudo-algebraically closed if every geometrically integral variety over K, one that stays irreducible and reduced over an algebraic closure, has a point with coordinates in K.

**Problem.** Over a pseudo-algebraically closed field, every finite-dimensional central simple algebra is a matrix algebra. Equivalently, the Brauer group of the field is trivial.

**How the definition helps.** Each central simple algebra has a Severi–Brauer variety, which has a K-point exactly when the algebra is a matrix algebra. Over an algebraic closure this variety becomes projective space, so it is geometrically integral and the defining property gives a point.

**Wikipedia:** [Pseudo algebraically closed field](https://en.wikipedia.org/wiki/Pseudo_algebraically_closed_field). It says: “The Brauer group of a PAC field is trivial, as any Severi–Brauer variety has a rational point.”

**Sources:** none listed. No primary source with a working link was found.

### Defining separable as geometrically reduced makes separability survive base change

**Remember:** Separable means no nilpotents after any change of base field.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 13B40. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** Call a finite extension K of k separable when K ⊗ₖ k′ is reduced, with no nonzero nilpotent elements, for every field extension k′ of k.

**Problem.** Let K be a finite separable extension of k, and let k′ be any extension field of k. Then K ⊗ₖ k′ is a finite product of finite separable extensions of k′.

**How the definition helps.** K ⊗ₖ k′ is reduced and finite over k′, so it is a product of fields (our own). For a further extension k″, each factor tensored with k″ is a factor of the reduced ring K ⊗ₖ k″, so each factor passes the same test (our own). The work is Stacks Lemma 10.44.2, which matches this test with the distinct-root definition.

**Paper or page:** [Lemma 10.44.2.](https://stacks.math.columbia.edu/tag/030W). It says: “K is geometrically reduced over k.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius generates the Galois group of a finite field topologically

**Remember:** Its powers reach every automorphism of each finite layer.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 12E20. arXiv math.NT. Level 3: graduate.

**Definition.** An element σ of the absolute Galois group, with its Krull topology, is a topological generator when the closure of its powers is the whole group. Equivalently, the powers of σ restrict to every automorphism of each finite Galois subextension (our own).

**Problem.** For a finite field with q elements, the absolute Galois group, the Galois group of its separable closure, is the profinite integers, the limit of all ℤ/n. The Frobenius map, which raises each element to the power q, generates it topologically.

**How the definition helps.** Over a finite field, Frobenius generates the cyclic Galois group of each degree-n extension, so it is a topological generator. Restriction reduces exponents modulo divisors of n, so the inverse limit is the profinite integers, with Frobenius matching 1 (our own).

**Wikipedia:** [Absolute Galois group](https://en.wikipedia.org/wiki/Absolute_Galois_group), [Weil group](https://en.wikipedia.org/wiki/Weil_group). It says: “The Frobenius automorphism is a canonical (topological) generator of GK.”

**Sources:**

- [Wolfgang Krull, Galoissche Theorie der unendlichen algebraischen Erweiterungen, Mathematische Annalen 100 (1928)](https://doi.org/10.1007/bf01448872)

### In infinite Galois theory, closed subgroups correspond to intermediate fields

**Remember:** Topologize the Galois group, and only closed subgroups correspond to fields.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory), 20E18. arXiv math.AC, math.GR. Level 3: graduate.

**Definition.** For a Galois extension L/K, possibly infinite, the Krull topology on Gal(L/K) has basic open subgroups Gal(L/E), for each finite subextension E. A subgroup H is closed when it contains every automorphism that agrees on each finite subextension with some member of H.

**Problem.** The intermediate fields of L/K correspond one to one with the closed subgroups of Gal(L/K) in the Krull topology. Under this correspondence, finite subextensions match open subgroups.

**How the definition helps.** A subgroup and its closure fix the same elements, since each element lies in a finite subextension (our own). So only closed subgroups are recovered from fixed fields: in Gal(𝔽̄ₚ/𝔽ₚ), the powers of Frobenius form a proper dense subgroup fixing only 𝔽ₚ (our own). The infinite Galois correspondence recovers every closed subgroup and matches open ones with finite subextensions.

**nLab:** [Galois theory](https://ncatlab.org/nlab/show/Galois+theory). It says: “correspond bijectively to the closed subgroups of”

**Sources:**

- [Hendrik Lenstra, Galois theory for schemes, Mathematisch Instituut, Universiteit van Amsterdam (1985; electronic third edition, Leiden, 2008), Section 2.1](https://websites.math.leidenuniv.nl/algebra/GSchemes.pdf)
- [Wolfgang Krull, Galoissche Theorie der unendlichen algebraischen Erweiterungen, Mathematische Annalen 100 (1928) 687–698](https://doi.org/10.1007/BF01448872)

### Separability prevents degenerate trace pairings

**Remember:** A nonzero trace pairs every nonzero element with something.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 3: graduate.

**Definition.** For a finite field extension L/K, the trace of z is the trace of the K-linear map multiply-by-z on L. The trace pairing sends x and y to the trace of xy, so once some z has nonzero trace, each x ≠ 0 pairs nontrivially with z/x.

**Problem.** The trace pairing (x, y) ↦ trace of xy is nondegenerate exactly when L is separable over K. Nondegenerate means that each nonzero x has some y with trace of xy nonzero.

**How the definition helps.** The trace criterion says the trace map is not identically zero exactly when L/K is separable (our own). If it is zero, every pairing is zero. Over 𝔽₂(t), multiplication by a + b√t has diagonal entries a, a in the basis 1, √t, so its trace 2a is 0 (our own).

**Paper or page:** [Lemma 9.20.7.](https://stacks.math.columbia.edu/tag/0BIL). It says: “L/K is separable, Traceₗ⁄ₖ is not identically zero, and the trace pairing Qₗ⁄ₖ is nondegenerate.”

**Sources:** none listed. No primary source with a working link was found.

### A p-basis gives differential coordinates

**Remember:** Exponents below p, unique expansions, one partial derivative per element.

*Rules out counterexamples.* MSC 12F15 (Inseparable field extensions). arXiv math.AC. Level 3: graduate.

**Definition.** For a field extension K/k of characteristic p &gt; 0, let E be the field generated by k and the pth powers of K. A set B in K is a p-basis when every element of K is uniquely an E-combination of monomials in B with each exponent below p.

**Problem.** The differentials of the elements of a p-basis form a basis of the differential space of K over k.

**How the definition helps.** Unique expansions let us differentiate in each element of B independently, and every element of E has derivative zero. So the differentials of B are independent and span (our own). Without uniqueness this fails: adding tᵖ to t still generates 𝔽ₚ(t), but tᵖ has differential zero (our own).

**Paper or page:** [Power Towers: Purely Inseparable Galois Theory and Foliations in Positive Characteristic](https://arxiv.org/abs/2510.06058). It says: “dxᵢ is a basis of the K-vector space Ω(K/k).”

**Sources:**

- [Przemysław Grabowski, Power Towers: Purely Inseparable Galois Theory and Foliations in Positive Characteristic (2025), Lemma 2.16](https://arxiv.org/abs/2510.06058)

### Building perfect closures from pth roots makes field maps extend uniquely

**Remember:** Each new root has only one possible image.

*True by definition.* MSC 12F15 (Inseparable field extensions). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** The perfect closure of a field k of characteristic p &gt; 0 is the set of x in a fixed algebraic closure with x<sup>(pⁿ)</sup> ∈ k for some n ≥ 0. Each such x is the only pⁿth root of an element of k, because x ↦ xᵖ is injective (our own).

**Problem.** Every homomorphism between fields of characteristic p extends uniquely to a homomorphism between their perfect closures.

**How the definition helps.** A map φ must send the pⁿth root of a to the pⁿth root of φ(a), so the extension is unique (our own). This rule respects sums and products because x ↦ xᵖ does (our own). The work is Stacks Lemma 10.45.4, which shows this is the unique perfect, purely inseparable extension.

**Paper or page:** [Lemma 10.45.4.](https://stacks.math.columbia.edu/tag/046W). It says: “The field extension k′/k is unique up to unique isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Regular extensions stay integral

**Remember:** Test the tensor product once over an algebraic closure.

*True by definition.* MSC 12F20 (Transcendental field extensions). arXiv math.AC. Level 3: graduate.

**Definition.** A field extension L/k is regular if L ⊗ₖ k̄ is an integral domain, a ring with no zero divisors, for an algebraic closure k̄ of k.

**Problem.** For a regular extension L of k and any field extension E of k, E ⊗ₖ L is a domain.

**How the definition helps.** The cited lemma shows that passing this single test makes E ⊗ₖ L a domain for every domain E over k, in particular every field extension. The usual definition, separable with k algebraically closed in L, needs a separate equivalence proof (our own).

**Wikipedia:** [Regular extension](https://en.wikipedia.org/wiki/Regular_extension). It says: “or equivalently, L ⊗ₖ k̄ is an integral domain when k̄ is the algebraic closure of k”

**Paper or page:** [Lemma 10.49.3.](https://stacks.math.columbia.edu/tag/0FWF), [Lemma 10.49.4.](https://stacks.math.columbia.edu/tag/09P9). It says: “Let k be a field. Let S be a geometrically integral k-algebra. Let R be a k-algebra and an integral domain. Then R ⊗ₖ S is an integral domain.”

**Sources:** none listed. No primary source with a working link was found.

### Separating bases leave one algebraic generator

**Remember:** Choose the variables so the algebraic part stays separable.

*Rules out counterexamples.* MSC 12F20 (Transcendental field extensions). arXiv math.AC. Level 3: graduate.

**Definition.** A separating transcendence basis of a finitely generated extension K/k is an algebraically independent set S such that K is separable algebraic over the rational function field k(S).

**Problem.** If a finitely generated field extension admits a separating transcendence basis, one separable element suffices to generate the extension over the resulting rational function field.

**How the definition helps.** Then K is finite and separable over k(S), so the primitive element theorem gives one separable generator. Without separability this fails: tᵖ alone is a transcendence basis of 𝔽ₚ(t), but t has a repeated root over 𝔽ₚ(tᵖ), and no separable element generates (our own).

**Paper or page:** [Lemma 10.42.3.](https://stacks.math.columbia.edu/tag/030Q). It says: “K = k(x₁, …, xᵣ₊₁), and xᵣ₊₁ is separable over k(x₁, …, xᵣ).”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Brauer group as Galois H² makes it torsion

**Remember:** Each Galois class lives on a finite quotient, so Brauer classes have finite order.

*True by definition.* MSC 12G05 (Galois cohomology), 16K50, 20J06. arXiv math.NT, math.RA. Level 3: graduate.

**Definition.** Let G be the absolute Galois group of K, the profinite Galois group of a separable closure Kₛ. The cohomological Brauer group is the continuous cohomology H²(G, Kₛ×), so each class comes from a finite quotient Gal(L/K) (our own).

**Problem.** For every field K, the Brauer group Br(K) is a torsion group.

**How the definition helps.** Positive-degree cohomology of a finite group of order n is killed by n, so each class, coming from some Gal(L/K), is torsion (our own). The comparison theorem identifies this group with classes of central simple algebras (our own).

**Wikipedia:** [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “For an arbitrary field K, the Brauer group can be expressed in terms of Galois cohomology as follows: Br K ≅ H²(K, Gₘ),”

**Paper or page:** [Etale Cohomology, Lemma 59.57.6](https://stacks.math.columbia.edu/tag/0DV3). It says: “Let G be a profinite topological group. Then Hⁱ(G, M) is torsion for i &gt; 0 and any G-module M”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Galois cohomology turns Kummer theory into one long exact sequence

**Remember:** The mth-power map is onto, with kernel μₘ.

*Makes the theorem clean to state or prove.* MSC 12G05 (Galois cohomology), 11R34, 20J06. arXiv math.NT. Level 3: graduate.

**Definition.** For m ≥ 1 nonzero in K and a separable closure Kₛ, the Kummer sequence is the exact sequence 1 → μₘ → Kₛ× → Kₛ× → 1. The map Kₛ× → Kₛ× raises to the mth power, which is onto, with kernel the mth roots of unity μₘ.

**Problem.** For every such K and m, K×/(K×)ᵐ is isomorphic to H¹(K, μₘ) without any root-of-unity hypothesis on K. When K contains all mth roots of unity, cyclic extensions of degree dividing m arise by adjoining mth roots.

**How the definition helps.** The long exact sequence in Galois cohomology gives K×/(K×)ᵐ ≅ H¹(K, μₘ), because Hilbert 90 says H¹(K, Kₛ×) = 0. If μₘ ⊂ K, the action on μₘ is trivial, so classes are continuous characters into μₘ, and their kernels give the cyclic extensions (our own).

**Wikipedia:** [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “By Hilbert's Theorem 90 H¹(L, K̄×) = 0, and hence we get an isomorphism δ: L×/(L×)ᵐ → H¹(L, K̄×\[m\]).”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Group cohomology states Hilbert's Theorem 90 for every Galois group

**Remember:** Cocycles modulo the trivial ones σ(b)/b.

*Makes the theorem clean to state or prove.* MSC 12G05 (Galois cohomology), 20J06. arXiv math.NT. Level 3: graduate.

**Definition.** For a group G acting on a field L, H¹(G, L×) is the group of cocycles f: G → L×, with f(στ) = f(σ)σ(f(τ)), modulo the cocycles σ ↦ σ(b)/b for b ∈ L×.

**Problem.** For a finite Galois extension L/K with group G, H¹(G,L×) is trivial. If σ generates G, every element of norm 1 equals σ(b)/b for some b ∈ L×.

**How the definition helps.** For cyclic G with generator σ, a cocycle is fixed by its value f(σ), which has norm 1, so vanishing of H¹ is the classical statement. For every finite Galois group the proof is short: average a cocycle against independent characters to find b (our own).

**Wikipedia:** [Hilbert's Theorem 90](https://en.wikipedia.org/wiki/Hilbert%27s_Theorem_90). It says: “the first cohomology group of G, with coefficients in the multiplicative group of L, is trivial”

**Sources:**

- [Emmy Noether, Der Hauptgeschlechtssatz für relativ-galoissche Zahlkörper, Mathematische Annalen 108 (1933)](https://doi.org/10.1007/BF01452845)
- [David Hilbert, Die Theorie der algebraischen Zahlkörper, Jahresbericht der Deutschen Mathematiker-Vereinigung 4 (1897)](http://resolver.sub.uni-goettingen.de/purl?GDZPPN002115344)

### Cohomological dimension one of finite fields makes finite division rings commutative

**Remember:** Above the cohomological dimension, all discrete torsion modules have zero cohomology.

*True by definition.* MSC 12G10 (Cohomological dimension of fields), 16K20, 12G05. arXiv math.NT, math.RA. Level 3: graduate.

**Definition.** A profinite group G has cohomological dimension at most n if Hᵏ(G, M) = 0 for every k &gt; n and every discrete torsion G-module M. A field has the cohomological dimension of its absolute Galois group.

**Problem.** The Brauer group of a finite field is 0. Hence every finite division ring is commutative, which is Wedderburn's little theorem.

**How the definition helps.** Each unit of an algebraic closure of a finite field has finite order, so dimension one kills their H², the Brauer group (our own). A finite division ring is a central division algebra over its centre, a finite field, so it equals its centre (our own). The work is showing that Ẑ has dimension one (our own).

**Wikipedia:** [Cohomological dimension](https://en.wikipedia.org/wiki/Cohomological_dimension), [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “Every finite field has absolute Galois group isomorphic to Ẑ and so has cohomological dimension 1.”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Differential closedness gives separability without perfection

**Remember:** Any system solvable in some differential extension is already solvable in K.

*True by definition.* MSC 12H05 (Differential algebra). arXiv math.AC. Level 3: graduate.

**Definition.** Consider any finite system of differential polynomial equations and inequations over a differential field K. The field K is differentially closed if every such system solvable in a differential extension has a solution in K.

**Problem.** Every differentially closed field is separably closed: each nonconstant separable polynomial has a root in it. In characteristic p it is not perfect, so it is not algebraically closed.

**How the definition helps.** The derivation extends to every separable algebraic extension, so each separable polynomial has a root in some differential extension, hence in K. In characteristic p, a variable with derivative one gives a solvable system, so K has an element a with a′ = 1 (our own). Every pth power has derivative zero, so a is not a pth power (our own).

**Wikipedia:** [Differentially closed field](https://en.wikipedia.org/wiki/Differentially_closed_field). It says: “Taking g=1 and f any ordinary separable polynomial shows that any differentially closed field is separably closed.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed constants preserve solution dimension

**Remember:** A full set of solutions needs no extra constants.

*Rules out counterexamples.* MSC 12H05 (Differential algebra). arXiv math.AC. Level 3: graduate.

**Definition.** For an n × n matrix A over a differential field K, a Picard–Vessiot field is generated over K by the entries of an invertible matrix F with F′ = AF. It adds no new constants: its elements of derivative zero are exactly those of K.

**Problem.** In a Picard–Vessiot field for an n-dimensional system, the solution space has dimension n over the original constants.

**How the definition helps.** For any solution y, F⁻¹y has derivative zero, so its entries are constants of K and y is a constant combination of the columns of F (our own). Without the condition this fails: adjoin a transcendental constant c to ℂ(x); for y′ = 0 the matrix (c) generates it, but 1 and c are independent solutions over ℂ (our own).

**Paper or page:** [Differential Central Simple Algebras](https://arxiv.org/abs/2303.12430). It says: “The field of constants C<sub>K</sub>=C<sub>k</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### Henselian as unique extension makes conjugate elements have equal values

**Remember:** Conjugating an extended valuation gives the same extension.

*True by definition.* MSC 12J10 (Valued fields), 13J15. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** A valued field K is henselian if its valuation extends uniquely, up to equivalence, to an algebraic closure. So composing the extended valuation with any K-automorphism gives an equivalent valuation.

**Problem.** Let K be a henselian field with a real-valued valuation v, extended to an algebraic closure. Conjugate elements, which are roots of the same irreducible polynomial over K, have equal values.

**How the definition helps.** The embedding extension theorem gives σ carrying one conjugate to the other, and v∘σ is equivalent to v (our own). The equivalence fixes the base values, and each algebraic value has a positive multiple among them, so v∘σ = v (our own).

**Wikipedia:** [Henselian ring](https://en.wikipedia.org/wiki/Henselian_ring). It says: “if and only if v extends uniquely to every finite extension of K”

**Sources:** none listed. No primary source with a working link was found.

### Non-discreteness gives the classification of local fields

**Remember:** Locally compact but not discrete gives ℝ, ℂ, p-adic fields and Laurent series.

*Rules out counterexamples.* MSC 12J10 (Valued fields), 11S85. arXiv math.NT. Level 3: graduate.

**Definition.** A local field is a field with a locally compact Hausdorff topology that is not discrete, in which the field operations, including inversion on nonzero elements, are continuous.

**Problem.** Every local field is topologically isomorphic to ℝ, ℂ, a finite extension of some ℚₚ, or a Laurent series field over a finite field.

**How the definition helps.** Without non-discreteness every field counts, since the discrete topology is locally compact (our own). With it, Haar measure, the translation-invariant measure, gives an absolute value that defines the topology. Sorting the resulting complete fields into the four types is the remaining work (our own).

**Wikipedia:** [Local field](https://en.wikipedia.org/wiki/Local_field). It says: “In mathematics, a local field is a locally compact Hausdorff non-discrete topological field.”

**Sources:**

- [André Weil, Basic Number Theory, Springer (1974)](https://doi.org/10.1007/978-3-642-61945-8)

### Residue fields classify unramified extensions

**Remember:** Coprime factors modulo the maximal ideal lift to the ring.

*Rules out counterexamples.* MSC 12J10 (Valued fields). arXiv math.AC. Level 3: graduate.

**Definition.** A discrete valuation ring is henselian when every factorization of a monic polynomial into coprime monic factors modulo the maximal ideal lifts to the ring. A finite extension of its fraction field is unramified when its degree equals its residue degree and its residue extension is separable.

**Problem.** Let K be the fraction field of a henselian discrete valuation ring with residue field k. Taking residues matches finite unramified extensions of K with finite separable extensions of k up to isomorphism. It also matches their embeddings.

**How the definition helps.** A separable residue extension comes from a separable polynomial, and henselian lifting gives a matching root and field upstairs; the cited theorem does this for finite étale algebras. Without lifting this fails: over the integers localized at 5, X² − 6 stays irreducible but splits modulo 5, since 6 ≡ 1 (our own).

**Paper or page:** [Lemma 10.153.7.](https://stacks.math.columbia.edu/tag/04GK). It says: “The category of finite étale ring extensions R → S is equivalent to the category of finite étale algebras κ → S̄ via the functor S ↦ S/𝔪S.”

**Sources:** none listed. No primary source with a working link was found.

### Divisible exponents yield real closedness

**Remember:** An nth root needs room for the leading exponent divided by n.

*Rules out counterexamples.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** A Hahn series over k with exponents in an ordered abelian group G is a formal sum of terms c·tᵍ whose exponents with nonzero coefficient form a well-ordered set. If G is divisible, each exponent g has an nth part h with nh = g, for every n ≥ 1.

**Problem.** Suppose the ordered coefficient field is real closed, meaning it has no proper ordered algebraic extension. Its Hahn field is also real closed if the exponent group is divisible.

**How the definition helps.** Divisibility supplies the exponent g/n that an nth root of a series with leading exponent g needs. Without it, t has no square root in ℝ((t)), since every square has even leading exponent (our own). Adjoining √−1 makes the coefficients algebraically closed, and the Hahn algebraic closure theorem then shows the Hahn field is real closed (our own).

**nLab:** [Hahn series](https://ncatlab.org/nlab/show/Hahn+series). It says: “As a corollary, if G is divisible, k\[tᴳ\] is real closed if k is real closed.”

**Sources:** none listed. No primary source with a working link was found.

### Field embeddings preserve real closed orders

**Remember:** A field map sends squares to squares.

*True by definition.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** A real closed field is an ordered field in which every positive element has a square root and every odd-degree polynomial has a root. So its positive elements are exactly its nonzero squares, and the field alone fixes the order.

**Problem.** Every field embedding between real closed fields preserves their unique orders.

**How the definition helps.** Every field embedding sends nonzero squares to nonzero squares, so it preserves positivity and the order. Starting from the definition with no proper ordered algebraic extension, the Artin–Schreier theorem supplies the root properties (our own).

**nLab:** [real closed field](https://ncatlab.org/nlab/show/real+closed+field). It says: “In fact, the category of real closed fields and order-preserving field homomorphisms is a full subcategory of the category Field of fields and field homomorphisms.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed orders make real closures unique

**Remember:** Fix the signs first, then adjoin square roots of the positives.

*Rules out counterexamples.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** A real closure of an ordered field K is an algebraic extension of K that is real closed, with an order that extends the order of K. Real closed means every positive element is a square and every odd-degree polynomial has a root.

**Problem.** An ordered field has a real closure unique up to a unique order-preserving isomorphism over that field.

**How the definition helps.** Fixing the order of K decides which elements of K get square roots, so two real closures cannot disagree on signs. In our own example, ℚ(t) has orders with t &gt; 0 and with t &lt; 0, and only real closures for the first contain √t. The Artin–Schreier theorem gives existence and uniqueness once the order is fixed.

**Paper or page:** [An Artin-Schreier-type theory for signatures of hermitian forms over involutions](https://arxiv.org/abs/2304.03598). It says: “unique up to a unique K-isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Root axioms make value groups divisible

**Remember:** Take an nth root, and its value is one nth.

*True by definition.* MSC 12J15 (Ordered fields). arXiv math.AC. Level 3: graduate.

**Definition.** Two nonzero elements of an ordered field have the same natural value when their ratio, in absolute value, lies between two positive rationals. These values form a group, written additively, in which the value of xⁿ is n times the value of x. In a real closed field, every positive element has a positive nth root for each n ≥ 1.

**Problem.** The natural value group of a real closed field is divisible. For every value v and positive integer n, some value w satisfies nw = v.

**How the definition helps.** Take a positive x of value v; its positive nth root has a value w with nw = v. In our own terms, the root exists because odd-degree roots handle the odd part of n and repeated square roots handle the powers of two.

**nLab:** [real closed field](https://ncatlab.org/nlab/show/real+closed+field). It says: “If R is real closed, then the value group is a linearly ordered divisible group (divisible because we can take nth roots of positive elements in R).”

**Sources:** none listed. No primary source with a working link was found.

### Discrete henselization changes no values or residues

**Remember:** Squeezed between K and its completion, nothing new appears.

*True by definition.* MSC 12J20 (General valuation theory for fields). arXiv math.AC. Level 3: graduate.

**Definition.** For a discretely valued field K, the henselization can be taken as the elements of the completion of K that are separably algebraic over K. So it lies between K and its completion, which has the same value group and residue field as K.

**Problem.** The henselization of a discretely valued field has its original value group and residue field.

**How the definition helps.** A field between K and its completion keeps the value group and residue field of K, because K is dense (our own). Each element has an approximation in K close enough to share its value and, if integral, its residue. The henselization theorem identifies this subfield with the smallest henselian extension inside a valued algebraic closure.

**nLab:** [Henselian ring](https://ncatlab.org/nlab/show/Henselian+ring). It says: “Then the Henselization of R is isomorphic to the subring of R̂ whose elements are roots of separable polynomials with coefficients in K.”

**Sources:** none listed. No primary source with a working link was found.

### Pure inseparability gives one valuation ring

**Remember:** Test an element by raising it to a power in K.

*True by definition.* MSC 12J20 (General valuation theory for fields), 12F15. arXiv math.AC. Level 3: graduate.

**Definition.** In characteristic p &gt; 0, L is purely inseparable over K when each x in L has a power x<sup>(pⁿ)</sup> in K. A valuation ring of K is a subring A that contains x or x⁻¹ for each nonzero x in K.

**Problem.** If L is purely inseparable over K, exactly one valuation ring of L meets K in A. It is the integral closure of A in L.

**How the definition helps.** A valuation ring of L contains x exactly when it contains x<sup>(pⁿ)</sup>, so one meeting K in A must be the set B of x with some x<sup>(pⁿ)</sup> in A (our own). This B is a ring because common p-powers add and multiply, and it contains x or x⁻¹ by the test in K (our own). Each member of B satisfies X<sup>(pⁿ)</sup> − x<sup>(pⁿ)</sup> = 0 over A, and valuation rings are integrally closed, so B is the integral closure of A (our own).

**Paper or page:** [Lemma 15.124.3.](https://stacks.math.columbia.edu/tag/0H37). It says: “Then the integral closure B of A in L is a valuation ring with fraction field L and A ⊂ B is an extension of valuation rings.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings restrict by intersection

**Remember:** Restricting a valuation keeps the elements of size at most one.

*True by definition.* MSC 12J20 (General valuation theory for fields). arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring of a field is a subring that contains x or x⁻¹ for each nonzero x, namely the elements of size at most one for a valuation. Equivalence classes of valuations correspond to these rings.

**Problem.** Restricting a valuation from a field L to a subfield K corresponds to intersecting its valuation ring with K. So restrictions compose in towers.

**How the definition helps.** Intersecting with K keeps the defining property, since each nonzero x in K still has x or x⁻¹ in the ring (our own). The intersection holds exactly the elements of K of size at most one, so it is the ring of the restricted valuation. Intersecting in two steps gives the same ring as intersecting at once (our own).

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “There is a natural bijective correspondence between equivalence classes of valuations on K and valuation rings in K.”

**Sources:** none listed. No primary source with a working link was found.

### Haar scaling makes a local field’s module multiplicative

**Remember:** The module says how much multiplying by a stretches volume.

*True by definition.* MSC 12J25 (Non-Archimedean valued fields), 28C10. arXiv math.NT. Level 3: graduate.

**Definition.** Let F be a nondiscrete locally compact Hausdorff field with additive Haar measure μ. The module \|a\| of a nonzero a is the factor by which multiplying by a scales measure: μ(aS) = \|a\|μ(S) for Borel sets S. Set \|0\| = 0.

**Problem.** The module is multiplicative. On ℚₚ, the field of p-adic numbers, \|p\| = 1/p for the prime p.

**How the definition helps.** Multiplying by b and then by a scales measure by \|b\| and then \|a\|, so \|ab\| = \|a\|\|b\|, and \|0\| = 0 covers zero factors (our own). The factor exists because S ↦ μ(aS) is again a Haar measure, unique up to scaling (our own). On ℚₚ, ℤₚ is a union of p disjoint translates of pℤₚ, so \|p\| = 1/p (our own).

**Wikipedia:** [Local field](https://en.wikipedia.org/wiki/Local_field). It says: “The module of an element a of F is defined so as to measure the change in size of a set after multiplying it by a.”

**Sources:**

- [A. Weil, Basic Number Theory, Springer (2nd ed. 1974)](https://doi.org/10.1007/978-3-642-61945-8)

### Hahn series admit a missing root

**Remember:** Well-ordered exponents may have denominators that grow without bound.

*Makes the theorem clean to state or prove.* MSC 12J25 (Non-Archimedean valued fields). arXiv math.AC. Level 3: graduate.

**Definition.** A Hahn series is a formal sum of powers t<sup>q</sup>, with q in an ordered group, whose exponents with nonzero coefficients form a well-ordered set: every nonempty subset has a least element. A Puiseux series is a Laurent series in t<sup>(1/n)</sup> for one n, so its exponents have bounded denominators.

**Problem.** Over a field of characteristic p, the Hahn field with rational exponents has a root of Xᵖ − X = t⁻¹. The Puiseux field does not.

**How the definition helps.** The series x = t<sup>(−1/p)</sup> + t<sup>(−1/p²)</sup> + … is a Hahn series because its exponents increase, and pth powers shift each term to the previous one, so xᵖ − x = t⁻¹ (our own). Its denominators are unbounded, so x is not a Puiseux series. Every other root is x plus an element of the prime field, so it keeps these exponents (our own).

**Wikipedia:** [Hahn series](https://en.wikipedia.org/wiki/Hahn_series). It says: “it is not a Puiseux series because the denominators in the exponents are unbounded.”

**Sources:** none listed. No primary source with a working link was found.

### p-adic numbers make Hasse–Minkowski a test one prime at a time

**Remember:** Close in ℚₚ means the difference has many factors of p.

*Makes the theorem clean to state or prove.* MSC 12J25 (Non-Archimedean valued fields), 11E12, 11E08. arXiv math.NT. Level 3: graduate.

**Definition.** ℚₚ is the completion of ℚ for the p-adic distance, in which two rationals are close when their difference is divisible by a high power of p. Precisely, \|pᵏa/b\|ₚ = p⁻ᵏ for integers a and b prime to p, and \|0\|ₚ = 0.

**Problem.** A rational quadratic form has a nonzero rational zero exactly when it has a nonzero zero over ℝ and every ℚₚ. Two rational quadratic forms are equivalent exactly when they are equivalent over each of these fields.

**How the definition helps.** Each ℚₚ records solvability modulo every power of p in one field, so solvability over ℚₚ becomes a single test (our own). The Hasse–Minkowski theorem says that these tests, with the test over ℝ, decide solvability and equivalence over ℚ.

**Wikipedia:** [Hasse–Minkowski theorem](https://en.wikipedia.org/wiki/Hasse%E2%80%93Minkowski_theorem). It says: “in order to determine whether an equation of a certain type has a solution in rational numbers, it is sufficient to test whether it has solutions over complete fields of real and p-adic numbers”

**Sources:**

- [H. Hasse, Über die Darstellbarkeit von Zahlen durch quadratische Formen im Körper der rationalen Zahlen, Journal für die reine und angewandte Mathematik 152 (1923)](https://doi.org/10.1515/crll.1923.152.129)

### Residue sequences make p-adic units exactly those nonzero modulo p

**Remember:** A residue prime to p is invertible at every level.

*True by definition. Confidence: medium.* MSC 12J25 (Non-Archimedean valued fields), 11S99. arXiv math.NT. Level 3: graduate.

**Definition.** A p-adic integer is a sequence of residues xₙ modulo pⁿ, for n ≥ 1, in which each xₙ₊₁ reduces to xₙ. Sequences multiply coordinate by coordinate. Every xₙ reduces to x₁ modulo p, so all xₙ are prime to p exactly when x₁ ≠ 0.

**Problem.** A p-adic integer is a unit, meaning it has a multiplicative inverse, exactly when its first residue x₁ is not zero.

**How the definition helps.** If x₁ ≠ 0, each xₙ is prime to p and so invertible modulo pⁿ (our own). Inverses modulo pⁿ are unique, so they agree under reduction and form an inverse sequence (our own). Conversely, the first coordinate of an inverse inverts x₁ (our own).

**Paper or page:** [An Infinitely Large Napkin: Calculus: P Adic](https://venhance.github.io/napkin/Napkin.pdf). It says: “The number x ∈ ℤₚ is invertible if and only if x₁ ≠ 0. In symbols, x ∈ ℤₚˣ ⟺ x ≢ 0 (mod p).”

**Sources:** none listed. No primary source with a working link was found.

### Spherical completeness excludes immediate extensions

**Remember:** Nested balls always meet, so no new point can hide.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12J25 (Non-Archimedean valued fields). arXiv math.NT. Level 3: graduate.

**Definition.** A valued field is spherically complete if every chain of closed balls, nested by inclusion, has a common point. An extension is immediate if it adds no new values and no new residues, so the value groups and residue fields stay the same.

**Problem.** A spherically complete valued field has no proper immediate extension.

**How the definition helps.** A new element x of an immediate extension would give a nested chain of old balls with no old common point (our own). For each old a, take the old closed ball around a of radius v(x − a); these balls are nested, since their extensions all contain x (our own). Because x − a has an old value and leading residue, some old b is closer to x, and its ball excludes a (our own).

**Wikipedia:** [Spherically complete field](https://en.wikipedia.org/wiki/Spherically_complete_field). It says: “every collection of balls that is totally ordered by inclusion has a nonempty intersection.”

**Sources:**

- [Irving Kaplansky, Maximal fields with valuations (1942)](https://doi.org/10.1215/s0012-7094-42-00922-0)

### The fundamental theorem of algebra, stated for the multiset of roots

**Remember:** Unordered roots converge without anyone choosing an order.

*Makes the theorem clean to state or prove.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 03F60. arXiv math.AC, math.LO. Level 4: research.

**Definition.** A root multiset in Richman's sense is a point of the completion of the space of unordered n-tuples of complex numbers. The distance between two unordered tuples is the smallest, over all ways to match their entries, of the largest distance between matched entries.

**Problem.** Constructively, without choice, every monic complex polynomial of degree n has a root multiset of size n in this completed space.

**How the definition helps.** Approximate roots can then converge as an unordered whole, without a choice of which approximate root follows which (our own). Richman's constructive fundamental theorem of algebra gives this limit point for each monic polynomial.

**nLab:** [fundamental theorem of algebra](https://ncatlab.org/nlab/show/fundamental+theorem+of+algebra), [Weierstrass factorization theorem](https://ncatlab.org/nlab/show/Weierstrass+factorization+theorem). It says: “In light of this, one can instead interpret the constructive FTA as a statement about sets of roots rather than about individual roots, an interpretation that dates from Richman 2000.”

**Sources:**

- [F. Richman, The fundamental theorem of algebra: a constructive development without choice, Pacific Journal of Mathematics 196 (2000) 213–230](https://doi.org/10.2140/pjm.2000.196.213)

### Derivations replace automorphisms in the Galois theory of purely inseparable extensions

**Remember:** Take derivations killing the field, or the field killed by the derivations.

*Makes the theorem clean to state or prove.* MSC 12F15 (Inseparable field extensions), 12H05. arXiv math.NT, math.RA. Level 4: research.

**Definition.** Let L/K have characteristic p and exponent 1, meaning xᵖ ∈ K for every x in L. A K-derivation is a K-linear map D: L → L with D(xy) = xD(y) + yD(x), so it vanishes on K. The sets that count are L-subspaces of derivations closed under commutators and pth powers Dᵖ, called restricted Lie subalgebras.

**Problem.** Let L over K be finite and purely inseparable of exponent 1. Its intermediate fields match the restricted Lie subalgebras of the K-derivations of L that are also L-subspaces.

**How the definition helps.** A set of derivations gives the field of elements they all kill, and an intermediate field gives the derivations that kill it (our own). Jacobson's correspondence proves that these two operations are inverse under the stated hypotheses.

**Wikipedia:** [Purely inseparable extension](https://en.wikipedia.org/wiki/Purely_inseparable_extension). It says: “introduced a variation of Galois theory for purely inseparable extensions of exponent 1, where the Galois groups of field automorphisms in Galois theory are replaced by restricted Lie algebras of derivations.”

**Sources:**

- [Nathan Jacobson, Galois theory of purely inseparable fields of exponent one, American Journal of Mathematics 66 (1944)](https://doi.org/10.2307/2371772)

### Iterated closures solve new equations

**Remember:** Each equation appears at a finite stage and is solved at the next.

*True by definition.* MSC 12H05 (Differential algebra). arXiv math.AC. Level 4: research.

**Definition.** A Picard–Vessiot closure of a differential field adjoins a full basis of solutions of every homogeneous linear differential equation over it, without new constants, meaning elements with derivative zero. The complete closure repeats this step countably often and takes the union, so any finite list of coefficients lies in some stage.

**Problem.** Suppose the starting differential field has characteristic zero and its constants form an algebraically closed field. The union has the same constants. Each homogeneous linear differential equation of positive order n over the union has n solutions linearly independent over those constants.

**How the definition helps.** An equation over the union has finitely many coefficients, all in some stage, and the next stage solves it (our own). A constant of the union lies in some stage, so it is an original constant. The existence theorem for Picard–Vessiot closures with unchanged constants supplies each stage, using characteristic zero and algebraically closed constants.

**Paper or page:** [The Complete Picard Vessiot Closure](https://arxiv.org/abs/2203.00705). It says: “The constants of F∞ are those of F.”

**Sources:** none listed. No primary source with a working link was found.

### Tame ramification kills logarithmic differentials

**Remember:** An invertible ramification index kills the new logarithmic derivative.

*Rules out counterexamples.* MSC 12J20 (General valuation theory for fields). arXiv math.NT, math.AC. Level 4: research.

**Definition.** For a finite extension of henselian discretely valued fields, let e be the ramification index and f the residue degree. The extension is tame if the residue extension is separable, e is invertible in the residue field, and the extension degree equals ef.

**Problem.** For a finite tame extension of henselian discretely valued fields, the relative logarithmic differentials of the valuation rings vanish.

**How the definition helps.** Since e is a unit, the relation e·dlog s = 0 kills the only new logarithmic differential (our own). After the unramified part, which adds none, a uniformizer s with sᵉ in the lower field generates the rest (our own). In characteristic p, the wild extension with t = sᵖ has a logarithmic derivation sending dlog s to 1 (our own).

**Paper or page:** [Logarithmic differentials on discretely ringed adic spaces](https://arxiv.org/abs/2009.14128). It says: “For any tame extension L\|K of valued fields the logarithmic cotangent complex is trivial.”

**Sources:**

- [Katharina Hübner, Logarithmic differentials on discretely ringed adic spaces (2025), Proposition 3.2](https://doi.org/10.24033/bsmf.2905)
