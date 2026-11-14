// The server's Content-Security-Policy has no 'unsafe-inline', so it blocks every style="" attribute. Markup that
// needs a computed length carries it as data-css="left:12.5%;width:3%" instead. This sets those values through the
// CSSOM, which the policy allows.
export function applyCss(root: ParentNode): void {
  for (const node of root.querySelectorAll<HTMLElement | SVGElement>("[data-css]")) {
    for (const rule of (node.getAttribute("data-css") ?? "").split(";")) {
      const colon = rule.indexOf(":");
      if (colon > 0) node.style.setProperty(rule.slice(0, colon).trim(), rule.slice(colon + 1).trim());
    }
    node.removeAttribute("data-css");
  }
}
