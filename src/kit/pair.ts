import { gapNote, gapSvg, paradigmIndex, select, type Pick } from "./gap.ts";

export const START_PAIR: readonly Pick[] = [
  { index: paradigmIndex("Functional programming"), cls: "a" },
  { index: paradigmIndex("Actor model"), cls: "b" },
];

export function pairFigure(id: string, chart: number): string {
  const a = select(`${id}-a`, "First", START_PAIR[0]?.index ?? 0, -1, "a");
  const b = select(`${id}-b`, "Second", START_PAIR[1]?.index ?? 0, -1, "b");
  return `${gapSvg(chart, START_PAIR)}<div class="controls">${a}${b}</div><p class="note" data-note aria-live="polite">${gapNote(START_PAIR)}</p>`;
}
