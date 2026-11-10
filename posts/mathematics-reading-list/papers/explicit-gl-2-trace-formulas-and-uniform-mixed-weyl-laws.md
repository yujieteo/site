source: https://arxiv.org/pdf/1212.4282
slogan: Arthur's trace formula for GL(2) becomes a fully explicit formula over any global field, and it counts automorphic forms with error bounds uniform in the level.
basis: the abstract and introduction

## Before you start

This is a doctoral thesis of about 200 pages, and the author says plainly that much of it is long computation. The feeling it may raise is tedium, or dread of losing the thread among cases. That is a fair response to a text like this. If you want to see every term of a trace formula written out, with no "fudge factors" left abstract, the thesis offers that. Read the introduction for the story and dip into one term that interests you. Enjoying one computation is worth more than a full pass.

## The story

Selberg's trace formula counts Maass cusp forms on SL<sub>2</sub>(ℤ)\H by Laplace eigenvalue. People wanted the same for every congruence subgroup and over every number field, with all terms explicit. Arthur's trace formula covers that generality, but it is an identity of distributions that few can evaluate, and the classical versions are scattered across special cases. Palm's idea is to stop sorting forms by congruence subgroup. He partitions cuspidal representations into similarity classes by their local types, in the sense of Bushnell and Kutzko. For each class he builds an explicit test function, with a pseudo matrix coefficient at each square-integrable place. Then every term of Arthur's formula factors into local pieces that he computes. The Weyl law follows as a standard application.

## Main definitions

**Spectral parameter.** At a place v where π<sub>v</sub> is a principal series J<sub>v</sub>(μ<sub>1</sub>, μ<sub>2</sub>, s), the complex number s<sub>v</sub>(π) = s. Over ℚ it recovers the classical data: λ<sub>∞</sub> = 1/4 − s<sub>∞</sub><sup>2</sup> and λ<sub>p</sub> = p<sup>s<sub>p</sub></sup> + p<sup>−s<sub>p</sub></sup>.

**Similarity class X.** Two cuspidal automorphic representations of GL(2) are similar if at every place their local factors are either isomorphic square-integrable representations, or principal series induced from the same characters of the units, with possibly different s.
- S<sup>ps</sup>(X): the places where members of X are principal series.
- S<sup>sq</sup>(X): the places where they are square integrable.

**Pseudo matrix coefficient.** A test function at one place whose trace picks out a given square-integrable representation: discrete series, supercuspidal or Steinberg.

**Mixed and uniform.** A Weyl law is mixed if it counts forms with a prescribed discrete series at some real places. It is uniform if the error bound does not depend on the congruence subgroup.

## Main results

**Claim (explicit trace formula; Chapter 1).** Let F be a global field and X a similarity class, unramified at the complex places. For even functions h<sub>v</sub> with compactly supported Fourier transform at the archimedean principal series places, and a finite set S<sup>H</sup> of finite places, the sum over π ∈ X of ∏ h<sub>v</sub>(i s<sub>v</sub>(π)) · ∏<sub>v ∈ S<sup>H</sup></sub> (q<sub>v</sub><sup>s<sub>v</sub>(π)</sup> + q<sub>v</sub><sup>−s<sub>v</sub>(π)</sup>) equals an explicit sum of identity, parabolic, hyperbolic, elliptic, Eisenstein and residual terms.
- Step 1: build the test function place by place (Section 1.3).
- Step 2: factor each term of the coarse Arthur trace formula into local distributions, computed in Chapters 7 to 9.

**Theorem (uniform Weyl law; Theorem 3.2.3).** Let Γ be a congruence subgroup of SL<sub>2</sub>(ℤ) with index m. For T ≥ 1, the number of Hecke Maass cusp forms of weight zero and level Γ with λ<sub>∞</sub> ≤ T is (m/12)·T + d<sub>Γ</sub>·√T·log T + O(m·√T). The constant d<sub>Γ</sub> is bounded by m, and the implied constant is absolute.

**Theorem (mixed Weyl law; Theorem 3.2.1).** Let F be a number field and X a class in which every member has a square-integrable local factor. For T<sub>v</sub> ≥ 1, the number of π ∈ X with s<sub>v</sub>(π) ≤ T<sub>v</sub> at all archimedean principal series places has main term C<sub>X</sub> · ∏<sub>real</sub> T<sub>v</sub><sup>2</sup> · ∏<sub>complex</sub> T<sub>v</sub><sup>3</sup>. The error is that main term times the sum of the 1/T<sub>u</sub>, with a constant that depends on F only. Without the hypothesis the theorem still holds with extra logarithmic error terms. I read these formulas only in the introduction, where the layout is hard to parse, so check Theorem 3.2.1 for the exact shape.

## Note, then ignore

- Non-invariant formula. The thesis uses Arthur's coarse, non-invariant trace formula, not the invariant one. This is a technical choice. Safe to skip.
- Complex places. The explicit terms are worked out only for classes unramified at the complex places. Safe to skip.
- Square-free Hecke operators. The formula covers traces of square-free Hecke operators only. These generate the rest. Safe to skip.
- Vanishing Eisenstein term. If the class has a supercuspidal factor, or two square-integrable factors, the Eisenstein contribution is zero. Theorem 1.10.5 has the precise statement. Safe to skip at first.
- Parts II and III. Chapters 4 to 9 are groundwork on locally compact groups and local harmonic analysis. Use them as reference. Safe to skip.

## One next step

Open the thesis at the introduction, page vii, and read the statement of the uniform Weyl law and the paragraph after it.
