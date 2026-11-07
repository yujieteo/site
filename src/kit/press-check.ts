const DOTS = "figure[data-kind=map] [data-i]";
const WANT = 38;

function spot(dot: Element): { x: number; y: number } {
  const r = dot.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height * (dot.classList.contains("repo") ? 0.04 : 0.06) };
}

function moved(): string[] {
  const out: string[] = [];
  for (const sheet of document.styleSheets) {
    for (const rule of sheet.cssRules) {
      if (!(rule instanceof CSSStyleRule) || !rule.selectorText.includes(":active") || rule.style.transform === "") continue;
      const idle = rule.selectorText.split(":active").join("");
      for (const el of document.querySelectorAll("figure svg [role=button]")) if (el.matches(idle)) out.push(`a press moves ${el.getAttribute("aria-label") ?? el.textContent}`);
    }
  }
  return out.slice(0, 4);
}

function covered(): string[] {
  const out: string[] = [];
  for (const dot of document.querySelectorAll(DOTS)) {
    const { x, y } = spot(dot);
    if (document.elementFromPoint(x, y) !== dot) out.push(`${dot.getAttribute("aria-label")?.split(" (")[0]} cannot be pressed`);
  }
  return out;
}

function report(): void {
  const count = document.querySelectorAll(DOTS).length;
  const found = count === WANT ? [...moved(), ...covered()] : [`the map has ${count} dots, not ${WANT}`];
  const result = document.createElement("pre");
  result.id = "press-result";
  result.textContent = JSON.stringify(found);
  document.body.append(result);
}

report();
