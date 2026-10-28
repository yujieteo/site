// The C side of the WebAssembly interface: alloc gives the host room for an event, handle runs it and
// returns the address of the commands, and out_len their length.
#include <stdint.h>
#include <stdlib.h>
#include "beamdiag.h"

static int64_t last_len;

uint8_t *alloc(size_t n) { return malloc(n ? n : 1); }

const uint8_t *handle(uint8_t *p, size_t n) {
    static int ready;
    if (!ready) { goose_init(0, 0); ready = 1; }
    sl_u8 s = { p, (int64_t)n };
    const uint8_t *o = bd_handle(s, &last_len);
    free(p);
    return o;
}

size_t out_len(void) { return (size_t)last_len; }
