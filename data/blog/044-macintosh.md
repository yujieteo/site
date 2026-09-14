---
title: "Mac Set Up"
date: "2026-09-13"
summary: "Mac set up"
category: "Computing"
tags: "mac, setup"
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
brew install git gh stow tmux neovim ripgrep fzf jq mise uv
brew install anomalyco/tap/opencode
brew install --cask firefox alacritty visual-studio-code mactex
```

Install OpenClaw with its official installer:

```sh
curl -fsSL https://openclaw.ai/install.sh | bash
```

## Directories

Flat home dotfiles, not a canonical project tree. Use:

```sh
mkdir -p "$HOME/src" "$HOME/data" "$HOME/tmp" "$HOME/.ssh"
mkdir -p "$HOME/.dotfiles/home/.ssh"
mkdir -p "$HOME/.dotfiles/home/.config/alacritty"
mkdir -p "$HOME/.dotfiles/home/.config/nvim"
mkdir -p "$HOME/.dotfiles/vscode/Library/Application Support/Code/User"
chmod 700 "$HOME/data" "$HOME/.ssh"
```

```text
~/src   Git repositories
~/data  valuable non-Git files
~/tmp   disposable work
```

## Dotfiles

The real files live in two small Stow packages: portable home configuration
and the macOS path adapter for VS Code.

```sh
git init "$HOME/.dotfiles"

touch "$HOME/.dotfiles/home/.zshrc"
touch "$HOME/.dotfiles/home/.config/nvim/init.lua"
touch "$HOME/.dotfiles/home/.tmux.conf"
touch "$HOME/.dotfiles/home/.gitconfig"
touch "$HOME/.dotfiles/home/.gitignore_global"
touch "$HOME/.dotfiles/home/.ssh/config"
touch "$HOME/.dotfiles/home/.config/alacritty/alacritty.toml"
touch "$HOME/.dotfiles/vscode/Library/Application Support/Code/User/settings.json"
```

Stow will refuse to overwrite existing files. Move any existing configuration
into the matching path above first. Do not use `--adopt` blindly.

```sh
cd "$HOME/.dotfiles"
stow --target="$HOME" home vscode
```

```sh
ls -la "$HOME"/.zshrc "$HOME"/.config/nvim/init.lua "$HOME"/.tmux.conf
ls -la "$HOME"/.gitconfig "$HOME"/.gitignore_global "$HOME"/.ssh/config
ls -la "$HOME"/.config/alacritty/alacritty.toml
ls -la "$HOME/Library/Application Support/Code/User/settings.json"
```

### zsh

```sh
tee "$HOME/.dotfiles/home/.zshrc" >/dev/null <<'EOF'
export CLICOLOR=1
export EDITOR=nvim
export VISUAL=nvim
export PS1=$'%n@%m:\e[0;36m%~\e[0m$ '
eval "$(mise activate zsh)"
EOF
```

```sh
source "$HOME/.zshrc"
```

### Neovim

```sh
tee "$HOME/.dotfiles/home/.config/nvim/init.lua" >/dev/null <<'EOF'
vim.g.mapleader = " "

vim.opt.number = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.autoindent = true
vim.opt.hlsearch = true
vim.opt.ignorecase = true
vim.opt.smartcase = true
vim.opt.termguicolors = true

vim.keymap.set("n", "<Esc>", "<cmd>nohlsearch<CR>")

vim.api.nvim_create_autocmd("FileType", {
  pattern = "python",
  callback = function()
    vim.opt_local.makeprg = "uv run ruff check --output-format=concise %"
    vim.opt_local.errorformat = "%f:%l:%c: %m"
  end,
})

vim.keymap.set("n", "<leader>l", "<cmd>make<CR>", { desc = "Lint file" })
EOF
```

```sh
nvim "$HOME/.config/nvim/init.lua"
nvim --headless +qa
```

For Python files:

```vim
:make
:cnext
:cprevious
:cwindow
```

### tmux

```sh
tee "$HOME/.dotfiles/home/.tmux.conf" >/dev/null <<'EOF'
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

## Alacritty

```sh
tee "$HOME/.dotfiles/home/.config/alacritty/alacritty.toml" >/dev/null <<'EOF'
[window]
padding = { x = 8, y = 8 }
dynamic_padding = true
opacity = 1.0

[font]
normal = { family = "Menlo", style = "Regular" }
size = 14.0

[scrolling]
history = 5000

[selection]
save_to_clipboard = true

[terminal]
shell = { program = "/bin/zsh", args = ["-l"] }
EOF
```

```sh
open -a Alacritty
tmux new-session -A -s main
```

## VS Code

Keep the portable JSON in the dotfiles repository; Stow handles VS Code's
macOS-specific settings path.

