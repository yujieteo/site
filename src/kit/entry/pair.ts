import { wireGap } from "../gap-wire.ts";
import { pairFigure } from "../pair.ts";

for (const figure of document.querySelectorAll("figure[data-kind=pair]")) wireGap(figure, pairFigure);
