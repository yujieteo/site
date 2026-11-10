source: https://www.math.hku.hk/imrwww/IMRPreprintSeries/2010/IMR2010-16.pdf
slogan: The Maslov index of three polarisations is the symplectic area of the geodesic triangle between them, so a phase becomes an area.
basis: the full text

## Before you start

This paper is only ten pages, but it leans on geometric quantisation, Hermitian symmetric spaces and two earlier papers by the same author. You may feel a small dread that every line assumes something you have not read. That is a reasonable reaction to a dense short paper. If you want to know where the odd eighth roots of unity in Fourier analysis come from, this is a direct answer. Read it for the triangle picture. Completeness can wait.

## The story

To quantise a linear phase space you must choose a polarisation, for example a complex structure J. Each J gives its own Hilbert space. People want to know that the choice does not matter. Parallel transport along a natural connection identifies the Hilbert spaces, but only up to a phase, because the connection has curvature. So going round a loop of polarisations multiplies states by a number of modulus one. Separately, the composition of three Fourier transforms between Lagrangian subspaces is a scalar, an eighth root of unity given by Kashiwara's triple Maslov index. Wu observes that these are the same thing. The scalar is the holonomy round a geodesic triangle, so it equals the exponential of an integral of curvature. The same argument runs for fermions.

## Main definitions

**Space of polarisations.** For a symplectic vector space (V, ω) of dimension 2n, J<sub>ω</sub> is the set of complex structures J with ω(J·, J·) = ω and ω(·, J·) > 0. It is the Hermitian symmetric space Sp(2n, ℝ)/U(n), with Kähler form σ<sub>ω</sub>.
- Bosons: J<sub>ω</sub> is non-compact and contractible. Real Lagrangian subspaces form its Shilov boundary.
- Fermions: for an oriented Euclidean (V, g) the analogous space J<sub>g</sub> is SO(2n)/U(n), which is compact.

**Bundle of Hilbert spaces.** Each J picks out a subspace H<sub>J</sub> of the pre-quantum Hilbert space H<sub>0</sub>. Orthogonal projection of the trivial connection gives a connection on the bundle H → J<sub>ω</sub>. It is projectively flat: its curvature is σ<sub>ω</sub>/(2i) times the identity.

**Triple Maslov index.** For three mutually transverse Lagrangian subspaces L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>, the integer α<sub>ω</sub>(L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>) is the signature of the quadratic form ω(x<sub>1</sub>, x<sub>2</sub>) + ω(x<sub>2</sub>, x<sub>3</sub>) + ω(x<sub>3</sub>, x<sub>1</sub>) on L<sub>1</sub> ⊕ L<sub>2</sub> ⊕ L<sub>3</sub>. It lies between −n and n.

**Generalised Maslov index.** For J<sub>1</sub>, J<sub>2</sub>, J<sub>3</sub> in J<sub>ω</sub>, transport along the three geodesics and back gives the scalar exp(iπα/4). The real number α = α<sub>ω</sub>(J<sub>1</sub>, J<sub>2</sub>, J<sub>3</sub>) is Magneron's generalised Maslov index.

## Main results

The paper does not number its theorems, so the labels below are equation numbers.

**Result (index as area; equation 3.4).** For J<sub>1</sub>, J<sub>2</sub>, J<sub>3</sub> in J<sub>ω</sub> and any oriented surface Δ bounded by the three geodesics, α<sub>ω</sub>(J<sub>1</sub>, J<sub>2</sub>, J<sub>3</sub>) = (2/π) ∫<sub>Δ</sub> σ<sub>ω</sub>. It follows that |α| ≤ n.
- Step 1: the triple composition of transports is the holonomy round the triangle, so it equals exp((i/2) ∫<sub>Δ</sub> σ<sub>ω</sub>).
- Step 2: both sides vanish as Δ shrinks to a point, which fixes the additive constant.

**Result (Lagrangian limit; equation 3.6).** Represent three mutually transverse Lagrangian subspaces by unitary symmetric matrices Z<sub>1</sub>, Z<sub>2</sub>, Z<sub>3</sub>. Then α<sub>ω</sub>(L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>) = −(2/π)[arg det(I − Z̄<sub>1</sub>Z<sub>2</sub>) + arg det(I − Z̄<sub>2</sub>Z<sub>3</sub>) + arg det(I − Z̄<sub>3</sub>Z<sub>1</sub>)]. So Kashiwara's index is (2/π) times a limit of areas of triangles whose corners run out to the boundary.
- Step 1: both sides are invariant under Sp(V, ω), so move the triple to a normal form.
- Step 2: compute both sides there. Each equals n − 2r for some r between 0 and n.

**Result (fermions; equation 3.9).** Let J<sub>1</sub>, J<sub>2</sub>, J<sub>3</sub> in J<sub>g</sub> be such that none lies in the cut locus of another. The triple composition of transports along minimising geodesics is the phase exp((i/2) ∫<sub>Δ</sub> σ<sub>g</sub>). The integral depends on Δ, but the exponential does not, because the periods of σ<sub>g</sub> lie in 4πℤ.

**Result (Berry's phase; Section 4).** Take harmonic oscillators with Hamiltonian parametrised by J. The line bundle of vacuum states has curvature opposite in sign to that of H. So Berry's phase of the vacuum is the inverse of the holonomy above.
- Bosons: the bundle of the k-th energy level is not projectively flat unless k = 0 or n = 1.
- Fermions: it is not projectively flat unless k = 0 or k = n.

## Note, then ignore

- Half-forms and half-densities. Tensoring with a square root of the canonical bundle makes the bundle flat (half-forms) or leaves the curvature unchanged (half-densities). The main formulas hold for half-densities. Safe to skip at first.
- The choice of "arg". The argument of det(I − Z̄Z′) is fixed by continuity from zero, which works because J<sub>ω</sub> is contractible. Safe to skip.
- Cut locus. On the compact fermionic space geodesics are not unique, so all statements exclude pairs in each other's cut locus. Safe to skip on a first reading.
- A moving triangle. In the Lagrangian limit the surface Δ itself moves. The paper gives a second version with a fixed surface and an "admissible" condition. Safe to skip.
- The real lift for fermions. A real-valued α<sub>g</sub> exists only after choosing a base point J<sub>0</sub>, and it depends on that choice. Safe to skip.

## One next step

Open the PDF at Section 3.1 (pages 5 and 6) and read from equation (3.2) to equation (3.4), about ten lines.
