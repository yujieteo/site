def outer() -> int:
    def inner() -> int:
        return inner()

    return inner()
