import { gapNote, gapSvg, layerName, paradigmIndex, select, type Pick } from "./gap.ts";

const START = ["Functional programming", "Reconfigurable logic (FPGA)", "Unikernel", "Embedded database"];

export const START_STACK: readonly Pick[] = START.map((name, k) => ({ index: paradigmIndex(name), cls: `l${[0, 1, 2, 3][k] ?? 0}` }));

const LAYER_OF = [0, 1, 2, 3];

export function stackFigure(id: string, chart: number): string {
  const boxes = LAYER_OF.map((layer) => select(`${id}-${layer}`, layerName(layer), START_STACK[layer]?.index ?? -1, layer, `l${layer}`)).join("");
  return `${gapSvg(chart, START_STACK)}<div class="controls">${boxes}</div><p class="note" data-note aria-live="polite">${gapNote(START_STACK)}</p>`;
}
