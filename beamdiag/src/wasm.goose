import .app;

export fn bd_handle(ev: const u8[:]) -> const u8[:] {
    app_init();
    return handle_event(ev);
}
