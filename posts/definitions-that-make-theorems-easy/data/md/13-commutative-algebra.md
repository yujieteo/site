### Cancellation makes prime elements irreducible

**Remember:** When a prime divides one of its factors, the other factor is a unit.

*Rules out counterexamples.* MSC 13A05 (Divisibility and factorizations in commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with identity in which nonzero elements have nonzero products. A nonzero nonunit p is prime if, for all a,b, p dividing ab implies p divides a or b. It is irreducible if every factorization p = ab has an invertible factor.

**Problem.** In an integral domain, every prime element is irreducible.

**How the definition helps.** Cancellation makes the other factor invertible (our own). If p = ab, primality lets us exchange factors so that a = pc for some c (our own). Cancelling p in p = pcb gives cb = 1 (our own). Modulo 6, the prime element 2 equals 2 × 4 with both factors nonunits, since cancellation fails (our own).

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

**How the definition helps.** At a root a, the factor theorem gives f(X) = (X − a)g(X) (our own). Every other root b satisfies (b − a)g(b) = 0, so the domain condition forces g(b) = 0 (our own). Induction on degree gives the bound, starting with a nonzero constant (our own). Modulo 8, zero divisors allow all four odd residues to solve X² − 1 = 0 (our own).

**Wikipedia:** [Frobenius endomorphism](https://en.wikipedia.org/wiki/Frobenius_endomorphism). It says: “if R is not a domain, then Xᵖ − X may have more than p roots”

**Paper or page:** [Polynomial Factor Theorem](https://proofwiki.org/wiki/Polynomial_Factor_Theorem). It says: “ξ ∈ K: P(ξ) = 0 ⇔ P(x) = (x − ξ) Q(x)”

**Sources:** none listed. No primary source with a working link was found.

### Monic divisors make long division work

**Remember:** A leading coefficient of one needs no division.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** A polynomial is monic if its leading coefficient is 1. Over a field every nonzero leading coefficient has an inverse, but over a general ring it may not.

**Problem.** Over a nonzero commutative ring with 1, division by a monic polynomial gives a unique quotient and a remainder of lower degree or zero.

**How the definition helps.** A monic divisor lets each subtraction cancel the leading term without division of coefficients (our own). Repeating lowers the degree until the remainder has the required size (our own). Any nonzero difference of quotients times the divisor has degree at least the divisor’s degree, unlike a difference of remainders (our own). Dividing x by 2x in ℤ\[x\] would instead require a quotient with coefficient 1/2 (our own).

**nLab:** [monic polynomial](https://ncatlab.org/nlab/show/monic+polynomial). It says: “whose highest order coefficient is 1.”

**Sources:** none listed. No primary source with a working link was found.

### Domains embed in fraction fields

**Remember:** No nonzero denominator becomes zero during multiplication.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 and no pair of nonzero elements whose product is zero. Form fractions a/b with b ≠ 0. Treat a/b and c/d as equal when ad = bc.

**Problem.** A nonzero commutative ring with 1 embeds in a field exactly when it is an integral domain.

**How the definition helps.** The domain condition keeps denominator products nonzero and makes cross multiplication transitive by cancellation (our own). Ordinary fraction arithmetic gives a field where a/1 represents a and b/a inverts each nonzero a/b (our own). Conversely, an embedding preserves nonzero elements and their products (our own). Thus zero divisors such as 2 and 3 modulo 6 prevent an embedding (our own).

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

**Definition.** A formal power series over a commutative ring R is a sequence of coefficients aₙ ∈ R indexed by integers n ≥ 0. Write it as ∑ aₙXⁿ, with X an indeterminate. Add coefficients termwise and compute each product coefficient by summing aᵢbⱼ over i + j = n.

**Problem.** Generating functions can be multiplied, inverted, differentiated and composed as formal power series, where these operations are defined. The resulting identities hold even when the series has radius of convergence zero, such as Σ n! Xⁿ.

**How the definition helps.** Each formal identity means equality at every coefficient, which needs no numerical value for X. Each product coefficient uses a finite sum, and differentiation acts term by term (our own). A unit constant term permits recursive inversion, and a zero inner constant term permits composition coefficient by coefficient (our own).

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

**How the definition helps.** The maps r ↦ er and r ↦ (1 − e)r preserve ring operations because e and 1 − e are idempotent (our own). Together they map R to eR × (1 − e)R, with inverse (x,y) ↦ x + y since e(1 − e) = 0 (our own). Nontriviality makes both factors nonzero (our own). Conversely, (1,0) is a nontrivial idempotent in any product of two nonzero rings (our own).

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

**Definition.** A ring with identity has an element 1 satisfying 1x = x1 = x for every x. An ideal is proper if it differs from the whole ring, equivalently if it omits 1.

**Problem.** Krull's theorem (1929) says that every nonzero ring has at least one maximal ideal. A maximal ideal is a proper ideal that no larger proper ideal contains.

**How the definition helps.** A nonempty chain of proper ideals has a union that is an ideal and still omits 1. The zero ideal is proper in a nonzero ring, so Zorn’s lemma gives a maximal ideal. With zero multiplication on ℚ, ideals are additive subgroups, and none is maximal proper (our own).

**Wikipedia:** [Krull's theorem](https://en.wikipedia.org/wiki/Krull%27s_theorem), [Ring (mathematics)](https://en.wikipedia.org/wiki/Ring_%28mathematics%29). It says: “a union of ideals not containing 1 does not contain 1, so J ∈ S. By Zorn's lemma, S has a maximal element M.”

**Sources:**

- [W. Krull, Idealtheorie in Ringen ohne Endlichkeitsbedingungen, Mathematische Annalen 101 (1929) 729–744](https://doi.org/10.1007/BF01454872)
- [W. Hodges, Krull implies Zorn, Journal of the London Mathematical Society (2) 19 (1979) 285–287](https://doi.org/10.1112/jlms/s2-19.2.285)

### Coprime ideals give the Chinese remainder theorem in any ring

**Remember:** Coprime ideals are ideals with elements that add up to 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 11A07. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Two two-sided ideals I and J in a ring with identity are comaximal if I + J = R. Equivalently, some i ∈ I and j ∈ J satisfy i + j = 1.

**Problem.** Let I₁, …, Iₖ be pairwise comaximal two-sided ideals in a ring R with identity. The residue map induces an isomorphism R/(I₁ ∩ … ∩ Iₖ) ≅ R/I₁ × … × R/Iₖ.

**How the definition helps.** For each i and each j ≠ i, comaximality gives an element of Iⱼ equal to 1 modulo Iᵢ (our own). Their product is 1 modulo Iᵢ and zero modulo every other ideal (our own). Multiplying these products by the desired representatives and summing realizes any tuple (our own). The residue map has kernel equal to the intersection (our own).

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

**Remember:** Maximality makes each nonzero class generate one.

*Rules out counterexamples. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring R with identity, M is maximal if M ≠ R and no ideal lies strictly between M and R. A field is a nonzero commutative ring with identity in which every nonzero element has an inverse.

**Problem.** An ideal M of a commutative ring R with identity is maximal exactly when R/M is a field.

**How the definition helps.** Properness excludes R/R, the zero ring (our own). For a proper M, maximality means M + Ra = R for every a outside M (our own). This says precisely that each such a has a multiple congruent to 1 modulo M, giving every nonzero class an inverse (our own).

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

**How the definition helps.** Reducing a nilpotent polynomial modulo any prime gives a nilpotent polynomial over a domain, hence zero (our own). Each coefficient therefore lies in every prime, so the nilradical theorem makes it nilpotent (our own). Conversely, a polynomial with nilpotent coefficients is a finite sum of commuting nilpotent terms, hence nilpotent (our own).

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

**How the definition helps.** If ab ∈ M and a ∉ M, maximality gives M + Ra = R (our own). Write 1 = m + ra with m ∈ M and multiply by b to obtain b ∈ M (our own). Without unity, 4ℤ is maximal in 2ℤ by its additive index two (our own). Yet 2·2 belongs to 4ℤ and 2 does not (our own).

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

**Definition.** Let A ⊆ B be commutative rings with common identity. An element of B is integral over A if it lies in an A-subalgebra finitely generated as an A-module. An extension is integral if every element is integral over the base.

**Problem.** If B is integral over A and C is integral over B, then C is integral over A.

**How the definition helps.** By the equivalent monic polynomial criterion, each x ∈ C satisfies a monic equation with finitely many coefficients in B (our own). Put those coefficients in finite A-subalgebras of B and multiply their module generators to span a common finite A-algebra D (our own). The monic equation reduces powers of x, so finitely many powers span D\[x\] over D (our own). Multiplying the two sets of generators shows D\[x\] is finite over A (our own).

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

**Remember:** Give zero the lowest degree, and let it absorb addition of degrees.

*Makes the theorem clean to state or prove.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The degree of a nonzero polynomial is the largest exponent with nonzero coefficient. Give the zero polynomial degree −∞, below every integer. Define a + (−∞) = (−∞) + a = −∞ even when a = −∞.

**Problem.** Over an integral domain, all polynomials f and g satisfy deg(fg) = deg f + deg g. They also satisfy deg(f + g) ≤ max(deg f, deg g).

**How the definition helps.** The absorbing addition rule gives the product formula when either factor vanishes (our own). Otherwise the leading coefficients have nonzero product in a domain (our own). Addition creates no higher term, and complete cancellation gives degree −∞, so the bound also covers a zero sum (our own).

**Wikipedia:** [Degree of a polynomial](https://en.wikipedia.org/wiki/Degree_of_a_polynomial). It says: “The 0 polynomial is declared to have degree −∞ so that exceptions are not needed for various reasonable results.”

**Sources:**

- [S. Axler, Linear Algebra Done Right, Springer (1997), p. 64](https://doi.org/10.1007/b97662)

### Primitive polynomials make Gauss's lemma true

**Remember:** A primitive polynomial has no common factor left to pull out.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integer polynomial is primitive if the greatest common divisor of its coefficients is 1.

**Problem.** The product of two primitive polynomials is primitive. A primitive polynomial is irreducible over ℤ if and only if it is irreducible over ℚ.

**How the definition helps.** For each prime p, both primitive factors remain nonzero modulo p, so their product remains nonzero over the field ℤ/pℤ (our own). Thus no prime divides every product coefficient (our own). Clearing denominators in a rational factorization and taking primitive parts recovers an integer factorization up to sign by the product result (our own). Without primitivity, 2x + 2 factors as 2(x + 1) only over ℤ with both factors nonunits (our own).

**Wikipedia:** [Gauss's lemma (polynomials)](https://en.wikipedia.org/wiki/Gauss%27s_lemma_%28polynomials%29). It says: “A non-constant polynomial in Z\[X\] is irreducible in Z\[X\] if and only if it is both irreducible in Q\[X\] and primitive in Z\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### A correction factor makes localization work with zero divisors

**Remember:** Fractions are equal if their cross difference dies after multiplying by some t.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicative set in a commutative ring R: it contains 1 and is closed under products. The localization S⁻¹R is the set of fractions r/s with s in S. Two fractions r₁/s₁ and r₂/s₂ are equal when t(s₁r₂ − s₂r₁) = 0 for some t in S.

**Problem.** With this rule, S⁻¹R is a ring in which every element of S is invertible. Every ring map from R that sends S to units factors through it in exactly one way.

**How the definition helps.** The extra factor identifies every a/1 with zero whenever some denominator kills a. Modulo 6 with S = {1,2,4}, ordinary cross multiplication relates 3/1 to 0/2 and 0/2 to 0/1 but misses the endpoints (our own). The corrected relation permits ordinary fraction arithmetic, with 1/s inverse to s/1 (our own). Any map f inverting S must send r/s to f(r)f(s)⁻¹, and cancelling f(t) shows this respects equality (our own).

**Wikipedia:** [Localization (commutative algebra)](https://en.wikipedia.org/wiki/Localization_%28commutative_algebra%29). It says: “The reason for the t is to handle cases such as the above a/1 = 0/1, where s₁r₂ − s₂r₁ is nonzero even though the fractions should be regarded as equal.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ℚ as a localization of ℤ embeds it in characteristic-zero fields

**Remember:** Every nonzero integer is already invertible in a characteristic zero field.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define ℚ as the localization of ℤ at all nonzero integers. Its canonical map inverts those integers, and every unital map from ℤ inverting them extends uniquely to ℚ.

**Problem.** Every field of characteristic zero has exactly one ring homomorphism from ℚ that sends 1 to 1, and it is injective. Characteristic zero means that n · 1 ≠ 0 for every positive integer n.

**How the definition helps.** The unique unital integer map sends n to n·1, nonzero for every nonzero n in characteristic zero (our own). These images are units, so localization gives a unique extension (our own). Its kernel is a proper ideal of the field ℚ, hence zero (our own).

**nLab:** [rational number](https://ncatlab.org/nlab/show/rational+number). It says: “is the field of fractions of the commutative ring of integers, ℤ”

**Sources:** none listed. No primary source with a working link was found.

### Inverting every nonzero element makes fraction fields the smallest extensions

**Remember:** A map that keeps denominators nonzero already determines what fractions mean.

*True by definition.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A fraction field of a domain D is a field containing D in which every element is a quotient of two elements of D. Each denominator must be nonzero.

**Problem.** Every embedding of an integral domain into a field extends uniquely to an embedding of its fraction field.

**How the definition helps.** An embedding h into a field sends each nonzero denominator to a unit (our own). Its only possible extension sends a/b to h(a)/h(b), which respects equality by cross multiplication and preserves fraction arithmetic (our own). The extension is injective because it preserves 1 and its source is a field (our own).

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

**Definition.** A fraction field of an integral domain D is a field K containing D with the following property. Every embedding of D into any field F extends uniquely to a unital field map K → F.

**Problem.** If a field F has characteristic zero, meaning no positive integer multiple of 1 is zero, then F contains exactly one copy of ℚ.

**How the definition helps.** Characteristic zero makes the unique unital map ℤ → F injective (our own). The fraction field property of ℚ then gives a unique unital map ℚ → F. Its kernel is proper and hence zero, so its image is the unique copy of ℚ (our own).

**nLab:** [field of fractions](https://ncatlab.org/nlab/show/field+of+fractions). It says: “The field of fractions Q(D) is unique minimal field in which the integral domain D is embedded in the sense that every field K ⊃ D contains the subfield isomorphic to Q(D)”

**Wikipedia:** [Field of fractions](https://en.wikipedia.org/wiki/Field_of_fractions). It says: “if h: R → F is an injective ring homomorphism from R into a field F, then there exists a unique ring homomorphism g: Frac(R) → F that extends h.”

**Sources:** none listed. No primary source with a working link was found.

### The fraction definition of localized modules makes localization exact

**Remember:** Clear a denominator to move a localized kernel element into the original kernel.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings), 13C11. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let M be a module over a commutative ring R and let S contain 1 and be closed under multiplication. The localized module S⁻¹M consists of fractions m/s for m ∈ M and s ∈ S. Identify m/s and m′/s′ exactly when some t ∈ S satisfies t(s′m − sm′) = 0.

**Problem.** Let u: L → M and v: M → N form an exact sequence of R-modules. Then the localized sequence S⁻¹L → S⁻¹M → S⁻¹N is exact.

**How the definition helps.** If m/s maps to zero, some t ∈ S kills v(m) (our own). Exactness gives tm = u(l) for some l ∈ L because v(tm) = 0 (our own). Thus m/s equals the image of l/(ts) (our own). Conversely, the localized composite vanishes because vu = 0 (our own).

**Paper or page:** [Algebra, Proposition 10.9.12.](https://stacks.math.columbia.edu/tag/00CS). It says: “Let L → M → N be an exact sequence of R-modules. Then S⁻¹L → S⁻¹M → S⁻¹N is also exact.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of localization makes successive localizations combine

**Remember:** Inverting two sets one after the other allows the same maps as inverting both.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a commutative ring A, let S contain 1 and be closed under products. A localization is a map A → S⁻¹A sending S to units through which every ring map inverting S factors uniquely.

**Problem.** Let S and S′ be multiplicatively closed subsets of A. Localizing first at S′ and then at the image of S gives the localization at the products ss′.

**How the definition helps.** Maps out of either construction correspond to maps out of A inverting both S and S′ (our own). Each set contains 1, so inverting every product ss′ amounts to inverting both sets (our own). The universal property gives a unique isomorphism compatible with the maps from A (our own).

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

**Remember:** Count cyclic summands by reducing modulo a common prime or passing to fractions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Over a principal ideal domain R, the invariant factor decomposition writes a finitely generated module as a direct sum of nonzero cyclic modules R/(d). Each scalar d divides the next, and d = 0 gives a free copy of R.

**Problem.** For a finitely generated module over a principal ideal domain, the minimum number of generators equals the number of nonzero invariant factor summands.

**How the definition helps.** The divisibility order lets one prime test every summand when the first scalar is nonzero. In our own proof, reduce modulo a prime dividing that scalar to obtain one field dimension per summand. If all scalars are zero, dimension over the fraction field gives the same lower bound. One generator per summand attains the bound, including zero generators for the zero module.

**Paper or page:** [Theorem 4.1. (Structure theorem, invariant form)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let R be a PID and let M be any finitely generated R-module.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial scalar action makes a surjective endomorphism invertible

**Remember:** Let the endomorphism act as x and find its inverse polynomial.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For an R-linear endomorphism f of an R-module M, define the action of a polynomial ∑ aᵢxⁱ by (∑ aᵢxⁱ)m = ∑ aᵢfⁱ(m). Here f⁰ is the identity.

**Problem.** A surjective endomorphism of a finitely generated module over a commutative ring is an isomorphism.

**How the definition helps.** Surjectivity gives xM = M in this polynomial action (our own). For a finite generator column g, write g = xAg with a matrix A over R (our own). The adjugate identity shows det(I − xA) kills g and hence M (our own). This determinant has form 1 − xq(x), making q(f) a two-sided inverse for f (our own).

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

**Remember:** Radical elements keep one invertible after subtracting any multiple.

*Rules out counterexamples.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring R with identity, a belongs to the Jacobson radical exactly when 1 − ra is invertible for every r ∈ R.

**Problem.** If M is finitely generated and I is an ideal in the Jacobson radical, then IM = M implies M = 0. Also, any lifts of generators of M/IM generate M.

**How the definition helps.** The radical condition makes every element of 1 + I invertible. The determinant trick applied to a finite generating family produces such an element killing M, so M vanishes. Applying this result to the quotient by the chosen lifts proves the generator statement. Our own counterexample takes I = (3) and M = ℤ/2ℤ, where multiplication by 3 is the identity.

**Paper or page:** [Lemma 10.20.1.](https://stacks.math.columbia.edu/tag/00DV). It says: “If IM = M, M is finite, and I ⊂ rad(R), then M = 0.”

**Sources:**

- [Gorô Azumaya, On maximally central algebras, Nagoya Mathematical Journal 2 (1951), Theorem 1.](https://doi.org/10.1017/S0027763000010114)

### Over a nonzero commutative ring, finite free modules have one rank

**Remember:** Isomorphic finite free modules must have equally many basis elements.

*Rules out counterexamples.* MSC 13C10 (Projective and free modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring R has invariant basis number if, for all nonnegative integers n,m, an R-module isomorphism Rⁿ ≅ Rᵐ implies n = m.

**Problem.** Every nonzero commutative ring has the invariant basis number property. The zero ring does not, because every Rⁿ is the zero module.

**How the definition helps.** A nonzero commutative ring has a maximal ideal 𝔪 (our own). Reduction of a free-module isomorphism modulo 𝔪 gives an isomorphism of vector spaces of dimensions n and m, forcing equality (our own). Over the zero ring all free modules coincide, regardless of the number of basis elements (our own).

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

**Remember:** Dedekind domains have finitely generated ideals, integral closure, and maximal nonzero primes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 11R27. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** A Dedekind domain is a Noetherian, integrally closed domain in which every nonzero prime ideal is maximal. Noetherian means that every ideal is finitely generated. Integral closure here means that every fraction satisfying a monic polynomial over the domain belongs to the domain.

**Problem.** In a Dedekind domain, every nonzero proper ideal is a product of prime ideals in exactly one way, up to order. The ring of integers of every number field is a Dedekind domain.

**How the definition helps.** Dedekind’s ideal factorization theorem takes nonzero ideals as its objects and nonzero prime ideals as their factors. The theorem that rings of integers are Dedekind domains supplies its hypotheses for each number field (our own). Thus even in ℤ\[√−5\], where elements can factor nonuniquely, ideal factorization is unique (our own).

**nLab:** [Dedekind ring](https://ncatlab.org/nlab/show/Dedekind+ring), [Dedekind domain](https://ncatlab.org/nlab/show/Dedekind+domain), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut), [ideal class group](https://ncatlab.org/nlab/show/ideal+class+group), [Picard group](https://ncatlab.org/nlab/show/Picard+group). It says: “every ideal can be uniquely factored into prime ideals and the non-zero fractional ideals form a group under multiplication of ideals.”

**Sources:**

- [Serge Lang, Algebraic number theory, Graduate Texts in Mathematics 110, Springer (1970, 1994)](https://doi.org/10.1007/978-1-4612-0853-2)

### Division with a smaller remainder makes every ideal principal

**Remember:** You can always divide and get a smaller remainder.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 13F10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Euclidean domain is a domain with a function f from its nonzero elements to the nonnegative integers. For every a and every nonzero b there exist q,r with a = bq + r and either r = 0 or f(r) &lt; f(b).

**Problem.** Every Euclidean domain is a principal ideal domain, that is, a ring in which every ideal is generated by one element. So every Euclidean domain is also a unique factorization domain.

**How the definition helps.** In each nonzero ideal choose a nonzero b minimizing f. For every a in the ideal, division by b leaves a remainder still in the ideal. Minimality forces that remainder to vanish, so b generates the ideal, and zero generates the zero ideal (our own). The principal ideal domain factorization theorem then gives unique factorization (our own).

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

**Remember:** When divisibility fails, some linear combination has smaller positive norm.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F10 (Principal ideal rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Dedekind–Hasse norm on a domain R assigns nonnegative integers to elements, with v(x) = 0 exactly when x = 0. For every a and nonzero b with b not dividing a, some p,q ∈ R satisfy 0 &lt; v(pa − bq) &lt; v(b).

**Problem.** An integral domain is a principal ideal domain exactly when it has a Dedekind–Hasse norm.

**How the definition helps.** A nonzero element b of least norm in a nonzero ideal must divide every member a. Otherwise a smaller nonzero combination pa − bq lies in the ideal. Conversely, in a principal ideal domain give zero norm zero and each nonzero x norm 2ᵏ, counting its k prime factors with multiplicity (our own). When b does not divide a, a generator pa − bq of (a,b) properly divides b and hence has smaller norm (our own).

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

*True by definition.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13B22. arXiv math.AC. Level 2: later undergraduate.

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

**How the definition helps.** If a nonzero nonunit lacks an irreducible factorization, it splits into two nonunits, one again lacking a factorization (our own). Its principal ideal lies strictly inside the ideal of that factor, since cancellation would otherwise make the other factor invertible (our own). Repetition contradicts the chain condition (our own). Among all algebraic integers, every nonzero nonunit splits into two nonunit square roots, so irreducibles do not exist (our own).

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

**Remember:** Reorder the factors and match each one up to an invertible multiple.

*Makes the theorem clean to state or prove.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unit is an element with a multiplicative inverse, such as 1 and −1 in ℤ. An irreducible element is a nonzero non-unit that is not a product of two non-units. Two factorizations count as the same if their factors match after a change of order and multiplication by units.

**Problem.** In a unique factorization domain, every nonzero non-unit is a product of irreducible elements in exactly one way.

**How the definition helps.** Matching factors up to units and permutation states exactly the uniqueness required in a unique factorization domain. In ℤ, the products 2·3 and (−2)·(−3) give one factorization under this rule (our own).

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

**Definition.** A formal polynomial in commuting variables over R assigns coefficients in R to monomials, with only finitely many nonzero coefficients. Each monomial uses finitely many variables with nonnegative integer exponents. Add coefficients termwise and multiply by distributing products of monomials.

**Problem.** Let R and S be commutative rings with 1, let ψ be a ring map from R to S, and choose elements sⱼ of S. There is a unique ring homomorphism from the polynomial ring to S that extends ψ and sends each Xⱼ to sⱼ.

**How the definition helps.** Evaluation sends each monomial to the product of the chosen values raised to its exponents, and applies ψ to its coefficient (our own). Summing these terms preserves addition and multiplication by distributivity (our own). Any extension with the prescribed values must act this way on every finite sum, proving uniqueness (our own).

**Paper or page:** [Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set). It says: “Then there exists a unique evaluation homomorphism φ: R\[{Xⱼ: j ∈ J}\] → S at (sⱼ) extending ψ.”

**Sources:**

- [ProofWiki, Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set)

### Over an integral domain, the only invertible polynomials are invertible constants

**Remember:** Degrees add in a domain, so an invertible polynomial has degree zero.

*Rules out counterexamples. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials), 13G05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 and no zero divisors. A unit is an element that has a multiplicative inverse.

**Problem.** Over an integral domain D, the units of the polynomial ring D\[X\] are exactly the units of D.

**How the definition helps.** Nonzero leading coefficients have nonzero product in a domain, so degrees of nonzero polynomials add (our own). If fg = 1, both degrees are zero and the constant coefficients are inverses (our own). Conversely, invertible constants retain their inverses (our own). Modulo 4, the zero divisor 2 allows (1 + 2X)² = 1 (our own).

**Paper or page:** [Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain), [Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring). It says: “Then the group of units of D\[X\] is precisely the group of elements of D\[X\] of degree zero that are units of D.”

**Sources:**

- [ProofWiki, Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain)
- [ProofWiki, Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring)

### Polynomials as coefficient lists, not functions, keep distinct polynomials distinct

**Remember:** A polynomial is its coefficients, not the values it takes.

*Rules out counterexamples.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial over D is a sequence of coefficients in D with only finitely many nonzero entries. Its polynomial function sends each a ∈ D to the value obtained by substituting a for X.

**Problem.** Over a finite integral domain D, the ring of polynomial forms D\[X\] is not isomorphic to the ring of polynomial functions on D.

**How the definition helps.** Over finite D only finitely many maps D → D exist, so the polynomial functions form a finite ring (our own). The distinct monomials 1,X,X²,… make D\[X\] infinite, ruling out any isomorphism (our own). For example, Xᵖ and X agree as functions on the field of p elements despite having different coefficients (our own).

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

**Definition.** For a commutative ring R, adjoin ε with ε² = 0 to R\[\[X\]\]. Define p′ as the coefficient of ε in p(X + ε), using X-adically continuous substitution. Thus p(X + ε) = p(X) + p′(X)ε.

**Problem.** This derivative satisfies (pq)′ = p′q + pq′. For formal composition with q(0) = 0, it satisfies (p ∘ q)′ = (p′ ∘ q)q′.

**How the definition helps.** Multiplying the expansions for p and q gives the product rule because ε² = 0 (our own). Substitution into p(q(X + ε)) gives p(q(X) + q′(X)ε) (our own). The coefficient of ε is p′(q(X))q′(X), giving the chain rule (our own).

**nLab:** [power series](https://ncatlab.org/nlab/show/power+series). It says: “the restriction of p ↦ p′ to R\[X\] is by construction a derivation such that X′ = 1”

**Sources:** none listed. No primary source with a working link was found.

### The valuation definition makes nonzero ideals of discrete valuation rings uniformizer powers

**Remember:** An element of least value generates the whole ideal.

*True by definition. Confidence: medium.* MSC 13F30 (Valuation rings), 12J10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Take a surjective valuation v from the multiplicative group of a field F to ℤ, and set v(0) = ∞. Thus v(xy) = v(x) + v(y) for nonzero x,y and v(x + y) ≥ min(v(x),v(y)) for all x,y. The discrete valuation ring consists of x with v(x) ≥ 0, and a uniformizer is an element t with v(t) = 1.

**Problem.** In a discrete valuation ring, every nonzero ideal is generated by a power of a uniformizer, an element of value one.

**How the definition helps.** A nonzero ideal has a least finite value n because its finite values are nonnegative integers (our own). If a attains n, then a/tⁿ and its inverse have value zero, so tⁿ belongs to the ideal (our own). Every ideal element divided by tⁿ remains in the ring, proving the ideal equals (tⁿ) (our own).

**Paper or page:** [Proposition 4.13.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is of the form (tⁿ) for some unique n ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Integral domains leave out the zero ring, as primes leave out 1

**Remember:** Properness keeps one nonzero, and primality prevents zero divisors in the quotient.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with identity in which products of nonzero elements are nonzero. A prime ideal P is proper and satisfies ab ∈ P only if a ∈ P or b ∈ P, for all ring elements a,b.

**Problem.** For an ideal P of a commutative ring R with identity, R/P is an integral domain exactly when P is prime. For each positive integer n, ℤ/nℤ is an integral domain exactly when n is prime.

**How the definition helps.** Properness makes the quotient nonzero, excluding R/R and in particular ℤ/1ℤ. A product vanishes modulo P exactly when ab ∈ P, so primality says precisely that one factor vanishes (our own). For n &gt; 1 this test for (n) is Euclid’s prime divisibility criterion (our own).

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

**How the definition helps.** A composite characteristic n = ab with 1 &lt; a,b &lt; n gives two nonzero elements a·1 and b·1 by minimality (our own). Their product is zero, contradicting the domain condition (our own). Modulo 6 the factors 2 and 3 show exactly this failure (our own). Since 1 ≠ 0, characteristic one is impossible (our own).

**Paper or page:** [Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime), [Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One), [Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime). It says: “Let D be an integral domain. Let Char D be the characteristic of D. Then Char D is either 0 or a prime number.”

**Sources:**

- [ProofWiki, Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime)
- [ProofWiki, Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One)
- [ProofWiki, Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime)

### Counting surviving monomials gives the Hilbert function

**Remember:** Count monomials that division leaves untouched, one degree at a time.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 14A10. arXiv math.AG. Level 2: later undergraduate.

**Definition.** Fix a polynomial ring in finitely many variables over a field, with a monomial order and the usual total degree. A homogeneous ideal I has homogeneous generators, and its quotient’s Hilbert function gives the vector space dimension in each degree. Standard monomials lie outside the ideal generated by the leading monomials of all nonzero polynomials in I.

**Problem.** For a homogeneous ideal, the Hilbert function in degree d equals the number of standard monomials of degree d, for any monomial order.

**How the definition helps.** The standard monomials give a basis of the quotient, and each has a definite degree (our own). Thus the degree-d monomials in this basis count the dimension in degree d (our own). The basis theorem comes from polynomial division by a Gröbner basis (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “dᵢ is the number of monomials of degree i that are not multiple of any leading monomial in the Gröbner basis.”

**Sources:** none listed. No primary source with a working link was found.

### Elimination orders let a Gröbner basis keep only the desired variables

**Remember:** If the largest monomial stays, the whole polynomial stays.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** An elimination order is a monomial order ranking every monomial involving a removed variable above every monomial in retained variables alone. The elimination ideal consists of the original ideal’s polynomials involving only retained variables.

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

**Definition.** Fix a monomial order, a well-order of monomials compatible with multiplication. For a list of polynomials, form the ideal generated by the greatest monomial of each nonzero list member.

**Problem.** Buchberger’s algorithm terminates after finitely many additions to its starting list, for polynomials in finitely many variables over a field.

**How the definition helps.** Each nonzero remainder added by Buchberger’s algorithm has a leading monomial outside the current leading monomial ideal. Each addition therefore enlarges the ideal. Dickson’s lemma says such a chain of monomial ideals must stop growing. A finite final list has only finitely many pairs to test (our own).

**Wikipedia:** [Buchberger's algorithm](https://en.wikipedia.org/wiki/Buchberger%27s_algorithm). It says: “The algorithm terminates because it is consistently increasing the size of the monomial ideal generated by the leading terms of our set F”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Leading monomials make division remainders unique

**Remember:** Keep exactly the monomials the leading terms cannot divide.

*True by definition.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** Fix a monomial order in a polynomial ring over a field. Write LM(f) for the greatest monomial with nonzero coefficient in f. A finite subset G of I is a Gröbner basis if every nonzero f ∈ I admits nonzero g ∈ G with LM(g) dividing LM(f).

**Problem.** Division by a Gröbner basis gives the same remainder for every polynomial in a given class modulo I. The monomials not divisible by any basis leading monomial give a vector space basis of the quotient.

**How the definition helps.** A difference of two distinct remainders has no monomial divisible by a basis leading monomial, so it lies outside I (our own). Ordinary generators can give different remainders for the same class (our own). Division gives a remainder in every class, and uniqueness makes the surviving monomials linearly independent (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “the monomials that are irreducible by G form a basis of the F-vector space R/I.”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Making reduced Gröbner bases monic gives every ideal one canonical basis

**Remember:** Scale to leading coefficient 1, and the Gröbner basis is unique.

*Rules out counterexamples.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Fix a monomial order over a field k. A Gröbner basis is a finite subset of the ideal whose leading monomials generate its leading monomial ideal. It is reduced if each member is monic and none of its monomials is divisible by another member’s leading monomial.

**Problem.** For a fixed monomial ordering, each ideal of k\[x₁, …, xₙ\] has exactly one reduced Gröbner basis. So two ideals are equal exactly when they have the same reduced Gröbner basis.

**How the definition helps.** The reduced leading monomials are the unique minimal monomial generators of the leading ideal (our own). For each such monomial m, subtract its unique standard remainder modulo I to obtain the required monic basis member (our own). These members give the reduced basis, so it depends only on I (our own). Without monicity, {x} and {2x} both qualify for (x) over ℚ (our own).

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

**Definition.** Let A,B have positive degrees d,e and leading coefficients a,b over a field. In a common splitting field, list their roots λᵢ and μⱼ with multiplicities. Their resultant is aᵉbᵈ times the product of λᵢ − μⱼ over every pair i,j.

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

**Definition.** For an R-module M over a commutative ring R, Sym(M) is a commutative R-algebra with an R-linear map from M. Every R-linear map from M to a commutative R-algebra factors uniquely through this map by an R-algebra homomorphism.

**Problem.** For modules M and N, Sym(M ⊕ N) is isomorphic to Sym(M) ⊗ Sym(N).

**How the definition helps.** Maps from either algebra to a commutative R-algebra correspond to pairs of linear maps from M and N (our own). For Sym(M ⊕ N), use the direct sum and the defining extension property (our own). For Sym(M) ⊗ Sym(N), use the tensor product’s mapping property and extend each linear map separately (our own). The shared mapping property gives the isomorphism (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional ideals make the ideals of a Dedekind domain a group

**Remember:** Allow denominators, and ideals get inverses as fractions get them.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13F05. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A fractional ideal of a domain R is an R-submodule I of its fraction field with rI ⊆ R for some nonzero r ∈ R. It is invertible if IJ = R for some fractional ideal J.

**Problem.** A domain is Dedekind exactly when every nonzero fractional ideal is invertible. These nonzero fractional ideals then form a group whose quotient by the nonzero principal fractional ideals is the class group.

**How the definition helps.** Allowing a common denominator gives inverses a place outside the ring of integral ideals (our own). The invertible-ideal characterization of Dedekind domains supplies the equivalence. Fractional ideal multiplication is associative and commutative with identity R, and the nonzero principal fractional ideals form a subgroup (our own).

**Wikipedia:** [Fractional ideal](https://en.wikipedia.org/wiki/Fractional_ideal), [Ideal class group](https://en.wikipedia.org/wiki/Ideal_class_group). It says: “An integral domain is a Dedekind domain if and only if every non-zero fractional ideal is invertible.”

**Sources:** none listed. No primary source with a working link was found.

### Irredundant primary decompositions have uniquely determined primes

**Remember:** Remove the spare pieces, and the primes of an ideal are fixed.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** A proper ideal Q is primary if xy ∈ Q and x ∉ Q imply yⁿ ∈ Q for some positive n, for all x,y. A primary decomposition is a finite intersection of primary ideals. It is irredundant here if deleting any component changes the intersection and all component radicals are distinct.

**Problem.** In a commutative Noetherian ring every proper ideal has an irredundant primary decomposition. Its component radicals depend only on the ideal, as do the components corresponding to minimal primes.

**How the definition helps.** Irredundancy excludes (x) = (x) ∩ (x,y) in k\[x,y\], which introduces an extraneous prime over the field k (our own). Lasker–Noether gives primary decomposition, and the uniqueness theorems identify its radicals and the components at minimal primes (our own).

**Wikipedia:** [Primary decomposition](https://en.wikipedia.org/wiki/Primary_decomposition). It says: “Removing any of the Qᵢ changes the intersection”

**Sources:**

- [E. Lasker, Zur Theorie der Moduln und Ideale, Mathematische Annalen 60 (1905) 20–116](https://doi.org/10.1007/BF01447495)
- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)

### Jacobson rings state the Nullstellensatz for all finitely generated algebras

**Remember:** In a Jacobson ring, maximal ideals see every prime.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13B10. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A commutative ring is a Jacobson ring (or Hilbert ring) if every prime ideal is an intersection of maximal ideals.

**Problem.** Every finitely generated commutative algebra S over a Jacobson ring R is Jacobson. Every maximal ideal of S contracts to a maximal ideal of R. The field case gives the Jacobson-ring form of Hilbert’s Nullstellensatz.

**How the definition helps.** Writing primes as intersections of maximal ideals lets the generalized Nullstellensatz state the same property for the base and the algebra. The polynomial-ring theorem and passage to quotients give the finite-generation case (our own).

**Wikipedia:** [Jacobson ring](https://en.wikipedia.org/wiki/Jacobson_ring). It says: “A general form of the Nullstellensatz states that if R is a Jacobson ring, then so is any finitely generated R-algebra S.”

**Sources:**

- [O. Goldman, Hilbert rings and the Hilbert Nullstellensatz, Mathematische Zeitschrift 54 (1951) 136–140](https://doi.org/10.1007/BF01179855)
- [W. Krull, Jacobsonsche Ringe, Hilbertscher Nullstellensatz, Dimensionstheorie, Mathematische Zeitschrift 54 (1951) 354–387](https://doi.org/10.1007/BF01238035)

### The Jacobson radical lifts generators

**Remember:** Reduce inside the Jacobson radical, and generators lift.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** The Jacobson radical of a commutative ring is the intersection of its maximal ideals. An ideal inside this radical therefore lies in every maximal ideal.

**Problem.** Let M be a finitely generated module over a commutative ring. If I lies in the Jacobson radical, any lifts of generators of M/IM generate M.

**How the definition helps.** Every element of 1 + I is invertible since I lies in every maximal ideal (our own). For the quotient Q by the span of the lifts, generation modulo I gives IQ = Q (our own). Nakayama’s determinant argument gives an element of 1 + I killing Q, hence Q = 0 (our own). Over ℤ the class of 3 generates modulo 2, yet 3 does not generate ℤ (our own).

**Paper or page:** [Algebra, Lemma 10.20.1.](https://stacks.math.columbia.edu/tag/00DV). It says: “If IM = M, M is finite, and I ⊂ rad(R), then M = 0.”

**Sources:** none listed. No primary source with a working link was found.

### The square-zero ring R ⊕ M gives Lasker–Noether for modules from ideals

**Remember:** Turn submodules into ideals by declaring their internal products zero.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** For a module M over a commutative ring R, form the ring R ⊕ M with product (r, m)(s, n) = (rs, rn + sm). Products of two elements of M are then zero. The submodules of M are exactly the ideals of R ⊕ M that lie inside M.

**Problem.** Let R be Noetherian and M finitely generated. Then every proper submodule of M is a finite intersection of primary submodules. A submodule N is primary when each r in R acts on M/N either injectively or nilpotently.

**How the definition helps.** Identify M with the square-zero ideal 0 ⊕ M, so its submodule N is an ideal (our own). The new ring is finite as an R-module and hence Noetherian, so Lasker–Noether writes N as an intersection of primary ideals Q (our own). Intersect each Q with M and discard intersections equal to M (our own). If rm ∈ Q but m ∉ Q, primariness puts a power of r in Q, killing M/(Q ∩ M) (our own).

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “Similarly, unital zero algebras allow to deduce straightforwardly the Lasker–Noether theorem for modules”

**Sources:** none listed. No primary source with a working link was found.

### Finite algebra generation forces finite field extensions

**Remember:** A finite list must generate every field element using polynomials alone.

*Makes the theorem clean to state or prove.* MSC 13B02 (Extension theory of commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** A field extension L/k is finitely generated as a k-algebra if some finite list in L expresses every element as a polynomial over k.

**Problem.** A field extension finitely generated as an algebra has finite dimension as a vector space over the base field.

**How the definition helps.** The polynomial condition distinguishes algebra generators from field generators, which also allow division (our own). In ℚ(t), finitely many rational functions involve only finitely many irreducible denominator factors, so their algebra misses some 1/(t − a) (our own). Zariski’s lemma proves that finite algebra generation forces finite dimension for every field extension.

**Paper or page:** [ProofWiki, Zariski's Lemma](https://proofwiki.org/wiki/Zariski's_Lemma). It says: “Let L / k be a field extension. Let L be finitely generated as an algebra over k. Then L / k is a finite field extension.”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal rings by their local rings makes normality local

**Remember:** Normal is checked prime by prime, so products of normal domains are normal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B30, 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A commutative ring is normal if its localization at every prime is an integrally closed domain. A domain is integrally closed if every element of its fraction field integral over it already belongs to it.

**Problem.** Let R be a reduced ring with finitely many minimal primes. Then R is normal exactly when it is a finite product of normal domains.

**How the definition helps.** Each local domain has a unique minimal prime, so two distinct minimal primes of R cannot lie in a common maximal ideal (our own). The finitely many minimal primes are therefore pairwise comaximal and intersect in zero by reducedness (our own). The Chinese remainder theorem splits R into domain factors whose prime localizations are normal, so each factor is integrally closed by locality (our own). Conversely, every prime localization of a product of normal domains localizes one factor and remains normal (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.37.16](https://stacks.math.columbia.edu/tag/030C). It says: “Assume R is reduced and has finitely many minimal primes. Then the following are equivalent: (1) R is a normal ring, … and (3) R is a finite product of normal domains.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 030C (Algebra, Lemma 10.37.16)](https://stacks.math.columbia.edu/tag/030C)

### Integral closure keeps monic factors

**Remember:** Integral closure keeps coefficients of monic factors from escaping.

*Rules out counterexamples.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B25. arXiv math.AC. Level 3: graduate.

**Definition.** A domain A is integrally closed if it contains every element of its fraction field satisfying a monic polynomial over A. A monic polynomial has leading coefficient one.

**Problem.** If a monic polynomial over an integrally closed domain factors into monic polynomials over its fraction field, both factors have coefficients in the domain.

**How the definition helps.** In a splitting field, every root of the original monic polynomial is integral over A. Each factor coefficient is a signed sum of products of those roots, hence integral because integral elements form a ring. It belongs to the fraction field, so integral closure puts it in A. Over ℚ\[t²,t³\], the monic factors x ± t of x² − t² have coefficients outside the ring since t ∉ ℚ\[t²,t³\] (our own).

**Paper or page:** [Finite local principal ideal rings](https://arxiv.org/abs/2301.07664v7). It says: “If f ∈ A\[X\] factorizes as f = gh in B\[X\] with g and h monic, then g and h are in A\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### The Rees algebra definition shows an ideal's integral closure is an ideal

**Remember:** An ideal's closure is the degree-one part of a ring's closure.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13A30. arXiv math.AC. Level 3: graduate.

**Definition.** Let I be an ideal of a commutative ring R. Its Rees algebra R\[It\] is the subring of R\[t\] generated by R and all at with a ∈ I. The integral closure of I consists of r ∈ R for which rt satisfies a monic polynomial over R\[It\].

**Problem.** The integral closure of an ideal is an ideal.

**How the definition helps.** Elements of R\[t\] integral over R\[It\] form a subring containing R (our own). Thus integral elements rt and st have integral difference (r − s)t, and a·rt remains integral for every a ∈ R (our own). Zero qualifies too, so these tests give an ideal (our own). The graded integral-closure criterion identifies this definition with the usual equations having coefficients in the powers of I (our own).

**Wikipedia:** [Integral closure of an ideal](https://en.wikipedia.org/wiki/Integral_closure_of_an_ideal). It says: “In particular, Ī is an ideal”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit completion of R\[x\] at x is the power series ring

**Remember:** A power series is exactly one compatible choice of every finite truncation.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13F25. arXiv math.AC. Level 3: graduate.

**Definition.** For an ideal I of R, the I-adic completion consists of sequences with one residue aₙ in R/Iⁿ for each n ≥ 1. Reduction modulo Iⁿ must send aₙ₊₁ to aₙ for every n, and ring operations act coordinatewise (our own).

**Problem.** The completion of R\[x\] at the ideal (x) is the ring R\[\[x\]\] of formal power series over R.

**How the definition helps.** Each compatible sequence fixes every coefficient once it appears in a truncation (our own). Conversely, truncating any series gives a compatible sequence (our own). Addition and multiplication agree modulo every xⁿ, so this correspondence preserves both operations (our own).

**nLab:** [completion of a ring](https://ncatlab.org/nlab/show/completion+of+a+ring). It says: “then the formal completion of R\[x\] at the ideal (x) generated by the free generator x is the ring of formal power series”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit definition of completion lets units lift from R/I

**Remember:** Take inverses at every finite level, where uniqueness keeps them compatible.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** For an ideal I of R, the I-adic completion consists of sequences with one residue aₙ in R/Iⁿ for each n ≥ 1. Reduction modulo Iⁿ must send aₙ₊₁ to aₙ for every n, and ring operations act coordinatewise (our own).

**Problem.** Let I be an ideal of R. An element of the completion that maps to a unit of R/I is a unit.

**How the definition helps.** An inverse in the completion is a compatible sequence of inverses (our own). In R/Iⁿ the ideal I/Iⁿ is nilpotent, so every unit modulo I lifts to a unit modulo Iⁿ (our own). Reduction preserves inverses, and uniqueness makes them compatible (our own).

**Paper or page:** [Algebra, Lemma 10.96.6.](https://stacks.math.columbia.edu/tag/05GI). It says: “any element of R̂ which maps to a unit of R/I is a unit”

**Sources:** none listed. No primary source with a working link was found.

### Defining henselization by a universal property makes it extend local maps

**Remember:** The universal map extends each local map in only one way.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** The henselization of a local ring R is a local map R → Rʰ to a henselian local ring. Every local map from R to a henselian local ring factors uniquely through it by a local map (our own).

**Problem.** Every local map of local rings induces a unique compatible local map of henselizations.

**How the definition helps.** With the universal property, the induced map exists and is unique with no construction (our own). Compose R → S with S → Sʰ to get a local map into a henselian ring (our own). It factors uniquely through Rʰ, which gives the map Rʰ → Sʰ (our own). The work moves to proving that the direct-limit construction is henselian and has the universal property.

**Paper or page:** [Lemma 10.155.6.](https://stacks.math.columbia.edu/tag/04GS). It says: “There exists a unique local ring map Rʰ → Sʰ fitting into the commutative diagram”

**Sources:**

- [Masayoshi Nagata, On the Theory of Henselian Rings, Nagoya Mathematical Journal 5 (1953), 45–57.](https://doi.org/10.1017/S0027763000015439)

### The universal property of henselization makes it commute with quotients

**Remember:** Killing an ideal imposes the same condition before or after henselization.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** The henselization of a local ring R is a local map R → Rʰ to a henselian local ring. Every local map from R to a henselian local ring factors uniquely through it by a local map (our own).

**Problem.** Let I be an ideal inside the maximal ideal of a local ring R. Then Rʰ/IRʰ is the henselization of R/I.

**How the definition helps.** Local maps out of the quotient Rʰ/IRʰ correspond to local maps out of Rʰ killing I (our own). For henselian targets these correspond uniquely to local maps out of R/I (our own). The quotient is henselian by the quotient lemma for henselian local rings (our own).

**Paper or page:** [Lemma 10.156.2.](https://stacks.math.columbia.edu/tag/05WQ). It says: “Then Rʰ/IRʰ is the henselization of R/I.”

**Sources:** none listed. No primary source with a working link was found.

### Unique infinitesimal lifts make every localization formally étale

**Remember:** A unit modulo a nilpotent ideal lifts to a unit, so denominators stay invertible.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13B30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Consider an R-algebra A and any R-algebra B with a nilpotent ideal I. We call A formally étale over R if every R-algebra map A → B/I lifts uniquely to an R-algebra map A → B (our own).

**Problem.** For a commutative ring R and a multiplicatively closed subset S, the localization map R → S⁻¹R is formally étale.

**How the definition helps.** Every denominator already has an inverse modulo I (our own). A finite geometric sum makes each denominator invertible in B (our own). The universal property of localization now gives exactly one lift (our own).

**Paper or page:** [Algebra, Lemma 10.150.5](https://stacks.math.columbia.edu/tag/04EG). It says: “Let R be a ring. Let S ⊂ R be any multiplicative subset. Then the ring map R → S⁻¹R is formally étale.”

**Sources:**

- [The Stacks Project, Lemma 10.150.5, Tag 04EG](https://stacks.math.columbia.edu/tag/04EG)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Unique lifts make formally étale algebras survive directed colimits

**Remember:** Each stage lifts uniquely, so the lifts agree and define a colimit map.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 14B25. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Consider an R-algebra A and any R-algebra B with a nilpotent ideal I. We call A formally étale over R if every R-algebra map A → B/I lifts uniquely to an R-algebra map A → B (our own).

**Problem.** The colimit of a directed system of formally étale R-algebras is formally étale over R.

**How the definition helps.** A map from the colimit restricts to compatible maps from all stages (our own). Each restriction lifts uniquely, so the lifts agree along every transition map (our own). The colimit combines them into the unique lift (our own).

**Paper or page:** [Algebra, Lemma 10.150.4](https://stacks.math.columbia.edu/tag/031N). It says: “If each R → Sᵢ is formally étale, then S = \\(\\operatorname{colim}<sub>i\\in I</sub> S<sub>i</sub>\\) is formally étale over R”

**Sources:**

- [The Stacks Project, Lemma 10.150.4, Tag 031N](https://stacks.math.columbia.edu/tag/031N)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Weakly associated primes detect nonzero modules over every ring

**Remember:** Ask for a minimal prime over an annihilator, and Noetherian is unneeded.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings), 13A15. arXiv math.AC. Level 3: graduate.

**Definition.** A prime of a commutative ring R is weakly associated to an R-module M if it is minimal over Ann(m) for some m ∈ M. The ideal Ann(m) consists of all r ∈ R with rm = 0 (our own).

**Problem.** Over every commutative ring, a module is zero exactly when it has no weakly associated primes. Its zero divisors form the union of those primes (our own).

**How the definition helps.** Every nonzero element has a proper annihilator with a minimal prime above it, whereas zero has annihilator R (our own). If r kills a nonzero element, any minimal prime over its annihilator contains r (our own). Conversely, if r belongs to a minimal prime over Ann(m), the minimal-prime theorem makes r a zero divisor in R/Ann(m) (our own). This quotient embeds in M by sending 1 to m (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.66.5](https://stacks.math.columbia.edu/tag/0588), [Stacks Project, Algebra, Lemma 10.66.7](https://stacks.math.columbia.edu/tag/05C3), [Stacks Project, Algebra, Lemma 10.66.9](https://stacks.math.columbia.edu/tag/058A). It says: “Let R be a ring. Let M be an R-module. Then M = (0) ⇔ WeakAss(M) = ∅”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0588 (Algebra, Lemma 10.66.5)](https://stacks.math.columbia.edu/tag/0588)
- [The Stacks Project Authors, The Stacks Project, Tag 05C3 (Algebra, Lemma 10.66.7)](https://stacks.math.columbia.edu/tag/05C3)
- [The Stacks Project Authors, The Stacks Project, Tag 058A (Algebra, Lemma 10.66.9)](https://stacks.math.columbia.edu/tag/058A)

### Duals defined by evaluation and coevaluation survive any change of scalars

**Remember:** A change of scalars carries the two duality identities along.

*True by definition.* MSC 13C10 (Projective and free modules and ideals in commutative rings), 18M05. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** For R-modules P and Q, take linear maps e ∶ Q ⊗ P → R and c ∶ R → P ⊗ Q. They exhibit Q as a dual of P under two conditions (our own). Require (1 ⊗ e)(c ⊗ 1) and (e ⊗ 1)(1 ⊗ c) to act identically on P and Q, respectively (our own).

**Problem.** Let P be a finitely generated projective module over a commutative ring R, and let R → S be a ring map. Then S ⊗ Hom(P, R) is isomorphic to Hom(S ⊗ P, S).

**How the definition helps.** Extension of scalars preserves tensor products, so it carries the two maps and their identities over to S ⊗ P. Hence S ⊗ P\* is a dual of S ⊗ P, and duals are unique up to isomorphism. The real work is the nLab theorem that dualizable modules are the finitely generated projective ones. The base-change argument is our own.

**nLab:** [dualizable module](https://ncatlab.org/nlab/show/dualizable+module). It says: “An R-module is dualizable if and only if it is a finitely generated projective module.”

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

**How the definition helps.** Every map from an ideal into the direct sum lands in a finite subsum because the ideal has finitely many generators (our own). Injectivity extends each of those finitely many coordinate maps to R (our own). Their extensions combine into one map to the direct sum, so Baer’s criterion gives injectivity (our own).

**nLab:** [injective module](https://ncatlab.org/nlab/show/injective+module). It says: “Since R is Noetherian, I is finitely generated as an R-module”

**Sources:** none listed. No primary source with a working link was found.

### Duality into the injective hull of the residue field preserves length

**Remember:** E is injective and its socle is κ, so Hom(−, E) keeps length.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D45. arXiv math.AC. Level 3: graduate.

**Definition.** For an Artinian local ring R with residue field κ, an injective hull E is an injective extension of κ. Every nonzero submodule of E must intersect κ nontrivially. Set D(M) = Hom<sub>R</sub>(M, E) (our own).

**Problem.** For every finite module M over an Artinian local ring, D(M) has the same length as M. The functor D gives an exact duality, with D∘D naturally isomorphic to the identity (our own).

**How the definition helps.** Injectivity makes D exact, and the intersection condition forces every simple submodule of E to equal κ (our own). Thus D(κ) ≅ κ, and dualizing a composition series preserves its length (our own). Evaluation κ → D(D(κ)) is nonzero and hence invertible (our own). Exactness and induction along the series now make evaluation an isomorphism for M (our own).

**Paper or page:** [Dualizing, Lemma 47.6.1.](https://stacks.math.columbia.edu/tag/08YX), [Dualizing, Lemma 47.6.3.](https://stacks.math.columbia.edu/tag/08YZ). It says: “For every finite R-module M we have length<sub>R</sub>(M) = length<sub>R</sub>(Hom<sub>R</sub>(M, E)) In particular, the injective hull E of κ is a finite R-module.”

**Sources:**

- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### Faithful flatness lets exactness be checked after a change of ring

**Remember:** Faithfully flat base change neither creates nor hides exactness.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** An R-module S is flat if tensoring with S preserves exact sequences. It is faithfully flat if it is flat and N ⊗ S ≠ 0 for every nonzero R-module N (our own).

**Problem.** Let S be a faithfully flat R-algebra. A sequence of R-modules is exact, or a map is injective, exactly when this holds after tensoring with S.

**How the definition helps.** Flatness identifies homology after tensoring with the tensor product of the original homology and S (our own). Faithfulness detects whether that homology vanishes (our own). For injectivity, apply the same argument to the kernel (our own).

**Wikipedia:** [Flat module](https://en.wikipedia.org/wiki/Flat_module). It says: “A module is faithfully flat if taking the tensor product with a sequence produces an exact sequence if and only if the original sequence is exact.”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Lazard's criterion makes torsion-free modules over principal ideal domains flat

**Remember:** Build a flat module as a filtered colimit of finite free modules.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** Lazard’s criterion characterizes a flat R-module as one isomorphic to a filtered colimit of finitely generated free R-modules.

**Problem.** Every torsion-free module over a principal ideal domain is flat.

**How the definition helps.** A torsion-free module is the directed union of its finitely generated submodules (our own). Each is torsion-free and therefore free by the structure theorem over a principal ideal domain (our own). Lazard’s criterion now gives flatness (our own).

**nLab:** [Lazard's criterion](https://ncatlab.org/nlab/show/Lazard%27s+criterion). It says: “An left R-module is a flat module precisely if it is a filtered colimit of finitely generated free modules.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring a complete local ring makes Matlis duality an anti-equivalence

**Remember:** The double dual of R is its completion, so R must be complete.

*Rules out counterexamples.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13J10, 13D45. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R with maximal ideal 𝔪 is complete if the canonical map R → limₙ R/𝔪ⁿ is an isomorphism. For an injective hull E of R/𝔪, its Matlis dual functor is D(M) = Hom<sub>R</sub>(M,E) (our own).

**Problem.** Over a complete Noetherian local ring, D gives an anti-equivalence between Artinian and Noetherian R-modules. On each category D∘D is naturally isomorphic to the identity (our own).

**How the definition helps.** Completeness makes the evaluation map on R invertible because End<sub>R</sub>(E) identifies with the completion (our own). For k\[x\] localized at (x), evaluation instead gives the proper inclusion into k\[\[x\]\] (our own). Matlis duality supplies the extension to all Artinian and Noetherian modules.

**Wikipedia:** [Matlis duality](https://en.wikipedia.org/wiki/Matlis_duality). It says: “Then Matlis duality states that the duality functor D<sub>R</sub> gives an anti-equivalence between the categories of Artinian and Noetherian R-modules.”

**Paper or page:** [Dualizing, Lemma 47.7.5.](https://stacks.math.columbia.edu/tag/08Z6), [Dualizing, Proposition 47.7.8.](https://stacks.math.columbia.edu/tag/08Z9). It says: “Let E be an injective hull of κ over R. Then Hom<sub>R</sub>(E, E) is canonically isomorphic to the completion of R.”

**Sources:**

- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### The maximal-ideal test for faithful flatness makes flat local maps faithfully flat

**Remember:** A local map cannot make the quotient by the source maximal ideal vanish.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40, 13H99. arXiv math.AC. Level 3: graduate.

**Definition.** A flat R-module M is faithfully flat if M/𝔪M ≠ 0 for every maximal ideal 𝔪 of R (our own).

**Problem.** Every flat local ring map between local rings is faithfully flat.

**How the definition helps.** There is only one maximal ideal 𝔪 in the source (our own). Locality puts 𝔪S inside the maximal ideal of S, so S/𝔪S ≠ 0 (our own). The maximal-ideal criterion for faithful flatness now applies (our own).

**Paper or page:** [Algebra, Lemma 10.39.17.](https://stacks.math.columbia.edu/tag/00HR), [Algebra, Lemma 10.39.15.](https://stacks.math.columbia.edu/tag/00HP). It says: “A flat local ring homomorphism of local rings is faithfully flat.”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion with non-zero-divisors gives torsion-free modules over every ring

**Remember:** Torsion means killed by a non-zero-divisor, not by any nonzero element.

*Rules out counterexamples.* MSC 13C12 (Torsion modules and ideals in commutative rings), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** An element r of a ring is regular if it is not a zero divisor. An element m of a module is a torsion element if rm = 0 for some regular r. A module is torsion-free if 0 is its only torsion element.

**Problem.** Over every commutative ring, free modules are torsion-free. So are flat modules, the modules M for which tensoring with M keeps exact sequences exact.

**How the definition helps.** Multiplication by a regular scalar r is injective on R (our own). Tensoring with a flat module M gives the injective multiplication map on M, so r kills only zero (our own). Free modules are flat (our own). Allowing arbitrary nonzero scalars would already fail on R whenever R has nonzero zero divisors (our own).

**Wikipedia:** [Torsion-free module](https://en.wikipedia.org/wiki/Torsion-free_module). It says: “this does not work well over more general rings, for if the ring contains zero-divisors then the only module satisfying this condition is the zero module.”

**Sources:** none listed. No primary source with a working link was found.

### Auslander–Buchsbaum turns Cohen–Macaulayness into freeness over a regular subring

**Remember:** Cohen–Macaulay means that depth reaches dimension.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules), 13D05, 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Cohen–Macaulay when its depth equals its Krull dimension. Depth is the length of a maximal regular sequence in its maximal ideal (our own).

**Problem.** Let R be a local ring that is finitely generated as a module over a regular local subring A. Then R is Cohen–Macaulay if and only if R is a free A-module (Hironaka's criterion, also called miracle flatness).

**How the definition helps.** The depth equality turns the Auslander–Buchsbaum formula into a test for projective dimension zero (our own). Finiteness over A gives equal dimensions and equal depths for R measured over either ring (our own). Regularity gives finite projective dimension, so the formula gives pd<sub>A</sub>(R) = dim R − depth R (our own). Finite projective modules over local rings are free (our own).

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

**Problem.** Let M be a nonzero finite module over a Noetherian local ring. If x belongs to the maximal ideal and acts injectively on M, then M is Cohen–Macaulay exactly when M/xM is (our own).

**How the definition helps.** The depth definition reduces the comparison to subtracting one from both sides of an equality (our own). An alternative tests whether every sequence of parameters acts injectively on successive quotients (our own). The work here lies in proving that an injective element of the maximal ideal lowers both depth and dimension by one (our own).

**nLab:** [Cohen-Macaulay module](https://ncatlab.org/nlab/show/Cohen-Macaulay+module). It says: “its depth is equal to its Krull dimension”

**Wikipedia:** [Cohen–Macaulay ring](https://en.wikipedia.org/wiki/Cohen%E2%80%93Macaulay_ring). It says: “R is Cohen–Macaulay if and only if R/(u) is Cohen–Macaulay.”

**Paper or page:** [Algebra, Lemma 10.103.5.](https://stacks.math.columbia.edu/tag/0C6G). It says: “Then M is Cohen-Macaulay if and only if M/xM is Cohen-Macaulay.”

**Sources:** none listed. No primary source with a working link was found.

### Defining depth by Ext makes all maximal regular sequences equally long

**Remember:** Depth is the first degree where Ext stops vanishing.

*True by definition.* MSC 13C15 (Dimension theory, depth, related commutative rings (catenary, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** Let M be a finite module over a Noetherian ring R and I an ideal with IM ≠ M. Define depth<sub>I</sub>(M) as the least i ≥ 0 with Extⁱ<sub>R</sub>(R/I,M) ≠ 0 (our own).

**Problem.** Let R be Noetherian, let M be a finitely generated module, and let I be an ideal with IM ≠ M. Then every maximal M-regular sequence in I has length equal to the least i with Extⁱ(R/I, M) ≠ 0 (Rees's theorem).

**How the definition helps.** Each regular element of I lowers this Ext depth by one upon passage to the quotient (our own). At the end of a maximal sequence, prime avoidance places I in an associated prime of the quotient (our own). Thus I kills a nonzero element there, so Ext⁰ is nonzero and the remaining depth is zero (our own).

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

**Definition.** For a finite module with n generators, choose a matrix whose columns generate all relations among them. For 0 ≤ k &lt; n, its minors of order n − k generate Fitₖ, with the empty family generating zero. For k ≥ n, set Fitₖ equal to the whole ring (our own).

**Problem.** Fitting ideals of finite modules commute with extension of scalars along every ring map.

**How the definition helps.** Ring maps preserve determinants, so the same matrix gives the transformed ideal (our own). Tensoring a presentation still presents the module after extending scalars (our own). The work lies in showing that the ideal depends only on the module (our own).

**Paper or page:** [More Algebra, Lemma 15.8.4.](https://stacks.math.columbia.edu/tag/07ZA). It says: “If $R \\to R'$ is a ring map, then $\\text{Fit}<sub>k</sub>(M \\otimes<sub>R</sub> R')$ is the ideal of $R'$ generated by the image of $\\text{Fit}<sub>k</sub>(M)$.”

**Sources:** none listed. No primary source with a working link was found.

### Fitting ideals make 'locally free of rank r' a representable condition

**Remember:** Minors of a presentation detect the rank after any base change.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C40 (Linkage, complete intersections and determinantal ideals), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Locally choose n generators of ℱ and take all relations as columns of a matrix. The minors of order n − k generate Fitₖ for 0 ≤ k &lt; n, with missing minors generating zero. Set Fitₖ = 0 for k &lt; 0 and Fitₖ = R for k ≥ n (our own).

**Problem.** Let ℱ be a finite type quasi-coherent sheaf on S, and let Zₖ be the closed subscheme defined by Fitₖ(ℱ). For a map T → S, the pullback is locally free of rank r exactly when the map factors through Zᵣ₋₁ ∖ Zᵣ.

**How the definition helps.** The local freeness criterion requires Fitᵣ to be the unit ideal and Fitᵣ₋₁ to vanish (our own). Minors commute with base change, so these conditions mean precisely avoiding Zᵣ and factoring through Zᵣ₋₁ (our own).

**Paper or page:** [Stacks Project, Divisors, Lemma 31.9.6](https://stacks.math.columbia.edu/tag/05P8). It says: “The closed subschemes … defined by the Fitting ideals of ℱ have the following properties … The functor Fᵣ … is representable by the locally closed subscheme Zᵣ₋₁ ∖ Zᵣ of S.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 05P8 (Divisors, Lemma 31.9.6)](https://stacks.math.columbia.edu/tag/05P8)

### Comparing modules up to projective summands makes syzygies well defined

**Remember:** Syzygies are unique once projective summands are ignored.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D05, 16D40. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** Two modules are stably isomorphic if adding a projective summand to each makes them isomorphic. Starting with M as the zeroth syzygy, take each next syzygy as the kernel of a projective surjection onto the preceding one (our own).

**Problem.** A module M has projective dimension at most n if and only if, in some projective resolution of M, the n-th syzygy is projective. Then the n-th syzygy is projective in every projective resolution of M.

**How the definition helps.** Iterating Schanuel’s lemma shows that any two n-th syzygies of M are stably isomorphic (our own). Stable isomorphism preserves projectivity because direct sums and summands of projectives are projective (our own). A projective n-th syzygy terminates a resolution at degree n, and any resolution of length n supplies one (our own).

**Wikipedia:** [Schanuel's lemma](https://en.wikipedia.org/wiki/Schanuel%27s_lemma). It says: “If 0→K→P→M→0 and 0→K′→P′→M→0 are short exact sequences of R-modules and P and P′ are projective, then K⊕P′ is isomorphic to K′⊕P.”

**Paper or page:** [Homological Local, Proposition 4.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “We have pd(M) ≤ n if any projective resolution ⋯ → P₁ → P₀ → M → 0 breaks off at the nth stage: that is, the kernel of Pₙ₋₁ → Pₙ₋₂ is projective.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Koszul complexes as tensor products makes them iterated cones

**Remember:** Adding one element takes the cone of multiplication by that element.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 18G35. arXiv math.KT. Level 3: graduate.

**Definition.** For elements f₁,…,fᵣ of a commutative ring R, their Koszul complex is the tensor product over R of the complexes R → R. The i-th differential multiplies by fᵢ from degree one to degree zero (our own).

**Problem.** The Koszul complex on f₁, …, fᵣ is the mapping cone of multiplication by fᵣ on the Koszul complex on f₁, …, fᵣ₋₁.

**How the definition helps.** Tensoring any complex with the two-term complex for f is exactly the cone of multiplication by f, so the result is immediate (our own). The work goes into matching the tensor product with the exterior-power definition, including signs (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.28.8](https://stacks.math.columbia.edu/tag/0629). It says: “is isomorphic to the cone of the map of complexes”

**Sources:** none listed. No primary source with a working link was found.

### Fine multigrading turns Betti numbers of face rings into simplicial homology

**Remember:** Each set of vertices carries its own piece of homology.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13F55, 05E45. arXiv math.AC, math.CO. Level 3: graduate.

**Definition.** For a simplicial complex Δ on n vertices over a field k, set S = k\[x₁,…,xₙ\]. Its face ring k\[Δ\] is S modulo the squarefree monomials corresponding to nonfaces. Give xⱼ degree eⱼ and define β(i,b) = dimₖ Torᵢˢ(k\[Δ\],k)ᵦ (our own).

**Problem.** Only squarefree degrees occur, that is, subsets W of the vertices. Let Δ restricted to W be the faces lying inside W. Then β(i, W) is the dimension of its reduced homology in degree \|W\| − i − 1 (Hochster's formula).

**How the definition helps.** In squarefree degree W, the Koszul basis indexes complementary faces of Δ restricted to W, and its differential becomes simplicial coboundary (our own). The degree shift gives reduced cohomology in degree \|W\| − i − 1, with the same dimension as reduced homology (our own). In nonsquarefree degree, pairing terms along a repeated variable contracts the complex, since removing one copy preserves monomial support (our own).

**Wikipedia:** [Stanley–Reisner ring](https://en.wikipedia.org/wiki/Stanley%E2%80%93Reisner_ring). It says: “The face ring k\[Δ\] is a multigraded algebra over k all of whose components with respect to the fine grading have dimension at most 1. Consequently, its homology can be studied by combinatorial and geometric methods.”

**Paper or page:** [Betti Cones of Stanley-Reisner Ideals](https://arxiv.org/abs/2401.05962v1). It says: “For any integers 0≤i≤n and d, we have β<sub>i,d</sub>(I\_Δ) = ∑<sub>U∈(V choose d)</sub> dim\_𝕂 H̃<sub>d−i−2</sub>(Δ<sub>U</sub>) where (V choose d) denotes the subsets of V of size d.”

**Sources:** none listed. No primary source with a working link was found.

### Graded free resolutions make Hilbert series a polynomial over (1 − t)ⁿ

**Remember:** Resolve, then add up free pieces with signs.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D40. arXiv math.AC. Level 3: graduate.

**Definition.** For a finitely generated graded module M over S = k\[x₁,…,xₙ\], take k to be a field and each variable to have degree one. Its Hilbert series has coefficient dimₖ M<sub>d</sub> at tᵈ (our own).

**Problem.** Let M be a finitely generated graded S-module generated in degrees ≥ 0. Then its Hilbert series equals K(t)/(1 − t)ⁿ for a polynomial K(t) with integer coefficients. Hence the dimension of the degree-d part of M agrees with a polynomial in d for all large d (Hilbert's theorem).

**How the definition helps.** A finite graded free resolution writes the Hilbert series of M as an alternating sum of series of the form tʲ/(1 − t)ⁿ. The syzygy theorem supplies this finite resolution. The numerator is K(t) = Σ (−1)ⁱ βᵢⱼ tʲ, where βᵢⱼ counts degree-j generators in step i (our own). Expanding 1/(1 − t)ⁿ as a series then gives the Hilbert polynomial (our own).

**Wikipedia:** [Hilbert series and Hilbert polynomial](https://en.wikipedia.org/wiki/Hilbert_series_and_Hilbert_polynomial). It says: “Every graded module M over a graded regular ring R has a graded free resolution because of the Hilbert syzygy theorem”

**Paper or page:** [Algebra, Proposition 10.58.7](https://stacks.math.columbia.edu/tag/00K1). It says: “If S₊ is generated by elements of degree 1, then this function is a numerical polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Koszul differentials defined as derivations give exact complexes for nonzero functionals

**Remember:** Wedging with a vector of value one undoes the differential.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 15A75. arXiv math.AC. Level 3: graduate.

**Definition.** For a linear functional φ on V, its Koszul differential is the degree −1 derivation of the exterior algebra extending φ. Thus d(a ∧ b) = d(a) ∧ b + (−1)ᵏa ∧ d(b) for homogeneous a of degree k (our own).

**Problem.** Let φ be a nonzero linear functional on a vector space over a field. Then its Koszul complex has zero homology in every degree. That is, every x with d(x) = 0 equals d(y) for some y.

**How the definition helps.** With this definition, one short identity shows that every cycle is a boundary. Choose v with φ(v) = 1; the product rule gives d(v ∧ x) + v ∧ d(x) = x for every x. So if d(x) = 0, then x = d(v ∧ x). With the coordinate formula, the same identity needs an index computation (these steps are our own).

**nLab:** [Koszul complex](https://ncatlab.org/nlab/show/Koszul+complex). It says: “The differential can be obtained from the faces of the obvious Koszul semi-simplicial R-module”

**Sources:** none listed. No primary source with a working link was found.

### Koszul resolutions make Ext of a regular quotient an exterior algebra

**Remember:** For a regular ideal, Ext is the exterior algebra on the normal module.

*True by definition. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D07. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An ideal I of a commutative ring R is Koszul-regular if locally it admits a finite generating sequence whose Koszul complex resolves R/I. Its normal module is N = Hom<sub>R</sub>/I(I/I²,R/I) (our own).

**Problem.** If I is Koszul-regular, then the Yoneda product, which splices extensions, makes Extⁱ(R/I, R/I) isomorphic to the i-th exterior power of N for every i. Likewise Torᵢ(R/I, R/I) is the i-th exterior power of I/I².

**How the definition helps.** Locally the Koszul resolution computes both groups, and its differentials vanish after tensoring with R/I or applying Hom into R/I (our own). The terms give exterior powers of the conormal module for Tor and its dual for Ext (our own). Koszul contractions represent the degree-one Ext classes, and composing contractions induces the exterior product (our own). These canonical identifications agree on overlaps (our own).

**Paper or page:** [Duality, Lemma 48.15.4](https://stacks.math.columbia.edu/tag/0BQY). It says: “If ℐ is Koszul-regular (Divisors, Definition) then composition on RHom\_𝒪Y(𝒪X, 𝒪X) defines isomorphisms ∧ⁱ(Ext¹\_𝒪Y(𝒪X, 𝒪X)) → Extⁱ\_𝒪Y(𝒪X, 𝒪X)”

**Sources:** none listed. No primary source with a working link was found.

### Koszul-regular sequences do not depend on order, unlike regular sequences

**Remember:** The Koszul complex forgets the order, so Koszul-regularity does too.

*Rules out counterexamples. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C40. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A sequence is regular if it generates a proper ideal and each element acts injectively modulo its predecessors. It is Koszul-regular if its Koszul complex has zero homology in every positive degree (our own).

**Problem.** Koszul-regularity of a sequence does not depend on its order, but regularity can. On a locally Noetherian scheme, regular and Koszul-regular ideal sheaves are the same.

**How the definition helps.** Permuting the generators permutes the Koszul basis and preserves the complex up to isomorphism (our own). In k\[x,y,z\], the sequence x,y(1−x),z(1−x) is regular by successive reduction (our own). Starting with y(1−x),z(1−x) fails because the surviving class of y kills the second element (our own). The local Noetherian equivalence theorem identifies the two classes of ideal sheaves.

**Paper or page:** [Stacks Project, Divisors, Lemma 31.20.8](https://stacks.math.columbia.edu/tag/063I), [Stacks Project, Divisors, Lemma 31.20.1](https://stacks.math.columbia.edu/tag/063C), [Stacks Project, Cotangent, Lemma 92.14.2](https://stacks.math.columbia.edu/tag/08SJ). It says: “In particular, on a locally Noetherian scheme the notions of regular, Koszul-regular, H₁-regular, or quasi-regular ideal sheaf all agree.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 063I (Divisors, Lemma 31.20.8)](https://stacks.math.columbia.edu/tag/063I)
- [The Stacks Project Authors, The Stacks Project, Tag 063C (Divisors, Lemma 31.20.1)](https://stacks.math.columbia.edu/tag/063C)
- [The Stacks Project Authors, The Stacks Project, Tag 08SJ (Cotangent, Lemma 92.14.2)](https://stacks.math.columbia.edu/tag/08SJ)

### Measuring depth by Koszul homology makes it ignore finite ring extensions

**Remember:** Koszul homology sees depth through any set of generators.

*True by definition. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C15. arXiv math.AC. Level 3: graduate.

**Definition.** Take a nonzero finite module M over a Noetherian local ring and elements x₁,…,xₙ of its maximal ideal. Their Koszul depth on M is n minus the largest i with Hᵢ(K(x₁,…,xₙ) ⊗ M) ≠ 0 (our own).

**Problem.** Let R → S be a local map of Noetherian local rings. For every nonzero S-module M finite over both rings, its depths over R and S agree (our own). For the zero module both depths are infinite by convention (our own).

**How the definition helps.** Koszul homology on generators of 𝔪 is the same whether M is viewed over R or over S (our own). Over S, these elements and the annihilator of M generate an ideal with radical 𝔫, since M/𝔪M has finite length (our own). Depth on M depends only on that radical, which ends the proof (our own). The work goes into depth-sensitivity, not into tracking regular sequences from R inside S.

**Wikipedia:** [Koszul complex](https://en.wikipedia.org/wiki/Koszul_complex). It says: “then every maximal M-regular sequence in I has length n - m (in particular, they all have the same length).”

**Paper or page:** [Homological Local, Proposition 2.10](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let (R, 𝔪) → (S, 𝔫) be a morphism of noetherian local rings. Suppose M is a finitely generated S-module, which is also finitely generated as an R-module. Then depthR M = depthS M.”

**Sources:** none listed. No primary source with a working link was found.

### Measuring projective dimension by Tor with the field proves Hilbert's syzygy theorem

**Remember:** Resolve k instead of M, and n steps suffice.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** Let S be a standard graded polynomial ring over a field k. For a nonzero finite graded S-module M, its projective dimension is the least length of a projective resolution, or infinity. The minimal resolution criterion identifies it with sup{i ≥ 0 ∣ Torᵢˢ(M,k) ≠ 0}, using k as the graded residue field (our own).

**Problem.** Every finitely generated graded module over k\[x₁,…,xₙ\] has a graded free resolution of length at most n (Hilbert's syzygy theorem). The bound is sharp, since k itself has projective dimension n.

**How the definition helps.** Resolving k by its length-n Koszul resolution gives Torᵢˢ(M,k) = 0 for i &gt; n (our own). The minimal graded resolution therefore stops by degree n (our own). Tensoring the Koszul resolution with k kills its differentials and leaves a nonzero top term, proving sharpness (our own).

**Wikipedia:** [Hilbert's syzygy theorem](https://en.wikipedia.org/wiki/Hilbert%27s_syzygy_theorem). It says: “Hilbert's syzygy theorem may be restated as: the global dimension of k\[x₁,…,xₙ\] is n.”

**Paper or page:** [Lower bounds on Betti numbers](https://arxiv.org/abs/2108.05871v1), [Algebra, Proposition 10.114.2](https://stacks.math.columbia.edu/tag/00OQ). It says: “Let R = k\[x₁, …, xₙ\] be a polynomial ring in n variables over a field k. If M is a finitely generated graded R-module, then M has a finite free resolution of length at most n.”

**Sources:** none listed. No primary source with a working link was found.

### Mumford's shifted vanishing condition makes regularity pass to all higher twists

**Remember:** Each higher cohomology vanishes one twist earlier than the last.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A coherent sheaf F on projective space ℙⁿ over a field is m-regular when Hⁱ(ℙⁿ, F(m − i)) = 0 for every i &gt; 0. The shift by −i is the point of the definition: the i-th cohomology must vanish i twists below m.

**Problem.** If F is m-regular, then F is d-regular for every d ≥ m. Moreover, for d ≥ m the sheaf F(d) is generated by its global sections and Hⁱ(ℙⁿ, F(d)) = 0 for all i ≥ 1 (Castelnuovo–Mumford).

**How the definition helps.** The shifted vanishings make hyperplane restriction preserve m-regularity, by the restriction exact sequence (our own). Choose a hyperplane avoiding the associated points after extending the field if needed (our own). Hyperplane induction in the Castelnuovo–Mumford lemma propagates regularity and gives surjective multiplication by linear forms in degrees ≥ m (our own). Global generation descends from sufficiently high twists through those multiplication maps (our own).

**Wikipedia:** [Castelnuovo–Mumford regularity](https://en.wikipedia.org/wiki/Castelnuovo%E2%80%93Mumford_regularity). It says: “If a coherent sheaf is r-regular then F(r) is generated by its global sections.”

**Paper or page:** [J. Alper, Stacks and Moduli, Chapter 2.3 Regularity, Proposition 2.3](https://sites.math.washington.edu//~jarod/moduli.pdf), [J. Alper, Stacks and Moduli, Chapter 2.3 Regularity, Lemma 2.2](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “For d ≥ m, F(d) is globally generated and Hⁱ(ℙⁿ, F(d)) = 0 for i ≥ 1.”

**Sources:**

- [D. Mumford, Lectures on Curves on an Algebraic Surface, Annals of Mathematics Studies 59, Princeton University Press, 1966.](https://doi.org/10.1515/9781400882069)

### Ranks and ideals of minors make exactness of free complexes checkable

**Remember:** A free complex is exact when its minors are deep enough.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C15. arXiv math.AC. Level 3: graduate.

**Definition.** For a matrix over a nonzero commutative ring, its determinantal rank r is the greatest order of a nonzero minor. Count the empty minor as 1, and let I(φ) denote the ideal generated by all r-rowed minors of the matrix of φ (our own).

**Problem.** Let R be a Noetherian local ring and 0 → Fₑ → … → F₀ a complex of finite free modules with maps φᵢ. It is exact except at F₀ exactly when two conditions hold for each i (Buchsbaum–Eisenbud). First, φᵢ has rank Fᵢ − rank Fᵢ₊₁ + rank Fᵢ₊₂ − …; second, I(φᵢ) is R or contains a regular sequence of length i.

**How the definition helps.** Ranks and ideals of minors are polynomial conditions on the matrix entries, so exactness becomes a statement about the depth of ideals. The case of one map is McCoy's theorem. It says φ is injective exactly when its rank equals the rank of its source and I(φ) has zero annihilator. The work goes into localizing at the primes that contain some I(φᵢ), and into the depth lemma for exact sequences (our own).

**Paper or page:** [Algebra, Proposition 10.102.9](https://stacks.math.columbia.edu/tag/00N1), [More Algebra, Lemma 15.15.6](https://stacks.math.columbia.edu/tag/00MX). It says: “I(φᵢ) = R, or I(φᵢ) contains a regular sequence of length i.”

**Sources:**

- [D. A. Buchsbaum and D. Eisenbud, What makes a complex exact?, Journal of Algebra 25 (1973), 259–268.](https://doi.org/10.1016/0021-8693(73)90044-6)

### Defining the cotangent complex by resolutions makes it Ω for polynomial algebras

**Remember:** A polynomial algebra is its own free resolution.

*True by definition.* MSC 13D03 ((Co)homology of commutative rings and algebras (e.g., Hochschild, André-Quillen, cyclic, dihedral, etc.)), 18G31. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** For a ring map A → B, choose a cofibrant simplicial polynomial A-algebra resolution P → B. The cotangent complex is the normalized chain complex of the simplicial B-module with terms Ω(Pₙ/A) ⊗<sub>P</sub>ₙ B (our own).

**Problem.** If B is a polynomial algebra over A, then L(B/A) is quasi-isomorphic to the Kähler differentials Ω(B/A) placed in degree zero.

**How the definition helps.** The constant simplicial algebra with value B is already a resolution by polynomial algebras, so the definition computes Ω(B/A) directly. The work moves to the theorem that any two such resolutions give the same answer (Stacks Project, Cotangent, tag 08PS). That theorem rests on the homotopy theory of simplicial algebras.

**Wikipedia:** [Cotangent complex](https://en.wikipedia.org/wiki/Cotangent_complex). It says: “We can take the resolution of Spec(A\[x1,…,xn\]) to be the identity map, and then it is clear that the cotangent complex is the same as the Kähler differentials.”

**Paper or page:** [Cotangent, tag 08QH](https://stacks.math.columbia.edu/tag/08QH), [Cotangent, tag 08PS](https://stacks.math.columbia.edu/tag/08PS). It says: “If B is a polynomial algebra over the ring A, then L<sub>B</sub>/A is quasi-isomorphic to Ω<sub>B</sub>/A\[0\].”

**Sources:**

- [Luc Illusie, Complexe Cotangent et Déformations I, Lecture Notes in Mathematics 239, Springer (1971)](https://doi.org/10.1007/BFb0059052)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Deriving Kähler differentials extends the Jacobi–Zariski sequence to a triangle

**Remember:** Derive the differentials, and the three-term sequence never loses exactness.

*Makes the theorem clean to state or prove.* MSC 13D03 ((Co)homology of commutative rings and algebras (e.g., Hochschild, André-Quillen, cyclic, dihedral, etc.)), 18G31. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** For rings A → B, choose a cofibrant simplicial polynomial A-algebra resolution P → B. Define L(B/A) by normalizing the simplicial module Ω(P/A) ⊗<sub>P</sub> B (our own).

**Problem.** For ring maps A → B → C, put X = L(B/A) ⊗ᴸ<sub>B</sub> C. There is a distinguished triangle X → L(C/A) → L(C/B) → X\[1\] (our own). Its homology sequence ends with Ω(B/A) ⊗<sub>B</sub> C → Ω(C/A) → Ω(C/B) → 0 (our own).

**How the definition helps.** Compatible free resolutions give a degreewise split sequence of differentials, yielding the cotangent transitivity triangle after normalization (our own). Degree-zero homology identifies with ordinary differentials, and negative homology vanishes (our own). The triangle’s long exact sequence therefore ends in the classical sequence (our own).

**Wikipedia:** [Cotangent complex](https://en.wikipedia.org/wiki/Cotangent_complex). It says: “This sequence is exact on the left if the morphism f is smooth.”

**Paper or page:** [Cotangent, tag 08QX](https://stacks.math.columbia.edu/tag/08QX). It says: “Let A → B → C be ring maps. There is a canonical distinguished triangle L<sub>B</sub>/A ⊗ᴸ<sub>B</sub> C → L<sub>C</sub>/A → L<sub>C</sub>/B → L<sub>B</sub>/A ⊗ᴸ<sub>B</sub> C\[1\] in D(C).”

**Sources:**

- [Luc Illusie, Complexe Cotangent et Déformations I, Lecture Notes in Mathematics 239, Springer (1971)](https://doi.org/10.1007/BFb0059052)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Minimal resolutions reveal projective dimension

**Remember:** Over the residue field, all differentials vanish.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** A minimal free resolution over a Noetherian local ring has every matrix entry of every differential between free terms in the maximal ideal. For finite modules, this amounts to choosing a minimal generating set at each step (our own).

**Problem.** For a nonzero finite module, projective dimension equals the largest degree with nonzero Tor against the residue field, or infinity if the degrees are unbounded.

**How the definition helps.** Tensoring a minimal resolution with the residue field kills every differential (our own). Thus the dimension of Tor in each degree equals the rank of the corresponding term (our own). Nonzero Tor forbids a shorter resolution, and vanishing above degree n makes the minimal resolution stop there (our own).

**Paper or page:** [Homological Local, Corollary 4.7.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Then pd(M) is the largest integer n such that Torₙ(M, k) ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Serre's definition of regular rings by global dimension shuts out Nagata's example

**Remember:** A uniform bound on resolutions forbids infinite dimension.

*Rules out counterexamples.* MSC 13D05 (Homological dimension and commutative rings), 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** In Serre’s terminology, a commutative Noetherian ring is regular if some integer n bounds the projective dimensions of all its modules. The least such n is its global dimension.

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

**Remember:** The last nonzero Tor against the residue field detects projective dimension.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** For a nonzero finite module M over a Noetherian local ring with residue field k, projective dimension equals sup{i ≥ 0 ∣ Torᵢ(M,k) ≠ 0}. An unbounded set gives infinite projective dimension (our own).

**Problem.** Every finitely generated module over a Noetherian local ring R has projective dimension at most pd k. Hence the global dimension of R equals the projective dimension of its residue field.

**How the definition helps.** Tor can be computed by resolving k instead of M, so Torᵢ(M, k) = 0 for i &gt; pd k (our own). The Tor definition then gives pd M ≤ pd k at once. The work goes into the Tor description of projective dimension, which uses Nakayama's lemma and minimal resolutions. Passing to all modules uses the fact that global dimension is detected on cyclic modules R/I.

**Paper or page:** [Homological Local, Corollary 4.8](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Lemma 10.109.12](https://stacks.math.columbia.edu/tag/065T). It says: “Suppose there exists n such that Torₙ₊₁(k, k) = 0. Then every finitely generated R-module has a finite free resolution of length at most n.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Gorenstein by finite injective dimension makes regular rings Gorenstein

**Remember:** Finite global dimension bounds every injective dimension, including that of R.

*True by definition.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13H10, 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative Noetherian local ring is Gorenstein if it has a finite injective resolution as a module over itself. A commutative Noetherian ring is Gorenstein if every localization at a prime is Gorenstein (our own).

**Problem.** Every regular local ring is Gorenstein, and so is every regular ring.

**How the definition helps.** Serre’s theorem gives every regular local ring finite global dimension (our own). Above that bound every Ext group vanishes, so R itself has finite injective dimension (our own). Applying this at every prime gives the global assertion (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “a Gorenstein local ring is a commutative Noetherian local ring R with finite injective dimension as an R-module.”

**Paper or page:** [Dualizing, Lemma 47.21.3.](https://stacks.math.columbia.edu/tag/0AWX). It says: “A regular local ring is Gorenstein. A regular ring is Gorenstein.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)

### Flat base change lets Ext be computed over the larger ring

**Remember:** Flatness keeps resolutions exact, and the adjunction does the rest.

*True by definition.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 18G15. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A ring map R → R′ is flat if tensoring with R′ preserves exact sequences of R-modules. Extension of scalars is left adjoint to restriction of scalars (our own).

**Problem.** Let R → R′ be flat, M an R-module and N′ an R′-module. Then Extⁱ over R′ of (M ⊗ R′, N′) is isomorphic to Extⁱ over R of (M, N′) for all i ≥ 0.

**How the definition helps.** Flatness preserves the exactness of a free resolution after extension of scalars (our own). Its terms remain free, and the tensor–Hom adjunction identifies the two Hom complexes term by term (our own). Taking cohomology gives the stated isomorphism (our own).

**Paper or page:** [Algebra, Lemma 10.73.1.](https://stacks.math.columbia.edu/tag/087N). It says: “Given a flat ring map R → R′, an R-module M, and an R′-module N′ the natural map Extⁱ<sub>R</sub>′(M ⊗<sub>R</sub> R′, N′) → Extⁱ<sub>R</sub>(M, N′) is an isomorphism for i ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Flatness of the ring map makes Tor commute with base change

**Remember:** A flat ring map carries free resolutions to free resolutions.

*Rules out counterexamples.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 18G15. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A ring map R → R′ is flat when tensoring over R with R′ keeps exact sequences of R-modules exact. Base change sends an R-module M to the R′-module M ⊗ R′.

**Problem.** Let R → R′ be flat and let M,N be R-modules. For every i ≥ 0, Torᵢᴿ(M,N) ⊗<sub>R</sub> R′ ≅ Torᵢᴿ′(M ⊗<sub>R</sub> R′,N ⊗<sub>R</sub> R′). This can fail without flatness (our own).

**How the definition helps.** Flatness carries a free resolution of M to a free resolution after base change (our own). Associativity identifies the resulting tensor complex with the original tensor complex extended to R′ (our own). Flatness commutes with homology, giving the formula (our own). For ℤ → ℤ/2 and M = N = ℤ/2, degree one gives ℤ/2 on the left and zero on the right (our own).

**Paper or page:** [Algebra, Lemma 10.76.1.](https://stacks.math.columbia.edu/tag/00M8). It says: “Given a flat ring map R → R′ and R-modules M, N the natural R-module map Torᵢᴿ(M, N) ⊗<sub>R</sub> R′ → Torᵢᴿ′(M ⊗<sub>R</sub> R′, N ⊗<sub>R</sub> R′) is an isomorphism for all i.”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes are exactly the compact objects of the derived category

**Remember:** Compact means maps out commute with direct sums and perfect means bounded finite projectives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A complex of R-modules is perfect if it is quasi-isomorphic to a bounded complex of finite projective modules. An object K of a triangulated category is compact if Hom(K, −) commutes with arbitrary direct sums. D(R) is the derived category of R-modules.

**Problem.** For any ring R, a complex is perfect exactly when it is a compact object of D(R).

**How the definition helps.** R is a compact generator of D(R), since maps from its shifts compute cohomology (our own). The compact generator theorem identifies the compact objects with the smallest thick subcategory containing R (our own). This subcategory consists of the perfect complexes by the characterization using shifts, cones and direct summands of finite free complexes (our own).

**Paper or page:** [Stacks Project, More Algebra, Proposition 15.79.3](https://stacks.math.columbia.edu/tag/07LT). It says: “Let R be a ring. For an object K of D(R) the following are equivalent (1) K is perfect, and (2) K is a compact object of D(R).”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 07LT (More Algebra, Proposition 15.79.3)](https://stacks.math.columbia.edu/tag/07LT)
- [A. Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/s0894-0347-96-00174-9)

### Pseudo-coherence equals finite cohomology over Noetherian rings and works beyond them

**Remember:** Resolve downward from a top degree using finite free modules at every step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 13D02, 13E15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An R-complex is pseudo-coherent if it is quasi-isomorphic to a bounded-above complex of finite free R-modules.

**Problem.** Over a Noetherian ring R, a complex is pseudo-coherent exactly when it lies in D⁻(R) and all its cohomology modules are finitely generated.

**How the definition helps.** Over a Noetherian ring, kernels and quotients of finite modules are finite, so such a resolution has finite cohomology (our own). Conversely, start at the highest nonzero cohomology degree and choose finitely many cycles generating it (our own). Mapping in finite free generators kills that degree, and the cone still has finite cohomology by Noetherianity (our own). Repeating downward constructs the required resolution (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.65.17](https://stacks.math.columbia.edu/tag/066E). It says: “Let R be a Noetherian ring. Then … (2) A complex of R-modules K is pseudo-coherent if and only if K ∈ D⁻(R) and Hⁱ(K) is a finite R-module for all i.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 066E (More Algebra, Lemma 15.65.17)](https://stacks.math.columbia.edu/tag/066E)

### Depth two keeps punctures connected

**Remember:** When sections extend across the puncture, so do idempotents.

*Rules out counterexamples.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** For a Noetherian local ring R with maximal ideal 𝔪, depth is the least i with Hⁱ\_𝔪(R) ≠ 0. These groups derive the functor taking each module to its elements annihilated by some power of 𝔪 (our own).

**Problem.** The punctured spectrum of a Noetherian local ring of depth at least two is connected.

**How the definition helps.** The depth test makes the first two local cohomology groups vanish, so every section on the puncture extends uniquely (our own). A disconnection would give a section equal to one on one part and zero on the other (our own). Its extension would satisfy e² = e, but a local ring has only zero and one as such elements (our own). In depth one, removing the closed point of k\[\[x,y\]\]/(xy) separates the two axes (our own).

**Paper or page:** [Local Cohomology, Lemma 51.3.1.](https://stacks.math.columbia.edu/tag/0BLR). It says: “Let $A$ be a Noetherian local ring of depth $\\geq 2$. Then the punctured spectra of $A$, $A<sup>h$</sup>, and $A<sup>sh</sup>$ are connected.”

**Sources:** none listed. No primary source with a working link was found.

### Gorenstein rings dualize themselves, so local duality uses Ext into R

**Remember:** Gorenstein means R already has finite injective dimension, so R dualizes itself.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13H10, 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R is Gorenstein if its injective dimension over itself is finite. A dualizing complex D has bounded finite cohomology and finite injective dimension, and the canonical map R → RHom<sub>R</sub>(D,D) is an isomorphism (our own).

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

**Definition.** A nonzero finite module over a Noetherian local ring is Cohen–Macaulay when its depth equals its dimension. Local cohomology Hⁱ\_𝔪 derives the functor taking a module to the elements killed by some power of the maximal ideal 𝔪 (our own).

**Problem.** Hⁱₘ(M) is zero below the depth and above the dimension, and nonzero at both ends. So M is Cohen–Macaulay exactly when Hⁱₘ(M) is nonzero for only one i.

**How the definition helps.** Local cohomology turns the two numbers in the definition into the two ends of one range of nonzero degrees. So their equality becomes the statement that only one degree survives. The lower end comes from the description of depth by Ext modules and the formula of local cohomology as a colimit of Ext modules. The upper end is Grothendieck's vanishing and nonvanishing theorems, where the real work lies.

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “These two bounds together yield a characterisation of Cohen–Macaulay modules over local rings: they are precisely those modules where Hⁿ<sub>m</sub>(M) vanishes for all but one n.”

**Paper or page:** [Dualizing, Lemma 47.11.1.](https://stacks.math.columbia.edu/tag/0AVZ), [Local Cohomology, Lemma 51.4.7.](https://stacks.math.columbia.edu/tag/0DXC), [Local Cohomology, Lemma 51.4.9.](https://stacks.math.columbia.edu/tag/0DXE). It says: “the smallest integer i such that H<sup>i<sub>I</sub></sup>(M) is nonzero.”

**Sources:**

- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)

### Local cohomology measures extension failure

**Remember:** Degree zero detects sections that disappear, and degree one detects those that cannot extend.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** For X = Spec A, a closed subset Z and U = X ∖ Z, consider the derived restriction map RΓ(X,M̃) → RΓ(U,M̃). Define Hⁱ<sub>Z</sub>(M) as degree i cohomology of its mapping cone shifted by −1 (our own).

**Problem.** Let Z consist of the primes containing a finitely generated ideal of a ring A. Restrict sections of a module on the prime spectrum of A to the complement of Z. The kernel is degree zero local cohomology, and the cokernel is degree one local cohomology.

**How the definition helps.** The cone places the restriction map between degree zero and degree one local cohomology in an exact sequence (our own). A module on the whole affine spectrum has no higher cohomology, so the sequence ends there (our own). Over a Noetherian ring, a comparison theorem identifies this construction with deriving the operation of taking elements killed by ideal powers (our own).

**Paper or page:** [Local Cohomology, Lemma 51.2.2.](https://stacks.math.columbia.edu/tag/0DWR). It says: “given $M$ there is an exact sequence $$ 0 \\to H<sup>0<sub>Z</sub></sup>(M) \\to M \\to H<sup>0</sup>(U, \\mathcal{F}) \\to H<sup>1<sub>Z</sub></sup>(M) \\to 0 $$”

**Sources:** none listed. No primary source with a working link was found.

### Regularity defined by local cohomology never rises when finite-length torsion is removed

**Remember:** Regularity is read off local cohomology, and torsion only touches degree zero.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D02. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** For a finite graded module M over a standard polynomial ring over a field, let 𝔪 be the ideal of variables. Set end(N) = sup{d ∣ N<sub>d</sub> ≠ 0}, with end(0) = −∞. Define reg(M) = supᵢ(end(Hⁱ\_𝔪(M)) + i).

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

**How the definition helps.** Evaluation at 1 identifies Hom(A/aⁿ,M) with the elements killed by aⁿ (our own). Taking their filtered union gives Γₐ(M). Apply this description in each degree of an injective resolution (our own). Exactness of filtered colimits lets cohomology pass through the colimit and gives the claimed Ext formula (our own).

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “and for this reason, the local cohomology of an R-module M agrees with a direct limit of Ext modules”

**Paper or page:** [Dualizing, Lemma 47.8.2.](https://stacks.math.columbia.edu/tag/0954). It says: “For any object K of D(A) we have RΓ<sub>I</sub>(K) = hocolim RHom<sub>A</sub>(A/Iⁿ, K) in D(A) and R<sup>qΓ<sub>I</sub></sup>(K) = colim<sub>n</sub> Ext<sub>A</sub><sup>q</sup>(A/Iⁿ, K) as modules for all q ∈ Z.”

**Sources:**

- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)
- [A. Grothendieck, SGA 2, Cohomologie locale des faisceaux cohérents et théorèmes de Lefschetz locaux et globaux, Documents Mathématiques 4, SMF, 2005](https://arxiv.org/abs/math/0511279)

### Čech length bounds local cohomology

**Remember:** No term past the last generator means no cohomology there.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** For generators f₁,…,fᵣ of an ideal, the augmented Čech complex takes M in degree zero. In degree j &gt; 0 it sums the localizations of M at products indexed by j-element subsets of the generators. Its differential is the alternating sum of the natural localization maps (our own).

**Problem.** Over a Noetherian ring, local cohomology in an ideal generated by r elements vanishes in degrees above r for every module.

**How the definition helps.** The Čech complex stops at degree r, so there is nothing to compute above it (our own). The comparison theorem identifies this finite complex with the derived functor of ideal torsion (our own).

**Paper or page:** [Local Cohomology, Lemma 51.4.3.](https://stacks.math.columbia.edu/tag/0DX9). It says: “cd(A, I) is at most equal to the number of generators of I”

**Sources:** none listed. No primary source with a working link was found.

### Coherent rings give finitely presented modules degreewise finite free resolutions

**Remember:** A finitely presented kernel lets you repeat the same finite free step.

*True by definition. Confidence: medium.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13D02. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative ring is coherent if every map between finitely presented modules has finitely presented kernel. A finitely presented module is a cokernel of a map between finite free modules (our own).

**Problem.** Over a coherent ring, every finitely presented module has a free resolution with finite rank in each degree.

**How the definition helps.** With this definition, each kernel in the resolution is again finitely presented, so the next step is again finite. Map a finite free module onto the given module; its kernel is finitely presented, so a finite free module maps onto it (our own). Repeating this step builds the resolution (our own). The work moves to proving that the condition on ideals forces such kernels to be finitely presented (our own).

**nLab:** [coherent ring](https://ncatlab.org/nlab/show/coherent+ring). It says: “A ring is left coherent iff every finitely presented left module has a resolution by finitely presented projective left modules.”

**Sources:** none listed. No primary source with a working link was found.

### Finite presentation makes flat modules projective and locally free

**Remember:** Flat plus finitely presented equals finite locally free.

*Rules out counterexamples.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13C11, 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** An R-module is finitely presented if it is the cokernel of a map between finite free R-modules. It is flat if tensoring with it preserves injections (our own).

**Problem.** A module is finite projective exactly when it is finitely presented and flat. Finite projective modules are the same as finite locally free modules.

**How the definition helps.** Over a local ring a finite flat module is free, and finite presentation extends a basis to a neighborhood (our own). The finite locally free criterion then identifies these modules with summands of finite free modules (our own). Such summands are flat and finitely presented (our own). Over an infinite product of fields, quotienting by the finitely supported sequences gives a cyclic flat module without finite presentation (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.83.1](https://stacks.math.columbia.edu/tag/058R), [Stacks Project, Algebra, Lemma 10.78.2](https://stacks.math.columbia.edu/tag/00NX). It says: “Let M be an R-module. Then M is finite projective if and only if M is finitely presented and flat.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 058R (Algebra, Lemma 10.83.1)](https://stacks.math.columbia.edu/tag/058R)
- [The Stacks Project Authors, The Stacks Project, Tag 00NX (Algebra, Lemma 10.78.2)](https://stacks.math.columbia.edu/tag/00NX)

### Finitely presented modules are exactly those whose maps commute with filtered colimits

**Remember:** Finitely presented objects meet a filtered colimit at some finite stage.

*True by definition.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 18A30. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** An R-module N is finitely presented if it is the cokernel of a map between two finite free R-modules.

**Problem.** For any filtered system of R-modules Mᵢ, put M = colim Mᵢ. An R-module N is finitely presented exactly when colim Hom<sub>R</sub>(N,Mᵢ) → Hom<sub>R</sub>(N,M) is bijective for every such system. In particular, every map from N to M then factors through a stage.

**How the definition helps.** Finitely many generator images and relations lift together to one stage, and equality on the generators holds at one common stage (our own). Conversely, every module is a filtered colimit of finitely presented modules obtained by retaining finite sets of generators and relations (our own). Applying the stated property to its identity makes N a retract of one stage (our own). Retracts of finitely presented modules are finitely presented (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.11.4](https://stacks.math.columbia.edu/tag/0G8P), [Stacks Project, Algebra, Lemma 10.127.3](https://stacks.math.columbia.edu/tag/00QO), [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let N be an R-module. The following are equivalent (1) N is a finitely presented R-module, (2) for any filtered colimit M = colim Mᵢ of R-modules the map colim Hom(N, Mᵢ) → Hom(N, M) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0G8P (Algebra, Lemma 10.11.4)](https://stacks.math.columbia.edu/tag/0G8P)
- [The Stacks Project Authors, The Stacks Project, Tag 00QO (Algebra, Lemma 10.127.3)](https://stacks.math.columbia.edu/tag/00QO)
- [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf)

### Being Dedekind is a local property and survives integral closure

**Remember:** Dedekind domains are Noetherian and integrally closed, with every nonzero prime maximal.

*Makes the theorem clean to state or prove.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A Dedekind domain is a Noetherian integral domain that is integrally closed in its fraction field and in which every nonzero prime ideal is maximal. Here integrally closed means that every fraction that is a root of a monic polynomial over the ring lies in the ring.

**Problem.** Let R be a Dedekind domain with fraction field K, and let L be a finite extension of K. Then the integral closure of R in L is again a Dedekind domain. Also, a Noetherian domain is Dedekind exactly when all its localizations at maximal ideals are.

**How the definition helps.** The defining conditions pass to integral closures in finite extensions and to localizations, so the class is closed under the operations of number theory. The integral closure step uses the Krull–Akizuki theorem, and starting from ℤ it shows that every ring of integers of a number field is Dedekind. Principal ideal domains fail the first property: ℤ is one, but its integral closure ℤ\[√−5\] in ℚ(√−5) is not (our own).

**Wikipedia:** [Dedekind domain](https://en.wikipedia.org/wiki/Dedekind_domain). It says: “By the 20th century, algebraists and number theorists had come to realize that the condition of being a PID is rather delicate, whereas the condition of being a Dedekind domain is quite robust.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Prüfer domains by flatness makes tensor products of torsion-free modules torsion-free

**Remember:** Tensoring with a flat module keeps multiplication by a scalar injective.

*True by definition.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** A Prüfer domain is an integral domain over which every torsion-free module is flat (our own). Torsion-free means multiplication by each nonzero scalar is injective, and flat means tensoring preserves injections (our own).

**Problem.** Over a Prüfer domain, the tensor product of two torsion-free modules is torsion-free.

**How the definition helps.** With this definition, one factor is flat, so tensoring keeps multiplication by a scalar injective. Let M and N be torsion-free, and let a be a nonzero scalar; multiplication by a on N is injective (our own). Tensoring with the flat module M keeps it injective, and the result is multiplication by a on M ⊗ N (our own). The work moves to proving that this definition agrees with the usual one.

**Wikipedia:** [Prüfer domain](https://en.wikipedia.org/wiki/Pr%C3%BCfer_domain). It says: “If M and N are torsion-free R-modules then their tensor product M ⊗ᵣ N is torsion-free.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional exponents give every branch of an algebraic curve a series

**Remember:** Each Puiseux series uses one denominator and has a lowest possible exponent.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 32S05, 30B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Puiseux series over a field k is a formal Laurent series in x¹⁄ⁿ for some positive integer n. Equivalently, its exponents lie in (1/n)ℤ and have a lower bound (our own).

**Problem.** Every local y-branch of a nonzero complex polynomial equation P(x,y)=0 admits a convergent Laurent expansion in some x¹⁄ⁿ near zero (our own). Over an algebraically closed field of characteristic zero, the field of formal Puiseux series is algebraically closed.

**How the definition helps.** For y² = x, ordinary integer exponents miss both roots, while denominator two includes them (our own). The Newton–Puiseux theorem proves that a single denominator suffices for each algebraic branch in characteristic zero (our own). Its analytic form gives convergence for complex algebraic branches (our own).

**Wikipedia:** [Puiseux series](https://en.wikipedia.org/wiki/Puiseux_series). It says: “Using modern terminology, Puiseux's theorem asserts that the set of Puiseux series over an algebraically closed field of characteristic 0 is itself an algebraically closed field, called the field of Puiseux series.”

**Sources:** none listed. No primary source with a working link was found.

### Left-finite support makes Novikov series closed under multiplication

**Remember:** Below any bound there are finitely many terms, so each product coefficient is finite.

*Rules out counterexamples. Confidence: medium.* MSC 13F25 (Formal power series rings), 12J25, 16W60. arXiv math.AC, math.SG. Level 3: graduate.

**Definition.** For a totally ordered abelian group G and commutative ring k, a Novikov series is a function G → k with left-finite support. This means that below each bound in G only finitely many values are nonzero. Add pointwise and multiply by convolution, summing f(x)g(y) over x + y = z for each z.

**Problem.** The Novikov ring is a ring: the product of two left-finite functions has finite sums as coefficients and is again left-finite.

**How the definition helps.** For nonempty supports, let a and b be their least elements, which exist by left-finiteness (our own). For x+y ≤ z, contributors satisfy x ≤ z−b and y ≤ z−a, leaving finitely many pairs (our own). This proves both coefficient finiteness and left-finiteness of the product, with empty supports giving zero (our own). Without the restriction, two all-ones functions on ℤ already give an infinite sum at zero (our own).

**nLab:** [Novikov field](https://ncatlab.org/nlab/show/Novikov+field). It says: “Left-finiteness of the support of f and g implies that the above sum is finite.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing any ordered value group gives every valuation ring a valuation

**Remember:** Let the values be any ordered group, and every valuation ring has one.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation ring D of K contains x or x⁻¹ for every x ∈ K×. A valuation is a homomorphism v from K× to a totally ordered abelian group, extended by v(0) = ∞. It must satisfy v(x+y) ≥ min(v(x),v(y)) for all x,y (our own).

**Problem.** Every valuation ring D comes from a valuation, with D the set of elements of value at least 0.

**How the definition helps.** On K×/D× set \[x\] ≥ \[y\] when x/y ∈ D, a total order by the inverse test (our own). The quotient homomorphism has nonnegative locus D after adjoining zero (our own). If x/y ∈ D then (x+y)/y ∈ D whenever x+y ≠ 0, giving the sum inequality (our own).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “take Γ to be the quotient K×/D× of the unit group of K by the unit group of D, and take ν to be the natural projection.”

**Sources:**

- [Wolfgang Krull, Allgemeine Bewertungstheorie, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.160)

### Discrete valuation rings need Noetherianity

**Remember:** A principal maximal ideal measures order when its powers intersect in zero.

*Rules out counterexamples.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** A discrete valuation ring is a Noetherian local domain whose maximal ideal has one nonzero generator. A local ring has one maximal ideal, and Noetherian means every ideal has finitely many generators.

**Problem.** In a discrete valuation ring, each nonzero element is a unit times a power of a generator of the maximal ideal. This can fail in a valuation ring that is not Noetherian, even when its maximal ideal has one generator.

**How the definition helps.** Krull’s intersection theorem gives each nonzero element a greatest dividing power of the maximal ideal generator (our own). The remaining factor lies outside the maximal ideal, hence is a unit (our own). In k((u))((t)), order first by t-exponent and then by the u-exponent of its leading coefficient (our own). The nonnegative valuation ring has maximal ideal (u), yet every power of u divides t (our own).

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “When the value group is isomorphic to ℤ, the ring O is called a discrete valuation ring.”

**Paper or page:** [Algebra, Lemma 10.119.7.](https://stacks.math.columbia.edu/tag/00PD). It says: “The ring A is a Noetherian local domain with maximal ideal 𝔪 generated by a single nonzero element.”

**Sources:** none listed. No primary source with a working link was found.

### The divisibility test makes quotients of valuation rings by primes valuation rings

**Remember:** Lift two elements, compare divisibility, and reduce the divisibility relation.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain in which, of any two elements, one divides the other. This is the same as asking that x or 1/x lies in the ring for each nonzero fraction x. The usual definition takes the elements of a field where a valuation is nonnegative.

**Problem.** The quotient of a valuation ring by a prime ideal is a valuation ring.

**How the definition helps.** With the divisibility test, the property passes to every quotient that is a domain (our own). Lift two elements of A/𝔭 to A, where one divides the other, and reduce (our own). The quotient is a domain because 𝔭 is prime. With the value-based definition, one would first have to build a valuation for the quotient (our own).

**Paper or page:** [Lemma 10.50.9.](https://stacks.math.columbia.edu/tag/088Y). It says: “For any prime ideal 𝔭 ⊂ A the quotient A/𝔭 is a valuation ring.”

**Sources:** none listed. No primary source with a working link was found.

### The inverse test makes valuation ring ideals linearly ordered

**Remember:** One of two nonzero elements divides the other.

*True by definition.* MSC 13F30 (Valuation rings), 13A18. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring A of a field K is a subring containing x or x⁻¹ for every nonzero x in K.

**Problem.** In a valuation ring, any two ideals are comparable: one contains the other.

**How the definition helps.** Take a ∈ I outside J and any nonzero b ∈ J (our own). Since a/b ∈ A would imply a ∈ J, the inverse test gives b/a ∈ A (our own). Hence b ∈ I, so J ⊆ I whenever I is not contained in J (our own).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “Another way to characterize the valuation rings of a field F is that valuation rings D of F have F as their field of fractions, and their ideals are totally ordered by inclusion”

**Paper or page:** [More Algebra, Lemma 15.125.2](https://stacks.math.columbia.edu/tag/0ASN), [Algebra, Lemma 10.50.4](https://stacks.math.columbia.edu/tag/00IB), [Algebra, Lemma 10.50.5](https://stacks.math.columbia.edu/tag/052K). It says: “Let A be a valuation ring with maximal ideal 𝔪 and fraction field K. Let x ∈ K. Then either x ∈ A or x⁻¹ ∈ A or both.”

**Sources:**

- [The Stacks Project, Lemma 10.50.4, Tag 00IB](https://stacks.math.columbia.edu/tag/00IB)
- [The Stacks Project, Lemma 10.50.5, Tag 052K](https://stacks.math.columbia.edu/tag/052K)
- [The Stacks Project, Lemma 15.125.2, Tag 0ASN](https://stacks.math.columbia.edu/tag/0ASN)

### The x-or-1/x test makes composite valuation rings valuation rings

**Remember:** Test an element first, then test its residue if it is a unit.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring of a field contains x or x⁻¹ for every nonzero field element x. Given a valuation ring A′ with residue field K and a valuation ring A of K, their composite C is the preimage of A.

**Problem.** The composite ring C is a valuation ring.

**How the definition helps.** For nonzero x in the fraction field of A′, choose x or x⁻¹ in A′ (our own). If the chosen element is a nonunit, its residue is zero and it belongs to C (our own). Otherwise both residues exist and are inverses, so A contains one of them and C contains its lift (our own).

**Paper or page:** [Lemma 10.50.10.](https://stacks.math.columbia.edu/tag/088Z). It says: “Let A′ be a valuation ring with residue field K. Let A be a valuation ring with fraction field K.”

**Sources:** none listed. No primary source with a working link was found.

### The x-or-1/x test survives directed limits of valuation rings

**Remember:** Test each fraction at the stage that contains its numerator and denominator.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring is a domain in which, for every pair of elements, one divides the other. Equivalently, it contains x or x⁻¹ for every nonzero element of its fraction field (our own).

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

**How the definition helps.** Valuation rings are integrally closed by the inverse test (our own). For missing integral x, divide its degree-n monic equation by xⁿ⁻¹ to express x using x⁻¹ in the ring (our own). Conversely, for nonintegral x the ideal (x⁻¹) in A\[x⁻¹\] is proper by the monic equation test (our own). Localize at a maximal ideal containing it and apply the valuation domination theorem to obtain a valuation ring excluding x (our own).

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

**Remember:** δ records the Frobenius lift’s difference from the pth power, divided formally by p.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 14F30. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** Fix a prime p and set C(X,Y) = (Xᵖ+Yᵖ−(X+Y)ᵖ)/p in ℤ\[X,Y\]. A δ-ring is a commutative ring with a map δ satisfying δ(0)=δ(1)=0 and δ(x+y)=δ(x)+δ(y)+C(x,y) for all x,y. It also satisfies δ(xy)=xᵖδ(y)+yᵖδ(x)+pδ(x)δ(y) for all x,y (our own).

**Problem.** In a δ-ring, φ(x) = xᵖ + pδ(x) is a ring endomorphism that lifts the Frobenius map x ↦ xᵖ of A/p. If A has no p-torsion, δ-structures on A correspond exactly to such lifts.

**How the definition helps.** The two rules for δ are exactly what makes φ additive and multiplicative, so φ is a ring map by expanding. The usual alternative is to take a Frobenius lift φ itself as the structure. For a ring with no p-torsion, the two agree: set δ(x) = (φ(x) − xᵖ)/p to go back. Using δ instead of φ keeps the rules meaningful when p is a zero divisor (our own remark).

**nLab:** [δ-ring](https://ncatlab.org/nlab/show/%CE%B4-ring). It says: “If (R,δ) is a δ-ring, then the map φ: R→R given by φ(x)=xᵖ+pδ(x) is a ring homomorphism that lifts the Frobenius endomorphism on R/p.”

**Wikipedia:** [P-derivation](https://en.wikipedia.org/wiki/P-derivation). It says: “When the ring R is p-torsion free the correspondence is a bijection.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)

### Ghost coordinates make big Witt vectors over rational algebras a ring

**Remember:** In ghost coordinates, all operations are coordinate by coordinate.

*True by definition.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC. Level 3: graduate.

**Definition.** For a commutative ℚ-algebra A, a big Witt vector is a sequence (a₁,a₂,…) in A. Its n-th ghost component sums d·a<sub>d</sub>⁽ⁿ⁄ᵈ⁾ over all positive divisors d of n. Define Witt operations by adding and multiplying ghost components coordinatewise (our own).

**Problem.** Big Witt vectors of a rational algebra satisfy the ring axioms.

**How the definition helps.** With the ghost definition, the ring axioms come from the ring of sequences with entrywise operations. Over ℚ the ghost map is a bijection, since one solves for each aₙ in turn by dividing by n (our own). The nLab extends this to rings without additive torsion by embedding A in A ⊗ ℚ. For general rings, the work moves to the integer polynomials and the identities between them (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the addition and multiplication is taken to component-wise addition and multiplication, so since this is the standard ring structure we know W(A) is a ring.”

**Sources:** none listed. No primary source with a working link was found.

### Limits and colimits of δ-rings are computed on the underlying rings

**Remember:** δ-rings are rings with a section to W₂, so limits come for free.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 18A30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Fix a prime p and let W₂(A) be the length-two p-typical Witt ring. A δ-structure on A is a ring map s ∶ A → W₂(A) with first component equal to the identity on A (our own).

**Problem.** The forgetful functor from δ-rings to commutative rings creates all limits and all colimits. For example, a product or a tensor product of δ-rings is a δ-ring in a unique compatible way.

**How the definition helps.** For a colimit A, the stage sections compose with W₂(Aᵢ) → W₂(A) to induce a unique section on A (our own). For limits the sections combine because the underlying pair functor preserves limits and Witt operations act naturally (our own). In each case the section equation and the universal mapping property follow from uniqueness in the underlying ring diagram (our own).

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “The functor U creates limits and colimits”

**Paper or page:** [Derived δ-Rings and Relative Prismatic Cohomology](https://arxiv.org/abs/2303.17447). It says: “preserves small limits and colimits.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [A. Holeman, Derived δ-Rings and Relative Prismatic Cohomology, arXiv preprint 2303.17447 (2023)](https://arxiv.org/abs/2303.17447)

### Perfect p-complete δ-rings are exactly Witt vectors of perfect rings

**Remember:** Perfect plus p-complete means W of a perfect 𝔽ₚ-algebra.

*Rules out counterexamples.* MSC 13F35 (Witt vectors and related rings), 13A35. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** Fix a prime p. A δ-ring A is perfect if its Frobenius lift φ is bijective, and p-adically complete if the canonical map A → limₙ A/pⁿA is bijective.

**Problem.** The functor W gives an equivalence from perfect rings of characteristic p to perfect, p-adically complete δ-rings, with inverse A ↦ A/p. Completeness is needed: the integers ℤ with φ the identity are a perfect δ-ring that is not of this form.

**How the definition helps.** Perfectness forces p-torsion to vanish because φ kills p-torsion and is injective (our own). It also induces bijective Frobenius modulo p (our own). The strict p-ring theorem now identifies A functorially with W(A/p), respecting Frobenius and hence δ (our own). Dropping completeness admits ℤ with identity lift, whereas W(𝔽ₚ) = ℤₚ (our own).

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “Its image then consists of those δ-rings that are perfect (in the sense that the associated map φ is an isomorphism) and whose underlying ring is p-adically complete.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)

### Perfect residue fields give Witt reduction modulo p

**Remember:** Perfect residue fields make the Witt shift the same as divisibility by p.

*Rules out counterexamples. Confidence: medium.* MSC 13F35 (Witt vectors and related rings), 11S85. arXiv math.NT. Level 3: graduate.

**Definition.** Let W(k) be the ring of p-typical Witt vectors, infinite sequences with operations given by the Witt polynomials. Reduction takes the first entry. A perfect field of characteristic p is one where raising to the pth power is bijective.

**Problem.** For a perfect field k of characteristic p, reduction identifies W(k)/pW(k) with k. In particular, for finite k this recovers the residue field of the unramified p-adic integer ring W(k). The identification fails for k = 𝔽ₚ(t).

**How the definition helps.** Reduction takes the first coordinate, and the Witt identities give p·a = (0,a₀ᵖ,a₁ᵖ,…) in characteristic p (our own). Perfection therefore makes pW(k) exactly the kernel of the surjective reduction map (our own). For k = 𝔽ₚ(t), the kernel contains (0,t,0,…), which has no such preimage (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the Verschiebung morphism coincides with the shift (a₀, a₁, …) ↦ (0, a₀, a₁, …)”

**Sources:** none listed. No primary source with a working link was found.

### Witt vectors are the cofree δ-ring on a ring

**Remember:** Map a δ-ring into R, and it lifts uniquely to W(R).

*Makes the theorem clean to state or prove.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** Fix a prime p and let W₂ denote the length-two p-typical Witt ring functor. A δ-ring is a commutative ring A with a section A → W₂(A) of first-coordinate projection. A δ-ring map is a ring map commuting with those sections (our own).

**Problem.** For every δ-ring A and every ring R, each ring map A → R lifts to a unique δ-ring map A → W(R). So W is right adjoint to the forgetful functor from δ-rings to rings.

**How the definition helps.** The cofree Witt vector theorem identifies ring maps A → R with δ-ring maps A → W(R) via first-coordinate projection. This natural bijection is exactly the right adjoint property (our own). Its existence uses the Witt vector theorem also for rings with p-torsion (our own).

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “One then has a forgetful functor U: CRing\_δ → CRing whose right adjoint identifies with the functor W of Witt vectors.”

**Paper or page:** [Graded loopspaces in mixed characteristics and de Rham-Witt algebra](https://arxiv.org/abs/2209.03483), [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “The Witt vectors admits a natural δ-structure, the forgetful functor δ-CRing<sub>k</sub> → CRing<sub>k</sub> admits W as a right adjoint.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [L. Monier, Graded loopspaces in mixed characteristics and de Rham-Witt algebra, PhD thesis, arXiv 2209.03483 (2022)](https://arxiv.org/abs/2209.03483)

### Excellent rings shut out Nagata's badly behaved Noetherian rings

**Remember:** Excellent means regular formal fibers, open regular loci, and universal catenarity.

*Rules out counterexamples.* MSC 13F40 (Excellent rings). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring A is excellent if each prime localization maps flatly to its completion with geometrically regular fibers. Every finite type A-algebra must have open regular locus and be catenary. Catenary means that saturated prime chains between fixed endpoints all have the same length (our own).

**Problem.** Let A be an excellent ring. If A is a domain, its integral closure is a finitely generated A-module. If A is a normal local ring, its completion is normal, and the singular points of every finitely generated A-algebra form a closed set.

**How the definition helps.** Geometrically regular completion maps preserve normality, excluding normal local examples with nonnormal completion (our own). The open regular locus condition gives closed singular locus directly (our own). The theorem that excellent rings are Nagata gives finite normalization, excluding Nagata’s domains with nonfinite normalization (our own).

**Wikipedia:** [Excellent ring](https://en.wikipedia.org/wiki/Excellent_ring), [Nagata ring](https://en.wikipedia.org/wiki/Nagata_ring), [Catenary ring](https://en.wikipedia.org/wiki/Catenary_ring). It says: “At one time it seemed that the class of Noetherian rings might be an answer to this problem, but Masayoshi Nagata and others found several strange counterexamples showing that in general Noetherian rings need not be well-behaved”

**Sources:**

- [A. Grothendieck, Éléments de géométrie algébrique IV, seconde partie, Publications Mathématiques de l'IHÉS 24 (1965)](https://doi.org/10.1007/BF02684322)

### Finite global dimension makes localizations of regular local rings regular

**Remember:** Regular local rings have uniformly bounded resolutions, and localization preserves that bound.

*True by definition.* MSC 13H05 (Regular local rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is regular when the minimal number of generators of its maximal ideal equals its Krull dimension. Serre’s criterion characterizes this by a uniform finite bound on the projective dimensions of all its modules (our own).

**Problem.** The localization of a regular local ring at a prime ideal is a regular local ring.

**How the definition helps.** View any R\_𝔭-module as an R-module and resolve it within the global dimension bound (our own). Localizing preserves projectivity and exactness, and the module localizes to itself (our own). Thus R\_𝔭 has finite global dimension and is regular by Serre’s criterion.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring), [Global dimension](https://en.wikipedia.org/wiki/Global_dimension). It says: “It is easy to show that the property of having finite global dimension is preserved under localization, and consequently that localizations of regular local rings at prime ideals are again regular.”

**Sources:**

- [M. Auslander and D. A. Buchsbaum, Homological dimension in local rings, Transactions of the American Mathematical Society 85 (1957) 390–405](https://doi.org/10.1090/S0002-9947-1957-0086822-7)

### Regular local rings make smoothness independent of the embedding

**Remember:** Smoothness belongs to the local ring, not to the equations.

*True by definition.* MSC 13H05 (Regular local rings), 14B05. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A Noetherian local ring is regular if its Krull dimension equals the minimum number of generators of its maximal ideal.

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

**Definition.** A commutative Noetherian local ring is Gorenstein if it has finite injective dimension as a module over itself. A Noetherian ring is Gorenstein if all its localizations at primes are Gorenstein (our own).

**Problem.** Every Gorenstein ring is Cohen–Macaulay.

**How the definition helps.** Locally, R has finite cohomology and RHom<sub>R</sub>(R,R) ≅ R, so finite injective dimension makes R a dualizing complex (our own). The dualizing module criterion then makes R Cohen–Macaulay because this complex occupies one degree (our own). Applying the criterion at every prime gives the global statement (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “A Gorenstein ring is in particular Cohen–Macaulay.”

**Paper or page:** [Dualizing, Lemma 47.21.2.](https://stacks.math.columbia.edu/tag/0DW8), [Dualizing, Lemma 47.20.3.](https://stacks.math.columbia.edu/tag/0DW5). It says: “A Gorenstein ring is Cohen-Macaulay.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)

### Regular quotients preserve Gorensteinness

**Remember:** Use the same final quotient to test type one.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Gorenstein if a regular sequence in its maximal ideal leaves a zero-dimensional quotient with one-dimensional socle. Regular means each element acts injectively after quotienting by the preceding elements. The socle consists of elements killed by the maximal ideal, and its dimension is taken over the residue field.

**Problem.** Quotienting a Noetherian local ring by a nonzero divisor in its maximal ideal preserves and reflects the Gorenstein property.

**How the definition helps.** The socle criterion lets both rings use the same Artinian quotient (our own). In a Gorenstein ring, Cohen–Macaulayness extends the given regular element to a full regular sequence, whose quotient has simple socle (our own). Dropping its first element gives a testing sequence downstairs (our own). Conversely, lift a testing sequence and prefix the given nonzerodivisor to obtain one upstairs (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “Equivalently, R has simple socle as an R-module.”

**Paper or page:** [Dualizing, Lemma 47.21.6.](https://stacks.math.columbia.edu/tag/0BJJ). It says: “Then A is Gorenstein if and only if B is Gorenstein.”

**Sources:**

- [Hyman Bass, On the ubiquity of Gorenstein rings (1963)](https://doi.org/10.1007/bf01112819)

### Testing every prime makes Cohen–Macaulay rings stay Cohen–Macaulay after localization

**Remember:** Each prime localization of the new ring was already a test of the original.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)), 13B30. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring is Cohen–Macaulay if depth R\_𝔭 = dim R\_𝔭 for every prime 𝔭. Local depth is the maximum length of a regular sequence in the maximal ideal (our own).

**Problem.** If R is Cohen–Macaulay and S is a multiplicatively closed subset, then S⁻¹R is Cohen–Macaulay.

**How the definition helps.** Every prime of S⁻¹R corresponds to a prime 𝔭 of R disjoint from S (our own). Its local ring is R\_𝔭, where the original depth equality already holds (our own).

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

**Definition.** In a d-dimensional Noetherian local ring, a system of parameters consists of d elements generating an ideal with radical the maximal ideal. The parameter criterion calls the ring Cohen–Macaulay if every system of parameters is a regular sequence (our own).

**Problem.** In a Noetherian Cohen–Macaulay local ring R, the multiplicity of a parameter ideal I equals the length of R/I.

**How the definition helps.** Serre's formula writes the multiplicity as an alternating sum of lengths of Koszul homology, and a regular sequence kills every term except R/I (our own). Without the Cohen–Macaulay condition the claim fails (our own). In k\[\[t,u,v\]\]/(u²,uv,v²,tu,tv), with k a field, the parameter t gives a quotient of length 3 (our own). The lengths modulo tⁿ are n + 2, so the multiplicity is 1 (our own).

**Paper or page:** [Intersection, Theorem 43.15.5.](https://stacks.math.columbia.edu/tag/0AZZ). It says: “Then $$ e<sub>I</sub>(M, r) = \\sum (-1)<sup>i\\text{length}<sub>A</sub></sup> H<sub>i</sub>(K\_\\bullet(f<sub>1</sub>, \\ldots, f<sub>r</sub>) \\otimes<sub>A</sub> M) $$”

**Sources:** none listed. No primary source with a working link was found.

### Serre's Tor formula fixes intersection multiplicity where length overcounts

**Remember:** Higher Tor terms correct the overcount of the naive length.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13H15 (Multiplicity theory and related topics), 13D07, 14C17. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** At the generic point of a proper intersection component, let A be the ambient regular local ring and I,J the two defining ideals. Serre’s intersection multiplicity is the sum over i ≥ 0 of (−1)ⁱ length<sub>A</sub> Torᵢᴬ(A/I,A/J) (our own).

**Problem.** With Serre's multiplicities, Bézout's theorem holds for all subvarieties of projective space that meet properly. The product of the degrees equals the sum, over the components of the intersection, of multiplicity times degree. The naive length can make this fail when a subvariety is not Cohen–Macaulay.

**How the definition helps.** The Tor sum counts each component at its generic point, as required by the intersection-theoretic Bézout theorem (our own). Against the diagonal plane x=z, y=w, the union of the coordinate planes (x,y) and (z,w) has ordinary intersection length three (our own). Additivity of intersection cycles gives one from each plane, totaling two (our own). The identification of the local intersection coefficient with Serre’s Tor sum supplies the general formula (our own).

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “When V and W can be moved into a transverse position, this homological formula produces the expected answer.”

**Sources:**

- [J.-P. Serre, Algèbre locale, multiplicités, Lecture Notes in Mathematics 11, Springer, 1965 (third edition 1975).](https://doi.org/10.1007/978-3-540-37123-6)

### Serre's Tor sum corrects intersection multiplicity where length overcounts

**Remember:** Higher Tors correct the length when one variety is not Cohen–Macaulay.

*Rules out counterexamples.* MSC 13H15 (Multiplicity theory and related topics), 13D07, 14C17. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** For finite modules M,N over a regular local ring A with M ⊗ N of finite length, define χ(M,N) = ∑ᵢ₌₀ᵈ (−1)ⁱ length<sub>A</sub> Torᵢᴬ(M,N). Here d = dim A bounds projective dimensions (our own).

**Problem.** Serre's multiplicity is additive on short exact sequences. It equals the length of A/(I + J) when both quotients are Cohen–Macaulay and their dimensions add to dim A.

**How the definition helps.** The long exact Tor sequence gives additivity by cancellation of alternating lengths (our own). For complementary Cohen–Macaulay quotients with finite-length tensor product, the proper-intersection Tor vanishing theorem kills every positive Tor (our own). The remaining degree-zero term is A/(I+J) (our own). For the union of coordinate planes against the diagonal plane in four-space, naive length gives three while χ gives two (our own).

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number), [Serre's multiplicity conjectures](https://en.wikipedia.org/wiki/Serre%27s_multiplicity_conjectures). It says: “When V and W can be moved into a transverse position, this homological formula produces the expected answer.”

**Sources:**

- [J.-P. Serre, Local Algebra, Springer Monographs in Mathematics, Springer, 2000 (translation of Algèbre locale, multiplicités, 1965)](https://doi.org/10.1007/978-3-662-04203-8)

### Early local rings had to be Noetherian, which keeps Krull's intersection theorem

**Remember:** The historical local ring had one maximal ideal and finitely generated ideals.

*Rules out counterexamples. Confidence: medium.* MSC 13H99 (Local rings and semilocal rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** In the historical convention, a commutative local ring has exactly one maximal ideal and every ideal is finitely generated.

**Problem.** Krull's intersection theorem: in a commutative Noetherian local ring with maximal ideal m, the intersection of all powers mⁿ is 0. So the powers of m separate the elements of the ring, and the ring embeds in its completion.

**How the definition helps.** For N = ⋂ₙ 𝔪ⁿ, Artin–Rees gives N = 𝔪N, and N is finitely generated by Noetherianity (our own). Nakayama gives N = 0, which is precisely injectivity of the completion map (our own). Among smooth real germs, exp(−1/x²), extended by zero at zero, is nonzero but smoothly divisible by every xⁿ (our own). This places it in every maximal ideal power (our own).

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “Before about 1960 many authors required that a local ring be (left and right) Noetherian, and (possibly non-Noetherian) local rings were called quasi-local rings.”

**Sources:**

- [W. Krull, Dimensionstheorie in Stellenringen, Journal für die reine und angewandte Mathematik 179 (1938) 204](https://doi.org/10.1515/crll.1938.179.204)

### Excluding the zero ring makes local rings those with one closed point

**Remember:** Local means exactly one closed point, and the empty spectrum has none.

*Rules out counterexamples.* MSC 13H99 (Local rings and semilocal rings), 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A local ring is a ring with exactly one maximal ideal. The zero ring, where 0 = 1, has no maximal ideal, so it is not local.

**Problem.** A ring is local exactly when its spectrum has exactly one closed point. It is also local exactly when it is not the zero ring and, for each x, x or 1 − x is a unit.

**How the definition helps.** Closed points correspond to maximal ideals, so their number gives the first equivalence (our own). With one maximal ideal, x and 1−x cannot both be nonunits since their sum is 1 (our own). Two distinct maximal ideals are comaximal, yielding nonunits x and 1−x in the respective ideals (our own). The zero ring passes the unit test but has no maximal ideal (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.18.3](https://stacks.math.columbia.edu/tag/00E9). It says: “The following are equivalent: (1) R is a local ring, (2) Spec(R) has exactly one closed point, … (4) R is not the zero ring and for every x ∈ R either x or 1 − x is invertible”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 00E9 (Algebra, Lemma 10.18.3)](https://stacks.math.columbia.edu/tag/00E9)

### Residue sequences show p-adic integers modulo pⁿ are integers modulo pⁿ

**Remember:** Reduction modulo a power is just reading that term.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 11S99. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** For a prime p, a p-adic integer is a sequence of residues xₖ ∈ ℤ/pᵏℤ for k ≥ 1. Each xₖ₊₁ must reduce to xₖ modulo pᵏ, and ring operations act coordinatewise (our own).

**Problem.** Write ℤₚ for the ring of p-adic integers. For each n ≥ 1, the quotient ℤₚ/pⁿℤₚ is the ring ℤ/pⁿℤ of integers modulo pⁿ.

**How the definition helps.** Projection to xₙ is onto because any integer gives a compatible sequence (our own). If xₙ = 0, dividing xₙ₊ₖ by pⁿ gives a well-defined residue modulo pᵏ for each k ≥ 1 (our own). These compatible residues give a p-adic integer whose product with pⁿ is x (our own). Conversely, every such product projects to zero (our own).

**nLab:** [p-adic integer](https://ncatlab.org/nlab/show/p-adic+integer). It says: “More abstractly, it is the limit lim ℤ/(pⁿ), in the category of (unital) rings”

**Sources:** none listed. No primary source with a working link was found.

### Henselian as finite algebras split makes finite local extensions henselian

**Remember:** Henselian means every finite algebra splits as a product of local rings.

*True by definition.* MSC 13J15 (Henselian rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring R is henselian if every commutative R-algebra that is finite as an R-module is a finite product of local rings (our own).

**Problem.** If R is a henselian local ring and S is a finite R-algebra that is a local ring, then S is henselian.

**How the definition helps.** With the splitting definition, the new ring passes the test because the old ring does (our own). A finite algebra over S is also finite over R, so it is a finite product of local rings (our own). The work moves to Stacks Lemma 10.153.3, which proves that the splitting test agrees with root lifting.

**Paper or page:** [Lemma 10.153.4.](https://stacks.math.columbia.edu/tag/04GH). It says: “If R → S is a finite ring map and S is local, then S is a henselian local ring and R → S is a (finite) local ring map.”

**Sources:** none listed. No primary source with a working link was found.

### Defining differentials through derivations gives their transitivity sequence at once

**Remember:** To vanish on the middle ring, kill all differentials coming from it.

*True by definition. Confidence: medium.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** For a B-algebra C, a B-derivation is an additive map to a C-module that vanishes on B and satisfies the product rule. The universal derivation d ∶ C → Ω(C/B) factors every B-derivation uniquely through a C-linear map out of Ω(C/B) (our own).

**Problem.** Let A → B → C be ring maps. Then Ω(C/B) is Ω(C/A) divided by the C-submodule generated by the differentials db of elements b of B.

**How the definition helps.** For every C-module N, maps from the stated quotient to N correspond to A-derivations vanishing on the image of B (our own). Those are exactly the B-derivations, so the quotient has the universal property of Ω(C/B) (our own).

**Paper or page:** [Algebra, Lemma 10.131.7.](https://stacks.math.columbia.edu/tag/00RS). It says: “Let A → B → C be ring maps. Then there is a canonical exact sequence C ⊗ʙ Ω(B/A) → Ω(C/A) → Ω(C/B) → 0 of C-modules.”

**Sources:** none listed. No primary source with a working link was found.

### Defining differentials through derivations makes them commute with base change

**Remember:** A derivation on the changed algebra is fixed by its values on the original.

*True by definition.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** For an R-algebra S, Ω(S/R) carries an additive map d vanishing on R and satisfying d(ab)=a·d(b)+b·d(a). Every such map to any S-module factors uniquely through d by an S-linear map (our own).

**Problem.** Let R → R′ and R → S be ring maps, and let S′ be the tensor product S ⊗ R′ over R. Then Ω(S/R) ⊗ R′ is isomorphic to Ω(S′/R′).

**How the definition helps.** For each S′-module N, restriction identifies R′-derivations S′ → N with R-derivations S → N (our own). Its inverse sends D to the derivation defined by s ⊗ r′ ↦ r′D(s) (our own). By tensor–Hom adjunction both proposed modules therefore represent the same functor (our own).

**Paper or page:** [Algebra, Lemma 10.131.12.](https://stacks.math.columbia.edu/tag/00RV), [Algebra, Lemma 10.131.13.](https://stacks.math.columbia.edu/tag/00RW). It says: “Then the canonical map defined above induces an isomorphism Ω(S/R) ⊗ᵣ R′ = Ω(S′/R′).”

**Sources:** none listed. No primary source with a working link was found.

### Kähler C∞-differentials of smooth functions are exactly the smooth 1-forms

**Remember:** Require the chain rule for all smooth functions, not just sums and products.

*Rules out counterexamples.* MSC 13N05 (Modules of differentials), 58A10, 58A40. arXiv math.DG, math.AC. Level 3: graduate.

**Definition.** For a C∞-ring A and A-module N, a smooth derivation D ∶ A → N satisfies the smooth chain rule. For every smooth f ∶ ℝⁿ → ℝ and tuple a ∈ Aⁿ, require D(f(a)) = ∑ᵢ(∂ᵢf)(a)D(aᵢ). Its universal module receives a derivation through which every such D factors uniquely by an A-linear map (our own).

**Problem.** For a smooth manifold M, the Kähler C∞-differentials of C∞(M) identify canonically with the smooth sections of its cotangent bundle (Dubuc and Kock, our own).

**How the definition helps.** The smooth chain rule forces D(exp x) = exp(x)D(x), an identity ordinary algebraic derivations can violate (our own). In Euclidean coordinates the rule expresses every differential in terms of the coordinate differentials (our own). The Dubuc–Kock theorem identifies the universal module globally with smooth one-forms (our own).

**nLab:** [Kähler C<sup>∞</sup>-differentials of smooth functions are differential 1-forms](https://ncatlab.org/nlab/show/K%C3%A4hler+C%5E%E2%88%9E-differentials+of+smooth+functions+are+differential+1-forms), [Kähler differential](https://ncatlab.org/nlab/show/K%C3%A4hler+differential). It says: “However, this is not a defect in the conceptual idea itself, but merely a failure to use the correct formalism.”

**Sources:**

- [E. J. Dubuc, A. Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### Small separating invariant sets force large components in the separating variety

**Remember:** A separating set of m invariants cuts out the separating variety with m equations.

*Makes the theorem clean to state or prove.* MSC 13A50 (Actions of groups on commutative rings; invariant theory), 14L24. arXiv math.RT, math.AC. Level 4: research.

**Definition.** Let a group G act linearly on a vector space V over an algebraically closed field. The separating variety is the set of pairs of points of V on which every invariant polynomial takes the same value. A set of invariant polynomials is separating if it distinguishes every pair that some invariant distinguishes.

**Problem.** If m invariants form a separating set, every irreducible component of the separating variety has dimension at least 2 dim V − m. For simultaneous conjugation on n-tuples of p × p matrices, this gives m ≥ (n − 1)p² + p when n ≥ 3 (our own).

**How the definition helps.** For each separating invariant f, impose f(u)−f(v)=0 on V × V (our own). The separating property says that the m equations cut out exactly the separating variety (our own). Krull’s height theorem bounds each component’s codimension by m (our own). For simultaneous matrix conjugation, the paper’s component dimension bound then yields the stated inequality (our own).

**Paper or page:** [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1). It says: “Its geometry places restrictions on the existence of small separating sets, i.e. sets of invariants which distinguish the same points as the full algebra of invariants.”

**Sources:**

- [Jonathan Elmer, The separating variety for matrix invariants, arXiv:2508.13865 (2025)](https://arxiv.org/abs/2508.13865v1)

### Torsion-free λ-rings are rings with commuting Frobenius lifts

**Remember:** Torsion-free λ-ring: one Frobenius lift for each prime, all commuting.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A99 (General commutative ring theory), 13A35, 19A99. arXiv math.AC, math.KT. Level 4: research.

**Definition.** On a torsion-free commutative ring R, a Frobenius lift at p is an endomorphism ψₚ satisfying ψₚ(x) ≡ xᵖ modulo pR for every x. A commuting family contains one lift for each prime and satisfies ψₚψ<sub>q</sub> = ψ<sub>q</sub>ψₚ for every pair of primes (our own).

**Problem.** On a torsion-free ring, a λ-ring structure is the same as a family of commuting Frobenius lifts ψₚ, one for each prime p (Wilkerson). A ring map between torsion-free λ-rings is a λ-map exactly when it commutes with the ψₚ.

**How the definition helps.** Wilkerson’s theorem reconstructs the unique λ-operations from the commuting lifts, which become its Adams operations (our own). The Newton identities express n·λⁿ recursively in the Adams operations and lower λ-operations (our own). Torsion-freeness permits cancellation of n, so commuting with the lifts forces preservation of every λ-operation (our own). Conversely, Adams operations are integral polynomials in the λ-operations (our own).

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

**Definition.** Let R be a Noetherian normal domain with fraction field K. A finite torsion-free R-module M is reflexive exactly when M equals the intersection of all height-one localizations inside M ⊗ K.

**Problem.** Let two finite reflexive modules span the same vector space over the fraction field of a Noetherian normal domain. Their intersection in that space is reflexive.

**How the definition helps.** The intersection test lets us intersect the two modules before or after testing each height-one prime (our own). Localization preserves finite intersections, and the intersection is finitely generated because the ring is Noetherian (our own). The cited criterion identifies the height-one test with the usual definition, which requires the natural map to the double dual to be invertible (our own).

**Paper or page:** [More Algebra, Lemma 15.23.18.](https://stacks.math.columbia.edu/tag/0AVB). It says: “$M$ is torsion free and $M = \\bigcap\_{\\text{height}(\\mathfrak p) = 1} M<sub>\\mathfrak p</sub>$ where the intersection happens in $M<sub>K</sub> = M \\otimes<sub>R</sub> K$.”

**Sources:** none listed. No primary source with a working link was found.

### Cohen–Macaulay complexes give new proofs of homological conjectures

**Remember:** Require full depth, finite homology, and a degree-zero class surviving derived reduction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules), 13D02, 13D22. arXiv math.AC. Level 4: research.

**Definition.** Let (R, 𝔪, k) be Noetherian local and M an R-complex with bounded homology. Maximal depth requires depth<sub>R</sub> M = dim R and a nonzero map H₀(M) → H₀(k ⊗ᴸ<sub>R</sub> M). A maximal Cohen–Macaulay complex also has finitely generated homology.

**Problem.** If R has a maximal Cohen–Macaulay complex, then the new intersection theorem holds for R. That is, a finite free complex F with H₀(F) ≠ 0 and finite-length homology has length at least dim R.

**How the definition helps.** The maximal-depth intersection theorem applies to F once R admits such a complex (our own). Its depth estimate gives the stated lower bound on the length of F (our own).

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

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 4: research.

**Definition.** A finite module M over a Noetherian local ring is sequentially Cohen–Macaulay if it admits a finite filtration from 0 to M. Its successive quotients must be nonzero Cohen–Macaulay modules of strictly increasing dimensions.

**Problem.** Let M and N be finite modules over a Cohen–Macaulay local ring with a canonical module. Their sum M ⊕ N is sequentially Cohen–Macaulay exactly when both summands are. For nonzero Cohen–Macaulay summands of different dimensions, the sum fails to be Cohen–Macaulay.

**How the definition helps.** The filtration groups summands by dimension (our own). Merging the filtrations proves closure under direct sums (our own). For the converse, the canonical-module Ext criterion tests each dimension separately and passes to direct summands (our own).

**Paper or page:** [On the notion of sequentially Cohen-Macaulay modules](https://arxiv.org/abs/2304.06609v1). It says: “Then, M and N are sequentially Cohen-Macaulay if and only if M ⊕ N is sequentially Cohen-Macaulay.”

**Sources:**

- [Giulio Caviglia, Alessandro De Stefani, Enrico Sbarra, Francesco Strazzanti, On the notion of sequentially Cohen-Macaulay modules, arXiv:2304.06609 (2023), Research in the Mathematical Sciences 9 (2022), Article 40](https://arxiv.org/abs/2304.06609v1)

### Dual cosupport joins exact sequences

**Remember:** Dualize, localize, and take the union.

*True by definition.* MSC 13C60 (Module categories and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** Let E be the injective hull of the residue field of a Noetherian local ring R. The cosupport of an R-module M consists of primes p where Hom<sub>R</sub>(M,E) has nonzero localization at p.

**Problem.** In a short exact sequence, the cosupport of the middle module is the union of the cosupports of the end modules.

**How the definition helps.** The dual definition reduces the result to the union rule for support (our own). Dualizing into an injective module preserves exactness and reverses the arrows (our own). The work lies in showing that localizing the dual detects the same primes as the quotient definition (our own).

**Paper or page:** [On Artinianness of Formal Local Cohomology, Colocalization and Coassociated Primes](https://arxiv.org/abs/1011.4141v3). It says: “If 0 → M′ → M → M″ → 0 is exact, then CoSupp M = CoSupp M′ ∪ CoSupp M″.”

**Sources:**

- [Majid Eghbali, On Artinianness of Formal Local Cohomology, Colocalization and Coassociated Primes (2013)](https://doi.org/10.7146/math.scand.a-15478)

### Matrix factorizations make resolutions over hypersurfaces periodic of period two

**Remember:** Factor f times the identity in both orders, then alternate the matrices modulo f.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C14. arXiv math.AC. Level 4: research.

**Definition.** Let A be regular local with maximal ideal 𝔪, and take 0 ≠ f ∈ 𝔪. A matrix factorization consists of square matrices φ and ψ over A satisfying φψ = ψφ = fI. It is reduced if every entry belongs to 𝔪.

**Problem.** Cokernels identify equivalence classes of reduced factorizations with isomorphism classes of maximal Cohen–Macaulay A/(f)-modules without nonzero free summands. Every finite A/(f)-module has an eventually two-periodic minimal free resolution.

**How the definition helps.** Modulo f, the two products vanish, and Eisenbud’s matrix factorization theorem gives the alternating resolution (our own). Auslander–Buchsbaum gives a length-one A-free resolution for each nonzero maximal Cohen–Macaulay module (our own). Since f kills its cokernel, the presentation matrix admits the complementary factor (our own). High syzygies are maximal Cohen–Macaulay or zero (our own).

**Paper or page:** [ADE Classification of Hypersurface Singularities over Local Rings](https://arxiv.org/abs/2509.15396v1). It says: “Let (A,m) be a be a regular local ring and let r ∈ A be a non unit. Then there there exists a bijection between 𝓜𝓒𝓜(A/⟨r⟩) and equivalence classes of reduced matrix factorizations of r.”

**Sources:**

- [D. Eisenbud, Homological algebra on a complete intersection, with an application to group representations, Transactions of the American Mathematical Society 260 (1980), 35–64.](https://doi.org/10.1090/s0002-9947-1980-0570778-7)

### Weak proregularity makes derived completion agree with completion

**Remember:** Every positive Koszul homology group eventually receives a zero transition map.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** An ideal is weakly proregular if it admits finite generators a₁,…,aᵣ satisfying this test. For all i,n ≥ 1, some m ≥ n makes the transition on i-th Koszul homology from componentwise m-th powers to n-th powers zero.

**Problem.** Let 𝔞 be a weakly proregular ideal. For every complex P of 𝔞-adically flat modules, the map from the derived completion LΛ𝔞(P) to the 𝔞-adic completion Λ𝔞(P) is an isomorphism.

**How the definition helps.** Weak proregularity lets the derived completion comparison theorem apply to unbounded complexes of adically flat modules (our own). The alternative bounded-above hypothesis in the quoted theorem is then unnecessary (our own).

**Paper or page:** [Derived Complete Complexes at Weakly Proregular Ideals](https://arxiv.org/abs/2309.01687v4). It says: “Assume either of these two conditions hold: either the complex P is bounded above, or the ideal 𝔞 is weakly proregular. Then the canonical morphism … LΛ𝔞(P) → Λ𝔞(P) in D(A) is an isomorphism.”

**Sources:**

- [Amnon Yekutieli, Derived Complete Complexes at Weakly Proregular Ideals, arXiv:2309.01687 (2023)](https://arxiv.org/abs/2309.01687v4)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Weak proregularity makes Čech cohomology compute local cohomology

**Remember:** Higher powers eventually map to zero on each positive Koszul homology group.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A finite sequence in a commutative ring is weakly proregular if its componentwise powers satisfy this test. For every i,n ≥ 1, some m ≥ n induces the zero transition on i-th Koszul homology from power m to power n.

**Problem.** For a weakly proregular sequence in any commutative ring, local cohomology is naturally isomorphic to Čech cohomology. Every sequence in a Noetherian ring is weakly proregular, so this includes the classical case.

**How the definition helps.** Proposition 4.4 identifies weak proregularity with effaceability of positive Čech cohomology (our own). Degree zero gives ideal-power torsion, so the universal δ-functor theorem identifies the higher groups with its derived functors (our own).

**Paper or page:** [A note on weakly proregular sequences and local cohomology](https://arxiv.org/abs/2105.07652v2). It says: “In this note, we give an elementary proof of the result given by Schenzel that there are functorial isomorphisms between local cohomology groups and Čech cohomology groups, by using weakly proregular sequences.”

**Sources:**

- [Ryoya Ando, A note on weakly proregular sequences and local cohomology, arXiv:2105.07652 (2021), Moroccan J. Algebra Geom. Appl. 1 (2022), 98-107](https://arxiv.org/abs/2105.07652v2)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Working in the cone of Betti diagrams proves the multiplicity bounds

**Remember:** Betti tables are positive mixtures of pure ones.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D40. arXiv math.AC. Level 4: research.

**Definition.** The Betti diagram of a finite graded module records the number βᵢⱼ of degree-j basis elements in each minimal free resolution step i. The rational cone consists of finite nonnegative rational combinations of these diagrams. A pure diagram has one degree per nonzero step.

**Problem.** Let S/I be a graded Cohen–Macaulay quotient of S = k\[x₁,…,xₙ\] of codimension c. Write tᵢ and Tᵢ for the least and greatest shifts at step i. Its multiplicity lies between (∏ᶜᵢ₌₁ tᵢ)/c! and (∏ᶜᵢ₌₁ Tᵢ)/c!.

**How the definition helps.** The pure decomposition expresses multiplicity divided by β₀ as a weighted average, since both quantities are linear before division (our own). Eisenbud–Schreyer gives pure shifts between tᵢ and Tᵢ (our own). Herzog–Kühl gives each normalized pure multiplicity as the product of its shifts divided by c! (our own). Here β₀ = 1 (our own).

**Paper or page:** [Betti Cones of Stanley-Reisner Ideals](https://arxiv.org/abs/2401.05962v1), [Lim Ulrich sequences and Boij-Söderberg cones](https://arxiv.org/abs/2209.03498v2). It says: “There exist positive rational numbers qᵢ and a chain of decreasing sequences c¹ &lt; ⋯ &lt; cʳ in ℤʰ⁺¹ such that β(M) = q₁ π(c¹)+⋯ + qᵣ π(cʳ).”

**Sources:**

- [D. Eisenbud and F.-O. Schreyer, Betti numbers of graded modules and cohomology of vector bundles, Journal of the American Mathematical Society 22 (2009), 859–888.](https://doi.org/10.1090/s0894-0347-08-00620-6)

### Complete intersection dimension gives Serre's criterion for complete intersections

**Remember:** Allow regular-sequence quotients, and complete intersections behave like regular rings.

*Makes the theorem clean to state or prove.* MSC 13D05 (Homological dimension and commutative rings), 13H10. arXiv math.AC. Level 4: research.

**Definition.** A quasi-deformation of a Noetherian local ring R consists of local maps R → R′ ← Q. The first is flat, and the second is surjective with kernel generated by a regular sequence. For finite M, its complete intersection dimension is the infimum of pd<sub>Q</sub>(M ⊗<sub>R</sub> R′) − pd<sub>Q</sub>(R′) over all quasi-deformations.

**Problem.** A Noetherian local ring R is a complete intersection exactly when its residue field has finite complete intersection dimension (Avramov, Gasharov and Peeva). Then every finitely generated module has finite complete intersection dimension. Such modules satisfy the Auslander–Buchsbaum formula with this dimension.

**How the definition helps.** The definition builds the complete intersection condition into the allowed comparison rings, so a complete intersection is its own witness. Take R′ to be the completion of R, and Q a regular local ring that maps onto it (our own). Over Q every module has finite projective dimension, so every module gets finite complete intersection dimension (our own). The work goes into the converse and into the Auslander–Buchsbaum formula for this dimension.

**Paper or page:** [A Ghost Lemma for Commutative Ring Homomorphisms via André-Quillen Homology](https://arxiv.org/abs/2507.13988v1). It says: “Let (R,k) be a local ring. Then R is a complete intersection if and only if CI-dim<sub>R</sub>(k) &lt; ∞.”

**Sources:**

- [L. L. Avramov, V. N. Gasharov and I. V. Peeva, Complete intersection dimension, Publications Mathématiques de l'IHÉS 86 (1997), 67–114.](https://doi.org/10.1007/bf02698901)

### Gorenstein dimension extends Auslander–Buchsbaum and characterizes Gorenstein rings

**Remember:** Evaluate twice to recover G, and require higher Ext to vanish on both sides.

*Makes the theorem clean to state or prove.* MSC 13D05 (Homological dimension and commutative rings), 13H10. arXiv math.AC. Level 4: research.

**Definition.** Let R be Noetherian local and write G\* = Hom<sub>R</sub>(G,R). A finite module G is totally reflexive if evaluation G → G\*\* is invertible and Extⁱ<sub>R</sub>(G,R) = Extⁱ<sub>R</sub>(G\*,R) = 0 for every i &gt; 0. Gorenstein dimension is the shortest resolution length by such modules, or infinity if no finite resolution exists.

**Problem.** For a nonzero finite module M of finite Gorenstein dimension, its Gorenstein dimension plus depth M equals depth R. The ring R is Gorenstein exactly when every finite R-module has finite Gorenstein dimension.

**How the definition helps.** Totally reflexive modules supply the dimension-zero case of the Auslander–Bridger depth formula (our own). The Auslander–Bridger characterization of Gorenstein local rings gives the assertion about all finite modules (our own).

**Paper or page:** [On a relative dependency formula](https://arxiv.org/abs/2410.13239v1). It says: “If G-dim<sub>R</sub>(M) &lt; ∞, then G-dim<sub>R</sub>(M) + depth(M) = depth(R). This equality is known as Auslander-Bridger formula.”

**Sources:**

- [M. Auslander and M. Bridger, Stable module theory, Memoirs of the American Mathematical Society 94 (1969).](https://doi.org/10.1090/memo/0094)

### A one-module dualizing complex forces the ring to be Cohen–Macaulay

**Remember:** A dualizing module has finite injective dimension, only scalar endomorphisms, and no higher self-Ext.

*Makes the theorem clean to state or prove.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13C14, 13D45. arXiv math.AC. Level 4: research.

**Definition.** A dualizing module over a Noetherian ring A is a finite module D of finite injective dimension satisfying two conditions. Multiplication identifies A with Hom<sub>A</sub>(D,D), and Extⁱ<sub>A</sub>(D,D) vanishes for every i &gt; 0.

**Problem.** If a Noetherian ring has a dualizing module, then it is Cohen–Macaulay.

**How the definition helps.** Local duality identifies depth and dimension with the negatives of the extreme cohomological degrees of a normalized local dualizing complex (our own). Localizing D gives a dualizing module, and normalizing merely shifts its single degree (our own). Thus depth equals dimension at every prime (our own).

**Paper or page:** [Dualizing, Lemma 47.20.3.](https://stacks.math.columbia.edu/tag/0DW5), [Dualizing, Lemma 47.20.1.](https://stacks.math.columbia.edu/tag/0AWR). It says: “Let A be a Noetherian ring. If there exists a finite A-module ω<sub>A</sub> such that ω<sub>A</sub>\[0\] is a dualizing complex, then A is Cohen-Macaulay.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)

### L-complete modules form the abelian category that I-adically complete modules cannot

**Remember:** Resolve, complete, take zeroth homology, and check that the natural map is invertible.

*Makes the theorem clean to state or prove.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13B35, 13J10. arXiv math.AC. Level 4: research.

**Definition.** For a finitely generated ideal I of R, let L₀ denote the zeroth left derived functor of I-adic completion. Compute L₀(M) by completing a projective resolution termwise and taking zeroth homology. An R-module M is L-complete when its natural map M → L₀(M) is invertible.

**Problem.** Let I be weakly proregular, for example any ideal of a Noetherian ring. Then the L-complete modules form the smallest abelian subcategory of R-modules, closed under isomorphism and with the same kernels and cokernels, that contains the I-adically complete modules.

**How the definition helps.** Salch’s minimality theorem identifies the desired abelian subcategory by the single condition M ≅ L₀(M) via the natural map (our own). Ordinary complete modules alone can lose completeness under cokernels (our own).

**nLab:** [L-complete module](https://ncatlab.org/nlab/show/L-complete+module). It says: “The category of L-complete modules is the smallest abelian full subcategory of RMod which contains the I-adically complete modules.”

**Sources:**

- [J. P. C. Greenlees, J. P. May, Derived functors of I-adic completion and local homology, Journal of Algebra 149 (1992) 438–453](https://doi.org/10.1016/0021-8693(92)90026-I)
- [Andrew Salch, Approximation of subcategories by abelian subcategories, arXiv:1006.0048](https://arxiv.org/abs/1006.0048)

### Regular local rings remove the non-rigid Tor of the node

**Remember:** One vanishing positive Tor group forces every later group for the same pair to vanish.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13H05. arXiv math.AC. Level 4: research.

**Definition.** A finitely generated module M over a local ring is Tor-rigid when it passes this test for every finitely generated module N. If Torᵢ(M, N) = 0 for some i ≥ 1, then Torⱼ(M, N) = 0 for every j ≥ i. A regular local ring is one whose maximal ideal is generated by as many elements as its dimension.

**Problem.** Over a regular local ring, every finitely generated module is Tor-rigid. Auslander proved this for unramified rings, and Lichtenbaum in general.

**How the definition helps.** Regularity removes rings like the node R = k\[\[x,y\]\]/(xy), where rigidity fails. In our own computation, R/(x) has a periodic free resolution whose maps are multiplication by x and y in turn. Tensoring it with R/(y) gives Tor₁(R/(x), R/(y)) = 0 but Tor₂ = k. The work went into the rigidity theorem, which Auslander proved for unramified rings and Lichtenbaum completed.

**Paper or page:** [A study of the cohomological rigidity property](https://arxiv.org/abs/2009.06481). It says: “Assume R is a local complete intersection of dimension d and M ∈ mod(R) is Tor-rigid (e.g., R is regular).”

**Sources:**

- [M. Auslander, Modules over unramified regular local rings, Illinois Journal of Mathematics 5 (1961)](https://doi.org/10.1215/ijm/1255631585)
- [S. Lichtenbaum, On the vanishing of Tor in regular local rings, Illinois Journal of Mathematics 10 (1966)](https://doi.org/10.1215/ijm/1256055103)

### Asking for a dualizing complex excludes Nagata's non-catenary Noetherian rings

**Remember:** Finite cohomology and injective dimension accompany a derived endomorphism complex consisting of scalars.

*Rules out counterexamples.* MSC 13D09 (Derived categories and commutative rings), 13D07, 13E05. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A dualizing complex D over a Noetherian ring A has bounded, finitely generated cohomology and finite injective dimension. The natural multiplication map A → RHom<sub>A</sub>(D,D) must be an isomorphism in the derived category.

**Problem.** Every Noetherian ring with a dualizing complex is universally catenary and has finite Krull dimension.

**How the definition helps.** The dimension function of a dualizing complex changes by one at every immediate specialization (our own). Its values are bounded by the degrees of a bounded injective representative, bounding all prime-chain lengths (our own). Between fixed endpoints, saturated chains therefore have equal length (our own). Finite type algebras inherit dualizing complexes, ruling out Nagata’s noncatenary examples (our own).

**Paper or page:** [Dualizing, Lemma 47.17.4.](https://stacks.math.columbia.edu/tag/0A80), [Dualizing, Lemma 47.17.3.](https://stacks.math.columbia.edu/tag/0A7Z). It says: “Let A be a Noetherian ring which has a dualizing complex. Then A is universally catenary of finite dimension.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)

### Defining derived tensors by K-flat replacements makes them associative

**Remember:** Replace all three inputs once, then regroup the ordinary tensor product.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.KT. Level 4: research.

**Definition.** A complex K over a commutative ring is K-flat if K ⊗ C is acyclic for every acyclic complex C. To form the derived tensor product, take quasi-isomorphisms from K-flat replacements to both inputs and tensor the replacements.

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

**Remember:** Divide by fⁱ in degree i, then reduce the resulting cycle modulo f.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor in a ring A, and let M be a complex of A-modules with no f-torsion. Its décalage ηf M is the subcomplex of M\[1/f\] with degree i part {x ∈ fⁱMⁱ : dx ∈ fⁱ⁺¹Mⁱ⁺¹}. The Bockstein complex has terms Hⁱ(M ⊗ fⁱA/fⁱ⁺¹A), and its differential is the connecting map of 0 → fⁱ⁺¹A/fⁱ⁺²A → fⁱA/fⁱ⁺²A → fⁱA/fⁱ⁺¹A → 0.

**Problem.** For such M, there is a natural quasi-isomorphism from ηf M ⊗ A/f to the Bockstein complex. So Lη(f)M modulo f is determined by the cohomology groups of M/f and their Bockstein maps.

**How the definition helps.** Writing x = fⁱy, the defining divisibility makes y modulo f a cycle (our own). Its class, with the factor fⁱ retained as a twist, gives the canonical map (our own). Division of dy by f induces the Bockstein differential, and the décalage comparison lemma proves this map is a quasi-isomorphism (our own).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7T). It says: “There is a canonical map of complexes η<sub>fM•</sub> ⊗<sub>A</sub> A/fA → H•(M•/f) which is a quasi-isomorphism where the right hand side is the complex”

**Sources:**

- [The Stacks Project, Tag 0F7T](https://stacks.math.columbia.edu/tag/0F7T)

### Décalage replaces each cohomology group by its quotient by f-torsion

**Remember:** Require one more factor of f after applying the differential.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor in A, and let multiplication by f be injective on every term of an A-complex M. Inside M\[1/f\], the décalage ηf M consists in degree i of x ∈ fⁱMⁱ satisfying dx ∈ fⁱ⁺¹Mⁱ⁺¹.

**Problem.** For such M and every i, multiplication by fⁱ is an isomorphism from Hⁱ(M)/Hⁱ(M)\[f\] onto Hⁱ(ηf M). Here Hⁱ(M)\[f\] is the set of classes killed by f.

**How the definition helps.** The divisibility conditions that define ηf M are exactly those that kill the f-torsion classes of cohomology. Its degree i cocycles are fⁱz for cocycles z of M, and fⁱz is a boundary exactly when fz is one (our own). Removing torsion from each cohomology group is not an operation on complexes, but ηf carries it out on complexes. Bhatt–Morrow–Scholze use Lη(μ), with μ = \[ε\] − 1 in Fontaine's ring Ainf, to remove unwanted μ-torsion from p-adic cohomology (our own summary).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7P). It says: “There is a canonical isomorphism fⁱ : Hⁱ(M•)/Hⁱ(M•)\[f\] → Hⁱ(η<sub>fM•</sub>) given by multiplication by fⁱ.”

**Sources:**

- [The Stacks Project, Tag 0F7P](https://stacks.math.columbia.edu/tag/0F7P)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Generation by the unit makes every thick subcategory a tensor ideal

**Remember:** If the unit builds everything, every thick subcategory absorbs tensor products.

*Rules out counterexamples. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80, 14A30. arXiv math.AC, math.CT. Level 4: research.

**Definition.** A thick subcategory is a full triangulated subcategory closed under direct summands. The tensor unit generates a category thickly if every object lies in the smallest thick subcategory containing the unit.

**Problem.** Let R be a commutative noetherian ring. The thick subcategories of perfect complexes over R correspond to the specialization closed subsets of Spec R. These are the subsets closed under passing to larger primes.

**How the definition helps.** For each b in a thick subcategory C, the objects x satisfying x ⊗ b ∈ C form a thick subcategory containing R (our own). Since R generates all perfect complexes, C is a tensor ideal (our own). This excludes the behavior of the subcategory generated by 𝒪 on ℙ¹ (our own). Thomason’s classification now applies, and its subsets are precisely the specialization-closed subsets for Noetherian R (our own).

**Paper or page:** [Classifying thick subcategories over a Koszul complex via the curved BGG correspondence](https://arxiv.org/abs/2502.13806), [Classifying thick subcategories over a Koszul complex via the curved BGG correspondence](https://arxiv.org/abs/2502.13806). It says: “In particular, if A is regular or concentrated in nonnegative degrees, then thick<sub>perf</sub>(A,0)(A)=perf(A,0).”

**Sources:**

- [Amnon Neeman, The chromatic tower for D(R), Topology 31 (1992) 519–532](https://doi.org/10.1016/0040-9383(92)90047-l)
- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)

### Requiring torsion-free terms makes décalage respect quasi-isomorphisms

**Remember:** One extra factor of f in the differential removes classes killed by f.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Fix a nonzerodivisor f in A and an A-complex M with multiplication by f injective on each term. Inside M\[1/f\], define (ηf M)ⁱ as the elements x ∈ fⁱMⁱ with dx ∈ fⁱ⁺¹Mⁱ⁺¹.

**Problem.** A quasi-isomorphism between complexes of f-torsion-free modules induces a quasi-isomorphism after décalage. Every complex is quasi-isomorphic to one with free terms, so Lη(f) is a well-defined functor on the whole derived category of A.

**How the definition helps.** Multiplication by fⁱ induces a natural isomorphism Hⁱ(M)/Hⁱ(M)\[f\] → Hⁱ(ηf M) (our own). A quasi-isomorphism induces isomorphisms on these quotients, so ηf preserves it (our own). Free replacements then define Lη(f) on the derived category (our own).

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

**Remember:** Base change along Frobenius must recover the module, and maximal-ideal powers kill its elements.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13A35. arXiv math.AC. Level 4: research.

**Definition.** Let A be a regular local ring of prime characteristic p, with maximal ideal m and Frobenius map F(a) = aᵖ. The Frobenius functor sends a module M to its base change along F. A module is m-power torsion when each element is killed by a power of m.

**Problem.** Every m-power torsion A-module isomorphic to its Frobenius base change is a direct sum of copies of E. Here E is the injective hull of the residue field, the smallest injective module containing it.

**How the definition helps.** The isomorphism under Frobenius and the elementwise torsion condition are precisely the hypotheses of the quoted injectivity lemma (our own). That lemma gives the decomposition into injective hulls, with no finite-generation assumption on M (our own).

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

**Remember:** Each coordinate derivative acts on module elements by the product rule.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13N10. arXiv math.AC. Level 4: research.

**Definition.** Let A = k\[\[x₁,…,xₙ\]\] over a characteristic-zero field, with maximal ideal 𝔪. An A-module M is 𝔪-power torsion if some power of 𝔪 kills each given element. Leibniz operators are additive maps Dᵢ on M satisfying Dᵢ(fz) = ∂ᵢ(f)z + fDᵢ(z) for all f ∈ A and z ∈ M.

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

**Remember:** Support lies over the ideal, and every Ext from its quotient is finite.

*Rules out counterexamples. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13E05. arXiv math.AC. Level 4: research.

**Definition.** Let a be an ideal of a Noetherian ring R. An R-module N is a-cofinite if Supp(N) ⊆ V(a) and Extⁱ<sub>R</sub>(R/a,N) is finitely generated for every i ≥ 0.

**Problem.** If dim R/a ≤ 1, then for every finitely generated module M, every local cohomology module Hⁱₐ(M) is a-cofinite.

**How the definition helps.** The dimension bound excludes Hartshorne’s example, where dim R/a = 2 and second local cohomology fails cofiniteness (our own). The Bahmanpour–Naghipour cofiniteness theorem supplies the conclusion in every degree when dim R/a ≤ 1 (our own).

**Paper or page:** [A characterization result of cofinite local cohomology modules](https://arxiv.org/abs/2305.10202). It says: “(b) dim R/a ≤ 1. See \[BN\]. Then H<sup>i<sub>a</sub></sup>(M) is a–cofinite for all i ≥ 0.”

**Sources:**

- [R. Hartshorne, Affine duality and cofiniteness, Inventiones Mathematicae 9 (1970) 145–164](https://doi.org/10.1007/BF01404554)
- [K. Bahmanpour and R. Naghipour, Cofiniteness of local cohomology modules for ideals of small dimension, Journal of Algebra 321 (2009)](https://doi.org/10.1016/j.jalgebra.2008.12.020)
- [L. Melkersson, Modules cofinite with respect to an ideal, Journal of Algebra 285 (2005)](https://doi.org/10.1016/j.jalgebra.2004.08.037)

### Torsion and completion as adjoints make torsion and complete complexes equivalent

**Remember:** Torsion sees only the completion, and completion sees only the torsion.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D09, 13B35. arXiv math.AC. Level 4: research.

**Definition.** For a finitely generated ideal a of A, derived torsion is right adjoint to including complexes with elementwise a-power-torsion cohomology. Derived completion is left adjoint to including complexes K satisfying RHom<sub>A</sub>(A\[1/f\],K) = 0 for every f ∈ a.

**Problem.** RΓₐ and Λ are inverse equivalences between the a-power torsion complexes and the derived a-complete complexes. This is Greenlees–May duality.

**How the definition helps.** The two comparison identities in the quote let each composite restrict to the identity on its respective subcategory (our own). A right adjoint to a full inclusion fixes objects inside, as does a left adjoint (our own). Thus derived torsion fixes torsion complexes and derived completion fixes complete complexes (our own).

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

**Remember:** Use finite Bézout generators and forbid infinite strictly increasing chains of finite ideals.

*Makes the theorem clean to state or prove.* MSC 13F10 (Principal ideal rings), 13E05, 03F65. arXiv math.AC, math.LO. Level 4: research.

**Definition.** Constructively, Lombardi and Quitté call a domain principal when it is Bézout and Noetherian. Bézout means every finite list generates a principal ideal. Constructive Noetherianity here means every ascending sequence of finitely generated ideals has two consecutive equal terms.

**Problem.** In constructive mathematics, ℤ is Noetherian and Bézout, so it is a principal ideal domain in this sense. The classical statement that every ideal of ℤ is principal is equivalent to excluded middle.

**How the definition helps.** The Euclidean algorithm gives Bézout generators in ℤ (our own). After the first nonzero ideal, each strict enlargement decreases its positive generator, proving constructive Noetherianity (our own). A generator for {n ∈ ℤ \| n = 0 or P} would decide P by testing whether it vanishes (our own). Conversely, excluded middle supplies the classical least-positive-generator argument (our own).

**nLab:** [noetherian ring](https://ncatlab.org/nlab/show/noetherian+ring), [principal ideal domain](https://ncatlab.org/nlab/show/principal+ideal+domain). It says: “the ring of integers is both Noetherian and Bézout, but it is a principal ideal domain if and only if excluded middle holds.”

**Sources:**

- [H. Lombardi, C. Quitté, Commutative Algebra: Constructive Methods (Finite projective modules), Springer 2015](https://doi.org/10.1007/978-94-017-9944-7)

### Modified power series over zero-dimensional rings stay flat

**Remember:** Keep each power series inside one Artinian piece, and flatness returns.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F25 (Formal power series rings), 13C11, 13C15. arXiv math.AC, math.RA. Level 4: research.

**Definition.** Let R be integral over an Artinian subring R₀. The modified series ring consists of series in X₁,…,Xₙ whose coefficients all belong to one finite R₀-subalgebra of R.

**Problem.** The modified ring 𝓕⟦X₁, …, Xₙ⟧ is faithfully flat over R and has Krull dimension n, which is dim R + n. Over a non-Noetherian ring, the full power series ring can fail to be flat and can have infinite dimension.

**How the definition helps.** The single-subalgebra condition expresses the modified ring as a directed union of series rings over Artinian subalgebras (our own). Theorem 3.4 gives faithful flatness and Theorem 4.6 gives dimension n for this construction (our own).

**Paper or page:** [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1), [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1). It says: “A power series ring over non-Noetherian rings can fail to be flat over the base ring, and its dimension can be infinite, even when the dimension of the base ring is finite.”

**Sources:**

- [M. Richard Sayanagi, Power Series Rings over Zero-Dimensional Rings, arXiv:2510.07496 (2025)](https://arxiv.org/abs/2510.07496v1)

### A δ-structure makes Frobenius kill all p-torsion

**Remember:** Correct the sum by the divided binomial difference, and correct the product by pδ(x)δ(y).

*True by definition.* MSC 13F35 (Witt vectors and related rings). arXiv math.NT, math.AC. Level 4: research.

**Definition.** Fix a prime p and the integer polynomial C(X,Y) = (Xᵖ + Yᵖ − (X+Y)ᵖ)/p. A δ-ring has a function δ with δ(0) = δ(1) = 0 and δ(x+y) = δ(x)+δ(y)+C(x,y) for all x,y. It satisfies δ(xy) = xᵖδ(y)+yᵖδ(x)+pδ(x)δ(y) for all x,y, and φ(x) denotes xᵖ+pδ(x).

**Problem.** In a δ-ring, every element α with pα = 0 satisfies φ(α) = 0. So a perfect δ-ring, where φ is bijective, has no p-torsion, and no nonzero ring of characteristic p carries a δ-structure.

**How the definition helps.** For pα = 0, the product rule gives 0 = δ(pα) = pδ(α)+(1−pᵖ⁻¹)αᵖ, using δ(p) = 1−pᵖ⁻¹ (our own). Hence φ(α) = pᵖ⁻¹αᵖ = 0 (our own). Injectivity of φ therefore excludes nonzero p-torsion (our own). In characteristic p this calculation gives φ(1) = 0, impossible in a nonzero δ-ring (our own).

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let A be a δ<sub>L</sub>-algebra. Then if α ∈ A is π-torsion, we have φ(α) = 0. In particular, if A is perfect then A is π-torsion free.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Marks, Prismatic F-crystals and Lubin-Tate (φq, Γ)-modules, arXiv preprint 2303.07620 (2023)](https://arxiv.org/abs/2303.07620)

### Distinguished elements make the prism condition depend only on the ideal

**Remember:** A distinguished element has invertible δ.

*Makes the theorem clean to state or prove.* MSC 13F35 (Witt vectors and related rings), 14F30. arXiv math.NT, math.AG. Level 4: research.

**Definition.** An element d of a δ-ring A is distinguished when δ(d) is a unit. Rad(A) is the Jacobson radical, the intersection of all maximal ideals.

**Problem.** Let A be a δ-ring with p in its Jacobson radical, and let d be in the Jacobson radical. Then d is distinguished exactly when p lies in the ideal (d, φ(d)), and also exactly when the ideal (d) contains some distinguished element.

**How the definition helps.** The quoted distinguished-element criterion specializes to π = p and gives both equivalences under the radical hypotheses (our own). The ideal condition only involves (d) and its Frobenius image, so it is independent of the generator (our own).

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

**Remember:** Separate degree zero from the alternating sum to measure the gap between colength and multiplicity.

*True by definition. Confidence: medium.* MSC 13H15 (Multiplicity theory and related topics), 13D02, 13H10. arXiv math.AC. Level 4: research.

**Definition.** Let x be a system of parameters in a Noetherian local ring R. Its Koszul Euler characteristic is the alternating sum ∑ᵢ (−1)ⁱ length<sub>R</sub> Hᵢ(x;R). The first partial Euler characteristic takes the same sum starting at degree one, with positive first sign.

**Problem.** For every system of parameters, e(x; R) ≤ length R/(x), with equality if and only if R is Cohen–Macaulay.

**How the definition helps.** With the Koszul formula, length R/(x) − e(x; R) is the alternating sum of the higher Koszul homology lengths, starting with length H₁ (our own). Serre showed this sum is never negative and is zero only when H₁ = 0, that is, when x is a regular sequence (our own). The Hilbert–Samuel definition alone gives no such formula. The work goes into Serre's identification of the two multiplicities.

**Paper or page:** [More Algebra, Lemma 15.126.7](https://stacks.math.columbia.edu/tag/0BWW), [Intersection, Lemma 43.16.2](https://stacks.math.columbia.edu/tag/0B03). It says: “If eI/d! is the leading coefficient of the numerical polynomial n ↦ lengthR(R/Iⁿ⁺¹), then eI ≤ lengthR(R/I).”

**Sources:**

- [J.-P. Serre, Algèbre locale, multiplicités, Lecture Notes in Mathematics 11, Springer, 1965 (third edition 1975).](https://doi.org/10.1007/978-3-540-37123-6)

### For absolute-valued Huber rings, topological simplicity means the completion is a field

**Remember:** A dense ideal contains elements close to one.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 13A18, 14G22. arXiv math.NT, math.AC. Level 4: research.

**Definition.** A topological ring is topologically simple if its only closed ideals are 0 and the whole ring. For a Hausdorff ring, this means every nonzero ideal is dense. A Huber ring has an open subring whose topology is the I-adic topology for a finitely generated ideal I.

**Problem.** If the completion of a Hausdorff commutative topological ring A is a field, then A is topologically simple. The converse holds for a Huber ring whose topology comes from an absolute value.

**How the definition helps.** A nonzero closed ideal has nonzero closure in the field completion, hence dense image and therefore equals A (our own). Conversely, for nonzero a ∈ A, density of aA gives b with \|1−ab\| &lt; 1 (our own). The geometric series in the completion inverts ab and hence a (our own). For nonzero x in the completion, approximate x by such an a with \|x−a\| &lt; \|a\| and invert x/a similarly (our own).

**Paper or page:** [Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras](https://arxiv.org/abs/2510.22678v2). It says: “If the completion of A is a field, then A is topologically simple. If A is a Huber ring and its topology is defined by an absolute value, then the converse is also true.”

**Sources:**

- [Dimitri Dine, Jack J Garzella, Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras, arXiv:2510.22678v2 (2025)](https://arxiv.org/abs/2510.22678v2)

### Degree-compatible orders make two kinds of confluence agree

**Remember:** Order by degree, and the weaker confluence is already enough.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13F25, 68Q42. arXiv math.AC, math.RA. Level 4: research.

**Definition.** In the formal power series ring over a field, measure agreement modulo powers of the variable ideal 𝔪. Topological confluence requires that after any reduction fork, for every n the branches admit further reductions agreeing modulo 𝔪ⁿ (our own). Infinitary confluence requires further convergent reductions with the same limit after every fork (our own).

**Problem.** For formal power series with a monomial order compatible with degree, the rewriting system of a standard basis is infinitarily confluent exactly when it is topologically confluent.

**How the definition helps.** Degree compatibility lets agreement through any fixed degree be tested in a finite truncation (our own). The quoted confluence theorem uses closedness of ideals to identify the approximate and infinitary joining conditions (our own).

**Paper or page:** [Topological closure of formal power series ideals and application to topological rewriting theory](https://arxiv.org/abs/2402.05511v3). It says: “Using topological closure of ideals, we finally show that in the context of rewriting theory on commutative formal power series, infinitary and topological confluences are equivalent when the monomial order considered is compatible with the degree.”

**Sources:**

- [Cyrille Chenavier, Thomas Cluzeau, Adya Musson-Leymarie, Topological closure of formal power series ideals and application to topological rewriting theory, arXiv:2402.05511 (2024)](https://arxiv.org/abs/2402.05511v3)
