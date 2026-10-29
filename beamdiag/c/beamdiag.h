#pragma once
#include <stdint.h>
typedef struct gs_stack gs_stack;
#pragma pack(push, 1)
typedef struct { uint8_t *base; int64_t len; } gs_rhdr;
typedef struct { gs_rhdr *hdr; gs_stack *stk; } gs_rref;
typedef struct { gs_rhdr *hdr; gs_stack *stk; gs_rhdr *fl; gs_stack *flstk; } gs_pref;

typedef struct { double e[23]; } a23_f64;

typedef struct { uint8_t *data; int64_t len; } sl_u8;

typedef struct { sl_u8 e[5]; } a5_sl_u8;

typedef struct { double e[45]; } a45_f64;

typedef struct { sl_u8 e[45]; } a45_sl_u8;

typedef struct { sl_u8 e[9]; } a9_sl_u8;

typedef struct Input_g Input_g;
struct Input_g {
    double length_g;
    double e_g;
    double nu_g;
    double a_g;
    double i_g;
    double iy_g;
    uint8_t has_iy_g;
    double j_g;
    uint8_t has_j_g;
    double c_g;
    uint8_t has_c_g;
    double divisions_g;
    uint8_t has_divisions_g;
    uint8_t has_supports_g;
    uint8_t has_loads_g;
};

typedef struct Model_g Model_g;
typedef struct Section_g Section_g;
struct Section_g {
    double a_g;
    double i_g;
    double iy_g;
    double j_g;
    double c_g;
    uint8_t has_c_g;
};

struct Model_g {
    double length_g;
    double e_g;
    double nu_g;
    Section_g section_g;
    int64_t divisions_g;
};

typedef struct { double e[5]; } a5_f64;

typedef struct Equilibrium_g Equilibrium_g;
struct Equilibrium_g {
    double fy_g;
    double mz_g;
    double scale_f_g;
    double scale_m_g;
};

typedef struct Extremes_g Extremes_g;
typedef struct Extreme_g Extreme_g;
struct Extreme_g {
    double x_g;
    double value_g;
};

struct Extremes_g {
    Extreme_g v_shear_g;
    Extreme_g m_g;
    Extreme_g v_g;
};

typedef struct { double e[3]; } a3_f64;

typedef struct { sl_u8 e[10]; } a10_sl_u8;

typedef struct { sl_u8 e[13]; } a13_sl_u8;

typedef struct Shape_g Shape_g;
struct Shape_g {
    int64_t shape_g;
    double b_g;
    uint8_t has_b_g;
    double h_g;
    uint8_t has_h_g;
    double d_g;
    uint8_t has_d_g;
    double t_g;
    uint8_t has_t_g;
    double a_g;
    uint8_t has_a_g;
    double i_g;
    uint8_t has_i_g;
    double iy_g;
    uint8_t has_iy_g;
    double j_g;
    uint8_t has_j_g;
    double c_g;
    uint8_t has_c_g;
};

typedef struct { int64_t e[5]; } a5_i64;

typedef struct { int64_t e[10]; } a10_i64;

typedef struct { double e[10]; } a10_f64;

typedef struct { uint32_t e[64]; } a64_u32;

typedef struct { sl_u8 e[11]; } a11_sl_u8;

typedef struct { sl_u8 e[14]; } a14_sl_u8;

typedef struct { double e[4]; } a4_f64;

typedef struct { uint8_t e[9]; } a9_b;

typedef struct { double e[9]; } a9_f64;

typedef struct { int64_t e[9]; } a9_i64;

typedef struct FigPanel_g FigPanel_g;
struct FigPanel_g {
    int64_t key_g;
    int64_t t0_g;
    int64_t t1_g;
    double h_g;
    int64_t color_g;
    int64_t q_g;
    double top_g;
    double bottom_g;
    double lo_g;
    double hi_g;
    int64_t k0_g;
    int64_t kn_g;
};

typedef struct { FigPanel_g e[3]; } a3_FigPanel_g;

typedef struct PFont_g PFont_g;
struct PFont_g {
    int64_t off_g;
    int64_t len_g;
    int64_t cm_g;
    int64_t ntab_g;
    int64_t hm_g;
    int64_t nh_g;
    int64_t m0_g;
    int64_t m1_g;
    int64_t m2_g;
    int64_t m3_g;
    int64_t m4_g;
    int64_t m5_g;
    double em_g;
};

typedef struct { PFont_g e[3]; } a3_PFont_g;

typedef struct { int32_t e[196608]; } a196608_i32;

typedef struct { int64_t e[14]; } a14_i64;

