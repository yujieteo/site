source: https://arxiv.org/pdf/2103.01507
slogan: Floer homology with Morava K-theory coefficients bounds the periodic orbits of a Hamiltonian flow by mod p homology, so the Arnold bound holds in every characteristic.
basis: the introduction and the main theorem statements

## Before you start

The paper runs to about 380 pages and mixes symplectic geometry with chromatic homotopy theory. The likely feeling is overwhelm, perhaps with a sense that nobody could know both halves. That feeling fits the facts, and you do not need to argue with it. If you are curious why a cohomology theory from homotopy theory solves a counting problem in mechanics, the first five pages already answer that. Read those for interest. Nothing beyond them is required.

## The story

Arnold conjectured that a non-degenerate Hamiltonian flow on a closed symplectic manifold M has at least as many closed time-1 orbits as a Morse function on M has critical points. Floer's method builds a homology group from the orbits and compares it with the homology of M. Over ℚ this works for all M, by Fukaya–Ono and Liu–Tian. Over 𝔽<sub>p</sub> it was blocked. The moduli spaces of Floer trajectories are locally quotients of manifolds by finite groups, with fixed points, and ordinary mod p homology has no Poincaré duality for such quotients. Abouzaid and Blumberg avoid the chain complex altogether. The moduli spaces carry stable complex structures, and Morava K-theory K(n) satisfies Poincaré duality for classifying spaces of finite groups. So they build Floer homology with K(n) coefficients. For large n it has the same rank as mod p homology.

## Main definitions

**Non-degenerate Hamiltonian orbits.** (M, ω) is a closed symplectic manifold and H: M × S<sup>1</sup> → ℝ a time-dependent function. Its Hamiltonian flow has closed time-1 orbits, and H is non-degenerate when every such orbit is non-degenerate. The theorems count the contractible ones.

**Morava K-theory.** For a prime p and n ≥ 1, K(n) is a ring spectrum with coefficients K(n)<sub>\*</sub> ≅ 𝔽<sub>p</sub>[v<sub>n</sub>, v<sub>n</sub><sup>−1</sup>], where v<sub>n</sub> has degree 2(p<sup>n</sup> − 1). This ring is a graded field, so every module has a rank.
- n = 0: by convention K(0) is rational homology.
- The paper writes H<sub>\*</sub>(M; K(n)) for what is usually written K(n)<sub>\*</sub>(M).

**Novikov ring Λ<sub>\*</sub>.** Let Π be the lattice of classes in H<sub>2</sub>(M; ℤ) coming from tori swept out by loops of loops. Λ<sub>\*</sub> consists of sums Σ a<sub>β</sub> q<sup>β</sup> over β ∈ Π with a<sub>β</sub> in K(n)<sub>\*</sub>, with finitely many terms below any energy level ω(β). One sets H<sub>\*</sub>(M; Λ) = H<sub>\*</sub>(M; K(n)) ⊗ Λ<sub>\*</sub>.

**Floer K(n)-homology.** HF<sub>\*</sub>(H; Λ) is a Λ<sub>\*</sub>-module built from the moduli spaces of Floer trajectories between orbits. It comes from a homotopy type and not from a chain complex.

## Main results

**Theorem (Arnold bound in Morava K-theory; Theorem 1.1).** Let (M, ω) be closed and H non-degenerate. For every prime p and every n ≥ 0, the rank of H<sub>\*</sub>(M; K(n)) over K(n)<sub>\*</sub> is at most the number of contractible closed time-1 orbits of H.
- Step 1: HF<sub>\*</sub>(H; Λ) contains H<sub>\*</sub>(M; Λ) as a summand (Proposition 1.5, part 1).
- Step 2: the rank of HF<sub>\*</sub>(H; Λ) is at most the number of such orbits (Proposition 1.5, part 2).

**Corollary (mod p Arnold bound; Corollary 1.2).** For every field k of characteristic p, the rank of H<sub>\*</sub>(M; k) is at most the number of contractible closed time-1 orbits of H.
- Step 1: choose n with 2(p<sup>n</sup> − 1) larger than dim M. Then the Atiyah–Hirzebruch spectral sequence collapses, and K(n)-homology has the same rank as 𝔽<sub>p</sub>-homology.
- Step 2: pass from 𝔽<sub>p</sub> to k by universal coefficients.

**Claim (why K(n); Section 1.1.1 and the abstract).** Floer homology with coefficients in a generalised homology theory needs Poincaré duality for orbifolds with stable complex structures. Complex orientation alone handles manifolds. Morava K-theories are the simplest known theories that also handle finite group quotients. I read this at the level of the introduction only.

## Note, then ignore

- "Smaller than". The paper says the rank is smaller than the orbit count, and the proof gives "at most". Safe to skip.
- Not Arnold's full conjecture. The bound is by homology rank, which can be less than the minimal number of critical points of a Morse function. Note it and move on.
- No integral statement. The result covers all fields but not ℤ, and Remark 1.3 mentions a separate proposal of Fukaya and Ono for that. Safe to skip.
- Independence of H. The paper does not prove that HF<sub>\*</sub>(H; Λ) is independent of H, and says a slight extension would give it (Remark 1.6). The summand statement is enough for the theorem.
- Point-set spectra. The body needs strict models of ring spectra and their modules, and the introduction tells the casual reader not to worry about this. Take that advice.

## One next step

Open the paper at page 2 and read Theorem 1.1, then Corollary 1.2 and the paragraph between them on the Atiyah–Hirzebruch spectral sequence.
