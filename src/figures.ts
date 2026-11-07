import { anscombeFigure } from "./kit/anscombe.ts";
import { berkeleyFigure, mixFigure } from "./kit/berkeley.ts";
import { barHeight, CHART_HEIGHT, COMPOUND_MAX_RATE, COMPOUND_START } from "./kit/chart.ts";
import { YEARS, fillBalances } from "./kit/compound.hot.ts";
import { faithfulFigure } from "./kit/faithful.ts";
import { figureWidth } from "./kit/scale.ts";
import { birdFigure } from "./kit/bird.ts";
import { convergeFigure } from "./kit/converge.ts";
import { mapFigure } from "./kit/map.ts";
import { matrixFigure } from "./kit/matrix.ts";
import { metalFigure } from "./kit/metal.ts";
import { pairFigure } from "./kit/pair.ts";
import { problemsFigure } from "./kit/problems.ts";
import { stackFigure } from "./kit/stack.ts";
import { strikeFigure } from "./kit/strike-fig.ts";
import { tradeFigure } from "./kit/trade.ts";
import { wilbeckFigure } from "./kit/wilbeck.ts";

const LAZY_HEIGHT = 420;

const LAZY = new Map<string, number>([["theorem-dials", 330], ["theorem-rank", 760], ["theorem-lottery", 520], ["theorem-retest", 560], ["theorem-evidence", 360], ["theorem-papers", 520], ["theorem-bounds", 520], ["theorem-path", 640], ["theorem-moves", 620], ["theorem-proof", 600], ["theorem-trend", 460]]);

export const FIGURE_KINDS: readonly string[] = ["orbit", "compound", "faithful", "anscombe", "berkeley", "mix", "schematic", "wilbeck", "metal", "converge", "trade", "strike", "bird", "map", "matrix", "pair", "stack", "problems", ...LAZY.keys()];

const COMPOUND_START_RATE = 5;
const BAR_WIDTH = 40;
const BAR_STEP = 56;

function orbit(): string {
  const dots: string[] = [];
  const radii = [30, 55, 80];
  for (let i = 0; i < radii.length; i++) {
    const r = radii[i] ?? 0;
    dots.push(`<circle cx="150" cy="100" r="${r}" fill="none" stroke="var(--line)"/><g class="spin" style="--period:${4 + i * 3}s"><circle cx="${150 + r}" cy="100" r="6" fill="var(--ink)"/></g>`);
  }
  return `<svg viewBox="0 0 300 200" width="300" role="img" aria-label="ALT">${dots.join("")}</svg><div class="controls"><button class="button fig-pause" type="button" aria-pressed="false">Pause</button></div>`;
}

export function compoundBars(balances: Float64Array): string {
  const bars: string[] = [];
  for (let year = 0; year < YEARS; year++) {
    const h = barHeight(balances[year] ?? 0);
    bars.push(`<rect x="${year * BAR_STEP + 8}" y="${CHART_HEIGHT - h}" width="${BAR_WIDTH}" height="${h}" rx="3" fill="var(--ink)"/>`);
  }
  return bars.join("");
}

function compound(id: string): string {
  const balances = new Float64Array(YEARS);
  fillBalances(balances, COMPOUND_START, COMPOUND_START_RATE);
  const last = (balances[YEARS - 1] ?? 0).toFixed(2);
  return `<svg viewBox="0 0 576 ${CHART_HEIGHT}" width="576" role="img" aria-label="ALT" data-bars>${compoundBars(balances)}</svg><div class="controls"><label for="${id}-rate">Rate per year</label><input id="${id}-rate" type="range" min="0" max="${COMPOUND_MAX_RATE}" step="0.5" value="${COMPOUND_START_RATE}" data-compound><output for="${id}-rate">${COMPOUND_START_RATE}%: ${last} after ${YEARS} years</output></div>`;
}

function schematic(svg: string): string {
  const drawn = svg.trim().split("<svg").join('<svg role="img" aria-label="ALT"');
  return `${drawn}<div class="controls"><button class="button" type="button" data-next>Next</button></div><p class="step-label" aria-live="polite" data-step-label></p>`;
}

function escapeAttribute(text: string): string {
  return text.split("&").join("&amp;").split('"').join("&quot;").split("<").join("&lt;");
}

function inner(kind: string, id: string, svg: string, width: number): string {
  const lazy = LAZY.get(kind);
  if (lazy !== undefined) return `<div data-lazy role="img" aria-label="ALT" style="min-height:${lazy}px"></div>`;
  if (kind === "schematic") return schematic(svg);
  if (kind === "orbit") return orbit();
  if (kind === "faithful") return faithfulFigure(id, width);
  if (kind === "anscombe") return anscombeFigure(id, width);
  if (kind === "berkeley") return berkeleyFigure(width);
  if (kind === "mix") return mixFigure(id, width);
  if (kind === "bird") return birdFigure(id, width);
  if (kind === "wilbeck") return wilbeckFigure(id, width);
  if (kind === "metal") return metalFigure(id, width);
  if (kind === "converge") return convergeFigure(id, width);
  if (kind === "trade") return tradeFigure(id, width);
  if (kind === "strike") return strikeFigure(id, width);
  if (kind === "map") return mapFigure(id, width);
  if (kind === "matrix") return matrixFigure(id, width);
  if (kind === "pair") return pairFigure(id, width);
  if (kind === "stack") return stackFigure(id, width);
  if (kind === "problems") return problemsFigure(id, width);
  return compound(id);
}

export function figureHtml(kind: string, id: string, alt: string, caption: string, svg: string, wide: boolean, lazy: boolean): string {
  if (lazy) return `<figure id="${id}" data-kind="${kind}" data-lazy${wide ? " data-wide" : ""}><div class="frame" role="img" aria-label="${escapeAttribute(alt)}" style="min-height:${LAZY_HEIGHT}px"></div><figcaption>${caption}</figcaption></figure>`;
  const body = inner(kind, id, svg, figureWidth(wide)).split("ALT").join(escapeAttribute(alt));
  return `<figure id="${id}" data-kind="${kind}"${wide ? " data-wide" : ""}><div class="frame">${body}</div><figcaption>${caption}</figcaption></figure>`;
}
