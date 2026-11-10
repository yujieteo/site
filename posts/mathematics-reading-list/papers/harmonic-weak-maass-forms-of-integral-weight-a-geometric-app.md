source: https://bpb-us-e1.wpmucdn.com/s.wayne.edu/dist/4/26/files/2018/09/HWMF-Final-1izyvzl.pdf
slogan: A harmonic weak Maass form is a primitive of an exact class in de Rham cohomology, so its coefficients inherit a field of definition.
basis: the introduction and the main theorem statements

## Before you start

Two worlds meet here. One is analytic: Maass forms, raising and lowering operators, mock modular forms. The other is algebraic: sheaves on modular curves and the Gauss–Manin connection. You probably feel at home in at most one, and the other may bring some embarrassment. Let it sit there. If you have wondered why a non-holomorphic function has arithmetic coefficients, this paper gives a reason you can picture. Read for that picture. Finishing is secondary.

## The story

Bruinier and Funke introduced harmonic weak Maass forms. Each such F of weight k is sent by an operator ξ<sub>k</sub> to a cusp form f of weight 2 − k. People hoped the holomorphic part of F would carry arithmetic about f. Bruinier, Ono and Rhoades proved a first result on the coefficients of the holomorphic part at those n where the coefficient b(n) of f vanishes. Experiments suggested the true field is the coefficient field K<sub>f</sub>. Candelori's idea is to read F geometrically. Attached to f are two classes in a de Rham cohomology group: one algebraic, one from the Hodge splitting over ℂ. A combination of them minus a form with a pole at ∞ is exact. Its primitive, in local coordinates, is F. The algebraic class supplies the rationality.

## Main definitions

**Harmonic weak Maass form.** A smooth function F on the upper half plane that transforms like a modular form of integral weight k on Γ<sub>0</sub>(N) with character χ, is killed by the weight k hyperbolic Laplacian Δ<sub>k</sub>, and at each cusp differs from a polynomial in q<sup>−1/h</sup> by an exponentially small term.
- F splits as F<sup>+</sup> + F<sup>−</sup>. The holomorphic part F<sup>+</sup> = Σ c<sup>+</sup>(n) q<sup>n</sup> is meromorphic at the cusps and F<sup>−</sup> is anti-holomorphic.

**The operator ξ<sub>k</sub>.** ξ<sub>k</sub>(F) is 2i v<sup>k</sup> times the complex conjugate of ∂F/∂τ̄, where v = Im τ. There is an exact sequence 0 → M<sup>!</sup><sub>k</sub> → H<sub>k</sub> → S<sub>2−k</sub> → 0, from weakly holomorphic forms to harmonic weak Maass forms to cusp forms. The last map is ξ<sub>k</sub>.

**K-rational form.** For a subfield K of ℂ, F is K-rational when its principal parts at the cusps other than ∞ are constants in K and its principal part at ∞ lies in K[q<sup>−1</sup>].

**Parabolic cohomology.** Let X be the modular curve for Γ<sub>1</sub>(N) with N ≥ 5, let ω be the usual line bundle, and let L<sub>r</sub> be the r-th symmetric power of the relative de Rham cohomology of the universal elliptic curve, with its Gauss–Manin connection ∇. The group H<sup>1</sup><sub>par</sub>(X, L<sub>r</sub>, ∇) is the de Rham cohomology attached to weight r + 2.

## Main results

**Theorem (structure of the cohomology; Theorem 5.2).** Let K be a field of characteristic 0. There is an exact sequence 0 → H<sup>0</sup>(X<sub>K</sub>, ω<sup>r</sup> ⊗ Ω<sup>1</sup>) → H<sup>1</sup><sub>par</sub>(X<sub>K</sub>, L<sub>r</sub>, ∇) → H<sup>1</sup>(X<sub>K</sub>, ω<sup>−r</sup>) → 0. The middle group equals ω<sup>r</sup>-valued forms of the second kind modulo the image of an algebraic operator ∂<sup>r+1</sup> on rational sections of ω<sup>−r</sup>.
- Case r = 0: this is the classical description of H<sup>1</sup><sub>dR</sub> of a curve as forms of the second kind modulo exact forms.
- Over ℂ the sequence splits canonically into cusp forms and their conjugates (Shimura isomorphism, Theorem 5.4).

**Theorem (Eichler–Shimura style; Theorem 5.5).** The same cohomology group is the quotient of weight r + 2 weakly holomorphic forms over K, with poles only at ∞ and zero constant term there, by ∂<sup>r+1</sup> of weight −r forms of the same kind.

**Proposition (Maass forms from exact classes; Proposition 6.1).** Let f be a cusp form of weight r + 2. A smooth section of L<sub>r</sub> whose image under ∇ is a suitable differential built from f has leading component F that is a harmonic weak Maass form of weight −r. Also ξ<sub>−r</sub>(F) = (−4π)<sup>r+1</sup> f.

**Theorem (field of definition; Theorem 1.4).** Let f = Σ b(n) q<sup>n</sup> be a normalised newform in S<sub>2−k</sub>(Γ<sub>0</sub>(N), χ) with coefficient field K<sub>f</sub>. Let F be a K<sub>f</sub>-rational harmonic weak Maass form of weight k with ξ<sub>k</sub>(F) = f/(f, f), where (f, f) is the Petersson norm. If b(n) = 0, then c<sup>+</sup>(n) lies in K<sub>f</sub>.
- Step 1: build F from the algebraic class dual to f, so that a derivative of F<sup>+</sup> equals a·f − φ with φ defined over K<sub>f</sub> and a one complex number.
- Step 2: compare q-expansions. Then c<sup>+</sup>(n) is a rational multiple of a·b(n) − d(n) with d(n) in K<sub>f</sub>, so the unknown a drops out when b(n) = 0.

## Note, then ignore

- Two weight conventions. The introduction uses weight k for F and 2 − k for f. Section 6 restates Theorem 1.4 with F in weight 2 − k and f in weight k, and writes r for k − 2. Safe to skip once you spot it.
- Level. The geometry is set up for Γ<sub>1</sub>(N) with N ≥ 5, so that the moduli problem has a universal curve. The theorem is stated for Γ<sub>0</sub>(N) with character. Safe to skip.
- Integral weight only. The author says the method does not reach the half-integral weight, vector-valued forms used by Bruinier and Ono. Safe to skip.
- Lowering operator. Section 4 gives a geometric description of the Shimura–Maass lowering operator, parallel to Katz's for the raising operator. Safe to skip on a first reading.
- The earlier theorem. I do not state the exact conclusion of the Bruinier–Ono–Rhoades result (Theorem 1.3), because a symbol was lost in my copy of the text. Safe to skip.

## One next step

Open the paper and read Theorem 1.3, the two sentences after it, and Theorem 1.4 on page 4.
