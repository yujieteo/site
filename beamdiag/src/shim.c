#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

#define BD_BUF 1200

int64_t bd_fmt_e(double x, int64_t prec, uint8_t *out) { return snprintf((char *)out, BD_BUF, "%.*e", (int)prec, x); }
int64_t bd_fmt_f(double x, int64_t prec, uint8_t *out) { return snprintf((char *)out, BD_BUF, "%.*f", (int)prec, x); }
double bd_strtod(uint8_t *in) { return strtod((const char *)in, 0); }
