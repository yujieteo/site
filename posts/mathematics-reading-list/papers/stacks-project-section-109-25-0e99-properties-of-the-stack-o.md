source: https://stacks.math.columbia.edu/tag/0E99
slogan: The stack of stable curves of genus at least 2 is a smooth proper Deligne-Mumford stack over ℤ, so curves have a compact moduli space.
basis: the page itself

## Before you start

The section is one screen long, but every line cites a lemma from an earlier section or another chapter. The likely feeling is frustration, a sense that the real content is always one link away. That is a fair reaction. You need not chase the links. If you want to know what "compactifying the moduli of curves" means, this page states it in one theorem and shows which earlier facts carry the weight. Read it as a map. Enjoy seeing the pieces lock together.

## The story

Smooth curves of genus g form a moduli stack ℳ<sub>g</sub>, but it is not compact. A family of smooth curves over a punctured disc may have no smooth limit. Deligne and Mumford allowed nodes, and required stability so that limits are unique. This section assembles the proof that the resulting stack M̄<sub>g</sub> has every good property at once, over ℤ and not just over a field. The plan is a checklist. Smooth, Deligne-Mumford and "ℳ<sub>g</sub> is open and dense" come from earlier sections. Two lemmas add separated and quasi-compact. Then valuative criteria turn properness into a statement about curves over a discrete valuation ring: a smooth curve over the fraction field extends to a stable curve after a base extension, in exactly one way.

## Main definitions

**Stable family of curves.** A family of curves f : X → S is stable if it is a prestable family (the fibres are connected curves with at-worst-nodal singularities) and every fibre X<sub>s</sub> has genus at least 2 with no rational tails and no rational bridges (Definition 109.22.2).
- Over a field k: X is stable exactly when it is geometrically connected, smooth apart from finitely many nodes, and its dualising sheaf ω<sub>X</sub> is ample.

**The stack M̄<sub>g</sub>.** The open substack of the stack 𝒞urves that parametrises stable families of curves of genus g. The open substack ℳ<sub>g</sub> parametrises smooth families.

**Valuative criterion, in this setting.** Given a discrete valuation ring R with fraction field K and a smooth genus g curve over K, one asks for stable families over R that restrict to it.
- Uniqueness: at most one extension up to isomorphism gives separatedness.
- Existence: an extension after enlarging K and R gives properness, once the stack is separated and quasi-compact.

## Main results

**Lemma (separated; Lemma 109.25.1).** Let g ≥ 2. The stack M̄<sub>g</sub> is separated over Spec(ℤ).
- Step 1: M̄<sub>g</sub> is locally Noetherian and quasi-separated, and ℳ<sub>g</sub> is dense in it, so a refined Noetherian valuative criterion applies. It only tests discrete valuation rings whose generic point maps to ℳ<sub>g</sub>.
- Step 2: the required uniqueness is Lemma 109.24.2, uniqueness of the stable model.

**Lemma (quasi-compact; Lemma 109.25.2).** Let g ≥ 2. The stack M̄<sub>g</sub> is quasi-compact.
- Step 1: polarise each stable curve X by ℒ = ω<sub>X</sub><sup>⊗3</sup>. This sheaf is very ample with H<sup>1</sup>(X, ℒ) = 0, and its Hilbert polynomial is P(t) = (6g − 6)t + (1 − g).
- Step 2: so all stable curves of genus g embed in one projective space with one Hilbert polynomial, and a boundedness criterion for polarised schemes gives quasi-compactness.

**Theorem (Deligne-Mumford; Theorem 109.25.3).** Let g ≥ 2. The algebraic stack M̄<sub>g</sub> is a Deligne-Mumford stack, proper and smooth over Spec(ℤ). The locus ℳ<sub>g</sub> of smooth curves is a dense open substack.
- Step 1: smoothness is Lemma 109.22.6, Deligne-Mumford is Lemma 109.22.7, and openness and density of ℳ<sub>g</sub> are in Lemma 109.22.8.
- Step 2: with separated and quasi-compact in hand, properness reduces by a valuative criterion to the stable reduction theorem, Theorem 109.24.3.

## Note, then ignore

- 2-arrows in the diagrams. The valuative criteria speak of a "category of dotted arrows" and 2-commutative squares. The page itself says not to worry much about 2-arrows here. Safe to skip.
- Extension of the field. Existence holds only after passing to an extension K′ of K and a valuation ring dominating the first. This is why the stack is proper although curves gain automorphisms. Safe to skip at first.
- Only generic points in ℳ<sub>g</sub>. The refined criteria test only families that are smooth over K. Density of ℳ<sub>g</sub> permits this. Safe to skip.
- A subscript in the proof. In Lemma 109.25.2 the pullback sheaf is written 𝒪(1) on ℙ<sup>1</sup> where ℙ<sup>n</sup> is meant. Safe to ignore.
- The exponent 3. Any fixed power of ω that is very ample on all stable curves would do. Safe to skip.

## One next step

Open the page and read only the statement of Theorem 109.25.3 and the first three sentences of its proof, which list where each property comes from.
