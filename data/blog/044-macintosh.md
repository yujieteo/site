---
title: "Macintosh"
date: "2026-09-13"
---

# Macintosh

A small, terminal-first Mac setup.

## Install

```sh
xcode-select --install
```

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Restart the shell, then:

```sh
brew update
brew install git gh tmux vim ripgrep fzf jq
brew install anomalyco/tap/opencode
brew install --cask firefox
```

## Directories

Geohot publishes flat home dotfiles, not a canonical project tree. Use:

```sh
mkdir -p "$HOME/src" "$HOME/data" "$HOME/tmp" "$HOME/.ssh"
chmod 700 "$HOME/data" "$HOME/.ssh"
```

```text
~/src   Git repositories
~/data  valuable non-Git files
~/tmp   disposable work
```

## Create the configuration files

These commands replace the named configuration files.

```sh
touch "$HOME/.zshrc"
touch "$HOME/.vimrc"
touch "$HOME/.tmux.conf"
touch "$HOME/.gitconfig"
touch "$HOME/.gitignore_global"
touch "$HOME/.ssh/config"
```

### zsh

```sh
tee "$HOME/.zshrc" >/dev/null <<'EOF'
export CLICOLOR=1
export EDITOR=vim
export VISUAL=vim
export PS1=$'%n@%m:\e[0;36m%~\e[0m$ '
EOF
```

```sh
source "$HOME/.zshrc"
```

### Vim

```sh
tee "$HOME/.vimrc" >/dev/null <<'EOF'
syntax on
set tabstop=2
set shiftwidth=2
set expandtab
set ai
set number
set hlsearch
set ruler
highlight Comment ctermfg=green
EOF
```

```sh
vim "$HOME/.vimrc"
```

### tmux

```sh
tee "$HOME/.tmux.conf" >/dev/null <<'EOF'
unbind C-b
set -g prefix `
bind-key ` last-window
bind-key e send-prefix

set -g status-position bottom
set -g status-bg colour234
set -g status-fg colour137
set -g status-left ''
set -g status-right '#[fg=colour233,bg=colour241,bold] %d/%m #[fg=colour233,bg=colour245,bold] %H:%M:%S '
set -g status-right-length 50
set -g status-left-length 20
setw -g mode-keys vi

setw -g window-status-current-format ' #I#[fg=colour250]:#[fg=colour255]#W#[fg=colour50]#F '
setw -g window-status-format ' #I#[fg=colour237]:#[fg=colour250]#W#[fg=colour244]#F '

set-option -g history-limit 5000
set -g extended-keys on
EOF
```

```sh
tmux new-session -s main
```

Inside tmux, reload later with:

```sh
tmux source-file "$HOME/.tmux.conf"
```

## Git

Replace the email before running:

```sh
git config --global user.name "Teo Yu Jie"
git config --global user.email "YOUR_GITHUB_EMAIL"
git config --global init.defaultBranch main
git config --global core.editor vim
git config --global pull.ff only
git config --global core.excludesFile "$HOME/.gitignore_global"
```

```sh
tee "$HOME/.gitignore_global" >/dev/null <<'EOF'
.DS_Store
.env
.env.*
!.env.example
EOF
```

```sh
git config --global --list
```

## SSH and GitHub

```sh
chmod 700 "$HOME/.ssh"
ssh-keygen -t ed25519 -a 100 -C "$(git config --global user.email)"
```

Accept the default path, `~/.ssh/id_ed25519`, and enter a passphrase.

```sh
tee "$HOME/.ssh/config" >/dev/null <<'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
  AddKeysToAgent yes
EOF
```

```sh
chmod 600 "$HOME/.ssh/config" "$HOME/.ssh/id_ed25519"
chmod 644 "$HOME/.ssh/id_ed25519.pub"
eval "$(ssh-agent -s)"
ssh-add "$HOME/.ssh/id_ed25519"
```

```sh
gh auth login --hostname github.com --git-protocol ssh --web
gh auth setup-git
gh auth status
ssh -T git@github.com
```

Clone only the current project:

```sh
cd "$HOME/src"
gh repo clone USER/REPOSITORY
cd REPOSITORY
```

## Project `.env`

Run inside a project:

```sh
cd "$HOME/src/REPOSITORY"
touch .env .env.example .gitignore
chmod 600 .env
```

```sh
tee -a .gitignore >/dev/null <<'EOF'
.env
.env.*
!.env.example
EOF
```

Put names only in the committed template:

```sh
tee .env.example >/dev/null <<'EOF'
OPENAI_API_KEY=
DATABASE_URL=
EOF
```

Create the private local copy:

```sh
cp .env.example .env
vim .env
```

Verify before committing:

```sh
git check-ignore -v .env
git add .gitignore .env.example
git status --short
```

For a trusted shell-compatible `.env`:

```sh
set -a
. ./.env
set +a
```

Never put secrets in `~/.zshrc`, `.env.example`, Git, or shell commands.
OpenCode credentials should instead be configured interactively:

```sh
opencode auth login
opencode auth list
```

## Work

```sh
cd "$HOME/src/REPOSITORY"
tmux new-session -A -s work
vim .
opencode
```

Install project compilers, runtimes, linters and TeX tools only when that
project requires them.

## Check

```sh
command -v git gh tmux vim rg fzf jq opencode
git config --global --list
gh auth status
ssh -T git@github.com
firefox --version 2>/dev/null || open -a Firefox
```
