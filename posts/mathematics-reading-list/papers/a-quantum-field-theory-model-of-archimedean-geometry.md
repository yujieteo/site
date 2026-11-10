source: https://indico.in2p3.fr/event/3761/attachments/22427/27507/Gerasimov.pdf
slogan: The Gamma factor that completes the zeta function is a disk partition function, so the real prime gets a geometry you can compute with.
basis: the full text

## Before you start

These are 43 short slides, but they pass through zeta functions, Langlands duality, Whittaker functions and topological sigma models in a few lines each. You may feel lost, or ashamed that so many words are new at once. That is a fair response to slides made for a specialist audience. If you have ever wondered what the factor π<sup>−s/2</sup>Γ(s/2) is doing next to ζ(s), these slides offer one answer. Enjoy the idea. You do not need to follow each slide.

## The story

The completed zeta function is a product of local factors, one for each prime p and one for the real numbers. The factor at p is 1/(1 − p<sup>−s</sup>). It is both an integral over ℚ<sub>p</sub> (a period) and a trace of Frobenius. The real factor π<sup>−s/2</sup>Γ(s/2) has an integral form, Euler's integral, but no known trace form. The Galois group of ℂ over ℝ has two elements and is too small to supply one. Gerasimov, Lebedev and Oblezin propose a substitute. First they interpolate between p and ∞ with a parameter q. Then they realise the real factor as a correlation function of a topological sigma model on a disk. The trace becomes an equivariant volume of the space of holomorphic maps from the disk.

## Main definitions

**Local L-factors.** For a prime p and a matrix A<sub>p</sub> in GL(V), the factor is det<sub>V</sub>(1 − A<sub>p</sub> p<sup>−s</sup>)<sup>−1</sup>. For the real place and a matrix α in Mat(V), the factor is det<sub>V</sub> of π<sup>−(s−α)/2</sup> Γ((s − α)/2).
- V of dimension one, A<sub>p</sub> = 1, α = 0: the factors of the Riemann zeta function.

**Period and trace.** A period form writes a local factor as an integral, as on the representation theory side. A trace form writes it as a trace over a representation, as on the Galois side.
- Period: 1/(1 − p<sup>−s</sup>) is an integral over ℚ<sub>p</sub> of an additive character times |x|<sub>p</sub><sup>s</sup>.
- Trace: 1/det<sub>V</sub>(1 − A) is the trace of A on the symmetric algebra of V.

**Whittaker function.** A matrix element Ψ<sub>λ</sub>(g) of an infinite-dimensional representation of a Lie group G, with Ψ<sub>λ</sub>(ngk) = χ(n)Ψ<sub>λ</sub>(g) for n in the maximal unipotent subgroup N and k in the maximal compact subgroup K. It is an eigenfunction of a quantum Toda chain.

**q-Gamma function.** Γ<sub>q</sub>(s, t) = (q; q)<sub>∞</sub> / (t<sup>s</sup>; q)<sub>∞</sub>, where (a; q)<sub>∞</sub> is the product of (1 − aq<sup>n</sup>) over n ≥ 0 and |q| &lt; 1.
- q → 0, t → p<sup>−1</sup>: it tends to 1/(1 − p<sup>−s</sup>).
- q → 1, t = q<sup>1/2</sup>: after rescaling it tends to π<sup>−s/2</sup>Γ(s/2).

## Main results

The slides state these as theorems of Gerasimov, Lebedev and Oblezin and give no proofs. The field theory arguments are at physics level.

**Theorem (q-version of Shintani-Casselman-Shalika; slide 21).** The common eigenfunction of the q-deformed gl<sub>ℓ+1</sub> Toda chain equals the trace of q<sup>d</sup> Π q<sup>λ<sub>i</sub>E<sub>ii</sub></sup> over a module V<sub>p<sub>1</sub>,…,p<sub>ℓ+1</sub></sub> of ℂ<sup>×</sup> × GL(ℓ+1, ℂ). Here the E<sub>ii</sub> are Cartan generators and d generates the Lie algebra of ℂ<sup>×</sup>.
- q → 0: the classical formula, where a p-adic Whittaker function is a character of the dual group.
- q → 1: a substitute for that formula at the real place.

**Theorem A (type A model; slide 28).** Take the S<sup>1</sup> × U<sub>ℓ+1</sub>-equivariant type A topological linear sigma model on the disk with target V = ℂ<sup>ℓ+1</sup>. The correlation function of exp(O), for the observable O on slide 27, is a power of ħ times a determinant over V of a power of π/ħ times Γ(Λ/ħ). With ħ = 1 and Λ replaced by (s − Λ)/2, it is the local Archimedean L-factor. I could not read the exact exponents from the slide text, so I leave them out.

**Theorem B (type B model; slide 33).** Take the S<sup>1</sup>-equivariant type B Landau-Ginzburg model on the disk with W<sub>+</sub>(φ) = Σ (λ<sub>j</sub>φ<sub>j</sub> − e<sup>φ<sub>j</sub></sup>) and W<sub>−</sub> = 0. The matching correlation function is the integral over ℝ<sup>ℓ+1</sup> of exp((1/ħ) Σ (λ<sub>j</sub>t<sub>j</sub> − e<sup>t<sub>j</sub></sup>)), which equals Π ħ<sup>λ<sub>j</sub>/ħ</sup> Γ(λ<sub>j</sub>/ħ). This agrees with the type A answer.

**Claim (physics argument; mirror symmetry for one Gamma function; slides 34 to 39).** The S<sup>1</sup> × U(1)-equivariant volume of the space of holomorphic maps from the disk to ℂ reproduces Euler's integral Γ(s) = ∫ e<sup>xs</sup> exp(−e<sup>x</sup>) dx over ℝ.
- Step 1: fix the U(1) moment map at level t. The S<sup>1</sup> fixed points are the monomials z<sup>n</sup>, n ≥ 0.
- Step 2: a formal use of the Duistermaat-Heckman formula sums the fixed point terms (−1)<sup>n</sup>e<sup>ntħ</sup>/n! to exp(−e<sup>ħt</sup>).

## Note, then ignore

- Weil group, not Galois group. The data at the real place is a map from the Weil group of ℝ, which contains ℂ<sup>×</sup>. The slides treat ℂ<sup>×</sup> as the "missing part" of the Galois group. Safe to skip at first.
- "Formal" Duistermaat-Heckman. The space of maps has infinite dimension, and the product of weights is regularised. The slides say so. Safe to skip.
- Non-standard real structure. The type B model uses unusual reality conditions on the fields, chosen so that it mirrors the type A model. Safe to skip.
- Baxter operator. Slide 15 says an operator Q<sub>∞</sub>(s) plays the role of a Hecke generating function at the real place. It supports the story but is not used later. Safe to skip.
- Three-dimensional version. Slide 41 says the q-deformation comes from a theory on S<sup>1</sup> × D. This is an outlook, safe to skip.

## One next step

Open the slides and read only slide 18, on the q-Gamma function. Check the limit q → 0, t → p<sup>−1</sup> by hand.
