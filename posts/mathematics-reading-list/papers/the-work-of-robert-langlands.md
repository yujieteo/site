source: https://arxiv.org/pdf/2307.02571
slogan: One conjecture, functoriality, ties the spectra of different groups together, and sixty years of Langlands' work reads as a single story around it.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling is overwhelm. This is 205 pages, eleven sections, and a subject with a reputation for being closed to outsiders. It is fine to feel small in front of it. Arthur wrote it as a narrative for general mathematicians, and he says outright that you need not take the hard passages seriously at first. If you want a map of the Langlands programme from someone who built part of it, this is one. Read for the pleasure of the story. Finishing can wait.

## The story

Langlands began in harmonic analysis. The problem was to decompose L<sup>2</sup>(G(ℚ)\G(𝔸)) into irreducible representations, as Fourier analysis does for ℝ and ℤ\ℝ. The continuous part was the obstacle. He built it from Eisenstein series, which converge only in a region far from where they are needed, and he continued them analytically. The constant terms of these series contained new Euler products. That led to automorphic L-functions, to the dual group, and to one conjecture: a homomorphism of dual groups should carry automorphic representations of one group to another. This contains non-abelian class field theory as a special case. The rest of the report follows the attempts to prove it: the trace formula, base change, Shimura varieties, endoscopy, and the newer proposal called Beyond Endoscopy.

## Main definitions

**Automorphic representation.** Informally, an irreducible representation π of G(𝔸) that occurs in L<sup>2</sup>(G(F)\G(𝔸)), together with those obtained by analytic continuation of its parameters. It is a restricted tensor product of local representations π<sub>v</sub> of G(F<sub>v</sub>).
- Formal version: Borel and Jacquet define it through automorphic forms. Flath proved the tensor product decomposition.

**Satake classes.** For a split group G over ℚ, an unramified representation π<sub>p</sub> of G(ℚ<sub>p</sub>) corresponds to one semisimple conjugacy class c(π<sub>p</sub>) in the complex dual group Ĝ. An automorphic π gives a family c<sup>S</sup>(π) = {c<sub>p</sub>(π) : p ∉ S}, with S a finite set of primes.
- For G = GL(n): each class is an invertible diagonal complex matrix up to permutation, so a characteristic polynomial.

**Automorphic L-function.** For a finite-dimensional representation r of the L-group <sup>L</sup>G, the function L<sup>S</sup>(s, π, r) is the Euler product over p ∉ S built from the matrices r(c<sub>p</sub>(π)). It copies the definition of an Artin L-function, with the Frobenius classes replaced by the Satake classes.

**Stable conjugacy.** Two elements of G(F) are stably conjugate when they are conjugate in G over the algebraic closure. Outside GL(n) this is weaker than conjugacy in G(F).
- Example: in SL(2, ℝ), rotation by θ and rotation by −θ are conjugate in SL(2, ℂ) but not in SL(2, ℝ).

## Main results

**Theorem (Langlands' Main Theorem on Eisenstein series; Section 2).** For a cuspidal function φ on a parabolic P, the Eisenstein series E(x, φ, λ) and the intertwining operators M(s, λ) continue to meromorphic functions of λ and satisfy functional equations, including E(x, M(s, λ)φ, sλ) = E(x, φ, λ). On the imaginary axis both are analytic and M(s, λ) is unitary.
- Step 1: absolute convergence holds only when Re(λ) lies beyond ρ<sub>P</sub> in the positive chamber.
- Step 2: integrals of Eisenstein series over the imaginary axis then give an orthogonal decomposition of L<sup>2</sup>(G(ℚ)\G(𝔸)) indexed by associate classes of parabolic subgroups.

**Conjecture (Global Functoriality; Section 4).** Let G′ and G be split groups over ℚ and ρ′ a homomorphism from the dual group of G′ to the dual group of G. For each automorphic representation π′ of G′(𝔸) there is an automorphic representation π of G(𝔸) with c<sub>p</sub>(π) = ρ′(c<sub>p</sub>(π′)) for all p outside a finite set.
- Case G′ = {1}, with a Galois group in the L-group: the conjecture says each Artin L-function equals a standard L-function of GL(n), which would give the Artin conjecture.

**Theorem (Langlands, and Langlands–Tunnell; Section 7).** Let F be a number field and r a two-dimensional representation of tetrahedral or octahedral type. Then there is a cuspidal automorphic representation π of GL(2, 𝔸<sub>F</sub>) with π = π(r), and L(s, r) = L(s, π) is entire.
- Step 1: base change for GL(2) over a cyclic extension of prime degree, proved by comparing two trace formulas.
- Step 2: strong multiplicity one identifies π from almost all its local classes.

**Theorem (endoscopic transfer; Section 10).** The Langlands–Shelstad transfer conjecture holds: each test function f on G(F) has a matching function on each endoscopic group G′, with stable orbital integrals prescribed by f.
- Archimedean F: Shelstad.
- Non-archimedean F: Waldspurger reduced it to the fundamental lemma, which Ngô proved.

## Note, then ignore

- **Split groups over ℚ.** Arthur states functoriality first for split groups over ℚ to keep the dual group simple. The general case uses the L-group with a Galois factor. Safe to skip at first.
- **The finite set S.** Every statement about Satake classes holds outside a finite set of primes, and two families count as equal if they agree almost everywhere. Safe to skip.
- **The hypothetical Langlands group.** The global classification is phrased with a group L<sub>F</sub> that is not known to exist. Arthur's own book uses an ad hoc substitute. Safe to skip.
- **Twisted, weighted fundamental lemma.** Arthur notes that this one input to the classification for classical groups is expected but perhaps not fully written. Note it and move on.
- **What is left out.** The report omits Langlands' work on percolation and mathematical physics. That does not affect the story here.

## One next step

Open the PDF at the Foreword (pages 1 and 2) and read only that. It tells you which sections are gentle and which are technical.
