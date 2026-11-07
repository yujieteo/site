import { whenNear } from "../near.ts";

whenNear("theorem-evidence", async (figure) => {
  const view = await import("../theorems/evidence.ts");
  view.show(figure);
});
