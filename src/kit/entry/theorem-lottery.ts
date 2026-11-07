import { whenNear } from "../near.ts";

whenNear("theorem-lottery", async (figure) => {
  const view = await import("../theorems/lottery.ts");
  view.show(figure);
});
