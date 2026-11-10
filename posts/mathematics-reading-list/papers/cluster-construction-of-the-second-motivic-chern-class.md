source: https://arxiv.org/pdf/2105.06426
slogan: Cluster coordinates on triples of flags write down an explicit cocycle for the generator of weight two motivic cohomology of BG.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling here is intimidation at two unfamiliar worlds joined together: motivic cohomology and cluster algebras, for an arbitrary simple group G. It is fine to feel that and keep reading anyway. Section 3 of the paper does everything for SL<sub>2</sub>, where the generator is one divisor and one function. If you want to see a characteristic class written as a formula and not as an existence statement, this paper does that. Take pleasure in the SL<sub>2</sub> case. The general case can come later or never.

## The story

For a split, simple, simply connected group G over ℚ, the group H<sup>4</sup>(BG, ℤ<sub>M</sub>(2)) is ℤ. Its generator is the second universal motivic Chern class c<sub>2</sub>. For SL<sub>m</sub> Goncharov gave a canonical cocycle in 1993. For other groups you can pull that cocycle back along a representation, but you get only a multiple: 60 · c<sub>2</sub> at best for E<sub>8</sub>. So an explicit generator was missing. A cocycle has three components. The last one, C<sup>(3)</sup>, is elementary: Bruhat divisors in G with a rational function on each. To lift it you need functions A<sub>i</sub> on triples of points of G/U and integers ε<sub>ij</sub> such that Σ ε<sub>ij</sub> A<sub>i</sub> ∧ A<sub>j</sub> has the right residues. Cluster coordinates and the exchange matrix supply exactly these.

## Main definitions

**Weight two motivic complex.** For a regular variety X with function field k(X), the complex B<sub>2</sub>(k(X)) → Λ<sup>2</sup>k(X)<sup>×</sup> → ⊕ k(D)<sup>×</sup> → ⊕ ℤ in degrees 1 to 4. The sums run over divisors D and over codimension two points.
- First map: {x} ↦ (1 − x) ∧ x, from the Bloch group B<sub>2</sub>.
- Later maps: the tame symbol, then the divisor of a function.

**Second universal motivic Chern class (Definition 2.2).** The integral generator c<sub>2</sub> of H<sup>4</sup>(BG, ℤ<sub>M</sub>(2)) that corresponds to the Killing form normalised to take the value 1 on the shortest coroot. BG is modelled by Milnor's simplicial scheme BG<sub>•</sub>.

**The cocycle C<sub>•</sub> = (C<sup>(1)</sup>, C<sup>(2)</sup>, C<sup>(3)</sup>).** Write A = G/U for the principal affine space and Conf<sub>n</sub>(A) for G-orbits on A<sup>n</sup>. Then C<sup>(1)</sup> lies in B<sub>2</sub> of the function field of Conf<sub>4</sub>(A), C<sup>(2)</sup> in Λ<sup>2</sup> of the invertible rational functions on Conf<sub>3</sub>(A), and C<sup>(3)</sup> is a sum of pairs (divisor, function) on Conf<sub>2</sub>(A).
- Cocycle condition: δC<sup>(1)</sup> = s\*C<sup>(2)</sup>, res C<sup>(2)</sup> = s\*C<sup>(3)</sup>, div C<sup>(3)</sup> = 0, and s\*C<sup>(1)</sup> = 0, where s\* is the alternating sum of pullbacks.

**The element C<sup>(3)</sup>.** The sum over simple roots k of the pair (Bruhat divisor B<sub>s<sub>k</sub>w<sub>0</sub></sub>, F<sub>k</sub>). Here F<sub>k</sub> is an explicit product of powers of generalised minors, with exponents from the Cartan matrix and its symmetrisers.

## Main results

**Theorem (the generator of H<sup>1</sup>(G, K<sub>2</sub>); Theorem 2.1).** The element C<sup>(3)</sup> is a 1-cocycle in the K<sub>2</sub> Gersten complex of G tensored with ℤ[½]. Its class generates H<sup>1</sup>(G, K<sub>2</sub>) = ℤ. Its Hodge realisation generates H<sup>3</sup>(G(ℂ), ℤ(2)).
- Example: for SL<sub>2</sub> and a line L in the plane, the divisor is {g : gL = L} and the function is the scalar by which g acts on L.

**Theorem (the full cocycle; Theorem 2.3).** There is a cocycle C<sub>•</sub> = (C<sup>(1)</sup>, C<sup>(2)</sup>, C<sup>(3)</sup>) whose image under the map induced by G<sup>n</sup> → A<sup>n</sup> represents c<sub>2</sub> in H<sup>4</sup>(BG<sub>•</sub>, ℤ<sub>M</sub>(2)).
- Step 1: C<sup>(2)</sup> = Σ ε<sub>ij</sub> A<sub>i</sub> ∧ A<sub>j</sub>, with A<sub>i</sub> the cluster coordinates of a cluster on Conf<sub>3</sub>(A) and ε<sub>ij</sub> the skew-symmetrised exchange matrix.
- Step 2: changing the cluster changes C<sup>(2)</sup> by explicit Steinberg relations, so the cocycles for different clusters differ by explicit coboundaries.

**Claim (applications, stated in the introduction).** The cocycle gives explicit constructions of the universal extension of G by K<sub>2</sub>, of the central extension of the loop group G((t)) by 𝔾<sub>m</sub>, and of the line bundle that generates the Picard group of Bun<sub>G</sub>. It also gives a combinatorial formula for the second Chern class of a G-bundle.

**Conjecture (quantum deformation).** The component C<sup>(1)</sup> gives a measurable 3-cocycle of G(ℂ), and the paper constructs a quantum deformation of it. The authors conjecture that all measurable cohomology classes of G(ℂ) admit quantum deformations.

## Note, then ignore

- The factor ℤ[½]. Theorem 2.1 is stated after inverting 2, because F<sub>k</sub> has half-integer exponents. Safe to skip on a first reading.
- Torsion. The transgression map from H<sup>4</sup> of BG<sub>•</sub> to H<sup>3</sup> of G is surjective with torsion kernel. Safe to skip.
- ℤ(2) means (2πi)<sup>2</sup>ℤ. The twist records the volume 2π<sup>2</sup> of the 3-sphere. Safe to skip.
- U or N. The paper writes the maximal unipotent subgroup both ways. They are the same thing. Safe to skip.
- Twisted cyclic invariance. The authors say their approach explains a 30-page computation in Goncharov-Shen. You do not need it to follow the construction. Safe to skip.

## One next step

Open the paper at paragraph 5 of Section 2, "An example: H<sup>3</sup>(SL<sub>2</sub>(ℂ))", and read its three descriptions of the generator. It takes two minutes.
