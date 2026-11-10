source: https://stacks.math.columbia.edu/tag/04Y1
slogan: Stackifying commutes with 2-fibre products, so you may build a fibre product of stacks from prestack models and stackify once at the end.
basis: the page itself

## Before you start

This is a single lemma with a three-paragraph proof, set in the 2-categorical language of fibred categories. The likely feeling is a small dread of bookkeeping: triples, 2-arrows, "locally in the essential image". You may feel that. It does not mean you are slow. If you want to feel at home with quotient stacks and their fibre products, this lemma is one of the quiet tools underneath. Read it to enjoy how little it needs. Finishing is secondary.

## The story

Many stacks are born as prestacks. You write down a fibred category that is nearly right, such as the naive quotient of a space by a group, and then stackify. Later you want a fibre product of two such stacks. Must you compute it inside the stackified objects, which are harder to describe? The worry is that stackification, like sheafification, changes objects and morphisms, and might not respect fibre products. The lemma says it does respect them. The reason is the same as for sheaves: sheafification is exact, so it commutes with fibre products of presheaves. The proof applies this to the sheaves of morphisms, then checks that every object on the stack side comes locally from the prestack side.

## Main definitions

**Fibred category over a site.** A category 𝒳 with a functor to a site 𝒞, such that objects pull back along morphisms of 𝒞. For an object U of 𝒞, the fibre 𝒳<sub>U</sub> is the category of objects lying over U. A stack is a fibred category in which morphisms form sheaves and descent data glue.

**2-fibre product.** Given f : 𝒳 → 𝒴 and g : 𝒵 → 𝒴, an object of 𝒳 ×<sub>𝒴</sub> 𝒵 over U is a triple (x, z, α). Here x lies in 𝒳<sub>U</sub>, z lies in 𝒵<sub>U</sub>, and α : f(x) → g(z) is an isomorphism in 𝒴<sub>U</sub>.
- If 𝒳, 𝒴 and 𝒵 are stacks, the 2-fibre product is a stack (Lemma 8.4.6).

**Stackification.** For a fibred category 𝒮 over 𝒞, a stack 𝒮′ with a 1-morphism G : 𝒮 → 𝒮′ such that two conditions hold (Lemma 8.8.1). It is unique up to unique 2-isomorphism.
- Morphisms: Mor(G(x), G(y)) is the sheafification of the presheaf Mor(x, y).
- Objects: every object of 𝒮′ over U lies in the essential image of G after passing to a covering of U.

## Main results

**Lemma (stackification commutes with 2-fibre products; Lemma 8.8.4).** Let 𝒞 be a site. Let f : 𝒳 → 𝒴 and g : 𝒵 → 𝒴 be morphisms of fibred categories over 𝒞, with stackifications 𝒳′, 𝒴′, 𝒵′. Let 𝒲 be the stackification of 𝒳 ×<sub>𝒴</sub> 𝒵. Then the canonical 1-morphism h : 𝒲 → 𝒳′ ×<sub>𝒴′</sub> 𝒵′ is an equivalence. The map h exists by the universal property of stackification (Lemma 8.8.2), because the target is a stack.
- Step 1 (morphisms): for objects coming from triples (x, z, α) and (x′, z′, α′), the morphism presheaf is a fibre product of the morphism presheaves of 𝒳 and 𝒵 over that of 𝒴. Sheafification is exact, so it commutes with this fibre product, and h is an isomorphism on Mor-sheaves.
- Step 2 (objects): take a triple (x′, z′, α) in the target. Locally x′ comes from 𝒳 and z′ comes from 𝒵. After that replacement, α comes locally from a morphism of 𝒴. So every object is locally in the essential image of h.

**Claim (how to test an equivalence of stacks; Lemmas 8.4.7 and 8.4.8, cited in the proof).** A 1-morphism of stacks is an equivalence if it induces isomorphisms on sheaves of morphisms and every object of the target is locally in its essential image. I read only how the proof uses these two lemmas, not their statements, so take the exact wording from the source.

## Note, then ignore

- No hypotheses on the fibred categories. 𝒳, 𝒴 and 𝒵 need not be fibred in groupoids, and 𝒞 is any site. This generality costs nothing in the proof. Safe to skip.
- Working locally. The proof reduces to objects that come from the prestack by passing to a covering of U. This is allowed because a map of sheaves is an isomorphism if it is one locally. Safe to skip.
- "A fortiori" at the end. The proof shows objects are locally in the image of the prestack fibre product, which maps through 𝒲. So they are locally in the image of h. Safe to skip.
- Two proofs of stackification. The page for Lemma 8.8.1 builds the stackification by a "naive method" in stages. The lemma here uses only the two properties, not the construction. Safe to skip on a first reading.
- Canonical versus strict. Everything holds up to equivalence and 2-isomorphism, never on the nose. Safe to skip.

## One next step

Open the page and read only the statement of Lemma 8.8.4 and the third paragraph of the proof, where exactness of sheafification does the work.
