source: https://www-users.cse.umn.edu/~garrett/m/mfms/notes_2013-14/12_1_adeles.pdf
slogan: Adeles and p-adic numbers are what you get when you take the limit of a family of circles, or of modular curves, so they were there all along.
basis: the introduction and the main theorem statements

## Before you start

These notes run to 37 pages and half of them are commutative diagrams. The likely feeling is impatience: you may already know ℤ<sub>p</sub> as a completion, and re-deriving it by universal properties can feel like being sent back a year. You are allowed to feel that. The notes do offer something you may want, which is a reason for adeles to exist at all. The five-page introduction gives that reason through pictures. Enjoy those pages first. The proofs can wait for a day when you feel like checking them.

## The story

Hecke operators on level-one modular forms are sums of terms that are only invariant under smaller groups Γ<sub>N</sub>. So you want one space on which functions of every level live at once, with compatible maps down to every Γ<sub>N</sub>\H. The upper half-plane H itself fails: the functions are not square-integrable there, and most functions on H have no level. The right object is the projective limit of the quotients. Garrett warms up with circles. The circles ℝ/p<sup>n</sup>ℤ form a tower, and their limit is a solenoid. Asking which group acts on that limit forces ℤ<sub>p</sub>, then ℚ<sub>p</sub>, then the adeles to appear. The same argument for SL<sub>2</sub> gives SL<sub>2</sub>(ℚ)\SL<sub>2</sub>(𝔸), with SL<sub>2</sub>(ℚ<sub>p</sub>) acting on the right for every p.

## Main definitions

**Projective limit.** Given objects X<sub>i</sub> indexed by a partially ordered set, with compatible transition maps, a limit is an object X with maps to every X<sub>i</sub> such that any other compatible family of maps Y → X<sub>i</sub> factors through a unique map Y → X. It is unique up to unique isomorphism (Claim 4.0.1).
- Construction: the subset of the product of the X<sub>i</sub> made of compatible tuples.

**p-adic integers and numbers.** ℤ<sub>p</sub> and ℚ<sub>p</sub> are the completions of ℤ and ℚ for the norm |p<sup>e</sup> · m| = p<sup>−e</sup>, with m prime to p. The norm satisfies |x + y| ≤ max(|x|, |y|).
- Consequence: ℤ<sub>p</sub> = {x ∈ ℚ<sub>p</sub> : |x| ≤ 1} is a subring, open and closed in ℚ<sub>p</sub>.

**Adeles.** 𝔸 is the set of tuples (x<sub>∞</sub>, x<sub>2</sub>, x<sub>3</sub>, …) in ℝ × Π ℚ<sub>p</sub> with x<sub>p</sub> ∈ ℤ<sub>p</sub> for all but finitely many p. It is the union of the rings ℝ × Π<sub>p ∈ S</sub> ℚ<sub>p</sub> × Π<sub>p ∉ S</sub> ℤ<sub>p</sub> over finite sets S, each with the product topology.
- As a colimit: 𝔸 is the ascending union of the groups ℝ × (1/N)Ẑ, where Ẑ = Π ℤ<sub>p</sub>.

**Solenoid.** The limit of the tower of circles … → ℝ/p<sup>2</sup>ℤ → ℝ/pℤ → ℝ/ℤ is the p-solenoid. The limit over all ℝ/Nℤ, ordered by divisibility, is the big solenoid.

## Main results

**Theorem (ℤ<sub>p</sub> and Ẑ are limits; Theorems 6.1.1 and 6.2.1).** The limit of the rings ℤ/p<sup>n</sup> is the metric completion ℤ<sub>p</sub>. The limit of the groups ℤ/N over all N, ordered by divisibility, is Ẑ = Π ℤ<sub>p</sub>.
- Why they match: ℤ/p<sup>n</sup>ℤ → ℤ<sub>p</sub>/p<sup>n</sup>ℤ<sub>p</sub> is an isomorphism (Proposition 2.0.9), and Hensel's lemma (Claim 1.0.1) produces compatible sequences.

**Theorem (abelian solenoids; Corollary 8.2.2, §8.3 to §8.5).** The p-solenoid is (ℝ × ℤ<sub>p</sub>)/ℤ, with ℤ embedded diagonally. It is also (ℝ × ℚ<sub>p</sub>)/ℤ[1/p]. The big solenoid is 𝔸/ℚ. The projection to ℝ/Nℤ is the quotient 𝔸/ℚ → 𝔸/(ℚ + NẐ).
- Step 1: ℝ × ℤ<sub>p</sub> acts transitively on the limit, and the point (…, 0, 0, 0) has stabiliser the diagonal ℤ (Claim 8.2.1).
- Step 2: enlarging the diagram to circles ℝ/p<sup>n</sup>ℤ with n any integer does not change the limit but shows the larger group ℝ × ℚ<sub>p</sub> acting.

**Theorem (non-abelian solenoid; Theorem 9.2.5 and §9.4).** Let G<sub>∞</sub> = SL<sub>2</sub>(ℝ) and Γ(p<sup>n</sup>) the principal congruence subgroups. Then the limit of Γ(p<sup>n</sup>)\G<sub>∞</sub> is SL<sub>2</sub>(ℤ[1/p])\(G<sub>∞</sub> × SL<sub>2</sub>(ℚ<sub>p</sub>)). Over all congruence subgroups Γ, the limit of Γ\G<sub>∞</sub> is SL<sub>2</sub>(ℚ)\SL<sub>2</sub>(𝔸).
- Projections: dividing on the right by K(N), the matrices in SL<sub>2</sub>(Ẑ) congruent to 1 mod N, gives back Γ<sub>N</sub>\G<sub>∞</sub>.
- Key input: SL<sub>2</sub>(ℤ[1/p]) is dense in SL<sub>2</sub>(ℚ<sub>p</sub>) (Claim 9.2.4), and SL<sub>2</sub>(ℚ) is dense in SL<sub>2</sub>(𝔸<sub>fin</sub>).

**Claim (discrete and dense; §8.5 and §9.5).** ℚ is discrete in 𝔸. After dropping the real factor, ℚ is dense in the finite adeles 𝔸<sub>fin</sub>.

## Note, then ignore

- Idele topology. The ideles sit inside the adeles, but the subspace topology is strictly coarser than the idele topology (Remark 3.0.1). Safe to skip on a first reading.
- "Restricted product". Garrett uses the term only for the quick definition and prefers the colimit description. Safe to skip.
- Removing SO(2). He works with Γ\SL<sub>2</sub>(ℝ) and not Γ\H so that SL<sub>2</sub>(ℝ) can act on the right like the p-adic groups. Safe to skip.
- ℚ<sub>p</sub> as a colimit. The union of the p<sup>−n</sup>ℤ<sub>p</sub> describes ℚ<sub>p</sub> as a topological group, not as a ring (§7). Safe to skip.
- Metrics on products. The proof that the limit carries the p-adic metric uses explicit but non-canonical metrics on a countable product (Remark 6.1.4). Safe to skip.

## One next step

Open the notes at page 5 and look at the two diagrams for ℚ\𝔸 and for ℤ[1/p]\(ℝ × ℚ<sub>p</sub>), then read the sentence about solenoids under them.
