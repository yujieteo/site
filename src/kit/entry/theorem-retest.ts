import { whenNear } from "../near.ts";

whenNear("theorem-retest", async (figure) => {
  const view = await import("../theorems/retest.ts");
  view.show(figure);
});
