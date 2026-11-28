### Cancellation makes prime elements irreducible

**Remember:** A prime divides one factor, and cancelling leaves a unit.

*Rules out counterexamples.* MSC 13A05 (Divisibility and factorizations in commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Work in an integral domain, a nonzero commutative ring with 1 where nonzero factors can be cancelled from products. A nonzero nonunit p is prime if p dividing ab forces p to divide a or b, and irreducible if every factorization p = ab has a unit factor.

**Problem.** In an integral domain, every prime element is irreducible.

**How the definition helps.** If p = ab, primality gives, say, a = pc, so p = pcb (our own). Cancelling p gives cb = 1, so b is a unit (our own). Modulo 6, the prime 2 equals 2·4 with neither factor a unit, because cancellation fails (our own).

**Wikipedia:** [Prime element](https://en.wikipedia.org/wiki/Prime_element). It says: “In an integral domain, every prime is irreducible”

**Paper or page:** [Prime Element of Integral Domain is Irreducible](https://proofwiki.org/wiki/Prime_Element_of_Integral_Domain_is_Irreducible). It says: “Then p is an irreducible element of ⟨D, +, ∘⟩.”

**Sources:** none listed. No primary source with a working link was found.

### The sum of coprime ideals makes their intersection a product

**Remember:** Split one as u + v, and every common element splits too.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Ideals I and J of a commutative ring are coprime when they add up to the whole ring, so 1 = u + v with u in I and v in J. The product IJ consists of finite sums of products xy with x in I and y in J.

**Problem.** In a commutative ring with 1, the product of two coprime ideals equals their intersection.

**How the definition helps.** Any x in both ideals splits as x = xu + xv, and both terms lie in IJ (our own). Conversely, each product xy lies in both ideals (our own).

**Paper or page:** [Product of Coprime Ideals equals Intersection](https://proofwiki.org/wiki/Product_of_Coprime_Ideals_equals_Intersection). It says: “Then their product equals their intersection: 𝔞𝔟 = 𝔞 ∩ 𝔟”

**Sources:** none listed. No primary source with a working link was found.

### Prime characteristic makes Frobenius additive

**Remember:** In prime characteristic, the middle binomial terms vanish.

*Rules out counterexamples.* MSC 13A35 (Characteristic p methods (Frobenius endomorphism) and reduction to characteristic p; tight closure). arXiv math.AC. Level 1: early undergraduate.

**Definition.** A ring has characteristic p when p copies of 1 add to zero and no fewer do, so p times any element is zero. The Frobenius map raises each element to the power p.

**Problem.** Raising to the power p is a ring homomorphism in every commutative ring of prime characteristic p.

**How the definition helps.** In the binomial expansion of (x + y)ᵖ, the middle coefficients are divisible by the prime p, so they vanish and (x + y)ᵖ = xᵖ + yᵖ. Commutativity gives (xy)ᵖ = xᵖyᵖ. Modulo 4, (1 + 1)⁴ = 0 but 1⁴ + 1⁴ = 2 (our own).

**Wikipedia:** [Frobenius endomorphism](https://en.wikipedia.org/wiki/Frobenius_endomorphism). It says: “This shows that F is a ring homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Domains keep root counts bounded

**Remember:** No zero divisors, so each root uses up one linear factor.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 in which a product is zero only when a factor is zero.

**Problem.** A nonzero polynomial of degree n over an integral domain has at most n distinct roots.

**How the definition helps.** At a root a, write f = (X − a)g; any other root b gives (b − a)g(b) = 0, so g(b) = 0 (our own). Induction on degree then gives the bound (our own). Modulo 8, where 2·4 = 0, all four odd residues solve X² − 1 = 0 (our own).

**Wikipedia:** [Frobenius endomorphism](https://en.wikipedia.org/wiki/Frobenius_endomorphism). It says: “if R is not a domain, then Xᵖ − X may have more than p roots”

**Paper or page:** [Polynomial Factor Theorem](https://proofwiki.org/wiki/Polynomial_Factor_Theorem). It says: “ξ ∈ K: P(ξ) = 0 ⇔ P(x) = (x − ξ) Q(x)”

**Sources:** none listed. No primary source with a working link was found.

### Monic divisors make long division work

**Remember:** A leading coefficient of one needs no division.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** A polynomial is monic if its leading coefficient is 1. Subtracting a monomial multiple of it can then cancel any leading term without dividing coefficients (our own).

**Problem.** Over a nonzero commutative ring with 1, division by a monic polynomial gives a unique quotient and a remainder of lower degree or zero.

**How the definition helps.** Each step cancels the leading term and lowers the degree, until the remainder is zero or of lower degree (our own). Two answers would make the divisor times a nonzero quotient difference equal a remainder difference of lower degree, which is impossible (our own). Dividing x by 2x in ℤ\[x\] would need the coefficient 1/2 (our own).

**nLab:** [monic polynomial](https://ncatlab.org/nlab/show/monic+polynomial). It says: “whose highest order coefficient is 1.”

**Sources:** none listed. No primary source with a working link was found.

### Domains embed in fraction fields

**Remember:** Denominators multiply without ever reaching zero.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 in which a product of nonzero elements is never zero. Its fractions are a/b with b ≠ 0, where a/b = c/d when ad = bc.

**Problem.** A nonzero commutative ring with 1 embeds in a field exactly when it is an integral domain.

**How the definition helps.** The domain condition keeps products of denominators nonzero and makes this equality transitive, so the usual fraction rules give a field containing each a as a/1 (our own). Conversely, a field has no zero divisors, so no subring has them (our own). Thus 2 and 3 modulo 6, with product 0, block any embedding (our own).

**Wikipedia:** [Field of fractions](https://en.wikipedia.org/wiki/Field_of_fractions). It says: “the smallest field in which it can be embedded”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial degree makes long division Euclidean over a field

**Remember:** Long division stops at zero or a smaller degree.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 13F20. arXiv math.AC. Level 1: early undergraduate.

**Definition.** A Euclidean domain is an integral domain with a size, a nonnegative integer for each nonzero element, such that division by any nonzero b leaves a remainder that is zero or smaller than b. For polynomials over a field, the size is the degree.

**Problem.** The ring of polynomials in one variable over a field is a Euclidean domain.

**How the definition helps.** Long division gives exactly this inequality for degree (our own). Each step divides by the nonzero leading coefficient of the divisor, which is invertible in a field, to cancel the top term (our own).

**Paper or page:** [Polynomial Forms over Field is Euclidean Domain](https://proofwiki.org/wiki/Polynomial_Forms_over_Field_is_Euclidean_Domain). It says: “Then F\[X\] is a Euclidean domain.”

**Sources:** none listed. No primary source with a working link was found.

### Formal power series need no convergence

**Remember:** A formal power series is just its list of coefficients.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 05A15. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** A formal power series over a commutative ring R is just its sequence of coefficients a₀, a₁, a₂, … in R, written ∑ aₙXⁿ. Sums add coefficients, and the coefficient of Xⁿ in a product is the finite sum of aᵢbⱼ over i + j = n.

**Problem.** Generating functions can be multiplied, inverted, differentiated and composed as formal power series, where these operations are defined. The resulting identities hold even when the series has radius of convergence zero, such as Σ n! Xⁿ.

**How the definition helps.** An identity of formal series means equal coefficients, so no value of X and no convergence is needed. Each operation finds every coefficient in finitely many steps: inversion needs a unit constant term and composition needs a zero inner constant term (our own).

**Wikipedia:** [Generating function](https://en.wikipedia.org/wiki/Generating_function), [Formal power series](https://en.wikipedia.org/wiki/Formal_power_series). It says: “Unlike an ordinary series, the formal power series is not required to converge: in fact, the generating function is not actually regarded as a function, and the "variable" remains an indeterminate.”

**Sources:**

- [I. Niven, Formal power series, The American Mathematical Monthly 76 (1969), 871–889, doi:10.1080/00029890.1969.12000359](https://doi.org/10.1080/00029890.1969.12000359)

### Cancellation makes every finite integral domain a field

**Remember:** On a finite set, an injective multiplication map must reach one.

*True by definition.* MSC 13G05 (Integral domains). arXiv math.AC. Level 1: early undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with 1 in which multiplication by a nonzero element is injective: ab = ac forces b = c. Equivalently, nonzero elements have nonzero products.

**Problem.** Every finite integral domain is a field.

**How the definition helps.** On a finite set an injective map is also surjective, so multiplication by a nonzero a reaches 1 (our own). The element sent to 1 is the inverse of a (our own).

**Paper or page:** [Finite Ring with No Proper Zero Divisors is Field](https://proofwiki.org/wiki/Finite_Ring_with_No_Proper_Zero_Divisors_is_Field). It says: “Then R is a field.”

**Sources:** none listed. No primary source with a working link was found.

### A nontrivial idempotent splits a ring into two factors

**Remember:** An idempotent and its complement pick out two independent factors.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An idempotent is an element e with e² = e, and it splits each element as r = er + (1 − e)r (our own). It is nontrivial if it is neither 0 nor 1.

**Problem.** A commutative ring with 1 is a product of two nonzero rings exactly when it has a nontrivial idempotent.

**How the definition helps.** Since e and 1 − e are idempotents with product 0, the map r ↦ (er, (1 − e)r) is a ring isomorphism from R onto eR × (1 − e)R (our own). Nontriviality makes both factors nonzero (our own). Conversely, (1, 0) is a nontrivial idempotent in a product of two nonzero rings (our own).

**Paper or page:** [Direct Product iff Nontrivial Idempotent](https://proofwiki.org/wiki/Direct_Product_iff_Nontrivial_Idempotent). It says: “contains an idempotent element”

**Sources:** none listed. No primary source with a working link was found.

### Adjoining an inverse reduces the strong Nullstellensatz to the weak one

**Remember:** An inverse exists exactly where the value is nonzero.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AG. Level 2: later undergraduate.

**Definition.** Adjoining an inverse of a polynomial f means adding a new variable t and the equation ft = 1. This equation has a solution at a point exactly when f is nonzero there (our own).

**Problem.** Let I be an ideal in a polynomial ring in finitely many variables over an algebraically closed field. If f vanishes at every common zero of I, some positive power of f belongs to I.

**How the definition helps.** If f vanishes on every common zero of I, then I together with ft − 1 has no common zero, so the weak Nullstellensatz puts 1 in that ideal (our own). Substituting t = 1/f and clearing denominators gives a power of f in I, for nonzero f (our own). The zero polynomial already lies in I (our own).

**nLab:** [Nullstellensatz](https://ncatlab.org/nlab/show/Nullstellensatz). It says: “Typically the way that the strong Nullstellensatz is proved is by reduction to the so-called "weak Nullstellensatz" by means of the "Rabinowitsch trick".”

**Sources:**

- [J. L. Rabinowitsch, Zum Hilbertschen Nullstellensatz, Mathematische Annalen 102 (1930), p. 520.](https://link.springer.com/article/10.1007/BF01782361)

### Asking for a 1 gives every nonzero ring a maximal ideal

**Remember:** An ideal is proper exactly when it misses 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a ring with identity 1, an ideal is proper exactly when it does not contain 1. Since this is about one element, the union of a chain of proper ideals is still proper.

**Problem.** Every nonzero ring with identity has a maximal ideal, a proper ideal that no larger proper ideal contains (Krull, 1929).

**How the definition helps.** The zero ideal is proper in a nonzero ring, and chains have proper unions, so Zorn's lemma gives a maximal proper ideal. Without 1, ℚ with zero multiplication has the additive subgroups as ideals, and none is maximal among proper ones (our own).

**Wikipedia:** [Krull's theorem](https://en.wikipedia.org/wiki/Krull%27s_theorem), [Ring (mathematics)](https://en.wikipedia.org/wiki/Ring_%28mathematics%29). It says: “a union of ideals not containing 1 does not contain 1, so J ∈ S. By Zorn's lemma, S has a maximal element M.”

**Sources:**

- [W. Krull, Idealtheorie in Ringen ohne Endlichkeitsbedingungen, Mathematische Annalen 101 (1929) 729–744](https://doi.org/10.1007/BF01454872)
- [W. Hodges, Krull implies Zorn, Journal of the London Mathematical Society (2) 19 (1979) 285–287](https://doi.org/10.1112/jlms/s2-19.2.285)

### Coprime ideals give the Chinese remainder theorem in any ring

**Remember:** Comaximal ideals contain two elements that add up to 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 11A07. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Two two-sided ideals I and J of a ring R with identity are comaximal if I + J = R, so i + j = 1 for some i in I and j in J. Then j is 1 modulo I and 0 modulo J, which plays the role of Bézout's identity (our own).

**Problem.** Let I₁, …, Iₖ be pairwise comaximal two-sided ideals in a ring R with identity. The residue map induces an isomorphism R/(I₁ ∩ … ∩ Iₖ) ≅ R/I₁ × … × R/Iₖ.

**How the definition helps.** For each i, the product of such elements over all j ≠ i is 1 modulo Iᵢ and 0 modulo every other ideal (our own). Sums of these products times chosen representatives give every tuple, and the kernel of the residue map is the intersection (our own).

**Wikipedia:** [Chinese remainder theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem). It says: “This relation plays the role of Bézout's identity in the proofs related to this generalization, which otherwise are very similar.”

**Sources:**

- [M. F. Atiyah and I. G. Macdonald, Introduction to Commutative Algebra, Addison-Wesley (1969), Proposition 1.10; reissued by CRC Press (2018)](https://doi.org/10.1201/9780429493621)

### Ideal absorption makes multiplication work on quotient classes

**Remember:** An ideal absorbs every error caused by changing a representative.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring R, an ideal I is an additive subgroup that absorbs multiplication: rx lies in I for every x in I and r in R. So changing a factor by an element of I changes the product only by an element of I (our own).

**Problem.** In a commutative ring, the ideals are exactly the kernels of ring maps. In particular, the quotient map by an ideal has that ideal as its kernel.

**How the definition helps.** Absorption makes multiplication of classes modulo I well defined, so the quotient is a ring whose map has kernel exactly I (our own). Conversely, a ring map sends every multiple of a kernel element to zero (our own). For the subgroup ℤ of ℚ, 0 and 1 share a class, but their products with ½ do not (our own).

**Paper or page:** [Kernel of Ring Homomorphism is Ideal](https://proofwiki.org/wiki/Kernel_of_Ring_Homomorphism_is_Ideal), [Quotient Ring is Ring](https://proofwiki.org/wiki/Quotient_Ring_is_Ring). It says: “The kernel of φ is an ideal of R₁.”

**Sources:** none listed. No primary source with a working link was found.

### Ideal cosets make the first ring isomorphism theorem immediate

**Remember:** Equal outputs mean the inputs differ by a kernel element.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC, math.RA. Level 2: later undergraduate.

**Definition.** The quotient ring R/I groups together elements whose difference lies in the ideal I. It adds and multiplies these classes through representatives.

**Problem.** For a ring map φ from R, the quotient R/ker φ is isomorphic to the image of φ. The kernel ker φ is the set of elements that φ sends to zero.

**How the definition helps.** Since φ(a) = φ(b) exactly when a − b lies in ker φ, the classes of R/ker φ are exactly the sets of inputs with one output (our own). Sending each class to that output is a bijection onto the image that preserves both operations (our own).

**Paper or page:** [First Isomorphism Theorem/Rings](https://proofwiki.org/wiki/First_Isomorphism_Theorem/Rings). It says: “Im φ ≅ R / ker φ”

**Sources:** none listed. No primary source with a working link was found.

### Ideal quotients give equations for the closure of a difference

**Remember:** Multiply by equations for the part you want to remove.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AG. Level 2: later undergraduate.

**Definition.** The ideal quotient I : J consists of the polynomials f with fg in I for every g in J. The product fg tests f only at points where g is nonzero, that is, outside V(J), the common zeros of J (our own).

**Problem.** Over an algebraically closed field, if I is radical, I : J is the vanishing ideal of V(I) outside V(J). Its zero set is the Zariski closure of that difference.

**How the definition helps.** Because I is radical, the strong Nullstellensatz says fg lies in I exactly when fg vanishes on V(I) (our own). That holds for every g in J exactly when f vanishes on V(I) outside V(J), since the products vanish on V(J) anyway (our own).

**Wikipedia:** [Ideal quotient](https://en.wikipedia.org/wiki/Ideal_quotient). It says: “The ideal quotient corresponds to set difference in algebraic geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal ideals are exactly the ideals whose quotient is a field

**Remember:** Maximality makes each nonzero class generate one.

*Rules out counterexamples. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An ideal M of a commutative ring R with identity is maximal if M ≠ R and no ideal lies strictly between M and R. So M + Ra = R for each a outside M, which means some multiple of a is 1 modulo M (our own).

**Problem.** An ideal M of a commutative ring R with identity is maximal exactly when R/M is a field.

**How the definition helps.** Some ra is congruent to 1 modulo M, so every nonzero class of R/M has an inverse (our own). Properness keeps R/M from being the zero ring, and the converse reverses these steps (our own).

**nLab:** [maximal ideal](https://ncatlab.org/nlab/show/maximal+ideal), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [field](https://ncatlab.org/nlab/show/field). It says: “The improper ideal is not a maximal ideal or even a prime ideal.”

**Sources:** none listed. No primary source with a working link was found.

### Radical ideals leave no nonzero nilpotents in their quotients

**Remember:** If a power lies in the ideal, so does the element.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An ideal I of a commutative ring with 1 is radical if xⁿ in I for some n ≥ 1 forces x in I. An element is nilpotent if some positive power of it is zero.

**Problem.** The quotient ring R/I has no nonzero nilpotent elements exactly when I is radical.

**How the definition helps.** The class of x is nilpotent when some xⁿ lies in I, and nonzero when x is not in I (our own). So nonzero nilpotent classes exist exactly when I is not radical (our own). For example, modulo 4, the class of 2 is nonzero with square zero (our own).

**Paper or page:** [Radical Ideal iff Quotient Ring is Reduced](https://proofwiki.org/wiki/Radical_Ideal_iff_Quotient_Ring_is_Reduced). It says: “the quotient ring R / J is a reduced ring.”

**Sources:** none listed. No primary source with a working link was found.

### The nilradical as an intersection of primes detects nilpotent coefficients

**Remember:** Reduce modulo each prime, where every nonzero polynomial has nonzero powers.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The nilradical of a commutative ring, the ideal of nilpotent elements, equals the intersection of all prime ideals. So an element is nilpotent exactly when it becomes zero modulo every prime ideal.

**Problem.** A polynomial over a commutative ring is nilpotent exactly when every coefficient is nilpotent.

**How the definition helps.** Modulo any prime P, a nilpotent polynomial becomes a nilpotent polynomial over the domain R/P, hence zero, so every coefficient lies in P (our own). Lying in every prime makes each coefficient nilpotent (our own). Conversely, a finite sum of commuting nilpotent terms is nilpotent (our own).

**Wikipedia:** [Nilradical of a ring](https://en.wikipedia.org/wiki/Nilradical_of_a_ring). It says: “The nilradical of a commutative ring is the intersection of all prime ideals.”

**Sources:** none listed. No primary source with a working link was found.

### The quotient mapping property makes successive ring quotients collapse

**Remember:** Killing J and then K kills exactly what killing K does.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC, math.RA. Level 2: later undergraduate.

**Definition.** The quotient R/I comes with a map from R that sends I to zero. Every ring map from R that sends I to zero factors through it in exactly one way.

**Problem.** Let J and K be ideals of R with J contained in K. Then first quotienting by J and then by the image of K gives a ring isomorphic to R/K.

**How the definition helps.** Maps out of (R/J)/(K/J) and maps out of R/K both correspond to ring maps from R that send K to zero (our own). Two objects with the same mapping property are isomorphic, by uniqueness of the factorizations (our own).

**Paper or page:** [Third Isomorphism Theorem/Rings](https://proofwiki.org/wiki/Third_Isomorphism_Theorem/Rings). It says: “(2): (R / J) / (K / J) ≅ R / K”

**Sources:** none listed. No primary source with a working link was found.

### Units generate the whole ring and avoid every maximal ideal

**Remember:** A nonunit generates a proper ideal, which lies in a maximal ideal.

*True by definition.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unit is an element whose multiples include 1, so it generates the whole ring. A maximal ideal is a proper ideal contained in no larger proper ideal.

**Problem.** In a commutative ring with 1, an element is a unit exactly when it belongs to no maximal ideal.

**How the definition helps.** A unit lies in no proper ideal, since its multiples include 1 (our own). A nonunit generates a proper ideal, which lies in a maximal ideal by Krull's theorem (our own).

**Paper or page:** [Element of Unital Commutative Algebra Invertible iff not Contained in Maximal Ideal](https://proofwiki.org/wiki/Element_of_Unital_Commutative_Algebra_Invertible_iff_not_Contained_in_Maximal_Ideal). It says: “there does not exist a maximal ideal M with a ∈ M.”

**Sources:** none listed. No primary source with a working link was found.

### With a unity, every maximal ideal of a commutative ring is prime

**Remember:** A 1 lets you write 1 = m + ra.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unity is an element 1 with 1x = x for every x. With a unity, if M is a maximal ideal and a lies outside M, then 1 = m + ra for some m in M and r in R (our own).

**Problem.** In a commutative ring with unity, every maximal ideal is a prime ideal.

**How the definition helps.** If ab ∈ M and a ∉ M, multiply 1 = m + ra by b to get b = mb + rab ∈ M (our own). Without a unity, 4ℤ is maximal in 2ℤ since it has index 2, yet 2·2 lies in 4ℤ and 2 does not (our own).

**Paper or page:** [Maximal Ideal of Commutative and Unitary Ring is Prime Ideal](https://proofwiki.org/wiki/Maximal_Ideal_of_Commutative_and_Unitary_Ring_is_Prime_Ideal). It says: “Let R be a commutative ring with unity. Let M be a maximal ideal of R. Then M is a prime ideal of R.”

**Sources:**

- [ProofWiki, Maximal Ideal of Commutative and Unitary Ring is Prime Ideal](https://proofwiki.org/wiki/Maximal_Ideal_of_Commutative_and_Unitary_Ring_is_Prime_Ideal)

### Preserving one makes field maps into nonzero rings injective

**Remember:** A map that keeps one cannot send an invertible element to zero.

*Rules out counterexamples.* MSC 13B10 (Morphisms of commutative rings). arXiv math.AC, math.RA. Level 2: later undergraduate.

**Definition.** A unital ring map preserves addition and multiplication and sends 1 to 1. So it sends an element and its inverse to elements whose product is 1, never to 0 in a nonzero ring (our own).

**Problem.** Every unital ring map from a field into a nonzero ring is injective.

**How the definition helps.** Each nonzero field element a has an inverse, so f(a)f(a⁻¹) = 1 ≠ 0 forces f(a) ≠ 0 (our own). So only zero maps to zero, and the map is injective (our own). Without the rule, the zero map from ℚ to ℚ is a counterexample (our own).

**Paper or page:** [Ring Homomorphism from Field is Monomorphism or Zero Homomorphism](https://proofwiki.org/wiki/Ring_Homomorphism_from_Field_is_Monomorphism_or_Zero_Homomorphism). It says: “φ is a monomorphism (that is, φ is injective)”

**Sources:** none listed. No primary source with a working link was found.

### Sending 1 to 1 makes preimages of prime ideals prime

**Remember:** Keep the 1, and the pull-back of a prime is prime.

*Rules out counterexamples.* MSC 13B10 (Morphisms of commutative rings), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring homomorphism keeps addition and multiplication and also sends 1 to 1. So the preimage of an ideal that misses 1 also misses 1.

**Problem.** For a ring homomorphism f between commutative rings, the preimage of every prime ideal is a prime ideal. So every ring map gives a map between the sets of prime ideals, in the opposite direction.

**How the definition helps.** The preimage of a prime ideal is proper because it misses 1, and the product condition pulls back directly. Without f(1) = 1, the zero map from R to a nonzero ring pulls every prime ideal back to all of R, which is not prime (our own).

**Wikipedia:** [Ring homomorphism](https://en.wikipedia.org/wiki/Ring_homomorphism). It says: “If R and S are commutative and P is a prime ideal of S then f⁻¹(P) is a prime ideal of R.”

**Sources:** none listed. No primary source with a working link was found.

### The finite-module definition of integrality makes integral extensions compose

**Remember:** Integral means trapped in a finitely generated subring.

*True by definition. Confidence: medium.* MSC 13B21 (Integral dependence in commutative rings; going up, going down). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For commutative rings A ⊆ B, an element of B is integral over A if it lies in a subring of B that is finitely generated as an A-module. Equivalently, it is a root of a monic polynomial over A (our own). B is integral over A when every element is.

**Problem.** If B is integral over A and C is integral over B, then C is integral over A.

**How the definition helps.** Each x in C satisfies a monic equation with finitely many coefficients in B, and these lie in a subring D of B finitely generated over A (our own). The monic equation makes D\[x\] finitely generated over D, and multiplying generators makes it finitely generated over A (our own).

**Paper or page:** [Algebra, Lemma 10.36.6.](https://stacks.math.columbia.edu/tag/00GN). It says: “Suppose that R → S and S → T are integral ring maps. Then R → T is integral.”

**Sources:** none listed. No primary source with a working link was found.

### The finite-module definition of integrality makes integral elements a subring

**Remember:** Put two elements in one finite algebra to add or multiply them.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B21. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An element x of a commutative ring B is integral over a subring A if x lies in a subring of B that is finitely generated as an A-module. Equivalently, x is a root of a monic polynomial over A, one with leading coefficient 1.

**Problem.** The elements of a commutative ring B that are integral over a subring A form a subring of B.

**How the definition helps.** If x lies in such a subring C and y in such a subring D, the subring CD, spanned by products of their generators, is also finitely generated. It contains x + y, x − y and xy, so these are integral. The work moves to the equivalence of the two definitions, by the determinant trick (our own).

**Wikipedia:** [Integral element](https://en.wikipedia.org/wiki/Integral_element). It says: “there exists a subring C of B containing A\[b\] and which is a finitely generated A-module”

**Sources:** none listed. No primary source with a working link was found.

### Giving the zero polynomial degree −∞ makes the degree rules always hold

**Remember:** Zero has degree minus infinity, which swallows anything added to it.

*Makes the theorem clean to state or prove.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Give the zero polynomial degree −∞, below every integer, with −∞ + a = −∞ for every a, including a = −∞. Nonzero polynomials keep their usual degree, the largest exponent with a nonzero coefficient.

**Problem.** Over an integral domain, all polynomials f and g satisfy deg(fg) = deg f + deg g. They also satisfy deg(f + g) ≤ max(deg f, deg g).

**How the definition helps.** If f or g is zero, both sides of the product formula are −∞ (our own). Otherwise the leading coefficients have nonzero product in a domain, and a sum creates no higher term, with −∞ covering a sum that cancels completely (our own).

**Wikipedia:** [Degree of a polynomial](https://en.wikipedia.org/wiki/Degree_of_a_polynomial). It says: “The 0 polynomial is declared to have degree −∞ so that exceptions are not needed for various reasonable results.”

**Sources:**

- [S. Axler, Linear Algebra Done Right, Springer (1997), p. 64](https://doi.org/10.1007/b97662)

### Primitive polynomials make Gauss's lemma true

**Remember:** Primitive means no prime divides every coefficient.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integer polynomial is primitive if the greatest common divisor of its coefficients is 1, so no prime divides them all and it stays nonzero modulo every prime (our own).

**Problem.** The product of two primitive polynomials is primitive. A primitive polynomial is irreducible over ℤ if and only if it is irreducible over ℚ.

**How the definition helps.** Modulo any prime p, two primitive polynomials are nonzero over the field ℤ/pℤ, so their product is nonzero too (our own). Clearing denominators in a rational factorization and taking primitive parts then gives an integer factorization (our own). Without primitivity, 2x + 2 = 2(x + 1) is reducible over ℤ but irreducible over ℚ (our own).

**Wikipedia:** [Gauss's lemma (polynomials)](https://en.wikipedia.org/wiki/Gauss%27s_lemma_%28polynomials%29). It says: “A non-constant polynomial in Z\[X\] is irreducible in Z\[X\] if and only if it is both irreducible in Q\[X\] and primitive in Z\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### A correction factor makes localization work with zero divisors

**Remember:** Fractions are equal when some t kills their cross difference.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicative set in a commutative ring R, containing 1 and closed under products. S⁻¹R consists of fractions r/s with s in S, where r₁/s₁ = r₂/s₂ when some t in S kills the cross difference: t(s₁r₂ − s₂r₁) = 0.

**Problem.** With this rule, S⁻¹R is a ring in which every element of S is invertible. Every ring map from R that sends S to units factors through it in exactly one way.

**How the definition helps.** The factor t makes a/1 = 0 whenever some s in S kills a, as it must once s is invertible, and it makes equality transitive (our own). Modulo 6 with S = {1, 2, 4}, plain cross multiplication relates 3/1 to 0/2 and 0/2 to 0/1, but not 3/1 to 0/1 (our own). A map f inverting S must send r/s to f(r)f(s)⁻¹, which respects equality because f(t) is invertible (our own).

**Wikipedia:** [Localization (commutative algebra)](https://en.wikipedia.org/wiki/Localization_%28commutative_algebra%29). It says: “The reason for the t is to handle cases such as the above a/1 = 0/1, where s₁r₂ − s₂r₁ is nonzero even though the fractions should be regarded as equal.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ℚ as a localization of ℤ embeds it in characteristic-zero fields

**Remember:** Every nonzero integer is already invertible in a characteristic zero field.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define ℚ as ℤ with every nonzero integer inverted. So a unital map from ℤ that sends every nonzero integer to a unit extends to ℚ in exactly one way.

**Problem.** Every field of characteristic zero has exactly one ring homomorphism from ℚ that sends 1 to 1, and it is injective. Characteristic zero means that n · 1 ≠ 0 for every positive integer n.

**How the definition helps.** In a field of characteristic zero, the unique unital map from ℤ sends each nonzero n to n·1, which is nonzero and hence a unit (our own). So it extends uniquely to ℚ, and the extension is injective since its kernel is a proper ideal of the field ℚ (our own).

**nLab:** [rational number](https://ncatlab.org/nlab/show/rational+number). It says: “is the field of fractions of the commutative ring of integers, ℤ”

**Sources:** none listed. No primary source with a working link was found.

### Inverting every nonzero element makes fraction fields the smallest extensions

**Remember:** Each fraction must go to its numerator's image over its denominator's.

*True by definition.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A fraction field of a domain D is a field containing D in which every element is a quotient a/b of elements of D with b ≠ 0.

**Problem.** Every embedding of an integral domain into a field extends uniquely to an embedding of its fraction field.

**How the definition helps.** An embedding h sends each nonzero b to a unit, so the only possible extension sends a/b to h(a)/h(b) (our own). This respects equality by cross multiplication and preserves fraction arithmetic (our own). It is injective because it preserves 1 and its source is a field (our own).

**nLab:** [localization of a ring](https://ncatlab.org/nlab/show/localization+of+a+ring), [field of fractions](https://ncatlab.org/nlab/show/field+of+fractions). It says: “every field K ⊃ D contains the subfield isomorphic to Q(D)”

**Sources:** none listed. No primary source with a working link was found.

### Inverting outside a prime ideal leaves just one maximal ideal

**Remember:** At a prime ideal, every fraction with numerator outside it is a unit.

*Makes the theorem clean to state or prove.* MSC 13B30 (Rings of fractions and localization for commutative rings), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Localizing a commutative ring with 1 at a prime ideal P allows fractions with any denominator outside P. Products of such denominators stay outside P because P is prime, and every fraction with numerator outside P is then invertible (our own).

**Problem.** The localization of a commutative ring at a prime ideal has exactly one maximal ideal. It consists of the fractions whose numerator lies in that prime ideal.

**How the definition helps.** A fraction a/s with a outside P has inverse s/a (our own). The fractions with numerator in P form a proper ideal, the kernel of the map to the fraction field of R/P (our own). This ideal contains every nonunit, so it is the only maximal ideal (our own).

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

**Definition.** For a module M over a commutative ring and a set S containing 1 and closed under products, S⁻¹M consists of fractions m/s with m in M and s in S. Two fractions m/s and m′/s′ are equal when some t in S kills s′m − sm′.

**Problem.** Let u: L → M and v: M → N form an exact sequence of R-modules. Then the localized sequence S⁻¹L → S⁻¹M → S⁻¹N is exact.

**How the definition helps.** If m/s maps to zero in S⁻¹N, some t in S kills v(m), so tm lies in the kernel of v and equals u(l) for some l (our own). Then m/s is the image of l/(ts) (our own). The localized composite vanishes because vu = 0 (our own).

**Paper or page:** [Algebra, Proposition 10.9.12.](https://stacks.math.columbia.edu/tag/00CS). It says: “Let L → M → N be an exact sequence of R-modules. Then S⁻¹L → S⁻¹M → S⁻¹N is also exact.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of localization makes successive localizations combine

**Remember:** Inverting one set, then another, is inverting both at once.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a commutative ring A, let S contain 1 and be closed under products. A localization is a map A → S⁻¹A sending S to units through which every ring map inverting S factors uniquely.

**Problem.** Let S and S′ be multiplicatively closed subsets of A. Localizing first at S′ and then at the image of S gives the localization at the products ss′.

**How the definition helps.** Ring maps out of either construction correspond to ring maps out of A that invert both S and S′ (our own). A ring map inverts every product ss′ exactly when it inverts both sets, since each contains 1 (our own). So the universal property gives a unique isomorphism compatible with the maps from A (our own).

**Paper or page:** [Algebra, Proposition 10.9.10.](https://stacks.math.columbia.edu/tag/02C6). It says: “Let S̄ be the image of S in S′⁻¹A, then (SS′)⁻¹A is isomorphic to S̄⁻¹(S′⁻¹A).”

**Sources:** none listed. No primary source with a working link was found.

### Annihilator ideals classify cyclic modules

**Remember:** A cyclic module is R with its annihilator divided out.

*Makes the theorem clean to state or prove.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A cyclic module consists of the multiples rx of one generator x. Its annihilator is the ideal of scalars that kill x, and over a commutative ring these also kill every multiple (our own).

**Problem.** A cyclic module over a commutative ring R is isomorphic to R modulo its annihilator ideal. Two cyclic R-modules are isomorphic exactly when their annihilator ideals agree.

**How the definition helps.** Sending r to rx maps R onto the module with kernel the annihilator, so the first isomorphism theorem gives the quotient (our own). Isomorphic modules have equal annihilators, and equal annihilators give equal quotients (our own).

**Wikipedia:** [Cyclic module](https://en.wikipedia.org/wiki/Cyclic_module). It says: “is a module over a ring that is generated by one element.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant factors count the least number of module generators

**Remember:** One prime divides every invariant factor, so each summand counts once.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Over a principal ideal domain, the invariant factor decomposition writes a finitely generated module as a direct sum of nonzero cyclic modules R/(d), each d dividing the next, with d = 0 giving a free copy of R. Because each d divides the next, a prime that divides the first d divides them all.

**Problem.** For a finitely generated module over a principal ideal domain, the minimum number of generators equals the number of nonzero invariant factor summands.

**How the definition helps.** Reducing modulo a prime p that divides the first d turns each summand into one copy of R/(p), so at least one generator per summand is needed (our own). If the first d is 0, the module is free and the dimension over the fraction field gives the same bound (our own). One generator per summand attains the bound.

**Paper or page:** [Theorem 4.1. (Structure theorem, invariant form)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let R be a PID and let M be any finitely generated R-module.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial scalar action makes a surjective endomorphism invertible

**Remember:** Let f act as x; then 1 − xq kills everything.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Make M a module over the polynomial ring R\[x\] by letting x act as f, so a polynomial p acts as p(f). Then f is surjective exactly when xM = M (our own).

**Problem.** A surjective endomorphism of a finitely generated module over a commutative ring is an isomorphism.

**How the definition helps.** Since xM = M and M is finitely generated, the determinant trick gives a polynomial q with 1 − xq(x) killing M (our own). So q(f)f and fq(f) both equal the identity, and f is invertible (our own).

**Paper or page:** [Corollary 2.4. (Vasconcelos-Strooker Theorem)](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is onto, then it is injective.”

**Sources:** none listed. No primary source with a working link was found.

### Rank over the fraction field adds in exact sequences

**Remember:** Pass to fractions, then dimensions add.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The rank of a finitely generated module over an integral domain is the dimension of the vector space made by allowing nonzero scalars as denominators. Allowing denominators keeps exact sequences exact.

**Problem.** If A is a submodule of M and both are finitely generated over an integral domain, then rank(M) = rank(A) + rank(M/A).

**How the definition helps.** Allowing denominators turns 0 → A → M → M/A → 0 into an exact sequence of vector spaces, along which dimensions add (our own). Clearing denominators shows this rank is also the largest size of a linearly independent family (our own).

**Paper or page:** [Proposition 10.9.12.](https://stacks.math.columbia.edu/tag/00CS). It says: “Then S⁻¹L → S⁻¹M → S⁻¹N is also exact.”

**Sources:** none listed. No primary source with a working link was found.

### The unit test for the Jacobson radical gives Nakayama’s lemma

**Remember:** Radical elements a keep 1 − ra invertible for every r.

*Rules out counterexamples.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a commutative ring R with identity, the Jacobson radical holds exactly the elements a for which 1 − ra is invertible for every r ∈ R.

**Problem.** If M is finitely generated and I is an ideal in the Jacobson radical, then IM = M implies M = 0. Also, any lifts of generators of M/IM generate M.

**How the definition helps.** This test makes every element of 1 + I invertible, and the determinant trick gives such an element that kills M, so M = 0. Applying this to M modulo the span of the lifts gives the generator statement. Without the hypothesis it fails: I = (3) and M = ℤ/2ℤ satisfy IM = M (our own).

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

**Remember:** Saturated means a torsion-free quotient, and free quotients split off.

*Rules out counterexamples.* MSC 13C10 (Projective and free modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A submodule N of a module M over a domain is saturated if rm ∈ N with r ≠ 0 forces m ∈ N. Equivalently, M/N is torsion-free: no nonzero element of M/N is killed by a nonzero scalar.

**Problem.** Every saturated submodule N of a finitely generated module M over a principal ideal domain is a direct summand, that is, M = N ⊕ C for some submodule C.

**How the definition helps.** A finitely generated torsion-free module over a principal ideal domain is free, so M/N is free. Lifting a basis of M/N gives a complement C (our own). For 2ℤ inside ℤ the quotient ℤ/2ℤ has torsion, and ℤ has no element of order two to complement 2ℤ.

**Wikipedia:** [Free module](https://en.wikipedia.org/wiki/Free_module). It says: “For a finitely generated module over a PID (such as Z), the properties free, projective, flat, and torsion-free are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Finite presentations count generators and relations separately

**Remember:** Finitely many generators, and finitely many relations among them.

*True by definition.* MSC 13E05 (Commutative Noetherian rings and modules). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A finite presentation writes a module as a finite-rank free module modulo a finitely generated submodule of relations, that is, with finitely many generators and finitely many relations.

**Problem.** Every finitely generated module over a commutative Noetherian ring has a finite presentation.

**How the definition helps.** Mapping a free module onto M by the given generators makes the kernel the module of relations (our own). Over a Noetherian ring this kernel, a submodule of a finitely generated module, is finitely generated.

**Paper or page:** [Lemma 10.51.1.](https://stacks.math.columbia.edu/tag/00IK). It says: “Any finite R-module is of finite presentation.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal counterexamples give Noetherian induction

**Remember:** A maximal counterexample has no larger counterexample.

*True by definition. Confidence: medium.* MSC 13E05 (Commutative Noetherian rings and modules). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A module is Noetherian if every nonempty family of submodules has a maximal member, one that no other member strictly contains. Equivalently, every increasing chain of submodules eventually stops.

**Problem.** Suppose a property passes to each submodule whenever all strictly larger submodules have it. Then every submodule of a Noetherian module has the property.

**How the definition helps.** If the property fails, the family of failing submodules has a maximal member N (our own). Every submodule strictly larger than N has the property, so the induction step gives it to N, a contradiction (our own).

**Paper or page:** [Proposition 2.16. (Noetherian Induction Principle)](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Suppose the inductive step: if all ideals in F strictly larger than I ∈ F satisfy P, then I satisfies P.”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizing chains makes Noetherian modules closed under extensions

**Remember:** A chain stops once its trace in A and its image stop.

*True by definition.* MSC 13E05 (Commutative Noetherian rings and modules). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A module is Noetherian if every increasing chain of submodules eventually stops growing.

**Problem.** For a submodule A of M, the module M is Noetherian exactly when A and M/A are both Noetherian.

**How the definition helps.** A chain in M stops once its intersections with A and its images in M/A stop, because nested submodules with equal intersection with A and equal image are equal (our own). Conversely, chains in A are chains in M, and chains in M/A lift to chains in M.

**Paper or page:** [Proposition 2.6.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is an exact sequence of modules, then M is noetherian if and only if M′, M″ are.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring ideals instead of numbers makes factorization unique

**Remember:** Finitely generated ideals, no missing integral fractions, and primes are maximal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 11R27. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** A Dedekind domain is a Noetherian domain (every ideal finitely generated) that is integrally closed (every fraction that is a root of a monic polynomial over it lies in it) and in which every nonzero prime ideal is maximal.

**Problem.** In a Dedekind domain, every nonzero proper ideal is a product of prime ideals in exactly one way, up to order. The ring of integers of every number field is a Dedekind domain.

**How the definition helps.** These three conditions are exactly the hypotheses of Dedekind’s theorem that nonzero ideals factor uniquely into nonzero prime ideals. Rings of integers of number fields satisfy them (our own). So in ℤ\[√−5\], where 6 = 2·3 = (1 + √−5)(1 − √−5), ideals still factor uniquely (our own).

**nLab:** [Dedekind ring](https://ncatlab.org/nlab/show/Dedekind+ring), [Dedekind domain](https://ncatlab.org/nlab/show/Dedekind+domain), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut), [ideal class group](https://ncatlab.org/nlab/show/ideal+class+group), [Picard group](https://ncatlab.org/nlab/show/Picard+group). It says: “every ideal can be uniquely factored into prime ideals and the non-zero fractional ideals form a group under multiplication of ideals.”

**Sources:**

- [Serge Lang, Algebraic number theory, Graduate Texts in Mathematics 110, Springer (1970, 1994)](https://doi.org/10.1007/978-1-4612-0853-2)

### Division with a smaller remainder makes every ideal principal

**Remember:** You can always divide and get a smaller remainder.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 13F10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Euclidean domain is a domain with a size function f from nonzero elements to nonnegative integers, so that dividing by any nonzero b leaves a smaller remainder. That is, for every a there are q,r with a = bq + r and either r = 0 or f(r) &lt; f(b).

**Problem.** Every Euclidean domain is a principal ideal domain, that is, a ring in which every ideal is generated by one element. So every Euclidean domain is also a unique factorization domain.

**How the definition helps.** A nonzero b of least size in a nonzero ideal generates it, since dividing any member by b leaves a remainder in the ideal that must be 0 (our own). Unique factorization then follows because principal ideal domains have it (our own).

**Wikipedia:** [Euclidean domain](https://en.wikipedia.org/wiki/Euclidean_domain). It says: “if I is a nonzero ideal of R then any element a of I \\ {0} with minimal value (on that set) of f(a) is a generator of I.”

**Sources:**

- [T. Motzkin, The Euclidean algorithm, Bulletin of the American Mathematical Society 55 (1949) 1142–1146](https://doi.org/10.1090/S0002-9904-1949-09344-8)

### Squared complex distance makes Gaussian division Euclidean

**Remember:** Round both coordinates of the quotient to make the remainder smaller.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 11R04. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Give a Gaussian integer a + bi the size a² + b², its squared distance from 0. Rounding both coordinates puts every complex number within squared distance 1/2 of a Gaussian integer (our own).

**Problem.** The Gaussian integers admit division with remainder using the squared-distance norm. For each nonzero divisor, one can choose a quotient whose remainder has smaller norm than the divisor.

**How the definition helps.** For β ≠ 0, round α/β to a Gaussian integer q, so \|α/β − q\|² ≤ 1/2 (our own). Since the norm is multiplicative, the remainder α − βq has norm at most half that of β (our own).

**Paper or page:** [Gaussian Integers form Euclidean Domain](https://proofwiki.org/wiki/Gaussian_Integers_form_Euclidean_Domain). It says: “Then ν is a Euclidean valuation on ℤ\[i\].”

**Sources:** none listed. No primary source with a working link was found.

### Principal ideal domains are exactly the domains with a Dedekind–Hasse norm

**Remember:** When divisibility fails, some linear combination has smaller positive norm.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F10 (Principal ideal rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Dedekind–Hasse norm on a domain R is a function v to the nonnegative integers, zero only at 0, such that whenever a nonzero b does not divide a, some element pa − bq of the ideal (a, b) satisfies 0 &lt; v(pa − bq) &lt; v(b).

**Problem.** An integral domain is a principal ideal domain exactly when it has a Dedekind–Hasse norm.

**How the definition helps.** In a nonzero ideal, an element b of least nonzero norm divides every member a, or else some pa − bq would be a smaller nonzero member, so b generates the ideal. Conversely, in a principal ideal domain set v(0) = 0 and v(x) = 2ᵏ when x has k prime factors with multiplicity (our own). If b does not divide a, a generator of (a, b) is a proper divisor of b, so its norm is smaller (our own).

**nLab:** [Dedekind-Hasse norm](https://ncatlab.org/nlab/show/Dedekind-Hasse+norm). It says: “a pid is like an Euclidean domain but with a weaker notion of Euclidean division.”

**Sources:**

- [John Greene, Principal ideal domains are almost Euclidean, American Mathematical Monthly 104 (1997) 154–156](https://doi.org/10.1080/00029890.1997.11990615)

### Principal ideals turn irreducible elements into primes

**Remember:** Irreducible means no principal ideal fits between (p) and the ring.

*True by definition.* MSC 13F10 (Principal ideal rings), 13F15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A nonzero nonunit p of an integral domain is irreducible exactly when (p), the set of multiples of p, is maximal among proper principal ideals. This holds because d divides p exactly when (d) contains (p) (our own).

**Problem.** Every irreducible element of a principal ideal domain is prime. That is, if it divides a product, it divides at least one factor.

**How the definition helps.** In a principal ideal domain every ideal is principal, so (p) is a maximal ideal and hence prime (our own). Membership in (p) means divisibility by p, so p divides a factor of any product it divides (our own).

**Paper or page:** [Principal Ideal of Principal Ideal Domain is of Irreducible Element iff Maximal/Forward Implication](https://proofwiki.org/wiki/Principal_Ideal_of_Principal_Ideal_Domain_is_of_Irreducible_Element_iff_Maximal/Forward_Implication). It says: “Then (p) is a maximal ideal of D.”

**Sources:** none listed. No primary source with a working link was found.

### A reduced fraction in a unique factorization domain cannot hide integrality

**Remember:** Clearing a monic equation forces the denominator to divide a numerator power.

*True by definition.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13B22. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A fraction is integral over R if it is a root of a monic polynomial over R. In a unique factorization domain every fraction can be written as a/b in lowest terms (our own), with no prime dividing both a and b.

**Problem.** Every unique factorization domain is integrally closed. That means every fraction integral over the domain already belongs to the domain.

**How the definition helps.** Multiplying the monic equation for a/b by a power of b shows that b divides a power of a (our own). A prime factor of b would then divide a, against lowest terms, so b is a unit and a/b lies in R (our own).

**Paper or page:** [Unique Factorization Domain is Integrally Closed](https://proofwiki.org/wiki/Unique_Factorization_Domain_is_Integrally_Closed). It says: “Then A is integrally closed.”

**Sources:** none listed. No primary source with a working link was found.

### Ascending chain conditions guarantee that factorizations into irreducibles exist

**Remember:** Chains of divisors must stop, so factoring must stop.

*Rules out counterexamples.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A domain satisfies the ascending chain condition on principal ideals if every increasing chain (a₁) ⊆ (a₂) ⊆ … of principal ideals becomes constant. Noetherian domains satisfy it, since there every increasing chain of ideals becomes constant.

**Problem.** Take a Noetherian domain, or any domain with the ascending chain condition on principal ideals. Then every nonzero non-unit is a finite product of irreducible elements. This is the existence half of unique factorization.

**How the definition helps.** A nonzero nonunit without a factorization splits into two nonunits, one again without one, whose principal ideal strictly contains the first (our own). Repeating gives a strictly increasing chain of principal ideals, which the condition forbids (our own). In the ring of all algebraic integers every nonzero nonunit is a product of two square roots, so no factorization into irreducibles exists (our own).

**Wikipedia:** [Atomic domain](https://en.wikipedia.org/wiki/Atomic_domain), [Noetherian ring](https://en.wikipedia.org/wiki/Noetherian_ring). It says: “More generally, any integral domain satisfying the ascending chain condition on principal ideals (ACCP) is an atomic domain.”

**Sources:**

- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)
- [A. Grams, Atomic rings and the ascending chain condition for principal ideals, Mathematical Proceedings of the Cambridge Philosophical Society 75 (1974) 321–329](https://doi.org/10.1017/S0305004100048532)

### Content separates the two kinds of prime factors in polynomials

**Remember:** Factor the content in the ring and the primitive part over the fraction field.

*Makes the theorem clean to state or prove.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13F20. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The content of a nonzero polynomial over a unique factorization domain is a greatest common divisor of its coefficients. The polynomial is its content times a primitive polynomial, one whose coefficients have no common nonunit factor.

**Problem.** Every nonzero polynomial over a unique factorization domain factors into its content and primitive irreducible polynomials. This gives unique factorization in the polynomial ring, up to order and invertible factors.

**How the definition helps.** Content splits each polynomial into a constant part, which factors uniquely in the base ring (our own). Gauss’s lemma, that products of primitive polynomials are primitive, matches factorization of the primitive part with unique factorization over the fraction field (our own).

**Wikipedia:** [Irreducible polynomial](https://en.wikipedia.org/wiki/Irreducible_polynomial). It says: “a non-zero constant and a finite number of non-constant irreducible primitive polynomials.”

**Paper or page:** [Polynomials in Integers is Unique Factorization Domain](https://proofwiki.org/wiki/Polynomials_in_Integers_is_Unique_Factorization_Domain). It says: “Then ℤ\[X\] is a unique factorization domain.”

**Sources:** none listed. No primary source with a working link was found.

### Counting factorizations up to units makes them unique

**Remember:** Same factors up to order and unit multiples count as one.

*Makes the theorem clean to state or prove.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Two factorizations into irreducibles (nonzero nonunits that are not products of two nonunits) count as the same if one becomes the other after reordering and multiplying factors by units, the invertible elements.

**Problem.** In a unique factorization domain, every nonzero non-unit is a product of irreducible elements in exactly one way.

**How the definition helps.** This rule states exactly the uniqueness that a unique factorization domain requires. In ℤ, 6 = 2·3 = (−3)·(−2) is one factorization under this rule (our own).

**Wikipedia:** [Irreducible element](https://en.wikipedia.org/wiki/Irreducible_element), [Unique factorization domain](https://en.wikipedia.org/wiki/Unique_factorization_domain). It says: “If the irreducible factors of every non-zero non-unit element are uniquely defined, up to the multiplication by a unit, then the integral domain is called a unique factorization domain”

**Sources:** none listed. No primary source with a working link was found.

### Prime exponents give greatest common divisors and least common multiples

**Remember:** Take smaller exponents for common divisors and larger ones for common multiples.

*True by definition.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** In a unique factorization domain, fix one prime from each class of primes that differ by a unit, and let the exponent of a prime in a nonzero element count its copies. Then a divides b exactly when every exponent of a is at most the matching exponent of b (our own).

**Problem.** Two nonzero elements of a unique factorization domain have a greatest common divisor and a least common multiple. Their prime exponents are the smaller and larger exponents, respectively.

**How the definition helps.** Since divisibility compares exponents, minimum exponents give a common divisor that every common divisor divides (our own). Maximum exponents give a common multiple that divides every common multiple (our own).

**nLab:** [unique factorization domain](https://ncatlab.org/nlab/show/unique+factorization+domain). It says: “freely generated by irreducible principal ideals.”

**Paper or page:** [UFD is GCD Domain](https://proofwiki.org/wiki/UFD_is_GCD_Domain). It says: “Then A is a GCD domain.”

**Sources:** none listed. No primary source with a working link was found.

### Prime factorizations are unique because primes divide individual factors

**Remember:** A prime dividing a product divides a factor, so factors match.

*True by definition.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A prime element is a nonzero nonunit p that divides a factor whenever it divides a product. Call a domain factorial if every nonzero nonunit is a product of primes.

**Problem.** A domain has unique factorization into irreducibles, apart from order and unit factors, exactly when every nonzero nonunit factors into primes. In particular, every principal ideal domain has unique factorization.

**How the definition helps.** A prime in one factorization divides some prime in the other, so the two differ by a unit and cancel; repeating matches all factors (our own). Conversely, uniqueness makes every irreducible p prime, by comparing factorizations of ab = pc (our own). In a principal ideal domain irreducibles are prime and chains of ideals stabilize, so factorizations into primes exist (our own).

**Paper or page:** [Lemma 10.120.13.](https://stacks.math.columbia.edu/tag/034V), [Euclid's Lemma for Unique Factorization Domain](https://proofwiki.org/wiki/Euclid's_Lemma_for_Unique_Factorization_Domain). It says: “A principal ideal domain is a unique factorization domain.”

**Sources:** none listed. No primary source with a working link was found.

### Formal polynomial rings have evaluation maps by their universal property

**Remember:** Choose where the variables go, and evaluation is a ring map.

*True by definition. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A formal polynomial over R is a finite sum of coefficients times monomials in the variables, where distinct monomials are independent and multiply by adding exponents. Addition is termwise, and multiplication distributes over sums.

**Problem.** Let R and S be commutative rings with 1, let ψ be a ring map from R to S, and choose elements sⱼ of S. There is a unique ring homomorphism from the polynomial ring to S that extends ψ and sends each Xⱼ to sⱼ.

**How the definition helps.** A ring map extending ψ with Xⱼ ↦ sⱼ must send rX₁<sup>a₁⋯</sup> to ψ(r)s₁<sup>a₁⋯</sup>, so it is unique (our own). Because the monomials are independent and S is commutative, this rule respects sums and products (our own).

**Paper or page:** [Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set). It says: “Then there exists a unique evaluation homomorphism φ: R\[{Xⱼ: j ∈ J}\] → S at (sⱼ) extending ψ.”

**Sources:**

- [ProofWiki, Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set)

### Over an integral domain, the only invertible polynomials are invertible constants

**Remember:** Degrees add in a domain, so an invertible polynomial has degree zero.

*Rules out counterexamples. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials), 13G05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 in which a product of nonzero elements is nonzero. So the leading coefficient of a product of nonzero polynomials is nonzero, and degrees add (our own).

**Problem.** Over an integral domain D, the units of the polynomial ring D\[X\] are exactly the units of D.

**How the definition helps.** If fg = 1, the degrees add to 0, so f and g are constants that are inverse in D (our own). Conversely, units of D stay units in D\[X\] (our own). Without the domain condition this fails: modulo 4, (1 + 2X)² = 1 (our own).

**Paper or page:** [Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain), [Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring). It says: “Then the group of units of D\[X\] is precisely the group of elements of D\[X\] of degree zero that are units of D.”

**Sources:**

- [ProofWiki, Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain)
- [ProofWiki, Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring)

### Polynomials as coefficient lists, not functions, keep distinct polynomials distinct

**Remember:** A polynomial is its coefficients, not the values it takes.

*Rules out counterexamples.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial over D is its list of coefficients, with only finitely many nonzero, not the function it defines on D. Different lists are different polynomials even when their functions agree.

**Problem.** Over a finite integral domain D, the ring of polynomial forms D\[X\] is not isomorphic to the ring of polynomial functions on D.

**How the definition helps.** Over a finite D there are only finitely many functions D → D, but the distinct monomials 1, X, X², … make D\[X\] infinite (our own). An infinite ring is not isomorphic to a finite one (our own). For example, Xᵖ and X give the same function on the field of p elements (our own).

**Paper or page:** [Ring of Polynomial Forms is not necessarily Isomorphic to Ring of Polynomial Functions](https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions). It says: “Then it is not necessarily the case that D\[X\] is isomorphic with P(D).”

**Sources:**

- [ProofWiki, Ring of Polynomial Forms is not necessarily Isomorphic to Ring of Polynomial Functions](https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions)

### Setting x equal to a makes the polynomial factor theorem immediate

**Remember:** Setting x equal to a turns each polynomial into its value.

*True by definition.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Imposing x = a means forming R\[x\]/(x − a), where two polynomials are equal when their difference is a multiple of x − a. There each polynomial f equals the constant f(a), and distinct constants stay distinct (our own).

**Problem.** Over a commutative ring with 1, a polynomial vanishes at a exactly when it is a multiple of x − a.

**How the definition helps.** In the quotient f equals f(a), so f(a) = 0 exactly when f is zero there (our own). Being zero in the quotient means being a multiple of x − a.

**Paper or page:** [Polynomial Factor Theorem](https://proofwiki.org/wiki/Polynomial_Factor_Theorem). It says: “ξ ∈ K: P(ξ) = 0 ⇔ P(x) = (x − ξ) Q(x)”

**Sources:** none listed. No primary source with a working link was found.

### Dual numbers define the formal derivative of power series

**Remember:** Substitute X + ε with ε² = 0, and read off the coefficient of ε.

*True by definition. Confidence: medium.* MSC 13F25 (Formal power series rings), 13N15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a power series p over a commutative ring, define its derivative p′ by p(X + ε) = p(X) + p′(X)ε, where ε² = 0. Substituting X + ε for X is a ring map, continuous for the X-adic topology.

**Problem.** The derivative satisfies (pq)′ = p′q + pq′. For formal composition with q(0) = 0, it satisfies (p ∘ q)′ = (p′ ∘ q)q′.

**How the definition helps.** Substitution is a ring map, so (pq)(X + ε) = (p + p′ε)(q + q′ε), and ε² = 0 leaves the coefficient p′q + pq′ (our own). Likewise p(q(X + ε)) = p(q + q′ε) = p(q) + p′(q)q′ε gives the chain rule (our own).

**nLab:** [power series](https://ncatlab.org/nlab/show/power+series). It says: “the restriction of p ↦ p′ to R\[X\] is by construction a derivation such that X′ = 1”

**Sources:** none listed. No primary source with a working link was found.

### The valuation definition makes nonzero ideals of discrete valuation rings uniformizer powers

**Remember:** Divisibility is comparing values, so the least value generates.

*True by definition. Confidence: medium.* MSC 13F30 (Valuation rings), 12J10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A discrete valuation ring is the set of x in a field with v(x) ≥ 0, for a surjective map v from nonzero elements onto ℤ with v(xy) = v(x) + v(y), v(x + y) ≥ min(v(x), v(y)) and v(0) = ∞. In it a nonzero x divides y exactly when v(y) ≥ v(x) (our own).

**Problem.** In a discrete valuation ring, every nonzero ideal is generated by a power of a uniformizer, an element of value one.

**How the definition helps.** A nonzero ideal contains an element a of least value n, since its values are nonnegative integers (our own). For a uniformizer t, a and tⁿ divide each other, and a divides every member, so the ideal is (tⁿ) (our own).

**Paper or page:** [Proposition 4.13.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is of the form (tⁿ) for some unique n ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Integral domains leave out the zero ring, as primes leave out 1

**Remember:** Proper ideal gives a nonzero quotient; prime ideal gives no zero divisors.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with identity in which products of nonzero elements are nonzero. A prime ideal P is proper and satisfies ab ∈ P only if a ∈ P or b ∈ P, for all ring elements a,b.

**Problem.** For an ideal P of a commutative ring R with identity, R/P is an integral domain exactly when P is prime. For each positive integer n, ℤ/nℤ is an integral domain exactly when n is prime.

**How the definition helps.** A product vanishes in R/P exactly when ab ∈ P, so primality is the no-zero-divisor rule in R/P, and properness makes R/P nonzero (our own). For ℤ/nℤ, Euclid’s lemma makes (n) prime exactly when n is prime, and ℤ/1ℤ is excluded as the zero ring (our own).

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring), [Prime ideal](https://en.wikipedia.org/wiki/Prime_ideal). It says: “Second, this way, for a positive integer n, the ring Z/nZ is a domain if and only if n is prime, but 1 is not prime.”

**Sources:** none listed. No primary source with a working link was found.

### Into an integral domain, every nonzero ring map sends 1 to 1

**Remember:** With no zero divisors, the image of 1 is 0 or 1.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13B10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 in which ab = 0 forces a = 0 or b = 0.

**Problem.** Let φ be a ring homomorphism from a ring with 1 to an integral domain. If φ is not the zero map, then φ sends 1 to 1.

**How the definition helps.** The element e = φ(1) satisfies e² = e, so e(e − 1) = 0 and e is 0 or 1. If e = 0, then φ(r) = φ(r)φ(1) = 0 for every r, so φ is the zero map. The rule excludes targets such as ℤ × ℤ, where n ↦ (n, 0) sends 1 to (1, 0) (our own).

**Paper or page:** [Ring Homomorphism from Ring with Unity to Integral Domain Preserves Unity](https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity). It says: “Let φ: R → D be a ring homomorphism such that ker φ ≠ R where ker φ denotes the kernel of φ.”

**Sources:**

- [ProofWiki, Ring Homomorphism from Ring with Unity to Integral Domain Preserves Unity](https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity)

### No zero divisors force the characteristic of a domain to be prime

**Remember:** If n = ab and n·1 = 0, then a·1 or b·1 is already 0.

*Rules out counterexamples.* MSC 13G05 (Integral domains). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 in which ab = 0 forces a = 0 or b = 0. Its characteristic is the least n &gt; 0 with n·1 = 0, or 0 if there is none.

**Problem.** Every integral domain, and so every field, has characteristic 0 or a prime number.

**How the definition helps.** If the characteristic were n = ab with 1 &lt; a, b &lt; n, then a·1 and b·1 are nonzero by minimality, yet their product is 0 (our own). Characteristic 1 would mean 1 = 0 (our own). In ℤ/6ℤ, 2·3 = 0 shows the failure (our own).

**Paper or page:** [Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime), [Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One), [Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime). It says: “Let D be an integral domain. Let Char D be the characteristic of D. Then Char D is either 0 or a prime number.”

**Sources:**

- [ProofWiki, Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime)
- [ProofWiki, Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One)
- [ProofWiki, Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime)

### Counting surviving monomials gives the Hilbert function

**Remember:** Count monomials that division leaves untouched, one degree at a time.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 14A10. arXiv math.AG. Level 2: later undergraduate.

**Definition.** For a fixed monomial order, the standard monomials of an ideal I are the monomials not divisible by the leading monomial of any nonzero polynomial in I. Their classes form a basis of the polynomial ring modulo I (our own).

**Problem.** For a homogeneous ideal in a polynomial ring over a field, the dimension of the quotient in degree d equals the number of standard monomials of degree d, for any monomial order.

**How the definition helps.** Division by a Gröbner basis shows that standard monomials give a basis of the quotient (our own). For a homogeneous ideal the quotient splits by degree, and the standard monomials of degree d give a basis of the degree-d part (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “dᵢ is the number of monomials of degree i that are not multiple of any leading monomial in the Gröbner basis.”

**Sources:** none listed. No primary source with a working link was found.

### Elimination orders let a Gröbner basis keep only the desired variables

**Remember:** If the largest monomial stays, the whole polynomial stays.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** An elimination order ranks every monomial containing a removed variable above every monomial in the kept variables alone. So a polynomial whose leading monomial uses only kept variables uses only kept variables throughout (our own).

**Problem.** Let G be a Gröbner basis over a field of an ideal I, for an elimination order. The members of G in the kept variables alone form a Gröbner basis of the polynomials in I that use only kept variables.

**How the definition helps.** Every nonzero f in I that uses only kept variables has its leading monomial divisible by that of some g ∈ G (our own). That leading monomial uses only kept variables, so by the order g does too (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “G ∩ K\[Y\] is a Gröbner basis of I ∩ K\[Y\]”

**Sources:** none listed. No primary source with a working link was found.

### Leading monomial ideals explain why finite Gröbner bases exist

**Remember:** Finitely many leading monomials suffice, so pick one polynomial for each.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** A Gröbner basis of an ideal I is a list of polynomials in I whose leading monomials generate the leading monomial ideal, the ideal generated by the leading monomials of all nonzero members of I.

**Problem.** Every ideal of polynomials over a field in finitely many variables has a finite Gröbner basis for any monomial order.

**How the definition helps.** Hilbert’s basis theorem gives finitely many leading monomials of I that generate the leading monomial ideal (our own). One member of I with each of these leading monomials is then a finite Gröbner basis (our own).

**Paper or page:** [Hilbert's Basis Theorem/Corollary](https://proofwiki.org/wiki/Hilbert's_Basis_Theorem/Corollary). It says: “Then A\[x₁, …, xₙ\] is also a Noetherian ring.”

**Sources:** none listed. No primary source with a working link was found.

### Leading monomial ideals show why Buchberger’s algorithm stops

**Remember:** Each new remainder strictly enlarges the monomial ideal.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AG. Level 2: later undergraduate.

**Definition.** For a list of polynomials and a fixed monomial order, take the ideal generated by the leading monomials of the list. Buchberger’s algorithm adds a remainder only when its leading monomial lies outside this ideal, so each addition enlarges it.

**Problem.** Buchberger’s algorithm terminates after finitely many additions to its starting list, for polynomials in finitely many variables over a field.

**How the definition helps.** The additions give a strictly increasing chain of monomial ideals. Dickson’s lemma says such a chain stops, so additions stop, and a finite list has finitely many pairs to test (our own).

**Wikipedia:** [Buchberger's algorithm](https://en.wikipedia.org/wiki/Buchberger%27s_algorithm). It says: “The algorithm terminates because it is consistently increasing the size of the monomial ideal generated by the leading terms of our set F”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Leading monomials make division remainders unique

**Remember:** Keep exactly the monomials the leading terms cannot divide.

*True by definition.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13A15. arXiv math.AG. Level 2: later undergraduate.

**Definition.** For a fixed monomial order over a field, a Gröbner basis of an ideal I is a finite subset G of I such that the leading monomial of every nonzero member of I is divisible by the leading monomial of some g ∈ G.

**Problem.** Division by a Gröbner basis gives the same remainder for every polynomial in a given class modulo I. The monomials not divisible by any basis leading monomial give a vector space basis of the quotient.

**How the definition helps.** Two remainders of the same class differ by a member of I none of whose monomials is divisible by a leading monomial of G, so the difference is 0 (our own). Division puts every class in the span of the surviving monomials, and this uniqueness makes them independent (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “the monomials that are irreducible by G form a basis of the F-vector space R/I.”

**Sources:**

- [Bruno Buchberger, 1965 doctoral thesis, English translation in Journal of Symbolic Computation 41 (2006), pp. 475–511.](https://doi.org/10.1016/j.jsc.2005.09.007)

### Making reduced Gröbner bases monic gives every ideal one canonical basis

**Remember:** Scale to leading coefficient 1, and the Gröbner basis is unique.

*Rules out counterexamples.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Gröbner basis of an ideal, for a fixed monomial order over a field k, is reduced if each member has leading coefficient 1 and no monomial of any member is divisible by another member’s leading monomial.

**Problem.** For a fixed monomial ordering, each ideal of k\[x₁, …, xₙ\] has exactly one reduced Gröbner basis. So two ideals are equal exactly when they have the same reduced Gröbner basis.

**How the definition helps.** The leading monomials of a reduced basis are the minimal generators of the leading monomial ideal, so they depend only on the ideal (our own). Each member is its leading monomial minus that monomial’s unique remainder, so it is fixed too (our own). Without leading coefficient 1, {x} and {2x} both qualify for (x) over ℚ (our own).

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “All reduced Gröbner bases of an ideal (for a fixed monomial ordering) are equal. It follows that two ideals are equal if and only if they have the same reduced Gröbner basis.”

**Sources:**

- [B. Buchberger, Bruno Buchberger's PhD thesis 1965: An algorithm for finding the basis elements of the residue class ring of a zero dimensional polynomial ideal, Journal of Symbolic Computation (2006), English translation](https://doi.org/10.1016/j.jsc.2005.09.007)

### Pairwise leading term cancellation gives Buchberger’s test

**Remember:** Test the smallest clash between each pair of leading terms.

*Makes the theorem clean to state or prove.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AG. Level 2: later undergraduate.

**Definition.** The S-polynomial of two nonzero polynomials scales each by a term so both leading terms become the least common multiple of their leading monomials, then subtracts. It is the smallest cancellation of the two leading terms: every other one is a scalar times a monomial times it (our own).

**Problem.** A finite list of nonzero polynomials is a Gröbner basis of its ideal exactly when every pair’s S-polynomial reduces to zero by the list.

**How the definition helps.** A sum ∑ hᵢgᵢ whose greatest terms cancel splits into pairwise cancellations, each a multiple of an S-polynomial (our own). If every S-polynomial reduces to zero, these sums can be rewritten until no cancellation occurs, so each leading monomial in the ideal is divisible by one from the list (our own). The converse holds because division by a Gröbner basis leaves remainder zero on its ideal (our own).

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

**Remember:** f′ at a root multiplies its gaps to all other roots.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12D05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For a monic complex polynomial f with roots r₁, …, rₙ listed with repetition, the discriminant is the product of (rᵢ − rⱼ)² over pairs i &lt; j. The resultant of f and g is the product of the values g(rᵢ).

**Problem.** Let f be monic of degree n ≥ 2 over the complex numbers. Its discriminant equals the resultant of f and f′ times (−1) raised to n(n − 1)/2.

**How the definition helps.** By the product rule, f′(rᵢ) is the product of rᵢ − rⱼ over all j ≠ i. So the product of all f′(rᵢ) uses each pair in both orders, giving the discriminant times one sign −1 for each of the n(n − 1)/2 pairs (our own).

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “a₀⁻¹ (−1)⁽ⁿ⁽ⁿ⁻¹⁾⁄²⁾ resₓ(f(x), f′(x))”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneous resultants commute with substitutions that lower ordinary degrees

**Remember:** Keep the matrix size fixed when the top coefficient disappears.

*Rules out counterexamples.* MSC 13P15 (Solving polynomial systems; resultants). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The homogeneous resultant of two forms in x and y of degrees d and e is the Sylvester determinant of their coefficient lists, which keep lengths d + 1 and e + 1 even when leading coefficients are zero.

**Problem.** Substituting into the coefficients of a homogeneous resultant gives the homogeneous resultant of the substituted forms, even when the ordinary degrees fall.

**How the definition helps.** Fixed lengths keep every coefficient in its matrix position, and determinants commute with substitution. In our own example, tx + y and tx + 2y have resultant t, which is 0 at t = 0. Rebuilding from the substituted constants y and 2y would give the empty determinant, 1.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “Res(φ(P), φ(Q)) = φ(Res(P,Q)).”

**Sources:** none listed. No primary source with a working link was found.

### Root differences make resultants detect common roots and multiply

**Remember:** A product of root gaps is zero exactly when some gap is zero.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The resultant of A and B, of positive degrees d and e with leading coefficients a and b, is aᵉbᵈ times the product of all differences λ − μ between a root λ of A and a root μ of B, listed with multiplicity in a common splitting field.

**Problem.** The resultant res(A, B) is zero exactly when A and B have a common root in a field where both split. For nonconstant C over the same base field, res(A, BC) = res(A, B) res(A, C).

**How the definition helps.** A product of differences is zero exactly when some root is shared. The roots of BC are those of B together with those of C, and degrees and leading coefficients combine to match, giving res(A, BC) = res(A, B) res(A, C). The work is showing this equals the Sylvester determinant; taking the product as the definition is our own framing.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “The resultant of two polynomials with coefficients in an integral domain is zero if and only if they have a common root in an algebraically closed field containing the coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### The discriminant of a product separates within-factor and cross-factor differences

**Remember:** Separate root pairs inside each factor from pairs across the factors.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12D05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** For monic polynomials with roots listed with repetition, the discriminant is the product of squared differences over pairs of roots from one list. The resultant is the product of differences over pairs with one root from each list.

**Problem.** For two such polynomials A and B, the discriminant of AB equals their two discriminants multiplied by the square of their resultant.

**How the definition helps.** The roots of AB are those of A together with those of B. Each pair lies inside A, inside B, or across, giving disc A, disc B and the square of the resultant (our own).

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “discₓ(R) = discₓ(P) Resₓ(P,Q)² discₓ(Q)”

**Sources:** none listed. No primary source with a working link was found.

### The Sylvester determinant gives the degree in each coefficient list

**Remember:** Count columns from each polynomial to read off its degree.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The Sylvester matrix of A and B, of positive degrees d and e, has e columns holding shifted copies of the coefficients of A and d columns holding shifted copies of those of B. The resultant is its determinant.

**Problem.** Every nonzero term of the resultant uses exactly e coefficients of A and d coefficients of B, counting repetitions.

**How the definition helps.** Each term of a determinant takes one entry from each column. So each term uses e coefficients of A and d coefficients of B.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “having e columns of aᵢ and d columns of bⱼ.”

**Sources:** none listed. No primary source with a working link was found.

### The Sylvester determinant puts the resultant in the polynomial ideal

**Remember:** A determinant times any vector lies in the matrix’s image.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Over a commutative ring with identity, the Sylvester matrix of A and B, of positive degrees d and e, is the map (U, V) ↦ AU + BV written in coefficients, for U of degree below e and V of degree below d. The resultant is its determinant.

**Problem.** The resultant equals AU + BV for some U of degree below e and V of degree below d, allowing zero polynomials.

**How the definition helps.** The adjugate satisfies S·adj(S) = det(S)·I, so det(S) times any coefficient vector lies in the image of S. Taking the vector of the constant 1 gives AU + BV = res(A, B) (our own).

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “the resultant of two polynomials belongs to the ideal generated by these polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric algebras as free commutative algebras makes sums become tensor products

**Remember:** Mapping out of a direct sum means giving one map from each summand.

*True by definition. Confidence: medium.* MSC 13A02 (Graded rings), 15A69. arXiv math.AC. Level 3: graduate.

**Definition.** For a module M over a commutative ring R, Sym(M) is the free commutative R-algebra on M: every R-linear map from M to a commutative R-algebra A extends uniquely to an algebra map Sym(M) → A.

**Problem.** For modules M and N, Sym(M ⊕ N) is isomorphic to Sym(M) ⊗ Sym(N).

**How the definition helps.** Algebra maps out of Sym(M ⊕ N) are linear maps from M ⊕ N, which are pairs of linear maps from M and N (our own). Algebra maps out of Sym(M) ⊗ Sym(N) into a commutative algebra are pairs of algebra maps, hence the same pairs (our own). Two objects with the same mapping property are isomorphic (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional ideals make the ideals of a Dedekind domain a group

**Remember:** Allow denominators, and ideals get inverses as fractions get them.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13F05. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A fractional ideal of a domain R is an R-submodule I of the fraction field that becomes an ideal after clearing one common denominator, that is, rI ⊆ R for some nonzero r ∈ R. It is invertible if IJ = R for some fractional ideal J.

**Problem.** A domain is Dedekind exactly when every nonzero fractional ideal is invertible. These nonzero fractional ideals then form a group whose quotient by the nonzero principal fractional ideals is the class group.

**How the definition helps.** Inverses of ideals usually need denominators, and fractional ideals allow them (our own). The theorem that a domain is Dedekind exactly when every nonzero fractional ideal is invertible gives the equivalence. Multiplication is associative and commutative with identity R, and the nonzero principal ones form a subgroup (our own).

**Wikipedia:** [Fractional ideal](https://en.wikipedia.org/wiki/Fractional_ideal), [Ideal class group](https://en.wikipedia.org/wiki/Ideal_class_group). It says: “An integral domain is a Dedekind domain if and only if every non-zero fractional ideal is invertible.”

**Sources:** none listed. No primary source with a working link was found.

### Irredundant primary decompositions have uniquely determined primes

**Remember:** Remove the spare pieces, and the primes of an ideal are fixed.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** A primary ideal Q is a proper ideal in which xy ∈ Q and x ∉ Q force yⁿ ∈ Q for some n &gt; 0. A primary decomposition, a finite intersection of primary ideals, is irredundant if no component can be deleted and the component radicals are distinct.

**Problem.** In a commutative Noetherian ring every proper ideal has an irredundant primary decomposition. Its component radicals depend only on the ideal, as do the components corresponding to minimal primes.

**How the definition helps.** Irredundancy removes spare components such as (x, y) in (x) = (x) ∩ (x, y) over k\[x, y\], which would add the extra prime (x, y) (our own). Lasker–Noether gives existence, and the uniqueness theorems fix the radicals and the components at minimal primes (our own).

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

**Definition.** The Jacobson radical of a commutative ring is the intersection of its maximal ideals. So for a in it, 1 + a lies in no maximal ideal and is invertible (our own).

**Problem.** Let M be a finitely generated module over a commutative ring. If I lies in the Jacobson radical, any lifts of generators of M/IM generate M.

**How the definition helps.** Let Q be M modulo the span of the lifts; generation modulo I gives IQ = Q (our own). The determinant trick gives an element of 1 + I killing the finitely generated Q, and it is invertible, so Q = 0 (our own). Over ℤ, the class of 3 generates ℤ/2ℤ, yet 3 does not generate ℤ (our own).

**Paper or page:** [Algebra, Lemma 10.20.1.](https://stacks.math.columbia.edu/tag/00DV). It says: “If IM = M, M is finite, and I ⊂ rad(R), then M = 0.”

**Sources:** none listed. No primary source with a working link was found.

### The square-zero ring R ⊕ M gives Lasker–Noether for modules from ideals

**Remember:** Turn submodules into ideals by declaring their internal products zero.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** For a module M over R, the ring R ⊕ M has product (r, m)(s, n) = (rs, rn + sm), so products of two elements of M are zero. Its ideals inside 0 ⊕ M are exactly the submodules of M.

**Problem.** Let R be Noetherian and M finitely generated. Then every proper submodule of M is a finite intersection of primary submodules. A submodule N is primary when each r in R acts on M/N either injectively or nilpotently.

**How the definition helps.** R ⊕ M is finite over the Noetherian ring R, so it is Noetherian, and Lasker–Noether writes N as an intersection of primary ideals Q (our own). Intersecting each Q with M and dropping those equal to M gives primary submodules, since rm ∈ Q with m ∉ Q puts a power of r in Q, killing M/(Q ∩ M) (our own).

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “Similarly, unital zero algebras allow to deduce straightforwardly the Lasker–Noether theorem for modules”

**Sources:** none listed. No primary source with a working link was found.

### Finite algebra generation forces finite field extensions

**Remember:** Polynomials in finitely many elements, with no division, reach everything.

*Makes the theorem clean to state or prove.* MSC 13B02 (Extension theory of commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** A field extension L/k is finitely generated as a k-algebra if some finite list in L expresses every element as a polynomial over k.

**Problem.** A field extension finitely generated as an algebra has finite dimension as a vector space over the base field.

**How the definition helps.** Zariski’s lemma says a field finitely generated as a k-algebra has finite dimension over k. Algebra generation forbids division: finitely many rational functions in ℚ(t) have finitely many irreducible denominators, so their algebra misses some 1/(t − a) (our own).

**Paper or page:** [ProofWiki, Zariski's Lemma](https://proofwiki.org/wiki/Zariski's_Lemma). It says: “Let L / k be a field extension. Let L be finitely generated as an algebra over k. Then L / k is a finite field extension.”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal rings by their local rings makes normality local

**Remember:** Normal means every local ring is an integrally closed domain.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B30, 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A commutative ring is normal if its localization at every prime is an integrally closed domain, one that contains every element of its fraction field integral over it. So near each prime the ring has only one minimal prime (our own).

**Problem.** Let R be a reduced ring with finitely many minimal primes. Then R is normal exactly when it is a finite product of normal domains.

**How the definition helps.** Since each local ring is a domain, no maximal ideal contains two minimal primes, so the finitely many minimal primes are pairwise comaximal (our own). Reducedness makes their intersection zero, and the Chinese remainder theorem splits R into domains, each normal because normality is checked locally (our own). Conversely, each localization of a finite product of normal domains is a localization of one factor (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.37.16](https://stacks.math.columbia.edu/tag/030C). It says: “Assume R is reduced and has finitely many minimal primes. Then the following are equivalent: (1) R is a normal ring, … and (3) R is a finite product of normal domains.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 030C (Algebra, Lemma 10.37.16)](https://stacks.math.columbia.edu/tag/030C)

### Integral closure keeps monic factors

**Remember:** Integrally closed means every integral fraction already lives in the ring.

*Rules out counterexamples.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B25. arXiv math.AC. Level 3: graduate.

**Definition.** A domain A is integrally closed if every element of its fraction field that is a root of a monic polynomial over A, one with leading coefficient one, already lies in A.

**Problem.** If a monic polynomial over an integrally closed domain factors into monic polynomials over its fraction field, both factors have coefficients in the domain.

**How the definition helps.** The coefficients of each monic factor are sums of products of roots of the original polynomial, and integral elements form a ring, so these coefficients are integral over A. They lie in the fraction field, so integral closure puts them in A. Over ℚ\[t²,t³\], the factors x ± t of x² − t² have coefficients outside the ring (our own).

**Paper or page:** [Finite local principal ideal rings](https://arxiv.org/abs/2301.07664v7). It says: “If f ∈ A\[X\] factorizes as f = gh in B\[X\] with g and h monic, then g and h are in A\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### The Rees algebra definition shows an ideal's integral closure is an ideal

**Remember:** An ideal's closure is the degree-one part of a ring's closure.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13A30. arXiv math.AC. Level 3: graduate.

**Definition.** The integral closure of an ideal I of R is the set of r ∈ R for which rt is integral over the Rees algebra R\[It\], the subring of R\[t\] generated by R and all at with a ∈ I.

**Problem.** The integral closure of an ideal is an ideal.

**How the definition helps.** Elements of R\[t\] integral over R\[It\] form a ring containing R, so its degree-one part is closed under subtraction and under multiplication by R (our own). Hence the r with rt integral form an ideal (our own). The graded integral-closure criterion matches this with the usual equations whose coefficients lie in powers of I (our own).

**Wikipedia:** [Integral closure of an ideal](https://en.wikipedia.org/wiki/Integral_closure_of_an_ideal). It says: “In particular, Ī is an ideal”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit completion of R\[x\] at x is the power series ring

**Remember:** A power series is exactly one compatible choice of every finite truncation.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13F25. arXiv math.AC. Level 3: graduate.

**Definition.** The I-adic completion of R is the ring of compatible systems of residues: one aₙ in R/Iⁿ for each n ≥ 1, with aₙ₊₁ reducing to aₙ (our own). Operations act on each residue separately (our own).

**Problem.** The completion of R\[x\] at the ideal (x) is the ring R\[\[x\]\] of formal power series over R.

**How the definition helps.** Modulo xⁿ a polynomial is its truncation below degree n, so a compatible system fixes each coefficient once and for all (our own). Conversely, the truncations of a power series form a compatible system (our own). Both operations agree modulo every xⁿ, so this bijection is a ring isomorphism (our own).

**nLab:** [completion of a ring](https://ncatlab.org/nlab/show/completion+of+a+ring). It says: “then the formal completion of R\[x\] at the ideal (x) generated by the free generator x is the ring of formal power series”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit definition of completion lets units lift from R/I

**Remember:** Invert at every finite level; uniqueness makes the inverses fit.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** The I-adic completion of R is the ring of compatible systems of residues: one aₙ in R/Iⁿ for each n ≥ 1, with aₙ₊₁ reducing to aₙ (our own). Operations act on each residue separately (our own).

**Problem.** Let I be an ideal of R. An element of the completion that maps to a unit of R/I is a unit.

**How the definition helps.** An inverse in the completion is a compatible system of inverses, one modulo each Iⁿ (our own). Modulo Iⁿ the ideal I is nilpotent, so a unit modulo I is still a unit modulo Iⁿ (our own). Inverses are unique, so reduction carries each one to the next and they are compatible (our own).

**Paper or page:** [Algebra, Lemma 10.96.6.](https://stacks.math.columbia.edu/tag/05GI). It says: “any element of R̂ which maps to a unit of R/I is a unit”

**Sources:** none listed. No primary source with a working link was found.

### Defining henselization by a universal property makes it extend local maps

**Remember:** Henselization is the first henselian ring that R maps to.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** The henselization of a local ring R is a local map R → Rʰ to a henselian local ring through which every local map from R to a henselian local ring factors uniquely (our own).

**Problem.** Every local map of local rings induces a unique compatible local map of henselizations.

**How the definition helps.** The universal property gives the map with no construction (our own). The composite R → S → Sʰ is a local map to a henselian ring, so it factors uniquely through Rʰ, which gives Rʰ → Sʰ (our own). The work is in showing that the usual direct-limit construction has this property.

**Paper or page:** [Lemma 10.155.6.](https://stacks.math.columbia.edu/tag/04GS). It says: “There exists a unique local ring map Rʰ → Sʰ fitting into the commutative diagram”

**Sources:**

- [Masayoshi Nagata, On the Theory of Henselian Rings, Nagoya Mathematical Journal 5 (1953), 45–57.](https://doi.org/10.1017/S0027763000015439)

### The universal property of henselization makes it commute with quotients

**Remember:** Henselization is the first henselian ring that R maps to.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** The henselization of a local ring R is a local map R → Rʰ to a henselian local ring through which every local map from R to a henselian local ring factors uniquely (our own).

**Problem.** Let I be an ideal inside the maximal ideal of a local ring R. Then Rʰ/IRʰ is the henselization of R/I.

**How the definition helps.** Rʰ/IRʰ has the universal property of the henselization of R/I, so the two agree (our own). A local map from Rʰ/IRʰ to a henselian ring is one from Rʰ that kills I, hence one from R that kills I, hence one from R/I (our own). Rʰ/IRʰ is henselian because quotients of henselian local rings are henselian (our own).

**Paper or page:** [Lemma 10.156.2.](https://stacks.math.columbia.edu/tag/05WQ). It says: “Then Rʰ/IRʰ is the henselization of R/I.”

**Sources:** none listed. No primary source with a working link was found.

### Unique infinitesimal lifts make every localization formally étale

**Remember:** Every map lifts in exactly one way across a nilpotent thickening.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13B30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An R-algebra A is formally étale if its maps lift uniquely across nilpotent thickenings: for every R-algebra B with a nilpotent ideal I, each R-algebra map A → B/I lifts to exactly one R-algebra map A → B (our own).

**Problem.** For a commutative ring R and a multiplicatively closed subset S, the localization map R → S⁻¹R is formally étale.

**How the definition helps.** A map out of S⁻¹R is a map that makes every element of S invertible, and there is at most one such extension (our own). An element that is a unit modulo a nilpotent ideal is a unit, by a finite geometric series (our own). So the universal property of localization gives exactly one lift (our own).

**Paper or page:** [Algebra, Lemma 10.150.5](https://stacks.math.columbia.edu/tag/04EG). It says: “Let R be a ring. Let S ⊂ R be any multiplicative subset. Then the ring map R → S⁻¹R is formally étale.”

**Sources:**

- [The Stacks Project, Lemma 10.150.5, Tag 04EG](https://stacks.math.columbia.edu/tag/04EG)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Unique lifts make formally étale algebras survive directed colimits

**Remember:** Every map lifts in exactly one way across a nilpotent thickening.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 14B25. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An R-algebra A is formally étale if its maps lift uniquely across nilpotent thickenings: for every R-algebra B with a nilpotent ideal I, each R-algebra map A → B/I lifts to exactly one R-algebra map A → B (our own).

**Problem.** The colimit of a directed system of formally étale R-algebras is formally étale over R.

**How the definition helps.** A map from the colimit restricts to compatible maps from all stages (our own). Each restriction lifts uniquely, so the lifts agree along every transition map (our own). The colimit combines them into the unique lift (our own).

**Paper or page:** [Algebra, Lemma 10.150.4](https://stacks.math.columbia.edu/tag/031N). It says: “If each R → Sᵢ is formally étale, then S = \\(\\operatorname{colim}<sub>i\\in I</sub> S<sub>i</sub>\\) is formally étale over R”

**Sources:**

- [The Stacks Project, Lemma 10.150.4, Tag 031N](https://stacks.math.columbia.edu/tag/031N)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Weakly associated primes detect nonzero modules over every ring

**Remember:** Weakly associated means minimal over the annihilator of one element.

*True by definition.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings), 13A15. arXiv math.AC. Level 3: graduate.

**Definition.** A prime of a commutative ring R is weakly associated to an R-module M if it is minimal among primes containing Ann(m), the set of r with rm = 0 (our own), for some m ∈ M.

**Problem.** Over every commutative ring, a module is zero exactly when it has no weakly associated primes. Its zero divisors form the union of those primes (our own).

**How the definition helps.** A nonzero element has a proper annihilator, which lies in some minimal prime, while zero has annihilator R (our own). If r kills a nonzero m, then r lies in Ann(m) and so in every prime over it (our own). Conversely, an element of a minimal prime over Ann(m) is a zero divisor on R/Ann(m), which embeds in M by sending 1 to m (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.66.5](https://stacks.math.columbia.edu/tag/0588), [Stacks Project, Algebra, Lemma 10.66.7](https://stacks.math.columbia.edu/tag/05C3), [Stacks Project, Algebra, Lemma 10.66.9](https://stacks.math.columbia.edu/tag/058A). It says: “Let R be a ring. Let M be an R-module. Then M = (0) ⇔ WeakAss(M) = ∅”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0588 (Algebra, Lemma 10.66.5)](https://stacks.math.columbia.edu/tag/0588)
- [The Stacks Project Authors, The Stacks Project, Tag 05C3 (Algebra, Lemma 10.66.7)](https://stacks.math.columbia.edu/tag/05C3)
- [The Stacks Project Authors, The Stacks Project, Tag 058A (Algebra, Lemma 10.66.9)](https://stacks.math.columbia.edu/tag/058A)

### Duals defined by evaluation and coevaluation survive any change of scalars

**Remember:** A dual is two maps whose zigzags are identities.

*True by definition.* MSC 13C10 (Projective and free modules and ideals in commutative rings), 18M05. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A dual of an R-module P is a module Q with maps e ∶ Q ⊗ P → R and c ∶ R → P ⊗ Q whose two zigzag composites are identities (our own). That is, (1 ⊗ e)(c ⊗ 1) is the identity of P and (e ⊗ 1)(1 ⊗ c) is the identity of Q (our own).

**Problem.** Let P be a finitely generated projective module over a commutative ring R, and let R → S be a ring map. Then S ⊗ Hom(P, R) is isomorphic to Hom(S ⊗ P, S).

**How the definition helps.** Extension of scalars preserves tensor products, so it carries e, c and both identities over, and S ⊗ P\* is a dual of S ⊗ P (our own). Duals are unique up to isomorphism, which gives the stated isomorphism (our own). The nLab theorem that dualizable modules are the finitely generated projective ones makes Hom(P, R) a dual of P.

**nLab:** [dualizable module](https://ncatlab.org/nlab/show/dualizable+module). It says: “An R-module is dualizable if and only if it is a finitely generated projective module.”

**Sources:** none listed. No primary source with a working link was found.

### Baer's test for injectivity makes divisible modules injective over principal ideal domains

**Remember:** Injectivity is tested on ideals; principal ideals need one division.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13F10. arXiv math.AC. Level 3: graduate.

**Definition.** By Baer's test, a module Q is injective, meaning maps into Q extend from submodules to whole modules, as soon as every map from an ideal I into Q extends to the ring R. A module is divisible if multiplication by each nonzero scalar is onto.

**Problem.** Every divisible module over a principal ideal domain is injective.

**How the definition helps.** Over a principal ideal domain every ideal is (a), so extending a map f from (a) only needs some q with aq = f(a), which divisibility gives (our own). Sending 1 to q gives the extension (our own). The work is in Baer's criterion, which the nLab proves with Zorn's lemma.

**nLab:** [Baer's criterion](https://ncatlab.org/nlab/show/Baer%27s+criterion). It says: “any morphism g : I → Q in C can be extended to all of R along the inclusion I ↪︎ R.”

**Sources:** none listed. No primary source with a working link was found.

### Baer's test makes direct sums of injective modules injective over Noetherian rings

**Remember:** Finitely many generators send an ideal map into finitely many summands.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** By Baer's test, a module Q is injective, meaning maps into Q extend from submodules to whole modules, as soon as every map from an ideal into Q extends to the whole ring.

**Problem.** Over a commutative Noetherian ring, one whose ideals are all finitely generated, any direct sum of injective modules is injective.

**How the definition helps.** A map from an ideal into the direct sum lands in a finite subsum, because the ideal has finitely many generators (our own). Injectivity extends each of those finitely many coordinate maps to R (our own). The extensions combine into one map to the direct sum, so Baer's test gives injectivity (our own).

**nLab:** [injective module](https://ncatlab.org/nlab/show/injective+module). It says: “Since R is Noetherian, I is finitely generated as an R-module”

**Sources:** none listed. No primary source with a working link was found.

### Duality into the injective hull of the residue field preserves length

**Remember:** Dualize into an injective module whose only simple submodule is κ.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D45. arXiv math.AC. Level 3: graduate.

**Definition.** For an Artinian local ring R with residue field κ, set D(M) = Hom<sub>R</sub>(M, E), where E is an injective hull of κ: an injective module containing κ in which every nonzero submodule meets κ (our own).

**Problem.** For every finite module M over an Artinian local ring, D(M) has the same length as M. The functor D gives an exact duality, with D∘D naturally isomorphic to the identity (our own).

**How the definition helps.** Injectivity makes D exact, and since every nonzero submodule of E meets κ, the only simple submodule of E is κ, so D(κ) ≅ κ (our own). Exactness then carries a composition series of M to one of D(M) of the same length (our own). Evaluation M → D(D(M)) is an isomorphism on κ, and induction along the series gives it for every M (our own).

**Paper or page:** [Dualizing, Lemma 47.6.1.](https://stacks.math.columbia.edu/tag/08YX), [Dualizing, Lemma 47.6.3.](https://stacks.math.columbia.edu/tag/08YZ). It says: “For every finite R-module M we have length<sub>R</sub>(M) = length<sub>R</sub>(Hom<sub>R</sub>(M, E)) In particular, the injective hull E of κ is a finite R-module.”

**Sources:**

- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### Faithful flatness lets exactness be checked after a change of ring

**Remember:** Faithfully flat base change neither creates nor hides exactness.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** An R-module S is faithfully flat if tensoring with S preserves exact sequences and kills no nonzero module, so N ⊗ S ≠ 0 whenever N ≠ 0 (our own).

**Problem.** Let S be a faithfully flat R-algebra. A sequence of R-modules is exact, or a map is injective, exactly when this holds after tensoring with S.

**How the definition helps.** Flatness makes the homology of the tensored sequence equal to the old homology tensored with S, and faithfulness makes this zero only when the old homology is zero (our own). For injectivity, apply the same argument to the kernel (our own).

**Wikipedia:** [Flat module](https://en.wikipedia.org/wiki/Flat_module). It says: “A module is faithfully flat if taking the tensor product with a sequence produces an exact sequence if and only if the original sequence is exact.”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Lazard's criterion makes torsion-free modules over principal ideal domains flat

**Remember:** Flat means a filtered colimit of finite free modules.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** By Lazard's criterion, an R-module is flat exactly when it is a filtered colimit, such as a directed union, of finitely generated free R-modules.

**Problem.** Every torsion-free module over a principal ideal domain is flat.

**How the definition helps.** A torsion-free module is the directed union of its finitely generated submodules, and over a principal ideal domain each of these is free by the structure theorem (our own). Lazard's criterion then gives flatness (our own).

**nLab:** [Lazard's criterion](https://ncatlab.org/nlab/show/Lazard%27s+criterion). It says: “An left R-module is a flat module precisely if it is a filtered colimit of finitely generated free modules.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring a complete local ring makes Matlis duality an anti-equivalence

**Remember:** The double dual of R is its completion, so R must be complete.

*Rules out counterexamples.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13J10, 13D45. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R with maximal ideal 𝔪 is complete if R equals its 𝔪-adic completion, the inverse limit of the rings R/𝔪ⁿ. The Matlis dual of a module M is D(M) = Hom<sub>R</sub>(M, E), with E an injective hull of R/𝔪 (our own).

**Problem.** Over a complete Noetherian local ring, D gives an anti-equivalence between Artinian and Noetherian R-modules. On each category D∘D is naturally isomorphic to the identity (our own).

**How the definition helps.** D(D(R)) is End<sub>R</sub>(E), which is the completion of R, so evaluation R → D(D(R)) is invertible exactly when R is complete (our own). For k\[x\] localized at (x), evaluation is the proper inclusion into k\[\[x\]\] (our own). Matlis duality extends this from R to all Artinian and Noetherian modules.

**Wikipedia:** [Matlis duality](https://en.wikipedia.org/wiki/Matlis_duality). It says: “Then Matlis duality states that the duality functor D<sub>R</sub> gives an anti-equivalence between the categories of Artinian and Noetherian R-modules.”

**Paper or page:** [Dualizing, Lemma 47.7.5.](https://stacks.math.columbia.edu/tag/08Z6), [Dualizing, Proposition 47.7.8.](https://stacks.math.columbia.edu/tag/08Z9). It says: “Let E be an injective hull of κ over R. Then Hom<sub>R</sub>(E, E) is canonically isomorphic to the completion of R.”

**Sources:**

- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### The maximal-ideal test for faithful flatness makes flat local maps faithfully flat

**Remember:** A local map cannot make the quotient by the source maximal ideal vanish.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40, 13H99. arXiv math.AC. Level 3: graduate.

**Definition.** A flat R-module M is faithfully flat if M/𝔪M ≠ 0 for every maximal ideal 𝔪 of R (our own).

**Problem.** Every flat local ring map between local rings is faithfully flat.

**How the definition helps.** A local ring R has only one maximal ideal 𝔪, and a local map sends 𝔪 into the maximal ideal of S, so S/𝔪S ≠ 0 (our own). So the maximal-ideal test for faithful flatness holds (our own).

**Paper or page:** [Algebra, Lemma 10.39.17.](https://stacks.math.columbia.edu/tag/00HR), [Algebra, Lemma 10.39.15.](https://stacks.math.columbia.edu/tag/00HP). It says: “A flat local ring homomorphism of local rings is faithfully flat.”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion with non-zero-divisors gives torsion-free modules over every ring

**Remember:** Torsion means killed by a non-zero-divisor, not by any nonzero element.

*Rules out counterexamples.* MSC 13C12 (Torsion modules and ideals in commutative rings), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** An element m of a module is torsion if rm = 0 for some regular element r of the ring, one that is not a zero divisor; the module is torsion-free if 0 is its only torsion element.

**Problem.** Over every commutative ring, free modules are torsion-free. So are flat modules, the modules M for which tensoring with M keeps exact sequences exact.

**How the definition helps.** Multiplication by a regular r is injective on R, and tensoring with a flat M keeps it injective on M, so r kills only zero (our own). Free modules are flat (our own). If any nonzero scalar were allowed, a zero divisor would already make R itself fail (our own).

**Wikipedia:** [Torsion-free module](https://en.wikipedia.org/wiki/Torsion-free_module). It says: “this does not work well over more general rings, for if the ring contains zero-divisors then the only module satisfying this condition is the zero module.”

**Sources:** none listed. No primary source with a working link was found.

### Auslander–Buchsbaum turns Cohen–Macaulayness into freeness over a regular subring

**Remember:** Cohen–Macaulay means that depth reaches dimension.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules), 13D05, 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Cohen–Macaulay when its depth, the length of a maximal regular sequence in its maximal ideal (our own), equals its Krull dimension.

**Problem.** Let R be a local ring that is finitely generated as a module over a regular local subring A. Then R is Cohen–Macaulay if and only if R is a free A-module (Hironaka's criterion, also called miracle flatness).

**How the definition helps.** The Auslander–Buchsbaum formula gives pd<sub>A</sub>(R) = depth A − depth R, and depth A = dim A = dim R, so pd<sub>A</sub>(R) = 0 exactly when depth R = dim R (our own). Finiteness over A makes depth and dimension the same over either ring, and regularity of A makes pd<sub>A</sub>(R) finite (our own). A finite module of projective dimension zero over a local ring is free (our own).

**Wikipedia:** [Cohen–Macaulay ring](https://en.wikipedia.org/wiki/Cohen%E2%80%93Macaulay_ring). It says: “Then R is Cohen–Macaulay if and only if it is flat as an A-module; it is also equivalent to say that R is free as an A-module.”

**Paper or page:** [Homological Local, Proposition 4.19](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let φ: S′ → S be a local map of local noetherian rings such that S is a finitely generated S′-module. Then, for any finitely generated S-module M, depthS M = depthS′ M.”

**Sources:** none listed. No primary source with a working link was found.

### Cohen–Macaulay modules exclude embedded primes

**Remember:** In a Cohen–Macaulay module, positive local dimension forces positive local depth.

*Rules out counterexamples.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 3: graduate.

**Definition.** A finite module over a Noetherian ring is Cohen–Macaulay if its depth equals its dimension at every prime of its support, where its localization is nonzero. Over a Noetherian local ring, testing at the maximal ideal is enough.

**Problem.** Every associated prime of a finite Cohen–Macaulay module over a Noetherian local ring, that is every prime that is the annihilator of an element, is minimal in its support.

**How the definition helps.** At an associated prime the localized module has depth zero, so the test forces dimension zero there, which means the prime is minimal (our own). The ring k\[x,y\]/(x²,xy) at (x,y) fails: x has annihilator (x,y), which lies above the minimal prime (x) (our own). The localization theorem for Cohen–Macaulay modules shows that the test at every prime agrees with the test at the maximal ideal (our own).

**Paper or page:** [Algebra, Lemma 10.103.7.](https://stacks.math.columbia.edu/tag/0BUS). It says: “In particular, M has no embedded associated primes.”

**Sources:** none listed. No primary source with a working link was found.

### Regular quotients preserve Cohen–Macaulayness

**Remember:** One regular element lowers both numbers by one.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 3: graduate.

**Definition.** A nonzero finite module over a Noetherian local ring is Cohen–Macaulay if its depth equals its dimension. Depth is the length of a longest sequence in the maximal ideal whose elements act injectively modulo the earlier ones, and dimension is the Krull dimension of its support.

**Problem.** Let M be a nonzero finite module over a Noetherian local ring. If x belongs to the maximal ideal and acts injectively on M, then M is Cohen–Macaulay exactly when M/xM is (our own).

**How the definition helps.** An element x of the maximal ideal that acts injectively on M lowers both depth and dimension by one, so the equality holds for M exactly when it holds for M/xM (our own). Depth drops by one because x can start a maximal regular sequence (our own). Dimension drops by one because x lies in no minimal prime of the support (our own).

**nLab:** [Cohen-Macaulay module](https://ncatlab.org/nlab/show/Cohen-Macaulay+module). It says: “its depth is equal to its Krull dimension”

**Wikipedia:** [Cohen–Macaulay ring](https://en.wikipedia.org/wiki/Cohen%E2%80%93Macaulay_ring). It says: “R is Cohen–Macaulay if and only if R/(u) is Cohen–Macaulay.”

**Paper or page:** [Algebra, Lemma 10.103.5.](https://stacks.math.columbia.edu/tag/0C6G). It says: “Then M is Cohen-Macaulay if and only if M/xM is Cohen-Macaulay.”

**Sources:** none listed. No primary source with a working link was found.

### Defining depth by Ext makes all maximal regular sequences equally long

**Remember:** Depth is the first degree where Ext stops vanishing.

*True by definition.* MSC 13C15 (Dimension theory, depth, related commutative rings (catenary, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** For a finite module M over a Noetherian ring R and an ideal I with IM ≠ M, depth<sub>I</sub>(M) is the first degree i with Extⁱ<sub>R</sub>(R/I, M) ≠ 0 (our own).

**Problem.** Let R be Noetherian, let M be a finitely generated module, and let I be an ideal with IM ≠ M. Then every maximal M-regular sequence in I has length equal to the least i with Extⁱ(R/I, M) ≠ 0 (Rees's theorem).

**How the definition helps.** A regular element of I lowers this Ext depth by one on the quotient, by the long exact sequence (our own). At the end of a maximal sequence, every element of I is a zero divisor on the quotient, so prime avoidance puts I in an associated prime (our own). Then I kills a nonzero element, Ext⁰ is nonzero, and the remaining depth is zero, so the length equals the Ext depth (our own).

**Wikipedia:** [Depth (ring theory)](https://en.wikipedia.org/wiki/Depth_%28ring_theory%29). It says: “Then all maximal regular sequences x₁, …, xₙ for M, where each xᵢ belongs to 𝔪, have the same length n equal to the 𝔪-depth of M.”

**Paper or page:** [Homological Local, Theorem 2.20](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Suppose M is an R-module and IM ≠ M. All maximal M-sequences in I have the same length. This length is the smallest value of r such that Extʳ(R/I, M) ≠ 0.”

**Sources:**

- [D. Rees, The grade of an ideal or module, Mathematical Proceedings of the Cambridge Philosophical Society 53 (1957), 28–42.](https://doi.org/10.1017/s0305004100031960)

### The Ext definition of depth makes depth bounds follow from exact sequences

**Remember:** If both ends have zero Ext in low degrees, the middle does too.

*True by definition.* MSC 13C15 (Dimension theory, depth, related commutative rings (catenary, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** The depth of a nonzero finitely generated module M over a Noetherian local ring with residue field k is the first degree i with Extⁱ(k, M) ≠ 0.

**Problem.** Let 0 → N′ → N → N″ → 0 be a short exact sequence of nonzero finitely generated modules over a Noetherian local ring. Then depth(N) ≥ min{depth(N′), depth(N″)}.

**How the definition helps.** The long exact sequence Extⁱ(k, N′) → Extⁱ(k, N) → Extⁱ(k, N″) gives the bound at once (our own). Below both outer depths the outer groups vanish, so the middle one vanishes too (our own). The work is in Stacks Lemma 10.72.5, which matches this with the regular-sequence definition, where the bound needs a separate induction (our own).

**Paper or page:** [Algebra, Lemma 10.72.6.](https://stacks.math.columbia.edu/tag/00LX), [Algebra, Lemma 10.72.5.](https://stacks.math.columbia.edu/tag/00LW). It says: “depth(N) ≥ min{depth(N′), depth(N″)}”

**Sources:** none listed. No primary source with a working link was found.

### Fitting ideals commute with base change

**Remember:** Fitting ideals are generated by minors of the relation matrix.

*True by definition.* MSC 13C40 (Linkage, complete intersections and determinantal ideals). arXiv math.AC. Level 3: graduate.

**Definition.** Present a finite module by n generators and a matrix whose columns generate all relations among them. The k-th Fitting ideal Fitₖ is generated by the minors of order n − k, or is zero if there are none, and Fitₖ = R for k ≥ n (our own).

**Problem.** Fitting ideals of finite modules commute with extension of scalars along every ring map.

**How the definition helps.** Tensoring a presentation with R′ presents the new module by the image matrix, and ring maps preserve determinants (our own). So the new minors are the images of the old ones (our own). The work is in showing that the ideal does not depend on the presentation (our own).

**Paper or page:** [More Algebra, Lemma 15.8.4.](https://stacks.math.columbia.edu/tag/07ZA). It says: “If $R \\to R'$ is a ring map, then $\\text{Fit}<sub>k</sub>(M \\otimes<sub>R</sub> R')$ is the ideal of $R'$ generated by the image of $\\text{Fit}<sub>k</sub>(M)$.”

**Sources:** none listed. No primary source with a working link was found.

### Fitting ideals make 'locally free of rank r' a representable condition

**Remember:** Rank r means Fitᵣ is everything and Fitᵣ₋₁ is zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C40 (Linkage, complete intersections and determinantal ideals), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Locally present ℱ by n generators and a matrix of all relations; Fitₖ is generated by the minors of order n − k, with Fitₖ = 0 for k &lt; 0 and Fitₖ = R for k ≥ n (our own). A module is locally free of rank r exactly when Fitᵣ is the unit ideal and Fitᵣ₋₁ is zero (our own).

**Problem.** Let ℱ be a finite type quasi-coherent sheaf on S, and let Zₖ be the closed subscheme defined by Fitₖ(ℱ). For a map T → S, the pullback is locally free of rank r exactly when the map factors through Zᵣ₋₁ ∖ Zᵣ.

**How the definition helps.** Fitting ideals commute with base change, so the pullback to T is locally free of rank r exactly when Fitᵣ becomes the unit ideal and Fitᵣ₋₁ becomes zero on T (our own). The first means that T avoids Zᵣ, and the second means that T → S factors through Zᵣ₋₁ (our own).

**Paper or page:** [Stacks Project, Divisors, Lemma 31.9.6](https://stacks.math.columbia.edu/tag/05P8). It says: “The closed subschemes … defined by the Fitting ideals of ℱ have the following properties … The functor Fᵣ … is representable by the locally closed subscheme Zᵣ₋₁ ∖ Zᵣ of S.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 05P8 (Divisors, Lemma 31.9.6)](https://stacks.math.columbia.edu/tag/05P8)

### Comparing modules up to projective summands makes syzygies well defined

**Remember:** Syzygies are unique once projective summands are ignored.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D05, 16D40. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** Two modules are stably isomorphic if adding a projective summand to each makes them isomorphic. Starting with M as the zeroth syzygy, take each next syzygy as the kernel of a projective surjection onto the preceding one (our own).

**Problem.** A module M has projective dimension at most n if and only if, in some projective resolution of M, the n-th syzygy is projective. Then the n-th syzygy is projective in every projective resolution of M.

**How the definition helps.** Schanuel's lemma, applied n times, shows that any two n-th syzygies of M are stably isomorphic (our own). Direct sums and summands of projectives are projective, so one n-th syzygy is projective exactly when all are (our own). A projective n-th syzygy ends a resolution at degree n, and a resolution of length n gives one (our own).

**Wikipedia:** [Schanuel's lemma](https://en.wikipedia.org/wiki/Schanuel%27s_lemma). It says: “If 0→K→P→M→0 and 0→K′→P′→M→0 are short exact sequences of R-modules and P and P′ are projective, then K⊕P′ is isomorphic to K′⊕P.”

**Paper or page:** [Homological Local, Proposition 4.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “We have pd(M) ≤ n if any projective resolution ⋯ → P₁ → P₀ → M → 0 breaks off at the nth stage: that is, the kernel of Pₙ₋₁ → Pₙ₋₂ is projective.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Koszul complexes as tensor products makes them iterated cones

**Remember:** Adding one element takes the cone of multiplication by that element.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 18G35. arXiv math.KT. Level 3: graduate.

**Definition.** The Koszul complex of f₁,…,fᵣ in a commutative ring R is the tensor product over R of the two-term complexes R → R, each given by multiplication by fᵢ from degree one to degree zero (our own).

**Problem.** The Koszul complex on f₁, …, fᵣ is the mapping cone of multiplication by fᵣ on the Koszul complex on f₁, …, fᵣ₋₁.

**How the definition helps.** Tensoring any complex with the two-term complex of f gives the cone of multiplication by f, so the claim follows at once (our own). The work is in matching this with the exterior-algebra definition, signs included (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.28.8](https://stacks.math.columbia.edu/tag/0629). It says: “is isomorphic to the cone of the map of complexes”

**Sources:** none listed. No primary source with a working link was found.

### Fine multigrading turns Betti numbers of face rings into simplicial homology

**Remember:** Each set of vertices carries its own piece of homology.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13F55, 05E45. arXiv math.AC, math.CO. Level 3: graduate.

**Definition.** The face ring k\[Δ\] of a simplicial complex Δ on n vertices is k\[x₁,…,xₙ\] modulo the squarefree monomials of nonfaces. Grade it finely, with xⱼ in its own degree eⱼ, and let β(i,b) be the dimension of Torᵢ(k\[Δ\], k) in degree b (our own).

**Problem.** The fine Betti numbers β(i,b) of a face ring vanish unless b is squarefree, that is, a vertex subset W. Then β(i,W) is the dimension of the reduced homology, in degree \|W\| − i − 1, of Δ restricted to W, the faces inside W (Hochster's formula).

**How the definition helps.** Fine grading splits the Koszul complex that computes Tor into one piece for each degree (our own). In squarefree degree W that piece is the simplicial cochain complex of Δ restricted to W, shifted so that degree i gives reduced cohomology, of the same dimension as homology, in degree \|W\| − i − 1 (our own). In other degrees a repeated variable pairs terms off, so the piece is exact (our own).

**Wikipedia:** [Stanley–Reisner ring](https://en.wikipedia.org/wiki/Stanley%E2%80%93Reisner_ring). It says: “The face ring k\[Δ\] is a multigraded algebra over k all of whose components with respect to the fine grading have dimension at most 1. Consequently, its homology can be studied by combinatorial and geometric methods.”

**Paper or page:** [Betti Cones of Stanley-Reisner Ideals](https://arxiv.org/abs/2401.05962v1). It says: “For any integers 0≤i≤n and d, we have β<sub>i,d</sub>(I\_Δ) = ∑<sub>U∈(V choose d)</sub> dim\_𝕂 H̃<sub>d−i−2</sub>(Δ<sub>U</sub>) where (V choose d) denotes the subsets of V of size d.”

**Sources:** none listed. No primary source with a working link was found.

### Graded free resolutions make Hilbert series a polynomial over (1 − t)ⁿ

**Remember:** Resolve, then add up free pieces with signs.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D40. arXiv math.AC. Level 3: graduate.

**Definition.** The Hilbert series of a finitely generated graded module M over S = k\[x₁,…,xₙ\], with k a field and variables of degree one, is ∑ dimₖ(M<sub>d</sub>) tᵈ (our own). It is additive on exact sequences, and the shifted free module S(−j) has series tʲ/(1 − t)ⁿ (our own).

**Problem.** Let M be a finitely generated graded S-module generated in degrees ≥ 0. Then its Hilbert series equals K(t)/(1 − t)ⁿ for a polynomial K(t) with integer coefficients. Hence the dimension of the degree-d part of M agrees with a polynomial in d for all large d (Hilbert's theorem).

**How the definition helps.** The syzygy theorem gives a finite graded free resolution, and additivity turns it into K(t) = ∑ (−1)ⁱ βᵢⱼ tʲ over (1 − t)ⁿ, where βᵢⱼ counts degree-j generators in step i (our own). Expanding 1/(1 − t)ⁿ then shows that the coefficients agree with a polynomial in d for large d (our own).

**Wikipedia:** [Hilbert series and Hilbert polynomial](https://en.wikipedia.org/wiki/Hilbert_series_and_Hilbert_polynomial). It says: “Every graded module M over a graded regular ring R has a graded free resolution because of the Hilbert syzygy theorem”

**Paper or page:** [Algebra, Proposition 10.58.7](https://stacks.math.columbia.edu/tag/00K1). It says: “If S₊ is generated by elements of degree 1, then this function is a numerical polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Koszul differentials defined as derivations give exact complexes for nonzero functionals

**Remember:** Wedging with a vector of value one undoes the differential.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 15A75. arXiv math.AC. Level 3: graduate.

**Definition.** The Koszul differential of a linear functional φ on V is the degree −1 derivation of the exterior algebra that equals φ on V. Being a derivation means d(a ∧ b) = d(a) ∧ b + (−1)ᵏ a ∧ d(b) for a of degree k (our own).

**Problem.** Let φ be a nonzero linear functional on a vector space over a field. Then its Koszul complex has zero homology in every degree. That is, every x with d(x) = 0 equals d(y) for some y.

**How the definition helps.** The product rule gives a one-line contracting identity (our own). Choose v with φ(v) = 1; then d(v ∧ x) = x − v ∧ d(x), so d(x) = 0 gives x = d(v ∧ x) (our own).

**nLab:** [Koszul complex](https://ncatlab.org/nlab/show/Koszul+complex). It says: “The differential can be obtained from the faces of the obvious Koszul semi-simplicial R-module”

**Sources:** none listed. No primary source with a working link was found.

### Koszul resolutions make Ext of a regular quotient an exterior algebra

**Remember:** For a regular ideal, Ext is the exterior algebra on the normal module.

*True by definition. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D07. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An ideal I of R is Koszul-regular if, locally, it is generated by a finite sequence whose Koszul complex resolves R/I. Its normal module is N = Hom(I/I², R/I) (our own).

**Problem.** If I is Koszul-regular, then the Yoneda product, which splices extensions, makes Extⁱ(R/I, R/I) isomorphic to the i-th exterior power of N for every i. Likewise Torᵢ(R/I, R/I) is the i-th exterior power of I/I².

**How the definition helps.** Locally the Koszul resolution computes both groups, and its differentials have entries in I, so they vanish after tensoring with R/I or taking Hom into R/I (our own). The remaining terms are exterior powers of I/I² for Tor and of its dual N for Ext (our own). Yoneda products of degree-one classes match wedge products, and these identifications agree on overlaps (our own).

**Paper or page:** [Duality, Lemma 48.15.4](https://stacks.math.columbia.edu/tag/0BQY). It says: “If ℐ is Koszul-regular (Divisors, Definition) then composition on RHom\_𝒪Y(𝒪X, 𝒪X) defines isomorphisms ∧ⁱ(Ext¹\_𝒪Y(𝒪X, 𝒪X)) → Extⁱ\_𝒪Y(𝒪X, 𝒪X)”

**Sources:** none listed. No primary source with a working link was found.

### Koszul-regular sequences do not depend on order, unlike regular sequences

**Remember:** The Koszul complex forgets the order, so Koszul-regularity does too.

*Rules out counterexamples. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C40. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A sequence is regular if it generates a proper ideal and each element acts injectively modulo the earlier ones. It is Koszul-regular if its Koszul complex, which up to isomorphism does not see the order, has zero homology in positive degrees (our own).

**Problem.** Koszul-regularity of a sequence does not depend on its order, but regularity can. On a locally Noetherian scheme, regular and Koszul-regular ideal sheaves are the same.

**How the definition helps.** Permuting the elements permutes the Koszul basis, so the complex changes only up to isomorphism (our own). In k\[x,y,z\], the sequence x, y(1−x), z(1−x) is regular, but y(1−x), z(1−x), x is not, since modulo y(1−x) the nonzero class of y kills z(1−x) (our own). The Stacks Project theorem on locally Noetherian schemes identifies the two kinds of ideal sheaves.

**Paper or page:** [Stacks Project, Divisors, Lemma 31.20.8](https://stacks.math.columbia.edu/tag/063I), [Stacks Project, Divisors, Lemma 31.20.1](https://stacks.math.columbia.edu/tag/063C), [Stacks Project, Cotangent, Lemma 92.14.2](https://stacks.math.columbia.edu/tag/08SJ). It says: “In particular, on a locally Noetherian scheme the notions of regular, Koszul-regular, H₁-regular, or quasi-regular ideal sheaf all agree.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 063I (Divisors, Lemma 31.20.8)](https://stacks.math.columbia.edu/tag/063I)
- [The Stacks Project Authors, The Stacks Project, Tag 063C (Divisors, Lemma 31.20.1)](https://stacks.math.columbia.edu/tag/063C)
- [The Stacks Project Authors, The Stacks Project, Tag 08SJ (Cotangent, Lemma 92.14.2)](https://stacks.math.columbia.edu/tag/08SJ)

### Measuring depth by Koszul homology makes it ignore finite ring extensions

**Remember:** Depth is how many top Koszul homologies vanish.

*True by definition. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C15. arXiv math.AC. Level 3: graduate.

**Definition.** On a nonzero finite module M over a Noetherian local ring, the Koszul depth of x₁,…,xₙ in the maximal ideal is n minus the largest i with Hᵢ(K(x₁,…,xₙ) ⊗ M) ≠ 0 (our own). It depends only on the radical of the ideal generated by the xᵢ and the annihilator of M (our own).

**Problem.** Let R → S be a local map of Noetherian local rings. For every nonzero S-module M finite over both rings, its depths over R and S agree (our own). For the zero module both depths are infinite by convention (our own).

**How the definition helps.** Take generators of the maximal ideal 𝔪 of R; their Koszul homology on M is the same whether M is viewed over R or over S (our own). Over S, these elements and the annihilator of M generate an ideal with radical 𝔫, because M/𝔪M has finite length (our own). Since Koszul depth depends only on that radical, it equals the depth over S (our own).

**Wikipedia:** [Koszul complex](https://en.wikipedia.org/wiki/Koszul_complex). It says: “then every maximal M-regular sequence in I has length n - m (in particular, they all have the same length).”

**Paper or page:** [Homological Local, Proposition 2.10](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let (R, 𝔪) → (S, 𝔫) be a morphism of noetherian local rings. Suppose M is a finitely generated S-module, which is also finitely generated as an R-module. Then depthR M = depthS M.”

**Sources:** none listed. No primary source with a working link was found.

### Measuring projective dimension by Tor with the field proves Hilbert's syzygy theorem

**Remember:** Resolve k instead of M, and n steps suffice.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** For a nonzero finite graded module M over S = k\[x₁,…,xₙ\], with k a field, projective dimension is the largest i with Torᵢ(M, k) ≠ 0, or infinity (our own). Here k = S/(x₁,…,xₙ), and minimal resolutions show that this is the least length of a projective resolution (our own).

**Problem.** Every finitely generated graded module over k\[x₁,…,xₙ\] has a graded free resolution of length at most n (Hilbert's syzygy theorem). The bound is sharp, since k itself has projective dimension n.

**How the definition helps.** Tor can be computed by resolving k instead, and the Koszul resolution of k has length n, so Torᵢ(M, k) = 0 for i &gt; n and the minimal resolution of M stops by degree n (our own). Tensoring the Koszul complex with k kills its differentials and leaves a nonzero top term, so k has projective dimension n (our own).

**Wikipedia:** [Hilbert's syzygy theorem](https://en.wikipedia.org/wiki/Hilbert%27s_syzygy_theorem). It says: “Hilbert's syzygy theorem may be restated as: the global dimension of k\[x₁,…,xₙ\] is n.”

**Paper or page:** [Lower bounds on Betti numbers](https://arxiv.org/abs/2108.05871v1), [Algebra, Proposition 10.114.2](https://stacks.math.columbia.edu/tag/00OQ). It says: “Let R = k\[x₁, …, xₙ\] be a polynomial ring in n variables over a field k. If M is a finitely generated graded R-module, then M has a finite free resolution of length at most n.”

**Sources:** none listed. No primary source with a working link was found.

### Mumford's shifted vanishing condition makes regularity pass to all higher twists

**Remember:** Each higher cohomology vanishes one twist earlier than the last.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A coherent sheaf F on ℙⁿ over a field is m-regular when its i-th cohomology vanishes i twists below m, that is, Hⁱ(ℙⁿ, F(m − i)) = 0 for every i &gt; 0.

**Problem.** If F is m-regular, then F is d-regular for every d ≥ m. Moreover, for d ≥ m the sheaf F(d) is generated by its global sections and Hⁱ(ℙⁿ, F(d)) = 0 for all i ≥ 1 (Castelnuovo–Mumford).

**How the definition helps.** With these shifts, restriction to a hyperplane H avoiding the associated points of F keeps m-regularity, by the sequence 0 → F(−1) → F → F<sub>H</sub> → 0 (our own). Induction on n then gives (m+1)-regularity and surjective multiplication by linear forms in degrees ≥ m, after extending the field if needed (our own). High twists are globally generated, and those surjections carry global generation down to F(d) for d ≥ m (our own).

**Wikipedia:** [Castelnuovo–Mumford regularity](https://en.wikipedia.org/wiki/Castelnuovo%E2%80%93Mumford_regularity). It says: “If a coherent sheaf is r-regular then F(r) is generated by its global sections.”

**Paper or page:** [J. Alper, Stacks and Moduli, Chapter 2.3 Regularity, Proposition 2.3](https://sites.math.washington.edu//~jarod/moduli.pdf), [J. Alper, Stacks and Moduli, Chapter 2.3 Regularity, Lemma 2.2](https://sites.math.washington.edu//~jarod/moduli.pdf). It says: “For d ≥ m, F(d) is globally generated and Hⁱ(ℙⁿ, F(d)) = 0 for i ≥ 1.”

**Sources:**

- [D. Mumford, Lectures on Curves on an Algebraic Surface, Annals of Mathematics Studies 59, Princeton University Press, 1966.](https://doi.org/10.1515/9781400882069)

### Ranks and ideals of minors make exactness of free complexes checkable

**Remember:** A free complex is exact when its minors are deep enough.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C15. arXiv math.AC. Level 3: graduate.

**Definition.** The rank of a map φ of finite free modules over a nonzero commutative ring is the largest size of a nonzero minor of its matrix, with the empty minor counted as 1. I(φ) is the ideal generated by the minors of that size (our own).

**Problem.** Let R be a Noetherian local ring and 0 → Fₑ → … → F₀ a complex of finite free modules with maps φᵢ. It is exact except at F₀ exactly when two conditions hold for each i (Buchsbaum–Eisenbud). First, φᵢ has rank Fᵢ − rank Fᵢ₊₁ + rank Fᵢ₊₂ − …; second, I(φᵢ) is R or contains a regular sequence of length i.

**How the definition helps.** Rank and I(φ) turn exactness into a depth condition on ideals of minors, and the case of one map is McCoy's theorem: φ is injective exactly when its rank equals the rank of its source and I(φ) has zero annihilator. The general case localizes at the primes that contain some I(φᵢ) (our own). It then uses the depth lemma for exact sequences (our own).

**Paper or page:** [Algebra, Proposition 10.102.9](https://stacks.math.columbia.edu/tag/00N1), [More Algebra, Lemma 15.15.6](https://stacks.math.columbia.edu/tag/00MX). It says: “I(φᵢ) = R, or I(φᵢ) contains a regular sequence of length i.”

**Sources:**

- [D. A. Buchsbaum and D. Eisenbud, What makes a complex exact?, Journal of Algebra 25 (1973), 259–268.](https://doi.org/10.1016/0021-8693(73)90044-6)

### Defining the cotangent complex by resolutions makes it Ω for polynomial algebras

**Remember:** The cotangent complex is Kähler differentials of a polynomial resolution.

*True by definition.* MSC 13D03 ((Co)homology of commutative rings and algebras (e.g., Hochschild, André-Quillen, cyclic, dihedral, etc.)), 18G31. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** The cotangent complex L(B/A) is the Kähler differentials of a resolution: choose a cofibrant simplicial resolution P → B by polynomial A-algebras, and normalize the simplicial B-module Ω(Pₙ/A) ⊗ B (our own).

**Problem.** If B is a polynomial algebra over A, then L(B/A) is quasi-isomorphic to the Kähler differentials Ω(B/A) placed in degree zero.

**How the definition helps.** When B is already polynomial, the constant simplicial algebra B is such a resolution, so the definition gives Ω(B/A) in degree zero. The work is in the theorem that all resolutions give the same answer (Stacks Project, Cotangent, tag 08PS), which uses the homotopy theory of simplicial algebras.

**Wikipedia:** [Cotangent complex](https://en.wikipedia.org/wiki/Cotangent_complex). It says: “We can take the resolution of Spec(A\[x1,…,xn\]) to be the identity map, and then it is clear that the cotangent complex is the same as the Kähler differentials.”

**Paper or page:** [Cotangent, tag 08QH](https://stacks.math.columbia.edu/tag/08QH), [Cotangent, tag 08PS](https://stacks.math.columbia.edu/tag/08PS). It says: “If B is a polynomial algebra over the ring A, then L<sub>B</sub>/A is quasi-isomorphic to Ω<sub>B</sub>/A\[0\].”

**Sources:**

- [Luc Illusie, Complexe Cotangent et Déformations I, Lecture Notes in Mathematics 239, Springer (1971)](https://doi.org/10.1007/BFb0059052)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Deriving Kähler differentials extends the Jacobi–Zariski sequence to a triangle

**Remember:** Resolve by polynomial algebras, then take Kähler differentials degreewise.

*Makes the theorem clean to state or prove.* MSC 13D03 ((Co)homology of commutative rings and algebras (e.g., Hochschild, André-Quillen, cyclic, dihedral, etc.)), 18G31. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** The cotangent complex L(B/A) is the Kähler differentials of a resolution: choose a cofibrant simplicial resolution P → B by polynomial A-algebras, and normalize Ω(P/A) ⊗<sub>P</sub> B (our own).

**Problem.** For ring maps A → B → C, put X = L(B/A) ⊗ᴸ<sub>B</sub> C. There is a distinguished triangle X → L(C/A) → L(C/B) → X\[1\] (our own). Its homology sequence ends with Ω(B/A) ⊗<sub>B</sub> C → Ω(C/A) → Ω(C/B) → 0 (our own).

**How the definition helps.** For polynomial algebras the sequence of Kähler differentials is split exact, so compatible resolutions give a degreewise split sequence and hence a triangle (our own). Degree-zero homology is the ordinary differentials, and negative homology vanishes (our own). So the long exact sequence of the triangle ends with the classical sequence (our own).

**Wikipedia:** [Cotangent complex](https://en.wikipedia.org/wiki/Cotangent_complex). It says: “This sequence is exact on the left if the morphism f is smooth.”

**Paper or page:** [Cotangent, tag 08QX](https://stacks.math.columbia.edu/tag/08QX). It says: “Let A → B → C be ring maps. There is a canonical distinguished triangle L<sub>B</sub>/A ⊗ᴸ<sub>B</sub> C → L<sub>C</sub>/A → L<sub>C</sub>/B → L<sub>B</sub>/A ⊗ᴸ<sub>B</sub> C\[1\] in D(C).”

**Sources:**

- [Luc Illusie, Complexe Cotangent et Déformations I, Lecture Notes in Mathematics 239, Springer (1971)](https://doi.org/10.1007/BFb0059052)
- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)

### Minimal resolutions reveal projective dimension

**Remember:** Over the residue field, all differentials vanish.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** A free resolution over a Noetherian local ring is minimal if every differential has all matrix entries in the maximal ideal, so it becomes zero after tensoring with the residue field (our own). Finite modules have one, built by choosing a minimal generating set at each step (our own).

**Problem.** For a nonzero finite module, projective dimension equals the largest degree with nonzero Tor against the residue field, or infinity if the degrees are unbounded.

**How the definition helps.** Since the tensored differentials vanish, the dimension of Torᵢ(M, k) is the rank of the i-th term (our own). Nonzero Tor forbids a shorter resolution, and vanishing above degree n makes the minimal resolution stop there (our own).

**Paper or page:** [Homological Local, Corollary 4.7.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Then pd(M) is the largest integer n such that Torₙ(M, k) ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Serre's definition of regular rings by global dimension shuts out Nagata's example

**Remember:** A uniform bound on resolutions forbids infinite dimension.

*Rules out counterexamples.* MSC 13D05 (Homological dimension and commutative rings), 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** In Serre's sense, a commutative Noetherian ring is regular if one integer n bounds the projective dimensions of all its modules; the least such n is its global dimension.

**Problem.** A Noetherian ring has finite global dimension n exactly when all its localizations are regular and its Krull dimension is n. So Serre's regular rings are the regular rings of finite Krull dimension, and Nagata's ring is not one of them.

**How the definition helps.** The uniform bound is what Nagata's ring lacks: its local rings are regular but of unbounded dimension, so its global dimension is infinite (our own). The work is in Serre's local theorem that a regular local ring of dimension d has global dimension d. So under the localization definition, finite global dimension also needs finite Krull dimension.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring). It says: “Jean-Pierre Serre defined a regular ring as a commutative noetherian ring of finite global homological dimension. His definition is stronger than the definition above, which allows regular rings of infinite Krull dimension.”

**Paper or page:** [Algebra, Lemma 10.110.8](https://stacks.math.columbia.edu/tag/00OE), [Algebra, Lemma 10.110.2](https://stacks.math.columbia.edu/tag/00O9). It says: “Let R be a Noetherian ring. The following are equivalent: R has finite global dimension n, R is a regular ring of dimension n,”

**Sources:** none listed. No primary source with a working link was found.

### Serre's homological criterion makes regularity descend along flat local maps

**Remember:** Regular means the residue field has a finite resolution.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings), 13H05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R is regular when its maximal ideal 𝔪 is generated by dim R elements. Serre's criterion says this holds exactly when the residue field k = R/𝔪 has a finite free resolution.

**Problem.** Let R → S be a flat local map of Noetherian local rings. If S is regular, then R is regular.

**How the definition helps.** Flat base change turns a minimal free resolution of k over R into a minimal free resolution of S/𝔪S over S of the same length (our own). Since S is regular, S/𝔪S has finite projective dimension, so both resolutions are finite and R is regular (our own). The work is in Serre's criterion.

**Paper or page:** [Homological Local, Proposition 5.2](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Proposition 10.110.5](https://stacks.math.columbia.edu/tag/00OC). It says: “Let (R, 𝔪) → (S, 𝔫) be a flat, local homomorphism of noetherian local rings. If S is regular, so is R.”

**Sources:** none listed. No primary source with a working link was found.

### Testing projective dimension by Tor with the residue field bounds every module

**Remember:** The last nonzero Tor against the residue field detects projective dimension.

*True by definition.* MSC 13D05 (Homological dimension and commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** For a nonzero finite module M over a Noetherian local ring with residue field k, projective dimension is the largest i with Torᵢ(M, k) ≠ 0, or infinity if these degrees are unbounded (our own).

**Problem.** Every finitely generated module over a Noetherian local ring R has projective dimension at most pd k. Hence the global dimension of R equals the projective dimension of its residue field.

**How the definition helps.** Tor can be computed by resolving k instead of M, so Torᵢ(M, k) = 0 for i &gt; pd k, and hence pd M ≤ pd k (our own). The work is in the Tor description, which uses Nakayama's lemma and minimal resolutions. Global dimension is detected on cyclic modules R/I, so it equals pd k.

**Paper or page:** [Homological Local, Corollary 4.8](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Lemma 10.109.12](https://stacks.math.columbia.edu/tag/065T). It says: “Suppose there exists n such that Torₙ₊₁(k, k) = 0. Then every finitely generated R-module has a finite free resolution of length at most n.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Gorenstein by finite injective dimension makes regular rings Gorenstein

**Remember:** Finite global dimension bounds every injective dimension, including that of R.

*True by definition.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13H10, 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative Noetherian local ring R is Gorenstein if R, as a module over itself, has a finite injective resolution. A commutative Noetherian ring is Gorenstein if all its localizations at primes are (our own).

**Problem.** Every regular local ring is Gorenstein, and so is every regular ring.

**How the definition helps.** Serre's theorem gives a regular local ring finite global dimension d, so Extⁱ(M, R) = 0 for every module M and every i &gt; d, and R has finite injective dimension (our own). Applying this at every prime gives the global claim (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “a Gorenstein local ring is a commutative Noetherian local ring R with finite injective dimension as an R-module.”

**Paper or page:** [Dualizing, Lemma 47.21.3.](https://stacks.math.columbia.edu/tag/0AWX). It says: “A regular local ring is Gorenstein. A regular ring is Gorenstein.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)

### Flat base change lets Ext be computed over the larger ring

**Remember:** Flatness keeps resolutions exact, and the adjunction does the rest.

*True by definition.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 18G15. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A ring map R → R′ is flat if tensoring with R′ keeps exact sequences of R-modules exact.

**Problem.** Let R → R′ be flat, M an R-module and N′ an R′-module. Then Extⁱ over R′ of (M ⊗ R′, N′) is isomorphic to Extⁱ over R of (M, N′) for all i ≥ 0.

**How the definition helps.** Flatness turns a free resolution of M into a free resolution of M ⊗ R′ (our own). The adjunction Hom<sub>R</sub>′(F ⊗ R′, N′) = Hom<sub>R</sub>(F, N′) identifies the two Hom complexes term by term, and taking cohomology gives the isomorphism (our own).

**Paper or page:** [Algebra, Lemma 10.73.1.](https://stacks.math.columbia.edu/tag/087N). It says: “Given a flat ring map R → R′, an R-module M, and an R′-module N′ the natural map Extⁱ<sub>R</sub>′(M ⊗<sub>R</sub> R′, N′) → Extⁱ<sub>R</sub>(M, N′) is an isomorphism for i ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Flatness of the ring map makes Tor commute with base change

**Remember:** A flat ring map carries free resolutions to free resolutions.

*Rules out counterexamples.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 18G15. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A ring map R → R′ is flat when tensoring with R′ keeps exact sequences of R-modules exact.

**Problem.** Let R → R′ be flat and let M,N be R-modules. For every i ≥ 0, Torᵢᴿ(M,N) ⊗<sub>R</sub> R′ ≅ Torᵢᴿ′(M ⊗<sub>R</sub> R′,N ⊗<sub>R</sub> R′). This can fail without flatness (our own).

**How the definition helps.** Flatness carries a free resolution of M to one of M ⊗ R′, and the tensor complex over R′ is the old tensor complex tensored with R′ (our own). Flatness commutes with taking homology, which gives the formula (our own). For ℤ → ℤ/2 and M = N = ℤ/2, Tor₁ is ℤ/2 on the left and zero on the right (our own).

**Paper or page:** [Algebra, Lemma 10.76.1.](https://stacks.math.columbia.edu/tag/00M8). It says: “Given a flat ring map R → R′ and R-modules M, N the natural R-module map Torᵢᴿ(M, N) ⊗<sub>R</sub> R′ → Torᵢᴿ′(M ⊗<sub>R</sub> R′, N ⊗<sub>R</sub> R′) is an isomorphism for all i.”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes are exactly the compact objects of the derived category

**Remember:** Perfect complexes are built from R in finitely many steps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A complex of R-modules is perfect if it is quasi-isomorphic to a bounded complex of finite projective modules. An object K of the derived category D(R) is compact if maps out of K commute with arbitrary direct sums.

**Problem.** For any ring R, a complex is perfect exactly when it is a compact object of D(R).

**How the definition helps.** Maps from shifts of R compute cohomology, so R is a compact generator of D(R) (our own). The compact generator theorem makes the compact objects the smallest subcategory containing R and closed under shifts, cones and direct summands (our own). That subcategory consists of the perfect complexes (our own).

**Paper or page:** [Stacks Project, More Algebra, Proposition 15.79.3](https://stacks.math.columbia.edu/tag/07LT). It says: “Let R be a ring. For an object K of D(R) the following are equivalent (1) K is perfect, and (2) K is a compact object of D(R).”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 07LT (More Algebra, Proposition 15.79.3)](https://stacks.math.columbia.edu/tag/07LT)
- [A. Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/s0894-0347-96-00174-9)

### Pseudo-coherence equals finite cohomology over Noetherian rings and works beyond them

**Remember:** Resolve downward from a top degree using finite free modules at every step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 13D02, 13E15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** An R-complex is pseudo-coherent if it is quasi-isomorphic to a bounded-above complex of finite free R-modules.

**Problem.** Over a Noetherian ring R, a complex is pseudo-coherent exactly when it lies in D⁻(R) and all its cohomology modules are finitely generated.

**How the definition helps.** Over a Noetherian ring, kernels and quotients of finite modules are finite, so such a complex has finite cohomology (our own). Conversely, start at the top nonzero cohomology, map in finitely many free generators that hit it, and pass to the cone, whose cohomology is still finite (our own). Repeating downward builds the resolution (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.65.17](https://stacks.math.columbia.edu/tag/066E). It says: “Let R be a Noetherian ring. Then … (2) A complex of R-modules K is pseudo-coherent if and only if K ∈ D⁻(R) and Hⁱ(K) is a finite R-module for all i.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 066E (More Algebra, Lemma 15.65.17)](https://stacks.math.columbia.edu/tag/066E)

### Depth two keeps punctures connected

**Remember:** Depth two means functions on the punctured spectrum are just R.

*Rules out counterexamples.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** The depth of a Noetherian local ring R is the least i with Hⁱ\_𝔪(R) ≠ 0, where Hⁱ\_𝔪 derives the functor of elements killed by a power of the maximal ideal 𝔪 (our own). So depth at least two says that R is exactly the ring of functions on its punctured spectrum (our own).

**Problem.** The punctured spectrum of a Noetherian local ring of depth at least two is connected.

**How the definition helps.** A disconnection of the punctured spectrum gives a function equal to 1 on one part and 0 on the other (our own). By depth two it is an idempotent of R, but a local ring has only 0 and 1 (our own). In depth one, k\[\[x,y\]\]/(xy) loses its closed point and splits into the two axes (our own).

**Paper or page:** [Local Cohomology, Lemma 51.3.1.](https://stacks.math.columbia.edu/tag/0BLR). It says: “Let $A$ be a Noetherian local ring of depth $\\geq 2$. Then the punctured spectra of $A$, $A<sup>h$</sup>, and $A<sup>sh</sup>$ are connected.”

**Sources:** none listed. No primary source with a working link was found.

### Gorenstein rings dualize themselves, so local duality uses Ext into R

**Remember:** Gorenstein means R already has finite injective dimension, so R dualizes itself.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13H10, 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring R is Gorenstein if R has finite injective dimension over itself. A dualizing complex D needs bounded finite cohomology, finite injective dimension and R ≅ RHom<sub>R</sub>(D, D); R always meets the first and last, so Gorenstein makes R dualizing (our own).

**Problem.** Let R be a Gorenstein local ring of dimension n, with E an injective hull of its residue field (the smallest injective module containing it). For every finitely generated module M, Hⁱₘ(M) is the Matlis dual Hom(Extⁿ⁻ⁱ(M, R), E).

**How the definition helps.** So R\[n\] is the normalized dualizing complex, and local duality with it gives the formula. All the work is in local duality. Without this, one would first build a canonical module and then show that it is R (our own remark).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “Then, for any finitely generated R-module M and integer i, the local cohomology group Hⁱ<sub>m</sub>(M) is dual to Extⁿ⁻ⁱ<sub>R</sub>(M,R)”

**Paper or page:** [Dualizing, Lemma 47.21.4.](https://stacks.math.columbia.edu/tag/0DW9). It says: “If A is Gorenstein, then A has a dualizing complex if and only if A\[0\] is a dualizing complex.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)
- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)

### Local cohomology ignores ideal thickening

**Remember:** Local cohomology sees only the closed set, not the ideal.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** Local cohomology at an ideal I derives the functor of sections supported on V(I), the closed set of primes containing I. A section is supported on V(I) when it vanishes outside V(I), so only the set V(I) enters, not the ideal itself (our own).

**Problem.** Over a Noetherian ring, two ideals with the same radical give naturally isomorphic local cohomology functors.

**How the definition helps.** Ideals with the same radical lie in the same primes, so they have the same V(I) and the same support functor (our own). Over a Noetherian ring, a comparison theorem identifies these groups with the derived functors of I-power torsion (our own).

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “Since the local cohomology with respect to I may be computed using any such ideal,”

**Paper or page:** [Local Cohomology, Lemma 51.2.1.](https://stacks.math.columbia.edu/tag/0A6T). It says: “there is a functorial isomorphism $$ R\\Gamma<sub>Z</sub>(K) = R\\Gamma<sub>Z</sub>(X, \\widetilde{K}) $$”

**Sources:** none listed. No primary source with a working link was found.

### Local cohomology makes Cohen–Macaulay mean cohomology in one degree

**Remember:** Depth is where local cohomology starts, dimension is where it stops.

*Makes the theorem clean to state or prove.* MSC 13D45 (Local cohomology and commutative rings), 13C14. arXiv math.AC. Level 3: graduate.

**Definition.** A nonzero finite module M over a Noetherian local ring is Cohen–Macaulay when its depth equals its dimension. Local cohomology Hⁱ\_𝔪(M) derives the functor of elements killed by a power of the maximal ideal 𝔪. Its lowest nonzero degree is the depth of M and its highest is the dimension (our own).

**Problem.** Hⁱ\_𝔪(M) is zero below the depth and above the dimension of M, and nonzero at both ends. So M is Cohen–Macaulay exactly when Hⁱ\_𝔪(M) is nonzero for only one i.

**How the definition helps.** When the two ends are equal, the nonzero range is a single degree. The lower end follows from writing Hⁱ\_𝔪 as a colimit of Ext modules, which detect depth. The upper end is Grothendieck's vanishing and nonvanishing theorem, where the real work lies.

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “These two bounds together yield a characterisation of Cohen–Macaulay modules over local rings: they are precisely those modules where Hⁿ<sub>m</sub>(M) vanishes for all but one n.”

**Paper or page:** [Dualizing, Lemma 47.11.1.](https://stacks.math.columbia.edu/tag/0AVZ), [Local Cohomology, Lemma 51.4.7.](https://stacks.math.columbia.edu/tag/0DXC), [Local Cohomology, Lemma 51.4.9.](https://stacks.math.columbia.edu/tag/0DXE). It says: “the smallest integer i such that H<sup>i<sub>I</sub></sup>(M) is nonzero.”

**Sources:**

- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)

### Local cohomology measures extension failure

**Remember:** Local cohomology is what restriction to the complement loses or misses.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** For X = Spec A, a closed set Z and its complement U, local cohomology Hⁱ<sub>Z</sub>(M) is the cohomology of the fibre of the restriction map RΓ(X,M̃) → RΓ(U,M̃), its mapping cone shifted by −1 (our own). So it measures how restriction from X to U fails to be injective and surjective (our own).

**Problem.** Let Z be the set of primes containing a finitely generated ideal of A, and U its complement. Restriction from M to the sections of M̃ on U has kernel H⁰<sub>Z</sub>(M) and cokernel H¹<sub>Z</sub>(M).

**How the definition helps.** The fibre gives an exact sequence 0 → H⁰<sub>Z</sub>(M) → M → H⁰(U,M̃) → H¹<sub>Z</sub>(M) → H¹(X,M̃) (our own). The last term is zero because X is affine, so the sequence stops there (our own).

**Paper or page:** [Local Cohomology, Lemma 51.2.2.](https://stacks.math.columbia.edu/tag/0DWR). It says: “given $M$ there is an exact sequence $$ 0 \\to H<sup>0<sub>Z</sub></sup>(M) \\to M \\to H<sup>0</sup>(U, \\mathcal{F}) \\to H<sup>1<sub>Z</sub></sup>(M) \\to 0 $$”

**Sources:** none listed. No primary source with a working link was found.

### Regularity defined by local cohomology never rises when finite-length torsion is removed

**Remember:** Regularity is read off local cohomology, and torsion only touches degree zero.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D02. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** For a finite graded module M over a standard graded polynomial ring over a field, with 𝔪 the ideal of the variables, reg(M) is the largest value of end(Hⁱ\_𝔪(M)) + i. Here end(N) is the top degree where N is nonzero, and end(0) = −∞.

**Problem.** For every such M, the regularity of M/H⁰\_𝔪(M) is at most the regularity of M.

**How the definition helps.** Removing the finite-length part H⁰\_𝔪(M) kills degree-zero local cohomology and leaves the higher ones unchanged, so the largest value can only drop (our own step). Free resolutions do not show this, since the resolution changes completely. The work went into the Eisenbud–Goto theorem that the two definitions agree.

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology), [Castelnuovo–Mumford regularity](https://en.wikipedia.org/wiki/Castelnuovo%E2%80%93Mumford_regularity). It says: “For example, the Castelnuovo–Mumford regularity can be formulated using local cohomology as reg(M) = sup{end(H<sup>i<sub>m</sub></sup>(M))+i \| 0 ≤ i ≤ dim(M)}”

**Sources:**

- [D. Eisenbud and S. Goto, Linear free resolutions and minimal multiplicity, Journal of Algebra 88 (1984)](https://doi.org/10.1016/0021-8693(84)90092-9)

### Torsion as a union of annihilators makes local cohomology an Ext colimit

**Remember:** Torsion is a colimit of Homs, so local cohomology is a colimit of Exts.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** The torsion functor Γₐ sends a module M to its elements killed by some power of the ideal a, which is the union of the submodules Hom(A/aⁿ, M) (our own). Local cohomology Hⁱₐ is the i-th right derived functor of Γₐ.

**Problem.** For every module M and every i, the local cohomology Hⁱₐ(M) is the colimit over n of Extⁱ(A/aⁿ, M).

**How the definition helps.** Since Γₐ is the filtered colimit of the functors Hom(A/aⁿ, −), its derived functors are the colimits of their derived functors Extⁱ(A/aⁿ, −). This holds because filtered colimits are exact, so cohomology of an injective resolution passes through them (our own).

**Wikipedia:** [Local cohomology](https://en.wikipedia.org/wiki/Local_cohomology). It says: “and for this reason, the local cohomology of an R-module M agrees with a direct limit of Ext modules”

**Paper or page:** [Dualizing, Lemma 47.8.2.](https://stacks.math.columbia.edu/tag/0954). It says: “For any object K of D(A) we have RΓ<sub>I</sub>(K) = hocolim RHom<sub>A</sub>(A/Iⁿ, K) in D(A) and R<sup>qΓ<sub>I</sub></sup>(K) = colim<sub>n</sub> Ext<sub>A</sub><sup>q</sup>(A/Iⁿ, K) as modules for all q ∈ Z.”

**Sources:**

- [R. Hartshorne, Local Cohomology (a seminar given by A. Grothendieck), Lecture Notes in Mathematics 41, Springer, 1967](https://doi.org/10.1007/BFb0073971)
- [A. Grothendieck, SGA 2, Cohomologie locale des faisceaux cohérents et théorèmes de Lefschetz locaux et globaux, Documents Mathématiques 4, SMF, 2005](https://arxiv.org/abs/math/0511279)

### Čech length bounds local cohomology

**Remember:** No term past the last generator means no cohomology there.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 3: graduate.

**Definition.** For generators f₁,…,fᵣ of an ideal, the augmented Čech complex of M puts in degree j the sum of the localizations of M at the products of j distinct generators, for 0 ≤ j ≤ r. Its differentials are alternating sums of localization maps, and it has no terms above degree r (our own).

**Problem.** Over a Noetherian ring, local cohomology in an ideal generated by r elements vanishes in degrees above r for every module.

**How the definition helps.** The Čech complex has no terms above degree r, so its cohomology vanishes there (our own). Over a Noetherian ring, a comparison theorem identifies its cohomology with local cohomology (our own).

**Paper or page:** [Local Cohomology, Lemma 51.4.3.](https://stacks.math.columbia.edu/tag/0DX9). It says: “cd(A, I) is at most equal to the number of generators of I”

**Sources:** none listed. No primary source with a working link was found.

### Coherent rings give finitely presented modules degreewise finite free resolutions

**Remember:** A finitely presented kernel lets you repeat the same finite free step.

*True by definition. Confidence: medium.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13D02. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative ring is coherent if every map between finitely presented modules, cokernels of maps between finite free modules, has a finitely presented kernel (our own).

**Problem.** Over a coherent ring, every finitely presented module has a free resolution with finite rank in each degree.

**How the definition helps.** Each kernel in the resolution is again finitely presented, so each step needs only a finite free module. Map a finite free module onto the module, then repeat with the finitely presented kernel (our own). The work moves to showing that this agrees with the usual definition by finitely generated ideals (our own).

**nLab:** [coherent ring](https://ncatlab.org/nlab/show/coherent+ring). It says: “A ring is left coherent iff every finitely presented left module has a resolution by finitely presented projective left modules.”

**Sources:** none listed. No primary source with a working link was found.

### Finite presentation makes flat modules projective and locally free

**Remember:** Flat plus finitely presented equals finite locally free.

*Rules out counterexamples.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13C11, 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** An R-module is finitely presented if it is the cokernel of a map between finite free R-modules, and flat if tensoring with it preserves injections (our own).

**Problem.** A module is finite projective exactly when it is finitely presented and flat. Finite projective modules are the same as finite locally free modules.

**How the definition helps.** Over a local ring a finitely presented flat module is free, and finite presentation spreads a basis to a neighborhood, so the module is finite locally free (our own). Finite locally free modules are summands of finite free modules, which are flat and finitely presented (our own). Without finite presentation, an infinite product of fields modulo the finitely supported sequences is cyclic and flat but not projective (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.83.1](https://stacks.math.columbia.edu/tag/058R), [Stacks Project, Algebra, Lemma 10.78.2](https://stacks.math.columbia.edu/tag/00NX). It says: “Let M be an R-module. Then M is finite projective if and only if M is finitely presented and flat.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 058R (Algebra, Lemma 10.83.1)](https://stacks.math.columbia.edu/tag/058R)
- [The Stacks Project Authors, The Stacks Project, Tag 00NX (Algebra, Lemma 10.78.2)](https://stacks.math.columbia.edu/tag/00NX)

### Finitely presented modules are exactly those whose maps commute with filtered colimits

**Remember:** Finitely presented objects meet a filtered colimit at some finite stage.

*True by definition.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 18A30. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** An R-module N is finitely presented if it is the cokernel of a map between two finite free R-modules. So a map out of N is fixed by finitely many generator images that satisfy finitely many relations.

**Problem.** Let M be the colimit of a filtered system of R-modules Mᵢ. N is finitely presented exactly when colim Hom<sub>R</sub>(N,Mᵢ) → Hom<sub>R</sub>(N,M) is bijective for every such system, so every map from N to M factors through a stage.

**How the definition helps.** Finitely many generator images and relations all lift to, and hold at, one stage of a filtered system (our own). Conversely, N is a filtered colimit of finitely presented modules, and the property makes N a retract of one of them (our own). Retracts of finitely presented modules are finitely presented (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.11.4](https://stacks.math.columbia.edu/tag/0G8P), [Stacks Project, Algebra, Lemma 10.127.3](https://stacks.math.columbia.edu/tag/00QO), [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let N be an R-module. The following are equivalent (1) N is a finitely presented R-module, (2) for any filtered colimit M = colim Mᵢ of R-modules the map colim Hom(N, Mᵢ) → Hom(N, M) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0G8P (Algebra, Lemma 10.11.4)](https://stacks.math.columbia.edu/tag/0G8P)
- [The Stacks Project Authors, The Stacks Project, Tag 00QO (Algebra, Lemma 10.127.3)](https://stacks.math.columbia.edu/tag/00QO)
- [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf)

### Being Dedekind is a local property and survives integral closure

**Remember:** Noetherian, integrally closed, dimension at most one: all three survive.

*Makes the theorem clean to state or prove.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A Dedekind domain is a Noetherian integral domain in which every nonzero prime ideal is maximal. It must also be integrally closed: every fraction that is a root of a monic polynomial over the ring lies in the ring.

**Problem.** Let R be a Dedekind domain with fraction field K, and let L be a finite extension of K. Then the integral closure of R in L is again a Dedekind domain. Also, a Noetherian domain is Dedekind exactly when all its localizations at maximal ideals are.

**How the definition helps.** Each defining condition is local and passes to integral closures in finite extensions, so the class is closed under the operations of number theory. The integral closure step is the Krull–Akizuki theorem, and starting from ℤ it makes every ring of integers of a number field Dedekind. Principal ideal domains are not closed: ℤ is one, but its integral closure ℤ\[√−5\] in ℚ(√−5) is not (our own).

**Wikipedia:** [Dedekind domain](https://en.wikipedia.org/wiki/Dedekind_domain). It says: “By the 20th century, algebraists and number theorists had come to realize that the condition of being a PID is rather delicate, whereas the condition of being a Dedekind domain is quite robust.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Prüfer domains by flatness makes tensor products of torsion-free modules torsion-free

**Remember:** Torsion-free is flat, and flat keeps injections injective.

*True by definition.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** A Prüfer domain is an integral domain over which every torsion-free module, one where multiplication by each nonzero scalar is injective, is flat, so that tensoring with it preserves injections (our own).

**Problem.** Over a Prüfer domain, the tensor product of two torsion-free modules is torsion-free.

**How the definition helps.** Multiplication by a nonzero scalar a on M ⊗ N is M tensored with multiplication by a on N (our own). That map is injective because N is torsion-free, and tensoring with the flat module M keeps it injective (our own). The work moves to proving that this definition agrees with the usual one.

**Wikipedia:** [Prüfer domain](https://en.wikipedia.org/wiki/Pr%C3%BCfer_domain). It says: “If M and N are torsion-free R-modules then their tensor product M ⊗ᵣ N is torsion-free.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional exponents give every branch of an algebraic curve a series

**Remember:** Allow fractional exponents with one common denominator, bounded below.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 32S05, 30B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Puiseux series over a field k is a formal Laurent series in x¹⁄ⁿ for one positive integer n, so its exponents are fractions with the common denominator n and are bounded below (our own).

**Problem.** Every local y-branch of a nonzero complex polynomial equation P(x,y)=0 admits a convergent Laurent expansion in some x¹⁄ⁿ near zero (our own). Over an algebraically closed field of characteristic zero, the field of formal Puiseux series is algebraically closed.

**How the definition helps.** Fractional exponents are needed already for y² = x, whose roots ±x¹⁄² have no series in integer powers (our own). The Newton–Puiseux theorem shows that in characteristic zero one denominator suffices for each branch, and its analytic form gives convergence over ℂ (our own).

**Wikipedia:** [Puiseux series](https://en.wikipedia.org/wiki/Puiseux_series). It says: “Using modern terminology, Puiseux's theorem asserts that the set of Puiseux series over an algebraically closed field of characteristic 0 is itself an algebraically closed field, called the field of Puiseux series.”

**Sources:** none listed. No primary source with a working link was found.

### Left-finite support makes Novikov series closed under multiplication

**Remember:** Finitely many terms below any bound keep products finite.

*Rules out counterexamples. Confidence: medium.* MSC 13F25 (Formal power series rings), 12J25, 16W60. arXiv math.AC, math.SG. Level 3: graduate.

**Definition.** For a totally ordered abelian group G and a commutative ring k, a Novikov series is a function G → k with left-finite support: below each element of G only finitely many values are nonzero. Series add pointwise and multiply by convolution, (fg)(z) = ∑<sub>x+y=z</sub> f(x)g(y).

**Problem.** The Novikov ring is a ring: the product of two left-finite functions has finite sums as coefficients and is again left-finite.

**How the definition helps.** Left-finiteness gives each nonzero support a least element, a for f and b for g (our own). A pair with x + y ≤ z has x ≤ z − b and y ≤ z − a, so only finitely many pairs contribute, which bounds each coefficient and makes the product left-finite (our own). Without the condition, the all-ones functions on ℤ give an infinite sum at zero (our own).

**nLab:** [Novikov field](https://ncatlab.org/nlab/show/Novikov+field). It says: “Left-finiteness of the support of f and g implies that the above sum is finite.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing any ordered value group gives every valuation ring a valuation

**Remember:** Any ordered group may hold the values, so K×/D× works.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation on K is a homomorphism v from K× to any totally ordered abelian group, with v(0) = ∞ and v(x+y) ≥ min(v(x),v(y)) (our own). A valuation ring D of K is a subring that contains x or x⁻¹ for every x ∈ K×.

**Problem.** Every valuation ring D comes from a valuation, with D the set of elements of value at least 0.

**How the definition helps.** Take the group K×/D×, with \[x\] ≥ \[y\] when x/y ∈ D; the inverse test makes this a total order (our own). The projection is a valuation whose elements of value at least 0 form D, after adding zero (our own). The sum rule holds because x/y ∈ D gives (x+y)/y = x/y + 1 ∈ D (our own).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “take Γ to be the quotient K×/D× of the unit group of K by the unit group of D, and take ν to be the natural projection.”

**Sources:**

- [Wolfgang Krull, Allgemeine Bewertungstheorie, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.160)

### Discrete valuation rings need Noetherianity

**Remember:** A principal maximal ideal measures order when its powers intersect in zero.

*Rules out counterexamples.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** A discrete valuation ring is a Noetherian local domain, one with a single maximal ideal and only finitely generated ideals, whose maximal ideal is generated by one nonzero element.

**Problem.** In a discrete valuation ring, each nonzero element is a unit times a power of a generator of the maximal ideal. This can fail in a valuation ring that is not Noetherian, even when its maximal ideal has one generator.

**How the definition helps.** Noetherianity gives Krull's intersection theorem, so each nonzero element has a largest power of the generator dividing it, and the remaining factor is a unit (our own). Without it, value k((u))((t)) first by the t-exponent and then by the u-exponent of the leading coefficient (our own). Its valuation ring has maximal ideal (u), yet every power of u divides t (our own).

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “When the value group is isomorphic to ℤ, the ring O is called a discrete valuation ring.”

**Paper or page:** [Algebra, Lemma 10.119.7.](https://stacks.math.columbia.edu/tag/00PD). It says: “The ring A is a Noetherian local domain with maximal ideal 𝔪 generated by a single nonzero element.”

**Sources:** none listed. No primary source with a working link was found.

### The divisibility test makes quotients of valuation rings by primes valuation rings

**Remember:** Of any two elements one divides the other, and quotients keep this.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring is a domain in which, of any two elements, one divides the other. Equivalently, x or 1/x lies in the ring for each nonzero fraction x.

**Problem.** The quotient of a valuation ring by a prime ideal is a valuation ring.

**How the definition helps.** The divisibility test is about pairs of elements, so it passes to any quotient that is a domain: lift two elements of A/𝔭, find that one divides the other in A, and reduce (our own). The quotient is a domain because 𝔭 is prime. With the value-based definition, one would first have to build a valuation for the quotient (our own).

**Paper or page:** [Lemma 10.50.9.](https://stacks.math.columbia.edu/tag/088Y). It says: “For any prime ideal 𝔭 ⊂ A the quotient A/𝔭 is a valuation ring.”

**Sources:** none listed. No primary source with a working link was found.

### The inverse test makes valuation ring ideals linearly ordered

**Remember:** One of two nonzero elements divides the other.

*True by definition.* MSC 13F30 (Valuation rings), 13A18. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring A of a field K is a subring containing x or x⁻¹ for every nonzero x in K. So of any two nonzero elements of A, one divides the other.

**Problem.** In a valuation ring, any two ideals are comparable: one contains the other.

**How the definition helps.** If a ∈ I is not in J and b ∈ J is nonzero, then a/b ∉ A, since otherwise a = (a/b)b ∈ J (our own). So the inverse test gives b/a ∈ A, hence b ∈ I and J ⊆ I (our own).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “Another way to characterize the valuation rings of a field F is that valuation rings D of F have F as their field of fractions, and their ideals are totally ordered by inclusion”

**Paper or page:** [More Algebra, Lemma 15.125.2](https://stacks.math.columbia.edu/tag/0ASN), [Algebra, Lemma 10.50.4](https://stacks.math.columbia.edu/tag/00IB), [Algebra, Lemma 10.50.5](https://stacks.math.columbia.edu/tag/052K). It says: “Let A be a valuation ring with maximal ideal 𝔪 and fraction field K. Let x ∈ K. Then either x ∈ A or x⁻¹ ∈ A or both.”

**Sources:**

- [The Stacks Project, Lemma 10.50.4, Tag 00IB](https://stacks.math.columbia.edu/tag/00IB)
- [The Stacks Project, Lemma 10.50.5, Tag 052K](https://stacks.math.columbia.edu/tag/052K)
- [The Stacks Project, Lemma 15.125.2, Tag 0ASN](https://stacks.math.columbia.edu/tag/0ASN)

### The x-or-1/x test makes composite valuation rings valuation rings

**Remember:** Test an element in A′, then test its residue in A.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring of a field contains x or x⁻¹ for every nonzero element x of the field. Given a valuation ring A′ with residue field K and a valuation ring A of K, their composite C is the set of elements of A′ whose residue lies in A.

**Problem.** The composite ring C is a valuation ring.

**How the definition helps.** For nonzero x in the fraction field of A′, the test puts x or x⁻¹ in A′ (our own). If that element lies in the maximal ideal, its residue is 0 ∈ A, so it lies in C (our own). Otherwise x and x⁻¹ are both units of A′ with inverse nonzero residues, A contains one of them, and C contains its lift (our own).

**Paper or page:** [Lemma 10.50.10.](https://stacks.math.columbia.edu/tag/088Z). It says: “Let A′ be a valuation ring with residue field K. Let A be a valuation ring with fraction field K.”

**Sources:** none listed. No primary source with a working link was found.

### The x-or-1/x test survives directed limits of valuation rings

**Remember:** Test each pair at a stage that already contains both.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring is a domain in which, for any two elements, one divides the other.

**Problem.** The direct limit of a directed system of valuation rings, where any two stages map into a common later stage, is a valuation ring.

**How the definition helps.** The divisibility test involves only two elements, and any two elements of the limit come from one stage, where one divides the other (our own). The limit is a domain, since a product that is zero in the limit is zero at some stage (our own). With the valuation definition, one would first have to build a value group for the limit (our own).

**Paper or page:** [Lemma 10.50.6.](https://stacks.math.columbia.edu/tag/0AS4). It says: “Let I be a directed set. Let (Aᵢ, φᵢⱼ) be a system of valuation rings over I.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings restrict to subfields

**Remember:** An element and its inverse stay in the same subfield.

*True by definition.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** A valuation ring of a field L is a subring containing x or x⁻¹ for each nonzero x in L.

**Problem.** Let B be a valuation ring with fraction field L. For any subfield K of L, B ∩ K is a valuation ring with fraction field K.

**How the definition helps.** If x lies in K, so does x⁻¹, so the test for B ∩ K inside K is the test for B (our own). It also writes each nonzero x ∈ K as x/1 or 1/x⁻¹ with terms in B ∩ K, so K is the fraction field (our own).

**nLab:** [valuation ring](https://ncatlab.org/nlab/show/valuation+ring). It says: “for every nonzero element x in its field of fractions K, either x ∈ O or x⁻¹ ∈ O;”

**Paper or page:** [Algebra, Lemma 10.50.7.](https://stacks.math.columbia.edu/tag/052L). It says: “Let L/K be an extension of fields. If B ⊂ L is a valuation ring, then A = K ∩ B is a valuation ring.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings, holding x or 1/x, capture integral closure

**Remember:** Of x and 1/x, a valuation ring always holds one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F30 (Valuation rings), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation ring of a field K is a subring D such that, for every nonzero x in K, x or 1/x lies in D.

**Problem.** The integral closure of a domain A in its fraction field K is the intersection of all valuation rings of K that contain A.

**How the definition helps.** Each valuation ring is integrally closed: if x is integral but not in D, then x⁻¹ ∈ D, and dividing the monic equation by xⁿ⁻¹ puts x in D (our own). Conversely, if x is not integral over A, then x⁻¹ is a nonunit of A\[x⁻¹\] (our own). A valuation ring that dominates a localization at a maximal ideal containing x⁻¹ then excludes x (our own).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “In fact, the integral closure of an integral domain A in the field of fractions K of A is the intersection of all valuation rings of K containing A.”

**Sources:**

- [W. Krull, Beiträge zur Arithmetik kommutativer Integritätsbereiche VI, Mathematische Zeitschrift 45 (1939) 1–19](https://doi.org/10.1007/BF01580269)

### Value bounds classify valuation ideals

**Remember:** An ideal keeps every value above any value it already contains.

*True by definition.* MSC 13F30 (Valuation rings). arXiv math.AC. Level 3: graduate.

**Definition.** The valuation ring of a valuation v, with values in a totally ordered group, consists of zero and every element of nonnegative value, and in it x divides y exactly when v(x) ≤ v(y) (our own).

**Problem.** Ideals of a valuation ring correspond to upward closed subsets of the nonnegative values, including the empty set.

**How the definition helps.** An ideal containing x contains every y with v(y) ≥ v(x), because x divides y, so it is the set of elements with values in an upward closed set (our own). Conversely, the elements with values in such a set, with zero, are closed under addition by v(x+y) ≥ min(v(x),v(y)) and under multiplication by ring elements (our own).

**Paper or page:** [Algebra, Lemma 10.50.17.](https://stacks.math.columbia.edu/tag/00IH). It says: “Ideals in A correspond 1 - 1 with ideals of Γ. This bijection is inclusion preserving, and maps prime ideals to prime ideals.”

**Sources:** none listed. No primary source with a working link was found.

### Defining δ-rings by a p-derivation makes Frobenius lifts ring maps

**Remember:** δ is the Frobenius lift minus the pth power, over p.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 14F30. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** Fix a prime p. A δ-ring is a commutative ring with a map δ such that δ(0)=δ(1)=0, δ(x+y)=δ(x)+δ(y)+(xᵖ+yᵖ−(x+y)ᵖ)/p and δ(xy)=xᵖδ(y)+yᵖδ(x)+pδ(x)δ(y), the quotient by p taken in ℤ\[x,y\] (our own). These are exactly the rules that make φ(x) = xᵖ + pδ(x) additive and multiplicative (our own).

**Problem.** In a δ-ring, φ(x) = xᵖ + pδ(x) is a ring endomorphism that lifts the Frobenius map x ↦ xᵖ of A/p. If A has no p-torsion, δ-structures on A correspond exactly to such lifts.

**How the definition helps.** Expanding φ(x+y) and φ(xy) with the two rules shows that φ is a ring map, and φ(x) ≡ xᵖ modulo p. Without p-torsion, a Frobenius lift φ gives back δ(x) = (φ(x) − xᵖ)/p. Using δ instead of φ keeps the structure meaningful when p is a zero divisor (our own remark).

**nLab:** [δ-ring](https://ncatlab.org/nlab/show/%CE%B4-ring). It says: “If (R,δ) is a δ-ring, then the map φ: R→R given by φ(x)=xᵖ+pδ(x) is a ring homomorphism that lifts the Frobenius endomorphism on R/p.”

**Wikipedia:** [P-derivation](https://en.wikipedia.org/wiki/P-derivation). It says: “When the ring R is p-torsion free the correspondence is a bijection.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)

### Ghost coordinates make big Witt vectors over rational algebras a ring

**Remember:** In ghost coordinates, all operations are coordinate by coordinate.

*True by definition.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC. Level 3: graduate.

**Definition.** For a commutative ℚ-algebra A, big Witt vectors are sequences (a₁,a₂,…) in A, added and multiplied so that the ghost components wₙ = ∑<sub>d∣n</sub> d·a<sub>d</sub>⁽ⁿ⁄ᵈ⁾ add and multiply entrywise (our own).

**Problem.** Big Witt vectors of a rational algebra satisfy the ring axioms.

**How the definition helps.** Over ℚ the ghost map is a bijection onto all sequences, since one solves for each aₙ in turn by dividing by n (our own). So the Witt operations are the entrywise operations moved along a bijection, and the ring axioms hold. For general rings, the work moves to the integer polynomials and the identities between them (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the addition and multiplication is taken to component-wise addition and multiplication, so since this is the standard ring structure we know W(A) is a ring.”

**Sources:** none listed. No primary source with a working link was found.

### Limits and colimits of δ-rings are computed on the underlying rings

**Remember:** A δ-structure is a section to W₂, which passes through diagrams.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 18A30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A δ-structure on a ring A is a ring map s ∶ A → W₂(A) whose first component is the identity, where W₂ is the length-two p-typical Witt vector functor (our own).

**Problem.** The forgetful functor from δ-rings to commutative rings creates all limits and all colimits. For example, a product or a tensor product of δ-rings is a δ-ring in a unique compatible way.

**How the definition helps.** W₂ commutes with limits, so the sections of the stages combine into a unique section of the limit (our own). For a colimit A, the maps Aᵢ → W₂(Aᵢ) → W₂(A) are compatible and induce a unique section of A (our own). The first-component condition and the universal property follow from uniqueness for the underlying rings (our own).

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

**How the definition helps.** Perfectness kills p-torsion, because φ kills p-torsion and is injective, and it makes Frobenius on A/p bijective (our own). A p-torsion-free, p-complete ring with perfect A/p is identified with W(A/p) by the strict p-ring theorem, compatibly with φ and hence δ (our own). Completeness is needed, since ℤ with φ = id is perfect but W(𝔽ₚ) = ℤₚ (our own).

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “Its image then consists of those δ-rings that are perfect (in the sense that the associated map φ is an isomorphism) and whose underlying ring is p-adically complete.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)

### Perfect residue fields give Witt reduction modulo p

**Remember:** Times p is Frobenius then shift; perfection makes it fill the kernel.

*Rules out counterexamples. Confidence: medium.* MSC 13F35 (Witt vectors and related rings), 11S85. arXiv math.NT. Level 3: graduate.

**Definition.** For a field k of characteristic p, the p-typical Witt vectors W(k) are sequences (a₀,a₁,…) in k, and reduction W(k) → k reads off a₀. Multiplication by p sends (a₀,a₁,…) to (0,a₀ᵖ,a₁ᵖ,…) (our own). The field k is perfect when every element is a pth power.

**Problem.** For a perfect field k of characteristic p, reduction identifies W(k)/pW(k) with k. In particular, for finite k this recovers the residue field of the unramified p-adic integer ring W(k). The identification fails for k = 𝔽ₚ(t).

**How the definition helps.** The kernel of reduction is all vectors (0,b₁,b₂,…), and p·a reaches all of them exactly when each bᵢ is a pth power (our own). For k = 𝔽ₚ(t), the vector (0,t,0,…) lies in the kernel but not in pW(k) (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the Verschiebung morphism coincides with the shift (a₀, a₁, …) ↦ (0, a₀, a₁, …)”

**Sources:** none listed. No primary source with a working link was found.

### Witt vectors are the cofree δ-ring on a ring

**Remember:** Map a δ-ring into R, and it lifts uniquely to W(R).

*Makes the theorem clean to state or prove.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A δ-ring is a commutative ring A with a ring map A → W₂(A) whose first coordinate is the identity, where W₂ is the length-two p-typical Witt vector functor, and δ-ring maps commute with these maps (our own).

**Problem.** For every δ-ring A and every ring R, each ring map A → R lifts to a unique δ-ring map A → W(R). So W is right adjoint to the forgetful functor from δ-rings to rings.

**How the definition helps.** Ring maps A → R correspond to δ-ring maps A → W(R) by composing with the first coordinate W(R) → R, and this natural bijection is the right adjoint property (our own). The work is in the cofree property of Witt vectors, which holds also for rings with p-torsion (our own).

**Wikipedia:** [Witt vector](https://en.wikipedia.org/wiki/Witt_vector). It says: “One then has a forgetful functor U: CRing\_δ → CRing whose right adjoint identifies with the functor W of Witt vectors.”

**Paper or page:** [Graded loopspaces in mixed characteristics and de Rham-Witt algebra](https://arxiv.org/abs/2209.03483), [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “The Witt vectors admits a natural δ-structure, the forgetful functor δ-CRing<sub>k</sub> → CRing<sub>k</sub> admits W as a right adjoint.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [L. Monier, Graded loopspaces in mixed characteristics and de Rham-Witt algebra, PhD thesis, arXiv 2209.03483 (2022)](https://arxiv.org/abs/2209.03483)

### Excellent rings shut out Nagata's badly behaved Noetherian rings

**Remember:** Excellent means regular formal fibers, open regular loci, and universal catenarity.

*Rules out counterexamples.* MSC 13F40 (Excellent rings). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring A is excellent when its local rings map to their completions with geometrically regular fibers, and every finite type A-algebra has open regular locus. It must also be universally catenary: in every finite type A-algebra, all saturated chains of primes between two fixed primes have the same length (our own).

**Problem.** Let A be an excellent ring. If A is a domain, its integral closure is a finitely generated A-module. If A is a normal local ring, its completion is normal, and the singular points of every finitely generated A-algebra form a closed set.

**How the definition helps.** Geometrically regular completion maps preserve normality, excluding normal local examples with nonnormal completion (our own). The open regular locus condition gives closed singular locus directly (our own). The theorem that excellent rings are Nagata gives finite normalization, excluding Nagata’s domains with nonfinite normalization (our own).

**Wikipedia:** [Excellent ring](https://en.wikipedia.org/wiki/Excellent_ring), [Nagata ring](https://en.wikipedia.org/wiki/Nagata_ring), [Catenary ring](https://en.wikipedia.org/wiki/Catenary_ring). It says: “At one time it seemed that the class of Noetherian rings might be an answer to this problem, but Masayoshi Nagata and others found several strange counterexamples showing that in general Noetherian rings need not be well-behaved”

**Sources:**

- [A. Grothendieck, Éléments de géométrie algébrique IV, seconde partie, Publications Mathématiques de l'IHÉS 24 (1965)](https://doi.org/10.1007/BF02684322)

### Finite global dimension makes localizations of regular local rings regular

**Remember:** Regular local rings have uniformly bounded resolutions, and localization preserves that bound.

*True by definition.* MSC 13H05 (Regular local rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is regular when its maximal ideal needs exactly as many generators as its Krull dimension. By Serre's criterion, this means every module has a projective resolution of length at most one fixed bound (our own).

**Problem.** The localization of a regular local ring at a prime ideal is a regular local ring.

**How the definition helps.** Resolve an R\_𝔭-module as an R-module within the bound, then localize at 𝔭, which keeps the resolution projective and exact and the module unchanged (our own). So R\_𝔭 has finite global dimension and is regular by Serre's criterion.

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

**Definition.** In a Noetherian local ring of dimension d, a system of parameters is d elements of the maximal ideal whose quotient has dimension zero. The ring is Cohen–Macaulay exactly when every system of parameters is a regular sequence, each element a nonzerodivisor modulo the earlier ones.

**Problem.** In a Noetherian Cohen–Macaulay local ring, c elements in the maximal ideal form a regular sequence if their quotient lowers dimension by c.

**How the definition helps.** Elements that lower the dimension by c start a system of parameters: lift a system of parameters of their quotient and append it (our own). The parameter test makes that whole system, and so its first c elements, a regular sequence (our own). The real work is the theorem that this test agrees with depth equal to dimension (our own).

**Paper or page:** [Algebra, Lemma 10.104.2.](https://stacks.math.columbia.edu/tag/02JN). It says: “Regular sequences in Cohen-Macaulay local rings are characterized by cutting out something of the correct dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Finite injective dimension of a local ring forces it to be Cohen–Macaulay

**Remember:** Gorenstein: the ring itself is its own dualizing module.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative Noetherian local ring is Gorenstein if it has finite injective dimension as a module over itself. A Noetherian ring is Gorenstein if all its localizations at primes are Gorenstein (our own).

**Problem.** Every Gorenstein ring is Cohen–Macaulay.

**How the definition helps.** Finite injective dimension makes R a dualizing complex for itself, since RHom<sub>R</sub>(R,R) ≅ R (our own). A dualizing complex in a single degree forces Cohen–Macaulay, and this applies at every prime (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “A Gorenstein ring is in particular Cohen–Macaulay.”

**Paper or page:** [Dualizing, Lemma 47.21.2.](https://stacks.math.columbia.edu/tag/0DW8), [Dualizing, Lemma 47.20.3.](https://stacks.math.columbia.edu/tag/0DW5). It says: “A Gorenstein ring is Cohen-Macaulay.”

**Sources:**

- [H. Bass, On the ubiquity of Gorenstein rings, Mathematische Zeitschrift 82 (1963) 8–28](https://doi.org/10.1007/BF01112819)

### Regular quotients preserve Gorensteinness

**Remember:** Both rings share one final quotient with a one-line socle.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Gorenstein if some regular sequence in its maximal ideal leaves a quotient of dimension zero with a one-dimensional socle. The socle is the set of elements killed by the maximal ideal, and regular means each element is a nonzerodivisor modulo the earlier ones.

**Problem.** Quotienting a Noetherian local ring by a nonzero divisor in its maximal ideal preserves and reflects the Gorenstein property.

**How the definition helps.** With this test, both rings can use the same final quotient of dimension zero (our own). If A is Gorenstein, it is Cohen–Macaulay, so the given nonzerodivisor x starts a full regular sequence whose quotient has a one-dimensional socle, and dropping x gives a test for A/x (our own). Conversely, lift a test sequence of A/x and put x in front to get one for A (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “Equivalently, R has simple socle as an R-module.”

**Paper or page:** [Dualizing, Lemma 47.21.6.](https://stacks.math.columbia.edu/tag/0BJJ). It says: “Then A is Gorenstein if and only if B is Gorenstein.”

**Sources:**

- [Hyman Bass, On the ubiquity of Gorenstein rings (1963)](https://doi.org/10.1007/bf01112819)

### Testing every prime makes Cohen–Macaulay rings stay Cohen–Macaulay after localization

**Remember:** Every local ring of S⁻¹R is a local ring of R.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)), 13B30. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring R is Cohen–Macaulay if, for every prime 𝔭, the depth of R\_𝔭, the longest length of a regular sequence in its maximal ideal, equals its dimension (our own).

**Problem.** If R is Cohen–Macaulay and S is a multiplicatively closed subset, then S⁻¹R is Cohen–Macaulay.

**How the definition helps.** The condition is tested prime by prime, and every local ring of S⁻¹R is already a local ring of R (our own). Each prime of S⁻¹R comes from a prime 𝔭 of R disjoint from S, with the same local ring R\_𝔭 (our own).

**Paper or page:** [Homological Local, Theorem 4.18](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Lemma 10.104.5](https://stacks.math.columbia.edu/tag/00NB). It says: “That is, its localizations at any prime—or, though we haven't proved yet, at any maximal ideal—are.”

**Sources:**

- [The Stacks Project, Lemma 10.104.5, Tag 00NB](https://stacks.math.columbia.edu/tag/00NB)

### The socle detects graded quotients

**Remember:** A nonzero graded kernel must hit the socle line.

*Rules out counterexamples.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)). arXiv math.AC. Level 3: graduate.

**Definition.** For a finite-dimensional commutative graded algebra over a field, with the field in degree zero and nothing in negative degrees, the socle is the set of elements killed by all elements of positive degree. The algebra is Gorenstein when its socle is one-dimensional, and then the socle is exactly its top nonzero degree (our own).

**Problem.** Take a surjective degree-preserving map between two such Gorenstein algebras over the same field. If their highest nonzero degrees agree, the map is an isomorphism.

**How the definition helps.** A nonzero graded kernel contains its own top-degree part, which is killed by all positive degrees, so the kernel meets the socle (our own). In a Gorenstein source the socle is the whole top degree, which the surjection must keep, so the kernel is zero (our own). With a two-dimensional socle, k\[x,y\]/(x²,xy,y²) maps onto k\[y\]/(y²) with the same top degree (our own).

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “R is not Gorenstein because the socle has dimension 2 (not 1) as a k-vector space, spanned by x and y.”

**Paper or page:** [Complete intersection algebras with binomial Macaulay dual generator](https://arxiv.org/abs/2503.13920v1). It says: “Any surjective degree-preserving homomorphism π : A → B between Artinian Gorenstein K-algebras with the same socle degree is an isomorphism.”

**Sources:**

- [Roberta Di Gennaro and Rosa M. Miró-Roig, Complete Intersection Algebras with Binomial Macaulay Dual Generator (2025)](https://doi.org/10.1007/s00009-025-02946-8)

### Regular parameters reduce multiplicity to length

**Remember:** Regular parameters leave only degree zero in the Koszul sum.

*Rules out counterexamples.* MSC 13H15 (Multiplicity theory and related topics). arXiv math.AC. Level 3: graduate.

**Definition.** In a d-dimensional Noetherian local ring, a system of parameters is d elements generating an ideal whose radical is the maximal ideal. The ring is Cohen–Macaulay when every system of parameters is a regular sequence (our own).

**Problem.** In a Noetherian Cohen–Macaulay local ring R, the multiplicity of a parameter ideal I equals the length of R/I.

**How the definition helps.** Serre's formula writes the multiplicity as an alternating sum of lengths of Koszul homology, and for a regular sequence only H₀ = R/I survives (our own). Without Cohen–Macaulay, take k\[\[t,u,v\]\]/(u²,uv,v²,tu,tv) with I = (t), where R/I has length 3 (our own). The lengths of R/(tⁿ) are n + 2, so the multiplicity is 1 (our own).

**Paper or page:** [Intersection, Theorem 43.15.5.](https://stacks.math.columbia.edu/tag/0AZZ). It says: “Then $$ e<sub>I</sub>(M, r) = \\sum (-1)<sup>i\\text{length}<sub>A</sub></sup> H<sub>i</sub>(K\_\\bullet(f<sub>1</sub>, \\ldots, f<sub>r</sub>) \\otimes<sub>A</sub> M) $$”

**Sources:** none listed. No primary source with a working link was found.

### Serre's Tor formula fixes intersection multiplicity where length overcounts

**Remember:** Higher Tor terms correct the overcount of the naive length.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13H15 (Multiplicity theory and related topics), 13D07, 14C17. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** At a component of a proper intersection, let A be the regular local ring at its generic point and I, J the two defining ideals. Serre's intersection multiplicity is ∑ᵢ (−1)ⁱ length<sub>A</sub> Torᵢᴬ(A/I,A/J), so the higher Tor terms correct the plain length of A/(I+J) (our own).

**Problem.** With Serre's multiplicities, Bézout's theorem holds for all properly meeting subvarieties of projective space: the product of degrees is the sum over components of multiplicity times degree. With the plain length instead, this can fail when a subvariety is not Cohen–Macaulay.

**How the definition helps.** The Tor sum is the local coefficient of the intersection product, so Bézout follows from intersection theory (our own). The union of the planes (x,y) and (z,w), met with the plane x=z, y=w, has plain length three at the origin (our own). Additivity gives one from each plane, so the Tor sum is two, matching the degree product 2 · 1 (our own).

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number). It says: “When V and W can be moved into a transverse position, this homological formula produces the expected answer.”

**Sources:**

- [J.-P. Serre, Algèbre locale, multiplicités, Lecture Notes in Mathematics 11, Springer, 1965 (third edition 1975).](https://doi.org/10.1007/978-3-540-37123-6)

### Serre's Tor sum corrects intersection multiplicity where length overcounts

**Remember:** Higher Tors correct the length when one variety is not Cohen–Macaulay.

*Rules out counterexamples.* MSC 13H15 (Multiplicity theory and related topics), 13D07, 14C17. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** For finite modules M, N over a regular local ring A with M ⊗ N of finite length, Serre's multiplicity is χ(M,N) = ∑ᵢ (−1)ⁱ length<sub>A</sub> Torᵢᴬ(M,N). The sum is finite because Tor vanishes above dim A (our own).

**Problem.** Serre's multiplicity is additive on short exact sequences. For Cohen–Macaulay quotients A/I and A/J whose dimensions add to dim A, χ(A/I,A/J) is the length of A/(I + J).

**How the definition helps.** Additivity follows from the long exact Tor sequence, since alternating lengths cancel (our own). For such Cohen–Macaulay quotients the Tor vanishing theorem for proper intersections kills every positive Tor, leaving A/(I+J) (our own). For the union of two coordinate planes against the diagonal plane in four-space, the plain length is three while χ is two (our own).

**Wikipedia:** [Intersection number](https://en.wikipedia.org/wiki/Intersection_number), [Serre's multiplicity conjectures](https://en.wikipedia.org/wiki/Serre%27s_multiplicity_conjectures). It says: “When V and W can be moved into a transverse position, this homological formula produces the expected answer.”

**Sources:**

- [J.-P. Serre, Local Algebra, Springer Monographs in Mathematics, Springer, 2000 (translation of Algèbre locale, multiplicités, 1965)](https://doi.org/10.1007/978-3-662-04203-8)

### Early local rings had to be Noetherian, which keeps Krull's intersection theorem

**Remember:** The historical local ring had one maximal ideal and finitely generated ideals.

*Rules out counterexamples. Confidence: medium.* MSC 13H99 (Local rings and semilocal rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** In the historical convention, a commutative local ring has exactly one maximal ideal and every ideal is finitely generated.

**Problem.** Krull's intersection theorem: in a commutative Noetherian local ring with maximal ideal m, the intersection of all powers mⁿ is 0. So the powers of m separate the elements of the ring, and the ring embeds in its completion.

**How the definition helps.** For N = ⋂ₙ 𝔪ⁿ, Artin–Rees gives N = 𝔪N, and N is finitely generated, so Nakayama gives N = 0, which is injectivity of the completion map (our own). Without Noetherianity this fails: among smooth real germs at 0, exp(−1/x²) is nonzero yet divisible by every xⁿ, so it lies in every power of the maximal ideal (our own).

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “Before about 1960 many authors required that a local ring be (left and right) Noetherian, and (possibly non-Noetherian) local rings were called quasi-local rings.”

**Sources:**

- [W. Krull, Dimensionstheorie in Stellenringen, Journal für die reine und angewandte Mathematik 179 (1938) 204](https://doi.org/10.1515/crll.1938.179.204)

### Excluding the zero ring makes local rings those with one closed point

**Remember:** Local means exactly one closed point, and the empty spectrum has none.

*Rules out counterexamples.* MSC 13H99 (Local rings and semilocal rings), 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A local ring is a ring with exactly one maximal ideal. The zero ring, where 0 = 1, has no maximal ideal, so it is not local.

**Problem.** A ring is local exactly when its spectrum has exactly one closed point. It is also local exactly when it is not the zero ring and, for each x, x or 1 − x is a unit.

**How the definition helps.** Closed points of the spectrum are the maximal ideals, and the zero ring has none, so it must be excluded from both tests (our own). With one maximal ideal, x and 1 − x cannot both lie in it, since their sum is 1 (our own). Two distinct maximal ideals sum to the whole ring, giving a nonunit x in one with 1 − x a nonunit in the other (our own).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.18.3](https://stacks.math.columbia.edu/tag/00E9). It says: “The following are equivalent: (1) R is a local ring, (2) Spec(R) has exactly one closed point, … (4) R is not the zero ring and for every x ∈ R either x or 1 − x is invertible”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 00E9 (Algebra, Lemma 10.18.3)](https://stacks.math.columbia.edu/tag/00E9)

### Residue sequences show p-adic integers modulo pⁿ are integers modulo pⁿ

**Remember:** Reduction modulo a power is just reading that term.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 11S99. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** For a prime p, a p-adic integer is a sequence of residues xₖ ∈ ℤ/pᵏℤ for k ≥ 1. Each xₖ₊₁ must reduce to xₖ modulo pᵏ, and ring operations act coordinatewise (our own).

**Problem.** Write ℤₚ for the ring of p-adic integers. For each n ≥ 1, the quotient ℤₚ/pⁿℤₚ is the ring ℤ/pⁿℤ of integers modulo pⁿ.

**How the definition helps.** Reduction modulo pⁿ reads the n-th term xₙ, and it is onto because any integer gives a compatible sequence (our own). If xₙ = 0, each xₙ₊ₖ is pⁿ times a well-defined residue modulo pᵏ, and these residues form a p-adic integer y with x = pⁿy (our own). So the kernel of reading xₙ is pⁿℤₚ (our own).

**nLab:** [p-adic integer](https://ncatlab.org/nlab/show/p-adic+integer). It says: “More abstractly, it is the limit lim ℤ/(pⁿ), in the category of (unital) rings”

**Sources:** none listed. No primary source with a working link was found.

### Henselian as finite algebras split makes finite local extensions henselian

**Remember:** Henselian means every finite algebra splits as a product of local rings.

*True by definition.* MSC 13J15 (Henselian rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring R is henselian if every commutative R-algebra that is finite as an R-module is a finite product of local rings (our own).

**Problem.** If R is a henselian local ring and S is a finite R-algebra that is a local ring, then S is henselian.

**How the definition helps.** A finite algebra over S is also finite over R, so it is a finite product of local rings (our own). The work moves to Stacks Lemma 10.153.3, which proves that the splitting test agrees with root lifting.

**Paper or page:** [Lemma 10.153.4.](https://stacks.math.columbia.edu/tag/04GH). It says: “If R → S is a finite ring map and S is local, then S is a henselian local ring and R → S is a (finite) local ring map.”

**Sources:** none listed. No primary source with a working link was found.

### Defining differentials through derivations gives their transitivity sequence at once

**Remember:** To vanish on the middle ring, kill all differentials coming from it.

*True by definition. Confidence: medium.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** The module Ω(C/B) is the target of the universal B-derivation of C: C-linear maps Ω(C/B) → N are the same as B-derivations C → N, additive maps that vanish on B and obey the product rule (our own).

**Problem.** Let A → B → C be ring maps. Then Ω(C/B) is Ω(C/A) divided by the C-submodule generated by the differentials db of elements b of B.

**How the definition helps.** For every C-module N, maps from the stated quotient to N correspond to A-derivations vanishing on the image of B (our own). Those are exactly the B-derivations, so the quotient has the universal property of Ω(C/B) (our own).

**Paper or page:** [Algebra, Lemma 10.131.7.](https://stacks.math.columbia.edu/tag/00RS). It says: “Let A → B → C be ring maps. Then there is a canonical exact sequence C ⊗ʙ Ω(B/A) → Ω(C/A) → Ω(C/B) → 0 of C-modules.”

**Sources:** none listed. No primary source with a working link was found.

### Defining differentials through derivations makes them commute with base change

**Remember:** A derivation on the changed algebra is fixed by its values on the original.

*True by definition.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** The module Ω(S/R) is the target of the universal R-derivation of S: S-linear maps Ω(S/R) → N are the same as R-derivations S → N, additive maps vanishing on R with D(ab) = a·D(b) + b·D(a) (our own).

**Problem.** Let R → R′ and R → S be ring maps, and let S′ be the tensor product S ⊗ R′ over R. Then Ω(S/R) ⊗ R′ is isomorphic to Ω(S′/R′).

**How the definition helps.** For each S′-module N, restriction identifies R′-derivations S′ → N with R-derivations S → N (our own). Its inverse sends D to the derivation defined by s ⊗ r′ ↦ r′D(s) (our own). By tensor–Hom adjunction both proposed modules therefore represent the same functor (our own).

**Paper or page:** [Algebra, Lemma 10.131.12.](https://stacks.math.columbia.edu/tag/00RV), [Algebra, Lemma 10.131.13.](https://stacks.math.columbia.edu/tag/00RW). It says: “Then the canonical map defined above induces an isomorphism Ω(S/R) ⊗ᵣ R′ = Ω(S′/R′).”

**Sources:** none listed. No primary source with a working link was found.

### Kähler C∞-differentials of smooth functions are exactly the smooth 1-forms

**Remember:** Demand the chain rule for every smooth function, not only polynomials.

*Rules out counterexamples.* MSC 13N05 (Modules of differentials), 58A10, 58A40. arXiv math.DG, math.AC. Level 3: graduate.

**Definition.** A smooth derivation D of a C∞-ring A into an A-module obeys the chain rule for every smooth function: D(f(a)) = ∑ᵢ(∂ᵢf)(a)D(aᵢ) for all smooth f ∶ ℝⁿ → ℝ and a ∈ Aⁿ. The Kähler C∞-differentials are the target of the universal smooth derivation, through which every such D factors uniquely by an A-linear map (our own).

**Problem.** For a smooth manifold M, the Kähler C∞-differentials of C∞(M) identify canonically with the smooth sections of its cotangent bundle (Dubuc and Kock, our own).

**How the definition helps.** The smooth chain rule forces D(exp x) = exp(x)D(x), an identity ordinary algebraic derivations can violate (our own). In Euclidean coordinates the rule expresses every differential in terms of the coordinate differentials (our own). The Dubuc–Kock theorem identifies the universal module globally with smooth one-forms (our own).

**nLab:** [Kähler C<sup>∞</sup>-differentials of smooth functions are differential 1-forms](https://ncatlab.org/nlab/show/K%C3%A4hler+C%5E%E2%88%9E-differentials+of+smooth+functions+are+differential+1-forms), [Kähler differential](https://ncatlab.org/nlab/show/K%C3%A4hler+differential). It says: “However, this is not a defect in the conceptual idea itself, but merely a failure to use the correct formalism.”

**Sources:**

- [E. J. Dubuc, A. Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### Small separating invariant sets force large components in the separating variety

**Remember:** m separating invariants give m equations for the separating variety.

*Makes the theorem clean to state or prove.* MSC 13A50 (Actions of groups on commutative rings; invariant theory), 14L24. arXiv math.RT, math.AC. Level 4: research.

**Definition.** For a group G acting linearly on a vector space V over an algebraically closed field, the separating variety is the set of pairs in V × V that no invariant polynomial tells apart. A set of invariants is separating if it tells apart every pair that some invariant tells apart, so its m members f cut out the separating variety by the equations f(u) = f(v) (our own).

**Problem.** If m invariants form a separating set, every irreducible component of the separating variety has dimension at least 2 dim V − m. For simultaneous conjugation on n-tuples of p × p matrices, this gives m ≥ (n − 1)p² + p when n ≥ 3 (our own).

**How the definition helps.** By Krull's height theorem, every component of a set cut out by m equations in V × V has codimension at most m (our own). For simultaneous matrix conjugation, the paper's bound on the dimension of a component then gives the stated inequality (our own).

**Paper or page:** [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1). It says: “Its geometry places restrictions on the existence of small separating sets, i.e. sets of invariants which distinguish the same points as the full algebra of invariants.”

**Sources:**

- [Jonathan Elmer, The separating variety for matrix invariants, arXiv:2508.13865 (2025)](https://arxiv.org/abs/2508.13865v1)

### Torsion-free λ-rings are rings with commuting Frobenius lifts

**Remember:** Torsion-free λ-ring: one Frobenius lift for each prime, all commuting.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A99 (General commutative ring theory), 13A35, 19A99. arXiv math.AC, math.KT. Level 4: research.

**Definition.** On a torsion-free commutative ring, a Frobenius lift at a prime p is a ring endomorphism ψₚ with ψₚ(x) ≡ xᵖ modulo p for every x. The structure is one such lift for each prime, with ψₚψ<sub>q</sub> = ψ<sub>q</sub>ψₚ for all primes p, q (our own).

**Problem.** On a torsion-free ring, a λ-ring structure is the same as a family of commuting Frobenius lifts ψₚ, one for each prime p (Wilkerson). A ring map between torsion-free λ-rings is a λ-map exactly when it commutes with the ψₚ.

**How the definition helps.** Wilkerson's theorem builds unique λ-operations from the commuting lifts, which become their Adams operations (our own). Adams operations are integer polynomials in the λ-operations, and Newton's identities give n·λⁿ back from Adams operations and lower λ-operations (our own). Torsion-freeness lets one cancel n, so a map commuting with the ψₚ preserves every λⁿ (our own).

**nLab:** [Lambda-ring](https://ncatlab.org/nlab/show/Lambda-ring). It says: “Equivalently, it turns out (Wilkerson 82) that a λ-ring is a commutative ring equipped with an endomorphism that lifts the Frobenius endomorphism after reduction mod p at each prime number p.”

**Sources:**

- [C. Wilkerson, Lambda-rings, binomial domains, and vector bundles over CP(∞), Communications in Algebra 10 (1982) 311–328](https://doi.org/10.1080/00927878208822717)
- [J. Borger, The basic geometry of Witt vectors, I: The affine case, 2008, arXiv:0801.1691](https://arxiv.org/abs/0801.1691)
- [J. Borger, Lambda-rings and the field with one element, 2009, arXiv:0906.3146](https://arxiv.org/abs/0906.3146)

### Flatness makes weakly étale maps compose and survive base change

**Remember:** Weakly étale: the map and its multiplication map are both flat.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13C11. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A ring map A → B is flat if tensoring with B over A preserves injections of modules. It is weakly étale if both A → B and the multiplication map B ⊗ₐ B → B are flat.

**Problem.** Weakly étale ring maps remain weakly étale after composition or base change, which replaces A by A′ and B by B ⊗ₐ A′.

**How the definition helps.** Both tests are flatness of maps, so they pass through base change and composition by the usual rules for flat maps. For base change, both maps are the original ones tensored with A′ over A. For A → B → C, multiplication C ⊗ₐ C → C factors through C ⊗ᵦ C, by a base change of B ⊗ₐ B → B and then a flat map (our own account).

**Paper or page:** [More Algebra, Lemma 15.105.7](https://stacks.math.columbia.edu/tag/092H), [More Algebra, Lemma 15.105.9](https://stacks.math.columbia.edu/tag/092J), [More Algebra, Lemma 15.105.16](https://stacks.math.columbia.edu/tag/092Q). It says: “If A → B is weakly étale, then A′ → B′ is weakly étale.”

**Sources:**

- [The Stacks Project, Lemma 15.105.7, Tag 092H](https://stacks.math.columbia.edu/tag/092H)
- [The Stacks Project, Lemma 15.105.9, Tag 092J](https://stacks.math.columbia.edu/tag/092J)
- [The Stacks Project, Lemma 15.105.16, Tag 092Q](https://stacks.math.columbia.edu/tag/092Q)
- [B. Bhatt and P. Scholze, The pro-étale topology for schemes, Astérisque 369](https://doi.org/10.24033/ast.960)

### Height-one intersections preserve reflexivity

**Remember:** Recover a reflexive module from its height-one pieces.

*True by definition. Confidence: medium.* MSC 13C13 (Other special types of modules and ideals in commutative rings). arXiv math.AC. Level 4: research.

**Definition.** Over a Noetherian normal domain R with fraction field K, a finite torsion-free module M is reflexive exactly when it equals, inside M ⊗ K, the intersection of its localizations at height-one primes.

**Problem.** Let two finite reflexive modules span the same vector space over the fraction field of a Noetherian normal domain. Their intersection in that space is reflexive.

**How the definition helps.** Localization preserves finite intersections, so the intersection of two modules that pass the test also equals the intersection of its height-one localizations (our own). It is finitely generated because R is Noetherian, and torsion-free as a submodule of a vector space (our own). The cited criterion identifies this test with the usual double dual definition (our own).

**Paper or page:** [More Algebra, Lemma 15.23.18.](https://stacks.math.columbia.edu/tag/0AVB). It says: “$M$ is torsion free and $M = \\bigcap\_{\\text{height}(\\mathfrak p) = 1} M<sub>\\mathfrak p</sub>$ where the intersection happens in $M<sub>K</sub> = M \\otimes<sub>R</sub> K$.”

**Sources:** none listed. No primary source with a working link was found.

### Cohen–Macaulay complexes give new proofs of homological conjectures

**Remember:** Full depth, finite homology, and degree zero survives reduction to k.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules), 13D02, 13D22. arXiv math.AC. Level 4: research.

**Definition.** A maximal Cohen–Macaulay complex over a Noetherian local ring (R, 𝔪, k) is a complex M with bounded, finitely generated homology and depth<sub>R</sub> M = dim R. Its degree-zero part must survive reduction to k, that is, the map H₀(M) → H₀(k ⊗ᴸ<sub>R</sub> M) is nonzero.

**Problem.** If R has a maximal Cohen–Macaulay complex, then the new intersection theorem holds for R. That is, a finite free complex F with H₀(F) ≠ 0 and finite-length homology has length at least dim R.

**How the definition helps.** Such a complex lets the maximal-depth intersection theorem apply to F (our own). Its depth dim R then bounds the length of F below by dim R (our own).

**Paper or page:** [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1), [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1), [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1). It says: “Various constructions of maximal Cohen-Macaulay complexes are described, and their existence is applied to give new proofs of some of the homological conjectures, and also of certain results in birational geometry.”

**Sources:**

- [Srikanth B. Iyengar, Linquan Ma, Karl Schwede, Mark E. Walker, Maximal Cohen-Macaulay complexes and their uses: A partial survey, arXiv:2106.08173 (2021)](https://arxiv.org/abs/2106.08173v1)

### One-degree duality preserves Cohen–Macaulay modules

**Remember:** Cohen–Macaulay means the dual lives in exactly one degree.

*True by definition.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 4: research.

**Definition.** Let ω be a normalized dualizing complex over a Noetherian local ring A. A finite A-module M of dimension d is Cohen–Macaulay exactly when its dual RHom(M, ω) lives in one degree, that is, Extⁱ(M, ω) ≠ 0 only for i = −d.

**Problem.** The functor M ↦ Ext⁻ᵈ(M, ω) sends finite Cohen–Macaulay modules of dimension d to the same class and reverses maps. Applying it twice gives back M naturally, so it is an anti-equivalence of that class.

**How the definition helps.** Concentration in one degree makes RHom(M, ω) the single module Ext⁻ᵈ(M, ω) in degree −d, so double duality returns M (our own). Dualizing that module gives M in the same single degree −d, so by the criterion it is Cohen–Macaulay of dimension d too (our own).

**Paper or page:** [Dualizing, Lemma 47.16.7.](https://stacks.math.columbia.edu/tag/0B5A). It says: “Then $M \\mapsto \\mathop{\\mathrm{Ext}}\\nolimits<sup>-d</sup><sub>A</sub>(M, \\omega<sub>A</sub><sup>\\bullet</sup>)$ defines an anti-auto-equivalence of $CM<sub>d</sub>$.”

**Sources:** none listed. No primary source with a working link was found.

### Sequentially Cohen–Macaulay modules are closed under direct sums

**Remember:** Cohen–Macaulay layers, sorted by strictly increasing dimension.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 4: research.

**Definition.** A finite module M over a Noetherian local ring is sequentially Cohen–Macaulay if it has a finite filtration 0 = M₀ ⊂ M₁ ⊂ … ⊂ M<sub>r</sub> = M whose successive quotients are nonzero Cohen–Macaulay modules of strictly increasing dimension.

**Problem.** Let M and N be finite modules over a Cohen–Macaulay local ring with a canonical module. Then M ⊕ N is sequentially Cohen–Macaulay exactly when both summands are. Yet nonzero Cohen–Macaulay summands of different dimensions give a sum that is not Cohen–Macaulay.

**How the definition helps.** Merging the two filtrations by dimension gives a filtration of M ⊕ N whose layers are again Cohen–Macaulay (our own). For the converse, the canonical-module Ext criterion tests each dimension separately and passes to direct summands (our own). Nonzero Cohen–Macaulay summands of dimensions a &lt; b give depth a but dimension b, so their sum is not Cohen–Macaulay (our own).

**Paper or page:** [On the notion of sequentially Cohen-Macaulay modules](https://arxiv.org/abs/2304.06609v1). It says: “Then, M and N are sequentially Cohen-Macaulay if and only if M ⊕ N is sequentially Cohen-Macaulay.”

**Sources:**

- [Giulio Caviglia, Alessandro De Stefani, Enrico Sbarra, Francesco Strazzanti, On the notion of sequentially Cohen-Macaulay modules, arXiv:2304.06609 (2023), Research in the Mathematical Sciences 9 (2022), Article 40](https://arxiv.org/abs/2304.06609v1)

### Dual cosupport joins exact sequences

**Remember:** Cosupport is the support of the Matlis dual.

*True by definition.* MSC 13C60 (Module categories and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** Let E be the injective hull of the residue field of a Noetherian local ring R. The cosupport of an R-module M is the support of its Matlis dual Hom<sub>R</sub>(M,E), the primes p with Hom<sub>R</sub>(M,E)<sub>p</sub> ≠ 0.

**Problem.** In a short exact sequence, the cosupport of the middle module is the union of the cosupports of the end modules.

**How the definition helps.** Since E is injective, Hom<sub>R</sub>(−,E) turns the short exact sequence into a short exact sequence of duals (our own). Support is the union of the supports of the end terms in a short exact sequence, so the cosupports join in the same way (our own).

**Paper or page:** [On Artinianness of Formal Local Cohomology, Colocalization and Coassociated Primes](https://arxiv.org/abs/1011.4141v3). It says: “If 0 → M′ → M → M″ → 0 is exact, then CoSupp M = CoSupp M′ ∪ CoSupp M″.”

**Sources:**

- [Majid Eghbali, On Artinianness of Formal Local Cohomology, Colocalization and Coassociated Primes (2013)](https://doi.org/10.7146/math.scand.a-15478)

### Matrix factorizations make resolutions over hypersurfaces periodic of period two

**Remember:** Two matrices whose products are f, alternating forever modulo f.

*Makes the theorem clean to state or prove.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C14. arXiv math.AC. Level 4: research.

**Definition.** Let A be a regular local ring with maximal ideal 𝔪, and 0 ≠ f ∈ 𝔪. A matrix factorization of f is a pair of square matrices φ, ψ over A with φψ = ψφ = fI, so that modulo f the sequence φ, ψ, φ, ψ, … is a complex; it is reduced if all entries lie in 𝔪.

**Problem.** Cokernels identify equivalence classes of reduced factorizations with isomorphism classes of maximal Cohen–Macaulay A/(f)-modules without nonzero free summands. Every finite A/(f)-module has an eventually two-periodic minimal free resolution.

**How the definition helps.** Modulo f the alternating sequence of φ and ψ is exact, so the cokernel of φ has the periodic resolution of Eisenbud's theorem (our own). Conversely, Auslander–Buchsbaum gives a maximal Cohen–Macaulay module a square A-free presentation φ, and since f kills its cokernel, φ has a complementary factor ψ (our own). High syzygies of any finite module are maximal Cohen–Macaulay, so every minimal resolution becomes periodic (our own).

**Paper or page:** [ADE Classification of Hypersurface Singularities over Local Rings](https://arxiv.org/abs/2509.15396v1). It says: “Let (A,m) be a be a regular local ring and let r ∈ A be a non unit. Then there there exists a bijection between 𝓜𝓒𝓜(A/⟨r⟩) and equivalence classes of reduced matrix factorizations of r.”

**Sources:**

- [D. Eisenbud, Homological algebra on a complete intersection, with an application to group representations, Transactions of the American Mathematical Society 260 (1980), 35–64.](https://doi.org/10.1090/s0002-9947-1980-0570778-7)

### Weak proregularity makes derived completion agree with completion

**Remember:** Positive Koszul homology dies along the tower of powers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** An ideal 𝔞 is weakly proregular if it has generators a₁,…,aᵣ whose positive Koszul homology dies along powers. For all i, n ≥ 1 there is m ≥ n such that the map Hᵢ(K(a₁ᵐ,…,aᵣᵐ)) → Hᵢ(K(a₁ⁿ,…,aᵣⁿ)) is zero.

**Problem.** Let 𝔞 be a weakly proregular ideal. For every complex P of 𝔞-adically flat modules, the map from the derived completion LΛ𝔞(P) to the 𝔞-adic completion Λ𝔞(P) is an isomorphism.

**How the definition helps.** Weak proregularity is the hypothesis under which the derived completion comparison theorem covers unbounded complexes of 𝔞-adically flat modules, so no bounded-above condition is needed (our own).

**Paper or page:** [Derived Complete Complexes at Weakly Proregular Ideals](https://arxiv.org/abs/2309.01687v4). It says: “Assume either of these two conditions hold: either the complex P is bounded above, or the ideal 𝔞 is weakly proregular. Then the canonical morphism … LΛ𝔞(P) → Λ𝔞(P) in D(A) is an isomorphism.”

**Sources:**

- [Amnon Yekutieli, Derived Complete Complexes at Weakly Proregular Ideals, arXiv:2309.01687 (2023)](https://arxiv.org/abs/2309.01687v4)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Weak proregularity makes Čech cohomology compute local cohomology

**Remember:** Positive Koszul homology dies along the tower of powers.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A finite sequence a₁,…,aᵣ in a commutative ring is weakly proregular if its positive Koszul homology dies along powers. For all i, n ≥ 1 some m ≥ n makes the map Hᵢ(K(a₁ᵐ,…,aᵣᵐ)) → Hᵢ(K(a₁ⁿ,…,aᵣⁿ)) zero.

**Problem.** For a weakly proregular sequence in any commutative ring, local cohomology is naturally isomorphic to Čech cohomology. Every sequence in a Noetherian ring is weakly proregular, so this includes the classical case.

**How the definition helps.** By Proposition 4.4, dying Koszul homology makes positive Čech cohomology effaceable, so Čech cohomology is a universal δ-functor (our own). In degree zero both theories give torsion by powers of the ideal, so they agree in all degrees (our own).

**Paper or page:** [A note on weakly proregular sequences and local cohomology](https://arxiv.org/abs/2105.07652v2). It says: “In this note, we give an elementary proof of the result given by Schenzel that there are functorial isomorphisms between local cohomology groups and Čech cohomology groups, by using weakly proregular sequences.”

**Sources:**

- [Ryoya Ando, A note on weakly proregular sequences and local cohomology, arXiv:2105.07652 (2021), Moroccan J. Algebra Geom. Appl. 1 (2022), 98-107](https://arxiv.org/abs/2105.07652v2)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Working in the cone of Betti diagrams proves the multiplicity bounds

**Remember:** Betti tables are positive mixtures of pure ones.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13D40. arXiv math.AC. Level 4: research.

**Definition.** The Betti diagram of a finite graded module records βᵢⱼ, the number of degree-j generators in step i of its minimal free resolution. The diagram of a Cohen–Macaulay module is a positive rational combination of pure diagrams, those with a single degree in each nonzero step.

**Problem.** Let S/I be a graded Cohen–Macaulay quotient of S = k\[x₁,…,xₙ\] of codimension c, with least and greatest shifts tᵢ and Tᵢ at step i. Its multiplicity lies between (∏ᶜᵢ₌₁ tᵢ)/c! and (∏ᶜᵢ₌₁ Tᵢ)/c!.

**How the definition helps.** Multiplicity and β₀ = 1 are linear in the diagram, so the multiplicity of S/I is a weighted average of normalized pure multiplicities (our own). The pure diagrams that occur have shifts between tᵢ and Tᵢ, and Herzog–Kühl gives each normalized pure multiplicity as the product of its shifts over c! (our own).

**Paper or page:** [Betti Cones of Stanley-Reisner Ideals](https://arxiv.org/abs/2401.05962v1), [Lim Ulrich sequences and Boij-Söderberg cones](https://arxiv.org/abs/2209.03498v2). It says: “There exist positive rational numbers qᵢ and a chain of decreasing sequences c¹ &lt; ⋯ &lt; cʳ in ℤʰ⁺¹ such that β(M) = q₁ π(c¹)+⋯ + qᵣ π(cʳ).”

**Sources:**

- [D. Eisenbud and F.-O. Schreyer, Betti numbers of graded modules and cohomology of vector bundles, Journal of the American Mathematical Society 22 (2009), 859–888.](https://doi.org/10.1090/s0894-0347-08-00620-6)

### Complete intersection dimension gives Serre's criterion for complete intersections

**Remember:** Allow regular-sequence quotients, and complete intersections behave like regular rings.

*Makes the theorem clean to state or prove.* MSC 13D05 (Homological dimension and commutative rings), 13H10. arXiv math.AC. Level 4: research.

**Definition.** A quasi-deformation of a Noetherian local ring R is a pair of local maps R → R′ ← Q, where R → R′ is flat and Q → R′ is onto with kernel generated by a regular sequence. The complete intersection dimension of a finite module M is the infimum of pd<sub>Q</sub>(M ⊗<sub>R</sub> R′) − pd<sub>Q</sub>(R′) over all quasi-deformations.

**Problem.** A Noetherian local ring R is a complete intersection exactly when its residue field has finite complete intersection dimension (Avramov, Gasharov and Peeva). Then every finitely generated module has finite complete intersection dimension. Such modules satisfy the Auslander–Buchsbaum formula with this dimension.

**How the definition helps.** A complete intersection is its own witness: take R′ to be its completion and Q a regular local ring that maps onto R′ with kernel generated by a regular sequence (our own). Over Q every module has finite projective dimension, so every module gets finite complete intersection dimension (our own). The converse and the Auslander–Buchsbaum formula are the work of Avramov, Gasharov and Peeva.

**Paper or page:** [A Ghost Lemma for Commutative Ring Homomorphisms via André-Quillen Homology](https://arxiv.org/abs/2507.13988v1). It says: “Let (R,k) be a local ring. Then R is a complete intersection if and only if CI-dim<sub>R</sub>(k) &lt; ∞.”

**Sources:**

- [L. L. Avramov, V. N. Gasharov and I. V. Peeva, Complete intersection dimension, Publications Mathématiques de l'IHÉS 86 (1997), 67–114.](https://doi.org/10.1007/bf02698901)

### Gorenstein dimension extends Auslander–Buchsbaum and characterizes Gorenstein rings

**Remember:** Totally reflexive modules look free when tested against R.

*Makes the theorem clean to state or prove.* MSC 13D05 (Homological dimension and commutative rings), 13H10. arXiv math.AC. Level 4: research.

**Definition.** Over a Noetherian local ring R, a finite module G is totally reflexive if it looks free when tested against R: G → G\*\* is an isomorphism and Extⁱ(G,R) = Extⁱ(G\*,R) = 0 for i &gt; 0, with G\* = Hom(G,R). The Gorenstein dimension of M is the shortest length of a resolution of M by such modules, or ∞.

**Problem.** For a nonzero finite module M of finite Gorenstein dimension, its Gorenstein dimension plus depth M equals depth R. The ring R is Gorenstein exactly when every finite R-module has finite Gorenstein dimension.

**How the definition helps.** A nonzero totally reflexive module has depth equal to depth R, which is the dimension-zero case of the formula (our own). The formula then follows along a resolution as in Auslander–Buchsbaum, and the Auslander–Bridger characterization gives the Gorenstein criterion (our own).

**Paper or page:** [On a relative dependency formula](https://arxiv.org/abs/2410.13239v1). It says: “If G-dim<sub>R</sub>(M) &lt; ∞, then G-dim<sub>R</sub>(M) + depth(M) = depth(R). This equality is known as Auslander-Bridger formula.”

**Sources:**

- [M. Auslander and M. Bridger, Stable module theory, Memoirs of the American Mathematical Society 94 (1969).](https://doi.org/10.1090/memo/0094)

### A one-module dualizing complex forces the ring to be Cohen–Macaulay

**Remember:** A dualizing complex that lives in a single degree.

*Makes the theorem clean to state or prove.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13C14, 13D45. arXiv math.AC. Level 4: research.

**Definition.** A dualizing module over a Noetherian ring A is a finite module D that, placed in degree zero, is a dualizing complex. So D has finite injective dimension, A → Hom<sub>A</sub>(D,D) is an isomorphism, and Extⁱ<sub>A</sub>(D,D) = 0 for every i &gt; 0.

**Problem.** If a Noetherian ring has a dualizing module, then it is Cohen–Macaulay.

**How the definition helps.** Localizing and normalizing keep a dualizing complex in a single degree at every prime (our own). Local duality makes dimension and depth the negatives of the lowest and highest degrees of a normalized dualizing complex, so they agree at every prime (our own).

**Paper or page:** [Dualizing, Lemma 47.20.3.](https://stacks.math.columbia.edu/tag/0DW5), [Dualizing, Lemma 47.20.1.](https://stacks.math.columbia.edu/tag/0AWR). It says: “Let A be a Noetherian ring. If there exists a finite A-module ω<sub>A</sub> such that ω<sub>A</sub>\[0\] is a dualizing complex, then A is Cohen-Macaulay.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)

### L-complete modules form the abelian category that I-adically complete modules cannot

**Remember:** Complete in the derived sense: L₀ changes nothing.

*Makes the theorem clean to state or prove.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13B35, 13J10. arXiv math.AC. Level 4: research.

**Definition.** For a finitely generated ideal I of R, let L₀ be the zeroth left derived functor of I-adic completion, found by completing a projective resolution termwise and taking zeroth homology. A module M is L-complete when the natural map M → L₀(M) is an isomorphism.

**Problem.** Let I be weakly proregular, for example any ideal of a Noetherian ring. Then the L-complete modules form the smallest abelian subcategory of R-modules, closed under isomorphism and with the same kernels and cokernels, that contains the I-adically complete modules.

**How the definition helps.** The condition M ≅ L₀(M) survives kernels and cokernels, while plain I-adic completeness can be lost under cokernels (our own). Salch's minimality theorem shows that the L-complete modules form the smallest such category containing the complete modules (our own).

**nLab:** [L-complete module](https://ncatlab.org/nlab/show/L-complete+module). It says: “The category of L-complete modules is the smallest abelian full subcategory of RMod which contains the I-adically complete modules.”

**Sources:**

- [J. P. C. Greenlees, J. P. May, Derived functors of I-adic completion and local homology, Journal of Algebra 149 (1992) 438–453](https://doi.org/10.1016/0021-8693(92)90026-I)
- [Andrew Salch, Approximation of subcategories by abelian subcategories, arXiv:1006.0048](https://arxiv.org/abs/1006.0048)

### Regular local rings remove the non-rigid Tor of the node

**Remember:** One vanishing positive Tor forces every later Tor to vanish.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13H05. arXiv math.AC. Level 4: research.

**Definition.** A finitely generated module M over a local ring is Tor-rigid if, for every finitely generated module N, one vanishing Torᵢ(M, N) with i ≥ 1 forces Torⱼ(M, N) = 0 for all j ≥ i.

**Problem.** Over a regular local ring, one whose maximal ideal is generated by as many elements as its dimension, every finitely generated module is Tor-rigid. Auslander proved this for unramified rings, and Lichtenbaum in general.

**How the definition helps.** The theorem is the rigidity theorem of Auslander and Lichtenbaum, and regularity rules out rings like the node R = k\[\[x,y\]\]/(xy). There R/(x) has a periodic free resolution by multiplication by x and y in turn (our own). Tensoring it with R/(y) gives Tor₁ = 0 but Tor₂ = k (our own).

**Paper or page:** [A study of the cohomological rigidity property](https://arxiv.org/abs/2009.06481). It says: “Assume R is a local complete intersection of dimension d and M ∈ mod(R) is Tor-rigid (e.g., R is regular).”

**Sources:**

- [M. Auslander, Modules over unramified regular local rings, Illinois Journal of Mathematics 5 (1961)](https://doi.org/10.1215/ijm/1255631585)
- [S. Lichtenbaum, On the vanishing of Tor in regular local rings, Illinois Journal of Mathematics 10 (1966)](https://doi.org/10.1215/ijm/1256055103)

### Asking for a dualizing complex excludes Nagata's non-catenary Noetherian rings

**Remember:** Finite, bounded, injective, and its self-maps are just the ring.

*Rules out counterexamples.* MSC 13D09 (Derived categories and commutative rings), 13D07, 13E05. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A dualizing complex D over a Noetherian ring A is a bounded complex with finitely generated cohomology and finite injective dimension, for which A → RHom<sub>A</sub>(D,D) is an isomorphism in the derived category.

**Problem.** Every Noetherian ring with a dualizing complex is universally catenary and has finite Krull dimension.

**How the definition helps.** A dualizing complex gives a dimension function on Spec A that changes by exactly one at every immediate specialization and is bounded by the degrees of D (our own). So all chains of primes are bounded and saturated chains between fixed primes have equal length (our own). Finite type algebras inherit dualizing complexes, which gives universal catenarity and rules out Nagata's examples (our own).

**Paper or page:** [Dualizing, Lemma 47.17.4.](https://stacks.math.columbia.edu/tag/0A80), [Dualizing, Lemma 47.17.3.](https://stacks.math.columbia.edu/tag/0A7Z). It says: “Let A be a Noetherian ring which has a dualizing complex. Then A is universally catenary of finite dimension.”

**Sources:**

- [R. Hartshorne, Residues and Duality, Lecture Notes in Mathematics 20, Springer, 1966](https://doi.org/10.1007/BFb0080482)

### Defining derived tensors by K-flat replacements makes them associative

**Remember:** Replace all three inputs once, then regroup the ordinary tensor product.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.KT. Level 4: research.

**Definition.** A complex K over a commutative ring is K-flat if tensoring with K keeps every acyclic complex acyclic. The derived tensor product replaces both inputs by quasi-isomorphic K-flat complexes and tensors the replacements.

**Problem.** The derived tensor product of complexes over a commutative ring is associative up to natural isomorphism.

**How the definition helps.** Tensor products of K-flat complexes are K-flat, so both groupings are ordinary tensor products of the same three replacements, which are associative (our own). The work goes into showing that K-flat replacements exist and are unique up to quasi-isomorphism (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.127.1](https://stacks.math.columbia.edu/tag/0FNQ). It says: “with tensor product given by derived tensor product and associativity and commutativity constraints”

**Sources:**

- [Nicolas Spaltenstein, Resolutions of unbounded complexes (1988)](https://www.numdam.org/item/CM_1988__65_2_121_0/)

### Defining K-flat complexes by a tensor test makes them survive base change

**Remember:** After changing rings, test on the same complexes viewed over the old ring.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G35. arXiv math.KT, math.AC. Level 4: research.

**Definition.** A complex K of R-modules is K-flat if K ⊗<sub>R</sub> M is acyclic for every acyclic complex M of R-modules.

**Problem.** For any map of commutative rings R → R′, if K is K-flat over R then K ⊗ R′ is K-flat over R′. The map R → R′ need not be flat.

**How the definition helps.** For an acyclic R′-complex M, (K ⊗<sub>R</sub> R′) ⊗<sub>R′</sub> M equals K ⊗<sub>R</sub> M, and M is still acyclic as a complex of R-modules (our own). So K-flatness over R gives acyclicity, with no flatness of R → R′ needed (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.59.3](https://stacks.math.columbia.edu/tag/06Y1). It says: “is a K-flat complex of R′-modules.”

**Sources:**

- [Nicolas Spaltenstein, Resolutions of unbounded complexes (1988)](https://www.numdam.org/item/CM_1988__65_2_121_0/)

### Décalage reduced modulo f is the Bockstein complex of cohomology

**Remember:** Divide by fⁱ in degree i, then reduce the resulting cycle modulo f.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor of A and M a complex of f-torsion-free A-modules. The décalage ηf M is the subcomplex of M\[1/f\] whose degree i part is the x ∈ fⁱMⁱ with dx ∈ fⁱ⁺¹Mⁱ⁺¹, so x = fⁱy where y is a cycle modulo f (our own).

**Problem.** For such M, ηf M ⊗ A/f is naturally quasi-isomorphic to the Bockstein complex, with terms Hⁱ(M ⊗ fⁱA/fⁱ⁺¹A) and Bockstein connecting maps as differentials. So Lη(f)M modulo f is determined by the cohomology of M/f and its Bockstein maps.

**How the definition helps.** Sending x = fⁱy to the class of y modulo f, with fⁱ kept as a twist, gives the map (our own). Dividing dy by f gives the Bockstein differential, and the décalage comparison lemma shows the map is a quasi-isomorphism (our own).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7T). It says: “There is a canonical map of complexes η<sub>fM•</sub> ⊗<sub>A</sub> A/fA → H•(M•/f) which is a quasi-isomorphism where the right hand side is the complex”

**Sources:**

- [The Stacks Project, Tag 0F7T](https://stacks.math.columbia.edu/tag/0F7T)

### Décalage replaces each cohomology group by its quotient by f-torsion

**Remember:** Require one more factor of f after applying the differential.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Let f be a nonzerodivisor in A and M an A-complex on whose terms f acts injectively. The décalage ηf M is the subcomplex of M\[1/f\] that in degree i keeps the x ∈ fⁱMⁱ with dx ∈ fⁱ⁺¹Mⁱ⁺¹, one extra factor of f after the differential.

**Problem.** For such M and every i, multiplication by fⁱ is an isomorphism from Hⁱ(M)/Hⁱ(M)\[f\] onto Hⁱ(ηf M). Here Hⁱ(M)\[f\] is the set of classes killed by f.

**How the definition helps.** Cocycles of ηf M in degree i are fⁱz for cocycles z of M, and fⁱz is a boundary in ηf M exactly when fz is a boundary in M (our own). So ηf removes the f-torsion classes from each cohomology group, an operation that ηf performs on complexes (our own).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7P). It says: “There is a canonical isomorphism fⁱ : Hⁱ(M•)/Hⁱ(M•)\[f\] → Hⁱ(η<sub>fM•</sub>) given by multiplication by fⁱ.”

**Sources:**

- [The Stacks Project, Tag 0F7P](https://stacks.math.columbia.edu/tag/0F7P)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Integral p-adic Hodge theory, Publications Mathématiques de l'IHÉS (2018)](https://doi.org/10.1007/s10240-019-00102-z)

### Generation by the unit makes every thick subcategory a tensor ideal

**Remember:** If the unit builds everything, every thick subcategory absorbs tensor products.

*Rules out counterexamples. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80, 14A30. arXiv math.AC, math.CT. Level 4: research.

**Definition.** A thick subcategory of a triangulated category is a full triangulated subcategory closed under direct summands. The tensor unit generates thickly if every object is built from the unit by shifts, cones and direct summands.

**Problem.** For a commutative noetherian ring R, the thick subcategories of perfect complexes correspond to the specialization-closed subsets of Spec R, those closed under passing to larger primes.

**How the definition helps.** For b in a thick subcategory C, the x with x ⊗ b ∈ C form a thick subcategory containing R, hence all perfect complexes, so C is a tensor ideal (our own). Thomason's classification of thick tensor ideals by specialization-closed subsets then applies (our own). On ℙ¹, where 𝒪 does not generate, the thick subcategory generated by 𝒪 is not a tensor ideal (our own).

**Paper or page:** [Classifying thick subcategories over a Koszul complex via the curved BGG correspondence](https://arxiv.org/abs/2502.13806), [Classifying thick subcategories over a Koszul complex via the curved BGG correspondence](https://arxiv.org/abs/2502.13806). It says: “In particular, if A is regular or concentrated in nonnegative degrees, then thick<sub>perf</sub>(A,0)(A)=perf(A,0).”

**Sources:**

- [Amnon Neeman, The chromatic tower for D(R), Topology 31 (1992) 519–532](https://doi.org/10.1016/0040-9383(92)90047-l)
- [R. W. Thomason, The classification of triangulated subcategories, Compositio Math. 105 (1997) 1–27](https://doi.org/10.1023/A:1017932514274)

### Requiring torsion-free terms makes décalage respect quasi-isomorphisms

**Remember:** One extra factor of f, on terms where f is injective.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 14F30. arXiv math.AG, math.AC. Level 4: research.

**Definition.** Fix a nonzerodivisor f in A and an A-complex M on whose terms f acts injectively. The décalage ηf M is the subcomplex of M\[1/f\] that in degree i keeps the x ∈ fⁱMⁱ with dx ∈ fⁱ⁺¹Mⁱ⁺¹.

**Problem.** A quasi-isomorphism between complexes of f-torsion-free modules induces a quasi-isomorphism after décalage. Every complex is quasi-isomorphic to one with free terms, so Lη(f) is a well-defined functor on the whole derived category of A.

**How the definition helps.** Multiplication by fⁱ identifies Hⁱ(ηf M) with Hⁱ(M)/Hⁱ(M)\[f\], which depends only on the cohomology of M (our own). So a quasi-isomorphism stays one after décalage, and free replacements define Lη(f) on the derived category (our own).

**Paper or page:** [More Algebra](https://stacks.math.columbia.edu/tag/0F7Q). It says: “If M• → N• is a quasi-isomorphism of complexes of f-torsion free A-modules, then the induced map η<sub>fM•</sub> → η<sub>fN•</sub> is a quasi-isomorphism too.”

**Sources:**

- [The Stacks Project, Tag 0F7Q](https://stacks.math.columbia.edu/tag/0F7Q)

### Tor amplitude survives base change

**Remember:** Test against modules over the new ring as modules over the old one.

*True by definition.* MSC 13D09 (Derived categories and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** A complex K over A has Tor amplitude in \[a, b\] if K ⊗ᴸ<sub>A</sub> N has cohomology only in degrees a to b for every A-module N.

**Problem.** Let A → B be any ring map. If a complex K has Tor amplitude in \[a, b\] over A, then K ⊗ᴸ B has Tor amplitude in \[a, b\] over B.

**How the definition helps.** For a B-module N, (K ⊗ᴸ<sub>A</sub> B) ⊗ᴸ<sub>B</sub> N equals K ⊗ᴸ<sub>A</sub> N, with N viewed as an A-module (our own). So each test over B is a test over A (our own).

**Paper or page:** [More Algebra, Lemma 15.67.13.](https://stacks.math.columbia.edu/tag/066L). It says: “Then $K<sup>\\bullet</sup> \\otimes<sub>A</sub><sup>{\\mathbf{L}}</sup> B$ as a complex of $B$-modules has tor amplitude in $\[a, b\]$.”

**Sources:** none listed. No primary source with a working link was found.

### A Frobenius isomorphism forces torsion modules over regular rings to be injective

**Remember:** Frobenius changes nothing, and powers of 𝔪 kill every element.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13A35. arXiv math.AC. Level 4: research.

**Definition.** Let A be a regular local ring of prime characteristic p with maximal ideal 𝔪 and Frobenius F(a) = aᵖ. The theorem concerns modules M with M ⊗<sub>A,F</sub> A ≅ M in which each element is killed by some power of 𝔪.

**Problem.** Every 𝔪-power torsion A-module isomorphic to its Frobenius base change is a direct sum of copies of E. Here E is the injective hull of the residue field, the smallest injective module containing it.

**How the definition helps.** These two conditions are exactly the hypotheses of the quoted injectivity lemma (our own). That lemma gives the decomposition into copies of E with no finite generation assumption on M (our own).

**Paper or page:** [Local Cohomology, Lemma 51.18.2.](https://stacks.math.columbia.edu/tag/0EC3), [Local Cohomology, Lemma 51.19.2.](https://stacks.math.columbia.edu/tag/0EC6). It says: “Let M be a 𝔪-power torsion module such that M ⊗<sub>A, F</sub> A ≅ M. Then M is isomorphic to a direct sum of copies of the injective hull E of k.”

**Sources:**

- [C. Huneke and R. Y. Sharp, Bass numbers of local cohomology modules, Transactions of the American Mathematical Society 339 (1993)](https://doi.org/10.1090/S0002-9947-1993-1124167-6)
- [E. Kunz, Characterizations of regular local rings of characteristic p, American Journal of Mathematics 91 (1969)](https://doi.org/10.2307/2373351)

### Derived local cohomology changes rings

**Remember:** Changing rings changes each localization in the same way.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** For an ideal I = (f₁, …, fᵣ) of a ring A, the augmented Čech complex is the tensor product of the two-term complexes A → A<sub>f</sub>ᵢ, built only from localizations at the fᵢ. Tensoring with it computes RΓ<sub>Z</sub>, the derived sections supported on Z = V(I).

**Problem.** Let A → B be any ring map and let Y = V(IB). Then RΓ<sub>Z</sub>(K) ⊗ᴸ B = RΓ<sub>Y</sub>(K ⊗ᴸ B), naturally in K.

**How the definition helps.** Tensoring with B sends each A<sub>f</sub>ᵢ to B<sub>f</sub>ᵢ, so the Čech complex of the fᵢ becomes the Čech complex of their images, which generate IB (our own). The comparison of this complex with derived sections needs no Noetherian hypothesis (our own).

**Paper or page:** [Dualizing, Lemma 47.9.3.](https://stacks.math.columbia.edu/tag/0ALZ). It says: “Then $$ R\\Gamma<sub>Z</sub>(K) \\otimes<sub>A</sub><sup>\\mathbf{L}</sup> B = R\\Gamma<sub>Y</sub>(K \\otimes<sub>A</sub><sup>\\mathbf{L}</sup> B) $$ functorially in $K \\in D(A)$.”

**Sources:** none listed. No primary source with a working link was found.

### Derived supports compose by intersection

**Remember:** Joining the generator lists intersects the closed supports.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** The augmented Čech complex of generators f₁, …, fᵣ of an ideal is the tensor product of the two-term complexes A → A<sub>f</sub>ᵢ. Tensoring a complex with it computes derived sections supported on the primes that contain the ideal.

**Problem.** Applying derived local cohomology for two finitely generated ideals in succession gives derived local cohomology for their sum.

**How the definition helps.** Tensoring the Čech complexes of I and J gives the Čech complex of the joined generator list, which generates I + J (our own). Since V(I + J) = V(I) ∩ V(J) and the result does not depend on the chosen generators, the composite is RΓ for the intersection (our own).

**Paper or page:** [Dualizing, Lemma 47.9.6.](https://stacks.math.columbia.edu/tag/0BJC). It says: “Then $Z \\cap Y = V(I + J)$ and $R\\Gamma<sub>Y</sub> \\circ R\\Gamma<sub>Z</sub> = R\\Gamma<sub>Y \\cap Z</sub>$”

**Sources:** none listed. No primary source with a working link was found.

### Derived torsion fixes torsion complexes

**Remember:** A right adjoint to a full inclusion fixes objects already inside.

*True by definition.* MSC 13D45 (Local cohomology and commutative rings). arXiv math.AC. Level 4: research.

**Definition.** Call a complex I-torsion if each element of its cohomology is killed by some power of I. Then RΓ<sub>I</sub>(K) → K is the universal map from an I-torsion complex to K: every map from an I-torsion complex to K factors uniquely through it.

**Problem.** Over a Noetherian ring, the map RΓ<sub>I</sub>(K) → K is an isomorphism whenever K is I-torsion.

**How the definition helps.** If K is already I-torsion, its identity map has this universal property, so RΓ<sub>I</sub>(K) → K is an isomorphism (our own). Over a Noetherian ring, deriving ordinary module torsion gives this same construction (our own).

**Paper or page:** [Dualizing, Lemma 47.10.1.](https://stacks.math.columbia.edu/tag/0955). It says: “the adjunction $R\\Gamma<sub>I</sub>(K) \\to K$ is an isomorphism for $K \\in D\_{I<sup>\\infty\\text{-torsion}}</sup>(A)$”

**Sources:** none listed. No primary source with a working link was found.

### Leibniz operators force torsion modules over power series rings to be injective

**Remember:** Each coordinate derivative acts on module elements by the product rule.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D45 (Local cohomology and commutative rings), 13N10. arXiv math.AC. Level 4: research.

**Definition.** Let A = k\[\[x₁,…,xₙ\]\] over a field of characteristic zero, with maximal ideal 𝔪. Leibniz operators on an A-module M are additive maps D₁, …, Dₙ with Dᵢ(fz) = ∂ᵢ(f)z + fDᵢ(z), so each partial derivative acts on M by the product rule.

**Problem.** Every A-module that has Leibniz operators and in which each element is killed by a power of 𝔪 is a direct sum of copies of E. Here E is the injective hull of k, the smallest injective module containing it.

**How the definition helps.** The product rule is the hypothesis of the quoted lemma, which proves injectivity directly with no resolution (our own). Local cohomology modules of A carry such operators, so each 𝔪-power torsion one is a direct sum of copies of E, an analogue of Kashiwara's theorem (our own).

**Paper or page:** [Local Cohomology, Lemma 51.18.1.](https://stacks.math.columbia.edu/tag/0EC2), [Local Cohomology, Lemma 51.19.1.](https://stacks.math.columbia.edu/tag/0EC5). It says: “Then M is isomorphic to a direct sum of copies of the injective hull E of k.”

**Sources:**

- [G. Lyubeznik, Finiteness properties of local cohomology modules (an application of D-modules to commutative algebra), Inventiones Mathematicae 113 (1993)](https://doi.org/10.1007/BF01244301)

### Normalizing the dualizing complex makes local duality hold without a shift

**Remember:** Normalize so that RHom(κ, ω) is κ; then duality needs no shift.

*Makes the theorem clean to state or prove.* MSC 13D45 (Local cohomology and commutative rings), 14B15. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A dualizing complex ω• for a Noetherian ring A is a bounded complex with finitely generated cohomology and finite injective dimension such that A → RHom(ω•, ω•) is an isomorphism. Over a local ring with residue field κ, RHom(κ, ω•) is κ shifted by some integer, and ω• is normalized when the shift is zero.

**Problem.** Let A be a Noetherian local ring with normalized dualizing complex ω•, and E an injective hull of its residue field. For every finitely generated M, Hom(Hⁱₘ(M), E) is the completion of Ext⁻ⁱ(M, ω•), where Hⁱₘ is local cohomology at m.

**How the definition helps.** Normalization makes RHom(N, ω•) equal to the Matlis dual Hom(N, E) in degree zero for every finite-length N, so it fixes every degree in local duality. Local duality for complexes then gives the formula, and for finitely generated M the derived completion is the usual completion (our own step).

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

**Definition.** For a finitely generated ideal a of A, derived torsion RΓₐ is the right adjoint of the inclusion of complexes with a-power torsion cohomology. Derived completion Λ is the left adjoint of the inclusion of derived a-complete complexes K, those with RHom<sub>A</sub>(A\[1/f\],K) = 0 for every f ∈ a.

**Problem.** RΓₐ and Λ are inverse equivalences between the a-power torsion complexes and the derived a-complete complexes. This is Greenlees–May duality.

**How the definition helps.** An adjoint to a full inclusion fixes the objects already inside, so RΓₐ fixes torsion complexes and Λ fixes complete ones (our own). The quoted identities RΓₐ(K<sup>∧</sup>) = RΓₐ(K) and (RΓₐK)<sup>∧</sup> = K<sup>∧</sup> then make both composites the identity (our own).

**Paper or page:** [Dualizing, Lemma 47.12.1.](https://stacks.math.columbia.edu/tag/0A6W), [Dualizing, Proposition 47.12.2.](https://stacks.math.columbia.edu/tag/0A6X). It says: “For an object K in D(A) we have RΓ<sub>Z</sub>(K<sup>∧</sup>) = RΓ<sub>Z</sub>(K) and (RΓ<sub>Z</sub>(K))<sup>∧</sup> = K<sup>∧</sup> in D(A).”

**Sources:**

- [J. P. C. Greenlees and J. P. May, Derived functors of I-adic completion and local homology, Journal of Algebra 149 (1992)](https://doi.org/10.1016/0021-8693(92)90026-I)
- [M. Porta, L. Shaul and A. Yekutieli, On the homology of completion and torsion, Algebras and Representation Theory 17 (2014)](https://doi.org/10.1007/s10468-012-9385-8)

### Counting generators up to symmetry makes infinite polynomial rings Noetherian

**Remember:** Count generators together with all their translates under variable permutations.

*Makes the theorem clean to state or prove.* MSC 13E05 (Commutative Noetherian rings and modules), 13A50. arXiv math.RT, math.AC. Level 4: research.

**Definition.** A group of permutations of the variables acts on the polynomial ring. The ring is Noetherian up to that action if each invariant ideal is generated by the translates of finitely many polynomials.

**Problem.** Let k be a commutative Noetherian ring, and let a group act highly homogeneously on an infinite set of variables, so any finite set of variables can be moved onto any other of the same size. Then the polynomial ring over k is Noetherian up to that action.

**How the definition helps.** Counting a whole orbit as one generator makes finite generation possible: the ideal of all variables needs infinitely many ordinary generators but only one orbit (our own example). Proving that every invariant ideal is finitely generated up to symmetry remains the hard part.

**Paper or page:** [Noetherianity of polynomial rings up to group actions](https://arxiv.org/abs/2502.14306v2). It says: “We show that k\[S\] is Noetherian up to highly homogenous actions of groups.”

**Sources:**

- [Liping Li, Yinhe Peng, Zhengjun Yuan, Noetherianity of polynomial rings up to group actions, arXiv:2502.14306 (2025)](https://arxiv.org/abs/2502.14306v2)

### With the Noetherian Bézout definition, ℤ is constructively a principal ideal domain

**Remember:** Finite lists get one generator; ascending chains of finite ideals pause.

*Makes the theorem clean to state or prove.* MSC 13F10 (Principal ideal rings), 13E05, 03F65. arXiv math.AC, math.LO. Level 4: research.

**Definition.** Constructively, Lombardi and Quitté call a domain principal when it is Bézout, so every finite list generates a principal ideal, and Noetherian. Here Noetherian means that every ascending sequence of finitely generated ideals has two consecutive equal terms.

**Problem.** In constructive mathematics, ℤ is Noetherian and Bézout, so it is a principal ideal domain in this sense. The classical statement that every ideal of ℤ is principal is equivalent to excluded middle.

**How the definition helps.** The Euclidean algorithm gives Bézout generators, and each strict enlargement after the first nonzero ideal decreases a positive generator, so ℤ is constructively Noetherian (our own). A generator of {n ∈ ℤ \| n = 0 or P} would decide P by testing whether it is zero (our own). Conversely, excluded middle restores the classical least-positive-element argument (our own).

**nLab:** [noetherian ring](https://ncatlab.org/nlab/show/noetherian+ring), [principal ideal domain](https://ncatlab.org/nlab/show/principal+ideal+domain). It says: “the ring of integers is both Noetherian and Bézout, but it is a principal ideal domain if and only if excluded middle holds.”

**Sources:**

- [H. Lombardi, C. Quitté, Commutative Algebra: Constructive Methods (Finite projective modules), Springer 2015](https://doi.org/10.1007/978-94-017-9944-7)

### Modified power series over zero-dimensional rings stay flat

**Remember:** Keep each power series inside one Artinian piece, and flatness returns.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F25 (Formal power series rings), 13C11, 13C15. arXiv math.AC, math.RA. Level 4: research.

**Definition.** Let R be integral over an Artinian subring R₀. The modified series ring 𝓕⟦X₁,…,Xₙ⟧ consists of the series whose coefficients all lie in one finite R₀-subalgebra of R, which is itself Artinian.

**Problem.** The modified ring 𝓕⟦X₁, …, Xₙ⟧ is faithfully flat over R and has Krull dimension n, which is dim R + n. Over a non-Noetherian ring, the full power series ring can fail to be flat and can have infinite dimension.

**How the definition helps.** So the modified ring is a directed union of power series rings over Artinian rings, each flat over its base and of dimension n (our own). Theorems 3.4 and 4.6 pass faithful flatness and dimension n to the union (our own).

**Paper or page:** [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1), [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1). It says: “A power series ring over non-Noetherian rings can fail to be flat over the base ring, and its dimension can be infinite, even when the dimension of the base ring is finite.”

**Sources:**

- [M. Richard Sayanagi, Power Series Rings over Zero-Dimensional Rings, arXiv:2510.07496 (2025)](https://arxiv.org/abs/2510.07496v1)

### A δ-structure makes Frobenius kill all p-torsion

**Remember:** δ makes φ(x) = xᵖ + pδ(x) a ring map.

*True by definition.* MSC 13F35 (Witt vectors and related rings). arXiv math.NT, math.AC. Level 4: research.

**Definition.** Fix a prime p. A δ-ring is a commutative ring with a map δ, δ(0) = δ(1) = 0, such that δ(x+y) = δ(x)+δ(y)+(xᵖ+yᵖ−(x+y)ᵖ)/p and δ(xy) = xᵖδ(y)+yᵖδ(x)+pδ(x)δ(y). These rules make φ(x) = xᵖ + pδ(x) a ring map that lifts Frobenius modulo p.

**Problem.** In a δ-ring, every element α with pα = 0 satisfies φ(α) = 0. So a perfect δ-ring, where φ is bijective, has no p-torsion, and no nonzero ring of characteristic p carries a δ-structure.

**How the definition helps.** If pα = 0, the product rule and δ(p) = 1−pᵖ⁻¹ give 0 = δ(pα) = pδ(α)+(1−pᵖ⁻¹)αᵖ (our own). Hence φ(α) = pᵖ⁻¹αᵖ = 0, so an injective φ allows no nonzero p-torsion (our own). In characteristic p the same holds for α = 1, giving φ(1) = 0, which is impossible in a nonzero ring (our own).

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let A be a δ<sub>L</sub>-algebra. Then if α ∈ A is π-torsion, we have φ(α) = 0. In particular, if A is perfect then A is π-torsion free.”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Marks, Prismatic F-crystals and Lubin-Tate (φq, Γ)-modules, arXiv preprint 2303.07620 (2023)](https://arxiv.org/abs/2303.07620)

### Distinguished elements make the prism condition depend only on the ideal

**Remember:** Distinguished means δ(d) is a unit, like δ(p).

*Makes the theorem clean to state or prove.* MSC 13F35 (Witt vectors and related rings), 14F30. arXiv math.NT, math.AG. Level 4: research.

**Definition.** An element d of a δ-ring is distinguished when δ(d) is a unit. For example, d = p is distinguished when p lies in the Jacobson radical, since δ(p) = 1 − pᵖ⁻¹ (our own).

**Problem.** Let A be a δ-ring with p and d in its Jacobson radical, the intersection of its maximal ideals. Then d is distinguished exactly when p ∈ (d, φ(d)), and exactly when (d) contains a distinguished element.

**How the definition helps.** The quoted criterion with π = p gives both equivalences, since p and d lie in the Jacobson radical (our own). Since φ(ud) = φ(u)φ(d), the ideal (d, φ(d)) does not change when d is multiplied by a unit, so the condition depends only on (d) (our own).

**Paper or page:** [Prismatic F-crystals and Lubin-Tate (φ<sub>q</sub>,Γ)-modules](https://arxiv.org/abs/2303.07620). It says: “Let A be a δ<sub>L</sub>-algebra, and let d∈Rad(A). The following are equivalent: (i) d is distinguished. (ii) The ideal (d) contains a distinguished element. (iii) π ∈ (d<sup>q</sup>,φ(d)). (iv) π ∈ (d,φ(d)).”

**Sources:**

- [B. Bhatt and P. Scholze, Prisms and prismatic cohomology, Annals of Mathematics 196 (2022) 1135–1275](https://doi.org/10.4007/annals.2022.196.3.5)
- [S. Marks, Prismatic F-crystals and Lubin-Tate (φq, Γ)-modules, arXiv preprint 2303.07620 (2023)](https://arxiv.org/abs/2303.07620)

### Verschiebung substitution is injective

**Remember:** Substitution moves each coefficient to a distinct degree and loses none of them.

*True by definition.* MSC 13F35 (Witt vectors and related rings), 19D50. arXiv math.KT. Level 4: research.

**Definition.** Model length-m big Witt vectors as power series with constant term 1 modulo tᵐ⁺¹, with Witt addition given by multiplication. The Verschiebung to length nm substitutes tⁿ for t.

**Problem.** The Verschiebung is injective over every commutative ring. For a perfect field k of positive characteristic, one where the pth power map is bijective, the relative K-groups of k\[x\]/(xⁿ) for the ideal (x) vanish in positive even degrees.

**How the definition helps.** Substituting tⁿ moves the coefficient of tʲ to degree nj, so distinct coefficients go to distinct degrees and none is lost (our own). Hesselholt and Madsen's exact sequence identifies each positive even relative K-group with such a kernel, which is therefore zero (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “In components, a Witt vector is an infinite sequence of elements of a given commutative ring k.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Koszul Euler characteristics turn multiplicity into a test for Cohen–Macaulayness

**Remember:** Multiplicity is colength minus the higher Koszul homology.

*True by definition. Confidence: medium.* MSC 13H15 (Multiplicity theory and related topics), 13D02, 13H10. arXiv math.AC. Level 4: research.

**Definition.** For a system of parameters x of a Noetherian local ring R, the Koszul Euler characteristic is χ(x;R) = ∑ᵢ (−1)ⁱ length Hᵢ(x;R). Its degree-zero term is length R/(x), so length R/(x) − χ(x;R) is the alternating sum of the higher Koszul homology lengths, starting with + length H₁.

**Problem.** For every system of parameters, e(x; R) ≤ length R/(x), with equality if and only if R is Cohen–Macaulay.

**How the definition helps.** By Serre's theorem e(x;R) equals this Euler characteristic, so the gap length R/(x) − e(x;R) is that higher alternating sum (our own). Serre also showed the sum is never negative and vanishes only when H₁ = 0, that is, when x is a regular sequence and R is Cohen–Macaulay (our own).

**Paper or page:** [More Algebra, Lemma 15.126.7](https://stacks.math.columbia.edu/tag/0BWW), [Intersection, Lemma 43.16.2](https://stacks.math.columbia.edu/tag/0B03). It says: “If eI/d! is the leading coefficient of the numerical polynomial n ↦ lengthR(R/Iⁿ⁺¹), then eI ≤ lengthR(R/I).”

**Sources:**

- [J.-P. Serre, Algèbre locale, multiplicités, Lecture Notes in Mathematics 11, Springer, 1965 (third edition 1975).](https://doi.org/10.1007/978-3-540-37123-6)

### For absolute-valued Huber rings, topological simplicity means the completion is a field

**Remember:** A dense ideal contains elements close to one.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 13A18, 14G22. arXiv math.NT, math.AC. Level 4: research.

**Definition.** A topological ring is topologically simple if its only closed ideals are 0 and the whole ring. For a Hausdorff ring, this means every nonzero ideal is dense. A Huber ring has an open subring whose topology is the I-adic topology for a finitely generated ideal I.

**Problem.** If the completion of a Hausdorff commutative topological ring A is a field, then A is topologically simple. The converse holds for a Huber ring whose topology comes from an absolute value.

**How the definition helps.** A field completion has no closed ideals other than 0 and itself, so A has none either (our own). Conversely, for nonzero a, density of aA gives b with \|1−ab\| &lt; 1, and a geometric series inverts ab in the completion (our own). Approximating any nonzero x in the completion by such an a with \|x−a\| &lt; \|a\| inverts x in the same way (our own).

**Paper or page:** [Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras](https://arxiv.org/abs/2510.22678v2). It says: “If the completion of A is a field, then A is topologically simple. If A is a Huber ring and its topology is defined by an absolute value, then the converse is also true.”

**Sources:**

- [Dimitri Dine, Jack J Garzella, Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras, arXiv:2510.22678v2 (2025)](https://arxiv.org/abs/2510.22678v2)

### Degree-compatible orders make two kinds of confluence agree

**Remember:** Order by degree, and the weaker confluence is already enough.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13F25, 68Q42. arXiv math.AC, math.RA. Level 4: research.

**Definition.** In the formal power series ring over a field, a reduction system is topologically confluent if, after any fork, for every n the branches reduce further to series that agree modulo 𝔪ⁿ (our own). It is infinitarily confluent if, after any fork, both branches have convergent reductions with the same limit (our own).

**Problem.** For formal power series with a monomial order compatible with degree, the rewriting system of a standard basis is infinitarily confluent exactly when it is topologically confluent.

**How the definition helps.** With a degree-compatible order, agreement up to a fixed degree is decided in a finite truncation (our own). The quoted theorem then uses closedness of ideals to turn these approximate joins into exact limits (our own).

**Paper or page:** [Topological closure of formal power series ideals and application to topological rewriting theory](https://arxiv.org/abs/2402.05511v3). It says: “Using topological closure of ideals, we finally show that in the context of rewriting theory on commutative formal power series, infinitary and topological confluences are equivalent when the monomial order considered is compatible with the degree.”

**Sources:**

- [Cyrille Chenavier, Thomas Cluzeau, Adya Musson-Leymarie, Topological closure of formal power series ideals and application to topological rewriting theory, arXiv:2402.05511 (2024)](https://arxiv.org/abs/2402.05511v3)
