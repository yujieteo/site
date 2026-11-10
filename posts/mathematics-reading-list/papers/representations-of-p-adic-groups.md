source: https://www.math.uni-bonn.de/people/fintzen/Fintzen_CDM.pdf
slogan: Yu's recipe builds supercuspidal representations of a tame p-adic group by compact induction, and for p not dividing the Weyl group order it builds them all.
basis: the introduction and the main theorem statements

## Before you start

These are 45 pages of survey notes, and a third of them review reductive groups from the definition up. The likely feeling is boredom in Section 2 if you know that material, or worry about pace if you do not. Either is fine. The author says outright that readers who know what a p-adic group is may skip Section 2. If you want to see what the building blocks of the local Langlands correspondence look like as actual matrices, this text shows you. Look at the tree picture first and enjoy it. Finishing is secondary.

## The story

Every irreducible smooth representation of a p-adic group such as SL<sub>n</sub>(ℚ<sub>p</sub>) sits inside a representation induced from a supercuspidal representation of a Levi subgroup. So supercuspidals are the building blocks. Cartier's 1979 survey had to leave their construction out. For GL<sub>n</sub> the problem was solved by Bushnell and Kutzko. General groups lacked a tool. The tool came from Bruhat–Tits theory and Moy–Prasad: each point x of a building gives a compact subgroup with a filtration by depth. For SL<sub>2</sub>(ℚ<sub>p</sub>) the building is a tree of valency p + 1. Yu used these filtrations in 2001 to build supercuspidals for any group that splits over a tame extension. Kim, and then Fintzen in 2021 by a different method, proved the list is complete under a mild condition on p.

## Main definitions

**Supercuspidal representation.** An irreducible smooth complex representation π of G(F), F a non-archimedean local field, that is not a subrepresentation of any representation parabolically induced from a proper Levi subgroup (Definition 2.4.7).
- Equivalent: its matrix coefficients have compact support modulo the centre (Fact 2.4.11).

**Moy–Prasad filtration and depth.** To each point x of the Bruhat–Tits building B(G, F) belong a parahoric subgroup G<sub>x,0</sub> and normal subgroups G<sub>x,r</sub> for real r ≥ 0, decreasing in r. The depth of π is the smallest r ≥ 0 such that π has a non-zero vector fixed by G<sub>x,r+</sub> for some x (Definition 3.4.1).
- Example: for a vertex x of the tree of SL<sub>2</sub>(ℚ<sub>p</sub>), G<sub>x,0</sub> = SL<sub>2</sub>(ℤ<sub>p</sub>) and G<sub>x,n</sub> is the matrices congruent to 1 mod p<sup>n</sup>.

**Yu datum.** A tuple: a chain G = G<sub>1</sub> ⊇ G<sub>2</sub> ⊋ … ⊋ G<sub>n+1</sub> of tamely split twisted Levi subgroups, a point x, depths r<sub>1</sub> > … > r<sub>n</sub> > 0, a depth-zero representation ρ of the stabiliser of [x] in G<sub>n+1</sub>(F), and characters φ<sub>i</sub> of G<sub>i+1</sub>(F) of depth r<sub>i</sub>. The φ<sub>i</sub> must be generic, and ρ must restrict to a cuspidal representation of a finite reductive group (Section 4.1).
- A twisted Levi subgroup is a subgroup that becomes a Levi subgroup over a finite extension of F.

## Main results

**Theorem (depth zero; Theorem 4.4.1, Moy–Prasad, Morris).** Let x be a vertex of the building. Let ρ be an irreducible smooth representation of the stabiliser G<sub>x</sub>, trivial on G<sub>x,0+</sub>, whose restriction to G<sub>x,0</sub> is a cuspidal representation of the finite group G<sub>x,0</sub>/G<sub>x,0+</sub>. Then the compact induction of ρ to G(F) is irreducible and supercuspidal. All depth-zero supercuspidals arise this way.
- Step 1: it suffices to show that only elements of G<sub>x</sub> intertwine ρ.
- Step 2: if g moves x, cuspidality of ρ over the finite field forbids intertwining.

**Theorem (Yu's construction; Theorem 4.2.1, Yu, Fintzen).** From a Yu datum one builds a compact-mod-centre open subgroup K̃ and a representation ρ̃ of it. Its compact induction to G(F) is an irreducible supercuspidal representation. The survey assumes p ≠ 2 here.
- Step 1: ρ̃ is ρ tensored with a representation κ built from the characters φ<sub>i</sub> through Heisenberg–Weil representations.
- Step 2: genericity of the φ<sub>i</sub> controls which g can intertwine.

**Theorem (when two data agree; Theorem 4.5.5, Hakim–Murnaghan, Kaletha).** Two Yu data give isomorphic representations if and only if they are G(F)-equivalent, that is, linked by refactorisations, conjugations and elementary transformations.

**Theorem (exhaustion; Theorem 5.1.1, Kim, Fintzen).** Suppose G splits over a tamely ramified extension of F and p does not divide the order of the absolute Weyl group of G. Then every irreducible supercuspidal representation of G(F) arises from Yu's construction.
- Kim proved it for characteristic zero and very large p, through the Plancherel formula.
- Fintzen's proof also covers F of positive characteristic.

## Note, then ignore

- Normalised induction. Some authors twist parabolic induction by a square root of the modulus character. The survey says both versions work for its purposes (Remark 2.4.6). Safe to skip.
- Condition (GE2). Genericity has a third condition from Yu's paper. It follows from the others when p does not divide the Weyl group order. Safe to skip.
- Enlarged building. The point x lives in an enlarged building that also records the centre. It differs from the usual building only when the centre of G is infinite. Safe to skip on a first reading.
- Index conventions. Fintzen numbers the twisted Levi chain downwards from G<sub>1</sub> = G. Yu numbers it upwards from G<sup>0</sup> (Aside 4.1.2). Safe to skip unless you open Yu's paper.
- Quadratic twist. Fintzen, Kaletha and Spice twist Yu's construction by a sign character. This changes the parametrisation, not the set of representations. Safe to skip.

## One next step

Open the notes at page 5 and look only at Figure 1, the tree for SL<sub>2</sub>(ℚ<sub>2</sub>), and the two columns of matrix groups beside it.
