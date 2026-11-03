# Beam diagram source notes

`test.goose` holds most facts that the removed comments held. These facts stay here because they are reasons, and no name, check or test can hold them.

| Fact | Why it is not code |
| --- | --- |
| The engine arithmetic follows the JavaScript engine that it replaced, operation for operation, so the page shows the same numbers as before. | The JavaScript engine is gone, so no test can compare the last bit. `test.goose` holds the results only to 1e-8 of the exact answers. |
| `jv.goose` is a small JSON reader because the JSON tree of the Goose standard library reads back wrong on WebAssembly: its nodes hold slices behind relative offsets. | The fault is in the standard library on WebAssembly. `test.goose` runs natively, where that library works. |
| A beam solved in one unit convention can overflow in another (10³⁰⁶ N·m is Infinity in N·mm). So `snapshot` copies a solved beam and `restore` puts it back when the new solution fails. | This is the reason for `snapshot` and `restore`. A test needs a beam at the limit of a double in a full page session. |
| The view catches up when a drag ends, because a long beam takes too long to derive again on each drag step. | This is a speed reason. No test measures it. |
| Fields show 10 significant figures, so a typed position lands on any other position within 1e-9·L (`take_x`). A shown value that is typed back gives the position that it shows. | This is the reason for the 1e-9 in `take_x`. |
| E typed in psi matches a preset only to rounding, so presets are recognised within 1e-9. | This is the reason for the 1e-9 in the material match. |
| The figure halves spans before it subtracts them, so loads near the limit of a double do not overflow. A point force or couple is capped, because during an unsolved edit F can be more than the largest force of the solved model. | These are the reasons for the halves and the cap in `figure.goose`. |
| Some sizes in `page_style.css` follow their parent text, so a rem value is wrong there. | CSS has no names for this, and a check cannot tell which sizes must follow their parent. |
