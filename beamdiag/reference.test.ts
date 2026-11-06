import { expect, test } from "bun:test";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

const reference = fileURLToPath(new URL("./reference.py", import.meta.url));
const solve = `import json, runpy, sys
from fractions import Fraction
solver = runpy.run_path(sys.argv[1])["solve_exact"]
matrix = [[Fraction(value) for value in row] for row in json.loads(sys.argv[2])]
rhs = [Fraction(value) for value in json.loads(sys.argv[3])]
try:
    print(json.dumps([str(value) for value in solver(matrix, rhs)]))
except ValueError as error:
    print(str(error), file=sys.stderr)
    sys.exit(2)
`;

function solution(matrix: number[][], rhs: number[]): Bun.ReadableSyncSubprocess {
  return Bun.spawnSync(["python3", "-c", solve, reference, JSON.stringify(matrix), JSON.stringify(rhs)]);
}

test("the exact reference solver preserves rational answers", () => {
  const result = solution([[2, 1], [1, 2]], [1, 0]);
  expect(result.exitCode).toBe(0);
  expect(JSON.parse(result.stdout.toString())).toEqual(["2/3", "-1/3"]);
});

test("the exact reference solver preserves an empty system", () => {
  const result = solution([], []);
  expect(result.exitCode).toBe(0);
  expect(JSON.parse(result.stdout.toString())).toEqual([]);
});

test("the exact reference solver preserves the frozen beam answers", () => {
  const result = Bun.spawnSync(["python3", reference, "--check"]);
  expect(result.exitCode).toBe(0);
  expect(result.stderr.toString()).toBe("");
});

test("the reference deck parser preserves supports, loads and material data", () => {
  const deck = readFileSync(new URL("./test-data/reference.bdf", import.meta.url), "utf8");
  const parse = "import json,runpy,sys; print(json.dumps(runpy.run_path(sys.argv[1])['model_from_bdf'](sys.argv[2])))";
  const result = Bun.spawnSync(["python3", "-c", parse, reference, deck]);
  expect(result.exitCode).toBe(0);
  expect(JSON.parse(result.stdout.toString())).toEqual({
    case: { SPC: "1", LOAD: "2" }, params: { POST: "-1" }, grids: 2, elements: 1,
    model: {
      length: 4, material: { E: 200, nu: 0.3 }, section: { A: 1, I: 2, Iy: 3, J: 4 },
      supports: [{ kind: "fixed", x: 0 }],
      loads: [
        { kind: "point", x: 4, F: -10 },
        { kind: "moment", x: 4, C: 2 },
        { kind: "dist", x1: 0, x2: 4, q1: -1, q2: -2 },
      ],
    },
  });
});

for (const matrix of [[], [[1], [2]]]) {
  test(`the exact reference solver rejects ${matrix.length} rows for one right-hand value`, () => {
    const result = solution(matrix, [1]);
    expect(result.exitCode).toBe(2);
    expect(result.stderr.toString()).toBe("matrix row count must match the right-hand side\n");
  });
}

for (const row of [[], [1, 0]]) {
  test(`the exact reference solver rejects a row of ${row.length} columns for a one-variable system`, () => {
    const result = solution([row], [1]);
    expect(result.exitCode).toBe(2);
    expect(result.stderr.toString()).toBe("matrix must be square\n");
  });
}
