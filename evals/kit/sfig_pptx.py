import runpy
import sys
from pathlib import Path
from types import ModuleType

TOOLS = Path(".claude/skills/schematic-figure/foundation/tools").resolve()


class Deck:
    slide_width = 0
    slide_height = 0

    def save(self, out: str) -> None:
        _ = Path(out).write_text("deck")


class Anything(ModuleType):
    def __getattr__(self, name: str) -> object:
        if name == "Presentation":
            return Deck
        return Anything(name) if name.islower() else object


def main(out: str, files: list[str]) -> None:
    for name in ("lxml", "PIL", "pptx", "pptx.opc", "pptx.opc.constants", "pptx.opc.package", "pptx.opc.packuri", "pptx.presentation", "pptx.util", "svg2pptx_native"):
        sys.modules[name] = Anything(name)
    sys.path.insert(0, str(TOOLS))
    sys.argv = ["svg2pptx.py", out, *files]
    try:
        _ = runpy.run_path(str(TOOLS / "svg2pptx.py"), run_name="__main__")
    except SystemExit as e:
        print(f"exit:{e.code is not None}")
    else:
        print("exit:False")
    print(f"deck:{Path(out).exists()}")


main(sys.argv[1], sys.argv[2:])
