import { RANKING } from "./theorem-data.ts";

const LABELS = ["Effectiveness", "Research influence", "Practical impact", "Reach", "Low hypothesis burden", "Proof simplicity", "Application simplicity"];
const START = [25, 25, 20, 15, 5, 5, 5];

export function escapeText(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

export function ranking(weights: readonly number[]): string {
  const sum = weights.reduce((a, b) => a + b, 0);
  if (!sum) return "<p>Give at least one weight a value.</p>";
  const rows = RANKING.map(([name, scores]) => ({ name, score: scores.split("").reduce((n, s, i) => n + Number(s) * (weights[i] ?? 0), 0) * 25 / sum }));
  rows.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  return `<ol>${rows.slice(0, 10).map((r) => `<li>${escapeText(r.name)} <span>${r.score.toFixed(1)}</span></li>`).join("")}</ol>`;
}

export function rankFigure(id: string): string {
  const sliders = LABELS.map((name, i) => `<label for="${id}-w${i}">${name} <input id="${id}-w${i}" type="range" min="0" max="100" value="${START[i]}" data-weight><output>${START[i]}</output></label>`).join("");
  return `<div role="group" aria-label="ALT"><p>Weights are shares of their total.</p><div class="theorem-weights">${sliders}</div><div data-ranking>${ranking(START)}</div></div>`;
}
