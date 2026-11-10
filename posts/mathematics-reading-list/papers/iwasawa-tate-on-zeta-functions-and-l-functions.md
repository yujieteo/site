source: https://www-users.cse.umn.edu/~garrett/m/mfms/notes_c/Iwasawa-Tate.pdf
slogan: Riemann's proof of the functional equation, rewritten on the adeles, works unchanged for every number field and every Hecke character.
basis: the introduction and the main theorem statements

## Before you start

These 20 pages use adeles, ideles and Haar measure from the first page, and Garrett himself calls his introduction to them "too brief". The likely feeling is shame at not already owning that language. You can feel that and keep going. The notes are built as one argument told four times, each time a little more general, so the first telling carries you. If you have ever wanted to see why ζ(s) and ζ(1−s) are related, this is a short road. Enjoy the first telling. The rest is repetition by design.

## The story

Riemann proved that ζ(s) continues to the whole plane and satisfies a functional equation. He wrote ζ as an integral of a theta function, split the integral at 1, and used Poisson summation on the lower half. Hecke extended this to number fields, but had to fight with units and class numbers. Around 1950 Iwasawa and Tate, independently, found the clean version. Integrate over the ideles, the group that packages all completions of the field at once. A "zeta integral" Z(s, f) of a Schwartz function f on the adeles is then a product of local integrals, one for each prime and one for each archimedean place. Poisson summation on the adeles gives the functional equation for every f. Units and class numbers vanish from the argument. One compactness lemma replaces them, and even reproves them.

## Main definitions

**Adeles and ideles.** For a number field k, the adeles 𝔸 are the tuples (α<sub>v</sub>), one entry in each completion k<sub>v</sub>, with α<sub>v</sub> in the local integers for all but finitely many places v. The ideles 𝕁 are the tuples of nonzero entries that are local units for all but finitely many v. The idele norm is |α| = ∏ |α<sub>v</sub>|<sub>v</sub>. It is 1 on k<sup>×</sup> (the product formula).

**Schwartz function on 𝔸.** A finite linear combination of products f = ∏ f<sub>v</sub>. Here f<sub>v</sub> is a Schwartz function on k<sub>v</sub>, and is the characteristic function of the local integers for all but finitely many v.
- Archimedean v: smooth, with all derivatives of rapid decay.
- Finite v: locally constant with compact support.

**Global zeta integral.** For a Schwartz function f on 𝔸 and a character χ of 𝕁/k<sup>×</sup>, set Z(s, χ, f) = ∫<sub>𝕁</sub> |x|<sup>s</sup> χ(x) f(x) d<sup>×</sup>x for Re s > 1. For a product f it is an Euler product of local zeta integrals.

**Fourier transform on 𝔸.** Fix a nontrivial character ψ of 𝔸 trivial on k, and a Haar measure giving 𝔸/k volume 1. Then f̂(ξ) = ∫ ψ(ξx) f(x) dx. Adelic Poisson summation says Σ f(x) = Σ f̂(ξ), both sums over k.

## Main results

**Theorem (continuation and functional equation; Theorem 4.1).** Let k be a number field, f a Schwartz function on 𝔸, and χ a character of 𝕁/k<sup>×</sup> trivial on the positive reals in the archimedean factors. Then Z(s, χ, f) continues to a meromorphic function on ℂ with poles at most at s = 0 and s = 1. It satisfies Z(s, χ, f) = Z(1−s, χ<sup>−1</sup>, f̂). For χ trivial the residue at s = 1 is κ·f̂(0), with κ the volume of 𝕁<sup>1</sup>/k<sup>×</sup>. For χ nontrivial there are no poles.
- Step 1: fold the integral over k<sup>×</sup> to get a theta function θ<sub>f</sub>(x) = Σ f(αx), and split 𝕁/k<sup>×</sup> at |x| = 1.
- Step 2: Poisson summation gives θ<sub>f</sub>(x) = |x|<sup>−1</sup> θ<sub>f̂</sub>(1/x), which turns the lower half into an upper half with s replaced by 1−s.

**Claim (recovering classical functions; Sections 1 to 3).** For k = ℚ, χ trivial and a suitable f with f̂ = f, the zeta integral equals π<sup>−s/2</sup> Γ(s/2) ζ(s). So the theorem gives Riemann's functional equation. Similar choices give Dirichlet L-functions and Dedekind zeta functions. For a number field the best f is not its own transform, and a power of the discriminant appears. The notes sketch these computations and leave details out.

**Theorem (local functional equation; Theorem 6.1).** Let k be a local field and f, g Schwartz functions on it. The local zeta integral Z(s, f) = ∫ |x|<sup>s</sup> f(x) d<sup>×</sup>x converges for Re s > 0, continues meromorphically, and Z(s, f) Z(1−s, ĝ) = Z(1−s, f̂) Z(s, g). So the ratio Z(s, f)/Z(1−s, f̂) does not depend on f.

**Theorem (Fujisaki's compactness lemma; Theorem 7.2).** Let 𝕁<sup>1</sup> be the ideles of norm 1 of a number field k. The quotient k<sup>×</sup>\𝕁<sup>1</sup> is compact.
- Step 1: a compact subset of 𝔸 of measure above 1 cannot inject into 𝔸/k, a Minkowski-style argument.
- Step 2: compactness then implies both the finiteness of the class number and Dirichlet's unit theorem (Section 7.3).

## Note, then ignore

- Section numbering. The contents list calls the local functional equation Section 5 and Fujisaki's lemma Section 6. In the body they are Sections 6 and 7. The numbers above follow the body. Safe to ignore.
- The value of κ. The volume of 𝕁<sup>1</sup>/k<sup>×</sup> is 2<sup>r<sub>1</sub></sup>(2π)<sup>r<sub>2</sub></sup>hR/(w|D<sub>k</sub>|<sup>1/2</sup>). The notes quote this and do not prove it. You need it only for the class number formula. Skip it at first.
- Local equations do not give the global one. Remark 6.2 says the local functional equations only show that the choice of f does not matter. The global equation needs Poisson summation. Note it and move on.
- Convergence. The last section checks that the half-integrals converge for all s. It is needed for rigour and changes nothing in the plot. Skip it.

## One next step

Read paragraph [1.9], "Main argument", on pages 4 and 5. It is the whole proof for Riemann's zeta in about one page.
