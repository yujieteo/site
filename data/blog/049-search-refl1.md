---
title: "Search Reflections I"
date: ""
summary: "A compact survey of objectives, heuristics, pruning, search trade-offs, and repairability."
category: "Algorithms"
tags: "search, algorithms, heuristics, optimisation"
---
## Search

### Summary approach

Define objectives (Pareto optimal and scalarisation) and constraints, lookahead for problems, define time and memory bound, admissibility (never overestimating the true cost, if overestimate it make take a shortcut), for heuristic creation, strategy pruning, lookahead again and define pruning or bisection strategy, lastly define acceptable failure standards and repairability. Implementation: simulated annealing, high randomness explore first, use tabu to forbid revisiting, low randomness to explore later

### A* optimality condition

Evaluate all possible outcomes (large memory) without overestimating cost (admissible) and monotone (always move closer) to objective. Calculate cost now and add heuristic cost.

### A* fixed time

Update dynamics in real time, or look at fixed depth and repeat A* fixed depth search one step at a time.

### Pruning and beam search

Check bounded many outcomes prune the worst proportion. Or use A*, prune the worst when memory is full.

### Tabu list

Forbit returning to visited states unless it is really good.

### Simulated annealing

Use high randomness at the beginning to escape local optima, lower randomness later.

### Bisection

Either start from where you are and the goal to meet in the middle, or do binary search and cut half each time (Shannon entropy)

### Repairable improvement and constraint propagation

Find a feasible solution first, repair later. Related, find a solution meeting the constraints, backtrack when violated. Key word: define objectives and constraints violations

### Lookahead

Look ahead when you can to avoid problems.

### Memory and time tradeoffs

Think about tradeoffs in memory (evaluating all possible outcomes), and time (opportunity cost of bad search, time needed).

### Multiple objective Pareto optimality and scalarisation

First step is always to identify outcomes, scalarisation means weigh your different outcomes to one outcome, Pareto optimality means I must make adjacent outcomes worse.

### Bitter lesson in scalability

Make sure that all of the experience possible (not just data, scale to the human experience or general experience) at all scales (atomic, molecular, physical, metaphysical) is possible.
