### Mutual reachability removes cycles

**Remember:** A cycle of groups would be one group.

*True by definition.* MSC 68R10 (Graph theory (including graph drawing) in computer science). arXiv cs.DM, cs.DS. Level 1: early undergraduate.

**Definition.** Group vertices when each is reachable from the other by a directed path. Keep an edge between different groups if the original graph has such an edge. Unlike one-way reachability, mutual reachability gives a partition.

**Problem.** The graph of groups has no directed cycles.

**How the definition helps.** In our own argument, a cycle of groups would make any two vertices on it mutually reachable. In our own argument, paths inside each group connect the ends of edges between groups. The work moves to finding the mutual reachability groups before ordering the groups so all edges go forward.

**Wikipedia:** [Strongly connected component](https://en.wikipedia.org/wiki/Strongly_connected_component). It says: “If each strongly connected component is contracted to a single vertex, the resulting graph is a directed acyclic graph”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative edges settle distances

**Remember:** An extra edge cannot make a path cheaper.

*Rules out counterexamples.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C85. arXiv cs.DS. Level 1: early undergraduate.

**Definition.** Give every edge of a finite directed graph a nonnegative length. This allows zero-length edges and rules out paths that become cheaper when extended.

**Problem.** Start at one source. Dijkstra’s algorithm tracks the shortest distance found so far to each vertex. Among unfinished vertices, it can permanently accept the smallest finite distance.

**How the definition helps.** Nonnegative lengths make every prefix of a path cost at most the whole path. In our own proof, after accepting the source, consider a shorter competing path and its first unfinished vertex. Processing its finished predecessor would have offered that vertex a distance smaller than the chosen minimum. For our own counterexample, take edges from s to a and b of lengths 2 and 3. An edge of length −2 from b to a makes accepting distance 2 too early.

**Wikipedia:** [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). It says: “Dijkstra's algorithm is commonly used on graphs where the edge weights are non-negative integers or real numbers.”

**Sources:**

- [Edsger W. Dijkstra, A Note on Two Problems in Connexion with Graphs (1959)](https://doi.org/10.1007/BF01386390)

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

### Binary tests certify sorting networks

**Remember:** Turn any failed comparison into a one before a zero.

*Rules out counterexamples.* MSC 68P10 (Searching and sorting), 68W10. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A comparator sends the smaller input to one wire and the larger to another. A comparator network fixes all wire pairs in advance. Unlike a general sorting procedure, it only uses these minimum and maximum gates.

**Problem.** A fixed comparator network sorts every input from a total order if it sorts every binary input.

**How the definition helps.** Every threshold commutes with minimum and maximum, so it commutes with each gate and therefore the entire network. In our own proof, a failed sort leaves a larger output before a smaller one. Map values above the smaller one to one and all other values to zero. The binary output now has a one before a zero. The work lies in checking binary inputs.

**Wikipedia:** [Sorting network](https://en.wikipedia.org/wiki/Sorting_network). It says: “if a sorting network can correctly sort all 2ⁿ sequences of zeros and ones, then it is also valid for arbitrary ordered inputs.”

**Sources:**

- [Kenneth E. Batcher, Sorting Networks and Their Applications (1968)](https://doi.org/10.1145/1468075.1468121)

### A read-only input tape makes logarithmic space a meaningful class

**Remember:** Do not charge a machine for merely reading its input.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 2: later undergraduate.

**Definition.** The class L contains the decision problems that a deterministic Turing machine solves using a logarithmic amount of writable memory. The machine reads its input from a separate tape that it cannot write on. Only the cells used on the work tape count as space.

**Problem.** One wants space classes below linear space, such as L and NL, and theorems about them, such as L ⊆ P. If the input sat on the work tape, every machine would use at least linear space.

**How the definition helps.** Separating the read-only input from the work tape means that space measures only memory the machine writes, so sublinear bounds make sense. A log-space machine can then hold a fixed number of pointers into the input, as the page says. It has only polynomially many configurations, so it runs in polynomial time. The page gives this argument for L ⊆ P. The same set-up defines log-space reductions, used for P-completeness and NL-completeness (our own). What stays hard is the separation questions, such as whether L equals P, which are open.

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

**How the definition helps.** The theorem follows at once from the definition, because polynomial-time reductions compose. To solve a problem in NP, reduce it to C and then run the fast algorithm for C. The P versus NP question itself is still open. The hard part is the Cook–Levin theorem, which shows that an NP-complete problem exists at all. That problem is Boolean satisfiability: decide whether some assignment of true and false makes a logical formula true. After the Cook–Levin theorem, each new NP-completeness proof needs only one reduction, as in Karp's list of 21 NP-complete problems.

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

**How the definition helps.** The binary form bounds the number of letters a tree of a given height can produce (our own). A path with at most m placeholders has at most m − 1 branching steps before its final letter (our own). If every path is that short, the word has at most 2ᵐ⁻¹ letters (our own). A longer path repeats a placeholder, so the derivation between its two occurrences can be repeated. An unrestricted grammar can have rules with longer right-hand sides, so this binary bound does not apply (our own). The work moves to proving that context-free grammars can be converted to this form.

**Wikipedia:** [Pumping lemma for context-free languages](https://en.wikipedia.org/wiki/Pumping_lemma_for_context-free_languages), [Chomsky normal form](https://en.wikipedia.org/wiki/Chomsky_normal_form). It says: “If s is sufficiently long, its derivation tree w.r.t. a Chomsky normal form grammar must contain some nonterminal N twice on some tree path”

**Sources:**

- [N. Chomsky, On certain formal properties of grammars, Information and Control 2 (1959)](https://doi.org/10.1016/S0019-9958(59)90362-6)

### Context-free grammars show context-free languages admit union, concatenation and star

**Remember:** A fresh start symbol joins grammars without mixing their rules.

*True by definition.* MSC 68Q42 (Grammars and rewriting systems), 68Q45. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A context-free grammar replaces one placeholder at a time, regardless of its neighbors. It generates words by starting at a designated placeholder and replacing placeholders until only letters remain. The alternative definition uses a pushdown automaton, a finite-state machine with a stack.

**Problem.** Context-free languages are closed under union, concatenation and Kleene star. The star operation takes all finite concatenations, including the empty word.

**How the definition helps.** The grammar definition lets fresh start rules choose or join derivations (our own). First rename the placeholders so that the two grammars share none (our own). For union, let the new start S produce either old start S₁ or S₂ (our own). For concatenation, use S → S₁S₂ (our own). For star, use S → S₁S or S → ε, where ε is the empty word (our own). With pushdown automata, these constructions must also manage the stack at the boundaries (our own). The work moves into proving that pushdown automata and grammars give the same languages (our own).

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

**How the definition helps.** In our own proof, determinism makes each accepted word count exactly once among paths from the start to an accepting state. If M counts letters on transitions, its nth power counts paths of length n. Weight each path by one factor of z per letter. Summing all lengths gives the inverse of I − zM, whose entries are rational functions of z. The start row and accepting columns give the required series. The equivalence with deterministic automata lets this proof cover languages given by regular expressions.

**Wikipedia:** [Regular language](https://en.wikipedia.org/wiki/Regular_language). It says: “The generating function of a language L is a rational function if L is regular.”

**Sources:** none listed. No primary source with a working link was found.

### Deterministic stack machines make complementation possible

**Remember:** One finished run gives one answer to flip.

*Rules out counterexamples.* MSC 68Q45 (Formal languages and automata), 68Q42. arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A pushdown automaton reads letters and stores symbols on a stack, where it can access only the top. A deterministic one has at most one possible move in each situation. The languages such machines accept are called deterministic context-free languages.

**Problem.** The complement of every deterministic context-free language is deterministic context-free.

**How the definition helps.** In our own explanation, determinism gives one decision to reverse once every run finishes. A normal-form theorem supplies an equivalent machine that reads through an end marker and always decides. Swapping its decisions then recognizes the complement. For our own counterexample without determinism, take all words over a, b and c except those of the form aⁿbⁿcⁿ for n ≥ 0. A stack machine can detect a wrong letter order or guess which adjacent block counts differ. Its complement is the standard example of a language no pushdown automaton recognizes.

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

**How the definition helps.** The automaton definition leaves room for a second machine in the finite control without adding a stack (our own). Pair each pushdown state with a state of a deterministic finite automaton for the regular language (our own). Update both states on a letter, but keep the finite automaton still on moves that read nothing (our own). Accept if both machines accept (our own). The grammar proof instead tracks the start and end automaton states for each placeholder’s output (our own). The work moves to proving that the two definitions of context-free language agree (our own).

**Wikipedia:** [Context-free language](https://en.wikipedia.org/wiki/Context-free_language). It says: “However, if L is a context-free language and D is a regular language then both their intersection L∩D and their difference L∖D are context-free languages.”

**Sources:** none listed. No primary source with a working link was found.

### Regular expressions make letter substitution preserve regularity

**Remember:** Replace the letters and keep the expression’s operations.

*True by definition.* MSC 68Q45 (Formal languages and automata). arXiv cs.FL. Level 2: later undergraduate.

**Definition.** A string homomorphism replaces each letter with a fixed word, possibly empty. Apply it to a regular expression by replacing each literal letter with an expression for its replacement word. Leave union, concatenation and repetition in place.

**Problem.** The image of a regular language under any string homomorphism is regular.

**How the definition helps.** Our own explanation is that replacing letters commutes with union, concatenation and taking all finite repetitions. Induction on the expression then identifies the new language with the image, by our own explanation. Kleene’s theorem carries the work of relating the expression proof to finite automata, by our own explanation.

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

**Problem.** The theorem says L is regular exactly when the Nerode relation has finitely many classes. The number of classes is the number of states of the minimal deterministic automaton, which is unique up to isomorphism.

**How the definition helps.** The classes are built to remember exactly what matters for the rest of the input, so they are the states of an automaton by definition. Reading a letter a moves the class of x to the class of xa, and the class of the empty string is the start state. Any deterministic automaton for L only puts strings with the same future in the same state, so it has at least as many states. This gives minimality and uniqueness. The theorem also gives a clean way to show a language is not regular: find infinitely many strings that are pairwise not equivalent (our own). Computing the classes fast still needs an algorithm such as Hopcroft's partition refinement (our own).

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

**How the definition helps.** The words with the property form a set of the kind used in the definition, by our own explanation. The smallest such set lies inside it, by our own explanation. The work moves to proving that finite concatenations form precisely that smallest set, by our own explanation.

**nLab:** [regular language](https://ncatlab.org/nlab/show/regular+language). It says: “is the smallest submonoid of V∗ that contains L(R).”

**Sources:** none listed. No primary source with a working link was found.

### Real time excludes stale reads

**Remember:** A finished write comes before a later read.

*Rules out counterexamples.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** A register stores a value, and a sequential read returns the most recently written value or the initial value. For a history of completed operations, linearizability requires a valid sequential order preserving the observed results. Whenever one operation finishes before another starts, that order must put it first. Sequential consistency requires only that the valid order respect each process’s own program order.

**Problem.** In a linearizable register, a read that starts after a write completes cannot return the older value if there is no other write.

**How the definition helps.** In our own argument, real-time order forces the read to follow the write in the sequential explanation. In our own example, one process finishes writing 1 and another then reads the initial 0. In our own argument, sequential consistency permits that result by placing the reader first. The work moves to proving that all operation results admit one sequential explanation within their time intervals.

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

**How the definition helps.** An augmenting path turns a comparison with all larger matchings into a test involving only the current matching. Swapping membership along the path adds one edge. Conversely, compare the current matching with a larger one and keep only edges belonging to exactly one. Each remaining vertex has at most one edge from each matching. The edges split into alternating paths and even cycles. Some path must contain an extra edge from the larger matching, so it augments the current one.

**Wikipedia:** [Berge's theorem](https://en.wikipedia.org/wiki/Berge%27s_theorem). It says: “D consists of paths and even cycles”

**Sources:** none listed. No primary source with a working link was found.

### Layered walks test divisibility

**Remember:** Count steps by changing layers.

*Makes the theorem clean to state or prove.* MSC 68R10 (Graph theory (including graph drawing) in computer science), 05C20. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a strongly connected directed graph, each vertex can reach every other by following arrows. For a finite such graph containing a cycle, its period is the greatest common divisor of its directed cycle lengths. Give each vertex k copies numbered modulo k. Each arrow goes from every copy of its tail to the next numbered copy of its head.

**Problem.** Let k be a positive integer at most the number of vertices. Ignore the arrows between copies. The period is divisible by k exactly when copy zero of a fixed vertex cannot reach any other copy of itself.

**How the definition helps.** In our own proof, the copy number records the length of a directed walk modulo k. Suppose k divides every cycle length. Walks from the fixed vertex to the same destination then have equal remainders. Appending a common return walk proves this, since each closed walk splits into directed cycles. Subtracting the destination remainder from the copy number gives a quantity unchanged across each edge in either direction. Conversely, visit a cycle whose length has nonzero remainder and return to the fixed vertex. Traversing the cycle once more changes the final copy, so at least one walk finishes outside copy zero.

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

### Mechanical Sturmian words are balanced because their block sums telescope

**Remember:** Add consecutive differences to count the ones in any block.

*True by definition. Confidence: medium.* MSC 68R15 (Combinatorics on words), 37B10. arXiv math.CO, math.DS. Level 2: later undergraduate.

**Definition.** A Sturmian word is an infinite binary sequence with exactly n + 1 distinct length-n blocks for each n ≥ 1. The mechanical definition writes its letters as successive differences of ⌊nθ + x⌋ or successive differences of ⌈nθ + x⌉. Here θ is irrational in (0, 1) and x is real.

**Problem.** Every Sturmian word is balanced, meaning that any two blocks of equal length differ in their counts of ones by at most one. The frequency of ones is θ.

**How the definition helps.** The mechanical definition gives balance and frequency by cancellation when adjacent differences are added (our own). For floors, the sum of the n letters after position m is ⌊(m + n)θ + x⌋ − ⌊mθ + x⌋. This is ⌊nθ⌋ or ⌊nθ⌋ + 1, and the same two bounds hold for ceilings. Dividing the initial block count by n gives the frequency θ in the limit. The work goes into the equivalence between counting distinct blocks and constructing the letters by floor or ceiling differences.

**Wikipedia:** [Sturmian word](https://en.wikipedia.org/wiki/Sturmian_word). It says: “The sequence w is Sturmian if it is the difference of non-homogeneous Beatty sequences, that is, for some x∈\[0,1) and some irrational θ∈(0,1)”

**Sources:**

- [M. Morse, G. A. Hedlund, Symbolic dynamics II. Sturmian trajectories, Amer. J. Math. 62 (1940) 1–42](https://doi.org/10.2307/2371431)

### Coefficients test higher-order monotonicity

**Remember:** Read the sign from the highest coefficient.

*True by definition. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Fix an integer k ≥ 1 and k + 1 planar points with distinct horizontal coordinates. Call them positive if a function through them has a nonnegative kth derivative everywhere. The alternative test reads the coefficient of xᵏ in the unique polynomial of degree at most k through the points.

**Problem.** A nonnegative coefficient characterizes positive point sets. A nonpositive coefficient likewise characterizes sets admitting a function with everywhere nonpositive kth derivative.

**How the definition helps.** In our own proof, a nonnegative coefficient immediately gives the required function because the polynomial’s kth derivative equals that coefficient times k factorial. Conversely, subtract the polynomial from any function witnessing positivity. The difference vanishes at all k + 1 coordinates. Applying Rolle’s theorem k times shows that the two kth derivatives agree somewhere between the extreme coordinates. This proves the coefficient test, and reversing the signs proves its negative counterpart.

**Paper or page:** [Higher-order Erdos--Szekeres theorems](https://arxiv.org/abs/1111.3824v3). It says: “and it equals f⁽ᵏ⁾(x)/k! (which is a constant function).”

**Sources:**

- [Marek Elias, Jiri Matousek, Higher-order Erdos–Szekeres theorems, arXiv:1111.3824v3](https://arxiv.org/abs/1111.3824v3)

### Lower envelopes give power diagrams

**Remember:** Subtract the common square, then compare only planes.

*True by definition.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Give each center c in Euclidean space a real weight w. Its power at x is the squared distance from x to c minus w. Its power cell consists of points where this value is minimal among all centers, including ties.

**Problem.** Each power cell is the set where one affine function attains the pointwise minimum of all the functions. An affine function is a linear function plus a constant.

**How the definition helps.** In our own proof, squaring the distance gives the same quadratic term x · x for every center. Subtract it from every power and the function for center c becomes c · c − 2c · x − w. The dot denotes the usual inner product. Removing a common term preserves every comparison and tie. Using ordinary distance would leave square roots in the comparison. The remaining work is to construct the lower envelope, or pointwise minimum, of these affine functions.

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

### Turn signs order rays

**Remember:** From a hull corner, every turn compares two rays.

*Rules out counterexamples.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** For labeled planar points with no three on a line, the order type records the clockwise or counterclockwise turn of every ordered triple. This replaces the full coordinates. Fix a vertex a of the convex hull, the smallest convex set containing the points.

**Problem.** At a hull vertex a, put p before q when the turn from a through p to q is counterclockwise. This rule totally orders all other points.

**How the definition helps.** In our own argument, all rays from a hull vertex lie in an angle smaller than half a turn. Within that angle, the turn sign compares directions in their ordinary angular order. At the center of an equilateral triangle, the same comparison cycles through the three corners.

**Paper or page:** [A canonical tree decomposition for order types, and some applications](https://arxiv.org/abs/2403.10311v2). It says: “defines a strict total order on X ∖ {a}.”

**Sources:**

- [Mathilde Bouvel, Valentin Féray, Xavier Goaoc, Florent Koechlin, A canonical tree decomposition for order types, and some applications, arXiv:2403.10311v2](https://arxiv.org/abs/2403.10311v2)

### Residual reachability certifies maximum flow

**Remember:** When no flow can get through, inspect the cut.

*True by definition.* MSC 68W05 (Nonnumerical algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** In a finite directed network, each edge has a nonnegative capacity. A feasible flow respects those capacities and conserves flow at every vertex except the source and sink. Give each edge a forward residual edge for unused capacity and a backward residual edge for flow that can be undone. Keep only residual edges with positive capacity.

**Problem.** A flow is maximum exactly when its residual graph has no path from source to sink.

**How the definition helps.** In our own proof, allowing backward steps makes a residual path describe a feasible increase even when some earlier decisions must be reversed. Increase the flow along that path by its smallest residual capacity, undoing flow at backward steps. If no path exists, group all vertices reachable from the source. Every original edge leaving this group is full, and every original edge entering it carries zero flow. Flow conservation then makes the current value equal the group’s total outgoing capacity, an upper bound for every flow.

**Wikipedia:** [Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm), [Max-flow min-cut theorem](https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem). It says: “When no more paths in step 2 can be found, s will not be able to reach t in the residual network.”

**Sources:**

- [L. R. Ford Jr. and D. R. Fulkerson, Maximal Flow Through a Network (1956)](https://doi.org/10.4153/CJM-1956-045-5)

### Vector clocks detect causality

**Remember:** Each coordinate records how far that process has reached you.

*True by definition.* MSC 68W15 (Distributed algorithms). arXiv cs.DC. Level 2: later undergraduate.

**Definition.** Number each process’s events starting at one. Causal precedence follows local event order and links from sending a message to receiving it, including chains of these steps. For each event, include that event and all its causal predecessors. Record the largest included event number for each process, using zero if it has none.

**Problem.** One event causally precedes another exactly when its vector is at most the other's in every coordinate and smaller in some coordinate.

**How the definition helps.** In our own proof, the vector records a prefix of each process’s events, so comparing vectors tests inclusion of causal histories. A single increasing timestamp can order events even when neither caused the other. The work lies in maintaining those prefixes locally by counting events and merging received clocks with coordinatewise maxima.

**Wikipedia:** [Vector clock](https://en.wikipedia.org/wiki/Vector_clock). It says: “every process also keeps track of the largest value of each of the other processes' clocks that it has so far been informed of.”

**Sources:**

- [Reinhard Schwarz and Friedemann Mattern, Detecting causal relationships in distributed computations: In search of the holy grail (1994)](https://doi.org/10.1007/BF02277859)

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

### Potential changes cancel

**Remember:** The intermediate potentials cancel.

*True by definition.* MSC 68W40 (Analysis of algorithms). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Assign each state of a data structure a number called its potential. Define the amortized cost of an operation as its actual cost plus the change in potential.

**Problem.** If the potential starts at zero and stays nonnegative, total amortized cost bounds total actual cost from above.

**How the definition helps.** In our own argument, the potential after one operation cancels the potential before the next. In our own argument, only the final nonnegative potential remains in the total charge. The work moves to finding a useful potential and bounding each operation's adjusted charge.

**Wikipedia:** [Amortized analysis](https://en.wikipedia.org/wiki/Amortized_analysis). It says: “The amortized cost is the immediate cost plus the change in potential.”

**Sources:** none listed. No primary source with a working link was found.

### Precise definitions turned Brewer's CAP conjecture into a theorem

**Remember:** During a partition, a store must choose between answering and staying consistent.

*Makes the theorem clean to state or prove.* MSC 68M14 (Distributed systems), 68P15. arXiv cs.DC, cs.DB. Level 3: graduate.

**Definition.** Gilbert and Lynch model a distributed data store as a shared object that clients read and write. Consistency means that every read receives the most recent write or an error. Availability means that every request to a non-failing node gets a response. Partition tolerance means that the system keeps working when the network drops or delays any number of messages between nodes.

**Problem.** Brewer conjectured that a distributed store cannot be consistent, available and partition tolerant at once. Stated only in words, the claim was too vague to prove.

**How the definition helps.** With these definitions the proof is short (our own summary of the proof). Split the nodes into two groups and drop every message between them. A write in one group must complete, by availability. A later read in the other group must also answer, but it cannot have heard of the write, so it breaks consistency. The strength of the theorem comes from the definitions, and so does its limit. The page notes that this consistency is not the consistency of ACID database transactions. It also says that the choice between consistency and availability arises when a partition happens.

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

**How the definition helps.** The type is part of the definition of a reduction step, so no preservation proof is needed. The PLFA chapter on de Bruijn terms says this directly. For the step that applies a function, preservation rests on substitution. That chapter builds type preservation into its definition of substitution. So the work moves into defining substitution on typed terms. Relating typed steps to raw steps needs a separate theorem, and that remark is our own.

**nLab:** [intrinsic and extrinsic views of typing](https://ncatlab.org/nlab/show/intrinsic+and+extrinsic+views+of+typing). It says: “Like the syntactician's parts of speech, as a way of defining the grammar of well-formed expressions.”

**Sources:**

- [Philip Wadler, Wen Kokke and Jeremy G. Siek, Programming Language Foundations in Agda, DeBruijn chapter](https://plfa.github.io/DeBruijn/#reduction)

### Polymorphism only at let keeps type inference decidable

**Remember:** Polymorphism only at let keeps type inference decidable.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** In the Hindley–Milner type system, types may contain type variables, as in α → α. Only names bound by let may get a polymorphic type such as ∀α. α → α. Parameters of λ-abstractions must get a type without ∀.

**Problem.** A compiler should infer the types of programs with no annotations. Hindley–Milner gives every typable program a principal type, a most general type of which all its other types are instances, and Algorithm W finds it.

**How the definition helps.** Allowing ∀ only for let-bound names means inference only has to solve first-order unification problems, which have most general solutions. If λ-bound parameters could also be polymorphic, the system would be System F, the polymorphic lambda calculus. Wells proved that type inference in System F is undecidable, as the page notes. So the restriction removes the hard cases but keeps the useful idiom let id = λx.x in (id true, id 0). What stays hard is the worst case, because Hindley–Milner inference takes exponential time on some programs, as the page notes.

**Wikipedia:** [Hindley–Milner type system](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system). It says: “the type system to allow only let-bound variable to have polymorphic types, while the parameters in lambda-abstractions must get a monomorphic type, type inference becomes decidable.”

**Sources:**

- [R. Hindley, The principal type-scheme of an object in combinatory logic, Transactions of the AMS 146 (1969) 29–60](https://doi.org/10.2307/1995158)
- [L. Damas and R. Milner, Principal type-schemes for functional programs, POPL 1982](https://doi.org/10.1145/582153.582176)

### Progress and preservation turn type safety into two inductive lemmas

**Remember:** Never stuck now, and still well typed after each step.

*Makes the theorem clean to state or prove.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Wright and Felleisen define type soundness for a language given by step-by-step reduction rules. Progress says that a well-typed term is a value or can take a step. Preservation, also called subject reduction, says that a step keeps the type of a well-typed term.

**Problem.** Type safety says a well-typed program never reaches a stuck state, such as using a number as a function. One wants a proof method that scales to real languages with references, exceptions and polymorphism.

**How the definition helps.** Safety speaks about whole runs, but progress and preservation each speak about one step, so each is proved by induction on typing derivations. Chaining them shows that every reachable term is well typed and so not stuck. Earlier proofs often went through denotational models, which had to be rebuilt for each new feature (our own). The syntactic method needs no model, so it extends one feature at a time. What stays hard is the lemma for each feature, such as substitution lemmas and typing of the store (our own). The method proves only safety, not termination or correctness.

**Wikipedia:** [Type safety](https://en.wikipedia.org/wiki/Type_safety). It says: “Computer scientists Andrew K Wright and Matthias Felleisen formulate a definition and proof technique for type safety in languages defined by operational semantics.”

**Sources:**

- [A. K. Wright and M. Felleisen, A syntactic approach to type soundness, Information and Computation 115 (1994) 38–94](https://doi.org/10.1006/inco.1994.1093)

### The value restriction keeps polymorphic references from breaking type safety

**Remember:** Only values, which run no effects, may get polymorphic types.

*Rules out counterexamples.* MSC 68N15 (Theory of programming languages), 03B38. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** In ML-style type inference, a name bound by let can get a polymorphic type ∀α. τ, usable at many types. Under the value restriction, the type is generalized only when the bound expression is a syntactic value. Syntactic values are constants, variables, λ-abstractions and constructors applied to values. Applications, such as ref (fn x =&gt; x), are not generalized.

**Problem.** Type safety says that a well-typed program never applies an operation to a value of the wrong type. With mutable references and unrestricted let-polymorphism this fails.

**How the definition helps.** Evaluating a syntactic value cannot create a reference cell, so giving it many types cannot let one cell be used at two types. The page gives the counterexample. The binding c = ref (fn x =&gt; x) gets the type ∀α. (α → α) ref. Then c := (fn x =&gt; x + 1) stores an integer function, and !c true applies it to a Boolean. Under the value restriction, c gets one unknown type, the assignment fixes it to int → int, and the checker rejects !c true. The cost is that some safe definitions, such as partial applications, lose their polymorphism (our own).

**Wikipedia:** [Value restriction](https://en.wikipedia.org/wiki/Value_restriction). It says: “The value restriction prevents reference cells from holding values of different types and preserves type safety.”

**Sources:**

- [A. K. Wright, Simple imperative polymorphism, LISP and Symbolic Computation 8 (1995) 343–355](https://doi.org/10.1007/BF01018828)

### Defining the least Herbrand model as an intersection makes it test consequences

**Remember:** Intersect term models to keep just the forced facts.

*True by definition.* MSC 68N17 (Logic programming), 03B70, 03C05. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A definite Horn clause says that one atomic formula holds whenever finitely many atomic formulas hold. A Herbrand model has the variable-free terms as its elements, in a language with a constant symbol and no built-in equality. View each Herbrand model as its set of true variable-free atomic formulas. The least Herbrand model of a set of definite clauses is the intersection of all its Herbrand models.

**Problem.** A variable-free atomic formula follows from a set of definite Horn clauses exactly when it holds in their least Herbrand model.

**How the definition helps.** An atomic formula lies in the intersection exactly when it holds in every Herbrand model, so one direction is by definition, in our own argument. Wikipedia credits van Emden and Kowalski with this least model and states the result. The rest of the work moves into two lemmas, in our own account. First, the intersection is itself a model, because each clause has one conclusion, in our own account. Second, any model gives a Herbrand model with the same true variable-free atomic formulas, so Herbrand models detect every countermodel, in our own account. This second lemma works because the clauses are universal sentences without existential quantifiers, in our own account.

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

**How the definition helps.** Sampling every second entry lets a search move to the next list with at most one backward correction. In our own proof, treat the end as a sentinel larger than every query. Binary search finds the first qualifying entry in the first augmented list. At every list, the original-list link gives the answer directly. Follow its other link and check the preceding entry, since two skipped entries would include a sample. If S counts all augmented entries, at most S/2 are copies. Thus S ≤ n + S/2, so S ≤ 2n.

**Wikipedia:** [Fractional cascading](https://en.wikipedia.org/wiki/Fractional_cascading). It says: “each earlier list Mᵢ is formed by merging Lᵢ with every second item from Mᵢ₊₁.”

**Sources:**

- [Bernard Chazelle and Leonidas J. Guibas, Fractional Cascading: I. A Data Structuring Technique (1986)](https://doi.org/10.1007/BF01840440)

### Defining differential privacy by a probability ratio makes it compose

**Remember:** One person's data can move any output probability by at most a factor exp(ε).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data). arXiv cs.CR, stat.ME. Level 3: graduate.

**Definition.** A randomized mechanism is an algorithm that uses random choices to answer queries about a database. It is ε-differentially private if one person's record has little effect on its outputs. Precisely, take any two databases that differ in one person's record. Then the probability of any set of outputs changes by at most a factor exp(ε).

**Problem.** Bound the total privacy loss of a system that is built from many queries and later processing.

**How the definition helps.** The guarantee is a worst-case bound on a ratio of probabilities, and such bounds combine simply. t queries that are each ε-private and use independent randomness are together tε-private. Queries on disjoint parts of the data, with parameters ε₁, ε₂, …, are together private with the largest εᵢ. Any processing of the output stays ε-private. So designers can build and analyse private systems in modules, and spend a total privacy budget across them. What stays hard is the trade-off between privacy and accuracy. The tight composition bounds for the (ε, δ) variant, which also allows a small failure probability δ, are also hard.

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

**Problem.** Analysts round, plot, and fit models to a private answer. One wants a guarantee that no such later processing leaks more about any person.

**How the definition helps.** Because the definition quantifies over every set of outputs, post-processing is covered at once. For a function g, the event g(M(D)) ∈ T is the event M(D) ∈ S, with S the preimage of T (our own proof). So the same inequality holds. A randomized g is a mixture of fixed functions, so it is covered too (our own). The only condition is that g does not look at the data again, as the quoted theorem says. The real work then moves to the composition theorems, which handle algorithms that do use the data again.

**Paper or page:** [Differentially Private Algorithms for Synthetic Power System Datasets](https://arxiv.org/abs/2303.11079v1). It says: “If query Q̃ satisfies ε-DP, then g∘Q̃(y), where g is an arbitrary, data-independent post-processing of the query answer, also satisfies ε-DP.”

**Sources:**

- [Vladimir Dvorkin, Audun Botterud, Differentially Private Algorithms for Synthetic Power System Datasets, IEEE Control Systems Letters 7 (2023) 2053–2058, arXiv:2303.11079](https://arxiv.org/abs/2303.11079v1)

### Postselection makes PP a quantum class

**Remember:** Quantum computing with free conditioning is exactly majority-vote counting.

*True by definition.* MSC 68Q12 (Quantum algorithms and complexity in the theory of computing), 68Q15. arXiv cs.CC, quant-ph. Level 3: graduate.

**Definition.** PostBQP is the class of problems that a polynomial-time quantum computer can solve with bounded error if it may postselect. Postselection means that the computer conditions on a chosen measurement outcome, which must have nonzero probability. PP is the class of problems where a probabilistic polynomial-time machine is right with probability more than one half.

**Problem.** Show that PP is closed under intersection. Beigel, Reingold and Spielman first proved this with a hard argument about rational approximations (our own).

**How the definition helps.** Some properties are easy to prove for PostBQP, and the equality with PP transfers them (our own). For example, closure under intersection is easy for PostBQP, because one can run two postselected computations together and postselect on both (our own). Aaronson used this to give a short new proof that PP is closed under intersection (our own; his paper makes this point). The work moves into the proof that PostBQP equals PP. The data-set theorem states that the equality holds relative to every classical oracle.

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

**Problem.** We want a robust class of problems that randomized algorithms solve efficiently. The class should not depend on the arbitrary constant 1/3.

**How the definition helps.** The error stays a fixed distance below 1/2 on every input, so repeating the algorithm makes the error as small as we like. Run the algorithm k times and take the majority answer; the error then falls exponentially in k. So any constant between 0 and 1/2 in place of 1/3 defines the same class. An error bound such as 1/2¹⁰⁰, or one that depends on the input length, also defines the same class. The fixed gap is what makes this work: the class PP allows error just below 1/2, and it does not have this property (our own contrast). Whether BPP = P is still open (our own remark).

**Wikipedia:** [BPP (complexity)](https://en.wikipedia.org/wiki/BPP_%28complexity%29). It says: “the choice of 1/3 in the definition is arbitrary.”

**Sources:**

- [Gill, J. (1977). Computational complexity of probabilistic Turing machines. SIAM Journal on Computing 6(4), 675–695.](https://doi.org/10.1137/0206049)

### Time-constructible bounds make the time hierarchy theorem true

**Remember:** A machine must be able to set its own alarm clock.

*Rules out counterexamples.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 68Q04. arXiv cs.CC. Level 3: graduate.

**Definition.** A function f from natural numbers to natural numbers is time-constructible if some Turing machine, given n in unary (as a string of n ones), computes f(n) in O(f(n)) steps. A function f is fully time-constructible if some machine halts in exactly f(n) steps.

**Problem.** The deterministic time hierarchy theorem: for a time-constructible f, DTIME(o(f(n)/log f(n))) is strictly contained in DTIME(f(n)). Here DTIME(t(n)) is the class of problems that a deterministic Turing machine solves in O(t(n)) steps. So more time solves strictly more problems.

**How the definition helps.** The proof needs a clock, and constructibility lets a machine build that clock. The proof simulates machines and stops them after f(n) steps, which is impossible if f(n) cannot be computed in that time. The Borodin–Trakhtenbrot gap theorem shows that the condition is needed. For any computable g with g(x) ≥ x, there is a time bound T with DTIME(g(T(n))) = DTIME(T(n)), and such T are often not constructible. Linking the gap theorem to the constructibility condition as its counterexample is our own framing, though the gap theorem article notes that the gap bounds are often nonconstructible. All natural bounds such as n², 2ⁿ and n log n are constructible, so the theorem covers the cases of interest.

**Wikipedia:** [Constructible function](https://en.wikipedia.org/wiki/Constructible_function), [Gap theorem](https://en.wikipedia.org/wiki/Gap_theorem). It says: “To formulate them precisely, it is necessary to have a precise definition for a natural function f for which the theorem is true.”

**Sources:**

- [Hartmanis, J.; Stearns, R. E. (1965). On the computational complexity of algorithms. Transactions of the AMS 117, 285–306.](https://doi.org/10.1090/S0002-9947-1965-0170805-7)
- [Borodin, A. (1972). Computational complexity and the existence of complexity gaps. Journal of the ACM 19(1), 158–174.](https://doi.org/10.1145/321679.321691)

### Log-space reductions keep P-completeness from being trivial

**Remember:** A reduction must be weaker than the class it measures.

*Rules out counterexamples.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** A problem in P is P-complete if every problem in P reduces to it. The reduction must be weaker than polynomial time. Usually it is computable in logarithmic space, or by a uniform family of fast parallel circuits (an NC reduction).

**Problem.** One wants complete problems for P, such as the circuit value problem, that would give NC = P if they had fast parallel algorithms. NC is the class of problems solved fast by polynomially many parallel processors. Under polynomial-time reductions this notion is trivial.

**How the definition helps.** A weak reduction cannot solve the problem by itself, so completeness again means at least as hard as everything in P. A polynomial-time reduction can solve the first problem and then output a fixed yes-instance or no-instance of the second (our own explanation). So every problem in P except the empty language and the language of all strings would be P-complete. Log-space reductions rule this out. Then Ladner proved that the circuit value problem is P-complete, and a fast parallel algorithm for it would give NC = P. Whether NC equals P is still open.

**Wikipedia:** [P-complete](https://en.wikipedia.org/wiki/P-complete), [Polynomial-time reduction](https://en.wikipedia.org/wiki/Polynomial-time_reduction). It says: “polynomial-time reductions cannot be used to define complete languages: if they were used in this way, every nontrivial problem in P would be complete.”

**Sources:**

- [R. E. Ladner, The circuit value problem is log space complete for P, SIGACT News 7 (1975)](https://doi.org/10.1145/990518.990519)

### Problems hard even with small numbers have no fast approximation scheme

**Remember:** Strongly hard means hard even with small numbers.

*Makes the theorem clean to state or prove.* MSC 68Q17 (Computational difficulty of problems (lower bounds, completeness, difficulty of approximation, etc.)), 68W25. arXiv cs.CC, cs.DS. Level 3: graduate.

**Definition.** A problem is strongly NP-complete if it stays NP-complete when every number in the input is at most a polynomial in the input length. An equivalent condition is that it stays NP-complete when the numbers are written in unary, so that the number n takes n symbols.

**Problem.** Some problems, like knapsack, have pseudo-polynomial algorithms and good approximation schemes. Others, like bin packing, have neither unless P = NP, and we want a definition that separates the two kinds. (A pseudo-polynomial algorithm runs in time polynomial in the size of the numbers in the input, not in the number of their digits.)

**How the definition helps.** The strong notion excludes hardness that comes only from large numbers. Knapsack is NP-complete only because its numbers can be exponentially large. Dynamic programming solves it in time polynomial in the numbers. With the strong notion, one can state a clean result. A strongly NP-hard optimization problem with a polynomially bounded objective has no fully polynomial-time approximation scheme unless P = NP. (Such a scheme comes within a factor 1 + ε of the best value, in time polynomial in the input length and in 1/ε.) What stays open is P versus NP itself, on which the result depends.

**Wikipedia:** [Strong NP-completeness](https://en.wikipedia.org/wiki/Strong_NP-completeness). It says: “any strongly NP-hard optimization problem with a polynomially bounded objective function cannot have a fully polynomial-time approximation scheme (or FPTAS) unless P = NP.”

**Sources:**

- [Garey, M. R.; Johnson, D. S. (1978). "Strong" NP-completeness results: motivation, examples, and implications. Journal of the ACM 25(3), 499–508.](https://doi.org/10.1145/322077.322090)

### Fixed-point logic captures polynomial time once structures carry an order

**Remember:** Give the logic an order, and recursion computes exactly polynomial time.

*Rules out counterexamples.* MSC 68Q19 (Descriptive complexity and finite models), 03C13. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** First-order logic with a least fixed point operator, written FO\[LFP\], can define a relation by recursion, as the least solution of a monotone equation. An ordered structure is a finite structure, such as a graph, that comes with a linear order on its elements.

**Problem.** The Immerman–Vardi theorem says that, on ordered finite structures, the properties definable in FO\[LFP\] are exactly those decidable in polynomial time.

**How the definition helps.** With an order, formulas can name positions as numbers and so simulate a polynomial-time Turing machine step by step. Without an order the theorem fails. A standard counterexample is the property that a set has an even number of elements (our own; not on the page). It is decidable in polynomial time, but no FO\[LFP\] formula defines it on sets with no other structure. The page notes a contrast, Fagin's theorem for NP, which needs no order. That logic may say that some relation exists, so it can guess an order (our own remark). Whether some logic captures polynomial time on unordered structures is still open.

**Wikipedia:** [Descriptive complexity theory](https://en.wikipedia.org/wiki/Descriptive_complexity_theory). It says: “First-order logic with a least fixed point operator gives P, the problems solvable in deterministic polynomial time, but uniquely on ordered structures.”

**Sources:**

- [N. Immerman, Relational queries computable in polynomial time, Information and Control 68 (1986) 86–104](https://doi.org/10.1016/s0019-9958(86)80029-8)
- [M. Y. Vardi, The complexity of relational query languages, STOC 1982](https://doi.org/10.1145/800070.802186)

### MSO gives linear time on bounded treewidth

**Remember:** Say it in MSO, and bounded treewidth makes it linear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q19 (Descriptive complexity and finite models), 05C83. arXiv cs.DS, cs.LO. Level 3: graduate.

**Definition.** Monadic second-order logic (MSO) on graphs can quantify over vertices, edges, and sets of vertices or edges. Many graph properties, such as 3-colourability or having a Hamiltonian cycle, are MSO-definable. Treewidth measures how close a graph is to a tree.

**Problem.** Show that a graph problem can be solved in linear time on graphs of bounded treewidth. Without a general tool, each problem needs its own dynamic program over a tree decomposition.

**How the definition helps.** Courcelle's theorem moves the work from the algorithm to the definition: once a property is written in MSO, the linear-time algorithm comes for free. For example, 3-colourability says that three vertex sets cover all vertices and no edge lies inside any one of them (our own example). The proof turns the formula into a finite tree automaton that runs on a tree decomposition (our own). What stays hard is the size of F (our own). Frick and Grohe showed that, unless P = NP, no tower of exponentials of fixed height bounds F (our own).

**Paper or page:** [Quantum-Inspired Perfect Matching under Vertex-Color Constraints](https://arxiv.org/abs/2209.13063). It says: “Let f be a formula in extended MSO. Then there is an algorithm which, on every graphs with n vertices and treewidth tw, decides whether f holds in G in O(F(\|f\|, tw)·n), for some computable function F.”

**Sources:**

- [Quantum-Inspired Perfect Matching under Vertex-Color Constraints, arXiv:2209.13063 (2022)](https://arxiv.org/abs/2209.13063)
- [Bruno Courcelle, The monadic second-order logic of graphs. I. Recognizable sets of finite graphs, Information and Computation (1990)](https://doi.org/10.1016/0890-5401(90)90043-h)

### Levin's average polynomial time survives a quadratic slowdown

**Remember:** Average-case efficiency should not depend on how fast your computer is.

*Rules out counterexamples.* MSC 68Q25 (Analysis of algorithms and problem complexity), 68Q15. arXiv cs.CC. Level 3: graduate.

**Definition.** Levin's definition of average polynomial time bounds how fast slow inputs become rare. In the form on the page, there are constants c and ε &gt; 0 with this property. Among inputs of length n, at most a fraction nᶜ divided by t to the power ε need more than t steps. The naive definition asks only that the expected running time be polynomial.

**Problem.** A definition of efficient on average should not depend on the machine model. In particular, if algorithm A is efficient on average, an algorithm B that takes the square of A's time should be too.

**How the definition helps.** Levin's condition is still a polynomial bound after the running time is squared, so it does not depend on polynomial changes of the machine model. In the page's counterexample, A takes n² steps on every input of length n except one, where it takes 2ⁿ steps. Under the uniform distribution A has polynomial expected time, but B, with squared time, has expected time about 2ⁿ. Levin's definition counts both as efficient. With it, Levin could define complete problems for NP problems paired with input distributions. Finding natural complete problems stays hard. Gurevich showed that distributions with no very likely input cannot give them, unless exponential time equals its nondeterministic version.

**Wikipedia:** [Average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity). It says: “Such a definition has various shortcomings; in particular, it is not robust to changes in the computational model.”

**Sources:**

- [L. A. Levin, Average case complete problems, SIAM Journal on Computing 15 (1986) 285–286](https://doi.org/10.1137/0215020)

### Smoothed complexity explains why the simplex method is fast in practice

**Remember:** The worst input, shaken a little, is no longer bad.

*Makes the theorem clean to state or prove.* MSC 68Q25 (Analysis of algorithms and problem complexity), 90C60, 90C05. arXiv cs.CC, math.OC. Level 3: graduate.

**Definition.** The smoothed complexity of an algorithm is the worst case, over all inputs, of the expected running time after small random noise is added. For linear programs, the noise is Gaussian with standard deviation σ, added to each entry of the constraint data.

**Problem.** The simplex method is fast on practical linear programs. Yet for many common pivot rules, the rules that choose the next vertex, it takes exponentially many steps on some inputs. Spielman and Teng showed that its smoothed complexity is polynomial, with the shadow vertex pivot rule.

**How the definition helps.** Worst-case analysis says the simplex method is slow, and average-case analysis depends on an input distribution that real inputs need not follow. Smoothed complexity keeps the adversary but gives it shaky hands, so isolated bad inputs no longer count. With this definition, the claim that simplex is fast can be stated and proved. The page gives a later bound, polynomial in the dimension d, in log n and in 1/σ. The bound holds for the shadow vertex rule, which is slower in practice than Dantzig's rule, as the page notes. The proof itself stays hard, a long probabilistic argument about random polytopes (our own).

**Wikipedia:** [Smoothed analysis](https://en.wikipedia.org/wiki/Smoothed_analysis). It says: “Smoothed analysis is a hybrid of worst-case and average-case analyses that inherits advantages of both.”

**Sources:**

- [D. A. Spielman and S.-H. Teng, Smoothed analysis of algorithms: why the simplex algorithm usually takes polynomial time, STOC 2001](https://doi.org/10.1145/380752.380813)

### Prefix-free programs make Kolmogorov complexity subadditive

**Remember:** A self-delimiting program cannot hide information in its own length.

*Rules out counterexamples.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** A set of programs is prefix-free when no valid program is the start of another. The prefix-free Kolmogorov complexity K(x) is the length of the shortest program that produces x. The program runs on a universal machine whose valid programs form a prefix-free set.

**Problem.** We want clean inequalities such as subadditivity, K(x, y) ≤ K(x) + K(y) + O(1). In words, describing x and y together costs at most the two separate costs plus a constant.

**How the definition helps.** A prefix-free program marks its own end, so we can put two programs side by side and still read both. For plain complexity C, subadditivity fails. For any c there are strings x and y with C(xy) ≥ C(x) + C(y) + c. The reason is that a plain program also carries information in its length, and we must say where x ends. With prefix-free programs, the inequalities hold with only a constant error instead of logarithmic terms. The article credits this variant mainly to Levin (1974). Chaitin's 1975 paper, listed below, is our own addition as an independent source.

**Wikipedia:** [Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). It says: “To fix this defect, we introduce the prefix-free Kolmogorov complexity.”

**Sources:**

- [Chaitin, G. J. (1975). A theory of program size formally identical to information theory. Journal of the ACM 22(3), 329–340.](https://doi.org/10.1145/321892.321894)

### The invariance theorem makes Kolmogorov complexity well defined

**Remember:** Change the language, and complexity changes by at most a constant.

*Makes the theorem clean to state or prove.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.IT, cs.CC. Level 3: graduate.

**Definition.** The Kolmogorov complexity of a string is the length of the shortest program that outputs it on a fixed universal machine. A universal machine is one that can simulate any other machine when it gets that machine's program. Statements about complexity are taken up to an additive constant.

**Problem.** The information content of a single string should be a quantity that does not depend on the arbitrary choice of programming language.

**How the definition helps.** A universal language can run an interpreter for any other language, and the interpreter has a fixed length. This is the content of the invariance theorem. For a universal description language U and any other language L, there is a constant c such that, for every string x, the complexity of x relative to U is at most its complexity relative to L plus c. So if complexity is defined on a universal machine and every equation is read up to an additive constant, the theory does not depend on the machine. What remains (our own remark): the constant can be large, so the theory says little about any single short string. The complexity function itself is not computable.

**Wikipedia:** [Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). It says: “By default, all equations hold only up to an additive constant.”

**Sources:**

- [Solomonoff, R. J. (1964). A formal theory of inductive inference. Part I. Information and Control 7(1), 1–22.](https://doi.org/10.1016/S0019-9958(64)90223-2)

### Distribution-free learning is characterized by finite VC dimension

**Remember:** Learnable for every distribution exactly when no large set is shattered.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 68T05. arXiv cs.LG, cs.CC. Level 3: graduate.

**Definition.** A concept class C is PAC (probably approximately correct) learnable if one algorithm works for every target concept in C and every distribution D. It uses a sample of size polynomial in 1/ε and 1/δ. With probability at least 1 − δ, it outputs a hypothesis with error at most ε under D. The VC dimension of C is the size of the largest set of points that C shatters, that is, on which C realizes every labelling.

**Problem.** Which concept classes can be learned from few examples? Blumer, Ehrenfeucht, Haussler and Warmuth showed that, under mild measurability conditions, C is learnable in this sense exactly when its VC dimension is finite.

**How the definition helps.** Because the learner must succeed for every distribution, an adversary may put all the probability on any finite set of points (our own sketch). So a shattered set of size d forces about d examples, and infinite VC dimension rules out learning. Conversely, finite VC dimension bounds the number of labellings of a sample, by the Sauer–Shelah lemma. Then the error on the sample is close to the true error for all hypotheses at once. The result is a purely combinatorial test for learnability. Running time is a separate matter, and some classes with finite VC dimension are hard to learn efficiently under cryptographic assumptions (our own).

**Wikipedia:** [Probably approximately correct learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning), [Vapnik–Chervonenkis dimension](https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension). It says: “Thus, the sample-complexity is a linear function of the VC dimension of the hypothesis space.”

**Sources:**

- [A. Blumer, A. Ehrenfeucht, D. Haussler and M. K. Warmuth, Learnability and the Vapnik–Chervonenkis dimension, Journal of the ACM 36 (1989) 929–965](https://doi.org/10.1145/76359.76371)

### Finite VC dimension is exactly uniform convergence of empirical frequencies

**Remember:** If a class cannot shatter large sets, sample frequencies converge uniformly.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62G20. arXiv cs.LG, stat.TH. Level 3: graduate.

**Definition.** A class of sets 𝒞 shatters a finite set when every subset of it is cut out by some set in 𝒞. The Vapnik–Chervonenkis (VC) dimension is the size of the largest set that 𝒞 shatters. A class is uniform Glivenko–Cantelli when empirical frequencies converge to probabilities, uniformly over 𝒞 and over all distributions.

**Problem.** A class of sets, with suitable measurability, is a uniform Glivenko–Cantelli class if and only if its VC dimension is finite. The classical case is the class of half-lines, which gives the Glivenko–Cantelli theorem for distribution functions.

**How the definition helps.** The VC dimension turns uniform convergence over an infinite class into a counting problem. Our own: by the Sauer–Shelah lemma, such a class cuts out only polynomially many subsets of n points, so a union bound works. The page gives the standard bad case, the class of all finite sets, which has infinite VC dimension. For a distribution with no atoms, the sample itself is a finite set with empirical frequency 1 and probability 0, so convergence fails. The page says that measurability conditions are also needed, so the theorem must exclude badly measurable classes. Our own: what stays hard is the symmetrization argument that replaces the true probability by a second sample.

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

**Problem.** Deterministic automata are needed to complement automata easily and to solve games on infinite words. McNaughton's theorem says every ω-regular language, that is, every language of a Büchi automaton, is recognized by a deterministic Muller automaton.

**How the definition helps.** The Muller condition can say that some states occur only finitely often, which the Büchi condition cannot say for a deterministic run. The page gives the counterexample it removes. No deterministic Büchi automaton recognizes the infinite words over 0 and 1 that contain only finitely many 1s. A deterministic Muller automaton does it with two states that remember the last letter, and accepts when only the state for 0 recurs (our own). So with Muller or Rabin acceptance, deterministic and nondeterministic automata have the same power. What stays hard is the construction, and Safra's construction is intricate with an exponential blow-up (our own).

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

**Problem.** Plotkin showed that Scott's model of PCF, built from domains and continuous functions, is not fully abstract. Some programs behave the same in every PCF context but have different meanings in the model.

**How the definition helps.** The failure comes from elements of the model that no PCF program defines, and parallel or is such an element. PCF is very sequential, so it cannot define parallel or, as the Denotational semantics page says. Plotkin's counterexample uses two test programs that differ only when given a parallel or, so no PCF context separates them (our own summary). Once parallel or is added to the language, every finite element of the model is definable and full abstraction holds (our own summary of Plotkin). The change is to the language, not the model. Milner gave a fully abstract model of PCF itself in 1977, built from its syntax. Models not built from syntax came in the 1990s, as the page notes.

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

**Problem.** Specifications of concurrent programs mix nothing bad happens with something good happens. Alpern and Schneider proved that every property is the intersection of a safety property and a liveness property.

**How the definition helps.** With these definitions, safety properties are the closed sets in a natural topology on infinite sequences, as Plotkin observed. Liveness properties are the dense sets. Each set P is its closure, a closed set, intersected with a dense set: P joined with the outside of its closure (our own step). That one line is the decomposition theorem. Alpern and Schneider later showed how to prove each part: safety needs an invariant, and liveness needs a well-foundedness argument. What stays hard is proving such properties of actual programs (our own).

**Wikipedia:** [Safety and liveness properties](https://en.wikipedia.org/wiki/Safety_and_liveness_properties). It says: “Alpern and Schneider gives the formal definition for liveness, accompanied by a proof that all properties can be constructed using safety properties and liveness properties.”

**Sources:**

- [B. Alpern and F. B. Schneider, Defining liveness, Information Processing Letters 21 (1985) 181–185](https://doi.org/10.1016/0020-0190(85)90056-0)

### The separating conjunction makes the frame rule sound for pointer programs

**Remember:** Prove a program on its own memory, and the rest stays untouched.

*Makes the theorem clean to state or prove.* MSC 68Q60 (Specification and verification (program logics, model checking, etc.)), 03B47. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** Separation logic extends Hoare logic, which proves triples {P} C {Q}: if P holds before program C runs, then Q holds after. Its key connective is the separating conjunction P ∗ R. It holds of a heap that splits into two disjoint parts, one satisfying P and one satisfying R. A triple also promises that C does not fault, that is, never touches memory that P does not describe.

**Problem.** Programs with pointers can change memory through aliases, which are two names for the same cell. One wants to verify each procedure using only the memory it uses, and reuse that proof in any larger context.

**How the definition helps.** The frame rule infers {P ∗ R} C {Q ∗ R} from {P} C {Q}, when C does not modify the variables in R. It is sound because ∗ makes R describe memory apart from that of P. The no-fault promise means C only touches the memory of P. With ordinary conjunction the rule fails (our own example). If x and y may point to the same cell, writing to the cell at x can change the value read at y. The page calls the result local reasoning, where proofs mention only the memory a component uses. What stays hard is shared memory and concurrency, which need extensions such as fractional permissions.

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

**Problem.** An analysis needs an over-approximation of the least fixed point of the program's transfer function f. Plain iteration from ⊥ need not stop if the ordered set has infinite increasing chains. An example is the intervals \[0,0\], \[0,1\], \[0,2\] and so on, for a counting loop.

**How the definition helps.** Stopping after finitely many steps is part of the definition of widening, so termination of the analysis holds by definition. When the iteration xₙ₊₁ = xₙ ∇ f(xₙ) stops at some x, then f(x) ≤ x. For a monotone f, the Knaster–Tarski theorem puts such an x above the least fixed point, as the page explains. For intervals, a standard widening sends an unstable bound to infinity (our own example). So a loop counter gets the interval from 0 to +∞ after a few steps. An ascending chain condition would also give termination, but it rules out useful domains such as intervals. What stays hard is precision, since widening loses information that narrowing only partly recovers (our own).

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

**Problem.** One wants a finite set of axioms from which every true equation between regular expressions can be derived. Kozen proved in 1994 that the Kleene algebra axioms are complete in this sense.

**How the definition helps.** The implications say that a\* is the least solution of a linear inequality, and that pins down star with finitely many rules. Purely equational axioms cannot do this, because Redko proved that no finite set of equations is complete. Salomaa's complete systems used inference rules that the page calls problematic. Kozen's choice keeps the axioms finite and of a simple first-order form, so that Kleene algebras form a well-behaved class of structures (our own). The completeness proof is still hard (our own). It works with matrices over a Kleene algebra and carries out the construction and minimization of automata inside the axioms (our own summary).

**Wikipedia:** [Kleene algebra](https://en.wikipedia.org/wiki/Kleene_algebra). It says: “Redko proved that no finite set of equational axioms can characterize the algebra of regular languages.”

**Sources:**

- [D. Kozen, A completeness theorem for Kleene algebras and the algebra of regular events, Information and Computation 110 (1994) 366–390](https://doi.org/10.1006/inco.1994.1037)

### Bisimilarity as the union of all bisimulations gives proof by coinduction

**Remember:** To prove two processes equal, show one relation that keeps matching.

*True by definition.* MSC 68Q85 (Models and methods for concurrent and distributed computing (process algebras, bisimulation, transition nets, etc.)), 03B45. arXiv cs.LO. Level 3: graduate.

**Definition.** A bisimulation is a relation R on the states of a labelled transition system, whose steps are labelled by actions. If p R q and p does an action a to reach p′, then q does a to reach some q′ with p′ R q′. The same must hold with p and q swapped. Two states are bisimilar if some bisimulation relates them.

**Problem.** One wants an equivalence of processes that is easy to establish. Showing that two processes with infinitely many behaviours act the same seems to need an infinite argument.

**How the definition helps.** Because bisimilarity is the union of all bisimulations, two states are bisimilar as soon as one bisimulation contains the pair. This is the coinduction proof principle, and it is true by definition. The union of bisimulations is again a bisimulation, so bisimilarity is the largest one, and it is an equivalence relation, as the page says. One needs no limit of approximations and no induction on time (our own). What stays hard is congruence (our own). One must show, separately for each process language, that bisimilarity is kept by its operators.

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

**Problem.** Bisimilar states satisfy the same modal formulas. The converse asks whether states that satisfy the same formulas must be bisimilar.

**How the definition helps.** With finitely many successors, a step that cannot be matched is caught by one formula. Take one formula that separates the step from each other successor, and put their conjunction under a diamond (our own sketch). Infinite branching breaks this. Take a state with one path of each finite length n, and a second state that also has one infinite path (our own example). They satisfy the same modal formulas, but they are not bisimilar. The paper's Theorem 35 is the coalgebraic form, where 'finitely branching' becomes a finitary functor, which builds each element from finitely many parts. What stays hard is the quantitative version for metric and probabilistic systems, which needs the paper's density conditions.

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

**How the definition helps.** In our own proof, a bag cover becomes a set of tree nodes meeting every subtree for the chosen vertices. Root the tree and call each subtree’s node nearest the root its top. Choose a subtree with a deepest top, select that top, and discard every subtree containing it. Any subtree intersecting the chosen one contains the selected top, since both tops lie above an intersection node. Repeating gives one pairwise disjoint witness subtree per selected node. Their vertices are pairwise nonadjacent because each graph edge needs a shared bag. This gives α, improving the cited bound of 2α − 1.

**Paper or page:** [Computing Tree Decompositions with Small Independence Number](https://arxiv.org/abs/2207.09993v4). It says: “Then W is covered by a set of at most 2α(W)−1 bags of 𝒯.”

**Sources:**

- [Clément Dallard, Fedor V. Fomin, Petr A. Golovach, Tuukka Korhonen, Martin Milanič, Computing Tree Decompositions with Small Independence Number, arXiv:2207.09993v4](https://arxiv.org/abs/2207.09993v4)

### A kernel replaces feature vectors in inner product algorithms

**Remember:** Compute feature inner products without building feature vectors.

*True by definition.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 46E22. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** Define a kernel as a symmetric function whose matrices on finite samples have nonnegative quadratic forms. Build feature vectors whose pairwise inner products are the kernel values. This replaces an explicit list of feature coordinates.

**Problem.** Any algorithm whose only access to the feature vectors is through their pairwise inner products gives the same result from the kernel matrix.

**How the definition helps.** The kernel values are the required inner products in the feature space. The work moves to constructing that space from the positive semidefinite kernel, by our own explanation. For a chosen algorithm, one must also show it needs only inner products, by our own explanation.

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

**How the definition helps.** In our own explanation, inserting blanks before, between and after target labels lets each partial alignment end at a numbered position. At each step, a path may stay, advance one position or skip a blank between different labels. Start at the first blank or first label and finish at the last label or last blank. These rules give one path for each valid alignment. Multiply each incoming sum by the current symbol probability. Each position needs at most three predecessor values, giving the stated operation count.

**Wikipedia:** [Connectionist temporal classification](https://en.wikipedia.org/wiki/Connectionist_temporal_classification). It says: “Equivalent label sequences can occur in many ways – which makes scoring a non-trivial task, but there is an efficient forward–backward algorithm for that.”

**Sources:**

- [Alex Graves, Santiago Fernández, Faustino Gomez, and Jürgen Schmidhuber. Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks. 2006.](https://doi.org/10.1145/1143844.1143891)

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

**How the definition helps.** The convex hull of a finite set is unique, so the subdivision defined from it is unique by definition. Triangulations need a rule to split each cell with four or more points on one circle, and different rules give different answers. The work goes into two facts. First, the projected lower faces cover the convex hull of the points without overlaps. Second, a plane that touches the lifted points from below corresponds to a circle with no points inside it. That second fact links this definition to the empty-circle test. The page states uniqueness only when all lower faces are triangles, and the comparison is our own.

**Wikipedia:** [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation). It says: “As the convex hull is unique, so is the triangulation, assuming all facets of the convex hull are simplices.”

**Sources:** none listed. No primary source with a working link was found.

### Termination with probability one lets consensus escape the FLP impossibility

**Remember:** A scheduler can stall a deterministic protocol forever, but not a coin-flipping one.

*Makes the theorem clean to state or prove.* MSC 68W15 (Distributed algorithms), 68W20, 68M14. arXiv cs.DC, cs.DS. Level 3: graduate.

**Definition.** In the consensus problem, each process starts with a value. Correct processes must all decide the same value (agreement), decide an input of some process (validity), and eventually decide (termination). In a fully asynchronous system, messages may take any finite time and processes may crash. Randomized consensus keeps agreement and validity always, but asks for termination only with probability one.

**Problem.** Fischer, Lynch and Paterson proved that no deterministic protocol solves consensus in an asynchronous system if even one process may crash. Yet fault-tolerant systems need agreement.

**How the definition helps.** The FLP proof builds one infinite schedule in which the protocol never decides. With coin flips such a schedule has probability zero, so the weaker termination condition is no longer contradicted (our own). Ben-Or gave such a protocol in 1983, in which processes that see no clear majority flip a coin (our own detail). Agreement and validity are not weakened at all, only termination. Other ways out weaken the model instead, for example partial synchrony or failure detectors (our own). What stays hard is speed, since with private coins the expected number of rounds can be exponential (our own).

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

**Problem.** When several private algorithms run on the same data, how much privacy is lost in total? For the usual (ε, δ) privacy, the exact total is hard to compute, and the simple bounds are loose.

**How the definition helps.** The Gaussian benchmark is closed under composition, so the rule for the total cost is exact and short. Running a μ₁-GDP and a μ₂-GDP algorithm gives a √(μ₁² + μ₂²)-GDP algorithm, as Lemma 2 of the PRECAD paper states. The reason is that testing two independent normal shifts is the same as testing one shift of length √(μ₁² + μ₂²) (our own explanation). The quoted theorem keeps this rule when each step chooses its parameter adaptively, provided the squares stay below a budget B². Group privacy is equally simple: μ-GDP gives Kμ-GDP for a group of K people (Lemma 3 of the PRECAD paper). The conversion back to (ε, δ) numbers stays outside the definition. It uses an explicit formula with the normal distribution function (Lemma 4 of the PRECAD paper).

**Paper or page:** [Individual Privacy Accounting with Gaussian Differential Privacy](https://arxiv.org/abs/2209.15596v2), [PRECAD: Privacy-Preserving and Robust Federated Learning via Crypto-Aided Differential Privacy](https://arxiv.org/abs/2110.11578v1). It says: “Let k denote the maximum number of compositions. Suppose that, almost surely, ∑ₘ₌₁ᵏ μₘ² ≤ B². Then, 𝓜⁽ᵏ⁾(X) is B-GDP.”

**Sources:**

- [Antti Koskela, Marlon Tobaben, Antti Honkela, Individual Privacy Accounting with Gaussian Differential Privacy, International Conference on Learning Representations 2023, arXiv:2209.15596](https://arxiv.org/abs/2209.15596v2)
- [Jinshuo Dong, Aaron Roth, Weijie J. Su, Gaussian Differential Privacy, Journal of the Royal Statistical Society Series B (2022)](https://doi.org/10.1111/rssb.12454)

### Local differential privacy is the same as contraction of one divergence

**Remember:** Local privacy means one divergence shrinks to at most δ times its size.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68P27 (Privacy of data), 94A17, 94A40. arXiv math.IT, cs.CR. Level 4: research.

**Definition.** In local privacy, each user applies a randomizing channel K to their own data. K is (ε, δ)-locally private if K(S \| x) ≤ eᵋ K(S \| x′) + δ for all inputs x, x′ and output sets S. The Eγ-divergence of P from Q is the largest value of P(S) − γQ(S) over all sets S. The contraction coefficient ηγ(K) is the largest possible ratio of this divergence after K to the divergence before K.

**Problem.** Lower bounds for estimation under local privacy need to know how much a private channel destroys information. One wants this loss in the language of divergences, where tools already exist.

**How the definition helps.** Local privacy is already a bound on the Eγ-divergence, with γ = eᵋ, between the outputs for any two inputs. Two different inputs, seen as point masses, have Eγ-divergence 1 (our own). So privacy says that K shrinks this divergence from 1 to at most δ on such pairs (our own). The quoted theorem says that this is the same as ηγ(K) ≤ δ, so point masses are the worst case (our own reading). Contraction coefficients are a standard tool for lower bounds on the error of estimators (our own). What stays hard is the estimation theory that uses these bounds.

**Paper or page:** [Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence](https://arxiv.org/abs/2102.01258v1). It says: “A mechanism 𝖪 is (ε, δ)-LDP if and only if η\[eᵋ\](𝖪) ≤ δ”

**Sources:**

- [Shahab Asoodeh, Maryam Aliakbarpour, Flavio P. Calmon, Local Differential Privacy Is Equivalent to Contraction of Eγ-Divergence, arXiv:2102.01258 (2021); published at ISIT 2021 as Local Differential Privacy Is Equivalent to Contraction of an f-Divergence](https://arxiv.org/abs/2102.01258v1)

### Rényi differential privacy makes the cost of composition simply add

**Remember:** Fix the order α, and Rényi privacy costs simply add up.

*Makes the theorem clean to state or prove.* MSC 68P27 (Privacy of data), 94A17. arXiv cs.CR, cs.LG. Level 4: research.

**Definition.** Take two data sets that differ in one person. An algorithm is (α, ε)-RDP (Rényi differentially private) if its two output distributions have Rényi divergence of order α at most ε. The Rényi divergence of order α &gt; 1 measures how far apart two distributions are. As α grows, it tends to the worst-case log ratio of the two densities.

**Problem.** Training a model privately runs a noisy step thousands of times. The total privacy cost must be bounded tightly, or the guarantee becomes useless.

**How the definition helps.** The Rényi divergence of two product distributions is the sum over the factors, so composition becomes a plain sum (our own explanation). The quoted proposition states this sum rule, even when the second step sees the output of the first. The Gaussian mechanism also has a simple cost: it is (α, αΔ²/(2σ²))-RDP for every order α (Proposition 1 of the NIST paper). Here Δ is the sensitivity and σ is the noise scale. For each α, one adds these costs over all steps, and converts to (ε, δ) privacy only once at the end. What stays hard is this final conversion, which loses a little and needs a choice of α.

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

**Problem.** Relate the strength of algebraic proof systems to classes of total search problems. Examples are Nullstellensatz and Sherali–Adams proofs.

**How the definition helps.** S(F) is total because F is unsatisfiable, so each proof system can be matched with a total search class. With this definition, short unary Nullstellensatz proofs correspond exactly to membership of S(F) in PPADᵈᵗ. A companion theorem in the same paper matches unary Sherali–Adams proofs with PPADSᵈᵗ. Separations between proof systems then give separations between search classes in the decision-tree model (our own reading of the title). The proofs of these correspondences and of the separations remain the work.

**Paper or page:** [Separations in Proof Complexity and TFNP](https://arxiv.org/abs/2205.02168). It says: “For any sequence Fn of poly(log n)-width CNF formulas, Fn has a degree-poly(log n), size-nᵖᵒˡʸ⁽ˡᵒᵍ ⁿ⁾ unary Nullstellensatz proof if and only if S(F) ∈ PPADᵈᵗ.”

**Sources:**

- [Separations in Proof Complexity and TFNP, arXiv:2205.02168 (2022)](https://arxiv.org/abs/2205.02168)

### ∃ℝ gives art galleries an exact complexity

**Remember:** Real solutions of polynomials are the true measure of guarding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q15 (Complexity classes (hierarchies, relations among complexity classes, etc.)), 03D78, 68U05. arXiv cs.CG, cs.CC. Level 4: research.

**Definition.** ∃ℝ is the class of decision problems that reduce in polynomial time to the existential theory of the reals. That theory asks whether a system of polynomial equations and inequalities with integer coefficients has a real solution. It lies between NP and PSPACE.

**Problem.** Find the exact complexity of the art gallery problem and its variant where guards must see only the walls. Membership in NP is not known, because optimal guards can need irrational coordinates (our own remark).

**How the definition helps.** NP is the wrong yardstick here, because a solution may not have a short exact description (our own). The class ∃ℝ is defined around real algebraic solutions, so geometric problems with that difficulty become complete for it (our own). With it, the point-boundary variant gets an exact classification, ∃ℝ-complete. The paper also gives simpler gadgets for the original point-point variant. The hardness proofs still need careful gadgets, though the abstract says they can now be built and checked by hand.

**Paper or page:** [The Point-Boundary Art Gallery Problem is ∃ℝ-hard](https://arxiv.org/abs/2210.12817). It says: “showing that it is ∃ℝ-complete, meaning that it is equivalent under polynomial time reductions to deciding whether a system of polynomial equations has a real solution.”

**Sources:**

- [Jack Stade, The Point-Boundary Art Gallery Problem is ∃ℝ-hard, arXiv:2210.12817 (2025)](https://arxiv.org/abs/2210.12817)
- [Mikkel Abrahamsen, Anna Adamaszek, Tillmann Miltzow, The Art Gallery Problem is ∃ℝ-complete, Journal of the ACM (2021)](https://doi.org/10.1145/3486220)

### Pliability unifies planar and dense approximation

**Remember:** Close to bounded treewidth is enough for good approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q25 (Analysis of algorithms and problem complexity), 05C83. arXiv cs.CC, cs.DS. Level 4: research.

**Definition.** A class of structures is treewidth-pliable when, for every error ε &gt; 0, each structure in it is ε-close to one of bounded treewidth. The bound may depend only on ε. The distance compares the optimal values of Max-CSP instances on the two structures. Treewidth measures how much a graph looks like a tree.

**Problem.** Find classes of constraint graphs on which Max-2-CSP, maximising the number of satisfied two-variable constraints, has a polynomial-time approximation scheme. Such a scheme gets within any factor 1 + ε of the optimal value in polynomial time. Planar graphs and dense graphs were known cases, with unrelated proofs.

**How the definition helps.** Both known proofs replace the graph by a nearby structure of bounded treewidth, and pliability names that step (our own explanation). So one theorem gives the approximation scheme for every pliable class of bounded arity, and the abstract says it unifies both approaches. Baker's layering applies to sparse graphs such as planar graphs, and Szemerédi's regularity lemma applies to dense graphs. The paper shows that the notion has several equivalent forms, through size, treedepth or the Hadwiger number. The condition approximates the optimal value, but the paper shows that it cannot be used to find solutions in general.

**Paper or page:** [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204), [Pliability and Approximating Max-CSPs](https://arxiv.org/abs/1911.03204). It says: “The condition unifies the two main approaches for designing a polynomial-time approximation scheme. One is Baker's layering technique, which applies to sparse graphs such as planar or excluded-minor graphs.”

**Sources:**

- [Miguel Romero, Marcin Wrochna, Stanislav Živný, Pliability and Approximating Max-CSPs, Journal of the ACM 70(6) (2023)](https://arxiv.org/abs/1911.03204)

### Public randomness gives Kolmogorov complexity coding

**Remember:** Sharing the coins lets short descriptions match probability.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q30 (Algorithmic information theory (Kolmogorov complexity, etc.)). arXiv cs.CC, math.LO. Level 4: research.

**Definition.** The time-bounded Kolmogorov complexity of a string is the length of the shortest program that prints it within a time bound. In probabilistic Kolmogorov complexity pK, the machine gets a random string, and the program may depend on it. The program needs to work only for most choices of the random string. Randomized complexity rK instead asks for one program that uses its own private random bits.

**Problem.** A coding theorem says that a string sampled with probability p has a description of length about log(1/p). Such a theorem is the key to many average-case results, but for rK it was open.

**How the definition helps.** With shared random bits, an encoder and a decoder can agree on a hash-based code (our own explanation). Earlier work proved a coding theorem for pK with no extra assumptions (our own). For this reason, earlier average-case results were proved for pK rather than rK, as the quoted abstract says. The paper proves the coding theorem for rK only under the assumption that one-way functions do not exist. So the choice of pK made the earlier theorems possible. The rK version stays conditional.

**Paper or page:** [Optimal Coding for Randomized Kolmogorov Complexity and Its Applications](https://arxiv.org/abs/2409.12744). It says: “Previous works bypassed this issue by considering probabilistic Kolmogorov complexity (pKᵖᵒˡʸ), in which public random bits are assumed to be available.”

**Sources:**

- [Shuichi Hirahara, Zhenjian Lu, Mikito Nanashima, Optimal Coding for Randomized Kolmogorov Complexity and Its Applications, arXiv:2409.12744 (2024)](https://arxiv.org/abs/2409.12744)

### Calibrating sums of label probabilities makes multiclass calibration efficient

**Remember:** Add label probabilities to get a reliable forecast for a group of labels.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q32 (Computational learning theory), 62H30. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** A multiclass predictor gives a probability vector over k labels. A forecast is calibrated if, among cases with forecast v, the event happens a fraction v of the time. Projected smooth calibration asks for an approximate form of this for the summed probability of each label set T.

**Problem.** The paper gives recalibration algorithms for this notion with time and sample costs polynomial in k. The guarantee covers every binary question of the form “is the label in T?”. Natural stronger notions meet information-theoretic or computational barriers.

**How the definition helps.** Weakening the definition to sums over label sets makes polynomial cost possible while keeping useful guarantees. The abstract states that each summed probability is close to a perfectly calibrated binary predictor for that question. The proofs rest on a tight connection between multiclass calibration and agnostic learning of binary predictions.

**Paper or page:** [On Computationally Efficient Multi-Class Calibration](https://arxiv.org/abs/2402.07821v2). It says: “It ensures that the probabilities predicted by summing the probabilities assigned to labels in T are close to some perfectly calibrated binary predictor for that task.”

**Sources:**

- [Parikshit Gopalan, Lunjia Hu, Guy N. Rothblum, On Computationally Efficient Multi-Class Calibration, arXiv:2402.07821v2 (2024)](https://arxiv.org/abs/2402.07821v2)

### Multicalibration gives one forecast that serves many losses at once

**Remember:** Learn the forecast first and choose the action once you know the loss.

*Makes the theorem clean to state or prove.* MSC 68Q32 (Computational learning theory), 62C05. arXiv cs.LG. Level 4: research.

**Definition.** An omnipredictor is a probability forecast that works for a specified family of losses. For each loss, choose the best action as if the forecast were the true probability. The resulting loss must be near or below that of the best rule in a specified class.

**Problem.** An approximately multicalibrated predictor can serve as an omnipredictor for the loss families covered by the paper. Multicalibration requires forecast errors to average near zero across forecast levels and test groups.

**How the definition helps.** Omniprediction separates the forecast from the action, so the same theorem can cover many choices of loss. The action depends on one forecast value, with no need to retrain. The work is to prove that multicalibration suffices for this guarantee.

**Paper or page:** [Omnipredictors](https://arxiv.org/abs/2109.05389v1). It says: “Once the loss function is set, the outputs of the predictor can be post-processed (a simple univariate data-independent transformation of individual predictions) to do well compared with any hypothesis from the class”

**Sources:**

- [Parikshit Gopalan, Adam Tauman Kalai, Omer Reingold, Vatsal Sharan, Udi Wieder, Omnipredictors, arXiv:2109.05389v1 (2021)](https://arxiv.org/abs/2109.05389v1)

### Strong proper computable learning equals having a computable empirical risk minimizer

**Remember:** A computable sample bound turns learning into a finite search for the minimizer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68Q32 (Computational learning theory), 03D20. arXiv cs.LG, cs.LO. Level 4: research.

**Definition.** PAC learning asks for a hypothesis with error at most ε, with probability at least 1 − δ, from enough samples. Computable PAC learning asks that the learner be an algorithm. Strong computable learning also asks for a computable bound on the number of samples needed. Proper learning requires the output to lie in the class.

**Problem.** For a class of finite Vapnik–Chervonenkis dimension, strong proper computable learning holds exactly when an algorithm performs empirical risk minimization. Empirical risk minimization returns a hypothesis in the class with least error on the given sample. The dimension is the size of the largest set on which the class realizes every labeling by 0 and 1.

**How the definition helps.** The computable sample bound makes learning a finite search, and the search yields an exact minimizer. In our own sketch, use the uniform distribution on a sample of n points and an accuracy below 1/n. Run the learner on every sequence of the required length drawn from the sample, and keep the output with least sample error. Sample errors are multiples of 1/n, so this output has the least possible error. Conversely, finite dimension gives a sample bound that one can compute from the dimension. The paper quotes this theorem from earlier work by other authors.

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

**Definition.** Rewriting theory studies terms up to rules that turn one term into another. The paper defines termination, local confluence and confluence for objects of any category 𝒞 with some mild properties. It uses reduction strategies, which choose how each element rewrites.

**Problem.** Newman's lemma says that a terminating, locally confluent rewriting system is confluent. Terminating means that no rewriting chain is infinite; confluent means that any two rewriting paths from one term meet again. Sets of terms and vector spaces of terms needed separate proofs.

**How the definition helps.** Once the notions live inside a general category, one proof of Newman's lemma covers both settings. The abstract says that the paper proves an analogue of Newman's lemma in this general setting. Theorem 33 in the data set is one form of it. With 𝒞 the category of sets or of vector spaces, it recovers the classical results in a slightly more general form. Our own remark: the vector space case is harder because a linear combination can rewrite in many ways at once. The category 𝒞 must still satisfy the mild conditions of the paper.

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

**Definition.** A program over a finite monoid M reads input letters at chosen positions and maps each one to an element of M, then multiplies them. Programs over a class V of monoids recognize a class P(V) of languages. The paper defines when V is tame, and proves that this holds exactly when every regular language in P(V) lies in L(QEV). That class is defined by classical recognition with morphisms.

**Problem.** Barrington showed that programs of polynomial length over finite monoids capture the class NC¹. Which regular languages can programs over a given class of monoids recognize?

**How the definition helps.** Tameness is equivalent to the inclusion that the characterization needs, so for a tame class the characterization holds almost by definition. That equivalence is a proposition in the data set, not the definition itself. The work moves into showing that a given class is tame. The paper proves that the class DA is tame, so its programs recognize exactly the regular languages recognized by morphisms into QDA. It also shows that the class J is not tame. So the condition is a real restriction.

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

**Definition.** Synthetic guarded domain theory has a type former ▷, called 'later'. ▷A is the type of things that are available one time step from now, and a map next : A → ▷A delays a value by one step. A map is contractive if it factors through next. For every f : ▷A → A there is a fixed point fix(f) : A with fix(f) = f(next(fix(f))): f, given fix(f) one step late, gives back fix(f).

**Problem.** Synthetic domain theory wants every recursive definition to have a fixed point, and it wants continuity to come for free. But a fixed-point operator at all types, with no restriction, makes the logic inconsistent.

**How the definition helps.** The later modality delays each recursive call by one step, and this delay keeps a fixed-point operator at all types consistent. The nLab says that this operator corresponds to Löb's theorem. In the topos of trees (presheaves on the natural numbers ω), the fixed point is built stage by stage, first at stage 0, then at stage 1, and so on. An unguarded definition such as x = ¬x has no counterpart. Only x = ¬▷x can be formed, and it is harmless (our own example). Finding models, such as presheaves on ω, is where the work lies.

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

**Problem.** Find the closest pair among N points in O(N log N) expected time. Classical algorithms use coordinates and grids in the plane or in ℝᵏ.

**How the definition helps.** The only fact about dimension that the grid algorithm needs is a packing bound, and the doubling definition gives it directly (our own). The same paper proves this bound as a lemma. For R ≥ δ/2, a ball of radius R contains at most (4R/δ)ᵈ points, where δ is the closest-pair distance. With that bound, a randomised algorithm and its analysis work in any metric of bounded doubling dimension. The theorem says that the constant in the running time depends only on d. It grows exponentially in d, so the result is useful only for small d (our own).

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

**Definition.** Each layer is a function in a Hilbert space, a complete inner product space. Evaluation of each output coordinate at each input is a continuous linear functional. Its representing vector gives that coordinate by an inner product. At each layer, use the span of these vectors for all coordinates at the finitely many inputs reaching that layer during training.

**Problem.** Minimize a loss depending only on final training predictions plus a positive multiple of each layer’s squared norm. At any minimizer, each layer belongs to its training evaluation span.

**How the definition helps.** In our own proof, projection onto the evaluation span preserves every training output because it preserves the inner products defining those outputs. All later layers therefore receive the same training inputs. Any removed nonzero component strictly reduces the penalty, contradicting minimality. The Hilbert space representation theorem supplies the evaluation vectors that replace a search over arbitrary functions.

**Paper or page:** [A resource-efficient model for deep kernel learning](https://arxiv.org/abs/2410.09926v1). It says: “fulfills $f<sub>i</sub>\\in V<sub>i</sub>\\subset H<sub>i</sub>$”

**Sources:** none listed. No primary source with a working link was found.

### Multicalibration gives stronger hardcore lemmas

**Remember:** Calibrate on every simple set, and hardcore sets appear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 68T05 (Learning and adaptive systems in artificial intelligence), 68Q06. arXiv cs.CC, cs.LG. Level 4: research.

**Definition.** A predictor is multiaccurate for a collection of sets when its error averages to about zero on each set in the collection. It is multicalibrated when it is also calibrated on each set. That is, on the points of the set where it predicts v, the true average is about v.

**Problem.** Impagliazzo's hardcore lemma says that a function that is mildly hard for small circuits is very hard on some large set of inputs. Its known proofs use boosting, the minimax theorem or a complexity-theoretic regularity lemma (our own).

**How the definition helps.** Multicalibration splits the inputs into a few simple parts, and on each part the function looks like a biased coin to simple tests (our own reading). Hardcore sets can then be read off from the parts of the partition (our own). The abstract says that multiaccuracy is equivalent to the regularity notion of Trevisan, Tulsiani and Vadhan, and that the stronger notion gives stronger results. For example, every Boolean function has a small collection of disjoint hardcore sets. Their sizes depend on how balanced the function is on the parts.

**Paper or page:** [Complexity-Theoretic Implications of Multicalibration](https://arxiv.org/abs/2312.17223). It says: “Starting from the stronger notion of multicalibration, we obtain stronger and more general versions of a number of applications of the Regularity Lemma, including the Hardcore Lemma, the Dense Model Theorem, and the equivalence of conditional pseudo-min-entropy and unpredictability.”

**Sources:**

- [Sílvia Casacuberta, Cynthia Dwork, Salil Vadhan, Complexity-Theoretic Implications of Multicalibration, arXiv:2312.17223 (2024)](https://arxiv.org/abs/2312.17223)
- [R. Impagliazzo, Hard-core distributions for somewhat hard problems, FOCS (1995)](https://doi.org/10.1109/sfcs.1995.492584)

### Vision stability makes art galleries exactly solvable

**Remember:** If a little blur changes nothing, rational guards suffice.

*Rules out counterexamples. Confidence: medium.* MSC 68U05 (Computer graphics; computational geometry (digital and algorithmic aspects)), 68Q25. arXiv cs.CG, cs.DS. Level 4: research.

**Definition.** An enhanced guard can see around a reflex corner, a corner with an interior angle above 180°, by an angle δ. A diminished guard has its view blocked by an extra angle δ at reflex corners. A polygon P has vision stability δ when the optimal number of enhanced guards equals the optimal number of diminished guards. So small changes of vision do not change the answer.

**Problem.** The art gallery problem asks for the fewest points in a polygon that together see all of it. It is ∃ℝ-complete, that is, as hard as deciding whether polynomial equations have a real solution. So an exact algorithm seems to need algebraic methods.

**How the definition helps.** The definition excludes polygons whose optimum depends on exact positions, so a finite set of candidate positions is enough (our own). The excluded cases include known polygons where every optimal guard set needs irrational coordinates, found by Abrahamsen, Adamaszek and Miltzow (our own example). For a vision stable polygon, a polynomial-size integer program over candidate points finds the optimum. The paper argues that most relevant polygons are vision stable. The integer program can still be slow, and the problem stays hard for polygons that are not stable (our own).

**Paper or page:** [A Practical Algorithm with Performance Guarantees for the Art Gallery Problem](https://arxiv.org/abs/2007.06920). It says: “We describe a one-shot vision stable algorithm that computes an optimal guard set for visionstable polygons using polynomial time and solving one integer program. It guarantees to find the optimal solution for every vision stable polygon.”

**Sources:**

- [Simon Hengeveld, Tillmann Miltzow, A Practical Algorithm with Performance Guarantees for the Art Gallery Problem, Discrete Mathematics &amp; Theoretical Computer Science 25:2 (2024)](https://arxiv.org/abs/2007.06920)
- [Mikkel Abrahamsen, Anna Adamaszek, Tillmann Miltzow, The Art Gallery Problem is ∃ℝ-complete, Journal of the ACM (2021)](https://doi.org/10.1145/3486220)
