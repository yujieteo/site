{
  description = "newsite: Rust to WebAssembly, one HTML page per story";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { nixpkgs, rust-overlay, ... }:
    let
      systems = [ "aarch64-darwin" "x86_64-darwin" "x86_64-linux" "aarch64-linux" ];
      each = f: nixpkgs.lib.genAttrs systems (system:
        f (import nixpkgs { inherit system; overlays = [ rust-overlay.overlays.default ]; }));
    in {
      # rust-toolchain.toml stays the one pin for the compiler and the wasm target.
      devShells = each (pkgs: {
        default = pkgs.mkShell {
          packages = [ (pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml) ];
        };
      });
    };
}
