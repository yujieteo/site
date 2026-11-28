### Clock trees give ultrametric distances

**Remember:** Equal tip heights make the two largest triple distances tie.

*Rules out counterexamples.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** A clock tree is a rooted tree with the same total length from the root to every tip, as under a strict evolutionary clock with tips sampled at one time. So the distance between two tips is twice the height of their most recent common ancestor above the tips (our own).

**Problem.** For any three tips of a clock tree with positive edge lengths, the largest two pair distances are equal. Its tip distances are therefore an ultrametric.

**How the definition helps.** Among three tips, two pairs share the oldest common ancestor, so their distances tie for largest (our own). This tie is the ultrametric inequality: each distance is at most the larger of the other two (our own). A three-tip star with edge lengths 1, 2 and 3 gives distances 3, 4 and 5 instead (our own).

**Paper or page:** [Hit and Run Sampling from Tropically Convex Sets](https://arxiv.org/abs/2209.15045v1). It says: “Then, u is an ultrametric if and only if T is an equidistant tree.”

**Sources:**

- [Peter Buneman, A note on the metric properties of trees (1974).](https://doi.org/10.1016/0095-8956(74)90047-1)

### Fitch sets count minimum changes

**Remember:** Keep every cheapest state, then intersect for free or unite for one.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE, q-bio.QM. Level 2: later undergraduate.

**Definition.** On a rooted binary tree with known leaf states, the Fitch set of a vertex holds every state it can take in an assignment with the fewest changes within its subtree. So a parent state in a child’s set adds nothing for that child, and any other parent state adds exactly one change, on the joining edge (our own).

**Problem.** Starting at the leaves, use the intersection of the two child sets whenever it contains a state. Otherwise use their union and count one change. The total count is the smallest possible number of changes on the tree.

**How the definition helps.** The parent’s cheapest states are those in both child sets, at no extra charge, if any exist; otherwise every state in either set costs exactly one change (our own). This is the intersection-or-union rule, applied from the leaves to the root (our own). Keeping a single minimizing state instead of the whole set can overcount (our own).

**Wikipedia:** [Ancestral reconstruction](https://en.wikipedia.org/wiki/Ancestral_reconstruction). It says: “if the intersection is the empty set, then it is the set union.”

**Sources:**

- [W. M. Fitch, Toward Defining the Course of Evolution: Minimum Change for a Specific Tree Topology (1971)](https://doi.org/10.2307/2412116)

### Split counts give a tree metric

**Remember:** Count the edge splits that only one tree has.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** For two unrooted evolutionary trees on the same labeled tips, list each tree’s splits, the two-part partitions of the tips made by cutting one edge. The Robinson–Foulds distance is the number of splits that appear in exactly one list.

**Problem.** This distance is a metric on unweighted trees with the same labeled tips and no degree-two internal nodes. Identify trees when an isomorphism preserves their tip labels.

**How the definition helps.** Each tree becomes a 0–1 list over all possible splits, and the distance counts unequal entries, so the triangle inequality holds as for Hamming distance (our own). Distance zero identifies the trees by the theorem that a tree’s splits determine it (our own).

**Wikipedia:** [Robinson–Foulds metric](https://en.wikipedia.org/wiki/Robinson%E2%80%93Foulds_metric). It says: “the number of splits that differ between a pair of trees”

**Sources:**

- [D. F. Robinson and L. R. Foulds, Comparison of phylogenetic trees (1981).](https://doi.org/10.1016/0025-5564(81)90043-2)

### Tree splits explain four-point ties

**Remember:** A tip distance adds up every edge that separates the tips.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** The distance between two tips of an evolutionary tree is the total length of the edges on their path, that is, of the edges whose removal separates the two tips.

**Problem.** For four distinct tips, sum the two distances in each of the three possible pairings. The largest sum occurs at least twice in any tree with nonnegative edge lengths.

**How the definition helps.** Each pairing sum counts every edge once for each of its pairs that the edge separates (our own). An edge cutting off one tip adds its length to all three sums, and all edges splitting two tips from two induce the same split, since tree splits are compatible (our own). Those edges add twice their length to the two crossing pairings and nothing to the third, so the crossing sums tie for largest (our own).

**Paper or page:** [Tropical Grassmannian and Tropical Linear Varieties from phylogenetic trees](https://arxiv.org/abs/1312.0752v2). It says: “the maximum of three number is achieved at least twice D({i,j}) + D({k,l}), D({i,k}) + D({j,l}) and D({i,l}) + D({j,k}).”

**Sources:**

- [Peter Buneman, A note on the metric properties of trees (1974).](https://doi.org/10.1016/0095-8956(74)90047-1)

### Single-neuron updates prevent Hopfield cycles

**Remember:** Move one neuron at a time, and every flip lowers energy.

*Rules out counterexamples.* MSC 92B20 (Neural networks for/in biological studies, artificial life and related topics). arXiv q-bio.NC. Level 2: later undergraduate.

**Definition.** In a finite Hopfield network with states ±1, symmetric weights and no self-connections, update one neuron at a time to the sign of its weighted input, keeping its state at zero input, and visit every neuron infinitely often. Because weights are symmetric and only one neuron moves, each flip lowers the energy, minus the sum over pairs of weight times the product of states (our own).

**Problem.** Every such update run eventually reaches a fixed state.

**How the definition helps.** A flip changes the energy by minus the neuron’s input times its state change, which is negative, so only finitely many flips occur (our own). After the last flip, repeated visits show that every neuron agrees with its input, so the state is fixed (our own). Under simultaneous updates, two positively coupled neurons in opposite states swap forever (our own).

**Wikipedia:** [Hopfield network](https://en.wikipedia.org/wiki/Hopfield_network). It says: “The constraint that weights are symmetric guarantees that the energy function decreases monotonically while following the activation rules.”

**Sources:**

- [J. J. Hopfield, Neural networks and physical systems with emergent collective computational abilities (1982)](https://doi.org/10.1073/pnas.79.8.2554)
- [J. Bruck, On the convergence properties of the Hopfield model (1990)](https://doi.org/10.1109/5.58341)

### Crossover distances add across intervals

**Remember:** Count every crossover, not just whether the markers switched.

*True by definition.* MSC 92D10 (Genetics and epigenetics). arXiv q-bio.GN, q-bio.PE. Level 2: later undergraduate.

**Definition.** Genetic distance in morgans is the expected number of crossovers, exchanges of segments between paired chromosomes, between two markers on a transmitted chromosome. It counts crossovers, not merely whether the two markers come from different parental chromosomes, which is the recombination fraction.

**Problem.** Genetic distances add across adjacent intervals. If the crossover count has a Poisson distribution with mean d, the recombination fraction equals (1 − exp(−2d))/2.

**How the definition helps.** Crossover counts on adjacent intervals add on each chromosome, so their expectations add without any independence assumption (our own). The markers switch parental chromosomes only for an odd count, and for a Poisson count N with mean d, E\[(−1)ᴺ\] = exp(−2d) equals one minus twice the odd-count probability (our own).

**Wikipedia:** [Centimorgan](https://en.wikipedia.org/wiki/Centimorgan). It says: “the distance in centimorgans does not correspond exactly to the probability of genetic recombination.”

**Sources:** none listed. No primary source with a working link was found.

### Linkage excess decays geometrically

**Remember:** Subtract independent pairing first, then recombination scales only the excess.

*True by definition.* MSC 92D10 (Genetics and epigenetics). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Linkage disequilibrium D is the frequency of chromosomes carrying both chosen variants at two positions, minus the product of the two variants’ separate frequencies. It measures the excess over independent pairing.

**Problem.** In a deterministic random-mating model with no selection, mutation or migration, D becomes (1 − c)D each generation. Here c is the fixed fraction of reproductive cells in which recombination separates the two positions.

**How the definition helps.** Each generation, recombinant chromosomes carry both variants with the independent frequency pq, and the others keep the joint frequency J (our own). So J′ = (1 − c)J + cpq while p and q stay fixed, and subtracting pq gives D′ = (1 − c)D (our own).

**Wikipedia:** [Linkage disequilibrium](https://en.wikipedia.org/wiki/Linkage_disequilibrium). It says: “recombination is expected to decrease the value of D in each generation by a factor (1 - c)”

**Sources:** none listed. No primary source with a working link was found.

### Relative fitness isolates selection

**Remember:** Divide each ancestor’s descendant count by the mean descendant count.

*True by definition.* MSC 92D15 (Problems related to evolution). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** Assign each descendant to one ancestor, and assume at least one descendant exists. An ancestor’s relative fitness is its descendant count divided by the mean count per ancestor, so relative fitnesses average to one (our own).

**Problem.** The change in mean trait equals the covariance of relative fitness with ancestral trait, plus the average of relative fitness times the change from each ancestor’s trait to its descendants’ mean trait. Both averages weight ancestors equally, and childless ancestors add zero.

**How the definition helps.** Because relative fitness has mean one, the fitness-weighted ancestral mean differs from the plain mean by exactly the covariance (our own). Adding and subtracting this weighted mean splits the change into that covariance and the change within families (our own). Predicting either term still needs a model of reproduction and transmission (our own).

**Wikipedia:** [Price equation](https://en.wikipedia.org/wiki/Price_equation). It says: “The equation uses a covariance between a characteristic and fitness, to give a mathematical description of evolution and natural selection.”

**Sources:**

- [George R. Price, Selection and Covariance (1970).](https://doi.org/10.1038/227520a0)

### Log populations preserve volume

**Remember:** Use log sizes so each growth equation ignores its own coordinate.

*True by definition.* MSC 92D25 (Population dynamics (general)). arXiv math.DS, q-bio.PE. Level 2: later undergraduate.

**Definition.** Use the logarithm of each population size as its coordinate, where each species’ per capita growth rate is a constant plus multiples of the other species’ sizes, with no term in its own size. Then the velocity of each log coordinate is that growth rate, which does not depend on the coordinate itself (our own).

**Problem.** The flow preserves ordinary volume in log coordinates wherever the solutions exist and stay positive.

**How the definition helps.** Each velocity component ignores its own coordinate, so the divergence is zero and Liouville’s theorem gives preservation of volume in log coordinates (our own). In population coordinates, the same volume weights each region by the reciprocal product of the population sizes (our own).

**Paper or page:** [On a quadratic Poisson algebra and integrable Lotka-Volterra systems with solutions in terms of Lambert's W function](https://arxiv.org/abs/2408.14720v2). It says: “with aᵢᵢ = 0 are measure preserving with density M = (∏ᵢ₌₁ⁿ xᵢ)⁻¹.”

**Sources:**

- [Peter H. van der Kamp, D. I. McLaren and G. R. W. Quispel, On a quadratic Poisson algebra and integrable Lotka-Volterra systems with solutions in terms of Lambert's W function (2024).](https://arxiv.org/abs/2408.14720v2)

### Reproductive value gives exact growth

**Remember:** Weight each age by its future offspring, and growth becomes exact.

*True by definition.* MSC 92D25 (Population dynamics (general)). arXiv q-bio.PE, math.DS. Level 2: later undergraduate.

**Definition.** The reproductive values of an age projection matrix A are the entries of a positive left eigenvector w for its dominant eigenvalue λ, so wA = λw (our own). The weighted population total adds each age count times its reproductive value.

**Problem.** For a primitive age projection matrix, the weighted total grows by its dominant eigenvalue every step, from any starting age distribution. Primitive means that some power of the matrix has strictly positive entries.

**How the definition helps.** Since wA = λw, one step multiplies the weighted total by exactly λ, from any starting age counts (our own). The Perron–Frobenius theorem supplies the positive w for a primitive matrix, and the age model ties it to discounted future offspring (our own). The plain head count’s growth factor generally approaches λ only in the limit (our own).

**Wikipedia:** [Reproductive value (population genetics)](https://en.wikipedia.org/wiki/Reproductive_value_%28population_genetics%29). It says: “he proposed that future offspring be discounted at the rate of growth of the population”

**Sources:**

- [Ronald A. Fisher, The Genetical Theory of Natural Selection (1930).](https://doi.org/10.5962/bhl.title.27468)
- [P. H. Leslie, On the use of matrices in certain population mathematics (1945).](https://doi.org/10.1093/biomet/33.3.183)

### Effective reproduction locates infection peaks

**Remember:** Infections grow exactly while each case causes more than one.

*True by definition.* MSC 92D30 (Epidemiology). arXiv q-bio.PE. Level 2: later undergraduate.

**Definition.** In the closed SIR model S′ = −βSI, I′ = βSI − γI with constants β, γ &gt; 0, the effective reproduction number R = βS/γ compares the per-infected transmission rate with the recovery rate. So I′ = γI(R − 1), and infections grow exactly while R &gt; 1 (our own).

**Problem.** If I starts positive and R starts above one, I has a unique peak when R reaches one.

**How the definition helps.** S only decreases, so R falls through one at most once, and I′ changes sign there from positive to negative (our own). While R ≥ 1, I stays above its positive start, so S decreases at least at the fixed rate γI(0) and reaches γ/β in finite time (our own).

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

**Definition.** Starting at the tips, with each observed trait’s variance given by its branch, standardize each sister difference and pass the pair’s inverse-variance weighted mean upward. For child estimates x, y with variances a, b, record (x − y)/√(a + b), pass up (bx + ay)/(a + b), and give it variance ab/(a + b) plus the variance of the branch above. These weights make each passed-up mean uncorrelated with the difference just recorded (our own).

**Problem.** Suppose changes on separate branches are independent centered Gaussian variables with variance proportional to positive branch length. The standardized differences are independent centered Gaussian variables with variance one.

**How the definition helps.** Each difference cancels the common ancestral value and has zero covariance with the mean passed up, and jointly Gaussian variables with zero covariance are independent (our own). An unweighted mean lacks this property when the variances differ (our own). The updated variance lets the same argument repeat at each parent (our own).

**Wikipedia:** [Phylogenetic comparative methods](https://en.wikipedia.org/wiki/Phylogenetic_comparative_methods). It says: “transform the original tip data (mean values for a set of species) into values that are statistically independent and identically distributed.”

**Sources:**

- [J. Felsenstein, Phylogenies and the Comparative Method (1985)](https://doi.org/10.1086/284325)

### Spike edit costs vary continuously

**Remember:** Minimize unpaired spikes plus movement price times total paired displacement.

*True by definition.* MSC 92C20 (Neural biology). arXiv q-bio.NC, q-bio.QM. Level 3: graduate.

**Definition.** For two finite spike trains, pair any subsets of their spikes one-to-one in chronological order. The Victor–Purpura distance at q ≥ 0 minimizes the number of unpaired spikes plus q times total absolute timing displacement over all such pairings.

**Problem.** For trains with at most one spike at each integer time from 0 to T, the distance is Lipschitz in q ≥ 0. Its change is at most T(T + 1) ÷ 2 times the absolute change in q.

**How the definition helps.** Each pairing’s cost is affine in q with slope equal to its total displacement, and a minimum of such functions is Lipschitz with the largest slope (our own). With k pairs matched in order, the two times in each pair differ by at most T + 1 − k (our own). So the total displacement is at most k(T + 1 − k) ≤ T(T + 1)/2 (our own).

**Paper or page:** [A Persistent Homology Pipeline for the Analysis of Neural Spike Train Data](https://arxiv.org/abs/2512.08637). It says: “Let 𝖲 and 𝖲′ be two spike trains over the time domain X = {0, 1, 2, …, T}. For any q,q′ ≥ 0, we have \|VP<sub>q</sub>(𝖲, 𝖲′) − VP<sub>q</sub>′(𝖲, 𝖲′)\| ≤ T(T+1)/2 \|q−q′\|”

**Sources:**

- [A Persistent Homology Pipeline for the Analysis of Neural Spike Train Data](https://arxiv.org/abs/2512.08637)

### Harmonic normalization removes sample-size bias

**Remember:** Divide the variable-site count by the harmonic sum for the sample.

*True by definition.* MSC 92D10 (Genetics and epigenetics), 92B15. arXiv q-bio.PE, q-bio.GN. Level 3: graduate.

**Definition.** Sample n ≥ 2 gene copies from one randomly mating population of constant size, and count the sites where at least two copies differ. Watterson’s estimator divides this count by H = 1 + 1/2 + ⋯ + 1/(n − 1), which adds 1/(k − 1) for each stage of the ancestry with k lines (our own).

**Problem.** Assume the standard neutral coalescent without recombination, with mutations at a constant rate, each at a new site. Then the estimator has expectation θ, the population-scaled mutation rate for the sequence.

**How the definition helps.** The expected count is θ/2 times the expected total tree length, measured in units where each pair of lines merges at rate one (our own). A stage with k lines lasts 2/\[k(k − 1)\] on average and so adds 2/(k − 1) to that length (our own). Summing gives θH, so dividing by H leaves θ (our own).

**Wikipedia:** [Watterson estimator](https://en.wikipedia.org/wiki/Watterson_estimator). It says: “When its assumptions are met, the estimator is unbiased”

**Sources:**

- [G. A. Watterson, On the number of segregating sites in genetical models without recombination (1975)](https://doi.org/10.1016/0040-5809(75)90020-9)

### Evolutionary stability rejects neutral ties

**Remember:** When payoffs against residents tie, compare both strategies against the mutant.

*Rules out counterexamples.* MSC 92D15 (Problems related to evolution). arXiv q-bio.PE, math.DS. Level 3: graduate.

**Definition.** A strategy of a symmetric game is evolutionarily stable if it earns more than each alternative in a population with a small enough positive share of that alternative. Equivalently, it does at least as well against itself as any alternative does, and in a tie it does strictly better against the alternative.

**Problem.** Under replicator dynamics, each strategy’s share grows at its payoff minus the mean payoff. Every evolutionarily stable strategy of a finite symmetric two-player game is then locally asymptotically stable.

**How the definition helps.** Evolutionary stability gives the resident a strict payoff advantage over every nearby population mix (our own). Under replicator dynamics, relative entropy from the resident to the population then strictly decreases, a local Lyapunov function that proves attraction and stability (our own). If only mutual B earns one, all-A is a Nash equilibrium but a rare B grows (our own).

**Wikipedia:** [Evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy). It says: “the population of players who continue to play strategy S has an advantage when playing against T.”

**Sources:**

- [John Maynard Smith and George R. Price, The Logic of Animal Conflict (1973).](https://doi.org/10.1038/246015a0)
- [Peter D. Taylor and Leo B. Jonker, Evolutionary stable strategies and game dynamics (1978).](https://doi.org/10.1016/0025-5564(78)90077-9)

### Weak reversibility excludes one-way sinks

**Remember:** Every reaction needs a return path, not necessarily a reverse edge.

*Rules out counterexamples.* MSC 92E20 (Classical flows, reactions, etc. in chemistry), 92C42. arXiv q-bio.MN. Level 3: graduate.

**Definition.** A reaction network is weakly reversible if every reaction can be undone by a chain of reactions, that is, every arrow between complexes lies on a directed cycle. Its deficiency is the number of complexes, minus the number of connected components of the reaction graph, minus the dimension spanned by the reaction change vectors.

**Problem.** Suppose each reaction rate equals a positive constant times the product of reactant concentrations raised to their reaction coefficients. Every weakly reversible network of deficiency zero then has a positive equilibrium where incoming and outgoing rates balance at each complex.

**How the definition helps.** A return path excludes complexes that can only lose material through a one-way reaction (our own). For example, A → B has deficiency zero but no equilibrium with A positive (our own). The deficiency-zero theorem proves existence for every choice of positive rate constants (our own).

**Paper or page:** [Advancing Mathematical Epidemiology and Chemical Reaction Network Theory via Synergies Between Them](https://arxiv.org/abs/2411.00488). It says: “𝒩 admits a “complex-balanced” equilibrium, and all its equilibria are complex-balanced.”

**Sources:**

- [Advancing Mathematical Epidemiology and Chemical Reaction Network Theory via Synergies Between Them](https://arxiv.org/abs/2411.00488)

### Any orchard cherry reduction works

**Remember:** Pick cherries until one leaf remains.

*Makes the theorem clean to state or prove.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 4: research.

**Definition.** A rooted binary network is orchard if some sequence of cherry reductions, suppressing unary vertices including a unary root after each step, shrinks it to one leaf. A reduction either deletes one of two leaves sharing a parent, or cuts the edge from one leaf’s branching parent to the other leaf’s two-parent vertex.

**Problem.** Every maximal sequence of cherry reductions in an orchard network ends at one leaf.

**How the definition helps.** The key step proves that any legal reduction of an orchard network leaves an orchard network (our own). Each move shrinks the network, and every nontrivial orchard network has another move, so no maximal sequence gets stuck (our own).

**Paper or page:** [Defining phylogenetic networks using ancestral profiles](https://arxiv.org/abs/2012.00109). It says: “Let 𝒩 be an orchard network, and let 𝒩 = 𝒩₀, 𝒩₁, …, 𝒩ₗ be a maximal cherry-reduction sequence. Then this sequence is complete.”

**Sources:**

- [Defining phylogenetic networks using ancestral profiles](https://arxiv.org/abs/2012.00109)

### Child labels identify tree-child networks

**Remember:** A child with one parent appears in exactly one child set.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE. Level 4: research.

**Definition.** A network is tree-child if every vertex with children has a child with exactly one parent. In the paper’s encoding, each such vertex becomes the set of its children’s labels, so a label occurs in the cover once for each parent of its vertex (our own).

**Problem.** For networks admitting this encoding, the network is tree-child exactly when every set contains a label occurring only once in the cover.

**How the definition helps.** A child with one parent is a label that occurs once, so tree-child asks for such a label in every set (our own). The work lies in the paper’s bijection between these covers and the networks that admit the labeling (our own).

**Paper or page:** [Phylogenetic network classes through the lens of expanding covers](https://arxiv.org/abs/2306.06519v2). It says: “Tree-child networks are in bijection with expanding covers for which each set contains an integer that appears exactly once in the cover.”

**Sources:**

- [Andrew Francis, Daniele Marchei and Mike Steel, Phylogenetic network classes through the lens of expanding covers (2024).](https://arxiv.org/abs/2306.06519v2)

### Leaf correlations contract forest space

**Remember:** Stretch every leaf edge, and all correlations shrink to zero.

*True by definition.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology). arXiv q-bio.PE, q-bio.QM. Level 4: research.

**Definition.** Wald space records each labeled forest with positive edge lengths by its correlation matrix: connected labels get exp(−d), where d is their path distance, and disconnected labels get zero. The forests have distinct labels on distinct vertices, and every vertex of degree at most two carries a label.

**Problem.** Wald space can shrink continuously to the matrix for isolated labels.

**How the definition helps.** Because correlation is exp(−distance), moving each label onto a new pendant edge of length −ln(t)/2 multiplies every off-diagonal correlation by t, for 0 &lt; t &lt; 1 (our own). Pruning unlabeled dead ends and suppressing unlabeled degree-two vertices keeps label distances and returns a forest of the allowed kind (our own). Letting t run from 1 to 0 contracts the space continuously to the matrix of isolated labels (our own).

**Paper or page:** [Foundations of the Wald Space for Phylogenetic Trees](https://arxiv.org/abs/2209.05332). It says: “Conveyed by the homeomorphism φ, 𝒲 is star shaped as a subset ℝᴺˣᴺ with respect to F∞ and hence contractible.”

**Sources:**

- [Foundations of the Wald Space for Phylogenetic Trees](https://arxiv.org/abs/2209.05332)

### Stack-free networks have unique profiles

**Remember:** Without stacks, ancestral path counts pin down the network.

*Rules out counterexamples.* MSC 92B10 (Taxonomy, cladistics, statistics in mathematical biology), 92D15. arXiv q-bio.PE. Level 4: research.

**Definition.** A network is stack-free if no edge joins two vertices that both have several parents. Its ancestral profile lists, for each leaf label, the numbers of paths to that leaf from all internal vertices, in a common vertex order.

**Problem.** Among rooted phylogenetic networks on the same leaf labels, the ancestral profile determines a stack-free orchard network, one that cherry reductions shrink to one leaf, up to relabeling internal vertices.

**How the definition helps.** Stacked reticulations can give different orchard networks the same path counts, and stack-freeness removes these counterexamples (our own). The proof reads a legal cherry reduction from the profile and shows that it can be reversed in only one way (our own).

**Paper or page:** [Defining phylogenetic networks using ancestral profiles](https://arxiv.org/abs/2012.00109). It says: “Then, up to isomorphism, 𝒩 is the unique phylogenetic network on X realising Σ𝒩.”

**Sources:**

- [A. Bai, P. L. Erdős, C. Semple and M. Steel, Defining phylogenetic networks using ancestral profiles (2021)](https://doi.org/10.1016/j.mbs.2021.108537)

### Finite phase shifts test synchrony

**Remember:** Compose the two pulse responses before testing whether the phase gap shrinks.

*Makes the theorem clean to state or prove.* MSC 92B25 (Biological rhythms and synchronization), 92C20. arXiv q-bio.NC. Level 4: research.

**Definition.** Two identical oscillators advance uniformly in phase; when one reaches phase one, it fires, resets to zero and moves the other’s phase from x to F(x) = x + g(x). Assume F increases, fixes 0 and 1, and is differentiable on \[0, 1\], one-sided at the ends. So each firing sends the phase gap x to 1 − F(x) (our own).

**Problem.** For two such oscillators that advance uniformly between pulses, simultaneous firing attracts nearby phases if \|F′(0)F′(1)\| &lt; 1. It repels nearby phases if this product has absolute value above one.

**How the definition helps.** Two firings give the map x ↦ 1 − F(1 − F(x)), whose derivative at zero is F′(1)F′(0) by the chain rule (our own). A derivative of absolute value below one attracts nearby gaps, and above one repels them (our own). A first-order approximation in pulse strength can give the wrong stability prediction.

**Paper or page:** [Infinitesimal phase response functions can be misleading](https://arxiv.org/abs/2302.08392). It says: “Synchrony is g-attracting if \|(1 + ∂g/∂φ(0, ε))(1 + ∂g/∂φ(1, ε))\| &lt; 1,”

**Sources:**

- [Infinitesimal phase response functions can be misleading](https://arxiv.org/abs/2302.08392)

### Subsamples inherit the same genealogy

**Remember:** Trace one pedigree; dropping labels just deletes them.

*True by definition.* MSC 92D10 (Genetics and epigenetics), 60J10. arXiv q-bio.PE. Level 4: research.

**Definition.** Trace each sampled label back through one realized population pedigree, recording at each past generation which samples share an ancestor and that ancestor’s type. Since all labels follow the same pedigree, not separately simulated ones, dropping a label just deletes it from its block (our own).

**Problem.** Suppose each type has fixed population size and relabeling parents within types leaves the joint offspring law unchanged. Keeping the first m of n sampled labels gives the same ancestry law as sampling those m labels directly.

**How the definition helps.** Because the labels share one pedigree, the history of a subsample is the full history with the other labels deleted (our own). The probabilistic work shows that this restricted history has the law of a directly sampled one, using the relabeling assumption (our own).

**Paper or page:** [On the genealogy of multi-type Cannings models and their limiting exchangeable coalescents](https://arxiv.org/abs/2504.10744). It says: “has the same distribution as the multi-type ancestral process”

**Sources:**

- [On the genealogy of multi-type Cannings models and their limiting exchangeable coalescents](https://arxiv.org/abs/2504.10744)
