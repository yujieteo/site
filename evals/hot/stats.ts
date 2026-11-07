import { WOMEN_RATES } from "../../src/kit/berkeley.ts";
import { ANSCOMBE_X, ANSCOMBE_Y, MEN_APPLIED, WOMEN_APPLIED } from "../../src/kit/datasets.ts";
import { ERUPTIONS } from "../../src/kit/faithful-data.ts";
import { countPeaks, fillBins, fitLine, mixedRate } from "../../src/kit/stats.hot.ts";

const WARMUP = 20000;
const n = Number(process.argv[2]);
const counts = new Float64Array(160);
const fit = new Float64Array(4);
const kept = new Uint8Array(11).fill(1);
const sink = new Float64Array(1);
for (let k = 0; k < WARMUP + n; k++) {
  const bins = fillBins(counts, ERUPTIONS, 1.6 - (k % 20) * 0.025, 0.05 + (k % 30) * 0.05);
  fitLine(fit, ANSCOMBE_X[k % 4] ?? [], ANSCOMBE_Y[k % 4] ?? [], kept);
  sink[0] = (sink[0] ?? 0) + countPeaks(counts, bins) + (fit[1] ?? 0) + mixedRate(WOMEN_RATES, WOMEN_APPLIED, MEN_APPLIED, (k % 21) / 20);
}
console.log(sink[0]);
