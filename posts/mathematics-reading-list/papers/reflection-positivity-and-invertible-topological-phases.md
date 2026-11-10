source: https://arxiv.org/pdf/1604.06527
slogan: Invertible phases of matter with a given dimension and symmetry form an abelian group that bordism theory computes.
basis: the introduction and the main theorem statements

## Before you start

This paper has 141 pages and speaks two languages at once: condensed matter physics and stable homotopy theory. You may feel like an outsider to both, and that is reasonable. Nothing asks you to master both. If you want to see how a question about materials becomes a computation with spectra, the introduction tells that story in six pages, and the authors suggest that some readers look at the tables first. Follow your curiosity. The proofs will be there later.

## The story

Physicists want to list the phases of a quantum system: the path components of a moduli space of systems with fixed dimension and symmetry. Lattice systems have no rigorous theory of moduli, so direct classification is out of reach. Freed and Hopkins pass to the low-energy limit. For the special systems called invertible, they argue the limit is an invertible topological field theory, and such a theory is a map of spectra. One ingredient was missing: unitarity, which after Wick rotation becomes reflection positivity, had no version for fully extended theories. They supply one. With it, the answer is a group of homotopy classes of maps out of a Thom bordism spectrum. A small case: on 1-dimensional spin manifolds there are four invertible theories, and only two are reflection positive.

## Main definitions

**Symmetry type.** A compact Lie group H<sub>n</sub> with a homomorphism ρ<sub>n</sub> : H<sub>n</sub> → O<sub>n</sub> whose image contains SO<sub>n</sub>. The kernel is the internal symmetry group. A manifold then carries an H<sub>n</sub>-structure on its tangent bundle.
- Examples: SO<sub>n</sub> for oriented bosonic theories, Spin<sub>n</sub> for fermions, Pin<sup>±</sup><sub>n</sub> for fermions with time-reversal symmetry.

**Invertible topological field theory.** In general a field theory is a symmetric monoidal functor from a bordism category of H<sub>n</sub>-manifolds to complex vector spaces. An invertible one factors through the invertible quotient of the bordism category. The authors take as their definition a map of spectra Σ<sup>n</sup>MTH<sub>n</sub> → I, where MTH<sub>n</sub> is the Madsen-Tillmann spectrum (Ansatz 5.14).
- Target Iℂ<sup>×</sup>: tracks theories exactly, by their partition functions.
- Target Iℤ(1), the Anderson dual of the sphere spectrum: tracks deformation classes.

**Reflection structure and positivity.** A reflection structure is equivariance data for the theory, with respect to a generalised orientation reversal on bordisms and complex conjugation on vector spaces. It puts a hermitian form on each state space. Positivity says these forms are positive definite. For extended theories, positivity is itself extra structure, not a condition.

## Main results

**Theorem (classification; Theorem 1.1).** Deformation classes of reflection positive invertible n-dimensional extended topological field theories with symmetry group H<sub>n</sub> correspond one to one with the torsion subgroup of [MTH, Σ<sup>n+1</sup>Iℤ(1)]. Here MTH is the Thom spectrum of the stable group H, and the brackets mean homotopy classes of maps.
- Step 1: non-extended positivity forces the theory to extend from the Madsen-Tillmann spectrum to the Thom spectrum (Theorems 7.22 and 7.30).
- Step 2: the space of stable theories is homotopy equivalent to the space of reflection positive ones (Theorem 8.20).

**Theorem (stabilisation; Theorem 2.19).** Assume n ≥ 3. Then H<sub>n</sub> extends to compact Lie groups H<sub>m</sub> for all m > n, with compatible maps to O<sub>m</sub>. So a symmetry type has a stable group H that does not depend on the dimension. The introduction adds that this stabilisation is unique.

**Conjecture (non-topological theories; Section 5.4).** Dropping the word "torsion" on the right side of Theorem 1.1 gives the deformation classes of all reflection positive invertible theories, topological or not. The authors prove the matching statement for their "continuous" invertible topological theories (Corollary 8.21). Non-torsion classes occur only for odd n.

**Theorem (spin-statistics; Theorem 11.3).** A reflection positive invertible topological field theory, non-extended and valued in super lines, satisfies spin-statistics: the spin flip on each (n−1)-manifold acts as the grading operator (−1)<sup>F</sup>.
- Example 11.2 shows this fails without reflection positivity, using the four 1-dimensional spin theories.

## Note, then ignore

- Two heuristic principles. The step from lattice systems to field theories assumes that low-energy behaviour fixes the deformation class and that gapped systems have topological low-energy limits. These are physics assumptions, not theorems. The mathematics starts after them. Safe to skip on a first reading.
- Ansatz, not theorem. The paper defines an invertible extended theory as a map of spectra, because the literature on extended bordism categories was still in flux. Safe to skip.
- Madsen-Tillmann versus Thom. MTH<sub>n</sub> depends on n and is built from the tangent bundle. The Thom spectrum MTH is the stable version. The first spectra filter the second. Note it and move on.
- The twist in Iℤ(1). The (1) records how complex conjugation acts on the target. It matters for the equivariant argument only. Safe to skip.
- Ten symmetry groups. Section 9 works through ten fermionic cases with internal group {±1}, the unit complex numbers or SU<sub>2</sub>, to compare with the physics tables. One case is enough to see the method.

## One next step

Open the paper at page 4 and read Theorem 1.1 and the paragraph after it.
