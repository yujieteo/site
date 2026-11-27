### Clock trees give ultrametric distances

**Remember:** Equal tip heights force the two largest distances in every triple to tie.

*Rules out counterexamples.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Use a rooted tree with the same total length from its root to every tip. This models a strict evolutionary clock for tips sampled at the same time. Allowing unequal root-to-tip lengths gives an ordinary weighted tree instead.

**Problem.** For any three tips of a clock tree with positive edge lengths, the largest two pair distances are equal. Its tip distances are therefore an ultrametric.

**How the definition helps.** Equal tip heights make each pair distance twice the height difference from its most recent common ancestor (our own). Among three tips, at least two pairs have the same oldest common ancestor, so their distances tie for largest (our own). This tie gives the ultrametric inequality, which bounds each distance by the larger of the other two (our own). A three-tip star with edge lengths 1, 2 and 3 instead gives distances 3, 4 and 5 (our own).

**Paper or page:** [Hit and Run Sampling from Tropically Convex Sets](https://arxiv.org/abs/2209.15045v1). It says: “Then, u is an ultrametric if and only if T is an equidistant tree.”

**Sources:**

- [Peter Buneman, A note on the metric properties of trees (1974).](https://doi.org/10.1016/0095-8956(74)90047-1)

### Split counts give a tree metric

**Remember:** Each split on which two trees disagree must change in at least one comparison.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** For two unrooted evolutionary trees on the same labeled tips, list the partitions of tips obtained by cutting individual edges. Define their Robinson–Foulds distance as the number of partitions present in exactly one list. The original edit description counts internal edge contractions and their reversals.

**Problem.** This distance is a metric on unweighted trees with the same labeled tips and no degree-two internal nodes. Identify trees when an isomorphism preserves their tip labels.

**How the definition helps.** Counting differing partitions turns tree distance into the number of unequal entries in two binary lists (our own). Each disagreement between the first and last trees must appear in at least one comparison through an intermediate tree (our own). This gives the triangle inequality (our own). Proving that distance zero identifies the trees requires the theorem that the partitions determine the tree (our own).

**Wikipedia:** [Robinson–Foulds metric](https://en.wikipedia.org/wiki/Robinson%E2%80%93Foulds_metric). It says: “the number of splits that differ between a pair of trees”

**Sources:**

- [D. F. Robinson and L. R. Foulds, Comparison of phylogenetic trees (1981).](https://doi.org/10.1016/0025-5564(81)90043-2)

### Tree splits explain four-point ties

**Remember:** For four tips, only their internal split can make the three sums differ.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Define the distance between two tips of an evolutionary tree by adding the lengths along their connecting path. Equivalently, sum the lengths of all edges whose removal separates those tips.

**Problem.** For four distinct tips, sum the two distances in each of the three possible pairings. The largest sum occurs at least twice in any tree with nonnegative edge lengths.

**How the definition helps.** Writing each distance as a sum over separating edges lets us compare the three pairings edge by edge (our own). An edge separating one tip from three contributes equally to all pairings (our own). All edges separating two tips from two give the same partition, since removing one leaves the others on one side (our own). Each adds twice its length to the two crossing pairings and zero to the third (our own). The converse requires reconstructing a tree from distances satisfying the four-point condition (our own).

**Paper or page:** [Tropical Grassmannian and Tropical Linear Varieties from phylogenetic trees](https://arxiv.org/abs/1312.0752v2). It says: “the maximum of three number is achieved at least twice D({i,j}) + D({k,l}), D({i,k}) + D({j,l}) and D({i,l}) + D({j,k}).”

**Sources:**

- [Peter Buneman, A note on the metric properties of trees (1974).](https://doi.org/10.1016/0095-8956(74)90047-1)

### Linkage excess decays geometrically

**Remember:** Subtract independent pairing first, then recombination scales only the excess.

*True by definition.* MSC 92D10 (Genetics and epigenetics). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Choose one genetic variant at each of two positions on a chromosome. Subtract the product of their separate frequencies from the frequency of chromosomes carrying both. This difference D measures linkage disequilibrium.

**Problem.** In a deterministic random-mating model, D becomes (1 − c)D each generation. Here c is the fixed fraction of reproductive cells in which recombination separates the two positions. Assume no selection, mutation or migration.

**How the definition helps.** Subtracting the independent baseline leaves a variable that the update simply multiplies (our own). The work is to derive the random-mating update for paired variants and show that recombination leaves the separate frequencies fixed (our own). The raw joint frequency would instead obey an update with an added constant (our own).

**Wikipedia:** [Linkage disequilibrium](https://en.wikipedia.org/wiki/Linkage_disequilibrium). It says: “recombination is expected to decrease the value of D in each generation by a factor (1 - c)”

**Sources:** none listed. No primary source with a working link was found.

### Relative fitness isolates selection

**Remember:** Relative fitness turns the change in weights into a covariance.

*True by definition.* MSC 92D15 (Problems related to evolution). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Assign each descendant to one ancestor and assume at least one descendant exists. Define each ancestor’s relative fitness as its descendant count divided by the mean count per ancestor.

**Problem.** The change in mean trait equals the covariance of relative fitness with ancestral trait plus a transmission term. Compute the covariance across equally weighted ancestors. For transmission, average each family’s mean trait change times relative fitness, counting childless families as zero.

**How the definition helps.** Using relative fitness gives weights with mean one, so reweighting ancestral traits adds exactly a covariance (our own). Add and subtract this reweighted ancestral mean when comparing the two generations (our own). The remaining difference measures change within families (our own). Predicting either term still requires a model of reproduction and transmission (our own).

**Wikipedia:** [Price equation](https://en.wikipedia.org/wiki/Price_equation). It says: “The equation uses a covariance between a characteristic and fitness, to give a mathematical description of evolution and natural selection.”

**Sources:**

- [George R. Price, Selection and Covariance (1970).](https://doi.org/10.1038/227520a0)

### Log populations preserve volume

**Remember:** Use log sizes so each growth equation ignores its own coordinate.

*True by definition.* MSC 92D25 (Population dynamics (general)). arXiv math.DS, q-bio.PE. Level 2: later undergraduate.

**Definition.** Use the logarithm of each population size as its coordinate. Assume each species’ per capita growth rate is a constant plus a sum of multiples of the other population sizes.

**Problem.** The flow preserves ordinary volume in log coordinates wherever the solutions exist and stay positive.

**How the definition helps.** Logarithms turn each per capita growth rate into a velocity independent of its own coordinate (our own). The diagonal derivatives therefore vanish, so the velocity has zero divergence (our own). The flow volume theorem then gives preservation of ordinary volume in log coordinates (our own). In population coordinates, the same volume weights each region by the reciprocal product of its population sizes (our own).

**Paper or page:** [On a quadratic Poisson algebra and integrable Lotka-Volterra systems with solutions in terms of Lambert's W function](https://arxiv.org/abs/2408.14720v2). It says: “with aᵢᵢ = 0 are measure preserving with density M = (∏ᵢ₌₁ⁿ xᵢ)⁻¹.”

**Sources:**

- [Peter H. van der Kamp, D. I. McLaren and G. R. W. Quispel, On a quadratic Poisson algebra and integrable Lotka-Volterra systems with solutions in terms of Lambert's W function (2024).](https://arxiv.org/abs/2408.14720v2)

### Reproductive value gives exact growth

**Remember:** Weight ages by what they contribute to future growth.

*True by definition.* MSC 92D25 (Population dynamics (general)). arXiv q-bio.PE, math.DS. Level 2: later undergraduate.

**Definition.** Use a fixed age projection matrix to move the age counts forward one step. Weight each age by the corresponding entry of a positive left eigenvector for the dominant eigenvalue. This weighted count uses reproductive values instead of counting every age equally.

**Problem.** For a primitive age projection matrix, the weighted total grows by its dominant eigenvalue every step, from any starting age distribution. Primitive means that some power of the matrix has strictly positive entries.

**How the definition helps.** The eigenvector weights turn the age update into multiplication of one total by one factor (our own). For a row of weights w and projection matrix A, the left eigenvector equation gives wA = λw (our own). The Perron–Frobenius theorem supplies positive weights, and the age model relates them to discounted future offspring (our own). For a nonzero initial population, the ordinary head count’s growth factor generally approaches λ only in the limit (our own).

**Wikipedia:** [Reproductive value (population genetics)](https://en.wikipedia.org/wiki/Reproductive_value_%28population_genetics%29). It says: “he proposed that future offspring be discounted at the rate of growth of the population”

**Sources:**

- [Ronald A. Fisher, The Genetical Theory of Natural Selection (1930).](https://doi.org/10.5962/bhl.title.27468)
- [P. H. Leslie, On the use of matrices in certain population mathematics (1945).](https://doi.org/10.1093/biomet/33.3.183)

### Effective diversity scales with replication

**Remember:** Exponentiating entropy makes doubling equal, disjoint samples double their diversity.

*True by definition.* MSC 92D40 (Ecology). arXiv q-bio.QM. Level 2: later undergraduate.

**Definition.** For each species with positive frequency p, form −p ln p and sum over species to obtain Shannon entropy H. Define order-one Hill diversity as exp(H), the number of equally common species that would give the same entropy.

**Problem.** Pool equally weighted communities with disjoint species and the same species frequency pattern. The pooled order-one Hill diversity equals the diversity of one community times the number of communities.

**How the definition helps.** Exponentiation turns the additive entropy increase into a multiplicative change in diversity (our own). Pooling m equal communities replaces each frequency p with m copies of p/m because the species sets are disjoint (our own). Substitution in the entropy sum adds ln m, so the effective number of species grows by a factor of m (our own).

**Wikipedia:** [Diversity index](https://en.wikipedia.org/wiki/Diversity_index). It says: “Hill numbers of order q or effective number of species”

**Sources:**

- [Lou Jost, Entropy and diversity (2006).](https://doi.org/10.1111/j.2006.0030-1299.14714.x)

### Evolutionary stability rejects neutral ties

**Remember:** When payoffs against residents tie, compare both strategies against the mutant.

*Rules out counterexamples.* MSC 92D15 (Problems related to evolution). arXiv q-bio.PE, math.DS. Level 3: graduate.

**Definition.** In a symmetric game, both players use the same payoff rule. A resident strategy is evolutionarily stable if it beats each alternative in a population containing a sufficiently small positive share of that alternative. This requires at least a tie against residents and, in case of a tie, a strict advantage against the alternative.

**Problem.** In a finite symmetric two-player game, every evolutionarily stable strategy is locally asymptotically stable under replicator dynamics. Each strategy’s share grows at a per capita rate equal to its payoff minus the population mean. Populations starting sufficiently close stay close and converge to the resident.

**How the definition helps.** The extra test makes the resident outperform every sufficiently close mixture, including mixtures that tie against the resident alone (our own). For a counterexample, let a player score one only when both players choose B (our own). All-A is a Nash equilibrium, but a small positive share of B grows and moves away from it (our own). The work is to find a measure of distance to the resident that decreases because of the payoff advantage (our own).

**Wikipedia:** [Evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy). It says: “the population of players who continue to play strategy S has an advantage when playing against T.”

**Sources:**

- [John Maynard Smith and George R. Price, The Logic of Animal Conflict (1973).](https://doi.org/10.1038/246015a0)
- [Peter D. Taylor and Leo B. Jonker, Evolutionary stable strategies and game dynamics (1978).](https://doi.org/10.1016/0025-5564(78)90077-9)

### Child labels identify tree-child networks

**Remember:** A child with one parent appears in exactly one child set.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 4: research.

**Definition.** An evolutionary network is a rooted directed graph of parent-child relationships, with species at the tips. In the paper’s labeling, each node has a distinct integer label. Each parent contributes the set of labels of its children, and the resulting family of sets is called an expanding cover. A network is tree-child when every parent has a child with exactly one parent.

**Problem.** For networks admitting this encoding, the network is tree-child exactly when every set contains a label occurring only once in the cover.

**How the definition helps.** Every occurrence of a label in a child set counts one parent (our own). Checking a child’s parent count becomes counting label occurrences (our own). The work lies in the earlier bijection between these covers and networks that admit the labeling (our own).

**Paper or page:** [Phylogenetic network classes through the lens of expanding covers](https://arxiv.org/abs/2306.06519v2). It says: “Tree-child networks are in bijection with expanding covers for which each set contains an integer that appears exactly once in the cover.”

**Sources:**

- [Andrew Francis, Daniele Marchei and Mike Steel, Phylogenetic network classes through the lens of expanding covers (2024).](https://arxiv.org/abs/2306.06519v2)