typedef struct { sl_u8 e[4]; } a4_sl_u8;

typedef struct { int64_t e[3]; } a3_i64;

typedef struct Digits_g Digits_g;
typedef struct { uint16_t len; uint8_t e[400]; } l400_u8;

struct Digits_g {
    l400_u8 d_g;
    int64_t e_g;
};

typedef struct { uint8_t e[1200]; } a1200_u8;

typedef struct { double *data; int64_t len; } sl_f64;

typedef struct Support_g Support_g;
typedef struct { Support_g *data; int64_t len; } sl_Support_g;

struct Support_g {
    int64_t kind_g;
    double x_g;
};

typedef struct Load_g Load_g;
typedef struct { Load_g *data; int64_t len; } sl_Load_g;

struct Load_g {
    int64_t kind_g;
    double x_g;
    double f_g;
    double c_g;
    double x1_g;
    double x2_g;
    double q1_g;
    double q2_g;
};

typedef struct Reaction_g Reaction_g;
typedef struct { Reaction_g *data; int64_t len; } sl_Reaction_g;

struct Reaction_g {
    int64_t kind_g;
    double x_g;
    double fy_g;
    double mz_g;
};

typedef struct Displacement_g Displacement_g;
struct Displacement_g {
    double x_g;
    double v_g;
    double theta_g;
};

typedef struct Fig_g Fig_g;
struct Fig_g {
    double w_g;
    double h_g;
    double ml_g;
    double mr_g;
    double l_g;
};

typedef struct FigLay_g FigLay_g;
struct FigLay_g {
    double ml_g;
    double mr_g;
    double w_g;
    double l_g;
};

typedef struct DPaint_g DPaint_g;
struct DPaint_g {
    int64_t stroke_g;
    double sw_g;
    int64_t fill_g;
    uint8_t has_op_g;
    double op_g;
    uint8_t round_g;
};

typedef struct At_g At_g;
struct At_g {
    double x_g;
    double v_left_g;
    double v_right_g;
    double m_left_g;
    double m_right_g;
    double v_g;
    double theta_g;
};

typedef struct Sample_g Sample_g;
typedef struct { Sample_g *data; int64_t len; } sl_Sample_g;

struct Sample_g {
    double x_g;
    double shear_g;
    double m_g;
    double v_g;
    double theta_g;
};

typedef struct DOp_g DOp_g;
struct DOp_g {
    int64_t kind_g;
    int64_t shape_g;
    double a_g;
    double b_g;
    double c_g;
    double d_g;
    double e_g;
    int64_t anchor_g;
    int64_t s0_g;
    int64_t s1_g;
    int64_t cls0_g;
    int64_t cls1_g;
    int64_t p0_g;
    int64_t p1_g;
    DPaint_g paint_g;
};

typedef struct HSeg_g HSeg_g;
typedef struct { double e[18]; } a18_f64;

struct HSeg_g {
    int64_t index_g;
    double a_g;
    double b_g;
    double xa_g;
    double xb_g;
    double h_g;
    double qa_g;
    double qb_g;
    double k_g;
    double sv_g;
    double sm_g;
    double st_g;
    double sd_g;
    double ev_g;
    double em_g;
    double et_g;
    double ed_g;
    double bv_g;
    double bm_g;
    a18_f64 poly_g;
    int64_t support_at_end_g;
};

typedef struct EvRec_g EvRec_g;
typedef struct { EvRec_g *data; int64_t len; } sl_EvRec_g;

typedef struct { uint16_t len; uint8_t e[2048]; } l2048_u8;

struct EvRec_g {
    double x_g;
    l2048_u8 what_g;
};

typedef struct Cells_g Cells_g;
typedef struct HAct_g HAct_g;
typedef struct { HAct_g *data; int64_t len; } sl_HAct_g;

struct HAct_g {
    double f_g;
    double mo_g;
    uint8_t has_f_g;
    uint8_t couple_g;
    double arm_g;
};

typedef struct { DOp_g *data; int64_t len; } sl_DOp_g;

typedef struct Material_g Material_g;
struct Material_g {
    sl_u8 id_g;
    sl_u8 label_g;
    double e_g;
    double nu_g;
};

typedef struct Preset_g Preset_g;
struct Preset_g {
    sl_u8 id_g;
    sl_u8 label_g;
    sl_u8 note_g;
    double length_g;
    sl_u8 material_g;
    int64_t sup_at_g;
    int64_t sup_n_g;
    int64_t load_at_g;
    int64_t load_n_g;
    Shape_g section_g;
};

