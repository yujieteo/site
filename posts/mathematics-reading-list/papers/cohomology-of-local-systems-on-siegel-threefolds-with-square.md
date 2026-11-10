source: https://shmakov.us/docs/Thesis.pdf
slogan: Counting points on abelian varieties over finite fields reduces to cohomology of local systems, which automorphic forms let you compute explicitly.
basis: the introduction and the main theorem statements

## Before you start

This thesis has 278 pages, mostly trace formulas and tables of representations of GSp<sub>4</sub>. The likely feeling is overwhelm, with some shame at not knowing Arthur parameters. Both are fair responses to a text this size. The author says himself that the new results are modest next to the length. Chapter 1 answers a concrete question: how many points does an abelian surface over 𝔽<sub>q</sub> have on average? Read it for the fun of the formulas. The rest can wait.

## The story

Pick a principally polarised abelian variety of dimension g over 𝔽<sub>q</sub> at random. How many points does it have on average? The Grothendieck–Lefschetz trace formula turns this into a question about the ℓ-adic cohomology of fibre powers of the universal abelian variety over the moduli stack A<sub>g</sub>. That cohomology splits into cohomology of local systems V<sub>λ</sub> on A<sub>g</sub>. The block is that these groups are hard: A<sub>g</sub> is not compact, and the answer involves Galois representations of modular forms. The method is to split the cohomology into an Eisenstein part, from the boundary, and a cuspidal part, read from automorphic representations. The literature does this in pieces with clashing conventions. The thesis assembles one consistent account for modular curves and Siegel threefolds, then pushes it to square-free parahoric level.

## Main definitions

**Groupoid cardinality.** For a groupoid with finitely many isomorphism classes and finite automorphism groups, the sum of 1/#Aut(x) over isomorphism classes x. For example #A<sub>1</sub>(𝔽<sub>q</sub>) = q and #A<sub>2</sub>(𝔽<sub>q</sub>) = q<sup>3</sup> + q<sup>2</sup>.
- Use: it defines a probability measure on isomorphism classes, with mass proportional to 1/#Aut.

**Local system V<sub>λ</sub>.** The ℓ-adic local system on A<sub>g</sub> attached to the irreducible representation of Sp<sub>2g</sub> of highest weight λ. The cohomology sheaves of the n-fold fibre power X<sub>g</sub><sup>×n</sup> → A<sub>g</sub> of the universal abelian variety decompose into such V<sub>λ</sub>.

**Tate type.** A Galois representation is of Tate type if it is a sum of powers L<sup>k</sup> of the Lefschetz class L, on which Frobenius at q has trace q<sup>k</sup>. If the compactly supported Euler characteristic of a stack is of Tate type, its point count is a polynomial in q.

**Eisenstein and cuspidal cohomology.** The cohomology of a local system on a non-compact Shimura variety has a part computed from cusp forms and the discrete spectrum, and a part built from Eisenstein series attached to parabolic subgroups.
- For GSp<sub>4</sub>: three cases, the Siegel, Klingen and Borel parabolics.

## Main results

**Theorem (elliptic curves; Theorem 1.2.3).** H<sup>i</sup>(X<sub>1</sub><sup>×n</sup>, ℚ<sub>ℓ</sub>) is of Tate type for all i when 1 ≤ n ≤ 9. For n = 10 it is of Tate type except in degree 11, where the 2-dimensional Galois representation of the weight 12 cusp form Δ appears. This follows from Eichler–Shimura.
- Step 1: the Leray spectral sequence for X<sub>g</sub><sup>×n</sup> → A<sub>g</sub> degenerates (Deligne), and its terms decompose into the V<sub>λ</sub>.
- Step 2: insert the known cohomology of each V<sub>λ</sub>, then take traces of Frobenius.

**Theorem (abelian surfaces; Theorem 1.3.3).** H<sup>i</sup>(X<sub>2</sub><sup>×n</sup>, ℚ<sub>ℓ</sub>) is of Tate type for all i when 1 ≤ n ≤ 6. For n = 7 it is of Tate type except in degree 17, where the Galois representation of the weight 18 cusp form ΔE<sub>6</sub> appears. The inputs are results of Lee–Weintraub and Petersen. One consequence: the average point count is q<sup>2</sup> + q + 1 − 1/(q<sup>3</sup> + q<sup>2</sup>).

**Theorem (abelian threefolds, conditional; Theorem 1.4.6).** Assume the conjectures of Bergström–Faber–van der Geer on local systems on A<sub>3</sub> (Conjectures 1.4.1 and 1.4.2 of the thesis). Then the compactly supported Euler characteristic of X<sub>3</sub><sup>×n</sup> is of Tate type for 1 ≤ n ≤ 5 and not for n ≥ 6. The thesis notes that the cases n ≤ 5 are in fact unconditional by other arguments.

**Claim (level 2 and level 3; results 4.6.5 to 4.6.8, 4.7.4, 4.7.5).** The introduction states that the thesis verifies the Bergström–Faber–van der Geer conjectures on Euler characteristics of local systems on A<sub>2</sub>[2], determines the cohomology itself under assumptions on certain connecting morphisms, and reproves the Hoffman–Weintraub computation of the cohomology of A<sub>2</sub>[3] in a few pages. I did not read the precise statements in Chapter 4.

## Note, then ignore

- Semisimplification. The Galois representations are determined only up to semisimplification, because traces cannot see extensions. Safe to skip on a first reading.
- Connecting morphisms. Some Eisenstein computations assume how certain connecting maps behave. The author says Euler characteristics do not depend on this. Safe to skip.
- Automorphism weights. Every count weights an object by 1/#Aut, which is what makes the trace formula apply to stacks. Safe to skip once you accept it.
- Clashing conventions. Much of the length reconciles notation between sources, and the author warns that some inconsistencies may remain. Safe to skip.
- Published tables. The thesis reports that many entries in a published table of Euler characteristics for A<sub>2</sub>[2] disagree with its results, while the computer program behind the table agrees. Safe to skip.

## One next step

Open the thesis at the introduction to Chapter 1 (pages 10 and 11) and read only the displayed formulas for the expected values E(#A<sub>g</sub>(𝔽<sub>q</sub>)) for g = 1, 2, 3.
