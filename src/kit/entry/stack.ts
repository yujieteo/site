import { wireGap } from "../gap-wire.ts";
import { stackFigure } from "../stack.ts";

for (const figure of document.querySelectorAll("figure[data-kind=stack]")) wireGap(figure, stackFigure);
