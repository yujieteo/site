import { PARADIGMS, REPOS } from "../../src/kit/stack-data.ts";
import { DIMS, fitPca, INFO_SIZE, WORK_SIZE } from "../../src/kit/pca.hot.ts";

const WARMUP = 20000;
const n = Number(process.argv[2]);
const all = [...PARADIGMS, ...REPOS];
const rows = new Float64Array(all.length * DIMS);
for (let i = 0; i < all.length; i++) rows.set(all[i]?.scores ?? [], i * DIMS);
const work = new Float64Array(WORK_SIZE);
const info = new Float64Array(INFO_SIZE);
const proj = new Float64Array(2 * all.length);
const on = new Uint8Array(DIMS).fill(1);
const sink = new Float64Array(1);
for (let k = 0; k < WARMUP + n; k++) {
  on[k % DIMS] = k % 3 === 0 ? 0 : 1;
  on[(k + 3) % DIMS] = 1;
  on[(k + 5) % DIMS] = 1;
  fitPca(work, info, proj, rows, all.length, PARADIGMS.length, on);
  sink[0] = (sink[0] ?? 0) + (info[0] ?? 0) + (proj[3] ?? 0);
}
console.log(sink[0]);
