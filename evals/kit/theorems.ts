import { ranking } from "../../src/kit/theorem-rank.ts";
import { tree } from "../../src/kit/theorem-tree.ts";
import { trendSvg } from "../../src/kit/theorem-trend.ts";

const balanced = ranking([25, 25, 20, 15, 5, 5, 5]);
const proof = ranking([25, 25, 20, 15, 5, 100, 5]);
if (balanced === proof) throw new Error("The requested weight change did not change the ranking");
if (!ranking([0, 0, 0, 0, 0, 0, 0]).includes("at least one")) throw new Error("Zero weights need a warning");
const open = tree(830, 3, new Set());
if (!open.includes("Chernoff bound") || !open.includes("Markov's inequality")) throw new Error("The requested source path is missing");
const stopped = tree(830, 3, new Set([944]));
if (!stopped.includes("Chernoff bound") || stopped.includes("Markov's inequality")) throw new Error("A known item did not stop its path");
if (tree(830, 1, new Set()).includes("Markov's inequality")) throw new Error("The depth limit did not stop the tree");
if (trendSvg(600, 0, 0) === trendSvg(600, 0, 1)) throw new Error("The requested field choice did not change the trend");
console.log("Theorems figure behavior passed");
