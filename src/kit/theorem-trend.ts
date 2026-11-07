import { FIELDS, TRENDS } from "./theorem-data.ts";
import { escapeText } from "./theorem-rank.ts";
import { svgHead } from "./scale.ts";

const HEIGHT = 230;
const TOP = 20;
const BOTTOM = 190;

export function trendSvg(width: number, result: number, field: number): string {
  const points = TRENDS[result]?.[1][field] ?? [];
  const max = Math.max(1, ...points.map((x) => x ?? 0));
  const marks: string[] = [];
  const lines: string[] = [];
  let previous = "";
  for (let i = 0; i < points.length; i++) {
    const value = points[i];
    if (value === null || value === undefined) { previous = ""; continue; }
    const x = 40 + (width - 55) * i / 14;
    const y = BOTTOM - value / max * (BOTTOM - TOP);
    if (previous) lines.push(`<line x1="${previous.split(",")[0]}" y1="${previous.split(",")[1]}" x2="${x}" y2="${y}"/>`);
    previous = `${x},${y}`;
    marks.push(`<circle class="pt" tabindex="0" cx="${x}" cy="${y}" r="4" data-tip="${1991 + i * 2}–${1992 + i * 2}: ${value} per 10,000 papers"/>`);
  }
  return `${svgHead(width, HEIGHT)}<text x="40" y="14">Mentions per 10,000 papers</text><text x="34" y="${TOP + 4}" text-anchor="end">${max.toFixed(1)}</text><text x="34" y="${BOTTOM + 4}" text-anchor="end">0</text><line class="base" x1="40" x2="${width - 15}" y1="${BOTTOM}" y2="${BOTTOM}"/><g class="fit">${lines.join("")}</g>${marks.join("")}<text x="40" y="218">1991</text><text x="${width - 15}" y="218" text-anchor="end">2020</text></svg>`;
}

export function trendFigure(id: string, width: number): string {
  const results = TRENDS.map(([name], i) => `<option value="${i}">${escapeText(name)}</option>`).join("");
  const fields = FIELDS.map((name, i) => `<option value="${i}">${name}</option>`).join("");
  return `${trendSvg(width, 0, 0)}<div class="controls"><label for="${id}-result">Result</label><select id="${id}-result" data-result>${results}</select><label for="${id}-field">Field</label><select id="${id}-field" data-field>${fields}</select></div>`;
}
