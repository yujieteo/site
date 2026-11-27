### Union by size bounds depth

**Remember:** Each time depth increases, the set at least doubles.

*Rules out counterexamples.* MSC 68P05 (Data structures). arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Represent each disjoint set by a rooted tree, initially a single vertex. To unite two sets, attach the root of the smaller tree below the root of the larger tree. Either root may become the parent when the sizes agree.

**Problem.** Starting with n singletons, union by size keeps every depth at most ⌊log₂ n⌋. Depth counts the edges from a vertex to its root.

**How the definition helps.** A node gains depth only when its entire tree joins one at least as large, our own explanation. After d such moves its set has at least 2ᵈ elements. The work moves to keeping the correct size at each root, which takes one addition per merger. Attaching the larger tree under a singleton at each merger can instead make a chain, our own example.

**Wikipedia:** [Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure). It says: “Both strategies ensure that trees do not become too deep.”

**Sources:** none listed. No primary source with a working link was found.

### Empty transitions make regular languages closed under concatenation

**Remember:** Jump to the second machine without using an input letter.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** An empty transition lets a finite automaton change state without reading a letter. A nondeterministic automaton can choose among moves. It accepts if some path from its start reads the whole word and ends in a marked state.

**Problem.** The language formed by joining any word from one regular language to any word from another is regular.

**How the definition helps.** An empty transition marks where one word ends and the next begins (our own). Use separate copies of the machines and start in the first (our own). Link each accepting state there to the second start by an empty transition, and mark only the second machine’s accepting states (our own). The usual model requires a proof that removing empty transitions preserves the accepted words (our own).

**Wikipedia:** [Nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton). It says: “A transition without consuming an input symbol is called an ε-transition”

**Sources:** none listed. No primary source with a working link was found.

### Finite state runs expose the loops in regular languages

**Remember:** A repeated state lets you repeat or skip the letters between its visits.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** A regular language is a set of words that a deterministic finite automaton accepts. This machine starts in one state and follows one arrow per letter. It accepts if the last state is marked for acceptance.

**Problem.** Every word of length at least n accepted by a deterministic finite automaton with n states splits as uvw. The prefix uv has length at most n, v is nonempty, and all repetitions of v preserve acceptance.

**How the definition helps.** The first n letters give n + 1 state visits, counting the start, so some state repeats (our own). The letters between those visits form a loop that can run any number of times (our own). Starting from a regular expression requires Kleene’s theorem to obtain an equivalent machine (our own).

