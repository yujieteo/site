#include <assert.h>
#include <stdint.h>
#include <stdlib.h>
#include "beamdiag.h"

#define BD_MAX_BYTES ((size_t)1 << 30)

static int64_t last_len;

uint8_t *alloc(size_t n) {
    assert(n < BD_MAX_BYTES);
    uint8_t *p = malloc(n ? n : 1);
    assert(p != 0);
    return p;
}

const uint8_t *handle(uint8_t *p, size_t n) {
    static int ready;
    assert(p != 0);
    assert(n < BD_MAX_BYTES);
    if (!ready) { goose_init(0, 0); ready = 1; }
    sl_u8 s = { p, (int64_t)n };
    const uint8_t *o = bd_handle(s, &last_len);
    free(p);
    assert(last_len >= 0);
    return o;
}

size_t out_len(void) {
    assert(last_len >= 0);
    assert((uint64_t)last_len < BD_MAX_BYTES);
    return (size_t)last_len;
}
