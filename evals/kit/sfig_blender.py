import contextlib
import importlib
import sys
from dataclasses import dataclass, field
from functools import partial
from pathlib import Path
from types import ModuleType

BLENDER = Path(".claude/skills/schematic-figure/foundation/blender").resolve()


class FailureError(RuntimeError):
    pass


@dataclass
class Link:
    from_socket: "Socket"


@dataclass
class Socket:
    links: list[Link] = field(default_factory=list)
    is_linked: bool = False


@dataclass
class Node:
    inputs: dict[str | int, Socket]
    outputs: list[Socket]


@dataclass
class Nodes:
    fail_after: int | None
    items: list[Node] = field(default_factory=list)
    new: object = None
    remove: object = None


@dataclass
class Links:
    new: object = None
    remove: object = None


@dataclass
class Tree:
    nodes: Nodes
    links: Links
    out: Node
    source: Socket
    get_output_node: object = None


@dataclass
class Material:
    name: str
    node_tree: Tree
    use_nodes: bool = False
    get: object = None


@dataclass
class Tinted:
    hide_render: bool = False
    material_slots: list[object] = field(default_factory=list)


@dataclass
class Cycles:
    samples: int = 100
    device: str = "CPU"


@dataclass
class RenderSettings:
    use_freestyle: bool = True
    filepath: str = "out.png"


def tinted_objects() -> dict[str, Tinted]:
    return {"a": Tinted()}


@dataclass
class Scene:
    cycles: Cycles = field(default_factory=Cycles)
    render: RenderSettings = field(default_factory=RenderSettings)
    objects: dict[str, Tinted] = field(default_factory=tinted_objects)
    name: str = "s"


@dataclass
class Namespace:
    data: object = None
    ops: object = None
    render: object = None
    context: object = None
    materials: object = None


SOCKETS: list[Socket] = []


def socket() -> Socket:
    made = Socket()
    SOCKETS.append(made)
    return made


def link_new(a: Socket, b: Socket) -> Link:
    made = Link(a)
    b.links[:] = [made]
    b.is_linked = True
    return made


def link_remove(made: Link) -> None:
    for s in SOCKETS:
        if made in s.links:
            s.links.remove(made)
            s.is_linked = bool(s.links)


def node_new(nodes: Nodes, _kind: str) -> Node:
    if nodes.fail_after is not None and len(nodes.items) >= nodes.fail_after:
        msg = "nodes.new failed"
        raise FailureError(msg)
    made = Node({"Surface": socket(), 0: socket()}, [socket()])
    nodes.items.append(made)
    return made


def node_remove(nodes: Nodes, made: Node) -> None:
    nodes.items.remove(made)


def output_of(out: Node, _target: str) -> Node:
    return out


def no_value(_key: str) -> None:
    return None


def make_tree(fail_after: int | None) -> Tree:
    nodes = Nodes(fail_after)
    nodes.new = partial(node_new, nodes)
    nodes.remove = partial(node_remove, nodes)
    out = Node({"Surface": socket()}, [])
    source = socket()
    _ = link_new(source, out.inputs["Surface"])
    return Tree(nodes, Links(link_new, link_remove), out, source, partial(output_of, out))


def make_material(name: str, fail_after: int | None = None) -> Material:
    return Material(name, make_tree(fail_after), get=no_value)


def materials_new(self: list[Material], name: str) -> Material:
    made = make_material(name)
    self.append(made)
    return made


def render_fails(**_kwargs: object) -> None:
    msg = "render failed"
    raise FailureError(msg)


def render_works(**_kwargs: object) -> None:
    return None


def stub_module(name: str, **names: object) -> ModuleType:
    mod = ModuleType(name)
    mod.__dict__.update(names)
    sys.modules[name] = mod
    return mod


def install(*, render_ok: bool, materials: list[Material]) -> None:
    render = Namespace(render=render_works if render_ok else render_fails)
    _ = stub_module("bpy", data=Namespace(materials=materials), ops=Namespace(render=render), context=None)
    names = ("Material", "MaterialSlot", "Node", "NodeSocket", "Object", "Scene", "CyclesPreferences")
    _ = stub_module("bpy.types", **dict.fromkeys(names, object))
    _ = stub_module("bpy_extras")
    _ = stub_module("bpy_extras.object_utils", world_to_camera_view=None)
    _ = stub_module("mathutils", Vector=None)
    _ = stub_module("numpy", ndarray=object, float32=None)
    kept: dict[str, object] = {"GEOM_TYPES": ("MESH",), "IlApplied": object, "IL_STATE": {}, "STYLE3D": None}
    _ = stub_module("scene_state", IllOptions=object, IlState=object, **kept)
    _ = stub_module("scene_color", Vec3=object)
    _ = stub_module("scene_illus", illustrate_scene=None)
    sys.path.insert(0, str(BLENDER))


def call(name: str, module: str, *args: object, **kwargs: object) -> object:
    found: object = vars(importlib.import_module(module)).get(name)
    if not callable(found):
        msg = f"{module}.{name} is missing"
        raise TypeError(msg)
    return found(*args, **kwargs)


def run(materials: list[Material]) -> str:
    sc = Scene()
    state = call("PassState", "scene_post", fs0=True, samples=100, out_png="out.png")
    plan = call("PostPlan", "scene_post", tint=["a"], need_lines=True, cat=[], sun=None, need_shadow=False)
    paths = {"lines": "l", "mask": "m", "shadow": "s"}
    with contextlib.suppress(FailureError):
        _ = call("_run_passes", "scene_post", sc, Namespace(), plan, paths, state)
    linked = all(m.node_tree.out.inputs["Surface"].links[0].from_socket is m.node_tree.source for m in materials)
    nodes = sum(len(m.node_tree.nodes.items) for m in materials)
    return f"{sc.objects['a'].hide_render}:{linked}:{nodes}:{len(materials)}"


def device(case: str) -> None:
    install(render_ok=True, materials=[])
    real = sys.stdout
    sys.stdout = sys.stderr
    try:
        got = str(call("use_device", "scene_run", Scene(), case[len("device-") :]))
    except RuntimeError:
        got = "error"
    sys.stdout = real
    _ = sys.stdout.write(f"{got}\n")


def main(case: str) -> None:
    if case.startswith("device-"):
        device(case)
        return
    materials: list[Material] = type("Materials", (list,), {"new": materials_new})()
    install(render_ok=case != "render", materials=materials)
    mats = [make_material("M1"), make_material("M2", 0 if case == "setup" else None)]
    for m in mats:
        m.use_nodes = True
    materials.extend(mats)
    rounds = 3 if case == "repeat" else 1
    _ = sys.stdout.write(":".join(run(materials) for _ in range(rounds)) + "\n")


main(sys.argv[1])
