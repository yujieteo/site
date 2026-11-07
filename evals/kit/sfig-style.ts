import { createFigure } from "../../.claude/skills/schematic-figure/foundation/engine/core-fig.ts";
import { STYLE } from "../../.claude/skills/schematic-figure/foundation/engine/style.ts";

function nothing(): void {}

function stub(): object {
  return { setAttribute: nothing, appendChild: nothing, textContent: "" };
}

function summary(): string {
  return [STYLE.format, STYLE.text.panel, STYLE.color.blue].join(",");
}

Object.defineProperty(globalThis, "document", { value: { createElementNS: stub } });
const host = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const journal = summary();
createFigure(host, { format: "patent" });
STYLE.patentForced.stroke += 1;
createFigure(host, { format: "patent" });
const forced = Object.values(STYLE.patentForced).join("");
createFigure(host, { format: "journal" });
console.log(`${journal === summary()}:${forced}`);
