source: https://swc-math.github.io/aws/2017/2017BhattNotes.pdf
slogan: Pull a p-adic variety up an infinite tower until differential forms vanish, then descend, and the forms return as Tate twists in étale cohomology.
basis: the introduction and the main theorem statements

## Before you start

These are about 50 pages of lecture notes that assume étale cohomology from the first page and reach for the cotangent complex and the pro-étale site by Lecture 3. You may feel shame at the background you lack. That feeling is allowed. It needs no fixing before you read. If you want to see why perfectoid spaces earn their keep, this is the shortest honest route. Read Lecture 1 for pleasure. The rest can wait.

## The story

Over ℂ, Hodge theory splits the cohomology of a smooth proper variety into pieces H<sup>i</sup>(X, Ω<sup>j</sup>). Tate asked for the same over a p-adic field K, where the cohomology is étale and carries an action of the Galois group G<sub>K</sub>. He proved it for abelian varieties with good reduction, and Faltings proved it in general. Bhatt explains Scholze's proof. The idea has two steps. First, cover X by a tower X<sub>∞</sub> → X that is infinitely ramified at p. For an abelian variety, take the tower of multiplication-by-p maps. On X<sub>∞</sub> there are no differential forms left, so only the structure sheaf carries cohomology. Second, descend from X<sub>∞</sub> back to X. The forms reappear in the descent, each twisted by a power of the cyclotomic character.

## Main definitions

**Tate twist.** ℤ<sub>p</sub>(1) is the inverse limit of the groups of p-power roots of unity, a free ℤ<sub>p</sub>-module of rank 1 with Galois action. For a ℤ<sub>p</sub>-algebra R, write R(i) = R ⊗ ℤ<sub>p</sub>(1)<sup>⊗i</sup>.
- On ℂ<sub>p</sub>(j) the group G<sub>K</sub> acts semilinearly, not linearly.

**ℂ<sub>p</sub>.** The completion of an algebraic closure of K, where K is a finite extension of ℚ<sub>p</sub>. The action of G<sub>K</sub> on the algebraic closure extends to it by continuity.

**Completed structure sheaf.** On the pro-étale site of a rigid space X, an object is roughly a tower of finite étale covers over an étale U<sub>0</sub> → X. The sheaf Ô<sub>X</sub> sends a tower to the completion of the direct limit of the rings of functions on its levels.
- The projection ν goes from the pro-étale site of X to the étale site of X.

**Integral perfectoid algebra.** A p-adically complete, p-torsion-free algebra R over the ring of integers O<sub>C</sub> such that Frobenius gives an isomorphism R/p<sup>1/p</sup> ≅ R/p (Remark 2.2.2).

## Main results

**Theorem (Hodge-Tate decomposition; Theorem 1.1.7).** Let K be a finite extension of ℚ<sub>p</sub> and X a smooth proper variety over K. Then there is a G<sub>K</sub>-equivariant isomorphism, functorial in X, between H<sup>n</sup>(X over the algebraic closure, ℚ<sub>p</sub>) ⊗ ℂ<sub>p</sub> and the direct sum over i + j = n of H<sup>i</sup>(X, Ω<sup>j</sup>) ⊗<sub>K</sub> ℂ<sub>p</sub>(−j).
- Step 1: study Hodge cohomology locally on a perfectoid cover, where the forms vanish.
- Step 2: descend to X, where the forms return with twists.

**Theorem (Tate; Theorem 1.1.8).** For i ≠ 0, both H<sup>0</sup>(G<sub>K</sub>, ℂ<sub>p</sub>(i)) and H<sup>1</sup>(G<sub>K</sub>, ℂ<sub>p</sub>(i)) vanish. For i = 0 each is a copy of K. So different twists admit no equivariant maps between them.
- Consequence (Corollary 1.1.11): H<sup>i</sup>(X, Ω<sup>j</sup>) is the G<sub>K</sub>-invariant part of H<sup>i+j</sup>(étale, ℚ<sub>p</sub>) ⊗ ℂ<sub>p</sub>(j). The Galois representation knows the Hodge numbers.

**Theorem (Hodge-Tate spectral sequence, Scholze; Theorem 3.0.1).** Let C be a complete, algebraically closed extension of ℚ<sub>p</sub> and X a proper smooth rigid-analytic space over C. Then there is an E<sub>2</sub> spectral sequence from H<sup>i</sup>(X, Ω<sup>j</sup>)(−j) to H<sup>i+j</sup>(X<sub>ét</sub>, ℤ<sub>p</sub>) ⊗ C. If X comes from a discretely valued subfield, the differentials are canonically zero and Theorem 1.1.7 follows.
- Step 1 (primitive comparison; Theorem 3.0.2): for proper X, étale cohomology tensored with C equals the pro-étale cohomology of Ô<sub>X</sub>.
- Step 2 (local version; Theorem 3.0.3): R<sup>j</sup>ν<sub>\*</sub>Ô<sub>X</sub> ≅ Ω<sup>j</sup>(−j). Then run the Leray spectral sequence for ν.

**Theorem (integral bound, Bhatt-Morrow-Scholze; Theorem 1.1.13).** If X extends to a proper smooth scheme over the integers of K, with special fibre X<sub>k</sub>, then the dimension over 𝔽<sub>p</sub> of H<sup>n</sup>(étale, 𝔽<sub>p</sub>) is at most the sum over i + j = n of the dimensions of H<sup>i</sup>(X<sub>k</sub>, Ω<sup>j</sup>). The inequality can be strict. The notes only sketch this, through a cohomology theory over the ring A<sub>inf</sub> (Theorem 4.2.1).

## Note, then ignore

- Étale cohomology with ℤ<sub>p</sub> coefficients: it is defined by an inverse limit, not as the cohomology of one sheaf. The notes flag this abuse in a footnote. Safe to skip on a first reading.
- The splitting is not canonical over C: over a field with no Galois action, Tate's theorem is not available, so you get a filtration and not a chosen decomposition (Remark 3.0.4). Safe to skip at first.
- No Kähler condition: the rigid-analytic theorem needs only proper and smooth. A footnote compares formal models to Kähler metrics. Safe to skip.
- The map α<sub>A</sub> for abelian varieties: the notes build it but do not prove it injective, for lack of space. Safe to skip.
- Breuil-Kisin twists: Lecture 4 uses a twist {−j} in place of (−j). It matters only for integral statements. Safe to skip.

## One next step

Open the notes and read only Theorem 1.1.7 and the paragraph after it that unravels the Galois action on each side.
