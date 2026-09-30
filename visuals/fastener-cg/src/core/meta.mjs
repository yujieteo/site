/* Tool identity and the conventions every report repeats. */

export const TOOL_NAME = "Fastener Pattern CG Tracker";
export const TOOL_VERSION = "0.1.0-m1";
export const MILESTONE = "M1";

export const CONVENTIONS = [
  "Right-handed axes: x right, y up, z toward the viewer.",
  "The faying surface is the plane z = 0; fasteners are located by (x, y) and z is the fastener axis.",
  "Positive Fz is tension: it pulls the loaded plate away from the other plate.",
  "Moments follow the right-hand rule about each axis; positive Mz is counter-clockwise viewed from +z.",
  "The origin is a user-defined datum.",
];

export const ASSUMPTIONS = [
  "Headline CG is the shear centroid Cs; J is about Cs; Ixx, Iyy and Ixy are about the axial centroid Ca.",
  "Elastic in-plane shear: rigid plate rotating about Cs, fasteners sharing load in proportion to ks.",
  "Axial method (a): rigid plate with the neutral axis through Ca; the joint is assumed to stay clamped (W-005). Unloading fasteners are shown as computed.",
  "Section properties are in length² × stiffness weight.",
  "All allowables are keyed in by the user; the tool ships none.",
];
