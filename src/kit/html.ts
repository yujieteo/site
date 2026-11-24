// Escapes text for HTML: for the text of an element and for an attribute value in double quotes.
export function escapeHtml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}
