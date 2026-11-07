import { whenNear } from "../near.ts";

whenNear("theorem-papers", async (figure) => {
  const view = await import("../theorems/papers.ts");
  view.show(figure);
});
