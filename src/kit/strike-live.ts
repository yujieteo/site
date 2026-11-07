import { loadStrike, type Strike } from "./strike-wasm.ts";
import type { Live } from "./strike-fig.ts";

const CELLS = 56;
const SPACING = 0.009;
const SPEED = 350 * (1852 / 3600);
const T_END = 3e-3;
const BATCH = 10;
const MM = 1000;
const US = 1e6;

export interface Result {
  steps: number;
  seconds: number;
  deflection: number;
  skin: number;
  stiffeners: number;
  stopped: boolean;
}

export interface Stop {
  now: boolean;
}

export async function fetchStrike(): Promise<Strike> {
  const response = await fetch("/kit/strike.wasm");
  if (!response.ok) throw new Error(`the solver did not download: ${response.status}`);
  return loadStrike(await response.arrayBuffer());
}

function finish(s: Strike, steps: number, begin: number, stopped: boolean): Result {
  const total = s.failed();
  const skin = s.failedSkin();
  return { steps, seconds: (performance.now() - begin) / MM, deflection: s.maxDeflection() * MM, skin, stiffeners: total - skin, stopped };
}

export function runLive(s: Strike, skinMm: number, live: Live, stop: Stop, tick: (us: number) => void): Promise<Result> {
  if (stop.now) return Promise.resolve({ steps: 0, seconds: 0, deflection: 0, skin: 0, stiffeners: 0, stopped: true });
  s.setSkin(skinMm / MM);
  s.setup(CELLS, SPACING, SPEED);
  const begin = performance.now();
  let steps = 0;
  live.us.length = 0;
  live.deflection.length = 0;
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      try {
        steps += s.advance(BATCH, T_END);
        live.us.push(Math.round(s.time() * US));
        live.deflection.push(s.maxDeflection() * MM);
        tick(s.time() * US);
        if (s.time() < T_END && !stop.now) return;
        clearInterval(timer);
        resolve(finish(s, steps, begin, stop.now));
      } catch (error) {
        clearInterval(timer);
        reject(error);
      }
    }, 0);
  });
}
