export const AXES: readonly string[] = ["Declarative interface", "Immutable state", "Distributed operation", "Runtime flexibility", "Hardware proximity", "Build specialization", "Component isolation", "Durable state"];
export const ZERO: readonly string[] = ["Explicit steps control the result.", "Updates replace state in place.", "One local instance performs the work.", "The build fixes system behavior.", "A managed interface hides machine details.", "One general artifact serves many tasks.", "Components share a failure boundary.", "State exists only during execution."];
export const TEN: readonly string[] = ["A desired result controls the steps.", "Updates produce new values and preserve old values.", "Multiple network nodes coordinate the work.", "Runtime commands can change system behavior.", "The system defines or directly controls hardware.", "The build selects components for a specific task.", "Independent boundaries contain component failures.", "Durable state is a principal system function."];
export const LAYERS: readonly string[] = ["language", "hardware", "os", "software"];
export interface Point {
  name: string;
  layer: number;
  scores: readonly number[];
}
export const PARADIGMS: readonly Point[] = [
  { name: "Ownership types", layer: 0, scores: [8, 1, 0, 2, 7, 5, 3, 0] },
  { name: "Pipelined RISC processor", layer: 1, scores: [2, 0, 0, 2, 10, 8, 5, 1] },
  { name: "Unikernel", layer: 2, scores: [6, 5, 0, 2, 9, 10, 0, 5] },
  { name: "Embedded database", layer: 3, scores: [9, 1, 0, 8, 3, 3, 1, 10] },
  { name: "Hardware generators", layer: 1, scores: [8, 0, 2, 1, 10, 10, 5, 1] },
  { name: "Actor model", layer: 0, scores: [5, 9, 10, 9, 1, 2, 9, 5] },
  { name: "Functional package management", layer: 3, scores: [10, 10, 5, 5, 2, 9, 8, 10] },
  { name: "Data structure server", layer: 3, scores: [3, 1, 9, 9, 2, 3, 6, 6] },
  { name: "Capability-based OS", layer: 2, scores: [2, 0, 0, 9, 9, 5, 9, 0] },
  { name: "Functional programming", layer: 0, scores: [8, 8, 0, 10, 1, 1, 1, 1] },
  { name: "Concatenative programming", layer: 0, scores: [1, 0, 0, 10, 7, 1, 0, 1] },
  { name: "Single-level store", layer: 2, scores: [2, 0, 0, 9, 9, 5, 9, 10] },
  { name: "Conflict-free replicated data types", layer: 3, scores: [3, 10, 10, 9, 1, 1, 8, 9] },
  { name: "Reconfigurable logic (FPGA)", layer: 1, scores: [8, 0, 0, 9, 10, 10, 5, 0] },
  { name: "Cluster (warehouse-scale computer)", layer: 1, scores: [4, 0, 10, 8, 10, 2, 7, 10] },
  { name: "Multikernel", layer: 2, scores: [2, 0, 8, 8, 9, 3, 3, 0] },
  { name: "Hardware root of trust", layer: 1, scores: [1, 3, 0, 4, 10, 9, 5, 10] },
  { name: "Microservices", layer: 3, scores: [2, 0, 10, 8, 1, 5, 8, 10] },
  { name: "Logic programming", layer: 0, scores: [9, 2, 0, 10, 1, 1, 1, 0] },
  { name: "Distributed OS", layer: 2, scores: [2, 2, 10, 9, 3, 5, 5, 10] },
  { name: "Event sourcing", layer: 3, scores: [2, 9, 0, 8, 1, 5, 1, 10] },
  { name: "Constraint programming", layer: 0, scores: [10, 9, 0, 1, 1, 8, 5, 0] },
  { name: "Separation kernel", layer: 2, scores: [9, 0, 0, 0, 10, 10, 9, 0] },
  { name: "Domain-specific accelerator", layer: 1, scores: [2, 1, 0, 7, 10, 8, 5, 0] },
  { name: "Peer-to-peer", layer: 3, scores: [8, 10, 10, 9, 1, 1, 7, 10] },
  { name: "Vector processor", layer: 1, scores: [2, 0, 0, 9, 10, 2, 5, 0] },
  { name: "Exokernel", layer: 2, scores: [2, 0, 2, 9, 9, 7, 7, 3] },
];
export const REPOS: readonly Point[] = [
  { name: "SQLite", layer: 3, scores: [9, 1, 0, 8, 3, 3, 1, 10] },
  { name: "Redis", layer: 3, scores: [3, 1, 9, 9, 2, 3, 6, 6] },
  { name: "Erlang/OTP", layer: 0, scores: [5, 9, 10, 9, 1, 2, 9, 5] },
  { name: "Unikraft", layer: 2, scores: [6, 5, 0, 2, 9, 10, 0, 5] },
  { name: "Rocket Chip", layer: 1, scores: [8, 0, 2, 1, 10, 10, 5, 1] },
  { name: "Nix", layer: 3, scores: [10, 10, 5, 5, 2, 9, 8, 10] },
  { name: "seL4", layer: 2, scores: [2, 0, 0, 9, 9, 5, 9, 0] },
  { name: "GHCi", layer: 0, scores: [8, 8, 0, 10, 1, 1, 1, 1] },
  { name: "Gforth", layer: 0, scores: [1, 0, 0, 10, 7, 1, 0, 1] },
  { name: "Automerge", layer: 3, scores: [3, 10, 10, 9, 1, 1, 8, 9] },
  { name: "Kubo", layer: 3, scores: [8, 10, 10, 9, 1, 1, 7, 10] },
];
