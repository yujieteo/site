source: https://arxiv.org/pdf/2005.09690
slogan: Enlarging an algebraically closed base field creates no new tame covers of a normal variety, so tame local systems can be compared freely.
basis: the introduction and the main theorem statements

## Before you start

This is a folklore theorem, written down carefully. Reading it can raise a specific unease: the proof cites Abhyankar's lemma, Nagata compactification, spreading out and several Stacks Project tags, and you may feel you ought to know each one already. That unease is fine to carry along. If you want to use étale fundamental groups without fear of the base field, this note gives you one clean fact to rely on. Enjoy the statement first. The proof is there when you want it.

## The story

Take a variety U over an algebraically closed field k, and a bigger algebraically closed field L. Does U<sub>L</sub> have more finite étale covers than U? In characteristic 0 it does not. In characteristic p it does: Artin–Schreier covers of the affine line, such as y<sup>p</sup> − y = ax<sup>p−1</sup> with a in L but not in k, do not come from k. These covers are wildly ramified at infinity. So people expected that tame covers, with ramification of order prime to p, all come from k. Special cases were known, but no complete proof was in print. Landesman gives one. The key step is for curves. A tame cover of U<sub>L</sub> is spread out over a k-algebra and specialised to get a cover over k with the same ramification. That cover absorbs the ramification, and the proper case finishes.

## Main definitions

**Normal compactification.** Let U be a connected, normal, separated scheme of finite type over k. A normal compactification is a proper normal scheme Ū that contains U as a dense open subscheme. One always exists, by Nagata's theorem followed by normalisation.

**Tame cover.** Let E → U be a finite étale Galois cover with group G, and let Ē be the normalisation of Ū in the function field of E. The inertia group at a point of Ē is the group of elements of G that fix the point and act trivially on its residue field. The cover is tame if every inertia group at a point over Ū − U has order prime to p.
- Characteristic 0: every cover is tame.
- Not Galois: test the Galois closure.

**Numerically tame fundamental group π<sub>1</sub><sup>tame</sup>(U).** The automorphism group of the fibre functor on tame finite étale covers of U. It is a quotient of π<sub>1</sub>(U). The prime-to-p fundamental group is in turn a quotient of it.
- Dependence: it depends on the choice of Ū in general. It agrees with the classical tame fundamental group when Ū is smooth with normal crossings boundary.

## Main results

**Theorem (invariance; Theorem 1.1).** Let k be an algebraically closed field of characteristic p ≥ 0. Let U be a connected, normal, separated scheme of finite type over k, with any normal compactification Ū. Let L be an algebraically closed field containing k. Then the natural map π<sub>1</sub><sup>tame</sup>(U<sub>L</sub>) → π<sub>1</sub><sup>tame</sup>(U) is an isomorphism. Tameness for U<sub>L</sub> is taken with respect to Ū<sub>L</sub>.
- Step 1 (surjective, Lemma 2.3): a connected cover stays connected after base change between algebraically closed fields.
- Step 2 (injective): show that every tame cover of U<sub>L</sub> is the base change of a cover of U. Prove it for smooth curves, then fibre a smooth quasi-projective U in curves, then reduce the normal case to the smooth case.

**Proposition (curve case; Proposition 2.10, with Lemmas 2.6 and 2.9).** The theorem holds for a smooth connected curve U. Given a tame Galois cover E of U<sub>L</sub>, there is a cover U′ → U over k with the same ramification indices over the boundary points.
- Step 1: spread E out over a finitely generated k-algebra A ⊂ L and specialise at a general k-point of Spec A to get U′.
- Step 2: by Abhyankar's lemma, the pullback of E to U′<sub>L</sub> extends to a finite étale cover of projective curves. The proper case, which is classical, says it comes from k.

**Corollary (separably closed fields; Corollary 1.2).** The same statement holds when k and L are only separably closed, since purely inseparable extensions do not change the fundamental group. Also, the prime-to-p fundamental groups of U<sub>L</sub> and U are isomorphic (Remark 1.3).

## Note, then ignore

- Tameness is essential. Example 1.7 shows that the full π<sub>1</sub> of the affine line changes with the field in characteristic p. Worth one look, then safe to set aside.
- "Numerically" tame. The paper uses the Kerz–Schmidt notion, which makes sense for any normal compactification. It is there because smooth normal crossings compactifications are not known to exist in characteristic p. Safe to skip on a first reading.
- Dominating compactifications. Section 2.11 checks that tameness for one compactification implies tameness for a compactification that maps to it. This is needed only to apply Chow's lemma. Safe to skip.
- Basepoints. They are left out of the notation throughout. Safe to skip.
- Earlier proofs. The prime-to-p case and the characteristic 0 case were in the literature, the latter using resolution of singularities (Remark 1.5). Safe to skip.

## One next step

Open the paper and read Theorem 1.1, then Example 1.7 just below it. Together they take two minutes and show both the statement and why it needs "tame".
