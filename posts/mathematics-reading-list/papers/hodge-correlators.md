source: https://arxiv.org/pdf/0803.0297
slogan: Integrals of Green functions over trees on a punctured curve compute the real mixed Hodge structure on its fundamental group.
basis: the abstract and introduction

## Before you start

This paper has 133 pages and a 25-page introduction that touches Feynman integrals, twistors, motives, L-values and modular curves. The likely feeling is overwhelm, the sense that you would need five other subjects first. Nothing is wrong with you for feeling that. The paper is that wide. If you want to see why Feynman-style integrals and periods of fundamental groups keep turning out to be the same numbers, this paper proposes a reason. Pick the one thread you enjoy and follow it. Covering the whole text is a low priority.

## The story

A punctured curve X − S has a fundamental group, and its pronilpotent completion carries a mixed Hodge structure. Its periods are usually written with Chen's iterated integrals: polylogarithms on the sphere, elliptic analogues on a torus. That description hides the arithmetic, since it gives numbers and no rule for how they break into simpler numbers. Goncharov gives a second description. Take a trivalent plane tree, put a Green function of the curve on each edge, and integrate over the positions of the inner vertices. Sum over trees. These numbers are the Hodge correlators. He proves they encode the same mixed Hodge structure, as a module over the Hodge Galois group. He then lifts them to motivic correlators, which come with an explicit coproduct. The simplest correlator on a modular curve is a Rankin-Selberg integral.

## Main definitions

**Fundamental Lie algebra.** Let X be a smooth compact complex curve, S a finite set of points, s<sub>0</sub> a point of S and v<sub>0</sub> a non-zero tangent vector at s<sub>0</sub>. Complete the group algebra ℚ[π<sub>1</sub>(X − S, v<sub>0</sub>)] at its augmentation ideal. The primitive elements form a free pronilpotent Lie algebra π<sub>1</sub><sup>nil</sup>(X − S, v<sub>0</sub>).
- Its weight-graded version is the free Lie algebra on H<sub>1</sub>(X, ℂ) ⊕ ℂ[S − {s<sub>0</sub>}].

**Hodge correlator.** Take a cyclic word W in H<sup>1</sup>(X, ℂ) and the points of S − {s<sub>0</sub>}. For each plane trivalent tree with outer edges labelled by the letters of W, attach a Green function to each edge, apply a fixed polydifferential operator to get a top-degree form, and integrate over the product of copies of X indexed by inner vertices. The sum over trees is the number Cor<sub>H</sub>(W).
- The sum over trees makes the map vanish on shuffle relations.

**Twistor connection.** A connection of a prescribed shape on a bigraded bundle, in the variables of X and two extra parameters z and w, built from operators G<sub>p,q</sub> and a one-form g<sub>0,0</sub>, whose restriction to the line z + w = 1 is flat. Flatness is a system of quadratic Maurer-Cartan equations on the data.

**Motivic correlator.** The image of a cyclic tensor product of pure motives under a map of Lie coalgebras into the motivic Lie coalgebra, dual to the action of the motivic Lie algebra on the fundamental Lie algebra of X − S.

## Main results

**Theorem (twistor connections; Theorem 1.8).** The abelian tensor category of twistor connections on a complex manifold is canonically equivalent to the category of variations of real mixed Hodge structures on it.

**Theorem (Hodge correlators give the standard structure; Theorem 1.12).** As (X, S, v<sub>0</sub>) varies, the Hodge correlators and a companion one-form satisfy the twistor connection equations. The resulting variation of real mixed Hodge structures is isomorphic to the standard one on π<sub>1</sub><sup>nil</sup>(X − S, v<sub>0</sub>).
- Step 1: dualise the correlator map to a Green operator, and identify cyclic words modulo shuffles with special derivations of the free Lie algebra.
- Step 2: prove the quadratic differential equations for the correlators in families, then compare with the structure of Morgan, Hain and Beilinson.

**Theorem (periods of motivic correlators; Theorem 1.14 and Corollary 1.15).** The Hodge version of the motivic correlator map, followed by a canonical period map, equals the Hodge correlator map. If the expected category of mixed motives exists, the real period of a motivic correlator is the Hodge correlator.

**Claim (physics argument; Section 1.7).** The Hodge correlators are the correlators, in the perturbative expansion, of a Feynman integral over matrix-valued functions on X. The Feynman integral has no rigorous meaning. The resulting finite-dimensional integrals do converge.

## Note, then ignore

- Motives are partly conjectural. The motivic statements hold in Hodge or l-adic realisations, or for the projective line over a number field. In general they assume a category of mixed motives. Note it, then read on.
- Normalising the Green function. The Green function is defined up to a constant, and the tangent vector v<sub>0</sub> fixes it. Safe to skip on a first reading.
- New generators. The paper uses generators of the Hodge Galois group that differ from Deligne's. This is why the periods obey quadratic equations. Safe to skip.
- The DG enhancement. A proposed differential graded version of Hodge sheaves takes up Sections 4 to 6 and includes a conjecture. Safe to skip.
- Higher dimension. The case of a general projective variety is in a separate paper. Safe to skip.

## One next step

Open the paper at Section 1.6 (page 11) and read Example 1.6 with Figure 1, the tree with six labelled ends.
