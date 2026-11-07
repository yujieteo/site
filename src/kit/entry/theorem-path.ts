import { whenNear } from "../near.ts";

whenNear("theorem-path", async (figure) => {
  const view = await import("../theorems/path.ts");
  view.show(figure);
});
