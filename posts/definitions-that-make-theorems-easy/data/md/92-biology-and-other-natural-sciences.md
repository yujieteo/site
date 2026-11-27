### Clock trees give ultrametric distances

**Remember:** Equal tip heights force the two largest distances in every triple to tie.

*Rules out counterexamples.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Use a rooted tree with the same total length from its root to every tip. This models a strict evolutionary clock for tips sampled at the same time. Allowing unequal root-to-tip lengths gives an ordinary weighted tree instead.

**Problem.** For any three tips of a clock tree with positive edge lengths, the largest two pair distances are equal. Its tip distances are therefore an ultrametric.

**How the definition helps.** Equal tip heights make each pair distance twice the height difference from its most recent common ancestor (our own). Among three tips, at least two pairs have the same oldest common ancestor, so their distances tie for largest (our own). This tie gives the ultrametric inequality, which bounds each distance by the larger of the other two (our own). A three-tip star with edge lengths 1, 2 and 3 instead gives distances 3, 4 and 5 (our own).

**Paper or page:** [Hit and Run Sampling from Tropically Convex Sets](https://arxiv.org/abs/2209.15045v1). It says: “Then, u is an ultrametric if and only if T is an equidistant tree.”

**Sources:**

- [Peter Buneman, A note on the metric properties of trees (1974).](https://doi.org/10.1016/0095-8956(74)90047-1)

### Fitch sets count minimum changes

**Remember:** Intersect sets when you can and charge one change when you must unite them.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE, q-bio.QM. Level 2: later undergraduate.

**Definition.** Consider a rooted binary ancestry tree with known states at its leaves. Charge one whenever the states at the ends of an edge differ. For each vertex, keep every state it can take in an assignment minimizing the total charge within its subtree.

**Problem.** Starting at the leaves, use the intersection of the two child sets whenever it contains a state. Otherwise use their union and count one change. The total count is the smallest possible number of changes on the tree.

**How the definition helps.** Keeping every minimizing state tells the parent exactly when it can join both subtrees without paying for another change (our own). A parent state in a child’s set allows that subtree’s minimum cost (our own). Any other state costs exactly one extra because the joining edge can carry the change (our own). These two possibilities prove the recursion and explain why choosing one minimizing state early can overcount (our own).

**Wikipedia:** [Ancestral reconstruction](https://en.wikipedia.org/wiki/Ancestral_reconstruction). It says: “if the intersection is the empty set, then it is the set union.”

**Sources:**

- [W. M. Fitch, Toward Defining the Course of Evolution: Minimum Change for a Specific Tree Topology (1971)](https://doi.org/10.2307/2412116)

### Split counts give a tree metric

**Remember:** Each split on which two trees disagree must change in at least one comparison.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** For two unrooted evolutionary trees on the same labeled tips, list the partitions of tips obtained by cutting individual edges. Their Robinson–Foulds distance is the number of partitions present in exactly one list.

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

**How the definition helps.** Count each edge’s contribution to the three sums (our own). Edges separating one tip from three contribute equally, and edges separating none contribute zero (our own). All two-against-two edges induce the same split because tree edge splits are compatible (our own). Each adds twice its nonnegative length to both crossing pairings, so those sums tie for largest (our own).

**Paper or page:** [Tropical Grassmannian and Tropical Linear Varieties from phylogenetic trees](https://arxiv.org/abs/1312.0752v2). It says: “the maximum of three number is achieved at least twice D({i,j}) + D({k,l}), D({i,k}) + D({j,l}) and D({i,l}) + D({j,k}).”

**Sources:**

- [Peter Buneman, A note on the metric properties of trees (1974).](https://doi.org/10.1016/0095-8956(74)90047-1)

### Single-neuron updates prevent Hopfield cycles

**Remember:** Update one neuron at a time so each actual flip lowers the energy.

*Rules out counterexamples.* MSC 92B20 (Neural networks for/in biological studies, artificial life and related topics). arXiv q-bio.NC. Level 2: later undergraduate.

**Definition.** A finite Hopfield network has states ±1, symmetric connection weights and no self-connections. Update one neuron at a time to the sign of its weighted input, keeping its state at zero input. Visit every neuron infinitely often.

**Problem.** Every such update run eventually reaches a fixed state.

**How the definition helps.** Take energy to be minus the sum over undirected edges of weight times the product of endpoint states (our own). Its change equals minus the updated neuron's input times its state change, so every flip strictly decreases energy (our own). Finiteness allows only finitely many flips, and repeated visits then imply stability (our own). Under simultaneous updates, two positively coupled neurons starting in opposite states swap forever (our own).

**Wikipedia:** [Hopfield network](https://en.wikipedia.org/wiki/Hopfield_network). It says: “The constraint that weights are symmetric guarantees that the energy function decreases monotonically while following the activation rules.”

**Sources:**

- [J. J. Hopfield, Neural networks and physical systems with emergent collective computational abilities (1982)](https://doi.org/10.1073/pnas.79.8.2554)
- [J. Bruck, On the convergence properties of the Hopfield model (1990)](https://doi.org/10.1109/5.58341)

### Crossover distances add across intervals

**Remember:** Count crossovers rather than just the pairs they switch.

*True by definition.* MSC 92D10 (Genetics and epigenetics). arXiv q-bio.GN, q-bio.PE. Level 2: later undergraduate.

**Definition.** A crossover exchanges chromosome segments during the formation of a reproductive cell. Measure genetic distance in morgans by the expected number of crossovers on the transmitted chromosome between two markers. The recombination fraction instead counts the probability that the two markers come from different parental chromosomes.

**Problem.** Genetic distances add across adjacent intervals. If the crossover count has a Poisson distribution with mean d, the recombination fraction equals (1 − exp(−2d))/2.

**How the definition helps.** Adjacent crossover counts add on each transmitted chromosome, so their expectations add without any independence assumption (our own). Only an odd count switches the marker pairing (our own). For a Poisson count N of mean d, E\[(−1)ᴺ\] = exp(−2d) equals one minus twice the odd-count probability (our own).

**Wikipedia:** [Centimorgan](https://en.wikipedia.org/wiki/Centimorgan). It says: “the distance in centimorgans does not correspond exactly to the probability of genetic recombination.”

**Sources:** none listed. No primary source with a working link was found.

### Linkage excess decays geometrically

**Remember:** Subtract independent pairing first, then recombination scales only the excess.

*True by definition.* MSC 92D10 (Genetics and epigenetics). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Choose one genetic variant at each of two positions on a chromosome. Subtract the product of their separate frequencies from the frequency of chromosomes carrying both. This difference D measures linkage disequilibrium.

**Problem.** In a deterministic random-mating model, D becomes (1 − c)D each generation. Here c is the fixed fraction of reproductive cells in which recombination separates the two positions. Assume no selection, mutation or migration.

**How the definition helps.** Recombination mixes the current joint frequency J with the independent pairing frequency pq (our own). Random mating gives J′ = (1 − c)J + cpq, while the separate frequencies p and q stay fixed (our own). Subtracting pq gives D′ = (1 − c)D (our own).

**Wikipedia:** [Linkage disequilibrium](https://en.wikipedia.org/wiki/Linkage_disequilibrium). It says: “recombination is expected to decrease the value of D in each generation by a factor (1 - c)”

**Sources:** none listed. No primary source with a working link was found.

### Relative fitness isolates selection

**Remember:** Divide each ancestor’s descendant count by the mean descendant count.

*True by definition.* MSC 92D15 (Problems related to evolution). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Assign each descendant to one ancestor and assume at least one descendant exists. Define each ancestor’s relative fitness as its descendant count divided by the mean count per ancestor.

**Problem.** The change in mean trait equals the covariance of relative fitness with ancestral trait, plus a transmission term. The transmission term averages, over ancestors, relative fitness times the change from the ancestor's trait to its descendants' mean trait. Both averages weight ancestors equally, and childless ancestors add zero.

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

### Effective reproduction locates infection peaks

**Remember:** Divide transmission per infected individual by recovery per infected individual.

*True by definition.* MSC 92D30 (Epidemiology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** In the closed SIR model, susceptible and infected fractions satisfy S′ = −βSI and I′ = βSI − γI for constants β,γ &gt; 0. The effective reproduction number R = βS/γ compares the current per-infected transmission rate with the recovery rate.

**Problem.** If I starts positive and R starts above one, I has a unique peak when R reaches one.

**How the definition helps.** Using R turns the infection equation into the sign test I′ = γI(R − 1) (our own). While R ≥ 1, I stays above its positive starting value and S decreases at rate βSI (our own). Hence S crosses γ/β in finite time and continues decreasing, so growth changes to decline exactly once (our own).

**Paper or page:** [The SIR model of an epidemic](https://arxiv.org/abs/2104.12029). It says: “The peak infection takes place when the effective reproduction number r₀ S = 1.”

**Sources:**

- [The SIR model of an epidemic](https://arxiv.org/abs/2104.12029)

### Effective diversity scales with replication

**Remember:** Exponentiating entropy makes doubling equal, disjoint samples double their diversity.

*True by definition.* MSC 92D40 (Ecology). arXiv q-bio.QM. Level 2: later undergraduate.

**Definition.** For each species with positive frequency p, form −p ln p and sum over species to obtain Shannon entropy H. Define order-one Hill diversity as exp(H), the number of equally common species that would give the same entropy.

**Problem.** Pool equally weighted communities with disjoint species and the same species frequency pattern. The pooled order-one Hill diversity equals the diversity of one community times the number of communities.

**How the definition helps.** Exponentiation turns the additive entropy increase into a multiplicative change in diversity (our own). Pooling m equal communities replaces each frequency p with m copies of p/m because the species sets are disjoint (our own). Substitution in the entropy sum adds ln m, so the effective number of species grows by a factor of m (our own).

**Wikipedia:** [Diversity index](https://en.wikipedia.org/wiki/Diversity_index). It says: “Hill numbers of order q or effective number of species”

**Sources:**

- [Lou Jost, Entropy and diversity (2006).](https://doi.org/10.1111/j.2006.0030-1299.14714.x)

### Weighted contrasts give independent comparisons

**Remember:** Take the child difference and pass up the weighted mean.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology), 92B15. arXiv q-bio.QM. Level 3: graduate.

**Definition.** At the tips, use the observed traits with variances given by their branches. For child estimates x,y with variances a,b, record (x − y)/√(a+b) and pass their inverse-variance weighted mean upward. For the next comparison, add the intervening branch variance to ab/(a+b).

**Problem.** Suppose changes on separate branches are independent centered Gaussian variables with variance proportional to positive branch length. The standardized differences are independent centered Gaussian variables with variance one.

**How the definition helps.** Inverse-variance weights make the estimate passed upward uncorrelated with the difference just recorded (our own). An ordinary unweighted mean lacks that property when branch variances differ (our own). The difference cancels the common ancestral value, and joint Gaussian variables with zero covariance are independent (our own). Updating the variance then lets the same argument apply at each parent (our own).

**Wikipedia:** [Phylogenetic comparative methods](https://en.wikipedia.org/wiki/Phylogenetic_comparative_methods). It says: “transform the original tip data (mean values for a set of species) into values that are statistically independent and identically distributed.”

**Sources:**

- [J. Felsenstein, Phylogenies and the Comparative Method (1985)](https://doi.org/10.1086/284325)

### Spike edit costs vary continuously

**Remember:** Minimize unpaired spikes plus movement price times total paired displacement.

*True by definition.* MSC 92C20 (Neural biology). arXiv q-bio.NC, q-bio.QM. Level 3: graduate.

**Definition.** For two finite spike trains, pair any subsets of their spikes one-to-one in chronological order. The Victor–Purpura distance at q ≥ 0 minimizes the number of unpaired spikes plus q times total absolute timing displacement over all such pairings.

**Problem.** For trains with at most one spike at each integer time from 0 to T, the distance is Lipschitz in q ≥ 0. Its change is at most T(T + 1) ÷ 2 times the absolute change in q.

**How the definition helps.** Each pairing gives an affine cost with slope equal to total displacement (our own). With k pairs, each ordered time differs from its partner by at most T+1−k, since both occupy the same rank (our own). Total displacement is at most k(T+1−k) ≤ T(T+1)/2 for integer T ≥ 1, and vanishes for T = 0 (our own). A minimum of functions with this common Lipschitz bound retains it (our own).

**Paper or page:** [A Persistent Homology Pipeline for the Analysis of Neural Spike Train Data](https://arxiv.org/abs/2512.08637). It says: “Let 𝖲 and 𝖲′ be two spike trains over the time domain X = {0, 1, 2, …, T}. For any q,q′ ≥ 0, we have \|VP<sub>q</sub>(𝖲, 𝖲′) − VP<sub>q</sub>′(𝖲, 𝖲′)\| ≤ T(T+1)/2 \|q−q′\|”

**Sources:**

- [A Persistent Homology Pipeline for the Analysis of Neural Spike Train Data](https://arxiv.org/abs/2512.08637)

### Harmonic normalization removes sample-size bias

**Remember:** Divide the variable-site count by the harmonic sum for the sample.

*True by definition.* MSC 92D10 (Genetics and epigenetics), 92B15. arXiv q-bio.PE, q-bio.GN. Level 3: graduate.

**Definition.** Sample n ≥ 2 gene copies from a single randomly mating population of constant size. Count the sites where at least two copies differ. Watterson’s estimator divides that count by H = 1 + 1/2 + ⋯ + 1/(n − 1).

**Problem.** Use the standard neutral coalescent, a random ancestry tree where each pair of ancestral lines merges at the same rate. Assume no recombination and random mutations at a constant rate, each at a previously unchanged site. The estimator has expectation θ, the population-scaled mutation rate for the sequence.

**How the definition helps.** Dividing by H removes the sample-size factor in the expected raw count (our own). With k ancestral lines, the mean waiting time is 2/\[k(k − 1)\] in units where each pair merges at rate one (our own). Multiplying by k and summing gives expected tree length 2H (our own). Each mutation adds one variable site, at rate θ/2 per unit of branch length (our own).

**Wikipedia:** [Watterson estimator](https://en.wikipedia.org/wiki/Watterson_estimator). It says: “When its assumptions are met, the estimator is unbiased”

**Sources:**

- [G. A. Watterson, On the number of segregating sites in genetical models without recombination (1975)](https://doi.org/10.1016/0040-5809(75)90020-9)

### Evolutionary stability rejects neutral ties

**Remember:** When payoffs against residents tie, compare both strategies against the mutant.

*Rules out counterexamples.* MSC 92D15 (Problems related to evolution). arXiv q-bio.PE, math.DS. Level 3: graduate.

**Definition.** In a symmetric game, both players use the same payoff rule. A resident strategy is evolutionarily stable if it beats each alternative in a population containing a sufficiently small positive share of that alternative. This requires at least a tie against residents and, in case of a tie, a strict advantage against the alternative.

**Problem.** In a finite symmetric two-player game, every evolutionarily stable strategy is locally asymptotically stable under replicator dynamics. Each strategy’s share grows at a per capita rate equal to its payoff minus the population mean. Populations starting sufficiently close stay close and converge to the resident.

**How the definition helps.** Evolutionary stability gives the resident a payoff advantage over every distinct sufficiently close population mix (our own). Under replicator dynamics, the derivative of relative entropy from resident to population equals minus that advantage (our own). This strict local Lyapunov function proves attraction and stability (our own). If only mutual B earns one, all-A is Nash but a rare B grows (our own).

**Wikipedia:** [Evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy). It says: “the population of players who continue to play strategy S has an advantage when playing against T.”

**Sources:**

- [John Maynard Smith and George R. Price, The Logic of Animal Conflict (1973).](https://doi.org/10.1038/246015a0)
- [Peter D. Taylor and Leo B. Jonker, Evolutionary stable strategies and game dynamics (1978).](https://doi.org/10.1016/0025-5564(78)90077-9)

### Weak reversibility excludes one-way sinks

**Remember:** Every reaction needs a return path, not necessarily a reverse edge.

*Rules out counterexamples.* MSC 92E20 (Classical flows, reactions, etc. in chemistry), 92C42. arXiv q-bio.MN. Level 3: graduate.

**Definition.** Draw each reaction as an arrow between its reactant and product complexes. A network is weakly reversible if every arrow lies on a directed cycle. Its deficiency equals the number of complexes minus the number of undirected components minus the dimension spanned by reaction change vectors.

**Problem.** Suppose each reaction rate equals a positive constant times the product of reactant concentrations raised to their reaction coefficients. Every weakly reversible network of deficiency zero then has a positive equilibrium where incoming and outgoing rates balance at each complex.

**How the definition helps.** A return path excludes complexes that can only lose material in a one-way reaction (our own). For example, A → B has deficiency zero but no equilibrium with A positive (our own). The deficiency-zero theorem proves existence for every choice of positive rate constants (our own).

**Paper or page:** [Advancing Mathematical Epidemiology and Chemical Reaction Network Theory via Synergies Between Them](https://arxiv.org/abs/2411.00488). It says: “𝒩 admits a “complex-balanced” equilibrium, and all its equilibria are complex-balanced.”

**Sources:**

- [Advancing Mathematical Epidemiology and Chemical Reaction Network Theory via Synergies Between Them](https://arxiv.org/abs/2411.00488)

### Any orchard cherry reduction works

**Remember:** In an orchard network, any available cherry reduction keeps the process on track.

*Makes the theorem clean to state or prove.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 4: research.

**Definition.** In a rooted binary network, delete a cherry leaf sharing its parent with another leaf, or reduce a reticulated cherry. The latter cuts the edge from one leaf’s branching parent to the other’s two-parent vertex. After suppressing unary vertices, including a unary root, a network is orchard if some such sequence reduces it to one leaf.

**Problem.** Every maximal sequence of cherry reductions in an orchard network ends at one leaf.

**How the definition helps.** The definition lets us compare one successful sequence with every sequence that runs out of moves (our own). The hard step proves that any legal first reduction leaves another orchard network (our own). Each move shrinks the network, and every nontrivial orchard network has another move (our own).

**Paper or page:** [Defining phylogenetic networks using ancestral profiles](https://arxiv.org/abs/2012.00109). It says: “Let 𝒩 be an orchard network, and let 𝒩 = 𝒩₀, 𝒩₁, …, 𝒩ₗ be a maximal cherry-reduction sequence. Then this sequence is complete.”

**Sources:**

- [Defining phylogenetic networks using ancestral profiles](https://arxiv.org/abs/2012.00109)

### Child labels identify tree-child networks

**Remember:** A child with one parent appears in exactly one child set.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 4: research.

**Definition.** In a network admitting the paper’s encoding, assign distinct labels to vertices and record one child-label set per parent. The network is tree-child if every parent has a child with exactly one parent.

**Problem.** For networks admitting this encoding, the network is tree-child exactly when every set contains a label occurring only once in the cover.

**How the definition helps.** Every occurrence of a label in a child set counts one parent (our own). Checking a child’s parent count becomes counting label occurrences (our own). The work lies in the earlier bijection between these covers and networks that admit the labeling (our own).

**Paper or page:** [Phylogenetic network classes through the lens of expanding covers](https://arxiv.org/abs/2306.06519v2). It says: “Tree-child networks are in bijection with expanding covers for which each set contains an integer that appears exactly once in the cover.”

**Sources:**

- [Andrew Francis, Daniele Marchei and Mike Steel, Phylogenetic network classes through the lens of expanding covers (2024).](https://arxiv.org/abs/2306.06519v2)

### Leaf correlations contract forest space

**Remember:** Shrink every off-diagonal correlation to zero and the leaves become isolated.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE, q-bio.QM. Level 4: research.

**Definition.** Use forests with distinct labels on distinct vertices and labels on every vertex of degree at most two. Give edges positive lengths, and set the matrix entry for connected labels to exp(−d), where d is their path distance. Wald space consists of these matrices, with zero entries for disconnected labels.

**Problem.** Wald space can shrink continuously to the matrix for isolated labels.

**How the definition helps.** For 0 &lt; t &lt; 1, move every label onto a new pendant edge of length −ln(t)/2 (our own). Prune unlabeled dead ends and suppress unlabeled degree-two vertices, preserving distances between labels (our own). Every connected pair of distinct labels gains distance −ln(t), multiplying its correlation by t (our own). These matrices interpolate continuously between the original at t = 1 and isolated labels at t = 0 (our own).

**Paper or page:** [Foundations of the Wald Space for Phylogenetic Trees](https://arxiv.org/abs/2209.05332). It says: “Conveyed by the homeomorphism φ, 𝒲 is star shaped as a subset ℝᴺˣᴺ with respect to F∞ and hence contractible.”

**Sources:**

- [Foundations of the Wald Space for Phylogenetic Trees](https://arxiv.org/abs/2209.05332)

### Stack-free networks have unique profiles

**Remember:** Without stacks, ancestral path counts pin down the network.

*Rules out counterexamples.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology), 92D15. arXiv q-bio.PE. Level 4: research.

**Definition.** An ancestral profile records, for each leaf label, the path counts from all internal vertices in a common vertex order. An orchard network is one that repeated cherry reductions can shrink to a single leaf. A network is stack-free if no edge connects two vertices that both have multiple parents.

**Problem.** Among rooted phylogenetic networks on the same leaf labels, the ancestral profile determines a stack-free orchard network up to relabeling internal vertices.

**How the definition helps.** The stack-free condition rules out known orchard networks that share the same path counts despite having different shapes. The reconstruction proof must show how to identify a legal reduction from the profile and reverse that reduction uniquely (our own).

**Paper or page:** [Defining phylogenetic networks using ancestral profiles](https://arxiv.org/abs/2012.00109). It says: “Then, up to isomorphism, 𝒩 is the unique phylogenetic network on X realising Σ𝒩.”

**Sources:**

- [A. Bai, P. L. Erdős, C. Semple and M. Steel, Defining phylogenetic networks using ancestral profiles (2021)](https://doi.org/10.1016/j.mbs.2021.108537)

### Finite phase shifts test synchrony

**Remember:** Compose the two pulse responses before testing whether the phase gap shrinks.

*Makes the theorem clean to state or prove.* MSC 92B25 (Biological rhythms and synchronization), 92C20. arXiv q-bio.NC. Level 4: research.

**Definition.** Two identical oscillators advance uniformly in phase and pulse each other when they reach one and reset to zero. At fixed pulse strength the response F maps pre-pulse phase x to post-pulse phase x + g(x). Assume F increases, fixes both endpoints, and has derivatives on \[0,1\], using one-sided derivatives at the endpoints.

**Problem.** For two such oscillators that advance uniformly between pulses, simultaneous firing attracts nearby phases if \|F′(0)F′(1)\| &lt; 1. It repels nearby phases if this product has absolute value above one.

**How the definition helps.** The exact pulse map turns a full firing cycle into two evaluations of one function (our own). At each firing the next gap is 1 − F(x), with x the other oscillator’s phase just before the pulse (our own). Applying this rule twice and differentiating at zero gives F′(0)F′(1) (our own). A first-order approximation in pulse strength can give the wrong stability prediction.

**Paper or page:** [Infinitesimal phase response functions can be misleading](https://arxiv.org/abs/2302.08392). It says: “Synchrony is g-attracting if \|(1 + ∂g/∂φ(0, ε))(1 + ∂g/∂φ(1, ε))\| &lt; 1,”

**Sources:**

- [Infinitesimal phase response functions can be misleading](https://arxiv.org/abs/2302.08392)

### Subsamples inherit the same genealogy

**Remember:** Trace the same pedigree and then drop the labels you did not sample.

*True by definition.* MSC 92D10 (Genetics and epigenetics), 60J10. arXiv q-bio.PE. Level 4: research.

**Definition.** Represent ancestry at each past generation by a partition of the sampled labels. Each block records samples with the same ancestor, with that ancestor's type attached. Build the partition by tracing each label through the same realized population pedigree, not by simulating a second pedigree.

**Problem.** Suppose each type has fixed population size and relabeling parents within types leaves the joint offspring law unchanged. Keeping the first m of n sampled labels gives the same ancestry law as sampling those m labels directly.

**How the definition helps.** A shared family tree turns comparison of two random histories into deletion of labels (our own). Two retained labels have the same ancestor regardless of which other labels we trace (our own). The probabilistic work shows that this restricted history has the separately sampled history’s law under the relabeling assumption (our own).

**Paper or page:** [On the genealogy of multi-type Cannings models and their limiting exchangeable coalescents](https://arxiv.org/abs/2504.10744). It says: “has the same distribution as the multi-type ancestral process”

**Sources:**

- [On the genealogy of multi-type Cannings models and their limiting exchangeable coalescents](https://arxiv.org/abs/2504.10744)
