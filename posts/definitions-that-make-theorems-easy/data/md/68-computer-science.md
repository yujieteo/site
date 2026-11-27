### Union by size bounds depth

**Remember:** Each time depth increases, the set at least doubles.

*Rules out counterexamples.* MSC 68P05 (Data structures). arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Represent each disjoint set by a rooted tree, initially a single vertex. To unite two sets, attach the root of the smaller tree below the root of the larger tree. Either root may become the parent when the sizes agree.

**Problem.** Starting with n singletons, union by size keeps every depth at most ⌊log₂ n⌋. Depth counts the edges from a vertex to its root.

**How the definition helps.** A node gains depth only when its entire tree joins one at least as large, our own explanation. After d such moves its set has at least 2ᵈ elements. The work moves to keeping the correct size at each root, which takes one addition per merger. Attaching the larger tree under a singleton at each merger can instead make a chain, our own example.

**Wikipedia:** [Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure). It says: “Both strategies ensure that trees do not become too deep.”

**Sources:** none listed. No primary source with a working link was found.

### Mutual reachability removes cycles

**Remember:** A cycle of groups would be one group.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science). arXiv cs.DM, cs.DS. Level 1: early undergraduate.

**Definition.** Group vertices when each is reachable from the other by a directed path. Keep an edge between different groups if the original graph has such an edge. Unlike one-way reachability, mutual reachability gives a partition.

**Problem.** The graph of groups has no directed cycles.

**How the definition helps.** A cycle of groups would make any two vertices on it mutually reachable, because paths inside each group connect the ends of the edges between groups (our own). So all of them would lie in one group. The work moves to finding the groups before ordering them so that all edges go forward.

