export const COLUMN = 692;
export const WIDE = 960;
export const GUTTER = 24;
export const FRAME_PAD = 24;
export const LABEL_GAP = 48;
const GLYPH = 6.5;
const STEPS: readonly number[] = [1, 2, 2.5, 5];

export interface Scale {
  d0: number;
  d1: number;
  r0: number;
  r1: number;
}

export interface Span {
  x: number;
  w: number;
}

export function scale(d0: number, d1: number, r0: number, r1: number): Scale {
  return { d0, d1, r0, r1 };
}

export function at(s: Scale, value: number): number {
  return s.r0 + ((value - s.d0) / (s.d1 - s.d0)) * (s.r1 - s.r0);
}

export function textWidth(text: string): number {
  return text.length * GLYPH;
}

export function figureWidth(wide: boolean): number {
  return (wide ? WIDE : COLUMN - 2 * GUTTER) - 2 * FRAME_PAD;
}

export function svgHead(width: number, height: number): string {
  return `<svg class="chart" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="ALT">`;
}

export function fitCount(room: number, sample: string): number {
  return Math.max(2, Math.floor(room / (textWidth(sample) + LABEL_GAP)));
}

export function tickStep(span: number, most: number): number {
  const raw = span / (most - 1);
  const mag = 10 ** Math.floor(Math.log10(raw));
  for (const m of STEPS) if (m * mag >= raw) return m * mag;
  return 10 * mag;
}

export function ticks(low: number, high: number, most: number): number[] {
  const step = tickStep(high - low, most);
  const out: number[] = [];
  for (let k = Math.ceil(low / step - 1e-9); k * step <= high + 1e-9; k++) out.push(Number((k * step).toPrecision(12)));
  return out;
}

export function keep(spans: readonly Span[], gap: number): boolean[] {
  const shown: boolean[] = [];
  for (let i = 0; i < spans.length; i++) {
    const a = spans[i] ?? { x: 0, w: 0 };
    let free = true;
    for (let j = 0; j < i; j++) {
      const b = spans[j] ?? { x: 0, w: 0 };
      if (shown[j] === true && a.x < b.x + b.w + gap && b.x < a.x + a.w + gap) free = false;
    }
    shown.push(free);
  }
  return shown;
}

export function centred(x: number, text: string): Span {
  const w = textWidth(text);
  return { x: x - w / 2, w };
}

export function pick(room: number, options: readonly string[]): string {
  for (const text of options) if (textWidth(text) <= room) return text;
  return options[options.length - 1] ?? "";
}

export function panelColumns(width: number, least: number, gap: number): number {
  return width >= 2 * least + gap ? 2 : 1;
}
