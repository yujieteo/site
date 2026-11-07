import { whenNear } from "../near.ts";

whenNear("theorem-rank", async (figure) => {
  const view = await import("../theorems/rank.ts");
  view.show(figure);
});
