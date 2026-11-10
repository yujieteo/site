source: https://arxiv.org/pdf/2607.01178
slogan: Sheared Witt vectors undo the completion hidden in W(R), and they are pinned down by universal properties that mirror those of W itself.
basis: the introduction and the main theorem statements

## Before you start

The paper is 75 pages of ring theory with a lot of small notation: δ, F, V, a hat, a superscript s. The likely feeling is a fear of being slow, since every line asks you to recall which decoration means what. That is a normal response to this kind of algebra, and you can let it be there. If you want to know what the Witt vectors really are, and not only how to compute with them, the three universal properties in the introduction say it. Enjoy those. The other 70 pages can wait.

## The story

Dieudonné theory classifies finite locally free group schemes of p-power order over a perfect field k by modules over W(k) with a Frobenius and a Verschiebung. People want the same over more general rings. One thing blocks it. Group schemes over a filtered colimit of rings are the colimit of the group schemes over each ring, but R ↦ W(R)/p<sup>n</sup> does not commute with filtered colimits. The Witt vectors contain a hidden completion. Zink and Lau removed it for a restricted class of rings, and Drinfeld and Lau extended the construction to every ring whose reduction is perfect. Bhatt, Mathew and Vologodsky give an exposition of this ring <sup>s</sup>W(R). They show that it has universal properties parallel to those of W(R), which makes it computable. For R = 𝔽<sub>p</sub>[x<sup>1/p<sup>∞</sup></sup>]/(x) the answer is a direct sum of cyclic groups, derived p-completed, where W(R) has a completed one.

## Main definitions

**Nilperfect ring.** A ring R whose reduction R<sub>red</sub> is a perfect 𝔽<sub>p</sub>-algebra. A derived p-complete ring R with (R/p)<sub>red</sub> perfect is called p-completely nilperfect.

**Sheared Witt vectors.** Let Ŵ(R) ⊂ W(R) be the ideal of Witt vectors whose components are all nilpotent and almost all zero. For nilperfect R, the ring <sup>s</sup>W(R) is the pullback of W(R) → W(R)/Ŵ(R) along the map from the inverse limit of W(R)/Ŵ(R) over Frobenius.
- Consequence: there is a map <sup>s</sup>W(R) → W(R), and an exact sequence 0 → Ŵ(R) → <sup>s</sup>W(R) → lim<sub>F</sub> W(R)/Ŵ(R) → 0.
- Example: for a local Artinian ring R with perfect residue field k and maximal ideal m, <sup>s</sup>W(R) is the subring W(k) ⊕ Ŵ(m) of W(R).

**δ-nilperfect δ-ring.** In a δ-ring A, an element a is δ-nilpotent if every δ<sup>i</sup>(a) is nilpotent and δ<sup>i</sup>(a) = 0 for large i. The δ-ring A is δ-nilperfect if its quotient by the ideal of δ-nilpotent elements has bijective Frobenius.

**Taut square-zero extension.** A surjection of δ-rings B → A whose kernel I squares to zero, is derived p-complete, and on which δ acts as a bijection I → I.

## Main results

**Theorem (cofree property; Theorem 1.11).** Let R be a nilperfect ring. For every δ-nilperfect δ-ring A, composing with <sup>s</sup>W(R) → R gives a bijection from δ-ring maps A → <sup>s</sup>W(R) to ring maps A → R.
- Compare: Joyal's theorem says the same for W(R) with A any δ-ring. So <sup>s</sup>W is W with the test objects restricted.

**Theorem (universal taut extension; Theorem 1.14).** Let R be a p-completely nilperfect ring such that <sup>s</sup>W(R) → W(R) is surjective. Then <sup>s</sup>W(R) → W(R) is the universal taut square-zero extension of W(R) by a derived p-complete ideal: every taut square-zero extension A → W(R) receives a unique δ-ring map from <sup>s</sup>W(R) over W(R).
- Why this decompletes: for a filtered system of p-nilpotent rings R<sub>i</sub> with surjective Witt vector Frobenius, the map from the p-completed colimit of the W(R<sub>i</sub>) to W(colim R<sub>i</sub>) is a taut square-zero extension. Tautness measures the failure to commute with colimits.

**Theorem (left adjoint property; Theorem 1.17).** Assume p > 2. Let R be a p-complete ring with bounded p-power torsion and (R/p)<sub>red</sub> perfect. For every derived p-complete δ-Cartier ring A, maps of δ-Cartier rings <sup>s</sup>W(R) → A correspond to ring maps R → A/V.
- Compare: Magidson's theorem says W(R) is terminal among δ-Cartier rings A with A/V ≅ R. The sheared ring is initial among the derived p-complete ones.
- Step: every taut square-zero extension of <sup>s</sup>W(R) splits uniquely, so maps to A agree with maps to the V-completion of A.

**Theorem (perfectoid case; Theorem 6.20, as described in Example 1.18).** For a perfectoid ring R, <sup>s</sup>W(R) is a quotient of A<sub>inf</sub>(R). The Frobenius on <sup>s</sup>W(R) is surjective whenever R is semiperfectoid, unlike on W(R). I read only the introduction's summary of this theorem, not its full statement.

## Note, then ignore

- The prime 2. At p = 2 the Verschiebung axioms change, and the paper uses a modified structure with its own name and a modified V. Safe to skip on a first reading.
- Derived versus classical completeness. <sup>s</sup>W(R) is derived p-complete but usually not classically p-complete. This is why the definition for p-complete R needs care. Safe to skip.
- Not all rings. The definition covers nilperfect rings. Extending to all p-nilpotent rings by descent brings in higher cohomology, which the paper leaves out (Remark 1.3). Safe to skip.
- δ-Cartier axiom (3). The formula δ(V(x)) = x − p<sup>p−2</sup>V(x<sup>p</sup>) fixes how δ and V interact. Roughly, δ is a partial inverse to V. Safe to skip.
- Names. Zink and Lau studied the Artinian case earlier under other names. "Sheared" is this paper's term. Safe to skip.

## One next step

Open the paper at page 2 and read the first paragraph of the introduction after its opening sentence, the one that starts "Let us begin with some motivation".
