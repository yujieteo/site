import { expect, test } from "bun:test";
import fc from "fast-check";
import { CommandParseError, type Message, parseCommands } from "./src/commands";
import { BEAM_WASM, capture, runBeamSession } from "../scripts/replay-lib";

const PAGE_WIDTH = 800;
const START: Message = { ev: "start", w: PAGE_WIDTH, date: "2026-01-01" };

const SESSIONS: Record<string, Message[]> = {
  "start and hand calculation": [START, { ev: "hand-visible" }],
  "each end preset": [
    START,
    { ev: "click", act: "ends", arg: "pin,pin" },
    { ev: "click", act: "ends", arg: "fixed,fixed" },
    { ev: "click", act: "ends", arg: "fixed,pin" },
    { ev: "click", act: "ends", arg: "fixed," },
  ],
  "add each load and edit the length": [
    START,
    { ev: "click", act: "add-support", arg: "" },
    { ev: "click", act: "add", arg: "point" },
    { ev: "click", act: "add", arg: "dist" },
    { ev: "click", act: "add", arg: "moment" },
    { ev: "input", field: "length", value: "3" },
    { ev: "done", field: "length" },
    { ev: "width", w: 600 },
  ],
  "pointer and keys": [
    START,
    { ev: "click", act: "add", arg: "point" },
    { ev: "down", key: "load.0" },
    { ev: "move", frac: 0.5 },
    { ev: "up" },
    { ev: "key", key: "ArrowRight", shift: false, target: "plot" },
    { ev: "key", key: "ArrowLeft", shift: true, target: "plot" },
  ],
  "save the figure": [START, { ev: "click", act: "save-image", arg: "" }],
};

test.each(Object.entries(SESSIONS))("the solver answers %s with commands the page can parse", async (name, messages) => {
  capture({ kind: "beam", name, messages });
  const outputs = await runBeamSession(BEAM_WASM, messages);
  expect(outputs).toHaveLength(messages.length);
  for (const output of outputs) parseCommands(JSON.parse(output));
  const first = parseCommands(JSON.parse(outputs[0] ?? "[]"));
  expect(first.length).toBeGreaterThan(0);
});

test("the command parser fails on a bad command and on nothing else", () => {
  const anything = fc.anything({ maxDepth: 3 });
  fc.assert(fc.property(anything, (json) => {
    try {
      parseCommands(json);
    } catch (error) {
      return error instanceof CommandParseError;
    }
    return true;
  }), { numRuns: 500 });
});

test("a command with a field of the wrong type is rejected", () => {
  expect(() => parseCommands([{ cls: ".x", name: "on", on: "yes" }])).toThrow(CommandParseError);
  expect(() => parseCommands([{ nothing: 1 }])).toThrow(CommandParseError);
  expect(() => parseCommands({})).toThrow(CommandParseError);
});
