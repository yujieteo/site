source: https://arxiv.org/pdf/hep-th/0604151
slogan: Electric-magnetic duality in four-dimensional gauge theory, reduced to a Riemann surface, becomes mirror symmetry of Hitchin's space and yields the geometric Langlands correspondence.
basis: the introduction and the main theorem statements

## Before you start

This is 231 pages of quantum field theory by two physicists. The introduction assumes supersymmetric gauge theory, sigma-models, mirror symmetry and branes. If you are not a physicist, the feeling to expect is that of an outsider reading over someone's shoulder, with some worry that nothing here counts as proof. That worry is fair, and you can keep it. The paper offers a reason why the dual group appears at all, and reasons are pleasant to have. Read the five-page introduction as a story. Whether you go further is a separate question for another day.

## The story

In 1976 Goddard, Nuyts and Olive found that magnetic charges in a gauge theory with group G live in the weight lattice of a second group. Atiyah noticed that this group is the Langlands dual. Montonen and Olive conjectured a duality: the theory for G at coupling e matches the theory for the dual group at inverted coupling. The natural home for it is N = 4 super Yang-Mills theory. Kapustin and Witten twist that theory to make it topological, then put it on a product of two surfaces and shrink one of them, a Riemann surface C. What remains is a two-dimensional sigma-model whose target is Hitchin's moduli space of Higgs bundles on C. The four-dimensional duality becomes mirror symmetry between the Hitchin spaces of G and its dual. Line operators become Hecke operators, and the branes they fix become Hecke eigensheaves.

## Main definitions

**Twisted N = 4 theory and the canonical parameter.** Twisting replaces the rotation group by a subgroup mixed with the internal symmetry, so that one supercharge is a scalar on any four-manifold. This gives a family of topological field theories labelled by t. The authors show that observables depend on t and the coupling τ only through one combination Ψ (equation 3.50).
- At t = ±i, a solution of the supersymmetric equations gives a flat connection A + iφ for the complexified group G<sub>ℂ</sub>.

**Hitchin's moduli space M<sub>H</sub>(G, C).** The moduli space of stable Higgs bundles on C. It is hyper-Kähler, with complex structures I, J, K. In structure I it parametrises Higgs bundles. In structure J it parametrises homomorphisms π<sub>1</sub>(C) → G<sub>ℂ</sub>.
- Hitchin fibration: a map π: M<sub>H</sub> → B to a complex vector space, holomorphic in structure I, with Lagrangian fibres.

**Wilson and 't Hooft operators.** Line operators of electric and magnetic type. After reduction to two dimensions they act on branes of the sigma-model. They do not act on states.

**Eigenbrane.** A brane that a Wilson operator (electric eigenbrane) or an 't Hooft operator (magnetic eigenbrane) sends to, roughly, a multiple of itself.

## Main results

All four are physics arguments. The paper does not present them as proved theorems.

**Claim (physics argument; S-duality of the twisted theory, Sections 2 and 3.5).** The duality S exchanges G with its dual <sup>L</sup>G and acts by Ψ ↦ −1/(n<sub>g</sub>Ψ), where n<sub>g</sub> is 1 for simply-laced G, 2 for F<sub>4</sub>, Sp(k) and Spin(2k + 1), and 3 for G<sub>2</sub>. It exchanges Ψ = ∞ with Ψ = 0. The paper takes S-duality itself as an input conjecture.

**Claim (physics argument; mirror symmetry, Section 5).** Compactify on C. At Ψ = ∞ the theory is the B-model of M<sub>H</sub> in complex structure J. S-duality maps it to the A-model of the Hitchin space of the dual group in complex structure K.
- The duality maps one Hitchin fibration to the other and acts by T-duality on the fibres.

**Claim (physics argument; eigenbranes, Sections 6 and 8 to 10).** S-duality exchanges electric and magnetic eigenbranes. Electric eigenbranes correspond to homomorphisms from π<sub>1</sub>(C) to the complexified dual group. 't Hooft operators correspond to geometric Hecke operators that act on Higgs bundles.

**Claim (physics argument; D-modules, Section 11).** M<sub>H</sub> carries a canonical coisotropic brane. Through it, each magnetic eigenbrane gives a D-module on the moduli space M(G, C) of holomorphic G-bundles on C. This is the link to the usual statement with Hecke eigensheaves.

## Note, then ignore

- Compact G. The authors take G compact and write G<sub>ℂ</sub> for its complexification. Most mathematical texts take G complex from the start. Safe to skip on a first reading.
- Antihermitian fields. Section 2 takes gauge fields antihermitian, against the usual physics convention, to avoid factors of i. Safe to skip.
- The factor n<sub>g</sub>. For groups that are not simply-laced, S acts by τ ↦ −1/(n<sub>g</sub>τ). The main duality compares Ψ = ∞ with Ψ = 0, so the factor drops out there. Safe to skip.
- Unramified only. The introduction says the paper treats only the unramified case, and does not explain the conformal field theory approach. Safe to skip.
- Lorentz and Euclidean signature. The authors switch between them, Euclidean for topological questions and Lorentz for unitarity. Safe to skip.

## One next step

Open the PDF at page 4 and read the single paragraph that starts "To summarize this paper in the briefest possible terms". It lists the six main ideas with their section numbers.
