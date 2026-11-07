import { EVIDENCE } from "./data-evidence.ts";
import { addStyle, head, mount, stat, whole } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { svgHead } from "../scale.ts";

const CSS = `
.e-grid rect { fill: color-mix(in srgb, var(--fig) 22%, var(--card)); stroke: color-mix(in srgb, var(--fig) 45%, var(--card)); }
.e-grid rect[data-lit] { fill: var(--fig); stroke: var(--fig); }
.e-grid .slot { fill: none; stroke: var(--line); stroke-dasharray: 2 3; }
.e-grid text.count { fill: var(--ink); font-weight: 550; }
.e-grid text.count[data-lit] { fill: var(--card); }
`;

const CONFIDENCE: readonly string[] = ["Low", "Medium", "High"];
const KINDS: readonly string[] = ["Thin", "Partial", "Broad"];
const LABEL = 72;
const TOP = 26;
const MOST = 130;

export function highThin(): { cell: number; high: number; share: number } {
  const high = EVIDENCE[2] ?? [];
  const total = high.reduce((a, b) => a + b, 0);
  const cell = high[0] ?? 0;
  return { cell, high: total, share: total > 0 ? (100 * cell) / total : 0 };
}

function cellAt(row: number, col: number, size: number, max: number): string {
  const n = EVIDENCE[row]?.[col] ?? 0;
  const side = Math.max(3, size * Math.sqrt(n / max));
  const y = TOP + (2 - row) * size + size / 2;
  const x = LABEL + col * size + size / 2;
  const lit = row === 2 && col === 0 ? " data-lit" : "";
  const label = side > 34 ? `<text class="count" x="${x}" y="${y + 4}" text-anchor="middle"${lit}>${whole(n)}</text>` : `<text class="count" x="${x}" y="${y - side / 2 - 5}" text-anchor="middle">${whole(n)}</text>`;
  const slot = `<rect class="slot" x="${x - size / 2 + 4}" y="${y - size / 2 + 4}" width="${size - 8}" height="${size - 8}" rx="4"/>`;
  return `${slot}<rect x="${x - side / 2}" y="${y - side / 2}" width="${side}" height="${side}" rx="3" tabindex="0"${lit} data-tip="${CONFIDENCE[row] ?? ""} confidence, ${(KINDS[col] ?? "").toLowerCase()} evidence: ${whole(n)} results"/>${label}`;
}

function grid(width: number): string {
  const size = Math.min(MOST, Math.floor((width - LABEL) / 3));
  const max = Math.max(1, ...EVIDENCE.flat());
  const parts: string[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) parts.push(cellAt(row, col, size, max));
    parts.push(`<text x="${LABEL - 10}" y="${TOP + (2 - row) * size + size / 2 + 4}" text-anchor="end">${CONFIDENCE[row] ?? ""}</text>`);
  }
  for (let col = 0; col < 3; col++) parts.push(`<text x="${LABEL + col * size + size / 2}" y="14" text-anchor="middle">${KINDS[col] ?? ""}</text>`);
  const w = LABEL + 3 * size;
  const h = TOP + 3 * size + 22;
  const axis = `<text x="${LABEL + 1.5 * size}" y="${h - 4}" text-anchor="middle">Evidence behind the scores</text>`;
  return `${svgHead(w, h)}<g class="e-grid">${parts.join("")}${axis}</g></svg>`.replace("ALT", "Confidence label against evidence breadth for every scored result");
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-evidence", CSS);
  const h = highThin();
  const stats = `<div class="t-stats">${stat(whole(h.cell), "results marked high confidence on thin evidence")}${stat(`${Math.round(h.share)}%`, `of all ${whole(h.high)} high-confidence scores`)}</div>`;
  const note = `<p class="t-note">Rows are the judge's confidence label, columns the breadth of evidence. Square area is the number of results. The rubric says its labels describe how complete the evidence is and how consistent the assessments are. They are not probabilities.</p>`;
  const html = `${head("Confidence and evidence", "Most high-confidence scores rest on thin evidence")}${stats}<div data-chart></div>${note}`;
  const root = mount(figure, 4, html);
  const slot = root?.querySelector("[data-chart]");
  if (!slot) return;
  slot.innerHTML = grid(plotWidth(figure));
  watch(figure, (width) => {
    hideTooltips(figure);
    slot.innerHTML = grid(width);
  });
  wireTooltips(figure);
}
