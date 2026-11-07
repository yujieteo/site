import { whenNear } from "../near.ts";

whenNear("theorem-trend", async (figure) => {
  const view = await import("../theorems/trend.ts");
  view.show(figure);
});
