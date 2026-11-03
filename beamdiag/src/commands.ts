export type Command =
  | { kind: "save"; name: string; mime: string; data: string; b64: boolean }
  | { kind: "raster"; svg: string; w: number; h: number; name: string; bg: string }
  | { kind: "html"; selector: string; html: string }
  | { kind: "toast"; message: string }
  | { kind: "text"; selector: string; text: string }
  | { kind: "attr"; selector: string; name: string; value: string | null }
  | { kind: "value"; selector: string; value: string }
  | { kind: "cls"; selector: string; name: string; on: boolean }
  | { kind: "hidden"; selector: string; on: boolean }
  | { kind: "focus"; selector: string }
  | { kind: "prevent" };

export type Message =
  | { ev: "start"; w: number; date: string }
  | { ev: "width"; w: number }
  | { ev: "input"; field: string; value: string }
  | { ev: "change"; field: string; value: string }
  | { ev: "done"; field: string; value?: string }
  | { ev: "click"; act: string; arg: string }
  | { ev: "down"; key: string }
  | { ev: "move"; frac: number }
  | { ev: "up" }
  | { ev: "key"; key: string; shift: boolean; target: string }
  | { ev: "result"; tag: "png"; ok: boolean; msg?: string }
  | { ev: "fonts"; w: number; fonts: string[] }
  | { ev: "hand-visible" };

export class CommandParseError extends Error {}

type Fields = Readonly<Record<string, unknown>>;

function isFields(value: unknown): value is Fields {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function str(fields: Fields, key: string): string {
  const value = fields[key];
  if (typeof value !== "string") throw new CommandParseError(`command field ${key} is not a string`);
  return value;
}

function num(fields: Fields, key: string): number {
  const value = fields[key];
  if (typeof value !== "number") throw new CommandParseError(`command field ${key} is not a number`);
  return value;
}

function bool(fields: Fields, key: string): boolean {
  const value = fields[key];
  if (typeof value !== "boolean") throw new CommandParseError(`command field ${key} is not a boolean`);
  return value;
}

function nullableStr(fields: Fields, key: string): string | null {
  return fields[key] === null ? null : str(fields, key);
}

function parseCommand(fields: Fields): Command {
  if ("save" in fields) return { kind: "save", name: str(fields, "save"), mime: str(fields, "mime"), data: str(fields, "data"), b64: bool(fields, "b64") };
  if ("raster" in fields) return { kind: "raster", svg: str(fields, "raster"), w: num(fields, "w"), h: num(fields, "h"), name: str(fields, "name"), bg: str(fields, "bg") };
  if ("html" in fields) return { kind: "html", selector: str(fields, "html"), html: str(fields, "v") };
  if ("toast" in fields) return { kind: "toast", message: str(fields, "toast") };
  if ("text" in fields) return { kind: "text", selector: str(fields, "text"), text: str(fields, "v") };
  if ("attr" in fields) return { kind: "attr", selector: str(fields, "attr"), name: str(fields, "name"), value: nullableStr(fields, "v") };
  if ("value" in fields) return { kind: "value", selector: str(fields, "value"), value: str(fields, "v") };
  if ("cls" in fields) return { kind: "cls", selector: str(fields, "cls"), name: str(fields, "name"), on: bool(fields, "on") };
  if ("hidden" in fields) return { kind: "hidden", selector: str(fields, "hidden"), on: bool(fields, "on") };
  if ("focus" in fields) return { kind: "focus", selector: str(fields, "focus") };
  if ("prevent" in fields) return { kind: "prevent" };
  throw new CommandParseError("unknown command");
}

export function parseCommands(json: unknown): Command[] {
  if (!Array.isArray(json)) throw new CommandParseError("commands are not a list");
  return json.map((item: unknown) => {
    if (!isFields(item)) throw new CommandParseError("command is not an object");
    return parseCommand(item);
  });
}
