import { whenNear } from "../near.ts";

whenNear("theorem-dials", async (figure) => {
  const view = await import("../theorems/dials.ts");
  view.show(figure);
});
