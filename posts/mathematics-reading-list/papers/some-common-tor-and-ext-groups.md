source: https://math.jhu.edu/~jmb/note/torext.pdf
slogan: One two-term resolution of ℤ/n gives every tensor, Tor, Hom and Ext group among ℤ, ℤ/n and ℚ, except Ext(ℚ, ℤ).
basis: the full text

## Before you start

This is a six-page course handout of small computations. The likely feeling is a quiet embarrassment: you think you ought to know Ext(ℤ/n, ℤ) by heart already, so looking it up feels like an admission. It is fine to feel that. Many working topologists look these up. If you want the universal coefficient theorems to stop being a place where you guess, these tables remove the guessing. Work one case by hand because it is satisfying, and keep the note as a lookup sheet for the others.

## The story

The universal coefficient and Künneth theorems hand you answers in terms of G ⊗ H, Tor(G, H), Hom(G, H) and Ext(G, H). To finish a homology calculation you need these groups for the pieces that occur in practice. All four functors are biadditive, so for finitely generated groups it is enough to know them on ℤ and ℤ/n. The note also treats ℚ. Almost everything follows from one exact sequence, 0 → ℤ → ℤ → ℤ/n → 0 with first map multiplication by n. Tensor it with H, or apply Hom(−, H), and read off a kernel and a cokernel of n: H → H. One case resists: Ext(ℚ, ℤ). The last two pages show it is an uncountable rational vector space, described by p-adic numbers.

## Main definitions

**The four functors.** For abelian groups G and H, G ⊗ H is the target of the universal bilinear pairing G × H → G ⊗ H. Tor(G, H) is the derived functor of − ⊗ H, and Ext(G, H) is the derived functor of Hom(−, H). Both are computed from a free resolution 0 → F<sub>1</sub> → F<sub>0</sub> → G → 0. The note gives no abstract definitions and only computes.

**The subgroups nH and <sub>n</sub>H.** For an integer n, nH is the subgroup of elements of H divisible by n. The group <sub>n</sub>H is {h ∈ H : nh = 0}.
- They are the image and the kernel of multiplication by n on H.

**The restricted adèle group A.** A is the group of sequences (x<sub>2</sub>, x<sub>3</sub>, x<sub>5</sub>, …) with x<sub>p</sub> in the p-adic numbers ℚ<sub>p</sub> and x<sub>p</sub> in the p-adic integers ℤ<sub>p</sub> for all but finitely many p. ℚ sits inside A as the constant sequences.
- There is no real coordinate, unlike the adèles of number theory.

## Main results

**Proposition (the case G = ℤ/n; Propositions 8 and 20).** For every abelian group H: ℤ/n ⊗ H ≅ H/nH, Tor(ℤ/n, H) ≅ <sub>n</sub>H, Hom(ℤ/n, H) ≅ <sub>n</sub>H and Ext(ℤ/n, H) ≅ H/nH.
- Step 1: tensor 0 → ℤ → ℤ → ℤ/n → 0 with H, using ℤ ⊗ H ≅ H. This gives 0 → Tor(ℤ/n, H) → H → H → ℤ/n ⊗ H → 0, with middle map n.
- Step 2: apply Hom(−, H) to the same sequence, using Hom(ℤ, H) ≅ H. This gives 0 → Hom(ℤ/n, H) → H → H → Ext(ℤ/n, H) → 0.

**Corollary (cyclic against cyclic; Proposition 12 and Corollary 21).** Let d = gcd(n, m). Then ℤ/n ⊗ ℤ/m, Tor(ℤ/n, ℤ/m), Hom(ℤ/n, ℤ/m) and Ext(ℤ/n, ℤ/m) are all isomorphic to ℤ/d. Also Hom(ℤ/n, ℤ) = 0 and Ext(ℤ/n, ℤ) ≅ ℤ/n.

**Proposition (the easy cases with ℤ and ℚ; Propositions 5, 6, 19 and 22, Corollaries 10 and 17).** For all abelian groups G and H:
- With ℤ: ℤ ⊗ H ≅ H, Hom(ℤ, H) ≅ H, and Tor(ℤ, H) = Tor(G, ℤ) = Ext(ℤ, H) = 0.
- With ℚ: ℚ ⊗ ℚ ≅ ℚ, Hom(ℚ, ℚ) ≅ ℚ, Tor(G, ℚ) = 0 and Ext(G, ℚ) = 0. All four functors vanish on the pair ℤ/n and ℚ in either order, and Hom(ℚ, ℤ) = 0.

**Theorem (the hard case; Theorem 25).** Ext(ℚ, ℤ) ≅ A/ℚ. It is an uncountable rational vector space.
- Step 1: apply Hom(ℚ, −) to 0 → ℤ → ℚ → ℚ/ℤ → 0. Since Hom(ℚ, ℤ) = 0 and Ext(ℚ, ℚ) = 0, this gives Ext(ℚ, ℤ) ≅ Hom(ℚ, ℚ/ℤ)/ℚ.
- Step 2: split ℚ/ℤ into its p-primary parts ℤ/p<sup>∞</sup> and show Hom(ℚ, ℤ/p<sup>∞</sup>) ≅ ℚ<sub>p</sub> (Lemma 27). Then Hom(ℚ, ℚ/ℤ) is A.

## Note, then ignore

- Symmetry of Tor. Tor(G, H) ≅ Tor(H, G) is true but needs proof. The note avoids using it and always resolves the first variable. Safe to skip on a first reading.
- ℤ<sub>p</sub> versus ℤ/p. Here ℤ<sub>p</sub> means the p-adic integers and ℤ/p the integers mod p. Safe to skip until the last section.
- Injectivity of ℚ. Ext(G, ℚ) = 0 rests on the standard fact that divisible groups are injective, which the note quotes without proof. Safe to skip.
- The trick for ℚ against ℤ/n. Multiplication by n is both invertible and zero on any biadditive functor of this pair, so the group vanishes. It is a shortcut, and safe to skip.
- Attribution. The note carries the file stamp "JMB" and a Johns Hopkins course number, and gives no author name on the page. The author says he has no reference for Theorem 25 and marks that section optional. Safe to skip.

## One next step

Open the note at page 2 and read Proposition 8 with its three-line proof. Then compute ℤ/4 ⊗ ℤ/6 and Tor(ℤ/4, ℤ/6) yourself and check them against Proposition 12.
