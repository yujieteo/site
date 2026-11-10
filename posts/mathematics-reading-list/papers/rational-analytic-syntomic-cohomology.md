source: https://arxiv.org/pdf/2604.15193
slogan: One stack attached to a rigid space holds its syntomic cohomology, so duality and the p-adic comparison theorems become statements about that stack's geometry.
basis: the introduction and the main theorem statements

## Before you start

This is 139 pages built on Gelfand stacks, analytic prismatisation and the Fargues–Fontaine curve, each of which is a recent theory with its own long source. The likely feeling is shame at not knowing the background, three layers deep. That feeling is a fair response to the reference list, and it can stay. If you want to see why p-adic Hodge theory has so many cohomology theories and how one object can sit above them all, the introduction answers that in nine pages. Read it for the picture. Finishing is optional.

## The story

A smooth proper variety over ℚ<sub>p</sub> has de Rham cohomology and p-adic étale cohomology, and p-adic Hodge theory asks how they relate. Work on that question produced a zoo of theories: Hyodo–Kato, proétale, B<sub>dR</sub><sup>+</sup>-cohomology. Syntomic cohomology is meant to sit above them all and mediate the comparisons. For p-adic formal schemes, Drinfeld and Bhatt–Lurie turned this into geometry: attach a stack X<sup>Syn</sup> to X, and syntomic cohomology is the cohomology of line bundles on it. For rigid-analytic varieties that stack was missing. Hauck builds it, with ℚ<sub>p</sub>-coefficients, inside the new framework of Gelfand stacks, which comes with six functors. Poincaré duality then becomes a smoothness statement about a map of stacks. The comparison theorems of Scholze and Colmez–Nizioł become descriptions of X<sup>Syn</sup> as a fibre product.

## Main definitions

**Gelfand stack.** A stack in the framework of Anschütz, Le Bras, Rodríguez Camargo and Scholze, a variant of Clausen–Scholze analytic stacks made for p-adic analytic geometry. Quasicoherent sheaves on Gelfand stacks have a six-functor formalism.
- Rigid spaces: partially proper rigid-analytic varieties embed fully faithfully. This is why the paper assumes partial properness.

**Analytic Nygaardification X<sup>N</sup> and syntomification X<sup>Syn</sup>.** For a Gelfand stack X over ℚ<sub>p</sub>, the stack X<sup>N</sup> receives two maps j<sub>dR</sub> and j<sub>HT</sub> from the analytic prismatisation X<sup>Δ</sup>. The stack X<sup>Syn</sup> is X<sup>N</sup> with these two copies of X<sup>Δ</sup> glued together.
- Step 1: ℚ<sub>p</sub><sup>N</sup> is a pullback of ℚ<sub>p</sub><sup>Δ</sup> along a multiplication map on quotients of the unit disc by the unit torus, giving two coordinates t and u.
- Step 2: the loci |t| = 1 and |u| = 1 in X<sup>N</sup> are each isomorphic to X<sup>Δ</sup>. These define j<sub>dR</sub> and j<sub>HT</sub>.

**Rational analytic syntomic cohomology.** A line bundle O{1} on ℚ<sub>p</sub><sup>Syn</sup> plays the role of the Breuil–Kisin twist. For an integer i, RΓ<sub>Syn</sub>(X, ℚ<sub>p</sub>(i)) is RΓ(X<sup>Syn</sup>, O{i}).
- Coefficients: a perfect complex on X<sup>Syn</sup> is called an analytic F-gauge on X.

## Main results

**Theorem (Poincaré duality; Theorems 1.4 and 1.7).** The map ℚ<sub>p</sub><sup>Syn</sup> → GSpec ℚ<sub>p</sub> is cohomologically smooth with dualising sheaf O{1}[3]. If f: X → Y is a smooth proper map of smooth partially proper rigid spaces of pure relative dimension d, then pushforward along f<sup>Syn</sup> preserves perfect complexes, and f<sup>Syn</sup><sub>\*</sub>(E<sup>∨</sup>{d})[2d] ≅ (f<sup>Syn</sup><sub>\*</sub>E)<sup>∨</sup> for every perfect complex E on X<sup>Syn</sup>.
- Step 1: a rigid smooth map induces a cohomologically smooth map of syntomifications, with dualising sheaf O{d}[2d].
- Step 2: a quasicompact map locally of finite presentation induces a weakly cohomologically proper map.

**Theorem (Hyodo–Kato comparison; Theorem 1.12).** For a Berkovich smooth derived Berkovich space X over ℚ<sub>p</sub>, perfect complexes on X<sup>Syn</sup> are the fibre product of perfect complexes on the Hyodo–Kato stack X<sup>HK</sup> and on the filtered de Rham stack X<sup>dR,+</sup>, taken over perfect complexes on X<sup>dR</sup>. So syntomic cohomology of any E is a pullback of Hyodo–Kato and filtered de Rham cohomology over de Rham cohomology.
- Case E = O{i}: this recovers a theorem of Colmez–Nizioł, so the new theory agrees with their syntomic cohomology.

**Theorem (proétale comparison; Theorem 1.15).** Let X be a smooth partially proper rigid space over ℚ<sub>p</sub> and i ≥ 0. Then RΓ<sub>Syn</sub>(X, ℚ<sub>p</sub>(i)) and RΓ<sub>proét</sub>(X, ℚ<sub>p</sub>(i)) agree after truncation to degrees at most i. The same holds for a vector bundle F-gauge with Hodge–Tate weights at most −i, with an injection on H<sup>i+1</sup>.

**Theorem (vector bundles; Theorems 1.17 and 1.18).** For a smooth partially proper rigid space X over ℚ<sub>p</sub>, vector bundles on X<sup>Syn</sup> are equivalent to de Rham vector bundles on the relative Fargues–Fontaine curve of the diamond of X. De Rham local systems on X<sub>proét</sub> embed fully faithfully.
- Case X a point: for a de Rham Galois representation V, H<sup>1</sup>(ℚ<sub>p</sub><sup>Syn</sup>, V) is the Bloch–Kato group H<sup>1</sup><sub>g</sub>(Gal<sub>ℚ<sub>p</sub></sub>, V).

## Note, then ignore

- The shift [3]. Local Tate duality suggests [2]. The extra degree comes from a topological direction in ℚ<sub>p</sub><sup>Syn</sup> that looks like an interval and does not affect cohomology of perfect complexes (Remark 1.5). Safe to skip on a first reading.
- Rational coefficients only. The integral theory needs an integral analytic prismatisation, which is work in progress (Remark 1.1). Safe to skip.
- Partially proper. Gelfand stacks identify a rigid space with its Huber compactification, so the closed disc gains a rank 2 point (Remark 1.2). Safe to skip.
- Nilperfectoid rings. These test rings form a basis of the topology, so the paper defines stacks by their values on them. Safe to skip.
- Over ℂ<sub>p</sub>. Section 10 repeats the theory there, and the resulting syntomic cohomology differs from that of Colmez–Nizioł. Safe to skip.

## One next step

Open the paper at Section 1.1 (page 3) and read the paragraph that begins "The major trend in p-adic Hodge theory in recent years has been geometrisation".
