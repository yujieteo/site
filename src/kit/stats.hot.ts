export const FIT_N = 0;
export const FIT_SLOPE = 1;
export const FIT_INTERCEPT = 2;
export const FIT_R = 3;

export function fillBins(out: Float64Array, xs: readonly number[], origin: number, width: number): number {
  const bins = Math.min(out.length, Math.ceil((6 - origin) / width));
  out.fill(0);
  for (let i = 0; i < xs.length; i++) {
    const at = Math.floor(((xs[i] ?? 0) - origin) / width);
    if (at >= 0 && at < bins) out[at] = (out[at] ?? 0) + 1;
  }
  return bins;
}

export function countPeaks(counts: Float64Array, bins: number): number {
  let peaks = 0;
  let rising = false;
  let previous = 0;
  for (let i = 0; i <= bins; i++) {
    const value = i < bins ? (counts[i] ?? 0) : 0;
    if (value > previous) rising = true;
    if (value < previous && rising) peaks++;
    if (value < previous) rising = false;
    previous = value;
  }
  return peaks;
}

export function fitLine(out: Float64Array, xs: readonly number[], ys: readonly number[], kept: Uint8Array): void {
  let n = 0;
  let sx = 0;
  let sy = 0;
  for (let i = 0; i < xs.length; i++) {
    if (kept[i] !== 1) continue;
    n++;
    sx += xs[i] ?? 0;
    sy += ys[i] ?? 0;
  }
  const mx = sx / n;
  const my = sy / n;
  let sxx = 0;
  let syy = 0;
  let sxy = 0;
  for (let i = 0; i < xs.length; i++) {
    if (kept[i] !== 1) continue;
    const dx = (xs[i] ?? 0) - mx;
    const dy = (ys[i] ?? 0) - my;
    sxx += dx * dx;
    syy += dy * dy;
    sxy += dx * dy;
  }
  out[FIT_N] = n;
  out[FIT_SLOPE] = sxy / sxx;
  out[FIT_INTERCEPT] = my - (sxy / sxx) * mx;
  out[FIT_R] = sxy / Math.sqrt(sxx * syy);
}

export function mixedRate(rates: readonly number[], own: readonly number[], other: readonly number[], t: number): number {
  let ownTotal = 0;
  let otherTotal = 0;
  for (let i = 0; i < own.length; i++) {
    ownTotal += own[i] ?? 0;
    otherTotal += other[i] ?? 0;
  }
  let rate = 0;
  for (let i = 0; i < own.length; i++) {
    const share = (1 - t) * ((own[i] ?? 0) / ownTotal) + t * ((other[i] ?? 0) / otherTotal);
    rate += share * (rates[i] ?? 0);
  }
  return rate;
}
