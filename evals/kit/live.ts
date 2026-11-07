import { readFileSync } from "node:fs";
import { runLive } from "../../src/kit/strike-live.ts";
import { loadStrike, type Strike } from "../../src/kit/strike-wasm.ts";

const file = readFileSync("src/kit/strike.wasm");
const solver = await loadStrike(new Uint8Array(file).buffer);
let setups = 0;
let advances = 0;
let throwAfter = Infinity;

const counted: Strike = {
  ...solver,
  setup(cells, spacing, speed) {
    setups++;
    return solver.setup(cells, spacing, speed);
  },
  advance(steps, end) {
    advances++;
    if (advances > throwAfter) throw new Error("the solver stopped answering");
    return solver.advance(steps, end);
  },
};

function tick(): void {}

async function stoppedBeforeStart(): Promise<void> {
  const result = await runLive(counted, 1.6, { us: [], deflection: [] }, { now: true }, tick);
  if (!result.stopped || setups !== 0 || advances !== 0) throw new Error(`Stop before the run still ran: ${setups} setups, ${advances} batches`);
  console.log("PASS a Stop pressed during the download starts no run");
}

async function throwsMidRun(): Promise<void> {
  throwAfter = 2;
  const outcome = await Promise.race([runLive(counted, 1.6, { us: [], deflection: [] }, { now: false }, tick).then(() => "settled", () => "rejected"), Bun.sleep(2000).then(() => "hung")]);
  if (outcome !== "rejected") throw new Error(`a solver error left the live run ${outcome}, not rejected`);
  console.log("PASS a solver error rejects the live run so the button resets");
}

await stoppedBeforeStart();
await throwsMidRun();
