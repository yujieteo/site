source: http://neilsloane.com/doc/Me150.pdf
slogan: The mass of a genus of lattices becomes a product of table look-ups, one per prime, so a classification can be checked by arithmetic.
basis: the introduction and the main theorem statements

## Before you start

This is a 28-page paper, and more than half of it is tables. Its own Section 3 is a list of famous people who got this formula wrong. The likely feeling is dread of fiddly 2-adic cases. You may feel that. The authors did too, and they built the paper to remove it. If you want to count lattices and trust the count, this is the tool. Enjoy one worked example first. The tables will still be there later.

## The story

Lattices that look the same over every ℤ<sub>p</sub> and over ℝ form a genus. A genus holds finitely many classes, and listing them is hard. The mass formula gives a check: the sum of 1/|Aut| over the classes is computable from any one lattice. So if your list of classes has the right mass, the list is complete. The block was practical. Classical versions used p-adic densities, and the prime 2 was so error-prone that published values were often wrong. Conway and Sloane restate the formula with a "p-mass" for each prime. Each p-mass is a product of factors read from the Jordan decomposition and two tables. They then use it to confirm their earlier enumeration of lattices of small determinant.

## Main definitions

**Mass of a genus.** Let f be a positive definite integral quadratic form (or lattice) of dimension n, and f<sub>1</sub>, …, f<sub>h</sub> the inequivalent forms in its genus. The mass is m(f) = Σ<sub>i</sub> 1/|Aut(f<sub>i</sub>)|. The number h is the class number.

**Jordan decomposition.** Over ℤ<sub>p</sub>, f splits as a direct sum of pieces q·f<sub>q</sub>, where q runs over powers of p and each f<sub>q</sub> has determinant prime to p. Write n(q) = dim f<sub>q</sub>.
- For p = 2, each f<sub>q</sub> is of type I (odd, it represents an odd 2-adic integer) or type II (even).

**p-mass.** m<sub>p</sub>(f) is the reciprocal of the number of automorphisms of f modulo a large enough power of p, times a normalising power of p. Unlike the p-adic density, it does not change when f is rescaled.

**Standard mass.** For n = 2s or 2s − 1 and determinant d, std(f) = 2 π<sup>−n(n+1)/4</sup> Π<sub>j=1..n</sub> Γ(j/2) · ζ(2) ζ(4) ⋯ ζ(2s − 2) · ζ<sub>D</sub>(s). Here D = (−1)<sup>s</sup>d, and ζ<sub>D</sub>(s) = Σ over odd m of (D/m) m<sup>−s</sup>. Omit the last factor when n is odd.

## Main results

**Theorem (mass formula; formula (2), stated without proof).** For a genus of positive definite forms of dimension n ≥ 2, m(f) = 2 π<sup>−n(n+1)/4</sup> Π<sub>j=1..n</sub> Γ(j/2) · Π<sub>p</sub> 2m<sub>p</sub>(f), with p over all primes. The paper says plainly that it does not prove this. It gives a heuristic in Section 13.
- Step 1 (heuristic): An automorphism of determinant 1 is pinned down by its p-adic localisations, so the mass is proportional to the product of local terms.
- Step 2 (heuristic): The constant comes from an integration over SO(n), as in Siegel.

**Theorem (p-mass; formula (3), stated without proof).** m<sub>p</sub>(f) = Π<sub>q</sub> M<sub>p</sub>(f<sub>q</sub>) · Π<sub>q&lt;q′</sub> (q′/q)<sup>n(q)n(q′)/2</sup> · 2<sup>n(I,I) − n(II)</sup>. The last factor appears only for p = 2. There n(II) is the total dimension of the type II pieces, and n(I,I) counts adjacent pairs f<sub>q</sub>, f<sub>2q</sub> both of type I.
- Case p odd: the diagonal factor M<sub>p</sub>(f<sub>q</sub>) depends only on n(q) and on whether det f<sub>q</sub> is a quadratic residue mod p.
- Case p = 2: it depends also on the type, an "octane value" mod 8, and whether the piece is "free" or "bound". Tables 1 and 2 give the answer.

**Claim (standard values; Section 7).** For all but finitely many p, m<sub>p</sub>(f) equals the standard value 1 / [2(1 − p<sup>−2</sup>)(1 − p<sup>−4</sup>) ⋯ (1 − p<sup>2−2s</sup>)(1 − εp<sup>−s</sup>)], with ε = 0 for n odd and ε = (D/p) otherwise. So m(f) is a rational multiple of std(f), and only finitely many primes need work.

## Note, then ignore

- "Love forms". This is the authors' name for zero-dimensional Jordan pieces. They carry the name so that 2-adic bookkeeping has no gaps. Safe to skip on a first reading.
- Dimensions 0 and 1. The leading 2 is the Tamagawa number of SO(n), and it must be replaced by 1 there. Section 6 explains. Safe to skip.
- The 2 in 2m<sub>p</sub>(f). It is the index of SO in O, so 2m<sub>p</sub> is the "proper" p-mass. Safe to skip.
- Density versus mass. Section 12 relates m<sub>p</sub> to the classical p-adic density, which varies inversely with it. You need this only to compare with older papers. Safe to skip.
- A factor against Watson. A footnote admits the authors could not fully reconcile their formula with Watson's and blame a difference of conventions. The formula was tested against the enumerations. Safe to skip.

## One next step

Open the PDF at Section 9, example (i), and follow the mass computation for the form diag{7, 1, 1}. It uses every part of the formula once.
