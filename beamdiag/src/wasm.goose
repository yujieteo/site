// The WebAssembly interface: the host writes an event's JSON into memory (host.c allocates it), calls
// bd_handle, and reads the command JSON it returns.

import .app;

export fn bd_handle(ev: const u8[:]) -> const u8[:] {
    app_init();
    return handle_event(ev);
}
