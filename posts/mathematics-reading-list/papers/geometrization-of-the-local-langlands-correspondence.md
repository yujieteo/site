source: http://www.math.uni-bonn.de/people/scholze/Geometrization.pdf
slogan: Bundles on the Fargues–Fontaine curve form a stack whose sheaves are representations of p-adic groups, and Hecke operators there produce L-parameters.
basis: the introduction and the main theorem statements

## Before you start

The PDF has 350 pages, and its reputation is larger than that. The likely feeling is overwhelm, with a quiet fear that you are not the intended reader. Both can sit beside you while you read. Nothing here needs to be earned. If you want to see why the Weil group appears in the Langlands correspondence at all, the introduction answers that in about 30 pages of prose. Read those for interest. The other 320 pages will keep.

## The story

The local Langlands correspondence asks for a map from irreducible smooth representations π of a p-adic group G(E) to L-parameters, which are maps from the Weil group W<sub>E</sub> to the dual group. For general G no construction was known. Over a function field of a curve, geometric Langlands gets Galois data from Hecke operators on the stack of G-bundles. A local field has no curve. Fargues' idea was that the Fargues–Fontaine curve can play this part. The book builds the stack Bun<sub>G</sub> of G-bundles on that curve. Its points are Kottwitz' set B(G), and the stratum of the trivial bundle is the classifying stack of G(E). So a representation of G(E) is a sheaf on Bun<sub>G</sub>. Hecke operators act on such sheaves and carry an action of W<sub>E</sub>. V. Lafforgue's excursion operators then read off a parameter.

## Main definitions

Here E is a non-archimedean local field with residue field 𝔽<sub>q</sub>, G is a reductive group over E, and ℓ ≠ p.

**Fargues–Fontaine curve.** For a perfectoid space S of characteristic p, the curve X<sub>S</sub> is an adic space over E, formed as a quotient by Frobenius of a "product" of S with Spa E (Definition I.2.2).
- There is no single absolute curve. Only the family over all S is well defined.

**Bun<sub>G</sub>.** The functor that sends S to the groupoid of G-torsors on X<sub>S</sub> (Definition I.2.4).

**Div<sup>1</sup>.** The space of degree 1 Cartier divisors on the curve. It is not the curve itself. Its fundamental group is W<sub>E</sub>, and that is how the Weil group enters.

**Hecke operators.** For a representation V of the dual group, the operator T<sub>V</sub> modifies a G-bundle at a point of Div<sup>1</sup>, with the type of modification bounded by V. It sends sheaves on Bun<sub>G</sub> to sheaves on Bun<sub>G</sub> × Div<sup>1</sup>.

## Main results

**Theorem (geometry of Bun<sub>G</sub>; Theorems I.2.6, I.2.7, I.4.1).** Bun<sub>G</sub> is a stack for the v-topology. Its points are in bijection with B(G), and basic elements match semistable bundles. It has a stratification into locally closed strata Bun<sub>G</sub><sup>b</sup>. Each stratum is the classifying stack of a group that extends the locally profinite group G<sub>b</sub>(E) by a "unipotent group diamond".

**Theorem (sheaves on Bun<sub>G</sub>; Theorem I.5.1).** Let Λ be a ℤ<sub>ℓ</sub>-algebra. The category D(Bun<sub>G</sub>, Λ) has a semiorthogonal decomposition into the categories D(Bun<sub>G</sub><sup>b</sup>, Λ), and each of those is the derived category of smooth representations of G<sub>b</sub>(E) on Λ-modules. D(Bun<sub>G</sub>, Λ) is compactly generated.

**Theorem (the Weil group appears; Theorems I.2.11 and I.6.3).** Sheaves on Bun<sub>G</sub> × Div<sup>1</sup> with ℚ̄<sub>ℓ</sub>-coefficients are the same as W<sub>E</sub>-equivariant sheaves on Bun<sub>G</sub>. Geometric Satake holds in this setting, and the group it produces is the Langlands dual group, with the usual W<sub>E</sub>-action up to an explicit cyclotomic twist.
- Step 1: Satake makes V ↦ T<sub>V</sub> monoidal.
- Step 2: the first statement makes each T<sub>V</sub> carry a W<sub>E</sub>-action.

**Theorem (L-parameters; Proposition I.9.3 and Theorem I.9.6).** Assume ℓ is invertible in Λ or ℓ is very good for the dual group. Then the ring of functions on the stack of L-parameters maps canonically to the Bernstein centre of G(E). So every irreducible smooth π gets a semisimple L-parameter φ<sub>π</sub>. The map π ↦ φ<sub>π</sub> is the usual correspondence for tori, is compatible with parabolic induction, and for GL<sub>n</sub> agrees with the usual correspondence on supercuspidals.

**Conjecture (categorical local Langlands; Conjecture I.10.2).** For G quasi-split with fixed Whittaker data, compact objects of D(Bun<sub>G</sub>) should be equivalent to bounded coherent complexes with nilpotent singular support on the stack of L-parameters. The structure sheaf should go to the Whittaker sheaf.

## Note, then ignore

- The sheaf category. With torsion coefficients one uses étale sheaves. With ℤ<sub>ℓ</sub> or ℚ<sub>ℓ</sub> the book needs a "lisse" variant and solid modules. Safe to skip on a first reading.
- Square root of q. It trivialises the cyclotomic twist in Satake. A normalisation. Safe to skip.
- Semisimple parameters only. The construction gives φ<sub>π</sub> up to semisimplification, so it does not see the monodromy operator. Note it and move on.
- Independence of ℓ. That φ<sub>π</sub> does not depend on ℓ is Conjecture I.9.5, not a theorem. Safe to skip.
- Diamonds and v-stacks. These come from earlier work and make sense of products such as Spa ℚ<sub>p</sub> × Spa ℚ<sub>p</sub>. Safe to treat as a black box at first.

## One next step

Open the PDF and read only Section I.2, "The big picture", from Definition I.2.4 to Theorem I.2.7. That is about one page.
