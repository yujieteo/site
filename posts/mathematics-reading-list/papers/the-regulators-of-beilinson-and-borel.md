source: https://www.icmat.es/miembros/burgos/files/brbr.pdf
slogan: Borel's regulator is exactly twice Beilinson's, so Borel's theorem on zeta values is a proved case of Beilinson's conjectures.
basis: the introduction and the main theorem statements

## Before you start

The contents page lists simplicial objects, Hopf algebras, Chern–Weil theory, Lie algebra cohomology and continuous group cohomology. The feeling this tends to raise is shame at not already knowing five subjects. It makes sense to feel that. Burgos names the same problem himself: he calls it a maze of cohomology theories, and wrote Chapters 2 to 6 as a guide for it. If you want to see the class number formula continue to higher K-groups, the introduction alone gives you that. Take pleasure in the four pages first.

## The story

Dirichlet mapped the units of a number field k to a real vector space by logarithms. The image is a lattice, and its covolume, the regulator, appears in the leading term of ζ<sub>k</sub> at s = 0. The units are K<sub>1</sub> of the ring of integers. Borel did the same for K<sub>2p−1</sub> and showed that the covolume is a rational multiple of the leading term of ζ<sub>k</sub> at s = 1−p, up to a power of π. Beilinson then defined regulators for all motives by Chern classes into Deligne–Beilinson cohomology and conjectured the same link with L-values. Is Borel's theorem a case of Beilinson's conjecture? Only if the two maps agree. Beilinson sketched a proof. Rapoport got agreement up to a rational number. Burgos pins down the factor: it is 2.

## Main definitions

**Borel's regulator map.** For the ring of integers 𝒪 of a number field with r<sub>1</sub> real and 2r<sub>2</sub> complex embeddings, and p ≥ 2, a homomorphism K<sub>2p−1</sub>(𝒪) → V<sub>p</sub> to a real vector space of dimension d<sub>p</sub>. It comes from a class in the continuous cohomology of the Lie group, pulled back to the discrete group SL<sub>n</sub>(𝒪).
- p odd: d<sub>p</sub> = r<sub>1</sub> + r<sub>2</sub>.
- p even: d<sub>p</sub> = r<sub>2</sub>.

**Renormalised Borel regulator r<sub>Bo</sub>.** Borel's original map with a changed target lattice, so that the stray power of π disappears and the map factors through the K-theory of ℂ. This is the version in most of the literature (Definition 9.19).

**Beilinson's regulator map r<sub>Be</sub>.** The map K<sub>2p−1</sub>(𝒪) → H<sup>1</sup><sub>D</sub>(X<sub>ℝ</sub>, ℝ(p)) induced by the Chern character from higher K-theory to real Deligne–Beilinson cohomology, where X = Spec 𝒪. The target carries a natural lattice, so the image has a covolume.

**Van Est isomorphism.** An isomorphism between the continuous cohomology of a Lie group and a relative Lie algebra cohomology. It lets one write both regulator classes as explicit Lie algebra cocycles.

## Main results

**Theorem (Borel, as quoted in Chapter 1).** The image of K<sub>2p−1</sub>(𝒪) under Borel's map is a lattice in V<sub>p</sub>, so K<sub>2p−1</sub>(𝒪) has rank d<sub>p</sub>. The covolume equals π<sup>−d<sub>p</sub></sup> times the leading coefficient of ζ<sub>k</sub>(s) at s = 1−p, up to a non-zero rational number. Here the leading coefficient is the limit of ζ<sub>k</sub>(s)(s+p−1)<sup>−d<sub>p</sub></sup>.

**Theorem (comparison; Theorem 10.9).** Let Bo<sub>p</sub> and Be<sub>p</sub> be the classes in H<sup>2p−1</sup><sub>cont</sub>(GL<sub>n</sub>(ℂ), ℝ(p−1)) that define the renormalised Borel regulator and the Beilinson regulator, for n and 2p in the stable range. Then Bo<sub>p</sub> = 2·Be<sub>p</sub>. Hence r<sub>Bo</sub> = 2·r<sub>Be</sub>.
- Step 1: take the explicit representative of Bo<sub>p</sub> in Lie algebra cohomology of 𝔤𝔩<sub>n</sub>(ℂ) from Chapter 9.
- Step 2: compute Be<sub>p</sub> in the same group, using the first-order neighbourhood of the identity in the simplicial scheme B<sub>•</sub>GL<sub>n</sub>(ℂ).

**Theorem (key ingredient; Theorems 8.12 and 8.15).** The Chern–Weil morphism and the van Est isomorphism have explicit descriptions of very similar form. Both rest on writing differential forms as functions on a simplicial scheme modulo an ideal, which extends the fact that 1-forms are the ideal of the diagonal modulo its square. I did not read the precise statements.

## Note, then ignore

- Index shift. Burgos's R′<sub>Bo,p</sub> is R<sub>p−1</sub> in Borel's paper (Remark 1.1). It matters only when you compare formulas across sources. Safe to skip on a first reading.
- Two Borel regulators. The original has an extra π<sup>−d<sub>p</sub></sup> and does not factor through K-theory of ℂ. The renormalised one does. Know that both exist, then skip.
- "Up to a rational number". Beilinson's regulator number is defined only up to ℚ<sup>×</sup> in his general setting. The factor 2 concerns the maps, where the comparison is exact. Safe to skip.
- Small cosimplicial algebras. Chapter 7 is Beilinson's device for the comparison, following Rapoport. It is a tool for one proof. Safe to skip.
- Stable range. The classes live on GL<sub>n</sub> for n large relative to p, where cohomology stops changing. Safe to skip.

## One next step

Open the PDF at Chapter 1 and read from "Let us start recalling Dirichlet's regulator" to formula (1.2). That is one page.
