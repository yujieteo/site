import { svgHead } from "./scale.ts";

const D = 113.1;
const L = 226.2;
const SCALE = 1.25;
const HEIGHT = 330;
const TOP = 24;
export const START_SPACING = 9;

function inside(x: number, y: number): boolean {
  const r = D / 2;
  const cylinder = L - D;
  const along = Math.abs(y) - cylinder / 2;
  if (Math.abs(x) > r) return false;
  return along <= 0 || x * x + along * along <= r * r;
}

export function whole(spacing: number): number {
  const r = D / 2;
  const volume = Math.PI * r * r * (L - D) + (4 / 3) * Math.PI * r ** 3;
  return Math.round(volume / spacing ** 3 / 100) * 100;
}

export function birdNote(spacing: number): string {
  return `${spacing.toFixed(1)} mm: about ${whole(spacing).toLocaleString("en-US")} particles in the whole bird, smoothing length ${(1.2 * spacing).toFixed(1)} mm`;
}

export function birdSvg(chart: number, spacing: number): string {
  const cx = chart / 2;
  const cy = TOP + (L * SCALE) / 2;
  const dots: string[] = [];
  const k = Math.ceil(L / 2 / spacing);
  for (let i = -k; i <= k; i++) {
    for (let j = -k; j <= k; j++) {
      const x = (i + 0.5) * spacing;
      const y = (j + 0.5) * spacing;
      if (inside(x, y)) dots.push(`<circle cx="${(cx + x * SCALE).toFixed(1)}" cy="${(cy + y * SCALE).toFixed(1)}" r="${Math.max(0.8, spacing * SCALE * 0.28).toFixed(2)}"/>`);
    }
  }
  const h = 1.2 * spacing * SCALE;
  const ring = `<circle class="ring" cx="${cx - D * SCALE * 0.15}" cy="${cy + L * SCALE * 0.25}" r="${h}"/><text x="${cx + D * SCALE * 0.62}" y="${cy + L * SCALE * 0.25 + 4}">smoothing length</text>`;
  const wall = `<line class="base" x1="${cx - 150}" x2="${cx + 150}" y1="${HEIGHT - 8}" y2="${HEIGHT - 8}"/><text x="${cx}" y="${HEIGHT + 8}" text-anchor="middle">panel</text>`;
  return `${svgHead(chart, HEIGHT + 16)}<g class="goose">${dots.join("")}</g>${ring}${wall}</svg>`;
}

export function birdFigure(id: string, chart: number): string {
  const slider = `<span class="control"><label for="${id}-s">Particle spacing</label><input id="${id}-s" type="range" min="3.5" max="9" step="0.5" value="${START_SPACING}" data-bird></span>`;
  return `${birdSvg(chart, START_SPACING)}<div class="controls">${slider}<output for="${id}-s">${birdNote(START_SPACING)}</output></div>`;
}
