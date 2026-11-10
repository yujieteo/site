source: https://arxiv.org/pdf/2602.21330
slogan: Coherent points and all points of a spectral ∞-topos collapse to the same condensed anima, so proétale and Lascar groups share one recipe.
basis: the introduction and the main theorem statements

## Before you start

The title alone stacks four heavy words: anima, condensed, ∞-category, points. The likely feeling is shame at not owning the background in ∞-topoi, ultracategories and model theory all at once. That feeling makes sense, and you can let it sit there. The note is 22 pages, and its key idea shows up in a statement about open and clopen subsets of a space. If you like seeing Galois groups in two unrelated fields come from one construction, read for that pleasure. Finishing is optional.

## The story

Two communities build a "fundamental group" from points of a topos. In algebraic geometry, Barwick, Glasman and Haine take the étale ∞-topos of a qcqs scheme, form a condensed ∞-category of coherent points, and collapse it to a condensed anima. Its fundamental group, mildly completed, is the proétale fundamental group of Bhatt and Scholze. In model theory, the condensed category of all models of a complete first-order theory collapses to something whose fundamental group is the Lascar group. The two recipes use different categories: coherent points in one, all points in the other. The note shows the difference vanishes after collapsing. For a spectral ∞-topos, the inclusion of coherent points into all points has a left adjoint on each extremally disconnected set K, and an adjunction becomes an equivalence of classifying anima. In the simplest case the left adjoint sends an open subset of K to its closure, which is again open.

## Main definitions

**Condensed ∞-category of points.** For an ∞-topos 𝒳, Pt(𝒳) sends an extremally disconnected profinite set K to Fun<sup>\*</sup>(𝒳, Sh(K)), the ∞-category of left exact left adjoints 𝒳 → Sh(K) (Definition 2.5). Its value at a point is the usual ∞-category of points of 𝒳.
- Example: for the classifying ∞-topos of a coherent first-order theory T, the value at K is the category of models of T in sheaves of sets on K.

**Condensed ∞-category of coherent points.** For a coherent ∞-topos 𝒳, Pt<sup>coh</sup>(𝒳) sends K to the full subcategory of those left exact left adjoints 𝒳 → Sh(K) that preserve coherent objects (Definition 2.10).
- Example: for sheaves on a spectral space X, all points over K are continuous maps K → X, ordered by pointwise specialisation. Coherent points are the quasicompact maps.

**Classifying anima.** B is the left adjoint to the inclusion of anima into ∞-categories. It inverts every morphism. Applied pointwise in K it turns a condensed ∞-category into a condensed anima.

**Spectral ∞-topos.** A bounded coherent ∞-topos in which every endomorphism of every point is an equivalence. The étale ∞-topos of a qcqs scheme is the main example.

## Main results

**Theorem (coherent points suffice; Theorem 2.20, stated as 0.3).** Let 𝒳 be a spectral ∞-topos. For each extremally disconnected profinite set K, the inclusion Pt<sup>coh</sup>(𝒳)(K) ↪ Pt(𝒳)(K) has a left adjoint. Hence Pt<sup>coh</sup>(𝒳) ↪ Pt(𝒳) induces an equivalence of condensed classifying anima.
- Step 1: by Gleason's theorem K is a retract of a Čech–Stone compactification β(S), so reduce to K = β(S).
- Step 2: for spectral 𝒳, coherent points over β(S) are the same as S-indexed families of points. Corollary 1.12 makes these families a reflective subcategory of all points over β(S).

**Proposition (Łoś as sheaf theory; Proposition 1.6 and Corollary 1.10).** For a set S with inclusion j: S ↪ β(S), the stalk of j<sub>\*</sub>X at an ultrafilter μ is the ultraproduct of the stalks X<sub>s</sub> along μ. The pushforward j<sub>\*</sub>: Sh(S) → Sh(β(S)) preserves finite limits, finite coproducts and effective epimorphisms.
- Step 1: compute the stalk as a colimit over clopen neighbourhoods of μ, which are closures of subsets of S lying in μ.
- Step 2: stalks are jointly conservative, so the claim reduces to the Łoś theorem for ultraproducts of anima (Lurie, SAG E.3.3.8).

**Corollary (families of points extend; Corollary 1.12).** For a coherent ∞-topos 𝒳 and a set S, restriction from Fun<sup>\*</sup>(𝒳, Sh(β(S))) to Fun<sup>\*</sup>(𝒳, Sh(S)) ≃ Pt(𝒳)<sup>S</sup> has a fully faithful right adjoint, given by composing with j<sub>\*</sub>.

## Note, then ignore

- Spectral is needed. Warning 0.4: for the theory of abelian groups, coherent points are finite abelian groups, and their inclusion into all abelian groups has no left adjoint. Safe to skip on a first reading.
- Extremally disconnected is needed. Warning 2.22 shows the left adjoint fails for the one-point compactification of ℕ, so the inclusion is not an adjoint of condensed ∞-categories. Safe to skip.
- Size. Pt(𝒳)(K) is large but accessible, and Corollary 2.18 shows the classifying anima of an accessible ∞-category is small. Safe to skip.
- "Mild completion". The proétale group is recovered only after a completion of π<sub>1</sub>, proved in other work cited as [10]. Safe to skip.
- Forthcoming input. The Lascar group statement is from work with Damaj and Zhang cited as forthcoming. This note does not prove it. Safe to skip.

## One next step

Open the paper and read only paragraphs 0.5 and 0.6 on page 3, where the theorem becomes the statement that an open set in K has a clopen closure.
