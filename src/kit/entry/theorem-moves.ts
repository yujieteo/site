import { whenNear } from "../near.ts";

whenNear("theorem-moves", async (figure) => {
  const view = await import("../theorems/moves.ts");
  view.show(figure);
});
