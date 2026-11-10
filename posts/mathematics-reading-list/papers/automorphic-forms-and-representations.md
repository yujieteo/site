source: https://www.cambridge.org/core/books/automorphic-forms-and-representations/F46424A2D9646FE32D9B792BC5E0238A
slogan: A modular form is one vector in a representation of GL(2) over the adeles, and that view explains its L-function place by place.
basis: the abstract only

## Before you start

This book has 574 pages and four chapters, each longer than 100 pages. The likely feeling is overwhelm, and perhaps a quiet dread that you will stall in Chapter 1 as with other thick textbooks. You are allowed to feel that. Nothing here needs to be finished. If you want to read the Langlands programme papers on this list, this book supplies the GL(2) case with proofs. Pick the section that looks most fun and read that. Completion comes second.

## The story

Classical modular forms are functions on the upper half plane with many symmetries. Hecke attached L-functions to them and proved functional equations, but the Euler products looked like a lucky accident of Hecke operators. The representation-theoretic view removes the accident. Lift a modular form to a function on GL(2) over the adeles. The group acts on such functions, and an eigenform generates an irreducible representation. That representation factors into local pieces, one for ℝ and one for each prime p. Each local piece carries its own L-factor. The book, by its own description, tells both versions with complete proofs, and builds the representation theory of GL(1) and GL(2) over local fields that the second version needs. Its four chapters are: modular forms, GL(2, ℝ), automorphic representations, and GL(2) over a p-adic field.

## Main definitions

I read only the publisher's description and the chapter list. The definitions below are the standard ones for the book's subject. I did not check the book's own wording.

**Modular form.** A holomorphic function f on the upper half plane with f((az+b)/(cz+d)) = (cz+d)<sup>k</sup> f(z) for all matrices in SL(2, ℤ) or a congruence subgroup, and holomorphic at the cusps.
- Cusp form: f vanishes at every cusp.

**Automorphic representation of GL(2).** An irreducible representation of GL(2, 𝔸) that occurs in a space of automorphic forms on GL(2, F)\\GL(2, 𝔸), where 𝔸 is the adele ring of a number field F.
- Cuspidal: it occurs in the space of cusp forms.

**Whittaker model.** A realisation of a representation of GL(2) over a local field in a space of functions W on the group with W(ng) = ψ(n)W(g), for n upper unipotent and ψ a fixed non-trivial additive character.

**Admissible representation.** A smooth representation of GL(2, ℚ<sub>p</sub>) in which each compact open subgroup fixes a finite-dimensional subspace. Over ℝ the same idea is expressed with (𝔤, K)-modules.

## Main results

These are the standard central theorems of the theory the book covers. I give no theorem numbers, because I could not open the text. Treat the statements as a map and check hypotheses in the book.

**Theorem (tensor product theorem).** An irreducible admissible representation of GL(2, 𝔸) is a restricted tensor product of irreducible admissible representations π<sub>v</sub> of GL(2, F<sub>v</sub>), one for each place v. Almost all π<sub>v</sub> are unramified.
- Step 1: the adelic Hecke algebra is a restricted tensor product of local Hecke algebras.
- Step 2: an irreducible module over a tensor product factors.

**Theorem (uniqueness of Whittaker models).** An irreducible admissible representation of GL(2) over a local field has at most one Whittaker model for a given ψ.
- This is one of the "uniqueness principles" the description says the proofs rest on.

**Theorem (multiplicity one for GL(2)).** A cuspidal automorphic representation of GL(2, 𝔸) occurs exactly once in the space of cusp forms with a given central character.
- Step 1: a cusp form has a Fourier expansion in terms of a global Whittaker function.
- Step 2: local uniqueness of Whittaker models makes that function unique up to scalar.

**Theorem (L-functions; Hecke, Jacquet–Langlands).** The L-function of a cuspidal automorphic representation of GL(2) is an Euler product of local factors, extends to an entire function, and satisfies a functional equation relating s and 1 − s.
- Classical case: the Mellin transform of a cusp form for SL(2, ℤ).
- Adelic case: a zeta integral over Whittaker functions.

## Note, then ignore

- Basis of this page. I read the publisher's description and the contents, not the chapters. The theorem statements above are standard, but their exact form in the book is unverified. Safe to skip, but do not cite this page.
- (𝔤, K)-modules. At the real place the book must replace group representations by modules over the Lie algebra and a maximal compact subgroup, to avoid analysis. Safe to skip on a first reading.
- Normalised induction. Induced representations carry a square root of the modulus character, so that unitary goes to unitary. Safe to skip.
- Advanced topics. The description lists the Langlands conjectures, the Weil representation, the Rankin–Selberg method and the triple L-function. These are side trips. Safe to skip at first.

## One next step

Open the book at "Advice to the Reader" (pages ix to xi) and read only that. It is three pages.