**Wikipedia:** [Strongly connected component](https://en.wikipedia.org/wiki/Strongly_connected_component). It says: “If each strongly connected component is contracted to a single vertex, the resulting graph is a directed acyclic graph”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative edges settle distances

**Remember:** An extra edge cannot make a path cheaper.

*Rules out counterexamples.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Give every edge of a finite directed graph a nonnegative length. This allows zero-length edges and rules out paths that become cheaper when extended.

**Problem.** With nonnegative edge lengths, Dijkstra’s algorithm can permanently accept the unfinished vertex with the smallest tentative distance from the source. That distance is the true shortest distance.

**How the definition helps.** Nonnegative lengths make every prefix of a path cost at most the whole path. In our own proof, after accepting the source, consider a shorter competing path and its first unfinished vertex. Processing its finished predecessor would have offered that vertex a distance smaller than the chosen minimum. For our own counterexample, take edges from s to a and b of lengths 2 and 3. An edge of length −2 from b to a makes accepting distance 2 too early.

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

**Definition.** Store each version of a rooted tree by keeping its root. Once created, a node’s value and child pointers cannot change. To update a stored value, copy its node and every ancestor, then direct the copied pointers along the new path. Both versions share all branches off this path.

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

**Definition.** A binary decision diagram computes true or false by branching on the value of a variable at each test. Along every path, test variables in the same strict order, allowing skips. Keep only reachable nodes and one terminal node per output value used. Reduce the diagram by removing tests with identical children and merging nodes with the same test and children.

**Problem.** A Boolean function has a unique reduced decision diagram up to renaming nodes for each fixed variable order. Ordinary decision diagrams need not be unique.

**How the definition helps.** In our own proof, the first test must use the earliest variable that can change the output. Each branch then computes a function of fewer variables. Induction fixes those branches, and merging identical nodes fixes how branches share nodes. A diagram without reduction could represent true by a terminal or by testing a variable with both outcomes leading to true.

**Wikipedia:** [Binary decision diagram](https://en.wikipedia.org/wiki/Binary_decision_diagram). It says: “it is canonical (unique up to isomorphism) for a particular function and variable order.”

**Sources:**

- [Randal E. Bryant (1986), Graph-Based Algorithms for Boolean Function Manipulation](https://doi.org/10.1109/TC.1986.1676819)

### Binary tests certify sorting networks

**Remember:** Turn any failed comparison into a one before a zero.

*Rules out counterexamples.* MSC 68P10 (Searching and sorting), 68W10. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A comparator sends the smaller input to one wire and the larger to another. A comparator network fixes all wire pairs in advance. Unlike a general sorting procedure, it only uses these minimum and maximum gates.

**Problem.** A fixed comparator network sorts every input from a total order if it sorts every binary input.

**How the definition helps.** Every threshold commutes with minimum and maximum, so it commutes with each gate and therefore the entire network. In our own proof, a failed sort leaves a larger output before a smaller one. Map values above the smaller one to one and all other values to zero. The binary output now has a one before a zero. The work lies in checking binary inputs.

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

**Definition.** A join tree has a table at each vertex. The tables containing any particular column must form a connected subtree. Rows in adjacent tables match when they agree on all shared columns. A full join row assigns values to all columns and restricts to a row of each table.

**Problem.** On a join tree, if each row matches across every incident edge, every row extends to a full join result.

**How the definition helps.** In our own proof, connectedness carries each column value along the entire path between any two tables containing it. Start with any row and choose matching rows outward along the tree. All choices then agree on shared columns, so they form a full join row. Two filtering passes, first toward a root and then away, remove rows without matches. Our own counterexample uses three tables on bits requiring X≠Y, Y≠Z and Z≠X. Every row has pairwise matches, but three bits cannot all differ.

**Wikipedia:** [Yannakakis algorithm](https://en.wikipedia.org/wiki/Yannakakis_algorithm). It says: “After both sweeps, every remaining tuple participates in at least one full join result.”

**Sources:**

- [Philip A. Bernstein and Nathan Goodman (1981), Power of Natural Semijoins](https://doi.org/10.1137/0210059)

### Positive rule closure preserves answers

**Remember:** Adding facts can only make more positive premises true.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB, cs.AI. Level 2: later undergraduate.

**Definition.** Positive Datalog uses rules that require facts to be present. Start with the input rows and repeatedly add every conclusion whose premises hold. The resulting facts form the smallest set containing the input and closed under the rules.

**Problem.** Adding input rows cannot remove any answer produced by a positive Datalog query.

**How the definition helps.** In our own proof, every rule application available with fewer input rows remains available with more. Induction preserves this inclusion at every stage. Taking the union of stages gives the smallest set closed under the rules and containing the input. For our own counterexample with negation, report an employee whenever the absence table has no row for them. Adding an absence removes the report.

**Wikipedia:** [Datalog](https://en.wikipedia.org/wiki/Datalog). It says: “adds all of the new ground atoms that can be derived from the rules of the program in a single step.”

**Sources:** none listed. No primary source with a working link was found.

### Row swaps make joins lossless

**Remember:** If rows can swap their values, joining the projections adds nothing.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** Treat a table as a set of rows and divide its columns into disjoint groups X, Y and Z. Projection keeps only selected columns. A join combines projected rows that agree on their shared columns. A multivalued dependency from X to Y requires rows agreeing on X to exchange their Y values without creating a missing row.

**Problem.** Joining the projections onto XY and XZ recovers the original table exactly when this multivalued dependency holds.

**How the definition helps.** In our own proof, every row in the join comes from exactly the kind of exchange the dependency allows. Conversely, every exchange of this kind gives a join row. The original table always contributes all its rows to the join. For our own counterexample, the table containing just (a,b,c) and (a,d,e) lacks the join row (a,b,e).

**Wikipedia:** [Multivalued dependency](https://en.wikipedia.org/wiki/Multivalued_dependency). It says: “A multivalued dependency is a special case of a join dependency, with only two sets of values involved”

**Sources:**

- [Ronald Fagin (1977), Multivalued dependencies and a new normal form for relational databases](https://doi.org/10.1145/320557.320571)

### Determinism defeats chosen-message secrecy

**Remember:** Public encryption needs fresh randomness to hide a chosen message.

*Rules out counterexamples.* MSC 68P25 (Data encryption (aspects in computer science)), 94A60. arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Deterministic public-key encryption always gives the same ciphertext for the same message and public key. Chosen-message secrecy asks that efficient tests cannot tell which of two chosen equal-length messages was encrypted.

**Problem.** No deterministic public-key cipher with correct decryption can hide which of two distinct equal-length messages it encrypted.

**How the definition helps.** The chosen-message test lets an observer predict both possible ciphertexts when encryption is deterministic. Our own argument fixes two distinct equal-length messages and encrypts each under the public key. Correct decryption forces the outputs to differ. Comparing the challenge with these outputs identifies the message with certainty.

**Wikipedia:** [Deterministic encryption](https://en.wikipedia.org/wiki/Deterministic_encryption). It says: “While deterministic encryption schemes can never be semantically secure, they have some advantages over probabilistic schemes.”

**Sources:**

- [Shafi Goldwasser and Silvio Micali, Probabilistic Encryption (1984)](https://doi.org/10.1016/0022-0000(84)90070-9)

### A read-only input tape makes logarithmic space a meaningful class

**Remember:** Do not charge a machine for merely reading its input.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** The class L contains the decision problems that a deterministic Turing machine solves using a logarithmic amount of writable memory. The machine reads its input from a separate tape that it cannot write on. Only the cells used on the work tape count as space.

**Problem.** With a read-only input tape, space classes below linear space, such as L and NL, are meaningful, and L ⊆ P. If the input sat on the work tape, every machine would use at least linear space.

**How the definition helps.** Space then measures only the memory the machine writes, so sublinear bounds make sense. A log-space machine holds a fixed number of pointers into the input. It has only polynomially many configurations, so it runs in polynomial time, which gives L ⊆ P. The same set-up defines log-space reductions (our own).

**Wikipedia:** [L (complexity)](https://en.wikipedia.org/wiki/L_%28complexity%29). It says: “Formally, the Turing machine has two tapes, one of which encodes the input and can only be read, whereas the other tape has logarithmic size but can be written as well as read.”

**Sources:** none listed. No primary source with a working link was found.

### Short certificates prove closure of NP under Kleene star

**Remember:** Split the word and certify each piece.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)). arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A language is in NP if a verifier can check short certificates in polynomial time. A word belongs to the language exactly when some certificate makes the verifier accept it. The certificate length is bounded by a polynomial in the word length. The machine definition instead accepts if some branch of a polynomial-time computation accepts.

**Problem.** If L is in NP, then L\* is in NP. Here L\* contains all finite concatenations of words from L, including the empty concatenation.

**How the definition helps.** Certificates let the verifier check each piece independently (our own). For a nonempty input, the certificate gives cuts into nonempty pieces and one certificate per piece (our own). Empty pieces can be omitted, so there are at most as many pieces as input letters (our own). The verifier checks all pieces in polynomial time and accepts the empty input separately (our own). The work moves to proving that certificate verification and acceptance along a machine branch define the same class.

**Wikipedia:** [NP (complexity)](https://en.wikipedia.org/wiki/NP_%28complexity%29). It says: “NP is closed under union, intersection, concatenation, Kleene star and reversal.”

**Sources:** none listed. No primary source with a working link was found.

### One NP-complete problem decides whether P equals NP

**Remember:** An NP-complete problem is as hard as all of NP at once.

*True by definition.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** NP is the class of yes-or-no problems whose yes answers can be checked in polynomial time. A problem C is NP-complete if C is in NP and every problem in NP reduces to C by a polynomial-time many-one reduction. Such a reduction is a polynomial-time map that turns each instance of a problem into an instance of C with the same answer.

**Problem.** If one NP-complete problem has a polynomial-time algorithm, then every problem in NP has one. So P = NP exactly when a single NP-complete problem is in P.

**How the definition helps.** The theorem follows at once from the definition, because polynomial-time reductions compose. To solve a problem in NP, reduce it to C and then run the fast algorithm for C. The hard part is the Cook–Levin theorem, which shows that an NP-complete problem, Boolean satisfiability, exists at all. After it, each new NP-completeness proof needs only one reduction.

**Wikipedia:** [NP-completeness](https://en.wikipedia.org/wiki/NP-completeness). It says: “Hence, if we could find valid solutions of some NP-complete problem quickly (when they exist), we could quickly find valid solutions for every other problem in which a given solution can be easily verified.”

**Sources:**

- [Cook, S. A. (1971). The complexity of theorem-proving procedures. Proc. 3rd ACM Symposium on Theory of Computing, 151–158.](https://doi.org/10.1145/800157.805047)

### Binary grammar rules fix the length of every nonempty derivation

**Remember:** One rule per letter and one fewer split.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form, a rule either replaces a variable by two variables or emits one letter. Only the start variable can have an empty rule, and that variable then cannot appear on a rule’s right side.

**Problem.** In Chomsky normal form, every derivation of a word of length n greater than zero takes exactly 2n − 1 rule applications.

**How the definition helps.** In our own proof, the two permitted rule types determine their counts from the final word length. Exactly n rules emit letters, each removing one variable. Every split adds one variable. Starting with one variable and ending with none therefore requires n − 1 splits. The normal-form theorem does the separate work of converting a context-free grammar while preserving its language.

**Wikipedia:** [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “Every grammar in Chomsky normal form is context-free, and conversely, every context-free grammar can be transformed into an equivalent one”

**Sources:**

- [Noam Chomsky. On Certain Formal Properties of Grammars. 1959.](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Chomsky normal form forces repeated symbols along long derivation paths

**Remember:** Many leaves in a binary tree force a long path.

*True by definition. Confidence: medium.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form, a rule replaces one placeholder by two placeholders or by a letter. The start symbol may also produce the empty word if it never occurs on a right-hand side. These rules give a derivation tree that branches in two until each branch ends in a letter.

**Problem.** If the grammar has m placeholders, take a word of length greater than 2ᵐ⁻¹. Some placeholder must occur twice along one path in its derivation tree.

**How the definition helps.** The binary form bounds the number of letters a tree of a given height can produce (our own). If no placeholder repeats on a path, the path has at most m − 1 branching steps, so the word has at most 2ᵐ⁻¹ letters (our own). A longer word therefore has a path that repeats a placeholder. The work moves to proving that context-free grammars can be converted to this form.

**Wikipedia:** [Pumping lemma for context-free languages](https://en.wikipedia.org/wiki/Pumping_lemma_for_context-free_languages), [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “If s is sufficiently long, its derivation tree w.r.t. a Chomsky normal form grammar must contain some nonterminal N twice on some tree path”

**Sources:**

- [N. Chomsky, On certain formal properties of grammars, Information and Control 2 (1959)](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Context-free grammars show context-free languages admit union, concatenation and star

**Remember:** A fresh start symbol joins grammars without mixing their rules.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A context-free grammar replaces one placeholder at a time, regardless of its neighbors. It generates words by starting at a designated placeholder and replacing placeholders until only letters remain. The alternative definition uses a pushdown automaton, a finite-state machine with a stack.

**Problem.** Context-free languages are closed under union, concatenation and Kleene star. The star operation takes all finite concatenations, including the empty word.

**How the definition helps.** The grammar definition lets a fresh start rule choose or join derivations (our own). After renaming the placeholders so the grammars share none, use S → S₁ \| S₂ for union, S → S₁S₂ for concatenation, and S → S₁S \| ε for star (our own). With pushdown automata, these constructions must also manage the stack at the boundaries (our own). The work moves into proving that pushdown automata and grammars give the same languages (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “the union of two context-free languages is always context-free.”

**Sources:** none listed. No primary source with a working link was found.

### A zero threshold turns probabilities into reachability

**Remember:** At zero, one positive path is enough.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A finite probabilistic automaton assigns a probability to each path taken while reading a word. Usually it accepts when the sum of accepting path probabilities exceeds a chosen threshold. At threshold zero, it accepts whenever this sum is positive.

**Problem.** Every language accepted at threshold zero by a finite probabilistic automaton is regular.

**How the definition helps.** In our own proof, a finite sum of nonnegative path probabilities is positive exactly when one path has positive probability. Keep the possible starting states and the transitions with positive probability. The resulting machine accepts if any path reaches an accepting state. The equivalence between this kind of machine and deterministic finite automata gives regularity.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Each 0-stochastic language is regular.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

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

**Definition.** The right quotient L / K contains the words u for which uv belongs to L for some v in K. A deterministic finite automaton assigns every input word a unique ending state. Its accepting states determine which words it accepts. The alternative definition of regular languages uses regular expressions.

**Problem.** If L is regular and K is any language over the same alphabet, then L / K is regular.

**How the definition helps.** In the automaton definition, the existence of an allowed suffix depends only on the state reached so far (our own). Keep the machine and accept from states that can reach an old accepting state by reading some word of K (our own). This proves existence even if K has no algorithm to decide membership (our own). An expression does not directly record the state after a prefix (our own). The work moves into Kleene’s theorem equating finite automata with regular expressions (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Even more, regular languages are closed under quotients with arbitrary languages: If L is regular then L / K is regular for any K.”

**Sources:** none listed. No primary source with a working link was found.

### Deterministic paths make regular word counts rational

**Remember:** One path per word makes matrix powers count words.

*True by definition.* MSC 68Q45 (Formal languages and automata), 05A15. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Count the letters that move between each pair of states in a deterministic finite automaton. Put these counts in a matrix. Count each accepted word by its path instead of enumerating words from a regular expression.

**Problem.** The generating function for the number of accepted words of each length is rational for every regular language.

**How the definition helps.** Determinism makes each accepted word count exactly once among paths from the start to an accepting state (our own). If M counts letters on transitions, the nth power of M counts paths of length n. Summing zⁿMⁿ over all n gives the inverse of I − zM, whose entries are rational in z. The start row and accepting columns of this matrix give the series.

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

### Nondeterministic automata recognize reversed regular languages by reversing transitions

**Remember:** Reverse every arrow and swap the start and accepting states.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic finite automaton allows zero or several moves for a given state and letter. It may also have several start states. A word is accepted if at least one run from a start state ends in an accepting state. The deterministic definition uses one start state and exactly one move for each state and letter.

**Problem.** If L is regular, the language of its words written backwards is also regular.

**How the definition helps.** The nondeterministic definition allows the several starts and moves that reversal can produce. Reverse every transition and exchange the sets of start and accepting states. Each accepting run now reads its word backwards (our own). The work moves to determinization, which proves that the nondeterministic and deterministic definitions agree (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Given a nondeterministic finite automaton to recognize L, an automaton for Lᴿ can be obtained by reversing all transitions and interchanging starting and finishing states.”

**Sources:** none listed. No primary source with a working link was found.

### Pushdown automata keep intersections with regular languages context-free

**Remember:** Put the finite automaton in the control and keep the stack.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A pushdown automaton is a finite-state machine with a stack, whose top symbol can affect each move. A machine can also make a move without reading a letter. It can have several possible moves, and it accepts if some run accepts. Such machines and context-free grammars define the same languages.

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

**Definition.** Regular expressions start with the empty language and a language for each single letter. They build new languages by union, concatenation and Kleene star, which takes all finite concatenations. A language is regular if an expression describes it. The alternative definition uses a finite automaton, a machine with finitely many states.

**Problem.** Regular languages are closed under union, concatenation and Kleene star.

**How the definition helps.** The expression definition builds in all three closure rules. For a finite automaton, star instead takes a construction that can restart the machine after an accepting run (our own). To apply the expression proof to automata, use Kleene’s theorem, which proves that both definitions give the same languages.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “If A is a regular language, A\* (Kleene star) is a regular language. Due to this, the empty string language {ε} is also regular.”

**Sources:** none listed. No primary source with a working link was found.

### Sets of reachable states make nondeterministic automata deterministic

**Remember:** Track all possible states as one definite set.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic finite automaton can follow several transitions for a letter. Use the set of all currently reachable states as one state of a new machine. For each letter, take the union of the destinations from all states in the set.

**Problem.** Every nondeterministic finite automaton without empty-input moves has an equivalent deterministic finite automaton.

**How the definition helps.** In our own proof, taking all possible states together gives exactly one next set for each input letter. Start with the set of initial states. Induction on the input length shows that the stored set contains exactly the states reachable in the original machine. Accept if this set contains an accepting state. Finitely many subsets suffice because the original state set is finite.

**Wikipedia:** [Powerset construction](https://en.wikipedia.org/wiki/Powerset_construction). It says: “In contrast, to simulate an NFA, one needs to keep track of a set of states: all of the states that the automaton could reach after seeing the same prefix of the input”

**Sources:** none listed. No primary source with a working link was found.

### The Nerode relation makes regularity a finite-index condition

**Remember:** States of the minimal automaton are what the future can still distinguish.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Fix a language L, a set of strings. Two strings x and y are Nerode equivalent if, for every string z, xz is in L exactly when yz is in L. This is an equivalence relation defined from L alone, with no automaton in sight.

**Problem.** A language L is regular exactly when the Nerode relation has finitely many classes. The number of classes is then the number of states of the minimal deterministic automaton, which is unique up to isomorphism.

**How the definition helps.** The classes remember exactly what matters for the rest of the input, so they are the states of an automaton by definition. Reading a letter a moves the class of x to the class of xa. Any deterministic automaton for L puts only equivalent strings in the same state, so it has at least as many states. This gives minimality and uniqueness.

**Wikipedia:** [Myhill–Nerode theorem](https://en.wikipedia.org/wiki/Myhill%E2%80%93Nerode_theorem). It says: “The Myhill–Nerode theorem shows that finiteness is necessary and sufficient for language regularity.”

**Sources:**

- [A. Nerode, Linear automaton transformations, Proceedings of the American Mathematical Society 9 (1958) 541–544](https://doi.org/10.1090/S0002-9939-1958-0135681-9)

### The semantic Brzozowski derivative makes derivatives along words compose

**Remember:** Removing u and then v removes uv.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** For a language L and a word u, the derivative of L after u is the set of words w with uw in L. Brzozowski also gives syntax rules that compute derivatives of regular expressions symbol by symbol, for union, concatenation and repetition.

**Problem.** The derivative of L after uv equals the derivative after v of the derivative after u.

**How the definition helps.** With the semantic definition, both sides contain w exactly when uvw lies in L. Wikipedia states that the derivative after a word reduces to successive derivatives after its symbols. The work moves to the syntax rules. One must prove that they compute the same language as the semantic definition.

**Wikipedia:** [Brzozowski derivative](https://en.wikipedia.org/wiki/Brzozowski_derivative). It says: “The derivative with respect to an arbitrary string reduces to successive derivatives over the symbols of that string”

**Sources:**

- [Janusz A. Brzozowski, Derivatives of Regular Expressions](https://doi.org/10.1145/321239.321249)

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

**Definition.** A block cellular automaton splits the grid into disjoint blocks of the same shape at each step. It applies one rule to each block. Every assignment of cell states is allowed. In an ordinary cellular automaton, the neighborhoods used for simultaneous updates can overlap.

**Problem.** Each step is invertible exactly when the block rule is a permutation. The inverse of a schedule of steps uses the inverse rules in reverse order.

**How the definition helps.** Invert each block independently because its cells occur in no other block at that step. If two block states have the same output, changing just that block gives a collision. The work moves to checking a single finite table rather than finding a reverse rule for the whole grid, our own explanation.

**Wikipedia:** [Block cellular automaton](https://en.wikipedia.org/wiki/Block_cellular_automaton). It says: “As long as the rule for evolving each block is reversible, the entire automaton will also be.”

**Sources:**

- [Norman Margolus (1984), Physics-like models of computation](https://doi.org/10.1016/0167-2789(84)90252-5)

### Shift polynomials generate Rule 90 patterns

**Remember:** Raise the shift sum to get the pattern at any time.

*True by definition.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 2: later undergraduate.

**Definition.** Rule 90 updates each bit on the integer line by adding its two neighbors modulo two. Encode a configuration with finitely many live cells as a polynomial whose exponent records position and whose coefficient records the bit. Allow negative exponents. One update then multiplies the polynomial by x + 1/x, using coefficients modulo two.

**Problem.** Start with only the origin live. At time t, every second cell from −t to t gives the parity of the corresponding entry in row t of Pascal’s triangle.

**How the definition helps.** In our own proof, multiplication turns t updates into one power, whose coefficients the binomial theorem gives directly. Multiplication by x shifts a bit one position right, and division by x shifts it left. Adding those shifts modulo two proves the polynomial rule agrees with the cell update. Its expansion uses exponents spaced two apart, so all intervening cells are zero.

**Wikipedia:** [Rule 90](https://en.wikipedia.org/wiki/Rule_90). It says: “The diagram has a 1 wherever Pascal's triangle has an odd number, and a 0 wherever Pascal's triangle has an even number.”

**Sources:**

- [Olivier Martin, Andrew M. Odlyzko, and Stephen Wolfram (1984), Algebraic properties of cellular automata](https://doi.org/10.1007/BF01223745)

### Real time excludes stale reads

**Remember:** A finished write comes before a later read.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** A register stores a value, and a sequential read returns the most recently written value or the initial value. For a history of completed operations, linearizability requires a valid sequential order preserving the observed results. Whenever one operation finishes before another starts, that order must put it first. Sequential consistency requires only that the valid order respect each process’s own program order.

**Problem.** In a linearizable register, a read that starts after a write completes cannot return the older value if there is no other write.

**How the definition helps.** Real-time order forces the read to follow the write in the sequential order (our own). For example, one process finishes writing 1 and another then reads the initial 0 (our own). Sequential consistency permits that result by placing the reader first. The work moves to proving that all results admit one sequential order within their time intervals.

**Wikipedia:** [Linearizability](https://en.wikipedia.org/wiki/Linearizability), [Sequential consistency](https://en.wikipedia.org/wiki/Sequential_consistency). It says: “If an operation op₁ completes (gets a response) before op₂ begins (invokes), then op₁ precedes op₂ in σ.”

**Sources:**

- [Maurice P. Herlihy and Jeannette M. Wing, Linearizability: A Correctness Condition for Concurrent Objects (1990)](https://doi.org/10.1145/78969.78972)

### Boundary relations stack strips

**Remember:** Match the shared boundary to stack two strips.

*True by definition.* MSC 68R05 (Combinatorics in computer science), 05B45. arXiv cs.DM. Level 2: later undergraduate.

**Definition.** Each square tile has fixed orientation and a color on each edge. Touching edges must have the same color. Relate two color sequences extending infinitely in both directions when they form the lower and upper boundaries of a valid tile row. Compose relations by using one middle sequence as the upper boundary of one strip and the lower boundary of the next.

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

**How the definition helps.** An augmenting path turns a comparison with all larger matchings into a test on the current matching alone. Swapping membership along the path adds one edge. Conversely, keep the edges that lie in exactly one of the current matching and a larger one. These split into alternating paths and even cycles, and some path has an extra edge from the larger matching, so it augments the current one.

**Wikipedia:** [Berge's theorem](https://en.wikipedia.org/wiki/Berge%27s_theorem). It says: “D consists of paths and even cycles”

**Sources:** none listed. No primary source with a working link was found.

### Layered walks test divisibility

**Remember:** Count steps by changing layers.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C20. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a strongly connected directed graph, each vertex can reach every other by following arrows. For a finite such graph containing a cycle, its period is the greatest common divisor of its directed cycle lengths. Give each vertex k copies numbered modulo k. Each arrow goes from every copy of its tail to the next numbered copy of its head.

**Problem.** Let k be a positive integer at most the number of vertices. The period is divisible by k exactly when copy zero of a fixed vertex reaches no other copy of that vertex.

**How the definition helps.** The copy number records the length of a directed walk modulo k (our own). If k divides every cycle length, every closed walk has length divisible by k, because it splits into cycles. So every walk back to the fixed vertex ends in copy zero. Conversely, walk to a cycle whose length k does not divide, go around it, and return; going around once more changes the final copy.

**Paper or page:** [The complexity of computing the period and the exponent of a digraph](https://arxiv.org/abs/2408.05762v2). It says: “k divides the period of G if and only if there is no undirected path”

**Sources:**

- [Stefan Kiefer, Andrew Ryzhikov, The complexity of computing the period and the exponent of a digraph, arXiv:2408.05762v2](https://arxiv.org/abs/2408.05762v2)

### Reweighting preserves shortest paths

**Remember:** The middle potentials cancel.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Assign each vertex v of a finite directed graph a number h(v), called its potential. Add h(u) − h(v) to the weight of each edge from u to v.

**Problem.** Reweighting preserves the shortest paths between any fixed pair of vertices. If no cycle has negative weight, some potential makes every edge weight nonnegative.

**How the definition helps.** In our own argument, the intermediate potentials cancel, so paths with the same endpoints gain the same amount. Adding a constant per edge would instead penalize paths with more edges. Add a source with zero-weight edges to all vertices. Without negative cycles, the Bellman–Ford algorithm computes the distances h from that source. Every edge weight w satisfies h(v) ≤ h(u) + w, making its new weight nonnegative.

**Wikipedia:** [Johnson's algorithm](https://en.wikipedia.org/wiki/Johnson%27s_algorithm). It says: “It works by using the Bellman–Ford algorithm to compute a transformation of the input graph that removes all negative weights”

**Sources:**

- [Donald B. Johnson, Efficient Algorithms for Shortest Paths in Sparse Networks (1977)](https://doi.org/10.1145/321992.321993)

### Twin classes replace sets with counts

**Remember:** Same class and same membership counts mean the names can be shuffled.

*True by definition. Confidence: medium.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a finite simple undirected graph, two vertices are twins if they have the same neighbors outside the pair. Group twins into classes. For a list of chosen vertex sets, record each vertex’s membership pattern, which lists exactly the sets containing it. Count each pattern separately within each class.

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

**How the definition helps.** The mechanical definition gives balance and frequency by cancellation when adjacent differences are added (our own). For floors, the sum of the n letters after position m is ⌊(m + n)θ + x⌋ − ⌊mθ + x⌋. This is ⌊nθ⌋ or ⌊nθ⌋ + 1, and the same two bounds hold for ceilings. Dividing the initial block count by n gives the frequency θ in the limit. The work goes into the equivalence between counting distinct blocks and constructing the letters by floor or ceiling differences.

**Wikipedia:** [Sturmian word](https://en.wikipedia.org/wiki/Sturmian_word). It says: “The sequence w is Sturmian if it is the difference of non-homogeneous Beatty sequences, that is, for some x∈\[0,1) and some irrational θ∈(0,1)”

**Sources:**

- [M. Morse, G. A. Hedlund, Symbolic dynamics II. Sturmian trajectories, Amer. J. Math. 62 (1940) 1–42](https://doi.org/10.2307/2371431)

### Consistent heuristics prevent reopening

**Remember:** Consistency means every reweighted edge still has nonnegative cost.

*Rules out counterexamples.* MSC 68T20 (Problem solving in the context of artificial intelligence (heuristics, search strategies, etc.)). arXiv cs.AI. Level 2: later undergraduate.

**Definition.** A heuristic estimates the remaining cost from a vertex to the goal. A\* expands a vertex with least known path cost plus estimated remaining cost. A consistent estimate is zero at the goal and never exceeds an outgoing edge cost plus the estimate at its other end. An admissible estimate never exceeds the true remaining cost.

**Problem.** On a finite graph with nonnegative edge costs, A\* with a consistent heuristic finds a cheapest path to each vertex by its first expansion.

**How the definition helps.** Consistency makes every reweighted edge cost nonnegative when we add the next estimate and subtract the current estimate. These adjustments telescope along paths, so Dijkstra’s shortest-path theorem applies. Our own example uses edges S→A, S→B, B→A and A→G with costs 3, 1, 1 and 3. Set all estimates to zero except the estimate 4 at B. The estimates are admissible, but A\* expands A at cost 3 before B reveals cost 2. Without reopening A, it returns 6 instead of 5.

**Wikipedia:** [Consistent heuristic](https://en.wikipedia.org/wiki/Consistent_heuristic). It says: “then A\* is equivalent to best-first search on that graph using Dijkstra's algorithm.”

**Sources:**

- [Peter E. Hart, Nils J. Nilsson, and Bertram Raphael (1968), A Formal Basis for the Heuristic Determination of Minimum Cost Paths](https://doi.org/10.1109/TSSC.1968.300136)

### Stable models reject circular support

**Remember:** A loop cannot start a derivation without a seed.

*Rules out counterexamples.* MSC 68T27 (Logic in artificial intelligence), 68T30. arXiv cs.AI. Level 2: later undergraduate.

**Definition.** Consider a finite program whose rules contain no variables and have one conclusion each. Given proposed true facts, discard rules with a negative premise that names a proposed fact. Erase the remaining negative premises to obtain the reduct. The proposal is stable if it equals the smallest set of facts closed under the reduct’s rules.

**Problem.** Each fact in a stable model has a finite derivation using the reduct. A cycle of rules cannot establish its own facts without an outside derivation.

**How the definition helps.** Build the least model of the reduct by adding only facts whose premises already hold, our own explanation. At any stage, an unseeded positive cycle has nothing to add. The one-rule program “p if p” admits {p} under ordinary satisfaction, but its only stable model is empty, our own example. The underlying theorem identifies the least model of positive rules with the result of this forward iteration.

**Wikipedia:** [Stable model semantics](https://en.wikipedia.org/wiki/Stable_model_semantics). It says: “We say that I is a stable model of P if I is the stable model of the reduct of P relative to I.”

**Sources:** none listed. No primary source with a working link was found.

### Moral graphs make blankets symmetric

**Remember:** If I am your neighbor, you are mine.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 2: later undergraduate.

**Definition.** A Bayesian network represents variables by vertices of a directed graph without directed cycles. The graphical Markov blanket lists a vertex’s parents, children, and other parents of its children. Equivalently, join parents of each common child and erase arrow directions. The neighbors in this undirected graph form the same blanket.

**Problem.** In a Bayesian network, one node belongs to another node’s graphical Markov blanket exactly when the reverse holds.

**How the definition helps.** In our own proof, membership becomes adjacency in an undirected graph, which is symmetric. Each original arrow accounts for a parent or child. Each added edge accounts for a shared child. These observations identify the neighbor definition with the original list.

**Paper or page:** [Markov Blanket Discovery using Minimum Message Length](https://arxiv.org/abs/2107.08140). It says: “For any two distinct variables Xᵢ, Xⱼ ∈ X: Xⱼ ∈ MBᵢ ⇔ Xᵢ ∈ MBⱼ.”

**Sources:**

- [Markov Blanket Discovery using Minimum Message Length](https://arxiv.org/abs/2107.08140)

### Coefficients test higher-order monotonicity

**Remember:** Read the sign from the highest coefficient.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Fix an integer k ≥ 1 and k + 1 planar points with distinct horizontal coordinates. Call them positive if a function through them has a nonnegative kth derivative everywhere. The alternative test reads the coefficient of xᵏ in the unique polynomial of degree at most k through the points.

**Problem.** The points are positive exactly when the coefficient of xᵏ in their interpolating polynomial is nonnegative. Likewise, some function through them has a nonpositive kth derivative everywhere exactly when that coefficient is nonpositive.

**How the definition helps.** In our own proof, a nonnegative coefficient immediately gives the required function because the polynomial’s kth derivative equals that coefficient times k factorial. Conversely, subtract the polynomial from any function witnessing positivity. The difference vanishes at all k + 1 coordinates. Applying Rolle’s theorem k times shows that the two kth derivatives agree somewhere between the extreme coordinates. This proves the coefficient test, and reversing the signs proves its negative counterpart.

**Paper or page:** [Higher-order Erdos--Szekeres theorems](https://arxiv.org/abs/1111.3824v3). It says: “and it equals f⁽ᵏ⁾(x)/k! (which is a constant function).”

**Sources:**

- [Marek Elias, Jiri Matousek, Higher-order Erdos–Szekeres theorems, arXiv:1111.3824v3](https://arxiv.org/abs/1111.3824v3)

### Difference sets turn clearance into distance

**Remember:** The shortest difference vector is the clearance between the shapes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG, cs.GR. Level 2: later undergraduate.

**Definition.** For two shapes, form the set of all vectors a−b, with one point from each shape. It records their possible relative positions. The direct distance definition searches pairs of points in the two shapes.

**Problem.** For two nonempty compact shapes, their minimum distance is the distance from the origin to their difference set. Zero distance means the shapes intersect.

**How the definition helps.** In our own proof, the lengths of the difference vectors are exactly the distances between pairs of points. Compactness ensures a minimum exists. For convex shapes the difference set is convex. The computational work lies in finding its nearest point without listing all differences. To maximize a dot product with a−b, maximize it over a and minimize it over b.

**Wikipedia:** [Gilbert–Johnson–Keerthi distance algorithm](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Johnson%E2%80%93Keerthi_distance_algorithm). It says: “the configuration space obstacle (CSO) of two convex shapes, more commonly known as the Minkowski difference.”

**Sources:**

- [Elmer G. Gilbert, Daniel W. Johnson, and S. Sathiya Keerthi (1988), A fast procedure for computing the distance between complex objects in three-dimensional space](https://doi.org/10.1109/56.2083)

### Half edges encode rotation around vertices

**Remember:** Cross the edge, then step along the next face.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 68P05. arXiv cs.GR, cs.CG. Level 2: later undergraduate.

**Definition.** A polygon mesh represents a surface by faces meeting along edges. Assume every edge has two faces and the faces around each vertex form one ring. Orient adjacent face boundaries oppositely along their shared edge. Store each directed half edge with its reverse, called its twin, and its successor around its face.

**Problem.** Starting from any outgoing half edge at a vertex, repeatedly taking the twin and then the successor visits every outgoing half edge before returning.

**How the definition helps.** In our own proof, the two stored links move directly to the next face in the ring. The twin ends at the vertex, so its successor starts there. A single ring gives one cycle containing every outgoing half edge. With only lists of face vertices, one must first identify matching edges and check the ring condition.

**Wikipedia:** [Doubly connected edge list](https://en.wikipedia.org/wiki/Doubly_connected_edge_list). It says: “A half-edge has a pointer to the next half-edge and previous half-edge of the same face.”

**Sources:** none listed. No primary source with a working link was found.

### Lower envelopes give power diagrams

**Remember:** Subtract the common square, then compare only planes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Give each center c in Euclidean space a real weight w. Its power at x is the squared distance from x to c minus w. Its power cell consists of points where this value is minimal among all centers, including ties.

**Problem.** Each power cell is the set where one affine function attains the pointwise minimum of all the functions. An affine function is a linear function plus a constant.

**How the definition helps.** Squaring the distance gives the same quadratic term x · x for every center (our own). Subtracting it leaves the affine function c · c − 2c · x − w for center c, and removing a common term preserves every comparison and tie. Ordinary distance would leave square roots in the comparison. The remaining work is to construct the pointwise minimum of these affine functions.

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

**Definition.** A polytope is the convex hull of a nonempty finite set of points. Its optimization oracle returns a point that maximizes a requested linear function. A Minkowski sum consists of sums of one point from each polytope. For the sum, use this interface instead of listing its vertices.

**Problem.** One optimization query on a Minkowski sum needs only one query per summand, followed by addition.

**How the definition helps.** In our own argument, an oracle can maximize over each summand separately without listing the vertices of the sum. A linear function takes a sum of points to the sum of their values. Adding one maximizing point from each summand therefore gives a maximizing point for the whole sum. The work lies in answering the individual queries.

**Paper or page:** [Efficient edge-skeleton computation for polytopes defined by oracles](https://arxiv.org/abs/1412.3987v1). It says: “If P₁, …, Pᵣ ⊂ ℝᵈ are given by optimization oracles, then we compute an optimization oracle”

**Sources:**

- [Ioannis Z. Emiris, Vissarion Fisikopoulos, Bernd Gärtner, Efficient edge-skeleton computation for polytopes defined by oracles, arXiv:1412.3987v1](https://arxiv.org/abs/1412.3987v1)

### Plane equations transform normals

**Remember:** Apply the inverse map to the input of the plane equation.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.GR. Level 2: later undergraduate.

**Definition.** Define a normal by the coefficients of a linear equation that every tangent vector satisfies. This treats the normal as a linear functional, which takes a vector to a number. The usual geometric definition gives a perpendicular arrow.

**Problem.** Transport a plane equation by an invertible linear transformation. The new coefficient column equals the inverse transpose times the old column.

**How the definition helps.** In our own derivation, substituting the inverse transformation into the old equation gives the new equation immediately. For a map with matrix A, a new tangent vector w came from A⁻¹w. The old equation n·A⁻¹w = 0 therefore gives the new coefficient column (A⁻¹)ᵀn. The Euclidean dot product identifies this column with a perpendicular vector. Divide it by its length if a unit normal is required.

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

**Definition.** Knots are a nondecreasing sequence of parameter values, with a span between consecutive knots. A degree-zero B-spline basis function indicates one half-open span. The standard recursion builds each higher-degree function as a linearly weighted sum of two adjacent functions of the preceding degree. A spline curve sums these functions times their respective control points.

**Problem.** Changing one control point of a degree-p B-spline can affect the curve only within the closed interval covering its p+1 knot spans.

**How the definition helps.** In our own proof, the recursion can enlarge the interval where a function is nonzero by at most one span per degree. Adjacent lower-degree functions together cover that larger interval. Changing a control point changes only the term multiplying its basis function. A description by separate polynomial pieces and matching conditions does not show this locality directly. The work lies in proving the recursive functions form a basis for that spline space.

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

**Problem.** The calculation can use at most a constant times one plus the frontier width in working words, excluding input and streamed output.

**How the definition helps.** The frontier counts precisely the past values that later steps may still read. In our own single-pass argument, keep these values in place of a table containing every result. Assume the order and last uses are available and each update has bounded input count and needs constant temporary space. Keep each value and its vertex label in a constant number of words, then discard them after the last use. The paper’s recomputation lemma also assumes that the boundary values are available.

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

**Definition.** In a finite directed network, each edge has a nonnegative capacity. A feasible flow respects those capacities and conserves flow at every vertex except the source and sink. Give each edge a forward residual edge for unused capacity and a backward residual edge for flow that can be undone. Keep only residual edges with positive capacity.

**Problem.** A flow is maximum exactly when its residual graph has no path from source to sink.

**How the definition helps.** In our own proof, allowing backward steps makes a residual path describe a feasible increase even when some earlier decisions must be reversed. Increase the flow along that path by its smallest residual capacity, undoing flow at backward steps. If no path exists, group all vertices reachable from the source. Every original edge leaving this group is full, and every original edge entering it carries zero flow. Flow conservation then makes the current value equal the group’s total outgoing capacity, an upper bound for every flow.

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

**Definition.** Number each process’s events starting at one. Causal precedence follows local event order and links from sending a message to receiving it, including chains of these steps. For each event, include that event and all its causal predecessors. Record the largest included event number for each process, using zero if it has none.

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

**How the definition helps.** Both representatives agree exactly when the first element of the union belongs to the intersection. Every union element has the same chance of coming first. Thus counting favorable first elements gives the intersection size divided by the union size. In our own comparison, a shared random order replaces counting all common elements with one equality test. Estimating the probability requires repeated independent orders.

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

**How the definition helps.** The triangle inequality lets us skip a repeated vertex without increasing the cost. Repeating this step leaves a tour. In our own example, travel between a center and each of three leaves costs 1, while travel between leaves costs 10. Returning to the center after each leaf costs 6, but every tour costs 22. In Christofides’ algorithm, the main work is to bound the cost of the initial walk.

**Wikipedia:** [Christofides algorithm](https://en.wikipedia.org/wiki/Christofides_algorithm). It says: “Thanks to the triangle inequality, even though the Euler tour might revisit vertices, shortcutting does not increase the weight,”

**Sources:**

- [Nicos Christofides, Worst-Case Analysis of a New Heuristic for the Travelling Salesman Problem (1976, published 2022)](https://doi.org/10.1007/s43069-021-00101-z)

### End markers make rotation sorting reversible

**Remember:** Use one unique marker to recover the start of a circular string.

*Rules out counterexamples.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Append a marker that does not occur in the input. Sort all cyclic rotations of the marked string and keep the last column. Without the marker, the same construction forgets which rotation was the input.

**Problem.** The last column of the sorted rotations determines the original string once a unique end marker is appended.

**How the definition helps.** The marker tells the original string apart from its rotations. Without it, abc and bca have the same rotations and the same last column (our own). To rebuild the rows, attach the last column on the left and sort; each round extends every sorted prefix by one letter (our own). The row that ends with the marker is the original string (our own).

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

**Definition.** An operation runs from a call to its reply. A history is linearizable if its operations fit a serial order that gives the specified results for each object. This order must put each completed operation before every operation called after its reply. Sequential consistency requires the serial order to respect each process’s own order, even when it reverses the real-time order across processes.

**Problem.** Consider a finite history of completed operations, each on one object, with one outstanding call per process at most. The history is linearizable exactly when each object’s history is linearizable.

**How the definition helps.** The real-time rule lets us place each object’s serial order inside the operations’ actual time intervals. In our own proof, give each operation the latest call time among itself and its predecessors in its object’s order. Merging all objects’ lists by these times, keeping each object’s order at ties, gives a global order that respects real time. Conversely, restricting a global order to one object keeps both conditions.

**Wikipedia:** [Linearizability](https://en.wikipedia.org/wiki/Linearizability). It says: “If an operation op₁ completes (gets a response) before op₂ begins (invokes), then op₁ precedes op₂ in σ.”

**Sources:**

- [Maurice P. Herlihy and Jeannette M. Wing, Linearizability: A Correctness Condition for Concurrent Objects (1990)](https://doi.org/10.1145/78969.78972)

### Precise definitions turned Brewer's CAP conjecture into a theorem

**Remember:** During a partition, a store must choose between answering and staying consistent.

*Makes the theorem clean to state or prove.* MSC 68M14 (Distributed systems), 68P15. arXiv cs.DC, cs.DB. Level 3: graduate.

**Definition.** Gilbert and Lynch model a distributed data store as a shared object that clients read and write. Consistency means that every read receives the most recent write or an error. Availability means that every request to a non-failing node gets a response. Partition tolerance means that the system keeps working when the network drops or delays any number of messages between nodes.

**Problem.** No distributed store in this model can be consistent, available and partition tolerant at once. Brewer had stated this only in words, which was too vague to prove.

**How the definition helps.** With these definitions the proof is short (our own summary). Split the nodes into two groups and drop every message between them. A write in one group must complete, and a later read in the other group must answer without having heard of the write, which breaks consistency. The page notes that this consistency is not the consistency of ACID database transactions.

**Wikipedia:** [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem). It says: “In 2002, Seth Gilbert and Nancy Lynch of MIT published a formal proof of Brewer's conjecture, elevating it to a theorem.”

**Sources:**

- [S. Gilbert and N. Lynch, Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services, ACM SIGACT News 33 (2002) 51–59](https://doi.org/10.1145/564585.564601)

### Replica joins ignore order

**Remember:** Joining the same states gives the same result in any order.

*True by definition.* MSC 68M14 (Distributed systems). arXiv cs.DC. Level 3: graduate.

**Definition.** A replica is a local copy of shared data. Order its possible states by how much update information they contain, starting from a common least state. Updates may leave a state unchanged or move it upward. Merge by taking the least state above both inputs, called their join, instead of keeping the last state received.

**Problem.** Replicas that start with the same initial state agree once they incorporate the same set of generated update states. Reordering or repeating those state deliveries does not change the result.

**How the definition helps.** Taking the least state above all incorporated updates makes their order and repetition irrelevant. In our own argument, merging two histories by a join gives the least state above their combined updates. An update at one replica already includes its previous state. The work lies in designing an order and updates with these properties.

**Wikipedia:** [Conflict-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). It says: “The merge function should compute the join for any pair of replica states”

**Sources:**

- [Marc Shapiro, Nuno Preguiça, Carlos Baquero, and Marek Zawirski, Conflict-Free Replicated Data Types (2011)](https://doi.org/10.1007/978-3-642-24550-3_29)

### Intrinsically typed terms make type preservation hold by construction

**Remember:** A reduction step cannot leave its type.

*True by definition.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Define terms so that each term carries its type and its context of variables. A reduction step then always goes between terms with the same context and type. The extrinsic alternative defines reduction on untyped raw terms and assigns types by a separate relation.

**Problem.** Every reduction step preserves the type of the term.

**How the definition helps.** The type is part of the definition of a reduction step, so no preservation proof is needed, as the PLFA chapter on de Bruijn terms says. For the step that applies a function, preservation rests on substitution. So the work moves into defining substitution on typed terms. Relating typed steps to raw steps needs a separate theorem (our own).

**nLab:** [intrinsic and extrinsic views of typing](https://ncatlab.org/nlab/show/intrinsic+and+extrinsic+views+of+typing). It says: “Like the syntactician's parts of speech, as a way of defining the grammar of well-formed expressions.”

**Sources:**

- [Philip Wadler, Wen Kokke and Jeremy G. Siek, Programming Language Foundations in Agda, DeBruijn chapter](https://plfa.github.io/DeBruijn/#reduction)

### Polymorphism only at let keeps type inference decidable

**Remember:** Polymorphism only at let keeps type inference decidable.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** In the Hindley–Milner type system, types may contain type variables, as in α → α. Only names bound by let may get a polymorphic type such as ∀α. α → α. Parameters of λ-abstractions must get a type without ∀.

**Problem.** In Hindley–Milner, every typable program without annotations has a principal type, a most general type of which all its other types are instances. Algorithm W finds it.

**How the definition helps.** Allowing ∀ only for let-bound names means inference only has to solve first-order unification problems, which have most general solutions. If λ-bound parameters could also be polymorphic, the system would be System F, where Wells proved type inference undecidable, as the page notes. The restriction still keeps the useful idiom let id = λx.x in (id true, id 0). Inference still takes exponential time on some programs, as the page notes.

**Wikipedia:** [Hindley–Milner type system](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system). It says: “the type system to allow only let-bound variable to have polymorphic types, while the parameters in lambda-abstractions must get a monomorphic type, type inference becomes decidable.”

**Sources:**

- [R. Hindley, The principal type-scheme of an object in combinatory logic, Transactions of the AMS 146 (1969) 29–60](https://doi.org/10.2307/1995158)
- [L. Damas and R. Milner, Principal type-schemes for functional programs, POPL 1982](https://doi.org/10.1145/582153.582176)

### Progress and preservation turn type safety into two inductive lemmas

**Remember:** Never stuck now, and still well typed after each step.

*Makes the theorem clean to state or prove.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Wright and Felleisen define type soundness for a language given by step-by-step reduction rules. Progress says that a well-typed term is a value or can take a step. Preservation, also called subject reduction, says that a step keeps the type of a well-typed term.

**Problem.** If progress and preservation hold, a well-typed program never reaches a stuck state, such as using a number as a function. Each lemma is proved by induction on typing derivations, and the method extends to references, exceptions and polymorphism.

**How the definition helps.** Safety speaks about whole runs, but progress and preservation each speak about one step. Chaining them shows that every reachable term is well typed and so not stuck. Earlier proofs often went through denotational models, which had to be rebuilt for each new feature (our own). The work moves into the lemma for each feature, such as substitution and store typing (our own).

**Wikipedia:** [Type safety](https://en.wikipedia.org/wiki/Type_safety). It says: “Computer scientists Andrew K Wright and Matthias Felleisen formulate a definition and proof technique for type safety in languages defined by operational semantics.”

**Sources:**

- [A. K. Wright and M. Felleisen, A syntactic approach to type soundness, Information and Computation 115 (1994) 38–94](https://doi.org/10.1006/inco.1994.1093)

### The value restriction keeps polymorphic references from breaking type safety

**Remember:** Only values, which run no effects, may get polymorphic types.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** In ML-style type inference, a name bound by let can get a polymorphic type ∀α. τ, usable at many types. Under the value restriction, the type is generalized only when the bound expression is a syntactic value. Syntactic values are constants, variables, λ-abstractions and constructors applied to values. Applications, such as ref (fn x =&gt; x), are not generalized.

**Problem.** With the value restriction, ML with mutable references is type safe, so a well-typed program never applies an operation to a value of the wrong type. With unrestricted let-polymorphism over references, type safety fails.

**How the definition helps.** Evaluating a syntactic value cannot create a reference cell, so giving it many types cannot let one cell be used at two types. In the page’s counterexample, c = ref (fn x =&gt; x) gets the type ∀α. (α → α) ref. Then c := (fn x =&gt; x + 1) stores an integer function, and !c true applies it to a Boolean. Under the value restriction, c gets one unknown type, fixed by the assignment to int → int, so the checker rejects !c true.

**Wikipedia:** [Value restriction](https://en.wikipedia.org/wiki/Value_restriction). It says: “The value restriction prevents reference cells from holding values of different types and preserves type safety.”

**Sources:**

- [A. K. Wright, Simple imperative polymorphism, LISP and Symbolic Computation 8 (1995) 343–355](https://doi.org/10.1007/BF01018828)

### Defining the least Herbrand model as an intersection makes it test consequences

**Remember:** Intersect term models to keep just the forced facts.

*True by definition.* MSC 68N17 (Logic programming), 03B70, 03C05. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A definite Horn clause says that one atomic formula holds whenever finitely many atomic formulas hold. A Herbrand model has the variable-free terms as its elements, in a language with a constant symbol and no built-in equality. View each Herbrand model as its set of true variable-free atomic formulas. The least Herbrand model of a set of definite clauses is the intersection of all its Herbrand models.

**Problem.** A variable-free atomic formula follows from a set of definite Horn clauses exactly when it holds in their least Herbrand model.

**How the definition helps.** An atomic formula lies in the intersection exactly when it holds in every Herbrand model, so one direction is by definition (our own). The rest of the work moves into two lemmas (our own). First, the intersection is itself a model, because each clause has one conclusion. Second, any model gives a Herbrand model with the same true variable-free atomic formulas, because the clauses are universal sentences.

**Wikipedia:** [Horn clause](https://en.wikipedia.org/wiki/Horn_clause). It says: “An atomic formula A is logically implied by D if and only if A is true in M.”

**Sources:**

- [M. H. van Emden and R. A. Kowalski, The Semantics of Predicate Logic as a Programming Language (1976)](https://doi.org/10.1145/321978.321991)

### Continuation-passing form makes call-by-name and call-by-value agree on closed terms

**Remember:** Already evaluated arguments leave no choice about when to evaluate them.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 68Q55. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** In continuation-passing form, a function receives another function that says what to do with its result. In the form considered here, every application argument is a variable or a lambda function. Call-by-name substitutes an argument without evaluating it, while call-by-value evaluates the argument first. Neither strategy evaluates inside an unapplied function.

**Problem.** On closed lambda terms in this continuation-passing form, call-by-name and call-by-value take the same evaluation steps. Thus they return the same result or both run forever.

**How the definition helps.** The restricted form ensures that an argument at an evaluation step is already a function value (our own). Closedness rules out a free variable at that step (our own). Substituting a function value preserves the restriction on arguments (our own). In direct style, an unused argument can run forever under call-by-value and be ignored under call-by-name (our own). The work moves into proving that the continuation-passing translations preserve the intended evaluation of the original terms (our own).

**nLab:** [continuation-passing style](https://ncatlab.org/nlab/show/continuation-passing+style). It says: “Whenever a procedure in "direct style" would return a value (v), the corresponding procedure in CPS instead invokes the continuation with that value (k(v)).”

**Wikipedia:** [Continuation-passing style](https://en.wikipedia.org/wiki/Continuation-passing_style). It says: “every argument in a function call must be either a variable or a lambda expression (not a more complex expression).”

**Sources:**

- [G. D. Plotkin, Call-by-name, call-by-value and the λ-calculus, Theoretical Computer Science 1 (1975)](https://doi.org/10.1016/0304-3975(75)90017-1)

### The monoidal definition of applicative functors makes their composites applicative

**Remember:** Pair the outer effects first, then the inner effects.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 18M05. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** An applicative functor F on sets has a unit value in F(1) and a pairing map F(A) × F(B) → F(A × B). These satisfy unit and associativity laws, so F is a lax monoidal functor. The programming interface instead gives a map pure from A to F(A) and an application map F(A → B) × F(A) → F(B).

**Problem.** The composite of two applicative functors on sets is applicative.

**How the definition helps.** Composites of lax monoidal functors are lax monoidal by a standard short check. For F after G, pair with F first to get F(G(A) × G(B)). Then apply the pairing of G inside F to get F(G(A × B)). The nLab states that applicative functors, unlike monads, are closed under composition. McBride and Paterson give the monoidal presentation. The work moves to showing that the monoidal laws match the laws of the programming interface.

**nLab:** [applicative functor](https://ncatlab.org/nlab/show/applicative+functor). It says: “Unlike monads, applicative functors are closed under composition.”

**Sources:**

- [Conor McBride and Ross Paterson, Applicative Programming with Effects](https://www.staff.city.ac.uk/~ross/papers/Applicative.html)

### Sampled catalogs save searches

**Remember:** Find one position, then follow links and check its neighbors.

*True by definition.* MSC 68P10 (Searching and sorting). arXiv cs.DS. Level 3: graduate.

**Definition.** Start with the last sorted list and work backward. Merge each original list with every second entry of the next augmented list. For each augmented entry, store its lower-bound position in the original list and in the next augmented list, when present. A lower bound here means the first position with value at least the query, or the end if none exists.

**Problem.** With n entries across k nonempty sorted lists, this structure uses O(n) space. It finds the first entry at least as large as a query in every list in O(log n + k) time.

**How the definition helps.** Sampling every second entry lets a search move to the next list with at most one backward correction. In our own proof, one binary search finds the answer in the first augmented list, and each original-list link then gives that list’s answer directly. Following the other link and checking the preceding entry finds the position in the next list, since two skipped entries would include a sample. If S counts all augmented entries, at most S/2 are copies, so S ≤ n + S/2 and S ≤ 2n.

**Wikipedia:** [Fractional cascading](https://en.wikipedia.org/wiki/Fractional_cascading). It says: “each earlier list Mᵢ is formed by merging Lᵢ with every second item from Mᵢ₊₁.”

**Sources:**

- [Bernard Chazelle and Leonidas J. Guibas, Fractional Cascading: I. A Data Structuring Technique (1986)](https://doi.org/10.1007/BF01840440)

### Universal models test conjunctive queries

**Remember:** Map the witnesses from one model into every model.

*True by definition.* MSC 68P15 (Database theory), 68T30. arXiv cs.DB, cs.AI. Level 3: graduate.

**Definition.** A universal model of a database and its rules maps into every model by a map that preserves facts and named values. A Boolean conjunctive query asks whether some values make a given conjunction of facts true. The usual certain-answer test asks about all models.

**Problem.** For database facts and existential rules with a universal model, a Boolean conjunctive query follows exactly when it holds in that model.

**How the definition helps.** In our own proof, a map from the universal model carries the values satisfying the query into every other model. The map preserves every required fact. Conversely, a query true in every model holds in the universal model. The work lies in constructing that model. For existential rules, the chase repeatedly adds required facts and introduces witnesses when a rule calls for new values.

**Paper or page:** [Connecting Proof Theory and Knowledge Representation: Sequent Calculi and the Chase with Existential Rules](https://arxiv.org/abs/2306.02521). It says: “then a universal model can be constructed witnessing that (D, R) ⊭ ∃x q(x).”

**Sources:**

- [Connecting Proof Theory and Knowledge Representation: Sequent Calculi and the Chase with Existential Rules](https://arxiv.org/abs/2306.02521)

### Ciphertext integrity strengthens privacy

**Remember:** Reject fresh ciphertexts and decryption adds no useful information.

*Rules out counterexamples.* MSC 68P25 (Data encryption (aspects in computer science)), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** Ciphertext integrity requires that an efficient observer has negligible probability of producing a new ciphertext that decrypts successfully, even after requesting encryptions. Negligible means smaller than every inverse polynomial for sufficiently large security parameters. New means that encryption never returned that ciphertext, even if it returned another one carrying the same message.

**Problem.** Suppose a secret-key cipher has ciphertext integrity and hides which of two chosen equal-length messages it encrypts, even with access to encryption. It still hides that choice with access to decryption before and after the challenge, provided the observer cannot submit the challenge for decryption afterward.

**How the definition helps.** Ciphertext integrity rules out fresh accepted ciphertexts, the one case where simulated decryption could give the wrong answer. In our own proof sketch, the simulation records messages and ciphertexts from ordinary encryption requests. It answers decryption requests from that record and rejects other permitted requests. A difference from real decryption requires a first accepted fresh ciphertext. Guessing its request number converts any appreciable chance of such a difference into an appreciable chance of forging a ciphertext. The simulated test now needs only encryption access, so the original privacy guarantee applies.

**Wikipedia:** [Authenticated encryption](https://en.wikipedia.org/wiki/Authenticated_encryption). It says: “Katz and Yung investigated the notion under the name "unforgeable encryption" and proved it implies security against chosen ciphertext attacks.”

**Sources:**

- [Mihir Bellare and Chanathip Namprempre, Authenticated Encryption: Relations among Notions and Analysis of the Generic Composition Paradigm](https://doi.org/10.1007/s00145-008-9026-x)

### Defining differential privacy by a probability ratio makes it compose

**Remember:** One person's data can move any output probability by at most a factor exp(ε).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.ME. Level 3: graduate.

**Definition.** A randomized mechanism is an algorithm that uses random choices to answer queries about a database. It is ε-differentially private if one person's record has little effect on its outputs. Precisely, take any two databases that differ in one person's record. Then the probability of any set of outputs changes by at most a factor exp(ε).

**Problem.** Differential privacy composes. t queries that are each ε-private and use independent randomness are together tε-private, and any processing of an ε-private output stays ε-private.

**How the definition helps.** The guarantee is a worst-case bound on a ratio of probabilities, and such bounds multiply simply. Queries on disjoint parts of the data, with parameters ε₁, ε₂, …, are together private with the largest εᵢ. So designers can build private systems in modules and spend a total privacy budget across them. The trade-off between privacy and accuracy stays hard.

**Wikipedia:** [Differential privacy](https://en.wikipedia.org/wiki/Differential_privacy). It says: “The property of composition permits modular construction and analysis of differentially private mechanisms”

**Sources:**

- [Dwork, C.; McSherry, F.; Nissim, K.; Smith, A. (2006). Calibrating noise to sensitivity in private data analysis. Theory of Cryptography (TCC 2006), LNCS 3876, 265–284.](https://doi.org/10.1007/11681878_14)

### Privacy curves compare testing risks

**Remember:** Each prior strictly between zero and one selects a point on the curve.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data). arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** Fix output distributions P and Q. For every real ε, define the privacy curve as the maximum of P(A) − exp(ε)Q(A) over events A. Testing risk is the probability of guessing the wrong distribution when the prior probability of P is π.

**Problem.** Compare two ordered pairs of output distributions. The first curve lies above or on the second everywhere exactly when its minimum risk is no greater for every prior.

**How the definition helps.** The privacy curve uses the same weighted difference of probabilities as the testing risk. Our own derivation puts prior π on P and chooses P on A. The risk is π minus π times the privacy curve at exp(ε) = (1 − π)/π. Priors zero and one have zero minimum risk for either pair. Our own comparison puts the work into computing the full curve, not just one budget.

**Paper or page:** [Beyond the Calibration Point: Mechanism Comparison in Differential Privacy](https://arxiv.org/abs/2406.08918v3). It says: “∀ π ∈ \[0,1\]: Rₘᵢₙ(π) ≤ R̃ₘᵢₙ(π).”

**Sources:**

- [Georgios Kaissis, Stefan Kolek, Borja Balle, Jamie Hayes, Daniel Rueckert, Beyond the Calibration Point: Mechanism Comparison in Differential Privacy (2025)](https://arxiv.org/abs/2406.08918v3)

### Privacy defined on output distributions cannot be broken by post-processing

**Remember:** Whatever you compute from a private answer stays private.

*True by definition.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.TH. Level 3: graduate.

**Definition.** Take two data sets D and D′ that differ in one person. An algorithm M is ε-differentially private if Pr\[M(D) ∈ S\] ≤ eᵋ Pr\[M(D′) ∈ S\] for every set S of outputs. The condition is about the distribution of the output only, not about how the output looks.

**Problem.** If M is ε-differentially private and g is any function, possibly randomized, that does not look at the data again, then g(M(·)) is ε-differentially private.

**How the definition helps.** Because the definition quantifies over every set of outputs, post-processing is covered at once. For a function g, the event g(M(D)) ∈ T is the event M(D) ∈ S, with S the preimage of T (our own proof). A randomized g is a mixture of fixed functions, so it is covered too (our own). The real work moves to the composition theorems, which handle algorithms that use the data again.

**Paper or page:** [Differentially Private Algorithms for Synthetic Power System Datasets](https://arxiv.org/abs/2303.11079v1). It says: “If query Q̃ satisfies ε-DP, then g∘Q̃(y), where g is an arbitrary, data-independent post-processing of the query answer, also satisfies ε-DP.”

**Sources:**

- [Vladimir Dvorkin, Audun Botterud, Differentially Private Algorithms for Synthetic Power System Datasets, IEEE Control Systems Letters 7 (2023) 2053–2058, arXiv:2303.11079](https://arxiv.org/abs/2303.11079v1)

### Postselection makes PP a quantum class

**Remember:** Quantum computing with free conditioning is exactly majority-vote counting.

*True by definition.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 68Q15. arXiv cs.CC, quant-ph. Level 3: graduate.

**Definition.** PostBQP is the class of problems that a polynomial-time quantum computer can solve with bounded error if it may postselect. Postselection means that the computer conditions on a chosen measurement outcome, which must have nonzero probability. PP is the class of problems where a probabilistic polynomial-time machine is right with probability more than one half.

**Problem.** PP is closed under intersection. Beigel, Reingold and Spielman first proved this with a hard argument about rational approximations (our own).

**How the definition helps.** Closure under intersection is easy for PostBQP, because one can run two postselected computations together and postselect on both (our own). The equality PostBQP = PP then transfers this to PP. Aaronson used this to give a short new proof (our own; his paper makes this point). The work moves into the proof that PostBQP equals PP.

**Paper or page:** [Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape](https://arxiv.org/abs/2507.03692), [Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape](https://arxiv.org/abs/2507.03692). It says: “In 2004, Aaronson introduced the complexity class PostBQP (BQP with postselection) and showed that it is equal to PP.”

**Sources:**

- [David Miloschewsky, Supartha Podder, Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape, arXiv:2507.03692 (2025)](https://arxiv.org/abs/2507.03692)
- [Scott Aaronson, Quantum computing, postselection, and probabilistic polynomial-time, Proceedings of the Royal Society A (2005)](https://doi.org/10.1098/rspa.2005.1546)

### Alternating machines put the polynomial hierarchy inside PSPACE

**Remember:** Remove the bound on switches to get alternating polynomial time.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q10. arXiv cs.CC. Level 3: graduate.

**Definition.** An alternating Turing machine branches in two ways. At existential states one accepting branch suffices, while at universal states every branch must accept. At level k ≥ 1, the machine runs in polynomial time and changes branch type at most k − 1 times along each path. The starting type selects the existential or universal class of that level.

**Problem.** Every level of the polynomial hierarchy lies in PSPACE, the class of decision problems solvable with polynomial memory.

**How the definition helps.** The alternating definition makes each level a special case of alternating polynomial time. Removing the bound on switches gives the class AP, which equals PSPACE. The work lies in proving that equality and proving that the alternating and oracle definitions agree (our own). The oracle definition uses subroutines that answer membership queries in one step. A direct proof for that definition simulates the queries in polynomial space by induction on the level (our own).

**Wikipedia:** [Polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy). It says: “so that we only require that our alternating Turing machine runs in polynomial time, then we have the definition of the class AP, which is equal to PSPACE.”

**Sources:**

- [A. K. Chandra, D. C. Kozen, L. J. Stockmeyer, Alternation, Journal of the ACM 28 (1981)](https://doi.org/10.1145/322234.322243)

### Bounded quantifiers prove polynomial hierarchy collapse when complementary classes agree

**Remember:** Two adjacent existential blocks can share one witness.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)). arXiv cs.CC. Level 3: graduate.

**Definition.** A language in Σₖ has a membership test with k alternating quantifier blocks over short strings, starting with an existential block. The strings have polynomial length in the input size. The predicate after the blocks runs in polynomial time, and the class Πₖ starts with a universal block instead. The other definition builds the classes with oracles, or subroutines that answer membership queries in one step.

**Problem.** If Σₖ = Πₖ for some k ≥ 1, then every higher level of the polynomial hierarchy has the same classes.

**How the definition helps.** The quantifier definition lets us merge adjacent blocks of the same kind (our own). A test in Σₖ₊₁ adds an existential block to a Πₖ test (our own). Replace that Πₖ test by an equivalent Σₖ test and join the first two existential blocks into one (our own). Taking complements gives the same result for the universal class, and induction gives the collapse (our own). The work moves to showing that the quantifier and oracle definitions agree (our own).

**Wikipedia:** [Polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy). It says: “If any Σₖᴾ = Σₖ₊₁ᴾ, or if any Σₖᴾ = Πₖᴾ, then the hierarchy collapses to level k: for all i &gt; k, Σᵢᴾ = Σₖᴾ.”

**Sources:** none listed. No primary source with a working link was found.

### The class BPP does not depend on its error bound

**Remember:** Any error bound below one half gives the same BPP.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q10. arXiv cs.CC. Level 3: graduate.

**Definition.** BPP is the class of decision problems that a probabilistic Turing machine solves in polynomial time. A probabilistic Turing machine is one that can flip fair coins while it runs. The machine may give a wrong answer, but with probability at most 1/3 on every input.

**Problem.** Any constant error bound strictly between 0 and 1/2 in place of 1/3 defines the same class BPP.

**How the definition helps.** The error stays a fixed distance below 1/2 on every input, so repetition makes it as small as we like. Run the algorithm k times and take the majority answer; the error then falls exponentially in k. The fixed gap is what makes this work, since PP allows error just below 1/2 and lacks this property (our own contrast).

**Wikipedia:** [BPP (complexity)](https://en.wikipedia.org/wiki/BPP_%28complexity%29). It says: “the choice of 1/3 in the definition is arbitrary.”

**Sources:**

- [Gill, J. (1977). Computational complexity of probabilistic Turing machines. SIAM Journal on Computing 6(4), 675–695.](https://doi.org/10.1137/0206049)

### Time-constructible bounds make the time hierarchy theorem true

**Remember:** A machine must be able to set its own alarm clock.

*Rules out counterexamples.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 3: graduate.

**Definition.** A function f from natural numbers to natural numbers is time-constructible if some Turing machine, given n in unary (as a string of n ones), computes f(n) in O(f(n)) steps. A function f is fully time-constructible if some machine halts in exactly f(n) steps.

**Problem.** For a time-constructible f, DTIME(o(f(n)/log f(n))) is strictly contained in DTIME(f(n)). Here DTIME(t(n)) is the class of problems that a deterministic Turing machine solves in O(t(n)) steps.

**How the definition helps.** The proof simulates machines and stops them after f(n) steps, and constructibility lets a machine build that clock. The Borodin–Trakhtenbrot gap theorem shows that some condition is needed. For any computable g with g(x) ≥ x, there is a time bound T with DTIME(g(T(n))) = DTIME(T(n)), and such T are often not constructible. Using the gap theorem as the counterexample is our own framing.

**Wikipedia:** [Constructible function](https://en.wikipedia.org/wiki/Constructible_function), [Gap theorem](https://en.wikipedia.org/wiki/Gap_theorem). It says: “To formulate them precisely, it is necessary to have a precise definition for a natural function f for which the theorem is true.”

**Sources:**

- [Hartmanis, J.; Stearns, R. E. (1965). On the computational complexity of algorithms. Transactions of the AMS 117, 285–306.](https://doi.org/10.1090/S0002-9947-1965-0170805-7)
- [Borodin, A. (1972). Computational complexity and the existence of complexity gaps. Journal of the ACM 19(1), 158–174.](https://doi.org/10.1145/321679.321691)

### Log-space reductions keep P-completeness from being trivial

**Remember:** A reduction must be weaker than the class it measures.

*Rules out counterexamples.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** A problem in P is P-complete if every problem in P reduces to it. The reduction must be weaker than polynomial time. Usually it is computable in logarithmic space, or by a uniform family of fast parallel circuits (an NC reduction).

**Problem.** Under log-space reductions, the circuit value problem is P-complete, so a fast parallel algorithm for it would give NC = P. Under polynomial-time reductions, every problem in P other than the empty language and the language of all strings would be P-complete.

**How the definition helps.** A weak reduction cannot solve the problem by itself, so completeness again means at least as hard as everything in P. A polynomial-time reduction can solve the first problem and then output a fixed yes-instance or no-instance of the second (our own explanation). Log-space reductions rule this out. Ladner proved the circuit value problem P-complete, and whether NC equals P is still open.

**Wikipedia:** [P-complete](https://en.wikipedia.org/wiki/P-complete), [Polynomial-time reduction](https://en.wikipedia.org/wiki/Polynomial-time_reduction). It says: “polynomial-time reductions cannot be used to define complete languages: if they were used in this way, every nontrivial problem in P would be complete.”

**Sources:**

- [R. E. Ladner, The circuit value problem is log space complete for P, SIGACT News 7 (1975)](https://doi.org/10.1145/990518.990519)

### Problems hard even with small numbers have no fast approximation scheme

**Remember:** Strongly hard means hard even with small numbers.

*Makes the theorem clean to state or prove.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68W25. arXiv cs.CC, cs.DS. Level 3: graduate.

**Definition.** A problem is strongly NP-complete if it stays NP-complete when every number in the input is at most a polynomial in the input length. An equivalent condition is that it stays NP-complete when the numbers are written in unary, so that the number n takes n symbols.

**Problem.** A strongly NP-hard optimization problem with a polynomially bounded objective has no fully polynomial-time approximation scheme unless P = NP. Knapsack, which is hard only because of large numbers, has a pseudo-polynomial algorithm and good approximation schemes.

**How the definition helps.** The strong notion excludes hardness that comes only from large numbers. Knapsack is NP-complete only because its numbers can be exponentially large, and dynamic programming solves it in time polynomial in the numbers. A fully polynomial-time approximation scheme comes within a factor 1 + ε of the best value, in time polynomial in the input length and in 1/ε. The result depends on P versus NP, which is open.

**Wikipedia:** [Strong NP-completeness](https://en.wikipedia.org/wiki/Strong_NP-completeness). It says: “any strongly NP-hard optimization problem with a polynomially bounded objective function cannot have a fully polynomial-time approximation scheme (or FPTAS) unless P = NP.”

**Sources:**

- [Garey, M. R.; Johnson, D. S. (1978). "Strong" NP-completeness results: motivation, examples, and implications. Journal of the ACM 25(3), 499–508.](https://doi.org/10.1145/322077.322090)

### Fixed-point logic captures polynomial time once structures carry an order

**Remember:** Give the logic an order, and recursion computes exactly polynomial time.

*Rules out counterexamples.* MSC 68Q19 (Descriptive complexity and finite models), 03C13. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** First-order logic with a least fixed point operator, written FO\[LFP\], can define a relation by recursion, as the least solution of a monotone equation. An ordered structure is a finite structure, such as a graph, that comes with a linear order on its elements.

**Problem.** On ordered finite structures, the properties definable in FO\[LFP\] are exactly those decidable in polynomial time (the Immerman–Vardi theorem).

**How the definition helps.** With an order, formulas can name positions as numbers and so simulate a polynomial-time Turing machine step by step. Without an order the theorem fails (our own; not on the page). Having an even number of elements is decidable in polynomial time, but no FO\[LFP\] formula defines it on plain sets. Whether some logic captures polynomial time on unordered structures is still open.

**Wikipedia:** [Descriptive complexity theory](https://en.wikipedia.org/wiki/Descriptive_complexity_theory). It says: “First-order logic with a least fixed point operator gives P, the problems solvable in deterministic polynomial time, but uniquely on ordered structures.”

**Sources:**

- [N. Immerman, Relational queries computable in polynomial time, Information and Control 68 (1986) 86–104](https://doi.org/10.1016/s0019-9958(86)80029-8)
- [M. Y. Vardi, The complexity of relational query languages, STOC 1982](https://doi.org/10.1145/800070.802186)

### MSO gives linear time on bounded treewidth

**Remember:** Say it in MSO, and bounded treewidth makes it linear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q19 (Descriptive complexity and finite models), 05C83. arXiv cs.DS, cs.LO. Level 3: graduate.

**Definition.** Monadic second-order logic (MSO) on graphs can quantify over vertices, edges, and sets of vertices or edges. Many graph properties, such as 3-colourability or having a Hamiltonian cycle, are MSO-definable. Treewidth measures how close a graph is to a tree.

**Problem.** For each fixed k, every MSO-definable graph property can be decided in linear time on graphs of treewidth at most k (Courcelle's theorem).

**How the definition helps.** Courcelle's theorem moves the work from the algorithm to the definition, so once a property is written in MSO, the linear-time algorithm comes for free. For example, 3-colourability says that three vertex sets cover all vertices and no edge lies inside any one of them (our own example). The proof turns the formula into a finite tree automaton that runs on a tree decomposition (our own). What stays hard is the constant factor, which Frick and Grohe showed no fixed tower of exponentials bounds unless P = NP (our own).

**Paper or page:** [Quantum-Inspired Perfect Matching under Vertex-Color Constraints](https://arxiv.org/abs/2209.13063). It says: “Let f be a formula in extended MSO. Then there is an algorithm which, on every graphs with n vertices and treewidth tw, decides whether f holds in G in O(F(\|f\|, tw)·n), for some computable function F.”

**Sources:**

- [Quantum-Inspired Perfect Matching under Vertex-Color Constraints, arXiv:2209.13063 (2022)](https://arxiv.org/abs/2209.13063)
- [Bruno Courcelle, The monadic second-order logic of graphs. I. Recognizable sets of finite graphs, Information and Computation (1990)](https://doi.org/10.1016/0890-5401(90)90043-h)

### Levin's average polynomial time survives a quadratic slowdown

**Remember:** Average-case efficiency should not depend on how fast your computer is.

*Rules out counterexamples.* MSC 68Q25 (Analysis of algorithms and problem complexity), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** Levin's definition of average polynomial time bounds how fast slow inputs become rare. In the form on the page, there are constants c and ε &gt; 0 with this property. Among inputs of length n, at most a fraction nᶜ divided by t to the power ε need more than t steps. The naive definition asks only that the expected running time be polynomial.

**Problem.** Under Levin's definition, if A runs in average polynomial time, so does an algorithm B that takes the square of A's time. The naive definition by expected running time lacks this property.

**How the definition helps.** Levin's condition is still a polynomial bound after the running time is squared, so it does not depend on polynomial changes of the machine model. In the page's counterexample, A takes n² steps on every input of length n except one, where it takes 2ⁿ steps. Under the uniform distribution A has polynomial expected time, but B has expected time about 2ⁿ. Levin's definition counts both as efficient.

**Wikipedia:** [Average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity). It says: “Such a definition has various shortcomings; in particular, it is not robust to changes in the computational model.”

**Sources:**

- [L. A. Levin, Average case complete problems, SIAM Journal on Computing 15 (1986) 285–286](https://doi.org/10.1137/0215020)

### Smoothed complexity explains why the simplex method is fast in practice

**Remember:** The worst input, shaken a little, is no longer bad.

*Makes the theorem clean to state or prove.* MSC 68Q25 (Analysis of algorithms and problem complexity), 90C60, 90C05. arXiv cs.CC, math.OC. Level 3: graduate.

**Definition.** The smoothed complexity of an algorithm is the worst case, over all inputs, of the expected running time after small random noise is added. For linear programs, the noise is Gaussian with standard deviation σ, added to each entry of the constraint data.

**Problem.** The simplex method with the shadow vertex pivot rule has polynomial smoothed complexity (Spielman and Teng). In the worst case, many common pivot rules take exponentially many steps.

**How the definition helps.** Worst-case analysis says the simplex method is slow, and average-case analysis depends on an input distribution that real inputs need not follow. Smoothed complexity keeps the adversary but adds noise, so isolated bad inputs no longer count. The page gives a later bound, polynomial in the dimension d, in log n and in 1/σ. The proof itself stays hard, a long probabilistic argument about random polytopes (our own).

**Wikipedia:** [Smoothed analysis](https://en.wikipedia.org/wiki/Smoothed_analysis). It says: “Smoothed analysis is a hybrid of worst-case and average-case analyses that inherits advantages of both.”

**Sources:**

- [D. A. Spielman and S.-H. Teng, Smoothed analysis of algorithms: why the simplex algorithm usually takes polynomial time, STOC 2001](https://doi.org/10.1145/380752.380813)

### Prefix-free programs make Kolmogorov complexity subadditive

**Remember:** A self-delimiting program cannot hide information in its own length.

*Rules out counterexamples.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** A set of programs is prefix-free when no valid program is the start of another. The prefix-free Kolmogorov complexity K(x) is the length of the shortest program that produces x. The program runs on a universal machine whose valid programs form a prefix-free set.

**Problem.** Prefix-free complexity is subadditive, K(x, y) ≤ K(x) + K(y) + O(1). Describing x and y together costs at most the two separate costs plus a constant.

**How the definition helps.** A prefix-free program marks its own end, so we can put two programs side by side and still read both. For plain complexity C, subadditivity fails, since for any c there are strings x and y with C(xy) ≥ C(x) + C(y) + c. A plain program also carries information in its length, and we must say where x ends. The article credits this variant mainly to Levin (1974).

**Wikipedia:** [Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). It says: “To fix this defect, we introduce the prefix-free Kolmogorov complexity.”

**Sources:**

- [Chaitin, G. J. (1975). A theory of program size formally identical to information theory. Journal of the ACM 22(3), 329–340.](https://doi.org/10.1145/321892.321894)

### The invariance theorem makes Kolmogorov complexity well defined

**Remember:** Change the language, and complexity changes by at most a constant.

*Makes the theorem clean to state or prove.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** The Kolmogorov complexity of a string is the length of the shortest program that outputs it on a fixed universal machine. A universal machine is one that can simulate any other machine when it gets that machine's program. Statements about complexity are taken up to an additive constant.

**Problem.** For a universal description language U and any other language L, there is a constant c such that every string x has complexity relative to U at most its complexity relative to L plus c. So complexity does not depend on the universal machine, up to an additive constant.

**How the definition helps.** A universal language can run an interpreter for any other language, and the interpreter has a fixed length. So if every equation is read up to an additive constant, the theory does not depend on the machine. The constant can be large, so the theory says little about any single short string (our own remark). The complexity function itself is not computable.

**Wikipedia:** [Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). It says: “By default, all equations hold only up to an additive constant.”

**Sources:**

- [Solomonoff, R. J. (1964). A formal theory of inductive inference. Part I. Information and Control 7(1), 1–22.](https://doi.org/10.1016/S0019-9958(64)90223-2)

### Distribution-free learning is characterized by finite VC dimension

**Remember:** Learnable for every distribution exactly when no large set is shattered.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 68T05. arXiv cs.LG, cs.CC. Level 3: graduate.

**Definition.** A concept class C is PAC (probably approximately correct) learnable if one algorithm works for every target concept in C and every distribution D. It uses a sample of size polynomial in 1/ε and 1/δ. With probability at least 1 − δ, it outputs a hypothesis with error at most ε under D. The VC dimension of C is the size of the largest set of points that C shatters, that is, on which C realizes every labelling.

**Problem.** Under mild measurability conditions, a concept class C is PAC learnable exactly when its VC dimension is finite (Blumer, Ehrenfeucht, Haussler and Warmuth).

**How the definition helps.** Because the learner must succeed for every distribution, an adversary may put all the probability on a shattered set, so a shattered set of size d forces about d examples (our own sketch). Conversely, finite VC dimension bounds the number of labellings of a sample, by the Sauer–Shelah lemma. Then the error on the sample is close to the true error for all hypotheses at once. Running time is a separate matter (our own).

**Wikipedia:** [Probably approximately correct learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning), [Vapnik–Chervonenkis dimension](https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension). It says: “Thus, the sample-complexity is a linear function of the VC dimension of the hypothesis space.”

**Sources:**

- [A. Blumer, A. Ehrenfeucht, D. Haussler and M. K. Warmuth, Learnability and the Vapnik–Chervonenkis dimension, Journal of the ACM 36 (1989) 929–965](https://doi.org/10.1145/76359.76371)

### Finite VC dimension is exactly uniform convergence of empirical frequencies

**Remember:** If a class cannot shatter large sets, sample frequencies converge uniformly.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62G20. arXiv cs.LG, stat.TH. Level 3: graduate.

**Definition.** A class of sets 𝒞 shatters a finite set when every subset of it is cut out by some set in 𝒞. The Vapnik–Chervonenkis (VC) dimension is the size of the largest set that 𝒞 shatters. A class is uniform Glivenko–Cantelli when empirical frequencies converge to probabilities, uniformly over 𝒞 and over all distributions.

**Problem.** A class of sets, with suitable measurability, is a uniform Glivenko–Cantelli class if and only if its VC dimension is finite. The classical case is the class of half-lines, which gives the Glivenko–Cantelli theorem for distribution functions.

**How the definition helps.** The VC dimension turns uniform convergence over an infinite class into a counting problem. By the Sauer–Shelah lemma, such a class cuts out only polynomially many subsets of n points, so a union bound works (our own). The page gives the bad case, the class of all finite sets, which has infinite VC dimension. For a distribution with no atoms, the sample itself has empirical frequency 1 and probability 0, so convergence fails.

**Wikipedia:** [Glivenko–Cantelli theorem](https://en.wikipedia.org/wiki/Glivenko%E2%80%93Cantelli_theorem). It says: “Under certain consistency conditions, a universally measurable class of sets 𝒞 is a uniform Glivenko-Cantelli class if and only if it is a Vapnik–Chervonenkis class.”

**Sources:**

- [V. N. Vapnik and A. Ya. Chervonenkis, On the Uniform Convergence of Relative Frequencies of Events to Their Probabilities, Theory of Probability and Its Applications 16 (1971)](https://doi.org/10.1137/1116025)

### The Church–Rosser property separates distinct normal forms in lambda calculus

**Remember:** Convertible terms can meet, but normal forms cannot move.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 03B40. arXiv cs.LO. Level 3: graduate.

**Definition.** Two terms are convertible if forward or backward rewrite steps link them. The Church–Rosser property says that any two convertible terms can rewrite to a common term. Confluence instead starts with two terms reached by rewriting the same source. A normal form admits no rewrite step.

**Problem.** Distinct normal forms cannot be convertible in a Church–Rosser system. In lambda calculus this separates the functions λx y. x and λx y. y, even after allowing renaming of bound variables.

**How the definition helps.** The Church–Rosser definition applies directly to convertibility, so the normal forms would have to meet. A normal form rewrites only to itself in zero or more steps, so the two forms would be equal (our own). Starting with confluence instead, one uses induction on a chain of forward and backward steps to obtain the common term (our own). For lambda calculus, the substantial work is proving confluence of beta reduction, the rewrite that applies a lambda function to its input (our own).

**Wikipedia:** [Confluence (abstract rewriting)](https://en.wikipedia.org/wiki/Confluence_%28abstract_rewriting%29). It says: “In a Church–Rosser system, an object has at most one normal form”

**Sources:**

- [A. Church, J. B. Rosser, Some properties of conversion, Transactions of the American Mathematical Society 39 (1936)](https://doi.org/10.1090/s0002-9947-1936-1501858-0)

### A basis of output tests decides stochastic state equivalence

**Remember:** Basis tests determine all the other output tests.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 3: graduate.

**Definition.** A stochastic automaton reads one input letter, emits one output letter and changes state according to fixed probabilities at each step. A test specifies equally long input and output words. Its column gives the probability of that output for that input from each starting state. Form a matrix from test columns that constitute a basis for the span of all test columns.

**Problem.** Two starting distributions in a stochastic automaton give identical output probabilities on all input words exactly when they agree on the basis tests.

**How the definition helps.** In our own proof, agreement on the basis gives agreement on every test because each test column is a linear combination of basis columns. The probability under a starting distribution is its dot product with the column. Finding the basis requires showing when tests on longer words stop enlarging the span.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Two state distributions π and π′ of A are equivalent if and only if π Hₐ = π′ Hₐ.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

### An isolated threshold makes probabilistic acceptance regular

**Remember:** A gap turns approximate probabilities into exact yes-or-no answers.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** A finite probabilistic automaton reads letters and moves among finitely many states according to transition probabilities. It accepts a word when its probability of finishing in an accepting state exceeds a threshold. The threshold is isolated if every word’s probability stays at least some fixed ε &gt; 0 from it.

**Problem.** A finite probabilistic automaton with an isolated threshold recognizes a regular language, one that a deterministic finite automaton can recognize.

**How the definition helps.** In our own proof, two state distributions less than ε apart give the same decision after every continuation. We measure distance by the largest difference in probability assigned to any set of states. Reading another letter cannot increase this distance. The compact set of state distributions has a finite cover by sets of diameter less than ε. Thus only finitely many patterns of future decisions occur, and these patterns serve as deterministic states.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1), [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Let A be a stochastic acceptor with isolated cut point λ. Then the language L₍A,λ₎ is regular.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)
- [Michael O. Rabin. Probabilistic Automata. 1963.](https://doi.org/10.1016/S0019-9958(63)90290-0)

### Brzozowski derivatives give a finite automaton for each regular expression

**Remember:** After reading a word, check whether the empty suffix is allowed.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** The derivative of a language L by a word u consists of the suffixes v with uv in L. An automaton starts at L and takes the derivative by each new letter. Its states are the distinct derivative languages. It accepts when the current language contains the empty word.

**Problem.** The derivative automaton of a regular expression is finite and accepts exactly the language of the expression.

**How the definition helps.** The definition of a derivative makes the acceptance test a membership test for the input word. Reading u leaves the state that contains exactly the allowed suffixes after u (our own). The empty suffix is allowed exactly when u itself belongs to the language. Another construction first builds a nondeterministic automaton for the expression and then converts it to a deterministic one (our own). Here the work moves to proving that only finitely many derivative languages occur and that expression rules compute them.

**Wikipedia:** [Brzozowski derivative](https://en.wikipedia.org/wiki/Brzozowski_derivative). It says: “A string u is a member of the string set denoted by a generalized regular expression R if and only if ε is a member of the string set denoted by the derivative u⁻¹R.”

**Sources:**

- [J. A. Brzozowski, Derivatives of regular expressions, Journal of the ACM 11 (1964)](https://doi.org/10.1145/321239.321249)

### Final-automaton semantics makes automaton maps preserve accepted languages

**Remember:** Renaming states cannot change the accepted language.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A deterministic automaton has a transition for each state and symbol, and a set of accepting states. A map of automata preserves transitions and acceptance. The final automaton receives exactly one such map from every automaton over the same alphabet. Define the language of a state as its image in the final automaton, instead of by runs that end at an accepting state.

**Problem.** Every map of automata preserves the language accepted from each state.

**How the definition helps.** Uniqueness of maps into the final automaton does the work. A map followed by the semantics of its target is again a map into the final automaton, so it equals the semantics of the source. This argument is our own. The nLab notes that the languages over the alphabet form the states of this final automaton. Its transitions remove a leading symbol. The work moves to proving finality and to showing that the unique map agrees with acceptance by runs.

**nLab:** [deterministic automaton](https://ncatlab.org/nlab/show/deterministic+automaton). It says: “This power set is precisely the set of all languages over the alphabet Σ”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Monadic second-order logic makes regular languages closed under bit-track projection

**Remember:** Erase a bit track by asking whether some set supplies it.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata), 03B70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** Monadic second-order logic over words can quantify over positions and sets of positions. Its basic tests compare positions or read the letter at a position. A sentence defines the language of all words on which it holds. The automaton definition instead uses machines with finitely many states.

**Problem.** Regular languages over letters (a, b), with b a bit, stay regular when the second coordinate is erased.

**How the definition helps.** The logic definition makes projection an existential quantifier over a set of positions. That set gives the positions whose erased bit was 1 (our own). For deterministic automata, the construction must guess the bit and then convert the result back into a deterministic machine (our own). The work moves into the Büchi–Elgot–Trakhtenbrot theorem, which equates the formula and automaton definitions. Its formula-to-automaton proof uses the automaton construction for projection.

**Wikipedia:** [Büchi–Elgot–Trakhtenbrot theorem](https://en.wikipedia.org/wiki/B%C3%BCchi%E2%80%93Elgot%E2%80%93Trakhtenbrot_theorem), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “This boils down to induction over ¬, ∧, and existential quantification over monadic predicates. These correspond to complement, intersection, and projection (a restricted kind of homomorphism).”

**Sources:**

- [J. R. Büchi, Weak second-order arithmetic and finite automata, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 6 (1960)](https://doi.org/10.1002/malq.19600060105)

### Muller acceptance lets deterministic automata recognize every ω-regular language

**Remember:** Ask exactly which states recur, and determinism loses no power.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** An automaton on infinite words judges a run by the set of states it visits infinitely often. A Büchi automaton accepts if this set meets a given set of accepting states. A Muller automaton is given a family of state sets, and accepts if the set of states visited infinitely often is exactly one of them.

**Problem.** Every ω-regular language, that is, every language of a Büchi automaton, is recognized by a deterministic Muller automaton (McNaughton's theorem).

**How the definition helps.** The Muller condition can say that some states occur only finitely often, which the Büchi condition cannot say for a deterministic run. In the page’s counterexample, no deterministic Büchi automaton recognizes the infinite words over 0 and 1 with only finitely many 1s. A deterministic Muller automaton with two states that remember the last letter accepts when only the state for 0 recurs (our own). The construction stays hard, and Safra's construction has an exponential blow-up (our own).

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

**Definition.** A visibly pushdown automaton uses a fixed split of its alphabet into call, return and internal letters. A call pushes one symbol, and a return pops one unless the stack is already empty. An internal letter leaves the stack unchanged. An ordinary pushdown automaton can choose a stack move without this rule.

**Problem.** Two visibly pushdown languages over the same split alphabet have a visibly pushdown intersection. General context-free languages need not have a context-free intersection.

**How the definition helps.** The letter-based rule keeps the two stack heights equal, so one stack of pairs can hold both stacks. Take pairs of control states and accept only when both components accept. Without the shared split, the machines can push and pop at different times, and this pairing does not work (our own). For example, two context-free languages can enforce equality between the counts of a and b, or of b and c, in words aⁱbʲcᵏ (our own). Their intersection requires all three counts to agree and is not context-free (our own).

**Wikipedia:** [Nested word](https://en.wikipedia.org/wiki/Nested_word). It says: “For the intersection operation, one can construct a VPA M simulating two given VPAs M₁ and M₂ by a simple product construction”

**Sources:**

- [R. Alur, P. Madhusudan, Visibly pushdown languages, STOC 2004](https://doi.org/10.1145/1007352.1007390)

### Adding parallel or makes the Scott model of PCF fully abstract

**Remember:** The model had a function PCF could not write, so add it.

*Rules out counterexamples.* MSC 68Q55 (Semantics in the theory of computing), 06B35, 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** PCF is a small typed functional language with numbers, Booleans, a conditional and a fixed-point operator. A model of a language is fully abstract if two programs have equal meanings exactly when no program context can tell them apart. Parallel or returns true if either argument is true, even when the other argument runs forever.

**Problem.** Scott's model of PCF, built from domains and continuous functions, is not fully abstract (Plotkin). It becomes fully abstract once parallel or is added to the language.

**How the definition helps.** The failure comes from elements of the model that no PCF program defines, and parallel or is such an element. Plotkin's counterexample uses two programs that differ only when given a parallel or, so no PCF context separates them (our own summary). Once parallel or is in the language, every finite element of the model is definable and full abstraction holds (our own summary of Plotkin). The change is to the language, not the model.

**Wikipedia:** [Programming Computable Functions](https://en.wikipedia.org/wiki/Programming_Computable_Functions), [Denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics). It says: “This model is not fully abstract for PCF; but it is fully abstract for the language obtained by adding a parallel or operator to PCF.”

**Sources:**

- [G. D. Plotkin, LCF considered as a programming language, Theoretical Computer Science 5 (1977) 223–255](https://doi.org/10.1016/0304-3975(77)90044-5)
- [R. Milner, Fully abstract models of typed λ-calculi, Theoretical Computer Science 4 (1977) 1–22](https://doi.org/10.1016/0304-3975(77)90053-6)

### Compositional and adequate semantics turns equal meanings into identical observations

**Remember:** A context cannot distinguish equal meanings if meanings predict results.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A compositional semantics gives each program phrase a meaning built from those of its parts. A context is a program with a hole for a phrase. Two phrases are observationally equivalent if each context that closes them into a program of numeric type gives the same observable result. Adequacy says that a closed numeric program evaluates to a numeral exactly when its modeled meaning is that numeral.

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

**How the definition helps.** Each constructor applies a fixed operation to equal arguments, so it gives equal results. Induction on the surrounding program finishes the proof. The nLab describes this compositional property. Our own remark is that the work lies in building the meaning operations. For the result to say anything about running programs, the model must also be adequate. Adequacy means that the meanings predict the observable results of running programs.

**nLab:** [denotational semantics](https://ncatlab.org/nlab/show/denotational+semantics). It says: “the semantics of terms constructed from sub-terms is correspondingly built from the semantics of these sub-terms.”

**Sources:**

- [Dana S. Scott and Christopher Strachey, Toward a Mathematical Semantics for Computer Languages](https://www.cs.ox.ac.uk/files/3228/PRG06.pdf)

### Interpreting function types as exponentials validates applying lambda abstractions

**Remember:** Evaluating a curried map gives back the original map.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 18C50. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** In a cartesian closed category, an exponential Yˣ represents maps with one extra input. Each map Z × X → Y corresponds to exactly one map Z → Yˣ, called its currying. Interpret function types as exponentials and function application as the evaluation map. The direct interpretation builds an explicit set or order of functions.

**Problem.** In this semantics, applying a lambda abstraction to an argument has the same meaning as substituting the argument into its body.

**How the definition helps.** The defining equation of the exponential says that evaluation after currying gives back the original map. The nLab states this universal property. The rest of the proof needs a substitution lemma. It says that substitution in terms matches composition of their meanings. Our own remark puts the remaining work in this lemma and in constructing exponentials in the chosen model.

**nLab:** [cartesian closed category](https://ncatlab.org/nlab/show/cartesian+closed+category). It says: “the universal property of Yˣ may be phrased thus: given any ψ: Z × X → Y, there exists a unique map”

**Sources:** none listed. No primary source with a working link was found.

### Testing in all contexts makes contextual equivalence a congruence by definition

**Remember:** A context inside a context is again a context.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A context is a program with a hole for a term. Two terms of the same type are contextually equivalent if every closing context gives the same observable result for both. A closing context leaves no free variables once the hole is filled. A narrower test uses only some contexts, such as those where the hole is evaluated next.

**Problem.** If two terms are contextually equivalent, then so are their results in any well-typed context.

**How the definition helps.** Plugging the larger context into a test context gives another test context, so the claim is immediate. Wikipedia gives this definition by all contexts. The work moves to a context lemma. It shows, for particular languages, that the narrower tests give the same equivalence. With only the narrower tests as the definition, the congruence property needs a real proof; this comparison is our own.

**Wikipedia:** [Observational equivalence](https://en.wikipedia.org/wiki/Observational_equivalence). It says: “in all contexts C\[...\] where C\[M\] is a valid term, it is the case that C\[N\] is also a valid term with the same value.”

**Sources:** none listed. No primary source with a working link was found.

### Every property is a safety property intersected with a liveness property

**Remember:** Safety forbids bad prefixes, liveness forbids no prefix, and together they give everything.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 68Q85. arXiv cs.LO, cs.DC. Level 3: graduate.

**Definition.** A property is a set of infinite executions, that is, sequences of program states. It is a safety property if every execution that violates it has a finite prefix that no continuation can repair. It is a liveness property if every finite prefix can be extended to an execution that has the property.

**Problem.** Every property is the intersection of a safety property and a liveness property (Alpern and Schneider).

**How the definition helps.** With these definitions, safety properties are the closed sets in a natural topology on infinite sequences, and liveness properties are the dense sets. Each set P is its closure intersected with the union of P and the outside of its closure, which is dense (our own step). That one line is the decomposition theorem. Proving each part for a program then needs an invariant for safety and a well-foundedness argument for liveness.

**Wikipedia:** [Safety and liveness properties](https://en.wikipedia.org/wiki/Safety_and_liveness_properties). It says: “Alpern and Schneider gives the formal definition for liveness, accompanied by a proof that all properties can be constructed using safety properties and liveness properties.”

**Sources:**

- [B. Alpern and F. B. Schneider, Defining liveness, Information Processing Letters 21 (1985) 181–185](https://doi.org/10.1016/0020-0190(85)90056-0)

### The separating conjunction makes the frame rule sound for pointer programs

**Remember:** Prove a program on its own memory, and the rest stays untouched.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 03B47. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** Separation logic extends Hoare logic, which proves triples {P} C {Q}: if P holds before program C runs, then Q holds after. Its key connective is the separating conjunction P ∗ R. It holds of a heap that splits into two disjoint parts, one satisfying P and one satisfying R. A triple also promises that C does not fault, that is, never touches memory that P does not describe.

**Problem.** If {P} C {Q} holds and C does not modify the variables in R, then {P ∗ R} C {Q ∗ R} holds. This frame rule lets a proof about the memory a procedure uses be reused in any larger context.

**How the definition helps.** The rule is sound because ∗ makes R describe memory apart from that of P, and the no-fault promise means C only touches the memory of P. With ordinary conjunction the rule fails (our own example). If x and y may point to the same cell, writing to the cell at x can change the value read at y. Shared memory and concurrency need extensions such as fractional permissions.

**Wikipedia:** [Separation logic](https://en.wikipedia.org/wiki/Separation_logic). It says: “It says that a program that executes safely in a small state (satisfying P), can also execute in any bigger state (satisfying P ∗ R) and that its execution will not affect the additional part of the state”

**Sources:**

- [J. C. Reynolds, Separation logic: a logic for shared mutable data structures, LICS 2002](https://doi.org/10.1109/LICS.2002.1029817)

### Weakest liberal preconditions give Hoare logic a relative completeness proof

**Remember:** Use the weakest liberal precondition to choose the missing assertions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 03B70. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A partial-correctness Hoare triple says that if precondition P holds and program S stops, its final state satisfies postcondition R. The weakest liberal precondition for S and R holds in every state from which S either fails to stop or stops with R. In contrast, an ordinary weakest precondition also requires termination.

**Problem.** For a standard while language, assume the assertion language can express every weakest liberal precondition. Then Hoare logic proves all true partial-correctness triples if it may use all true assertions in the underlying arithmetic.

**How the definition helps.** The weakest liberal precondition supplies the assertions needed to build a proof (our own). A valid triple has P implying that condition, so the rule of consequence reduces the proof to the weakest case (our own). For two commands in sequence, use the weakest liberal precondition of the second command as the middle assertion (our own). For a loop, use the weakest liberal precondition of the whole loop as its invariant, a condition maintained across iterations (our own). The work is the induction on commands and proving that the chosen assertion language can express these conditions (our own).

**Wikipedia:** [Predicate transformer semantics](https://en.wikipedia.org/wiki/Predicate_transformer_semantics). It says: “wlp(S, R), which yields the weakest condition under which S either does not terminate or establishes R.”

**Sources:**

- [S. A. Cook, Soundness and completeness of an axiom system for program verification, SIAM Journal on Computing 7 (1978)](https://doi.org/10.1137/0207005)

### Widening operators make abstract interpretation terminate on infinite lattices

**Remember:** Jump upward on purpose so the analysis must stop.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 06B35. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Abstract interpretation approximates the reachable states of a program by an element of a simpler ordered set, such as one integer interval per variable. A widening operator ∇ takes two elements x and y and returns an upper bound of both. Take any increasing sequence yₙ, and set x₀ = ⊥ and xₙ₊₁ = xₙ ∇ yₙ. Widening must make this sequence constant after finitely many steps.

**Problem.** With a widening operator, the iteration xₙ₊₁ = xₙ ∇ f(xₙ) from ⊥ stops after finitely many steps, even when the ordered set has infinite increasing chains. For a monotone transfer function f, its final value over-approximates the least fixed point of f.

**How the definition helps.** Stopping after finitely many steps is part of the definition of widening, so termination holds by definition. When the iteration stops at some x, then f(x) ≤ x, and the Knaster–Tarski theorem puts such an x above the least fixed point, as the page explains. Plain iteration on intervals for a counting loop gives \[0,0\], \[0,1\], \[0,2\] and so on without end. A standard widening sends an unstable bound to infinity, so the counter gets the interval from 0 to +∞ (our own example).

**Wikipedia:** [Abstract interpretation](https://en.wikipedia.org/wiki/Abstract_interpretation). It says: “For any ascending sequence (y′ₙ)ₙ≥₀, the sequence defined by x′₀ := ⊥ and x′ₙ₊₁ := x′ₙ ∇ y′ₙ is ultimately stationary.”

**Sources:**

- [P. Cousot and R. Cousot, Abstract interpretation: a unified lattice model for static analysis of programs by construction or approximation of fixpoints, POPL 1977](https://doi.org/10.1145/512950.512973)

### A prefix and suffix matrix gives the smallest weighted automaton

**Remember:** A state only needs to store independent future scores.

*Makes the theorem clean to state or prove.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 3: graduate.

**Definition.** A weighted automaton assigns each letter a matrix. It gives a word a real score by multiplying those matrices between a start row and an end column. The Hankel matrix instead lists the score of each prefix followed by each suffix.

**Problem.** A real word score comes from a finite weighted automaton exactly when its Hankel matrix has finite rank. That rank is the smallest possible state dimension.

**How the definition helps.** In our own proof, the rows span a space on which appending each letter acts linearly. The row for a prefix followed by a letter uses the old row’s entries for suffixes beginning with that letter. Start with the empty prefix and read the score at the empty suffix. A basis gives a machine with dimension equal to the rank. Conversely, any machine factors the matrix through its state space, so its dimension bounds the rank.

**Paper or page:** [Neural Network Based Nonlinear Weighted Finite Automata](https://arxiv.org/abs/1709.04380v2). It says: “For any f : Σ∗ → ℝ, rank(f) = rank(H𝒇).”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodic syntactic monoids let us decide whether automata recognize star-free languages

**Remember:** Compute the syntactic monoid and test whether all powers stabilize.

*True by definition. Confidence: medium.* MSC 68Q70 (Algebraic theory of languages and automata), 20M35. arXiv cs.FL. Level 3: graduate.

**Definition.** Star-free expressions use letters, the empty word, the empty language, union, concatenation and complement, but not Kleene star. The syntactic monoid is the monoid of state transformations induced by words in the smallest deterministic automaton for the language. A finite monoid is aperiodic if a common exponent n gives xⁿ = xⁿ⁺¹ for every element x.

**Problem.** Given a finite automaton, one can decide whether its language has a star-free expression.

**How the definition helps.** The algebraic definition replaces a search for expressions with a check on a finite multiplication table (our own). Minimize the deterministic automaton and list the state transformations generated by its letters (our own). Check xⁿ = xⁿ⁺¹ for all elements, with n the size of that monoid (our own). By then the powers have either stabilized or entered a cycle of length greater than one (our own). The main work is Schützenberger’s theorem, which proves that aperiodicity is equivalent to having a star-free expression.

**Wikipedia:** [Star-free language](https://en.wikipedia.org/wiki/Star-free_language), [Syntactic monoid](https://en.wikipedia.org/wiki/Syntactic_monoid). It says: “Marcel-Paul Schützenberger characterized star-free languages as those with aperiodic syntactic monoids.”

**Sources:**

- [M.-P. Schützenberger, On finite monoids having only trivial subgroups, Information and Control 8 (1965)](https://doi.org/10.1016/s0019-9958(65)90108-7)

### Finite monoid tests let rational sets survive intersection

**Remember:** Track the finite test as the path product grows.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 3: graduate.

**Definition.** A monoid has an associative product and an identity. A rational subset consists of the label products along paths from a start vertex to designated end vertices in a finite graph. A recognizable subset is the inverse image of a subset of a finite monoid under a map preserving products and identity.

**Problem.** Intersecting a rational subset of a monoid with a recognizable subset gives a rational subset.

**How the definition helps.** In our own proof, a finite monoid lets each graph vertex carry the image of the path product as extra state. Start with the identity and multiply by the image of each successive edge label. Finish only at designated end vertices whose stored values pass the finite test. This finite graph describes exactly the intersection. The equivalence with expressions built using finite union, product and repetition supplies the graph description of rational sets.

**Wikipedia:** [Rational set](https://en.wikipedia.org/wiki/Rational_set). It says: “The intersection of a rational subset and a recognizable subset is rational.”

**Sources:** none listed. No primary source with a working link was found.

### Finite-monoid recognition preserves recognizability under inverse homomorphisms

**Remember:** Compose the maps and keep the same finite monoid.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 20M35. arXiv cs.FL, math.GR. Level 3: graduate.

**Definition.** A monoid is a set with an associative product and an identity. A subset S of a monoid is recognizable if S = ψ⁻¹(T) for a homomorphism ψ into a finite monoid and a subset T there. For the monoid of words under concatenation, this gives the same languages as finite automata.

**Problem.** If φ is a homomorphism from the monoid N to the monoid M and S is recognizable in M, then φ⁻¹(S) is recognizable in N.

**How the definition helps.** The finite-monoid definition turns taking an inverse image into composing homomorphisms (our own). If S = ψ⁻¹(T), then φ⁻¹(S) = (ψ ∘ φ)⁻¹(T) with the same finite target (our own). A letter-by-letter automaton is an alternative for word languages, but the composition argument works for any monoids (our own). For words, the work moves to proving equivalence with finite automata (our own). That proof uses the finite monoid of state transformations induced by words (our own).

**Wikipedia:** [Recognizable set](https://en.wikipedia.org/wiki/Recognizable_set), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Recognizable sets are closed under inverse of homomorphisms. I.e. if N and M are monoids and φ:N→M is a homomorphism then if S∈REC(M) then φ⁻¹(S)={x∣φ(x)∈S}∈REC(N).”

**Sources:** none listed. No primary source with a working link was found.

### Implications for the star give regular expressions a finite complete axiom system

**Remember:** No finite list of equations suffices; two implications do the job.

*Makes the theorem clean to state or prove.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A Kleene algebra has + for union and · for concatenation, with the usual ring laws except subtraction, and a + a = a. It also has a star operation. Writing a ≤ b for a + b = b, star satisfies 1 + aa\* ≤ a\* and 1 + a\*a ≤ a\*. It also satisfies two implications, that ax ≤ x gives a\*x ≤ x, and xa ≤ x gives xa\* ≤ x.

**Problem.** The Kleene algebra axioms are complete, so every true equation between regular expressions can be derived from them (Kozen, 1994).

**How the definition helps.** The implications say that a\* is the least solution of a linear inequality, and that pins down star with finitely many rules. Purely equational axioms cannot do this, because Redko proved that no finite set of equations is complete. Salomaa's complete systems used inference rules that the page calls problematic. The completeness proof stays hard, and it carries out the construction and minimization of automata inside the axioms (our own summary).

**Wikipedia:** [Kleene algebra](https://en.wikipedia.org/wiki/Kleene_algebra). It says: “Redko proved that no finite set of equational axioms can characterize the algebra of regular languages.”

**Sources:**

- [D. Kozen, A completeness theorem for Kleene algebras and the algebra of regular events, Information and Computation 110 (1994) 366–390](https://doi.org/10.1006/inco.1994.1037)

### Balanced counts preserve the uniform distribution

**Remember:** Count input words to get the probability of each output word.

*True by definition. Confidence: medium.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** A window is a finite set of output cells. Its input neighborhood contains all cells used to update that window. An update is balanced if, on every window, each output pattern comes from equally many assignments on its input neighborhood.

**Problem.** A finite-range update on a finite alphabet preserves the uniform independent distribution exactly when its local window counts are balanced.

**How the definition helps.** In our own proof, counting equally likely input assignments gives each output pattern’s probability. Balance therefore gives the same probability to all patterns on each window, and the converse follows by the same count. The usual definition of preservation compares probabilities of all measurable events before and after updating. The work lies in the uniqueness theorem that finite pattern probabilities determine the whole distribution. The quoted lemma treats bijective updates on the integer line.

**Paper or page:** [Reversibility, balance and expansivity of non-uniform cellular automata](https://arxiv.org/abs/2507.06896). It says: “The uniform probability measure μ is invariant under Hθ.”

**Sources:**

- [Reversibility, balance and expansivity of non-uniform cellular automata](https://arxiv.org/abs/2507.06896)

### Finite windows detect surjectivity

**Remember:** Compactness turns successful finite tests into one input for the whole grid.

*Makes the theorem clean to state or prove.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** A finite output test asks whether the update can produce a prescribed pattern on a finite box. Only the cells in the box and its input neighborhood need values for this test. The global test instead asks for one input producing a whole prescribed configuration.

**Problem.** A finite-range update on the full grid ℤᵈ over a finite alphabet is onto exactly when it can produce every pattern on every finite box.

**How the definition helps.** In our own proof, each box test gives a closed set of inputs matching the target on that box. These sets are closed because only finitely many input cells matter. Choose growing boxes that cover the grid. Passing every test gives nested nonempty sets. Compactness of the space of inputs gives one input in their intersection.

**Paper or page:** [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987). It says: “The $d$-dimensional global update rule $H\_\\theta $ is surjective if and only if the partial update rule $H<sub>\\theta \|C</sub>$ is surjective for all hypercubes $C\\subseteq \\mathbb{Z} ^d$”

**Sources:**

- [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987)

### Pre-injectivity detects finite collisions

**Remember:** Only finite changes can be swapped into a larger pattern.

*Rules out counterexamples.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** A cellular automaton updates each cell by the same rule on a fixed finite neighborhood. It is pre-injective if distinct inputs that differ at finitely many cells always give distinct outputs. Ordinary injectivity also compares inputs that differ at infinitely many cells.

**Problem.** On the full grid ℤᵈ with a finite alphabet, surjectivity is equivalent to pre-injectivity.

**How the definition helps.** Pre-injectivity tests only collisions that can recur inside finite boxes. Our own example on ℤ updates each bit by adding its right neighbor modulo two. Any output has an input because choosing one input bit determines the rest in both directions. The all-zero and all-one inputs give the same output. The hard part of the Garden of Eden theorem compares pattern counts in boxes with counts near their boundaries. The quoted theorem includes the case where every cell uses the same rule.

**Paper or page:** [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987). It says: “The NUCA Hθ is surjective if and only if it is pre-injective.”

**Sources:**

- [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987)

### Bisimilarity as the union of all bisimulations gives proof by coinduction

**Remember:** To prove two processes equal, show one relation that keeps matching.

*True by definition.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO. Level 3: graduate.

**Definition.** A bisimulation is a relation R on the states of a labelled transition system, whose steps are labelled by actions. If p R q and p does an action a to reach p′, then q does a to reach some q′ with p′ R q′. The same must hold with p and q swapped. Two states are bisimilar if some bisimulation relates them.

**Problem.** Bisimilarity is the largest bisimulation, and it is an equivalence relation. So to prove two states bisimilar, it is enough to give one bisimulation that relates them.

**How the definition helps.** Because bisimilarity is the union of all bisimulations, two states are bisimilar as soon as one bisimulation contains the pair. This coinduction proof principle is true by definition, and it needs no limit of approximations or induction on time (our own). What stays hard is congruence (our own). One must show, separately for each process language, that its operators keep bisimilarity.

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

**Definition.** A coalgebra for a functor F is a set of states X with a map X → F(X), which gives each state its one-step behavior. A terminal coalgebra receives exactly one structure-preserving map from each coalgebra. Define the behavior of a state as its image under this map. This replaces building the full unfolding of each state directly.

**Problem.** Let R be a relation between the states of two coalgebras that is itself a coalgebra with structure-preserving projections. Such a relation is called a bisimulation. Each pair in R then has states with equal behavior.

**How the definition helps.** Equal behavior follows from the uniqueness in the definition of a terminal coalgebra. The two projections, followed by the behavior maps, are structure-preserving maps from R to the terminal coalgebra. Uniqueness makes them equal. Rutten proves this coinduction principle in his paper on universal coalgebra. The nLab quote shows the same uniqueness argument in another proof. The work moves to constructing the terminal coalgebra for F.

**nLab:** [terminal coalgebra for an endofunctor](https://ncatlab.org/nlab/show/terminal+coalgebra+for+an+endofunctor). It says: “By terminality of x, there is a unique coalgebra map f: F x → x.”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Defining bisimilarity as equal final behavior makes it an equivalence relation

**Remember:** Equality of behaviors already has the laws of an equivalence.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, cs.FL. Level 3: graduate.

**Definition.** A labelled transition system has states and labelled steps, and it is finitely branching if each state has finitely many steps. Map each state to its behavior in the final finitely branching system. Call two states equivalent when their behaviors are equal. The usual definition asks for a relation that matches each step from either state.

**Problem.** Strong bisimilarity on a finitely branching labelled transition system is an equivalence relation.

**How the definition helps.** Equality of behaviors is reflexive, symmetric and transitive, so the result is immediate. Wikipedia states the result for the usual definition and proves it by a calculation with relations. The work moves to two other theorems. The final system must exist for finite sets of labelled successors. Two states must have equal behaviors exactly when a matching relation relates them. Rutten's paper gives results of both kinds, and their fit to this case is our own reading.

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “the relation of bisimilarity—the join of all bisimulations—is an equivalence relation”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Defining bisimulations by relation inclusions makes their composites bisimulations

**Remember:** Push each step past one relation at a time.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, cs.FL. Level 3: graduate.

**Definition.** For each label, let T be the relation from a state to each state one step later. Write RT for the relation that does R first and then T. Call a relation R a bisimulation when RT ⊆ TR and the same inclusion holds for the converse of R. The usual definition says in words how each step is matched.

**Problem.** The composite of two strong bisimulations on one labelled transition system is a strong bisimulation.

**How the definition helps.** The inclusions let a step move past each relation in turn. For bisimulations R and S, (RS)T = R(ST) ⊆ R(TS) = (RT)S ⊆ (TR)S = T(RS). The converse of RS is the converse of S followed by the converse of R, so the same calculation applies. Wikipedia gives this relational definition, and the calculation is our own. The work moves to checking that the inclusions say the same as the step-matching clauses.

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “Bisimulation can be defined in terms of composition of relations as follows.”

**Sources:** none listed. No primary source with a working link was found.

### Finite branching makes modal logic separate every pair of non-bisimilar states

**Remember:** With finitely many successors, equal modal theories mean bisimilar states.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A labelled transition system has states and labelled steps s → t between them. A bisimulation is a relation between states such that related states can match each other's steps and stay related. The system is finitely branching if each state has only finitely many successors for each label.

**Problem.** In a finitely branching labelled transition system, two states are bisimilar exactly when they satisfy the same modal formulas.

**How the definition helps.** With finitely many successors, a step that cannot be matched is caught by one formula. Take one formula that separates the step from each other successor, and put their conjunction under a diamond (our own sketch). Infinite branching breaks this (our own example). A state with one path of each finite length, and a second state that also has one infinite path, satisfy the same formulas but are not bisimilar.

**Paper or page:** [Quantitative Hennessy-Milner Theorems via Notions of Density](https://arxiv.org/abs/2207.09187v2). It says: “The classical Hennessy-Milner theorem is an important tool in the analysis of concurrent processes; it guarantees that any two non-bisimilar states in finitely branching labelled transition systems can be distinguished by a modal formula.”

**Sources:**

- [Jonas Forster, Sergey Goncharov, Dirk Hofmann, Pedro Nora, Lutz Schröder, Paul Wild, Quantitative Hennessy-Milner Theorems via Notions of Density, arXiv:2207.09187 (2022)](https://arxiv.org/abs/2207.09187v2)
- [Matthew Hennessy, Robin Milner, Algebraic laws for nondeterminism and concurrency, Journal of the ACM 32 (1985)](https://doi.org/10.1145/2455.2460)

### Trace orders forget independent swaps

**Remember:** Keep dependent order and forget independent order.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68R15. arXiv cs.DC, cs.DM. Level 3: graduate.

**Definition.** A trace alphabet lists action types and specifies a symmetric independence relation between distinct types. All other pairs are dependent, including two occurrences of the same type. Give each occurrence its own event, labeled by its type. Order dependent pairs as in the execution and include all comparisons forced by transitivity.

**Problem.** Two finite action sequences give the same partial order up to a label-preserving isomorphism exactly when swaps of adjacent independent actions connect them.

**How the definition helps.** In our own proof, swapping adjacent independent actions preserves every generating comparison, so it preserves the labeled partial order. Conversely, identify the events using the isomorphism and consider two orders of those events consistent with the partial order. Move the first event of the desired order left to the front. Every event it passes must be incomparable with it, hence independent. Repeat on the remaining events. This proves that storing the partial order captures exactly what the swap definition preserves.

**nLab:** [trace alphabet](https://ncatlab.org/nlab/show/trace+alphabet), [Mazurkiewicz trace](https://ncatlab.org/nlab/show/Mazurkiewicz+trace). It says: “Its models are based on labelled posets, the labelling being by a trace alphabet.”

**Sources:** none listed. No primary source with a working link was found.

### Bag subtrees bound covers

**Remember:** Disjoint bag subtrees certify nonadjacent vertices.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** A tree decomposition assigns sets of vertices of a finite graph, called bags, to nodes of a finite tree. Each edge has both ends in a bag. The bags containing any given vertex form a nonempty connected subtree.

**Problem.** Any nonempty set of vertices can be covered by at most α bags. Here α is the largest number of pairwise nonadjacent vertices in that set.

**How the definition helps.** In our own proof, a bag cover becomes a set of tree nodes meeting every subtree for the chosen vertices. Repeatedly select the top node of a subtree with the deepest top, and discard every subtree containing it. The selected subtrees are pairwise disjoint, so their vertices share no bag and are pairwise nonadjacent. This gives at most α bags, improving the cited bound of 2α − 1.

**Paper or page:** [Computing Tree Decompositions with Small Independence Number](https://arxiv.org/abs/2207.09993v4). It says: “Then W is covered by a set of at most 2α(W)−1 bags of 𝒯.”

**Sources:**

- [Clément Dallard, Fedor V. Fomin, Petr A. Golovach, Tuukka Korhonen, Martin Milanič, Computing Tree Decompositions with Small Independence Number, arXiv:2207.09993v4](https://arxiv.org/abs/2207.09993v4)

### Vertex merging counts restricted maps

**Remember:** Count forbidden equalities by merging the vertices they identify.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C60. arXiv cs.DM, cs.DS. Level 3: graduate.

**Definition.** A map between finite graphs must send adjacent vertices to adjacent vertices. Draw a separate graph whose edges mark pairs of source vertices that must receive different images. For any subset of these extra edges, merge all vertices connected by them, keeping every original adjacency.

**Problem.** The number of graph maps that obey the restrictions is an alternating sum of ordinary graph map counts from quotient graphs.

**How the definition helps.** Merging turns prescribed equalities into ordinary graph maps from the smaller graph. In our own derivation, apply inclusion and exclusion to the forbidden equalities. Each edge subset contributes its merged graph’s map count with a positive sign for even size and a negative sign for odd size. If merging creates a loop, that term vanishes for a target without loops. Grouping terms by their vertex partition gives the paper’s coefficients.

**Paper or page:** [Counting Restricted Homomorphisms via Möbius Inversion over Matroid Lattices](https://arxiv.org/abs/1706.08414v1). It says: “\\\# \\mathsf{Hom}\_\\tau (H,G)=\\sum <sub>\\rho \\geq \\emptyset </sub> \\mu (\\emptyset ,\\rho )\\cdot \\\# \\mathsf{Hom}(H/\\rho ,G)”

**Sources:**

- [Counting Restricted Homomorphisms via Möbius Inversion over Matroid Lattices](https://arxiv.org/abs/1706.08414v1)

### A kernel replaces feature vectors in inner product algorithms

**Remember:** Compute feature inner products without building feature vectors.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 46E22. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** Define a kernel as a symmetric function whose matrices on finite samples have nonnegative quadratic forms. Build feature vectors whose pairwise inner products are the kernel values. This replaces an explicit list of feature coordinates.

**Problem.** Any algorithm whose only access to the feature vectors is through their pairwise inner products gives the same result from the kernel matrix.

**How the definition helps.** The kernel values are the required inner products in the feature space. The work moves to constructing that space from the positive semidefinite kernel (our own). For a chosen algorithm, one must also show it needs only inner products (our own).

**nLab:** [kernel method](https://ncatlab.org/nlab/show/kernel+method). It says: “Many linear algebra techniques in H just involve the inner product, and so can be conducted as a form of nonlinear algebra back in X, using the 'kernel trick'.”

**Sources:** none listed. No primary source with a working link was found.

### Littlestone trees let an adversary force mistakes

**Remember:** Follow the branch that the learner did not predict.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q32. arXiv cs.LG. Level 3: graduate.

**Definition.** Consider a class of functions from inputs to a finite set of labels. In a full binary Littlestone tree, each node specifies an input and its two outgoing edges carry distinct labels. Some function in the class gives all the specified answers along each finite path from the root. The next input may depend on earlier answers.

**Problem.** If the class has an infinite full tree of this kind, an adaptive adversary can force a mistake on every round. Every finite sequence it reveals remains consistent with the class.

**How the definition helps.** In our own explanation, the two edge labels let an adversary contradict each prediction while following a path that remains consistent after every round. The adversary presents the current input, observes the prediction and takes an edge with a different label. The harder converse constructs a learner that makes only finitely many mistakes when no infinite tree exists.

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

**How the definition helps.** In our own proof, stability bounds exactly the difference that remains after exchanging a training example with an independent copy. Train on the modified sample and evaluate on the removed example. This has the same expected loss as training on the original sample and evaluating on fresh data. Comparing the two learners on the removed example costs at most ε. Average over training positions. The work lies in proving the algorithm stable.

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

*Rules out counterexamples.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 3: graduate.

**Definition.** A Bayesian network uses a directed graph without directed cycles. Each variable has a conditional distribution given its parents, the variables with arrows into it. The joint distribution is the product of these conditional distributions. An arrow from X to Y is covered when the parents of Y are X and all the parents of X.

**Problem.** For finite variables with unrestricted conditional distributions, reversing a covered arrow preserves the family of joint distributions.

**How the definition helps.** In our own proof, the two affected factors describe X and Y jointly given their shared parents. The conditional probability rule factors that same joint distribution in reverse order. No other directed path can lead from X to Y because its last intermediate vertex would already be a parent of X. Thus reversal creates no directed cycle. Without coverage, reversal can introduce a new independence requirement.

**Paper or page:** [Likelihoods and Parameter Priors for Bayesian Networks](https://arxiv.org/abs/2105.06241). It says: “there exists a set of covered arc reversals that transform one structure into the other.”

**Sources:**

- [Likelihoods and Parameter Priors for Bayesian Networks](https://arxiv.org/abs/2105.06241)

### Subtree messages give exact marginals

**Remember:** Fix one variable and multiply the sums from its branches.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 3: graduate.

**Definition.** A factor graph connects each variable to the functions, called factors, that depend on it. Their product gives the joint probability up to a positive normalizing constant. Cut an edge of a tree and fix the value of its variable. The message from one side sums its product of factors over all its other variables.

**Problem.** For finitely many finite-valued variables on a factor tree, one message in each direction along each edge suffices for every single-variable probability.

**How the definition helps.** In our own proof, fixing one variable separates the sums over the branches meeting there. Multiplying their messages gives its probability up to normalization. The usual local algorithm passes messages toward a chosen root and then away from it. Induction from the leaves shows that its sums and products compute exactly the cut sums. This identity avoids summing over all variables separately for each requested probability.

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

**Definition.** Lift each point x in the plane to the point (x, \|x\|²) on a paraboloid. Take the convex hull of the lifted points and keep its lower faces, the faces seen from below. Project these faces back to the plane to get the Delaunay cells. A Delaunay triangulation instead chooses triangles, and four points on one circle allow two choices.

**Problem.** Take a finite set of points in the plane, not all on one line. The lifted lower hull gives exactly one Delaunay subdivision. A circle with no points inside and exactly four on it gives one quadrilateral cell.

**How the definition helps.** The convex hull of a finite set is unique, so the subdivision defined from it is unique by definition. Triangulations need a rule to split each cell with four or more points on one circle, and different rules give different answers. The work goes into showing that the projected lower faces cover the hull without overlaps, and that a plane touching the lifted points from below corresponds to an empty circle. The page states uniqueness only when all lower faces are triangles, and the comparison is our own.

**Wikipedia:** [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation). It says: “As the convex hull is unique, so is the triangulation, assuming all facets of the convex hull are simplices.”

**Sources:** none listed. No primary source with a working link was found.

### Slack ratios make Hilbert balls polyhedral

**Remember:** Bound each slack ratio and the ball becomes an intersection of half spaces.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG. Level 3: graduate.

**Definition.** Write each facet inequality of a bounded polytope as an affine function that is nonnegative inside. Its value is the slack. Divide each slack by its value at the interior center. Use the Hilbert distance convention in which distance from the center is the logarithm of the largest ratio of two normalized slacks.

**Problem.** A closed Hilbert ball of positive finite radius inside a bounded full-dimensional polytope with m facets has at most m(m−1) facets.

**How the definition helps.** In our own proof, bounding a ratio of positive slacks gives one linear inequality. There is one inequality for each ordered pair of distinct facets. The work lies in proving the slack formula equals the usual distance defined by the two boundary points on the line through the inputs.

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

**How the definition helps.** A majority for one ballot gives later proposers an accepted vote they must account for. In our own proof, every later proposer first obtains promises from a majority to reject earlier ballots. Each reply includes the highest ballot that voter has accepted, if any. The proposer takes the value from the highest reported ballot whenever one exists. Majority overlap and induction on ballot numbers then preserve any chosen value. Acceptances split across ballot numbers give no such guarantee.

**Wikipedia:** [Paxos (computer science)](https://en.wikipedia.org/wiki/Paxos_%28computer_science%29). It says: “consensus is achieved when a majority of Acceptors accept the same identifier number (rather than the same value).”

**Sources:**

- [Leslie Lamport, Paxos Made Simple (2001)](https://www.microsoft.com/en-us/research/publication/paxos-made-simple/)

### Termination with probability one lets consensus escape the FLP impossibility

**Remember:** A scheduler can stall a deterministic protocol forever, but not a coin-flipping one.

*Makes the theorem clean to state or prove.* MSC 68W15 (Distributed algorithms), 68W20, 68M14. arXiv cs.DC, cs.DS. Level 3: graduate.

**Definition.** In the consensus problem, each process starts with a value. Correct processes must all decide the same value (agreement), decide an input of some process (validity), and eventually decide (termination). In a fully asynchronous system, messages may take any finite time and processes may crash. Randomized consensus keeps agreement and validity always, but asks for termination only with probability one.

**Problem.** No deterministic protocol solves consensus in an asynchronous system if even one process may crash (Fischer, Lynch and Paterson). Randomized consensus, with termination only with probability one, can be solved there when fewer than half the processes may crash.

**How the definition helps.** The FLP proof builds one infinite schedule in which the protocol never decides. With coin flips such a schedule has probability zero, so the weaker termination condition is no longer contradicted (our own). Ben-Or gave such a protocol in 1983, in which processes that see no clear majority flip a coin (our own detail). Agreement and validity are not weakened at all, only termination.

**Wikipedia:** [Consensus (computer science)](https://en.wikipedia.org/wiki/Consensus_%28computer_science%29). It says: “Randomized consensus algorithms can circumvent the FLP impossibility result by achieving both safety and liveness with overwhelming probability”

**Sources:**

- [M. J. Fischer, N. A. Lynch and M. S. Paterson, Impossibility of distributed consensus with one faulty process, Journal of the ACM 32 (1985) 374–382](https://doi.org/10.1145/3149.214121)
- [M. Ben-Or, Another advantage of free choice: completely asynchronous agreement protocols, PODC 1983](https://doi.org/10.1145/800221.806707)

### Higher-order abstract syntax gets capture-free substitution from the host language

**Remember:** Use the host language’s binding rules instead of writing them again.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 03B40. arXiv cs.LO, cs.PL. Level 4: research.

**Definition.** In higher-order abstract syntax, the host language supplies the functions used to represent expressions that bind variables. For example, the body of λx. M is a host function of x. An encoding with variable names instead records each name and defines substitution on those names.

**Problem.** In a suitable encoding, applying the host function implements capture-free substitution for the encoded binder. Renaming a bound variable also leaves the encoding unchanged.

**How the definition helps.** The encoding uses host function application for substitution, so the host rules already prevent accidental binding of a free variable. In a typed encoding that represents object types by host types, host typing can enforce the substitution types as well (our own). A named encoding instead needs fresh names and a proof that substitution respects them (our own). The work moves to adequacy, the proof that the host terms represent exactly the intended syntax up to renaming (our own). A host with arbitrary functions can admit terms that represent no expression of the encoded language (our own).

**Wikipedia:** [Higher-order abstract syntax](https://en.wikipedia.org/wiki/Higher-order_abstract_syntax). It says: “by reusing the meta-level notion of binding, the encoding enjoys properties such as type-preserving substitution without the need to define or prove them.”

**Sources:**

- [F. Pfenning, C. Elliott, Higher-order abstract syntax, PLDI 1988](https://doi.org/10.1145/53990.54010)

### Dominating laws handle subsampling

**Remember:** An added record enters the output law only when the sample includes it.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data). arXiv cs.CR. Level 4: research.

**Definition.** Two data sets are neighbors here when the second adds one record to the first. For output laws R and S, let D(α,R,S) be the maximum of R(A) − αS(A) over events A. A pair P,Q dominates if D(α,P,Q) bounds D(α,R,S) from above for every neighboring pair and every α ≥ 0. Poisson subsampling keeps each record independently with probability γ.

**Problem.** A dominating pair (P, Q) for adding one record becomes (P, (1 − γ)P + γQ) after Poisson subsampling. This uses the unmodified law as the first argument.

**How the definition helps.** The extra record contributes to the second output law only when the sample includes it. Our own proof conditions on the sampled common records, giving output laws R and (1 − γ)R + γS. In the event difference, the coefficient of R(A) is 1 − α(1 − γ). If that coefficient is nonpositive, the maximum is zero. Otherwise, dividing by it gives the original comparison at a rescaled α. Averaging over the common sample preserves the bound.

**Paper or page:** [Avoiding Pitfalls for Privacy Accounting of Subsampled Mechanisms under Composition](https://arxiv.org/abs/2405.20769v2). It says: “If (P, Q) dominates ℳ for add neighbours then (P, (1−γ)P + γQ) dominates ℳₚₒᵢₛₛₒₙ for add neighbours”

**Sources:** none listed. No primary source with a working link was found.

### Dominating pairs turn privacy composition into products, so characteristic functions multiply

**Remember:** Bound each step by a fixed pair, then multiply characteristic functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 60E10. arXiv cs.LG, cs.CR. Level 4: research.

**Definition.** A mechanism is a randomized algorithm on datasets. A pair of distributions (P, Q) dominates it if no two neighboring datasets give output laws further apart than P and Q. Distance is measured for each α ≥ 0 by the largest value of P(A) − αQ(A) over events A. The privacy loss of (P, Q) is log(dP/dQ) under P, and its characteristic function is the expected value of exp(itL).

**Problem.** In adaptive composition, a second mechanism may depend on the output of the first. If (P, Q) and (P′, Q′) dominate the two steps, the product pair dominates the composition (Theorem 10 of the paper). The privacy loss of a product pair is a sum of independent losses, so its characteristic function is a product.

**How the definition helps.** Domination replaces dependent real losses by independent ones, and characteristic functions turn sums of independent variables into products. The product rule is a standard fact, and applying it here is our own explanation. The nontrivial step is Theorem 10, which shows that the product pair still dominates when the second step adapts.

**Paper or page:** [Optimal Accounting of Differential Privacy via Characteristic Function](https://arxiv.org/abs/2106.08567v3). It says: “If (P,Q) dominates ℳ and (P′, Q′) dominates ℳ′, then (P×P′, Q×Q′) dominates the composed mechanism (ℳ, ℳ′).”

**Sources:**

- [Yuqing Zhu, Jinshuo Dong, Yu-Xiang Wang, Optimal Accounting of Differential Privacy via Characteristic Function, arXiv:2106.08567v3 (2022)](https://arxiv.org/abs/2106.08567v3)

### Gaussian differential privacy composes by adding the squares of the parameters

**Remember:** Gaussian privacy losses add like independent Gaussian noise, in squares.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A13. arXiv stat.TH, cs.CR. Level 4: research.

**Definition.** Take two data sets that differ in one person. A randomized algorithm is μ-GDP (Gaussian differentially private) if its two output distributions are never easier to tell apart than N(0, 1) and N(μ, 1). 'Telling apart' is measured by the trade-off between the two kinds of error of a statistical test. So the definition compares every algorithm with one Gaussian benchmark.

**Problem.** Running a μ₁-GDP and then a μ₂-GDP algorithm on the same data gives a √(μ₁² + μ₂²)-GDP algorithm. This stays true when each step chooses its parameter adaptively, provided the sum of squares stays below a budget B².

**How the definition helps.** The Gaussian benchmark is closed under composition, so the rule for the total cost is exact and short (Lemma 2 of the PRECAD paper). Testing two independent normal shifts is the same as testing one shift of length √(μ₁² + μ₂²) (our own explanation). For the usual (ε, δ) privacy, the exact total is hard to compute and the simple bounds are loose. Conversion back to (ε, δ) uses an explicit formula with the normal distribution function (Lemma 4 of the PRECAD paper).

**Paper or page:** [Individual Privacy Accounting with Gaussian Differential Privacy](https://arxiv.org/abs/2209.15596v2), [PRECAD: Privacy-Preserving and Robust Federated Learning via Crypto-Aided Differential Privacy](https://arxiv.org/abs/2110.11578v1). It says: “Let k denote the maximum number of compositions. Suppose that, almost surely, ∑ₘ₌₁ᵏ μₘ² ≤ B². Then, 𝓜⁽ᵏ⁾(X) is B-GDP.”

**Sources:**

- [Antti Koskela, Marlon Tobaben, Antti Honkela, Individual Privacy Accounting with Gaussian Differential Privacy, International Conference on Learning Representations 2023, arXiv:2209.15596](https://arxiv.org/abs/2209.15596v2)
- [Jinshuo Dong, Aaron Roth, Weijie J. Su, Gaussian Differential Privacy, Journal of the Royal Statistical Society Series B (2022)](https://doi.org/10.1111/rssb.12454)

### Local differential privacy is the same as contraction of one divergence

**Remember:** Local privacy means one divergence shrinks to at most δ times its size.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 94A17, 94A40. arXiv math.IT, cs.CR. Level 4: research.

**Definition.** In local privacy, each user applies a randomizing channel K to their own data. K is (ε, δ)-locally private if K(S \| x) ≤ eᵋ K(S \| x′) + δ for all inputs x, x′ and output sets S. The Eγ-divergence of P from Q is the largest value of P(S) − γQ(S) over all sets S. The contraction coefficient ηγ(K) is the largest possible ratio of this divergence after K to the divergence before K.

**Problem.** A channel K is (ε, δ)-locally private exactly when its contraction coefficient ηγ(K) is at most δ, with γ = eᵋ.

**How the definition helps.** Local privacy is already a bound on the Eγ-divergence, with γ = eᵋ, between the outputs for any two inputs. Two different inputs, seen as point masses, have Eγ-divergence 1, so privacy says that K shrinks this divergence from 1 to at most δ on such pairs (our own). The theorem says that point masses are the worst case (our own reading). Contraction coefficients are a standard tool for lower bounds on the error of estimators (our own).

**Paper or page:** [Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence](https://arxiv.org/abs/2102.01258v1). It says: “A mechanism 𝖪 is (ε, δ)-LDP if and only if η\[eᵋ\](𝖪) ≤ δ”

**Sources:**

- [Shahab Asoodeh, Maryam Aliakbarpour, Flavio P. Calmon, Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence, arXiv:2102.01258 (2021); published at ISIT 2021 as Local Differential Privacy Is Equivalent to Contraction of an f-Divergence](https://arxiv.org/abs/2102.01258v1)

### Rényi differential privacy makes the cost of composition simply add

**Remember:** Fix the order α, and Rényi privacy costs simply add up.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A17. arXiv cs.CR, cs.LG. Level 4: research.

**Definition.** Take two data sets that differ in one person. An algorithm is (α, ε)-RDP (Rényi differentially private) if its two output distributions have Rényi divergence of order α at most ε. The Rényi divergence of order α &gt; 1 measures how far apart two distributions are. As α grows, it tends to the worst-case log ratio of the two densities.

**Problem.** If one step is (α, ε₁)-RDP and a second step, which may see the first output, is (α, ε₂)-RDP, then together they are (α, ε₁ + ε₂)-RDP.

**How the definition helps.** The Rényi divergence of two product distributions is the sum over the factors, so composition becomes a plain sum (our own explanation). The Gaussian mechanism is (α, αΔ²/(2σ²))-RDP for every order α, where Δ is the sensitivity and σ the noise scale (Proposition 1 of the NIST paper). So one adds the costs over thousands of training steps and converts to (ε, δ) privacy only once at the end. That final conversion loses a little and needs a choice of α.

**Paper or page:** [Winning the NIST Contest: A scalable and general approach to differentially private synthetic data](https://arxiv.org/abs/2108.04978v1), [Shuffle Gaussian Mechanism for Differential Privacy](https://arxiv.org/abs/2206.09569v2). It says: “Let 𝓜₁ : 𝒟 → ℛ₁ be (α, γ₁)-RDP and 𝓜₂ : 𝒟 × ℛ₁ → ℛ₂ be (α, γ₂)-RDP. Then the mechanism 𝓜 = 𝓜₂(D, 𝓜₁(D)) is (α, γ₁ + γ₂)-RDP.”

**Sources:**

- [Ryan McKenna, Gerome Miklau, Daniel Sheldon, Winning the NIST Contest: A scalable and general approach to differentially private synthetic data, Journal of Privacy and Confidentiality 11 (2021), arXiv:2108.04978](https://doi.org/10.29012/jpc.778)
- [Shuffle Gaussian Mechanism for Differential Privacy, arXiv:2206.09569 (2022)](https://arxiv.org/abs/2206.09569v2)

### Approximate degree with a matrix-norm bound equals quantum query complexity

**Remember:** To count quantum queries, test polynomials on matrices as well as scalars.

*Makes the theorem clean to state or prove.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 81P68, 46L07. arXiv quant-ph, cs.CC. Level 4: research.

**Definition.** The completely bounded norm controls a tensor expression when its inputs are matrices of norm at most one. For a form, minimize this bound over tensors that represent the form. The refined approximate degree uses only forms with completely bounded norm at most one.

**Problem.** A function on the Boolean cube is the expected output sign of a t-query quantum algorithm exactly when a degree-2t form with completely bounded norm at most one gives it. The form is evaluated on the input padded with ones. So the refined approximate degree equals the quantum query complexity.

**How the definition helps.** The norm condition makes polynomial approximation an exact way to count quantum queries. In our own words, scalar values alone do not enforce the structure of a quantum algorithm. The hard step is to turn every allowed form into a query algorithm. The paper uses a representation theorem for multilinear maps.

**Paper or page:** [Quantum Query Algorithms are Completely Bounded Forms](https://arxiv.org/abs/1711.07285v3). It says: “Based on this, we obtain a refined notion of approximate polynomial degree that equals the quantum query complexity, answering a question of Aaronson et al. (CCC'16).”

**Sources:**

- [Srinivasan Arunachalam, Jop Briët, Carlos Palazuelos, Quantum Query Algorithms are Completely Bounded Forms, arXiv:1711.07285v3 (2022), SIAM Journal on Computing, Vol. 48, 903-925, 2019](https://arxiv.org/abs/1711.07285v3)

### False-clause search links proofs to TFNP

**Remember:** Every refutation is a search for the broken clause.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03F20. arXiv cs.CC, cs.LO. Level 4: research.

**Definition.** For an unsatisfiable CNF formula F, the search problem S(F) takes an assignment and asks for a clause of F that it falsifies. Such a clause always exists, so S(F) is a total search problem. PPADᵈᵗ is the decision-tree version of the class PPAD, a class of total search problems defined by an end-of-line principle.

**Problem.** For an unsatisfiable CNF formula F, short unary Nullstellensatz refutations of F correspond exactly to membership of S(F) in PPADᵈᵗ. Unary Sherali–Adams refutations correspond in the same way to PPADSᵈᵗ.

**How the definition helps.** S(F) is total because F is unsatisfiable, so each proof system can be matched with a class of total search problems. Separations between proof systems then give separations between search classes in the decision-tree model (our own reading of the title). The proofs of these correspondences remain the work.

**Paper or page:** [Separations in Proof Complexity and TFNP](https://arxiv.org/abs/2205.02168). It says: “For any sequence Fn of poly(log n)-width CNF formulas, Fn has a degree-poly(log n), size-nᵖᵒˡʸ⁽ˡᵒᵍ ⁿ⁾ unary Nullstellensatz proof if and only if S(F) ∈ PPADᵈᵗ.”

**Sources:**

- [Separations in Proof Complexity and TFNP, arXiv:2205.02168 (2022)](https://arxiv.org/abs/2205.02168)

### ∃ℝ gives art galleries an exact complexity

**Remember:** Real solutions of polynomials are the true measure of guarding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03D78, 68U05. arXiv cs.CG, cs.CC. Level 4: research.

**Definition.** ∃ℝ is the class of decision problems that reduce in polynomial time to the existential theory of the reals. That theory asks whether a system of polynomial equations and inequalities with integer coefficients has a real solution. It lies between NP and PSPACE.

**Problem.** The point-boundary art gallery problem, where guards must see only the walls of the polygon, is ∃ℝ-complete. So it is equivalent under polynomial-time reductions to deciding whether polynomial equations have a real solution.

**How the definition helps.** NP is the wrong yardstick here, because optimal guards can need irrational coordinates, so a solution may have no short exact description (our own). The class ∃ℝ is built around real solutions of polynomial systems, so such geometric problems can be complete for it (our own). The work is in the hardness gadgets, which the paper makes simple enough to build and check by hand.

**Paper or page:** [The Point-Boundary Art Gallery Problem is ∃ℝ-hard](https://arxiv.org/abs/2210.12817). It says: “showing that it is ∃ℝ-complete, meaning that it is equivalent under polynomial time reductions to deciding whether a system of polynomial equations has a real solution.”

**Sources:**

- [Jack Stade, The Point-Boundary Art Gallery Problem is ∃ℝ-hard, arXiv:2210.12817 (2025)](https://arxiv.org/abs/2210.12817)
- [Mikkel Abrahamsen, Anna Adamaszek, Tillmann Miltzow, The Art Gallery Problem is ∃ℝ-complete, Journal of the ACM (2021)](https://doi.org/10.1145/3486220)

### Pliability unifies planar and dense approximation

**Remember:** Close to bounded treewidth is enough for good approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q25 (Analysis of algorithms and problem complexity), 05C83. arXiv cs.CC, cs.DS. Level 4: research.

**Definition.** A class of structures is treewidth-pliable when, for every error ε &gt; 0, each structure in it is ε-close to one of bounded treewidth. The bound may depend only on ε. The distance compares the optimal values of Max-CSP instances on the two structures. Treewidth measures how much a graph looks like a tree.

**Problem.** For every treewidth-pliable class of structures of bounded arity, Max-CSP has a polynomial-time approximation scheme. Such a scheme gets within any factor 1 + ε of the optimal value in polynomial time.

**How the definition helps.** Both known proofs, for planar graphs and for dense graphs, replace the graph by a nearby structure of bounded treewidth, and pliability names that step (our own explanation). So one theorem covers both cases, which the abstract says unifies Baker's layering for sparse graphs and Szemerédi's regularity lemma for dense graphs. The condition approximates the optimal value, but the paper shows that it cannot be used to find solutions in general.

**Paper or page:** [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204), [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204). It says: “The condition unifies the two main approaches for designing a polynomial-time approximation scheme. One is Baker's layering technique, which applies to sparse graphs such as planar or excluded-minor graphs.”

**Sources:**

- [Miguel Romero, Marcin Wrochna, Stanislav Živný, Pliability and Approximating Max-CSPs, Journal of the ACM 70(6) (2023)](https://arxiv.org/abs/1911.03204)

### Public randomness gives Kolmogorov complexity coding

**Remember:** Sharing the coins lets short descriptions match probability.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.CC, math.LO. Level 4: research.

**Definition.** The time-bounded Kolmogorov complexity of a string is the length of the shortest program that prints it within a time bound. In probabilistic Kolmogorov complexity pK, the machine gets a random string, and the program may depend on it. The program needs to work only for most choices of the random string. Randomized complexity rK instead asks for one program that uses its own private random bits.

**Problem.** For probabilistic Kolmogorov complexity pK, a string that an efficient sampler outputs with probability p has complexity about log(1/p). For rK, the paper proves this coding theorem only if one-way functions do not exist.

**How the definition helps.** With shared random bits, an encoder and a decoder can agree on a hash-based code (our own explanation). So pK has an unconditional coding theorem, and earlier average-case results were proved for pK rather than rK, as the quoted abstract says. Without public randomness, the rK version stays conditional.

**Paper or page:** [Optimal Coding for Randomized Kolmogorov Complexity and Its Applications](https://arxiv.org/abs/2409.12744). It says: “Previous works bypassed this issue by considering probabilistic Kolmogorov complexity (pKᵖᵒˡʸ), in which public random bits are assumed to be available.”

**Sources:**

- [Shuichi Hirahara, Zhenjian Lu, Mikito Nanashima, Optimal Coding for Randomized Kolmogorov Complexity and Its Applications, arXiv:2409.12744 (2024)](https://arxiv.org/abs/2409.12744)

### Calibrating sums of label probabilities makes multiclass calibration efficient

**Remember:** Add label probabilities to get a reliable forecast for a group of labels.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q32 (Computational learning theory), 62H30. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** A multiclass predictor gives a probability vector over k labels. A forecast is calibrated if, among cases with forecast v, the event happens a fraction v of the time. Projected smooth calibration asks for an approximate form of this for the summed probability of each label set T.

**Problem.** Projected smooth calibration can be reached by recalibration algorithms whose time and sample costs are polynomial in k. Then, for each label set T, the summed probability is close to a perfectly calibrated binary predictor for the question “is the label in T?”.

**How the definition helps.** Weakening calibration to sums over label sets makes polynomial cost possible while keeping a useful guarantee for each binary question. Natural stronger notions meet information-theoretic or computational barriers. The proofs rest on a tight connection between multiclass calibration and agnostic learning of binary predictions.

**Paper or page:** [On Computationally Efficient Multi-Class Calibration](https://arxiv.org/abs/2402.07821v2). It says: “It ensures that the probabilities predicted by summing the probabilities assigned to labels in T are close to some perfectly calibrated binary predictor for that task.”

**Sources:**

- [Parikshit Gopalan, Lunjia Hu, Guy N. Rothblum, On Computationally Efficient Multi-Class Calibration, arXiv:2402.07821v2 (2024)](https://arxiv.org/abs/2402.07821v2)

### Multicalibration gives one forecast that serves many losses at once

**Remember:** Learn the forecast first and choose the action once you know the loss.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62C05. arXiv cs.LG. Level 4: research.

**Definition.** An omnipredictor for a class C and a family of losses is a probability forecast such that, for each loss, the best action under the forecast does nearly as well as the best rule in C. A predictor is multicalibrated for C when its forecast errors average near zero across forecast levels and groups defined by C.

**Problem.** An approximately multicalibrated predictor for C is an omnipredictor for C, for the loss families covered by the paper.

**How the definition helps.** Omniprediction separates the forecast from the action, so the same theorem can cover many choices of loss. The action depends on one forecast value, with no need to retrain. The work is to prove that multicalibration suffices for this guarantee.

**Paper or page:** [Omnipredictors](https://arxiv.org/abs/2109.05389v1). It says: “Once the loss function is set, the outputs of the predictor can be post-processed (a simple univariate data-independent transformation of individual predictions) to do well compared with any hypothesis from the class”

**Sources:**

- [Parikshit Gopalan, Adam Tauman Kalai, Omer Reingold, Vatsal Sharan, Udi Wieder, Omnipredictors, arXiv:2109.05389v1 (2021)](https://arxiv.org/abs/2109.05389v1)

### Strong proper computable learning equals having a computable empirical risk minimizer

**Remember:** A computable sample bound turns learning into a finite search for the minimizer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q32 (Computational learning theory), 03D20. arXiv cs.LG, cs.LO. Level 4: research.

**Definition.** PAC learning asks for a hypothesis with error at most ε, with probability at least 1 − δ, from enough samples. Computable PAC learning asks that the learner be an algorithm. Strong computable learning also asks for a computable bound on the number of samples needed. Proper learning requires the output to lie in the class.

**Problem.** For a class of finite Vapnik–Chervonenkis dimension, strong proper computable learning holds exactly when an algorithm performs empirical risk minimization. Empirical risk minimization returns a hypothesis in the class with least error on the given sample. The dimension is the size of the largest set on which the class realizes every labeling by 0 and 1.

**How the definition helps.** The computable sample bound makes learning a finite search, and the search yields an exact minimizer. In our own sketch, take the uniform distribution on n sample points and accuracy below 1/n, run the learner on every sample sequence of the required length, and keep the output with least sample error. Sample errors are multiples of 1/n, so this output is a minimizer. Conversely, finite dimension gives a computable sample bound, and the paper quotes the theorem from earlier work.

**Paper or page:** [Computable learning of natural hypothesis classes](https://arxiv.org/abs/2407.16663v2). It says: “proper SCPAC learnable ⇔ there is a computable ERM for ℋ”

**Sources:**

- [Matthew Harrison-Trainor, Syed Akbari, Computable learning of natural hypothesis classes, arXiv:2407.16663v2 (2024)](https://arxiv.org/abs/2407.16663v2)

### Under label shift, unlabelled test data give unbiased risk estimates

**Remember:** If only label frequencies change, old class errors still give the new risk.

*True by definition.* MSC 68Q32 (Computational learning theory), 62M20. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** Under label shift, the label frequencies change between training and test data. The distribution of inputs within each label stays the same. The confusion matrix of a classifier gives, for each true label, the probability of each predicted label on training data.

**Problem.** Suppose a reference classifier has an invertible confusion matrix C on the training data. For a test input, let e be the vector with a single 1 at the predicted label. Then (Cᵀ)⁻¹e is an unbiased estimate of the test label frequencies, and so of the test loss of any classifier.

**How the definition helps.** Label shift keeps each class's error rates fixed, so the test loss is a linear function of the test label frequencies. By the same assumption, the expected value of e is Cᵀ times the test label frequencies. Inverting Cᵀ therefore gives an unbiased estimate. That short argument is our own reading of Theorem 1. In practice C must itself be estimated from finite training data, which the theorem ignores.

**Paper or page:** [Online Adaptation to Label Distribution Shift](https://arxiv.org/abs/2107.04520v2), [Online Adaptation to Label Distribution Shift](https://arxiv.org/abs/2107.04520v2). It says: “we show that the lack of true label does not hinder estimation of the expected test loss, which enables the reduction of online label shift adaptation to conventional online learning.”

**Sources:**

- [Ruihan Wu, Chuan Guo, Yi Su, Kilian Q. Weinberger, Online Adaptation to Label Distribution Shift, arXiv:2107.04520v2 (2022)](https://arxiv.org/abs/2107.04520v2)

### Internal rewriting gives one Newman's lemma for sets and vector spaces

**Remember:** Define confluence once inside a category, and Newman's lemma needs one proof.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q42 (Grammars and rewriting systems), 18D40. arXiv math.CT, cs.LO. Level 4: research.

**Definition.** Internal abstract rewriting defines termination, local confluence and confluence for rewriting on an object of a category 𝒞, using reduction strategies that choose how each element rewrites. Terminating means that no rewriting chain is infinite. Confluent means that any two rewriting paths from one term meet again.

**Problem.** In any category 𝒞 that meets the paper's mild conditions, a terminating, locally confluent rewriting system is confluent. Taking 𝒞 to be sets or vector spaces recovers both classical forms of Newman's lemma.

**How the definition helps.** Once the notions live inside a general category, one proof of Newman's lemma covers both settings, which before needed separate proofs. Our own remark: the vector space case is harder because a linear combination can rewrite in many ways at once. The category 𝒞 must still satisfy the mild conditions of the paper.

**Paper or page:** [Abstract rewriting internalized](https://arxiv.org/abs/2002.06004), [Abstract rewriting internalized](https://arxiv.org/abs/2002.06004). It says: “Strikingly, although both theories are very similar, most results (such as Newman's Lemma) require different proofs in these two settings.”

**Sources:**

- [Maxime Lucas, Abstract rewriting internalized, arXiv:2002.06004 (2020)](https://arxiv.org/abs/2002.06004)

### Suffix agreement characterizes finite recognition of probability classes

**Remember:** Compare every suffix before merging two prefixes.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68T50. arXiv cs.FL, cs.LG. Level 4: research.

**Definition.** A language model gives a next-symbol distribution after each prefix. Fix an equivalence relation on these distributions. Group two prefixes if their distributions are equivalent after appending every possible suffix.

**Problem.** A language model has finitely many such prefix classes exactly when a finite deterministic automaton can reproduce its output classes.

**How the definition helps.** In our own proof, appending a letter to equivalent prefixes preserves equivalence because the test already includes every continuation starting with that letter. Each prefix class can therefore serve as a state. The empty continuation determines its output class. Conversely, prefixes reaching the same deterministic state give the same output class after every continuation.

**Paper or page:** [Congruence-based Learning of Probabilistic Deterministic Finite Automata](https://arxiv.org/abs/2412.09760v1). It says: “For every equivalence ℰ and language model ℳ, ℳ is ℰ-regular if and only if ℳ is PDFA ℰ-recognizable.”

**Sources:**

- [Matías Carrasco, Franz Mayr, Sergio Yovine. Congruence-based Learning of Probabilistic Deterministic Finite Automata. 2024.](https://arxiv.org/abs/2412.09760v1)

### Tameness gives the monoid-program characterization by design

**Remember:** Tame monoids gain no extra regular languages from programs.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata), 20M35. arXiv cs.FL, cs.CC. Level 4: research.

**Definition.** A program over a finite monoid M reads input letters at chosen positions, maps each to an element of M and multiplies them. The paper's tameness condition on a class V of monoids is equivalent to this: every regular language recognized by programs over V lies in L(QEV), the class recognized classically by morphisms.

**Problem.** Programs over monoids in DA recognize exactly the regular languages recognized by morphisms into QDA, because DA is tame. The class J is not tame.

**How the definition helps.** Tameness is equivalent to the inclusion that the characterization needs, so for a tame class the characterization holds almost by definition. That equivalence is a proposition in the data set, not the definition itself. The work moves into showing that a given class, such as DA, is tame, and the failure for J shows that the condition is a real restriction.

**Paper or page:** [Tameness and the power of programs over monoids in DA](https://arxiv.org/abs/2101.07495), [Tameness and the power of programs over monoids in DA](https://arxiv.org/abs/2101.07495). It says: “First, we identify a new tameness condition on a class of monoids that entails a natural characterization of the regular languages recognizable by programs over monoids from the class.”

**Sources:**

- [Nathan Grosshans, Pierre McKenzie, Luc Segoufin, Tameness and the power of programs over monoids in DA, Logical Methods in Computer Science 18(3) (2022)](https://arxiv.org/abs/2101.07495)

### Tensor cells let automata run in parallel

**Remember:** Paired cells let both machines keep events active.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68Q85. arXiv cs.FL. Level 4: research.

**Definition.** A higher-dimensional automaton records simultaneously active events in a cell. In the tensor product, a cell pairs one cell from each machine. It lists the active events of the first component before those of the second without requiring the first events to finish earlier.

**Problem.** The tensor product accepts exactly the parallel combinations of the two machines’ event languages.

**How the definition helps.** In our own explanation, a paired cell lets events from both machines overlap while preserving each machine’s local constraints. The parallel language allows the components to run independently and includes executions with additional precedence constraints. The proof must project each combined run onto both components and construct a combined run for each allowed combination.

**Paper or page:** [Kleene Theorem for Higher-Dimensional Automata](https://arxiv.org/abs/2202.03791v6). It says: “Then ℒ(X ⊗ Y) = ℒ(X) ∥ ℒ(Y).”

**Sources:**

- [Uli Fahrenberg, Christian Johansen, Georg Struth, and Krzysztof Ziemiański. Kleene Theorem for Higher-Dimensional Automata. 2024.](https://lmcs.episciences.org/14922)

### Defining handlers as algebra maps makes them respect the effect equations

**Remember:** A map out of a quotient cannot separate identified computations.

*True by definition. Confidence: medium.* MSC 68Q55 (Semantics in the theory of computing), 18C10. arXiv cs.PL, cs.LO. Level 4: research.

**Definition.** An algebraic effect is given by operations and equations, such as the laws for reading and writing a store. Computations are elements of the free model of these equations. A handler is a structure-preserving map from the free model to another model of the same equations. A direct implementation instead replaces operation nodes in computation trees by recursion.

**Problem.** A handler gives equal results on computations that the effect equations identify.

**How the definition helps.** A handler is a function on the free model, where those computations are already equal. The nLab describes algebraic effects by equations in this way. Our own remark puts the work in checking that the target operations satisfy every equation. The free-model theorem then gives the map and shows that it agrees with recursive handling on trees. A recursive handler alone can break the equations.

**nLab:** [algebraic effect](https://ncatlab.org/nlab/show/algebraic+effect). It says: “Algebraic effects are computational effects that can be represented by an equational theory, or algebraic theory, whose operations produce the effects at hand.”

**Sources:**

- [Matija Pretnar, An Introduction to Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)

### Defining sequencing as an algebra map makes effect operations commute with it

**Remember:** Substitution at the leaves leaves the operation nodes alone.

*True by definition. Confidence: medium.* MSC 68Q55 (Semantics in the theory of computing), 18C15. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** Let T(X) be the free model of an effect theory on a set X of results. Sequencing a computation with f from X to T(Y) is the unique structure-preserving map T(X) → T(Y) that extends f. The direct definition on trees substitutes the next computation at each leaf that returns a value.

**Problem.** Performing an operation and then sequencing equals performing the operation on the sequenced continuations.

**How the definition helps.** The extension preserves every operation because it is a map of algebras, so the equation holds at once. The nLab states that the maps between free algebras are exactly these extensions. Operations with this property are called algebraic. Our own remark puts the work in the theorem that identifies the free model with trees modulo the equations. Under that identification, the extension becomes substitution at the leaves.

**nLab:** [algebra over a monad](https://ncatlab.org/nlab/show/algebra+over+a+monad). It says: “all homomorphisms of T-algebras between the free algebras T X and T Y do arise this way.”

**Sources:**

- [Matija Pretnar, An Introduction to Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)

### The later modality gives guarded fixed points without inconsistency

**Remember:** You may call yourself recursively, but only one step later.

*Rules out counterexamples.* MSC 68Q55 (Semantics in the theory of computing), 03B38, 03D65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** Synthetic guarded domain theory has a type former ▷, called later. ▷A is the type of values that are available one time step from now, and next : A → ▷A delays a value by one step.

**Problem.** In synthetic guarded domain theory, every f : ▷A → A, at every type A, has a fixed point fix(f) with fix(f) = f(next(fix(f))), and the theory stays consistent.

**How the definition helps.** The later modality delays each recursive call by one step, and this delay keeps a fixed-point operator at all types consistent. An unrestricted fixed-point operator at all types makes the logic inconsistent, as with x = ¬x. Only x = ¬▷x can be formed, and it is harmless (our own example). The work lies in finding models, such as the topos of trees (presheaves on ω), where fixed points are built stage by stage.

**nLab:** [synthetic guarded domain theory](https://ncatlab.org/nlab/show/synthetic+guarded+domain+theory). It says: “yields a restricted fixed-point operator fix : (▷A → A) → A at all types A, which is consistent when viewing this theory as a logical framework.”

**Sources:**

- [Lars Birkedal, Rasmus Ejlers Møgelberg, Jan Schwinghammer, Kristian Støvring, First steps in synthetic guarded domain theory: step-indexing in the topos of trees, Logical Methods in Computer Science 8(4) (2012), arXiv:1208.3596](https://arxiv.org/abs/1208.3596)

### Least stream solutions give Kahn networks one result across fair schedules

**Remember:** Fair runs compute the same least solution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.DC, cs.LO. Level 4: research.

**Definition.** A Kahn network consists of deterministic processes that pass ordered streams through unbounded channels. Reads wait for data, writes never wait, and processes cannot test whether a channel is empty. The stream model orders streams by extension and uses functions that preserve limits of increasing prefixes. A network’s meaning is the least solution of its channel equations.

**Problem.** For fixed inputs and initial channel data, every fair run of a Kahn network produces the same streams. A fair run does not postpone a process forever when it can keep taking steps.

**How the definition helps.** The stream definition gives fair runs a common mathematical target, the least solution (our own). Starting with empty streams and iterating the equations gives increasing prefixes whose limit is that solution (our own). Fair scheduling may reveal prefixes in different orders, but each fair run must reach the same limit (our own). The work moves into proving that the process functions preserve those limits and that fair runs compute the least solution (our own). Uniqueness of the mathematical solution alone does not prove that operational result (our own).

**Wikipedia:** [Kahn process networks](https://en.wikipedia.org/wiki/Kahn_process_networks). It says: “Due to these key restrictions, the resulting process network exhibits deterministic behavior that does not depend on the timing of computation nor on communication delays.”

**Sources:** none listed. No primary source with a working link was found.

### Doubling metrics allow fast closest pair

**Remember:** Low dimension is a covering property, not a coordinate count.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68R12 (Metric embeddings as related to computational problems and algorithms), 68U05. arXiv cs.DS, cs.CG. Level 4: research.

**Definition.** The doubling dimension of a metric space is the smallest d such that 2ᵈ balls of radius r cover each ball of radius 2r. Euclidean space ℝᵏ has doubling dimension proportional to k. The definition uses only distances, with no coordinates.

**Problem.** In a metric space of N points whose doubling dimension d does not depend on N, a randomised algorithm finds the closest-pair distance in O(N log N) expected time.

**How the definition helps.** The only fact about dimension that the grid algorithm needs is a packing bound, and the doubling definition gives it directly (our own). The paper proves that for R ≥ δ/2, a ball of radius R holds at most (4R/δ)ᵈ points, where δ is the closest-pair distance. The constant in the running time depends only on d and grows exponentially in d, so the result is useful only for small d (our own).

**Paper or page:** [A Simple Randomized O(n log n)--Time Closest-Pair Algorithm in Doubling Metrics](https://arxiv.org/abs/2004.05883), [A Simple Randomized O(n log n)--Time Closest-Pair Algorithm in Doubling Metrics](https://arxiv.org/abs/2004.05883). It says: “Let (P,dist) be a metric space of size N ≥ 2, and let d be its doubling dimension. Assume that d does not depend on N. The closest-pair distance in P can be computed in O(N log N) expected time.”

**Sources:**

- [A Simple Randomized O(n log n)-Time Closest-Pair Algorithm in Doubling Metrics, arXiv:2004.05883 (2020)](https://arxiv.org/abs/2004.05883)

### Comparing infinite words with their suffixes gives unique Lyndon factorizations

**Remember:** Compare infinite words with their tails, not with rotations.

*Makes the theorem clean to state or prove.* MSC 68R15 (Combinatorics on words), 05A05. arXiv math.CO, cs.DM. Level 4: research.

**Definition.** A generalized lexicographic order compares words letter by letter, but may use a different alphabet order at each position. A finite generalized Lyndon word is strictly smaller than all its other rotations. An infinite generalized Lyndon word is strictly smaller than all its proper suffixes.

**Problem.** Every infinite word has a unique nonincreasing factorization into finite and infinite generalized Lyndon words. This proves a conjecture of Dolce, Restivo and Reutenauer.

**How the definition helps.** Infinite words have no rotations, so the suffix rule is the natural replacement, and it allows an infinite last factor. In our own example, with a before b at every position, abbb… is smaller than each of its suffixes bbb…. So abbb… is itself an infinite Lyndon word, and its factorization has one term. The definition makes the theorem statable, but existence and uniqueness still take real proof.

**Paper or page:** [Generalized Lyndon Factorizations of Infinite Words](https://arxiv.org/abs/1905.04746v2). It says: “We prove a conjecture of Dolce, Restivo, and Reutenauer: every infinite word has a unique nonincreasing factorization into finite and infinite generalized Lyndon words.”

**Sources:**

- [Amanda Burcroff, Eric Winsor, Generalized Lyndon Factorizations of Infinite Words, arXiv:1905.04746 (2019)](https://arxiv.org/abs/1905.04746v2)
- [Amanda Burcroff and Eric Winsor, Generalized Lyndon factorizations of infinite words, Theoretical Computer Science 809 (2020), 30–38](https://doi.org/10.1016/j.tcs.2019.11.003)

### Kernel evaluations reduce each learned layer to a finite span

**Remember:** Drop every layer component the training points cannot see.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68T07, 46E22. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** Each layer is a function in a Hilbert space where evaluating an output coordinate at an input is a continuous linear functional, represented by a vector. The training evaluation span of a layer is the span of these vectors over all coordinates and the finitely many training inputs that reach the layer.

**Problem.** Minimize a loss depending only on final training predictions plus a positive multiple of each layer’s squared norm. At any minimizer, each layer belongs to its training evaluation span.

**How the definition helps.** In our own proof, projection onto the evaluation span preserves every training output because it preserves the inner products defining those outputs. All later layers therefore receive the same training inputs. Any removed nonzero component strictly reduces the penalty, contradicting minimality. The Hilbert space representation theorem supplies the evaluation vectors that replace a search over arbitrary functions.

**Paper or page:** [A resource-efficient model for deep kernel learning](https://arxiv.org/abs/2410.09926v1). It says: “fulfills $f<sub>i</sub>\\in V<sub>i</sub>\\subset H<sub>i</sub>$”

**Sources:** none listed. No primary source with a working link was found.

### Multicalibration gives stronger hardcore lemmas

**Remember:** Calibrate on every simple set, and hardcore sets appear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q06. arXiv cs.CC, cs.LG. Level 4: research.

**Definition.** A predictor is multiaccurate for a collection of sets when its error averages to about zero on each set in the collection. It is multicalibrated when it is also calibrated on each set. That is, on the points of the set where it predicts v, the true average is about v.

**Problem.** Multicalibration gives stronger versions of Impagliazzo's hardcore lemma, which says that a function mildly hard for small circuits is very hard on some large set of inputs. For example, every Boolean function has a small collection of disjoint hardcore sets, whose sizes depend on how balanced the function is on the parts.

**How the definition helps.** Multicalibration splits the inputs into a few simple parts, and on each part the function looks like a biased coin to simple tests (our own reading). Hardcore sets can then be read off from the parts (our own). The abstract says that multiaccuracy is equivalent to the regularity notion of Trevisan, Tulsiani and Vadhan, and that the stronger notion gives stronger results.

**Paper or page:** [Complexity-Theoretic Implications of Multicalibration](https://arxiv.org/abs/2312.17223). It says: “Starting from the stronger notion of multicalibration, we obtain stronger and more general versions of a number of applications of the Regularity Lemma, including the Hardcore Lemma, the Dense Model Theorem, and the equivalence of conditional pseudo-min-entropy and unpredictability.”

**Sources:**

- [Sílvia Casacuberta, Cynthia Dwork, Salil Vadhan, Complexity-Theoretic Implications of Multicalibration, arXiv:2312.17223 (2024)](https://arxiv.org/abs/2312.17223)
- [R. Impagliazzo, Hard-core distributions for somewhat hard problems, FOCS (1995)](https://doi.org/10.1109/sfcs.1995.492584)

### Vision stability makes art galleries exactly solvable

**Remember:** If a little blur changes nothing, rational guards suffice.

*Rules out counterexamples. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 68Q25. arXiv cs.CG, cs.DS. Level 4: research.

**Definition.** An enhanced guard can see around a reflex corner, a corner with an interior angle above 180°, by an angle δ. A diminished guard has its view blocked by an extra angle δ at reflex corners. A polygon P has vision stability δ when the optimal number of enhanced guards equals the optimal number of diminished guards. So small changes of vision do not change the answer.

**Problem.** For every vision stable polygon, one polynomial-size integer program over a finite set of candidate points gives an optimal guard set.

**How the definition helps.** The definition excludes polygons whose optimum depends on exact positions, so a finite set of candidate positions is enough (our own). The general problem is ∃ℝ-complete, and the excluded cases include known polygons where every optimal guard set needs irrational coordinates (our own example). The paper argues that most relevant polygons are vision stable. The integer program can still be slow, and the problem stays hard for polygons that are not stable (our own).

**Paper or page:** [A Practical Algorithm with Performance Guarantees for the Art Gallery Problem](https://arxiv.org/abs/2007.06920). It says: “We describe a one-shot vision stable algorithm that computes an optimal guard set for visionstable polygons using polynomial time and solving one integer program. It guarantees to find the optimal solution for every vision stable polygon.”

**Sources:**

- [Simon Hengeveld, Tillmann Miltzow, A Practical Algorithm with Performance Guarantees for the Art Gallery Problem, Discrete Mathematics &amp; Theoretical Computer Science 25:2 (2024)](https://arxiv.org/abs/2007.06920)
- [Mikkel Abrahamsen, Anna Adamaszek, Tillmann Miltzow, The Art Gallery Problem is ∃ℝ-complete, Journal of the ACM (2021)](https://doi.org/10.1145/3486220)
