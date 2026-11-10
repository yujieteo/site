source: https://arxiv.org/pdf/1305.1617
slogan: Two-loop scattering amplitudes depend only on cluster coordinates of a Grassmannian, so a tangle of polylogarithms gets a short list of allowed arguments.
basis: the introduction and the main theorem statements

## Before you start

This is a physics paper of about 60 pages, and it mixes three vocabularies: gauge theory, motivic polylogarithms, cluster algebras. You may feel like an outsider to at least two of them. So do most of its readers, and there is no need to push that feeling away. Sections 4 and 6 are self-contained reviews with small examples, and a pleasant way to meet the Bloch group and cluster mutation. Read those for enjoyment. The amplitude can stay in the background.

## The story

In planar N = 4 Yang-Mills theory, the two-loop amplitude for 6 particles turned out to be a short sum of classical polylogarithms Li<sub>4</sub>. For 7 particles no such formula was known, and there is a reason. A function of weight 4 carries an invariant in Λ<sup>2</sup>B<sub>2</sub> that obstructs writing it with Li<sub>4</sub> alone. Also, polylogarithms satisfy so many identities that no formula is canonical. The authors change the question. They replace the function by its motivic version and compute its coproduct, which involves dilogarithms and trilogarithms only. Then they ask which arguments occur. The answer: only cluster X-coordinates on the space of n points in P<sup>3</sup>. Abel's five-term relation is the model, since its arguments are the cluster coordinates for 5 points on P<sup>1</sup>.

## Main definitions

**Kinematic space Conf<sub>n</sub>(P<sup>3</sup>).** The space of n ordered points in P<sup>3</sup> modulo PGL<sub>4</sub>. It has dimension 3(n − 5) and is a quotient of the Grassmannian Gr(4, n) by rescaling of columns. An n-particle amplitude is a function on it. The points are momentum twistors.
- Duality: for n = 6 it is Conf<sub>6</sub>(P<sup>1</sup>), and for n = 7 it is Conf<sub>7</sub>(P<sup>2</sup>).

**Bloch groups and the coproduct.** For a field F, B<sub>2</sub>(F) is the ℚ-vector space on symbols {x}, x ∈ F, modulo the five-term relations. B<sub>3</sub>(F) is defined the same way with the trilogarithm relations. The motivic Lie coalgebra L<sub>•</sub>(F) has L<sub>1</sub> = F<sup>\*</sup> ⊗ ℚ, and conjecturally L<sub>2</sub> = B<sub>2</sub> and L<sub>3</sub> = B<sub>3</sub>.
- Weight 4: the coproduct of an element of L<sub>4</sub> lies in Λ<sup>2</sup>B<sub>2</sub> ⊕ (B<sub>3</sub> ⊗ F<sup>\*</sup><sub>ℚ</sub>).
- The Λ<sup>2</sup>B<sub>2</sub> part is the obstruction to writing the element with Li<sub>4</sub> alone. This uses the conjectural description of L<sub>4</sub>.

**Cluster X-coordinates.** Start from a quiver with a variable x<sub>i</sub> at each node. Mutation at node k replaces x<sub>k</sub> by 1/x<sub>k</sub>, multiplies each neighbour x<sub>i</sub> by a power of (1 + x<sub>k</sub>) or of (1 + 1/x<sub>k</sub>) according to the arrows between i and k, and changes the quiver. All variables reached by repeated mutation are the X-coordinates. On Conf<sub>n</sub>(P<sup>3</sup>) they are particular cross-ratios of the four-brackets ⟨ijkl⟩.
- n = 6: type A<sub>3</sub>, with 15 X-coordinates. n = 7: type E<sub>6</sub>, with 385 X-coordinates and 833 clusters.

**Generalised Stasheff polytope.** The polytope whose vertices are the clusters and whose edges are mutations. Its two-dimensional faces are quadrilaterals (type A<sub>1</sub> × A<sub>1</sub>) and pentagons (type A<sub>2</sub>).

## Main results

**Claim (coproduct at seven points; Section 5).** The authors compute the coproduct of the two-loop, 7-particle MHV motivic amplitude from its known symbol. They write the Λ<sup>2</sup>B<sub>2</sub> part as a sum of 42 terms {x}<sub>2</sub> ∧ {y}<sub>2</sub>, symmetric under the dihedral group and parity. For 6 particles this part is zero. For 7 particles the authors treat it as the obstruction to a formula in classical polylogarithms, granting the conjecture on L<sub>4</sub>.
- This is an explicit computation, not a theorem with a general proof.

**Claim (only cluster coordinates occur; Section 7.4).** Every argument in the 7-particle coproduct is a cluster X-coordinate of Conf<sub>7</sub>(P<sup>2</sup>). Only 231 of the 385 occur. In each term {x}<sub>2</sub> ∧ {y}<sub>2</sub>, the two coordinates lie in a common cluster and have Poisson bracket zero.
- Reading: the 42 terms correspond to 42 of the 1785 quadrilateral faces of the E<sub>6</sub> polytope.
- For n = 6: only 9 of the 15 coordinates occur.

**Theorem (a 40-term trilogarithm relation; Theorem B.1).** For a configuration of six points in P<sup>2</sup> there is a relation in B<sub>3</sub>(ℂ) with 40 terms, built from four basic terms and their signed dihedral permutations. Every one of its arguments is a cluster X-coordinate of the same cluster algebra.
- Why it matters here: it is the analogue for Li<sub>3</sub> of Abel's five-term relation, and the authors say it plays a role in the Section 5 computation.

**Conjecture (all two-loop MHV amplitudes; Section 8).** For every n, each coproduct component of the two-loop MHV motivic amplitude can be written with Bloch group elements whose arguments are X-coordinates only. The terms of the Λ<sup>2</sup>B<sub>2</sub> part correspond to quadrilateral faces of the polytope.

## Note, then ignore

- Sign conventions. The paper uses a cross-ratio normalised so that all five terms of Abel's relation carry a plus sign, and writes the coproduct of {x}<sub>2</sub> as (1 + x) ∧ x. This differs from the usual convention by x ↦ −x. Safe to skip on a first reading.
- Conjectural foundations. The Lie coalgebra L<sub>•</sub>(F) itself exists only under standard conjectures on mixed motives. The computations are done at the level of symbols, where everything is concrete. Safe to skip.
- Symbol against coproduct. The symbol is a coarser invariant, a tensor of logarithms. The coproduct keeps more structure, and "only X-coordinates in the coproduct" is a stronger condition than "only A-coordinates in the symbol". Safe to skip.
- MHV and loops. MHV names the simplest class of helicity configurations, and "two-loop" the order in perturbation theory. Weight equals twice the loop number. You need nothing more about the physics.

## One next step

Open the PDF at Section 6.1 (pages 22 and 23 in the paper's own numbering) and work the A<sub>2</sub> example by hand: from a<sub>m−1</sub>a<sub>m+1</sub> = 1 + a<sub>m</sub>, check that the sequence repeats after five steps.
