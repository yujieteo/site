source: https://conservancy.umn.edu/server/api/core/bitstreams/975fc809-0ccc-4c01-9751-31903c891a4e/content
slogan: The poles of a degenerate Eisenstein series can be read from how one small sl2 acts on a nilpotent Lie algebra in the dual group.
basis: the introduction and the main theorem statements

## Before you start

You may feel a gap between Chapter 1 and Chapter 2. The first chapter is a friendly tour of SL<sub>2</sub>. The second opens with roots, coroots and Langlands dual groups for every split group, and you may feel you lack the Lie theory. It is fine to feel that, and nothing needs fixing first. If you want to see a spectral decomposition done by hand from start to finish, Chapter 1 does it. Read that for enjoyment. The general theorem can stay a statement for now.

## The story

To decompose L² of an arithmetic quotient you write functions as integrals of Eisenstein series, then move a contour to the imaginary axis. Each pole crossed leaves a residue, and these residues form part of the spectrum. So you need to know where the poles are and what order they have. For SL<sub>2</sub>(ℤ) there is one pole, at s = 1, and its residue is a constant.

For a maximal parabolic P in a larger split group, the simplest series is the unramified degenerate one, induced from the constant function 1. Earlier work found its poles case by case, by tracking cancellations among many intertwining operators. Hegde's thesis gives one rule for all split groups. Decompose the Lie algebra of the dual unipotent radical under a principal sl<sub>2</sub>. The highest weights that occur give the poles and their orders in Re(s) ≥ 0.

## Main definitions

**Unramified degenerate Eisenstein series.** Let G be a split semisimple group over a number field F and P = NM a standard maximal parabolic. Put E<sup>P</sup>(s, g) = Σ φ<sub>s</sub>(γg) over γ ∈ P(F)\G(F), where φ<sub>s</sub> = δ<sub>P</sub><sup>1/2</sup> · e<sup>⟨sϖ, H<sub>P</sub>(g)⟩</sup> and ϖ is the fundamental weight attached to P. It converges for Re(s) large and continues meromorphically.
- Degenerate: the inducing function 1 on the Levi M is not a cusp form.

**The pieces r<sub>j</sub>.** In the Langlands dual group, the Lie algebra of the dual unipotent radical splits as r<sub>1</sub> ⊕ ... ⊕ r<sub>m</sub> under the one-dimensional central torus of the dual Levi. The piece r<sub>j</sub> collects coroots in which the simple coroot of P appears j times.

**Principal sl<sub>2</sub>.** A distinguished copy of sl<sub>2</sub>(ℂ) inside the dual Levi Lie algebra, fixed by a pinning, following Gross. Under it each r<sub>j</sub> splits into copies of V<sub>ℓ</sub> = Sym<sup>ℓ</sup> of the standard representation, with multiplicities m<sub>ℓ</sub>(j).

## Main results

**Theorem (spectral decomposition for SL<sub>2</sub>(ℤ); Theorem 1).** A compactly supported smooth K-invariant function f on SL<sub>2</sub>(ℤ)\SL<sub>2</sub>(ℝ) is the sum of three parts: its cusp form expansion, the constant ⟨f, 1⟩/ξ(2), and (1/4πi) ∫ ⟨f, E<sub>s</sub>⟩ E<sub>s</sub> ds over Re(s) = 0.
- Step 1: write pseudo-Eisenstein series as Mellin integrals of E<sub>s</sub> on a line Re(s) > 1.
- Step 2: move the contour to Re(s) = 0 and pick up the residue at s = 1.

**Theorem (poles of degenerate Eisenstein series; Theorem 3, proved as Theorem 15).** With G, P, r<sub>j</sub> and m<sub>ℓ</sub>(j) as above, let p(s) be the product over j and ℓ of (js − 1 − ℓ/2)<sup>m<sub>ℓ</sub>(j)</sup>. Then p(s) · E<sup>P</sup>(s, g) is holomorphic in Re(s) ≥ 0. At a zero s<sub>0</sub> > 0 of p of order d, the series has a pole of order exactly d.
- Step 1: realise E<sup>P</sup> as a residue of the Borel Eisenstein series, whose poles and zeros are known.
- Step 2: show that most factors cancel, and that the critical zeros of ξ do not contribute in this region.

**Claim (type A; Example 4).** For PGL<sub>n+1</sub> and the parabolic of block sizes (a + 1, b + 1), the series has simple poles in Re(s) > 0 exactly at (n+1)/2, (n+1)/2 − 1, ..., (n+1)/2 − min{a, b}. Hanzer and Muić found this earlier by another method.

## Note, then ignore

- Left half-plane. For Re(s) &lt; 0 the poles depend on the critical zeros of zeta functions and are out of reach. They play no part in spectral decomposition. Safe to skip on a first reading.
- Normalisation of s. The SL<sub>n</sub> statement in Section 1.2.6 and the general theorem use different normalisations of the parameter, so pole positions look different. Safe to skip.
- Hypotheses. The theorem needs G split and semisimple, P maximal, and trivial inducing data. Ramified cases are not covered. Safe to skip.
- Tables. Sections 2.4 and 2.5 list the answer for classical and exceptional groups. They are reference material. Safe to skip.
- Lost symbols. Some PDF viewers drop the inequality signs in "Re(s) ≥ 0" when you copy text. The abstract means the closed right half-plane. Safe to skip.

## One next step

Open the thesis at Section 1.1.4.3, "Residues of Eisenstein series", and read the half page showing that c(s) = ξ(s)/ξ(s + 1) has its only pole in Re(s) ≥ 0 at s = 1.
