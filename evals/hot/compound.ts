import { fillBalances } from "../../src/kit/compound.hot.ts";

const WARMUP = 50000;
const n = Number(process.argv[2]);
const out = new Float64Array(10);
const sink = new Float64Array(1);
for (let k = 0; k < WARMUP + n; k++) {
  fillBalances(out, 100, (k % 40) / 2);
  sink[0] = (sink[0] ?? 0) + (out[9] ?? 0);
}
console.log(sink[0]);
