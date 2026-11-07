import runpy
import sys
from pathlib import Path
from types import ModuleType, SimpleNamespace

TOOLS = Path(".claude/skills/schematic-figure/foundation/tools").resolve()


def stub_module(name: str, **names: object) -> None:
    mod = ModuleType(name)
    mod.__dict__.update(names)
    sys.modules[name] = mod


def save_deck(out: str) -> None:
    _ = Path(out).write_text("deck")


def presentation() -> SimpleNamespace:
    return SimpleNamespace(slide_width=0, slide_height=0, save=save_deck)


def install() -> None:
    stub_module("lxml", etree=SimpleNamespace(Element=object))
    stub_module("PIL", Image=object)
    stub_module("pptx", Presentation=presentation)
    stub_module("pptx.opc")
    stub_module("pptx.opc.constants", RELATIONSHIP_TYPE=object)
    stub_module("pptx.opc.package", Part=object)
    stub_module("pptx.opc.packuri", PackURI=object)
    stub_module("pptx.presentation", Presentation=object)
    stub_module("pptx.util", Mm=float)
    stub_module("svg2pptx_native", main=None)
    sys.path.insert(0, str(TOOLS))


def main(out: str, files: list[str]) -> None:
    install()
    sys.argv = ["svg2pptx.py", out, *files]
    try:
        _ = runpy.run_path(str(TOOLS / "svg2pptx.py"), run_name="__main__")
    except SystemExit as e:
        stopped = e.code is not None
    else:
        stopped = False
    print(f"stopped:{stopped} deck:{Path(out).exists()}")


main(sys.argv[1], sys.argv[2:])
