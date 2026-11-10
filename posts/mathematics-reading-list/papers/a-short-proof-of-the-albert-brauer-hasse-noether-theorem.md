source: http://www.numdam.org/article/AST_1992__209__215_0.pdf
slogan: Trading the Brauer group for the cohomology of one torus turns the global Brauer sequence into a four-page calculation with known tools.
basis: the full text

## Before you start

This note is only six pages, but nearly every line cites a large theorem: Tate-Nakayama duality, flasque modules, Grunwald-Wang. The likely feeling is shame at not knowing the background. It is fine to feel that. The author leans on those results as black boxes too. If you want to see how the local and global Brauer groups fit together, this is a short route. Enjoy watching the pieces click. Checking every citation can wait.

## The story

Class field theory says that a central simple algebra over a global field k is known by its local pieces, and that the local invariants sum to zero. The classical proofs are long. Hürlimann wants a short, conceptual one. His idea is to shift degree. For a finite Galois extension K/k with group G, the group H<sup>2</sup>(G, K<sup>×</sup>) equals H<sup>1</sup> of a specific torus T<sub>1</sub>, built from the augmentation ideal of ℤG. Tori over global fields come with ready tools: Tate-Nakayama duality and the Colliot-Thélène and Sansuc theory of flasque modules. Those tools compute the kernel and cokernel of the local-to-global map for each K/k. A direct limit over all K then gives the sequence for Br(k). Nothing new is proved. The gain is the layout.

## Main definitions

**Relative Brauer group.** For a finite Galois extension K/k with group G, Br(K/k) = H<sup>2</sup>(G, K<sup>×</sup>). The Brauer group Br(k) is the direct limit of these groups under inflation.

**Torus split by K.** A k-torus T split by K corresponds to a finitely generated ℤG-module that is free over ℤ, through its character module X(T). Its points are T(K) = Hom(X(T), K<sup>×</sup>).
- T<sub>0</sub> has character module ℤ, so it is the multiplicative group.
- T<sub>1</sub> has character module the augmentation ideal I<sub>G</sub>, the kernel of ℤG → ℤ.

**Adelic points and the two error groups.** For global fields, T(A<sub>K</sub>) = Hom(X(T), J<sub>K</sub>) with J<sub>K</sub> the idele group, and T(C<sub>K</sub>) uses the idele class group C<sub>K</sub> = J<sub>K</sub>/K<sup>×</sup>. Ш<sup>n</sup>(T) is the kernel of H<sup>n</sup>(G, T(K)) → H<sup>n</sup>(G, T(A<sub>K</sub>)). The note also names the cokernel of this map in degree 1.

**Local degree number m.** For K/k global, m = m<sub>K/k</sub> is the least common multiple of the local degrees of K/k.

## Main results

**Theorem (degree shifting; Theorem 1).** Let K/k be a finite Galois extension of arbitrary fields with group G. For integers 1 ≤ i ≤ n, H<sup>n</sup>(G, K<sup>×</sup>) ≅ H<sup>n−i</sup>(G, T<sub>i</sub>(K)). In particular Br(K/k) ≅ H<sup>1</sup>(G, T<sub>1</sub>(K)).
- Step 1: The standard free resolution of ℤ gives short exact sequences of character modules with a free middle term.
- Step 2: Apply Hom(−, K<sup>×</sup>). The middle term is induced, so its Tate cohomology vanishes and the long exact sequence shifts degrees.

**Theorem (Tate-Nakayama duality; Theorem 2, quoted).** Let K/k be a finite Galois extension of global fields with group G, and T a k-torus split by K. For every integer n there is a non-canonical isomorphism H<sup>n</sup>(G, T(C<sub>K</sub>)) ≅ H<sup>2−n</sup>(G, X(T)). The note cites this and does not prove it.

**Theorem (one finite level; sequence (2.4)).** For K/k a finite Galois extension of global fields, the sequence 0 → H<sup>2</sup>(G, K<sup>×</sup>) → H<sup>2</sup>(G, J<sub>K</sub>) → ℤ/mℤ → 0 is exact, with m = m<sub>K/k</sub>.
- Step 1: The kernel is Ш<sup>1</sup>(T<sub>1</sub>), which vanishes by results of Colliot-Thélène and Sansuc on flasque modules.
- Step 2: Duality gives H<sup>1</sup>(G, T<sub>1</sub>(C<sub>K</sub>)) ≅ ℤ/nℤ with n the order of G. The group H<sup>3</sup>(G, K<sup>×</sup>) is cyclic of order n/m. Together they give the cokernel ℤ/mℤ.

**Theorem (Albert-Brauer-Hasse-Noether; Theorem 4).** Let k be a global field. The sequence 0 → Br(k) → ⊕<sub>v</sub> Br(k<sub>v</sub>) → ℚ/ℤ → 0 is exact, where v runs over all places and the last map is the sum of the local invariants.
- Step 1: The sequences (2.4) form a directed system under inflation, and the inflation maps are injective.
- Step 2: The numbers m take every positive integer value, already for cyclic extensions. So the direct limit of ℤ/mℤ is ℚ/ℤ.

## Note, then ignore

- Stable birational equivalence and the ρ-invariant. They appear because the vanishing of Ш<sup>1</sup>(T<sub>1</sub>) is quoted from that theory. Safe to skip on a first reading.
- Tate cohomology in all degrees. The note uses the hatted groups so that statements hold for negative n as well. You only need degrees 1, 2 and 3. Safe to skip.
- "Non-canonical" in Theorem 2. The isomorphism depends on choices, but the proof only needs the size and shape of the groups. Safe to skip.
- Function fields. The step "m takes all values" cites Neukirch for number fields and Saltman's generic Grunwald-Wang results for the general case. Safe to skip.
- The last line of the proof. Identifying the limit sequence with the sum of local invariants is left to Neukirch, with "necessary details". Safe to skip, but know it is not written out here.

## One next step

Open the PDF and read only the abstract on the first page, then Theorem 4 on page 219. That is the whole claim.
