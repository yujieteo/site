source: http://www.numdam.org/item/JTNB_1995__7_1_333_0.pdf
slogan: An overconvergent p-adic eigenform of weight k and slope below k − 1 is a classical modular form.
basis: the introduction and the main theorem statements

## Before you start

Coleman writes in the language of rigid analysis: affinoids, wide opens, residue disks. If you have not met these, the first two sections can raise a fear of being too slow, or of not belonging in the room. That is a fair response to dense notation, and you can read on while feeling it. If you want to know when a p-adic modular form is a real one, the answer here fits in one line. Take your pleasure in that line first.

## The story

Katz defined overconvergent p-adic modular forms. They are sections of a power of the line bundle ω over a region of the modular curve slightly larger than the ordinary locus. Classical forms of level Np give examples, but the space is infinite dimensional and most forms are new. Which ones are classical? The operator U, which sends Σ a<sub>n</sub>q<sup>n</sup> to Σ a<sub>pn</sub>q<sup>n</sup>, sorts forms by slope, the p-adic valuation of the eigenvalue. Hida had shown that slope 0 forms are classical. Gouvêa conjectured the same for slope at most (k − 2)/2. Coleman's idea is to compare overconvergent forms with de Rham cohomology. The (k+1)-st power of q d/dq sends weight −k to weight k + 2, and the cokernel is a finite dimensional cohomology group. There, Frobenius and a duality count dimensions by slope. Small slope leaves no room for non-classical forms.

## Main definitions

**Overconvergent modular form.** Let p > 3, let N be prime to p, and let X be the modular curve X<sub>1</sub>(N) with good reduction. The ordinary locus Z is where the Eisenstein series E<sub>p−1</sub> is a unit. An overconvergent form of weight k is a section of ω<sup>k</sup> on a strictly larger rigid region, where E<sub>p−1</sub> is allowed a small positive valuation.
- A section on Z alone is called convergent. This is a weaker condition.

**Classical form.** Here it means a weight k modular form of level Γ<sub>1</sub>(Np) with trivial character at p, viewed as an overconvergent form of level Γ<sub>1</sub>(N).

**Slope.** A generalised eigenvector for U with eigenvalue λ lies in the kernel of a power of U − λ. Its slope is the p-adic valuation of λ, with v(p) = 1.

**The operator θ<sup>k+1</sup>.** For k ≥ 0 there is a map from overconvergent forms of weight −k to weight k + 2. On q-expansions it is (q d/dq)<sup>k+1</sup>.

## Main results

**Theorem (cohomological description; Theorem 5.4).** Let N > 4 and k ≥ 0. The quotient of weight k + 2 overconvergent forms by the image of θ<sup>k+1</sup> is the first de Rham cohomology of a sheaf with connection. The sheaf is the k-th symmetric power of the relative de Rham cohomology of the universal elliptic curve, restricted to the complement of the zeros of E<sub>p−1</sub>.
- Step 1: the Hodge filtration on the symmetric power has graded pieces that are powers of ω.
- Step 2: this cohomology is finite dimensional and carries Frobenius and Verschiebung operators (Theorem 5.1).

**Theorem (small slope forms are classical; Theorem 6.1).** Every overconvergent form of weight k + 2 that is a generalised eigenvector for U of slope strictly less than k + 1 is classical. The proof is for p > 3. The paper says the statement holds for all levels N prime to p.
- Step 1: forms in the image of θ<sup>k+1</sup> have slope at least k + 1, so a form of smaller slope is detected by its cohomology class.
- Step 2: a perfect pairing on parabolic cohomology (Theorem 5.2) matches slope α with slope k + 1 − α. Counting dimensions shows the classical forms already fill each slope space.

**Theorem (the boundary slope; Corollary 7.2.1).** Non-classical forms of weight k and slope exactly k − 1 exist. An eigenform for the full Hecke algebra of weight k and slope k − 1 is classical if it does not lie in the image of θ<sup>k−1</sup> on weight 2 − k. The source restricts the weight here. My copy of the text was too garbled to give the exact bound.

**Corollary (Gouvêa's conjecture).** Every overconvergent eigenform of weight k and slope at most (k − 2)/2 is classical. This follows since (k − 2)/2 is less than k − 1.

## Note, then ignore

- Weight shift. The introduction states the result for weight k and slope below k − 1. Theorem 6.1 uses weight k + 2 and slope below k + 1. They are the same statement. Safe to skip once noticed.
- The primes 2 and 3. The paper assumes p > 3 so that E<sub>p−1</sub> lifts the Hasse invariant. Coleman defers p = 2 and 3 to a later article. Safe to skip.
- N > 4. This makes the moduli problem fine, so a universal elliptic curve exists. The end of section 6 removes the condition. Safe to skip.
- Sections 8 and 9. They extend the theorem to forms of level Γ<sub>1</sub>(Np) and relate these to Serre's forms of non-integral weight. Safe to skip.
- Scan quality. The Numdam file is a scan, so searching and copying text from it gives broken symbols. Safe to ignore. Read the page images.

## One next step

Open the paper and read only the first page of the introduction, down to the sentence that defines the slope of F.
