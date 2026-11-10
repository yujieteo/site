source: https://arxiv.org/pdf/1903.12612
slogan: An irregular connection on a curve is a local system plus gradings on sectors at each pole, and the filtrations force those gradings.
basis: the introduction and the main theorem statements

## Before you start

Stokes data has a reputation for a messy literature: sectors, asymptotic series, several competing conventions. You may feel confused about which picture is "the" definition, and a little irritated. That is a fair reaction. If you want to know what a connection with an irregular pole looks like to a topologist, this text answers that directly. Follow the Weber example and enjoy the pictures. The general case can wait for another day.

## The story

For connections with regular singularities, the Riemann–Hilbert correspondence says the monodromy representation knows everything. With irregular singularities, such as the Airy or Weber equation at ∞, the local system of solutions is not enough. People found extra data in three forms: filtrations by growth rate on sectors (Deligne, Malgrange), preferred decompositions on sectors (Stokes), and a local system on a punctured surface (wild monodromy). Passing between them took coordinates and cocycles. Boalch defines all three intrinsically and puts the gradings in the middle. Then one statement ties them together: a Stokes filtration has exactly one Stokes grading that splits it. For Weber's equation y″ = (x<sup>2</sup>/4 + λ)y the filtrations are four lines L<sub>0</sub>, …, L<sub>3</sub> of recessive solutions, and the gradings are the pairs L<sub>i−1</sub> ⊕ L<sub>i</sub>.

## Main definitions

**Setting and irregular class.** Let Σ be a smooth compact complex curve with a finite set of marked points, and blow up each marked point to a circle ∂ of real directions. The exponential local system is a covering ℐ → ∂ whose points are the possible exponential factors. An irregular class Θ assigns a multiplicity to each component circle of ℐ, zero for all but finitely many.
- From Θ: a finite cover I → ∂ of active exponents, the singular directions A ⊂ ∂ and the Stokes (oscillating) directions S ⊂ ∂, both finite.
- Orders: for d ∉ S a total "dominance" order on the fibre I<sub>d</sub>, and for d ∈ A a partial order given by "Stokes arrows".

**Stokes filtered local system.** A triple (V, Θ, F). Here V is a local system on the blown-up surface, and F gives an I<sub>d</sub>-indexed filtration of the fibre V<sub>d</sub> for each direction d ∉ S, with graded dimensions Θ.
- Locally constant away from S.
- Across each d ∈ S, some local grading induces the filtrations on both sides.

**Stokes graded local system.** A triple (V, Θ, Γ). Now Γ gives a direct sum decomposition of V<sub>d</sub> indexed by I<sub>d</sub>, for each d ∉ A, with dimensions Θ.
- Locally constant away from A.
- Across each d ∈ A, the gradings on the two sides give the same filtration for every total order that extends the Stokes arrows at d.

**Wild monodromy and Stokes local system.** Two gradings of a vector space are compatible if they split a common filtration. Then exactly one automorphism g takes the first to the second and acts as the identity on the associated graded. It is unipotent. A Stokes local system lives on the surface with one extra "tangential" puncture near each singular direction. It is graded in a small punctured disc (halo) at each pole.

## Main results

**Theorem (Splitting; Theorem 1.1, restated as Theorem 11.3).** Every Stokes filtered local system (V, Θ, F) admits a unique Stokes grading Γ on the same V, of the same class Θ, such that the gradings split the filtrations wherever both are defined.
- Step 1 (existence): compose splittings one level at a time, following a sketch of Malgrange.
- Step 2 (uniqueness): the same level-by-level analysis is upgraded to show no other grading works. Boalch says this part looks to be new.

**Theorem (three descriptions; stated in §1 and §11).** The functor from Stokes graded to Stokes filtered local systems, which takes associated filtrations, is fully faithful and surjective, so it is an equivalence. Stokes graded local systems are in turn equivalent to Stokes local systems.
- Consequence: the paper quotes the Deligne–Malgrange equivalence between connections and Stokes filtered local systems, so algebraic connections on the punctured curve have three topological descriptions.

**Lemma (wild monodromy is well defined; Lemma 3.2).** For compatible gradings Γ<sub>1</sub>, Γ<sub>2</sub> of V there is a unique g ∈ GL(V) with g(Γ<sub>1</sub>) = Γ<sub>2</sub> and Gr(g) = 1, for any filtration F split by both.
- Step 1: the splittings of a fixed filtration F form a torsor under the unipotent radical U(F) of the parabolic subgroup fixing F.
- Step 2: for two such filtrations, the common splittings form a torsor under U(F<sub>1</sub>) ∩ U(F<sub>2</sub>), so g does not depend on F.

**Claim (wild character varieties; §1 and §13, quoting earlier work).** Moduli of Stokes local systems have a presentation Hom<sub>S</sub>(Π, G)/H, an affine variety of Stokes representations of a fundamental groupoid modulo a reductive group H. So geometric invariant theory applies.

## Note, then ignore

- Two kinds of jump. Filtrations jump at the oscillating directions S, gradings jump at the singular directions A, and these are usually different sets. Safe to skip the details at first.
- The formal local system V<sup>0</sup>. It is the associated graded of the filtrations and it is not a grading of V itself. Boalch warns about this. Safe to skip until §8.
- Analysis as a black box. Appendix A collects the asymptotic existence and multisummation theorems that attach this data to a connection. Safe to skip.

## One next step

Open the paper at §5.6 and read the half page on Weber's equation, then glance at the continuation in §6.1 with its picture of the four lines.
