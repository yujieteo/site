source: https://arxiv.org/pdf/1304.6532
slogan: Call two roots of unity neighbours when their ratio has prime power order, and the projective line over 𝔽₁ gets a topology Galois respects.
basis: the introduction and the main theorem statements

## Before you start

The field with one element does not exist, and these 50 pages say so cheerfully while building on it anyway. The likely feeling is unease: how do you study something when you cannot tell which statements are theorems? That unease is reasonable and you can keep it. You may want the notes for their pictures, above all Mumford's drawing of the arithmetic plane with a second axis added. Look at the drawings for pleasure first.

## The story

Number fields behave like function fields of curves over finite fields, where Weil proved the Riemann hypothesis with geometry. To copy him, Spec ℤ would be a curve over a base point Spec 𝔽<sub>1</sub>. Smirnov wrote down what the projective line over 𝔽<sub>1</sub> and the maps from Spec ℤ to it ought to be. Its points are orbits of roots of unity. Le Bruyn asks which topology they carry. In Mumford's drawing of the projective line over ℤ, the curves cut out by cyclotomic polynomials Φ<sub>n</sub> act as horizontal lines. Two of them meet exactly when m/n is a prime power. Noncommutative geometry reads that as "infinitely close", which recovers a topology Habiro introduced for 3-manifold invariants. Pulling it back along Smirnov's maps puts a new topology on Spec ℤ.

## Main definitions

**Smirnov's projective line over 𝔽<sub>1</sub>.** Its geometric points are 0, ∞ and all roots of unity. Its schematic points are the Galois orbits: [0], [∞] and one point [n] for each n ≥ 1, the set of primitive n-th roots of unity.
- Degree: [n] has degree φ(n). [0] and [∞] have degree 1.
- In the drawing: [n] is the curve Φ<sub>n</sub> = 0 in the projective line over ℤ.

**Smirnov map.** For q = a/b in lowest terms, the map q sends a prime p to [0] if p divides a, to [∞] if p divides b, and otherwise to [n], where n is the order of a/b in 𝔽<sub>p</sub><sup>×</sup>.
- At infinity: ∞ goes to [0] if a &lt; b and to [∞] if a > b.

**Habiro topology.** Two roots of unity are adjacent when their quotient has prime power order. Likewise m ∼ n when m/n = p<sup>±a</sup> for a prime p. A set U is open when, for every point in U, all but finitely many of its adjacent points also lie in U.

**λ-ring (Borger's descent data).** A commutative ring R without additive torsion, with commuting endomorphisms ψ<sup>p</sup>, one for each prime p, such that ψ<sup>p</sup> lifts the Frobenius of R/pR. Borger reads these as descent data from ℤ to 𝔽<sub>1</sub>, and forgetting them as base change to ℤ.

## Main results

The notes state results in running text, without theorem numbers.

**Claim (when cyclotomic lines meet; Section 3).** If m/n is not a prime power, then Φ<sub>m</sub> and Φ<sub>n</sub> generate the unit ideal of ℤ[x] and the two curves are disjoint. If m/n = p<sup>k</sup>, the curves meet over the prime p.
- Consequence: in the second case there are non-split extensions between ℤ[ζ<sub>n</sub>] and ℤ[ζ<sub>m</sub>] as ℤ[x, x<sup>−1</sup>]-modules, in both directions.

**Claim (the Habiro topology is finer and not compact; Section 3).** Every cofinite set is open. The set U<sub>p</sub> of all [n] such that p | n implies p<sup>2</sup> | n is open and has infinite complement, so the topology is strictly finer than the cofinite one. The sets U<sub>p</sub>, with [0] and [∞] added, cover the line, and no finite subfamily does.
- Why no finite subcover: the point [p<sub>1</sub>⋯p<sub>k</sub>] lies in none of the sets for p<sub>1</sub>, …, p<sub>k</sub>.
- Galois: the action of Ẑ<sup>×</sup> = Gal(ℚ(μ<sub>∞</sub>)/ℚ) preserves adjacency, so it is continuous. It is not continuous for the usual topology on the circle.

**Claim (Smirnov maps are almost onto; Section 7).** Each map q is finite. By Zsigmondy's theorem, for coprime integers 1 ≤ b &lt; a and every n > 1 some prime lies over [n], except when (a, b, n) = (2, 1, 6), or n = 2 and a + b is a power of 2.
- Exotic topology: the coarsest topology on Spec ℤ that makes every q continuous refines the cofinite topology and is not compact.
- Conditional (Smirnov): a Riemann–Hurwitz formula for these maps would give a form of the ABC conjecture. No such formula is proved.

**Claim (Borger and de Smit; Section 4).** The λ-rings that are finite and projective over ℤ form a category anti-equivalent to finite sets with a continuous action of the multiplicative monoid Ẑ<sup>×</sup> of profinite integers. Every such λ-ring sits inside a product of cyclotomic fields.

## Note, then ignore

- No formal 𝔽<sub>1</sub>. Sections 1 to 3 argue by analogy. Borger's λ-rings supply the formal framework from Section 4 onward. Safe to skip the worry on a first reading.
- Degree log p. Smirnov gives the prime p degree log p and the point ∞ degree 1, so that degrees of fibres add up. Safe to skip.
- Factorial digits. Section 3 describes Ẑ by a factorial number system. It is the inverse limit of ℤ/n!ℤ under another name. Safe to skip.
- Witt vectors and Burnside rings. Sections 8 to 10 identify Spec ℤ over 𝔽<sub>1</sub> with a ring of big Witt vectors of ℤ, which is a completed Burnside ring of the infinite cyclic group. Safe to skip.
- Two unit symbols. Ẑ<sup>\*</sup> means the units and Ẑ<sup>×</sup> means the whole multiplicative monoid. Safe to skip until Section 4.

## One next step

Open the notes at page 10 and look at Figure 1, the extended Mumford drawing, for two minutes. Find the arithmetic axis and the geometric axis.
