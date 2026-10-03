// The global `page` that `chrome-devtools-axi run` gives a script it reads from stdin, as
// `chrome-devtools-axi run --help` lists it; scripts/verify_tampines_food_browser.js runs that way.
declare const page: {
  open(url: string): Promise<{ url: string; status: number }>;
  eval<T>(fn: (() => T) | string): Promise<Awaited<T>>;
  snapshot(): Promise<string>;
  wait(msOrSelector: number | string, ms?: number): Promise<void>;
  click(target: string): Promise<void>;
  fill(target: string, text: string): Promise<void>;
  type(text: string): Promise<void>;
  press(key: string): Promise<void>;
  back(): Promise<void>;
};
