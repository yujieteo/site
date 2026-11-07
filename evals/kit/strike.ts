import { ok, strictEqual } from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CURVE_DEFLECTION } from "../../src/kit/strike-data.ts";
import { loadStrike } from "../../src/kit/strike-wasm.ts";
import { hugoniot, stagnation, V_C } from "../../src/kit/wilbeck.ts";

ok(Math.abs(hugoniot(V_C) - 314.4) < 0.1, "the shock pressure at 180.06 m/s is 314.4 MPa");
ok(Math.abs(stagnation(V_C) - 15.4) < 0.01, "the steady pressure at 180.06 m/s is 15.40 MPa");
console.log("PASS the Wilbeck curves give 314.4 and 15.40 MPa at 180.06 m/s, as the repository README does");

const file = readFileSync("src/kit/strike.wasm");
const solver = await loadStrike(new Uint8Array(file).buffer);
solver.setup(56, 0.009, V_C);
const steps = solver.advance(100000, 3e-3);
strictEqual(steps, 1774);
ok(Math.abs(solver.maxDeflection() * 1000 - 150.8) < 0.05, "the 9 mm mesh deflects 150.8 mm");
strictEqual(solver.failed(), 36);
strictEqual(solver.failedSkin(), 0);
console.log("PASS the wasm file loaded from TypeScript runs the 9 mm strike: 1774 steps, 150.8 mm, 36 eroded shells, 0 skin shells");

const last = CURVE_DEFLECTION[CURVE_DEFLECTION.length - 1] ?? 0;
ok(Math.abs(last / 10 - solver.maxDeflection() * 1000) < 0.2, "the recorded curve ends where the live run ends");
console.log("PASS the recorded deflection curve ends where a fresh run ends");
