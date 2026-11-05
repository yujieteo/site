#include <assert.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BD_BUF 1200

int64_t bd_fmt_e(double x, int64_t prec, uint8_t *out) {
    assert(out != 0);
    assert(prec >= 0 && prec < BD_BUF);
    int64_t n = snprintf((char *)out, BD_BUF, "%.*e", (int)prec, x);
    assert(n >= 0 && n < BD_BUF);
    return n;
}

int64_t bd_fmt_f(double x, int64_t prec, uint8_t *out) {
    assert(out != 0);
    assert(prec >= 0 && prec < BD_BUF);
    int64_t n = snprintf((char *)out, BD_BUF, "%.*f", (int)prec, x);
    assert(n >= 0 && n < BD_BUF);
    return n;
}

double bd_strtod(uint8_t *in) {
    assert(in != 0);
    assert(memchr(in, 0, BD_BUF) != 0);
    return strtod((const char *)in, 0);
}
