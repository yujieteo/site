import { COUNTS, DIALS, SCORED } from "./data-scores.ts";
import { addStyle, head, mount, stat, whole } from "./look.ts";
import { wireTooltips } from "../tooltip.ts";

const CSS = `
.d-list { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
.d-name { display: flex; justify-content: space-between; gap: 12px; font-size: 0.8125rem; margin: 0 0 5px; }
.d-name span { color: var(--muted); font-variant-numeric: tabular-nums; }
.d-bar { display: flex; height: 22px; border-radius: 4px; overflow: hidden; box-shadow: inset 0 0 0 1px var(--card-edge); }
.d-bar i { display: block; height: 100%; outline: none; font: 500 0.6875rem/22px var(--mono); text-align: center; font-style: normal; overflow: hidden; white-space: nowrap; }
.d-bar i:focus-visible { box-shadow: inset 0 0 0 2px var(--ink); }
.d-q { margin: 4px 0 0; font-size: 0.75rem; line-height: 1.4; color: var(--muted); }
.d-legend { margin: 16px 0 0; }
`;

const MIX: readonly number[] = [10, 28, 48, 72, 100];

export function dialShares(): number[][] {
  const out: number[][] = [];
  for (const row of COUNTS) {
    const total = row.reduce((a, b) => a + b, 0);
    out.push(row.map((n) => (total > 0 ? (100 * n) / total : 0)));
  }
  return out;
}

function fill(score: number): string {
  return `color-mix(in srgb, var(--fig) ${MIX[score] ?? 0}%, var(--card))`;
}

function bar(i: number, shares: readonly number[]): string {
  const dial = DIALS[i];
  const counts = COUNTS[i] ?? [];
  const parts: string[] = [];
  for (let s = 0; s < 5; s++) {
    const share = shares[s] ?? 0;
    if (share <= 0) continue;
    const anchor = s === 0 ? `: ${dial?.[2] ?? ""}` : s === 4 ? `: ${dial?.[3] ?? ""}` : "";
    const text = share >= 9 ? `${Math.round(share)}%` : "";
    const ink = s >= 3 ? "var(--card)" : "var(--ink)";
    parts.push(`<i tabindex="0" style="width:${share}%;background:${fill(s)};color:${ink}" data-tip="${dial?.[0] ?? ""}: ${whole(counts[s] ?? 0)} results score ${s}${anchor}">${text}</i>`);
  }
  const fours = Math.round(shares[4] ?? 0);
  return `<li><p class="d-name">${dial?.[0] ?? ""}<span>${fours}% score 4</span></p><div class="d-bar">${parts.join("")}</div><p class="d-q">${dial?.[1] ?? ""}</p></li>`;
}

function legend(): string {
  const keys: string[] = [];
  for (let s = 0; s < 5; s++) keys.push(`<span class="t-key"><i style="background:${fill(s)}"></i>${s}</span>`);
  return `<p class="d-legend">${keys.join("")}<span class="t-key">Score on the dial, 0 to 4</span></p>`;
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-dials", CSS);
  const shares = dialShares();
  const rows: string[] = [];
  for (let i = 0; i < DIALS.length; i++) rows.push(bar(i, shares[i] ?? []));
  const eff = Math.round(shares[0]?.[4] ?? 0);
  const pra = Math.round(shares[2]?.[4] ?? 0);
  const stats = `<div class="t-stats">${stat(`${eff}%`, "score 4 on effectiveness, the dial with the most weight")}${stat(`${pra}%`, "score 4 on practical impact")}${stat(whole(SCORED), "results, each judged on all seven dials")}</div>`;
  const html = `${head("Seven dials", "Effectiveness gives almost two in three results a 4, so it barely tells them apart")}${stats}<ol class="d-list">${rows.join("")}</ol>${legend()}`;
  if (!mount(figure, 3, html)) return;
  wireTooltips(figure);
}
