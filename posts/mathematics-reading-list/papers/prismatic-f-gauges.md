source: https://www.math.ias.edu/~bhatt/teaching/mat549f22/lectures.pdf
slogan: Coefficients for prismatic cohomology are sheaves on one stack, so filtrations, Frobenius and duality become ordinary geometry on that stack.
basis: the introduction and the main theorem statements

## Before you start

These notes run to 155 pages and lean on stacks, derived categories and prismatic cohomology from the first page. The likely feeling is overwhelm, with some worry that you lack the prerequisites. That is a fair reaction to a research course on work still in progress, and you can let it be there. You may want to see how one geometric object can hold several p-adic cohomology theories at once. Chapter 1 shows that in nine pages. Enjoy those, and let the rest wait.

## The story

Complex varieties have mixed Hodge modules. Varieties over a field have ℓ-adic sheaves. Both are "coefficient systems": they give the right objects over a point, they push forward along maps, and they receive motives. Prismatic cohomology is an integral p-adic theory for p-adic formal schemes, and it lacked such coefficients. Bhatt's route is geometrization. Attach to a formal scheme X a stack X<sup>Syn</sup>, and define coefficients to be quasi-coherent complexes on it. The stack is built in three steps, and each step adds one piece of structure: crystals, then a filtration, then Frobenius. The simplest case shows the pattern. For a perfect field k, a filtered piece is a quotient of Spf W(k)[u,t]/(ut − p), and Frobenius glues its two open ends.

## Main definitions

**Prismatization X<sup>Δ</sup>.** A stack attached to a bounded p-adic formal scheme X. Quasi-coherent complexes on it are the prismatic crystals on X.
- Case X = Spec k, with k a perfect field of characteristic p: X<sup>Δ</sup> = Spf W(k).

**Filtered prismatization X<sup>N</sup>.** A larger stack whose quasi-coherent complexes are called prismatic gauges. It carries the Nygaard filtration, and it contains two open substacks, each isomorphic to X<sup>Δ</sup>.
- Case X = Spec k: X<sup>N</sup> is the quotient of Spf W(k)[u,t]/(ut − p) by the multiplicative group. The two opens are u ≠ 0 and t ≠ 0.

**Syntomification X<sup>Syn</sup> and F-gauges.** Glue the two copies of X<sup>Δ</sup> inside X<sup>N</sup> to get X<sup>Syn</sup>. A prismatic F-gauge on X is a quasi-coherent complex on X<sup>Syn</sup>, and a perfect one is a perfect complex.
- Case X = Spec k: the glueing uses the Frobenius of W(k), so X<sup>Syn</sup> is linear over ℤ<sub>p</sub> only, not over W(k).

**Breuil-Kisin twist O{1}.** A line bundle on X<sup>Syn</sup> that plays the part of the Tate twist. Its étale realization over Spf ℤ<sub>p</sub> is ℤ<sub>p</sub>(1).

## Main results

**Claim (F-gauges as an equaliser; Section 1.4).** For quasi-syntomic X, the category of F-gauges on X is the equaliser of the two restriction functors from gauges on X to crystals on X. The same holds for perfect objects.
- Step 1: this is the glueing description of X<sup>Syn</sup>, read on sheaves.
- Step 2: the constructions are functorial in X, so maps of formal schemes give pullback and pushforward of F-gauges. Pushforward keeps perfect objects only for proper smooth maps.

**Claim (syntomic cohomology; Remark 1.4.3).** For each integer i, the cohomology of O{i} on X<sup>Syn</sup> is the syntomic cohomology of X with coefficients ℤ<sub>p</sub>(i). In weight 1 it is the p-completed flat cohomology of the multiplicative group, shifted by one degree.

**Theorem (F-gauges over ℤ<sub>p</sub>; Theorem 1.3.1).** Let X = Spf ℤ<sub>p</sub> and let E be a perfect prismatic F-gauge on X. The notes present this as a target theorem. They say original results are joint work in progress with Jacob Lurie.
- Part 1: the cohomology of E on ℤ<sub>p</sub><sup>Syn</sup> is a perfect complex of ℤ<sub>p</sub>-modules. There is a symmetric monoidal étale realization T to Galois representations of ℚ<sub>p</sub>, and each cohomology group of T(E)[1/p] is crystalline.
- Part 2: there is a fibre sequence from the cohomology of E, to the Galois cohomology of T(E), to the ℤ<sub>p</sub>-dual of the cohomology of E\*{1}[2]. It refines Tate duality.

**Claim (the twist O{1}; Example 1.3.2).** For E = O{1}, the fibre sequence in degree 1 is the p-completion of 0 → ℤ<sub>p</sub><sup>×</sup> → ℚ<sub>p</sub><sup>×</sup> → ℤ → 0, where the last map is the valuation. The units are the ℤ<sub>p</sub>(1)-torsors over ℚ<sub>p</sub> that extend over ℤ<sub>p</sub>.

## Note, then ignore

- Draft status. The preface says the notes were being updated during Fall 2022 and asks for caution. Statement numbers may move. Safe to ignore while you read for the story.
- Quasi-syntomic hypothesis. It is a condition on singularities that keeps the cotangent complex well behaved. For noetherian X it means local complete intersection. Safe to skip on a first reading.
- Lisse objects only. Perfect F-gauges capture only the analogue of local systems, because integral p-adic cohomology lacks finiteness for open varieties. Safe to skip.
- T is not fully faithful. Being "crystalline" in this sense is extra structure on a Galois representation, not a property. This matters later, so skip it for now.
- Three naming schemes. Drinfeld calls the same stacks Σ, Σ′, Σ″, and Bhatt-Lurie call the first one WCart. Remark 1.5.1 gives the dictionary. Safe to skip until you read those papers.

## One next step

Open the PDF at Example 1.4.4 on page 8 and read that one example, the three stacks for a perfect field.
