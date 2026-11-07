import { deepStrictEqual, ok } from "node:assert/strict";
import { centred, figureWidth, fitCount, keep, panelColumns, pick, ticks } from "../../src/kit/scale.ts";

deepStrictEqual(ticks(0.4, 6, 8), [1, 2, 3, 4, 5, 6]);
console.log("PASS ticks fall on round numbers inside the range");

deepStrictEqual(ticks(0, 1, 5), [0, 0.25, 0.5, 0.75, 1]);
console.log("PASS five ticks on a unit range are quarters");

const roomy = ticks(0, 1, fitCount(468, "100%"));
const tight = ticks(0, 1, fitCount(120, "100%"));
ok(tight.length < roomy.length, "a narrow axis gets fewer ticks");
console.log("PASS a narrow axis gets fewer ticks than a wide one");

const crowded = [centred(0, "100%"), centred(20, "100%"), centred(40, "100%"), centred(60, "100%")];
deepStrictEqual(keep(crowded, 4), [true, false, true, false]);
console.log("PASS labels that touch a kept label are dropped");

deepStrictEqual(keep([centred(0, "0%"), centred(200, "100%")], 4), [true, true]);
console.log("PASS labels with room all stay");

deepStrictEqual(pick(150, ["each eruption, by the wait until the next one (min)", "wait (min)"]), "wait (min)");
console.log("PASS a long caption gives way to a short one");

deepStrictEqual([panelColumns(280, 220, 40), panelColumns(596, 220, 40), panelColumns(912, 220, 40)], [1, 2, 2]);
console.log("PASS panels drop to one column when narrow");

deepStrictEqual([figureWidth(false), figureWidth(true)], [596, 912]);
console.log("PASS a wide figure draws 960 px wide, a plain one at the column");
