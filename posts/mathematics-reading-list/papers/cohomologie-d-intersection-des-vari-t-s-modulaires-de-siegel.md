source: https://arxiv.org/pdf/1806.09910
slogan: Frobenius and Hecke traces on the intersection cohomology of Siegel modular varieties equal a sum of stable trace formulas for endoscopic groups.
basis: the introduction and the main theorem statements

## Before you start

This paper is 66 pages in French, it continues an earlier paper and runs parallel to a book, and it speaks the language of endoscopy and the trace formula. The likely feeling is shame at missing background, in two languages at once. That feeling is allowed. Almost nobody arrives with all of this in hand. If you want to see how the cohomology of a Shimura variety meets automorphic forms, the introduction states the whole result in one display. Enjoy that formula first. The rest can wait.

## The story

Ihara, Langlands and Kottwitz proposed a way to compute the Galois action on the cohomology of a Shimura variety. Count fixed points of Frobenius times a Hecke correspondence, then match the count with the Arthur-Selberg trace formula. For compact varieties Kottwitz showed how to "stabilise" the count, that is, rewrite it as a sum of stable distributions on the group and its endoscopic groups. Siegel modular varieties are not compact. Their natural cohomology is the intersection cohomology of the Satake-Baily-Borel compactification, and the boundary adds terms indexed by Levi subgroups. Morel's earlier work gave the fixed point formula with these terms. Here she stabilises them by applying Kottwitz's method to each Levi subgroup. The hard part is the place at infinity. The outcome is the formula Kottwitz had conjectured.

## Main definitions

**Siegel modular variety S<sup>K</sup>.** The Shimura variety of the group G = GSp<sub>2n</sub> over ℚ with a neat level K ⊂ G(𝔸<sub>f</sub>). It parametrises principally polarised abelian varieties of dimension n with level structure. Its reflex field is ℚ.

**Intersection cohomology IH\*(S<sup>K</sup>, V).** The intersection cohomology of the Satake-Baily-Borel compactification of S<sup>K</sup>, with coefficients coming from an algebraic representation V of G. Hecke operators and Gal(ℚ̄/ℚ) both act on it.

**Elliptic endoscopic triple (H, s, η<sub>0</sub>).** A quasi-split group H with data that embed its dual group into the dual group of G as the connected centraliser of a semisimple element s. For symplectic groups, orthogonal groups appear as factors of H.
- For G = GSp<sub>4</sub>: the relevant H is GSO<sub>4</sub>.
- For G = GSp<sub>6</sub>: the relevant H is G(Sp<sub>2</sub> × SO<sub>4</sub>).

**Stable trace formula ST<sup>H</sup>.** The geometric side of the stable trace formula on H, in the simple form that Arthur gave, and Kottwitz stabilised, for functions that are stable cuspidal at infinity.

## Main results

**Theorem (Kottwitz's conjectured formula; Théorème 5.3.2 and Corollaire 5.3.3).** Let p be a prime with K = G(ℤ<sub>p</sub>)K<sup>p</sup>, and let f<sup>∞</sup> be a Hecke function that is the unit at p. Then for every large enough integer j, the trace of Frob<sub>p</sub><sup>j</sup> × f<sup>∞</sup> on IH\*(S<sup>K</sup>, V) equals Σ ι(G, H) ST<sup>H</sup>(f<sub>H</sub><sup>(j)</sup>). The sum runs over elliptic endoscopic triples of G such that H<sub>ℝ</sub> has an elliptic maximal torus. The functions f<sub>H</sub><sup>(j)</sup> are determined by f<sup>∞</sup>, j and V.
- Step 1: start from the fixed point formula of the earlier paper and book (Théorème 1.2.1).
- Step 2: stabilise the boundary terms Levi by Levi, with local computations at p (section 4) and at infinity (section 3).

**Corollary (local L-function for n = 2, 3; Proposition 6.2).** For G = GSp<sub>4</sub> or GSp<sub>6</sub>, the logarithm of the local factor at p of the L-function of IH\*(S<sup>K</sup>, V) is an explicit sum of logarithms of automorphic L-functions, shifted by d/2 with d = dim S<sup>K</sup>. One sum runs over representations of G(𝔸<sub>f</sub>) and one over representations of H(𝔸<sub>f</sub>). This is unconditional. I did not check the definitions of the coefficients, which are in section 6.

**Claim (the general case is conditional).** The introduction says that a full description of the intersection cohomology would follow from the formula together with Arthur's conjectures for general symplectic groups, as Kottwitz showed. The paper does not assume these and so proves less.

## Note, then ignore

- Large j. The formula holds only for high powers of Frobenius. That is enough to pin down the L-function. Skip it.
- Fundamental lemma. The stabilisation uses the fundamental lemma and some twisted cases, proved by Laumon-Ngô, Ngô and Waldspurger. Treat it as a black box and skip it.
- Kottwitz's unpublished manuscript. The stable geometric side comes from an unpublished paper that treats only groups with simply connected derived group. The author says the general case should follow by the same methods. Note it and skip it.
- The appendix. Section 7, from page 49, holds combinatorial lemmas for the computation at infinity. The introduction calls this the most technical part. Skip it on a first reading.
- Signs and normalisations. Section 5.1 fixes Haar measures and transfer factors. They matter only if you compute. Skip them.

## One next step

Open the PDF at page 2 and read only the displayed Théorème in the introduction and the paragraph after it.
