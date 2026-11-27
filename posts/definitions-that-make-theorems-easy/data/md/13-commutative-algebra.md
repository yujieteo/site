### Cancellation makes prime elements irreducible

**Remember:** When a prime divides one of its factors, the other factor is a unit.

*Rules out counterexamples.* MSC 13A05 (Divisibility and factorizations in commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 in which a product of nonzero elements cannot be zero. A unit has a multiplicative inverse. An irreducible element is a nonzero nonunit with no factorization into two nonunits. A prime element is a nonzero nonunit that divides a product only if it divides one of the factors.

**Problem.** In an integral domain, every prime element is irreducible.

**How the definition helps.** The domain condition lets us cancel the prime, which shows one factor has an inverse (our own). If p = ab and p divides a, write a = pc (our own). Then p = pcb, so cancellation gives cb = 1 (our own). In the integers modulo 6, the residue 2 is prime because a product is even only if one factor is even (our own). Yet 2 equals 2 × 4 there, and neither factor has an inverse (our own).

**Wikipedia:** [Prime element](https://en.wikipedia.org/wiki/Prime_element). It says: “In an integral domain, every prime is irreducible”

**Paper or page:** [Prime Element of Integral Domain is Irreducible](https://proofwiki.org/wiki/Prime_Element_of_Integral_Domain_is_Irreducible). It says: “Then p is an irreducible element of ⟨D, +, ∘⟩.”

**Sources:** none listed. No primary source with a working link was found.

### The sum of coprime ideals makes their intersection a product

**Remember:** Split one to write every common member as a sum of products.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Ideals I and J are coprime if their sum is the whole ring. Equivalently, 1 = u + v for some u in I and v in J. Their product IJ consists of finite sums of terms with one factor from each ideal.

**Problem.** In a commutative ring with 1, the product of two coprime ideals equals their intersection.

**How the definition helps.** Coprimality splits 1 as u + v, so any common element x splits as xu + xv (our own). Both terms belong to IJ because x belongs to both ideals (our own). In reverse, each term of a product of ideals belongs to both ideals (our own). For integers, the work moves to Bézout's identity, which gives the sum condition from coprimality (our own).

**Paper or page:** [Product of Coprime Ideals equals Intersection](https://proofwiki.org/wiki/Product_of_Coprime_Ideals_equals_Intersection). It says: “Then their product equals their intersection: 𝔞𝔟 = 𝔞 ∩ 𝔟”

**Sources:** none listed. No primary source with a working link was found.

### Prime characteristic makes Frobenius additive

**Remember:** In prime characteristic, the middle binomial terms vanish.

*Rules out counterexamples.* MSC 13A35 (Characteristic \\(p\\) methods (Frobenius endomorphism) and reduction to characteristic \\(p\\); tight closure). arXiv math.AC. Level 1: early undergraduate.

**Definition.** The characteristic of a ring with 1 is the least positive number of copies of 1 that add to zero, or zero if none does. In prime characteristic p, the Frobenius map raises each element to the power p.

**Problem.** Raising to the power p is a ring homomorphism in every commutative ring of prime characteristic p.

**How the definition helps.** Prime characteristic makes the middle terms vanish in the binomial expansion of a sum raised to power p. Their coefficients are divisible by p. Commutativity gives multiplicativity. Modulo 4, the fourth power of 1 + 1 is 0, while the two fourth powers add to 2 (our own).

**Wikipedia:** [Frobenius endomorphism](https://en.wikipedia.org/wiki/Frobenius_endomorphism). It says: “This shows that F is a ring homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Domains keep root counts bounded

**Remember:** After removing one linear factor, every other root must belong to the quotient.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 in which a product of nonzero elements cannot be zero. A root is a value at which the polynomial is zero.

**Problem.** A nonzero polynomial of degree n over an integral domain has at most n distinct roots.

**How the definition helps.** The domain condition forces every other root to remain a root after removing one linear factor (our own). At a root a, the factor theorem gives f(x) = (x − a)g(x) (our own). At another root b, the product (b − a)g(b) vanishes while b − a is nonzero (our own). Hence g(b) vanishes, and induction on the degree gives the bound (our own). Modulo 8, all four odd residues solve x² − 1 = 0 (our own).

**Wikipedia:** [Frobenius endomorphism](https://en.wikipedia.org/wiki/Frobenius_endomorphism). It says: “if R is not a domain, then Xᵖ − X may have more than p roots”

**Paper or page:** [Polynomial Factor Theorem](https://proofwiki.org/wiki/Polynomial_Factor_Theorem). It says: “ξ ∈ K: P(ξ) = 0 ⇔ P(x) = (x − ξ) Q(x)”

**Sources:** none listed. No primary source with a working link was found.

### Monic divisors make long division work

**Remember:** A leading coefficient of one needs no division.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** A polynomial is monic if its leading coefficient is 1. Over a field every nonzero leading coefficient has an inverse, but over a general ring it may not.

**Problem.** Over a nonzero commutative ring with 1, division by a monic polynomial gives a unique quotient and a remainder of lower degree or zero.

**How the definition helps.** A leading coefficient of 1 lets subtraction cancel the highest term without dividing its coefficient (our own). Each subtraction lowers the degree until the remainder is zero or has lower degree than the divisor (our own). Multiplication by a monic divisor raises the degree of every nonzero polynomial by the degree of the divisor (our own). Different quotients would therefore give a remainder difference of at least the divisor’s degree (our own). In ℤ\[x\], division of x by 2x with a constant remainder would require the coefficient 1/2 (our own).

**nLab:** [monic polynomial](https://ncatlab.org/nlab/show/monic+polynomial). It says: “whose highest order coefficient is 1.”

**Sources:** none listed. No primary source with a working link was found.

### Domains embed in fraction fields

**Remember:** No nonzero denominator becomes zero during multiplication.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 and no pair of nonzero elements whose product is zero. Form fractions a/b with b ≠ 0. Treat a/b and c/d as equal when ad = bc.

**Problem.** A nonzero commutative ring with 1 embeds in a field exactly when it is an integral domain.

**How the definition helps.** The domain condition keeps products of nonzero denominators nonzero and allows cancellation in cross multiplication (our own). Cancellation makes equality of fractions transitive (our own). Fraction arithmetic gives a field where a/1 represents a and b/a inverts each nonzero a/b (our own). Conversely, a field embedding would preserve nonzero elements and their products (our own). Two nonzero elements with zero product therefore rule out an embedding, as 2 and 3 do modulo 6 (our own).

**Wikipedia:** [Field of fractions](https://en.wikipedia.org/wiki/Field_of_fractions). It says: “the smallest field in which it can be embedded”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial degree makes long division Euclidean over a field

**Remember:** Long division stops at zero or a smaller degree.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 13F20. arXiv math.AC. Level 1: early undergraduate.

**Definition.** A Euclidean size on an integral domain assigns a nonnegative integer to each nonzero element. For every dividend a and nonzero divisor b, some quotient q leaves a remainder a − bq of zero or of smaller size than b. For polynomials over a field, choose the degree as the size.

**Problem.** The ring of polynomials in one variable over a field is a Euclidean domain.

**How the definition helps.** Polynomial long division gives precisely the required inequality for degree (our own). The work moves to the division theorem, which uses inverses of nonzero leading coefficients to cancel the largest remaining term (our own).

**Paper or page:** [Polynomial Forms over Field is Euclidean Domain](https://proofwiki.org/wiki/Polynomial_Forms_over_Field_is_Euclidean_Domain). It says: “Then F\[X\] is a Euclidean domain.”

**Sources:** none listed. No primary source with a working link was found.

### Formal power series need no convergence

**Remember:** A formal power series is just its list of coefficients.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 05A15. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** A formal power series is a sequence of coefficients a₀, a₁, a₂, …, written as Σ aₙXⁿ. Here X is an indeterminate (a symbol), not a number. Sums and products are defined coefficient by coefficient, as for polynomials.

**Problem.** Generating functions can be multiplied, inverted, differentiated and composed as formal power series, where these operations are defined. The resulting identities hold even when the series has radius of convergence zero, such as Σ n! Xⁿ.

**How the definition helps.** A formal power series is not a function, so there is nothing to converge. Products need no conditions about absolute, conditional or uniform convergence. Analytic methods, such as finding asymptotics from singularities, still need convergence (our own remark).

**Wikipedia:** [Generating function](https://en.wikipedia.org/wiki/Generating_function), [Formal power series](https://en.wikipedia.org/wiki/Formal_power_series). It says: “Unlike an ordinary series, the formal power series is not required to converge: in fact, the generating function is not actually regarded as a function, and the "variable" remains an indeterminate.”

**Sources:**

- [I. Niven, Formal power series, The American Mathematical Monthly 76 (1969), 871–889, doi:10.1080/00029890.1969.12000359](https://doi.org/10.1080/00029890.1969.12000359)

### Cancellation makes every finite integral domain a field

**Remember:** On a finite set, an injective multiplication map must reach one.

*True by definition.* MSC 13G05 (Integral domains). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 where multiplication by a nonzero element sends distinct inputs to distinct outputs. Equivalently, two nonzero elements always have a nonzero product.

**Problem.** Every finite integral domain is a field.

**How the definition helps.** Multiplying by a nonzero element gives as many distinct outputs as inputs, so every element of the finite ring occurs (our own). The input giving 1 is an inverse (our own). To derive cancellation from the product rule, subtract equal products and factor out their common nonzero factor (our own).

**Paper or page:** [Finite Ring with No Proper Zero Divisors is Field](https://proofwiki.org/wiki/Finite_Ring_with_No_Proper_Zero_Divisors_is_Field). It says: “Then R is a field.”

**Sources:** none listed. No primary source with a working link was found.

### A nontrivial idempotent splits a ring into two factors

**Remember:** An idempotent and its complement pick out two independent factors.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An idempotent in a ring is an element e with e² = e. It is nontrivial if it is neither 0 nor 1.

**Problem.** A commutative ring with 1 is a product of two nonzero rings exactly when it has a nontrivial idempotent.

**How the definition helps.** The identities e² = e and e(1 − e) = 0 make multiplication by e and by 1 − e complementary projections (our own). The map sending r to (er, (1 − e)r) therefore preserves products and sums (our own). Adding the two entries gives its inverse, and both factor rings are nonzero (our own). Conversely, (1, 0) is a nontrivial idempotent in any product of two nonzero rings (our own).

**Paper or page:** [Direct Product iff Nontrivial Idempotent](https://proofwiki.org/wiki/Direct_Product_iff_Nontrivial_Idempotent). It says: “contains an idempotent element”

**Sources:** none listed. No primary source with a working link was found.

### Adjoining an inverse reduces the strong Nullstellensatz to the weak one

**Remember:** An inverse exists exactly where the value is nonzero.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AG. Level 2: later undergraduate.

**Definition.** For a polynomial f over a field k, adjoining an inverse means adding a variable t and the equation ft = 1.

**Problem.** Let I be an ideal in a polynomial ring in finitely many variables over an algebraically closed field. If f vanishes at every common zero of I, some positive power of f belongs to I.

**How the definition helps.** The equation ft = 1 tests whether f is nonzero at any common zero of I (our own). There is no such point, so the weak Nullstellensatz puts 1 in the ideal generated by I and ft − 1 (our own). For nonzero f, substitute t = 1/f in this identity and clear denominators (our own). For the zero polynomial the conclusion holds immediately (our own).

**nLab:** [Nullstellensatz](https://ncatlab.org/nlab/show/Nullstellensatz). It says: “Typically the way that the strong Nullstellensatz is proved is by reduction to the so-called "weak Nullstellensatz" by means of the "Rabinowitsch trick".”

**Sources:**

- [J. L. Rabinowitsch, Zum Hilbertschen Nullstellensatz, Mathematische Annalen 102 (1930), p. 520.](https://link.springer.com/article/10.1007/BF01782361)

### Asking for a 1 gives every nonzero ring a maximal ideal

**Remember:** An ideal is proper exactly when it misses 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring must have a multiplicative identity 1. An ideal is proper when it is not the whole ring. In a ring with 1, an ideal is proper exactly when it does not contain 1.

**Problem.** Krull's theorem (1929) says that every nonzero ring has at least one maximal ideal. A maximal ideal is a proper ideal that no larger proper ideal contains.

**How the definition helps.** The 1 gives a simple test for being proper, and this test survives unions. A union of a chain of ideals that miss 1 also misses 1, so Zorn's lemma gives a maximal ideal. Without a 1 the theorem can fail: ℚ with zero multiplication has the additive subgroups as ideals, and ℚ has no maximal subgroup (our own example). Hodges showed that Krull's theorem in turn implies the axiom of choice.

**Wikipedia:** [Krull's theorem](https://en.wikipedia.org/wiki/Krull%27s_theorem), [Ring (mathematics)](https://en.wikipedia.org/wiki/Ring_%28mathematics%29). It says: “a union of ideals not containing 1 does not contain 1, so J ∈ S. By Zorn's lemma, S has a maximal element M.”

**Sources:**

- [W. Krull, Idealtheorie in Ringen ohne Endlichkeitsbedingungen, Mathematische Annalen 101 (1929) 729–744](https://doi.org/10.1007/BF01454872)
- [W. Hodges, Krull implies Zorn, Journal of the London Mathematical Society (2) 19 (1979) 285–287](https://doi.org/10.1112/jlms/s2-19.2.285)

### Coprime ideals give the Chinese remainder theorem in any ring

**Remember:** Coprime ideals are ideals with elements that add up to 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 11A07. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Two ideals I and J of a ring R are coprime (also called comaximal) if I + J is the whole ring. This means that i + j = 1 for some i in I and some j in J.

**Problem.** Let I₁, …, Iₖ be ideals that are coprime in pairs. Then R/(I₁ ∩ … ∩ Iₖ) ≅ R/I₁ × … × R/Iₖ. In words, a system of congruences, one for each ideal, has a solution, and the solution is unique modulo the intersection.

**How the definition helps.** The definition makes the one fact that the classical proof uses into the condition itself. For integers, moduli are usually called coprime when their gcd is 1, but in a general commutative ring a greatest common divisor need not exist. The condition i + j = 1 is exactly the Bézout identity that the classical proof uses. So the same proof works in any ring, including polynomial rings and rings of algebraic integers.

**Wikipedia:** [Chinese remainder theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem). It says: “This relation plays the role of Bézout's identity in the proofs related to this generalization, which otherwise are very similar.”

**Sources:**

- [M. F. Atiyah and I. G. Macdonald, Introduction to Commutative Algebra, Addison-Wesley (1969), Proposition 1.10; reissued by CRC Press (2018)](https://doi.org/10.1201/9780429493621)

### Ideal absorption makes multiplication work on quotient classes

**Remember:** An ideal absorbs every error caused by changing a representative.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring R, an ideal I is an additive subgroup that contains rx whenever x belongs to I and r belongs to R.

**Problem.** In a commutative ring, the ideals are exactly the kernels of ring maps. In particular, the quotient map by an ideal has that ideal as its kernel.

**How the definition helps.** Absorption keeps products in the same class when either representative changes by an element of I (our own). The quotient map therefore preserves multiplication and sends exactly I to zero (our own). Conversely, a ring map sends every multiple of a kernel element to zero (our own). For the additive subgroup ℤ inside ℚ, 0 and 1 represent the same class, but multiplying by ½ separates them (our own).

**Paper or page:** [Kernel of Ring Homomorphism is Ideal](https://proofwiki.org/wiki/Kernel_of_Ring_Homomorphism_is_Ideal), [Quotient Ring is Ring](https://proofwiki.org/wiki/Quotient_Ring_is_Ring). It says: “The kernel of φ is an ideal of R₁.”

**Sources:** none listed. No primary source with a working link was found.

### Ideal cosets make the first ring isomorphism theorem immediate

**Remember:** Equal outputs mean the inputs differ by a kernel element.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC, math.RA. Level 2: later undergraduate.

**Definition.** For an ideal I of R, define the quotient ring R/I by its classes of representatives. Two representatives have the same class exactly when their difference lies in I. Add and multiply classes by adding and multiplying representatives.

**Problem.** For a ring map φ from R, the quotient R/ker φ is isomorphic to the image of φ. The kernel ker φ is the set of elements that φ sends to zero.

**How the definition helps.** Using classes makes the inputs with one output into a single element of the quotient (our own). Indeed, φ(a) equals φ(b) exactly when φ sends a − b to zero (our own). Sending each class to that output gives a bijection onto the image and preserves both ring operations (our own). The construction requires checking that the operations give the same classes for every choice of representatives (our own).

**Paper or page:** [First Isomorphism Theorem/Rings](https://proofwiki.org/wiki/First_Isomorphism_Theorem/Rings). It says: “Im φ ≅ R / ker φ”

**Sources:** none listed. No primary source with a working link was found.

### Ideal quotients give equations for the closure of a difference

**Remember:** Multiply by equations for the part you want to remove.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AG. Level 2: later undergraduate.

**Definition.** The ideal quotient I : J consists of polynomials f such that fg belongs to I for every g in J. Write V(I) for the common zeros of I.

**Problem.** Over an algebraically closed field, if I is radical, I : J is the vanishing ideal of V(I) outside V(J). Its zero set is the Zariski closure of that difference.

**How the definition helps.** The products fg test f exactly at points where some g in J is nonzero (our own). At every other point the products vanish anyway (our own). The strong Nullstellensatz says that vanishing on V(I) is the same as belonging to I because I is radical (our own).

**Wikipedia:** [Ideal quotient](https://en.wikipedia.org/wiki/Ideal_quotient). It says: “The ideal quotient corresponds to set difference in algebraic geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal ideals are exactly the ideals whose quotient is a field

**Remember:** The whole ring and the trivial ring are too simple, and both are excluded.

*Rules out counterexamples. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A maximal ideal of a commutative ring R is an ideal that is maximal among the proper ideals (the ideals other than R). So the whole ring R is not a maximal ideal. A field is a ring in which 0 is not invertible and every other element is invertible. So the trivial ring, in which 0 = 1, is not a field.

**Problem.** An ideal M of a commutative ring R is maximal if and only if the quotient ring R/M is a field.

**How the definition helps.** The two definitions exclude matching trivial cases, so the equivalence has no exception. The quotient R/R is the trivial ring; R is not a maximal ideal, and the trivial ring is not a field. If one definition allowed its trivial case and the other did not, the theorem would fail for M = R. The observation that the exclusions match is our own reading.

**nLab:** [maximal ideal](https://ncatlab.org/nlab/show/maximal+ideal), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [field](https://ncatlab.org/nlab/show/field). It says: “The improper ideal is not a maximal ideal or even a prime ideal.”

**Sources:** none listed. No primary source with a working link was found.

### Radical ideals leave no nonzero nilpotents in their quotients

**Remember:** An element whose power vanishes in the quotient must already vanish there.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring with 1, call an ideal radical if it contains every element that has a positive power in the ideal. Equivalently, the ideal equals its radical, the set of all elements with such a power. An element is nilpotent if some positive power is zero.

**Problem.** The quotient ring R/I has no nonzero nilpotent elements exactly when I is radical.

**How the definition helps.** The radical condition rules out exactly the representatives whose classes would be nonzero and nilpotent (our own). A class vanishes when its representative belongs to I, and its power vanishes when the corresponding power belongs to I (our own). For example, 2 is nonzero modulo 4 but its square is zero (our own).

**Paper or page:** [Radical Ideal iff Quotient Ring is Reduced](https://proofwiki.org/wiki/Radical_Ideal_iff_Quotient_Ring_is_Reduced). It says: “the quotient ring R / J is a reduced ring.”

**Sources:** none listed. No primary source with a working link was found.

### The nilradical as an intersection of primes detects nilpotent coefficients

**Remember:** Reduce modulo each prime, where every nonzero polynomial has nonzero powers.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An element is nilpotent if some positive power of it is zero. The nilradical of a commutative ring is the ideal of its nilpotent elements. An equivalent definition takes the intersection of all prime ideals.

**Problem.** A polynomial over a commutative ring is nilpotent exactly when every coefficient is nilpotent.

**How the definition helps.** The prime ideal definition lets us test nilpotence in quotient rings with no nonzero nilpotent polynomials. If f is nilpotent, its image modulo each prime is zero because the quotient is an integral domain, so each coefficient lies in every prime (our own proof). Conversely, a finite sum of nilpotent terms is nilpotent. The work behind the prime ideal definition uses Zorn’s lemma to find a prime avoiding every power of a nonnilpotent element.

**Wikipedia:** [Nilradical of a ring](https://en.wikipedia.org/wiki/Nilradical_of_a_ring). It says: “The nilradical of a commutative ring is the intersection of all prime ideals.”

**Sources:** none listed. No primary source with a working link was found.

### The quotient mapping property makes successive ring quotients collapse

**Remember:** Taking two quotients kills only what the larger ideal requires.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC, math.RA. Level 2: later undergraduate.

**Definition.** The quotient by I has a map from R that sends I to zero. Every ring map from R that sends I to zero factors uniquely through this map.

**Problem.** Let J and K be ideals of R with J contained in K. Then first quotienting by J and then by the image of K gives a ring isomorphic to R/K.

**How the definition helps.** Both constructions have the same mapping property for maps that send K to zero (our own). Such a map factors first through R/J and then through the quotient by the image of K (our own). Uniqueness makes the resulting maps between the two constructions inverses (our own). The work lies in proving the mapping property for quotients built from classes (our own).

**Paper or page:** [Third Isomorphism Theorem/Rings](https://proofwiki.org/wiki/Third_Isomorphism_Theorem/Rings). It says: “(2): (R / J) / (K / J) ≅ R / K”

**Sources:** none listed. No primary source with a working link was found.

### Units generate the whole ring and avoid every maximal ideal

**Remember:** A nonunit generates a proper ideal, which lies in a maximal ideal.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring with 1, the principal ideal (a) consists of all multiples of a. A unit has a multiplicative inverse, or equivalently, generates the whole ring. A maximal ideal is a proper ideal contained in no larger proper ideal.

**Problem.** In a commutative ring with 1, an element is a unit exactly when it belongs to no maximal ideal.

**How the definition helps.** A unit belongs to no proper ideal because its multiples include 1 (our own). A nonunit generates a proper ideal, so it lies in a maximal ideal (our own). The work moves to the theorem that every proper ideal lies in a maximal ideal (our own).

**Paper or page:** [Element of Unital Commutative Algebra Invertible iff not Contained in Maximal Ideal](https://proofwiki.org/wiki/Element_of_Unital_Commutative_Algebra_Invertible_iff_not_Contained_in_Maximal_Ideal). It says: “there does not exist a maximal ideal M with a ∈ M.”

**Sources:** none listed. No primary source with a working link was found.

### With a unity, every maximal ideal of a commutative ring is prime

**Remember:** Without a 1, the ideal 4ℤ is maximal in 2ℤ but not prime.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unity is an element 1 with 1x = x for every x. An ideal M is maximal when M ≠ R and no ideal lies strictly between M and R. An ideal P ≠ R is prime when ab ∈ P implies a ∈ P or b ∈ P.

**Problem.** In a commutative ring with unity, every maximal ideal is a prime ideal.

**How the definition helps.** The unity lets the proof write 1 as m + ra and multiply by b. Our own sketch: if ab ∈ M and a ∉ M, then M + Ra = R, so 1 = m + ra and b = mb + rab lies in M. Our own counterexample shows the unity is needed. In the ring 2ℤ, the ideal 4ℤ has index 2, so it is maximal, but 2·2 = 4 lies in 4ℤ while 2 does not.

**Paper or page:** [Maximal Ideal of Commutative and Unitary Ring is Prime Ideal](https://proofwiki.org/wiki/Maximal_Ideal_of_Commutative_and_Unitary_Ring_is_Prime_Ideal). It says: “Let R be a commutative ring with unity. Let M be a maximal ideal of R. Then M is a prime ideal of R.”

**Sources:**

- [ProofWiki, Maximal Ideal of Commutative and Unitary Ring is Prime Ideal](https://proofwiki.org/wiki/Maximal_Ideal_of_Commutative_and_Unitary_Ring_is_Prime_Ideal)

### Preserving one makes field maps into nonzero rings injective

**Remember:** A map that keeps one cannot send an invertible element to zero.

*Rules out counterexamples.* MSC 13B10 (Morphisms of commutative rings). arXiv math.AC, math.RA. Level 2: later undergraduate.

**Definition.** A unital ring map sends 1 to 1 as well as preserving addition and multiplication. Some definitions of ring map do not require this extra rule.

**Problem.** Every unital ring map from a field into a nonzero ring is injective.

**How the definition helps.** Preserving 1 rules out the zero map because 1 differs from 0 in the target (our own). Each nonzero field element has an inverse, and their images still multiply to 1 (our own). Thus only zero maps to zero, which makes the map injective (our own). Without the rule, the zero map from ℚ to ℚ gives a counterexample (our own).

**Paper or page:** [Ring Homomorphism from Field is Monomorphism or Zero Homomorphism](https://proofwiki.org/wiki/Ring_Homomorphism_from_Field_is_Monomorphism_or_Zero_Homomorphism). It says: “φ is a monomorphism (that is, φ is injective)”

**Sources:** none listed. No primary source with a working link was found.

### Sending 1 to 1 makes preimages of prime ideals prime

**Remember:** Keep the 1, and the pull-back of a prime is prime.

*Rules out counterexamples.* MSC 13B10 (Morphisms of commutative rings), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring homomorphism f from R to S keeps addition and multiplication, and also sends the 1 of R to the 1 of S. A map that keeps only addition and multiplication is called a rng homomorphism.

**Problem.** For a ring homomorphism f between commutative rings, the preimage of every prime ideal is a prime ideal. So every ring map gives a map between the sets of prime ideals, in the opposite direction.

**How the definition helps.** Because f(1) = 1, the preimage of a prime ideal never contains 1, so it is a proper ideal. The other condition of a prime ideal pulls back by itself. Without the rule f(1) = 1, the zero map from R to a nonzero ring S keeps addition and multiplication. Its preimage of any prime ideal is all of R, which is not a prime ideal (our own).

**Wikipedia:** [Ring homomorphism](https://en.wikipedia.org/wiki/Ring_homomorphism). It says: “If R and S are commutative and P is a prime ideal of S then f⁻¹(P) is a prime ideal of R.”

**Sources:** none listed. No primary source with a working link was found.

### The finite-module definition of integrality makes integral extensions compose

**Remember:** Only finitely many coefficients matter when you stack two integral extensions.

*True by definition. Confidence: medium.* MSC 13B21 (Integral dependence in commutative rings; going up, going down). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call an element integral over A when it lies in a subring that is finitely generated as an A-module. The usual definition asks for a monic polynomial, one with leading coefficient one, that has the element as a root.

**Problem.** If B is integral over A and C is integral over B, then C is integral over A.

**How the definition helps.** With this definition, a tower of two finitely generated steps is finitely generated, and that gives the theorem. Take x in C with a monic equation over B with coefficients b₁, …, bₙ; then A\[b₁, …, bₙ\] is a finitely generated A-module (our own). The ring A\[b₁, …, bₙ, x\] is finitely generated over it, so products of the two sets of generators generate it over A (our own). The proof uses both definitions, so the work moves to their equivalence (our own).

**Paper or page:** [Algebra, Lemma 10.36.6.](https://stacks.math.columbia.edu/tag/00GN). It says: “Suppose that R → S and S → T are integral ring maps. Then R → T is integral.”

**Sources:** none listed. No primary source with a working link was found.

### The finite-module definition of integrality makes integral elements a subring

**Remember:** Put two elements in one finite algebra to add or multiply them.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B21. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call x in B integral over a subring A if x lies in a subring of B that is finitely generated as an A-module. The usual definition asks for a monic polynomial over A with root x. A monic polynomial has leading coefficient one.

**Problem.** The elements of a commutative ring B that are integral over a subring A form a subring of B.

**How the definition helps.** With this definition, closure under sums and products only needs one finite subring that holds both elements. If x lies in C and y lies in D, both finitely generated A-modules, then products of their generators span the subring CD. CD contains x + y, x − y and xy, so these are integral. The work moves to the equivalence of the two definitions, which uses the determinant trick (our own).

**Wikipedia:** [Integral element](https://en.wikipedia.org/wiki/Integral_element). It says: “there exists a subring C of B containing A\[b\] and which is a finitely generated A-module”

**Sources:** none listed. No primary source with a working link was found.

### Giving the zero polynomial degree −∞ makes the degree rules always hold

**Remember:** Zero is smaller than every constant, so its degree is below every number.

*Makes the theorem clean to state or prove.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The degree of the zero polynomial is set to −∞. Two rules govern −∞: max(a, −∞) = a and a + (−∞) = −∞. In words, −∞ is smaller than every number, and adding it to any number gives −∞.

**Problem.** Over an integral domain, deg(fg) = deg f + deg g and deg(f + g) ≤ max(deg f, deg g) for all polynomials f and g, including the zero polynomial.

**How the definition helps.** The value −∞ lets both rules hold for every pair of polynomials, with no exception for zero. If you give the zero polynomial degree 0 or −1, the product rule fails: 0·(x² + 1) = 0, but the rule asks for degree 2 or 1. The product rule still needs a coefficient ring with no zero divisors.

**Wikipedia:** [Degree of a polynomial](https://en.wikipedia.org/wiki/Degree_of_a_polynomial). It says: “The 0 polynomial is declared to have degree −∞ so that exceptions are not needed for various reasonable results.”

**Sources:**

- [S. Axler, Linear Algebra Done Right, Springer (1997), p. 64](https://doi.org/10.1007/b97662)

### Primitive polynomials make Gauss's lemma true

**Remember:** A primitive polynomial has no common factor left to pull out.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial with integer coefficients is primitive if the greatest common divisor of its coefficients is 1. The content of a polynomial is this greatest common divisor. Every polynomial is its content times a primitive polynomial.

**Problem.** The product of two primitive polynomials is primitive. A primitive polynomial is irreducible over ℤ if and only if it is irreducible over ℚ.

**How the definition helps.** The primitive condition removes exactly the constant factors, which are what break the equivalence. The polynomial 2x + 2 is irreducible over ℚ, but over ℤ it factors as 2(x + 1), because 2 is not a unit in ℤ. For primitive polynomials, a short argument modulo a prime p proves the product statement, and the irreducibility statement follows.

**Wikipedia:** [Gauss's lemma (polynomials)](https://en.wikipedia.org/wiki/Gauss%27s_lemma_%28polynomials%29). It says: “A non-constant polynomial in Z\[X\] is irreducible in Z\[X\] if and only if it is both irreducible in Q\[X\] and primitive in Z\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### A correction factor makes localization work with zero divisors

**Remember:** Fractions are equal if their cross difference dies after multiplying by some t.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicative set in a commutative ring R: it contains 1 and is closed under products. The localization S⁻¹R is the set of fractions r/s with s in S. Two fractions r₁/s₁ and r₂/s₂ are equal when t(s₁r₂ − s₂r₁) = 0 for some t in S.

**Problem.** With this rule, S⁻¹R is a ring in which every element of S is invertible. Every ring map from R that sends S to units factors through it in exactly one way.

**How the definition helps.** The factor t makes the relation an equivalence relation even when R has zero divisors. If as = 0 with a ≠ 0 and s in S, then a/1 must equal as/s = 0/s = 0/1. But the cross difference a·1 − 0·1 = a is not zero, so the naive rule cannot see this. Take ℤ/6 with S = {1, 2, 4}. The naive rule gives 3/1 = 0/2 and 0/2 = 0/1, but not 3/1 = 0/1, so it is not transitive (our own). In an integral domain t cancels, so the rule is the usual one for fractions.

**Wikipedia:** [Localization (commutative algebra)](https://en.wikipedia.org/wiki/Localization_%28commutative_algebra%29). It says: “The reason for the t is to handle cases such as the above a/1 = 0/1, where s₁r₂ − s₂r₁ is nonzero even though the fractions should be regarded as equal.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ℚ as a localization of ℤ embeds it in characteristic-zero fields

**Remember:** Every nonzero integer is already invertible in a characteristic zero field.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define ℚ as the localization of ℤ at the nonzero integers. A localization is the universal ring in which given elements become invertible. Universal means that it maps uniquely to each ring in which those elements are invertible. The usual construction takes classes of fractions a/b, with a/b = c/d when ad = bc.

**Problem.** Every field of characteristic zero has exactly one ring homomorphism from ℚ that sends 1 to 1, and it is injective. Characteristic zero means that n · 1 ≠ 0 for every positive integer n.

**How the definition helps.** The universal property reduces the theorem to one check, that nonzero integers map to units of the field (our own). That holds because n · 1 ≠ 0 for each nonzero integer n, and nonzero elements of a field are units (our own). The map is injective, because the kernel of a ring map out of a field is an ideal without 1, hence zero (our own). With fractions, one defines a/b ↦ a · b⁻¹ by hand and checks that it respects equality and the operations (our own). The work moves to proving that classes of fractions have the universal property (our own).

**nLab:** [rational number](https://ncatlab.org/nlab/show/rational+number). It says: “is the field of fractions of the commutative ring of integers, ℤ”

**Sources:** none listed. No primary source with a working link was found.

### Inverting every nonzero element makes fraction fields the smallest extensions

**Remember:** A map that keeps denominators nonzero already determines what fractions mean.

*True by definition.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For an integral domain D, the fraction field is a field containing D in which every element is a fraction of elements of D. Equivalently, every identity-preserving map from D to a commutative ring that makes all nonzero elements of D invertible extends uniquely to the fraction field.

**Problem.** Every embedding of an integral domain into a field extends uniquely to an embedding of its fraction field.

**How the definition helps.** An embedding into a field sends every nonzero element to a unit, so the mapping property gives the extension (our own). The extension is injective because it preserves 1 and its source is a field (our own). The work moves to constructing fractions and checking that a/b must map to the quotient of the two images (our own).

**nLab:** [localization of a ring](https://ncatlab.org/nlab/show/localization+of+a+ring), [field of fractions](https://ncatlab.org/nlab/show/field+of+fractions). It says: “every field K ⊃ D contains the subfield isomorphic to Q(D)”

**Sources:** none listed. No primary source with a working link was found.

### Inverting outside a prime ideal leaves just one maximal ideal

**Remember:** At a prime ideal, every fraction with numerator outside it is a unit.

*Makes the theorem clean to state or prove.* MSC 13B30 (Rings of fractions and localization for commutative rings), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A prime ideal P is a proper ideal such that a product in P must have a factor in P. To localize a commutative ring with 1 at P, allow fractions whose denominators lie outside P. Primality keeps products of denominators outside P.

**Problem.** The localization of a commutative ring at a prime ideal has exactly one maximal ideal. It consists of the fractions whose numerator lies in that prime ideal.

**How the definition helps.** A fraction with numerator outside P has an inverse obtained by swapping numerator and denominator (our own). The fractions with numerator in P form the kernel of the natural map to the fraction field of R/P (our own). They form a proper ideal that contains all nonunits, so it is the only maximal ideal (our own). The work moves to the construction of fractions and the mapping property of localization (our own).

**nLab:** [localization of a commutative ring](https://ncatlab.org/nlab/show/localization+of+a+commutative+ring), [prime ideal](https://ncatlab.org/nlab/show/prime+ideal). It says: “an ideal in a commutative ring is (classically) prime iff its complement is multiplicatively closed”

**Sources:** none listed. No primary source with a working link was found.

### The field of fractions puts ℚ in every characteristic-zero field

**Remember:** Fractions go wherever their numerators and denominators already go.

*True by definition.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 in which products of nonzero elements are nonzero. Define its field of fractions by the property that every embedding of the domain into a field extends uniquely to the field of fractions. All ring maps here preserve 1, and an embedding is an injective map. The concrete construction uses fractions a/b with b ≠ 0, where a/b = c/d if ad = bc.

**Problem.** If a field F has characteristic zero, meaning no positive integer multiple of 1 is zero, then F contains exactly one copy of ℚ.

**How the definition helps.** The defining property extends the map from ℤ to F to a unique map from ℚ to F. This works because characteristic zero makes the integer map injective, and ℚ is the field of fractions of ℤ. The resulting map is injective because it is a map of fields that preserves 1. With concrete fractions, one checks directly that a/b must map to the image of a divided by the image of b. The work moves into showing that this rule is well defined and preserves the field operations for every integral domain (our own explanation).

**nLab:** [field of fractions](https://ncatlab.org/nlab/show/field+of+fractions). It says: “The field of fractions Q(D) is unique minimal field in which the integral domain D is embedded in the sense that every field K ⊃ D contains the subfield isomorphic to Q(D)”

**Wikipedia:** [Field of fractions](https://en.wikipedia.org/wiki/Field_of_fractions). It says: “if h: R → F is an injective ring homomorphism from R into a field F, then there exists a unique ring homomorphism g: Frac(R) → F that extends h.”

**Sources:** none listed. No primary source with a working link was found.

### The fraction definition of localized modules makes localization exact

**Remember:** Clear a denominator to move a localized kernel element into the original kernel.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings), 13C11. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicatively closed subset of R. Define S⁻¹M as the fractions m/s with m in M and s in S. Two fractions m/s and m′/s′ are equal when t(s′m − sm′) = 0 for some t in S. Another definition sets S⁻¹M = S⁻¹R ⊗ M, the extension of scalars to S⁻¹R.

**Problem.** Let u: L → M and v: M → N form an exact sequence of R-modules. Then the localized sequence S⁻¹L → S⁻¹M → S⁻¹N is exact.

**How the definition helps.** With fractions, exactness is a direct check on elements. Take m/s in the kernel of S⁻¹M → S⁻¹N, so t·v(m) = 0 for some t in S (our own). Then tm is in the kernel of v, so tm = u(l) for some l in L (our own). Hence m/s = u(l)/(ts) comes from S⁻¹L (our own). With the tensor definition, exactness needs a separate proof that S⁻¹R is flat, meaning that tensoring with it keeps injections (our own). The work moves to checking the equality rule and to identifying fractions with the tensor product (our own).

**Paper or page:** [Algebra, Proposition 10.9.12.](https://stacks.math.columbia.edu/tag/00CS). It says: “Let L → M → N be an exact sequence of R-modules. Then S⁻¹L → S⁻¹M → S⁻¹N is also exact.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of localization makes successive localizations combine

**Remember:** Inverting two sets one after the other allows the same maps as inverting both.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicatively closed subset of a commutative ring A, so S contains 1 and is closed under products. Define S⁻¹A by its universal property. Every ring map that sends S to units factors uniquely through A → S⁻¹A. The usual definition builds S⁻¹A from fractions a/s with an explicit rule for equality.

**Problem.** Let S and S′ be multiplicatively closed subsets of A. Localizing first at S′ and then at the image of S gives the localization at the products ss′.

**How the definition helps.** With this definition, both rings receive the same maps, so the universal property makes them isomorphic. A ring map out of either ring is the same as a map out of A that sends S and S′ to units (our own). Two rings with the same universal property are isomorphic by a unique compatible map (our own). The work moves to proving that the fraction ring exists and has the universal property (our own).

**Paper or page:** [Algebra, Proposition 10.9.10.](https://stacks.math.columbia.edu/tag/02C6). It says: “Let S̄ be the image of S in S′⁻¹A, then (SS′)⁻¹A is isomorphic to S̄⁻¹(S′⁻¹A).”

**Sources:** none listed. No primary source with a working link was found.

### Annihilator ideals classify cyclic modules

**Remember:** One generator leaves only its annihilator to record.

*Makes the theorem clean to state or prove.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A cyclic module consists of the multiples of one generator. Its annihilator is the ideal of scalars that kill every element.

**Problem.** A cyclic module over a commutative ring R is isomorphic to R modulo its annihilator ideal. Two cyclic R-modules are isomorphic exactly when their annihilator ideals agree.

**How the definition helps.** The annihilator gives one ideal to compare across cyclic modules. In our own proof over a commutative ring, a scalar kills the generator exactly when it kills every multiple. Sending each scalar to its multiple of the generator gives a surjection with this kernel. The first isomorphism theorem gives the quotient, and isomorphisms preserve annihilators.

**Wikipedia:** [Cyclic module](https://en.wikipedia.org/wiki/Cyclic_module). It says: “is a module over a ring that is generated by one element.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant factors count the least number of module generators

**Remember:** Reduce modulo one prime common to all factors to count generators.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Over a principal ideal domain R, the invariant factor decomposition writes a finitely generated module as a direct sum of nonzero cyclic modules R/(d). Each scalar d divides the next, and d = 0 gives a free copy of R.

**Problem.** Over a principal ideal domain, the least size of a generating set equals the number of nonzero summands in the invariant factor decomposition.

**How the definition helps.** The divisibility order lets one prime test every summand when the first scalar is nonzero. In our own proof, reduce modulo a prime dividing that scalar to obtain one field dimension per summand. If all scalars are zero, dimension over the fraction field gives the same lower bound. One generator per summand attains the bound, including zero generators for the zero module.

**Paper or page:** [Theorem 4.1. (Structure theorem, invariant form)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let R be a PID and let M be any finitely generated R-module.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial scalar action makes a surjective endomorphism invertible

**Remember:** Let the endomorphism act as x and find its inverse polynomial.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An endomorphism f is a linear map from a module to itself. Turn the module into an R\[x\]-module by making x act as f.

**Problem.** A surjective endomorphism of a finitely generated module over a commutative ring is an isomorphism.

**How the definition helps.** Polynomial multiplication turns the search for an inverse map into the equation xM = M. In our own proof, express each generator as x times a linear combination of the generators. The adjugate matrix identity then gives a polynomial 1 − xq(x) that kills M. Thus f composed with q(f) in either order is the identity.

**Paper or page:** [Corollary 2.4. (Vasconcelos-Strooker Theorem)](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is onto, then it is injective.”

**Sources:** none listed. No primary source with a working link was found.

### Rank over the fraction field adds in exact sequences

**Remember:** Pass to fractions and add dimensions.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Over an integral domain, the rank of a finitely generated module is the largest size of a linearly independent family. Equivalently, it is the dimension of the vector space obtained by allowing nonzero scalars as denominators.

**Problem.** If A is a submodule of M and both are finitely generated over an integral domain, then rank(M) = rank(A) + rank(M/A).

**How the definition helps.** The fraction-field definition turns our own rank calculation into the dimension formula for vector spaces. Localization preserves exactness, so the vector space for M/A is the quotient of the spaces for M and A. Clearing denominators relates linear independence over the fraction field to independence over the domain.

**Paper or page:** [Proposition 10.9.12.](https://stacks.math.columbia.edu/tag/00CS). It says: “Then S⁻¹L → S⁻¹M → S⁻¹N is also exact.”

**Sources:** none listed. No primary source with a working link was found.

### The unit test for the Jacobson radical gives Nakayama’s lemma

**Remember:** An invertible scalar cannot kill a nonzero module.

*Rules out counterexamples.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring R, the Jacobson radical consists of the elements a for which every 1 − ra has a multiplicative inverse. Equivalently, it is the intersection of all maximal ideals.

**Problem.** If M is finitely generated and I is an ideal in the Jacobson radical, then IM = M implies M = 0. Also, any lifts of generators of M/IM generate M.

**How the definition helps.** The radical condition makes every element of 1 + I invertible. The determinant trick applied to a finite generating family produces such an element killing M, so M vanishes. Applying this result to the quotient by the chosen lifts proves the generator statement. Our own counterexample takes I = (3) and M = ℤ/2ℤ, where multiplication by 3 is the identity.

**Paper or page:** [Lemma 10.20.1.](https://stacks.math.columbia.edu/tag/00DV). It says: “If IM = M, M is finite, and I ⊂ rad(R), then M = 0.”

**Sources:**

- [Gorô Azumaya, On maximally central algebras, Nagoya Mathematical Journal 2 (1951), Theorem 1.](https://doi.org/10.1017/S0027763000010114)

### Over a nonzero commutative ring, finite free modules have one rank

**Remember:** Free rank is well defined, except over the zero ring.

*Rules out counterexamples.* MSC 13C10 (Projective and free modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring has the invariant basis number property if Rⁿ ≅ Rᵐ implies n = m. Then the rank of a finite free module is well defined.

**Problem.** Every nonzero commutative ring has the invariant basis number property. The zero ring does not, because every Rⁿ is the zero module.

**How the definition helps.** Excluding the zero ring removes the only commutative counterexample. A nonzero ring has a maximal ideal 𝔪, and tensoring with the field R/𝔪 reduces the claim to linear algebra (our own summary). For noncommutative rings the property can fail even for nonzero rings, for example for rings of column-finite infinite matrices (from Wikipedia).

**Wikipedia:** [Invariant basis number](https://en.wikipedia.org/wiki/Invariant_basis_number). It says: “any commutative ring (except the zero ring) satisfies IBN”

**Paper or page:** [Stacks Project, Algebra, Lemma 10.15.8](https://stacks.math.columbia.edu/tag/0FJ7), [Stacks Project, Modules, Lemma 17.14.4](https://stacks.math.columbia.edu/tag/01C9). It says: “Let R be a nonzero ring. Let n, m ≥ 0 be integers. If R⊕ⁿ is isomorphic to R⊕ᵐ as R-modules, then n = m.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0FJ7 (Algebra, Lemma 10.15.8)](https://stacks.math.columbia.edu/tag/0FJ7)
- [The Stacks Project Authors, The Stacks Project, Tag 01C9 (Modules, Lemma 17.14.4)](https://stacks.math.columbia.edu/tag/01C9)

### Saturation makes submodules split over a principal ideal domain

**Remember:** Saturation leaves a torsion-free quotient, so the free quotient splits.

*Rules out counterexamples.* MSC 13C10 (Projective and free modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A submodule N of M over a domain is saturated if rm ∈ N implies m ∈ N for every nonzero r. This excludes 2ℤ inside ℤ, since twice 1 lies in 2ℤ but 1 does not.

**Problem.** Every saturated submodule of a finitely generated module over a principal ideal domain is a direct summand. That means it has a complementary submodule with which it forms a direct sum.

**How the definition helps.** Saturation makes the quotient torsion-free, so the structure theorem over a principal ideal domain makes this finitely generated quotient free. In our own proof, lift each quotient basis vector to the original module. Their span complements N. Without saturation, the quotient ℤ/2ℤ cannot embed back into ℤ because ℤ has no element of order two.

**Wikipedia:** [Free module](https://en.wikipedia.org/wiki/Free_module). It says: “For a finitely generated module over a PID (such as Z), the properties free, projective, flat, and torsion-free are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Finite presentations count generators and relations separately

**Remember:** Over a Noetherian ring, the kernel supplies finitely many relations.

*True by definition.* MSC 13E05 (Commutative Noetherian rings and modules). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite presentation describes a module using finitely many generators and finitely many relations. Equivalently, it expresses the module as a finite-rank free module modulo a finitely generated submodule.

**Problem.** Every finitely generated module over a commutative Noetherian ring has a finite presentation.

**How the definition helps.** The quotient description turns the search for relations into a question about one submodule. In our own reduction, choose a free basis indexed by the given generators and map each basis element to its generator. The kernel records exactly their relations. Over a Noetherian ring every submodule of a finitely generated module is finitely generated.

**Paper or page:** [Lemma 10.51.1.](https://stacks.math.columbia.edu/tag/00IK). It says: “Any finite R-module is of finite presentation.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal counterexamples give Noetherian induction

**Remember:** A maximal counterexample has no larger counterexample.

*True by definition. Confidence: medium.* MSC 13E05 (Commutative Noetherian rings and modules). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A module is Noetherian if every increasing chain of submodules eventually stops growing. Equivalently, every nonempty family of submodules contains a member that no other member strictly contains.

**Problem.** Suppose a property passes to each submodule whenever all strictly larger submodules have it. Then every submodule of a Noetherian module has the property.

**How the definition helps.** The maximal-member definition gives a counterexample with no strictly larger counterexample if induction fails. In our own module version, the induction step then proves the property for that very submodule. The work lies in proving that the maximal-member condition equals the chain condition.

**Paper or page:** [Proposition 2.16. (Noetherian Induction Principle)](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Suppose the inductive step: if all ideals in F strictly larger than I ∈ F satisfy P, then I satisfies P.”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizing chains makes Noetherian modules closed under extensions

**Remember:** Track each chain inside the submodule and in the quotient.

*True by definition.* MSC 13E05 (Commutative Noetherian rings and modules). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A module is Noetherian if every increasing chain of submodules eventually stops growing. An equivalent definition requires each submodule to have a finite generating set.

**Problem.** For a submodule A of M, the module M is Noetherian exactly when A and M/A are both Noetherian.

**How the definition helps.** The chain definition lets us test growth inside A and in M/A. In our own proof, once both chains stop, every new element has the same image as an earlier element. Their difference belongs to the earlier intersection with A, so the original chain also stops. Conversely, chains in A are chains in M, and chains in M/A lift to chains in M.

**Paper or page:** [Proposition 2.6.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is an exact sequence of modules, then M is noetherian if and only if M′, M″ are.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring ideals instead of numbers makes factorization unique

**Remember:** Factor ideals, not numbers: Kummer's ideal numbers became Dedekind's ideals.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 11R27. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** A Dedekind domain is a Noetherian integral domain (every ideal is finitely generated) that is integrally closed and in which every nonzero prime ideal is maximal. Integrally closed means that each element of the fraction field that is a root of a monic polynomial over the ring is already in the ring. The product of two ideals is the ideal that all products of their elements generate.

**Problem.** In a Dedekind domain, every nonzero proper ideal is a product of prime ideals in exactly one way, up to order. The ring of integers of every number field is a Dedekind domain.

**How the definition helps.** Unique factorization comes back when you factor ideals instead of elements. In ℤ\[√−5\], elements do not factor uniquely into irreducibles, but ideals do factor uniquely into prime ideals. The ideal class group, the fractional ideals modulo the principal ones, measures how much factorization of elements fails; the ring is a unique factorization domain exactly when this group is trivial. It is still necessary to prove that rings of integers are Dedekind domains.

**nLab:** [Dedekind ring](https://ncatlab.org/nlab/show/Dedekind+ring), [Dedekind domain](https://ncatlab.org/nlab/show/Dedekind+domain), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut), [ideal class group](https://ncatlab.org/nlab/show/ideal+class+group), [Picard group](https://ncatlab.org/nlab/show/Picard+group). It says: “every ideal can be uniquely factored into prime ideals and the non-zero fractional ideals form a group under multiplication of ideals.”

**Sources:**

- [Serge Lang, Algebraic number theory, Graduate Texts in Mathematics 110, Springer (1970, 1994)](https://doi.org/10.1007/978-1-4612-0853-2)

### Division with a smaller remainder makes every ideal principal

**Remember:** You can always divide and get a smaller remainder.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 13F10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Euclidean domain is an integral domain with a function f from the nonzero elements to the natural numbers. The function f must allow division with remainder. For any a and any nonzero b, there are q and r with a = bq + r. Either r = 0 or f(r) &lt; f(b): the remainder is smaller than the divisor, as f measures size.

**Problem.** Every Euclidean domain is a principal ideal domain, that is, a ring in which every ideal is generated by one element. So every Euclidean domain is also a unique factorization domain.

**How the definition helps.** The definition keeps exactly the step that the proof for the integers uses, so the proof carries over in one line. Take a nonzero ideal I and an element b of I with the smallest value of f. The remainder of any a in I on division by b lies in I, so by the choice of b it is 0, and b divides a. The converse fails: Motzkin showed that the ring of integers of ℚ(√−19) is a principal ideal domain but not Euclidean.

**Wikipedia:** [Euclidean domain](https://en.wikipedia.org/wiki/Euclidean_domain). It says: “if I is a nonzero ideal of R then any element a of I \\ {0} with minimal value (on that set) of f(a) is a generator of I.”

**Sources:**

- [T. Motzkin, The Euclidean algorithm, Bulletin of the American Mathematical Society 55 (1949) 1142–1146](https://doi.org/10.1090/S0002-9904-1949-09344-8)

### Squared complex distance makes Gaussian division Euclidean

**Remember:** Round both coordinates of the quotient to make the remainder smaller.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 11R04. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a Gaussian integer a + bi, with a and b integers, use the norm a² + b² as its Euclidean size. This norm is squared complex distance from zero, so it is an integer even when the distance is not.

**Problem.** The Gaussian integers admit division with remainder using the squared-distance norm. For each nonzero divisor, one can choose a quotient whose remainder has smaller norm than the divisor.

**How the definition helps.** Rounding both coordinates of α/β for β ≠ 0 gives a Gaussian integer q within squared distance 1/2 (our own). The remainder α − βq therefore has norm at most half the norm of β, so it is smaller (our own). The work moves to checking that the norm is multiplicative and the rounding errors have absolute value at most 1/2 (our own).

**Paper or page:** [Gaussian Integers form Euclidean Domain](https://proofwiki.org/wiki/Gaussian_Integers_form_Euclidean_Domain). It says: “Then ν is a Euclidean valuation on ℤ\[i\].”

**Sources:** none listed. No primary source with a working link was found.

### Principal ideal domains are exactly the domains with a Dedekind–Hasse norm

**Remember:** Euclidean division, but you may first multiply a by any p.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F10 (Principal ideal rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let R be an integral domain. A Dedekind–Hasse norm on R is a function v : R → ℕ with v(s) = 0 only for s = 0. It must satisfy this: for all a and all b ≠ 0, either b divides a, or there are p, q, r with pa = bq + r and 0 &lt; v(r) &lt; v(b). In words, after you multiply a by a suitable p, you can divide by b with a remainder smaller than b.

**Problem.** An integral domain is a principal ideal domain, a domain in which every ideal is generated by one element, if and only if it has a Dedekind–Hasse norm.

**How the definition helps.** The weaker division still runs the usual proof that Euclidean domains are principal ideal domains. Take an element b of smallest norm in a nonzero ideal I; it divides every a in I, or else r = pa − bq would be an element of I with smaller norm. Conversely, in a principal ideal domain, 2 to the power of the number of prime factors is such a norm. Many principal ideal domains, such as ℤ\[(1 + √−19)/2\], are not Euclidean, so the weaker property is needed.

**nLab:** [Dedekind-Hasse norm](https://ncatlab.org/nlab/show/Dedekind-Hasse+norm). It says: “a pid is like an Euclidean domain but with a weaker notion of Euclidean division.”

**Sources:**

- [John Greene, Principal ideal domains are almost Euclidean, American Mathematical Monthly 104 (1997) 154–156](https://doi.org/10.1080/00029890.1997.11990615)

### Principal ideals turn irreducible elements into primes

**Remember:** In a principal ideal domain, a larger ideal would give a smaller factor.

*True by definition.* MSC 13F10 (Principal ideal rings), 13F15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** In an integral domain, a principal ideal (d) is the set of multiples of d. Call a nonzero nonunit p irreducible when its only divisors are units and unit multiples of p. Equivalently, (p) is maximal among proper principal ideals.

**Problem.** Every irreducible element of a principal ideal domain is prime. That is, if it divides a product, it divides at least one factor.

**How the definition helps.** The ideal definition turns irreducibility into maximality when every ideal is principal (our own). Every maximal ideal is prime, so a product in (p) has a factor in (p) (our own). Membership in (p) means divisibility by p (our own). The equivalence of definitions uses the fact that d divides p exactly when (d) contains (p) (our own).

**Paper or page:** [Principal Ideal of Principal Ideal Domain is of Irreducible Element iff Maximal/Forward Implication](https://proofwiki.org/wiki/Principal_Ideal_of_Principal_Ideal_Domain_is_of_Irreducible_Element_iff_Maximal/Forward_Implication). It says: “Then (p) is a maximal ideal of D.”

**Sources:** none listed. No primary source with a working link was found.

### A reduced fraction in a unique factorization domain cannot hide integrality

**Remember:** Clearing a monic equation forces the denominator to divide a numerator power.

*Rules out counterexamples.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13B22. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Write a fraction a/b in lowest terms when a and b have no common prime factor. An element is integral over R if it satisfies a polynomial equation over R whose leading coefficient is 1.

**Problem.** Every unique factorization domain is integrally closed. That means every fraction integral over the domain already belongs to the domain.

**How the definition helps.** Clearing denominators in the equation forces b to divide a power of a (our own). A prime factor of b would then divide a, which contradicts lowest terms (our own). Thus b has no prime factor and is invertible (our own). The work moves to factorization into primes, which lets us cancel all common factors (our own).

**Paper or page:** [Unique Factorization Domain is Integrally Closed](https://proofwiki.org/wiki/Unique_Factorization_Domain_is_Integrally_Closed). It says: “Then A is integrally closed.”

**Sources:** none listed. No primary source with a working link was found.

### Ascending chain conditions guarantee that factorizations into irreducibles exist

**Remember:** Chains of divisors must stop, so factoring must stop.

*Rules out counterexamples.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring is Noetherian if every increasing chain of ideals I₁ ⊆ I₂ ⊆ … becomes constant; equivalently, every ideal is finitely generated. The ascending chain condition on principal ideals asks this only for chains of principal ideals.

**Problem.** Take a Noetherian domain, or any domain with the ascending chain condition on principal ideals. Then every nonzero non-unit is a finite product of irreducible elements. This is the existence half of unique factorization.

**How the definition helps.** With the chain condition, existence takes two lines. If some element had no factorization, it would split into two non-units, one again without one, and the principal ideals would grow forever (our own). Without a chain condition existence can fail, as in the ring of all algebraic integers: every non-unit a is √a · √a, so there are no irreducible elements (our own). Uniqueness is a separate matter, since the Noetherian ring ℤ\[√−5\] has 6 = 2 · 3 = (1 + √−5)(1 − √−5).

**Wikipedia:** [Atomic domain](https://en.wikipedia.org/wiki/Atomic_domain), [Noetherian ring](https://en.wikipedia.org/wiki/Noetherian_ring). It says: “More generally, any integral domain satisfying the ascending chain condition on principal ideals (ACCP) is an atomic domain.”

**Sources:**

- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)
- [A. Grams, Atomic rings and the ascending chain condition for principal ideals, Mathematical Proceedings of the Cambridge Philosophical Society 75 (1974) 321–329](https://doi.org/10.1017/S0305004100048532)

### Content separates the two kinds of prime factors in polynomials

**Remember:** Factor the content in the ring and the primitive part over the fraction field.

*Makes the theorem clean to state or prove.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13F20. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The content of a nonzero polynomial over a unique factorization domain is a greatest common divisor of its coefficients. Dividing out the content leaves a primitive polynomial, whose coefficients have no common nonunit divisor.

**Problem.** Every nonzero polynomial over a unique factorization domain factors into its content and primitive irreducible polynomials. This gives unique factorization in the polynomial ring, up to order and invertible factors.

**How the definition helps.** Content separates constant prime factors from primitive factors of positive degree (our own). Unique factorization in the base ring determines the constant factors (our own). Gauss’s lemma transfers factorization of the primitive part to the fraction field, where polynomial factorization is unique (our own).

**Wikipedia:** [Irreducible polynomial](https://en.wikipedia.org/wiki/Irreducible_polynomial). It says: “a non-zero constant and a finite number of non-constant irreducible primitive polynomials.”

**Paper or page:** [Polynomials in Integers is Unique Factorization Domain](https://proofwiki.org/wiki/Polynomials_in_Integers_is_Unique_Factorization_Domain). It says: “Then ℤ\[X\] is a unique factorization domain.”

**Sources:** none listed. No primary source with a working link was found.

### Counting factorizations up to units makes them unique

**Remember:** Units are the signs of a ring: they move freely between factors.

*Makes the theorem clean to state or prove.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unit is an element with a multiplicative inverse, such as 1 and −1 in ℤ. An irreducible element is a nonzero non-unit that is not a product of two non-units. Two factorizations count as the same if their factors match after a change of order and multiplication by units.

**Problem.** In a unique factorization domain, every nonzero non-unit is a product of irreducible elements in exactly one way.

**How the definition helps.** Uniqueness can only be true if factorizations that differ by units count as the same. For example (our own), 6 = 2·3 = (−2)·(−3) in ℤ, and 2 = (1+i)(1−i) = −i(1+i)² in the Gaussian integers. The definition does not make every ring a unique factorization domain. In ℤ\[√−5\], 6 = 2·3 = (1+√−5)(1−√−5) gives two truly different factorizations.

**Wikipedia:** [Irreducible element](https://en.wikipedia.org/wiki/Irreducible_element), [Unique factorization domain](https://en.wikipedia.org/wiki/Unique_factorization_domain). It says: “If the irreducible factors of every non-zero non-unit element are uniquely defined, up to the multiplication by a unit, then the integral domain is called a unique factorization domain”

**Sources:** none listed. No primary source with a working link was found.

### Prime exponents give greatest common divisors and least common multiples

**Remember:** Take smaller exponents for common divisors and larger ones for common multiples.

*True by definition.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a unique factorization domain, fix one prime from each class of primes that differ by a unit factor. The exponent of that prime in a nonzero element is its number of copies in the factorization.

**Problem.** Two nonzero elements of a unique factorization domain have a greatest common divisor and a least common multiple. Their prime exponents are the smaller and larger exponents, respectively.

**How the definition helps.** Under this description, a divides b exactly when every prime exponent of a is at most its exponent in b (our own). Minimum exponents therefore give a common divisor that every common divisor divides (our own). Maximum exponents give the corresponding common multiple (our own). The work moves to proving that prime factorizations exist and are unique apart from order and unit factors (our own).

**nLab:** [unique factorization domain](https://ncatlab.org/nlab/show/unique+factorization+domain). It says: “freely generated by irreducible principal ideals.”

**Paper or page:** [UFD is GCD Domain](https://proofwiki.org/wiki/UFD_is_GCD_Domain). It says: “Then A is a GCD domain.”

**Sources:** none listed. No primary source with a working link was found.

### Prime factorizations are unique because primes divide individual factors

**Remember:** Primality matches one factor at a time, and cancellation finishes the proof.

*True by definition.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call a domain factorial if every nonzero nonunit is a product of prime elements. A prime element is nonzero, is not invertible, and divides a product only if it divides a factor. The usual definition uses irreducible factors, which cannot split into two nonunits.

**Problem.** A domain has unique factorization into irreducibles, apart from order and unit factors, exactly when every nonzero nonunit factors into primes. In particular, every principal ideal domain has unique factorization.

**How the definition helps.** A prime in one factorization divides a prime in the other, so they differ by an invertible factor and cancel (our own). Repeating this step matches all factors (our own). Conversely, uniqueness lets us compare the factors of a nonzero product ab with those of pc whenever ab = pc (our own). For principal ideal domains, the remaining work proves that irreducibles are prime and that increasing chains of ideals stabilize (our own).

**Paper or page:** [Lemma 10.120.13.](https://stacks.math.columbia.edu/tag/034V), [Euclid's Lemma for Unique Factorization Domain](https://proofwiki.org/wiki/Euclid's_Lemma_for_Unique_Factorization_Domain). It says: “A principal ideal domain is a unique factorization domain.”

**Sources:** none listed. No primary source with a working link was found.

### Formal polynomial rings have evaluation maps by their universal property

**Remember:** Choose where the variables go, and evaluation is a ring map.

*True by definition. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The polynomial ring R\[X\] is built from formal sums of monomials with coefficients in R. Its universal property is as follows. A ring map from R to S, with a chosen value in S for each variable, extends in exactly one way to a ring map from R\[X\] to S.

**Problem.** Let R and S be commutative rings with 1, let ψ be a ring map from R to S, and choose elements sⱼ of S. There is a unique ring homomorphism from the polynomial ring to S that extends ψ and sends each Xⱼ to sⱼ.

**How the definition helps.** Because the polynomial ring is free on its variables, substituting values is automatically a ring homomorphism. So 'the value of fg at s is f(s)g(s)' needs no separate calculation. In our own reading, this is what lets one define the minimal polynomial as a generator of the kernel of evaluation. The work moves into the construction of the ring and the check of the universal property.

**Paper or page:** [Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set). It says: “Then there exists a unique evaluation homomorphism φ: R\[{Xⱼ: j ∈ J}\] → S at (sⱼ) extending ψ.”

**Sources:**

- [ProofWiki, Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set)

### Over an integral domain, the only invertible polynomials are invertible constants

**Remember:** Over ℤ/4, (1 + 2X)² = 1, so 1 + 2X is a unit.

*Rules out counterexamples. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials), 13G05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 and no zero divisors. A unit is an element that has a multiplicative inverse.

**Problem.** Over an integral domain D, the units of the polynomial ring D\[X\] are exactly the units of D.

**How the definition helps.** Our own sketch: with no zero divisors, the product of two leading coefficients is nonzero, so degrees add. Then fg = 1 forces deg f + deg g = 0, so f and g are constants. Over a general nonzero commutative ring, ProofWiki shows that P is a unit exactly when its constant term is a unit and its other coefficients are nilpotent. Our own example: in (ℤ/4)\[X\], (1 + 2X)² = 1.

**Paper or page:** [Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain), [Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring). It says: “Then the group of units of D\[X\] is precisely the group of elements of D\[X\] of degree zero that are units of D.”

**Sources:**

- [ProofWiki, Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain)
- [ProofWiki, Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring)

### Polynomials as coefficient lists, not functions, keep distinct polynomials distinct

**Remember:** A polynomial is its coefficients, not the values it takes.

*Rules out counterexamples.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial form is a finite list of coefficients, written with an indeterminate X. A polynomial function is the map from the ring to itself that the form defines by substitution.

**Problem.** Over a finite integral domain D, the ring of polynomial forms D\[X\] is not isomorphic to the ring of polynomial functions on D.

**How the definition helps.** If polynomials were functions, two different polynomials could be the same object. In our own example, over the field with p elements, Xᵖ and X give the same function, so Xᵖ − X would be zero. With forms, degree and coefficients are well defined over every ring. Our own remark is that over an infinite integral domain the two rings are isomorphic, so the choice only matters in the finite case.

**Paper or page:** [Ring of Polynomial Forms is not necessarily Isomorphic to Ring of Polynomial Functions](https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions). It says: “Then it is not necessarily the case that D\[X\] is isomorphic with P(D).”

**Sources:**

- [ProofWiki, Ring of Polynomial Forms is not necessarily Isomorphic to Ring of Polynomial Functions](https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions)

### Setting x equal to a makes the polynomial factor theorem immediate

**Remember:** Setting x equal to a sets every multiple of x minus a to zero.

*True by definition.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a commutative ring R with 1 and an element a of R, impose x = a by forming the quotient R\[x\]/(x − a). In this quotient, polynomials represent the same class when their difference is a multiple of x − a.

**Problem.** Over a commutative ring with 1, a polynomial vanishes at a exactly when it is a multiple of x − a.

**How the definition helps.** The relation x = a makes every polynomial equal to the constant given by its value at a (our own). Evaluation preserves constants and sends multiples of x − a to zero, so distinct constants remain distinct in the quotient (our own). Thus vanishing at a means precisely that the polynomial represents the zero class (our own). This replaces division with remainder by the construction of the quotient ring (our own).

**Paper or page:** [Polynomial Factor Theorem](https://proofwiki.org/wiki/Polynomial_Factor_Theorem). It says: “ξ ∈ K: P(ξ) = 0 ⇔ P(x) = (x − ξ) Q(x)”

**Sources:** none listed. No primary source with a working link was found.

### Dual numbers define the formal derivative of power series

**Remember:** Substitute X + ε with ε² = 0, and read off the coefficient of ε.

*True by definition. Confidence: medium.* MSC 13F25 (Formal power series rings), 13N15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The dual numbers over a ring S are S\[ε\]/(ε²): S with a new element ε added, where ε² = 0. Let δ : R\[\[X\]\] → R\[\[X\]\]\[ε\]/(ε²) be the unique continuous R-algebra map with δ(X) = X + ε. In words, δ substitutes X + ε for X. The derivative p′ of a power series p is the unique element with δ(p) = p + p′ε.

**Problem.** The derivative defined by δ obeys the Leibniz rule (pq)′ = p′q + pq′ and the chain rule.

**How the definition helps.** The map δ is a ring map, so the product rule comes out of multiplying two expressions. The coefficient of ε in δ(pq) = δ(p)δ(q) is p′q + pq′, because ε² = 0 (our own computation for power series). The chain rule has a conceptual proof from the universal property of adic completion. The remaining work is to check that this p′ agrees with the coefficient formula Σ aₙ₊₁(n + 1)Xⁿ.

**nLab:** [power series](https://ncatlab.org/nlab/show/power+series). It says: “the restriction of p ↦ p′ to R\[X\] is by construction a derivation such that X′ = 1”

**Sources:** none listed. No primary source with a working link was found.

### The valuation definition makes nonzero ideals of discrete valuation rings uniformizer powers

**Remember:** An element of least value generates the whole ideal.

*True by definition. Confidence: medium.* MSC 13F30 (Valuation rings), 12J10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let v map the nonzero elements of a field onto ℤ, with v(xy) = v(x) + v(y) and v(x + y) ≥ min(v(x), v(y)). Define the discrete valuation ring as 0 together with the elements where v ≥ 0. A uniformizer is an element t with v(t) = 1. Another definition takes a local principal ideal domain that is not a field.

**Problem.** In a discrete valuation ring, every nonzero ideal is generated by a power of a uniformizer, an element of value one.

**How the definition helps.** With the valuation definition, divisibility is read off from values: a divides b exactly when v(a) ≤ v(b) (our own). Let n be the least value in a nonzero ideal I (our own). Then tⁿ lies in I and divides every element of I, so I = (tⁿ) (our own). The work moves to building the valuation from a local principal ideal domain (our own).

**Paper or page:** [Proposition 4.13.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is of the form (tⁿ) for some unique n ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Integral domains leave out the zero ring, as primes leave out 1

**Remember:** A domain needs at least two elements, as a prime must be bigger than 1.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with no zero divisors other than 0. A zero divisor is an element a with ab = 0 for some nonzero b. A prime ideal must be a proper ideal, that is, not the whole ring.

**Problem.** Let R be a commutative ring and P an ideal of R. Then R/P is an integral domain if and only if P is prime. In particular, for a positive integer n, ℤ/nℤ is an integral domain if and only if n is prime.

**How the definition helps.** The two exclusions match, so the theorem has no exceptions. If the zero ring were an integral domain, then R/R would be one, but R is not a prime ideal. Also ℤ/1ℤ would be one, but 1 is not prime. When integral domains leave out the zero ring and prime ideals leave out the whole ring, both exceptions go away together.

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring), [Prime ideal](https://en.wikipedia.org/wiki/Prime_ideal). It says: “Second, this way, for a positive integer n, the ring Z/nZ is a domain if and only if n is prime, but 1 is not prime.”

**Sources:** none listed. No primary source with a working link was found.

### Into an integral domain, every nonzero ring map sends 1 to 1

**Remember:** With no zero divisors, the image of 1 is 0 or 1.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13B10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 that has no zero divisors. A zero divisor is a nonzero element whose product with some other nonzero element is 0.

**Problem.** Let φ be a ring homomorphism from a ring with 1 to an integral domain. If φ is not the zero map, then φ sends 1 to 1.

**How the definition helps.** The rule 'no zero divisors' leaves the image of 1 only two choices, 0 or 1. The element e = φ(1) satisfies e² = e, so e(e − 1) = 0, and e = 0 or e = 1. If e = 0, then φ(r) = φ(r·1) = 0 for every r. The rule excludes targets such as ℤ × ℤ, where in our own example n ↦ (n, 0) sends 1 to (1, 0).

**Paper or page:** [Ring Homomorphism from Ring with Unity to Integral Domain Preserves Unity](https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity). It says: “Let φ: R → D be a ring homomorphism such that ker φ ≠ R where ker φ denotes the kernel of φ.”

**Sources:**

- [ProofWiki, Ring Homomorphism from Ring with Unity to Integral Domain Preserves Unity](https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity)

### No zero divisors force the characteristic of a domain to be prime

**Remember:** If n = ab and n·1 = 0, then a·1 or b·1 is already 0.

*Rules out counterexamples.* MSC 13G05 (Integral domains). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 and no zero divisors. So ab = 0 implies a = 0 or b = 0. Its characteristic is the least n &gt; 0 with n·1 = 0, or 0 if no such n exists.

**Problem.** Every integral domain, and so every field, has characteristic 0 or a prime number.

**How the definition helps.** The ban on zero divisors splits a composite characteristic into a smaller one, which is impossible. Our own sketch: let n = ab be least with n·1 = 0, where 1 &lt; a, b &lt; n; then (a·1)(b·1) = 0, so a·1 = 0 or b·1 = 0. The ring ℤ/6 has characteristic 6 and is excluded because 2·3 = 0 there (our own example). The condition 1 ≠ 0 removes the null ring, the only ring of characteristic 1, as ProofWiki shows.

**Paper or page:** [Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime), [Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One), [Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime). It says: “Let D be an integral domain. Let Char D be the characteristic of D. Then Char D is either 0 or a prime number.”

**Sources:**

- [ProofWiki, Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime)
- [ProofWiki, Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One)
- [ProofWiki, Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime)

### Counting surviving monomials gives the Hilbert function

**Remember:** Count monomials that division leaves untouched, one degree at a time.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 14A10. arXiv math.AG. Level 2: later undergraduate.

**Definition.** A homogeneous ideal has generators whose terms all have the same degree within each generator. Its quotient has a Hilbert function giving the vector space dimension in each degree. Standard monomials are those outside the ideal generated by the greatest monomials of all nonzero elements of the original ideal.

**Problem.** For a homogeneous ideal, the Hilbert function in degree d equals the number of standard monomials of degree d, for any monomial order.

**How the definition helps.** The standard monomials give a basis of the quotient, and each has a definite degree (our own). Thus the degree-d monomials in this basis count the dimension in degree d (our own). The basis theorem comes from polynomial division by a Gröbner basis (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “dᵢ is the number of monomials of degree i that are not multiple of any leading monomial in the Gröbner basis.”

**Sources:** none listed. No primary source with a working link was found.

### Elimination orders let a Gröbner basis keep only the desired variables

**Remember:** If the largest monomial stays, the whole polynomial stays.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** An elimination order ranks every monomial containing a variable to be removed above every monomial using only retained variables. The elimination ideal consists of all polynomials in the original ideal using only the retained variables.

**Problem.** Let G be a Gröbner basis over a field for an elimination order. The members of G using only retained variables form a Gröbner basis of the elimination ideal.

**How the definition helps.** A polynomial whose greatest monomial uses only retained variables must use only those variables throughout (our own). Every nonzero polynomial in the elimination ideal has a greatest monomial divisible by a basis leading monomial (our own). That divisor uses only retained variables, so the corresponding basis member survives elimination (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “G ∩ K\[Y\] is a Gröbner basis of I ∩ K\[Y\]”

**Sources:** none listed. No primary source with a working link was found.

### Leading monomial ideals explain why finite Gröbner bases exist

**Remember:** Generate the monomial ideal first, then lift its generators.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** The leading monomial ideal of I is generated by the greatest monomial of each nonzero polynomial in I. A Gröbner basis is a list of polynomials in I whose greatest monomials generate that ideal.

**Problem.** Every ideal of polynomials over a field in finitely many variables has a finite Gröbner basis for any monomial order.

**How the definition helps.** A finite set of leading monomials generating the leading ideal supplies a finite Gröbner basis (our own). Hilbert’s basis theorem gives a finite subset of the original leading monomials that generates their ideal (our own). Choose one polynomial of I with each selected leading monomial (our own). Division by these polynomials leaves zero remainder on I (our own).

**Paper or page:** [Hilbert's Basis Theorem/Corollary](https://proofwiki.org/wiki/Hilbert's_Basis_Theorem/Corollary). It says: “Then A\[x₁, …, xₙ\] is also a Noetherian ring.”

**Sources:** none listed. No primary source with a working link was found.

### Leading monomial ideals show why Buchberger’s algorithm stops

**Remember:** Each new remainder strictly enlarges the monomial ideal.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AG. Level 2: later undergraduate.

**Definition.** Fix a monomial order, which chooses a greatest monomial in each polynomial. The leading monomial ideal of a list is the ideal generated by these greatest monomials.

**Problem.** Buchberger’s algorithm terminates after finitely many additions to its starting list, for polynomials in finitely many variables over a field.

**How the definition helps.** Each nonzero remainder added by Buchberger’s algorithm has a leading monomial outside the current leading monomial ideal. Each addition therefore enlarges the ideal. Dickson’s lemma says such a chain of monomial ideals must stop growing. A finite final list has only finitely many pairs to test (our own).

**Wikipedia:** [Buchberger's algorithm](https://en.wikipedia.org/wiki/Buchberger%27s_algorithm). It says: “The algorithm terminates because it is consistently increasing the size of the monomial ideal generated by the leading terms of our set F”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Leading monomials make division remainders unique

**Remember:** Keep exactly the monomials the leading terms cannot divide.

*True by definition.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** Fix an order of monomials in a polynomial ring over a field. The leading monomial is the greatest monomial present. A list in an ideal is a Gröbner basis if every nonzero ideal member has a leading monomial divisible by one from the list.

**Problem.** Division by a Gröbner basis gives the same remainder for every polynomial in a given class modulo I. The monomials not divisible by any basis leading monomial give a vector space basis of the quotient.

**How the definition helps.** A difference of two distinct remainders has no monomial divisible by a basis leading monomial, so it lies outside I (our own). Ordinary generators can give different remainders for the same class (our own). Division gives a remainder in every class, and uniqueness makes the surviving monomials linearly independent (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “the monomials that are irreducible by G form a basis of the F-vector space R/I.”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Making reduced Gröbner bases monic gives every ideal one canonical basis

**Remember:** Scale to leading coefficient 1, and the Gröbner basis is unique.

*Rules out counterexamples.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Fix a monomial ordering on k\[x₁, …, xₙ\]. A Gröbner basis of an ideal I is a finite generating set whose leading monomials generate the ideal of all leading monomials of I. It is reduced if every element has leading coefficient 1 and no element can be reduced by the others.

**Problem.** For a fixed monomial ordering, each ideal of k\[x₁, …, xₙ\] has exactly one reduced Gröbner basis. So two ideals are equal exactly when they have the same reduced Gröbner basis.

**How the definition helps.** Reduction removes redundant elements and terms, and the condition on leading coefficients removes rescaling. Without this condition, reduced bases are unique only up to nonzero constants, as the page notes. For example, {x} and {2x} would both be reduced bases of the ideal (x) over ℚ (our own). The hard part is computing the basis, which Buchberger's algorithm does.

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “All reduced Gröbner bases of an ideal (for a fixed monomial ordering) are equal. It follows that two ideals are equal if and only if they have the same reduced Gröbner basis.”

**Sources:**

- [B. Buchberger, Bruno Buchberger's PhD thesis 1965: An algorithm for finding the basis elements of the residue class ring of a zero dimensional polynomial ideal, Journal of Symbolic Computation (2006), English translation](https://doi.org/10.1016/j.jsc.2005.09.007)

### Pairwise leading term cancellation gives Buchberger’s test

**Remember:** Test the smallest clash between each pair of leading terms.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AG. Level 2: later undergraduate.

**Definition.** Fix a monomial order in a polynomial ring over a field. For two nonzero polynomials, multiply each by a term so both leading terms become their least common monomial multiple with coefficient 1. Their difference is the S-polynomial.

**Problem.** A finite list of nonzero polynomials is a Gröbner basis of its ideal exactly when every pair’s S-polynomial reduces to zero by the list.

**How the definition helps.** Any cancellation between two leading terms is a monomial multiple of the cancellation in their S-polynomial, up to a scalar (our own). If the tests pass, Buchberger’s proof uses them to rewrite sums whose greatest terms cancel (our own). The work is to split simultaneous cancellations into pairs and show that each rewrite lowers the order or removes a greatest term (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “This polynomial, called S-polynomial by Buchberger, is the difference of the one-step reductions of the least common multiple x²y of the leading monomials of g₁ and g₂”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Well ordering keeps polynomial division from running forever

**Remember:** Each division step must lower the largest remaining monomial.

*Rules out counterexamples.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AG. Level 2: later undergraduate.

**Definition.** A monomial order ranks products of powers of the variables. It is a total order that respects multiplication and has no infinite strictly descending sequence.

**Problem.** Multivariate polynomial division over a field terminates for any finite list of nonzero divisors and any monomial order.

**How the definition helps.** Each step removes the greatest remaining monomial and replaces it only with smaller ones (our own). Multiplication compatibility guarantees this when a divisor is used, and well ordering forbids an endless descent (our own). Ranking x above x² above x³ instead makes division of x by x − x² repeat forever (our own).

**Wikipedia:** [Monomial order](https://en.wikipedia.org/wiki/Monomial_order). It says: “monomial orders are often required to be well-orders, since this ensures the multivariate division procedure will terminate.”

**Sources:** none listed. No primary source with a working link was found.

### Evaluating the derivative at the roots gives the discriminant

**Remember:** The two directions of each root pair produce one signed square.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12D05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a complex polynomial f with leading coefficient one, list its roots with repetitions. Its discriminant multiplies the squared differences over all pairs of list positions. The resultant of f and g multiplies the values of g at all positions.

**Problem.** Let f be monic of degree n ≥ 2 over the complex numbers. Its discriminant equals the resultant of f and f′ times (−1) raised to n(n − 1)/2.

**How the definition helps.** The product rule expresses f′ at each root as the product of its differences from all other list entries. In our own proof, multiplying over the list uses both orders of every pair, giving one minus sign per pair. Repeated entries give zero on both sides. The Sylvester determinant formula identifies this root product with the coefficient-based resultant.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “a₀⁻¹ (−1)⁽ⁿ⁽ⁿ⁻¹⁾⁄²⁾ resₓ(f(x), f′(x))”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneous resultants commute with substitutions that lower ordinary degrees

**Remember:** Keep the matrix size fixed when the top coefficient disappears.

*Rules out counterexamples.* MSC 13P15 (Solving polynomial systems; resultants). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A homogeneous polynomial of degree d in x and y uses terms whose exponents add to d. Set y = 1 in each of two such polynomials and form their Sylvester determinant. Define their homogeneous resultant using the original degrees, padding the coefficient lists with leading zeros when needed.

**Problem.** Substituting into the coefficients of a homogeneous resultant gives the homogeneous resultant of the substituted forms, even when the ordinary degrees fall.

**How the definition helps.** Fixed list lengths keep each coefficient in the same matrix position after substitution. Since a determinant uses only sums and products, substitution commutes with it. In our own example, tx + y and tx + 2y have resultant t, which becomes zero at t = 0. Setting y = 1 and rebuilding from the two resulting constants would give the empty determinant, equal to one.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “Res(φ(P), φ(Q)) = φ(Res(P,Q)).”

**Sources:** none listed. No primary source with a working link was found.

### Root differences make resultants detect common roots and multiply

**Remember:** A product of root gaps is zero exactly when some gap is zero.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let A and B have degrees d and e, both positive, and leading coefficients a and b in the same field. List their roots λᵢ and μⱼ in a field where both split into linear factors, repeating each root according to its multiplicity. Define res(A, B) as aᵉbᵈ times the product of all differences λᵢ − μⱼ. Another definition takes the determinant of the Sylvester matrix, whose columns are shifted copies of the coefficient lists.

**Problem.** The resultant res(A, B) is zero exactly when A and B have a common root in a field where both split. For nonconstant C over the same base field, res(A, BC) = res(A, B) res(A, C).

**How the definition helps.** The product definition makes a common root exactly a zero factor, and it makes multiplication split the factors into two groups. The root list of BC combines the lists of B and C, its degree adds and its leading coefficients multiply, giving the stated product. The work is to prove that this product equals the Sylvester determinant, so it can be computed from coefficients without finding roots. Taking the root product as the definition is our own framing.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “The resultant of two polynomials with coefficients in an integral domain is zero if and only if they have a common root in an algebraically closed field containing the coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### The discriminant of a product separates within-factor and cross-factor differences

**Remember:** Separate root pairs inside each factor from pairs across the factors.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12D05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For polynomials with leading coefficient one, list the complex roots with their repetitions. The discriminant multiplies squared differences over all pairs of positions in one list. The resultant multiplies differences between entries in two lists, always subtracting the entry from the second list.

**Problem.** For two such polynomials A and B, the discriminant of AB equals their two discriminants multiplied by the square of their resultant.

**How the definition helps.** Every pair of positions in the combined list lies within one list or crosses between the two. The within-list pairs give the two discriminants, and the cross-list pairs give the squared resultant. Our own comparison uses the equivalence with coefficient-based definitions to identify these root products with their determinant formulas.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “discₓ(R) = discₓ(P) Resₓ(P,Q)² discₓ(Q)”

**Sources:** none listed. No primary source with a working link was found.

### The Sylvester determinant gives the degree in each coefficient list

**Remember:** Count columns from each polynomial to read off its degree.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For polynomials A and B of positive degrees d and e, define the resultant as the determinant of the Sylvester matrix. Its first e columns list coefficients of A multiplied by x to powers from e − 1 down to zero. Its last d columns use B with powers from d − 1 down to zero.

**Problem.** Every nonzero term of the resultant uses exactly e coefficients of A and d coefficients of B, counting repetitions.

**How the definition helps.** Every term in the determinant takes one entry from each column. Exactly e columns contain coefficients of A and d contain coefficients of B. Our own comparison uses the root-product formula to connect this determinant with the other definition of the resultant.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “having e columns of aᵢ and d columns of bⱼ.”

**Sources:** none listed. No primary source with a working link was found.

### The Sylvester determinant puts the resultant in the polynomial ideal

**Remember:** A determinant times the constant polynomial lies in the matrix image.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let A and B have positive degrees d and e over a commutative ring with identity. The Sylvester matrix sends the coefficients of U followed by those of V to the coefficients of AU + BV. Use descending powers in each list, with e slots for U and d for V, and define the resultant as the determinant.

**Problem.** The resultant equals AU + BV for some U of degree below e and V of degree below d, allowing zero polynomials.

**How the definition helps.** The matrix identity with the adjugate places the determinant times every coefficient vector in the image. In our own proof, take the vector for the constant 1. The adjugate is the transpose of the cofactor matrix, and its product with the original matrix is the determinant times the identity. The root-product formula requires a separate proof.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “the resultant of two polynomials belongs to the ideal generated by these polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric algebras as free commutative algebras makes sums become tensor products

**Remember:** Mapping out of a direct sum means giving one map from each summand.

*True by definition. Confidence: medium.* MSC 13A02 (Graded rings), 15A69. arXiv math.AC. Level 3: graduate.

**Definition.** Define the symmetric algebra Sym(M) of a module M over a commutative ring R as the free commutative R-algebra on M. This means each linear map from M to a commutative R-algebra extends uniquely to an algebra map from Sym(M). The tensor algebra is the sum of all tensor powers of M. The explicit construction divides it by the elements x ⊗ y − y ⊗ x.

**Problem.** For modules M and N, Sym(M ⊕ N) is isomorphic to Sym(M) ⊗ Sym(N).

**How the definition helps.** With this definition, both algebras have the same maps out, so they are isomorphic. A linear map from M ⊕ N is a pair of linear maps, hence a pair of algebra maps from Sym(M) and Sym(N) (our own). For commutative algebras, such a pair is the same as one map from the tensor product of the two algebras (our own). So both sides have the same maps into every commutative algebra (our own). The work moves to proving that the quotient of the tensor algebra has the universal property (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional ideals make the ideals of a Dedekind domain a group

**Remember:** Allow denominators, and ideals get inverses as fractions get them.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13F05. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A fractional ideal of a domain R is an R-submodule I of its field of fractions. Some nonzero r in R must give rI inside R. So it is an ideal with a common denominator. It is invertible if IJ = R for some fractional ideal J.

**Problem.** A domain is a Dedekind domain exactly when every nonzero fractional ideal is invertible. Then the fractional ideals form a group, and the class group is its quotient by the principal ones.

**How the definition helps.** Ordinary ideals form only a monoid: no proper ideal times an ideal gives R, so denominators must supply the inverses. With this definition the ideal class group is a quotient of groups, so it is a group by definition. The bad case is ℤ\[√−3\], which is not integrally closed; there I = (2, 1 + √−3) satisfies I² = 2I, so I cannot be invertible (our own). What stays hard is the proof that rings of integers are Dedekind domains and that the class group is finite.

**Wikipedia:** [Fractional ideal](https://en.wikipedia.org/wiki/Fractional_ideal), [Ideal class group](https://en.wikipedia.org/wiki/Ideal_class_group). It says: “An integral domain is a Dedekind domain if and only if every non-zero fractional ideal is invertible.”

**Sources:** none listed. No primary source with a working link was found.

### Irredundant primary decompositions have uniquely determined primes

**Remember:** Remove the spare pieces, and the primes of an ideal are fixed.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** A proper ideal Q is primary if xy in Q implies that x or some power of y is in Q. Its radical √Q is then a prime ideal. A primary decomposition I = Q₁ ∩ … ∩ Qₙ is irredundant if no Qᵢ can be removed and the primes √Qᵢ are all distinct.

**Problem.** Lasker–Noether theorem: in a Noetherian ring every ideal has an irredundant primary decomposition. The set of primes √Qᵢ depends only on I, and so do the components that belong to minimal primes.

**How the definition helps.** The two conditions forbid padding a decomposition with spare pieces. Without them, the ideal (x) of k\[x, y\] could be written as (x) ∩ (x, y), which adds the prime (x, y) (our own). Even for irredundant decompositions, the components of embedded primes are not unique: (x², xy) = (x) ∩ (x², xy, yⁿ) for every positive n. The real work is the proof that the primes √Qᵢ do not depend on the chosen decomposition.

**Wikipedia:** [Primary decomposition](https://en.wikipedia.org/wiki/Primary_decomposition). It says: “Removing any of the Qᵢ changes the intersection”

**Sources:**

- [E. Lasker, Zur Theorie der Moduln und Ideale, Mathematische Annalen 60 (1905) 20–116](https://doi.org/10.1007/BF01447495)
- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)

### Jacobson rings state the Nullstellensatz for all finitely generated algebras

**Remember:** In a Jacobson ring, maximal ideals see every prime.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13B10. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A commutative ring is a Jacobson ring (or Hilbert ring) if every prime ideal is an intersection of maximal ideals.

**Problem.** Every finitely generated algebra S over a Jacobson ring R is a Jacobson ring, and every maximal ideal of S pulls back to a maximal ideal of R. Hilbert's Nullstellensatz is the case where R is a field.

**How the definition helps.** The definition picks out the property that passes to finitely generated algebras. So the general theorem reduces to one hard step, from R to R\[x\], plus induction and quotients (our own). Local rings show the limit: in ℤ₍₂₎, the only maximal ideal is (2), so the prime ideal 0 is not an intersection of maximal ideals (our own). Also ℚ = ℤ₍₂₎\[1/2\] is finitely generated over it, yet the maximal ideal 0 of ℚ pulls back to a non-maximal ideal (our own).

**Wikipedia:** [Jacobson ring](https://en.wikipedia.org/wiki/Jacobson_ring). It says: “A general form of the Nullstellensatz states that if R is a Jacobson ring, then so is any finitely generated R-algebra S.”

**Sources:**

- [O. Goldman, Hilbert rings and the Hilbert Nullstellensatz, Mathematische Zeitschrift 54 (1951) 136–140](https://doi.org/10.1007/BF01179855)
- [W. Krull, Jacobsonsche Ringe, Hilbertscher Nullstellensatz, Dimensionstheorie, Mathematische Zeitschrift 54 (1951) 354–387](https://doi.org/10.1007/BF01238035)

### The Jacobson radical lifts generators

**Remember:** Reduce inside the Jacobson radical, and generators lift.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** The Jacobson radical of a commutative ring is the intersection of its maximal ideals. An ideal inside this radical therefore lies in every maximal ideal.

**Problem.** Let M be a finitely generated module over a commutative ring. If I lies in the Jacobson radical, any lifts of generators of M/IM generate M.

**How the definition helps.** The radical condition makes every element of 1 + I invertible, in our own explanation. Take the quotient of M by the proposed generators. Nakayama’s determinant argument gives an element of 1 + I that kills the quotient, so the quotient is zero. In our own example, 2ℤ lies outside the radical of ℤ. The class of 3 generates ℤ/2ℤ, but 3 does not generate ℤ.

**Paper or page:** [Algebra, Lemma 10.20.1.](https://stacks.math.columbia.edu/tag/00DV). It says: “If IM = M, M is finite, and I ⊂ rad(R), then M = 0.”

**Sources:** none listed. No primary source with a working link was found.

### The square-zero ring R ⊕ M gives Lasker–Noether for modules from ideals

**Remember:** Turn submodules into ideals by declaring their internal products zero.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** For a module M over a commutative ring R, form the ring R ⊕ M with product (r, m)(s, n) = (rs, rn + sm). Products of two elements of M are then zero. The submodules of M are exactly the ideals of R ⊕ M that lie inside M.

**Problem.** Let R be Noetherian and M finitely generated. Then every proper submodule of M is a finite intersection of primary submodules. A submodule N is primary when each r in R acts on M/N either injectively or nilpotently.

**How the definition helps.** The construction turns the module theorem into a case of the ideal theorem, so no separate proof is needed. In our own details, R ⊕ M is Noetherian because it is finite over R, so the submodule is an intersection of primary ideals Q. Each Q ∩ M is M or a primary submodule, since rm in Q with m not in Q forces a power of r into Q. The real work stays in the Lasker–Noether theorem for ideals.

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “Similarly, unital zero algebras allow to deduce straightforwardly the Lasker–Noether theorem for modules”

**Sources:** none listed. No primary source with a working link was found.

### Finite algebra generation forces finite field extensions

**Remember:** Finite algebra generation of a field leaves no transcendental generators.

*Rules out counterexamples.* MSC 13B02 (Extension theory of commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** A field extension is finitely generated as an algebra if finitely many elements generate it using just addition and multiplication over the base field. For finite generation as a field, division is allowed too.

**Problem.** A field extension finitely generated as an algebra has finite dimension as a vector space over the base field.

**How the definition helps.** Algebra generators allow only finitely many denominators, and that excludes transcendental elements. In our own example, a finite list of elements of ℚ(t) uses only finitely many irreducible denominator factors. Addition and multiplication add no new ones, so the algebra misses 1/(t − a) for some rational a, although t generates ℚ(t) as a field. Zariski’s lemma proves the theorem in every field extension.

**Paper or page:** [ProofWiki, Zariski's Lemma](https://proofwiki.org/wiki/Zariski's_Lemma). It says: “Let L / k be a field extension. Let L be finitely generated as an algebra over k. Then L / k is a finite field extension.”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal rings by their local rings makes normality local

**Remember:** Normal is checked prime by prime, so products of normal domains are normal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B30, 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** In the Stacks Project, a ring R is normal if its localization at every prime ideal is a normal domain. A normal domain is an integral domain that is integrally closed in its fraction field. So a normal ring need not be a domain. The total ring of fractions inverts all nonzerodivisors.

**Problem.** Let R be a reduced ring with finitely many minimal primes. Then R is normal exactly when it is a finite product of normal domains.

**How the definition helps.** Defining normality one prime at a time makes it a local property, so normal schemes can be defined by their local rings. The older definition 'integrally closed domain' would make the disjoint union of two normal varieties fail; for example (our own), k\[x\] × k\[y\] is normal but not a domain. The condition 'integrally closed in its total ring of fractions' alone is too weak (our own example). The ring k\[ε\]/(ε²) is its own total ring of fractions, but it is not reduced, so it is not normal.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.37.16](https://stacks.math.columbia.edu/tag/030C). It says: “Assume R is reduced and has finitely many minimal primes. Then the following are equivalent: (1) R is a normal ring, … and (3) R is a finite product of normal domains.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 030C (Algebra, Lemma 10.37.16)](https://stacks.math.columbia.edu/tag/030C)

### Integral closure keeps monic factors

**Remember:** Integral closure keeps coefficients of monic factors from escaping.

*Rules out counterexamples.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B25. arXiv math.AC. Level 3: graduate.

**Definition.** A domain A is integrally closed if it contains every element of its fraction field satisfying a monic polynomial over A. A monic polynomial has leading coefficient one.

**Problem.** If a monic polynomial over an integrally closed domain factors into monic polynomials over its fraction field, both factors have coefficients in the domain.

**How the definition helps.** Integral closure brings each factor coefficient back into the ring once it satisfies a monic equation. The cited proof writes these coefficients as signed sums of products of roots. The roots satisfy the original monic equation, and elements satisfying such equations form a ring. In our own counterexample, ℚ\[t², t³\] omits t even though t = t³/t² belongs to its fraction field. Its polynomial x² − t² factors there as (x − t)(x + t).

**Paper or page:** [Finite local principal ideal rings](https://arxiv.org/abs/2301.07664v7). It says: “If f ∈ A\[X\] factorizes as f = gh in B\[X\] with g and h monic, then g and h are in A\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### The Rees algebra definition shows an ideal's integral closure is an ideal

**Remember:** An ideal's closure is the degree-one part of a ring's closure.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13A30. arXiv math.AC. Level 3: graduate.

**Definition.** The Rees algebra R\[It\] of an ideal I is the subring of R\[t\] generated by R and all products at with a in I. Say r is in the integral closure of I when rt is integral over R\[It\], that is, a root of a monic polynomial over it. The usual definition asks for an equation rⁿ + a₁rⁿ⁻¹ + ⋯ + aₙ = 0 with each aᵢ in Iⁱ.

**Problem.** The integral closure of an ideal is an ideal.

**How the definition helps.** With this definition, the theorem follows from the fact that integral elements form a subring. If rt and st are integral over R\[It\], so is their sum (r + s)t (our own). For a in R, the product a·rt is integral, because a lies in R\[It\] (our own). The work goes into showing that the two definitions agree, which is the degree-one case of the description of the integral closure of R\[It\] in R\[t\].

**Wikipedia:** [Integral closure of an ideal](https://en.wikipedia.org/wiki/Integral_closure_of_an_ideal). It says: “In particular, Ī is an ideal”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit completion of R\[x\] at x is the power series ring

**Remember:** A power series is exactly one compatible choice of every finite truncation.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13F25. arXiv math.AC. Level 3: graduate.

**Definition.** Define the completion of a ring at an ideal I as the inverse limit of its quotients by the powers Iⁿ. An element is a sequence of residues that agree under reduction. Another definition uses Cauchy sequences of elements, with two sequences identified when their difference tends to zero.

**Problem.** The completion of R\[x\] at the ideal (x) is the ring R\[\[x\]\] of formal power series over R.

**How the definition helps.** With this definition, the completion is visibly a ring of compatible truncations. A residue modulo xⁿ is a polynomial of degree below n, and compatibility means that each truncation extends the one before, so the sequence fixes one power series (our own). Sums and products of residues follow the usual coefficient rules (our own). The work moves to showing that the Cauchy sequence completion is the same ring (our own).

**nLab:** [completion of a ring](https://ncatlab.org/nlab/show/completion+of+a+ring). It says: “then the formal completion of R\[x\] at the ideal (x) generated by the free generator x is the ring of formal power series”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit definition of completion lets units lift from R/I

**Remember:** Take inverses at every finite level, where uniqueness keeps them compatible.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** Define the I-adic completion of R as the inverse limit of the rings R/Iⁿ. An element is a sequence of residues, one modulo each Iⁿ, that agree under reduction. Another definition uses classes of Cauchy sequences for the topology in which the powers Iⁿ are the small neighbourhoods of zero.

**Problem.** Let I be an ideal of R. An element of the completion that maps to a unit of R/I is a unit.

**How the definition helps.** With this definition, it is enough to invert the element in each ring R/Iⁿ. The kernel of R/Iⁿ → R/I is I/Iⁿ, which is nilpotent (our own). An element that is a unit modulo a nilpotent ideal is a unit, so the residue is invertible in R/Iⁿ (our own). Inverses are unique, so they agree under reduction and form an inverse in the completion (our own). The work moves to showing that the Cauchy sequence completion is the same ring (our own).

**Paper or page:** [Algebra, Lemma 10.96.6.](https://stacks.math.columbia.edu/tag/05GI). It says: “any element of R̂ which maps to a unit of R/I is a unit”

**Sources:** none listed. No primary source with a working link was found.

### Defining henselization by a universal property makes it extend local maps

**Remember:** The universal map extends each local map in only one way.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring is henselian when every simple root of a monic polynomial modulo the maximal ideal lifts to a root in the ring. Define the henselization of a local ring R as a local map R → Rʰ into a henselian ring. Every local map from R to a henselian local ring must factor uniquely through it. The Stacks Project instead builds Rʰ as a direct limit of étale algebras over R, which are flat algebras with no ramification.

**Problem.** Every local map of local rings induces a unique compatible local map of henselizations.

**How the definition helps.** With the universal property, the induced map exists and is unique with no construction (our own). Compose R → S with S → Sʰ to get a local map into a henselian ring (our own). It factors uniquely through Rʰ, which gives the map Rʰ → Sʰ (our own). The work moves to proving that the direct-limit construction is henselian and has the universal property.

**Paper or page:** [Lemma 10.155.6.](https://stacks.math.columbia.edu/tag/04GS). It says: “There exists a unique local ring map Rʰ → Sʰ fitting into the commutative diagram”

**Sources:**

- [Masayoshi Nagata, On the Theory of Henselian Rings, Nagoya Mathematical Journal 5 (1953), 45–57.](https://doi.org/10.1017/S0027763000015439)

### The universal property of henselization makes it commute with quotients

**Remember:** Killing an ideal imposes the same condition before or after henselization.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring is henselian when every simple root of a monic polynomial modulo the maximal ideal lifts to a root in the ring. Define the henselization Rʰ of a local ring R by a universal property. Every local map from R to a henselian local ring must factor uniquely through R → Rʰ. The Stacks Project instead builds Rʰ as a direct limit of étale algebras over R.

**Problem.** Let I be an ideal inside the maximal ideal of a local ring R. Then Rʰ/IRʰ is the henselization of R/I.

**How the definition helps.** With the universal property, it is enough to show that both rings receive the same maps (our own). A local map from R/I to a henselian ring is a local map from R that kills I (our own). It factors uniquely through Rʰ, and the factored map kills IRʰ (our own). Rʰ/IRʰ is henselian by Stacks Lemma 10.153.4, since it is finite over Rʰ. The work moves to constructing Rʰ and to that lemma.

**Paper or page:** [Lemma 10.156.2.](https://stacks.math.columbia.edu/tag/05WQ). It says: “Then Rʰ/IRʰ is the henselization of R/I.”

**Sources:** none listed. No primary source with a working link was found.

### Unique infinitesimal lifts make every localization formally étale

**Remember:** Units stay units modulo a nilpotent ideal, so fractions lift uniquely.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13B30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A ring map R → A is formally étale if, for every R-algebra B and every ideal I of B with some power zero, each R-algebra map A → B/I lifts uniquely to B. The localization S⁻¹R makes every element of a multiplicatively closed set S invertible.

**Problem.** For a commutative ring R and a multiplicatively closed subset S, the localization map R → S⁻¹R is formally étale.

**How the definition helps.** The lifting test reduces the claim to checking that the denominators are units in B. An element with an inverse modulo a nilpotent ideal I is a unit in B, by a finite geometric sum (our own proof). Thus S maps to units, and the universal property of localization gives a unique lift. An arbitrary localization need not have finite presentation, so the classical étale test does not apply directly (Tag 00UR).

**Paper or page:** [Algebra, Lemma 10.150.5](https://stacks.math.columbia.edu/tag/04EG). It says: “Let R be a ring. Let S ⊂ R be any multiplicative subset. Then the ring map R → S⁻¹R is formally étale.”

**Sources:**

- [The Stacks Project, Lemma 10.150.5, Tag 04EG](https://stacks.math.columbia.edu/tag/04EG)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Unique lifts make formally étale algebras survive directed colimits

**Remember:** A map out of a colimit is a compatible family of maps.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 14B25. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A ring map R → A is formally étale if every R-algebra map A → B/I lifts uniquely to B. This must hold for every R-algebra B and every ideal I of B with some power equal to zero. Unlike étale maps, formally étale maps need not have a presentation with finitely many generators and relations.

**Problem.** The colimit of a directed system of formally étale R-algebras is formally étale over R.

**How the definition helps.** The lifting definition makes a lift from the colimit a compatible family of lifts from the individual algebras. Each of those lifts exists and is unique, and uniqueness makes them agree along the maps of the system (our own explanation). The usual étale definition also requires finite presentation, which can fail in the colimit. For example, ℚ is the directed union of the étale ℤ-algebras ℤ\[1/n\], but it is not finitely generated as a ℤ-algebra (our own).

**Paper or page:** [Algebra, Lemma 10.150.4](https://stacks.math.columbia.edu/tag/031N). It says: “If each R → Sᵢ is formally étale, then S = \\(\\operatorname{colim}<sub>i\\in I</sub> S<sub>i</sub>\\) is formally étale over R”

**Sources:**

- [The Stacks Project, Lemma 10.150.4, Tag 031N](https://stacks.math.columbia.edu/tag/031N)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Weakly associated primes detect nonzero modules over every ring

**Remember:** Ask for a minimal prime over an annihilator, and Noetherian is unneeded.

*Rules out counterexamples.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings), 13A15. arXiv math.AC. Level 3: graduate.

**Definition.** A prime 𝔭 is associated to a module M if 𝔭 is the annihilator of one element of M. It is weakly associated if 𝔭 is a minimal prime over the annihilator of one element. Every associated prime is weakly associated.

**Problem.** Over every ring, a module M is zero exactly when it has no weakly associated primes. The zerodivisors on M form the union of its weakly associated primes.

**How the definition helps.** A nonzero element has a proper annihilator, and a proper ideal always has a minimal prime over it. With associated primes this fails (our own example): let V be a valuation ring with value group ℚ and M = V/(t), where t has value 1. Each nonzero element of M has as annihilator the elements of value at least b, for some b &gt; 0, and such an ideal is never prime. For Noetherian rings the two notions agree (Tag 058A), so nothing is lost there.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.66.5](https://stacks.math.columbia.edu/tag/0588), [Stacks Project, Algebra, Lemma 10.66.7](https://stacks.math.columbia.edu/tag/05C3), [Stacks Project, Algebra, Lemma 10.66.9](https://stacks.math.columbia.edu/tag/058A). It says: “Let R be a ring. Let M be an R-module. Then M = (0) ⇔ WeakAss(M) = ∅”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0588 (Algebra, Lemma 10.66.5)](https://stacks.math.columbia.edu/tag/0588)
- [The Stacks Project Authors, The Stacks Project, Tag 05C3 (Algebra, Lemma 10.66.7)](https://stacks.math.columbia.edu/tag/05C3)
- [The Stacks Project Authors, The Stacks Project, Tag 058A (Algebra, Lemma 10.66.9)](https://stacks.math.columbia.edu/tag/058A)

### Duals defined by evaluation and coevaluation survive any change of scalars

**Remember:** A change of scalars carries the two duality identities along.

*True by definition.* MSC 13C10 (Projective and free modules and ideals in commutative rings), 18M05. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A module P has a dual P\* when maps P\* ⊗ P → R and R → P ⊗ P\* exist. These maps must satisfy two triangle identities. The usual dual is the module of linear maps P → R. The nLab proves that a module has such a dual exactly when it is finitely generated projective.

**Problem.** Let P be a finitely generated projective module over a commutative ring R, and let R → S be a ring map. Then S ⊗ Hom(P, R) is isomorphic to Hom(S ⊗ P, S).

**How the definition helps.** Extension of scalars preserves tensor products, so it carries the two maps and their identities over to S ⊗ P. Hence S ⊗ P\* is a dual of S ⊗ P, and duals are unique up to isomorphism. The real work is the nLab theorem that dualizable modules are the finitely generated projective ones. The base-change argument is our own.

**nLab:** [dualizable module](https://ncatlab.org/nlab/show/dualizable+module). It says: “An R-module is dualizable if and only if it is a finitely generated projective module.”

**Sources:** none listed. No primary source with a working link was found.

### Local rings make projectives free

**Remember:** Over a local ring, every projective module has a basis.

*Rules out counterexamples.* MSC 13C10 (Projective and free modules and ideals in commutative rings), 16D40. arXiv math.AC. Level 3: graduate.

**Definition.** A local commutative ring has exactly one maximal ideal. A projective module is a direct summand of a free module. Projective modules over general rings do not have to be free.

**Problem.** Every projective module over a commutative local ring is free, even if it is not finitely generated.

**How the definition helps.** A local ring excludes the product decomposition that gives our own counterexample. Over k × k for a field k, the first factor is a direct summand, so it is projective. The element (0, 1) kills that whole factor, whereas no nonzero scalar kills a nonzero free module. Kaplansky’s theorem supplies the full proof over a local ring, even for modules with infinitely many generators.

**Paper or page:** [Algebra, Theorem 10.85.4.](https://stacks.math.columbia.edu/tag/0593). It says: “If P is a projective module over a local ring R, then P is free.”

**Sources:** none listed. No primary source with a working link was found.

### Baer's test for injectivity makes divisible modules injective over principal ideal domains

**Remember:** Extending from a principal ideal means dividing the image of its generator.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13F10. arXiv math.AC. Level 3: graduate.

**Definition.** A module Q is injective if every map into Q from a submodule extends to the whole module. Baer's test asks this only for ideals of the ring: every map I → Q extends to R. A module is divisible if multiplication by each nonzero scalar is onto.

**Problem.** Every divisible module over a principal ideal domain is injective.

**How the definition helps.** With Baer's test, only principal ideals need checking, and there the extension is one division. A map f on a nonzero ideal (a) is fixed by f(a) (our own). Choose q with aq = f(a), which divisibility allows, and send 1 to q (our own). The work moves to Baer's criterion, which the nLab proves with Zorn's lemma.

**nLab:** [Baer's criterion](https://ncatlab.org/nlab/show/Baer%27s+criterion). It says: “any morphism g : I → Q in C can be extended to all of R along the inclusion I ↪︎ R.”

**Sources:** none listed. No primary source with a working link was found.

### Baer's test makes direct sums of injective modules injective over Noetherian rings

**Remember:** Finitely many generators send an ideal map into finitely many summands.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** A module Q is injective if every map into Q from a submodule extends to the whole module. Baer's test asks this only for ideals: every map I → Q extends to R. A ring is Noetherian if every ideal is finitely generated.

**Problem.** Over a commutative Noetherian ring, any direct sum of injective modules is injective.

**How the definition helps.** With Baer's test, only maps from finitely generated ideals need extending, and these meet only finitely many summands. Each generator of the ideal maps into finitely many summands. So the map lands in a finite direct sum, which is a product of injective modules. Each coordinate extends to R, and the extensions combine. The work moves to Baer's criterion, which shows that the test agrees with the usual definition. The nLab gives this proof.

**nLab:** [injective module](https://ncatlab.org/nlab/show/injective+module). It says: “Since R is Noetherian, I is finitely generated as an R-module”

**Sources:** none listed. No primary source with a working link was found.

### Duality into the injective hull of the residue field preserves length

**Remember:** E is injective and its socle is κ, so Hom(−, E) keeps length.

*Rules out counterexamples.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D45. arXiv math.AC. Level 3: graduate.

**Definition.** Let R be an Artinian local ring with maximal ideal m and residue field κ. An injective hull E of κ is an injective module containing κ, in which every nonzero submodule meets κ. The Matlis dual of a module M is D(M) = Hom(M, E).

**Problem.** For every finitely generated module M over an Artinian local ring, D(M) has the same length as M. With one more step, D is an exact duality on finitely generated modules, with D∘D the identity.

**How the definition helps.** Choosing E makes D exact and makes D(κ) = κ, so length is counted one composition factor at a time. D(κ) is the socle of E, the elements killed by m, and this is κ because every nonzero submodule of E meets κ. Dualizing into R itself fails: for R = κ\[x,y\]/(x,y)², Hom(κ, R) is two-dimensional (our own example). The existence of injective hulls is the only outside input.

**Paper or page:** [Dualizing, Lemma 47.6.1.](https://stacks.math.columbia.edu/tag/08YX), [Dualizing, Lemma 47.6.3.](https://stacks.math.columbia.edu/tag/08YZ). It says: “For every finite R-module M we have length<sub>R</sub>(M) = length<sub>R</sub>(Hom<sub>R</sub>(M, E)) In particular, the injective hull E of κ is a finite R-module.”

**Sources:**

- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### Faithful flatness lets exactness be checked after a change of ring

**Remember:** Faithfully flat base change neither creates nor hides exactness.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A module M over R is flat if tensoring with M keeps exact sequences exact. It is faithfully flat if, in addition, a sequence is exact whenever it becomes exact after tensoring with M.

**Problem.** Let S be a faithfully flat R-algebra. A sequence of R-modules is exact, or a map is injective, exactly when this holds after tensoring with S.

**How the definition helps.** The definition says exactly that exactness can be tested after base change, so the reduction is free. The work moves into recognizing faithfully flat maps: a flat map R → S is faithfully flat exactly when every prime of R is the pullback of a prime of S. A product of localizations R\[1/tᵢ\] is faithfully flat exactly when the tᵢ generate the unit ideal, so Zariski open covers become a special case (our own). This is the start of descent theory (our own).

**Wikipedia:** [Flat module](https://en.wikipedia.org/wiki/Flat_module). It says: “A module is faithfully flat if taking the tensor product with a sequence produces an exact sequence if and only if the original sequence is exact.”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Lazard's criterion makes torsion-free modules over principal ideal domains flat

**Remember:** Over a principal ideal domain, finitely generated torsion-free modules are free.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** By Lazard's criterion, a module is flat exactly when it is a filtered colimit of finitely generated free modules. A filtered colimit glues a system in which any two stages map to a common later stage. The usual definition asks that tensoring with the module preserve injective maps.

**Problem.** Every torsion-free module over a principal ideal domain is flat.

**How the definition helps.** The module is the directed union of its finitely generated submodules, which are free by the structure theorem, so it meets Lazard's description (our own). For this direction one needs only that tensor products commute with directed unions (our own). The usual proof instead checks that tensoring with each ideal (a) ≅ R stays injective (our own).

**nLab:** [Lazard's criterion](https://ncatlab.org/nlab/show/Lazard%27s+criterion). It says: “An left R-module is a flat module precisely if it is a filtered colimit of finitely generated free modules.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring a complete local ring makes Matlis duality an anti-equivalence

**Remember:** The double dual of R is its completion, so R must be complete.

*Rules out counterexamples.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13J10, 13D45. arXiv math.AC. Level 3: graduate.

**Definition.** Let R be a Noetherian local ring with residue field κ. Let E be an injective hull of κ, the smallest injective module containing it, and D(M) = Hom(M, E) the Matlis dual. The theorem asks that R be complete for the topology given by the powers of its maximal ideal.

**Problem.** If R is a complete Noetherian local ring, then D is an anti-equivalence between Artinian and Noetherian R-modules, with D∘D the identity on both sides.

**How the definition helps.** Completeness is exactly what makes the double dual of R equal to R, because D(D(R)) = Hom(E, E) is the completion of R. Without it the duality fails at R itself. For example, for k\[x\] localized at (x), the double dual is the power series ring k\[\[x\]\], which is larger (our own example). The remaining work is that E is Artinian and is the union of the injective hulls over the rings R/mⁿ.

**Wikipedia:** [Matlis duality](https://en.wikipedia.org/wiki/Matlis_duality). It says: “Then Matlis duality states that the duality functor D<sub>R</sub> gives an anti-equivalence between the categories of Artinian and Noetherian R-modules.”

**Paper or page:** [Dualizing, Lemma 47.7.5.](https://stacks.math.columbia.edu/tag/08Z6), [Dualizing, Proposition 47.7.8.](https://stacks.math.columbia.edu/tag/08Z9). It says: “Let E be an injective hull of κ over R. Then Hom<sub>R</sub>(E, E) is canonically isomorphic to the completion of R.”

**Sources:**

- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### The maximal-ideal test for faithful flatness makes flat local maps faithfully flat

**Remember:** A local map cannot make the quotient by the source maximal ideal vanish.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40, 13H99. arXiv math.AC. Level 3: graduate.

**Definition.** A flat R-module M is one for which tensoring keeps injective maps injective. Call a flat M faithfully flat if M/𝔪M ≠ 0 for every maximal ideal 𝔪 of R. The usual definition says that tensoring with M preserves and detects exact sequences. A local map R → S between local rings sends the maximal ideal of R into that of S.

**Problem.** Every flat local ring map between local rings is faithfully flat.

**How the definition helps.** With this definition, a local source has only one maximal ideal to test. Let 𝔪 be the maximal ideal of R and 𝔫 that of S. The ideal 𝔪S lies inside 𝔫, so S/𝔪S is not zero (our own). So the one test holds and S is faithfully flat. The work moves to Stacks Lemma 10.39.15, which shows that the test agrees with the usual definition.

**Paper or page:** [Algebra, Lemma 10.39.17.](https://stacks.math.columbia.edu/tag/00HR), [Algebra, Lemma 10.39.15.](https://stacks.math.columbia.edu/tag/00HP). It says: “A flat local ring homomorphism of local rings is faithfully flat.”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion with non-zero-divisors gives torsion-free modules over every ring

**Remember:** Torsion means killed by a non-zero-divisor, not by any nonzero element.

*Rules out counterexamples.* MSC 13C12 (Torsion modules and ideals in commutative rings), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** An element r of a ring is regular if it is not a zero divisor. An element m of a module is a torsion element if rm = 0 for some regular r. A module is torsion-free if 0 is its only torsion element.

**Problem.** Over every commutative ring, free modules are torsion-free. So are flat modules, the modules M for which tensoring with M keeps exact sequences exact.

**How the definition helps.** With a regular element in the definition, the ring R itself is torsion-free as a module, so free modules are torsion-free. The older domain-only definition uses any nonzero element, and over a ring with zero divisors it fails for every nonzero module, as the page says. If ab = 0 with a and b nonzero, and m ≠ 0, then either bm = 0, or a kills the nonzero element bm (our own). The converse stays false: the ideal (x, y) of k\[x, y\] is torsion-free but not flat.

**Wikipedia:** [Torsion-free module](https://en.wikipedia.org/wiki/Torsion-free_module). It says: “this does not work well over more general rings, for if the ring contains zero-divisors then the only module satisfying this condition is the zero module.”

**Sources:** none listed. No primary source with a working link was found.

### Auslander–Buchsbaum turns Cohen–Macaulayness into freeness over a regular subring

**Remember:** Cohen–Macaulay means free over a regular local subring.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules), 13D05, 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Cohen–Macaulay when its depth equals its Krull dimension. Depth is the length of a maximal regular sequence in the maximal ideal. This definition by depth replaces Macaulay's older one, that ideals generated by parameters are unmixed. Unlike unmixedness, depth enters the Auslander–Buchsbaum formula.

**Problem.** Let R be a local ring that is finitely generated as a module over a regular local subring A. Then R is Cohen–Macaulay if and only if R is a free A-module (Hironaka's criterion, also called miracle flatness).

**How the definition helps.** Over a regular local ring every finitely generated module has finite projective dimension. Since R is finite over A, dim R = dim A, and R has the same depth over A and over R (our own). So the Auslander–Buchsbaum formula gives pd R + depth R = dim A (our own). Hence R is Cohen–Macaulay exactly when pd R = 0, that is, when R is free over A (our own). The work goes into Serre's theorem on regular local rings and into the Auslander–Buchsbaum formula.

**Wikipedia:** [Cohen–Macaulay ring](https://en.wikipedia.org/wiki/Cohen%E2%80%93Macaulay_ring). It says: “Then R is Cohen–Macaulay if and only if it is flat as an A-module; it is also equivalent to say that R is free as an A-module.”

**Paper or page:** [Homological Local, Proposition 4.19](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let φ: S′ → S be a local map of local noetherian rings such that S is a finitely generated S′-module. Then, for any finitely generated S-module M, depthS M = depthS′ M.”

**Sources:** none listed. No primary source with a working link was found.

### Cohen–Macaulay modules exclude embedded primes

**Remember:** In a Cohen–Macaulay module, positive local dimension forces positive local depth.

*Rules out counterexamples.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 3: graduate.

**Definition.** A finite module over a Noetherian ring is Cohen–Macaulay if its depth equals its dimension at every prime of its support. The support is the set of primes where the localized module is nonzero. Over a Noetherian local ring, it is equivalent to test only at the maximal ideal.

**Problem.** Every associated prime of a finite Cohen–Macaulay module over a Noetherian local ring is minimal in its support. An associated prime consists of all scalars killing some particular nonzero element.

**How the definition helps.** The local depth test rules out embedded primes because they have positive local dimension but depth zero (our own). The ring k\[x,y\]/(x²,xy) at (x,y) fails the test because x has annihilator (x,y), above the minimal prime (x) (our own). Localization of Cohen–Macaulay modules proves that the test agrees with the usual definition (our own).

**Paper or page:** [Algebra, Lemma 10.103.7.](https://stacks.math.columbia.edu/tag/0BUS). It says: “In particular, M has no embedded associated primes.”

**Sources:** none listed. No primary source with a working link was found.

### Regular quotients preserve Cohen–Macaulayness

**Remember:** One regular element lowers both numbers by one.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 3: graduate.

**Definition.** For a nonzero finite module over a Noetherian local ring, Cohen–Macaulay means depth equals dimension. Depth counts the longest sequence in the maximal ideal acting injectively on successive quotients. Dimension counts the longest chain of strict prime inclusions where localization leaves the module nonzero.

**Problem.** If x lies in the maximal ideal and acts injectively on a nonzero finite module M, then M is Cohen–Macaulay exactly when M/xM is.

**How the definition helps.** The depth definition reduces the comparison to subtracting one from both sides of an equality (our own). An alternative tests whether every sequence of parameters acts injectively on successive quotients (our own). The work here lies in proving that an injective element of the maximal ideal lowers both depth and dimension by one (our own).

**nLab:** [Cohen-Macaulay module](https://ncatlab.org/nlab/show/Cohen-Macaulay+module). It says: “its depth is equal to its Krull dimension”

**Wikipedia:** [Cohen–Macaulay ring](https://en.wikipedia.org/wiki/Cohen%E2%80%93Macaulay_ring). It says: “R is Cohen–Macaulay if and only if R/(u) is Cohen–Macaulay.”

**Paper or page:** [Algebra, Lemma 10.103.5.](https://stacks.math.columbia.edu/tag/0C6G). It says: “Then M is Cohen-Macaulay if and only if M/xM is Cohen-Macaulay.”

**Sources:** none listed. No primary source with a working link was found.

### Defining depth by Ext makes all maximal regular sequences equally long

**Remember:** Depth is the first degree where Ext stops vanishing.

*True by definition.* MSC 13C15 (Dimension theory, depth, related commutative rings (catenary, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** An M-regular sequence in an ideal I is a list x₁,…,xₙ in I such that each xᵢ is a nonzerodivisor on M/(x₁,…,xᵢ₋₁)M. Define the depth of I on M as the least i with Extⁱ(R/I, M) ≠ 0. This number mentions no sequence at all, unlike the older definition as the length of a maximal regular sequence.

**Problem.** Let R be Noetherian, let M be a finitely generated module, and let I be an ideal with IM ≠ M. Then every maximal M-regular sequence in I has length equal to the least i with Extⁱ(R/I, M) ≠ 0 (Rees's theorem).

**How the definition helps.** The Ext number does not depend on any choice, so the theorem only has to show that each maximal sequence has that length. If x in I is regular on M, passing to M/xM lowers the Ext number by one (our own). If no element of I is regular on M, then I lies in an associated prime of M. Such a prime annihilates some element of M. So Hom(R/I, M) ≠ 0 (our own). The work goes into these two steps of an induction.

**Wikipedia:** [Depth (ring theory)](https://en.wikipedia.org/wiki/Depth_%28ring_theory%29). It says: “Then all maximal regular sequences x₁, …, xₙ for M, where each xᵢ belongs to 𝔪, have the same length n equal to the 𝔪-depth of M.”

**Paper or page:** [Homological Local, Theorem 2.20](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Suppose M is an R-module and IM ≠ M. All maximal M-sequences in I have the same length. This length is the smallest value of r such that Extʳ(R/I, M) ≠ 0.”

**Sources:**

- [D. Rees, The grade of an ideal or module, Mathematical Proceedings of the Cambridge Philosophical Society 53 (1957), 28–42.](https://doi.org/10.1017/s0305004100031960)

### The Ext definition of depth makes depth bounds follow from exact sequences

**Remember:** If both ends have zero Ext in low degrees, the middle does too.

*True by definition.* MSC 13C15 (Dimension theory, depth, related commutative rings (catenary, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** Let R be a Noetherian local ring with maximal ideal 𝔪, and let k = R/𝔪. Define the depth of a nonzero finitely generated module M as the least i with Extⁱ(k, M) ≠ 0. The usual definition counts the longest sequence in 𝔪 where each element is a nonzero divisor modulo the earlier ones.

**Problem.** Let 0 → N′ → N → N″ → 0 be a short exact sequence of nonzero finitely generated modules over a Noetherian local ring. Then depth(N) ≥ min{depth(N′), depth(N″)}.

**How the definition helps.** With this definition, the bound is read off from the long exact sequence Extⁱ(k, N′) → Extⁱ(k, N) → Extⁱ(k, N″) (our own). Below both outer depths, the outer groups are zero, so the middle one is zero too (our own). The work moves to Stacks Lemma 10.72.5, which shows that the Ext definition agrees with the usual one. With regular sequences, the bound needs a separate induction (our own).

**Paper or page:** [Algebra, Lemma 10.72.6.](https://stacks.math.columbia.edu/tag/00LX), [Algebra, Lemma 10.72.5.](https://stacks.math.columbia.edu/tag/00LW). It says: “depth(N) ≥ min{depth(N′), depth(N″)}”

**Sources:** none listed. No primary source with a working link was found.

### Fitting ideals commute with base change

**Remember:** The same minors work over the new ring.

*True by definition.* MSC 13C40 (Linkage, complete intersections and determinantal ideals). arXiv math.AC. Level 3: graduate.

**Definition.** Choose n generators of a finite module and put their relations in the columns of a matrix. For 0 ≤ k &lt; n, determinants of square submatrices of size n − k generate the kth Fitting ideal. If no such submatrix exists, the ideal is zero. For k ≥ n, use the whole ring.

**Problem.** Fitting ideals of finite modules commute with extension of scalars along every ring map.

**How the definition helps.** Ring maps preserve determinants, so the same matrix gives the transformed ideal (our own). Tensoring a presentation still presents the module after extending scalars (our own). The work lies in showing that the ideal depends only on the module (our own).

**Paper or page:** [More Algebra, Lemma 15.8.4.](https://stacks.math.columbia.edu/tag/07ZA). It says: “If $R \\to R'$ is a ring map, then $\\text{Fit}<sub>k</sub>(M \\otimes<sub>R</sub> R')$ is the ideal of $R'$ generated by the image of $\\text{Fit}<sub>k</sub>(M)$.”

**Sources:** none listed. No primary source with a working link was found.

### Fitting ideals make 'locally free of rank r' a representable condition

**Remember:** Minors of a presentation detect the rank after any base change.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C40 (Linkage, complete intersections and determinantal ideals), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Take a finitely generated module M with a presentation Rᵐ → Rⁿ → M → 0. Its k-th Fitting ideal is generated by the minors of size n − k of the presentation matrix. It does not depend on the presentation, and it commutes with base change.

**Problem.** Let ℱ be a finite type quasi-coherent sheaf on a scheme S, and let Zₖ be the closed subscheme cut out by its k-th Fitting ideal. The maps T → S over which the pullback of ℱ is locally free of rank r are exactly those that factor through Zᵣ₋₁ ∖ Zᵣ.

**How the definition helps.** Fitting ideals commute with base change, so a condition on them is automatically a condition over every T mapping to S. A finite module is locally free of rank r exactly when its r-th Fitting ideal is the whole ring and its (r − 1)-th is zero (our own). A pointwise test by fibre dimension would give the wrong scheme structure (our own example). Over k\[ε\]/(ε²), the module R/(ε) has fibre dimension 1 but is not free, and the rank-1 locus is the reduced point only.

**Paper or page:** [Stacks Project, Divisors, Lemma 31.9.6](https://stacks.math.columbia.edu/tag/05P8). It says: “The closed subschemes … defined by the Fitting ideals of ℱ have the following properties … The functor Fᵣ … is representable by the locally closed subscheme Zᵣ₋₁ ∖ Zᵣ of S.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 05P8 (Divisors, Lemma 31.9.6)](https://stacks.math.columbia.edu/tag/05P8)

### Comparing modules up to projective summands makes syzygies well defined

**Remember:** Syzygies are unique once projective summands are ignored.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D05, 16D40. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** A first syzygy of a module M is the kernel K of a surjection P → M from a projective module P. Schanuel's lemma says that two such kernels K and K′, from P and P′, satisfy K ⊕ P′ ≅ K′ ⊕ P. So the syzygy is well defined once modules are compared up to adding projective summands.

**Problem.** A module M has projective dimension at most n if and only if, in some projective resolution of M, the n-th syzygy is projective. Then the n-th syzygy is projective in every projective resolution of M.

**How the definition helps.** Two n-th syzygies of M differ only by projective summands. A direct summand of a projective module is projective, so being projective is a property of M, not of the resolution. Applying Schanuel's lemma n times needs only induction (our own). The usual alternative proof uses Ext: the n-th syzygy is projective exactly when Extⁿ⁺¹(M, −) vanishes (our own). The work goes into Schanuel's lemma, which compares the two surjections onto M through their pullback.

**Wikipedia:** [Schanuel's lemma](https://en.wikipedia.org/wiki/Schanuel%27s_lemma). It says: “If 0→K→P→M→0 and 0→K′→P′→M→0 are short exact sequences of R-modules and P and P′ are projective, then K⊕P′ is isomorphic to K′⊕P.”

**Paper or page:** [Homological Local, Proposition 4.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “We have pd(M) ≤ n if any projective resolution ⋯ → P₁ → P₀ → M → 0 breaks off at the nth stage: that is, the kernel of Pₙ₋₁ → Pₙ₋₂ is projective.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Koszul complexes as tensor products makes them iterated cones

**Remember:** Adding one element takes the cone of multiplication by that element.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 18G35. arXiv math.KT. Level 3: graduate.

**Definition.** For ring elements f₁, …, fᵣ, the Koszul complex is a tensor product of two-term complexes R → R. The i-th one is multiplication by fᵢ. The classical definition uses exterior powers of a free module with an alternating-sum differential.

**Problem.** The Koszul complex on f₁, …, fᵣ is the mapping cone of multiplication by fᵣ on the Koszul complex on f₁, …, fᵣ₋₁.

**How the definition helps.** Tensoring any complex with the two-term complex for f is exactly the cone of multiplication by f, so the result is immediate (our own). The work goes into matching the tensor product with the exterior-power definition, including signs (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.28.8](https://stacks.math.columbia.edu/tag/0629). It says: “is isomorphic to the cone of the map of complexes”

**Sources:** none listed. No primary source with a working link was found.

### Fine multigrading turns Betti numbers of face rings into simplicial homology

**Remember:** Each set of vertices carries its own piece of homology.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13F55, 05E45. arXiv math.AC, math.CO. Level 3: graduate.

**Definition.** The Stanley–Reisner ring k\[Δ\] of a simplicial complex Δ on vertices 1,…,n is k\[x₁,…,xₙ\] divided by the squarefree monomials of the non-faces. Grade it by ℤⁿ, with the i-th unit vector as the degree of xᵢ. The multigraded Betti number β(i, b) is the dimension of the degree-b part of Torᵢ(k\[Δ\], k).

**Problem.** Only squarefree degrees occur, that is, subsets W of the vertices. Let Δ restricted to W be the faces lying inside W. Then β(i, W) is the dimension of its reduced homology in degree \|W\| − i − 1 (Hochster's formula).

**How the definition helps.** Compute Tor by tensoring k\[Δ\] with the Koszul resolution of k. The part of this complex in degree W is, up to a shift, the simplicial cochain complex of Δ restricted to W (our own). The quote gives the coarse form for the ideal of Δ, whose Betti numbers are those of k\[Δ\] moved by one step (our own). The work goes into the Koszul resolution of k and into Tor being computable from either argument.

**Wikipedia:** [Stanley–Reisner ring](https://en.wikipedia.org/wiki/Stanley%E2%80%93Reisner_ring). It says: “The face ring k\[Δ\] is a multigraded algebra over k all of whose components with respect to the fine grading have dimension at most 1. Consequently, its homology can be studied by combinatorial and geometric methods.”

**Paper or page:** [Betti Cones of Stanley-Reisner Ideals](https://arxiv.org/abs/2401.05962v1). It says: “For any integers 0≤i≤n and d, we have β<sub>i,d</sub>(I\_Δ) = ∑<sub>U∈(V choose d)</sub> dim\_𝕂 H̃<sub>d−i−2</sub>(Δ<sub>U</sub>) where (V choose d) denotes the subsets of V of size d.”

**Sources:** none listed. No primary source with a working link was found.

### Graded free resolutions make Hilbert series a polynomial over (1 − t)ⁿ

**Remember:** Resolve, then add up free pieces with signs.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D40. arXiv math.AC. Level 3: graduate.

**Definition.** Let M be a graded module over S = k\[x₁,…,xₙ\], with each xᵢ of degree 1. Its Hilbert series is the power series whose d-th coefficient is the dimension of the degree-d part of M. A free module of rank one with generator in degree j has Hilbert series tʲ/(1 − t)ⁿ. Hilbert series add over exact sequences of graded modules.

**Problem.** Let M be a finitely generated graded S-module generated in degrees ≥ 0. Then its Hilbert series equals K(t)/(1 − t)ⁿ for a polynomial K(t) with integer coefficients. Hence the dimension of the degree-d part of M agrees with a polynomial in d for all large d (Hilbert's theorem).

**How the definition helps.** A finite graded free resolution writes the Hilbert series of M as an alternating sum of series of the form tʲ/(1 − t)ⁿ. The syzygy theorem supplies this finite resolution. The numerator is K(t) = Σ (−1)ⁱ βᵢⱼ tʲ, where βᵢⱼ counts degree-j generators in step i (our own). Expanding 1/(1 − t)ⁿ as a series then gives the Hilbert polynomial (our own).

**Wikipedia:** [Hilbert series and Hilbert polynomial](https://en.wikipedia.org/wiki/Hilbert_series_and_Hilbert_polynomial). It says: “Every graded module M over a graded regular ring R has a graded free resolution because of the Hilbert syzygy theorem”

**Paper or page:** [Algebra, Proposition 10.58.7](https://stacks.math.columbia.edu/tag/00K1). It says: “If S₊ is generated by elements of degree 1, then this function is a numerical polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Koszul differentials defined as derivations give exact complexes for nonzero functionals

**Remember:** Wedging with a vector of value one undoes the differential.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 15A75. arXiv math.AC. Level 3: graduate.

**Definition.** Let φ be a linear functional on V. On the exterior algebra of alternating wedge products, define the Koszul differential d to lower degree by one and equal φ on V. It must also obey a signed product rule, d(a ∧ b) = d(a) ∧ b + (−1)ᵏ a ∧ d(b) when a has degree k. The coordinate definition is an alternating sum that deletes one basis vector at a time.

**Problem.** Let φ be a nonzero linear functional on a vector space over a field. Then its Koszul complex has zero homology in every degree. That is, every x with d(x) = 0 equals d(y) for some y.

**How the definition helps.** With this definition, one short identity shows that every cycle is a boundary. Choose v with φ(v) = 1; the product rule gives d(v ∧ x) + v ∧ d(x) = x for every x. So if d(x) = 0, then x = d(v ∧ x). With the coordinate formula, the same identity needs an index computation (these steps are our own).

**nLab:** [Koszul complex](https://ncatlab.org/nlab/show/Koszul+complex). It says: “The differential can be obtained from the faces of the obvious Koszul semi-simplicial R-module”

**Sources:** none listed. No primary source with a working link was found.

### Koszul resolutions make Ext of a regular quotient an exterior algebra

**Remember:** For a regular ideal, Ext is the exterior algebra on the normal module.

*True by definition. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D07. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An ideal I of R is Koszul-regular when, locally on R, it is generated by elements whose Koszul complex is a resolution of R/I. A regular sequence gives an example. Then the conormal module I/I² is locally free over R/I, and its dual N = Hom(I/I², R/I) is called the normal module.

**Problem.** If I is Koszul-regular, then the Yoneda product, which splices extensions, makes Extⁱ(R/I, R/I) isomorphic to the i-th exterior power of N for every i. Likewise Torᵢ(R/I, R/I) is the i-th exterior power of I/I².

**How the definition helps.** Every differential of the Koszul complex multiplies by generators of I. So after applying Hom(−, R/I), or tensoring with R/I, all differentials become zero (our own). Then Ext and Tor are just the terms of the new complex, which are exterior powers (our own). Koszul-regularity, not regularity of a sequence, is exactly what this proof uses (our own). The work goes into matching the Yoneda product with the wedge product.

**Paper or page:** [Duality, Lemma 48.15.4](https://stacks.math.columbia.edu/tag/0BQY). It says: “If ℐ is Koszul-regular (Divisors, Definition) then composition on RHom\_𝒪Y(𝒪X, 𝒪X) defines isomorphisms ∧ⁱ(Ext¹\_𝒪Y(𝒪X, 𝒪X)) → Extⁱ\_𝒪Y(𝒪X, 𝒪X)”

**Sources:** none listed. No primary source with a working link was found.

### Koszul-regular sequences do not depend on order, unlike regular sequences

**Remember:** The Koszul complex forgets the order, so Koszul-regularity does too.

*Rules out counterexamples. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C40. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A sequence f₁, …, fᵣ is regular if each fᵢ is a nonzerodivisor modulo the earlier ones. It is Koszul-regular if its Koszul complex, a standard finite complex of free modules built from the fᵢ, has no homology except in degree 0. The Koszul complex does not change, up to isomorphism, when the fᵢ are permuted.

**Problem.** Koszul-regularity of a sequence does not depend on its order, but regularity can. On a locally Noetherian scheme, regular and Koszul-regular ideal sheaves are the same.

**How the definition helps.** The Koszul complex is symmetric in the fᵢ, so Koszul-regularity cannot depend on their order. Regular sequences can (our own, a standard example): in k\[x, y, z\], the sequence x, y(1 − x), z(1 − x) is regular, but y(1 − x), z(1 − x), x is not. So Koszul-regularity gives a notion of regular immersion that is local and independent of the chosen generators. Outside the Noetherian case the notions can differ, and one must choose (our own).

**Paper or page:** [Stacks Project, Divisors, Lemma 31.20.8](https://stacks.math.columbia.edu/tag/063I), [Stacks Project, Divisors, Lemma 31.20.1](https://stacks.math.columbia.edu/tag/063C), [Stacks Project, Cotangent, Lemma 92.14.2](https://stacks.math.columbia.edu/tag/08SJ). It says: “In particular, on a locally Noetherian scheme the notions of regular, Koszul-regular, H₁-regular, or quasi-regular ideal sheaf all agree.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 063I (Divisors, Lemma 31.20.8)](https://stacks.math.columbia.edu/tag/063I)
- [The Stacks Project Authors, The Stacks Project, Tag 063C (Divisors, Lemma 31.20.1)](https://stacks.math.columbia.edu/tag/063C)
- [The Stacks Project Authors, The Stacks Project, Tag 08SJ (Cotangent, Lemma 92.14.2)](https://stacks.math.columbia.edu/tag/08SJ)

### Measuring depth by Koszul homology makes it ignore finite ring extensions

**Remember:** Koszul homology sees depth through any set of generators.

*True by definition. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C15. arXiv math.AC. Level 3: graduate.

**Definition.** The Koszul complex K(x; M) on elements x₁,…,xₙ is M tensored with the exterior algebra on n generators. Its differential sends the i-th generator to xᵢ. Let R be Noetherian and M finitely generated. Depth-sensitivity says: if m is the largest i with Hᵢ(K(x; M)) ≠ 0, then (x₁,…,xₙ) has depth n − m on M.

**Problem.** Let R → S be a local map of Noetherian local rings. Let M be a finitely generated S-module that is also finitely generated over R. Then the depth of M over R equals its depth over S.

**How the definition helps.** Koszul homology on generators of 𝔪 is the same whether M is viewed over R or over S (our own). Over S, these elements and the annihilator of M generate an ideal with radical 𝔫, since M/𝔪M has finite length (our own). Depth on M depends only on that radical, which ends the proof (our own). The work goes into depth-sensitivity, not into tracking regular sequences from R inside S.

**Wikipedia:** [Koszul complex](https://en.wikipedia.org/wiki/Koszul_complex). It says: “then every maximal M-regular sequence in I has length n - m (in particular, they all have the same length).”

**Paper or page:** [Homological Local, Proposition 2.10](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let (R, 𝔪) → (S, 𝔫) be a morphism of noetherian local rings. Suppose M is a finitely generated S-module, which is also finitely generated as an R-module. Then depthR M = depthS M.”

**Sources:** none listed. No primary source with a working link was found.

### Measuring projective dimension by Tor with the field proves Hilbert's syzygy theorem

**Remember:** Resolve k instead of M, and n steps suffice.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** Let S = k\[x₁,…,xₙ\] with k a field. For a finitely generated graded S-module M, the minimal graded free resolution has i-th term of rank equal to the dimension of Torᵢ(M, k). So the projective dimension of M, the length of its shortest projective resolution, is the largest i with Torᵢ(M, k) ≠ 0.

**Problem.** Every finitely generated graded module over k\[x₁,…,xₙ\] has a graded free resolution of length at most n (Hilbert's syzygy theorem). The bound is sharp, since k itself has projective dimension n.

**How the definition helps.** Tor can be computed by resolving the second argument, and the Koszul complex resolves k in n + 1 steps (our own). So Torᵢ(M, k) = 0 for i &gt; n, and the minimal resolution of M stops by step n. For M = k, Torₙ(k, k) is the top exterior power of kⁿ, which is nonzero (our own). This replaces the classical proofs, which induct on the number of variables or use Gröbner bases (our own). The work goes into the balancing of Tor and into Nakayama's lemma, which matches the ranks of the minimal resolution with the dimensions of Tor.

**Wikipedia:** [Hilbert's syzygy theorem](https://en.wikipedia.org/wiki/Hilbert%27s_syzygy_theorem). It says: “Hilbert's syzygy theorem may be restated as: the global dimension of k\[x₁,…,xₙ\] is n.”

**Paper or page:** [Lower bounds on Betti numbers](https://arxiv.org/abs/2108.05871v1), [Algebra, Proposition 10.114.2](https://stacks.math.columbia.edu/tag/00OQ). It says: “Let R = k\[x₁, …, xₙ\] be a polynomial ring in n variables over a field k. If M is a finitely generated graded R-module, then M has a finite free resolution of length at most n.”

**Sources:** none listed. No primary source with a working link was found.

### Mumford's shifted vanishing condition makes regularity pass to all higher twists

**Remember:** Each higher cohomology vanishes one twist earlier than the last.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A coherent sheaf F on projective space ℙⁿ over a field is m-regular when Hⁱ(ℙⁿ, F(m − i)) = 0 for every i &gt; 0. The shift by −i is the point of the definition: the i-th cohomology must vanish i twists below m.

**Problem.** If F is m-regular, then F is d-regular for every d ≥ m. Moreover, for d ≥ m the sheaf F(d) is generated by its global sections and Hⁱ(ℙⁿ, F(d)) = 0 for all i ≥ 1 (Castelnuovo–Mumford).

**How the definition helps.** The shifts match the long exact sequence for restriction to a hyperplane H that avoids the associated points of F. So the restriction of F to H is again m-regular, and induction on n applies. The same sequence then gives Hⁱ(F(m + 1 − i)) = 0, which is (m + 1)-regularity (our own). Global generation needs one more step: the multiplication maps from H⁰(F(d)) ⊗ H⁰(𝒪(1)) to H⁰(F(d + 1)) are onto for d ≥ m. The work goes into choosing such a hyperplane, after enlarging the field if needed, and into the case n = 0.

**Wikipedia:** [Castelnuovo–Mumford regularity](https://en.wikipedia.org/wiki/Castelnuovo%E2%80%93Mumford_regularity). It says: “If a coherent sheaf is r-regular then F(r) is generated by its global sections.”

**Paper or page:** [J. Alper, Stacks and Moduli, Chapter 2.3 Regularity, Proposition 2.3](https://sites.math.washington.edu//~jarod/moduli.pdf), [J. Alper, Stacks and Moduli, Chapter 2.3 Regularity, Lemma 2.2](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “For d ≥ m, F(d) is globally generated and Hⁱ(ℙⁿ, F(d)) = 0 for i ≥ 1.”

**Sources:**

- [D. Mumford, Lectures on Curves on an Algebraic Surface, Annals of Mathematics Studies 59, Princeton University Press, 1966.](https://doi.org/10.1515/9781400882069)

### Ranks and ideals of minors make exactness of free complexes checkable

**Remember:** A free complex is exact when its minors are deep enough.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C15. arXiv math.AC. Level 3: graduate.

**Definition.** Let φ be a map of finite free modules over a commutative ring. The rank of φ is the largest r such that some r × r minor of its matrix is nonzero. Let I(φ) be the ideal generated by the minors of that size. These two invariants replace the rank over a field, which has no meaning over a general ring.

**Problem.** Let R be a Noetherian local ring and 0 → Fₑ → … → F₀ a complex of finite free modules with maps φᵢ. It is exact except at F₀ exactly when two conditions hold for each i (Buchsbaum–Eisenbud). First, φᵢ has rank Fᵢ − rank Fᵢ₊₁ + rank Fᵢ₊₂ − …; second, I(φᵢ) is R or contains a regular sequence of length i.

**How the definition helps.** Ranks and ideals of minors are polynomial conditions on the matrix entries, so exactness becomes a statement about the depth of ideals. The case of one map is McCoy's theorem. It says φ is injective exactly when its rank equals the rank of its source and I(φ) has zero annihilator. The work goes into localizing at the primes that contain some I(φᵢ), and into the depth lemma for exact sequences (our own).

**Paper or page:** [Algebra, Proposition 10.102.9](https://stacks.math.columbia.edu/tag/00N1), [More Algebra, Lemma 15.15.6](https://stacks.math.columbia.edu/tag/00MX). It says: “I(φᵢ) = R, or I(φᵢ) contains a regular sequence of length i.”

**Sources:**

- [D. A. Buchsbaum and D. Eisenbud, What makes a complex exact?, Journal of Algebra 25 (1973), 259–268.](https://doi.org/10.1016/0021-8693(73)90044-6)

### Defining the cotangent complex by resolutions makes it Ω for polynomial algebras

**Remember:** A polynomial algebra is its own free resolution.

*True by definition.* MSC 13D03 ((Co)homology of commutative rings and algebras (e.g., Hochschild, André-Quillen, cyclic, dihedral, etc.)), 18G31. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** Let A → B be a ring map. Choose a simplicial A-algebra P with a map P → B such that each Pₙ is a polynomial algebra over A. The map must induce an isomorphism on homotopy groups. The cotangent complex L(B/A) is the chain complex of the B-modules Ω(Pₙ/A) ⊗ B, the left derived functor of Kähler differentials Ω.

**Problem.** If B is a polynomial algebra over A, then L(B/A) is quasi-isomorphic to the Kähler differentials Ω(B/A) placed in degree zero.

**How the definition helps.** The constant simplicial algebra with value B is already a resolution by polynomial algebras, so the definition computes Ω(B/A) directly. The work moves to the theorem that any two such resolutions give the same answer (Stacks Project, Cotangent, tag 08PS). That theorem rests on the homotopy theory of simplicial algebras.

**Wikipedia:** [Cotangent complex](https://en.wikipedia.org/wiki/Cotangent_complex). It says: “We can take the resolution of Spec(A\[x1,…,xn\]) to be the identity map, and then it is clear that the cotangent complex is the same as the Kähler differentials.”

**Paper or page:** [Cotangent, tag 08QH](https://stacks.math.columbia.edu/tag/08QH), [Cotangent, tag 08PS](https://stacks.math.columbia.edu/tag/08PS). It says: “If B is a polynomial algebra over the ring A, then L<sub>B</sub>/A is quasi-isomorphic to Ω<sub>B</sub>/A\[0\].”

**Sources:**

- [Luc Illusie, Complexe Cotangent et Déformations I, Lecture Notes in Mathematics 239, Springer (1971)](https://doi.org/10.1007/BFb0059052)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Deriving Kähler differentials extends the Jacobi–Zariski sequence to a triangle

**Remember:** Derive the differentials, and the three-term sequence never loses exactness.

*Rules out counterexamples.* MSC 13D03 ((Co)homology of commutative rings and algebras (e.g., Hochschild, André-Quillen, cyclic, dihedral, etc.)), 18G31. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** The cotangent complex L(B/A) of a ring map A → B is the left derived functor of Kähler differentials. It is computed from a simplicial resolution of B by polynomial A-algebras. Its homology in degree zero is the module of Kähler differentials Ω(B/A).

**Problem.** Let A → B → C be ring maps. Without any smoothness hypothesis, there is a distinguished triangle L(B/A) ⊗ C → L(C/A) → L(C/B) → shift. Its long exact homology sequence ends with the classical sequence Ω(B/A) ⊗ C → Ω(C/A) → Ω(C/B) → 0.

**How the definition helps.** A derived functor turns a right exact sequence into a long exact one, so failures of left exactness are absorbed by first homology groups. For ℤ → ℤ\[x\] → ℤ\[x\]/(x), the classical map from ℤ·dx to Ω(ℤ/ℤ) = 0 is not injective. The triangle repairs this with the term H₁(L(C/B)) = (x)/(x²) (our own example). The work went into choosing compatible polynomial resolutions for the two maps.

**Wikipedia:** [Cotangent complex](https://en.wikipedia.org/wiki/Cotangent_complex). It says: “This sequence is exact on the left if the morphism f is smooth.”

**Paper or page:** [Cotangent, tag 08QX](https://stacks.math.columbia.edu/tag/08QX). It says: “Let A → B → C be ring maps. There is a canonical distinguished triangle L<sub>B</sub>/A ⊗ᴸ<sub>B</sub> C → L<sub>C</sub>/A → L<sub>C</sub>/B → L<sub>B</sub>/A ⊗ᴸ<sub>B</sub> C\[1\] in D(C).”

**Sources:**

- [Luc Illusie, Complexe Cotangent et Déformations I, Lecture Notes in Mathematics 239, Springer (1971)](https://doi.org/10.1007/BFb0059052)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Minimal resolutions reveal projective dimension

**Remember:** Over the residue field, all differentials vanish.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** A free resolution is an exact sequence of free modules ending in the given module. Over a Noetherian local ring, call it minimal when every differential between free modules has entries in the maximal ideal. Equivalently, choose a smallest generating set at each step. Projective dimension is the least length of a projective resolution, or infinity when none has finite length.

**Problem.** For a nonzero finite module, projective dimension equals the largest degree with nonzero Tor against the residue field, or infinity if the degrees are unbounded.

**How the definition helps.** The matrix test makes all differentials zero after tensoring with the residue field, the quotient by the maximal ideal (our own). Tor is the homology of this tensor product, so it records the rank in every degree (our own). A nonzero Tor group rules out any shorter projective resolution (our own). When the ranks vanish above some degree, the minimal resolution itself supplies the upper bound (our own). Nakayama’s lemma connects the matrix test to the construction by smallest generating sets (our own).

**Paper or page:** [Homological Local, Corollary 4.7.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Then pd(M) is the largest integer n such that Torₙ(M, k) ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Serre's definition of regular rings by global dimension shuts out Nagata's example

**Remember:** A uniform bound on resolutions forbids infinite dimension.

*Rules out counterexamples.* MSC 13D05 (Homological dimension and commutative rings), 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring is usually called regular when every localization at a prime is a regular local ring. Serre instead called a Noetherian ring regular when it has finite global dimension. This is a uniform bound on the projective dimensions of all its modules. Nagata built a Noetherian ring whose localizations are all regular, but whose Krull dimension is infinite.

**Problem.** A Noetherian ring has finite global dimension n exactly when all its localizations are regular and its Krull dimension is n. So Serre's regular rings are the regular rings of finite Krull dimension, and Nagata's ring is not one of them.

**How the definition helps.** Serre's definition contains a uniform bound, and the uniform bound is exactly what Nagata's ring lacks. Nagata's ring is regular in the localization sense, but its local rings have unbounded dimension, so its global dimension is infinite (our own). So under the localization definition, the statement that regular rings have finite global dimension needs finite Krull dimension. The work goes into Serre's local theorem that a regular local ring of dimension d has global dimension d.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring). It says: “Jean-Pierre Serre defined a regular ring as a commutative noetherian ring of finite global homological dimension. His definition is stronger than the definition above, which allows regular rings of infinite Krull dimension.”

**Paper or page:** [Algebra, Lemma 10.110.8](https://stacks.math.columbia.edu/tag/00OE), [Algebra, Lemma 10.110.2](https://stacks.math.columbia.edu/tag/00O9). It says: “Let R be a Noetherian ring. The following are equivalent: R has finite global dimension n, R is a regular ring of dimension n,”

**Sources:** none listed. No primary source with a working link was found.

### Serre's homological criterion makes regularity descend along flat local maps

**Remember:** Regular means the residue field has a finite resolution.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings), 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R with maximal ideal 𝔪 is regular when 𝔪 is generated by dim R elements. Serre's criterion says this holds exactly when the residue field k = R/𝔪 has finite projective dimension, or equally when R has finite global dimension. The global dimension is the supremum of the projective dimensions of all modules.

**Problem.** Let R → S be a flat local map of Noetherian local rings. If S is regular, then R is regular.

**How the definition helps.** The homological criterion only asks for one finite resolution, and flat base change moves resolutions from R to S. A minimal free resolution of k over R becomes a minimal free resolution of S/𝔪S over S of the same length (our own). Since S is regular, S/𝔪S has finite projective dimension, so both resolutions are finite, and R is regular (our own). The work goes into Serre's theorem that this criterion agrees with the generator-counting definition.

**Paper or page:** [Homological Local, Proposition 5.2](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Proposition 10.110.5](https://stacks.math.columbia.edu/tag/00OC). It says: “Let (R, 𝔪) → (S, 𝔫) be a flat, local homomorphism of noetherian local rings. If S is regular, so is R.”

**Sources:** none listed. No primary source with a working link was found.

### Testing projective dimension by Tor with the residue field bounds every module

**Remember:** No module is harder to resolve than the residue field.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** Let M be a finitely generated module over a Noetherian local ring R with residue field k. Define the projective dimension of M as the largest i with Torᵢ(M, k) ≠ 0. This replaces the length of a shortest projective resolution, which needs a search over all resolutions.

**Problem.** Every finitely generated module over a Noetherian local ring R has projective dimension at most pd k. Hence the global dimension of R equals the projective dimension of its residue field.

**How the definition helps.** Tor can be computed by resolving k instead of M, so Torᵢ(M, k) = 0 for i &gt; pd k (our own). The Tor definition then gives pd M ≤ pd k at once. The work goes into the Tor description of projective dimension, which uses Nakayama's lemma and minimal resolutions. Passing to all modules uses the fact that global dimension is detected on cyclic modules R/I.

**Paper or page:** [Homological Local, Corollary 4.8](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Lemma 10.109.12](https://stacks.math.columbia.edu/tag/065T). It says: “Suppose there exists n such that Torₙ₊₁(k, k) = 0. Then every finitely generated R-module has a finite free resolution of length at most n.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Gorenstein by finite injective dimension makes regular rings Gorenstein

**Remember:** Finite global dimension bounds every injective dimension, including that of R.

*True by definition.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13H10, 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R is Gorenstein when R, as a module over itself, has finite injective dimension. That is, R has an injective resolution of finite length. A Noetherian ring is Gorenstein when all its localizations at primes are. A regular local ring is one whose maximal ideal is generated by dim R elements.

**Problem.** Every regular local ring is Gorenstein, and so is every regular ring.

**How the definition helps.** With Gorenstein defined by finite injective dimension, Serre's theorem settles it: over a regular local ring, projective resolutions have bounded length. That bound, the global dimension, also bounds the injective dimension of every module, R included. With Bass's equivalent definition by Ext modules, one would instead compute Ext(k, R), with k the residue field, by a Koszul complex (our own remark). For a regular ring, every localization is a regular local ring, so the global case follows.

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “a Gorenstein local ring is a commutative Noetherian local ring R with finite injective dimension as an R-module.”

**Paper or page:** [Dualizing, Lemma 47.21.3.](https://stacks.math.columbia.edu/tag/0AWX). It says: “A regular local ring is Gorenstein. A regular ring is Gorenstein.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)

### Flat base change lets Ext be computed over the larger ring

**Remember:** Flatness keeps resolutions exact, and the adjunction does the rest.

*Rules out counterexamples.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 18G15. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A ring map R → R′ is flat when tensoring over R with R′ keeps exact sequences exact. The base change adjunction says that R′-linear maps M ⊗ R′ → N′ are the same as R-linear maps M → N′, for each R′-module N′.

**Problem.** Let R → R′ be flat, M an R-module and N′ an R′-module. Then Extⁱ over R′ of (M ⊗ R′, N′) is isomorphic to Extⁱ over R of (M, N′) for all i ≥ 0.

**How the definition helps.** Flatness turns a projective resolution P of M into a projective resolution P ⊗ R′ of M ⊗ R′ (our own). Then the adjunction matches the two Hom complexes term by term (our own). Without flatness this fails: for Z → Z/2 and M = N′ = Z/2, Ext¹ over Z/2 is 0 (our own). But Ext¹ over Z of (Z/2, Z/2) is Z/2 (our own). The work moves into the independence of Ext from the chosen resolution.

**Paper or page:** [Algebra, Lemma 10.73.1.](https://stacks.math.columbia.edu/tag/087N). It says: “Given a flat ring map R → R′, an R-module M, and an R′-module N′ the natural map Extⁱ<sub>R</sub>′(M ⊗<sub>R</sub> R′, N′) → Extⁱ<sub>R</sub>(M, N′) is an isomorphism for i ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Flatness of the ring map makes Tor commute with base change

**Remember:** A flat ring map carries free resolutions to free resolutions.

*Rules out counterexamples.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 18G15. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A ring map R → R′ is flat when tensoring over R with R′ keeps exact sequences of R-modules exact. Base change sends an R-module M to the R′-module M ⊗ R′.

**Problem.** If R → R′ is flat, then Torᵢᴿ(M, N) ⊗ R′ ≅ Torᵢᴿ′(M ⊗ R′, N ⊗ R′) for all R-modules M, N and all i. Without flatness this fails.

**How the definition helps.** Flatness keeps a free resolution P of M exact after tensoring with R′, so P ⊗ R′ is a free resolution of M ⊗ R′ (our own). Then (P ⊗ R′) ⊗ (N ⊗ R′) over R′ equals (P ⊗ N) ⊗ R′, and the exact functor − ⊗ R′ commutes with homology (our own). Take the map Z → Z/2, which is not flat, and M = N = Z/2. The left side in degree 1 is Z/2, but Tor₁ over Z/2 of (Z/2, Z/2) is 0 (our own). The work moves into the independence of Tor from the chosen resolution.

**Paper or page:** [Algebra, Lemma 10.76.1.](https://stacks.math.columbia.edu/tag/00M8). It says: “Given a flat ring map R → R′ and R-modules M, N the natural R-module map Torᵢᴿ(M, N) ⊗<sub>R</sub> R′ → Torᵢᴿ′(M ⊗<sub>R</sub> R′, N ⊗<sub>R</sub> R′) is an isomorphism for all i.”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes are exactly the compact objects of the derived category

**Remember:** A purely categorical property picks out the perfect complexes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A complex of R-modules is perfect if it is quasi-isomorphic to a bounded complex of finite projective modules. An object K of a triangulated category is compact if Hom(K, −) commutes with arbitrary direct sums. D(R) is the derived category of R-modules.

**Problem.** For any ring R, a complex is perfect exactly when it is a compact object of D(R).

**How the definition helps.** Compactness uses only Hom and direct sums, so it is kept by every equivalence of triangulated categories. On a scheme, finite projective modules do not give global resolutions, but compactness still makes sense (our own). Neeman used this to prove Grothendieck duality with Brown representability (our own summary of the cited paper). The hard part there is to show that the perfect complexes generate the whole category (our own).

**Paper or page:** [Stacks Project, More Algebra, Proposition 15.79.3](https://stacks.math.columbia.edu/tag/07LT). It says: “Let R be a ring. For an object K of D(R) the following are equivalent (1) K is perfect, and (2) K is a compact object of D(R).”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 07LT (More Algebra, Proposition 15.79.3)](https://stacks.math.columbia.edu/tag/07LT)
- [A. Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/s0894-0347-96-00174-9)

### Pseudo-coherence equals finite cohomology over Noetherian rings and works beyond them

**Remember:** Ask for a finite free resolution, not for finite cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 13D02, 13E15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A complex of R-modules is pseudo-coherent if it is quasi-isomorphic to a bounded above complex of finite free modules. For a module, this means a resolution by finite free modules, as long as one likes. D⁻(R) is the derived category of complexes with bounded above cohomology.

**Problem.** Over a Noetherian ring R, a complex is pseudo-coherent exactly when it lies in D⁻(R) and all its cohomology modules are finitely generated.

**How the definition helps.** Cones and derived base change keep resolutions by finite free modules, so pseudo-coherent complexes form a good class over any ring (our own). Finite cohomology is not kept (our own example). Over k\[x₁, x₂, …\], the map to k that sends every xᵢ to 0 has a kernel that is not finitely generated. The theorem shows that over Noetherian rings the new notion is the old one, so classical results still apply.

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.65.17](https://stacks.math.columbia.edu/tag/066E). It says: “Let R be a Noetherian ring. Then … (2) A complex of R-modules K is pseudo-coherent if and only if K ∈ D⁻(R) and Hⁱ(K) is a finite R-module for all i.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 066E (More Algebra, Lemma 15.65.17)](https://stacks.math.columbia.edu/tag/066E)

### Depth two keeps punctures connected

**Remember:** When sections extend across the puncture, so do idempotents.

*Rules out counterexamples.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** The punctured spectrum consists of all prime ideals of a local ring except its maximal ideal. Local cohomology at the maximal ideal measures sections supported at that point and the higher groups obtained by deriving this operation. Depth is the first degree where these groups are nonzero.

**Problem.** The punctured spectrum of a Noetherian local ring of depth at least two is connected.

**How the definition helps.** The depth test makes the first two local cohomology groups vanish, so every section on the puncture extends uniquely (our own). A disconnection would give a section equal to one on one part and zero on the other (our own). Its extension would satisfy e² = e, but a local ring has only zero and one as such elements (our own). In depth one, removing the closed point of k\[\[x,y\]\]/(xy) separates the two axes (our own).

**Paper or page:** [Local Cohomology, Lemma 51.3.1.](https://stacks.math.columbia.edu/tag/0BLR). It says: “Let $A$ be a Noetherian local ring of depth $\\geq 2$. Then the punctured spectra of $A$, $A<sup>h$</sup>, and $A<sup>sh</sup>$ are connected.”

**Sources:** none listed. No primary source with a working link was found.

### Gorenstein rings dualize themselves, so local duality uses Ext into R

**Remember:** Gorenstein means R already has finite injective dimension, so R dualizes itself.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13H10, 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R is Gorenstein when R has finite injective dimension as a module over itself. A dualizing complex is a bounded complex ω• of finite injective dimension with finitely generated cohomology. Also R → RHom(ω•, ω•) must be an isomorphism, with RHom the derived Hom. For ω• = R this map is always the identity.

**Problem.** Let R be a Gorenstein local ring of dimension n, with E an injective hull of its residue field (the smallest injective module containing it). For every finitely generated module M, Hⁱₘ(M) is the Matlis dual Hom(Extⁿ⁻ⁱ(M, R), E).

**How the definition helps.** R always meets two of the three conditions on a dualizing complex, and Gorenstein is exactly the third, finite injective dimension. So R, shifted by n, is the normalized dualizing complex. Local duality with ω• = R\[n\] then gives the formula, and all the work is in local duality. Without this, one would first build a canonical module and then show that it is R (our own remark).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “Then, for any finitely generated R-module M and integer i, the local cohomology group Hⁱ<sub>m</sub>(M) is dual to Extⁿ⁻ⁱ<sub>R</sub>(M,R)”

**Paper or page:** [Dualizing, Lemma 47.21.4.](https://stacks.math.columbia.edu/tag/0DW9). It says: “If A is Gorenstein, then A has a dualizing complex if and only if A\[0\] is a dualizing complex.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)
- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)

### Local cohomology ignores ideal thickening

**Remember:** Ideals defining the same closed set give the same local cohomology.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** Define local cohomology as the derived functor of sections supported on the closed set of primes containing an ideal. A section is supported there if it vanishes outside that set. The module definition instead derives the functor taking elements killed by some power of the ideal.

**Problem.** The radical of an ideal consists of elements having some positive power in that ideal. Over a Noetherian ring, ideals with the same radical give naturally isomorphic local cohomology functors.

**How the definition helps.** The support definition sees only the primes containing the ideal (our own). Those primes depend only on its radical (our own). A comparison theorem identifies the resulting groups with those obtained by deriving the module operation (our own).

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “Since the local cohomology with respect to I may be computed using any such ideal,”

**Paper or page:** [Local Cohomology, Lemma 51.2.1.](https://stacks.math.columbia.edu/tag/0A6T). It says: “there is a functorial isomorphism $$ R\\Gamma<sub>Z</sub>(K) = R\\Gamma<sub>Z</sub>(X, \\widetilde{K}) $$”

**Sources:** none listed. No primary source with a working link was found.

### Local cohomology makes Cohen–Macaulay mean cohomology in one degree

**Remember:** Depth is where local cohomology starts, dimension is where it stops.

*Makes the theorem clean to state or prove.* MSC 13D45 (Local cohomology and commutative rings), 13C14. arXiv math.AC. Level 3: graduate.

**Definition.** Let M be a nonzero finitely generated module over a Noetherian local ring with maximal ideal m. Its depth is the length of a longest M-regular sequence in m: each element is a nonzerodivisor on M modulo the earlier ones. M is Cohen–Macaulay when its depth equals its Krull dimension. The local cohomology module Hⁱₘ(M) is the i-th derived functor of taking the elements killed by a power of m.

**Problem.** Hⁱₘ(M) is zero below the depth and above the dimension, and nonzero at both ends. So M is Cohen–Macaulay exactly when Hⁱₘ(M) is nonzero for only one i.

**How the definition helps.** Local cohomology turns the two numbers in the definition into the two ends of one range of nonzero degrees. So their equality becomes the statement that only one degree survives. The lower end comes from the description of depth by Ext modules and the formula of local cohomology as a colimit of Ext modules. The upper end is Grothendieck's vanishing and nonvanishing theorems, where the real work lies.

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “These two bounds together yield a characterisation of Cohen–Macaulay modules over local rings: they are precisely those modules where Hⁿ<sub>m</sub>(M) vanishes for all but one n.”

**Paper or page:** [Dualizing, Lemma 47.11.1.](https://stacks.math.columbia.edu/tag/0AVZ), [Local Cohomology, Lemma 51.4.7.](https://stacks.math.columbia.edu/tag/0DXC), [Local Cohomology, Lemma 51.4.9.](https://stacks.math.columbia.edu/tag/0DXE). It says: “the smallest integer i such that H<sup>i<sub>I</sub></sup>(M) is nonzero.”

**Sources:**

- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)

### Local cohomology measures extension failure

**Remember:** Degree zero detects sections that disappear, and degree one detects those that cannot extend.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** Local cohomology measures sections supported on a closed set Z and the higher groups obtained by deriving that operation. Equivalently, take the complex of restriction to the complement, using its shifted mapping cone to record the failure of restriction to be invertible.

**Problem.** Let Z consist of the primes containing a finitely generated ideal of a ring A. Restrict sections of a module on the prime spectrum of A to the complement of Z. The kernel is degree zero local cohomology, and the cokernel is degree one local cohomology.

**How the definition helps.** The cone places the restriction map between degree zero and degree one local cohomology in an exact sequence (our own). A module on the whole affine spectrum has no higher cohomology, so the sequence ends there (our own). Over a Noetherian ring, a comparison theorem identifies this construction with deriving the operation of taking elements killed by ideal powers (our own).

**Paper or page:** [Local Cohomology, Lemma 51.2.2.](https://stacks.math.columbia.edu/tag/0DWR). It says: “given $M$ there is an exact sequence $$ 0 \\to H<sup>0<sub>Z</sub></sup>(M) \\to M \\to H<sup>0</sup>(U, \\mathcal{F}) \\to H<sup>1<sub>Z</sub></sup>(M) \\to 0 $$”

**Sources:** none listed. No primary source with a working link was found.

### Regularity defined by local cohomology never rises when finite-length torsion is removed

**Remember:** Regularity is read off local cohomology, and torsion only touches degree zero.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D02. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Let M be a finitely generated graded module over a polynomial ring, and m the ideal of the variables. Its Castelnuovo–Mumford regularity is the largest value of end(Hⁱₘ(M)) + i, where Hⁱₘ is local cohomology at m. Here end(N) is the top degree in which N is nonzero. The older definition takes the largest bⱼ − j, with bⱼ the top generator degree in step j of the minimal free resolution.

**Problem.** For every such M, the regularity of M/H⁰ₘ(M) is at most the regularity of M.

**How the definition helps.** Removing the finite-length part H⁰ₘ(M) kills the degree-zero local cohomology and leaves all higher local cohomology unchanged (our own step). So the supremum can only drop. In terms of free resolutions this is not visible, since the resolution changes completely. The work went into the theorem of Eisenbud and Goto that the two definitions agree.

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology), [Castelnuovo–Mumford regularity](https://en.wikipedia.org/wiki/Castelnuovo%E2%80%93Mumford_regularity). It says: “For example, the Castelnuovo–Mumford regularity can be formulated using local cohomology as reg(M) = sup{end(H<sup>i<sub>m</sub></sup>(M))+i \| 0 ≤ i ≤ dim(M)}”

**Sources:**

- [D. Eisenbud and S. Goto, Linear free resolutions and minimal multiplicity, Journal of Algebra 88 (1984)](https://doi.org/10.1016/0021-8693(84)90092-9)

### Torsion as a union of annihilators makes local cohomology an Ext colimit

**Remember:** Torsion is a colimit of Homs, so local cohomology is a colimit of Exts.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** Let a be an ideal of a ring A. The torsion functor Γₐ sends a module M to its elements killed by some power of a. So Γₐ(M) is the union, or colimit, of the submodules Hom(A/aⁿ, M). Local cohomology Hⁱₐ is the i-th right derived functor of Γₐ.

**Problem.** For every module M and every i, the local cohomology Hⁱₐ(M) is the colimit over n of Extⁱ(A/aⁿ, M).

**How the definition helps.** Because Γₐ is a colimit of the functors Hom(A/aⁿ, −), its derived functors are the colimit of their derived functors, the Ext modules. Apply all these functors to one injective resolution of M, then take cohomology. Filtered colimits of modules are exact, so the colimit passes through cohomology. With the other common definition, by the Čech complex, the same formula needs a comparison theorem and a finitely generated ideal (our own remark).

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “and for this reason, the local cohomology of an R-module M agrees with a direct limit of Ext modules”

**Paper or page:** [Dualizing, Lemma 47.8.2.](https://stacks.math.columbia.edu/tag/0954). It says: “For any object K of D(A) we have RΓ<sub>I</sub>(K) = hocolim RHom<sub>A</sub>(A/Iⁿ, K) in D(A) and R<sup>qΓ<sub>I</sub></sup>(K) = colim<sub>n</sub> Ext<sub>A</sub><sup>q</sup>(A/Iⁿ, K) as modules for all q ∈ Z.”

**Sources:**

- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)
- [A. Grothendieck, SGA 2, Cohomologie locale des faisceaux cohérents et théorèmes de Lefschetz locaux et globaux, Documents Mathématiques 4, SMF, 2005](https://arxiv.org/abs/math/0511279)

### Čech length bounds local cohomology

**Remember:** No term past the last generator means no cohomology there.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** Over a Noetherian ring, the augmented Čech complex of ideal generators computes local cohomology. It begins with the module in degree zero. In degree j it takes one copy localized at each product of j distinct generators, making that product invertible. The alternative derives the operation taking elements killed by some power of the ideal.

**Problem.** Over a Noetherian ring, local cohomology in an ideal generated by r elements vanishes in degrees above r for every module.

**How the definition helps.** The Čech complex stops at degree r, so there is nothing to compute above it (our own). The comparison theorem identifies this finite complex with the derived functor of ideal torsion (our own).

**Paper or page:** [Local Cohomology, Lemma 51.4.3.](https://stacks.math.columbia.edu/tag/0DX9). It says: “cd(A, I) is at most equal to the number of generators of I”

**Sources:** none listed. No primary source with a working link was found.

### Defining coherence by kernels gives finitely presented modules finite free resolutions

**Remember:** A finitely presented kernel lets you repeat the same finite free step.

*True by definition. Confidence: medium.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13D02. arXiv math.AC. Level 3: graduate.

**Definition.** A module is finitely presented if it has finitely many generators and finitely many relations. Call a commutative ring coherent if every kernel of a map between finitely presented modules is finitely presented. Equivalently, finitely presented modules are closed under taking kernels and cokernels, so they form an abelian category. The usual definition asks that every finitely generated ideal be finitely presented.

**Problem.** Over a coherent ring, every finitely presented module has a free resolution with finite rank in each degree.

**How the definition helps.** With this definition, each kernel in the resolution is again finitely presented, so the next step is again finite. Map a finite free module onto the given module; its kernel is finitely presented, so a finite free module maps onto it (our own). Repeating this step builds the resolution (our own). The work moves to proving that the condition on ideals forces such kernels to be finitely presented (our own).

**nLab:** [coherent ring](https://ncatlab.org/nlab/show/coherent+ring). It says: “A ring is left coherent iff every finitely presented left module has a resolution by finitely presented projective left modules.”

**Sources:** none listed. No primary source with a working link was found.

### Finite presentation makes flat modules projective and locally free

**Remember:** Flat plus finitely presented equals finite locally free.

*Rules out counterexamples.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13C11, 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** A module M is finitely presented if it is the cokernel of a map between finite free modules. It is flat if tensoring with M keeps injective maps injective. It is finite projective if it is a direct summand of a finite free module. It is finite locally free if it becomes free of finite rank after inverting suitable elements that generate the unit ideal.

**Problem.** A module is finite projective exactly when it is finitely presented and flat. Finite projective modules are the same as finite locally free modules.

**How the definition helps.** Finite presentation lets freeness at one prime spread to a neighbourhood, so a pointwise property becomes a local one (our own summary). Finite generation alone is not enough (our own example). Let R be a product of infinitely many copies of a field and I the ideal of sequences with finitely many nonzero entries. Every R-module is flat, but R/I is not projective, since I is not finitely generated and so R/I is not finitely presented.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.83.1](https://stacks.math.columbia.edu/tag/058R), [Stacks Project, Algebra, Lemma 10.78.2](https://stacks.math.columbia.edu/tag/00NX). It says: “Let M be an R-module. Then M is finite projective if and only if M is finitely presented and flat.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 058R (Algebra, Lemma 10.83.1)](https://stacks.math.columbia.edu/tag/058R)
- [The Stacks Project Authors, The Stacks Project, Tag 00NX (Algebra, Lemma 10.78.2)](https://stacks.math.columbia.edu/tag/00NX)

### Finitely presented modules are exactly those whose maps commute with filtered colimits

**Remember:** Finitely presented objects meet a filtered colimit at some finite stage.

*True by definition.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 18A30. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A module is finitely presented if it is the cokernel of a map between finite free modules. A filtered colimit is a colimit over a directed system, such as the union of a chain.

**Problem.** An R-module N is finitely presented exactly when, for every filtered colimit M = colim Mᵢ, the map colim Hom(N, Mᵢ) → Hom(N, M) is bijective. So every map from N into M comes from a finite stage.

**How the definition helps.** With finitely many generators and relations, a map into a colimit and its relations are all visible at one finite stage. For N only finitely generated, the map is injective but can fail to be surjective (our own). In category theory this property defines a compact object, so the two notions of finitely presented agree. Limit arguments that reduce to finitely generated subrings rest on this.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.11.4](https://stacks.math.columbia.edu/tag/0G8P), [Stacks Project, Algebra, Lemma 10.127.3](https://stacks.math.columbia.edu/tag/00QO), [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let N be an R-module. The following are equivalent (1) N is a finitely presented R-module, (2) for any filtered colimit M = colim Mᵢ of R-modules the map colim Hom(N, Mᵢ) → Hom(N, M) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0G8P (Algebra, Lemma 10.11.4)](https://stacks.math.columbia.edu/tag/0G8P)
- [The Stacks Project Authors, The Stacks Project, Tag 00QO (Algebra, Lemma 10.127.3)](https://stacks.math.columbia.edu/tag/00QO)
- [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf)

### Being Dedekind is a local property and survives integral closure

**Remember:** Principal ideal domains are fragile; Dedekind domains are robust.

*Makes the theorem clean to state or prove.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A Dedekind domain is a Noetherian integral domain that is integrally closed in its fraction field and in which every nonzero prime ideal is maximal. Here integrally closed means that every fraction that is a root of a monic polynomial over the ring lies in the ring.

**Problem.** Let R be a Dedekind domain with fraction field K, and let L be a finite extension of K. Then the integral closure of R in L is again a Dedekind domain. Also, a Noetherian domain is Dedekind exactly when all its localizations at maximal ideals are.

**How the definition helps.** The defining conditions pass to integral closures in finite extensions and to localizations, so the class is closed under the operations of number theory. The integral closure step uses the Krull–Akizuki theorem, and starting from ℤ it shows that every ring of integers of a number field is Dedekind. Principal ideal domains fail the first property: ℤ is one, but its integral closure ℤ\[√−5\] in ℚ(√−5) is not (our own).

**Wikipedia:** [Dedekind domain](https://en.wikipedia.org/wiki/Dedekind_domain). It says: “By the 20th century, algebraists and number theorists had come to realize that the condition of being a PID is rather delicate, whereas the condition of being a Dedekind domain is quite robust.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Prüfer domains by flatness makes tensor products of torsion-free modules torsion-free

**Remember:** Tensoring with a flat module keeps multiplication by a scalar injective.

*True by definition.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** A module is torsion-free if multiplication by each nonzero scalar is injective. A module is flat if tensoring with it keeps injective maps injective. Define a Prüfer domain as an integral domain over which every torsion-free module is flat. The usual definition asks that each nonzero finitely generated ideal I be invertible, meaning IJ = R for some fractional ideal J.

**Problem.** Over a Prüfer domain, the tensor product of two torsion-free modules is torsion-free.

**How the definition helps.** With this definition, one factor is flat, so tensoring keeps multiplication by a scalar injective. Let M and N be torsion-free, and let a be a nonzero scalar; multiplication by a on N is injective (our own). Tensoring with the flat module M keeps it injective, and the result is multiplication by a on M ⊗ N (our own). The work moves to proving that this definition agrees with the usual one.

**Wikipedia:** [Prüfer domain](https://en.wikipedia.org/wiki/Pr%C3%BCfer_domain). It says: “If M and N are torsion-free R-modules then their tensor product M ⊗ᵣ N is torsion-free.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional exponents give every branch of an algebraic curve a series

**Remember:** Allow fractional powers of x, and every polynomial equation in y has roots.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 32S05, 30B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Puiseux series in x is a series Σ cₖ times x to the power k/n, over integers k ≥ k₀. Here n is one fixed positive integer. So it allows negative and fractional exponents, as long as the denominators are bounded. With the usual sum and product, these series form a field.

**Problem.** Newton–Puiseux theorem: take a polynomial equation P(x, y) = 0 with complex coefficients. Every solution y near x = 0 is a Puiseux series in x that converges near 0. In modern terms, Puiseux series over an algebraically closed field of characteristic 0 form an algebraically closed field.

**How the definition helps.** Branch points need roots of x, and fractional exponents supply them, so every branch becomes an ordinary series in an n-th root of x. Ordinary power series cannot do it: y² = x has the solutions ±√x, which are not power series in x (our own example). Bounded denominators keep the set a field, because each series lies in Laurent series in one n-th root of x. The result needs characteristic 0: in characteristic p, yᵖ − y = 1/x has no Puiseux series root (our own).

**Wikipedia:** [Puiseux series](https://en.wikipedia.org/wiki/Puiseux_series). It says: “Using modern terminology, Puiseux's theorem asserts that the set of Puiseux series over an algebraically closed field of characteristic 0 is itself an algebraically closed field, called the field of Puiseux series.”

**Sources:** none listed. No primary source with a working link was found.

### Left-finite support makes Novikov series closed under multiplication

**Remember:** Below any bound there are finitely many terms, so each product coefficient is finite.

*Rules out counterexamples. Confidence: medium.* MSC 13F25 (Formal power series rings), 12J25, 16W60. arXiv math.AC, math.SG. Level 3: graduate.

**Definition.** Let k be a commutative ring and G a linearly ordered abelian group. The Novikov ring is the set of functions f : G → k such that, for each y ∈ G, only finitely many x &lt; y have f(x) ≠ 0. Addition is pointwise. Multiplication is (f·g)(z) = Σ f(x)g(y), the sum over all x and y with x + y = z.

**Problem.** The Novikov ring is a ring: the product of two left-finite functions has finite sums as coefficients and is again left-finite.

**How the definition helps.** Left-finiteness makes each coefficient of a product a finite sum. Without a support condition, the sum for (f·g)(z) can have infinitely many nonzero terms, for example for two series whose support is all of ℤ ⊂ ℝ. With left-finiteness, let y₀ be the least exponent of g; then only the finitely many x ≤ z − y₀ in the support of f can contribute. The nLab notes that the argument needs G to be totally ordered and a group, and it states without proof that a field k gives a field.

**nLab:** [Novikov field](https://ncatlab.org/nlab/show/Novikov+field). It says: “Left-finiteness of the support of f and g implies that the above sum is finite.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing any ordered value group gives every valuation ring a valuation

**Remember:** Let the values be any ordered group, and every valuation ring has one.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation ring of a field K is a subring D such that, for each nonzero x in K, x or 1/x is in D. A Krull valuation sends K× to a totally ordered abelian group Γ, not only to the real numbers.

**Problem.** Every valuation ring D comes from a valuation, with D the set of elements of value at least 0.

**How the definition helps.** With general ordered groups allowed, the value group can be taken as K×/D×, ordered by divisibility, so the theorem is almost a definition. If values had to be real numbers, the theorem would fail. Valuation rings of Krull dimension 2 can have the value group ℤ × ℤ in lexicographic order, which does not embed in ℝ as an ordered group (our own). The page says that height one is exactly the case of subgroups of ℝ.

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “take Γ to be the quotient K×/D× of the unit group of K by the unit group of D, and take ν to be the natural projection.”

**Sources:**

- [Wolfgang Krull, Allgemeine Bewertungstheorie, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.160)

### Discrete valuation rings need Noetherianity

**Remember:** A smallest positive value need not generate the whole value group.

*Rules out counterexamples.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** A discrete valuation ring is a Noetherian local domain whose maximal ideal has one nonzero generator. A local ring has one maximal ideal, and Noetherian means every ideal has finitely many generators.

**Problem.** In a discrete valuation ring, each nonzero element is a unit times a power of a generator of the maximal ideal. This can fail in a valuation ring that is not Noetherian, even when its maximal ideal has one generator.

**How the definition helps.** The Noetherian condition forces the powers of the maximal ideal to have zero intersection, by Krull’s intersection theorem (our own). Without it, take pairs of integers ordered first by the first coordinate and then by the second (our own). In the iterated Laurent series field k((u))((t)), record the lowest t exponent and the lowest u exponent in its coefficient (our own). In the ring of nonnegative values, u has the smallest positive value, (0,1), so it generates the maximal ideal (our own). Yet t has value (1,0), so every power of u divides t (our own).

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “When the value group is isomorphic to ℤ, the ring O is called a discrete valuation ring.”

**Paper or page:** [Algebra, Lemma 10.119.7.](https://stacks.math.columbia.edu/tag/00PD). It says: “The ring A is a Noetherian local domain with maximal ideal 𝔪 generated by a single nonzero element.”

**Sources:** none listed. No primary source with a working link was found.

### The divisibility test makes quotients of valuation rings by primes valuation rings

**Remember:** Test a fraction before reducing it modulo the prime ideal.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain in which, of any two elements, one divides the other. This is the same as asking that x or 1/x lies in the ring for each nonzero fraction x. The usual definition takes the elements of a field where a valuation is nonnegative.

**Problem.** The quotient of a valuation ring by a prime ideal is a valuation ring.

**How the definition helps.** With the divisibility test, the property passes to every quotient that is a domain (our own). Lift two elements of A/𝔭 to A, where one divides the other, and reduce (our own). The quotient is a domain because 𝔭 is prime. With the value-based definition, one would first have to build a valuation for the quotient (our own).

**Paper or page:** [Lemma 10.50.9.](https://stacks.math.columbia.edu/tag/088Y). It says: “For any prime ideal 𝔭 ⊂ A the quotient A/𝔭 is a valuation ring.”

**Sources:** none listed. No primary source with a working link was found.

### The inverse test makes valuation ring ideals linearly ordered

**Remember:** One of two nonzero elements divides the other.

*True by definition.* MSC 13F30 (Valuation rings), 13A18. arXiv math.AC. Level 3: graduate.

**Definition.** A subring A of a field K is a valuation ring of K if it contains x or 1/x for every nonzero x in K. Stacks instead starts with a local subring, one with a single maximal ideal, that is maximal for domination. A local ring dominates a smaller one if its maximal ideal meets the smaller ring in that ring’s maximal ideal.

**Problem.** In a valuation ring, any two ideals are comparable: one contains the other.

**How the definition helps.** The inverse test compares ideals by comparing the quotient of two elements. Suppose a lies in I but not in J, and take a nonzero b in J. If a/b lies in A, then a lies in J, a contradiction; so b/a lies in A, which puts b in I (our own argument). The work behind the choice is the comparison with maximality for domination (Tags 00IB and 052K).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “Another way to characterize the valuation rings of a field F is that valuation rings D of F have F as their field of fractions, and their ideals are totally ordered by inclusion”

**Paper or page:** [More Algebra, Lemma 15.125.2](https://stacks.math.columbia.edu/tag/0ASN), [Algebra, Lemma 10.50.4](https://stacks.math.columbia.edu/tag/00IB), [Algebra, Lemma 10.50.5](https://stacks.math.columbia.edu/tag/052K). It says: “Let A be a valuation ring with maximal ideal 𝔪 and fraction field K. Let x ∈ K. Then either x ∈ A or x⁻¹ ∈ A or both.”

**Sources:**

- [The Stacks Project, Lemma 10.50.4, Tag 00IB](https://stacks.math.columbia.edu/tag/00IB)
- [The Stacks Project, Lemma 10.50.5, Tag 052K](https://stacks.math.columbia.edu/tag/052K)
- [The Stacks Project, Lemma 15.125.2, Tag 0ASN](https://stacks.math.columbia.edu/tag/0ASN)

### The x-or-1/x test makes composite valuation rings valuation rings

**Remember:** Test an element first, then test its residue if it is a unit.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain A such that x or 1/x lies in A for each nonzero x in its fraction field. Let A′ be a valuation ring whose residue field, the quotient by its maximal ideal, is K. Let A be a valuation ring with fraction field K. The composite ring C is the set of elements of A′ whose residues lie in A.

**Problem.** The composite ring C is a valuation ring.

**How the definition helps.** With the x-or-1/x test, one checks C one element at a time (our own). Take x nonzero in the fraction field of A′, so x or 1/x lies in A′ (our own). If that element is not a unit of A′, its residue is zero, which lies in A (our own). If x is a unit of A′, the residues of x and 1/x are inverse, so one of them lies in A (our own). The value-based definition would first need the combined value group (our own).

**Paper or page:** [Lemma 10.50.10.](https://stacks.math.columbia.edu/tag/088Z). It says: “Let A′ be a valuation ring with residue field K. Let A be a valuation ring with fraction field K.”

**Sources:** none listed. No primary source with a working link was found.

### The x-or-1/x test survives directed limits of valuation rings

**Remember:** Test each fraction at the stage that contains its numerator and denominator.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain A such that x or 1/x lies in A for each nonzero x in its fraction field. Equivalently, of any two elements of A, one divides the other. Another definition takes the elements of a field where a valuation is nonnegative. A valuation is a map to an ordered group that turns products into sums.

**Problem.** The direct limit of a directed system of valuation rings is a valuation ring. In a directed system, any two stages map into a common later stage.

**How the definition helps.** With the divisibility test, each check involves two elements, and any two elements already live at one stage (our own). At that stage one divides the other, so the same holds in the limit (our own). The limit is a domain, since a product that is zero in the limit is zero at some stage (our own). With the valuation definition, one would first have to build a value group for the limit (our own).

**Paper or page:** [Lemma 10.50.6.](https://stacks.math.columbia.edu/tag/0AS4). It says: “Let I be a directed set. Let (Aᵢ, φᵢⱼ) be a system of valuation rings over I.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings restrict to subfields

**Remember:** An element and its inverse stay in the same subfield.

*True by definition.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring of a field L is a subring containing x or x⁻¹ for each nonzero x in L. The equivalent valuation description keeps zero and all elements with nonnegative value.

**Problem.** Let B be a valuation ring with fraction field L. For any subfield K of L, B ∩ K is a valuation ring with fraction field K.

**How the definition helps.** The inverse test passes directly to a subfield K because x and x⁻¹ both belong to K (our own). The test also gives every element of K as a fraction of elements in the intersection (our own). To recover values from the test, identify nonzero elements whose ratio is a unit and order the classes by divisibility (our own).

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “for every nonzero element x in its field of fractions K, either x ∈ O or x⁻¹ ∈ O;”

**Paper or page:** [Algebra, Lemma 10.50.7.](https://stacks.math.columbia.edu/tag/052L). It says: “Let L/K be an extension of fields. If B ⊂ L is a valuation ring, then A = K ∩ B is a valuation ring.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings, holding x or 1/x, capture integral closure

**Remember:** Of x and 1/x, a valuation ring always holds one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F30 (Valuation rings), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation ring of a field K is a subring D such that, for every nonzero x in K, x or 1/x lies in D.

**Problem.** The integral closure of a domain A in its fraction field K is the intersection of all valuation rings of K that contain A.

**How the definition helps.** The condition that x or 1/x lies in D makes it easy to show that valuation rings are integrally closed (our own). If x is integral over D but not in D, then 1/x is in D, and dividing the monic equation of x by a power of x writes x as a polynomial in 1/x over D. The other inclusion is the real work. For each x not integral over A, Zorn's lemma gives a valuation ring that contains A but not x.

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “In fact, the integral closure of an integral domain A in the field of fractions K of A is the intersection of all valuation rings of K containing A.”

**Sources:**

- [W. Krull, Beiträge zur Arithmetik kommutativer Integritätsbereiche VI, Mathematische Zeitschrift 45 (1939) 1–19](https://doi.org/10.1007/BF01580269)

### Value bounds classify valuation ideals

**Remember:** An ideal keeps every value above any value it already contains.

*True by definition.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** A valuation assigns values in a totally ordered group to the nonzero elements of a field. Products add values, and a nonzero sum has value at least the smaller summand value. The valuation ring contains zero and all elements with nonnegative value. Equivalently, it contains x or x⁻¹ for each nonzero field element x.

**Problem.** Ideals of a valuation ring correspond to upward closed subsets of the nonnegative values, including the empty set.

**How the definition helps.** Comparing values tests divisibility, so an ideal containing x contains everything of equal or greater value (our own). Conversely, take all elements with values in an upward closed set and include zero (our own). The sum inequality gives closure under addition, and nonnegative ring values give closure under multiplication by ring elements (our own). Recovering an ordered value group from the inverse test proves the two descriptions agree (our own).

**Paper or page:** [Algebra, Lemma 10.50.17.](https://stacks.math.columbia.edu/tag/00IH). It says: “Ideals in A correspond 1 - 1 with ideals of Γ. This bijection is inclusion preserving, and maps prime ideals to prime ideals.”

**Sources:** none listed. No primary source with a working link was found.

### Defining δ-rings by a p-derivation makes Frobenius lifts ring maps

**Remember:** δ is the Frobenius lift divided by p, written so that p may vanish.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 14F30. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A δ-ring is a commutative ring A with a map of sets δ: A → A. It satisfies δ(0) = δ(1) = 0 and δ(xy) = xᵖδ(y) + yᵖδ(x) + pδ(x)δ(y). It also satisfies δ(x+y) = δ(x) + δ(y) + (xᵖ + yᵖ − (x+y)ᵖ)/p. The last fraction is a polynomial with integer coefficients, so no division takes place.

**Problem.** In a δ-ring, φ(x) = xᵖ + pδ(x) is a ring endomorphism that lifts the Frobenius map x ↦ xᵖ of A/p. If A has no p-torsion, δ-structures on A correspond exactly to such lifts.

**How the definition helps.** The two rules for δ are exactly what makes φ additive and multiplicative, so φ is a ring map by expanding. The usual alternative is to take a Frobenius lift φ itself as the structure. For a ring with no p-torsion, the two agree: set δ(x) = (φ(x) − xᵖ)/p to go back. Using δ instead of φ keeps the rules meaningful when p is a zero divisor (our own remark).

**nLab:** [δ-ring](https://ncatlab.org/nlab/show/%CE%B4-ring). It says: “If (R,δ) is a δ-ring, then the map φ: R→R given by φ(x)=xᵖ+pδ(x) is a ring homomorphism that lifts the Frobenius endomorphism on R/p.”

**Wikipedia:** [P-derivation](https://en.wikipedia.org/wiki/P-derivation). It says: “When the ring R is p-torsion free the correspondence is a bijection.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)

### Ghost coordinates make big Witt vectors over rational algebras a ring

**Remember:** In ghost coordinates, all operations are coordinate by coordinate.

*True by definition.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC. Level 3: graduate.

**Definition.** Big Witt vectors over a ring A are sequences (a₁, a₂, …) of elements of A. The nth ghost coordinate wₙ is a fixed integer polynomial in a₁, …, aₙ whose last term is n·aₙ. Over a ℚ-algebra, define addition and multiplication to act on ghost coordinates entry by entry. The usual definition gives explicit integer polynomials for the operations in the original coordinates.

**Problem.** Big Witt vectors of a rational algebra satisfy the ring axioms.

**How the definition helps.** With the ghost definition, the ring axioms come from the ring of sequences with entrywise operations. Over ℚ the ghost map is a bijection, since one solves for each aₙ in turn by dividing by n (our own). The nLab extends this to rings without additive torsion by embedding A in A ⊗ ℚ. For general rings, the work moves to the integer polynomials and the identities between them (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the addition and multiplication is taken to component-wise addition and multiplication, so since this is the standard ring structure we know W(A) is a ring.”

**Sources:** none listed. No primary source with a working link was found.

### Limits and colimits of δ-rings are computed on the underlying rings

**Remember:** δ-rings are rings with a section to W₂, so limits come for free.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 18A30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** W₂(A), the length-2 Witt vectors, is the set of pairs (a₀, a₁) in A with addition and multiplication given by universal polynomials. A δ-structure on A is the same as a ring map A → W₂(A) that is a section of the projection (a₀, a₁) ↦ a₀. The section sends a to (a, δ(a)).

**Problem.** The forgetful functor from δ-rings to commutative rings creates all limits and all colimits. For example, a product or a tensor product of δ-rings is a δ-ring in a unique compatible way.

**How the definition helps.** Because a δ-structure is a ring map into a functor of the same ring, limits and colimits of rings inherit it. With the list of axioms for δ, one would instead check each axiom by hand for each construction. For a colimit A of rings Aᵢ, the compatible maps Aᵢ → W₂(Aᵢ) → W₂(A) induce a section of W₂(A) → A (our own remark). For limits, W₂ preserves limits because its underlying set is A × A (our own remark). The quoted proposition is the derived version, for derived δ-rings.

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “The functor U creates limits and colimits”

**Paper or page:** [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447). It says: “preserves small limits and colimits.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [A. Holeman, Derived δ-Rings and Relative Prismatic Cohomology, arXiv preprint 2303.17447 (2023)](https://arxiv.org/abs/2303.17447)

### Perfect p-complete δ-rings are exactly Witt vectors of perfect rings

**Remember:** Perfect plus p-complete means W of a perfect 𝔽ₚ-algebra.

*Rules out counterexamples.* MSC 13F35 (Witt vectors and related rings), 13A35. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A δ-ring A is perfect when its Frobenius lift φ is a bijection. It is p-adically complete when A is the limit of the rings A/pⁿ.

**Problem.** The functor W gives an equivalence from perfect rings of characteristic p to perfect, p-adically complete δ-rings, with inverse A ↦ A/p. Completeness is needed: the integers ℤ with φ the identity are a perfect δ-ring that is not of this form.

**How the definition helps.** Perfectness makes A have no p-torsion, so A is a p-adic lift of the perfect ring A/p, and completeness then pins A down as W(A/p). The torsion step is the lemma that φ kills p-torsion. Without completeness, ℤ is a perfect δ-ring with ℤ/p = 𝔽ₚ, but W(𝔽ₚ) = ℤₚ is not ℤ (our own example). The uniqueness of p-adic lifts of perfect rings is the classical work behind the equivalence.

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “Its image then consists of those δ-rings that are perfect (in the sense that the associated map φ is an isomorphism) and whose underlying ring is p-adically complete.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)

### Perfect residue fields give Witt reduction modulo p

**Remember:** Perfect residue fields make the Witt shift the same as divisibility by p.

*Rules out counterexamples. Confidence: medium.* MSC 13F35 (Witt vectors and related rings), 11S85. arXiv math.NT. Level 3: graduate.

**Definition.** Let W(k) be the ring of p-typical Witt vectors, infinite sequences with operations given by the Witt polynomials. Reduction takes the first entry. A perfect field of characteristic p is one where raising to the pth power is bijective.

**Problem.** For a perfect field k of characteristic p, reduction identifies W(k)/pW(k) with k. In particular, for finite k this recovers the residue field of the unramified p-adic integer ring W(k). The identification fails for k = 𝔽ₚ(t).

**How the definition helps.** Perfection supplies a pth root for each entry after the initial zero (our own argument). In characteristic p, multiplication by p raises every entry to its pth power and inserts zero at the front. Thus its image is exactly the kernel of reduction. Over the rational function field 𝔽ₚ(t), the vector (0, t, 0, …) gives a counterexample because t has no pth root. The multiplication formula uses the Witt polynomial identities (our own proof).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the Verschiebung morphism coincides with the shift (a₀, a₁, …) ↦ (0, a₀, a₁, …)”

**Sources:** none listed. No primary source with a working link was found.

### Witt vectors are the cofree δ-ring on a ring

**Remember:** Map a δ-ring into R, and it lifts uniquely to W(R).

*Makes the theorem clean to state or prove.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A δ-ring is a ring with a p-derivation δ, so with a compatible lift of Frobenius. The p-typical Witt vectors W(R) of a ring R form a δ-ring, and the first Witt component gives a ring map W(R) → R.

**Problem.** For every δ-ring A and every ring R, each ring map A → R lifts to a unique δ-ring map A → W(R). So W is right adjoint to the forgetful functor from δ-rings to rings.

**How the definition helps.** With δ-rings as objects, the Witt vectors gain a short universal property: W adds a δ-structure in the most general way. Without δ-rings, W(R) is known only by its explicit polynomial addition and multiplication. When A has no p-torsion, the lift is A → W(A) → W(R) (our own description). The first map has ghost components a, φ(a), φ²(a) and so on. The work went into the classical proof that the Witt vector operations are polynomial with integer coefficients.

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “One then has a forgetful functor U: CRing\_δ → CRing whose right adjoint identifies with the functor W of Witt vectors.”

**Paper or page:** [Graded loopspaces in mixed characteristics and de Rham-Witt algebra](https://arxiv.org/abs/2209.03483), [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “The Witt vectors admits a natural δ-structure, the forgetful functor δ-CRing<sub>k</sub> → CRing<sub>k</sub> admits W as a right adjoint.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [L. Monier, Graded loopspaces in mixed characteristics and de Rham-Witt algebra, PhD thesis, arXiv 2209.03483 (2022)](https://arxiv.org/abs/2209.03483)

### Excellent rings shut out Nagata's badly behaved Noetherian rings

**Remember:** Excellent rings are the Noetherian rings that behave like geometry expects.

*Rules out counterexamples.* MSC 13F40 (Excellent rings). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring is excellent if three conditions hold. First, the map from each local ring to its completion is regular, a technical smoothness condition. Second, in every finitely generated algebra over it, the regular points form an open set. Third, in every finitely generated algebra, all maximal chains of primes between two given primes have the same length.

**Problem.** Let A be an excellent ring. If A is a domain, its integral closure is a finitely generated A-module. If A is a normal local ring, its completion is normal, and the singular points of every finitely generated A-algebra form a closed set.

**How the definition helps.** Grothendieck in 1965 chose conditions that rule out the known bad Noetherian rings. One excluded ring is a normal Noetherian local ring whose completion is not normal. Another is a one-dimensional Noetherian domain whose integral closure is not finitely generated and whose singular points are not closed. The work moves into showing that common rings are excellent: fields, ℤ, complete Noetherian local rings, and their finitely generated algebras and localizations.

**Wikipedia:** [Excellent ring](https://en.wikipedia.org/wiki/Excellent_ring), [Nagata ring](https://en.wikipedia.org/wiki/Nagata_ring), [Catenary ring](https://en.wikipedia.org/wiki/Catenary_ring). It says: “At one time it seemed that the class of Noetherian rings might be an answer to this problem, but Masayoshi Nagata and others found several strange counterexamples showing that in general Noetherian rings need not be well-behaved”

**Sources:**

- [A. Grothendieck, Éléments de géométrie algébrique IV, seconde partie, Publications Mathématiques de l'IHÉS 24 (1965)](https://doi.org/10.1007/BF02684322)

### Finite global dimension makes localizations of regular local rings regular

**Remember:** Serre's homological test turns a hard localization problem into a short check.

*True by definition.* MSC 13H05 (Regular local rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** The Krull dimension of a ring is the length of its longest chain of prime ideals. A Noetherian local ring is regular if its maximal ideal has as many generators as this dimension. Serre proved that this is the same as finite global dimension. So every module has a finite projective resolution: a finite exact sequence of projective modules that ends in the module.

**Problem.** The localization of a regular local ring at a prime ideal is a regular local ring.

**How the definition helps.** With Serre's homological description, the result needs only that localization keeps finite projective resolutions finite. Localization is exact and sends projective modules to projective modules, so this is short (our own). The work moves into Serre's theorem that the two definitions agree. Before homological methods this problem was open.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring), [Global dimension](https://en.wikipedia.org/wiki/Global_dimension). It says: “It is easy to show that the property of having finite global dimension is preserved under localization, and consequently that localizations of regular local rings at prime ideals are again regular.”

**Sources:**

- [M. Auslander and D. A. Buchsbaum, Homological dimension in local rings, Transactions of the American Mathematical Society 85 (1957) 390–405](https://doi.org/10.1090/S0002-9947-1957-0086822-7)

### Regular local rings factor uniquely

**Remember:** Regularity at a point gives unique factorization in its local ring.

*Rules out counterexamples.* MSC 13H05 (Regular local rings), 13F15. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative local ring has one maximal ideal. Assume it is Noetherian, meaning every ideal is finitely generated. Its dimension is the largest possible length of a chain of strict inclusions between prime ideals, when this length is finite. The ring is regular if its dimension equals the minimum number of generators for its maximal ideal.

**Problem.** Every regular local ring is a unique factorization domain.

**How the definition helps.** Regularity rules out singular points like the vertex of the cone xy = z², in our own example. The local ring at this vertex has dimension two, but its maximal ideal needs three generators, x, y and z. Each lies outside the square of the maximal ideal, so each is irreducible. Their classes are linearly independent modulo that square, so no two differ by a unit. Thus xy = z² gives two different factorizations. The Auslander–Buchsbaum theorem supplies unique factorization in the regular case.

**Paper or page:** [More Algebra, Lemma 15.122.2.](https://stacks.math.columbia.edu/tag/0AG0). It says: “A regular local ring is a UFD.”

**Sources:** none listed. No primary source with a working link was found.

### Regular local rings make smoothness independent of the embedding

**Remember:** Smoothness belongs to the local ring, not to the equations.

*True by definition.* MSC 13H05 (Regular local rings), 14B05. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A Noetherian local ring is regular if its maximal ideal is generated by as many elements as its Krull dimension. The local ring of a variety at a point is made from the functions defined near the point.

**Problem.** Over a perfect field, a point of a variety is nonsingular by the Jacobian criterion exactly when its local ring is regular. So nonsingularity does not depend on the equations or on the embedding in affine space.

**How the definition helps.** The local ring at a point depends only on the variety near the point, so a property of it cannot depend on equations. Zariski proved the equivalence with the Jacobian criterion, and the work moves into that theorem. Zariski observed that the equivalence can fail over fields that are not perfect.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring). It says: “This implies that smoothness is an intrinsic property of the variety, in other words it does not depend on where or how the variety is embedded in affine space.”

**Sources:**

- [O. Zariski, The concept of a simple point of an abstract algebraic variety, Transactions of the American Mathematical Society 62 (1947) 1–52](https://doi.org/10.1090/s0002-9947-1947-0021694-1)
- [W. Krull, Beiträge zur Arithmetik kommutativer Integritätsbereiche III, Mathematische Zeitschrift 42 (1937) 745–766](https://doi.org/10.1007/BF01160110)

### Dimension drops detect regular sequences

**Remember:** Complete the parameters, then take the prefix.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)). arXiv math.AC. Level 3: graduate.

**Definition.** In a local ring of dimension d, a system of parameters consists of d elements whose only common containing prime is the maximal ideal. A Noetherian local ring is Cohen–Macaulay exactly when every system of parameters is regular. Regular means each element acts injectively after quotienting by its predecessors.

**Problem.** In a Noetherian Cohen–Macaulay local ring, c elements in the maximal ideal form a regular sequence if their quotient lowers dimension by c.

**How the definition helps.** The parameter test gives regularity as soon as the given elements start a system of parameters (our own). Choose parameters in their quotient and lift them to the ring (our own). The dimension drop ensures the combined list has exactly the required length (our own). The substantive theorem identifies this parameter test with the usual equality of depth and dimension (our own).

**Paper or page:** [Algebra, Lemma 10.104.2.](https://stacks.math.columbia.edu/tag/02JN). It says: “Regular sequences in Cohen-Macaulay local rings are characterized by cutting out something of the correct dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Finite injective dimension of a local ring forces it to be Cohen–Macaulay

**Remember:** A ring that dualizes itself is a one-term dualizing complex, hence Cohen–Macaulay.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Gorenstein when it has finite injective dimension as a module over itself. It is Cohen–Macaulay when its depth, the length of a longest regular sequence, equals its dimension. A dualizing complex is a bounded complex ω• of finite injective dimension with finitely generated cohomology and R = RHom(ω•, ω•).

**Problem.** Every Gorenstein ring is Cohen–Macaulay.

**How the definition helps.** Finite injective dimension makes R itself a dualizing complex in one degree, and a one-term dualizing complex forces depth to equal dimension. The work went into the lemma that a dualizing module forces Cohen–Macaulay, which rests on local duality. The usual proof, due to Bass, goes instead through his theorem that finite injective dimension equals depth (our own remark).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “A Gorenstein ring is in particular Cohen–Macaulay.”

**Paper or page:** [Dualizing, Lemma 47.21.2.](https://stacks.math.columbia.edu/tag/0DW8), [Dualizing, Lemma 47.20.3.](https://stacks.math.columbia.edu/tag/0DW5). It says: “A Gorenstein ring is Cohen-Macaulay.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)

### Regular quotients preserve Gorensteinness

**Remember:** Use the same final quotient to test type one.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Gorenstein if a regular sequence in its maximal ideal leaves a zero-dimensional quotient with one-dimensional socle. Regular means each element acts injectively after quotienting by the preceding elements. The socle consists of elements killed by the maximal ideal, and its dimension is taken over the residue field.

**Problem.** Quotienting a Noetherian local ring by a nonzero divisor in its maximal ideal preserves and reflects the Gorenstein property.

**How the definition helps.** The socle test lets both rings use the same final quotient (our own). In a Gorenstein ring, any full regular sequence gives a quotient with one-dimensional socle (our own). The given element extends to such a sequence because Gorenstein rings are Cohen–Macaulay (our own). Conversely, lift a testing sequence from the quotient and put the given element first (our own). The substantive criterion identifies this socle test with having a finite resolution by injective modules (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “Equivalently, R has simple socle as an R-module.”

**Paper or page:** [Dualizing, Lemma 47.21.6.](https://stacks.math.columbia.edu/tag/0BJJ). It says: “Then A is Gorenstein if and only if B is Gorenstein.”

**Sources:**

- [Hyman Bass, On the ubiquity of Gorenstein rings (1963)](https://doi.org/10.1007/bf01112819)

### Testing every prime makes Cohen–Macaulay rings stay Cohen–Macaulay after localization

**Remember:** Each prime localization of the new ring was already a test of the original.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)), 13B30. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Cohen–Macaulay if its depth equals its dimension, the maximum length of a chain of prime ideals. Depth is the maximum length of a sequence in its maximal ideal whose terms are not zero divisors modulo the preceding terms. A Noetherian ring is Cohen–Macaulay if its localization at every prime has this property. The alternative tests only maximal ideals.

**Problem.** If R is Cohen–Macaulay and S is a multiplicatively closed subset, then S⁻¹R is Cohen–Macaulay.

**How the definition helps.** Testing every prime makes the claim follow from how localizations compose. Each prime of S⁻¹R comes from a prime of R disjoint from S, and localizing at it gives the same local ring as localizing R at that prime (our own account). Starting with tests at maximal ideals alone, one needs the theorem that Cohen–Macaulay local rings stay Cohen–Macaulay at every prime. Tag 00NB proves this.

**Paper or page:** [Homological Local, Theorem 4.18](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Lemma 10.104.5](https://stacks.math.columbia.edu/tag/00NB). It says: “That is, its localizations at any prime—or, though we haven't proved yet, at any maximal ideal—are.”

**Sources:**

- [The Stacks Project, Lemma 10.104.5, Tag 00NB](https://stacks.math.columbia.edu/tag/00NB)

### The socle detects graded quotients

**Remember:** A nonzero graded kernel must hit the socle line.

*Rules out counterexamples.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)). arXiv math.AC. Level 3: graduate.

**Definition.** Consider a finite-dimensional commutative graded algebra over a field, with only nonnegative degrees and just the field in degree zero. Its socle consists of the elements killed by every element of positive degree. Such an algebra is Gorenstein exactly when its socle has dimension one over the field.

**Problem.** Take a surjective degree-preserving map between two such Gorenstein algebras over the same field. If their highest nonzero degrees agree, the map is an isomorphism.

**How the definition helps.** Every nonzero graded ideal meets the socle, because its part in its highest nonzero degree is killed by all positive degrees (our own). In a Gorenstein algebra the socle is one line, the whole top degree, so a nonzero kernel would contain the top degree (our own). Then the map would vanish in the top degree, which the target needs (our own). If the socle has dimension two, k\[x,y\]/(x²,xy,y²) surjects onto k\[y\]/(y²) with the same highest degree (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “R is not Gorenstein because the socle has dimension 2 (not 1) as a k-vector space, spanned by x and y.”

**Paper or page:** [Complete intersection algebras with binomial Macaulay dual generator](https://arxiv.org/abs/2503.13920v1). It says: “Any surjective degree-preserving homomorphism π : A → B between Artinian Gorenstein K-algebras with the same socle degree is an isomorphism.”

**Sources:**

- [Roberta Di Gennaro and Rosa M. Miró-Roig, Complete Intersection Algebras with Binomial Macaulay Dual Generator (2025)](https://doi.org/10.1007/s00009-025-02946-8)

### Regular parameters reduce multiplicity to length

**Remember:** Regular parameters leave only degree zero in the Koszul sum.

*Rules out counterexamples.* MSC 13H15 (Multiplicity theory and related topics). arXiv math.AC. Level 3: graduate.

**Definition.** A system of parameters in a local ring of dimension d is a list of d elements whose ideal has only the maximal ideal as a prime above it. A Noetherian local ring is Cohen–Macaulay when every system of parameters is a regular sequence. Regular means that each element is a nonzerodivisor modulo the earlier ones.

**Problem.** In a Noetherian Cohen–Macaulay local ring R, the multiplicity of a parameter ideal I equals the length of R/I.

**How the definition helps.** Serre's formula writes the multiplicity as an alternating sum of lengths of Koszul homology, and a regular sequence kills every term except R/I (our own). Without the Cohen–Macaulay condition the claim fails (our own). In k\[\[t,u,v\]\]/(u²,uv,v²,tu,tv), with k a field, the parameter t gives a quotient of length 3 (our own). The lengths modulo tⁿ are n + 2, so the multiplicity is 1 (our own).

**Paper or page:** [Intersection, Theorem 43.15.5.](https://stacks.math.columbia.edu/tag/0AZZ). It says: “Then $$ e<sub>I</sub>(M, r) = \\sum (-1)<sup>i\\text{length}<sub>A</sub></sup> H<sub>i</sub>(K\_\\bullet(f<sub>1</sub>, \\ldots, f<sub>r</sub>) \\otimes<sub>A</sub> M) $$”

**Sources:** none listed. No primary source with a working link was found.

### Serre's Tor formula fixes intersection multiplicity where length overcounts

**Remember:** Higher Tor terms correct the overcount of the naive length.

*Rules out counterexamples. Confidence: medium.* MSC 13H15 (Multiplicity theory and related topics), 13D07, 14C17. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Let A be a regular local ring. Let A/I and A/J be the local rings of two subvarieties that meet only at the closed point, with dimensions adding up to dim A. The naive intersection multiplicity is the length of A/(I + J). Serre's multiplicity is the alternating sum of the lengths of Torᵢ(A/I, A/J) over all i ≥ 0.

**Problem.** With Serre's multiplicities, Bézout's theorem holds for all subvarieties of projective space that meet properly. The product of the degrees equals the sum, over the components of the intersection, of multiplicity times degree. The naive length can make this fail when a subvariety is not Cohen–Macaulay.

**How the definition helps.** The higher Tor terms correct for the failure of A/I or A/J to be Cohen–Macaulay. Let V be the union of the planes x = y = 0 and z = w = 0 in 4-space (our own, after Hartshorne). Let W be the plane x = z, y = w. Then A/(I + J) has length 3, but W meets each plane transversally, so the right answer is 2 (our own). Serre's sum gives 2 (our own). The work goes into Serre's theorems that his sum is positive and well behaved for varieties over a field.

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “When V and W can be moved into a transverse position, this homological formula produces the expected answer.”

**Sources:**

- [J.-P. Serre, Algèbre locale, multiplicités, Lecture Notes in Mathematics 11, Springer, 1965 (third edition 1975).](https://doi.org/10.1007/978-3-540-37123-6)

### Serre's Tor sum corrects intersection multiplicity where length overcounts

**Remember:** Higher Tors correct the length when one variety is not Cohen–Macaulay.

*Rules out counterexamples.* MSC 13H15 (Multiplicity theory and related topics), 13D07, 14C17. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Let A be a regular local ring, one whose maximal ideal is generated by dim A elements. Let I, J be ideals with A/(I + J) of finite length. Serre defined the intersection multiplicity χ(A/I, A/J) as the alternating sum of the lengths of the modules Torᵢ(A/I, A/J). The naive definition is the length of A/(I + J), the term for i = 0.

**Problem.** Serre's multiplicity is additive on short exact sequences. It equals the length of A/(I + J) when both quotients are Cohen–Macaulay and their dimensions add to dim A.

**How the definition helps.** Additivity lets a bad variety be cut into good pieces, which length does not allow. For example, let Y be the planes x = y = 0 and z = w = 0 in four-space (our own example). Against the plane x = z, y = w, Serre's sum gives 2 but length gives 3. The reason is that Y is not Cohen–Macaulay, and the work went into Serre's theorems on additivity and on the Cohen–Macaulay case.

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number), [Serre's multiplicity conjectures](https://en.wikipedia.org/wiki/Serre%27s_multiplicity_conjectures). It says: “When V and W can be moved into a transverse position, this homological formula produces the expected answer.”

**Sources:**

- [J.-P. Serre, Local Algebra, Springer Monographs in Mathematics, Springer, 2000 (translation of Algèbre locale, multiplicités, 1965)](https://doi.org/10.1007/978-3-662-04203-8)

### Early local rings had to be Noetherian, which keeps Krull's intersection theorem

**Remember:** Noetherian local rings have no nonzero element in every power of m.

*Rules out counterexamples. Confidence: medium.* MSC 13H99 (Local rings and semilocal rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** Krull introduced local rings in 1938, and many authors until about 1960 required them to be Noetherian: every ideal is finitely generated. A local ring without this condition was called quasi-local.

**Problem.** Krull's intersection theorem: in a commutative Noetherian local ring with maximal ideal m, the intersection of all powers mⁿ is 0. So the powers of m separate the elements of the ring, and the ring embeds in its completion.

**How the definition helps.** Building the Noetherian condition into the definition made Krull's theorem hold for every local ring, with no extra hypothesis (our own). The proof uses the Artin–Rees lemma and Nakayama's lemma, which need the condition. The condition cannot be dropped: in the local ring of germs at 0 of smooth real functions, the nonzero germ of e to the power −1/x² lies in every power of the maximal ideal. Modern texts drop the condition from the definition and state it as a hypothesis of the theorem.

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “Before about 1960 many authors required that a local ring be (left and right) Noetherian, and (possibly non-Noetherian) local rings were called quasi-local rings.”

**Sources:**

- [W. Krull, Dimensionstheorie in Stellenringen, Journal für die reine und angewandte Mathematik 179 (1938) 204](https://doi.org/10.1515/crll.1938.179.204)

### Excluding the zero ring makes local rings those with one closed point

**Remember:** Local means exactly one closed point, and the empty spectrum has none.

*Rules out counterexamples.* MSC 13H99 (Local rings and semilocal rings), 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A local ring is a ring with exactly one maximal ideal. The zero ring, where 0 = 1, has no maximal ideal, so it is not local.

**Problem.** A ring is local exactly when its spectrum has exactly one closed point. It is also local exactly when it is not the zero ring and, for each x, x or 1 − x is a unit.

**How the definition helps.** The definition 'exactly one maximal ideal' excludes the zero ring at once, so it agrees with the one-closed-point test. The zero ring passes the element test, because there every element, even 0, is a unit, but its spectrum is empty. So the element test needs the extra clause 'R is not the zero ring', as the quoted lemma shows. The proof is then short: the non-units form the unique maximal ideal (our own summary).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.18.3](https://stacks.math.columbia.edu/tag/00E9). It says: “The following are equivalent: (1) R is a local ring, (2) Spec(R) has exactly one closed point, … (4) R is not the zero ring and for every x ∈ R either x or 1 − x is invertible”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 00E9 (Algebra, Lemma 10.18.3)](https://stacks.math.columbia.edu/tag/00E9)

### Residue sequences show p-adic integers modulo pⁿ are integers modulo pⁿ

**Remember:** Reduction modulo a power is just reading that term.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 11S99. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** Define a p-adic integer as a sequence (x₁, x₂, …) in which xₖ is an integer modulo pᵏ. Each term must reduce to the previous term modulo the smaller power. The alternative completes ℤ for the p-adic distance, in which a number is small when a high power of p divides it.

**Problem.** Write ℤₚ for the ring of p-adic integers. For each n ≥ 1, the quotient ℤₚ/pⁿℤₚ is the ring ℤ/pⁿℤ of integers modulo pⁿ.

**How the definition helps.** With residue sequences, the map to ℤ/pⁿℤ is just reading the n-th term (our own). It is onto, because an ordinary integer gives the sequence of its residues (our own). Its kernel is pⁿℤₚ, because a sequence with n-th term zero has later terms divisible by pⁿ, and dividing gives a p-adic integer (our own). The work moves to proving that the residue model agrees with the metric completion (our own).

**nLab:** [p-adic integer](https://ncatlab.org/nlab/show/p-adic+integer). It says: “More abstractly, it is the limit lim ℤ/(pⁿ), in the category of (unital) rings”

**Sources:** none listed. No primary source with a working link was found.

### Henselian as finite algebras split makes finite local extensions henselian

**Remember:** An algebra finite over a finite algebra is finite over the original ring.

*True by definition.* MSC 13J15 (Henselian rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring has exactly one maximal ideal. Call a local ring R henselian if every finite R-algebra is a finite product of local rings. The usual definition asks that each simple root of a monic polynomial modulo the maximal ideal lifts to a root in R. Stacks Lemma 10.153.3 proves that the two definitions agree.

**Problem.** If R is a henselian local ring and S is a finite R-algebra that is a local ring, then S is henselian.

**How the definition helps.** With the splitting definition, the new ring passes the test because the old ring does (our own). A finite algebra over S is also finite over R, so it is a finite product of local rings (our own). The work moves to Stacks Lemma 10.153.3, which proves that the splitting test agrees with root lifting.

**Paper or page:** [Lemma 10.153.4.](https://stacks.math.columbia.edu/tag/04GH). It says: “If R → S is a finite ring map and S is local, then S is a henselian local ring and R → S is a (finite) local ring map.”

**Sources:** none listed. No primary source with a working link was found.

### Henselian rings are defined as the local rings where Hensel's lemma holds

**Remember:** Henselian rings are where factorizations modulo m lift.

*True by definition.* MSC 13J15 (Henselian rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative local ring R with maximal ideal m is Henselian if this holds for every monic polynomial over R. Every factorization of its image over R/m into coprime monic factors lifts to a factorization over R.

**Problem.** In a Henselian local ring, Hensel's lemma holds: coprime monic factorizations over the residue field lift. Complete local rings, such as the p-adic integers, are Henselian, and every local ring has a universal Henselian ring over it, its Henselization.

**How the definition helps.** Hensel's lemma becomes true by definition, and the work moves into showing which rings are Henselian. The page lists complete Hausdorff local rings, such as the p-adic integers and power series rings over a field. Nagata's Henselization is an algebraic substitute for the completion, with the same completion and residue field as A.

**Wikipedia:** [Henselian ring](https://en.wikipedia.org/wiki/Henselian_ring). It says: “a Henselian ring (or Hensel ring) is a local ring in which Hensel's lemma holds.”

**Sources:**

- [G. Azumaya, On maximally central algebras, Nagoya Mathematical Journal 2 (1951) 119–150](https://doi.org/10.1017/s0027763000010114)
- [M. Nagata, On the theory of Henselian rings, Nagoya Mathematical Journal 5 (1953) 45–57](https://doi.org/10.1017/s0027763000015439)

### Defining differentials through derivations gives their transitivity sequence at once

**Remember:** To vanish on the middle ring, kill all differentials coming from it.

*True by definition. Confidence: medium.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A derivation from a B-algebra C to a C-module N is an additive map that obeys the product rule and vanishes on B. Define the module of differentials Ω(C/B) by its universal property: C-module maps Ω(C/B) → N match such derivations. Another definition takes J/J², where J is the kernel of multiplication C ⊗ C → C over B.

**Problem.** Let A → B → C be ring maps. Then Ω(C/B) is Ω(C/A) divided by the C-submodule generated by the differentials db of elements b of B.

**How the definition helps.** With this definition, both modules have the same maps out, so they are isomorphic. A map out of the quotient is a map out of Ω(C/A) that kills every db (our own). That is an A-derivation of C that vanishes on B, which is a B-derivation (our own). This gives the exact sequence in the Stacks quote (our own). The work moves to proving that the universal module exists, for example as J/J² (our own).

**Paper or page:** [Algebra, Lemma 10.131.7.](https://stacks.math.columbia.edu/tag/00RS). It says: “Let A → B → C be ring maps. Then there is a canonical exact sequence C ⊗ʙ Ω(B/A) → Ω(C/A) → Ω(C/B) → 0 of C-modules.”

**Sources:** none listed. No primary source with a working link was found.

### Defining differentials through derivations makes them commute with base change

**Remember:** A derivation on the changed algebra is fixed by its values on the original.

*True by definition.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A derivation from an R-algebra S to an S-module N is an additive map D that vanishes on R. It obeys the product rule D(ab) = aD(b) + bD(a). Define the module of differentials Ω(S/R) by its universal property: S-module maps Ω(S/R) → N match derivations S → N. Another definition takes J/J², where J is the kernel of the multiplication map S ⊗ S → S.

**Problem.** Let R → R′ and R → S be ring maps, and let S′ be the tensor product S ⊗ R′ over R. Then Ω(S/R) ⊗ R′ is isomorphic to Ω(S′/R′).

**How the definition helps.** With this definition, both modules have the same maps out, so the universal property makes them isomorphic. An R′-derivation S′ → N is fixed by its restriction to S, which is an R-derivation (our own). Conversely, an R-derivation D on S extends by D(s ⊗ r′) = r′D(s) (our own). So both modules represent R-derivations S → N, for every S′-module N (our own). The work moves to proving that the universal module exists, for example as J/J² in Stacks Lemma 10.131.13.

**Paper or page:** [Algebra, Lemma 10.131.12.](https://stacks.math.columbia.edu/tag/00RV), [Algebra, Lemma 10.131.13.](https://stacks.math.columbia.edu/tag/00RW). It says: “Then the canonical map defined above induces an isomorphism Ω(S/R) ⊗ᵣ R′ = Ω(S′/R′).”

**Sources:** none listed. No primary source with a working link was found.

### Kähler C∞-differentials of smooth functions are exactly the smooth 1-forms

**Remember:** Require the chain rule for all smooth functions, not just sums and products.

*Rules out counterexamples.* MSC 13N05 (Modules of differentials), 58A10, 58A40. arXiv math.DG, math.AC. Level 3: graduate.

**Definition.** A C∞-ring is a ring in which you can apply every smooth function f on ℝⁿ, not only polynomials; C∞(M) is the main example. A C∞-derivation of A into an A-module N is a map d with d(f(a₁,…,aₙ)) = Σᵢ (∂f/∂xᵢ)(a₁,…,aₙ) daᵢ for every smooth f. The Kähler C∞-differentials are the universal target of such a derivation.

**Problem.** For a smooth manifold M, the Kähler C∞-differentials of C∞(M) are exactly the smooth 1-forms on M, the sections of the cotangent bundle (Dubuc and Kock).

**How the definition helps.** The chain rule for all smooth f forces d(exp(x)) = exp(x) dx, which the Leibniz rule alone cannot do. If C∞(M) is treated only as a commutative ring, its ordinary Kähler differentials are far too big. For M = ℝ one has d(exp(x)) ≠ exp(x) dx there, and the known proof of this uses the axiom of choice. With the C∞ definition the theorem holds, but its proof is real work, not a tautology.

**nLab:** [Kähler C<sup>∞</sup>-differentials of smooth functions are differential 1-forms](https://ncatlab.org/nlab/show/K%C3%A4hler+C%5E%E2%88%9E-differentials+of+smooth+functions+are+differential+1-forms), [Kähler differential](https://ncatlab.org/nlab/show/K%C3%A4hler+differential). It says: “However, this is not a defect in the conceptual idea itself, but merely a failure to use the correct formalism.”

**Sources:**

- [E. J. Dubuc, A. Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### A Newton polygon formalism shows perfectoid Tate algebras have uncountable Krull dimension

**Remember:** Keep the convex data, change the ring.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A18 (Valuations and their generalizations for commutative rings), 14G22, 13C15. arXiv math.NT, math.AC. Level 4: research.

**Definition.** The Newton polygon of a power series records the valuations of its coefficients as a convex function. A Newton polygon formalism on a ring R assigns such a convex function to each element of R. It comes from a family of valuations vₛ, indexed by s in a range such as (0, 1\].

**Problem.** Any ring with a Newton polygon formalism on (0, 1\] that discretely approximates each suitable convex function has uncountable Krull dimension (Theorem 4.8, after Du). The perfectoid Tate algebra over a perfectoid field has such a formalism, so it has an uncountable chain of prime ideals.

**How the definition helps.** The formalism isolates the property of the ring that Du’s proof uses, so the proof applies to any ring that has it. Du’s cases include V\[\[x\]\] for a nondiscrete valuation ring V. For the perfectoid Tate algebra, the paper uses a nonstandard formalism in which the variable x and the pseudo-uniformizer π switch roles. The hard step is to check that this formalism approximates finely enough.

**Paper or page:** [The perfectoid Tate algebra has uncountable Krull dimension](https://arxiv.org/abs/2212.13315v2). It says: “We prove a version of Du's theorem in the prescence of a sufficiently nondiscrete Newton polygon formalism.”

**Sources:**

- [Jack J Garzella, The perfectoid Tate algebra has uncountable Krull dimension, arXiv:2212.13315v2 (2024)](https://arxiv.org/abs/2212.13315v2)

### Small separating invariant sets force large components in the separating variety

**Remember:** A separating set of m invariants cuts out the separating variety with m equations.

*Makes the theorem clean to state or prove.* MSC 13A50 (Actions of groups on commutative rings; invariant theory), 14L24. arXiv math.RT, math.AC. Level 4: research.

**Definition.** Let a group G act linearly on a vector space V over an algebraically closed field. The separating variety is the set of pairs of points of V on which every invariant polynomial takes the same value. A set of invariant polynomials is separating if it distinguishes every pair that some invariant distinguishes.

**Problem.** Suppose that m invariant polynomials form a separating set. Then every irreducible component of the separating variety has dimension at least 2·dim V − m. For n-tuples of p × p matrices this gives the paper's bound m ≥ (n − 1)p² + p when n ≥ 3.

**How the definition helps.** The separating variety turns a question about separating sets into a question about the dimension of one fixed variety. The paper's Proposition 1.5 says that m invariants are separating exactly when the m differences f(u) − f(v) cut out the separating variety. V × V has dimension 2·dim V. In our own explanation, Krull's principal ideal theorem then says that each component of that zero set has dimension at least 2·dim V − m. The hard work in the paper is to find the smallest component for tuples of matrices under simultaneous conjugation.

**Paper or page:** [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1). It says: “Its geometry places restrictions on the existence of small separating sets, i.e. sets of invariants which distinguish the same points as the full algebra of invariants.”

**Sources:**

- [Jonathan Elmer, The separating variety for matrix invariants, arXiv:2508.13865 (2025)](https://arxiv.org/abs/2508.13865v1)

### Torsion-free λ-rings are rings with commuting Frobenius lifts

**Remember:** Torsion-free λ-ring: one Frobenius lift for each prime, all commuting.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A99 (General commutative ring theory), 13A35, 19A99. arXiv math.AC, math.KT. Level 4: research.

**Definition.** In the 'heterodox' view, a torsion-free λ-ring is a torsion-free commutative ring with endomorphisms ψₚ, one for each prime p, that commute with each other. Each ψₚ must be a Frobenius lift: modulo p it equals the map x ↦ xᵖ. The orthodox definition instead uses operations λⁿ and six axioms written with universal polynomials.

**Problem.** On a torsion-free ring, a λ-ring structure is the same as a family of commuting Frobenius lifts ψₚ, one for each prime p (Wilkerson). A ring map between torsion-free λ-rings is a λ-map exactly when it commutes with the ψₚ.

**How the definition helps.** The Frobenius-lift view turns both checks into checks about endomorphisms modulo p. With the orthodox axioms, you must check identities with the complicated universal polynomials Pₙ and Pₘ,ₙ. The real content is Wilkerson's theorem: the lifts determine a unique λ-structure whose Adams operations are these lifts. Borger uses this view to set up λ-algebraic geometry as geometry 'over the field with one element'.

**nLab:** [Lambda-ring](https://ncatlab.org/nlab/show/Lambda-ring). It says: “Equivalently, it turns out (Wilkerson 82) that a λ-ring is a commutative ring equipped with an endomorphism that lifts the Frobenius endomorphism after reduction mod p at each prime number p.”

**Sources:**

- [C. Wilkerson, Lambda-rings, binomial domains, and vector bundles over CP(∞), Communications in Algebra 10 (1982) 311–328](https://doi.org/10.1080/00927878208822717)
- [J. Borger, The basic geometry of Witt vectors, I: The affine case, 2008, arXiv:0801.1691](https://arxiv.org/abs/0801.1691)
- [J. Borger, Lambda-rings and the field with one element, 2009, arXiv:0906.3146](https://arxiv.org/abs/0906.3146)

### Flatness makes weakly étale maps compose and survive base change

**Remember:** Both tests reduce to flatness after tensoring or composing.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13C11. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A ring map A → B is flat if tensoring with B over A preserves injections of modules. It is weakly étale if both A → B and the multiplication map B ⊗ₐ B → B are flat.

**Problem.** Weakly étale ring maps remain weakly étale after composition or base change, which replaces A by A′ and B by B ⊗ₐ A′.

**How the definition helps.** The two flatness tests turn base change and composition into familiar rules about flat maps. For base change, both maps in the test are obtained by tensoring the original maps with A′ over A. For composition A → B → C, factor multiplication as C ⊗ₐ C → C ⊗ᵦ C → C. The first map is a base change of B ⊗ₐ B → B, and the second is flat by assumption (our own account).

**Paper or page:** [More Algebra, Lemma 15.105.7](https://stacks.math.columbia.edu/tag/092H), [More Algebra, Lemma 15.105.9](https://stacks.math.columbia.edu/tag/092J), [More Algebra, Lemma 15.105.16](https://stacks.math.columbia.edu/tag/092Q). It says: “If A → B is weakly étale, then A′ → B′ is weakly étale.”

**Sources:**

- [The Stacks Project, Lemma 15.105.7, Tag 092H](https://stacks.math.columbia.edu/tag/092H)
- [The Stacks Project, Lemma 15.105.9, Tag 092J](https://stacks.math.columbia.edu/tag/092J)
- [The Stacks Project, Lemma 15.105.16, Tag 092Q](https://stacks.math.columbia.edu/tag/092Q)
- [B. Bhatt and P. Scholze, The pro-étale topology for schemes, Astérisque 369](https://doi.org/10.24033/ast.960)

### Height-one intersections preserve reflexivity

**Remember:** Recover a reflexive module from its height-one pieces.

*True by definition. Confidence: medium.* MSC 13C13 (Other special types of modules and ideals in commutative rings). arXiv math.AC. Level 4: research.

**Definition.** Let R be a Noetherian normal domain, so every ideal is finitely generated and R is integrally closed in its fraction field. A finite module is torsion free if no nonzero scalar kills a nonzero element. It is reflexive if it is torsion free and equals the intersection of its height-one localizations inside its vector space of fractions. A height-one prime is nonzero and contains no smaller nonzero prime.

**Problem.** Let two finite reflexive modules span the same vector space over the fraction field of a Noetherian normal domain. Their intersection in that space is reflexive.

**How the definition helps.** The intersection test lets us intersect the two modules before or after testing each height-one prime (our own). Localization preserves finite intersections, and the intersection is finitely generated because the ring is Noetherian (our own). The cited criterion identifies the height-one test with the usual definition, which requires the natural map to the double dual to be invertible (our own).

**Paper or page:** [More Algebra, Lemma 15.23.18.](https://stacks.math.columbia.edu/tag/0AVB). It says: “$M$ is torsion free and $M = \\bigcap\_{\\text{height}(\\mathfrak p) = 1} M<sub>\\mathfrak p</sub>$ where the intersection happens in $M<sub>K</sub> = M \\otimes<sub>R</sub> K$.”

**Sources:** none listed. No primary source with a working link was found.

### Cohen–Macaulay complexes give new proofs of homological conjectures

**Remember:** Complexes can be Cohen–Macaulay where modules are hard to find.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules), 13D02, 13D22. arXiv math.AC. Level 4: research.

**Definition.** Over a Noetherian local ring R, a maximal Cohen–Macaulay complex is a complex with finitely generated homology, nonzero in degree 0, whose depth equals dim R. Depth is the length of a longest regular sequence. Such a complex plays the role of a big Cohen–Macaulay module, a module whose depth is dim R.

**Problem.** If R has a maximal Cohen–Macaulay complex, then the new intersection theorem holds for R. That is, a finite free complex F with H₀(F) ≠ 0 and finite-length homology has length at least dim R.

**How the definition helps.** Complexes are easier to build than modules, and the proofs of the conjectures only need the depth property (our own reading). For R essentially of finite type over a field of characteristic zero, the derived pushforward of the structure sheaf along a resolution of singularities is such a complex (Proposition 3.20). In our own reading, the survey still uses deep inputs, such as André's theorem that big Cohen–Macaulay algebras exist.

**Paper or page:** [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1), [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1), [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1). It says: “Various constructions of maximal Cohen-Macaulay complexes are described, and their existence is applied to give new proofs of some of the homological conjectures, and also of certain results in birational geometry.”

**Sources:**

- [Srikanth B. Iyengar, Linquan Ma, Karl Schwede, Mark E. Walker, Maximal Cohen-Macaulay complexes and their uses: A partial survey, arXiv:2106.08173 (2021)](https://arxiv.org/abs/2106.08173v1)

### One-degree duality preserves Cohen–Macaulay modules

**Remember:** Dualize once in one degree, then dualize back.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 4: research.

**Definition.** Let ω be a normalized dualizing complex over a Noetherian local ring A. A finite A-module M of dimension d is Cohen–Macaulay exactly when Extⁱ(M, ω) is nonzero only for i = −d.

**Problem.** The functor M ↦ Ext⁻ᵈ(M, ω) sends finite Cohen–Macaulay modules of dimension d to the same class and reverses maps. Applying it twice gives back M naturally, so it is an anti-equivalence of that class.

**How the definition helps.** Concentration in one degree makes the first dual a single module placed in degree −d (our own). Double duality then puts the dual of that module in the same single degree (our own). The concentration criterion identifies its dimension and shows it too is Cohen–Macaulay (our own). Local duality relates this criterion to the usual equality between depth and dimension (our own).

**Paper or page:** [Dualizing, Lemma 47.16.7.](https://stacks.math.columbia.edu/tag/0B5A). It says: “Then $M \\mapsto \\mathop{\\mathrm{Ext}}\\nolimits<sup>-d</sup><sub>A</sub>(M, \\omega<sub>A</sub><sup>\\bullet</sup>)$ defines an anti-auto-equivalence of $CM<sub>d</sub>$.”

**Sources:** none listed. No primary source with a working link was found.

### Sequentially Cohen–Macaulay modules are closed under direct sums

**Remember:** Sort the pieces by dimension, and each piece can be Cohen–Macaulay.

*Rules out counterexamples. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 4: research.

**Definition.** A module is Cohen–Macaulay when its depth, the length of a longest regular sequence on it, equals its dimension. A module is sequentially Cohen–Macaulay when it has a filtration whose quotients are Cohen–Macaulay with strictly increasing dimensions. Every Cohen–Macaulay module is sequentially Cohen–Macaulay.

**Problem.** Over a Cohen–Macaulay ring with a canonical module, M ⊕ N is sequentially Cohen–Macaulay exactly when M and N are. Cohen–Macaulay modules lack this property: a direct sum of Cohen–Macaulay modules of different dimensions is not Cohen–Macaulay.

**How the definition helps.** The filtration lets each dimension carry its own Cohen–Macaulay piece, which is the room that direct sums need. The easy direction merges the two filtrations dimension by dimension (our own reading). The hard direction, that a direct summand is again sequentially Cohen–Macaulay, uses duality with the canonical module (our own reading). Our own example: over R = k\[x, y\], R ⊕ R/(x) has depth 1 and dimension 2, so it is not Cohen–Macaulay, yet it is sequentially Cohen–Macaulay.

**Paper or page:** [On the notion of sequentially Cohen-Macaulay modules](https://arxiv.org/abs/2304.06609v1). It says: “Then, M and N are sequentially Cohen-Macaulay if and only if M ⊕ N is sequentially Cohen-Macaulay.”

**Sources:**

- [Giulio Caviglia, Alessandro De Stefani, Enrico Sbarra, Francesco Strazzanti, On the notion of sequentially Cohen-Macaulay modules, arXiv:2304.06609 (2023), Research in the Mathematical Sciences 9 (2022), Article 40](https://arxiv.org/abs/2304.06609v1)

### Dual cosupport joins exact sequences

**Remember:** Dualize, localize, and take the union.

*True by definition.* MSC 13C60 (Module categories and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** In a Noetherian local ring, take the injective hull of the residue field, its smallest injective extension. The Matlis dual of a module consists of its linear maps over the ring into that hull. Define cosupport as the support of this dual, meaning the primes where its localization is nonzero. Equivalently, take primes containing the annihilator of some nonzero quotient of the module that embeds in the hull.

**Problem.** In a short exact sequence, the cosupport of the middle module is the union of the cosupports of the end modules.

**How the definition helps.** The dual definition reduces the result to the union rule for support (our own). Dualizing into an injective module preserves exactness and reverses the arrows (our own). The work lies in showing that localizing the dual detects the same primes as the quotient definition (our own).

**Paper or page:** [On Artinianness of Formal Local Cohomology, Colocalization and Coassociated Primes](https://arxiv.org/abs/1011.4141v3). It says: “If 0 → M′ → M → M″ → 0 is exact, then CoSupp M = CoSupp M′ ∪ CoSupp M″.”

**Sources:**

- [Majid Eghbali, On Artinianness of Formal Local Cohomology, Colocalization and Coassociated Primes (2013)](https://doi.org/10.7146/math.scand.a-15478)

### Matrix factorizations make resolutions over hypersurfaces periodic of period two

**Remember:** Two matrices whose product is f give every periodic resolution.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C14. arXiv math.AC. Level 4: research.

**Definition.** Let A be a regular local ring, f a nonzero element of its maximal ideal, and R = A/(f). A matrix factorization of f is a pair of square matrices φ, ψ over A with φψ = ψφ = f times the identity. It is reduced when all entries lie in the maximal ideal. A maximal Cohen–Macaulay module is a finitely generated module whose depth equals dim R.

**Problem.** Taking cokernels gives a bijection between reduced matrix factorizations of f, up to equivalence, and maximal Cohen–Macaulay R-modules without free summands. Every finitely generated R-module has a minimal free resolution that is eventually periodic of period two (Eisenbud).

**How the definition helps.** By the Auslander–Buchsbaum formula, a maximal Cohen–Macaulay R-module M has projective dimension one over A (our own). So M is the cokernel of a square matrix φ (our own). Since f kills M, f times the identity factors through φ and gives ψ (our own). Modulo f, φ and ψ alternate in a periodic resolution of M, and high syzygies of any module are maximal Cohen–Macaulay (our own). The work goes into the Auslander–Buchsbaum formula.

**Paper or page:** [ADE Classification of Hypersurface Singularities over Local Rings](https://arxiv.org/abs/2509.15396v1). It says: “Let (A,m) be a be a regular local ring and let r ∈ A be a non unit. Then there there exists a bijection between 𝓜𝓒𝓜(A/⟨r⟩) and equivalence classes of reduced matrix factorizations of r.”

**Sources:**

- [D. Eisenbud, Homological algebra on a complete intersection, with an application to group representations, Transactions of the American Mathematical Society 260 (1980), 35–64.](https://doi.org/10.1090/s0002-9947-1980-0570778-7)

### Weak proregularity makes derived completion agree with completion

**Remember:** Weakly proregular ideals let completion behave as over Noetherian rings.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A finitely generated ideal is weakly proregular when, for a generating sequence, the Koszul homology of its powers is pro-zero in positive degrees. Koszul homology is the homology of a standard complex that measures how far a sequence is from being regular. Pro-zero means that each n has some m ≥ n for which the homology map from m-th powers to n-th powers is zero. Every ideal of a Noetherian ring has this property.

**Problem.** Let 𝔞 be a weakly proregular ideal. For every complex P of 𝔞-adically flat modules, the map from the derived completion LΛ𝔞(P) to the 𝔞-adic completion Λ𝔞(P) is an isomorphism.

**How the definition helps.** In our own reading, weak proregularity is the finiteness condition that the completion arguments use, so it replaces the Noetherian hypothesis. Without it, the theorem needs the complex P to be bounded above. The abstract says that such ideals occur often in non-Noetherian rings from Hochschild and prismatic cohomology. The proof of the comparison itself still takes work.

**Paper or page:** [Derived Complete Complexes at Weakly Proregular Ideals](https://arxiv.org/abs/2309.01687v4). It says: “Assume either of these two conditions hold: either the complex P is bounded above, or the ideal 𝔞 is weakly proregular. Then the canonical morphism … LΛ𝔞(P) → Λ𝔞(P) in D(A) is an isomorphism.”

**Sources:**

- [Amnon Yekutieli, Derived Complete Complexes at Weakly Proregular Ideals, arXiv:2309.01687 (2023)](https://arxiv.org/abs/2309.01687v4)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Weak proregularity makes Čech cohomology compute local cohomology

**Remember:** Weakly proregular is exactly when the Čech complex tells the truth.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** Take a sequence a₁, …, aᵣ in a commutative ring. It is weakly proregular when the Koszul homology of the powers a₁ⁿ, …, aᵣⁿ forms a pro-zero inverse system in positive degrees. Local cohomology is the derived functor of taking elements killed by a power of the ideal. Čech cohomology is the cohomology of an explicit complex of localizations.

**Problem.** For a weakly proregular sequence in any commutative ring, local cohomology is naturally isomorphic to Čech cohomology. Every sequence in a Noetherian ring is weakly proregular, so this includes the classical case.

**How the definition helps.** The definition asks for exactly the vanishing that makes the Čech functors effaceable, so they become the derived functors. A functor F is effaceable when each object A has an embedding u into some M with F(u) = 0. Proposition 4.4 proves that a sequence is weakly proregular exactly when Čech cohomology is an effaceable δ-functor. The note avoids the derived categories that Schenzel used in his proof.

**Paper or page:** [A note on weakly proregular sequences and local cohomology](https://arxiv.org/abs/2105.07652v2). It says: “In this note, we give an elementary proof of the result given by Schenzel that there are functorial isomorphisms between local cohomology groups and Čech cohomology groups, by using weakly proregular sequences.”

**Sources:**

- [Ryoya Ando, A note on weakly proregular sequences and local cohomology, arXiv:2105.07652 (2021), Moroccan J. Algebra Geom. Appl. 1 (2022), 98-107](https://arxiv.org/abs/2105.07652v2)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Working in the cone of Betti diagrams proves the multiplicity bounds

**Remember:** Betti tables are positive mixtures of pure ones.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D40. arXiv math.AC. Level 4: research.

**Definition.** The Betti diagram of a graded module M over k\[x₁,…,xₙ\] is the table of its graded Betti numbers βᵢⱼ. Here βᵢⱼ is the number of degree-j generators of the i-th free module in a minimal resolution. Boij and Söderberg proposed to study these tables up to positive rational multiples, inside the cone they span. A pure diagram has one nonzero entry in each column.

**Problem.** Let S/I be a Cohen–Macaulay quotient of k\[x₁,…,xₙ\] of codimension c. Let tᵢ and Tᵢ be the least and greatest generator degrees in step i of its minimal resolution. Then the multiplicity of S/I lies between t₁t₂⋯ and T₁T₂⋯, each a product over steps 1 to c divided by c! (Herzog–Huneke–Srinivasan, proved by Eisenbud and Schreyer).

**How the definition helps.** In the cone, the multiplicity and β₀ are both linear (our own). So their ratio for S/I is an average of the ratios for pure diagrams (our own). For pure diagrams the Herzog–Kühl formulas give the bounds exactly (our own). Eisenbud and Schreyer proved that every such diagram is a positive combination of pure diagrams with shifts between those of S/I. The work goes into that decomposition theorem, which rests on a duality with cohomology tables of vector bundles.

**Paper or page:** [Betti Cones of Stanley-Reisner Ideals](https://arxiv.org/abs/2401.05962v1), [Lim Ulrich sequences and Boij-Söderberg cones](https://arxiv.org/abs/2209.03498v2). It says: “There exist positive rational numbers qᵢ and a chain of decreasing sequences c¹ &lt; ⋯ &lt; cʳ in ℤʰ⁺¹ such that β(M) = q₁ π(c¹)+⋯ + qᵣ π(cʳ).”

**Sources:**

- [D. Eisenbud and F.-O. Schreyer, Betti numbers of graded modules and cohomology of vector bundles, Journal of the American Mathematical Society 22 (2009), 859–888.](https://doi.org/10.1090/s0894-0347-08-00620-6)

### Complete intersection dimension gives Serre's criterion for complete intersections

**Remember:** Allow regular-sequence quotients, and complete intersections behave like regular rings.

*Makes the theorem clean to state or prove.* MSC 13D05 (Homological dimension and commutative rings), 13H10. arXiv math.AC. Level 4: research.

**Definition.** A local ring is a complete intersection when its completion is a regular local ring divided by a regular sequence. A quasi-deformation of R is a pair of local maps R → R′ ← Q. Here R → R′ is flat, and Q → R′ is onto with kernel generated by a regular sequence. The complete intersection dimension of M is the least value of pd M ⊗ R′ − pd R′, both over Q, over all quasi-deformations.

**Problem.** A Noetherian local ring R is a complete intersection exactly when its residue field has finite complete intersection dimension (Avramov, Gasharov and Peeva). Then every finitely generated module has finite complete intersection dimension. Such modules satisfy the Auslander–Buchsbaum formula with this dimension.

**How the definition helps.** The definition builds the complete intersection condition into the allowed comparison rings, so a complete intersection is its own witness. Take R′ to be the completion of R, and Q a regular local ring that maps onto it (our own). Over Q every module has finite projective dimension, so every module gets finite complete intersection dimension (our own). The work goes into the converse and into the Auslander–Buchsbaum formula for this dimension.

**Paper or page:** [A Ghost Lemma for Commutative Ring Homomorphisms via André-Quillen Homology](https://arxiv.org/abs/2507.13988v1). It says: “Let (R,k) be a local ring. Then R is a complete intersection if and only if CI-dim<sub>R</sub>(k) &lt; ∞.”

**Sources:**

- [L. L. Avramov, V. N. Gasharov and I. V. Peeva, Complete intersection dimension, Publications Mathématiques de l'IHÉS 86 (1997), 67–114.](https://doi.org/10.1007/bf02698901)

### Gorenstein dimension extends Auslander–Buchsbaum and characterizes Gorenstein rings

**Remember:** Totally reflexive modules look free to R itself.

*Makes the theorem clean to state or prove.* MSC 13D05 (Homological dimension and commutative rings), 13H10. arXiv math.AC. Level 4: research.

**Definition.** Let R be a Noetherian local ring and G\* = Hom(G, R). A finitely generated module G is totally reflexive when G → G\*\* is an isomorphism and Extⁱ(G, R) and Extⁱ(G\*, R) vanish for i &gt; 0. The Gorenstein dimension of M is the shortest length of a resolution of M by totally reflexive modules. Free modules are totally reflexive, so the Gorenstein dimension is at most pd M.

**Problem.** If M has finite Gorenstein dimension, then this dimension plus depth M equals depth R (the Auslander–Bridger formula). The ring R is Gorenstein exactly when every finitely generated R-module has finite Gorenstein dimension.

**How the definition helps.** The Auslander–Buchsbaum induction only uses how free modules behave under Hom into R. Totally reflexive modules behave the same way, so the induction goes through (our own). This gives a Gorenstein version of Serre's criterion, with Gorenstein dimension in place of projective dimension (our own). The work goes into showing that Gorenstein dimension can be tested on any resolution, as Schanuel's lemma does for projective dimension.

**Paper or page:** [On a relative dependency formula](https://arxiv.org/abs/2410.13239v1). It says: “If G-dim<sub>R</sub>(M) &lt; ∞, then G-dim<sub>R</sub>(M) + depth(M) = depth(R). This equality is known as Auslander-Bridger formula.”

**Sources:**

- [M. Auslander and M. Bridger, Stable module theory, Memoirs of the American Mathematical Society 94 (1969).](https://doi.org/10.1090/memo/0094)

### A one-module dualizing complex forces the ring to be Cohen–Macaulay

**Remember:** One nonzero cohomology means depth equals dimension, which is Cohen–Macaulay.

*Makes the theorem clean to state or prove.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13C14, 13D45. arXiv math.AC. Level 4: research.

**Definition.** A dualizing complex for a Noetherian ring A is a bounded complex ω• with finitely generated cohomology, finite injective dimension, and A = RHom(ω•, ω•). Here RHom is the derived Hom, and a dualizing module is a finitely generated module whose one-term complex is dualizing. A local ring is Cohen–Macaulay when its depth, the length of a longest regular sequence, equals its dimension. A ring is Cohen–Macaulay when all its localizations are.

**Problem.** If a Noetherian ring has a dualizing module, then it is Cohen–Macaulay.

**How the definition helps.** The normalized dualizing complex of a local ring records depth and dimension as the ends of its cohomology. So a single nonzero module makes them equal. Localizations of dualizing complexes stay dualizing, so the global statement reduces to local rings. The work went into local duality.

**Paper or page:** [Dualizing, Lemma 47.20.3.](https://stacks.math.columbia.edu/tag/0DW5), [Dualizing, Lemma 47.20.1.](https://stacks.math.columbia.edu/tag/0AWR). It says: “Let A be a Noetherian ring. If there exists a finite A-module ω<sub>A</sub> such that ω<sub>A</sub>\[0\] is a dualizing complex, then A is Cohen-Macaulay.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)

### Higher congruence modules extend Wiles's numerical criterion

**Remember:** Two lengths agree exactly when A is a complete intersection and M is nearly free.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13C40, 13D09. arXiv math.NT, math.AC. Level 4: research.

**Definition.** Wiles's numerical criterion uses the congruence module of a map from a local ring A to a ring 𝒪. It measures how much the part of A over 𝒪 meets the rest of A. The paper defines a congruence module that also works when the kernel of the map has higher codimension.

**Problem.** Let M be a finitely generated A-module with a depth condition (Theorem 24). Then A is a complete intersection and M is μ copies of A plus a negligible part exactly when two lengths agree. In our own reading, these are μ times a length built from A and the length of the congruence module of M.

**How the definition helps.** The new congruence module lets the criterion be stated as one equality of lengths in higher codimension (our own reading). A complete intersection is a ring cut out by as many equations as its codimension (our own gloss). Wiles used the codimension-zero version in his work on Fermat's Last Theorem (our own note). The proof of Theorem 24 still needs substantial commutative algebra (our own note).

**Paper or page:** [The commutative algebra of congruence ideals and applications to number theory](https://arxiv.org/abs/2510.05418). It says: “A critical ingredient is a notion of congruence module in higher codimension: this has turned out to be a key definition whose utility extends beyond the role it plays in the numerical criterion.”

**Sources:**

- [Srikanth B. Iyengar, Chandrashekhar B. Khare, Jeffrey Manning, The commutative algebra of congruence ideals and applications to number theory, arXiv:2510.05418 (2025)](https://arxiv.org/abs/2510.05418)
- [Andrew Wiles, Modular Elliptic Curves and Fermat's Last Theorem, The Annals of Mathematics (1995)](https://doi.org/10.2307/2118559)

### L-complete modules form the abelian category that I-adically complete modules cannot

**Remember:** Complete modules are not closed under cokernels; deriving the completion fixes this.

*Rules out counterexamples.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13B35, 13J10. arXiv math.AC. Level 4: research.

**Definition.** Let I be a finitely generated ideal of a commutative ring R. I-adic completion sends a module M to the inverse limit of the quotients M/IⁿM. Let L be the 0th left derived functor of I-adic completion, which is the closest right exact functor to it. A module M is L-complete if the canonical map M → L(M) is an isomorphism.

**Problem.** Let I be weakly proregular, for example any ideal of a Noetherian ring. Then the L-complete modules form the smallest abelian subcategory of R-modules, closed under isomorphism and with the same kernels and cokernels, that contains the I-adically complete modules.

**How the definition helps.** The left derived functor L of completion is right exact, and that repairs the failure at cokernels. Completion itself is not right exact, so a quotient of complete modules can fail to be complete, and complete modules do not form an abelian category. Every complete module is L-complete. Salch's proof of minimality is a real theorem.

**nLab:** [L-complete module](https://ncatlab.org/nlab/show/L-complete+module). It says: “The category of L-complete modules is the smallest abelian full subcategory of RMod which contains the I-adically complete modules.”

**Sources:**

- [J. P. C. Greenlees, J. P. May, Derived functors of I-adic completion and local homology, Journal of Algebra 149 (1992) 438–453](https://doi.org/10.1016/0021-8693(92)90026-I)
- [Andrew Salch, Approximation of subcategories by abelian subcategories, arXiv:1006.0048](https://arxiv.org/abs/1006.0048)

### Regular local rings remove the non-rigid Tor of the node

**Remember:** Over regular rings, once Tor vanishes it stays zero.

*Rules out counterexamples. Confidence: medium.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13H05. arXiv math.AC. Level 4: research.

**Definition.** A finitely generated module M over a local ring is Tor-rigid when it passes this test for every finitely generated module N. If Torᵢ(M, N) = 0 for some i ≥ 1, then Torⱼ(M, N) = 0 for every j ≥ i. A regular local ring is one whose maximal ideal is generated by as many elements as its dimension.

**Problem.** Over a regular local ring, every finitely generated module is Tor-rigid. Auslander proved this for unramified rings, and Lichtenbaum in general.

**How the definition helps.** Regularity removes rings like the node R = k\[\[x,y\]\]/(xy), where rigidity fails. In our own computation, R/(x) has a periodic free resolution whose maps are multiplication by x and y in turn. Tensoring it with R/(y) gives Tor₁(R/(x), R/(y)) = 0 but Tor₂ = k. The work went into the rigidity theorem, which Auslander proved for unramified rings and Lichtenbaum completed.

**Paper or page:** [A study of the cohomological rigidity property](https://arxiv.org/abs/2009.06481). It says: “Assume R is a local complete intersection of dimension d and M ∈ mod(R) is Tor-rigid (e.g., R is regular).”

**Sources:**

- [M. Auslander, Modules over unramified regular local rings, Illinois Journal of Mathematics 5 (1961)](https://doi.org/10.1215/ijm/1255631585)
- [S. Lichtenbaum, On the vanishing of Tor in regular local rings, Illinois Journal of Mathematics 10 (1966)](https://doi.org/10.1215/ijm/1256055103)

### Asking for a dualizing complex excludes Nagata's non-catenary Noetherian rings

**Remember:** Dualizing complexes measure dimension, so Nagata's bad rings cannot have one.

*Rules out counterexamples.* MSC 13D09 (Derived categories and commutative rings), 13D07, 13E05. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A dualizing complex for a Noetherian ring A is a bounded complex ω• with finitely generated cohomology and finite injective dimension. Also A = RHom(ω•, ω•), for the derived Hom. A ring is catenary when all maximal chains of primes between two given primes have the same length. It is universally catenary when every finitely generated algebra over it is catenary.

**Problem.** Every Noetherian ring with a dualizing complex is universally catenary and has finite Krull dimension.

**How the definition helps.** A dualizing complex gives a dimension function: a shift attached to each prime p that changes by exactly one along each immediate specialization. Such a function forces all maximal chains between two primes to have the same length, and finite type algebras inherit a dualizing complex. So Nagata's Noetherian rings that are not catenary, and his Noetherian ring of infinite dimension, have no dualizing complex (our own remark). The work went into the existence of the dimension function.

**Paper or page:** [Dualizing, Lemma 47.17.4.](https://stacks.math.columbia.edu/tag/0A80), [Dualizing, Lemma 47.17.3.](https://stacks.math.columbia.edu/tag/0A7Z). It says: “Let A be a Noetherian ring which has a dualizing complex. Then A is universally catenary of finite dimension.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)

### Defining derived tensors by K-flat replacements makes them associative

**Remember:** Replace all three inputs once, then regroup the ordinary tensor product.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.KT. Level 4: research.

**Definition.** Define the derived tensor product of two complexes over a commutative ring as follows. Replace both by K-flat complexes through quasi-isomorphisms, which are maps that keep homology, and tensor them. A K-flat complex keeps zero homology under tensoring. One can also compute it by replacing just one factor.

**Problem.** The derived tensor product of complexes over a commutative ring is associative up to natural isomorphism.

**How the definition helps.** A tensor product of K-flat complexes is again K-flat, so both groupings reduce to ordinary tensor products of the same three replacements (our own). Ordinary tensor products are associative (our own). The work goes into the existence and uniqueness up to quasi-isomorphism of K-flat replacements (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.127.1](https://stacks.math.columbia.edu/tag/0FNQ). It says: “with tensor product given by derived tensor product and associativity and commutativity constraints”

**Sources:**

- [Nicolas Spaltenstein, Resolutions of unbounded complexes (1988)](https://www.numdam.org/item/CM_1988__65_2_121_0/)

### Defining K-flat complexes by a tensor test makes them survive base change

**Remember:** After changing rings, test on the same complexes viewed over the old ring.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G35. arXiv math.KT, math.AC. Level 4: research.

**Definition.** A complex K of R-modules is K-flat if K ⊗ M has zero homology for every complex M with zero homology. This extends to unbounded complexes the role of bounded-above complexes of flat modules.

**Problem.** For any map of commutative rings R → R′, if K is K-flat over R then K ⊗ R′ is K-flat over R′. The map R → R′ need not be flat.

**How the definition helps.** The test reduces to one identity: (K ⊗ R′) ⊗ M equals K ⊗ M for an R′-complex M (our own). M has zero homology as a complex of R-modules too, so K-flatness over R applies (our own). The work goes into proving that K-flat replacements exist and compute derived tensor products of unbounded complexes (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.59.3](https://stacks.math.columbia.edu/tag/06Y1). It says: “is a K-flat complex of R′-modules.”

**Sources:**

- [Nicolas Spaltenstein, Resolutions of unbounded complexes (1988)](https://www.numdam.org/item/CM_1988__65_2_121_0/)

### Décalage reduced modulo f is the Bockstein complex of cohomology

**Remember:** Modulo f, décalage turns cohomology groups with Bockstein maps into a complex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor in a ring A, and let M be a complex of A-modules with no f-torsion. Its décalage ηf M is the subcomplex of M\[1/f\] with degree i part {x ∈ fⁱMⁱ : dx ∈ fⁱ⁺¹Mⁱ⁺¹}. The Bockstein complex has terms Hⁱ(M ⊗ fⁱA/fⁱ⁺¹A), and its differential is the connecting map of 0 → fⁱ⁺¹A/fⁱ⁺²A → fⁱA/fⁱ⁺²A → fⁱA/fⁱ⁺¹A → 0.

**Problem.** For such M, there is a natural quasi-isomorphism from ηf M ⊗ A/f to the Bockstein complex. So Lη(f)M modulo f is determined by the cohomology groups of M/f and their Bockstein maps.

**How the definition helps.** An element of ηf M in degree i is fⁱ times an element whose differential is divisible by f. So modulo f it records exactly a cohomology class of M/f and its Bockstein. In general a complex has no model built from its cohomology groups, so M modulo f itself has no such description (our own). In Bhatt–Morrow–Scholze this is how the de Rham complex appears, with its differential as a Bockstein map on Hodge–Tate cohomology (our own summary).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7T). It says: “There is a canonical map of complexes η<sub>fM•</sub> ⊗<sub>A</sub> A/fA → H•(M•/f) which is a quasi-isomorphism where the right hand side is the complex”

**Sources:**

- [The Stacks Project, Tag 0F7T](https://stacks.math.columbia.edu/tag/0F7T)

### Décalage replaces each cohomology group by its quotient by f-torsion

**Remember:** Décalage keeps each cohomology group but throws away its f-torsion.

*Makes the theorem clean to state or prove.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor in a ring A, and let M be a complex of A-modules whose terms have no f-torsion. The décalage ηf M is the subcomplex of M\[1/f\] whose degree i part is the set of x in fⁱMⁱ with dx in fⁱ⁺¹Mⁱ⁺¹. Lη(f) is the functor on the derived category that applies ηf to a representative with torsion-free terms.

**Problem.** For such M and every i, multiplication by fⁱ is an isomorphism from Hⁱ(M)/Hⁱ(M)\[f\] onto Hⁱ(ηf M). Here Hⁱ(M)\[f\] is the set of classes killed by f.

**How the definition helps.** The divisibility conditions that define ηf M are exactly those that kill the f-torsion classes of cohomology. Its degree i cocycles are fⁱz for cocycles z of M, and fⁱz is a boundary exactly when fz is one (our own). Removing torsion from each cohomology group is not an operation on complexes, but ηf carries it out on complexes. Bhatt–Morrow–Scholze use Lη(μ), with μ = \[ε\] − 1 in Fontaine's ring Ainf, to remove unwanted μ-torsion from p-adic cohomology (our own summary).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7P). It says: “There is a canonical isomorphism fⁱ : Hⁱ(M•)/Hⁱ(M•)\[f\] → Hⁱ(η<sub>fM•</sub>) given by multiplication by fⁱ.”

**Sources:**

- [The Stacks Project, Tag 0F7P](https://stacks.math.columbia.edu/tag/0F7P)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Generation by the unit makes every thick subcategory a tensor ideal

**Remember:** If the unit builds everything, every thick subcategory absorbs tensor products.

*Rules out counterexamples. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80, 14A30. arXiv math.AC, math.CT. Level 4: research.

**Definition.** The unit R generates the perfect complexes over a commutative ring R. That is, every perfect complex lies in the smallest thick subcategory that contains R. A thick subcategory is a full triangulated subcategory closed under direct summands.

**Problem.** Let R be a commutative noetherian ring. The thick subcategories of perfect complexes over R correspond to the specialization closed subsets of Spec R. These are the subsets closed under passing to larger primes.

**How the definition helps.** Generation by the unit excludes thick subcategories that are not tensor ideals, such as ⟨𝒪⟩ on ℙ¹. For b in a thick subcategory 𝒞, the x with x⊗b in 𝒞 form a thick subcategory containing R, hence everything (our own argument). So Thomason's classification covers all thick subcategories, and for noetherian R its Thomason subsets are the specialization closed subsets. The quote shows the same generation for graded rings, and the real work stays in Neeman's proof that support detects membership.

**Paper or page:** [Classifying thick subcategories over a Koszul complex via the curved BGG correspondence](https://arxiv.org/abs/2502.13806), [Classifying thick subcategories over a Koszul complex via the curved BGG correspondence](https://arxiv.org/abs/2502.13806). It says: “In particular, if A is regular or concentrated in nonnegative degrees, then thick<sub>perf</sub>(A,0)(A)=perf(A,0).”

**Sources:**

- [Amnon Neeman, The chromatic tower for D(R), Topology 31 (1992) 519–532](https://doi.org/10.1016/0040-9383(92)90047-l)
- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)

### Requiring torsion-free terms makes décalage respect quasi-isomorphisms

**Remember:** Décalage needs torsion-free terms, or quasi-isomorphic inputs give different outputs.

*Rules out counterexamples.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor in a ring A. For a complex M with f-torsion-free terms, the décalage ηf M is the subcomplex of M\[1/f\] given in degree i by {x ∈ fⁱMⁱ : dx ∈ fⁱ⁺¹Mⁱ⁺¹}. The definition is made only for such complexes, and Lη(f) applies it to a torsion-free representative.

**Problem.** A quasi-isomorphism between complexes of f-torsion-free modules induces a quasi-isomorphism after décalage. Every complex is quasi-isomorphic to one with free terms, so Lη(f) is a well-defined functor on the whole derived category of A.

**How the definition helps.** The torsion-free condition excludes complexes on which the formula gives answers that depend on the representative. For A = Zₚ and f = p, the formula applied inside Z/p in degree 0 gives Z/p (our own example). The quasi-isomorphic complex Zₚ → Zₚ, multiplication by p in degrees −1 and 0, has décalage p⁻¹Zₚ → Zₚ, which is acyclic. With torsion-free terms, Hⁱ(ηf M) ≅ Hⁱ(M)/Hⁱ(M)\[f\], and invariance under quasi-isomorphism follows at once.

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7Q). It says: “If M• → N• is a quasi-isomorphism of complexes of f-torsion free A-modules, then the induced map η<sub>fM•</sub> → η<sub>fN•</sub> is a quasi-isomorphism too.”

**Sources:**

- [The Stacks Project, Tag 0F7Q](https://stacks.math.columbia.edu/tag/0F7Q)

### Tor amplitude survives base change

**Remember:** Test against modules over the new ring as modules over the old one.

*True by definition.* MSC 13D09 (Derived categories and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** A complex has Tor amplitude in an interval if its derived tensor product with every module has cohomology only in that interval. This tensor product uses a resolution by flat modules, whose tensor products preserve exact sequences. Equivalently, a complex of flat modules concentrated in that interval represents the original complex.

**Problem.** Let A → B be any ring map. If a complex K has Tor amplitude in \[a, b\] over A, then K ⊗ᴸ B has Tor amplitude in \[a, b\] over B.

**How the definition helps.** The test-module definition makes each test over the new ring a test over the old ring by associativity of derived tensor (our own). The comparison with bounded flat complexes carries the work of truncating a flat resolution at the endpoints (our own).

**Paper or page:** [More Algebra, Lemma 15.67.13.](https://stacks.math.columbia.edu/tag/066L). It says: “Then $K<sup>\\bullet</sup> \\otimes<sub>A</sub><sup>{\\mathbf{L}}</sup> B$ as a complex of $B$-modules has tor amplitude in $\[a, b\]$.”

**Sources:** none listed. No primary source with a working link was found.

### A Frobenius isomorphism forces torsion modules over regular rings to be injective

**Remember:** A Frobenius-fixed torsion module over a regular ring is a sum of E's.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13A35. arXiv math.AC. Level 4: research.

**Definition.** Let A be a regular local ring of prime characteristic p, with maximal ideal m and Frobenius map F(a) = aᵖ. The Frobenius functor sends a module M to its base change along F. A module is m-power torsion when each element is killed by a power of m.

**Problem.** Every m-power torsion A-module isomorphic to its Frobenius base change is a direct sum of copies of E. Here E is the injective hull of the residue field, the smallest injective module containing it.

**How the definition helps.** Over a regular ring Frobenius is flat by Kunz's theorem, so Frobenius base change is exact and sends E to E (our own summary). Every local cohomology module of A has the required isomorphism, by the Stacks lemma on Frobenius and local cohomology. So each of these modules that is m-power torsion is a direct sum of copies of E. The work went into the lemma, which follows from work of Huneke and Sharp.

**Paper or page:** [Local Cohomology, Lemma 51.18.2.](https://stacks.math.columbia.edu/tag/0EC3), [Local Cohomology, Lemma 51.19.2.](https://stacks.math.columbia.edu/tag/0EC6). It says: “Let M be a 𝔪-power torsion module such that M ⊗<sub>A, F</sub> A ≅ M. Then M is isomorphic to a direct sum of copies of the injective hull E of k.”

**Sources:**

- [C. Huneke and R. Y. Sharp, Bass numbers of local cohomology modules, Transactions of the American Mathematical Society 339 (1993)](https://doi.org/10.1090/S0002-9947-1993-1124167-6)
- [E. Kunz, Characterizations of regular local rings of characteristic p, American Journal of Mathematics 91 (1969)](https://doi.org/10.2307/2373351)

### Derived local cohomology changes rings

**Remember:** Changing rings changes each localization in the same way.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** For an ideal I = (f₁, …, fᵣ) of a ring A, the augmented Čech complex is the tensor product of the two-term complexes A → A<sub>f</sub>ᵢ. Tensoring with it computes RΓ<sub>Z</sub>, the derived sections supported on Z = V(I).

**Problem.** Let A → B be any ring map and let Y = V(IB). Then RΓ<sub>Z</sub>(K) ⊗ᴸ B = RΓ<sub>Y</sub>(K ⊗ᴸ B), naturally in K.

**How the definition helps.** With the Čech definition, the change of rings goes term by term, because the Čech complex of the fᵢ becomes the Čech complex of their images in B (our own). The work lies in comparing this complex with derived sections on the closed support, without a Noetherian hypothesis (our own).

**Paper or page:** [Dualizing, Lemma 47.9.3.](https://stacks.math.columbia.edu/tag/0ALZ). It says: “Then $$ R\\Gamma<sub>Z</sub>(K) \\otimes<sub>A</sub><sup>\\mathbf{L}</sup> B = R\\Gamma<sub>Y</sub>(K \\otimes<sub>A</sub><sup>\\mathbf{L}</sup> B) $$ functorially in $K \\in D(A)$.”

**Sources:** none listed. No primary source with a working link was found.

### Derived supports compose by intersection

**Remember:** Joining the generator lists intersects the closed supports.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** For each generator f of an ideal, form the two-term complex mapping the ring to the ring with f inverted. Tensor these complexes together to form the augmented Čech complex. Tensoring a module complex with this complex computes derived sections supported at primes containing the ideal.

**Problem.** Applying derived local cohomology for two finitely generated ideals in succession gives derived local cohomology for their sum.

**How the definition helps.** Tensoring the two Čech complexes simply joins their generator lists (our own). The joined list generates the sum of the ideals, whose containing primes belong to both closed sets (our own). The comparison with derived sections proves independence from the chosen generators (our own).

**Paper or page:** [Dualizing, Lemma 47.9.6.](https://stacks.math.columbia.edu/tag/0BJC). It says: “Then $Z \\cap Y = V(I + J)$ and $R\\Gamma<sub>Y</sub> \\circ R\\Gamma<sub>Z</sub> = R\\Gamma<sub>Y \\cap Z</sub>$”

**Sources:** none listed. No primary source with a working link was found.

### Derived torsion fixes torsion complexes

**Remember:** A right adjoint to a full inclusion fixes objects already inside.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** Call a complex I-torsion if each element of its cohomology is killed by some power of the ideal I. In the derived category, RΓ<sub>I</sub>(K) → K is the universal map from an I-torsion complex to K. That is, every map from an I-torsion complex to K factors uniquely through it.

**Problem.** Over a Noetherian ring, the map RΓ<sub>I</sub>(K) → K is an isomorphism whenever K is I-torsion.

**How the definition helps.** For a torsion complex, its identity map already has the required factorization property (our own). Uniqueness identifies the derived local cohomology map with that identity (our own). Over a Noetherian ring, the comparison theorem shows that deriving ordinary module torsion gives this same construction (our own).

**Paper or page:** [Dualizing, Lemma 47.10.1.](https://stacks.math.columbia.edu/tag/0955). It says: “the adjunction $R\\Gamma<sub>I</sub>(K) \\to K$ is an isomorphism for $K \\in D\_{I<sup>\\infty\\text{-torsion}}</sup>(A)$”

**Sources:** none listed. No primary source with a working link was found.

### Leibniz operators force torsion modules over power series rings to be injective

**Remember:** Derivations acting on a torsion module make it a sum of copies of E.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13N10. arXiv math.AC. Level 4: research.

**Definition.** Let A = k\[\[x₁, …, xₙ\]\] with k a field of characteristic 0, and let m be its maximal ideal. Take an m-power torsion A-module M, one in which every element is killed by a power of m. Give M additive operators D₁, …, Dₙ with the Leibniz rule Dᵢ(fz) = ∂ᵢ(f)z + fDᵢ(z), where ∂ᵢ is the partial derivative. The operators need not commute, so M need not be a full module over the ring of differential operators.

**Problem.** Every m-power torsion A-module with such Leibniz operators is a direct sum of copies of E. Here E is the injective hull of k, the smallest injective module containing it.

**How the definition helps.** Leibniz operators are easy to find on local cohomology, and the lemma turns them into injectivity with no resolution needed (our own summary). Each derivation of A acts by the Leibniz rule on the local cohomology of A with support in any closed set. So each of these modules that is m-power torsion is a direct sum of copies of E. In our own words, this is an analogue of Kashiwara's theorem for D-modules supported at a point, and a special case of Lyubeznik's theorem.

**Paper or page:** [Local Cohomology, Lemma 51.18.1.](https://stacks.math.columbia.edu/tag/0EC2), [Local Cohomology, Lemma 51.19.1.](https://stacks.math.columbia.edu/tag/0EC5). It says: “Then M is isomorphic to a direct sum of copies of the injective hull E of k.”

**Sources:**

- [G. Lyubeznik, Finiteness properties of local cohomology modules (an application of D-modules to commutative algebra), Inventiones Mathematicae 113 (1993)](https://doi.org/10.1007/BF01244301)

### Normalizing the dualizing complex makes local duality hold without a shift

**Remember:** Normalize so that RHom(κ, ω) is κ; then duality needs no shift.

*Makes the theorem clean to state or prove.* MSC 13D45 (Local cohomology and commutative rings), 14B15. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A dualizing complex ω• for a Noetherian ring A is a bounded complex with finitely generated cohomology and finite injective dimension. Also, A → RHom(ω•, ω•) is an isomorphism, where RHom is the derived Hom. Over a local ring with residue field κ, RHom(κ, ω•) is κ shifted by some integer, and ω• is normalized when the shift is zero.

**Problem.** Let A be a Noetherian local ring with normalized dualizing complex ω•, and E an injective hull of its residue field. For every finitely generated M, Hom(Hⁱₘ(M), E) is the completion of Ext⁻ⁱ(M, ω•), where Hⁱₘ is local cohomology at m.

**How the definition helps.** The normalization fixes the degree at the residue field, so for finite-length modules RHom(N, ω•) is the Matlis dual Hom(N, E) placed in degree zero. Every degree in local duality is then fixed by that one choice. The work went into showing that the local cohomology of ω• is E in degree zero, and into local duality for complexes. For finitely generated M the derived completion is the usual completion (our own step).

**Paper or page:** [Dualizing, Lemma 47.15.12.](https://stacks.math.columbia.edu/tag/0A7L), [Dualizing, Lemma 47.16.4.](https://stacks.math.columbia.edu/tag/0A7Q), [Dualizing, Theorem 47.18.3.](https://stacks.math.columbia.edu/tag/0A84). It says: “Then there exists a functorial isomorphism RHom<sub>A</sub>(N, ω<sub>A•</sub>) = Hom<sub>A</sub>(N, E)\[0\] for N running through the finite length A-modules.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)
- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)

### Small-dimensional ideals rule out Hartshorne's non-cofinite local cohomology

**Remember:** If R/a has dimension at most one, local cohomology is cofinite.

*Rules out counterexamples. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13E05. arXiv math.AC. Level 4: research.

**Definition.** Let a be an ideal of a Noetherian ring R. Hartshorne called a module N a-cofinite when its support lies in V(a), the primes containing a, and every Extⁱ(R/a, N) is finitely generated. Local cohomology Hⁱₐ is the i-th derived functor of taking elements killed by a power of a. The extra condition is that R/a has Krull dimension at most 1.

**Problem.** If dim R/a ≤ 1, then for every finitely generated module M, every local cohomology module Hⁱₐ(M) is a-cofinite.

**How the definition helps.** The dimension bound removes the kind of example Hartshorne found, so cofiniteness holds in every degree with no exceptions. Hartshorne's example lives over a power series ring in four variables, with R/a of dimension 2 (our own summary). There a local cohomology module in degree 2 is not a-cofinite. Bahmanpour and Naghipour proved the case dim R/a ≤ 1 for all Noetherian rings, after Melkersson's work on related cases.

**Paper or page:** [A characterization result of cofinite local cohomology modules](https://arxiv.org/abs/2305.10202). It says: “(b) dim R/a ≤ 1. See \[BN\]. Then H<sup>i<sub>a</sub></sup>(M) is a–cofinite for all i ≥ 0.”

**Sources:**

- [R. Hartshorne, Affine duality and cofiniteness, Inventiones Mathematicae 9 (1970) 145–164](https://doi.org/10.1007/BF01404554)
- [K. Bahmanpour and R. Naghipour, Cofiniteness of local cohomology modules for ideals of small dimension, Journal of Algebra 321 (2009)](https://doi.org/10.1016/j.jalgebra.2008.12.020)
- [L. Melkersson, Modules cofinite with respect to an ideal, Journal of Algebra 285 (2005)](https://doi.org/10.1016/j.jalgebra.2004.08.037)

### Torsion and completion as adjoints make torsion and complete complexes equivalent

**Remember:** Torsion sees only the completion, and completion sees only the torsion.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D09, 13B35. arXiv math.AC. Level 4: research.

**Definition.** Let a be a finitely generated ideal of a ring A. Derived local cohomology RΓₐ is the right adjoint of the inclusion of complexes whose cohomology is a-power torsion. A complex is derived a-complete when RHom(A\[1/f\], K) = 0 for each f in a. Derived completion Λ is the left adjoint of the inclusion of derived a-complete complexes.

**Problem.** RΓₐ and Λ are inverse equivalences between the a-power torsion complexes and the derived a-complete complexes. This is Greenlees–May duality.

**How the definition helps.** The adjoint definitions give for free that RΓₐ fixes torsion complexes and Λ fixes complete ones. So the identities RΓₐ(ΛK) = RΓₐ(K) and Λ(RΓₐK) = ΛK give the equivalence in one line. With the older definitions by Čech and Koszul complexes, the fixed-point facts need their own proofs (our own remark). The work went into the two identities.

**Paper or page:** [Dualizing, Lemma 47.12.1.](https://stacks.math.columbia.edu/tag/0A6W), [Dualizing, Proposition 47.12.2.](https://stacks.math.columbia.edu/tag/0A6X). It says: “For an object K in D(A) we have RΓ<sub>Z</sub>(K<sup>∧</sup>) = RΓ<sub>Z</sub>(K) and (RΓ<sub>Z</sub>(K))<sup>∧</sup> = K<sup>∧</sup> in D(A).”

**Sources:**

- [J. P. C. Greenlees and J. P. May, Derived functors of I-adic completion and local homology, Journal of Algebra 149 (1992)](https://doi.org/10.1016/0021-8693(92)90026-I)
- [M. Porta, L. Shaul and A. Yekutieli, On the homology of completion and torsion, Algebras and Representation Theory 17 (2014)](https://doi.org/10.1007/s10468-012-9385-8)

### Counting generators up to symmetry makes infinite polynomial rings Noetherian

**Remember:** Count generators together with all their translates under variable permutations.

*Makes the theorem clean to state or prove.* MSC 13E05 (Commutative Noetherian rings and modules), 13A50. arXiv math.RT, math.AC. Level 4: research.

**Definition.** A group of permutations of the variables acts on the polynomial ring. The ring is Noetherian up to that action if each invariant ideal is generated by the translates of finitely many polynomials.

**Problem.** Let k be a commutative Noetherian ring and let a group act on an infinite set of variables. If the action is highly homogeneous, the polynomial ring is Noetherian up to that action. Highly homogeneous means that any finite set of variables can be moved onto any other set of the same size.

**How the definition helps.** Counting generators up to symmetry lets a finite generation theorem hold for a ring in infinitely many variables. In our own example, the ideal generated by all variables needs infinitely many ordinary generators but just one orbit of generators. Proving finite generation for every invariant ideal stays hard.

**Paper or page:** [Noetherianity of polynomial rings up to group actions](https://arxiv.org/abs/2502.14306v2). It says: “We show that k\[S\] is Noetherian up to highly homogenous actions of groups.”

**Sources:**

- [Liping Li, Yinhe Peng, Zhengjun Yuan, Noetherianity of polynomial rings up to group actions, arXiv:2502.14306 (2025)](https://arxiv.org/abs/2502.14306v2)

### With the Noetherian Bézout definition, ℤ is constructively a principal ideal domain

**Remember:** Ask only finitely generated ideals to be principal, and let Noetherianity do the rest.

*Makes the theorem clean to state or prove.* MSC 13F10 (Principal ideal rings), 13E05, 03F65. arXiv math.AC, math.LO. Level 4: research.

**Definition.** Lombardi and Quitté define a principal ideal domain as an integral domain that is Bézout and Noetherian. Bézout means that every finitely generated ideal is principal. They do not require that every ideal be principal.

**Problem.** In constructive mathematics, ℤ is Noetherian and Bézout, so it is a principal ideal domain in this sense. The classical statement that every ideal of ℤ is principal is equivalent to excluded middle.

**How the definition helps.** The new definition drops the one requirement that needs excluded middle. Our own illustration: for a proposition P, the ideal {n \| n = 0, or P holds} has no generator that you can compute without deciding P. Classically the two definitions agree, so nothing is lost. The real work is then to develop the theory of principal ideal domains from the Noetherian Bézout definition.

**nLab:** [noetherian ring](https://ncatlab.org/nlab/show/noetherian+ring), [principal ideal domain](https://ncatlab.org/nlab/show/principal+ideal+domain). It says: “the ring of integers is both Noetherian and Bézout, but it is a principal ideal domain if and only if excluded middle holds.”

**Sources:**

- [H. Lombardi, C. Quitté, Commutative Algebra: Constructive Methods (Finite projective modules), Springer 2015](https://doi.org/10.1007/978-94-017-9944-7)

### Modified power series over zero-dimensional rings stay flat

**Remember:** Keep each power series inside one Artinian piece, and flatness returns.

*Rules out counterexamples. Confidence: medium.* MSC 13F25 (Formal power series rings), 13C11, 13C15. arXiv math.AC, math.RA. Level 4: research.

**Definition.** Let R be a ring of Krull dimension 0 that is integral over an Artinian subring R₀, so R is a directed union of Artinian subrings Rα. The modified power series ring 𝓕⟦X₁, …, Xₙ⟧ contains only the power series whose coefficients all lie in one Rα.

**Problem.** The modified ring 𝓕⟦X₁, …, Xₙ⟧ is faithfully flat over R and has Krull dimension n, which is dim R + n. Over a non-Noetherian ring, the full power series ring can fail to be flat and can have infinite dimension.

**How the definition helps.** Each power series lives over an Artinian ring, where power series behave well, so good properties pass to the union (our own reading). Theorem 3.4 gives faithful flatness, and Theorem 4.6 gives the dimension. In our own reading, the hard part is the dimension count, which uses that R is integral over R₀.

**Paper or page:** [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1), [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1). It says: “A power series ring over non-Noetherian rings can fail to be flat over the base ring, and its dimension can be infinite, even when the dimension of the base ring is finite.”

**Sources:**

- [M. Richard Sayanagi, Power Series Rings over Zero-Dimensional Rings, arXiv:2510.07496 (2025)](https://arxiv.org/abs/2510.07496v1)

### A δ-structure makes Frobenius kill all p-torsion

**Remember:** If pα = 0, then φ(α) = 0; so 𝔽ₚ has no δ-structure.

*Rules out counterexamples.* MSC 13F35 (Witt vectors and related rings). arXiv math.NT, math.AC. Level 4: research.

**Definition.** A δ-ring is a ring A with an operation δ. Its rules make φ(x) = xᵖ + pδ(x) a ring map that lifts Frobenius modulo p. The structure is the operation δ, not only the map φ.

**Problem.** In a δ-ring, every element α with pα = 0 satisfies φ(α) = 0. So a perfect δ-ring, where φ is bijective, has no p-torsion, and no nonzero ring of characteristic p carries a δ-structure.

**How the definition helps.** The product rule for δ ties δ(pα) to αᵖ, and this forces φ(α) to vanish. Here δ(p) = 1 − pᵖ⁻¹, and expanding 0 = δ(pα) gives φ(α) = pᵖ⁻¹αᵖ = 0 (our own computation). The quoted lemma is the L-typical version, where L is a finite extension of the p-adic numbers; π = p in the classical case. On 𝔽ₚ the identity lifts Frobenius, but no δ-structure gives it. Every element is p-torsion, so φ(1) would be 0, not 1 (our own example).

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let A be a δ<sub>L</sub>-algebra. Then if α ∈ A is π-torsion, we have φ(α) = 0. In particular, if A is perfect then A is π-torsion free.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Marks, Prismatic F-crystals and Lubin-Tate (φq, Γ)-modules, arXiv preprint 2303.07620 (2023)](https://arxiv.org/abs/2303.07620)

### Distinguished elements make the prism condition depend only on the ideal

**Remember:** Distinguished means δ(d) is a unit, equivalently p lies in (d, φ(d)).

*Makes the theorem clean to state or prove.* MSC 13F35 (Witt vectors and related rings), 14F30. arXiv math.NT, math.AG. Level 4: research.

**Definition.** An element d of a δ-ring A is distinguished when δ(d) is a unit. Rad(A) is the Jacobson radical, the intersection of all maximal ideals.

**Problem.** Let A be a δ-ring with p in its Jacobson radical, and let d be in the Jacobson radical. Then d is distinguished exactly when p lies in the ideal (d, φ(d)), and also exactly when the ideal (d) contains some distinguished element.

**How the definition helps.** The condition p ∈ (d, φ(d)) depends only on the ideal (d), so the unit condition on δ(d) does too. This is why a prism can be defined by an ideal I with p ∈ I + φ(I)A, without choosing a generator. Modulo d, φ(d) is pδ(d), so p ∈ (d, pδ(d)), and the radical hypotheses turn this into δ(d) being a unit (our own sketch). The quoted lemma is the L-typical form, with π = p in the classical case.

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let A be a δ<sub>L</sub>-algebra, and let d∈Rad(A). The following are equivalent: (i) d is distinguished. (ii) The ideal (d) contains a distinguished element. (iii) π ∈ (d<sup>q</sup>,φ(d)). (iv) π ∈ (d,φ(d)).”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Marks, Prismatic F-crystals and Lubin-Tate (φq, Γ)-modules, arXiv preprint 2303.07620 (2023)](https://arxiv.org/abs/2303.07620)

### Verschiebung substitution is injective

**Remember:** Substitution moves each coefficient to a distinct degree and loses none of them.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 19D50. arXiv math.KT. Level 4: research.

**Definition.** The additive group of length-m big Witt vectors has a model using series with constant term one, modulo tᵐ⁺¹. Witt addition multiplies series. For positive integers m and n, the Verschiebung to length nm substitutes tⁿ for t.

**Problem.** The Verschiebung is injective over every commutative ring. For a perfect field k of positive characteristic, the relative K-groups of k\[x\]/(xⁿ) for the ideal (x) vanish in positive even degrees. Perfect means that raising elements to the characteristic power is bijective.

**How the definition helps.** Substitution preserves each input coefficient at a distinct degree within the longer truncation (our own). This proves injectivity directly in the series model, once it has been identified with Witt coordinates (our own). Hesselholt and Madsen’s exact sequence identifies each positive even relative K-group with such a kernel (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “In components, a Witt vector is an infinite sequence of elements of a given commutative ring k.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Koszul Euler characteristics turn multiplicity into a test for Cohen–Macaulayness

**Remember:** Multiplicity equals colength exactly when the parameters form a regular sequence.

*True by definition. Confidence: medium.* MSC 13H15 (Multiplicity theory and related topics), 13D02, 13H10. arXiv math.AC. Level 4: research.

**Definition.** Let R be a Noetherian local ring of dimension d. A system of parameters x is a list of d elements of the maximal ideal such that R/(x) has finite length. Serre showed that the Hilbert–Samuel multiplicity e(x; R) equals the alternating sum of the lengths of the Koszul homology modules Hᵢ(x; R).

**Problem.** For every system of parameters, e(x; R) ≤ length R/(x), with equality if and only if R is Cohen–Macaulay.

**How the definition helps.** With the Koszul formula, length R/(x) − e(x; R) is the alternating sum of the higher Koszul homology lengths, starting with length H₁ (our own). Serre showed this sum is never negative and is zero only when H₁ = 0, that is, when x is a regular sequence (our own). The Hilbert–Samuel definition alone gives no such formula. The work goes into Serre's identification of the two multiplicities.

**Paper or page:** [More Algebra, Lemma 15.126.7](https://stacks.math.columbia.edu/tag/0BWW), [Intersection, Lemma 43.16.2](https://stacks.math.columbia.edu/tag/0B03). It says: “If eI/d! is the leading coefficient of the numerical polynomial n ↦ lengthR(R/Iⁿ⁺¹), then eI ≤ lengthR(R/I).”

**Sources:**

- [J.-P. Serre, Algèbre locale, multiplicités, Lecture Notes in Mathematics 11, Springer, 1965 (third edition 1975).](https://doi.org/10.1007/978-3-540-37123-6)

### For absolute-valued Huber rings, topological simplicity means the completion is a field

**Remember:** A dense ideal contains elements close to one.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 13A18, 14G22. arXiv math.NT, math.AC. Level 4: research.

**Definition.** A topological ring is topologically simple if its only closed ideals are 0 and the whole ring. For a Hausdorff ring, this means every nonzero ideal is dense. A Huber ring has an open subring whose topology is the I-adic topology for a finitely generated ideal I.

**Problem.** If the completion of a topological ring A is a field, then A is topologically simple. The converse holds when A is a Huber ring whose topology comes from an absolute value.

**How the definition helps.** Topological simplicity is the condition on A that a field completion forces, so one direction is nearly immediate. A nonzero closed ideal of A has a nonzero closure in the completion, which is then everything, so the ideal is all of A (our own sketch). For the converse, a dense ideal contains an element close to 1, which is invertible by a geometric series (our own sketch). The absolute value then makes every nonzero element of the completion invertible (our own sketch).

**Paper or page:** [Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras](https://arxiv.org/abs/2510.22678v2). It says: “If the completion of A is a field, then A is topologically simple. If A is a Huber ring and its topology is defined by an absolute value, then the converse is also true.”

**Sources:**

- [Dimitri Dine, Jack J Garzella, Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras, arXiv:2510.22678v2 (2025)](https://arxiv.org/abs/2510.22678v2)

### A p-derivation row gives a Jacobian criterion in mixed characteristic

**Remember:** A p-derivation is the missing derivative in the direction of p.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13N15 (Derivations and commutative rings), 13H05, 14B05. arXiv math.AC, math.AG. Level 4: research.

**Definition.** Let p be a prime that is not a zero divisor in the ring. In our own summary, a p-derivation is a map δ such that x ↦ xᵖ + pδ(x) is a ring map. The paper builds a mixed Jacobian matrix of f₁, …, fₐ. In the abstract's words, it includes a row coming from the values of a p-derivation.

**Problem.** Let R = T/(f₁, …, fₐ), where the ideal has pure height h and T lies over an unramified base with algebraically closed residue field. For a prime 𝔭 of R that contains p, the mixed Jacobian matrix over κ(𝔭) has rank at most h, with equality exactly when R𝔭 is regular.

**How the definition helps.** The p-derivation acts as a derivative with respect to p, so it fills the missing row (our own reading). The classical Jacobian criterion fails at primes that contain p, because p is a direction with no derivative. Our own example is ℤₚ\[x\]/(x² − p), which is regular although the derivative 2x lies in the maximal ideal (p, x). At primes that do not contain p, the classical matrix is enough.

**Paper or page:** [A Jacobian criterion for nonsingularity in mixed characteristic](https://arxiv.org/abs/2106.01996v2), [A Jacobian criterion for nonsingularity in mixed characteristic](https://arxiv.org/abs/2106.01996v2). It says: “Let 𝔭 be a prime ideal of R with p∈𝔭. Then, the mixed Jacobian matrix J̃(f) considered in κ(𝔭) has rank at most h, and equality holds if and only if R𝔭 is regular.”

**Sources:**

- [Melvin Hochster, Jack Jeffries, A Jacobian criterion for nonsingularity in mixed characteristic, arXiv:2106.01996 (2021)](https://arxiv.org/abs/2106.01996v2)

### Degree-compatible orders make two kinds of confluence agree

**Remember:** Order by degree, and the weaker confluence is already enough.

*Rules out counterexamples. Confidence: medium.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13F25, 68Q42. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A rewriting system reduces power series step by step, replacing leading terms with the help of a standard basis of an ideal. Topological confluence asks that any two reductions of a series can be continued to results that are arbitrarily close (our own paraphrase). Infinitary confluence asks that they can be joined exactly by possibly infinite, convergent reduction sequences (our own paraphrase). The abstract says that in general the second is strictly stronger.

**Problem.** For formal power series with a monomial order compatible with degree, the rewriting system of a standard basis is infinitarily confluent exactly when it is topologically confluent.

**How the definition helps.** A degree-compatible order pushes terms to higher degree, so reductions converge where series are close when they agree up to a high degree (our own gloss). Ideals of a formal power series ring are closed in this topology, so limits of reductions stay in the ideal. The paper uses this closure to prove the equivalence, so one can check the weaker notion and get the stronger one. In general the two notions differ, and the paper gives explicit examples.

**Paper or page:** [Topological closure of formal power series ideals and application to topological rewriting theory](https://arxiv.org/abs/2402.05511v3). It says: “Using topological closure of ideals, we finally show that in the context of rewriting theory on commutative formal power series, infinitary and topological confluences are equivalent when the monomial order considered is compatible with the degree.”

**Sources:**

- [Cyrille Chenavier, Thomas Cluzeau, Adya Musson-Leymarie, Topological closure of formal power series ideals and application to topological rewriting theory, arXiv:2402.05511 (2024)](https://arxiv.org/abs/2402.05511v3)