```sh
tee "$HOME/.dotfiles/vscode/Library/Application Support/Code/User/settings.json" >/dev/null <<'EOF'
{
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.startupEditor": "none",
  "workbench.editor.enablePreview": false,
  "breadcrumbs.enabled": false,
  "editor.fontFamily": "Menlo, monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.minimap.enabled": false,
  "editor.stickyScroll.enabled": false,
  "editor.renderWhitespace": "selection",
  "editor.rulers": [88],
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "git.autofetch": false,
  "telemetry.telemetryLevel": "off",
  "vim.useSystemClipboard": true,
  "vim.handleKeys": {
    "<C-p>": false
  },
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.ruff": "explicit",
      "source.organizeImports.ruff": "explicit"
    }
  }
}
EOF
```

Install only the useful extensions:

```sh
code --install-extension vscodevim.vim
code --install-extension ms-python.python
code --install-extension charliermarsh.ruff
code --list-extensions | sort
```

```sh
cd "$HOME/src/REPOSITORY"
code .
```

## Git

Replace the email before running:

```sh
git config --global user.name "Teo Yu Jie"
git config --global user.email "YOUR_GITHUB_EMAIL"
git config --global init.defaultBranch main
git config --global core.editor nvim
git config --global pull.ff only
git config --global core.excludesFile "$HOME/.gitignore_global"
```

```sh
tee "$HOME/.dotfiles/home/.gitignore_global" >/dev/null <<'EOF'
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
tee "$HOME/.dotfiles/home/.ssh/config" >/dev/null <<'EOF'
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

Save only the explicit dotfiles:

```sh
git -C "$HOME/.dotfiles" add home vscode
git -C "$HOME/.dotfiles" commit -m "Initial configuration"
gh repo create dotfiles --private \
  --source="$HOME/.dotfiles" \
  --remote=origin \
  --push
```

Clone only the current project:

```sh
cd "$HOME/src"
gh repo clone USER/REPOSITORY
cd REPOSITORY
```

## Python

mise owns Python versions. uv owns projects and dependencies.

```sh
mise use --global python@3.14
mise exec -- python --version
uv --version
```

Create a project:

```sh
mkdir -p "$HOME/src/PROJECT"
cd "$HOME/src/PROJECT"
mise use python@3.14
uv init --python "$(mise which python)"
uv sync
```

Add and run dependencies:

```sh
uv add requests
uv add --dev pytest ruff
uv run pytest
uv run python
```

Commit the reproducible project state:

```sh
git add mise.toml pyproject.toml uv.lock
git commit -m "Set up Python project"
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
.venv/
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
nvim .env
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

## OpenClaw

OpenCode is the repository-local coding agent. OpenClaw is the persistent local
assistant and gateway.

Create a private, separate workspace:

```sh
mkdir -p "$HOME/.openclaw/workspace"
chmod 700 "$HOME/.openclaw" "$HOME/.openclaw/workspace"
```

Run the setup session if the installer did not already start it:

```sh
openclaw onboard --install-daemon
```

Choose:

```text
Gateway:   Local
Workspace: ~/.openclaw/workspace
Model:     authenticate one provider
Channels:  Skip
Skills:    Skip
Daemon:    Install
```

Lock down the first local session:

```sh
openclaw config set tools.profile coding
openclaw config set tools.fs.workspaceOnly true
openclaw config set tools.exec.mode deny
openclaw config set tools.deny '["exec","process","browser","group:messaging"]' --strict-json
chmod 600 "$HOME/.openclaw/openclaw.json"
openclaw gateway restart
```

Check the model, gateway and policy:

```sh
openclaw models list
openclaw gateway status
openclaw status --all
openclaw exec-policy show
openclaw security audit --deep
openclaw dashboard
```

Change model authentication later without putting credentials in `.env`:

```sh
openclaw models auth login --provider PROVIDER --set-default
openclaw models list
openclaw gateway restart
```

OpenClaw keeps config, authentication and memory under `~/.openclaw`. Do not
Stow or commit that directory.

## Work

```sh
cd "$HOME/src/REPOSITORY"
tmux new-session -A -s work
nvim .
opencode
```

Open the persistent assistant separately:

```sh
openclaw gateway status
openclaw dashboard
```

## Check

```sh
command -v git gh stow tmux nvim rg fzf jq mise uv python opencode openclaw alacritty code
mise doctor
mise current
uv --version
python --version
nvim --version | head -n 1
nvim --headless +qa
git config --global --list
gh auth status
ssh -T git@github.com
openclaw gateway status
openclaw status --all
openclaw security audit --deep
alacritty --version
code --version
code --list-extensions
firefox --version 2>/dev/null || open -a Firefox
```

## Restore

```sh
mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"
gh repo clone USER/dotfiles "$HOME/.dotfiles"
cd "$HOME/.dotfiles"
stow --target="$HOME" home vscode
```

Reinstall and re-onboard OpenClaw separately; never restore its authentication
from the public dotfiles repository.
