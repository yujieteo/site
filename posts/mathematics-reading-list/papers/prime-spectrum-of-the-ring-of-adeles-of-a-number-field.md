source: https://arxiv.org/pdf/2110.15736
slogan: Every prime ideal of the adele ring sits at one place or at one non-principal ultrafilter of places, so the whole spectrum can be listed.
basis: the full text

## Before you start

This paper is 14 pages of commutative algebra, and the word "ultrafilter" appears on page 3. The likely feeling is a small flinch: logic vocabulary in a number theory paper, and perhaps doubt about whether the question matters. Both reactions are fair, and you can read on while having them. If you have used adeles only as a tool for Fourier analysis, here you get to look at the ring itself and see its points. It is a short paper. Read it for the pleasure of a complete answer.

## The story

Number theorists use the adele ring 𝔸<sub>K</sub> as a topological ring, for harmonic analysis and class field theory. Few ask the plain algebraic question: what are its prime ideals? The obvious ones come from places: all adeles that vanish at a fixed place v. The block is that 𝔸<sub>K</sub> contains an infinite product of rings, and infinite products have many more primes than factors. The idea is to split the problem. First write 𝔸<sub>K</sub> as a union of rings 𝔸<sub>K,S</sub>, each a finite product of fields times an infinite product of discrete valuation rings. A known result (Finocchiaro) describes primes of such products by ultrafilters on the index set. Then check which primes are compatible as S grows. The result is a full list.

## Main definitions

**Adele ring as a direct limit.** Fix a finite set S<sub>0</sub> of places of the number field K that contains the archimedean ones. For each finite S ⊃ S<sub>0</sub> put 𝔸<sub>K,S</sub> = ∏<sub>v∈S</sub> K<sub>v</sub> × ∏<sub>v∉S</sub> o<sub>v</sub>. Then 𝔸<sub>K</sub> is the union (direct limit) of the 𝔸<sub>K,S</sub>.
- Consequence (Proposition 3.2): Spec 𝔸<sub>K</sub> is the inverse limit of the spaces Spec 𝔸<sub>K,S</sub>.

**Ultrafilter.** An ultrafilter U on a set Ω is a family of subsets that excludes the empty set, is closed under finite intersection and under passing to larger sets, and contains exactly one of Y and Ω∖Y for each Y.
- Principal: all sets containing a fixed point.
- Non-principal: equivalently, U contains every cofinite set.

**The ideals of a place and of an ultrafilter.** For a place v, M<sub>v</sub> is the set of adeles α with α<sub>v</sub> = 0. For a non-principal ultrafilter U on Ω = (places)∖S<sub>0</sub>, M<sub>U</sub> is the set of α such that {v : α<sub>v</sub> lies in the maximal ideal 𝔪<sub>v</sub>} belongs to U, and m<sub>U</sub> is the set of α such that {v : α<sub>v</sub> = 0} belongs to U.

**The ideals p<sup>β</sup><sub>U</sub>.** For β in M<sub>U</sub>, p<sup>β</sup><sub>U</sub> is the set of α for which some Y in U and some n satisfy v(α<sub>v</sub><sup>n</sup>) ≥ v(β<sub>v</sub>) for all v in Y. It is the smallest prime inside M<sub>U</sub> that contains β.

## Main results

**Theorem (the spectrum of 𝔸<sub>K</sub>; Theorem 4.3).** Let K be a number field. The maximal ideals of 𝔸<sub>K</sub> are the M<sub>v</sub> and the M<sub>U</sub> for non-principal U. The minimal primes are the M<sub>v</sub> (which are both maximal and minimal) and the m<sub>U</sub>. Each m<sub>U</sub> lies in exactly one maximal ideal, namely M<sub>U</sub>. Every other prime p lies strictly between m<sub>U</sub> and M<sub>U</sub> for exactly one U, and p is the union of the p<sup>β</sup><sub>U</sub> over β in p ∩ 𝔸<sub>K,S<sub>0</sub></sub>.
- Step 1: describe Spec 𝔸<sub>K,S</sub> from the ultrafilter description of primes in a product of discrete valuation rings (Theorem 2.2).
- Step 2: keep only the families of primes compatible with all inclusions 𝔸<sub>K,S</sub> ⊂ 𝔸<sub>K,S′</sub>. The ideal "α<sub>v</sub> in 𝔪<sub>v</sub>" for a single place v does not survive, since v eventually joins S.

**Proposition (closed and dense primes; Propositions 5.1 and 5.2).** The closed prime ideals of 𝔸<sub>K</sub> are exactly the M<sub>v</sub>, and 𝔸<sub>K</sub>/M<sub>v</sub> ≅ K<sub>v</sub>. Every other prime ideal is dense in 𝔸<sub>K</sub>.
- Step 1: closed ideals correspond to subsets Z of places (a result of Connes and Consani), which leaves only the M<sub>v</sub> as closed primes.
- Step 2: a net of 0/1 adeles inside m<sub>U</sub> converges to 1, so the closure of m<sub>U</sub> is the whole ring.

**Theorem (finite extensions; Corollary 7.3).** Let L/K be a finite extension of number fields of degree n. The map Spec 𝔸<sub>L</sub> → Spec 𝔸<sub>K</sub>, sending a prime to its intersection with 𝔸<sub>K</sub>, is surjective, and each fibre has at most n points.
- Step 1: under the restriction map on places, whose fibres have at most n points, each ultrafilter below has at least one and at most n ultrafilters above it (Proposition 6.4).
- Step 2: above a given prime p in M<sub>U</sub> and a given ultrafilter over U there is exactly one prime (Proposition 7.2).

**Claim (generalisations; section 8, stated without detailed proof).** The same description holds for global function fields, and for the adele ring of a smooth complete connected curve over any perfect field, where local compactness fails but is not needed.

## Note, then ignore

- The choice of S<sub>0</sub>. The ultrafilters live on the places outside S<sub>0</sub>. Lemma 4.1 shows that removing finitely many points does not change the set of non-principal ultrafilters. Safe to skip.
- Archimedean places. The text treats M<sub>v</sub> for every place v, while the statement of Theorem 4.3 writes "finite places". Section 5 uses all places. This looks like a slip. Safe to skip.
- A notation change. The definition of p<sup>β</sup><sub>U</sub> differs from Finocchiaro's. The author notes that the two agree for discrete valuation rings. Skip it.
- The base field ℚ in section 7. The proofs are written for K/ℚ, and the author says they work for any L/K. Skip the difference.

## One next step

Open the paper at Theorem 4.3 on pages 7 and 8, and read only the three numbered parts of the statement.
