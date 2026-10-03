---
title: Mac Set Up
date: 2026-10-03
summary: A reproducible Mac set up with nix-darwin, Home Manager and a pinned flake, with no GNU Stow
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

## Why this rewrite

A review of the setup found three different machines: the one this post
described, the one the dotfiles repository declared, and the one I was
actually using. The real Mac had no Nix at all. It ran on Homebrew, a pile of
`curl | sh` installers, global npm packages and an old GNU Stow checkout that
my apps kept writing into. My agent instructions and the `ste100` skill had
no history anywhere.

The flake now declares the machine I use, and this post describes the flake.

## Why Nix

The first version of this post was a list of commands, later a script that
ran them. Both describe *how* to reach a state, and both drift: `brew install`
gives whatever is newest that day, and every hand-written dotfile is a second
copy of something a tool could generate.

The flake describes *what* the machine is. `flake.lock` pins nixpkgs,
nix-darwin and Home Manager to exact commits on the 26.05 release branches, so
two Macs built from the same commit get the same packages, versions and
generated config files. Nothing changes until I run `nix flake update` and
commit the new lock. A bad change is one `sudo darwin-rebuild --rollback`
away.

Coding agents move faster than a stable release, so they come from
[numtide/llm-agents.nix](https://github.com/numtide/llm-agents.nix) instead.
It is pinned by the same lock, and `nix flake update llm-agents` moves only
the agents.

## No more Stow

Stow linked whole directories of the old checkout into `$HOME`. `~/.config`
was one link into the repository, so every app that wrote its config, logs or
sockets there wrote into Git. That is how the checkout and the machine drifted
apart without me noticing.

Home Manager links only the files I name, one `home.file` line each. Apps
write next to those files, not into the repository.

## What owns what

```
nix/host.nix   machine (nix-darwin): Homebrew casks, macOS defaults,
               firewall, Touch ID for sudo
nix/user.nix   user (Home Manager): CLI tools, coding agents, skills, zsh,
               Git, gh, SSH, mise, VS Code and its extensions, launchd jobs,
               ~/src ~/data ~/tmp
files/         configs and agent instructions I edit by hand, linked into
               $HOME (Neovim, Alacritty, tmux, herdr, VS Code settings,
               CLAUDE.md, ste100, Codex AGENTS.md)
seed/          agent settings the agents also change, copied once
setup/mac.sh   the bootstrap
```

The rule of thumb for adding a tool:

- a CLI tool or font goes in `home.packages`;
- a coding agent goes in `home.packages`, from llm-agents.nix;
- a GUI app that nixpkgs does not package well goes in `homebrew.casks`;
- a tool with a Home Manager module is configured through `programs.<tool>`,
  not a hand-written file;
- only a file I actually edit by hand lives in `files/`.

`seed/` is for files like the Claude Code and Codex settings, which the agents
rewrite themselves. Home Manager copies each one only when it is missing, so
after the first copy the agent owns it. To keep a change, I copy it back.

## Skills and agent instructions

My personal skills live in the public
[yujieteo/skills](https://github.com/yujieteo/skills) repository. The flake
takes it as a pinned input and links each skill into `~/.claude/skills` for
Claude Code and `~/.agents/skills` for Codex, OpenCode and pi. I edit skills
in a clone, push, then run `nix flake update skills` and rebuild.

The private pieces stay in the private dotfiles under `files/`: my global
`CLAUDE.md`, the Codex `AGENTS.md`, and the `ste100` skill that keeps my
writing in Simplified Technical English. They now have history, and the same
rebuild puts them back.

## Secrets

Nothing secret goes in the Nix files, `seed/`, Git or shell commands. API keys
live in one file outside the repository, readable only by me, which zsh reads
at start. I fill it by hand from the password manager. `gh`, Claude, OpenCode
and pi each sign in again on a new machine.

## macOS security basics

nix-darwin turns on the firewall (with stealth mode), Touch ID for `sudo`, and
automatic macOS updates. FileVault cannot be declared, so it stays manual:
System Settings → Privacy & Security → FileVault.

## What gets installed

From nixpkgs, pinned by the lock: the everyday CLI tools (`fzf`, `jq`,
`neovim`, `ripgrep`, `uv`, `tmux`, `node`, `bun`, bash 5, `ffmpeg`,
`gitleaks`, `yt-dlp` and a few more), zsh, Git, `gh`, mise, and VS Code with
its three extensions.

From llm-agents.nix, pinned by the lock:

```
claude-code codex opencode pi herdr rtk gnhf qmd
```

From Homebrew casks:

```
alacritty chatgpt claude discord google-chrome mactex
opensuperwhisper sony-ps-remote-play
```

`mactex` is several GB and its installer asks for the admin password.

Homebrew is the one layer the lock does not pin. To keep it predictable,
activation never runs `brew update` or `brew upgrade`, so the installed casks
change only when the list changes. Anything not on the list, including
something I `brew install`ed by hand, is uninstalled on the next rebuild: the
list is the truth.

A few tools have no package. `setup/mac.sh` installs `no-mistakes`,
`treehouse`, `headroom` and my global npm tools, with versions pinned in the
script where the tool allows it, and clones firstmate.

## Speech to text

[OpenSuperWhisper](https://github.com/starmel/OpenSuperWhisper) replaces Wispr
Flow. It is a Homebrew cask, and nix-darwin writes its settings: Whisper,
English, hold right Option to dictate. The model downloads in the app's
onboarding. Wispr Flow is no longer part of the setup.

## Shell, Git, SSH, Python

These are Home Manager modules rather than dotfiles:

- zsh sets `EDITOR` and `VISUAL` to `nvim`, keeps my plain prompt, activates
  mise, and defines `rebuild`.
- Git has my identity, `init.defaultBranch = main`, `pull.ff = only` and the
  global ignores (`.DS_Store`, `.env`, `.env.*` but not `.env.example`).
- `gh` uses SSH, and is set as Git's credential helper by its store path.
- SSH config is generated too, with `github.com` set up for Git.
- mise's global config sets Python 3.14. mise owns Python versions; uv owns
  projects and dependencies.

The generated files (`~/.zshrc`, `~/.config/git/config`, `~/.ssh/config`,
`~/.config/gh/config.yml`, `~/.config/mise/config.toml`) are read-only links
into the Nix store. So `git config --global`, `gh config set` and
`mise use --global` no longer work, which is the point: the change goes in
`nix/user.nix`, then `rebuild`.

VS Code extensions installed from inside VS Code do not survive a rebuild.
Its `settings.json` lives in `files/` and stays editable from the settings UI.

## Directories

```
~/src   Git repositories
~/data  valuable non-Git files
~/tmp   disposable work
```

Home Manager creates them and sets `~/data` to mode 700.

## Backups

No Time Machine. Code lives in Git remotes. The machine lives in the flake.
What is left (`~/data` and the firstmate records) goes to a private Git
repository or an encrypted disk image, by hand, before a reset and when it
changes. The firstmate copy is scanned with `gitleaks` before each commit.

## Restore a fresh Mac

The order matters, because the dotfiles repository is private and the clone
needs a credential first.

1. Make the user account, sign in to the Apple Account, and install all
   macOS updates.
2. Run `xcode-select --install` for `git`, `curl` and `ssh`.
3. Give the clone a GitHub credential: restore the SSH key from the password
   manager, make a new one and add it on github.com, or clone over HTTPS with
   a read-only fine-grained token.
4. Clone and bootstrap:

   ```
   git clone <dotfiles-repo> ~/dotfiles
   bash ~/dotfiles/setup/mac.sh
   ```

5. Work through the checklist the script prints (also
   `bash setup/mac.sh --checklist`).
6. Put back what is not in Git: secrets, `~/data`, and the firstmate records.

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
herdr      herdr integrations for claude, codex, opencode and pi
ssh        ssh-keygen, with a passphrase you type, if step 3 made no key
tools      no-mistakes, treehouse, headroom, npm tools, pi packages
firstmate  clone firstmate into ~/src
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

Still manual, and printed in the checklist: FileVault; signing in to GitHub,
Claude, OpenCode and pi; opening the GUI apps once to sign in; the
OpenSuperWhisper onboarding; and `no-mistakes init` in each repository that
uses the gate.

## Leaving Stow on a Mac that keeps its disk

After a reset there is nothing to do: do not restore the old checkout or
install `stow`.

On a Mac that keeps its disk, the old Stow links must go before the first
switch, or Home Manager and Stow fight over the same files. A script in the
dotfiles does it:

1. Quit VS Code, herdr, OpenCode and anything else that writes to `~/.config`.
2. Read the dry run, which lists each action and changes nothing:
   `bash ~/dotfiles/scripts/retire-stow.sh`.
3. Run it with `--apply`. It saves the old checkout's uncommitted changes
   to `~/data`, replaces each Stow link with a real copy of its target, and
   moves the old `~/.gitconfig` aside so it cannot override Home Manager's Git
   config. It removes only links, never files, and a second run does nothing.
4. Run the bootstrap as above.
5. Check the files and apps, then delete the old checkout by hand.

The first switch then removes every Homebrew formula and cask that is not
listed, `stow` included. Old copies of `claude`, `herdr` or `pi` in
`~/.local/bin` come before the flake on `PATH`, so I delete those by hand,
and Wispr Flow too.

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

nixpkgs 26.05 support ends on 2026-12-31, so the move to 26.11 is due when it
is released.

## Work

```
cd "$HOME/src/REPOSITORY"
herdr session attach work
nvim .
opencode
```

pi is the persistent local coding agent, and OpenCode is the
repository-local one. Open the persistent assistant separately:

```
pi --continue
```

firstmate, the agent distro for running a crew of coding agents, is cloned
into `~/src/firstmate` by the bootstrap. Its private records come back from
the backup, not from Git.

The same commit gives the same machine. Everything else is in the checklist.
