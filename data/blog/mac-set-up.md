---
title: Mac Set Up
date: 2026-09-27
summary: Mac set up
category: Computing
tags: mac, setup
---

# Macintosh

A small, terminal-first Mac setup.

The setup is automated by `scripts/build-mac.sh` in my private dotfiles
repository. This post lists the steps in the order the script runs them, and
says which ones stay manual.

## macOS security basics

Manual, before running the script. In System Settings:

- Turn on FileVault (Privacy & Security).
- Turn on the firewall (Network).
- Turn on automatic software updates (General → Software Update).
- Add a fingerprint for Touch ID (Touch ID & Password).

## Install

```
xcode-select --install            # wait for the dialog to finish
git clone <dotfiles-repo> ~/dotfiles && cd ~/dotfiles
scripts/build-mac.sh --dry-run    # preview; changes nothing
scripts/build-mac.sh              # run it (asks once before making changes)
```

The steps, in order (`scripts/build-mac.sh --list`):

```
xcode homebrew packages herdr agents directories dotfiles
herdr-integration vscode-extensions ssh python skills verify
```

Every step is idempotent: work that is already done is skipped, and nothing is
deleted. The script never calls `sudo`; the Homebrew installer and the mactex
cask ask for the admin password themselves. Run a single step with
`--only STEP`, or leave one out with `--skip STEP`.

Add the Homebrew `PATH` line the installer printed to `~/.zprofile`, then
restart the shell. Neither this post nor the tracked dotfiles do it for you, so
without it the next `brew update` fails:

```
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### xcode, homebrew

The script runs `xcode-select --install` and waits for the dialog to finish,
then installs Homebrew.

Homebrew, herdr and Claude Code are installed by their official
`curl … | sh` installers, but the script never pipes them straight into a
shell. It downloads each one to a temporary file first, stops if the download
fails, and only then runs it from that file.

### packages

```
brew update
brew install git gh stow neovim ripgrep fzf jq mise uv
brew install --cask google-chrome alacritty visual-studio-code mactex discord
```

`mactex` is several GB and its installer asks for the admin password. Apps
already present in `/Applications` are skipped rather than reinstalled over.

### herdr, agents

The script installs herdr, the terminal agent multiplexer, from
`https://herdr.dev/install.sh`, then the coding agents: Codex through
`brew install codex`, and Claude Code through the official installer at
`https://claude.ai/install.sh`.

The Codex desktop app is not installed by the script. Codex's Chrome plugin is
added from inside that app, under Plugins → add the Chrome plugin; that is a
manual step.

### directories

```
~/src   Git repositories
~/data  valuable non-Git files
~/tmp   disposable work
```

The script creates them, plus `~/.ssh`, and sets `~/data` and `~/.ssh` to mode
700.

### dotfiles

`scripts/build-mac.sh` links the tracked `home/` and `vscode/` Stow packages
into `$HOME` with `--no-folding`, backing up conflicting files to
`~/dotfiles-backup/<timestamp>/`. `--no-folding` keeps `~/.ssh` and `~/.config`
as real directories, so no tool writes through a link into the repository.
`--adopt` is never used.

The linked files are the ones the repository tracks under `home/` and `vscode/`
— shell, Neovim, Alacritty, Git, SSH and VS Code settings. The repository is the
source of truth, so this post no longer repeats their contents. Tool-generated
files (`home/.config/gh`, VS Code caches and logs) are tracked only as a
snapshot and are never linked, so `gh` and VS Code never write into the working
tree.

The tracked `.gitconfig` already holds the Git settings, so there is no
`git config --global` block to run, and `gh auth setup-git` is skipped for the
same reason: after linking, `~/.gitconfig` points into the repository, and
those commands would edit it. Set the identity email in the repository before
the SSH step, because `ssh-keygen -C` reads it.

The repository has drifted from what this post used to say: it still tracks a
`.tmux.conf` although herdr replaces tmux, and its `alacritty.toml` is empty.
The script links whatever the repository contains.

### herdr-integration

The script runs `herdr integration install claude` and
`herdr integration install codex` to sharpen agent detection.

herdr works without a config file — add one at `~/.config/herdr/config.toml`
only if you want custom keys, themes, or notifications; `herdr --default-config`
prints a full starting point.

First run is manual:

```
open -a Alacritty
herdr
```

First run opens a short onboarding flow. Press `n` to create a workspace, run an
agent in the pane, and `ctrl+b` to enter navigate mode. Detach with `ctrl+b`
then `q` — agents keep running in the background session.

### vscode-extensions

The script installs the useful extensions only: `vscodevim.vim`,
`ms-python.python` and `charliermarsh.ruff`. If the `code` command is not on
`PATH`, open VS Code's Command Palette, run "Shell Command: Install 'code'
command in PATH", then:

```
scripts/build-mac.sh --only vscode-extensions,verify
```

### ssh

The script generates `~/.ssh/id_ed25519` if it does not exist
(`ssh-keygen -t ed25519 -a 100`, with the identity email as the comment), asks
you for a passphrase, and tightens the permissions on `~/.ssh/config` and the
key. If it has no terminal for the passphrase prompt, run the command yourself
and accept the default path:

```
ssh-keygen -t ed25519 -a 100 -C "$(git config --global user.email)"
```

Add the key to the agent. macOS already runs an agent under launchd, so use
`ssh-add` alone; `eval "$(ssh-agent -s)"` would start a second, orphaned one:

```
ssh-add ~/.ssh/id_ed25519
```

Signing in to GitHub is manual:

```
gh auth login --hostname github.com --git-protocol ssh --web
gh auth status
ssh -T git@github.com
```

### python

```
mise use --global python@3.14
```

mise owns Python versions. uv owns projects and dependencies. Creating a
project and its `.env` is per-project workflow, so it is left out of a
machine-setup post.

### skills

Shared skills for both agents live in a separate repository. The script clones
it to `~/src/skills` once `gh` is signed in; before that it leaves a note to
re-run `scripts/build-mac.sh --only skills`.

```
gh repo clone yujieteo/skills ~/src/skills
```

Wiring it into Codex and Claude Code is still planned and is not automated.

### verify

```
scripts/build-mac.sh --only verify
```

This read-only step checks that `git gh stow herdr nvim rg fzf jq mise uv codex
claude` are on `PATH`, that Alacritty and VS Code are installed, and that the
tools report their versions. It only warns about a missing `opencode`.

## Manual checks

The script prints these as a checklist at the end (or with `--checklist`):

```
gh auth status
ssh -T git@github.com
git config --global --list
```

- Sign in to `claude` by running it once.
- OpenCode is used below but not installed by the script. Install it yourself,
  then sign in interactively rather than through `.env`:

  ```
  opencode auth login
  opencode auth list
  ```

- Add the Codex Chrome plugin in the Codex desktop app.
- Open Alacritty, Google Chrome and Discord once, and sign in as you wish.

Never put secrets in `~/.zshrc`, `.env.example`, Git, or shell commands.

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
Do not Stow or commit that directory.

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
git clone <dotfiles-repo> ~/dotfiles && cd ~/dotfiles
scripts/build-mac.sh --dry-run
scripts/build-mac.sh
```

Reinstall and re-authenticate pi separately; never restore its authentication
from the dotfiles repository.
