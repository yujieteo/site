import sys
from functools import partial
from pathlib import Path
from types import ModuleType, SimpleNamespace

BLENDER = Path(".claude/skills/schematic-figure/foundation/blender").resolve()
SOCKETS: list[SimpleNamespace] = []


def socket() -> SimpleNamespace:
    made = SimpleNamespace(links=[], is_linked=False)
    SOCKETS.append(made)
    return made


def link_new(a: SimpleNamespace, b: SimpleNamespace) -> SimpleNamespace:
    made = SimpleNamespace(from_socket=a)
    b.links[:] = [made]
    b.is_linked = True
    return made


def link_remove(made: SimpleNamespace) -> None:
    for s in SOCKETS:
        if made in s.links:
            s.links.remove(made)
            s.is_linked = bool(s.links)


def node_new(nodes: SimpleNamespace, kind: str) -> SimpleNamespace:
    if nodes.fail_after is not None and len(nodes.items) >= nodes.fail_after:
        msg = "nodes.new failed"
        raise RuntimeError(msg)
    made = SimpleNamespace(kind=kind, inputs={"Surface": socket(), 0: socket()}, outputs=[socket()])
    nodes.items.append(made)
    return made


def node_remove(nodes: SimpleNamespace, made: SimpleNamespace) -> None:
    nodes.items.remove(made)


def output_of(out: SimpleNamespace, target: str) -> SimpleNamespace:
    return out


def no_value(key: str) -> None:
    return None


def make_tree(fail_after: int | None) -> SimpleNamespace:
    nodes = SimpleNamespace(items=[], fail_after=fail_after)
    nodes.new = partial(node_new, nodes)
    nodes.remove = partial(node_remove, nodes)
    out = SimpleNamespace(inputs={"Surface": socket()})
    source = socket()
    _ = link_new(source, out.inputs["Surface"])
    links = SimpleNamespace(new=link_new, remove=link_remove)
    return SimpleNamespace(nodes=nodes, links=links, out=out, source=source, get_output_node=partial(output_of, out))


def make_material(name: str, fail_after: int | None = None) -> SimpleNamespace:
    return SimpleNamespace(name=name, use_nodes=False, node_tree=make_tree(fail_after), get=no_value)


def materials_new(self: list[SimpleNamespace], name: str) -> SimpleNamespace:
    made = make_material(name)
    self.append(made)
    return made


def render_fails(**kwargs: object) -> None:
    msg = "render failed"
    raise RuntimeError(msg)


def render_works(**kwargs: object) -> None:
    return None


def stub_module(name: str, **names: object) -> ModuleType:
    mod = ModuleType(name)
    mod.__dict__.update(names)
    sys.modules[name] = mod
    return mod


def install(render_ok: bool) -> None:
    materials = type("Materials", (list,), {"new": materials_new})()
    render = SimpleNamespace(render=render_works if render_ok else render_fails)
    stub_module("bpy", data=SimpleNamespace(materials=materials), ops=SimpleNamespace(render=render), context=None)
    kinds = dict.fromkeys(("Material", "MaterialSlot", "Node", "NodeSocket", "Object", "Scene", "CyclesPreferences"), object)
    stub_module("bpy.types", **kinds)
    stub_module("bpy_extras")
    stub_module("bpy_extras.object_utils", world_to_camera_view=None)
    stub_module("mathutils", Vector=None)
    stub_module("numpy", ndarray=object, float32=None)
    stub_module("scene_state", GEOM_TYPES=("MESH",), IlApplied=object, IL_STATE={}, STYLE3D=None, IllOptions=object, IlState=object)
    stub_module("scene_color", Vec3=object)
    stub_module("scene_illus", illustrate_scene=None)
    sys.path.insert(0, str(BLENDER))


def make_scene() -> SimpleNamespace:
    cycles = SimpleNamespace(samples=100, device="CPU")
    render = SimpleNamespace(use_freestyle=True, filepath="out.png")
    return SimpleNamespace(cycles=cycles, render=render, objects={"a": SimpleNamespace(hide_render=False, material_slots=[])}, name="s")


def run(post: ModuleType, materials: list[SimpleNamespace]) -> str:
    sc = make_scene()
    state = post.PassState(fs0=True, samples=100, out_png="out.png")
    plan = post.PostPlan(tint=["a"], need_lines=True, cat=[], sun=None, need_shadow=False)
    try:
        post._run_passes(sc, SimpleNamespace(), plan, {"lines": "l", "mask": "m", "shadow": "s"}, state)
    except RuntimeError:
        pass
    linked = all(m.node_tree.out.inputs["Surface"].links[0].from_socket is m.node_tree.source for m in materials)
    nodes = sum(len(m.node_tree.nodes.items) for m in materials)
    return f"{sc.objects['a'].hide_render}:{linked}:{nodes}:{len(sys.modules['bpy'].data.materials)}"


def device(case: str) -> None:
    install(True)
    import scene_run

    sc = make_scene()
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
    install(case != "render")
    import scene_post

    mats = [make_material("M1"), make_material("M2", 0 if case == "setup" else None)]
    for m in mats:
        m.use_nodes = True
    sys.modules["bpy"].data.materials.extend(mats)
    rounds = 3 if case == "repeat" else 1
    print(":".join(run(scene_post, mats) for _ in range(rounds)))


main(sys.argv[1])
