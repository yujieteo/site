import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// yujieteo/beamdiag tests the Beamdiag deck itself; the site checks only that the page inlines its shared template.
test("the site's shared beamdswitch template is the copy the Beamdiag page inlines", () => {
  const shared = readFileSync(new URL("../templates/beamdswitch.js", import.meta.url), "utf8");
  const beamdiag = readFileSync(new URL("../visuals/beamdiag/beamdswitch.js", import.meta.url), "utf8");
  assert.equal(beamdiag, shared, "templates/beamdswitch.js and visuals/beamdiag/beamdswitch.js must stay identical");
});
