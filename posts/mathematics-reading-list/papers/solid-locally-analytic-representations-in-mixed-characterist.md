source: https://arxiv.org/pdf/2510.13673
slogan: Binomial expansions replace Taylor series, so locally analytic representations of p-adic Lie groups make sense even when p is not invertible.
basis: the abstract and introduction

## Before you start

The rings here have names like ℤ<sub>p</sub>[[X]]⟨p/X⟩[1/X], and the proofs rest on solid condensed mathematics. The likely feeling is unease at the notation, a sense that you have walked into the middle of a conversation. That is a reasonable thing to feel. If you are curious how "analytic" can mean anything in characteristic p, the first two pages answer that with one character and one formula. Read those for enjoyment. The other 49 pages are there if you want them.

## The story

A representation of a p-adic Lie group on a ℚ<sub>p</sub>-Banach space is locally analytic when its orbit maps have convergent Taylor series. This is a standard tool in p-adic Hodge theory. But Taylor series divide by n!, so the definition breaks when p is not invertible. Take the character x ↦ (1 + T)<sup>x</sup> of ℤ<sub>p</sub>. On small discs it is locally analytic. On "pseudorigid" discs near the characteristic p boundary, p is no longer a unit and the Taylor series is meaningless. The way out is Amice's theorem: a function is locally analytic exactly when its coefficients in the binomial basis decay exponentially. The binomial expansion Σ T<sup>n</sup>·(x choose n) needs no division. Porat takes this as the definition and rebuilds the solid theory over such rings.

## Main definitions

**Banach pair.** A complete Tate Huber pair (B, B<sup>+</sup>) with a map from (ℤ<sub>p</sub>, ℤ<sub>p</sub>) (Definition 3.1). It has a topologically nilpotent unit ϖ, and B<sup>+</sup> is ϖ-adically complete.
- Examples: ℚ<sub>p</sub>, 𝔽<sub>p</sub>((T)), and ℤ<sub>p</sub>[[X]]⟨p/X⟩[1/X].
- The paper also asks for a bound on the "slope", which compares p with ϖ, and that the pair be residually of finite type.

**Iwasawa algebra and analytic distributions.** For a compact p-adic Lie group G, the Iwasawa algebra B<sub>■</sub>[G] is the limit of the group rings B<sub>■</sub>[G/N] over open normal subgroups N. Its solid modules are the solid B-modules with continuous G-action. Binomial expansions define rings C<sup>h-an</sup>(G, B) of analytic functions and D<sup>h-an</sup>(G, B) of analytic distributions, indexed by a radius parameter h.

**h-analytic and locally analytic vectors.** For V in the derived category D(B<sub>■</sub>[G]), the h-analytic vectors are V<sup>h-an</sup> = RHom over B<sub>■</sub>[G] from B to C<sup>h-an</sup>(G, B) ⊗ V. V is h-analytic if V<sup>h-an</sup> → V is an isomorphism. The locally analytic vectors V<sup>la</sup> are the colimit of V<sup>h-an</sup> over h.

## Main results

All statements assume G is a compact p-adic Lie group and B satisfies the paper's conditions.

**Theorem (analytic representations are modules; Theorem 1.4, proved as Theorem 6.17).** Solid h-analytic representations form a full subcategory of solid B<sub>■</sub>[G]-modules, and this subcategory equals the category of solid modules over D<sup>h-an</sup>(G, B). A complex is h-analytic if and only if each of its cohomology groups is.

**Theorem (cohomology sees only analytic vectors; Theorem 1.5, proved as Theorem 6.19).** For every C in D(B<sub>■</sub>[G]), the group cohomology RHom(B, C) over B<sub>■</sub>[G] equals RHom(B, C<sup>la</sup>).
- Consequence: a spectral sequence from the cohomology of the derived locally analytic vectors of V to the cohomology of V.
- Consequence: if the higher derived locally analytic vectors vanish, then H<sup>i</sup>(G, V) = H<sup>i</sup>(G, V<sup>la</sup>) for all i.

**Theorem (Lazard comparison; Theorem 1.8, proved as Theorem 6.9).** If C is h-analytic, then RHom(B, C) is the same computed over B<sub>■</sub>[G] or over D<sup>h-an</sup>(G, B). Continuous and analytic cohomology agree.

**Theorem (semilinear case; Theorem 1.9).** Let G act on B, with the action locally analytic: for g in some open subgroup, g − 1 sends ϖ<sup>n</sup>B<sup>+</sup> into ϖ<sup>n+1</sup>B<sup>+</sup> for all n ≥ 0. Then the three theorems above hold for modules over the twisted rings, in which [g]·b = g(b)·[g].
- Step 1: for uniform G and suitable filtrations, the twisted and untwisted rings have the same associated graded ring.
- Step 2: graded arguments in the style of Schneider and Teitelbaum then reduce the semilinear case to the linear one.

## Note, then ignore

- The slope condition. A footnote in the introduction writes it as slope ≤ 1 and Remark 3.5 writes slope ≥ 1. The examples listed above satisfy it either way. Safe to skip on a first reading.
- Black square versus white square. The paper writes B<sub>■</sub> for the solid analytic ring of a Banach pair, built from a Huber pair as in Andreychev. Other texts write □. Safe to skip.
- Analytic ring conventions. Section 2 uses extremally disconnected sets and "uncompleted" analytic rings, an older convention than the light one. It does not change any statement here. Safe to skip.
- Twisted rings are not static in general. The semilinear group ring may live in the derived world. The author's own remark calls these rings nasty. Safe to skip.
- No Lie algebra yet. The operator log(1 + T) has an essential singularity at p = 0, so the usual Lie algebra action does not extend. The paper lists this as open. Safe to skip.

## One next step

Open the PDF at Section 1.1, "Motivation from an example", and compare equation (1), the Taylor expansion, with equation (2), the binomial expansion.
