import { whenNear } from "../near.ts";

whenNear("theorem-proof", async (figure) => {
  const view = await import("../theorems/proof.ts");
  view.show(figure);
});
