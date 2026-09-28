---
title: Mac Set Up
date: 2026-09-27
summary: Mac set up
category: Computing
tags: mac, setup
---

# Macintosh

A small, terminal-first Mac setup.

## Install

```
xcode-select --install
```

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Restart the shell, then:

```
brew update
brew install git gh stow neovim ripgrep fzf jq mise uv
brew install --cask google-chrome visual-studio-code mactex discord
```

Install herdr, the terminal agent multiplexer:

```
curl -fsSL https://herdr.dev/install.sh | sh
```

Install pi, the persistent local coding agent:

```
curl -fsSL https://pi.dev/install.sh | sh
```

Or install pi from npm with Node 22.19 or newer:

```
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Install the coding agents:

```
brew install --cask codex
curl -fsSL https://claude.ai/install.sh | bash
```

Codex's Chrome plugin is not installed here — it's added from inside the
Codex desktop app, under Plugins → add the Chrome plugin.

## Directories

Flat home dotfiles, not a canonical project tree. Use:

```
mkdir -p "$HOME/src" "$HOME/data" "$HOME/tmp" "$HOME/.ssh"
mkdir -p "$HOME/.dotfiles/home/.ssh"
mkdir -p "$HOME/.dotfiles/home/.config/alacritty"
mkdir -p "$HOME/.dotfiles/home/.config/nvim"
mkdir -p "$HOME/.dotfiles/vscode/Library/Application Support/Code/User"
chmod 700 "$HOME/data" "$HOME/.ssh"
```

```
~/src   Git repositories
~/data  valuable non-Git files
~/tmp   disposable work
```

## Dotfiles

The real files live in two small Stow packages: portable home configuration
and the macOS path adapter for VS Code.

```
git init "$HOME/.dotfiles"

touch "$HOME/.dotfiles/home/.zshrc"
touch "$HOME/.dotfiles/home/.config/nvim/init.lua"
touch "$HOME/.dotfiles/home/.gitconfig"
touch "$HOME/.dotfiles/home/.gitignore_global"
touch "$HOME/.dotfiles/home/.ssh/config"
touch "$HOME/.dotfiles/home/.config/alacritty/alacritty.toml"
touch "$HOME/.dotfiles/vscode/Library/Application Support/Code/User/settings.json"
```

Stow will refuse to overwrite existing files. Move any existing configuration
into the matching path above first. Do not use `--adopt` blindly.

```
cd "$HOME/.dotfiles"
stow --target="$HOME" home vscode
```

```
ls -la "$HOME"/.zshrc "$HOME"/.config/nvim/init.lua
ls -la "$HOME"/.gitconfig "$HOME"/.gitignore_global "$HOME"/.ssh/config
ls -la "$HOME"/.config/alacritty/alacritty.toml
ls -la "$HOME/Library/Application Support/Code/User/settings.json"
```

### zsh

```
tee "$HOME/.dotfiles/home/.zshrc" >/dev/null <<'EOF'
export CLICOLOR=1
export EDITOR=nvim
export VISUAL=nvim
export PS1=$'%n@%m:\e[0;36m%~\e[0m$ '
eval "$(mise activate zsh)"
EOF
```

```
source "$HOME/.zshrc"
```

### Neovim

```
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

```
nvim "$HOME/.config/nvim/init.lua"
nvim --headless +qa
```

For Python files:

```
:make
:cnext
:cprevious
:cwindow
```

## herdr

herdr replaces tmux as the terminal multiplexer. It works without a config
file — add one at `~/.config/herdr/config.toml` only if you want custom
keys, themes, or notifications; `herdr --default-config` prints a full
starting point.

Sharpen agent detection for the three agents installed above:

```
herdr integration install claude
herdr integration install codex
herdr integration install pi
```

```
herdr
```

First run opens a short onboarding flow. Press `n` to create a workspace,
run an agent in the pane, and `ctrl+b` to enter navigate mode. Detach with
`ctrl+b` then `q` — agents keep running in the background session.

## Alacritty

Homebrew disabled its Alacritty cask over a Gatekeeper check, so install the
release DMG from https://github.com/alacritty/alacritty/releases/latest.

```
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

```
open -a Alacritty
herdr
```

## VS Code

Keep the portable JSON in the dotfiles repository; Stow handles VS Code's
macOS-specific settings path.

```
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

```
code --install-extension vscodevim.vim
code --install-extension ms-python.python
code --install-extension charliermarsh.ruff
code --list-extensions | sort
```

```
cd "$HOME/src/REPOSITORY"
code .
```

## Git

Replace the email before running:

```
git config --global user.name "Teo Yu Jie"
git config --global user.email "YOUR_GITHUB_EMAIL"
git config --global init.defaultBranch main
git config --global core.editor nvim
git config --global pull.ff only
git config --global core.excludesFile "$HOME/.gitignore_global"
```

```
tee "$HOME/.dotfiles/home/.gitignore_global" >/dev/null <<'EOF'
.DS_Store
.env
.env.*
!.env.example
EOF
```

```
git config --global --list
```

## SSH and GitHub

