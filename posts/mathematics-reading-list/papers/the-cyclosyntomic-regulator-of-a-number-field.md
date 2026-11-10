source: https://arxiv.org/pdf/2602.21894
slogan: One regulator over ℤ[q] specialises to the p-adic regulator of a number field for every prime p, and on 1 − ζ it is a q-polylogarithm.
basis: the introduction and the main theorem statements

## Before you start

At 29 pages this is short, but it leans on three recent things at once: prismatic cohomology, q-Witt vectors and the Habiro ring. The likely feeling is a mild dread that each definition will send you to another paper. That is a reasonable thing to feel here, and it need not go away. The reward is concrete: a formula that turns the unit 1 − ζ into a q-series you could write on a napkin. Go for the formula first and enjoy it. The machinery is there if you ever want it.

## The story

Leopoldt defined a p-adic regulator for a number field K by applying the p-adic logarithm to the units of O<sub>K</sub>. In modern terms it is a first Chern class from units to weight one syntomic cohomology, and Kato gave a formula for it: u ↦ (1/p) log(u<sup>p</sup> / Frob<sub>p</sub>(u)). This is one construction for each prime p, and each lives in a p-complete world, so the primes cannot talk to each other. Bouis and Gazda remove the completion. They replace prismatic cohomology by modules over a "cyclotomic ring", a ℤ[q]-algebra cut out of the Habiro ring, which behaves like functions of q near all roots of unity at once. The pth power and Frobenius become a dth power deformation and a dth Frobenius, for any integer d ≥ 2. The result is one regulator that specialises to the p-adic one when d = p.

## Main definitions

**Cyclotomic ring C<sub>R</sub>.** A commutative ℤ[q]-algebra attached to a ring R, built from Wagner's big q-Witt vectors as a reduced version of the Habiro ring H<sub>R</sub> of Garoufalidis, Scholze, Wheeler and Zagier.
- Example: C<sub>ℤ</sub> is the inverse limit of ℤ[q]/(q<sup>m</sup> − 1) over m ordered by divisibility.
- Compare: H<sub>ℤ</sub> is the inverse limit of the completions of ℤ[q] at (q<sup>m</sup> − 1).

**Cyclosyntomic complex.** Let K be a number field with discriminant Δ<sub>K</sub>, let R = O<sub>K</sub>[1/Δ<sub>K</sub>], and let d ≥ 2 be an integer. The complex RΓ<sub>CycSyn</sub>(R, ℤ(1)<sup>(d)</sup>) is built from the map "canonical map minus the dth cyclotomic Frobenius" from N<sup>≥1</sup>C<sub>R</sub>{1} to C<sub>R</sub><sup>(d)</sup>{1}. These two C<sub>R</sub>-modules are decompleted versions of the Nygaard filtered and Breuil–Kisin twisted prismatic cohomology.
- Model: weight one syntomic cohomology is the fibre of "canonical minus Frobenius" from N<sup>≥1</sup>Δ<sub>R</sub>{1} to Δ<sub>R</sub>{1}.

**Cyclotomic norms.** For a unit u of R, a compatible family of elements Π<sub>m</sub>(u) in H<sub>R,m</sub>/(q<sup>m</sup> − 1), one for each m ≥ 1. They refine Sulyma's norm maps in prismatic cohomology and interpolate between ordinary powers and Frobenius maps at different primes.

## Main results

**Theorem (first Chern class; Theorem A).** Let R = O<sub>K</sub>[1/Δ<sub>K</sub>]. For each prime p there is a natural map from RΓ<sub>CycSyn</sub>(R, ℤ(1)<sup>(p)</sup>) to the syntomic cohomology RΓ(R, ℤ<sub>p</sub>(1)) taken relative to the q-prism (ℤ<sub>p</sub>[[q − 1]], [p]<sub>q</sub>). For each d ≥ 2 there is a natural class c<sub>1</sub>: 𝔾<sub>m</sub>(R)[−1] → RΓ<sub>CycSyn</sub>(R, ℤ(1)<sup>(d)</sup>). For d = p, composing the two recovers the syntomic first Chern class of R.
- Step 1: build a cyclotomic logarithm 𝔾<sub>m</sub>(R)[−1] → N<sup>≥1</sup>C<sub>R</sub>{1} from the cyclotomic norms.
- Step 2: this needs the Habiro ring, though the target modules can be defined from q-Witt vectors alone.

**Theorem (Kato-type formula; Theorem B).** For every unit u of R and every d ≥ 2, the class c<sub>1</sub>(u) in H<sup>1</sup><sub>CycSyn</sub>(R, ℤ(1)<sup>(d)</sup>) is (1/d) log(Π̃<sub>d</sub>(ũ) / Frob<sub>d</sub>(ũ)). Here Π̃<sub>d</sub> is a q-deformation of the dth power map, Frob<sub>d</sub> is the dth Habiro Frobenius, and ũ is any sequence of lifts of the cyclotomic norms of u to H<sub>R,m</sub>/(q<sup>m</sup> − 1)<sup>2</sup>.

**Theorem (q-polylogarithm; Theorem C).** For every root of unity ζ in R other than ±1 and every d ≥ 2, the class c<sub>1</sub>(1 − ζ) equals −Li<sub>1</sub><sup>(d)</sup>([ζ])<sub>q</sub>, where Li<sub>1</sub><sup>(d)</sup>(z)<sub>q</sub> is the sum of z<sup>k</sup>/[k]<sub>q</sub> over k ≥ 1 not divisible by d, and [k]<sub>q</sub> = 1 + q + … + q<sup>k−1</sup>.
- Why it works: 1 − ζ has an explicit lift to the Habiro ring, so the Frobenius in Theorem B can be computed.
- Compare: at q = 1 and d = p the series is Coleman's first p-adic polylogarithm, the sum of z<sup>k</sup>/k over k prime to p.

## Note, then ignore

- Inverting the discriminant. The paper works over O<sub>K</sub>[1/Δ<sub>K</sub>], which is étale over ℤ, so that the Habiro ring of the base is available. Safe to skip on a first reading.
- The integer N. A fixed integer N marks finitely many primes to discard, and limits run over m prime to N. It matters only in Section 4. Safe to skip.
- Cyclotomic, not Habiro. The logarithm cannot be lifted to a non-trivial Habiro logarithm (Remark 3.19), which is why the reduced ring C<sub>R</sub> appears. Safe to skip.
- Weight one only. Higher weights and higher K-groups are stated as hopes, not results. Safe to skip.
- Leopoldt's conjecture. The introduction recalls it as motivation. The paper does not claim progress on it. Safe to skip.

## One next step

Open the paper at page 4 and read only the statement of Theorem C, then write out the first three terms of the series for d = 2.
