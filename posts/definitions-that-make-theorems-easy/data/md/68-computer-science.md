### Union by size bounds depth

**Remember:** Each time depth increases, the set at least doubles.

*Rules out counterexamples.* MSC 68P05 (Data structures). arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Union by size stores each set as a rooted tree and unites two sets by hanging the root of the smaller tree below the root of the larger one, with either choice on a tie. So a vertex sinks one level only when its tree joins one at least as large.

**Problem.** Starting with n singletons, union by size keeps every depth at most ⌊log₂ n⌋. Depth counts the edges from a vertex to its root.

**How the definition helps.** Each time a vertex gains depth, its set at least doubles (our own explanation). After d such steps its set has at least 2ᵈ ≤ n elements, so d ≤ ⌊log₂ n⌋. Hanging the larger tree below a singleton at each merger can instead build a chain (our own example).

**Wikipedia:** [Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure). It says: “Both strategies ensure that trees do not become too deep.”

**Sources:** none listed. No primary source with a working link was found.

### Empty transitions make regular languages closed under concatenation

**Remember:** Jump to the second machine without using an input letter.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** A nondeterministic finite automaton with empty transitions may change state without reading a letter, and it accepts a word if some run from its start reads the whole word and ends in an accepting state.

**Problem.** The language formed by joining any word from one regular language to any word from another is regular.

**How the definition helps.** Take separate copies and start in the first, so an empty transition can hand over exactly where the first word ends (our own). Link each accepting state of the first to the second's start by an empty transition, and accept only in the second's accepting states (our own). Removing empty transitions preserves the accepted words, which gives an ordinary automaton (our own).

**Wikipedia:** [Nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton). It says: “A transition without consuming an input symbol is called an ε-transition”

**Sources:** none listed. No primary source with a working link was found.

### Finite state runs expose the loops in regular languages

**Remember:** A repeated state lets you repeat or skip the letters between its visits.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** A deterministic finite automaton with n states follows exactly one arrow per letter from its start state, so reading n letters visits n + 1 states and must repeat one (our own). It accepts a word if its last state is accepting.

**Problem.** Every word of length at least n accepted by a deterministic finite automaton with n states splits as uvw. The prefix uv has length at most n, v is nonempty, and all repetitions of v preserve acceptance.

**How the definition helps.** The letters between two visits to the same state form a loop, which the run can repeat or skip without changing the rest of its path (our own). Taking the repeat within the first n letters makes uv at most n long and v nonempty.

