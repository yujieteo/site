source: https://kskedlaya.org/chabauty.shtml
slogan: A two-term syllabus takes you from Chabauty's p-adic finiteness proof to its nonabelian successors, one named reference per week.
basis: the page itself

## Before you start

This page is a list: about fifteen sessions, each pointing at one or two research papers. The likely feeling is overwhelm, the sense that every line is a paper you have not read. It is fine to feel it. The page is also a map drawn by someone who knows the ground, useful if you want to find rational points on curves by proof. Pick the one session that pulls at you and enjoy that.

## The story

Faltings proved that a curve of genus at least 2 over ℚ has finitely many rational points, but his proof gives no way to list them. Chabauty's earlier method does lead to explicit bounds. Put the curve X inside its Jacobian J and work p-adically. The rational points lie in X(ℚ<sub>p</sub>) and in the closure of J(ℚ). When the rank of J(ℚ) is less than the genus, these two sets meet in finitely many points. Coleman made this effective with p-adic integrals of 1-forms. The method fails when the rank is too large. Kim's nonabelian programme replaces the Jacobian by larger objects built from the fundamental group, and quadratic Chabauty is its first workable case. Kedlaya's course at UC San Diego (2019 to 2020) reads through this in order.

## Main definitions

The page defines nothing. These are the terms its session titles rely on, stated from the first reference it names (McCallum and Poonen, "The method of Chabauty and Coleman").

**Jacobian embedding.** For a curve X over ℚ of genus g ≥ 2 with a rational point O, the map P ↦ [P − O] embeds X in its Jacobian J, an abelian variety of dimension g. By the Mordell–Weil theorem J(ℚ) is a finitely generated abelian group.

**p-adic integral of a 1-form.** For a regular 1-form ω on J over ℚ<sub>p</sub>, there is a unique map Q ↦ ∫<sub>0</sub><sup>Q</sup> ω from J(ℚ<sub>p</sub>) to ℚ<sub>p</sub> that is a homomorphism and is given near 0 by integrating the power series of ω term by term.
- Coleman integration extends such integrals along the curve X. The course gives it its own session.

**Abelian and nonabelian.** "Abelian" Chabauty uses the Jacobian, which sees only the abelianised fundamental group of the curve. "Nonabelian" Chabauty (Chabauty–Kim) uses more of the fundamental group. The page lists Kim's method, Selmer varieties and quadratic Chabauty under this heading.

## Main results

**Claim (what the course covers, autumn).** The first term treats the abelian method: an overview after McCallum and Poonen, the Mordell–Weil sieve after Siksek, Coleman integration and effective Chabauty after Coleman's papers, a hands-on session of examples in Magma, the Poonen–Stoll theorem, a first overview of the nonabelian method after Corwin, and Chabauty at primes of bad reduction after Katz, Rabinoff and Zureick-Brown.

**Claim (what the course covers, winter).** The second term treats the nonabelian side: Tannakian categories, finiteness theorems by Kim's method, Poincaré bundles and quadratic Chabauty after Edixhoven and Lido, p-adic heights after Coleman–Gross and Balakrishnan–Besser, quadratic Chabauty for modular curves, a comparison with the method of Lawrence and Venkatesh, and explicit nonabelian Chabauty through motives.

**Theorem (Chabauty; Theorem 4.4 in McCallum–Poonen).** Let X be a curve of genus g ≥ 2 over ℚ with Jacobian J, and let p be a prime. If the rank of J(ℚ) is less than g, then the intersection of X(ℚ<sub>p</sub>) with the p-adic closure of J(ℚ) is finite. So X(ℚ) is finite.
- The sharper hypothesis is that the p-adic closure of J(ℚ) has dimension less than g.

**Theorem (Coleman; Theorem 5.3 in McCallum–Poonen).** With the same hypotheses, let p also be a prime of good reduction with p > 2g. Then #X(ℚ) ≤ #X(𝔽<sub>p</sub>) + 2g − 2.
- Step 1: the rank condition gives a non-zero 1-form whose p-adic integral vanishes on the closure of J(ℚ).
- Step 2: on each residue disc, count the zeros of that integral as a p-adic power series.

## Note, then ignore

- A schedule, not notes. The page gives dates, speakers and references, and no mathematics of its own. The two theorems above come from the first reference it names. Safe to keep that in mind and move on.
- Gaps in the calendar. Some Fridays had no meeting, and the last two March dates were cancelled. This does not affect the reading order. Safe to skip.
- "Possible additional topics". A further list covers Kamienny's criterion, numerical Coleman integration, the section conjecture, the split Cartan curve of level 13 and Lawrence's approach to Mordell. They are suggestions, not sessions. Safe to skip on a first reading.
- Over ℚ only. McCallum and Poonen work over ℚ and say the method extends to number fields. Safe to skip.
- How I read it. I read the page through a text extraction, so wording of session titles here is paraphrased.

## One next step

Open the page, find the 11 October 2019 session, and follow its link to McCallum and Poonen. Read only Section 4, "Chabauty's idea", up to Theorem 4.4.
