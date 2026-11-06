export const YEARS = 10;

export function fillBalances(out: Float64Array, start: number, ratePercent: number): void {
  const growth = 1 + ratePercent / 100;
  let balance = start;
  for (let year = 0; year < YEARS; year++) {
    balance = balance * growth;
    out[year] = balance;
  }
}
