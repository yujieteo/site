import { resolve } from 'node:path';
import { optStr } from './cdp.ts';
import type { Args } from './cdp.ts';

export function figPath(a: Args, proj: string | null): string {
  const given = optStr(a, 'fig') ?? 'figure/figure.ts';
  return proj === null ? resolve(given) : resolve(proj, given);
}
