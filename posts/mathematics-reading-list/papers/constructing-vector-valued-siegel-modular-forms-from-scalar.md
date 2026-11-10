source: https://arxiv.org/pdf/1409.7176
slogan: When a scalar Siegel modular form vanishes on a product of smaller half-spaces, its first non-zero Taylor term there is a vector-valued modular form.
basis: the introduction and the main theorem statements

## Before you start

The paper is 21 pages, and after page 5 it is mostly worked examples with weights such as (2, 0, 0, 0, 10) and theta-series computations. The likely feeling is a fear of drowning in indices, with some unease if vector-valued forms are new to you. Both are reasonable reactions to this notation. You can keep them and still read. If you have wanted to see a vector-valued Siegel form written down, the method here fits in one paragraph. Enjoy that paragraph. The examples are optional.

## The story

Scalar Siegel modular forms have explicit examples: theta series, Eisenstein series, lifts. Vector-valued forms on the full group Sp(2g, ℤ) are the natural objects, yet explicit ones are hard to find. Cléry and van der Geer use a simple device. The product of half-spaces H<sub>j</sub> × H<sub>g−j</sub> sits inside H<sub>g</sub> as block-diagonal matrices. Restrict a scalar form f of degree g to it and you get a tensor product of scalar forms of degrees j and g−j. If that restriction is zero, expand f in the off-diagonal coordinates, the normal directions. The lowest non-zero term is no longer scalar. It transforms by a representation of GL<sub>j</sub> × GL<sub>g−j</sub>, so it is a sum of tensor products of vector-valued forms. Applied to the Schottky form of degree 4, this produces the lowest-weight cusp forms in degrees 2 and 3, which the authors call siblings of Δ.

## Main definitions

**Vector-valued Siegel modular form.** Let Γ<sub>g</sub> = Sp(2g, ℤ) act on the Siegel upper half-space H<sub>g</sub>, and let ρ: GL<sub>g</sub> → GL(V) be a finite-dimensional complex representation. A form of weight ρ is a holomorphic f: H<sub>g</sub> → V with f((aτ+b)(cτ+d)<sup>−1</sup>) = ρ(cτ+d) f(τ) for all (a, b; c, d) ∈ Γ<sub>g</sub>.
- Scalar case: ρ = det<sup>k</sup> gives M<sub>k</sub>(Γ<sub>g</sub>).
- Weight vector: for irreducible ρ of highest weight a<sub>1</sub> ≥ … ≥ a<sub>g</sub>, the paper writes the weight as (a<sub>1</sub>−a<sub>2</sub>, …, a<sub>g−1</sub>−a<sub>g</sub>, a<sub>g</sub>). In degree 2, weight (j, k) means Sym<sup>j</sup> ⊗ det<sup>k</sup>.

**Development along H<sub>j</sub> × H<sub>g−j</sub>.** Write τ ∈ H<sub>g</sub> in blocks with diagonal blocks τ′ ∈ H<sub>j</sub>, τ″ ∈ H<sub>g−j</sub> and off-diagonal block z. The development of f is its Taylor series f = Σ t<sub>r</sub>(f), where t<sub>r</sub>(f) is the part of degree r in the entries of z. "f vanishes to order r" means t<sub>i</sub>(f) = 0 for i &lt; r.

**Sibling of Δ.** An informal name for a cusp form that appears among the first few in a given low degree when cusp forms are ordered by Deligne weight. In degree 2 the Deligne weight of a form of weight (j, k) is j + 2k − 3. The first cases are χ<sub>10</sub>, χ<sub>12</sub> and χ<sub>6,8</sub>, with Deligne weights 17, 21 and 19.

## Main results

**Theorem (degree 1 + (g−1); Proposition 2.1).** Let f ∈ M<sub>k</sub>(Γ<sub>g</sub>) vanish along H<sub>1</sub> × H<sub>g−1</sub> to order exactly r. Then its lowest-order term is a non-zero f′ ⊗ f″, where f′ is an elliptic modular form of weight k + r and f″ is a form on Γ<sub>g−1</sub> of weight (r, 0, …, 0, k).
- Step 1: t<sub>r</sub>(f) is a section of Sym<sup>r</sup> of the conormal bundle, twisted by the weight-k line bundle.
- Step 2: pulled back to A<sub>1</sub> × A<sub>g−1</sub>, that bundle is a tensor product of the bundles whose sections are forms of these two weights.

**Theorem (general splitting; Proposition 2.2 and the text after it).** If f ∈ M<sub>k</sub>(Γ<sub>g</sub>) vanishes to order r along H<sub>j</sub> × H<sub>g−j</sub>, then projecting t<sub>r</sub>(f) to any isotypic component of Sym<sup>r</sup>(V<sub>j</sub> ⊗ V<sub>g−j</sub>) under GL<sub>j</sub> × GL<sub>g−j</sub> gives a vector-valued modular form. The component Sym<sup>r</sup> ⊗ Sym<sup>r</sup> gives a tensor product f′ ⊗ f″ with both weights of the shape (r, 0, …, 0, k).
- Beyond the first term: Proposition 2.3 says some components of t<sub>r+1</sub>(f) are modular too, namely those whose representation cannot arise from the non-zero part of t<sub>r</sub>(f) tensored with V<sub>j</sub> ⊗ V<sub>g−j</sub>.

**Theorem (Schottky form; Proposition 3.1).** Let J<sub>8</sub> be the Schottky form, a cusp form of weight 8 in degree 4. Along H<sub>2</sub> × H<sub>2</sub>, the term t<sub>4</sub>(J<sub>8</sub>) is a non-zero multiple of χ<sub>10</sub> ⊗ χ<sub>10</sub>, and the projection of t<sub>6</sub>(J<sub>8</sub>) to Sym<sup>2</sup> S<sub>6,8</sub>(Γ<sub>2</sub>) is a non-zero multiple of χ<sub>6,8</sub> ⊗ χ<sub>6,8</sub>. Along H<sub>3</sub> × H<sub>1</sub>, the term t<sub>4</sub>(J<sub>8</sub>) is a non-zero multiple of χ<sub>4,0,8</sub> ⊗ Δ, where χ<sub>4,0,8</sub> generates S<sub>4,0,8</sub>(Γ<sub>3</sub>).
- Step 1: representation theory lists where each term can land, and most of those spaces of cusp forms are zero.
- Step 2: a direct computation of coefficients shows the surviving term is not zero.

## Note, then ignore

- Two meanings of weight. The Deligne weight orders forms and is not the weight vector (j, k). It is used only to say which forms come "first". Safe to skip on a first reading.
- Odd terms vanish. For J<sub>8</sub> along H<sub>2</sub> × H<sub>2</sub>, a sign symmetry kills t<sub>i</sub> for odd i, which is why the orders are 4 and 6. Safe to skip.
- Conjectural dimensions. In degrees 5 and 7 the claim that a space of cusp forms has dimension 1 rests on conjectural dimension values of Chenevier, Renard and Taïbi. The forms themselves are constructed. Safe to skip.
- Open question. Question 2.4 asks for the ideal of scalar forms vanishing on H<sub>j</sub> × H<sub>g−j</sub>. For g = 2, j = 1 it is generated by χ<sub>10</sub>. Other cases are open in the paper. Safe to skip.
- Hecke operators. An appendix collects facts on Hecke operators in degrees 2 and 3, used to compute eigenvalues of the new forms. Safe to skip.

## One next step

Open the paper at Section 2 and read the paragraph around formula (1) on page 3, then the statement of Proposition 2.1.
