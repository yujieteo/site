# Verification

The engine is JavaScript; every result class is checked against a Python reference
that uses a different method, plus closed forms.

| Result | Engine method | Reference | Tolerance in the tests | Typical agreement |
| --- | --- | --- | --- | --- |
| Area properties, Q | Green's theorem on exact lines and arcs, 16-point Gauss–Legendre | `reference/sectionref.py`: polygons + circular segments + disks with closed-form moments; exact disk ∩ half-plane clipping for Q | 1e-9 relative | 1e-15 |
| Closed forms (A, I, Q, J, Z_p, …) | as above | formulas in `reference/cases.py` | 1e-9 relative | 1e-15 |
| Torsion constant | exact formulas, Saint-Venant series, Bredt–Batho | `reference/prandtl.py`: Prandtl stress function, linear FEM, three uniform refinements, Richardson | per formula, stated in `torsion-accuracy.json` | see the table |
| M–κ, κ_lim, M_lim, M_p, M_p(N) | strip fibres with exact strip moments, quadratic stress interpolation | `reference/plasticref.py`: exact width function, 400-point Gauss–Legendre between breakpoints | 1e-6 relative | 1e-8 |
| YAML | `src/yaml.js` | PyYAML (tests only) | exact data equality both ways | — |

## Torsion accuracy

`reference/torsion_accuracy.py` runs the page's own formula (through Node) and the
FEM reference on a sweep of shapes inside each formula's domain and records the
largest relative error. The stated accuracies are:

| Formula | Stated | Domain |
| --- | --- | --- |
| circle, circular hollow | 0.01% | exact |
| semicircle, equilateral triangle | 0.01% | exact (Saint-Venant) |
| sharp rectangle | 0.01% | Saint-Venant series |
| rectangular hollow, sharp or mixed corners | 6% | Bredt–Batho, t ≤ 0.1 min(b, h) |
| rectangular hollow, rounded uniform wall | 3.5% | Bredt–Batho, t ≤ 0.1 min(b, h), inner radius = outer − t |

For exact formulas the 0.01% bound is the reference's own accuracy, not the
formula's. Bredt–Batho underestimates J; its error grows with t / b and is largest
for sharp corners. A formula whose measured error exceeds its stated accuracy is
recorded as withdrawn and the page shows "n/a" for it.

## Running the checks

```sh
node --test 'tests/*.test.mjs'
python -m unittest discover -s tests -p 'test_*.py'
```

The Python suite also confirms that `index.html`, `reference/fixtures.json`,
`reference/reference.json` and `reference/torsion-accuracy.json` are current.
