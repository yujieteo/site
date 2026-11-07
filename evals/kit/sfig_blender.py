import sys
from dataclasses import dataclass, field
from pathlib import Path
from types import ModuleType

BLENDER = Path(".claude/skills/schematic-figure/foundation/blender").resolve()


class Anything(ModuleType):
    def __getattr__(self, name: str) -> object:
        return object


@dataclass
class Link:
    from_socket: "Socket"


@dataclass
class Socket:
    links: list[Link] = field(default_factory=list)

    @property
    def is_linked(self) -> bool:
        return bool(self.links)


class Inputs(dict[str | int, Socket]):
    def __missing__(self, key: str | int) -> Socket:
        self[key] = Socket()
        return self[key]


def fresh_inputs() -> Inputs:
    return Inputs()


@dataclass
class Node:
    kind: str
    inputs: Inputs = field(default_factory=fresh_inputs)
    outputs: list[Socket] = field(default_factory=lambda: [Socket()])


class Nodes:
    def __init__(self, fail_after: int | None) -> None:
        self.items: list[Node] = []
        self.fail_after = fail_after

    def new(self, kind: str) -> Node:
        if self.fail_after is not None and len(self.items) >= self.fail_after:
            msg = "nodes.new failed"
            raise RuntimeError(msg)
        node = Node(kind)
        self.items.append(node)
        return node

    def remove(self, node: Node) -> None:
        self.items.remove(node)


class Links:
    def new(self, a: Socket, b: Socket) -> Link:
        link = Link(a)
        b.links[:] = [link]
        return link

    def remove(self, link: Link) -> None:
        for node_socket in ALL_SOCKETS:
            if link in node_socket.links:
                node_socket.links.remove(link)


ALL_SOCKETS: list[Socket] = []


class Tree:
    def __init__(self, fail_after: int | None = None) -> None:
        self.nodes = Nodes(fail_after)
        self.links = Links()
        self.out = Node("ShaderNodeOutputMaterial")
        ALL_SOCKETS.append(self.out.inputs["Surface"])
        source = Node("ShaderNodeBsdfDiffuse")
        self.source = source.outputs[0]
        _ = self.links.new(self.source, self.out.inputs["Surface"])

    def get_output_node(self, target: str) -> Node:
        return self.out


class Material:
    def __init__(self, name: str, fail_after: int | None = None) -> None:
        self.name = name
        self.use_nodes = False
        self.node_tree = Tree(fail_after)

    def get(self, key: str) -> None:
        return None


class Materials(list[Material]):
    def new(self, name: str) -> Material:
        mat = Material(name)
        self.append(mat)
        return mat


class Obj:
    hide_render = False
    material_slots: list[object] = []


def render_fails(**kwargs: object) -> None:
    msg = "render failed"
    raise RuntimeError(msg)


def render_works(**kwargs: object) -> None:
    return None


@dataclass
class Plan:
    tint: list[str]
    need_lines: bool
    cat: list[object]
    sun: None
    need_shadow: bool


def install(render_ok: bool) -> ModuleType:
    bpy = Anything("bpy")
    bpy.data = Anything("data")
    bpy.data.materials = Materials()
    bpy.ops = Anything("ops")
    bpy.ops.render = Anything("render")
    bpy.ops.render.render = render_works if render_ok else render_fails
    for name in ("bpy.types", "mathutils", "numpy", "scene_state", "scene_color", "scene_illus", "bpy_extras", "bpy_extras.object_utils"):
        sys.modules[name] = Anything(name)
    sys.modules["bpy"] = bpy
    sys.modules["scene_state"].GEOM_TYPES = ("MESH",)
    sys.path.insert(0, str(BLENDER))
    import scene_post

    return scene_post


class Cycles:
    samples = 100
    device = "CPU"


class Render:
    use_freestyle = True
    filepath = "out.png"


class Scene:
    def __init__(self) -> None:
        self.cycles = Cycles()
        self.render = Render()
        self.objects = {"a": Obj()}
        self.name = "s"


def run(post: ModuleType, materials: list[Material]) -> str:
    sc = Scene()
    info = Anything("info")
    state = post.PassState(fs0=True, samples=100, out_png="out.png")
    plan = Plan(tint=["a"], need_lines=True, cat=[], sun=None, need_shadow=False)
    try:
        post._run_passes(sc, info, plan, {"lines": "l", "mask": "m", "shadow": "s"}, state)
    except RuntimeError:
        pass
    linked = [m.node_tree.out.inputs["Surface"].links[0].from_socket is m.node_tree.source for m in materials]
    nodes = sum(len(m.node_tree.nodes.items) for m in materials)
    return f"{sc.objects['a'].hide_render}:{all(linked)}:{nodes}:{len(post.bpy.data.materials)}"


def device(case: str) -> None:
    install(True)
    import scene_run

    sc = Scene()
    sys.stdout = sys.stderr
    try:
        got = scene_run.use_device(sc, case[len("device-") :])
    except RuntimeError:
        got = "error"
    sys.stdout = sys.__stdout__
    print(got)


def main(case: str) -> None:
    if case.startswith("device-"):
        device(case)
        return
    post = install(case != "render")
    mats = [Material("M1"), Material("M2", 0 if case == "setup" else None)]
    for m in mats:
        m.use_nodes = True
    post.bpy.data.materials.extend(mats)
    ALL_SOCKETS.extend(m.node_tree.out.inputs["Surface"] for m in mats)
    if case == "repeat":
        print(":".join(run(post, mats) for _ in range(3)))
    else:
        print(run(post, mats))


main(sys.argv[1])
