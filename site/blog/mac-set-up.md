---
title: Mac Set Up
date: 2026-09-27
summary: A reproducible Mac set up with nix-darwin, Home Manager and a pinned flake
category: Computing
tags: mac, setup, nix
---

# Macintosh

A small, terminal-first Mac setup, declared in code.

The whole machine is described by a Nix flake in my private dotfiles
repository, in the style of
[kunchenguid/dotfiles-mac-nix](https://github.com/kunchenguid/dotfiles-mac-nix):
[nix-darwin](https://github.com/nix-darwin/nix-darwin) for the system,
[Home Manager](https://github.com/nix-community/home-manager) for my user, and
declarative Homebrew for the few GUI apps that are not in nixpkgs. A short
bootstrap script, `setup/mac.sh`, does the handful of things that have to
happen before Nix can take over.

## Why Nix

The previous version of this post was a list of commands, later a script that
ran them. Both describe *how* to reach a state, and both drift: `brew install`
gives whatever is newest that day, and every hand-written dotfile is a second
copy of something a tool could generate.

The flake describes *what* the machine is. `flake.lock` pins nixpkgs,
nix-darwin and Home Manager to exact commits on the 26.05 release branches, so
two Macs built from the same commit get the same packages, versions and
generated config files. Nothing changes until I run `nix flake update` and
commit the new lock. A bad change is one `sudo darwin-rebuild --rollback`
away.

## What owns what

```
nix/host.nix   machine (nix-darwin): Homebrew casks, macOS defaults,
               firewall, Touch ID for sudo
nix/user.nix   user (Home Manager): CLI tools, coding agents, zsh, Git,
               gh, SSH, mise, VS Code and its extensions, ~/src ~/data ~/tmp
files/         configs I edit by hand, linked into $HOME
               (Neovim, Alacritty, tmux, VS Code settings)
setup/mac.sh   the bootstrap
```

The rule of thumb for adding a tool:

- a CLI tool, font or coding agent goes in `home.packages`;
- a GUI app that nixpkgs does not package well goes in `homebrew.casks`;
- a tool with a Home Manager module is configured through `programs.<tool>`,
  not a hand-written file;
- only a file I actually edit by hand lives in `files/`.

## macOS security basics

nix-darwin turns on the firewall (with stealth mode), Touch ID for `sudo`, and
automatic macOS updates. FileVault cannot be declared, so it stays manual:
System Settings → Privacy & Security → FileVault.

## Install

```
git clone <dotfiles-repo> ~/dotfiles
bash ~/dotfiles/setup/mac.sh
```

The checkout must be at `~/dotfiles`, because the files under `files/` are
linked to it directly: an edit to `init.lua` applies without a rebuild. The
script refuses to run anywhere else, as root, or off macOS.

`setup/mac.sh` runs in one pass, and every step is skipped when its work is
already done:

```
xcode      xcode-select --install, then wait for the dialog
nix        the Determinate Nix installer, then source Nix into this shell
homebrew   the Homebrew installer (nix-darwin installs the casks with it)
activate   the first nix-darwin + Home Manager activation
herdr      the herdr installer, then its claude and codex integrations
ssh        ssh-keygen, with a passphrase you type
skills     gh repo clone yujieteo/skills ~/src/skills, once gh is signed in
```

The installers are downloaded to a temporary file and only run from there, so
a failed download stops the script instead of feeding half a script to a
shell. `sudo` is used for activation only.

The first activation is the interesting line. `darwin-rebuild` does not exist
yet, so the script runs it from the nix-darwin revision pinned in the lock
rather than from whatever `master` is today:

```
sudo nix run --inputs-from ~/dotfiles nix-darwin#darwin-rebuild -- \
  switch --flake ~/dotfiles#mac
```

Existing files that Home Manager would replace, such as an old `~/.zshrc`, are
renamed with a `.backup` suffix rather than deleted.

## What gets installed

From nixpkgs, pinned by the lock:

```
fzf jq neovim ripgrep uv
claude-code codex opencode
vscode + vscodevim.vim ms-python.python charliermarsh.ruff
zsh git gh mise
```

From Homebrew casks:

```
alacritty discord google-chrome mactex
```

`mactex` is several GB and its installer asks for the admin password.

Homebrew is the one layer the lock does not pin. To keep it predictable,
activation never runs `brew update` or `brew upgrade`, so the installed casks
change only when the list changes. Anything not on the list, including
something I `brew install`ed by hand, is uninstalled on the next rebuild: the
list is the truth.

herdr, the terminal agent multiplexer, is not in nixpkgs, so the script
installs it with `https://herdr.dev/install.sh` and runs
`herdr integration install claude` and `herdr integration install codex`.

## Shell, Git, SSH, Python

These are Home Manager modules rather than dotfiles:

- zsh sets `EDITOR` and `VISUAL` to `nvim`, keeps my plain
  `user@host:~/path$` prompt, activates mise, and defines `rebuild`.
- Git has my identity, `init.defaultBranch = main`, `pull.ff = only` and the
  global ignores (`.DS_Store`, `.env`, `.env.*` but not `.env.example`).
- `gh` uses SSH, and is set as Git's credential helper for github.com and
  gist.github.com by its store path, so there is no hard-coded
  `/opt/homebrew/bin/gh` any more.
- SSH has one host, `github.com`, with `~/.ssh/id_ed25519`,
  `IdentitiesOnly yes` and `AddKeysToAgent yes`.
- mise's global config sets Python 3.14. mise owns Python versions; uv owns
  projects and dependencies.

The generated files (`~/.zshrc`, `~/.config/git/config`, `~/.ssh/config`,
`~/.config/gh/config.yml`, `~/.config/mise/config.toml`) are read-only links
into the Nix store. So `git config --global`, `gh config set` and
`mise use --global` no longer work, which is the point: the change goes in
`nix/user.nix`, then `rebuild`.

VS Code and its three extensions come from nixpkgs too, and extensions
installed from inside VS Code do not survive a rebuild. Its `settings.json`
lives in `files/` and stays editable from the settings UI.

## Directories

```
~/src   Git repositories
~/data  valuable non-Git files
~/tmp   disposable work
```

Home Manager creates them, plus `~/.ssh`, and sets `~/data` and `~/.ssh` to
mode 700.

## Manual steps

The script prints these as a checklist at the end (or with `--checklist`).

Sign in to GitHub and check it:

```
gh auth login --hostname github.com --git-protocol ssh --web
gh auth status
ssh -T git@github.com
ssh-add ~/.ssh/id_ed25519
```

macOS already runs an SSH agent under launchd, so use `ssh-add` alone;
`eval "$(ssh-agent -s)"` would start a second, orphaned one. Re-run
`setup/mac.sh` afterwards to clone the skills repository.

- Turn on FileVault.
- Sign in to `claude` by running it once, and to OpenCode interactively
  rather than through `.env`: `opencode auth login`, then `opencode auth list`.
- Add the Codex Chrome plugin in the Codex desktop app (Plugins → add the
  Chrome plugin); the desktop app is not managed here.
- Open Alacritty, Google Chrome and Discord once, and sign in as you wish.
- herdr's first run opens a short onboarding flow. Press `n` to create a
  workspace, run an agent in the pane, and `ctrl+b` to enter navigate mode.
  Detach with `ctrl+b` then `q`; agents keep running in the background
  session.

Never put secrets in the Nix files, `.env.example`, Git, or shell commands.

## Changing things

```
$EDITOR ~/dotfiles/nix/user.nix
rebuild      # sudo darwin-rebuild switch --flake ~/dotfiles#mac
```

To move to newer versions, deliberately:

```
nix flake update
rebuild
```

then commit `flake.lock` with the change. CI evaluates the whole
`aarch64-darwin` system from the lock on every pull request, so an unknown
option, a missing package or a stale lock fails there rather than on the Mac.

## pi and firstmate

Neither is installed by the script; both are manual.

pi is the persistent local coding agent, and OpenCode is the repository-local
one. Install pi, then authenticate a provider and choose a model inside the
session:

```
curl -fsSL https://pi.dev/install.sh | sh
pi
```

```
/login
/model
```

Or install pi from npm with Node 22.19 or newer:

```
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

If you want herdr to detect pi as well, run `herdr integration install pi`;
the script only does this for `claude` and `codex`.

Check the version, model catalog and provider credentials:

```
pi --version
pi --list-models
pi auth check --provider PROVIDER
```

pi keeps configuration, credentials and session history under `~/.pi/agent`.
Do not link it from the dotfiles repository or commit it.

firstmate is the agent distro for running a crew of coding agents, by the same
author as no-mistakes. Clone it and launch a harness inside it:

```
cd "$HOME/src"
gh repo clone kunchenguid/firstmate
cd firstmate
pi
```

Approve the project trust prompt on first launch so its Pi extensions load. It
ships user-invocable skills under `.agents/skills/` — `/afk`, `/quiet`,
`/ahoy`, `/bearings`, `/updatefirstmate`, and `/stow` — plus agent-only
reference skills and a standalone public `skills/stow`. Workers load those
alongside the user-level skills under `~/.agents/skills/`.

## Work

```
cd "$HOME/src/REPOSITORY"
herdr session attach work
nvim .
opencode
```

Open the persistent assistant separately:

```
pi --continue
```

## Restore

```
git clone <dotfiles-repo> ~/dotfiles
bash ~/dotfiles/setup/mac.sh
```

The same commit gives the same machine.

Reinstall and re-authenticate pi separately; never restore its authentication
from the dotfiles repository.
