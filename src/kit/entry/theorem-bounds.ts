import { whenNear } from "../near.ts";

whenNear("theorem-bounds", async (figure) => {
  const view = await import("../theorems/bounds.ts");
  view.show(figure);
});
