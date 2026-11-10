source: https://arxiv.org/pdf/1802.03261
slogan: Topological Hochschild homology, cut along its even homotopy groups, yields the integral p-adic cohomology theories and a motivic-style filtration at once.
basis: the introduction and the main theorem statements

## Before you start

This paper has 90 pages, three well-known authors, and asks for both homotopy theory and p-adic Hodge theory. The likely feeling is intimidation, and the thought that you need both fields first. You can have that feeling and still read. The introduction is written to be read alone. If you want to know where prismatic cohomology came from, this is the step just before it. Read Section 1 as a story, at your own speed. Nobody is counting pages.

## The story

In earlier work the authors built a cohomology theory with values in Fontaine's ring A<sub>inf</sub> for smooth proper formal schemes over O<sub>C</sub>. It specialises to de Rham, étale and crystalline cohomology. Kisin's theory predicted a finer version over the smaller ring 𝔖 = W(k)[[z]], defined over a discretely valued field K. The old construction could not descend. The new idea is topological Hochschild homology (THH). For a perfectoid ring R, π<sub>0</sub> of TC⁻(R) is exactly A<sub>inf</sub>(R). Any reasonable ring is covered, in a flat topology, by rings close to perfectoid, where THH lives in even degrees. So one computes locally and glues by descent. The degree 0 part gives the cohomology theory. The other even degrees give a filtration on THH that looks like the motivic filtration on K-theory.

## Main definitions

**THH and its variants.** THH(A) is Hochschild homology of A over the sphere spectrum. It has a circle action and a Frobenius map to its C<sub>p</sub>-Tate construction.
- TC⁻(A) is the homotopy fixed points of the circle, TP(A) the Tate construction.
- TC(A) is the fibre of φ − can from TC⁻ to TP, after p-completion.

**Quasisyntomic ring (Definition 1.7).** A p-complete ring A with bounded p-power torsion such that the cotangent complex of A over ℤ<sub>p</sub>, reduced mod p, has Tor-amplitude in [−1, 0]. These rings form a site, with covers the maps that are faithfully flat mod each p<sup>n</sup> with the same cotangent bound. All p-complete local complete intersection rings and all perfectoid rings qualify.

**Breuil–Kisin module (Definition 1.1).** A finitely generated 𝔖-module M with an isomorphism between the Frobenius pullback of M and M itself, after inverting E. Here E is the Eisenstein polynomial of a uniformiser of K.

**Nygaard-complete prismatic complex.** For quasisyntomic A, the complex Δ̂<sub>A</sub> is the cohomology on the quasisyntomic site of the presheaf π<sub>0</sub> TC⁻(−; ℤ<sub>p</sub>). It carries a complete filtration N<sup>≥n</sup>, the Nygaard filtration.

## Main results

**Theorem (Breuil–Kisin cohomology; Theorem 1.2).** Let K be a discretely valued extension of ℚ<sub>p</sub> with perfect residue field k, and X a proper smooth formal scheme over O<sub>K</sub>. There is a cohomology theory RΓ<sub>𝔖</sub>(X), a perfect complex of 𝔖-modules with a Frobenius, whose cohomology groups are Breuil–Kisin modules. Base change to A<sub>inf</sub> recovers the earlier A<sub>inf</sub>-cohomology, hence étale cohomology. Base change to O<sub>K</sub> gives de Rham cohomology, and base change to W(k) gives crystalline cohomology of the special fibre.
- Step 1: apply the descent construction to THH relative to the polynomial ring 𝕊[z].
- Step 2: undo one Frobenius twist using an analogue of the Segal conjecture (Section 11).

**Theorem (perfectoid computation; Theorem 1.6).** For a perfectoid ring R there is a canonical Frobenius-equivariant isomorphism π<sub>0</sub> TC⁻(R; ℤ<sub>p</sub>) ≅ A<sub>inf</sub>(R). The case R = O<sub>ℂ<sub>p</sub></sub> is due to Hesselholt.

**Theorem (descent recovers AΩ; Theorem 1.8).** Let A be the p-adic completion of a smooth O<sub>C</sub>-algebra. Then the complex AΩ<sub>A</sub> of the earlier paper is the quasisyntomic cohomology of π<sub>0</sub> TC⁻(−; ℤ<sub>p</sub>). For a smooth algebra over a perfect field of characteristic p the same recipe gives crystalline cohomology (Theorem 1.10).

**Theorem (motivic filtration; Theorem 1.12).** Let A be quasisyntomic. Locally on its site, THH, TC⁻ and TP are concentrated in even degrees. Descending the double-speed Postnikov filtration gives complete filtrations with graded pieces: gr<sup>n</sup> THH is N<sup>n</sup>Δ̂<sub>A</sub>[2n], gr<sup>n</sup> TC⁻ is N<sup>≥n</sup>Δ̂<sub>A</sub>{n}[2n], and gr<sup>n</sup> TP is Δ̂<sub>A</sub>{n}[2n].
- Consequence: TC gets a filtration with pieces ℤ<sub>p</sub>(n)[2n], where ℤ<sub>p</sub>(n) is the fibre of φ − can from N<sup>≥n</sup>Δ̂<sub>A</sub>{n} to Δ̂<sub>A</sub>{n}.
- Theorem 1.15 identifies ℤ<sub>p</sub>(n): logarithmic de Rham–Witt sheaves in characteristic p, and truncated p-adic nearby cycles over O<sub>C</sub>.

## Note, then ignore

- Frobenius twists. Each base change in Theorem 1.2 goes through the Frobenius of W(k). Remark 1.4 shows this has real consequences for torsion, but it is safe to skip at first.
- Breuil–Kisin twists {n}. These are invertible modules that keep track of Tate twists. Over a perfectoid base they are trivial. Skip.
- Nygaard completion. The hat on Δ̂ means completed for the Nygaard filtration. It agrees with later prismatic cohomology only after that completion. Skip.
- Choice of uniformiser. The ring map 𝔖 → O<sub>K</sub> and the theory depend on it. Skip.
- Degree 1 of ℤ<sub>p</sub>(n). The authors expected it to vanish locally and proved it only in characteristic p or for n ≤ 1. Skip.

## One next step

Open the PDF at page 4 and read only Theorem 1.6 and the paragraph before it. That single isomorphism is the seed of the whole paper.
