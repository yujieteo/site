/* The C library calls beamdiag needs: exact decimal expansion and correctly rounded parsing of a double.
   JavaScript's number formatting is defined on the exact binary value, and snprintf gives that. */
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

#define BD_BUF 1200

/* "%.{prec}e" of x into out; the length, without the NUL. */
int64_t bd_fmt_e(double x, int64_t prec, uint8_t *out) { return snprintf((char *)out, BD_BUF, "%.*e", (int)prec, x); }
/* "%.{prec}f" of x into out. */
int64_t bd_fmt_f(double x, int64_t prec, uint8_t *out) { return snprintf((char *)out, BD_BUF, "%.*f", (int)prec, x); }
/* The double nearest the decimal text in out (NUL-terminated by the formatters above). */
double bd_strtod(uint8_t *in) { return strtod((const char *)in, 0); }