**Paper or page:** [Pumping Lemma for Regular Languages](https://proofwiki.org/wiki/Pumping_Lemma_for_Regular_Languages). It says: “∀ i ∈ ℕ₀: u · vⁱ · w ∈ L”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### Paired states give regular languages union and intersection

**Remember:** Run both automata together and combine their answers at the end.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** The product of two deterministic finite automata over one alphabet runs both at once: its states are pairs of states, it starts at the pair of start states, and each letter moves both parts. A pair accepts when either part accepts, for union, or when both accept, for intersection (our own).

**Problem.** The union and intersection of two regular languages over the same alphabet are regular.

**How the definition helps.** After any word, the pair holds the state each machine reaches, by induction on the number of letters (our own). So the pair’s accepting rule gives exactly the answer for the union or the intersection (our own).

**Wikipedia:** [Deterministic finite automaton](https://en.wikipedia.org/wiki/Deterministic_finite_automaton). It says: “the union/intersection of the languages recognized by two given DFAs.”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### Useful cycles characterize infinite regular languages

**Remember:** An accepting path can repeat any cycle it visits.

*Rules out counterexamples. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 1: early undergraduate.

**Definition.** In a finite automaton, a state is useful if some path from the start to an accepting state passes through it, and the useful subgraph keeps these states and the arrows between them.

**Problem.** A deterministic finite automaton over a finite alphabet accepts infinitely many words exactly when its useful subgraph contains a directed cycle.

**How the definition helps.** A cycle of useful states lies on an accepting path, so going round it again gives ever longer accepted words (our own). Without such a cycle, an accepting path visits each useful state at most once, so the accepted words have bounded length and are finitely many (our own). Keeping only useful states removes loops that never lead to acceptance (our own).

**nLab:** [deterministic automaton](https://ncatlab.org/nlab/show/deterministic+automaton). It says: “In the usual interpretation if the automaton is in state q, and is 'given' the input σ, then it changes to being in state δ(q,σ).”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### Mutual reachability removes cycles

**Remember:** A cycle of groups would be one group.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science). arXiv cs.DM, cs.DS. Level 1: early undergraduate.

**Definition.** The condensation of a directed graph merges each strongly connected component, a maximal set of vertices with paths both ways between any two, into one vertex. It keeps an edge between two different components when some original edge joins them.

**Problem.** The condensation of any directed graph has no directed cycles.

**How the definition helps.** A directed cycle of components would give paths both ways between any two vertices on it (our own). Those vertices would then lie in one component, so the cycle could not pass through different components.

**Wikipedia:** [Strongly connected component](https://en.wikipedia.org/wiki/Strongly_connected_component). It says: “If each strongly connected component is contracted to a single vertex, the resulting graph is a directed acyclic graph”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative edges settle distances

**Remember:** An extra edge cannot make a path cheaper.

*Rules out counterexamples.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Give every edge of a finite directed graph a nonnegative length, possibly zero, so that extending a path never makes it shorter.

**Problem.** With nonnegative edge lengths, Dijkstra’s algorithm can permanently accept the unfinished vertex with the smallest tentative distance from the source. That distance is the true shortest distance.

**How the definition helps.** Every prefix of a path costs at most the whole path. A shorter path to the chosen vertex would pass through an unfinished vertex with an even smaller tentative distance, contradicting the choice of minimum (our own). With lengths s→a = 2, s→b = 3 and b→a = −2, accepting a first misses the shorter path through b (our own).

**Wikipedia:** [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). It says: “Dijkstra's algorithm is commonly used on graphs where the edge weights are non-negative integers or real numbers.”

**Sources:**

- [Edsger W. Dijkstra, A Note on Two Problems in Connexion with Graphs (1959)](https://doi.org/10.1007/BF01386390)

### Quorum thresholds force read-write overlap

**Remember:** Disjoint groups cannot hold more votes than exist.

*Rules out counterexamples.* MSC 68M14 (Distributed systems), 68M12. arXiv cs.DC. Level 2: later undergraduate.

**Definition.** Each replica of a data item has a fixed positive vote weight, and a read or write quorum is a group whose total weight reaches that operation’s threshold. The read and write thresholds together must exceed the total weight, so no read quorum can be disjoint from a write quorum.

**Problem.** Every read quorum intersects every write quorum. If stored versions never decrease, a read after a completed quorum write sees its version or a newer one.

**How the definition helps.** Disjoint read and write quorums would together hold at least the sum of the thresholds, which is more weight than exists. So a read quorum contains a replica from the last write and, since stored versions never decrease, sees that version or a newer one. At equality this fails: with four one-vote replicas, writing to two and reading the other two misses the write (our own example).

**Wikipedia:** [Quorum (distributed computing)](https://en.wikipedia.org/wiki/Quorum_%28distributed_computing%29). It says: “it ensures that a read quorum contains at least one site with the newest version of the data item.”

**Sources:**

- [David K. Gifford, Weighted Voting for Replicated Data (1979)](https://doi.org/10.1145/800215.806583)

### Cartesian trees encode minima

**Remember:** The endpoints’ lowest common ancestor is the smallest entry between them.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** The Cartesian tree of an array of distinct entries is a binary tree whose in-order traversal gives the array and in which each parent is smaller than its children.

**Problem.** The minimum on an inclusive array interval is the value at the deepest node ancestral to both endpoints. A node counts as its own ancestor.

**How the definition helps.** Array order puts the lowest common ancestor of the two endpoints between them, and its subtree is a consecutive block that contains the whole interval (our own proof). Parent order makes that ancestor the smallest entry of its subtree, hence of the interval. The work moves to building the tree and finding lowest common ancestors.

**Wikipedia:** [Cartesian tree](https://en.wikipedia.org/wiki/Cartesian_tree). It says: “In a Cartesian tree, this minimum value can be found at the lowest common ancestor of the leftmost and rightmost values in the subsequence.”

**Sources:**

- [Erik D. Demaine, Gad M. Landau, and Oren Weimann, On Cartesian Trees and Range Minimum Queries (2009)](https://doi.org/10.1007/978-3-642-02927-1_29)

### Light edges halve subtrees

**Remember:** An unchosen child has a sibling at least as large.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In a rooted tree, each non-leaf node marks as heavy the edge to one child with the largest subtree, and all other child edges are light. So a light child always has a sibling whose subtree is at least as large.

**Problem.** A root-to-leaf path in an n-node tree crosses at most log₂ n light edges.

**How the definition helps.** A light child’s subtree has at most half the nodes of its parent’s subtree, since a sibling is at least as large. So each light edge on a root-to-leaf path at least halves the subtree size, and n nodes allow at most log₂ n halvings. Marking an arbitrary child could leave a long chain of light edges, each beside a single leaf (our own example).

**Wikipedia:** [Heavy-light decomposition](https://en.wikipedia.org/wiki/Heavy-light_decomposition). It says: “Therefore, on any root-to-leaf path of a tree with n nodes, there can be at most log₂ n light edges.”

**Sources:**

- [Daniel D. Sleator and Robert Endre Tarjan, A Data Structure for Dynamic Trees (1983)](https://doi.org/10.1016/0022-0000(83)90006-5)

### Path copying preserves versions

**Remember:** Copy the path, share the branches.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Path copying keeps one root per version and never changes a node. An update copies only the nodes on the path from the root to the changed node and points the copies at the old branches off the path, which the versions share.

**Problem.** Changing one value at depth h creates h + 1 new nodes and preserves every older version. Depth counts edges from the root.

**How the definition helps.** The new root reaches the changed value through the copies, while every old root still reaches exactly its original, unchanged nodes (our own proof). The path has h ancestors plus the changed node, which gives h + 1 new nodes.

**Wikipedia:** [Persistent data structure](https://en.wikipedia.org/wiki/Persistent_data_structure). It says: “Path copying is one of the simple methods to achieve persistency in a certain data structure such as binary search trees.”

**Sources:**

- [James R. Driscoll, Neil Sarnak, Daniel D. Sleator, and Robert E. Tarjan, Making Data Structures Persistent (1989)](https://doi.org/10.1016/0022-0000(89)90034-2)

### Random priorities speed treap searches

**Remember:** Priorities choose the root before either side.

*True by definition.* MSC 68P05 (Data structures). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A treap is a binary search tree on the keys that is also a heap on independent random priorities from one continuous distribution, each parent having higher priority than its children. So the highest-priority key is the root, exactly as if it had been inserted first.

**Problem.** For n distinct keys, the treap has the same distribution as a binary search tree built in uniformly random insertion order. Searching for a fixed key takes O(log(n + 1)) expected comparisons.

**How the definition helps.** The same rule applies on each side, so the treap is the search tree built by inserting keys in decreasing priority. Independent continuous priorities make every insertion order equally likely (our own argument). The search bound then comes from the standard analysis of a binary search tree built in random order.

**Wikipedia:** [Treap](https://en.wikipedia.org/wiki/Treap). It says: “inserting the nodes highest priority-first into a binary search tree without doing any rebalancing.”

**Sources:**

- [Raimund Seidel and Cecilia R. Aragon, Randomized Search Trees (1996)](https://doi.org/10.1007/s004539900061)

### Reduction makes decision diagrams unique

**Remember:** Skip tests that change nothing and share all identical branches.

*Rules out counterexamples.* MSC 68P05 (Data structures). arXiv cs.DS, cs.LO. Level 2: later undergraduate.

**Definition.** An ordered binary decision diagram tests Boolean variables in one fixed order along every path, possibly skipping some. It is reduced when it keeps only reachable nodes and one terminal per output value used. Also, no test has two identical children, and no two nodes test the same variable with the same low and high children.

**Problem.** A Boolean function has a unique reduced decision diagram up to renaming nodes for each fixed variable order. Ordinary decision diagrams need not be unique.

**How the definition helps.** The root must test the earliest variable the function depends on, because a test with identical children is banned (our own proof). Its two branches compute functions of later variables, so induction fixes them, and the no-duplicates rule fixes how they share nodes. Without reduction, the constant true can be a terminal or a test whose both outcomes lead to true.

**Wikipedia:** [Binary decision diagram](https://en.wikipedia.org/wiki/Binary_decision_diagram). It says: “it is canonical (unique up to isomorphism) for a particular function and variable order.”

**Sources:**

- [Randal E. Bryant (1986), Graph-Based Algorithms for Boolean Function Manipulation](https://doi.org/10.1109/TC.1986.1676819)

### Binary tests certify sorting networks

**Remember:** Threshold an output inversion to get a binary inversion.

*Rules out counterexamples.* MSC 68P10 (Searching and sorting), 68W10. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A comparator network is a fixed sequence of comparators, each sending the smaller of two wires’ values to one wire and the larger to the other. Because it uses only minimum and maximum, applying a 0-1 threshold before or after the network gives the same result (our own).

**Problem.** A fixed comparator network sorts every input from a total order if it sorts every binary input.

**How the definition helps.** If some input is not sorted, the output has a larger value before a smaller one (our own proof). Thresholding at the smaller value, sending larger values to one and the rest to zero, gives a binary input whose output has a one before a zero.

**Wikipedia:** [Sorting network](https://en.wikipedia.org/wiki/Sorting_network). It says: “if a sorting network can correctly sort all 2ⁿ sequences of zeros and ones, then it is also valid for arbitrary ordered inputs.”

**Sources:**

- [Kenneth E. Batcher, Sorting Networks and Their Applications (1968)](https://doi.org/10.1145/1468075.1468121)

### Canonical databases test query containment

**Remember:** Try the second query on the first query’s own facts.

*True by definition.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** The canonical database of a Boolean conjunctive query Q, a query asking whether some values make all its listed facts true, stores Q’s facts with each distinct variable replaced by its own fresh value.

**Problem.** For Boolean conjunctive queries without constants or built-in comparisons, Q implies P on every database exactly when P holds on Q’s canonical database.

**How the definition helps.** Q holds on a database exactly when its canonical database has a fact-preserving map into it (our own explanation). If P holds on Q’s canonical database, compose P’s witness with this map to get a witness for P. Conversely, Q holds on its own canonical database, so containment forces P to hold there.

**Wikipedia:** [Conjunctive query](https://en.wikipedia.org/wiki/Conjunctive_query). It says: “the query containment problem for conjunctive queries is exactly the same problem as the query evaluation problem.”

**Sources:**

- [Ashok K. Chandra and Philip M. Merlin (1977), Optimal implementation of conjunctive queries in relational data bases](https://doi.org/10.1145/800105.803397)

### Join trees make local matching sufficient

**Remember:** A shared column cannot leave the path and reappear later.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** A join tree places one table at each vertex so that, for every column, the tables containing it form a connected subtree. Two rows match across an edge when they agree on every shared column.

**Problem.** On a join tree, if each row matches across every incident edge, every row extends to a full join result, a combined row that restricts to a row of every table.

**How the definition helps.** Connectedness puts a column shared by two tables on every table along the path between them, so agreement across edges gives agreement everywhere (our own proof). Start from the row and choose matching rows outward along the tree. On a cycle, the bit constraints X≠Y, Y≠Z and Z≠X match pairwise but have no common solution (our own example).

**Wikipedia:** [Yannakakis algorithm](https://en.wikipedia.org/wiki/Yannakakis_algorithm). It says: “After both sweeps, every remaining tuple participates in at least one full join result.”

**Sources:**

- [Philip A. Bernstein and Nathan Goodman (1981), Power of Natural Semijoins](https://doi.org/10.1137/0210059)

### Positive rule closure preserves answers

**Remember:** Adding facts can only make more positive premises true.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB, cs.AI. Level 2: later undergraduate.

**Definition.** A positive Datalog program has rules whose premises only require facts to be present, never absent. Its answers come from the smallest set of facts that contains the input and is closed under the rules, reached by repeatedly adding every conclusion whose premises hold.

**Problem.** Adding input rows cannot remove any answer produced by a positive Datalog query.

**How the definition helps.** More input facts keep every rule application available, so each stage of the closure can only grow (our own proof). Induction carries the inclusion through all stages and their union. A rule with negation could report employees missing from an absence table, and adding an absence would remove a report (our own example).

**Wikipedia:** [Datalog](https://en.wikipedia.org/wiki/Datalog). It says: “adds all of the new ground atoms that can be derived from the rules of the program in a single step.”

**Sources:** none listed. No primary source with a working link was found.

### Row swaps make joins lossless

**Remember:** If rows can swap their values, joining the projections adds nothing.

*Rules out counterexamples.* MSC 68P15 (Database theory). arXiv cs.DB. Level 2: later undergraduate.

**Definition.** Split a table’s columns into X, Y and Z, treating rows as a set. The multivalued dependency X ↠ Y says that rows agreeing on X can swap their Z values: whenever (x,y,z) and (x,y′,z′) are rows, so is (x,y,z′).

**Problem.** Joining the projections onto XY and XZ recovers the original table exactly when this multivalued dependency holds.

**How the definition helps.** Each row (x,y,z′) of the join comes from rows (x,y,·) and (x,·,z′) of the table, which is exactly a swap the dependency allows (our own proof). The table’s own rows are always in the join, so the join adds nothing exactly when every swap stays in the table. The table with rows (a,b,c) and (a,d,e) lacks the join row (a,b,e) (our own counterexample).

**Wikipedia:** [Multivalued dependency](https://en.wikipedia.org/wiki/Multivalued_dependency). It says: “A multivalued dependency is a special case of a join dependency, with only two sets of values involved”

**Sources:**

- [Ronald Fagin (1977), Multivalued dependencies and a new normal form for relational databases](https://doi.org/10.1145/320557.320571)

### Determinism defeats chosen-message secrecy

**Remember:** If anyone can recompute the ciphertext, anyone can check a guess.

*True by definition.* MSC 68P25 (Data encryption (aspects in computer science)), 94A60. arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Deterministic public-key encryption gives each public key and message one fixed ciphertext, which anyone with the public key can recompute. Chosen-message secrecy requires that no efficient observer, shown the encryption of one of two equal-length messages it chose, can guess which one with more than negligible advantage.

**Problem.** No deterministic public-key cipher with correct decryption can hide which of two distinct equal-length messages it encrypted.

**How the definition helps.** The observer encrypts both of its messages with the public key and compares the challenge with the results (our own argument). Correct decryption forces the two ciphertexts to differ, so the comparison identifies the message with certainty.

**Wikipedia:** [Deterministic encryption](https://en.wikipedia.org/wiki/Deterministic_encryption). It says: “While deterministic encryption schemes can never be semantically secure, they have some advantages over probabilistic schemes.”

**Sources:**

- [Shafi Goldwasser and Silvio Micali, Probabilistic Encryption (1984)](https://doi.org/10.1016/0022-0000(84)90070-9)

### A read-only input tape makes logarithmic space a meaningful class

**Remember:** Do not charge a machine for merely reading its input.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A language is in L if a deterministic Turing machine decides it using O(log(n+2)) work-tape cells on inputs of length n, while it reads the input from a separate read-only tape that is not counted.

**Problem.** With a read-only input tape, space classes below linear space, such as L and NL, are meaningful, and L ⊆ P. If the input sat on the work tape, every machine would use at least linear space.

**How the definition helps.** Counting only the writable tape allows bounds below n, which the input alone would otherwise exceed. A log-space decider has polynomially many configurations, counting its state, head positions and work-tape contents, and a halting run never repeats one, so it runs in polynomial time (our own argument).

**Wikipedia:** [L (complexity)](https://en.wikipedia.org/wiki/L_%28complexity%29). It says: “Formally, the Turing machine has two tapes, one of which encodes the input and can only be read, whereas the other tape has logarithmic size but can be written as well as read.”

**Sources:** none listed. No primary source with a working link was found.

### Short certificates prove closure of NP under Kleene star

**Remember:** Split the word and certify each piece.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)). arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A language is in NP if membership has short, quickly checked proofs: for some polynomial p and polynomial-time verifier, w is in the language exactly when the verifier accepts w with some certificate of length at most p(\|w\|).

**Problem.** If L is in NP, then L\* is in NP. Here L\* contains all finite concatenations of words from L, including the empty concatenation.

**How the definition helps.** A certificate for w in L\* lists a split of w into nonempty pieces and a certificate for each piece (our own). There are at most \|w\| pieces, so the total length and checking time are polynomial in \|w\|. The verifier accepts the empty word directly.

**Wikipedia:** [NP (complexity)](https://en.wikipedia.org/wiki/NP_%28complexity%29). It says: “NP is closed under union, intersection, concatenation, Kleene star and reversal.”

**Sources:** none listed. No primary source with a working link was found.

### One NP-complete problem decides whether P equals NP

**Remember:** An NP-complete problem is as hard as all of NP at once.

*True by definition.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** A problem C is NP-complete if it is in NP and every problem in NP reduces to it, by a polynomial-time map that sends each instance to an instance of C with the same answer.

**Problem.** If one NP-complete problem has a polynomial-time algorithm, then every problem in NP has one. So P = NP exactly when a single NP-complete problem is in P.

**How the definition helps.** Composing a problem’s reduction with a polynomial-time algorithm for C decides it in polynomial time, so NP ⊆ P and hence P = NP (our own argument). Conversely, if P = NP, every NP-complete problem is in P, and one exists, Boolean satisfiability, by the Cook–Levin theorem.

**Wikipedia:** [NP-completeness](https://en.wikipedia.org/wiki/NP-completeness). It says: “Hence, if we could find valid solutions of some NP-complete problem quickly (when they exist), we could quickly find valid solutions for every other problem in which a given solution can be easily verified.”

**Sources:**

- [Cook, S. A. (1971). The complexity of theorem-proving procedures. Proc. 3rd ACM Symposium on Theory of Computing, 151–158.](https://doi.org/10.1145/800157.805047)

### Binary grammar rules fix the length of every nonempty derivation

**Remember:** One rule per letter and one fewer split.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form, every rule either splits one variable into two variables or turns one variable into one letter. Only the start variable may produce the empty word, and then it appears on no right side.

**Problem.** In Chomsky normal form, every derivation of a word of length n greater than zero takes exactly 2n − 1 rule applications.

**How the definition helps.** Each letter rule removes one variable and each split adds one (our own proof). A word of length n needs n letter rules, and going from one variable to none then needs n − 1 splits, so 2n − 1 rules in all.

**Wikipedia:** [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “Every grammar in Chomsky normal form is context-free, and conversely, every context-free grammar can be transformed into an equivalent one”

**Sources:**

- [Noam Chomsky. On Certain Formal Properties of Grammars. 1959.](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Chomsky normal form forces repeated symbols along long derivation paths

**Remember:** Many leaves in a binary tree force a long path.

*True by definition. Confidence: medium.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form each rule replaces a placeholder by two placeholders or by one letter, apart from an optional empty rule for a start symbol that occurs on no right-hand side. So the derivation tree of a nonempty word is binary, with one letter at each leaf.

**Problem.** If the grammar has m placeholders, take a word of length greater than 2ᵐ⁻¹. Some placeholder must occur twice along one path in its derivation tree.

**How the definition helps.** A path with no repeated placeholder has at most m placeholders, hence at most m − 1 branching steps (our own). A binary tree with that bound has at most 2ᵐ⁻¹ leaves, one per letter, so a longer word forces a repeat.

**Wikipedia:** [Pumping lemma for context-free languages](https://en.wikipedia.org/wiki/Pumping_lemma_for_context-free_languages), [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “If s is sufficiently long, its derivation tree w.r.t. a Chomsky normal form grammar must contain some nonterminal N twice on some tree path”

**Sources:**

- [N. Chomsky, On certain formal properties of grammars, Information and Control 2 (1959)](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Context-free grammars show context-free languages admit union, concatenation and star

**Remember:** A fresh start symbol joins grammars without mixing their rules.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A context-free grammar rewrites one variable at a time by a string of letters and variables, using finitely many rules and starting from one start variable. Its language is the set of letter strings it can reach, and since each rule depends only on its variable, grammars with disjoint variables can share a new start without interfering (our own).

**Problem.** Context-free languages are closed under union, concatenation and Kleene star. The star operation takes all finite concatenations, including the empty word.

**How the definition helps.** Rename variables so the grammars share none, and add a fresh start variable S (our own constructions). For union use S → S₁ and S → S₂, for concatenation S → S₁S₂, and for star S → S₁S and S → ε, where ε is the empty word.

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “the union of two context-free languages is always context-free.”

**Sources:** none listed. No primary source with a working link was found.

### Leftmost expansion keeps grammar ambiguity from counting rule orders

**Remember:** Fix the expansion order so one parse tree counts once.

*Rules out counterexamples.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A leftmost derivation always applies its next rule to the leftmost remaining variable, so the only choice at each step is which rule to use. A parse tree records which rule expands each variable and the order of its children.

**Problem.** For a given word, the parse trees of a context-free grammar correspond one-to-one with its leftmost derivations.

**How the definition helps.** A parse tree fixes the rule at each node and the leftmost order fixes when it is applied, so each tree gives exactly one leftmost derivation (our own). Conversely, each leftmost step attaches its rule’s children to one determined node, which rebuilds a unique tree (our own). Without the order, after S → AB, expanding A or B first gives two derivations of one tree (our own).

**Wikipedia:** [Ambiguous grammar](https://en.wikipedia.org/wiki/Ambiguous_grammar). It says: “only multiple leftmost derivations (or, equivalently, multiple parse trees) indicate ambiguity.”

**Sources:** none listed. No primary source with a working link was found.

### Productive variables make grammar emptiness decidable

**Remember:** Mark a variable once it has a rule that can finish.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A variable is productive if it can derive a string of letters only, possibly empty. The productive variables are found by marking: mark a variable once one of its rules has a right side made only of letters and marked variables.

**Problem.** A context-free grammar generates a nonempty language exactly when marking reaches its start variable. This gives a decision procedure for grammar emptiness.

**How the definition helps.** Marking finds productivity without searching derivations of unbounded length, and it stops after at most one round per variable (our own). Each mark gives a word built from earlier marks, and every derivation tree gives marks from its leaves upward, so the marks are exactly the productive variables (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “Emptiness: Given a context-free grammar A, is L(A) = ∅ ?”

**Sources:** none listed. No primary source with a working link was found.

### Reversing grammar rules reverses context-free languages

**Remember:** Read each rule backwards to read the generated words backwards.

*True by definition. Confidence: medium.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The reversed grammar of a context-free grammar keeps its variables and start variable and writes the right side of every rule backwards.

**Problem.** The reversals of the words of any context-free language form a context-free language.

**How the definition helps.** Each step with a reversed rule reverses the matching step of the original derivation, so the reversed grammar derives exactly the reversed words (our own). Reversing twice gives back the original grammar, which gives the converse inclusion (our own).

**nLab:** [context-free grammar](https://ncatlab.org/nlab/show/context-free+grammar). It says: “R ⊆ X × (X + V)⋆ is a finite set of production rules”

**Sources:** none listed. No primary source with a working link was found.

### A finite length bound makes regular language equivalence decidable

**Remember:** A shortest disagreement never visits the same pair twice.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The product of two deterministic finite automata over one alphabet tracks a pair of current states, one per machine, so it has mn pairs. A word lies in the symmetric difference, accepted by exactly one machine, when it ends at a pair with exactly one accepting state.

**Problem.** Two deterministic automata with m and n states over one alphabet agree everywhere if they agree on all words shorter than mn.

**How the definition helps.** A shortest disagreement visits no pair twice, since cutting the loop between two visits would leave a shorter word ending at the same pair (our own). With only mn pairs, it has fewer than mn letters (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Alternatively, a regular language can be defined as a language recognised by a finite automaton.”

**Sources:**

- [M. O. Rabin and D. Scott, Finite Automata and Their Decision Problems (1959).](https://doi.org/10.1147/rd.32.0114)

### A zero threshold turns probabilities into reachability

**Remember:** At zero, one positive path is enough.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A finite probabilistic automaton picks its start state from a distribution and its next state for each letter from a stochastic matrix, and a path’s probability is the product of these probabilities. At threshold zero it accepts a word when its accepting paths have positive total probability, which happens exactly when one accepting path has positive probability.

**Problem.** Every language accepted at threshold zero by a finite probabilistic automaton is regular.

**How the definition helps.** Only which probabilities are positive matters (our own proof). Keeping the start states and transitions with positive probability gives a nondeterministic finite automaton for the same language, and its equivalence with deterministic automata gives regularity.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Each 0-stochastic language is regular.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

### Binary grammar rules make context-free membership a finite search

**Remember:** To match two variables, split the input into two shorter words.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** In Chomsky normal form a variable produces either two variables or one letter, so it derives a word of length at least 2 only by splitting it into two shorter nonempty pieces (our own). The start variable may also produce the empty word, and then it never appears on a right side.

**Problem.** Membership in a context-free language is decidable. For a grammar in Chomsky normal form, a table of substrings suffices.

**How the definition helps.** Record which variables produce each substring, starting with single letters and then trying every split of each longer substring (our own). For empty input, check the start variable’s empty rule (our own). The general theorem uses the conversion of any context-free grammar to this form (our own).

**Wikipedia:** [CYK algorithm](https://en.wikipedia.org/wiki/CYK_algorithm). It says: “The standard version of CYK operates only on context-free grammars given in Chomsky normal form (CNF).”

**Sources:**

- [D. H. Younger, Recognition and Parsing of Context-Free Languages in Time n³ (1967).](https://doi.org/10.1016/S0019-9958(67)80007-X)

### Complete deterministic automata recognize complements by swapping accepting states

**Remember:** Each word has one run, so swap accepting and rejecting states.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A complete deterministic finite automaton has exactly one next state for each state and letter, so each word has exactly one run from the start state. It accepts the word when that run ends in an accepting state.

**Problem.** The complement of a language accepted by a complete deterministic automaton has such an automaton with the same number of states.

**How the definition helps.** With one run per word, the final state decides both acceptance and rejection, so swapping accepting and rejecting states reverses every verdict. A nondeterministic machine first needs determinization by sets of states, which can increase the number of states exponentially (our own).

**Wikipedia:** [Complementation of automata](https://en.wikipedia.org/wiki/Complementation_of_automata), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “A complete deterministic finite automation can be complemented by switching its accepting and non-accepting states while leaving its transitions and initial state unchanged.”

**Sources:**

- [M. O. Rabin, D. Scott, Finite automata and their decision problems, IBM Journal of Research and Development 3 (1959)](https://doi.org/10.1147/rd.32.0114)

### Deterministic automata keep right quotients regular even by arbitrary languages

**Remember:** Keep the transitions and choose new accepting states.

*True by definition. Confidence: medium.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The right quotient L / K contains the prefixes u that some word v of K completes to a word uv of L.

**Problem.** If L is regular and K is any language over the same alphabet, then L / K is regular.

**How the definition helps.** Whether a suitable suffix v exists depends only on the state that a deterministic automaton for L reaches after reading u (our own). So keep the transitions and make accepting exactly the states from which some word of K leads to an original accepting state.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Even more, regular languages are closed under quotients with arbitrary languages: If L is regular then L / K is regular for any K.”

**Sources:** none listed. No primary source with a working link was found.

### Deterministic paths make regular word counts rational

**Remember:** One path per word makes matrix powers count words.

*True by definition.* MSC 68Q45 (Formal languages and automata), 05A15. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The transition count matrix M of a deterministic finite automaton has entry Mᵢⱼ equal to the number of letters sending state i to state j. Since each word has exactly one path (our own), (Mⁿ)ᵢⱼ counts the words of length n that lead from i to j.

**Problem.** For every regular language, the generating function ∑ₙ≥₀ cₙzⁿ, where cₙ counts accepted words of length n, is rational.

**How the definition helps.** Summing zⁿMⁿ over n ≥ 0 gives (I − zM)⁻¹, whose entries are rational functions. The generating function sums the start-row entries of this matrix over the accepting columns.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “The generating function of a language L is a rational function if L is regular.”

**Sources:** none listed. No primary source with a working link was found.

### Deterministic stack machines make complementation possible

**Remember:** One finished run gives one answer to flip.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A deterministic pushdown automaton reads letters while using a stack, a store where only the top symbol is accessible, and has at most one possible move in each situation. The languages such machines accept are the deterministic context-free languages.

**Problem.** The complement of every deterministic context-free language is deterministic context-free.

**How the definition helps.** Determinism gives each input one run, hence one verdict to flip (our own). A normal-form theorem gives an equivalent machine that reads the whole input and always decides, so swapping its verdicts recognizes the complement. Without determinism this fails (our own): the words over a, b and c not of the form aⁿbⁿcⁿ form a context-free language whose complement is not context-free.

**Wikipedia:** [Deterministic context-free language](https://en.wikipedia.org/wiki/Deterministic_context-free_language). It says: “The set of deterministic context-free languages is closed under the following operations: complement”

**Sources:** none listed. No primary source with a working link was found.

### Epsilon closure removes empty moves without adding states

**Remember:** Fold empty moves into the next letter or the final acceptance check.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The epsilon closure of a state is the set of states it reaches by empty moves alone, including the state itself.

**Problem.** A nondeterministic finite automaton with empty transitions has an equivalent one with the same states and no empty transitions.

**How the definition helps.** From each state, allow every letter move that starts anywhere in its closure, and make the state accepting if its closure contains an accepting state (our own). This folds each run’s empty moves into its next letter or its final check, so no new states are needed (our own). Splitting runs at letter moves proves that both machines accept the same words (our own).

**Wikipedia:** [Nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton). It says: “E(q) is known as the epsilon closure”

**Sources:** none listed. No primary source with a working link was found.

### Keeping grammar variables on one side preserves regularity

**Remember:** One variable at the right end is the automaton’s current state.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A strictly right-linear grammar has only rules A → aB, A → a and A → ε. Until the last step of a derivation, the only variable sits at the right end, like the current state of a finite automaton (our own). A strictly left-linear grammar uses A → Ba in place of A → aB.

**Problem.** Strictly right-linear grammars generate exactly the regular languages. The same holds if all rules are strictly left-linear, but not if both forms may be mixed.

**How the definition helps.** The single variable at the right end acts as the current state of a finite automaton, and reading transitions back as rules gives the converse (our own). A letter-only rule leads to a final state, an empty rule marks the state accepting, and reversing words gives the left-linear case (our own). Mixing S → aT, T → Sb and S → ε generates the words aⁿbⁿ, which form a nonregular language (our own).

**Wikipedia:** [Regular grammar](https://en.wikipedia.org/wiki/Regular_grammar). It says: “Hence, the right-regular grammars generate exactly all regular languages.”

**Sources:** none listed. No primary source with a working link was found.

### Leftmost derivations turn grammars into stack machines

**Remember:** The stack holds the unmatched rest of the leftmost derivation.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A leftmost derivation always expands the first remaining variable. So the unmatched rest of the sentential form is only used at its left end, like a stack seen from the top (our own).

**Problem.** Every context-free grammar has a nondeterministic pushdown automaton that accepts exactly the words the grammar generates.

**How the definition helps.** A pushdown automaton, a finite-state machine with a stack, can keep the unmatched rest of a leftmost derivation on its stack and guess each rule (our own). It starts with the start variable, replaces a top variable by a rule’s right side with the leftmost symbol on top, and removes a top letter that matches the next input letter (our own). It accepts when input and stack are both empty, and every generated word has a leftmost derivation (our own).

**Wikipedia:** [Pushdown automaton](https://en.wikipedia.org/wiki/Pushdown_automaton). It says: “The derivation process of the grammar is simulated in a leftmost way.”

**Sources:**

- [N. Chomsky, Context-Free Grammars and Pushdown Storage (1962).](https://dspace.mit.edu/bitstream/handle/1721.1/53697/RLE_QPR_065_XVII.pdf)

### Matched stack operations become context-free grammar rules

**Remember:** One variable accounts for everything above one fixed stack level.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** For a pushdown automaton, a finite-state machine with a stack, the variable \[p,A,q\] generates exactly the inputs read by runs that go from state p to state q and remove one stack symbol A without touching the stack below it.

**Problem.** Every language accepted by a nondeterministic pushdown automaton has a context-free grammar.

**How the definition helps.** Such a run splits at the moments when the symbols that replaced A are removed one by one, so its rules write \[p,A,q\] as any letter read followed by one variable per pushed symbol (our own). Adjacent variables share the state where one removal ends and the next begins (our own). A machine that accepts by final state is first converted to acceptance by empty stack (our own).

**Wikipedia:** [Pushdown automaton](https://en.wikipedia.org/wiki/Pushdown_automaton). It says: “one may construct a context-free grammar G such that N(M)=L(G).”

**Sources:**

- [N. Chomsky, Context-Free Grammars and Pushdown Storage (1962).](https://dspace.mit.edu/bitstream/handle/1721.1/53697/RLE_QPR_065_XVII.pdf)

### Nondeterministic automata recognize reversed regular languages by reversing transitions

**Remember:** Reverse every arrow and swap the start and accepting states.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic finite automaton accepts a word when some path of letter-labelled arrows from a start state to an accepting state reads it. It may have several start states and several arrows with the same letter from one state, so reversing all its arrows gives another such automaton.

**Problem.** If L is regular, the language of its words written backwards is also regular.

**How the definition helps.** Reversing every arrow and swapping the start and accepting states turns each accepting path into one that reads its word backwards (our own). The result is still a nondeterministic automaton, because the definition allows several start states and several arrows per letter. Determinization, which shows that both kinds of automaton recognize the same languages, carries the remaining work (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Given a nondeterministic finite automaton to recognize L, an automaton for Lᴿ can be obtained by reversing all transitions and interchanging starting and finishing states.”

**Sources:** none listed. No primary source with a working link was found.

### Path languages turn finite automata into regular expressions

**Remember:** Allow one more middle state; its return trips become a star.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Number the states 1 to n. For states p and q and 0 ≤ k ≤ n, R(p,q,k) is the set of words read along paths from p to q whose intermediate visits all go to states among 1 to k, even when a path passes through p or q on the way.

**Problem.** Every language recognized by a finite automaton can be written as a regular expression.

**How the definition helps.** Allowing state k splits each path through it into an approach, any number of loops back to k, and a departure, so R(p,q,k) = R(p,q,k−1) ∪ R(p,k,k−1)R(k,k,k−1)\*R(k,q,k−1) (our own). With no intermediate states, paths have at most one edge, so each R(p,q,0) is a finite set of letters, plus the empty word when p = q (our own). After allowing every state, take the union of R(s,f,n) over the start state s and all accepting states f (our own).

**Wikipedia:** [Kleene's algorithm](https://en.wikipedia.org/wiki/Kleene%27s_algorithm). It says: “going through a state" means entering and leaving it”

**Sources:**

- [S. C. Kleene, Representation of Events in Nerve Nets and Finite Automata (1956).](https://www2.fiit.stuba.sk/~kvasnicka/CognitiveScience/2.prednaska/kleene56representation%5B1%5D.pdf)

### Pushdown automata keep intersections with regular languages context-free

**Remember:** Put the finite automaton in the control and keep the stack.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A nondeterministic pushdown automaton has finitely many control states and one stack. A move reads one letter or none and depends on the state and top symbol; acceptance means some run reads the word and ends accepting. Only the stack is unbounded, so the finite control can also carry the state of a finite automaton (our own).

**Problem.** The intersection of a context-free language and a regular language is context-free.

**How the definition helps.** Pair each pushdown state with a state of a deterministic finite automaton for the regular language, and accept when both accept (our own). The finite automaton moves on each letter read and stays still on moves that read no letter (our own). The remaining work is the theorem that pushdown automata and context-free grammars define the same languages (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “However, if L is a context-free language and D is a regular language then both their intersection L∩D and their difference L∖D are context-free languages.”

**Sources:** none listed. No primary source with a working link was found.

### Regular expressions make letter substitution preserve regularity

**Remember:** Swap each letter for a word; keep every operation.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A string homomorphism h replaces each letter with a fixed word, possibly empty, so it respects joining words: h(uv) = h(u)h(v). Apply it to a regular expression by replacing each letter with an expression for its word, and keep union, concatenation and star in place.

**Problem.** The image of a regular language under any string homomorphism is regular.

**How the definition helps.** Replacing letters commutes with union, concatenation and star, so induction on the expression shows that the new expression describes the image (our own). Kleene’s theorem links this proof to finite automata (our own).

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “the trio operations: string homomorphism, inverse string homomorphism, and intersection with regular languages.”

**Sources:** none listed. No primary source with a working link was found.

### Regular expressions make regular languages closed under Kleene star

**Remember:** Star is one of the rules for building expressions.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A language is regular when a regular expression denotes it, and expressions are built from the empty language and single letters by exactly three rules: union, concatenation and Kleene star. Star takes all finite concatenations of words from its operand, including the empty one.

**Problem.** Regular languages are closed under union, concatenation and Kleene star.

**How the definition helps.** The three closure rules are the three building rules, so the theorem holds by definition. For a finite automaton, star needs a construction that restarts the machine after an accepting run (our own). Kleene’s theorem shows that both definitions give the same languages.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “If A is a regular language, A\* (Kleene star) is a regular language. Due to this, the empty string language {ε} is also regular.”

**Sources:** none listed. No primary source with a working link was found.

### Sets of reachable states make nondeterministic automata deterministic

**Remember:** Track all possible states as one definite set.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The subset machine of a nondeterministic finite automaton has as states the sets of original states. From a set, each letter leads to the union of the destinations of all its members. It starts at the set of initial states and accepts a set that contains an accepting state.

**Problem.** Every nondeterministic finite automaton without empty-input moves has an equivalent deterministic finite automaton.

**How the definition helps.** The union gives exactly one next set for each letter, so the subset machine is deterministic, and it is finite because there are finitely many subsets (our own proof). By induction on the input, the set reached after each prefix is exactly the set of states the original machine can reach. So the two machines accept the same words.

**Wikipedia:** [Powerset construction](https://en.wikipedia.org/wiki/Powerset_construction). It says: “In contrast, to simulate an NFA, one needs to keep track of a set of states: all of the states that the automaton could reach after seeing the same prefix of the input”

**Sources:** none listed. No primary source with a working link was found.

### The Nerode relation makes regularity a finite-index condition

**Remember:** Two prefixes are equal when no ending tells them apart.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Two strings x and y are Nerode equivalent for a language L when no ending tells them apart: for every string z, xz is in L exactly when yz is in L. Any deterministic automaton for L must therefore send inequivalent strings to different states (our own).

**Problem.** A language L is regular exactly when the Nerode relation has finitely many classes. The number of classes is then the number of states of the minimal deterministic automaton, which is unique up to isomorphism.

**How the definition helps.** Equivalence survives adding a letter, so the classes form an automaton: reading a sends \[x\] to \[xa\], and the classes inside L accept (our own argument). Any deterministic automaton for L maps each reachable state onto the class of the strings that reach it, so it has at least as many states as there are classes. For a minimal automaton this onto map is one-to-one and preserves transitions and acceptance, which gives uniqueness.

**Wikipedia:** [Myhill–Nerode theorem](https://en.wikipedia.org/wiki/Myhill%E2%80%93Nerode_theorem). It says: “The Myhill–Nerode theorem shows that finiteness is necessary and sufficient for language regularity.”

**Sources:**

- [A. Nerode, Linear automaton transformations, Proceedings of the American Mathematical Society 9 (1958) 541–544](https://doi.org/10.1090/S0002-9939-1958-0135681-9)

### The semantic Brzozowski derivative makes derivatives along words compose

**Remember:** Removing u and then v removes uv.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** For a language L and a word u, the derivative of L after u is the set of words w that complete u to a word of L, that is, with uw in L.

**Problem.** The derivative of L after uv equals the derivative after v of the derivative after u.

**How the definition helps.** Applying the definition twice, both sides contain w exactly when uvw lies in L. The real work lies in the syntax rules for derivatives of expressions, which must be proved to compute this semantic derivative.

**Wikipedia:** [Brzozowski derivative](https://en.wikipedia.org/wiki/Brzozowski_derivative). It says: “The derivative with respect to an arbitrary string reduces to successive derivatives over the symbols of that string”

**Sources:**

- [Janusz A. Brzozowski, Derivatives of Regular Expressions](https://doi.org/10.1145/321239.321249)

### Useful binary grammar rules make language finiteness decidable

**Remember:** A useful cycle in a binary grammar keeps adding letters.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** Put the grammar in binary form: each rule gives two variables or one letter, only the start variable may give the empty word, and it never appears on a right side. Keep only useful variables, those that occur in some derivation of a finished word from the start, and draw an arrow from each variable to each variable on the right side of its rules.

**Problem.** A context-free grammar in this form generates infinitely many words exactly when its graph contains a directed cycle.

**How the definition helps.** Each trip around a cycle of useful variables adds a side branch that produces a nonempty word, so the cycle gives longer and longer words (our own). Without a cycle, successful derivation trees have bounded depth, so only finitely many words occur (our own). Without the restrictions, S → S and S → a give a cycle but only one word (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “It is decidable whether such a language is finite”

**Sources:** none listed. No primary source with a working link was found.

### The least submonoid definition gives induction for word repetition

**Remember:** A set closed under joining already contains every repetition.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** The star of a language L is the smallest set containing L and the empty word that is closed under joining words end to end. Equivalently, it consists of all finite concatenations of words from L.

**Problem.** If a property holds for the empty word and every word in L and survives concatenation, it holds throughout the star of L.

**How the definition helps.** The words with the property form a set that contains L and the empty word and is closed under joining, so the smallest such set, the star of L, lies inside it (our own). The remaining work is proving that finite concatenations form exactly that smallest set (our own).

**nLab:** [regular language](https://ncatlab.org/nlab/show/regular+language). It says: “is the smallest submonoid of V∗ that contains L(R).”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint blocks reverse independently

**Remember:** Blocks never overlap, so undo each block on its own.

*True by definition.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 2: later undergraduate.

**Definition.** A block cellular automaton cuts the grid at each step into disjoint finite blocks of one shape and updates every block by the same map on its states, independently of all other blocks. Every assignment of states from a finite alphabet to the cells is an allowed configuration.

**Problem.** Each step is invertible exactly when the block rule is a permutation. The inverse of a schedule of steps uses the inverse rules in reverse order.

**How the definition helps.** Each cell lies in exactly one block at each step, so a step can be undone block by block exactly when the block map is a permutation. If two block states had the same image, changing just that block would give two configurations with the same successor (our own). Undoing a schedule of steps applies the inverse maps in reverse order (our own).

**Wikipedia:** [Block cellular automaton](https://en.wikipedia.org/wiki/Block_cellular_automaton). It says: “As long as the rule for evolving each block is reversible, the entire automaton will also be.”

**Sources:**

- [Norman Margolus (1984), Physics-like models of computation](https://doi.org/10.1016/0167-2789(84)90252-5)

### Shift polynomials generate Rule 90 patterns

**Remember:** One step multiplies by x plus x inverse.

*True by definition.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 2: later undergraduate.

**Definition.** Rule 90 replaces each bit on the integer line by the sum modulo two of its two neighbors. Encode a configuration with finitely many live cells as the polynomial ∑ᵢ bᵢxⁱ over the two-element field, with negative powers allowed; one step is then multiplication by x + x⁻¹.

**Problem.** Start with only the origin live. At time t, every second cell from −t to t gives the parity of the corresponding entry in row t of Pascal’s triangle.

**How the definition helps.** So t steps from the origin give (x + x⁻¹)ᵗ, whose coefficients the binomial theorem gives as row t of Pascal’s triangle modulo two (our own proof). Multiplying by x or by x⁻¹ shifts every bit one place, so adding the two shifts is exactly the cell update. The exponents of (x + x⁻¹)ᵗ run from −t to t in steps of two, so the cells between them are zero.

**Wikipedia:** [Rule 90](https://en.wikipedia.org/wiki/Rule_90). It says: “The diagram has a 1 wherever Pascal's triangle has an odd number, and a 0 wherever Pascal's triangle has an even number.”

**Sources:**

- [Olivier Martin, Andrew M. Odlyzko, and Stephen Wolfram (1984), Algebraic properties of cellular automata](https://doi.org/10.1007/BF01223745)

### Real time excludes stale reads

**Remember:** A finished write comes before a later read.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** A history of completed register operations is linearizable when the operations fit in one sequential order that keeps real time and gives every observed result. Keeping real time means that an operation finishing before another starts comes first; each read returns the latest earlier write, or the initial value.

**Problem.** In a linearizable register, a read that starts after a write completes cannot return the older value if there is no other write.

**How the definition helps.** Real time forces the read after the write in the sequential order, so the read returns the new value (our own). For example, if one process finishes writing 1 and another then reads the initial 0, no valid order exists (our own). Sequential consistency, which drops the real-time rule, allows that result by placing the read first.

**Wikipedia:** [Linearizability](https://en.wikipedia.org/wiki/Linearizability), [Sequential consistency](https://en.wikipedia.org/wiki/Sequential_consistency). It says: “If an operation op₁ completes (gets a response) before op₂ begins (invokes), then op₁ precedes op₂ in σ.”

**Sources:**

- [Maurice P. Herlihy and Jeannette M. Wing, Linearizability: A Correctness Condition for Concurrent Objects (1990)](https://doi.org/10.1145/78969.78972)

### Boundary relations stack strips

**Remember:** Match the shared boundary to stack two strips.

*True by definition.* MSC 68R05 (Combinatorics in computer science), 05B45. arXiv cs.DM. Level 2: later undergraduate.

**Definition.** For fixed-orientation square tiles with colored edges, where touching edges must match, the row relation holds between a bottom color sequence a and a top sequence b when some valid doubly infinite row has exactly these boundaries. Composing two such relations joins two rows when the top of the first equals the bottom of the second, which is exactly the condition for stacking them.

**Problem.** The nth power of the one-row relation describes exactly the possible boundaries of strips of height n.

**How the definition helps.** Two strips stack exactly when the top of one equals the bottom of the other, so composition records stacking without the interior tiles (our own argument). Conversely, cutting a strip of height n after its first row supplies the middle sequence. Induction on n then gives the claim.

**Paper or page:** [The domino problem is decidable for robust tilesets](https://arxiv.org/abs/2402.04438v1). It says: “there exists a valid tiling by τ of ℤ × \[0;n−1\] the horizontal strip of height n.”

**Sources:**

- [Nathalie Aubrun, Manon Blanc, Olivier Bournez, The domino problem is decidable for robust tilesets, arXiv:2402.04438v1](https://arxiv.org/abs/2402.04438v1)

### Augmenting paths test maximum matchings

**Remember:** An alternating path between two free vertices adds one edge.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science). arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** Given a matching in a finite undirected graph, a set of edges with no shared endpoints, an augmenting path is a path with distinct vertices and at least one edge that joins two unmatched vertices and alternates between edges outside and inside the matching. Swapping the edges along it gives a matching with one more edge.

**Problem.** A matching has maximum size exactly when it has no augmenting path.

**How the definition helps.** Swapping along an augmenting path gives a larger matching, so a maximum matching has none (our own argument). Conversely, if a larger matching M′ exists, the edges in exactly one of M and M′ form alternating paths and even cycles. Some path has more edges of M′ than of M, and it is an augmenting path for M.

**Wikipedia:** [Berge's theorem](https://en.wikipedia.org/wiki/Berge%27s_theorem). It says: “D consists of paths and even cycles”

**Sources:** none listed. No primary source with a working link was found.

### Layered walks test divisibility

**Remember:** Each step moves up one layer, so layers count length modulo k.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C20. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a finite strongly connected directed graph with a cycle, the period is the greatest common divisor of the cycle lengths. The k-layer graph has a copy (v,i) of each vertex v for each residue i modulo k. Each arrow u→v becomes arrows (u,i)→(v,i+1), so the layer reached records a walk’s length modulo k.

**Problem.** Let k be a positive integer at most the number of vertices. The period is divisible by k exactly when copy zero of a fixed vertex reaches no other copy of that vertex.

**How the definition helps.** Reaching (v,i) from (v,0) means a closed walk at v of length i modulo k, so the condition says that k divides every closed walk length at v (our own). If k divides every cycle length, it divides each closed walk, which splits into cycles. Otherwise, a closed walk through an offending cycle, taken with and without one extra lap, gives two lengths that k cannot both divide.

**Paper or page:** [The complexity of computing the period and the exponent of a digraph](https://arxiv.org/abs/2408.05762v2). It says: “k divides the period of G if and only if there is no undirected path”

**Sources:**

- [Stefan Kiefer, Andrew Ryzhikov, The complexity of computing the period and the exponent of a digraph, arXiv:2408.05762v2](https://arxiv.org/abs/2408.05762v2)

### Reweighting preserves shortest paths

**Remember:** The middle potentials cancel.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Give each vertex v of a finite directed graph a number h(v), its potential, and change each edge weight w(u,v) to w(u,v) + h(u) − h(v). Along any path the inner potentials cancel, so its new weight is its old weight plus h(start) − h(end).

**Problem.** Reweighting preserves the shortest paths between any fixed pair of vertices. If no cycle has negative weight, some potential makes every edge weight nonnegative.

**How the definition helps.** So every path between two fixed vertices changes by the same amount, and the shortest ones stay shortest (our own). For the second claim, add a source with zero-weight edges to all vertices, and let h be the distances from it, which Bellman–Ford computes when no cycle is negative. Then h(v) ≤ h(u) + w for each edge u→v of weight w, so its new weight is nonnegative.

**Wikipedia:** [Johnson's algorithm](https://en.wikipedia.org/wiki/Johnson%27s_algorithm). It says: “It works by using the Bellman–Ford algorithm to compute a transformation of the input graph that removes all negative weights”

**Sources:**

- [Donald B. Johnson, Efficient Algorithms for Shortest Paths in Sparse Networks (1977)](https://doi.org/10.1145/321992.321993)

### Twin classes replace sets with counts

**Remember:** Twins can swap freely, so only counts per class matter.

*True by definition. Confidence: medium.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a finite simple undirected graph, twins are vertices with the same neighbors outside the pair, so swapping two twins preserves every edge. For an indexed list of vertex sets, give each vertex its pattern, the indices of the sets containing it, and count the vertices of each pattern in each twin class.

**Problem.** Two lists of vertex sets with the same counts differ only by a relabeling that preserves adjacency. Any property of the sets that ignores vertex names therefore agrees for both lists.

**How the definition helps.** Equal counts let us pair the vertices of each pattern inside each twin class (our own proof). Permuting vertices within twin classes preserves adjacency, so this pairing is a relabeling that preserves edges and carries each set to its partner. Any property that ignores vertex names therefore agrees for both lists.

**Paper or page:** [Simplified Algorithmic Metatheorems Beyond MSO: Treewidth and Neighborhood Diversity](https://arxiv.org/abs/1703.00544v5). It says: “Then either each realization μ of σ satisfies φ or no realization of σ satisfies φ.”

**Sources:**

- [Simplified Algorithmic Metatheorems Beyond MSO: Treewidth and Neighborhood Diversity](https://arxiv.org/abs/1703.00544v5)

### Mechanical Sturmian words are balanced because their block sums telescope

**Remember:** Count the ones in a block by subtracting two floors.

*True by definition. Confidence: medium.* MSC 68R15 (Combinatorics on words), 37B10. arXiv math.CO, math.DS. Level 2: later undergraduate.

**Definition.** Sturmian words, the binary sequences with exactly n + 1 blocks of each length n ≥ 1, are exactly the sequences of successive differences of ⌊nθ + x⌋, or of ⌈nθ + x⌉, with θ irrational in (0, 1) and x real. So the number of ones in a block telescopes to a difference of two floors, or of two ceilings.

**Problem.** Every Sturmian word is balanced, meaning that any two blocks of equal length differ in their counts of ones by at most one. The frequency of ones is θ.

**How the definition helps.** The block of length n starting at m has ⌊(m+n)θ+x⌋ − ⌊mθ+x⌋ ones, and this number is ⌊nθ⌋ or ⌈nθ⌉, and likewise for ceilings (our own argument). So any two blocks of length n differ by at most one in their counts. Dividing the count in the first n letters by n gives θ in the limit.

**Wikipedia:** [Sturmian word](https://en.wikipedia.org/wiki/Sturmian_word). It says: “The sequence w is Sturmian if it is the difference of non-homogeneous Beatty sequences, that is, for some x∈\[0,1) and some irrational θ∈(0,1)”

**Sources:**

- [M. Morse, G. A. Hedlund, Symbolic dynamics II. Sturmian trajectories, Amer. J. Math. 62 (1940) 1–42](https://doi.org/10.2307/2371431)

### Consistent heuristics prevent reopening

**Remember:** Consistency means every reweighted edge still has nonnegative cost.

*Rules out counterexamples.* MSC 68T20 (Problem solving in the context of artificial intelligence (heuristics, search strategies, etc.)). arXiv cs.AI. Level 2: later undergraduate.

**Definition.** A heuristic h is consistent when h(goal) = 0 and h(u) ≤ c(u,v) + h(v) for every edge u→v, so every reweighted edge cost c(u,v) + h(v) − h(u) is nonnegative. A\* always expands a vertex that minimizes its known path cost plus h.

**Problem.** On a finite graph with nonnegative edge costs, A\* with a consistent heuristic finds a cheapest path to each vertex by its first expansion.

**How the definition helps.** With the reweighted costs, path costs change by a telescoping constant, so A\* expands vertices in the same order as Dijkstra’s algorithm and inherits its correctness. Without consistency it fails on S→A, S→B, B→A and A→G with costs 3, 1, 1 and 3 (our own). With h(B) = 4 and all other estimates zero, A\* expands A at cost 3 before it finds cost 2.

**Wikipedia:** [Consistent heuristic](https://en.wikipedia.org/wiki/Consistent_heuristic). It says: “then A\* is equivalent to best-first search on that graph using Dijkstra's algorithm.”

**Sources:**

- [Peter E. Hart, Nils J. Nilsson, and Bertram Raphael (1968), A Formal Basis for the Heuristic Determination of Minimum Cost Paths](https://doi.org/10.1109/TSSC.1968.300136)

### Stable models reject circular support

**Remember:** A loop cannot start a derivation without a seed.

*Rules out counterexamples.* MSC 68T27 (Logic in artificial intelligence), 68T30. arXiv cs.AI. Level 2: later undergraduate.

**Definition.** For a finite ground program with one atom per rule head and a guessed set I of true atoms, the reduct deletes every rule with a negated atom in I and erases the remaining negative premises. I is a stable model when it equals the least set closed under the reduct’s rules, the facts that forward chaining reaches from rules without premises.

**Problem.** Each fact in a stable model has a finite derivation using the reduct. A cycle of rules cannot establish its own facts without an outside derivation.

**How the definition helps.** The least closed set is built by adding only facts whose premises already hold, so every fact gets a finite derivation (our own explanation). A cycle with no outside seed never fires. The program “p if p” has {p} as an ordinary model, but its only stable model is empty (our own example).

**Wikipedia:** [Stable model semantics](https://en.wikipedia.org/wiki/Stable_model_semantics). It says: “We say that I is a stable model of P if I is the stable model of the reduct of P relative to I.”

**Sources:** none listed. No primary source with a working link was found.

### Moral graphs make blankets symmetric

**Remember:** If I am your neighbor, you are mine.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 2: later undergraduate.

**Definition.** In a Bayesian network, the graphical Markov blanket of a vertex is its parents, its children and its children’s other parents. These are exactly its neighbors in the moral graph, which joins each pair of parents of a common child and forgets edge directions.

**Problem.** In a Bayesian network, one node belongs to another node’s graphical Markov blanket exactly when the reverse holds.

**How the definition helps.** Being neighbors in an undirected graph is symmetric, so blanket membership is symmetric (our own proof). Original arrows give the parents and children, and the added edges give the other parents of each child.

**Paper or page:** [Markov Blanket Discovery using Minimum Message Length](https://arxiv.org/abs/2107.08140). It says: “For any two distinct variables Xᵢ, Xⱼ ∈ X: Xⱼ ∈ MBᵢ ⇔ Xᵢ ∈ MBⱼ.”

**Sources:**

- [Markov Blanket Discovery using Minimum Message Length](https://arxiv.org/abs/2107.08140)

### Coefficients test higher-order monotonicity

**Remember:** Read the sign from the highest coefficient.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** For k ≥ 1 and k+1 planar points with distinct horizontal coordinates, the points are positive if some k-times differentiable function through them has a nonnegative kth derivative on the interval they span. Their interpolating polynomial, of degree at most k, is one candidate, and its kth derivative is the constant k! times its xᵏ coefficient.

**Problem.** The points are positive exactly when the coefficient of xᵏ in their interpolating polynomial is nonnegative. Likewise, some function through them has a nonpositive kth derivative everywhere exactly when that coefficient is nonpositive.

**How the definition helps.** So a nonnegative coefficient makes the interpolating polynomial P a witness (our own proof). For any witness f, f − P vanishes at k+1 points, so repeated Rolle’s theorem gives a point where f⁽ᵏ⁾ = P⁽ᵏ⁾, and the coefficient is nonnegative. Reversing all signs gives the nonpositive case.

**Paper or page:** [Higher-order Erdos--Szekeres theorems](https://arxiv.org/abs/1111.3824v3). It says: “and it equals f⁽ᵏ⁾(x)/k! (which is a constant function).”

**Sources:**

- [Marek Elias, Jiri Matousek, Higher-order Erdos–Szekeres theorems, arXiv:1111.3824v3](https://arxiv.org/abs/1111.3824v3)

### Difference sets turn clearance into distance

**Remember:** The shortest difference vector is the clearance between the shapes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG, cs.GR. Level 2: later undergraduate.

**Definition.** The difference set of two shapes A and B is the set of all vectors a − b with a in A and b in B. The length of each such vector is the distance between one point of A and one point of B.

**Problem.** For two nonempty compact shapes, their minimum distance is the distance from the origin to their difference set. Zero distance means the shapes intersect.

**How the definition helps.** So the shortest difference vector gives the minimum distance (our own proof). For compact shapes the difference set is compact, so this minimum is attained. It is zero exactly when some a equals some b, that is, when the shapes meet.

**Wikipedia:** [Gilbert–Johnson–Keerthi distance algorithm](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Johnson%E2%80%93Keerthi_distance_algorithm). It says: “the configuration space obstacle (CSO) of two convex shapes, more commonly known as the Minkowski difference.”

**Sources:**

- [Elmer G. Gilbert, Daniel W. Johnson, and S. Sathiya Keerthi (1988), A fast procedure for computing the distance between complex objects in three-dimensional space](https://doi.org/10.1109/56.2083)

### Half edges encode rotation around vertices

**Remember:** Cross the edge, then step along the next face.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 68P05. arXiv cs.GR, cs.CG. Level 2: later undergraduate.

**Definition.** Take a consistently oriented polygon mesh where every edge borders two faces and every vertex has a single ring of faces around it. Each edge splits into two opposite half edges, one per face, and each stores its twin, the reverse half edge, and its next, the following half edge around its face.

**Problem.** Starting from any outgoing half edge at a vertex, repeatedly taking the twin and then the successor visits every outgoing half edge before returning.

**How the definition helps.** A half edge leaving a vertex has a twin that ends there, and the twin’s next leaves the vertex along the neighboring face in the ring (our own proof). So each twin-then-next step moves once around the ring. A single ring gives one cycle through every outgoing half edge.

**Wikipedia:** [Doubly connected edge list](https://en.wikipedia.org/wiki/Doubly_connected_edge_list). It says: “A half-edge has a pointer to the next half-edge and previous half-edge of the same face.”

**Sources:** none listed. No primary source with a working link was found.

### Lower envelopes give power diagrams

**Remember:** Subtract the common square, then compare only planes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Give each center c in Euclidean space a weight w, and define its power at x as \|x − c\|² − w = x·x − 2c·x + c·c − w. The power cell of a center is the set of points where its power is the smallest, ties included.

**Problem.** Each power cell is the set where one affine function attains the pointwise minimum of all the functions. An affine function is a linear function plus a constant.

**How the definition helps.** Every center’s power contains the same term x·x, so dropping it changes no comparison and no tie (our own). What remains for center c is the affine function c·c − 2c·x − w, so its minimizing region is exactly the power cell.

**Wikipedia:** [Power diagram](https://en.wikipedia.org/wiki/Power_diagram). It says: “The power diagram of n spheres in d dimensions is combinatorially equivalent to the intersection of a set of n upward-facing halfspaces”

**Sources:**

- [Franz Aurenhammer, Power Diagrams: Properties, Algorithms and Applications (1987)](https://doi.org/10.1137/0216006)

### Minimum trees need empty disks

**Remember:** A point inside the disk offers a shorter replacement.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The Gabriel graph of a finite planar point set joins p and q exactly when the closed disk with diameter pq contains no third point. A third point r in that disk is strictly closer to both p and q than they are to each other.

**Problem.** A Euclidean minimum spanning tree connects all the points with minimum total edge length. Every edge of every such tree belongs to the Gabriel graph.

**How the definition helps.** If a minimum tree had an edge pq with a point r in its disk, delete pq and join r to whichever of p and q lies in the other component (our own proof). The new edge is shorter than pq, so the tree gets shorter, which contradicts minimality.

**Wikipedia:** [Gabriel graph](https://en.wikipedia.org/wiki/Gabriel_graph), [Euclidean minimum spanning tree](https://en.wikipedia.org/wiki/Euclidean_minimum_spanning_tree). It says: “The Gabriel graph contains, as subgraphs, the Euclidean minimum spanning tree, the relative neighborhood graph, and the nearest neighbor graph.”

**Sources:**

- [K. Ruben Gabriel and Robert R. Sokal, A New Statistical Approach to Geographic Variation Analysis (1969)](https://doi.org/10.2307/2412323)

### Minkowski optimization queries add

**Remember:** Maximize separately, then add the points.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The Minkowski sum of nonempty polytopes P₁,…,Pᵣ in one vector space is the set of all sums p₁+⋯+pᵣ with each pᵢ in Pᵢ. A linear function f splits over such a sum: f(p₁+⋯+pᵣ) = f(p₁)+⋯+f(pᵣ).

**Problem.** One optimization query on a Minkowski sum, which asks for a point maximizing a linear function, needs only one query per summand, followed by addition.

**How the definition helps.** Each term can be maximized on its own summand, so the sum of the maximizing points maximizes f on the whole sum (our own argument). No list of the vertices of the sum is needed.

**Paper or page:** [Efficient edge-skeleton computation for polytopes defined by oracles](https://arxiv.org/abs/1412.3987v1). It says: “If P₁, …, Pᵣ ⊂ ℝᵈ are given by optimization oracles, then we compute an optimization oracle”

**Sources:**

- [Ioannis Z. Emiris, Vissarion Fisikopoulos, Bernd Gärtner, Efficient edge-skeleton computation for polytopes defined by oracles, arXiv:1412.3987v1](https://arxiv.org/abs/1412.3987v1)

### Plane equations transform normals

**Remember:** Apply the inverse map to the input of the plane equation.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.GR. Level 2: later undergraduate.

**Definition.** A normal covector to a plane is a nonzero linear functional that is zero on every tangent vector; its coefficient column n gives the equation nᵀv = 0. After an invertible map A, the new equation must hold at Av exactly when the old one holds at v.

**Problem.** Transport a plane equation by an invertible linear transformation. The new coefficient column equals the inverse transpose times the old column.

**How the definition helps.** A transformed tangent vector w comes from A⁻¹w, so the new equation is nᵀA⁻¹w = 0 (our own derivation). Its coefficient column is (A⁻¹)ᵀn.

**Wikipedia:** [Normal (geometry)](https://en.wikipedia.org/wiki/Normal_%28geometry%29). It says: “Therefore, one should use the inverse transpose of the linear transformation when transforming surface normals.”

**Sources:** none listed. No primary source with a working link was found.

### Turn signs order rays

**Remember:** From a hull corner, every turn compares two rays.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** For labelled planar points with no three on a line, the order type records whether each ordered triple turns clockwise or counterclockwise. Seen from a vertex a of the convex hull, the smallest convex set containing the points, all other points lie within an angle less than a half turn (our own).

**Problem.** At a hull vertex a, put p before q when the turn from a through p to q is counterclockwise. This rule totally orders all other points.

**How the definition helps.** Inside such an angle, the turn from a through p to q is counterclockwise exactly when q lies counterclockwise of p, which is an ordinary angular order (our own argument). At the center of an equilateral triangle the same comparison cycles through the three corners, so a hull vertex is needed.

**Paper or page:** [A canonical tree decomposition for order types, and some applications](https://arxiv.org/abs/2403.10311v2). It says: “defines a strict total order on X ∖ {a}.”

**Sources:**

- [Mathilde Bouvel, Valentin Féray, Xavier Goaoc, Florent Koechlin, A canonical tree decomposition for order types, and some applications, arXiv:2403.10311v2](https://arxiv.org/abs/2403.10311v2)

### Recursive spline bases localize control edits

**Remember:** Each degree adds one knot span to a basis function’s reach.

*True by definition.* MSC 68U07 (Computer science aspects of computer-aided design), 68U05. arXiv cs.GR. Level 2: later undergraduate.

**Definition.** For nondecreasing knots tᵢ, the degree-zero B-spline Nᵢ,₀ is 1 on \[tᵢ,tᵢ₊₁) and 0 elsewhere. Each degree-p function blends two neighbors: Nᵢ,ₚ(x) = (x−tᵢ)Nᵢ,ₚ₋₁(x)/(tᵢ₊ₚ−tᵢ) + (tᵢ₊ₚ₊₁−x)Nᵢ₊₁,ₚ₋₁(x)/(tᵢ₊ₚ₊₁−tᵢ₊₁), with zero-denominator terms read as zero. The spline curve ∑ᵢ Nᵢ,ₚ(x)Pᵢ uses the control point Pᵢ only through Nᵢ,ₚ.

**Problem.** Changing one control point of a degree-p B-spline can affect the curve only within the closed interval covering its p+1 knot spans.

**How the definition helps.** So moving Pᵢ changes the curve only where Nᵢ,ₚ is nonzero (our own proof). Nᵢ,₀ vanishes outside one span, and each recursion step joins two neighbors whose supports lie in \[tᵢ,tᵢ₊ₚ₊₁\]. By induction, Nᵢ,ₚ vanishes outside these p+1 spans.

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “the supports of the two terms in the B-spline recursion are different (the outermost subintervals are not common).”

**Sources:**

- [M. G. Cox (1972), The Numerical Evaluation of B-Splines](https://doi.org/10.1093/imamat/10.2.134)
- [Carl de Boor (1972), On calculating with B-splines](https://doi.org/10.1016/0021-9045(72)90080-9)

### Containment makes erosions compose

**Remember:** Fit the probe twice, or fit the sum once.

*True by definition.* MSC 68U10 (Computing methodologies for image processing). arXiv cs.CV. Level 2: later undergraduate.

**Definition.** Eroding a shape A by a probe B keeps the positions x where the whole translated probe x + B fits inside A.

**Problem.** Eroding by B and then by C equals one erosion by the set of all sums b+c from B and C.

**How the definition helps.** Eroding by B and then by C keeps x exactly when x + c + B fits in A for every c in C, that is, when every x + c + b lies in A (our own proof). These points form the translated sum probe, so the two erosions agree.

**Wikipedia:** [Erosion (morphology)](https://en.wikipedia.org/wiki/Erosion_%28morphology%29). It says: “The erosion satisfies (A⊖B)⊖C = A⊖(B⊕C), where ⊕ denotes the morphological dilation.”

**Sources:** none listed. No primary source with a working link was found.

### Arithmetic maps commute with dynamic programming

**Remember:** Preserve the arithmetic and you preserve the calculation.

*True by definition.* MSC 68W05 (Nonnumerical algorithms), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A dynamic-programming calculation is one expression built from edge weights by two operations, such as addition to choose between paths and multiplication to join edges. A map preserves this arithmetic when it preserves both operations and their identity elements.

**Problem.** For a finite acyclic path calculation, applying a map that preserves both operations and identities commutes with evaluating the calculation.

**How the definition helps.** The map can be pushed through the expression one operation at a time, so mapping the inputs and then calculating gives the value of calculating and then mapping. Induction on the expression proves this once, so each new map needs only the preservation check (our own).

**Paper or page:** [Dynamic programming by polymorphic semiring algebraic shortcut fusion](https://arxiv.org/abs/2107.01752v5). It says: “then \\emph{shortcut fusion }applies to the function $f$”

**Sources:**

- [Dynamic programming by polymorphic semiring algebraic shortcut fusion](https://arxiv.org/abs/2107.01752v5)

### Live frontiers bound memory

**Remember:** Keep only the earlier values that some later calculation still needs.

*True by definition. Confidence: medium.* MSC 68W05 (Nonnumerical algorithms), 68W40. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Order the calculations so that every input comes before its use. At each point in the order, the live values are earlier results that some later calculation still needs, and the frontier width is the largest number of live values at any point.

**Problem.** Assume the order and last uses are available, values and labels occupy constant space, and each update needs bounded input and constant temporary space. Excluding input and streamed output, the calculation needs at most a constant times one plus the frontier width in working words.

**How the definition helps.** Only live values can be needed again, so one pass that keeps each live value with its label and discards it after its last use suffices (our own argument). Each kept value takes constant space, and each update adds only constant temporary space.

**Paper or page:** [Universal Hirschberg for Width Bounded Dynamic Programs](https://arxiv.org/abs/2512.10132v1). It says: “can be recomputed using additional workspace O(ω) (in words).”

**Sources:**

- [Universal Hirschberg for Width Bounded Dynamic Programs](https://arxiv.org/abs/2512.10132v1)

### Matchings test cuckoo placements

**Remember:** Every group of keys needs at least as many slots.

*Makes the theorem clean to state or prove.* MSC 68W05 (Nonnumerical algorithms), 05C85. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In cuckoo hashing, draw a bipartite graph that joins each key to every slot where it may be stored, counting each place in a shared location as its own slot. If overflow storage is allowed, also join every key to each overflow slot. A placement is then a matching that gives every key its own slot.

**Problem.** A placement exists exactly when every set of keys has at least as many neighboring slots as keys.

**How the definition helps.** Hall’s theorem says that a matching covering every key exists exactly when every set of keys has at least as many neighboring slots as keys. This tests whether a placement exists, regardless of how the keys are inserted (our own explanation).

**Paper or page:** [Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications](https://arxiv.org/abs/2306.11220v1). It says: “the construction failure probability is equal to the probability that there exists a subset of left vertices X such that \|N(X)\| &lt; \|X\|”

**Sources:**

- [Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications](https://arxiv.org/abs/2306.11220v1)

### Residual reachability certifies maximum flow

**Remember:** No residual path means the reachable side is a full cut.

*True by definition.* MSC 68W05 (Nonnumerical algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** For a feasible flow in a finite network with distinct source and sink, the residual graph has an edge wherever flow can still change: forward with capacity c − f when c − f &gt; 0, and backward with capacity f when f &gt; 0. Feasible means 0 ≤ f ≤ c on each edge and conservation at all other vertices.

**Problem.** A flow is maximum exactly when its residual graph has no path from source to sink.

**How the definition helps.** A source-to-sink path in the residual graph lets the flow grow by its smallest residual capacity, so a maximum flow has none (our own proof). If there is none, the vertices reachable from the source form a cut whose leaving edges are full and whose entering edges are empty. Then the flow value equals the cut capacity, which bounds every flow from above.

**Wikipedia:** [Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm), [Max-flow min-cut theorem](https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem). It says: “When no more paths in step 2 can be found, s will not be able to reach t in the residual network.”

**Sources:**

- [L. R. Ford Jr. and D. R. Fulkerson, Maximal Flow Through a Network (1956)](https://doi.org/10.4153/CJM-1956-045-5)

### Lamport timestamps extend causal order

**Remember:** Advance past both clocks when a message arrives.

*True by definition.* MSC 68W15 (Distributed algorithms), 68M14. arXiv cs.DC. Level 2: later undergraduate.

**Definition.** One event happens before another if a chain of local steps and message deliveries leads from the first to the second. Lamport timestamps increase strictly along each process, and a receipt gets a number larger than both its previous timestamp and the message’s, so timestamps increase along every chain.

**Problem.** Ordering events by timestamp and then by process identifier gives a total order that respects happened-before.

**How the definition helps.** Each link of a chain raises the timestamp, so an event that happens before another has a smaller timestamp. Equal timestamps occur only at different processes, and the fixed order of process identifiers breaks those ties, giving a total order.

**Wikipedia:** [Lamport timestamp](https://en.wikipedia.org/wiki/Lamport_timestamp). It says: “Lamport timestamps can be used to create a total ordering of events in a distributed system”

**Sources:**

- [Leslie Lamport, Time, Clocks, and the Ordering of Events in a Distributed System (1978)](https://doi.org/10.1145/359545.359563)

### Vector clocks detect causality

**Remember:** Each coordinate counts how much of that process you have heard.

*True by definition.* MSC 68W15 (Distributed algorithms). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** An event’s vector clock records, for each process, how many of that process’s events lie in the event’s causal history, the event and everything that causally precedes it. Causal precedence is the transitive closure of local event order and the links from each send to its receipt.

**Problem.** One event causally precedes another exactly when its vector is at most the other's in every coordinate and smaller in some coordinate.

**How the definition helps.** Each process’s part of a causal history is a prefix of its events, so comparing vectors compares histories by inclusion (our own proof). An event precedes another exactly when its history is a proper subset of the other’s. The remaining work is maintaining the vectors locally by counting events and taking coordinatewise maxima on receipt.

**Wikipedia:** [Vector clock](https://en.wikipedia.org/wiki/Vector_clock). It says: “every process also keeps track of the largest value of each of the other processes' clocks that it has so far been informed of.”

**Sources:**

- [Reinhard Schwarz and Friedemann Mattern, Detecting causal relationships in distributed computations: In search of the holy grail (1994)](https://doi.org/10.1007/BF02277859)

### Random minima measure set overlap

**Remember:** The two sets agree when the union’s first element is shared.

*True by definition.* MSC 68W20 (Randomized algorithms), 68W25. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Pick one uniformly random order of a finite universe and represent each nonempty set by its first element in that order. The Jaccard similarity of two sets is the size of their intersection divided by the size of their union.

**Problem.** The probability that the two representatives agree equals the Jaccard similarity.

**How the definition helps.** The representatives agree exactly when the first union element belongs to the intersection. Every union element has the same chance of coming first. Counting favorable elements therefore gives the intersection size divided by the union size.

**Wikipedia:** [MinHash](https://en.wikipedia.org/wiki/MinHash). It says: “the element with the minimum hash value lies in the intersection A ∩ B. The probability of this being true is exactly the Jaccard index”

**Sources:**

- [Andrei Z. Broder, On the Resemblance and Containment of Documents (1997)](https://doi.org/10.1109/SEQUEN.1997.666900)

### Universal hashing bounds collisions

**Remember:** Any two keys collide with chance at most one over m.

*True by definition.* MSC 68W20 (Randomized algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A universal family maps keys to m bins, and a function chosen from it at random puts any fixed pair of distinct keys in the same bin with probability at most 1/m.

**Problem.** Fix n distinct keys before choosing the function. The expected number of unordered pairs sharing a bin is at most n(n − 1)/(2m).

**How the definition helps.** Linearity of expectation adds this bound over the n(n − 1)/2 pairs, even when different pairs collide dependently (our own proof). The remaining work is to construct such a family.

**Wikipedia:** [Universal hashing](https://en.wikipedia.org/wiki/Universal_hashing). It says: “This guarantees a low number of collisions in expectation, even if the data is chosen by an adversary.”

**Sources:**

- [J. Lawrence Carter and Mark N. Wegman, Universal Classes of Hash Functions (1979)](https://doi.org/10.1016/0022-0000(79)90044-8)

### Metric tours admit shortcuts

**Remember:** Skip a repeat without paying more.

*Rules out counterexamples.* MSC 68W25 (Approximation algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In the metric traveling salesman problem, every pair of vertices is joined by an edge whose cost is their distance in a finite metric space. So, by the triangle inequality, going straight from u to w never costs more than going through v.

**Problem.** Any closed walk visiting all vertices can be shortened to a tour that visits each vertex once before returning to its start. The tour costs no more than the walk.

**How the definition helps.** So any repeated visit can be skipped without raising the cost: keep the first visit to each vertex and return to the start. Without the triangle inequality this fails: in a star with three leaves, give center-to-leaf edges cost 1 and leaf-to-leaf edges cost 10 (our own). A walk through the center costs 6, but every tour costs 22.

**Wikipedia:** [Christofides algorithm](https://en.wikipedia.org/wiki/Christofides_algorithm). It says: “Thanks to the triangle inequality, even though the Euler tour might revisit vertices, shortcutting does not increase the weight,”

**Sources:**

- [Nicos Christofides, Worst-Case Analysis of a New Heuristic for the Travelling Salesman Problem (1976, published 2022)](https://doi.org/10.1007/s43069-021-00101-z)

### End markers make rotation sorting reversible

**Remember:** Use one unique marker to recover the start of a circular string.

*Rules out counterexamples.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** The Burrows–Wheeler transform appends a marker that occurs nowhere else, sorts all cyclic rotations of the marked string, and keeps the last column. The unique marker singles out the rotation that is the original string.

**Problem.** The last column of the sorted rotations determines the original string once a unique end marker is appended.

**How the definition helps.** Starting from empty rows, repeatedly prepend the last column and sort, which gives the sorted prefixes of the rotations, one letter longer each round (our own). After one round per character, the row that ends in the marker is the original marked string. Without the marker, abc and bca give the same last column (our own).

**Wikipedia:** [Burrows–Wheeler transform](https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform). It says: “all circular permutations of a string have the same Burrows–Wheeler transform.”

**Sources:** none listed. No primary source with a working link was found.

### Neighboring suffixes reveal shared prefixes

**Remember:** The shared prefix of two suffixes is the smallest neighbor value between.

*True by definition.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Sort all suffixes of a string in dictionary order and record, for each adjacent pair, the length of their longest common prefix. In sorted order, a prefix shared by two suffixes is shared by every suffix between them.

**Problem.** For two distinct suffixes, the length of their longest common prefix equals the smallest recorded length between their positions in sorted order.

**How the definition helps.** A prefix shared by the endpoints is shared by each adjacent pair between them, so it is at most the smallest recorded length. Conversely, each adjacent pair agrees on that many characters, so the endpoints agree on them too (our own proof). Fast repeated queries then need only a range-minimum structure on the array.

**Wikipedia:** [LCP array](https://en.wikipedia.org/wiki/LCP_array). It says: “the length of the longest prefix that is shared by all of these suffixes is the minimum value in the interval”

**Sources:**

- [Toru Kasai and colleagues, Linear-Time Longest-Common-Prefix Computation in Suffix Arrays and Its Applications (2001)](https://doi.org/10.1007/3-540-48194-X_17)

### Sorted suffixes group pattern matches

**Remember:** A pattern occurs exactly where it begins a suffix.

*True by definition.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A suffix array lists the starting positions of a string’s suffixes in dictionary order of the suffixes. Dictionary order keeps all suffixes that begin with a given pattern together in one block.

**Problem.** For a nonempty pattern, all matching starting positions form one possibly empty interval in the suffix array. Two binary searches find its ends.

**How the definition helps.** A pattern occurs at a position exactly when the suffix there begins with the pattern. Those suffixes form one interval, because a suffix between two matches cannot differ from the pattern without leaving that order (our own). Binary search finds each end of the interval.

**Wikipedia:** [Suffix array](https://en.wikipedia.org/wiki/Suffix_array). It says: “these suffixes will be grouped together in the suffix array and can be found efficiently with two binary searches.”

**Sources:**

- [Udi Manber and Gene Myers, Suffix Arrays: A New Method for On-Line String Searches (1993)](https://doi.org/10.1137/0222058)

### Suffix links list ending matches

**Remember:** Follow shorter endings to report every word that ends here.

*True by definition.* MSC 68W32 (Algorithms on strings), 68R15. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Build the tree of all prefixes of the dictionary’s nonempty words, with the empty prefix at the root and the nodes for whole words marked. Each nonroot node has a suffix link to the node of its longest proper suffix in the tree, so following links lists its endings in the tree from longest to shortest.

**Problem.** After a text position, start at the longest matching prefix node that ends there. The marked nodes on its suffix-link chain, including the starting node, are exactly the dictionary words ending there.

**How the definition helps.** Every dictionary word that ends at the text position is a suffix of the longest matching prefix, so its node lies on the chain (our own proof). Each shorter ending in the tree is a suffix of the next longer one, so the chain reaches all of them, and the marks pick out the words. The remaining work is building the links and tracking the longest match as characters arrive.

**Wikipedia:** [Aho–Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm). It says: “There is a blue directed "suffix" arc from each node to the node that is the longest possible strict suffix of it in the graph.”

**Sources:**

- [Alfred V. Aho and Margaret J. Corasick, Efficient String Matching: An Aid to Bibliographic Search (1975)](https://doi.org/10.1145/360825.360855)

### Potential changes cancel

**Remember:** The intermediate potentials cancel.

*True by definition.* MSC 68W40 (Analysis of algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Assign each state of a data structure a number called its potential, and define the amortized cost of an operation as its actual cost plus the change in potential. Over a sequence of operations these changes telescope to the final potential minus the initial one (our own).

**Problem.** If the potential starts at zero and stays nonnegative, total amortized cost bounds total actual cost from above.

**How the definition helps.** So total amortized cost equals total actual cost plus the final potential minus the initial zero, and that remainder is nonnegative (our own). The remaining work is finding a useful potential.

**Wikipedia:** [Amortized analysis](https://en.wikipedia.org/wiki/Amortized_analysis). It says: “The amortized cost is the immediate cost plus the change in potential.”

**Sources:** none listed. No primary source with a working link was found.

### Linearizability can be checked separately

**Remember:** Order each object inside real time, then merge the orders.

*Makes the theorem clean to state or prove.* MSC 68M14 (Distributed systems), 68W15. arXiv cs.DC. Level 3: graduate.

**Definition.** A history of completed operations is linearizable when all operations fit in one serial order that gives each object its specified results and respects real time: an operation that finishes before another starts comes first.

**Problem.** Consider a finite history of completed operations, each on one object, with one outstanding call per process at most. The history is linearizable exactly when each object’s history is linearizable.

**How the definition helps.** Real time only constrains operations whose intervals do not overlap, so each object’s serial order can be placed inside actual time and merged. In our own proof, give each operation the latest call time among itself and its predecessors in its object’s order, and merge all lists by these times, keeping each object’s order at ties. Restricting a global order to one object keeps both conditions, which gives the converse.

**Wikipedia:** [Linearizability](https://en.wikipedia.org/wiki/Linearizability). It says: “If an operation op₁ completes (gets a response) before op₂ begins (invokes), then op₁ precedes op₂ in σ.”

**Sources:**

- [Maurice P. Herlihy and Jeannette M. Wing, Linearizability: A Correctness Condition for Concurrent Objects (1990)](https://doi.org/10.1145/78969.78972)

### Precise definitions turned Brewer's CAP conjecture into a theorem

**Remember:** Cut the network, and each node must choose: answer, or stay consistent.

*Makes the theorem clean to state or prove.* MSC 68M14 (Distributed systems), 68P15. arXiv cs.DC, cs.DB. Level 3: graduate.

**Definition.** Consistency means that completed register operations fit one order that respects real time, and each read returns the latest earlier write, or the initial value. Availability means that every request at a working node gets an answer. Partition tolerance means that both must hold even when all messages between two groups of nodes are lost.

**Problem.** In the Gilbert–Lynch asynchronous register model, no implementation guarantees consistency and availability through every network partition.

**How the definition helps.** A reader cut off from a writer cannot tell whether the write happened, yet it must answer (our own proof). Compare a run with no write to a run where a node in the first group completes a write of a value other than the initial one. A later reader in the second group sees the same messages in both runs, but consistency requires different answers.

**Wikipedia:** [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem). It says: “In 2002, Seth Gilbert and Nancy Lynch of MIT published a formal proof of Brewer's conjecture, elevating it to a theorem.”

**Sources:**

- [S. Gilbert and N. Lynch, Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services, ACM SIGACT News 33 (2002) 51–59](https://doi.org/10.1145/564585.564601)

### Replica joins ignore order

**Remember:** Merge by taking the least state above both.

*True by definition.* MSC 68M14 (Distributed systems). arXiv cs.DC. Level 3: graduate.

**Definition.** Replica states form a partial order with a least initial state, in which any two states have a least upper bound, called their join. Each local update moves a state upward, and merging two states takes their join.

**Problem.** Replicas that start with the same initial state agree once they incorporate the same set of generated update states. Reordering or repeating those state deliveries does not change the result.

**How the definition helps.** The join of several states is the least state above all of them, and that state does not depend on order or repetition (our own argument). An update at a replica already lies above its previous state, so merging never loses an update. So any delivery order of the same update states gives the same least upper bound.

**Wikipedia:** [Conflict-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). It says: “The merge function should compute the join for any pair of replica states”

**Sources:**

- [Marc Shapiro, Nuno Preguiça, Carlos Baquero, and Marek Zawirski, Conflict-Free Replicated Data Types (2011)](https://doi.org/10.1007/978-3-642-24550-3_29)

### Intrinsically typed terms make type preservation hold by construction

**Remember:** Each step lives inside one type’s terms, so types cannot change.

*True by definition.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Intrinsically typed terms come in families Term(Γ,A), one for each context Γ and type A, built only by the typed term constructors. A reduction step is a relation inside one family Term(Γ,A), so each rule must produce a step between two terms of that family.

**Problem.** Every reduction step preserves the type of the term.

**How the definition helps.** A step relates two terms of the same family, so it cannot change their type (our own explanation). The work moves to the rule for function application, which needs a substitution that returns a term of the stated type. Relating these typed steps to steps on untyped terms needs a separate theorem (our own).

**nLab:** [intrinsic and extrinsic views of typing](https://ncatlab.org/nlab/show/intrinsic+and+extrinsic+views+of+typing). It says: “Like the syntactician's parts of speech, as a way of defining the grammar of well-formed expressions.”

**Sources:**

- [Philip Wadler, Wen Kokke and Jeremy G. Siek, Programming Language Foundations in Agda, DeBruijn chapter](https://plfa.github.io/DeBruijn/#reduction)

### Polymorphism only at let keeps type inference decidable

**Remember:** Let-bound names may be polymorphic; lambda parameters never are.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Hindley–Milner makes a name polymorphic only when a let binds it: the inferred type is generalized over its type variables not free in the environment, and each use instantiates them with monotypes. A lambda parameter keeps one monotype throughout its scope.

**Problem.** In Hindley–Milner, every typable program without annotations has a principal type, a most general type of which all its other types are instances. Algorithm W finds it.

**How the definition helps.** Monomorphic parameters turn every typing constraint into a first-order unification problem, which has a most general solution whenever it has any solution (our own explanation). Algorithm W solves these constraints with most general unifiers and generalizes only at let, and the Damas–Milner theorem shows the result is principal. For the polymorphic parameters of System F, Wells proved inference undecidable (our own comparison).

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

**Definition.** The ML value restriction gives a let-bound name a polymorphic type, over type variables absent from the environment, only when the bound expression is a syntactic value. Values are variables, constants, functions and immutable constructors applied to values; allocating a reference is an application, so a new cell gets one monomorphic type.

**Problem.** ML with mutable references and the value restriction is type safe. With unrestricted let-polymorphism over references, a well-typed program can apply an operation to the wrong type.

**How the definition helps.** Each reference cell gets one fixed type, so it cannot hold values of two types. In let c = ref (fn x ⇒ x), storing an integer function fixes the argument type, so applying the stored function to true is rejected (our own example). Unrestricted generalization would accept both uses of the same cell and break type safety.

**Wikipedia:** [Value restriction](https://en.wikipedia.org/wiki/Value_restriction). It says: “The value restriction prevents reference cells from holding values of different types and preserves type safety.”

**Sources:**

- [A. K. Wright, Simple imperative polymorphism, LISP and Symbolic Computation 8 (1995) 343–355](https://doi.org/10.1007/BF01018828)

### Defining the least Herbrand model as an intersection makes it test consequences

**Remember:** Keep only the ground facts true in every term model.

*True by definition.* MSC 68N17 (Logic programming), 03B70, 03C05. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** Over a signature with a constant and no built-in equality, a Herbrand model has the ground terms as elements, with functions acting by term formation. The least Herbrand model of a set of definite Horn clauses is the set of ground atoms true in every Herbrand model of the clauses.

**Problem.** A variable-free atomic formula follows from a set of definite Horn clauses exactly when it holds in their least Herbrand model.

**How the definition helps.** An atom lies in the least Herbrand model exactly when it holds in every Herbrand model, so the theorem reduces to two lemmas (our own). The intersection is itself a model, because each clause has one conclusion. Any model yields a Herbrand model with the same true ground atoms, because the clauses are universal sentences.

**Wikipedia:** [Horn clause](https://en.wikipedia.org/wiki/Horn_clause). It says: “An atomic formula A is logically implied by D if and only if A is true in M.”

**Sources:**

- [M. H. van Emden and R. A. Kowalski, The Semantics of Predicate Logic as a Programming Language (1976)](https://doi.org/10.1145/321978.321991)

### Continuation-passing form makes call-by-name and call-by-value agree on closed terms

**Remember:** Arguments are already values, so when to evaluate them never matters.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 68Q55. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A term is in this restricted continuation-passing form when every application has a variable or a lambda abstraction as its argument, never a compound expression. Each function passes its result to a continuation instead of returning it.

**Problem.** On closed lambda terms in this continuation-passing form, call-by-name and call-by-value take the same evaluation steps. Thus they return the same result or both run forever.

**How the definition helps.** At each evaluation step, the argument is a lambda abstraction because the term is closed and neither strategy reduces under abstractions (our own). Both strategies therefore perform the same substitution. Substituting that closed value preserves the argument restriction, so the reasoning repeats.

**nLab:** [continuation-passing style](https://ncatlab.org/nlab/show/continuation-passing+style). It says: “Whenever a procedure in "direct style" would return a value (v), the corresponding procedure in CPS instead invokes the continuation with that value (k(v)).”

**Wikipedia:** [Continuation-passing style](https://en.wikipedia.org/wiki/Continuation-passing_style). It says: “every argument in a function call must be either a variable or a lambda expression (not a more complex expression).”

**Sources:**

- [G. D. Plotkin, Call-by-name, call-by-value and the λ-calculus, Theoretical Computer Science 1 (1975)](https://doi.org/10.1016/0304-3975(75)90017-1)

### The monoidal definition of applicative functors makes their composites applicative

**Remember:** Pair the outer effects first, then the inner effects.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 18M05. arXiv cs.PL, math.CT. Level 3: graduate.

**Definition.** An applicative functor F on sets is a functor from sets to sets with a unit element in F(1) and a natural pairing F(A) × F(B) → F(A × B). The pairing obeys left unit, right unit and associativity laws, up to the canonical product identifications.

**Problem.** The composite of two applicative functors on sets is applicative.

**How the definition helps.** Pair the outer layers with F’s pairing, then apply F to G’s pairing inside (our own construction). The unit is F applied to G’s unit map 1 → G(1), evaluated at F’s unit. Naturality and the laws of both functors give the laws of the composite.

**nLab:** [applicative functor](https://ncatlab.org/nlab/show/applicative+functor). It says: “Unlike monads, applicative functors are closed under composition.”

**Sources:**

- [Conor McBride and Ross Paterson, Applicative Programming with Effects](https://www.staff.city.ac.uk/~ross/papers/Applicative.html)

### Sampled catalogs save searches

**Remember:** Sample every second entry, so each link lands within one step.

*True by definition.* MSC 68P10 (Searching and sorting). arXiv cs.DS. Level 3: graduate.

**Definition.** Fractional cascading augments each sorted list, from the last list backward, with every second entry of the next augmented list. Each entry links to the first value at least as large as its own in its original list and in the next augmented list, or to an end position if there is none.

**Problem.** With n entries across k nonempty sorted lists, this structure uses O(n) space. It finds the first entry at least as large as a query in every list in O(log n + k) time.

**How the definition helps.** Only every second entry is copied, so the link into the next augmented list lands at most one position past the answer there (our own). One binary search in the first list, then one link and one check per list, gives O(log n + k) time. Copies make up at most half of all augmented entries, so the total size is at most 2n.

**Wikipedia:** [Fractional cascading](https://en.wikipedia.org/wiki/Fractional_cascading). It says: “each earlier list Mᵢ is formed by merging Lᵢ with every second item from Mᵢ₊₁.”

**Sources:**

- [Bernard Chazelle and Leonidas J. Guibas, Fractional Cascading: I. A Data Structuring Technique (1986)](https://doi.org/10.1007/BF01840440)

### Universal models test conjunctive queries

**Remember:** Map the witnesses from one model into every model.

*True by definition.* MSC 68P15 (Database theory), 68T30. arXiv cs.DB, cs.AI. Level 3: graduate.

**Definition.** A universal model of a database and its rules is a model that maps into every other model by a map that keeps every fact and fixes the named values.

**Problem.** For database facts and existential rules with a universal model, a Boolean conjunctive query, which asks whether some values make a conjunction of facts true, follows exactly when it holds in that model.

**How the definition helps.** A map from the universal model carries the query’s witnesses into any model and keeps every fact they satisfy, so a query true there is true in every model (our own proof). Conversely, a query true in every model is true in the universal model, which is one of them.

**Paper or page:** [Connecting Proof Theory and Knowledge Representation: Sequent Calculi and the Chase with Existential Rules](https://arxiv.org/abs/2306.02521). It says: “then a universal model can be constructed witnessing that (D, R) ⊭ ∃x q(x).”

**Sources:**

- [Connecting Proof Theory and Knowledge Representation: Sequent Calculi and the Chase with Existential Rules](https://arxiv.org/abs/2306.02521)

### Ciphertext integrity strengthens privacy

**Remember:** Forgeries fail, so decryption only tells you what you already know.

*Rules out counterexamples.* MSC 68P25 (Data encryption (aspects in computer science)), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** Ciphertext integrity means that an efficient attacker who may request encryptions produces a new ciphertext that decrypts successfully only with negligible probability, below every inverse polynomial in the security parameter for large parameters. New means that encryption never returned that exact ciphertext, even if it returned another one carrying the same message.

**Problem.** Suppose a secret-key cipher has ciphertext integrity and hides which of two chosen equal-length messages it encrypts, even with access to encryption. It still hides that choice with access to decryption before and after the challenge, provided the observer cannot submit the challenge for decryption afterward.

**How the definition helps.** With integrity, a decryption query almost surely returns a rejection or a message the attacker itself had encrypted, so decryption adds nothing (our own proof). A simulator answers from its record of encryptions and rejects everything else, and it errs only on a successful forgery. Guessing which of polynomially many queries is the first forgery turns any noticeable error into a forgery, so privacy carries over.

**Wikipedia:** [Authenticated encryption](https://en.wikipedia.org/wiki/Authenticated_encryption). It says: “Katz and Yung investigated the notion under the name "unforgeable encryption" and proved it implies security against chosen ciphertext attacks.”

**Sources:**

- [Mihir Bellare and Chanathip Namprempre, Authenticated Encryption: Relations among Notions and Analysis of the Generic Composition Paradigm](https://doi.org/10.1007/s00145-008-9026-x)

### Defining differential privacy by a probability ratio makes it compose

**Remember:** One person changes any output probability by at most a factor exp(ε).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.ME. Level 3: graduate.

**Definition.** ε-differential privacy bounds how much one person’s record can change the chance of any output. For every ordered pair of databases D,D′ differing in one person’s record and every measurable output event S, it requires Pr\[M(D) ∈ S\] ≤ exp(ε) Pr\[M(D′) ∈ S\].

**Problem.** Differential privacy composes. t queries that are each ε-private and use independent randomness are together tε-private, and any processing of an ε-private output stays ε-private.

**How the definition helps.** Independent releases multiply the probability bounds, giving exp(ε)ᵗ = exp(tε) for their joint distribution (our own proof). Processing the output tests an event through its preimage. For randomized processing, averaging over independent processing randomness preserves the same bound.

**Wikipedia:** [Differential privacy](https://en.wikipedia.org/wiki/Differential_privacy). It says: “The property of composition permits modular construction and analysis of differentially private mechanisms”

**Sources:**

- [Dwork, C.; McSherry, F.; Nissim, K.; Smith, A. (2006). Calibrating noise to sensitivity in private data analysis. Theory of Cryptography (TCC 2006), LNCS 3876, 265–284.](https://doi.org/10.1007/11681878_14)

### Privacy curves compare testing risks

**Remember:** Each prior’s best test risk is one point on the curve.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data). arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** The privacy curve of output distributions P and Q gives, for each real ε, the largest value of P(A) − exp(ε)Q(A) over events A. The testing risk at prior π is the chance of guessing wrongly between P and Q when P has prior probability π.

**Problem.** Compare two ordered pairs of output distributions. The first curve lies above or on the second everywhere exactly when its minimum risk is no greater for every prior.

**How the definition helps.** For 0 &lt; π &lt; 1, the minimum testing risk equals π minus π times the curve at ε = log((1 − π)/π) (our own derivation). This follows from guessing P on an event A, which gives risk π − πP(A) + (1 − π)Q(A). These priors cover every real ε, and the priors 0 and 1 give zero minimum risk for both pairs.

**Paper or page:** [Beyond the Calibration Point: Mechanism Comparison in Differential Privacy](https://arxiv.org/abs/2406.08918v3). It says: “∀ π ∈ \[0,1\]: Rₘᵢₙ(π) ≤ R̃ₘᵢₙ(π).”

**Sources:**

- [Georgios Kaissis, Stefan Kolek, Borja Balle, Jamie Hayes, Daniel Rueckert, Beyond the Calibration Point: Mechanism Comparison in Differential Privacy (2025)](https://arxiv.org/abs/2406.08918v3)

### Privacy defined on output distributions cannot be broken by post-processing

**Remember:** Whatever you compute from a private answer stays private.

*True by definition.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.TH. Level 3: graduate.

**Definition.** A mechanism M is ε-differentially private if one person’s data changes the probability of each output event by at most a factor exp(ε): Pr\[M(D) ∈ S\] ≤ exp(ε) Pr\[M(D′) ∈ S\] for every ordered pair D,D′ differing in one person and every measurable event S. The condition looks only at the distribution of the output.

**Problem.** If M is ε-differentially private and g is any function, possibly randomized, that does not look at the data again, then g(M(·)) is ε-differentially private.

**How the definition helps.** Every measurable event after deterministic processing corresponds to its preimage before processing (our own proof). Applying the privacy inequality to that preimage gives the same bound. For randomized processing, condition on its independent randomness and average the bounds.

**Paper or page:** [Differentially Private Algorithms for Synthetic Power System Datasets](https://arxiv.org/abs/2303.11079v1). It says: “If query Q̃ satisfies ε-DP, then g∘Q̃(y), where g is an arbitrary, data-independent post-processing of the query answer, also satisfies ε-DP.”

**Sources:**

- [Vladimir Dvorkin, Audun Botterud, Differentially Private Algorithms for Synthetic Power System Datasets, IEEE Control Systems Letters 7 (2023) 2053–2058, arXiv:2303.11079](https://arxiv.org/abs/2303.11079v1)

### Postselection makes PP a quantum class

**Remember:** Condition on a possible outcome, then demand bounded error.

*True by definition.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 68Q15. arXiv cs.CC, quant-ph. Level 3: graduate.

**Definition.** PostBQP is bounded-error quantum polynomial time with the power to condition on an event. A language is in PostBQP if a uniform polynomial-time quantum algorithm names an event of positive probability on every input and, conditional on that event, answers correctly with probability at least 2/3.

**Problem.** PP is closed under intersection. Beigel, Reingold and Spielman first proved this using rational approximation (our own historical note).

**How the definition helps.** Two independent PostBQP tests can condition on both events at once, and the joint event still has positive probability (our own proof). Amplify each conditional success above 5/6 by majority vote, and accept only if both accept, so the conditional error stays below 1/3. Aaronson’s theorem PostBQP = PP carries this closure to PP.

**Paper or page:** [Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape](https://arxiv.org/abs/2507.03692), [Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape](https://arxiv.org/abs/2507.03692). It says: “In 2004, Aaronson introduced the complexity class PostBQP (BQP with postselection) and showed that it is equal to PP.”

**Sources:**

- [David Miloschewsky, Supartha Podder, Quantum Computation with Correlated Measurements: Implications for the Complexity Landscape, arXiv:2507.03692 (2025)](https://arxiv.org/abs/2507.03692)
- [Scott Aaronson, Quantum computing, postselection, and probabilistic polynomial-time, Proceedings of the Royal Society A (2005)](https://doi.org/10.1098/rspa.2005.1546)

### Alternating machines put the polynomial hierarchy inside PSPACE

**Remember:** Bounded switches sit inside unbounded switches, which give PSPACE.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q10. arXiv cs.CC. Level 3: graduate.

**Definition.** Level k ≥ 1 of the polynomial hierarchy is decided by alternating polynomial-time machines that switch between existential and universal branching at most k − 1 times per path. An existential state accepts if some successor accepts, a universal state if every successor accepts, and the first branching type picks the Σ or Π class.

**Problem.** Every level of the polynomial hierarchy lies in PSPACE, the class of decision problems solvable with polynomial memory.

**How the definition helps.** Each level is alternating polynomial time with a bound on switches, so it lies inside AP, alternating polynomial time with no bound. The theorem AP = PSPACE then gives the inclusion. This alternating description agrees with the usual oracle definition of the hierarchy (our own).

**Wikipedia:** [Polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy). It says: “so that we only require that our alternating Turing machine runs in polynomial time, then we have the definition of the class AP, which is equal to PSPACE.”

**Sources:**

- [A. K. Chandra, D. C. Kozen, L. J. Stockmeyer, Alternation, Journal of the ACM 28 (1981)](https://doi.org/10.1145/322234.322243)

### Bounded quantifiers prove polynomial hierarchy collapse when complementary classes agree

**Remember:** Two adjacent existential blocks can share one witness.

*True by definition.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)). arXiv cs.CC. Level 3: graduate.

**Definition.** A language lies in Σₖ if membership has a polynomial-time predicate preceded by k alternating blocks of quantifiers over polynomially bounded strings, starting existentially. For Πₖ the first block is universal.

**Problem.** If Σₖ = Πₖ for some k ≥ 1, then every higher level of the polynomial hierarchy has the same classes.

**How the definition helps.** Two adjacent existential blocks merge into one by pairing their witnesses (our own proof). A Σₖ₊₁ test is an existential block before a Πₖ test; by hypothesis that test is a Σₖ test, whose first block merges with the outer one. So Σₖ₊₁ = Σₖ, complements give Πₖ₊₁ = Πₖ, and induction covers every higher level.

**Wikipedia:** [Polynomial hierarchy](https://en.wikipedia.org/wiki/Polynomial_hierarchy). It says: “If any Σₖᴾ = Σₖ₊₁ᴾ, or if any Σₖᴾ = Πₖᴾ, then the hierarchy collapses to level k: for all i &gt; k, Σᵢᴾ = Σₖᴾ.”

**Sources:** none listed. No primary source with a working link was found.

### The class BPP does not depend on its error bound

**Remember:** A fixed positive advantage over guessing grows under independent majority votes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q10. arXiv cs.CC. Level 3: graduate.

**Definition.** BPP is the class of decision problems that a polynomial-time machine flipping fair coins solves with error probability at most 1/3 on every input. So on every input the correct answer has a fixed advantage over a fair guess.

**Problem.** Any constant error bound strictly between 0 and 1/2 in place of 1/3 defines the same class BPP.

**How the definition helps.** Independent repetitions turn a fixed advantage over guessing into exponentially small majority error by the Chernoff bound (our own proof). Any positive constant target error therefore takes only a constant number of repetitions, preserving polynomial time.

**Wikipedia:** [BPP (complexity)](https://en.wikipedia.org/wiki/BPP_%28complexity%29). It says: “the choice of 1/3 in the definition is arbitrary.”

**Sources:**

- [Gill, J. (1977). Computational complexity of probabilistic Turing machines. SIAM Journal on Computing 6(4), 675–695.](https://doi.org/10.1137/0206049)

### Time-constructible bounds make the time hierarchy theorem true

**Remember:** A machine must be able to set its own alarm clock.

*Rules out counterexamples.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 3: graduate.

**Definition.** A function f is time-constructible if a machine can compute it within the time it names: some deterministic Turing machine computes f(n) in binary from n in unary in O(f(n)) steps.

**Problem.** For time-constructible f with f(n) ≥ n, DTIME(o(f(n)/log f(n))) is strictly contained in DTIME(f(n)). DTIME(t(n)) consists of problems decidable in deterministic time O(t(n)).

**How the definition helps.** The diagonal machine first computes f(n) and uses it as a clock to stop its simulation in time (our own explanation). Without constructibility, the gap theorem gives bounds T for which even T² adds no new problems. For f = T², the hierarchy conclusion then fails.

**Wikipedia:** [Constructible function](https://en.wikipedia.org/wiki/Constructible_function), [Gap theorem](https://en.wikipedia.org/wiki/Gap_theorem). It says: “To formulate them precisely, it is necessary to have a precise definition for a natural function f for which the theorem is true.”

**Sources:**

- [Hartmanis, J.; Stearns, R. E. (1965). On the computational complexity of algorithms. Transactions of the AMS 117, 285–306.](https://doi.org/10.1090/S0002-9947-1965-0170805-7)
- [Borodin, A. (1972). Computational complexity and the existence of complexity gaps. Journal of the ACM 19(1), 158–174.](https://doi.org/10.1145/321679.321691)

### Log-space reductions keep P-completeness from being trivial

**Remember:** A reduction must be weaker than the class it measures.

*Rules out counterexamples.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** A problem B in P is P-complete under log-space reductions if every problem A in P translates into B by a function f computable in logarithmic space, with x ∈ A exactly when f(x) ∈ B.

**Problem.** Under log-space reductions, the circuit value problem is P-complete, so a fast parallel algorithm for it would give NC = P. Under polynomial-time reductions, every problem in P other than the empty language and the language of all strings would be P-complete.

**How the definition helps.** A polynomial-time reduction could solve the source problem itself and output a fixed yes-instance or no-instance, so every nontrivial problem would be complete; log space does not give this power for free (our own comparison). Ladner showed that the circuit value problem is complete under log-space reductions. These reductions run in uniform NC, so an NC algorithm for circuit value would put all of P in NC.

**Wikipedia:** [P-complete](https://en.wikipedia.org/wiki/P-complete), [Polynomial-time reduction](https://en.wikipedia.org/wiki/Polynomial-time_reduction). It says: “polynomial-time reductions cannot be used to define complete languages: if they were used in this way, every nontrivial problem in P would be complete.”

**Sources:**

- [R. E. Ladner, The circuit value problem is log space complete for P, SIGACT News 7 (1975)](https://doi.org/10.1145/990518.990519)

### Problems hard even with small numbers have no fast approximation scheme

**Remember:** Strongly hard means hard even with small numbers.

*Makes the theorem clean to state or prove.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68W25. arXiv cs.CC, cs.DS. Level 3: graduate.

**Definition.** A numerical optimization problem is strongly NP-hard if its decision version stays NP-hard even when every input number is at most a fixed polynomial in the input length.

**Problem.** A strongly NP-hard optimization problem with nonnegative integer objective bounded by a polynomial has no fully polynomial-time approximation scheme unless P = NP. Ordinary 0–1 knapsack admits a pseudo-polynomial algorithm and a fully polynomial-time approximation scheme.

**How the definition helps.** Integer objective values let sufficiently fine approximation recover an exact optimum (our own proof). For objective bound B ≥ 1, take ε = 1/(2B), making the additive error less than one. A fully polynomial scheme would then solve the NP-hard bounded instances in polynomial time.

**Wikipedia:** [Strong NP-completeness](https://en.wikipedia.org/wiki/Strong_NP-completeness). It says: “any strongly NP-hard optimization problem with a polynomially bounded objective function cannot have a fully polynomial-time approximation scheme (or FPTAS) unless P = NP.”

**Sources:**

- [Garey, M. R.; Johnson, D. S. (1978). "Strong" NP-completeness results: motivation, examples, and implications. Journal of the ACM 25(3), 499–508.](https://doi.org/10.1145/322077.322090)

### Fixed-point logic captures polynomial time once structures carry an order

**Remember:** Give the logic an order, and recursion computes exactly polynomial time.

*Rules out counterexamples.* MSC 68Q19 (Descriptive complexity and finite models), 03C13. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** FO\[LFP\] is first-order logic plus least fixed points of relation operators given by formulas positive in the relation variable, so it can define relations by recursion. An ordered finite structure carries a built-in relation that linearly orders its elements.

**Problem.** On ordered finite structures, the properties definable in FO\[LFP\] are exactly those decidable in polynomial time (the Immerman–Vardi theorem).

**How the definition helps.** The order lets fixed-point formulas name tape positions and time steps, so they can simulate a polynomial-time machine on an encoding of the structure, as in the Immerman–Vardi theorem. Without an order, the parity of the size of a plain set is decidable in polynomial time but not definable in FO\[LFP\] (our own example).

**Wikipedia:** [Descriptive complexity theory](https://en.wikipedia.org/wiki/Descriptive_complexity_theory). It says: “First-order logic with a least fixed point operator gives P, the problems solvable in deterministic polynomial time, but uniquely on ordered structures.”

**Sources:**

- [N. Immerman, Relational queries computable in polynomial time, Information and Control 68 (1986) 86–104](https://doi.org/10.1016/s0019-9958(86)80029-8)
- [M. Y. Vardi, The complexity of relational query languages, STOC 1982](https://doi.org/10.1145/800070.802186)

### MSO gives linear time on bounded treewidth

**Remember:** Say it in MSO, and bounded treewidth makes it linear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q19 (Descriptive complexity and finite models), 05C83. arXiv cs.DS, cs.LO. Level 3: graduate.

**Definition.** An MSO₂ graph sentence is a first-order sentence that may also quantify over sets of vertices and sets of edges, using incidence, equality and set membership. A property is MSO₂-definable if one such sentence holds exactly on the graphs with that property.

**Problem.** For each fixed k, every MSO-definable graph property can be decided in linear time on graphs of treewidth at most k (Courcelle's theorem).

**How the definition helps.** Courcelle’s theorem turns one fixed sentence into a finite tree automaton that runs over a tree decomposition of width at most k. For a fixed sentence and k the automaton is fixed, so running it takes linear time. Bodlaender’s algorithm finds such a decomposition in linear time (our own).

**Paper or page:** [Quantum-Inspired Perfect Matching under Vertex-Color Constraints](https://arxiv.org/abs/2209.13063). It says: “Let f be a formula in extended MSO. Then there is an algorithm which, on every graphs with n vertices and treewidth tw, decides whether f holds in G in O(F(\|f\|, tw)·n), for some computable function F.”

**Sources:**

- [Quantum-Inspired Perfect Matching under Vertex-Color Constraints, arXiv:2209.13063 (2022)](https://arxiv.org/abs/2209.13063)
- [Bruno Courcelle, The monadic second-order logic of graphs. I. Recognizable sets of finite graphs, Information and Computation (1990)](https://doi.org/10.1016/0890-5401(90)90043-h)

### Levin's average polynomial time survives a quadratic slowdown

**Remember:** Polynomial slowdowns shrink the tail exponent but keep it positive.

*Rules out counterexamples.* MSC 68Q25 (Analysis of algorithms and problem complexity), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** Levin’s definition asks that long running times be polynomially rare. With all length-n binary inputs equally likely and T the running time, it requires constants C,c,ε &gt; 0 with Pr\[T &gt; t\] ≤ Cnᶜ/t<sup>ε</sup> for every n,t ≥ 1.

**Problem.** Under Levin's definition, if A runs in average polynomial time, so does an algorithm B that takes the square of A's time. The naive definition by expected running time lacks this property.

**How the definition helps.** Squaring the time turns the threshold t into √t, so the same bound holds with exponent ε/2 (our own derivation). For the naive definition, take time n² on every length-n input except one, which takes 2ⁿ steps. That input adds one to the mean but 2ⁿ to the mean squared time, while Levin’s bound still holds for small ε.

**Wikipedia:** [Average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity). It says: “Such a definition has various shortcomings; in particular, it is not robust to changes in the computational model.”

**Sources:**

- [L. A. Levin, Average case complete problems, SIAM Journal on Computing 15 (1986) 285–286](https://doi.org/10.1137/0215020)

### Smoothed complexity explains why the simplex method is fast in practice

**Remember:** Perturb each input, average its running time, then take the worst average.

*Makes the theorem clean to state or prove.* MSC 68Q25 (Analysis of algorithms and problem complexity), 90C60, 90C05. arXiv cs.CC, math.OC. Level 3: graduate.

**Definition.** Smoothed running time takes each admissible input, adds random noise from a fixed distribution, averages the running time over that noise, and then takes the worst input. The inputs have a fixed size and lie in a normalized set.

**Problem.** Under Spielman and Teng’s normalized Gaussian perturbation model, their shadow vertex simplex algorithm has polynomial smoothed complexity. Many common pivot rules take exponentially many steps in the worst case.

**How the definition helps.** The definition averages separately around each possible input, so a rare slow perturbation contributes only in proportion to its probability (our own). Spielman and Teng’s smoothed simplex theorem bounds those averages uniformly by a polynomial in input size and inverse noise scale.

**Wikipedia:** [Smoothed analysis](https://en.wikipedia.org/wiki/Smoothed_analysis). It says: “Smoothed analysis is a hybrid of worst-case and average-case analyses that inherits advantages of both.”

**Sources:**

- [D. A. Spielman and S.-H. Teng, Smoothed analysis of algorithms: why the simplex algorithm usually takes polynomial time, STOC 2001](https://doi.org/10.1145/380752.380813)

### Prefix-free programs make Kolmogorov complexity subadditive

**Remember:** A self-delimiting program cannot hide information in its own length.

*Rules out counterexamples.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** A program set is prefix-free if no program is a proper prefix of another, so each program marks its own end. K(x) is the length of a shortest program for x on a fixed optimal prefix-free machine, one that simulates every prefix-free machine with constant overhead in program length.

**Problem.** Prefix-free complexity is subadditive, K(x, y) ≤ K(x) + K(y) + O(1). Describing x and y together costs at most the two separate costs plus a constant.

**How the definition helps.** Two prefix-free programs can be concatenated and still decoded in order (our own proof). A fixed machine runs each program and outputs the pair, which adds only constant overhead on the optimal machine. For plain programs the boundary carries information, and some pairs exceed subadditivity by unbounded amounts.

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

**Definition.** A concept class is PAC learnable if one learner, for every distribution and target, reaches error ≤ ε with probability ≥ 1 − δ from a number of independent labeled examples polynomial in 1/ε and 1/δ. Its VC dimension is the size of the largest finite set on which the class realizes every labeling, or infinity if there is no largest.

**Problem.** Under mild measurability conditions, a concept class C is PAC learnable exactly when its VC dimension is finite (Blumer, Ehrenfeucht, Haussler and Warmuth).

**How the definition helps.** On a shattered set the labels of unseen points can vary freely, so distributions on ever larger shattered sets defeat any fixed sample size (our own explanation). At finite dimension, the Sauer–Shelah lemma bounds the labelings of a sample by a polynomial. The VC uniform convergence theorem then gives a polynomial sample bound for any consistent learner.

**Wikipedia:** [Probably approximately correct learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning), [Vapnik–Chervonenkis dimension](https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension). It says: “Thus, the sample-complexity is a linear function of the VC dimension of the hypothesis space.”

**Sources:**

- [A. Blumer, A. Ehrenfeucht, D. Haussler and M. K. Warmuth, Learnability and the Vapnik–Chervonenkis dimension, Journal of the ACM 36 (1989) 929–965](https://doi.org/10.1145/76359.76371)

### Finite VC dimension is exactly uniform convergence of empirical frequencies

**Remember:** If a class cannot shatter large sets, sample frequencies converge uniformly.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62G20. arXiv cs.LG, stat.TH. Level 3: graduate.

**Definition.** The VC dimension of a class 𝒞 of sets is the size of the largest finite set S that 𝒞 shatters, meaning that every subset of S is A ∩ S for some A ∈ 𝒞. 𝒞 is uniform Glivenko–Cantelli if, for every ε &gt; 0, the chance that some A ∈ 𝒞 has frequency in n independent samples more than ε from its probability tends to zero, uniformly over all laws.

**Problem.** A class of sets, with suitable measurability, is a uniform Glivenko–Cantelli class if and only if its VC dimension is finite. The classical case is the class of half-lines, which gives the Glivenko–Cantelli theorem for distribution functions.

**How the definition helps.** Finite VC dimension means the class sees only polynomially many patterns on a sample by Sauer–Shelah, so symmetrization gives uniform convergence (our own explanation). Conversely, laws spread evenly over ever larger shattered sets keep some empirical frequency far from its probability.

**Wikipedia:** [Glivenko–Cantelli theorem](https://en.wikipedia.org/wiki/Glivenko%E2%80%93Cantelli_theorem). It says: “Under certain consistency conditions, a universally measurable class of sets 𝒞 is a uniform Glivenko-Cantelli class if and only if it is a Vapnik–Chervonenkis class.”

**Sources:**

- [V. N. Vapnik and A. Ya. Chervonenkis, On the Uniform Convergence of Relative Frequencies of Events to Their Probabilities, Theory of Probability and Its Applications 16 (1971)](https://doi.org/10.1137/1116025)

### The Church–Rosser property separates distinct normal forms in lambda calculus

**Remember:** Convertible terms can meet, but normal forms cannot move.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 03B40. arXiv cs.LO. Level 3: graduate.

**Definition.** Two terms are convertible if a finite chain of forward or backward rewrite steps connects them. The Church–Rosser property requires every convertible pair to reach a common term by zero or more forward steps. A normal form admits no forward step.

**Problem.** Distinct normal forms cannot be convertible in a Church–Rosser system. In lambda calculus this separates the functions λx y. x and λx y. y, even after allowing renaming of bound variables.

**How the definition helps.** Two convertible normal forms would have to reach a common term, but a normal form reaches only itself, so they are equal (our own). In lambda calculus the real work is proving that beta reduction, which applies a function to its input, is confluent (our own). Confluence then gives the Church–Rosser property by induction on a chain of forward and backward steps (our own).

**Wikipedia:** [Confluence (abstract rewriting)](https://en.wikipedia.org/wiki/Confluence_%28abstract_rewriting%29). It says: “In a Church–Rosser system, an object has at most one normal form”

**Sources:**

- [A. Church, J. B. Rosser, Some properties of conversion, Transactions of the American Mathematical Society 39 (1936)](https://doi.org/10.1090/s0002-9947-1936-1501858-0)

### A basis of output tests decides stochastic state equivalence

**Remember:** Probabilities are linear in the columns, so basis columns decide all.

*True by definition.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL. Level 3: graduate.

**Definition.** A test is an equal-length pair of input and output words, and its column lists the output word’s probability for that input from each starting state. A starting distribution gives each test the dot product of the distribution with its column, and basis tests are tests whose columns form a basis of the span of all columns.

**Problem.** Two starting distributions in a stochastic automaton give identical output probabilities on all input words exactly when they agree on the basis tests.

**How the definition helps.** Every column is a linear combination of basis columns, so agreement on the basis gives agreement on every test (our own proof). Finding the basis needs a bound on when tests on longer words stop enlarging the span.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Two state distributions π and π′ of A are equivalent if and only if π Hₐ = π′ Hₐ.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)

### An isolated threshold makes probabilistic acceptance regular

**Remember:** A gap turns approximate probabilities into exact yes-or-no answers.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** A finite probabilistic automaton accepts a word when its probability of ending in an accepting state exceeds a threshold λ. The threshold is isolated if every word’s probability stays at least a fixed ε &gt; 0 away from λ.

**Problem.** A finite probabilistic automaton with an isolated threshold recognizes a regular language, one that a deterministic finite automaton can recognize.

**How the definition helps.** With an isolated threshold, reachable distributions less than ε apart in total variation make the same decision after every continuation, because letters cannot increase that distance (our own proof). Compactness covers the probability simplex by finitely many sets of diameter below ε. So there are finitely many continuation behaviors, and they serve as deterministic states.

**Paper or page:** [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1), [On the Theory of Stochastic Automata](https://arxiv.org/abs/2103.14423v1). It says: “Let A be a stochastic acceptor with isolated cut point λ. Then the language L₍A,λ₎ is regular.”

**Sources:**

- [Merve Nur Cakir, Mehwish Saleemi, Karl-Heinz Zimmermann. On the Theory of Stochastic Automata. 2021.](https://arxiv.org/abs/2103.14423v1)
- [Michael O. Rabin. Probabilistic Automata. 1963.](https://doi.org/10.1016/S0019-9958(63)90290-0)

### Brzozowski derivatives give a finite automaton for each regular expression

**Remember:** After reading a word, check whether the empty suffix is allowed.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** The derivative of a language L by a word u is the set of suffixes v that complete u to a word uv of L. The derivative automaton starts at L and moves from each language to its derivative by the next letter. Its states are the reachable languages, and it accepts exactly at states containing the empty word.

**Problem.** The derivative automaton of a regular expression is finite and accepts exactly the language of the expression.

**How the definition helps.** After reading u, the state contains the empty word exactly when u belongs to L. For finiteness, take a finite deterministic automaton for the expression using Kleene’s theorem (our own argument). Each derivative is the continuation language of one reachable state, so there are only finitely many.

**Wikipedia:** [Brzozowski derivative](https://en.wikipedia.org/wiki/Brzozowski_derivative). It says: “A string u is a member of the string set denoted by a generalized regular expression R if and only if ε is a member of the string set denoted by the derivative u⁻¹R.”

**Sources:**

- [J. A. Brzozowski, Derivatives of regular expressions, Journal of the ACM 11 (1964)](https://doi.org/10.1145/321239.321249)

### Final-automaton semantics makes automaton maps preserve accepted languages

**Remember:** Each state’s language is its unique place in the final automaton.

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

**How the definition helps.** Erasing the bit amounts to saying that some set of positions marks where the bit was one, an existential set quantifier (our own argument). By the Büchi–Elgot–Trakhtenbrot theorem a regular language has a defining sentence; replace each paired-letter predicate by its visible letter and membership or nonmembership in the set. Quantify the set existentially, and the same theorem makes the result regular.

**Wikipedia:** [Büchi–Elgot–Trakhtenbrot theorem](https://en.wikipedia.org/wiki/B%C3%BCchi%E2%80%93Elgot%E2%80%93Trakhtenbrot_theorem), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “This boils down to induction over ¬, ∧, and existential quantification over monadic predicates. These correspond to complement, intersection, and projection (a restricted kind of homomorphism).”

**Sources:**

- [J. R. Büchi, Weak second-order arithmetic and finite automata, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 6 (1960)](https://doi.org/10.1002/malq.19600060105)

### Muller acceptance lets deterministic automata recognize every ω-regular language

**Remember:** Ask exactly which states recur, and determinism loses no power.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68Q70. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A Muller automaton accepts a run exactly when the set of states visited infinitely often is one of a given family of state sets. A Büchi automaton asks only that this set meet a given set of accepting states.

**Problem.** Every ω-regular language, that is, every language of a Büchi automaton, is recognized by a deterministic Muller automaton (McNaughton's theorem).

**How the definition helps.** A Muller family can name exactly which sets of states may recur, which a deterministic Büchi condition cannot (our own explanation). For words with finitely many ones, a two-state automaton remembering the last letter accepts exactly when only the zero state recurs; no deterministic Büchi automaton recognizes this language. McNaughton’s theorem supplies the determinization for every Büchi language.

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

**Definition.** A deterministic parity automaton with complete transitions has exactly one run on each infinite word. Each state has a number, its priority, and the run accepts when the smallest priority seen infinitely often is even.

**Problem.** The complement of a language accepted by a complete deterministic parity automaton has a complete deterministic parity automaton with the same number of states.

**How the definition helps.** Adding one to every priority leaves the run unchanged and flips the parity of its smallest recurring priority, so acceptance becomes its negation (our own). The Büchi rule, that an accepting state recurs infinitely often, cannot be negated by swapping accepting states (our own). To complement all regular languages of infinite words this way, the work moves to turning nondeterministic Büchi automata into deterministic parity automata.

**Wikipedia:** [Ω-automaton](https://en.wikipedia.org/wiki/%CE%A9-automaton). It says: “accepts ρ if and only if the smallest number in Inf(ρ) is even.”

**Sources:** none listed. No primary source with a working link was found.

### Visibly pushdown automata preserve intersection by synchronizing stack moves

**Remember:** Stack moves match, so one stack can hold pairs of symbols.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 3: graduate.

**Definition.** A visibly pushdown alphabet splits letters into calls, returns and internal letters. Every call pushes one symbol, every return pops one unless the stack is empty, and every internal letter leaves the stack unchanged, so the input alone decides each stack move.

**Problem.** Two visibly pushdown languages over the same split alphabet have a visibly pushdown intersection. General context-free languages need not have a context-free intersection.

**How the definition helps.** Over a shared split alphabet both machines push and pop at the same letters, so one stack of symbol pairs and one pair of control states run them together. Without this, the context-free languages of words aⁱbʲcᵏ with i = j and with j = k intersect in the words with i = j = k (our own counterexample). That intersection is not context-free.

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

**Definition.** Two same-type PCF phrases are observationally equivalent if every closing numeric context gives both the same numeral or makes both diverge. A semantics is adequate if each closed numeric program evaluates to a numeral n exactly when its meaning is n, and compositional if a phrase’s meaning in a context depends only on the phrase’s meaning.

**Problem.** In PCF, a typed functional language with recursion, phrases of the same type with equal meanings in the adequate model are observationally equivalent. This includes agreement about whether a numeric observation terminates.

**How the definition helps.** Compositionality keeps equal meanings equal inside any context, and adequacy turns equal meanings of closed programs into equal observations (our own). The work moves into proving adequacy for the model (our own). Equal observations need not imply equal meanings (our own).

**Wikipedia:** [Denotational semantics](https://en.wikipedia.org/wiki/Denotational_semantics). It says: “An important tenet of denotational semantics is that semantics should be compositional: the denotation of a program phrase should be built out of the denotations of its subphrases.”

**Sources:**

- [G. D. Plotkin, LCF considered as a programming language, Theoretical Computer Science 5 (1977)](https://doi.org/10.1016/0304-3975(77)90044-5)

### Compositional semantics makes replacing equal-meaning subprograms safe by definition

**Remember:** Equal parts give equal wholes.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A denotational semantics gives each well-typed program a mathematical object, its meaning. It is compositional when each way of building a program from parts has a fixed operation that computes the whole meaning from the meanings of the parts.

**Problem.** In a compositional semantics, replacing a subprogram by one with the same meaning keeps the meaning of the whole program.

**How the definition helps.** Each program constructor applies a fixed operation to the meanings of its parts. Replacing an argument by an equal meaning therefore leaves the result equal. Induction on the surrounding program carries this equality to the whole program (our own proof).

**nLab:** [denotational semantics](https://ncatlab.org/nlab/show/denotational+semantics). It says: “the semantics of terms constructed from sub-terms is correspondingly built from the semantics of these sub-terms.”

**Sources:**

- [Dana S. Scott and Christopher Strachey, Toward a Mathematical Semantics for Computer Languages](https://www.cs.ox.ac.uk/files/3228/PRG06.pdf)

### Interpreting function types as exponentials validates applying lambda abstractions

**Remember:** Evaluating a curried map gives back the original map.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 18C50. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** An exponential Yˣ is an object of maps from X to Y with an evaluation map ev: Yˣ × X → Y. Each f: Z × X → Y equals ev ∘ (g × idₓ) for exactly one g: Z → Yˣ, the curried form of f, and lambda abstraction denotes this g.

**Problem.** In this semantics, applying a lambda abstraction to an argument has the same meaning as substituting the argument into its body.

**How the definition helps.** The evaluation equation recovers the body’s meaning from its curried map. Composing with the argument’s meaning supplies the value for the bound variable. The substitution lemma identifies that composite with the substituted body’s meaning (our own explanation).

**nLab:** [cartesian closed category](https://ncatlab.org/nlab/show/cartesian+closed+category). It says: “the universal property of Yˣ may be phrased thus: given any ψ: Z × X → Y, there exists a unique map”

**Sources:** none listed. No primary source with a working link was found.

### Testing in all contexts makes contextual equivalence a congruence by definition

**Remember:** A context inside a context is again a context.

*True by definition.* MSC 68Q55 (Semantics in the theory of computing), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Two same-type terms are contextually equivalent if every well-typed context, a program with one hole, that closes both at an observable type gives identical observations for both.

**Problem.** If two terms are contextually equivalent, then so are their results in any well-typed context.

**How the definition helps.** Any closing observation context around the two larger terms composes with their shared inner context to give a closing context for the original terms. Contextual equivalence gives equal observations in that composite context (our own proof).

**Wikipedia:** [Observational equivalence](https://en.wikipedia.org/wiki/Observational_equivalence). It says: “in all contexts C\[...\] where C\[M\] is a valid term, it is the case that C\[N\] is also a valid term with the same value.”

**Sources:** none listed. No primary source with a working link was found.

### Every property is a safety property intersected with a liveness property

**Remember:** Safety: bad things show in a prefix. Liveness: no prefix is hopeless.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 68Q85. arXiv cs.LO, cs.DC. Level 3: graduate.

**Definition.** A property is a set of infinite executions, that is, sequences of program states. It is a safety property if every execution that violates it has a finite prefix that no continuation can repair. It is a liveness property if every finite prefix can be extended to an execution that has the property.

**Problem.** Every property is the intersection of a safety property and a liveness property (Alpern and Schneider).

**How the definition helps.** Let S be the executions whose every finite prefix extends into P; a violation of S has a prefix that cannot extend into P, so S is safety (our own proof). Let L be P together with all executions outside S. Each prefix extends into P or only out of S, so L is liveness, and S ∩ L = P.

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

**Definition.** A partial-correctness Hoare triple {P} S {R} says that from a state satisfying P, if S stops, it stops in a state satisfying R. The weakest liberal precondition of S and R holds exactly in the states from which S either runs forever or stops in a state satisfying R.

**Problem.** For a standard while language, assume the assertion language can express every weakest liberal precondition. Then Hoare logic proves all true partial-correctness triples if it may use all true assertions in the underlying arithmetic.

**How the definition helps.** The weakest liberal precondition supplies every missing middle assertion and loop invariant in Cook’s relative completeness proof (our own explanation). For a sequence, use the second command’s weakest liberal precondition in the middle; for a loop, use the whole loop’s weakest liberal precondition as invariant. Structural induction proves each weakest triple, and the consequence rule gives every true triple.

**Wikipedia:** [Predicate transformer semantics](https://en.wikipedia.org/wiki/Predicate_transformer_semantics). It says: “wlp(S, R), which yields the weakest condition under which S either does not terminate or establishes R.”

**Sources:**

- [S. A. Cook, Soundness and completeness of an axiom system for program verification, SIAM Journal on Computing 7 (1978)](https://doi.org/10.1137/0207005)

### Widening operators make abstract interpretation terminate on infinite lattices

**Remember:** Jump upward on purpose so the analysis must stop.

*True by definition.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 06B35. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** On a complete lattice with bottom ⊥, a widening ∇ jumps upward fast enough to stop: x ∇ y lies above both x and y. For every increasing sequence yₙ, the sequence x₀ = ⊥, xₙ₊₁ = xₙ ∇ yₙ must eventually be constant.

**Problem.** For a monotone lattice endomap f, the iteration x₀ = ⊥, xₙ₊₁ = xₙ ∇ f(xₙ) stabilizes even in the presence of infinite increasing chains. Its final value bounds the least fixed point of f from above.

**How the definition helps.** Each iterate bounds its predecessor, so monotonicity makes f(xₙ) increasing and the widening condition gives stabilization (our own argument). At the stable value x, the upper-bound condition gives f(x) ≤ x. Knaster–Tarski places the least fixed point below every such x.

**Wikipedia:** [Abstract interpretation](https://en.wikipedia.org/wiki/Abstract_interpretation). It says: “For any ascending sequence (y′ₙ)ₙ≥₀, the sequence defined by x′₀ := ⊥ and x′ₙ₊₁ := x′ₙ ∇ y′ₙ is ultimately stationary.”

**Sources:**

- [P. Cousot and R. Cousot, Abstract interpretation: a unified lattice model for static analysis of programs by construction or approximation of fixpoints, POPL 1977](https://doi.org/10.1145/512950.512973)

### A prefix and suffix matrix gives the smallest weighted automaton

**Remember:** A state only needs to store independent future scores.

*Makes the theorem clean to state or prove.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 3: graduate.

**Definition.** A weighted automaton gives a word a real score by multiplying one matrix per letter between a start row and an end column. The Hankel matrix of a score function has one row per prefix and one column per suffix, with the score of their concatenation as entry, so each row records a prefix’s future scores.

**Problem.** A real word score comes from a finite weighted automaton exactly when its Hankel matrix has finite rank. That rank is the smallest possible state dimension.

**How the definition helps.** Appending a letter acts linearly on Hankel rows, so a basis of the row space gives transition matrices, with the empty prefix as start row and the empty suffix as end column (our own proof). Conversely, an automaton writes each Hankel entry as a prefix row vector times a suffix column vector. So its dimension bounds the rank, which proves minimality.

**Paper or page:** [Neural Network Based Nonlinear Weighted Finite Automata](https://arxiv.org/abs/1709.04380v2). It says: “For any f : Σ∗ → ℝ, rank(f) = rank(H𝒇).”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodic syntactic monoids let us decide whether automata recognize star-free languages

**Remember:** Aperiodic: every element's powers eventually stop moving.

*True by definition. Confidence: medium.* MSC 68Q70 (Algebraic theory of languages and automata), 20M35. arXiv cs.FL. Level 3: graduate.

**Definition.** A finite monoid is aperiodic if powers settle without cycling: some n gives xⁿ = xⁿ⁺¹ for every element x. The syntactic monoid of a regular language is the finite monoid of state maps that words induce on its minimal deterministic automaton.

**Problem.** Given a finite automaton, one can decide whether its language has a star-free expression, one built from letters by union, concatenation and complement without star.

**How the definition helps.** By Schützenberger’s theorem, a language is star-free exactly when its syntactic monoid is aperiodic, so it suffices to test aperiodicity. Minimize the automaton and generate the monoid of state maps from its letters (our own procedure). For a monoid of size n, test xⁿ = xⁿ⁺¹ for each x, since by then every power sequence has entered its cycle.

**Wikipedia:** [Star-free language](https://en.wikipedia.org/wiki/Star-free_language), [Syntactic monoid](https://en.wikipedia.org/wiki/Syntactic_monoid). It says: “Marcel-Paul Schützenberger characterized star-free languages as those with aperiodic syntactic monoids.”

**Sources:**

- [M.-P. Schützenberger, On finite monoids having only trivial subgroups, Information and Control 8 (1965)](https://doi.org/10.1016/s0019-9958(65)90108-7)

### Finite monoid tests let rational sets survive intersection

**Remember:** Carry the finite monoid value along every path.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL. Level 3: graduate.

**Definition.** A subset of a monoid is recognizable if a map to a finite monoid preserving products and the identity decides membership: the subset is the preimage of a subset there. It is rational if it consists of the label products along paths from a start vertex to chosen end vertices of a finite edge-labelled graph.

**Problem.** Intersecting a rational subset of a monoid with a recognizable subset gives a rational subset.

**How the definition helps.** A path can carry the finite-monoid image of its product, so one product graph checks both conditions at once (our own proof). Pair each vertex with an element of the finite monoid, start at the identity, and multiply by each edge label’s image. Accept at end vertices whose stored element lies in the recognizing subset.

**Wikipedia:** [Rational set](https://en.wikipedia.org/wiki/Rational_set). It says: “The intersection of a rational subset and a recognizable subset is rational.”

**Sources:** none listed. No primary source with a working link was found.

### Finite-monoid recognition preserves recognizability under inverse homomorphisms

**Remember:** A finite monoid decides membership; precompose, and it still does.

*True by definition.* MSC 68Q70 (Algebraic theory of languages and automata), 20M35. arXiv cs.FL, math.GR. Level 3: graduate.

**Definition.** A subset S of a monoid is recognizable if a homomorphism ψ into a finite monoid decides it: S = ψ⁻¹(T) for some subset T there. For words under concatenation, these are exactly the languages of finite automata.

**Problem.** If φ is a homomorphism from the monoid N to the monoid M and S is recognizable in M, then φ⁻¹(S) is recognizable in N.

**How the definition helps.** If S = ψ⁻¹(T), then φ⁻¹(S) = (ψ ∘ φ)⁻¹(T), and ψ ∘ φ still maps into the same finite monoid (our own proof).

**Wikipedia:** [Recognizable set](https://en.wikipedia.org/wiki/Recognizable_set), [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “Recognizable sets are closed under inverse of homomorphisms. I.e. if N and M are monoids and φ:N→M is a homomorphism then if S∈REC(M) then φ⁻¹(S)={x∣φ(x)∈S}∈REC(N).”

**Sources:** none listed. No primary source with a working link was found.

### Implications for the star give regular expressions a finite complete axiom system

**Remember:** Star is a least fixed point, enforced by two implications.

*Makes the theorem clean to state or prove.* MSC 68Q70 (Algebraic theory of languages and automata), 68Q45. arXiv cs.FL, cs.LO. Level 3: graduate.

**Definition.** A Kleene algebra is an idempotent semiring with star, ordered by a ≤ b when a + b = b, in which 1 + aa\* ≤ a\* and 1 + a\*a ≤ a\*. Two induction rules, implications rather than equations, make a\* the least such element: ax ≤ x implies a\*x ≤ x, and xa ≤ x implies xa\* ≤ x.

**Problem.** The Kleene algebra axioms are complete, so every true equation between regular expressions can be derived from them (Kozen, 1994).

**How the definition helps.** The induction implications capture repetition of any length with finitely many rules, which equations alone cannot do (our own explanation). Redko proved that no finite set of equations is complete, and Kozen’s theorem proves that these axioms derive every regular-language identity.

**Wikipedia:** [Kleene algebra](https://en.wikipedia.org/wiki/Kleene_algebra). It says: “Redko proved that no finite set of equational axioms can characterize the algebra of regular languages.”

**Sources:**

- [D. Kozen, A completeness theorem for Kleene algebras and the algebra of regular events, Information and Computation 110 (1994) 366–390](https://doi.org/10.1006/inco.1994.1037)

### Balanced counts preserve the uniform distribution

**Remember:** Equal preimage counts mean equal output probabilities.

*True by definition. Confidence: medium.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** An update is balanced if, on every finite window of output cells, each output pattern has equally many preimages among the assignments to the window’s input neighborhood, the cells the update reads.

**Problem.** A finite-range update on a finite alphabet preserves the uniform independent distribution exactly when its local window counts are balanced.

**How the definition helps.** Under the uniform independent law every assignment on a finite input neighborhood is equally likely, so each output pattern’s probability is proportional to its preimage count (our own proof). The output law is uniform on a window exactly when these counts agree. Finite-window probabilities determine the whole distribution.

**Paper or page:** [Reversibility, balance and expansivity of non-uniform cellular automata](https://arxiv.org/abs/2507.06896). It says: “The uniform probability measure μ is invariant under Hθ.”

**Sources:**

- [Reversibility, balance and expansivity of non-uniform cellular automata](https://arxiv.org/abs/2507.06896)

### Finite windows detect surjectivity

**Remember:** Every finite pattern reachable means every configuration reachable.

*Makes the theorem clean to state or prove.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** An update passes the box test on a finite box B if every pattern on B is the output of some assignment on B’s input neighborhood, the cells read when updating B.

**Problem.** A finite-range update on the full grid ℤᵈ over a finite alphabet is onto exactly when it can produce every pattern on every finite box.

**How the definition helps.** Compactness turns success on every box into one global preimage (our own proof). For a target configuration, the inputs matching it on growing boxes form nested nonempty closed sets, so their intersection holds a preimage. Conversely, a global preimage of any extension of a box pattern restricts to a preimage of that pattern.

**Paper or page:** [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987). It says: “The $d$-dimensional global update rule $H\_\\theta $ is surjective if and only if the partial update rule $H<sub>\\theta \|C</sub>$ is surjective for all hypercubes $C\\subseteq \\mathbb{Z} ^d$”

**Sources:**

- [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987)

### Pre-injectivity detects finite collisions

**Remember:** Finite changes to the input must always show in the output.

*Rules out counterexamples.* MSC 68Q80 (Cellular automata (computational aspects)). arXiv nlin.CG. Level 3: graduate.

**Definition.** A cellular automaton updates every cell by one rule on a fixed finite neighborhood. It is pre-injective if two different inputs that differ at only finitely many cells always have different outputs.

**Problem.** On the full grid ℤᵈ with a finite alphabet, surjectivity is equivalent to pre-injectivity.

**How the definition helps.** A finite collision could be copied into many disjoint boxes, leaving too few outputs to reach every pattern; the Garden of Eden counting argument makes this exact (our own explanation). Injectivity would be too strong a condition. On ℤ, adding each bit to its right neighbor modulo two sends both constant inputs to zero, yet it is onto.

**Paper or page:** [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987). It says: “The NUCA Hθ is surjective if and only if it is pre-injective.”

**Sources:**

- [On the surjunctivity and the Garden of Eden theorem for non-uniform cellular automata](https://arxiv.org/abs/2507.06987)

### Bisimilarity as the union of all bisimulations gives proof by coinduction

**Remember:** To prove two processes equal, show one relation that keeps matching.

*True by definition.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO. Level 3: graduate.

**Definition.** A bisimulation is a relation R on labelled states in which each step of either state in a related pair is matched by a same-label step of the other, landing again in a pair of R in the same order. Two states are bisimilar if some bisimulation relates them.

**Problem.** Bisimilarity is the largest bisimulation, and it is an equivalence relation. So to prove two states bisimilar, it is enough to give one bisimulation that relates them.

**How the definition helps.** Bisimilarity is the union of all bisimulations, and a union of bisimulations is again one, so it is the largest. Identity, converse and composition preserve the matching condition, which gives reflexivity, symmetry and transitivity (our own argument).

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “Since it is the union of all bisimulations, it is the unique largest bisimulation.”

**Sources:**

- [D. Park, Concurrency and automata on infinite sequences, in Theoretical Computer Science, LNCS 104, Springer 1981, 167–183](https://doi.org/10.1007/BFb0017309)

### Compatible configurations can merge

**Remember:** Close under causes, and check conflicts only in pairs.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68M14. arXiv cs.DC. Level 3: graduate.

**Definition.** A configuration is a set of events that contains every cause of each of its events and no conflicting pair, and an extension of it is any configuration containing it. Conflict is binary: a set is consistent exactly when no two of its events conflict.

**Problem.** Two configurations in a binary conflict model have a common extension exactly when no event in one conflicts with an event in the other. Their union is then the least common extension.

**How the definition helps.** The union of two configurations already contains all causes, so it is a configuration exactly when it has no conflicting pair (our own argument). Any common extension contains the union, so it also contains any such pair. Without binary conflict, three events could be forbidden together although every pair is allowed.

**nLab:** [event structure](https://ncatlab.org/nlab/show/event+structure). It says: “pairwise consistency implies mutual consistency.”

**Sources:** none listed. No primary source with a working link was found.

### Defining behavior by a terminal coalgebra makes bisimilar states behave equally

**Remember:** Exactly one map into the terminal coalgebra, so behavior is forced.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, math.CT. Level 3: graduate.

**Definition.** For a set functor F, a coalgebra is a state set X with a map c: X → F(X), and a coalgebra map h: (X,c) → (Y,d) satisfies d ∘ h = F(h) ∘ c. A terminal coalgebra receives exactly one coalgebra map from each coalgebra, and the image of a state is its behavior.

**Problem.** A bisimulation between two coalgebras is a relation on their states with a coalgebra structure that makes both projections coalgebra maps. Each related pair then has states with equal behavior.

**How the definition helps.** From the bisimulation there are two coalgebra maps to the terminal coalgebra, each projection followed by a behavior map (our own application). Uniqueness makes them equal, so each related pair has equal behaviors.

**nLab:** [terminal coalgebra for an endofunctor](https://ncatlab.org/nlab/show/terminal+coalgebra+for+an+endofunctor). It says: “By terminality of x, there is a unique coalgebra map f: F x → x.”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Defining bisimilarity as equal final behavior makes it an equivalence relation

**Remember:** Equality of behaviors already has the laws of an equivalence.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, cs.FL. Level 3: graduate.

**Definition.** Give each state a finite set of labelled successors, a coalgebra for the finite labelled powerset functor. A state’s behavior is its image under the unique coalgebra map into the final such system, and behavioral equivalence means equal behaviors.

**Problem.** Strong bisimilarity on a finitely branching labelled transition system is an equivalence relation.

**How the definition helps.** Equality of images under one map is reflexive, symmetric and transitive. For the finite labeled powerset functor, the final coalgebra exists and behavioral equivalence coincides with strong bisimilarity (our own application of Rutten’s coalgebraic characterization).

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “the relation of bisimilarity—the join of all bisimulations—is an equivalence relation”

**Sources:**

- [Jan Rutten, Universal coalgebra: a theory of systems](https://doi.org/10.1016/S0304-3975(00)00056-6)

### Defining bisimulations by relation inclusions makes their composites bisimulations

**Remember:** A step slides past a bisimulation, so it slides past two.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.LO, cs.FL. Level 3: graduate.

**Definition.** Let Tₐ relate each state to its a-successors, and write RS for “first R, then S”. A relation R is a bisimulation if each step can be pushed past it in both directions: RTₐ ⊆ TₐR and R⁻¹Tₐ ⊆ TₐR⁻¹ for every label a.

**Problem.** The composite of two strong bisimulations on one labelled transition system is a strong bisimulation.

**How the definition helps.** Pushing a step past S and then past R pushes it past RS (our own proof): (RS)T = R(ST) ⊆ R(TS) = (RT)S ⊆ T(RS). Since (RS)⁻¹ = S⁻¹R⁻¹, the same argument gives the converse inclusion.

**Wikipedia:** [Bisimulation](https://en.wikipedia.org/wiki/Bisimulation). It says: “Bisimulation can be defined in terms of composition of relations as follows.”

**Sources:** none listed. No primary source with a working link was found.

### Finite branching makes modal logic separate every pair of non-bisimilar states

**Remember:** Finitely many successors let finitely many formulas tell them apart.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A labelled transition system is finitely branching if each state has only finitely many successors for each label. A bisimulation relates states that can match each other’s labelled steps and stay related.

**Problem.** In a finitely branching labelled transition system, two states are bisimilar exactly when they satisfy the same modal formulas.

**How the definition helps.** If a successor of one state had no modally equivalent match, finite branching would let one conjunction separate it from all candidate successors of the other state (our own proof). Under the action diamond, that conjunction would separate the two states, and induction on formulas gives the converse. Without finite branching, a root with paths of every finite length, with and without an extra infinite path, gives modally equivalent states that are not bisimilar.

**Paper or page:** [Quantitative Hennessy-Milner Theorems via Notions of Density](https://arxiv.org/abs/2207.09187v2). It says: “The classical Hennessy-Milner theorem is an important tool in the analysis of concurrent processes; it guarantees that any two non-bisimilar states in finitely branching labelled transition systems can be distinguished by a modal formula.”

**Sources:**

- [Jonas Forster, Sergey Goncharov, Dirk Hofmann, Pedro Nora, Lutz Schröder, Paul Wild, Quantitative Hennessy-Milner Theorems via Notions of Density, arXiv:2207.09187 (2022)](https://arxiv.org/abs/2207.09187v2)
- [Matthew Hennessy, Robin Milner, Algebraic laws for nondeterminism and concurrency, Journal of the ACM 32 (1985)](https://doi.org/10.1145/2455.2460)

### Trace orders forget independent swaps

**Remember:** Keep dependent order and forget independent order.

*True by definition. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68R15. arXiv cs.DC, cs.DM. Level 3: graduate.

**Definition.** A trace alphabet marks some pairs of distinct action types as independent, symmetrically. The trace order of a finite execution orders each pair of occurrences with dependent types by when they occur, then closes reflexively and transitively.

**Problem.** Two finite action sequences give the same partial order up to a label-preserving isomorphism exactly when swaps of adjacent independent actions connect them.

**How the definition helps.** Swapping adjacent independent occurrences keeps every dependent pair in order, so it keeps the trace order (our own proof). Conversely, given an isomorphism, move the occurrence matched with the other sequence’s first one to the front. It is minimal, so it passes only incomparable occurrences, whose types must be independent; repeat on the rest.

**nLab:** [trace alphabet](https://ncatlab.org/nlab/show/trace+alphabet), [Mazurkiewicz trace](https://ncatlab.org/nlab/show/Mazurkiewicz+trace). It says: “Its models are based on labelled posets, the labelling being by a trace alphabet.”

**Sources:** none listed. No primary source with a working link was found.

### Bag subtrees bound covers

**Remember:** Disjoint bag subtrees certify nonadjacent vertices.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** A tree decomposition of a finite graph puts its vertices into bags at the nodes of a finite tree, so that each edge lies inside some bag. The bags containing any one vertex form a nonempty connected subtree, so vertices with disjoint subtrees are nonadjacent.

**Problem.** Any nonempty set of vertices can be covered by at most α bags. Here α is the largest number of pairwise nonadjacent vertices in that set.

**How the definition helps.** Root the tree; repeatedly pick a vertex of the set whose subtree has the deepest top node, then drop every vertex whose subtree contains that top (our own proof). A remaining subtree that met a chosen one would contain its top, so the chosen vertices are pairwise nonadjacent. Hence at most α tops are chosen, and their bags cover the set, strengthening the quoted bound 2α − 1.

**Paper or page:** [Computing Tree Decompositions with Small Independence Number](https://arxiv.org/abs/2207.09993v4). It says: “Then W is covered by a set of at most 2α(W)−1 bags of 𝒯.”

**Sources:**

- [Clément Dallard, Fedor V. Fomin, Petr A. Golovach, Tuukka Korhonen, Martin Milanič, Computing Tree Decompositions with Small Independence Number, arXiv:2207.09993v4](https://arxiv.org/abs/2207.09993v4)

### Vertex merging counts restricted maps

**Remember:** Count forbidden equalities by merging the vertices they identify.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C60. arXiv cs.DM, cs.DS. Level 3: graduate.

**Definition.** A restricted graph map sends adjacent vertices to adjacent vertices and gives different images to the source pairs joined in a separate graph of restrictions. Merging the vertices connected by a set of restriction edges gives a quotient graph whose maps are exactly the maps equal on those pairs.

**Problem.** The number of graph maps that obey the restrictions is an alternating sum of ordinary graph map counts from quotient graphs.

**How the definition helps.** Inclusion–exclusion over the forbidden equalities counts restricted maps, and each term counts maps from a quotient graph (our own derivation). A set of m restriction edges contributes sign (−1)ᵐ. Grouping edge sets that merge the same partition gives the quoted coefficients.

**Paper or page:** [Counting Restricted Homomorphisms via Möbius Inversion over Matroid Lattices](https://arxiv.org/abs/1706.08414v1). It says: “\\\# \\mathsf{Hom}\_\\tau (H,G)=\\sum <sub>\\rho \\geq \\emptyset </sub> \\mu (\\emptyset ,\\rho )\\cdot \\\# \\mathsf{Hom}(H/\\rho ,G)”

**Sources:**

- [Counting Restricted Homomorphisms via Möbius Inversion over Matroid Lattices](https://arxiv.org/abs/1706.08414v1)

### A kernel replaces feature vectors in inner product algorithms

**Remember:** Compute feature inner products without building feature vectors.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 46E22. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** A real kernel on X is a symmetric function k whose matrix on every finite list of points is positive semidefinite. Exactly these functions are inner products of feature vectors: some feature map Φ gives ⟨Φ(x), Φ(y)⟩ = k(x,y) for all x, y ∈ X.

**Problem.** Any algorithm whose only access to the feature vectors is through their pairwise inner products gives the same result from the kernel matrix.

**How the definition helps.** The kernel values are exactly the inner products the algorithm uses, so it runs unchanged on the kernel matrix. The positive semidefinite condition guarantees that a feature space exists, by the reproducing kernel Hilbert space construction (our own). One must still check that a given algorithm uses only inner products (our own).

**nLab:** [kernel method](https://ncatlab.org/nlab/show/kernel+method). It says: “Many linear algebra techniques in H just involve the inner product, and so can be conducted as a form of nonlinear algebra back in X, using the 'kernel trick'.”

**Sources:** none listed. No primary source with a working link was found.

### Littlestone trees let an adversary force mistakes

**Remember:** Whichever way you branch, some function fits the path.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q32. arXiv cs.LG. Level 3: graduate.

**Definition.** A Littlestone tree is an infinite full binary tree whose nodes carry inputs and whose two outgoing edges at each node carry distinct labels. Along every finite path from the root, some function in the class gives each node’s input the label of the edge taken.

**Problem.** If the class has an infinite full tree of this kind, an adaptive adversary can force a mistake on every round. Every finite sequence it reveals remains consistent with the class.

**How the definition helps.** At each node the adversary can take an edge whose label differs from the learner’s prediction (our own proof). Revealing that label forces a mistake. The path condition guarantees a consistent function after every finite number of rounds.

**Paper or page:** [Multiclass Learnability Beyond the PAC Framework: Universal Rates and Partial Concept Classes](https://arxiv.org/abs/2210.02297v3). It says: “If ℋ has an infinite multiclass Littlestone tree, then there is a strategy for the adversary that forces any learner to make a mistake in every round.”

**Sources:** none listed. No primary source with a working link was found.

### Potential differences preserve the best policies

**Remember:** Potential differences telescope, so every run shifts by the same amount.

*Rules out counterexamples.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 90C40. arXiv cs.LG. Level 3: graduate.

**Definition.** Give each state a real potential, zero at every terminal state, and add the next state’s potential minus the current state’s potential to each reward. Along any run to a terminal state these additions telescope to minus the starting potential.

**Problem.** Start each policy, a rule for choosing actions, in the same state, and assume it reaches a terminal state almost surely. If total rewards have finite expectations, this change preserves the ordering of policies by expected total reward.

**How the definition helps.** Every policy gets the same total adjustment, minus the start state’s potential, so the ordering is unchanged (our own proof). For our own counterexample of another kind of change, two actions end the task with rewards zero and one, and adding two to the first action only reverses their ranking.

**Paper or page:** [Hierarchical Potential-based Reward Shaping from Task Specifications](https://arxiv.org/abs/2110.02792v3). It says: “R′(s, a, s′) = R(s, a, s′) + Ψ(s′) − Ψ(s)”

**Sources:**

- [Andrew Y. Ng, Daishi Harada, and Stuart J. Russell. Policy Invariance under Reward Transformations: Theory and Application to Reward Shaping. 1999.](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf)

### Replace-one stability bounds the expected generalization gap

**Remember:** Swap one point to compare training and test loss.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q32. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** A learning algorithm has uniform stability ε if replacing any one training example changes its expected loss on any fixed example by at most ε, with the expectation over the algorithm’s randomness.

**Problem.** Draw the training examples independently from one distribution and assume finite expected losses. The expected average training loss differs by at most ε from the expected loss on an independent example from that distribution.

**How the definition helps.** Swapping one training example for a fresh copy turns training loss into test loss, and stability says the swap costs at most ε (our own proof). The new learner’s loss on the removed example gives the expected test loss, since that example is independent of the new sample. It differs by at most ε from the original learner’s loss on that example, and averaging over positions gives the claim.

**Paper or page:** [A Unified Analysis for Finite Weight Averaging](https://arxiv.org/abs/2411.13169v1). It says: “Let A be ε-uniformly stable. Then, \|𝔼₍S,A₎\[Rₛ\[Aₛ\] − R𝒟\[Aₛ\]\]\| ≤ ε.”

**Sources:**

- [Moritz Hardt, Benjamin Recht, and Yoram Singer. Train faster, generalize better: Stability of stochastic gradient descent. 2016.](https://proceedings.mlr.press/v48/hardt16)

### Blank symbols make alignment probabilities quick to compute

**Remember:** Use blanks to separate repeated labels and sum valid paths.

*Makes the theorem clean to state or prove.* MSC 68T07 (Artificial neural networks and deep learning), 68T50. arXiv cs.LG. Level 3: graduate.

**Definition.** Connectionist temporal classification reads an alignment, one label or blank per time step, by merging repeated labels and then deleting blanks; a target’s probability sums the step-probability products of its alignments. Because blanks separate repeats, each alignment is a path through the target padded with a blank before, between and after its labels.

**Problem.** The probability of a target of length U on T time steps can be computed with O(TU) operations for nonempty targets.

**How the definition helps.** On the padded target, a path at each step stays, advances one position, or skips a blank between different labels, and each valid alignment is exactly one path (our own explanation). So each of the O(U) positions sums at most three predecessor values per step, which gives O(TU) operations.

**Wikipedia:** [Connectionist temporal classification](https://en.wikipedia.org/wiki/Connectionist_temporal_classification). It says: “Equivalent label sequences can occur in many ways – which makes scoring a non-trivial task, but there is an efficient forward–backward algorithm for that.”

**Sources:**

- [Alex Graves, Santiago Fernández, Faustino Gomez, and Jürgen Schmidhuber. Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks. 2006.](https://doi.org/10.1145/1143844.1143891)

### Covered arrows preserve Bayesian models

**Remember:** Shared parents let the two variables swap their conditioning order.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 3: graduate.

**Definition.** A Bayesian network on a directed acyclic graph allows any joint law that is a product of conditional laws of each vertex given its parents. An edge X → Y is covered if the parents of Y are exactly X and the parents of X, so X and Y share all other parents.

**Problem.** For finite variables with unrestricted conditional distributions, reversing a covered arrow preserves the family of joint distributions.

**How the definition helps.** The factors for X and Y together give any joint law of the pair given their common parents, which can be refactored in reverse order, choosing anything on null events (our own proof). Reversal creates no cycle, since another directed path from X to Y would enter Y through a parent of X. The reversed edge is again covered, so the argument runs back and the two families coincide.

**Paper or page:** [Likelihoods and Parameter Priors for Bayesian Networks](https://arxiv.org/abs/2105.06241). It says: “there exists a set of covered arc reversals that transform one structure into the other.”

**Sources:**

- [Likelihoods and Parameter Priors for Bayesian Networks](https://arxiv.org/abs/2105.06241)

### Subtree messages give exact marginals

**Remember:** Fix one variable and multiply the sums from its branches.

*True by definition.* MSC 68T37 (Reasoning under uncertainty in the context of artificial intelligence). arXiv cs.AI. Level 3: graduate.

**Definition.** In a factor tree, a bipartite tree joining each variable to the factors that use it, the normalized product of factors is the joint law. The message across an edge sums the factor product on one side over that side’s variables, with the boundary variable fixed.

**Problem.** For finitely many finite-valued variables on a factor tree, one message in each direction along each edge suffices for every single-variable probability.

**How the definition helps.** With the boundary variable fixed, the branches of a tree share no variables, so the sum over all variables splits into a product of branch sums (our own proof). Each message is therefore computed from the messages on the other edges, in one pass inward from the leaves and one pass outward. Multiplying the incoming messages at a variable and normalizing gives its marginal.

**Wikipedia:** [Belief propagation](https://en.wikipedia.org/wiki/Belief_propagation). It says: “the belief propagation algorithm will compute the exact marginals.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded overlap shrinks separators

**Remember:** Few balls over any point means a sphere cuts few balls.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 05C40. arXiv cs.CG, cs.DS. Level 3: graduate.

**Definition.** For a finite family of closed Euclidean balls of positive radius, the ply is the largest number of interiors containing one point. The intersection graph joins two balls when they meet.

**Problem.** For n such balls of bounded ply in fixed dimension d, removing O(n⁽¹⁻¹⁄ᵈ⁾) vertices leaves two groups with no edge between them. Each contains at most a fixed fraction less than one of the original vertices.

**How the definition helps.** The sphere separator theorem does the work: bounded ply gives a sphere meeting few balls, with balanced numbers of balls entirely inside and entirely outside. The balls meeting the sphere form the separator. In our own example, unbounded ply allows many concentric balls, whose complete intersection graph has no small balanced separator.

**Paper or page:** [Maximizing the Sum of Radii of Disjoint Balls or Disks](https://arxiv.org/abs/1607.02184v2). It says: “the intersection graph of the balls has separators of size O(n⁽¹⁻¹⁄ᵈ⁾)”

**Sources:**

- [David Eppstein, Maximizing the Sum of Radii of Disjoint Balls or Disks, arXiv:1607.02184v2](https://arxiv.org/abs/1607.02184v2)

### Defining Delaunay cells by a lifted convex hull makes them unique

**Remember:** Keep the whole lower face when four points share a circle.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Lift each planar point x to the paraboloid point (x, ‖x‖²). The Delaunay subdivision is the projection of the lower faces of the lifted convex hull, and a lower supporting plane corresponds to an empty circle through the sites it touches.

**Problem.** Take a finite set of points in the plane, not all on one line. The lifted lower hull gives exactly one Delaunay subdivision. A circle with no points inside and exactly four on it gives one quadrilateral cell.

**How the definition helps.** The convex hull and its lower faces are unique, so the subdivision is unique (our own argument). A circle ‖x‖² = a·x + b with no site inside gives a plane with every lift on or above it, touching exactly the lifts of the sites on the circle. Four sites on an empty circle therefore form one lower face, which projects to a quadrilateral with no diagonal chosen.

**Wikipedia:** [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation). It says: “As the convex hull is unique, so is the triangulation, assuming all facets of the convex hull are simplices.”

**Sources:** none listed. No primary source with a working link was found.

### Slack ratios make Hilbert balls polyhedral

**Remember:** Bound each slack ratio and the ball becomes an intersection of half spaces.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52B55. arXiv cs.CG. Level 3: graduate.

**Definition.** For a point x inside a polytope, take the slack ratios uᵢ(x) = sᵢ(x)/sᵢ(c), where the sᵢ are the affine facet slacks, positive inside, and c is an interior center. The Hilbert distance d(c,x) is log maxᵢⱼ(uᵢ(x)/uⱼ(x)), so a ball is cut out by bounds on ratios of affine functions.

**Problem.** A closed Hilbert ball of positive finite radius inside a bounded full-dimensional polytope with m facets has at most m(m−1) facets.

**How the definition helps.** Inside the polytope, d(c,x) ≤ r means uᵢ(x) ≤ exp(r)uⱼ(x) for each ordered pair i ≠ j, and each such inequality is affine (our own proof). A ball of finite radius stays away from the boundary, so only these m(m−1) half spaces can give its facets.

**Paper or page:** [Voronoi Diagrams in the Hilbert Metric](https://arxiv.org/abs/2112.03056). It says: “is a convex polytope bounded by at most m(m−1) facets.”

**Sources:**

- [Voronoi Diagrams in the Hilbert Metric](https://arxiv.org/abs/2112.03056)

### Ordered channels make snapshot markers reliable

**Remember:** The marker is a fence between messages before and after recording.

*Rules out counterexamples.* MSC 68W15 (Distributed algorithms), 68M14. arXiv cs.DC. Level 3: graduate.

**Definition.** Processes keep running, and each directed channel delivers every message once, in sending order. A process records its state when it starts the snapshot or first receives a marker, then sends a marker on each outgoing channel before any further message. So each marker separates messages sent before its sender recorded from those sent after.

**Problem.** Each channel record contains exactly the messages sent before the sender recorded its state and received after the receiver recorded its state.

**How the definition helps.** Each process records arrivals on an incoming channel from its own recording until that channel’s marker arrives (our own explanation). By ordered delivery, these are exactly the messages sent before the sender recorded and received after the receiver recorded, and the channel whose marker triggered recording gets an empty record. Without ordered delivery, a marker could overtake an earlier message and end recording too soon.

**Wikipedia:** [Chandy–Lamport algorithm](https://en.wikipedia.org/wiki/Chandy%E2%80%93Lamport_algorithm). It says: “The communication channels are unidirectional and FIFO ordered”

**Sources:**

- [K. Mani Chandy and Leslie Lamport, Distributed Snapshots: Determining Global States of Distributed Systems (1985)](https://doi.org/10.1145/214451.214456)

### Paxos counts votes within ballots

**Remember:** Count votes for one numbered proposal, never for a value.

*Rules out counterexamples.* MSC 68W15 (Distributed algorithms), 68M14. arXiv cs.DC. Level 3: graduate.

**Definition.** A Paxos ballot is a numbered proposal for a single value. A value is chosen when a majority accepts the same ballot, not when its votes add up to a majority across ballots.

**Problem.** In single-decision Paxos, once a proposal has a majority, every later chosen proposal has the same value.

**How the definition helps.** Two majorities always share an acceptor, so a later ballot’s promise majority includes someone who accepted the chosen ballot (our own proof). That acceptor reports the chosen ballot or a higher one, and inductively every higher ballot carries the chosen value, which the proposer adopts. Votes split across ballots give no single ballot whose majority must meet the later one.

**Wikipedia:** [Paxos (computer science)](https://en.wikipedia.org/wiki/Paxos_%28computer_science%29). It says: “consensus is achieved when a majority of Acceptors accept the same identifier number (rather than the same value).”

**Sources:**

- [Leslie Lamport, Paxos Made Simple (2001)](https://www.microsoft.com/en-us/research/publication/paxos-made-simple/)

### Termination with probability one lets consensus escape the FLP impossibility

**Remember:** Agreement always, decision only with probability one.

*Makes the theorem clean to state or prove.* MSC 68W15 (Distributed algorithms), 68W20, 68M14. arXiv cs.DC, cs.DS. Level 3: graduate.

**Definition.** In asynchronous consensus with crashes, randomized termination keeps agreement on a proposed input absolute but asks only that each correct process decides with probability one. This must hold under every admissible scheduler, which keeps stepping correct processes and delivering their messages but cannot see future coin flips.

**Problem.** No deterministic protocol solves consensus in an asynchronous system if even one process may crash (Fischer, Lynch and Paterson). Randomized consensus, with termination only with probability one, can be solved there when fewer than half the processes may crash.

**How the definition helps.** Almost-sure termination allows a probability-zero set of runs that never decide, so a single nondeciding execution is no longer a contradiction (our own explanation). FLP constructs such an execution for every deterministic protocol that tolerates one crash. Ben-Or’s randomized protocol terminates almost surely when fewer than half the processes may crash.

**Wikipedia:** [Consensus (computer science)](https://en.wikipedia.org/wiki/Consensus_%28computer_science%29). It says: “Randomized consensus algorithms can circumvent the FLP impossibility result by achieving both safety and liveness with overwhelming probability”

**Sources:**

- [M. J. Fischer, N. A. Lynch and M. S. Paterson, Impossibility of distributed consensus with one faulty process, Journal of the ACM 32 (1985) 374–382](https://doi.org/10.1145/3149.214121)
- [M. Ben-Or, Another advantage of free choice: completely asynchronous agreement protocols, PODC 1983](https://doi.org/10.1145/800221.806707)

### Higher-order abstract syntax gets capture-free substitution from the host language

**Remember:** Use the host language’s binding rules instead of writing them again.

*True by definition.* MSC 68N18 (Functional programming and lambda calculus), 03B40. arXiv cs.LO, cs.PL. Level 4: research.

**Definition.** Higher-order abstract syntax represents a binder by a host-language function: the body of λx. M becomes a host function of x. Substitution is then host function application, and renaming the bound variable is host alpha-equivalence.

**Problem.** In a suitable encoding, applying the host function implements capture-free substitution for the encoded binder. Renaming a bound variable also leaves the encoding unchanged.

**How the definition helps.** Host application already performs capture-free substitution, and host alpha-equivalence already ignores bound names (our own explanation). An adequacy theorem shows that the encoding matches the intended object syntax and substitution.

**Wikipedia:** [Higher-order abstract syntax](https://en.wikipedia.org/wiki/Higher-order_abstract_syntax). It says: “by reusing the meta-level notion of binding, the encoding enjoys properties such as type-preserving substitution without the need to define or prove them.”

**Sources:**

- [F. Pfenning, C. Elliott, Higher-order abstract syntax, PLDI 1988](https://doi.org/10.1145/53990.54010)

### Dominating laws handle subsampling

**Remember:** An added record enters the output law only when the sample includes it.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data). arXiv cs.CR. Level 4: research.

**Definition.** Let D(α,R,S) be the largest value of R(A) − αS(A) over measurable events A. A pair (P,Q) dominates a mechanism if D(α,R,S) ≤ D(α,P,Q) for every α ≥ 0 and every output pair from adding one record, smaller dataset first. Poisson subsampling keeps each record independently with probability γ.

**Problem.** A dominating pair (P, Q) for adding one record becomes (P, (1 − γ)P + γQ) after Poisson subsampling. This uses the unmodified law as the first argument.

**How the definition helps.** Given the shared subsample, the added record appears with probability γ, so the output pair is R and (1 − γ)R + γS (our own proof). With c = 1 − α(1 − γ), that pair’s value is zero when c ≤ 0 and cD(αγ/c,R,S) otherwise. Domination bounds each term, and averaging gives the same expression computed from P and (1 − γ)P + γQ.

**Paper or page:** [Avoiding Pitfalls for Privacy Accounting of Subsampled Mechanisms under Composition](https://arxiv.org/abs/2405.20769v2). It says: “If (P, Q) dominates ℳ for add neighbours then (P, (1−γ)P + γQ) dominates ℳₚₒᵢₛₛₒₙ for add neighbours”

**Sources:** none listed. No primary source with a working link was found.

### Dominating pairs turn privacy composition into products, so characteristic functions multiply

**Remember:** Bound each step by a fixed pair, then multiply characteristic functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 60E10. arXiv cs.LG, cs.CR. Level 4: research.

**Definition.** Write Dα(R,S) for the largest value of R(A) − αS(A) over measurable events A. A pair (P,Q) dominates a mechanism if Dα(R,S) ≤ Dα(P,Q) for every α ≥ 0 and every ordered pair (R,S) of neighboring output laws. When P is absolutely continuous with respect to Q, the pair’s privacy loss is L = log(dP/dQ) under P.

**Problem.** If fixed pairs dominate the first step and each conditional second step, their product pair dominates the adaptive composition. For almost surely finite privacy losses, the product pair’s characteristic function is the product of their characteristic functions.

**How the definition helps.** The paper’s composition theorem lets the independent product pair dominate the adaptive composition, even though the second step depends on the first output. For a product pair the density ratios multiply, so the privacy losses add (our own argument). Independence then factors the expectation of exp(itL), so the characteristic functions multiply.

**Paper or page:** [Optimal Accounting of Differential Privacy via Characteristic Function](https://arxiv.org/abs/2106.08567v3). It says: “If (P,Q) dominates ℳ and (P′, Q′) dominates ℳ′, then (P×P′, Q×Q′) dominates the composed mechanism (ℳ, ℳ′).”

**Sources:**

- [Yuqing Zhu, Jinshuo Dong, Yu-Xiang Wang, Optimal Accounting of Differential Privacy via Characteristic Function, arXiv:2106.08567v3 (2022)](https://arxiv.org/abs/2106.08567v3)

### Gaussian differential privacy composes by adding the squares of the parameters

**Remember:** As hard to tell apart as two unit normals μ apart.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A13. arXiv stat.TH, cs.CR. Level 4: research.

**Definition.** A mechanism is μ-Gaussian differentially private if telling apart any ordered pair of neighboring output laws is at least as hard as telling N(0,1) from N(μ,1). Precisely, at every type-I error level α, every test has type-II error at least the optimal one for those two normals.

**Problem.** Composing mechanisms with conditional guarantees μ₁-GDP and μ₂-GDP gives a √(μ₁² + μ₂²)-GDP guarantee. With a bounded number of steps, adaptively chosen conditional guarantees give B-GDP if their squared parameters sum to at most B² almost surely.

**How the definition helps.** Independent unit-variance normal shifts by μ₁ and μ₂ combine into one shift of length √(μ₁² + μ₂²) (our own explanation). The quoted adaptive composition theorem extends this to conditional parameters whose squares sum to at most B² almost surely.

**Paper or page:** [Individual Privacy Accounting with Gaussian Differential Privacy](https://arxiv.org/abs/2209.15596v2), [PRECAD: Privacy-Preserving and Robust Federated Learning via Crypto-Aided Differential Privacy](https://arxiv.org/abs/2110.11578v1). It says: “Let k denote the maximum number of compositions. Suppose that, almost surely, ∑ₘ₌₁ᵏ μₘ² ≤ B². Then, 𝓜⁽ᵏ⁾(X) is B-GDP.”

**Sources:**

- [Antti Koskela, Marlon Tobaben, Antti Honkela, Individual Privacy Accounting with Gaussian Differential Privacy, International Conference on Learning Representations 2023, arXiv:2209.15596](https://arxiv.org/abs/2209.15596v2)
- [Jinshuo Dong, Aaron Roth, Weijie J. Su, Gaussian Differential Privacy, Journal of the Royal Statistical Society Series B (2022)](https://doi.org/10.1111/rssb.12454)

### Local differential privacy is the same as contraction of one divergence

**Remember:** The channel multiplies Eγ by at most δ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 94A17, 94A40. arXiv math.IT, cs.CR. Level 4: research.

**Definition.** For γ = eᵋ, Eγ(P,Q) is the largest value of P(S) − γQ(S) over measurable events S. A channel K, sending each input x to an output law K(x), is (ε, δ)-locally private if Eγ(K(x),K(y)) ≤ δ for all inputs x, y. Its contraction coefficient ηγ(K) is the least c ≥ 0 with Eγ(PK,QK) ≤ cEγ(P,Q) for all input laws P, Q.

**Problem.** A channel K is (ε, δ)-locally private exactly when its contraction coefficient ηγ(K) is at most δ, with γ = eᵋ.

**How the definition helps.** Point masses at distinct inputs have Eγ equal to one, so the contraction bound on them is exactly local privacy (our own explanation). The point-mass characterization of the Eγ contraction coefficient shows that these tests suffice for all input laws.

**Paper or page:** [Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence](https://arxiv.org/abs/2102.01258v1). It says: “A mechanism 𝖪 is (ε, δ)-LDP if and only if η\[eᵋ\](𝖪) ≤ δ”

**Sources:**

- [Shahab Asoodeh, Maryam Aliakbarpour, Flavio P. Calmon, Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence, arXiv:2102.01258 (2021); published at ISIT 2021 as Local Differential Privacy Is Equivalent to Contraction of an f-Divergence](https://arxiv.org/abs/2102.01258v1)

### Rényi differential privacy makes the cost of composition simply add

**Remember:** Fix the order α, and Rényi privacy costs simply add up.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A17. arXiv cs.CR, cs.LG. Level 4: research.

**Definition.** Fix α &gt; 1. A mechanism is (α, ε)-Rényi differentially private if, for every ordered pair of output laws from neighboring databases, the α-moment of the likelihood ratio gives Dα(P,Q) = log E<sub>Q</sub>\[(dP/dQ)ᵅ\]/(α − 1) ≤ ε. Dα is infinite unless P is absolutely continuous with respect to Q.

**Problem.** Fix α &gt; 1. Suppose the first step is (α, ε₁)-RDP and the second is (α, ε₂)-RDP conditional on each possible first output. Together they are (α, ε₁ + ε₂)-RDP.

**How the definition helps.** Joint likelihood ratios multiply even when the second step depends on the first output, so α-moments can be bounded one step at a time (our own proof). Given any first output, the second ratio’s α-moment is at most exp((α − 1)ε₂), and averaging against the first ratio’s α-power multiplies this by at most exp((α − 1)ε₁). Taking the logarithm and dividing by α − 1 gives ε₁ + ε₂.

**Paper or page:** [Winning the NIST Contest: A scalable and general approach to differentially private synthetic data](https://arxiv.org/abs/2108.04978v1), [Shuffle Gaussian Mechanism for Differential Privacy](https://arxiv.org/abs/2206.09569v2). It says: “Let 𝓜₁ : 𝒟 → ℛ₁ be (α, γ₁)-RDP and 𝓜₂ : 𝒟 × ℛ₁ → ℛ₂ be (α, γ₂)-RDP. Then the mechanism 𝓜 = 𝓜₂(D, 𝓜₁(D)) is (α, γ₁ + γ₂)-RDP.”

**Sources:**

- [Ryan McKenna, Gerome Miklau, Daniel Sheldon, Winning the NIST Contest: A scalable and general approach to differentially private synthetic data, Journal of Privacy and Confidentiality 11 (2021), arXiv:2108.04978](https://doi.org/10.29012/jpc.778)
- [Shuffle Gaussian Mechanism for Differential Privacy, arXiv:2206.09569 (2022)](https://arxiv.org/abs/2206.09569v2)

### Approximate degree with a matrix-norm bound equals quantum query complexity

**Remember:** Evaluate the polynomial on contraction matrices, not just numbers.

*Makes the theorem clean to state or prove.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 81P68, 46L07. arXiv quant-ph, cs.CC. Level 4: research.

**Definition.** The completely bounded norm of a degree-d form measures its coefficients when evaluated on matrices instead of numbers. Split the symmetric coefficient tensor into index permutations of order-d tensors, each costing the supremum operator norm of its ordered multilinear evaluation on square contractions of any common dimension. The norm is the infimum of the total cost over all such splittings.

**Problem.** A function on the Boolean cube is the expected output sign of a t-query quantum algorithm exactly when a degree-2t form with completely bounded norm at most one gives it. The form is evaluated on the input padded with ones. So the refined approximate degree equals the quantum query complexity.

**How the definition helps.** Quantum queries interleave with unitary matrices, so a t-query algorithm’s output is controlled by matrix evaluations of the kind the norm bounds (our own explanation). The paper’s characterization uses a multilinear representation theorem to construct an algorithm from each admissible form. Its converse turns the algorithm into a bounded form, so approximation transfers in both directions.

**Paper or page:** [Quantum Query Algorithms are Completely Bounded Forms](https://arxiv.org/abs/1711.07285v3). It says: “Based on this, we obtain a refined notion of approximate polynomial degree that equals the quantum query complexity, answering a question of Aaronson et al. (CCC'16).”

**Sources:**

- [Srinivasan Arunachalam, Jop Briët, Carlos Palazuelos, Quantum Query Algorithms are Completely Bounded Forms, arXiv:1711.07285v3 (2022), SIAM Journal on Computing, Vol. 48, 903-925, 2019](https://arxiv.org/abs/1711.07285v3)

### False-clause search links proofs to TFNP

**Remember:** Every refutation is a search for the broken clause.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03F20. arXiv cs.CC, cs.LO. Level 4: research.

**Definition.** For an unsatisfiable CNF formula F, the false-clause search problem S(F) takes a Boolean assignment and asks for a clause of F that the assignment falsifies. Since F is unsatisfiable, every assignment has an answer, so S(F) is a total search problem.

**Problem.** Consider families of unsatisfiable n-variable formulas of polylogarithmic clause width. Unary Nullstellensatz refutations of polylogarithmic degree and quasipolynomial size correspond exactly to membership of the clause search problem in PPADᵈᵗ. The analogous unary Sherali–Adams characterization gives PPADSᵈᵗ.

**How the definition helps.** Because S(F) is total, it can sit in the decision-tree classes of total search problems (our own explanation). The paper’s correspondence theorems relate refutation resources to these classes: unary Nullstellensatz to PPADᵈᵗ and unary Sherali–Adams to PPADSᵈᵗ.

**Paper or page:** [Separations in Proof Complexity and TFNP](https://arxiv.org/abs/2205.02168). It says: “For any sequence Fn of poly(log n)-width CNF formulas, Fn has a degree-poly(log n), size-nᵖᵒˡʸ⁽ˡᵒᵍ ⁿ⁾ unary Nullstellensatz proof if and only if S(F) ∈ PPADᵈᵗ.”

**Sources:**

- [Separations in Proof Complexity and TFNP, arXiv:2205.02168 (2022)](https://arxiv.org/abs/2205.02168)

### ∃ℝ gives art galleries an exact complexity

**Remember:** ∃ℝ-complete means exactly as hard as solving polynomials over the reals.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03D78, 68U05. arXiv cs.CG, cs.CC. Level 4: research.

**Definition.** ∃ℝ is the class of decision problems with a polynomial-time many-one reduction to deciding whether a system of integer polynomial equations has a real solution. A problem is ∃ℝ-complete if it is in ∃ℝ and that real feasibility problem also reduces to it, so the two are polynomial-time equivalent.

**Problem.** The point-boundary art gallery problem asks whether at most k point guards in a polygon can collectively see its entire boundary. It is ∃ℝ-complete, hence polynomial-time equivalent to real polynomial feasibility.

**How the definition helps.** Completeness expresses the two polynomial-time reductions in one condition (our own explanation). The art gallery completeness theorem supplies both reductions, including the geometric construction encoding real feasibility.

**Paper or page:** [The Point-Boundary Art Gallery Problem is ∃ℝ-hard](https://arxiv.org/abs/2210.12817). It says: “showing that it is ∃ℝ-complete, meaning that it is equivalent under polynomial time reductions to deciding whether a system of polynomial equations has a real solution.”

**Sources:**

- [Jack Stade, The Point-Boundary Art Gallery Problem is ∃ℝ-hard, arXiv:2210.12817 (2025)](https://arxiv.org/abs/2210.12817)
- [Mikkel Abrahamsen, Anna Adamaszek, Tillmann Miltzow, The Art Gallery Problem is ∃ℝ-complete, Journal of the ACM (2021)](https://doi.org/10.1145/3486220)

### Pliability unifies planar and dense approximation

**Remember:** Close to bounded treewidth is enough for good approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q25 (Analysis of algorithms and problem complexity), 05C83. arXiv cs.CC, cs.DS. Level 4: research.

**Definition.** A class of structures is treewidth-pliable if each structure is close to one of bounded treewidth: for every ε &gt; 0 some width k lets each A in the class have a B of treewidth at most k over its signature. For every target, the optimum values of A and B must agree within a factor exp(ε).

**Problem.** On every bounded-arity treewidth-pliable class, Max-CSP admits a polynomial-time approximation scheme for the optimum value. For each fixed ε &gt; 0 it approximates the value within factor 1 + ε.

**How the definition helps.** A bounded-width proxy preserves the optimum uniformly across targets, which lets one relaxation approximate the original value (our own explanation). The treewidth-pliability approximation theorem supplies the algorithm and covers both the sparse and dense settings in the quote.

**Paper or page:** [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204), [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204). It says: “The condition unifies the two main approaches for designing a polynomial-time approximation scheme. One is Baker's layering technique, which applies to sparse graphs such as planar or excluded-minor graphs.”

**Sources:**

- [Miguel Romero, Marcin Wrochna, Stanislav Živný, Pliability and Approximating Max-CSPs, Journal of the ACM 70(6) (2023)](https://arxiv.org/abs/1911.03204)

### Multicalibration gives one forecast that serves many losses at once

**Remember:** Learn the forecast first and choose the action once you know the loss.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62C05. arXiv cs.LG. Level 4: research.

**Definition.** A forecast p of a binary outcome is an ε-omnipredictor for rules C and losses ℒ if, for each loss ℓ in ℒ, some postprocessing kℓ of the forecast nearly matches the best rule in C. Precisely, the expected loss of kℓ(p(X)) is at most ε above the infimum expected loss over C.

**Problem.** An approximately multicalibrated predictor for C is an omnipredictor for C, for the loss families covered by the paper.

**How the definition helps.** The definition permits a different decision rule for each loss while requiring one forecast for the whole family (our own explanation). The paper’s multicalibration-to-omniprediction theorem supplies the error bound for its admissible loss families.

**Paper or page:** [Omnipredictors](https://arxiv.org/abs/2109.05389v1). It says: “Once the loss function is set, the outputs of the predictor can be post-processed (a simple univariate data-independent transformation of individual predictions) to do well compared with any hypothesis from the class”

**Sources:**

- [Parikshit Gopalan, Adam Tauman Kalai, Omer Reingold, Vatsal Sharan, Udi Wieder, Omnipredictors, arXiv:2109.05389v1 (2021)](https://arxiv.org/abs/2109.05389v1)

### Strong proper computable learning equals having a computable empirical risk minimizer

**Remember:** A computable sample bound turns learning into a finite search for the minimizer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q32 (Computational learning theory), 03D20. arXiv cs.LG, cs.LO. Level 4: research.

**Definition.** A strong proper computable agnostic learner is a terminating algorithm that returns a computable hypothesis in its binary class and has a computable sample bound m(ε,δ). For rational ε, δ ∈ (0,1), every labelled distribution and at least m(ε,δ) independent examples, its error is at most ε above the class infimum with probability at least 1 − δ.

**Problem.** For a class of finite Vapnik–Chervonenkis dimension, strong proper computable learning holds exactly when some algorithm performs empirical risk minimization, returning a hypothesis in the class with least error on the given sample.

**How the definition helps.** The computable sample bound lets one run the learner on every training sequence drawn from the sample’s n labelled points, a finite search (our own proof). With ε &lt; 1/n and δ = 1/2 some run succeeds, and since empirical errors are multiples of 1/n, the best run minimizes error exactly. Conversely, finite VC dimension gives uniform convergence, so a computable minimizer has computable sample bounds.

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

**Definition.** A language model gives a next-symbol distribution after each prefix; fix an equivalence relation on these distributions. Two prefixes are grouped together if, after appending any common suffix, their distributions are equivalent.

**Problem.** A language model has finitely many such prefix classes exactly when a finite deterministic automaton can reproduce its output classes.

**How the definition helps.** Grouped prefixes stay grouped after appending a letter, since the test already covers every continuation through that letter (our own proof). So the prefix classes form the states of a deterministic automaton, and the empty suffix gives each state’s output class. Conversely, prefixes that reach the same state of such an automaton agree after every continuation.

**Paper or page:** [Congruence-based Learning of Probabilistic Deterministic Finite Automata](https://arxiv.org/abs/2412.09760v1). It says: “For every equivalence ℰ and language model ℳ, ℳ is ℰ-regular if and only if ℳ is PDFA ℰ-recognizable.”

**Sources:**

- [Matías Carrasco, Franz Mayr, Sergio Yovine. Congruence-based Learning of Probabilistic Deterministic Finite Automata. 2024.](https://arxiv.org/abs/2412.09760v1)

### Tensor cells let automata run in parallel

**Remember:** Paired cells let both machines keep events active.

*Makes the theorem clean to state or prove.* MSC 68Q45 (Formal languages and automata), 68Q85. arXiv cs.FL. Level 4: research.

**Definition.** In the tensor product of two higher-dimensional automata, a cell is a pair of cells, one from each machine, whose active events are the two lists of active events placed side by side. Face maps act separately on each component’s selected events, and initial and accepting cells are pairs of initial and accepting cells.

**Problem.** The tensor product accepts exactly the parallel combinations of the two machines’ event languages.

**How the definition helps.** Each step in a paired cell projects to allowed component steps, including an idle component when necessary (our own explanation). Conversely, independent component steps may interleave or overlap as permitted by the parallel event language. The tensor-product language theorem proves that these constructions give precisely the accepted parallel combinations.

**Paper or page:** [Kleene Theorem for Higher-Dimensional Automata](https://arxiv.org/abs/2202.03791v6). It says: “Then ℒ(X ⊗ Y) = ℒ(X) ∥ ℒ(Y).”

**Sources:**

- [Uli Fahrenberg, Christian Johansen, Georg Struth, and Krzysztof Ziemiański. Kleene Theorem for Higher-Dimensional Automata. 2024.](https://lmcs.episciences.org/14922)

### Defining handlers as algebra maps makes them respect the effect equations

**Remember:** A map out of a quotient cannot separate identified computations.

*True by definition. Confidence: medium.* MSC 68Q55 (Semantics in the theory of computing), 18C10. arXiv cs.PL, cs.LO. Level 4: research.

**Definition.** Computations are elements of the free model of an effect theory on the return values, so computations that the equations identify are already one element. A handler is a map from this free model into another model of the theory that preserves every operation.

**Problem.** A handler gives equal results on computations that the effect equations identify.

**How the definition helps.** A handler is a function on elements of the free model, so it sends identified computations to one result (our own argument). The free model’s universal property supplies the handler once the target satisfies the equations and return values are interpreted.

**nLab:** [algebraic effect](https://ncatlab.org/nlab/show/algebraic+effect). It says: “Algebraic effects are computational effects that can be represented by an equational theory, or algebraic theory, whose operations produce the effects at hand.”

**Sources:**

- [Matija Pretnar, An Introduction to Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)

### Defining sequencing as an algebra map makes effect operations commute with it

**Remember:** Substitution at the leaves leaves the operation nodes alone.

*True by definition. Confidence: medium.* MSC 68Q55 (Semantics in the theory of computing), 18C15. arXiv cs.PL, math.CT. Level 4: research.

**Definition.** Let T(X) be the free model of an effect theory on a set X of results, built from operations with results at the leaves. Sequencing with f from X to T(Y) is the unique operation-preserving map T(X) → T(Y) extending f, which substitutes f(x) at each leaf x.

**Problem.** Performing an operation and then sequencing equals performing the operation on the sequenced continuations.

**How the definition helps.** The sequencing map preserves each operation by definition, so applied to an operation it gives that operation applied to the sequenced continuations (our own application).

**nLab:** [algebra over a monad](https://ncatlab.org/nlab/show/algebra+over+a+monad). It says: “all homomorphisms of T-algebras between the free algebras T X and T Y do arise this way.”

**Sources:**

- [Matija Pretnar, An Introduction to Algebraic Effects and Handlers](https://www.eff-lang.org/handlers-tutorial.pdf)

### The later modality gives guarded fixed points without inconsistency

**Remember:** You may call yourself recursively, but only one step later.

*Rules out counterexamples.* MSC 68Q55 (Semantics in the theory of computing), 03B38, 03D65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** In the topos-of-trees model, a type A is a sequence of sets A(0), A(1), … with restriction maps from each stage to the one before. The delayed type ▷A is A shifted up one stage, with a singleton at stage zero, and next: A → ▷A restricts each stage to the previous one.

**Problem.** At every type A, each map f from ▷A to A has a guarded fixed point satisfying fix(f) = f(next(fix(f))). Synthetic guarded domain theory with this operator has a consistent model.

**How the definition helps.** A map f from ▷A to A computes stage n + 1 from stage n, so the fixed point is built stage by stage from the singleton, and naturality makes the stages compatible (our own model argument). Unguarded Boolean negation has no fixed point, but its type Bool → Bool is not of the form ▷A → A. This model of the theory proves consistency.

**nLab:** [synthetic guarded domain theory](https://ncatlab.org/nlab/show/synthetic+guarded+domain+theory). It says: “yields a restricted fixed-point operator fix : (▷A → A) → A at all types A, which is consistent when viewing this theory as a logical framework.”

**Sources:**

- [Lars Birkedal, Rasmus Ejlers Møgelberg, Jan Schwinghammer, Kristian Støvring, First steps in synthetic guarded domain theory: step-indexing in the topos of trees, Logical Methods in Computer Science 8(4) (2012), arXiv:1208.3596](https://arxiv.org/abs/1208.3596)

### Least stream solutions give Kahn networks one result across fair schedules

**Remember:** Fair runs compute the same least solution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 68Q55. arXiv cs.DC, cs.LO. Level 4: research.

**Definition.** A Kahn network connects deterministic processes by unbounded first-in-first-out channels, each with one writer and one reader. Reads block until data arrive and no process can test whether a channel is empty, so each process is a monotone function on streams ordered by extension. The network denotes the least solution of its channel equations.

**Problem.** For fixed inputs and initial channel data, every fair run of a Kahn network produces the same streams. A fair run does not postpone a process forever when it can keep taking steps.

**How the definition helps.** Kahn’s principle identifies the streams of every fair execution with the least solution of the same equations (our own explanation). That solution is the limit of iteration from empty streams, and fair scheduling eventually produces every finite prefix of it.

**Wikipedia:** [Kahn process networks](https://en.wikipedia.org/wiki/Kahn_process_networks). It says: “Due to these key restrictions, the resulting process network exhibits deterministic behavior that does not depend on the timing of computation nor on communication delays.”

**Sources:** none listed. No primary source with a working link was found.

### Doubling metrics allow fast closest pair

**Remember:** Cover each ball with at most 2ᵈ balls of half its radius.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68R12 (Metric embeddings as related to computational problems and algorithms), 68U05. arXiv cs.DS, cs.CG. Level 4: research.

**Definition.** The doubling dimension of a metric space is the least d such that, for every r &gt; 0, every ball of radius 2r is covered by at most 2ᵈ balls of radius r. Halving repeatedly bounds how many points fit in one ball when their distances exceed a fixed fraction of its radius. The bound depends only on d and that fraction (our own).

**Problem.** Assume N ≥ 2 points, fixed doubling dimension and constant-time distance queries. A randomized algorithm finds the closest-pair distance in expected O(N log N) time.

**How the definition helps.** The paper’s closest-pair theorem uses this packing bound to control its recursive work (our own explanation of the role). With d fixed, the expected number of distance queries and the total running time are O(N log N).

**Paper or page:** [A Simple Randomized O(n log n)--Time Closest-Pair Algorithm in Doubling Metrics](https://arxiv.org/abs/2004.05883), [A Simple Randomized O(n log n)--Time Closest-Pair Algorithm in Doubling Metrics](https://arxiv.org/abs/2004.05883). It says: “Let (P,dist) be a metric space of size N ≥ 2, and let d be its doubling dimension. Assume that d does not depend on N. The closest-pair distance in P can be computed in O(N log N) expected time.”

**Sources:**

- [A Simple Randomized O(n log n)-Time Closest-Pair Algorithm in Doubling Metrics, arXiv:2004.05883 (2020)](https://arxiv.org/abs/2004.05883)

### Comparing infinite words with their suffixes gives unique Lyndon factorizations

**Remember:** Compare infinite words with their tails, not with rotations.

*Makes the theorem clean to state or prove.* MSC 68R15 (Combinatorics on words), 05A05. arXiv math.CO, cs.DM. Level 4: research.

**Definition.** Compare infinite words at their first difference, under a total alphabet order fixed for each position. A finite word w is generalized Lyndon if its repetition www… is strictly smaller than that of each nontrivial cyclic shift. An infinite word is generalized Lyndon if it is strictly smaller than each nonempty proper suffix.

**Problem.** Every infinite word has a unique nonincreasing factorization into finite and infinite generalized Lyndon words. This proves a conjecture of Dolce, Restivo and Reutenauer.

**How the definition helps.** Comparing a finite factor through its infinite repetition puts finite and infinite factors under one order, so a nonincreasing factorization makes sense (our own). The generalized Lyndon factorization theorem supplies existence and uniqueness.

**Paper or page:** [Generalized Lyndon Factorizations of Infinite Words](https://arxiv.org/abs/1905.04746v2). It says: “We prove a conjecture of Dolce, Restivo, and Reutenauer: every infinite word has a unique nonincreasing factorization into finite and infinite generalized Lyndon words.”

**Sources:**

- [Amanda Burcroff, Eric Winsor, Generalized Lyndon Factorizations of Infinite Words, arXiv:1905.04746 (2019)](https://arxiv.org/abs/1905.04746v2)
- [Amanda Burcroff and Eric Winsor, Generalized Lyndon factorizations of infinite words, Theoretical Computer Science 809 (2020), 30–38](https://doi.org/10.1016/j.tcs.2019.11.003)

### Kernel evaluations reduce each learned layer to a finite span

**Remember:** Keep only what the training points can see.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68T07, 46E22. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** A layer’s training evaluation span is the set of linear combinations of the vectors that evaluate each output coordinate at each training input reaching that layer. These vectors exist because each coordinate evaluation on the layer’s Hilbert space is continuous and linear.

**Problem.** Let the objective be a loss on final training predictions plus a positively weighted sum of squared layer norms. Then at any minimizer, each layer lies in its training evaluation span.

**How the definition helps.** Projecting a layer onto its span keeps every training output, because those outputs are inner products with the span’s vectors (our own). So later layers see the same training inputs and the loss does not change. A nonzero removed component would strictly lower the penalty, which contradicts minimality (our own).

**Paper or page:** [A resource-efficient model for deep kernel learning](https://arxiv.org/abs/2410.09926v1). It says: “fulfills $f<sub>i</sub>\\in V<sub>i</sub>\\subset H<sub>i</sub>$”

**Sources:** none listed. No primary source with a working link was found.