**Paper or page:** [Pumping Lemma for Regular Languages](https://proofwiki.org/wiki/Pumping_Lemma_for_Regular_Languages). It says: “∀ i ∈ ℕ₀: u · vⁱ · w ∈ L”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### Paired states give regular languages union and intersection

**Remember:** Run both automata together and combine their answers at the end.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** A deterministic finite automaton has finitely many states and one move per letter from each state. It accepts a word if it ends in a marked state, and its accepted words form a regular language. The product starts in the pair of start states and updates both states on each letter.

**Problem.** The union and intersection of two regular languages over the same alphabet are regular.

**How the definition helps.** The pair records both machines’ answers after the same word (our own). Mark pairs with either state accepting for union, or both states accepting for intersection (our own). Induction on the number of letters proves each state follows its original machine (our own). Starting with regular expressions requires the theorem that they describe exactly the finite automaton languages (our own).

**Wikipedia:** [Deterministic finite automaton](https://en.wikipedia.org/wiki/Deterministic_finite_automaton). It says: “the union/intersection of the languages recognized by two given DFAs.”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### Useful cycles characterize infinite regular languages

**Remember:** An accepting path can repeat any cycle it visits.

*Rules out counterexamples. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** In a finite automaton, call a state useful if some path from the start to an accepting state visits it. The useful subgraph keeps those states and the arrows between them.

**Problem.** A deterministic finite automaton over a finite alphabet accepts infinitely many words exactly when its useful subgraph contains a directed cycle.

**How the definition helps.** A useful cycle lies on an accepting path, so repeating it gives longer and longer accepted words (our own). Without a cycle, an accepting path visits each useful state at most once (our own). Bounded length allows only finitely many words over a finite alphabet (our own). A loop with no path to acceptance adds no accepted words (our own).

**nLab:** [deterministic automaton](https://ncatlab.org/nlab/show/deterministic+automaton). It says: “In the usual interpretation if the automaton is in state q, and is 'given' the input σ, then it changes to being in state δ(q,σ).”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### Mutual reachability removes cycles

**Remember:** A cycle of groups would be one group.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science). arXiv cs.DM, cs.DS. Level 1: early undergraduate.

**Definition.** Group vertices when each is reachable from the other by a directed path. Keep an edge between different groups if the original graph has such an edge. Unlike one-way reachability, mutual reachability gives a partition.

**Problem.** The graph of groups has no directed cycles.

**How the definition helps.** A cycle of groups would give paths in both directions between any two groups on it (our own). Within each group, mutual reachability joins consecutive edges of those paths. All vertices on the cycle would therefore belong to one group, contradicting the rule for keeping edges.

**Wikipedia:** [Strongly connected component](https://en.wikipedia.org/wiki/Strongly_connected_component). It says: “If each strongly connected component is contracted to a single vertex, the resulting graph is a directed acyclic graph”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative edges settle distances

**Remember:** An extra edge cannot make a path cheaper.

*Rules out counterexamples.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Give every edge of a finite directed graph a nonnegative length. This allows zero-length edges and rules out paths that become cheaper when extended.

**Problem.** With nonnegative edge lengths, Dijkstra’s algorithm can permanently accept the unfinished vertex with the smallest tentative distance from the source. That distance is the true shortest distance.

**How the definition helps.** Nonnegative lengths bound each prefix cost by the whole path cost. On a shorter competing path, the first unfinished vertex would already have received a smaller tentative distance from its finished predecessor (our own). That contradicts the choice of minimum. With lengths s→a=2, s→b=3 and b→a=−2, accepting a first misses the shorter path through b (our own).

**Wikipedia:** [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). It says: “Dijkstra's algorithm is commonly used on graphs where the edge weights are non-negative integers or real numbers.”

**Sources:**

- [Edsger W. Dijkstra, A Note on Two Problems in Connexion with Graphs (1959)](https://doi.org/10.1007/BF01386390)

### Quorum thresholds force read-write overlap

**Remember:** Disjoint groups cannot hold more votes than exist.

*Rules out counterexamples.* MSC 68M14 (Distributed systems), 68M12. arXiv cs.DC. Level 2: later undergraduate.

**Definition.** A replica stores a copy of a data item and has a fixed positive vote weight. A read or write quorum is a group whose combined weight reaches the threshold for that operation. Require the read and write thresholds together to exceed the total weight.

**Problem.** Every read quorum intersects every write quorum. If stored versions never decrease, a read after a completed quorum write sees its version or a newer one.

**How the definition helps.** The threshold sum forces overlap because disjoint groups cannot hold more votes than exist. In our own example at equality, four replicas have one vote each. Writing to two and reading from the other two misses the write. With strict overlap, the reader can select the newest version it sees.

**Wikipedia:** [Quorum (distributed computing)](https://en.wikipedia.org/wiki/Quorum_%28distributed_computing%29). It says: “it ensures that a read quorum contains at least one site with the newest version of the data item.”

**Sources:**

- [David K. Gifford, Weighted Voting for Replicated Data (1979)](https://doi.org/10.1145/800215.806583)

### Cartesian trees encode minima

**Remember:** The first common ancestor is the smallest entry in the interval.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Build a binary tree on the distinct entries of an array. At every node, the left subtree, the node itself, and the right subtree occur in that order in the array. Each parent has a smaller value than its children.

**Problem.** The minimum on an inclusive array interval is the value at the deepest node ancestral to both endpoints. A node counts as its own ancestor.

**How the definition helps.** In our own proof, array order locates the common ancestor and parent order makes it smallest. The deepest common ancestor lies between the endpoints because they occupy different branches unless one is that ancestor. Its subtree covers a consecutive block containing the entire interval. The work shifts from scanning intervals to building the tree and finding common ancestors.

**Wikipedia:** [Cartesian tree](https://en.wikipedia.org/wiki/Cartesian_tree). It says: “In a Cartesian tree, this minimum value can be found at the lowest common ancestor of the leftmost and rightmost values in the subsequence.”

**Sources:**

- [Erik D. Demaine, Gad M. Landau, and Oren Weimann, On Cartesian Trees and Range Minimum Queries (2009)](https://doi.org/10.1007/978-3-642-02927-1_29)

### Light edges halve subtrees

**Remember:** An unchosen child has a sibling at least as large.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In a rooted tree, mark one edge from each non-leaf node to a child whose subtree contains the most nodes. Break ties arbitrarily. Call the marked edges heavy and the other edges light.

**Problem.** A root-to-leaf path in an n-node tree crosses at most log₂ n light edges.

**How the definition helps.** Choosing a largest child guarantees that a light child has a sibling with at least as many descendants, counting each child itself. A light step therefore at least halves the remaining subtree size. Starting with n nodes allows at most log₂ n such steps. In our own example, marking an arbitrary child could leave a long chain of light edges, each with a single leaf sibling.

**Wikipedia:** [Heavy-light decomposition](https://en.wikipedia.org/wiki/Heavy-light_decomposition). It says: “Therefore, on any root-to-leaf path of a tree with n nodes, there can be at most log₂ n light edges.”

**Sources:**

- [Daniel D. Sleator and Robert Endre Tarjan, A Data Structure for Dynamic Trees (1983)](https://doi.org/10.1016/0022-0000(83)90006-5)

### Path copying preserves versions

**Remember:** Copy the path, share the branches.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Keep one root per version and make every node immutable. To update a value, copy the path from the root through the changed node, linking consecutive copies. Keep the original pointers to all branches off the path.

**Problem.** Changing one value at depth h creates h + 1 new nodes and preserves every older version. Depth counts edges from the root.

**How the definition helps.** In our own proof, copying the path gives the new version its changed value while every old root still reaches exactly its original nodes. Updating the node in place would also change what earlier roots see. The path has h ancestors and one changed node. For more complicated updates, the work lies in bounding how many nodes need copying.

**Wikipedia:** [Persistent data structure](https://en.wikipedia.org/wiki/Persistent_data_structure). It says: “Path copying is one of the simple methods to achieve persistency in a certain data structure such as binary search trees.”

**Sources:**

- [James R. Driscoll, Neil Sarnak, Daniel D. Sleator, and Robert E. Tarjan, Making Data Structures Persistent (1989)](https://doi.org/10.1016/0022-0000(89)90034-2)

### Random priorities speed treap searches

**Remember:** Priorities choose the root before either side.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A treap stores keys in a binary search tree, with smaller keys to the left and larger keys to the right. Each key has an independent random priority from the same continuous distribution. A parent must have higher priority than its children.

**Problem.** For n distinct keys, the treap has the same distribution as a binary search tree built in uniformly random insertion order. Searching for a fixed key takes O(log(n + 1)) expected comparisons.

**How the definition helps.** The highest-priority key must be the root, exactly as if it had been inserted first into an empty search tree. The same rule applies recursively on each side. In our own argument, the independent continuous priorities give every insertion order equal probability. The search bound comes from the separate analysis of a binary search tree built in random order.

**Wikipedia:** [Treap](https://en.wikipedia.org/wiki/Treap). It says: “inserting the nodes highest priority-first into a binary search tree without doing any rebalancing.”

**Sources:**

- [Raimund Seidel and Cecilia R. Aragon, Randomized Search Trees (1996)](https://doi.org/10.1007/s004539900061)

### Reduction makes decision diagrams unique

**Remember:** Skip tests that change nothing and share all identical branches.

*Rules out counterexamples.* MSC 68P05 (Data structures). arXiv cs.DS, cs.LO. Level 2: later undergraduate.

**Definition.** An ordered binary decision diagram tests Boolean variables in a fixed increasing order along each path, allowing skips. A reduced diagram keeps only reachable nodes and one terminal per output value used. No test has identical children, and no two nodes have the same test and ordered children.

**Problem.** A Boolean function has a unique reduced decision diagram up to renaming nodes for each fixed variable order. Ordinary decision diagrams need not be unique.

**How the definition helps.** In our own proof, the first test must use the earliest variable that can change the output. Each branch then computes a function of fewer variables. Induction fixes those branches, and merging identical nodes fixes how branches share nodes. A diagram without reduction could represent true by a terminal or by testing a variable with both outcomes leading to true.

**Wikipedia:** [Binary decision diagram](https://en.wikipedia.org/wiki/Binary_decision_diagram). It says: “it is canonical (unique up to isomorphism) for a particular function and variable order.”

**Sources:**

- [Randal E. Bryant (1986), Graph-Based Algorithms for Boolean Function Manipulation](https://doi.org/10.1109/TC.1986.1676819)

### Binary tests certify sorting networks

**Remember:** Threshold an output inversion to get a binary inversion.

*Rules out counterexamples.* MSC 68P10 (Searching and sorting), 68W10. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A comparator sends the smaller input to one wire and the larger to another. A comparator network fixes all wire pairs in advance. Unlike a general sorting procedure, it only uses these minimum and maximum gates.

**Problem.** A fixed comparator network sorts every input from a total order if it sorts every binary input.

**How the definition helps.** Every threshold commutes with minimum and maximum, so it commutes with the entire network. A failed sort leaves a larger output before a smaller one (our own proof). Map values above the smaller output to one and all others to zero. The resulting binary output has a one before a zero.

**Wikipedia:** [Sorting network](https://en.wikipedia.org/wiki/Sorting_network). It says: “if a sorting network can correctly sort all 2ⁿ sequences of zeros and ones, then it is also valid for arbitrary ordered inputs.”

**Sources:**

- [Kenneth E. Batcher, Sorting Networks and Their Applications (1968)](https://doi.org/10.1145/1468075.1468121)

### Canonical databases test query containment

**Remember:** Try the second query on the first query’s own facts.

*True by definition.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** A Boolean conjunctive query asks whether some values make all its listed relation facts true. Its canonical database replaces each distinct variable by a separate fresh value and stores those facts. Containment normally compares truth of two queries on every database.

**Problem.** For Boolean conjunctive queries without constants or built-in comparisons, Q implies P on every database exactly when P holds on Q’s canonical database.

**How the definition helps.** Every witness for Q gives a fact-preserving map from its canonical database, our own explanation. Map the witnesses for P along it to establish containment. For the converse, Q holds on its own canonical database. The work moves to finding a fact-preserving map from the facts of P to the facts of Q, our own explanation.

**Wikipedia:** [Conjunctive query](https://en.wikipedia.org/wiki/Conjunctive_query). It says: “the query containment problem for conjunctive queries is exactly the same problem as the query evaluation problem.”

**Sources:**

- [Ashok K. Chandra and Philip M. Merlin (1977), Optimal implementation of conjunctive queries in relational data bases](https://doi.org/10.1145/800105.803397)

### Join trees make local matching sufficient

**Remember:** A shared column cannot leave the path and reappear later.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** A join tree puts a table at each vertex and requires the tables containing each column to form a connected subtree. Two rows match across an edge when they agree on every shared column. A full join row restricts to a row of every table.

**Problem.** On a join tree, if each row matches across every incident edge, every row extends to a full join result.

**How the definition helps.** Connectedness carries each shared value along the path between tables containing its column (our own proof). Start from any row and choose matching rows outward along the tree. These rows agree wherever their columns overlap. On a cycle, the bit constraints X≠Y, Y≠Z and Z≠X have pairwise matches but no common solution (our own example).

**Wikipedia:** [Yannakakis algorithm](https://en.wikipedia.org/wiki/Yannakakis_algorithm). It says: “After both sweeps, every remaining tuple participates in at least one full join result.”

**Sources:**

- [Philip A. Bernstein and Nathan Goodman (1981), Power of Natural Semijoins](https://doi.org/10.1137/0210059)

### Positive rule closure preserves answers

**Remember:** Adding facts can only make more positive premises true.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB, cs.AI. Level 2: later undergraduate.

**Definition.** Positive Datalog uses rules that require facts to be present. Start with the input rows and repeatedly add every conclusion whose premises hold. The resulting facts form the smallest set containing the input and closed under the rules.

**Problem.** Adding input rows cannot remove any answer produced by a positive Datalog query.

**How the definition helps.** Every rule application available with fewer input rows remains available with more (our own proof). Induction preserves inclusion through all stages and hence through their union. A rule using negation could report employees missing from an absence table. Adding an absence would then remove a report (our own example).

**Wikipedia:** [Datalog](https://en.wikipedia.org/wiki/Datalog). It says: “adds all of the new ground atoms that can be derived from the rules of the program in a single step.”

**Sources:** none listed. No primary source with a working link was found.

### Row swaps make joins lossless

**Remember:** If rows can swap their values, joining the projections adds nothing.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** Partition a table’s columns into X, Y and Z, treating rows as a set. The multivalued dependency X ↠ Y holds if every pair (x,y,z), (x,y′,z′) in the table also has (x,y,z′) in the table.

**Problem.** Joining the projections onto XY and XZ recovers the original table exactly when this multivalued dependency holds.

**How the definition helps.** In our own proof, every row in the join comes from exactly the kind of exchange the dependency allows. Conversely, every exchange of this kind gives a join row. The original table always contributes all its rows to the join. For our own counterexample, the table containing just (a,b,c) and (a,d,e) lacks the join row (a,b,e).

**Wikipedia:** [Multivalued dependency](https://en.wikipedia.org/wiki/Multivalued_dependency). It says: “A multivalued dependency is a special case of a join dependency, with only two sets of values involved”

**Sources:**

- [Ronald Fagin (1977), Multivalued dependencies and a new normal form for relational databases](https://doi.org/10.1145/320557.320571)

### Determinism defeats chosen-message secrecy

**Remember:** Public encryption needs fresh randomness to hide a chosen message.

*True by definition.* MSC 68P25 (Data encryption (aspects in computer science)), 94A60. arXiv cs.CR. Level 2: later undergraduate.

**Definition.** For each public key and message, deterministic encryption produces a single fixed ciphertext. Chosen-message secrecy requires every efficient observer’s advantage over guessing between two chosen equal-length messages to be negligible in the security parameter.

**Problem.** No deterministic public-key cipher with correct decryption can hide which of two distinct equal-length messages it encrypted.

**How the definition helps.** The chosen-message test lets an observer predict both possible ciphertexts when encryption is deterministic. Our own argument fixes two distinct equal-length messages and encrypts each under the public key. Correct decryption forces the outputs to differ. Comparing the challenge with these outputs identifies the message with certainty.

**Wikipedia:** [Deterministic encryption](https://en.wikipedia.org/wiki/Deterministic_encryption). It says: “While deterministic encryption schemes can never be semantically secure, they have some advantages over probabilistic schemes.”

**Sources:**

- [Shafi Goldwasser and Silvio Micali, Probabilistic Encryption (1984)](https://doi.org/10.1016/0022-0000(84)90070-9)

### A read-only input tape makes logarithmic space a meaningful class

**Remember:** Do not charge a machine for merely reading its input.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A language belongs to L if a deterministic Turing machine decides it using O(log(n+2)) work-tape cells on every input of length n. Its separate read-only input tape does not count toward the space bound.

**Problem.** With a read-only input tape, space classes below linear space, such as L and NL, are meaningful, and L ⊆ P. If the input sat on the work tape, every machine would use at least linear space.

**How the definition helps.** Counting only writable space permits sublinear bounds. A log-space decider has polynomially many configurations, including its head positions, finite control and work-tape contents (our own argument). Repeating one would prevent it from halting, so it takes only polynomial time.

**Wikipedia:** [L (complexity)](https://en.wikipedia.org/wiki/L_%28complexity%29). It says: “Formally, the Turing machine has two tapes, one of which encodes the input and can only be read, whereas the other tape has logarithmic size but can be written as well as read.”

**Sources:** none listed. No primary source with a working link was found.

### Short certificates prove closure of NP under Kleene star

**Remember:** Split the word and certify each piece.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)). arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A language belongs to NP if some deterministic polynomial-time verifier and polynomial p satisfy the following condition. For every word w, membership is equivalent to acceptance with some certificate of length at most p(\|w\|).

**Problem.** If L is in NP, then L\* is in NP. Here L\* contains all finite concatenations of words from L, including the empty concatenation.

**How the definition helps.** The verifier checks a certificate for each nonempty piece of a proposed factorization (our own). Omitting empty pieces leaves at most one piece per input letter. The total certificate length and checking time are therefore polynomial in the input length. The verifier accepts the empty input separately.

**Wikipedia:** [NP (complexity)](https://en.wikipedia.org/wiki/NP_%28complexity%29). It says: “NP is closed under union, intersection, concatenation, Kleene star and reversal.”

**Sources:** none listed. No primary source with a working link was found.

### One NP-complete problem decides whether P equals NP

**Remember:** An NP-complete problem is as hard as all of NP at once.

*True by definition.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A decision problem belongs to NP if its yes instances have polynomial-length certificates that a deterministic polynomial-time verifier checks, and no instance answering no passes. A problem C is NP-complete if C belongs to NP and every problem in NP has a polynomial-time many-one reduction to C. Such a reduction maps each input to an instance with the same answer.

**Problem.** If one NP-complete problem has a polynomial-time algorithm, then every problem in NP has one. So P = NP exactly when a single NP-complete problem is in P.

**How the definition helps.** For any problem in NP, compose its reduction to C with the polynomial-time decision algorithm for C (our own argument). This gives P=NP since P⊆NP. Conversely, if P=NP, then Boolean satisfiability belongs to P and is NP-complete by the Cook–Levin theorem.

**Wikipedia:** [NP-completeness](https://en.wikipedia.org/wiki/NP-completeness). It says: “Hence, if we could find valid solutions of some NP-complete problem quickly (when they exist), we could quickly find valid solutions for every other problem in which a given solution can be easily verified.”

**Sources:**

- [Cook, S. A. (1971). The complexity of theorem-proving procedures. Proc. 3rd ACM Symposium on Theory of Computing, 151–158.](https://doi.org/10.1145/800157.805047)

### Binary grammar rules fix the length of every nonempty derivation

**Remember:** One rule per letter and one fewer split.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form, a rule either replaces a variable by two variables or emits one letter. Only the start variable can have an empty rule, and that variable then cannot appear on a rule’s right side.

**Problem.** In Chomsky normal form, every derivation of a word of length n greater than zero takes exactly 2n − 1 rule applications.

**How the definition helps.** The permitted rule types determine their counts from the word length (our own proof). Exactly n rules emit letters, each removing one variable. Each split adds one variable. Starting with one variable and ending with none requires n−1 splits, giving 2n−1 applications altogether.

**Wikipedia:** [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “Every grammar in Chomsky normal form is context-free, and conversely, every context-free grammar can be transformed into an equivalent one”

**Sources:**

- [Noam Chomsky. On Certain Formal Properties of Grammars. 1959.](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Chomsky normal form forces repeated symbols along long derivation paths

**Remember:** Many leaves in a binary tree force a long path.

*True by definition. Confidence: medium.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form, a rule replaces one placeholder by two placeholders or by a letter. The start symbol may also produce the empty word if it never occurs on a right-hand side. These rules give a derivation tree that branches in two until each branch ends in a letter.

**Problem.** If the grammar has m placeholders, take a word of length greater than 2ᵐ⁻¹. Some placeholder must occur twice along one path in its derivation tree.

**How the definition helps.** With no repeated placeholder, each path contains at most m placeholders and therefore at most m−1 branching steps (our own). A binary tree with this bound has at most 2ᵐ⁻¹ leaves. Each leaf supplies one letter, so a longer word forces a repetition.

**Wikipedia:** [Pumping lemma for context-free languages](https://en.wikipedia.org/wiki/Pumping_lemma_for_context-free_languages), [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “If s is sufficiently long, its derivation tree w.r.t. a Chomsky normal form grammar must contain some nonterminal N twice on some tree path”

**Sources:**

- [N. Chomsky, On certain formal properties of grammars, Information and Control 2 (1959)](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Context-free grammars show context-free languages admit union, concatenation and star

**Remember:** A fresh start symbol joins grammars without mixing their rules.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A context-free grammar has finite sets of letters, variables and rules, with one start variable. Each rule replaces one variable by a string of letters and variables, possibly empty. The generated language contains exactly the strings of letters reachable from the start variable.

**Problem.** Context-free languages are closed under union, concatenation and Kleene star. The star operation takes all finite concatenations, including the empty word.

**How the definition helps.** A fresh start variable S combines derivations after the original variables have been renamed to avoid overlap (our own constructions). For union, let S produce either original start variable. For concatenation, let S produce the two start variables in sequence. For star, use S → S₁S and S → ε, where ε is the empty word.

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “the union of two context-free languages is always context-free.”

**Sources:** none listed. No primary source with a working link was found.

### Leftmost expansion keeps grammar ambiguity from counting rule orders

**Remember:** Fix the expansion order so one parse tree counts once.

*Rules out counterexamples.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A leftmost derivation always applies its next grammar rule to the first variable from the left. A parse tree records which rule expands each variable and the order of its children.

**Problem.** For a given word, the parse trees of a context-free grammar correspond one-to-one with its leftmost derivations.

**How the definition helps.** The leftmost rule fixes the order in which each parse tree expands (our own). After S → AB, expanding A or B first gives different unrestricted orders for the same tree (our own). Conversely, each leftmost step attaches the chosen rule’s children to one determined node, so it reconstructs a unique tree (our own).

**Wikipedia:** [Ambiguous grammar](https://en.wikipedia.org/wiki/Ambiguous_grammar). It says: “only multiple leftmost derivations (or, equivalently, multiple parse trees) indicate ambiguity.”

**Sources:** none listed. No primary source with a working link was found.

### Productive variables make grammar emptiness decidable

**Remember:** Mark a variable once it has a rule that can finish.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A variable is productive when it can generate a word with no variables left, possibly the empty word. Equivalently, start with no marks and mark a variable when some right side uses only letters and already marked variables.

**Problem.** A context-free grammar generates a nonempty language exactly when marking reaches its start variable. This gives a decision procedure for grammar emptiness.

**How the definition helps.** Marking calculates productivity without searching through derivations of unbounded length (our own). Repeat the marking rule until no mark changes, which takes only finitely many rounds (our own). Each mark builds a word from earlier marks, and every finite derivation tree gives marks from its leaves upward (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “Emptiness: Given a context-free grammar A, is L(A) = ∅ ?”

**Sources:** none listed. No primary source with a working link was found.

### Reversing grammar rules reverses context-free languages

**Remember:** Read each rule backwards to read the generated words backwards.

*True by definition. Confidence: medium.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A context-free grammar replaces one variable at a time by a sequence of letters and variables. Its reversed grammar keeps the start variable and reverses the right side of every rule.

**Problem.** The reversals of the words of any context-free language form a context-free language.

**How the definition helps.** Reversing a string turns each rule application into an application of the reversed rule (our own). Reversing all steps therefore generates the reversed word, and reversing twice gives the converse (our own). Starting from a stack machine requires first finding an equivalent grammar (our own).

**nLab:** [context-free grammar](https://ncatlab.org/nlab/show/context-free+grammar). It says: “R ⊆ X × (X + V)⋆ is a finite set of production rules”

**Sources:** none listed. No primary source with a working link was found.

### A finite length bound makes regular language equivalence decidable

**Remember:** A shortest disagreement never visits the same pair twice.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The symmetric difference of two languages contains words that belong to exactly one of them. For two deterministic finite automata over the same alphabet, recognize this difference using pairs of current states.

**Problem.** Two deterministic automata with m and n states over one alphabet agree everywhere if they agree on all words shorter than mn.

**How the definition helps.** A shortest disagreement traces a path through state pairs with no repeated pair (our own). Removing the segment between two visits would give a shorter disagreement with the same final pair (our own). There are only mn pairs, so this path uses fewer than mn letters (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Alternatively, a regular language can be defined as a language recognised by a finite automaton.”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### A zero threshold turns probabilities into reachability

**Remember:** At zero, one positive path is enough.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A finite probabilistic automaton starts with a probability distribution on states and uses a stochastic transition matrix for each letter. Each path has probability equal to its initial state probability times its transition probabilities. At strict threshold zero, a word is accepted if its paths ending in accepting states have positive total probability.

**Problem.** Every language accepted at threshold zero by a finite probabilistic automaton is regular.

**How the definition helps.** In our own proof, a finite sum of nonnegative path probabilities is positive exactly when one path has positive probability. Keep the possible starting states and the transitions with positive probability. The resulting machine accepts if any path reaches an accepting state. The equivalence between this kind of machine and deterministic finite automata gives regularity.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Each 0-stochastic language is regular.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

### Binary grammar rules make context-free membership a finite search

**Remember:** To match two variables, split the input into two shorter words.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Chomsky normal form allows a grammar variable to produce two variables or one letter. The start variable may also produce the empty word and, in this convention, never appears on a right side.

**Problem.** Membership in a context-free language is decidable. For a grammar in Chomsky normal form, a table of substrings suffices.

**How the definition helps.** A two-variable rule splits a nonempty word into two shorter nonempty pieces (our own). Record which variables produce each substring, starting with single letters and then testing every split of each longer substring (our own). For empty input, check the start variable’s empty-word rule (our own). The general theorem uses the conversion of any context-free grammar to this form (our own).

**Wikipedia:** [CYK algorithm](https://en.wikipedia.org/wiki/CYK_algorithm). It says: “The standard version of CYK operates only on context-free grammars given in Chomsky normal form (CNF).”

**Sources:**

- [D. H. Younger, Recognition and Parsing of Context-Free Languages in Time n³ (1967).](https://doi.org/10.1016/S0019-9958(67)80007-X)

### Complete deterministic automata recognize complements by swapping accepting states

**Remember:** Each word has one run, so swap accepting and rejecting states.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A complete deterministic finite automaton has exactly one next state for each state and letter. A word is accepted if the resulting run from the start state ends in an accepting state. A nondeterministic automaton can have zero or several next states for a letter.

**Problem.** The complement of a language accepted by a complete deterministic automaton has such an automaton with the same number of states.

**How the definition helps.** Completeness and determinism give every word exactly one run, so the final state decides both acceptance and rejection. Swapping the accepting and rejecting states leaves that run unchanged and reverses its verdict. Starting with a nondeterministic machine, the work moves to determinization, which uses sets of old states as new states (our own). That conversion can increase the number of states exponentially (our own).

**Wikipedia:** [Complementation of automata](https://en.wikipedia.org/wiki/Complementation_of_automata), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “A complete deterministic finite automation can be complemented by switching its accepting and non-accepting states while leaving its transitions and initial state unchanged.”

**Sources:**

- [M. O. Rabin, D. Scott, Finite automata and their decision problems, IBM Journal of Research and Development 3 (1959)](https://doi.org/10.1147/rd.32.0114)

### Deterministic automata keep right quotients regular even by arbitrary languages

**Remember:** Keep the transitions and choose new accepting states.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The right quotient L / K contains exactly those words u for which uv belongs to L for some v in K.

**Problem.** If L is regular and K is any language over the same alphabet, then L / K is regular.

**How the definition helps.** The existence of a suitable suffix depends only on the state reached after reading the prefix (our own). In a deterministic automaton for L, mark precisely those states from which some word of K leads to an original accepting state. With these new accepting states, the same transitions recognize L / K.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Even more, regular languages are closed under quotients with arbitrary languages: If L is regular then L / K is regular for any K.”

**Sources:** none listed. No primary source with a working link was found.

### Deterministic paths make regular word counts rational

**Remember:** One path per word makes matrix powers count words.

*True by definition.* MSC 68Q45 (Formal languages and automata), 05A15. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** For a deterministic finite automaton, let Mᵢⱼ count the letters that send state i to state j. The word-counting series is ∑ₙ≥₀ cₙzⁿ, where cₙ counts accepted words of length n.

**Problem.** The generating function for the number of accepted words of each length is rational for every regular language.

**How the definition helps.** Determinism gives each word exactly one path from the start (our own). The entry (Mⁿ)ᵢⱼ counts length-n paths from i to j, counting each letter separately. Summing zⁿMⁿ gives (I−zM)⁻¹, whose entries are rational functions. Summing its start-row entries over accepting columns gives the word-counting series.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “The generating function of a language L is a rational function if L is regular.”

**Sources:** none listed. No primary source with a working link was found.

### Deterministic stack machines make complementation possible

**Remember:** One finished run gives one answer to flip.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A pushdown automaton reads letters and stores symbols on a stack, where it can access only the top. A deterministic one has at most one possible move in each situation. The languages such machines accept are called deterministic context-free languages.

**Problem.** The complement of every deterministic context-free language is deterministic context-free.

**How the definition helps.** Determinism gives one decision to reverse once every run finishes (our own). A normal-form theorem supplies an equivalent machine that reads to an end marker and always decides, so swapping its decisions recognizes the complement. Without determinism this fails (our own). All words over a, b and c except those of the form aⁿbⁿcⁿ form a context-free language whose complement is not context-free.

**Wikipedia:** [Deterministic context-free language](https://en.wikipedia.org/wiki/Deterministic_context-free_language). It says: “The set of deterministic context-free languages is closed under the following operations: complement”

**Sources:** none listed. No primary source with a working link was found.

### Epsilon closure removes empty moves without adding states

**Remember:** Fold empty moves into the next letter or the final acceptance check.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The epsilon closure of a state is the set of states it can reach without reading input. It includes the state itself, since the machine can take no moves.

**Problem.** A nondeterministic finite automaton with empty transitions has an equivalent one with the same states and no empty transitions.

**How the definition helps.** Epsilon closure collects all moves available before a letter without introducing states for sets of possibilities (our own). From each state, allow every letter move available anywhere in its closure (our own). Mark that state accepting if its closure contains an original accepting state (our own). Splitting runs at letter moves proves equivalence without converting the machine to a deterministic one (our own).

**Wikipedia:** [Nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton). It says: “E(q) is known as the epsilon closure”

**Sources:** none listed. No primary source with a working link was found.

### Keeping grammar variables on one side preserves regularity

**Remember:** Keep every surviving variable at the same end.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In a strictly right-linear grammar, a variable may become a letter followed by a variable. It may also become just a letter or the empty word. A strictly left-linear grammar instead puts the variable before the letter in any rule that produces both.

**Problem.** Strictly right-linear grammars generate exactly the regular languages. The same holds if all rules are strictly left-linear, but not if both forms may be mixed.

**How the definition helps.** Each surviving rightmost variable acts as the current state of a finite automaton (our own). A letter-only rule leads to a final state, and an empty rule marks the current state accepting (our own). Translating transitions back gives the converse, and reversing words gives the left-linear case (our own). Mixing S → aT, T → Sb and S → ε generates equal blocks of a’s then b’s, a nonregular language (our own).

**Wikipedia:** [Regular grammar](https://en.wikipedia.org/wiki/Regular_grammar). It says: “Hence, the right-regular grammars generate exactly all regular languages.”

**Sources:** none listed. No primary source with a working link was found.

### Leftmost derivations turn grammars into stack machines

**Remember:** Keep the unread part of the derivation on the stack.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A leftmost derivation always replaces the first remaining variable. A pushdown automaton is a finite-state machine that can read or change the top of a stack.

**Problem.** Every context-free grammar has a nondeterministic pushdown automaton that accepts exactly the words the grammar generates.

**How the definition helps.** Leftmost expansion puts the next symbol to process at the top of the stack (our own). Start with the grammar’s start variable and replace each top variable by a chosen rule’s right side, leftmost symbol uppermost (our own). Remove a top letter when it matches the next input letter, and accept when both input and stack are empty (our own). Completeness uses the fact that every generated word has a leftmost derivation (our own).

**Wikipedia:** [Pushdown automaton](https://en.wikipedia.org/wiki/Pushdown_automaton). It says: “The derivation process of the grammar is simulated in a leftmost way.”

**Sources:**

- [N. Chomsky, Context-Free Grammars and Pushdown Storage (1962).](https://dspace.mit.edu/bitstream/handle/1721.1/53697/RLE_QPR_065_XVII.pdf)

### Matched stack operations become context-free grammar rules

**Remember:** One variable accounts for everything above one fixed stack level.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A pushdown automaton stores symbols on a stack and can inspect only the top symbol. A removal variable \[p,A,q\] describes runs starting in state p with only A stacked and ending in state q with an empty stack. Its words are the inputs read during those runs.

**Problem.** Every language accepted by a nondeterministic pushdown automaton has a context-free grammar.

**How the definition helps.** The variable records the whole part of a run that removes one stack symbol (our own). If a move replaces A by several symbols, its rule lists their removal variables after any letter read (our own). Adjacent variables share the state where one removal ends and the next begins (our own). For a machine that accepts by final state, first convert it to acceptance by empty stack (our own).

**Wikipedia:** [Pushdown automaton](https://en.wikipedia.org/wiki/Pushdown_automaton). It says: “one may construct a context-free grammar G such that N(M)=L(G).”

**Sources:**

- [N. Chomsky, Context-Free Grammars and Pushdown Storage (1962).](https://dspace.mit.edu/bitstream/handle/1721.1/53697/RLE_QPR_065_XVII.pdf)

### Nondeterministic automata recognize reversed regular languages by reversing transitions

**Remember:** Reverse every arrow and swap the start and accepting states.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic finite automaton has finite sets of states and letters, designated start and accepting states, and letter-labelled transitions. It accepts a word when some path from a start state to an accepting state reads exactly that word.

**Problem.** If L is regular, the language of its words written backwards is also regular.

**How the definition helps.** The nondeterministic definition allows the several starts and moves that reversal can produce. Reverse every transition and exchange the sets of start and accepting states. Each accepting run now reads its word backwards (our own). The work moves to determinization, which proves that the nondeterministic and deterministic definitions agree (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Given a nondeterministic finite automaton to recognize L, an automaton for Lᴿ can be obtained by reversing all transitions and interchanging starting and finishing states.”

**Sources:** none listed. No primary source with a working link was found.

### Path languages turn finite automata into regular expressions

**Remember:** Allow one more intermediate state and count its return trips with a star.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** For two states, a restricted path language contains the words read along paths between them that use only specified states at intermediate visits. This restriction applies even if a path revisits an endpoint before it finishes.

**Problem.** Every language recognized by a finite automaton can be written as a regular expression.

**How the definition helps.** One newly allowed state splits a path through it into an approach, zero or more return trips, and a departure (our own). With no intermediate states, paths have at most one edge (our own). At each stage combine the old expressions by choice, joining and repetition, keeping paths that avoid the new state too (our own). After allowing every state, take the union from the start to all accepting states (our own).

**Wikipedia:** [Kleene's algorithm](https://en.wikipedia.org/wiki/Kleene%27s_algorithm). It says: “going through a state" means entering and leaving it”

**Sources:**

- [S. C. Kleene, Representation of Events in Nerve Nets and Finite Automata (1956).](https://www2.fiit.stuba.sk/~kvasnicka/CognitiveScience/2.prednaska/kleene56representation%5B1%5D.pdf)

### Pushdown automata keep intersections with regular languages context-free

**Remember:** Put the finite automaton in the control and keep the stack.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic pushdown automaton has finite control and a stack. Each move uses the current state and top symbol, replaces that symbol by a string, and reads one letter or no input. It accepts a word if some run reads the entire word and ends in an accepting state.

**Problem.** The intersection of a context-free language and a regular language is context-free.

**How the definition helps.** The automaton definition leaves room for a second machine in the finite control without adding a stack (our own). Pair each pushdown state with a state of a deterministic finite automaton for the regular language, and accept when both accept (our own). On moves that read no letter, the finite automaton stays still (our own). The work moves to proving that the two definitions of context-free language agree (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “However, if L is a context-free language and D is a regular language then both their intersection L∩D and their difference L∖D are context-free languages.”

**Sources:** none listed. No primary source with a working link was found.

### Regular expressions make letter substitution preserve regularity

**Remember:** Replace the letters and keep the expression’s operations.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A string homomorphism replaces each letter with a fixed word, possibly empty. Apply it to a regular expression by replacing each literal letter with an expression for its replacement word. Leave union, concatenation and repetition in place.

**Problem.** The image of a regular language under any string homomorphism is regular.

**How the definition helps.** Replacing letters commutes with union, concatenation and repetition (our own). So induction on the expression shows that the new expression describes the image (our own). Kleene’s theorem carries the work of relating this proof to finite automata (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “the trio operations: string homomorphism, inverse string homomorphism, and intersection with regular languages.”

**Sources:** none listed. No primary source with a working link was found.

### Regular expressions make regular languages closed under Kleene star

**Remember:** Star is one of the rules for building expressions.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Regular expressions denote languages built from the empty language and single-letter languages by union, concatenation and Kleene star. Star takes all finite concatenations of words from its operand, including the empty concatenation. A language is regular if an expression denotes it.

**Problem.** Regular languages are closed under union, concatenation and Kleene star.

**How the definition helps.** The expression definition builds in all three closure rules. For a finite automaton, star instead takes a construction that can restart the machine after an accepting run (our own). To apply the expression proof to automata, use Kleene’s theorem, which proves that both definitions give the same languages.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “If A is a regular language, A\* (Kleene star) is a regular language. Due to this, the empty string language {ε} is also regular.”

**Sources:** none listed. No primary source with a working link was found.

### Sets of reachable states make nondeterministic automata deterministic

**Remember:** Track all possible states as one definite set.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic finite automaton can follow several transitions for a letter. Use the set of all currently reachable states as one state of a new machine. For each letter, take the union of the destinations from all states in the set.

**Problem.** Every nondeterministic finite automaton without empty-input moves has an equivalent deterministic finite automaton.

**How the definition helps.** Taking the union of destinations gives one next set for every letter (our own proof). Start with the set of initial states. By induction, after every prefix the stored set is exactly the set of reachable states. There are finitely many subsets, and a subset accepts precisely when it contains an original accepting state.

**Wikipedia:** [Powerset construction](https://en.wikipedia.org/wiki/Powerset_construction). It says: “In contrast, to simulate an NFA, one needs to keep track of a set of states: all of the states that the automaton could reach after seeing the same prefix of the input”

**Sources:** none listed. No primary source with a working link was found.

### The Nerode relation makes regularity a finite-index condition

**Remember:** States of the minimal automaton are what the future can still distinguish.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Fix a language L, a set of strings. Two strings x and y are Nerode equivalent if, for every string z, xz is in L exactly when yz is in L. This is an equivalence relation defined from L alone, with no automaton in sight.

**Problem.** A language L is regular exactly when the Nerode relation has finitely many classes. The number of classes is then the number of states of the minimal deterministic automaton, which is unique up to isomorphism.

**How the definition helps.** Equivalent prefixes stay equivalent after appending a letter, so reading a sends \[x\] to \[xa\] (our own argument). Start at the empty word’s class and accept classes contained in L. Every reachable state of any recognizer maps to the class of its reaching words, since those words have identical accepting suffixes. This map preserves transitions and acceptance and hits every class, so a minimal recognizer is isomorphic to the class automaton.

**Wikipedia:** [Myhill–Nerode theorem](https://en.wikipedia.org/wiki/Myhill%E2%80%93Nerode_theorem). It says: “The Myhill–Nerode theorem shows that finiteness is necessary and sufficient for language regularity.”

**Sources:**

- [A. Nerode, Linear automaton transformations, Proceedings of the American Mathematical Society 9 (1958) 541–544](https://doi.org/10.1090/S0002-9939-1958-0135681-9)

### The semantic Brzozowski derivative makes derivatives along words compose

**Remember:** Removing u and then v removes uv.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** For a language L and a word u, the derivative of L after u is the set of words w with uw in L.

**Problem.** The derivative of L after uv equals the derivative after v of the derivative after u.

**How the definition helps.** With the semantic definition, both sides contain w exactly when uvw lies in L. Wikipedia states that the derivative after a word reduces to successive derivatives after its symbols. The work moves to the syntax rules. One must prove that they compute the same language as the semantic definition.

**Wikipedia:** [Brzozowski derivative](https://en.wikipedia.org/wiki/Brzozowski_derivative). It says: “The derivative with respect to an arbitrary string reduces to successive derivatives over the symbols of that string”

**Sources:**

- [Janusz A. Brzozowski, Derivatives of Regular Expressions](https://doi.org/10.1145/321239.321249)

### Useful binary grammar rules make language finiteness decidable

**Remember:** A useful cycle in a binary grammar keeps adding letters.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Use grammar rules producing two variables or one letter, allowing only the start variable to produce the empty word. Keep the start variable off all right sides. Draw arrows to each right-side variable using only rules occurring in derivations of completed words from the start.

**Problem.** A context-free grammar in this form generates infinitely many words exactly when its graph contains a directed cycle.

**How the definition helps.** Each trip around a useful cycle adds a side branch that can produce a nonempty word (our own). Without a cycle, successful derivation trees have bounded depth, so only finitely many words occur (our own). Without the rule restriction, S → S and S → a give a cycle but only one word (our own). After conversion to normal form, discard variables that cannot finish, then discard those unreachable in the remaining grammar (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “It is decidable whether such a language is finite”

**Sources:** none listed. No primary source with a working link was found.

### The least submonoid definition gives induction for word repetition

**Remember:** A set closed under joining already contains every repetition.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The star of a language L is the smallest set containing L and the empty word that is closed under joining words end to end. Equivalently, it consists of all finite concatenations of words from L.

**Problem.** If a property holds for the empty word and every word in L and survives concatenation, it holds throughout the star of L.

**How the definition helps.** The words with the property form a set of the kind used in the definition (our own). The smallest such set, the star of L, lies inside it (our own). The work moves to proving that finite concatenations form exactly that smallest set (our own).

**nLab:** [regular language](https://ncatlab.org/nlab/show/regular+language). It says: “is the smallest submonoid of V∗ that contains L(R).”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint blocks reverse independently

**Remember:** Reverse the block rule, then reverse the order of the partitions.

*True by definition.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 2: later undergraduate.

**Definition.** At each step, a block cellular automaton partitions the grid into disjoint finite blocks of the same shape. Each block updates by the same map on configurations over a finite state alphabet. Every assignment of states to cells is allowed.

**Problem.** Each step is invertible exactly when the block rule is a permutation. The inverse of a schedule of steps uses the inverse rules in reverse order.

**How the definition helps.** Invert each block independently because its cells occur in no other block at that step. If two block states have the same output, changing just that block gives a collision. The work moves to checking a single finite table rather than finding a reverse rule for the whole grid, our own explanation.

**Wikipedia:** [Block cellular automaton](https://en.wikipedia.org/wiki/Block_cellular_automaton). It says: “As long as the rule for evolving each block is reversible, the entire automaton will also be.”

**Sources:**

- [Norman Margolus (1984), Physics-like models of computation](https://doi.org/10.1016/0167-2789(84)90252-5)

### Shift polynomials generate Rule 90 patterns

**Remember:** Raise the shift sum to get the pattern at any time.

*True by definition.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 2: later undergraduate.

**Definition.** Rule 90 updates each bit on the integer line by adding its two neighbors modulo two. Encode a configuration with finitely many live cells by the Laurent polynomial ∑ᵢ bᵢxⁱ over the two-element field, where bᵢ is bit i.

**Problem.** Start with only the origin live. At time t, every second cell from −t to t gives the parity of the corresponding entry in row t of Pascal’s triangle.

**How the definition helps.** In our own proof, multiplication turns t updates into one power, whose coefficients the binomial theorem gives directly. Multiplication by x shifts a bit one position right, and division by x shifts it left. Adding those shifts modulo two proves the polynomial rule agrees with the cell update. Its expansion uses exponents spaced two apart, so all intervening cells are zero.

**Wikipedia:** [Rule 90](https://en.wikipedia.org/wiki/Rule_90). It says: “The diagram has a 1 wherever Pascal's triangle has an odd number, and a 0 wherever Pascal's triangle has an even number.”

**Sources:**

- [Olivier Martin, Andrew M. Odlyzko, and Stephen Wolfram (1984), Algebraic properties of cellular automata](https://doi.org/10.1007/BF01223745)

### Real time excludes stale reads

**Remember:** A finished write comes before a later read.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** A sequential register read returns the last value written, or the initial value before any write. A history of completed register operations is linearizable if some sequential ordering gives the observed read results and respects real time. Whenever an operation finishes before another starts, the first must precede the second in that ordering.

**Problem.** In a linearizable register, a read that starts after a write completes cannot return the older value if there is no other write.

**How the definition helps.** Real-time order forces the read to follow the write in the sequential order (our own). For example, one process finishes writing 1 and another then reads the initial 0 (our own). Sequential consistency permits that result by placing the reader first. The work moves to proving that all results admit one sequential order within their time intervals.

**Wikipedia:** [Linearizability](https://en.wikipedia.org/wiki/Linearizability), [Sequential consistency](https://en.wikipedia.org/wiki/Sequential_consistency). It says: “If an operation op₁ completes (gets a response) before op₂ begins (invokes), then op₁ precedes op₂ in σ.”

**Sources:**

- [Maurice P. Herlihy and Jeannette M. Wing, Linearizability: A Correctness Condition for Concurrent Objects (1990)](https://doi.org/10.1145/78969.78972)

### Boundary relations stack strips

**Remember:** Match the shared boundary to stack two strips.

*True by definition.* MSC 68R05 (Combinatorics in computer science), 05B45. arXiv cs.DM. Level 2: later undergraduate.

**Definition.** Use fixed-orientation square tiles with colored edges, requiring equal colors wherever tiles touch. The row relation contains (a,b) exactly when some doubly infinite valid row has bottom colors a and top colors b. Composition joins two boundary pairs when the first top sequence equals the second bottom sequence.

**Problem.** The nth power of the one-row relation describes exactly the possible boundaries of strips of height n.

**How the definition helps.** In our own argument, composition records exactly the condition for stacking strips without storing their interior tiles. Matching middle colors let us join any two strips with that seam. Conversely, cutting a strip supplies the middle sequence. The work lies in finding rows that realize the specified boundaries.

**Paper or page:** [The domino problem is decidable for robust tilesets](https://arxiv.org/abs/2402.04438v1). It says: “there exists a valid tiling by τ of ℤ × \[0;n−1\] the horizontal strip of height n.”

**Sources:**

- [Nathalie Aubrun, Manon Blanc, Olivier Bournez, The domino problem is decidable for robust tilesets, arXiv:2402.04438v1](https://arxiv.org/abs/2402.04438v1)

### Augmenting paths test maximum matchings

**Remember:** A larger matching leaves a path with one extra edge.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science). arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** A matching in a finite undirected graph is a set of edges with no shared endpoints. An augmenting path has distinct vertices, uses at least one edge, and begins and ends at vertices untouched by the matching. Its edges alternate between edges outside the matching and edges in it.

**Problem.** A matching has maximum size exactly when it has no augmenting path.

**How the definition helps.** Swapping edge membership along an augmenting path increases the matching size by one (our own argument). Conversely, the edges in exactly one of two matchings form alternating paths and even cycles. If one matching is larger, some path has one more edge from that matching. Its endpoints are unmatched in the smaller matching, so the path augments it.

**Wikipedia:** [Berge's theorem](https://en.wikipedia.org/wiki/Berge%27s_theorem). It says: “D consists of paths and even cycles”

**Sources:** none listed. No primary source with a working link was found.

### Layered walks test divisibility

**Remember:** Count steps by changing layers.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C20. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a finite strongly connected directed graph containing a cycle, the period is the greatest common divisor of the directed cycle lengths. For positive k, the layered graph has vertices (v,i) for each vertex v and residue i modulo k. Each original arrow u→v gives arrows (u,i)→(v,i+1) for every residue i.

**Problem.** Let k be a positive integer at most the number of vertices. The period is divisible by k exactly when copy zero of a fixed vertex reaches no other copy of that vertex.

**How the definition helps.** The layer records the walk length modulo k (our own). If k divides every cycle length, decomposing a closed walk into cycles shows it returns to layer zero. Otherwise, take a walk from the fixed vertex to an offending cycle and back. Inserting one lap changes its final layer, so at least one of the two walks returns in a nonzero layer.

**Paper or page:** [The complexity of computing the period and the exponent of a digraph](https://arxiv.org/abs/2408.05762v2). It says: “k divides the period of G if and only if there is no undirected path”

**Sources:**

- [Stefan Kiefer, Andrew Ryzhikov, The complexity of computing the period and the exponent of a digraph, arXiv:2408.05762v2](https://arxiv.org/abs/2408.05762v2)

### Reweighting preserves shortest paths

**Remember:** The middle potentials cancel.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Assign each vertex v of a finite directed graph a number h(v), called its potential. Add h(u) − h(v) to the weight of each edge from u to v.

**Problem.** Reweighting preserves the shortest paths between any fixed pair of vertices. If no cycle has negative weight, some potential makes every edge weight nonnegative.

**How the definition helps.** Intermediate potentials cancel, so paths with fixed endpoints gain the same amount (our own). Add a source with zero-weight edges to all vertices. Without negative cycles, Bellman–Ford computes finite distances h from that source. Every edge u→v of weight w satisfies h(v)≤h(u)+w, so its new weight is nonnegative.

**Wikipedia:** [Johnson's algorithm](https://en.wikipedia.org/wiki/Johnson%27s_algorithm). It says: “It works by using the Bellman–Ford algorithm to compute a transformation of the input graph that removes all negative weights”

**Sources:**

- [Donald B. Johnson, Efficient Algorithms for Shortest Paths in Sparse Networks (1977)](https://doi.org/10.1145/321992.321993)

### Twin classes replace sets with counts

**Remember:** Same class and same membership counts mean the names can be shuffled.

*True by definition. Confidence: medium.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a finite simple undirected graph, two vertices are twins if they have the same neighbors outside the pair. For an indexed list of vertex sets, each vertex’s pattern lists the indices of sets containing it. Within each twin class, count the vertices of every pattern.

**Problem.** Two lists of vertex sets with the same counts differ only by a relabeling that preserves adjacency. Any property of the sets that ignores vertex names therefore agrees for both lists.

**How the definition helps.** Per-class counts discard vertex names while retaining precisely the information needed to match two choices by permutations within classes. In our own proof, pair vertices with the same pattern in each class. Swapping twins preserves adjacency, so the resulting permutation preserves every edge and carries each chosen set to its partner. The paper proves a related statement about formulas evaluated on numerical descriptions of sets.

**Paper or page:** [Simplified Algorithmic Metatheorems Beyond MSO: Treewidth and Neighborhood Diversity](https://arxiv.org/abs/1703.00544v5). It says: “Then either each realization μ of σ satisfies φ or no realization of σ satisfies φ.”

**Sources:**

- [Simplified Algorithmic Metatheorems Beyond MSO: Treewidth and Neighborhood Diversity](https://arxiv.org/abs/1703.00544v5)

### Mechanical Sturmian words are balanced because their block sums telescope

**Remember:** Add consecutive differences to count the ones in any block.

*True by definition. Confidence: medium.* MSC 68R15 (Combinatorics on words), 37B10. arXiv math.CO, math.DS. Level 2: later undergraduate.

**Definition.** A Sturmian word is an infinite binary sequence with exactly n + 1 distinct length-n blocks for each n ≥ 1. The mechanical definition writes its letters as successive differences of ⌊nθ + x⌋ or successive differences of ⌈nθ + x⌉. Here θ is irrational in (0, 1) and x is real.

**Problem.** Every Sturmian word is balanced, meaning that any two blocks of equal length differ in their counts of ones by at most one. The frequency of ones is θ.

**How the definition helps.** By the mechanical characterization of Sturmian words, adjacent floor or ceiling differences telescope (our own argument). For floors, a block of length n starting at m contains ⌊(m+n)θ+x⌋−⌊mθ+x⌋ ones. This count is either ⌊nθ⌋ or ⌈nθ⌉, also for ceilings, proving balance. Dividing the initial block count by n gives the limiting frequency θ.

**Wikipedia:** [Sturmian word](https://en.wikipedia.org/wiki/Sturmian_word). It says: “The sequence w is Sturmian if it is the difference of non-homogeneous Beatty sequences, that is, for some x∈\[0,1) and some irrational θ∈(0,1)”

**Sources:**

- [M. Morse, G. A. Hedlund, Symbolic dynamics II. Sturmian trajectories, Amer. J. Math. 62 (1940) 1–42](https://doi.org/10.2307/2371431)

### Consistent heuristics prevent reopening

**Remember:** Consistency means every reweighted edge still has nonnegative cost.

*Rules out counterexamples.* MSC 68T20 (Problem solving in the context of artificial intelligence (heuristics, search strategies, etc.)). arXiv cs.AI. Level 2: later undergraduate.

**Definition.** A\* expands a vertex minimizing its known path cost plus its heuristic h. Consistency requires h(goal)=0 and h(u)≤c(u,v)+h(v) for every edge u→v of cost c(u,v).

**Problem.** On a finite graph with nonnegative edge costs, A\* with a consistent heuristic finds a cheapest path to each vertex by its first expansion.

**How the definition helps.** Consistency makes each reweighted cost c(u,v)+h(v)−h(u) nonnegative. Along paths the adjustments telescope, so A\* orders vertices as Dijkstra’s algorithm does with these costs. For a counterexample, take S→A, S→B, B→A and A→G with costs 3, 1, 1 and 3 (our own). With h(B)=4 and all other estimates zero, A\* expands A at cost 3 before discovering cost 2.

**Wikipedia:** [Consistent heuristic](https://en.wikipedia.org/wiki/Consistent_heuristic). It says: “then A\* is equivalent to best-first search on that graph using Dijkstra's algorithm.”

**Sources:**

- [Peter E. Hart, Nils J. Nilsson, and Bertram Raphael (1968), A Formal Basis for the Heuristic Determination of Minimum Cost Paths](https://doi.org/10.1109/TSSC.1968.300136)

### Stable models reject circular support

**Remember:** A loop cannot start a derivation without a seed.

*Rules out counterexamples.* MSC 68T27 (Logic in artificial intelligence), 68T30. arXiv cs.AI. Level 2: later undergraduate.

**Definition.** For a finite ground program with one atom per rule head, form the reduct relative to a proposed set I of true atoms. Discard rules with a negated atom in I, then erase all remaining negative premises. I is stable when it equals the smallest set closed under the resulting rules.

**Problem.** Each fact in a stable model has a finite derivation using the reduct. A cycle of rules cannot establish its own facts without an outside derivation.

**How the definition helps.** Build the least model of the reduct by adding only facts whose premises already hold, our own explanation. At any stage, an unseeded positive cycle has nothing to add. The one-rule program “p if p” admits {p} under ordinary satisfaction, but its only stable model is empty, our own example. The underlying theorem identifies the least model of positive rules with the result of this forward iteration.

**Wikipedia:** [Stable model semantics](https://en.wikipedia.org/wiki/Stable_model_semantics). It says: “We say that I is a stable model of P if I is the stable model of the reduct of P relative to I.”

**Sources:** none listed. No primary source with a working link was found.

### Moral graphs make blankets symmetric

**Remember:** If I am your neighbor, you are mine.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 2: later undergraduate.

**Definition.** In a Bayesian network, the graphical Markov blanket of a vertex contains its parents, its children and its children’s other parents, and nothing else. The moral graph joins every pair of parents of a common child and makes every edge undirected.

**Problem.** In a Bayesian network, one node belongs to another node’s graphical Markov blanket exactly when the reverse holds.

**How the definition helps.** In our own proof, membership becomes adjacency in an undirected graph, which is symmetric. Each original arrow accounts for a parent or child. Each added edge accounts for a shared child. These observations identify the neighbor definition with the original list.

**Paper or page:** [Markov Blanket Discovery using Minimum Message Length](https://arxiv.org/abs/2107.08140). It says: “For any two distinct variables Xᵢ, Xⱼ ∈ X: Xⱼ ∈ MBᵢ ⇔ Xᵢ ∈ MBⱼ.”

**Sources:**

- [Markov Blanket Discovery using Minimum Message Length](https://arxiv.org/abs/2107.08140)

### Coefficients test higher-order monotonicity

**Remember:** Read the sign from the highest coefficient.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Fix k≥1 and k+1 planar points with distinct horizontal coordinates. The points are positive if some k-times differentiable function through all of them has nonnegative kth derivative everywhere on the interval spanning their coordinates.

**Problem.** The points are positive exactly when the coefficient of xᵏ in their interpolating polynomial is nonnegative. Likewise, some function through them has a nonpositive kth derivative everywhere exactly when that coefficient is nonpositive.

**How the definition helps.** For the interpolating polynomial P, the kth derivative equals k! times its xᵏ coefficient (our own proof). Thus a nonnegative coefficient gives a witness directly. For any witness f, the difference f−P vanishes at k+1 distinct coordinates, so repeated Rolle’s theorem gives f⁽ᵏ⁾=P⁽ᵏ⁾ somewhere between them. Applying the same argument with signs reversed proves the nonpositive case.

**Paper or page:** [Higher-order Erdos--Szekeres theorems](https://arxiv.org/abs/1111.3824v3). It says: “and it equals f⁽ᵏ⁾(x)/k! (which is a constant function).”

**Sources:**

- [Marek Elias, Jiri Matousek, Higher-order Erdos–Szekeres theorems, arXiv:1111.3824v3](https://arxiv.org/abs/1111.3824v3)

### Difference sets turn clearance into distance

**Remember:** The shortest difference vector is the clearance between the shapes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG, cs.GR. Level 2: later undergraduate.

**Definition.** For two shapes, form the set of all vectors a−b, with one point from each shape. It records their possible relative positions. The direct distance definition searches pairs of points in the two shapes.

**Problem.** For two nonempty compact shapes, their minimum distance is the distance from the origin to their difference set. Zero distance means the shapes intersect.

**How the definition helps.** The lengths of all difference vectors are exactly the pairwise distances (our own proof). Compactness ensures the shortest length is attained. This length is zero exactly when some pair consists of the same point.

**Wikipedia:** [Gilbert–Johnson–Keerthi distance algorithm](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Johnson%E2%80%93Keerthi_distance_algorithm). It says: “the configuration space obstacle (CSO) of two convex shapes, more commonly known as the Minkowski difference.”

**Sources:**

- [Elmer G. Gilbert, Daniel W. Johnson, and S. Sathiya Keerthi (1988), A fast procedure for computing the distance between complex objects in three-dimensional space](https://doi.org/10.1109/56.2083)

### Half edges encode rotation around vertices

**Remember:** Cross the edge, then step along the next face.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 68P05. arXiv cs.GR, cs.CG. Level 2: later undergraduate.

**Definition.** Take a polygon mesh with two incident faces per edge and one ring of faces around each vertex. Orient adjacent face boundaries oppositely along each shared edge. Each directed half edge stores its reverse, called its twin, and its successor along the oriented boundary of its face.

**Problem.** Starting from any outgoing half edge at a vertex, repeatedly taking the twin and then the successor visits every outgoing half edge before returning.

**How the definition helps.** In our own proof, the two stored links move directly to the next face in the ring. The twin ends at the vertex, so its successor starts there. A single ring gives one cycle containing every outgoing half edge. With only lists of face vertices, one must first identify matching edges and check the ring condition.

**Wikipedia:** [Doubly connected edge list](https://en.wikipedia.org/wiki/Doubly_connected_edge_list). It says: “A half-edge has a pointer to the next half-edge and previous half-edge of the same face.”

**Sources:** none listed. No primary source with a working link was found.

### Lower envelopes give power diagrams

**Remember:** Subtract the common square, then compare only planes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Give each center c in Euclidean space a real weight w. Its power at x is the squared distance from x to c minus w. Its power cell consists of points where this value is minimal among all centers, including ties.

**Problem.** Each power cell is the set where one affine function attains the pointwise minimum of all the functions. An affine function is a linear function plus a constant.

**How the definition helps.** Expanding the squared distance gives the term x·x for every center (our own). Removing that common term preserves every comparison and tie. The remaining affine function for center c is c·c−2c·x−w, so its minimizing region is exactly the power cell.

**Wikipedia:** [Power diagram](https://en.wikipedia.org/wiki/Power_diagram). It says: “The power diagram of n spheres in d dimensions is combinatorially equivalent to the intersection of a set of n upward-facing halfspaces”

**Sources:**

- [Franz Aurenhammer, Power Diagrams: Properties, Algorithms and Applications (1987)](https://doi.org/10.1137/0216006)

### Minimum trees need empty disks

**Remember:** A point inside the disk offers a shorter replacement.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** For distinct points p and q in a finite planar set, draw the closed disk with diameter pq. The Gabriel graph joins p and q exactly when this disk contains no third point.

**Problem.** A Euclidean minimum spanning tree connects all the points with minimum total edge length. Every edge of every such tree belongs to the Gabriel graph.

**How the definition helps.** In our own proof, a third point in the closed disk gives a shorter replacement whichever way deleting the tree edge splits the tree. Its distances to both endpoints are strictly less than the diameter because it differs from both endpoints. Connect it to the endpoint in the other component. This restores a tree and lowers the total length, contradicting minimality.

**Wikipedia:** [Gabriel graph](https://en.wikipedia.org/wiki/Gabriel_graph), [Euclidean minimum spanning tree](https://en.wikipedia.org/wiki/Euclidean_minimum_spanning_tree). It says: “The Gabriel graph contains, as subgraphs, the Euclidean minimum spanning tree, the relative neighborhood graph, and the nearest neighbor graph.”

**Sources:**

- [K. Ruben Gabriel and Robert R. Sokal, A New Statistical Approach to Geographic Variation Analysis (1969)](https://doi.org/10.2307/2412323)

### Minkowski optimization queries add

**Remember:** Maximize separately, then add the points.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** For nonempty polytopes P₁,…,Pᵣ in the same vector space, their Minkowski sum consists of all p₁+⋯+pᵣ with pᵢ∈Pᵢ for every i. An optimization oracle returns a point maximizing any requested linear function on its polytope.

**Problem.** One optimization query on a Minkowski sum needs only one query per summand, followed by addition.

**How the definition helps.** In our own argument, an oracle can maximize over each summand separately without listing the vertices of the sum. A linear function takes a sum of points to the sum of their values. Adding one maximizing point from each summand therefore gives a maximizing point for the whole sum. The work lies in answering the individual queries.

**Paper or page:** [Efficient edge-skeleton computation for polytopes defined by oracles](https://arxiv.org/abs/1412.3987v1). It says: “If P₁, …, Pᵣ ⊂ ℝᵈ are given by optimization oracles, then we compute an optimization oracle”

**Sources:**

- [Ioannis Z. Emiris, Vissarion Fisikopoulos, Bernd Gärtner, Efficient edge-skeleton computation for polytopes defined by oracles, arXiv:1412.3987v1](https://arxiv.org/abs/1412.3987v1)

### Plane equations transform normals

**Remember:** Apply the inverse map to the input of the plane equation.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.GR. Level 2: later undergraduate.

**Definition.** A normal covector to a plane is a nonzero linear functional that vanishes on every tangent vector to the plane. In coordinates its coefficient column n gives the tangent equation nᵀv=0.

**Problem.** Transport a plane equation by an invertible linear transformation. The new coefficient column equals the inverse transpose times the old column.

**How the definition helps.** Transporting the functional means evaluating it on the original tangent vector (our own derivation). Under an invertible matrix A, a transformed vector w comes from A⁻¹w. Substitution gives nᵀA⁻¹w=0, whose coefficient column is (A⁻¹)ᵀn.

**Wikipedia:** [Normal (geometry)](https://en.wikipedia.org/wiki/Normal_%28geometry%29). It says: “Therefore, one should use the inverse transpose of the linear transformation when transforming surface normals.”

**Sources:** none listed. No primary source with a working link was found.

### Turn signs order rays

**Remember:** From a hull corner, every turn compares two rays.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** For labeled planar points with no three on a line, the order type records the clockwise or counterclockwise turn of every ordered triple. This replaces the full coordinates. Fix a vertex a of the convex hull, the smallest convex set containing the points.

**Problem.** At a hull vertex a, put p before q when the turn from a through p to q is counterclockwise. This rule totally orders all other points.

**How the definition helps.** In our own argument, all rays from a hull vertex lie in an angle smaller than half a turn. Within that angle, the turn sign compares directions in their ordinary angular order. At the center of an equilateral triangle, the same comparison cycles through the three corners.

**Paper or page:** [A canonical tree decomposition for order types, and some applications](https://arxiv.org/abs/2403.10311v2). It says: “defines a strict total order on X ∖ {a}.”

**Sources:**

- [Mathilde Bouvel, Valentin Féray, Xavier Goaoc, Florent Koechlin, A canonical tree decomposition for order types, and some applications, arXiv:2403.10311v2](https://arxiv.org/abs/2403.10311v2)

### Recursive spline bases localize control edits

**Remember:** One control point affects only the knot spans its basis function covers.

*True by definition.* MSC 68U07 (Computer science aspects of computer-aided design), 68U05. arXiv cs.GR. Level 2: later undergraduate.

**Definition.** For nondecreasing knots tᵢ, Nᵢ,₀ indicates \[tᵢ,tᵢ₊₁). For p≥1, set Nᵢ,ₚ(x)=(x−tᵢ)Nᵢ,ₚ₋₁(x)/(tᵢ₊ₚ−tᵢ)+(tᵢ₊ₚ₊₁−x)Nᵢ₊₁,ₚ₋₁(x)/(tᵢ₊ₚ₊₁−tᵢ₊₁), treating any term with zero denominator as zero. With control points Pᵢ, the spline curve is ∑ᵢ Nᵢ,ₚ(x)Pᵢ.

**Problem.** Changing one control point of a degree-p B-spline can affect the curve only within the closed interval covering its p+1 knot spans.

**How the definition helps.** Changing Pᵢ affects only its own basis-function term (our own proof). At degree zero that function vanishes outside one span. Each recursion uses two adjacent lower-degree functions, whose support intervals together lie in \[tᵢ,tᵢ₊ₚ₊₁\]. Induction gives the claimed bound.

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “the supports of the two terms in the B-spline recursion are different (the outermost subintervals are not common).”

**Sources:**

- [M. G. Cox (1972), The Numerical Evaluation of B-Splines](https://doi.org/10.1093/imamat/10.2.134)
- [Carl de Boor (1972), On calculating with B-splines](https://doi.org/10.1016/0021-9045(72)90080-9)

### Containment makes erosions compose

**Remember:** Two translations add before the probe has to fit.

*True by definition.* MSC 68U10 (Computing methodologies for image processing). arXiv cs.CV. Level 2: later undergraduate.

**Definition.** An erosion of a shape by a probe retains positions where the entire translated probe fits in the shape. A dilation by another probe forms all sums of one point from each set. In a binary image one can instead compute erosion by intersecting shifted copies of the image.

**Problem.** Eroding by B and then by C equals one erosion by the set of all sums b+c from B and C.

**How the definition helps.** In our own proof, successive containment tests require every point x+c+b to lie in the original shape. These are exactly the points of the sum probe translated by x. The work lies in identifying the containment definition with the intersection used in image processing. A position belongs to every shifted image exactly when every point of its translated probe lies in the image.

**Wikipedia:** [Erosion (morphology)](https://en.wikipedia.org/wiki/Erosion_%28morphology%29). It says: “The erosion satisfies (A⊖B)⊖C = A⊖(B⊕C), where ⊕ denotes the morphological dilation.”

**Sources:** none listed. No primary source with a working link was found.

### Arithmetic maps commute with dynamic programming

**Remember:** Preserve the arithmetic and you preserve the calculation.

*True by definition.* MSC 68W05 (Nonnumerical algorithms), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Write a finite calculation as an expression with two operations, their identity elements, and edge weights. A map preserves this arithmetic if it preserves both operations and identities and sends each input weight to its corresponding output weight.

**Problem.** For a finite acyclic path calculation, applying a map that preserves both operations and identities commutes with evaluating the calculation.

**How the definition helps.** One expression describes both calculations, so preserving its building blocks preserves its value. In our own path example, multiplication joins successive edges and addition combines alternatives. The usual direct check compares the two calculations step by step. Here induction on the expression does that work once, leaving only the preservation rules to check for each new map.

**Paper or page:** [Dynamic programming by polymorphic semiring algebraic shortcut fusion](https://arxiv.org/abs/2107.01752v5). It says: “then \\emph{shortcut fusion }applies to the function $f$”

**Sources:**

- [Dynamic programming by polymorphic semiring algebraic shortcut fusion](https://arxiv.org/abs/2107.01752v5)

### Live frontiers bound memory

**Remember:** Keep only the earlier values that some later calculation still needs.

*True by definition. Confidence: medium.* MSC 68W05 (Nonnumerical algorithms), 68W40. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Order the calculations so that every input comes before its use. At each cut in the order, count earlier results that a later calculation still needs. These results form the live frontier, and its largest size is the frontier width.

**Problem.** Assume the order and last uses are available, values and labels occupy constant space, and each update needs bounded input and constant temporary space. Excluding input and streamed output, the calculation needs at most a constant times one plus the frontier width in working words.

**How the definition helps.** Only live values can be needed again (our own single-pass argument). Keep each live value with its label, compute the next value, and discard values after their last use. The retained entries occupy constant space per frontier member, and each update adds only constant temporary space.

**Paper or page:** [Universal Hirschberg for Width Bounded Dynamic Programs](https://arxiv.org/abs/2512.10132v1). It says: “can be recomputed using additional workspace O(ω) (in words).”

**Sources:**

- [Universal Hirschberg for Width Bounded Dynamic Programs](https://arxiv.org/abs/2512.10132v1)

### Matchings test cuckoo placements

**Remember:** An overloaded set of keys has too few slots between them.

*Rules out counterexamples.* MSC 68W05 (Nonnumerical algorithms), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In cuckoo hashing, each key has a list of allowed storage locations. Draw an edge from the key to each allowed slot, counting each place in a shared location separately. If every key can use overflow storage, connect every key to each overflow slot.

**Problem.** A placement exists exactly when every set of keys has at least as many neighboring slots as keys.

**How the definition helps.** The slot graph exposes the obstruction directly when some keys have too few slots between them. In our own explanation, a valid placement picks one edge per key with no shared slot. Hall’s matching theorem says that such a choice exists exactly when every group of keys has enough neighboring slots. This tests whether a placement exists, regardless of how keys are inserted.

**Paper or page:** [Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications](https://arxiv.org/abs/2306.11220v1). It says: “the construction failure probability is equal to the probability that there exists a subset of left vertices X such that \|N(X)\| &lt; \|X\|”

**Sources:**

- [Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications](https://arxiv.org/abs/2306.11220v1)

### Residual reachability certifies maximum flow

**Remember:** When no flow can get through, inspect the cut.

*True by definition.* MSC 68W05 (Nonnumerical algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In a finite directed network with distinct source and sink, a feasible flow conserves flow elsewhere and satisfies 0≤f≤c on every edge of capacity c. Each edge contributes a forward residual edge of capacity c−f and a backward one of capacity f. Keep exactly the positive-capacity residual edges.

**Problem.** A flow is maximum exactly when its residual graph has no path from source to sink.

**How the definition helps.** A residual path permits an increase by its smallest residual capacity, reversing flow on backward steps (our own proof). Otherwise, the vertices reachable from the source form the source side of a cut. Every original edge leaving it is full, and every entering edge carries zero flow. Conservation makes the flow value equal the cut capacity, which bounds every feasible value from above.

**Wikipedia:** [Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm), [Max-flow min-cut theorem](https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem). It says: “When no more paths in step 2 can be found, s will not be able to reach t in the residual network.”

**Sources:**

- [L. R. Ford Jr. and D. R. Fulkerson, Maximal Flow Through a Network (1956)](https://doi.org/10.4153/CJM-1956-045-5)

### Lamport timestamps extend causal order

**Remember:** Advance past both clocks when a message arrives.

*True by definition.* MSC 68W15 (Distributed algorithms), 68M14. arXiv cs.DC. Level 2: later undergraduate.

**Definition.** An event happens before another if a chain of local steps and message deliveries leads from the first to the second. Each process gives successive events strictly increasing integer timestamps. At a receipt, it chooses a number greater than both its previous timestamp and the timestamp on the message.

**Problem.** Ordering events by timestamp and then by process identifier gives a total order that respects happened-before.

**How the definition helps.** Each link in a causal chain increases the timestamp, so the chain’s endpoints already appear in the required order. In our own explanation, the count replaces the need to trace every chain between processes. Events with equal timestamps must belong to different processes. A fixed order of distinct process identifiers breaks those ties consistently, including ties between events with no causal connection.

**Wikipedia:** [Lamport timestamp](https://en.wikipedia.org/wiki/Lamport_timestamp). It says: “Lamport timestamps can be used to create a total ordering of events in a distributed system”

**Sources:**

- [Leslie Lamport, Time, Clocks, and the Ordering of Events in a Distributed System (1978)](https://doi.org/10.1145/359545.359563)

### Vector clocks detect causality

**Remember:** Each coordinate records how far that process has reached you.

*True by definition.* MSC 68W15 (Distributed algorithms). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** Number each process’s events starting at one. Causal precedence is the transitive closure of local event order and the links from each send to its receipt. An event’s vector records each process’s largest event number among that event and its causal predecessors, using zero when none exists.

**Problem.** One event causally precedes another exactly when its vector is at most the other's in every coordinate and smaller in some coordinate.

**How the definition helps.** In our own proof, the vector records a prefix of each process’s events, so comparing vectors tests inclusion of causal histories. A single increasing timestamp can order events even when neither caused the other. The work lies in maintaining those prefixes locally by counting events and merging received clocks with coordinatewise maxima.

**Wikipedia:** [Vector clock](https://en.wikipedia.org/wiki/Vector_clock). It says: “every process also keeps track of the largest value of each of the other processes' clocks that it has so far been informed of.”

**Sources:**

- [Reinhard Schwarz and Friedemann Mattern, Detecting causal relationships in distributed computations: In search of the holy grail (1994)](https://doi.org/10.1007/BF02277859)

### Random minima measure set overlap

**Remember:** Both minima agree exactly when the union’s first element belongs to both sets.

*True by definition.* MSC 68W20 (Randomized algorithms), 68W25. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Choose a uniform random order on a finite universe and represent each nonempty set by its first element. Use the same order for both sets. The Jaccard similarity is the size of their intersection divided by the size of their union.

**Problem.** The probability that the two representatives agree equals the Jaccard similarity.

**How the definition helps.** The representatives agree exactly when the first union element belongs to the intersection. Every union element has the same chance of coming first. Counting favorable elements therefore gives the intersection size divided by the union size.

**Wikipedia:** [MinHash](https://en.wikipedia.org/wiki/MinHash). It says: “the element with the minimum hash value lies in the intersection A ∩ B. The probability of this being true is exactly the Jaccard index”

**Sources:**

- [Andrei Z. Broder, On the Resemblance and Containment of Documents (1997)](https://doi.org/10.1109/SEQUEN.1997.666900)

### Universal hashing bounds collisions

**Remember:** Count each colliding pair, then add its probability.

*True by definition.* MSC 68W20 (Randomized algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Choose a hash function at random from a family that maps keys to m bins. For any fixed pair of distinct keys, their chance of sharing a bin is at most 1/m. This replaces a single fixed hash function.

**Problem.** Fix n distinct keys before choosing the function. The expected number of unordered pairs sharing a bin is at most n(n − 1)/(2m).

**How the definition helps.** In our own proof, the defining probability bound applies separately to each of the n(n − 1)/2 pairs. Adding their probabilities gives the expected number of collisions, even when different pairs collide dependently. The work lies in constructing a family with that probability bound.

**Wikipedia:** [Universal hashing](https://en.wikipedia.org/wiki/Universal_hashing). It says: “This guarantees a low number of collisions in expectation, even if the data is chosen by an adversary.”

**Sources:**

- [J. Lawrence Carter and Mark N. Wegman, Universal Classes of Hash Functions (1979)](https://doi.org/10.1016/0022-0000(79)90044-8)

### Metric tours admit shortcuts

**Remember:** Skip a repeat without paying more.

*Rules out counterexamples.* MSC 68W25 (Approximation algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In the metric traveling salesman problem, the vertices form a finite metric space. Every pair has an edge whose cost is the distance between them. The triangle inequality says that going directly costs at most as much as going through another vertex.

**Problem.** Any closed walk visiting all vertices can be shortened to a tour that visits each vertex once before returning to its start. The tour costs no more than the walk.

**How the definition helps.** The triangle inequality permits skipping each repeated visit without increasing the cost. Keeping just the first visit to each vertex and returning to the start gives a tour. For a counterexample, give center-to-leaf edges cost 1 and leaf-to-leaf edges cost 10 on a graph with three leaves (our own). Returning through the center costs 6, while every tour costs 22.

**Wikipedia:** [Christofides algorithm](https://en.wikipedia.org/wiki/Christofides_algorithm). It says: “Thanks to the triangle inequality, even though the Euler tour might revisit vertices, shortcutting does not increase the weight,”

**Sources:**

- [Nicos Christofides, Worst-Case Analysis of a New Heuristic for the Travelling Salesman Problem (1976, published 2022)](https://doi.org/10.1007/s43069-021-00101-z)

### End markers make rotation sorting reversible

**Remember:** Use one unique marker to recover the start of a circular string.

*Rules out counterexamples.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Append a marker that does not occur in the input. Sort all cyclic rotations of the marked string and keep the last column. Without the marker, the same construction forgets which rotation was the input.

**Problem.** The last column of the sorted rotations determines the original string once a unique end marker is appended.

**How the definition helps.** The unique marker distinguishes the original row from its rotations. Without it, abc and bca give the same last column (our own). Starting with empty rows, repeatedly prepend the last-column letters and sort to obtain prefixes one letter longer (our own). After one round per character, the row ending in the marker gives the original marked string.

**Wikipedia:** [Burrows–Wheeler transform](https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform). It says: “all circular permutations of a string have the same Burrows–Wheeler transform.”

**Sources:** none listed. No primary source with a working link was found.

### Neighboring suffixes reveal shared prefixes

**Remember:** The shortest neighboring match limits the shared prefix of the endpoints.

*True by definition.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A suffix starts at a chosen position in a string and continues to its end. Sort the suffixes in dictionary order. For each adjacent pair, record how many initial characters agree before the first difference or the end of either suffix.

**Problem.** For two distinct suffixes, the length of their longest common prefix equals the smallest recorded length between their positions in sorted order.

**How the definition helps.** The sorted order forces any prefix shared by the endpoints to be common to the whole interval. Our own proof of the reverse bound uses equality of neighboring prefixes up to the minimum length. The work of answering repeated queries moves to preprocessing the array for interval minimum queries.

**Wikipedia:** [LCP array](https://en.wikipedia.org/wiki/LCP_array). It says: “the length of the longest prefix that is shared by all of these suffixes is the minimum value in the interval”

**Sources:**

- [Toru Kasai and colleagues, Linear-Time Longest-Common-Prefix Computation in Suffix Arrays and Its Applications (2001)](https://doi.org/10.1007/3-540-48194-X_17)

### Sorted suffixes group pattern matches

**Remember:** A pattern occurs exactly where it begins a suffix.

*True by definition.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A suffix is the part of a string from a chosen position to the end. A suffix array sorts these positions by their suffixes, in dictionary order rather than text order.

**Problem.** For a nonempty pattern, all matching starting positions form one possibly empty interval in the suffix array. Two binary searches find its ends.

**How the definition helps.** Dictionary order groups all suffixes that begin with the same prefix, so finding a pattern means finding one interval. A suffix between two matching suffixes must also match, because its first difference from the pattern would put it outside the interval (our own). Building the sorted array is the preprocessing cost (our own).

**Wikipedia:** [Suffix array](https://en.wikipedia.org/wiki/Suffix_array). It says: “these suffixes will be grouped together in the suffix array and can be found efficiently with two binary searches.”

**Sources:**

- [Udi Manber and Gene Myers, Suffix Arrays: A New Method for On-Line String Searches (1993)](https://doi.org/10.1137/0222058)

### Suffix links list ending matches

**Remember:** Follow shorter endings to report every word that ends here.

*True by definition.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In a dictionary of nonempty words, build a tree with one node for each distinct prefix, including the empty prefix at the root. Mark the nodes for whole words. Link every nonroot node to the node for its longest proper suffix, a shorter ending that also occurs in the tree.

**Problem.** After a text position, start at the longest matching prefix node that ends there. The marked nodes on its suffix-link chain, including the starting node, are exactly the dictionary words ending there.

**How the definition helps.** Suffix links list all candidate endings in decreasing length, replacing a separate search for each word. In our own proof, each shorter candidate is a suffix of the longest shorter candidate. Repeating the argument reaches every candidate, and the marks select exactly the whole words. The remaining work lies in building the links and maintaining the longest matching prefix as characters arrive.

**Wikipedia:** [Aho–Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm). It says: “There is a blue directed "suffix" arc from each node to the node that is the longest possible strict suffix of it in the graph.”

**Sources:**

- [Alfred V. Aho and Margaret J. Corasick, Efficient String Matching: An Aid to Bibliographic Search (1975)](https://doi.org/10.1145/360825.360855)

### Potential changes cancel

**Remember:** The intermediate potentials cancel.

*True by definition.* MSC 68W40 (Analysis of algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Assign each state of a data structure a number called its potential. Define the amortized cost of an operation as its actual cost plus the change in potential.

**Problem.** If the potential starts at zero and stays nonnegative, total amortized cost bounds total actual cost from above.

**How the definition helps.** The potential after one operation cancels the potential before the next, so the sum of amortized costs telescopes (our own). Only the final potential minus the initial zero remains, and it is nonnegative (our own). The work moves to finding a useful potential and bounding each amortized cost.

**Wikipedia:** [Amortized analysis](https://en.wikipedia.org/wiki/Amortized_analysis). It says: “The amortized cost is the immediate cost plus the change in potential.”

**Sources:** none listed. No primary source with a working link was found.

### Linearizability can be checked separately

**Remember:** Choose legal positions inside operation intervals, then merge those positions across objects.

*Makes the theorem clean to state or prove.* MSC 68M14 (Distributed systems), 68W15. arXiv cs.DC. Level 3: graduate.

**Definition.** For a history of completed operations, linearizability requires a serial ordering of all operations that gives the specified results for each object. Whenever one operation finishes before another starts, it must come first in that ordering.

**Problem.** Consider a finite history of completed operations, each on one object, with one outstanding call per process at most. The history is linearizable exactly when each object’s history is linearizable.

**How the definition helps.** The real-time rule lets us place each object’s serial order inside the operations’ actual time intervals. In our own proof, give each operation the latest call time among itself and its predecessors in its object’s order. Merging all objects’ lists by these times, keeping each object’s order at ties, gives a global order that respects real time. Conversely, restricting a global order to one object keeps both conditions.

**Wikipedia:** [Linearizability](https://en.wikipedia.org/wiki/Linearizability). It says: “If an operation op₁ completes (gets a response) before op₂ begins (invokes), then op₁ precedes op₂ in σ.”

**Sources:**

- [Maurice P. Herlihy and Jeannette M. Wing, Linearizability: A Correctness Condition for Concurrent Objects (1990)](https://doi.org/10.1145/78969.78972)

### Precise definitions turned Brewer's CAP conjecture into a theorem

**Remember:** During a partition, a store must choose between answering and staying consistent.

*Makes the theorem clean to state or prove.* MSC 68M14 (Distributed systems), 68P15. arXiv cs.DC, cs.DB. Level 3: graduate.

**Definition.** Consistency requires a serial order of completed register operations respecting real time, with each read returning the last written value or the initial value. Availability requires every request at a nonfailing node to complete successfully. Partition tolerance requires these guarantees even when the network loses all messages between two groups of nodes.

**Problem.** In the Gilbert–Lynch asynchronous register model, no implementation guarantees consistency and availability through every network partition.

**How the definition helps.** A partition can hide a completed write from a reader that must answer (our own proof). Drop every message between two groups of nonfailing nodes. Compare a run with no write to one where a writer in the first group completes a write changing the initial value. A later reader in the second group sees identical local histories, yet consistency requires different answers.

**Wikipedia:** [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem). It says: “In 2002, Seth Gilbert and Nancy Lynch of MIT published a formal proof of Brewer's conjecture, elevating it to a theorem.”

**Sources:**

- [S. Gilbert and N. Lynch, Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services, ACM SIGACT News 33 (2002) 51–59](https://doi.org/10.1145/564585.564601)

### Replica joins ignore order

**Remember:** Joining the same states gives the same result in any order.

*True by definition.* MSC 68M14 (Distributed systems). arXiv cs.DC. Level 3: graduate.

**Definition.** Partially order replica states with a common least initial state and a least upper bound for every pair. Each local update must produce a state at least as large as its input. Merging two states returns their least upper bound, called their join.

**Problem.** Replicas that start with the same initial state agree once they incorporate the same set of generated update states. Reordering or repeating those state deliveries does not change the result.

**How the definition helps.** Taking the least state above all incorporated updates makes their order and repetition irrelevant. In our own argument, merging two histories by a join gives the least state above their combined updates. An update at one replica already includes its previous state. The work lies in designing an order and updates with these properties.

**Wikipedia:** [Conflict-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). It says: “The merge function should compute the join for any pair of replica states”

**Sources:**

- [Marc Shapiro, Nuno Preguiça, Carlos Baquero, and Marek Zawirski, Conflict-Free Replicated Data Types (2011)](https://doi.org/10.1007/978-3-642-24550-3_29)

### Intrinsically typed terms make type preservation hold by construction

**Remember:** A reduction step cannot leave its type.

*True by definition.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** For each variable context Γ and type A, let Term(Γ,A) be the family generated by the language’s typed term constructors. Define reduction by a family of relations, one on Term(Γ,A) for every Γ and A. Each rule must construct a step in one such relation.

**Problem.** Every reduction step preserves the type of the term.

**How the definition helps.** Both endpoints of a step belong to the term family indexed by its context and type (our own explanation). For function application, constructing the reduction rule requires substitution that returns a term of the specified type. Relating these typed steps to raw steps requires a separate theorem (our own).

**nLab:** [intrinsic and extrinsic views of typing](https://ncatlab.org/nlab/show/intrinsic+and+extrinsic+views+of+typing). It says: “Like the syntactician's parts of speech, as a way of defining the grammar of well-formed expressions.”

**Sources:**

- [Philip Wadler, Wen Kokke and Jeremy G. Siek, Programming Language Foundations in Agda, DeBruijn chapter](https://plfa.github.io/DeBruijn/#reduction)

### Polymorphism only at let keeps type inference decidable

**Remember:** Polymorphism only at let keeps type inference decidable.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** At a let binding, Hindley–Milner generalizes the inferred type over every type variable free in that type but absent from the typing environment. Each use can instantiate those variables with monotypes. Every lambda parameter has one monotype throughout its scope.

**Problem.** In Hindley–Milner, every typable program without annotations has a principal type, a most general type of which all its other types are instances. Algorithm W finds it.

**How the definition helps.** Monomorphic parameters exclude the unrestricted polymorphic arguments of System F, for which Wells proved inference undecidable (our own comparison). Algorithm W uses most general unifiers and generalizes at let bindings. The Damas–Milner principal type theorem proves these choices yield a principal type (our own explanation).

**Wikipedia:** [Hindley–Milner type system](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system). It says: “the type system to allow only let-bound variable to have polymorphic types, while the parameters in lambda-abstractions must get a monomorphic type, type inference becomes decidable.”

**Sources:**

- [R. Hindley, The principal type-scheme of an object in combinatory logic, Transactions of the AMS 146 (1969) 29–60](https://doi.org/10.2307/1995158)
- [L. Damas and R. Milner, Principal type-schemes for functional programs, POPL 1982](https://doi.org/10.1145/582153.582176)

### Progress and preservation turn type safety into two inductive lemmas

**Remember:** Never stuck now, and still well typed after each step.

*Makes the theorem clean to state or prove.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Progress means that every closed, well-typed program is a value or can take a step. Preservation means that every step from a well-typed program yields a program of the same type.

**Problem.** If progress and preservation hold, a closed, well-typed program never reaches a stuck state. The method uses inductive typing arguments and extends to languages with references, exceptions and polymorphism.

**How the definition helps.** Preservation keeps every reachable state well typed by induction on the number of steps (our own). Progress then gives a value or a next step at every reachable state (our own).

**Wikipedia:** [Type safety](https://en.wikipedia.org/wiki/Type_safety). It says: “Computer scientists Andrew K Wright and Matthias Felleisen formulate a definition and proof technique for type safety in languages defined by operational semantics.”

**Sources:**

- [A. K. Wright and M. Felleisen, A syntactic approach to type soundness, Information and Computation 115 (1994) 38–94](https://doi.org/10.1006/inco.1994.1093)

### The value restriction keeps polymorphic references from breaking type safety

**Remember:** Only values, which run no effects, may get polymorphic types.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** The ML value restriction permits let generalization only for syntactic values, and only over type variables absent from the typing environment. Values here include variables, constants, functions and immutable data constructors applied to values. Allocating a reference counts as an application.

**Problem.** ML with mutable references and the value restriction is type safe. With unrestricted let-polymorphism over references, a well-typed program can apply an operation to the wrong type.

**How the definition helps.** The allocation in let c = ref (fn x ⇒ x) gives c one monomorphic reference type (our own example). Storing an integer function fixes its argument type, so applying the stored function to true fails type checking. Unrestricted generalization would allow both uses of the same cell.

**Wikipedia:** [Value restriction](https://en.wikipedia.org/wiki/Value_restriction). It says: “The value restriction prevents reference cells from holding values of different types and preserves type safety.”

**Sources:**

- [A. K. Wright, Simple imperative polymorphism, LISP and Symbolic Computation 8 (1995) 343–355](https://doi.org/10.1007/BF01018828)

### Defining the least Herbrand model as an intersection makes it test consequences

**Remember:** Intersect term models to keep just the forced facts.

*True by definition.* MSC 68N17 (Logic programming), 03B70, 03C05. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** Fix definite Horn clauses over a signature with a constant and no built-in equality. A Herbrand interpretation uses ground terms as elements, interprets functions by term formation and selects a set of true ground atoms. The least Herbrand model intersects those sets over all Herbrand interpretations satisfying every clause.

**Problem.** A variable-free atomic formula follows from a set of definite Horn clauses exactly when it holds in their least Herbrand model.

**How the definition helps.** An atomic formula lies in the intersection exactly when it holds in every Herbrand model, so one direction is by definition (our own). The rest of the work moves into two lemmas (our own). First, the intersection is itself a model, because each clause has one conclusion. Second, any model gives a Herbrand model with the same true variable-free atomic formulas, because the clauses are universal sentences.

**Wikipedia:** [Horn clause](https://en.wikipedia.org/wiki/Horn_clause). It says: “An atomic formula A is logically implied by D if and only if A is true in M.”

**Sources:**

- [M. H. van Emden and R. A. Kowalski, The Semantics of Predicate Logic as a Programming Language (1976)](https://doi.org/10.1145/321978.321991)

### Continuation-passing form makes call-by-name and call-by-value agree on closed terms

**Remember:** Already evaluated arguments leave no choice about when to evaluate them.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 68Q55. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** In continuation-passing form, each function passes its result to a continuation. In the restricted form here, every application has a variable or lambda abstraction as its argument.

**Problem.** On closed lambda terms in this continuation-passing form, call-by-name and call-by-value take the same evaluation steps. Thus they return the same result or both run forever.

**How the definition helps.** At each evaluation step, the argument is a lambda abstraction because the term is closed and neither strategy reduces under abstractions (our own). Both strategies therefore perform the same substitution. Substituting that closed value preserves the argument restriction, so the reasoning repeats.

**nLab:** [continuation-passing style](https://ncatlab.org/nlab/show/continuation-passing+style). It says: “Whenever a procedure in "direct style" would return a value (v), the corresponding procedure in CPS instead invokes the continuation with that value (k(v)).”

**Wikipedia:** [Continuation-passing style](https://en.wikipedia.org/wiki/Continuation-passing_style). It says: “every argument in a function call must be either a variable or a lambda expression (not a more complex expression).”

**Sources:**

- [G. D. Plotkin, Call-by-name, call-by-value and the λ-calculus, Theoretical Computer Science 1 (1975)](https://doi.org/10.1016/0304-3975(75)90017-1)

### The monoidal definition of applicative functors makes their composites applicative

**Remember:** Pair the outer effects first, then the inner effects.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 18M05. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** An applicative endofunctor F on sets has a unit in F(1). For every A and B it has a natural pairing F(A) × F(B) → F(A × B). Pairing obeys the left unit, right unit and associativity laws under the canonical product identifications.

**Problem.** The composite of two applicative functors on sets is applicative.

**How the definition helps.** The composite pairs outer values first, then applies F to the inner pairing (our own construction). Its unit comes from applying F to the inner unit map 1 → G(1) and evaluating at the outer unit. Naturality and the two functors’ unit and associativity laws give the composite laws.

**nLab:** [applicative functor](https://ncatlab.org/nlab/show/applicative+functor). It says: “Unlike monads, applicative functors are closed under composition.”

**Sources:**

- [Conor McBride and Ross Paterson, Applicative Programming with Effects](https://www.staff.city.ac.uk/~ross/papers/Applicative.html)

### Sampled catalogs save searches

**Remember:** Find one position, then follow links and check its neighbors.

*True by definition.* MSC 68P10 (Searching and sorting). arXiv cs.DS. Level 3: graduate.

**Definition.** Working backward, augment each sorted list with every second entry of the next augmented list, starting with its second entry. Each entry links to the first value at least its own in its original list and the next augmented list, where applicable. Use an end position for a missing value and link end positions to end positions.

**Problem.** With n entries across k nonempty sorted lists, this structure uses O(n) space. It finds the first entry at least as large as a query in every list in O(log n + k) time.

**How the definition helps.** Every second entry is sampled, so a link into the next augmented list can overshoot the query’s lower bound by at most one (our own). Binary search finds the first augmented position, and each original-list link gives that list’s answer. Follow the next augmented link and check its predecessor. If S counts all augmented entries, at most S/2 are copies, giving S ≤ 2n.

**Wikipedia:** [Fractional cascading](https://en.wikipedia.org/wiki/Fractional_cascading). It says: “each earlier list Mᵢ is formed by merging Lᵢ with every second item from Mᵢ₊₁.”

**Sources:**

- [Bernard Chazelle and Leonidas J. Guibas, Fractional Cascading: I. A Data Structuring Technique (1986)](https://doi.org/10.1007/BF01840440)

### Universal models test conjunctive queries

**Remember:** Map the witnesses from one model into every model.

*True by definition.* MSC 68P15 (Database theory), 68T30. arXiv cs.DB, cs.AI. Level 3: graduate.

**Definition.** A universal model of a database and its rules maps into every model by a map that preserves facts and named values. A Boolean conjunctive query asks whether some values make a given conjunction of facts true. The usual certain-answer test asks about all models.

**Problem.** For database facts and existential rules with a universal model, a Boolean conjunctive query follows exactly when it holds in that model.

**How the definition helps.** In our own proof, a map from the universal model carries the query witnesses into every other model and preserves every required fact. Conversely, any query true in every model holds in the universal model itself.

**Paper or page:** [Connecting Proof Theory and Knowledge Representation: Sequent Calculi and the Chase with Existential Rules](https://arxiv.org/abs/2306.02521). It says: “then a universal model can be constructed witnessing that (D, R) ⊭ ∃x q(x).”

**Sources:**

- [Connecting Proof Theory and Knowledge Representation: Sequent Calculi and the Chase with Existential Rules](https://arxiv.org/abs/2306.02521)

### Ciphertext integrity strengthens privacy

**Remember:** Reject fresh ciphertexts and decryption adds no useful information.

*Rules out counterexamples.* MSC 68P25 (Data encryption (aspects in computer science)), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** Ciphertext integrity requires that an efficient observer has negligible probability of producing a new ciphertext that decrypts successfully, even after requesting encryptions. Negligible means smaller than every inverse polynomial for sufficiently large security parameters. New means that encryption never returned that ciphertext, even if it returned another one carrying the same message.

**Problem.** Suppose a secret-key cipher has ciphertext integrity and hides which of two chosen equal-length messages it encrypts, even with access to encryption. It still hides that choice with access to decryption before and after the challenge, provided the observer cannot submit the challenge for decryption afterward.

**How the definition helps.** In our own proof, simulated decryption uses recorded encryption answers and rejects every other permitted query. It can disagree with actual decryption only on a fresh ciphertext that decrypts successfully. Guessing the first such query among polynomially many would yield a forgery, so disagreement has negligible probability. The simulation otherwise needs only encryption access, where privacy already holds.

**Wikipedia:** [Authenticated encryption](https://en.wikipedia.org/wiki/Authenticated_encryption). It says: “Katz and Yung investigated the notion under the name "unforgeable encryption" and proved it implies security against chosen ciphertext attacks.”

**Sources:**

- [Mihir Bellare and Chanathip Namprempre, Authenticated Encryption: Relations among Notions and Analysis of the Generic Composition Paradigm](https://doi.org/10.1007/s00145-008-9026-x)

### Defining differential privacy by a probability ratio makes it compose

**Remember:** One person's data can move any output probability by at most a factor exp(ε).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.ME. Level 3: graduate.

**Definition.** Databases are neighbors when they differ in one person’s record. For every ordered pair of neighbors D,D′ and measurable output event S, ε-differential privacy requires Pr\[M(D) ∈ S\] ≤ exp(ε) Pr\[M(D′) ∈ S\].

**Problem.** Differential privacy composes. t queries that are each ε-private and use independent randomness are together tε-private, and any processing of an ε-private output stays ε-private.

**How the definition helps.** Independent releases multiply the probability bounds, giving exp(ε)ᵗ = exp(tε) for their joint distribution (our own proof). Processing the output tests an event through its preimage. For randomized processing, averaging over independent processing randomness preserves the same bound.

**Wikipedia:** [Differential privacy](https://en.wikipedia.org/wiki/Differential_privacy). It says: “The property of composition permits modular construction and analysis of differentially private mechanisms”

**Sources:**

- [Dwork, C.; McSherry, F.; Nissim, K.; Smith, A. (2006). Calibrating noise to sensitivity in private data analysis. Theory of Cryptography (TCC 2006), LNCS 3876, 265–284.](https://doi.org/10.1007/11681878_14)

### Privacy curves compare testing risks

**Remember:** Each prior strictly between zero and one selects a point on the curve.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data). arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** Fix output distributions P and Q. For every real ε, define the privacy curve as the maximum of P(A) − exp(ε)Q(A) over events A. Testing risk is the probability of guessing the wrong distribution when the prior probability of P is π.

**Problem.** Compare two ordered pairs of output distributions. The first curve lies above or on the second everywhere exactly when its minimum risk is no greater for every prior.

**How the definition helps.** Minimizing risk maximizes the weighted difference in the privacy curve (our own derivation). Choosing P on A gives risk π − πP(A) + (1 − π)Q(A). For 0 &lt; π &lt; 1, the minimum equals π minus π times the curve at ε = log((1 − π)/π). These priors cover every real ε, and either endpoint gives zero minimum risk.

**Paper or page:** [Beyond the Calibration Point: Mechanism Comparison in Differential Privacy](https://arxiv.org/abs/2406.08918v3). It says: “∀ π ∈ \[0,1\]: Rₘᵢₙ(π) ≤ R̃ₘᵢₙ(π).”

**Sources:**

- [Georgios Kaissis, Stefan Kolek, Borja Balle, Jamie Hayes, Daniel Rueckert, Beyond the Calibration Point: Mechanism Comparison in Differential Privacy (2025)](https://arxiv.org/abs/2406.08918v3)

### Privacy defined on output distributions cannot be broken by post-processing

**Remember:** Whatever you compute from a private answer stays private.

*True by definition.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.TH. Level 3: graduate.

**Definition.** Consider every ordered pair D,D′ of databases differing in one person and every measurable output event S. A mechanism M is ε-differentially private if Pr\[M(D) ∈ S\] ≤ exp(ε) Pr\[M(D′) ∈ S\] in every such case.

**Problem.** If M is ε-differentially private and g is any function, possibly randomized, that does not look at the data again, then g(M(·)) is ε-differentially private.

**How the definition helps.** Every measurable event after deterministic processing corresponds to its preimage before processing (our own proof). Applying the privacy inequality to that preimage gives the same bound. For randomized processing, condition on its independent randomness and average the bounds.

**Paper or page:** [Differentially Private Algorithms for Synthetic Power System Datasets](https://arxiv.org/abs/2303.11079v1). It says: “If query Q̃ satisfies ε-DP, then g∘Q̃(y), where g is an arbitrary, data-independent post-processing of the query answer, also satisfies ε-DP.”

**Sources:**

- [Vladimir Dvorkin, Audun Botterud, Differentially Private Algorithms for Synthetic Power System Datasets, IEEE Control Systems Letters 7 (2023) 2053–2058, arXiv:2303.11079](https://arxiv.org/abs/2303.11079v1)

### Postselection makes PP a quantum class

**Remember:** Condition on a possible outcome, then demand bounded error.

*True by definition.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 68Q15. arXiv cs.CC, quant-ph. Level 3: graduate.

**Definition.** A language belongs to PostBQP if a uniform polynomial-time quantum algorithm designates a postselection event of positive probability on every input. Conditional on that event, the algorithm answers correctly with probability at least 2/3 on every input.

**Problem.** PP is closed under intersection. Beigel, Reingold and Spielman first proved this using rational approximation (our own historical note).

**How the definition helps.** Independent PostBQP tests can condition jointly on both postselection events (our own proof). First amplify each conditional success probability above 5/6 by independent repetition and majority vote. Accept only if both tests accept, so the conditional error is below 1/3 by the union bound. Aaronson’s equality PostBQP = PP transfers closure to PP.

**Paper or page:** [Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape](https://arxiv.org/abs/2507.03692), [Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape](https://arxiv.org/abs/2507.03692). It says: “In 2004, Aaronson introduced the complexity class PostBQP (BQP with postselection) and showed that it is equal to PP.”

**Sources:**

- [David Miloschewsky, Supartha Podder, Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape, arXiv:2507.03692 (2025)](https://arxiv.org/abs/2507.03692)
- [Scott Aaronson, Quantum computing, postselection, and probabilistic polynomial-time, Proceedings of the Royal Society A (2005)](https://doi.org/10.1098/rspa.2005.1546)

### Alternating machines put the polynomial hierarchy inside PSPACE

**Remember:** Remove the bound on switches to get alternating polynomial time.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q10. arXiv cs.CC. Level 3: graduate.

**Definition.** At level k ≥ 1, an alternating polynomial-time machine switches between existential and universal branching at most k − 1 times per path. An existential state accepts if some successor accepts, and a universal state accepts if every successor accepts. The initial branching type selects the existential or universal class.

**Problem.** Every level of the polynomial hierarchy lies in PSPACE, the class of decision problems solvable with polynomial memory.

**How the definition helps.** Dropping the switch bound places each level inside alternating polynomial time. The alternating time characterization AP = PSPACE then gives the inclusion. Equivalence with the oracle definition identifies these levels with the usual hierarchy (our own).

**Wikipedia:** [Polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy). It says: “so that we only require that our alternating Turing machine runs in polynomial time, then we have the definition of the class AP, which is equal to PSPACE.”

**Sources:**

- [A. K. Chandra, D. C. Kozen, L. J. Stockmeyer, Alternation, Journal of the ACM 28 (1981)](https://doi.org/10.1145/322234.322243)

### Bounded quantifiers prove polynomial hierarchy collapse when complementary classes agree

**Remember:** Two adjacent existential blocks can share one witness.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)). arXiv cs.CC. Level 3: graduate.

**Definition.** A language lies in Σₖ if membership has a polynomial-time predicate preceded by k alternating blocks of quantifiers over polynomially bounded strings, starting existentially. For Πₖ the first block is universal.

**Problem.** If Σₖ = Πₖ for some k ≥ 1, then every higher level of the polynomial hierarchy has the same classes.

**How the definition helps.** Adjacent existential blocks merge by encoding their witnesses together (our own proof). A Σₖ₊₁ test adds an existential block to a Πₖ test. Under the hypothesis, replace the inner test by a Σₖ test and merge the first two blocks. Complements give the universal case, and induction gives every higher level.

**Wikipedia:** [Polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy). It says: “If any Σₖᴾ = Σₖ₊₁ᴾ, or if any Σₖᴾ = Πₖᴾ, then the hierarchy collapses to level k: for all i &gt; k, Σᵢᴾ = Σₖᴾ.”

**Sources:** none listed. No primary source with a working link was found.

### The class BPP does not depend on its error bound

**Remember:** A fixed positive advantage over guessing grows under independent majority votes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q10. arXiv cs.CC. Level 3: graduate.

**Definition.** BPP is the class of decision problems that a probabilistic Turing machine solves in polynomial time. A probabilistic Turing machine is one that can flip fair coins while it runs. The machine may give a wrong answer, but with probability at most 1/3 on every input.

**Problem.** Any constant error bound strictly between 0 and 1/2 in place of 1/3 defines the same class BPP.

**How the definition helps.** Independent repetitions turn a fixed advantage over guessing into exponentially small majority error by the Chernoff bound (our own proof). Any positive constant target error therefore takes only a constant number of repetitions, preserving polynomial time.

**Wikipedia:** [BPP (complexity)](https://en.wikipedia.org/wiki/BPP_%28complexity%29). It says: “the choice of 1/3 in the definition is arbitrary.”

**Sources:**

- [Gill, J. (1977). Computational complexity of probabilistic Turing machines. SIAM Journal on Computing 6(4), 675–695.](https://doi.org/10.1137/0206049)

### Time-constructible bounds make the time hierarchy theorem true

**Remember:** A machine must be able to set its own alarm clock.

*Rules out counterexamples.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 3: graduate.

**Definition.** A function f on the natural numbers is time-constructible if a deterministic Turing machine computes f(n) in binary from unary n in O(f(n)) time.

**Problem.** For time-constructible f with f(n) ≥ n, DTIME(o(f(n)/log f(n))) is strictly contained in DTIME(f(n)). DTIME(t(n)) consists of problems decidable in deterministic time O(t(n)).

**How the definition helps.** Constructibility supplies the clock for the diagonal simulation in the deterministic time hierarchy theorem (our own explanation). The gap theorem gives bounds T for which even squaring T leaves the time class unchanged. Such a gap cannot satisfy the hierarchy conclusion for f = T².

**Wikipedia:** [Constructible function](https://en.wikipedia.org/wiki/Constructible_function), [Gap theorem](https://en.wikipedia.org/wiki/Gap_theorem). It says: “To formulate them precisely, it is necessary to have a precise definition for a natural function f for which the theorem is true.”

**Sources:**

- [Hartmanis, J.; Stearns, R. E. (1965). On the computational complexity of algorithms. Transactions of the AMS 117, 285–306.](https://doi.org/10.1090/S0002-9947-1965-0170805-7)
- [Borodin, A. (1972). Computational complexity and the existence of complexity gaps. Journal of the ACM 19(1), 158–174.](https://doi.org/10.1145/321679.321691)

### Log-space reductions keep P-completeness from being trivial

**Remember:** A reduction must be weaker than the class it measures.

*Rules out counterexamples.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** A language B in P is P-complete under log-space reductions if every A in P admits a deterministic log-space computable function f. For every input x, membership of x in A must equal membership of f(x) in B.

**Problem.** Under log-space reductions, the circuit value problem is P-complete, so a fast parallel algorithm for it would give NC = P. Under polynomial-time reductions, every problem in P other than the empty language and the language of all strings would be P-complete.

**How the definition helps.** Log-space reductions do not automatically let the reduction decide an arbitrary source language in P (our own comparison). With polynomial time, decide the source and output a fixed yes-instance or no-instance of any nontrivial target. Ladner’s circuit value theorem supplies log-space completeness. Log-space reductions run in uniform NC, so an NC circuit value algorithm would put all of P in NC.

**Wikipedia:** [P-complete](https://en.wikipedia.org/wiki/P-complete), [Polynomial-time reduction](https://en.wikipedia.org/wiki/Polynomial-time_reduction). It says: “polynomial-time reductions cannot be used to define complete languages: if they were used in this way, every nontrivial problem in P would be complete.”

**Sources:**

- [R. E. Ladner, The circuit value problem is log space complete for P, SIGACT News 7 (1975)](https://doi.org/10.1145/990518.990519)

### Problems hard even with small numbers have no fast approximation scheme

**Remember:** Strongly hard means hard even with small numbers.

*Makes the theorem clean to state or prove.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68W25. arXiv cs.CC, cs.DS. Level 3: graduate.

**Definition.** A numerical optimization problem is strongly NP-hard if some fixed polynomial bound on all input numbers leaves its decision version NP-hard. A decision problem with this property is strongly NP-complete if it also belongs to NP.

**Problem.** A strongly NP-hard optimization problem with nonnegative integer objective bounded by a polynomial has no fully polynomial-time approximation scheme unless P = NP. Ordinary 0–1 knapsack admits a pseudo-polynomial algorithm and a fully polynomial-time approximation scheme.

**How the definition helps.** Integer objective values let sufficiently fine approximation recover an exact optimum (our own proof). For objective bound B ≥ 1, take ε = 1/(2B), making the additive error less than one. A fully polynomial scheme would then solve the NP-hard bounded instances in polynomial time.

**Wikipedia:** [Strong NP-completeness](https://en.wikipedia.org/wiki/Strong_NP-completeness). It says: “any strongly NP-hard optimization problem with a polynomially bounded objective function cannot have a fully polynomial-time approximation scheme (or FPTAS) unless P = NP.”

**Sources:**

- [Garey, M. R.; Johnson, D. S. (1978). "Strong" NP-completeness results: motivation, examples, and implications. Journal of the ACM 25(3), 499–508.](https://doi.org/10.1145/322077.322090)

### Fixed-point logic captures polynomial time once structures carry an order

**Remember:** Give the logic an order, and recursion computes exactly polynomial time.

*Rules out counterexamples.* MSC 68Q19 (Descriptive complexity and finite models), 03C13. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** An ordered finite structure includes a relation that linearly orders its universe. FO\[LFP\] extends first-order logic with least fixed points of relation operators defined by formulas positive in the relation variable.

**Problem.** On ordered finite structures, the properties definable in FO\[LFP\] are exactly those decidable in polynomial time (the Immerman–Vardi theorem).

**How the definition helps.** The built-in order supplies ordered positions for encoding a polynomial-time computation, as in the Immerman–Vardi theorem. Without the order, parity of the size of a plain set is a polynomial-time counterexample to definability (our own example). The order lets fixed-point iteration enumerate positions and simulate the computation.

**Wikipedia:** [Descriptive complexity theory](https://en.wikipedia.org/wiki/Descriptive_complexity_theory). It says: “First-order logic with a least fixed point operator gives P, the problems solvable in deterministic polynomial time, but uniquely on ordered structures.”

**Sources:**

- [N. Immerman, Relational queries computable in polynomial time, Information and Control 68 (1986) 86–104](https://doi.org/10.1016/s0019-9958(86)80029-8)
- [M. Y. Vardi, The complexity of relational query languages, STOC 1982](https://doi.org/10.1145/800070.802186)

### MSO gives linear time on bounded treewidth

**Remember:** Say it in MSO, and bounded treewidth makes it linear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q19 (Descriptive complexity and finite models), 05C83. arXiv cs.DS, cs.LO. Level 3: graduate.

**Definition.** An MSO₂ graph sentence uses vertex and edge variables, set variables for each sort, incidence, equality and set membership. Formulas use Boolean connectives and quantifiers over these variables. A property is MSO₂-definable if one such sentence holds exactly on the graphs with that property.

**Problem.** For each fixed k, every MSO-definable graph property can be decided in linear time on graphs of treewidth at most k (Courcelle's theorem).

**How the definition helps.** One fixed sentence specifies the property on every graph of bounded treewidth (our own explanation). Courcelle’s theorem converts that sentence into a finite tree automaton for tree decompositions. For fixed sentence and width bound, the resulting decision procedure takes linear time.

**Paper or page:** [Quantum-Inspired Perfect Matching under Vertex-Color Constraints](https://arxiv.org/abs/2209.13063). It says: “Let f be a formula in extended MSO. Then there is an algorithm which, on every graphs with n vertices and treewidth tw, decides whether f holds in G in O(F(\|f\|, tw)·n), for some computable function F.”

**Sources:**

- [Quantum-Inspired Perfect Matching under Vertex-Color Constraints, arXiv:2209.13063 (2022)](https://arxiv.org/abs/2209.13063)
- [Bruno Courcelle, The monadic second-order logic of graphs. I. Recognizable sets of finite graphs, Information and Computation (1990)](https://doi.org/10.1016/0890-5401(90)90043-h)

### Levin's average polynomial time survives a quadratic slowdown

**Remember:** Polynomial slowdowns shrink the tail exponent but keep it positive.

*Rules out counterexamples.* MSC 68Q25 (Analysis of algorithms and problem complexity), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** Give each binary input of length n equal probability, and let T be its running time. Levin’s tail condition requires constants C,c,ε &gt; 0 such that Pr\[T &gt; t\] ≤ Cnᶜ/t<sup>ε</sup> for every n,t ≥ 1.

**Problem.** Under Levin's definition, if A runs in average polynomial time, so does an algorithm B that takes the square of A's time. The naive definition by expected running time lacks this property.

**How the definition helps.** Squaring time replaces the threshold t by √t, so the same bound holds with exponent ε/2 (our own derivation). Consider time n² on every length-n input except one taking 2ⁿ steps. The exceptional input adds one to the mean but contributes 2ⁿ to the mean squared time. Its exponentially small probability still satisfies Levin’s bound for a sufficiently small positive exponent.

**Wikipedia:** [Average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity). It says: “Such a definition has various shortcomings; in particular, it is not robust to changes in the computational model.”

**Sources:**

- [L. A. Levin, Average case complete problems, SIAM Journal on Computing 15 (1986) 285–286](https://doi.org/10.1137/0215020)

### Smoothed complexity explains why the simplex method is fast in practice

**Remember:** Perturb each input, average its running time, then take the worst average.

*Makes the theorem clean to state or prove.* MSC 68Q25 (Analysis of algorithms and problem complexity), 90C60, 90C05. arXiv cs.CC, math.OC. Level 3: graduate.

**Definition.** Fix an input size, a normalized set of admissible inputs and a perturbation distribution. Smoothed running time is the supremum, over admissible inputs, of expected running time after perturbation. The expectation uses the noise distribution for that input.

**Problem.** Under Spielman and Teng’s normalized Gaussian perturbation model, their shadow vertex simplex algorithm has polynomial smoothed complexity. Many common pivot rules take exponentially many steps in the worst case.

**How the definition helps.** The definition averages separately around each possible input, so a rare slow perturbation contributes only in proportion to its probability (our own). Spielman and Teng’s smoothed simplex theorem bounds those averages uniformly by a polynomial in input size and inverse noise scale.

**Wikipedia:** [Smoothed analysis](https://en.wikipedia.org/wiki/Smoothed_analysis). It says: “Smoothed analysis is a hybrid of worst-case and average-case analyses that inherits advantages of both.”

**Sources:**

- [D. A. Spielman and S.-H. Teng, Smoothed analysis of algorithms: why the simplex algorithm usually takes polynomial time, STOC 2001](https://doi.org/10.1145/380752.380813)

### Prefix-free programs make Kolmogorov complexity subadditive

**Remember:** A self-delimiting program cannot hide information in its own length.

*Rules out counterexamples.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** A program set is prefix-free if no member is a proper prefix of another. Fix an optimal prefix-free machine, which simulates each prefix-free machine with constant program-length overhead. K(x) is the minimum length of a program on that machine that outputs x.

**Problem.** Prefix-free complexity is subadditive, K(x, y) ≤ K(x) + K(y) + O(1). Describing x and y together costs at most the two separate costs plus a constant.

**How the definition helps.** Two prefix-free programs can be concatenated and decoded in order (our own proof). A fixed machine runs each program and outputs the pair, adding only constant overhead on the optimal machine. For plain programs the boundary can carry unbounded information, and some pairs violate subadditivity by arbitrarily large constants.

**Wikipedia:** [Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). It says: “To fix this defect, we introduce the prefix-free Kolmogorov complexity.”

**Sources:**

- [Chaitin, G. J. (1975). A theory of program size formally identical to information theory. Journal of the ACM 22(3), 329–340.](https://doi.org/10.1145/321892.321894)

### The invariance theorem makes Kolmogorov complexity well defined

**Remember:** Change the language, and complexity changes by at most a constant.

*Makes the theorem clean to state or prove.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** For a description machine L, Cₗ(x) is the minimum length of an input on which L outputs x, or infinity if none exists. A universal interpreter U accepts each machine’s fixed self-delimiting code followed by its input and simulates that machine.

**Problem.** For every description language L, a universal interpreter U admits a constant c with Cᵤ(x) ≤ Cₗ(x) + c for every string x. Thus complexities for two universal interpreters differ by at most a constant.

**How the definition helps.** Prefix a shortest L-description of x with the fixed interpreter code for L (our own proof). The resulting U-description is longer by only the length of that code. Applying this argument in both directions compares any two such universal interpreters.

**Wikipedia:** [Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). It says: “By default, all equations hold only up to an additive constant.”

**Sources:**

- [Solomonoff, R. J. (1964). A formal theory of inductive inference. Part I. Information and Control 7(1), 1–22.](https://doi.org/10.1016/S0019-9958(64)90223-2)

### Distribution-free learning is characterized by finite VC dimension

**Remember:** Learnable for every distribution exactly when no large set is shattered.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 68T05. arXiv cs.LG, cs.CC. Level 3: graduate.

**Definition.** A binary concept class is PAC learnable if one learner has sample bound polynomial in 1/ε and 1/δ for all ε, δ ∈ (0,1). For every distribution and target concept, that many independent examples labeled by the target suffice for error ≤ ε with probability ≥ 1 − δ. Its VC dimension is the supremum of sizes of finite sets on which the class realizes every labeling.

**Problem.** Under mild measurability conditions, a concept class C is PAC learnable exactly when its VC dimension is finite (Blumer, Ehrenfeucht, Haussler and Warmuth).

**How the definition helps.** The distribution may concentrate on any shattered set, where unseen labels can vary independently (our own explanation). Unbounded shattered sets therefore preclude a uniform sample bound. Conversely, Sauer–Shelah bounds the number of sample labelings at finite dimension, and the VC uniform convergence theorem gives a polynomial sample bound for consistent learning.

**Wikipedia:** [Probably approximately correct learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning), [Vapnik–Chervonenkis dimension](https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension). It says: “Thus, the sample-complexity is a linear function of the VC dimension of the hypothesis space.”

**Sources:**

- [A. Blumer, A. Ehrenfeucht, D. Haussler and M. K. Warmuth, Learnability and the Vapnik–Chervonenkis dimension, Journal of the ACM 36 (1989) 929–965](https://doi.org/10.1145/76359.76371)

### Finite VC dimension is exactly uniform convergence of empirical frequencies

**Remember:** If a class cannot shatter large sets, sample frequencies converge uniformly.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62G20. arXiv cs.LG, stat.TH. Level 3: graduate.

**Definition.** The VC dimension is the supremum of sizes of finite sets S for which {A ∩ S : A ∈ 𝒞} contains every subset of S. Let Pₙ be the empirical law of n independent samples from P. Uniform Glivenko–Cantelli means that for every ε &gt; 0, supₚ Pr\[sup<sub>A∈𝒞</sub>\|Pₙ(A)−P(A)\| &gt; ε\] tends to zero as n grows.

**Problem.** A class of sets, with suitable measurability, is a uniform Glivenko–Cantelli class if and only if its VC dimension is finite. The classical case is the class of half-lines, which gives the Glivenko–Cantelli theorem for distribution functions.

**How the definition helps.** Shattering counts precisely which sample labelings the class can realize (our own explanation). The VC uniform convergence theorem uses symmetrization and the Sauer–Shelah bound for finite dimension. Conversely, distributions supported on arbitrarily large shattered sets prevent a uniform sample bound.

**Wikipedia:** [Glivenko–Cantelli theorem](https://en.wikipedia.org/wiki/Glivenko%E2%80%93Cantelli_theorem). It says: “Under certain consistency conditions, a universally measurable class of sets 𝒞 is a uniform Glivenko-Cantelli class if and only if it is a Vapnik–Chervonenkis class.”

**Sources:**

- [V. N. Vapnik and A. Ya. Chervonenkis, On the Uniform Convergence of Relative Frequencies of Events to Their Probabilities, Theory of Probability and Its Applications 16 (1971)](https://doi.org/10.1137/1116025)

### The Church–Rosser property separates distinct normal forms in lambda calculus

**Remember:** Convertible terms can meet, but normal forms cannot move.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 03B40. arXiv cs.LO. Level 3: graduate.

**Definition.** Two terms are convertible if a finite chain of forward or backward rewrite steps connects them. The Church–Rosser property requires every convertible pair to reach a common term by zero or more forward steps. A normal form admits no forward step.

**Problem.** Distinct normal forms cannot be convertible in a Church–Rosser system. In lambda calculus this separates the functions λx y. x and λx y. y, even after allowing renaming of bound variables.

**How the definition helps.** The Church–Rosser definition applies directly to convertibility, so the normal forms would have to meet. A normal form rewrites only to itself in zero or more steps, so the two forms would be equal (our own). Starting with confluence instead, one uses induction on a chain of forward and backward steps to obtain the common term (our own). For lambda calculus, the substantial work is proving confluence of beta reduction, the rewrite that applies a lambda function to its input (our own).

**Wikipedia:** [Confluence (abstract rewriting)](https://en.wikipedia.org/wiki/Confluence_%28abstract_rewriting%29). It says: “In a Church–Rosser system, an object has at most one normal form”

**Sources:**

- [A. Church, J. B. Rosser, Some properties of conversion, Transactions of the American Mathematical Society 39 (1936)](https://doi.org/10.1090/s0002-9947-1936-1501858-0)

### A basis of output tests decides stochastic state equivalence

**Remember:** Basis tests determine all the other output tests.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 3: graduate.

**Definition.** For each pair of equal-length input and output words, the test column lists the output word’s probability for that input from each starting state. Basis tests are tests whose columns form a basis of the span of all test columns.

**Problem.** Two starting distributions in a stochastic automaton give identical output probabilities on all input words exactly when they agree on the basis tests.

**How the definition helps.** In our own proof, agreement on the basis gives agreement on every test because each test column is a linear combination of basis columns. The probability under a starting distribution is its dot product with the column. Finding the basis requires showing when tests on longer words stop enlarging the span.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Two state distributions π and π′ of A are equivalent if and only if π Hₐ = π′ Hₐ.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

### An isolated threshold makes probabilistic acceptance regular

**Remember:** A gap turns approximate probabilities into exact yes-or-no answers.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** A finite probabilistic automaton reads letters and moves among finitely many states according to transition probabilities. It accepts a word when its probability of finishing in an accepting state exceeds a threshold. The threshold is isolated if every word’s probability stays at least some fixed ε &gt; 0 from it.

**Problem.** A finite probabilistic automaton with an isolated threshold recognizes a regular language, one that a deterministic finite automaton can recognize.

**How the definition helps.** An isolated threshold makes sufficiently close reachable distributions agree after every continuation (our own proof). Letter transitions cannot increase total variation distance, and distributions less than ε apart cannot give opposite decisions. Compactness covers the probability simplex by finitely many sets of diameter below ε. Thus there are finitely many continuation behaviors, which serve as deterministic states.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1), [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Let A be a stochastic acceptor with isolated cut point λ. Then the language L₍A,λ₎ is regular.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)
- [Michael O. Rabin. Probabilistic Automata. 1963.](https://doi.org/10.1016/S0019-9958(63)90290-0)

### Brzozowski derivatives give a finite automaton for each regular expression

**Remember:** After reading a word, check whether the empty suffix is allowed.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** The derivative of L by u is the language of all v with uv ∈ L. The derivative automaton starts at L and moves from each language to its derivative by the next letter. Its states are the reachable languages, and it accepts exactly at states containing the empty word.

**Problem.** The derivative automaton of a regular expression is finite and accepts exactly the language of the expression.

**How the definition helps.** After reading u, the state contains the empty word exactly when u belongs to L. For finiteness, take a finite deterministic automaton for the expression using Kleene’s theorem (our own argument). Each derivative is the continuation language of one reachable state, so there are only finitely many.

**Wikipedia:** [Brzozowski derivative](https://en.wikipedia.org/wiki/Brzozowski_derivative). It says: “A string u is a member of the string set denoted by a generalized regular expression R if and only if ε is a member of the string set denoted by the derivative u⁻¹R.”

**Sources:**

- [J. A. Brzozowski, Derivatives of regular expressions, Journal of the ACM 11 (1964)](https://doi.org/10.1145/321239.321249)

### Final-automaton semantics makes automaton maps preserve accepted languages

**Remember:** Every map followed by the final map gives the unique final map.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A map between deterministic automata over one alphabet commutes with every letter transition and preserves each state’s accepting or rejecting status. A final automaton receives exactly one such map from each automaton. The image of a state under that map gives its language.

**Problem.** Every map of automata preserves the language accepted from each state.

**How the definition helps.** Composing an automaton map with the target’s final map gives another final map from the source (our own proof). Uniqueness forces it to equal the source’s final map. Identifying final states with languages then gives equality of accepted languages.

**nLab:** [deterministic automaton](https://ncatlab.org/nlab/show/deterministic+automaton). It says: “This power set is precisely the set of all languages over the alphabet Σ”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Monadic second-order logic makes regular languages closed under bit-track projection

**Remember:** Erase a bit track by asking whether some set supplies it.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata), 03B70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** Over finite words, monadic second-order logic quantifies over positions and sets of positions, using their order, letter predicates and set membership. A sentence defines the language of words satisfying it.

**Problem.** Regular languages over letters (a, b), with b a bit, stay regular when the second coordinate is erased.

**How the definition helps.** Projection existentially quantifies the set of positions whose erased bit equals one (our own argument). For a regular language, the Büchi–Elgot–Trakhtenbrot theorem supplies a defining sentence. Replace each paired-letter predicate by the visible-letter test and the corresponding membership or nonmembership test. Existentially quantify the set, then apply the same theorem to recover regularity.

**Wikipedia:** [Büchi–Elgot–Trakhtenbrot theorem](https://en.wikipedia.org/wiki/B%C3%BCchi%E2%80%93Elgot%E2%80%93Trakhtenbrot_theorem), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “This boils down to induction over ¬, ∧, and existential quantification over monadic predicates. These correspond to complement, intersection, and projection (a restricted kind of homomorphism).”

**Sources:**

- [J. R. Büchi, Weak second-order arithmetic and finite automata, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 6 (1960)](https://doi.org/10.1002/malq.19600060105)

### Muller acceptance lets deterministic automata recognize every ω-regular language

**Remember:** Ask exactly which states recur, and determinism loses no power.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** An automaton on infinite words judges a run by the set of states it visits infinitely often. A Büchi automaton accepts if this set meets a given set of accepting states. A Muller automaton is given a family of state sets, and accepts if the set of states visited infinitely often is exactly one of them.

**Problem.** Every ω-regular language, that is, every language of a Büchi automaton, is recognized by a deterministic Muller automaton (McNaughton's theorem).

**How the definition helps.** A Muller family can describe exactly which sets of states may recur in a deterministic run (our own explanation). For finitely many ones, two states remember the last letter, and only the singleton zero-state set is allowed. McNaughton’s determinization theorem supplies the construction for every nondeterministic Büchi language.

**Wikipedia:** [Büchi automaton](https://en.wikipedia.org/wiki/B%C3%BCchi_automaton). It says: “But, McNaughton's Theorem and Safra's construction provide algorithms that can translate a Büchi automaton into a deterministic Muller automaton or deterministic Rabin automaton.”

**Sources:**

- [R. McNaughton, Testing and generating infinite sequences by a finite automaton, Information and Control 9 (1966) 521–530](https://doi.org/10.1016/S0019-9958(66)80013-X)

### Observable transitions let output words determine the final state

**Remember:** One allowed next state per step gives one final state.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** A stochastic automaton reads a letter, emits a letter and changes state according to fixed probabilities. Call it observable if each starting state and pair of input and output letters allow at most one next state with positive probability.

**Problem.** In an observable stochastic automaton, a starting state and a possible input and output word pair determine the final state.

**How the definition helps.** In our own proof, each successive input and output pair determines one successor whenever the observed sequence is possible. Repeating this step determines the final state. In our own counterexample, the machine always emits the same letter but chooses between two successors by flipping a coin.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “p(y,s′ ∣ x,s) ≠ 0 ⇒ s′ = γ(y,x,s).”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

### Parity acceptance complements deterministic automata by shifting every priority

**Remember:** Add one to every priority to flip its parity.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A deterministic automaton for infinite words has one run on each word if its transitions are complete. In a parity automaton, each state has a number called its priority. The run accepts if the smallest priority that occurs infinitely often is even.

**Problem.** The complement of a language accepted by a complete deterministic parity automaton has a complete deterministic parity automaton with the same number of states.

**How the definition helps.** Parity acceptance turns into its negation when all priorities increase by one (our own). The run does not change, and its least recurring priority switches between even and odd (our own). The Büchi rule instead asks whether an accepting state recurs infinitely often, which cannot be negated by swapping accepting states (our own). To extend the result to all regular languages of infinite words, the work moves to converting nondeterministic Büchi automata into equivalent deterministic parity automata.

**Wikipedia:** [Ω-automaton](https://en.wikipedia.org/wiki/%CE%A9-automaton). It says: “accepts ρ if and only if the smallest number in Inf(ρ) is even.”

**Sources:** none listed. No primary source with a working link was found.

### Visibly pushdown automata preserve intersection by synchronizing stack moves

**Remember:** Stack moves match, so one stack can hold pairs of symbols.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** A visibly pushdown alphabet partitions letters into calls, returns and internal letters. Every call pushes one symbol, every return pops one unless the stack is empty, and every internal letter leaves the stack unchanged.

**Problem.** Two visibly pushdown languages over the same split alphabet have a visibly pushdown intersection. General context-free languages need not have a context-free intersection.

**How the definition helps.** The shared alphabet keeps both stack heights equal, so one stack stores symbol pairs and one control state stores both states. The product accepts when both components accept. Without synchronized stack actions, two context-free languages can separately require i = j and j = k in words aⁱbʲcᵏ (our own counterexample). Their intersection requires i = j = k and is not context-free.

**Wikipedia:** [Nested word](https://en.wikipedia.org/wiki/Nested_word). It says: “For the intersection operation, one can construct a VPA M simulating two given VPAs M₁ and M₂ by a simple product construction”

**Sources:**

- [R. Alur, P. Madhusudan, Visibly pushdown languages, STOC 2004](https://doi.org/10.1145/1007352.1007390)

### Adding parallel or makes the Scott model of PCF fully abstract

**Remember:** The model had a function PCF could not write, so add it.

*Rules out counterexamples.* MSC 68Q55 (Semantics in the theory of computing), 06B35, 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A model is fully abstract if two terms of the same type have equal meanings exactly when all closing observation contexts give identical observable results. Parallel or returns true if either Boolean argument is true, false if both are false, and otherwise diverges.

**Problem.** Scott's model of PCF, built from domains and continuous functions, is not fully abstract (Plotkin). It becomes fully abstract once parallel or is added to the language.

**How the definition helps.** Parallel or supplies a context distinguishing Plotkin’s counterexample terms, whose meanings differ although sequential PCF contexts cannot distinguish them (our own explanation). Plotkin’s finite definability result for the extended language then yields full abstraction of the model.

**Wikipedia:** [Programming Computable Functions](https://en.wikipedia.org/wiki/Programming_Computable_Functions), [Denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics). It says: “This model is not fully abstract for PCF; but it is fully abstract for the language obtained by adding a parallel or operator to PCF.”

**Sources:**

- [G. D. Plotkin, LCF considered as a programming language, Theoretical Computer Science 5 (1977) 223–255](https://doi.org/10.1016/0304-3975(77)90044-5)
- [R. Milner, Fully abstract models of typed λ-calculi, Theoretical Computer Science 4 (1977) 1–22](https://doi.org/10.1016/0304-3975(77)90053-6)

### Compositional and adequate semantics turns equal meanings into identical observations

**Remember:** A context cannot distinguish equal meanings if meanings predict results.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Two same-type PCF phrases are observationally equivalent if every common closing numeric context yields the same numeral for both or diverges for both. Adequacy requires that for every closed numeric program and every numeral n, the program evaluates to n exactly when its meaning denotes n.

**Problem.** In PCF, a typed functional language with recursion, phrases of the same type with equal meanings in the adequate model are observationally equivalent. This includes agreement about whether a numeric observation terminates.

**How the definition helps.** Compositionality keeps meanings equal when the phrases are put into a context, and adequacy gives equal observations (our own). Testing observational equivalence directly would quantify over all the contexts (our own). The work moves into proving adequacy for the model, not just defining meanings for individual phrases (our own). Equal observations need not imply equal meanings (our own).

**Wikipedia:** [Denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics). It says: “An important tenet of denotational semantics is that semantics should be compositional: the denotation of a program phrase should be built out of the denotations of its subphrases.”

**Sources:**

- [G. D. Plotkin, LCF considered as a programming language, Theoretical Computer Science 5 (1977)](https://doi.org/10.1016/0304-3975(77)90044-5)

### Compositional semantics makes replacing equal-meaning subprograms safe by definition

**Remember:** Equal parts give equal wholes.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A denotational semantics assigns each well-typed program a mathematical object, called its meaning. It is compositional when each way of building a program from parts has a fixed operation on the meanings of the parts. An operational semantics instead describes how a program runs step by step.

**Problem.** In a compositional semantics, replacing a subprogram by one with the same meaning keeps the meaning of the whole program.

**How the definition helps.** Each program constructor applies a fixed operation to the meanings of its parts. Replacing an argument by an equal meaning therefore leaves the result equal. Induction on the surrounding program carries this equality to the whole program (our own proof).

**nLab:** [denotational semantics](https://ncatlab.org/nlab/show/denotational+semantics). It says: “the semantics of terms constructed from sub-terms is correspondingly built from the semantics of these sub-terms.”

**Sources:**

- [Dana S. Scott and Christopher Strachey, Toward a Mathematical Semantics for Computer Languages](https://www.cs.ox.ac.uk/files/3228/PRG06.pdf)

### Interpreting function types as exponentials validates applying lambda abstractions

**Remember:** Evaluating a curried map gives back the original map.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 18C50. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** An exponential Yˣ has an evaluation map ev from Yˣ × X to Y. For every f from Z × X to Y, exactly one map g from Z to Yˣ satisfies ev ∘ (g × idₓ) = f. Lambda abstraction denotes this map g.

**Problem.** In this semantics, applying a lambda abstraction to an argument has the same meaning as substituting the argument into its body.

**How the definition helps.** The evaluation equation recovers the body’s meaning from its curried map. Composing with the argument’s meaning supplies the value for the bound variable. The substitution lemma identifies that composite with the substituted body’s meaning (our own explanation).

**nLab:** [cartesian closed category](https://ncatlab.org/nlab/show/cartesian+closed+category). It says: “the universal property of Yˣ may be phrased thus: given any ψ: Z × X → Y, there exists a unique map”

**Sources:** none listed. No primary source with a working link was found.

### Testing in all contexts makes contextual equivalence a congruence by definition

**Remember:** A context inside a context is again a context.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Two same-type terms are contextually equivalent if every well-typed context closing both at an observable type gives identical observations for both. A context is a program with one hole.

**Problem.** If two terms are contextually equivalent, then so are their results in any well-typed context.

**How the definition helps.** Any closing observation context around the two larger terms composes with their shared inner context to give a closing context for the original terms. Contextual equivalence gives equal observations in that composite context (our own proof).

**Wikipedia:** [Observational equivalence](https://en.wikipedia.org/wiki/Observational_equivalence). It says: “in all contexts C\[...\] where C\[M\] is a valid term, it is the case that C\[N\] is also a valid term with the same value.”

**Sources:** none listed. No primary source with a working link was found.

### Every property is a safety property intersected with a liveness property

**Remember:** A bad prefix certifies a safety violation, while every prefix can still satisfy liveness.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 68Q85. arXiv cs.LO, cs.DC. Level 3: graduate.

**Definition.** A property is a set of infinite executions, that is, sequences of program states. It is a safety property if every execution that violates it has a finite prefix that no continuation can repair. It is a liveness property if every finite prefix can be extended to an execution that has the property.

**Problem.** Every property is the intersection of a safety property and a liveness property (Alpern and Schneider).

**How the definition helps.** Let S contain all executions whose every finite prefix extends to an execution in P (our own proof). A prefix with no such extension witnesses failure of S, so S is safety. Let L contain P and everything outside S. Every prefix either extends into P or has only extensions outside S, so L is liveness and S ∩ L = P.

**Wikipedia:** [Safety and liveness properties](https://en.wikipedia.org/wiki/Safety_and_liveness_properties). It says: “Alpern and Schneider gives the formal definition for liveness, accompanied by a proof that all properties can be constructed using safety properties and liveness properties.”

**Sources:**

- [B. Alpern and F. B. Schneider, Defining liveness, Information Processing Letters 21 (1985) 181–185](https://doi.org/10.1016/0020-0190(85)90056-0)

### The separating conjunction makes the frame rule sound for pointer programs

**Remember:** Prove a program on its own memory, and the rest stays untouched.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 03B47. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A heap satisfies P ∗ R if it splits into disjoint heaps satisfying P and R respectively. A valid partial-correctness triple {P} C {Q} requires safe execution from every P-state and a Q-state after every terminating execution.

**Problem.** For local commands, if {P} C {Q} holds and C modifies no free variable of R, then {P ∗ R} C {Q ∗ R} holds. This frame rule reuses a proof in a larger heap.

**How the definition helps.** Locality lets a safe execution on the P-heap extend to the larger heap while preserving the disjoint R-heap. The side condition preserves the variable values on which R depends. After termination the two heaps thus satisfy Q ∗ R (our own explanation).

**Wikipedia:** [Separation logic](https://en.wikipedia.org/wiki/Separation_logic). It says: “It says that a program that executes safely in a small state (satisfying P), can also execute in any bigger state (satisfying P ∗ R) and that its execution will not affect the additional part of the state”

**Sources:**

- [J. C. Reynolds, Separation logic: a logic for shared mutable data structures, LICS 2002](https://doi.org/10.1109/LICS.2002.1029817)

### Weakest liberal preconditions give Hoare logic a relative completeness proof

**Remember:** Use the weakest liberal precondition to choose the missing assertions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 03B70. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A partial-correctness Hoare triple says that if precondition P holds and program S stops, its final state satisfies postcondition R. The weakest liberal precondition for S and R holds in every state from which S either fails to stop or stops with R. In contrast, an ordinary weakest precondition also requires termination.

**Problem.** For a standard while language, assume the assertion language can express every weakest liberal precondition. Then Hoare logic proves all true partial-correctness triples if it may use all true assertions in the underlying arithmetic.

**How the definition helps.** The weakest liberal precondition supplies the missing assertions in Cook’s relative completeness proof (our own explanation). For a sequence, use the second command’s weakest liberal precondition as the middle assertion. For a loop, use the whole loop’s weakest liberal precondition as its invariant. Structural induction proves the weakest triple, and consequence gives every valid triple.

**Wikipedia:** [Predicate transformer semantics](https://en.wikipedia.org/wiki/Predicate_transformer_semantics). It says: “wlp(S, R), which yields the weakest condition under which S either does not terminate or establishes R.”

**Sources:**

- [S. A. Cook, Soundness and completeness of an axiom system for program verification, SIAM Journal on Computing 7 (1978)](https://doi.org/10.1137/0207005)

### Widening operators make abstract interpretation terminate on infinite lattices

**Remember:** Jump upward on purpose so the analysis must stop.

*True by definition.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 06B35. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** On a complete lattice with bottom ⊥, a widening x ∇ y bounds both x and y from above. For every increasing sequence yₙ, the sequence starting at x₀ = ⊥ with xₙ₊₁ = xₙ ∇ yₙ must eventually be constant.

**Problem.** For a monotone lattice endomap f, the iteration x₀ = ⊥, xₙ₊₁ = xₙ ∇ f(xₙ) stabilizes even in the presence of infinite increasing chains. Its final value bounds the least fixed point of f from above.

**How the definition helps.** Each iterate bounds its predecessor, so monotonicity makes f(xₙ) increasing and the widening condition gives stabilization (our own argument). At the stable value x, the upper-bound condition gives f(x) ≤ x. Knaster–Tarski places the least fixed point below every such x.

**Wikipedia:** [Abstract interpretation](https://en.wikipedia.org/wiki/Abstract_interpretation). It says: “For any ascending sequence (y′ₙ)ₙ≥₀, the sequence defined by x′₀ := ⊥ and x′ₙ₊₁ := x′ₙ ∇ y′ₙ is ultimately stationary.”

**Sources:**

- [P. Cousot and R. Cousot, Abstract interpretation: a unified lattice model for static analysis of programs by construction or approximation of fixpoints, POPL 1977](https://doi.org/10.1145/512950.512973)

### A prefix and suffix matrix gives the smallest weighted automaton

**Remember:** A state only needs to store independent future scores.

*Makes the theorem clean to state or prove.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 3: graduate.

**Definition.** A weighted automaton assigns each letter a matrix. It gives a word a real score by multiplying those matrices between a start row and an end column. The Hankel matrix instead lists the score of each prefix followed by each suffix.

**Problem.** A real word score comes from a finite weighted automaton exactly when its Hankel matrix has finite rank. That rank is the smallest possible state dimension.

**How the definition helps.** Appending a letter to prefixes acts linearly on Hankel rows by restricting their suffix coordinates (our own proof). In a row-space basis, these maps become transition matrices, the empty prefix supplies the start row, and the empty suffix reads the score. Conversely, any automaton factors each Hankel entry into a prefix row times a suffix column. Its dimension therefore bounds the rank, proving minimality.

**Paper or page:** [Neural Network Based Nonlinear Weighted Finite Automata](https://arxiv.org/abs/1709.04380v2). It says: “For any f : Σ∗ → ℝ, rank(f) = rank(H𝒇).”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodic syntactic monoids let us decide whether automata recognize star-free languages

**Remember:** Compute the syntactic monoid and test whether all powers stabilize.

*True by definition. Confidence: medium.* MSC 68Q70 (Algebraic theory of languages and automata), 20M35. arXiv cs.FL. Level 3: graduate.

**Definition.** Star-free expressions use letters, the empty word, the empty language, union, concatenation and complement, but not Kleene star. The syntactic monoid is the monoid of state transformations induced by words in the smallest deterministic automaton for the language. A finite monoid is aperiodic if a common exponent n gives xⁿ = xⁿ⁺¹ for every element x.

**Problem.** Given a finite automaton, one can decide whether its language has a star-free expression.

**How the definition helps.** Schützenberger’s theorem identifies star-free languages with those having aperiodic syntactic monoids. Determinize and minimize the input automaton, then enumerate the transformations generated by its letters (our own procedure). For a monoid of size n, test xⁿ = xⁿ⁺¹ for every x. By that power each sequence of powers has reached a cycle, and the test detects exactly the cycles of length one.

**Wikipedia:** [Star-free language](https://en.wikipedia.org/wiki/Star-free_language), [Syntactic monoid](https://en.wikipedia.org/wiki/Syntactic_monoid). It says: “Marcel-Paul Schützenberger characterized star-free languages as those with aperiodic syntactic monoids.”

**Sources:**

- [M.-P. Schützenberger, On finite monoids having only trivial subgroups, Information and Control 8 (1965)](https://doi.org/10.1016/s0019-9958(65)90108-7)

### Finite monoid tests let rational sets survive intersection

**Remember:** Track the finite test as the path product grows.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 3: graduate.

**Definition.** A monoid has an associative product and an identity. A rational subset consists of the label products along paths from a start vertex to designated end vertices in a finite graph. A recognizable subset is the inverse image of a subset of a finite monoid under a map preserving products and identity.

**Problem.** Intersecting a rational subset of a monoid with a recognizable subset gives a rational subset.

**How the definition helps.** In our own proof, augment each vertex with the image of the path product in the finite monoid. Start with the identity and multiply by each successive edge label’s image. Accept at designated end vertices whose stored product lies in the recognizing subset. The resulting finite graph describes the intersection.

**Wikipedia:** [Rational set](https://en.wikipedia.org/wiki/Rational_set). It says: “The intersection of a rational subset and a recognizable subset is rational.”

**Sources:** none listed. No primary source with a working link was found.

### Finite-monoid recognition preserves recognizability under inverse homomorphisms

**Remember:** Compose the maps and keep the same finite monoid.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 20M35. arXiv cs.FL, math.GR. Level 3: graduate.

**Definition.** A monoid is a set with an associative product and an identity. A subset S of a monoid is recognizable if S = ψ⁻¹(T) for a homomorphism ψ into a finite monoid and a subset T there. For the monoid of words under concatenation, this gives the same languages as finite automata.

**Problem.** If φ is a homomorphism from the monoid N to the monoid M and S is recognizable in M, then φ⁻¹(S) is recognizable in N.

**How the definition helps.** Taking the inverse image composes the recognizing homomorphism with φ (our own proof). If S = ψ⁻¹(T), then φ⁻¹(S) = (ψ ∘ φ)⁻¹(T). The composite still maps into the same finite monoid.

**Wikipedia:** [Recognizable set](https://en.wikipedia.org/wiki/Recognizable_set), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Recognizable sets are closed under inverse of homomorphisms. I.e. if N and M are monoids and φ:N→M is a homomorphism then if S∈REC(M) then φ⁻¹(S)={x∣φ(x)∈S}∈REC(N).”

**Sources:** none listed. No primary source with a working link was found.

### Implications for the star give regular expressions a finite complete axiom system

**Remember:** No finite list of equations suffices; two implications do the job.

*Makes the theorem clean to state or prove.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A Kleene algebra is an idempotent semiring with star, ordered by a ≤ b when a + b = b. For every a, it satisfies 1 + aa\* ≤ a\* and 1 + a\*a ≤ a\*. For all a and x, ax ≤ x implies a\*x ≤ x, and xa ≤ x implies xa\* ≤ x.

**Problem.** The Kleene algebra axioms are complete, so every true equation between regular expressions can be derived from them (Kozen, 1994).

**How the definition helps.** The two induction implications express closure under arbitrarily many repetitions with finitely many rules (our own explanation). Redko ruled out a finite complete system of equations alone. Kozen’s completeness theorem proves that the semiring, unfolding and induction laws derive every regular-language identity.

**Wikipedia:** [Kleene algebra](https://en.wikipedia.org/wiki/Kleene_algebra). It says: “Redko proved that no finite set of equational axioms can characterize the algebra of regular languages.”

**Sources:**

- [D. Kozen, A completeness theorem for Kleene algebras and the algebra of regular events, Information and Computation 110 (1994) 366–390](https://doi.org/10.1006/inco.1994.1037)

### Balanced counts preserve the uniform distribution

**Remember:** Count input words to get the probability of each output word.

*True by definition. Confidence: medium.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** A window is a finite set of output cells. Its input neighborhood contains all cells used to update that window. An update is balanced if, on every window, each output pattern comes from equally many assignments on its input neighborhood.

**Problem.** A finite-range update on a finite alphabet preserves the uniform independent distribution exactly when its local window counts are balanced.

**How the definition helps.** Every assignment on a finite input neighborhood has the same probability under the uniform independent law (our own proof). Thus output probabilities on a window are proportional to preimage counts, and they are uniform exactly when those counts agree. Finite-window probabilities determine the full distribution.

**Paper or page:** [Reversibility, balance and expansivity of non-uniform cellular automata](https://arxiv.org/abs/2507.06896). It says: “The uniform probability measure μ is invariant under Hθ.”

**Sources:**

- [Reversibility, balance and expansivity of non-uniform cellular automata](https://arxiv.org/abs/2507.06896)

### Finite windows detect surjectivity

**Remember:** Compactness turns successful finite tests into one input for the whole grid.

*Makes the theorem clean to state or prove.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** For a finite box B, its input neighborhood is the union of all cells read when updating B. The update passes the box test if every output assignment on B arises from some assignment on that input neighborhood.

**Problem.** A finite-range update on the full grid ℤᵈ over a finite alphabet is onto exactly when it can produce every pattern on every finite box.

**How the definition helps.** Fix a target configuration and exhaust the grid by increasing finite boxes (our own proof). Passing all tests gives nested nonempty sets of inputs matching the target on those boxes. These sets are closed because each depends on finitely many coordinates, so compactness gives an input in their intersection. Conversely, surjectivity supplies an input for any extension of any box pattern.

**Paper or page:** [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987). It says: “The $d$-dimensional global update rule $H\_\\theta $ is surjective if and only if the partial update rule $H<sub>\\theta \|C</sub>$ is surjective for all hypercubes $C\\subseteq \\mathbb{Z} ^d$”

**Sources:**

- [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987)

### Pre-injectivity detects finite collisions

**Remember:** Only finite changes can be swapped into a larger pattern.

*Rules out counterexamples.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** A cellular automaton updates each cell by the same rule on a fixed finite neighborhood. It is pre-injective if distinct inputs that differ at finitely many cells always give distinct outputs. Ordinary injectivity also compares inputs that differ at infinitely many cells.

**Problem.** On the full grid ℤᵈ with a finite alphabet, surjectivity is equivalent to pre-injectivity.

**How the definition helps.** Pre-injectivity excludes a finite collision that could be repeated inside many disjoint boxes, the obstruction in the Garden of Eden theorem (our own explanation). On ℤ, adding each bit to its right neighbor modulo two maps both constant inputs to zero. Yet every output has a preimage because one chosen input bit determines all others. The Garden of Eden counting argument relates finite collisions to missing output patterns.

**Paper or page:** [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987). It says: “The NUCA Hθ is surjective if and only if it is pre-injective.”

**Sources:**

- [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987)

### Bisimilarity as the union of all bisimulations gives proof by coinduction

**Remember:** To prove two processes equal, show one relation that keeps matching.

*True by definition.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO. Level 3: graduate.

**Definition.** A relation R on labeled states is a bisimulation if each step from either member of any related pair has a same-label match. The resulting successors must again form a pair in R, in their original order. Two states are bisimilar if some bisimulation relates them.

**Problem.** Bisimilarity is the largest bisimulation, and it is an equivalence relation. So to prove two states bisimilar, it is enough to give one bisimulation that relates them.

**How the definition helps.** A union of bisimulations still matches each step using whichever member contains the pair, so their union is the largest bisimulation. Identity, converse and composition preserve the matching conditions (our own argument). These facts give reflexivity, symmetry and transitivity of the union. Any one bisimulation therefore suffices to witness membership.

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “Since it is the union of all bisimulations, it is the unique largest bisimulation.”

**Sources:**

- [D. Park, Concurrency and automata on infinite sequences, in Theoretical Computer Science, LNCS 104, Springer 1981, 167–183](https://doi.org/10.1007/BFb0017309)

### Compatible configurations can merge

**Remember:** Keep every cause and check conflicts across the two sets.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68M14. arXiv cs.DC. Level 3: graduate.

**Definition.** A configuration records the events that have occurred and includes every cause of each recorded event. With binary conflict, a set is consistent when it contains no conflicting pair. A configuration must be consistent. An extension is a configuration containing the original one.

**Problem.** Two configurations in a binary conflict model have a common extension exactly when no event in one conflicts with an event in the other. Their union is then the least common extension.

**How the definition helps.** In our own argument, the union already contains all causes, so only a conflict between configurations can prevent a merge. Every set containing the union still contains any such pair. Without binary conflict, three events could be forbidden together even though every pair is allowed.

**nLab:** [event structure](https://ncatlab.org/nlab/show/event+structure). It says: “pairwise consistency implies mutual consistency.”

**Sources:** none listed. No primary source with a working link was found.

### Defining behavior by a terminal coalgebra makes bisimilar states behave equally

**Remember:** Two structure-preserving maps into a terminal coalgebra from one source agree.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** For a set functor F, a coalgebra has a state set X and a map c from X to F(X). A map h from (X,c) to (Y,d) preserves structure if d ∘ h = F(h) ∘ c. A terminal coalgebra receives exactly one such map from every coalgebra, assigning each state its behavior.

**Problem.** Let R be a relation between the states of two coalgebras that is itself a coalgebra with structure-preserving projections. Such a relation is called a bisimulation. Each pair in R then has states with equal behavior.

**How the definition helps.** Compose each projection from the bisimulation with the corresponding map to the terminal coalgebra. Both composites are coalgebra maps with the same source and terminal target. Terminality makes them equal, so each related pair has equal behaviors (our own application).

**nLab:** [terminal coalgebra for an endofunctor](https://ncatlab.org/nlab/show/terminal+coalgebra+for+an+endofunctor). It says: “By terminality of x, there is a unique coalgebra map f: F x → x.”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Defining bisimilarity as equal final behavior makes it an equivalence relation

**Remember:** Equality of behaviors already has the laws of an equivalence.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, cs.FL. Level 3: graduate.

**Definition.** Fix a label set A and give each state a finite set of successors paired with their labels. A behavior map sends each state to its image under the unique coalgebra map into the final system for this functor. Behavioral equivalence means equality of those images.

**Problem.** Strong bisimilarity on a finitely branching labelled transition system is an equivalence relation.

**How the definition helps.** Equality of images under one map is reflexive, symmetric and transitive. For the finite labeled powerset functor, the final coalgebra exists and behavioral equivalence coincides with strong bisimilarity (our own application of Rutten’s coalgebraic characterization).

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “the relation of bisimilarity—the join of all bisimulations—is an equivalence relation”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Defining bisimulations by relation inclusions makes their composites bisimulations

**Remember:** Push each step past one relation at a time.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, cs.FL. Level 3: graduate.

**Definition.** Write RS for relational composition in traversal order, and let Tₐ relate each state to its successors with label a. A relation R is a bisimulation if RTₐ ⊆ TₐR and R⁻¹Tₐ ⊆ TₐR⁻¹ for every label a.

**Problem.** The composite of two strong bisimulations on one labelled transition system is a strong bisimulation.

**How the definition helps.** For any label with transition relation T, push T past S and then past R (our own proof). This gives (RS)T = R(ST) ⊆ R(TS) = (RT)S ⊆ T(RS). Since (RS)⁻¹ = S⁻¹R⁻¹, the same argument gives the converse inclusion required for bisimulation.

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “Bisimulation can be defined in terms of composition of relations as follows.”

**Sources:** none listed. No primary source with a working link was found.

### Finite branching makes modal logic separate every pair of non-bisimilar states

**Remember:** With finitely many successors, equal modal theories mean bisimilar states.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A labelled transition system has states and labelled steps s → t between them. A bisimulation is a relation between states such that related states can match each other's steps and stay related. The system is finitely branching if each state has only finitely many successors for each label.

**Problem.** In a finitely branching labelled transition system, two states are bisimilar exactly when they satisfy the same modal formulas.

**How the definition helps.** For modally equivalent states, an unmatched successor would differ in theory from each of the finitely many candidate successors (our own proof). Conjoin distinguishing formulas true at that successor and put the conjunction under the action diamond, contradicting modal equivalence. Conversely, induction on formulas gives bisimulation invariance. Without finite branching, adding an infinite path beside paths of every finite length can preserve all modal formulas while breaking bisimilarity.

**Paper or page:** [Quantitative Hennessy-Milner Theorems via Notions of Density](https://arxiv.org/abs/2207.09187v2). It says: “The classical Hennessy-Milner theorem is an important tool in the analysis of concurrent processes; it guarantees that any two non-bisimilar states in finitely branching labelled transition systems can be distinguished by a modal formula.”

**Sources:**

- [Jonas Forster, Sergey Goncharov, Dirk Hofmann, Pedro Nora, Lutz Schröder, Paul Wild, Quantitative Hennessy-Milner Theorems via Notions of Density, arXiv:2207.09187 (2022)](https://arxiv.org/abs/2207.09187v2)
- [Matthew Hennessy, Robin Milner, Algebraic laws for nondeterminism and concurrency, Journal of the ACM 32 (1985)](https://doi.org/10.1145/2455.2460)

### Trace orders forget independent swaps

**Remember:** Keep dependent order and forget independent order.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68R15. arXiv cs.DC, cs.DM. Level 3: graduate.

**Definition.** A trace alphabet has a symmetric, irreflexive independence relation on action types. For a finite execution, label each occurrence by its action type and order every dependent pair by occurrence order. The reflexive transitive closure of these comparisons is the trace order.

**Problem.** Two finite action sequences give the same partial order up to a label-preserving isomorphism exactly when swaps of adjacent independent actions connect them.

**How the definition helps.** Swapping adjacent independent occurrences preserves every generating comparison (our own proof). Given an isomorphism, use it to identify the occurrences in the two sequences. Move the first desired occurrence to the front across only incomparable occurrences, whose labels must be independent. Repeat on the remaining occurrences.

**nLab:** [trace alphabet](https://ncatlab.org/nlab/show/trace+alphabet), [Mazurkiewicz trace](https://ncatlab.org/nlab/show/Mazurkiewicz+trace). It says: “Its models are based on labelled posets, the labelling being by a trace alphabet.”

**Sources:** none listed. No primary source with a working link was found.

### Bag subtrees bound covers

**Remember:** Disjoint bag subtrees certify nonadjacent vertices.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** A tree decomposition assigns sets of vertices of a finite graph, called bags, to nodes of a finite tree. Each edge has both ends in a bag. The bags containing any given vertex form a nonempty connected subtree.

**Problem.** Any nonempty set of vertices can be covered by at most α bags. Here α is the largest number of pairwise nonadjacent vertices in that set.

**How the definition helps.** Root the tree so each vertex subtree has a unique node nearest the root, its top (our own proof). Choose a remaining subtree with deepest top and remove all subtrees containing that top. Every remaining subtree intersecting the chosen one would contain its top, so the chosen subtrees are pairwise disjoint. Their vertices are pairwise nonadjacent, and their tops cover the set using at most α bags, strengthening the quoted bound.

**Paper or page:** [Computing Tree Decompositions with Small Independence Number](https://arxiv.org/abs/2207.09993v4). It says: “Then W is covered by a set of at most 2α(W)−1 bags of 𝒯.”

**Sources:**

- [Clément Dallard, Fedor V. Fomin, Petr A. Golovach, Tuukka Korhonen, Martin Milanič, Computing Tree Decompositions with Small Independence Number, arXiv:2207.09993v4](https://arxiv.org/abs/2207.09993v4)

### Vertex merging counts restricted maps

**Remember:** Count forbidden equalities by merging the vertices they identify.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C60. arXiv cs.DM, cs.DS. Level 3: graduate.

**Definition.** A map between finite graphs must send adjacent vertices to adjacent vertices. Draw a separate graph whose edges mark pairs of source vertices that must receive different images. For any subset of these extra edges, merge all vertices connected by them, keeping every original adjacency.

**Problem.** The number of graph maps that obey the restrictions is an alternating sum of ordinary graph map counts from quotient graphs.

**How the definition helps.** Merging along an edge subset forces exactly the equalities generated by those edges (our own derivation). Inclusion–exclusion counts maps avoiding every forbidden equality by summing the quotient counts with sign (−1)ᵐ for m selected edges. Grouping subsets that give the same partition yields the quoted coefficients.

**Paper or page:** [Counting Restricted Homomorphisms via Möbius Inversion over Matroid Lattices](https://arxiv.org/abs/1706.08414v1). It says: “\\\# \\mathsf{Hom}\_\\tau (H,G)=\\sum <sub>\\rho \\geq \\emptyset </sub> \\mu (\\emptyset ,\\rho )\\cdot \\\# \\mathsf{Hom}(H/\\rho ,G)”

**Sources:**

- [Counting Restricted Homomorphisms via Möbius Inversion over Matroid Lattices](https://arxiv.org/abs/1706.08414v1)

### A kernel replaces feature vectors in inner product algorithms

**Remember:** Compute feature inner products without building feature vectors.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 46E22. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** A real kernel on X is a symmetric function k on X × X whose matrix on every finite list of points is positive semidefinite. A feature map Φ represents k if ⟨Φ(x), Φ(y)⟩ = k(x,y) for all x,y ∈ X.

**Problem.** Any algorithm whose only access to the feature vectors is through their pairwise inner products gives the same result from the kernel matrix.

**How the definition helps.** The kernel values are the required inner products in the feature space. The work moves to constructing that space from the positive semidefinite kernel (our own). For a chosen algorithm, one must also show it needs only inner products (our own).

**nLab:** [kernel method](https://ncatlab.org/nlab/show/kernel+method). It says: “Many linear algebra techniques in H just involve the inner product, and so can be conducted as a form of nonlinear algebra back in X, using the 'kernel trick'.”

**Sources:** none listed. No primary source with a working link was found.

### Littlestone trees let an adversary force mistakes

**Remember:** Follow the branch that the learner did not predict.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q32. arXiv cs.LG. Level 3: graduate.

**Definition.** In an infinite full binary Littlestone tree, each node carries an input and its two outgoing edges carry distinct labels. For every finite path from the root, some function in the class assigns each path input its outgoing edge label.

**Problem.** If the class has an infinite full tree of this kind, an adaptive adversary can force a mistake on every round. Every finite sequence it reveals remains consistent with the class.

**How the definition helps.** At each node the adversary can take an edge whose label differs from the learner’s prediction (our own proof). Revealing that label forces a mistake. The path condition guarantees a consistent function after every finite number of rounds.

**Paper or page:** [Multiclass Learnability Beyond the PAC Framework: Universal Rates and Partial Concept Classes](https://arxiv.org/abs/2210.02297v3). It says: “If ℋ has an infinite multiclass Littlestone tree, then there is a strategy for the adversary that forces any learner to make a mistake in every round.”

**Sources:** none listed. No primary source with a working link was found.

### Potential differences preserve the best policies

**Remember:** Intermediate potentials cancel and terminal potentials are zero.

*Rules out counterexamples.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 90C40. arXiv cs.LG. Level 3: graduate.

**Definition.** A policy is a rule for choosing actions. Give each state a real number called its potential, with zero at every terminal state. Add the next state’s potential minus the current state’s potential to each reward.

**Problem.** Start each policy in the same state and assume it reaches a terminal state almost surely. If total rewards have finite expectations, this change preserves their ordering by expected total reward.

**How the definition helps.** In our own proof, summing potential differences cancels every intermediate value and leaves minus the starting potential. Every policy therefore receives the same total adjustment on every completed run. For our own counterexample, two actions end the task with rewards zero and one. Adding two only to the first action reverses their ranking.

**Paper or page:** [Hierarchical Potential-based Reward Shaping from Task Specifications](https://arxiv.org/abs/2110.02792v3). It says: “R′(s, a, s′) = R(s, a, s′) + Ψ(s′) − Ψ(s)”

**Sources:**

- [Andrew Y. Ng, Daishi Harada, and Stuart J. Russell. Policy Invariance under Reward Transformations: Theory and Application to Reward Shaping. 1999.](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf)

### Replace-one stability bounds the expected generalization gap

**Remember:** Swap one point to compare training and test loss.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q32. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** A learning algorithm has uniform stability ε if replacing any one training example changes its expected loss on any fixed example by at most ε. Loss measures prediction error, and this expectation averages over the algorithm’s randomness.

**Problem.** Draw the training examples independently from one distribution and assume finite expected losses. The expected average training loss differs by at most ε from the expected loss on an independent example from that distribution.

**How the definition helps.** Replace one training example by an independent copy and evaluate the new learner on the removed example (our own proof). This gives the expected fresh-example loss because the removed example is independent of the new sample. Stability bounds its difference from the original learner’s expected loss on that same example by ε. Averaging over positions gives the claim.

**Paper or page:** [A Unified Analysis for Finite Weight Averaging](https://arxiv.org/abs/2411.13169v1). It says: “Let A be ε-uniformly stable. Then, \|𝔼₍S,A₎\[Rₛ\[Aₛ\] − R𝒟\[Aₛ\]\]\| ≤ ε.”

**Sources:**

- [Moritz Hardt, Benjamin Recht, and Yoram Singer. Train faster, generalize better: Stability of stochastic gradient descent. 2016.](https://proceedings.mlr.press/v48/hardt16)

### Blank symbols make alignment probabilities quick to compute

**Remember:** Use blanks to separate repeated labels and sum valid paths.

*Makes the theorem clean to state or prove.* MSC 68T07 (Artificial neural networks and deep learning), 68T50. arXiv cs.LG. Level 3: graduate.

**Definition.** Connectionist temporal classification treats each alignment as one label or blank per time step. Merge consecutive copies of a label, then delete blanks. Give each alignment the product of its step probabilities and sum over alignments for the target.

**Problem.** The probability of a target of length U on T time steps can be computed with O(TU) operations for nonempty targets.

**How the definition helps.** Inserting blanks before, between and after the target labels lets each partial alignment end at a numbered position (our own explanation). At each step, a path may stay, advance one position, or skip a blank between different labels. These rules give exactly one path for each valid alignment. Each position then needs at most three predecessor values per step, which gives O(TU) operations.

**Wikipedia:** [Connectionist temporal classification](https://en.wikipedia.org/wiki/Connectionist_temporal_classification). It says: “Equivalent label sequences can occur in many ways – which makes scoring a non-trivial task, but there is an efficient forward–backward algorithm for that.”

**Sources:**

- [Alex Graves, Santiago Fernández, Faustino Gomez, and Jürgen Schmidhuber. Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks. 2006.](https://doi.org/10.1145/1143844.1143891)

### Covered arrows preserve Bayesian models

**Remember:** Shared parents let the two variables swap their conditioning order.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 3: graduate.

**Definition.** In a Bayesian network, the joint distribution factors over the vertices of a directed acyclic graph into conditional laws given the parents. An edge X → Y is covered if the parents of Y are precisely X together with all parents of X.

**Problem.** For finite variables with unrestricted conditional distributions, reversing a covered arrow preserves the family of joint distributions.

**How the definition helps.** The two affected factors describe the joint law of X and Y conditional on their common parents (our own proof). Factor this law in reverse order, choosing any conditional law on events of probability zero. Reversal creates no cycle because any other path from X to Y would end through a parent of X. The same argument reverses the change, so the two distribution families coincide.

**Paper or page:** [Likelihoods and Parameter Priors for Bayesian Networks](https://arxiv.org/abs/2105.06241). It says: “there exists a set of covered arc reversals that transform one structure into the other.”

**Sources:**

- [Likelihoods and Parameter Priors for Bayesian Networks](https://arxiv.org/abs/2105.06241)

### Subtree messages give exact marginals

**Remember:** Fix one variable and multiply the sums from its branches.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 3: graduate.

**Definition.** A factor tree is a bipartite tree joining each variable to the factors that depend on it. Its factor product, normalized, gives the joint probability. For either side of a cut edge, its message sums that side’s factor product over its variables with the boundary variable fixed.

**Problem.** For finitely many finite-valued variables on a factor tree, one message in each direction along each edge suffices for every single-variable probability.

**How the definition helps.** Fixing the boundary value makes branch sums independent algebraic factors (our own proof). Induction from the leaves computes each cut sum from messages arriving on the other edges. One inward and one outward pass provide every directed message. Multiplying incoming messages at each variable and normalizing gives its marginal.

**Wikipedia:** [Belief propagation](https://en.wikipedia.org/wiki/Belief_propagation). It says: “the belief propagation algorithm will compute the exact marginals.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded overlap shrinks separators

**Remember:** Bound the overlap to find a small cut.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 05C40. arXiv cs.CG, cs.DS. Level 3: graduate.

**Definition.** For a finite family of closed Euclidean balls of positive radius, the ply is the largest number of interiors containing one point. The intersection graph joins two balls when they meet.

**Problem.** For n such balls of bounded ply in fixed dimension d, removing O(n⁽¹⁻¹⁄ᵈ⁾) vertices leaves two groups with no edge between them. Each contains at most a fixed fraction less than one of the original vertices.

**How the definition helps.** In our own example, bounded ply excludes arbitrarily many concentric balls, whose intersection graph has every possible edge. Balancing that graph would require removing a fixed fraction of all its vertices. The geometric sphere separator theorem does the main work. It finds a sphere meeting few balls, with balanced numbers of balls entirely inside and entirely outside.

**Paper or page:** [Maximizing the Sum of Radii of Disjoint Balls or Disks](https://arxiv.org/abs/1607.02184v2). It says: “the intersection graph of the balls has separators of size O(n⁽¹⁻¹⁄ᵈ⁾)”

**Sources:**

- [David Eppstein, Maximizing the Sum of Radii of Disjoint Balls or Disks, arXiv:1607.02184v2](https://arxiv.org/abs/1607.02184v2)

### Defining Delaunay cells by a lifted convex hull makes them unique

**Remember:** Keep the whole lower face when four points share a circle.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Lift each planar point x to (x, ‖x‖²) and take the convex hull of the lifted points. The Delaunay subdivision consists of projections of faces supported by planes from below, together with their faces.

**Problem.** Take a finite set of points in the plane, not all on one line. The lifted lower hull gives exactly one Delaunay subdivision. A circle with no points inside and exactly four on it gives one quadrilateral cell.

**How the definition helps.** The lifted convex hull and its lower faces are unique (our own argument for subdivisions). A circle has equation ‖x‖² = a·x + b, with exterior points satisfying a strict greater-than inequality. An empty circle through exactly four sites therefore gives a lower supporting plane containing just their lifts. Its contact face projects to the quadrilateral without choosing a diagonal.

**Wikipedia:** [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation). It says: “As the convex hull is unique, so is the triangulation, assuming all facets of the convex hull are simplices.”

**Sources:** none listed. No primary source with a working link was found.

### Slack ratios make Hilbert balls polyhedral

**Remember:** Bound each slack ratio and the ball becomes an intersection of half spaces.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG. Level 3: graduate.

**Definition.** Let sᵢ be affine facet slacks, positive inside the polytope, and let c be an interior center. Write uᵢ(x) = sᵢ(x)/sᵢ(c). For interior x, use Hilbert distance d(c,x) = log maxᵢⱼ(uᵢ(x)/uⱼ(x)).

**Problem.** A closed Hilbert ball of positive finite radius inside a bounded full-dimensional polytope with m facets has at most m(m−1) facets.

**How the definition helps.** The radius bound is equivalent inside the polytope to uᵢ(x) ≤ exp(r)uⱼ(x) for each ordered pair i ≠ j (our own proof). Each inequality is affine. The finite-radius ball stays away from the polytope boundary, where a slack vanishes while another stays positive. Hence only these m(m−1) inequalities can support its facets.

**Paper or page:** [Voronoi Diagrams in the Hilbert Metric](https://arxiv.org/abs/2112.03056). It says: “is a convex polytope bounded by at most m(m−1) facets.”

**Sources:**

- [Voronoi Diagrams in the Hilbert Metric](https://arxiv.org/abs/2112.03056)

### Ordered channels make snapshot markers reliable

**Remember:** A marker separates messages sent before the recorded state from messages sent after it.

*Rules out counterexamples.* MSC 68W15 (Distributed algorithms), 68M14. arXiv cs.DC. Level 3: graduate.

**Definition.** Assume processes keep running and each directed channel delivers every message once, in sending order. A process records its state when it starts the snapshot or receives its first marker. It then sends a marker on each outgoing channel before sending further application messages.

**Problem.** Each channel record contains exactly the messages sent before the sender recorded its state and received after the receiver recorded its state.

**How the definition helps.** Ordered delivery makes the marker separate messages sent before the sender recorded its state from messages sent afterward. In our own explanation, the receiver records arrivals on each incoming channel from its local snapshot until that channel’s marker arrives. If a marker triggers the local snapshot, its own channel record is empty. Without ordered delivery, a marker could overtake an earlier message and end recording too soon.

**Wikipedia:** [Chandy–Lamport algorithm](https://en.wikipedia.org/wiki/Chandy%E2%80%93Lamport_algorithm). It says: “The communication channels are unidirectional and FIFO ordered”

**Sources:**

- [K. Mani Chandy and Leslie Lamport, Distributed Snapshots: Determining Global States of Distributed Systems (1985)](https://doi.org/10.1145/214451.214456)

### Paxos counts votes within ballots

**Remember:** Count votes for one numbered proposal.

*Rules out counterexamples.* MSC 68W15 (Distributed algorithms), 68M14. arXiv cs.DC. Level 3: graduate.

**Definition.** A Paxos ballot is a numbered proposal for a single value. A value becomes chosen when a majority accepts that proposal. Counting acceptances of that value across different ballot numbers is not enough.

**Problem.** In single-decision Paxos, once a proposal has a majority, every later chosen proposal has the same value.

**How the definition helps.** A later proposing majority intersects the majority that accepted the chosen ballot (our own proof). Each promise prevents an earlier acceptance afterward, so an intersecting voter already reports that ballot or a higher accepted ballot. Inductively, every intervening proposal carries the chosen value, and the proposer adopts the highest reported ballot’s value. Votes split across ballots need not supply such an intersecting majority for any single ballot.

**Wikipedia:** [Paxos (computer science)](https://en.wikipedia.org/wiki/Paxos_%28computer_science%29). It says: “consensus is achieved when a majority of Acceptors accept the same identifier number (rather than the same value).”

**Sources:**

- [Leslie Lamport, Paxos Made Simple (2001)](https://www.microsoft.com/en-us/research/publication/paxos-made-simple/)

### Termination with probability one lets consensus escape the FLP impossibility

**Remember:** Require agreement always and eventual decision with probability one for each admissible scheduler.

*Makes the theorem clean to state or prove.* MSC 68W15 (Distributed algorithms), 68W20, 68M14. arXiv cs.DC, cs.DS. Level 3: graduate.

**Definition.** In asynchronous crash consensus, correct processes must agree on a proposed input value, and a crash permanently stops a process. Randomized termination requires every correct process eventually to decide with probability one under every admissible scheduler. Such schedulers give correct processes steps and eventually deliver messages between them without observing future private coin flips.

**Problem.** No deterministic protocol solves consensus in an asynchronous system if even one process may crash (Fischer, Lynch and Paterson). Randomized consensus, with termination only with probability one, can be solved there when fewer than half the processes may crash.

**How the definition helps.** Almost-sure termination allows exceptional coin sequences on which no decision occurs (our own explanation). FLP constructs a nondeciding admissible execution for any deterministic protocol tolerating one crash. Ben-Or’s randomized protocol proves almost-sure termination when fewer than half the processes can crash.

**Wikipedia:** [Consensus (computer science)](https://en.wikipedia.org/wiki/Consensus_%28computer_science%29). It says: “Randomized consensus algorithms can circumvent the FLP impossibility result by achieving both safety and liveness with overwhelming probability”

**Sources:**

- [M. J. Fischer, N. A. Lynch and M. S. Paterson, Impossibility of distributed consensus with one faulty process, Journal of the ACM 32 (1985) 374–382](https://doi.org/10.1145/3149.214121)
- [M. Ben-Or, Another advantage of free choice: completely asynchronous agreement protocols, PODC 1983](https://doi.org/10.1145/800221.806707)

### Higher-order abstract syntax gets capture-free substitution from the host language

**Remember:** Use the host language’s binding rules instead of writing them again.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 03B40. arXiv cs.LO, cs.PL. Level 4: research.

**Definition.** In higher-order abstract syntax, the host language supplies the functions used to represent expressions that bind variables. For example, the body of λx. M is a host function of x. An encoding with variable names instead records each name and defines substitution on those names.

**Problem.** In a suitable encoding, applying the host function implements capture-free substitution for the encoded binder. Renaming a bound variable also leaves the encoding unchanged.

**How the definition helps.** Representing an object binder by a host binder makes host application perform capture-free substitution (our own explanation). Renaming that bound host variable gives the same term up to host alpha-equivalence. An adequacy theorem establishes that this interpretation agrees with the intended object syntax and substitution.

**Wikipedia:** [Higher-order abstract syntax](https://en.wikipedia.org/wiki/Higher-order_abstract_syntax). It says: “by reusing the meta-level notion of binding, the encoding enjoys properties such as type-preserving substitution without the need to define or prove them.”

**Sources:**

- [F. Pfenning, C. Elliott, Higher-order abstract syntax, PLDI 1988](https://doi.org/10.1145/53990.54010)

### Dominating laws handle subsampling

**Remember:** An added record enters the output law only when the sample includes it.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data). arXiv cs.CR. Level 4: research.

**Definition.** For output laws R,S, define D(α,R,S) as the maximum of R(A) − αS(A) over measurable events A. Domination requires D(α,R,S) ≤ D(α,P,Q) for every α ≥ 0 and every output pair from adding one record, smaller dataset first. Poisson subsampling independently retains each record with probability γ.

**Problem.** A dominating pair (P, Q) for adding one record becomes (P, (1 − γ)P + γQ) after Poisson subsampling. This uses the unmodified law as the first argument.

**How the definition helps.** Conditioning on the common subsample gives laws R and (1 − γ)R + γS (our own proof). Put c = 1 − α(1 − γ). The event maximum is zero for c ≤ 0 and otherwise equals cD(αγ/c,R,S). Apply domination conditionally and average, obtaining the same bound computed from P and (1 − γ)P + γQ.

**Paper or page:** [Avoiding Pitfalls for Privacy Accounting of Subsampled Mechanisms under Composition](https://arxiv.org/abs/2405.20769v2). It says: “If (P, Q) dominates ℳ for add neighbours then (P, (1−γ)P + γQ) dominates ℳₚₒᵢₛₛₒₙ for add neighbours”

**Sources:** none listed. No primary source with a working link was found.

### Dominating pairs turn privacy composition into products, so characteristic functions multiply

**Remember:** Bound each step by a fixed pair, then multiply characteristic functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 60E10. arXiv cs.LG, cs.CR. Level 4: research.

**Definition.** Write Dα(R,S) = supₐ(R(A) − αS(A)), where A ranges over measurable events. A pair (P,Q) dominates a mechanism if Dα(R,S) ≤ Dα(P,Q) for every ordered neighboring output pair (R,S) and every α ≥ 0. When P is absolutely continuous with respect to Q, its privacy loss is L = log(dP/dQ) under P.

**Problem.** If fixed pairs dominate the first step and each conditional second step, their product pair dominates the adaptive composition. For almost surely finite privacy losses, the product pair’s characteristic function is the product of their characteristic functions.

**How the definition helps.** Theorem 10 gives the independent product benchmark even though the second mechanism can depend on the first output. For the product benchmark the density ratios multiply, so their logarithms add (our own argument). Independence factors the expectation of exp(itL), giving the characteristic-function rule.

**Paper or page:** [Optimal Accounting of Differential Privacy via Characteristic Function](https://arxiv.org/abs/2106.08567v3). It says: “If (P,Q) dominates ℳ and (P′, Q′) dominates ℳ′, then (P×P′, Q×Q′) dominates the composed mechanism (ℳ, ℳ′).”

**Sources:**

- [Yuqing Zhu, Jinshuo Dong, Yu-Xiang Wang, Optimal Accounting of Differential Privacy via Characteristic Function, arXiv:2106.08567v3 (2022)](https://arxiv.org/abs/2106.08567v3)

### Gaussian differential privacy composes by adding the squares of the parameters

**Remember:** Every neighboring output pair is at least as hard to distinguish as the Gaussian pair.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A13. arXiv stat.TH, cs.CR. Level 4: research.

**Definition.** A mechanism is μ-Gaussian differentially private if every test on every ordered pair of neighboring output laws obeys the Gaussian testing bound. At every type-I error level α, its type-II error must reach at least the minimum for testing N(0,1) against N(μ,1) at level α.

**Problem.** Composing mechanisms with conditional guarantees μ₁-GDP and μ₂-GDP gives a √(μ₁² + μ₂²)-GDP guarantee. With a bounded number of steps, adaptively chosen conditional guarantees give B-GDP if their squared parameters sum to at most B² almost surely.

**How the definition helps.** For fixed parameters, independent normal shifts combine into a single shift whose length is the square root of the sum of squares (our own explanation). The quoted adaptive Gaussian composition theorem extends this bound to conditional parameters satisfying the budget on every run except a probability-zero set.

**Paper or page:** [Individual Privacy Accounting with Gaussian Differential Privacy](https://arxiv.org/abs/2209.15596v2), [PRECAD: Privacy-Preserving and Robust Federated Learning via Crypto-Aided Differential Privacy](https://arxiv.org/abs/2110.11578v1). It says: “Let k denote the maximum number of compositions. Suppose that, almost surely, ∑ₘ₌₁ᵏ μₘ² ≤ B². Then, 𝓜⁽ᵏ⁾(X) is B-GDP.”

**Sources:**

- [Antti Koskela, Marlon Tobaben, Antti Honkela, Individual Privacy Accounting with Gaussian Differential Privacy, International Conference on Learning Representations 2023, arXiv:2209.15596](https://arxiv.org/abs/2209.15596v2)
- [Jinshuo Dong, Aaron Roth, Weijie J. Su, Gaussian Differential Privacy, Journal of the Royal Statistical Society Series B (2022)](https://doi.org/10.1111/rssb.12454)

### Local differential privacy is the same as contraction of one divergence

**Remember:** Local privacy means one divergence shrinks to at most δ times its size.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 94A17, 94A40. arXiv math.IT, cs.CR. Level 4: research.

**Definition.** For γ = exp(ε), define Eγ(P,Q) = supₛ\[P(S) − γQ(S)\] over measurable events S. Local privacy requires Eγ(K(x),K(y)) ≤ δ for all inputs x,y, where K(x) denotes the output law at x. The contraction coefficient is the least c ≥ 0 satisfying Eγ(PK,QK) ≤ cEγ(P,Q) for all input laws P,Q.

**Problem.** A channel K is (ε, δ)-locally private exactly when its contraction coefficient ηγ(K) is at most δ, with γ = eᵋ.

**How the definition helps.** Local privacy bounds the divergence for every pair of point inputs (our own explanation). Distinct point masses have input divergence one. The point-mass characterization of the Eγ contraction coefficient proves that these tests suffice for arbitrary input laws.

**Paper or page:** [Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence](https://arxiv.org/abs/2102.01258v1). It says: “A mechanism 𝖪 is (ε, δ)-LDP if and only if η\[eᵋ\](𝖪) ≤ δ”

**Sources:**

- [Shahab Asoodeh, Maryam Aliakbarpour, Flavio P. Calmon, Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence, arXiv:2102.01258 (2021); published at ISIT 2021 as Local Differential Privacy Is Equivalent to Contraction of an f-Divergence](https://arxiv.org/abs/2102.01258v1)

### Rényi differential privacy makes the cost of composition simply add

**Remember:** Fix the order α, and Rényi privacy costs simply add up.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A17. arXiv cs.CR, cs.LG. Level 4: research.

**Definition.** Fix α &gt; 1. A mechanism has (α, ε)-Rényi differential privacy if Dα(P,Q) ≤ ε for every ordered pair of output laws from neighboring databases. Here Dα(P,Q) = log E<sub>Q</sub>\[(dP/dQ)ᵅ\]/(α − 1) when P is absolutely continuous with respect to Q, and infinity otherwise.

**Problem.** Fix α &gt; 1. Suppose the first step is (α, ε₁)-RDP and the second is (α, ε₂)-RDP conditional on each possible first output. Together they are (α, ε₁ + ε₂)-RDP.

**How the definition helps.** Joint likelihood ratios multiply even when the second step depends on the first output (our own proof). Given any first output, the second ratio’s α-moment under the reference law is at most exp((α − 1)ε₂). Averaging against the first ratio’s α-power contributes at most exp((α − 1)ε₁). Taking the logarithm and dividing by α − 1 gives the sum.

**Paper or page:** [Winning the NIST Contest: A scalable and general approach to differentially private synthetic data](https://arxiv.org/abs/2108.04978v1), [Shuffle Gaussian Mechanism for Differential Privacy](https://arxiv.org/abs/2206.09569v2). It says: “Let 𝓜₁ : 𝒟 → ℛ₁ be (α, γ₁)-RDP and 𝓜₂ : 𝒟 × ℛ₁ → ℛ₂ be (α, γ₂)-RDP. Then the mechanism 𝓜 = 𝓜₂(D, 𝓜₁(D)) is (α, γ₁ + γ₂)-RDP.”

**Sources:**

- [Ryan McKenna, Gerome Miklau, Daniel Sheldon, Winning the NIST Contest: A scalable and general approach to differentially private synthetic data, Journal of Privacy and Confidentiality 11 (2021), arXiv:2108.04978](https://doi.org/10.29012/jpc.778)
- [Shuffle Gaussian Mechanism for Differential Privacy, arXiv:2206.09569 (2022)](https://arxiv.org/abs/2206.09569v2)

### Approximate degree with a matrix-norm bound equals quantum query complexity

**Remember:** Test tensors on matrix contractions, then minimize the total cost of permuted pieces.

*Makes the theorem clean to state or prove.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 81P68, 46L07. arXiv quant-ph, cs.CC. Level 4: research.

**Definition.** For a degree-d form p, write its symmetric coefficient tensor as a sum of index permutations of order-d tensors. Its completely bounded norm is the infimum of the summed tensor norms over all such decompositions. Each tensor norm takes the supremum operator norm of its ordered multilinear evaluation on square matrix contractions of every common dimension.

**Problem.** A function on the Boolean cube is the expected output sign of a t-query quantum algorithm exactly when a degree-2t form with completely bounded norm at most one gives it. The form is evaluated on the input padded with ones. So the refined approximate degree equals the quantum query complexity.

**How the definition helps.** The norm controls matrix products of the kind that occur between quantum queries (our own explanation). The paper’s completely bounded form characterization uses a multilinear representation theorem to construct an algorithm from each admissible form. Its converse turns the algorithm into a bounded form, so approximation transfers in both directions.

**Paper or page:** [Quantum Query Algorithms are Completely Bounded Forms](https://arxiv.org/abs/1711.07285v3). It says: “Based on this, we obtain a refined notion of approximate polynomial degree that equals the quantum query complexity, answering a question of Aaronson et al. (CCC'16).”

**Sources:**

- [Srinivasan Arunachalam, Jop Briët, Carlos Palazuelos, Quantum Query Algorithms are Completely Bounded Forms, arXiv:1711.07285v3 (2022), SIAM Journal on Computing, Vol. 48, 903-925, 2019](https://arxiv.org/abs/1711.07285v3)

### False-clause search links proofs to TFNP

**Remember:** Every refutation is a search for the broken clause.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03F20. arXiv cs.CC, cs.LO. Level 4: research.

**Definition.** For an unsatisfiable formula F in conjunctive normal form, S(F) takes a Boolean assignment and permits any clause of F falsified by that assignment. Every assignment has at least one permitted answer.

**Problem.** Consider families of unsatisfiable n-variable formulas of polylogarithmic clause width. Unary Nullstellensatz refutations of polylogarithmic degree and quasipolynomial size correspond exactly to membership of the clause search problem in PPADᵈᵗ. The analogous unary Sherali–Adams characterization gives PPADSᵈᵗ.

**How the definition helps.** Every assignment falsifies a clause, so each formula family defines a total search problem (our own explanation). The paper’s proof–search correspondence theorems relate the resource bounds on refutations to the respective decision-tree search classes.

**Paper or page:** [Separations in Proof Complexity and TFNP](https://arxiv.org/abs/2205.02168). It says: “For any sequence Fn of poly(log n)-width CNF formulas, Fn has a degree-poly(log n), size-nᵖᵒˡʸ⁽ˡᵒᵍ ⁿ⁾ unary Nullstellensatz proof if and only if S(F) ∈ PPADᵈᵗ.”

**Sources:**

- [Separations in Proof Complexity and TFNP, arXiv:2205.02168 (2022)](https://arxiv.org/abs/2205.02168)

### ∃ℝ gives art galleries an exact complexity

**Remember:** Real solutions of polynomials are the true measure of guarding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03D78, 68U05. arXiv cs.CG, cs.CC. Level 4: research.

**Definition.** A decision problem belongs to ∃ℝ if it has a polynomial-time many-one reduction to feasibility of integer polynomial systems over the reals. It is ∃ℝ-complete if that feasibility problem also reduces to it in polynomial time.

**Problem.** The point-boundary art gallery problem asks whether at most k point guards in a polygon can collectively see its entire boundary. It is ∃ℝ-complete, hence polynomial-time equivalent to real polynomial feasibility.

**How the definition helps.** Completeness expresses the two polynomial-time reductions in one condition (our own explanation). The art gallery completeness theorem supplies both reductions, including the geometric construction encoding real feasibility.

**Paper or page:** [The Point-Boundary Art Gallery Problem is ∃ℝ-hard](https://arxiv.org/abs/2210.12817). It says: “showing that it is ∃ℝ-complete, meaning that it is equivalent under polynomial time reductions to deciding whether a system of polynomial equations has a real solution.”

**Sources:**

- [Jack Stade, The Point-Boundary Art Gallery Problem is ∃ℝ-hard, arXiv:2210.12817 (2025)](https://arxiv.org/abs/2210.12817)
- [Mikkel Abrahamsen, Anna Adamaszek, Tillmann Miltzow, The Art Gallery Problem is ∃ℝ-complete, Journal of the ACM (2021)](https://doi.org/10.1145/3486220)

### Pliability unifies planar and dense approximation

**Remember:** Close to bounded treewidth is enough for good approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q25 (Analysis of algorithms and problem complexity), 05C83. arXiv cs.CC, cs.DS. Level 4: research.

**Definition.** A class is treewidth-pliable if every ε &gt; 0 admits a width bound k applying to every structure A in the class. Each A must admit a structure B of treewidth at most k over its signature. For every target, their optimum values must lie within a multiplicative factor exp(ε) of each other.

**Problem.** On every bounded-arity treewidth-pliable class, Max-CSP admits a polynomial-time approximation scheme for the optimum value. For each fixed ε &gt; 0 it approximates the value within factor 1 + ε.

**How the definition helps.** A bounded-width proxy preserves the optimum uniformly across targets, which lets one relaxation approximate the original value (our own explanation). The treewidth-pliability approximation theorem supplies the algorithm and covers both the sparse and dense settings in the quote.

**Paper or page:** [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204), [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204). It says: “The condition unifies the two main approaches for designing a polynomial-time approximation scheme. One is Baker's layering technique, which applies to sparse graphs such as planar or excluded-minor graphs.”

**Sources:**

- [Miguel Romero, Marcin Wrochna, Stanislav Živný, Pliability and Approximating Max-CSPs, Journal of the ACM 70(6) (2023)](https://arxiv.org/abs/1911.03204)

### Multicalibration gives one forecast that serves many losses at once

**Remember:** Learn the forecast first and choose the action once you know the loss.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62C05. arXiv cs.LG. Level 4: research.

**Definition.** For binary outcomes, a forecast p is an ε-omnipredictor for rules C and losses ℒ if each loss ℓ admits a postprocessing function kℓ. Its expected loss on kℓ(p(X)) must be at most ε above the infimum expected loss over C.

**Problem.** An approximately multicalibrated predictor for C is an omnipredictor for C, for the loss families covered by the paper.

**How the definition helps.** The definition permits a different decision rule for each loss while requiring one forecast for the whole family (our own explanation). The paper’s multicalibration-to-omniprediction theorem supplies the error bound for its admissible loss families.

**Paper or page:** [Omnipredictors](https://arxiv.org/abs/2109.05389v1). It says: “Once the loss function is set, the outputs of the predictor can be post-processed (a simple univariate data-independent transformation of individual predictions) to do well compared with any hypothesis from the class”

**Sources:**

- [Parikshit Gopalan, Adam Tauman Kalai, Omer Reingold, Vatsal Sharan, Udi Wieder, Omnipredictors, arXiv:2109.05389v1 (2021)](https://arxiv.org/abs/2109.05389v1)

### Strong proper computable learning equals having a computable empirical risk minimizer

**Remember:** A computable sample bound turns learning into a finite search for the minimizer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q32 (Computational learning theory), 03D20. arXiv cs.LG, cs.LO. Level 4: research.

**Definition.** A strong proper computable agnostic learner is a terminating algorithm returning a computable hypothesis in its binary class, with a computable sample bound m(ε,δ). For all rational ε,δ ∈ (0,1) and every labeled distribution, m(ε,δ) or more independent examples suffice. With probability at least 1 − δ its error is at most ε above the class infimum.

**Problem.** For a class of finite Vapnik–Chervonenkis dimension, strong proper computable learning holds exactly when an algorithm performs empirical risk minimization. Empirical risk minimization returns a hypothesis in the class with least error on the given sample. The dimension is the size of the largest set on which the class realizes every labeling by 0 and 1.

**How the definition helps.** The computable sample bound permits exhaustive search over training sequences drawn from the uniform distribution on the n labeled sample entries (our own proof). Choose ε &lt; 1/n and δ = 1/2, and retain the output having least empirical error. Some sequence succeeds, and empirical errors differ by multiples of 1/n, so the retained hypothesis minimizes error exactly. Conversely, the finite-VC uniform convergence theorem gives computable sample bounds for a computable empirical minimizer.

**Paper or page:** [Computable learning of natural hypothesis classes](https://arxiv.org/abs/2407.16663v2). It says: “proper SCPAC learnable ⇔ there is a computable ERM for ℋ”

**Sources:**

- [Matthew Harrison-Trainor, Syed Akbari, Computable learning of natural hypothesis classes, arXiv:2407.16663v2 (2024)](https://arxiv.org/abs/2407.16663v2)

### Under label shift, unlabelled test data give unbiased risk estimates

**Remember:** If only label frequencies change, old class errors still give the new risk.

*True by definition.* MSC 68Q32 (Computational learning theory), 62M20. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** Under label shift, label frequencies may change while the input distribution given each label stays the same. Assume every label has positive training probability. For a fixed reference classifier, Cᵢⱼ is the training probability of predicting j given true label i.

**Problem.** Assume label shift and an invertible population confusion matrix C. For one test input with predicted-label indicator vector e, (Cᵀ)⁻¹e estimates the test label frequencies without bias. Its dot product with any fixed classifier’s finite class-conditional mean losses estimates that classifier’s expected test loss without bias.

**How the definition helps.** If q lists test label probabilities, conditioning on the label gives E\[e\] = Cᵀq (our own derivation). Inversion recovers q in expectation. Label shift also preserves each class-conditional mean loss, so weighting those losses by the estimate gives the correct risk in expectation.

**Paper or page:** [Online Adaptation to Label Distribution Shift](https://arxiv.org/abs/2107.04520v2), [Online Adaptation to Label Distribution Shift](https://arxiv.org/abs/2107.04520v2). It says: “we show that the lack of true label does not hinder estimation of the expected test loss, which enables the reduction of online label shift adaptation to conventional online learning.”

**Sources:**

- [Ruihan Wu, Chuan Guo, Yi Su, Kilian Q. Weinberger, Online Adaptation to Label Distribution Shift, arXiv:2107.04520v2 (2022)](https://arxiv.org/abs/2107.04520v2)

### Suffix agreement characterizes finite recognition of probability classes

**Remember:** Compare every suffix before merging two prefixes.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68T50. arXiv cs.FL, cs.LG. Level 4: research.

**Definition.** A language model gives a next-symbol distribution after each prefix. Fix an equivalence relation on these distributions. Group two prefixes if their distributions are equivalent after appending every possible suffix.

**Problem.** A language model has finitely many such prefix classes exactly when a finite deterministic automaton can reproduce its output classes.

**How the definition helps.** In our own proof, appending a letter to equivalent prefixes preserves equivalence because the test already includes every continuation starting with that letter. Each prefix class can therefore serve as a state. The empty continuation determines its output class. Conversely, prefixes reaching the same deterministic state give the same output class after every continuation.

**Paper or page:** [Congruence-based Learning of Probabilistic Deterministic Finite Automata](https://arxiv.org/abs/2412.09760v1). It says: “For every equivalence ℰ and language model ℳ, ℳ is ℰ-regular if and only if ℳ is PDFA ℰ-recognizable.”

**Sources:**

- [Matías Carrasco, Franz Mayr, Sergio Yovine. Congruence-based Learning of Probabilistic Deterministic Finite Automata. 2024.](https://arxiv.org/abs/2412.09760v1)

### Tensor cells let automata run in parallel

**Remember:** Paired cells let both machines keep events active.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68Q85. arXiv cs.FL. Level 4: research.

**Definition.** In the tensor product of two higher-dimensional automata, each cell pairs component cells and concatenates their ordered lists of active events. A face map acts on the selected events in their respective components. Initial and accepting cells are pairs of initial and accepting cells, respectively.

**Problem.** The tensor product accepts exactly the parallel combinations of the two machines’ event languages.

**How the definition helps.** Each step in a paired cell projects to allowed component steps, including an idle component when necessary (our own explanation). Conversely, independent component steps may interleave or overlap as permitted by the parallel event language. The tensor-product language theorem proves that these constructions give precisely the accepted parallel combinations.

**Paper or page:** [Kleene Theorem for Higher-Dimensional Automata](https://arxiv.org/abs/2202.03791v6). It says: “Then ℒ(X ⊗ Y) = ℒ(X) ∥ ℒ(Y).”

**Sources:**

- [Uli Fahrenberg, Christian Johansen, Georg Struth, and Krzysztof Ziemiański. Kleene Theorem for Higher-Dimensional Automata. 2024.](https://lmcs.episciences.org/14922)

### Defining handlers as algebra maps makes them respect the effect equations

**Remember:** A map out of a quotient cannot separate identified computations.

*True by definition. Confidence: medium.* MSC 68Q55 (Semantics in the theory of computing), 18C10. arXiv cs.PL, cs.LO. Level 4: research.

**Definition.** Fix a theory of operations and equations and its free model on the possible return values. A handler is a map into another model of the theory that preserves every operation.

**Problem.** A handler gives equal results on computations that the effect equations identify.

**How the definition helps.** Computations identified by the equations already denote one element in the free model, so any handler sends them to the same result (our own argument). The free-model universal property supplies the handler once the target satisfies the equations and return values have interpretations.

**nLab:** [algebraic effect](https://ncatlab.org/nlab/show/algebraic+effect). It says: “Algebraic effects are computational effects that can be represented by an equational theory, or algebraic theory, whose operations produce the effects at hand.”

**Sources:**

- [Matija Pretnar, An Introduction to Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)

### Defining sequencing as an algebra map makes effect operations commute with it

**Remember:** Substitution at the leaves leaves the operation nodes alone.

*True by definition. Confidence: medium.* MSC 68Q55 (Semantics in the theory of computing), 18C15. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** Let T(X) be the free model of an effect theory on a set X of results. Sequencing a computation with f from X to T(Y) is the unique structure-preserving map T(X) → T(Y) that extends f. The direct definition on trees substitutes the next computation at each leaf that returns a value.

**Problem.** Performing an operation and then sequencing equals performing the operation on the sequenced continuations.

**How the definition helps.** The map extending f preserves each operation by the definition of an algebra homomorphism. Applying it to an operation therefore gives that operation applied to the images of its continuations (our own application). In the free model, those images are precisely the sequenced continuations.

**nLab:** [algebra over a monad](https://ncatlab.org/nlab/show/algebra+over+a+monad). It says: “all homomorphisms of T-algebras between the free algebras T X and T Y do arise this way.”

**Sources:**

- [Matija Pretnar, An Introduction to Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)

### The later modality gives guarded fixed points without inconsistency

**Remember:** You may call yourself recursively, but only one step later.

*Rules out counterexamples.* MSC 68Q55 (Semantics in the theory of computing), 03B38, 03D65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** In the topos-of-trees model, a type A is a sequence of sets with restriction maps from each stage to the preceding stage. The delayed type ▷A has a singleton at stage zero and A’s stage n at stage n + 1. The map next uses the unique initial-stage map and A’s restriction maps thereafter.

**Problem.** At every type A, each map f from ▷A to A has a guarded fixed point satisfying fix(f) = f(next(fix(f))). Synthetic guarded domain theory with this operator has a consistent model.

**How the definition helps.** At stage zero, f takes the unique delayed input, and each later stage takes the preceding fixed-point component (our own model argument). Naturality makes these outputs compatible, giving the required fixed point. Unguarded Boolean negation has no fixed point, and its type does not permit this guarded construction. The topos-of-trees model establishes consistency.

**nLab:** [synthetic guarded domain theory](https://ncatlab.org/nlab/show/synthetic+guarded+domain+theory). It says: “yields a restricted fixed-point operator fix : (▷A → A) → A at all types A, which is consistent when viewing this theory as a logical framework.”

**Sources:**

- [Lars Birkedal, Rasmus Ejlers Møgelberg, Jan Schwinghammer, Kristian Støvring, First steps in synthetic guarded domain theory: step-indexing in the topos of trees, Logical Methods in Computer Science 8(4) (2012), arXiv:1208.3596](https://arxiv.org/abs/1208.3596)

### Least stream solutions give Kahn networks one result across fair schedules

**Remember:** Fair runs compute the same least solution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.DC, cs.LO. Level 4: research.

**Definition.** A Kahn network connects deterministic processes by unbounded, single-writer, single-reader channels that deliver values in order. Reads block until data arrive, writes never block, and a process cannot test for channel emptiness. Ordered by stream extension, the network denotes the least solution of its channel equations.

**Problem.** For fixed inputs and initial channel data, every fair run of a Kahn network produces the same streams. A fair run does not postpone a process forever when it can keep taking steps.

**How the definition helps.** Kahn’s principle identifies the streams of every fair execution with the least solution of the same equations (our own explanation). Iteration from empty streams builds increasing prefixes whose limit gives that solution. The operational proof shows that fair scheduling eventually produces every finite prefix in the limit.

**Wikipedia:** [Kahn process networks](https://en.wikipedia.org/wiki/Kahn_process_networks). It says: “Due to these key restrictions, the resulting process network exhibits deterministic behavior that does not depend on the timing of computation nor on communication delays.”

**Sources:** none listed. No primary source with a working link was found.

### Doubling metrics allow fast closest pair

**Remember:** Cover each ball with at most 2ᵈ balls of half its radius.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68R12 (Metric embeddings as related to computational problems and algorithms), 68U05. arXiv cs.DS, cs.CG. Level 4: research.

**Definition.** The doubling dimension is the least d satisfying this covering condition. For every r &gt; 0, each radius-2r ball admits a cover by at most 2ᵈ radius-r balls.

**Problem.** Assume N ≥ 2 points, fixed doubling dimension and constant-time distance queries. A randomized algorithm finds the closest-pair distance in expected O(N log N) time.

**How the definition helps.** Repeated halving bounds how many mutually separated points can occupy one ball (our own explanation). The paper’s closest-pair theorem uses this packing bound to control recursive work. With dimension fixed, its expected number of distance queries and total running time are O(N log N).

**Paper or page:** [A Simple Randomized O(n log n)--Time Closest-Pair Algorithm in Doubling Metrics](https://arxiv.org/abs/2004.05883), [A Simple Randomized O(n log n)--Time Closest-Pair Algorithm in Doubling Metrics](https://arxiv.org/abs/2004.05883). It says: “Let (P,dist) be a metric space of size N ≥ 2, and let d be its doubling dimension. Assume that d does not depend on N. The closest-pair distance in P can be computed in O(N log N) expected time.”

**Sources:**

- [A Simple Randomized O(n log n)-Time Closest-Pair Algorithm in Doubling Metrics, arXiv:2004.05883 (2020)](https://arxiv.org/abs/2004.05883)

### Comparing infinite words with their suffixes gives unique Lyndon factorizations

**Remember:** Compare infinite words with their tails, not with rotations.

*Makes the theorem clean to state or prove.* MSC 68R15 (Combinatorics on words), 05A05. arXiv math.CO, cs.DM. Level 4: research.

**Definition.** Fix a total alphabet order at each position and compare infinite words at their first difference. A nonempty finite word is generalized Lyndon if every nontrivial cyclic shift has a strictly larger periodic repetition. An infinite word is generalized Lyndon if every nonempty proper suffix is strictly larger.

**Problem.** Every infinite word has a unique nonincreasing factorization into finite and infinite generalized Lyndon words. This proves a conjecture of Dolce, Restivo and Reutenauer.

**How the definition helps.** Comparing finite factors by periodic repetition lets the same order compare them with an infinite final factor (our own). The generalized Lyndon factorization theorem supplies existence and uniqueness.

**Paper or page:** [Generalized Lyndon Factorizations of Infinite Words](https://arxiv.org/abs/1905.04746v2). It says: “We prove a conjecture of Dolce, Restivo, and Reutenauer: every infinite word has a unique nonincreasing factorization into finite and infinite generalized Lyndon words.”

**Sources:**

- [Amanda Burcroff, Eric Winsor, Generalized Lyndon Factorizations of Infinite Words, arXiv:1905.04746 (2019)](https://arxiv.org/abs/1905.04746v2)
- [Amanda Burcroff and Eric Winsor, Generalized Lyndon factorizations of infinite words, Theoretical Computer Science 809 (2020), 30–38](https://doi.org/10.1016/j.tcs.2019.11.003)

### Kernel evaluations reduce each learned layer to a finite span

**Remember:** Drop every layer component the training points cannot see.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68T07, 46E22. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** Suppose each coordinate evaluation in a layer’s Hilbert space is continuous and linear. Its training evaluation span contains all linear combinations of the evaluation vectors for every output coordinate at every training input reaching that layer.

**Problem.** Suppose the objective adds a loss on final training predictions to a positively weighted sum of squared layer norms. At any minimizer, each layer belongs to its training evaluation span.

**How the definition helps.** In our own proof, projection onto the evaluation span preserves every training output because it preserves the inner products defining those outputs. All later layers therefore receive the same training inputs. Any removed nonzero component strictly reduces the penalty, contradicting minimality. The Hilbert space representation theorem supplies the evaluation vectors that replace a search over arbitrary functions.

**Paper or page:** [A resource-efficient model for deep kernel learning](https://arxiv.org/abs/2410.09926v1). It says: “fulfills $f<sub>i</sub>\\in V<sub>i</sub>\\subset H<sub>i</sub>$”

**Sources:** none listed. No primary source with a working link was found.
