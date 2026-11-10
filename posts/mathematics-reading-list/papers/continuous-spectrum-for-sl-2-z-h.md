source: https://www-users.cse.umn.edu/~garrett/m/mfms/notes_2013-14/13_1_cont_afc_spec.pdf
slogan: Everything in L² of the modular curve that is not a cuspform is a Fourier integral of Eisenstein series plus a constant.
basis: the full text

## Before you start

This note is nine pages, and it grants the meromorphic continuation of Eisenstein series without proof. The likely feeling is a small distrust: am I allowed to follow an argument that rests on something I have not seen proved? Yes, and the unease is reasonable. You do not have to settle it today. The note gives you something you may want, a complete worked case of a continuous spectrum, built from the Fourier transform on a line. Read it for the pleasure of seeing one contour shift do the work. Finishing matters less.

## The story

On a circle, every L<sup>2</sup> function is a sum of exponentials. On Γ\H with Γ = SL<sub>2</sub>(ℤ), the space is not compact, so part of the spectrum is continuous. Cuspforms are the mysterious discrete part. What is the rest? Garrett defines the rest by duality. The constant term map sends a function on Γ\H to a function of y alone. Its adjoint sends a test function φ on (0, ∞) to an explicit series Ψ<sub>φ</sub>. Cuspforms are exactly what is orthogonal to all Ψ<sub>φ</sub>. Now decompose φ by Mellin inversion, which is Fourier inversion in the variable log y. The series turns into an integral of Eisenstein series E<sub>s</sub>. Moving the contour to the line Re s = 1/2 picks up one residue, a constant function.

## Main definitions

**Constant term.** For a function f on Γ\H, c<sub>P</sub>f(z) is the integral of f(n · z) over n in Γ<sub>∞</sub>\N, where N is the group of real translations and Γ<sub>∞</sub> the integer translations. It depends on y = Im z only. A cuspform is an f with c<sub>P</sub>f = 0.

**Pseudo-Eisenstein series.** For φ smooth with compact support on (0, ∞), Ψ<sub>φ</sub>(z) = Σ φ(Im γz), summed over γ in Γ<sub>∞</sub>\Γ.
- Adjunction: ⟨c<sub>P</sub>f, φ⟩ on N\H equals ⟨f, Ψ<sub>φ</sub>⟩ on Γ\H.
- Finiteness: the sum is locally finite, and Ψ<sub>φ</sub> is smooth with compact support on Γ\H (Claim 1.3.2).

**Eisenstein series.** E<sub>s</sub>(z) = Σ (Im γz)<sup>s</sup> over γ in Γ<sub>∞</sub>\Γ, convergent for Re s > 1. It has a meromorphic continuation, which the note grants.
- Constant term: c<sub>P</sub>E<sub>s</sub> = y<sup>s</sup> + c<sub>s</sub> y<sup>1−s</sup> with c<sub>s</sub> = ξ(2s − 1)/ξ(2s), where ξ(s) = π<sup>−s/2</sup> Γ(s/2) ζ(s).
- Functional equation: E<sub>1−s</sub> = c<sub>1−s</sub> E<sub>s</sub>, so c<sub>s</sub> c<sub>1−s</sub> = 1 and |c<sub>s</sub>| = 1 on Re s = 1/2.

**Mellin transform.** Mφ(s) = ∫<sub>0</sub><sup>∞</sup> φ(r) r<sup>−s</sup> dr/r. Inversion reads φ(y) = (1/2πi) ∫ Mφ(s) y<sup>s</sup> ds over any vertical line Re s = σ, for φ of compact support.

## Main results

**Theorem (cuspforms are a complement; Corollary 1.3.3).** The square-integrable cuspforms are the orthogonal complement in L<sup>2</sup>(Γ\H) of the closed span of the pseudo-Eisenstein series Ψ<sub>φ</sub>.
- Why: by the adjunction, f is orthogonal to every Ψ<sub>φ</sub> exactly when c<sub>P</sub>f pairs to zero with every test function φ.

**Theorem (decomposition of Ψ<sub>φ</sub>; §2.3, §4.1 and §4.2).** With the hermitian pairing, Ψ<sub>φ</sub> = (1/4πi) ∫ ⟨Ψ<sub>φ</sub>, E<sub>s</sub>⟩ E<sub>s</sub> ds over the line Re s = 1/2, plus ⟨Ψ<sub>φ</sub>, 1⟩ · res<sub>s=1</sub>E<sub>s</sub>.
- Step 1: for σ > 1 the sum and the Mellin integral swap, giving Ψ<sub>φ</sub> = (1/2πi) ∫ Mφ(s) E<sub>s</sub> ds on Re s = σ.
- Step 2: move the line to σ = 1/2. The only pole of E<sub>s</sub> in Re s ≥ 1/2 is a simple one at s = 1 with constant residue. Fold the integral using the functional equation to replace Mφ by ⟨Ψ<sub>φ</sub>, E<sub>s</sub>⟩.

**Theorem (Plancherel; Theorem 5.0.1).** For test functions φ and ψ, ⟨Ψ<sub>φ</sub>, Ψ<sub>ψ</sub>⟩ = (1/2πi) ∫ ⟨Ψ<sub>φ</sub>, E<sub>s</sub>⟩ · conj⟨Ψ<sub>ψ</sub>, E<sub>s</sub>⟩ ds over the upper half of the line Re s = 1/2, plus ⟨Ψ<sub>φ</sub>, 1⟩ · conj⟨Ψ<sub>ψ</sub>, 1⟩ · res<sub>s=1</sub>E<sub>s</sub>. By continuity the map f ↦ (⟨f, E<sub>s</sub>⟩, ⟨f, 1⟩/⟨1, 1⟩<sup>1/2</sup>) extends to an isometry from the orthogonal complement of the cuspforms to L<sup>2</sup>(1/2 + iℝ) ⊕ ℂ, in the note's normalisation.
- Corollary: putting f = 1 gives res<sub>s=1</sub>E<sub>s</sub> = 1/vol(Γ\H).

## Note, then ignore

- Two pairings. The note uses a complex-bilinear pairing for adjunctions and a hermitian one for Plancherel, and marks which is which. Safe to skip on a first reading.
- The measure dy/y<sup>2</sup>. The invariant measure on H descends to dy/y<sup>2</sup> on N\H, not dy/y, which shifts Mellin arguments by 1 (Remark 1.3.1). Safe to skip.
- Not literal integrals. For general f in L<sup>2</sup> the spectral integral is an extension by continuity, not a convergent integral. Safe to skip.
- Half line or whole line. Formulas appear with 1/2πi over the upper half line or 1/4πi over the whole line. The functional equation converts one to the other. Safe to skip.
- Why σ = 1/2. The natural line σ = 0 for Mellin inversion is replaced by 1/2 because the functional equation s ↦ 1 − s fixes that line. Safe to skip.

## One next step

Open the note at §2.3 on page 4 and read the half page that ends with the formula for Ψ<sub>φ</sub> as an integral of Mφ(s) · E<sub>s</sub>.
