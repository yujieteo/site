---

title: "Macintosh Setup"
date: "2026-09-13"
summary: "Minimal instructions for reconstructing my Macintosh."
category: "Systems"
tags: "macos, setup, homebrew, tooling"
expires: "2026-12-13"
---------------------

1. macOS updates, light mode, networking, FileVault, Find My, Time Machine.

2. `xcode-select --install`

3. Visit [brew.sh](https://brew.sh).

4. `brew install git gh vim uv jq ripgrep pandoc`

5. `brew install --cask visual-studio-code firefox discord mactex`

6. `gh auth login`

7. `mkdir -p ~/src ~/data`

8. `cd ~/src`

9. `mkdir configuration && cd configuration`

10. `touch .zshrc .gitconfig install.sh`

11. `chmod +x install.sh`

12. Add to `.zshrc`:

```sh
export EDITOR=vim
eval "$(~/.local/bin/mise activate zsh)"
```

13. Add to `.gitconfig`:

```ini
[user]
    name = Yu Jie Teo
    email = YOUR_EMAIL

[init]
    defaultBranch = main

[core]
    editor = vim
```

14. Add to `install.sh`:

```sh
#!/bin/sh
set -e

ln -sf ~/src/configuration/.zshrc ~/.zshrc
ln -sf ~/src/configuration/.gitconfig ~/.gitconfig

[ -f ~/src/configuration/.vimrc ] && \
    ln -sf ~/src/configuration/.vimrc ~/.vimrc

mkdir -p ~/.config
```

15. Create configuration repository:

```sh
git init
git add .
git commit -m "Initial Macintosh configuration"
gh repo create configuration --private --source=. --remote=origin --push
```

16. Install mise:

```sh
curl https://mise.run | sh
```

17. `source ~/.zshrc`

18. `mise doctor`

19. Install Node:

```sh
mise use --global node@24
```

20. Install Codex CLI:

```sh
npm install -g @openai/codex
```

21. `codex --login`

22. Install OpenClaw:

```sh
curl -fsSL https://openclaw.ai/install.sh | bash
```

23. Install Ollama:

```sh
brew install --cask ollama-app
```

24. Install qBittorrent from [qbittorrent.org](https://www.qbittorrent.org/).

25. Enable qBittorrent search engine and install required search plugins.

26. Clone repositories into `~/src`:

```sh
cd ~/src
gh repo clone USER/REPO
```

27. Project runtimes go in `mise.toml`:

```toml
[tools]
node = "24"
python = "3.13"
```

28. Inside each repository:

```sh
mise install
```

29. Python repositories:

```sh
uv sync
```

30. Secrets: keep API keys, tokens, recovery codes and credentials in a password manager. Never commit `.env`.

31. Commit `.env.example` only:

```text
OPENAI_API_KEY=
DISCORD_TOKEN=
DATABASE_URL=
```

32. Add to `.gitignore`:

```gitignore
.env
.env.*
!.env.example
```

33. Optional Vim configuration:

```sh
cd ~/src/configuration
touch .vimrc
```

34. Example `.vimrc`:

```vim
set number
set expandtab
set shiftwidth=4
set tabstop=4
```

35. Rebuild dotfiles after a wipe:

```sh
mkdir -p ~/src ~/data
cd ~/src
gh repo clone USER/configuration
cd configuration
./install.sh
```

36. Verify:

```sh
brew doctor
gh auth status
mise doctor
git --version
uv --version
jq --version
rg --version
pandoc --version
node --version
codex --version
openclaw --version
ollama --version
pdflatex --version
```

37. Every 90 days:

```sh
brew update
brew outdated
mise outdated
```

38. Update:

```yaml
date: "YYYY-MM-DD"
expires: "YYYY-MM-DD"
```

39. Full clean rebuild approximately once per year.