typedef struct JNode_g JNode_g;
struct JNode_g {
    int64_t kind_g;
    int64_t ko_g;
    int64_t kl_g;
    int64_t so_g;
    int64_t sl_g;
    double num_g;
    uint8_t flag_g;
    int64_t next_g;
    int64_t first_g;
    int64_t last_g;
};

typedef struct SectionOption_g SectionOption_g;
struct SectionOption_g {
    sl_u8 id_g;
    sl_u8 label_g;
};

typedef struct StatItem_g StatItem_g;
typedef struct { uint8_t len; uint8_t e[160]; } l160_u8;

struct StatItem_g {
    l160_u8 v_g;
    l400_u8 w_g;
};

typedef struct { uint8_t len; uint8_t e[48]; } l48_u8;

typedef struct { l48_u8 e[8]; } a8_l48_u8;

struct Cells_g {
    a8_l48_u8 c_g;
};

typedef struct { uint8_t len; uint8_t e[64]; } l64_u8;

typedef struct { double e[16]; } a16_f64;

typedef struct { uint8_t len; int64_t e[144]; } l144_i64;

typedef struct { sl_u8 e[6]; } a6_sl_u8;

typedef struct Readout_g Readout_g;
typedef struct { uint8_t len; uint8_t e[8]; } l8_u8;

typedef struct { uint8_t len; uint8_t e[200]; } l200_u8;

struct Readout_g {
    l8_u8 k_g;
    l200_u8 v_g;
};

typedef struct DSeg_g DSeg_g;
struct DSeg_g {
    int64_t k_g;
    double a_g;
    double b_g;
    double c_g;
    double d_g;
    double e_g;
    double f_g;
};

typedef struct HReaction_g HReaction_g;
struct HReaction_g {
    int64_t i_g;
    int64_t kind_g;
    double x_g;
    double xi_g;
    double fy_g;
    double mz_g;
};

typedef struct HLoad_g HLoad_g;
struct HLoad_g {
    uint8_t dist_g;
    uint8_t moment_g;
    int64_t n_g;
    double x_g;
    double xi_g;
    double f_g;
    double c_g;
    double xi1_g;
    double xi2_g;
    double q1_g;
    double q2_g;
};

typedef struct HUnknown_g HUnknown_g;
struct HUnknown_g {
    int64_t kind_g;
    int64_t r_g;
};

typedef struct HTerm_g HTerm_g;
struct HTerm_g {
    double k_g;
    double a_g;
    int64_t p_g;
};

typedef struct HRow_g HRow_g;
struct HRow_g {
    int64_t kind_g;
    int64_t sup_g;
};

typedef struct { HTerm_g *data; int64_t len; } sl_HTerm_g;

typedef struct HJump_g HJump_g;
struct HJump_g {
    int64_t seg_g;
    int64_t kind_g;
    int64_t n_g;
    double value_g;
    uint8_t moment_g;
};

typedef struct HStat_g HStat_g;
struct HStat_g {
    int64_t seg_g;
    double s_g;
    double x_g;
    double m_g;
};

typedef struct HStep_g HStep_g;
struct HStep_g {
    uint8_t eq_g;
    int64_t t0_g;
    int64_t tl_g;
    int64_t u0_g;
    int64_t ul_g;
};

typedef struct { double e[2]; } a2_f64;

typedef struct { sl_u8 e[3]; } a3_sl_u8;

typedef struct { uint8_t e[4]; } a4_u8;

typedef struct Attach_g Attach_g;
struct Attach_g {
    uint8_t load_g;
    int64_t i_g;
    int64_t key_g;
    int64_t end_g;
    double at_g;
};

typedef struct { double e[8]; } a8_f64;

typedef struct { int64_t e[7]; } a7_i64;

typedef struct PPiece_g PPiece_g;
struct PPiece_g {
    int64_t font_g;
    int64_t script_g;
    int64_t g0_g;
    int64_t g1_g;
    double width_g;
};

typedef struct { uint32_t e[8]; } a8_u32;

typedef struct ByteSet_g ByteSet_g;
typedef struct { uint8_t e[256]; } a256_b;

typedef struct { uint8_t e[3]; } a3_u8;

typedef struct { uint8_t e[16]; } a16_u8;

struct ByteSet_g {
    a256_b members_g;
    uint8_t kind_g;
    uint8_t invert_g;
    a3_u8 bytes_g;
    a16_u8 lo_g;
    a16_u8 hi_g;
};

#pragma pack(pop)

#ifdef __cplusplus
extern "C" {
#endif
void goose_init(int argc, char **argv);
const uint8_t * bd_handle(sl_u8 gs_export_arg0, int64_t *gs_export_len);
#ifdef __cplusplus
}
#endif
