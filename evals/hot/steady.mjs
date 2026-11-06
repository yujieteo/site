const n = Number(process.argv[2]);
const xs = new Float64Array(1024);
let t = 0;
for (let k = 0; k < n; k++) {
  for (let i = 0; i < 1024; i++) {
    xs[i] = xs[i] + i;
    t = t + xs[i];
  }
}
console.log(t);
