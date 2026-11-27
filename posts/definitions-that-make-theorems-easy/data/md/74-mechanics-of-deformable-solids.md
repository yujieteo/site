### A Dirichlet-to-Neumann boundary map reduces exterior elastic scattering to a bounded domain

**Remember:** Let the boundary answer as the outgoing wave outside would.

*True by definition.* MSC 74J20 (Wave scattering in solid mechanics), 65N30. arXiv math.NA, math.AP. Level 4: research.

**Definition.** Surround the obstacle by an artificial sphere. The Dirichlet-to-Neumann operator sends a displacement on the sphere to the traction, the surface force, of the outgoing elastic wave outside with that displacement. Imposing this relation on the sphere gives a transparent boundary condition for the region inside.

**Problem.** Take elastic scattering of an incident wave by a rigid obstacle in three dimensions. The problem on the unbounded exterior is equivalent to a boundary value problem in a bounded region, with the transparent condition on the sphere.

**How the definition helps.** The operator packs everything about the outgoing exterior wave into one boundary relation. So an interior solution that satisfies it extends to the whole exterior by the outgoing wave with the same boundary values (our own). Conversely, an exterior solution satisfies the relation on the sphere by definition (our own). Computation needs a cut-off series for the operator. The paper shows that this truncation error decays exponentially in the cut-off.

**Paper or page:** [An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions](https://arxiv.org/abs/2101.05835v1). It says: “By constructing a Dirichlet-to-Neumann (DtN) operator and introducing a transparent boundary condition, the scattering problem is reduced equivalently to a boundary value problem in a bounded domain.”

**Sources:**

- [Gang Bao, Peijun Li, Xiaokai Yuan, An adaptive finite element DtN method for the elastic wave scattering problem in three dimensions, arXiv:2101.05835v1 (2021)](https://arxiv.org/abs/2101.05835v1)
