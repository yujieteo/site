import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips } from "../tooltip.ts";
import { cursorPart, FRAMES, livePart, sideParts, strikeFigure, strikeNote, strikeSvg, type Live } from "../strike-fig.ts";
import { fetchStrike, runLive, type Result, type Stop } from "../strike-live.ts";
import type { Strike } from "../strike-wasm.ts";

const FRAME_MS = 140;

interface Parts {
  figure: Element;
  scrub: HTMLInputElement;
  skin: HTMLInputElement;
  note: Element;
  status: Element;
  play: Element;
  run: Element;
  skinOut: Element;
}

interface State {
  live: Live;
  stop: Stop;
  chart: number;
  solver: Strike | null;
  timer: number;
}

function find(figure: Element): Parts | null {
  const scrub = figure.querySelector("input[data-scrub]");
  const skin = figure.querySelector("input[data-skin]");
  const note = figure.querySelector("[data-note]");
  const status = figure.querySelector("[data-status]");
  const play = figure.querySelector("[data-play]");
  const run = figure.querySelector("[data-run]");
  const skinOut = figure.querySelector("[data-skin-out]");
  if (!(scrub instanceof HTMLInputElement) || !(skin instanceof HTMLInputElement) || !note || !status || !play || !run || !skinOut) return null;
  return { figure, scrub, skin, note, status, play, run, skinOut };
}

function draw(p: Parts, st: State): void {
  const frame = Number(p.scrub.value);
  const side = p.figure.querySelector("[data-side]");
  const cursor = p.figure.querySelector("[data-cursor]");
  if (side) side.innerHTML = sideParts(st.chart, frame);
  if (cursor) cursor.innerHTML = cursorPart(st.chart, frame);
  p.note.textContent = strikeNote(frame);
}

function halt(p: Parts, st: State): void {
  clearInterval(st.timer);
  st.timer = 0;
  p.play.textContent = "Play";
  p.play.setAttribute("aria-pressed", "false");
}

function toggle(p: Parts, st: State): void {
  if (st.timer !== 0) return halt(p, st);
  if (Number(p.scrub.value) === FRAMES - 1) p.scrub.value = "0";
  p.play.textContent = "Pause";
  p.play.setAttribute("aria-pressed", "true");
  st.timer = window.setInterval(() => {
    p.scrub.value = String(Number(p.scrub.value) + 1);
    draw(p, st);
    if (Number(p.scrub.value) === FRAMES - 1) halt(p, st);
  }, FRAME_MS);
}

function summary(r: Result): string {
  const head = r.stopped ? "Stopped." : "Done.";
  return `${head} ${r.steps} steps in ${r.seconds.toFixed(1)} s on your machine. Largest deflection ${r.deflection.toFixed(1)} mm, ${r.skin} skin shells and ${r.stiffeners} stiffener shells eroded.`;
}

async function runIt(p: Parts, st: State): Promise<void> {
  if (p.run.textContent === "Stop") {
    st.stop.now = true;
    return;
  }
  st.stop.now = false;
  p.run.textContent = "Stop";
  p.status.textContent = st.solver ? "Running." : "Downloading the solver, 34 KB.";
  try {
    st.solver ??= await fetchStrike();
    const result = await runLive(st.solver, Number(p.skin.value), st.live, st.stop, (us) => {
      const at = p.figure.querySelector("[data-live]");
      if (at) at.innerHTML = livePart(st.chart, st.live);
      p.status.textContent = `Running: ${us.toFixed(0)} µs of 3000 µs simulated, deflection ${st.live.deflection.at(-1)?.toFixed(1)} mm.`;
    });
    p.status.textContent = summary(result);
  } catch (error) {
    p.status.textContent = `The solver did not run: ${error instanceof Error ? error.message : "unknown error"}.`;
  }
  p.run.textContent = "Run it yourself";
}

function wireStrike(figure: Element): void {
  hydrate(figure, strikeFigure);
  const p = find(figure);
  if (!p) return;
  const st: State = { live: { us: [], deflection: [] }, stop: { now: false }, chart: plotWidth(figure), solver: null, timer: 0 };
  p.scrub.addEventListener("input", () => {
    halt(p, st);
    draw(p, st);
  });
  p.play.addEventListener("click", () => toggle(p, st));
  p.skin.addEventListener("input", () => {
    p.skinOut.textContent = `${Number(p.skin.value).toFixed(1)} mm`;
  });
  p.run.addEventListener("click", () => void runIt(p, st));
  watch(figure, (width) => {
    st.chart = width;
    hideTooltips(figure);
    swapChart(figure, strikeSvg(width, Number(p.scrub.value), st.live));
  });
}

for (const figure of document.querySelectorAll("figure[data-kind=strike]")) wireStrike(figure);
