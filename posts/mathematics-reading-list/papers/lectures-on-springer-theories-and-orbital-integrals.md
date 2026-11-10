source: https://math.mit.edu/~zyun/ZhiweiYunPCMIv2.pdf
slogan: An orbital integral over a local function field counts points on an affine Springer fibre, so geometry can compute it.
basis: the introduction and the main theorem statements

## Before you start

These 62 pages use loop groups, ind-schemes, ℓ-adic cohomology and, in one section, perverse sheaves. The likely feeling is shame at missing background. You are allowed to have it. Yun says that knowing GL<sub>n</sub> and SL<sub>n</sub> is enough for most of the notes, and that you may read the cohomology as ordinary singular cohomology over ℂ. If you want to see why the fundamental lemma became a question about varieties, this is the bridge. Enjoy the SL<sub>2</sub> pictures first. Coverage comes second.

## The story

The trace formula is built from orbital integrals on p-adic groups. They are hard to compute and harder to compare between groups. Springer had found earlier that the Weyl group W acts on the cohomology of the variety of Borel subgroups containing a nilpotent element, even though W does not act on the variety. Yun's notes climb a ladder of three "fibres". Springer fibres live over a field k. Affine Springer fibres live over the local field F = k((t)). Hitchin fibres live over a curve. The middle rung is the key one. An orbital integral of the unit lattice function counts lattices fixed by an element γ, and those lattices are the points of an affine Springer fibre. Counting points is a trace of Frobenius on cohomology. So an analytic integral becomes a geometric object, and this is where the proof of the fundamental lemma starts.

## Main definitions

**Springer fibre.** For a nilpotent element e of the Lie algebra 𝔤 of G, the Springer fibre B<sub>e</sub> is the closed subvariety of the flag variety made of the Borel subgroups whose Lie algebra contains e in its nilpotent radical. It is the fibre over e of the Springer resolution T\*B → N.

**Affine Springer fibre.** Let F = k((t)) with ring of integers O<sub>F</sub> = k[[t]]. For a regular semisimple γ in 𝔤(F), X<sub>γ</sub> is the set of cosets gG(O<sub>F</sub>) in the affine Grassmannian G(F)/G(O<sub>F</sub>) with Ad(g<sup>−1</sup>)γ in 𝔤(O<sub>F</sub>).
- For GL<sub>n</sub>: lattices in F<sup>n</sup> that γ maps into themselves.
- Symmetry: a lattice Λ<sub>γ</sub> of cocharacters of the centraliser G<sub>γ</sub> acts on X<sub>γ</sub> by translation.

**Orbital integral.** For a locally constant, compactly supported φ on 𝔤(F), O<sub>γ</sub>(φ) is the integral of φ(Ad(g<sup>−1</sup>)γ) over G<sub>γ</sub>(F)\G(F). Here k is finite.
- Stable version: SO<sub>γ</sub>(φ) is the sum of O<sub>γ′</sub>(φ) over the G(F)-orbits of elements γ′ stably conjugate to γ.

## Main results

**Theorem (Springer correspondence; Theorem 1.5.1).** Let k be algebraically closed of large characteristic. For each nilpotent e, W acts on H<sup>\*</sup>(B<sub>e</sub>), and the action commutes with that of the component group A<sub>e</sub> of the centraliser. Each irreducible representation of W occurs in the top cohomology H<sup>2d</sup>(B<sub>e</sub>), d = dim B<sub>e</sub>, as the multiplicity space of a unique pair (e, ρ) up to conjugacy, with ρ an irreducible representation of A<sub>e</sub>. This gives an injection from Irr(W) into the set of such pairs.
- Step 1: the Grothendieck alteration is a W-torsor over regular semisimple elements and is a small map.
- Step 2: so the pushforward sheaf is a middle extension and inherits a W-action, which restricts to nilpotent elements (Theorem 1.5.7).

**Theorem (finiteness; Theorem 2.5.2, essentially Kazhdan and Lusztig).** For γ regular semisimple, X<sub>γ</sub> is a scheme locally of finite type over k. There is a projective subscheme Z whose Λ<sub>γ</sub>-translates cover X<sub>γ</sub>. The action of Λ<sub>γ</sub> is free and the quotient Λ<sub>γ</sub>\X<sub>γ</sub> is a proper algebraic space. Bezrukavnikov's formula (Theorem 2.5.12) gives its dimension as (val Δ(γ) − c(γ))/2.

**Theorem (orbital integral as point count; Theorem 3.3.4).** Let G = GL<sub>n</sub>, k finite and γ regular semisimple in 𝔤(F). Normalise Haar measure so the maximal compact subgroup of G<sub>γ</sub>(F) has volume 1. Then O<sub>γ</sub> of the characteristic function of 𝔤(O<sub>F</sub>) equals the number of k-points of the quotient of X<sub>γ</sub> by a lattice. By the Grothendieck–Lefschetz formula this is an alternating sum of traces of Frobenius on its cohomology.

**Theorem (stable orbital integrals; Theorem 3.4.8, a special case of results of Goresky, Kottwitz, MacPherson and of Ngô).** For G split, the stable orbital integral of the same function equals, up to a volume factor, the alternating trace of Frobenius on the "stable part" of the cohomology of Λ<sub>γ</sub>\X<sub>γ</sub>. The stable part is the invariants under a finite component group.

## Note, then ignore

- Reduced structure. The natural functor defining the affine Springer fibre is non-reduced, and X<sub>γ</sub> means its reduction. Point counts do not see this. Safe to skip on a first reading.
- Two W-actions. They differ by the sign character. Yun's convention sends the trivial representation to the regular nilpotent. Springer's paper uses the other. Safe to skip at first.
- Large characteristic. Lecture I assumes char(k) is large compared to G so that Lie-theoretic facts hold. Safe to skip at first.
- Two lattices. Over a finite k, Theorem 3.3.4 uses a Galois-stable variant of Λ<sub>γ</sub>. The idea is the same. Safe to skip at first.
- Lecture IV. Hitchin fibres and Ngô's product formula (Theorem 4.4.2) glue affine Springer fibres along a curve. Safe to skip at first.

## One next step

Open §0.1 and study the three-column table (Springer, affine Springer, Hitchin). Then look at example 2.2.7, where X<sub>γ</sub> is a projective line.
