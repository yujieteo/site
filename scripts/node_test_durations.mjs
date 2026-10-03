// A node --test reporter that writes one JSON line per finished test: its file, name, nesting depth and
// duration. scripts/run_tests.py reads these lines to report and budget the Node suite's slowest tests.
/**
 * @param {AsyncIterable<import("node:test/reporters").TestEvent>} source
 * @returns {AsyncGenerator<string>}
 */
export default async function* durations(source) {
  for await (const { type, data } of source) {
    if (type !== "test:pass" && type !== "test:fail") continue;
    if (data.details?.duration_ms === undefined) continue;
    yield `${JSON.stringify({ file: data.file ?? "", name: data.name, nesting: data.nesting, seconds: data.details.duration_ms / 1000, failed: type === "test:fail" })}\n`;
  }
}
