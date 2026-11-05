import .app;

export fn bd_handle(ev: const u8[:]) -> const u8[:] {
    app_init();
    assert(app_started);
    assert(ev.len < 1000000000);
    return handle_event(ev);
}
