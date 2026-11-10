source: https://arxiv.org/pdf/1807.10812
slogan: Deligne's proof of the Riemann hypothesis over finite fields fits in fifty pages once you fibre a variety into hyperplane sections and bound one family.
basis: the introduction and the main theorem statements

## Before you start

This is 49 pages that lean on étale cohomology from the second section on, and the proof it retells has a fearsome reputation. You may feel small in front of it, or afraid of being too slow. Both feelings are allowed here. Nothing asks you to check the étale machinery. If you want to know what Deligne actually did, as a sequence of moves, the outline is within reach. Enjoy following the plot. Reaching the last page is secondary.

## The story

For a smooth projective variety X<sub>0</sub> over 𝔽<sub>q</sub>, Weil predicted that the generating function of its point counts is rational, has a functional equation, and has zeros and poles of absolute value q<sup>−i/2</sup>. Grothendieck's school built ℓ-adic cohomology, and the first statements fell out of a Lefschetz fixed-point formula and Poincaré duality. The last one, the Riemann hypothesis, resisted. People expected it to need the standard conjectures on algebraic cycles. Deligne avoided them. He cut X into a pencil of hyperplane sections over a line, so that the middle cohomology of the fibres becomes a sheaf on a curve. An idea from Rankin's work on modular forms then bounds Frobenius on that sheaf, provided its monodromy is large. A tensor-power trick sharpens a weak bound into the exact one.

## Main definitions

**Zeta function.** Z(X<sub>0</sub>, t) = exp(Σ #X<sub>0</sub>(𝔽<sub>q<sup>n</sup></sub>) t<sup>n</sup>/n), summed over n ≥ 1. It also equals the product over closed points x of (1 − t<sup>deg x</sup>)<sup>−1</sup>.

**Frobenius endomorphism.** Let X be X<sub>0</sub> after extending scalars to the algebraic closure of 𝔽<sub>q</sub>. The map F : X → X raises coordinates to the q-th power.
- The fixed points of F<sup>n</sup> are exactly the points X<sub>0</sub>(𝔽<sub>q<sup>n</sup></sub>).
- F acts on the ℓ-adic cohomology H<sup>i</sup>(X, ℚ<sub>ℓ</sub>) for each prime ℓ different from the characteristic.

**Weight.** A locally constant ℚ<sub>ℓ</sub>-sheaf on a curve U<sub>0</sub> over 𝔽<sub>q</sub> has weight β if, at every closed point x, the eigenvalues of Frobenius are algebraic numbers all of whose complex conjugates have absolute value N(x)<sup>β/2</sup>, where N(x) is the size of the residue field.

**Lefschetz pencil.** A family of hyperplane sections of X, parametrised by a projective line, whose axis is transverse to X and whose singular members each have a single ordinary double point. Each such point gives a vanishing cycle in the middle cohomology of a smooth member.

## Main results

**Theorem (Weil conjectures; statements I to IV of Section 1.1).** Let X<sub>0</sub> be a smooth projective variety of dimension d over 𝔽<sub>q</sub>. Then Z(X<sub>0</sub>, t) is a rational function P<sub>1</sub>P<sub>3</sub>…P<sub>2d−1</sub>/(P<sub>0</sub>P<sub>2</sub>…P<sub>2d</sub>) with integral polynomials P<sub>i</sub>. It satisfies Z(X<sub>0</sub>, q<sup>−d</sup>t<sup>−1</sup>) = ±q<sup>dχ/2</sup> t<sup>χ</sup> Z(X<sub>0</sub>, t). If X lifts to characteristic 0, the degrees of the P<sub>i</sub> are the Betti numbers of the lift.
- Step 1: the Lefschetz trace formula gives P<sub>i</sub>(t) = det(1 − Ft on H<sup>i</sup>(X, ℚ<sub>ℓ</sub>)).
- Step 2: Poincaré duality gives the functional equation.

**Theorem (Deligne; stated in Section 3).** For X<sub>0</sub> smooth and projective over 𝔽<sub>q</sub>, each i and each ℓ different from the characteristic, the eigenvalues of F on H<sup>i</sup>(X, ℚ<sub>ℓ</sub>) are algebraic numbers of absolute value q<sup>i/2</sup>.
- Step 1 (Section 4): reduce to the middle cohomology in even dimension d, and to the weaker bound q<sup>d/2 − 1/2</sup> ≤ |α| ≤ q<sup>d/2 + 1/2</sup>. Applying the weak bound to products X<sup>k</sup> recovers the exact one.
- Step 2 (Sections 6 to 8): take a Lefschetz pencil and apply the Main Lemma to the sheaf of vanishing cycles on the line.

**Theorem (Main Lemma; Section 5).** Let F<sub>0</sub> be a locally constant ℚ<sub>ℓ</sub>-sheaf on a curve U<sub>0</sub> over 𝔽<sub>q</sub>. Assume it carries a nondegenerate skew-symmetric form with values in ℚ<sub>ℓ</sub>(−β). Assume the geometric fundamental group has open image in the symplectic group of a stalk. Assume every local characteristic polynomial of Frobenius has rational coefficients. Then F<sub>0</sub> has weight β.
- Step 1: even tensor powers of F<sub>0</sub> have local factors with positive rational coefficients.
- Step 2: invariant theory of the symplectic group locates the poles of the product, and positivity passes the bound to each factor.

**Theorem (Kazhdan-Margulis; Section 6.3).** For a Lefschetz pencil with odd-dimensional fibres, the image of the monodromy representation on the vanishing part of the cohomology is open in the symplectic group. The source spells the first name "Kajdan".

## Note, then ignore

- Independence of ℓ. The polynomials P<sub>i</sub> are defined with a chosen prime ℓ. That they do not depend on it follows from the Riemann hypothesis. Safe to skip on a first reading.
- Tate twists. Symbols like ℚ<sub>ℓ</sub>(−β) keep track of how Frobenius scales a pairing. They shift weights by even integers and nothing more. Safe to skip.
- Lefschetz pencils may not exist. In positive characteristic the given embedding can fail, and the paper replaces it by another projective embedding. Safe to skip.
- Finite base extension. The paper freely replaces 𝔽<sub>q</sub> by a finite extension, because eigenvalues are then raised to a power. Safe to skip.
- Section 2 is a survey. The étale cohomology results are stated with references and not proved. Safe to skip the proofs you do not see.

## One next step

Open the paper at Section 1.1 on page 2 and read only the four statements (I) to (IV) and the paragraph after them.
