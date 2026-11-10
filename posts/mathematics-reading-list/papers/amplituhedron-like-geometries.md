source: https://arxiv.org/pdf/2106.09372
slogan: Relax one counting rule in the amplituhedron and you get regions whose volume forms are products of two scattering amplitudes.
basis: the introduction and the main theorem statements

## Before you start

This paper assumes you already know the amplituhedron, momentum twistors and N = 4 super Yang-Mills, and its formulas carry many indices. You may feel behind before page 3. That is a normal response to a paper written for insiders, and it need not go away. If you like the idea that a physical quantity is the volume form of a region cut out by inequalities, this paper gives a whole family of such regions. Take pleasure in definition (3.6). The rest is optional.

## The story

In planar N = 4 super Yang-Mills, a scattering amplitude is conjectured to be the canonical form of a region called the amplituhedron. A related region, the squared amplituhedron, comes from a limit of correlation functions and should give the square of the amplitude. But the square has residues that are not ±1, which no positive geometry allows. Dian and Heslop explain this. The amplituhedron is cut out by sign conditions plus one topological rule: a certain sequence of brackets must change sign the maximal number of times. Allow any number f of sign flips and you get new regions. Their union is the squared amplituhedron. Each piece should give one amplitude times its parity conjugate. The pieces touch only along thin boundaries, and that explains the odd residues.

## Main definitions

Here n is the number of particles, Z is a (k+4) × n matrix of data with positive maximal minors, and Y is an oriented k-plane in k+4 dimensions. Brackets ⟨Y i j l m⟩ are determinants.

**Canonical form.** A positive geometry has a unique top-degree rational form with logarithmic singularities on its boundaries and nowhere else. This form is the physical answer.

**Amplituhedron (flip definition; eqn. (3.4)).** The set of Y with ⟨Y i i+1 j j+1⟩ > 0, a sign rule for the brackets that wrap around n, and exactly k sign flips in the sequence ⟨Y 1 2 3 i⟩ for i = 4, ..., n.
- Original definition: Y = C·Z with C a k × n matrix whose ordered maximal minors are all positive.

**Amplituhedron-like geometry (eqn. (3.6)).** The same inequalities, but with exactly f sign flips, where 0 ≤ f ≤ k, and with the wrap-around sign (−1)<sup>k</sup> replaced by (−1)<sup>f</sup>. The case f = k is the amplituhedron.
- Loop version: each loop variable, a 2-plane (AB)<sub>j</sub>, gets its own flipping number, which must be f or f + 2.

**Star product and oriented form.** The star product ∗ combines two bosonised amplitudes into the one that corresponds to their ordinary product in superspace. The globally oriented canonical form of a union of positive geometries, taken in the oriented Grassmannian, is the sum of the canonical forms of the pieces.

## Main results

Everything below is for the minimal number of points, k = n − 4, where Z is a square matrix.

**Conjecture (products at tree level; eqn. (3.17)).** The oriented canonical form of the geometry with flipping number f equals A<sub>n,f</sub> ∗ A<sub>n,n−f−4</sub>, the product of the N<sup>f</sup>MHV amplitude and its parity conjugate. The paper gives a proof in section 5.3 for all n and f.
- Step 1: show that the geometry is the image of matrices C made by stacking a positive f × n block on a (k−f) × n positive block with the sign of every odd column flipped.
- Step 2: pairs of on-shell diagrams then triangulate the region, and each pair contributes one term of the product.

**Conjecture (products at loop level; eqn. (3.20)).** With l loops, of which l′ have flipping number f + 2, the canonical form is a binomial coefficient (l choose l′) times A<sub>n,f,l′</sub> ∗ A<sub>n,n−f−4,l−l′</sub>. The paper proves this only for extreme f, which gives MHV times anti-MHV at any loop order. Other cases are checked, not proved.

**Claim (equivalent pairs; eqns. (3.13) and (3.14)).** Flipping the sign of every other column Z<sub>i</sub> ↦ (−1)<sup>i</sup>Z<sub>i</sub> sends the geometry with flipping number f to the one with n − 4 − f. The two have the same canonical form.

**Conjecture (the square; sections 3.4 and 4).** The union of all amplituhedron-like geometries is the squared amplituhedron, cut out by physical inequalities alone. It is not a positive geometry. The authors conjecture that its globally oriented canonical form is the square of the superamplitude. At tree level this follows from the first result.

## Note, then ignore

- Two definitions of the amplituhedron. Their equivalence is proved only for the toy cases m = 1 and m = 2, and is conjectural for the physical m = 4. Everyone assumes it, so skip it.
- General m. The paper often replaces 4 by another number m to test ideas. Read m = 4 throughout at first.
- Bosonised superspace. Fermionic variables are traded for extra bosonic rows of Z, with a normalisation factor. It is bookkeeping, safe to skip.
- Twisted cyclicity. The sign (−1)<sup>f</sup> in the wrap-around brackets keeps the form cyclic. Safe to skip.
- Non-minimal n. The authors report subtleties when k &lt; n − 4 and leave them open. Safe to skip.

## One next step

Open the paper at section 3.3 and compare eqn. (3.4) with eqn. (3.6) line by line. Only the flip count and one sign change.
