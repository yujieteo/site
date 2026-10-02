# Verify

Run from the repository root. Every command must pass; CI runs the same commands.

```sh
python build.py                                     # index.html is generated
python build.py --check
node --test 'tests/*.test.mjs'                      # engine, page boot, presentation, WebMCP, exports, data, TeX, reference
python -m unittest discover -s tests -p 'test_*.py' # build freshness, self-containment, docs, reference freshness
node tests/e2e/browser-check.mjs                    # headless Chrome end to end
```

The Python suite fails if `index.html` or `reference/reference.json` is stale. Rebuild them with `python reference/build_reference.py` and `python build.py`, and review the diff: a reference value that moves is a change in behaviour and needs a reason.

The browser check needs Chrome or Chromium (set `CHROME_PATH` if it is not in a usual place). With `--shots DIR` it also saves screenshots of the three flagships and the dark-mode synthesis.

Then open `index.html` and check by hand:

1. Step through the vacuum-polarization flagship: the conventional and Connes–Kreimer columns advance together and step 12 says the Birkhoff factor equals the MS finite part.
2. Drag the events in Spacetime and light cones, the charges in Classical electromagnetism, the diamonds in the Haag–Kastler net.
3. Build a graph in the Diagram builder, then cut lines.
4. Run the presentation (27 steps) with the arrow keys; open the palette with Ctrl/Cmd+K.
5. Save Markdown and the beamdswitch deck; Copy deck.
6. Repeat at phone width and in dark mode.
