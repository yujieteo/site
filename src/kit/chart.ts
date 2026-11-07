import { YEARS } from "./compound.hot.ts";

export const CHART_HEIGHT = 200;
export const COMPOUND_START = 100;
export const COMPOUND_MAX_RATE = 20;

export function barHeight(balance: number): number {
  const top = COMPOUND_START * (1 + COMPOUND_MAX_RATE / 100) ** YEARS;
  return (balance / top) * CHART_HEIGHT;
}