```
chmod 700 "$HOME/.ssh"
ssh-keygen -t ed25519 -a 100 -C "$(git config --global user.email)"
```

Accept the default path, `~/.ssh/id_ed25519`, and enter a passphrase.

```
tee "$HOME/.dotfiles/home/.ssh/config" >/dev/null <<'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
  AddKeysToAgent yes
EOF
```

```
chmod 600 "$HOME/.ssh/config" "$HOME/.ssh/id_ed25519"
chmod 644 "$HOME/.ssh/id_ed25519.pub"
eval "$(ssh-agent -s)"
ssh-add "$HOME/.ssh/id_ed25519"
```

```
gh auth login --hostname github.com --git-protocol ssh --web
gh auth setup-git
gh auth status
ssh -T git@github.com
```

Save only the explicit dotfiles:

```
git -C "$HOME/.dotfiles" add home vscode
git -C "$HOME/.dotfiles" commit -m "Initial configuration"
gh repo create dotfiles --private \
  --source="$HOME/.dotfiles" \
  --remote=origin \
  --push
```

Clone only the current project:

```
cd "$HOME/src"
gh repo clone USER/REPOSITORY
cd REPOSITORY
```

## Python

mise owns Python versions. uv owns projects and dependencies.

```
mise use --global python@3.14
mise exec -- python --version
uv --version
```

Create a project:

```
mkdir -p "$HOME/src/PROJECT"
cd "$HOME/src/PROJECT"
mise use python@3.14
uv init --python "$(mise which python)"
uv sync
```

Add and run dependencies:

```
uv add requests
uv add --dev pytest ruff
uv run pytest
uv run python
```

Commit the reproducible project state:

```
git add mise.toml pyproject.toml uv.lock
git commit -m "Set up Python project"
```

## Project `.env`

Run inside a project:

```
cd "$HOME/src/REPOSITORY"
touch .env .env.example .gitignore
chmod 600 .env
```

```
tee -a .gitignore >/dev/null <<'EOF'
.venv/
.env
.env.*
!.env.example
EOF
```

Put names only in the committed template:

```
tee .env.example >/dev/null <<'EOF'
OPENAI_API_KEY=
DATABASE_URL=
EOF
```

Create the private local copy:

```
cp .env.example .env
nvim .env
```

Verify before committing:

```
git check-ignore -v .env
git add .gitignore .env.example
git status --short
```

For a trusted shell-compatible `.env`:

```
set -a
. ./.env
set +a
```

Never put secrets in `~/.zshrc`, `.env.example`, Git, or shell commands.
OpenCode credentials should instead be configured interactively:

```
opencode auth login
opencode auth list
```

## pi

OpenCode is the repository-local coding agent. pi is the persistent local
coding agent.

Authenticate a provider and choose a model inside the session:

```
pi
```

```
/login
/model
```

Check the version, model catalog and provider credentials:

```
pi --version
pi --list-models
pi auth check --provider PROVIDER
```

Change model authentication later without putting credentials in `.env`:

```
pi
```

```
/logout
/login
```

pi keeps configuration, credentials and session history under `~/.pi/agent`.
Do not Stow or commit that directory.

## SKILLS

Shared skills for both agents live in a separate repository:

```
cd "$HOME/src"
gh repo clone yujieteo/skills
```

Wiring this into Codex and Claude Code is still planned, not part of this
setup yet.

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

## Check

```
command -v git gh stow herdr nvim rg fzf jq mise uv python opencode pi codex claude alacritty code
mise doctor
mise current
uv --version
python --version
nvim --version | head -n 1
nvim --headless +qa
git config --global --list
gh auth status
ssh -T git@github.com
pi --version
pi auth check --provider PROVIDER
alacritty --version
code --version
code --list-extensions
codex --version
claude --version
google-chrome --version 2>/dev/null || open -a "Google Chrome"
open -a Discord
```

## Token-reduction tools

Accurate as of 2026-09-29. This space moves fast — re-check each tool
before relying on it; something here may be renamed, abandoned, or
superseded by the time you read this.

| Tool | What it does | Install |
| --- | --- | --- |
| Ponytail | Agent skill that nudges toward writing the least code needed (YAGNI-style edits), not a binary | add as a skill / AGENTS.md rule |
| RTK | Compresses tool and shell output before the agent reads it | `brew install rtk` or `cargo install --git https://github.com/rtk-ai/rtk` |
| Headroom | Compresses everything the agent reads — files, tool output, history | `pip install "headroom-ai[all]"` |
| QMD | Local markdown/notes search, so the agent queries instead of reading whole files | `npm i -g @tobilu/qmd` (upstream `tobi/qmd`) |
| Jev | Different category: a separate decision-model API (TypeSafe AI), not an output-trimmer; needs its own account and API key | sign up at TypeSafe AI for an API key |

## Restore

```
mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"
gh repo clone USER/dotfiles "$HOME/.dotfiles"
cd "$HOME/.dotfiles"
stow --target="$HOME" home vscode
```

Reinstall and re-authenticate pi separately; never restore its authentication
from the public dotfiles repository.
