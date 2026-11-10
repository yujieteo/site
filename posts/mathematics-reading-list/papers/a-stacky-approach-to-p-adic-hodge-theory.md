source: https://arxiv.org/pdf/2409.10557
slogan: Turn each p-adic cohomology theory into sheaf cohomology on a stack, and the classical comparison theorems extend to twisted coefficients.
basis: the introduction and the main theorem statements

## Before you start

This is a master's thesis that leans on Bhatt–Lurie and Drinfeld, it runs to about 100 pages and names a new stack every few pages. The likely feeling is shame at not knowing that background. That feeling is allowed. You do not need to fix it before you open the file. If you want to see why people say prismatic cohomology "is geometry", the introduction shows it in eight pages. Read those for pleasure. The rest can wait.

## The story

Faltings proved that for a smooth proper scheme over ℤ<sub>p</sub>, étale cohomology of the generic fibre and crystalline cohomology of the special fibre agree after tensoring with Fontaine's ring B<sub>crys</sub>. People wanted the same statement with coefficients: a local system on one side, an F-isocrystal on the other. The classical proofs do not carry coefficients easily. The idea, from Simpson and then Drinfeld and Bhatt–Lurie, is to attach to a formal scheme X a stack whose coherent cohomology is the cohomology theory you want. Then coefficients are just sheaves on the stack. Hauck takes the stack X<sup>Syn</sup>, the syntomification, and reproves the main comparisons for sheaves on it. Each theorem becomes a statement about how one stack is glued from simpler ones.

## Main definitions

**Prismatisation X<sup>Δ</sup>.** A stack attached functorially to a p-adic formal scheme X. When X is p-quasisyntomic, the coherent cohomology of its structure sheaf is the absolute prismatic cohomology of X.
- Model case: the de Rham stack X<sup>dR</sup>, whose structure sheaf computes p-completed de Rham cohomology.
- Filtered version: X<sup>N</sup>, the Nygaard-filtered prismatisation, which contains two open copies of X<sup>Δ</sup>.

**Syntomification X<sup>Syn</sup>.** The stack you get from X<sup>N</sup> by gluing its two open copies of X<sup>Δ</sup> together. It carries line bundles O{n}, the Breuil–Kisin twists, whose cohomology is syntomic cohomology in weight n (the thesis cites forthcoming work of Bhatt–Lurie for this).

**F-gauge.** An object of the derived category D(X<sup>Syn</sup>) of quasi-coherent complexes. A gauge is the same on X<sup>N</sup>.
- Realisations: pulling back gives a vector bundle with flat connection (de Rham), a ℤ<sub>p</sub>-local system on the generic fibre X<sub>η</sub> (étale), and an F-isocrystal on the special fibre (crystalline).

**Crystalline local system.** A pro-étale ℤ<sub>p</sub>-local system on X<sub>η</sub> of the kind that comes with an associated F-isocrystal on the special fibre. The precise definition is in Section 7.1, which this summary did not read.

## Main results

**Theorem (crystalline versus étale with coefficients; Theorem 1.0.2 = 7.0.1).** Let X be smooth and proper over Spf ℤ<sub>p</sub>. Let L be a crystalline local system on X<sub>η</sub> with all Hodge–Tate weights at most −i−1, for some i ≥ 0, and let E be its F-isocrystal. Then there is a natural map from RΓ<sub>crys</sub>(X<sub>p=0</sub>, E)[1/p][−1] to RΓ<sub>proét</sub>(X<sub>η</sub>, L)[1/p]. It is an isomorphism in degrees up to i and injective on H<sup>i+1</sup>.
- Step 1: attach an F-gauge to L (Theorem 1.0.3), a fully faithful embedding of crystalline local systems into Perf(X<sup>Syn</sup>).
- Step 2: compare both sides with syntomic cohomology of that F-gauge, using the next two results.

**Theorem (syntomic versus étale; Theorem 1.0.4 = 6.0.2).** Let X be smooth and qcqs. For a vector bundle F-gauge E with Hodge–Tate weights at most −i−1, the natural map RΓ(X<sup>Syn</sup>, E) → RΓ<sub>proét</sub>(X<sub>η</sub>, T<sub>ét</sub>(E)) is an isomorphism in degrees up to i and injective on H<sup>i+1</sup>.

**Theorem (Beilinson fibre square with coefficients; Theorem 1.0.5 = Corollary 5.0.3).** Let X be smooth and proper over Spf ℤ<sub>p</sub> and E a perfect F-gauge. After inverting p, the cohomology of E on X<sup>Syn</sup> is the pullback of two pieces over de Rham cohomology: crystalline cohomology of the special fibre, and Hodge-filtered de Rham cohomology.
- For E = O{n} this recovers the square of Antieau–Mathew–Morrow–Nikolaus in the smooth proper case, without topological Hochschild homology.
- The square comes from a commutative square of stacks built from ℤ<sub>p</sub><sup>Syn</sup>, 𝔽<sub>p</sub><sup>Syn</sup> and the two de Rham stacks of ℤ<sub>p</sub>.

**Theorem (Nygaard versus Hodge filtration; Theorem 1.0.7 = Corollary 4.0.5).** For X smooth and proper over Spf ℤ<sub>p</sub> and a perfect gauge E on X<sup>N</sup>, there is a similar pullback square after inverting p. It relates cohomology on X<sup>N</sup>, on X<sup>Δ</sup>, and on the filtered and unfiltered de Rham stacks. If all Hodge–Tate weights of E are at least −p, the square holds integrally.

## Note, then ignore

- Arithmetic versus geometric generic fibre. Theorem 1.0.2 uses X<sub>η</sub> over ℚ<sub>p</sub> itself, where Faltings uses the base change to an algebraic closure. That explains the shift by [−1] and the degree range. Safe to skip at first.
- Sign of Hodge–Tate weights. The bound "at most −i−1" depends on a convention fixed in the text. Skip it until you need a number.
- Diffracted Hodge cohomology and the Sen operator. Chapter 3 builds stacks for these as a tool for the Nygaard–Hodge square. Skip on a first reading.
- Circularity remark. The proof uses results of Guo–Reinecke that first relied on the older fibre square. The author points to a later independent route. Skip.
- qcqs and p-quasisyntomic. These are finiteness and mildness conditions that every smooth proper example satisfies. Skip.

## One next step

Open the PDF at page 5 and read only Theorem 1.0.2 and the paragraph after it, which lays out the two-part proof.
