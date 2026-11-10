source: https://swc-math.github.io/aws/2020/2020ZureickBrownNotes.pdf
slogan: When a curve's Jacobian has rank below its genus, a p-adic integral vanishes on every rational point, so you can count them.
basis: the introduction and the main theorem statements

## Before you start

These are 19 pages of lecture notes that call themselves "somewhat of an advertisement" for other surveys, and Section 1.1 is a list of unfinished jottings. The likely feeling is unease: a sense that the real content lives elsewhere and that you are missing it. That unease is reasonable and needs no fixing. If you want to see a proof that a curve has, say, at most ten rational points, the three-step sketch on pages 4 and 5 gives the whole idea. Enjoy that sketch first. The rest is a guided tour.

## The story

Mordell conjectured that a curve X of genus g > 1 over a number field has finitely many rational points. Faltings proved it, but his proof gives no usable bound. Decades earlier Chabauty found a simpler route under one hypothesis: the rank r of the Jacobian is less than g. Then some differential ω has a p-adic integral that vanishes at every rational point. Coleman made this effective in three moves. Set up the integral. Bound its zeros in each residue disc by a p-adic version of Rolle's theorem. Add up the discs using Riemann–Roch. The result is #X(ℚ) ≤ #X(𝔽<sub>p</sub>) + 2g − 2. The notes then follow two improvements: allow primes of bad reduction, and use small rank to sharpen the count. Both lead to graphs, chip-firing and tropical geometry, and finally to bounds that depend only on g.

## Main definitions

**Nice curve and rank.** A nice curve X over a number field K is smooth, projective and geometrically integral. Throughout, g > 1 is its genus and r is the rank of the group Jac<sub>X</sub>(K).

**The Chabauty space V<sub>chab</sub>.** Fix a prime 𝔭 of K. If r &lt; g, there is a subspace V of the regular differentials on X over K<sub>𝔭</sub>, of dimension at least g − r, such that the p-adic integral ∫<sub>P</sub><sup>Q</sup> ω is zero for all P, Q in X(K) and all ω in V.
- Use: each ω in V gives a locally analytic function f<sub>ω</sub> on X(K<sub>𝔭</sub>) that vanishes on X(K).

**Rank of a divisor (Definition 5.5).** For a divisor D on a curve, r(D) = −1 if no effective divisor is linearly equivalent to D. Otherwise r(D) is the largest n such that D − E is equivalent to an effective divisor for every effective E of degree n.
- On a graph (Definition 5.7): the same definition, with divisors as chip configurations on vertices and equivalence by chip-firing.

## Main results

**Theorem (Coleman; Theorem 3.7).** Let X over ℚ have genus g and rank r &lt; g. Let p > 2g be a prime of good reduction. Then #X(ℚ) ≤ #X(𝔽<sub>p</sub>) + 2g − 2.
- Step 1: in the residue disc of a point P of X(𝔽<sub>p</sub>), f<sub>ω</sub> has at most 1 + n<sub>P</sub> zeros, where n<sub>P</sub> counts zeros of ω in that disc.
- Step 2: the n<sub>P</sub> sum to at most deg div ω = 2g − 2.

**Theorem (bad reduction and small rank; Theorems 4.1, 5.1 and 5.2).** Lorenzini and Tucker: for p > 2g and a proper regular model of X over ℤ<sub>p</sub>, the same bound holds with X(𝔽<sub>p</sub>) replaced by the 𝔽<sub>p</sub>-points of the smooth locus of the special fibre. Stoll: under Coleman's hypotheses, 2g − 2 improves to 2r. Katz and Zureick-Brown: for p > 2r + 2, r &lt; g and any proper regular model, #X(ℚ) is at most the number of smooth 𝔽<sub>p</sub>-points of the special fibre plus 2r.
- Idea for 2r: choose a different ω in V for each residue disc, then use Clifford's theorem in place of Riemann–Roch.

**Theorem (uniform bounds; Theorems 6.1 and 6.2).** Assume r ≤ g − 3. Stoll: a hyperelliptic curve X over ℚ has #X(ℚ) ≤ 8(r + 4)(g − 1) + max{1, 4r}·g. Katz, Rabinoff and Zureick-Brown: any curve X over ℚ has #X(ℚ) ≤ 84g<sup>2</sup> − 98g + 28.

**Conjecture (uniformity; Conjecture 3.1, Caporaso–Harris–Mazur).** For a number field K and g ≥ 2 there is a constant B<sub>g</sub>(K) that bounds #X(K) for every smooth curve X over K of genus g. It is open. It would follow from the Weak Lang conjecture.

## Note, then ignore

- The roadmap. Section 1.1 is a set of the author's reading-list notes, not finished prose. Safe to skip.
- Two bounds on p. The sketch states the disc count 1 + n<sub>P</sub> for p > 2, while Theorem 3.7 asks for p > 2g. The gap is a detail of the p-adic analysis. Safe to skip on a first reading.
- Two kinds of integral. At a prime of bad reduction, different ways of continuing a p-adic integral disagree. Stoll showed the disagreement is controlled, and Section 6 builds on that. Safe to skip at first.
- Nonabelian Chabauty. The notes do not show how this method sits inside Kim's nonabelian version. They point to Poonen's notes for that. Safe to skip.
- Finding r. To run the method on a real curve you need the rank and generators of the Mordell–Weil group. That is a separate computation. Safe to skip.

## One next step

Open the notes at Section 2 (page 4) and read the three paragraphs headed "Setup", "Local analysis" and "Global coordination", ending at the displayed proof of Coleman's bound on page 5.
