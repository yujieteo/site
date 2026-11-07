function nothing(): void {}

function stub(): object {
  return { setAttribute: nothing, appendChild: nothing, textContent: "" };
}

function install(): void {
  const doc = { createElementNS: stub };
  Object.defineProperty(globalThis, "document", { value: doc });
}

install();
const engine = "../../.claude/skills/schematic-figure/foundation/engine/";
const { createFigure } = await import(`${engine}core-fig.ts`);
const { STYLE } = await import(`${engine}style.ts`);

const host = stub();
const journal = [STYLE.format, STYLE.text.panel, STYLE.color.blue].join(",");
createFigure(host, { format: "patent" });
STYLE.patentForced.stroke += 1;
const second = createFigure(host, { format: "patent" });
const forced = Object.values(STYLE.patentForced).join("");
createFigure(host, { format: "journal" });
const after = [STYLE.format, STYLE.text.panel, STYLE.color.blue].join(",");
console.log(`${journal === after}:${forced}`);
