source: https://arxiv.org/pdf/2201.11190
slogan: Over an imaginary quadratic field the number of cusp forms of weight k grows at most linearly in k, and base change shows that linear is right.
basis: the introduction and the main theorem statements

## Before you start

The statement is a dimension bound anyone can read. The proof runs through completed homology, Iwasawa algebras and microlocalisation of enveloping algebras. The likely feeling is a let-down: a clean question that vanishes into machinery you do not own. It is fine to feel that and to stay with the statement. If you have wondered how many Bianchi modular forms there are, the first three pages tell you, with the history. Take those pages for enjoyment. The 25 pages are short, but nothing obliges you to reach the end.

## The story

For a totally real field, Shimizu showed that the space of cusp forms of weight k on SL<sub>2</sub> grows like a constant times the product of the weights. Once the field has a complex place, the trace formula stops giving a main term. It only says the dimension is smaller than that product. For an imaginary quadratic field the trivial bound is k², base change from classical forms gives at least order k, and experiments suggested k is the truth. Marshall saved a power k<sup>1/3</sup> and Hu saved k<sup>1/2</sup>, both through Emerton's completed homology, which packages all levels at p into one module over an Iwasawa algebra. Fu saves a full power of k. His idea is to push that module into a completed enveloping algebra, where Casimir operators are central, and count there with a Poincaré-Birkhoff-Witt filtration.

## Main definitions

**Cohomological cusp forms S<sub>k</sub>(K<sub>f</sub>).** Let F be a number field with r<sub>1</sub> real and r<sub>2</sub> complex places, K<sub>f</sub> a compact open subgroup of SL<sub>2</sub> over the finite adèles, and k a tuple of positive even integers, one per infinite place. S<sub>k</sub>(K<sub>f</sub>) is the space of cohomological cusp forms of weight k and level K<sub>f</sub>.
- Size function: Δ(k) is the product of k<sub>i</sub> over real places times the product of k<sub>i</sub>² over complex places.
- Bianchi case: F imaginary quadratic and k = (k). The forms sit in the first compactly supported cohomology of a hyperbolic 3-manifold.

**Completed homology.** Fix the level away from p and let the level at p shrink. The inverse limit of homology with ℤ/p<sup>s</sup> coefficients, tensored with a p-adic field K, is a finitely generated module over the Iwasawa algebra K[[G]] of a compact open subgroup G at p.

**Generic element.** The completed enveloping algebra Û(𝔤) is the p-adic completion of U(𝔤). Its centre contains Casimir operators Δ<sub>1</sub>, ..., Δ<sub>r</sub>. Setting Δ<sub>i</sub> = λ<sub>i</sub> for λ ∈ ℤ<sub>p</sub><sup>r</sup> gives a quotient Û(𝔤)<sub>λ</sub>. An element is generic if its image in every such quotient is non-zero.

## Main results

**Theorem (degree-one saving; Theorem 1.2).** If F is not totally real, then for fixed K<sub>f</sub>, dim S<sub>k</sub>(K<sub>f</sub>) is at most a constant times Δ(k) divided by the smallest k<sub>i</sub>. For parallel weight k = (k, ..., k) this is O(k<sup>r−1</sup>), where r is the degree of F.
- Consequence (Corollary 1.3): for F imaginary quadratic, dim S<sub>k</sub>(K<sub>f</sub>) ≤ c · k, which proves Conjecture 1.1 of the paper. For small enough K<sub>f</sub> the compactly supported cohomology in degrees 1 and 2 has dimension of exact order k.
- Step: Emerton's spectral sequence reduces the bound to Theorem 1.4 below.

**Theorem (growth for Iwasawa modules; Theorem 1.4).** Let G be a product of r copies of the first congruence subgroup of SL<sub>2</sub>(ℤ<sub>p</sub>), W<sub>k</sub> the tensor product of the Sym<sup>k<sub>i</sub></sup>, and M a finitely generated ℚ<sub>p</sub>[[G]]-module of rank d. Then there is a polynomial p<sub>M</sub> of degree at most r − 1, with each variable to power at most 1, such that dim H<sub>0</sub>(G, M ⊗ W<sub>k</sub>) differs from d · Π(k<sub>i</sub> + 1) by at most p<sub>M</sub>(k), and dim H<sub>i</sub>(G, M ⊗ W<sub>k</sub>) ≤ p<sub>M</sub>(k) for i ≥ 1.
- Step 1: degree shifting reduces to H<sub>0</sub> of a cyclic torsion module.
- Step 2: pass to Û(𝔤) and apply Theorems 1.5 and 1.6.

**Theorem (injectivity; Theorem 1.5).** For every λ ∈ ℤ<sub>p</sub><sup>r</sup>, the map ℚ<sub>p</sub>[[G]] → Û(𝔤)<sub>λ</sub> is injective. So every non-zero element of the Iwasawa algebra is generic.

**Theorem (generic torsion modules; Theorem 1.6).** Let M̂ be a cyclic module over the completed enveloping algebra whose generator is killed by a generic element. Then dim Hom(M̂, W<sub>k</sub>) ≤ p(k) for a polynomial p of the same kind, of degree at most r − 1.
- Method: estimate the growth of a Poincaré-Birkhoff-Witt filtration on M̂.

## Note, then ignore

- "Sharp" is conditional on level. The matching lower bound comes from base change and needs mild conditions on K<sub>f</sub>. Safe to skip on a first reading.
- Factor 2<sup>r<sub>1</sub></sup>. The Eichler-Shimura comparison gives cohomology of dimension 2<sup>r<sub>1</sub></sup> times dim S<sub>k</sub>. It is bookkeeping. Safe to skip.
- Only the congruence subgroup. Marshall and Hu use the action of all of SL<sub>2</sub>(F<sub>p</sub>). Fu uses only the first congruence subgroup. Safe to skip.
- Theorem 1.5 is not new. The paper says Ardakov pointed out that it follows from Ardakov-Wadsley. The author keeps his own proof. Safe to skip.
- Shifted weights. W<sub>k</sub> means Sym<sup>k<sub>i</sub>−2</sup> in the automorphic part and Sym<sup>k<sub>i</sub></sup> in Theorem 1.4. Safe to skip.

## One next step

Open the arXiv PDF at page 2 and read from Conjecture 1.1 down to Corollary 1.3 on page 3.
