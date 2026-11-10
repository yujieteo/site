source: https://arxiv.org/pdf/2405.03648
slogan: Sheaves built from Kac–Moody modules go to sheaves built from opers under the Langlands functor, so one large family of sheaves is under control.
basis: the abstract and introduction

## Before you start

This is paper two of five, 448 pages long, with ten appendices starting on page 233. Overwhelm is the natural feeling, and perhaps a sense that such a paper is not meant for you. Both are fair responses. The main theorem is one commutative square, and the introduction explains each corner in a bullet. If you want to see how a proof of geometric Langlands is assembled, that square is a good place to stand. Enjoy the square. The appendices can stay closed.

## The story

Paper one of the series built a functor L<sub>G</sub> from D-modules on Bun<sub>G</sub> to ind-coherent sheaves on the stack of Ǧ-local systems. To prove it is an equivalence, one needs to know what it does to enough objects. Beilinson and Drinfeld supplied a factory for objects on Bun<sub>G</sub>: take a module over the affine Kac–Moody algebra at the critical level and "localise" it. On the spectral side there is a matching factory starting from opers. This paper proves that L<sub>G</sub> carries the first factory to the second. The bridge between the two local inputs is the fundamental local equivalence (FLE), a categorical form of the Feigin–Frenkel isomorphism. The authors say the result had folklore status since 2014. The work lies in making the infinite-dimensional categories exist.

## Main definitions

**Kazhdan–Lusztig category at the critical level.** KL(G)<sub>crit</sub> is the category of modules over the affine Kac–Moody algebra of 𝔤 at the critical level that are integrable for the arc group L<sup>+</sup>G. The paper uses its version over the Ran space, where the point of the curve is allowed to move and multiply.

**Monodromy-free opers.** Op<sup>mon-free</sup><sub>Ǧ</sub> parametrises a finite set of points x of the curve, a Ǧ-local system on the formal disc at x, and an oper structure on its restriction to the punctured disc.
- At one fixed point this space is due to Frenkel and Gaitsgory.
- Over the Ran space it has infinite type, so defining ind-coherent sheaves on it takes Section 3 and Appendix A.

**Localisation functor.** Loc<sub>G,crit</sub> sends an object of KL(G)<sub>crit</sub> over the Ran space to a critically twisted D-module on Bun<sub>G</sub>. It generalises chiral homology.

**Spectral Poincaré functor.** Poinc<sup>spec</sup> sends ind-coherent sheaves on monodromy-free opers to ind-coherent sheaves on LS<sub>Ǧ</sub>. It is pull then push along the space of local systems on the whole curve X with an oper structure away from x.

## Main results

Throughout, the ground field is algebraically closed of characteristic 0.

**Theorem (Langlands functor and localisation; Theorem 0.1.2, proved as Theorem 18.5.2).** The square commutes: L<sub>G</sub> applied to Loc<sub>G,crit</sub> (tensored with a shifted line) agrees with Poinc<sup>spec</sup> applied to FLE<sub>G,crit</sub>, as functors from KL(G)<sub>crit</sub> over the Ran space to IndCoh<sub>Nilp</sub>(LS<sub>Ǧ</sub>).
- Step 1: express both ways round the square as chiral homology of the critical-level W-algebra.
- Step 2: compare them with the Feigin–Frenkel isomorphism.

**Theorem (critical FLE; Theorem 6.1.4).** There is a t-exact equivalence of factorisation categories FLE<sub>G,crit</sub> : KL(G)<sub>crit</sub> → IndCoh<sup>∗</sup>(Op<sup>mon-free</sup><sub>Ǧ</sub>).
- Step 1: build the functor from Drinfeld–Sokolov reduction and the Beilinson–Drinfeld "birth of opers". Show it preserves compact objects.
- Step 2: this reduces the claim to one point at a time, which is a theorem of Frenkel–Gaitsgory. The paper reproves it from derived Satake and the affine Skryabin theorem.

**Theorem (localisation and Whittaker coefficients; Theorem 12.8.8).** At any level κ, taking the vacuum Whittaker coefficient of a localised Kac–Moody module equals taking Drinfeld–Sokolov reduction first and then chiral homology of the W-algebra.

**Theorem (Hecke eigen-property; Section 15, Corollary 15.5.9).** Localisation at the critical level factors through a functor that is linear for the action of Rep(Ǧ) over the Ran space, where Rep(Ǧ) acts on Bun<sub>G</sub> by Hecke functors. This extends the Beilinson–Drinfeld result from the vacuum module to all of KL(G)<sub>crit</sub>. I read only the summary of this statement in the introduction.

## Note, then ignore

- The line l. The square holds up to tensoring with a one-dimensional vector space in some cohomological degree. The authors say to ignore it at first. Safe to skip on a first reading.
- IndCoh<sup>∗</sup> versus IndCoh<sup>!</sup>. In infinite type there are two versions of ind-coherent sheaves, dual to each other. Section 3 identifies them for opers. Safe to skip.
- Unital and lax unital. A local-to-global functor must commute with inserting the vacuum at extra points. Section 11 and Appendices C, H and I make this precise. Safe to skip.
- ∞-categories. Beilinson and Drinfeld mostly worked with abelian categories. The authors say that redoing the foundations at the derived level accounts for the length. Safe to skip.
- Not surjective. Loc<sub>G,crit</sub> does not hit every D-module, only nearly so. How the series closes the gap belongs to the later papers. Safe to skip.

## One next step

Open the PDF at page 6 and read Theorem 0.1.2 and the bullet list directly under it.
